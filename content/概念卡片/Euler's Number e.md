---
title: "Euler's Number e"
description: "A connected bilingual learning note about Euler's Number e."
publish: true
tags: [open-notes, concept-card]
---
# Euler's Number e

## Core Sentence / 核心句

$e$ is the unique exponential base whose function has tangent slope equal to graph height at every point.

中文理解：$e$ 的核心不是小数 $2.71828\ldots$，而是 $e^x$ 在每一点的导数都恰好等于它自己。

## Formula / 公式

$$
e\approx2.718281828
$$

$$
\frac{d}{dx}e^x=e^x
$$

$$
\lim_{h\to0}\frac{e^h-1}{h}=1
$$

## Memory Sentence / 记忆句

For $e^x$, current size and instantaneous rate of change are numerically equal.

中文：对 $e^x$，当前大小就是当前变化速度。

## When To Use / 什么时候用

连续增长、衰减、differential equations、compound interest、cooling 以及任何 $y'=ky$ 模型中，以 $e$ 为底通常最容易读出变化率。

## Watch Out / 易错点

- $e$ 的特殊性来自 derivative behavior，不是小数展开。
- $e^{g(x)}$ 仍需 [[Chain Rule]]：导数是 $e^{g(x)}g'(x)$。
- 同一个指数函数也可用其他底数表示；$e$ 是最适合连续变化的坐标语言。

## Search and Source Mentions / 搜索与出现位置

### Mentioned In / 出现位置

- [[05 - What's So Special About Euler's Number e#Knowledge Point 4: What Makes $e$ Special?|Chapter 5 · What Makes e Special?]]
  - tangent slope equals graph height everywhere
- [[05 - What's So Special About Euler's Number e#Knowledge Point 5: Chain Rule Explains $e^{kt}$|Chapter 5 · Chain Rule Explains e^(kt)]]
  - $(e^{kt})'=ke^{kt}$

## Connected Notes / 连接

- [[05 - What's So Special About Euler's Number e]]
- [[Exponential Functions]]
- [[Natural Logarithm]]
- [[Exponential Growth]]
- [[Derivatives]]
- [[Tangent Line]]
- [[Chain Rule]]
- [[Maclaurin Series]]
