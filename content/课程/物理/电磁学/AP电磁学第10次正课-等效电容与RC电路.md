---
title: "AP电磁学第10次正课 - 等效电容与 RC 电路"
description: "A connected bilingual learning note about AP电磁学第10次正课 - 等效电容与 RC 电路."
publish: true
tags: [open-notes, physics-electromagnetism]
---
# AP电磁学第10次正课 - 等效电容与 RC 电路

## Reading Guide / 阅读说明

这份 the course transcript 开头回顾并完成了上一节的 Kirchhoff 多回路计算，随后系统讲解 capacitor combinations、RC charging/discharging 与 switch analysis，结尾明确说“下节课该讲磁场了”。

因此它与 [[AP电磁学第9次正课-电功率电表与基尔霍夫定律]] 连续，按目前已确认的课程序列记为第 10 次正课。

> [!summary] 一句话主线
> **A capacitor network determines how much charge can be stored; an RC circuit determines how that charge changes with time.**
>
> 电容组合决定“能存多少”，RC 电路决定“以多快的速度充入或放出”。

## 1. What This Lecture Is About / 这节课在讲什么

本节有三条连续脉络：

1. 用上一节的 [[Kirchhoff's Rules]] 完成多回路电流计算；
2. 从 [[Capacitors]] 的定义与几何决定式推出串并联等效电容；
3. 把 Kirchhoff loop rule、$I=dq/dt$ 与指数函数连接起来，得到 [[RC Circuits]] 的充放电规律。

整节课最重要的不是孤立地背四个指数公式，而是建立以下时间图景：

~~~text
switch changes
-> circuit topology changes
-> identify t = 0+ and t -> infinity
-> capacitor voltage cannot jump
-> current may jump
-> exponential transition with time constant tau = RC
~~~

## 2. Class Flow / 课堂脉络

1. 回顾电表、功率与 Kirchhoff rules。
2. 完成上一节遗留的双回路电流题。
3. 定义 capacitors in parallel 与 capacitors in series。
4. 推出等效电容公式，并用 geometry 建立直觉。
5. 计算混联电容网络中的 $C_{\text{eq}}$、各电容电荷与电压。
6. 解释串联电容中“小电容分到大电压”。
7. 用灯泡现象进入 RC charging 与 discharging。
8. 从 loop equation 写出 RC differential equation。
9. 得到 $q(t)$、$i(t)$、$V_C(t)$ 与 $V_R(t)$。
10. 定义 time constant $\tau=RC$。
11. 比较不同 RC 组合的充电快慢。
12. 分析放电曲线、稳态与开关瞬间。
13. 用 2017 AP 真题整合图像、开关与能量分配。

## 3. Kirchhoff Review Problem / 基尔霍夫综合题回顾

### Knowledge Point 1: A Shared Branch Carries the Algebraic Difference of Mesh Currents

课堂设左、右两个 mesh currents 分别为 $I_1$ 与 $I_2$，且两者在中间电阻 $R_2$ 中方向相反。

若先假设中间支路真实电流向上，则：

$$
\boxed{I_{R_2}=I_1-I_2}
$$

这里的减法不是凭图形猜测，而是因为两个 mesh currents 对该支路贡献方向相反。

> **A shared branch carries the algebraic sum of all mesh-current contributions.**

中文理解：同一支路若被多个 mesh 共用，先根据每个 mesh 在该支路中的方向确定正负，再做代数相加。

### Knowledge Point 2: Traversal Direction and Current Direction Are Different Choices

在写 loop equation 时，需要同时区分：

- assumed current direction：假设的支路电流方向；
- loop traversal direction：列方程时绕回路的计算方向。

穿过 resistor：

| traversal relative to current | potential change |
|---|---:|
| along current | $-IR$ |
| opposite current | $+IR$ |

穿过 ideal source：

| crossing | potential change |
|---|---:|
| negative to positive terminal | $+\mathcal E$ |
| positive to negative terminal | $-\mathcal E$ |

### Knowledge Point 3: An Outer Loop Can Avoid a Complicated Shared Branch

课堂指出：三个可见 loops 不代表必须全部使用。可选左 loop 加右 loop，也可选一个内 loop 加 outer loop。

若 outer loop 不经过共享支路 $R_2$，列式会更简单。

> **Choose independent loops that minimize algebra, not loops that merely look obvious.**

中文理解：正确的 loop 不止一种；优先选能减少 shared-branch 表达式的独立回路。

课堂结果：

$$
I_1=\frac{12}{11}\ \mathrm A,
\qquad
I_2=\frac{7}{11}\ \mathrm A
$$

所以：

$$
\boxed{
I_{R_2}=I_1-I_2=\frac{5}{11}\ \mathrm A
}
$$

结果为正，说明最初假设的中间支路方向正确。

## 4. Capacitors in Parallel / 电容器并联

### Knowledge Point 4: Parallel Capacitors Share the Same Voltage

并联电容连接在同一对 nodes 之间，因此：

$$
\Delta V_1=\Delta V_2=\cdots=\Delta V
$$

每个电容储存的电荷为：

$$
Q_i=C_i\Delta V
$$

总电荷：

$$
Q_{\text{total}}=\sum_i Q_i
$$

代入：

$$
Q_{\text{total}}
=\left(\sum_i C_i\right)\Delta V
$$

由 $Q_{\text{total}}=C_{\text{eq}}\Delta V$：

$$
\boxed{
C_{\text{eq}}=\sum_i C_i
}
$$

### Knowledge Point 5: Parallel Connection Acts Like Increasing Plate Area

平行板电容：

$$
C=\frac{\epsilon A}{d}
$$

把多个电容并联，可直观理解为有效 plate area 增大，而 plate separation 不变。

因此：

> **Parallel capacitors add area, so their capacitances add directly.**

中文理解：并联像把极板面积拼大，储存电荷的能力增强。

并联结论：

- same voltage；
- charges generally different；
- equivalent capacitance larger than every individual capacitance。

## 5. Capacitors in Series / 电容器串联

### Knowledge Point 6: Series Capacitors Carry Equal Charge Magnitudes

串联电容中间连接的 isolated conductor 起初净电荷为零。

由于 [[Charge Conservation]]，中间 conductor 一侧出现 $-Q$，另一侧必须出现 $+Q$，所以每个 series capacitor 的电荷 magnitude 相同：

$$
Q_1=Q_2=\cdots=Q
$$

总电压为：

$$
\Delta V=\sum_i \Delta V_i
$$

又因为：

$$
\Delta V_i=\frac{Q}{C_i}
$$

所以：

$$
\Delta V
=Q\sum_i\frac{1}{C_i}
$$

与 $\Delta V=Q/C_{\text{eq}}$ 比较：

$$
\boxed{
\frac{1}{C_{\text{eq}}}
=\sum_i\frac{1}{C_i}
}
$$

两个电容时：

$$
\boxed{
C_{\text{eq}}=\frac{C_1C_2}{C_1+C_2}
}
$$

### Knowledge Point 7: Series Connection Acts Like Increasing Plate Separation

把串联电容中间的相邻 plates 看作一个整体 conductor，可形成“有效极板距离增大”的直觉。

由于 $C\propto 1/d$，串联使 equivalent capacitance 下降。

> **Series capacitors add separation, so reciprocal capacitances add.**

中文理解：串联像把有效极板拉远，因此总电容比任一单个电容都小。

串联结论：

- same charge magnitude；
- voltages generally different；
- equivalent capacitance smaller than every individual capacitance。

## 6. Voltage Division Across Series Capacitors / 串联电容分压

### Knowledge Point 8: The Smaller Capacitor Gets the Larger Voltage

series capacitors 有相同 $Q$，而：

$$
\Delta V_i=\frac{Q}{C_i}
$$

因此：

$$
\boxed{
\Delta V_i\propto\frac{1}{C_i}
}
$$

两个串联电容：

$$
\frac{\Delta V_1}{\Delta V_2}
=\frac{C_2}{C_1}
$$

> **In series, capacitors divide voltage inversely to capacitance.**

中文理解：串联时电荷相同，小电容要产生同样的 $Q$，必须对应更大的 voltage。

这与 series resistors 的 voltage division 不同：

- series resistors：$\Delta V_i\propto R_i$；
- series capacitors：$\Delta V_i\propto 1/C_i$。

## 7. Mixed Capacitor Networks / 混联电容网络

### Knowledge Point 9: Reduce the Network Before Recovering Local Quantities

混联题的标准顺序：

1. 标出真正相同的 two nodes；
2. 从最内层识别 series 或 parallel；
3. 求 $C_{\text{eq}}$；
4. 用 source voltage 求 network total charge；
5. 反向展开，恢复各支路的 $Q_i$ 与 $\Delta V_i$；
6. 用 $Q_i=C_i\Delta V_i$ 交叉检查。

### Knowledge Point 10: Do Not Apply Resistor Rules to Capacitors by Habit

resistors 与 capacitors 的等效公式正好“相反”：

| connection | resistors | capacitors |
|---|---|---|
| series | $R_{\text{eq}}=\sum R_i$ | $1/C_{\text{eq}}=\sum 1/C_i$ |
| parallel | $1/R_{\text{eq}}=\sum 1/R_i$ | $C_{\text{eq}}=\sum C_i$ |

根本原因不是口诀，而是约束量不同：

- resistor series 保持 same current；
- capacitor series 保持 same charge magnitude；
- resistor parallel 保持 same voltage；
- capacitor parallel 也保持 same voltage。

## 8. Worked Capacitor Example / 课堂混联例题

### Knowledge Point 11: Parallel Branches Receive the Full Node-to-Node Voltage

课堂网络中，一个 $30\ \mu\mathrm F$ 与一个 $60\ \mu\mathrm F$ 电容串联，整体与一个 $90\ \mu\mathrm F$ 电容并联，并接在 $180\ \mathrm V$ source 上。

串联支路：

$$
\frac{1}{C_{12}}
=\frac{1}{30}+\frac{1}{60}
$$

$$
C_{12}=20\ \mu\mathrm F
$$

整个 series branch 跨接 source，因此：

$$
\Delta V_{12}=180\ \mathrm V
$$

支路电荷：

$$
Q_{12}=C_{12}\Delta V_{12}
=(20\ \mu\mathrm F)(180\ \mathrm V)
=3600\ \mu\mathrm C
$$

series capacitors 同电荷：

$$
Q_1=Q_2=3600\ \mu\mathrm C
$$

所以：

$$
\Delta V_1
=\frac{3600\ \mu\mathrm C}{30\ \mu\mathrm F}
=120\ \mathrm V
$$

$$
\Delta V_2
=\frac{3600\ \mu\mathrm C}{60\ \mu\mathrm F}
=60\ \mathrm V
$$

验证：

$$
\Delta V_1+\Delta V_2=180\ \mathrm V
$$

$90\ \mu\mathrm F$ parallel branch 直接承受 $180\ \mathrm V$：

$$
Q_3=(90\ \mu\mathrm F)(180\ \mathrm V)
=16200\ \mu\mathrm C
$$

> [!important] 这道题的核心
> 并联先看 same voltage，串联再看 same charge。不要一上来按 capacitance 数值直接“分电压”。

## 9. Entering RC Circuits / 进入 RC 电路

### Knowledge Point 12: An RC Circuit Contains Resistance and Capacitance

RC circuit 同时包含：

- resistance $R$：限制 charge flow；
- capacitance $C$：储存 separated charge 与 electric energy。

它是第一个真正体现“电路状态随时间变化”的模型。

### Knowledge Point 13: A Capacitor Is Not Always an Open Circuit

课堂用灯泡建立直觉：

- 未充电 capacitor 接入 source 的瞬间，回路中有较大 current，灯泡先亮；
- charging 过程中 current 逐渐减小，灯泡逐渐变暗；
- fully charged 后，steady DC current 为零，灯泡熄灭。

若移除 source 并让 charged capacitor 经过灯泡放电：

- capacitor 暂时扮演 source；
- 灯泡先亮，然后逐渐变暗；
- 电荷释放完后熄灭。

> **A capacitor behaves like a wire at the first instant and like an open circuit after a long time in DC.**

中文理解：对初始未充电电容，$t=0^+$ 时近似通路；在 DC steady state，$t\to\infty$ 时近似断路。

这里的“像导线”与“像断路”是端点模型，不代表整个 charging interval 内它就是普通导线或开关。

## 10. RC Charging Equation / RC 充电方程

### Knowledge Point 14: Kirchhoff's Loop Rule Produces the Differential Equation

对 ideal source $\mathcal E$、resistor $R$、capacitor $C$ 的 series charging circuit：

$$
\mathcal E-iR-\frac{q}{C}=0
$$

又因为：

$$
i=\frac{dq}{dt}
$$

所以：

$$
\boxed{
R\frac{dq}{dt}+\frac{q}{C}=\mathcal E
}
$$

这是 first-order [[Differential Equations|differential equation]]。

它表达一个动态 balance：

$$
\text{source voltage}
=\text{resistor voltage}
+\text{capacitor voltage}
$$

### Knowledge Point 15: Charging Approaches the Final State Exponentially

初始未充电，即 $q(0)=0$。解为：

$$
\boxed{
q(t)=Q_f\left(1-e^{-t/RC}\right)
}
$$

其中：

$$
\boxed{Q_f=C\mathcal E}
$$

因此：

$$
\boxed{
V_C(t)=\mathcal E\left(1-e^{-t/RC}\right)
}
$$

$q(t)$ 与 $V_C(t)$ 从 $0$ 增加并渐近于 final value。

### Knowledge Point 16: Current Is the Time Derivative of Charge

由 [[Derivatives]]：

$$
i(t)=\frac{dq}{dt}
$$

所以：

$$
\boxed{
i(t)=I_0e^{-t/RC}
}
$$

其中：

$$
\boxed{
I_0=\frac{\mathcal E}{R}
}
$$

resistor voltage：

$$
\boxed{
V_R(t)=iR=\mathcal E e^{-t/RC}
}
$$

任意时刻：

$$
\boxed{
V_R(t)+V_C(t)=\mathcal E
}
$$

> **During charging, capacitor voltage rises while current and resistor voltage decay.**

中文理解：充电时 $q$ 和 $V_C$ 上升，$i$ 与 $V_R$ 下降；它们不是一起增大。

## 11. Time Constant / 时间常数

### Knowledge Point 17: The Time Constant Sets the Clock of the Circuit

定义：

$$
\boxed{\tau=RC}
$$

单位检查：

$$
\Omega\cdot\mathrm F
=\frac{\mathrm V}{\mathrm A}\cdot\frac{\mathrm C}{\mathrm V}
=\frac{\mathrm C}{\mathrm A}
=\mathrm s
$$

所以 $\tau$ 确实是时间。

> **The time constant does not set the final value; it sets how quickly the final value is approached.**

中文理解：$\tau$ 决定快慢，不直接决定最终充到多少；final charge 由 $C\mathcal E$ 决定。

### Knowledge Point 18: One Time Constant Means 63 Percent Charged

当 $t=\tau$：

$$
\frac{q(\tau)}{Q_f}
=1-e^{-1}
\approx0.632
$$

因此：

- charge reaches $63.2\%$ of final value；
- capacitor voltage reaches $63.2\%$ of final value；
- current falls to $e^{-1}\approx36.8\%$ of initial value；
- resistor voltage falls to $36.8\%$ of initial value。

常用近似：

| time | charging fraction $1-e^{-t/\tau}$ | remaining current fraction $e^{-t/\tau}$ |
|---:|---:|---:|
| $\tau$ | $63.2\%$ | $36.8\%$ |
| $2\tau$ | $86.5\%$ | $13.5\%$ |
| $3\tau$ | $95.0\%$ | $5.0\%$ |
| $4\tau$ | $98.2\%$ | $1.8\%$ |
| $5\tau$ | $99.3\%$ | $0.7\%$ |

工程与考试语境中常把 $5\tau$ 视为“practically fully charged”。

### Knowledge Point 19: Half-Charge Time Is Not Equal to Tau

若：

$$
\frac{q}{Q_f}=\frac12
$$

则：

$$
1-e^{-t/\tau}=\frac12
$$

$$
e^{-t/\tau}=\frac12
$$

$$
\boxed{
t_{1/2}=\tau\ln2
}
$$

所以 half-charge time 约为 $0.693\tau$，不是 $\tau$。

## 12. Initial and Final States / 初态与终态

### Knowledge Point 20: At the First Instant, an Initially Uncharged Capacitor Has Zero Voltage

在 $t=0^+$：

$$
q=0,\qquad V_C=\frac{q}{C}=0
$$

所以：

$$
i(0^+)=\frac{\mathcal E}{R}
$$

此时所有 source voltage 暂时落在 resistor 上。

### Knowledge Point 21: After a Long Time, DC Current Is Zero

在 $t\to\infty$：

$$
i\to0
$$

因此：

$$
V_R=iR\to0
$$

且：

$$
V_C\to\mathcal E,
\qquad
q\to C\mathcal E
$$

> **No current means no voltage drop across an ordinary resistor.**

中文理解：steady state 时不能凭电路图“看见一个电阻”就硬写 $IR$ voltage drop；若 $I=0$，电阻两端电势差就是零。

## 13. RC Discharging / RC 放电

### Knowledge Point 22: A Charged Capacitor Can Temporarily Act as a Source

移除 battery 后，让初始电荷 $Q_0$ 的 capacitor 通过 $R$ 放电。

由于 capacitor charge magnitude 在减小，若把 discharge current magnitude 定义为正：

$$
i=-\frac{dq}{dt}
$$

loop equation 可写为：

$$
\frac{q}{C}-iR=0
$$

得到：

$$
\frac{dq}{dt}=-\frac{q}{RC}
$$

### Knowledge Point 23: Discharge Is Pure Exponential Decay

电荷：

$$
\boxed{
q(t)=Q_0e^{-t/RC}
}
$$

电容电压：

$$
\boxed{
V_C(t)=V_0e^{-t/RC}
}
$$

current magnitude：

$$
\boxed{
i(t)=I_0e^{-t/RC}
}
$$

其中：

$$
I_0=\frac{V_0}{R}
$$

当 $t=\tau$：

$$
\frac{q}{Q_0}
=\frac{V_C}{V_0}
=\frac{i}{I_0}
=e^{-1}
\approx0.368
$$

### Knowledge Point 24: Charge and Discharge Share the Same Clock

同一个 effective $R$ 和 $C$ 下：

- charging 的 missing fraction 是 $e^{-t/\tau}$；
- discharging 的 remaining fraction 是 $e^{-t/\tau}$。

因此 charging 到 $50\%$ 与 discharging 到 $50\%$ 所需时间相同：

$$
t=\tau\ln2
$$

## 14. Switching Analysis / 开关题分析

### Knowledge Point 25: Analyze Three Times, Not One Circuit

开关题至少画三个等效状态：

1. $t=0^-$：switch 改变前；
2. $t=0^+$：switch 刚改变后；
3. $t\to\infty$：新状态稳定后。

每个时刻的 topology 可能不同，不能拿同一张图从头算到尾。

### Knowledge Point 26: Capacitor Voltage Cannot Change Instantaneously

因为：

$$
q=CV_C
$$

若 finite capacitance 的 voltage 瞬间跳变，就要求 charge 瞬间跳变，也意味着 infinite current。

理想常规电路中：

$$
\boxed{
V_C(0^+)=V_C(0^-)
}
$$

> **A capacitor preserves voltage across an instant, not current.**

中文理解：开关瞬间连续的是 capacitor voltage；branch current 可以因为 topology 改变而突然变化。

### Knowledge Point 27: Current Can Jump When the Topology Changes

课堂真题中，开关断开前，某 resistor 直接跨在 source 的 $V_0$ 上：

$$
i_{\text{before}}=\frac{V_0}{R_2}
$$

断开后，charged capacitor 的 initial voltage 仍为 $V_0$，但它通过 $R_1+R_2$ 放电：

$$
i_{\text{after}}=\frac{V_0}{R_1+R_2}
$$

因此 current 可在开关瞬间减小。

## 15. Choosing the Effective Resistance / 如何确定时间常数中的 R

### Knowledge Point 28: Use the Resistance Seen by the Capacitor

复杂 RC network 中：

$$
\boxed{
\tau=R_{\text{seen}}C
}
$$

$R_{\text{seen}}$ 是 capacitor terminals 向外看见的 equivalent resistance。

对只有 independent sources 的 network，常用步骤：

1. 保留 switch 所处的目标状态；
2. 暂时移除 capacitor；
3. ideal voltage source 替换为 short circuit；
4. ideal current source 替换为 open circuit；
5. 从 capacitor terminals 求 equivalent resistance。

课堂简单题中，若 capacitor 只通过一个 resistor 充电，则 $R_{\text{seen}}=R$。

## 16. Graph Reading / 图像判断

### Knowledge Point 29: Charging and Discharging Have Distinct Endpoints

charging from zero：

| quantity | $t=0^+$ | $t\to\infty$ | shape |
|---|---:|---:|---|
| $q$ | $0$ | $C\mathcal E$ | increasing, concave down |
| $V_C$ | $0$ | $\mathcal E$ | increasing, concave down |
| $i$ | $\mathcal E/R$ | $0$ | exponential decay |
| $V_R$ | $\mathcal E$ | $0$ | exponential decay |

discharging from $Q_0$：

| quantity magnitude | $t=0^+$ | $t\to\infty$ | shape |
|---|---:|---:|---|
| $q$ | $Q_0$ | $0$ | exponential decay |
| $V_C$ | $V_0$ | $0$ | exponential decay |
| $i$ | $V_0/R$ | $0$ | exponential decay |

### Knowledge Point 30: Read the Asymptote Before the Curvature

画图顺序：

1. 确定 initial value；
2. 确定 final value / horizontal asymptote；
3. 在 $t=\tau$ 标 $63.2\%$ 或 $36.8\%$；
4. 再画 smooth exponential curve。

先确定 endpoints，可以避免把 charging curve 误画成 decreasing curve。

## 17. Energy in RC Circuits / RC 电路中的能量

### Knowledge Point 31: A Charged Capacitor Stores Electric Energy

$$
\boxed{
U_C=\frac12CV_C^2
=\frac{Q^2}{2C}
=\frac12QV_C
}
$$

若 charged capacitor 从 $V_0$ 通过 resistors 完全放电，初始 energy：

$$
U_0=\frac12CV_0^2
$$

最终全部转化为 resistor thermal energy。

### Knowledge Point 32: Series Resistors Divide Dissipated Energy in Proportion to Resistance

若放电回路中 $R_1$、$R_2$ 串联，则任意时刻流过二者的 current 相同。

瞬时功率：

$$
P_1=i^2R_1,
\qquad
P_2=i^2R_2
$$

所以：

$$
\frac{P_1}{P_2}=\frac{R_1}{R_2}
$$

对整个放电过程积分后，energy ratio 仍相同：

$$
\frac{E_1}{E_2}=\frac{R_1}{R_2}
$$

因此：

$$
\boxed{
E_1
=\frac{R_1}{R_1+R_2}
\left(\frac12CV_0^2\right)
}
$$

这把 [[Electric Power]] 中 $P=i^2R$ 与 [[Integrals]] 中 $E=\int P\,dt$ 连接起来。

## 18. Deep Phrases / 深句对应表

| English core sentence | 中文对应理解 |
|---|---|
| Parallel capacitors share voltage. | 并联电容连接同一对节点，所以电压相同。 |
| Series capacitors carry equal charge magnitudes. | 串联中间导体净电荷守恒，所以每个电容的电荷量大小相同。 |
| The smaller series capacitor gets the larger voltage. | 同样的 $Q$ 下，$V=Q/C$，因此小电容分压更大。 |
| A capacitor network determines capacity; an RC circuit determines timing. | 电容组合决定能存多少，RC 决定变化多快。 |
| The current is largest when an initially uncharged capacitor is first connected. | 初始电容尚未建立反向电压，所以刚接通时电流最大。 |
| A fully charged capacitor behaves as an open circuit in steady DC. | 直流稳态下电荷不再流动，电容支路电流为零。 |
| The time constant sets the pace, not the destination. | $\tau$ 决定过渡速度，最终值由 source 和 capacitance 决定。 |
| Capacitor voltage is continuous through a switching instant. | 开关瞬间电容电压不能突变。 |
| Current may change instantly when circuit topology changes. | 开关改变连接关系后，电流可以发生跳变。 |
| Exponential decay means equal fractional change in equal time intervals. | 指数衰减不是每秒减相同数值，而是每隔相同时间按相同比例缩小。 |
| A charged capacitor can temporarily act as a source. | 放电时电容把储存的场能释放到外电路。 |
| Use the resistance seen by the capacitor. | 复杂网络中的 $\tau$ 要用电容端口看到的等效电阻。 |

## 19. Common Mistakes / 易错点

1. 把 capacitor 的 series/parallel 公式与 resistor 完全照搬。
2. 认为 series capacitors 的 voltage 相等。
3. 认为 parallel capacitors 的 charge 相等。
4. 忘记 series equivalent capacitance 必须小于最小单个电容。
5. 忘记 parallel equivalent capacitance 必须大于最大单个电容。
6. 混联题没有先找 nodes，就凭图形上下位置判断串并联。
7. 直接按 capacitance 大小正比分配 series voltage。
8. 把未充电 capacitor 在所有时间都当作 wire。
9. 把 fully charged capacitor 在所有时间都当作 open circuit。
10. 认为 charging 时 current 越来越大。
11. 认为 charging 时 capacitor voltage 越来越小。
12. 把 $Q_f=C\mathcal E$ 错写成任意时刻的 $q(t)$。
13. 把 $\tau=RC$ 当作“完全充满所需时间”。
14. 把 $t=\tau$ 的 charging fraction 写成 $36.8\%$。
15. 把 $t=\tau$ 的 current fraction 写成 $63.2\%$。
16. 把 half-charge time 写成 $\tau$。
17. discharge 时忽略 $dq/dt<0$ 与 current direction 的关系。
18. 开关题只画一个 circuit，不区分 $0^-$、$0^+$ 与 $\infty$。
19. 认为 capacitor current 不能突变；真正连续的是 capacitor voltage。
20. steady state 中仍给 zero-current resistor 强行分配 nonzero $IR$ drop。
21. 复杂 RC network 直接把图中所有 resistors 相加作为 $\tau$ 中的 $R$。
22. 放电能量分配按 voltage ratio 猜测，而不是从 $P=i^2R$ 出发。

## 20. Problem-Solving Templates / 题型动作

### A. Equivalent capacitance

1. 标 nodes。
2. 识别最内层 series/parallel。
3. 求 $C_{\text{eq}}$。
4. 做大小检查：
   - parallel result 应变大；
   - series result 应变小。
5. 从 source 一侧反向展开。
6. parallel 用 same voltage。
7. series 用 same charge。
8. 最后检查 $Q=C\Delta V$ 与 voltage sums。

### B. RC charging

1. 画 $t=0^+$ circuit。
2. 若 capacitor initially uncharged，取 $V_C(0)=0$。
3. 求 $I_0=\mathcal E/R_{\text{seen}}$。
4. 求 $Q_f=C\mathcal E_{\text{across capacitor}}$。
5. 求 $\tau=R_{\text{seen}}C$。
6. 写：

$$
q=Q_f(1-e^{-t/\tau})
$$

$$
i=I_0e^{-t/\tau}
$$

7. 用 $t=0$ 与 $t\to\infty$ 检查。

### C. RC discharging

1. 记录 switch 改变前 $V_C(0^-)$。
2. 使用 $V_C(0^+)=V_C(0^-)$。
3. 画新的 discharge path。
4. 求 $R_{\text{seen}}$ 与 $\tau$。
5. 写：

$$
q=Q_0e^{-t/\tau}
$$

$$
i=I_0e^{-t/\tau}
$$

6. 若问 direction，单独根据 capacitor polarity 判断。

### D. Switching question

1. 分别画 $0^-$、$0^+$、$\infty$。
2. 标 $V_C(0^-)$。
3. 把这个 voltage 原样带到 $0^+$。
4. 重新识别新 topology。
5. 求 initial current 与 final current。
6. 再决定是否需要完整 exponential formula。

### E. Graph question

1. 写 initial value。
2. 写 final value。
3. 写 $\tau$。
4. 标 $t=\tau$ 时的 $63.2\%$ 或 $36.8\%$。
5. 检查 monotonic direction。
6. 画 smooth asymptotic curve，不让曲线越过 final value。

## 21. After-Class Compression / 课后压缩版

1. parallel capacitors：same $V$，$C_{\text{eq}}=\sum C_i$。
2. series capacitors：same $Q$，$1/C_{\text{eq}}=\sum1/C_i$。
3. series voltage：$\Delta V_i=Q/C_i$，所以小 $C$ 分到大 $V$。
4. RC charging：

$$
q=Q_f(1-e^{-t/RC}),
\qquad
i=I_0e^{-t/RC}
$$

5. RC discharging：

$$
q=Q_0e^{-t/RC},
\qquad
i=I_0e^{-t/RC}
$$

6. time constant：$\tau=RC$。
7. charging at $\tau$：$63.2\%$ complete。
8. decay at $\tau$：$36.8\%$ remains。
9. initially uncharged capacitor at $0^+$：like a wire。
10. DC steady-state capacitor：open circuit。
11. capacitor voltage cannot jump。
12. current can jump when switch topology changes。
13. complex network：use $R_{\text{seen}}$。
14. stored energy：$U_C=\frac12CV^2$。
15. series resistors in discharge divide energy in ratio $R_1:R_2$。

## 22. Video Companion / 搭配课堂观看

| Timestamp | 内容 |
|---|---|
| 00:00-00:04 | 上节内容回顾：电容、电流、电表与 Kirchhoff |
| 00:04-00:19 | Kirchhoff 双回路遗留题与 outer-loop 技巧 |
| 00:19-00:25 | capacitor series/parallel 的定义、推导与几何直觉 |
| 00:25-00:37 | 混联电容网络：$C_{\text{eq}}$、$Q_i$、$\Delta V_i$ |
| 00:37-00:42 | 串联小电容分到大电压的定性题 |
| 00:42-00:46 | RC circuit 与灯泡充放电直觉 |
| 00:46-01:00 | charging equation、$q(t)$、$i(t)$ 与 $\tau=RC$ |
| 01:00-01:07 | 数值题：给定时间后的 charge/current fraction |
| 01:18-01:22 | 不同 RC 组合的 charging-speed 比较 |
| 01:22-01:26 | discharging equations 与 $37\%$ rule |
| 01:27-01:28 | steady state：capacitor 视为 open circuit |
| 01:28-01:43 | 2017 AP 真题：charging graph 与 time constant |
| 01:47-01:53 | 两支路 current graph 比较 |
| 01:53-01:55 | charge/discharge 到 $50\%$ 的时间比较 |
| 01:55-01:57 | switch 打开瞬间的 current jump |
| 01:57-01:59 | capacitor energy 与 series-resistor energy division |

## 23. Connections / 知识网络

### Lecture Sequence

- Previous: [[AP电磁学第9次正课-电功率电表与基尔霍夫定律]]
- Next: [[AP电磁学第11次正课-磁场洛伦兹力与带电粒子运动]]

### Capacitor Branch

- [[Capacitors]] -> $C=Q/|\Delta V|$ -> series/parallel combinations
- [[Charge Conservation]] -> equal charge magnitudes on series capacitors
- [[Electric Potential]] -> voltage division and capacitor voltage continuity

### Circuit Branch

- [[Electric Circuits]] -> topology, nodes, branches and equivalent networks
- [[Kirchhoff's Rules]] -> RC differential equation and multi-loop review
- [[Electric Power]] -> resistor heating during discharge

### Calculus Bridge

- [[Derivatives]] -> $i=dq/dt$
- [[Differential Equations]] -> $R\,dq/dt+q/C=\mathcal E$
- [[Exponential Functions]] -> $e^{-t/\tau}$ transient response
- [[Integrals]] -> dissipated energy $E=\int i^2R\,dt$

这节课把静电学中的 capacitor 与动电学中的 current 连在了一起：电容器的状态由 $q$ 或 $V_C$ 描述，电阻决定状态改变的速度，而 exponential function 描述从一个电路状态过渡到另一个状态的全过程。
