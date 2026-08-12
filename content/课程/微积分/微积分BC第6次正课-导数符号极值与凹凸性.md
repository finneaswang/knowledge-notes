---
title: "微积分BC第6次正课 - 导数符号、极值与凹凸性"
description: "A connected bilingual learning note about 微积分BC第6次正课 - 导数符号、极值与凹凸性."
publish: true
tags: [open-notes, calculus-course]
---
# 微积分BC第6次正课 - 导数符号、极值与凹凸性

## Reading Guide / 阅读说明

本课承接 [[微积分BC第5次正课-相关变化率线性近似与中值定理]]，把 Unit 5 的 derivative analysis 串成一棵完整的树：

~~~text
theorem layer:
IVT / EVT / MVT

first-derivative layer:
sign of f'
-> increasing/decreasing
-> critical numbers
-> local extrema
-> absolute extrema with endpoints

second-derivative layer:
sign of f''
-> concavity
-> inflection points
-> second derivative test
~~~

本笔记保留课堂推导、sign-chart 方法和代表性例题；考试年份、题目频率、轮询与课堂管理话术不保留。

## Reading Rule / 读法约定

- 先确认拿到的是 $f$、$f'$ 还是 $f''$ 的 graph 或 formula。
- critical number 只是候选点；local extremum 与 inflection point 都必须检查 sign change。
- absolute extrema 必须加入 endpoints 比较。
- 中文“凹/凸”不同教材可能方向命名不一致，因此以 concave up/down 与 $f''$ sign 为准。

---

## 1. One-Sentence Mainline / 一句话主线

> **The sign of the first derivative controls direction and local extrema; the sign of the second derivative controls bending and inflection; endpoint comparison turns local candidates into absolute extrema.**
>
> 一阶导数的符号控制函数升降与局部极值，二阶导数的符号控制弯曲方向与拐点，而加入端点比较后才能从局部候选人中选出绝对最值。

## 2. Class Flow / 课堂脉络

1. 补完 [[Extreme Value Theorem]]。
2. 对比 IVT、EVT、MVT 的 hypotheses 与 conclusions。
3. 用 $f'$ 的 sign 判断 increasing/decreasing。
4. 找 derivative 为 $0$ 或不存在的 critical numbers。
5. 建立 sign chart 和 odd/even multiplicity 规则。
6. 用 [[First Derivative Test]] 判 local maximum/minimum。
7. 加入 endpoints 求 [[Absolute Extrema]]。
8. 用 $f''$ 的 sign 判断 [[Concavity]]。
9. 用 concavity sign change 找 [[Inflection Points]]。
10. 用 [[Second Derivative]] test 判 local extrema。

---

# Part A - Three Existence Theorems / 三个存在性定理

## 3. Extreme Value Theorem / 最值定理

若 $f$ 在 closed and bounded interval $[a,b]$ 上 continuous，则 $f$ 必须在该区间取得：

$$
\boxed{\text{an absolute maximum and an absolute minimum}}.
$$

也就是说，存在 $x_{\max},x_{\min}\in[a,b]$ 使

$$
f(x_{\min})\le f(x)\le f(x_{\max})
$$

for every $x\in[a,b]$。

> **Continuity on a closed bounded interval guarantees that the highest and lowest values are actually attained.**
>
> 闭有界区间上的连续性保证最高值与最低值不仅存在上界或下界，而且真的能被取到。

常数函数的 maximum 与 minimum 可以相同，并可在多个点取得。

### Why each hypothesis matters / 前提为何重要

- 没有 continuity：hole 可能删掉本应取得的最高点。
- interval 不 closed：端点极值可能只能趋近、不能取得。
- interval 不 bounded：函数可能无限增长或下降。

---

## 4. EVT Example With a Piecewise Function / 分段函数的存在性说明

题目若问“是否一定存在 maximum”，重点不是先求 maximum，而是验证 EVT。

在拼接点 $x=0$，若

$$
\lim_{x\to0^-}f(x)
=
\lim_{x\to0^+}f(x)
=f(0)=3,
$$

则函数在拼接点 continuous。若各 branch 在其区间内也 continuous，且 domain 是 closed bounded interval，则根据 [[Extreme Value Theorem]]，absolute maximum 与 minimum 必然存在。

这是 existence argument，不是计算 extrema 的 algorithm。

---

## 5. IVT, EVT, and MVT / 三定理对照

| Theorem | Hypotheses | Guaranteed object |
|---|---|---|
| [[Intermediate Value Theorem]] | continuous on $[a,b]$ | intermediate output $f(c)$ |
| [[Extreme Value Theorem]] | continuous on closed bounded $[a,b]$ | attained absolute max and min |
| [[Mean Value Theorem]] | continuous on $[a,b]$, differentiable on $(a,b)$ | $f'(c)$ equals secant slope |

MVT 结论：

$$
f'(c)=\frac{f(b)-f(a)}{b-a}.
$$

~~~text
intermediate output? -> IVT
attained highest/lowest output? -> EVT
instantaneous slope equals average slope? -> MVT
~~~

---

# Part B - First-Derivative Analysis / 一阶导数分析

## 6. Increasing and Decreasing / 单调性

在一个 interval 上：

$$
f'(x)>0
\Longrightarrow
f\text{ is increasing},
$$

$$
f'(x)<0
\Longrightarrow
f\text{ is decreasing}.
$$

课堂把 $f'(x)=0$ 简写成 constant，需要校正：

- 若 $f'(x)=0$ 在整个 interval 上成立，则 $f$ 在该 interval constant。
- 若只在一个 isolated point 有 $f'(c)=0$，只能说明 tangent horizontal，不能说明附近 constant。

### Example

$$
f(x)=x^2+2x-1,
\qquad f'(x)=2x+2.
$$

$$
f'(x)<0\text{ for }x<-1,
\qquad
f'(x)>0\text{ for }x>-1.
$$

所以 $f$ 在 $(-\infty,-1)$ decreasing，在 $(-1,\infty)$ increasing。

---

## 7. Sign Analysis With Fixed-Sign Factors / 先删掉不影响符号的因子

若

$$
f'(x)=
\frac{k(1-x^2)}{(x^2+1)^2}
$$

on $(-1,1)$，则

$$
1-x^2>0,
\qquad
(x^2+1)^2>0.
$$

若要求 strictly decreasing，即 $f'<0$，唯一决定 sign 的是 $k$：

$$
\boxed{k<0}.
$$

另一个例子：

$$
f'(x)=\frac{-2x}{(1+x^2)^2}.
$$

denominator 恒正，因此

$$
f'(x)<0\Longleftrightarrow x>0.
$$

> **Factor first, classify fixed-sign pieces, and analyze only what can actually change sign.**
>
> 先因式分解，确认恒正或恒负部分，只分析真正可能变号的因子。

---

## 8. Reading a Derivative Graph / 读 $f'$ 图像

若题目给的是 graph of $f'$：

- $f'$ 在 horizontal axis 上方 $\Rightarrow f$ increasing。
- $f'$ 在 axis 下方 $\Rightarrow f$ decreasing。
- $f'$ 图像自身上升或下降描述的是 $f''$，不是 $f$ 的 increasing/decreasing。

第一步必须读 graph label。

---

## 9. Critical Numbers / 临界数

$c$ 是 $f$ 的 critical number，要求：

1. $c$ 在 domain of $f$ 中；
2. $f'(c)=0$ 或 $f'(c)$ does not exist。

$$
\boxed{
c\in\operatorname{dom}(f)
\quad\text{and}\quad
[f'(c)=0\text{ or }f'(c)\text{ DNE}]
}
$$

### Examples

$$
f(x)=x^2+1
\Longrightarrow
f'(x)=2x,
$$

所以 $x=0$ 是 critical number。

$$
f(x)=(x-1)^{1/3}
$$

在 $x=1$ 定义，但 $f'(1)$ 不存在，因此 $x=1$ 也是 critical number。

若 denominator 在 $x=0$ 为零、同时原函数在 $0$ 也未定义，则 $0$ 不是该函数的 critical number。

---

## 10. Sign Chart / 标准符号表

课堂“穿根法”本质是 polynomial/rational sign chart：

1. factor derivative；
2. 标出 zeros 和 undefined points；
3. 按顺序切分 number line；
4. 每个 interval 取 test point；
5. 记录 $+$ 或 $-$；
6. 将 $f'$ sign 翻译成 $f$ behavior。

### Multiplicity rule / 重数规则

在 factor

$$
(x-c)^m
$$

处：

- odd multiplicity $m$：sign crosses；
- even multiplicity $m$：sign does not cross。

“奇穿偶不穿”只适用于这种已因式分解的 sign analysis，不是所有函数都能机械画穿根图。

---

## 11. First Derivative Test / 一阶导数判别法

在 critical number $c$ 左右：

$$
f':+\to-
\Longrightarrow
c\text{ is a local maximum},
$$

$$
f':-\to+
\Longrightarrow
c\text{ is a local minimum}.
$$

若 sign 不变，则 $c$ 不是 local extremum。

> **A critical number is only a candidate; the sign change decides the local behavior.**
>
> 临界数只是候选点，左右导数符号变化才决定它是否为局部极值。

---

## 12. Worked First-Derivative Test / 完整例题

设

$$
f(x)=x^3-3x^2.
$$

$$
f'(x)=3x^2-6x=3x(x-2).
$$

critical numbers：

$$
x=0,\quad x=2.
$$

sign chart：

| Interval | $(-\infty,0)$ | $(0,2)$ | $(2,\infty)$ |
|---|---:|---:|---:|
| $f'$ | $+$ | $-$ | $+$ |
| $f$ | increasing | decreasing | increasing |

因此：

$$
x=0\text{ is a local maximum},
$$

$$
x=2\text{ is a local minimum}.
$$

---

## 13. Even-Multiplicity Critical Point / 偶重根不产生极值

若

$$
f'(x)=(x-1)(x-2)^2,
$$

则 $x=2$ 是 even-multiplicity zero，$f'$ 在其两侧 sign 不变。

函数可能在 $x=2$ 有 horizontal tangent，但继续同向 increasing 或 decreasing，所以它不是 local extremum。

课堂比喻：上坡时停顿一下，再继续上坡。

---

## 14. Absolute Extrema on a Closed Interval / 闭区间绝对最值

[[Absolute Extrema]] 的候选人来自：

1. interior critical numbers；
2. endpoints；
3. 若有分段边界或 nondifferentiable domain point，也作为候选检查。

Closed Interval Method：

~~~text
find critical numbers in (a,b)
-> add endpoints a,b
-> evaluate f at every candidate
-> largest output = absolute maximum
-> smallest output = absolute minimum
~~~

local extrema 由附近比较决定；absolute extrema 要和整个 interval 比。

---

## 15. Absolute-Maximum Example / 绝对最大值例题

$$
f(x)=\frac13x^3-4x^2+12x-5
$$

on $[0,9]$。

$$
f'(x)=x^2-8x+12=(x-2)(x-6).
$$

sign 为 $+,-,+$，所以 $x=2$ local maximum，$x=6$ local minimum。

求 absolute maximum 时比较 local maximum candidate 与 endpoints：

$$
f(0)=-5,
\qquad
f(2)=\frac{17}{3},
\qquad
f(9)=22.
$$

因此

$$
\boxed{\text{absolute maximum is }22\text{ at }x=9}.
$$

不能因为 $x=2$ 是 local maximum 就自动把它叫 absolute maximum。

---

## 16. Piecewise Absolute Extrema / 分段函数的最值

对 piecewise function：

1. 每个 branch 分别求 derivative sign；
2. 加入 join point；
3. 加入 closed interval endpoints；
4. 对所有候选直接计算 function values。

join point 即使 nondifferentiable，也可能是 local 或 absolute extremum。不可导不等于不连续。

---

## 17. First-Derivative Analysis Tree / 一阶导数知识树

~~~text
start with f
-> compute f'

f' > 0 / f' < 0
-> increasing / decreasing

f' = 0 or DNE at a domain point
-> critical number

critical number + sign change
-> local maximum / minimum

critical candidates + endpoints
-> absolute maximum / minimum
~~~

---

# Part C - Second-Derivative Analysis / 二阶导数分析

## 18. Concavity / 凹凸性

[[Concavity]] describes how slopes change:

$$
f''(x)>0
\Longrightarrow
f'(x)\text{ increasing}
\Longrightarrow
f\text{ concave up},
$$

$$
f''(x)<0
\Longrightarrow
f'(x)\text{ decreasing}
\Longrightarrow
f\text{ concave down}.
$$

中文图像记忆：

- concave up：像碗口向上；
- concave down：像拱顶向下。

重点不是函数本身在升还是降，而是 tangent slopes 在变大还是变小。

---

## 19. Concavity Example / 凹凸区间例题

设

$$
f(x)=x^3+2x^2-3x+1.
$$

$$
f'(x)=3x^2+4x-3,
$$

$$
f''(x)=6x+4.
$$

候选点：

$$
6x+4=0
\Longrightarrow
x=-\frac23.
$$

所以：

$$
f''<0\text{ for }x<-\frac23
\Longrightarrow
\text{concave down},
$$

$$
f''>0\text{ for }x>-\frac23
\Longrightarrow
\text{concave up}.
$$

---

## 20. Even Root in a Concavity Sign Chart / 二阶导偶重根

若

$$
f''(x)=x(x+2)^2,
$$

zeros 为 $x=-2,0$。

- $x=-2$ 是 even-multiplicity zero，sign 不变；
- $x=0$ 是 odd-multiplicity zero，sign 改变。

因此 $x=-2$ 不是 inflection point；$x=0$ 才是。

---

## 21. Inflection Points / 拐点

[[Inflection Points]] 是 concavity 改变的 domain points：

$$
\text{concave up}\leftrightarrow\text{concave down}.
$$

通常先找 candidates：

$$
f''(c)=0
\quad\text{or}\quad
f''(c)\text{ DNE},
$$

再检查 $f''$ 是否变号。

> **A zero of the second derivative is only an inflection candidate; concavity must actually change.**
>
> 二阶导数为零只是拐点候选，真正标准是凹凸性发生改变。

例如

$$
f''(x)=12x^2(x-3)
$$

在 $x=0$ 不变号，在 $x=3$ 变号，所以唯一 inflection point 的 $x$-coordinate 是

$$
\boxed{x=3}.
$$

---

## 22. Second Derivative Test / 二阶导数判别法

若已知

$$
f'(c)=0,
$$

则：

$$
f''(c)>0
\Longrightarrow
c\text{ is a local minimum},
$$

$$
f''(c)<0
\Longrightarrow
c\text{ is a local maximum}.
$$

若

$$
f''(c)=0
$$

或不存在，test is inconclusive，需要回到 [[First Derivative Test]] 或其他分析。

这是因为：

- concave up + horizontal tangent $\Rightarrow$ local minimum；
- concave down + horizontal tangent $\Rightarrow$ local maximum。

---

## 23. Implicit Second-Derivative Test / 隐函数例题

若在某点

$$
\frac{dy}{dx}=x-y
$$

且点满足 $x=y$，则

$$
\frac{dy}{dx}=0.
$$

再求导：

$$
\frac{d^2y}{dx^2}
=1-\frac{dy}{dx}.
$$

在 critical point：

$$
\frac{d^2y}{dx^2}=1>0.
$$

因此该点是 local minimum。

二阶导 test 在不方便直接观察 critical point 左右 sign 时尤其有用。

---

## 24. Product Example for the Second Derivative Test / 乘积例题

若

$$
f'(x)=(x^2-4)g(x),
\qquad g(x)<0
$$

for all relevant $x$，则 $x=\pm2$ 是 critical numbers。

$$
f''(x)=2xg(x)+(x^2-4)g'(x).
$$

在 $x=2$：

$$
f''(2)=4g(2)<0,
$$

所以 $x=2$ 是 local maximum。

在 $x=-2$：

$$
f''(-2)=-4g(-2)>0,
$$

所以 $x=-2$ 是 local minimum。

---

## 25. First Versus Second Derivative / 一阶与二阶导对照

| Information | What it tells about $f$ |
|---|---|
| $f'>0$ | increasing |
| $f'<0$ | decreasing |
| $f'$ changes $+\to-$ | local maximum |
| $f'$ changes $-\to+$ | local minimum |
| $f''>0$ | concave up |
| $f''<0$ | concave down |
| $f''$ changes sign | inflection point |
| $f'(c)=0$, $f''(c)>0$ | local minimum |
| $f'(c)=0$, $f''(c)<0$ | local maximum |

---

## 26. Deep Phrases / 深句对应表

| English sentence | 中文记忆 |
|---|---|
| EVT guarantees attained extrema, not their locations. | EVT 保证最值能取到，但不告诉位置。 |
| The derivative sign controls the direction of the original function. | 导数符号控制原函数升降。 |
| A critical number is a candidate, not automatically an extremum. | 临界数只是极值候选。 |
| Odd multiplicity changes sign; even multiplicity preserves sign. | 奇重根变号，偶重根不变号。 |
| Local extrema require a first-derivative sign change. | 一阶导必须变号才产生局部极值。 |
| Absolute extrema compare critical candidates with endpoints. | 绝对最值必须比较临界候选和端点。 |
| Concavity describes whether slopes are increasing or decreasing. | 凹凸性描述斜率在增大还是减小。 |
| An inflection point requires a change in concavity. | 拐点要求凹凸性真实改变。 |

---

## 27. Fidelity Notes and Corrections / 原稿校正

1. EVT 的完整常用前提是 continuous on a closed bounded interval。
2. 单点 $f'(c)=0$ 不表示函数 constant；只有 derivative 在整个 interval 恒为 $0$ 才推出 constant。
3. critical number 必须属于 domain of $f$；仅仅使 derivative formula undefined 的非定义点不算。
4. local maximum/minimum 不要求图像尖或圆滑，标准是邻域比较或 $f'$ sign change。
5. “极大极小值都是临界点”需在 ordinary interior-domain setting 理解；endpoint local-extremum conventions 会因定义而不同。
6. $f''(c)=0$ 不足以推出 inflection point，必须检查 concavity change。
7. second derivative test 必须先有 $f'(c)=0$；若 $f''(c)=0$，结论不确定。
8. 中文“凹/凸”命名可能因教材相反，本笔记以 concave up/down 和公式为准。

---

## 28. Video Companion / 搭配课堂录像

| Approx. time | Topic | What to watch for |
|---|---|---|
| 00:44-08:51 | EVT and theorem comparison | hypotheses 与 existence conclusions |
| 09:13-27:04 | Increasing/decreasing | $f'$ sign 与 graph label |
| 27:04-44:21 | Critical numbers | derivative zero or DNE, but in domain |
| 44:21-01:07:17 | First Derivative Test | sign chart、奇穿偶不穿、local extrema |
| 01:09:04-01:34:50 | Absolute extrema | critical candidates + endpoints |
| 01:35:46-01:44:41 | Concavity | $f''$ sign 与 slope trend |
| 01:44:41-01:51:44 | Inflection points | second derivative must change sign |
| 01:51:44-02:00:15 | Second Derivative Test | local max/min from concavity |

---

## 29. Decision Maps / 决策图

### First derivative

~~~text
compute/fetch f'
-> zeros and DNE points in domain
-> sign chart
-> increasing/decreasing
-> sign changes give local extrema
-> add endpoints and compare values
-> absolute extrema
~~~

### Second derivative

~~~text
compute/fetch f''
-> sign chart
-> positive: concave up
-> negative: concave down
-> sign change: inflection point

at f'(c)=0:
f''(c)>0 -> local min
f''(c)<0 -> local max
f''(c)=0 -> inconclusive
~~~

---

## 30. Knowledge Graph Connections / 知识图谱连接

- [[微积分BC第7次正课-导数图像优化与定积分入门]] 把本课的 derivative sign 与 concavity 用到 graph interpretation 和 [[Optimization]]，再进入 integration。
- [[微积分BC第5次正课-相关变化率线性近似与中值定理]] 提供 MVT 与 Unit 5 入口。
- [[Intermediate Value Theorem]]、[[Extreme Value Theorem]]、[[Mean Value Theorem]] 分别保证 intermediate output、attained extrema、average-matching derivative。
- [[Derivatives]] 的 sign 进入 [[First Derivative Test]]，再连接 [[Absolute Extrema]]。
- [[Second Derivative]] 的 sign 进入 [[Concavity]]，sign change 进入 [[Inflection Points]]。
- [[Higher-Order Derivatives]] 提供 repeated differentiation 的统一背景。
- [[10 - Higher Order Derivatives]] 连接 changing slope、concavity 与 second derivative。
- [[12 - The Other Way to Visualize Derivatives]] 连接 derivative sign、local scaling 与 graph direction。

3Blue1Brown 连接来自现有 Wiki connection sections；本次未读取完整正文。

---

## 31. Confusion / Questions

- [ ] 能否完整说出 EVT 的 closed bounded interval 与 continuity？
- [ ] 看到 graph of $f'$ 时，能否只用其高度判断 $f$ 升降？
- [ ] 能否检查 candidate 是否属于 domain of $f$？
- [ ] 能否区分 critical number 与 local extremum？
- [ ] sign chart 中能否识别 odd/even multiplicity？
- [ ] 求 absolute extrema 时是否总加入 endpoints？
- [ ] 能否区分 $f''>0$ 与 $f$ increasing？
- [ ] $f''(c)=0$ 时，是否继续检查 concavity sign change？
- [ ] second derivative test 失效时，能否回到 first derivative test？

---

## 32. After-Class Compression / 看完压缩版

~~~text
EVT:
continuous on closed bounded [a,b]
-> attained absolute max and min

f' > 0 -> f increasing
f' < 0 -> f decreasing

critical number:
in domain of f
and f'=0 or f' DNE

first derivative test:
+ to - -> local max
- to + -> local min
no sign change -> neither

absolute extrema:
critical candidates + endpoints
evaluate and compare

f'' > 0 -> concave up
f'' < 0 -> concave down

inflection point:
concavity changes
not merely f''=0

second derivative test:
f'(c)=0 and f''(c)>0 -> local min
f'(c)=0 and f''(c)<0 -> local max
f''(c)=0 -> inconclusive
~~~

## 33. Links / 链接

- [[UBC Knowledge Graph]]
- [[AP Calculus BC]]
- [[微积分BC第5次正课-相关变化率线性近似与中值定理]]
- [[Intermediate Value Theorem]]
- [[Extreme Value Theorem]]
- [[Mean Value Theorem]]
- [[Derivatives]]
- [[First Derivative Test]]
- [[Absolute Extrema]]
- [[Second Derivative]]
- [[Concavity]]
- [[Inflection Points]]
- [[Higher-Order Derivatives]]
- [[10 - Higher Order Derivatives]]
- [[12 - The Other Way to Visualize Derivatives]]
- [[Optimization]]
- [[微积分BC第7次正课-导数图像优化与定积分入门]]
