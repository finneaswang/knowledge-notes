---
title: "Partial Fractions"
description: "A connected bilingual learning note about Partial Fractions."
publish: true
tags: [open-notes, concept-card]
---
# Partial Fractions

## Core Sentence / 核心句

Partial fractions decomposes a proper rational function into simpler rational pieces with elementary antiderivatives.

中文理解：部分分式把一个 proper rational function 拆成若干简单分式，使每一项都能直接得到 logarithmic 或 inverse-trigonometric antiderivative。

## Basic Pattern / 基本结构

For distinct linear factors,

$$
\frac{P(x)}{(x-a)(x-b)}
=\frac{A}{x-a}+\frac{B}{x-b}.
$$

## Workflow / 流程

~~~text
check degree
-> long divide if improper
-> factor denominator
-> write full decomposition template
-> solve coefficients
-> recombine to verify
-> integrate each piece
~~~

## Watch Out / 易错点

- Partial fractions requires a proper fraction first.
- Repeated linear factors need every power from $1$ through the multiplicity.
- Irreducible quadratic factors require linear numerators.
- Absolute values remain in logarithmic antiderivatives.
- Always verify coefficients by recombining the decomposition.

## Source / 出现位置

- [[微积分BC第9次正课-积分方法与反常积分#16. When Partial Fractions Applies / 使用条件|第9课 · 使用条件]]
- [[微积分BC第9次正课-积分方法与反常积分#17. Finding Coefficients / 求系数|第9课 · 系数求解]]
- [[微积分BC第9次正课-积分方法与反常积分#18. Difference-of-Squares Example / 平方差例题|第9课 · 平方差分解]]

## Connected Notes / 连接

- [[Integrals]]
- [[Antiderivative]]
- [[Integration by Parts]]
- [[微积分BC第9次正课-积分方法与反常积分]]
