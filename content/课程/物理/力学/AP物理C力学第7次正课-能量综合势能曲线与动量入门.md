---
title: "AP物理C力学第7次正课 - 能量综合势能曲线与动量入门"
description: "A connected bilingual learning note about AP物理C力学第7次正课 - 能量综合势能曲线与动量入门."
publish: true
tags: [open-notes, physics-mechanics]
---
# AP物理C力学第7次正课 - 能量综合势能曲线与动量入门

## Reading Guide / 阅读说明

这节课不是简单重复公式，而是训练“如何选工具”。先用斜面、摩擦轨道、竖直圆环和势能曲线整合 [[Mechanical Energy Conservation]]；最后打开 Unit 4，把运动状态从 velocity 改写为 [[Linear Momentum]]。

> [!summary] 一句话主线
> **Energy compares states without reconstructing every instant of motion; momentum will do the same for short, intense interactions such as collisions.**

## 1. Choosing the System / 先决定系统

同一过程可有不同记账方式：

- object only：gravity may do external work；
- object + Earth：gravity becomes internal，写 $U_g$；
- object + spring：spring interaction becomes $U_s$；
- object + surface：滑动摩擦产生的 thermal energy 可留在系统内。

只要边界与 transfer term 一致，结果应相同。最常见错误是把 gravity work 与 $\Delta U_g$ 同时计算。

## 2. Ramp Comparison / 不同轨道的末速度

若物体从同一高度静止释放，轨道光滑且落到同一高度：

$$
mgh=\frac12mv_f^2
$$

$$
\boxed{v_f=\sqrt{2gh}}
$$

末速度与路径形状无关，但 travel time 通常与路径有关。energy 给 state-to-state relation，不直接给过程所需时间。

## 3. Friction and Stopping Distance / 摩擦与停车距离

水平面上以 $v_0$ 滑行至停止：

$$
\frac12mv_0^2=\mu_kmgd
$$

$$
\boxed{d=\frac{v_0^2}{2\mu_kg}}
$$

停车距离与初速度平方成正比：速度翻倍，理想模型下停车距离变为四倍。

## 4. Loop-the-Loop / 竖直圆环综合

要不断轨，顶部至少满足：

$$
v_{\text{top}}^2\ge gR
$$

若从高度 $h$ 静止释放、轨道光滑，取圆环底部为势能零点：

$$
mgh=mg(2R)+\frac12mv_{\text{top}}^2
$$

临界状态代入 $v_{\text{top}}^2=gR$：

$$
\boxed{h_{\min}=\frac52R}
$$

这里必须联立两类方程：energy conservation 决定不同高度的 speed，radial Newton's second law 决定是否保持接触。

## 5. Mixed Smooth and Rough Tracks / 光滑与粗糙混合轨道

推荐分段：

1. smooth section：$K+U$ conserved；
2. rough section：加入 $\Delta E_{th}=f_kd$；
3. collision/contact event：检查是否需要 momentum method；
4. 后续 smooth section：重新以事件后的状态作 initial state。

能量法可以跨多个状态，但每一段都要说明 transfer mechanism。

## 6. Reading a Potential-Energy Curve / 读势能曲线

已知 total energy $E$：

$$
v(x)=\sqrt{\frac{2[E-U(x)]}{m}}
$$

$$
F_x(x)=-\frac{dU}{dx}
$$

$$
a_x(x)=-\frac1m\frac{dU}{dx}
$$

读图顺序：

1. 画水平 total-energy line；
2. 找 $U\le E$ 的 allowed regions；
3. $U=E$ 是 turning points；
4. 竖直差 $E-U$ 是 kinetic energy；
5. $U$ 的 slope 决定 force direction；
6. extrema 再判断 equilibrium stability。

## 7. Energy versus Time Graphs / 能量时间图像

- $K(t)=\frac12mv(t)^2$，不是把 velocity graph 直接复制；
- $U_g(t)=mgy(t)$，形状跟随 height；
- smooth conservative motion 中 $K+U$ 为水平线；
- 碰撞、落地或模型切换可能造成机械能图像不连续，但 total energy bookkeeping 仍需闭合；
- 曲率由运动方程决定，不要只连接几个端点画直线。

## 8. Linear Momentum / 线动量

定义：

$$
\boxed{\vec p=m\vec v}
$$

momentum 是 vector，方向与 velocity 相同。单位：

$$
\mathrm{kg\,m/s}=\mathrm{N\,s}
$$

它特别适合 collisions、explosions 和短时强相互作用，因为短时间内内力可能很大，但系统 external impulse 可能很小。

## 9. Newton's Second Law in Momentum Form / 第二定律的更一般形式

$$
\boxed{\sum\vec F_{\text{ext}}=\frac{d\vec p}{dt}}
$$

质量恒定时才化为 $\sum\vec F=m\vec a$。

在 $p$-$t$ graph 上：

- secant slope = average net force；
- tangent slope = instantaneous net force；
- 下一步将由 force-time accumulation 定义 impulse。

> **Momentum is a vector measure of motion whose rate of change equals the net external force.**

## 10. Why Momentum Is the Next Tool / 为什么下一章是动量

能量只含 speed magnitude，不能单独保留方向；动量保留方向。碰撞中：

- momentum conservation 受 external impulse 控制；
- kinetic-energy conservation 只适用于 elastic collision；
- 因此“动量守恒”不等于“动能守恒”。

本课只建立入口；impulse、momentum conservation 与碰撞分类将在后续课程展开。

## 11. Deep Phrases / 深层表达

- **Energy methods connect states; force methods resolve the motion instant by instant.**
- **A turning point has zero kinetic energy, but it need not be an equilibrium point.**
- **The slope of a momentum-time graph is net force.**
- **Momentum remembers direction; kinetic energy does not.**

## 12. Error Checklist / 易错清单

- 只用 energy conservation 求圆环最低释放高度，忘记顶部接触条件；
- 把同高末速度相同误解成到达时间也相同；
- $p$ 当 scalar，只比较大小；
- 看到 collision 就默认 kinetic energy conserved；
- 把 $p$-$t$ 面积当 impulse；impulse 是 $F$-$t$ 面积，$p$-$t$ slope 是 force。

## Connected Notes / 连接

- Previous: [[AP物理C力学第6次正课-功功率势能与机械能守恒]]
- Next: [[AP物理C力学第8次正课-冲量动量守恒与碰撞]]
- Course home: [[AP物理C力学-课程主页]]
- Concepts: [[Mechanical Energy Conservation]] / [[Potential Energy Curves]] / [[Linear Momentum]]
