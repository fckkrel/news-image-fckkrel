// News-image entry: Friday 20 November 2026 front page.
// The image is baked into this repo as entry.png (rendered from entry.html,
// a 1024x1024 newspaper front page). This program just places a copy of it
// at /output/entry.png, where the grader reads it. Node 22, stdlib only,
// no network, no dependencies.
//
// Local run:  mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target = join(outDir, 'entry.png');

mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, 'entry.png'), target);

// The grader runs this program twice and compares the bytes, so the copy
// must be byte-for-byte identical every run: copyFileSync copies the file
// as-is, with no re-encoding, which keeps both runs identical.
console.log(`wrote ${target}`);
