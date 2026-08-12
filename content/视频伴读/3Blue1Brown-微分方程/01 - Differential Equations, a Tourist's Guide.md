---
title: "3Blue1Brown - Differential Equations 01 - A Tourist's Guide"
description: "A connected bilingual learning note about 3Blue1Brown - Differential Equations 01 - A Tourist's Guide."
publish: true
tags: [open-notes, visual-differential-equations]
---
# 3Blue1Brown - Differential Equations 01 - A Tourist's Guide

## Reading Guide / 阅读说明

这是一个新系列的第一集，不是 *The Essence of Calculus* 的 Chapter 13。它以 [[Derivatives]]、[[Integrals]] 和 [[Higher-Order Derivatives]] 为语言基础，把问题从“怎样计算一个导数”推进到“已知变化规律，怎样理解整个系统”。单独阅读时，这份笔记应当像一本短教材一样重建视频；配合视频时，每个 Knowledge Point 都有时间定位。

Connected from:

- [[05 - What's So Special About Euler's Number e]]
- [[10 - Higher Order Derivatives]]
- [[12 - The Other Way to Visualize Derivatives]]
- [[Newton's Second Law]]
- [[UBC Knowledge Graph]]

## 1. What This Episode Is About / 这一集在讲什么

微分方程最自然的出发点不是“方程里有导数”，而是：现实中，我们经常更容易描述一个量**为什么以及怎样改变**，却很难直接写出它在每个时刻的绝对值。

> Differential equations arise whenever it is easier to describe change than absolute amounts.

例如，Newtonian mechanics 不直接告诉我们物体未来的完整轨迹，而是给出 force；force 决定 acceleration，acceleration 再约束 velocity 与 position 的变化。微分方程的任务，就是从这种 local law of change 恢复或理解 global behavior。

本集用 damped pendulum 串起三条主线：

```text
law of change
-> differential equation
-> state space and vector field
-> qualitative behavior or numerical approximation
```

关键转折是：微分方程往往无法写出漂亮的 analytic solution，但“没有闭式解”不等于“无法理解”。我们仍然可以研究 trajectories、fixed points、stability、phase flow，并用有限小步近似系统演化。

## 2. Link to the Calculus Series / 和微积分系列的连接

在 *The Essence of Calculus* 中，derivative 回答：input 有 tiny nudge 时，output 怎样改变。本系列把这个问题倒过来：

```text
calculus:
function -> derivative

differential equations:
derivative relation + initial conditions -> possible function or system behavior
```

Chapter 10 的 position -> velocity -> acceleration 链条在这里成为模型本身：

$$
y(t)\xrightarrow{d/dt}\dot y(t)\xrightarrow{d/dt}\ddot y(t).
$$

Chapter 12 则提前给出了稳定性的核心直觉：观察 fixed point 附近的小区域会被 flow 收缩还是扩张。本集把一维 iteration 的局部稳定性推广到连续时间的 phase flow。

## 3. Class Flow / 视频脉络

1. 从“描述变化比描述绝对量更容易”引出 [[Differential Equations]]。
2. 区分 ODE 与 PDE，并说明本集聚焦 ODE。
3. 用恒定重力下的竖直运动演示一个可以直接积分的方程。
4. 说明 [[Initial Conditions]] 如何决定积分常数和具体轨迹。
5. 从位置相关的力过渡到“函数的导数由函数自身定义”。
6. 推导真实 pendulum 的非线性、含阻尼方程。
7. 解释为什么 small-angle sine-wave solution 只是 approximation。
8. 面对难以解析求解的方程，转向 state space。
9. 把二阶方程改写成两个一阶方程，并画成 [[Vector Field]]。
10. 用 trajectory、fixed point 与 phase flow 理解系统整体行为。
11. 用爱情模型说明不同现象可以拥有相同的 phase-space structure。
12. 用 [[Euler Method]] 展示 numerical solution 的基本思想。
13. 以 chaos 和 initial-condition sensitivity 收束全片。

## 4. Core Ideas / 核心知识块

### Knowledge Point 1: Differential Equations Describe Laws of Change

**Video:** 00:00:04-00:01:14

微分方程不是先给出函数值，而是约束 unknown function 与其 derivatives 的关系。population、感情、position 等量的当前值可能复杂，但它们增长、衰减或加速的机制往往更容易表达。

> A differential equation specifies how a quantity is allowed to change, rather than listing all of its values directly.

因此，“解微分方程”不是普通代数中的求一个数，而是寻找满足整套连续约束的 function 或 trajectory。

### Knowledge Point 2: ODEs and PDEs Track Different Kinds of State

**Video:** 00:01:15-00:02:13

Ordinary differential equations (ODEs) 通常处理一个 independent variable，最常见的是 time，以及有限多个随时间变化的 quantities。Partial differential equations (PDEs) 处理多个 independent variables，常描述一个 continuum：例如物体每个空间位置的温度，或流体每个位置的 velocity。

```text
ODE: finite collection of values evolving with one input
PDE: field over a continuum, depending on multiple inputs
```

这里的 ordinary 不表示“简单”；它只表示使用 ordinary derivatives，而非 partial derivatives。

### Knowledge Point 3: Constant Acceleration Is a Solvable Differential Equation

**Video:** 00:02:13-00:04:14

近地面忽略其他力时，竖直 acceleration 为常数：

$$
\ddot y=-g.
$$

第一次积分得到 velocity：

$$
\dot y(t)=-gt+v_0.
$$

第二次积分得到 position：

$$
y(t)=-\frac12gt^2+v_0t+y_0.
$$

每积分一次，就出现一个 degree of freedom。$v_0$ 与 $y_0$ 不是随意装饰，而是由 [[Initial Conditions]] 确定。二阶方程通常需要两个独立初始条件，才能从 solution family 中选出一条具体 trajectory。

### Knowledge Point 4: The Unknown Function Can Control Its Own Derivatives

**Video:** 00:04:14-00:05:50

恒定 acceleration 很容易，是因为右侧不依赖 unknown function。真实系统通常形成 feedback：position 决定 force，force 决定 acceleration，acceleration 又改变 velocity 和 position。

> In many differential equations, the derivative or higher derivatives of a function are defined in terms of the function itself.

这像一个 infinite continuous jigsaw puzzle：我们要找每个时刻的无穷多个函数值，同时所有相邻值又必须服从同一个 local change law。

### Knowledge Point 5: The Exact Pendulum Is Nonlinear

**Video:** 00:05:50-00:08:55

设 pendulum length 为 $L$，偏角为 $\theta$，沿圆弧位移为

$$
x=L\theta.
$$

重力沿运动切线方向的分量为 $-g\sin\theta$，所以

$$
\ddot x=-g\sin\theta
$$

以及

$$
\ddot\theta=-\frac gL\sin\theta.
$$

加入与 angular velocity 成正比的 damping：

$$
\boxed{\ddot\theta=-\mu\dot\theta-\frac gL\sin\theta.}
$$

物理 sanity check：$\theta=0$ 时切向 acceleration 为零；$\theta=\pi/2$ 时其 magnitude 等于 $g$；负号始终让重力产生 restoring effect。

### Knowledge Point 6: The Familiar Sine Motion Is a Small-Angle Approximation

**Video:** 00:06:03-00:10:44

高中常见周期

$$
T\approx 2\pi\sqrt{\frac Lg}
$$

依赖 small-angle approximation：

$$
\sin\theta\approx\theta.
$$

无阻尼时，原方程近似变为 linear equation：

$$
\ddot\theta\approx-\frac gL\theta,
$$

其解才是 sine/cosine oscillation。要区分两个角色：exact equation 中是 acceleration 依赖 $\sin\theta$；approximate solution 中则是 $\theta(t)$ 本身随 time 呈 sinusoidal pattern。振幅变大后，$\sin\theta\approx\theta$ 失效，周期变长，曲线也不再是标准 sine wave。

> The sine inside the equation is precisely why a real pendulum is not exactly a sine wave.

### Knowledge Point 7: An Analytic Formula Is Not the Only Form of Understanding

**Video:** 00:09:39-00:11:14

没有 damping 的 nonlinear pendulum 勉强能用复杂的 special functions 表示；加入 damping 后，一般没有熟悉形式的 exact analytic solution。即使给答案重新命名为某个“新函数”，如果它不能帮助 computation 或 understanding，也没有真正解决问题。

因此 differential equations 常采用一条更实际的路线：跳过不可得的 closed form，直接从 equation 本身研究 behavior，并数值计算需要的结果。

> A closed-form solution is one tool for understanding a system, not the definition of understanding it.

### Knowledge Point 8: A State Contains Enough Information to Continue the Motion

**Video:** 00:11:15-00:13:22

只画 $\theta$ against $t$ 会把一条已发生的运动展示出来，却不容易同时比较所有可能的 starting conditions。对 pendulum，任一时刻的完整 state 需要两个数：

$$
\mathbf{s}=\begin{bmatrix}\theta\\\dot\theta\end{bmatrix}.
$$

知道 angle 和 angular velocity 后，方程能给出 acceleration，因此足以继续预测系统。state space 中的一个 point 代表一个完整物理状态，不是 pendulum 在现实空间中的位置。

有 damping 时，trajectory 向 origin 螺旋：每次摆动的最大 displacement 与最大 speed 都变小，最终趋向 $(0,0)$。

### Knowledge Point 9: A Vector Field Encodes the Differential Equation Everywhere

**Video:** 00:13:23-00:15:56

state vector 的 derivative 是

$$
\frac{d}{dt}
\begin{bmatrix}
\theta\\
\dot\theta
\end{bmatrix}
=
\begin{bmatrix}
\dot\theta\\
\ddot\theta
\end{bmatrix}
=
\begin{bmatrix}
\dot\theta\\
-\mu\dot\theta-\frac gL\sin\theta
\end{bmatrix}.
$$

这把一个 second-order equation 改写成两个 first-order equations。对 state space 每一点画出这个 derivative vector，就得到 [[Vector Field]]：箭头告诉我们系统若处于该状态，下一瞬间会朝哪个方向、以多快速度改变。

> A solution trajectory is a path whose velocity always agrees with the vector field beneath it.

注意，phase-space point 的 velocity 不是 pendulum bob 的 physical velocity；它同时编码 $\theta$ 和 $\dot\theta$ 两个 coordinates 的变化率。

### Knowledge Point 10: Phase Space Turns Dynamics into Geometry

**Video:** 00:15:57-00:19:46

改变初始状态，就沿 vector field 得到不同 trajectory。大的初始 angular velocity 可能先让 pendulum 完整旋转数圈，再进入衰减振荡；增大 damping coefficient $\mu$，所有 trajectory 更快向内收缩。

所有 possible states 构成 [[Phase Space]]，所有 trajectories 的集合形成 phase flow。更高维系统遵循同一结构：three-body problem 若直接记录三个物体各自的三维 position 与 momentum，共有 $18$ 个 degrees of freedom，所以对应一个 18-dimensional state space。

我们无法直接看见 18 维，但“一个 state point 沿 vector field 演化”的数学语言不变。维度增加的是坐标数量，不是基本思想。

### Knowledge Point 11: Fixed Points and Stability Describe Whole Families of Initial States

**Video:** 00:19:47-00:20:44

fixed point 是 derivative vector 为零的 state，因此系统若精确位于那里就不会移动。pendulum 向下静止与倒立静止都是 fixed points，但稳定性不同：

- stable/attracting：tiny nudge 后的 trajectory 回到附近；
- unstable/repelling：tiny nudge 后的 trajectory 离开。

研究 stability 时，不只问一条 trajectory 去哪里，而是观察 fixed point 周围一小块 states 在 phase flow 中被收缩还是扩张。这与 [[Fixed-Point Stability]] 的 local contraction/expansion 直觉直接相连。

### Knowledge Point 12: Phase Portraits Reveal Shared Structure Across Different Models

**Video:** 00:20:45-00:22:56

Strogatz 的爱情模型设两人的 feelings 为 $R(t)$ 与 $J(t)$：一个人的感情变化与对方的感情同向，另一个则反向。虽然它与 pendulum 的物理方程不同，其 phase portrait 也可以出现围绕中心的循环；加入类似 damping 的项后，则向内螺旋。

这不是说感情“真的就是钟摆”，而是说明：不同语境中的 equations 可以共享相同 dynamical structure。

> Phase space exposes similarities in behavior that are difficult to see by comparing formulas alone.

所以研究 pendulum 得到的 stability、flow 和 numerical methods 可以迁移到 population、chemistry、ecology 等系统。

### Knowledge Point 13: Euler's Method Simulates the Local Law in Finite Steps

**Video:** 00:22:56-00:25:28

若当前 state 为 $\mathbf{s}_n$，vector field 为 $F(\mathbf{s})$，用小 time step $\Delta t$ 前进：

$$
\boxed{\mathbf{s}_{n+1}=\mathbf{s}_n+\Delta t\,F(\mathbf{s}_n).}
$$

对 pendulum：

$$
\theta_{n+1}=\theta_n+\dot\theta_n\Delta t,
$$

$$
\dot\theta_{n+1}=\dot\theta_n+left(-\mu\dot\theta_n-\frac gL\sin\theta_n\right)\Delta t.
$$

这就是 [[Euler Method]] 的基本思想：在每一步把 derivative 当作短时间内保持不变，用 tangent direction 近似真实 curve。$\Delta t$ 越小通常越准确，但步数更多；视频中 $0.5$ 明显太粗，$0.01$ 更接近真实运动。

### Knowledge Point 14: Solvability and Predictability Are Different Limits

**Video:** 00:25:28-00:27:24

exact solution、numerical computation 与 long-term prediction 是三个不同问题：

1. 方程能否写成 closed form？
2. 给定 initial conditions，能否数值近似 trajectory？
3. 测量存在微小误差时，长期预测是否仍可靠？

chaotic systems 对 initial conditions 高度敏感：起点的极小差异可能发展为完全不同的 trajectories。即使 equation 已知、甚至存在 solution，长期 prediction 仍可能失效。

> A system can be deterministic without being practically predictable far into the future.

这不是模型失败的证据。相反，它说明现实中的复杂性本身可以存在于确定的 mathematical law 之内。

## 5. Deep Phrases / 深句对应表

| English sentence | 中文抓手 |
|---|---|
| Differential equations arise whenever it is easier to describe change than absolute amounts. | 当变化规律比绝对状态更容易描述时，微分方程自然出现。 |
| Solving a differential equation means reconstructing a function from constraints on its rates of change. | 根据变化率约束，恢复整条函数或轨迹。 |
| Initial conditions select one trajectory from a family of possible solutions. | 初始条件从解族中选出唯一的具体演化。 |
| The exact pendulum equation is nonlinear because acceleration depends on $\sin\theta$, not directly on $\theta$. | 非线性来自 $\sin\theta$，小角度时才近似成 $\theta$。 |
| A state is the minimum information needed to continue predicting the system. | state 是继续演化所需的最小完整信息。 |
| A vector field tells every possible state how it is changing at that instant. | 向量场为每一个可能状态指定瞬时变化方向和速度。 |
| Phase space turns the evolution of a system into the geometry of trajectories. | 相空间把系统演化改写成轨迹几何。 |
| Stability asks what happens to nearby states, not only to one perfectly chosen state. | 稳定性研究一簇邻近起点，而非一个精确起点。 |
| Numerical methods trade exact symbolic form for controlled approximation. | 数值法用可控近似换取可计算性。 |
| Deterministic laws do not guarantee useful long-term prediction. | 确定性规律不保证长期可预测。 |

## 6. Common Mistakes / 常见误区

1. **把 differential equation 当作普通代数方程。** Unknown 通常是 function，不是单个 number。
2. **认为 ODE 一定简单、PDE 一定困难。** 名称区分 derivative 类型，不直接衡量难度。
3. **忘记 initial conditions。** $\ddot y=-g$ 决定一个 solution family，不会独自决定一条运动。
4. **把 pendulum 的 $\sin\theta$ 与 sinusoidal solution 混为一谈。** 前者在 equation 的 input 内，后者描述 output 随 time 的形状。
5. **把 small-angle formula 当 exact law。** 大角度时周期更长，motion 不再是标准 sine wave。
6. **把 state space 当 physical space。** phase-space 坐标是 state variables，不一定是现实位置。
7. **把 vector-field 箭头的显示长度当真实 magnitude。** 绘图常缩放箭头以避免遮挡。
8. **认为没有 closed form 就没有 solution。** trajectory 可以存在，也能被定性分析和数值近似。
9. **认为 time step 越小就自动完全正确。** 它通常降低 Euler discretization error，但仍需考虑 method、roundoff 与累计误差。
10. **把 deterministic 等同于 predictable。** chaos 允许确定规律与长期不可预测同时存在。

## 7. Formula Map / 公式地图

### Constant gravity

$$
\ddot y=-g,\qquad \dot y=-gt+v_0,\qquad y=-\frac12gt^2+v_0t+y_0
$$

### Pendulum geometry

$$
x=L\theta,\qquad \ddot x=-g\sin\theta
$$

### Damped nonlinear pendulum

$$
\ddot\theta=-\mu\dot\theta-\frac gL\sin\theta
$$

### Small-angle approximation

$$
\sin\theta\approx\theta,\qquad
\ddot\theta\approx-\frac gL\theta,\qquad
T\approx2\pi\sqrt{\frac Lg}
$$

### First-order state-space system

Let $\omega=\dot\theta$:

$$
\dot\theta=\omega,\qquad
\dot\omega=-\mu\omega-\frac gL\sin\theta.
$$

### Euler step

$$
\mathbf{s}_{n+1}=\mathbf{s}_n+\Delta tF(\mathbf{s}_n)
$$

## 8. Confusion / Questions / 自测问题

1. 为什么“更容易描述变化”会自然导向 differential equation？
2. ODE 与 PDE 的真正区别是什么？
3. 为什么二阶 constant-acceleration equation 需要两个 initial conditions？
4. 从 $x=L\theta$ 怎样推出 $\ddot\theta=-(g/L)\sin\theta$？
5. 为什么 exact pendulum equation 中出现 sine，反而意味着 $\theta(t)$ 通常不是 sine wave？
6. pendulum 的完整 state 为什么需要 $(\theta,\dot\theta)$，只有 $\theta$ 为什么不够？
7. phase-space vector $(\dot\theta,\ddot\theta)$ 的两个 components 各表示什么？
8. 为什么二阶 scalar equation 可以改写成两个一阶 equations？
9. inward spiral 在真实 pendulum motion 中对应什么？
10. stable fixed point 与 unstable fixed point 对 tiny nudge 的反应有何不同？
11. Euler method 的每一步在几何上做了什么近似？
12. 为什么“能求解”“能计算”“能长期预测”必须分开讨论？

## 9. Source Anchors / 字幕定位

| Time | Source idea |
|---|---|
| 00:00:44 | Easier to describe change than absolute amounts |
| 00:01:15 | ODEs versus PDEs |
| 00:02:47 | Constant gravity as a differential equation |
| 00:03:40 | Initial conditions determine integration constants |
| 00:04:56 | Derivatives defined in terms of the function itself |
| 00:05:28 | An infinite continuous jigsaw puzzle |
| 00:06:21 | Small-angle formulas are approximations |
| 00:06:57 | Deriving the pendulum equation |
| 00:08:36 | Adding air resistance |
| 00:09:16 | Why sine in the equation does not mean sine-wave output |
| 00:09:39 | Differential equations are hard to solve |
| 00:10:45 | Build understanding directly from equations |
| 00:11:25 | Visualize all possible states |
| 00:13:23 | Differential equation as a vector field |
| 00:14:56 | Convert one second-order equation to two first-order equations |
| 00:17:09 | Any ODE system can be represented by a vector field |
| 00:18:20 | Phase-space terminology |
| 00:19:47 | Phase flow and stability |
| 00:20:45 | Affection model as a structural analogy |
| 00:22:56 | Numerical computation with finite time steps |
| 00:25:16 | Solving numerically |
| 00:26:01 | Chaos limits prediction |

## 10. After Watching Summary / 看完压缩版

微分方程用 derivatives 描述 unknown quantities 的变化规律。简单情况下，例如 $\ddot y=-g$，可以通过积分与 initial conditions 恢复 exact trajectory；真实系统中，derivatives 往往依赖 state 本身，产生 nonlinear feedback。

pendulum 的核心方程是

$$
\ddot\theta=-\mu\dot\theta-\frac gL\sin\theta.
$$

small-angle approximation 把 $\sin\theta$ 换成 $\theta$，才得到熟悉的 harmonic motion。面对通常难以写出 closed form 的方程，可以把完整 state $(\theta,\dot\theta)$ 放进 phase space，把 equation 画成 vector field。solution 是始终沿 field 流动的 trajectory；所有 trajectories 一起揭示 fixed points、stability 和跨模型的共同结构。

计算上，Euler method 用

$$
\mathbf{s}_{n+1}=\mathbf{s}_n+\Delta tF(\mathbf{s}_n)
$$

反复模拟 local change law。最后要记住：没有 analytic formula 不等于没有理解；有确定方程也不等于能够长期预测。

## 11. Knowledge Graph Connections / 知识图谱连接

- [[Derivatives]]：提供“变化率”的基础语言。
- [[Higher-Order Derivatives]]：position、velocity、acceleration 链条成为二阶动力学方程。
- [[Integrals]]：恒定 acceleration 例子通过反向积分恢复 velocity 与 position。
- [[Differential Equations]]：把 derivative relations 视为对 unknown functions 的约束。
- [[Initial Conditions]]：从 solution family 中选择具体 trajectory。
- [[Vector Field]]：在每个 possible state 上编码 instantaneous change。
- [[Phase Space]]：把系统的所有 possible states 组织成一个空间。
- [[Fixed-Point Stability]]：用附近 flow 的 contraction/expansion 判断吸引或排斥。
- [[Euler Method]]：把连续变化规律离散成有限 time steps。
- [[Newton's Second Law]]：force -> acceleration 是物理微分方程的主要来源。
- [[Acceleration]]：position 的二阶导数，也是 pendulum equation 的动态输出。

## 12. Links / 链接

- Previous conceptual bridge: [[12 - The Other Way to Visualize Derivatives]]
- Next: [[02 - But What Is a Partial Differential Equation]]
- Series home: [[UBC Knowledge Graph#3Blue1Brown - Differential Equations]]
- Concepts: [[Differential Equations]] · [[Initial Conditions]] · [[Phase Space]] · [[Vector Field]] · [[Euler Method]]
