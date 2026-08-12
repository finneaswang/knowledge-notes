---
title: "Electrical Meters and Wheatstone Bridge"
description: "A connected bilingual learning note about Electrical Meters and Wheatstone Bridge."
publish: true
tags: [open-notes, concept-card]
---
# Electrical Meters and Wheatstone Bridge

## Core Sentence / 核心句

Electrical meters control their loading effect through resistance, while a balanced Wheatstone bridge measures resistance by detecting equal potential.

中文理解：电流表用极小电阻减少串联影响，电压表用极大电阻减少分流；惠斯通电桥通过零电流判断两点等势。

## Ideal Meters / 理想电表

ammeter：

$$
R_A=0
$$

series connection。

voltmeter：

$$
R_V\to\infty
$$

parallel connection。

## Galvanometer Conversion / 表头改装

galvanometer full-scale current $I_g$、resistance $R_g$。

ammeter shunt：

$$
\boxed{R_{\text{sh}}=\frac{I_gR_g}{I_A-I_g}}
$$

voltmeter series resistor：

$$
\boxed{R_s=\frac{V_V}{I_g}-R_g}
$$

## Wheatstone Bridge / 惠斯通电桥

balanced condition：

$$
I_g=0,
\qquad
V_C=V_D
$$

standard labeling：

$$
\boxed{\frac{R_1}{R_2}=\frac{R_3}{R_x}}
$$

## When To Use / 什么时候用

看到 meter loading、range conversion、galvanometer、shunt、series multiplier、bridge balance、unknown resistance，就使用本卡。

## Watch Out / 易错点

- ammeter 要串联，voltmeter 要并联。
- 扩大 ammeter range 用 parallel small resistor。
- 扩大 voltmeter range 用 series large resistor。
- bridge ratio 必须按图中 resistor positions 写。
- balance 是 middle branch current zero，不是所有 branch current zero。

## Search and Source Mentions / 搜索与出现位置

### Mentioned In / 出现位置

- [[AP电磁学第9次正课-电功率电表与基尔霍夫定律#Knowledge Point 14: Ammeter Goes in Series; Voltmeter Goes in Parallel|AP电磁学第9次正课-电功率电表与基尔霍夫定律 · ideal meters]]
- [[AP电磁学第9次正课-电功率电表与基尔霍夫定律#Knowledge Point 16: Add a Parallel Shunt to Make an Ammeter|AP电磁学第9次正课-电功率电表与基尔霍夫定律 · ammeter conversion]]
- [[AP电磁学第9次正课-电功率电表与基尔霍夫定律#Knowledge Point 17: Add a Series Resistor to Make a Voltmeter|AP电磁学第9次正课-电功率电表与基尔霍夫定律 · voltmeter conversion]]
- [[AP电磁学第9次正课-电功率电表与基尔霍夫定律#Knowledge Point 19: Balance Means the Midpoints Have Equal Potential|AP电磁学第9次正课-电功率电表与基尔霍夫定律 · bridge balance]]

## Connected Notes / 连接

- [[AP电磁学第9次正课-电功率电表与基尔霍夫定律]]
- [[Electric Circuits]]
- [[Electric Current]]
- [[Electric Potential]]
- [[Resistance and Resistivity]]
- [[Kirchhoff's Rules]]
