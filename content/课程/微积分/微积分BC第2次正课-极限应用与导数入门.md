---
title: "微积分BC第2次正课 - 极限应用与导数入门"
description: "A connected bilingual learning note about 微积分BC第2次正课 - 极限应用与导数入门."
publish: true
tags: [open-notes, calculus-course]
---
# 微积分BC第2次正课 - 极限应用与导数入门

## Reading Guide / 阅读说明

这节课横跨两个 Unit：

~~~text
Unit 1 wrap-up
  discontinuities -> asymptotes -> IVT

Unit 2 opening
  average rate -> secant slope
  -> shrinking interval
  -> tangent slope / derivative
  -> derivative rules
~~~

它接在 [[微积分BC第1次正课-极限与连续]] 后面。前一课建立 limit、one-sided limits 和 continuity；这节先把它们用于判断函数结构，再让 limit 变成 derivative 的定义工具。

本笔记保存数学脉络，不记录作业安排、考试年份、题目稀有程度和课堂管理话术。

## Reading Rule / 读法约定

- 英文术语和公式保留，解释以中文为主。
- 先理解对象代表什么，再记计算规则。
- 例题保留 method trigger，不保留选择题选项。
- 3Blue1Brown 只读取相关笔记的 Wiki connection sections，本次没有读取完整正文。

---

## 1. One-Sentence Mainline / 一句话主线

> **Limits describe function behavior near a point; derivatives use limits of secant slopes to produce the best local linear description of change at that point.**
>
> 极限描述函数在某点附近的行为；导数把割线斜率取极限，得到函数在该点附近最好的线性变化描述。

---

## 2. Class Flow / 课堂脉络

1. 回顾 continuity 与三种 discontinuity。
2. 用代数方法区分 removable 与 infinite discontinuity。
3. 从图像直觉建立 horizontal / vertical asymptote。
4. 处理渐近线不存在、多条渐近线以及正负无穷方向不同的情况。
5. 用 Intermediate Value Theorem 结束 Unit 1。
6. 用平均速度引出 [[Average Rate of Change]] 与 [[Secant Line]]。
7. 把时间间隔缩小，引出 [[Tangent Line]]、[[Instantaneous Rate of Change]] 和 [[Derivatives]]。
8. 学习 derivative notation 与 numerical approximation。
9. 从定义推导 $\frac{d}{dx}x^2=2x$。
10. 整理常数、幂、三角、指数、对数函数的导数公式。
11. 学习 [[Product Rule]] 并完成具体函数与抽象函数例题。

---

# Part A - Complete Unit 1 / 完成极限应用

## 3. Discontinuities in Limit Language / 用极限语言判断间断

### Removable discontinuity / 可去间断

$$
\lim_{x\to c^-}f(x)
=\lim_{x\to c^+}f(x)=L,
$$

但

$$
f(c)\text{ is undefined}
\quad\text{or}\quad
f(c)\neq L.
$$

附近趋势完整，但点缺失或放错位置。

### Jump discontinuity / 跳跃间断

$$
\lim_{x\to c^-}f(x)\neq\lim_{x\to c^+}f(x).
$$

左右到达不同的有限高度，所以图像发生跳跃。

### Infinite discontinuity / 无穷间断

至少有一个 one-sided limit 满足

$$
\lim_{x\to c^-}f(x)=\pm\infty
\quad\text{or}\quad
\lim_{x\to c^+}f(x)=\pm\infty.
$$

只需要一侧无界，就足以产生 infinite discontinuity。

---

## 4. How to Locate Discontinuities / 先在哪里找间断点

课堂给出两个主要入口：

1. **Undefined inputs**：例如 rational function 的 denominator 为零。
2. **Piecewise boundaries**：分段函数切换公式的位置。

这些只是 candidate points。找到后还要计算左右极限或化简后的极限，才能确定类型。

~~~text
factor denominator
-> find excluded inputs
-> simplify near each input
-> finite shared limit: removable
-> at least one side unbounded: infinite
~~~

### Worked Example 1 / 例题 1

设

$$
f(x)=\frac{2x^2+14x-16}{x^2-9x+8}
=\frac{2(x+8)(x-1)}{(x-1)(x-8)}.
$$

候选点为 $x=1,8$。

在 $x=1$ 附近：

$$
\lim_{x\to1}f(x)
=\lim_{x\to1}\frac{2(x+8)}{x-8}
=-\frac{18}{7}.
$$

极限是有限值，但原函数在 $x=1$ 未定义，所以 $x=1$ 是 removable discontinuity。

在 $x=8$ 附近，剩余分母趋近零，而分子趋近 $32$。至少一侧无界，所以 $x=8$ 是 infinite discontinuity。

### Worked Example 2 / 例题 2

设

$$
g(x)=\frac{(x-1)^2(x+3)}{(x-1)(x+2)}.
$$

候选点为 $x=1,-2$。在 $x\neq1$ 的邻域中：

$$
g(x)=\frac{(x-1)(x+3)}{x+2}.
$$

因此

$$
\lim_{x\to1}g(x)=0,
$$

所以 $x=1$ 是 removable discontinuity；在 $x=-2$，分母趋近零而分子非零，所以 $x=-2$ 是 infinite discontinuity。

> **A canceled factor creates a hole; an uncanceled zero in the denominator can create a vertical blow-up.**
>
> 被完全约掉的分母因子通常留下 hole；没有被约掉的分母零点可能造成竖直无界行为。

---

## 5. Vertical and Horizontal Asymptotes / 垂直与水平渐近线

Asymptote 不是“图像永远不能碰的线”，而是特定极限过程的描述。

### Vertical asymptote / 垂直渐近线

$x=c$ 是 vertical asymptote，只要至少一个 one-sided limit 无界：

$$
\lim_{x\to c^-}f(x)=\pm\infty
\quad\text{or}\quad
\lim_{x\to c^+}f(x)=\pm\infty.
$$

### Horizontal asymptote / 水平渐近线

$y=L$ 是 horizontal asymptote，如果

$$
\lim_{x\to\infty}f(x)=L
$$

或

$$
\lim_{x\to-\infty}f(x)=L.
$$

正无穷与负无穷必须分别检查，因为两端可能趋向不同值。

### Basic example / 基础例子

$$
f(x)=\frac{x+3}{x+2}.
$$

当 $x\to\pm\infty$：

$$
\lim_{x\to\pm\infty}\frac{x+3}{x+2}=1.
$$

所以 $y=1$ 是 horizontal asymptote。

当 $x\to-2$，一侧趋向 $+\infty$，另一侧趋向 $-\infty$，所以 $x=-2$ 是 vertical asymptote。

### Asymptote Decision Map / 渐近线判断图

~~~text
Vertical asymptote candidate:
domain boundary or denominator = 0
-> simplify first
-> check one-sided limits
-> if either side is +/- infinity, x=c is a VA

Horizontal asymptote:
compute x -> +infinity
compute x -> -infinity separately
-> each finite result L gives y=L
~~~

### Important distinctions / 重要辨析

- Denominator $=0$ 只是候选；因子约掉后可能是 removable hole。
- Vertical asymptote 可以有多条。
- Horizontal asymptote 最多有两条，分别来自两个无穷方向。
- 函数可以没有 horizontal asymptote，也可以没有 vertical asymptote。
- 图像可以穿过 horizontal asymptote；它只约束无穷远处的行为。

### Two horizontal asymptotes / 两条水平渐近线

考虑

$$
f(x)=\frac1{e^x+1}.
$$

当 $x\to\infty$，$e^x\to\infty$，所以 $f(x)\to0$。

当 $x\to-\infty$，$e^x\to0$，所以 $f(x)\to1$。

因此两条 horizontal asymptotes 是

$$
y=0,\qquad y=1.
$$

---

## 6. Intermediate Value Theorem / 介值定理

本节对应知识卡：[[Intermediate Value Theorem]]。

如果 $f$ 在 closed interval $[a,b]$ 上连续，并且 $N$ 介于 $f(a)$ 与 $f(b)$ 之间，那么至少存在一个 $c\in[a,b]$，使得

$$
f(c)=N.
$$

若 $N$ 严格介于两个端点值之间，则可以取 $c\in(a,b)$。

课堂的身高类比：如果身高从 $1.70$ 米连续变化到 $1.80$ 米，中间一定经过 $1.75$ 米。

### IVT guarantees / IVT 保证

- 至少存在一个输入，使函数取得中间高度。
- 不需要函数是 linear。
- 不需要函数 monotonic。

### IVT does not guarantee / IVT 不保证

- 不告诉你具体的 $c$ 是多少。
- 不保证解唯一。
- 不保证在随便指定的某个输入处取得该值。
- 不保证 maximum 或 minimum。

例如 $f$ 在 $[2,4]$ 上连续，$f(2)=10,f(4)=20$。IVT 保证存在某个 $c\in(2,4)$ 使 $f(c)=15$，但不能断言 $f(3)=15$。

> **Continuity prevents the output from skipping intermediate values.**
>
> 连续性阻止函数输出跳过两个端点值之间的高度。

---

# Part B - Begin Unit 2 / 进入导数

## 7. Average Rate of Change Is a Secant Slope / 平均变化率就是割线斜率

在区间 $[a,b]$ 上，[[Average Rate of Change]] 是

$$
\boxed{\frac{f(b)-f(a)}{b-a}}.
$$

几何上，它是连接 $(a,f(a))$ 与 $(b,f(b))$ 的 [[Secant Line]] slope。

课堂开车例子从 $(1,3)$ 到 $(4,9)$：

$$
\frac{9-3}{4-1}=2.
$$

它只比较起点与终点，不记录途中每一刻的变化。

### Trigonometric example / 三角函数例题

对 $f(x)=\cos(2x)$，在 $[0,\pi/2]$ 上：

$$
f(0)=1,
\qquad
f\left(\frac\pi2\right)=\cos\pi=-1.
$$

所以

$$
\frac{-1-1}{\pi/2-0}
=-\frac4\pi.
$$

若图上两端点为 $(-5,0)$ 与 $(0,2)$，则 average rate of change 是

$$
\frac{2-0}{0-(-5)}=\frac25.
$$

---

## 8. From Secant to Tangent / 从割线到切线

平均速度不能判断某一瞬间是否超速。要研究一个点的 instantaneous behavior，就让第二个点越来越靠近第一个点。

~~~text
two separated points
-> secant slope
-> shrink the horizontal gap
-> secant lines approach one limiting line
-> tangent slope / derivative
~~~

当输入间隔 $h$ 趋近 $0$：

$$
\frac{f(x+h)-f(x)}{h}
$$

是相邻两点的 secant slope。它的极限定义 derivative：

$$
\boxed{
f'(x)=\lim_{h\to0}\frac{f(x+h)-f(x)}h
}.
$$

### The accurate phrase / 最准确的形容短语

Derivative 可以解释为 instantaneous rate of change 或 tangent slope，但更一般、更准确的说法是：

> **The derivative is the best local linear description of the function near a point.**
>
> 导数是函数在某一点附近最好的局部线性描述。

在很小的 $\Delta x$ 下：

$$
\Delta f\approx f'(x)\Delta x.
$$

“瞬时速度”只是它在 position-time function 上的一种应用。

---

## 9. Derivative Notation and Graph Meaning / 导数记号与图像意义

以下记号都表示 derivative：

$$
f'(x),\qquad y',\qquad \frac{dy}{dx},\qquad \frac{df}{dx}.
$$

必须区分：

$$
f(a)=\text{function height at }a,
$$

$$
f'(a)=\text{tangent slope at }a.
$$

从图像读导数：

- increasing tangent：$f'(a)>0$
- horizontal tangent：$f'(a)=0$
- decreasing tangent：$f'(a)<0$
- line 越陡，斜率绝对值越大

看到 $\frac{f(b)-f(a)}{b-a}$ 时画 secant line；看到 $f'(a)$ 时看 tangent line。

---

## 10. Numerical Derivative Approximation / 用附近数据近似导数

如果只有 table 或 graph，可以用附近两点的 secant slope 近似中间点的 tangent slope。

Central difference：

$$
\boxed{
f'(a)\approx\frac{f(a+h)-f(a-h)}{2h}
}.
$$

例如

$$
f'(5)\approx\frac{f(6)-f(4)}{6-4}.
$$

使用 central difference 时，两点应靠近目标点、位于两侧且等距。等距不是所有 numerical approximation 的绝对要求；不对称数据也可以给出 one-sided approximation，只是误差不同。

若 $H(5)=15.5,H(7)=18.5$，则

$$
H'(6)\approx\frac{18.5-15.5}{7-5}=\frac32.
$$

### Units / 单位

Derivative units 永远是

$$
\frac{\text{output unit}}{\text{input unit}}.
$$

若输出是 inches、输入是 minutes，则单位是 inches per minute。

若 $G(t)$ 的单位已经是 games per week，而 $t$ 的单位是 weeks，则

$$
G'(t)\text{ has units }\frac{\text{games}}{\text{week}^2}.
$$

不要凭生活经验猜单位，按照 output unit 再除以 input unit 追踪。

---

## 11. Deriving $\frac{d}{dx}x^2=2x$ From the Definition / 从定义推导

设 $f(x)=x^2$。由定义：

$$
f'(x)=\lim_{h\to0}\frac{(x+h)^2-x^2}{h}.
$$

展开：

$$
f'(x)=\lim_{h\to0}\frac{x^2+2xh+h^2-x^2}{h}.
$$

约去公共因子：

$$
f'(x)=\lim_{h\to0}(2x+h)=2x.
$$

这里再次体现 [[Limits]] 的作用：$h$ 不能在 difference quotient 一开始就等于零，但可以在化简后趋近零。

> **Derivative formulas are compressed results of the limit definition.**
>
> 求导公式不是另一套无关规则，而是把定义式反复推导后的结果压缩成表格。

---

## 12. Basic Derivative Rules / 基础求导规则

### Constants, multiples, sums

$$
\frac{d}{dx}C=0,
$$

$$
\frac{d}{dx}[C f(x)]=C f'(x),
$$

$$
\frac{d}{dx}[f(x)\pm g(x)]=f'(x)\pm g'(x).
$$

### Power Rule / 幂函数求导

$$
\boxed{\frac{d}{dx}x^n=nx^{n-1}}.
$$

它对应 [[Power Rule]]：指数乘到前面，然后减一。

例如

$$
\frac{d}{dx}\frac1{\sqrt{x}}
=\frac{d}{dx}x^{-1/2}
=-\frac12x^{-3/2}.
$$

若

$$
f(x)=x^3-6x^2+8x-2,
$$

则

$$
f'(x)=3x^2-12x+8,
\qquad
f'(3)=-1.
$$

始终先求 derivative function，再代入目标点。

---

## 13. Standard Function Derivatives / 常见函数导数表

### Trigonometric derivatives

$$
(\sin x)'=\cos x,
\qquad
(\cos x)'=-\sin x,
$$

$$
(\tan x)'=\sec^2x,
\qquad
(\cot x)'=-\csc^2x,
$$

$$
(\sec x)'=\sec x\tan x,
\qquad
(\csc x)'=-\csc x\cot x.
$$

这些公式默认角度使用 radians。

### Exponential derivatives

$$
(a^x)'=a^x\ln a,
\qquad
(e^x)'=e^x.
$$

### Logarithmic derivatives

$$
(\log_a x)'=\frac1{x\ln a},
\qquad
(\ln x)'=\frac1x.
$$

若

$$
f(x)=7x-3+\ln x,
$$

则

$$
f'(x)=7+\frac1x,
\qquad
f'(1)=8.
$$

---

## 14. Product Rule / 乘积法则

如果两个随 $x$ 变化的函数相乘：

$$
(fg)'\neq f'g'.
$$

正确公式是

$$
\boxed{
[f(x)g(x)]'=f'(x)g(x)+f(x)g'(x)
}.
$$

课堂口诀：

~~~text
前导后不导
+
前不导后导
~~~

更本质的理解见 [[Product Rule]]：两个因子都变化时，总的一阶变化包含两部分贡献。

### Example 1: $x^2\ln x$

$$
\frac{d}{dx}[x^2\ln x]
=2x\ln x+x^2\frac1x
=2x\ln x+x.
$$

### Example 2: $x\sin x$

$$
\frac{d}{dx}[x\sin x]
=\sin x+x\cos x.
$$

### Example 3: $\sin x\cos x$

$$
\frac{d}{dx}[\sin x\cos x]
=\cos^2x-\sin^2x.
$$

在 $x=\pi/3$：

$$
\cos^2\frac\pi3-\sin^2\frac\pi3
=-\frac12.
$$

### Example 4: abstract graph information / 抽象函数与图像信息

若

$$
h(x)=e^xg(x),
$$

则

$$
h'(x)=e^x[g(x)+g'(x)].
$$

若图像提供

$$
g(-1)=3,\qquad g'(-1)=-6,
$$

则

$$
h'(-1)=e^{-1}(3-6)=-\frac3e.
$$

$g(-1)$ 是点值；$g'(-1)$ 是该点 tangent line slope。抽象函数题只是把具体公式换成图像或表格信息，Product Rule 不变。

---

## 15. Derivative Workflow / 导数做题顺序

~~~text
What is being asked?
|
+-- over an interval
|     -> average rate of change
|     -> secant slope
|
+-- at one point
      -> derivative / tangent slope
      |
      +-- only nearby data
      |     -> numerical approximation
      |
      +-- definition requested
      |     -> difference quotient limit
      |
      +-- formula available
            -> identify algebraic structure
            -> apply derivative rules
            -> simplify
            -> substitute point
            -> attach units if contextual
~~~

---

## 16. Fidelity Notes and Corrections / 原稿纠错

| Transcript wording | Accurate mathematical version |
|---|---|
| removal discontinuity | **removable discontinuity** |
| “分母为零就是 vertical asymptote” | 分母为零只是候选；先化简，再检查至少一个 one-sided limit 是否无界。 |
| Vertical asymptote 要求双侧极限等于同一个 $\pm\infty$ | 只需至少一侧趋向 $+\infty$ 或 $-\infty$。 |
| $1/(e^x+1)$ 左右水平渐近线都写成 $y=0$ | 正确是 $x\to\infty$ 时 $y=0$，$x\to-\infty$ 时 $y=1$。 |
| IVT 说明指定中点一定取得中间值 | IVT 只保证至少存在某个 $c$，不指定 $c$，也不保证唯一。 |
| “两个点近似导数必须等距” | 对 central difference 应等距；其他差商也可近似，但精度不同。 |
| derivative 只是 instantaneous rate of change | 更一般地，它是 best local linear description / local linear coefficient。 |
| tangent line 只是“擦一下曲线” | 切线由局部线性行为定义，不要求只与曲线相交一次。 |
| cosine derivative 的识别文本为 “-3x” | 正确公式是 $(\cos x)'=-\sin x$。 |
| $f'(1)$ for $7x-3+\ln x$ 的口述结果不清 | 正确结果是 $8$。 |

---

## 17. Deep Phrases / 深句对应表

| Trigger | The sentence it should recall / 对应句 |
|---|---|
| Removable discontinuity | The nearby trend exists; only the point is missing or misplaced. / 附近趋势完整，只是点缺失或放错。 |
| Vertical asymptote | At least one side becomes unbounded near a finite input boundary. / 输入靠近有限边界时，至少一侧输出无界。 |
| Horizontal asymptote | It describes end behavior as input goes to positive or negative infinity. / 它描述输入走向正负无穷时的末端行为。 |
| IVT | Continuity prevents a function from skipping intermediate output values. / 连续函数不能跳过端点输出之间的值。 |
| Average rate of change | It is one secant slope summarizing an entire interval. / 它用一条割线概括整段区间。 |
| Derivative | It is the best local linear description of the response to a tiny input change. / 它描述输入微小变化时输出的一阶局部响应。 |
| Numerical derivative | A nearby secant slope approximates the tangent slope. / 附近割线斜率近似切线斜率。 |
| Product Rule | Both changing factors contribute one first-order term. / 两个变化因子各贡献一个一阶项。 |

---

## 18. Video Companion / 对照课堂视频

| Time | Content | Reading focus |
|---|---|---|
| 00:59-03:52 | 上节回顾与 continuity | 用 [[微积分BC第1次正课-极限与连续]] 快速恢复 |
| 04:03-18:40 | discontinuity 的代数判断 | 先找候选点，再用 limit 分类 |
| 18:40-49:25 | vertical / horizontal asymptotes | 正负无穷分开算，hole 与 VA 分开 |
| 49:40-58:50 | Intermediate Value Theorem | 只保证 existence，不保证具体位置或唯一性 |
| 58:50-01:08:27 | average rate 到 derivative | 看 secant interval 如何缩成 tangent behavior |
| 01:09:11-01:21:52 | average rate 与 graph derivative | 区分函数高度、割线斜率、切线斜率 |
| 01:21:52-01:32:00 | numerical derivative 与单位 | central difference、附近数据、units |
| 01:32:00-01:44:57 | definition 与 Power Rule | 从 $x^2$ 定义推导连接到公式表 |
| 01:44:57-01:49:50 | trig / exponential / log rules | 对照标准公式，忽略 ASR 错词 |
| 01:49:50-01:59:38 | Product Rule | 从具体乘积走到 $e^xg(x)$ 图像题 |
| 01:59:38-结束 | 总结与答疑 | 按需回看 definition 和 approximation |

---

## 19. Knowledge Graph Connections / 知识图谱连接

### Formal course branch / 正课分支

- [[微积分BC第1次正课-极限与连续]] 建立 nearby behavior、one-sided limits 与 continuity。
- [[微积分BC第3次正课-可导性链式法则与隐函数求导]] 接着完成 Quotient Rule 与 differentiability，再进入 Chain Rule 和 implicit differentiation。
- [[Limits]] 在本课变成 discontinuity、asymptote、IVT 与 derivative definition 的共同语言。
- [[Average Rate of Change]] / [[Secant Line]] 是 interval-level change。
- [[Derivatives]] / [[Tangent Line]] / [[Instantaneous Rate of Change]] 是 point-level local linear behavior。
- [[Power Rule]] 与 [[Product Rule]] 把定义式压缩成可重复使用的计算规则。

### 3Blue1Brown bridge / 视觉直觉分支

- [[02 - The Paradox of the Derivative]]：secant slope 如何通过 limit 变成 tangent slope 与 best local linear approximation。
- [[03 - Derivative Formulas through Geometry]]：从 tiny changes 理解 Power Rule 和基本导数公式。
- [[04 - Visualizing the Chain Rule and Product Rule]]：Product Rule 的两项来自两个因子各自的一阶变化。
- [[07 - Limits, L'Hopital's Rule, and Epsilon-Delta Definitions]]：limit notation、hole 与 derivative definition 的正式连接。

这些连接来自现有笔记的 Wiki connection sections；本次未读取其完整正文。

---

## 20. Confusion / Questions

- [ ] 能否先区分 hole candidate 与 VA candidate，再用极限确认？
- [ ] 能否分别计算 $x\to\infty$ 和 $x\to-\infty$？
- [ ] 能否准确说出 IVT 保证什么、不保证什么？
- [ ] 看到 “over an interval” 时，能否立即想到 secant slope？
- [ ] 看到 $f'(a)$ 时，能否立即想到 local tangent behavior？
- [ ] 能否从 definition 独立推导 $(x^2)'=2x$？
- [ ] 能否先识别乘积结构，再完整写出 Product Rule 两项？
- [ ] 能否为 derivative 写出 output unit / input unit？

---

## 21. After-Class Compression / 看完压缩版

~~~text
removable discontinuity
= finite shared limit, missing or wrong point

vertical asymptote x=c
= at least one one-sided limit is +/- infinity

horizontal asymptote y=L
= finite limit as x -> +infinity or -infinity

IVT
= continuity guarantees intermediate outputs are attained

average rate of change
= secant slope over an interval

derivative
= limit of nearby secant slopes
= tangent slope
= best local linear description

f'(x) = lim h->0 [f(x+h)-f(x)]/h

constant -> 0
x^n -> n x^(n-1)
sum -> differentiate term by term
product -> f'g + fg'
~~~

## 22. Links / 链接

- [[UBC Knowledge Graph]]
- [[AP Calculus BC]]
- [[微积分BC第1次正课-极限与连续]]
- [[微积分BC第3次正课-可导性链式法则与隐函数求导]]
- [[Limits]]
- [[Intermediate Value Theorem]]
- [[Average Rate of Change]]
- [[Secant Line]]
- [[Derivatives]]
- [[Instantaneous Rate of Change]]
- [[Tangent Line]]
- [[Power Rule]]
- [[Product Rule]]
- [[Derivative Formulas]]
- [[Trigonometric Derivatives]]
- [[02 - The Paradox of the Derivative]]
- [[03 - Derivative Formulas through Geometry]]
- [[04 - Visualizing the Chain Rule and Product Rule]]
- [[07 - Limits, L'Hopital's Rule, and Epsilon-Delta Definitions]]
