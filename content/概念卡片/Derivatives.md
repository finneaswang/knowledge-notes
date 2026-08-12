---
title: "Derivatives"
description: "A connected bilingual learning note about Derivatives."
publish: true
tags: [open-notes, concept-card]
---
# Derivatives

## Core Sentence / 核心句

A derivative is the best local linear description of how a function changes at a point.

中文理解：导数不是普通一段的变化率，而是某一点附近最好的线性变化描述。

## Formula / 公式或规则

$$
f'(x)=\lim_{h\to0}\frac{f(x+h)-f(x)}{h}
$$

## When To Use / 什么时候用

看到 instantaneous rate、tangent slope、local change、$d/dx$，就想到 derivative。

## Watch Out / 易错点

不要只记成 rate of change；更准确是 local linear change / best constant approximation。

## Search and Source Mentions / 搜索与出现位置

### Mentioned In / 出现位置

- [[微积分BC第6次正课-导数符号极值与凹凸性#17. First-Derivative Analysis Tree / 一阶导数知识树|微积分BC第6次正课 · First-Derivative Analysis Tree]]
  - derivative signs lead from monotonicity to critical candidates, local extrema, and absolute extrema
- [[微积分BC第5次正课-相关变化率线性近似与中值定理#23. Mean Value Theorem Statement / 中值定理|微积分BC第5次正课 · Mean Value Theorem]]
  - an interior derivative is guaranteed to equal the endpoint average rate under MVT hypotheses
- [[微积分BC第4次正课-反函数高阶导数与运动应用#12. What a Derivative Means in Context / 导数的文字意义|微积分BC第4次正课 · Derivative Meaning in Context]]
  - a derivative keeps the original quantity and adds its rate of change with output-units per input-unit
- [[微积分BC第3次正课-可导性链式法则与隐函数求导#5. What Differentiable Means / 可导到底是什么意思|微积分BC第3次正课 · What Differentiable Means]]
  - differentiability requires one finite local slope from both sides
- [[微积分BC第2次正课-极限应用与导数入门#8. From Secant to Tangent / 从割线到切线|微积分BC第2次正课 · From Secant to Tangent]]
  - secant slopes approach the tangent slope, producing the best local linear description
- [[12 - The Other Way to Visualize Derivatives#Knowledge Point 2: A Derivative Measures Sensitivity to Tiny Input Nudges|Chapter 12 · Sensitivity to Tiny Nudges]]
  - derivative is the first-order conversion factor from an input nudge to an output nudge
- [[12 - The Other Way to Visualize Derivatives#Knowledge Point 3: View a Function as a Mapping Between Number Lines|Chapter 12 · Local Scale Factor]]
  - the same derivative that appears as graph slope appears as local stretching or contraction in a transformation
- [[10 - Higher Order Derivatives#Knowledge Point 1: Higher-Order Derivatives Repeat the Same Question|Chapter 10 · Repeated Differentiation]]
  - each derivative measures how the previous-order behavior changes
- [[10 - Higher Order Derivatives#Knowledge Point 2: The Second Derivative Measures Changing Slope|Chapter 10 · Second Derivative]]
  - the second derivative measures local change in slope
- [[08 - Integration and the Fundamental Theorem of Calculus#Knowledge Point 6: The Derivative of an Accumulated-Area Function Is the Original Height|Chapter 8 · Derivative of Accumulation]]
  - differentiating accumulated area returns the original local rate
- [[07 - Limits, L'Hopital's Rule, and Epsilon-Delta Definitions#Knowledge Point 1: A Derivative Is the Limit of Nearby Secant Slopes|Chapter 7 · Formal Derivative Definition]]
  - the derivative is the limit of the difference quotient as a nonzero input nudge approaches zero
- [[06 - Implicit Differentiation, What's Going On Here#Knowledge Point 6: A Two-Variable Differential Predicts the Change From Any Tiny Step|Chapter 6 · Two-Variable Differential]]
  - a derivative predicts the first-order response to a tiny step in multiple variables
- [[05 - What's So Special About Euler's Number e#Knowledge Point 3: Every Exponential Derivative Is Proportional to Itself|Chapter 5 · General Exponential Derivative]]
  - every exponential derivative is a base-dependent constant times the original function
- [[04 - Visualizing the Chain Rule and Product Rule#15. Knowledge Graph Connections / 知识图谱连接|Chapter 4 · Knowledge Graph Connections]]
  - derivative rules describe how first-order changes combine and pass through function structure
- [[AP电磁学第1次正课-电荷库仑定律与电场#Derivatives and Integrals / 微积分工具|AP电磁学第1次正课-电荷库仑定律与电场 · Derivatives and Integrals / 微积分工具]]
  - `Derivatives and Integrals / 微积分工具`
- [[03 - Derivative Formulas through Geometry#Knowledge Point 2: Tiny Nudge Is the Real Meaning of $dx$|03 - Derivative Formulas through Geometry · Knowledge Point 2: Tiny Nudge Is the Real Meaning of $dx$]]
  - `- Chapter 2 的精确语言是：Derivatives come from a Limits process.`
- [[03 - Derivative Formulas through Geometry#Knowledge Point 3: Why $\frac{d}{dx}x^2=2x$|03 - Derivative Formulas through Geometry · Knowledge Point 3: Why $\frac{d}{dx}x^2=2x$]]
  - `- Derivatives：概念上是 output change per input change。`
- [[01 - The Essence of Calculus#Knowledge Point 6: Derivative and Integral Undo Each Other|01 - The Essence of Calculus · Knowledge Point 6: Derivative and Integral Undo Each Other]]
  - `Derivatives and integrals are inverses of each other.`
- [[03 - Derivative Formulas through Geometry#1. What This Episode Is About / 这一集在讲什么|03 - Derivative Formulas through Geometry · 1. What This Episode Is About / 这一集在讲什么]]
  - `Chapter 1 先讲 Integrals 和 accumulated area；Chapter 2 解释 Derivatives 到底是什么意思：不是神秘的 instantaneous change，而是 Limits 下的 Average Rate of Change。`
- [[02 - The Paradox of the Derivative#2. Link to Previous Episode / 和上一集的连接|02 - The Paradox of the Derivative · 2. Link to Previous Episode / 和上一集的连接]]
  - `Chapter 1: why integrals and derivatives are connected`
- [[03 - Derivative Formulas through Geometry#4. Deep Phrases / 深句对应表|03 - Derivative Formulas through Geometry · 4. Deep Phrases / 深句对应表]]
  - `| tiny nudges are the heart of derivatives | 导数就是输入被轻推 $dx$ 后，输出如何响应 $df$。 |`
- [[AP电磁学第1次正课-电荷库仑定律与电场#2. Class Flow / 课堂脉络|AP电磁学第1次正课-电荷库仑定律与电场 · 2. Class Flow / 课堂脉络]]
  - `1. 课前工具：Vectors、derivatives/integrals、kinematics、Newton's Second Law、energy and momentum。`

## Connected Notes / 连接

- [[微积分BC第6次正课-导数符号极值与凹凸性]]
- [[First Derivative Test]]
- [[Absolute Extrema]]
- [[微积分BC第5次正课-相关变化率线性近似与中值定理]]
- [[微积分BC第4次正课-反函数高阶导数与运动应用]]
- [[微积分BC第3次正课-可导性链式法则与隐函数求导]]
- [[微积分BC第2次正课-极限应用与导数入门]]
- [[AP电磁学第10次正课-等效电容与RC电路#Knowledge Point 16: Current Is the Time Derivative of Charge|第10次正课 · current as $dq/dt$]]
- [[RC Circuits]]
- [[01 - Differential Equations, a Tourist's Guide]]
- [[Differential Equations]]
- [[12 - The Other Way to Visualize Derivatives]]
- [[Transformational View of Derivatives]]
- [[Fixed-Point Stability]]
- [[02 - The Paradox of the Derivative]]
- [[03 - Derivative Formulas through Geometry]]
- [[04 - Visualizing the Chain Rule and Product Rule]]
- [[05 - What's So Special About Euler's Number e]]
- [[06 - Implicit Differentiation, What's Going On Here]]
- [[07 - Limits, L'Hopital's Rule, and Epsilon-Delta Definitions]]
- [[08 - Integration and the Fundamental Theorem of Calculus]]
- [[10 - Higher Order Derivatives]]
- [[Higher-Order Derivatives]]
- [[Second Derivative]]
- [[Concavity]]
- [[Acceleration]]
- [[Antiderivative]]
- [[L'Hôpital's Rule]]
- [[Implicit Differentiation]]
- [[Related Rates]]
- [[Exponential Functions]]
- [[Euler's Number e]]
- [[Exponential Growth]]
- [[Product Rule]]
- [[Chain Rule]]
- [[Limits]]
- [[Tangent Line]]
- [[Instantaneous Rate of Change]]
