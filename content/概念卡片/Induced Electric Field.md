---
title: "Induced Electric Field"
description: "A connected bilingual learning note about Induced Electric Field."
publish: true
tags: [open-notes, concept-card]
---
# Induced Electric Field

## Core Sentence / 核心句

A changing magnetic flux creates a circulating, non-conservative electric field.

中文理解：变化磁通量在空间中建立环形感生电场；wire 不是产生该场的必要条件，只是给 free charges 提供运动路径。

## Field Law / 场方程

$$
\boxed{
\oint_C\vec E\cdot d\vec\ell
=-\frac{d\Phi_B}{dt}
}
$$

differential form：

$$
\boxed{
\nabla\times\vec E
=-\frac{\partial\vec B}{\partial t}
}
$$

## Electrostatic Comparison / 与静电场对照

| Electrostatic field | Induced electric field |
|---|---|
| produced by stationary charge distribution | produced by changing magnetic field |
| conservative | non-conservative |
| $\oint\vec E\cdot d\vec\ell=0$ | $\oint\vec E\cdot d\vec\ell\ne0$ when flux changes |
| globally described by scalar potential in a simply connected region | cannot generally be described by one single-valued electrostatic potential |
| field lines begin/end on charge | field lines can form closed loops |

## Deep Phrase / 记忆句

> **The wire reveals the induced field; it does not create the field.**
>
> 导线让感生电场表现为电流，但不是导线创造了感生电场。

## Watch Out / 易错点

- nonzero closed-loop integral means non-conservative；
- do not apply “potential always decreases along the field” around an induced-field closed loop；
- Faraday's law uses a closed path and magnetic flux through a spanning surface；
- Gauss's law uses a closed surface and enclosed charge。

## Search and Source Mentions / 搜索与出现位置

### Mentioned In / 出现位置

- [[AP电磁学第14次正课-楞次定律感生电场与RL电路#Knowledge Point 11: Changing Magnetic Flux Creates a Circulating Electric Field|第14次正课 · field origin]]
- [[AP电磁学第14次正课-楞次定律感生电场与RL电路#Knowledge Point 12: Induced E Is Non-Conservative|第14次正课 · non-conservative field]]

## Connected Notes / 连接

- [[Faraday's Law]]
- [[Lenz's Law]]
- [[Magnetic Flux]]
- [[Electric Field]]
- [[Electric Potential]]
- [[Electromagnetic Induction]]
- [[Integrals]]
