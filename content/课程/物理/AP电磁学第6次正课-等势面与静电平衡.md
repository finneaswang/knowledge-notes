---
title: "AP电磁学第6次正课 - 等势面与静电平衡"
description: "A connected bilingual learning note about AP电磁学第6次正课 - 等势面与静电平衡."
publish: true
tags: [open-notes, physics-course]
---
# AP电磁学第6次正课 - 等势面与静电平衡

## Reading Guide / 阅读说明

这两个 Word the course material 是约两小时的主体；ScreenRecording_07-13-2026 the course material 从主体最后的 Y/Z 电势排序处继续，补完导体表面电场与尖端放电，因此统一记为物理 C 电磁第 6 次正课。

它承接 [[AP电磁学第5次正课-电势差与电场电势关系]]：

~~~text
E = -dV/dx
-> read field from potential graphs
-> equipotential lines and surfaces
-> conductor as an equipotential body
-> electrostatic equilibrium
-> induced surface charge
-> cavities and electrostatic shielding
-> field at a conductor surface
-> charge concentration at sharp points
~~~

本节后半段的所有导体性质都从一句话长出来：

> **In electrostatic equilibrium, free charges have stopped moving.**

自由电荷若真的不再移动，导体材料内部就不能存在驱动它们继续运动的电场：

$$
\vec E_{\text{inside conductor}}=0
$$

再由：

$$
\vec E=-\nabla V
$$

可知导体内部电势不随位置变化，所以整个导体是 equipotential body。

## 1. What This Lecture Is About / 这节课在讲什么

前半段完成 electric field 与 electric potential 的图像语言：

- $V-x$ 图像的 slope 给出 $E_x$；
- $E-x$ 图像下的 signed area 给出 $-\Delta V$；
- equipotential line / surface 像地图的等高线；
- 等势线越密，单位距离内电势变化越快，因此 $|\vec E|$ 越大。

后半段把这些关系放进 conductor：

- excess charge 为什么留在表面；
- 为什么导体材料内部 $E=0$；
- cavity 中的电荷如何诱导内外表面电荷；
- 静电屏蔽为什么成立；
- 为什么导体整体等势；
- 为什么电场线垂直导体表面；
- 为什么尖端附近表面电荷密度与场强更大。

## 2. Class Flow / 课堂脉络

1. 回顾 $V=U/q$、沿电场方向电势降低。
2. 回顾 $E_x=-dV/dx$ 与 $\Delta V=-\int E_x\,dx$。
3. 用 $V-x$ 分段图像判断 $E-x$ 的正负、大小与不可导点。
4. 定义 equipotential line 与 equipotential surface。
5. 用 point charge 的同心圆/球面理解等势面。
6. 讨论等量异号电荷之间的 zero-potential surface。
7. 证明电场线与等势面垂直。
8. 用能量守恒判断粒子是否沿等势面移动。
9. 区分 electric-force work 与 external-force work。
10. 说明等势线越密，场强越大。
11. 总结 force-energy 与 field-potential 的平行结构。
12. 回顾 Gaussian surface 的两个核心。
13. 进入 conductor and capacitor 单元，定义 electrostatic equilibrium。
14. 说明 excess charge 分布在导体表面。
15. 推出导体材料内部 $E=0$。
16. 分析 cavity 内放电荷后的 induced charge。
17. 用 Gauss's law 求 cavity 内表面与导体外表面电荷。
18. 处理非均匀 volume charge density $\rho(r)=\beta r$ 的积分题。
19. 解释 electrostatic shielding 与 Faraday cage。
20. 由 $E=0$ 推出导体是 equipotential body，而不是 $V=0$。
21. 对比 conducting sphere 与 non-conducting sphere 的 $E-r$、$V-r$ 图像。
22. 说明相连导体达到共同电势，但电荷量未必相等。
23. 证明电场垂直导体表面。
24. 用 pillbox 推出表面外侧 $E_\perp=\sigma/\epsilon_0$。
25. 说明尖端曲率半径小，表面电荷更集中，容易 point discharge。

## 3. E and V Are the Field Version of Force and Energy / 场与势是力与能的场论版本

### Knowledge Point 1: Divide by Test Charge to Move from Object to Field

**Main transcript:** 00:00:44-00:10:53

力与势能属于具体带电粒子组成的系统：

$$
\vec F=q\vec E,\qquad U=qV
$$

除以 test charge：

$$
\vec E=\frac{\vec F}{q},\qquad V=\frac{U}{q}
$$

力学中的关系：

$$
F_x=-\frac{dU}{dx}
$$

两边除以 $q$：

$$
\frac{F_x}{q}=-\frac{d(U/q)}{dx}
$$

得到：

$$
\boxed{E_x=-\frac{dV}{dx}}
$$

> **The force-energy relationship becomes the field-potential relationship after dividing by charge.**

### Knowledge Point 2: Steeper Potential Drop Means Stronger Field

若 $V$ 随位置下降得很快，则：

$$
\left|\frac{dV}{dx}\right|
$$

很大，所以 $|E_x|$ 很大。

物理上，把正试探电荷放在那里，它每移动很小距离就损失很多 potential energy，说明 electric force 做功很快，因而 force 与 field 都强。

> **The electric field measures how rapidly electric potential falls with distance.**

## 4. Reading V-x and E-x Graphs / 电势图与电场图

### Knowledge Point 3: The Negative Slope of V-x Is E-x

**Main transcript:** 00:10:53-00:18:30

$$
E_x=-\text{slope of the }V-x\text{ graph}
$$

读图顺序：

1. 先看 slope 正负；
2. 再加公式负号；
3. 最后比较 slope magnitude。

| $V-x$ 图像 | $dV/dx$ | $E_x$ |
|---|---:|---:|
| 水平 | $0$ | $0$ |
| 向右下降 | negative | positive |
| 向右上升 | positive | negative |
| 越陡 | magnitude larger | $|E_x|$ larger |

### Knowledge Point 4: A Sharp Corner Makes E Undefined at That Point

若 $V-x$ 图像有 sharp corner，左右斜率不同，则：

$$
\frac{dV}{dx}
$$

在该点不存在，所以 $E_x$ 也不能由一个唯一导数表示。

- smooth extremum：可能有 $dV/dx=0$；
- sharp corner：derivative does not exist。

### Knowledge Point 5: Area Under E-x Gives Negative Potential Change

$$
V_B-V_A=-\int_A^B E_x\,dx
$$

因此 $E-x$ 图像从 A 到 B 的 signed area 等于 $-\Delta V$。

> **Slope converts potential into field; signed area converts field back into potential difference.**

这连接到 [[Derivatives]]、[[Integrals]] 与 [[Fundamental Theorem of Calculus]]。

## 5. Equipotential Lines and Surfaces / 等势线与等势面

### Knowledge Point 6: An Equipotential Contains Points with the Same V

**Main transcript:** 00:18:30-00:25:00

equipotential line 是二维图中电势相同的一条线；equipotential surface 是三维空间中电势相同的一个面。

沿等势面移动：

$$
V_A=V_B,\qquad \Delta V=0
$$

因此：

$$
\Delta U=q\Delta V=0
$$

$$
W_E=-\Delta U=0
$$

> **No work is done by the electrostatic force when a charge moves along an equipotential surface.**

### Knowledge Point 7: Point-Charge Equipotentials Are Concentric Spheres

点电荷：

$$
V(r)=\frac{kQ}{r}
$$

只要 $r$ 相同，$V$ 就相同。因此三维等势面是 concentric spheres；二维截面是 concentric circles。

它像地图中的 contour lines：

- 同一 contour 上 elevation 相同；
- 同一等势线上 electric potential 相同；
- 越靠近正点电荷，$V$ 越高；
- 沿径向向外，也就是沿电场方向，$V$ 降低。

### Knowledge Point 8: Zero Potential Is Not the Same as Zero Field

等量异号点电荷的 perpendicular bisector 上：

$$
V=\frac{kQ}{r}+\frac{k(-Q)}{r}=0
$$

但电场矢量通常不抵消：

$$
\vec E\ne0
$$

> **A zero-potential surface is not necessarily a zero-field surface.**

### Knowledge Point 9: Electric Field Is Perpendicular to Equipotential Surfaces

若 $\vec E$ 在等势面的切向有分量，那么沿表面移动 $d\vec l$：

$$
dV=-\vec E\cdot d\vec l
$$

将不再为零，与等势矛盾。因此：

$$
\boxed{\vec E\perp\text{equipotential surface}}
$$

> **Electric field lines cross equipotential surfaces at right angles.**

### Knowledge Point 10: Closer Equipotentials Mean Stronger Field

相邻等势线的电势差相同，则：

$$
|E|\approx\frac{|\Delta V|}{\Delta s}
$$

$\Delta s$ 越小，$|E|$ 越大。

> **Where equipotential lines are closer together, the electric field is stronger.**

不要只背“越密越强”；原因是单位距离内 potential drop 更大。

## 6. Work and Motion on Equipotentials / 等势面上的功与运动

### Knowledge Point 11: Same Speed Before and After Means No Change in K

若粒子由静止移动后仍静止：

$$
K_i=K_f=0
$$

且没有其他能量输入，则：

$$
\Delta U=0,\qquad \Delta V=0
$$

起点和终点必须在同一 equipotential 上。

注意 $+6\ \mathrm V$ 与 $-6\ \mathrm V$ 并不相等，而是相差 $12\ \mathrm V$。

### Knowledge Point 12: External Work and Electric-Force Work Have Opposite Signs

缓慢移动、动能不变时：

$$
W_{\text{ext}}=\Delta U=q\Delta V
$$

而 electric force 做功：

$$
W_E=-\Delta U=-q\Delta V
$$

- electric force 做正功：$U$ 降低；
- external force 缓慢做正功：$U$ 升高。

> **Work by the electric field lowers potential energy; slow work by an external agent raises it.**

## 7. Gauss's Law Review / 高斯定律复盘

### Knowledge Point 13: A Useful Gaussian Surface Makes E Constant

**Main transcript:** 00:44:00-01:00:00

$$
\oint\vec E\cdot d\vec A=\frac{Q_{\text{enc}}}{\epsilon_0}
$$

Gaussian surface 的目标是利用 [[Symmetry]]，让有效积分面上的 $E$ magnitude 相同，并使 $\vec E$ 与 $d\vec A$ 的夹角固定。

积分便可化成：

$$
EA
$$

> **Choose a Gaussian surface so that symmetry turns the flux integral into a constant field times an area.**

### Knowledge Point 14: The Second Difficulty Is Writing Enclosed Charge

根据 charge distribution：

$$
dq=\lambda\,dl,\qquad dq=\sigma\,dA,\qquad dq=\rho\,d\tau
$$

若 density 是函数，必须积分，不能直接拿某一点的 density 乘整个总体积。

## 8. Electrostatic Equilibrium in Conductors / 导体的静电平衡

### Knowledge Point 15: Free Charges Move Until the Internal Field Vanishes

**Main transcript:** 01:00:00-01:14:00

ideal conductor 中有自由电子。若 conducting material 内存在非零场：

$$
\vec F=q\vec E
$$

自由电荷就会继续移动，系统还未达到 equilibrium。

静电平衡时：

$$
\boxed{\vec E=0\quad\text{inside the conducting material}}
$$

> **A conductor is in electrostatic equilibrium only when no internal electric field remains to drive free charges.**

### Knowledge Point 16: Positive-Charge Motion Is an Equivalent Convention

真实金属中主要是 electrons 移动，原子核不会自由穿行。但 conventional current 按正电荷方向定义，因此图中可等效画：

- electrons 向左；
- positive charge 向右。

### Knowledge Point 17: Excess Charge Resides on the Surface

同号 excess charges 彼此排斥且能自由移动，会尽量彼此远离，最终留在 conductor surface。

> **In electrostatic equilibrium, excess charge resides on the surface of a conductor.**

只有球形导体及其环境都有 spherical symmetry 时，surface charge density 才一定 uniform；任意形状通常不均匀。

## 9. Conducting Cavities and Induced Charge / 导体空腔与感应电荷

### Knowledge Point 18: A Cavity Charge Induces Opposite Charge on the Inner Surface

腔内放入电荷 $q$，取完全位于 conducting material 内、包围 cavity 的 Gaussian surface。

导体材料中 $\vec E=0$，所以：

$$
\oint\vec E\cdot d\vec A=0
$$

因此：

$$
Q_{\text{enc}}=0
$$

若 inner surface charge 为 $Q_{\text{inner}}$：

$$
q+Q_{\text{inner}}=0
$$

所以：

$$
\boxed{Q_{\text{inner}}=-q}
$$

> **A charge inside a cavity induces an equal and opposite total charge on the cavity wall.**

若腔内电荷偏离中心，inner surface density 一般不均匀，但总量仍是 $-q$。

### Knowledge Point 19: Charge Conservation Determines the Outer Surface Charge

若 conductor 总净电荷为 $Q_c$：

$$
Q_{\text{inner}}+Q_{\text{outer}}=Q_c
$$

所以：

$$
\boxed{Q_{\text{outer}}=Q_c+q}
$$

例如 conductor shell 总电荷 $+3Q$，腔内放 $+Q$：

$$
Q_{\text{inner}}=-Q,\qquad Q_{\text{outer}}=+4Q
$$

动作链：

~~~text
use E=0 in the metal
-> Gaussian flux is zero
-> find inner-surface charge
-> use charge conservation
-> find outer-surface charge
~~~

### Knowledge Point 20: E-r for a Cavity Problem Is Piecewise

- cavity 内：若有 source charge，通常有非零 field；
- conducting material 内：$E=0$；
- conductor 外：由 total enclosed charge 和外部几何决定。

surface charge 可使 normal field discontinuous，所以不同区域的曲线不必平滑连接。

## 10. Nonuniform Charge Density / 非均匀电荷密度积分

### Knowledge Point 21: For \(\rho(r)=\beta r\), Integrate Thin Spherical Shells

**Main transcript:** 01:20:00-01:38:00 and 01:48:00-02:02:00

非导体实心球半径为 $a$：

$$
\rho(r)=\beta r
$$

取半径 $r$、厚度 $dr$ 的 thin spherical shell：

$$
d\tau=4\pi r^2\,dr
$$

$$
dq=\rho(r)d\tau
=\beta r(4\pi r^2\,dr)
=4\pi\beta r^3\,dr
$$

半径 $r<a$ 的 Gaussian surface 包含：

$$
Q_{\text{enc}}(r)
=\int_0^r4\pi\beta r'^3\,dr'
=\pi\beta r^4
$$

由：

$$
E(4\pi r^2)=\frac{\pi\beta r^4}{\epsilon_0}
$$

得到：

$$
\boxed{E(r)=\frac{\beta r^2}{4\epsilon_0}\qquad(r<a)}
$$

内部场是 $E\propto r^2$，不是 uniform-density sphere 的 $E\propto r$。

### Knowledge Point 22: Outside, Only Total Charge Matters

总电荷：

$$
Q=\int_0^a4\pi\beta r^3\,dr=\pi\beta a^4
$$

球外：

$$
E(r)=\frac{1}{4\pi\epsilon_0}\frac{Q}{r^2}
$$

具有 spherical symmetry 时，外部场只看 total charge。

## 11. Electrostatic Shielding and Faraday Cages / 静电屏蔽与法拉第笼

### Knowledge Point 23: Induced Charges Cancel an Applied Field

**Main transcript:** 01:40:00-01:46:00

conductor 放入 external field 后，自由电荷短暂重分布，形成 induced field，直到：

$$
\vec E_{\text{external}}+\vec E_{\text{induced}}=0
$$

所以 conducting material 内：

$$
\vec E_{\text{net}}=0
$$

> **A conductor shields its interior by rearranging surface charge until the net field inside the material is zero.**

### Knowledge Point 24: A Faraday Cage Uses the Same Principle

封闭金属外壳通过 surface-charge redistribution，使 enclosure interior 在静电条件下免受 external field 影响。

范围要准确：

- 本节结论针对 electrostatics；
- 时变 electromagnetic shielding 还取决于频率、材料、开孔尺寸与 skin depth。

## 12. A Conductor Is Equipotential, Not Necessarily at Zero Potential / 导体等势但不一定零势

### Knowledge Point 25: Zero Field Means No Spatial Change in Potential

导体材料内部：

$$
\vec E=0
$$

又因为：

$$
\vec E=-\nabla V
$$

所以：

$$
\nabla V=0
$$

即：

$$
\boxed{V=\text{constant throughout a conductor in electrostatic equilibrium}}
$$

> **A conductor in electrostatic equilibrium is an equipotential body.**

### Knowledge Point 26: Equal Potential Does Not Mean Zero Potential

导体上任意两点：

$$
V_A=V_B,\qquad \Delta V=0
$$

但共同电势可以是正、负或零。

> **No potential difference means equal potential, not zero potential.**

## 13. Conducting Sphere vs Non-Conducting Sphere / 导体球与非导体球

### Knowledge Point 27: A Conducting Sphere Has Constant Potential Inside

半径 $R$、总电荷 $Q$ 的 [[Conducting Sphere]]：

$$
E(r)=
\begin{cases}
0,&r<R\\[4pt]
\dfrac{kQ}{r^2},&r\ge R
\end{cases}
$$

$$
V(r)=
\begin{cases}
\dfrac{kQ}{R},&r\le R\\[6pt]
\dfrac{kQ}{r},&r\ge R
\end{cases}
$$

内部没有 field，但 potential 与表面相同，并不为零。

### Knowledge Point 28: A Non-Conducting Sphere Is Not Equipotential Inside

均匀带电 [[Non-Conducting Sphere]] 内：

$$
E(r)=\frac{kQr}{R^3}
$$

$$
V(r)=\frac{kQ}{2R}\left(3-\frac{r^2}{R^2}\right)
$$

| 性质 | Conducting sphere | Uniform non-conducting sphere |
|---|---|---|
| 电荷位置 | surface | throughout volume |
| 内部 $E$ | $0$ | $kQr/R^3$ |
| 内部 $V$ | constant $kQ/R$ | decreases with $r$ |
| 是否等势体 | yes | no |

## 14. Connected Conductors / 相连导体

### Knowledge Point 29: Connected Conductors Reach the Same Potential

两导体用导线连接后，若仍有 potential difference，导线内就有 field，charge 会继续移动。

平衡时：

$$
\boxed{V_1=V_2}
$$

包括导线在内，整个 connected conductor system 是 equipotential。

### Knowledge Point 30: Equal Potential Does Not Mean Equal Charge

相距足够远的两个 conducting spheres：

$$
V_1=\frac{kQ_1}{R_1},\qquad V_2=\frac{kQ_2}{R_2}
$$

平衡时：

$$
\frac{Q_1}{R_1}=\frac{Q_2}{R_2}
$$

所以：

$$
\boxed{\frac{Q_1}{Q_2}=\frac{R_1}{R_2}}
$$

统一的是 potential，不是 charge。

## 15. Electric Field at a Conductor Surface / 导体表面电场

### Knowledge Point 31: The Field Must Be Normal to the Surface

**Continuation transcript:** 00:02:45-00:03:32

conductor surface 是 equipotential。若存在 tangential field：

$$
\vec E_\parallel\ne0
$$

surface charges 就会继续移动，不是 equilibrium。因此：

$$
\boxed{\vec E_\parallel=0}
$$

$$
\boxed{\vec E\perp\text{conductor surface}}
$$

> **The electric field immediately outside a conductor is perpendicular to its surface.**

### Knowledge Point 32: Normal Field Is Proportional to Surface Charge Density

取跨过 surface 的 thin pillbox。导体内 $E=0$，侧面 flux 消失，只剩外侧：

$$
EA=\frac{\sigma A}{\epsilon_0}
$$

所以：

$$
\boxed{E_\perp=\frac{\sigma}{\epsilon_0}}
$$

一般 jump condition：

$$
E_{\perp,\text{out}}-E_{\perp,\text{in}}
=\frac{\sigma}{\epsilon_0}
$$

> **A larger surface charge density produces a stronger electric field immediately outside the conductor.**

## 16. Sharp Points and Point Discharge / 尖端与尖端放电

### Knowledge Point 33: Charge Concentrates Where Curvature Is Strong

**Continuation transcript:** 00:04:03-00:05:17

非球形 conductor 虽然整体等势，surface charge density 通常不均匀。尖端曲率半径小，charge 更集中：

$$
\sigma_{\text{tip}}>\sigma_{\text{flat region}}
$$

由：

$$
E_\perp=\frac{\sigma}{\epsilon_0}
$$

可知 tip 附近 field 更强。

> **Charge crowds onto sharp regions of a conductor, creating a strong electric field near the tip.**

### Knowledge Point 34: Strong Tip Fields Can Ionize Air

尖端附近若 $E$ 足够强，会 ionize 周围空气，产生 corona discharge 或 point discharge。

因果链：

~~~text
small radius of curvature
-> high surface charge density
-> strong local electric field
-> air ionization
-> point discharge
~~~

## 17. Deep Phrases / 深句对应表

| English sentence | 中文对应理解 |
|---|---|
| The field is the negative slope of the potential graph. | 看 $V-x$ 图时，斜率取负就是电场分量。 |
| The signed area under an E-x graph gives negative potential change. | 对 $E-x$ 图做带符号面积并取负，就是电势差。 |
| Equipotential surfaces are the contour map of electric potential. | 等势面像等高线，把三维势分布画出来。 |
| No electrostatic work is done along an equipotential. | 沿等势面移动时，电场力净功为零。 |
| Field lines cross equipotentials at right angles. | 电场线必须垂直穿过等势面。 |
| Closer equipotentials mean a stronger field. | 等势线越密，单位距离电势变化越大。 |
| Free charges move until the internal field vanishes. | 导体内电荷重分布，直到材料内部场强为零。 |
| A conductor is equipotential, not necessarily at zero potential. | 导体各点同电势，但共同值不必为零。 |
| Excess charge resides on a conductor's surface. | 静电平衡时，多余电荷留在导体表面。 |
| A cavity charge induces equal and opposite charge on the inner wall. | 空腔内放电荷，内壁总感应电荷与它等量异号。 |
| Charge conservation fixes the outer-surface charge. | 求完内壁，再用电荷守恒求外壁。 |
| Electrostatic shielding is produced by induced surface charge. | 静电屏蔽来自表面感应电荷产生的反向场。 |
| Connected conductors equalize potential, not charge. | 导线连接后统一的是电势，不是电荷量。 |
| The field outside a conductor is normal to its surface. | 表面不能有切向场，否则电荷仍会移动。 |
| Sharp curvature creates strong local fields. | 尖端电荷更密，局部场更强。 |

## 18. Common Mistakes / 易错点

1. 忘记 $E_x=-dV/dx$ 的负号。
2. 把 sharp corner 说成 zero slope；它通常是 derivative undefined。
3. 看到 $E=0$ 就说 $V=0$；正确是 $V$ locally constant。
4. 看到 $V=0$ 就说 $E=0$；零势面仍可能有非零场。
5. 把 $+6\ \mathrm V$ 与 $-6\ \mathrm V$ 当成等势。
6. 混淆 $W_E=-\Delta U$ 与缓慢搬运的 $W_{\text{ext}}=\Delta U$。
7. 认为所有 conductor surface charge 都 uniform。
8. 认为 cavity 自动没有场；腔内有 source charge 时通常有场。
9. 靠猜测写 inner-surface charge；应使用 metal 内的 Gaussian surface。
10. 认为 connected conductors 平分 charge；它们平衡的是 potential。
11. 给 conductor surface 画 tangential field。
12. 把 electrostatic shielding 无条件推广到所有时变电磁场。

## 19. Problem-Solving Templates / 题型动作

### A. Convert V-x to E-x

1. 分段找 slope。
2. slope 取负得到 $E_x$。
3. 水平段对应 $E_x=0$。
4. corner 标记 derivative undefined。
5. 用 slope magnitude 比较 $|E|$。

### B. Read an equipotential map

1. $\vec E$ 垂直等势线。
2. 方向从 high $V$ 指向 low $V$。
3. 等势线越密，$|\vec E|$ 越大。
4. 沿同一等势线移动，$W_E=0$。
5. 不混淆 $V=0$ 与 $E=0$。

### C. Find induced charges in a cavity

1. 在 metal 内取包围 cavity 的 Gaussian surface。
2. 用 $E=0$ 得 flux $=0$。
3. 写 $q+Q_{\text{inner}}=0$。
4. 得 $Q_{\text{inner}}=-q$。
5. 用 conductor 总电荷守恒求 $Q_{\text{outer}}$。

### D. Solve nonuniform spherical density

1. 写 $\rho(r)$。
2. 取 thin shell：$d\tau=4\pi r^2dr$。
3. 写 $dq=\rho(r)d\tau$。
4. 积分得到 $Q_{\text{enc}}(r)$。
5. 代入 $E(4\pi r^2)=Q_{\text{enc}}/\epsilon_0$。
6. 分清 inside、metal、outside。

### E. Audit electrostatic equilibrium

1. conducting material 内 $E=0$。
2. conductor 整体 equipotential。
3. excess charge 只在 surfaces。
4. cavity 内是否有 source charge。
5. surface field 是否 normal。
6. sharp region 是否有更大 $\sigma$ 和 $E$。

## 20. After-Class Compression / 课后压缩版

只记住十二句话：

1. $E_x=-dV/dx$：$V-x$ 的负斜率就是电场分量。
2. $\Delta V=-\int E_xdx$：$E-x$ 的带符号面积给出负的电势变化。
3. equipotential 上 $\Delta V=0$，electric force 净功为零。
4. $\vec E$ 垂直等势面，并从高电势指向低电势。
5. 等势线越密，场越强。
6. electrostatic equilibrium 时 conducting material 内 $E=0$。
7. conductor 是 equipotential body，但共同电势不一定为零。
8. excess charge 位于 conductor surface。
9. cavity 内放 $q$，inner surface 总感应电荷为 $-q$。
10. electrostatic shielding 来自 induced surface charge。
11. conductor surface 外侧场垂直表面，且 $E_\perp=\sigma/\epsilon_0$。
12. sharp tip 上 $\sigma$ 大、局部 $E$ 强，容易 point discharge。

## 21. Video Companion / 搭配视频观看

两个 transcript 的时间码独立计时。

### Main transcript: the course material

| 时间 | 观看重点 |
|---|---|
| 00:00:44-00:10:53 | 回顾 $E=-dV/dx$ 与 force-energy 对应 |
| 00:10:53-00:18:30 | $V-x$、$E-x$ 图像与不可导点 |
| 00:18:30-00:35:00 | equipotential 定义、方向和零功 |
| 00:35:00-00:44:00 | 等势线疏密与场强 |
| 00:44:00-01:00:00 | Gauss's law 复盘 |
| 01:00:00-01:14:00 | electrostatic equilibrium 与内部 $E=0$ |
| 01:14:00-01:40:00 | cavity charge 与非均匀密度积分 |
| 01:40:00-01:48:00 | electrostatic shielding / Faraday cage |
| 01:48:00-01:53:00 | conductor equipotential |
| 01:53:00-02:02:00 | 分段场与电势排序 |

### Continuation transcript

| 时间 | 观看重点 |
|---|---|
| 00:00:00-00:02:45 | 接续 Y/Z 电势排序 |
| 00:02:45-00:03:32 | surface 与 field 垂直 |
| 00:03:32-00:04:03 | $E_\perp=\sigma/\epsilon_0$ |
| 00:04:03-00:05:17 | sharp points 与 point discharge |

## 22. Connections / 知识网络

### Lecture Sequence

- [[AP电磁学第1次正课-电荷库仑定律与电场]]
- [[AP电磁学第2次正课-连续带电体电场与电通量]]
- [[AP电磁学第3次正课-高斯定律与对称带电体]]
- [[AP电磁学第4次正课-电势能与电势]]
- [[AP电磁学第5次正课-电势差与电场电势关系]]

### Core Physics

- [[Electric Potential]]
- [[Electric Field]]
- [[Electric Force]]
- [[Gauss's Law]]
- [[Conductors]]
- [[Conducting Sphere]]
- [[Non-Conducting Sphere]]
- [[Equipotential Surface]]
- [[Electrostatic Equilibrium]]

### Charge Distribution and Math

- [[Surface Charge Density]]
- [[Volume Charge Density]]
- [[Symmetry]]
- [[Derivatives]]
- [[Integrals]]
- [[Vectors]]
- [[Fundamental Theorem of Calculus]]

这节课把数学图像真正变成了物理图像：$V$ 的 slope 是 $-\vec E$，$\vec E$ 的 line integral 是 $-\Delta V$；等势面是 scalar field 的 contour，而电场是它下降最快的 direction field。

## Next Lecture / 下一讲

- [[AP电磁学第7次正课-电容器与电容储能]] 从 conductor equipotential 与 surface charge 出发，进入 capacitance、不同 geometry 的 capacitor，以及 stored electric energy。
