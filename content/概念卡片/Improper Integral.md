---
title: "Improper Integral"
description: "A connected bilingual calculus note about Improper Integral."
publish: true
tags: [calculus, concept-card]
---
# Improper Integral

## Core Sentence / 核心句

An improper integral is a limit of proper definite integrals over an unbounded interval or near an unbounded integrand.

中文理解：反常积分不是把无穷当作普通上下限，而是用一列正常定积分的极限来定义无限区间或奇点附近的累计量。

## Definitions / 定义

$$
\int_a^\infty f(x)dx
:=\lim_{b\to\infty}\int_a^bf(x)dx.
$$

For an interior singularity $c$,

$$
\int_a^bf
=\int_a^cf+\int_c^bf,
$$

with each piece defined by its own one-sided limit.

## Convergence Rule / 收敛规则

The improper integral converges only when every defining limit exists as a finite real number. If any required piece diverges, the whole integral diverges.

## Benchmark / 基准

$$
\int_1^\infty\frac1{x^p}dx
\text{ converges iff }p>1.
$$

## Watch Out / 易错点

- Never substitute $\infty$ as if it were a number.
- Split $(-\infty,\infty)$ and test both tails separately.
- Split at every vertical asymptote inside the interval.
- Divergent pieces cannot be canceled in the ordinary improper-integral definition.
- Antiderivative existence does not guarantee convergence; the limit decides.

## Source / 出现位置

- [[微积分BC第9次正课-积分方法与反常积分#23. Infinite Interval Definition / 无限区间定义|第9课 · 无限区间定义]]
- [[微积分BC第9次正课-积分方法与反常积分#27. Whole Real Line / 整条实数轴|第9课 · 分别检查两端]]
- [[微积分BC第9次正课-积分方法与反常积分#28. Interior Vertical Asymptote / 区间内部奇点|第9课 · 内部奇点]]

## Connected Notes / 连接

- [[Limits]]
- [[Definite Integral]]
- Integrals
- [[p-Series]]
- [[Integral Test]]
- [[微积分BC第9次正课-积分方法与反常积分]]
- [[微积分BC第13次正课-无穷级数判敛]]
