---
title: "3Blue1Brown - The Essence of Calculus 03 - Derivative Formulas through Geometry"
description: "A connected bilingual learning note about 3Blue1Brown - The Essence of Calculus 03 - Derivative Formulas through Geometry."
publish: true
tags: [open-notes, visual-calculus]
---
# 3Blue1Brown - The Essence of Calculus 03 - Derivative Formulas through Geometry

## Reading Guide / 阅读说明

这份笔记继续遵守前面定的规则：不是抄字幕，而是把视频变成 Obsidian 里的知识网络。英文核心句保留，中文负责解释和记忆；每个概念尽量连回已有笔记。

Connected from:

- [[01 - The Essence of Calculus]]
- [[02 - The Paradox of the Derivative]]
- Next episode: [[04 - Visualizing the Chain Rule and Product Rule]]
- [[UBC Knowledge Graph]]

## 1. What This Episode Is About / 这一集在讲什么

Chapter 1 先讲 [[Integrals]] 和 accumulated area；Chapter 2 解释 [[Derivatives]] 到底是什么意思：不是神秘的 instantaneous change，而是 [[Limits]] 下的 [[Average Rate of Change]]。

Chapter 3 开始回答下一步：

```text
If I know what a derivative means, how do I actually compute derivative formulas?
```

这一集的重点不是背公式，而是用几何直觉解释：

```text
tiny nudge in input -> tiny change in output -> derivative formula
```

视频里的核心提醒是：

> tiny nudges are the heart of derivatives

中文理解：导数的本质不是“指数跳下来”这种符号动作，而是输入 $x$ 被轻轻推一下 $dx$ 后，输出 $f(x)$ 会被推多少 $df$。

## 2. Class Flow / 视频脉络

1. 先说明为什么要会算 derivative formulas：现实问题常常用 polynomials, trig functions, exponentials 建模。
2. 用 $f(x)=x^2$ 的正方形面积解释为什么：

$$
\frac{d}{dx}x^2=2x
$$

3. 用 $f(x)=x^3$ 的立方体体积解释为什么：

$$
\frac{d}{dx}x^3=3x^2
$$

4. 推广到 [[Power Rule]]：

$$
\frac{d}{dx}x^n=nx^{n-1}
$$

5. 用 $1/x$ 的固定面积矩形解释 negative power 的导数。
6. 用 [[Unit Circle]] 解释为什么：

$$
\frac{d}{d\theta}\sin\theta=\cos\theta
$$

7. 结尾预告下一集会处理 sums, products, function compositions，也就是更复杂的 derivative rules。

## 3. Core Ideas / 核心知识块

### Knowledge Point 1: Derivative Formulas Should Not Feel Like a List of Rules

视频开头说，很多现实世界的现象会用这些函数建模：

- polynomials / 多项式
- trigonometric functions / 三角函数
- exponentials / 指数函数

所以学习 derivative formulas 的目的不是为了背表，而是为了有一套语言描述 real-world rates of change。

Core sentence:

```text
Derivative formulas give us a language for talking about rates of change in modeled situations.
```

中文理解：公式不是终点，公式是语言。你会算 $x^2$、$x^3$、$\sin x$ 的导数，才更容易讨论物体位置、面积、波动、电流、增长率这些具体问题。

Connection:

- [[02 - The Paradox of the Derivative]] 负责解释 derivative 的含义。
- 本篇负责把这个含义变成可计算的 derivative formulas。

### Knowledge Point 2: Tiny Nudge Is the Real Meaning of $dx$

本集反复使用一个动作：

```text
x -> x + dx
```

意思是：把输入 $x$ 轻轻增加一点点，看看输出 $f(x)$ 发生了什么微小变化。

```text
input nudge: dx
output response: df
derivative: df / dx
```

中文理解：$dx$ 不是一个随便写的小符号。它代表“输入端的一点点推动”。导数就是问：这个输入推动，会在输出端造成多少倍的响应？

Link back:

- Chapter 2 的精确语言是：[[Derivatives]] come from a [[Limits]] process.
- Chapter 3 的直觉语言是：derivatives measure the output response to a tiny input nudge.

### Knowledge Point 3: Why $\frac{d}{dx}x^2=2x$

把 $x^2$ 看成一个边长为 $x$ 的正方形面积。

当边长从 $x$ 变成 $x+dx$，新增面积由三部分组成：

- two thin rectangles: each has area $x\,dx$
- one tiny square: area $dx^2$

所以：

$$
df=2x\,dx+dx^2
$$

当 $dx$ 趋近于 $0$ 时，$dx^2$ 比 $dx$ 小得多。求导时看的是 $df/dx$，所以：

$$
\frac{df}{dx}=2x+dx
$$

letting $dx\to0$ gives:

$$
\frac{d}{dx}x^2=2x
$$

Core sentence:

```text
A tiny change squared is a negligible change.
```

中文理解：不是说 $dx^2$ 真的等于 0，而是它在“相对于 $dx$ 的一阶变化”里太小，最后不会 surviving the limit。

Related links:

- [[Tangent Line]]：图像上这是 $y=x^2$ 的切线斜率。
- [[Limits]]：严格上是让 $dx\to0$。
- [[Derivatives]]：概念上是 output change per input change。

### Knowledge Point 4: Why $\frac{d}{dx}x^3=3x^2$

把 $x^3$ 看成边长为 $x$ 的立方体体积。

当边长从 $x$ 变成 $x+dx$，新增体积主要来自三个薄片：

```text
three square faces, each with volume x^2 dx
```

所以主要变化是：

$$
df\approx 3x^2\,dx
$$

边缘和角落的小块会包含 $dx^2$ 或 $dx^3$，在 derivative 的 limit 里可以忽略。

因此：

$$
\frac{d}{dx}x^3=3x^2
$$

Core sentence:

```text
Most of the new volume comes from the three square faces.
```

中文理解：$3$ 不是凭空来的。它来自立方体有三个主要方向会被“加厚”：长、宽、高三个方向各贡献一个 $x^2dx$。

### Knowledge Point 5: Power Rule Is Geometry, Not Exponent Magic

公式：

$$
\frac{d}{dx}x^n=nx^{n-1}
$$

符号记法会让它看起来像：

```text
the exponent hops down to the front
```

但本集要你记住的是：这只是计算口诀，不是原因。

真正原因来自展开：

$$
(x+dx)^n
$$

展开时：

- 原来的部分是 $x^n$
- 一阶新增项来自“从 $n$ 个括号里选一个 $dx$”
- 一共有 $n$ 种选法
- 每一项都是 $x^{n-1}dx$

所以一阶变化是：

$$
n x^{n-1}dx
$$

于是：

$$
\frac{df}{dx}=nx^{n-1}
$$

Deep phrase:

```text
not just a pile of formulas to memorize
```

中文理解：如果你只记“指数搬下来”，很容易会做题但不知道为什么。几何/微小变化视角让 [[Power Rule]] 变成可理解的结构。

### Knowledge Point 6: Why $\frac{d}{dx}\frac{1}{x}=-\frac{1}{x^2}$

视频用一个 fixed area rectangle 来理解 $1/x$。

设矩形面积恒等于 $1$：

$$
x\cdot \frac{1}{x}=1
$$

其中：

- width = $x$
- height = $1/x$

当 width 增加 $dx$，为了保持面积仍然是 $1$，height 必须下降一点点。

这就是为什么导数是负的：

```text
as x increases, 1/x decreases
```

用 power rule 也能得到：

$$
\frac{1}{x}=x^{-1}
$$

$$
\frac{d}{dx}x^{-1}=-x^{-2}=-\frac{1}{x^2}
$$

Core connection:

- 符号上：这是 [[Power Rule]] 的 negative exponent 版本。
- 几何上：这是 fixed area rectangle 的高度被压低。

### Knowledge Point 7: Why $\frac{d}{d\theta}\sin\theta=\cos\theta$

这一段是本集最漂亮的地方。

在 [[Unit Circle]] 里：

- $\theta$ 是你绕单位圆走过的弧长，也是 radians 下的角度。
- $\sin\theta$ 是圆上点的 height above the x-axis。

当你沿圆周再走一小步 $d\theta$：

```text
dtheta = tiny arc-length nudge
d(sin theta) = tiny height change
```

导数就是：

$$
\frac{d(\sin\theta)}{d\theta}
$$

放大看，圆弧局部像一条直线，于是小弧长和高度变化形成一个小直角三角形。这个小三角形与单位圆里由角 $\theta$ 定义的大三角形相似。

于是：

$$
\frac{d(\sin\theta)}{d\theta}
=\frac{\text{adjacent side}}{\text{hypotenuse}}
=\cos\theta
$$

Core sentence:

```text
Adjacent divided by hypotenuse is exactly what cosine means.
```

中文理解：$\sin$ 的导数等于 $\cos$，不是因为图像看起来像，而是因为单位圆上“小高度变化 / 小弧长”的比例，正好等于邻边除以斜边。

### Knowledge Point 8: Graph Feel vs Precise Reasoning

视频区分了两种理解：

```text
graph intuition: gives a loose feel for the shape
unit-circle reasoning: gives the precise formula
```

中文理解：看 $\sin$ 的图像，你可能猜到 derivative 像 $\cos$；但要知道为什么 exactly 是 $\cos$，就必须回到 function actually represents：单位圆里的高度。

这也呼应前面的 $x^2$ 和 $x^3$：

- 看图像可以猜 slope 变大/变小。
- 看函数本身代表什么，才能得到 exact formula。

## 4. Deep Phrases / 深句对应表

这里放的不是单纯术语，而是你读笔记时要能马上联想到一整块概念的句子。

| Phrase / 句子 | What it should trigger / 看到它要想到什么 |
|---|---|
| tiny nudges are the heart of derivatives | 导数就是输入被轻推 $dx$ 后，输出如何响应 $df$。 |
| a tiny change squared is a negligible change | $dx^2$ 不是真的没有，而是在一阶导数里会被 limit 消掉。 |
| the exponent hops down to the front | 这是 power rule 的计算口诀，不是原因。 |
| not just a pile of formulas to memorize | 公式要和几何/微小变化直觉连起来。 |
| what the function actually represents | 不要只看图像形状，要回到函数的本体解释。 |
| adjacent divided by hypotenuse | 单位圆里 $\cos\theta$ 的定义，也是 $\sin\theta$ 导数的来源。 |
| loose feel for the shape | 图像直觉能帮你猜，但不能替代精确推导。 |
| fixed area rectangle | $1/x$ 的几何图像：宽增加，高必须下降。 |

## 5. Exam Language / 关键句中英对照

### 1. The derivative of $x^2$ is $2x$.

English:

```text
The derivative of x squared is 2x because the main change in area comes from two thin rectangles, each with area x dx.
```

中文：

```text
x^2 的导数是 2x，因为正方形边长增加 dx 时，主要新增面积来自两个 x dx 的薄矩形。
```

### 2. Terms involving $dx^2$ are negligible in the derivative.

English:

```text
Terms involving dx squared vanish in the limit because they are smaller than first-order changes.
```

中文：

```text
含有 dx^2 的项在求导的极限过程中会消失，因为它们比一阶变化更小。
```

### 3. The Power Rule comes from the first-order terms in $(x+dx)^n$.

English:

```text
The Power Rule comes from the n first-order terms in the expansion of (x plus dx) to the nth power.
```

中文：

```text
幂函数求导法则来自 (x+dx)^n 展开式中的 n 个一阶项。
```

### 4. The derivative of $1/x$ is negative.

English:

```text
The derivative of one over x is negative because increasing x forces the height of a unit-area rectangle to decrease.
```

中文：

```text
1/x 的导数是负的，因为 x 变大时，面积为 1 的矩形高度必须变小。
```

### 5. The derivative of sine is cosine.

English:

```text
The derivative of sine is cosine because the tiny change in height divided by the tiny arc-length step equals adjacent over hypotenuse on the unit circle.
```

中文：

```text
正弦的导数是余弦，因为单位圆上“高度的微小变化 / 弧长的微小变化”正好等于邻边除以斜边。
```

## 6. Formula Map / 公式地图

```text
meaning of derivative
  -> tiny input nudge dx
  -> tiny output change df
  -> df/dx
  -> derivative formula
```

```text
x^2 as square area
  -> two x dx strips
  -> derivative 2x
```

```text
x^3 as cube volume
  -> three x^2 dx slabs
  -> derivative 3x^2
```

```text
x^n
  -> n first-order dx terms
  -> derivative n x^(n-1)
```

```text
1/x as unit-area rectangle
  -> width up, height down
  -> derivative -1/x^2
```

```text
sin(theta) as unit-circle height
  -> tiny arc step dtheta
  -> tiny height change d(sin theta)
  -> adjacent / hypotenuse
  -> derivative cos(theta)
```

## 7. Confusion / Questions

1. 为什么 $dx^2$ 可以忽略，但 $dx$ 不可以忽略？
2. Power Rule 里的 $n$ 为什么是“有 $n$ 个地方可以选 $dx$”？
3. 为什么 $x^3$ 的导数在 $x<0$ 时仍然是正的 $3x^2$？
4. $1/x$ 的导数为什么是负的？这个负号在 fixed area rectangle 里对应什么？
5. 为什么看图像只能猜 $\sin'(\theta)$ 像 $\cos\theta$，但不能证明它 exactly 是 $\cos\theta$？
6. $\theta$ 必须用 radians 时，$\frac{d}{d\theta}\sin\theta=\cos\theta$ 才这么干净；为什么 degrees 会多一个换算因子？

## 8. After Watching Summary / 看完压缩版

这一集把 derivative formulas 从“背公式”改造成“看微小变化”：

```text
Derivative = output's first-order response to a tiny input nudge.
```

对于 $x^2$，新增面积主要是两个薄矩形，所以导数是 $2x$。

对于 $x^3$，新增体积主要是三个薄片，所以导数是 $3x^2$。

对于 $x^n$，一阶变化来自 $n$ 个 $x^{n-1}dx$，所以导数是 $nx^{n-1}$。

对于 $1/x$，宽变大时单位面积矩形的高必须下降，所以导数是 $-1/x^2$。

对于 $\sin\theta$，单位圆上高度变化除以弧长变化等于 adjacent/hypotenuse，所以导数是 $\cos\theta$。

## 9. Knowledge Graph Connections / 知识图谱连接

- [[04 - Visualizing the Chain Rule and Product Rule]] continues from single-function formulas to sums, products, and compositions; it turns tiny nudges into [[Product Rule]] and [[Chain Rule]].
- [[02 - The Paradox of the Derivative]] explains what derivative means: tangent slope, limit of average rates of change, and best constant approximation. This note uses that meaning to compute actual formulas.
- [[01 - The Essence of Calculus]] introduces $dx$ through accumulated area and $dA/dx$; this note uses the same tiny-change language for power functions and trig functions.
- [[Derivatives]] is the central concept: every formula here is a concrete example of $df/dx$.
- [[Limits]] explains why $dx^2$ and higher-order terms disappear when computing derivative formulas.
- [[Power Rule]] is the main algebraic rule, but this note stores its geometric reason.
- [[Unit Circle]] explains why $\frac{d}{d\theta}\sin\theta=\cos\theta$.
- [[Trigonometric Derivatives]] connects this episode to later derivative rules and AP Calculus formula fluency.
- [[AP电磁学第1次正课-电荷库仑定律与电场]] uses derivative rules as physics tools: electric field and charged-particle motion rely on rates of change, vector components, and later integrals in [[Gauss's Law]].
- [[AP电磁学第2次正课-连续带电体电场与电通量]] uses tiny-change language directly: $dq$ creates $dE$, then integration adds the surviving field components.
- [[微积分BC第14次正课-Ratio-Test与Taylor-Series]] uses derivative formulas repeatedly to build [[Taylor Series]] coefficients and to justify power-series manipulation.
- [[微积分BC第13次正课-无穷级数判敛]] is mostly about series, and the next AP lecture extends that branch into [[Ratio Test]], [[Taylor Series]], and [[Maclaurin Series]].

## 10. Links / 链接

- [[UBC Knowledge Graph]]
- [[01 - The Essence of Calculus]]
- [[02 - The Paradox of the Derivative]]
- [[04 - Visualizing the Chain Rule and Product Rule]]
- [[Derivatives]]
- [[Limits]]
- [[Tangent Line]]
- [[Average Rate of Change]]
- [[Power Rule]]
- [[Tiny Nudges]]
- [[Derivative Formulas]]
- [[Unit Circle]]
- [[Sine Derivative]]
- [[Cosine]]
- [[Trigonometric Derivatives]]
- [[Taylor Series]]
- [[微积分BC第13次正课-无穷级数判敛]]
- [[微积分BC第14次正课-Ratio-Test与Taylor-Series]]
- [[AP电磁学第1次正课-电荷库仑定律与电场]]
- [[AP电磁学第2次正课-连续带电体电场与电通量]]
