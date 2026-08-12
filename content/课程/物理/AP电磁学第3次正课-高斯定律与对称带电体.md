---
title: "AP电磁学第3次正课 - 高斯定律与对称带电体"
description: "A connected bilingual learning note about AP电磁学第3次正课 - 高斯定律与对称带电体."
publish: true
tags: [open-notes, physics-course]
---
# AP电磁学第3次正课 - 高斯定律与对称带电体

## Reading Guide / 阅读说明

这份笔记接在 [[AP电磁学第2次正课-连续带电体电场与电通量]] 后面。上一讲完成了：

```text
point charge
-> continuous charge distribution
-> symmetry
-> electric flux
```

这一讲把 [[Electric Flux]] 正式接到 [[Gauss's Law]]，并用高斯定律处理具有 spherical、cylindrical、planar symmetry 的带电体。

```text
electric flux
-> closed surface
-> enclosed charge
-> choose symmetry
-> choose Gaussian surface
-> solve for E
```

本节最重要的不是再背一组电场公式，而是学会判断：

> **Gauss's law is always true, but it is useful for finding electric field only when enough symmetry is present.**

中文理解：高斯定律永远成立；但只有对称性足够强，才能把积分中的 $E$ 提出来，直接算出电场。

## 1. What This Lecture Is About / 这节课在讲什么

这节课把上一讲留下的 electric flux 正式发展成 Gauss's law，并连续处理球、线、圆柱和平面模型。阅读时不要把这些公式看成互不相关的结论；每个模型都在重复同一条推理链：

```text
symmetry
-> Gaussian surface
-> flux contribution
-> enclosed charge
-> electric field
```

## 2. Class Flow / 课堂脉络

1. 复习 [[Continuous Charge Distribution]]：直杆、半圆环、圆环和 symmetry。
2. 补全 [[Electric Flux]]，处理 nonuniform electric field through a surface。
3. 引入 closed surface、outward area vector 和 enclosed charge。
4. 写出 [[Gauss's Law]]。
5. 区分 zero net flux 和 zero electric field。
6. 用球形高斯面处理 [[Conducting Sphere]]。
7. 用球形高斯面处理均匀带电 [[Non-Conducting Sphere]]。
8. 对 nonuniform volume charge density 做积分。
9. 用圆柱形高斯面处理 infinite line charge。
10. 用圆柱形高斯面处理 uniformly charged solid cylinder。
11. 用 pillbox Gaussian surface 处理 infinite plane sheet。
12. 总结高斯定律的适用边界：没有足够 [[Symmetry]] 时，定律成立但不能直接解 $E$。

## 3. Core Ideas / 核心知识块

### Knowledge Point 1: Electric Flux Measures the Normal Field Through a Surface

**Video:** 00:06:42-00:08:11

#### Uniform Field Through a Flat Surface

[[Electric Flux]] 衡量 electric field 穿过一个面的程度。

$$
\Phi_E=\vec E\cdot\vec A=EA\cos\theta
$$

其中 $\vec A$ 是 area vector，方向垂直于表面；$\theta$ 是 $\vec E$ 与 $\vec A$ 的夹角。

- $\vec E$ perpendicular to the surface: $\theta=0$，所以 $\Phi_E=EA$。
- $\vec E$ parallel to the surface: $\theta=90^\circ$，所以 $\Phi_E=0$。
- field entering a closed surface: flux is negative。
- field leaving a closed surface: flux is positive。

**Deep sentence / 深句：**

> **Flux depends on the component of the electric field normal to the surface.**

中文理解：电通量只看电场在“垂直于表面方向”上的分量。

#### Nonuniform Field Through a Surface

如果 $E$ 在面上每一点都不同，不能直接用一个 $E$ 乘整个面积。要把面切成 tiny area elements：

$$
d\Phi_E=\vec E\cdot d\vec A
$$

再积分：

$$
\Phi_E=\int \vec E\cdot d\vec A
$$

这和上一讲的连续带电体是同一个 calculus pattern：

```text
quantity changes across space
-> isolate a tiny region where it is approximately constant
-> write the tiny contribution
-> integrate all contributions
```

### Knowledge Point 2: A Variable Field Requires Area Elements

**Video:** 00:08:12-00:25:31

课堂中的 rectangle 范围是：

$$
0\le x\le 6,\qquad 0\le y\le 4
$$

电场垂直穿过 rectangle。

#### Example A: $E(x)=2x+3$

因为电场只随 $x$ 改变，所以切 vertical strips：

$$
dA=4\,dx
$$

于是：

$$
\Phi_E=\int_0^6 (2x+3)(4\,dx)
$$

$$
=4[x^2+3x]_0^6=216\ \text{N}\cdot\text{m}^2/\text{C}
$$

#### Example B: $E(y)=2y^2+3$

因为电场只随 $y$ 改变，所以切 horizontal strips：

$$
dA=6\,dy
$$

于是：

$$
\Phi_E=\int_0^4 (2y^2+3)(6\,dy)
$$

$$
=6\left[\frac{2}{3}y^3+3y\right]_0^4
=328\ \text{N}\cdot\text{m}^2/\text{C}
$$

**Method sentence / 方法句：**

> **Choose the strip direction so that the field is approximately constant over each strip.**

中文理解：电场关于谁变化，就沿谁的方向切微元；这样每一条窄 strip 内可以把 $E$ 当成常量。

### Knowledge Point 3: Gauss's Law Connects Closed-Surface Flux to Enclosed Charge

**Video:** 00:25:32-00:41:31

[[Gauss's Law]] 是 Maxwell's equations 之一：

$$
\boxed{\oint \vec E\cdot d\vec A=\frac{Q_{\text{enc}}}{\epsilon_0}}
$$

左边是穿过 closed surface 的 net electric flux；右边只看该面包住的 net charge。

#### Three Words That Must Be Precise

**Closed surface**：完全封闭的三维表面。

**Gaussian surface**：为了利用高斯定律而想象出来的 closed surface。它不是实体表面，也不一定与带电体表面重合。

**Enclosed charge $Q_{\text{enc}}$**：Gaussian surface 内部包住的净电荷，不是空间中所有电荷。

#### Area Vector on a Closed Surface

对 closed surface，$d\vec A$ 默认指向 outward normal。

因此：

- field points outward $\Rightarrow \vec E\cdot d\vec A>0$
- field points inward $\Rightarrow \vec E\cdot d\vec A<0$
- field tangent to surface $\Rightarrow \vec E\cdot d\vec A=0$

#### What Gauss's Law Says and Does Not Say

> **Net flux depends only on the net enclosed charge.**

它不依赖 Gaussian surface 的形状，也不依赖 surface 外面的电荷。

但是：

> **Zero net flux does not imply zero electric field.**

如果 $Q_{\text{enc}}=0$，则：

$$
\oint \vec E\cdot d\vec A=0
$$

这可能是没有电场，也可能是进入面的负通量和离开面的正通量恰好抵消。

反过来也要小心：某点 $E=0$ 是 local statement；总 flux 是对整个 closed surface 的 global statement。

### Knowledge Point 4: Gauss's Law Solves for $E$ Only When Symmetry Simplifies Flux

**Video:** 00:28:05-00:44:46

高斯定律能直接求 $E$，通常需要以下结构：

1. [[Symmetry]] 能确定 $\vec E$ 的方向。
2. 在 Gaussian surface 的有效部分上，$E$ 大小处处相同。
3. $\vec E$ 与 $d\vec A$ 平行或垂直，使 dot product 简化。
4. $Q_{\text{enc}}$ 能直接写出或积分得到。

三类标准 symmetry：

| Charge distribution | Gaussian surface | Useful area |
|---|---|---|
| spherical symmetry | concentric sphere | $4\pi r^2$ |
| cylindrical symmetry | coaxial cylinder | $2\pi rL$ |
| planar symmetry | pillbox | two flat faces, $2A$ |

**Core move / 核心动作：**

```text
identify symmetry
-> predict field direction
-> choose matching Gaussian surface
-> determine where flux is zero
-> determine where E is constant
-> calculate Q_enc
-> apply Gauss's law
```

### Knowledge Point 5: A Spherical Gaussian Surface Recovers Coulomb's Law

**Video:** 00:29:02-00:47:52

对中心点电荷取半径为 $r$ 的同心球形 Gaussian surface。

由 spherical symmetry：

- $\vec E$ 沿 radial direction；
- sphere 上每一点的 $E$ 大小相同；
- $\vec E\parallel d\vec A$。

所以：

$$
\oint \vec E\cdot d\vec A=E(4\pi r^2)
$$

又因为 $Q_{\text{enc}}=Q$：

$$
E(4\pi r^2)=\frac{Q}{\epsilon_0}
$$

$$
\boxed{E=\frac{1}{4\pi\epsilon_0}\frac{Q}{r^2}=\frac{kQ}{r^2}}
$$

这解释了 [[Coulomb's Law]] 中 inverse-square 的几何来源：同样的 flux 分散到面积为 $4\pi r^2$ 的球面上。

### Knowledge Point 6: A Charged Conductor Has Zero Field Inside

**Video:** 00:42:14-00:51:41

考虑半径为 $R$、总电荷为 $Q$ 的 [[Conducting Sphere]]，并处于 electrostatic equilibrium。

#### Inside the Conductor: $r<R$

静电平衡时，excess charge 位于 conductor surface。取导体内部的同心球形 Gaussian surface：

$$
Q_{\text{enc}}=0
$$

因此：

$$
\boxed{E=0\qquad (r<R)}
$$

#### Outside the Conductor: $r\ge R$

外部 Gaussian surface 包住全部电荷 $Q$：

$$
E(4\pi r^2)=\frac{Q}{\epsilon_0}
$$

$$
\boxed{E=\frac{kQ}{r^2}\qquad (r\ge R)}
$$

外部电场等效于全部电荷集中在球心。

#### $E$ versus $r$

```text
inside conductor: E = 0
at surface, just outside: E is maximum
outside conductor: E decreases as 1/r^2
```

**Exam sentence / 考试句：**

> **The electric field inside a conductor in electrostatic equilibrium is zero.**

### Knowledge Point 7: An Insulating Sphere Encloses More Charge as $r$ Grows

**Video:** 00:51:42-01:17:00

考虑半径为 $R$、总电荷为 $Q$ 的 [[Non-Conducting Sphere]]。电荷均匀分布在 volume 内：

$$
\rho=\frac{Q}{\frac{4}{3}\pi R^3}
$$

#### Inside the Sphere: $r<R$

半径为 $r$ 的 Gaussian surface 只包住一部分电荷：

$$
Q_{\text{enc}}=\rho\left(\frac{4}{3}\pi r^3\right)
=Q\frac{r^3}{R^3}
$$

代入高斯定律：

$$
E(4\pi r^2)=\frac{Qr^3/R^3}{\epsilon_0}
$$

$$
\boxed{E=\frac{1}{4\pi\epsilon_0}\frac{Qr}{R^3}
=\frac{kQr}{R^3}\qquad (r<R)}
$$

所以内部：

$$
E\propto r
$$

#### Outside the Sphere: $r\ge R$

Gaussian surface 包住全部 $Q$：

$$
\boxed{E=\frac{kQ}{r^2}\qquad (r\ge R)}
$$

#### Conductor vs Non-Conductor

| Region | Conducting sphere | Uniform non-conducting sphere |
|---|---|---|
| $r<R$ | $E=0$ | $E=kQr/R^3$ |
| $r=R$ | $E=kQ/R^2$ just outside | $E=kQ/R^2$ |
| $r>R$ | $E=kQ/r^2$ | $E=kQ/r^2$ |

两者外部相同，内部不同。原因不是高斯定律变了，而是 $Q_{\text{enc}}(r)$ 不同。

### Knowledge Point 8: Nonuniform Density Makes $Q_{\text{enc}}$ an Integral

**Video:** 01:23:22-01:41:33

当 [[Volume Charge Density]] 是位置函数 $\rho(r)$ 时，不能用“总体积比例”直接找 $Q_{\text{enc}}$。要积分 spherical shells。

半径为 $s$、厚度为 $ds$ 的 thin shell：

$$
dV=4\pi s^2\,ds
$$

$$
dq=\rho(s)dV=\rho(s)4\pi s^2\,ds
$$

因此半径 $r$ 内的 charge：

$$
\boxed{Q_{\text{enc}}(r)=\int_0^r \rho(s)4\pi s^2\,ds}
$$

这里用 $s$ 作 integration variable，保留 $r$ 表示目标位置，可以避免把积分变量和积分上限混在一起。

#### Classroom Example: $\rho(r)=4r$

总半径为 $R$ 时：

$$
Q_{\text{total}}=\int_0^R (4s)(4\pi s^2)\,ds
=16\pi\int_0^R s^3\,ds
=4\pi R^4
$$

对内部位置 $r<R$：

$$
Q_{\text{enc}}(r)=4\pi r^4
$$

代入高斯定律：

$$
E(4\pi r^2)=\frac{4\pi r^4}{\epsilon_0}
$$

$$
\boxed{E=\frac{r^2}{\epsilon_0}}
$$

课堂公式省略了 $\rho=4r$ 中常数的单位；考试时以题目给定的完整 density expression 为准。

**Deep sentence / 深句：**

> **For a nonuniform charge distribution, enclosed charge must be accumulated from the density.**

中文理解：非均匀分布时，$Q_{\text{enc}}$ 不是“看起来占多少”就直接按比例，而是对 density 积分。

### Knowledge Point 9: An Infinite Line Charge Uses a Cylindrical Gaussian Surface

**Video:** 01:42:24-01:50:15

对 linear charge density 为 $\lambda$ 的 infinite line charge，取半径为 $r$、长度为 $L$ 的 coaxial cylindrical Gaussian surface。

由 cylindrical symmetry：

- $\vec E$ radial and perpendicular to the line；
- curved surface 上 $E$ 大小相同；
- two end caps 上 $\vec E$ 与 $d\vec A$ 垂直，所以 flux 为 0。

只有 curved side contributes：

$$
\Phi_E=E(2\pi rL)
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

因此：

$$
E\propto\frac{1}{r}
$$

点电荷是 $1/r^2$，无限长线电荷是 $1/r$；差异来自 field spreading geometry。

### Knowledge Point 10: A Solid Cylinder Changes Form at Its Boundary

**Video:** 01:50:16-01:54:55

考虑半径 $R$、[[Volume Charge Density]] 为 $\rho$ 的 infinitely long solid non-conducting cylinder。

#### Inside the Cylinder: $r<R$

$$
Q_{\text{enc}}=\rho(\pi r^2L)
$$

$$
E(2\pi rL)=\frac{\rho\pi r^2L}{\epsilon_0}
$$

$$
\boxed{E=\frac{\rho r}{2\epsilon_0}\qquad (r<R)}
$$

内部 $E\propto r$。

#### Outside the Cylinder: $r\ge R$

$$
Q_{\text{enc}}=\rho(\pi R^2L)
$$

$$
E(2\pi rL)=\frac{\rho\pi R^2L}{\epsilon_0}
$$

$$
\boxed{E=\frac{\rho R^2}{2\epsilon_0r}\qquad (r\ge R)}
$$

外部 $E\propto 1/r$。

### Knowledge Point 11: An Infinite Plane Produces a Distance-Independent Field

**Video:** 01:54:56-01:58:06

对 [[Surface Charge Density]] 为 $\sigma$ 的 infinite plane sheet，取一个跨过平面的 short cylinder，也叫 pillbox Gaussian surface。

由 planar symmetry：

- $\vec E$ perpendicular to the plane；
- 平面两侧的 $E$ 大小相同；
- curved side 上 flux 为 0；
- two flat faces 各贡献 $EA$。

所以总 flux：

$$
\Phi_E=2EA
$$

包住的电荷：

$$
Q_{\text{enc}}=\sigma A
$$

代入高斯定律：

$$
2EA=\frac{\sigma A}{\epsilon_0}
$$

$$
\boxed{E=\frac{\sigma}{2\epsilon_0}}
$$

公式里没有 distance $r$，所以：

> **The electric field of an infinite sheet is independent of the distance from the sheet.**

这是理想 infinite sheet 的结果。有限平板只有在“观察距离远小于平板尺寸、且远离边缘”时可以近似使用。

### Knowledge Point 12: Gauss's Law Remains True Even When It Cannot Isolate $E$

**Video:** 01:57:22-class summary

对任意 charge distribution，高斯定律依然成立：

$$
\oint\vec E\cdot d\vec A=\frac{Q_{\text{enc}}}{\epsilon_0}
$$

但对不规则带电体或一般立方体分布，通常找不到一个 surface，使得：

- $E$ 在有效区域处处相同；
- $\vec E$ 与 $d\vec A$ 的夹角简单；
- flux integral 能化成 $EA$。

所以正确说法不是“Gauss's law cannot be used”，而是：

> **Gauss's law does not provide a direct way to solve for $E$ for this charge distribution.**

## 4. Deep Phrases / 深句对应表

| English sentence | 中文对应理解 |
|---|---|
| Flux measures the electric field passing through a surface. | 通量衡量电场穿过一个面的程度。 |
| The area vector is normal to the surface. | 面积矢量垂直于表面。 |
| Gauss's law relates net flux to enclosed charge. | 高斯定律把净通量与面内净电荷联系起来。 |
| Only enclosed charge appears on the right-hand side. | 右侧只算高斯面内部包住的电荷。 |
| Charges outside the surface can affect the field but not the net flux. | 面外电荷可以改变各点电场，但不会改变穿过闭合面的净通量。 |
| Zero net flux does not imply zero electric field. | 净通量为零不代表处处电场为零。 |
| Symmetry allows the electric field to be taken outside the integral. | 对称性让有效表面上的 $E$ 成为常量，从积分中提出。 |
| Choose a Gaussian surface that matches the symmetry of the charge distribution. | 高斯面要匹配电荷分布的对称性。 |
| The enclosed charge changes when the Gaussian surface lies inside a volume distribution. | 高斯面位于体电荷内部时，包住的电荷随半径变化。 |
| A conductor and an insulator differ inside, not necessarily outside. | 导体球和绝缘球的关键差异在内部；外部可能相同。 |
| The field of an infinite line falls off as $1/r$. | 无限长线电荷的电场按 $1/r$ 衰减。 |
| The field of an infinite sheet is independent of distance. | 无限大平面的电场与距离无关。 |

## 5. Common Mistakes / 易错点

### Mistake 1: Treating flux as electric field

电场 $E$ 是某点的 local vector；flux $\Phi_E$ 是 field 穿过整个面的累计量。

同一个点电荷外取两个不同半径的球面：

- $E$ 不同，按 $1/r^2$ 变化；
- total flux 相同，都等于 $Q/\epsilon_0$。

### Mistake 2: Including outside charges in $Q_{\text{enc}}$

外部电荷会影响 surface 上的 $\vec E$，但不写入右边的 $Q_{\text{enc}}$。

### Mistake 3: Saying $Q_{\text{enc}}=0$ means $E=0$

正确结论只是 net flux $=0$。进入和离开的 flux 可以抵消。

### Mistake 4: Using total $Q$ for an internal Gaussian surface

对均匀实心球内部：

$$
Q_{\text{enc}}=Q\frac{r^3}{R^3}
$$

不是 $Q$。

### Mistake 5: Mixing Gaussian radius $r$ with object radius $R$

- $R$: fixed radius of the charged object
- $r$: variable distance from the center / radius of Gaussian surface

### Mistake 6: Forgetting which parts contribute flux

- line charge cylinder: only curved side contributes。
- infinite plane pillbox: only two flat faces contribute。
- sphere: entire spherical surface contributes。

### Mistake 7: Assuming Gauss's law always gives $E$

定律总成立；直接求 $E$ 需要 symmetry。

## 6. Model Comparison / 模型总表

| Model | Region | Electric field magnitude |
|---|---|---|
| point charge / spherical exterior | $r>0$ | $\dfrac{kQ}{r^2}$ |
| conducting sphere | $r<R$ | $0$ |
| conducting sphere | $r\ge R$ | $\dfrac{kQ}{r^2}$ |
| uniform insulating solid sphere | $r<R$ | $\dfrac{kQr}{R^3}$ |
| uniform insulating solid sphere | $r\ge R$ | $\dfrac{kQ}{r^2}$ |
| infinite line charge | $r>0$ | $\dfrac{\lambda}{2\pi\epsilon_0r}$ |
| uniform solid cylinder | $r<R$ | $\dfrac{\rho r}{2\epsilon_0}$ |
| uniform solid cylinder | $r\ge R$ | $\dfrac{\rho R^2}{2\epsilon_0r}$ |
| infinite plane sheet | either side | $\dfrac{\sigma}{2\epsilon_0}$ |

## 7. AP Free-Response Writing Template / 大题书写模板

1. **State symmetry.**

   `By spherical/cylindrical/planar symmetry, the electric field ...`

2. **Choose the Gaussian surface.**

   `Choose a concentric sphere / coaxial cylinder / pillbox ...`

3. **Explain the flux simplification.**

   `The field has constant magnitude on ... and is parallel/perpendicular to ...`

4. **Calculate enclosed charge.**

   $$
   Q_{\text{enc}}=\int \rho\,dV,\quad \int\sigma\,dA,\quad \text{or}\quad \int\lambda\,dl
   $$

5. **Apply Gauss's law and solve.**

   $$
   \oint\vec E\cdot d\vec A=\frac{Q_{\text{enc}}}{\epsilon_0}
   $$

只写最终公式容易漏 reasoning points；AP 评分更看重 symmetry、surface、flux contribution 和 enclosed charge 的论证链。

## 8. Confusion / Questions

1. 为什么 $Q_{\text{enc}}=0$ 只能推出 net flux 为零，不能推出每一点 $E=0$？
2. Gaussian surface 为什么不需要是一个真实物体表面？
3. 什么条件允许把 $E$ 从 closed-surface integral 中提出？
4. 求球体内部电场时，为什么不能直接代入 total charge $Q$？
5. 导体球和绝缘实心球内部的 $E(r)$ 为什么不同？
6. line charge、solid cylinder 和 infinite plane 应分别选择什么 Gaussian surface？
7. 为什么 infinite plane 的电场与距离无关？

## 9. After-Class Compression / 课后压缩版

只记住六句话：

1. [[Electric Flux]] is $\vec E\cdot\vec A$，对 closed surface 看 net outward flux。
2. [[Gauss's Law]] says $\Phi_E=Q_{\text{enc}}/\epsilon_0$。
3. Zero enclosed charge means zero net flux, not necessarily zero field。
4. Symmetry 决定 Gaussian surface，也决定能否把 $E$ 提出积分。
5. 内部问题先找 $Q_{\text{enc}}(r)$；不要直接使用 total $Q$。
6. sphere: $1/r^2$ outside；line/cylinder: $1/r$ outside；infinite sheet: independent of distance。

## 10. Connections / 知识网络

### Previous Lecture

- [[AP电磁学第2次正课-连续带电体电场与电通量]]
- [[Continuous Charge Distribution]]
- [[Electric Flux]]
- [[Symmetry]]

### Core Concepts

- [[Gauss's Law]]
- [[Electric Field]]
- [[Conducting Sphere]]
- [[Non-Conducting Sphere]]
- [[Linear Charge Density]]
- [[Surface Charge Density]]
- [[Volume Charge Density]]

### Math Bridge

- [[Integrals]]
- [[Vectors]]
- [[Area Under a Curve]]

本节和 calculus 的核心连接不是“看见积分就算”，而是：先选 differential element，再把 density 转成 enclosed quantity，最后累计。

### Next Lecture

- [[AP电磁学第4次正课-电势能与电势]] reviews the standard Gaussian models, then develops electric potential energy and [[Electric Potential]].
