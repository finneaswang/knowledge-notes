---
title: "3Blue1Brown - The Essence of Calculus 05 - What's So Special About Euler's Number e?"
description: "A connected bilingual calculus note about 3Blue1Brown - The Essence of Calculus 05 - What's So Special About Euler's Number e?."
publish: true
tags: [calculus, visual-calculus]
---
# 3Blue1Brown - The Essence of Calculus 05 - What's So Special About Euler's Number e?

## Reading Note / 阅读说明

这份笔记继续沿用前 4 集的结构。英文保留适合记忆、考试和解释概念的核心句，中文负责把符号背后的逻辑串起来。重点不是背诵 $e\approx2.71828$，而是理解为什么 $e$ 会自然地出现在 derivative、growth 和 real-world models 中。

Connected from:

- [[04 - Visualizing the Chain Rule and Product Rule]]
- [[Derivatives]]
- [[Chain Rule]]

## 1. What This Episode Is About / 这一集在讲什么

前几章已经解释了 [[Derivatives]]、[[Derivative Formulas]] 和 [[Chain Rule]]。本集补上一个最重要的函数家族：[[Exponential Functions]]。

核心问题不是：

> What is the decimal value of $e$?

而是：

> Is there an exponential function whose derivative is exactly itself?

答案是：

$$
\boxed{\frac{d}{dt}e^t=e^t}
$$

**English core sentence:**  
All exponential functions have derivatives proportional to themselves, but $e^t$ is the unique one whose proportionality constant is $1$.

**中文记忆：**  
所有指数函数的导数都与自身成正比；只有以 $e$ 为底时，导数恰好等于自身。

## 2. Class Flow / 视频脉络

1. 用 $2^t$ 表示连续增长的 population mass。
2. 先比较一整天的增长，再指出 average change 还不是 derivative。
3. 把时间间隔缩小为 $dt$，研究真正的局部变化率。
4. 利用 $2^{t+dt}=2^t2^{dt}$，把依赖 $t$ 的部分与依赖 $dt$ 的部分分离。
5. 发现 $(2^{dt}-1)/dt$ 在 $dt\to0$ 时趋近常数 $0.6931$。
6. 推广到任意底数 $a$：$(a^t)'$ 总是常数乘 $a^t$。
7. 寻找比例常数恰好为 $1$ 的底数，由此理解 [[Euler's Number e]]。
8. 用 [[Chain Rule]] 求 $e^{kt}$ 的导数。
9. 用 $a=e^{\ln a}$ 推出一般公式 $(a^t)'=\ln(a)a^t$。
10. 说明 $e^{kt}$ 中的 $k$ 直接代表 relative growth rate，因此它是应用中最自然的写法。

## 3. Core Ideas / 核心知识块

### Knowledge Point 1: From Daily Growth to Instantaneous Growth

**Video:** 00:00:32-00:03:36

令：

$$
m(t)=2^t
$$

把 $t$ 看作天数，把 $m$ 看作连续变化的 population mass。连续质量比离散个体数量更适合 derivative，因为我们可以合理讨论极短时间内的微小质量变化。

从第 3 天到第 4 天：

$$
\frac{2^4-2^3}{4-3}=\frac{16-8}{1}=8
$$

这个 daily average growth 恰好等于第 3 天开始时的质量 $2^3=8$。类似地，第 4 天到第 5 天增长 $16$，也等于开始时的质量。

但这不能直接说明：

$$
\frac{d}{dt}2^t=2^t
$$

因为这里比较的是完整一天，而 derivative 要看越来越短的时间间隔：

$$
\frac{dm}{dt}
=\lim_{dt\to0}\frac{2^{t+dt}-2^t}{dt}
$$

**English core sentence:**  
A full-day growth ratio points in the right direction, but a derivative requires smaller and smaller time intervals.

**中文理解：**  
整天的增长只能提供直觉；导数必须把观察窗口压缩到局部。

### Knowledge Point 2: The Key Exponential Property

**Video:** 00:04:08-00:05:13

指数律：

$$
a^{x+y}=a^xa^y
$$

对 $2^t$：

$$
2^{t+dt}=2^t2^{dt}
$$

代入差商：

$$
\frac{2^{t+dt}-2^t}{dt}
=\frac{2^t2^{dt}-2^t}{dt}
$$

提出 $2^t$：

$$
=2^t\frac{2^{dt}-1}{dt}
$$

于是：

$$
\frac{d}{dt}2^t
=2^t\lim_{dt\to0}\frac{2^{dt}-1}{dt}
$$

最重要的观察是：

- $2^t$ 取决于当前位置 $t$；
- 右侧极限只取决于底数 $2$，不取决于 $t$；
- 因此每一点的 derivative 都是函数高度乘同一个常数。

数值上：

$$
\lim_{dt\to0}\frac{2^{dt}-1}{dt}
\approx0.6931
$$

所以：

$$
\frac{d}{dt}2^t\approx0.6931\cdot2^t
$$

后来会认出：

$$
0.6931\ldots=\ln2
$$

**English core sentence:**  
The exponential law separates the current function value from a base-dependent proportionality constant.

**中文记忆：**  
指数律把“现在有多少”与“每单位现有量增长多快”分开了。

### Knowledge Point 3: Every Exponential Derivative Is Proportional to Itself

**Video:** 00:05:14-00:07:35

对任意 $a>0$：

$$
\frac{d}{dt}a^t
=a^t\lim_{dt\to0}\frac{a^{dt}-1}{dt}
$$

把只与底数有关的极限记为 $C_a$：

$$
C_a=\lim_{h\to0}\frac{a^h-1}{h}
$$

那么：

$$
\frac{d}{dt}a^t=C_a a^t
$$

几个例子：

| Base $a$ | Proportionality constant $C_a$ | Derivative |
|---|---:|---|
| $2$ | $0.6931\ldots$ | $(2^t)'=0.6931\ldots\,2^t$ |
| $3$ | $1.0986\ldots$ | $(3^t)'=1.0986\ldots\,3^t$ |
| $8=2^3$ | $2.0794\ldots=3(0.6931\ldots)$ | $(8^t)'=2.0794\ldots\,8^t$ |
| $e$ | $1$ | $(e^t)'=e^t$ |

这些常数不是随机数字，而是：

$$
\boxed{C_a=\ln a}
$$

因此：

$$
\boxed{\frac{d}{dt}a^t=(\ln a)a^t}
$$

### Knowledge Point 4: What Makes $e$ Special?

**Video:** 00:07:36-00:08:58

[[Euler's Number e]] 可以从这个导数性质来理解：它是让指数函数在 $t=0$ 处斜率等于 $1$ 的底数。

$$
\lim_{h\to0}\frac{e^h-1}{h}=1
$$

于是对每个 $t$：

$$
\frac{d}{dt}e^t
=e^t\lim_{h\to0}\frac{e^h-1}{h}
=e^t
$$

图像语言：

> At every point on the graph of $e^t$, the tangent-line slope equals the height of the graph.

也就是如果点为 $(t,e^t)$，那么：

$$
\text{slope at }t=e^t=\text{height at }t
$$

这比“$e$ 是一个约等于 $2.71828$ 的常数”更接近它在微积分中的本质。

#### Definition-style comparison with $\pi$

问“为什么偏偏 $e$ 有这个性质”，类似于问“为什么偏偏 $\pi$ 是圆周长与直径之比”。这个性质不是巧合附着在 $e$ 上，而是定义和识别 $e$ 的核心方式之一。

**English core sentence:**  
$e$ is the base whose exponential function has tangent slope equal to graph height everywhere.

**中文记忆：**  
$e$ 是把“当前大小”与“当前变化速度”完全对齐的指数底数。

### Knowledge Point 5: Chain Rule Explains $e^{kt}$

**Video:** 00:08:59-00:09:54

令：

$$
f(t)=e^{kt}
$$

这是 composition：

$$
t\xrightarrow{\times k}kt\xrightarrow{e^{(\cdot)}}e^{kt}
$$

由 [[Chain Rule]]：

$$
\frac{d}{dt}e^{kt}
=e^{kt}\cdot k
$$

所以：

$$
\boxed{\frac{d}{dt}e^{kt}=ke^{kt}}
$$

比例关系写成：

$$
\frac{f'(t)}{f(t)}=k
$$

这里的 $k$ 不是随便放在 exponent 里的数字，它直接表示 instantaneous relative growth rate / 瞬时相对增长率。

- $k>0$：exponential growth / 指数增长
- $k<0$：exponential decay / 指数衰减
- $k=0$：constant function / 常量

**English core sentence:**  
In $e^{kt}$, the exponent coefficient $k$ is exactly the proportionality constant between the function and its derivative.

**中文记忆：**  
写成 $e^{kt}$ 后，$k$ 直接告诉你“变化速度是当前量的多少倍”。

### Knowledge Point 6: Natural Logarithm Reveals the Mystery Constant

**Video:** 00:09:56-00:10:53

[[Natural Logarithm]] 的意思是：

$$
\ln a=\text{the exponent to which }e\text{ must be raised to get }a
$$

即：

$$
e^{\ln a}=a
$$

所以：

$$
a^t=(e^{\ln a})^t=e^{(\ln a)t}
$$

由上一节：

$$
\frac{d}{dt}a^t
=\frac{d}{dt}e^{(\ln a)t}
=(\ln a)e^{(\ln a)t}
$$

而 $e^{(\ln a)t}=a^t$，因此：

$$
\boxed{\frac{d}{dt}a^t=(\ln a)a^t}
$$

这解释了前面的数值：

$$
\ln2\approx0.6931
$$

$$
\ln3\approx1.0986
$$

$$
\ln8=\ln(2^3)=3\ln2\approx2.0794
$$

**English core sentence:**  
The natural logarithm of the base is the proportionality constant that appears when differentiating an exponential.

**中文记忆：**  
指数函数求导时冒出来的常数，就是“用 $e$ 的多少次方才能得到原底数”。

### Knowledge Point 7: One Exponential Has Many Equivalent Forms

**Video:** 00:10:53-00:11:55

任何正底数指数函数都可以改写成以 $e$ 为底：

$$
a^t=e^{(\ln a)t}
$$

例如：

$$
2^t=e^{(\ln2)t}
$$

这里不是说自然现象“本身知道 $e$”。$e$ 不是强行隐藏在现象里的神秘数字，而是我们选择的一种最有信息量的表示方式。

写成 $a^t$：底数 $a$ 容易读出单位时间 growth factor。

写成 $e^{kt}$：系数 $k$ 容易读出 instantaneous relative growth rate。

| Form | What is easy to read? |
|---|---|
| $a^t$ | one-unit multiplication factor $a$ |
| $e^{kt}$ | continuous proportional growth rate $k$ |

**English core sentence:**  
Writing an exponential in base $e$ is a choice of representation that makes its continuous growth rate readable.

**中文理解：**  
以 $e$ 为底不是为了形式漂亮，而是为了让 exponent coefficient 直接承载变化率含义。

### Knowledge Point 8: Why Exponentials Model Nature

**Video:** 00:11:56-00:13:11

许多系统都满足同一种结构：

$$
\frac{dy}{dt}=ky
$$

也就是：

> The rate of change is proportional to the quantity that is changing.

它的解具有指数形式：

$$
y(t)=Ce^{kt}
$$

其中 $C=y(0)$ 是初始量。

#### Population growth / 种群增长

资源不受限制时，个体越多，单位时间内新增个体通常也越多：

$$
P'(t)=kP(t)
$$

$$
P(t)=P_0e^{kt}
$$

#### Compound growth / 资金复利增长

本金越多，同一比例产生的收益越多：

$$
A'(t)=rA(t)
$$

$$
A(t)=A_0e^{rt}
$$

#### Newton's law of cooling / 牛顿冷却定律

水温与室温之差记为 $D(t)$。温差越大，温差缩小得越快：

$$
D'(t)=-kD(t)
$$

$$
D(t)=D_0e^{-kt}
$$

这里真正按指数变化的不是绝对温度，而是 object 与 environment 的 temperature difference。

## 4. Deep Phrases / 深层表达

这些句子不是术语翻译，而是看到概念时应该能完整说出的意思。

| Reusable English sentence | 中文记忆句 |
|---|---|
| A derivative requires us to examine smaller and smaller input changes, not merely a convenient finite interval. | 导数必须不断缩小输入区间，不能把一个方便的有限区间当成瞬时变化。 |
| Exponentials turn addition in the exponent into multiplication in the output. | 指数函数把 exponent 中的加法变成 output 中的乘法。 |
| The derivative of any exponential function is proportional to the function itself. | 任意指数函数的变化速度都与它当前的大小成正比。 |
| The proportionality constant depends only on the base, not on the current input. | 比例常数只由底数决定，与现在走到哪个输入位置无关。 |
| $e$ is the unique base for which the proportionality constant is exactly one. | $e$ 是唯一让这个比例常数恰好为 1 的底数。 |
| On the graph of $e^t$, tangent slope and graph height are equal at every point. | 在 $e^t$ 图像上，每一点的切线斜率都等于该点高度。 |
| The natural logarithm of a base is the derivative's proportionality constant for that exponential. | 一个底数的自然对数，就是对应指数函数求导时的比例常数。 |
| Writing an exponential as $e^{kt}$ makes its continuous relative growth rate visible. | 写成 $e^{kt}$，就能直接读出连续相对增长率 $k$。 |
| A quantity follows an exponential law when its rate of change is proportional to its current size. | 当一个量的变化速度与当前大小成正比时，它遵循指数规律。 |
| The number $e$ is special because of how change behaves, not because its decimal expansion looks special. | $e$ 的特殊来自变化规律，不来自它的小数长相。 |

## 5. Common Mistakes / 高频错误

### Mistake 1: Assuming $(2^t)'=2^t$

一天内翻倍不代表瞬时变化率等于自身。

$$
\frac{d}{dt}2^t=(\ln2)2^t
$$

### Mistake 2: Forgetting $\ln a$

错误：

$$
\frac{d}{dx}a^x=a^x
$$

正确：

$$
\frac{d}{dx}a^x=(\ln a)a^x
$$

只有 $a=e$ 时 $\ln a=1$。

### Mistake 3: Forgetting the inner derivative

$$
\frac{d}{dx}e^{g(x)}=e^{g(x)}g'(x)
$$

不是只有 $e^{g(x)}$。

### Mistake 4: Confusing absolute and relative growth

- absolute rate: $y'(t)$
- relative rate: $y'(t)/y(t)$

对 $y=Ce^{kt}$：

$$
y'(t)=ky(t),\qquad\frac{y'(t)}{y(t)}=k
$$

绝对增长量会随 $y$ 改变；相对增长率 $k$ 保持不变。

### Mistake 5: Thinking $e$ belongs to the phenomenon itself

$2^t$ 与 $e^{(\ln2)t}$ 是同一个函数。使用 $e$ 是 representation choice，它让连续增长率更清楚。

### Mistake 6: Modeling cooling with absolute temperature directly

牛顿冷却模型中与自身成正比变化的是温差：

$$
D=T_{object}-T_{room}
$$

不是在所有条件下直接写 $T'=-kT$。

## 6. Formula Map / 公式地图

$$
\boxed{a^{x+y}=a^xa^y}
$$

$$
\boxed{\frac{d}{dx}e^x=e^x}
$$

$$
\boxed{\frac{d}{dx}e^{g(x)}=e^{g(x)}g'(x)}
$$

$$
\boxed{a^x=e^{x\ln a}}
$$

$$
\boxed{\frac{d}{dx}a^x=(\ln a)a^x}
$$

$$
\boxed{y'=ky\Longleftrightarrow y=Ce^{kx}}
$$

Concept map:

```text
exponent addition
  -> output multiplication
  -> derivative factors into current value x base constant
  -> every exponential is proportional to its derivative
  -> choose the base whose constant is 1
  -> e^t is its own derivative
  -> e^(kt) exposes the proportional growth rate k
```

## 7. Confusion / Questions

1. 为什么视频用 population mass，而不是离散的 population count？
2. 为什么一天内的增长率不能直接当作 derivative？
3. $a^{t+dt}=a^ta^{dt}$ 为什么是整段推理的关键？
4. 在 $(a^t)'=a^tC_a$ 中，为什么 $C_a$ 与 $t$ 无关？
5. $e$ 的核心导数性质是什么？
6. 如何用 tangent slope 和 graph height 描述 $e^t$？
7. 为什么 $(e^{3t})'=3e^{3t}$？
8. 如何把 $2^t$ 改写成以 $e$ 为底的形式？
9. 为什么 $(a^t)'$ 中出现的常数是 $\ln a$？
10. 在 $e^{kt}$ 中，$k$ 的实际含义是什么？
11. absolute growth rate 与 relative growth rate 有什么区别？
12. population、investment 和 cooling 为什么都可能出现 exponential model？

## 8. Source Anchors / 字幕定位

- **00:00:32**：用 $2^t$ 建立连续增长直觉
- **00:02:21**：整天增长与 derivative 的区别
- **00:03:15**：写出 tiny-time difference quotient
- **00:04:14**：利用指数律分离 $t$ 与 $dt$
- **00:05:27**：数值常数 $0.6931$
- **00:06:29**：推广到其他底数
- **00:07:36**：寻找比例常数为 $1$ 的底数
- **00:08:22**：$e^t$ 的导数等于自身
- **00:08:35**：tangent slope equals graph height
- **00:08:59**：用 Chain Rule 处理 $e^{kt}$
- **00:09:56**：$2=e^{\ln2}$ 与一般指数求导
- **00:11:24**：同一指数函数的不同表示方式
- **00:11:56**：population、cooling 与 investment 应用
- **00:12:51**：为什么 $e^{kt}$ 是最自然的写法

## 9. After Watching Summary / 看完压缩版

一般指数函数的 derivative 都与自身成正比：

$$
\frac{d}{dt}a^t=(\ln a)a^t
$$

$e$ 的特殊性是：

$$
\ln e=1
$$

所以：

$$
\frac{d}{dt}e^t=e^t
$$

更一般地：

$$
\frac{d}{dt}e^{kt}=ke^{kt}
$$

因此 $e^{kt}$ 中的 $k$ 直接表示函数变化率与当前大小之间的比例：

$$
\frac{y'}{y}=k
$$

**One-sentence compression:**  
Euler's number $e$ is the natural base for calculus because writing growth as $e^{kt}$ makes the continuous proportional growth rate equal to the visible coefficient $k$.

中文：

> $e$ 是微积分中最自然的指数底数，因为写成 $e^{kt}$ 后，连续相对增长率就直接等于看得见的系数 $k$。

## 10. Knowledge Graph Connections / 知识图谱连接

- [[06 - Implicit Differentiation, What's Going On Here]] uses $(e^y)'=e^y$ and the inverse relation $e^y=x$ to derive $(\ln x)'=1/x$.
- [[04 - Visualizing the Chain Rule and Product Rule]] 提供本集计算 $e^{kt}$ 与 $e^{g(x)}$ 所需的 [[Chain Rule]]。
- [[Derivatives]] 解释“与自身成正比”说的是 local rate，而不是任意有限区间的 average change。
- [[Limits]] 把 $(a^{dt}-1)/dt$ 的数值趋势变成严格的 derivative constant。
- [[Tiny Nudges]] 对应本集的 $dt\to dm$：微小时间变化产生微小质量变化。
- [[Exponential Functions]] 记录“exponent 加法变 output 乘法”的结构。
- [[Euler's Number e]] 记录 slope equals height 的核心性质。
- [[Natural Logarithm]] 把任意底数 $a$ 转换成 $e^{\ln a}$，并解释 derivative 中的比例常数。
- [[Exponential Growth]] 连接 $y'=ky$、population、compound growth 与 cooling models。
- [[Taylor Series]] 与 Maclaurin Series 后续会从另一角度说明 $e^x$ 的所有阶导数仍是 $e^x$。

## 11. Links / 链接

- [[01 - The Essence of Calculus]]
- [[02 - The Paradox of the Derivative]]
- [[03 - Derivative Formulas through Geometry]]
- [[04 - Visualizing the Chain Rule and Product Rule]]
- [[06 - Implicit Differentiation, What's Going On Here]]
- [[Derivatives]]
- [[Limits]]
- [[Tiny Nudges]]
- [[Derivative Formulas]]
- [[Chain Rule]]
- [[Exponential Functions]]
- [[Euler's Number e]]
- [[Natural Logarithm]]
- [[Exponential Growth]]
- [[Taylor Series]]
- Maclaurin Series
