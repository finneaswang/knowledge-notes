---
title: "Electromagnetic Damping"
description: "A connected bilingual learning note about Electromagnetic Damping."
publish: true
tags: [open-notes, concept-card]
---
# Electromagnetic Damping

## Core Sentence / 核心句

Electromagnetic damping converts mechanical energy into electrical energy by inducing a current whose magnetic force opposes motion.

中文理解：运动产生 EMF 和 current，current 在 magnetic field 中又受到反向 force，因此 kinetic energy 被转移到 circuit。

## Magnetic Drag / 磁阻力

sliding rod：

$$
\boxed{
F_B=\frac{B^2L^2}{R}v
}
$$

direction opposite motion。

## Free Decay / 自由衰减

$$
m\frac{dv}{dt}
=
-\frac{B^2L^2}{R}v
$$

$$
\boxed{
v(t)=v_0e^{-t/\tau}
}
$$

$$
\boxed{
\tau=\frac{mR}{B^2L^2}
}
$$

## Falling Rod / 下落导体棒

$$
mg-\frac{B^2L^2}{R}v
=
m\frac{dv}{dt}
$$

$$
\boxed{
v_t=\frac{mgR}{B^2L^2}
}
$$

## Energy / 能量

constant speed：

$$
\boxed{
F_{\text{ext}}v=\mathcal EI=I^2R
}
$$

## Watch Out / 易错点

- terminal speed means zero net force, not zero forces。
- magnetic force redirects charge; external/mechanical work supplies energy。
- $R$ may depend on geometry。
- stronger $B$ changes damping quadratically。

## Search and Source Mentions / 搜索与出现位置

### Mentioned In / 出现位置

- [[AP电磁学第13次正课-动生电动势磁通量与法拉第定律#Knowledge Point 13: Why the Force Must Oppose the Motion|第13次正课 · opposition]]
- [[AP电磁学第13次正课-动生电动势磁通量与法拉第定律#Knowledge Point 17: Without External Force, Speed Decays|第13次正课 · exponential damping]]
- [[AP电磁学第13次正课-动生电动势磁通量与法拉第定律#Knowledge Point 20: Terminal Speed Occurs at Zero Acceleration|第13次正课 · terminal speed]]

## Connected Notes / 连接

- [[AP电磁学第13次正课-动生电动势磁通量与法拉第定律]]
- [[Electromagnetic Induction]]
- [[Motional EMF]]
- [[Faraday's Law]]
- [[Force on a Current-Carrying Wire]]
- [[Electric Power]]
- [[Newton's Second Law]]
- [[Differential Equations]]
