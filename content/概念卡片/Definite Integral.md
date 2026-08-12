---
title: "Definite Integral"
description: "A connected bilingual calculus note about Definite Integral."
publish: true
tags: [calculus, concept-card]
---
# Definite Integral

## Core Sentence / 核心句

A definite integral is the refinement limit of finite local contributions over an oriented interval.

中文理解：定积分是在一个有方向的区间内，把有限局部贡献不断细化后得到的极限，因此它表示带符号的精确累积。

## Definition / 定义

For equal-width right-endpoint sums,

$$
\int_a^bf(x)\,dx
=\lim_{n\to\infty}
\sum_{k=1}^n
f\left(a+k\frac{b-a}{n}\right)\frac{b-a}{n}.
$$

更一般地，sample points 可以不同，只要 partition 的最大宽度趋近 $0$ 且极限存在。

## Meaning / 含义

- function height + horizontal width：[[Signed Area]]。
- rate + time：net change。
- density + spatial width/area/volume：total amount。
- many infinitesimal physical contributions：continuous accumulation。

## Basic Properties / 基本性质

$$
\int_b^af=-\int_a^bf,
\qquad
\int_a^af=0,
$$

$$
\int_a^b(cf+g)=c\int_a^bf+\int_a^bg,
$$

$$
\int_a^bf+\int_b^cf=\int_a^cf.
$$

## Watch Out / 易错点

- finite [[Riemann Sum]] 是 approximation，不是 exact integral。
- integral bounds 与 summation index bounds 属于不同层级。
- definite integral 不是自动的 geometric area；轴下贡献为负。
- reversed bounds 合法，只是 orientation 反转。
- $dx$ 指明 integration variable，并承载 small-width intuition；不要脱离 limit definition 随意把它当普通数。

## Source / 出现位置

- [[微积分BC第7次正课-导数图像优化与定积分入门#15. From Finite Sum to Exact Integral / 从有限和到精确积分|第7课 · 定积分定义]]
- [[08 - Integration and the Fundamental Theorem of Calculus#Knowledge Point 4: An Integral Is the Limit of Rectangle Sums|Chapter 8 · Integral as limit]]
- [[微积分BC第8次正课-反导FTC变上限积分与换元#3. Property Toolkit / 性质工具箱|第8课 · 定积分性质]]
- [[微积分BC第8次正课-反导FTC变上限积分与换元#11. FTC Part 2: Compute Accumulation From Endpoints / 用端点计算累积|第8课 · 端点求值]]
- [[微积分BC第9次正课-积分方法与反常积分#22. What Makes an Integral Improper / 何时称为反常|第9课 · 反常积分扩展]]

## Connected Notes / 连接

- Integrals
- [[Riemann Sum]]
- [[Limits]]
- [[Area Under a Curve]]
- [[Signed Area]]
- [[Antiderivative]]
- [[Fundamental Theorem of Calculus]]
- [[微积分BC第7次正课-导数图像优化与定积分入门]]
- [[08 - Integration and the Fundamental Theorem of Calculus]]
- [[Accumulation Function]]
- [[微积分BC第8次正课-反导FTC变上限积分与换元]]
- [[Improper Integral]]
- [[微积分BC第9次正课-积分方法与反常积分]]
