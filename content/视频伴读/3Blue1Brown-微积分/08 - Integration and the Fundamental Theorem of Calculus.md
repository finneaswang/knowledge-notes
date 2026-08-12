---
title: "3Blue1Brown - The Essence of Calculus 08 - Integration and the Fundamental Theorem of Calculus"
description: "A connected bilingual learning note about 3Blue1Brown - The Essence of Calculus 08 - Integration and the Fundamental Theorem of Calculus."
publish: true
tags: [open-notes, visual-calculus]
---
# 3Blue1Brown - The Essence of Calculus 08 - Integration and the Fundamental Theorem of Calculus

## Reading Guide / 阅读说明

这是一份伴读型笔记。单独阅读时，它要像书一样重建“velocity 如何累积成 distance”以及为什么 integral 与 derivative 互为反向过程；配合视频时，每个 Knowledge Point 都有时间定位。正文保留推理和单位分析，概念卡承担之后的快速复习与知识图谱连接。

Connected from:

- [[07 - Limits, L'Hopital's Rule, and Epsilon-Delta Definitions]]
- [[01 - The Essence of Calculus]]
- [[02 - The Paradox of the Derivative]]
- [[Integrals]]
- [[Fundamental Theorem of Calculus]]
- [[UBC Knowledge Graph]]

## 1. What This Episode Is About / 这一集在讲什么

Chapter 2 从 distance function $s(t)$ 求 derivative，得到 velocity：

$$
v(t)=s'(t)
$$

本集反过来：如果只知道不断变化的 velocity，怎样重建 distance？

核心答案有两种看似不同的语言：

1. 把很多短时间内的 displacement 加起来，也就是 [[Integrals]]。
2. 找一个 derivative 等于 velocity 的函数，也就是 [[Antiderivative]]。

[[Fundamental Theorem of Calculus]] 说明这两件事其实相同：

$$
\boxed{
\int_a^b f(x)\,dx=F(b)-F(a),\qquad F'(x)=f(x)
}
$$

**English core sentence:**  
Integration accumulates local contributions, while differentiation recovers the local contribution rate from the accumulated total.

**中文记忆：**  
积分把局部贡献累积成总量；导数从累计总量中重新读出当下的贡献速率。

## 2. Link to Previous Episodes / 和前几集的连接

- Chapter 1 已经用 circle area 展示 “cut into tiny pieces and add”。
- Chapter 2 用 moving car 解释 distance derivative is velocity。
- Chapter 3-6 建立了 finite tiny changes 与 local linear approximation。
- Chapter 7 说明 sums 和 tiny changes 的精确值由 [[Limits]] 支撑。

这一章把它们合并：

```text
local rate v(t)
-> tiny contribution v(t)dt
-> sum over time
-> integral / accumulated distance
-> derivative of accumulated distance returns v(t)
```

## 3. Class Flow / 视频脉络

1. 给出 8-second car motion 与 $v(t)=t(8-t)$。
2. constant velocity 时，distance = velocity × time，并可看成 rectangle area。
3. variable velocity 时，把时间切成许多短 intervals，并暂时近似为 constant。
4. 每个 interval 贡献 $v(t)dt$，所有 rectangle areas 相加。
5. 令 $dt\to0$，rectangle sum 趋近 curve 下的精确面积，也就是 integral。
6. 把 upper bound 改成变量 $T$，得到 accumulated area function $s(T)$。
7. 增加 $dT$ 会增加一个高度约为 $v(T)$、宽度 $dT$ 的薄片。
8. 因此 $s'(T)=v(T)$，integral 与 derivative 互逆。
9. 找 $v(t)=8t-t^2$ 的 antiderivative，并解释 $+C$。
10. 用 upper value minus lower value 计算 definite integral。
11. 总结 Fundamental Theorem of Calculus。
12. 说明 graph below axis 时 integral 计算 [[Signed Area]]。

## 4. Core Ideas / 核心知识块

### Knowledge Point 1: Recovering Distance From Velocity Is an Inverse-Derivative Problem

**Video:** 00:00:12-00:02:42

汽车从静止开始，在 8 秒内加速后再减速至静止。只看到 speedometer，并记录 velocity model：

$$
v(t)=t(8-t)=8t-t^2,\qquad0\le t\le8
$$

目标是找到 distance function $s(t)$。

Chapter 2 已知：

$$
s'(t)=v(t)
$$

所以当前问题等价于：

> What function has $t(8-t)$ as its derivative?

这叫寻找 [[Antiderivative]]。但视频暂时不直接做 symbolic reverse differentiation，而是先解释为什么这个问题等价于 velocity graph 下的 area。

**Why it matters：**  
area-under-a-curve 不是额外插入的几何题，而是把 continuously changing rate 累积成 total change 的统一语言。

### Knowledge Point 2: Constant Velocity Turns Distance Into Rectangle Area

**Video:** 00:02:42-00:04:21

若 velocity 恒定：

$$
\Delta s=v\Delta t
$$

在 velocity-time graph 中：

- rectangle height = velocity，单位 m/s
- rectangle width = time，单位 s
- rectangle area = displacement，单位 m

$$
\left(\frac{\text m}{\text s}\right)(\text s)=\text m
$$

因此“distance as area”不是只靠图形联想，units 已经告诉我们 vertical quantity × horizontal quantity 产生什么物理量。

若 velocity 分段恒定，每段 displacement 都是一个 rectangle area，总 displacement 是所有 rectangles 的和。

真正的困难只是：现实 velocity 在每个瞬间都变化，不能直接用一个固定高度代表整段。

### Knowledge Point 3: Variable Velocity Is Approximated by Many Constant Pieces

**Video:** 00:04:24-00:06:29

把 $0$ 到 $8$ 秒切成许多宽度为 $dt$ 的 intervals，例如：

$$
dt=0.25\ \text s
$$

考虑 $t=1$ 到 $t=1.25$：真实 velocity 从 $7$ 增长到约 $8.4$ m/s。为了暂时使用 constant-velocity formula，可以选择 interval 左端高度：

$$
v(1)=7\ \text{m/s}
$$

近似 displacement：

$$
v(1)dt=7(0.25)=1.75\ \text m
$$

这就是一个 thin rectangle 的 area。

一般 interval 的贡献：

$$
\Delta s\approx v(t)dt
$$

左端点、右端点或 interval 内其他 sample point 都可以；关键不是某一次 approximation 完美，而是：

> The sequence of approximations must become more accurate as the interval width approaches zero.

当 $dt$ 变小：

- 每个 rectangle 变窄，local constant approximation 更准确；
- rectangle 数量增加，覆盖完整 time interval；
- total error 趋近 0。

### Knowledge Point 4: An Integral Is the Limit of Rectangle Sums

**Video:** 00:06:29-00:08:28

所有 approximate displacements 相加：

$$
\sum v(t_i)\Delta t
$$

当最大 interval width 趋近 0，这个 [[Riemann Sum]] 的 limit 定义 definite integral：

$$
\boxed{
\int_0^8v(t)\,dt
=\lim_{\Delta t\to0}\sum v(t_i^*)\Delta t
}
$$

积分号 $\int$ 像 stretched S，提醒它来自 sum。

$dt$ 在直觉中承担两个角色：

1. 它是每个 tiny contribution $v(t)dt$ 中的 width。
2. 它控制 sample points 的 spacing；width 越小，terms 越多。

积分不是某一个固定 $dt$ 下的 rectangle sum，而是所有这些 approximations 在 $dt\to0$ 时所趋近的精确值。

几何上：

$$
\int_0^8v(t)\,dt
$$

是 velocity curve 与 horizontal axis 之间的 [[Signed Area]]；物理上是 net displacement。

### Knowledge Point 5: Area Under a Curve Is a Common Language for Accumulation

**Video:** 00:08:30-00:09:33

把 distance 问题改写成 area 问题，表面上没有让计算立刻变简单。但 [[Area Under a Curve]] 是许多不同问题的共同结构：

```text
hard total
-> break into tiny pieces
-> approximate each piece by multiplication
-> add all pieces
-> take a limit
```

在不同情境中：

- velocity × time -> displacement
- density × tiny length/area/volume -> mass or charge
- force × displacement -> work
- electric field contribution $dE$ -> total field

所以 integral 不等于“只会算面积”；area 是 continuous accumulation 的可视化界面。

### Knowledge Point 6: The Derivative of an Accumulated-Area Function Is the Original Height

**Video:** 00:09:34-00:11:16

把 right endpoint 改为变量 $T$：

$$
s(T)=\int_0^T v(t)\,dt
$$

它表示汽车到 $T$ 秒为止的 accumulated displacement。

让 endpoint 增加一个 tiny nudge $dT$，新增面积是一条 thin sliver：

- width = $dT$
- height approximately = $v(T)$

所以：

$$
ds\approx v(T)dT
$$

两边除以 $dT$，并令 $dT\to0$：

$$
\boxed{s'(T)=v(T)}
$$

一般地，若：

$$
A(x)=\int_a^x f(t)\,dt
$$

则：

$$
\boxed{A'(x)=f(x)}
$$

这就是 FTC Part 1 的核心图像：accumulated area 的 instantaneous growth rate，等于当前新加入 sliver 的 height。

**English core sentence:**  
The rate at which accumulated area grows is the current height of the graph.

### Knowledge Point 7: Antiderivatives Recover the Accumulation Function

**Video:** 00:11:18-00:13:07

已知：

$$
v(t)=8t-t^2
$$

寻找 derivative 等于它的函数：

$$
\frac{d}{dt}(4t^2)=8t
$$

$$
\frac{d}{dt}\left(-\frac13t^3\right)=-t^2
$$

因此一个 antiderivative 是：

$$
F(t)=4t^2-\frac13t^3
$$

但任意 constant 的 derivative 都是 0，所以全部 antiderivatives 是：

$$
\boxed{F(t)=4t^2-\frac13t^3+C}
$$

$+C$ 不是装饰。几何上，不同 $C$ 把 graph 整体上下平移，但所有 tangent slopes 不变。

**Definite vs indefinite：**

- indefinite integral / antiderivative family：$\int f(x)dx=F(x)+C$
- definite integral / accumulated net amount：$\int_a^b f(x)dx$ 是一个 number

### Knowledge Point 8: Bounds Select the Correct Net Accumulation

**Video:** 00:13:08-00:16:17

accumulation from lower bound $a$ to variable endpoint $T$ 必须满足：

$$
\int_a^a f(t)dt=0
$$

若 $F'=f$，则合适的 area function 是：

$$
A(T)=F(T)-F(a)
$$

因为：

$$
A(a)=F(a)-F(a)=0
$$

对固定 bounds：

$$
\boxed{\int_a^b f(x)dx=F(b)-F(a)}
$$

常写作：

$$
\left.F(x)\right|_a^b
$$

任何 antiderivative 中的 $C$ 都会相消：

$$
[F(b)+C]-[F(a)+C]=F(b)-F(a)
$$

对视频中的 $v(t)$：

$$
F(t)=4t^2-\frac13t^3
$$

完整 8 秒的 displacement：

$$
F(8)-F(0)=\frac{256}{3}\approx85.33\ \text m
$$

这就是 [[Fundamental Theorem of Calculus]] 最惊人的地方：integral 概念上汇总 continuum 中所有 inputs，但计算时 antiderivative 将全部信息压缩到两个 endpoint values。

### Knowledge Point 9: Integrals Measure Signed Area, Not Always Geometric Area

**Video:** 00:16:18-00:18:54

如果 velocity 变负，汽车向反方向移动：

$$
ds\approx v(t)dt<0
$$

graph below horizontal axis 的 rectangles 贡献 negative values。因此：

$$
\int_a^b v(t)dt
$$

给的是 displacement / net change，不一定是 total distance traveled。

- above axis area：positive contribution
- below axis area：negative contribution

若要求 total distance，通常计算：

$$
\boxed{\int_a^b|v(t)|dt}
$$

若要求 ordinary geometric area，则也要把 below-axis 部分取正。

**English core sentence:**  
A definite integral measures signed accumulation; contributions below the axis count negatively.

## 5. Deep Phrases / 深层表达

| Reusable English sentence | 中文记忆句 |
|---|---|
| Constant velocity turns displacement into velocity multiplied by elapsed time. | 速度恒定时，位移就是速度乘时间。 |
| The units of rectangle area reveal the accumulated physical quantity. | 矩形面积的单位直接揭示累积出来的物理量。 |
| A variable rate can be approximated as constant over sufficiently small intervals. | 变化率在足够短的区间内可以近似看成常量。 |
| An integral is the limit of sums of tiny local contributions. | 积分是许多局部微小贡献之和的极限。 |
| The same $dt$ controls both the width of each contribution and the spacing between samples. | $dt$ 同时控制每项宽度和采样间距。 |
| Area under a curve is a visual language for continuous accumulation. | 曲线下面积是连续累积的图像语言。 |
| The derivative of an accumulated-area function equals the current height of the graph. | 累计面积函数的导数等于图像当前高度。 |
| Antiderivatives differ by a constant because vertical shifts do not change slopes. | 反导函数相差常数，因为竖直平移不改变斜率。 |
| The Fundamental Theorem converts a continuum-wide sum into an endpoint calculation. | 微积分基本定理把整个连续区间的累加压缩成端点计算。 |
| A definite integral measures signed accumulation, not automatically total geometric area. | 定积分计算带符号累积，不自动等于普通几何面积。 |

## 6. Common Mistakes / 高频错误

### Mistake 1: Treating one rectangle sum as the integral

有限 partition 只是 approximation；integral 是 mesh width 趋近 0 时的 limit。

### Mistake 2: Ignoring units

检查 integrand units × differential units，可以判断 integral 的 physical meaning。

### Mistake 3: Thinking smaller $dt$ means a smaller total

每个 rectangle 变小，但 rectangle 数量增加；total sum 趋向稳定值。

### Mistake 4: Forgetting $+C$ for an indefinite integral

所有 antiderivatives 构成 vertically shifted family。

### Mistake 5: Adding $+C$ to a definite-integral answer

definite integral 是 number，endpoint subtraction 会消掉 $C$。

### Mistake 6: Mixing upper-minus-lower order

$$
\int_a^bf(x)dx=F(b)-F(a)
$$

不是反过来。

### Mistake 7: Calling every integral “area” without sign

below-axis contribution 为负。total distance 与 net displacement 不同。

### Mistake 8: Thinking FTC is only a computation shortcut

它的核心是 differentiation 与 accumulation 互逆；endpoint formula 是这一结构的结果。

## 7. Formula Map / 公式地图

Riemann-sum definition:

$$
\boxed{\int_a^bf(x)dx=\lim_{\max\Delta x_i\to0}\sum f(x_i^*)\Delta x_i}
$$

Area function:

$$
A(x)=\int_a^xf(t)dt
$$

FTC Part 1:

$$
\boxed{A'(x)=f(x)}
$$

Antiderivative family:

$$
\boxed{\int f(x)dx=F(x)+C,\qquad F'(x)=f(x)}
$$

FTC evaluation form:

$$
\boxed{\int_a^bf(x)dx=F(b)-F(a)}
$$

Total distance from velocity:

$$
\boxed{\text{total distance}=\int_a^b|v(t)|dt}
$$

## 8. Confusion / Questions

1. 为什么 velocity-time graph 的 area 单位是 distance？
2. rectangle height 选左端、右端或中点，为什么最后可以得到相同 integral？
3. $dt$ 为什么既出现在 $v(t)dt$ 中，又决定 rectangle 数量？
4. finite sum 与 definite integral 的本质区别是什么？
5. 为什么 area function 的 derivative 恰好是当前 graph height？
6. indefinite integral 为什么必须写 $+C$？
7. lower bound 如何选择唯一的 accumulated-area function？
8. 为什么 definite integral 只需要两个 endpoint values，却包含整个区间的信息？
9. displacement、total distance 和 signed area 分别怎样计算？

## 9. Source Anchors / 字幕定位

- **00:00:31**：integrals are an inverse of derivatives
- **00:00:55**：speedometer-only car problem
- **00:01:38**：$v(t)=t(8-t)$
- **00:02:42**：constant velocity 与 rectangle area
- **00:04:24**：把 0-8 秒切成 width $dt$ 的 intervals
- **00:05:42**：left-endpoint approximation
- **00:06:17**：每段 contribution $v(t)dt$
- **00:06:29**：integral notation 与 rectangle sum
- **00:07:22**：为什么不是普通 sigma sum
- **00:08:22**：integral 命名
- **00:09:34**：variable upper bound $T$
- **00:10:23**：新增 area sliver
- **00:11:06**：area-function derivative equals original function
- **00:11:18**：求 $8t-t^2$ 的 antiderivative
- **00:12:32**：为什么有 $+C$
- **00:13:08**：lower bound 选择正确 constant
- **00:14:23**：upper value minus lower value
- **00:15:32**：Fundamental Theorem of Calculus
- **00:17:46**：negative area / signed area

## 10. After Watching Summary / 看完压缩版

variable velocity 下，每个短 interval 的 displacement：

$$
ds\approx v(t)dt
$$

把所有 tiny contributions 累加并令 width 趋近 0：

$$
s(T)=\int_0^Tv(t)dt
$$

endpoint 增加 $dT$ 时，新增 sliver 约为 $v(T)dT$，所以：

$$
s'(T)=v(T)
$$

因此 accumulated area function 是 integrand 的 antiderivative。若 $F'=f$：

$$
\int_a^bf(x)dx=F(b)-F(a)
$$

这就是 Fundamental Theorem：derivative 读取 local rate，integral 累积 local rate，两者互相逆转。

最后，definite integral 计算 signed accumulation；graph below axis 时贡献为负。

**One-sentence compression:**  
The Fundamental Theorem of Calculus says that accumulating a rate and differentiating the accumulated total undo each other.

中文：

> 微积分基本定理说明：累积变化率与对累计总量求导是彼此逆转的过程。

## 11. Knowledge Graph Connections / 知识图谱连接

- [[09 - What Does Area Have to Do With Slope]] gives a second FTC intuition: average derivative value equals the antiderivative's endpoint secant slope.
- [[01 - The Essence of Calculus]] 首次用 circle area 展示 tiny pieces；本章给出 general integral notation 与 FTC。
- [[02 - The Paradox of the Derivative]] 从 distance 得到 velocity；本章从 velocity 重建 distance。
- [[07 - Limits, L'Hopital's Rule, and Epsilon-Delta Definitions]] 为 $\Delta t\to0$ 的 sum limit 提供正式语言。
- [[Integrals]] 是 continuous accumulation 的统一工具。
- [[Riemann Sum]] 连接 finite rectangle approximations 与 exact definite integral。
- [[Area Under a Curve]] 是 accumulation 的主要视觉模型。
- [[Antiderivative]] 连接 reverse differentiation、$+C$ 与 definite-integral computation。
- [[Fundamental Theorem of Calculus]] 连接 area-function derivative 与 endpoint evaluation。
- [[Signed Area]] 区分 displacement、net change 与 total geometric area。
- [[AP电磁学第2次正课-连续带电体电场与电通量]] 使用同一结构把 $dE$ contributions 累积成 total electric field。

## 12. Links / 链接

- [[UBC Knowledge Graph]]
- [[01 - The Essence of Calculus]]
- [[02 - The Paradox of the Derivative]]
- [[07 - Limits, L'Hopital's Rule, and Epsilon-Delta Definitions]]
- [[09 - What Does Area Have to Do With Slope]]
- [[Derivatives]]
- [[Limits]]
- [[Integrals]]
- [[Riemann Sum]]
- [[Area Under a Curve]]
- [[Antiderivative]]
- [[Fundamental Theorem of Calculus]]
- [[Signed Area]]
- [[AP电磁学第2次正课-连续带电体电场与电通量]]
