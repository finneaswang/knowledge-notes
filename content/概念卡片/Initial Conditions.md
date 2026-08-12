---
title: "Initial Conditions"
description: "A connected bilingual calculus note about Initial Conditions."
publish: true
tags: [calculus, concept-card]
---
# Initial Conditions

## Core Idea

> Initial conditions select one trajectory from a family of solutions compatible with the same differential equation.

同一个 change law 可以允许许多 functions。initial conditions 给出某个起始时刻的 state，用来确定积分常数并选出具体 evolution。

对二阶方程 $\ddot y=-g$，通常需要两个条件：

$$
y(0)=y_0,\qquad \dot y(0)=v_0.
$$

## State View

initial condition 不是附加在模型末尾的“小数据”，而是 state-space trajectory 的 starting point。对 pendulum，它通常是 $(\theta_0,\dot\theta_0)$。

## Connections

- [[Differential Equations]] define the allowed motion.
- Phase Space contains every possible initial state.
- [[Euler Method]] begins from one initial state and steps forward.
- Chaos can make tiny initial-condition errors grow into very different trajectories.
- In indefinite integration, $f'(x)$ determines an antiderivative family $f(x)=F(x)+C$, while one value such as $f(x_0)=y_0$ determines $C$: [[微积分BC第8次正课-反导FTC变上限积分与换元#10. Initial Condition Selects One Function / 初始条件选出具体函数|第8课 · Initial condition and C]].
- [[Antiderivative]]

## Search and Source Mentions
