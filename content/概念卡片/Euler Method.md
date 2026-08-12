---
title: "Euler Method"
description: "A connected bilingual learning note about Euler Method."
publish: true
tags: [open-notes, concept-card]
---
# Euler Method

## Core Idea

> Euler's method approximates a trajectory by repeatedly following its current derivative for a short finite time step.

若 $\dot{\mathbf{s}}=F(\mathbf{s})$，则

$$
\mathbf{s}_{n+1}=\mathbf{s}_n+\Delta tF(\mathbf{s}_n).
$$

每一步用当前 tangent direction 代替短时间内的 curved trajectory。

## Trade-off

较小的 $\Delta t$ 通常减少 discretization error，却需要更多 steps。Euler method 展示基本思想，但实际 numerical solvers 会用更高阶方法改善 accuracy 与 efficiency 的平衡。

## Connections

- [[Differential Equations]] provide $F$.
- [[Initial Conditions]] provide $\mathbf{s}_0$.
- [[Vector Field]] gives the direction used at every step.
- [[Tiny Nudges]] explains the local linear approximation behind the update.

## Search and Source Mentions

- [[01 - Differential Equations, a Tourist's Guide#7. Formula Map / 公式地图]]
- [[微积分BC第10次正课-累积函数与微分方程#Part D - Euler's Method|微积分BC第10次正课 · Euler's Method]]
