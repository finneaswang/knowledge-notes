---
title: "微积分BC第5次正课 - 相关变化率、线性近似与中值定理"
description: "A connected bilingual learning note about 微积分BC第5次正课 - 相关变化率、线性近似与中值定理."
publish: true
tags: [open-notes, calculus-course]
---
# 微积分BC第5次正课 - 相关变化率、线性近似与中值定理

## Reading Guide / 阅读说明

本课直接承接 [[微积分BC第4次正课-反函数高阶导数与运动应用]] 最后的 related-rates preview，完成 Unit 4，再开启 Unit 5：

~~~text
related rates
  relation -> differentiate with respect to time -> substitute
  cone / angle / ladder / multiple variables

linear approximation
  tangent line -> nearby function estimate

L'Hopital's Rule
  identify indeterminate form -> differentiate numerator and denominator

Mean Value Theorem
  continuity + differentiability
  -> some tangent slope equals the secant slope
~~~

本笔记以课堂 transcript 为主线，删除考试频率、选项统计与课堂管理话术；涉及 geometry、limit 和 theorem hypotheses 的地方均重新验算。

## Reading Rule / 读法约定

- related rates 永远先问“哪些 quantities 正在变化”。
- linear approximation 先找 base point，再看目标是否足够 nearby。
- L’Hôpital’s Rule 必须先确认 indeterminate form，不可见 ratio 就直接上下求导。
- theorem 不只记结论，还必须记 hypotheses。
- 3Blue1Brown 只读取相关笔记的 Wiki connection sections，没有重读完整正文。

---

## 1. One-Sentence Mainline / 一句话主线

> **Derivatives connect changing quantities through time, approximate nearby values through tangent lines, resolve eligible indeterminate ratios through derivative comparison, and guarantee tangent behavior through theorem hypotheses.**
>
> 导数可以用共同时间连接多个变化量，用切线近似附近函数值，用导数比处理符合条件的未定式，并在定理前提成立时保证某种切线行为必然出现。

## 2. Class Flow / 课堂脉络

1. 回顾 related rates 的三步。
2. 从已给关系的水面面积题开始。
3. 用 similar triangles 消去圆锥中的多余变量。
4. 用 trigonometric relation 处理 camera angle 与 ladder angle。
5. 处理 multiple-variable related rates。
6. 用 [[Tangent Line]] 引出 [[Linear Approximation]]。
7. 从切线方程写出 $L(x)=f(a)+f'(a)(x-a)$。
8. 用 [[L'Hôpital's Rule]] 回到 indeterminate limits。
9. 反复应用 L’Hôpital，并比较 logarithm、power、exponential growth。
10. 用 [[Mean Value Theorem]] 开启 Unit 5。
11. 对比 [[Mean Value Theorem]] 与 [[Intermediate Value Theorem]]。

---

# Part A - Related Rates / 相关变化率

## 3. What Related Rates Really Does / 相关变化率到底连接什么

若多个量共享同一个 time input：

$$
x=x(t),\qquad y=y(t),
$$

则

$$
\frac{dx}{dt},\qquad\frac{dy}{dt}
$$

分别描述它们的 instantaneous time rates。

[[Related Rates]] 用一个始终成立的 constraint 把这些 rates 连接起来。

> **Do not relate the rates first; relate the quantities first, then differentiate the relationship with respect to time.**
>
> 不要先拼变化率；先连接原始变量，再对时间求导。

---

## 4. The Reliable Routine / 稳定三步法

### Step 1: Write an always-true relation / 写始终成立的关系

只保留题目需要连接的 variables。若关系中有多余变量，先用 geometry 或 algebra 消去。

### Step 2: Differentiate with respect to time / 对时间求导

每个 changing quantity 都是 time 的函数：

$$
\frac{d}{dt}(x^n)
=nx^{n-1}\frac{dx}{dt}.
$$

这就是 [[Chain Rule]]。

### Step 3: Substitute the instant / 最后代入瞬时值

先求导，再代入：

$$
x=x_0,\quad y=y_0,\quad
\frac{dx}{dt}=r.
$$

最后解目标 rate，并保留 sign 与 units。

~~~text
identify quantities and rates
-> write one always-true relation
-> eliminate unnecessary variables
-> differentiate with respect to t
-> substitute the instant
-> solve and interpret sign/units
~~~

---

## 5. Surface-Area Example / 水面面积题

半球形容器内水面的 area 与 depth 满足

$$
A=12\pi h-\pi h^2.
$$

当

$$
h=3,\qquad \frac{dh}{dt}=-\frac12,
$$

求 $\frac{dA}{dt}$。

对时间求导：

$$
\frac{dA}{dt}
=12\pi\frac{dh}{dt}
-2\pi h\frac{dh}{dt}.
$$

代值：

$$
\frac{dA}{dt}
=12\pi\left(-\frac12\right)
-2\pi(3)\left(-\frac12\right)
=-6\pi+3\pi.
$$

所以

$$
\boxed{\frac{dA}{dt}=-3\pi}.
$$

负号表示 water-surface area 正在减小；若题目只问 decreasing speed 的 magnitude，则回答 $3\pi$。

---

## 6. Cone Example I / 圆锥题一

大圆锥 radius 为 $5$、height 为 $10$。水形成相似小圆锥，水面 radius 为 $x$、depth 为 $y$。

已知

$$
\frac{dV}{dt}=9,
\qquad y=6.
$$

求 $\frac{dy}{dt}$。

### Find the quantity relation / 找变量关系

圆锥体积：

$$
V=\frac13\pi x^2y.
$$

但目标是连接 $V$ 与 $y$，所以必须消去 $x$。由 similar triangles：

$$
\frac{x}{y}=\frac5{10}=\frac12,
\qquad x=\frac y2.
$$

代回：

$$
V
=\frac13\pi\left(\frac y2\right)^2y
=\frac{\pi}{12}y^3.
$$

### Differentiate and substitute / 求导代值

$$
\frac{dV}{dt}
=\frac{\pi}{4}y^2\frac{dy}{dt}.
$$

$$
9=\frac{\pi}{4}(6)^2\frac{dy}{dt}
=9\pi\frac{dy}{dt}.
$$

所以

$$
\boxed{\frac{dy}{dt}=\frac1\pi}.
$$

### Core lesson / 核心

难点不是求导，而是把 $V=\frac13\pi x^2y$ 改写成只含 $V$ 和 $y$ 的关系。

---

## 7. Cone Example II / 圆锥题二

大圆锥 radius 为 $4$、height 为 $12$。水深为 $h$、水面 radius 为 $r$。

$$
\frac{dV}{dt}=6,
\qquad h=5.
$$

由 similar triangles：

$$
\frac rh=\frac4{12}=\frac13,
\qquad r=\frac h3.
$$

体积：

$$
V
=\frac13\pi r^2h
=\frac13\pi\left(\frac h3\right)^2h
=\frac{\pi}{27}h^3.
$$

求导：

$$
\frac{dV}{dt}
=\frac{\pi}{9}h^2\frac{dh}{dt}.
$$

代值：

$$
6=\frac{\pi}{9}(25)\frac{dh}{dt}.
$$

所以

$$
\boxed{\frac{dh}{dt}
=\frac{54}{25\pi}
\approx0.688}.
$$

单位是 length per time，而不是 volume per time。

---

## 8. Geometry Rule: Eliminate Extra Variables / 几何题先消元

若目标是连接

$$
\frac{dV}{dt}
\quad\text{and}\quad
\frac{dh}{dt},
$$

但 equation 中还有 $r$，有两种可能：

1. $r$ 与 $h$ 存在永久 relation，可以先消去 $r$；
2. 题目同时给出 $dr/dt$，则保留多变量并用 Product Rule。

不要把“某一瞬间 $r=r_0$”误当成永远成立的 relation。瞬时值只能在求导后代入。

---

## 9. Camera-Angle Example / 相机追踪气球

camera 与 balloon 垂直投影点的水平距离固定为 $200$ m。气球高度为 $x$，elevation angle 为 $\theta$。

已知

$$
\frac{dx}{dt}=10\text{ m/s},
\qquad x=150\text{ m}.
$$

### Relation

$$
\tan\theta=\frac{x}{200}.
$$

### Differentiate

$$
\sec^2\theta\frac{d\theta}{dt}
=\frac1{200}\frac{dx}{dt}.
$$

当 $x=150$ 时，三角形边长为 $150$、$200$、$250$，所以

$$
\cos\theta=\frac{200}{250}=\frac45,
\qquad
\sec^2\theta=\left(\frac54\right)^2=\frac{25}{16}.
$$

因此

$$
\frac{25}{16}\frac{d\theta}{dt}
=\frac{10}{200}
=\frac1{20}.
$$

$$
\boxed{\frac{d\theta}{dt}
=\frac4{125}\text{ rad/s}}.
$$

angle rate 使用 radians per time。

---

## 10. Ladder-Angle Example / 梯子角度

长度 $15$ ft 的 ladder 靠墙。竖直高度为 $x$，底端到墙距离为 $y$，与地面夹角为 $\theta$。

梯子向下滑：

$$
\frac{dx}{dt}=-2\text{ ft/s}.
$$

当

$$
y=9,
$$

求 $\frac{d\theta}{dt}$。

选择一个永远成立、且只连接 $\theta$ 与 $x$ 的 relation：

$$
\sin\theta=\frac{x}{15}.
$$

求导：

$$
\cos\theta\frac{d\theta}{dt}
=\frac1{15}\frac{dx}{dt}.
$$

在该瞬间：

$$
\cos\theta=\frac y{15}=\frac9{15}.
$$

所以

$$
\frac9{15}\frac{d\theta}{dt}
=\frac1{15}(-2),
$$

$$
\boxed{\frac{d\theta}{dt}
=-\frac29\text{ rad/s}}.
$$

负号表示 acute angle 正在减小。

---

## 11. Multiple-Variable Related Rates / 多变量相关变化率

设

$$
w=x^2y.
$$

已知

$$
\frac{dx}{dt}=-1,
\qquad
\frac{dy}{dt}=4,
\qquad
x=6,\quad y=20.
$$

因为 $x$ 与 $y$ 都变化，使用 Product Rule：

$$
\frac{dw}{dt}
=2x\frac{dx}{dt}\,y
+x^2\frac{dy}{dt}.
$$

代入：

$$
\frac{dw}{dt}
=2(6)(-1)(20)+(6)^2(4)
=-240+144.
$$

$$
\boxed{\frac{dw}{dt}=-96}.
$$

当每个 quantity 和 rate 都给齐时，不必强行消元；直接对完整 relation 求导。

---

## 12. Related-Rates Language Triggers / 文字触发词

| Phrase | Mathematical translation |
|---|---|
| increasing at a rate of $r$ | derivative $=+r$ |
| decreasing at a rate of $r$ | derivative $=-r$ |
| how fast is the level rising? | find $dh/dt$ |
| how fast is the angle changing? | find $d\theta/dt$ |
| water flows in at $q$ cubic units/min | $dV/dt=q$ |
| at the instant when $h=h_0$ | substitute $h_0$ after differentiating |

---

# Part B - Linear Approximation / 线性近似

## 13. Why a Tangent Line Can Approximate / 为什么切线能近似

在 $x=a$ 附近，differentiable function 看起来越来越像 tangent line：

$$
f(x)\approx f(a)+f'(a)(x-a).
$$

定义

$$
\boxed{L(x)=f(a)+f'(a)(x-a)}.
$$

这就是 [[Linear Approximation]]，也是 tangent-line approximation。

> **Start from the known value, then add slope times the small input change.**
>
> 从已知函数值出发，加上局部斜率乘输入改变量。

~~~text
known output f(a)
+ local output change f'(a)(x-a)
= nearby estimate L(x)
~~~

近似通常在 $x$ 接近 $a$ 时更可靠。

---

## 14. Build the Tangent First / 先写切线

设

$$
f(2)=-8
$$

且 curve slope 为

$$
\frac{dy}{dx}=\frac{3x^2}{y}.
$$

在 $(2,-8)$：

$$
f'(2)=\frac{3(2)^2}{-8}=-\frac32.
$$

切线：

$$
L(x)
=-8-\frac32(x-2)
=-\frac32x-5.
$$

用它近似 $f(1.8)$：

$$
f(1.8)\approx L(1.8)
=-\frac32(1.8)-5
=\boxed{-7.7}.
$$

---

## 15. Direct Linearization Formula / 直接使用公式

若

$$
f(1)=15,
\qquad f'(1)=8,
$$

则

$$
L(x)=15+8(x-1)=8x+7.
$$

所以

$$
f(1.4)
\approx15+8(1.4-1)
=15+3.2
=\boxed{18.2}.
$$

无需先求 $b$；公式本身就是 point-slope form 的重排。

---

## 16. Approximation Versus a Rigorous Bound / 近似与严格界

课堂有一题给出

$$
f(0)=-5,
\qquad f'(x)\le3,
$$

并讨论 $f(2)$ 的最大可能值。

若只使用 linear approximation：

$$
f(2)\approx f(0)+f'(0)(2-0),
$$

这只是 local estimate，不足以单独证明整个区间上的严格 upper bound。

若 $f$ 在 $[0,2]$ continuous、在 $(0,2)$ differentiable，应该使用本课后半的 [[Mean Value Theorem]]：

$$
f(2)-f(0)=f'(c)(2-0)
$$

for some $c\in(0,2)$。因为 $f'(c)\le3$：

$$
f(2)+5\le6,
$$

所以

$$
\boxed{f(2)\le1}.
$$

这是 exact bound，不是 approximation。这个区分对 UBC 后续 calculus 很重要。

---

# Part C - L'Hopital's Rule / 洛必达法则

## 17. The Gate: Indeterminate Form / 使用前先过门槛

[[L'Hôpital's Rule]] 适用于满足 theorem hypotheses 的 indeterminate ratios，课堂重点是：

$$
\frac00
\qquad\text{or}\qquad
\frac{\infty}{\infty}.
$$

在适当条件下：

$$
\lim_{x\to a}\frac{f(x)}{g(x)}
=
\lim_{x\to a}\frac{f'(x)}{g'(x)}.
$$

### Mandatory first step / 必须先做

先直接代入或判断趋势：

~~~text
ordinary finite value -> stop and use it
0/nonzero -> limit is 0
nonzero/0 -> analyze divergence or one-sided behavior
0/0 or infinity/infinity -> L'Hopital may apply
~~~

> **Indeterminate means the form does not decide the answer; it does not mean the limit does not exist.**
>
> 未定式表示当前形式信息不足，不表示极限不存在。

上下分别求导，不使用 Quotient Rule。

---

## 18. Basic L'Hopital Examples / 基础例题

### Example 1

$$
\lim_{x\to0}\frac{e^x-1}{x}.
$$

代入得到 $0/0$，所以

$$
\lim_{x\to0}\frac{e^x}{1}
=\boxed{1}.
$$

### Example 2: Repeat if needed / 可以反复使用

$$
\lim_{x\to0}\frac{1-\cos x}{x^2}.
$$

第一次：

$$
\lim_{x\to0}\frac{\sin x}{2x},
$$

仍是 $0/0$。第二次：

$$
\lim_{x\to0}\frac{\cos x}{2}
=\boxed{\frac12}.
$$

每次求导后都要重新检查新 ratio，而不是无条件继续。

---

## 19. Difference-Quotient Example / 导数定义式

$$
\lim_{h\to0}
\frac{
\sin(\frac\pi3+h)-\sin(\frac\pi3)
}{h}.
$$

这是 derivative definition，也可在确认 $0/0$ 后使用 L’Hôpital。对 $h$ 求导：

$$
\lim_{h\to0}
\cos\left(\frac\pi3+h\right)
=\cos\frac\pi3
=\boxed{\frac12}.
$$

$\sin(\pi/3)$ 对 $h$ 是 constant，derivative 为 $0$。

---

## 20. Abstract Repeated L'Hopital / 抽象反复求导

考虑

$$
\lim_{x\to2}
\frac{f(x)}{(x-2)^2},
$$

且

$$
f(2)=0,\qquad f'(2)=0,\qquad f''(2)=5.
$$

第一次：

$$
\lim_{x\to2}\frac{f'(x)}{2(x-2)},
$$

仍为 $0/0$。

第二次：

$$
\lim_{x\to2}\frac{f''(x)}2
=\boxed{\frac52}.
$$

停止条件是新 ratio 已经可以求值。

---

## 21. Growth Comparison at Infinity / 无穷远增长比较

### Logarithm versus power

$$
\lim_{x\to\infty}\frac{\ln x}{x^{99}}.
$$

L’Hôpital 一次：

$$
\lim_{x\to\infty}
\frac{1/x}{99x^{98}}
=
\lim_{x\to\infty}
\frac1{99x^{99}}
=0.
$$

### Exponential versus logarithm

$$
\lim_{x\to\infty}\frac{e^x}{\ln x}.
$$

L’Hôpital：

$$
\lim_{x\to\infty}\frac{e^x}{1/x}
=\lim_{x\to\infty}xe^x
=\infty.
$$

### Power versus exponential

$$
\lim_{x\to\infty}\frac{x^{99}}{e^x}.
$$

反复使用 99 次后，numerator 成为 $99!$，denominator 仍是 $e^x$：

$$
\lim_{x\to\infty}\frac{99!}{e^x}=0.
$$

因此对 $x\to\infty$ 的正向增长：

$$
\boxed{\text{exponential}
\gg
\text{power}
\gg
\text{logarithm}}.
$$

bounded trigonometric functions 不属于同一种“无限增长”层级。

---

## 22. L'Hopital Watch Outs / 洛必达易错点

- 未确认 $0/0$ 或 $\infty/\infty$ 就直接使用。
- 把 numerator/denominator 的 derivative 写成 Quotient Rule。
- 求导一次后忘记保留 limit notation。
- 新 ratio 已可求值却继续求导。
- 新 ratio 仍是 indeterminate form 却过早停止。
- 用 L’Hôpital 循环证明其所依赖的 derivative formula。
- 忘记 one-sided、domain 和 denominator nonzero-nearby 等 theorem conditions。

---

# Part D - Mean Value Theorem / 中值定理

## 23. Mean Value Theorem Statement / 中值定理

若 $f$：

1. continuous on the closed interval $[a,b]$；
2. differentiable on the open interval $(a,b)$；

则至少存在一个

$$
c\in(a,b)
$$

使得

$$
\boxed{
f'(c)=\frac{f(b)-f(a)}{b-a}
}.
$$

右边是 secant slope / average rate of change；左边是 tangent slope / instantaneous rate of change。

> **Some instantaneous rate inside the interval equals the average rate over the whole interval.**
>
> 区间内至少有一个瞬时变化率，等于整个区间的平均变化率。

MVT 保证存在，不保证这个 $c$ 唯一。

---

## 24. Geometric Meaning / 几何意义

连接 endpoints $(a,f(a))$ 和 $(b,f(b))$ 得到 secant line。

只要 curve 在 closed interval 上不断裂、在 interior 没有 corner/cusp/vertical tangent，就至少存在一处 tangent line 与该 secant line 平行。

~~~text
continuous on [a,b]
+ differentiable on (a,b)
-> at least one interior tangent
   parallel to endpoint secant
~~~

前提不是附加装饰，而是 theorem 能否调用的 gate。

---

## 25. MVT Example: Find the Guaranteed Slope / 求保证的导数值

设

$$
f(x)=2x^3-4x^2+1
$$

on $[1,3]$。

$$
f(1)=2-4+1=-1,
$$

$$
f(3)=54-36+1=19.
$$

secant slope：

$$
\frac{f(3)-f(1)}{3-1}
=\frac{19-(-1)}2
=\boxed{10}.
$$

MVT 保证至少有 $c\in(1,3)$ 满足

$$
f'(c)=10.
$$

题目若只问 guaranteed derivative value，无需再解 $c$。

---

## 26. MVT Example: Solve for the Point / 反求 $c$

已知

$$
f(1)=9,\qquad f(3)=11,
$$

且

$$
f'(x)=\frac{3x^2-6}{x^2}.
$$

MVT average slope：

$$
\frac{11-9}{3-1}=1.
$$

所以求解

$$
\frac{3c^2-6}{c^2}=1.
$$

$$
3c^2-6=c^2,
$$

$$
2c^2=6,
$$

$$
c^2=3.
$$

因为 $c\in(1,3)$：

$$
\boxed{c=\sqrt3}.
$$

负根不在 interval 内，必须排除。

---

## 27. MVT Versus IVT / 中值定理与介值定理

[[Intermediate Value Theorem]] 与 [[Mean Value Theorem]] 都是 existence theorems，但保证的对象不同。

| Theorem | Hypotheses | Guarantees |
|---|---|---|
| IVT | continuous on $[a,b]$ | intermediate output value $f(c)$ exists |
| MVT | continuous on $[a,b]$, differentiable on $(a,b)$ | derivative value $f'(c)$ equals secant slope |

### IVT language

若 $L$ 位于 $f(a)$ 与 $f(b)$ 之间，则存在 $c\in[a,b]$ 使

$$
f(c)=L.
$$

### MVT language

存在 $c\in(a,b)$ 使

$$
f'(c)=\frac{f(b)-f(a)}{b-a}.
$$

~~~text
question asks for an attained function value?
-> think IVT

question asks for a derivative matching average change?
-> think MVT
~~~

---

## 28. Why Differentiability Matters / 为什么 MVT 必须可导

仅 continuous 不足以调用 MVT。

例如一个 V-shaped graph 可以在 $[a,b]$ continuous，endpoints 具有 horizontal secant slope，但 interior 唯一候选点是 corner，那里 derivative 不存在，也可能没有任何 tangent slope 等于 $0$。

因此：

$$
\text{continuous only}
\Longrightarrow
\text{IVT may apply},
$$

但不能推出

$$
\text{MVT applies}.
$$

看到 theorem 题，第一步永远是检查 hypotheses，而不是直接套结论。

---

## 29. Deep Phrases / 深句对应表

| English sentence | 中文记忆 |
|---|---|
| Related rates connects rates by first connecting the underlying quantities. | 相关变化率先连接原变量，再连接变化率。 |
| Differentiate first, then substitute the instant. | 先对时间求导，再代某一瞬间。 |
| An instantaneous value is not an always-true relationship. | 瞬时数值不能冒充永久关系。 |
| Linear approximation uses the tangent line as the best nearby first-order model. | 线性近似用切线作为附近最好的一阶模型。 |
| An approximation is not automatically a rigorous bound. | 近似值不能自动当成严格上下界。 |
| Indeterminate means insufficient information, not nonexistence. | 未定式表示信息不足，不等于极限不存在。 |
| L'Hopital compares numerator and denominator derivatives only after the form is eligible. | 洛必达只在形式符合条件后比较分子分母导数。 |
| MVT equates one instantaneous rate with the interval's average rate. | MVT 保证某一瞬时变化率等于区间平均变化率。 |
| A theorem's hypotheses are part of the theorem. | 定理前提就是定理本身的一部分。 |

---

## 30. Fidelity Notes and Corrections / 原稿校正

1. transcript 中 related rate 多次被识别成 release rate；统一为 Related Rates。
2. 第一个 cone relation 校正为

   $$
   V=\frac{\pi}{12}y^3,
   $$

   得到 $dy/dt=1/\pi$。
3. camera 题的固定水平距离按课堂图与后续 $3$-$4$-$5$ triangle 还原为 $200$ m，得到 $d\theta/dt=4/125$ rad/s。
4. ladder 中 $y=9$ 只是瞬时值；永久 relation 使用 $\sin\theta=x/15$。
5. linearization 第二例 transcript 一度说成 $y=2x+7$；由 slope $8$ 应为

   $$
   L(x)=8x+7.
   $$

6. $f'(x)\le3$ 推出 $f(2)\le1$ 的严格依据是 MVT，而不是把 linear approximation 当作 exact equality。
7. L’Hôpital 不是“所有极限的无条件终极方法”；必须先确认适用的 indeterminate form 和 theorem hypotheses。
8. growth hierarchy 限定为 $x\to+\infty$ 的正向增长；bounded $\sin x$ 不与 logarithm/power 作同类无限增长排序。

---

## 31. Video Companion / 搭配课堂录像

| Approx. time | Topic | What to watch for |
|---|---|---|
| 00:42-05:35 | Related Rates review | relation → $d/dt$ → substitute |
| 06:14-14:44 | Surface area | 读出 $dh/dt$ 的负号 |
| 14:44-33:40 | Cone models | similar triangles 消去 radius |
| 33:40-48:57 | Angle models | tangent / sine relations 与 radians |
| 48:57-52:40 | Multiple variables | Product Rule with multiple rates |
| 53:08-01:15:54 | Linear Approximation | tangent model 与 direct formula |
| 01:15:54-01:38:04 | L’Hôpital’s Rule | 先判形式、必要时反复使用 |
| 01:38:04-01:40:31 | Unit 4 wrap | five application branches |
| 01:40:31-01:52:33 | Mean Value Theorem | hypotheses、secant 与 tangent |
| 01:52:33-02:00:50 | MVT versus IVT | derivative existence versus output existence |

---

## 32. Decision Maps / 决策图

### Related rates

~~~text
translate words into quantities/rates
-> write an always-true relation
-> eliminate extra variables if needed
-> differentiate with respect to t
-> substitute the instant
-> solve with sign and units
~~~

### Linear approximation

~~~text
known f(a), f'(a)
-> L(x)=f(a)+f'(a)(x-a)
-> target x near a?
-> use L(x) as approximation
~~~

### L'Hopital

~~~text
substitute / inspect form
-> ordinary value? evaluate directly
-> 0/0 or infinity/infinity?
   yes -> differentiate top and bottom
-> inspect the new ratio again
~~~

### Theorem choice

~~~text
intermediate output value?
-> IVT: continuity

derivative equals average rate?
-> MVT: continuity on [a,b]
        differentiability on (a,b)
~~~

---

## 33. Knowledge Graph Connections / 知识图谱连接

### Formal course branch / 正课分支

- [[微积分BC第4次正课-反函数高阶导数与运动应用]] 建立 time rates、motion 和 related-rates preview。
- [[微积分BC第6次正课-导数符号极值与凹凸性]] 接着完成 EVT，并把一阶、二阶导数组织成 extrema 与 concavity 分析树。
- [[Related Rates]] 把 [[Implicit Differentiation]] 与 [[Chain Rule]] 用在 common time input 上。
- [[Linear Approximation]] 从 [[Tangent Line]] 和 [[Derivatives]] 建立 nearby first-order model。
- [[L'Hôpital's Rule]] 与 [[Indeterminate Form]] 把 derivative comparison 带回 [[Limits]]。
- [[Mean Value Theorem]] 连接 [[Average Rate of Change]]、[[Secant Line]] 与某个 interior tangent slope。
- [[Intermediate Value Theorem]] 只保证 intermediate output；MVT 额外要求 differentiability 并保证 derivative value。

### 3Blue1Brown bridge / 视觉直觉分支

- [[06 - Implicit Differentiation, What's Going On Here]]：common time driver 如何把多个 rates 连接起来。
- [[07 - Limits, L'Hopital's Rule, and Epsilon-Delta Definitions]]：未定式为何信息不足，以及 derivative ratio 的 local-linear 理由。
- [[12 - The Other Way to Visualize Derivatives]]：$f(a+h)-f(a)\approx f'(a)h$ 正是 linear approximation 的 tiny-nudge 语言。

这些连接来自现有笔记的 Wiki connection sections；本次未读取其完整正文。

---

## 34. Confusion / Questions

- [ ] 能否把 increasing/decreasing words 翻译成带符号的 rate？
- [ ] related rates 中能否区分永久 relation 与瞬时 value？
- [ ] cone problem 中能否先用 similar triangles 消去多余 radius？
- [ ] angle rate 是否写 radians per time？
- [ ] 能否不求 $b$，直接写 $L(x)=f(a)+f'(a)(x-a)$？
- [ ] 能否解释 linear approximation 为什么只在 nearby inputs 更可信？
- [ ] 能否区分 approximation 与 exact MVT bound？
- [ ] 使用 L’Hôpital 前是否总先检查 indeterminate form？
- [ ] 重复 L’Hôpital 后是否每次重新判断停止条件？
- [ ] 能否完整说出 MVT 的 closed-interval continuity 与 open-interval differentiability？
- [ ] 能否根据题目是在问 $f(c)$ 还是 $f'(c)$ 区分 IVT 与 MVT？

---

## 35. After-Class Compression / 看完压缩版

~~~text
related rates:
quantities relation
-> differentiate with respect to t
-> substitute instant
-> solve with sign and units

linear approximation:
L(x)=f(a)+f'(a)(x-a)
near a, f(x) approximately equals L(x)

L'Hopital:
first verify 0/0 or infinity/infinity
lim f/g = lim f'/g'
recheck after every application

growth as x->infinity:
exponential >> power >> logarithm

MVT:
continuous on [a,b]
differentiable on (a,b)
-> some c in (a,b) satisfies
f'(c)=[f(b)-f(a)]/(b-a)

IVT:
continuity guarantees intermediate outputs

MVT:
continuity + differentiability
guarantees an average-matching derivative
~~~

## 36. Links / 链接

- [[UBC Knowledge Graph]]
- [[AP Calculus BC]]
- [[微积分BC第4次正课-反函数高阶导数与运动应用]]
- [[微积分BC第6次正课-导数符号极值与凹凸性]]
- [[Related Rates]]
- [[Implicit Differentiation]]
- [[Chain Rule]]
- [[Linear Approximation]]
- [[Tangent Line]]
- [[Derivatives]]
- [[L'Hôpital's Rule]]
- [[Indeterminate Form]]
- [[Limits]]
- [[Mean Value Theorem]]
- [[Intermediate Value Theorem]]
- [[Average Rate of Change]]
- [[Secant Line]]
- [[06 - Implicit Differentiation, What's Going On Here]]
- [[07 - Limits, L'Hopital's Rule, and Epsilon-Delta Definitions]]
- [[12 - The Other Way to Visualize Derivatives]]
