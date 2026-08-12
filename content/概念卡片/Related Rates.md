---
title: "Related Rates"
description: "A connected bilingual calculus note about Related Rates."
publish: true
tags: [calculus, concept-card]
---
# Related Rates

## Core Sentence / 核心句

A related-rates problem uses a constraint to connect the time rates of several changing quantities.

中文理解：多个量都随时间变化，而一个始终成立的关系式迫使这些变化率彼此关联。

## Formula / 公式

If:

$$
x(t)^2+y(t)^2=25
$$

then:

$$
2x\frac{dx}{dt}+2y\frac{dy}{dt}=0
$$

## Problem Routine / 做题顺序

1. Define each changing quantity as a function of time.
2. Write a constraint true at every moment.
3. Differentiate with respect to time.
4. Substitute the instant-specific values.
5. Solve with correct sign and units.

## Watch Out / 易错点

- 先求导，后代入某一时刻的数值。
- decreasing quantity 的 rate 为负。
- 区分 quantity、rate 和单位。
- equation 必须在整个运动过程中成立，不只是某一个瞬间碰巧成立。

## Search and Source Mentions / 搜索与出现位置

### Mentioned In / 出现位置

- [[微积分BC第5次正课-相关变化率线性近似与中值定理#4. The Reliable Routine / 稳定三步法|微积分BC第5次正课 · Related-Rates Routine]]
  - connect quantities, differentiate with respect to time, then substitute the instant
- [[微积分BC第4次正课-反函数高阶导数与运动应用#25. What Related Rates Connect / 相关变化率连接什么|微积分BC第4次正课 · Related Rates Preview]]
  - time is the common input and a constraint links dx/dt with dy/dt
- [[06 - Implicit Differentiation, What's Going On Here#Knowledge Point 3: Related Rates Gives Both Variables a Common Driver|Chapter 6 · Ladder Setup]]
  - $x(t)$ and $y(t)$ share time as a common input
- [[06 - Implicit Differentiation, What's Going On Here#Knowledge Point 4: Differentiating the Constraint Relates the Two Rates|Chapter 6 · Ladder Solution]]
  - the fixed ladder length forces $dx/dt$ and $dy/dt$ to balance

## Connected Notes / 连接

- [[微积分BC第5次正课-相关变化率线性近似与中值定理]]
- [[微积分BC第4次正课-反函数高阶导数与运动应用]]
- [[06 - Implicit Differentiation, What's Going On Here]]
- [[Implicit Differentiation]]
- [[Implicit Curve]]
- [[Chain Rule]]
- [[Derivatives]]
- [[Instantaneous Rate of Change]]
