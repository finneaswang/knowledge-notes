---
title: "AP物理C力学第10次正课 - 转动能量、角动量与守恒"
description: "A connected bilingual learning note about AP物理C力学第10次正课 - 转动能量、角动量与守恒."
publish: true
tags: [open-notes, physics-mechanics]
---
# AP物理C力学第10次正课 - 转动能量、角动量与守恒

## Reading Guide / 阅读说明

这节课把上一课的 $I$ 接入完整动力学：$\sum\tau=I\alpha$ 对应 $\sum F=ma$，转动功与动能对应平动功与动能，角冲量改变角动量。后半集中训练“整个系统守恒、局部物体不一定守恒”的转盘模型。

> [!summary] 一句话主线
> **Net torque changes angular momentum; when external torque about the chosen axis is zero, angular momentum is redistributed but conserved.**

## 1. Rotational Newton's Second Law / 转动牛顿第二定律

固定轴且刚体 $I$ 不变时：

$$
\boxed{\sum\tau=I\alpha}
$$

更一般形式：

$$
\boxed{\sum\tau_{ext}=\frac{d\vec L}{dt}}
$$

这与 $\sum\vec F_{ext}=d\vec p/dt$ 平行。每次使用都必须声明 torque about which axis。

## 2. Rotational Work and Energy / 转动功与转动动能

$$
W=\int\tau,d\theta
$$

$$
\boxed{K_{rot}=\frac12I\omega^2}
$$

$$
W_{net}=\Delta K_{rot}
$$

固定 torque 的 instantaneous power：

$$
P=\tau\omega
$$

一个物体同时平动与转动时：

$$
K=\frac12Mv_{CM}^2+\frac12I_{CM}\omega^2
$$

## 3. Angular Momentum / 角动量

刚体绕固定轴：

$$
\boxed{L=I\omega}
$$

质点相对给定点：

$$
\boxed{\vec L=\vec r\times\vec p}
$$

$$
L=rp\sin\phi=p\ell=mv\ell
$$

其中 $\ell$ 是参考点到 momentum line 的垂距。角动量与 torque 一样依赖 reference point/axis。

## 4. Angular Impulse / 角冲量

$$
\boxed{\int_{t_i}^{t_f}\tau_{ext},dt=\Delta L}
$$

在 $\tau$-$t$ graph 中，signed area 是 angular impulse；它改变 angular momentum。与普通 impulse-momentum theorem 完全平行。

## 5. Conservation of Angular Momentum / 角动量守恒

若关于所选轴的 net external torque 为零：

$$
\boxed{L_i=L_f}
$$

对同一转轴：

$$
I_i\omega_i=I_f\omega_f
$$

人收回哑铃、滑冰者收臂时，$I$ 减小而 $\omega$ 增大。angular momentum conserved 不意味着 rotational kinetic energy conserved：人体可通过内部做功改变 $K$。

## 6. Rotational Collision Models / 转动碰撞模型

### Clay lands on a turntable

重力虽是 external force，但若与转轴平行或作用线对轴的 moment arm 为零，则其 external torque about that axis 为零。粘土落上后：

$$
I_d\omega_i=(I_d+mr^2)\omega_f
$$

$I$ 增大，$\omega$ 减小；这是 rotationally inelastic interaction，角动量守恒但动能不守恒。

### Person steps onto a disk

若人切向速度为 $v$：

$$
I_d\omega_i+mvr=(I_d+mr^2)\omega_f
$$

方向相反的初始 angular momenta 必须带符号相减。

### Two disks engage

$$
I_1\omega_{1i}+I_2\omega_{2i}=(I_1+I_2)\omega_f
$$

摩擦是两盘系统的 internal interaction；它使两者达到共同角速度，同时将部分机械能转为内能。

## 7. Whole System versus One Part / 整体与局部

整个 disk-person system 可因 $\tau_{ext}=0$ 而 $L$ conserved；但 disk alone 会受到 person exerted torque，因此 disk 的 angular momentum 可改变。

> **Conservation applies to the chosen system; interaction forces can transfer angular momentum between its parts.**

这与第 8 次课的线动量系统观完全一致。

## 8. Deep Phrases / 深层表达

- **Zero external torque, not zero external force, is the condition for angular-momentum conservation.**
- **Angular momentum is always defined about a point or an axis.**
- **A change in rotational inertia requires a compensating change in angular speed only when angular momentum is conserved.**
- **Angular momentum can be conserved while mechanical energy is transformed.**

## 9. Error Checklist / 易错清单

- 看到 external force 就断言 angular momentum 不守恒，没检查 torque；
- 使用 $L=I\omega$ 时忽略 axis；
- 把系统守恒误套给其中一个物体；
- 对相反旋转方向只加大小；
- 由 $I\omega$ 守恒错误推出 $\frac12I\omega^2$ 也守恒。

## Connected Notes / 连接

- Previous: [[AP物理C力学第9次正课-转动运动学力矩与转动惯量]]
- Next: [[AP物理C力学第11次正课-滚动天体运动与简谐振动开端]]
- Concepts: [[Torque]] / [[Rotational Inertia]] / [[Rotational Energy]] / [[Angular Momentum]] / [[Conservation of Angular Momentum]] / [[System Boundary]]
