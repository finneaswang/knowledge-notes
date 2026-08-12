---
title: "3Blue1Brown - The Essence of Calculus 07 - Limits, L'Hôpital's Rule, and Epsilon-Delta Definitions"
description: "A connected bilingual calculus note about 3Blue1Brown - The Essence of Calculus 07 - Limits, L'Hôpital's Rule, and Epsilon-Delta Definitions."
publish: true
tags: [calculus, visual-calculus]
---
# 3Blue1Brown - The Essence of Calculus 07 - Limits, L'Hôpital's Rule, and Epsilon-Delta Definitions

## Reading Note / 阅读说明

这是一份伴读型笔记。单独阅读时，它要完整重建视频怎样从 derivative 走到 limit、epsilon-delta 和 L'Hôpital's Rule；配合视频时，每个 Knowledge Point 都有时间定位。正文优先解释为什么，概念卡负责之后的快速检索和跨章节连接。

Connected from:

- [[06 - Implicit Differentiation, What's Going On Here]]
- [[02 - The Paradox of the Derivative]]
- [[Derivatives]]
- [[Limits]]

## 1. What This Episode Is About / 这一集在讲什么

前几章一直把 derivative 描述成：给 input 一个具体但很小的 nudge $dx$，观察 output change $df$，再研究 ratio $df/dx$。

本集回答三个问题：

1. 这套 tiny-nudge 直觉怎样与课本中的 formal derivative definition 完全对应？
2. 数学家说一个值 “approaches” 另一个值，严格是什么意思？
3. 当直接代入出现 $0/0$ 时，derivatives 为什么能反过来帮助计算 limit？

路线是：

```text
finite tiny nudge
-> derivative as a limit
-> what “approach” means
-> epsilon-delta rigor
-> 0/0 indeterminate form
-> local linearization
-> L'Hôpital's Rule
```

**English core sentence:**  
Limits avoid infinitely small quantities by asking what happens for arbitrarily small, ordinary nonzero changes.

**中文记忆：**  
极限不要求真的存在“无限小量”，而是研究普通非零变化可以任意缩小时，结果趋向哪里。

## 2. Link to Previous Episodes / 和前几集的连接

- Chapter 2：instantaneous rate 是 average rates 的 limit。
- Chapter 3：[[Tiny Nudges]] 用有限小量解释 derivative formulas。
- Chapter 4：local first-order changes 通过 product 和 composition 组合。
- Chapter 6：$ds\approx2x\,dx+2y\,dy$ 是 local linear approximation。

本章不是推翻这些直觉，而是给它们补上严格语言：

$$
\frac{df}{dx}
\quad\longleftrightarrow\quad
\lim_{h\to0}\frac{f(x+h)-f(x)}{h}
$$

左边是压缩后的 derivative notation；右边把 output difference 与 limit process 全部展开。

## 3. Class Flow / 视频脉络

1. 说明 limit 的直觉就是 “approach”。
2. 把 $df/dx$ 展开成 formal derivative definition。
3. 强调 $h$ 始终是 ordinary nonzero number，不是先代成 0。
4. 用 $x^3$ 在 $x=2$ 的 difference quotient 展示 graph 上的 hole 与 limit 12。
5. 用 jump example 说明左右趋向不同则 two-sided limit 不存在。
6. 把 shrinking input range 与 shrinking output range 写成 epsilon-delta definition。
7. 研究 $\sin(\pi x)/(x^2-1)$ 在 $x\to1$ 的 $0/0$。
8. 用 numerator 和 denominator 的局部线性变化得到 $-\pi/2$。
9. 推广到一般 $f(a)=g(a)=0$，得到 [[L'Hôpital's Rule]] 的直觉。
10. 说明为什么不能用 L'Hôpital 循环“发现”未知 derivative formulas。

## 4. Core Ideas / 核心知识块

### Knowledge Point 1: A Derivative Is the Limit of Nearby Secant Slopes

**Video:** 00:00:00-00:03:08

对函数 $f(x)$，从某个 input $x$ 出发，向旁边移动一个非零小量 $dx$：

$$
df=f(x+dx)-f(x)
$$

secant slope 是：

$$
\frac{df}{dx}
=\frac{f(x+dx)-f(x)}{dx}
$$

它“几乎”是 derivative。真正的 derivative 是这个 ratio 在 input nudge 趋近 0 时所接近的值：

$$
\boxed{
f'(x)=\lim_{h\to0}\frac{f(x+h)-f(x)}{h}
}
$$

课本通常用 $h$ 或 $\Delta x$，而不是在 limit 内写 $dx$。这样做是为了明确：$h$ 是普通、具体、非零的数，只是我们研究 arbitrarily small choices of $h$。

几何上：

```text
h nonzero
-> two distinct points
-> secant slope
-> h approaches 0
-> secant line approaches tangent line
-> slope approaches derivative
```

**Important distinction：**  
不是把 $h=0$ 代入 difference quotient。若直接代入，会得到 $0/0$；limit 问的是 $h$ 在 0 附近但不等于 0 时，ratio 趋向哪里。

### Knowledge Point 2: Tiny Nudges Are Finite Numbers With a Limit Built Into the Interpretation

**Video:** 00:03:08-00:04:53

视频反对两个极端理解：

1. 把 $dx$ 当成神秘的 infinitely small number。
2. 把 $dx$、$df$ 当成完全没有含义、只能按规则移动的 symbols。

更有用的读法是：

> Interpret $dx$ as a concrete, finitely small, nonzero nudge, while remembering to ask what happens as its size approaches zero.

例如先取：

$$
dx=0.001
$$

这是普通实数。随后再比较 $0.0001$、$0.00001$ 等越来越小的选择，观察相关 ratio 是否稳定靠近某个值。

因此，前几章的 differential intuition 是 formal definition 的翻译：

$$
df\approx f'(x)\,dx
$$

表示在足够小的 finite nudge 下，output change 越来越接近 local linear prediction。

**Why it matters：**  
这让求导公式的几何和物理意义保持可见，同时 limit 保证最终结果严格。

### Knowledge Point 3: A Limit Can Exist Where the Function Is Undefined

**Video:** 00:05:00-00:06:09

求 $x^3$ 在 $x=2$ 的 derivative 时出现：

$$
\frac{(2+h)^3-2^3}{h}
$$

展开 numerator：

$$
(2+h)^3-8=12h+6h^2+h^3
$$

当 $h\ne0$：

$$
\frac{12h+6h^2+h^3}{h}=12+6h+h^2
$$

所以：

$$
\boxed{
\lim_{h\to0}\frac{(2+h)^3-8}{h}=12
}
$$

原 ratio 在 $h=0$ 没有定义，因为是 $0/0$；graph 在那里有一个 hole。但靠近 0 的所有输入都合法，outputs 从左右两边都靠近 12。

**Core distinction：**

$$
f(a)\quad\text{and}\quad\lim_{x\to a}f(x)
$$

回答的是不同问题：

- function value：点上实际定义了什么
- limit：点附近的 values 趋向什么

因此 hole 不会自动破坏 limit。

### Knowledge Point 4: A Two-Sided Limit Requires Both Sides to Approach the Same Value

**Video:** 00:06:09-00:08:01

对 jump function，可能出现：

$$
\lim_{h\to0^-}f(h)=1
$$

$$
\lim_{h\to0^+}f(h)=2
$$

左右各自有 clear approach，但它们不同，所以：

$$
\lim_{h\to0}f(h)\quad\text{does not exist}
$$

**English core sentence:**  
A two-sided limit exists only when the left-hand and right-hand limits agree.

用 range 来理解：把 input window 不断缩紧到 0 附近。如果 limit 存在，对应的 output range 会被迫缩进某个单一 value 周围；如果有 jump，output range 始终横跨两个分离高度，无法缩成任意小。

**Watch out：** “limit does not exist” 不等于 “function is undefined at the point”。hole example 是 function undefined 但 limit exists；jump example 是即使给点补一个值，也不能修复左右趋势不一致。

### Knowledge Point 5: Epsilon-Delta Makes “Approach” Quantitatively Precise

**Video:** 00:08:01-00:09:48

要表达：

$$
\lim_{x\to a}f(x)=L
$$

先由对方任意指定 output tolerance：

$$
\epsilon>0
$$

你必须找到相应的 input tolerance：

$$
\delta>0
$$

使得只要：

$$
0<|x-a|<\delta
$$

就一定有：

$$
|f(x)-L|<\epsilon
$$

正式写法：

$$
\boxed{
\forall\epsilon>0,\ \exists\delta>0
\text{ such that }
0<|x-a|<\delta
\Rightarrow|f(x)-L|<\epsilon
}
$$

#### Who chooses what?

- challenger chooses any $\epsilon$, however small
- you respond with a suitable $\delta$
- every permitted input inside the punctured $\delta$-window must land inside the $\epsilon$-window

排除 $x=a$ 的条件 $0<|x-a|$ 很重要，因为 limit 只关心附近，不要求 function 在点上有定义。

如果 limit 不存在，就能找到某个足够小的 $\epsilon$，使得无论 $\delta$ 多小，总有 nearby outputs 跑出目标区间。

**中文压缩：**  
你想让输出离 $L$ 多近都可以；我总能把输入限制得足够靠近 $a$，保证所有输出满足你的精度要求。

### Knowledge Point 6: $0/0$ Is an Indeterminate Form, Not an Answer

**Video:** 00:09:48-00:11:46

考虑：

$$
\lim_{x\to1}\frac{\sin(\pi x)}{x^2-1}
$$

直接代入：

$$
\frac{\sin\pi}{1^2-1}=\frac00
$$

[[Indeterminate Form]] 的意思不是 limit 等于某个“$0/0$ 值”，而是当前信息不足：numerator 和 denominator 都趋近 0，但它们靠近 0 的相对速度尚未比较。

数值代入 $x=1.00001$ 会得到约 $-1.57$，提示 limit 可能是：

$$
-\frac\pi2
$$

但数值近似不是精确推导。要找到 exact value，需要比较两个函数在 $x=1$ 附近的 local linear behavior。

### Knowledge Point 7: L'Hôpital's Rule Comes From Comparing Local Linear Changes

**Video:** 00:11:46-00:14:18

在 $x=1$：

$$
\sin(\pi x)=0,\qquad x^2-1=0
$$

令：

$$
x=1+dx
$$

numerator 的 tiny change：

$$
d[\sin(\pi x)]
\approx\pi\cos(\pi x)\,dx
$$

在 $x=1$：

$$
\pi\cos\pi\,dx=-\pi\,dx
$$

denominator 的 tiny change：

$$
d(x^2-1)\approx2x\,dx
$$

在 $x=1$：

$$
2\,dx
$$

因此附近的 ratio：

$$
\frac{\sin(\pi x)}{x^2-1}
\approx\frac{-\pi\,dx}{2\,dx}
=-\frac\pi2
$$

随着 $dx\to0$，local linear approximations 越来越准确，所以：

$$
\boxed{
\lim_{x\to1}\frac{\sin(\pi x)}{x^2-1}
=-\frac\pi2
}
$$

真正相消的不是“两个零”，而是 numerator 与 denominator 都由同一个 input nudge $dx$ 产生的一阶变化。

### Knowledge Point 8: The General Rule Compares the Two Slopes Near Their Shared Zero

**Video:** 00:14:18-00:16:34

设：

$$
f(a)=g(a)=0
$$

并且两者在 $a$ 附近可导。对 $x=a+dx$：

$$
f(a+dx)\approx f'(a)\,dx
$$

$$
g(a+dx)\approx g'(a)\,dx
$$

于是：

$$
\frac{f(a+dx)}{g(a+dx)}
\approx\frac{f'(a)\,dx}{g'(a)\,dx}
=\frac{f'(a)}{g'(a)}
$$

这给出本集展示的 local form：

$$
\boxed{
\lim_{x\to a}\frac{f(x)}{g(x)}
=\frac{f'(a)}{g'(a)}
}
$$

前提是原 ratio 为 $0/0$，相关 derivatives 与 limit 条件允许这一步，而且 denominator derivative 不造成新的无定义问题。

更一般的课程版本写作：

$$
\lim_{x\to a}\frac{f(x)}{g(x)}
=\lim_{x\to a}\frac{f'(x)}{g'(x)}
$$

只在满足 L'Hôpital hypotheses 且右侧 limit 存在或按定理允许时使用。

**English core sentence:**  
Near a shared zero, differentiable functions are controlled by their tangent-line slopes.

### Knowledge Point 9: L'Hôpital Is a Tool With Preconditions, Not a Universal Shortcut

**Video:** 00:16:34-00:17:33

Derivative definition 本身是一个看似 $0/0$ 的 limit：

$$
f'(x)=\lim_{h\to0}\frac{f(x+h)-f(x)}{h}
$$

能否用 L'Hôpital 来“发现”未知 derivative formula？通常这是 circular reasoning：应用 L'Hôpital 需要先知道 numerator derivative，而 numerator derivative 正是你试图求的内容。

另外，直接代入得到普通有限值时，不需要 L'Hôpital；得到非 $0/0$ 或非 $\infty/\infty$ 的形式时，也不能机械使用。

**Decision check：**

1. 先直接代入。
2. 确认是否为合法 indeterminate form。
3. 检查 numerator 和 denominator 的 differentiability。
4. 对上下分别求导，不是对 quotient 使用 Quotient Rule。
5. 再计算新的 limit；必要时可重复，但每次都重新检查条件。

## 5. Deep Phrases / 深层表达

| Reusable English sentence | 中文记忆句 |
|---|---|
| A derivative is what the nearby secant slope approaches as the input nudge approaches zero. | 导数是输入扰动趋近零时，邻近割线斜率所趋向的值。 |
| The limit process avoids setting the input change equal to zero. | 极限过程避免把输入变化直接设成零。 |
| A limit concerns nearby values, not necessarily the value at the point itself. | 极限关心点附近，不一定关心点上实际取值。 |
| A hole may leave a limit intact, while a jump can destroy the two-sided limit. | 空洞不一定破坏极限，跳跃会因左右不一致破坏双侧极限。 |
| Epsilon controls output accuracy; delta controls how close the input must be. | epsilon 规定输出精度，delta 规定输入必须多靠近。 |
| The epsilon-delta definition must work for every positive epsilon. | epsilon 无论多小，都必须能找到对应 delta。 |
| Zero over zero is an indeterminate form because it does not reveal the relative rates of approach. | $0/0$ 信息不足，因为还不知道上下趋近零的相对速度。 |
| L'Hôpital's Rule compares the local linear behavior of numerator and denominator. | 洛必达法则比较分子分母的局部线性行为。 |
| Near a shared zero, the ratio of two functions is governed by the ratio of their slopes. | 在共同零点附近，函数比值由斜率比值控制。 |

## 6. Common Mistakes / 高频错误

### Mistake 1: Plugging in the limiting input too early

$h\to0$ 不等于先令 $h=0$。先代入会把可以约简和分析的 nearby behavior 变成 $0/0$。

### Mistake 2: Assuming undefined function value means no limit

hole example 明确说明 function value 与 limit 可以不同。

### Mistake 3: Ignoring one side

two-sided limit 要求 left-hand 与 right-hand limits 相同。

### Mistake 4: Reversing epsilon and delta

$\epsilon$ 控制 output；$\delta$ 控制 input。顺序是“对每个 $\epsilon$，存在一个 $\delta$”。

### Mistake 5: Treating $0/0$ as zero or one

$0/0$ 是 indeterminate form，不是数值答案。

### Mistake 6: Using L'Hôpital on every fraction

只有满足特定 indeterminate form 和 theorem hypotheses 时才可用。

### Mistake 7: Differentiating the quotient with Quotient Rule

L'Hôpital 要比较：

$$
\frac{f'(x)}{g'(x)}
$$

不是求：

$$
\left(\frac{f}{g}\right)'
$$

### Mistake 8: Using a theorem circularly

不能依赖尚未建立的 derivative formula 来证明同一个 formula。

## 7. Formula Map / 公式地图

Derivative definition:

$$
\boxed{f'(x)=\lim_{h\to0}\frac{f(x+h)-f(x)}{h}}
$$

Limit statement:

$$
\boxed{\lim_{x\to a}f(x)=L}
$$

Epsilon-delta definition:

$$
\boxed{
\forall\epsilon>0,\exists\delta>0:
0<|x-a|<\delta\Rightarrow|f(x)-L|<\epsilon
}
$$

Two-sided condition:

$$
\lim_{x\to a^-}f(x)
=\lim_{x\to a^+}f(x)=L
$$

L'Hôpital's Rule, under its hypotheses:

$$
\boxed{
\lim_{x\to a}\frac{f(x)}{g(x)}
=\lim_{x\to a}\frac{f'(x)}{g'(x)}
}
$$

Video example:

$$
\boxed{
\lim_{x\to1}\frac{\sin(\pi x)}{x^2-1}
=-\frac\pi2
}
$$

## 8. Confusion / Questions

1. 为什么 $h$ 可以无限接近 0，却始终不需要等于 0？
2. function 在点上没有定义时，limit 为什么仍可能存在？
3. 左右极限分别存在为什么还不足以保证双侧极限存在？
4. epsilon-delta 中为什么先给 $\epsilon$，再找 $\delta$？
5. 为什么条件中要写 $0<|x-a|$？
6. $0/0$ 为什么不是一个值，而是一种 indeterminate form？
7. L'Hôpital 的局部线性解释中，两个 $dx$ 为什么可以相消？
8. 什么时候右侧 derivative ratio 的 limit 仍然需要继续处理？
9. 为什么不能用 L'Hôpital 证明尚不知道的 derivative formula？

## 9. Source Anchors / 字幕定位

- **00:00:00**：limits 与前六章 derivative intuition 的关系
- **00:01:17**：formal derivative definition
- **00:02:21**：为什么课本用 $h$ 而不是 $dx$
- **00:03:08**：limit 避免 infinitely small change
- **00:05:00**：$x^3$ 在 $x=2$ 的 difference quotient
- **00:05:32**：hole at $h=0$，但 limit 为 12
- **00:06:59**：jump counterexample 与左右极限
- **00:07:48**：从 shrinking ranges 进入 epsilon-delta
- **00:08:46**：epsilon 与 delta 的正式关系
- **00:09:48**：转入 limit computation
- **00:10:09**：$\sin(\pi x)/(x^2-1)$ example
- **00:11:33**：derivatives 反过来帮助 limits
- **00:12:15**：numerator 的 local change $-\pi dx$
- **00:13:12**：denominator 的 local change $2dx$
- **00:14:18**：推广到一般 $f(a)=g(a)=0$
- **00:16:13**：L'Hôpital's Rule 命名
- **00:16:34**：不能 circularly 发现 derivative formulas

## 10. After Watching Summary / 看完压缩版

Limit 的基本含义是 approach：

$$
\lim_{x\to a}f(x)=L
$$

表示当 $x$ 任意靠近 $a$ 时，$f(x)$ 可以被迫任意靠近 $L$，不要求 $x=a$ 或 $f(a)=L$。

Derivative 的 formal definition：

$$
f'(x)=\lim_{h\to0}\frac{f(x+h)-f(x)}{h}
$$

这里 $h$ 始终是普通、非零的 finite nudge；limit 研究它任意缩小时 ratio 的趋势。

Epsilon-delta 把 “approach” 写严谨：任意 output tolerance $\epsilon$，都能找到 input tolerance $\delta$，保证所有足够靠近的 inputs 产生足够靠近的 outputs。

$0/0$ 不是答案，而是说明必须比较 numerator 与 denominator 趋近零的速度。L'Hôpital's Rule 的直觉是：共同零点附近，两个 differentiable functions 都近似自己的 tangent lines，因此 function ratio 由 derivative ratio 控制。

**One-sentence compression:**  
Limits formalize arbitrarily close behavior, and L'Hôpital's Rule evaluates certain indeterminate ratios by comparing their local linear slopes.

中文：

> 极限严格描述任意接近的局部趋势，而洛必达法则通过比较局部线性斜率来计算特定未定式。

## 11. Knowledge Graph Connections / 知识图谱连接

- [[08 - Integration and the Fundamental Theorem of Calculus]] uses limits to turn increasingly fine rectangle sums into exact accumulation.
- [[02 - The Paradox of the Derivative]] 用 secant-to-tangent 解释 derivative；本章写出正式 limit notation。
- [[03 - Derivative Formulas through Geometry]] 的 finite [[Tiny Nudges]] 在这里得到 formal justification。
- [[06 - Implicit Differentiation, What's Going On Here]] 使用 local linear approximation；本章说明这种 approximation 如何通过 limits 变得精确。
- [[Derivatives]] 以 difference-quotient limit 为正式定义。
- [[Limits]] 区分 nearby behavior 与 point value，并连接 one-sided limits。
- [[Epsilon-Delta Definition]] 把 “approach” 转换成 output tolerance 与 input tolerance 的量化关系。
- [[Indeterminate Form]] 记录 $0/0$ 为什么只表示信息不足。
- [[L'Hôpital's Rule]] 用 derivative ratio 计算满足条件的 indeterminate limits。
- [[Chain Rule]] 用于视频例子中 $\sin(\pi x)$ 的 derivative。
- [[Fundamental Theorem of Calculus]] 是下一章主线，limits 也会为 integral 的无限细分提供严格含义。

## 12. Links / 链接

- [[01 - The Essence of Calculus]]
- [[02 - The Paradox of the Derivative]]
- [[03 - Derivative Formulas through Geometry]]
- [[04 - Visualizing the Chain Rule and Product Rule]]
- [[05 - What's So Special About Euler's Number e]]
- [[06 - Implicit Differentiation, What's Going On Here]]
- [[08 - Integration and the Fundamental Theorem of Calculus]]
- [[Derivatives]]
- [[Limits]]
- [[Tiny Nudges]]
- [[Epsilon-Delta Definition]]
- [[Indeterminate Form]]
- [[L'Hôpital's Rule]]
- [[Chain Rule]]
- [[Fundamental Theorem of Calculus]]
