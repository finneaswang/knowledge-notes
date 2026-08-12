---
title: "Second Difference"
description: "A connected bilingual learning note about Second Difference."
publish: true
tags: [open-notes, concept-card]
---
# Second Difference

## One-Sentence Idea / 一句话

> A second difference measures how consecutive first differences change.

二阶差分是相邻一阶差分的差，也等价于测量中间值相对于两侧邻居平均值的偏离。

## Core Form

$$
\Delta^2T_i=T_{i+1}-2T_i+T_{i-1}.
$$

若网格间距为 $h$：

$$
\frac{\Delta^2T_i}{h^2}
=\frac{T(x+h)-2T(x)+T(x-h)}{h^2}
\longrightarrow T''(x).
$$

它是 discrete model 与 [[Second Derivative]] 之间的桥。

## Sign Intuition

- $\Delta^2T_i>0$：中间值低于邻居平均值。
- $\Delta^2T_i=0$：三个点局部落在一条直线趋势上。
- $\Delta^2T_i<0$：中间值高于邻居平均值。

## Connections

- [[Heat Equation]]
- [[Second Derivative]]
- [[Concavity]]
- [[Euler Method]]
- [[02 - But What Is a Partial Differential Equation#Knowledge Point 8: Neighbor Averaging Becomes a Second Difference]]

## Search and Source Mentions

- Main source: [[02 - But What Is a Partial Differential Equation]]
