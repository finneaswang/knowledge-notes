---
title: "AP物理C力学第6次正课 - 功功率势能与机械能守恒"
description: "A connected bilingual learning note about AP物理C力学第6次正课 - 功功率势能与机械能守恒."
publish: true
tags: [open-notes, physics-mechanics]
---
# AP物理C力学第6次正课 - 功功率势能与机械能守恒

## Reading Guide / 阅读说明

动力学从瞬时 force 求 acceleration；能量法把 force 沿一段 displacement 的影响累积起来。整节课的真正中心不是背公式，而是先选 [[System Boundary]]，再判断 energy 是在系统内部转换，还是穿过边界传递。

> [!summary] 一句话主线
> **Work transfers energy across a system boundary, while conservative interactions store recoverable energy as potential energy.**

## 1. Work as Energy Transfer / 功是能量传递

恒力作用下：

$$
\boxed{W=\vec F\cdot\Delta\vec r=F\Delta r\cos\theta}
$$

- $W>0$: force component supports the displacement；
- $W<0$: force component opposes the displacement；
- $W=0$: force is perpendicular to displacement or there is no displacement。

功属于 force-object interaction over a displacement，不是物体“拥有”的状态量。

总功可以逐力相加，也可以由 net force 直接计算：

$$
W_{\text{net}}=\sum_iW_i
$$

## 2. Variable Force / 变力做功

一维：

$$
\boxed{W=\int_{x_i}^{x_f}F_x(x)\,dx}
$$

多维：

$$
W=\int_C\vec F\cdot d\vec r
$$

所以 $F_x$-$x$ graph 下的 signed area 是 work，连接 [[Integrals]] 与 [[Signed Area]]。

弹簧力 $F_s=-kx$ 的功：

$$
\boxed{W_s=-\frac12k(x_f^2-x_i^2)}
$$

## 3. Power / 功率

平均功率：

$$
P_{\text{avg}}=\frac{W}{\Delta t}=\frac{\Delta E}{\Delta t}
$$

瞬时功率：

$$
\boxed{P=\frac{dW}{dt}=\vec F\cdot\vec v}
$$

power 衡量能量传递速度，不是总能量大小。见 [[Power]]。

## 4. Kinetic Energy and the Work-Energy Theorem / 动能与功能定理

$$
K=\frac12mv^2
$$

对单个质点或质量不变物体：

$$
\boxed{W_{\text{net}}=\Delta K}
$$

推导来自：

$$
W_{\text{net}}=\int F_x,dx
=\int ma\,dx
=\int mv\,dv
$$

$$
=\frac12mv_f^2-\frac12mv_i^2
$$

这就是 [[Work-Energy Theorem]]：net work 改变 kinetic energy。

## 5. Conservative Forces and Potential Energy / 保守力与势能

conservative force 的 work：

- path independent；
- closed-loop work is zero；
- 可定义 potential energy。

$$
\boxed{W_{\text{cons}}=-\Delta U}
$$

一维关系：

$$
\boxed{F_x=-\frac{dU}{dx}}
$$

近地面重力势能：

$$
U_g=mgy
$$

零点可任意选，但 $\Delta U$ 的物理预测不变。

## 6. Universal Gravitational Potential Energy / 万有引力势能

把 $U(\infty)=0$：

$$
\boxed{U_g(r)=-\frac{GMm}{r}}
$$

所有有限 $r$ 的两体引力势能都为负，表示要把束缚系统分离到无穷远必须输入能量。

多物体系统应对每一对质量求和：

$$
U_g=-G\sum_{i<j}\frac{m_im_j}{r_{ij}}
$$

每一对只计一次。

## 7. Elastic Potential Energy / 弹性势能

$$
\boxed{U_s=\frac12kx^2}
$$

因此：

$$
\Delta U_s=\frac12k(x_f^2-x_i^2)
$$

不要误写成 $\frac12k(\Delta x)^2$。势能取决于 initial/final deformation 的平方差。

## 8. Mechanical Energy Conservation / 机械能守恒

定义：

$$
E_{\text{mech}}=K+U
$$

若选定系统后，没有未计入的 nonconservative energy transfer 穿过边界，内部相关作用可由 potential energy 表示，则：

$$
\boxed{K_i+U_i=K_f+U_f}
$$

这不是说“任何情况下机械能都守恒”，而是说系统边界与能量项选择完整时，总能量守恒；mechanical energy 可能转为 thermal/internal energy。

滑动摩擦的常见记账：

$$
\Delta E_{\text{th}}=f_kd_{\text{relative}}
$$

于是可写：

$$
K_i+U_i+W_{\text{ext}}
=K_f+U_f+\Delta E_{\text{th}}
$$

具体符号取决于你如何定义 system 与 transfer term，不能同时把同一摩擦效应算两次。

## 9. Potential-Energy Curves / 势能曲线

给定 total energy $E$：

$$
K(x)=E-U(x)\ge0
$$

- allowed region: $U(x)\le E$；
- turning point: $U(x)=E$，瞬时 $v=0$；
- force direction/magnitude: $F_x=-dU/dx$；
- stable equilibrium: local minimum of $U$；
- unstable equilibrium: local maximum of $U$。

注意 turning point 不必是 equilibrium：若 $dU/dx\ne0$，物体会立即反向加速。见 [[Potential Energy Curves]]。

## 10. Energy Bar Charts / 能量条形图

先圈定系统，再列初末状态：

1. choose zero levels；
2. identify $K,U_g,U_s,E_{th}$；
3. mark external transfer；
4. ensure the total bookkeeping balances。

图表不是答案装饰，而是防止漏项和重复记账。

## 11. Deep Phrases / 深层表达

- **Work is the accumulation of the force component along the displacement.**
- **Potential energy belongs to a system of interacting objects, not to one isolated object.**
- **Conservation of energy is universal; conservation of mechanical energy is conditional.**
- **The slope of a potential-energy curve gives the negative force.**

## 12. Error Checklist / 易错清单

- 用 total force magnitude 乘 displacement，忘记 dot product；
- 把 $F$-$t$ graph 面积当 work；
- 把 normal force 一律判定为 zero work；
- 机械能方程中重复加入 friction work 与 thermal energy；
- 势能曲线 turning point 与 equilibrium 混为一谈。

## Connected Notes / 连接

- Previous: [[AP物理C力学第5次正课-圆周运动万有引力与质心]]
- Next: [[AP物理C力学第7次正课-能量综合势能曲线与动量入门]]
- Concepts: [[Work]] / [[Power]] / [[Work-Energy Theorem]] / [[Conservative Forces and Potential Energy]] / [[Mechanical Energy Conservation]] / [[Potential Energy Curves]]
