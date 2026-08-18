---
title: "AP物理C力学第4次正课 - 连接体阻力与圆周运动入门"
description: "A connected bilingual learning note about AP物理C力学第4次正课 - 连接体阻力与圆周运动入门."
publish: true
tags: [open-notes, physics-mechanics]
---
# AP物理C力学第4次正课 - 连接体阻力与圆周运动入门

## Reading Guide / 阅读说明

这节课继续“死磕” [[Newton's Second Law]]。前半把系统法用于绳、滑轮和斜面；中段把速度相关阻力写成 differential equation；末段把直线动力学迁移到圆周运动。

> [!summary] 一句话主线
> **The model changes, but the method does not: define the system, write the force law, impose the constraint, and solve for the motion.**

## 1. System versus Constituent Parts / 整体与组成部分

[[System Boundary]] 决定哪些力算 internal、哪些力算 external。对整体求共同运动，对局部求内力。

理想连接模型通常包含：

- massless string: 同一段绳的 tension 相同；
- inextensible string: 绳长约束给出 acceleration relation；
- massless, frictionless pulley: 只改变绳方向，不改变同一根理想绳的 tension。

这些是模型假设，不是所有现实绳轮系统的事实。

## 2. Connected-Body Workflow / 连接体流程

1. 给每个物体选与运动匹配的正方向；
2. 分别画 FBD；
3. 写每个物体的 $\sum F=ma$；
4. 写 string-length constraint；
5. 需要时先对整个系统消去 internal tensions；
6. 再隔离单体求 tension。

简单 Atwood machine（$m_2>m_1$）中：

$$
m_2g-T=m_2a,
\qquad
T-m_1g=m_1a
$$

相加得：

$$
\boxed{a=\frac{(m_2-m_1)g}{m_1+m_2}}
$$

## 3. Inclined Planes / 斜面

沿斜面与垂直斜面选轴：

$$
mg_{\parallel}=mg\sin\theta,
\qquad
mg_{\perp}=mg\cos\theta
$$

若垂直斜面无加速度，$N=mg\cos\theta$。摩擦方向必须由 relative sliding/tendency 判断：

- 物体向下滑，摩擦沿斜面向上；
- 物体被推上斜面，摩擦仍沿斜面向下。

因此同一斜面上“上行减速”和“下行加速”的 acceleration magnitude 通常不同。

## 4. Speed-Dependent Resistance / 速度相关阻力

流体阻力方向与相对流体速度相反。常用理想模型：

$$
\vec F_r=-b\vec v
$$

或高速情形近似：

$$
\vec F_r=-c|\vec v|\vec v
$$

负号表达 direction。选 downward positive，线性阻力下落满足：

$$
m\frac{dv}{dt}=mg-bv
$$

这是 [[Differential Equations]]：force depends on the unknown velocity itself。

## 5. Terminal Velocity / 终端速度

当阻力增至与重力平衡：

$$
\frac{dv}{dt}=0
$$

线性模型：

$$
\boxed{v_t=\frac{mg}{b}}
$$

若从静止释放：

$$
\boxed{v(t)=v_t\left(1-e^{-bt/m}\right)}
$$

$$
a(t)=g e^{-bt/m}
$$

速度从 0 渐近 $v_t$，加速度从 $g$ 渐近 0。平方阻力模型则给出：

$$
v_t=\sqrt{\frac{mg}{c}}
$$

> **Terminal velocity means zero acceleration, not zero velocity.**

见 [[Resistive Force and Terminal Velocity]] 与 [[Exponential Functions]]。

## 6. Angular Language / 圆周运动的角量

弧度定义：

$$
\theta=\frac{s}{r}
$$

角速度与线速度：

$$
\omega=\frac{d\theta}{dt},
\qquad
\boxed{v=r\omega}
$$

匀速圆周运动中：

$$
\omega=\frac{2\pi}{T}=2\pi f
$$

## 7. Centripetal Acceleration / 向心加速度

即使 speed 恒定，velocity direction 改变，所以仍有 acceleration：

$$
\boxed{a_r=\frac{v^2}{r}=\omega^2r}
$$

方向永远指向圆心。径向动力学写成：

$$
\boxed{\sum F_r=m\frac{v^2}{r}}
$$

> **Centripetal force is not an additional force; it is the name for the net radial force supplied by real interactions.**

因此 FBD 中只画 tension、friction、normal、gravity 等真实力，再把它们的径向分量相加。详见 [[Circular Motion]]。

## 8. Deep Phrases / 深层表达

- **A constraint links motions that would otherwise require separate equations.**
  - 绳长约束不是力，而是连接各物体运动的几何关系。
- **Terminal speed is a dynamic equilibrium between driving and resistive forces.**
  - 物体仍在运动，只是合力和加速度归零。
- **Uniform circular motion has constant speed but changing velocity.**
  - velocity 是矢量，方向变化就意味着加速度。

## 9. Error Checklist / 易错清单

- 默认所有 pulley 两侧 tension 都相等，却没有检查是否为同一根理想绳；
- 在斜面 FBD 上把 $mg\sin\theta$ 与完整 $mg$ 同时画出；
- 把 terminal velocity 解释成最终停止；
- 在 FBD 中额外画一根“centripetal force”；
- 把 $v^2/r$ 当作只适用于 constant speed；它是瞬时 radial acceleration 分量。

## Connected Notes / 连接

- Previous: [[AP物理C力学第3次正课-牛顿定律摩擦弹簧与系统法]]
- Next: [[AP物理C力学第5次正课-圆周运动万有引力与质心]]
- Concepts: [[System Boundary]] / [[Resistive Force and Terminal Velocity]] / [[Circular Motion]]
