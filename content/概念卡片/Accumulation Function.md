---
title: "Accumulation Function"
description: "A connected bilingual calculus note about Accumulation Function."
publish: true
tags: [calculus, concept-card]
---
# Accumulation Function

## Core Sentence / 核心句

An accumulation function assigns each endpoint the signed total accumulated from a fixed starting point to that endpoint.

中文理解：固定起点、移动终点后，每个终点都会对应一个累计量，因此积分本身成为一个函数。

## Definition / 定义

$$
A(x)=\int_a^x f(t)\,dt.
$$

$t$ is a dummy integration variable; $x$ is the external input controlling the endpoint.

## Fundamental Rule / 核心规则

If $f$ is continuous,

$$
A'(x)=f(x).
$$

For a composite upper bound,

$$
\frac{d}{dx}\int_a^{g(x)}f(t)\,dt
=f(g(x))g'(x).
$$

## Trigger Sentence / 触发句

> **The derivative of the accumulated total is the current local contribution.**

累计总量的导数，就是当前位置的局部贡献。

## Watch Out / 易错点

- $A(x)$ is a function, not a fixed area number.
- $A(a)=0$ even if $f(a)\ne0$.
- $A$ increases where $f>0$, not necessarily where the graph of $f$ is rising.
- composite upper bounds require the Chain Rule factor $g'(x)$.
- signed accumulation may decrease when $f<0$.

## Source / 出现位置

- [[微积分BC第8次正课-反导FTC变上限积分与换元#16. A Moving Bound Creates a Function / 上限移动后积分成为函数|第8课 · 变上限积分函数]]
- [[微积分BC第8次正课-反导FTC变上限积分与换元#17. FTC Part 1: Differentiate Accumulation / 对累计函数求导|第8课 · FTC Part 1]]
- [[08 - Integration and the Fundamental Theorem of Calculus#Knowledge Point 6: The Derivative of an Accumulated-Area Function Is the Original Height|Chapter 8 · Current height]]

## Connected Notes / 连接

- [[Fundamental Theorem of Calculus]]
- [[Definite Integral]]
- [[Antiderivative]]
- [[Signed Area]]
- [[Chain Rule]]
- [[微积分BC第8次正课-反导FTC变上限积分与换元]]
- [[08 - Integration and the Fundamental Theorem of Calculus]]
