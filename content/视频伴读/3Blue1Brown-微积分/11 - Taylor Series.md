---
title: "3Blue1Brown - The Essence of Calculus 11 - Taylor Series"
description: "A connected bilingual learning note about 3Blue1Brown - The Essence of Calculus 11 - Taylor Series."
publish: true
tags: [open-notes, visual-calculus]
---
# 3Blue1Brown - The Essence of Calculus 11 - Taylor Series

## Reading Guide / 阅读说明

这是一份伴读型笔记。单独阅读时，它要像一本书一样重建视频如何从 pendulum 的 small-angle approximation 出发，逐项匹配 value、slope、curvature 和 higher derivatives，最后进入 convergence；配合视频时，每个 Knowledge Point 都有时间定位。英文保留最适合考试与解释的核心句，中文负责把公式背后的构造逻辑讲透。

Connected from:

- [[10 - Higher Order Derivatives]]
- [[Taylor Series]]
- [[微积分BC第14次正课-Ratio-Test与Taylor-Series]]
- [[UBC Knowledge Graph]]

## 1. What This Episode Is About / 这一集在讲什么

Taylor 的核心不是“背一个很长的求和公式”，而是把一个 function 在单个 center 的 derivative information，翻译成 center 附近的 approximation information。

> Taylor polynomials turn derivative data at one point into an approximation near that point.

若在 $x=a$ 附近逼近 $f(x)$，就构造 polynomial：

$$
\boxed{
P_n(x)=\sum_{k=0}^{n}\frac{f^{(k)}(a)}{k!}(x-a)^k
}
$$

每一项都有明确任务：

```text
constant term  -> match function value
linear term    -> match slope
quadratic term -> match changing slope / curvature
cubic term     -> match third derivative
...
```

有限项给出 [[Taylor Polynomial]]；若无限添加并且 partial sums 真正收敛，就得到 [[Taylor Series]]。但 Taylor series 是否等于原函数、在哪个范围内等于原函数，是独立的 convergence 问题。

## 2. Link to Previous Episode / 和上一集的连接

Chapter 10 建立了：

$$
f(a),\ f'(a),\ f''(a),\ f'''(a),\ldots
$$

这些 quantities 依次记录 height、slope、slope change 和更细的 local shape。Chapter 11 现在为每一阶 derivative data 分配一个 polynomial coefficient：

$$
\frac{f^{(k)}(a)}{k!}
$$

所以两章的逻辑是：

```text
higher derivatives encode local shape
-> polynomial coefficients copy that shape data
-> polynomial hugs the original function near the center
```

## 3. Class Flow / 视频脉络

1. 用 pendulum potential energy 引出 $\cos\theta\approx1-\theta^2/2$。
2. 问：这个 quadratic 为什么会自然出现？
3. 从 $C_0+C_1x+C_2x^2$ 开始，在 $x=0$ 匹配 cosine。
4. 用 $C_0$ 匹配 value，用 $C_1$ 匹配 slope，用 $C_2$ 匹配 second derivative。
5. 得到 $1-x^2/2$，并检验 $\cos(0.1)$。
6. 添加 cubic、quartic terms，解释更多 degrees of freedom。
7. 从 repeated Power Rule 推出 factorial denominator。
8. 解释为什么新增高阶项不会破坏已匹配的低阶 derivatives。
9. 将 center 从 0 推广到任意 $a$，所以使用 $(x-a)^n$。
10. 写出 cosine 和 $e^x$ 的 Taylor polynomials。
11. 用 FTC 的 area diagram 几何解释二阶项。
12. 区分 finite Taylor polynomial 与 infinite Taylor series。
13. 用 partial sums 解释 convergence，而不是“真的加无限次”。
14. 比较 $e^x$ 的全球收敛与 $\ln x$ around 1 的有限 radius。
15. 总结：single-point derivative data -> nearby approximation。

## 4. Core Ideas / 核心知识块

### Knowledge Point 1: A Small-Angle Physics Problem Motivates Polynomial Approximation

**Video:** 00:00:00-00:01:41

pendulum 的 weight 相对最低点的高度与：

$$
1-\cos\theta
$$

成比例。cosine 让后续物理方程不容易处理，也掩盖了 pendulum 与其他 oscillating systems 的共同结构。

在 small angle、$\theta$ 接近 0 时：

$$
\boxed{\cos\theta\approx1-\frac{\theta^2}{2}}
$$

于是：

$$
1-\cos\theta\approx\frac{\theta^2}{2}
$$

复杂 trigonometric function 被 quadratic 取代。polynomial 更容易计算、求导和积分，因此 approximation 能把难处理的问题转成更熟悉的结构。

真正的问题不是“看 graph 好像很接近”，而是：为什么恰好是 $1-\theta^2/2$？怎样系统地构造它？

### Knowledge Point 2: A Taylor Polynomial Uses Its Degrees of Freedom to Match Local Behavior

**Video:** 00:01:41-00:03:05

要在 $x=0$ 附近用 quadratic 逼近 $\cos x$，先写最一般形式：

$$
P_2(x)=C_0+C_1x+C_2x^2
$$

三个 coefficients 是 three degrees of freedom。每个 coefficient 可以用来锁定一层 local information。

先匹配 function value：

$$
P_2(0)=C_0
$$

而：

$$
\cos0=1
$$

所以：

$$
C_0=1
$$

之后无论怎样调整 $C_1,C_2$，因为含 $x$ 的项在 $x=0$ 都消失，center value 不会被破坏。

### Knowledge Point 3: The Linear Coefficient Matches the Slope

**Video:** 00:03:05-00:04:02

若 polynomial 与 cosine 只在 center 相交，却 tangent slopes 不同，离开 center 后会立刻发生 first-order drift。

cosine 的 derivative：

$$
(\cos x)'=-\sin x
$$

所以：

$$
(\cos x)'\big|_{x=0}=0
$$

而 polynomial：

$$
P_2'(x)=C_1+2C_2x
$$

在 0：

$$
P_2'(0)=C_1
$$

令 derivatives match：

$$
C_1=0
$$

现在 approximation 与 cosine 在 center 具有相同 value 和 slope。$C_2$ 仍然自由，因为 $C_2x^2$ 在 0 处的 value 与 first derivative 都为 0。

### Knowledge Point 4: The Quadratic Coefficient Matches Curvature

**Video:** 00:04:02-00:05:23

cosine 在 0 附近 curving downward。它的 second derivative：

$$
(\cos x)''=-\cos x
$$

所以：

$$
(\cos x)''\big|_{x=0}=-1
$$

polynomial 的 second derivative：

$$
P_2''(x)=2C_2
$$

匹配 second derivatives：

$$
2C_2=-1
$$

$$
C_2=-\frac12
$$

最终得到：

$$
\boxed{P_2(x)=1-\frac{x^2}{2}}
$$

它不仅在 $x=0$ value 相同，还让 slope 与 slope-change rate 相同，因此两条 graph 在 center 附近“hug”得更久。

### Knowledge Point 5: The Approximation Is Local, but It Can Be Extremely Accurate

**Video:** 00:05:23-00:06:23

用 quadratic 估算：

$$
\cos(0.1)\approx1-\frac{(0.1)^2}{2}=0.995
$$

真实值约为：

$$
\cos(0.1)\approx0.995004\ldots
$$

accuracy 来自三个匹配条件：

$$
P_2(0)=f(0),\quad P_2'(0)=f'(0),\quad P_2''(0)=f''(0)
$$

这不是说 quadratic 与 cosine everywhere 相同，而是它们在 center 共享尽可能多的 local derivative information。

### Knowledge Point 6: More Polynomial Terms Match More Derivatives

**Video:** 00:06:23-00:08:24

加入 cubic term：

$$
P_3(x)=1-\frac{x^2}{2}+C_3x^3
$$

对 $C_3x^3$ 求三次导数：

$$
\frac{d^3}{dx^3}(C_3x^3)=3!C_3=6C_3
$$

cosine 的 third derivative 是 $\sin x$，在 0 等于 0，所以 $C_3=0$。因此 $1-x^2/2$ 同时也是 best cubic Taylor approximation。

加入 quartic term：

$$
P_4(x)=1-\frac{x^2}{2}+C_4x^4
$$

cosine 的 fourth derivative 回到 $\cos x$，在 0 等于 1；而：

$$
\frac{d^4}{dx^4}(C_4x^4)=4!C_4=24C_4
$$

所以：

$$
C_4=\frac1{24}
$$

$$
\boxed{P_4(x)=1-\frac{x^2}{2}+\frac{x^4}{24}}
$$

更多 terms 意味着更多 derivative constraints，也通常扩大高精度近似的可用 neighborhood。

### Knowledge Point 7: Factorials Cancel Repeated Power-Rule Multiplication

**Video:** 00:08:24-00:09:09

为什么 Taylor coefficient 要除以 factorial？因为对 $x^n$ 连续求 $n$ 次导数：

$$
\frac{d^n}{dx^n}x^n=n(n-1)\cdots2\cdot1=n!
$$

所以若 term 是 $C_nx^n$：

$$
\frac{d^n}{dx^n}(C_nx^n)=n!C_n
$$

想让它在 center 匹配 $f^{(n)}(0)$，必须令：

$$
\boxed{C_n=\frac{f^{(n)}(0)}{n!}}
$$

> The factorial denominator cancels the cascading multipliers created by repeated applications of the Power Rule.

factorial 不是神秘装饰，而是 repeated differentiation 必然产生的 normalization factor。

### Knowledge Point 8: Higher-Order Terms Do Not Disturb Earlier Matches

**Video:** 00:09:09-00:09:51

添加 $C_4x^4$ 不会改变 polynomial 在 0 的 value、first derivative 或 second derivative：低于四次的 differentiation 后，term 中仍含 $x$；代入 $x=0$ 就消失。

一般地，对 centered monomial $x^n$：

- derivative order $k<n$ 时，代入 0 得 0
- derivative order $k=n$ 时，得到 $n!$
- derivative order $k>n$ 时，已经变成 0

因此，每个 coefficient 在 center 控制 one and only one derivative order。这让 Taylor construction 可以逐项扩展，而不需要回头修改旧 coefficients。

### Knowledge Point 9: Centering at $a$ Makes the Chosen Point Behave Like Zero

**Video:** 00:09:51-00:10:20

若不是在 0，而是在 $x=a$ 附近逼近，就使用：

$$
(x-a)^n
$$

因为在 $x=a$：

$$
x-a=0
$$

于是所有 cancellation 机制原样保留。general Taylor polynomial：

$$
\boxed{
P_n(x)=f(a)+f'(a)(x-a)+\frac{f''(a)}{2!}(x-a)^2+\cdots+
\frac{f^{(n)}(a)}{n!}(x-a)^n
}
$$

改变 $a$，就是改变 polynomial 最紧贴原函数的位置。Maclaurin polynomial 只是 $a=0$ 的特殊情况。

### Knowledge Point 10: Cosine's Derivative Cycle Builds Its Maclaurin Pattern

**Video:** 00:10:20-00:12:54

cosine derivatives 循环：

$$
\cos x,\ -\sin x,\ -\cos x,\ \sin x,\ldots
$$

在 0 的 values：

$$
1,\ 0,\ -1,\ 0,\ldots
$$

因此 odd-power coefficients 全为 0，even powers alternating signs：

$$
\boxed{
\cos x\approx1-\frac{x^2}{2!}+\frac{x^4}{4!}-\frac{x^6}{6!}+\cdots
}
$$

截断在任意 finite degree 得到 cosine 的 Taylor polynomials。公式中每一项的直觉仍然是：value match、slope match、slope-change match，以及更高阶 local behavior match。

### Knowledge Point 11: The General Formula and the $e^x$ Example

**Video:** 00:12:54-00:14:22

在任意 center $a$：

$$
P_n(x)=\sum_{k=0}^{n}\frac{f^{(k)}(a)}{k!}(x-a)^k
$$

对 $f(x)=e^x$，所有 derivatives 都是 $e^x$。在 $a=0$：

$$
f^{(k)}(0)=1
$$

所以：

$$
\boxed{
e^x\approx1+x+\frac{x^2}{2!}+\frac{x^3}{3!}+\cdots+
\frac{x^n}{n!}
}
$$

这也是 [[Euler's Number e]] 特殊性的另一个表现：所有 derivative data 都重复同一个值。

### Knowledge Point 12: FTC Gives a Geometric Meaning to the Quadratic Term

**Video:** 00:14:27-00:17:12

令 $F(x)$ 是某 graph $g(x)$ 从固定左端到 variable endpoint $x$ 的 accumulated area：

$$
F(x)=\int_c^xg(t)dt
$$

由 [[Fundamental Theorem of Calculus]]：

$$
F'(x)=g(x)
$$

从 $a$ 移到 $x$，最简单的 area change approximation 是 rectangle：

$$
F'(a)(x-a)
$$

但若 graph 有 slope，还多出一个近似 triangular wedge。它的 base 是 $x-a$，height 约为：

$$
F''(a)(x-a)
$$

因此 triangle area：

$$
\frac12F''(a)(x-a)^2
$$

于是：

$$
\boxed{
F(x)\approx F(a)+F'(a)(x-a)+\frac12F''(a)(x-a)^2
}
$$

三项分别对应 diagram 中：已有面积、rectangle、新增 triangular correction。这是 Taylor quadratic term 的几何版本。

### Knowledge Point 13: Taylor Polynomial and Taylor Series Are Different Objects

**Video:** 00:17:12-00:18:22

finite number of terms：

$$
P_n(x)=\sum_{k=0}^{n}\frac{f^{(k)}(a)}{k!}(x-a)^k
$$

叫 [[Taylor Polynomial]]，是明确可计算的 finite approximation。

formal infinite expression：

$$
\sum_{k=0}^{\infty}\frac{f^{(k)}(a)}{k!}(x-a)^k
$$

叫 [[Taylor Series]]。

“加 infinitely many things”不是实际动作。严谨含义是观察 partial sums：

$$
P_0(x),P_1(x),P_2(x),\ldots
$$

如果它们趋近某个 specific value，series converges to that value。若进一步趋近 $f(x)$，才可以在该 $x$ 写 Taylor series equals the function。

### Knowledge Point 14: $e^x$ Equals Its Taylor Series for Every Real Input

**Video:** 00:18:22-00:19:28

令 $x=1$：

$$
1+1+\frac1{2!}+\frac1{3!}+\cdots
$$

partial sums 越来越接近 $e$。

对任意 real $x$：

$$
\boxed{e^x=\sum_{n=0}^{\infty}\frac{x^n}{n!}}
$$

即使所有 coefficient 只来自 center 0 的 derivative data，这个 series 对任意远的 real input 都收敛到 $e^x$。它的 radius of convergence 是 infinite。

### Knowledge Point 15: A Taylor Series Can Have a Limited Radius of Convergence

**Video:** 00:19:28-00:20:55

并非每个 Taylor series 都能把 center information 传播到所有 input。

例如 $\ln x$ around $a=1$：

$$
\ln x=(x-1)-\frac{(x-1)^2}{2}+\frac{(x-1)^3}{3}-\cdots
$$

在 $0<x<2$ 内，增加 terms 会越来越接近 $\ln x$；超出这个 centered range，partial sums 可能剧烈 oscillate 而不趋近任何值，即 series diverges。

center 到 convergence boundary 的最大距离叫 [[Radius of Convergence]]：

$$
R=1
$$

**Important：** 原函数在 $x>2$ 仍然 perfectly defined，并不保证 centered-at-1 的 Taylor series 在那里收敛。function domain 与 series convergence interval 是不同概念。

### Knowledge Point 16: The Final Intuition Is Information Translation

**Video:** 00:20:55-00:21:42

Taylor theory 后续还包括 error bounds、series tests、interval endpoints 等。视频希望留下的 fundamental intuition 是：

> Taylor series translate derivative information at a single point into approximation information around that point.

中文：Taylor series 把单点的各阶导数信息，转换成该点周围的函数近似。

这里的“around”必须认真对待：finite polynomial 的 accuracy 会随距离变化；infinite series 还必须检查 convergence 与是否等于 original function。

## 5. Deep Phrases / 深层表达

| Reusable English sentence | 中文记忆句 |
|---|---|
| Taylor polynomials approximate non-polynomial functions near a chosen input. | Taylor 多项式在指定中心附近逼近非多项式函数。 |
| Each coefficient controls one derivative order at the center. | 每个系数在中心点控制一阶特定的导数信息。 |
| Matching the value prevents zero-order error; matching the slope prevents first-order drift. | 匹配函数值消除零阶误差，匹配斜率避免一阶偏离。 |
| Matching the second derivative makes the approximation curve at the same local rate. | 匹配二阶导数让近似具有相同的局部弯曲速度。 |
| The factorial denominator cancels repeated Power Rule multipliers. | 阶乘分母抵消连续使用幂法则产生的乘数。 |
| Centering with $(x-a)$ makes the point $a$ behave algebraically like zero. | 用 $x-a$ 展开，让中心 $a$ 在代数上像 0。 |
| Adding a higher-order term preserves all previously matched lower-order derivatives. | 新增高阶项不会破坏已经匹配的低阶导数。 |
| A Taylor polynomial is finite; a Taylor series is an infinite limit of such polynomials. | Taylor 多项式有限，Taylor 级数是这些多项式的无穷极限。 |
| Convergence of the series does not automatically mean convergence to the original function. | 级数收敛不自动等于它收敛到原函数。 |
| A function may be defined beyond the interval where a particular Taylor series converges. | 原函数可在某处有定义，但特定 Taylor 展开未必在那里收敛。 |
| Derivative data at one point can encode surprisingly rich information about nearby values. | 单点导数数据可以编码非常丰富的邻域函数信息。 |

## 6. Common Mistakes / 高频错误

### Mistake 1: Memorizing the formula without knowing what each term matches

$f(a)$、$f'(a)(x-a)$、$f''(a)(x-a)^2/2!$ 分别匹配 value、slope、changing slope。

### Mistake 2: Forgetting the factorial

coefficient 是 $f^{(n)}(a)/n!$，不是直接等于 $f^{(n)}(a)$。

### Mistake 3: Using powers of $x$ when the center is not 0

centered at $a$ 必须用 $(x-a)^n$。

### Mistake 4: Confusing Taylor polynomial with Taylor series

polynomial 是 finite approximation；series 是 infinite expression interpreted through partial-sum limits。

### Mistake 5: Assuming more terms always improve every input

在 convergence interval 内通常改善；outside radius，more terms 可以让结果更糟。

### Mistake 6: Assuming every smooth function equals its Taylor series

拥有所有 derivatives 不足以自动保证 series 在 neighborhood 等于 function；这需要额外条件。

### Mistake 7: Confusing function domain with convergence interval

$\ln x$ 在所有 $x>0$ 有定义，但 centered-at-1 series 只在有限范围内表示它。

### Mistake 8: Ignoring units or small-parameter conditions in physics

$\cos\theta\approx1-\theta^2/2$ 的 $\theta$ 必须用 radians，并且是 small-angle approximation。

## 7. Formula Map / 公式地图

Taylor polynomial about $a$：

$$
\boxed{P_n(x)=\sum_{k=0}^{n}\frac{f^{(k)}(a)}{k!}(x-a)^k}
$$

Taylor series about $a$：

$$
\boxed{\sum_{k=0}^{\infty}\frac{f^{(k)}(a)}{k!}(x-a)^k}
$$

Cosine around 0：

$$
\cos x=1-\frac{x^2}{2!}+\frac{x^4}{4!}-\frac{x^6}{6!}+\cdots
$$

Exponential around 0：

$$
e^x=1+x+\frac{x^2}{2!}+\frac{x^3}{3!}+\cdots
$$

Natural log around 1：

$$
\ln x=\sum_{n=1}^{\infty}(-1)^{n+1}\frac{(x-1)^n}{n}
$$

Local-information map：

```text
f(a)       -> constant term
f'(a)      -> linear term
f''(a)     -> quadratic term
f^(n)(a)   -> nth-degree term
divide n!  -> cancel repeated Power Rule multipliers
```

## 8. Confusion / Questions

1. 为什么 polynomial 比 cosine 等函数更容易处理？
2. 为什么匹配 slope 能减少 approximation 的快速偏离？
3. $C_2$ 为什么由 second derivative 决定，而不是直接等于 second derivative？
4. 为什么 cosine 的 best cubic approximation 没有 cubic term？
5. factorial 是怎样从 repeated Power Rule 自然出现的？
6. 新增 $x^4$ term 为什么不会改变 center 的低阶 derivatives？
7. 为什么 centered at $a$ 要使用 $(x-a)^n$？
8. Taylor polynomial 与 Taylor series 的定义区别是什么？
9. “infinite sum equals a value”在 limit language 中是什么意思？
10. 为什么 $e^x$ series 对所有 real inputs 收敛？
11. 为什么 $\ln x$ 本身有定义，Taylor series 却可能发散？
12. radius of convergence 与 interval endpoints 有什么区别？
13. more terms 是否一定在任意 $x$ 改善 approximation？
14. FTC 的 rectangle 与 triangle 分别对应哪些 Taylor terms？

## 9. Source Anchors / 字幕定位

- **00:00:00**：Taylor series 的重要性
- **00:00:35**：pendulum potential-energy example
- **00:01:07**：$\cos\theta\approx1-\theta^2/2$
- **00:01:41**：Taylor 的目标是 polynomial approximation
- **00:02:02**：从 general quadratic 开始
- **00:02:33**：匹配 center value
- **00:03:05**：匹配 tangent slope
- **00:04:02**：匹配 second derivative / curvature
- **00:05:15**：得到 $1-x^2/2$
- **00:05:23**：$\cos(0.1)$ numerical check
- **00:05:42**：three degrees of freedom
- **00:06:23**：添加 higher-order terms
- **00:07:08**：best cubic approximation
- **00:07:21**：quartic improvement
- **00:08:30**：factorials 自然出现
- **00:09:09**：新项不破坏旧 derivative matches
- **00:09:51**：center 从 0 移到任意 input
- **00:10:20**：single-point derivative information
- **00:10:38**：cosine derivative cycle
- **00:11:47**：Taylor polynomial 名称
- **00:12:09**：general coefficient formula
- **00:12:31**：逐项读取公式的意义
- **00:13:02**：general center $a$
- **00:13:35**：$e^x$ Taylor polynomials
- **00:14:27**：连接 FTC 的几何解释
- **00:15:10**：area function derivative
- **00:15:34**：triangle correction
- **00:16:30**：quadratic Taylor term appears geometrically
- **00:17:21**：是否可以无限添加 terms
- **00:17:35**：Taylor polynomial vs Taylor series
- **00:17:45**：infinite series 必须谨慎
- **00:18:22**：$e^x$ at $x=1$
- **00:18:46**：$e^x$ series 对任意 input
- **00:19:28**：并非所有 series 都 global convergence
- **00:19:41**：$\ln x$ around 1
- **00:20:41**：divergence 与 radius of convergence
- **00:21:28**：最终 fundamental intuition

## 10. After Watching Summary / 看完压缩版

Taylor polynomial 的构造不是猜测。对 center $a$，我们要求：

$$
P_n^{(k)}(a)=f^{(k)}(a),\qquad k=0,1,\ldots,n
$$

这唯一确定：

$$
P_n(x)=\sum_{k=0}^{n}\frac{f^{(k)}(a)}{k!}(x-a)^k
$$

$(x-a)^k$ 确保每个 coefficient 只控制 center 的一个 derivative order；$k!$ 抵消 repeated Power Rule multipliers。finite truncation 是 Taylor polynomial；无限 expression 是 Taylor series，必须通过 partial sums 的 limit 讨论 convergence。

$e^x$ 的 Maclaurin series 对所有 real $x$ 收敛到 $e^x$；$\ln x$ around 1 则只有有限 radius。原函数有定义，不代表某个 center 的 Taylor series 必然在那里表示它。

**One-sentence compression:**  
A Taylor expansion builds a polynomial whose successive derivatives match the function at one center, translating local derivative data into nearby function values, subject to convergence limits.

中文：

> Taylor 展开让多项式在一个中心逐阶匹配原函数的导数，把单点局部信息转成邻域函数值，但这种传播范围受收敛性限制。

## 11. Knowledge Graph Connections / 知识图谱连接

- [[10 - Higher Order Derivatives]] 提供每一阶需要被匹配的 local shape data。
- [[Taylor Polynomial]] 是有限阶、可直接用于 approximation 的对象。
- [[Taylor Series]] 是 Taylor polynomials 的 infinite-limit extension。
- [[Maclaurin Series]] 是 center $a=0$ 的 Taylor series。
- [[Power Series]] 提供 $\sum a_n(x-a)^n$ 的统一结构。
- [[Power Rule]] 解释 denominator 中 factorial 的来源。
- [[Fundamental Theorem of Calculus]] 用 accumulated-area rectangle 与 triangle 几何显示 linear 和 quadratic terms。
- [[Euler's Number e]] 让所有 derivative values at 0 都等于 1。
- [[Radius of Convergence]] 限制单点 derivative information 能传播多远。
- [[Interval of Convergence]] 还需单独检查 boundary endpoints。
- [[Lagrange Error Bound]] 衡量 finite Taylor polynomial 的 truncation error。
- [[微积分BC第14次正课-Ratio-Test与Taylor-Series]] 提供 AP 题型、coefficient calculation、error bound 与 convergence tests。

## 12. Links / 链接

- [[UBC Knowledge Graph]]
- [[10 - Higher Order Derivatives]]
- [[Taylor Polynomial]]
- [[Taylor Series]]
- [[Maclaurin Series]]
- [[Power Series]]
- [[Power Rule]]
- [[Fundamental Theorem of Calculus]]
- [[Euler's Number e]]
- [[Radius of Convergence]]
- [[Interval of Convergence]]
- [[Lagrange Error Bound]]
- [[微积分BC第14次正课-Ratio-Test与Taylor-Series]]
