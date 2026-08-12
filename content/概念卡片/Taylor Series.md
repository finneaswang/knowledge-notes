---
title: "Taylor Series"
description: "A connected bilingual calculus note about Taylor Series."
publish: true
tags: [calculus, concept-card]
---
# Taylor Series

## Core Sentence / 核心句

A Taylor series rebuilds a function from its derivatives at a chosen center.

中文理解：Taylor series 是用某一点的函数值、导数、二阶导数等信息，拼出这个函数附近的样子。

## Formula / 公式或规则

$$
f(x)=\sum_{n=0}^{\infty}\frac{f^{(n)}(c)}{n!}(x-c)^n
$$

## When To Use / 什么时候用

看到 approximate near $c$、centered at $c$、coefficient from derivatives，就想到 Taylor series。

## Watch Out / 易错点

Taylor polynomial 是有限项近似；Taylor series 是无限项表达，还要关心收敛。

## Search and Source Mentions / 搜索与出现位置

### Mentioned In / 出现位置

- [[11 - Taylor Series#Knowledge Point 13: Taylor Polynomial and Taylor Series Are Different Objects|Chapter 11 · Taylor Polynomial vs Taylor Series]]
  - a finite Taylor polynomial becomes a Taylor series only through an infinite partial-sum limit
- [[11 - Taylor Series#Knowledge Point 16: The Final Intuition Is Information Translation|Chapter 11 · Fundamental Intuition]]
  - derivative information at one point becomes approximation information around that point
- [[10 - Higher Order Derivatives#Knowledge Point 10: Higher Derivatives Store Local Shape Information|Chapter 10 · Derivatives as Local Shape Data]]
  - Taylor approximation uses function value and successive derivatives to match increasingly detailed local behavior
- [[微积分BC第14次正课-Ratio-Test与Taylor-Series#5. A Maclaurin series is a Taylor series centered at zero.|微积分BC第14次正课-Ratio-Test与Taylor-Series · 5. A Maclaurin series is a Taylor series centered at zero.]]
  - `5. A Maclaurin series is a Taylor series centered at zero.`
- [[微积分BC第14次正课-Ratio-Test与Taylor-Series#5. Taylor Series / 泰勒级数|微积分BC第14次正课-Ratio-Test与Taylor-Series · 5. Taylor Series / 泰勒级数]]
  - `5. Taylor Series / 泰勒级数`
- [[微积分BC第14次正课-Ratio-Test与Taylor-Series#微积分BC第14次正课 - Ratio Test 与 Taylor Series|微积分BC第14次正课-Ratio-Test与Taylor-Series · 微积分BC第14次正课 - Ratio Test 与 Taylor Series]]
  - `微积分BC第14次正课 - Ratio Test 与 Taylor Series`
- [[微积分BC第14次正课-Ratio-Test与Taylor-Series#Knowledge Point 13: Maclaurin Is Taylor Centered at 0|微积分BC第14次正课-Ratio-Test与Taylor-Series · Knowledge Point 13: Maclaurin Is Taylor Centered at 0]]
  - `Maclaurin Series 是特殊的 Taylor Series：`
- [[微积分BC第14次正课-Ratio-Test与Taylor-Series#Knowledge Point 11: Coefficient Questions / 系数题|微积分BC第14次正课-Ratio-Test与Taylor-Series · Knowledge Point 11: Coefficient Questions / 系数题]]
  - `问 Taylor series about $x=0$ 中 $x^2$ 的 coefficient。`
- [[微积分BC第14次正课-Ratio-Test与Taylor-Series#Knowledge Point 8: Taylor's Big Idea|微积分BC第14次正课-Ratio-Test与Taylor-Series · Knowledge Point 8: Taylor's Big Idea]]
  - `中文理解：复杂函数不好求导/积分；power functions 最好操作。所以 Taylor series 的目的就是把复杂函数变成 polynomial-like expression。`
- [[微积分BC第14次正课-Ratio-Test与Taylor-Series#Knowledge Point 9: Taylor Formula|微积分BC第14次正课-Ratio-Test与Taylor-Series · Knowledge Point 9: Taylor Formula]]
  - `中文理解：题目说 “Taylor series about $x=1$”，就是把 $c$ 取成 $1$，所有项都围绕 $(x-1)$ 展开。`
- [[微积分BC第14次正课-Ratio-Test与Taylor-Series#12. Confusion / Questions|微积分BC第14次正课-Ratio-Test与Taylor-Series · 12. Confusion / Questions]]
  - `6. Taylor series 的 “about $x=c$” 到底改变了什么？`

## Connected Notes / 连接

- [[微积分BC第14次正课-Ratio-Test与Taylor-Series]]
- Maclaurin Series
- [[Power Series]]
- [[Lagrange Error Bound]]
- [[03 - Derivative Formulas through Geometry]]
- [[10 - Higher Order Derivatives]]
- [[Higher-Order Derivatives]]
- [[Second Derivative]]
- [[11 - Taylor Series]]
- [[Taylor Polynomial]]
- [[Radius of Convergence]]
