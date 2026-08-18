---
title: "AP物理C力学第3次正课 - 牛顿定律摩擦弹簧与系统法"
description: "A connected bilingual learning note about AP物理C力学第3次正课 - 牛顿定律摩擦弹簧与系统法."
publish: true
tags: [open-notes, physics-mechanics]
---
# AP物理C力学第3次正课 - 牛顿定律摩擦弹簧与系统法

## Reading Guide / 阅读说明

上一课从运动学进入受力分析；这节课把 [[Free-Body Diagrams]] 写完整，再用 Newton's laws 建立动力学方程。摩擦、弹簧和连接体不是三套孤立公式，而是同一流程的不同 interaction model。

Connected from:

- [[AP物理C力学第2次正课-抛体相对运动与力的开端]]
- [[AP物理C力学-课程主页]]

> [!summary] 一句话主线
> **Choose the object, draw only the real external forces, and let the vector equation $\sum\vec F=m\vec a$ determine the motion.**
>
> 先选研究对象，再画真实外力，最后让矢量方程决定运动；不要从“看起来会怎么动”倒猜不存在的力。

## 1. Free-Body Diagram as a Model / 受力图不是装饰

标准流程见 [[Free-Body Diagrams]]：

1. isolate one object or a clearly defined system；
2. identify external interactions；
3. draw one arrow for each actual force；
4. label force type and agent；
5. choose convenient axes；
6. resolve vectors only when writing component equations。

关键规范：

- velocity、acceleration 和 motion path 都不是力；
- $mg\sin\theta$ 与 $mg\cos\theta$ 是重力分量，不是额外的力；
- 同方向的力箭头应平行，作用点和方向要可读；
- 普通 FBD 可把物体视作 particle；extended-body diagram 才强调作用点与力矩。

> **A free-body diagram contains forces acting on the chosen body, not forces exerted by it.**

## 2. Newton's Third Law / 牛顿第三定律

若 A 对 B 的力为 $\vec F_{A\to B}$：

$$
\boxed{\vec F_{A\to B}=-\vec F_{B\to A}}
$$

作用力与反作用力：

- same interaction；
- equal magnitude；
- opposite direction；
- act on different objects；
- simultaneously exist。

因此 weight 与 normal force 通常不是第三定律力对：它们都作用在同一个物体上。物体所受重力的 partner 是物体对 Earth 的引力；桌面对物体的支持力的 partner 是物体对桌面的接触力。

## 3. Newton's First Law and Equilibrium / 第一定律与平动平衡

在 [[Inertial Reference Frames]] 中：

$$
\sum\vec F=0
\quad\Longrightarrow\quad
\vec v=\text{constant}
$$

constant velocity vector 包括静止和匀速直线运动，不包括匀速圆周运动，因为圆周运动的速度方向持续改变。

二维平衡必须分别满足：

$$
\sum F_x=0,
\qquad
\sum F_y=0
$$

> **Equilibrium means zero acceleration, not necessarily zero velocity.**

## 4. Kinetic and Static Friction / 动摩擦与静摩擦

### Kinetic friction

接触面已经相对滑动时：

$$
\boxed{f_k=\mu_kN}
$$

在课程理想模型中，$f_k$ 与宏观接触面积无关；方向反对接触面的 relative sliding。

### Static friction

没有相对滑动时，静摩擦会按需要调节：

$$
\boxed{0\le f_s\le \mu_sN}
$$

只有在 impending motion 时：

$$
f_{s,\max}=\mu_sN
$$

> **Static friction is not automatically equal to $\mu_sN$; it matches the required value up to a maximum.**

通常 $\mu_s>\mu_k$，所以外力逐渐增大时，摩擦先随外力增大，达到峰值后进入较低、近似恒定的 kinetic-friction stage。完整判断见 [[Friction]]。

## 5. Hooke's Law / 胡克定律

在弹性限度内，弹簧对所连物体的恢复力为：

$$
\boxed{F_s=-kx}
$$

$x$ 是相对自然长度的 deformation；负号说明弹簧力总指向 equilibrium position。拉伸和压缩都适用。

### Equivalent spring constant

并联弹簧形变量相同、力相加：

$$
\boxed{k_{\text{eq}}=k_1+k_2+\cdots}
$$

串联弹簧受力相同、形变量相加：

$$
\boxed{\frac1{k_{\text{eq}}}=\frac1{k_1}+\frac1{k_2}+\cdots}
$$

串联后更“软”，所以 $k_{\text{eq}}$ 小于任一单独弹簧。见 [[Hooke's Law]]。

## 6. Newton's Second Law / 第二定律是求解核心

质量不变时：

$$
\boxed{\sum\vec F=m\vec a}
$$

分量形式：

$$
\sum F_x=ma_x,
\qquad
\sum F_y=ma_y
$$

稳定做题流程：

1. define the object/system；
2. choose axes and signs；
3. draw FBD；
4. write one equation per independent direction；
5. add geometric or string constraints；
6. solve symbolically before substituting numbers；
7. check sign, unit, and limiting cases。

## 7. Elevator and Apparent Weight / 电梯与视重

scale reading 是 normal force $N$，不是实际重力 $mg$。取 upward positive：

$$
N-mg=ma
\quad\Longrightarrow\quad
N=m(g+a)
$$

- upward acceleration: $N>mg$，overweight；
- downward acceleration: $N<mg$，underweight；
- $a=0$: $N=mg$，包括静止或匀速；
- free fall: $N=0$，apparent weightlessness。

判断视重看 acceleration，不看 velocity direction：向上运动但正在减速时，加速度向下，读数反而小于 $mg$。

## 8. Whole-System Method and Isolation / 整体法与隔离法

对多个连接物体，可先把它们视为一个 [[System Boundary|system]]：内部张力或接触力成对抵消，外力决定整体加速度。

$$
\sum\vec F_{\text{external}}=M\vec a_{\text{CM}}
$$

求出 $a$ 后，再隔离某个物体求 tension、normal 或 contact force。

> **Use the whole system to find shared motion; isolate a part to find an internal force.**

整体法不能让真实差异消失：若绳长约束、滑轮结构或运动方向使各物体加速度关系不同，必须先写 constraint，再决定能否使用同一个 $a$。

## 9. Deep Phrases / 深层表达

- **The net force is a vector sum, not a list of force magnitudes.**
  - 总力是带方向的矢量和，不是把所有力的大小相加。
- **Friction opposes relative slipping or the tendency to slip at the contact.**
  - 摩擦针对接触面的相对滑动，不必反对物体质心的运动。
- **A third-law pair never appears on the same free-body diagram.**
  - 第三定律力对分属两个物体。
- **The spring force is restoring: its direction is opposite the displacement from equilibrium.**
  - 负号描述方向，不表示力的大小为负。

## 10. Error Checklist / 易错清单

- 把 $N$ 默认写成 $mg$；
- 把 $f_s$ 默认写成 $\mu_sN$；
- 把第三定律力对画在同一张 FBD；
- 把 force components 当成新的实际力；
- 用 velocity direction 推断 net force direction；
- 求内部力时只用整体法，忘记重新隔离对象。

## Connected Notes / 连接

- Previous: [[AP物理C力学第2次正课-抛体相对运动与力的开端]]
- Next: [[AP物理C力学第4次正课-连接体阻力与圆周运动入门]]
- Concepts: [[Newton's Laws]] / [[Friction]] / [[Hooke's Law]] / [[System Boundary]] / [[Newton's Second Law]]
