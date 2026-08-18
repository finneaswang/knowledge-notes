---
title: "AP物理C力学第11次正课 - 滚动、天体运动与简谐振动开端"
description: "A connected bilingual learning note about AP物理C力学第11次正课 - 滚动、天体运动与简谐振动开端."
publish: true
tags: [open-notes, physics-mechanics]
---
# AP物理C力学第11次正课 - 滚动、天体运动与简谐振动开端

## Reading Guide / 阅读说明

这节课先把平动与转动绑在同一物体上，完成无滑/有滑滚动；再用 [[Universal Gravitation]]、能量和角动量整理卫星轨道、Kepler's laws 与 escape speed。末段进入最后单元，定义 oscillation、restoring force 和 SHM。

> [!summary] 一句话主线
> **Rolling couples translation to rotation; orbital motion couples gravitation to energy and angular momentum; SHM begins when a restoring force is proportional to displacement.**

## 1. Rolling without Slipping / 无滑滚动约束

纯滚动满足：

$$
\boxed{v_{CM}=R\omega}
$$

$$
\boxed{a_{CM}=R\alpha}
$$

接触点相对地面瞬时速度为零。它是 kinematic constraint，不是额外的 force law。

## 2. Friction in Rolling / 滚动中的摩擦

摩擦方向由接触点的 slipping tendency 决定，不能机械写成“反对质心速度”。斜面上自由纯滚动时，static friction 通常沿斜面向上，提供使物体转起来所需的 torque。

理想水平面上已建立的匀速纯滚动不需要摩擦：$v_{CM}$ 与 $\omega$ 均保持不变，约束自然维持。

> **Static friction may be zero, and when nonzero it need not dissipate mechanical energy.**

## 3. Rolling Dynamics / 滚动动力学

斜面向下取正：

$$
Mg\sin\theta-f=Ma_{CM}
$$

$$
fR=I_{CM}\alpha
$$

配合 $a_{CM}=R\alpha$：

$$
\boxed{a_{CM}=\frac{g\sin\theta}{1+I_{CM}/(MR^2)}}
$$

$I/(MR^2)$ 越大，更多重力势能进入 rotation，质心加速度越小。不同形状从同高滚下，质量与半径常消去，mass distribution 决定先后。

## 4. Rolling Energy / 滚动能量

$$
\boxed{K=\frac12Mv_{CM}^2+\frac12I_{CM}\omega^2}
$$

理想纯滚动的 static friction 接触点无相对位移，因此不产生 thermal-energy loss。下坡可写：

$$
Mgh=\frac12Mv_{CM}^2+\frac12I_{CM}\omega^2
$$

## 5. Rolling with Slipping / 有滑滚动

若 $v_{CM}\ne R\omega$，接触点发生相对滑动，kinetic friction 同时改变 $v_{CM}$ 和 $\omega$，直到满足纯滚动条件。

稳定流程：

1. 由接触点相对运动判断 friction direction；
2. 写 $\sum F=Ma_{CM}$；
3. 写 $\sum\tau=I\alpha$；
4. 用 linear/angular kinematics；
5. 在 transition instant 加入 $v_{CM}=R\omega$。

有滑阶段 $v=R\omega$ 不成立，且 kinetic friction 会增加 thermal energy。

## 6. Circular Orbits / 圆轨道

万有引力提供 centripetal force：

$$
\frac{GMm}{r^2}=\frac{mv^2}{r}
$$

$$
\boxed{v_{orb}=\sqrt{\frac{GM}{r}}}
$$

$$
\boxed{T^2=\frac{4\pi^2}{GM}r^3}
$$

圆轨道中 $K,U,E,L$ 均 constant：

$$
K=\frac{GMm}{2r},
\qquad
U=-\frac{GMm}{r},
\qquad
E=-\frac{GMm}{2r}
$$

## 7. Elliptical Orbits and Kepler's Laws / 椭圆轨道与开普勒定律

central gravitational force 对中心 torque 为零，所以 angular momentum conserved：

$$
L=mrv_t=\text{constant}
$$

近日点 $r$ 小、speed 大；远日点 $r$ 大、speed 小。机械能守恒，但 $K$ 与 $U$ 分别变化。

Kepler's second law（equal areas in equal times）的本质：

$$
\frac{dA}{dt}=\frac{L}{2m}=\text{constant}
$$

Kepler's third law 对椭圆以 semi-major axis $a$ 替代圆轨道半径：

$$
T^2=\frac{4\pi^2}{GM}a^3
$$

## 8. Escape Speed / 逃逸速度

minimum escape condition：物体到无穷远时 speed 恰好降为零，且 $U(\infty)=0$，因此 total mechanical energy 为零。

$$
\frac12mv_{esc}^2-\frac{GMm}{r}=0
$$

$$
\boxed{v_{esc}=\sqrt{\frac{2GM}{r}}=\sqrt2\,v_{orb}}
$$

它与发射物质量无关；$r$ 是距中心距离。escape speed 不是“克服重力后重力消失”，而是初始能量足以让物体不再返回。

## 9. Oscillation and SHM / 振动与简谐运动开端

oscillation 是围绕 equilibrium position 的周期性往复运动。平衡位置满足 net force 为零；restoring force 总指向平衡位置。

SHM 是特殊振动：

$$
\boxed{F_{restoring}=-kx}
$$

$$
a=-\frac{k}{m}x=-\omega^2x
$$

基本量：

- amplitude $A$：离平衡位置的最大距离；
- period $T$：完成一次 cycle 的时间；
- frequency $f=1/T$；
- angular frequency $\omega=2\pi f=2\pi/T$。

这里的 angular frequency 不是刚体绕轴的 angular velocity；符号相同，但物理语境不同。完整解将在下一课继续，见 [[Simple Harmonic Motion]]。

## 10. Deep Phrases / 深层表达

- **Rolling without slipping is a kinematic constraint linking translation and rotation.**
- **The direction of friction is determined by the tendency of the contact point to slip.**
- **Kepler's equal-area law is angular-momentum conservation in geometric form.**
- **Escape speed is the speed that makes the total orbital energy exactly zero.**
- **SHM requires a restoring force proportional and opposite to displacement.**

## 11. Error Checklist / 易错清单

- 所有 rolling 情况都写 $v=R\omega$；
- 看到滚动就必画摩擦力；
- 纯滚动中只算平动动能；
- 把椭圆轨道 speed 当 constant；
- 在 escape-speed 公式中用 altitude 代替 center distance；
- 把 angular frequency 与 angular velocity 当成同一概念。

## Connected Notes / 连接

- Previous: [[AP物理C力学第10次正课-转动能量角动量与守恒]]
- Next: [[AP物理C力学第12次正课-简谐振动弹簧摆与共振]]
- Course home: [[AP物理C力学-课程主页]]
- Concepts: [[Rolling Motion]] / [[Orbital Motion]] / [[Kepler's Laws]] / [[Escape Speed]] / [[Simple Harmonic Motion]] / [[Angular Momentum]]
