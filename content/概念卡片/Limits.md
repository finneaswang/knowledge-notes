---
title: "Limits"
description: "A connected bilingual calculus note about Limits."
publish: true
tags: [calculus, concept-card]
---
# Limits

## Core Sentence / 核心句

A limit describes what a quantity approaches near an input, independently of whether the function reaches or is defined at that input.

中文理解：极限看的是点附近的趋势，不是只看直接代入；点上有 hole 时，附近仍可能趋向唯一值。

## Formula / 公式或规则

$$
\lim_{x\to a}f(x)=L
$$

Formal meaning:

$$
\forall\epsilon>0,\exists\delta>0:
0<|x-a|<\delta\Rightarrow|f(x)-L|<\epsilon
$$

## When To Use / 什么时候用

看到 approaches、as $x$ goes to、infinite process、derivative definition，就想到 limit。

## Watch Out / 易错点

- function value 与 limit 是不同问题。
- two-sided limit 要求左右极限相同。
- $x\to a$ 不表示把 $x=a$ 提前代入。
- $0/0$ 是 [[Indeterminate Form]]，不是答案。

## Search and Source Mentions / 搜索与出现位置

### Mentioned In / 出现位置

- [[微积分BC第2次正课-极限应用与导数入门#8. From Secant to Tangent / 从割线到切线|微积分BC第2次正课 · From Secant to Tangent]]
  - the derivative is produced by taking the limit of nearby secant slopes
- [[微积分BC第1次正课-极限与连续#4. Limit vs Function Value / 极限值不等于点值|微积分BC第1次正课 · Limit vs Function Value]]
  - nearby graph behavior, one-sided agreement, and point value are three separate questions
- [[微积分BC第1次正课-极限与连续#8. Limit Evaluation Decision Map / 求极限方法选择图|微积分BC第1次正课 · Limit Evaluation Decision Map]]
  - direct substitution diagnoses whether to stop, simplify an indeterminate form, compare leading terms, or use a special theorem
- [[08 - Integration and the Fundamental Theorem of Calculus#Knowledge Point 4: An Integral Is the Limit of Rectangle Sums|Chapter 8 · Riemann-Sum Limit]]
  - refining rectangle sums produces an exact definite integral in the limit
- [[07 - Limits, L'Hopital's Rule, and Epsilon-Delta Definitions#Knowledge Point 3: A Limit Can Exist Where the Function Is Undefined|Chapter 7 · Hole and Limit]]
  - nearby values can approach 12 even though the expression is undefined at the limiting input
- [[07 - Limits, L'Hopital's Rule, and Epsilon-Delta Definitions#Knowledge Point 5: Epsilon-Delta Makes “Approach” Quantitatively Precise|Chapter 7 · Epsilon-Delta Definition]]
  - every requested output tolerance has a corresponding input tolerance
- [[03 - Derivative Formulas through Geometry#Knowledge Point 2: Tiny Nudge Is the Real Meaning of $dx$|03 - Derivative Formulas through Geometry · Knowledge Point 2: Tiny Nudge Is the Real Meaning of $dx$]]
  - `- Chapter 2 的精确语言是：Derivatives come from a Limits process.`
- [[03 - Derivative Formulas through Geometry#Knowledge Point 3: Why $\frac{d}{dx}x^2=2x$|03 - Derivative Formulas through Geometry · Knowledge Point 3: Why $\frac{d}{dx}x^2=2x$]]
  - `- Limits：严格上是让 $dx\to0$。`
- [[03 - Derivative Formulas through Geometry#1. What This Episode Is About / 这一集在讲什么|03 - Derivative Formulas through Geometry · 1. What This Episode Is About / 这一集在讲什么]]
  - `Chapter 1 先讲 Integrals 和 accumulated area；Chapter 2 解释 Derivatives 到底是什么意思：不是神秘的 instantaneous change，而是 Limits 下的 Average Rate of Change。`

## Connected Notes / 连接

- [[微积分BC第1次正课-极限与连续]]
- [[微积分BC第2次正课-极限应用与导数入门]]
- [[02 - The Paradox of the Derivative]]
- [[07 - Limits, L'Hopital's Rule, and Epsilon-Delta Definitions]]
- [[08 - Integration and the Fundamental Theorem of Calculus]]
- [[Riemann Sum]]
- [[Epsilon-Delta Definition]]
- [[Indeterminate Form]]
- [[L'Hôpital's Rule]]
- [[Derivatives]]
- Average Rate of Change
- [[微积分BC第13次正课-无穷级数判敛]]
