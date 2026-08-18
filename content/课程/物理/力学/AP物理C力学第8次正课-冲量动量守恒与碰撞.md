---
title: "AP物理C力学第8次正课 - 冲量、动量守恒与碰撞"
description: "A connected bilingual learning note about AP物理C力学第8次正课 - 冲量、动量守恒与碰撞."
publish: true
tags: [open-notes, physics-mechanics]
---
# AP物理C力学第8次正课 - 冲量、动量守恒与碰撞

## Reading Guide / 阅读说明

上一课用 $\vec p=m\vec v$ 打开 Unit 4；这节课把“力改变动量”沿时间累积成 [[Impulse]]，再从系统外冲量为零推出 [[Conservation of Linear Momentum]]。后半将它用于粘连、爆炸、二维斜碰、质心运动和弹性/非弹性碰撞。

> [!summary] 一句话主线
> **Impulse changes momentum; if the net external impulse on a chosen system is zero, internal interactions can redistribute momentum but cannot change its total.**

## 1. Momentum Change and Average Force / 动量变化与平均力

$$
\Delta\vec p=\vec p_f-\vec p_i=m\vec v_f-m\vec v_i
$$

方向必须先统一。若小球反弹，$\vec v_i$ 与 $\vec v_f$ 异号，因此 $|\Delta p|$ 是两个 speed contribution 的和，而不是差。

$$
\vec F_{\text{avg}}=\frac{\Delta\vec p}{\Delta t}
$$

在 $p$-$t$ graph 中，secant slope 是 average net force，tangent slope 是 instantaneous net force。

## 2. Impulse and the Impulse-Momentum Theorem / 冲量定理

$$
\boxed{\vec J=\int_{t_i}^{t_f}\vec F_{\text{net}},dt=\Delta\vec p}
$$

恒力时 $\vec J=\vec F\Delta t$。在 $F$-$t$ graph 中，signed area 是 impulse；等面积矩形的高度就是 average force。

> **The area under a force-time graph is impulse, and impulse equals the change in momentum.**

同样的 $\Delta p$ 若分摊到更长碰撞时间，average force 更小，这解释了缓冲垫、安全气囊和屈膝落地。

## 3. Variable Mass Warning / 变质量系统

更一般地：

$$
\sum\vec F_{\text{ext}}=\frac{d\vec p}{dt}
=m\frac{d\vec v}{dt}+\vec v\frac{dm}{dt}
$$

不能在 $m$ 变化时无条件写成 $m\vec a$；同时必须明确质量进出系统时速度相对于哪个 frame 定义。

## 4. Conservation of Linear Momentum / 线动量守恒

对指定系统：

$$
\Delta\vec P_{\text{system}}=\vec J_{\text{ext}}
$$

若研究时间内：

$$
\vec J_{\text{ext}}=0
$$

则：

$$
\boxed{\vec P_i=\vec P_f}
$$

真正条件是 external impulse negligible，不是“系统里没有力”。碰撞内力很大，但由第三定律成对交换动量，不改变系统总动量。

## 5. One-Dimensional Models / 一维模型

一般形式：

$$
m_1v_{1i}+m_2v_{2i}=m_1v_{1f}+m_2v_{2f}
$$

完全非弹性、碰后粘在一起：

$$
\boxed{v_f=\frac{m_1v_{1i}+m_2v_{2i}}{m_1+m_2}}
$$

若系统初始静止后分离：

$$
m_1\vec v_{1f}+m_2\vec v_{2f}=0
$$

两者动量等大反向，speed 与质量成反比。

> **Every velocity in one momentum equation must be measured in the same inertial reference frame.**

## 6. Two-Dimensional Collision / 二维斜碰

动量守恒是 vector equation，因此分别列分量：

$$
\sum p_{x,i}=\sum p_{x,f},
\qquad
\sum p_{y,i}=\sum p_{y,f}
$$

若初始 $y$ 方向总动量为零，碰后各物体的 $y$ momentum components 必须互相抵消。不要把二维动量大小直接代入一维标量方程。

## 7. Center-of-Mass Motion / 质心运动

$$
\vec v_{CM}=\frac{\sum m_i\vec v_i}{M}=\frac{\vec P}{M}
$$

$$
\boxed{\sum\vec F_{ext}=M\vec a_{CM}}
$$

若 external force 为零，质心保持匀速，即使系统内部发生投掷、接住、爆炸或碰撞。单个物体的动量可变，系统质心运动不变。

## 8. Elastic and Inelastic Collisions / 弹性与非弹性碰撞

- elastic collision：momentum 与 kinetic energy 都守恒；
- inelastic collision：momentum 守恒，但 kinetic energy 减少并转为内能、声能或形变能；
- perfectly inelastic collision：碰后粘连，在给定初态下 kinetic-energy loss 最大。

一维弹性碰撞还满足：

$$
\boxed{v_{1i}-v_{2i}=v_{2f}-v_{1f}}
$$

即 speed of approach = speed of separation。等质量一维弹性碰撞交换速度。

## 9. Problem-Solving Order / 解题顺序

1. define the system and collision interval；
2. test external impulse；
3. choose axes and one inertial frame；
4. conserve momentum by component；
5. only if elastic, add kinetic-energy conservation；
6. check signs, units, and whether objects stick or separate。

## 10. Deep Phrases / 深层表达

- **Internal forces redistribute momentum; external impulse changes total momentum.**
- **Momentum conservation is a system statement, not an individual-object statement.**
- **Kinetic energy may be transformed even when momentum is conserved.**
- **The center of mass moves as if the system's total mass were concentrated there and acted on by the net external force.**

## 11. Error Checklist / 易错清单

- 反弹时只减 speed magnitudes；
- 把 $F$-$t$ slope 当 impulse；
- 不同 reference frames 的 velocity 混在一个方程；
- 看到碰撞就默认 kinetic energy 守恒；
- 对单个物体宣称 momentum conserved，却忽略另一物体的 impulse。

## Connected Notes / 连接

- Previous: [[AP物理C力学第7次正课-能量综合势能曲线与动量入门]]
- Next: [[AP物理C力学第9次正课-转动运动学力矩与转动惯量]]
- Concepts: [[Linear Momentum]] / [[Impulse]] / [[Conservation of Linear Momentum]] / [[Collisions]] / [[Center of Mass]] / [[System Boundary]]
