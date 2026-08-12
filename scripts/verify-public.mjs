import fs from "node:fs"
import path from "node:path"

const root = path.resolve(import.meta.dirname, "..")
const content = path.join(root, "content")
const publicDir = path.join(root, "public")

function filesUnder(directory) {
  return fs
    .readdirSync(directory, { recursive: true, withFileTypes: true })
    .filter((entry) => entry.isFile())
    .map((entry) => path.join(entry.parentPath, entry.name))
}

const forbidden = [
  ["absolute macOS path", /\/Users\//i],
  ["Obsidian application URL", /obsidian:\/\//i],
  ["raw transcript or document filename", /\.(?:docx|srt|pdf)(?:\b|["')\]])/i],
  ["homework review material", /作业复盘/],
  ["physics course material", /AP电磁学第\d+次正课/],
  ["private context marker", /finneas[：:]|Context Check \/ 上下文校验/i],
]

const failures = []
for (const file of [...filesUnder(content), ...filesUnder(publicDir)]) {
  if (!/\.(?:md|html|json|xml|txt)$/i.test(file)) continue
  const text = fs.readFileSync(file, "utf8")
  for (const [label, pattern] of forbidden) {
    if (pattern.test(text)) failures.push(`${label}: ${path.relative(root, file)}`)
  }
}

const markdown = filesUnder(content).filter((file) => file.endsWith(".md"))
const names = new Set(markdown.map((file) => path.basename(file, ".md").normalize("NFC")))
for (const file of markdown) {
  const text = fs.readFileSync(file, "utf8")
  for (const match of text.matchAll(/!??\[\[([^\]]+)\]\]/g)) {
    const target = match[1].split(/[|#]/, 1)[0].trim().normalize("NFC")
    if (!names.has(target))
      failures.push(`unresolved wiki link '${target}': ${path.relative(root, file)}`)
  }
}

if (!fs.existsSync(path.join(publicDir, "index.html"))) failures.push("missing public/index.html")
if (failures.length > 0) {
  console.error([...new Set(failures)].join("\n"))
  process.exit(1)
}

console.log(`PUBLIC_VERIFY_OK pages=${markdown.length} files=${filesUnder(publicDir).length}`)
