---
title: "3Blue1Brown - The Essence of Calculus 06 - Implicit Differentiation, What's Going On Here?"
description: "A connected bilingual learning note about 3Blue1Brown - The Essence of Calculus 06 - Implicit Differentiation, What's Going On Here?."
publish: true
tags: [open-notes, visual-calculus]
---
# 3Blue1Brown - The Essence of Calculus 06 - Implicit Differentiation, What's Going On Here?

## Reading Guide / 阅读说明

这是一份伴读型笔记。单独阅读时，它应该像一章书一样重建视频提出问题、解释困惑和推出公式的全过程；配合视频时，每个 Knowledge Point 的时间段可以帮助你快速定位。英文保留核心概念和可复用表达，中文负责解释每一步为什么成立。

Connected from:

- [[05 - What's So Special About Euler's Number e]]
- [[04 - Visualizing the Chain Rule and Product Rule]]
- [[Derivatives]]
- [[Tangent Line]]
- [[UBC Knowledge Graph]]

## 1. What This Episode Is About / 这一集在讲什么

一般求导题把 $y$ 明确写成 $x$ 的函数：

$$
y=f(x)
$$

但圆：

$$
x^2+y^2=25
$$

不是整个意义上的 function graph，因为同一个 $x$ 可能对应上下两个 $y$。然而，我们仍然想求圆上某一点的 tangent slope：

$$
\frac{dy}{dx}
$$

课堂上的操作看起来很奇怪：

$$
x^2+y^2=25
$$

两边“求导”后变成：

$$
2x\,dx+2y\,dy=0
$$

为什么 $x^2$ 后面带 $dx$，$y^2$ 后面带 $dy$？一个含有两个变量的表达式究竟怎么求导？

本集的目标就是解释这套符号背后的真实图像：

> A derivative tells us how an expression responds to a tiny step in its variables.

中文：

> 导数描述的是变量发生一个微小移动时，整个表达式会怎样响应。

## 2. Link to Previous Episodes / 和前几集的连接

Chapter 2 把 derivative 解释为 local linear description；Chapter 3 用 [[Tiny Nudges]] 表示 $dx\to df$；Chapter 4 说明 [[Chain Rule]] 如何追踪多层变化；Chapter 5 用 chain rule 处理 $e^{kt}$。

本集把这套语言从单输入函数推进到两个相互依赖的变量：

```text
single input:       dx -> df
implicit relation: (dx, dy) -> change of an expression
curve condition:   allowed (dx, dy) must preserve the equation
```

因此，implicit differentiation 不是一套突然出现的新符号规则，而是 tiny-nudge viewpoint 的自然延伸。

## 3. Class Flow / 视频脉络

1. 从半径为 5 的圆开始，求点 $(3,4)$ 处的 tangent slope。
2. 说明圆是 [[Implicit Curve]]，不是全局的 function graph。
3. 展示看似奇怪的操作：$2x\,dx+2y\,dy=0$。
4. 暂时放下圆，进入 5-meter ladder 的 [[Related Rates]] 问题。
5. 让 $x(t)$、$y(t)$ 通过时间共同变化，再对恒等式求 time derivative。
6. 用 [[Chain Rule]] 得到 $2x\,dx/dt+2y\,dy/dt=0$。
7. 比较 ladder 与 circle：两者其实在处理同一个约束关系。
8. 把 $s=x^2+y^2$ 看成 two-variable function，解释 $ds=2x\,dx+2y\,dy$。
9. 指出沿圆移动时 $s$ 必须保持 25，因此 $ds=0$。
10. 用 $\sin(x)y^2=x$ 展示一般 implicit differentiation。
11. 把 $y=\ln x$ 改写成 $e^y=x$，推出 $(\ln x)'=1/x$。
12. 最后预告 multivariable calculus 与 limits。

## 4. Core Ideas / 核心知识块

### Knowledge Point 1: An Implicit Curve Is a Relation, Not Necessarily a Function Graph

**Video:** 00:00:10-00:02:03

考虑以原点为圆心、半径为 5 的圆：

$$
x^2+y^2=25
$$

这个等式来自 Pythagorean theorem：圆上任意点 $(x,y)$ 到原点的距离都是 5。

我们想求点：

$$
(x,y)=(3,4)
$$

处的 tangent slope。

几何上可以知道 tangent line 与 radius perpendicular；但视频希望建立一种能推广到其他曲线的方法，所以仍从微积分的基本动作出发：zoom in。

当放大得足够近，曲线与 tangent line 几乎相同。一小步沿切线移动时：

- horizontal component = $dx$
- vertical component = $dy$
- tangent slope = $dy/dx$

困难在于，整个圆不是 $y=f(x)$ 的图像。对同一个 $x$，可能有两个 $y$：

$$
y=\pm\sqrt{25-x^2}
$$

这里的 $x$ 不是天然的 input，$y$ 也不是天然的 output；它们只是被同一个方程约束的 interdependent values。

这就是 [[Implicit Curve]]：

> An implicit curve is the set of all points $(x,y)$ that satisfy a relation involving both variables.

中文理解：隐式曲线不是先指定“输入进去、输出出来”，而是收集所有满足某个共同条件的点。

**When to use / 使用信号：**  
看到 $x$ 与 $y$ 混在同一个 equation 中，而且不方便或无法先把 $y$ 单独解出来时，就考虑 [[Implicit Differentiation]]。

### Knowledge Point 2: The Circle Procedure Finds the Allowed Tiny Direction

**Video:** 00:02:04-00:03:16

对圆的 equation 两边写出微小变化：

$$
d(x^2+y^2)=d(25)
$$

由 sum rule：

$$
d(x^2)+d(y^2)=0
$$

由 power rule：

$$
2x\,dx+2y\,dy=0
$$

整理：

$$
2y\,dy=-2x\,dx
$$

$$
\boxed{\frac{dy}{dx}=-\frac{x}{y}}
$$

在 $(3,4)$：

$$
\boxed{\frac{dy}{dx}=-\frac34}
$$

这与几何结果一致：radius 从 $(0,0)$ 指向 $(3,4)$，斜率为 $4/3$；垂直切线的斜率是 negative reciprocal：$-3/4$。

此时操作虽然算对了，但核心疑问还没有解决：

- 为什么可以对两个变量一起写 derivative？
- 为什么 $x^2$ 产生 $2x\,dx$？
- 为什么 $y^2$ 产生 $2y\,dy$？
- 为什么最后令总变化等于 0？

视频接下来用 related rates 给这些符号一个更熟悉的解释。

### Knowledge Point 3: Related Rates Gives Both Variables a Common Driver

**Video:** 00:03:16-00:05:16

考虑一把 5-meter ladder 靠在墙上：

- top height: $y(t)$
- bottom distance from wall: $x(t)$
- ladder length: $5$

初始时：

$$
y(0)=4,\qquad x(0)=3
$$

因为 $3^2+4^2=5^2$。

梯子顶端以每秒 1 米向下滑：

$$
\frac{dy}{dt}=-1 \text{m/s}
$$

问题是此刻底端向外移动多快：

$$
\frac{dx}{dt}=?
$$

梯子长度不变，所以任意时刻都满足：

$$
x(t)^2+y(t)^2=25
$$

这条 equation 的力量来自：

> It remains true at every moment, even though $x$ and $y$ are both changing.

中文理解：$x$ 与 $y$ 可以变化，但它们必须一起变化到仍然满足长度约束的位置。

可以先把 $x$ 解出来再求导，但那会引入 square root 和多层 chain rule。本集选择直接对始终成立的 relation 求 time derivative。

### Knowledge Point 4: Differentiating the Constraint Relates the Two Rates

**Video:** 00:05:17-00:07:13

把：

$$
x(t)^2+y(t)^2
$$

看成一个 time function。虽然它始终等于 25，但它仍然是以 $t$ 为共同输入的表达式。

对时间求导：

$$
\frac{d}{dt}[x(t)^2+y(t)^2]
=\frac{d}{dt}(25)
$$

由 [[Chain Rule]]：

$$
2x\frac{dx}{dt}+2y\frac{dy}{dt}=0
$$

代入初始状态：

$$
2(3)\frac{dx}{dt}+2(4)(-1)=0
$$

$$
6\frac{dx}{dt}-8=0
$$

$$
\boxed{\frac{dx}{dt}=\frac43\ \text{m/s}}
$$

正号表示 ladder bottom 正在远离墙面。

这里每一项都有明确意义：

$$
2x\frac{dx}{dt}
$$

是 $x^2$ 随时间变化的 rate；

$$
2y\frac{dy}{dt}
$$

是 $y^2$ 随时间变化的 rate。两者相加必须为 0，因为 $x^2+y^2$ 保持 constant。

**Related-rates routine / 做题顺序：**

1. 给所有 changing quantities 命名，并明确它们是 time functions。
2. 写一条在所有时刻都成立的 constraint equation。
3. 先对时间求导，再代入某一瞬间的数值。
4. 保留 rate 的正负号和单位。

**Common mistake：** 不要在求导前过早代入 $x=3,y=4$。先保留变量求导，才能得到 $dx/dt$ 与 $dy/dt$ 的关系。

### Knowledge Point 5: The Circle and Ladder Problems Are the Same Local Constraint

**Video:** 00:07:14-00:08:02

两个问题都使用：

$$
x^2+y^2=25
$$

Ladder problem 中，$x$、$y$ 都由共同变量 time 驱动：

$$
t\longrightarrow x(t),y(t)
$$

因此：

$$
2x\frac{dx}{dt}+2y\frac{dy}{dt}=0
$$

Circle problem 中，没有明确写出 time，只写：

$$
2x\,dx+2y\,dy=0
$$

但可以把沿曲线的移动想象成由任意 parameter 驱动，例如 $t$：

$$
x=x(t),\qquad y=y(t)
$$

那么：

$$
\frac{dy}{dx}
=\frac{dy/dt}{dx/dt}
$$

也就是说，circle tangent slope 只关心两个微小分量之间的 ratio，不关心你用什么速度沿曲线走。

**English core sentence:**  
Implicit differentiation removes the common parameter and keeps only the relationship between the allowed changes in $x$ and $y$.

**中文记忆：**  
隐式求导把共同驱动变量藏在背后，只保留 $dx$ 与 $dy$ 为了维持约束必须满足的关系。

### Knowledge Point 6: A Two-Variable Differential Predicts the Change From Any Tiny Step

**Video:** 00:08:03-00:10:44

给表达式命名：

$$
s(x,y)=x^2+y^2
$$

它是一个 two-variable function：平面上的每个点 $(x,y)$ 都对应一个数 $s$。

- on the circle: $s=25$
- farther from origin: $s>25$
- closer to origin: $s<25$

现在从某一点走一个任意 tiny step：

$$
(dx,dy)
$$

这个小步不一定沿圆。$s$ 的一阶变化约为：

$$
\boxed{ds\approx2x\,dx+2y\,dy}
$$

例如从 $(3,4)$ 出发：

$$
dx=-0.02,\qquad dy=-0.01
$$

则：

$$
ds\approx2(3)(-0.02)+2(4)(-0.01)
$$

$$
ds\approx-0.12-0.08=-0.20
$$

这表示 $x^2+y^2$ 大约减少 $0.20$。

和所有 derivative 一样，这是一阶 linear approximation；$dx,dy$ 越小，近似越准确。

#### Why setting $ds=0$ gives the tangent direction

如果要求 tiny step 沿着圆，那么 $s$ 必须继续保持 25：

$$
ds=0
$$

所以：

$$
2x\,dx+2y\,dy=0
$$

更精确地说，这个条件保证小步沿 tangent line，而不是严格落在弯曲的 circle 上。但在足够小的局部尺度，curve 与 tangent line 一阶相同。

这就是 implicit differentiation 真正在做的事：

> It finds the tiny directions that preserve the defining relation to first order.

中文：

> 隐式求导寻找的是：为了在一阶近似下继续满足原方程，微小移动允许朝哪些方向走。

### Knowledge Point 7: A General Implicit Equation Uses Product Rule and Chain Rule Together

**Video:** 00:10:45-00:12:31

考虑：

$$
\sin(x)y^2=x
$$

这条 relation 在平面上形成一组 U-shaped curves。对任意 tiny step $(dx,dy)$，两边表达式的变化必须相等，原 equation 才能继续成立。

左边是 product，所以用 [[Product Rule]]：

$$
d[\sin(x)y^2]
=\sin(x)d(y^2)+y^2d(\sin x)
$$

分别求变化：

$$
d(y^2)=2y\,dy
$$

$$
d(\sin x)=\cos x\,dx
$$

所以：

$$
2y\sin x\,dy+y^2\cos x\,dx=dx
$$

把 $dy$ 项留在一边：

$$
2y\sin x\,dy=(1-y^2\cos x)\,dx
$$

因此：

$$
\boxed{
\frac{dy}{dx}
=\frac{1-y^2\cos x}{2y\sin x}
}
$$

这里不必先把 $y$ 显式解出来。原 equation 自己已经提供足够信息，告诉我们允许的 $dx$ 与 $dy$ 必须怎样配合。

**Exam sentence:**  
Differentiate both sides with respect to $x$, treating $y$ as a function of $x$.

中文理解：对 $x$ 求导时，凡是碰到 $y$ 的函数，都要通过 chain rule 带出 $dy/dx$。

### Knowledge Point 8: Implicit Differentiation Derives the Natural-Log Formula

**Video:** 00:12:33-00:14:27

已知：

$$
y=\ln x
$$

[[Natural Logarithm]] 的 inverse relationship 是：

$$
e^y=x
$$

因为 $\ln x$ 回答的是：$e$ 的多少次方等于 $x$？

对两边写微小变化：

$$
d(e^y)=d(x)
$$

由上一章 $(e^u)'=e^u$ 和 [[Chain Rule]]：

$$
e^y\,dy=dx
$$

整理：

$$
\frac{dy}{dx}=\frac{1}{e^y}
$$

在曲线上 $e^y=x$，所以：

$$
\boxed{\frac{d}{dx}\ln x=\frac1x}
$$

这一推导说明 implicit differentiation 不只是求奇怪曲线的 tangent slope；它也可以利用已知函数与 inverse function 的关系，推出新的 derivative formula。

**English core sentence:**  
The derivative of an inverse function can be found by differentiating the equation that relates the function to its inverse.

**中文记忆：**  
反函数的导数可以从“原函数与反函数互相抵消”的关系式中隐式求出。

### Knowledge Point 9: This Is a Preview of Multivariable Calculus

**Video:** 00:14:32-00:14:59

表达式：

$$
s(x,y)=x^2+y^2
$$

有多个 inputs。研究 $(dx,dy)$ 如何共同改变 $s$，正是 multivariable calculus 的入口。

本章暂时不需要引入完整的 partial derivative 或 gradient 工具，但要保留核心图像：

> Keep track of which tiny nudges are changing and how the constraint makes them depend on one another.

中文：始终明确有哪些量在发生 tiny change，以及原方程如何迫使这些变化相互依赖。

## 5. Deep Phrases / 深层表达

这些不是术语翻译，而是读到相关概念时可以直接调用的完整理解。

| Reusable English sentence | 中文记忆句 |
|---|---|
| An implicit curve is a set of points satisfying a relation, not necessarily the graph of one global function. | 隐式曲线由满足关系式的点组成，不一定能写成一个全局函数图像。 |
| Zooming in turns the curve into its tangent line, so a tiny step has slope $dy/dx$. | 局部放大后曲线近似切线，小步的纵横分量之比就是斜率。 |
| Related rates problems give several changing quantities a common input: time. | 相关变化率问题让多个变化量共享同一个输入，也就是时间。 |
| A constraint remains true only when the rates of its variables balance one another. | 一个约束要持续成立，各变量的变化率必须彼此补偿。 |
| Implicit differentiation finds the tiny directions that preserve an equation to first order. | 隐式求导找出在一阶近似下仍维持原方程的微小方向。 |
| The expression $2x\,dx+2y\,dy$ predicts how $x^2+y^2$ changes under a tiny step $(dx,dy)$. | 这个式子根据起点和微小步，预测平方和怎样变化。 |
| Setting $ds=0$ restricts the tiny step to a level curve of $s$. | 令 $ds=0$，就是要求小步留在 $s$ 不变的等值曲线上。 |
| When differentiating with respect to $x$, every occurrence of $y$ carries its dependence on $x$. | 对 $x$ 求导时，每个 $y$ 都必须保留它对 $x$ 的依赖。 |
| Differentiate the relation first and substitute the instant-specific values afterward. | 先对完整关系式求导，再代入某一瞬间的数值。 |
| Implicit differentiation can derive inverse-function formulas without solving explicitly for the inverse. | 不必先显式解出反函数，也能从关系式推出其导数。 |

## 6. Common Mistakes / 高频错误

### Mistake 1: Treating a circle as one global function

$$
x^2+y^2=25
$$

需要上下两个 branch：

$$
y=\pm\sqrt{25-x^2}
$$

但局部 tangent slope 仍然可以通过 implicit differentiation 求出。

### Mistake 2: Forgetting the Chain Rule on $y$

对 $x$ 求导：

$$
\frac{d}{dx}(y^2)=2y\frac{dy}{dx}
$$

不是只有 $2y$。

### Mistake 3: Substituting numbers before differentiating

Related rates 中，$x=3$、$y=4$ 只是某一瞬间的状态。先代入会把 changing quantities 错当成 constants。

### Mistake 4: Losing the sign of a rate

梯子顶部下降：

$$
\frac{dy}{dt}=-1
$$

distance 的数值为正，不代表它的 rate 也为正。

### Mistake 5: Confusing $dy/dx$ with $dy/dt$

- $dy/dt$：$y$ 随时间变化多快
- $dy/dx$：沿曲线移动时，$y$ 相对于 $x$ 变化多快

二者可由：

$$
\frac{dy}{dx}=\frac{dy/dt}{dx/dt}
$$

连接，但不是同一个 quantity。

### Mistake 6: Thinking $ds=0$ means no movement

$ds=0$ 只表示 $s$ 的值不变；$(x,y)$ 仍然可以沿 level curve 移动。

### Mistake 7: Treating differentials as exact finite changes

$$
ds\approx2x\,dx+2y\,dy
$$

是 local linear approximation。有限步长时还存在 higher-order terms。

### Mistake 8: Using only one rule inside a mixed expression

对 $\sin(x)y^2$ 必须同时识别 product structure，并在 $y^2$ 内使用 chain rule。

## 7. Formula Map / 公式地图

Circle relation:

$$
x^2+y^2=R^2
$$

$$
2x+2y\frac{dy}{dx}=0
$$

$$
\boxed{\frac{dy}{dx}=-\frac{x}{y}}
$$

Related rates form:

$$
2x\frac{dx}{dt}+2y\frac{dy}{dt}=0
$$

Two-variable differential:

$$
\boxed{ds\approx2x\,dx+2y\,dy}
$$

General implicit example:

$$
\sin(x)y^2=x
$$

$$
\boxed{
\frac{dy}{dx}
=\frac{1-y^2\cos x}{2y\sin x}
}
$$

Natural logarithm:

$$
e^y=x
$$

$$
\boxed{\frac{d}{dx}\ln x=\frac1x}
$$

Method map:

```text
write a relation that remains true
-> identify all changing variables
-> differentiate every term
-> attach the correct differential or rate
-> use the constraint to relate those changes
-> solve for the requested slope or rate
-> substitute point-specific values last
```

## 8. Confusion / Questions

1. 为什么整个圆不是 function graph，但圆上大多数点仍然有 $dy/dx$？
2. 在圆的最左和最右点，公式 $-x/y$ 为什么出现 division by zero？几何上意味着什么？
3. Ladder problem 中，为什么必须先把 $x$ 和 $y$ 写成 $x(t)$、$y(t)$？
4. $2x\,dx+2y\,dy$ 与 $2x\,dx/dt+2y\,dy/dt$ 有什么联系？
5. 为什么令 $ds=0$ 得到的是 tangent direction，而不是一小段真正的圆弧？
6. 对 $y^2$ 关于 $x$ 求导时，$dy/dx$ 从哪里来？
7. 如果一个 relation 中同时出现 product、composition 和 powers，应该按什么顺序处理？
8. 为什么 implicit differentiation 能用于 inverse functions？
9. $ds=0$ 是否表示 $dx=dy=0$？为什么不是？

## 9. Source Anchors / 字幕定位

- **00:00:10**：圆与 $(3,4)$ 点的 tangent-slope 问题
- **00:01:28**：圆不是普通 function graph
- **00:01:52**：implicit curve 的含义
- **00:02:04**：第一次展示 implicit differentiation 操作
- **00:03:16**：转入 5-meter ladder related-rates problem
- **00:04:16**：定义 $x(t)$、$y(t)$ 并写 Pythagorean constraint
- **00:05:17**：把 constraint 看成 time function
- **00:06:08**：用 chain rule 求 time derivative
- **00:06:45**：代入 $x=3,y=4,dy/dt=-1$
- **00:07:14**：比较 ladder 与 circle
- **00:08:03**：定义 two-variable function $s=x^2+y^2$
- **00:09:35**：解释 $2x\,dx+2y\,dy$ 的真实含义
- **00:10:02**：沿圆移动意味着 $ds=0$
- **00:10:45**：一般例子 $\sin(x)y^2=x$
- **00:12:33**：用 implicit differentiation 推出 $(\ln x)'$
- **00:14:32**：multivariable calculus preview

## 10. After Watching Summary / 看完压缩版

Implicit differentiation 处理的是由 relation 定义的曲线，而不要求先写成 $y=f(x)$。

对于：

$$
x^2+y^2=25
$$

微小变化必须满足：

$$
2x\,dx+2y\,dy=0
$$

因此：

$$
\frac{dy}{dx}=-\frac{x}{y}
$$

Related rates 给 $x$ 与 $y$ 一个共同输入 time：

$$
2x\frac{dx}{dt}+2y\frac{dy}{dt}=0
$$

这说明 implicit differentiation 不是没有依据地把 $dx$、$dy$ 附在符号后面，而是在记录多个量为了维持同一个 constraint 必须怎样共同变化。

从 multivariable viewpoint：

$$
s=x^2+y^2
$$

$$
ds\approx2x\,dx+2y\,dy
$$

沿 level curve $s=25$ 的 tangent direction，必须满足 $ds=0$。

最后，由：

$$
y=\ln x\Longleftrightarrow e^y=x
$$

得到：

$$
e^y\,dy=dx
$$

$$
\frac{d}{dx}\ln x=\frac1x
$$

**One-sentence compression:**  
Implicit differentiation describes how interdependent variables must change together so that their defining relation remains true.

中文：

> 隐式求导描述的是：为了让定义它们的关系式继续成立，相互依赖的变量必须怎样一起变化。

## 11. Knowledge Graph Connections / 知识图谱连接

- [[07 - Limits, L'Hopital's Rule, and Epsilon-Delta Definitions]] formalizes the tiny-step approximations used throughout this episode and explains how limits make them exact.
- [[02 - The Paradox of the Derivative]] 解释 tangent slope 与 local linear approximation；本集把它应用到不是全局函数图像的曲线。
- [[03 - Derivative Formulas through Geometry]] 建立 $dx$、$dy$ 的 tiny-change 语言。
- [[04 - Visualizing the Chain Rule and Product Rule]] 提供本集处理 $y^2$、$e^y$ 和 $\sin(x)y^2$ 所需的 [[Chain Rule]] 与 [[Product Rule]]。
- [[05 - What's So Special About Euler's Number e]] 提供 $(e^y)'=e^y$，本集据此推出 $(\ln x)'=1/x$。
- [[Implicit Curve]] 记录“由 relation 定义的一组点”与 ordinary function graph 的区别。
- [[Implicit Differentiation]] 记录如何从 constraint 得到 tangent slope。
- [[Related Rates]] 把同一个 constraint 解释成多个 time-dependent quantities 之间的 rate relationship。
- [[Tangent Line]] 连接 $dy/dx$ 与允许的局部移动方向。
- [[Tiny Nudges]] 连接 $(dx,dy)$ 与 two-variable expression 的一阶变化。
- [[Natural Logarithm]] 连接 inverse exponential relationship 与 $1/x$ derivative formula。
- [[Limits]] 将在下一章正式解释为什么这些 local linear approximations 在 tiny changes 趋近 0 时变得精确。
- [[AP电磁学第2次正课-连续带电体电场与电通量]] 中多个 differential contributions 的追踪，与本集分辨 $dx$、$dy$ 各自贡献共享同一种微元思维。

## 12. Links / 链接

- [[UBC Knowledge Graph]]
- [[01 - The Essence of Calculus]]
- [[02 - The Paradox of the Derivative]]
- [[03 - Derivative Formulas through Geometry]]
- [[04 - Visualizing the Chain Rule and Product Rule]]
- [[05 - What's So Special About Euler's Number e]]
- [[07 - Limits, L'Hopital's Rule, and Epsilon-Delta Definitions]]
- [[Derivatives]]
- [[Tangent Line]]
- [[Tiny Nudges]]
- [[Chain Rule]]
- [[Product Rule]]
- [[Implicit Curve]]
- [[Implicit Differentiation]]
- [[Related Rates]]
- [[Natural Logarithm]]
- [[Limits]]
- [[AP电磁学第2次正课-连续带电体电场与电通量]]
