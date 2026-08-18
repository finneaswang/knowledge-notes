---
title: "AP物理C力学预备课 - 微积分工具"
description: "A connected bilingual learning note about AP物理C力学预备课 - 微积分工具."
publish: true
tags: [open-notes, physics-mechanics]
---
# AP物理C力学预备课 - 微积分工具

## Reading Guide / 阅读说明

这节不是把微积分重新完整讲一遍，而是建立力学会反复调用的两种读法：derivative 读取某一瞬间的变化，integral 累积一段时间内的变化。公式按课件画面校对，转写中模糊的口述符号没有直接照抄。

Connected from:

- [[AP物理C力学-课程主页]]
- [[AP物理C力学Orientation-课程结构与学习地图]]
- [[02 - The Paradox of the Derivative]]
- [[08 - Integration and the Fundamental Theorem of Calculus]]

> [!summary] 一句话主线
> **A derivative converts a quantity into its instantaneous rate of change; an integral reconstructs accumulated change from a rate.**
>
> 导数把一个量变成它的瞬时变化率；积分把变化率在区间内累积，恢复总变化。

## 1. From Average to Instantaneous / 从平均到瞬时

区间 $[t_1,t_2]$ 上的位置平均变化率：

$$
v_{\text{avg}}=\frac{\Delta x}{\Delta t}
=\frac{x(t_2)-x(t_1)}{t_2-t_1}
$$

这是 [[Average Rate of Change]]，几何上是 [[Secant Line]] 的 slope。

当第二个时刻逼近第一个时刻：

$$
v(t)=\lim_{\Delta t\to0}\frac{x(t+\Delta t)-x(t)}{\Delta t}
=\frac{dx}{dt}
$$

几何上，secant line 逼近 [[Tangent Line]]；物理上，average velocity 逼近 instantaneous velocity。

> **The derivative is the slope of the tangent line and the instantaneous rate of change.**

这两个短语不是竞争定义：前者是 graph interpretation，后者是 quantity interpretation。

## 2. Derivative Toolkit / 求导工具

### Basic rules

$$
\frac{d}{dx}c=0,
\qquad
\frac{d}{dx}x^n=nx^{n-1}
$$

$$
\frac{d}{dx}e^x=e^x,
\qquad
\frac{d}{dx}\ln x=\frac1x
$$

$$
\frac{d}{dx}\sin x=\cos x,
\qquad
\frac{d}{dx}\cos x=-\sin x
$$

线性规则：

$$
\frac{d}{dx}[af(x)+bg(x)]=af'(x)+bg'(x)
$$

### Product and chain structure

[[Product Rule]]：

$$
\frac{d}{dx}[f(x)g(x)]=f'(x)g(x)+f(x)g'(x)
$$

[[Chain Rule]]：

$$
\frac{d}{dx}f(g(x))=f'(g(x))g'(x)
$$

Core sentence:

> **The chain rule multiplies rates through nested dependence.**

中文理解：如果外层量随中间量变化，而中间量又随时间变化，总变化率就是两层局部变化率相乘。

## 3. The Motion Derivative Chain / 运动量求导链

$$
\boxed{v(t)=\frac{dx}{dt}}
$$

$$
\boxed{a(t)=\frac{dv}{dt}=\frac{d^2x}{dt^2}}
$$

因此：

```text
position x(t) --differentiate--> velocity v(t)
velocity v(t) --differentiate--> acceleration a(t)
```

这个关系将在 [[AP物理C力学第1次正课-位移速度加速度与运动图像]] 中同时表现为 equations 和 graph slopes。

## 4. Integral as Accumulation / 积分是累积

把区间分成很多小段，每段变化近似为“rate × small interval”：

$$
\Delta x\approx\sum_i v(t_i)\Delta t
$$

当小段无限变细：

$$
\boxed{\Delta x=\int_{t_1}^{t_2}v(t)\,dt}
$$

这就是 [[Riemann Sum]] 到 [[Definite Integral]] 的过渡。几何上，它是 velocity-time graph 与时间轴之间的 [[Signed Area]]。

> **The integral of a rate gives the accumulated change, not automatically the final value.**

所以：

$$
x(t)=x(t_0)+\int_{t_0}^{t}v(\tau)\,d\tau
$$

必须加 initial position。只知道 velocity 的变化规律，仍不知道物体最初在哪里。

同理：

$$
v(t)=v(t_0)+\int_{t_0}^{t}a(\tau)\,d\tau
$$

这与 [[Initial Conditions]] 直接相连。

## 5. Antiderivatives and the FTC / 反导与微积分基本定理

若 $F'(x)=f(x)$，则 $F$ 是 $f$ 的 [[Antiderivative]]：

$$
\int f(x)\,dx=F(x)+C
$$

[[Fundamental Theorem of Calculus]] 给出：

$$
\boxed{\int_a^b f(x)\,dx=F(b)-F(a)}
$$

常用反导：

$$
\int x^n\,dx=\frac{x^{n+1}}{n+1}+C\quad(n\ne-1)
$$

$$
\int \frac1x\,dx=\ln|x|+C,
\qquad
\int e^x\,dx=e^x+C
$$

$$
\int \cos x\,dx=\sin x+C,
\qquad
\int \sin x\,dx=-\cos x+C
$$

## 6. Definite vs Indefinite / 定积分与不定积分

| Form | Meaning in mechanics |
|---|---|
| $\int f(x)dx$ | 一族 antiderivatives，需要 $+C$ |
| $\int_a^b f(x)dx$ | 在给定区间上的净累积，是一个确定值 |
| $\int_{t_0}^{t}v(\tau)d\tau$ | 从 $t_0$ 到 $t$ 的 displacement |
| $\int_{t_0}^{t}a(\tau)d\tau$ | 从 $t_0$ 到 $t$ 的 change in velocity |

## 7. Deep Phrases / 深句对应表

| English sentence | 中文抓手 |
|---|---|
| Average rate belongs to an interval; instantaneous rate belongs to a moment. | 平均变化率对应区间，瞬时变化率对应时刻。 |
| The tangent slope is the local rate of change. | 切线斜率就是局部变化率。 |
| Differentiation reads local change; integration accumulates change. | 求导看局部，积分做累积。 |
| Area below the axis contributes negatively to signed area. | 横轴下方对带符号面积作负贡献。 |
| Initial conditions select one physical motion from a family of mathematical solutions. | 初始条件从一族数学解中选出真实运动。 |

## 8. Watch Out / 易错点

- $\Delta$ 是有限差值，$d$ 表示局部微分；不要机械互换。
- derivative 的单位是“纵轴单位 / 横轴单位”。
- integral 的单位是“被积函数单位 × 积分变量单位”。
- graph area 是 signed accumulation；若题目要 total distance，不能简单把负面积抵消。
- indefinite integral 必须有 $+C$；物理中通常用初始条件确定它。

## 9. Next / 下一步

把工具放进真实物理量：[[AP物理C力学第1次正课-位移速度加速度与运动图像]]。
