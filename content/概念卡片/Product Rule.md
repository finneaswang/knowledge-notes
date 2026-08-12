---
title: "Product Rule"
description: "A connected bilingual calculus note about Product Rule."
publish: true
tags: [calculus, concept-card]
---
# Product Rule

## Core Sentence / 核心句

Each term in the Product Rule represents one first-order contribution when both factors change.

中文理解：两个因子都随 $x$ 变化时，导数必须同时保留“第一个不动、第二个变化”和“第二个不动、第一个变化”两种一阶贡献。

## Formula / 公式

$$
\frac{d}{dx}[g(x)h(x)]
=g(x)h'(x)+h(x)g'(x)
$$

Differential form:

$$
d(gh)\approx g\,dh+h\,dg
$$

## Visual Model / 图像模型

把 $g(x)h(x)$ 看成长方形面积：

- $g\,dh$ 是底部新增的薄条
- $h\,dg$ 是侧面新增的薄条
- $dg\,dh$ 是二阶角落小块，在 derivative limit 中不贡献

## When To Use / 什么时候用

最外层 operation 是两个随 $x$ 变化的表达式相乘时使用。

## Watch Out / 易错点

$$
(gh)'\neq g'h'
$$

常数因子不需要 Product Rule 的完整形式，因为常数的导数为 $0$。

## Search and Source Mentions / 搜索与出现位置

### Mentioned In / 出现位置

- [[微积分BC第3次正课-可导性链式法则与隐函数求导#20. Exponential Implicit Relation / 指数型隐式关系|微积分BC第3次正课 · Exponential Implicit Relation]]
  - the inner exponent xy contributes xy'+y before Chain Rule passes it through e^u
- [[微积分BC第2次正课-极限应用与导数入门#14. Product Rule / 乘积法则|微积分BC第2次正课 · Product Rule]]
  - concrete, trigonometric, and abstract graph examples use the same two first-order contributions
- [[06 - Implicit Differentiation, What's Going On Here#Knowledge Point 7: A General Implicit Equation Uses Product Rule and Chain Rule Together|Chapter 6 · General Implicit Equation]]
  - differentiating $\sin(x)y^2$ requires both Product Rule and Chain Rule
- [[04 - Visualizing the Chain Rule and Product Rule#5. Product Rule Through Area / 用面积理解乘积法则|Chapter 4 · Product Rule Through Area]]
  - changing rectangle -> two first-order strips -> Product Rule

## Connected Notes / 连接

- [[微积分BC第3次正课-可导性链式法则与隐函数求导]]
- [[微积分BC第2次正课-极限应用与导数入门]]
- [[04 - Visualizing the Chain Rule and Product Rule]]
- [[06 - Implicit Differentiation, What's Going On Here]]
- [[Implicit Differentiation]]
- [[Derivatives]]
- [[Tiny Nudges]]
- [[Derivative Formulas]]
- [[Chain Rule]]
- [[Function Composition]]
