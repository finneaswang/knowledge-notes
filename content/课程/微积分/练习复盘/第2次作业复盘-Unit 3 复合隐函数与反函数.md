---
title: "第2次作业复盘 - Unit 3 复合、隐函数与反函数"
description: "A connected bilingual learning note about 第2次作业复盘 - Unit 3 复合、隐函数与反函数."
publish: true
tags: [open-notes, calculus-review]
---
# 第2次作业复盘 - Unit 3 复合、隐函数与反函数

## Reading Guide / 阅读说明

这份复盘同时使用扫描作业和四段 ChatGPT 对话。黑色过程用于判断独立能力，红色补充与聊天提问用于定位断点；AI 多次读错题，因此任何结论都必须回到原扫描件验证。

> **Current conclusion:** 你已经能启动和完成多数单规则求导；当前瓶颈是先确定数学对象，再把 Product / Chain / Implicit / Inverse / Higher-order / Theorem 多层结构正确组合。

## Evidence Boundary / 证据边界

- 单独照片：练习册 P47。
- 11 页 PDF：P48-P54、P56-P58 与 FRQ 续写页。
- P55（第35-37题）未包含在扫描中，因此不作判断。
- FRQ 41、42 的最终数学结果全部核对正确。
- ChatGPT 曾把 $xy^3$ 误读成 $y^3$，又误判为 $x^3$、$e^y$ 或 $e^2$；这些属于 `AI` 错误，不能反向算作你的知识缺口。

## What Is Now Stable / 已经相对稳定

### Direct and composite differentiation

- 多数 Power / Product / Quotient computations 可以独立启动。
- 能写出抽象 Chain Rule：

$$
\frac{d}{dx}f(g(x))=f'(g(x))g'(x).
$$

- 能从 table 与 graph 分别读取函数值和 derivative value。
- 能发现 inner derivative，例如 $x^3$、$x^2-1$、$2x$ 等。

### FRQ assembly

- 第41题能把 $g(x)=[f(x)]^3$、$f(3)$ 与 graph of $f'$ 组合起来，得到正确 tangent slope $75$。
- 第42(a)(b) 能使用图像、公式和 Chain Rule，结果正确。
- 第42(c)(d) 经反馈后能写出完整的 Product + Chain Rule 与 MVT justification。
- 英文答案已经具备 UBC/AP 可读性；主要问题不再是英语，而是数学结构稳定前容易依赖完整范文。

## Main Gaps / 主要缺口

### 1. Inverse derivative requires a location change (`R + M`)

反函数求导不是“先对 $f$ 求导，再把目标数字直接塞进去”。固定流程是：

$$
f(a)=b
\quad\Longrightarrow\quad
(f^{-1})'(b)=\frac1{f'(a)}.
$$

必须先回答：**哪个 original input $a$ 被 $f$ 送到了目标 output $b$？**

作业证据：第11-15题中多次卡在 $f^{-1}(b)$ 的位置寻找。连接 [[Inverse Function Derivatives]] 与 [[Function Composition]]。

### 2. $dy/dx$ records dependence; it is not free cancellation (`R`)

在

$$
\frac{d}{dx}(y^n)=ny^{n-1}\frac{dy}{dx}
$$

中，$dy/dx$ 表示 $y$ 对 $x$ 的变化率。Leibniz notation 可以帮助理解 Chain Rule，但在 algebra 中不能把每次出现的 $dy$ 与 $dx$ 当作普通因子随意删掉。

连接 [[Implicit Differentiation]]、[[Chain Rule]] 与 [[06 - Implicit Differentiation, What's Going On Here]]。

### 3. Product Rule and Chain Rule can be nested (`M`)

第30题原式包含 $xy^3$：

$$
\frac{d}{dx}(xy^3)
=y^3+3xy^2y'.
$$

第一层看见 product：$x\cdot y^3$；第二层对 $y^3$ 使用 Chain Rule。

第42(c)包含 $g(-2x)h(x)$：

$$
m'(x)=-2g'(-2x)h(x)+g(-2x)h'(x).
$$

这里 $(-2x)'=-2$，不是 $-2x$。连接 [[Product Rule]] 与 [[Chain Rule]]。

### 4. Isolate $y'$ only after differentiating every term (`A + M`)

隐函数题的安全顺序：

1. 原式两边逐项求导；
2. 展开所有 Product / Chain contributions；
3. 把所有含 $y'$ 的项放在一边；
4. factor out $y'$；
5. 最后代入具体点。

第16-19、30-34、40题中的主要风险是漏项、符号和过早整理。连接 [[Implicit Differentiation]]。

### 5. Second derivative means differentiating the whole first-derivative relation again (`R + M`)

第39题中，先由

$$
x-y^2=m
$$

得到

$$
y'=\frac1{2y}.
$$

再求导时，$y$ 仍是 $y(x)$：

$$
y''=\frac{d}{dx}\left(\frac12y^{-1}\right)
=-\frac12y^{-2}y'.
$$

连接 [[Higher-Order Derivatives]] 与 [[Second Derivative]]。

### 6. Graph identity comes before graph interpretation (`R`)

- graph of $f$ 有 horizontal tangent at $a$ -> $f'(a)=0$。
- graph of $f'$ 有 horizontal tangent at $a$ -> $f''(a)=0$。
- horizontal tangent 不自动等于 turning point；还要检查左右 increasing/decreasing 是否改变。
- $f$ 的 extrema 要看 $f'$ 是否穿过 $x$ 轴，不是只看 $f'$ 的最高或最低点。

连接 [[Derivatives]]、[[Higher-Order Derivatives]] 与 [[Tangent Line]]。

### 7. MVT is a recognition pattern (`R + J`)

第42(d)的触发结构是：

~~~text
endpoint function values
+ differentiable / continuous condition
+ asks whether there exists c
+ target is g'(c)
-> calculate endpoint average rate
-> Mean Value Theorem
~~~

$$
\frac{g(-3)-g(-5)}{-3-(-5)}
=\frac{2-10}{2}
=-4.
$$

因此存在 $c\in(-5,-3)$ 使 $g'(c)=-4$。不能只查看表格列出的少数 $g'$ values。连接 [[Mean Value Theorem]]、[[Average Rate of Change]] 与 [[Secant Line]]。

## Question Evidence Map / 题目证据地图

| 题目 | 证据 | 主要分类 | 对应节点 |
|---|---|---|---|
| 2 | Product + Chain Rule for logarithmic expression 出现红色纠正 | `M` | [[Product Rule]], [[Chain Rule]], [[Natural Logarithm]] |
| 11-15 | inverse derivative 多次需要定位 original input | `R + M` | [[Inverse Function Derivatives]] |
| 16-19 | implicit terms 中漏 $y'$、漏 Product contribution 或整理符号 | `M + A` | [[Implicit Differentiation]] |
| 20-25 | negative/fractional powers、log、inverse trig derivative retrieval 不稳定 | `M` | [[Derivative Formulas]], [[Trigonometric Derivatives]] |
| 30 | $xy^3$ 同时使用 Product + Chain，AI 还多次误读原式 | `M + AI` | [[Product Rule]], [[Chain Rule]], [[Implicit Differentiation]] |
| 31-34, 40 | implicit relation 中隔离 $y'$ | `M + A` | [[Implicit Differentiation]] |
| 38 | square-root composition 漏 inner factor $4f'(x)$ | `M` | [[Chain Rule]] |
| 39 | implicit second derivative 没有第一入口 | `R + M` | [[Higher-Order Derivatives]], [[Second Derivative]] |
| 41 | graph of $f'$ + Chain Rule，最终正确 | stable with verification | [[Chain Rule]], [[Tangent Line]] |
| 42(c) | Product + Chain + table + graph，反馈后正确 | `M` | [[Product Rule]], [[Chain Rule]] |
| 42(d) | 未主动想到 MVT，反馈后 justification 正确 | `R + J` | [[Mean Value Theorem]] |

## AI Reliability Audit / AI 可靠性审计

这次 AI 造成了额外噪声：

- 把 $xy^3$ 看成 $y^3$；
- 随后又猜成 $x^3$、$e^y$ 或其他表达式；
- 在没有确认原式时给出完整长推导；
- 对图像题的对象存在反复误判。

你的正确反应是发现结果不在选项中，并坚持回到原式。以后固定使用：

1. 先把题目关键表达式打成文本；
2. 要求 AI 复述原式；
3. 原式确认后只给 hint 或 rubric；
4. 结果与选项不符时，优先检查读题、符号和代入，不继续扩大错误推导。

## FRQ Language / FRQ 英文最短结构

### Calculation

> By the product rule and the chain rule, ...
>
> From the table/graph, ...
>
> Therefore, ...

### Theorem justification

> Since $g$ is continuous on $[a,b]$ and differentiable on $(a,b)$, the Mean Value Theorem guarantees that there exists $c\in(a,b)$ such that ...

不要写教学式长解释。每句话必须对应公式、data source、theorem condition 或 conclusion。

## Rework Queue / 重做清单

### Tier A - 必须无提示重做

1. 第15题：inverse derivative location；
2. 第30题：$xy^3$ 的 implicit Product + Chain；
3. 第39题：implicit second derivative；
4. 第42(c)：table + graph + Product + Chain；
5. 第42(d)：MVT identification and justification。

### Tier B - 公式与符号稳定

- 第2、11-13、16-17、19、21、23、25、31-32、38题。

### Passing condition

- Tier A 每题无提示完成；
- 能在动笔前说出最外层结构；
- 能解释为什么使用该 theorem/rule；
- 24 小时后再次正确；
- FRQ 不超过必要长度。

## Final Diagnosis / 本次诊断

你不是“练很多仍然完全不会”。扫描显示，单规则计算已经明显超过第一次作业。当前问题是 **rule selection and composition**：当同一题叠加 inverse location、graph reading、Product + Chain、implicit dependence 或 theorem language 时，第一步不稳定。

因此下一阶段不应继续无限刷同类题，而要训练：

> **Name the object -> identify the outer structure -> list every changing factor/layer -> choose the rule -> calculate -> justify only what is asked.**

中文：先说对象，再看最外层结构，列出所有会变化的因子与层级，然后选规则、计算，最后只补题目要求的 justification。

## Connections / 连接

- [[00 作业复盘索引]]
- [[第1次作业复盘-Unit 2 导数基础]]
- [[微积分BC第3次正课-可导性链式法则与隐函数求导]]
- [[微积分BC第4次正课-反函数高阶导数与运动应用]]
- [[微积分BC第5次正课-相关变化率线性近似与中值定理]]
- [[Function Composition]]
- [[Chain Rule]]
- [[Product Rule]]
- [[Implicit Differentiation]]
- [[Inverse Function Derivatives]]
- [[Higher-Order Derivatives]]
- [[Mean Value Theorem]]
- [[Tangent Line]]
- [[04 - Visualizing the Chain Rule and Product Rule]]
- [[06 - Implicit Differentiation, What's Going On Here]]
