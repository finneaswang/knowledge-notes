---
title: "微积分BC第9次正课 - 积分方法与反常积分"
description: "A connected bilingual learning note about 微积分BC第9次正课 - 积分方法与反常积分."
publish: true
tags: [open-notes, calculus-course]
---
# 微积分BC第9次正课 - 积分方法与反常积分

## Reading Guide / 阅读说明

本课承接 [[微积分BC第8次正课-反导FTC变上限积分与换元]]，完成 Unit 6。第 8 课建立“积分是逆向求导”，第 9 课解决“integrand 不在基本表里时，怎样先改写结构再积分”。

~~~text
recognize structure
-> rewrite the integrand
-> use a basic antiderivative
-> differentiate to verify

unbounded interval or unbounded integrand
-> replace the improper part by a limit
-> decide convergence or divergence
~~~

本笔记保留每种方法的识别信号、推导逻辑和代表例题；考试年份、题号、课堂等待、设备故障和分值话术不保留。

## Reading Rule / 读法约定

- 先问 integrand 属于哪种 structure，不要一看到积分号就直接硬算。
- 任何代数改写都必须保持 integrand 等价。
- 方法的目标是让新 integral 比原 integral 更简单。
- indefinite integral 最后写 $+C$；definite integral 处理 bounds。
- 出现 $\infty$ 或 vertical asymptote 时，必须先写 limit definition。

---

## 1. One-Sentence Mainline / 一句话主线

> **Integration techniques expose a familiar derivative pattern hidden by algebra, products, or rational structure; improper integrals add a limit test before a value can be claimed.**
>
> 积分方法通过代数、乘积和分式结构还原被隐藏的熟悉求导模式；反常积分则要求先通过极限判断，之后才能谈数值。

## 2. Class Flow / 课堂脉络

1. 补完 definite [[U-Substitution]] 与 bounds conversion。
2. 对 improper rational functions 先做 polynomial long division。
3. 对 quadratic denominator 完成平方，匹配 inverse-trig forms。
4. 从 Product Rule 推出 [[Integration by Parts]]。
5. 用 LIATE 与 tabular method 选择 $u$、$dv$。
6. 用 [[Partial Fractions]] 拆解 proper rational functions。
7. 建立四种方法的 selection map。
8. 用 limit 正式定义 [[Improper Integral]]。
9. 分别检查无限区间、whole line 与内部 singularity。

---

# Part A - Definite U-Substitution / 定积分换元

## 3. Review: U-Substitution Is Reverse Chain Rule / 换元是逆链式法则

若

$$
u=g(x),\qquad du=g'(x)\,dx,
$$

则

$$
\int f(g(x))g'(x)\,dx=\int f(u)\,du.
$$

例如：

$$
\int x\sin(x^2)\,dx.
$$

令 $u=x^2$，$du=2x\,dx$：

$$
\int x\sin(x^2)\,dx
=\frac12\int\sin u\,du
=-\frac12\cos u+C.
$$

所以

$$
\boxed{-\frac12\cos(x^2)+C}.
$$

## 4. Two Consistent Ways to Handle Bounds / 两种一致做法

对

$$
\int_a^b f(g(x))g'(x)\,dx,
$$

换元后只能选择以下一种完整路线。

### Route 1: Change the bounds

若 $u=g(x)$，则

$$
x=a\Rightarrow u=g(a),
\qquad
x=b\Rightarrow u=g(b).
$$

于是

$$
\int_a^b f(g(x))g'(x)\,dx
=\int_{g(a)}^{g(b)}f(u)\,du.
$$

全程保持 $u$，无需换回 $x$。

### Route 2: Keep the original bounds temporarily

先求 $u$-antiderivative，再换回 $x$，最后使用原来的 $x$-bounds。

> **The variable and the bounds must belong to the same coordinate system.**
>
> 积分变量与上下限必须属于同一套变量系统：$du$ 配 $u$-bounds，$dx$ 配 $x$-bounds。

## 5. Definite-Substitution Examples / 定积分换元例题

### Example 1: Rational Log Substitution

$$
\int_1^2\frac{1}{2x+1}\,dx.
$$

令

$$
u=2x+1,\qquad du=2dx.
$$

新 bounds：$x=1\to u=3$，$x=2\to u=5$：

$$
\int_1^2\frac{1}{2x+1}\,dx
=\frac12\int_3^5\frac1u\,du
=\boxed{\frac12\ln\frac53}.
$$

### Example 2: Exponential Substitution

$$
\int_0^4 xe^{x^2}\,dx.
$$

$u=x^2$，$du=2x\,dx$，bounds $0\to0$、$4\to16$：

$$
\int_0^4 xe^{x^2}\,dx
=\frac12\int_0^{16}e^u\,du
=\boxed{\frac12(e^{16}-1)}.
$$

---

# Part B - Rational Integrands / 有理函数的预处理

## 6. First Compare Polynomial Degrees / 先比较次数

对 rational function

$$
\frac{P(x)}{Q(x)},
$$

先比较 degrees：

- $\deg P\ge\deg Q$：先 polynomial long division。
- $\deg P<\deg Q$ 且 denominator 可因式分解：考虑 [[Partial Fractions]]。
- quadratic denominator 不容易分解但可完成平方：考虑 completing the square。

这三个方法不是互斥标签。一个复杂 rational integral 可能先 long division，再对 remainder 使用 partial fractions 或 completing the square。

## 7. Polynomial Long Division / 多项式长除法

目标是写成

$$
\frac{P(x)}{Q(x)}=S(x)+\frac{R(x)}{Q(x)},
\qquad \deg R<\deg Q.
$$

$S$ 是 quotient，$R$ 是 remainder。这样 polynomial part 可直接积分，remainder fraction 再单独处理。

### Full example

$$
\frac{6x^3-19x^2+16x-3}{x-2}
=6x^2-7x+2+\frac1{x-2}.
$$

因此

$$
\int\frac{6x^3-19x^2+16x-3}{x-2}\,dx
$$

$$
=2x^3-\frac72x^2+2x+\ln|x-2|+C.
$$

可用 multiplication 检查 division：

$$
(x-2)(6x^2-7x+2)+1
=6x^3-19x^2+16x-3.
$$

### Missing-term example

$$
\frac{x^3+5}{x^2}=x+\frac5{x^2}.
$$

长除时可写成 $x^3+0x^2+0x+5$，避免 columns 错位。

$$
\int\frac{x^3+5}{x^2}\,dx
=\boxed{\frac{x^2}{2}-\frac5x+C}.
$$

### Definite example

$$
\frac{x^2-x-5}{x+2}=x-3+\frac1{x+2}.
$$

所以

$$
\int_1^2\frac{x^2-x-5}{x+2}\,dx
=\left[\frac{x^2}{2}-3x+\ln|x+2|\right]_1^2
$$

$$
=\boxed{-\frac32+\ln\frac43}.
$$

## 8. Completing the Square / 凑平方

两个 inverse-trigonometric patterns：

$$
\int\frac{dx}{\sqrt{a^2-x^2}}
=\arcsin\left(\frac{x}{a}\right)+C,
\qquad a>0,
$$

$$
\int\frac{dx}{a^2+x^2}
=\frac1a\arctan\left(\frac{x}{a}\right)+C.
$$

### Example 1: Unit Arctangent Pattern

$$
x^2+2x+2=(x+1)^2+1.
$$

因此

$$
\boxed{
\int\frac{dx}{x^2+2x+2}
=\arctan(x+1)+C
}.
$$

### Example 2: Scaled Arctangent Pattern

$$
x^2+8x+52=(x+4)^2+36.
$$

因此

$$
\boxed{
\int\frac{dx}{x^2+8x+52}
=\frac16\arctan\left(\frac{x+4}{6}\right)+C
}.
$$

完成平方只是 algebraic rewrite；真正积分来自已验证的 inverse-trig derivative pattern。

---

# Part C - Integration by Parts / 分部积分

## 9. Formula From the Product Rule / 公式来源

Product Rule：

$$
d(uv)=u\,dv+v\,du.
$$

两边积分并整理：

$$
\boxed{
\int u\,dv=uv-\int v\,du
}.
$$

[[Integration by Parts]] 的目标是：把一个不好积的 product 变成更简单的另一个 integral。

> **Differentiate the factor that becomes simpler; integrate the factor that stays manageable.**
>
> 让求导后会简化的因子做 $u$，让容易反导的因子做 $dv$。

## 10. Choosing u With LIATE / 用 LIATE 选 $u$

课堂口诀“反对幂指三”对应常用 LIATE priority：

1. Logarithmic / logarithm
2. Inverse trigonometric
3. Algebraic / power
4. Trigonometric
5. Exponential

不同教材会交换前两项，口诀不是定理。真正标准是：选择后，$du$ 应更简单，$v=\int dv$ 应可算。

## 11. Example: Integral of ln x / 对数函数本身

把 $dx$ 看成 $1\,dx$：

$$
u=\ln x,
\qquad dv=dx,
$$

$$
du=\frac1x\,dx,
\qquad v=x.
$$

所以

$$
\int\ln x\,dx
=x\ln x-\int1\,dx
=\boxed{x\ln x-x+C}.
$$

## 12. Example: x ln x / 幂函数乘对数

取

$$
u=\ln x,
\qquad dv=x\,dx,
$$

则

$$
du=\frac1x\,dx,
\qquad v=\frac{x^2}{2}.
$$

$$
\int x\ln x\,dx
=\frac{x^2}{2}\ln x
-\int\frac{x^2}{2}\frac1x\,dx
$$

$$
=\boxed{\frac{x^2}{2}\ln x-\frac{x^2}{4}+C}.
$$

若反过来让 $u=x\ln x$，$du$ 会变长，new integral 反而更复杂；这就是错误方向的诊断信号。

## 13. Tabular Form / 表格法

表格法只是 by-parts formula 的 compact bookkeeping：

| Differentiate | Integrate |
|---|---|
| $u$ | $dv$ |
| $du/dx$ | $v$ |

读法仍是

$$
uv-\int v\,du.
$$

例如：

$$
\int xe^x\,dx
=xe^x-\int e^x\,dx
=\boxed{e^x(x-1)+C}.
$$

表格不改变数学，只减少符号管理负担。

## 14. Abstract Function Example / 抽象函数例题

$$
\int_0^4x f'(x)\,dx
=\left[xf(x)\right]_0^4-\int_0^4f(x)\,dx.
$$

若 $f(4)=-3$ 且 $\int_0^4f(x)dx=8$，则

$$
\int_0^4x f'(x)dx
=4(-3)-8
=\boxed{-20}.
$$

不需要知道 $f$ 的 explicit formula；by parts 将 $f'$ 积回 $f$，使题目给定信息可用。

## 15. Product Recognition / 什么时候考虑分部积分

常见信号：

- polynomial $\times$ exponential；
- polynomial $\times$ trigonometric；
- polynomial $\times$ logarithm；
- logarithm 或 inverse-trig function 单独出现；
- abstract product 如 $x f'(x)$。

“两个简单函数相乘”只是提示，不是充分条件。若 product 已经明显呈现 $f(g(x))g'(x)$，[[U-Substitution]] 通常更直接。

---

# Part D - Partial Fractions / 部分分式

## 16. When Partial Fractions Applies / 使用条件

先确认 rational function 是 proper：

$$
\deg P<\deg Q.
$$

若不是，先 long division。然后 factor denominator。对 distinct linear factors：

$$
\frac{P(x)}{(x-a)(x-b)}
=\frac{A}{x-a}+\frac{B}{x-b}.
$$

本课只处理 distinct linear factors；repeated factors 与 irreducible quadratics 需要更完整的 decomposition template。

## 17. Finding Coefficients / 求系数

将

$$
\frac{2x+3}{(x+1)(x+2)}
=\frac{A}{x+1}+\frac{B}{x+2}
$$

通分，得到 identity：

$$
2x+3=A(x+2)+B(x+1).
$$

代 $x=-1$ 得 $A=1$；代 $x=-2$ 得 $B=1$。因此

$$
\boxed{
\int\frac{2x+3}{(x+1)(x+2)}dx
=\ln|x+1|+\ln|x+2|+C
}.
$$

可合并为

$$
\ln|(x+1)(x+2)|+C.
$$

## 18. Difference-of-Squares Example / 平方差例题

$$
\frac8{x^2-4}
=\frac8{(x-2)(x+2)}
=\frac2{x-2}-\frac2{x+2}.
$$

所以

$$
\int\frac8{x^2-4}\,dx
=2\ln|x-2|-2\ln|x+2|+C
$$

$$
=\boxed{2\ln\left|\frac{x-2}{x+2}\right|+C}.
$$

## 19. Definite Partial-Fraction Example / 定积分例题

$$
\frac{5x+8}{(x+1)(x+2)}
=\frac3{x+1}+\frac2{x+2}.
$$

因此

$$
\int_0^1\frac{5x+8}{(x+1)(x+2)}dx
=\left[3\ln|x+1|+2\ln|x+2|\right]_0^1
$$

$$
=3\ln2+2\ln3-2\ln2
=\ln2+\ln9
=\boxed{\ln18}.
$$

算完 decomposition 后仍要完成 antiderivative、bounds substitution 和 logarithm simplification。

---

# Part E - Technique Selection / 方法选择

## 20. Integration Method Map / 积分方法地图

~~~text
Is there an inner function and its derivative factor?
-> U-Substitution

Is it a rational function with numerator degree >= denominator degree?
-> Polynomial Long Division first

Is there a quadratic denominator close to (x-h)^2+a^2?
-> Complete the Square -> inverse-trig pattern

Is it a product where differentiating one factor simplifies it?
-> Integration by Parts

Is it a proper rational function with factorable denominator?
-> Partial Fractions

None fits?
-> algebraic rewrite, identities, or a later technique may be needed
~~~

## 21. Structure Before Method / 结构优先

同一题可能需要组合方法：

~~~text
rational but improper
-> long division
-> remaining proper fraction
-> partial fractions or completing square

composite product
-> compare u-substitution against integration by parts
-> choose the route that makes the next integral simpler
~~~

最稳定的自检仍是：对最终 antiderivative 求导，是否恢复原 integrand。

---

# Part F - Improper Integrals / 反常积分

## 22. What Makes an Integral Improper / 何时称为反常

[[Improper Integral]] 有两类来源：

1. unbounded interval，例如 $[a,\infty)$；
2. unbounded integrand，例如 finite interval 内有 vertical asymptote。

它不是把 $\infty$ 当作普通 bound。积分值由 limit 定义。

## 23. Infinite Interval Definition / 无限区间定义

$$
\boxed{
\int_a^\infty f(x)dx
:=\lim_{b\to\infty}\int_a^b f(x)dx
}.
$$

若 limit 是 finite real number，integral **converges**；若 limit 不存在或无界，integral **diverges**。

同理：

$$
\int_{-\infty}^b f(x)dx
:=\lim_{a\to-\infty}\int_a^b f(x)dx.
$$

> **Convergence is a property of a limit, not a reward for finding an antiderivative.**
>
> 收敛是极限的性质，不是“能写出原函数”就自动得到的结果。

## 24. Two Benchmark Examples / 两个基准例题

### Divergent

$$
\int_1^\infty\frac1x\,dx
=\lim_{b\to\infty}[\ln x]_1^b
=\lim_{b\to\infty}\ln b
=\infty.
$$

所以 diverges。

### Convergent

$$
\int_1^\infty\frac1{x^2}\,dx
=\lim_{b\to\infty}\left[-\frac1x\right]_1^b
=\lim_{b\to\infty}\left(1-\frac1b\right)
=\boxed{1}.
$$

## 25. P-Integral Rule / p 型反常积分

$$
\boxed{
\int_1^\infty\frac1{x^p}dx
\text{ converges iff }p>1
}.
$$

当 $p=1$ 是 logarithmic divergence；当 $p<1$，tail 衰减更慢。这条规则后来连接 [[p-Series]] 与 [[Integral Test]]。

## 26. Improper Integral With Substitution / 反常积分与换元

$$
\int_1^\infty xe^{-x^2}\,dx.
$$

先写 limit，再令 $u=-x^2$：

$$
\int_1^\infty xe^{-x^2}dx
=\lim_{b\to\infty}\left[-\frac12e^{-x^2}\right]_1^b
$$

$$
=\lim_{b\to\infty}
\left(-\frac12e^{-b^2}+\frac12e^{-1}\right)
=\boxed{\frac1{2e}}.
$$

这里不是“把 infinity 直接代入”，而是计算 $b\to\infty$ 的 limit。

## 27. Whole Real Line / 整条实数轴

对任意 finite split point $c$：

$$
\int_{-\infty}^{\infty}f(x)dx
=\int_{-\infty}^{c}f(x)dx
+\int_c^{\infty}f(x)dx.
$$

两边必须分别 converge，整个 integral 才 converge。不能让两个 divergent tails 形式上“抵消”。

这与 Cauchy principal value 不同；普通 improper integral 不接受 $+\infty$ 与 $-\infty$ 的伪抵消。

## 28. Interior Vertical Asymptote / 区间内部奇点

若 $f$ 在 $c\in(a,b)$ unbounded，则

$$
\int_a^bf(x)dx
=\int_a^cf(x)dx+\int_c^bf(x)dx,
$$

其中每一部分都必须用 one-sided limit 定义并分别 converge。

例如

$$
\int_{-1}^{1}\frac1x\,dx
$$

不能因 odd symmetry 宣称为 $0$。在 $x=0$ 拆开后，两侧分别 diverge，因此 ordinary improper integral diverges。

同样，

$$
\int_0^1\frac1x\,dx
=\lim_{a\to0^+}\int_a^1\frac1x\,dx
$$

diverges。

---

## 29. Fidelity Notes / 原稿校正

1. Transcript 中“分布积分”统一校正为 **分部积分 / Integration by Parts**；“分式拆分”统一使用 **Partial Fractions**。
2. $\int x\sin(x^2)dx$ 的正确结果是 $-\frac12\cos(x^2)+C$，不是额外再乘一个 $1/2$。
3. long-division 首例 quotient 是 $6x^2-7x+2$，不是 transcript 某处出现的 $6x^2-7x-2$。
4. $\int(x^3+5)/x^2dx=x^2/2-5/x+C$；原稿末尾分数识别混乱，本笔记已按 differentiation 复核。
5. completing-square 方法名称是 **completing the square**，不是 transcript 的 “complicating the square”。
6. “两个简单函数相乘就用 by parts”只是初步提示；方法选择取决于 new integral 是否更简单。
7. partial fractions 不是所有 factored denominator 都只写两个常数；本课公式限于 distinct linear factors。
8. improper integral 不能把 $\infty$ 当普通数字代入，必须用 limit。
9. “积得出来就是 converge”需要修正：写出 antiderivative 不够，决定性条件是 defining limit 是否为 finite number。
10. $\int_{-1}^1(1/x)dx$ 的 ordinary improper integral diverges，即使 symmetric principal value 是 $0$。

---

## 30. Deep Phrases / 深层表达

> **Integration techniques do not change the integral; they reveal a form whose antiderivative we already know.**
>
> 积分方法不会改变积分本身；它们只是把 integrand 改写成我们已经认识的反导形式。

> **The correct technique is the one that reduces structural complexity.**
>
> 正确方法的判断标准，是它是否真正降低了结构复杂度。

> **Integration by parts is the Product Rule read backward.**
>
> 分部积分就是把乘积求导公式反向阅读。

> **Partial fractions replace one coupled rational expression with several elementary logarithmic pieces.**
>
> 部分分式把一个耦合的有理式拆成若干可直接积分的对数型小块。

> **An improper integral is an ordinary definite integral wrapped inside a limit.**
>
> 反常积分是在极限中定义的定积分，而不是带着无穷符号的普通代入题。

---

## 31. Video Companion / 视频搭配

[[08 - Integration and the Fundamental Theorem of Calculus]] 解释为什么 antiderivative endpoint change 可以计算 accumulated total；本课则专门解决“如何找到 antiderivative”。

[[07 - Limits, L'Hopital's Rule, and Epsilon-Delta Definitions]] 与 improper integrals 相接：finite-bound integral 先计算，再让 artificial bound 逼近 infinity 或 singularity。

观看时可以用这条线同步：

~~~text
Riemann-sum limit -> definite integral
FTC -> antiderivative endpoint evaluation
integration techniques -> find the antiderivative
improper limit -> decide whether unbounded accumulation exists
~~~

3Blue1Brown 连接只来自既有 Knowledge Graph Connections；本次未重新读取完整视频笔记。

---

## 32. Decision Maps / 判断路线

### Technique selection

~~~text
hidden Chain Rule? -> U-Substitution
rational and improper? -> Long Division
quadratic denominator near square + constant? -> Complete the Square
product with one factor simplifying under differentiation? -> Integration by Parts
proper rational with factorable denominator? -> Partial Fractions
~~~

### Improper integral

~~~text
infinite bound or unbounded integrand?
-> identify each improper endpoint/singularity
-> split so each piece has one improper side
-> replace each by a one-sided limit
-> compute
-> every piece finite? converge
-> any piece fails? diverge
~~~

---

## 33. Knowledge Graph Connections / 知识图谱连接

- [[微积分BC第8次正课-反导FTC变上限积分与换元]] 提供 [[Antiderivative]]、FTC 与 [[U-Substitution]] 基础。
- [[U-Substitution]] 逆转 [[Chain Rule]]；[[Integration by Parts]] 逆转 Product Rule。
- [[Partial Fractions]] 将 proper rational function 拆成 elementary logarithmic integrals。
- [[Improper Integral]] 连接 [[Limits]] 与 [[Definite Integral]]。
- [[p-Series]] 与 [[Integral Test]] 使用 improper-integral convergence 判断 series tail。
- [[微积分BC第13次正课-无穷级数判敛]] 将本课的反常积分推广为 series convergence 工具。
- [[07 - Limits, L'Hopital's Rule, and Epsilon-Delta Definitions]] 提供 limit language。
- [[08 - Integration and the Fundamental Theorem of Calculus]] 提供 FTC 与 accumulation intuition。

---

## 34. Confusion / Questions

- [ ] definite substitution 时，变量与 bounds 是否始终属于同一系统？
- [ ] rational function 是否先比较 numerator/denominator degrees？
- [ ] long division 的 quotient 与 remainder 能否乘回检查？
- [ ] completing square 后能否匹配正确的 arcsine/arctangent form？
- [ ] by parts 选择 $u$、$dv$ 后，new integral 是否更简单？
- [ ] 能否从 Product Rule 推回 by-parts formula？
- [ ] partial fractions 前是否确认 fraction proper 并 factor denominator？
- [ ] decomposition coefficients 能否通过 recombination 检查？
- [ ] 看到 infinity 时是否先写 limit，而不是直接代入？
- [ ] whole-line integral 是否分别检查两个 tails？
- [ ] interior singularity 是否拆成两个 one-sided improper integrals？
- [ ] 能否解释为什么 $\int_{-1}^1 1/x\,dx$ 不是 $0$？

---

## 35. After-Class Compression / 看完压缩版

~~~text
definite u-sub:
change variable -> change bounds
or substitute back -> keep original bounds
never mix systems

rational function:
degree numerator >= denominator -> long division
proper + factorable denominator -> partial fractions
quadratic -> complete square -> inverse trig

integration by parts:
integral u dv = uv - integral v du
reverse Product Rule
choose u so du simplifies

method map:
hidden chain -> u-sub
product -> by parts
improper rational -> division first
proper factored rational -> partial fractions

improper integral:
replace infinity/singularity by limit
finite limit -> converge
otherwise -> diverge
split every improper side and test separately

p-integral:
integral_1^infinity 1/x^p converges iff p>1
~~~

## 36. Links / 链接

- [[UBC Knowledge Graph]]
- [[AP Calculus BC]]
- [[微积分BC第8次正课-反导FTC变上限积分与换元]]
- [[Integrals]]
- [[Antiderivative]]
- [[Definite Integral]]
- [[U-Substitution]]
- [[Integration by Parts]]
- [[Partial Fractions]]
- [[Improper Integral]]
- [[Chain Rule]]
- [[Limits]]
- [[p-Series]]
- [[Integral Test]]
- [[微积分BC第13次正课-无穷级数判敛]]
- [[07 - Limits, L'Hopital's Rule, and Epsilon-Delta Definitions]]
- [[08 - Integration and the Fundamental Theorem of Calculus]]
