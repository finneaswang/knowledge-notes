---
title: "Solenoids and Toroids"
description: "A connected bilingual learning note about Solenoids and Toroids."
publish: true
tags: [open-notes, concept-card]
---
# Solenoids and Toroids

## Core Sentence / 核心句

Solenoids and toroids use many current turns to concentrate magnetic field into controlled regions.

中文理解：多匝电流把每一匝产生的磁场叠加，使 magnetic field 主要集中在线圈内部或环形 core 中。

## Long Solenoid / 长螺线管

turn density：

$$
n=\frac NL
$$

$$
\boxed{
B_{\text{inside}}\approx\mu_0\mu_rnI
}
$$

$$
B_{\text{outside}}\approx0
$$

right-hand fingers curl with current；thumb gives internal field direction。

## Toroid / 环形螺线管

core 内：

$$
\boxed{
B(r)=\frac{\mu_0\mu_rNI}{2\pi r}
}
$$

ideal model：

- central hole：$B\approx0$；
- core：nonzero, approximately confined；
- outside：$B\approx0$。

## Approximations / 近似条件

- solenoid must be long relative to radius；
- toroid assumed tightly wound；
- leakage and fringing fields neglected；
- linear core represented by $\mu_r$。

## Watch Out / 易错点

- distinguish total turns $N$ from turns per length $n$。
- solenoid uses $\mu_0nI$，not $\mu_0NI$ when $N$ is total turns。
- toroid contains $2\pi r$。
- toroid field generally varies as $1/r$。
- outside field is approximately, not universally exactly, zero。

## Search and Source Mentions / 搜索与出现位置

### Mentioned In / 出现位置

- [[AP电磁学第12次正课-载流导线力与安培定律#Knowledge Point 30: Long Solenoid|第12次正课 · long solenoid]]
- [[AP电磁学第12次正课-载流导线力与安培定律#Knowledge Point 32: Toroid|第12次正课 · toroid]]

## Connected Notes / 连接

- [[AP电磁学第12次正课-载流导线力与安培定律]]
- [[Ampere's Law]]
- [[Biot-Savart Law]]
- [[Magnetic Fields]]
- [[Electric Current]]
