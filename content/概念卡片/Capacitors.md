---
title: "Capacitors"
description: "A connected bilingual learning note about Capacitors."
publish: true
tags: [open-notes, concept-card]
---
# Capacitors

## Core Sentence / 核心句

A capacitor stores electric potential energy by separating equal and opposite charges on two conductors.

中文理解：电容器把等量异号电荷分离在两个彼此绝缘的导体上；这个电场配置同时储存电势能。

## Definition / 定义

$$
\boxed{C=\frac{Q}{|\Delta V|}}
$$

- $Q$ 是任意一侧 conductor 上电荷量的 magnitude，不是 $2Q$；
- $|\Delta V|$ 是两 conductors 之间的 potential difference magnitude；
- $C$ 的单位是 farad：$1\ \mathrm F=1\ \mathrm C/\mathrm V$。

> **Capacitance is charge stored per unit potential difference.**

## What Determines Capacitance / 电容由什么决定

固定 geometry 与 material 的 linear capacitor 中，$Q$ 和 $\Delta V$ 同比例变化，$C$ 不变。

因此 $C=Q/|\Delta V|$ 是 definition，不是在说“$Q$ 单独导致 $C$”。capacitance 主要由：

- conductor geometry；
- conductor size and separation；
- material permittivity；

决定。

平行板：

$$
\boxed{C=\frac{\epsilon_0A}{d}}
$$

完全填充 dielectric 时：

$$
C=\frac{\kappa\epsilon_0A}{d}
$$

## Field-Voltage-Capacitance Chain / 场势电容链

理想平行板：

$$
E=\frac{\sigma}{\epsilon_0}
=\frac{Q}{\epsilon_0A}
$$

$$
|\Delta V|=Ed
$$

所以：

$$
C=\frac{Q}{|\Delta V|}
=\frac{\epsilon_0A}{d}
$$

任意高对称 geometry 的通用方法：

~~~text
Gauss's law -> E(r) -> integrate E -> Delta V -> C = Q/|Delta V|
~~~

## Stored Energy / 储能

$$
\boxed{
U
=\frac12Q\Delta V
=\frac{Q^2}{2C}
=\frac12C(\Delta V)^2
}
$$

$1/2$ 来自 charging 过程中 voltage 从 $0$ 逐渐升到最终值，而不是全程等于最终 voltage。

## Constraint Check / 变化题先判断什么不变

- connected to battery：$\Delta V$ constant，battery 可以增减 $Q$；
- isolated after charging：$Q$ constant，$\Delta V$ 随 geometry 改变。

> **A connected battery fixes voltage; isolation fixes charge.**

## When To Use / 什么时候用

看到 parallel plates、charge separation、stored electric energy、capacitance、plates pulled apart、battery connected/disconnected，就进入 capacitor 框架。

## Watch Out / 易错点

- 不要把 $+Q$ 和 $-Q$ 写成 capacitance 公式中的 $2Q$。
- capacitance 是正值，使用 potential difference magnitude。
- 不要把 $C=\epsilon_0A/d$ 用于所有 geometry。
- geometry change 前先判断 constant quantity。
- 两个 capacitors 并联后 voltage 相等，charge 未必相等。
- 能量增加必须来自 battery transfer 或 external work，不会凭空出现。

## Search and Source Mentions / 搜索与出现位置

### Mentioned In / 出现位置

- [[AP电磁学第8次正课-介电质电流与电阻#Knowledge Point 2: In Vacuum, Energy Density Is Proportional to E Squared|AP电磁学第8次正课-介电质电流与电阻 · field energy density]]
  - $u_E=\frac12\epsilon_0E^2$
- [[AP电磁学第8次正课-介电质电流与电阻#Knowledge Point 8: Battery Connected Means Constant Voltage|AP电磁学第8次正课-介电质电流与电阻 · dielectric at constant voltage]]
- [[AP电磁学第8次正课-介电质电流与电阻#Knowledge Point 9: Isolated Capacitor Means Constant Free Charge|AP电磁学第8次正课-介电质电流与电阻 · dielectric at constant charge]]
- [[AP电磁学第10次正课-等效电容与RC电路#Knowledge Point 4: Parallel Capacitors Share the Same Voltage|第10次正课 · parallel capacitors]]
- [[AP电磁学第10次正课-等效电容与RC电路#Knowledge Point 6: Series Capacitors Carry Equal Charge Magnitudes|第10次正课 · series capacitors]]
- [[AP电磁学第10次正课-等效电容与RC电路#Knowledge Point 13: A Capacitor Is Not Always an Open Circuit|第10次正课 · capacitor in an RC circuit]]
- [[AP电磁学第10次正课-等效电容与RC电路#Knowledge Point 26: Capacitor Voltage Cannot Change Instantaneously|第10次正课 · capacitor voltage continuity]]
- [[AP电磁学第7次正课-电容器与电容储能#Knowledge Point 4: A Capacitor Separates Equal and Opposite Charge|AP电磁学第7次正课-电容器与电容储能 · charge separation]]
  - "A capacitor stores separated charge: one conductor carries $+Q$, and the other carries $-Q$."
- [[AP电磁学第7次正课-电容器与电容储能#Knowledge Point 6: Capacitance Is Charge Stored per Unit Potential Difference|AP电磁学第7次正课-电容器与电容储能 · capacitance definition]]
  - "Capacitance measures how much charge can be stored per unit potential difference."
- [[AP电磁学第7次正课-电容器与电容储能#Knowledge Point 10: Geometry Determines the Parallel-Plate Capacitance|AP电磁学第7次正课-电容器与电容储能 · parallel-plate capacitance]]
  - $C=\epsilon_0A/d$
- [[AP电磁学第7次正课-电容器与电容储能#Knowledge Point 17: The Factor 1/2 Comes from a Growing Voltage|AP电磁学第7次正课-电容器与电容储能 · stored energy]]
  - $U=\frac12Q\Delta V$
- [[AP电磁学第1次正课-电荷库仑定律与电场#11. Additional Clarifications from the Course PDF / 教案辅助补充|AP电磁学第1次正课-电荷库仑定律与电场 · future capacitor scope]]
  - The first lecture deliberately postponed capacitors until the matching transcript arrived.

## Connected Notes / 连接

- [[AP电磁学第7次正课-电容器与电容储能]]
- [[AP电磁学第8次正课-介电质电流与电阻]]
- [[AP电磁学第10次正课-等效电容与RC电路]]
- [[RC Circuits]]
- [[Electric Field]]
- [[Uniform Electric Field]]
- [[Electric Potential]]
- [[Gauss's Law]]
- [[Conductors]]
- [[Surface Charge Density]]
- [[Charge Conservation]]
- [[Dielectric Constant]]
- [[Integrals]]
