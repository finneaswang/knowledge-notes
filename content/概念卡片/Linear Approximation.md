---
title: "Linear Approximation"
description: "A connected bilingual learning note about Linear Approximation."
publish: true
tags: [open-notes, concept-card]
---
# Linear Approximation

## Core Sentence / 核心句

Linear approximation uses the tangent line at a known point as the best first-order model for nearby function values.

中文理解：在已知点附近，用函数的切线代替曲线，得到最好的局部一阶近似。

## Formula / 公式

$$
L(x)=f(a)+f'(a)(x-a).
$$

For $x$ near $a$:

$$
f(x)\approx L(x).
$$

## Meaning / 含义

$$
\text{new output}
\approx
\text{known output}
+\text{local slope}\times\text{input change}.
$$

## When To Use / 什么时候用

已知 $f(a)$、$f'(a)$，要求 nearby $f(x)$ 的 estimate、differential approximation 或 tangent-line model。

## Watch Out / 易错点

- target input 越远离 $a$，误差通常越不可控。
- approximation 不是自动的 exact bound。
- $f'(a)$ 必须在 base point $a$ 计算。
- 若要证明全区间 bound，通常需要 [[Mean Value Theorem]] 或更强信息。

## Search and Source Mentions / 搜索与出现位置

### Mentioned In / 出现位置

- [[微积分BC第5次正课-相关变化率线性近似与中值定理#13. Why a Tangent Line Can Approximate / 为什么切线能近似|微积分BC第5次正课 · Linear Approximation]]
  - tangent slope turns a small input change into a first-order output estimate

## Connected Notes / 连接

- [[微积分BC第5次正课-相关变化率线性近似与中值定理]]
- [[Tangent Line]]
- [[Derivatives]]
- [[Tiny Nudges]]
- [[Mean Value Theorem]]
- [[12 - The Other Way to Visualize Derivatives]]
