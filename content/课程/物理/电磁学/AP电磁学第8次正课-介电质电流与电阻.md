---
title: "AP电磁学第8次正课 - 介电质、电流与电阻"
description: "A connected bilingual learning note about AP电磁学第8次正课 - 介电质、电流与电阻."
publish: true
tags: [open-notes, physics-electromagnetism]
---
# AP电磁学第8次正课 - 介电质、电流与电阻

## Reading Guide / 阅读说明

本笔记对应 the course transcript，是物理 C 电磁学第 8 次正课。它先完成 [[AP电磁学第7次正课-电容器与电容储能]] 留下的 energy density 与 dielectric，再于 00:51:52 进入 [[Electric Circuits]]。

本节的主线是把 electrostatics 里的“charge 被分开并停住”转向 circuits 里的“charge 在 field 驱动下持续漂移”：

~~~text
capacitor energy
-> energy stored per unit volume
-> dielectric polarization changes capacitance
-> potential difference creates an internal field
-> field gives carriers a drift velocity
-> charge flow becomes current
-> material opposition becomes resistivity
-> geometry turns resistivity into resistance
-> circuit topology determines equivalent resistance
~~~

必须先分清两个状态：

> **Electrostatic equilibrium has no current and no electric field inside the conductor; steady conduction requires a nonzero internal field.**

第 6 讲的 conductor 内 $E=0$ 只适用于 electrostatic equilibrium。接入电源并形成 steady current 后，导线内部必须有 field 驱动 charge carriers。

## 1. What This Lecture Is About / 这节课在讲什么

这节课有两个连续的部分。

第一部分完成 capacitor：

- electric energy density 为什么与 $E^2$ 成正比；
- dielectric constant 与 permittivity 的区别；
- dielectric polarization 如何削弱给定 free charge 产生的 net field；
- 插入 dielectric 后先判断 battery connected 还是 isolated；
- constant voltage 与 constant charge 下 $C,Q,\Delta V,E,U$ 的不同变化。

第二部分进入 circuits：

- current 是通过截面的 net charge flow rate；
- random thermal motion 与 drift velocity 如何共存；
- conventional current 与 electron drift 方向相反；
- $I=n|q|Av_d$ 的微观来源；
- resistance 的定义式 $R=\Delta V/I$ 与决定式 $R=\rho L/A$；
- current density $\vec J$ 如何去掉横截面积的几何影响；
- microscopic Ohm's law：$\vec E=\rho\vec J$；
- series/parallel resistor 的分压、分流与 equivalent resistance。

## 2. Class Flow / 课堂脉络

1. 回顾 capacitance、parallel-plate geometry 与 capacitor energy。
2. 定义 electric energy density $u_E=U/(Ad)$。
3. 推导 vacuum 中 $u_E=\frac12\epsilon_0E^2$。
4. 区分 total energy 与 energy density。
5. 定义 permittivity $\epsilon$ 与 relative permittivity $\kappa$。
6. 用 molecular polarization 解释 dielectric 的 induced field。
7. 比较 dielectric 与 conductor：部分抵消和完全静电屏蔽。
8. 推出 $C=\kappa C_0=\kappa\epsilon_0A/d$。
9. 分析 constant $\Delta V$ 时插入 dielectric。
10. 分析 constant $Q$ 时插入 dielectric。
11. 结束 capacitor 单元，进入 electric circuits。
12. 定义 current $I=dQ/dt$。
13. 区分 thermal motion 与 net drift。
14. 定义 conventional current direction。
15. 推导 $I=n|q|Av_d$。
16. 识别 battery、switch、resistor、ammeter、voltmeter 等元件。
17. 区分 Ohmic 与 non-Ohmic element。
18. 定义 resistance：$R=\Delta V/I$。
19. 推出 $R=\rho L/A$，分析长度与半径缩放。
20. 说明 resistivity 的材料与温度依赖。
21. 定义 current density，并处理非均匀 $J(r)$ 的面积积分。
22. 建立 microscopic Ohm's law：$\vec E=\rho\vec J$。
23. 推导 series/parallel resistance。
24. 用 voltage division 与 current division 解组合电路。

## 3. Electric Energy Density / 电场能量密度

### Knowledge Point 1: Field Energy Is Stored Throughout Space

**Transcript:** 00:01:09-00:08:46

由第 7 讲：

$$
U=\frac12C(\Delta V)^2
$$

理想 parallel-plate capacitor 中，field 主要存在于两板之间。若 plate area 为 $A$、separation 为 $d$，field region volume 为：

$$
\mathcal V=Ad
$$

electric energy density 定义为单位体积储存的能量：

$$
u_E=\frac{U}{\mathcal V}
$$

> **Electric energy density tells us how much field energy is stored per unit volume.**

### Knowledge Point 2: In Vacuum, Energy Density Is Proportional to E Squared

平行板 capacitor：

$$
C=\frac{\epsilon_0A}{d},
\qquad
E=\frac{|\Delta V|}{d}
$$

因此：

$$
u_E
=\frac{\frac12C(\Delta V)^2}{Ad}
$$

$$
=\frac{\frac12(\epsilon_0A/d)(\Delta V)^2}{Ad}
$$

$$
=\frac12\epsilon_0\left(\frac{\Delta V}{d}\right)^2
$$

得到：

$$
\boxed{u_E=\frac12\epsilon_0E^2}
$$

在线性 dielectric 中则为：

$$
\boxed{u_E=\frac12\epsilon E^2}
$$

### Knowledge Point 3: Stronger Field Means Greater Density, Not Necessarily Greater Total Energy

因为：

$$
u_E\propto E^2
$$

field strength 越大，说明该位置每单位体积储存的 energy 越多。但 total field energy 还要对整个空间积分：

$$
\boxed{U=\int u_E\,d\mathcal V}
$$

所以：

- 小区域内 $E$ 很强：energy density 高，但 total energy 未必大；
- 很大区域内 $E$ 较弱：total energy 仍可能很大。

> **Field strength tracks local energy density, while total energy also depends on the volume occupied by the field.**

## 4. Dielectric Constant and Polarization / 介电常数与极化

### Knowledge Point 4: Relative Permittivity Compares a Medium with Vacuum

**Transcript:** 00:09:12-00:18:57

absolute permittivity：

$$
\epsilon
$$

vacuum permittivity：

$$
\epsilon_0
$$

relative permittivity / dielectric constant：

$$
\boxed{\kappa=\frac{\epsilon}{\epsilon_0}}
$$

所以：

$$
\boxed{\epsilon=\kappa\epsilon_0}
$$

$\kappa$ is dimensionless；vacuum 中 $\kappa=1$，ordinary dielectric 通常 $\kappa>1$。

> **The dielectric constant tells how strongly a material polarizes compared with vacuum.**

### Knowledge Point 5: A Dielectric Polarizes Without Conducting Freely

dielectric 通常是 [[Insulators]]。外加 field 使材料内部 bound charges 发生微小位移或使 permanent dipoles 转向：

- negative bound charge 稍向 positive plate 一侧偏移；
- positive bound charge 稍向 negative plate 一侧偏移。

由此形成 polarization charge，并产生与 applied field 相反的 induced field。

> **A dielectric reduces the net field by polarizing its bound charges, not by allowing free charge to cross the material.**

这连接到 [[Polarization]]。

### Knowledge Point 6: A Dielectric Partly Screens; a Conductor Reaches Electrostatic Cancellation

对 fixed free charge：

$$
\boxed{E=\frac{E_0}{\kappa}}
$$

dielectric 的 induced field 只部分抵消 free-charge field。conductor 在 electrostatic equilibrium 中则通过 free-charge redistribution 使内部 net field 为零。

课堂把 metal 说成“$\kappa\to\infty$”可作为 screening 的直观极限，但不要把 metal 当作普通 linear dielectric 直接代入 capacitor dielectric 公式；两者的 carrier physics 不同。

## 5. Dielectric Changes Capacitance / 介质如何改变电容

### Knowledge Point 7: Filling the Gap Multiplies Capacitance by Kappa

**Transcript:** 00:18:57-00:25:29

完全填充 dielectric：

$$
\boxed{C=\frac{\epsilon A}{d}}
$$

$$
=\frac{\kappa\epsilon_0A}{d}
$$

若 vacuum capacitance 为：

$$
C_0=\frac{\epsilon_0A}{d}
$$

则：

$$
\boxed{C=\kappa C_0}
$$

polarization 降低了给定 free charge 对应的 voltage，因此同样 voltage 下 capacitor 可储存更多 free charge。

> **A dielectric increases capacitance because polarization lowers the voltage produced by a given free charge.**

## 6. Insert a Dielectric: Two Different Constraints / 插入介质的两种条件

### Knowledge Point 8: Battery Connected Means Constant Voltage

**Transcript:** 00:25:29-00:29:33 and 00:36:36-00:50:25

geometry 不变、dielectric 完全插入，且 capacitor 仍 connected to battery：

$$
\Delta V=\text{constant}
$$

$$
C'=\kappa C
$$

$$
Q'=C'\Delta V=\kappa Q
$$

因为 $d$ 与 $\Delta V$ 都固定：

$$
\boxed{E'=\frac{\Delta V}{d}=E}
$$

能量：

$$
U'=\frac12C'(\Delta V)^2=\kappa U
$$

| quantity | after insertion |
|---|---:|
| $C$ | multiplied by $\kappa$ |
| $Q$ | multiplied by $\kappa$ |
| $\Delta V$ | constant |
| net $E$ | constant |
| $U$ | multiplied by $\kappa$ |

这里最容易混淆：polarization field 确实反向，但 battery 会补充 free charge，使 plate-charge field 增大，最终 net field 仍由 fixed voltage 决定。

> **At constant voltage, the battery supplies extra free charge, so the net field remains $E=\Delta V/d$.**

### Knowledge Point 9: Isolated Capacitor Means Constant Free Charge

battery 断开后：

$$
Q=\text{constant}
$$

$$
C'=\kappa C
$$

$$
\Delta V'=\frac{Q}{C'}=\frac{\Delta V}{\kappa}
$$

$$
E'=\frac{\Delta V'}{d}=\frac{E}{\kappa}
$$

$$
U'=\frac{Q^2}{2C'}=\frac{U}{\kappa}
$$

| quantity | after insertion |
|---|---:|
| $C$ | multiplied by $\kappa$ |
| $Q$ | constant |
| $\Delta V$ | divided by $\kappa$ |
| net $E$ | divided by $\kappa$ |
| $U$ | divided by $\kappa$ |

减少的 field energy 转化为 dielectric 被吸入 capacitor 的 mechanical work、热等，取决于插入过程。

> **At constant charge, polarization lowers both the field and the voltage by a factor of $\kappa$.**

## 7. Electric Current / 电流

### Knowledge Point 10: Current Is Net Charge Flow Rate

**Transcript:** 00:51:52-00:58:19

通过某一 oriented cross-section 的 current：

$$
\boxed{I=\frac{dQ}{dt}}
$$

若一段时间内 current constant：

$$
I=\frac{\Delta Q}{\Delta t}
$$

SI unit：

$$
1\ \mathrm A=1\ \frac{\mathrm C}{\mathrm s}
$$

> **Electric current measures the net amount of charge crossing a surface per unit time.**

current 有约定方向，但在普通 circuit analysis 中作为 signed scalar 使用，不是像 $\vec E$ 那样可任意做空间矢量分解的 vector quantity。

### Knowledge Point 11: Random Thermal Motion Does Not Produce Net Current

conductor 内 electrons 即使没有 battery 也在快速 random thermal motion，但各方向平均抵消：

$$
\langle\vec v_{\text{thermal}}\rangle=0
$$

接入 source 后，random motion 上叠加很小的 average drift velocity：

$$
\vec v=\vec v_{\text{thermal}}+\vec v_d
$$

macroscopic current 来自 $\vec v_d$，不是来自巨大但方向随机的 thermal speed。

> **Current is the tiny directional drift left after random carrier motion averages out.**

### Knowledge Point 12: Conventional Current Is Opposite Electron Drift

conventional current direction 定义为 positive charge motion direction：

- conventional current：higher potential terminal toward lower potential through external circuit；
- electron drift in metal：opposite conventional-current direction。

计算 current magnitude 时常用 $|q|$，避免负电子电荷改变 magnitude。

## 8. Microscopic Current Formula / 电流的微观表达式

### Knowledge Point 13: Count the Carriers Crossing a Slice

**Transcript:** 00:58:19-01:01:38

设：

- $n$：number density，单位体积内 carriers 数量，单位 $\mathrm{m^{-3}}$；
- $q$：每个 carrier 的 charge；
- $A$：wire cross-sectional area；
- $v_d$：drift-speed magnitude。

时间 $dt$ 内通过截面的 carrier volume：

$$
d\mathcal V=Av_d\,dt
$$

carrier 数量：

$$
dN=nAv_d\,dt
$$

通过的 charge magnitude：

$$
dQ=n|q|Av_d\,dt
$$

所以：

$$
\boxed{I=n|q|Av_d}
$$

电子电荷 magnitude：

$$
\boxed{e=1.60\times10^{-19}\ \mathrm C}
$$

transcript 在这里把 exponent 识别成了 $10^{-9}$；正确值是 $10^{-19}$。

> **Current grows with carrier density, charge per carrier, cross-sectional area, and drift speed.**

## 9. Circuit Model and Instruments / 电路与仪表模型

### Knowledge Point 14: A Steady Circuit Needs a Closed Path and an Energy Source

**Transcript:** 01:02:04-01:05:01

最基本 steady circuit 需要：

- closed conducting path；
- source / battery 提供 EMF；
- load，例如 resistor；
- switch 可控制是否闭合。

EMF 不是 mechanical force，而是 source 每单位 charge 提供的 energy：

$$
\mathcal E=\frac{W_{\text{source}}}{q}
$$

单位仍是 volt。

### Knowledge Point 15: Ideal Meters Are Extreme Resistance Models

- ideal ammeter 串联测 current：

$$
R_A=0
$$

- ideal voltmeter 并联测 potential difference：

$$
R_V\to\infty
$$

ammeter 不能显著阻碍 current；voltmeter 不能显著抽走 current。

## 10. Resistance and Ohm's Law / 电阻与欧姆定律

### Knowledge Point 16: Ohmic Behavior Means a Linear V-I Relationship

**Transcript:** 01:07:53-01:10:50

对于 Ohmic element 且 physical conditions fixed：

$$
\boxed{\Delta V=IR}
$$

$$
\boxed{R=\frac{\Delta V}{I}}
$$

SI unit：

$$
1\ \Omega=1\ \frac{\mathrm V}{\mathrm A}
$$

在 $I$ versus $V$ graph 上：

$$
\text{slope}=\frac{I}{V}=\frac1R
$$

在 $V$ versus $I$ graph 上：

$$
\text{slope}=\frac{V}{I}=R
$$

> **An Ohmic element has a linear voltage-current relation under fixed physical conditions.**

diode 等 non-Ohmic element 的 $V-I$ curve 非线性，ratio $V/I$ 可能随 operating point 改变。

### Knowledge Point 17: Resistance Is Not Caused by the Applied Voltage

$R=\Delta V/I$ 是 operational definition。对理想 Ohmic resistor，增大 voltage 会按比例增大 current，$R$ 保持不变。

这与 capacitance 的逻辑平行：

| quantity | definition relation | determined mainly by |
|---|---|---|
| capacitance | $C=Q/|\Delta V|$ | geometry + permittivity |
| resistance | $R=\Delta V/I$ | geometry + resistivity |

## 11. Resistivity and Geometry / 电阻率与几何

### Knowledge Point 18: Length Raises Resistance; Area Lowers It

**Transcript:** 01:10:50-01:20:58

uniform wire：

$$
\boxed{R=\rho\frac{L}{A}}
$$

- $L$ larger：carriers travel through more material，$R$ larger；
- $A$ larger：more parallel conducting paths，$R$ smaller；
- $\rho$：resistivity，描述 material 的本征阻碍程度。

unit：

$$
[\rho]=\Omega\cdot\mathrm m
$$

> **Resistance combines a material property, resistivity, with the conductor's geometry.**

### Knowledge Point 19: Radius Changes Resistance Quadratically

cylindrical wire：

$$
A=\pi r^2
$$

若 $L\to3L$ 且 $r\to3r$：

$$
A\to9A
$$

$$
R'=\rho\frac{3L}{9A}=\frac R3
$$

不要把 radius 的倍数直接当 area 的倍数。

### Knowledge Point 20: For Nonuniform Material, Add Differential Resistances

若 $\rho$ 或 $A$ 随位置变化：

$$
dR=\rho(x)\frac{dx}{A(x)}
$$

$$
\boxed{R=\int\rho(x)\frac{dx}{A(x)}}
$$

这把均匀公式推广为 [[Integrals]] 形式。

### Knowledge Point 21: Resistivity Usually Depends on Temperature

在有限温区内，许多 metals 可近似：

$$
\rho(T)=\rho_0[1+\alpha(T-T_0)]
$$

温度升高通常使 lattice vibration 增强，electron scattering 增多，resistivity 上升。但并非所有 material 都遵循同一趋势，semiconductors 与 non-Ohmic devices 需单独分析。

## 12. Current Density / 电流密度

### Knowledge Point 22: Current Density Removes the Size of the Cross Section

**Transcript:** 01:21:45-01:28:58

uniform flow perpendicular to area：

$$
\boxed{J=\frac IA}
$$

vector form：

$$
\boxed{I=\int\vec J\cdot d\vec A}
$$

SI unit：

$$
[J]=\mathrm{A/m^2}
$$

current $I$ 描述整个 cross-section 的 total flow；current density $\vec J$ 描述局部每单位面积的 flow。

> **Current is total flow through a cross section; current density is local flow per unit area.**

### Knowledge Point 23: Microscopic Current Density Is Carrier Charge Flow

由：

$$
I=n|q|Av_d
$$

除以 $A$：

$$
\boxed{J=n|q|v_d}
$$

vector form 若保留 signed carrier charge：

$$
\boxed{\vec J=nq\vec v_d}
$$

对 electrons，$q<0$，所以 $\vec J$ 与 electron drift velocity 方向相反。

### Knowledge Point 24: Nonuniform Current Density Requires an Area Integral

若 radius 为 $a$ 的 circular cross-section 中：

$$
J(r)=\beta r^2
$$

取 thin annulus：

$$
dA=2\pi r\,dr
$$

总 current：

$$
I=\int_0^aJ(r)dA
$$

$$
=\int_0^a(\beta r^2)(2\pi r\,dr)
$$

$$
=2\pi\beta\int_0^ar^3dr
$$

$$
\boxed{I=\frac{\pi\beta a^4}{2}}
$$

关键不是直接写 $J\pi a^2$，因为 $J$ 随 $r$ 变化；必须把 disk 拆成 concentric annuli。

## 13. Microscopic Ohm's Law / 微观欧姆定律

### Knowledge Point 25: Resistivity Relates Field to Current Density

**Transcript:** 01:40:19-01:43:20

local Ohm's law：

$$
\boxed{\vec E=\rho\vec J}
$$

等价地定义 conductivity $\sigma_c=1/\rho$：

$$
\boxed{\vec J=\sigma_c\vec E}
$$

这里写 $\sigma_c$ 是为了避免与 surface charge density 的 $\sigma$ 混淆。

> **Resistivity measures how much electric field is required to produce a given current density.**

同样 $\vec E$ 下：

- larger $\rho$ -> smaller $\vec J$；
- smaller $\rho$ -> larger $\vec J$。

### Knowledge Point 26: Macroscopic Ohm's Law Follows from the Local Law

uniform wire：

$$
E=\frac{\Delta V}{L},
\qquad
J=\frac IA
$$

代入 $E=\rho J$：

$$
\frac{\Delta V}{L}=\rho\frac IA
$$

$$
\Delta V=I\left(\rho\frac LA\right)
$$

由于：

$$
R=\rho\frac LA
$$

得到：

$$
\boxed{\Delta V=IR}
$$

这条推导说明：macroscopic resistance 是 local material response 在特定 geometry 上的整体结果。

## 14. Series and Parallel Resistors / 电阻串并联

### Knowledge Point 27: Series Resistors Carry the Same Current

**Transcript:** 01:43:20-01:45:33

series circuit 只有一条 current path：

$$
I_1=I_2=\cdots=I
$$

总 potential difference：

$$
\Delta V=\sum_i\Delta V_i
$$

由 $\Delta V_i=IR_i$：

$$
\boxed{R_{\text{eq}}=\sum_iR_i}
$$

voltage division：

$$
\boxed{\Delta V_i=\frac{R_i}{R_{\text{eq}}}\Delta V}
$$

> **Series resistors share current and divide voltage in proportion to resistance.**

### Knowledge Point 28: Parallel Resistors Share the Same Voltage

parallel branches connect to the same two nodes：

$$
\Delta V_1=\Delta V_2=\cdots=\Delta V
$$

total current：

$$
I=\sum_iI_i
$$

由 $I_i=\Delta V/R_i$：

$$
\boxed{\frac1{R_{\text{eq}}}=\sum_i\frac1{R_i}}
$$

current division for two branches：

$$
\boxed{\frac{I_1}{I_2}=\frac{R_2}{R_1}}
$$

> **Parallel resistors share voltage and divide current inversely with resistance.**

parallel equivalent resistance 必小于最小 branch resistance，因为并联增加了额外 conduction paths。

### Knowledge Point 29: Reduce the Network Step by Step

**Transcript:** 01:45:33-01:49:35

组合电路动作：

1. 先找最内层明确 series 或 parallel 的 group；
2. 替换为 equivalent resistance；
3. 重复化简直到只剩 $R_{\text{eq}}$；
4. 用 source voltage 求 total current；
5. 从外向内还原各 group 的 voltage/current；
6. 用 junction current conservation 检查。

课堂例子中，$6\ \Omega$ 与 $3\ \Omega$ 并联：

$$
R_p=2\ \Omega
$$

再与 $4\ \Omega$ 串联：

$$
R_{\text{eq}}=6\ \Omega
$$

$18\ \mathrm V$ source 给出：

$$
I_{\text{total}}=3\ \mathrm A
$$

parallel section voltage 为 $6\ \mathrm V$，所以 branch currents 为 $1\ \mathrm A$ 与 $2\ \mathrm A$，相加回到 $3\ \mathrm A$。

## 15. Deep Phrases / 深句对应表

| English sentence | 中文对应理解 |
|---|---|
| Field strength tracks local energy density. | 场强反映单位空间内储存多少场能，不直接等于总能量。 |
| A dielectric polarizes but does not freely conduct. | 介质中的束缚电荷发生微小偏移，但不会像金属自由穿过材料。 |
| Polarization opposes the applied field. | 极化产生反向场，削弱给定自由电荷造成的净场。 |
| A dielectric increases capacitance. | 同样电势差下，介质使电容器能容纳更多自由电荷。 |
| The battery fixes voltage; isolation fixes charge. | 插介质题第一步先判断接电源还是断电。 |
| Current is net charge flow, not random microscopic motion. | 热运动各方向抵消，只有平均漂移形成宏观电流。 |
| Conventional current points opposite electron drift. | 电流方向按正电荷定义，金属电子实际向反方向漂移。 |
| Drift velocity is much smaller than thermal speed. | 电子运动很快，但定向平均漂移通常很慢。 |
| Resistance combines material and geometry. | 电阻既看电阻率，也看长度和横截面积。 |
| Current density removes the cross-sectional size effect. | $J=I/A$ 描述局部单位面积电流，比总电流更接近材料响应。 |
| The local Ohm's law is $\vec E=\rho\vec J$. | 产生一定电流密度需要多少场强，由电阻率决定。 |
| Series divides voltage; parallel divides current. | 串联同流按阻分压，并联同压按阻反比分流。 |

## 16. Common Mistakes / 易错点

1. 把 energy density $u_E$ 与 total energy $U$ 混淆。
2. 认为 $u_E\propto E$；正确是 $u_E\propto E^2$。
3. 把 relative permittivity $\kappa$ 写成有单位的量；它是 dimensionless ratio。
4. 认为 dielectric polarization 与 conductor induction 完全相同；前者是 bound-charge displacement，后者有 free-charge redistribution。
5. 插 dielectric 后不先判断 constant $\Delta V$ 还是 constant $Q$。
6. 接电源且 gap fixed 时仍写 net $E\to E/\kappa$；正确是 $E=\Delta V/d$ 不变。
7. 把 electrostatic conductor 内 $E=0$ 无条件套到 carrying-current wire；steady current 需要 internal $E$。
8. 把 random thermal electron motion 当成 net current。
9. 让 electron drift 与 conventional current 同向。
10. 把 number density $n$ 当成 total number 或 charge density。
11. 把 electron charge magnitude 写成 $10^{-9}\ \mathrm C$；正确是 $1.60\times10^{-19}\ \mathrm C$。
12. 看到 current 有方向就直接称它为 ordinary vector；circuit current 通常是带方向约定的 scalar。
13. 用 $R=V/I$ 推断“加大 voltage 使 resistance 改变”；对 Ohmic element 这是定义关系。
14. 半径扩大三倍时只让 area 扩大三倍；正确是九倍。
15. 非均匀 $J(r)$ 直接乘总面积；应写 $I=\int\vec J\cdot d\vec A$。
16. 在 current-density integral 中把 $dA$ 直接当 $dr$；圆面应使用 $dA=2\pi r\,dr$。
17. 混淆 resistivity $\rho$ 与 resistance $R$。
18. 把 ammeter 并联或 voltmeter 串联。
19. 认为 parallel equivalent resistance 大于某个 branch；它一定小于最小 branch resistance。
20. 串联按阻值反比分压或并联按阻值正比分流；两者正好相反。

## 17. Problem-Solving Templates / 题型动作

### A. Insert a dielectric

1. 用 $C'=\kappa C$ 判断 capacitance。
2. 看 battery 是否 connected。
3. connected：$\Delta V$ constant；isolated：$Q$ constant。
4. 用 $Q=C\Delta V$ 求另一个量。
5. 用 $E=\Delta V/d$ 判断 net field。
6. 选 $U=\frac12C(\Delta V)^2$ 或 $U=Q^2/(2C)$。

### B. Microscopic current

1. 写 $I=n|q|Av_d$。
2. 检查 $n$ 单位为 $\mathrm{m^{-3}}$。
3. 用 $A=\pi r^2$。
4. electron charge 使用 $1.60\times10^{-19}\ \mathrm C$。
5. 若问方向，electron drift 与 conventional current 相反。

### C. Resistance scaling

1. 写 $R=\rho L/A$。
2. material、temperature 不变才可令 $\rho$ 不变。
3. 对 circular wire 写 $A=\pi r^2$。
4. 分别比较 $L'/L$ 与 $A'/A$。
5. 组合成 $R'/R$。

### D. Nonuniform current density

1. 画 cross-section。
2. 根据 symmetry 选择 differential area。
3. circular symmetry：$dA=2\pi r\,dr$。
4. 写 $I=\int\vec J\cdot d\vec A$。
5. 代入 $J(r)$ 后再积分。

### E. Resistor network

1. 标出 nodes，不只看线条外形。
2. 找相同 current path 的 series group。
3. 找连接同一对 nodes 的 parallel group。
4. 逐层化简 $R_{\text{eq}}$。
5. 求 total current 后反向展开。
6. 用 branch-current sum 与 loop voltage sum 检查。

## 18. After-Class Compression / 课后压缩版

只记住十四句话：

1. vacuum field energy density：$u_E=\frac12\epsilon_0E^2$。
2. total field energy：$U=\int u_Ed\mathcal V$。
3. $\epsilon=\kappa\epsilon_0$，$\kappa$ 衡量相对真空的极化响应。
4. dielectric 通过 bound-charge polarization 产生反向场。
5. fully filled capacitor：$C'=\kappa C$。
6. 接电源插介质：$\Delta V,E$ 不变，$C,Q,U$ 增大 $\kappa$ 倍。
7. 断电插介质：$Q$ 不变，$C$ 增大 $\kappa$ 倍，$E,\Delta V,U$ 变为 $1/\kappa$。
8. current：$I=dQ/dt$。
9. microscopic current：$I=n|q|Av_d$。
10. conventional current 与 electron drift 方向相反。
11. Ohmic element：$\Delta V=IR$。
12. uniform wire：$R=\rho L/A$。
13. current density：$I=\int\vec J\cdot d\vec A$，local Ohm's law 为 $\vec E=\rho\vec J$。
14. series 同 current、阻值相加；parallel 同 voltage、conductance 相加。

## 19. Video Companion / 搭配课堂观看

| 时间 | 观看重点 |
|---|---|
| 00:01:09-00:03:44 | 回顾 capacitance 与 capacitor energy |
| 00:03:44-00:09:12 | electric energy density 与 $u_E=\frac12\epsilon_0E^2$ |
| 00:09:12-00:18:57 | dielectric constant、polarization 与材料直觉 |
| 00:18:57-00:25:29 | $E=E_0/\kappa$ 的条件与 $C=\kappa C_0$ |
| 00:25:29-00:40:43 | 插入 dielectric：constant voltage 与 constant charge |
| 00:40:43-00:51:32 | dielectric 选择题讲解与概念纠错 |
| 00:51:52-00:58:19 | current 定义、thermal motion 与 drift velocity |
| 00:58:19-01:01:38 | 推导 $I=n|q|Av_d$ |
| 01:02:04-01:05:01 | circuit symbols、closed path 与 short circuit |
| 01:07:53-01:10:50 | Ohmic/non-Ohmic behavior 与 $R=V/I$ |
| 01:10:50-01:14:48 | $R=\rho L/A$、材料与温度 |
| 01:15:15-01:20:58 | wire geometry scaling 与 resistivity ratio |
| 01:21:45-01:28:58 | current density、drift speed 与面积积分 |
| 01:28:58-01:40:19 | FRQ：由 $J(r)$ 积分求 total current |
| 01:40:19-01:43:20 | microscopic Ohm's law：$\vec E=\rho\vec J$ |
| 01:43:20-01:49:35 | series/parallel resistance、分压与分流 |

## 20. Connections / 知识网络

### Lecture Sequence

- [[AP电磁学第6次正课-等势面与静电平衡]]
- [[AP电磁学第7次正课-电容器与电容储能]]

### Capacitor and Material Branch

- [[Capacitors]]
- [[Dielectric Constant]]
- [[Polarization]]
- [[Insulators]]
- [[Conductors]]
- [[Electric Field]]
- [[Electric Potential]]

### Current and Circuit Branch

- [[Electric Current]]
- [[Current Density]]
- [[Resistance and Resistivity]]
- [[Electric Circuits]]
- [[Charge Conservation]]

### Mathematical Bridge

- [[Integrals]] connect local density to total quantity:

$$
U=\int u_Ed\mathcal V,
\qquad
I=\int\vec J\cdot d\vec A,
\qquad
R=\int\rho\frac{dx}{A(x)}
$$

本节把三种“总量来自局部密度的积分”放在同一张图里：field energy 来自 energy density，current 来自 current density，nonuniform resistance 来自 differential resistance。

## Next Lecture / 下一讲

- [[AP电磁学第9次正课-电功率电表与基尔霍夫定律]] 从 resistor combinations 继续到 electric power、real batteries、meter conversion、Wheatstone bridge 与 Kirchhoff circuit analysis。
