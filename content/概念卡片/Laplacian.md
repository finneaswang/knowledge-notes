---
title: "Laplacian"
description: "A connected bilingual learning note about Laplacian."
publish: true
tags: [open-notes, concept-card]
---
# Laplacian

## One-Sentence Idea / 一句话

> The Laplacian is the multidimensional second derivative: it measures how a value compares with the surrounding average trend.

Laplacian 是二阶导数的多维推广，用来衡量一点相对于四周平均趋势是偏高还是偏低。

## Core Form

对三维 scalar field $T(x,y,z)$：

$$
\nabla^2T=T_{xx}+T_{yy}+T_{zz}.
$$

从 vector calculus 看：

$$
\nabla^2T=\nabla\cdot(\nabla T).
$$

它先取 gradient，再测量该 gradient field 的 divergence。

## Why It Matters

- [[Heat Equation]]：$T_t=\alpha\nabla^2T$。
- 正 Laplacian 通常表示该点低于周围平均趋势；负值表示高于周围平均趋势。
- 在 diffusion、waves、potential theory 等 PDE 中反复出现。

## Connections

- [[Partial Derivatives]]
- [[Second Derivative]]
- [[Heat Equation]]
- [[Electric Potential]]
- [[02 - But What Is a Partial Differential Equation#Knowledge Point 12: The Laplacian Generalizes Spatial Curvature]]

## Search and Source Mentions

- Main source: [[02 - But What Is a Partial Differential Equation]]
