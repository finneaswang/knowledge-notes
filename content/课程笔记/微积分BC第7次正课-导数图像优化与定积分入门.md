---
title: "微积分BC第7次正课 - 导数图像、优化与定积分入门"
description: "A connected bilingual calculus note about 微积分BC第7次正课 - 导数图像、优化与定积分入门."
publish: true
tags: [calculus, course-note]
---
# 微积分BC第7次正课 - 导数图像、优化与定积分入门

## Reading Note / 阅读说明

本课是一座桥。前半段把 [[微积分BC第6次正课-导数符号极值与凹凸性]] 的 graph analysis 用到 $f'$ 图像与 [[Optimization]]；后半段从有限近似进入 [[Riemann Sum]]，再把极限写成 [[Definite Integral]]。

~~~text
derivative side:
graph identity -> sign / slope -> behavior of the original function
objective + constraint -> one-variable function -> optimize

integral side:
rate or height -> local contribution -> finite sum -> limit -> accumulation
~~~

本笔记保留课堂推导、代表性例题和“图像怎样读”的思路；考试年份、题号、分值、课堂等待与管理话术不保留。

## Reading Rule / 读法约定

- 图像题第一问永远是：**This is the graph of which function?**
- $f'$ 的 height 决定 $f$ 的 direction；$f'$ 的 slope 决定 $f$ 的 concavity。
- optimization 先建模，后求导；没有 objective function 就还没开始优化。
- finite Riemann sum 是 approximation；加上 refinement limit 才成为 exact definite integral。
- definite integral 是 signed accumulation，不自动等于普通几何面积。

---

## 1. One-Sentence Mainline / 一句话主线

> **Derivatives read local behavior and optimize a model; integrals add local contributions, with Riemann sums providing the bridge from approximation to exact accumulation.**
>
> 导数读取局部行为并优化模型；积分累加局部贡献，而黎曼和把有限近似连接成精确累积。

## 2. Class Flow / 课堂脉络

1. 从 $f$、$f'$、$f''$ 的身份出发读图。
2. 用 $f'$ 的高度与斜率还原 $f$ 的升降、极值和凹凸。
3. 用 objective function 处理 [[Optimization]]。
4. 用 trapezoids 和 rectangles 近似不规则面积或累计量。
5. 区分 left、right、midpoint Riemann sums。
6. 让 partition 无限细，得到 [[Definite Integral]]。
7. 把积分表达式与 Riemann-sum limit 互相翻译。
8. 解释 [[Signed Area]] 与基本积分性质。

---

# Part A - Reading Derivative Graphs / 读取导数图像

## 3. First Identify the Graph / 先确认图像身份

同一条曲线如果被标成 $f$、$f'$ 或 $f''$，它提供的信息完全不同。

| Given graph | Its height tells us | Its slope tells us |
|---|---|---|
| $f$ | function value | $f'$ |
| $f'$ | direction/rate of change of $f$ | $f''$, hence concavity of $f$ |
| $f''$ | concavity signal of $f$ | third-order change, usually not needed here |

> **Height and slope belong to different derivative levels.**
>
> 图像的“高度”和“斜率”不能混用：$f'$ 的高度是 $f$ 的斜率，而 $f'$ 自己的斜率是 $f''$。

## 4. If the Given Graph Is f Prime / 给的是 $f'$ 图像

### Direction of f / 判断升降

$$
f'(x)>0\Rightarrow f\text{ increasing},
\qquad
f'(x)<0\Rightarrow f\text{ decreasing}.
$$

这里看的是 $f'$ 在 $x$-axis 的上方还是下方，不看 $f'$ 自己“朝上还是朝下”。

### Local extrema of f / 判断局部极值

在 $f'$ 的 zero 或 undefined point 附近检查 sign change：

$$
+\to-\Rightarrow f\text{ has a local maximum},
$$

$$
-\to+\Rightarrow f\text{ has a local minimum}.
$$

只碰到 $x$-axis 而不换号，通常不是 extremum。

### Concavity of f / 判断凹凸

$$
f'\text{ increasing}\Rightarrow f''>0\Rightarrow f\text{ concave up},
$$

$$
f'\text{ decreasing}\Rightarrow f''<0\Rightarrow f\text{ concave down}.
$$

因此，$f'$ 的 local maximum/minimum 是 $f$ 的 inflection candidate；还必须确认 $f'$ 的 monotonicity 真正改变，也就是 $f$ 的 concavity 改变。

### The graph ladder / 图像阶梯

~~~text
height of f'  -> sign of f' -> increasing/decreasing of f
zero of f'    -> check sign change -> local extrema of f
slope of f'   -> sign of f'' -> concavity of f
turning of f' -> check monotonicity change -> inflection of f
~~~

## 5. Matching a Function to a Derivative Graph / 函数与导数图配对

不要凭“长得像”选择。先取几个代表点：

1. 原函数 tangent horizontal 的位置，导数应接近 $0$。
2. 原函数 steeply increasing 的位置，导数应为较大正值。
3. 原函数 steeply decreasing 的位置，导数应为较大负值。
4. 原函数出现 corner、cusp 或 vertical tangent 时，导数可能不存在或不有限。

这是一种 constraint matching：每个局部特征都给导数图增加一个必须满足的条件。

---

# Part B - Optimization / 最优化

## 6. What Makes Optimization Different / 最优化题真正难在哪里

普通 extrema problem 往往已经给出 $f(x)$；optimization problem 通常只给一个场景，需要自己建立目标量。

> **Optimization is ordinary extrema analysis after the model has been built.**
>
> 最优化并不是新的求导方法；新的部分是把文字、约束和几何关系压缩成一个单变量目标函数。

## 7. Optimization Workflow / 标准流程

~~~text
1. Define the objective quantity.
2. Write constraints or geometry relations.
3. Express the objective as one variable.
4. State the feasible domain.
5. Differentiate and find critical candidates.
6. Check sign change and/or endpoint values.
7. Report the requested quantity with context and units.
~~~

常见错误：求出 critical number 后立刻结束。若目标是 absolute maximum/minimum，仍需考虑 domain 与 endpoints。

## 8. Rectangle Under y = 1/x Squared / 双曲线下矩形

矩形横向从 $x=3$ 到 $x$，右上角在

$$
y=\frac1{x^2},\qquad x\ge3.
$$

因此 width 是 $x-3$，height 是 $1/x^2$：

$$
A(x)=(x-3)\frac1{x^2}=\frac{x-3}{x^2}.
$$

求导：

$$
A'(x)=\frac{6-x}{x^3}.
$$

在 domain $x\ge3$ 上，$x^3>0$，所以只需看 $6-x$：

$$
x<6\Rightarrow A'>0,
\qquad
x>6\Rightarrow A'<0.
$$

面积先增后减，因此

$$
\boxed{x=6}
$$

给出最大面积，且

$$
A(6)=\frac{1}{12}.
$$

## 9. Triangle With a Moving Vertex / 动点三角形

固定底边端点为 $(1,0)$、$(5,0)$，第三个顶点在

$$
y=\ln(2x)-\frac12x+5,
\qquad \frac12\le x\le8
$$

上。底长为 $4$，高度就是该点的 $y$-coordinate：

$$
A(x)=\frac12(4)\left(\ln(2x)-\frac12x+5\right)
=2\ln(2x)-x+10.
$$

$$
A'(x)=\frac2x-1.
$$

$A'$ 在 $x=2$ 左正右负，所以最大值出现在

$$
\boxed{x=2}.
$$

若题目问 maximum area，还要代回：

$$
\boxed{A(2)=2\ln4+8}.
$$

这道题的核心不是 logarithm derivative，而是识别：fixed base 使 area maximization 等价于 height maximization。

---

# Part C - From Approximation to Accumulation / 从近似到累积

## 10. Why Integration Appears / 为什么需要积分

规则图形有现成面积与体积公式，但一般曲线围成的区域、变化中的流量、连续分布的总效应并不规则。共同结构是：

$$
\text{total}\approx\sum(\text{local rate or height})(\text{small width}).
$$

面积只是最直观的入口。更一般地，积分回答：**许多很小的局部贡献累加后，总量是多少？**

## 11. Trapezoidal Approximation / 梯形近似

在一个 subinterval $[x_{i-1},x_i]$ 上，令

$$
\Delta x_i=x_i-x_{i-1}.
$$

用两端高度的平均值乘宽度：

$$
T_i=\frac{f(x_{i-1})+f(x_i)}2\Delta x_i.
$$

总近似为

$$
T=\sum_{i=1}^n\frac{f(x_{i-1})+f(x_i)}2\Delta x_i.
$$

它可以处理 unequal subintervals；每一段都使用自己的 width。对较平滑的数据，梯形通常比只取一端点更准确，但这不是对所有函数都无条件成立的保证。

### Classroom data example / 课堂数据例题

三个区间的 endpoint rates 依次为 $15,9,5,4$，宽度为 $2,5,2$：

$$
\frac{15+9}{2}(2)
+\frac{9+5}{2}(5)
+\frac{5+4}{2}(2)
=24+35+9=68.
$$

如果纵轴是 deposition rate、横轴是 time，那么结果的意义是 approximate deposited amount，而不是 rate。

## 12. Left, Right, and Midpoint Riemann Sums / 三种矩形近似

对 partition

$$
a=x_0<x_1<\cdots<x_n=b,
\qquad \Delta x_i=x_i-x_{i-1},
$$

有：

### Left sum

$$
L_n=\sum_{i=1}^n f(x_{i-1})\Delta x_i.
$$

### Right sum

$$
R_n=\sum_{i=1}^n f(x_i)\Delta x_i.
$$

### Midpoint sum

$$
M_n=\sum_{i=1}^n
f\left(\frac{x_{i-1}+x_i}{2}\right)\Delta x_i.
$$

判断 left/right 时，以每个小区间自身的左右端点为准，不是看整张表的最左或最右一个值。

## 13. Rate Times Time Is Accumulated Change / 速率乘时间是累计变化

若 $r(t)$ 是某个 quantity 的 rate of change，则在小时间段上

$$
\Delta Q\approx r(t_i^*)\Delta t_i.
$$

因此

$$
Q_{\text{final}}
\approx Q_{\text{initial}}+\sum r(t_i^*)\Delta t_i.
$$

课堂右端点例题使用 widths $3,5,3$ 和 rates $6.2,5.9,5.6$：

$$
\Delta Q\approx6.2(3)+5.9(5)+5.6(3)=64.9.
$$

若 initial amount 是 $50$，则

$$
\boxed{Q_{\text{final}}\approx50+64.9=114.9}.
$$

> **The sum gives change; the initial value is added only when the question asks for the final amount.**
>
> 黎曼和给的是累计变化；只有题目问最终存量时，才把初始值加回来。

另一个 left sum 例子：

$$
4(25)+6(5)+8(20)=290.
$$

这里每个“高度”来自区间左端点，每个乘数来自对应 interval width。

---

# Part D - The Definite Integral / 定积分

## 14. Equal Partitions and Delta x / 等分与区间宽度

把 $[a,b]$ 等分成 $n$ 段：

$$
\Delta x=\frac{b-a}{n}.
$$

第 $k$ 个右端点是

$$
x_k=a+k\Delta x
=a+k\frac{b-a}{n}.
$$

右黎曼和于是写成

$$
\sum_{k=1}^n
f\left(a+k\frac{b-a}{n}\right)\frac{b-a}{n}.
$$

## 15. From Finite Sum to Exact Integral / 从有限和到精确积分

固定有限 $n$ 时仍是 approximation。让 subdivisions 越来越细：

$$
\boxed{
\int_a^bf(x)\,dx
=
\lim_{n\to\infty}
\sum_{k=1}^n
f\left(a+k\frac{b-a}{n}\right)
\frac{b-a}{n}
}.
$$

这里：

- $a,b$：accumulation interval 的 bounds。
- $n$：subinterval count。
- $k$：当前是第几个 rectangle。
- $Delta x=(b-a)/n$：rectangle width。
- $f(x_k)$：sampled height 或 local rate。
- $dx$：integration variable 与 infinitesimal-width intuition；它不是一个可以脱离极限随意当普通数使用的 $Delta x$。

## 16. Translation Example / 积分与和式互译

将

$$
\int_1^2x^2\,dx
$$

写成 right-endpoint Riemann-sum limit。

$$
\Delta x=\frac{2-1}{n}=\frac1n,
\qquad
x_k=1+\frac{k}{n}.
$$

所以

$$
\boxed{
\int_1^2x^2\,dx
=\lim_{n\to\infty}
\sum_{k=1}^n
\left(1+\frac{k}{n}\right)^2\frac1n
}.
$$

注意：summation 的 $k=1$ 到 $n$ 描述 rectangles；integral 的 $1$ 到 $2$ 描述 $x$-interval。它们不是同一组上下限。

### Reading a limit backward / 从和式反推积分

看到

$$
\lim_{n\to\infty}\sum f(a+k\Delta x)\Delta x,
$$

先找最后的 width factor $Delta x=(b-a)/n$，再看 sample point 的起点 $a$，即可重建 interval 与 integrand。

## 17. Approximation Versus Exactness / 近似与精确

~~~text
finite rectangles
-> approximation depends on sample choice

partition gets finer
-> maximum width approaches 0

limit exists
-> sample dependence disappears
-> definite integral
~~~

“无限多个矩形”是视觉语言；正式陈述是 Riemann sums 的极限存在。

---

# Part E - Signed Area and Integral Rules / 带符号面积与积分规则

## 18. Signed Area / 带符号面积

$$
\int_a^bf(x)\,dx
=A_{\text{above}}-A_{\text{below}}.
$$

- above the $x$-axis: positive contribution。
- below the $x$-axis: negative contribution。

若上方面积为 $3$、下方面积为 $2$，则

$$
\int_a^bf(x)\,dx=3-2=1.
$$

普通 geometric area 则是

$$
A_{\text{total}}=A_{\text{above}}+A_{\text{below}}
=\int_a^b|f(x)|\,dx
$$

（必要时按 zeros 分段）。

## 19. Two Signed-Area Examples / 两个例题

### Piecewise sign function

$$
f(x)=
\begin{cases}
-1,&x<0,\\
0,&x=0,\\
1,&x>0.
\end{cases}
$$

从 $-5$ 到 $3$：

$$
\int_{-5}^{3}f(x)\,dx=-5+3=\boxed{-2}.
$$

### Region below the axis with a semicircle removed

几何区域是 $10\times6$ rectangle 减去 radius $5$ semicircle：

$$
A=60-\frac{25\pi}{2}.
$$

整个区域在 $x$-axis 下方，因此 integral 为

$$
\boxed{-60+\frac{25\pi}{2}}.
$$

顺序要分清：先求 positive geometric area，再根据区域在轴上或轴下赋予 sign。

## 20. Basic Definite-Integral Properties / 基本性质

### Reverse orientation

$$
\int_b^af(x)\,dx=-\int_a^bf(x)\,dx.
$$

反向 bounds 不是“不能积分”，而是 orientation 改变，所以结果取负。

### Zero-width interval

$$
\int_a^af(x)\,dx=0.
$$

### Constant multiple and linearity

$$
\int_a^bcf(x)\,dx=c\int_a^bf(x)\,dx,
$$

$$
\int_a^b(f\pm g)\,dx
=\int_a^bf\,dx\pm\int_a^bg\,dx.
$$

### Interval additivity

$$
\int_a^bf(x)\,dx+\int_b^cf(x)\,dx
=\int_a^cf(x)\,dx.
$$

这些规则体现两件事：accumulation 对 contributions 是 linear 的，对相邻 intervals 是 additive 的。

---

## 21. Fidelity Notes / 原稿校正

1. 原稿把 trapezoidal approximation 识别成类似 “troops soy dosa”，本笔记按数学语境校正为 **trapezoidal approximation / Trapezoidal Rule**。
2. 原稿多处把 Riemann 识别成 “Raymond/狸慢/梨脉”；统一校正为 **Riemann sum**。
3. 课堂说 trapezoid “一定更准确”是教学性简化。对常见 smooth data 它通常优于单端点矩形，但误差仍由函数形状和 partition 决定。
4. “$dx$ 就是无限小的 $\Delta x$”可作为直觉，但正式定义是 Riemann sums 的 limit。
5. “积分只会从左到右”需要改写：反向 bounds 完全合法，只是改变 orientation，故积分取负。
6. $f'$ 的 local extremum 不是自动成为 $f$ 的 inflection point；必须确认 concavity change。

---

## 22. Deep Phrases / 深层表达

> **The height of the derivative graph is the slope of the original graph.**
>
> 导数图像的高度，就是原函数图像的斜率。

> **Optimization begins when the objective has been written as a function of one variable.**
>
> 当目标量被写成一个单变量函数时，最优化才真正开始。

> **Rate times a small interval gives a small change; adding those changes gives accumulation.**
>
> 速率乘一个小区间得到一个小变化，把这些变化相加就得到累计量。

> **A Riemann sum is a finite model of accumulation; a definite integral is its refinement limit.**
>
> 黎曼和是累计过程的有限模型，定积分是这个模型不断细化后的极限。

> **A definite integral is signed accumulation, not automatically geometric area.**
>
> 定积分是带符号累积，不会自动等于普通几何面积。

---

## 23. Video Companion / 视频搭配

### Before watching

先记住一张图：

~~~text
thin piece = height x width
many thin pieces = sum
infinitely refined sum = integral
~~~

### Pair with Chapter 8

看 [[08 - Integration and the Fundamental Theorem of Calculus]] 时，把本课的 rectangle sum 对应到视频里的 tiny accumulated pieces。课堂负责 notation 与计算结构，视频负责解释为什么 area、distance 与 accumulation 是同一种思想。

### Pair with Chapter 9

看 [[09 - What Does Area Have to Do With Slope]] 时，关注 integral average 与 antiderivative secant slope 的关系。它会把本课“sum becomes area”的想法连接回 derivative。

3Blue1Brown 连接来自已有 Wiki connection sections；本次未重新读取完整视频笔记。

---

## 24. Decision Maps / 判断路线

### Derivative graph

~~~text
what graph is given?
-> f' height -> f increasing/decreasing
-> f' zero + sign change -> extrema of f
-> f' slope -> concavity of f
-> f' turning + monotonicity change -> inflection of f
~~~

### Optimization

~~~text
what is being maximized/minimized?
-> build objective
-> remove extra variables using constraints
-> domain
-> derivative candidates + endpoints
-> verify and answer in context
~~~

### Numerical accumulation

~~~text
table or graph of rates/heights?
-> identify subinterval widths
-> choose left/right/midpoint/trapezoid
-> sum height x width
-> add initial value only if final amount is asked
~~~

### Integral or area

~~~text
definite integral requested?
-> preserve signs above/below axis

total geometric area requested?
-> split at zeros or integrate absolute value
~~~

---

## 25. Knowledge Graph Connections / 知识图谱连接

- [[微积分BC第8次正课-反导FTC变上限积分与换元]] 承接本课的 definite-integral definition，进入 antiderivative evaluation、accumulation functions 与 substitution。
- [[微积分BC第6次正课-导数符号极值与凹凸性]] 提供 derivative sign、extrema 与 concavity 的完整基础。
- [[First Derivative Test]] 进入 [[Optimization]] 的候选点判断。
- [[Absolute Extrema]] 提醒 optimization 加入 domain 与 endpoints。
- [[Derivatives]] 读取 local change；[[Definite Integral]] 累加 local contribution。
- [[Riemann Sum]] 把有限的 rectangles/trapezoids 连接到 exact integral。
- [[Area Under a Curve]] 提供视觉模型，[[Signed Area]] 修正“积分就是普通面积”的误解。
- Integrals 把 area、rate accumulation 与物理中的连续贡献统一起来。
- [[Limits]] 提供 $n\to\infty$ 与 partition refinement 的语言。
- [[08 - Integration and the Fundamental Theorem of Calculus]] 连接 tiny pieces、accumulation 与 FTC。
- [[09 - What Does Area Have to Do With Slope]] 连接 integral average 与 antiderivative slope。

---

## 26. Confusion / Questions

- [ ] 看到 graph of $f'$ 时，能否区分“高度”和“斜率”各自说明什么？
- [ ] $f'$ 在 $x$-axis 上方但向下走时，能否说出 $f$ increasing but concave down？
- [ ] optimization 是否先写 objective、constraint 与 domain？
- [ ] 能否从 table 正确读取每个 unequal subinterval 的 width？
- [ ] 能否解释为什么 Riemann sum 是 approximation，而 definite integral 是 limit？
- [ ] 能否从 $\int_a^bf(x)dx$ 写出 right-endpoint Riemann sum？
- [ ] 能否区分 summation indices 与 integral bounds？
- [ ] 题目问 final amount 时，是否检查 initial value？
- [ ] 能否区分 signed integral 与 total geometric area？
- [ ] bounds 反向时，是否主动改变 sign？

---

## 27. After-Class Compression / 看完压缩版

~~~text
graph of f':
height -> direction of f
zero + sign change -> extrema of f
slope -> concavity of f
turning + monotonicity change -> inflection of f

optimization:
objective + constraint -> one variable + domain
-> derivative candidates + endpoints -> verify

approximation:
left/right/midpoint: sampled height x width
trapezoid: average endpoint height x width

equal partition:
Delta x = (b-a)/n
x_k = a + k Delta x

definite integral:
integral = limit of increasingly fine Riemann sums

rate accumulation:
final = initial + integral of rate

signed area:
above positive, below negative
total area uses absolute values

properties:
reverse bounds -> negative
same bounds -> zero
linearity
interval additivity
~~~

## 28. Links / 链接

- [[AP Calculus BC]]
- [[微积分BC第6次正课-导数符号极值与凹凸性]]
- [[Derivatives]]
- [[First Derivative Test]]
- [[Absolute Extrema]]
- [[Optimization]]
- [[Limits]]
- Integrals
- [[Riemann Sum]]
- [[Definite Integral]]
- [[Area Under a Curve]]
- [[Signed Area]]
- [[08 - Integration and the Fundamental Theorem of Calculus]]
- [[09 - What Does Area Have to Do With Slope]]
- [[Antiderivative]]
- [[Fundamental Theorem of Calculus]]
- [[Accumulation Function]]
- [[U-Substitution]]
- [[微积分BC第8次正课-反导FTC变上限积分与换元]]
