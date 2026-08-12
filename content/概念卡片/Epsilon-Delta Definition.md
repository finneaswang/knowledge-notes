---
title: "Epsilon-Delta Definition"
description: "A connected bilingual calculus note about Epsilon-Delta Definition."
publish: true
tags: [calculus, concept-card]
---
# Epsilon-Delta Definition

## Core Sentence / 核心句

A limit exists when every requested output accuracy can be guaranteed by restricting the input sufficiently close to the limiting point.

中文理解：无论要求输出离目标多近，总能把输入范围缩得足够小，从而保证所有输出满足要求。

## Formula / 公式

$$
\lim_{x\to a}f(x)=L
$$

means:

$$
\forall\epsilon>0,\exists\delta>0:
0<|x-a|<\delta\Rightarrow|f(x)-L|<\epsilon
$$

## Memory Sentence / 记忆句

Epsilon controls output error; delta controls input distance.

## Watch Out / 易错点

- 顺序是 “for every $\epsilon$, there exists $\delta$”。
- $\delta$ 可以依赖 $\epsilon$。
- $0<|x-a|$ 排除点本身，因为 limit 只看附近。

## Search and Source Mentions / 搜索与出现位置

### Mentioned In / 出现位置

- [[07 - Limits, L'Hopital's Rule, and Epsilon-Delta Definitions#Knowledge Point 5: Epsilon-Delta Makes “Approach” Quantitatively Precise|Chapter 7 · Epsilon-Delta]]
  - every positive epsilon must have a corresponding delta

## Connected Notes / 连接

- [[07 - Limits, L'Hopital's Rule, and Epsilon-Delta Definitions]]
- [[Limits]]
- [[Derivatives]]
- [[Tiny Nudges]]
