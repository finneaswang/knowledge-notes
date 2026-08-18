---
title: "AP物理C力学第9次正课 - 转动运动学、力矩与转动惯量"
description: "A connected bilingual learning note about AP物理C力学第9次正课 - 转动运动学、力矩与转动惯量."
publish: true
tags: [open-notes, physics-mechanics]
---
# AP物理C力学第9次正课 - 转动运动学、力矩与转动惯量

## Reading Guide / 阅读说明

课堂先用“人在无摩擦板上行走”复查同一参考系，再进入 rotation。核心方法是把平动量逐一映射为转动量，而不是另背一套散乱公式。

> [!summary] 一句话主线
> **Rotation mirrors translation: angular position, angular velocity, angular acceleration, torque, and rotational inertia play parallel roles to $x,v,a,F,$ and $m$.**

## 1. Rigid Body and Rotation / 刚体模型

刚体在理想模型中形状和各点间距离不变。translation 中物体上任意连线保持平行；rotation 中物体绕 axis 改变 orientation。

角量依赖 reference line 和转轴：同一物体换 axis，angular description 与 rotational inertia 都可能改变。

## 2. Angular Kinematics / 转动运动学

$$
\Delta\theta=\theta_f-\theta_i,
\qquad
\omega=\frac{d\theta}{dt},
\qquad
\alpha=\frac{d\omega}{dt}
$$

课堂约定 counterclockwise positive、clockwise negative。$\omega$ 与 $\alpha$ 同号时 angular speed 增大，异号时减小；不能只看 $\alpha$ 正负。

$$
\omega=\frac{2\pi}{T}=2\pi f
$$

## 3. Constant Angular Acceleration / 匀角加速度

与匀加速直线运动逐项对应：

$$
\omega_f=\omega_i+\alpha t
$$

$$
\Delta\theta=\omega_it+\frac12\alpha t^2
$$

$$
\omega_f^2=omega_i^2+2\alpha\Delta\theta
$$

$$
\Delta\theta=\frac{\omega_i+\omega_f}{2}t
$$

这些只在 $\alpha$ constant 时成立；一般情形回到 derivative/integral definitions。

## 4. Angular and Linear Quantities / 角量与线量

$$
s=r\theta,
\qquad
v_t=r\omega,
\qquad
a_t=r\alpha,
\qquad
a_r=r\omega^2=\frac{v_t^2}{r}
$$

同一刚体上的各点有相同 $\theta,\omega,\alpha$，但离轴越远，$v_t$ 与 $a_t$ 越大。

## 5. Torque / 力矩

$$
\boxed{\vec\tau=\vec r\times\vec F}
$$

大小：

$$
\tau=rF\sin\phi=F\ell
$$

$\ell$ 是 axis 到 force line of action 的 perpendicular distance。穿过转轴的作用线有 $\ell=0$，故 torque 为零，即使 force 本身不为零。

> **Torque measures the turning effect of a force about a chosen axis.**

## 6. Translational and Rotational Equilibrium / 平动与转动平衡

完整静力平衡必须同时满足：

$$
\sum\vec F=0,
\qquad
\sum\tau=0
$$

前者保证 $\vec a_{CM}=0$，后者保证 $\alpha=0$。合力为零不保证合力矩为零，反之亦然。

选 pivot 的技巧：把未知支点力的作用点选为转轴，使其 moment arm 为零，从 torque equation 中消去，再用 force balance 求剩余分量。

## 7. Rotational Inertia / 转动惯量

转动惯量描述质量相对转轴的分布：

$$
\boxed{I=\sum_i m_ir_i^2}
$$

连续体：

$$
\boxed{I=\int r^2,dm}
$$

它对应平动中的 mass，但不仅取决于总质量，还取决于 axis 与 mass distribution。质量离轴越远，$I$ 越大。

对线密度 $\lambda$：$dm=\lambda,dx$。均匀细杆绕端点：

$$
I=\int_0^Lx^2\frac{M}{L},dx=\frac13ML^2
$$

非均匀分布必须保留 $\lambda(x)$ 在积分内。

## 8. Parallel-Axis Theorem / 平行轴定理

若新轴与过质心轴平行，相距 $d$：

$$
\boxed{I=I_{CM}+Md^2}
$$

对一组平行轴，过质心的轴给出最小 rotational inertia。

## 9. Deep Phrases / 深层表达

- **The same angular velocity does not imply the same tangential speed.**
- **A force can be nonzero yet produce zero torque about a particular axis.**
- **Rotational inertia depends on both mass distribution and axis choice.**
- **Static equilibrium requires both translational and rotational equilibrium.**

## 10. Error Checklist / 易错清单

- degrees 未换 radians 就代入 $s=r\theta$；
- 把 $\alpha>0$ 直接解释为转得更快；
- moment arm 取成到作用点的距离，而非到作用线的垂距；
- 忘记 torque 的正负方向；
- 查表中的 $I$ 与题目 axis 不一致。

## Connected Notes / 连接

- Previous: [[AP物理C力学第8次正课-冲量动量守恒与碰撞]]
- Next: [[AP物理C力学第10次正课-转动能量角动量与守恒]]
- Concepts: [[Rotational Kinematics]] / [[Torque]] / [[Rotational Equilibrium]] / [[Rotational Inertia]] / [[Parallel-Axis Theorem]]
