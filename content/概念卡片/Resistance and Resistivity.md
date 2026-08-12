---
title: "Resistance and Resistivity"
description: "A connected bilingual learning note about Resistance and Resistivity."
publish: true
tags: [open-notes, concept-card]
---
# Resistance and Resistivity

## Core Sentence / 核心句

Resistance describes an entire component, while resistivity describes the material's local opposition to current.

中文理解：电阻 $R$ 属于某个具体元件，受材料和几何共同影响；电阻率 $\rho$ 是材料层面的局部响应。

## Formula / 公式或规则

Ohmic element：

$$
\boxed{R=\frac{\Delta V}{I}}
$$

uniform wire：

$$
\boxed{R=\rho\frac LA}
$$

local Ohm's law：

$$
\boxed{\vec E=\rho\vec J}
$$

nonuniform conductor：

$$
\boxed{R=\int\rho(x)\frac{dx}{A(x)}}
$$

## Definition vs Determination / 定义式与决定式

$R=\Delta V/I$ 描述端口测量关系；对 fixed-condition Ohmic element，改变 voltage 会让 current 同比例改变，并不是 voltage 单独改变了 $R$。

$R=\rho L/A$ 说明具体 resistance 来自：

- material resistivity；
- path length；
- cross-sectional area。

## When To Use / 什么时候用

看到 voltage-current graph、wire geometry、temperature dependence、series/parallel resistors、microscopic Ohm's law，就使用本卡。

## Watch Out / 易错点

- $R$ 的单位是 $\Omega$，$\rho$ 的单位是 $\Omega\cdot\mathrm m$。
- circular area 是 $\pi r^2$，radius scaling 要平方。
- $R=\rho L/A$ 只直接适用于 uniform wire。
- non-Ohmic element 的 $V-I$ relation 不是固定斜率直线。
- $\rho$ 可能随 temperature 改变。

## Search and Source Mentions / 搜索与出现位置

### Mentioned In / 出现位置

- [[AP电磁学第9次正课-电功率电表与基尔霍夫定律#Knowledge Point 4: Ohm's Law Produces Three Equivalent Power Forms|AP电磁学第9次正课-电功率电表与基尔霍夫定律 · resistor power]]
- [[AP电磁学第9次正课-电功率电表与基尔霍夫定律#Knowledge Point 11: A Real Battery Is an Ideal Source Plus Internal Resistance|AP电磁学第9次正课-电功率电表与基尔霍夫定律 · internal resistance]]
- [[AP电磁学第8次正课-介电质电流与电阻#Knowledge Point 18: Length Raises Resistance; Area Lowers It|AP电磁学第8次正课-介电质电流与电阻 · geometry relation]]
  - $R=\rho L/A$
- [[AP电磁学第8次正课-介电质电流与电阻#Knowledge Point 25: Resistivity Relates Field to Current Density|AP电磁学第8次正课-介电质电流与电阻 · microscopic Ohm's law]]
  - $\vec E=\rho\vec J$
- [[AP电磁学第8次正课-介电质电流与电阻#Knowledge Point 27: Series Resistors Carry the Same Current|AP电磁学第8次正课-介电质电流与电阻 · series resistance]]
- [[AP电磁学第8次正课-介电质电流与电阻#Knowledge Point 28: Parallel Resistors Share the Same Voltage|AP电磁学第8次正课-介电质电流与电阻 · parallel resistance]]

## Connected Notes / 连接

- [[AP电磁学第8次正课-介电质电流与电阻]]
- [[Electric Current]]
- [[Current Density]]
- [[Electric Circuits]]
- [[Electric Field]]
- [[Conductors]]
- [[Integrals]]
- [[AP电磁学第9次正课-电功率电表与基尔霍夫定律]]
- [[Electric Power]]
- [[EMF and Internal Resistance]]
- [[Electrical Meters and Wheatstone Bridge]]
