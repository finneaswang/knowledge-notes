import fs from "node:fs"
import path from "node:path"

const root = path.resolve(import.meta.dirname, "..")
const content = path.join(root, "content")
const publicDir = path.join(root, "public")
const vaultRoot =
  process.env.UBC_VAULT ?? "/Users/yikewang/Library/Mobile Documents/com~apple~CloudDocs/UBC"

function filesUnder(directory) {
  return fs
    .readdirSync(directory, { recursive: true, withFileTypes: true })
    .filter((entry) => entry.isFile())
    .map((entry) => path.join(entry.parentPath, entry.name))
}

const forbidden = [
  ["absolute local path", /\/(?:Users|home)\//i],
  ["Obsidian application URL", /obsidian:\/\//i],
  ["raw source filename", /\.(?:docx|srt|pdf)(?:\b|["')\]])/i],
  ["private share URL", /chatgpt\.com\/share\//i],
  ["personal name or context marker", /finneas(?:\s+wang)?[：:]?|Context Check \/ 上下文校验/i],
  ["email address", /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i],
  ["phone-like identifier", /(?<!\d)(?:\+?86[- ]?)?1[3-9]\d{9}(?!\d)/],
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
const sourceMarkdown = filesUnder(vaultRoot).filter(
  (file) => file.endsWith(".md") && !file.includes(`${path.sep}.obsidian${path.sep}`),
)
if (markdown.length !== sourceMarkdown.length + 3) {
  failures.push(
    `coverage mismatch: public=${markdown.length}, source=${sourceMarkdown.length}, generated=3`,
  )
}

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

const htmlFiles = filesUnder(publicDir).filter((file) => file.endsWith(".html"))
const routeFor = (file) => {
  const relative = path.relative(publicDir, file).split(path.sep).join("/")
  if (relative === "index.html") return ""
  if (relative.endsWith("/index.html")) return relative.slice(0, -"/index.html".length)
  return relative.slice(0, -".html".length)
}
const routes = new Map(htmlFiles.map((file) => [routeFor(file), file]))
const ids = new Map(
  htmlFiles.map((file) => [
    routeFor(file),
    new Set(
      [...fs.readFileSync(file, "utf8").matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]),
    ),
  ]),
)
let checkedRoutes = 0
let checkedAnchors = 0
for (const file of htmlFiles) {
  const html = fs.readFileSync(file, "utf8")
  const sourceRoute = routeFor(file)
  const base = `https://public-notes.invalid/${sourceRoute}`
  for (const match of html.matchAll(/href="([^"]+)"/g)) {
    const href = match[1]
    if (
      /^(?:https?:|mailto:|tel:|javascript:)/.test(href) ||
      href === "#" ||
      /\.(?:css|js|xml|ico|png|jpe?g|svg|woff2?)(?:[?#]|$)/i.test(href)
    ) {
      continue
    }
    let url
    try {
      url = new URL(href, base)
    } catch {
      failures.push(`invalid internal URL '${href}': ${path.relative(root, file)}`)
      continue
    }
    if (url.host !== "public-notes.invalid") continue
    const targetRoute = decodeURIComponent(url.pathname).replace(/^\//, "").replace(/\/$/, "")
    checkedRoutes += 1
    if (!routes.has(targetRoute)) {
      failures.push(`missing built route '${targetRoute}': ${path.relative(root, file)}`)
      continue
    }
    if (url.hash) {
      checkedAnchors += 1
      const targetId = decodeURIComponent(url.hash.slice(1))
      if (!ids.get(targetRoute).has(targetId)) {
        failures.push(`missing built anchor '${targetId}': ${path.relative(root, file)}`)
      }
    }
  }
}

if (failures.length > 0) {
  console.error([...new Set(failures)].join("\n"))
  process.exit(1)
}

console.log(
  `PUBLIC_VERIFY_OK source=${sourceMarkdown.length} pages=${markdown.length} files=${filesUnder(publicDir).length} routes=${checkedRoutes} anchors=${checkedAnchors}`,
)
