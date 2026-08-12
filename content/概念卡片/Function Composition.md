---
title: "Function Composition"
description: "A connected bilingual calculus note about Function Composition."
publish: true
tags: [calculus, concept-card]
---
# Function Composition

## Core Sentence / 核心句

Function composition passes the output of one function into another function as its input.

中文理解：复合函数不是普通相乘，而是前一层函数先算出一个结果，再把这个结果送进后一层函数。

## Formula / 公式

$$
(g\circ h)(x)=g(h(x))
$$

Flow:

$$
x\xrightarrow{h}h(x)\xrightarrow{g}g(h(x))
$$

## Example / 例子

$$
\sin(x^2)
$$

表示先做 $x\mapsto x^2$，再做 $u\mapsto\sin u$。

注意：

$$
\sin(x^2)\neq\sin^2x
$$

## When To Use / 什么时候用

分析函数层级、确定 outer/inner function、使用 [[Chain Rule]] 时使用。

## Watch Out / 易错点

函数的执行顺序不能交换。先识别最外层 operation，再沿层级向内拆。

## Search and Source Mentions / 搜索与出现位置

### Mentioned In / 出现位置

- [[微积分BC第3次正课-可导性链式法则与隐函数求导#9. Recognize Function Composition / 识别复合函数|微积分BC第3次正课 · Recognize Function Composition]]
  - identifying outer and inner layers determines the order of Chain Rule differentiation
- [[04 - Visualizing the Chain Rule and Product Rule#6. Function Composition / 函数复合|Chapter 4 · Function Composition]]
  - three number lines show $x\to h(x)\to g(h(x))$

## Connected Notes / 连接

- [[微积分BC第3次正课-可导性链式法则与隐函数求导]]
- [[04 - Visualizing the Chain Rule and Product Rule]]
- [[Chain Rule]]
- [[Product Rule]]
- [[Derivatives]]
- [[Derivative Formulas]]
