---
title: "微积分BC第8次正课 - 反导、FTC、变上限积分与换元"
description: "A connected bilingual calculus note about 微积分BC第8次正课 - 反导、FTC、变上限积分与换元."
publish: true
tags: [calculus, course-note]
---
# 微积分BC第8次正课 - 反导、FTC、变上限积分与换元

## Reading Note / 阅读说明

本课承接 [[微积分BC第7次正课-导数图像优化与定积分入门]]。第 7 课回答“定积分从哪里来”，本课回答三个更进一步的问题：

~~~text
How do we compute a definite integral?
-> find an antiderivative and evaluate endpoints

What happens when the upper bound moves?
-> the integral becomes an accumulation function

How do we integrate a disguised chain-rule pattern?
-> use u-substitution
~~~

本笔记保留课堂的计算路线、例题和变上限积分直觉；考试年份、题号、计算器按键、课堂管理和人物轶事不作为知识主线保留。

## Reading Rule / 读法约定

- 看到没有 bounds 的积分，先问：**Whose derivative is the integrand?**
- 看到 definite integral，先找 antiderivative，再做 upper minus lower。
- 看到 $\int_a^x f(t)dt$，把整个积分看成关于 $x$ 的 function。
- 看到 composite expression 与其 derivative factor 同时出现，尝试 [[U-Substitution]]。
- 每次积分后用 differentiation 做反向检查。

---

## 1. One-Sentence Mainline / 一句话主线

> **An antiderivative reverses differentiation, the Fundamental Theorem turns accumulated change into endpoint change, and substitution reverses the Chain Rule.**
>
> 反导逆转求导，微积分基本定理把连续累积压缩成端点变化，而换元法逆转链式法则。

## 2. Class Flow / 课堂脉络

1. 补齐 definite-integral properties。
2. 用 even/odd [[Symmetry]] 简化对称区间积分。
3. 定义 [[Antiderivative]] 与 indefinite integral。
4. 解释为什么必须写 $+C$，以及 initial condition 如何确定 $C$。
5. 建立常用 antiderivative table。
6. 用 FTC Part 2 计算 definite integrals。
7. 用 velocity-position 解释 net change。
8. 把 moving upper bound 变成 [[Accumulation Function]]。
9. 用 FTC Part 1 与 Chain Rule 对积分函数求导。
10. 用 [[U-Substitution]] 识别并还原 composite derivative pattern。

---

# Part A - Definite-Integral Properties / 定积分性质

## 3. Property Toolkit / 性质工具箱

### Orientation

$$
\int_b^a f(x)\,dx=-\int_a^b f(x)\,dx.
$$

### Zero-width interval

$$
\int_a^a f(x)\,dx=0.
$$

### Constant multiple and linearity

$$
\int_a^b cf(x)\,dx=c\int_a^bf(x)\,dx,
$$

$$
\int_a^b(f(x)\pm g(x))\,dx
=\int_a^bf(x)\,dx\pm\int_a^bg(x)\,dx.
$$

### Interval additivity

$$
\int_a^bf(x)\,dx+\int_b^cf(x)\,dx
=\int_a^cf(x)\,dx.
$$

### Integral of a constant

$$
\int_a^b c\,dx=c(b-a).
$$

它是 width $(b-a)$ 乘 constant height $c$；若 bounds 反向，width 的 orientation 自动使结果取负。

## 4. Rearranging Known Integrals / 利用区间关系拼接

已知

$$
\int_1^7f(x)\,dx=42,
\qquad
\int_7^3f(x)\,dx=-32.
$$

先反转第二个：

$$
\int_3^7f(x)\,dx=32.
$$

再用 interval additivity：

$$
\int_1^3f(x)\,dx
=\int_1^7f(x)\,dx-\int_3^7f(x)\,dx
=42-32=10.
$$

因此

$$
\boxed{\int_1^3 2f(x)\,dx=20}.
$$

做这类题时先在 number line 上排好 endpoints，再决定相加、相减或反向。

## 5. Even and Odd Symmetry / 奇偶对称

### Even function

$$
f(-x)=f(x)
$$

表示 $y$-axis symmetry。在 symmetric interval 上：

$$
\boxed{\int_{-a}^af(x)\,dx=2\int_0^af(x)\,dx}.
$$

### Odd function

$$
f(-x)=-f(x)
$$

表示 origin symmetry。对称的 signed contributions 抵消：

$$
\boxed{\int_{-a}^af(x)\,dx=0}.
$$

这两条都要求 interval 对称。如果区间不是 $[-a,a]$，不能直接使用。

### Mixed example

若 $f$ 为 odd function，则

$$
\int_{-2}^{2}(f(x)+6)\,dx
=\int_{-2}^{2}f(x)\,dx+\int_{-2}^{2}6\,dx
=0+6(4)=\boxed{24}.
$$

这里不是“整个 integrand 是 odd”，而是先用 linearity 分开，再分别利用 odd symmetry 与 constant-area rule。

---

# Part B - Antiderivatives / 反导与不定积分

## 6. Definition / 定义

若

$$
F'(x)=f(x),
$$

则 $F$ 是 $f$ 的一个 [[Antiderivative]]。

所有 antiderivatives 构成一族：

$$
\boxed{\int f(x)\,dx=F(x)+C}.
$$

> **An indefinite integral asks for a family of functions, not one numerical area.**
>
> 不定积分要求的是一族原函数，不是一个数值面积。

## 7. Why Plus C Is Necessary / 为什么必须加常数

因为 constant 的 derivative 是 $0$：

$$
\frac{d}{dx}[F(x)+C]=F'(x)=f(x).
$$

例如

$$
\int x^2\,dx=\frac{x^3}{3}+C.
$$

$x^3/3+1$、$x^3/3-5$ 和 $x^3/3+100$ 的 derivative 都是 $x^2$。几何上，它们是互相 vertical shifts 的曲线族。

若题目只说“find **an** antiderivative”，给出其中一个即可；若写完整 indefinite integral，必须保留 $+C$。

## 8. Antiderivative Table / 常用反导表

每一条都应该能通过 differentiation 验证。

### Power and logarithm

For $n\ne-1$,

$$
\int x^n\,dx=\frac{x^{n+1}}{n+1}+C.
$$

特殊情况 $n=-1$ 不能套 power rule：

$$
\int\frac1x\,dx=\ln|x|+C.
$$

绝对值同时覆盖 $x>0$ 与 $x<0$ 的 domain intervals。

### Exponential

$$
\int e^x\,dx=e^x+C,
$$

$$
\int a^x\,dx=\frac{a^x}{\ln a}+C,
\qquad a>0,\ a\ne1.
$$

### Trigonometric

$$
\int\cos x\,dx=\sin x+C,
$$

$$
\int\sin x\,dx=-\cos x+C,
$$

$$
\int\sec^2x\,dx=\tan x+C,
$$

$$
\int\csc^2x\,dx=-\cot x+C,
$$

$$
\int\sec x\tan x\,dx=\sec x+C,
$$

$$
\int\csc x\cot x\,dx=-\csc x+C.
$$

### Inverse trigonometric patterns

$$
\int\frac1{\sqrt{1-x^2}}\,dx=\arcsin x+C,
$$

$$
\int\frac1{1+x^2}\,dx=\arctan x+C.
$$

## 9. Reverse-Derivative Check / 反向验算

当积分不熟时，不必凭感觉相信答案。对 candidate $F(x)$ 求导：

$$
F'(x)\stackrel{?}{=}f(x).
$$

这是一条稳定的自检规则：

~~~text
integrate
-> differentiate the result
-> simplify
-> recover the original integrand
~~~

## 10. Initial Condition Selects One Function / 初始条件选出具体函数

已知

$$
f'(x)=x^2,
\qquad f(1)=2.
$$

先反导：

$$
f(x)=\frac{x^3}{3}+C.
$$

代入 condition：

$$
2=\frac13+C
\Rightarrow C=\frac53.
$$

所以

$$
f(x)=\frac{x^3}{3}+\frac53,
\qquad
\boxed{f(2)=\frac{13}{3}}.
$$

这正是 [[Initial Conditions]] 的作用：导数给出所有可能的 vertical shifts，附加一个 function value 选出其中唯一一条。

### Second example

若

$$
f'(x)=3x^2+2x,
\qquad f(2)=3,
$$

则

$$
f(x)=x^3+x^2+C.
$$

由 $12+C=3$ 得 $C=-9$，因此

$$
\boxed{f(1)=-7}.
$$

---

# Part C - Fundamental Theorem of Calculus / 微积分基本定理

## 11. FTC Part 2: Compute Accumulation From Endpoints / 用端点计算累积

若 $F'(x)=f(x)$，则

$$
\boxed{\int_a^bf(x)\,dx=F(b)-F(a)}.
$$

课堂称它为 Newton-Leibniz formula；在标准 calculus 语言里，它是 [[Fundamental Theorem of Calculus]] Part 2。

> **Find an antiderivative first; substitute the upper bound second; subtract the lower-bound value last.**
>
> 先找原函数，再代上限，最后减去代入下限的值。

## 12. Basic FTC Examples / 基础例题

### Example 1: Basic Power Integral

$$
\int_1^2x^2\,dx
=\left[\frac{x^3}{3}\right]_1^2
=\frac83-\frac13
=\boxed{\frac73}.
$$

definite integral 的最终答案不写 $+C$，因为同一个 constant 在 $F(b)-F(a)$ 中抵消。

### Example 2: Negative Lower Bound

$$
\int_{-1}^{3}(x^2-2x)\,dx
=\left[\frac{x^3}{3}-x^2\right]_{-1}^{3}.
$$

$$
F(3)=0,
\qquad
F(-1)=-\frac43,
$$

所以

$$
\boxed{\int_{-1}^{3}(x^2-2x)\,dx=\frac43}.
$$

代 negative lower bound 时必须给整个 $F(-1)$ 加括号。

## 13. Net Change Interpretation / 净变化解释

若 position 为 $s(t)$、velocity 为 $v(t)=s'(t)$，则

$$
\int_{t_1}^{t_2}v(t)\,dt
=s(t_2)-s(t_1).
$$

左边是 velocity 的 signed accumulation，右边是 position endpoint difference。它表示 **displacement / 位移**，不是总路程。

若要求 total distance，则要处理 velocity sign：

$$
\text{total distance}=\int_{t_1}^{t_2}|v(t)|\,dt.
$$

这说明 FTC 的核心不是“神奇地算面积”，而是：

> **Accumulating a rate over an interval produces the net change of the quantity whose derivative is that rate.**
>
> 在一个区间上累积变化率，得到相应总量的净变化。

## 14. Abstract FTC Example / 抽象形式

已知

$$
\int_0^4 f'(t)\,dt=8,
\qquad f(0)=5.
$$

由 FTC：

$$
\int_0^4 f'(t)\,dt=f(4)-f(0).
$$

因此

$$
8=f(4)-5
\Rightarrow
\boxed{f(4)=13}.
$$

不需要知道 $f$ 的具体 formula；只需识别“derivative 的 integral = original function 的 endpoint change”。

## 15. Numerical Definite Integrals / 数值定积分

有些 integrands 没有 elementary antiderivative，或者手算超出当前工具范围。这不代表 definite integral 不存在。

此时应区分：

- symbolic antiderivative 是否能用当前方法找到；
- definite integral 是否可由 numerical method / calculator 近似。

若已知 $H'(x)=g(x)$ 与 $H(5)=\pi$，可以用

$$
\int_2^5g(x)\,dx=H(5)-H(2)
$$

重建 $H(2)$。计算器只负责近似左侧定积分，结构仍由 FTC 提供。

---

# Part D - Accumulation Functions / 变上限积分函数

## 16. A Moving Bound Creates a Function / 上限移动后积分成为函数

定义

$$
A(x)=\int_a^x f(t)\,dt.
$$

$a$ 固定，$x$ 移动。每个 input $x$ 对应从 $a$ 到 $x$ 的一个 signed accumulation，因此 $A$ 不再是固定数，而是 [[Accumulation Function]]。

integration variable 写成 $t$，是为了不让 dummy variable 与外部 input $x$ 混淆。

### Function values

$$
A(c)=\int_a^cf(t)\,dt,
$$

特别地，

$$
A(a)=\int_a^af(t)\,dt=0.
$$

## 17. FTC Part 1: Differentiate Accumulation / 对累计函数求导

若 $f$ continuous，则

$$
\boxed{
\frac{d}{dx}\int_a^x f(t)\,dt=f(x)
}.
$$

为什么？当 upper bound 从 $x$ 增加到 $x+\Delta x$，新增累积近似为

$$
f(x)\Delta x.
$$

所以 accumulated total 每单位 $x$ 的瞬时增长率就是当前高度 $f(x)$。

这不是只靠“积分与求导符号抵消”的形式规则；它表达的是 local added area / local added accumulation。

## 18. Tangent-Line Example / 积分函数的切线

令

$$
h(x)=\int_{\pi/4}^{x}\sin^2t\,dt.
$$

在 $x=\pi/4$ 处：

$$
h\left(\frac\pi4\right)=0,
$$

$$
h'(x)=\sin^2x,
\qquad
h'\left(\frac\pi4\right)=\frac12.
$$

切线为

$$
\boxed{y=\frac12\left(x-\frac\pi4\right)}.
$$

这里再次出现旧流程：point 来自 function value，slope 来自 derivative。

## 19. Increasing and Decreasing an Accumulation Function / 判断累计函数升降

若

$$
h(x)=\int_{-1}^{x}f(t)\,dt,
$$

则

$$
h'(x)=f(x).
$$

因此：

$$
f(x)>0\Rightarrow h\text{ increasing},
$$

$$
f(x)<0\Rightarrow h\text{ decreasing}.
$$

读图时不要先费力估算累积面积。题目问 increasing，就先翻译成 $h'>0$，再用 FTC 得 $h'=f$，最后只看 given graph 在哪里 above the axis。

## 20. Composite Upper Bounds / 复合上限

若

$$
H(x)=\int_a^{g(x)}f(t)\,dt,
$$

则 FTC Part 1 与 Chain Rule 合并：

$$
\boxed{H'(x)=f(g(x))g'(x)}.
$$

> **Substitute the upper-bound expression into the integrand, then multiply by the derivative of the upper bound.**
>
> 把上限表达式代入 integrand，再乘以上限的导数。

### Example 1: Upper Bound $x^2$

$$
\frac{d}{dx}\int_1^{x^2}\ln t\,dt
=\ln(x^2)\cdot2x.
$$

### Example 2: Upper Bound $\sqrt{x}$

$$
\frac{d}{dx}\int_1^{\sqrt{x}}\frac1{1+t^2}\,dt
=\frac1{1+x}\cdot\frac1{2\sqrt{x}}
=\boxed{\frac1{2\sqrt{x}(1+x)}}.
$$

---

# Part E - U-Substitution / 换元法

## 21. U-Substitution Reverses the Chain Rule / 换元法逆转链式法则

Chain Rule says

$$
\frac{d}{dx}F(g(x))=F'(g(x))g'(x).
$$

所以若 integrand 出现

$$
f(g(x))g'(x),
$$

就应想到

$$
\boxed{
\int f(g(x))g'(x)\,dx
=F(g(x))+C
}
$$

where $F'=f$。

令

$$
u=g(x),
\qquad du=g'(x)\,dx,
$$

只是把这一结构改写为更容易识别的

$$
\int f(u)\,du.
$$

## 22. Choosing u / 怎样选择 $u$

优先寻找：

- a repeated inner expression；
- a denominator、radical、exponent 或 power base 中的 composite expression；
- whose derivative already appears elsewhere, perhaps up to a constant factor。

~~~text
complex inner expression -> candidate u
differentiate u -> du
can the rest become du up to a constant?
yes -> rewrite entirely in u
no -> try another structure or another method
~~~

换元完成后，integral 中不应混留未经处理的 $x$ 与 $u$。

## 23. Example: x Times a Composite Power / 复合幂例题

$$
\int x(x^2+1)^2\,dx.
$$

令

$$
u=x^2+1,
\qquad du=2x\,dx.
$$

因此

$$
\int x(x^2+1)^2\,dx
=\frac12\int u^2\,du
=\frac{u^3}{6}+C.
$$

换回：

$$
\boxed{\frac{(x^2+1)^3}{6}+C}.
$$

检查：

$$
\frac{d}{dx}\left[\frac{(x^2+1)^3}{6}\right]
=\frac12(x^2+1)^2(2x)
=x(x^2+1)^2.
$$

## 24. Example: High Power / 高次复合幂

$$
\int x^2(x^3-1)^{10}\,dx.
$$

令

$$
u=x^3-1,
\qquad du=3x^2\,dx.
$$

$$
\int x^2(x^3-1)^{10}\,dx
=\frac13\int u^{10}\,du
=\frac{u^{11}}{33}+C.
$$

所以

$$
\boxed{\frac{(x^3-1)^{11}}{33}+C}.
$$

## 25. Constant-Factor Matching / 常数因子匹配

$$
\int\cos(3x)\,dx.
$$

因为

$$
\frac{d}{dx}\sin(3x)=3\cos(3x),
$$

所以补偿多出的 $3$：

$$
\boxed{\int\cos(3x)\,dx=\frac13\sin(3x)+C}.
$$

也可令 $u=3x$。两种方法本质相同，都是逆向识别 Chain Rule。

同理：

$$
\int e^{2x}\,dx=\frac12e^{2x}+C.
$$

## 26. Differential Notation: Useful but Not Free Algebra / 微分符号的严格读法

从

$$
u=g(x)
$$

写

$$
du=g'(x)\,dx
$$

是对 Chain Rule 的有效 differential notation。它帮助匹配 integral measure，但不应被理解为所有情形下都可以无条件把 $du$、$dx$ 当普通独立数随意移项。

可靠判断标准不是“符号能不能搬”，而是替换后的 integral 是否严格对应

$$
f(g(x))g'(x)\,dx.
$$

---

## 27. Fidelity Notes / 原稿校正

1. Transcript 中的 “old function / AN function” 分别校正为 **odd function / even function**。
2. “anti director / anti decorating” 校正为 **antiderivative**；“牛顿莱姆尼斯”等识别统一为 **Newton-Leibniz formula / Fundamental Theorem of Calculus**。
3. 课堂将 $\int_1^2x^2dx$ 的结尾口算成了类似 $4/3$；正确结果是 $7/3$。
4. 速度积分 $\int v(t)dt$ 给 displacement，而不是自动给 total distance；后者需要 $\int|v(t)|dt$。
5. “不定积分没有图像意义”过强。它不表示一个固定 signed area，但表示一族 antiderivative curves。
6. “能求出的积分少之又少”应理解为 many functions lack elementary antiderivatives，而不是 definite integrals 通常不存在。
7. 变上限积分求导需要 integrand 的 continuity 等适当条件；课堂公式默认这些条件满足。
8. “微分是小微元，可以自由移动”是操作直觉。换元法的严格依据是 Chain Rule，不是无条件的 fraction algebra。
9. Transcript 将 $\int\ln x\,dx$ 当作当前方法无法处理，这是本课进度边界；它后来可由 integration by parts 求得。

---

## 28. Deep Phrases / 深层表达

> **An antiderivative reconstructs a quantity from its rate of change, but only up to a constant.**
>
> 反导从变化率重建总量，但只能确定到一个常数。

> **The constant of integration records information that differentiation erased.**
>
> 积分常数记录了求导时被抹掉的 vertical-position 信息。

> **The Fundamental Theorem compresses continuous accumulation into endpoint change.**
>
> 微积分基本定理把连续累积压缩成端点之间的变化。

> **The derivative of accumulated area is the current height being accumulated.**
>
> 累计面积函数的导数，就是当前正在累积的高度。

> **U-substitution is pattern recognition for a hidden Chain Rule.**
>
> 换元法是在 integrand 中识别被隐藏起来的链式法则。

---

## 29. Video Companion / 视频搭配

### Pair with Chapter 8

[[08 - Integration and the Fundamental Theorem of Calculus]] 最适合搭配本课 Part C 与 Part D：

- 本课给出 $F(b)-F(a)$ 与计算流程；视频解释 endpoint difference 为什么等于 accumulated change。
- 本课给出 $A'(x)=f(x)$；视频用新增 thin sliver 解释为什么 derivative 读取 current height。

### Pair with Chapter 9

[[09 - What Does Area Have to Do With Slope]] 把本课再推一步：integral 除以 interval width 得 average height，而 height 又是 antiderivative 的 local slope，所以它等于 antiderivative 的 endpoint secant slope。

3Blue1Brown 连接只来自既有 Knowledge Graph Connections；本次未重新读取完整视频笔记。

---

## 30. Decision Maps / 判断路线

### Indefinite integral

~~~text
no bounds
-> find F with F'=f
-> write F+C
-> differentiate to verify
-> use condition to solve C if given
~~~

### Definite integral

~~~text
bounds present
-> simplify using properties/symmetry if useful
-> find antiderivative F
-> F(upper)-F(lower)
-> no +C in final answer
~~~

### Accumulation function

~~~text
integral with variable upper bound
-> function value? substitute bound
-> derivative? FTC Part 1
-> composite bound? multiply by inner derivative
-> increasing? solve A'(x)>0
~~~

### U-substitution

~~~text
composite expression present
-> choose inner expression u
-> compute du
-> match remaining factor up to a constant
-> rewrite entirely in u
-> integrate
-> substitute back
-> differentiate to verify
~~~

---

## 31. Knowledge Graph Connections / 知识图谱连接

- [[微积分BC第9次正课-积分方法与反常积分]] 承接本课的 [[U-Substitution]]，补齐 by parts、partial fractions 与 improper-integral limits。
- [[微积分BC第7次正课-导数图像优化与定积分入门]] 建立 [[Definite Integral]]、[[Riemann Sum]] 与 [[Signed Area]]；本课开始真正计算。
- [[Antiderivative]] 与 [[Derivatives]] 是相反方向的操作，$+C$ 保存被 derivative 擦除的信息。
- [[Initial Conditions]] 从 antiderivative family 中选出一个具体 function。
- [[Fundamental Theorem of Calculus]] 同时连接 endpoint evaluation 与 [[Accumulation Function]] derivative。
- [[Symmetry]] 在函数积分中表现为 even doubling 与 odd cancellation。
- [[U-Substitution]] 是 [[Chain Rule]] 的逆向识别。
- [[08 - Integration and the Fundamental Theorem of Calculus]] 提供 tiny-area 与 FTC 直觉。
- [[09 - What Does Area Have to Do With Slope]] 把 accumulated area 连接到 antiderivative slope。
- [[One-Dimensional Motion]] 区分 velocity accumulation、displacement 与 total distance。

---

## 32. Confusion / Questions

- [ ] 能否说明 indefinite integral 为什么必须写 $+C$？
- [ ] $n=-1$ 时，是否避免误用 power rule？
- [ ] 能否用 differentiation 验证每一个 antiderivative？
- [ ] initial condition 如何从 function family 中确定 $C$？
- [ ] definite integral 是否始终按 upper minus lower？
- [ ] 能否区分 displacement 与 total distance？
- [ ] 看到 $\int_a^xf(t)dt$ 时，能否把它视为 function 而非固定数字？
- [ ] 变上限函数 increasing 时，究竟看 accumulation 还是看 integrand sign？
- [ ] composite upper bound 是否记得乘 $g'(x)$？
- [ ] 选择 $u$ 后，能否把 integral 完全改写为 $u$ 与 $du$？
- [ ] 换元结果能否通过 Chain Rule 导回原 integrand？

---

## 33. After-Class Compression / 看完压缩版

~~~text
properties:
reverse bounds -> negative
same bounds -> zero
linearity
adjacent intervals add
integral of c -> c(b-a)

symmetry on [-a,a]:
even -> 2 integral_0^a
odd -> 0

antiderivative:
F'=f -> integral f dx = F+C
C stores lost vertical information

FTC Part 2:
integral_a^b f = F(b)-F(a)
rate accumulation = net change

accumulation function:
A(x)=integral_a^x f(t)dt
A'(x)=f(x)

composite upper bound:
d/dx integral_a^{g(x)} f(t)dt
= f(g(x))g'(x)

u-substitution:
u=g(x), du=g'(x)dx
reverse the Chain Rule
~~~

## 34. Links / 链接

- [[AP Calculus BC]]
- [[微积分BC第7次正课-导数图像优化与定积分入门]]
- Integrals
- [[Definite Integral]]
- [[Signed Area]]
- [[Symmetry]]
- [[Antiderivative]]
- [[Initial Conditions]]
- [[Fundamental Theorem of Calculus]]
- [[Accumulation Function]]
- [[U-Substitution]]
- [[Derivatives]]
- [[Chain Rule]]
- [[One-Dimensional Motion]]
- [[08 - Integration and the Fundamental Theorem of Calculus]]
- [[09 - What Does Area Have to Do With Slope]]
- [[Integration by Parts]]
- [[Partial Fractions]]
- [[Improper Integral]]
- [[微积分BC第9次正课-积分方法与反常积分]]
