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
```

Requires Node.js v18+ and pnpm v11+.

## Architecture

Single-page portfolio with no routing. Root component (`WebPortfolioApp.tsx`) composes `Navbar` + three section components rendered sequentially.

**Folder conventions:**
- `src/components/layout/` — app chrome (Navbar)
- `src/components/sections/` — full-page sections (Hero, Experience, Projects)
- `src/components/ui/` — reusable primitives (ExperienceCard, TechPill)
- `src/data/*.data.ts` — static content as typed objects; re-exported via `src/data/index.ts`
- `src/types/` — TypeScript interfaces; re-exported via `src/types/index.ts`
- `src/hooks/` — reusable React hooks (useInView)

**Adding content:** All portfolio content lives in `src/data/`. New entries only require updating the relevant `.data.ts` file — no component changes needed unless the data shape changes.

**Media:** Project media is declared in `projects.data.ts` as a `ProjectMedia[]` discriminated union (`image` | `video`). Videos require a `poster` and render via `LazyVideo`, which only mounts the `<video>` once it scrolls into view. Encode videos to 720p H.264 (`-crf 28 -movflags +faststart -an`) and images to WebP at ~1200px before adding them — source files at full resolution should never enter the repo.

**Styling:** Tailwind CSS v4 utility classes only — no CSS modules, no CSS-in-JS. Responsive breakpoint is `md:`.

**Icons:** React Icons library (`react-icons`). Tech stack icons are mapped in `src/data/techLogos.data.ts` to icon components and Tailwind color classes.

**Tooling notes:**
- React Compiler (`babel-plugin-react-compiler`) is enabled — avoid manual `useMemo`/`useCallback` unless debugging compiler output.
- ESLint uses the flat config format (`eslint.config.js`); Prettier is integrated via `eslint-config-prettier`.
- TypeScript strict mode: unused locals/parameters are errors.
