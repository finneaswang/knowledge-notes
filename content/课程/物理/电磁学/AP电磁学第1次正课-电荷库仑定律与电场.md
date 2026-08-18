---
title: "AP电磁学第1次正课 - 电荷、库仑定律与电场"
description: "A connected bilingual learning note about AP电磁学第1次正课 - 电荷、库仑定律与电场."
publish: true
tags: [open-notes, physics-electromagnetism]
---
# AP电磁学第1次正课 - 电荷、库仑定律与电场

## Reading Guide / 阅读说明

这份笔记不是逐字稿，而是把 AP 电磁学第一节正课整理成 Obsidian 知识网络。英文保留核心概念和考试句，中文负责解释、纠错和串联。

Connected from:

- [[UBC Knowledge Graph]]
- [[03 - Derivative Formulas through Geometry]]
- [[微积分BC第13次正课-无穷级数判敛]]

## 1. What This Lecture Is About / 这节课在讲什么

这节课是 AP Electricity and Magnetism 的第一节正课。老师先提醒电磁学需要的前置工具，然后正式进入：

```text
electric charge -> induction/polarization -> Coulomb's law -> electric field
```

这节课还没有真正开始推 [[Gauss's Law]]。老师只是提前强调：后面高斯定律会系统使用微积分，并且会要求总结五类对称模型。

## 2. Class Flow / 课堂脉络

1. 课前工具：[[Vectors]]、derivatives/integrals、kinematics、[[Newton's Second Law]]、energy and momentum。
2. 进入电学：[[Electric Charge]] 是物质的 fundamental property。
3. 解释 charge conservation：电荷不能凭空产生或消失，只能转移。
4. 区分 electric charge 的正负号和 vector 的方向：charge 是 scalar，不是 vector。
5. 讲摩擦起电：不同材料吸引电子能力不同，摩擦提供能量让电子更容易转移。
6. 讲 [[Induction]] / [[Polarization]]：不接触也能让中性物体内部电荷重新分布。
7. 解释为什么带电体总会吸引中性小物体。
8. 讲 [[Electroscope]]：能检测是否带电，但单独不能判断电荷正负。
9. 引入 [[Dielectric Constant]] $\epsilon$ 和 relative permittivity $\kappa$。
10. 讲 [[Coulomb's Law]]，并和 [[Universal Gravitation]] 对比。
11. 做 Coulomb force 的计算和矢量叠加。
12. 引入 [[Electric Field]]：把“具体受力”除以 test charge，得到空间本身的背景性质。
13. 讲 [[Electric Field Lines]]、point charge field、[[Uniform Electric Field]]。
14. 用 uniform electric field 类比 projectile motion：电场中的带电粒子也会做类似平抛的运动。

## 3. Prerequisite Map / 前置知识地图

### Vector Rules / 矢量规则

电磁学里 force 和 electric field 都是 vectors，所以先要会：

- vector addition / 矢量加法
- vector subtraction / 矢量减法
- scalar multiplication / 标量乘矢量
- component decomposition / 分解到 $x,y$ 方向

重要句：

```text
Subtracting a vector means adding its opposite.
```

中文理解：物理里不建议死背“减法箭头指向谁”，直接把 $A-B$ 看成 $A+(-B)$。

### Derivatives and Integrals / 微积分工具

电磁学后面会大量用到：

$$
\frac{d}{dx}x^n=nx^{n-1}
$$

$$
\frac{d}{dx}\ln x=\frac{1}{x}
$$

$$
\int \frac{1}{x}\,dx=\ln x+C
$$

这和 [[03 - Derivative Formulas through Geometry]] 直接相连：那篇解释了 [[Power Rule]] 和 [[Trigonometric Derivatives]] 的几何直觉，这里开始把它们作为物理工具使用。

### Newton's Second Law / 牛顿第二定律

两种写法都要会：

$$
F=ma
$$

$$
F=\frac{dp}{dt}
$$

其中：

$$
p=mv
$$

如果质量不变：

$$
\frac{dp}{dt}=m\frac{dv}{dt}=ma
$$

Core sentence:

```text
Force is not the cause of velocity; force is the cause of acceleration.
```

中文理解：力不是“让物体有速度”的原因，而是“让速度改变”的原因。这在电场力加速带电粒子时非常重要。

### Energy / 能量

保守力做功和势能变化关系：

$$
W_{\text{conservative}}=-\Delta U
$$

重力、电场力、库仑力都可以作为保守力来理解。后面 electric potential energy 会沿着这个思路发展。

## 4. Core Ideas / 核心知识块

### Knowledge Point 1: Electric Charge Is a Fundamental Property

[[Electric Charge]] 是物质的基本属性，地位上类似 mass。

Core sentence:

```text
Electric charge is a fundamental property of matter.
```

中文理解：在 AP 经典电磁学里，我们不继续追问“电荷又由什么导致”。就像力学里先把质量当作基本属性，电学里先把电荷当作基本属性。

电荷特点：

- 有正负：positive charge / negative charge
- 是 scalar quantity / 标量
- 单位是 coulomb / 库伦，符号 C
- 总量守恒：charge is conserved
- 基本电荷量：

$$
e=1.6\times10^{-19}\ \text{C}
$$

注意：

```text
Charge has sign, but sign is not direction.
```

中文理解：速度的正负号可以表示方向；电荷的正负号表示电性，不表示方向。所以 electric charge 是 scalar，不是 vector。

### Knowledge Point 2: Charging by Friction Is Electron Transfer

摩擦起电不是凭空创造电荷，而是电子从一个物体转移到另一个物体。

Core sentence:

```text
Charging by friction transfers electrons; it does not create charge from nothing.
```

中文理解：正负电总量仍然守恒。一个物体失去电子就带正电，另一个物体得到电子就带负电。

为什么摩擦有用？

- 不同材料对电子的吸引能力不同。
- 摩擦提供能量，让电子更容易摆脱原来的束缚。
- 结果是电子发生转移。

课堂里提到：

- glass + silk 通常使 glass 带正电
- rubber rod + fur 通常使 rubber rod 带负电

### Knowledge Point 3: Like Charges Repel; Unlike Charges Attract

带电物体之间的基本作用：

```text
Like charges repel; unlike charges attract.
```

中文：

```text
同种电荷相互排斥，异种电荷相互吸引。
```

这个力可以叫：

- electric force
- electrostatic force
- Coulomb force

方向：沿两电荷中心连线。

### Knowledge Point 4: Induction and Polarization Mean Charge Redistribution

[[Induction]] / induced charging / [[Polarization]] 的本质是：

```text
External electric influence redistributes charges inside an object.
```

中文理解：中性物体本来内部也有正负电荷，只是平均抵消。带电体靠近后，正负电荷在空间上重新排列，导致一端表现得偏正，另一端表现得偏负。

重要句：

```text
Polarization is not creating charge; it is separating charge.
```

中文理解：极化不是凭空产生电，而是把本来混在一起、总体抵消的正负电荷分开。

### Knowledge Point 5: Grounding Can Leave an Object Charged

接地 / grounding 的作用：

```text
Grounding allows charge to flow to or from Earth.
```

中文理解：大地被近似看成一个巨大电荷库。对普通小物体来说，流入或流出的那点电荷对地球整体几乎没有影响。

经典流程：

1. 带电棒靠近中性导体。
2. 导体内部发生 polarization。
3. 接地后，一类电荷流走。
4. 先断开接地线，再拿走带电棒。
5. 导体留下净电荷。

关键顺序：

```text
Disconnect the ground first, then remove the charged rod.
```

如果只把带电棒拿走，不接地，导体内部正负电荷会重新中和，整体仍然不带电。

### Knowledge Point 6: Why a Charged Object Attracts a Neutral Object

课堂活动的核心问题：

```text
Why does a charged rod always attract a neutral metal sphere?
```

答案分两步：

1. 带电棒使中性球 polarized。
2. 感应出的 opposite charge closer，同号电荷 farther。

所以吸引力更强：

```text
Opposite charge is closer, so attraction dominates.
```

中文理解：不是没有排斥力，而是排斥力那部分距离更远，大小更小；近端的异号吸引力占主导。

生活例子：

- 灰尘被电脑、手机、屏幕吸附
- 小纸片被带电塑料棒吸引
- 贴膜时屏幕容易吸灰
- 静电除尘

### Knowledge Point 7: Electroscope Detects Charge, Not Sign

[[Electroscope]] / 验电器：可以看出物体是否带电。

原理：

1. 带电体靠近。
2. 验电器内部电荷被感应分离。
3. 两片金属叶带同种电荷。
4. 同种电荷排斥，所以金属叶张开。

但普通验电器单独不能判断电荷正负。

Core sentence:

```text
An electroscope can detect the presence of charge, but not the sign by itself.
```

中文理解：正电棒靠近会张开，负电棒靠近也会张开；只看“张开”不能知道正负。

如果验电器本来 already charged，再靠近一个物体导致张角变小，则说明靠近物体与验电器原来带电相反。

### Knowledge Point 8: Dielectric Constant Measures Polarizability

[[Dielectric Constant]] / permittivity 衡量材料被电场极化的能力。

真空介电常数：

$$
\epsilon_0=8.85\times10^{-12}\ \frac{\text{C}^2}{\text{N}\cdot\text{m}^2}
$$

相对介电常数：

$$
\kappa=\frac{\epsilon}{\epsilon_0}
$$

所以：

$$
\epsilon=\kappa\epsilon_0
$$

Core sentence:

```text
Relative permittivity tells how many times a material's permittivity is compared with vacuum.
```

中文理解：表里给 $\kappa$ 时，它不是绝对介电常数，而是“是真空的多少倍”。

### Knowledge Point 9: Coulomb's Law Gives the Force Between Two Point Charges

[[Coulomb's Law]]:

$$
F=k\frac{|q_1q_2|}{r^2}
$$

其中：

- $q_1,q_2$：两个电荷量
- $r$：两电荷之间距离
- $k$：Coulomb constant

$$
k=9.0\times10^9\ \frac{\text{N}\cdot\text{m}^2}{\text{C}^2}
$$

也可以写作：

$$
k=\frac{1}{4\pi\epsilon_0}
$$

所以：

$$
F=\frac{1}{4\pi\epsilon_0}\frac{|q_1q_2|}{r^2}
$$

考试写法提醒：

1. 先写公式
2. 代入带单位的数值
3. 算出结果
4. 写单位和方向/吸引排斥

### Knowledge Point 10: Coulomb Force vs Gravitational Force

万有引力：

$$
F_g=G\frac{m_1m_2}{r^2}
$$

库仑力：

$$
F_e=k\frac{|q_1q_2|}{r^2}
$$

相似点：

- 都是 inverse-square law / 平方反比定律
- 都沿中心连线方向
- 都与两个“源量”的乘积成正比

不同点：

- gravity only attracts / 万有引力只有吸引
- electric force can attract or repel / 电力可吸引也可排斥
- microscopic charged particles often have electric force far stronger than gravitational force

Core sentence:

```text
Electric force is often much stronger than gravity at the particle scale.
```

中文理解：在电磁题里经常忽略重力，不是因为重力不存在，而是因为电场力数量级大得多。

### Knowledge Point 11: Electric Forces Add as Vectors

多个电荷对某个电荷的作用力：

```text
calculate each pairwise Coulomb force, then add them vectorially
```

中文理解：先两两算，再做矢量合成。不能把大小直接相加，除非方向相同。

常见错误：

```text
Adding magnitudes when directions are different.
```

如果两个力夹角 $90^\circ$ 且大小相等：

$$
F_{\text{net}}=\sqrt{2}F
$$

方向沿角平分线。

### Knowledge Point 12: Electric Field Is Force per Unit Positive Test Charge

[[Electric Field]] 的定义：

$$
\vec E=\frac{\vec F}{q}
$$

单位：

$$
\text{N/C}
$$

Core sentence:

```text
Electric field is force per unit positive test charge.
```

中文理解：力取决于你放进去的具体 test charge 有多大。电场是把这个具体电荷量除掉之后，留下来的“空间背景性质”。

这句话很关键：

```text
Field is the background; force is what a particular charge feels in that background.
```

中文理解：场是背景，力是某个具体电荷放进去之后的响应。

### Knowledge Point 13: Electric Field of a Point Charge

由单个点电荷产生的电场：

$$
E=k\frac{|Q|}{r^2}
$$

这里 $Q$ 是 source charge / 场源电荷。

注意：

```text
E = kQ/r^2 only applies directly to a single point charge.
```

中文理解：如果是带电板、无限长导线、圆柱、球壳、不规则带电体，不能直接乱套这个公式。那些要用对称性、叠加，或者后面的 [[Gauss's Law]]。

### Knowledge Point 14: Direction of Electric Field Uses a Positive Test Charge

电场方向规定为：

```text
the direction of force on a positive test charge
```

所以：

- positive source charge: field lines point outward
- negative source charge: field lines point inward

中文：

- 正电荷电场线向外发散
- 负电荷电场线向内汇聚

如果 field line 是弯的，某一点的电场方向是该点 field line 的 tangent direction。

### Knowledge Point 15: Uniform Electric Field Acts Like Constant Acceleration

[[Uniform Electric Field]] 通常由两块平行、带相反电荷的板产生。

方向：

```text
from positive plate to negative plate
```

带电粒子受到的电场力：

$$
\vec F_e=q\vec E
$$

如果 $\vec E$ 是 constant，则：

$$
a=\frac{F}{m}=\frac{qE}{m}
$$

这和 projectile motion 很像：

- 水平方向：constant velocity
- 竖直方向：constant acceleration

中文理解：在重力平抛里，恒力是 $mg$；在匀强电场里的“平抛”中，恒力是 $qE$。

## 5. Deep Phrases / 深句对应表

| Phrase / 句子 | What it should trigger / 看到它要想到什么 |
|---|---|
| Charge has sign, but sign is not direction. | 电荷是 scalar，正负号不是 vector direction。 |
| Charging by friction transfers electrons. | 摩擦起电不是造电，是电子转移。 |
| Polarization is charge separation, not charge creation. | 极化只是重新分布，本来总电荷仍守恒。 |
| Opposite charge is closer, so attraction dominates. | 带电体吸引中性物体的核心解释。 |
| An electroscope detects charge, not sign by itself. | 验电器能验有无电，不能单独验正负。 |
| Coulomb's law is an inverse-square law. | 电力随距离平方反比衰减，和万有引力形式很像。 |
| Electric forces add as vectors. | 多电荷题不能只加大小，要做矢量合成。 |
| Field is the background; force is the response. | 电场是空间性质，力是具体电荷在场里的响应。 |
| Electric field is force per unit positive test charge. | $\vec E=\vec F/q$，方向按正试探电荷定义。 |
| Uniform electric field mimics constant gravity. | 匀强电场中带电粒子运动类似平抛。 |

## 6. Formula Map / 公式地图

### Charge

$$
e=1.6\times10^{-19}\ \text{C}
$$

### Newton's Second Law

$$
F=ma
$$

$$
F=\frac{dp}{dt}
$$

### Conservative Force and Potential Energy

$$
W_{\text{conservative}}=-\Delta U
$$

### Permittivity

$$
\epsilon=\kappa\epsilon_0
$$

$$
\epsilon_0=8.85\times10^{-12}\ \frac{\text{C}^2}{\text{N}\cdot\text{m}^2}
$$

### Coulomb's Law

$$
F=k\frac{|q_1q_2|}{r^2}
$$

$$
k=\frac{1}{4\pi\epsilon_0}=9.0\times10^9\ \frac{\text{N}\cdot\text{m}^2}{\text{C}^2}
$$

### Electric Field

$$
\vec E=\frac{\vec F}{q}
$$

### Point Charge Field

$$
E=k\frac{|Q|}{r^2}
$$

### Force in an Electric Field

$$
\vec F=q\vec E
$$

### Acceleration in a Uniform Electric Field

$$
a=\frac{qE}{m}
$$

## 7. Typical AP Thinking / AP题目思路

### Type 1: Coulomb Force Calculation

Steps:

1. Convert units first:
   - nC = $10^{-9}$ C
   - cm = $10^{-2}$ m
2. Write:

$$
F=k\frac{|q_1q_2|}{r^2}
$$

3. Plug in values.
4. Decide direction:
   - same signs -> repel
   - opposite signs -> attract

### Type 2: Multiple Charges Acting on One Charge

Steps:

1. Draw force from each source charge.
2. Use Coulomb's law for each magnitude.
3. Resolve into components if needed.
4. Add vector components.

Do not do:

```text
F_net = F1 + F2
```

unless the directions are the same.

### Type 3: Charged Object and Neutral Object

Answer structure:

```text
The neutral object becomes polarized. The opposite charge is closer to the charged object, while the like charge is farther away. Since electric force depends on distance, the attraction is stronger than the repulsion, so the net force is attractive.
```

中文压缩版：

```text
先极化，异号近，同号远；近端吸引更强，所以净力为吸引。
```

### Type 4: Electric Field Direction

Rule:

```text
Electric field direction is the force direction on a positive test charge.
```

所以遇到负电荷时，不要用负电荷受力方向定义电场方向。

### Type 5: Motion in Uniform Electric Field

如果粒子带电量 $q$、质量 $m$，在匀强电场 $E$ 中：

$$
a=\frac{qE}{m}
$$

如果初速度垂直于电场：

```text
parallel to initial velocity: constant velocity
parallel to electric force: constant acceleration
```

这就是类平抛模型。

## 8. Confusion / Questions

1. 为什么 electric charge 是 scalar，而 electric force 和 electric field 是 vectors？
2. 为什么摩擦起电不违反电荷守恒？
3. 为什么中性物体会被带电体吸引，而不是“不受影响”？
4. 为什么验电器单独不能判断正负号？
5. $\epsilon_0$ 和 $\kappa$ 分别是什么？为什么 $\kappa$ 没有单位？
6. Coulomb's law 为什么要用绝对值算 magnitude？
7. 多个电荷的力为什么必须矢量相加？
8. 为什么 $E=kQ/r^2$ 只适用于单个点电荷？
9. 为什么 electric field direction 要用 positive test charge 定义？
10. 匀强电场里的带电粒子运动为什么像 projectile motion？

## 9. Source Anchors / 视频定位

- **00:01:53-00:09:57**：vectors、calculus、kinematics、Newton's second law 与 energy 前置工具
- **00:11:31-00:20:40**：electric charge、scalar、friction charging 与 charge conservation
- **00:20:41-00:34:48**：induction、polarization、grounding，以及为什么带电体吸引中性物体
- **00:34:49-00:47:51**：electroscope 的结构、现象和判断边界
- **00:47:52-00:53:28**：permittivity 与 dielectric constant
- **00:53:29-01:26:01**：Coulomb's law、与 gravitation 的比较及课堂计算
- **01:26:02-01:46:53**：多个电荷之间的 vector superposition
- **01:46:54 起**：electric field、point-charge field、field direction 与 uniform-field motion

使用方式：单独复习时按前面的 Knowledge Points 阅读；配合课堂录像时，用这里的时间段先定位，再回到对应知识点核对公式、例题和易错点。

## 10. After Class Summary / 看完压缩版

这节课的主线是从“电荷是什么”走到“空间里有电场”。

首先，electric charge 是物质的 fundamental property，是 scalar，有正负但没有方向。电荷守恒，摩擦起电只是电子转移。

其次，induction / polarization 解释了为什么不接触也能让中性物体出现局部分离电荷。带电体吸引中性物体的原因是：近端异号电荷吸引更强，远端同号电荷排斥更弱。

然后，Coulomb's law 给出两个点电荷之间的作用力：

$$
F=k\frac{|q_1q_2|}{r^2}
$$

多个电荷作用时，先算每一个力，再矢量叠加。

最后，electric field 把“某个具体电荷受到的力”转化成“空间本身的背景性质”：

$$
\vec E=\frac{\vec F}{q}
$$

点电荷场：

$$
E=k\frac{|Q|}{r^2}
$$

但这个公式只适用于单个点电荷。后面更复杂的连续带电体会引出 [[Gauss's Law]]。

## 11. Additional Clarifications from the Course PDF / 教案辅助补充

以下内容用于补足 transcript 中略讲或容易误解的地方，不改变本节课的主线。复习时应先完成前面的 Core Ideas，再按需要查阅这里。

这个补充只使用教案 the course transcript，并且只补这节课 transcript 已经讲到或明显对应的 PPT 范围：

```text
8.1 Charge and Coulomb's Law
8.2.1 Electric Field of a Point Charge
8.2.2 Superposition of Electric Fields
```

暂时不把教案后面的 [[Electric Fields of Different Charge Distributions]]、[[Gauss's Law]]、[[Electric Potential]]、[[Capacitors]]、[[Electric Circuits]]、[[Magnetic Fields]] 全部塞进来。那些需要等对应课堂 transcript，再单独生成后续笔记。

### Supplement 1: Charge Is Quantized / 电荷量子化

原笔记已经写了 elementary charge，但教案里更明确强调：

```text
Charge is quantized.
```

也就是任何物体的净电荷量通常写成：

$$
q=ne
$$

其中 $n$ 是整数，$e=1.602\times10^{-19}\ \mathrm{C}$。

中文理解：电荷不是任意连续取值，而是一份一份的。AP 题里如果问“一个物体能不能带 $0.5e$ 的电荷”，答案是不可以，因为净电荷必须是 elementary charge 的整数倍。

### Supplement 2: Point Charge Is a Model / 点电荷是模型

教案明确说：

```text
A point charge is a model in which the physical size of a charged object is negligible.
```

中文理解：点电荷不是说物体真的没有大小，而是在当前问题尺度下，它的大小可以忽略。只要距离远大于物体尺寸，就可以把它近似成一个点。

这句话和 [[Coulomb's Law]] 直接相连：

$$
F=k\frac{|q_1q_2|}{r^2}
$$

这个公式最直接适用于两个 point charges。如果物体形状不能忽略，就要用叠加、积分，或后面的 [[Gauss's Law]]。

### Supplement 3: Conductors vs Insulators in Induction / 导体和绝缘体的极化区别

transcript 里主要用金属球解释感应起电；教案补充了 conductor 和 insulator 的差别。

Conductors:

```text
Charge carriers move easily.
```

中文：导体里自由电荷容易移动，所以外部带电体靠近时，电荷能在整个导体表面重新分布。

Insulators:

```text
Charge carriers cannot move easily; polarization happens within molecules.
```

中文：绝缘体里电荷不能自由跑到另一端，但分子内部的正负电荷中心可以轻微错开，所以也能极化，也会被带电体吸引。

这能解释为什么：

- 金属球会被带电棒吸引
- 小纸片、泡沫、灰尘也会被带电物体吸引
- 但导体的极化通常更明显

### Supplement 4: Electroscope Question Logic / 验电器题目逻辑

教案里的 2022 Intl MCQ 33 对应课堂讨论：验电器本身被 charge 之后，再把 charged rod 靠近，观察张角变化。

关键规则：

```text
If a charged electroscope's leaves move closer together, the external rod has the opposite sign.
```

中文理解：如果验电器原来已经带电，叶片张开。外部带电棒靠近后，如果张角变小，说明它把叶片上的同号电荷“拉回去/重新分布”，所以外部棒和验电器原电荷相反。

但注意：

```text
Opposite signs can be determined, but not which one is positive without extra information.
```

所以答案类型通常是：

```text
They have opposite types of charge, but it cannot be determined which is positive and which is negative.
```

### Supplement 5: Permittivity vs Relative Permittivity / 介电常数与相对介电常数

原笔记已经写：

$$
\epsilon=\kappa\epsilon_0
$$

教案强调的是 interpretation：

```text
Electric permittivity measures how much a material polarizes in an electric field.
```

中文理解：$\epsilon$ 越大，材料越容易在电场中被极化；$\kappa$ 是“相对于真空的倍数”，所以没有单位。

Example:

如果 Mica 的 $\kappa=3.0$，则：

$$
\epsilon=3.0\epsilon_0
=3.0(8.85\times10^{-12})
=2.66\times10^{-11}\ \frac{\mathrm{C}^2}{\mathrm{N}\cdot\mathrm{m}^2}
$$

### Supplement 6: Magnitude First, Direction Second / 库仑力先算大小，再判方向

教案和课堂例题都在训练这个流程：

```text
Use Coulomb's law for magnitude; use signs for direction.
```

大小：

$$
F=k\frac{|q_1q_2|}{r^2}
$$

方向：

- same sign -> repulsive
- opposite sign -> attractive

中文理解：把负号直接丢进大小公式很容易算出“负的力”，然后误会。AP 题里更稳的做法是：大小用绝对值，方向单独用文字或箭头说明。

### Supplement 7: Nonfundamental Forces / 日常接触力的电磁本质

教案补充了 fundamental forces：

- gravitational force
- electromagnetic force
- strong force
- weak force

课堂里提到：normal force、friction、tension 这些宏观接触力，本质上很多来自微观电磁相互作用。

Core sentence:

```text
Everyday contact forces are macroscopic results of many microscopic electromagnetic interactions.
```

中文理解：桌面对书的支持力，不是凭空来的“第五种力”。微观上是原子/分子之间电磁相互排斥的宏观结果。

### Supplement 8: Superposition Applies to Force and Field / 力和场都满足叠加

电力叠加：

$$
\vec F_{\text{net}}=\vec F_1+\vec F_2+\vec F_3+\cdots
$$

电场叠加：

$$
\vec E_{\text{net}}=\vec E_1+\vec E_2+\vec E_3+\cdots
$$

重要区别：

```text
Force depends on the test charge; electric field depends only on source charges.
```

中文理解：算 $\vec F$ 时你关心“这个被作用的电荷是什么”；算 $\vec E$ 时你只看“周围源电荷在这个点创造了什么场”。

### Supplement 9: Test Charge Must Be Small / 试探电荷必须足够小

教案定义 [[Test Charge]] 时强调：

```text
A test charge is small enough that it does not significantly affect the electric field.
```

中文理解：试探电荷只是用来“测量”这一点的场。如果它太大，会反过来改变源电荷分布或原来的电场，那就不是单纯测量了。

### Supplement 10: Field Lines Are a Compressed Field Map / 电场线是矢量场图的压缩版

教案把 [[Electric Field Lines]] 和 vector field map 联系起来。

Rules:

```text
The tangent to a field line gives the direction of E.
The density of field lines shows the relative strength of E.
```

中文理解：

- 方向看切线
- 强弱看疏密
- 正电发散，负电汇聚

不要把电场线理解成真实存在的线。它只是把很多点上的 $\vec E$ 压缩成一张容易看的图。

### Supplement 11: Uniform Electric Field and Projectile Motion / 匀强电场和平抛模型

教案明确对应：

```text
A charged particle in a uniform electric field undergoes constant acceleration.
```

如果初速度垂直于电场方向：

```text
one direction: constant velocity
field direction: constant acceleration
```

所以它和近地重力场中的 projectile motion 很像。

对带电粒子：

$$
\vec F=q\vec E
$$

$$
\vec a=\frac{q\vec E}{m}
$$

注意方向：

- positive charge: acceleration along $\vec E$
- negative charge: acceleration opposite $\vec E$

### Supplement 12: What Not to Add Yet / 暂时不补进本节课的内容

教案后半还有很多内容，但不属于这节 transcript 的主体：

- [[Electric Fields of Different Charge Distributions]]
- [[Uniformly Charged Rod]]
- [[Uniformly Charged Ring]]
- [[Electric Flux]]
- [[Gauss's Law]]
- [[Conducting Sphere]]
- [[Non-Conducting Sphere]]
- [[Electric Potential]]
- [[Capacitors]]
- [[Electric Circuits]]
- [[Magnetic Fields]]

这些内容应该等对应课堂 transcript 再写新笔记。现在这篇只把 2月5号这节课真的讲到的范围补完整。

## 12. Knowledge Graph Connections / 知识图谱连接

- [[AP电磁学第2次正课-连续带电体电场与电通量]] continues this note by turning [[Coulomb's Law]] and [[Electric Field Superposition]] into continuous-charge integrals, then opens [[Electric Flux]] for [[Gauss's Law]].
- [[03 - Derivative Formulas through Geometry]] connects to this lecture through derivatives, integrals, and tiny-change thinking used later in electric field and Gauss's law.
- [[微积分BC第13次正课-无穷级数判敛]] connects through improper integrals and accumulation; later E&M uses integrals to add contributions from continuous charge distributions.
- [[Vectors]] is the immediate skill bridge: Coulomb forces and electric fields must be added vectorially.
- [[Newton's Second Law]] connects electric force to charged-particle acceleration: $\vec F=q\vec E=m\vec a$.
- [[Electric Charge]] is the root concept for electrostatics.
- [[Induction]] and [[Polarization]] explain why neutral objects can be attracted by charged objects.
- [[Coulomb's Law]] is the force law behind point-charge interactions.
- [[Electric Field]] is the bridge from force between charges to a field description of space.
- [[Gauss's Law]] is the next major method for symmetric charge distributions.

## 13. Links / 链接

- [[UBC Knowledge Graph]]
- [[AP电磁学第2次正课-连续带电体电场与电通量]]
- [[AP Physics C]]
- [[Electricity and Magnetism]]
- [[Electric Charge]]
- [[Charge Conservation]]
- [[Induction]]
- [[Polarization]]
- [[Electroscope]]
- [[Dielectric Constant]]
- [[Coulomb's Law]]
- [[Electric Force]]
- [[Electric Field]]
- [[Electric Field Lines]]
- [[Uniform Electric Field]]
- [[Insulators]]
- [[Conductors]]
- [[Point Charge]]
- [[Electric Field Superposition]]
- [[Vector Field]]
- [[Test Charge]]
- [[Gauss's Law]]
- [[Vectors]]
- [[Newton's Second Law]]
- [[Universal Gravitation]]
- [[03 - Derivative Formulas through Geometry]]
- [[微积分BC第13次正课-无穷级数判敛]]
