---
title: "3Blue1Brown - The Essence of Calculus 09 - What Does Area Have to Do With Slope?"
description: "A connected bilingual learning note about 3Blue1Brown - The Essence of Calculus 09 - What Does Area Have to Do With Slope?."
publish: true
tags: [open-notes, visual-calculus]
---
# 3Blue1Brown - The Essence of Calculus 09 - What Does Area Have to Do With Slope?

## Reading Guide / 阅读说明

这是一份伴读型笔记。单独阅读时，它要完整重建 continuous average 怎样变成 integral，以及 area 为什么等于 antiderivative graph 上的 slope；配合视频时，每个 Knowledge Point 都有时间定位。英文保留可用于解释和考试的核心句，中文负责把 finite average、area 和 slope 串成同一条逻辑。

Connected from:

- [[08 - Integration and the Fundamental Theorem of Calculus]]
- [[Integrals]]
- [[Antiderivative]]
- [[Fundamental Theorem of Calculus]]
- [[UBC Knowledge Graph]]

## 1. What This Episode Is About / 这一集在讲什么

有限个 numbers 的 average：

$$
\text{average}=\frac{\text{sum of values}}{\text{number of values}}
$$

但函数在 interval 上有 infinitely many values，不能直接“全部相加再除以 infinity”。本集先把 finite sampling 写成 integral limit，得到：

$$
\boxed{
f_{\text{avg}}=\frac{1}{b-a}\int_a^bf(x)\,dx
}
$$

随后利用 FTC：

$$
\int_a^bf(x)dx=F(b)-F(a),\qquad F'=f
$$

得到：

$$
\boxed{
f_{\text{avg}}=\frac{F(b)-F(a)}{b-a}
}
$$

右边正是 antiderivative graph 从 $a$ 到 $b$ 的 secant slope。

所以本章标题的答案是：

> Area under the derivative graph equals total rise of the antiderivative graph; dividing both by interval width turns that area into an average slope.

中文：derivative graph 下的带符号面积等于 antiderivative 的总高度变化；再除以区间宽度，就得到平均斜率。

## 2. Link to Previous Episode / 和上一集的连接

Chapter 8 给出的主要直觉是：variable endpoint 增加 $dx$ 时，area function 增加一条高度 $f(x)$、宽度 $dx$ 的 sliver，因此 area-function derivative 是 $f(x)$。

本集给出第二种直觉：

```text
average value of f
-> average of many local slopes of F
-> total rise divided by total run
-> secant slope of F
-> [F(b)-F(a)]/(b-a)
```

两个观点共同解释 [[Fundamental Theorem of Calculus]]。

## 3. Class Flow / 视频脉络

1. 提出 $\sin x$ 在 $[0,\pi]$ 上的 average height。
2. 从 finite sample average 开始，而不是直接“除以 infinity”。
3. 用 sample spacing $dx$ 表示 sample count 约为 interval length / $dx$。
4. 把 height sum 转成 $\sum\sin(x)dx$，极限就是 integral。
5. 得到 average = signed area / interval width。
6. 用 antiderivative $-\cos x$ 算出 area $2$，所以 average $2/\pi$。
7. 把 $[F(b)-F(a)]/(b-a)$ 识别为 antiderivative graph 的 secant slope。
8. 将 $f(x)=F'(x)$ 理解为各点 tangent slope，average value 就是 average tangent slope。
9. 推广到任意 $f$ 与任意 interval $[a,b]$。
10. 总结第二种 integral instinct：把 finite sum concept 推广到 continuum 时考虑 integral。

## 4. Core Ideas / 核心知识块

### Knowledge Point 1: A Continuous Average Starts With Finite Sampling

**Video:** 00:00:15-00:02:56

问题：

$$
f(x)=\sin x,\qquad0\le x\le\pi
$$

它在这半个 period 上的 average height 是多少？

现实中很多 cyclic phenomena 可用 sine wave 建模，例如 daylight hours，因此 continuous average 具有实际意义。

先均匀选取有限个 sample points：

$$
x_1,x_2,\ldots,x_n
$$

finite sample average：

$$
\frac{\sin x_1+\sin x_2+\cdots+\sin x_n}{n}
$$

sample 越密，这个 finite average 应该越接近真正的 continuous average。

**Integral signal / 积分信号：**  
当你感觉要把 continuum 上 infinitely many associated values 加起来时，不应真的“除以 infinity”；应先构造 finite sum，再让 sampling density 取 limit。

### Knowledge Point 2: Sample Count Converts the Finite Average Into Area Divided by Width

**Video:** 00:02:57-00:05:26

设 evenly spaced samples 的 spacing 为 $dx$。在 $[0,\pi]$ 上，sample count 约为：

$$
n\approx\frac{\pi}{dx}
$$

因此 finite average：

$$
\frac{\sum\sin(x_i)}{\pi/dx}
$$

把 $dx$ 移到 numerator：

$$
=\frac{1}{\pi}\sum\sin(x_i)dx
$$

当 $dx\to0$：

$$
\sum\sin(x_i)dx
\longrightarrow
\int_0^\pi\sin x\,dx
$$

所以：

$$
\boxed{
(\sin x)_{\text{avg}}
=\frac1\pi\int_0^\pi\sin x\,dx
}
$$

这就是：

$$
\text{average height}
=\frac{\text{signed area}}{\text{width}}
$$

单位也吻合：area units 除以 horizontal width units，留下 vertical height units。

### Knowledge Point 3: The Average Height of Sine on $[0,\pi]$ Is $2/\pi$

**Video:** 00:05:26-00:07:00

$\sin x$ 的一个 [[Antiderivative]] 是：

$$
F(x)=-\cos x
$$

因为：

$$
F'(x)=\sin x
$$

由 FTC：

$$
\int_0^\pi\sin x\,dx
=[-\cos x]_0^\pi
$$

$$
=(-\cos\pi)-(-\cos0)=1-(-1)=2
$$

所以：

$$
\boxed{(\sin x)_{\text{avg}}=\frac2\pi\approx0.637}
$$

graph check：$\sin x$ 在该 interval 上介于 0 与 1，average 约 0.64 合理。

**Watch out：** average value 不是 function maximum，也不是简单的 endpoint average。这里 endpoints 都是 0，但 interior values 为正，所以 continuous average 不为 0。

### Knowledge Point 4: Average Function Value Becomes the Secant Slope of an Antiderivative

**Video:** 00:07:01-00:08:20

由 FTC：

$$
\int_0^\pi\sin x\,dx
=F(\pi)-F(0)
$$

所以 average：

$$
\frac{1}{\pi}\int_0^\pi\sin x\,dx
=\frac{F(\pi)-F(0)}{\pi-0}
$$

右侧是 $F(x)=-\cos x$ graph 上 endpoints 之间的 rise over run，也就是 secant slope。

另一方面：

$$
F'(x)=\sin x
$$

意味着 $\sin x$ 的每个 height 都是 $F$ 在对应点的 tangent slope。

因此：

> The average height of the derivative graph equals the average tangent slope of the antiderivative graph, which equals its endpoint secant slope.

这给出 area 与 slope 的直接连接：area / width 是 average height；height 又是 local slope；所有 local slopes 的 average 等于 overall secant slope。

### Knowledge Point 5: General Average-Value Formula

**Video:** 00:08:23-00:09:40

对任意 integrable function $f$ 在 $[a,b]$：

$$
\boxed{
f_{\text{avg}}
=\frac{1}{b-a}\int_a^bf(x)\,dx
}
$$

它可以读成：

- signed area divided by interval width
- continuous analogue of sum divided by count

finite sample connection：若 spacing 为 $dx$，sample count 约为：

$$
n\approx\frac{b-a}{dx}
$$

于是：

$$
\frac{\sum f(x_i)}{n}
\approx
\frac{\sum f(x_i)dx}{b-a}
$$

当 $dx\to0$，numerator 变成 definite integral。

若 graph below axis，使用 [[Signed Area]]，所以 average value 可能为负，也可能因为正负抵消而为 0。

### Knowledge Point 6: Endpoint Slope Encodes the Average of All Local Slopes

**Video:** 00:09:42-00:11:19

若：

$$
F'(x)=f(x)
$$

则：

$$
f_{\text{avg}}
=\frac{1}{b-a}\int_a^bf(x)dx
=\frac{F(b)-F(a)}{b-a}
$$

后一个 expression 是 $F$ 的 [[Average Rate of Change]]。

所以 FTC 可以从 slope language 理解为：

```text
f(x) values
= tangent slopes of F

continuous average of f
= average of tangent slopes

average of tangent slopes
= total rise / total run of F
```

这解释了为什么计算 integral 时只比较 endpoints：antiderivative 已经把所有 intermediate local slopes 累积为 total rise。

$F$ 加任何 constant 都不影响：

$$
\frac{[F(b)+C]-[F(a)+C]}{b-a}
=\frac{F(b)-F(a)}{b-a}
$$

### Knowledge Point 7: A Second Instinct for Recognizing Integral Problems

**Video:** 00:11:23-00:12:07

Chapter 8 的第一种 integral instinct：

> The problem can be approximated by breaking something into many small pieces and adding them.

本集给出第二种：

> A finite idea involving a sum must be generalized to an infinite continuous range.

例如：

- finite average -> average value of a continuous function
- finite probability sum -> continuous probability density integral
- finite weighted sum -> continuous weighted accumulation

方法不是直接写 “infinite sum”，而是：

1. 先写 finite sampled version。
2. 用 spacing 表示 sample count 或 weight。
3. 把 sum 改写成 terms × small width。
4. 让 spacing 趋近 0，得到 integral。

## 5. Deep Phrases / 深层表达

| Reusable English sentence | 中文记忆句 |
|---|---|
| A continuous average is defined as the limit of increasingly dense finite-sample averages. | 连续平均值是越来越密的有限采样平均的极限。 |
| Dividing signed area by interval width gives average height. | 带符号面积除以区间宽度得到平均高度。 |
| Sample count is approximately interval length divided by sample spacing. | 样本数约等于区间长度除以采样间距。 |
| Multiplying each sampled height by $dx$ converts a height sum into an area sum. | 每个高度乘 $dx$，就把高度之和改写成面积之和。 |
| Function values are the tangent slopes of an antiderivative. | 函数值就是其反导函数各点的切线斜率。 |
| The average of local slopes equals the secant slope across the whole interval. | 局部斜率的平均等于整个区间的割线斜率。 |
| The antiderivative compresses all intermediate rates into one total change between endpoints. | 反导函数把中间所有变化率压缩成端点之间的总变化。 |
| When a finite sum concept is extended to a continuum, look for an integral formulation. | 当有限求和概念推广到连续范围时，寻找积分表达。 |

## 6. Common Mistakes / 高频错误

### Mistake 1: Averaging only the endpoints

continuous average uses all values over the interval, not just $[f(a)+f(b)]/2$。

### Mistake 2: Forgetting to divide by interval width

$$
\int_a^bf(x)dx
$$

是 total signed accumulation；average value 还要除以 $b-a$。

### Mistake 3: Dividing by “infinity”

continuous average 必须通过 finite samples 的 limit 定义。

### Mistake 4: Ignoring signed area

below-axis values 对 average 贡献 negative amount。

### Mistake 5: Confusing average value with average rate of change

- $f_{avg}$ 是 $f$ 的 continuous average。
- $[f(b)-f(a)]/(b-a)$ 是 $f$ 自身的 average rate of change。
- 但 $f_{avg}$ 等于 antiderivative $F$ 的 average rate of change。

### Mistake 6: Losing the antiderivative relationship

必须有 $F'=f$，才能把 $f$ heights 解释为 $F$ tangent slopes。

## 7. Formula Map / 公式地图

Finite sample average:

$$
\bar f_n=\frac1n\sum_{i=1}^nf(x_i)
$$

Continuous average:

$$
\boxed{f_{avg}=\frac1{b-a}\int_a^bf(x)dx}
$$

FTC conversion:

$$
\boxed{f_{avg}=\frac{F(b)-F(a)}{b-a},\qquad F'=f}
$$

Sine example:

$$
\boxed{(\sin x)_{avg,[0,\pi]}=\frac2\pi}
$$

Interpretation map:

```text
average height of f
= signed area under f / interval width
= integral of f / interval width
= total rise of F / total run
= secant slope of F
= average tangent slope of F
```

## 8. Confusion / Questions

1. 为什么不能把 infinitely many values 直接相加再除以 infinity？
2. sample count 为什么约为 $(b-a)/dx$？
3. 为什么 height sum 乘上 $dx$ 后会变成 area sum？
4. average value 为什么必须除以 interval width？
5. $\sin x$ 在 $[0,\pi]$ 的 endpoints 都是 0，为什么 average 不是 0？
6. 为什么 function values 可以被解释为 antiderivative tangent slopes？
7. average tangent slope 为什么等于 endpoint secant slope？
8. graph below axis 时 average value 怎样受到影响？
9. average value of $f$ 与 average rate of change of $f$ 有什么区别？

## 9. Source Anchors / 字幕定位

- **00:00:15**：continuous average problem
- **00:00:33**：$\sin x$ on $[0,\pi]$
- **00:01:28**：为什么 infinitely many values 不能直接平均
- **00:02:13**：从 finite sampling 开始
- **00:02:57**：把 sample average 与 integral 联系起来
- **00:03:59**：sample count $\pi/dx$
- **00:04:43**：把 $dx$ distributed into the sum
- **00:05:11**：average height = area / width
- **00:05:31**：antiderivative of sine
- **00:06:17**：integral of sine equals 2
- **00:07:01**：area-slope alternate perspective
- **00:07:30**：average value becomes secant slope
- **00:08:23**：general formula on $[a,b]$
- **00:09:42**：$F(b)-F(a)$ 与 antiderivative height change
- **00:10:31**：average is secant slope of $F$
- **00:11:23**：第二种 integral instinct

## 10. After Watching Summary / 看完压缩版

连续函数的 average value 从 finite sampled averages 出发。若 sample spacing 是 $dx$：

$$
n\approx\frac{b-a}{dx}
$$

因此：

$$
\frac{\sum f(x_i)}n
\approx
\frac{\sum f(x_i)dx}{b-a}
$$

取 limit：

$$
f_{avg}=\frac1{b-a}\int_a^bf(x)dx
$$

若 $F'=f$，FTC 给出：

$$
f_{avg}=\frac{F(b)-F(a)}{b-a}
$$

右边是 $F$ 的 endpoint secant slope；而 $f(x)$ 是 $F$ 的 local tangent slope。因此，derivative values 的 continuous average 等于 antiderivative 的 overall slope。

**One-sentence compression:**  
Area divided by width gives average height, and because function heights are antiderivative slopes, that average height equals the antiderivative's endpoint secant slope.

中文：

> 面积除以宽度得到平均高度；函数高度又是反导函数的局部斜率，所以平均高度等于反导函数的端点割线斜率。

## 11. Knowledge Graph Connections / 知识图谱连接

- [[08 - Integration and the Fundamental Theorem of Calculus]] 用 area sliver 解释 FTC；本章用 average slope 给出第二种解释。
- [[Average Value of a Function]] 连接 finite average、integral 和 antiderivative secant slope。
- [[Integrals]] 把 increasingly dense finite samples 推广成 continuous average。
- [[Riemann Sum]] 解释 $\sum f(x_i)dx$ 如何趋近 definite integral。
- [[Signed Area]] 决定 below-axis values 对 average 的负贡献。
- [[Antiderivative]] 把 $f(x)$ 的 heights 解释成 $F(x)$ 的 tangent slopes。
- [[Fundamental Theorem of Calculus]] 把 area 与 endpoint height change 连接起来。
- [[Average Rate of Change]] 是 antiderivative endpoint secant slope 的已有语言。
- [[Trigonometric Derivatives]] 提供 $(-\cos x)'=\sin x$。

## 12. Links / 链接

- [[UBC Knowledge Graph]]
- [[08 - Integration and the Fundamental Theorem of Calculus]]
- [[10 - Higher Order Derivatives]]
- [[Average Value of a Function]]
- [[Integrals]]
- [[Riemann Sum]]
- [[Signed Area]]
- [[Antiderivative]]
- [[Fundamental Theorem of Calculus]]
- [[Average Rate of Change]]
- [[Trigonometric Derivatives]]
