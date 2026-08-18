---
title: "AP电磁学第5次正课 - 电势差与电场电势关系"
description: "A connected bilingual learning note about AP电磁学第5次正课 - 电势差与电场电势关系."
publish: true
tags: [open-notes, physics-electromagnetism]
---
# AP电磁学第5次正课 - 电势差与电场电势关系

## Reading Guide / 阅读说明

这份 transcript 确认是物理 C 电磁第 5 次正课。它的开头完整回顾了 [[AP电磁学第4次正课-电势能与电势]] 的 electric potential energy 与 [[Electric Potential]]，正文则从 **potential difference / voltage** 开始，并建立 $E$ 与 $V$ 之间最重要的积分和微分关系。

这节课的主线不是再背几个孤立公式，而是把前三层物理量连成一条链：

```text
electric field E
-> force F=qE
-> work by electric force
-> change in potential energy Delta U
-> potential difference Delta V
```

反方向则是：

```text
know E(r)
-> integrate along a path
-> obtain V_B-V_A

know V(x)
-> differentiate
-> obtain E_x
```

> **Electric field tells us how potential changes from one position to the next.**

中文理解：电势 $V$ 描述“每单位电荷在这里拥有多少势能”，电场 $\vec E$ 描述“这个电势在空间中下降得有多快、朝哪个方向下降”。

## 1. What This Lecture Is About / 这节课在讲什么

上一讲从 $U$ 定义了 $V=U/q$。这一讲进一步问：实际电路、粒子运动和空间分布问题通常并不只关心某一点的 $V$，而是关心从 A 到 B 以后，每单位电荷的能量改变了多少。

因此本节引入：

$$
\Delta V_{A\to B}=V_B-V_A
$$

这就是 potential difference，也就是日常所说的 voltage / 电压。

随后老师把这一定义分别放进四类问题：

1. 平行板中的匀强电场；
2. 均匀带电圆环轴线；
3. 点电荷与无限长直线电荷；
4. 均匀带电非导体实心球。

这些模型表面不同，底层动作完全相同：先由对称性或 [[Gauss's Law]] 得到 $E$，再积分得到 $V$；或者直接对标量贡献 $dV$ 叠加。

## 2. Class Flow / 课堂脉络

1. 回顾两点电荷的电势能 $U=kQq/r$。
2. 回顾 $V=U/q$、点电荷电势 $V=kQ/r$，以及 scalar superposition。
3. 定义 potential difference：$\Delta V=V_B-V_A=\Delta U/q$。
4. 用平行板复习 infinite sheet 的高斯定律推导和场的叠加。
5. 从 $W_E=-\Delta U$ 推出匀强电场中的 $\Delta V=-Ed$。
6. 得到“沿电场线方向，电势降低”。
7. 解释 voltage 的能量意义以及 $\Delta U=q\Delta V$。
8. 用带电圆环练习从 $dV=k\,dq/r$ 直接积分。
9. 比较圆环轴线上的 $E$ 与 $V$：$E$ 要分解方向，$V$ 直接标量叠加。
10. 用能量守恒求电荷从圆环轴线上一点释放后的动能。
11. 建立一般式 $V_B-V_A=-\int_A^B\vec E\cdot d\vec l$。
12. 从 Coulomb field 积分重推点电荷电势。
13. 推导 infinite line charge 两个有限半径之间的电势差。
14. 推导 uniform non-conducting solid sphere 的内外电势。
15. 比较球的 $E-r$ 图像与 $V-r$ 图像。
16. 从积分关系转向微分关系 $E_x=-dV/dx$。
17. 用给定 $V(x)$ 的函数做求场强练习。

## 3. Review: From Potential Energy to Potential / 从电势能到电势

### Knowledge Point 1: Electric Potential Removes the Test Charge

**Video:** 00:01:13-00:06:25

两点电荷之间的 electric potential energy 是：

$$
U=\frac{kQq}{r}
$$

其中 $Q$ 是 source charge，$q$ 是放入场中的 test charge。除去 $q$ 后，得到 source charge 在空间中建立的电势：

$$
V=\frac{U}{q}=\frac{kQ}{r}
$$

它与电场定义形成严格对应：

$$
\vec E=\frac{\vec F}{q},\qquad V=\frac{U}{q}
$$

> **Electric field is force per unit charge; electric potential is potential energy per unit charge.**

中文理解：$\vec F$ 与 $U$ 属于“source charge + test charge”组成的系统；$\vec E$ 与 $V$ 则只描述 source charges 建立的背景。

### Knowledge Point 2: Field Quantities and Energy Quantities Have Different Geometry

电场强度是 vector：

$$
\vec E_{\text{net}}=\sum_i\vec E_i
$$

电势是 scalar：

$$
V_{\text{net}}=\sum_i V_i=\sum_i\frac{kQ_i}{r_i}
$$

因此计算 continuous charge distribution 的电势时，不需要把每个 $dV$ 分成 $x$、$y$ 分量。

> **Potential contributions add algebraically, not vectorially.**

正电荷贡献正电势，负电荷贡献负电势；符号来自 source charge 本身，而不是人为指定方向。

## 4. Potential Difference and Voltage / 电势差与电压

### Knowledge Point 3: Potential Difference Is the Change in Energy per Unit Charge

**Video:** 00:06:25-00:09:04

从 A 点移动到 B 点：

$$
\Delta V_{A\to B}=V_B-V_A
$$

由于 $V=U/q$：

$$
\Delta V=\frac{U_B-U_A}{q}=\frac{\Delta U}{q}
$$

> **Potential difference is the change in electric potential energy per unit charge.**

中文理解：它不是“某一点有多少能量”，而是每一库仑电荷从起点到终点时，系统势能改变了多少。

potential difference 的另一个名字是 voltage。单位 volt 满足：

$$
1\ \mathrm{V}=1\ \mathrm{J/C}
$$

例如理想直流电源两端电压为 $220\ \mathrm V$，表示每通过 $1\ \mathrm C$ 的电荷，相关能量转换量的大小为 $220\ \mathrm J$。具体正负仍由移动方向和电荷符号决定。

### Knowledge Point 4: Delta Always Means Final Minus Initial

从 A 到 B：

$$
\Delta V_{A\to B}=V_B-V_A
$$

不要看到“从 A 到 B”就凭语感写成 $V_A-V_B$。同理：

$$
\Delta U=U_B-U_A
$$

课堂里反复强调的动作是：

```text
name the initial point
-> name the final point
-> write final minus initial
-> only then substitute formulas
```

### Knowledge Point 5: Potential Difference Connects Directly to Work

电场力是 conservative force，因此：

$$
W_E=-\Delta U
$$

再用 $\Delta U=q\Delta V$：

$$
W_E=-q\Delta V=q(V_A-V_B)
$$

所以有三种完全等价的表述：

$$
\boxed{\Delta U=q\Delta V}
$$

$$
\boxed{W_E=-\Delta U}
$$

$$
\boxed{W_E=-q\Delta V}
$$

对正电荷，沿电场线运动时电场力做正功，$U$ 降低，$V$ 也降低；对负电荷，$\Delta U=q\Delta V$ 中的 $q<0$ 会把势能变化方向反过来。

> **Electric potential decreases along the electric field, but the potential energy of a negative charge behaves oppositely.**

## 5. Parallel Plates and Uniform Electric Field / 平行板与匀强电场

### Knowledge Point 6: Review the Infinite-Sheet Field Before Using Voltage

**Video:** 00:09:55-00:16:25

单个无限大均匀带电平面，取穿过平面的 pillbox Gaussian surface：

$$
\oint\vec E\cdot d\vec A=2EA=\frac{\sigma A}{\epsilon_0}
$$

所以：

$$
E=\frac{\sigma}{2\epsilon_0}
$$

关键结论是：$E$ 与离平面的距离无关。

两个面电荷密度分别为 $+\sigma$ 与 $-\sigma$ 的平行无限大板叠加后：

- 板外：两个场方向相反，抵消；
- 板间：两个场方向相同，叠加；
- 板间场强：

$$
E=\frac{\sigma}{\epsilon_0}
$$

因此板间是 [[Uniform Electric Field]]。

### Knowledge Point 7: Uniform Field Produces a Linear Potential Drop

**Video:** 00:16:25-00:23:46

在匀强电场中，让正电荷 $q$ 沿电场方向移动距离 $d$。电场力为常量：

$$
F=qE
$$

电场力做功：

$$
W_E=qEd
$$

又因为 $W_E=-q\Delta V$：

$$
qEd=-q\Delta V
$$

约去 $q$：

$$
\boxed{\Delta V=-Ed}
$$

这里的 $d$ 是沿电场方向的位移。更一般地，若位移与电场夹角为 $\theta$：

$$
\Delta V=-Ed\cos\theta
$$

只问大小时：

$$
|\Delta V|=Ed
$$

> **A uniform electric field produces a constant potential gradient and therefore a linear change in potential.**

中文理解：匀强电场每走相同距离，电势就下降相同数值。

### Knowledge Point 8: Electric Field Points Downhill in Potential

正试探电荷的受力方向定义为电场方向。若它顺着电场移动：

1. electric force 做正功；
2. kinetic energy 增加；
3. potential energy 降低；
4. 因为 $q>0$，electric potential 也降低。

所以：

> **Electric field lines point from higher potential to lower potential.**

注意这句话讨论的是 $V$ 的空间变化，与放入的粒子正负无关；只有粒子的 $U=qV$ 会因 $q$ 的正负而改变解释。

### Knowledge Point 9: Field-Line Density and Potential Drop Describe Different Features

电场线的方向表示 $\vec E$ 的方向；疏密用于定性表示 $E$ 的强弱。电势则沿电场线下降。

因此：

- field lines 越密，通常表示单位距离内 potential 下降得越快；
- field lines 平行且等间距，对应 uniform field 与线性 potential；
- 同一条 equipotential 上移动，$\Delta V=0$，电场力净功为零。

本节没有系统展开等势面，但圆环对称点题已经在使用“不同位置可以具有相同电势”这一思想。

## 6. Energy Problems with Voltage / 用电势差处理能量题

### Knowledge Point 10: Use Energy Conservation Before Integrating Force Twice

若只有 electric force 做功：

$$
K_i+U_i=K_f+U_f
$$

用 $U=qV$：

$$
K_i+qV_i=K_f+qV_f
$$

所以：

$$
\Delta K=-q\Delta V
$$

若粒子从静止释放，$K_i=0$：

$$
K_f=q(V_i-V_f)
$$

这比先计算位置变化的力、再对力积分更直接。只要先求出起点与终点的电势，就能得到动能变化。

### Mistake Check: $K+U$ Is Constant, Not Zero

能量守恒写作：

$$
K+U=\text{constant}
$$

或：

$$
\Delta K+\Delta U=0
$$

不能把第一式误写成 $K+U=0$。总机械能可以是正、负或零，守恒只表示它前后相同。

## 7. Potential of a Uniformly Charged Ring / 均匀带电圆环的电势

### Knowledge Point 11: Choose the Charge Density by Geometry

**Video:** 00:25:35-00:48:56

细圆环是一维 charge distribution，因此使用 [[Linear Charge Density]]：

$$
\lambda=\frac{Q}{2\pi R}
$$

圆环上一小段弧长 $ds$ 所带电荷：

$$
dq=\lambda\,ds
$$

看到图形画在平面上，不代表它就是 surface charge distribution。要判断电荷实际占据的是线、面还是体积。

### Knowledge Point 12: Ring Potential Is Easier Than Ring Field

设圆环半径为 $R$，总电荷为 $Q$，观察点在轴线上距圆心 $x$。任意 $dq$ 到观察点的距离相同：

$$
s=\sqrt{x^2+R^2}
$$

微元电势：

$$
dV=\frac{k\,dq}{\sqrt{x^2+R^2}}
$$

积分整个圆环：

$$
V(x)=\int dV
=\frac{k}{\sqrt{x^2+R^2}}\int dq
$$

因为 $\int dq=Q$：

$$
\boxed{V(x)=\frac{kQ}{\sqrt{x^2+R^2}}}
$$

> **For potential, symmetry makes all source elements equal in distance; no vector components need to be resolved.**

比较 [[Charged Ring]] 的轴线电场：

$$
E_x=\frac{kQx}{(x^2+R^2)^{3/2}}
$$

算 $E$ 时必须让横向分量抵消、保留轴向分量；算 $V$ 时每个 $dV$ 直接相加。这就是 scalar method 的优势。

### Knowledge Point 13: Use Limiting Cases to Check the Ring Formula

在圆心 $x=0$：

$$
V(0)=\frac{kQ}{R}
$$

很远处 $|x|\gg R$：

$$
\sqrt{x^2+R^2}\approx |x|
$$

因此：

$$
V(x)\approx\frac{kQ}{|x|}
$$

远处看不清圆环的几何细节，它应当近似为总电荷为 $Q$ 的 point charge。这个 limiting-case check 是判断推导是否合理的重要方法。

### Knowledge Point 14: Equal Potential Does Not Mean Zero Electric Field

圆环轴线上关于圆心对称的 $+x$ 与 $-x$：

$$
V(+x)=V(-x)
$$

所以从 $-x$ 到 $+x$ 的电势差为零：

$$
\Delta V=0
$$

但两点的电场并不为零；它们大小相同、方向相反：

$$
\vec E(-x)=-\vec E(+x)
$$

> **Equal potential at two points does not imply zero electric field at either point.**

电势差只比较两个端点的标量值，电场则描述每一点附近的局部空间变化。

## 8. The Integral Relationship Between E and V / 电场与电势的积分关系

### Knowledge Point 15: Integrating Electric Field Gives Potential Difference

**Video:** 00:56:57-01:05:45

电场力做功：

$$
W_E=\int_A^B\vec F\cdot d\vec l
$$

代入 $\vec F=q\vec E$：

$$
W_E=q\int_A^B\vec E\cdot d\vec l
$$

另一方面：

$$
W_E=-\Delta U=-q\Delta V
$$

约去 $q$：

$$
\boxed{V_B-V_A=-\int_A^B\vec E\cdot d\vec l}
$$

这是一维公式 $\Delta V=-Ed$ 的一般版本。

> **Potential difference is the negative line integral of the electric field.**

负号表示：沿 $\vec E$ 方向积分时，$V_B-V_A<0$。

### Knowledge Point 16: Electrostatic Potential Difference Is Path Independent

静电场由 conservative force 对应而来，因此 $V_B-V_A$ 只由起点和终点决定，与选取的路径无关。

$$
\oint\vec E\cdot d\vec l=0
$$

这也是为什么可以把 $V$ 定义为位置的 scalar function。若沿一条路径从 A 到 B，再沿另一条路径回到 A，静电场一整圈的净功为零。

## 9. Recovering Standard Potentials from E / 从电场重新推出电势

### Knowledge Point 17: Point-Charge Potential Comes from Integrating the Coulomb Field

点电荷 $Q$ 在半径 $r$ 处：

$$
E(r)=\frac{kQ}{r^2}
$$

取 $V(\infty)=0$：

$$
V(r)-V(\infty)=-\int_{\infty}^{r}\frac{kQ}{r'^2}\,dr'
$$

得到：

$$
\boxed{V(r)=\frac{kQ}{r}}
$$

这把上一讲直接使用的公式连接回 [[Coulomb's Law]]：inverse-square field 积分后变成 inverse-distance potential。

### Knowledge Point 18: Infinite Line Charge Cannot Use Infinity as the Zero Reference

**Video:** 01:14:59-01:31:05

由 [[Gauss's Law]]，无限长直线电荷在距离 $r$ 处：

$$
E(r)=\frac{\lambda}{2\pi\epsilon_0r}
$$

从 $r_1$ 到 $r_2$：

$$
V(r_2)-V(r_1)
=-\int_{r_1}^{r_2}\frac{\lambda}{2\pi\epsilon_0r}\,dr
$$

所以：

$$
\boxed{V(r_2)-V(r_1)=
-\frac{\lambda}{2\pi\epsilon_0}\ln\left(\frac{r_2}{r_1}\right)}
$$

也可写成：

$$
V(r_2)-V(r_1)=
\frac{\lambda}{2\pi\epsilon_0}\ln\left(\frac{r_1}{r_2}\right)
$$

为什么不能像点电荷一样直接设 $V(\infty)=0$？因为：

$$
\int\frac{1}{r}\,dr=\ln r
$$

当 $r\to\infty$ 时，$\ln r$ 发散。对于理想无限长电荷，只能选择某个有限参考半径，并讨论两点间的 potential difference。

> **For an infinite line charge, potential differences are finite between finite radii, but the reference at infinity is not available.**

这也说明“无穷远处电势为零”不是宇宙通用定律，而是对局域、有限 charge distribution 常用且方便的 reference choice。

## 10. Potential of a Uniform Non-Conducting Sphere / 均匀非导体球的电势

### Knowledge Point 19: Find the Field Inside and Outside First

**Video:** 01:31:05-01:50:52

对半径 $R$、总电荷 $Q$ 的均匀带电 [[Non-Conducting Sphere]]：

$$
E(r)=
\begin{cases}
\dfrac{kQr}{R^3}, & r<R\\[6pt]
\dfrac{kQ}{r^2}, & r\ge R
\end{cases}
$$

内部结果来自：

$$
Q_{\text{enc}}=Q\frac{r^3}{R^3}
$$

因此内部 $E\propto r$，球心为零，表面最大；外部则像 point charge 一样按 $1/r^2$ 衰减。

### Knowledge Point 20: The Interior Potential Requires a Piecewise Integral

球外 $r\ge R$：

$$
\boxed{V(r)=\frac{kQ}{r}}
$$

球内 $r<R$ 时，从 $r$ 到无穷远必须分两段：

$$
V(r)=-\int_{\infty}^{R}E_{\text{out}}\,dr'
-\int_R^rE_{\text{in}}\,dr'
$$

计算后：

$$
\boxed{V(r)=\frac{kQ}{2R}\left(3-\frac{r^2}{R^2}\right)}
$$

等价形式：

$$
V(r)=\frac{kQ(3R^2-r^2)}{2R^3}
$$

检查两个关键位置：

球面 $r=R$：

$$
V(R)=\frac{kQ}{R}
$$

球心 $r=0$：

$$
V(0)=\frac{3kQ}{2R}
$$

内外公式在表面连续。

### Knowledge Point 21: E Can Rise Then Fall While V Keeps Decreasing

对正的均匀体电荷：

- $E(r)$：球内从 0 线性增大，球外按 $1/r^2$ 减小；
- $V(r)$：从球心向外始终减小；
- 球心虽然 $E=0$，但 $V$ 最大而且不为零。

这不矛盾，因为 $E$ 不是 $V$ 本身，而是 $V$ 的空间变化率：

$$
E_r=-\frac{dV}{dr}
$$

球心处 $E=0$ 只表示 $V-r$ 图像在那里斜率为零，不表示 $V=0$。

> **Zero electric field means zero local slope of potential, not zero potential.**

## 11. The Differential Relationship Between E and V / 电场与电势的微分关系

### Knowledge Point 22: Electric Field Is the Negative Spatial Derivative of Potential

**Video:** 01:51:23-01:59:58

从微小位移形式：

$$
dV=-\vec E\cdot d\vec l
$$

一维情况下：

$$
\boxed{E_x=-\frac{dV}{dx}}
$$

径向问题：

$$
\boxed{E_r=-\frac{dV}{dr}}
$$

更一般的三维形式是：

$$
\vec E=-\nabla V
$$

> **The electric field is the negative gradient of electric potential.**

中文理解：$\vec E$ 指向 $V$ 下降最快的方向，其大小表示单位距离内下降得有多快。

### Knowledge Point 23: Read E Directly from a V-x Graph

若给出 $V-x$ 图像：

$$
E_x=-\text{slope of the }V-x\text{ graph}
$$

所以：

- $V$ 随 $x$ 下降，斜率为负，$E_x>0$；
- $V$ 随 $x$ 上升，斜率为正，$E_x<0$；
- $V$ 为水平线，$E_x=0$；
- 图像越陡，$|E_x|$ 越大。

若给出函数，例如：

$$
V(x)=V_0+10x-4x^2
$$

则：

$$
E_x=-\frac{dV}{dx}=-(10-8x)=-10+8x
$$

题目若问 magnitude，最后再取 $|E_x|$。

单位也能互相验证：

$$
1\ \mathrm{N/C}=1\ \mathrm{V/m}
$$

## 12. E-V Model Comparison / 点电荷基准与课堂四模型总对照

### Model 1: Point Charge

$$
E=\frac{kQ}{r^2},\qquad V=\frac{kQ}{r}
$$

场按 inverse square 衰减，势按 inverse distance 衰减。

### Model 2: Uniformly Charged Ring on Its Axis

$$
E_x=\frac{kQx}{(x^2+R^2)^{3/2}},\qquad
V=\frac{kQ}{\sqrt{x^2+R^2}}
$$

$V$ 是偶函数，$E_x$ 是奇函数，并满足 $E_x=-dV/dx$。

### Model 3: Infinite Line Charge

$$
E=\frac{\lambda}{2\pi\epsilon_0r}
$$

$$
\Delta V=-\frac{\lambda}{2\pi\epsilon_0}\ln\left(\frac{r_2}{r_1}\right)
$$

不能取无穷远为零势参考。

### Model 4: Infinite Sheet and Parallel Plates

单个无限大平面：

$$
E=\frac{\sigma}{2\epsilon_0}
$$

两个异号平行板之间：

$$
E=\frac{\sigma}{\epsilon_0},\qquad \Delta V=-E\Delta x
$$

电势随垂直距离线性变化；与 infinite line charge 类似，理想无限平面也不适合把无穷远直接选作零势参考。

### Model 5: Uniform Non-Conducting Solid Sphere

$$
E(r)=
\begin{cases}
kQr/R^3,&r<R\\
kQ/r^2,&r\ge R
\end{cases}
$$

$$
V(r)=
\begin{cases}
\dfrac{kQ}{2R}\left(3-\dfrac{r^2}{R^2}\right),&r<R\\[6pt]
\dfrac{kQ}{r},&r\ge R
\end{cases}
$$

$E$ 与 $V$ 都在表面连续，但曲线形状不同。

## 13. Deep Phrases / 深句对应表

这一板块不是术语翻译，而是看到一句话时，能立刻对应到背后的物理结构。

| English sentence | 中文对应理解 |
|---|---|
| Potential difference is energy change per unit charge. | 电势差就是每一库仑电荷对应的势能变化。 |
| Voltage is another name for potential difference. | 电压不是另一套物理量，就是两点间的电势差。 |
| Electric field points downhill in electric potential. | 电场方向就是电势下降的方向。 |
| A uniform field creates a linear potential drop. | 匀强电场中，走相同距离就下降相同电势。 |
| The field is the negative spatial derivative of potential. | 电场是电势对位置的负变化率。 |
| Potential difference is the negative line integral of the field. | 沿路径把电场累积起来并加负号，就得到两点电势差。 |
| Equal potential does not imply zero field. | 两点同电势，只说明端点数值相同，不说明局部电场为零。 |
| Zero field means locally constant potential, not zero potential. | 场强为零表示电势图像局部斜率为零，不代表电势值为零。 |
| Potential is easier to integrate because it is a scalar. | 电势积分通常更直接，因为不需要分解矢量分量。 |
| The reference at infinity is a choice, not a universal rule. | 无穷远取零只适用于合适的有限电荷分布，不是任何模型都能用。 |
| The potential of an infinite line is meaningful only relative to a finite reference radius. | 无限长线电荷只能可靠讨论两个有限半径之间的电势差。 |
| The ring looks like a point charge from far away. | 离得足够远时，观察者分辨不出圆环形状，只看到总电荷。 |
| K plus U is constant; it is not necessarily zero. | 动能加势能守恒，但守恒值不必等于零。 |
| A negative charge reverses the potential-energy interpretation, not the direction of the electric field. | 负电荷会反转势能变化逻辑，但不会改变原本电场的方向。 |

## 14. Common Mistakes / 易错点

### Mistake 1: Reversing the endpoints

从 A 到 B 永远先写：

$$
\Delta V=V_B-V_A
$$

### Mistake 2: Writing $\Delta V=Ed$ without considering direction

沿电场方向：

$$
\Delta V=-Ed
$$

只有问 magnitude 时才写 $|\Delta V|=Ed$。

### Mistake 3: Forgetting the charge sign in $\Delta U=q\Delta V$

对电子等负电荷，$q<0$。电势降低时，它的 electric potential energy 反而可能升高。

### Mistake 4: Treating potential as a vector

多个电荷的 $V$ 直接带符号相加，不做分量分解。

### Mistake 5: Treating electric field as a scalar

多个电场必须按方向做 vector superposition。

### Mistake 6: Setting $V(\infty)=0$ for an infinite line charge

$1/r$ 的场积分产生 $\ln r$，在无穷远发散。应选择有限参考点。

### Mistake 7: Concluding $E=0$ because two points have equal potential

等势只说明端点 $\Delta V=0$；路径中仍可能存在非零电场。

### Mistake 8: Concluding $V=0$ because $E=0$

$E=0$ 只意味着 $V$ 的局部空间导数为零。均匀带电球心就是 $E=0$、$V>0$ 的标准例子。

### Mistake 9: Integrating the sphere with one formula across the surface

均匀非导体球内外 $E(r)$ 不同，跨过 $R$ 时必须 piecewise integrate。

### Mistake 10: Writing $K+U=0$

正确的是 $K+U=\text{constant}$，或 $\Delta K+\Delta U=0$。

## 15. Problem-Solving Templates / 题型动作

### A. Find potential difference from a known field

1. 明确 initial point A 与 final point B。
2. 写 $V_B-V_A=-\int_A^B\vec E\cdot d\vec l$。
3. 根据路径写 dot product；一维同向时就是 $-\int E\,dl$。
4. 若 $E$ 分段，分段积分。
5. 用“沿场方向电势下降”检查符号。

### B. Find field from a known potential function

1. 确认变量是 $x$、$r$ 还是多维坐标。
2. 一维使用 $E_x=-dV/dx$。
3. 代入指定位置。
4. 区分 component 与 magnitude。
5. 用单位 V/m 或 N/C 检查。

### C. Find particle speed or kinetic energy from voltage

1. 写 $K_i+qV_i=K_f+qV_f$。
2. 保留 $q$ 的正负。
3. 若从静止释放，令 $K_i=0$。
4. 先求 $K_f=q(V_i-V_f)$，再由 $K_f=mv^2/2$ 求速度。
5. 若得到负的 $K_f$，检查“从静止释放”是否物理可行或方向是否写反。

### D. Find potential from a continuous charge distribution

1. 写 $dV=k\,dq/s$，其中 $s$ 是 source element 到 observation point 的距离。
2. 根据几何写 $dq=\lambda dl$、$\sigma dA$ 或 $\rho d\tau$。
3. 因为 $V$ 是 scalar，不分解方向。
4. 用对称性找出积分中的 constants。
5. 用中心、远场或边界连续性检查结果。

## 16. Confusion / Questions

1. 为什么 voltage 就是 potential difference，而不是某一点的 electric potential？
2. 为什么沿电场线方向 $V$ 一定下降？
3. 为什么负电荷会“逆着电势高低”改变势能？
4. 为什么圆环的 $V$ 积分比 $E$ 积分简单？
5. 为什么圆环轴线上 $+x$ 和 $-x$ 电势相同，但电场方向相反？
6. 为什么 point charge 可以选 $V(\infty)=0$，infinite line charge 却不行？
7. 为什么均匀非导体球的 $E$ 先增后减，而 $V$ 始终下降？
8. 为什么球心 $E=0$ 但 $V$ 最大？
9. $\Delta V=-Ed$ 与 $V_B-V_A=-\int_A^B\vec E\cdot d\vec l$ 如何对应？
10. 给出 $V-x$ 图像时，如何同时判断 $E$ 的方向和大小？

## 17. After-Class Compression / 课后压缩版

只记住十句话：

1. 电势差是 $\Delta V=V_B-V_A=\Delta U/q$，也叫 voltage。
2. $W_E=-\Delta U=-q\Delta V$，所以 $\Delta K=-q\Delta V$。
3. 一般关系是 $V_B-V_A=-\int_A^B\vec E\cdot d\vec l$。
4. 匀强电场沿场方向有 $\Delta V=-Ed$；只问大小时 $|\Delta V|=Ed$。
5. 电场指向电势降低方向。
6. 微分关系是 $E_x=-dV/dx$；$E=0$ 表示 $V$ 的局部斜率为零，不表示 $V=0$。
7. 圆环轴线电势为 $V=kQ/\sqrt{x^2+R^2}$，标量积分无需分解分量。
8. 点电荷 $V=kQ/r$；无限长线电荷只能用有限两点间的 logarithmic potential difference。
9. 均匀非导体球内 $V=\dfrac{kQ}{2R}(3-r^2/R^2)$，外部 $V=kQ/r$。
10. $K+U$ 是 constant，不一定是 0；计算时必须保留 test charge 的正负。

## 18. Video Companion / 搭配视频观看

| 时间 | 观看重点 |
|---|---|
| 00:01:13-00:06:25 | 回顾 $U$、$V$、vector 与 scalar |
| 00:06:25-00:09:04 | potential difference / voltage 定义 |
| 00:09:55-00:16:25 | 平行板与 infinite sheet 的 Gauss 推导 |
| 00:16:25-00:25:35 | $\Delta V=-Ed$、沿场方向电势下降、能量意义 |
| 00:25:35-00:48:56 | 带电圆环的 $E$ 复习与 $V$ 推导 |
| 00:49:30-00:56:57 | 圆环能量题、对称点等电势 |
| 00:56:57-01:05:45 | $\Delta V=-\int\vec E\cdot d\vec l$ 与点电荷电势 |
| 01:14:59-01:31:05 | 无限长直线电荷的 logarithmic potential difference |
| 01:31:05-01:50:52 | 均匀非导体球内外电势与图像 |
| 01:51:23-01:59:58 | $E_x=-dV/dx$ 与函数题 |

## 19. Connections / 知识网络

### Lecture Sequence

- [[AP电磁学第1次正课-电荷库仑定律与电场]]
- [[AP电磁学第2次正课-连续带电体电场与电通量]]
- [[AP电磁学第3次正课-高斯定律与对称带电体]]
- [[AP电磁学第4次正课-电势能与电势]]

### Next Lecture

- [[AP电磁学第6次正课-等势面与静电平衡]] applies $E_x=-dV/dx$ to potential graphs and equipotential surfaces, then develops conductor behavior in electrostatic equilibrium.

### Core Physics

- [[Electric Potential]]
- [[Electric Field]]
- [[Electric Force]]
- [[Uniform Electric Field]]
- [[Gauss's Law]]
- [[Coulomb's Law]]
- [[Charged Ring]]
- [[Non-Conducting Sphere]]

### Charge Distribution and Symmetry

- [[Linear Charge Density]]
- [[Surface Charge Density]]
- [[Volume Charge Density]]
- [[Symmetry]]

### Calculus Bridge

- [[Integrals]]
- [[Derivatives]]
- [[Antiderivative]]
- [[Vectors]]

这节课正好把 calculus 的两种逆向操作放在同一物理对象上：对 $\vec E$ 做 line integral 得到 $\Delta V$；对 $V$ 做 spatial derivative 得到 $\vec E$。这与 [[Fundamental Theorem of Calculus]] 的思想完全一致。
