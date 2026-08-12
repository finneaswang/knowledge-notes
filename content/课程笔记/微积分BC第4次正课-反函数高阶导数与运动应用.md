---
title: "微积分BC第4次正课 - 反函数、高阶导数与运动应用"
description: "A connected bilingual calculus note about 微积分BC第4次正课 - 反函数、高阶导数与运动应用."
publish: true
tags: [calculus, course-note]
---
# 微积分BC第4次正课 - 反函数、高阶导数与运动应用

## Reading Note / 阅读说明

本课承接 [[微积分BC第3次正课-可导性链式法则与隐函数求导]]，先完成 Unit 3 的最后两块，再进入 derivative applications：

~~~text
inverse-function derivative
-> inverse-trigonometric derivatives
-> higher-order derivatives
-> derivative meaning in context
-> tangent line
-> position / velocity / acceleration / speed
-> related rates preview
~~~

本笔记保留课堂的思考顺序和代表性例题，不记录考试频率、选项统计、作业安排与管理话术。原稿中的 ASR 错位和课堂口误均按方程重新验算。

## Reading Rule / 读法约定

- 英文术语和核心句保留，中文解释逻辑。
- 每个公式都连接到 point correspondence、units 或 graph meaning。
- 运动学先确认“现在拿到的是什么函数或图”，再判断正负与增减。
- 3Blue1Brown 只使用相关笔记的 Wiki connection sections，没有重读完整正文。

---

## 1. One-Sentence Mainline / 一句话主线

> **Derivative rules compute local change; derivative applications interpret that change as reciprocal slope, repeated change, tangent direction, motion, or linked time rates.**
>
> 求导规则负责算出局部变化；导数应用则把这个结果解释成反函数的倒数斜率、反复变化、切线方向、运动状态或相互关联的时间变化率。

## 2. Class Flow / 课堂脉络

1. 用坐标交换理解 inverse functions。
2. 推出 inverse derivative 的 reciprocal-slope formula。
3. 在 table、formula 和 graph data 中寻找对应点。
4. 整理 inverse trigonometric derivatives。
5. 认识二阶、三阶与第 $n$ 阶导数记号。
6. 对 ordinary 与 implicit functions 重复求导。
7. 解释 derivative 的 context meaning 与 units。
8. 由 derivative slope 写 [[Tangent Line]]，或由 slope 反求 point。
9. 建立 [[One-Dimensional Motion]] 中 position、velocity、acceleration、speed 的关系。
10. 用 graph 和 sign 判断 direction、velocity change 与 speed change。
11. 用 common time variable 开始 [[Related Rates]]。

---

# Part A - Finish Unit 3 / 完成求导体系

## 3. Inverse Functions Exchange Coordinates / 反函数交换坐标

若

$$
g=f^{-1},
$$

则

$$
f(a)=b
\quad\Longleftrightarrow\quad
g(b)=a.
$$

因此原函数上的点 $(a,b)$ 会变成反函数上的点 $(b,a)$。

~~~text
on f:       input a -> output b
on f^(-1): input b -> output a
~~~

注意：

$$
f^{-1}(x)
$$

表示 inverse function，不表示 $1/f(x)$。

---

## 4. Inverse-Function Derivative / 反函数求导

由恒等关系

$$
f(g(x))=x
$$

对 $x$ 求导：

$$
f'(g(x))g'(x)=1.
$$

所以

$$
\boxed{g'(x)=\frac{1}{f'(g(x))}}.
$$

若 $f(a)=b$，则

$$
\boxed{(f^{-1})'(b)=\frac{1}{f'(a)}}.
$$

### Core meaning / 核心意义

反函数把 input 与 output 交换，所以局部倍率也取 reciprocal：

$$
\frac{dy}{dx}
\quad\longleftrightarrow\quad
\frac{dx}{dy}.
$$

> **Find the matching input on the original function first; only then take the reciprocal of its derivative.**
>
> 先在原函数上找到对应输入，再对那个位置的导数取倒数。

### Two-step routine / 两步法

1. 用 $f(a)=b$ 找到 inverse input $b$ 对应的 original input $a$。
2. 计算 $1/f'(a)$，不是 $1/f'(b)$。

---

## 5. Inverse-Derivative Examples / 反函数导数例题

### Table Example / 表格题

设 $g=f^{-1}$，要求 $g'(4)$。表格给出

$$
f(-2)=4,\qquad f'(-2)=4.
$$

因为 inverse 上的 $(4,-2)$ 对应 original 上的 $(-2,4)$：

$$
g'(4)=\frac1{f'(-2)}=\frac14.
$$

### Formula Example / 公式题

设 $g=f^{-1}$，且

$$
g(3)=1,\qquad f'(1)=6.
$$

则

$$
g'(3)=\frac1{f'(1)}=\frac16.
$$

### Graph-point Example / 图像点题

若 graph of $f$ 经过 $(0,1)$，则 graph of $f^{-1}$ 经过 $(1,0)$。若 $f'(0)=3$：

$$
(f^{-1})'(1)=\frac1{f'(0)}=\frac13.
$$

### Watch Out / 易错点

- $f^{-1}$ 不是 reciprocal function。
- reciprocal 的对象是 derivative value，不是 function value。
- inverse input 与 original input 通常不是同一个数字。
- 若 $f'(a)=0$，倒数公式在 ordinary finite-slope 意义下失效。

---

## 6. Inverse Trigonometric Derivatives / 反三角函数导数

需要识别的四个公式：

$$
\frac{d}{dx}\arcsin x
=\frac1{\sqrt{1-x^2}},
\qquad |x|<1,
$$

$$
\frac{d}{dx}\arccos x
=-\frac1{\sqrt{1-x^2}},
\qquad |x|<1,
$$

$$
\frac{d}{dx}\arctan x
=\frac1{1+x^2},
$$

$$
\frac{d}{dx}\operatorname{arccot}x
=-\frac1{1+x^2}
$$

（最后一个符号依课程采用的 arccot convention）。

### Notation warning / 记号提醒

$$
\tan^{-1}x=\arctan x,
$$

这里的 $-1$ 表示 inverse function，不表示

$$
\frac1{\tan x}.
$$

### Direct-use Example / 直接使用

若

$$
y=\arctan x+2\sqrt{x},
$$

则

$$
y'
=\frac1{1+x^2}
+2\left(\frac12x^{-1/2}\right)
=\frac1{1+x^2}+\frac1{\sqrt{x}}.
$$

---

## 7. Higher-Order Derivatives / 高阶导数

[[Higher-Order Derivatives]] 是对前一阶 derivative 再求导：

$$
f\to f'\to f''\to f'''\to\cdots.
$$

常见记号：

$$
y'',\qquad f''(x),\qquad \frac{d^2y}{dx^2},
$$

$$
y''',\qquad f'''(x),\qquad \frac{d^3y}{dx^3},
$$

$$
y^{(n)},\qquad f^{(n)}(x),\qquad \frac{d^ny}{dx^n}.
$$

> **A higher-order derivative is not a new operation; it repeats the derivative question on the previous result.**
>
> 高阶导数不是新运算，而是继续追问“上一阶结果怎样变化”。

注意 $f^{(4)}$ 表示 fourth derivative，不是 $[f(x)]^4$。

---

## 8. Repeated Chain Rule Example / 重复使用链式法则

设

$$
y=\sin(2x).
$$

则

$$
y'=2\cos(2x),
$$

$$
y''=-4\sin(2x),
$$

$$
y'''=-8\cos(2x).
$$

每次重新求导时，inner derivative $2$ 都会再次出现。

~~~text
sin(2x)
-> 2 cos(2x)
-> -4 sin(2x)
-> -8 cos(2x)
~~~

---

## 9. Third-Derivative Example / 三阶导数例题

设

$$
y=\cos x-\ln(2x).
$$

在 $x>0$：

$$
y'=-\sin x-\frac1x,
$$

$$
y''=-\cos x+\frac1{x^2},
$$

$$
y'''=\sin x-\frac2{x^3}.
$$

处理 reciprocal powers 时先改写：

$$
\frac1x=x^{-1},
\qquad
\frac1{x^2}=x^{-2}.
$$

这样每一阶都能直接使用 [[Power Rule]]。

---

## 10. Second Derivative of an Implicit Function / 隐函数二阶导

设

$$
y^3-xy=2.
$$

第一次求导：

$$
3y^2y'-(xy'+y)=0.
$$

$$
y'(3y^2-x)=y.
$$

$$
y'=\frac{y}{3y^2-x}.
$$

对这个 quotient 再求导：

$$
y''
=
\frac{
y'(3y^2-x)
-y(6yy'-1)
}{
(3y^2-x)^2
}.
$$

在 $(-1,1)$：

$$
y'=\frac{1}{3(1)^2-(-1)}=\frac14.
$$

所以

$$
y''
=\frac{
\frac14(4)
-1\left(6\cdot1\cdot\frac14-1\right)
}{4^2}
=\frac{1-\frac12}{16}
=\boxed{\frac1{32}}.
$$

### Missing-value principle / 缺什么补什么

代入 $x,y$ 后，二阶导表达式通常仍含 $y'$。要先用一阶导公式求出该点的 $y'$，再代入二阶导。

---

## 11. Higher Derivative of an Abstract Function / 抽象函数高阶导

若

$$
f'(x)=[f(x)]^3+3,
\qquad f(1)=2,
$$

则

$$
f''(x)=3[f(x)]^2f'(x).
$$

先求

$$
f'(1)=2^3+3=11.
$$

再代入：

$$
f''(1)=3(2^2)(11)=\boxed{132}.
$$

这里 $f(x)$ 是 inner function，因此对 $[f(x)]^3$ 求导必须乘 $f'(x)$。

---

# Part B - Begin Unit 4 / 导数的情境应用

## 12. What a Derivative Means in Context / 导数的文字意义

若 $F(t)$ 表示某个 quantity，那么

$$
F'(t)
$$

表示这个 quantity 对时间的 instantaneous rate of change。

最稳的解释方法：

~~~text
identify exactly what F means
-> keep that meaning unchanged
-> add "rate of change"
-> state the input time
-> state the value and derivative units
~~~

> **The derivative keeps the original quantity and adds how fast it is changing with respect to the input.**
>
> 导数不替换原变量的意义，而是在原意义上增加“它相对于输入变化得多快”。

### Example: Height / 高度

若 $H(t)$ 是 ride 开始后 $t$ minutes 时乘客离地高度，则

$$
H'(7.5)=15.708
$$

表示：在 $t=7.5$ minutes 时，乘客高度正以每分钟 $15.708$ 个高度单位的 instantaneous rate 增加。

$7.5$ 是时间，不是高度。

### A rate can itself change / 变化率也能再变化

若 $R(t)$ 本身表示 water leaving a tank 的 rate，则 $R'(3)$ 是：

> the rate of change of the rate at which water leaves the tank at $t=3$.

“rate of a rate” 并不重复，它对应 [[Higher-Order Derivatives]] 的现实含义。

---

## 13. Units of a Derivative / 导数单位

若

$$
F(t)\text{ has units }U,
\qquad
t\text{ has units }T,
$$

则

$$
F'(t)\text{ has units }\frac{U}{T}.
$$

如果 $F(t)$ 本身已经是 cubic feet per minute，而 $t$ 是 minutes，则

$$
F'(t)
\text{ has units }
\frac{\text{cubic feet}}{\text{minute}^2}.
$$

### Numerical approximation from a table / 表格近似

若 $t=3$ 位于 $1$ 和 $5$ 之间，可用 centered secant approximation：

$$
F'(3)\approx\frac{F(5)-F(1)}{5-1}.
$$

课堂数据得到约

$$
F'(3)\approx1.35.
$$

解释必须同时包含：

1. 原 quantity 是什么；
2. $t=3$ 的时刻；
3. increasing 或 decreasing；
4. 数值；
5. derivative units。

---

## 14. Tangent-Line Equation / 切线方程

[[Tangent Line]] 的 point-slope form：

$$
y-f(a)=f'(a)(x-a).
$$

需要两个信息：

~~~text
slope: f'(a)
point: (a,f(a))
~~~

### Example

$$
f(x)=x^2+2x
$$

在 $x=1$：

$$
f'(x)=2x+2,
\qquad f'(1)=4.
$$

切点：

$$
(1,f(1))=(1,3).
$$

所以

$$
y-3=4(x-1)
$$

或

$$
\boxed{y=4x-1}.
$$

point-slope form 通常比先写 $y=kx+b$ 更直接。

---

## 15. Parallel Tangent / 平行切线

平行线具有相同 slope。

设

$$
g(x)=x^2+bx,
$$

并要求 $x=-1$ 处的 tangent line 平行于经过 $(0,-2)$ 与 $(3,4)$ 的直线。

参考直线 slope：

$$
m=\frac{4-(-2)}{3-0}=2.
$$

而

$$
g'(x)=2x+b,
$$

所以

$$
g'(-1)=-2+b=2.
$$

因此

$$
\boxed{b=4}.
$$

这类题的桥梁是：

$$
\text{parallel}
\Longrightarrow
\text{equal slopes}
\Longrightarrow
\text{derivative value}.
$$

---

## 16. Find a Point From a Given Tangent Slope / 由斜率反求点

考虑 implicit curve

$$
2x-2y=3+\cos y,
\qquad -\frac\pi2<y<\frac\pi2.
$$

寻找 tangent slope 为 $1$ 的点。

求导：

$$
2-2y'=-\sin y\,y'.
$$

$$
2=(2-\sin y)y'.
$$

$$
y'=\frac2{2-\sin y}.
$$

令 $y'=1$：

$$
\frac2{2-\sin y}=1
\Longrightarrow
\sin y=0.
$$

由给定 domain：

$$
y=0.
$$

代回原式：

$$
2x=3+\cos0=4,
$$

所以

$$
\boxed{(x,y)=(2,0)}.
$$

这里是“已知 point 求 slope”的逆过程：

~~~text
differentiate relation
-> set derivative equal to given slope
-> solve y
-> return to original relation
-> solve x
~~~

---

# Part C - One-Dimensional Motion / 一维运动

## 17. Four Motion Quantities / 四个运动量

[[One-Dimensional Motion]] 的基本链：

$$
\text{position }x(t)
\xrightarrow{d/dt}
\text{velocity }v(t)
\xrightarrow{d/dt}
\text{acceleration }a(t).
$$

即

$$
v(t)=x'(t),
$$

$$
a(t)=v'(t)=x''(t).
$$

speed 是 velocity 的 magnitude：

$$
\text{speed}=|v(t)|.
$$

### Meaning table / 含义表

| Quantity | Meaning | Can be negative? |
|---|---|---|
| position $x(t)$ | 相对原点的位置 | yes |
| velocity $v(t)$ | position 的变化率，带方向 | yes |
| acceleration $a(t)$ | velocity 的变化率 | yes |
| speed $|v(t)|$ | 运动快慢，不带方向 | no |

> **Velocity tells direction and rate; speed keeps only the magnitude.**
>
> velocity 同时告诉方向和变化快慢；speed 只保留大小。

---

## 18. Position to Acceleration Example / 从位置到加速度

设

$$
x(t)=\sin t-\cos t.
$$

则

$$
v(t)=\cos t+\sin t.
$$

第一次满足 $v(t)=0$ 的非负时间：

$$
\cos t+\sin t=0
\Longrightarrow
t=\frac{3\pi}{4}.
$$

加速度：

$$
a(t)=-\sin t+\cos t.
$$

所以

$$
a\left(\frac{3\pi}{4}\right)
=-\frac{\sqrt2}{2}-\frac{\sqrt2}{2}
=\boxed{-\sqrt2}.
$$

重要：$v=0$ 不推出 $a=0$。物体可以瞬间静止，但此刻仍有非零 acceleration。

---

## 19. Direction of Motion / 运动方向

### From a position graph / 从位置图判断

看 position graph 的 slope：

$$
x'(t)=v(t).
$$

- position increasing $\Rightarrow v>0$，向右。
- position decreasing $\Rightarrow v<0$，向左。

### From a velocity graph / 从速度图判断

直接看 velocity value 的 sign：

- $v(t)>0$：moving right。
- $v(t)<0$：moving left。
- $v(t)=0$：instantaneously at rest。

不要把 velocity graph 的“上升”误当成 moving right。上升描述的是 acceleration sign；图像在横轴上方才表示 $v>0$。

---

## 20. Velocity Increasing or Decreasing / 速度增减

因为

$$
a(t)=v'(t),
$$

所以：

$$
a(t)>0
\Longrightarrow
v(t)\text{ increasing},
$$

$$
a(t)<0
\Longrightarrow
v(t)\text{ decreasing}.
$$

在 velocity graph 上：

- graph slope positive $\Rightarrow a>0$；
- graph slope negative $\Rightarrow a<0$。

注意 velocity decreasing 不一定代表 speed decreasing。例如负 velocity 变得更负时，velocity 数值下降，但物体实际上更快。

---

## 21. Moving Left Example / 向左运动区间

若

$$
v(t)=\cos\left(\frac{\pi t}{6}\right),
$$

则 moving left 要求

$$
v(t)<0.
$$

在一轮相关区间中：

$$
\frac\pi2
<
\frac{\pi t}{6}
<
\frac{3\pi}{2}.
$$

所以

$$
\boxed{3<t<9}.
$$

触发词 moving left 只转换成 $v<0$，不是 $a<0$。

---

## 22. Speed Increasing or Decreasing / 速率增减

由于

$$
\text{speed}=|v|,
$$

speed 的判断不能只看 $a$ 的正负。

在 $v\neq0$、$a\neq0$ 的普通点：

$$
\boxed{v(t)a(t)>0
\Longrightarrow
\text{speed increasing}},
$$

$$
\boxed{v(t)a(t)<0
\Longrightarrow
\text{speed decreasing}}.
$$

直觉：

- velocity 与 acceleration 同方向，运动越来越快。
- velocity 与 acceleration 反方向，运动越来越慢。

~~~text
v > 0, a > 0 -> right and speeding up
v > 0, a < 0 -> right and slowing down
v < 0, a < 0 -> left and speeding up
v < 0, a > 0 -> left and slowing down
~~~

在 $v=0$ 的转折瞬间，需要看邻域行为，不能机械套“同号/异号”。

---

## 23. Speed From a Velocity Graph / 由速度图得到速率图

从 $v(t)$ 图得到 $|v(t)|$：

~~~text
portion above the axis: unchanged
portion below the axis: reflect upward
~~~

课堂的记忆法是“下翻上”。

画出 speed graph 后：

- 图像上升处 speed increasing；
- 图像下降处 speed decreasing。

必须先取 absolute value 再看增减，不能直接把 velocity graph 的上升下降当成 speed。

---

## 24. Algebraic Speed Example / 代数判断速率

设

$$
v(t)=\cos\left(\frac{\pi t}{6}\right).
$$

则

$$
a(t)
=-\frac\pi6
\sin\left(\frac{\pi t}{6}\right).
$$

在 $t=4$：

$$
v(4)=\cos\frac{2\pi}{3}<0,
$$

$$
a(4)
=-\frac\pi6\sin\frac{2\pi}{3}<0.
$$

$v(4)$ 与 $a(4)$ 同号，所以

$$
\boxed{\text{speed is increasing at }t=4}.
$$

只需判断 sign，不必把三角值全部化成 decimal。

---

# Part D - Related Rates Preview / 相关变化率开头

## 25. What Related Rates Connect / 相关变化率连接什么

[[Related Rates]] 研究多个 quantities 都随同一个 time variable 改变时，它们的 rates 如何被一个 constraint 连接。

若

$$
x=x(t),\qquad y=y(t),
$$

则

$$
\frac{dx}{dt},\qquad \frac{dy}{dt}
$$

分别是它们的 time rates。

> **Related rates is implicit differentiation with time as the common input.**
>
> related rates 可以看成以时间为共同输入的隐函数求导。

---

## 26. Three-Step Related-Rates Routine / 三步流程

### Step 1: Find a relationship / 找变量关系

从 geometry、volume、distance 或题干条件建立一个始终成立的 equation：

$$
y=3x^2+4x-2.
$$

### Step 2: Differentiate with respect to time / 对时间求导

因为 $x$ 和 $y$ 都依赖 $t$：

$$
\frac{dy}{dt}
=6x\frac{dx}{dt}
+4\frac{dx}{dt}.
$$

### Step 3: Substitute instant-specific values / 最后代值

若

$$
x=2,\qquad \frac{dx}{dt}=1,
$$

则

$$
\frac{dy}{dt}
=(6\cdot2+4)(1)
=\boxed{16}.
$$

### Why the rates appear / 为什么会多出变化率

$$
\frac{d}{dt}(x^2)
=2x\frac{dx}{dt}
$$

就是 [[Chain Rule]]。$x$ 不再是 independent variable，而是 $x(t)$。

---

## 27. Related-Rates Watch Outs / 相关变化率易错点

- 先写 quantity relation，不要先拼 rate equation。
- relation 必须在整个变化过程中成立。
- 对 $t$ 求导时，每个 changing quantity 都带出自己的 rate。
- 先求导，后代入某一瞬间的数值。
- increasing rate 为正，decreasing rate 为负。
- 最终答案要带 units，并说明它是谁的 rate。

本课只建立方法论；完整几何建模与实际题型将在下一课继续。

---

## 28. Deep Phrases / 深句对应表

| English sentence | 中文记忆 |
|---|---|
| Inverse functions exchange inputs and outputs, so their local slopes are reciprocals at corresponding points. | 反函数交换输入输出，因此对应点的局部斜率互为倒数。 |
| Find the original input before evaluating the reciprocal derivative. | 先找原函数输入，再取导数倒数。 |
| A higher-order derivative measures how the previous derivative changes. | 高阶导数衡量上一阶导数怎样变化。 |
| The derivative keeps the quantity and adds its rate of change. | 导数保留原量的含义，再增加其变化率。 |
| A tangent line needs a point and the derivative slope. | 切线需要切点与导数给出的斜率。 |
| Velocity is the derivative of position; acceleration is the derivative of velocity. | 速度是位置的导数，加速度是速度的导数。 |
| Speed is the magnitude of velocity. | 速率是速度的绝对值。 |
| Same signs of velocity and acceleration mean speeding up. | 速度与加速度同号表示速率增加。 |
| Related rates uses a constraint to connect time derivatives. | 相关变化率用约束关系连接多个时间导数。 |

---

## 29. Fidelity Notes and Corrections / 原稿校正

1. 原稿多处把 composite function 识别成“符合函数”，把 implicit function 识别成“引函数”；本笔记统一为复合函数与隐函数。
2. 反函数公式必须在 corresponding points 使用：

   $$
   (f^{-1})'(b)=\frac1{f'(a)}
   \quad\text{where }f(a)=b.
   $$

3. 原稿第三个 inverse example 一度说成 $1/f'(1)$，但由点 $(0,1)$ 应为 $1/f'(0)=1/3$。
4. $y=\sin(2x)$ 的前三阶导数校正为 $2\cos(2x)$、$-4\sin(2x)$、$-8\cos(2x)$。
5. $y=\cos x-\ln(2x)$ 的三阶导数校正为

   $$
   y'''=\sin x-\frac2{x^3}.
   $$

6. 隐式曲线按课堂后续推导和最终点还原为

   $$
   2x-2y=3+\cos y,
   $$

   并得到 slope-$1$ point $(2,0)$。
7. speed increasing 的精确代数判断是 $va>0$；在 $v=0$ 时需检查邻域，不能机械套符号口诀。

---

## 30. Video Companion / 搭配课堂录像

| Approx. time | Topic | What to watch for |
|---|---|---|
| 01:11-17:39 | Inverse derivatives | 坐标交换与对应输入 |
| 17:39-22:13 | Inverse trig derivatives | 公式与 inverse notation |
| 23:07-33:00 | Higher-order derivatives | repeated differentiation |
| 33:00-43:45 | Implicit second derivatives | $y'$ 作为中间缺失值 |
| 43:45-46:15 | Unit transition | 求导规则进入 applications |
| 46:15-01:01:00 | Tangent applications | point + derivative slope |
| 01:01:00-01:12:51 | Context interpretation | quantity、time、units |
| 01:12:51-01:38:25 | Motion foundations | position、velocity、acceleration、direction |
| 01:38:25-01:51:08 | Speed changes | graph reflection 与 $va$ signs |
| 01:51:08-02:00:43 | Related Rates preview | relation → differentiate → substitute |

---

## 31. Decision Maps / 决策图

### Inverse derivative

~~~text
want (f^(-1))'(b)
-> find a such that f(a)=b
-> evaluate f'(a)
-> take reciprocal
~~~

### Motion question

~~~text
what is given?
position -> slope gives velocity
velocity -> value sign gives direction
velocity -> slope gives acceleration
speed -> absolute value of velocity

speed increasing?
compare signs of v and a
~~~

### Related rates

~~~text
define changing quantities
-> write always-true relation
-> differentiate with respect to time
-> substitute the instant
-> solve with sign and units
~~~

---

## 32. Knowledge Graph Connections / 知识图谱连接

### Formal course branch / 正课分支

- [[微积分BC第3次正课-可导性链式法则与隐函数求导]] 提供 [[Chain Rule]]、[[Implicit Differentiation]] 与复合结构。
- [[微积分BC第5次正课-相关变化率线性近似与中值定理]] 接着完成 related rates、linear approximation 与 L'Hôpital，并进入 Mean Value Theorem。
- [[Inverse Function Derivatives]] 汇总对应点交换和 reciprocal slope。
- [[Higher-Order Derivatives]] 把求导运算反复应用；[[Acceleration]] 是 position 的 second derivative。
- [[Derivatives]] 与 [[Instantaneous Rate of Change]] 连接 context interpretation 和 units。
- [[Tangent Line]] 把 derivative value 变成 local line。
- [[One-Dimensional Motion]] 整理 position、velocity、acceleration 与 speed。
- [[Related Rates]] 把 implicit differentiation 改写成多个 time-dependent quantities 的 rate relation。

### 3Blue1Brown bridge / 视觉直觉分支

- [[06 - Implicit Differentiation, What's Going On Here]]：constraint 如何连接多个 variables 的 tiny changes，并过渡到 related rates。
- [[10 - Higher Order Derivatives]]：每一阶导数继续追踪上一阶的 local change，连接 acceleration。
- [[12 - The Other Way to Visualize Derivatives]]：derivative 同时是 tangent slope 与 local input-output scale factor。

这些连接来自现有笔记的 Wiki connection sections；本次未读取其完整正文。

---

## 33. Confusion / Questions

- [ ] 能否区分 $f^{-1}(x)$ 与 $1/f(x)$？
- [ ] 求 inverse derivative 时，能否先找到 original input？
- [ ] 能否区分 $f^{(4)}$ 与 $[f(x)]^4$？
- [ ] 隐函数二阶导代点前，能否补出 $y'$？
- [ ] 解释 $F'(a)$ 时，能否写全 quantity、input、value 和 units？
- [ ] 能否用 point-slope form 直接写 tangent line？
- [ ] 能否区分 velocity 的 sign、velocity graph 的 slope 和 speed？
- [ ] 能否解释为什么 $v=0$ 不推出 $a=0$？
- [ ] 能否仅用 $v$ 与 $a$ 的 signs 判断 speed increasing/decreasing？
- [ ] related rates 是否始终先建立 quantities 的 relation？

---

## 34. After-Class Compression / 看完压缩版

~~~text
inverse functions:
f(a)=b <-> f^(-1)(b)=a
(f^(-1))'(b)=1/f'(a)

inverse trig:
(arcsin x)' = 1/sqrt(1-x^2)
(arccos x)' = -1/sqrt(1-x^2)
(arctan x)' = 1/(1+x^2)

higher derivatives:
f -> f' -> f'' -> f''' -> f^(n)

context:
F'(a) = rate of change of the original F quantity
units = output units / input units

tangent:
y-f(a)=f'(a)(x-a)

motion:
v=x'
a=v'=x''
speed=|v|
v>0 right, v<0 left
a>0 velocity increasing
va>0 speed increasing
va<0 speed decreasing

related rates:
relation -> d/dt -> substitute -> solve with units
~~~

## 35. Links / 链接

- [[AP Calculus BC]]
- [[微积分BC第3次正课-可导性链式法则与隐函数求导]]
- [[微积分BC第5次正课-相关变化率线性近似与中值定理]]
- [[Inverse Function Derivatives]]
- [[Derivatives]]
- [[Instantaneous Rate of Change]]
- [[Chain Rule]]
- [[Implicit Differentiation]]
- [[Power Rule]]
- [[Higher-Order Derivatives]]
- [[Second Derivative]]
- [[Acceleration]]
- [[Tangent Line]]
- [[One-Dimensional Motion]]
- [[Related Rates]]
- [[06 - Implicit Differentiation, What's Going On Here]]
- [[10 - Higher Order Derivatives]]
- [[12 - The Other Way to Visualize Derivatives]]
