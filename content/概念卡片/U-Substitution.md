---
title: "U-Substitution"
description: "A connected bilingual calculus note about U-Substitution."
publish: true
tags: [calculus, concept-card]
---
# U-Substitution

## Core Sentence / 核心句

U-substitution simplifies an integral by recognizing and reversing a hidden Chain Rule pattern.

中文理解：当 composite inner function 与它的 derivative factor 同时出现时，用 $u$ 代替内层结构，把积分还原为熟悉形式。

## Pattern / 结构

If $F'=f$, then

$$
\int f(g(x))g'(x)\,dx=F(g(x))+C.
$$

Set

$$
u=g(x),\qquad du=g'(x)\,dx,
$$

so the integral becomes $\int f(u)du$.

## Workflow / 流程

~~~text
choose repeated inner expression u
-> compute du
-> match remaining factor up to a constant
-> rewrite entirely in u
-> integrate
-> substitute back
-> differentiate to verify
~~~

## Watch Out / 易错点

- 选 $u$ 的目标是简化，不是固定选择“最复杂的一块”。
- 若缺的只是 nonzero constant factor，可以补偿；若缺的是 variable-dependent factor，不能凭空补。
- 改写后不要混留 $x$ 与 $u$。
- indefinite integral 要加 $+C$。
- differential notation is justified by the Chain Rule, not free fraction algebra.

## Source / 出现位置

- [[微积分BC第8次正课-反导FTC变上限积分与换元#21. U-Substitution Reverses the Chain Rule / 换元法逆转链式法则|第8课 · 换元法本质]]
- [[微积分BC第8次正课-反导FTC变上限积分与换元#23. Example: x Times a Composite Power / 复合幂例题|第8课 · 复合幂换元]]
- [[微积分BC第8次正课-反导FTC变上限积分与换元#24. Example: High Power / 高次复合幂|第8课 · 高次复合幂]]
- [[微积分BC第9次正课-积分方法与反常积分#4. Two Consistent Ways to Handle Bounds / 两种一致做法|第9课 · definite substitution bounds]]
- [[微积分BC第9次正课-积分方法与反常积分#26. Improper Integral With Substitution / 反常积分与换元|第9课 · improper substitution]]

## Connected Notes / 连接

- [[Chain Rule]]
- [[Antiderivative]]
- Integrals
- [[Fundamental Theorem of Calculus]]
- [[微积分BC第8次正课-反导FTC变上限积分与换元]]
- [[Improper Integral]]
- [[微积分BC第9次正课-积分方法与反常积分]]
