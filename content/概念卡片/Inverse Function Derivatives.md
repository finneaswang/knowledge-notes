---
title: "Inverse Function Derivatives"
description: "A connected bilingual calculus note about Inverse Function Derivatives."
publish: true
tags: [calculus, concept-card]
---
# Inverse Function Derivatives

## Core Sentence / 核心句

Inverse functions exchange inputs and outputs, so their derivatives are reciprocal slopes at corresponding points.

中文理解：反函数交换输入与输出，因此原函数和反函数在对应点的局部斜率互为倒数。

## Formula / 公式

If

$$
f(a)=b,
$$

then

$$
(f^{-1})'(b)=\frac1{f'(a)}.
$$

Equivalently:

$$
(f^{-1})'(x)=\frac1{f'(f^{-1}(x))}.
$$

## Routine / 做题顺序

1. Find $a$ such that $f(a)=b$.
2. Evaluate $f'(a)$.
3. Take the reciprocal.

## Watch Out / 易错点

- $f^{-1}(x)$ is not $1/f(x)$.
- Evaluate $f'$ at the original input $a$, not automatically at $b$.
- The formula requires the relevant inverse branch and a nonzero original derivative.

## Search and Source Mentions / 搜索与出现位置

### Mentioned In / 出现位置

- [[微积分BC第4次正课-反函数高阶导数与运动应用#4. Inverse-Function Derivative / 反函数求导|微积分BC第4次正课 · Inverse-Function Derivative]]
  - corresponding points exchange coordinates and local slopes become reciprocals

## Connected Notes / 连接

- [[微积分BC第4次正课-反函数高阶导数与运动应用]]
- [[Derivatives]]
- [[Chain Rule]]
- [[Function Composition]]
- [[Natural Logarithm]]
