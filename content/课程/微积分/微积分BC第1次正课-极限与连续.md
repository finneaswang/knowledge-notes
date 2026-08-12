---
title: "微积分BC第1次正课 - 极限与连续"
description: "A connected bilingual learning note about 微积分BC第1次正课 - 极限与连续."
publish: true
tags: [open-notes, calculus-course]
---
# 微积分BC第1次正课 - 极限与连续

## Reading Guide / 阅读说明

这是 [[AP Calculus BC]] 的第 1 次正式课。课堂前约十分钟是设备调试、背景调查与资料说明，本笔记不记录；知识内容从 **10:41** 的 Unit 1 开始。

这份笔记不以 AP 考试为目标，而是保存以后学习 calculus 真正需要的概念脉络：

```text
nearby behavior
-> one-sided limits
-> limit laws and evaluation
-> continuity
-> types of discontinuity
```

## Reading Rule / 读法约定

- 核心术语与可复述句以英文为主，中文解释为辅。
- 课堂类比用来恢复老师的讲解路线，但结论以数学定义为准。
- 例题重点是“为什么选择这个方法”，不是记住选项。
- 3Blue1Brown 只通过现有 Wiki 连接接入；本次没有重读其完整笔记。

---

## 1. One-Sentence Mainline / 一句话主线

> **A limit describes the value a function approaches near an input; continuity means that this nearby behavior agrees from both sides and also agrees with the actual function value.**
>
> 极限描述函数在某个输入附近趋向什么；连续则要求左右两侧的趋近结果一致，而且与该点真实函数值一致。

---

## 2. Class Flow / 课堂脉络

1. 用“100 米金条不断减半”解释为什么数学需要 [[Limits]]。
2. 从图像区分：left-hand limit、right-hand limit、function value。
3. 观察两类无穷行为：$x\to\pm\infty$ 与 $f(x)\to\pm\infty$。
4. 学习 limit laws 与 composite-function limits。
5. 建立求极限的决策顺序：
   - direct substitution
   - factor and cancel for $0/0$
   - compare leading terms for rational functions at infinity
   - special trigonometric limit
   - Squeeze Theorem
6. 用左右极限和点值定义 continuity。
7. 区分 removable、jump、infinite discontinuity。

---

## 3. Why Limits Exist / 为什么需要极限

课堂先考虑：一根长 $100$ 米的金条，每来一个人就剩下一半。第 $n$ 次后剩余长度是

$$
a_n=100\left(\frac12\right)^n.
$$

对每个有限的 $n$，$a_n$ 都不等于 $0$；但当 $n$ 不断增大，它可以任意接近 $0$：

$$
\lim_{n\to\infty}100\left(\frac12\right)^n=0.
$$

这个等号不是说“某一次切完后真的等于零”，而是说：

> **The values can be made as close to zero as we want by taking $n$ sufficiently large.**
>
> 只要让 $n$ 足够大，剩余长度就能比任何预先指定的小量还小。

因此，极限研究的是 **approach / 趋近过程**，不一定是某个时刻实际取得的值。

---

## 4. Limit vs Function Value / 极限值不等于点值

标准记号是

$$
\lim_{x\to c}f(x)=L.
$$

它问的是：当 $x$ 从 $c$ 附近靠近 $c$ 时，$f(x)$ 靠近什么？

它没有直接问 $f(c)$ 是多少。因此下面三种情况都可能发生：

1. **Ordinary point**：$\lim_{x\to c}f(x)=f(c)$。
2. **Hole or relocated point**：极限存在，但 $f(c)$ 不存在或 $f(c)\ne L$。
3. **Mismatch from two sides**：左右趋近不同，因此双侧极限不存在。

课堂“去老师家拜访”的类比可以这样保留：

```text
the address people approach = the limit
whether the teacher is actually there = the function value
```

> **A limit follows the surrounding graph, not the isolated dot.**
>
> 求极限要沿着附近图像看趋势，不要只盯该点的实心点。

---

## 5. One-Sided Limits / 左右极限

左极限：

$$
\lim_{x\to c^-}f(x)=L_-.
$$

$x\to c^-$ 表示用小于 $c$ 的数靠近 $c$，例如 $c-0.1,c-0.01,c-0.001$。

右极限：

$$
\lim_{x\to c^+}f(x)=L_+.
$$

$x\to c^+$ 表示用大于 $c$ 的数靠近 $c$。

双侧极限存在的充要条件是

$$
\boxed{
\lim_{x\to c}f(x)=L
\iff
\lim_{x\to c^-}f(x)=\lim_{x\to c^+}f(x)=L
}
$$

如果 $L_-\ne L_+$，则

$$
\lim_{x\to c}f(x)\text{ does not exist (DNE).}
$$

### Three questions when reading a graph / 看图时分开问三次

```text
1. From the left, where does the graph go?
2. From the right, where does the graph go?
3. Where is the filled point at x=c?
```

不要把这三个答案自动当成同一个数。

---

## 6. Infinite Behavior / 无穷行为

### Input goes to infinity / 输入走向无穷

$$
\lim_{x\to\infty}f(x)=L
$$

表示沿图像向右走得越来越远时，函数值趋近 $L$。类似地，$x\to-\infty$ 是向左观察。

例如

$$
\lim_{x\to\pm\infty}\frac1{x^2}=0.
$$

这里的 $y=0$ 描述 horizontal asymptotic behavior。

### Output grows without bound / 输出无界增长

$$
\lim_{x\to c^+}f(x)=+\infty
$$

表示 $x$ 从右侧靠近 $c$ 时，$f(x)$ 可以变得任意大。$-\infty$ 同理表示任意大的负值。

关键纠正：

$$
\lim_{x\to0}\frac1x
$$

不是 $+\infty$，因为

$$
\lim_{x\to0^-}\frac1x=-\infty,
\qquad
\lim_{x\to0^+}\frac1x=+\infty.
$$

左右不一致，所以双侧极限 DNE。

---

## 7. Limit Laws and Composition / 极限运算与复合

如果

$$
\lim_{x\to c}f(x)=L,
\qquad
\lim_{x\to c}g(x)=M,
$$

并且相关运算有定义，则：

$$
\lim_{x\to c}[f(x)\pm g(x)]=L\pm M,
$$

$$
\lim_{x\to c}f(x)g(x)=LM,
$$

$$
\lim_{x\to c}\frac{f(x)}{g(x)}=\frac LM
\quad(M\ne0),
$$

$$
\lim_{x\to c}[f(x)]^n=L^n.
$$

课堂把它压缩成“只要极限存在，就按正常代数运算”。更精确地说：**运算还必须在目标值附近有定义，除法的分母极限不能是零。**

### Composite limit / 复合极限

如果 $g(x)\to L$，且外层函数 $f$ 在 $L$ 处连续，那么

$$
\lim_{x\to c}f(g(x))=f(L).
$$

若 $f$ 在 $L$ 处左右行为不同，还必须追踪 $g(x)$ 是从 $L^-$ 还是 $L^+$ 靠近。这就是课堂挑战题的核心：

```text
x approaches 2 from the left
-> g(x) approaches 1 from above
-> use the right-hand limit of f at 1
```

### Watch Out: $f(-x)$ is not $-f(x)$

除非已知 $f$ 是 odd function，否则

$$
f(-x)\ne-f(x).
$$

若 $x\to5$，则 $-x\to-5$，所以 $f(-x)$ 要寻找 $f$ 在输入 $-5$ 附近的行为。课堂例题因此得到

$$
\lim_{x\to5}[f(-x)+3g(x)]=4+3(5)=19.
$$

---

## 8. Limit Evaluation Decision Map / 求极限方法选择图

```text
Start: substitute the approaching value
|
+-- ordinary finite value
|     -> stop
|
+-- 0/0
|     -> [[Indeterminate Form]]
|     -> factor / rationalize / use a known limit
|
+-- infinity/infinity
|     -> [[Indeterminate Form]]
|     -> for rational functions, compare leading terms
|
+-- bounded function trapped between two functions
|     -> Squeeze Theorem
|
+-- nonzero/0
      -> inspect one-sided signs
      -> +infinity, -infinity, or two-sided DNE
```

### Method 1: Direct substitution / 直接代入

如果函数在目标点连续，直接代入即可：

$$
\lim_{x\to1}\frac{2x+1}{3x-2}=\frac{3}{1}=3.
$$

直接代入不是“低级方法”，而是所有题的第一步诊断。

### Method 2: Factor and cancel for $0/0$ / 因式分解约分

$$
\lim_{x\to1}\frac{x^2-1}{x-1}
=\lim_{x\to1}\frac{(x-1)(x+1)}{x-1}
=\lim_{x\to1}(x+1)=2.
$$

这里不是在 $x=1$ 时约掉零；而是在 $x\ne1$ 但任意接近 $1$ 的邻域中化简表达式。

课堂例题：

$$
\lim_{x\to-3}\frac{x^2+x-6}{x+3}
=\lim_{x\to-3}\frac{(x+3)(x-2)}{x+3}
=-5.
$$

另一个例子：

$$
\lim_{x\to-3}\frac{x^2-2x-15}{x^2-9}
=\lim_{x\to-3}\frac{(x-5)(x+3)}{(x-3)(x+3)}
=\frac43.
$$

### Method 3: Leading-term comparison at infinity / 无穷处比较最高次项

对于 rational function，$x\to\pm\infty$ 时最高次项支配整体行为：

$$
\lim_{x\to\infty}\frac{3-x}{4+x+x^2}
\sim
\lim_{x\to\infty}\frac{-x}{x^2}=0.
$$

常用结论：

| Numerator degree vs denominator degree | Limit behavior |
|---|---|
| lower degree | $0$ |
| equal degree | ratio of leading coefficients |
| higher degree | usually unbounded; inspect sign and direction |

课堂还强调了根式中的计算稳定性，例如

$$
\frac{\sqrt{9x^4+\text{lower terms}}}{4x^2+\text{lower terms}}
\sim\frac{3x^2}{4x^2}=\frac34.
$$

注意 $\sqrt{x^2}=|x|$，尤其在 $x\to-\infty$ 时不能直接写成 $x$。

### Method 4: The fundamental trigonometric limit / 重要三角极限

$$
\boxed{\lim_{u\to0}\frac{\sin u}{u}=1}
$$

这等价于在 $u\to0$ 时 $\sin u\sim u$。例如：

$$
\lim_{x\to0}\frac{\sin(4x)}x
=\lim_{x\to0}\frac{4x}{x}=4.
$$

这里必须使用 radians；用 degrees 时结论不成立。

### Method 5: Squeeze Theorem / 夹逼定理

如果目标函数被两边夹住：

$$
g(x)\le f(x)\le h(x),
$$

并且

$$
\lim_{x\to c}g(x)=\lim_{x\to c}h(x)=L,
$$

那么

$$
\boxed{\lim_{x\to c}f(x)=L.}
$$

课堂例子给出

$$
1-\frac{x^2}{4}\le u(x)\le1+\frac{x^2}{2}.
$$

当 $x\to0$ 时，左右两端都趋近 $1$，所以

$$
\lim_{x\to0}u(x)=1.
$$

> **If both walls approach the same destination, the trapped function has nowhere else to go.**
>
> 如果两侧边界都趋向同一个值，被夹在中间的函数也只能趋向该值。

---

## 9. Continuity / 连续性

函数 $f$ 在 $x=c$ 处连续，需要同时满足：

1. $f(c)$ is defined.
2. $\lim_{x\to c}f(x)$ exists.
3. $\lim_{x\to c}f(x)=f(c)$.

也可以压缩成课堂的“三值相等”：

$$
\boxed{
\lim_{x\to c^-}f(x)
=\lim_{x\to c^+}f(x)
=f(c)
}
$$

### Piecewise example / 分段函数例题

设

$$
f(x)=
\begin{cases}
10-2x-x^2,&x\le1,\\
3+4e^{x-1},&x>1.
\end{cases}
$$

在 $x=1$：

$$
\lim_{x\to1^-}f(x)=10-2-1=7,
$$

$$
\lim_{x\to1^+}f(x)=3+4e^0=7,
$$

$$
f(1)=7.
$$

三者相等，所以 $f$ 在 $x=1$ continuous。

课堂另一题用 continuity 反求参数：左侧值为 $12$，右侧值为 $18+k$，因此

$$
12=18+k\Rightarrow k=-6.
$$

---

## 10. Three Types of Discontinuity / 三种间断

### 1. Removable discontinuity / 可去间断

左右极限相同，但该点缺失或放在错误高度：

$$
\lim_{x\to c}f(x)=L,
\qquad
f(c)\text{ undefined or }f(c)\ne L.
$$

只要把 $f(c)$ 重新定义为 $L$，这个 hole 就能补上，因此叫 removable。

### 2. Jump discontinuity / 跳跃间断

左右极限都是有限值，但不相等：

$$
\lim_{x\to c^-}f(x)\ne\lim_{x\to c^+}f(x).
$$

图像从一个高度跳到另一个高度。

### 3. Infinite discontinuity / 无穷间断

至少一侧函数值趋向 $+\infty$ 或 $-\infty$。通常对应 vertical asymptote。

```text
removable: same destination, wrong or missing point
jump: two finite destinations
infinite: at least one side grows without bound
```

---

## 11. Fidelity Notes and Corrections / 原稿纠错

| Transcript wording | Accurate mathematical version |
|---|---|
| “$1/0$ 就是无穷” | 除以零本身没有定义；在 limit 中必须检查从哪侧靠近及符号，结果可能是 $+\infty$、$-\infty$ 或 DNE。 |
| “$\lim_{x\to0}1/x=\infty$” | 左极限为 $-\infty$，右极限为 $+\infty$，所以双侧极限 DNE。 |
| “无限属于不存在” | 更准确地说：不存在有限极限，但可以用 $f(x)\to\pm\infty$ 描述无界行为。 |
| “加比准则 / spread theory” | 正确名称是 **夹逼定理 / Squeeze Theorem**。 |
| “removal discontinuity” | 标准术语是 **removable discontinuity**。 |
| “找最大”适用于所有无穷极限 | 本课方法主要适用于 rational functions 的 leading terms；根式、指数、对数等需要分别分析。 |
| 复合函数直接把内层极限代入外层 | 还需要外层函数在目标值处连续；若有跳跃，应追踪内层是从左还是从右靠近。 |

---

## 12. Deep Phrases / 深句对应表

| Trigger | The sentence it should recall / 对应句 |
|---|---|
| Limit | A limit describes nearby behavior, not necessarily the value at the point. / 极限描述点附近的趋势，不一定等于点值。 |
| Left-hand and right-hand limits | A two-sided limit exists only when both sides approach the same value. / 只有左右趋近同一个值，双侧极限才存在。 |
| $0/0$ | Zero over zero is a question, not an answer. / $0/0$ 说明直接代入信息不足，不是答案。 |
| Leading term | At infinity, the fastest-growing terms control a rational function. / 在无穷远处，有理函数由增长最快的项主导。 |
| Squeeze Theorem | A trapped function follows two boundaries that share the same limit. / 两侧边界趋向同一点，中间函数只能跟着过去。 |
| Continuity | Nearby behavior and the actual point value agree. / 连续就是附近趋势与真实点值完全接上。 |
| Removable discontinuity | The trend is intact; only the point is missing or misplaced. / 趋势没有断，只是那个点缺失或放错了。 |

---

## 13. Video Companion / 对照课堂视频

| Time | Content | Reading focus |
|---|---|---|
| 00:00-10:41 | 设备、基础调查与资料说明 | 无需回看 |
| 10:41-17:42 | Unit 1 定位与极限动机 | 看“金条减半”如何引出 approach |
| 17:42-44:56 | 图像、左右极限与无穷行为 | 始终分开看 left / right / point value |
| 44:56-59:49 | limit laws 与 composite limits | 特别注意 $f(-x)$ 和复合中的方向 |
| 59:49-01:30:43 | 直接代入、$0/0$、$\infty/\infty$ | 先识别 form，再选择方法 |
| 01:30:43-01:44:30 | $\sin u/u$ 与 Squeeze Theorem | 记整体变量 $u\to0$，不要只认字母 $x$ |
| 01:47:06-02:00:18 | continuity 与 discontinuity | 用“三值相等”连接图像和代数 |
| 02:00:18-结束 | 总结、作业与答疑 | 按需回看 |

---

## 14. Knowledge Graph Connections / 知识图谱连接

### Formal course branch / 正课分支

- [[微积分BC Orientation-考试结构与课程地图]] 提供整门课程地图；本课正式进入 Unit 1。
- [[Limits]] 是本课中心概念页。
- [[Indeterminate Form]] 解释为什么 $0/0$ 与 $\infty/\infty$ 需要继续处理。
- [[L'Hôpital's Rule]] 是后续处理部分未定式的工具，但使用前仍要确认条件。
- [[Derivatives]] 将在下一阶段把 average rate of change 通过 limit 变成 instantaneous local change。
- [[微积分BC第2次正课-极限应用与导数入门]] 先完成 asymptotes 与 IVT，再正式把 secant slope 的 limit 定义成 derivative。

### 3Blue1Brown bridge / 视觉直觉分支

- [[02 - The Paradox of the Derivative]]：limit 如何把 secant slope 推向 tangent slope。
- [[07 - Limits, L'Hopital's Rule, and Epsilon-Delta Definitions]]：从附近趋势、hole 和未定式走向更正式的 limit language。

这两条连接来自现有笔记的 Wiki connection sections；本次未读取其完整正文。

---

## 15. Confusion / Questions

- [ ] 能否在图像上分别指出 left-hand limit、right-hand limit 与 function value？
- [ ] 看到 $0/0$ 时，能否解释为什么它不是 $0$、$1$ 或 infinity？
- [ ] 看到 $x\to\pm\infty$ 的 rational function 时，能否判断由哪些 leading terms 主导？
- [ ] 能否用三个条件完整判断某点 continuity？
- [ ] 能否只看左右行为区分 removable、jump 与 infinite discontinuity？

---

## 16. After-Class Compression / 看完压缩版

```text
Limit asks where nearby values go.

Two-sided limit exists
<=> left-hand limit = right-hand limit.

Continuity at c
<=> left limit = right limit = f(c).

Evaluation order:
substitute
-> if 0/0, simplify
-> if infinity/infinity rational form, compare leading terms
-> if sin(u)/u with u->0, use the fundamental limit
-> if trapped, use Squeeze Theorem.

Discontinuities:
removable = hole or misplaced point
jump = finite side limits disagree
infinite = at least one side is unbounded
```

## 17. Links / 链接

- [[UBC Knowledge Graph]]
- [[AP Calculus BC]]
- [[Limits]]
- [[Indeterminate Form]]
- [[L'Hôpital's Rule]]
- [[Derivatives]]
- [[02 - The Paradox of the Derivative]]
- [[07 - Limits, L'Hopital's Rule, and Epsilon-Delta Definitions]]
- [[微积分BC第2次正课-极限应用与导数入门]]
