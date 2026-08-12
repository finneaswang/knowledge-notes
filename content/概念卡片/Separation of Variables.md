---
title: "Separation of Variables"
description: "A connected bilingual learning note about Separation of Variables."
publish: true
tags: [open-notes, concept-card]
---
# Separation of Variables

## Core Sentence / 核心句

Separation of variables rewrites a separable differential equation so each side contains only one variable before integration.

$$
\frac{dy}{dx}=g(x)h(y)
\quad\Longrightarrow\quad
\frac{dy}{h(y)}=g(x)dx.
$$

## Workflow / 做题动作

Separate $x,y$ -> integrate both sides -> use the initial condition -> solve for $y$ -> select the correct branch/domain.

## Watch Out / 易错点

除以 $h(y)$ 时可能丢掉满足 $h(y)=0$ 的 equilibrium solutions；$\ln|\cdot|$ 与平方根分支也必须由 initial condition 处理。

## Connected Notes / 连接

- [[微积分BC第10次正课-累积函数与微分方程]]
- [[Differential Equations]]
- [[Initial Conditions]]
- [[Integrals]]
