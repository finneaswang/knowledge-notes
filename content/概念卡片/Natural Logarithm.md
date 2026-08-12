---
title: "Natural Logarithm"
description: "A connected bilingual learning note about Natural Logarithm."
publish: true
tags: [open-notes, concept-card]
---
# Natural Logarithm

## Core Sentence / 核心句

$\ln a$ is the exponent to which $e$ must be raised to produce $a$.

中文理解：$\ln a$ 回答的问题是：“$e$ 的多少次方等于 $a$？”

## Formula / 公式

$$
e^{\ln a}=a
$$

$$
a^x=e^{x\ln a}
$$

$$
\frac{d}{dx}a^x=(\ln a)a^x
$$

## Memory Sentence / 记忆句

The natural logarithm of the base is the proportionality constant in the derivative of that exponential.

中文：底数的自然对数，就是该指数函数“导数相对于自身”的比例常数。

## When To Use / 什么时候用

需要在一般底数与 $e$ 之间转换、解指数方程、读取 continuous growth rate 或求 $a^x$ 的导数时使用。

## Watch Out / 易错点

- $\ln a$ 只对 $a>0$ 的实数定义。
- $\ln(a+b)\neq\ln a+\ln b$。
- $\ln(a^r)=r\ln a$，这解释了 $\ln8=3\ln2$。

## Search and Source Mentions / 搜索与出现位置

### Mentioned In / 出现位置

- [[06 - Implicit Differentiation, What's Going On Here#Knowledge Point 8: Implicit Differentiation Derives the Natural-Log Formula|Chapter 6 · Natural-Log Derivative]]
  - $e^y=x$ gives $e^y\,dy=dx$, so $(\ln x)'=1/x$
- [[05 - What's So Special About Euler's Number e#Knowledge Point 6: Natural Logarithm Reveals the Mystery Constant|Chapter 5 · Natural Logarithm]]
  - $a^t=e^{(\ln a)t}$ explains the derivative constant
- [[05 - What's So Special About Euler's Number e#Knowledge Point 7: One Exponential Has Many Equivalent Forms|Chapter 5 · Equivalent Forms]]
  - base conversion makes continuous growth rates readable

## Connected Notes / 连接

- [[05 - What's So Special About Euler's Number e]]
- [[06 - Implicit Differentiation, What's Going On Here]]
- [[Implicit Differentiation]]
- [[Euler's Number e]]
- [[Exponential Functions]]
- [[Exponential Growth]]
- [[Derivative Formulas]]
- [[Chain Rule]]
