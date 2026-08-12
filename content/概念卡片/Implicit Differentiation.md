---
title: "Implicit Differentiation"
description: "A connected bilingual calculus note about Implicit Differentiation."
publish: true
tags: [calculus, concept-card]
---
# Implicit Differentiation

## Core Sentence / 核心句

Implicit differentiation finds how interdependent variables must change together so that their defining relation remains true.

中文理解：隐式求导不是机械地补 $dy/dx$，而是在求为了维持原方程，$x$ 与 $y$ 的微小变化必须满足什么关系。

## Formula / 公式

For:

$$
x^2+y^2=R^2
$$

differentiate with respect to $x$:

$$
2x+2y\frac{dy}{dx}=0
$$

$$
\frac{dy}{dx}=-\frac{x}{y}
$$

## Memory Sentence / 记忆句

Differentiate both sides, treating $y$ as a function of $x$.

中文：两边同时对 $x$ 求导；遇到 $y$ 的函数时，用 chain rule 带出 $dy/dx$。

## When To Use / 什么时候用

看到 [[Implicit Curve]]、mixed $x$ and $y$、constraint equation、inverse-function relation 或要求 implicit slope 时使用。

## Watch Out / 易错点

- 不要漏掉 $dy/dx$。
- 不要在求导之前代入具体点。
- 原 equation 的两边必须继续变化相等。
- 求得的 slope expression 可能同时包含 $x$ 和 $y$，这是正常的。

## Search and Source Mentions / 搜索与出现位置

### Mentioned In / 出现位置

- [[微积分BC第3次正课-可导性链式法则与隐函数求导#15. What Implicit Differentiation Is / 隐函数求导是什么|微积分BC第3次正课 · What Implicit Differentiation Is]]
  - differentiating a relation finds how x and y must change together to preserve it
- [[06 - Implicit Differentiation, What's Going On Here#Knowledge Point 2: The Circle Procedure Finds the Allowed Tiny Direction|Chapter 6 · Circle Procedure]]
  - $2x\,dx+2y\,dy=0$ selects the tangent direction that preserves the circle relation
- [[06 - Implicit Differentiation, What's Going On Here#Knowledge Point 7: A General Implicit Equation Uses Product Rule and Chain Rule Together|Chapter 6 · General Example]]
  - product rule and chain rule work together in $\sin(x)y^2=x$

## Connected Notes / 连接

- [[微积分BC第3次正课-可导性链式法则与隐函数求导]]
- [[06 - Implicit Differentiation, What's Going On Here]]
- [[Implicit Curve]]
- [[Related Rates]]
- [[Chain Rule]]
- [[Product Rule]]
- [[Tangent Line]]
- [[Natural Logarithm]]
