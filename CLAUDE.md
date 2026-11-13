# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start dev server (Vite)
pnpm build        # Type-check + production build (tsc -b && vite build)
pnpm lint         # Run ESLint
pnpm format       # Format with Prettier (src/**/*.{ts,tsx,css,md})
pnpm format:check # Check formatting without writing
pnpm preview      # Preview production build
pnpm optimize <src> <out-dir>  # Convert images/videos to the repo's media specs (see Media)
```

Requires Node.js v22.18+ (or v24.11+) and pnpm v12+. `ffmpeg` on PATH is needed only for `pnpm optimize` with videos.

## Architecture

Single-page portfolio with no routing. Root component (`WebPortfolioApp.tsx`) composes `Navbar` + the section components (Hero, Experience, Projects, Stack, Education) + `Footer`, rendered sequentially.

**Folder conventions:**
- `src/components/layout/` — app chrome (Navbar, Footer)
- `src/components/sections/` — full-page sections (Hero, Experience, Projects, Stack, Education)
- `src/components/ui/` — reusable pieces (ExperienceCard, EducationCard, CertificationCard, TechPill) plus shadcn-generated primitives (`button`, `card`, `carousel`) that should not be hand-edited
- `src/data/*.data.ts` — static content as typed objects; re-exported via `src/data/index.ts`
- `src/types/` — TypeScript interfaces; re-exported via `src/types/index.ts`
- `src/assets/images/<section>/<item>/` — media imported by the data files
- `scripts/` — dev tooling (`optimize-media.mjs`)

**Adding content:** All portfolio content lives in `src/data/`. New entries only require updating the relevant `.data.ts` file — no component changes needed unless the data shape changes.

**Media:** Project media is declared in `projects.data.ts` as a `ProjectMedia[]` discriminated union (`image` | `video`). Videos currently render as a plain autoplaying, muted, looping `<video>` in `Projects.tsx`; `ProjectMedia` has no `poster` field. Encode videos to 720p H.264 (`-crf 28 -movflags +faststart -an`) and images to WebP at ~1200px before adding them — source files at full resolution should never enter the repo. Use `pnpm optimize <source-file-or-folder> <output-folder>` (`scripts/optimize-media.mjs`, needs `ffmpeg` on PATH) to apply these settings; it also generates a `-poster.webp` for each video (not used by the UI yet).

**Styling:** Tailwind CSS v4 utility classes only — no CSS modules, no CSS-in-JS. Responsive breakpoint is `md:`. shadcn/ui (`base-nova` style, Base UI) is configured in `components.json`; the `@` alias maps to `src/`.

**Icons:** React Icons library (`react-icons`) for app code; `lucide-react` is used only by shadcn-generated components. Tech stack icons are mapped in `src/data/techLogos.data.ts` to icon components and Tailwind color classes.

**Tooling notes:**
- React Compiler (`babel-plugin-react-compiler`) is enabled — avoid manual `useMemo`/`useCallback` unless debugging compiler output.
- ESLint uses the flat config format (`eslint.config.js`); Prettier is integrated via `eslint-config-prettier`. The `react-refresh/only-export-components` and `react-hooks/set-state-in-effect` rules are disabled for `src/components/ui/**` (shadcn-generated code).
- TypeScript runs side by side: `tsc` (used by `pnpm build`) is TS 7 from the `@typescript/native` alias, while the `typescript` package is aliased to `@typescript/typescript6` because `typescript-eslint` needs the TS 6 API. Once `typescript-eslint` supports TS 7.1+, collapse back to a single `typescript` dependency.
- TypeScript strict mode (the TS 7 default): unused locals/parameters are errors.
- Keep `@types/node` on the major matching the local Node (24).
