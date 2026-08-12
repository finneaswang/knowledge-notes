---
title: "Partial Derivatives"
description: "A connected bilingual learning note about Partial Derivatives."
publish: true
tags: [open-notes, concept-card]
---
# Partial Derivatives

## One-Sentence Idea / 一句话

> A partial derivative measures change along one input direction while all other inputs are held fixed.

偏导数研究多输入函数沿某一个输入方向的局部变化率，同时暂时固定其他输入。

## Core Form

对 $T(x,t)$：

$$
T_x=\frac{\partial T}{\partial x},\qquad T_t=\frac{\partial T}{\partial t}.
$$

$T_x$ 是固定 time 后沿 space 的变化；$T_t$ 是固定 location 后沿 time 的变化。它仍然是 [[Derivatives]] 的 limit-of-ratios 思想，并不是另一套运算。

## Why It Matters

- [[Heat Equation]] 用 $T_t$ 描述演化，用 $T_{xx}$ 描述空间形状。
- PDE 中同一个 function 会同时有多种方向的变化率。
- 先问“哪个 input 在变，哪些固定”，再读符号。

## Connections

- [[Derivatives]]
- [[Limits]]
- [[Heat Equation]]
- [[Laplacian]]
- [[02 - But What Is a Partial Differential Equation#Knowledge Point 5: Partial Derivatives Ask Direction-Specific Questions]]

## Search and Source Mentions

- Main source: [[02 - But What Is a Partial Differential Equation]]
