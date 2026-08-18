import fs from "node:fs"
import path from "node:path"

const projectRoot = path.resolve(import.meta.dirname, "..")
const vaultRoot =
  process.env.UBC_VAULT ?? "/Users/yikewang/Library/Mobile Documents/com~apple~CloudDocs/UBC"
const contentRoot = path.join(projectRoot, "content")

function listMarkdown(directory) {
  return fs
    .readdirSync(directory, { recursive: true, withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
    .map((entry) => path.join(entry.parentPath, entry.name))
}

function basename(file) {
  return path.basename(file, ".md").normalize("NFC")
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
  body = body.replace(/\/Users\/[^\s)\]}\>"']+/g, "[private local source removed]")
  body = body.replace(
    /https?:\/\/(?:www\.)?chatgpt\.com\/share\/[^\s)\]}\>"']+/gi,
    "[private discussion removed]",
  )
  body = body.replace(
    /https?:\/\/canvas\.ubc\.ca\/[^\s)\]}\>"']+/gi,
    "[course platform link removed]",
  )
  body = body.replace(/`[^`\n]*\.(?:docx|srt|pdf)`/gi, "the course transcript")
  body = body.replace(/[^\s`"']+\.(?:docx|srt|pdf)/gi, "the course material")
  body = body.replace(/^## Context Check \/ 上下文校验$/gm, "## Reading Guide / 阅读说明")
  body = body.replace(/#Context Check \/ 上下文校验/g, "#Reading Guide / 阅读说明")
  body = body.replace(/Context Check \/ 上下文校验/g, "Reading Guide / 阅读说明")
  body = body.replace(/\bcontext check:/gi, "Editorial note:")
  body = body.replace(/Finneas Wang/gi, "某某")
  body = body.replace(/\bYike(?:[_\s-]+Wang)?\b/gi, "某某")
  body = body.replace(/finneas[：:]?\s*/gi, "")
  body = body.replace(/你明确说明/g, "课程内容表明")
  body = body.replace(/你(?:的)?(?:扫描)?作业/g, "这份练习")
  body = body.replace(/这份扫描作业的正式基线/g, "这份练习复盘的分析基线")
  body = body.replace(/^## Source Files \/ 原始材料\s*$[\s\S]*?(?=^## |\Z)/gim, "")
  body = body
    .split(/\r?\n/)
    .filter(
      (line) =>
        !/^\s*-?\s*(?:Source|source)\s*:/i.test(line) &&
        !/(?:^|\s)(?:\/Users\/|obsidian:\/\/|chatgpt\.com\/share\/)/i.test(line) &&
        !/(?:Capstone 已提交|完成证书已下载|明确显示课程完成)/i.test(line),
    )
    .join("\n")
  return body.trim() + "\n"
}

function destinationFor(file) {
  const relative = path.relative(vaultRoot, file)
  const name = `${basename(file)}.md`

  if (relative.startsWith(`Concepts${path.sep}`)) return path.join(contentRoot, "概念卡片", name)
  if (relative.startsWith(`Courses${path.sep}AP Calculus BC${path.sep}作业与复盘${path.sep}`)) {
    return path.join(contentRoot, "课程", "微积分", "练习复盘", name)
  }
  if (relative.startsWith(`Courses${path.sep}AP Calculus BC${path.sep}`)) {
    return path.join(contentRoot, "课程", "微积分", name)
  }
  if (
    relative.startsWith(
      `Courses${path.sep}AP Physics C${path.sep}Electricity and Magnetism${path.sep}`,
    )
  ) {
    return path.join(contentRoot, "课程", "物理", "电磁学", name)
  }
  if (relative.startsWith(`Courses${path.sep}AP Physics C${path.sep}Mechanics${path.sep}`)) {
    return path.join(contentRoot, "课程", "物理", "力学", name)
  }
  if (relative.startsWith(`Courses${path.sep}AP Physics C${path.sep}`)) {
    return path.join(contentRoot, "课程", "物理", name)
  }
  if (relative.startsWith(`Courses${path.sep}Academic Essentials${path.sep}`)) {
    return path.join(contentRoot, "课程", "学术基础", name)
  }
  if (relative.startsWith(`Courses${path.sep}Summer Preparatory Courses${path.sep}`)) {
    return path.join(contentRoot, "课程", "大学写作", name)
  }
  if (relative.startsWith(`Resources${path.sep}3Blue1Brown${path.sep}The Essence of Calculus`)) {
    return path.join(contentRoot, "视频伴读", "3Blue1Brown-微积分", name)
  }
  if (relative.startsWith(`Resources${path.sep}3Blue1Brown${path.sep}Differential Equations`)) {
    return path.join(contentRoot, "视频伴读", "3Blue1Brown-微分方程", name)
  }
  if (relative === "UBC Knowledge Graph.md") return path.join(contentRoot, name)
  return path.join(contentRoot, "概念卡片", name)
}

function categoryFor(destination) {
  const relative = path.relative(contentRoot, destination)
  if (relative.startsWith(`课程${path.sep}微积分${path.sep}练习复盘`)) return "calculus-review"
  if (relative.startsWith(`课程${path.sep}微积分`)) return "calculus-course"
  if (relative.startsWith(`课程${path.sep}物理${path.sep}力学`)) return "physics-mechanics"
  if (relative.startsWith(`课程${path.sep}物理${path.sep}电磁学`)) return "physics-electromagnetism"
  if (relative.startsWith(`课程${path.sep}物理`)) return "physics-course"
  if (relative.startsWith(`课程${path.sep}学术基础`)) return "academic-essentials"
  if (relative.startsWith(`课程${path.sep}大学写作`)) return "writing-course"
  if (relative.startsWith(`视频伴读${path.sep}3Blue1Brown-微积分`)) return "visual-calculus"
  if (relative.startsWith(`视频伴读${path.sep}3Blue1Brown-微分方程`))
    return "visual-differential-equations"
  if (path.basename(destination) === "UBC Knowledge Graph.md") return "knowledge-map"
  return "concept-card"
}

function rewriteWikiLinks(text, allNames) {
  return text.replace(/(!?)\[\[([^\]]+)\]\]/g, (_match, embed, inner) => {
    const pipeIndex = inner.indexOf("|")
    const left = pipeIndex >= 0 ? inner.slice(0, pipeIndex) : inner
    const display = pipeIndex >= 0 ? inner.slice(pipeIndex + 1) : ""
    const hashIndex = left.indexOf("#")
    const target = (hashIndex >= 0 ? left.slice(0, hashIndex) : left).trim().normalize("NFC")
    let anchor = hashIndex >= 0 ? left.slice(hashIndex) : ""
    anchor = anchor.replace("#Context Check / 上下文校验", "#Reading Guide / 阅读说明")
    const label = display || target
    if (!allNames.has(target)) return embed ? label : label
    return `${embed}[[${target}${anchor}${display ? `|${display}` : ""}]]`
  })
}

const sourceFiles = listMarkdown(vaultRoot).sort()
const sourceNames = sourceFiles.map(basename)
const allNames = new Set(sourceNames)
if (allNames.size !== sourceFiles.length)
  throw new Error("Duplicate note basenames require explicit routing")

fs.rmSync(contentRoot, { recursive: true, force: true })
fs.mkdirSync(contentRoot, { recursive: true })

const records = []
for (const file of sourceFiles) {
  const name = basename(file)
  const destination = destinationFor(file)
  const category = categoryFor(destination)
  let body = stripPrivateMetadata(fs.readFileSync(file, "utf8"))
  body = rewriteWikiLinks(body, allNames)
  const title = titleFrom(body, name)
  const description = `A connected bilingual learning note about ${title}.`
  const frontmatter = [
    "---",
    `title: ${yamlQuote(title)}`,
    `description: ${yamlQuote(description)}`,
    "publish: true",
    `tags: [open-notes, ${category}]`,
    "---",
    "",
  ].join("\n")
  fs.mkdirSync(path.dirname(destination), { recursive: true })
  fs.writeFileSync(destination, frontmatter + body)
  records.push({ name, destination, category })
}

const byCategory = (category) =>
  records
    .filter((record) => record.category === category)
    .sort((a, b) => a.name.localeCompare(b.name))
const lessonOrder = (record) => {
  if (/课程主页|^00 /.test(record.name)) return 0
  if (/Orientation/.test(record.name)) return 1
  if (/预备课/.test(record.name)) return 2
  const moduleNumber = record.name.match(/Module (\d+)/)?.[1]
  if (moduleNumber) return Number(moduleNumber) + 10
  const lessonNumber = record.name.match(/第\s*(\d+)(?:次正课|课|次作业)/)?.[1]
  if (lessonNumber) return Number(lessonNumber) + 10
  if (/串讲课/.test(record.name)) return 90
  return 999
}
const courseOrder = (a, b) => lessonOrder(a) - lessonOrder(b) || a.name.localeCompare(b.name)
const links = (items) => items.map((item) => `- [[${item.name}]]`).join("\n")
const calculus = byCategory("calculus-course").sort(courseOrder)
const reviews = byCategory("calculus-review").sort(courseOrder)
const physicsMechanics = byCategory("physics-mechanics").sort(courseOrder)
const physicsElectromagnetism = byCategory("physics-electromagnetism").sort(courseOrder)
const writing = byCategory("writing-course").sort(courseOrder)
const academicEssentials = byCategory("academic-essentials").sort(courseOrder)
const visualCalculus = byCategory("visual-calculus")
const visualDE = byCategory("visual-differential-equations")
const concepts = byCategory("concept-card")

const home = `---
title: 知识脉络
description: 数学、物理与大学写作相互连接的中英双语学习知识库。
publish: true
tags: [open-notes, index]
---

# 知识脉络

> **A connected knowledge base for learning, reviewing, and seeing how ideas transfer across subjects.**
>
> 这里把数学、物理、写作和视频中的直觉串成一张可以阅读、检索和沿链接探索的知识网络。

## Start Here / 从这里开始

- [[UBC Knowledge Graph|知识总图]]：查看整个知识库的课程主线与跨学科连接。
- [[UBC Concept Index|概念索引]]：按名称进入独立概念卡。
- [[AP Calculus BC|微积分]]：从极限、导数、积分走到微分方程与级数。
- [[AP物理C力学-课程主页|物理 C 力学]]：从运动学和牛顿定律走到能量、动量、转动与振动。
- [[AP Physics C|物理 C 电磁学]]：从电荷、电场和电势走到电路、磁场与电磁感应。
- [[AE26 Reading and Writing at University-课程主页|Academic Essentials]]：从主动学习与信息素养走到学术写作、表达和来源整合。
- [[大学写作-课程主页|大学写作]]：从 thesis、argument 到 reader-centered writing。
- 使用搜索、Backlinks 和关系图查看同一概念如何跨课程出现。

## Course Notes / 课程笔记

### Calculus / 微积分

${links(calculus)}

### AP Physics C: Mechanics / 物理 C 力学

${links(physicsMechanics)}

### AP Physics C: Electricity and Magnetism / 物理 C 电磁学

${links(physicsElectromagnetism)}

### Academic Essentials / 学术基础

${links(academicEssentials)}

### University Writing / 大学写作

${links(writing)}

## Video Companions / 视频伴读

### 3Blue1Brown: The Essence of Calculus

${links(visualCalculus)}

### 3Blue1Brown: Differential Equations

${links(visualDE)}

## Practice Reviews / 练习复盘

${links(reviews)}

## About / 关于

公开版由某某整理。范围、脱敏原则与来源说明见 [[关于本站]]。
`

const map = `---
title: 跨学科概念地图
description: 从变化、累积、场、系统到论证的跨学科知识路径。
publish: true
tags: [open-notes, index, knowledge-map]
---

# 跨学科概念地图

## Change and Accumulation / 变化与累积

[[Limits]] → [[Derivatives]] → [[Integrals]] → [[Differential Equations]] → [[Infinite Sequence and Series]] → [[Taylor Series]]

## Calculus into Physics / 从微积分进入物理

[[One-Dimensional Motion]] → [[Free-Body Diagrams]] → [[Newton's Second Law]] → [[Mechanical Energy Conservation]] → [[Linear Momentum]] → [[Rotational Kinematics]] → [[Simple Harmonic Motion]]

[[Vectors]] → [[Electric Force]] → [[Electric Field]] → [[Electric Flux]] → [[Gauss's Law]]

[[Derivatives]] + [[Integrals]] → [[Electric Potential]] → [[Electric Circuits]] → [[RC Circuits]]

[[Vector Field]] → [[Magnetic Fields]] → [[Lorentz Force]] → [[Faraday's Law]] → [[RL Circuits]]

## Reasoning and Communication / 推理与表达

[[Information Literacy]] → [[Source Evaluation]] → [[Academic Citation]] → [[Source Integration]] → [[Academic Writing]]

[[Academic Writing]] → [[Thesis Statement]] → [[Reader-Centered Writing]]

数学和物理训练“关系是否成立”，写作训练“如何让读者看见这条关系”。共同核心都是：定义对象、给出证据、连接步骤、检查结论。

## All Concept Cards / 全部概念卡

${links(concepts)}
`

const about = `---
title: 关于本站
description: 知识脉络的范围、脱敏、来源与整理原则。
publish: true
tags: [open-notes, about]
---

# 关于本站

这是某某整理的公开学习知识库。它来自私人 Obsidian 库的独立脱敏副本，目标是让读者像读一本相互连接的书一样回忆课程内容，也能在观看公开视频时找到对应的定义、公式、推导和应用。

## Editorial Principles / 整理原则

- **English core, Chinese explanation**：保留教材中的核心英文表达，中文解释直觉、推理与易错点。
- **Concept first**：围绕知识脉络组织内容，不发布逐字 transcript。
- **Connected notes**：用 Wiki Links、Backlinks 和 Graph 连接课程、视频与概念卡。
- **Privacy first**：姓名显示为“某某”；原始文件、本机路径、账号、联系方式、私人链接和 Obsidian 配置不会进入公开仓库。
- **Source vault stays private**：网站只发布脚本生成的副本，不直接同步私人库。

## Scope / 范围

公开版覆盖当前知识库中的微积分、物理 C 力学与电磁学、Academic Essentials、大学写作、3Blue1Brown 视频伴读、练习复盘与独立概念卡。练习复盘保留可复用的诊断方法，但移除来源路径和身份信息。

## Attribution / 来源说明

3Blue1Brown 部分是观看 *Essence of Calculus* 与 *Differential Equations* 系列后整理的学习笔记。本站不托管原视频、字幕、课堂录音、讲义或 PDF，相关原始内容的版权归各自权利人所有。课程与机构名称仅用于说明学习背景，本站并非其官方网站。

## Corrections / 勘误

内容可能仍有遗漏或错误。勘误时请指明页面、原句和建议修改理由。
`

fs.writeFileSync(path.join(contentRoot, "index.md"), home)
fs.writeFileSync(path.join(contentRoot, "跨学科概念地图.md"), map)
fs.writeFileSync(path.join(contentRoot, "关于本站.md"), about)

const counts = new Map()
for (const record of records) counts.set(record.category, (counts.get(record.category) ?? 0) + 1)
const manifest = `# Public Content Manifest

This repository contains an independently generated and sanitized public copy of the current knowledge vault.

- Source notes exported: ${records.length}/${sourceFiles.length}
- Calculus course notes: ${counts.get("calculus-course") ?? 0}
- Calculus practice reviews: ${counts.get("calculus-review") ?? 0}
- Physics mechanics notes: ${counts.get("physics-mechanics") ?? 0}
- Physics electricity and magnetism notes: ${counts.get("physics-electromagnetism") ?? 0}
- Academic Essentials notes: ${counts.get("academic-essentials") ?? 0}
- University writing notes: ${counts.get("writing-course") ?? 0}
- Video companion notes: ${(counts.get("visual-calculus") ?? 0) + (counts.get("visual-differential-equations") ?? 0)}
- Concept and root notes: ${(counts.get("concept-card") ?? 0) + (counts.get("knowledge-map") ?? 0)}
- Generated navigation/about pages: 3

Excluded by policy: raw transcripts, audio/video, source documents and PDFs, Obsidian configuration, local paths, account details, contact details, private share links, and direct personal identifiers.
`
fs.writeFileSync(path.join(projectRoot, "PUBLIC_MANIFEST.md"), manifest)

console.log(`Exported ${records.length}/${sourceFiles.length} source notes plus 3 generated pages.`)
