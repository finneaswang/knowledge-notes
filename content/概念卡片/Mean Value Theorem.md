---
title: "Mean Value Theorem"
description: "A connected bilingual learning note about Mean Value Theorem."
publish: true
tags: [open-notes, concept-card]
---
# Mean Value Theorem

## Core Sentence / 核心句

The Mean Value Theorem guarantees that some instantaneous rate inside an interval equals the average rate over the whole interval.

中文理解：只要函数在闭区间连续、内部可导，区间内至少有一点的切线斜率等于端点割线斜率。

## Hypotheses / 前提

- continuous on $[a,b]$
- differentiable on $(a,b)$

## Conclusion / 结论

There exists $c\in(a,b)$ such that

$$
f'(c)=\frac{f(b)-f(a)}{b-a}.
$$

## Visual Meaning / 图像含义

至少一条 interior tangent line 平行于 endpoint secant line。

## Watch Out / 易错点

- continuity alone is insufficient.
- theorem guarantees existence, not uniqueness.
- $c$ lies in the open interval.
- MVT concerns a derivative value; [[Intermediate Value Theorem]] concerns an attained function value.

## Search and Source Mentions / 搜索与出现位置

### Mentioned In / 出现位置

- [[微积分BC第5次正课-相关变化率线性近似与中值定理#23. Mean Value Theorem Statement / 中值定理|微积分BC第5次正课 · Mean Value Theorem]]
  - continuity and differentiability force an interior tangent slope to match the endpoint secant slope

## Connected Notes / 连接

- [[微积分BC第6次正课-导数符号极值与凹凸性]]
- [[Extreme Value Theorem]]
- [[微积分BC第5次正课-相关变化率线性近似与中值定理]]
- [[Derivatives]]
- [[Average Rate of Change]]
- [[Secant Line]]
- [[Tangent Line]]
- [[Intermediate Value Theorem]]
- [[Linear Approximation]]
