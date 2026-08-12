---
title: "RL Circuits"
description: "A connected bilingual learning note about RL Circuits."
publish: true
tags: [open-notes, concept-card]
---
# RL Circuits

## Core Sentence / 核心句

An RL circuit changes exponentially because the inductor opposes changes in current.

中文理解：电感产生的 self-induced EMF 随 $di/dt$ 改变，使 current 不能跳变，只能以 exponential transient 接近新的 steady state。

## Time Constant / 时间常数

$$
\boxed{\tau_L=\frac{L}{R_{\text{seen}}}}
$$

$R_{\text{seen}}$ 是 inductor terminals 看到的 equivalent resistance。

> **The time constant sets the pace of the transition, not the final value.**

## Current Growth / 电流建立

simple series RL with zero initial current：

$$
\boxed{
i(t)=\frac{\mathcal E}{R}
\left(1-e^{-t/\tau_L}\right)
}
$$

at $t=\tau_L$，current reaches about $63.2\%$ of its final value。

## Current Decay / 电流衰减

$$
\boxed{i(t)=I_0e^{-t/\tau_L}}
$$

at $t=\tau_L$，current retains about $36.8\%$。

energy：

$$
\boxed{U_L(t)=U_0e^{-2t/\tau_L}}
$$

## Switching Workflow / 开关流程

1. solve $0^-$ steady state；
2. enforce $i_L(0^+)=i_L(0^-)$；
3. redraw the $0^+$ circuit；
4. solve $t\to\infty$ with ideal inductor replaced by a wire；
5. use $V_L=Ldi/dt$ for initial slope；
6. use $\tau_L=L/R_{\text{seen}}$ only after finding the resistance seen by the inductor。

## RC Comparison / 与RC对照

- capacitor voltage cannot jump；inductor current cannot jump；
- initially uncharged capacitor behaves as a short；initially unenergized inductor behaves as an open；
- DC steady capacitor behaves as an open；DC steady ideal inductor behaves as a short；
- $\tau_C=RC$；$\tau_L=L/R$。

## Watch Out / 易错点

- do not replace the inductor by an open for all time；
- do not assume $V_L$ equals source voltage in a multi-resistor circuit；
- energy decay has exponent $-2t/\tau_L$；
- current continuity applies across switching, but voltage may jump；
- $R_{\text{seen}}$ may differ from a visibly adjacent resistor。

## Search and Source Mentions / 搜索与出现位置

### Mentioned In / 出现位置

- [[AP电磁学第14次正课-楞次定律感生电场与RL电路#Knowledge Point 21: Current Through an Inductor Cannot Jump|第14次正课 · current continuity]]
- [[AP电磁学第14次正课-楞次定律感生电场与RL电路#Knowledge Point 22: The Current Rises Exponentially|第14次正课 · current rise]]
- [[AP电磁学第14次正课-楞次定律感生电场与RL电路#Knowledge Point 24: The Inductor Temporarily Acts as a Source|第14次正课 · current decay]]
- [[AP电磁学第14次正课-楞次定律感生电场与RL电路#Knowledge Point 28: Initial di/dt Uses the Voltage Across L, Not Automatically the Source Voltage|第14次正课 · initial slope correction]]

## Connected Notes / 连接

- [[Inductors]]
- [[RC Circuits]]
- [[Kirchhoff's Rules]]
- [[Electric Circuits]]
- [[Differential Equations]]
- [[Exponential Functions]]
- [[Electric Power]]
