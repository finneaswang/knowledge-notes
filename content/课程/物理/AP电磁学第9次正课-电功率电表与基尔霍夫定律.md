---
title: "AP电磁学第9次正课 - 电功率、电表与基尔霍夫定律"
description: "A connected bilingual learning note about AP电磁学第9次正课 - 电功率、电表与基尔霍夫定律."
publish: true
tags: [open-notes, physics-course]
---
# AP电磁学第9次正课 - 电功率、电表与基尔霍夫定律

## Reading Guide / 阅读说明

课程内容表明第 9 节课讲 circuit simplification、Kirchhoff current/junction rule、voltage/loop rule 与计算技巧；the course transcript 的内容与此完全吻合。

transcript 开头又逐项回顾 [[AP电磁学第8次正课-介电质电流与电阻]]：

- macroscopic and microscopic Ohm's law；
- $\vec E=\rho\vec J$；
- $I=n|q|Av_d$ 与 $J=n|q|v_d$；
- series/parallel resistors。

随后自然进入：

~~~text
potential difference transfers energy to moving charge
-> electric power
-> real source = ideal EMF + internal resistance
-> meters are resistor networks built around a galvanometer
-> Wheatstone bridge uses equal-potential nodes
-> complex circuits cannot always be reduced by series/parallel inspection
-> Kirchhoff junction rule enforces charge conservation
-> Kirchhoff loop rule enforces energy conservation
~~~

因此，第 8 → 第 9 讲的知识衔接是连续的。第 9 讲也是目前第一节有用户明确 topic confirmation 的 official lecture number。

## 1. What This Lecture Is About / 这节课在讲什么

本节把“会化简简单电阻网络”提升为“能系统求解复杂多支路、多电源电路”。

前半段建立实际电路元件模型：

- charge 穿过 potential difference 时如何转移 energy；
- electric power 的三个常用公式及使用边界；
- 为什么 bulb brightness 看 power，不只看 current 或 voltage；
- real battery 为什么要建模为 EMF 与 internal resistance；
- terminal voltage 为什么随 current 改变；
- galvanometer 如何改造成 ammeter 与 voltmeter；
- Wheatstone bridge 如何用 zero-current condition 测 unknown resistance。

后半段进入 [[Kirchhoff's Rules]]：

- junction rule 是 [[Charge Conservation]]；
- loop rule 是 energy conservation；
- unknown branch current 可以任意假设方向；
- negative current 只表示真实方向与假设相反；
- battery 与 resistor 的 loop sign 如何判断；
- 为什么多个 loops 中只选 independent equations；
- 如何从联立方程求 currents、unknown resistance、terminal voltage 和 component power。

## 2. Class Flow / 课堂脉络

1. 回顾第 8 讲的 local Ohm's law、current density 与 resistor combinations。
2. 从 $dU=dq\,\Delta V$ 推出 $P=I\Delta V$。
3. 对 Ohmic resistor 推出 $P=I^2R=(\Delta V)^2/R$。
4. 用 power 判断 identical bulbs 的 brightness。
5. 比较 bulbs 的 series 与 parallel connection。
6. 分析 parallel branch 中一个 bulb 断路后，其他 branch 为什么不受影响。
7. 引入 EMF：source 每单位 charge 提供的 energy。
8. 建立 real battery = ideal source + internal resistance。
9. 推出 discharging battery 的 terminal voltage：$V_{\text{term}}=\mathcal E-Ir$。
10. 用 ammeter 与 voltmeter 从两条路径计算同一 terminal voltage。
11. 区分 ideal 与 real meters。
12. 用 shunt resistor 把 galvanometer 改成大 range ammeter。
13. 用 series resistor 把 galvanometer 改成 voltmeter。
14. 练习 meter range conversion。
15. 用 Wheatstone bridge 的 zero-current condition 测 unknown resistance。
16. 说明复杂 bridge 或多电源电路不能总靠 series/parallel reduction。
17. 定义 Kirchhoff junction rule。
18. unknown branch currents 任意设方向。
19. 定义 Kirchhoff loop rule。
20. 建立 source 与 resistor 的 loop sign table。
21. 对含 internal resistance 与多个 sources 的 loop 列方程。
22. 由任意路径计算两节点 potential difference。
23. 识别 battery supplying power 与 being charged 的符号。
24. 联立 junction equations 与 independent loop equations 解复杂网络。

## 3. From Electric Energy to Power / 从电能到功率

### Knowledge Point 1: Potential Difference Transfers Energy per Unit Charge

**Transcript:** 00:04:40-00:08:35

electric potential difference 定义：

$$
\Delta V=\frac{\Delta U}{q}
$$

一小段 charge $dq$ 穿过 potential difference：

$$
dU=dq\,\Delta V
$$

这表示 source 或 component 每搬运一份 charge，会发生多少 electric energy transfer。

> **Voltage tells how much energy is transferred per unit charge.**

### Knowledge Point 2: Electric Power Is Energy Transfer per Unit Time

两边除以 $dt$：

$$
\frac{dU}{dt}=\frac{dq}{dt}\Delta V
$$

因为：

$$
P=\frac{dU}{dt},
\qquad
I=\frac{dq}{dt}
$$

得到：

$$
\boxed{P=I\Delta V}
$$

unit：

$$
1\ \mathrm W=1\ \mathrm{J/s}=1\ \mathrm{V\cdot A}
$$

> **Electric power is the rate at which a circuit element transfers energy.**

### Knowledge Point 3: Energy Comes from Integrating Power

constant power：

$$
\Delta U=P\Delta t
$$

time-dependent power：

$$
\boxed{\Delta U=\int_{t_i}^{t_f}P(t)\,dt}
$$

这连接到 [[Integrals]]：power 是 energy 的 time derivative，energy 是 power 的 time accumulation。

## 4. Power in Resistors / 电阻上的功率

### Knowledge Point 4: Ohm's Law Produces Three Equivalent Power Forms

**Transcript:** 00:08:35-00:11:19

general component：

$$
P=I\Delta V
$$

对 Ohmic resistor，$\Delta V=IR$：

$$
\boxed{P=I^2R}
$$

或 $I=\Delta V/R$：

$$
\boxed{P=\frac{(\Delta V)^2}{R}}
$$

三式：

$$
\boxed{P=I\Delta V=I^2R=\frac{(\Delta V)^2}{R}}
$$

后两式依赖 Ohm's law，不能无条件用于 motor、battery 或 non-Ohmic device。

> **Use $P=IV$ generally; use $I^2R$ or $V^2/R$ only for resistive dissipation.**

### Knowledge Point 5: Joule Heating Comes from Carrier Collisions

charge carriers 在 electric field 下 drift，并与 lattice ions 碰撞。electrical energy 转化为 microscopic random motion，也就是 thermal energy。

$$
P_{\text{thermal}}=I^2R
$$

resistive heater 就利用这种 Joule heating。superconducting state 的 resistance 趋近于零，因此 steady-current resistive loss 也趋近于零。

## 5. Bulb Brightness and Circuit Changes / 灯泡亮度与电路变化

### Knowledge Point 6: Brightness Tracks Power

**Transcript:** 00:11:19-00:28:39

bulb brightness 反映单位时间内转换成 light and heat 的 energy，因此应比较 power，而不是单独比较 current 或 voltage。

> **For comparable bulbs, brightness is determined by power, not by current or voltage alone.**

对于 identical bulbs：

- series：same current，可用 $P=I^2R$；
- parallel：same voltage，可用 $P=(\Delta V)^2/R$。

### Knowledge Point 7: Two Identical Bulbs on an 8 V Source

每个 bulb $R=2\ \Omega$。

series：

$$
R_{\text{eq}}=4\ \Omega,
\qquad
I=\frac{8}{4}=2\ \mathrm A
$$

每个 bulb：

$$
\Delta V=IR=4\ \mathrm V
$$

$$
P=I^2R=8\ \mathrm W
$$

parallel：

$$
\Delta V_{\text{each}}=8\ \mathrm V
$$

$$
I_{\text{each}}=\frac82=4\ \mathrm A
$$

$$
P_{\text{each}}=32\ \mathrm W
$$

因此同一 ideal voltage source 下，parallel bulbs 更亮。

### Knowledge Point 8: An Open Branch Does Not Change Other Ideal Parallel Branches

parallel circuit 中一个 bulb 断路：

- broken branch current 变成 zero；
- 其他 branch 仍跨接同一 source voltage；
- 其他 branch 的 current 与 power 不变；
- source total current 与 total output power 减小。

不要说“少了分流，所以另一个 bulb current 增大”；ideal voltage source 固定的是 branch voltage。

### Knowledge Point 9: Treat a Parallel Subnetwork as One Equivalent Component

复杂但仍可化简的 network：

1. 先把 parallel subsection 化成 $R_p$；
2. 把 $R_p$ 与其余 series component 比较；
3. 用 series voltage division 求 subsection voltage；
4. 回到 parallel subsection 求 branch currents/powers。

当新 parallel branch 接入时：

$$
R_p\downarrow
$$

但不能直接说“某个元件得到的 power 被分走”。source current 与 total source power 都可能变化，必须重新计算整个 network。

## 6. EMF and Real Batteries / 电动势与真实电源

### Knowledge Point 10: EMF Is Energy Supplied per Unit Charge

**Transcript:** 00:28:39-00:34:50

电源内部把 positive charge equivalent 从 low potential 搬运回 high potential，代价来自 chemical、mechanical 或其他 non-electrostatic energy。

EMF 定义：

$$
\boxed{\mathcal E=\frac{dW_{\text{source}}}{dq}}
$$

unit 是 volt。

> **EMF is energy supplied per unit charge; despite its name, it is not a mechanical force.**

external circuit 中，conventional current 自 high potential 流向 low potential；source 内部的 non-electrostatic process 把 charge 重新提升到 high potential。

### Knowledge Point 11: A Real Battery Is an Ideal Source Plus Internal Resistance

**Transcript:** 00:34:50-00:42:26

用 circuit model 表示 real battery：

~~~text
ideal EMF source E
in series with internal resistance r
~~~

discharging current $I$ 时：

$$
\boxed{V_{\text{term}}=\mathcal E-Ir}
$$

external load $R$：

$$
V_{\text{term}}=IR
$$

因此 single-loop circuit：

$$
\mathcal E-Ir-IR=0
$$

$$
\boxed{I=\frac{\mathcal E}{R+r}}
$$

> **Internal resistance makes terminal voltage fall below EMF while the battery supplies current.**

### Knowledge Point 12: Terminal Voltage Can Be Found from Either Side

课堂例子：

$$
\mathcal E=12\ \mathrm V,
\quad
r=2\ \Omega,
\quad
R=4\ \Omega
$$

$$
I=\frac{12}{2+4}=2\ \mathrm A
$$

source side：

$$
V_{\text{term}}=12-(2)(2)=8\ \mathrm V
$$

load side：

$$
V_{\text{term}}=IR=(2)(4)=8\ \mathrm V
$$

两条路径必须一致，因为 ideal wires 上没有 potential drop。

### Knowledge Point 13: Source Power Splits into Useful Output and Internal Heating

source conversion rate：

$$
P_{\text{source}}=\mathcal EI
$$

internal heating：

$$
P_{\text{internal}}=I^2r
$$

terminal output：

$$
P_{\text{out}}=IV_{\text{term}}=I(\mathcal E-Ir)
$$

所以：

$$
\boxed{\mathcal EI=IV_{\text{term}}+I^2r}
$$

## 7. Ideal and Real Meters / 理想与真实电表

### Knowledge Point 14: Ammeter Goes in Series; Voltmeter Goes in Parallel

**Transcript:** 00:37:21-00:44:36

ideal ammeter：

$$
R_A=0
$$

必须 series connection，才能让被测 branch current 穿过 meter。

ideal voltmeter：

$$
R_V\to\infty
$$

必须 parallel connection，读取两节点 potential difference，同时尽量不抽走 current。

> **An ammeter should not impede the measured current; a voltmeter should not draw current from the measured circuit.**

real meters 有 finite resistance，因此接入后会改变原 circuit。精确测量需要把 meter resistance 一并纳入 network。

## 8. Converting a Galvanometer / 灵敏电流计改装

### Knowledge Point 15: A Galvanometer Is the Physical Core

**Transcript:** 00:42:26-00:55:59 and 00:58:58-01:11:25

galvanometer 有：

- internal resistance $R_g$；
- full-scale current $I_g$。

当 through-coil current 达到 $I_g$，pointer 达到 full-scale deflection。通过外接 resistor，可以让盒子端口表现为更大量程的 ammeter 或 voltmeter。

### Knowledge Point 16: Add a Parallel Shunt to Make an Ammeter

目标 full-scale current $I_A>I_g$。让 excess current 通过 parallel shunt：

$$
I_{\text{sh}}=I_A-I_g
$$

parallel voltage equality：

$$
I_gR_g=I_{\text{sh}}R_{\text{sh}}
$$

所以：

$$
\boxed{R_{\text{sh}}=\frac{I_gR_g}{I_A-I_g}}
$$

$R_{\text{sh}}$ 很小，使 overall ammeter resistance 也很小。

> **A shunt resistor bypasses most of the current around the sensitive galvanometer.**

课堂例子：$I_g=1\ \mathrm{mA}$、$R_g=20\ \Omega$，改成 $50\ \mathrm{mA}$ ammeter：

$$
R_{\text{sh}}
=\frac{(1\ \mathrm{mA})(20\ \Omega)}{49\ \mathrm{mA}}
=0.408\ \Omega
$$

### Knowledge Point 17: Add a Series Resistor to Make a Voltmeter

目标 full-scale voltage $V_V$。需要 total resistance：

$$
R_{\text{total}}=\frac{V_V}{I_g}
$$

series resistor：

$$
\boxed{R_s=\frac{V_V}{I_g}-R_g}
$$

$R_s$ 很大，使 overall voltmeter resistance 很大。

> **A large series resistor limits the galvanometer current while the meter spans a large voltage.**

课堂例子：$I_g=1\ \mathrm{mA}$、$R_g=20\ \Omega$，改成 $10\ \mathrm V$ voltmeter：

$$
R_s=\frac{10}{0.001}-20=9980\ \Omega
$$

### Knowledge Point 18: Meter Range and Resistance Move in Opposite Ways

- larger-range ammeter -> smaller shunt -> smaller total resistance；
- larger-range voltmeter -> larger series resistor -> larger total resistance。

这解释了理想模型：ammeter 趋近 short wire，voltmeter 趋近 open branch。

## 9. Wheatstone Bridge / 惠斯通电桥

### Knowledge Point 19: Balance Means the Midpoints Have Equal Potential

**Transcript:** 01:12:14-01:18:24

bridge galvanometer current 为 zero：

$$
I_g=0
$$

说明两个 midpoint equipotential：

$$
V_C=V_D
$$

在标准 labeling 下，balance condition：

$$
\boxed{\frac{R_1}{R_2}=\frac{R_3}{R_x}}
$$

因此：

$$
\boxed{R_x=\frac{R_2R_3}{R_1}}
$$

具体 ratio 必须与图中 resistor position 对应，不能脱离 labeling 死背交叉乘法。

> **A balanced Wheatstone bridge detects equality of midpoint potentials through a zero-current condition.**

### Knowledge Point 20: Null Measurement Removes Meter Loading

balance 时 galvanometer branch 无 current，因此 galvanometer resistance 不影响 balance equation。这是 null measurement 的优势：不依赖 meter 的精确 resistance，也能测 unknown resistor。

## 10. Why Kirchhoff's Rules Are Needed / 为什么需要基尔霍夫定律

### Knowledge Point 21: Not Every Network Can Be Reduced by Inspection

**Transcript:** 01:29:07-01:32:21

simple network 可反复识别 series/parallel；但 bridge network、multiple sources、nested branches 中：

- 某些 resistors neither clearly series nor parallel；
- branch-current direction 可能不能凭直觉判断；
- multiple sources 可能相互推动或相互对抗。

此时不再依靠“看起来像串并联”，而是对 nodes 与 loops 写 conservation equations。

> **Kirchhoff's rules solve complex circuits by enforcing charge conservation at nodes and energy conservation around loops.**

## 11. Kirchhoff's Junction Rule / 基尔霍夫节点定律

### Knowledge Point 22: Net Current into a Junction Is Zero

**Transcript:** 01:32:21-01:35:48

steady state 中，junction 不持续积累 charge：

$$
\boxed{\sum I_{\text{in}}=\sum I_{\text{out}}}
$$

signed form：

$$
\boxed{\sum_k I_k=0}
$$

只要提前统一 convention，例如 entering positive、leaving negative。

> **The junction rule is charge conservation applied to steady current.**

若 node 持续有 more current in than out，charge would accumulate，local potential 会改变，系统就不是 steady state。

### Knowledge Point 23: Unknown Current Direction May Be Chosen Arbitrarily

对无法判断的 branch：

1. 任意画一个 current arrow；
2. 全程按该 arrow 写方程；
3. 解得 $I>0$：真实方向与 arrow 一致；
4. 解得 $I<0$：真实方向与 arrow 相反，magnitude 是 $|I|$。

> **A negative current is not a failure; it corrects the assumed direction.**

不要在解题中途因为“感觉方向不对”随意翻 arrow，会破坏方程的 sign consistency。

## 12. Kirchhoff's Loop Rule / 基尔霍夫回路定律

### Knowledge Point 24: Potential Changes Sum to Zero Around a Closed Loop

**Transcript:** 01:35:48-01:38:02

沿 closed loop 回到原点，potential 是 single-valued state quantity：

$$
\boxed{\sum\Delta V=0}
$$

等价于每单位 charge 的 energy conservation：source 提升的 energy 等于 components 消耗或转换的 energy。

> **The loop rule is energy conservation written as a sum of potential rises and drops.**

### Knowledge Point 25: Choose a Loop Direction Before Assigning Signs

loop traversal 可 clockwise 或 counterclockwise，未必与任一 branch current 同向。方向选定后始终保持一致。

#### Crossing an ideal source

| traversal | potential change |
|---|---:|
| negative terminal -> positive terminal | $+\mathcal E$ |
| positive terminal -> negative terminal | $-\mathcal E$ |

#### Crossing a resistor

| traversal | potential change |
|---|---:|
| along assumed current | $-IR$ |
| opposite assumed current | $+IR$ |

internal resistance $r$ 与普通 resistor 使用同一规则。

> **For a resistor, follow the current for a drop and move against the current for a rise.**

### Knowledge Point 26: Reversing the Loop Direction Reverses Every Sign

若一个方向得到：

$$
+\mathcal E-I(R+r)=0
$$

反向 traversal：

$$
-\mathcal E+I(R+r)=0
$$

两式相差整体负号，给出同一 physical result。方向本身无所谓，重要的是每个 element sign consistency。

## 13. Kirchhoff Calculation Strategy / 基尔霍夫计算技巧

### Knowledge Point 27: Label Nodes, Branches, and Independent Currents First

推荐动作：

1. 标出 essential nodes；
2. 每条 branch 只定义一个 current variable；
3. arrow 可任意，但一个 branch 只保留一个方向；
4. 标出每个 source 的 polarity；
5. 标出 internal resistance 与 external resistance；
6. 再开始写 equations。

### Knowledge Point 28: Use Only Independent Equations

connected network 若有 $N$ 个 essential nodes、$B$ 条 branches：

- independent junction equations：$N-1$；
- independent loop equations：$B-N+1$。

总 independent equations：

$$
(N-1)+(B-N+1)=B
$$

刚好可解 $B$ 个 branch currents。

课堂强调的“三个 loops 只需选两个”就是 equation dependency：第三个 loop equation 可由前两个线性组合得到。

### Knowledge Point 29: Solve Symbols Before Interpreting Direction

将方程整理成 linear system：

$$
a_1I_1+b_1I_2+c_1I_3=d_1
$$

$$
a_2I_1+b_2I_2+c_2I_3=d_2
$$

$$
a_3I_1+b_3I_2+c_3I_3=d_3
$$

先按代数求 signed currents，最后再解释 direction。不要为了避免 negative answer 提前改变 equation。

### Knowledge Point 30: Compute Node Voltage by Any Convenient Path

求 $V_B-V_A$：

1. 从 A 选一条到 B 的 path；
2. 沿路累加 sources 与 resistor rises/drops；
3. 得到 signed potential difference；
4. 若问 voltmeter reading，通常报告 magnitude。

不同 path 必须给出相同 $V_B-V_A$；这也是检查 Kirchhoff signs 的强方法。

## 14. Batteries Supplying Power or Being Charged / 电池放电与被充电

### Knowledge Point 31: Current Direction at the Positive Terminal Determines Power Role

对 battery：

- current leaves positive terminal：battery supplies electric power；
- current enters positive terminal：battery absorbs power and is being charged。

使用 passive sign convention：

$$
p=vi
$$

current entering positive-labeled terminal 时 $p>0$ 表示 absorption；$p<0$ 表示 delivery。

> **A source can have negative delivered power when another source drives current into its positive terminal.**

### Knowledge Point 32: Multiple Sources Can Oppose One Another

若 two sources oppose，net driving EMF 不是简单相加，而由 loop traversal 的 polarities 决定：

$$
\sum\mathcal E=\mathcal E_1-\mathcal E_2
$$

larger source 可驱动 current through smaller source，使 smaller source 被充电。remaining energy 由 external/internal resistors dissipate。

## 15. Deep Phrases / 深句对应表

| English sentence | 中文对应理解 |
|---|---|
| Voltage is energy transferred per unit charge. | 每库仑 charge 经过元件时转移多少焦耳能量，就是电压。 |
| Power is the rate of energy transfer. | 功率不是总能量，而是每秒转化多少能量。 |
| Bulb brightness is controlled by power. | 灯泡亮度看单位时间放出的能量，不单看电流或电压。 |
| EMF is not a force. | 电动势单位是 volt，本质是 source 每单位电荷提供的能量。 |
| Internal resistance reduces terminal voltage under load. | 电池输出电流时，内阻先消耗一部分电压。 |
| An ammeter uses a low-resistance shunt. | 并联小电阻让大部分 current 绕过灵敏表头。 |
| A voltmeter uses a high series resistance. | 串联大电阻限制表头电流，从而承受较大 voltage。 |
| A balanced bridge connects equal-potential nodes. | 电桥中间支路零电流意味着两个中点同电势。 |
| The junction rule is charge conservation. | 节点不能持续积累 charge，因此流入等于流出。 |
| The loop rule is energy conservation. | 绕闭合回路一圈回到原点，电势升降代数和为零。 |
| Negative current reverses an assumption. | 电流算成负值不是算错，只说明真实方向与箭头相反。 |
| Loop direction is arbitrary; sign consistency is not. | 回路顺逆时针都可以，但每个元件的正负号必须一致。 |

## 16. Common Mistakes / 易错点

1. 用 current 或 voltage 单独判断 bulb brightness；应比较 power。
2. 把 $P=I^2R$ 和 $P=V^2/R$ 用在所有 devices；它们要求 Ohmic/resistive relation。
3. 认为 parallel 新增元件只是“分走固定 power”；ideal source 的 total current 与 total power 会改变。
4. 把 EMF 当 mechanical force。
5. real battery 输出时仍令 terminal voltage 等于 EMF。
6. 忘记 internal resistance 也产生 $I^2r$ heating。
7. ammeter 并联或 voltmeter 串联。
8. 把 real voltmeter 当 infinite resistance，忽略 loading effect。
9. 改 ammeter 时串联小电阻；正确是 parallel shunt。
10. 改 voltmeter 时并联大电阻；正确是 series resistor。
11. Wheatstone bridge ratio 不看图中 resistor positions 就机械交叉相乘。
12. 把 bridge middle current zero 误解为整个 circuit current zero。
13. 对复杂 network 强行找 series/parallel，忽略 shared nodes 与 branches。
14. 不知道 current direction 就停止；可任意假设并由 sign 修正。
15. negative current 被当成 algebra error。
16. junction equation 同时把同一 current 写成 in 与 out。
17. 写 loop equation 前没有固定 traversal direction。
18. 穿过 source 时不看 terminal polarity。
19. 穿过 resistor 时不比较 traversal 与 current direction。
20. 重复写 dependent loop equations，却以为增加了新信息。
21. 求 $V_B-V_A$ 时只报告 absolute value，丢失题目要求的顺序符号。
22. battery 被充电时仍把它当作 supplying positive power。

## 17. Problem-Solving Templates / 题型动作

### A. Power and brightness

1. 先化简 circuit 求 branch $I$ 或 $\Delta V$。
2. identical series bulbs：优先 $P=I^2R$。
3. identical parallel bulbs：优先 $P=(\Delta V)^2/R$。
4. 开关变化后重新计算 source total current，不假设 total power fixed。
5. 比较每个 bulb 的 power ratio。

### B. Real battery

1. 画 ideal EMF $\mathcal E$ 与 series internal resistance $r$。
2. single loop：$I=\mathcal E/(R+r)$。
3. discharging：$V_{\text{term}}=\mathcal E-Ir$。
4. 用 $V_{\text{term}}=IR$ 交叉检查。
5. 检查 $\mathcal EI=I^2R+I^2r$。

### C. Meter conversion

1. 写 galvanometer $I_g,R_g$。
2. ammeter：parallel shunt，$I_{\text{sh}}=I_A-I_g$。
3. 用 $I_gR_g=I_{\text{sh}}R_{\text{sh}}$。
4. voltmeter：series resistor。
5. 用 $R_s=V_V/I_g-R_g$。
6. 检查 ammeter total resistance small、voltmeter total resistance large。

### D. Kirchhoff network

1. 标 nodes、branches、source polarities。
2. 每条 unknown branch 任意设 current arrow。
3. 写 $N-1$ 个 independent junction equations。
4. 选 $B-N+1$ 个 independent loops。
5. 每个 loop 先标 traversal direction。
6. source：$-\to+$ 写 $+\mathcal E$，$+\to-$ 写 $-\mathcal E$。
7. resistor：顺 current 写 $-IR$，逆 current 写 $+IR$。
8. 联立求 signed currents。
9. negative current 反转真实方向。
10. 用另一路径的 node voltage 或 power balance 检查。

### E. Choose independent loops

1. 先画一个 spanning path，识别新增 branch 形成的基本 loops。
2. 不把“大外环”和内部两个小环全部当独立方程。
3. 若一个 loop equation 可由其他 equations 相加得到，就删除它。
4. equations 数量只需等于 unknown branch currents 数量。

## 18. After-Class Compression / 课后压缩版

只记住十五句话：

1. $dU=dq\,\Delta V$。
2. $P=I\Delta V$；resistor 中还有 $P=I^2R=(\Delta V)^2/R$。
3. bulb brightness 比较 power。
4. $\Delta U=\int Pdt$。
5. EMF 是 source 每单位 charge 提供的 energy，不是 force。
6. real battery = ideal EMF + internal resistance。
7. discharging：$V_{\text{term}}=\mathcal E-Ir$。
8. ammeter series and low resistance；voltmeter parallel and high resistance。
9. galvanometer 并联 shunt 变 ammeter，串联 large resistor 变 voltmeter。
10. balanced Wheatstone bridge 中 midpoint potentials equal，middle current zero。
11. junction rule：$\sum I_{\text{in}}=\sum I_{\text{out}}$。
12. loop rule：$\sum\Delta V=0$。
13. source $-\to+$ 是 rise；resistor 顺 current 是 drop。
14. unknown current direction 可任意设，negative result 自动反向。
15. complex circuit 的核心是独立 junction/loop equations，而不是强行识别串并联。

## 19. Video Companion / 搭配课堂观看

| 时间 | 观看重点 |
|---|---|
| 00:01:00-00:04:40 | 第 8 讲回顾：微观 Ohm's law、电流密度、串并联 |
| 00:04:40-00:11:19 | 从 energy 推出 electric power 三公式 |
| 00:11:19-00:18:23 | identical bulbs 的 series/parallel power |
| 00:20:31-00:28:39 | 开关变化、等效电阻、分压与 brightness |
| 00:28:39-00:34:50 | EMF 的物理意义与 source 内部能量提升 |
| 00:34:50-00:42:26 | internal resistance 与 terminal voltage |
| 00:42:26-00:55:59 | ideal/real meters 与表头改装推导 |
| 00:58:58-01:11:25 | ammeter/voltmeter range conversion 练习 |
| 01:12:14-01:18:24 | Wheatstone bridge 与 balance condition |
| 01:29:07-01:32:21 | 为什么复杂 circuit 需要 Kirchhoff rules |
| 01:32:21-01:35:48 | junction rule 与任意假设 branch direction |
| 01:35:48-01:41:15 | loop rule、能量守恒与完整 sign table |
| 01:43:29-01:53:00 | multiple sources、internal resistance 与 node voltage |
| 01:53:00-02:04:29 | junction + two independent loops 联立求解 |

## 20. Connections / 知识网络

### Lecture Sequence

- [[AP电磁学第8次正课-介电质电流与电阻]]
- Next: [[AP电磁学第10次正课-等效电容与RC电路]]

### Core Circuit Branch

- [[Electric Circuits]]
- [[Electric Current]]
- [[Resistance and Resistivity]]
- [[Electric Power]]
- [[EMF and Internal Resistance]]
- [[Electrical Meters and Wheatstone Bridge]]
- [[Kirchhoff's Rules]]

### Conservation and Potential Branch

- [[Charge Conservation]] -> junction rule
- [[Electric Potential]] -> loop potential rises and drops
- energy conservation -> loop rule and power balance

### Calculus Bridge

- [[Integrals]] turns variable power into total energy:

$$
\Delta U=\int P(t)dt
$$

本节把 circuit analysis 统一成两类守恒：**节点上守恒 charge，回路中守恒 energy。** 电流方向和回路方向都可由我们选择，但 equation signs 必须忠实于这个选择。
