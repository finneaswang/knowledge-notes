---
title: "3Blue1Brown - The Essence of Calculus 04 - Visualizing the Chain Rule and Product Rule"
description: "A connected bilingual calculus note about 3Blue1Brown - The Essence of Calculus 04 - Visualizing the Chain Rule and Product Rule."
publish: true
tags: [calculus, visual-calculus]
---
# 3Blue1Brown - The Essence of Calculus 04 - Visualizing the Chain Rule and Product Rule

## Reading Note / 阅读说明

这份笔记继续沿用前 3 集的读法。英文保留最值得记忆和考试表达的核心句，中文负责解释图像和推理；重点不是把字幕重新抄一遍，而是把 derivative rules 连接成一条可以复习、做题和继续扩展的脉络。

Connected from:

- [[01 - The Essence of Calculus]]
- [[02 - The Paradox of the Derivative]]
- [[03 - Derivative Formulas through Geometry]]

## 1. What This Episode Is About / 这一集在讲什么

Chapter 2 给出了 [[Derivatives]] 的含义，Chapter 3 用 [[Tiny Nudges]] 推出了基本求导公式。本集继续问：

> If simple functions are combined, how do their tiny changes combine?

中文理解：

> 当简单函数被组合成复杂函数时，各部分的微小变化会怎样共同形成最终变化？

绝大多数复杂表达式都由三种基本组合反复叠加而成：

1. addition / 相加
2. multiplication / 相乘
3. composition / 复合，也就是把一个函数放进另一个函数

减法可以看成“乘以 $-1$ 后相加”；除法可以看成“先复合 reciprocal function $1/x$，再相乘”。因此，掌握 sum rule、[[Product Rule]] 和 [[Chain Rule]]，就能一层一层拆开复杂表达式。

**English core sentence:**  
Most complicated functions are built by layering together sums, products, and compositions.

**中文记忆：**  
复杂函数看起来可能很吓人，但它只是三种基本结构的嵌套。

## 2. Class Flow / 视频脉络

1. 先把复杂函数归结为 addition、multiplication 和 [[Function Composition]]。
2. 用 $f(x)=\sin x+x^2$ 解释 sum rule：总变化就是两个部分变化之和。
3. 用可调长方形解释 [[Product Rule]]：宽和高同时变化，会产生两条主要面积带。
4. 说明右上角小块是 second-order term，而不是“神秘地等于零”。
5. 给出口诀 “left d-right, right d-left”，并把两项重新对应到面积。
6. 用三条 number lines 表示 $x\to x^2\to\sin(x^2)$。
7. 引入中间变量 $h=x^2$，追踪 $dx\to dh\to df$。
8. 得到 [[Chain Rule]]：外层导数在内层函数处取值，再乘以内层导数。
9. 解释 $dh$ 的“消去”不是纯符号把戏，而是真实的变化传递。
10. 最后提醒：理解规则来源不能替代实际求导练习。

## 3. The Structural Map / 结构地图

| Combination | Form | Derivative idea |
|---|---|---|
| Sum / 和 | $g(x)+h(x)$ | add the two output changes |
| Product / 积 | $g(x)h(x)$ | add the two first-order area strips |
| Composition / 复合 | $g(h(x))$ | multiply successive change factors |

### Why subtraction and division add no new basic structure

Subtraction:

$$
g(x)-h(x)=g(x)+[-1\cdot h(x)]
$$

Division:

$$
\frac{g(x)}{h(x)}
=g(x)\cdot\left(\frac{1}{h(x)}\right)
$$

其中 $1/h(x)$ 是 reciprocal function 与 $h$ 的复合，再与 $g$ 相乘。Quotient Rule 可以从 [[Product Rule]]、[[Chain Rule]] 和 $\frac{d}{dx}(1/x)$ 推出，所以它不是新的基本组合方式。

## 4. Sum Rule / 和法则

### Example: $f(x)=\sin x+x^2$

在同一个输入 $x$ 处，$f(x)$ 的高度等于 $\sin x$ 和 $x^2$ 两个高度叠起来。

当输入发生微小变化 $x\to x+dx$ 时：

$$
d(\sin x)\approx \cos x\,dx
$$

$$
d(x^2)\approx 2x\,dx
$$

因此：

$$
df=d(\sin x)+d(x^2)
\approx(\cos x+2x)\,dx
$$

两边除以 $dx$：

$$
\frac{df}{dx}=\cos x+2x
$$

一般地：

$$
\frac{d}{dx}[g(x)+h(x)]
=g'(x)+h'(x)
$$

**English core sentence:**  
The derivative of a sum of two functions is the sum of their derivatives.

**中文理解：**  
总输出本来就是两个输出相加，所以它的微小变化也直接相加。

## 5. Product Rule Through Area / 用面积理解乘积法则

### Why a product suggests a rectangle

当看到两个量的乘积时，可以把它想成 rectangle area：

$$
A=g(x)h(x)
$$

- width = $g(x)$
- height = $h(x)$

当 $x$ 增加 $dx$ 时，$g$ 增加 $dg$，$h$ 增加 $dh$。新面积与旧面积之差为：

$$
dA=g\,dh+h\,dg+dg\,dh
$$

三项分别对应：

1. bottom strip: $g\,dh$
2. side strip: $h\,dg$
3. corner piece: $dg\,dh$

### Why the corner term disappears

如果 $g$ 和 $h$ 在这一点可导，那么：

$$
dg\approx g'(x)\,dx,\qquad dh\approx h'(x)\,dx
$$

所以：

$$
dg\,dh\approx g'(x)h'(x)(dx)^2
$$

求导时除以 $dx$：

$$
\frac{dg\,dh}{dx}
\approx g'(x)h'(x)\,dx\to0
$$

它不是“本来等于零”，而是 second-order change / 二阶变化；与两条一阶面积带相比，它在 $dx\to0$ 的极限里不再贡献导数。

**Important notation check / 符号辨析：**

- $d(x^2)$：函数 $x^2$ 的微小变化，约等于 $2x\,dx$
- $(dx)^2$：输入微小变化的平方，是二阶小量

二者不是同一个东西。字幕口语中的 “d x squared” 在上下文中通常指 $d(x^2)$。

### General Product Rule

$$
d(gh)\approx g\,dh+h\,dg
$$

$$
\boxed{
\frac{d}{dx}[g(x)h(x)]
=g(x)h'(x)+h(x)g'(x)
}
$$

也可以写成：

$$
(gh)'=gh'+hg'
$$

**English core sentence:**  
Each term in the Product Rule represents one first-order strip of new area.

**中文记忆：**  
乘积求导不是“两个导数相乘”，而是保留“宽不动、高在变”和“高不动、宽在变”两种一阶贡献。

### Video Example: $f(x)=\sin x\cdot x^2$

$$
d(\sin x)\approx\cos x\,dx
$$

$$
d(x^2)\approx2x\,dx
$$

新增面积的一阶部分：

$$
df\approx \sin x\cdot d(x^2)+x^2\cdot d(\sin x)
$$

因此：

$$
\boxed{
f'(x)=2x\sin x+x^2\cos x
}
$$

### Mnemonic: left d-right, right d-left

> Left d-right, right d-left.

$$
\text{left}\cdot(\text{derivative of right})
+
\text{right}\cdot(\text{derivative of left})
$$

口诀只能帮助回忆顺序；真正的原因仍然是 adjustable rectangle 的两条一阶面积带。

### Constant Multiple Rule

如果其中一个因子是常数 $c$，它不会随 $x$ 变化，所以 $dc=0$：

$$
\frac{d}{dx}[c\,g(x)]=c\,g'(x)
$$

例如：

$$
\frac{d}{dx}[2\sin x]=2\cos x
$$

## 6. Function Composition / 函数复合

对于：

$$
f(x)=\sin(x^2)
$$

可以拆成：

$$
x\xrightarrow{h(x)=x^2}h\xrightarrow{g(h)=\sin h}f
$$

也就是：

$$
f(x)=g(h(x))
$$

**English core sentence:**  
Function composition passes the output of one function into another.

**Notation warning / 易混提醒：**

$$
\sin(x^2)\neq(\sin x)^2
$$

- $\sin(x^2)$：先平方，再取 sine
- $\sin^2x$：先取 sine，再平方

这两个函数的层级顺序不同，导数也不同。

### The three-number-line picture

视频用三条 number lines 表示：

1. top line: $x$
2. middle line: $h=x^2$
3. bottom line: $f=\sin h=\sin(x^2)$

输入推动沿链条传递：

$$
dx\longrightarrow dh\longrightarrow df
$$

第一段：

$$
dh=d(x^2)\approx2x\,dx
$$

第二段：

$$
df=d(\sin h)\approx\cos h\,dh
$$

代回 $h=x^2$：

$$
df\approx\cos(x^2)\cdot2x\,dx
$$

因此：

$$
\boxed{
\frac{d}{dx}\sin(x^2)=2x\cos(x^2)
}
$$

## 7. Chain Rule / 链式法则

对于：

$$
f(x)=g(h(x))
$$

外层函数描述最终输出相对于中间变量的变化：

$$
\frac{dg}{dh}
$$

内层函数描述中间变量相对于输入的变化：

$$
\frac{dh}{dx}
$$

所以：

$$
\boxed{
\frac{d}{dx}g(h(x))
=g'(h(x))h'(x)
}
$$

Leibniz notation:

$$
\boxed{
\frac{dg}{dx}
=\frac{dg}{dh}\frac{dh}{dx}
}
$$

**English core sentence:**  
Differentiate the outside function at the unchanged inside, then multiply by the derivative of the inside.

**中文记忆：**  
外层先求导，但里面原样保留；最后再乘内层导数。

### Why the $dh$ cancellation is meaningful

符号上看：

$$
\frac{dg}{dh}\frac{dh}{dx}
=\frac{dg}{dx}
$$

但视频强调，这不只是 notational trick：

- $\frac{dg}{dh}$：中间量变化 $dh$ 会把最终输出推动多少
- $\frac{dh}{dx}$：输入变化 $dx$ 会把中间量推动多少
- 两个比例相乘：输入变化最终会把输出推动多少

**English core sentence:**  
The cancellation of $dh$ reflects the actual chain of tiny changes from input to final output.

**中文理解：**  
$dh$ 像链条中的中转站：前一段产生它，后一段接收它。相消符号背后对应真实的变化传递。

## 8. Peeling Through Layers / 一层一层拆复杂表达式

看到复杂函数时，先识别最外层 operation。

### AP bridge

$$
F(x)=\sin\left((x^2+1)^3\right)
$$

这不是本集视频的具体算例，而是把 “peel through the layers” 翻译成 AP 步骤：

1. outer layer: $\sin(u)$
2. middle layer: $u=v^3$
3. inner layer: $v=x^2+1$

$$
F'(x)
=\cos\left((x^2+1)^3\right)
\cdot3(x^2+1)^2
\cdot2x
$$

### Decision questions

1. 最外层是 sum、product 还是 composition？
2. 如果是 product，两个因子分别是什么？
3. 如果是 composition，outer 和 inner 分别是什么？
4. 求完一层后，内部是否还需要继续使用规则？
5. 是否遗漏了 inner derivative？

## 9. Deep Phrases / 深层表达

这些不是孤立术语，而是看到概念时可以直接想起的完整意思。

| Reusable English sentence | 中文记忆句 |
|---|---|
| Most complicated functions are layers of sums, products, and compositions. | 再复杂的函数，也是在三种基本组合上不断套层。 |
| The derivative of a sum is the sum of the derivatives. | 总高度的变化，就是各部分高度变化之和。 |
| A product can be visualized as an area whose two side lengths are changing. | 乘积像一个宽和高都在变化的长方形。 |
| Each Product Rule term is one first-order strip of new area. | 乘积法则的两项就是底边和侧边两条主要面积带。 |
| The corner term is negligible because it is second order in the input change. | 角落不是等于零，而是二阶小量，除以 $dx$ 后趋近零。 |
| Function composition passes the output of one function into another. | 复合函数就是前一层的输出成为后一层的输入。 |
| The Chain Rule multiplies the rates at which changes pass through successive layers. | 链式法则把每一层传递变化的倍率乘起来。 |
| Differentiate the outside at the unchanged inside, then multiply by the inside derivative. | 外导内不动，再乘内导。 |
| Cancelling $dh$ reflects a real chain of tiny changes, not merely a symbolic trick. | $dh$ 相消对应真实的中间变化传递，不只是形式运算。 |
| Understanding where a rule comes from does not replace practicing how to apply it. | 理解来源让规则不再陌生，但熟练度仍然必须靠练习。 |

## 10. Common Mistakes / 高频错误

### Mistake 1: Product of derivatives

错误：

$$
(gh)'=g'h'
$$

正确：

$$
(gh)'=gh'+hg'
$$

### Mistake 2: Forgetting the inner derivative

错误：

$$
\frac{d}{dx}\sin(x^2)=\cos(x^2)
$$

正确：

$$
\frac{d}{dx}\sin(x^2)=2x\cos(x^2)
$$

### Mistake 3: Replacing the inside too early

$$
\frac{d}{dx}g(h(x))
=g'(h(x))h'(x)
$$

外层求导后，inner function 先原样保留，不是替换成 $h'(x)$。

### Mistake 4: Saying higher-order terms equal zero

$(dx)^2$ 并不等于零。它只是在形成 derivative 的极限中，相对于一阶 $dx$ 项不再贡献。

### Mistake 5: Confusing $d(x^2)$ with $(dx)^2$

$$
d(x^2)\approx2x\,dx
$$

而 $(dx)^2$ 是微小输入变化的平方。

### Mistake 6: Confusing $\sin(x^2)$ and $\sin^2x$

函数层级顺序决定 chain rule 的顺序。先画 operation layers，再求导。

## 11. Formula Map / 公式地图

$$
\boxed{
\frac{d}{dx}[g+h]=g'+h'
}
$$

$$
\boxed{
\frac{d}{dx}[gh]=gh'+hg'
}
$$

$$
\boxed{
\frac{d}{dx}g(h(x))=g'(h(x))h'(x)
}
$$

Visual map:

    sum
      -> two height changes
      -> add them

    product
      -> adjustable rectangle
      -> bottom strip + side strip
      -> second-order corner disappears in the limit

    composition
      -> input -> intermediate value -> final output
      -> multiply change factors along the chain

## 12. Active Recall / 主动回忆

1. 为什么函数的减法不需要新的基本求导结构？
2. 为什么函数的除法可以由 product 和 composition 构造？
3. Product Rule 的两项各对应哪一块面积？
4. 为什么 $dg\,dh$ 是二阶小量？
5. $d(x^2)$ 和 $(dx)^2$ 有什么区别？
6. 对 $\sin(x^2)$，为什么 $\cos(x^2)$ 还不是完整导数？
7. $\frac{dg}{dh}\frac{dh}{dx}$ 中两个比例分别描述什么？
8. 为什么说 $dh$ 相消不是单纯符号技巧？
9. 面对多层复合函数，第一步应该识别什么？
10. 理解规则来源之后，为什么仍然要练习？

## 13. Source Anchors / 字幕定位

- **00:00:49**：three basic ways to combine functions
- **00:01:54**：sum rule core sentence
- **00:04:11**：转入 product rule
- **00:08:49**：function composition
- **00:12:47**：chain rule 命名
- **00:14:12**：$dh$ cancellation 的真实含义
- **00:14:36**：三种基本工具总结

## 14. After Watching Summary / 看完压缩版

本集把复杂函数的求导压缩成三种结构：

    sum -> changes add
    product -> first-order area strips add
    composition -> change factors multiply

Product Rule:

$$
(gh)'=gh'+hg'
$$

它来自宽和高同时改变时的两条主要新增面积带。

Chain Rule:

$$
\frac{d}{dx}g(h(x))
=g'(h(x))h'(x)
$$

它来自输入变化先产生中间变化，再产生最终变化；每一段的变化倍率必须相乘。

**One-sentence compression:**  
Derivative rules describe how first-order changes combine and travel through the structure of a function.

中文：

> 求导法则描述的是一阶微小变化如何在函数结构中相加、共同贡献或逐层传递。

## 15. Knowledge Graph Connections / 知识图谱连接

- [[05 - What's So Special About Euler's Number e]] uses this episode's [[Chain Rule]] to show why $(e^{kt})'=ke^{kt}$ and why the coefficient $k$ is a readable growth rate.
- [[03 - Derivative Formulas through Geometry]] 建立了 $dx\to df$ 的 tiny-nudge 语言；本集用同一语言处理函数组合。
- [[Derivatives]] 提供统一含义：所有规则都在计算最终输出对输入的一阶局部响应。
- [[Tiny Nudges]] 连接 $dx$、$dg$、$dh$ 与 $df$ 的变化链。
- [[Derivative Formulas]] 从单个函数公式扩展到复杂函数的结构规则。
- [[Product Rule]] 把乘积连接到 changing rectangle 和 first-order area strips。
- [[Function Composition]] 决定函数的计算顺序，也决定 chain rule 的求导顺序。
- [[Chain Rule]] 把多层局部变化率连接成最终变化率。
- [[Power Rule]] 与 [[Trigonometric Derivatives]] 提供本集例子中各层所需的基本导数。
- [[Limits]] 解释为什么 $(dx)^2$ 这样的高阶项在导数中消失。
- [[Taylor Series]] 中反复求高阶导数时，需要熟练组合 Product Rule 与 Chain Rule。

## 16. Links / 链接

- [[01 - The Essence of Calculus]]
- [[02 - The Paradox of the Derivative]]
- [[03 - Derivative Formulas through Geometry]]
- [[05 - What's So Special About Euler's Number e]]
- [[Derivatives]]
- [[Limits]]
- [[Tiny Nudges]]
- [[Derivative Formulas]]
- [[Power Rule]]
- [[Trigonometric Derivatives]]
- [[Product Rule]]
- [[Function Composition]]
- [[Chain Rule]]
- [[Taylor Series]]
