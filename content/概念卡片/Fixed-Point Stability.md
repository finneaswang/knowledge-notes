---
title: "Fixed-Point Stability"
description: "A connected bilingual learning note about Fixed-Point Stability."
publish: true
tags: [open-notes, concept-card]
---
# Fixed-Point Stability

## Core Sentence / 核心句

A fixed point is locally stable when repeated application of the function contracts small errors around it.

中文理解：不动点本身满足 $f(p)=p$；稳定性进一步问，受到微小扰动后，迭代是回到它还是远离它。

## Formula / 公式或规则

For $x_{n+1}=f(x_n)$ and $f(p)=p$:

$$
e_{n+1}\approx f'(p)e_n
$$

$$
|f'(p)|<1\Rightarrow\text{locally attracting},
\qquad
|f'(p)|>1\Rightarrow\text{locally repelling}.
$$

## When To Use / 什么时候用

用于 repeated function iteration、fixed-point algorithms、recursive sequences 和 dynamical systems 的局部收敛判断。

## Watch Out / 易错点

必须看 $|f'(p)|$，不是只看 $f'(p)<1$。这个 test 是 local 的；$|f'(p)|=1$ 时不能下结论，还需 higher-order analysis。

## Search and Source Mentions / 搜索与出现位置

### Mentioned In / 出现位置

- [[01 - Differential Equations, a Tourist's Guide#Knowledge Point 11: Fixed Points and Stability Describe Whole Families of Initial States|Differential Equations 01 · Continuous-Time Stability]]
  - phase flow asks whether nearby states contract toward or expand away from an equilibrium
- [[12 - The Other Way to Visualize Derivatives#Knowledge Point 9: A Stable Fixed Point Locally Contracts Nearby Errors|Chapter 12 · Stable Fixed Point]]
  - local linearization turns derivative magnitude into an error-contraction factor
- [[12 - The Other Way to Visualize Derivatives#Knowledge Point 10: An Unstable Fixed Point Locally Expands Nearby Errors|Chapter 12 · Unstable Fixed Point]]
  - the negative fixed point of $1+1/x$ expands and flips nearby errors
- [[12 - The Other Way to Visualize Derivatives#Knowledge Point 11: Algebraic Solutions and Limiting Values Answer Different Questions|Chapter 12 · Roots vs Limits]]
  - solving $f(p)=p$ finds candidates, while stability decides attracting limits

## Connected Notes / 连接

- [[12 - The Other Way to Visualize Derivatives]]
- [[Transformational View of Derivatives]]
- [[Derivatives]]
- [[Limits]]
- [[Function Composition]]
- [[Higher-Order Derivatives]]
- [[Phase Space]]
- [[01 - Differential Equations, a Tourist's Guide]]
