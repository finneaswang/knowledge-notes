---
title: "Differential Equations"
description: "A connected bilingual learning note about Differential Equations."
publish: true
tags: [open-notes, concept-card]
---
# Differential Equations

## Core Idea

> A differential equation constrains an unknown function through its derivatives.

微分方程描述 quantity 怎样变化，而不直接列出每个时刻的值。求解时，unknown 通常是 function 或 trajectory，不是单个 number。

$$
F(t,y,y',y'',\ldots)=0
$$

ODE 使用 ordinary derivatives，通常只有一个 independent variable；PDE 使用 partial derivatives，处理多个 independent variables 或连续分布的 field。

## Why It Matters

现实模型常先给 local law：force 决定 acceleration、population size 决定 growth rate、temperature differences 决定 heat flow。微分方程把这些 local rules 连接成 global behavior。

## Example

$$
\ddot\theta=-\mu\dot\theta-\frac gL\sin\theta
$$

它不是直接给 pendulum angle，而是告诉 angle、angular velocity 与 angular acceleration 必须怎样互相约束。

## Connections

- [[Derivatives]] supply rates of change.
- [[Initial Conditions]] select one member of a solution family.
- [[Phase Space]] represents all possible states geometrically.
- [[Vector Field]] encodes the change law at every state.
- [[Euler Method]] approximates trajectories numerically.
- [[AP电磁学第10次正课-等效电容与RC电路#Knowledge Point 14: Kirchhoff's Loop Rule Produces the Differential Equation|RC charging turns a loop law into a first-order differential equation.]]
- [[RC Circuits]]
- [[AP电磁学第13次正课-动生电动势磁通量与法拉第定律#Knowledge Point 17: Without External Force, Speed Decays|Electromagnetic damping produces a first-order velocity equation.]]
- [[Electromagnetic Damping]]

## Search and Source Mentions

- [[01 - Differential Equations, a Tourist's Guide#Knowledge Point 7: An Analytic Formula Is Not the Only Form of Understanding]]
- [[AP电磁学第10次正课-等效电容与RC电路]]
