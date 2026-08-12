import fs from "node:fs"
import path from "node:path"

const projectRoot = path.resolve(import.meta.dirname, "..")
const vaultRoot =
  process.env.UBC_VAULT ?? "/Users/yikewang/Library/Mobile Documents/com~apple~CloudDocs/UBC"
const contentRoot = path.join(projectRoot, "content")

const excludedTargets = new Set([
  "00 作业复盘索引",
  "第1次作业复盘-Unit 2 导数基础",
  "第2次作业复盘-Unit 3 复合隐函数与反函数",
  "01 - Differential Equations, a Tourist's Guide",
  "AP电磁学第1次正课-电荷库仑定律与电场",
  "AP电磁学第2次正课-连续带电体电场与电通量",
  "Electromagnetic Damping",
  "Gauss's Law",
  "RC Circuits",
  "UBC Knowledge Graph",
  "串讲课",
])

function listMarkdown(directory) {
  return fs
    .readdirSync(directory, { recursive: true, withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
    .map((entry) => path.join(entry.parentPath, entry.name))
}

function basename(file) {
  return path.basename(file, ".md").normalize("NFC")
}

function wikiTargets(text) {
  return [...text.matchAll(/!??\[\[([^\]]+)\]\]/g)].map((match) =>
    match[1].split(/[|#]/, 1)[0].trim().normalize("NFC"),
  )
}

function titleFrom(text, fallback) {
  return text.match(/^#\s+(.+)$/m)?.[1].trim() ?? fallback
}

function yamlQuote(value) {
  return JSON.stringify(value)
}

function stripPrivateMetadata(text) {
  let body = text.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, "")
  body = body.replace(/^\s*\[Open Obsidian search[^\n]*\n?/gim, "")
  body = body.replace(/^.*obsidian:\/\/.*\n?/gim, "")
  body = body.replace(/\/Users\/yikewang\/[^\s)\]}>"']+/g, "[local source removed]")
  body = body.replace(/^## Context Check \/ 上下文校验$/gm, "## Reading Note / 阅读说明")
  body = body.replace(/^finneas[：:]\s*/gim, "")
  body = body
    .split(/\r?\n/)
    .filter(
      (line) =>
        !/AP电磁学第\d+次正课|作业复盘|Context Check \/ 上下文校验|finneas[：:]|^- Source:/.test(
          line,
        ) && ![...excludedTargets].some((target) => line.includes(target)),
    )
    .join("\n")
  return body.trim() + "\n"
}

const allFiles = listMarkdown(vaultRoot)
const byName = new Map()
for (const file of allFiles) {
  const name = basename(file)
  const matches = byName.get(name) ?? []
  matches.push(file)
  byName.set(name, matches)
}

const calculusRoot = path.join(vaultRoot, "Courses", "AP Calculus BC")
const visualRoot = path.join(vaultRoot, "Resources", "3Blue1Brown", "The Essence of Calculus")
const selected = new Set([
  ...listMarkdown(calculusRoot).filter(
    (file) => !file.includes(`${path.sep}作业与复盘${path.sep}`),
  ),
  ...listMarkdown(visualRoot),
])

const sourceNotes = [...selected]
for (const file of sourceNotes) {
  const text = fs.readFileSync(file, "utf8")
  for (const target of wikiTargets(text)) {
    if (excludedTargets.has(target)) continue
    const matches = byName.get(target) ?? []
    const concept = matches.find((candidate) =>
      candidate.startsWith(path.join(vaultRoot, "Concepts") + path.sep),
    )
    if (concept && !selected.has(concept)) {
      selected.add(concept)
    }
  }
}

function destinationFor(file) {
  const name = basename(file)
  if (file === path.join(calculusRoot, "微积分BC Orientation-考试结构与课程地图.md")) {
    return path.join(contentRoot, "课程笔记", `${name}.md`)
  }
  if (file.startsWith(calculusRoot + path.sep)) {
    const lesson = name.match(/第(\d+)次正课/)?.[1]
    if (!lesson) throw new Error(`Cannot find lecture number: ${file}`)
    return path.join(contentRoot, "课程笔记", `${name}.md`)
  }
  if (file.startsWith(visualRoot + path.sep)) {
    return path.join(contentRoot, "视觉微积分", `${name}.md`)
  }
  return path.join(contentRoot, "概念卡片", `${name}.md`)
}

const selectedNames = new Set([...selected].map(basename))

function rewriteWikiLinks(text) {
  return text.replace(/(!?)\[\[([^\]]+)\]\]/g, (_match, embed, inner) => {
    const pipeIndex = inner.indexOf("|")
    const left = pipeIndex >= 0 ? inner.slice(0, pipeIndex) : inner
    const display = pipeIndex >= 0 ? inner.slice(pipeIndex + 1) : ""
    const hashIndex = left.indexOf("#")
    const target = (hashIndex >= 0 ? left.slice(0, hashIndex) : left).trim().normalize("NFC")
    const anchor = hashIndex >= 0 ? left.slice(hashIndex) : ""
    const label = display || target
    if (!selectedNames.has(target) || excludedTargets.has(target)) return embed ? label : label
    return `${embed}[[${target}${anchor}${display ? `|${display}` : ""}]]`
  })
}

fs.rmSync(contentRoot, { recursive: true, force: true })
fs.mkdirSync(contentRoot, { recursive: true })

const records = []
for (const file of [...selected].sort()) {
  const name = basename(file)
  const destination = destinationFor(file)
  let body = stripPrivateMetadata(fs.readFileSync(file, "utf8"))
  body = rewriteWikiLinks(body)
  const title = titleFrom(body, name)
  const category = destination.includes("课程笔记")
    ? "course-note"
    : destination.includes("视觉微积分")
      ? "visual-calculus"
      : "concept-card"
  const frontmatter = [
    "---",
    `title: ${yamlQuote(title)}`,
    `description: ${yamlQuote(`A connected bilingual calculus note about ${title}.`)}`,
    "publish: true",
    `tags: [calculus, ${category}]`,
    "---",
    "",
  ].join("\n")
  fs.mkdirSync(path.dirname(destination), { recursive: true })
  fs.writeFileSync(destination, frontmatter + body)
  records.push({ name, destination, category })
}

const lectureOrder = (name) =>
  name.includes("Orientation") ? 0 : Number(name.match(/第(\d+)次正课/)?.[1] ?? 99)
const lectures = records
  .filter((record) => record.category === "course-note")
  .sort((a, b) => lectureOrder(a.name) - lectureOrder(b.name))
const visualNotes = records
  .filter((record) => record.category === "visual-calculus")
  .sort((a, b) => a.name.localeCompare(b.name))
const concepts = records
  .filter((record) => record.category === "concept-card")
  .sort((a, b) => a.name.localeCompare(b.name))

const links = (items) => items.map((item) => `- [[${item.name}]]`).join("\n")
const home = `---
title: 微积分脉络
description: 从极限、导数与积分，到无穷级数的中英双语微积分知识网络。
publish: true
tags: [calculus, index]
---

# 微积分脉络

> **A connected path through calculus: intuition, formal structure, and problem-solving.**  
> 从直觉出发，用正式语言把极限、导数、积分、微分方程与无穷级数连接成一条可以反复回看的知识脉络。

这里不是逐字课堂记录，而是一套可阅读、可检索、可沿链接探索的双语微积分笔记。英文保留考试与教材中的核心表达，中文负责解释为什么以及各知识点如何连接。

## Start Here / 从这里开始

- [[微积分BC Orientation-考试结构与课程地图|课程地图]]：按 AP Calculus BC 的 14 节课程走完整条主线。
- [[01 - The Essence of Calculus|视觉微积分]]：配合 3Blue1Brown 视频建立几何直觉。
- [[概念地图]]：按 Limits → Derivatives → Integrals → Series 的脉络复习。
- 使用左侧搜索寻找术语；使用右侧关系图与 Backlinks 查看知识如何相连。

## Course Spine / 课程主线

${links(lectures)}

## Visual Calculus / 视觉微积分

${links(visualNotes)}

## About / 关于

笔记由 Finneas Wang 整理。范围、来源说明与勘误方式见 [[关于本站]]。
`

const conceptMap = `---
title: 概念地图
description: Calculus concepts arranged as a connected review path.
publish: true
tags: [calculus, index, concept-card]
---

# 概念地图

## The Mainline / 主脉络

[[Limits]] → [[Derivatives]] → [[Definite Integral|Integrals]] → [[Differential Equations]] → [[Infinite Sequence and Series]] → [[Taylor Series]]

## Three Questions / 三个核心问题

1. **What value is being approached?** → [[Limits]]
2. **How is the quantity changing right now?** → [[Derivatives]]
3. **How much change has accumulated?** → [[Definite Integral|Integrals]]

## All Concept Cards / 全部概念卡

${links(concepts)}
`

const about = `---
title: 关于本站
description: Scope, attribution, and editorial principles for Calculus Atlas.
publish: true
tags: [about]
---

# 关于本站

这是 Finneas Wang 的公开微积分知识库。它以个人课程笔记为基础，目标是帮助读者像读一本连接起来的书一样回忆课堂内容，并在观看可视化课程时快速找到对应的正式定义、公式与解题方法。

## Editorial Principles / 整理原则

- **English core, Chinese explanation**：保留英文教材和考试中的核心句，中文解释直觉、推理与易错点。
- **Concept first**：围绕知识脉络组织内容，不发布逐字 transcript。
- **Connected notes**：使用 Wiki Links 与 Backlinks，把课堂、视觉直觉和概念卡连成网络。
- **Privacy first**：公开仓库只包含经过白名单导出的内容，不包含原始 Obsidian 库、个人作业记录、原始字幕、PDF 或本地文件路径。

## Attribution / 来源说明

“视觉微积分”部分是观看 3Blue1Brown *Essence of Calculus* 系列后整理的学习笔记。本站不托管原视频或字幕，3Blue1Brown 的视频及相关视觉创意归原作者所有。课程名称 AP Calculus BC 属于 College Board；本站是独立学习资源，与 College Board 无隶属关系。

## Corrections / 勘误

数学内容仍可能存在遗漏或错误。公开仓库上线后，可通过仓库 Issue 提交具体页面与修改理由。
`

fs.writeFileSync(path.join(contentRoot, "index.md"), home)
fs.writeFileSync(path.join(contentRoot, "概念地图.md"), conceptMap)
fs.writeFileSync(path.join(contentRoot, "关于本站.md"), about)

const manifest = `# Public Content Manifest

This repository contains an independently generated, sanitized public copy.

- Course notes: ${lectures.length}
- Visual calculus notes: ${visualNotes.length}
- Concept cards: ${concepts.length}
- Generated index/about pages: 3

Excluded by policy: homework and rework notes, physics and summer courses, raw transcripts, PDFs, Obsidian configuration, absolute local paths, and links to non-public notes.
`
fs.writeFileSync(path.join(projectRoot, "PUBLIC_MANIFEST.md"), manifest)

console.log(
  `Exported ${records.length + 3} pages: ${lectures.length} course, ${visualNotes.length} visual, ${concepts.length} concepts, 3 generated.`,
)
