---
title: "Taylor Polynomial"
description: "A connected bilingual calculus note about Taylor Polynomial."
publish: true
tags: [calculus, concept-card]
---
# Taylor Polynomial

## Core Sentence / 核心句

A Taylor polynomial is a finite-degree polynomial whose derivatives match a function's derivatives at a chosen center.

中文理解：Taylor polynomial 用有限个 polynomial terms，在中心点逐阶匹配原函数的 value、slope、curvature 和更高阶导数。

## Formula / 公式或规则

$$
P_n(x)=\sum_{k=0}^{n}\frac{f^{(k)}(a)}{k!}(x-a)^k
$$

Matching condition：

$$
P_n^{(k)}(a)=f^{(k)}(a),\qquad0\le k\le n
$$

## When To Use / 什么时候用

看到 approximate near $a$、degree $n$、small-angle approximation、estimate function value，就考虑 Taylor polynomial。

## Watch Out / 易错点

Taylor polynomial 是 finite approximation，不是 infinite Taylor series；离 center 越远通常越要关注 truncation error。

## Search and Source Mentions / 搜索与出现位置

### Mentioned In / 出现位置

- [[11 - Taylor Series#Knowledge Point 2: A Taylor Polynomial Uses Its Degrees of Freedom to Match Local Behavior|Chapter 11 · Degrees of Freedom]]
- [[11 - Taylor Series#Knowledge Point 9: Centering at $a$ Makes the Chosen Point Behave Like Zero|Chapter 11 · General Formula]]
- [[11 - Taylor Series#Knowledge Point 13: Taylor Polynomial and Taylor Series Are Different Objects|Chapter 11 · Polynomial vs Series]]
- [[微积分BC第14次正课-Ratio-Test与Taylor-Series#Knowledge Point 12: Taylor Polynomial Degree|AP Calculus BC · Taylor Polynomial Degree]]

## Connected Notes / 连接

- [[11 - Taylor Series]]
- [[Taylor Series]]
- Maclaurin Series
- [[Higher-Order Derivatives]]
- [[Lagrange Error Bound]]
- [[微积分BC第14次正课-Ratio-Test与Taylor-Series]]
