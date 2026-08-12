---
title: "RC Circuits"
description: "A connected bilingual learning note about RC Circuits."
publish: true
tags: [open-notes, concept-card]
---
# RC Circuits

## Core Sentence / 核心句

An RC circuit changes exponentially because the capacitor voltage depends on the charge already stored.

中文理解：电容储存的电荷越多，它自身建立的电压越大，后续充电电流越小，因此变化速度不断下降，形成 exponential response。

## Time Constant / 时间常数

$$
\boxed{\tau=R_{\text{seen}}C}
$$

$R_{\text{seen}}$ 是 capacitor terminals 看到的 equivalent resistance。

> **The time constant sets the pace of the transition, not the final value.**

## Charging / 充电

初始未充电、final voltage 为 $\mathcal E$：

$$
\boxed{
q(t)=C\mathcal E\left(1-e^{-t/\tau}\right)
}
$$

$$
\boxed{
V_C(t)=\mathcal E\left(1-e^{-t/\tau}\right)
}
$$

$$
\boxed{
i(t)=\frac{\mathcal E}{R_{\text{seen}}}e^{-t/\tau}
}
$$

## Discharging / 放电

初始 voltage 为 $V_0$：

$$
\boxed{
q(t)=Q_0e^{-t/\tau}
}
$$

$$
\boxed{
V_C(t)=V_0e^{-t/\tau}
}
$$

$$
\boxed{
|i(t)|=\frac{V_0}{R_{\text{seen}}}e^{-t/\tau}
}
$$

## One-Tau Rule / 一个时间常数

当 $t=\tau$：

- charging quantity reaches $1-e^{-1}\approx63.2\%$ of its final change；
- decaying quantity retains $e^{-1}\approx36.8\%$ of its initial value。

## Switching Rules / 开关规则

$$
\boxed{V_C(0^+)=V_C(0^-)}
$$

- initially uncharged capacitor at the first instant: approximately a short circuit；
- fully charged capacitor in DC steady state: open circuit；
- capacitor voltage cannot jump；
- current may jump if circuit topology changes。

## Differential-Equation Bridge / 微分方程连接

charging loop：

$$
\mathcal E-iR-\frac{q}{C}=0
$$

with $i=dq/dt$：

$$
R\frac{dq}{dt}+\frac{q}{C}=\mathcal E
$$

这是一阶 linear differential equation。

## When To Use / 什么时候用

看到 resistor + capacitor、switch opens/closes、charging/discharging、transient、steady state、time constant、initial/final current 或 exponential graph，就进入 RC framework。

## Watch Out / 易错点

- $\tau$ 不是“完全充满时间”。
- charging 在 $\tau$ 时是 $63.2\%$，不是 $36.8\%$。
- charging current 在 $\tau$ 时剩 $36.8\%$。
- 连续的是 capacitor voltage，不是 current。
- 复杂网络要使用 $R_{\text{seen}}$，不是随意把所有 resistors 相加。
- 开关题必须分别分析 $0^-$、$0^+$ 与 $t\to\infty$。

## Search and Source Mentions / 搜索与出现位置

### Mentioned In / 出现位置

- [[AP电磁学第10次正课-等效电容与RC电路#Knowledge Point 13: A Capacitor Is Not Always an Open Circuit|第10次正课 · initial and final capacitor behavior]]
- [[AP电磁学第10次正课-等效电容与RC电路#Knowledge Point 14: Kirchhoff's Loop Rule Produces the Differential Equation|第10次正课 · charging differential equation]]
- [[AP电磁学第10次正课-等效电容与RC电路#Knowledge Point 17: The Time Constant Sets the Clock of the Circuit|第10次正课 · time constant]]
- [[AP电磁学第10次正课-等效电容与RC电路#Knowledge Point 26: Capacitor Voltage Cannot Change Instantaneously|第10次正课 · switching continuity]]

## Connected Notes / 连接

- [[AP电磁学第10次正课-等效电容与RC电路]]
- [[AP电磁学第9次正课-电功率电表与基尔霍夫定律]]
- [[Capacitors]]
- [[Electric Circuits]]
- [[Kirchhoff's Rules]]
- [[Electric Power]]
- [[Derivatives]]
- [[Differential Equations]]
- [[Exponential Functions]]
