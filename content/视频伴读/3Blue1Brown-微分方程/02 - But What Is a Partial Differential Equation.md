---
title: "3Blue1Brown - Differential Equations 02 - But What Is a Partial Differential Equation?"
description: "A connected bilingual learning note about 3Blue1Brown - Differential Equations 02 - But What Is a Partial Differential Equation?."
publish: true
tags: [open-notes, visual-differential-equations]
---
# 3Blue1Brown - Differential Equations 02 - But What Is a Partial Differential Equation?

## Reading Guide / 阅读说明

这是 *Differential Equations* 系列第二集，直接承接 [[01 - Differential Equations, a Tourist's Guide]]。上一集研究“少数状态量随时间变化”的 ODE；这一集把 state 扩展成一整条 temperature distribution，并通过 [[Heat Equation]] 解释 PDE 到底在表达什么。

这份笔记仍按“伴读型教材”处理：单独阅读时，应当能重新走完从热传导直觉到方程的推导；配合视频时，每个 Knowledge Point 都有时间定位。重点不是背

$$
\frac{\partial T}{\partial t}=\alpha\frac{\partial^2T}{\partial x^2},
$$

而是能够把它读成一句物理语言：**某一点温度随时间变化的速度，由该点相对于周围温度分布的局部弯曲程度决定。**

Connected from:

- [[01 - Differential Equations, a Tourist's Guide]]
- [[10 - Higher Order Derivatives]]
- [[12 - The Other Way to Visualize Derivatives]]
- [[UBC Knowledge Graph]]

## 1. What This Episode Is About / 这一集在讲什么

设一根金属杆上每个位置都有温度。热量会从较热处流向较冷处，所以温度分布最终趋于平坦；但真正的问题不是“最后会相等”，而是：

> What will the temperature distribution be at each point in time?

我们要追踪的不是一个 number，而是整个 function $T(x,t)$。位置 $x$ 和时间 $t$ 都是输入，因此存在不同方向上的变化率：

- $\partial T/\partial x$：同一时刻沿杆移动时，温度怎样变。
- $\partial T/\partial t$：固定在同一位置时，温度怎样随时间变。

[[Heat Equation]] 把两者连起来：time evolution 由 spatial curvature 控制。视频最重要的工作，是先在离散世界中证明“一个点会趋向邻居平均值”，再让点间距趋近于零，使 [[Second Difference]] 变成二阶空间导数。

```text
heat flows toward local balance
-> compare a point with its neighbors
-> difference of differences
-> second spatial derivative
-> heat equation
```

因此 PDE 并不是神秘的新运算，而是一个连续系统中“无穷多个局部更新规则”的紧凑写法。

## 2. Link to Episode 1 / 和上一集的连接

上一集把 differential equation 理解成 local law of change，并用 finite-dimensional state 表示 pendulum：

$$
\mathbf{s}(t)=(\theta(t),\dot\theta(t)).
$$

这一集的 state 不再只有几个 coordinates，而是一整个温度函数：

$$
T_t:x\mapsto T(x,t).
$$

两者的逻辑完全相同：

```text
ODE: finitely many values change together
PDE: a continuum of values changes together
```

ODE 右侧可能依赖其他状态量；热方程右侧依赖无限接近的 spatial neighbors。换句话说，一个 PDE 可以看成沿杆每一点各有一个方程的 infinite system。

## 3. Class Flow / 视频脉络

1. 用金属杆的温度分布提出 heat-flow problem。
2. 回顾“描述 moment-to-moment change 比直接写完整 evolution 更容易”。
3. 预告热方程与 diffusion、Brownian motion、Black-Scholes、[[Fourier Series]] 的连接。
4. 明确 unknown function 是 $T(x,t)$，同时依赖 space 与 time。
5. 区分 spatial derivative 与 time derivative，引入 [[Partial Derivatives]]。
6. 读出一维 [[Heat Equation]]：时间变化率正比于空间二阶偏导。
7. 把连续杆像素化，用有限个温度值建立 discrete model。
8. 比较中间点与左右邻居平均值，写出 local update law。
9. 把“邻居平均值之差”改写为 difference of differences。
10. 识别 [[Second Difference]]，再取连续极限得到 second derivative。
11. 用 concavity 解释为何凹处升温、凸处降温，曲线逐渐变平。
12. 比较 ODE 与 PDE：finite state 对 continuum state。
13. 推广到二维和三维，引入 [[Laplacian]]。
14. 以 Fourier 方法将在下一集求解热方程收束。

## 4. Core Ideas / 核心知识块

### Knowledge Point 1: A PDE Evolves an Entire Distribution

**Video: 00:04-01:20**

一根杆在一个时刻的温度，不是一个数，而是沿位置变化的函数 $T(x)$。当时间也加入后，完整对象是

$$
T(x,t).
$$

固定 $t$，得到某一时刻的 temperature profile；固定 $x$，得到某一点的 temperature history。

> A PDE tracks a field or function changing over time, not merely a handful of numbers.

这里的“field”可以理解为：空间中每个点都分配一个值。温度、压力、电势和浓度都可以这样描述。

### Knowledge Point 2: Local Laws Are Easier Than Full Evolution

**Video: 01:01-01:38**

我们很难直接猜出 $T(x,t)$ 的完整公式，却很容易说出局部趋势：hot spots cool，cool spots surrounded by warmth heat up。

这延续了 [[Differential Equations]] 的核心句：

> It is easier to describe how a setup changes from moment to moment than to jump straight to its full evolution.

微分方程把“下一瞬间怎样变”写成 derivative relation。解方程则反过来从局部规律恢复全局演化。

### Knowledge Point 3: The Heat Equation Is a Gateway to Diffusion

**Video: 01:24-03:31**

热方程并不只属于热学。只要某个量从高浓度区域向低浓度区域扩散，相似结构就会出现，例如 diffusion、Brownian motion 和 finance 中的 Black-Scholes equation。

视频也提前展示 [[Fourier Series]]：许多具有不同 frequency、amplitude 和 phase 的简单旋转或波形，可以叠加成复杂形状。Fourier 最初正是在研究热传导时发展这套方法。

关键思想是：

> Complex behavior can be constructed from simple idealized building blocks.

### Knowledge Point 4: Space and Time Are Separate Inputs

**Video: 03:32-04:47**

$T(x,t)$ 的 input space 有两个方向。一种画法把 $(x,t)$ 放在平面上，temperature 画成上方曲面；另一种画法把每个时刻的 $T(x)$ 曲线做成动画。两者等价。

要避免一个视觉误区：

- 曲面的一个 horizontal axis 是 position，另一个是 time。
- 动画中的曲线只画 position-temperature；time 由动画播放本身表达。
- 这不同于二维金属板的 temperature surface，其中两个水平轴都是 spatial directions。

### Knowledge Point 5: Partial Derivatives Ask Direction-Specific Questions

**Video: 04:47-06:51**

多输入函数有不止一种 rate of change。[[Partial Derivatives]] 的操作仍然是 ordinary derivative，只是一次改变一个 input，同时固定其他 inputs：

$$
\frac{\partial T}{\partial x}
=\lim_{\Delta x\to0}\frac{T(x+\Delta x,t)-T(x,t)}{\Delta x},
$$

$$
\frac{\partial T}{\partial t}
=\lim_{\Delta t\to0}\frac{T(x,t+\Delta t)-T(x,t)}{\Delta t}.
$$

前者问“沿杆走一点，温度变多少”；后者问“站在原地等一会儿，温度变多少”。每个 partial derivative 只讲完整变化故事的一部分。

读 derivative notation 时，可以先把它想成 tiny output change 与 tiny input change 的比，再记住它真正编码的是 step size 趋于零时的 limit，而不是某个有限小步的比值。

### Knowledge Point 6: The Heat Equation Couples Time Change to Spatial Curvature

**Video: 06:51-07:58**

一维 heat equation 是

$$
\boxed{\frac{\partial T}{\partial t}=\alpha\frac{\partial^2T}{\partial x^2}}
$$

其中 $\alpha>0$ 是 thermal diffusivity / 热扩散率，决定材料均匀化温度的快慢。

方程左边是 fixed location 的 instantaneous temperature change；右边不是 temperature 本身，也不是 spatial slope，而是 spatial slope 的变化率，即 curvature。

> Where the temperature distribution curves, it changes in time in the direction that flattens that curvature.

### Knowledge Point 7: Discretization Exposes the Physical Mechanism

**Video: 07:58-09:16**

把连续杆像素化为等间距 points。取连续三个点，温度分别为 $T_1,T_2,T_3$。中间点与邻居平均值比较：

$$
\frac{T_1+T_3}{2}-T_2.
$$

- 若结果 $>0$，邻居平均更热，$T_2$ 上升。
- 若结果 $<0$，邻居平均更冷，$T_2$ 下降。
- 差异越大，改变越快。

因此离散更新规律可写成

$$
\frac{dT_2}{dt}=k\left(\frac{T_1+T_3}{2}-T_2\right).
$$

这一步的重要性在于：方程不是凭空猜出的，而是 local averaging tendency 的直接翻译。

### Knowledge Point 8: Neighbor Averaging Becomes a Second Difference

**Video: 09:16-11:29**

把右侧重排：

$$
\frac{T_1+T_3}{2}-T_2
=\frac12\big[(T_3-T_2)-(T_2-T_1)\big].
$$

定义相邻的一阶差

$$
\Delta T_1=T_2-T_1,\qquad \Delta T_2=T_3-T_2,
$$

则括号中是

$$
\Delta T_2-\Delta T_1,
$$

也就是“difference of differences”，即 [[Second Difference]]。它测量的仍然是中间值和邻居平均值的偏离，只是换成更接近 calculus 的语言。

> A second difference measures whether successive first differences are increasing or decreasing.

### Knowledge Point 9: The Continuous Limit Turns Second Difference into Second Derivative

**Video: 11:29-12:59**

若点间距为 $h$，正确缩放后的 central second difference 是

$$
\frac{T(x+h)-2T(x)+T(x-h)}{h^2}.
$$

当 $h\to0$：

$$
\frac{T(x+h)-2T(x)+T(x-h)}{h^2}
\longrightarrow \frac{\partial^2T}{\partial x^2}.
$$

因此，连续 heat equation 就是离散 neighbor-averaging rule 的极限版本。二阶导数的新直觉是：

> Second derivatives measure how a value compares with the average of its nearby neighbors.

这与 [[10 - Higher Order Derivatives]] 中“second derivative measures changing slope”完全一致，只是这里给了它局部平均的物理解释。

### Knowledge Point 10: Curvature Predicts the Direction of Temperature Change

**Video: 12:21-13:18**

若 temperature graph 向上弯，$T_{xx}>0$，该点低于附近趋势，所以 $T_t>0$，它会升温。若图像向下弯，$T_{xx}<0$，该点高于附近趋势，所以 $T_t<0$，它会降温。

| Local shape | $T_{xx}$ | $T_t$ | Evolution |
|---|---:|---:|---|
| valley / concave up | positive | positive | rises |
| straight locally | zero | zero | no immediate change |
| peak / concave down | negative | negative | falls |

所以 heat flow 对 temperature profile 具有 smoothing effect：peaks fall，valleys rise，curved regions flatten。

### Knowledge Point 11: A PDE Is an Infinite System of Coupled Equations

**Video: 13:18-14:29**

ODE model 通常追踪有限个 numbers，例如多个物体的位置坐标。PDE 则追踪 continuum 中无限多个 values；杆上的每个位置都有自己的 time derivative。

但热方程具有 locality：每一点的变化只依赖 infinitesimally nearby points。空间导数把这种 neighbor dependence 压缩在一个符号中。

> One PDE is like a system of infinitely many equations, one for each point in space.

### Knowledge Point 12: The Laplacian Generalizes Spatial Curvature

**Video: 14:29-15:32**

若温度依赖多个空间方向，所有 spatial second derivatives 相加：

$$
\nabla^2T
=\frac{\partial^2T}{\partial x^2}
+\frac{\partial^2T}{\partial y^2}
+\frac{\partial^2T}{\partial z^2}.
$$

这个 operator 称为 [[Laplacian]]。多维 heat equation 写成

$$
\frac{\partial T}{\partial t}=\alpha\nabla^2T.
$$

直觉没有改变：一维邻居是 left and right；多维邻居来自 all directions。Laplacian 测量一个点相对于周围平均趋势是偏高还是偏低。若学过 vector calculus，还可写成

$$
\nabla^2T=\nabla\cdot(\nabla T),
$$

即 gradient 的 divergence。

### Knowledge Point 13: Interpretation Comes Before Solution

**Video: 15:32-16:02**

本集到这里完成的是“读懂 PDE”，还没有正式求解。下一集将用 [[Fourier Series]] 把复杂 initial temperature profile 分解为简单 modes，而每个 mode 都能独立演化。

这延续 DE1 的方法论：analytic solution 很重要，但在求解前，先明确 unknown object、inputs、derivative directions、local mechanism 和 state evolution，才能真正理解公式。

## 5. Deep Phrases / 深句对应表

| English core sentence | 中文记忆句 |
|---|---|
| A PDE evolves an entire function, not just a finite list of numbers. | PDE 推动的是整个函数随时间演化，而不只是有限个数。 |
| A partial derivative records change in one input direction while the others are held fixed. | 偏导数只沿一个输入方向观察变化，其余输入保持不动。 |
| The heat equation connects temporal change to spatial curvature. | 热方程把时间上的变化率交给空间上的弯曲程度决定。 |
| A point tends toward the average of its neighbors. | 每一点都倾向于靠近邻居的平均状态。 |
| A second difference is a difference between consecutive first differences. | 二阶差分就是相邻一阶差分之间的差。 |
| Second derivatives measure how a value compares with the average of nearby values. | 二阶导数衡量一个值相对于附近平均趋势是偏高还是偏低。 |
| Peaks fall, valleys rise, and the distribution smooths out. | 峰会下降，谷会抬升，整个分布逐渐变平。 |
| A PDE is an infinite system of locally coupled equations. | PDE 可以看成无穷多个只与附近相互作用的方程。 |
| The Laplacian is the multidimensional analogue of a second derivative. | Laplacian 是二阶导数在多维空间中的对应物。 |
| Complex solutions can be assembled from simple modes. | 复杂解可以由简单模式叠加构成。 |

## 6. Common Mistakes / 常见误区

1. **把 $T(x,t)$ 中的大写 $T$ 和输入 $t$ 混淆。** $T$ 是 temperature function，$t$ 是 time input。
2. **认为 partial derivative 是一种完全不同的 derivative。** 运算本质相同，差别在于多输入函数中要说明沿哪个方向变化。
3. **把 $T_x$ 当作温度随时间的变化。** $T_x$ 是 spatial slope；$T_t$ 才是固定位置随时间的变化。
4. **认为 heat equation 说热量总是向右流。** 方程没有固定方向；它由局部高低与 curvature 决定。
5. **只把 $T_{xx}$ 记成“concavity”。** 更有用的解释是该点相对于邻居平均值的偏差。
6. **在离散模型里漏掉间距缩放。** 从 second difference 到 second derivative 时需除以 $h^2$；常数可以并入 diffusivity，但 dimensional scaling 不能忽略。
7. **把二维 input surface 当成二维金属板。** $T(x,t)$ 的两个 inputs 是一维 space 加 time；二维板应是 $T(x,y,t)$。
8. **以为 partial 意味着 PDE 比 ODE 更简单。** “partial”描述 derivative 类型，不代表问题只做了一部分。
9. **认为每一点依赖全空间所有点。** 热方程的微分形式是 local；global influence 通过持续的局部作用传播。

## 7. Formula Map / 公式地图

### Temperature field

$$
T=T(x,t)
$$

### Spatial and temporal partial derivatives

$$
T_x=\frac{\partial T}{\partial x},
\qquad
T_t=\frac{\partial T}{\partial t}
$$

### Discrete neighbor-averaging law

$$
\frac{dT_i}{dt}
=k\left(\frac{T_{i-1}+T_{i+1}}2-T_i\right)
$$

### Central second difference

$$
\Delta^2T_i=T_{i+1}-2T_i+T_{i-1}
$$

### Continuous second derivative

$$
T_{xx}
=\lim_{h\to0}
\frac{T(x+h,t)-2T(x,t)+T(x-h,t)}{h^2}
$$

### One-dimensional heat equation

$$
\boxed{T_t=\alpha T_{xx}}
$$

### Laplacian and multidimensional heat equation

$$
\nabla^2T=T_{xx}+T_{yy}+T_{zz},
\qquad
\boxed{T_t=\alpha\nabla^2T}
$$

## 8. Confusion / Questions / 自测问题

1. 为什么一根杆在某一时刻的 state 是一个 function，而不是一个 number？
2. 固定 $t$ 与固定 $x$ 分别得到什么图像？
3. 用一句话区分 $\partial T/\partial x$ 和 $\partial T/\partial t$。
4. 为什么中间点温度低于两个邻居的平均值时会升高？
5. 怎样把 $\frac{T_1+T_3}{2}-T_2$ 改写为 difference of differences？
6. second difference 为什么会在连续极限中变成 second derivative？
7. 若 $T_{xx}<0$，该点温度接下来向哪个方向改变？为什么？
8. 为什么说一个 PDE 像 infinite system of equations？
9. Laplacian 在二维或三维中测量什么？
10. Fourier series 为什么可能适合求解 heat equation？

## 9. Source Anchors / 字幕定位

| Time | Topic |
|---|---|
| 00:04 | From ODE to the heat equation |
| 00:12 | Temperature distribution on an object |
| 01:01 | Local change versus full evolution |
| 01:24 | Diffusion and other applications |
| 01:59 | Fourier-series preview |
| 03:32 | Build the heat equation |
| 03:40 | The function $T(x,t)$ |
| 04:28 | Time axis versus literal animation |
| 04:47 | Finite state versus an evolving function |
| 05:14 | Spatial partial derivative |
| 05:34 | Temporal partial derivative |
| 06:20 | Derivatives as limiting ratios |
| 06:51 | Read the heat equation |
| 07:58 | Discrete or pixelated model |
| 08:18 | A point compared with neighbor average |
| 09:16 | Rearranging into differences |
| 10:11 | Difference of differences |
| 11:03 | Second difference |
| 11:29 | Continuous limit |
| 12:21 | Curvature and sign |
| 12:53 | Second derivative as neighbor comparison |
| 13:18 | PDE versus ODE |
| 14:22 | Infinite system of equations |
| 14:29 | Higher-dimensional objects |
| 14:44 | Laplacian |
| 15:23 | Divergence of gradient |
| 15:43 | Next: solving with Fourier |

## 10. After Watching Summary / 看完压缩版

热传导问题追踪的是整条 temperature distribution $T(x,t)$。因为 function 同时依赖 space 和 time，所以要分别使用 spatial 与 temporal [[Partial Derivatives]]。一维 [[Heat Equation]]

$$
T_t=\alpha T_{xx}
$$

表示某一点温度随时间的变化率，正比于该点温度曲线的空间二阶导数。

这个方程来自简单的局部机制：每个点都趋向其左右邻居的平均温度。离散表达中，这种偏离可改写成 [[Second Difference]]；当点间距趋于零，它变成 $T_{xx}$。因此 peak 处 $T_{xx}<0$，温度下降；valley 处 $T_{xx}>0$，温度上升，整个 profile 被逐渐 smooth out。

ODE 追踪有限个 changing values，PDE 追踪 continuum 中无限多个 values，所以一个 PDE 可视为每个空间点各有一个、彼此局部耦合的 infinite system。推广到多维后，空间二阶导数之和成为 [[Laplacian]]，热方程写作 $T_t=\alpha\nabla^2T$。下一步将用 [[Fourier Series]] 把复杂初始分布拆成容易演化的简单 modes。

## 11. Knowledge Graph Connections / 知识图谱连接

- [[01 - Differential Equations, a Tourist's Guide]]：提供 local law、state 和 ODE/PDE 的第一层区别。
- [[Differential Equations]]：从 derivative relations 理解未知函数的演化。
- [[Partial Derivatives]]：区分 space direction 与 time direction 的变化率。
- [[Heat Equation]]：本集的主方程，把 temporal change 与 spatial curvature 连接起来。
- [[Second Difference]]：从 neighbor averaging 走向 second derivative 的离散桥梁。
- [[Second Derivative]]：既描述 changing slope，也测量局部值相对于邻居平均趋势的偏差。
- [[Concavity]]：决定 heat equation 中 $T_t$ 的符号。
- [[Laplacian]]：把一维 spatial curvature 推广到多维。
- [[Fourier Series]]：下一集用于将复杂 initial condition 分解成简单 heat modes。
- [[Limits]]：让 finite difference 在 step size 趋零时成为 derivative。
- [[10 - Higher Order Derivatives]]：补充 second derivative 与 curvature 的基础直觉。
- [[12 - The Other Way to Visualize Derivatives]]：把 derivative 视为局部 transformation，与 PDE 的局部更新规律呼应。

## 12. Links / 链接

- Previous: [[01 - Differential Equations, a Tourist's Guide]]
- Next conceptual destination: [[Fourier Series]]
- Series home: [[UBC Knowledge Graph#3Blue1Brown - Differential Equations]]
- Concepts: [[Partial Derivatives]] · [[Heat Equation]] · [[Second Difference]] · [[Laplacian]] · [[Fourier Series]]
