---
title: "AP物理C力学第12次正课 - 简谐振动、弹簧、摆与共振"
description: "A connected bilingual learning note about AP物理C力学第12次正课 - 简谐振动、弹簧、摆与共振."
publish: true
tags: [open-notes, physics-mechanics]
---
# AP物理C力学第12次正课 - 简谐振动、弹簧、摆与共振

## Reading Guide / 阅读说明

上一课只定义了 SHM 的入口；本课完成最后一个知识单元。课堂从弹簧振子的微分方程、图像与能量出发，再迁移到竖直弹簧、单摆、物理摆、扭摆和 forced oscillation。

> [!summary] 一句话主线
> **SHM is recognized by $a=-\omega^2x$; once that structure is found, its motion, period, phase, and energy all follow from the same sinusoidal model.**

## 1. The Defining Structure / 判定 SHM 的核心

简谐运动不是“任何来回运动”，而必须满足：

$$
F_{restoring}=-kx
$$

或更一般地：

$$
\boxed{a=-\omega^2x}
$$

负号表示 acceleration 始终指向 equilibrium position；系数必须为正的常数。若 $a=-9x$，则 $\omega=3$，进而 $T=2\pi/3$。

## 2. One Complete Cycle / 一个周期内的状态变化

从 $x=+A$ 静止释放：

| Position | Velocity | Acceleration / restoring force |
|---|---|---|
| $+A$ | $0$ | negative maximum |
| $0$ | negative maximum | $0$ |
| $-A$ | $0$ | positive maximum |
| $0$ | positive maximum | $0$ |

端点是 turning points：speed 为零、$|a|$ 最大。平衡点处 $a=0$，但 speed 最大；“合力为零”不代表物体停下。

## 3. Differential Equation and Phase / 微分方程与相位

弹簧振子满足：

$$
m\frac{d^2x}{dt^2}=-kx
$$

$$
\frac{d^2x}{dt^2}+\frac{k}{m}x=0
$$

通用解写成：

$$
\boxed{x(t)=A\cos(\omega t+\phi)}
$$

$$
v(t)=-A\omega\sin(\omega t+\phi)
$$

$$
a(t)=-A\omega^2\cos(\omega t+\phi)=-\omega^2x(t)
$$

$\phi$ 由 initial position 与 initial velocity 决定。sine 或 cosine 都能描述同一类运动，关键是满足初始条件。

## 4. Reading SHM Graphs / 读简谐图像

- $v$ 是 $x$ 的 derivative，相差四分之一周期；
- $a=-\omega^2x$，与 $x$ 完全反相；
- graph amplitude 分别是 $A,A\omega,A\omega^2$；
- 从 graph 读 $T$，再用 $\omega=2\pi/T$；
- 正负号表示 direction，不表示 speed 大小。

详见 [[Oscillation Graphs]]。

## 5. Mass-Spring System / 弹簧振子

$$
\boxed{\omega=\sqrt{\frac{k}{m}}}
$$

$$
\boxed{T=2\pi\sqrt{\frac{m}{k}}}
$$

period 与 amplitude 无关，只由 $m,k$ 决定；这是 ideal SHM 的结论。

机械能：

$$
E=\frac12mv^2+\frac12kx^2=\frac12kA^2
$$

$$
v(x)=\pm\omega\sqrt{A^2-x^2}
$$

振幅翻倍时 total energy 变为四倍，不是十倍。

## 6. Horizontal versus Vertical Spring / 水平与竖直弹簧

竖直弹簧的 static equilibrium extension：

$$
k\Delta l_0=mg
$$

若把位移 $x$ 从新的 equilibrium position 测量，重力常量项与静态伸长抵消，运动仍满足：

$$
m\ddot x=-kx
$$

因此周期仍为 $2\pi\sqrt{m/k}$。注意 spring force 最大处与 restoring net force 最大处在竖直系统中不一定是同一点。

## 7. Collision-to-Oscillation Model / 碰撞后进入振动

子弹嵌入木块再压缩弹簧，需要分阶段：

1. short collision：用 [[Conservation of Linear Momentum]] 求共同速度；
2. post-collision oscillation：用 [[Mechanical Energy Conservation]] 把共同 kinetic energy 转为 spring potential energy；
3. 用总质量决定新的 period。

碰撞阶段 kinetic energy 不守恒，不能把子弹初动能直接等同于最大弹性势能。

## 8. Simple Pendulum / 单摆

小角近似 $\sin\theta\approx\theta$ 下：

$$
\tau=-mgL\sin\theta\approx-mgL\theta
$$

$$
I\ddot\theta=-mgL\theta,
\qquad I=mL^2
$$

$$
\boxed{T=2\pi\sqrt{\frac{L}{g}}}
$$

period 与 bob mass 无关；只有 small-angle regime 才近似 SHM。最低点 tangential restoring force 为零，但 radial net force 不为零，因为需要 centripetal acceleration。

## 9. Physical and Torsional Pendulums / 物理摆与扭摆

刚体质心到 pivot 距离为 $d$：

$$
\boxed{T=2\pi\sqrt{\frac{I_{pivot}}{Mgd}}}
$$

题目若给 $I_{CM}$，先用 [[Parallel-Axis Theorem]] 求 $I_{pivot}$。

扭摆满足 rotational Hooke's law：

$$
\tau=-\kappa\theta
$$

$$
\boxed{T=2\pi\sqrt{\frac{I}{\kappa}}}
$$

它是 $F=-kx$、$m$ 对应到 $\tau=-\kappa\theta$、$I$ 的转动版本。见 [[Pendulums]]。

## 10. Forced Oscillation and Resonance / 受迫振动与共振

外界周期驱动力提供 driving frequency。稳态响应跟随 driving frequency；当其接近 natural frequency 时，amplitude 达到峰值，这叫 [[Resonance]]。

> **Resonance occurs when the driving frequency approaches the natural frequency, producing a large steady-state amplitude.**

共振时变大的是 amplitude，不是 period 达到最大。现实系统中 damping 限制峰值并拓宽 resonance curve。

## 11. Deep Phrases / 深层表达

- **Equilibrium is where the restoring force vanishes, not where the oscillator necessarily stops.**
- **Phase tells us where in the cycle the oscillator is at $t=0$.**
- **Gravity shifts a vertical spring's equilibrium position but does not change its ideal period.**
- **The small-angle approximation turns pendulum motion into SHM.**

## 12. Error Checklist / 易错清单

- 把所有 periodic motion 都称为 SHM；
- 平衡点写成 $v=0$；
- 忘记 phase constant；
- amplitude 翻倍时能量倍数算错；
- 单摆最低点写 net force 为零；
- physical pendulum 直接代入 $I_{CM}$；
- 把共振解释成 period 最大。

## Connected Notes / 连接

- Previous: [[AP物理C力学第11次正课-滚动天体运动与简谐振动开端]]
- Next: [[AP物理C力学第13次正课-FRQ实验线性化与作图规范]]
- Concepts: [[Simple Harmonic Motion]] / [[Oscillation Graphs]] / [[Pendulums]] / [[Resonance]]
