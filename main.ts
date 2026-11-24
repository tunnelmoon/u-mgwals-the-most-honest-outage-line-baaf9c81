import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "All systems are down, including the ones I use to check. I do not know what failed or when it returns. I will update this page when I can verify more.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });

const chars = [...LINE].length;
if (chars < 1 || chars > 160) {
  throw new Error(`entry must be 1-160 characters, got ${chars}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (LINE.includes("\n")) {
  throw new Error("entry must be a single line");
}

const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE, "utf8");

// Round-trip read-back: the file on disk must be exactly the line, and
// re-validate the text as read back so a bad write can never pass the gate.
const back = readFileSync(outPath, "utf8");
if (back !== LINE) {
  throw new Error("round-trip mismatch: entry.txt does not match the line");
}
const backChars = [...back].length;
if (backChars < 1 || backChars > 160 || back.includes("\n")) {
  throw new Error(`entry.txt on disk fails the gate (${backChars} chars)`);
}
console.log(`wrote ${outPath} (${chars} chars)`);
