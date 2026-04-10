import { cp, mkdir, rm, writeFile, readdir } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const portfolioRoot = join(__dirname, "..");
const dist = join(portfolioRoot, "dist");
const docs = join(portfolioRoot, "..", "docs");

await mkdir(docs, { recursive: true });

const entries = await readdir(docs, { withFileTypes: true }).catch(() => []);
for (const e of entries) {
  if (e.name === "README.md") continue;
  await rm(join(docs, e.name), { recursive: true, force: true });
}

await cp(dist, docs, { recursive: true });
await writeFile(join(docs, ".nojekyll"), "");
console.log("Build copiado para docs/. Inclui .nojekyll para o GitHub Pages não usar Jekyll no bundle.");
