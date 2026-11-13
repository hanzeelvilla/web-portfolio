#!/usr/bin/env node
// Optimizes media following the rules in CLAUDE.md:
//   images -> WebP, max 1200px wide (never upscaled)
//   videos -> 720p H.264, -crf 28, +faststart, no audio (+ WebP poster frame)
//
// Usage: pnpm optimize <source-file-or-folder> <output-folder>
// Requires ffmpeg on PATH for videos.

import { execFileSync } from "node:child_process";
import { mkdirSync, readdirSync, statSync } from "node:fs";
import { basename, extname, join, resolve } from "node:path";
import sharp from "sharp";

const IMAGE_EXTS = new Set([".png", ".jpg", ".jpeg", ".webp", ".avif", ".tiff"]);
const VIDEO_EXTS = new Set([".mp4", ".mov", ".mkv", ".webm", ".avi"]);
const MAX_IMAGE_WIDTH = 1200;

const [source, output] = process.argv.slice(2);

if (!source || !output) {
  console.error("Usage: pnpm optimize <source-file-or-folder> <output-folder>");
  process.exit(1);
}

const sourcePath = resolve(source);
const outputDir = resolve(output);
mkdirSync(outputDir, { recursive: true });

const files = statSync(sourcePath).isDirectory()
  ? readdirSync(sourcePath).map((name) => join(sourcePath, name))
  : [sourcePath];

const kb = (bytes) => `${(bytes / 1024).toFixed(0)} kB`;

async function optimizeImage(file, outFile) {
  const info = await sharp(file)
    .resize({ width: MAX_IMAGE_WIDTH, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(outFile);
  console.log(`image  ${basename(file)} -> ${basename(outFile)} (${info.width}x${info.height}, ${kb(info.size)})`);
}

function optimizeVideo(file, outFile, posterFile) {
  // scale=-2:720 keeps the aspect ratio with an even width; min() avoids upscaling.
  execFileSync(
    "ffmpeg",
    [
      "-y", "-loglevel", "error", "-i", file,
      "-vf", "scale=-2:'min(720,ih)'",
      "-c:v", "libx264", "-crf", "28", "-movflags", "+faststart", "-an",
      outFile,
    ],
    { stdio: "inherit" },
  );
  // Poster: first frame, as WebP (required for videos in projects.data.ts).
  execFileSync(
    "ffmpeg",
    ["-y", "-loglevel", "error", "-i", outFile, "-frames:v", "1", posterFile],
    { stdio: "inherit" },
  );
  console.log(`video  ${basename(file)} -> ${basename(outFile)} + ${basename(posterFile)}`);
}

let processed = 0;

for (const file of files) {
  const ext = extname(file).toLowerCase();
  const name = basename(file, extname(file));

  if (IMAGE_EXTS.has(ext)) {
    await optimizeImage(file, join(outputDir, `${name}.webp`));
    processed++;
  } else if (VIDEO_EXTS.has(ext)) {
    optimizeVideo(file, join(outputDir, `${name}.mp4`), join(outputDir, `${name}-poster.webp`));
    processed++;
  }
}

if (processed === 0) {
  console.error("No supported images or videos found.");
  process.exit(1);
}
console.log(`Done: ${processed} file(s) in ${outputDir}`);
