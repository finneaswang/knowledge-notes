---
title: "微积分BC第3次正课 - 可导性、链式法则与隐函数求导"
description: "A connected bilingual calculus note about 微积分BC第3次正课 - 可导性、链式法则与隐函数求导."
publish: true
tags: [calculus, course-note]
---
# 微积分BC第3次正课 - 可导性、链式法则与隐函数求导

## Reading Note / 阅读说明

这节课从 [[微积分BC第2次正课-极限应用与导数入门]] 的 derivative definition 与 [[Product Rule]] 出发，先完成 Unit 2，再进入 Unit 3：

~~~text
quotient rule
-> recognize derivative definitions
-> differentiability versus continuity
-> piecewise differentiability
-> function composition
-> chain rule
-> implicit differentiation
-> tangent slope on an implicit curve
~~~

本笔记以课堂 transcript 为核心，保留老师的推导顺序、代表性例题与判断方法；作业安排、考试年份和课堂管理话术不保留。原稿中的语音识别错误与口误集中列在 Fidelity Notes 中。

## Reading Rule / 读法约定

- 英文术语和公式保留，解释以中文为主。
- 先识别函数的最外层结构，再选择 derivative rule。
- 例题重点是看到什么结构就启动什么方法。
- 3Blue1Brown 只使用相关笔记已有的 Wiki connection sections，没有重读完整正文。

---

## 1. One-Sentence Mainline / 一句话主线

> **Differentiability asks whether one local linear description exists; the Chain Rule tracks that local change through nested functions, and implicit differentiation tracks it along a relation that ties variables together.**
>
> 可导性问某点能否拥有唯一的局部线性描述；链式法则追踪变化穿过多层函数时如何传递；隐函数求导追踪变量为了维持同一个关系必须怎样一起变化。

## 2. Class Flow / 课堂脉络

1. 补完 Quotient Rule。
2. 识别 derivative definition 的两种标准外形。
3. 用 one-sided derivatives 判断 differentiability。
4. 建立 differentiability 与 continuity 的单向逻辑。
5. 对 piecewise function 先验连续，再验左右导数。
6. 识别 [[Function Composition]] 的 outer / inner layers。
7. 用 [[Chain Rule]] 逐层传递 tiny change。
8. 在抽象函数与混合规则题里计算导数。
9. 把 $y$ 看成 $y(x)$，进入 [[Implicit Differentiation]]。
10. 从 implicit relation 求 slope，再写 [[Tangent Line]]。

---

# Part A - Finish Unit 2 / 完成导数基础

## 3. Quotient Rule / 商法则

若

$$
h(x)=\frac{f(x)}{g(x)},\qquad g(x)\neq0,
$$

则

$$
h'(x)=\frac{f'(x)g(x)-f(x)g'(x)}{[g(x)]^2}.
$$

> **Low times derivative of high, minus high times derivative of low, over low squared.**
>
> 下乘上导，减上乘下导，除以下平方。

关键是中间的减号和 denominator squared。顺序反过来，结果会差一个负号。

### Abstract Example / 抽象例题

设 $h=f/g$，且

$$
f'(0)=4,\quad g(0)=2,\quad f(0)=3,\quad g'(0)=\pi.
$$

则

$$
h'(0)=\frac{4(2)-3(\pi)}{2^2}
=\frac{8-3\pi}{4}.
$$

抽象题无需求出 $f$ 与 $g$；四个已知量正好对应公式的四个槽位。

### Concrete Example / 具体例题

$$
y=\frac{x+1}{x^2+1}.
$$

$$
y'=\frac{1(x^2+1)-(x+1)(2x)}{(x^2+1)^2}
=\frac{-x^2-2x+1}{(x^2+1)^2}.
$$

### Watch Out / 易错点

- denominator 必须整体平方。
- numerator 是两项之差。
- 先把结构写对，再展开化简。

---

## 4. Two Forms of the Derivative Definition / 导数定义的两种外形

### Increment form / 增量形式

$$
f'(a)=\lim_{h\to0}\frac{f(a+h)-f(a)}{h}.
$$

$h$ 也可写成 $\Delta x$、$t$ 或其他 dummy variable。名字不重要，关键是它趋近 $0$。

### Nearby-point form / 邻点形式

$$
f'(a)=\lim_{x\to a}\frac{f(x)-f(a)}{x-a}.
$$

两式表达同一件事：计算靠近 $a$ 的 secant slope，再让邻点趋近 $a$。

~~~text
increment form:
a -> a+h, while h -> 0

nearby-point form:
x -> a, while x-a -> 0
~~~

### Recognition Examples / 识别例题

$$
\lim_{h\to0}\frac{\sin(x+h)-\sin x}{h}=\cos x.
$$

在 $x=\frac{\pi}{3}$：

$$
\lim_{h\to0}
\frac{\sin(\frac{\pi}{3}+h)-\sin(\frac{\pi}{3})}{h}
=\frac12.
$$

$$
\lim_{h\to0}\frac{\ln(4+h)-\ln4}{h}
=(\ln x)'\big|_{x=4}=\frac14.
$$

若 $f(x)=\ln x$：

$$
\lim_{x\to3}\frac{f(x)-f(3)}{x-3}=f'(3)=\frac13.
$$

### Reverse Recognition / 反向识别

若

$$
f'(a)=2\sin a,
$$

则原函数只能确定到 additive constant：

$$
f(x)=-2\cos x+C.
$$

这连接到 [[Antiderivative]]：相同 derivative 对应一族只差常数的函数。

---

## 5. What Differentiable Means / 可导到底是什么意思

函数在 $x=c$ 可导，意味着左右得到同一个有限 slope：

$$
f'_-(c)=f'_+(c).
$$

也就是

$$
\lim_{h\to0^-}\frac{f(c+h)-f(c)}h
=
\lim_{h\to0^+}\frac{f(c+h)-f(c)}h,
$$

且共同值是有限实数。它表示函数在该点附近有唯一的 best local linear description。

## 6. Three Ways Differentiability Can Fail / 三种常见不可导

### Discontinuity / 不连续

若函数在 $c$ 不连续，它一定不可能在 $c$ 可导。

### Corner or cusp / 折角或尖点

例如

$$
f(x)=|x-2|.
$$

在 $x=2$：

$$
f'_-(2)=-1,\qquad f'_+(2)=1.
$$

左右 slope 不同，所以没有唯一切线斜率。

### Vertical tangent / 竖直切线

例如

$$
f(x)=x^{1/3},\qquad
f'(x)=\frac{1}{3x^{2/3}}\quad(x\neq0).
$$

当 $x\to0$ 时 slope 无界。图像连续，但 derivative 不作为有限实数存在。

---

## 7. Differentiability and Continuity / 可导与连续

核心关系只有单向：

$$
\boxed{\text{differentiable at }c\Longrightarrow\text{continuous at }c}.
$$

反方向不成立：

$$
\text{continuous at }c
\centernot\Longrightarrow
\text{differentiable at }c.
$$

课堂的“两层楼”比喻：

~~~text
first floor: continuity
second floor: differentiability

reaching floor 2 means you passed floor 1
reaching floor 1 does not guarantee floor 2
~~~

逆否命题是：

$$
\text{discontinuous at }c
\Longrightarrow
\text{not differentiable at }c.
$$

> **Continuity keeps the graph connected locally; differentiability additionally requires one consistent local direction.**
>
> 连续只保证局部没有断开；可导还要求局部只有一个一致方向。

---

## 8. Piecewise Differentiability Workflow / 分段函数可导流程

在拼接点 $x=c$：

### Step 1: Check continuity / 先验连续

$$
\lim_{x\to c^-}f(x)
=\lim_{x\to c^+}f(x)
=f(c).
$$

若失败，立刻得出 not differentiable。

### Step 2: Match one-sided derivatives / 再验左右导数

$$
f'_-(c)=f'_+(c).
$$

只有两个条件都满足，才 differentiable。

### Example A: Continuous but not differentiable

$$
f(x)=
\begin{cases}
3x+5,&x<-1,\\
-x^2+3,&x\ge-1.
\end{cases}
$$

拼接值都等于 $2$，所以 continuous。但

$$
f'_-( -1)=3,\qquad f'_+( -1)=2,
$$

所以 not differentiable。

### Example B: Discontinuous, so stop

$$
f(x)=
\begin{cases}
2x+5,&x<-1,\\
-x^2+6,&x\ge-1.
\end{cases}
$$

在 $x=-1$，两边函数值分别是 $3$ 与 $5$。不连续，因此直接判定不可导；即使两边 derivative expressions 碰巧相等，也无法补救断裂。

### Parameter Example / 参数例题

$$
f(x)=
\begin{cases}
2x^2+3,&x<1,\\
ax+b,&x\ge1.
\end{cases}
$$

在 $x=1$ differentiable 要求：

$$
a+b=5
$$

和

$$
a=4.
$$

所以

$$
\boxed{a=4,\quad b=1}.
$$

第一条方程让位置接上，第二条让方向接上。

---

# Part B - Begin Unit 3 / 复合函数与隐函数求导

## 9. Recognize Function Composition / 识别复合函数

[[Function Composition]] 的本质是一个函数的输出成为另一个函数的输入：

$$
x\xrightarrow{g}g(x)\xrightarrow{f}f(g(x)).
$$

| Expression | Outer function | Inner function |
|---|---|---|
| $(\sin x)^6$ | $u^6$ | $u=\sin x$ |
| $\sin(x^2)$ | $\sin u$ | $u=x^2$ |
| $\cos(2x)$ | $\cos u$ | $u=2x$ |
| $\ln(-x)$ | $\ln u$ | $u=-x$ |

“输入位置不是单独的 $x$”是实用 trigger，但真正判断依据是函数层级。

> **Read a composite function from the outside in, but preserve the inside while differentiating each layer.**
>
> 识别时从外向内拆；求导每一层时先保留里面，再乘下一层的导数。

## 10. Chain Rule / 链式法则

若

$$
y=f(g(x)),
$$

则

$$
\frac{dy}{dx}=f'(g(x))g'(x).
$$

Leibniz notation 显示变化传递：

$$
\frac{dy}{dx}
=\frac{dy}{du}\frac{du}{dx}.
$$

tiny input change 先经过 inner function 变成 $du$，再经过 outer function 变成 $dy$；最终 local scale factor 是两层倍率的乘积。

> **Differentiate the outside at the unchanged inside, then multiply by the derivative of the inside.**
>
> 外导内不动，再乘内导。

---

## 11. One-Layer Examples / 单层例题

$$
y=\sqrt{x^2+1}=(x^2+1)^{1/2}
$$

$$
y'=\frac12(x^2+1)^{-1/2}(2x)
=\frac{x}{\sqrt{x^2+1}}.
$$

$$
\frac{d}{dx}(3x+2)^5
=5(3x+2)^4(3)
=15(3x+2)^4.
$$

$$
\frac{d}{dx}\cos(2x)
=-\sin(2x)(2)
=-2\sin(2x).
$$

$$
\frac{d}{dx}\ln(2x)
=\frac{1}{2x}(2)
=\frac1x.
$$

在 $x>0$ 上也可用 $\ln(2x)=\ln2+\ln x$ 交叉验证。

## 12. Multi-Layer Chain Rule / 多层链式法则

设

$$
y=[\sin(x^2)]^3.
$$

结构：

~~~text
x -> x^2 -> sin(x^2) -> [sin(x^2)]^3
~~~

逐层求导：

$$
y'
=3[\sin(x^2)]^2
\cdot\cos(x^2)
\cdot2x
=6x\sin^2(x^2)\cos(x^2).
$$

outer cube、sine layer、inner square 各贡献一个 derivative factor。

---

## 13. Abstract Chain Rule / 抽象链式法则

若 $h(x)=f(g(x))$，且

$$
g(1)=3,\qquad g'(1)=-2,\qquad f'(3)=7,
$$

则

$$
h'(1)=f'(g(1))g'(1)=f'(3)(-2)=-14.
$$

~~~text
x=1
-> g(1)=3
-> look up f'(3)=7
-> multiply by g'(1)=-2
~~~

若没有 $f$ 的具体公式：

$$
\frac{d}{dx}f(x^2-1)=f'(x^2-1)\cdot2x.
$$

答案保留 $f'$ 是正确的。

## 14. Mixed Rules / 混合规则

设

$$
F(x)=e^{2x}(x^3+1).
$$

最外层是 product，所以先用 [[Product Rule]]；$e^{2x}$ 内部再用 [[Chain Rule]]：

$$
F'(x)=2e^{2x}(x^3+1)+e^{2x}(3x^2).
$$

在 $x=2$：

$$
F'(2)=2e^4(9)+e^4(12)=30e^4.
$$

~~~text
sum outside       -> sum rule
product outside   -> product rule first
quotient outside  -> quotient rule first
composition       -> chain rule layer-by-layer
~~~

规则可以嵌套，但第一步由最外层结构决定。

若 $f(x)=x^2-4$：

$$
\frac{d}{dx}f(g(x))=2g(x)g'(x).
$$

---

## 15. What Implicit Differentiation Is / 隐函数求导是什么

有些曲线由 relation 定义：

$$
F(x,y)=0.
$$

[[Implicit Differentiation]] 不要求先解出 $y$；直接对关系两边关于 $x$ 求导，并把

$$
y=y(x)
$$

记在心里。因此

$$
\frac{d}{dx}(y^n)
=ny^{n-1}\frac{dy}{dx}.
$$

多出来的 $\frac{dy}{dx}$ 来自 [[Chain Rule]]。

> **Implicit differentiation finds how the variables must change together so their relation remains true.**
>
> 隐函数求导求的是：为了让原关系继续成立，变量必须以什么局部比例一起变化。

## 16. Standard Implicit Workflow / 标准流程

1. 对 equation 两边同时关于 $x$ 求导。
2. 遇到 $y$ 的函数，使用 Chain Rule 并带出 $y'$。
3. 遇到 $xy$ 等乘积，使用 Product Rule。
4. 把所有含 $y'$ 的项收集到一边。
5. 提取并解出 $y'$。
6. 若给定 point，最后再代入。
7. 若要求 tangent line，用 point-slope form。

~~~text
differentiate
-> attach y' to every differentiated y-layer
-> collect y'
-> solve
-> substitute point
-> write tangent line
~~~

---

## 17. Basic Implicit Examples / 基础隐函数例题

### Example 1

$$
y^2=x^2+\sin y.
$$

$$
2yy'=2x+\cos y\,y'.
$$

$$
(2y-\cos y)y'=2x.
$$

$$
\boxed{y'=\frac{2x}{2y-\cos y}}.
$$

$\sin y$ 的 derivative 不只有 $\cos y$，还要乘 $y'$。

### Example 2

$$
y^3+y=x^2.
$$

$$
3y^2y'+y'=2x.
$$

$$
\boxed{y'=\frac{2x}{3y^2+1}}.
$$

---

## 18. Tangent Line on an Implicit Curve / 隐曲线切线

考虑

$$
x^2-3xy=10
$$

在点 $(1,-3)$ 的 tangent line。

因为

$$
\frac{d}{dx}(xy)=xy'+y,
$$

所以

$$
2x-3(xy'+y)=0.
$$

解出

$$
y'=\frac{2x-3y}{3x}.
$$

在 $(1,-3)$：

$$
y'=\frac{2(1)-3(-3)}{3(1)}=\frac{11}{3}.
$$

切线为

$$
\boxed{y+3=\frac{11}{3}(x-1)}.
$$

不要在求导前代点，否则会把正在变化的 $x$、$y$ 过早变成常数。

---

## 19. Logarithmic Implicit Relation / 对数型隐式关系

课堂例题求导后得到

$$
\frac1x-\frac1y\,y'=y'.
$$

在 $(4,4)$：

$$
\frac14-\frac14y'=y',
$$

所以

$$
\boxed{y'=\frac15}.
$$

关键是

$$
\frac{d}{dx}\ln y=\frac1y\,y'.
$$

## 20. Exponential Implicit Relation / 指数型隐式关系

考虑课堂最后的关系

$$
e^{xy}-y^2=e
$$

在 $\left(\frac12,2\right)$。

右边 $e$ 是 constant，derivative 为 $0$。左边第一项同时使用 Chain Rule 与 Product Rule：

$$
\frac{d}{dx}e^{xy}=e^{xy}(xy'+y).
$$

于是

$$
e^{xy}(xy'+y)-2yy'=0.
$$

代入点，且 $xy=1$：

$$
e\left(\frac12y'+2\right)-4y'=0.
$$

$$
\left(4-\frac e2\right)y'=2e.
$$

因此

$$
\boxed{y'=\frac{4e}{8-e}}.
$$

这个例子同时检查：

- $e$ 是常数，$e^{u(x)}$ 是函数。
- exponent $xy$ 的 derivative 要用 Product Rule。
- exponential outer layer 用 Chain Rule。

---

## 21. Deep Phrases / 深句对应表

| English sentence | 中文记忆 |
|---|---|
| A derivative is the best local linear description of change. | 导数是某点附近最好的线性变化描述。 |
| Differentiability requires a unique finite local slope. | 可导要求左右得到同一个有限局部斜率。 |
| Differentiability implies continuity, but not conversely. | 可导一定连续；连续不保证可导。 |
| Continuity joins position; differentiability also joins direction. | 连续把位置接上，可导还要把方向接上。 |
| The Chain Rule multiplies local rates through function layers. | 链式法则把每一层的局部倍率相乘。 |
| Differentiate the outside at the unchanged inside, then multiply by the inside derivative. | 外导内不动，再乘内导。 |
| Implicit differentiation preserves a relation while variables change together. | 隐函数求导描述变量如何一起变化以维持关系。 |
| Substitute the point only after deriving the slope formula. | 先求斜率公式，最后才代点。 |
| The outermost operation chooses the first rule. | 最外层运算决定第一条规则。 |

---

## 22. Common Failure Modes / 常见错误

### Quotient Rule

$$
\frac{f'g-fg'}{g^2}
$$

不要漏负号，也不要漏 denominator squared。

### Derivative definition

不要把 $h$ 的名字当成固定要求。识别的是 nearby secant slope 的 limit。

### Differentiability

- 只检查 continuity 不够。
- 只比较左右导数也不够；必须先连续。
- vertical tangent 不等于 ordinary finite derivative。

### Chain Rule

- 漏 inner derivative。
- outer derivative 求完后改变 inner expression。
- 多层函数只处理最外一层。

### Implicit Differentiation Errors

- 对 $y^n$ 求导时漏 $y'$。
- 对 $xy$ 写成 $xy'$，漏掉 $+y$。
- 先代点再求导。
- 把常数 $e$ 和函数 $e^{xy}$ 混为一谈。

---

## 23. Fidelity Notes and Corrections / 原稿校正

1. 原稿在反向识别 $f'(x)=2\sin x$ 时出现类似 “cos 2x” 的识别；正确的一族原函数是

   $$
   f(x)=-2\cos x+C.
   $$

2. 原稿在 implicit tangent example 中出现 “$10/3$” 或缺项；由 $x^2-3xy=10$ 正确求得的 slope 是 $11/3$。

3. 原稿把部分符号识别为中文近音词。本笔记按函数结构还原为 $e^{2x}$、$e^{xy}$、$y'$。

4. “连续就可导”不是正确命题。标准关系是 differentiable $\Rightarrow$ continuous。

5. derivative 反推原函数时必须保留 additive constant $C$，除非有初值。

---

## 24. Video Companion / 搭配课堂录像

| Approx. time | Topic | What to watch for |
|---|---|---|
| 00:46-03:14 | Review | derivative definition 与上一课规则 |
| 03:14-11:39 | Quotient Rule | 公式槽位、减号、分母平方 |
| 11:39-26:40 | Definition recognition | 两种 difference quotient 外形 |
| 26:40-56:51 | Differentiability | corner、vertical tangent、continuity logic |
| 40:00-56:51 | Piecewise functions | 先连续、再左右导数 |
| 56:51-01:10:00 | Function composition | outer / inner function |
| 01:10:00-01:31:39 | Chain Rule | 单层、多层、抽象与混合规则 |
| 01:31:39-end | Implicit Differentiation | 带出 $y'$、收集、代点、切线 |

回看时优先停在“为什么使用这条规则”的转折处，而不只抄最终式子。

---

## 25. Decision Maps / 做题决策图

### Is the function differentiable at a join?

~~~text
check left/right value or limit
-> continuous?
   no  -> not differentiable
   yes -> compare one-sided derivatives
          unequal/unbounded -> not differentiable
          equal finite      -> differentiable
~~~

### Which derivative rule comes first?

~~~text
inspect outermost operation
  + or -   -> sum rule
  product  -> product rule
  quotient -> quotient rule
  nested function -> chain rule

then recurse into each part
~~~

### Implicit Differentiation Decision Map

~~~text
relation in x and y
-> differentiate both sides
-> every differentiated y-layer brings y'
-> collect y'
-> solve
-> substitute point
-> tangent line
~~~

---

## 26. Knowledge Graph Connections / 知识图谱连接

### Formal course branch / 正课分支

- [[微积分BC第2次正课-极限应用与导数入门]] 提供 derivative definition、basic formulas 与 [[Product Rule]]。
- [[微积分BC第4次正课-反函数高阶导数与运动应用]] 接着完成 inverse derivatives 与 higher derivatives，并把导数用于 tangent、motion 和 related rates。
- [[Derivatives]] 在本课具体化为 definition recognition 和 differentiability。
- [[Function Composition]] 决定 outer / inner layers，[[Chain Rule]] 把各层 local rates 相乘。
- [[Implicit Curve]] 描述 relation-defined curve，[[Implicit Differentiation]] 从 relation 中提取 tangent slope。
- [[Tangent Line]] 是 differentiability 与 implicit slope 落到图像上的对象。
- [[Product Rule]] 与 [[Chain Rule]] 在 $e^{xy}$、$xy$ 和复杂复合函数中共同出现。

### 3Blue1Brown bridge / 视觉直觉分支

- [[02 - The Paradox of the Derivative]]：导数是 nearby secant slopes 的 limit，也是 local linear description。
- [[04 - Visualizing the Chain Rule and Product Rule]]：tiny change 经过 function layers 时，local rates 为什么相乘。
- [[06 - Implicit Differentiation, What's Going On Here]]：implicit relation 如何限制允许的 tiny direction。

这些连接来自现有笔记的 Wiki connection sections；本次未读取其完整正文。

---

## 27. Confusion / Questions

- [ ] 能否不看提示写出 Quotient Rule 的正确顺序和负号？
- [ ] 能否把 derivative definition 的两种形式互相改写？
- [ ] 能否解释为什么 continuous 不足以推出 differentiable？
- [ ] 对 piecewise function，是否始终先检查 continuity？
- [ ] 能否从外到内标出 composite function 的每一层？
- [ ] 多层 Chain Rule 中，是否每一层的 derivative 都出现一次？
- [ ] 对 $y^n$、$\sin y$、$\ln y$ 求导时，是否自动补上 $y'$？
- [ ] 对 $xy$ 求导时，是否记得 $xy'+y$？
- [ ] 能否在代点前先求出完整 slope expression？

---

## 28. After-Class Compression / 看完压缩版

~~~text
quotient rule:
(f/g)' = (f'g - fg') / g^2

derivative definition:
f'(a) = lim h->0 [f(a+h)-f(a)]/h
      = lim x->a [f(x)-f(a)]/(x-a)

differentiable at c:
same finite left and right derivative

differentiable -> continuous
continuous -/-> differentiable

piecewise join:
continuity first, derivative match second

chain rule:
[f(g(x))]' = f'(g(x))g'(x)
outer derivative at unchanged inner
times inner derivative

implicit differentiation:
treat y as y(x)
d(y^n)/dx = ny^(n-1)y'
differentiate -> collect y' -> solve -> substitute
~~~

## 29. Links / 链接

- [[AP Calculus BC]]
- [[微积分BC第2次正课-极限应用与导数入门]]
- [[微积分BC第4次正课-反函数高阶导数与运动应用]]
- [[Derivatives]]
- [[Limits]]
- Average Rate of Change
- [[Tangent Line]]
- [[Product Rule]]
- [[Power Rule]]
- [[Derivative Formulas]]
- [[Antiderivative]]
- [[Function Composition]]
- [[Chain Rule]]
- [[Implicit Curve]]
- [[Implicit Differentiation]]
- [[Related Rates]]
- [[Natural Logarithm]]
- [[02 - The Paradox of the Derivative]]
- [[04 - Visualizing the Chain Rule and Product Rule]]
- [[06 - Implicit Differentiation, What's Going On Here]]
