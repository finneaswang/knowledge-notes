---
title: "AP电磁学第4次正课 - 电势能与电势"
description: "A connected bilingual learning note about AP电磁学第4次正课 - 电势能与电势."
publish: true
tags: [open-notes, physics-course]
---
# AP电磁学第4次正课 - 电势能与电势

## Reading Guide / 阅读说明

这份笔记以“物理 C 电磁第 4 次正课”的 transcript 为核心。课堂前半段复习 [[Gauss's Law]] 的标准模型，并补上两个无限大带电板的叠加；后半段正式从 [[Electric Field]] 过渡到 [[Electric Potential]]。

这节课的真正脉络是：

```text
Gauss's law models
-> fields of parallel sheets
-> force and potential energy
-> work-energy relation
-> electric potential energy U
-> electric potential V
-> scalar superposition
-> potential of a charged ring
```

阅读时要抓住老师反复强调的一组对应：

```text
force F          <-> potential energy U
electric field E <-> electric potential V
vector           <-> scalar
```

## 1. What This Lecture Is About / 这节课在讲什么

这节课有两个任务。

第一，复习上一讲的 [[Gauss's Law]]。老师让同学重新推导 conducting sphere、uniform insulating sphere、infinite line charge 和 infinite sheet，不是为了再背一遍公式，而是训练同一套动作：

```text
recognize symmetry
-> choose a Gaussian surface
-> identify the surfaces carrying flux
-> calculate enclosed charge
-> solve for E
```

第二，进入 electric potential。老师没有直接丢出 $V=kQ/r$，而是先从力与场的关系类比：电场描述“如果把电荷放进来，它每单位电荷会受到多大的力”；电势描述“如果把电荷放进来，它每单位电荷会具有多少电势能”。

> **Electric field is force per unit charge; electric potential is potential energy per unit charge.**

中文理解：$E$ 和 $V$ 都是在描述 source charges 建立的空间背景。试探电荷只是用来读取这个背景，不是背景存在的原因。

## 2. Class Flow / 课堂脉络

1. 复习 conducting sphere：静电平衡时 excess charge 在表面，内部 $E=0$。
2. 复习 uniform insulating solid sphere：内部 $Q_{\text{enc}}\propto r^3$，所以 $E\propto r$。
3. 复习 infinite line charge：圆柱高斯面给出 $E\propto 1/r$。
4. 复习 infinite sheet：pillbox 给出 $E=\sigma/(2\epsilon_0)$，与距离无关。
5. 用 superposition 分析两个平行无限大带电板：同号与异号分布的内外场不同。
6. 说明 cubic charge distribution 缺乏足够对称性，[[Gauss's Law]] 成立却不能直接解 $E$。
7. 用 $F=qE$ 引出“field 是空间背景”。
8. 类比定义 electric potential energy：位置改变会改变系统储存的能量。
9. 复习 conservative force、work 与 potential energy：$W_c=-\Delta U$。
10. 从 Coulomb force 推出两点电荷的电势能：$U=kq_1q_2/r$。
11. 用能量守恒处理带电粒子从不同位置释放的问题。
12. 区分 electric force 与 external force 的做功符号。
13. 多电荷体系的 potential energy 按“每一对电荷”相加且不重复计数。
14. 定义 [[Electric Potential]]：$V=U/q$，单位 volt，也就是 J/C。
15. 多个 source charges 的电势直接做代数和，因为 $V$ 是 scalar。
16. 推导 uniformly charged ring 轴线上一点的 electric potential，并与电场积分比较。

## 3. Gauss's Law Review / 高斯定律模型复习

### Knowledge Point 1: A Conducting Sphere Has Zero Electric Field Inside

**Video:** 00:01:20-00:10:57

静电平衡时，导体中的自由电荷会移动。若 excess charges 留在内部，它们之间的排斥会继续推动电荷移动；平衡后 excess charge 位于外表面。

对半径为 $R$、总电荷为 $Q$ 的 conducting sphere：

$$
E(r)=
\begin{cases}
0, & r<R\\[4pt]
\dfrac{1}{4\pi\epsilon_0}\dfrac{Q}{r^2}, & r\ge R
\end{cases}
$$

内部取球形 Gaussian surface 时：

$$
Q_{\text{enc}}=0
$$

由 spherical symmetry，球面上 $E$ 相同且沿径向：

$$
E(4\pi r^2)=\frac{Q_{\text{enc}}}{\epsilon_0}=0
$$

所以 $E=0$。

> **In electrostatic equilibrium, the electric field inside a conductor is zero.**

课堂把它连接到 Faraday cage / 法拉第笼：封闭导体可以屏蔽静电场。这里要精确一点，课堂此处主要由 Gauss's law 证明的是 electrostatic shielding；一般随时间变化的 electromagnetic shielding 还涉及材料、频率与趋肤效应，不能只靠这一条静电结论全部概括。

图像记忆：

- $r<R$：$E=0$；
- $r=R$：由内侧的 0 跳到外侧 $kQ/R^2$；
- $r>R$：按 $1/r^2$ 衰减。

### Knowledge Point 2: A Uniform Insulating Sphere Has $E\propto r$ Inside

**Video:** 00:10:58-00:14:33

绝缘体中的电荷不能像导体自由移动。若一个半径为 $R$ 的 insulating solid sphere 均匀带有总电荷 $Q$，电荷分布在整个体积内。

体电荷密度为：

$$
\rho=\frac{Q}{\frac43\pi R^3}
$$

对内部半径 $r<R$ 的 Gaussian surface：

$$
Q_{\text{enc}}=\rho\left(\frac43\pi r^3\right)
=Q\frac{r^3}{R^3}
$$

代入 [[Gauss's Law]]：

$$
E(4\pi r^2)=\frac{Q}{\epsilon_0}\frac{r^3}{R^3}
$$

得到：

$$
\boxed{E=\frac{Qr}{4\pi\epsilon_0R^3}=\frac{kQr}{R^3}},\qquad r<R
$$

外部则包住全部电荷：

$$
\boxed{E=\frac{kQ}{r^2}},\qquad r\ge R
$$

因此 $E(r)$ 在球内线性增加，在表面达到最大值，然后按 $1/r^2$ 减小。两段在 $r=R$ 连续：

$$
\frac{kQR}{R^3}=\frac{kQ}{R^2}
$$

> **For a uniform solid sphere, enclosed charge grows as $r^3$, but Gaussian area grows as $r^2$, so the internal field grows as $r$.**

这句话比死背内部公式更重要：一个 $r^3$ 除以一个 $r^2$，留下 $r$。

### Knowledge Point 3: An Infinite Line Charge Produces a $1/r$ Field

**Video:** 00:15:14-00:20:29

对 linear charge density 为 $\lambda$ 的 infinite line charge，选择半径 $r$、长度 $L$ 的 coaxial cylinder。

- electric field 沿径向；
- 两个 circular end caps 上，$\vec E$ 与 $d\vec A$ 垂直，所以 flux 为零；
- curved side 上，$E$ 为常量且与 $d\vec A$ 平行。

因此：

$$
\oint \vec E\cdot d\vec A=E(2\pi rL)
$$

包住的电荷：

$$
Q_{\text{enc}}=\lambda L
$$

所以：

$$
E(2\pi rL)=\frac{\lambda L}{\epsilon_0}
$$

$$
\boxed{E=\frac{\lambda}{2\pi\epsilon_0r}}
$$

> **The end caps carry no flux because the electric field is parallel to them.**

中文理解：不是“圆柱有三个面所以三个面都算”，而是只算电场真正穿过的 curved surface。

### Knowledge Point 4: An Infinite Sheet Produces a Distance-Independent Field

**Video:** 00:20:30-00:24:56

对 surface charge density 为 $\sigma$ 的 infinite sheet，取跨过薄板的 pillbox Gaussian surface，两个底面积均为 $A$。

两个 flat faces 都有 outward flux：

$$
\Phi_E=EA+EA=2EA
$$

包住的电荷为：

$$
Q_{\text{enc}}=\sigma A
$$

所以：

$$
2EA=\frac{\sigma A}{\epsilon_0}
$$

$$
\boxed{E=\frac{\sigma}{2\epsilon_0}}
$$

式子里没有距离，因此理想 infinite sheet 的 electric field 与高度无关。

> **The field of an infinite sheet is uniform because increasing the distance does not change the result of Gauss's law.**

这里的 distance independence 属于“无限大平面”的理想模型。有限平面在足够远处会逐渐表现得更像 point charge，不能把这个结论无限制套用。

### Knowledge Point 5: Two Infinite Sheets Must Be Added by Direction

**Video:** 00:24:57-00:30:03

单个正电薄板的 field 向两侧远离薄板；单个负电薄板的 field 向两侧指向薄板。每一块板在任一侧产生的大小都是：

$$
E_0=\frac{|\sigma|}{2\epsilon_0}
$$

#### Two sheets with the same sign / 两个同号板

- 两板之间：方向相反，互相抵消，$E=0$；
- 两板外侧：方向相同，叠加为 $2E_0=|\sigma|/\epsilon_0$。

#### Two sheets with opposite signs / 两个异号板

- 两板之间：方向相同，从 positive plate 指向 negative plate，叠加为

$$
E=2E_0=\frac{|\sigma|}{\epsilon_0}
$$

- 两板外侧：方向相反，互相抵消，$E=0$。

这就是理想 parallel plates 在板间建立 [[Uniform Electric Field]] 的来源。

> **For oppositely charged parallel sheets, the fields add between the sheets and cancel outside.**

### Knowledge Point 6: Gauss's Law Can Be True Without Being Useful for Solving $E$

**Video:** 00:31:03-00:33:11

课堂用 charged cube 提醒：你当然可以在立方体外取 closed surface，也永远有

$$
\oint\vec E\cdot d\vec A=\frac{Q_{\text{enc}}}{\epsilon_0}
$$

但立方体附近通常没有足够的 spherical、cylindrical 或 planar symmetry，无法证明 Gaussian surface 上每一点的 $E$ 相同，也就不能简单写成 $EA$ 后直接求 $E$。

> **Gauss's law is always valid, but symmetry determines whether it can directly solve for the electric field.**

## 4. From Force to Potential Energy / 从力走向势能

### Knowledge Point 7: Field Describes the Background Left After the Test Charge Is Removed

**Video:** 00:35:44-00:41:27

电场的定义：

$$
\vec E=\frac{\vec F}{q}
$$

或者写成带电粒子在已知电场中的受力：

$$
\vec F=q\vec E
$$

具体的 electric force 需要 source charge 与 test charge 共同存在；但即使拿走 test charge，source charge 建立的 field 仍然存在。

老师用“程序的背景”来类比：空间中每个位置都预先带着一个 $E$ 值。将任意试探电荷 $q$ 放入后，就能通过 $\vec F=q\vec E$ 读出它的受力。

能量也有同样结构。空间中每个位置可以预先带着一个 $V$ 值；将电荷 $q$ 放入后，通过

$$
U=qV
$$

读出这个 charge-source system 的 electric potential energy。

> **The field and the potential belong to the spatial background created by source charges; force and potential energy belong to the interaction with a specific charge.**

### Knowledge Point 8: Conservative Force Work Is the Negative Change in Potential Energy

**Video:** 00:42:11-00:47:46

保守力的核心特点：做功只取决于起点和终点，与路径无关。对于 electric force 或 gravity：

$$
\boxed{W_{\text{conservative}}=-\Delta U}
$$

因此：

- conservative force 做正功 $\Rightarrow \Delta U<0$；
- conservative force 做负功 $\Rightarrow \Delta U>0$。

但 external force 要单独判断。若外力缓慢移动物体，使 $\Delta K=0$，则：

$$
W_{\text{ext}}=\Delta U
$$

课堂中最容易混淆的是“到底在问谁做功”：

```text
electric force:  W_E = -Delta U
slow external force: W_ext = +Delta U
```

> **Always identify the force named in the question before assigning the sign of work.**

### Knowledge Point 9: Potential Energy Is Related to Force by an Integral

**Video:** 00:47:47-01:02:57

变力不能直接使用 $W=Fd$。一般形式是：

$$
W=\int \vec F\cdot d\vec r
$$

而 potential energy change 满足：

$$
\Delta U=-\int_A^B\vec F\cdot d\vec r
$$

一维径向问题也可写为：

$$
F_r=-\frac{dU}{dr}
$$

这句话的含义是：potential energy graph 的负斜率给出 force。

对两点电荷：

$$
F_r=\frac{kq_1q_2}{r^2}
$$

选定：

$$
U(\infty)=0
$$

则从无穷远处积分到距离 $r$：

$$
U(r)-U(\infty)=-\int_{\infty}^{r}\frac{kq_1q_2}{r'^2}\,dr'
$$

得到：

$$
\boxed{U(r)=\frac{kq_1q_2}{r}}
$$

注意最终公式前面没有额外负号；符号由 $q_1q_2$ 决定：

- like charges: $q_1q_2>0\Rightarrow U>0$；
- unlike charges: $q_1q_2<0\Rightarrow U<0$。

课堂推导中老师一度把图像和符号画反，随后用“同号电荷松手后会彼此远离并获得动能”检查并修正。这是很好的 self-check：

```text
like charges near each other -> can release positive kinetic energy
-> initial U must be greater than U(infinity)=0
-> U must be positive
```

### Knowledge Point 10: Zero Potential Energy Is a Reference, Not Necessarily a Minimum

在 near-Earth gravity 中常把某高度选作 $U_g=0$，容易误以为“零势能就是没有势能或最小势能”。电势能不是这样。

对异号电荷：

$$
U=\frac{kq_1q_2}{r}<0
$$

所以 $U=0$ 只是选定的 reference level。在本课的 point-charge convention 中，通常选 $U(\infty)=0$。

> **Potential energy is defined relative to a reference; zero does not mean the interaction has disappeared everywhere.**

更准确地说：当 $r\to\infty$ 时，两点电荷的 interaction potential energy 趋近 0；这不等于“宇宙中没有任何能量”。

## 5. Work and Energy Problems / 做功与能量题

### Knowledge Point 11: Bringing Like Charges Together Requires Positive External Work

**Video:** 01:02:57-01:08:39

若两个同号电荷最初相距无穷远，缓慢把它们移到间距 $d$：

$$
U_i=0
$$

$$
U_f=\frac{kq_1q_2}{d}>0
$$

因为移动得足够慢，$\Delta K=0$，所以：

$$
\boxed{W_{\text{ext}}=\Delta U=\frac{kq_1q_2}{d}}
$$

不要再乘 2。系统中这一对电荷的 interaction energy 只计算一次。

### Knowledge Point 12: Mechanical Energy Is Conserved When Only Conservative Forces Do Work

**Video:** 01:18:42-01:29:44

如果只有 electric force 这类 conservative force 做功：

$$
K+U=\text{constant}
$$

变化量形式：

$$
\boxed{\Delta K+\Delta U=0}
$$

这不等于 $K+U=0$。前者说总机械能保持某个常数；只有在那个常数恰好选成 0 时，才会得到 $K+U=0$。

对于正试探电荷靠近负 source charge：

- $U=kQq/r$ 变得更负；
- $\Delta U<0$；
- electric force 做正功；
- kinetic energy 增加同样大小。

做比较题时，比起分别求所有能量，常可直接比较 potential difference：

$$
K_f-K_i=-(U_f-U_i)=U_i-U_f
$$

### Knowledge Point 13: Work Uses the Component of Displacement Parallel to Force

**Video:** 01:29:45-01:39:25

在 uniform electric field 中：

$$
W=\vec F\cdot\vec L=FL\cos\theta
$$

若粒子带负电，先用

$$
\vec F_E=q\vec E
$$

判断 electric force 与 field 方向相反。若粒子匀速移动，net force 为零，因此 external force 与 electric force 方向相反、大小相等。

这类题按四步做：

1. 根据 charge sign 画出 $\vec F_E$。
2. 由 constant velocity 得到 $\vec F_{\text{ext}}=-\vec F_E$。
3. 找所问 force 与 displacement 的夹角。
4. 使用 $W=FL\cos\theta$，再连接 $W_E=-\Delta U$ 或 $W_{\text{ext}}=\Delta U$。

> **Work depends only on the displacement component parallel to the force.**

## 6. Electric Potential / 电势

### Knowledge Point 14: Electric Potential Is Potential Energy per Unit Charge

**Video:** 01:43:18-01:45:59

[[Electric Potential]] 定义为：

$$
\boxed{V=\frac{U}{q}}
$$

因此：

$$
U=qV
$$

单位：

$$
1\ \text{V}=1\ \text{J/C}
$$

它与 electric field 的对应关系是：

$$
\vec E=\frac{\vec F}{q},\qquad V=\frac{U}{q}
$$

| Interaction quantity / 相互作用量 | Background quantity / 背景量 |
|---|---|
| electric force $\vec F$ | electric field $\vec E=\vec F/q$ |
| electric potential energy $U$ | electric potential $V=U/q$ |

> **Electric field tells how much force each unit charge would feel; electric potential tells how much potential energy each unit charge would have.**

### Knowledge Point 15: The Potential of a Point Charge Is $kQ/r$

对 source charge $Q$ 与 test charge $q$：

$$
U=\frac{kQq}{r}
$$

除以 $q$：

$$
\boxed{V=\frac{kQ}{r}}
$$

因此：

- positive source charge creates positive $V$；
- negative source charge creates negative $V$；
- $r\to\infty$ 时 $V\to0$。

电势的正负不是方向。$V$ 是 scalar，负号表示它低于选定的零电势 reference。

### Knowledge Point 16: Electric Potential Adds Algebraically

**Video:** 01:45:34-01:53:13

多个点电荷在 P 点产生的总电势：

$$
\boxed{V(P)=\sum_i\frac{kQ_i}{r_i}}
$$

因为 $V$ 是 scalar，不需要分解方向，也不需要 vector triangle；但必须保留每个 source charge 的正负号。

课堂的代入顺序值得保留：

$$
V_A=\frac{kQ_1}{r_{1A}}+\frac{kQ_2}{r_{2A}}
$$

若 $Q_2<0$，仍先写“加上第二个电势”，然后把 $Q_2$ 的负值代入。这样比凭感觉直接写减号更不容易出错。

对于等量异号电荷 $+Q$ 与 $-Q$，所有到两电荷距离相同的点满足：

$$
V=\frac{kQ}{r}+\frac{k(-Q)}{r}=0
$$

因此 perpendicular bisector 上的电势为零。但要注意：

> **Zero electric potential does not imply zero electric field.**

中垂线上两个 field vectors 的某些分量会相加，所以 $E$ 一般不为零。$V=0$ 是 scalar cancellation；$E=0$ 需要 vector cancellation。

### Knowledge Point 17: Multi-Charge Potential Energy Counts Each Pair Once

**Video:** 01:39:26-01:43:17

如果 $Q_1$、$Q_2$ 已固定，再从无穷远处把 $Q_3$ 放到某位置，外力缓慢做功等于 $Q_3$ 的 potential energy：

$$
U_3=\frac{kQ_1Q_3}{r_{13}}+\frac{kQ_2Q_3}{r_{23}}
$$

若计算完整多电荷体系的总 potential energy，则要把所有 unordered pairs 各算一次：

$$
\boxed{U_{\text{system}}=\sum_{i<j}\frac{kq_iq_j}{r_{ij}}}
$$

例如三个电荷：

$$
U=\frac{kq_1q_2}{r_{12}}+\frac{kq_1q_3}{r_{13}}+\frac{kq_2q_3}{r_{23}}
$$

不能把 $q_1q_2$ 和 $q_2q_1$ 都算，因为它们是同一对 interaction。

## 7. Potential of a Charged Ring / 带电圆环轴线电势

### Knowledge Point 18: Scalar Integration Makes the Ring Potential Simpler Than the Ring Field

**Video:** 01:53:14-01:58:57

设 uniformly charged ring 半径为 $a$，总电荷为 $Q$。求轴线上距离圆心为 $x$ 的 P 点电势。

圆环上任意微元 $dq$ 到 P 点距离都相同：

$$
r=\sqrt{x^2+a^2}
$$

微元产生的电势：

$$
dV=\frac{k\,dq}{r}
$$

因为 $r$ 对圆环上每个 $dq$ 都相同，可提出积分：

$$
V=\int dV
=\frac{k}{r}\int dq
$$

而：

$$
\int dq=Q
$$

所以：

$$
\boxed{V(x)=\frac{kQ}{\sqrt{x^2+a^2}}}
$$

若从 linear charge density 展开：

$$
\lambda=\frac{Q}{2\pi a},\qquad dq=\lambda\,ds
$$

则：

$$
V=\frac{k}{\sqrt{x^2+a^2}}\int_0^{2\pi a}\lambda\,ds
=\frac{kQ}{\sqrt{x^2+a^2}}
$$

与 [[Charged Ring]] 的 electric field 积分比较：

- field 是 vector，横向分量成对抵消，只剩轴向分量；必须投影并积分；
- potential 是 scalar，每个 $dV$ 直接代数相加，不需要分量分解。

> **Electric field requires vector addition; electric potential requires scalar addition.**

这就是为什么同一个圆环，$V$ 的积分比 $E$ 的积分干净得多。

## 8. Deep Phrases / 深句对应表

| English sentence | 中文对应理解 |
|---|---|
| Electric field is force per unit charge. | 电场是单位电荷在该位置会受到的力。 |
| Electric potential is potential energy per unit charge. | 电势是单位电荷在该位置会具有的电势能。 |
| The field and potential describe the background created by source charges. | 场和势描述场源电荷在空间中建立的背景。 |
| Conservative-force work is the negative change in potential energy. | 保守力做正功时，势能减少同样大小。 |
| Slow external work equals the change in potential energy. | 缓慢外移且动能不变时，外力做功变成势能变化。 |
| The sign of electric potential energy comes from the product of the charges. | 电势能正负由 $q_1q_2$ 决定。 |
| Zero potential is a reference, not necessarily a minimum. | 零势能只是参考值，不一定是最小值。 |
| Potential is a scalar, so contributions add algebraically. | 电势是标量，贡献带符号直接相加。 |
| Zero potential does not imply zero electric field. | 电势为零不代表电场为零。 |
| Count each interacting pair exactly once. | 多电荷系统中每一对相互作用只算一次。 |
| Symmetry makes every ring element the same distance from an axial point. | 对称性让圆环上每个电荷微元到轴线上观察点等距。 |

## 9. Common Mistakes / 易错点

### Mistake 1: Using $W=Fd$ for Coulomb force over a long distance

Coulomb force 随 $r$ 改变，必须使用：

$$
W=\int\vec F\cdot d\vec r
$$

只有 uniform field 或足够小位移下力可视作常量时，才可直接写 $W=Fd\cos\theta$。

### Mistake 2: Adding an extra negative sign to $U=kq_1q_2/r$

正确公式：

$$
U=\frac{kq_1q_2}{r}
$$

异号电荷的负值已经来自 $q_1q_2<0$。

### Mistake 3: Confusing electric-force work with external work

$$
W_E=-\Delta U
$$

若缓慢移动且 $\Delta K=0$：

$$
W_{\text{ext}}=+\Delta U
$$

### Mistake 4: Saying $K+U=0$ whenever energy is conserved

正确是：

$$
K+U=\text{constant}
$$

或：

$$
\Delta K+\Delta U=0
$$

### Mistake 5: Treating potential as a vector

不要画 vector triangle，也不要分解 $V_x,V_y$。直接计算：

$$
V=\sum\frac{kQ_i}{r_i}
$$

### Mistake 6: Concluding $E=0$ from $V=0$

$V$ 的正负贡献可能抵消，但 $\vec E$ 的方向结构不同。等量异号点电荷的 perpendicular bisector 就是标准反例。

### Mistake 7: Double-counting pair potential energy

$U_{12}$ 和 $U_{21}$ 是同一个 interaction，不是两份能量。

### Mistake 8: Using Gauss's law to solve every shape

Gauss's law 永远成立，但 charged cube 等缺少足够对称性时不能把 $E$ 从积分中提出。

## 10. Problem-Solving Templates / 题型动作

### A. Point-charge potential energy

1. Choose the reference, usually $U(\infty)=0$.
2. Keep charge signs in $q_1q_2$.
3. Use $U=kq_1q_2/r$.
4. For slow assembly, set $W_{\text{ext}}=\Delta U$.

### B. Energy conservation with electric force

1. Confirm only conservative forces do work.
2. Write $K_i+U_i=K_f+U_f$.
3. Substitute $U=kQq/r$ with signs.
4. Solve for speed or kinetic energy.

### C. Potential from multiple point charges

1. Measure $r_i$ from each source charge to the observation point.
2. Write one term $kQ_i/r_i$ per source.
3. Keep the signs of $Q_i$.
4. Add algebraically.

### D. Potential from a continuous charge distribution

1. Write $dV=k\,dq/r$.
2. Express $dq$ using $\lambda\,dl$, $\sigma\,dA$, or $\rho\,dV$.
3. Use symmetry to identify which quantities are constant.
4. Integrate scalarly; do not add unnecessary vector components.

## 11. Confusion / Questions

1. 为什么 $E$ 是 vector，而 $V$ 是 scalar？
2. 为什么 $W_E=-\Delta U$，但缓慢移动时 $W_{\text{ext}}=+\Delta U$？
3. 为什么同号点电荷的 $U$ 为正、异号点电荷的 $U$ 为负？
4. 为什么选 $U(\infty)=0$ 不意味着零一定是最小势能？
5. 为什么多电荷系统每一对 interaction 只计算一次？
6. 为什么等量异号点电荷的中垂线上 $V=0$，但 $E\ne0$？
7. 为什么圆环电势积分不需要像圆环电场一样分解分量？
8. 为什么 infinite sheet 的电场与距离无关，而 point charge 的电场按 $1/r^2$ 衰减？

## 12. After-Class Compression / 课后压缩版

只记住八句话：

1. Conducting sphere 内部 $E=0$；uniform insulating sphere 内部 $E\propto r$。
2. Infinite line charge 有 $E\propto1/r$；infinite sheet 有 $E=\sigma/(2\epsilon_0)$。
3. Opposite parallel sheets 的场在板间叠加、外侧抵消。
4. $W_E=-\Delta U$；缓慢外力做功满足 $W_{\text{ext}}=\Delta U$。
5. 两点电荷 $U=kq_1q_2/r$，正负由 $q_1q_2$ 决定。
6. [[Electric Potential]] 是 $V=U/q$；点电荷产生 $V=kQ/r$。
7. Electric field 是 vector；electric potential 是 scalar，直接带符号叠加。
8. 带电圆环轴线上 $V=kQ/\sqrt{x^2+a^2}$，因为每个 $dq$ 到观察点等距。

## 13. Connections / 知识网络

### Previous Lectures

- [[AP电磁学第1次正课-电荷库仑定律与电场]]
- [[AP电磁学第2次正课-连续带电体电场与电通量]]
- [[AP电磁学第3次正课-高斯定律与对称带电体]]

### Next Lecture

- [[AP电磁学第5次正课-电势差与电场电势关系]] continues from $V=U/q$ to voltage, $V_B-V_A=-\int_A^B\vec E\cdot d\vec l$, and $\vec E=-\nabla V$.

### Core Physics

- [[Electric Field]]
- [[Electric Force]]
- [[Electric Potential]]
- [[Coulomb's Law]]
- [[Gauss's Law]]
- [[Conducting Sphere]]
- [[Non-Conducting Sphere]]
- [[Uniform Electric Field]]
- [[Charged Ring]]

### Density and Symmetry

- [[Linear Charge Density]]
- [[Surface Charge Density]]
- [[Volume Charge Density]]
- [[Symmetry]]

### Calculus Bridge

- [[Integrals]]
- [[Antiderivative]]
- [[Area Under a Curve]]
- [[Vectors]]

本节把 calculus 用在两个层次：积分 force 得到 potential-energy difference；积分 $dV$ 得到 continuous charge distribution 的总 potential。前者把“力”转成“能量”，后者把许多 tiny scalar contributions 累积成一个总电势。
