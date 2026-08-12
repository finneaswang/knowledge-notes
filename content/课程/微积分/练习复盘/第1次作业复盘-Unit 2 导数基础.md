---
title: "第1次作业复盘 - Unit 2 导数基础"
description: "A connected bilingual learning note about 第1次作业复盘 - Unit 2 导数基础."
publish: true
tags: [open-notes, calculus-review]
---
# 第1次作业复盘 - Unit 2 导数基础

## Reading Guide / 阅读说明

这是第一份扫描作业的正式基线。扫描中黑色表示独立过程，红色表示求助或纠正；评价重点是“哪里需要外部连接”，不是只统计最终选项。

> **Baseline conclusion:** 基础代数与直接求导并不弱；真正的不稳定点是 derivative language、graph interpretation、differentiability conditions 与题型入口。

## Evidence Boundary / 证据边界

- 范围：练习册 P27-P41。
- P27-P38：MC 模拟题与真题。
- P39-P41：FRQ。
- 红色集中出现在题型识别、图像判断、chain/exponential rules 与 piecewise differentiability。
- 补充对话保留了部分做题时的口头推理；其中只有图片、没有题干文字的轮次不单独据此判定对错。
- 最终答案正确不等于已经独立掌握；有红色帮助的题仍进入重做队列。

## What Was Already Independent / 已经能独立完成

从黑色过程可确认：

- 能计算 table-based difference quotient，并理解相邻数据用于估算 derivative。
- Power Rule、Quotient Rule 和常见代数化简具备基础流畅度。
- 能从函数表代入 $f,f',g,g'$，完成抽象规则题。
- P41 的 FRQ 写法已经接近理想：公式、代入、结果、单位都短而完整。
- P39、P40 的数学结果正确，说明 average slope estimate 与 contextual interpretation 已经可以完成。
- 做 $H'(6)$ 时，能先独立选择 $t=5,7$ 做 centered difference，并口头说明“第 6 年树高的瞬时变化率”。
- 做 $C'(3.5)$ 时，能选择 $t=3,4$，也知道 derivative 的单位应为 ounces/minute。
- 面对 $B(t)=16-16e^{-0.4t}$，已经知道要对模型求导，并判断导数前的系数应为正；错误只发生在 exponential Chain Rule 的细节。

对应已有节点：[[Derivatives]]、[[微积分BC第3次正课-可导性链式法则与隐函数求导#3. Quotient Rule / 商法则|Quotient Rule]]、[[Average Rate of Change]]、[[Tangent Line]]。

## Main Gaps / 主要缺口

### 1. Derivative-definition recognition (`R`)

看到

$$
\lim_{h\to0}\frac{f(a+h)-f(a)}h
$$

时，容易进入展开计算，而没有先识别为 $f'(a)$。

正确入口：先匹配模板，再决定是否需要计算。连接 [[Derivatives]] 与 [[微积分BC第2次正课-极限应用与导数入门]]。

### 2. Graph language (`R`)

困难集中在：

- graph of $f$ 与 graph of $f'$ 的对象切换；
- continuity、differentiability、corner/cusp 的区别；
- 从图像判断 slope、increasing/decreasing 与 derivative existence。

最重要的问题不是“图看不懂”，而是读图前没有先写：**This is the graph of ____**。

连接 [[微积分BC第3次正课-可导性链式法则与隐函数求导#5. What Differentiable Means / 可导到底是什么意思|Differentiability]]、[[Tangent Line]]、[[Derivatives]]。

### 3. Piecewise differentiability (`R + M`)

连接点可导必须依次通过：

1. function values match；
2. one-sided limits match；
3. left and right derivatives match。

只满足连续不保证可导。连接 [[微积分BC第3次正课-可导性链式法则与隐函数求导#7. Differentiability and Continuity / 可导与连续|Continuity and Differentiability]]。

### 4. Formula retrieval and rule selection (`M`)

红色帮助较多的题涉及：

- exponential / trigonometric derivative；
- nested functions 的 inner derivative；
- 从定义反推 derivative；
- graph-based composite derivative。

这里需要的不是再背一张更长公式表，而是先识别 outer operation。连接 [[Derivative Formulas]]、[[Function Composition]]、[[Chain Rule]]。

### 5. Candidate-value logic is not rounding (`R`)

遇到计算结果 $29.5$，而选项或候选整数为 $29,30$ 时，不能直接问“应该四舍五入成哪一个”。先回到题目条件，判断它是在问：

- 哪个整数一定落在某个 interval 内；
- 哪个候选值满足 Mean Value Theorem；
- 还是确实要求 nearest integer。

也就是说，$29.5$ 通常是帮助确定区间或候选范围的边界信息，不自动等于“选 30”。连接 [[Mean Value Theorem]]。

### 6. Exponential Chain Rule keeps the exponent (`M`)

对

$$
B(t)=16-16e^{-0.4t}
$$

求导时，指数表达式仍然是 $-0.4t$：

$$
B'(t)=-16e^{-0.4t}(-0.4)=6.4e^{-0.4t}.
$$

inner derivative $-0.4$ 乘到外面，不会把指数改成 $-1.4t$。一句对应关系：**Differentiate the exponent outside; keep the original exponent inside. / 指数内部求导乘到外面，原指数留在里面。**

## FRQ Review / FRQ 复盘

### P39 - Estimate $R'(2)$

数学结果正确：

$$
R'(2)\approx\frac{R(3)-R(1)}{3-1}=-120\ \text{liters/hour}^2.
$$

题目只要求 estimate、work 和 units。第一段短答案已经足够，后面的长解释不增加得分，反而增加矛盾风险。

### P40 - Estimate and interpret $H'(6)$

估算 $2.5\text{ m/year}$ 正确。满分解释只需：

> At $t=6$, the height of the tree is increasing at approximately $2.5$ meters per year.

补充对话确认：区间选择和情境解释是先由你口头完成的，之后才询问怎样写成正常的 UBC student-answer format。因此这里的问题不是不会建立 derivative estimate，而是需要把已有思路压缩成得分句。

### P41 - Table estimate and model derivative

两部分计算正确，格式是本次作业最好的 FRQ 样本。注意第二小问原题编号是 `(d)`，不应写成 `(b)`。

## Rework Queue / 重做清单

### Tier A - 必须无提示重做

- derivative-definition recognition：代表题 1、20、21；
- graph / differentiability：代表题 4、5、6、18；
- chain and formula retrieval：代表题 11、14、22、24；
- piecewise / continuity logic：代表题 25、27、28、32。
- candidate-value / interval logic：重做出现 $29.5$ 的那一题，并写明“这是区间判断还是 rounding”；
- exponential model：无提示写出 $B'(t)$，再用一句话说明指数为什么不变成 $-1.4t$。

### Tier B - FRQ 压缩

- P39：只写计算与单位；
- P40：只写计算和一句 contextual interpretation；
- P41：保持现有短格式并修正小问编号。

## Mastery Check / 掌握检查

不看答案完成以下口头判断：

1. 这个 limit 为什么是 derivative definition？
2. 当前图像画的是 $f$ 还是 $f'$？
3. 连接点为什么要先连续再比较左右导数？
4. 这道题最外层是 product、quotient 还是 composition？

四问均能回答并重做 Tier A，才把本次状态改为 `mastered`。

## Connections / 连接

- [[00 作业复盘索引]]
- [[第2次作业复盘-Unit 3 复合隐函数与反函数]]
- [[微积分BC第2次正课-极限应用与导数入门]]
- [[微积分BC第3次正课-可导性链式法则与隐函数求导]]
- [[Derivatives]]
- [[Derivative Formulas]]
- [[微积分BC第3次正课-可导性链式法则与隐函数求导#5. What Differentiable Means / 可导到底是什么意思|Differentiability]]
- [[Function Composition]]
- [[Chain Rule]]
- [[Tangent Line]]
