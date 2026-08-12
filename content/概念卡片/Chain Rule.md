---
title: "Chain Rule"
description: "A connected bilingual calculus note about Chain Rule."
publish: true
tags: [calculus, concept-card]
---
# Chain Rule

## Core Sentence / 核心句

The Chain Rule multiplies the rates at which a tiny change passes through successive function layers.

中文理解：输入变化经过多层函数时，每一层都按自己的局部倍率放大、缩小或反向这个变化；最终倍率是各层倍率的乘积。

## Formula / 公式

$$
\frac{d}{dx}g(h(x))
=g'(h(x))h'(x)
$$

Leibniz notation:

$$
\frac{dg}{dx}
=\frac{dg}{dh}\frac{dh}{dx}
$$

## Memory Sentence / 记忆句

Differentiate the outside at the unchanged inside, then multiply by the derivative of the inside.

中文：外导内不动，再乘内导。

## When To Use / 什么时候用

最外层结构是 [[Function Composition]]，也就是一个函数的输出被送入另一个函数时使用。

## Watch Out / 易错点

- 不要漏掉 inner derivative。
- 外层求导时，inner function 先原样保留。
- $dh$ 的相消反映真实的变化传递，不只是随意的分数约分。

## Search and Source Mentions / 搜索与出现位置

### Mentioned In / 出现位置

- [[微积分BC第3次正课-可导性链式法则与隐函数求导#10. Chain Rule / 链式法则|微积分BC第3次正课 · Chain Rule]]
  - local rates multiply as a tiny change passes through nested function layers
- [[07 - Limits, L'Hopital's Rule, and Epsilon-Delta Definitions#Knowledge Point 7: L'Hôpital's Rule Comes From Comparing Local Linear Changes|Chapter 7 · L'Hopital Example]]
  - $d[\sin(\pi x)]\approx\pi\cos(\pi x)\,dx$ supplies the numerator's local change
- [[06 - Implicit Differentiation, What's Going On Here#Knowledge Point 4: Differentiating the Constraint Relates the Two Rates|Chapter 6 · Differentiating the Constraint]]
  - $x(t)^2$ differentiates to $2x\,dx/dt$ because $x$ depends on time
- [[05 - What's So Special About Euler's Number e#Knowledge Point 5: Chain Rule Explains $e^{kt}$|Chapter 5 · Chain Rule Explains e^(kt)]]
  - the inner rate $k$ multiplies the unchanged outer exponential
- [[04 - Visualizing the Chain Rule and Product Rule#7. Chain Rule / 链式法则|Chapter 4 · Chain Rule]]
  - $dx\to dh\to df$ explains why successive local rates multiply

## Connected Notes / 连接

- [[微积分BC第3次正课-可导性链式法则与隐函数求导]]
- [[04 - Visualizing the Chain Rule and Product Rule]]
- [[05 - What's So Special About Euler's Number e]]
- [[06 - Implicit Differentiation, What's Going On Here]]
- [[07 - Limits, L'Hopital's Rule, and Epsilon-Delta Definitions]]
- [[Implicit Differentiation]]
- [[Related Rates]]
- [[Exponential Functions]]
- [[Euler's Number e]]
- [[Function Composition]]
- [[Product Rule]]
- [[Derivatives]]
- [[Tiny Nudges]]
- [[Derivative Formulas]]
