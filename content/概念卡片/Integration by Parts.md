---
title: "Integration by Parts"
description: "A connected bilingual learning note about Integration by Parts."
publish: true
tags: [open-notes, concept-card]
---
# Integration by Parts

## Core Sentence / 核心句

Integration by parts reverses the Product Rule to replace one product integral with a simpler one.

中文理解：分部积分把乘积求导公式倒过来使用，让一个难处理的乘积积分转化成更简单的积分。

## Formula / 公式

$$
\int u\,dv=uv-\int v\,du.
$$

It follows from

$$
d(uv)=u\,dv+v\,du.
$$

## Selection Rule / 选择规则

Choose $u$ so differentiation simplifies it; choose $dv$ so integration remains manageable. LIATE is a heuristic, not a theorem.

## Workflow / 流程

~~~text
identify product
-> choose u and dv
-> compute du and v
-> write uv - integral(v du)
-> confirm the new integral is simpler
-> integrate and differentiate to verify
~~~

## Watch Out / 易错点

- $dv$ includes the differential and must be integrated to obtain $v$.
- Do not choose $u$ so that $du$ becomes more complicated.
- Keep the minus sign before $\int vdu$.
- Definite integrals require bounds on both the $uv$ term and remaining integral.
- A product alone does not guarantee that by parts is the best method.

## Source / 出现位置

- [[微积分BC第9次正课-积分方法与反常积分#9. Formula From the Product Rule / 公式来源|第9课 · Product Rule 逆运算]]
- [[微积分BC第9次正课-积分方法与反常积分#12. Example: x ln x / 幂函数乘对数|第9课 · x ln x]]
- [[微积分BC第9次正课-积分方法与反常积分#14. Abstract Function Example / 抽象函数例题|第9课 · abstract by parts]]

## Connected Notes / 连接

- [[Antiderivative]]
- [[Integrals]]
- [[U-Substitution]]
- [[微积分BC第9次正课-积分方法与反常积分]]
