---
title: "微积分BC第14次正课 - Ratio Test 与 Taylor Series"
description: "A connected bilingual learning note about 微积分BC第14次正课 - Ratio Test 与 Taylor Series."
publish: true
tags: [open-notes, calculus-course]
---
# 微积分BC第14次正课 - Ratio Test 与 Taylor Series

## Reading Guide / 阅读说明

这份笔记接在 [[微积分BC第13次正课-无穷级数判敛]] 后面。第 13 次课主要整理前 6 种判敛方法；第 14 次课先补最后一种判敛工具 [[Ratio Test]]，再进入 [[Taylor Series]] / [[Maclaurin Series]] / [[Power Series]] 的核心框架。

这份笔记继续用：

- English exam/core sentences
- 中文解释和纠错
- Obsidian wiki links
- LaTeX 公式
- “深句对应表”帮助记忆

## 1. What This Lecture Is About / 这节课在讲什么

这节课分成两大块：

```text
Part A: finish convergence tests
Part B: start Taylor / Maclaurin / Power Series
```

Part A:

- [[Ratio Test]]
- choosing among 7 convergence tests
- [[Absolute Convergence]]
- [[Conditional Convergence]]
- [[Alternating Series Error Bound]]

Part B:

- [[Taylor Series]]
- [[Maclaurin Series]]
- common Maclaurin expansions
- using series to differentiate and integrate
- [[Lagrange Error Bound]]
- [[Interval of Convergence]]
- [[Radius of Convergence]]

课堂里的核心提醒是：

```text
第十章不是一节课听懂的内容，而是一个长期熟悉 test signals 和 computation patterns 的过程。
```

中文理解：Unit 10 的难点不是某个公式，而是“看到题目以后能不能快速判断该用哪种工具”。

## 2. Link to Previous Lecture / 和第13次正课的连接

第 13 次课已经讲了：

- [[Geometric Series]]
- [[nth Term Test for Divergence]]
- [[Integral Test]]
- [[p-Series]]
- [[Comparison Test]]
- [[Limit Comparison Test]]
- [[Alternating Series Test]]

第 14 次课补上第 7 种：

- [[Ratio Test]]

然后把“是否收敛”进一步细分成：

```text
convergent
  -> absolutely convergent
  -> conditionally convergent
divergent
```

最后进入 power series，因为 power series 的收敛区间还是要靠 [[Ratio Test]]。

## 3. Class Flow / 课堂脉络

1. 回顾第 13 次课：前 6 种 convergence tests。
2. 讲第 7 种：[[Ratio Test]]。
3. 用综合选择题训练“看到级数先选 test”。
4. 引入 [[Absolute Convergence]] 和 [[Conditional Convergence]]。
5. 讲 [[Alternating Series Error Bound]]：交错级数误差由下一项控制。
6. 引入 [[Taylor Series]]：把复杂函数写成 power series。
7. 用 $e^x$ about $x=1$ 展示 Taylor 展开。
8. 用 $\frac{1}{(1+x)^2}$ 和 $\ln(3-x)$ 练 Taylor polynomial。
9. 讲 [[Maclaurin Series]]：Taylor series centered at $0$。
10. 背常用 Maclaurin expansions。
11. 用 series 做求导和积分。
12. 讲 [[Lagrange Error Bound]]。
13. 讲 [[Interval of Convergence]] 和 [[Radius of Convergence]]。

## 4. Core Ideas / 核心知识块

### Knowledge Point 1: Ratio Test Is the Last Convergence Test

[[Ratio Test]] 用在：

```text
factorials, exponentials, powers, or no obvious comparison signal
```

严格说，它判断的是级数：

$$
\sum a_n
$$

计算：

$$
L=\lim_{n\to\infty}\left|\frac{a_{n+1}}{a_n}\right|
$$

结论：

$$
L<1 \Rightarrow \sum a_n \text{ converges absolutely}
$$

$$
L>1 \text{ or } L=\infty \Rightarrow \sum a_n \text{ diverges}
$$

$$
L=1 \Rightarrow \text{inconclusive}
$$

中文理解：

- 比值小于 1：后一项相对前一项越来越小得足够快，所以收敛。
- 比值大于 1：后一项没有衰减，甚至变大，所以发散。
- 比值等于 1：这个 test 看不出来，换别的方法。

Core sentence:

```text
If the ratio test gives L = 1, the test is inconclusive.
```

中文：$L=1$ 不是收敛，也不是发散，是“这个方法没用”。

### Knowledge Point 2: Ratio Test Example

例子：

$$
\sum \frac{2^n}{n}
$$

令：

$$
a_n=\frac{2^n}{n}
$$

则：

$$
\left|\frac{a_{n+1}}{a_n}\right|
=\left|\frac{2^{n+1}}{n+1}\cdot\frac{n}{2^n}\right|
=2\cdot\frac{n}{n+1}
$$

所以：

$$
L=\lim_{n\to\infty}2\cdot\frac{n}{n+1}=2
$$

因为：

$$
L=2>1
$$

所以：

$$
\sum \frac{2^n}{n}\text{ diverges}
$$

注意：课堂 transcript 里有一处口算说成 $1/2$，但按标准 Ratio Test 算法应为 $2$，因此该级数发散。这也是为什么使用 Ratio Test 时必须把 $a_{n+1}/a_n$ 的代数运算写清楚。

### Knowledge Point 3: Choosing Among 7 Tests / 七种方法怎么选

七种 convergence tests 的信号：

| Signal / 题目信号 | Test / 方法 |
|---|---|
| $\sum ar^n$ or constant ratio | [[Geometric Series]] |
| $\lim a_n\ne0$ | [[nth Term Test for Divergence]] |
| positive, decreasing, integrable function | [[Integral Test]] |
| $\sum 1/n^p$ | [[p-Series]] |
| compare to known larger/smaller positive series | [[Comparison Test]] |
| same end behavior as known series | [[Limit Comparison Test]] |
| $(-1)^n$ or alternating signs | [[Alternating Series Test]] |
| factorials, exponentials, powers | [[Ratio Test]] |

Exam thinking:

```text
Do not ask “what is the answer first?”
Ask “what test does this series look like?”
```

中文理解：AP 题不是让你自由发挥，而是在训练你识别 signal。

### Knowledge Point 4: Absolute vs Conditional Convergence

先判断：

$$
\sum |a_n|
$$

再判断：

$$
\sum a_n
$$

分类：

| Case | Name |
|---|---|
| $\sum |a_n|$ converges | absolutely convergent |
| $\sum a_n$ converges but $\sum |a_n|$ diverges | conditionally convergent |
| $\sum a_n$ diverges | divergent |

Core sentence:

```text
Absolute convergence means the series converges even after removing the signs.
```

中文：绝对收敛说明正负号不是“救命原因”；它本身就收敛得足够强。

Core sentence:

```text
Conditional convergence means the alternating signs are what make the series converge.
```

中文：条件收敛说明不加正负号就发散，靠 alternating cancellation 才收敛。

### Knowledge Point 5: Conditional Convergence Example

Alternating harmonic series:

$$
\sum_{n=1}^{\infty}\frac{(-1)^{n+1}}{n}
$$

原级数：

$$
\sum \frac{(-1)^{n+1}}{n}
$$

由 [[Alternating Series Test]] 收敛。

取绝对值：

$$
\sum \left|\frac{(-1)^{n+1}}{n}\right|
=\sum\frac{1}{n}
$$

这是 harmonic series，发散。

所以：

$$
\sum_{n=1}^{\infty}\frac{(-1)^{n+1}}{n}
\text{ is conditionally convergent}
$$

### Knowledge Point 6: Alternating Series Error Bound

对于满足 [[Alternating Series Test]] 条件的级数：

$$
\sum (-1)^n a_n
$$

如果用前 $n$ 项部分和 $S_n$ 近似真实和 $S$，则：

$$
|S-S_n|\le a_{n+1}
$$

Core sentence:

```text
In an alternating series, the error is at most the first omitted term.
```

中文：

```text
交错级数里，加到第几项，误差最多就是下一项的绝对值。
```

为什么？

因为后面的项一正一负、越来越小。第一项没加的 leftover 会被后面更小的反向项部分抵消，所以误差不会超过第一项漏掉的量。

### Knowledge Point 7: Alternating Error Bound Example

如果：

$$
S=\sum_{n=1}^{\infty}\frac{(-1)^{n+1}2}{n}
$$

用前 $k$ 项 $P_k$ 近似，想让：

$$
|S-P_k|<0.03
$$

误差由下一项控制：

$$
\frac{2}{k+1}<0.03
$$

解：

$$
k+1>\frac{2}{0.03}=66.666\cdots
$$

所以至少要取：

$$
k=66
$$

具体题目要看不等号和选项，但核心逻辑永远是：

```text
first omitted term <= allowed error
```

## 5. Taylor Series / 泰勒级数

### Knowledge Point 8: Taylor's Big Idea

Taylor 的核心想法：

```text
All smooth functions can be represented by power series near a point.
```

中文理解：复杂函数不好求导/积分；power functions 最好操作。所以 Taylor series 的目的就是把复杂函数变成 polynomial-like expression。

课堂里的中文压缩：

```text
在 Taylor 眼里，所有函数都可以写成幂函数的形式。
```

### Knowledge Point 9: Taylor Formula

若函数在 $x=c$ 附近足够可导，则：

$$
f(x)=f(c)+f'(c)(x-c)+\frac{f''(c)}{2!}(x-c)^2+\cdots+\frac{f^{(n)}(c)}{n!}(x-c)^n+\cdots
$$

也可以写成：

$$
f(x)=\sum_{n=0}^{\infty}\frac{f^{(n)}(c)}{n!}(x-c)^n
$$

关键词：

```text
about x = c
```

意思是：

```text
centered at c
```

中文理解：题目说 “Taylor series about $x=1$”，就是把 $c$ 取成 $1$，所有项都围绕 $(x-1)$ 展开。

### Knowledge Point 10: Taylor Example - $e^x$ about $x=1$

对于：

$$
f(x)=e^x
$$

在：

$$
x=1
$$

处展开。

因为：

$$
f^{(n)}(x)=e^x
$$

所以：

$$
f^{(n)}(1)=e
$$

因此：

$$
e^x=e+e(x-1)+\frac{e}{2!}(x-1)^2+\cdots+\frac{e}{n!}(x-1)^n+\cdots
$$

中文理解：$e^x$ 的所有阶导数都是自己，所以每个 coefficient 都是 $e$ 除以 factorial。

### Knowledge Point 11: Coefficient Questions / 系数题

例子：

$$
f(x)=\frac{1}{(1+x)^2}
$$

问 Taylor series about $x=0$ 中 $x^2$ 的 coefficient。

因为 centered at $0$：

$$
f(x)=f(0)+f'(0)x+\frac{f''(0)}{2!}x^2+\cdots
$$

所以 $x^2$ 的 coefficient 是：

$$
\frac{f''(0)}{2!}
$$

计算：

$$
f(x)=(1+x)^{-2}
$$

$$
f'(x)=-2(1+x)^{-3}
$$

$$
f''(x)=6(1+x)^{-4}
$$

所以：

$$
f''(0)=6
$$

因此：

$$
\frac{f''(0)}{2!}=\frac{6}{2}=3
$$

答案：

$$
3
$$

### Knowledge Point 12: Taylor Polynomial Degree

题目说：

```text
third degree Taylor polynomial
```

意思是写到：

$$
(x-c)^3
$$

不是“写三项”。

例子：

$$
f(x)=\ln(3-x)
$$

about $x=2$，third degree Taylor polynomial。

令 $y=x-2$，则：

$$
\ln(3-x)=\ln(1-y)
$$

所以：

$$
\ln(3-x)=-(x-2)-\frac{1}{2}(x-2)^2-\frac{1}{3}(x-2)^3+\cdots
$$

third degree polynomial:

$$
P_3(x)=-(x-2)-\frac{1}{2}(x-2)^2-\frac{1}{3}(x-2)^3
$$

## 6. Maclaurin Series / 麦克劳林级数

### Knowledge Point 13: Maclaurin Is Taylor Centered at 0

[[Maclaurin Series]] 是特殊的 [[Taylor Series]]：

$$
c=0
$$

所以：

$$
f(x)=f(0)+f'(0)x+\frac{f''(0)}{2!}x^2+\frac{f^{(3)}(0)}{3!}x^3+\cdots
$$

Core sentence:

```text
A Maclaurin series is a Taylor series about x = 0.
```

中文：看到 Maclaurin，就默认 centered at $0$。

### Knowledge Point 14: Common Maclaurin Series

这些必须熟：

$$
e^x=1+x+\frac{x^2}{2!}+\frac{x^3}{3!}+\cdots+\frac{x^n}{n!}+\cdots
$$

$$
\sin x=x-\frac{x^3}{3!}+\frac{x^5}{5!}-\frac{x^7}{7!}+\cdots
$$

$$
\cos x=1-\frac{x^2}{2!}+\frac{x^4}{4!}-\frac{x^6}{6!}+\cdots
$$

$$
\frac{1}{1-x}=1+x+x^2+x^3+\cdots,\quad |x|<1
$$

$$
\frac{1}{1+x}=1-x+x^2-x^3+\cdots,\quad |x|<1
$$

### Knowledge Point 15: Substitution in Maclaurin Series

如果知道：

$$
e^x=1+x+\frac{x^2}{2!}+\frac{x^3}{3!}+\cdots
$$

那么：

$$
e^{-x}=1-x+\frac{x^2}{2!}-\frac{x^3}{3!}+\cdots
$$

因为把所有 $x$ 换成 $-x$。

同理：

$$
e^{x^2}=1+x^2+\frac{x^4}{2!}+\frac{x^6}{3!}+\cdots
$$

Core sentence:

```text
If the input changes, replace every x in the known series by that input.
```

中文：不是重新推一遍，而是把标准展开里的 $x$ 整体替换。

### Knowledge Point 16: Even and Odd Cancellation

课堂例子：

$$
\frac{1}{2}(e^x+e^{-x})
$$

展开：

$$
e^x=1+x+\frac{x^2}{2!}+\frac{x^3}{3!}+\frac{x^4}{4!}+\cdots
$$

$$
e^{-x}=1-x+\frac{x^2}{2!}-\frac{x^3}{3!}+\frac{x^4}{4!}-\cdots
$$

相加后，odd powers 消掉：

$$
\frac{1}{2}(e^x+e^{-x})
=1+\frac{x^2}{2!}+\frac{x^4}{4!}+\frac{x^6}{6!}+\cdots
$$

中文理解：一正一负相加，奇次项抵消，偶次项保留。

### Knowledge Point 17: Series Can Be Differentiated and Integrated

核心：

```text
The power series is equal to the function on its interval of convergence.
```

所以在收敛区间内，可以逐项求导/积分：

$$
\frac{d}{dx}\sum a_nx^n=\sum na_nx^{n-1}
$$

$$
\int \sum a_nx^n\,dx=\sum \frac{a_n}{n+1}x^{n+1}+C
$$

中文理解：Taylor/Maclaurin 的真正用途不是“好看”，而是把不会直接积分的函数换成可以逐项积分的 power series。

例子：

$$
\sin(x^2)=x^2-\frac{x^6}{3!}+\frac{x^{10}}{5!}-\cdots
$$

因此：

$$
\int \sin(x^2)\,dx
=\frac{x^3}{3}-\frac{x^7}{7\cdot3!}+\frac{x^{11}}{11\cdot5!}-\cdots+C
$$

## 7. Lagrange Error Bound / 拉格朗日误差

### Knowledge Point 18: Taylor Polynomial Has Error

如果只用 $n$ 阶 Taylor polynomial：

$$
P_n(x)
$$

近似：

$$
f(x)
$$

那么误差：

$$
R_n(x)=f(x)-P_n(x)
$$

[[Lagrange Error Bound]] 给出：

$$
R_n(x)=\frac{f^{(n+1)}(z)}{(n+1)!}(x-c)^{n+1}
$$

其中 $z$ 在 $x$ 和 $c$ 之间。

如果：

$$
|f^{(n+1)}(z)|\le M
$$

则：

$$
|R_n(x)|\le \frac{M}{(n+1)!}|x-c|^{n+1}
$$

Core sentence:

```text
The Lagrange error bound uses the next derivative and the next power.
```

中文：写到 $n$ 阶，误差看 $n+1$ 阶。

### Knowledge Point 19: Lagrange Error Routine

做题流程：

1. 确认 polynomial 是几阶：$P_3$ means third degree, so error uses 4th derivative。
2. 找 center $c$：题目说 about $x=c$。
3. 找 evaluation point $x$：题目写 $f(1)-P_3(1)$，则 $x=1$。
4. 找 derivative bound $M$：题目通常给 $|f^{(n+1)}(x)|\le M$。
5. 代入：

$$
|R_n(x)|\le \frac{M}{(n+1)!}|x-c|^{n+1}
$$

中文理解：这类题信息很多，但每句话都在给 $n,c,x,M$ 其中之一。

## 8. Interval and Radius of Convergence / 收敛区间与半径

### Knowledge Point 20: Power Series Depends on x

[[Power Series]] 长这样：

$$
\sum a_n(x-c)^n
$$

它是否收敛取决于 $x$。

所以我们要找：

- [[Interval of Convergence]]：哪些 $x$ 让级数收敛
- [[Radius of Convergence]]：离 center 多远还能收敛

### Knowledge Point 21: Use Ratio Test First

对 power series 先用 [[Ratio Test]]。

例子：

$$
\sum_{n=1}^{\infty}\frac{(x-3)^{2n}}{n}
$$

令：

$$
a_n=\frac{(x-3)^{2n}}{n}
$$

计算：

$$
\left|\frac{a_{n+1}}{a_n}\right|
=\left|\frac{(x-3)^{2n+2}}{n+1}\cdot\frac{n}{(x-3)^{2n}}\right|
$$

$$
=|x-3|^2\cdot\frac{n}{n+1}
$$

所以：

$$
L=|x-3|^2
$$

Ratio Test 要求：

$$
|x-3|^2<1
$$

所以：

$$
|x-3|<1
$$

得到初步区间：

$$
2<x<4
$$

### Knowledge Point 22: Always Check Endpoints

Ratio Test 得到的是 open interval，因为：

```text
at endpoints, L = 1, and Ratio Test is inconclusive
```

所以必须把 endpoints 代回 original series。

上例：

当 $x=2$：

$$
\sum\frac{(2-3)^{2n}}{n}
=\sum\frac{1}{n}
$$

发散。

当 $x=4$：

$$
\sum\frac{(4-3)^{2n}}{n}
=\sum\frac{1}{n}
$$

发散。

所以：

$$
\text{interval of convergence}=(2,4)
$$

半径：

$$
R=1
$$

Core sentence:

```text
Use Ratio Test for the open interval, then test endpoints separately.
```

中文：收敛区间题最容易漏的就是 endpoint check。

## 9. Deep Phrases / 深句对应表

| Phrase / 句子 | What it should trigger / 看到它要想到什么 |
|---|---|
| Ratio Test is computation-heavy. | 不要靠看，写 $a_{n+1}/a_n$ 算。 |
| L = 1 is inconclusive. | 比值法失效，不是收敛也不是发散。 |
| Absolute convergence removes the signs. | 取绝对值后仍收敛，就是绝对收敛。 |
| Conditional convergence is saved by signs. | 原级数靠正负抵消收敛，绝对值后发散。 |
| The error is at most the first omitted term. | 交错级数加到第 $n$ 项，误差最多是第 $n+1$ 项。 |
| Taylor turns functions into power series. | 复杂函数变成幂函数，方便求导积分。 |
| about $x=c$ means centered at $c$. | Taylor 展开中心是 $c$，所有项围绕 $x-c$。 |
| Maclaurin means about $x=0$. | Maclaurin 是 $c=0$ 的 Taylor。 |
| degree is not the same as number of terms. | third degree 写到 $x^3$，three nonzero terms 是写三个非零项。 |
| Lagrange error uses the next derivative. | $P_n$ 的误差看 $f^{(n+1)}$。 |
| Always check endpoints. | Ratio Test 只给开区间，端点单独代回原级数。 |

## 10. Exam Language / 关键句中英对照

### 1. The Ratio Test is inconclusive when $L=1$.

English:

```text
If the limit in the Ratio Test equals 1, the test is inconclusive.
```

中文：

```text
如果比值法的极限等于 1，这个方法无法判断收敛或发散。
```

### 2. A series is absolutely convergent if the absolute-value series converges.

English:

```text
A series is absolutely convergent if the series of absolute values converges.
```

中文：

```text
如果取绝对值后的级数收敛，则原级数绝对收敛。
```

### 3. A conditionally convergent series converges only because of sign cancellation.

English:

```text
A series is conditionally convergent if it converges but does not converge absolutely.
```

中文：

```text
如果原级数收敛，但取绝对值后发散，则它条件收敛。
```

### 4. The alternating series error is bounded by the next term.

English:

```text
For an alternating series satisfying the conditions, the error is at most the absolute value of the first omitted term.
```

中文：

```text
满足条件的交错级数，用前 n 项近似时，误差最多是第 n+1 项的绝对值。
```

### 5. A Maclaurin series is a Taylor series centered at zero.

English:

```text
A Maclaurin series is a Taylor series centered at x equals zero.
```

中文：

```text
麦克劳林级数就是以 x=0 为中心的泰勒级数。
```

### 6. The interval of convergence requires endpoint testing.

English:

```text
After using the Ratio Test to find the open interval, test the endpoints separately.
```

中文：

```text
用比值法得到开区间后，必须把端点代回原级数单独判断。
```

## 11. Decision Maps / 做题选择图

### Convergence Test Map

```text
Does a_n fail to approach 0?
  -> nth Term Test: diverges

Does it look geometric?
  -> Geometric Series

Does it look like 1/n^p?
  -> p-Series

Positive decreasing function and integrable?
  -> Integral Test

Looks like known positive series?
  -> Comparison / Limit Comparison

Alternating signs?
  -> Alternating Series Test

Factorials / exponentials / powers / power series?
  -> Ratio Test
```

### Absolute vs Conditional Map

```text
Check sum |a_n|
  converges -> absolutely convergent
  diverges -> check original sum a_n
      converges -> conditionally convergent
      diverges -> divergent
```

### Taylor / Maclaurin Map

```text
Need Taylor polynomial?
  identify center c
  compute f(c), f'(c), f''(c), ...
  plug into Taylor formula

Need Maclaurin?
  set c = 0
  use known expansions if possible

Need coefficient?
  locate matching power
  coefficient = derivative value / factorial

Need interval of convergence?
  Ratio Test
  solve open interval
  test endpoints
```

## 12. Confusion / Questions

1. 为什么 Ratio Test 的 $L=1$ 不能判断？
2. 为什么 Ratio Test 常常适合 factorial 和 exponential？
3. absolute convergence 为什么一定能推出 original convergence？
4. conditionally convergent 和 alternating series convergent 有什么区别？
5. Alternating Series Error Bound 为什么是下一项，而不是剩下所有项的和？
6. Taylor series 的 “about $x=c$” 到底改变了什么？
7. third degree 和 three nonzero terms 为什么不是一回事？
8. Maclaurin 常用展开式哪些必须背？
9. 为什么 series 可以逐项求导/积分？
10. Lagrange error bound 里的 $z$ 为什么通常不用求？
11. 为什么 interval of convergence 一定要 check endpoints？
12. radius of convergence 和 interval of convergence 有什么关系？

## 13. After Class Summary / 看完压缩版

这节课完成了 AP Calculus BC Unit 10 最核心的两个板块。

第一块是无穷级数判敛的收尾：

- [[Ratio Test]] 是第七种 convergence test。
- $L<1$ 收敛，$L>1$ 发散，$L=1$ inconclusive。
- [[Absolute Convergence]] 看 $\sum |a_n|$。
- [[Conditional Convergence]] 是原级数收敛但绝对值级数发散。
- [[Alternating Series Error Bound]] 说误差最多是 first omitted term。

第二块是 Taylor / Maclaurin：

- [[Taylor Series]] 把函数变成 centered power series。
- [[Maclaurin Series]] 是 centered at $0$ 的 Taylor。
- 常用展开式包括 $e^x,\sin x,\cos x,\frac1{1-x},\frac1{1+x}$。
- 展开式可以逐项求导和积分。
- [[Lagrange Error Bound]] 控制 Taylor polynomial 的误差。
- [[Interval of Convergence]] 用 [[Ratio Test]] 先找 open interval，再 check endpoints。

一句话总结：

```text
Series tests decide whether infinite sums behave; Taylor series turns functions into infinite sums.
```

中文：

```text
判敛法解决“无穷和靠不靠谱”；Taylor 解决“函数能不能写成无穷和”。
```

## 14. Knowledge Graph Connections / 知识图谱连接

- [[微积分BC第13次正课-无穷级数判敛]] gives the first six convergence tests; this note completes the test list with [[Ratio Test]] and then moves into power series.
- [[03 - Derivative Formulas through Geometry]] explains why derivative formulas work; this note uses derivatives repeatedly to build [[Taylor Series]] coefficients.
- [[Power Rule]] supports term-by-term differentiation and integration of power series.
- [[Integrals]] connects to using Maclaurin series to integrate functions such as $\sin(x^2)$ that do not have elementary antiderivatives.
- [[Limits]] appears in every convergence test and in the definition of interval of convergence.
- [[Alternating Series Test]] connects directly to [[Alternating Series Error Bound]].
- [[p-Series]] and harmonic series are used to check endpoint convergence.
- [[AP电磁学第1次正课-电荷库仑定律与电场]] is not directly about series, but later AP Physics C uses Taylor approximations and power-series thinking for small-quantity approximations.

## 15. Links / 链接

- [[UBC Knowledge Graph]]
- [[微积分BC第13次正课-无穷级数判敛]]
- [[Infinite Sequence and Series]]
- [[Ratio Test]]
- [[Absolute Convergence]]
- [[Conditional Convergence]]
- [[Alternating Series Test]]
- [[Alternating Series Error Bound]]
- [[Taylor Series]]
- [[Taylor Polynomial]]
- [[11 - Taylor Series]]
- [[Maclaurin Series]]
- [[Power Series]]
- [[Lagrange Error Bound]]
- [[Interval of Convergence]]
- [[Radius of Convergence]]
- [[Power Rule]]
- [[Integrals]]
- [[Limits]]
- [[p-Series]]
- [[Geometric Series]]
- [[03 - Derivative Formulas through Geometry]]
- [[AP Calculus BC]]
