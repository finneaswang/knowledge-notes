---
title: "Optimization"
description: "A connected bilingual learning note about Optimization."
publish: true
tags: [open-notes, concept-card]
---
# Optimization

## Core Sentence / 核心句

Optimization converts a constrained situation into a one-variable objective function, then uses extrema analysis to find the best feasible value.

中文理解：先把场景和约束压缩成一个单变量目标函数，再在可行定义域内用导数与端点比较寻找最大或最小值。

## Workflow / 解题流程

$$
\text{objective + constraints}
\to F(x)\text{ on a domain}
\to F'(x)=0\text{ or DNE}
\to \text{candidates + endpoints}
\to \text{verified optimum}.
$$

## Trigger Sentence / 触发句

> **The derivative does not build the model; it optimizes the model after the objective has been built.**

导数不会替你建立模型；它只在目标函数已经建立后负责优化。

## Watch Out / 易错点

- 不要在 objective function 出现前就开始求导。
- constraint 用来消掉多余变量，不是背景信息。
- critical number 是 candidate，不自动是 optimum。
- absolute optimization 要检查 feasible endpoints。
- 最后回答题目要求的 quantity，并带上 context/units。

## Source / 出现位置

- [[微积分BC第7次正课-导数图像优化与定积分入门#6. What Makes Optimization Different / 最优化题真正难在哪里|第7课 · 建模与优化]]
- [[微积分BC第7次正课-导数图像优化与定积分入门#8. Rectangle Under y = 1/x Squared / 双曲线下矩形|第7课 · 矩形例题]]
- [[微积分BC第7次正课-导数图像优化与定积分入门#9. Triangle With a Moving Vertex / 动点三角形|第7课 · 三角形例题]]

## Connected Notes / 连接

- [[Derivatives]]
- [[First Derivative Test]]
- [[Absolute Extrema]]
- [[微积分BC第6次正课-导数符号极值与凹凸性]]
- [[微积分BC第7次正课-导数图像优化与定积分入门]]
