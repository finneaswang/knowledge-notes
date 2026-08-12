---
title: "L'Hôpital's Rule"
description: "A connected bilingual learning note about L'Hôpital's Rule."
publish: true
tags: [open-notes, concept-card]
---
# L'Hôpital's Rule

## Core Sentence / 核心句

L'Hôpital's Rule evaluates certain indeterminate ratios by comparing the local rates of change of numerator and denominator.

中文理解：洛必达法则不是符号技巧；共同零点附近，两个函数都像各自的切线，所以函数比值由斜率比值控制。

## Formula / 公式

Under the theorem's hypotheses, for forms such as $0/0$ or $\infty/\infty$:

$$
\lim_{x\to a}\frac{f(x)}{g(x)}
=\lim_{x\to a}\frac{f'(x)}{g'(x)}
$$

## When To Use / 什么时候用

先直接代入；只有确认是适用的 [[Indeterminate Form]]，并满足 differentiability 等条件后使用。

## Watch Out / 易错点

- 上下分别求导，不使用 Quotient Rule。
- 使用后仍然是在求 limit。
- 新 ratio 可能仍需化简或再次应用。
- 不要 circularly 用它证明所依赖的 derivative formula。

## Search and Source Mentions / 搜索与出现位置

### Mentioned In / 出现位置

- [[微积分BC第5次正课-相关变化率线性近似与中值定理#17. The Gate: Indeterminate Form / 使用前先过门槛|微积分BC第5次正课 · L'Hopital Gate]]
  - direct substitution must first establish an eligible indeterminate form
- [[07 - Limits, L'Hopital's Rule, and Epsilon-Delta Definitions#Knowledge Point 7: L'Hôpital's Rule Comes From Comparing Local Linear Changes|Chapter 7 · Local Linear Reason]]
  - the shared $dx$ cancels from the two first-order changes
- [[07 - Limits, L'Hopital's Rule, and Epsilon-Delta Definitions#Knowledge Point 8: The General Rule Compares the Two Slopes Near Their Shared Zero|Chapter 7 · General Rule]]
  - near a shared zero, the ratio is governed by the ratio of slopes

## Connected Notes / 连接

- [[微积分BC第5次正课-相关变化率线性近似与中值定理]]
- [[07 - Limits, L'Hopital's Rule, and Epsilon-Delta Definitions]]
- [[Limits]]
- [[Indeterminate Form]]
- [[Derivatives]]
- [[Tiny Nudges]]
