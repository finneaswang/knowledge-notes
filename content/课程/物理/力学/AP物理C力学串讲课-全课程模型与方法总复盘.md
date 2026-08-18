---
title: "AP物理C力学串讲课 - 全课程模型与方法总复盘"
description: "A connected bilingual learning note about AP物理C力学串讲课 - 全课程模型与方法总复盘."
publish: true
tags: [open-notes, physics-mechanics]
---
# AP物理C力学串讲课 - 全课程模型与方法总复盘

## Reading Guide / 阅读说明

这不是第 15 次知识课，而是 14 次正课后的总复盘。它的价值在于把整门力学压缩成“状态量、相互作用、累积量、守恒量、约束”五种语言，方便以后像查书一样恢复模型选择。

> [!summary] 一句话主线
> **Most mechanics problems become manageable after choosing the system, identifying the interaction and constraint, and selecting the law that connects the given state to the requested state.**

## 1. The Master Workflow / 总流程

1. identify the object or [[System Boundary]]；
2. choose frame, axes, and signs；
3. draw the physical model；
4. identify constraints；
5. choose force, energy, momentum, or angular-momentum language；
6. solve symbolically；
7. verify units, signs, and limits。

## 2. Kinematics: Describe Motion / 运动学

$$
\vec v=\frac{d\vec r}{dt},
\qquad
\vec a=\frac{d\vec v}{dt}
$$

Graph dictionary：

- $x$-$t$ slope $=v$；
- $v$-$t$ slope $=a$；
- $v$-$t$ signed area $=\Delta x$；
- $a$-$t$ signed area $=\Delta v$。

二维运动按分量分析但共享同一个 time；相对运动先写 reference-frame vector equation。

## 3. Dynamics: Explain Motion / 动力学

$$
\sum\vec F=\frac{d\vec p}{dt}=m\vec a
$$

先画 [[Free-Body Diagrams]]，再分量化。整体法消去 internal forces，隔离法求 tension/contact force。摩擦由 relative slipping tendency 决定；圆周运动写 radial net-force equation，不额外创造 centripetal force。

## 4. Energy: Connect States / 能量

$$
W_{net}=\Delta K,
\qquad
W_{cons}=-\Delta U
$$

$$
K_i+U_i+W_{ext}=K_f+U_f+\Delta E_{th}
$$

energy method 适合连接初末状态，不直接给 time。滑动摩擦、碰撞和外界驱动要补 thermal/internal transfer；不要重复计算同一 interaction。

## 5. Momentum: Handle Short Interactions / 动量

$$
\vec J_{ext}=\Delta\vec P
$$

external impulse negligible 时，总动量守恒。碰撞按 component 列式；只有 elastic collision 额外守恒 kinetic energy。质心满足：

$$
\sum\vec F_{ext}=M\vec a_{CM}
$$

## 6. Rotation: Translate the Structure / 转动

| Translation | Rotation |
|---|---|
| $x,v,a$ | $\theta,\omega,\alpha$ |
| $m$ | $I$ |
| $F$ | $\tau$ |
| $p$ | $L$ |
| $F=ma$ | $\tau=I\alpha$ |
| $K=\frac12mv^2$ | $K=\frac12I\omega^2$ |

axis choice 贯穿 torque、$I$ 与 $L$。无滑滚动再加入 $v_{CM}=R\omega$、$a_{CM}=R\alpha$；求时间常需 dynamics，求末速度常可用 energy。

## 7. Gravitation and Orbits / 引力与轨道

$$
F=\frac{GMm}{r^2},
\qquad
U=-\frac{GMm}{r}
$$

圆轨道把 gravity 接到 radial dynamics；椭圆轨道同时使用 mechanical energy 与 angular momentum。escape condition 是 total orbital energy $E=0$。

## 8. Oscillations: Recognize the Equation / 振动

$$
a=-\omega^2x
$$

一旦识别此结构，即可使用 sinusoidal solution、phase、period 和 energy。弹簧、单摆、物理摆和扭摆的差别主要在 effective restoring coefficient 与 inertia。

## 9. Which Tool Should I Choose? / 怎么选工具

- asks for acceleration, force, tension, normal：Newton's laws；
- asks for speed after height/distance, no time：energy；
- collision/explosion/short contact：impulse-momentum；
- rotation about axis：torque/angular momentum；
- period or phase：SHM equation；
- graph parameter from data：linearization and slope。

复杂题通常分阶段，不要求一条定律从头包办：例如 “下落 → 碰撞 → 振动” 分别使用 energy、momentum、SHM energy。

## 10. Universal Checks / 通用检查

- 结果单位；
- vector signs；
- $m\to0$、$r\to\infty$、$\mu\to0$ 等 limit；
- answer 是否依赖本应消去的质量；
- normal/tension/friction 是否满足物理范围；
- graph slope/area 的 units 是否正确；
- conservation condition 是否真的满足。

## 11. Course Exit Map / 结课出口

课堂顺序恢复完整脉络：

```text
kinematics
-> forces and constraints
-> work-energy
-> momentum and collisions
-> rotation and angular momentum
-> gravitation and rolling
-> oscillations
-> experimental and FRQ communication
```

回看课程从 [[AP物理C力学-课程主页]] 进入；遇到具体模型，优先点对应 concept card，再回原课堂寻找推导和语境。

## Connected Notes / 连接

- [[AP物理C力学第14次正课-FRQ综合推导实验与表达策略]]
- [[AP物理C力学-课程主页]]
- [[UBC Knowledge Graph]]
