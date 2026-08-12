---
title: "Current Density"
description: "A connected bilingual learning note about Current Density."
publish: true
tags: [open-notes, concept-card]
---
# Current Density

## Core Sentence / 核心句

Current density measures local charge flow per unit cross-sectional area.

中文理解：总电流看整个截面流过多少电荷，电流密度看某个局部每单位面积流得多密。

## Formula / 公式或规则

uniform perpendicular flow：

$$
\boxed{J=\frac IA}
$$

general form：

$$
\boxed{I=\int\vec J\cdot d\vec A}
$$

microscopic form：

$$
\boxed{\vec J=nq\vec v_d}
$$

unit：

$$
[J]=\mathrm{A/m^2}
$$

## Area Element / 面积元

具有 circular symmetry 时，把 disk 拆成 concentric annuli：

$$
dA=2\pi r\,dr
$$

若 $J=J(r)$：

$$
I=\int_0^aJ(r)2\pi r\,dr
$$

## When To Use / 什么时候用

看到 nonuniform current across a wire、$J(r)$、drift velocity、microscopic Ohm's law，就使用 current density。

## Watch Out / 易错点

- $J\times A$ 只适用于 uniform $J$ 且垂直截面。
- $dA$ 不是 $dr$；必须根据几何写 area element。
- 对 electrons，$q<0$，因此 $\vec J$ 与 electron drift velocity 方向相反。
- 不要与 surface charge density $\sigma$ 混淆。

## Search and Source Mentions / 搜索与出现位置

### Mentioned In / 出现位置

- [[AP电磁学第8次正课-介电质电流与电阻#Knowledge Point 22: Current Density Removes the Size of the Cross Section|AP电磁学第8次正课-介电质电流与电阻 · definition]]
  - "Current is total flow through a cross section; current density is local flow per unit area."
- [[AP电磁学第8次正课-介电质电流与电阻#Knowledge Point 24: Nonuniform Current Density Requires an Area Integral|AP电磁学第8次正课-介电质电流与电阻 · area integral]]
  - $I=\int\vec J\cdot d\vec A$

## Connected Notes / 连接

- [[AP电磁学第8次正课-介电质电流与电阻]]
- [[Electric Current]]
- [[Resistance and Resistivity]]
- [[Electric Field]]
- [[Integrals]]
