---
title: "Average Value of a Function"
description: "A connected bilingual calculus note about Average Value of a Function."
publish: true
tags: [calculus, concept-card]
---
# Average Value of a Function

## Core Sentence / 核心句

The average value of a function is its signed area over an interval divided by the interval width.

中文理解：连续函数的平均值是越来越密的有限采样平均之极限，也就是带符号面积除以区间宽度。

## Formula / 公式

$$
f_{avg}=\frac1{b-a}\int_a^bf(x)dx
$$

If $F'=f$:

$$
f_{avg}=\frac{F(b)-F(a)}{b-a}
$$

## Memory Sentence / 记忆句

Average height of $f$ equals secant slope of an antiderivative $F$.

## Watch Out / 易错点

- 不要只平均 endpoints。
- 不要忘记除以 $b-a$。
- 使用 signed area，below-axis values 为负。
- 它等于 $F$ 的 average rate of change，不是通常意义下 $f$ 自身的 average rate of change。

## Source / 出现位置

- [[09 - What Does Area Have to Do With Slope#Knowledge Point 5: General Average-Value Formula|Chapter 9 · General Formula]]
- [[09 - What Does Area Have to Do With Slope#Knowledge Point 6: Endpoint Slope Encodes the Average of All Local Slopes|Chapter 9 · Average Slopes]]

## Connected Notes / 连接

- [[09 - What Does Area Have to Do With Slope]]
- Integrals
- [[Riemann Sum]]
- [[Signed Area]]
- [[Antiderivative]]
- [[Fundamental Theorem of Calculus]]
- Average Rate of Change
- [[微积分BC第11次正课-积分应用与截面体积#Part B - Average Value|微积分BC第11次正课 · Average Value]]
