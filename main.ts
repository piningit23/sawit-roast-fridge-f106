// One Line, One Laugh: Roast Your Fridge
// Writes a single hand-written roast line (<= 200 chars) to /output/entry.txt.
// No network, no dependencies, no secrets. Deterministic output.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My fridge hums all night like it's composing a symphony, yet the only thing it ever finishes is the ice — and even that tastes like freezer burn and disappointment.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length} chars to ${outDir}/entry.txt`);
