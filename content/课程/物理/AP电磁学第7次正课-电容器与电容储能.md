---
title: "AP电磁学第7次正课 - 电容器与电容储能"
description: "A connected bilingual learning note about AP电磁学第7次正课 - 电容器与电容储能."
publish: true
tags: [open-notes, physics-course]
---
# AP电磁学第7次正课 - 电容器与电容储能

## Reading Guide / 阅读说明

本笔记对应 the course transcript，是物理 C 电磁学第 7 次正课。开头约 16 分钟先抽查并收束 [[AP电磁学第6次正课-等势面与静电平衡]] 的六条 conductor 性质，随后进入 [[Capacitors]]。

这节课不是只多背一个公式，而是把前面三条主线合在一起：

~~~text
Gauss's law gives E
-> potential difference comes from integrating E
-> capacitance compares stored charge with voltage
-> capacitor geometry determines C
-> separated charge stores electric potential energy
~~~

全课最重要的判断不是“现在该套哪个能量公式”，而是先问：

> **Is the capacitor still connected to a battery, or is it isolated?**

- still connected：battery 固定 potential difference，$\Delta V$ constant；
- isolated after charging：电荷没有路径离开，$Q$ constant。

这个判断决定了几何变化后 $C,Q,\Delta V,E,U$ 如何一起变化。

## 1. What This Lecture Is About / 这节课在讲什么

本节建立 capacitor 的完整第一轮框架：

- capacitor 为什么既是 storing charge，也是 storing energy；
- capacitance 的定义式 $C=Q/|\Delta V|$；
- 为什么定义式不等于决定式；
- 如何由 [[Gauss's Law]]、[[Electric Potential]] 推出平行板电容；
- 两个充电后相连的电容器如何重新分配电荷；
- 球形与同轴圆柱形电容器为什么把 field 约束在两层 conductor 之间；
- 如何从 $E(r)$ 积分得到 $\Delta V$，再得到 $C$；
- capacitor energy 的三个等价公式；
- battery-connected 与 isolated capacitor 的变化规律和能量来源。

## 2. Class Flow / 课堂脉络

1. 复习 conductor 内 $E=0$ 的感应抵消机制。
2. 由 Gauss's law 说明 excess charge 位于 conductor surface。
3. 由 $E=-dV/dx$ 说明 conductor 是 equipotential body。
4. 复习 conductor surface 外场垂直表面，且 $E_\perp=\sigma/\epsilon_0$。
5. 回顾 sharp point 上 charge density 与 field 较大。
6. 定义 capacitor：分离等量异号电荷的两导体系统。
7. 说明 charging 储存 electric potential energy，discharging 释放能量。
8. 定义 capacitance：$C=Q/|\Delta V|$。
9. 区分 definition equation 与 geometry/material relation。
10. 推导 parallel-plate capacitor 的 $E,\Delta V,C$。
11. 用 $C=\epsilon_0A/d$、$Q=C\Delta V$、$E=\Delta V/d$ 做基础计算。
12. 分析充电后的两个电容器相连：共同电压加总电荷守恒。
13. 用 spherical Gaussian surface 求球形电容器分段电场。
14. 用 cylindrical Gaussian surface 求同轴电容器分段电场。
15. 说明两种封闭几何为何使外部 field 为零。
16. 推出 capacitor energy：$U=\frac12Q\Delta V$。
17. 分析 battery connected 时 $\Delta V$ constant。
18. 分析 disconnected capacitor 时 $Q$ constant。
19. 用外力做功或电场力做功解释能量增减。
20. 对球形、同轴电容器的 $E(r)$ 积分，求 $\Delta V$ 与 $C$。

## 3. Conductor Review That Feeds the Capacitor Model / 电容器之前的导体复盘

### Knowledge Point 1: Electrostatic Equilibrium Is a Self-Canceling State

**Transcript:** 00:00:47-00:07:40

把 conductor 放入 external electric field 后，自由电荷会移动并形成 induced field。只要 net field 仍不为零，电荷就继续移动；静电平衡时：

$$
\vec E_{\text{external}}+\vec E_{\text{induced}}=0
$$

所以 conducting material 内：

$$
\boxed{\vec E=0}
$$

> **Free charges redistribute until the induced field cancels the applied field inside the conductor.**

由 [[Gauss's Law]]，在 conductor material 内任取 Gaussian surface：

$$
\oint \vec E\cdot d\vec A=0
\quad\Rightarrow\quad
Q_{\text{enc}}=0
$$

因此 excess charge 不留在 bulk，而位于 surface。

### Knowledge Point 2: Zero Internal Field Makes the Conductor Equipotential

由：

$$
\vec E=-\nabla V
$$

若 conductor 内 $\vec E=0$，则：

$$
\nabla V=0
$$

所以整个 conductor 是 equipotential body。也可从 work 看：在 conductor 内缓慢移动 test charge 不受 electric force，电场力不做功，potential energy 不变，因此 potential 不变。

> **A conductor in electrostatic equilibrium has no potential difference within it.**

这正是后面判断“由导线相连的 capacitor plates 或 capacitors 具有相同端点电势”的基础。

### Knowledge Point 3: Surface Charge Density Controls the Nearby Field

**Transcript:** 00:08:43-00:16:00

conductor surface 外侧：

$$
\boxed{E_\perp=\frac{\sigma}{\epsilon_0}}
$$

所以 charge density 较高的位置，local field 较强。尖端曲率半径小，$\sigma$ 较大，因此更容易 point discharge。

## 4. What a Capacitor Stores / 电容器储存的到底是什么

### Knowledge Point 4: A Capacitor Separates Equal and Opposite Charge

**Transcript:** 00:16:34-00:20:32

最基本的 capacitor 由两个彼此绝缘的 conductors 构成。充电后：

$$
+Q\quad\text{on one conductor},
\qquad
-Q\quad\text{on the other}
$$

两边是 **equal amounts of opposite charge**。计算 capacitance 时，$Q$ 指任意一侧电荷量的 magnitude，不是 $2Q$；整个 capacitor 的 net charge 通常仍为零。

> **A capacitor stores separated charge: one conductor carries (+Q), and the other carries (-Q).**

### Knowledge Point 5: Charge Separation Is Energy Storage

要把 opposite charges 分开并放到两个 conductors 上，external agent 或 battery 必须做功。这份功转化为 electric potential energy，储存在 capacitor 的 electric field configuration 中。

discharging 时，电荷重新流动，field 变弱，储存能量可转化为灯泡的光、热等形式。

> **Charging a capacitor stores energy; discharging it releases that energy.**

因此“存电”和“储能”是同一物理过程的两个角度。

## 5. Capacitance / 电容

### Knowledge Point 6: Capacitance Is Charge Stored per Unit Potential Difference

**Transcript:** 00:21:24-00:24:58

定义：

$$
\boxed{C=\frac{Q}{|\Delta V|}}
$$

也可写：

$$
Q=C|\Delta V|
$$

SI unit：

$$
1\ \mathrm F=1\ \frac{\mathrm C}{\mathrm V}
$$

farad 很大，实际常见：

$$
\mathrm{mF}=10^{-3}\mathrm F,
\quad
\mu\mathrm F=10^{-6}\mathrm F,
\quad
\mathrm{nF}=10^{-9}\mathrm F,
\quad
\mathrm{pF}=10^{-12}\mathrm F
$$

> **Capacitance measures how much charge can be stored per unit potential difference.**

### Knowledge Point 7: C = Q / Delta V Is a Definition, Not a Cause

对于 linear capacitor，增加 applied voltage 会让 $Q$ 按比例增加，ratio $Q/|\Delta V|$ 保持为 $C$。

所以：

- $Q$ 与 $\Delta V$ 描述当前 charging state；
- $C$ 描述 capacitor 本身在特定 geometry 和 material 下的能力。

> **Changing $Q$ and $\Delta V$ proportionally does not change the capacitance of a fixed capacitor.**

$C$ 主要由：

- conductor geometry；
- conductor size and separation；
- material between conductors，也就是 permittivity；

决定，而不是由当前“装了多少电”单独决定。

## 6. Parallel-Plate Capacitor / 平行板电容器

### Knowledge Point 8: Two Opposite Plates Double the Interior Field

**Transcript:** 00:29:42-00:33:28

忽略 edge effects。单个 infinite sheet 的 field magnitude：

$$
E_{\text{one sheet}}=\frac{\sigma}{2\epsilon_0}
$$

两块等量异号 plates 叠加：

- plates 外侧的 fields 方向相反，互相抵消；
- plates 内侧的 fields 同向，互相加强。

因此两板之间：

$$
\boxed{E=\frac{\sigma}{\epsilon_0}}
$$

因为 $\sigma=Q/A$：

$$
E=\frac{Q}{\epsilon_0A}
$$

> **Between ideal parallel plates, the two sheet fields add; outside, they cancel.**

### Knowledge Point 9: Uniform Field Turns the Integral into Delta V = Ed

两板间近似 [[Uniform Electric Field]]。potential difference magnitude：

$$
|\Delta V|
=\left| -\int \vec E\cdot d\vec l\right|
=Ed
$$

所以：

$$
E=\frac{|\Delta V|}{d}
$$

注意这是 magnitude relation；带方向写电势变化时仍需保留负号。

### Knowledge Point 10: Geometry Determines the Parallel-Plate Capacitance

把：

$$
Q=\sigma A,
\qquad
|\Delta V|=Ed,
\qquad
E=\frac{\sigma}{\epsilon_0}
$$

代入 $C=Q/|\Delta V|$：

$$
C
=\frac{\sigma A}{(\sigma/\epsilon_0)d}
$$

得到：

$$
\boxed{C=\frac{\epsilon_0A}{d}}
$$

若两板之间完全填入 dielectric：

$$
C=\frac{\kappa\epsilon_0A}{d}
$$

本讲只预告 [[Dielectric Constant]]，尚未系统展开。

直观规律：

- larger plate area $A$：可容纳更多 separated charge，$C$ larger；
- smaller separation $d$：opposite charges 约束更强，$C$ larger；
- larger permittivity $\epsilon$：同样 voltage 下可储存更多 charge，$C$ larger。

## 7. Three Equivalent Routes for the Field / 平行板场强的三条路线

### Knowledge Point 11: Choose the Route That Matches the Given Data

平行板电容器常见三条计算路线：

$$
\boxed{E=\frac{|\Delta V|}{d}}
$$

$$
\boxed{E=\frac{\sigma}{\epsilon_0}}
$$

$$
\boxed{E=\frac{Q}{\epsilon_0A}}
$$

它们不是互相独立的新定律，而是由：

$$
\sigma=\frac QA,
\qquad
|\Delta V|=Ed
$$

连接起来。

做题时：

- 给 voltage 与 spacing，用 $E=|\Delta V|/d$；
- 给 surface charge density，用 $E=\sigma/\epsilon_0$；
- 给 plate charge 与 area，用 $E=Q/(\epsilon_0A)$。

## 8. Charge Sharing Between Connected Capacitors / 电容器相连后的电荷重分配

### Knowledge Point 12: Connected Capacitors Share Voltage, Not Necessarily Charge

**Transcript:** 00:46:03-00:55:35

一个已充电 capacitor 与另一个 capacitor 按同极性并联，且 battery 已断开。连接导线后，charge 会重新分配，直到相连节点 equipotential。

因此最终：

$$
\boxed{\Delta V_1=\Delta V_2=\Delta V_f}
$$

同时 isolated system 满足 [[Charge Conservation]]：

$$
Q_{\text{total}}=Q_{1f}+Q_{2f}
$$

而：

$$
Q_{1f}=C_1\Delta V_f,
\qquad
Q_{2f}=C_2\Delta V_f
$$

所以：

$$
\boxed{\Delta V_f=\frac{Q_{\text{total}}}{C_1+C_2}}
$$

再分别求：

$$
Q_{1f}=C_1\Delta V_f,
\qquad
Q_{2f}=C_2\Delta V_f
$$

> **When capacitors are connected in parallel, their final voltage is equal while charge divides according to capacitance.**

不要先假设 $Q_{1f}=Q_{2f}$；只有 $C_1=C_2$ 时才会相等。

## 9. Spherical Capacitor / 球形电容器

### Knowledge Point 13: A Spherical Capacitor Confines the Field Between Two Shells

**Transcript:** 00:55:35-01:03:23 and 01:48:43-01:53:30

内导体球壳半径 $a$，外导体球壳内半径 $b$，带电量分别为 $+Q$ 与 $-Q$。由 spherical symmetry 和 [[Gauss's Law]]：

$$
E(r)=
\begin{cases}
0,&r<a\\[4pt]
\dfrac{1}{4\pi\epsilon_0}\dfrac{Q}{r^2},&a<r<b\\[8pt]
0,&r>b
\end{cases}
$$

- $r<a$：Gaussian surface 未包围 charge；
- $a<r<b$：只包围 inner shell 的 $+Q$；
- $r>b$：包围 $+Q-Q=0$。

> **For an ideal spherical capacitor, the electric field exists only between the two conducting shells.**

### Knowledge Point 14: Integrate E(r) Before Using C = Q / Delta V

内外导体的 potential difference magnitude：

$$
V_a-V_b
=\int_a^b E(r)\,dr
$$

$$
=\frac{Q}{4\pi\epsilon_0}
\int_a^b\frac{dr}{r^2}
$$

因为：

$$
\int r^{-2}\,dr=-r^{-1}
$$

所以：

$$
V_a-V_b
=\frac{Q}{4\pi\epsilon_0}
\left(\frac1a-\frac1b\right)
$$

进而：

$$
\boxed{C=4\pi\epsilon_0\frac{ab}{b-a}}
$$

课堂中积分指数曾口误，随后已纠正；复习时以这里的 $\int r^{-2}dr=-1/r$ 为准。

## 10. Cylindrical Capacitor / 同轴圆柱电容器

### Knowledge Point 15: Cylindrical Symmetry Produces a 1/r Field

**Transcript:** 01:04:01-01:10:29 and 01:53:30-01:55:48

内导体半径 $a$，外导体内半径 $b$，长度 $L$，linear charge density 为 $+\lambda$ 与 $-\lambda$。取半径 $r$、长度 $L$ 的 coaxial Gaussian cylinder：

$$
E(2\pi rL)=\frac{\lambda L}{\epsilon_0}
$$

因此：

$$
E(r)=
\begin{cases}
0,&r<a\\[4pt]
\dfrac{\lambda}{2\pi\epsilon_0r},&a<r<b\\[8pt]
0,&r>b
\end{cases}
$$

注意 Gaussian cylinder 的 curved area 是：

$$
A_{\text{side}}=2\pi rL
$$

不是 $\pi r^2$，也不是 volume。

### Knowledge Point 16: The Coaxial Potential Difference Is Logarithmic

$$
V_a-V_b
=\int_a^b\frac{\lambda}{2\pi\epsilon_0r}\,dr
$$

$$
=\frac{\lambda}{2\pi\epsilon_0}
\ln\left(\frac ba\right)
$$

因为 $Q=\lambda L$：

$$
\boxed{C=\frac{2\pi\epsilon_0L}{\ln(b/a)}}
$$

> **The geometry chooses the field law: spherical symmetry gives $1/r^2$, while cylindrical symmetry gives $1/r$.**

## 11. Energy Stored in a Capacitor / 电容器储能

### Knowledge Point 17: The Factor 1/2 Comes from a Growing Voltage

**Transcript:** 01:24:06-01:25:53

不能直接写 $U=Q\Delta V$，因为 charging 过程中 capacitor voltage 不是从一开始就等于最终 $\Delta V$。当已经搬运 charge $q$ 时：

$$
V(q)=\frac qC
$$

再搬运 $dq$ 所需微小功：

$$
dU=V(q)dq=\frac qC\,dq
$$

积分：

$$
U=\int_0^Q\frac qC\,dq
=\frac{Q^2}{2C}
$$

由最终 $\Delta V=Q/C$：

$$
\boxed{U=\frac12Q\Delta V}
$$

> **The average voltage during charging is half the final voltage, which produces the factor $1/2$.**

### Knowledge Point 18: The Three Energy Formulas Encode Different Constraints

$$
\boxed{
U
=\frac12Q\Delta V
=\frac{Q^2}{2C}
=\frac12C(\Delta V)^2
}
$$

它们完全等价，但在变化题中应选择能把 constant quantity 显示出来的形式：

- $Q$ constant：优先 $U=Q^2/(2C)$；
- $\Delta V$ constant：优先 $U=\frac12C(\Delta V)^2$；
- 已知 $Q$ 与 $\Delta V$：用 $U=\frac12Q\Delta V$。

## 12. Battery Connected: Delta V Is Constant / 接电源时电压不变

### Knowledge Point 19: The Battery Can Add or Remove Charge

**Transcript:** 01:26:38-01:32:42

capacitor 仍 connected to battery 时，导线和 terminals 固定 plate potentials：

$$
\boxed{\Delta V=\text{constant}}
$$

battery 可向 plates 输送 charge 或收回 charge，因此 $Q$ 不一定 constant。

### Knowledge Point 20: Increase Plate Separation at Constant Voltage

$A$ 不变，$d$ 增大：

$$
C=\frac{\epsilon_0A}{d}\downarrow
$$

$$
Q=C\Delta V\downarrow
$$

$$
E=\frac{\Delta V}{d}\downarrow
$$

$$
U=\frac12C(\Delta V)^2\downarrow
$$

结果：

| quantity | change |
|---|---|
| $C$ | decreases |
| $Q$ | decreases |
| $\Delta V$ | constant |
| $E$ | decreases |
| $U$ | decreases |

### Knowledge Point 21: Increase Plate Area at Constant Voltage

$d$ 不变，$A$ 增大：

$$
C\uparrow,
\qquad
Q=C\Delta V\uparrow
$$

$$
E=\frac{\Delta V}{d}=\text{constant}
$$

$$
U=\frac12C(\Delta V)^2\uparrow
$$

物理图像：field strength 不变，但有 field 的 volume 变大，所以储能增加。

## 13. Isolated Capacitor: (Q) Is Constant / 断开电源后电荷不变

### Knowledge Point 22: Isolation Locks Charge onto the Plates

**Transcript:** 01:32:54-01:39:20

充电后断开 battery，charge 没有 conductive path 离开：

$$
\boxed{Q=\text{constant}}
$$

$\Delta V$ 会随 geometry 改变，不再由 battery 固定。

### Knowledge Point 23: Increase Plate Separation at Constant Charge

$A$ 不变，$d$ 增大：

$$
C=\frac{\epsilon_0A}{d}\downarrow
$$

$$
\Delta V=\frac QC\uparrow
$$

因为 $Q$ 与 $A$ 都不变：

$$
\sigma=\frac QA=\text{constant}
$$

所以：

$$
E=\frac{\sigma}{\epsilon_0}=\text{constant}
$$

也与 $\Delta V=Ed$ 一致：$d$ 增大而 $E$ 不变，因此 $\Delta V$ 增大。

能量：

$$
U=\frac{Q^2}{2C}\uparrow
$$

增加的 electric energy 来自 external agent 对抗 plates 之间吸引力所做的 positive work。

> **Pulling isolated capacitor plates apart requires external work, and that work becomes electric potential energy.**

### Knowledge Point 24: Increase Plate Area at Constant Charge

$d$ 不变，$A$ 增大：

$$
C\uparrow,
\qquad
\Delta V=\frac QC\downarrow
$$

$$
\sigma=\frac QA\downarrow,
\qquad
E=\frac{\sigma}{\epsilon_0}\downarrow
$$

$$
U=\frac{Q^2}{2C}\downarrow
$$

能量减少，是因为同号 surface charges 在扩展分布时，electric force 做 positive work。

### Constant-Condition Master Table

| condition | geometry change | $C$ | $Q$ | $\Delta V$ | $E$ | $U$ |
|---|---|---:|---:|---:|---:|---:|
| battery connected | $d\uparrow$, $A$ fixed | $\downarrow$ | $\downarrow$ | constant | $\downarrow$ | $\downarrow$ |
| battery connected | $A\uparrow$, $d$ fixed | $\uparrow$ | $\uparrow$ | constant | constant | $\uparrow$ |
| isolated | $d\uparrow$, $A$ fixed | $\downarrow$ | constant | $\uparrow$ | constant | $\uparrow$ |
| isolated | $A\uparrow$, $d$ fixed | $\uparrow$ | constant | $\downarrow$ | $\downarrow$ | $\downarrow$ |

## 14. The Full Derivation Chain / 一条脉络串起所有公式

### Parallel plates

~~~text
Gauss's law
-> E = sigma/epsilon_0
-> E = Q/(epsilon_0 A)
-> |Delta V| = Ed
-> |Delta V| = Qd/(epsilon_0 A)
-> C = Q/|Delta V|
-> C = epsilon_0 A/d
~~~

### Spherical capacitor

~~~text
spherical Gaussian surface
-> E(r) = Q/(4pi epsilon_0 r^2)
-> integrate E from a to b
-> V_a - V_b = Q/(4pi epsilon_0)(1/a - 1/b)
-> C = 4pi epsilon_0 ab/(b-a)
~~~

### Coaxial capacitor

~~~text
cylindrical Gaussian surface
-> E(r) = lambda/(2pi epsilon_0 r)
-> integrate E from a to b
-> V_a - V_b = lambda/(2pi epsilon_0) ln(b/a)
-> C = 2pi epsilon_0 L/ln(b/a)
~~~

这三条链把 [[Gauss's Law]]、[[Integrals]]、[[Electric Potential]] 与 [[Capacitors]] 变成同一个方法，而不是四章分散知识。

## 15. Deep Phrases / 深句对应表

| English sentence | 中文对应理解 |
|---|---|
| A capacitor stores energy by separating charge. | 正负电荷被分离并锁在两导体上，这个场配置本身带有能量。 |
| Capacitance is charge stored per unit potential difference. | 每一伏电势差能对应多少库仑电荷，就是电容。 |
| Capacitance is a property of geometry and material. | 固定结构的 $C$ 不由当前 $Q$ 或 $\Delta V$ 单独决定。 |
| The charge $Q$ in $C=Q/\Delta V$ is the magnitude on either plate. | $Q$ 只取一块板的电荷量绝对值，不写成 $2Q$。 |
| Between ideal parallel plates, the fields add; outside, they cancel. | 两板内侧场同向加强，外侧场反向抵消。 |
| Connected conductors equalize potential. | 导线相连后，电荷流动直到相连节点同电势。 |
| Connected capacitors share voltage, not necessarily charge. | 并联后的共同量是电压，电荷按电容大小分配。 |
| A closed capacitor geometry confines the electric field. | 球壳或同轴套管让场主要只存在于两导体之间。 |
| The voltage is the line integral of the field. | 先由对称性求 $E(r)$，再沿半径积分得到电势差。 |
| The factor one-half comes from the voltage rising during charging. | 充电电压从 0 增到最终值，平均只等于最终值的一半。 |
| A connected battery fixes voltage, not charge. | 电池接着时 $\Delta V$ 不变，电池可以增减 plate charge。 |
| An isolated capacitor fixes charge, not voltage. | 断开后 $Q$ 无路可走，电势差随几何改变。 |
| External work can increase the energy of an isolated capacitor. | 把相吸的 plates 拉远，外力做功转化为电场能。 |

## 16. Common Mistakes / 易错点

1. 把 capacitance 与 capacitor 混用：capacitor 是装置，capacitance 是能力 $C$。
2. 在 $C=Q/|\Delta V|$ 中把两板电荷加成 $2Q$。
3. 认为给 capacitor 加大 voltage 会改变固定结构的 $C$。
4. 忘记单个 infinite sheet 是 $\sigma/(2\epsilon_0)$，两块 opposite plates 之间才是 $\sigma/\epsilon_0$。
5. 把 $C=\epsilon_0A/d$ 当成任何形状 capacitor 的通式。
6. 算 parallel plate area 时误用 sphere area $4\pi r^2$。
7. 看到两个 capacitors 相连就令 charge 相等；正确是 voltage 相等并满足 total charge conservation。
8. 求 spherical capacitor 时把 $\int r^{-2}dr$ 写错；正确是 $-1/r$。
9. 求 coaxial capacitor 的 flux area 时用 $\pi r^2$；有效面是 curved area $2\pi rL$。
10. 把 $U$ 写成 $Q\Delta V$，漏掉 charging 过程产生的 $1/2$。
11. 做 geometry-change 题时直接套公式，却没有先判断 battery 是否连接。
12. 断电后拉大 $d$，认为 $E$ 必然下降；若 $Q,A$ fixed，则 $E=Q/(\epsilon_0A)$ 不变。
13. 看到 stored energy 增加就认为能量凭空产生；应追踪 external work 或 battery energy transfer。
14. 在 capacitance 中保留电势差的负号；$C$ 使用 charge 与 voltage 的 magnitude，因此为正。

## 17. Problem-Solving Templates / 题型动作

### A. Basic capacitor calculation

1. 把 mF、$\mu$F、nF、pF 转成 farad。
2. 明确 $Q$ 是单侧 plate charge magnitude。
3. 用 $Q=C|\Delta V|$。
4. 检查 units：F·V = C。

### B. Derive capacitance from geometry

1. 根据 symmetry 选择 Gaussian surface。
2. 分区域求 $E$。
3. 用 $|\Delta V|=\left| -\int\vec E\cdot d\vec l\right|$。
4. 最后用 $C=Q/|\Delta V|$。
5. 检查 source charge 是否在最终 $C$ 中消去；若没有，通常说明推导有误。

### C. Charge-sharing problem

1. 先求 connection 前的 total charge。
2. connection 后写共同 voltage：$\Delta V_1=\Delta V_2$。
3. 写 charge conservation。
4. 用 $Q_i=C_i\Delta V_f$。
5. 求 $\Delta V_f$ 后再分配各自 $Q_i$。

### D. Geometry-change problem

1. 先圈出 constant：battery connected -> $\Delta V$；isolated -> $Q$。
2. 从决定式 $C=\epsilon_0A/d$ 判断 $C$。
3. 用 $Q=C\Delta V$ 判断另一个 state variable。
4. 用 $E=\Delta V/d$ 或 $E=Q/(\epsilon_0A)$。
5. 选显示 constant 的 energy formula。
6. 用 work-energy 解释能量增减。

## 18. After-Class Compression / 课后压缩版

只记住十二句话：

1. capacitor 由两个彼此绝缘的 conductors 组成，储存 $+Q$ 与 $-Q$。
2. separated charge 同时意味着 stored electric potential energy。
3. $C=Q/|\Delta V|$，其中 $Q$ 只取一侧，不是 $2Q$。
4. capacitance 由 geometry 与 material 决定。
5. ideal parallel plates 之间 $E=\sigma/\epsilon_0=Q/(\epsilon_0A)$。
6. parallel-plate capacitance：$C=\epsilon_0A/d$。
7. 相连 capacitors 最终 voltage 相等，charge 按 capacitance 分配。
8. 球形 capacitor 中间场是 $1/r^2$；同轴 capacitor 中间场是 $1/r$。
9. 求任意 geometry 的 $C$：先 Gauss 求 $E$，再积分求 $\Delta V$，最后 $C=Q/|\Delta V|$。
10. $U=\frac12Q\Delta V=Q^2/(2C)=\frac12C(\Delta V)^2$。
11. battery connected 时 $\Delta V$ constant。
12. isolated capacitor 时 $Q$ constant，能量变化必须追踪 external work 或 electric-force work。

## 19. Video Companion / 搭配课堂观看

| 时间 | 观看重点 |
|---|---|
| 00:00:47-00:16:00 | conductor 六条性质复盘与尖端场强 |
| 00:16:34-00:21:24 | capacitor 的装置图像、充放电与储能 |
| 00:21:24-00:29:42 | capacitance 定义、单位、定义式与决定因素 |
| 00:29:42-00:35:46 | 平行板 $E,\Delta V,C$ 的推导 |
| 00:35:46-00:45:24 | 平行板基础计算与多种求场路线 |
| 00:46:03-00:55:35 | 两个 capacitors 相连后的共同电压与 charge sharing |
| 00:55:35-01:03:23 | spherical capacitor 的分段电场 |
| 01:04:01-01:10:29 | coaxial capacitor 的 Gaussian surface 与分段电场 |
| 01:24:06-01:26:38 | capacitor energy 与 $1/2$ 来源 |
| 01:26:38-01:32:42 | battery connected：$\Delta V$ constant |
| 01:32:54-01:40:06 | isolated：$Q$ constant 与能量来源 |
| 01:45:57-01:48:43 | 固定 $Q$ 拉远 plates 的定量能量题 |
| 01:48:43-01:55:48 | 对 spherical/coaxial $E(r)$ 积分，求 $\Delta V$ 与 $C$ |

## 20. Connections / 知识网络

### Lecture Sequence

- [[AP电磁学第1次正课-电荷库仑定律与电场]]
- [[AP电磁学第2次正课-连续带电体电场与电通量]]
- [[AP电磁学第3次正课-高斯定律与对称带电体]]
- [[AP电磁学第4次正课-电势能与电势]]
- [[AP电磁学第5次正课-电势差与电场电势关系]]
- [[AP电磁学第6次正课-等势面与静电平衡]]

### Core Physics

- [[Capacitors]]
- [[Conductors]]
- [[Electrostatic Equilibrium]]
- [[Electric Field]]
- [[Uniform Electric Field]]
- [[Electric Potential]]
- [[Gauss's Law]]
- [[Surface Charge Density]]
- [[Linear Charge Density]]
- [[Charge Conservation]]
- [[Dielectric Constant]]

### Mathematical Bridges

- [[Symmetry]] chooses the Gaussian surface.
- [[Integrals]] turn a position-dependent $E(r)$ into potential difference.
- [[Fundamental Theorem of Calculus]] connects $E=-dV/dr$ with $\Delta V=-\int E\,dr$.

这节课真正完成的是一个 reusable method：**geometry 决定 symmetry，symmetry 决定 field，field 的积分决定 voltage，而 charge-to-voltage ratio 决定 capacitance。**

## Next Lecture / 下一讲

- [[AP电磁学第8次正课-介电质电流与电阻]] 完成 electric energy density 与 dielectric insertion，并从静止电荷转入 electric current、resistivity 和 resistor networks。
