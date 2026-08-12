---
title: "Transformational View of Derivatives"
description: "A connected bilingual calculus note about Transformational View of Derivatives."
publish: true
tags: [calculus, concept-card]
---
# Transformational View of Derivatives

## Core Sentence / 核心句

A derivative describes how a function locally scales and orients tiny separations in its input space.

中文理解：把 function 看成 input space 到 output space 的 mapping 时，导数描述一个点附近的微小间距被拉伸、压缩或翻转多少。

## Formula / 公式或规则

$$
f(a+h)\approx f(a)+f'(a)h
$$

```text
|f'(a)| > 1  -> local expansion
0 < |f'(a)| < 1 -> local contraction
f'(a) < 0 -> orientation reversal
f'(a) = 0 -> first-order collapse
```

## When To Use / 什么时候用

用于理解 local linearization、function iteration、fixed-point stability，以及 derivative 向 Jacobian 和更高维 calculus 的推广。

## Watch Out / 易错点

slope 与 local scale factor 是同一个 derivative 的两种 visualization。不要把 transformation view 误当作另一种 derivative，也不要把 local behavior 当作 global behavior。

## Search and Source Mentions / 搜索与出现位置

### Mentioned In / 出现位置

- [[12 - The Other Way to Visualize Derivatives#Knowledge Point 3: View a Function as a Mapping Between Number Lines|Chapter 12 · Mapping Between Number Lines]]
  - a derivative is the local scale and orientation factor of a number-line transformation
- [[12 - The Other Way to Visualize Derivatives#Knowledge Point 5: Zero and Negative Derivatives Have Concrete Transformation Meanings|Chapter 12 · Zero and Negative Derivatives]]
  - zero collapses first-order variation and a negative derivative reverses orientation
- [[12 - The Other Way to Visualize Derivatives#Knowledge Point 12: The Transformational View Complements Rather Than Replaces Graphs|Chapter 12 · Complements Graphs]]
  - this view is designed to generalize beyond ordinary scalar graphs

## Connected Notes / 连接

- [[12 - The Other Way to Visualize Derivatives]]
- [[Derivatives]]
- [[Tiny Nudges]]
- [[Tangent Line]]
- [[Limits]]
- [[Fixed-Point Stability]]
- [[Function Composition]]
- [[Taylor Polynomial]]
