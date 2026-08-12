---
title: "Biot-Savart Law"
description: "A connected bilingual learning note about Biot-Savart Law."
publish: true
tags: [open-notes, concept-card]
---
# Biot-Savart Law

## Core Sentence / 核心句

The Biot-Savart law builds a magnetic field by integrating the vector contributions of current elements.

中文理解：把整条电流路径切成许多 $I\,d\vec\ell$，分别求它们在 field point 的微小磁场，再进行矢量积分。

## Law / 定律

$$
\boxed{
d\vec B
=
\frac{\mu_0}{4\pi}
\frac{I\,d\vec\ell\times\hat r}{r^2}
}
$$

$$
\boxed{
\vec B=\int d\vec B
}
$$

$\hat r$ 从 source element 指向 field point。

## Circular Loop / 圆电流

center：

$$
\boxed{
B=\frac{\mu_0NI}{2R}
}
$$

axis：

$$
\boxed{
B(x)=\frac{\mu_0NIR^2}{2(R^2+x^2)^{3/2}}
}
$$

semicircular arc at center：

$$
\boxed{
B=\frac{\mu_0I}{4R}
}
$$

## When To Use / 什么时候用

- finite wire；
- circular arc；
- current loop；
- off-symmetry geometry；
- Ampere's law 无法直接提出 $B$ 时。

## Watch Out / 易错点

- $\hat r$ 的方向不可反。
- 先用 symmetry 判断 surviving component。
- $d\vec\ell\times\hat r$ 是 cross product。
- loop-axis field 随 $x$ 变化。
- 对 radial segment at center，$\sin\theta=0$。

## Search and Source Mentions / 搜索与出现位置

### Mentioned In / 出现位置

- [[AP电磁学第12次正课-载流导线力与安培定律#Knowledge Point 19: Each Current Element Contributes a Small Field|第12次正课 · law]]
- [[AP电磁学第12次正课-载流导线力与安培定律#Knowledge Point 21: Field at the Center of a Circular Loop|第12次正课 · loop center]]
- [[AP电磁学第12次正课-载流导线力与安培定律#Knowledge Point 22: The Axis Field Does Depend on Distance|第12次正课 · loop axis]]
- [[AP电磁学第13次正课-动生电动势磁通量与法拉第定律#Knowledge Point 1: Circular-Loop Axis Field Comes from Component Cancellation|第13次正课 · loop-axis derivation]]
- [[AP电磁学第13次正课-动生电动势磁通量与法拉第定律#Knowledge Point 2: Center and Semicircle Are Special Cases|第13次正课 · circle and semicircle results]]

## Connected Notes / 连接

- [[AP电磁学第12次正课-载流导线力与安培定律]]
- [[AP电磁学第13次正课-动生电动势磁通量与法拉第定律]]
- [[Ampere's Law]]
- [[Magnetic Fields]]
- [[Electric Current]]
- [[Integrals]]
- [[Vectors]]
- [[Symmetry]]
