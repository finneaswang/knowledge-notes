---
title: "Magnetic Flux"
description: "A connected bilingual learning note about Magnetic Flux."
publish: true
tags: [open-notes, concept-card]
---
# Magnetic Flux

## Core Sentence / 核心句

Magnetic flux is the signed scalar measure of magnetic field passing through an oriented surface.

中文理解：磁通量把 $\vec B$ 在 surface normal 方向上的分量对整个面积累加。

## Definition / 定义

$$
\boxed{
\Phi_B=\int_S\vec B\cdot d\vec A
}
$$

uniform flat surface：

$$
\boxed{
\Phi_B=BA\cos\theta
}
$$

$\theta$ 是 $\vec B$ 与 area normal 的夹角。

## Unit / 单位

$$
\boxed{
1\ \mathrm{Wb}=1\ \mathrm{T\,m^2}
}
$$

## Closed Surface / 闭合曲面

$$
\boxed{
\oint\vec B\cdot d\vec A=0
}
$$

这是 Gauss's law for magnetism。

## Nonuniform Field / 非匀强场

必须 integrate。long wire 旁 rectangular surface：

$$
\boxed{
\Phi_B
=
\frac{\mu_0Ih}{2\pi}
\ln\left(\frac ba\right)
}
$$

## Watch Out / 易错点

- angle is measured from surface normal。
- flux is scalar, with sign。
- open-surface flux can be nonzero。
- closed-surface net magnetic flux is zero。
- nonuniform field cannot use simple $BA$。

## Search and Source Mentions / 搜索与出现位置

### Mentioned In / 出现位置

- [[AP电磁学第13次正课-动生电动势磁通量与法拉第定律#Knowledge Point 23: Flux Measures Field Through an Oriented Surface|第13次正课 · definition]]
- [[AP电磁学第13次正课-动生电动势磁通量与法拉第定律#Knowledge Point 27: The Flux Is Logarithmic|第13次正课 · nonuniform flux]]
- [[AP电磁学第13次正课-动生电动势磁通量与法拉第定律#Knowledge Point 29: Net Magnetic Flux Through a Closed Surface Is Zero|第13次正课 · closed-surface flux]]

## Connected Notes / 连接

- [[AP电磁学第13次正课-动生电动势磁通量与法拉第定律]]
- [[Electromagnetic Induction]]
- [[Faraday's Law]]
- [[Magnetic Fields]]
- [[Electric Flux]]
- [[Integrals]]
