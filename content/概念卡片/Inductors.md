---
title: "Inductors"
description: "A connected bilingual learning note about Inductors."
publish: true
tags: [open-notes, concept-card]
---
# Inductors

## Core Sentence / 核心句

An inductor opposes changes in current by producing a self-induced EMF and stores energy in its magnetic field.

中文理解：电感通过 self-induction 反抗电流变化，并把能量储存在 magnetic field 中；它不反抗已经稳定的 DC current。

## Self-Induction / 自感

$$
\boxed{L=\frac{N\Phi_B}{I}}
$$

$$
\boxed{\mathcal E_L=-L\frac{di}{dt}}
$$

unit：

$$
1\ \mathrm H=1\ \mathrm{V\,s/A}=1\ \Omega\mathrm s
$$

## Switching Rule / 开关规则

$$
\boxed{i_L(0^+)=i_L(0^-)}
$$

- initially unenergized inductor at the first instant: open circuit；
- ideal inductor in DC steady state: short circuit；
- current cannot jump under finite voltage。

## Geometry / 几何

long air-core solenoid：

$$
\boxed{L=\mu_0\frac{N^2A}{\ell}}
$$

## Stored Energy / 储能

$$
\boxed{U_L=\frac12LI^2}
$$

resistor dissipates energy；ideal inductor stores and can return energy。

## Combination / 串并联

uncoupled inductors：

$$
L_{\text{series}}=\sum_iL_i
$$

$$
\frac1{L_{\text{parallel}}}=\sum_i\frac1{L_i}
$$

## Deep Phrase / 记忆句

> **It resists the arrival of current and resists its departure.**
>
> 来时拒绝变化，走时维持旧电流。

## Watch Out / 易错点

- oppose current change, not current；
- use actual voltage across the inductor in $di/dt=V_L/L$；
- ideal steady-state short circuit does not mean every real coil has zero resistance；
- simple series/parallel rules assume negligible mutual coupling。

## Search and Source Mentions / 搜索与出现位置

### Mentioned In / 出现位置

- [[AP电磁学第14次正课-楞次定律感生电场与RL电路#Knowledge Point 15: A Coil Opposes Changes in Its Own Current|第14次正课 · self-induction]]
- [[AP电磁学第14次正课-楞次定律感生电场与RL电路#Knowledge Point 19: Building Current Requires Work|第14次正课 · magnetic energy]]

## Connected Notes / 连接

- [[Lenz's Law]]
- [[Faraday's Law]]
- [[Magnetic Fields]]
- [[Magnetic Flux]]
- [[RL Circuits]]
- [[RC Circuits]]
- [[Electric Power]]
