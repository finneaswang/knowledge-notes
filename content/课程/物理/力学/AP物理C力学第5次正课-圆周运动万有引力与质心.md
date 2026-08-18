---
title: "AP物理C力学第5次正课 - 圆周运动万有引力与质心"
description: "A connected bilingual learning note about AP物理C力学第5次正课 - 圆周运动万有引力与质心."
publish: true
tags: [open-notes, physics-mechanics]
---
# AP物理C力学第5次正课 - 圆周运动万有引力与质心

## Reading Guide / 阅读说明

这节课先把 [[Circular Motion]] 用在锥摆、转弯和竖直圆周，再由圆周所需的径向合力过渡到 [[Universal Gravitation]]；随后用质心把多物体系统压缩为一个整体运动对象，最后开启 work-energy 单元。

> [!summary] 一句话主线
> **Circular motion asks which real forces supply the radial net force; gravitation and center of mass then extend that same system view from one object to many.**

## 1. Conical Pendulum / 锥摆

摆线与竖直方向夹角为 $\theta$，圆周半径为 $r$：

$$
T\cos\theta=mg
$$

$$
T\sin\theta=m\frac{v^2}{r}
$$

两式相除：

$$
\tan\theta=\frac{v^2}{rg}
$$

若绳长为 $L$，则 $r=L\sin\theta$。同一个 tension 同时提供竖直平衡和水平向心分量。

## 2. Flat Turn / 水平转弯

汽车在水平路面转弯时，通常由 static friction 提供径向合力：

$$
f_s=m\frac{v^2}{r}
$$

在临界打滑处：

$$
\mu_smg=m\frac{v_{\max}^2}{r}
$$

$$
\boxed{v_{\max}=\sqrt{\mu_sgr}}
$$

质量消去，说明理想模型下临界速度与车重无关。

## 3. Frictionless Banked Turn / 无摩擦倾斜弯道

normal force 的竖直分量平衡重力，水平分量提供向心力：

$$
N\cos\theta=mg,
\qquad
N\sin\theta=m\frac{v^2}{r}
$$

$$
\boxed{\tan\theta=\frac{v^2}{rg}}
$$

这给出 zero-friction design speed。对于固定 $r,\theta$，理想无摩擦条件下只有这个速度能保持圆轨道；不是笼统的“最小速度”。

## 4. Vertical Circle / 竖直圆周

始终先选 radial inward positive，再写：

$$
\sum F_r=m\frac{v^2}{r}
$$

内侧圆周的典型位置：

- bottom: $N-mg=mv^2/r$；
- top: $N+mg=mv^2/r$；
- side: 重力通常含 radial 与 tangential 角色，必须按所选轴分解。

顶部恰好保持接触时 $N=0$：

$$
\boxed{v_{\text{top,min}}=\sqrt{gr}}
$$

径向合力瞬时垂直于速度，因此径向分量本身不改变 speed；速度大小的改变来自 tangential force component。

### Hill and valley apparent weight

凸起顶部：

$$
mg-N=m\frac{v^2}{r}
$$

凹谷底部：

$$
N-mg=m\frac{v^2}{r}
$$

所以山顶 scale reading 变小，谷底变大。

## 5. Universal Gravitation / 万有引力

两点质量之间：

$$
\boxed{F_g=G\frac{m_1m_2}{r^2}}
$$

$r$ 是 center-to-center distance。球对称天体外部可等效为质量集中在中心：

$$
\boxed{g(r)=\frac{GM}{r^2}}
$$

质量是物体的惯性/引力属性；weight 是所处引力场中的力 $W=mg$，会随位置变化。

## 6. Shell Theorem / 壳层定理

对 spherically symmetric mass distribution：

- uniform spherical shell 外部等效为中心点质量；
- shell 内部引力场为零；
- uniform solid sphere 内部只有半径 $r$ 内的 enclosed mass 贡献净场。

均匀实心球内：

$$
M_{\text{enc}}=M\frac{r^3}{R^3}
$$

$$
g(r)=\frac{GM_{\text{enc}}}{r^2}
=\frac{GM}{R^3}r
$$

因此 $g$ 从中心线性增至表面，随后在外部按 $1/r^2$ 下降。

## 7. Center of Mass / 质心

离散系统：

$$
\boxed{\vec r_{\text{CM}}=\frac{\sum_i m_i\vec r_i}{\sum_i m_i}}
$$

连续分布：

$$
\boxed{\vec r_{\text{CM}}=\frac1M\int \vec r\,dm}
$$

根据几何选取：

$$
dm=\lambda,dl,
\qquad dm=\sigma,dA,
\qquad dm=\rho,dV
$$

对两个质量，质心把连线按反质量比分割：

$$
\frac{r_1}{r_2}=\frac{m_2}{m_1}
$$

质心更靠近大质量；均匀对称物体的质心在对称中心或轴上。详见 [[Center of Mass]]。

## 8. From Dynamics to Energy / 从力进入能量

Unit 2 主要问：哪些 forces 产生 acceleration？

Unit 3 改问：这些 interactions 如何转移或储存 energy？

课程先列出：

- kinetic energy；
- gravitational potential energy；
- elastic potential energy；
- thermal/internal energy。

下一课会把 force 沿 displacement 的累积定义为 [[Work]]，再建立 [[Work-Energy Theorem]] 与 [[Mechanical Energy Conservation]]。

## 9. Deep Phrases / 深层表达

- **The inward direction changes from point to point, so the radial equation must be rebuilt at each position.**
- **A centripetal requirement is an equation for the net radial force, not a new interaction.**
- **The center of mass is a mass-weighted position, not necessarily a point occupied by material.**
- **Inside a uniform solid sphere, enclosed mass grows faster than the inverse-square denominator shrinks.**

## 10. Error Checklist / 易错清单

- 圆周题始终固定用纸面某方向作 radial positive；
- 顶点把 $mg$ 与 $N$ 错写成相减；
- 计算 surface altitude 时把 $h$ 直接代成 $r$，忘记 $r=R+h$；
- 把 shell theorem 套给非球对称分布；
- 连续体质心积分时忘记先写 $dm$。

## Connected Notes / 连接

- Previous: [[AP物理C力学第4次正课-连接体阻力与圆周运动入门]]
- Next: [[AP物理C力学第6次正课-功功率势能与机械能守恒]]
- Concepts: [[Circular Motion]] / [[Universal Gravitation]] / [[Center of Mass]]
