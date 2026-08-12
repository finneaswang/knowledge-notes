---
title: "Fundamental Theorem of Calculus"
description: "A connected bilingual learning note about Fundamental Theorem of Calculus."
publish: true
tags: [open-notes, concept-card]
---
# Fundamental Theorem of Calculus

## Core Sentence / 核心句

The Fundamental Theorem of Calculus links accumulation and rate of change.

中文理解：微积分基本定理说明积分和导数不是两个孤立工具，而是互相反向的过程。

## Formula / 公式或规则

If

$$
F(x)=\int_a^x f(t)\,dt
$$

then

$$
F'(x)=f(x)
$$

If $G'(x)=f(x)$, then

$$
\int_a^bf(x)\,dx=G(b)-G(a).
$$

Part 1 differentiates accumulation; Part 2 computes accumulation from antiderivative endpoint change.

## When To Use / 什么时候用

看到 accumulated area function、derivative of integral、net change，就想到 FTC。

## Watch Out / 易错点

不要只记成“积分求反导”；它的概念核心是 accumulation 和 original function 的连接。

## Search and Source Mentions / 搜索与出现位置

### Mentioned In / 出现位置

- [[09 - What Does Area Have to Do With Slope#Knowledge Point 4: Average Function Value Becomes the Secant Slope of an Antiderivative|Chapter 9 · Area and Slope]]
  - dividing FTC by interval width turns total accumulation into average slope
- [[08 - Integration and the Fundamental Theorem of Calculus#Knowledge Point 6: The Derivative of an Accumulated-Area Function Is the Original Height|Chapter 8 · Area-Function Derivative]]
  - the derivative of accumulated area equals the current integrand height
- [[08 - Integration and the Fundamental Theorem of Calculus#Knowledge Point 8: Bounds Select the Correct Net Accumulation|Chapter 8 · Endpoint Evaluation]]
  - $\int_a^bf=F(b)-F(a)$ compresses continuous accumulation into two endpoint values
- [[01 - The Essence of Calculus#Knowledge Point 6: Derivative and Integral Undo Each Other|01 - The Essence of Calculus · Knowledge Point 6: Derivative and Integral Undo Each Other]]
  - `这就是 Fundamental Theorem of Calculus 的直觉版。`
- [[微积分BC第8次正课-反导FTC变上限积分与换元#11. FTC Part 2: Compute Accumulation From Endpoints / 用端点计算累积|第8课 · FTC Part 2]]
  - continuous accumulation equals antiderivative endpoint change
- [[微积分BC第8次正课-反导FTC变上限积分与换元#17. FTC Part 1: Differentiate Accumulation / 对累计函数求导|第8课 · FTC Part 1]]
  - the derivative of an accumulation function recovers the current integrand

## Connected Notes / 连接

- [[01 - The Essence of Calculus]]
- [[08 - Integration and the Fundamental Theorem of Calculus]]
- [[09 - What Does Area Have to Do With Slope]]
- [[Average Value of a Function]]
- [[Riemann Sum]]
- [[Antiderivative]]
- [[Signed Area]]
- [[Integrals]]
- [[Derivatives]]
- [[Area Under a Curve]]
- [[Definite Integral]]
- [[Accumulation Function]]
- [[微积分BC第8次正课-反导FTC变上限积分与换元]]
