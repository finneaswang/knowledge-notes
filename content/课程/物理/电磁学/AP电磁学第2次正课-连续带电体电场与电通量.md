---
title: "AP电磁学第2次正课 - 连续带电体电场与电通量"
description: "A connected bilingual learning note about AP电磁学第2次正课 - 连续带电体电场与电通量."
publish: true
tags: [open-notes, physics-electromagnetism]
---
# AP电磁学第2次正课 - 连续带电体电场与电通量

## Reading Guide / 阅读说明

这份笔记接在 [[AP电磁学第1次正课-电荷库仑定律与电场]] 后面。上一节课建立了 point charge、[[Coulomb's Law]]、[[Electric Field]] 和 [[Electric Field Lines]]；这一节课开始把点电荷推广到连续带电体，用微积分把很多 tiny charges 的场叠加起来。

这节的真实主线是：

```text
point charge field
-> vector superposition
-> dE from dq
-> line / arc / ring charge distributions
-> symmetry
-> flux as the entrance to Gauss's Law
```

我把它按 Obsidian 知识网写，不按逐字稿写。英文保留考试句和核心物理术语，中文负责解释为什么这样设积分。

## 1. What This Lecture Is About / 这节课在讲什么

这节课分三段：

1. 复习 [[Electric Field]] and superposition。
2. 用微积分求连续带电体在某点产生的电场。
3. 预告 [[Electric Flux]] 和后面的 [[Gauss's Law]]。

核心变化是：

```text
single charge Q
-> tiny charge dq
-> tiny field dE
-> integrate all dE
```

上一节的 point charge 公式：

$$
E=\frac{kQ}{r^2}
$$

这一节变成 differential form：

$$
dE=\frac{k\,dq}{r^2}
$$

或者：

$$
dE=\frac{1}{4\pi\epsilon_0}\frac{dq}{r^2}
$$

AP 大题里最重要的不是背最后答案，而是能写清楚：

```text
dq comes from charge density, and dE must be added as a vector.
```

## 2. Class Flow / 课堂脉络

1. Review: charge, induction, [[Coulomb's Law]], [[Electric Field]]。
2. Review: electric field is force per unit positive test charge。
3. Review: fields add vectorially, not scalarly。
4. 练 point-charge superposition。
   - A/B/C 点的电场大小和方向。
   - 两个不等量异号点电荷在 $x$ 轴上哪里可能 $E=0$。
   - [[Electric Field Lines]] 的方向和疏密。
5. 进入连续分布：
   - [[Linear Charge Density]]
   - [[Surface Charge Density]]
   - [[Volume Charge Density]]
6. 推均匀带电直杆轴线上某点的 $E$。
7. 推均匀带电半圆环圆心处的 $E$。
8. 推均匀带电圆环轴线上某点的 $E$。
9. 讲 symmetry：reflection / rotation / translation。
10. 用 symmetry 预告 [[Gauss's Law]]。
11. 开始讲 [[Electric Flux]]：水流穿过面积的类比，然后变成 electric field lines through a surface。

## 3. Core Ideas / 核心知识块

### Knowledge Point 1: Electric Field Superposition Is Vector Addition

**Video:** 00:00:36-00:45:21

#### Point Charge Field

点电荷产生的电场大小：

$$
E=\frac{k|Q|}{r^2}
$$

其中：

$$
k=\frac{1}{4\pi\epsilon_0}
$$

方向用 positive test charge 判断：

- positive source charge: field points away from the charge
- negative source charge: field points toward the charge

中文理解：电场方向不是“正负号自动算出来”的，而是“在该点放一个正试探电荷，它受力的方向”。

#### Superposition Is Vector Addition

多个点电荷在同一点产生的总场：

$$
\vec E_{\text{net}}=\vec E_1+\vec E_2+\cdots
$$

关键句：

```text
Electric fields add vectorially.
```

中文理解：电场是 vector，所以不能只把大小加起来。方向相同才直接加，方向相反要减，斜着的要分解成 components。

#### Example: Two Point Charges at A/B/C

课堂里先做了两个等量异号电荷的点电场叠加。

设两个 charge magnitude 都是：

$$
|Q|=12\,\text{nC}
$$

在 A 点，两个电场方向都向右，所以：

$$
E_A=E_{Q_1}+E_{Q_2}
$$

在 B 点，两个电场方向相反，所以：

$$
E_B=|E_{Q_1}-E_{Q_2}|
$$

在 C 点，两个电场大小相等但方向斜着，需要用三角函数或相似三角形取水平分量：

$$
E_C=2E_1\cos\alpha
$$

如果几何关系给出：

$$
\cos\alpha=\frac{5}{13}
$$

则：

$$
E_C=2E_1\cdot\frac{5}{13}
$$

**Deep sentence / 深句：**

```text
Before calculating, draw the field direction from each source charge.
```

中文理解：先画方向，再代数。方向已经判断完以后，公式里通常用 magnitude。

#### Example: Where Can the Electric Field Be Zero?

两个异号不等量点电荷：

```text
+Q and -4Q
```

问 $x$ 轴上哪里可能有：

$$
E=0
$$

先做 qualitative analysis：

- 中间区域不可能，因为正电荷和负电荷在中间产生的电场方向相同。
- 右侧也不合适，因为离 $-4Q$ 更近且 $|-4Q|$ 更大。
- 只有较小电荷 $+Q$ 的外侧可能抵消。

定量时再代入距离：

$$
\frac{kQ}{4^2}=\frac{k(4Q)}{8^2}
$$

两边都是：

$$
\frac{kQ}{16}
$$

所以那个点可以让电场为零。

**Exam move / 考试动作：**  
先排除不可能区域，再算候选点。不要一上来乱设变量。

### Knowledge Point 2: Electric Field Lines Compress a Vector Field Into a Picture

**Video:** introduced during the point-charge review; revisited at 01:53:35-01:59:12

[[Electric Field Lines]] 记录的是电场方向和相对强弱。

规则：

- field line tangent direction = electric field direction
- denser field lines = stronger electric field
- field lines point away from positive charges
- field lines point toward negative charges

中文理解：某点的电场方向就是电场线在该点的切线方向。

这节课还顺带区分了 field 和 potential：

- electric field 是 vector，跟力的方向有关
- electric potential 是 scalar，后面才会系统讲

老师提到等势线时只是提前埋点：如果试探电荷沿某条线移动时电场力不做功，那么 electric potential 不变。但这节课不展开。

### Knowledge Point 3: A Continuous Charge Distribution Must Be Cut Into $dq$

**Video:** 00:45:22-01:05:24

#### Why We Need Calculus

点电荷公式只适合一个 source charge：

$$
E=\frac{kQ}{r^2}
$$

但真实问题常常是：

- a charged rod
- a charged arc
- a charged ring
- a charged sphere
- a charged plate

这些物体不是单个点。处理方式是把它切成很多 tiny charge elements：

$$
dq
$$

每一小块产生 tiny field：

$$
dE=\frac{k\,dq}{r^2}
$$

最后积分：

$$
\vec E=\int d\vec E
$$

**AP scoring warning / AP 得分提醒：**  
大题里只写最后答案通常不够。要写出微分式：

$$
dE=\frac{k\,dq}{r^2}
$$

以及：

$$
dq=\lambda\,dx
$$

或对应的 charge density relation。

#### Charge Density / 电荷密度

三种常见 density：

| type | symbol | meaning | relation |
|---|---|---|---|
| linear charge density | $\lambda$ | charge per length | $\lambda=\frac{Q}{L}$ |
| surface charge density | $\sigma$ | charge per area | $\sigma=\frac{Q}{A}$ |
| volume charge density | $\rho$ | charge per volume | $\rho=\frac{Q}{V}$ |

这节课主要用：

$$
\lambda=\frac{Q}{L}
$$

和：

$$
dq=\lambda\,dx
$$

如果是弧长：

$$
dq=\lambda\,ds
$$

如果用角度表示弧长：

$$
ds=R\,d\theta
$$

所以：

$$
dq=\lambda R\,d\theta
$$

**Deep sentence / 深句：**

```text
Charge density is the bridge from geometry to charge.
```

中文理解：几何给的是长度、面积、体积；库仑定律要的是电荷量。density 负责把几何小段变成 $dq$。

### Knowledge Point 4: Uniformly Charged Rod on Its Axis

**Video:** 00:45:22-01:05:24

#### Rod Setup

一根均匀带正电的小棒，长度为 $L$，总电荷量为 $Q$。

取坐标：

- rod from $x=-L$ to $x=0$
- observation point at $x=A$

线密度：

$$
\lambda=\frac{Q}{L}
$$

微小电荷：

$$
dq=\lambda\,dx
$$

某个 $x$ 位置到观察点的距离：

$$
r=A-x
$$

#### Rod Differential Field

每一小段产生：

$$
dE=\frac{k\,dq}{(A-x)^2}
$$

代入：

$$
dE=\frac{k\lambda\,dx}{(A-x)^2}
$$

因为所有 tiny fields 都沿同一方向，所以可以直接积分大小：

$$
E=\int_{-L}^{0}\frac{k\lambda}{(A-x)^2}\,dx
$$

计算：

$$
E=k\lambda\left[\frac{1}{A-x}\right]_{-L}^{0}
$$

$$
E=k\lambda\left(\frac{1}{A}-\frac{1}{A+L}\right)
$$

通分：

$$
E=k\lambda\frac{L}{A(A+L)}
$$

因为：

$$
\lambda L=Q
$$

所以：

$$
E=\frac{kQ}{A(A+L)}
$$

方向：如果 rod 带正电，观察点在右侧，电场向右。

#### Why This Example Matters

这题是最基本的 continuous-charge setup：

```text
dE -> dq -> dx -> integrate over the object
```

这里方向一致，所以没有 component complication。后面的半圆和圆环才开始真正考 vector components。

### Knowledge Point 5: Semicircular Arc Requires Symmetry and Components

**Video:** 01:05:25-01:22:43

#### Semicircular-Arc Setup

均匀带电半圆环，半径为 $R$，线密度为 $\lambda$。求圆心处电场。

半圆弧长：

$$
L_{\text{arc}}=\pi R
$$

如果给总电荷 $Q$：

$$
\lambda=\frac{Q}{\pi R}
$$

#### Symmetry First

每个 $dq$ 在圆心产生一个 $dE$，但方向不同。

用 symmetry 判断：

- horizontal components cancel
- vertical components add

所以只需要积分有效方向的分量。

如果有效方向分量写成：

$$
dE_y=dE\sin\theta
$$

则：

$$
E=\int dE_y
$$

#### Convert $dq$ to $d\theta$

先写：

$$
dE=\frac{k\,dq}{R^2}
$$

弧长微元：

$$
ds=R\,d\theta
$$

所以：

$$
dq=\lambda\,ds=\lambda R\,d\theta
$$

代入：

$$
dE=\frac{k\lambda R\,d\theta}{R^2}
=\frac{k\lambda}{R}\,d\theta
$$

取有效分量：

$$
dE_y=\frac{k\lambda}{R}\sin\theta\,d\theta
$$

积分：

$$
E=\frac{k\lambda}{R}\int_0^\pi \sin\theta\,d\theta
$$

$$
E=\frac{k\lambda}{R}\left[-\cos\theta\right]_0^\pi
$$

$$
E=\frac{k\lambda}{R}(2)
$$

所以：

$$
E=\frac{2k\lambda}{R}
$$

如果用 $Q$ 表示：

$$
E=\frac{2kQ}{\pi R^2}
$$

方向沿对称轴，具体向上还是向下取决于半圆的位置和电荷正负。

#### Teacher's Method Map

课堂里老师反复强调，这题不是只考 Coulomb's law，而是考四个转换：

```text
dE -> component of dE -> dq -> ds -> dtheta
```

对应公式：

$$
dE=\frac{k\,dq}{R^2}
$$

$$
dq=\lambda\,ds
$$

$$
ds=R\,d\theta
$$

**Deep sentence / 深句：**

```text
When directions are different, integrate only the surviving component.
```

中文理解：方向不同的时候，不能把 $dE$ 的大小直接加起来。先用 symmetry 看哪些分量抵消，只积分留下来的分量。

### Knowledge Point 6: Charged Ring Looks Hard but Integrates Cleanly

**Video:** 01:22:44-01:49:39

#### Charged-Ring Setup

均匀带电圆环：

- radius: $A$
- total charge: $Q$
- point $P$ on the axis, distance $x$ from center

线密度：

$$
\lambda=\frac{Q}{2\pi A}
$$

对圆环上一小段：

$$
dq=\lambda\,ds
$$

#### Symmetry

圆环上每个 $dq$ 产生的 $dE$ 都指向不同方向，但非轴向分量互相抵消。

只剩下 axial component：

$$
dE_x=dE\cos\alpha
$$

其中：

$$
r=\sqrt{x^2+A^2}
$$

$$
\cos\alpha=\frac{x}{r}
$$

#### Charged-Ring Differential Field

$$
dE=\frac{k\,dq}{r^2}
$$

所以：

$$
dE_x=\frac{k\,dq}{r^2}\cdot\frac{x}{r}
$$

$$
dE_x=\frac{kx\,dq}{r^3}
$$

因为 $r=\sqrt{x^2+A^2}$ 对整个圆环都是常量：

$$
dE_x=
\frac{kx\,dq}{(x^2+A^2)^{3/2}}
$$

积分：

$$
E_x=\int dE_x
=
\frac{kx}{(x^2+A^2)^{3/2}}\int dq
$$

而：

$$
\int dq=Q
$$

所以：

$$
E_x=
\frac{kQx}{(x^2+A^2)^{3/2}}
$$

方向沿圆环轴线。正电圆环在轴线上把正试探电荷推离圆环。

#### Why the Ring Looks Hard but Integrates Easily

半圆环看起来比圆环简单，但积分更麻烦，因为角度真的参与变化。

圆环这题看起来复杂，但对轴线上点来说：

- $r$ is constant
- $\cos\alpha=\frac{x}{r}$ is constant
- only $\int dq=Q$ remains

所以老师说这题“化简比积分难”。

### Knowledge Point 7: Symmetry Predicts Which Field Components Survive

**Video:** 01:49:40-01:59:12

这节课最后把 symmetry 单独拿出来，是为了铺垫 [[Gauss's Law]]。

常见 symmetry：

| symmetry | Chinese | use |
|---|---|---|
| reflection symmetry | 镜像对称 | eliminate one component |
| rotation symmetry | 转动对称 | show same magnitude around axis |
| translation symmetry | 平移对称 | useful for long uniform objects |

电磁学里 symmetry 的用处：

```text
symmetry tells us which components cancel
```

典型判断：

- charged rod: sideways components cancel; field is perpendicular to the rod at symmetric points
- charged plane: field is perpendicular to the plane
- charged sphere: field is radial, like a point charge outside
- ring on axis: transverse components cancel; axial components add

中文理解：对称性不是为了“好看”，而是为了不用把所有方向都积分。它告诉我们哪些方向一定抵消，哪些方向可能留下。

### Knowledge Point 8: Electric Flux Prepares the Way for Gauss's Law

**Video:** 01:59:13-02:01:22

#### Flow Analogy

老师用水流穿过一个面来引入 flux。

如果水流垂直穿过面积 $A$，速度为 $v$，单位时间穿过的体积是：

$$
\frac{dV}{dt}=Av
$$

如果面积斜着放，有效面积变小：

$$
\Phi=vA\cos\theta
$$

更 vector 的写法：

$$
\Phi=\vec v\cdot \vec A
$$

这里 $\vec A$ 是 area vector，方向垂直于 surface。

#### Electric Flux

电通量衡量：

```text
how much electric field passes through a surface
```

如果电场均匀：

$$
\Phi_E=\vec E\cdot \vec A
$$

也就是：

$$
\Phi_E=EA\cos\theta
$$

其中 $\theta$ 是 electric field 和 area vector 的夹角。

等价理解：

$$
\Phi_E=E_\perp A
$$

中文理解：只算穿过面的垂直分量。平行于面的电场线不穿过这个面，所以通量为 0。

#### Why Flux Matters

这节课只是开头。下一节会把 electric flux 接到：

$$
\Phi_E=\frac{Q_{\text{enclosed}}}{\epsilon_0}
$$

也就是 [[Gauss's Law]]。

老师的铺垫是：光靠画电场线和对称性可以判断方向，但要算大小，就需要 Gauss's law。

## 4. Deep Phrases / 深句对应表

| English sentence | 中文对应句 |
|---|---|
| Electric field is force per unit positive test charge. | 电场是单位正试探电荷受到的力。 |
| Fields add vectorially. | 电场叠加是矢量叠加。 |
| Draw directions before calculating magnitudes. | 先画方向，再算大小。 |
| A continuous charge distribution is treated as many tiny charges. | 连续带电体要切成很多微小电荷。 |
| The tiny charge $dq$ produces the tiny field $dE$. | 微小电荷 $dq$ 产生微小电场 $dE$。 |
| Charge density converts geometry into charge. | 电荷密度把长度、面积、体积转成电荷量。 |
| Symmetry tells us which components cancel. | 对称性告诉我们哪些分量抵消。 |
| Integrate only the component that survives. | 只积分不会被抵消的分量。 |
| The ring problem is hard in geometry, not in integration. | 圆环题难在几何分解，不难在积分。 |
| Flux counts field lines passing through a surface. | 通量数的是穿过面的场线总量。 |
| Only the perpendicular component contributes to flux. | 只有垂直于面的分量贡献通量。 |

## 5. Exam Language / 关键句中英对照

### 1. The electric field is the force per unit positive test charge.

中文：

```text
电场是单位正试探电荷受到的力。
```

公式：

$$
\vec E=\frac{\vec F}{q}
$$

用途：判断电场方向时，永远想象放一个 positive test charge。

### 2. The net electric field is the vector sum of the fields due to all source charges.

中文：

```text
总电场是所有源电荷产生的电场的矢量和。
```

公式：

$$
\vec E_{\text{net}}=\sum_i \vec E_i
$$

用途：多个点电荷、连续电荷分布都用这个原则。

### 3. For a continuous charge distribution, replace $Q$ with $dq$.

中文：

```text
连续带电体里，把整体电荷 Q 换成微小电荷 dq。
```

公式：

$$
dE=\frac{k\,dq}{r^2}
$$

用途：这是从 point charge 进入积分题的第一步。

### 4. Linear charge density is charge per unit length.

中文：

```text
线电荷密度是单位长度上的电荷量。
```

公式：

$$
\lambda=\frac{Q}{L}
$$

和：

$$
dq=\lambda\,dx
$$

### 5. By symmetry, the horizontal components cancel.

中文：

```text
由对称性，水平方向分量相互抵消。
```

用途：半圆环、圆环、带电板、球壳等问题里经常出现。

### 6. Electric flux is the dot product of electric field and area vector.

中文：

```text
电通量是电场矢量和面积矢量的点积。
```

公式：

$$
\Phi_E=\vec E\cdot\vec A=EA\cos\theta
$$

用途：这是 [[Gauss's Law]] 的入口。

## 6. Problem Routine / 做题套路

### Continuous Charge Field Routine

```text
1. Draw the geometry.
2. Choose a tiny charge element dq.
3. Write dE = k dq / r^2.
4. Convert dq using charge density.
5. Use symmetry to decide which components survive.
6. Convert geometry variables if needed.
7. Integrate over the whole object.
8. State direction.
```

### Which Variable Should I Integrate?

| geometry | good variable | reason |
|---|---|---|
| straight rod | $x$ or length coordinate | $dq=\lambda dx$ |
| arc / semicircle | $\theta$ | $ds=R\,d\theta$ |
| full ring on axis | $q$ or $s$ collapses to $Q$ | $r$ and $\cos\alpha$ are constant |
| sphere / cylinder / plane | symmetry plus flux | leads to Gauss's law |

### Common Mistakes

1. 把电场当 scalar 直接加。
2. 忘记先判断方向。
3. 忘记写 $dq=\lambda dx$。
4. 半圆环里把所有 $dE$ 的大小直接相加，忘记分量。
5. 圆环轴线上忘记 $\cos\alpha=\frac{x}{r}$。
6. flux 里用错角度：$\theta$ 是 $\vec E$ 和 area vector 的夹角，不一定是和 surface 的夹角。

## 7. Confusion / Questions

1. 为什么连续带电体不能直接把总电荷 $Q$ 代入点电荷公式？
2. 为什么半圆环只剩一个方向的电场分量？
3. $dq=\lambda\,dx$ 与 $dq=\lambda R\,d\theta$ 分别适合什么几何？
4. 圆环积分中，为什么最后的积分变量会完全消失？
5. 电场线的疏密、方向与真实的 vector field 分别是什么关系？
6. flux 与 electric field 为什么不是同一个物理量？

## 8. After Class Summary / 看完压缩版

这节课的核心是把上一节的 point charge field 推广到 continuous charge distribution。

必须记住：

- [[Electric Field]] is a vector.
- [[Electric Field Superposition]] means vector sum.
- Continuous charge uses $dq$ and $dE$.
- [[Linear Charge Density]] gives $dq=\lambda dx$ or $dq=\lambda ds$。
- For arcs, $ds=R\,d\theta$。
- For rings on axis, only axial components survive.
- Symmetry is used to remove components before integrating.
- [[Electric Flux]] is $EA\cos\theta$ and leads into [[Gauss's Law]]。

这节课的三个模型：

| model | final idea |
|---|---|
| uniformly charged rod | integrate along length |
| semicircular arc | integrate surviving component over angle |
| ring on axis | transverse parts cancel, axial parts add |

## 9. Knowledge Graph Connections / 知识图谱连接

- [[AP电磁学第1次正课-电荷库仑定律与电场]] gives the point-charge field formula; this note turns it into $dE=\frac{k\,dq}{r^2}$ for continuous charge distributions.
- [[Coulomb's Law]] is the source of every $dE$ expression in this note.
- [[Electric Field]] connects force per charge to a field description of space.
- [[Electric Field Superposition]] is the reason integration works: an integral is continuous vector addition.
- [[Integrals]] connects directly to $E=\int dE$.
- [[03 - Derivative Formulas through Geometry]] connects through tiny-change thinking: $dq$, $dE$, $dx$, and $d\theta$ are all small-change tools.
- [[Polar Coordinates]] connects to arc problems because $ds=R\,d\theta$.
- [[Electric Flux]] is the next bridge from electric field lines to [[Gauss's Law]].
- [[Gauss's Law]] will use symmetry plus flux to compute fields for spheres, cylinders, and planes more efficiently.
- Next lecture: [[AP电磁学第3次正课-高斯定律与对称带电体]] turns that preview into the full Gauss-law method.

## 10. Links / 链接

- [[UBC Knowledge Graph]]
- [[AP电磁学第1次正课-电荷库仑定律与电场]]
- [[AP电磁学第3次正课-高斯定律与对称带电体]]
- [[Coulomb's Law]]
- [[Electric Field]]
- [[Electric Field Superposition]]
- [[Electric Field Lines]]
- [[Continuous Charge Distribution]]
- [[Linear Charge Density]]
- [[Surface Charge Density]]
- [[Volume Charge Density]]
- [[Charged Rod]]
- [[Semicircular Arc]]
- [[Charged Ring]]
- [[Symmetry]]
- [[Electric Flux]]
- [[Gauss's Law]]
- [[Integrals]]
- [[03 - Derivative Formulas through Geometry]]
- [[Polar Coordinates]]
