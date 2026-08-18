---
title: "AP物理C力学Orientation - 课程结构与学习地图"
description: "A connected bilingual learning note about AP物理C力学Orientation - 课程结构与学习地图."
publish: true
tags: [open-notes, physics-mechanics]
---
# AP物理C力学Orientation - 课程结构与学习地图

## Reading Guide / 阅读说明

这份 Orientation 只保留能帮助理解整门力学的内容。报名、群聊、宣传和当年的分数讨论没有进入知识笔记；考试形式只作为 2025 课程背景，不当作当前政策更新。

Connected from:

- [[AP物理C力学-课程主页]]
- [[UBC Knowledge Graph]]

> [!summary] 一句话主线
> **Mechanics first describes motion, then explains its cause, and finally reorganizes the same laws through energy, momentum, rotation, and oscillation.**
>
> 力学先描述“物体怎样动”，再解释“为什么这样动”，之后用能量、动量、转动和振动把同一套规律重新组织。

## 1. The Course Is Calculus-Based / 这是微积分力学

AP Physics C 与代数型物理的关键区别，不只是公式更多，而是把变化过程写成 derivative、integral 和 differential equation。

```text
position x(t)
-> derivative
velocity v(t)
-> derivative
acceleration a(t)
-> Newton's second law
force model
```

反过来：

```text
force -> acceleration -> integrate with initial conditions -> velocity -> position
```

Core sentence:

> **Calculus is not an extra chapter of mechanics; it is the language used to connect physical quantities.**

中文理解：微积分不是力学学完后再附加的一章，而是位置、速度、加速度、力、功和动量之间的连接语言。见 [[AP物理C力学预备课-微积分工具]]。

## 2. Seven-Unit Map / 七单元地图

### Unit 1: Kinematics / 运动学

只回答“怎样运动”：position、displacement、velocity、acceleration、motion graphs、one- and two-dimensional motion。

入口：[[AP物理C力学第1次正课-位移速度加速度与运动图像]]。

### Unit 2: Force and Translational Dynamics / 力与平动动力学

从描述进入因果：画 [[Free-Body Diagrams]]，求 net force，再由 [[Newton's Second Law]] 得到 acceleration。

### Unit 3: Work, Energy, and Power / 功、能与功率

把沿路径发生的力学过程压缩成能量转移。它通常比逐时刻追踪 acceleration 更适合比较初末状态。

### Unit 4: Linear Momentum / 线动量

研究 interaction 和 collision。系统所受 external impulse 决定 momentum change；合适条件下使用 conservation of momentum。

### Units 5-6: Rotation / 转动

把平动结构迁移到角运动：

| Translational idea | Rotational analogue |
|---|---|
| position $x$ | angular position $\theta$ |
| velocity $v$ | angular velocity $\omega$ |
| acceleration $a$ | angular acceleration $\alpha$ |
| force $F$ | torque $\tau$ |
| mass $m$ | rotational inertia $I$ |
| momentum $p$ | angular momentum $L$ |

### Unit 7: Oscillations / 振动

研究 restoring influence 如何让系统围绕 equilibrium 往复运动，并连接 energy、period 与 differential equations。

## 3. The Real Logic / 真正的脉络

课程单元不是七个互不相干的盒子：

1. [[Kinematics Graphs]] 给出 motion evidence。
2. [[Free-Body Diagrams]] 把 interaction 翻译成 vectors。
3. [[Newton's Second Law]] 把 vectors 翻译成 acceleration。
4. derivative / integral 在 $x,v,a$ 之间来回转换。
5. energy 和 momentum 提供不必逐时刻追踪运动的整体视角。
6. rotation 把前面的平动思想扩展到刚体。

## 4. Durable Study Rules / 值得保留的学习规则

### Rule 1: Learn the model, not only the formula

> **An equation is useful only after its assumptions are identified.**

例如 constant-acceleration equations 只能用于 acceleration 恒定的区间；projectile formulas 默认忽略空气阻力且 $g$ 恒定。

### Rule 2: Translate among words, diagrams, graphs, and equations

同一物理关系可能以四种形式出现：

```text
verbal description <-> diagram <-> graph <-> equation
```

真正掌握意味着可以在四种表示之间转换，而不是只会代数代入。

### Rule 3: Show the physics in free response

作答时应明确：

- coordinate direction / 正方向；
- system or object being analyzed；
- governing principle；
- substitution with units；
- graph slope or area 的物理意义。

### Rule 4: Output reveals gaps

只看懂不等于能独立使用。做题、口头复述推导和解释错误选项，才能暴露 sign、direction、assumption 与 graph interpretation 的漏洞。

## 5. Deep Phrases / 深句对应表

| English sentence | 中文抓手 |
|---|---|
| Kinematics describes motion without explaining its cause. | 运动学只描述，不解释原因。 |
| Dynamics connects interactions to changes in motion. | 动力学研究相互作用怎样改变运动。 |
| A physical model is defined by both its equations and its assumptions. | 模型不仅是公式，还包括适用条件。 |
| Calculus connects local rates with accumulated change. | 导数读局部变化率，积分读累积变化。 |
| A complete solution communicates direction, units, and reasoning. | 完整答案要有方向、单位和依据。 |

## 6. Next / 下一步

- 数学工具：[[AP物理C力学预备课-微积分工具]]
- 正式起点：[[AP物理C力学第1次正课-位移速度加速度与运动图像]]
