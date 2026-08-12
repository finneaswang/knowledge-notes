---
title: "Kirchhoff's Rules"
description: "A connected bilingual learning note about Kirchhoff's Rules."
publish: true
tags: [open-notes, concept-card]
---
# Kirchhoff's Rules

## Core Sentence / 核心句

Kirchhoff's junction rule expresses charge conservation, and the loop rule expresses energy conservation.

中文理解：节点定律保证节点不持续积累电荷；回路定律保证绕闭合路径一圈后电势升降代数和为零。

## Junction Rule / 节点定律

$$
\boxed{\sum I_{\text{in}}=\sum I_{\text{out}}}
$$

或统一 signed convention：

$$
\boxed{\sum I_k=0}
$$

## Loop Rule / 回路定律

$$
\boxed{\sum\Delta V=0}
$$

sign table：

| element crossing | $\Delta V$ |
|---|---:|
| source $-\to+$ | $+\mathcal E$ |
| source $+\to-$ | $-\mathcal E$ |
| resistor along current | $-IR$ |
| resistor opposite current | $+IR$ |

## Unknown Directions / 未知方向

branch current 可任意设方向。解得 negative value，只表示真实方向与假设相反。

## Independent Equations / 独立方程

connected network with $N$ essential nodes and $B$ branches：

$$
N-1\quad\text{independent junction equations}
$$

$$
B-N+1\quad\text{independent loop equations}
$$

## When To Use / 什么时候用

看到 multiple loops、multiple sources、bridge network、unknown branch currents、not reducible by series/parallel inspection，就使用 Kirchhoff's rules。

## Watch Out / 易错点

- loop direction 可任意，但不能中途改变。
- resistor sign 要比较 traversal 与 assumed current。
- source sign 只看 crossing polarity。
- negative current 不等于算错。
- 不要重复写 dependent loop equations。

## Search and Source Mentions / 搜索与出现位置

### Mentioned In / 出现位置

- [[AP电磁学第9次正课-电功率电表与基尔霍夫定律#Knowledge Point 22: Net Current into a Junction Is Zero|AP电磁学第9次正课-电功率电表与基尔霍夫定律 · junction rule]]
- [[AP电磁学第9次正课-电功率电表与基尔霍夫定律#Knowledge Point 24: Potential Changes Sum to Zero Around a Closed Loop|AP电磁学第9次正课-电功率电表与基尔霍夫定律 · loop rule]]
- [[AP电磁学第9次正课-电功率电表与基尔霍夫定律#Knowledge Point 28: Use Only Independent Equations|AP电磁学第9次正课-电功率电表与基尔霍夫定律 · independent equations]]
- [[AP电磁学第10次正课-等效电容与RC电路#Knowledge Point 3: An Outer Loop Can Avoid a Complicated Shared Branch|第10次正课 · independent-loop choice]]
- [[AP电磁学第10次正课-等效电容与RC电路#Knowledge Point 14: Kirchhoff's Loop Rule Produces the Differential Equation|第10次正课 · RC loop equation]]

## Connected Notes / 连接

- [[AP电磁学第9次正课-电功率电表与基尔霍夫定律]]
- [[AP电磁学第10次正课-等效电容与RC电路]]
- [[RC Circuits]]
- [[Electric Circuits]]
- [[Electric Current]]
- [[Charge Conservation]]
- [[Electric Potential]]
- [[EMF and Internal Resistance]]
- [[Electrical Meters and Wheatstone Bridge]]
