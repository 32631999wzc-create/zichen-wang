import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const allowedMaxWidths = new Set([767, 1023]);
const violations = [];

function walk(directory) {
  if (!fs.existsSync(directory)) return;
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) walk(fullPath);
    else if (/\.(css|tsx?|jsx?)$/.test(entry.name)) inspect(fullPath);
  }
}

function inspect(filePath) {
  const source = fs.readFileSync(filePath, "utf8");
  const pattern = /\(max-width:\s*(\d+)px\)/g;
  for (const match of source.matchAll(pattern)) {
    const width = Number(match[1]);
    if (!allowedMaxWidths.has(width)) {
      const line = source.slice(0, match.index).split("\n").length;
      violations.push(`${path.relative(root, filePath)}:${line} uses ${width}px`);
    }
  }
}

walk(path.join(root, "src"));

if (violations.length) {
  console.error("Non-standard responsive breakpoints found:\n" + violations.map((item) => `- ${item}`).join("\n"));
  process.exit(1);
}

console.log("Responsive breakpoint check passed (767px / 1023px). QA viewports: 360, 390, 768, 1440, 1920px.");
