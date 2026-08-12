---
title: "Fourier Series"
description: "A connected bilingual learning note about Fourier Series."
publish: true
tags: [open-notes, concept-card]
---
# Fourier Series

## One-Sentence Idea / 一句话

> A Fourier series represents a complicated function as a sum of simple sinusoidal modes.

Fourier series 把复杂函数分解为不同 frequencies、amplitudes 和 phases 的简单 sine/cosine modes 之和。

## Core Form

对周期函数，典型展开为

$$
f(x)=\frac{a_0}{2}+\sum_{n=1}^{\infty}
\left(a_n\cos nx+b_n\sin nx\right).
$$

有限个 modes 给出 approximation；加入更多 modes，通常能重建更多细节。

## Why It Appears Here

Fourier 研究 [[Heat Equation]] 时发现：复杂 initial temperature profile 可以拆成简单 spatial modes。由于 heat equation 是 linear 的，每个 mode 可以分别演化，再通过 superposition 相加回完整 solution。

## Connections

- [[Infinite Sequence and Series]]
- [[Trigonometric Derivatives]]
- [[Heat Equation]]
- [[Differential Equations]]
- [[02 - But What Is a Partial Differential Equation#Knowledge Point 3: The Heat Equation Is a Gateway to Diffusion]]

## Search and Source Mentions

- First series preview: [[02 - But What Is a Partial Differential Equation]]
