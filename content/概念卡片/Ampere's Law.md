---
title: "Ampere's Law"
description: "A connected bilingual learning note about Ampere's Law."
publish: true
tags: [open-notes, concept-card]
---
# Ampere's Law

## Core Sentence / 核心句

Ampere's law relates the circulation of the magnetic field around a closed loop to the signed current enclosed by that loop.

中文理解：沿 closed loop 累加 magnetic field 的切向分量，结果由穿过 loop 所围 surface 的净电流决定。

## Magnetostatic Form / 稳恒电流形式

$$
\boxed{
\oint\vec B\cdot d\vec\ell=\mu_0I_{\text{enc}}
}
$$

这是 dot product，只取 $\vec B$ 沿 path tangent 的 component。

## Maxwell-Ampere Form / 完整形式

$$
\boxed{
\oint\vec B\cdot d\vec\ell
=
\mu_0I_{\text{enc}}
+\mu_0\epsilon_0\frac{d\Phi_E}{dt}
}
$$

## Symmetry Gate / 对称性门槛

定律本身普遍成立，但直接求 $B$ 通常需要：

- cylindrical symmetry；
- solenoidal symmetry；
- toroidal symmetry；
- selected path 上 $B$ constant；
- $\vec B$ 与 $d\vec\ell$ parallel 或 perpendicular。

## Standard Results / 标准结果

long straight wire：

$$
B=\frac{\mu_0I}{2\pi r}
$$

uniform solid wire inside：

$$
B=\frac{\mu_0Ir}{2\pi R^2}
$$

long solenoid：

$$
B\approx\mu_0nI
$$

toroid：

$$
B(r)=\frac{\mu_0\mu_rNI}{2\pi r}
$$

## Watch Out / 易错点

- $I_{\text{enc}}$ 是 signed current。
- loop 外 current 不进入 right side。
- external current 仍可影响 local $\vec B$。
- zero circulation 不普遍意味着 zero field。
- arbitrary geometry 不能强行把 $B$ 提出 integral。

## Search and Source Mentions / 搜索与出现位置

### Mentioned In / 出现位置

- [[AP电磁学第12次正课-载流导线力与安培定律#Knowledge Point 23: Circulation of B Tracks Enclosed Current|第12次正课 · law]]
- [[AP电磁学第12次正课-载流导线力与安培定律#Knowledge Point 25: The Law Is General, the Easy Calculation Needs Symmetry|第12次正课 · symmetry]]
- [[AP电磁学第12次正课-载流导线力与安培定律#Knowledge Point 26: Zero Circulation Does Not Generally Mean Zero Field|第12次正课 · zero-circulation warning]]

## Connected Notes / 连接

- [[AP电磁学第12次正课-载流导线力与安培定律]]
- [[Biot-Savart Law]]
- [[Solenoids and Toroids]]
- [[Magnetic Fields]]
- [[Electric Current]]
- [[Gauss's Law]]
- [[Integrals]]
- [[Symmetry]]
