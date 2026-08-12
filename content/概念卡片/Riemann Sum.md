---
title: "Riemann Sum"
description: "A connected bilingual learning note about Riemann Sum."
publish: true
tags: [open-notes, concept-card]
---
# Riemann Sum

## Core Sentence / 核心句

A Riemann sum approximates continuous accumulation by adding products of sampled heights and small interval widths.

中文理解：先用许多小矩形近似局部贡献，再让最宽区间趋近零，得到精确积分。

## Formula / 公式

$$
\int_a^bf(x)dx=\lim_{\max\Delta x_i\to0}\sum f(x_i^*)\Delta x_i
$$

For $a=x_0<\cdots<x_n=b$:

$$
L_n=\sum_{i=1}^n f(x_{i-1})\Delta x_i,
\qquad
R_n=\sum_{i=1}^n f(x_i)\Delta x_i,
$$

$$
M_n=\sum_{i=1}^n f\left(\frac{x_{i-1}+x_i}{2}\right)\Delta x_i,
$$

$$
T_n=\sum_{i=1}^n\frac{f(x_{i-1})+f(x_i)}2\Delta x_i.
$$

Equal subintervals use $\Delta x=(b-a)/n$; unequal partitions use each interval's own $\Delta x_i$.

## Watch Out / 易错点

- finite sum 是 approximation，不是 integral 本身。
- sample point 可以变化，但 partition 必须不断细化。
- width 变小的同时 term 数量增加。
- rate sum 通常给 accumulated change；题目问 final amount 时还要检查 initial value。
- left/right/midpoint 由每个 subinterval 的 sample point 决定。

## Source / 出现位置

- [[09 - What Does Area Have to Do With Slope#Knowledge Point 2: Sample Count Converts the Finite Average Into Area Divided by Width|Chapter 9 · Sample Average to Integral]]
- [[08 - Integration and the Fundamental Theorem of Calculus#Knowledge Point 4: An Integral Is the Limit of Rectangle Sums|Chapter 8 · Integral as Limit of Sums]]
- [[微积分BC第7次正课-导数图像优化与定积分入门#12. Left, Right, and Midpoint Riemann Sums / 三种矩形近似|第7课 · 三种 Riemann sums]]
- [[微积分BC第7次正课-导数图像优化与定积分入门#15. From Finite Sum to Exact Integral / 从有限和到精确积分|第7课 · 从近似到精确]]

## Connected Notes / 连接

- [[08 - Integration and the Fundamental Theorem of Calculus]]
- [[09 - What Does Area Have to Do With Slope]]
- [[Average Value of a Function]]
- [[Integrals]]
- [[Area Under a Curve]]
- [[Limits]]
- [[Fundamental Theorem of Calculus]]
- [[Definite Integral]]
- [[微积分BC第7次正课-导数图像优化与定积分入门]]
