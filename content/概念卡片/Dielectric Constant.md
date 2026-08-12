---
title: "Dielectric Constant"
description: "A connected bilingual learning note about Dielectric Constant."
publish: true
tags: [open-notes, concept-card]
---
# Dielectric Constant

## Core Sentence / 核心句

The dielectric constant measures a material's polarizability relative to vacuum.

中文理解：介电常数衡量材料相对真空有多容易发生极化，并由此改变给定自由电荷产生的净电场与电势差。

## Formula / 公式或规则

$$
\boxed{\kappa=\frac{\epsilon}{\epsilon_0}}
$$

$$
\boxed{\epsilon=\kappa\epsilon_0}
$$

- $\epsilon$：absolute permittivity；
- $\epsilon_0$：vacuum permittivity；
- $\kappa$：relative permittivity / dielectric constant，无单位。

fixed free charge：

$$
E=\frac{E_0}{\kappa}
$$

fully filled capacitor：

$$
C=\kappa C_0
$$

## Physical Picture / 物理图像

外加 field 使 dielectric 中 bound charges 发生微小位移或 dipoles 定向，产生反向 polarization field。它削弱 fixed free charge 对应的 net field，但不等于 free charges 像 conductor 中那样跨材料运动。

## Constraint Check / 条件检查

- isolated capacitor：$Q$ fixed，$E$ 与 $\Delta V$ 变为 $1/\kappa$；
- battery connected, fixed gap：$\Delta V$ fixed，battery 补充 free charge，net $E=\Delta V/d$ 不变。

## When To Use / 什么时候用

看到 medium、permittivity、relative permittivity、polarization、dielectric insertion，就使用本卡。

## Watch Out / 易错点

- $\kappa$ 不是 charge、force 或 energy。
- $E=E_0/\kappa$ 需要 fixed free charge 条件。
- metal 可用作 perfect-screening 直觉极限，但不是 ordinary linear dielectric。
- 插介质题必须先判断 voltage constant 还是 charge constant。

## Search and Source Mentions / 搜索与出现位置

### Mentioned In / 出现位置

- [[AP电磁学第8次正课-介电质电流与电阻#Knowledge Point 4: Relative Permittivity Compares a Medium with Vacuum|AP电磁学第8次正课-介电质电流与电阻 · relative permittivity]]
  - "The dielectric constant tells how strongly a material polarizes compared with vacuum."
- [[AP电磁学第8次正课-介电质电流与电阻#Knowledge Point 7: Filling the Gap Multiplies Capacitance by Kappa|AP电磁学第8次正课-介电质电流与电阻 · dielectric capacitance]]
  - $C=\kappa C_0$
- [[AP电磁学第1次正课-电荷库仑定律与电场#Knowledge Point 8: Dielectric Constant Measures Polarizability|AP电磁学第1次正课-电荷库仑定律与电场 · early introduction]]

## Connected Notes / 连接

- [[AP电磁学第8次正课-介电质电流与电阻]]
- [[Capacitors]]
- [[Polarization]]
- [[Insulators]]
- [[Electric Field]]
- [[Electric Potential]]
