---
title: "Heat Equation"
description: "A connected bilingual learning note about Heat Equation."
publish: true
tags: [open-notes, concept-card]
---
# Heat Equation

## One-Sentence Idea / 一句话

> The heat equation says that temporal change is driven by spatial curvature.

热方程表示：每一点温度随时间改变的速度，由该点相对于周围温度分布的局部弯曲程度决定。

## Core Forms

一维：

$$
\frac{\partial T}{\partial t}=\alpha\frac{\partial^2T}{\partial x^2}.
$$

多维：

$$
\frac{\partial T}{\partial t}=\alpha\nabla^2T.
$$

$\alpha>0$ 是 thermal diffusivity。peak 降低、valley 升高，因此 temperature profile 会被 smooth out。

## Mechanism

离散模型中，每一点趋向邻居平均值：

$$
\frac{dT_i}{dt}\propto T_{i+1}-2T_i+T_{i-1}.
$$

[[Second Difference]] 在连续极限下成为 spatial second derivative。

## Connections

- [[Differential Equations]]
- [[Partial Derivatives]]
- [[Second Difference]]
- [[Second Derivative]]
- [[Laplacian]]
- [[Fourier Series]]
- [[02 - But What Is a Partial Differential Equation#Knowledge Point 6: The Heat Equation Couples Time Change to Spatial Curvature]]

## Search and Source Mentions

- Main source: [[02 - But What Is a Partial Differential Equation]]
