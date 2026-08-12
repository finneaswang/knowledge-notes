---
title: "3Blue1Brown - The Essence of Calculus 10 - Higher Order Derivatives"
description: "A connected bilingual learning note about 3Blue1Brown - The Essence of Calculus 10 - Higher Order Derivatives."
publish: true
tags: [open-notes, visual-calculus]
---
# 3Blue1Brown - The Essence of Calculus 10 - Higher Order Derivatives

## Reading Guide / 阅读说明

这是一份伴读型笔记。单独阅读时，它要重建视频如何从 changing slope 引出 second derivative，再用 graph curvature、notation 和 motion 串起完整直觉；配合视频时，每个 Knowledge Point 都有时间定位。英文保留可用于解释和考试的核心句，中文负责把“变化的变化”讲清楚。

Connected from:

- [[09 - What Does Area Have to Do With Slope]]
- [[Derivatives]]
- [[Taylor Series]]
- [[UBC Knowledge Graph]]

## 1. What This Episode Is About / 这一集在讲什么

一阶导数回答：function 的 output 对 input 的 local change 有多敏感。

$$
f'(x)=\frac{df}{dx}
$$

二阶导数则对 derivative 再求一次导数：

$$
\boxed{f''(x)=\frac{d}{dx}f'(x)=\frac{d^2f}{dx^2}}
$$

它回答的不是“原函数正在怎样变化”，而是：

> The second derivative tells you how the slope itself is changing.

中文：二阶导数描述斜率本身如何变化。

这句话在两种场景中有不同外观：

```text
graph language:   changing slope -> concavity
motion language:  changing velocity -> acceleration
```

三阶及更高阶导数继续重复同一个动作：研究前一阶导数如何变化。它们会成为下一章 [[Taylor Series]] 用局部信息逼近函数的材料。

## 2. Link to Previous Episode / 和上一集的连接

Chapter 9 把 $f(x)$ 的 height 看成 antiderivative $F(x)$ 的 tangent slope，并说明 local slopes 的 average 等于 overall secant slope。

本章把视线再向前推进一层：

```text
f(x)       -> function height
f'(x)      -> slope of f
f''(x)     -> change in the slope of f
f'''(x)    -> change in the second derivative
```

也就是说，Chapter 9 关注“斜率如何累积成整体变化”，Chapter 10 关注“斜率本身怎样继续变化”。

## 3. Class Flow / 视频脉络

1. 说明本集是进入 Taylor series 前的短补充。
2. 回顾 derivative 是 graph 的 tangent slope。
3. 定义 second derivative 为 derivative of the derivative。
4. 用 upward/downward curvature 判断二阶导数正负。
5. 比较“斜率快速增加”和“斜率缓慢增加”，理解二阶导数大小。
6. 解释 $d^2f/dx^2$ 的 notation，不把它误读成普通平方。
7. 用相邻两个 $dx$ steps 的 output changes 解释 change in the change。
8. 把 position、velocity、acceleration 放进同一条 derivative chain。
9. 引出 third derivative：jerk。
10. 连接下一章：higher-order derivatives 用于 function approximation。

## 4. Core Ideas / 核心知识块

### Knowledge Point 1: Higher-Order Derivatives Repeat the Same Question

**Video:** 00:00:04-00:00:38

如果已经理解 second derivative、third derivative，可以直接进入下一章 Taylor series。本集的任务是补齐这个系列此前尚未明确讲过的概念。

一阶导数研究 $f$ 的变化；二阶导数研究 $f'$ 的变化；三阶导数研究 $f''$ 的变化：

$$
f\longrightarrow f'\longrightarrow f''\longrightarrow f'''\longrightarrow\cdots
$$

统一写法：

$$
f^{(n)}(x)=\frac{d^nf}{dx^n}
$$

这里的核心不是不断出现新定义，而是同一个 derivative operation 被反复应用。

### Knowledge Point 2: The Second Derivative Measures Changing Slope

**Video:** 00:00:40-00:01:02

对 graph $y=f(x)$：

- steep upward tangent -> $f'(x)$ is large and positive
- downward tangent -> $f'(x)<0$
- horizontal tangent -> $f'(x)=0$

现在把 $f'(x)$ 本身当作一个 function 再求导：

$$
f''(x)=(f'(x))'
$$

因此：

- $f''(x)>0$：slope 随 $x$ 增加而 increasing
- $f''(x)<0$：slope 随 $x$ 增加而 decreasing
- $f''(x)=0$：当下 slope 的一阶变化为 0

**Deep distinction：** $f''$ 不告诉你 slope 是正还是负；它告诉你 slope 正在向哪个方向变化。

### Knowledge Point 3: Concavity Makes the Sign Visible

**Video:** 00:01:03-00:01:23

判断 [[Concavity]] 时，不要只看 graph 是上升还是下降，而要观察 tangent slopes 从左到右怎样变化。

#### Concave up

graph 向上弯，slopes increasing：

$$
\boxed{f''(x)>0}
$$

即使原函数正在下降，也可能 concave up。例如 slopes 从 $-5$、$-3$、$-1$ 变化，它们仍然在 increasing。

#### Concave down

graph 向下弯，slopes decreasing：

$$
\boxed{f''(x)<0}
$$

即使原函数正在上升，也可能 concave down。例如 slopes 从 $5$、$3$、$1$ 变化，它们仍然在 decreasing。

所以 increasing/decreasing 看 $f'$；concave up/down 看 $f''$。这是两套不同的问题。

### Knowledge Point 4: Magnitude Describes How Rapidly the Slope Changes

**Video:** 00:01:26-00:01:50

两个 graph 在同一点都可能有 positive second derivative，但数值大小不同：

- very positive $f''$：slope rapidly increasing，graph 弯得更强
- small positive $f''$：slope slowly increasing，graph 弯得较缓
- $f''=0$：slope 在该点没有 first-order change

因此 sign 给出 slope-change direction，magnitude 给出 slope-change strength。

**Important caution：** $f''(c)=0$ 本身不能保证 $c$ 是 inflection point。还需要检查 concavity 是否在 $c$ 两侧改变。例如 $f(x)=x^4$ 在 0 处 $f''(0)=0$，但两侧都 concave up。

### Knowledge Point 5: Reading the Notation $d^2f/dx^2$

**Video:** 00:01:53-00:02:32

先把 derivative 再对 $x$ 求导：

$$
\frac{d}{dx}\left(\frac{df}{dx}\right)
$$

标准简写为：

$$
\boxed{\frac{d^2f}{dx^2}}
$$

也常写作：

$$
f''(x),\qquad y'',\qquad D^2f
$$

$d^2f$ 与 $dx^2$ 是 repeated-differentiation notation，不应机械理解为“$df$ 和 $dx$ 各自做普通代数平方”。但这种写法会在 tiny-step interpretation 中留下有意义的痕迹。

### Knowledge Point 6: Two Tiny Steps Reveal a Change in the Change

**Video:** 00:02:33-00:03:41

从 input $x$ 开始，连续向右走两个相同小步 $dx$：

$$
x\to x+dx\to x+2dx
$$

第一步让 function 改变 $df_1$，第二步改变 $df_2$。若 graph 完全 linear，两次 output change 相同；若 slope 正在变化，它们会略有不同。

change in the change：

$$
ddf=df_2-df_1
$$

对 smooth function，$ddf$ 通常与 $(dx)^2$ 同阶，因此：

$$
f''(x)\approx\frac{ddf}{(dx)^2}
$$

更准确地说：

$$
\boxed{
f''(x)=\lim_{h\to0}
\frac{f(x+2h)-2f(x+h)+f(x)}{h^2}
}
$$

numerator 是 adjacent first changes 的差；denominator $h^2$ 把这个 second-order tiny effect 标准化。

若 $h=0.01$，则 $h^2=0.0001$。这解释了为什么 change in the change 比 ordinary first change 小一个量级。

### Knowledge Point 7: Position, Velocity, and Acceleration Form a Derivative Chain

**Video:** 00:03:57-00:04:38

设 object 沿直线运动，position 为 $s(t)$：

$$
\text{position}=s(t)
$$

一阶导数是 velocity：

$$
v(t)=s'(t)=\frac{ds}{dt}
$$

二阶导数是 [[Acceleration]]：

$$
\boxed{
a(t)=v'(t)=s''(t)=\frac{d^2s}{dt^2}
}
$$

这就是二阶导数最有身体感的解释：position change 是 velocity，velocity change 是 acceleration。

单位也逐层变化：

$$
[s]=\mathrm m,\qquad [v]=\mathrm{m/s},\qquad [a]=\mathrm{m/s^2}
$$

### Knowledge Point 8: Acceleration Sign Must Be Compared With Velocity

**Video:** 00:04:27-00:04:52

视频中的 object 始终向 positive direction 运动，所以：

- $a>0$：positive velocity increases -> speeding up
- $a<0$：positive velocity decreases -> slowing down

但完整规则必须比较 velocity 和 acceleration 的 signs：

| Velocity | Acceleration | Speed |
|---|---|---|
| $v>0$ | $a>0$ | increasing |
| $v>0$ | $a<0$ | decreasing |
| $v<0$ | $a<0$ | increasing |
| $v<0$ | $a>0$ | decreasing |

因此不能普遍地说“negative acceleration 就是 slowing down”。negative acceleration 只表示 velocity 正朝 negative direction 改变；若 object 本来向负方向运动，它反而可能 speeding up。

### Knowledge Point 9: The Third Derivative Is Jerk

**Video:** 00:04:54-00:05:04

对 position function：

$$
s'''(t)=a'(t)
$$

三阶导数称为 **jerk**：

> Jerk measures how acceleration itself changes over time.

中文不是字幕误译的“混蛋”，在物理语境中通常译为“加加速度”或“跃度”。若 jerk 不为 0，说明 acceleration 的强度正在改变。

```text
position -> velocity -> acceleration -> jerk
   s          s'           s''          s'''
```

### Knowledge Point 10: Higher Derivatives Store Local Shape Information

**Video:** 00:05:06-00:05:16

本集最后指出 higher-order derivatives 的重要用途：approximate functions。

在一个 center 附近：

- $f(c)$ 固定 height
- $f'(c)$ 固定 local slope
- $f''(c)$ 固定 slope 的 local change / curvature behavior
- $f'''(c)$ 继续修正这种变化

下一章 [[Taylor Series]] 会把这些 derivative data 依次编码进 polynomial coefficients：

$$
f(x)\approx f(c)+f'(c)(x-c)+\frac{f''(c)}{2!}(x-c)^2+\cdots
$$

## 5. Deep Phrases / 深层表达

| Reusable English sentence | 中文记忆句 |
|---|---|
| The second derivative is the derivative of the derivative. | 二阶导数就是对一阶导数再求导。 |
| The second derivative tells you how the slope itself is changing. | 二阶导数描述斜率本身如何变化。 |
| Concavity is visible through the direction in which tangent slopes change. | 凹凸性要看切线斜率朝哪个方向变化。 |
| A positive second derivative means the slope is increasing, not necessarily that the function is increasing. | 二阶导数为正表示斜率增加，不代表函数值一定增加。 |
| The sign gives the direction of slope change, while the magnitude gives its strength. | 符号给方向，绝对值给斜率变化的强弱。 |
| Two equal input steps reveal whether successive output changes are themselves changing. | 两个相同输入步长能揭示相邻输出变化是否还在变化。 |
| Acceleration is the rate of change of velocity and the second derivative of position. | 加速度是速度的变化率，也是位置的二阶导数。 |
| Speeding up depends on velocity and acceleration having the same sign. | 速度和加速度同号才表示速率增加。 |
| Jerk measures the rate at which acceleration changes. | jerk 描述加速度随时间的变化率。 |
| Higher derivatives encode increasingly detailed local shape information. | 越高阶的导数编码越细致的局部形状信息。 |

## 6. Common Mistakes / 高频错误

### Mistake 1: Thinking $f''>0$ means the function is increasing

$f''>0$ 只代表 $f'$ increasing；原函数可能仍在下降。

### Mistake 2: Confusing concavity with the sign of the function

graph 在 $x$-axis 上方或下方，与 concave up/down 没有直接关系。

### Mistake 3: Treating $f''=0$ as sufficient for an inflection point

还必须检查二阶导数或 concavity 是否穿过该点改变 sign。

### Mistake 4: Reading $d^2f/dx^2$ as an ordinary fraction of squares

它是 repeated derivative notation；代数操作必须有 differential/chain-rule context。

### Mistake 5: Saying negative acceleration always means slowing down

speed 是否减小取决于 $v$ 与 $a$ 是否异号。

### Mistake 6: Confusing velocity with speed

velocity 有方向和 sign；speed 是 $|v|$。

### Mistake 7: Translating jerk literally

本章的 jerk 是 third derivative of position，不是日常英语中的骂人词。

## 7. Formula Map / 公式地图

Derivative chain:

$$
f'(x)=\frac{df}{dx},\qquad
f''(x)=\frac{d^2f}{dx^2},\qquad
f^{(n)}(x)=\frac{d^nf}{dx^n}
$$

Concavity:

$$
f''>0\Rightarrow\text{concave up},\qquad
f''<0\Rightarrow\text{concave down}
$$

Second finite difference:

$$
f''(x)=\lim_{h\to0}\frac{f(x+2h)-2f(x+h)+f(x)}{h^2}
$$

Motion chain:

$$
\boxed{
s(t)\xrightarrow{d/dt}v(t)\xrightarrow{d/dt}a(t)\xrightarrow{d/dt}j(t)
}
$$

$$
v=s',\qquad a=s'',\qquad j=s'''
$$

## 8. Confusion / Questions

1. 为什么 $f''>0$ 不等于 $f'>0$？
2. 一个 decreasing function 怎样同时 concave up？
3. 二阶导数的 magnitude 在 graph 上表示什么？
4. 为什么 $ddf$ 通常与 $(dx)^2$ 同阶？
5. $d^2f/dx^2$ 中的两个 2 分别来自哪里？
6. 为什么 $f''(c)=0$ 不足以证明 inflection point？
7. acceleration 为负时，object 一定在 slowing down 吗？
8. position graph、velocity graph 和 acceleration graph 怎样互相检查？
9. jerk 的物理含义是什么？
10. higher derivatives 为什么能帮助 Taylor polynomial 逼近函数？

## 9. Source Anchors / 字幕定位

- **00:00:04**：higher-order derivatives 是 Taylor series 的预备
- **00:00:29**：本集重点放在 second derivative
- **00:00:40**：回顾 derivative 是 graph slope
- **00:00:53**：second derivative = derivative of derivative
- **00:01:03**：用 curvature 看 second derivative
- **00:01:08**：curving upward -> positive second derivative
- **00:01:17**：curving downward -> negative second derivative
- **00:01:26**：比较 second derivative 的大小
- **00:01:46**：no curvature -> second derivative 0
- **00:01:53**：开始解释 notation
- **00:02:15**：$d^2f/dx^2$ 标准写法
- **00:02:33**：两个相同的 $dx$ steps
- **00:03:03**：change in how the function changes
- **00:03:29**：second derivative 与 $ddf/(dx)^2$
- **00:03:57**：second derivative 的 acceleration 直觉
- **00:04:16**：position derivative is velocity
- **00:04:27**：velocity derivative is acceleration
- **00:04:47**：negative acceleration in the video's example
- **00:04:54**：third derivative is jerk
- **00:05:06**：higher derivatives 用于 function approximation

## 10. After Watching Summary / 看完压缩版

对 $f$ 连续求导，会形成：

$$
f\to f'\to f''\to f'''\to\cdots
$$

$f'$ 描述 $f$ 的 local slope，$f''$ 描述 slope 的 local change。因此：

$$
f''>0\Rightarrow\text{slope increasing}\Rightarrow\text{concave up}
$$

$$
f''<0\Rightarrow\text{slope decreasing}\Rightarrow\text{concave down}
$$

在 motion 中：

$$
s'=v,\qquad s''=v'=a,\qquad s'''=a'=j
$$

判断 speeding up 或 slowing down 时必须比较 $v$ 与 $a$ 的 signs。最后，higher derivatives 依次记录越来越细的 local shape information，这正是 [[Taylor Series]] 能用一个点附近的数据重建函数的原因。

**One-sentence compression:**  
Higher-order derivatives track changes in lower-order behavior: the second derivative tracks changing slope or acceleration, and further derivatives encode progressively finer local shape.

中文：

> 高阶导数追踪低一阶行为的变化：二阶导数是斜率的变化或加速度，更高阶导数继续编码更细的局部形状。

## 11. Knowledge Graph Connections / 知识图谱连接

- [[Derivatives]] 提供 repeated differentiation 的起点。
- [[Second Derivative]] 把 changing slope、concavity 和 acceleration 汇总到同一张卡。
- [[Higher-Order Derivatives]] 说明 $f^{(n)}$ 是反复应用 derivative operation。
- [[Concavity]] 将二阶导数的 sign 转成 graph shape。
- [[Acceleration]] 将位置的二阶导数转成 motion language。
- [[09 - What Does Area Have to Do With Slope]] 研究 slopes 的 average；本章研究 slope 的 local change。
- [[Taylor Series]] 使用各阶导数匹配函数在 center 附近的 local behavior。
- [[Instantaneous Rate of Change]] 是 velocity 与 acceleration 的共同定义语言。

## 12. Links / 链接

- [[UBC Knowledge Graph]]
- [[09 - What Does Area Have to Do With Slope]]
- [[11 - Taylor Series]]
- [[Derivatives]]
- [[Higher-Order Derivatives]]
- [[Second Derivative]]
- [[Concavity]]
- [[Acceleration]]
- [[Instantaneous Rate of Change]]
- [[Taylor Series]]
