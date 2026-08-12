---
title: "3Blue1Brown - The Essence of Calculus 12 - The Other Way to Visualize Derivatives"
description: "A connected bilingual calculus note about 3Blue1Brown - The Essence of Calculus 12 - The Other Way to Visualize Derivatives."
publish: true
tags: [calculus, visual-calculus]
---
# 3Blue1Brown - The Essence of Calculus 12 - The Other Way to Visualize Derivatives

## Reading Note / 阅读说明

这是一份伴读型笔记。单独阅读时，它要重建视频怎样把 derivative 从 graph slope 改写为 local stretching factor，再用 repeated fraction 解释 stable 与 unstable fixed points；配合视频时，每个 Knowledge Point 都有时间定位。英文保留可直接用于解释概念的核心句，中文负责把 transformation animation 背后的数学关系说清楚。

Connected from:

- [[02 - The Paradox of the Derivative]]
- [[07 - Limits, L'Hopital's Rule, and Epsilon-Delta Definitions]]
- [[Transformational View of Derivatives]]

## 1. What This Episode Is About / 这一集在讲什么

初等微积分常把 derivative 画成 graph 的 tangent slope。这没有错，但它依赖一种特定表示：input 和 output 都是 real numbers，而且函数被画成坐标平面上的 curve。

这一集给出另一种视角：把函数看成从一条 input number line 到另一条 output number line 的 mapping。此时，$f'(a)$ 描述 $a$ 附近的一小团 input points 被局部拉伸、压缩或翻转多少。

> The derivative measures how a function locally stretches, squishes, or flips its input space.

核心近似是：

$$
f(a+h)\approx f(a)+f'(a)h
$$

也就是说，在足够小的 neighborhood 内，非线性函数看起来越来越像“乘以 $f'(a)$”的 linear action。这个观点随后解释 iteration：若 $p$ 是 fixed point，$f(p)=p$，那么邻近误差近似满足

$$
e_{n+1}\approx f'(p)e_n.
$$

因此 $|f'(p)|<1$ 会压缩误差，fixed point 稳定；$|f'(p)|>1$ 会放大误差，fixed point 不稳定。

## 2. Link to Previous Episodes / 和前面各集的连接

Chapter 2 已经指出 derivative 不应只被记成 instantaneous rate：

```text
small input nudge dx
-> output nudge df
-> df ≈ f'(x) dx
```

Chapter 7 用 limit 让这个近似变得严谨。本集没有改变 derivative 的定义，而是改变 visual language：

```text
graph view          transformation view
slope               local scale factor
positive slope      preserve orientation
negative slope      flip orientation
zero slope          collapse to first order
large |slope|       local expansion
small |slope|       local contraction
```

这种语言更容易推广到 multivariable calculus、complex analysis 和 differential geometry，因为那些函数未必适合画成普通 $y=f(x)$ graph。

## 3. Class Flow / 视频脉络

1. 回顾 calculus 的常见 graph-based intuitions。
2. 区分 derivative 的本质与“slope”这一种表示。
3. 把 function 画成 input line 到 output line 的 mapping。
4. 用 $f(x)=x^2$ 展示 local stretching、contraction、collapse 与 flip。
5. 引入 infinite repeated fraction 和 map $f(x)=1+1/x$。
6. 解 fixed-point equation，得到两个 algebraic solutions。
7. 把 infinite expression 解释为 repeated iteration。
8. 对比 graph 上的 cobweb diagram 与 transformation animation。
9. 用 derivative magnitude 判断两个 fixed points 的 stability。
10. 讨论“无限分数等于什么”取决于采用 algebraic object 还是 limiting process。
11. 总结 transformation view 的用途与推广价值。

## 4. Core Ideas / 核心知识块

### Knowledge Point 1: Graphical Intuition Is Useful but Representation-Dependent

**Video:** 00:00:04-00:01:29

第一年 calculus 的视觉直觉常被压缩成：

- derivative = slope of a graph；
- integral = area under a graph。

它们对 single-variable real functions 很有效，但并非 calculus object 本身。若 function 的 input 或 output 是 vector、complex number、surface，普通二维 graph 可能不存在或不再是最自然的表示。

所以问题不是抛弃 graph，而是不要让理解被 graph 锁死。

> A slope is one visual manifestation of a derivative, not the full meaning of a derivative.

### Knowledge Point 2: A Derivative Measures Sensitivity to Tiny Input Nudges

**Video:** 00:01:34-00:02:21

对 graph $y=f(x)$，derivative function 为每个 $x$ 返回 tangent slope。但更根本的问题是：若 input 被轻推 $h$，output 对这个 nudge 有多敏感？

$$
\Delta y=f(x+h)-f(x)
$$

当 $h$ 很小时：

$$
\Delta y\approx f'(x)h.
$$

$f'(x)$ 是 input nudge 到 output nudge 的 first-order conversion factor。graph slope 只是把同一个 ratio 画成 rise over run。

### Knowledge Point 3: View a Function as a Mapping Between Number Lines

**Video:** 00:02:21-00:02:59

不画 curve，而是把每个 input point $x$ 送到另一条 number line 上的 output point $f(x)$。观察 $x=a$ 附近 evenly spaced points 经过 mapping 后的间距：

- 间距变大：local stretching；
- 间距变小：local contraction；
- 顺序反转：local flip；
- 一阶间距趋近于 0：local collapse。

在足够小的尺度，mapping around $a$ 近似：

$$
a+h\longmapsto f(a)+f'(a)h.
$$

因此 derivative 是 nonlinear map 的 local linear model。

### Knowledge Point 4: For $x^2$, the Derivative Appears as a Local Scale Factor

**Video:** 00:02:59-00:04:08

令 $f(x)=x^2$，则 $f'(x)=2x$。

在 $x=1$ 附近：

$$
(1+h)^2=1+2h+h^2\approx1+2h.
$$

所以小间距约放大 2 倍。$f'(1)=2$ 的 transformation meaning 就是 local stretch factor $2$。

在 $x=3$ 附近：

$$
(3+h)^2=9+6h+h^2\approx9+6h,
$$

因此 local stretch factor 是 $6$。

在 $x=1/4$ 附近，$f'(1/4)=1/2$，小 neighborhood 被压缩到原间距的一半。derivative 小于 1 不代表“函数值小”，而代表 local output spacing 小于 input spacing。

### Knowledge Point 5: Zero and Negative Derivatives Have Concrete Transformation Meanings

**Video:** 00:04:08-00:05:35

在 $x=0$，$f'(0)=0$。无论放大 10、100 还是 1000 倍，$x^2$ 在 0 附近的一阶行为越来越像：

$$
h\mapsto0\cdot h.
$$

这不是说某个有限 neighborhood 真的全部映到一个点，而是说 zoom-in limit 中，linear part collapse 了整个局部空间。

在 $x=-2$，$f'(-2)=-4$。magnitude $4$ 表示拉伸四倍，negative sign 表示 orientation reversal：左边的点映到右边，右边的点映到左边。

> The magnitude controls local scaling; the sign controls orientation.

### Knowledge Point 6: The Repeated Fraction Is a Fixed-Point Problem

**Video:** 00:05:41-00:06:52

考虑：

$$
1+\cfrac{1}{1+\cfrac{1}{1+\cfrac{1}{\ddots}}}.
$$

若把整个 expression 设为 $x$，内部又出现同样的 expression：

$$
x=1+\frac1x.
$$

所以寻找的是 function

$$
f(x)=1+\frac1x
$$

的 fixed points。整理得：

$$
x^2-x-1=0,
$$

因此：

$$
x=\frac{1\pm\sqrt5}{2}.
$$

两个 solution 是：

$$
\phi=\frac{1+\sqrt5}{2}\approx1.618,
\qquad
-\frac1\phi=\frac{1-\sqrt5}{2}\approx-0.618.
$$

纯 algebra 并没有自动排除负根。

### Knowledge Point 7: An Infinite Nested Expression Needs an Interpretation

**Video:** 00:06:52-00:08:43

“无限分数等于什么”并非只靠 symbol shape 决定。一种自然定义是从 seed $x_0$ 开始反复应用：

$$
x_{n+1}=1+\frac1{x_n}.
$$

有限的 $x_n$ 形成越来越深的 nested fraction，而 infinite expression 被理解为 sequence limit：

$$
\lim_{n\to\infty}x_n.
$$

若恰好从 $x_0=-1/\phi$ 开始，sequence 永远停在那里。但几乎任何其他 seed，即使非常靠近负 fixed point，也会离开它并最终靠近 $\phi$。这说明“满足 fixed-point equation”与“是 iteration 的 attracting limit”不是同一条件。

### Knowledge Point 8: Cobweb Diagrams Show Iteration, but the Transformation View Is More Direct

**Video:** 00:08:52-00:10:16

graph 方法在 $y=f(x)$ 和 $y=x$ 之间画 cobweb：vertical move 应用 function，horizontal move 把 output 重新当作下一次 input。它能显示 convergence，但需要记忆移动方向。

transformation view 更直接：

```text
all current points
-> apply the map
-> outputs become the next inputs
-> apply the same map again
```

iteration 就是同一个 transformation 重复作用，不需要在两条 graph 之间来回转换。

### Knowledge Point 9: A Stable Fixed Point Locally Contracts Nearby Errors

**Video:** 00:10:16-00:11:54

若 $p$ 是 fixed point，令 nearby input 为：

$$
x_n=p+e_n.
$$

local linearization 给出：

$$
f(p+e_n)\approx f(p)+f'(p)e_n
=p+f'(p)e_n.
$$

所以：

$$
\boxed{e_{n+1}\approx f'(p)e_n}.
$$

对 $f(x)=1+1/x$：

$$
f'(x)=-\frac1{x^2}.
$$

在 $p=\phi$：

$$
f'(\phi)=-\frac1{\phi^2}\approx-0.382,
$$

其 magnitude 小于 1。每次 iteration 都把 nearby error 压到约 $38.2\%$，negative sign 让误差左右交替。因此 points 一边 flip，一边向 $\phi$ 聚拢。

### Knowledge Point 10: An Unstable Fixed Point Locally Expands Nearby Errors

**Video:** 00:11:54-00:12:47

对负 fixed point $q=-1/\phi$：

$$
f'(q)=-\frac1{q^2}=-\phi^2\approx-2.618.
$$

$|f'(q)|>1$，所以很小的 error 每轮约放大 $2.618$ 倍，同时因 derivative 为负而翻转方向。除非 seed 精确等于 $q$，否则 rounding error 或任意 perturbation 都会被放大。

判据是：

$$
\boxed{|f'(p)|<1\Rightarrow\text{locally attracting / stable}}
$$

$$
\boxed{|f'(p)|>1\Rightarrow\text{locally repelling / unstable}}
$$

$|f'(p)|=1$ 时 first-order test inconclusive，必须看 higher-order behavior。

### Knowledge Point 11: Algebraic Solutions and Limiting Values Answer Different Questions

**Video:** 00:12:47-00:13:29

若把 infinite fraction 当作满足 self-similar equation 的 algebraic object，两个 roots 都有理由被保留。若把它定义为 repeated finite approximations 的 limit，则几乎所有 allowable seeds 都趋向 $\phi$，负 root 只是一个精确但 unstable 的 exceptional seed。

因此严格表达时必须先说明 object 的定义：

> Solving the fixed-point equation finds candidates; convergence of the iteration decides which candidates are attracting limits.

### Knowledge Point 12: The Transformational View Complements Rather Than Replaces Graphs

**Video:** 00:13:29-00:14:03

把整个 real function 都画成 transformation 可能比 graph 更拥挤，本集并不声称它在所有 single-variable problems 中更好。它的价值是让 derivative intuition 更 flexible：

$$
\text{derivative}=\text{local linear action},
$$

而 slope 只是 scalar-to-scalar 情况下的图形表现。到了 multivariable calculus，scalar derivative 会推广为 Jacobian matrix；“局部把空间怎样变形”仍然成立，而 ordinary graph slope 已不够用。

## 5. Deep Phrases / 深句对应表

| English phrase | 这句话真正对应的意思 |
|---|---|
| A derivative measures sensitivity to tiny input nudges. | 输入被轻推一点时，输出的一阶响应有多强。 |
| The slope is one way to visualize that sensitivity. | slope 是 derivative 在普通函数图像中的表现，不是它的全部本质。 |
| Locally, a differentiable function behaves like a linear transformation. | zoom 得足够近，非线性函数的一阶行为像乘以一个常数。 |
| The derivative is the local stretching factor. | $|f'(a)|$ 给出 $a$ 附近小间距的缩放比例。 |
| A negative derivative reverses local orientation. | 负号不仅是“下降”，在 mapping 视角中还表示点的左右次序翻转。 |
| A zero derivative collapses first-order variation. | output 仍可能变化，但 linear term 消失，只剩更高阶变化。 |
| A fixed point is unchanged by the transformation. | $f(p)=p$，一次 mapping 后仍停在同一位置。 |
| Stability is about what happens after a small perturbation. | 不能只看点本身不动，还要看附近点会回来还是离开。 |
| A stable fixed point contracts nearby errors. | $|f'(p)|<1$ 时，每轮 iteration 都缩小偏差。 |
| An unstable fixed point amplifies nearby errors. | $|f'(p)|>1$ 时，再小的扰动也会逐轮放大。 |
| An infinite expression must be defined through a limiting process. | 看到无限嵌套不能只做形式代数，要说明有限近似 sequence 如何取 limit。 |
| Solving an equation gives candidates, not convergence. | fixed-point roots 是候选值，是否由 iteration 得到还要单独判断。 |

## 6. Common Mistakes / 常见误区

1. **把 derivative 永久等同于 slope。** slope 是 graph view；更可推广的表述是 local linear response。
2. **把 $f'(a)<1$ 与 $|f'(a)|<1$ 混淆。** stability 看 magnitude。$f'(a)=-2$ 虽然小于 1，仍会放大误差。
3. **认为 negative derivative 只表示 decreasing。** transformation view 中还表示 local orientation reversal。
4. **认为 $f'(a)=0$ 意味着 neighborhood 全部映到一点。** 只是 first-order behavior collapse；higher-order terms 仍可变化。
5. **解出 $f(x)=x$ 就断言 iteration 必收敛到所有 roots。** fixed point existence 与 stability 是两件事。
6. **忽略 seed 和 domain。** $f(x)=1+1/x$ 在 $x=0$ 无定义；某些 seed 会在有限步撞到 0。
7. **把 infinite nested fraction 当作已经定义好的普通数。** 必须说明 truncation 或 iteration convention。
8. **把 $|f'(p)|<1$ 当作全局 convergence guarantee。** 它给出 local attraction；远处 behavior 仍需另行分析。

## 7. Formula Map / 公式地图

### Local linearization

$$
f(a+h)=f(a)+f'(a)h+o(h)
$$

### Local spacing transformation

$$
\Delta x\mapsto\Delta y\approx f'(a)\Delta x
$$

### Fixed point

$$
f(p)=p
$$

### Iteration

$$
x_{n+1}=f(x_n)
$$

### Error propagation near a fixed point

$$
e_n=x_n-p,
\qquad
e_{n+1}\approx f'(p)e_n
$$

### Stability test

$$
|f'(p)|<1:\text{ attracting},
\qquad
|f'(p)|>1:\text{ repelling}
$$

### Repeated-fraction map

$$
f(x)=1+\frac1x,
\qquad
f'(x)=-\frac1{x^2}
$$

### Its fixed points

$$
p_1=\phi,
\qquad
p_2=-\frac1\phi
$$

$$
|f'(\phi)|=\frac1{\phi^2}<1,
\qquad
\left|f'\left(-\frac1\phi\right)\right|=\phi^2>1
$$

## 8. Confusion / Questions / 自测问题

1. 为什么 slope 不是 derivative 最可推广的定义？
2. $f'(a)=3$ 在 transformation view 中是什么意思？
3. $f'(a)=-1/2$ 同时说明 scaling 和 orientation 的哪些信息？
4. 为什么 $x^2$ 在 0 附近 derivative 为 0，却不是 constant function？
5. fixed point 与 attracting fixed point 有什么区别？
6. 怎样从 local linearization 推出 $e_{n+1}\approx f'(p)e_n$？
7. 为什么 stability test 必须使用 absolute value？
8. $|f'(p)|=1$ 时为什么不能直接下结论？
9. repeated fraction 的 algebraic interpretation 和 limiting interpretation 各给出什么答案？
10. 为什么 $-1/\phi$ 精确作为 seed 时不移动，但任意 tiny perturbation 会离开？
11. cobweb diagram 与 transformation animation 在表达 iteration 上分别做了什么？
12. 这个视角将来如何推广到 Jacobian matrix？

## 9. Source Anchors / 字幕定位

- **00:00:39**：first-year calculus 依赖 graph intuition
- **00:01:17**：提出 transformational view
- **00:01:39**：标准 derivative-as-slope view
- **00:01:58**：slope 不应被当作 derivative 的完整定义
- **00:02:04**：sensitivity to tiny nudges
- **00:02:21**：input line 到 output line 的 mapping
- **00:02:33**：stretching or squishing input space
- **00:02:59**：$x^2$ example
- **00:03:35**：$f'(1)=2$ 的 transformation meaning
- **00:03:45**：$f'(3)=6$
- **00:03:57**：derivative smaller than 1 表示 contraction
- **00:04:08**：zero derivative 与 local collapse
- **00:04:54**：negative inputs
- **00:05:15**：negative derivative 与 flip
- **00:05:41**：infinite repeated fraction
- **00:06:18**：fixed point of $1+1/x$
- **00:06:24**：两个 fixed-point solutions
- **00:07:11**：无限 expression 需要定义
- **00:07:21**：repeated iteration interpretation
- **00:08:14**：calculator iteration experiment
- **00:08:52**：为什么一个 fixed point 被偏爱
- **00:09:07**：graphical cobweb method
- **00:10:16**：transformation method
- **00:11:24**：$\phi$ neighborhood contracts
- **00:11:41**：negative derivative causes alternating approach
- **00:11:58**：负 fixed point neighborhood expands
- **00:12:20**：stable and unstable fixed points
- **00:12:36**：$|f'(p)|$ stability criterion
- **00:12:56**：limit interpretation vs algebraic interpretation
- **00:13:29**：change-in-density view 不是全面替代 graph
- **00:13:54**：真正价值在后续 advanced topics

## 10. After Watching Summary / 看完压缩版

derivative 的 graph slope interpretation 来自：

$$
\frac{\Delta y}{\Delta x}\approx f'(x).
$$

而 transformation interpretation 直接读取同一关系：

$$
\Delta y\approx f'(x)\Delta x.
$$

因此 $|f'(x)|$ 是 local scale factor，sign 决定是否 flip。对 fixed point iteration $x_{n+1}=f(x_n)$，邻近误差 obey：

$$
e_{n+1}\approx f'(p)e_n.
$$

这立即给出 local stability test。对 $f(x)=1+1/x$，$\phi$ 的 derivative magnitude 小于 1，所以吸引附近 points；$-1/\phi$ 的 derivative magnitude 大于 1，所以排斥附近 points。这就是 repeated fraction 在 limiting-process interpretation 下选择 $\phi$ 的原因。

**One-sentence compression:**  
A derivative is the local linear action of a function: it tells how tiny input separations are scaled and oriented, and therefore whether iteration contracts toward or expands away from a fixed point.

中文：

> 导数是函数的局部线性动作：它说明微小输入间距怎样被缩放和翻转，也因此判断迭代会靠近还是远离一个不动点。

## 11. Knowledge Graph Connections / 知识图谱连接

- [[02 - The Paradox of the Derivative]] 从 average rate 的 limit 建立 derivative；本集给同一对象增加 transformation language。
- [[Transformational View of Derivatives]] 压缩 local stretching、contraction、flip 与 collapse 的统一解释。
- [[Derivatives]] 连接 tangent slope、instantaneous rate 与 local linear map 三种表述。
- [[Tiny Nudges]] 提供 $f(a+h)-f(a)\approx f'(a)h$ 的输入扰动语言。
- [[Tangent Line]] 是 local linearization 在 graph 上的几何表现。
- [[Fixed-Point Stability]] 用 derivative magnitude 判断 iteration 的 local attraction 或 repulsion。
- [[Limits]] 给 zoom-in behavior 与 infinite iteration 提供严格语言。
- [[Function Composition]] 解释 repeated application $f(f(f(\cdots)))$。
- [[Higher-Order Derivatives]] 在 $|f'(p)|=1$ 或 $f'(p)=0$ 时帮助分析 first-order test 之外的 behavior。
- [[Taylor Polynomial]] 把 local linear approximation 扩展为 higher-order local approximation。

## 12. Links / 链接

- [[02 - The Paradox of the Derivative]]
- [[07 - Limits, L'Hopital's Rule, and Epsilon-Delta Definitions]]
- [[Transformational View of Derivatives]]
- [[Fixed-Point Stability]]
- [[Derivatives]]
- [[Tiny Nudges]]
- [[Tangent Line]]
- [[Limits]]
- [[Function Composition]]
- [[Higher-Order Derivatives]]
- [[Taylor Polynomial]]
