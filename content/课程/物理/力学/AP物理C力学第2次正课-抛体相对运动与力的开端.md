---
title: "AP物理C力学第2次正课 - 抛体相对运动与力的开端"
description: "A connected bilingual learning note about AP物理C力学第2次正课 - 抛体相对运动与力的开端."
publish: true
tags: [open-notes, physics-mechanics]
---
# AP物理C力学第2次正课 - 抛体相对运动与力的开端

## Reading Guide / 阅读说明

这节课先纠正 velocity / speed 的四种定义，补完竖直上抛；随后完成 Unit 1 的平抛、斜抛与相对运动。课堂最后正式进入 Unit 2，讲 force 的定义、六类常见力以及 free-body diagram 的第一条规范。

Connected from:

- [[AP物理C力学第1次正课-位移速度加速度与运动图像]]
- [[AP物理C力学-课程主页]]
- [[Vectors]]

> [!summary] 一句话主线
> **A curved motion becomes manageable when independent components are analyzed with one shared time; relative motion then recombines velocities through vector addition.**
>
> 曲线运动之所以可解，是因为可以把它分成共享同一时间的独立分量；相对运动再用矢量加法把不同参考系中的速度重新合成。

## 1. Four Quantities That Must Not Be Mixed / 四个容易混的量

| Quantity | Definition |
|---|---|
| average velocity | $\Delta\vec r/\Delta t$ |
| average speed | total distance $/\Delta t$ |
| instantaneous velocity | $d\vec r/dt$ |
| instantaneous speed | $|\vec v|$ |

> **Instantaneous speed is the magnitude of instantaneous velocity, but average speed is not generally the magnitude of average velocity.**

这是上一课 [[Velocity and Speed]] 的关键收口。

## 2. Vertical Launch / 竖直上抛

取 upward as positive，并忽略空气阻力：

$$
a_y=-g
$$

$$
v_y=v_0-gt
$$

$$
y=y_0+v_0t-\frac12gt^2
$$

$$
v_y^2=v_0^2-2g(y-y_0)
$$

到达最高点时：

$$
v_y=0,
\qquad
a_y=-g
$$

> **At the highest point, vertical velocity is zero for an instant, but acceleration is still downward.**

中文抓手：最高点是“速度瞬间为零”，不是“重力消失”。

若物体回到同一高度：

- ascent time = descent time；
- final speed = initial speed；
- vertical velocity direction reverses。

这些对称结论依赖相同起终高度与忽略空气阻力。

## 3. The Two-Dimensional Strategy / 二维运动总方法

[[Projectile Motion]] 的稳定流程：

1. choose axes；
2. resolve initial velocity into components；
3. write separate $x$ and $y$ equations；
4. use the same time $t$ in both directions；
5. solve components；
6. recombine vector magnitude and direction if required。

> **The horizontal and vertical motions are independent, but they share the same time.**

独立指 equations 分开；共享时间保证两个分量描述的是同一个物体、同一个时刻。

## 4. Horizontal Projectile / 平抛

设物体以水平速度 $v_0$ 抛出，取 downward as positive 方便计算：

### Horizontal component

$$
a_x=0,
\qquad
v_x=v_0,
\qquad
x-x_0=v_0t
$$

### Vertical component

$$
v_{y0}=0,
\qquad
a_y=g,
\qquad
v_y=gt,
\qquad
y-y_0=\frac12gt^2
$$

合速度：

$$
v=\sqrt{v_x^2+v_y^2}
$$

轨迹向下弯，不是因为 horizontal velocity 逐渐消失，而是因为 $v_x$ 保持不变、$|v_y|$ 持续增加。

> [!important] Two-object comparison
> 同一飞机先后释放的物体都继承 release moment 的水平速度。若忽略空气阻力，它们在水平方向与飞机保持相同速度；相对水平间距由释放时刻决定，不是后一个物体“直直掉下”。

## 5. General Projectile / 斜抛

初速度 $v_0$、launch angle $\theta$：

$$
v_{0x}=v_0\cos\theta,
\qquad
v_{0y}=v_0\sin\theta
$$

取 upward as positive：

$$
x=x_0+v_0\cos\theta\,t
$$

$$
y=y_0+v_0\sin\theta\,t-\frac12gt^2
$$

$$
v_x=v_0\cos\theta,
\qquad
v_y=v_0\sin\theta-gt
$$

消去 $t$ 可得 quadratic trajectory，所以路径是 parabola：

$$
y-y_0=(x-x_0)\tan\theta-
\frac{g(x-x_0)^2}{2v_0^2\cos^2\theta}
$$

## 6. Eight Results Around the Trajectory / 围绕轨迹的八个结果

以下时间、最大高度和 range 公式要求落点与发射点同高。

### 1. Velocity at the top

$$
v_y=0,
\qquad
v_x=v_0\cos\theta
$$

### 2. Time to the top

$$
\boxed{t_{\text{up}}=\frac{v_0\sin\theta}{g}}
$$

### 3. Maximum height above launch point

$$
\boxed{H=\frac{v_0^2\sin^2\theta}{2g}}
$$

### 4. Total time of flight

$$
\boxed{T=\frac{2v_0\sin\theta}{g}}
$$

### 5. Horizontal range

$$
R=v_xT
=\frac{2v_0^2\sin\theta\cos\theta}{g}
=\boxed{\frac{v_0^2\sin2\theta}{g}}
$$

固定 $v_0$ 且同高落地时，$\theta=45^\circ$ 给出 maximum range。互余角 $\theta$ 与 $90^\circ-\theta$ range 相同，因为：

$$
\sin(2\theta)=\sin(180^\circ-2\theta)
$$

### 6. Velocity at the same height

忽略阻力时，与发射点同高处：speed 恢复为 $v_0$，$v_x$ 相同，$v_y$ 大小相同而符号相反。

### 7. Speed at any time

$$
\boxed{
v(t)=\sqrt{(v_0\cos\theta)^2+(v_0\sin\theta-gt)^2}
}
$$

### 8. Direction at any time

若 $\phi$ 为 velocity 与 $+x$ 轴夹角：

$$
\boxed{
\tan\phi=\frac{v_y}{v_x}
=\frac{v_0\sin\theta-gt}{v_0\cos\theta}
}
$$

不要只算 $\tan^{-1}$ 后忽略 quadrant；先看 $v_x,v_y$ 的符号。

## 7. Graphs of Projectile Components / 抛体分量图像

无空气阻力：

- $v_x$-$t$ graph 是水平线，因为 $a_x=0$；
- $v_y$-$t$ graph 是 slope $-g$ 的直线；
- 到最高点时 $v_y=0$，但 graph slope 仍是 $-g$；
- speed 先减小后增大，不代表 $v_y$ graph 应画成 V shape。

最后一条是 velocity component 与 speed 的典型混淆，见 [[Kinematics Graphs]]。

## 8. Relative Motion / 相对运动

速度必须相对于某个 reference frame 描述。记号：

$$
\vec v_{A/B}=\text{velocity of A relative to B}
$$

链式加法：

$$
\boxed{
\vec v_{A/C}=\vec v_{A/B}+\vec v_{B/C}
}
$$

中间下标像 head-to-tail vector path 一样消去。

反向关系：

$$
\vec v_{A/B}=-\vec v_{B/A}
$$

### One dimension

同向追赶不是盲目“相加”：先定正方向，再做带符号减法。若 motorcycle 对 ground 是 $+30\ \text{m/s}$，car 对 ground 是 $+20\ \text{m/s}$：

$$
v_{M/C}=v_{M/G}+v_{G/C}=30-20=10\ \text{m/s}
$$

### Two dimensions: boat and river

$$
\boxed{
\vec v_{B/S}=\vec v_{B/W}+\vec v_{W/S}
}
$$

$B$ = boat，$W$ = water，$S$ = shore。先写 reference-frame equation，再画 vector triangle。

#### Minimum crossing time

要让过河时间最短，应最大化 perpendicular-to-bank component。因此船头在静水中垂直指向对岸；水流会造成 downstream drift，但不改变垂直分量。

$$
t_{\min}=\frac{\text{river width}}{|v_{B/W,\perp}|}
$$

#### Minimum path length

要让相对河岸的实际路径垂直过河，必须让上游分量抵消水流：

$$
\vec v_{B/W,\parallel}+\vec v_{W/S}=0
$$

只有当 boat speed relative to water 足够大时才能做到。

> **Minimum time and minimum distance are different optimization goals.**

## 9. Inertial Reference Frames / 惯性参考系

本课程默认使用相互做 constant-velocity motion 的 [[Inertial Reference Frames]]。若 frame $B$ 相对 $C$ 的速度恒定：

$$
\vec v_{A/C}=\vec v_{A/B}+\vec v_{B/C}
$$

对时间求导：

$$
\vec a_{A/C}=\vec a_{A/B}+\underbrace{\vec a_{B/C}}_{0}
=\vec a_{A/B}
$$

所以 Galilean inertial frames 中 velocity 会改变，acceleration 相同。

## 10. Unit 2 Begins: Force / 第二单元开端

> **A force is an interaction between objects.**

力不是物体“自己拥有”的东西；必须说明谁对谁施力。SI unit：

$$
1\ \text{N}=1\ \text{kg}\cdot\text{m/s}^2
$$

课堂把力分为：

- contact forces：normal、friction、tension、spring force、fluid resistance；
- non-contact force：本课先用 gravity 举例。

见 [[Common Forces]]。

## 11. Six Common Forces / 六类常见力

### Weight

$$
\vec W=m\vec g
$$

方向指向地球，近地面画在 center of mass。

### Normal force

normal 的意思是 perpendicular：支持力永远垂直接触面，不必等于 $mg$。

### Friction

- kinetic friction opposes relative sliding；
- static friction opposes the tendency to slide。

摩擦力反对的是接触面之间的相对滑动或其趋势，不必与物体整体 velocity 反向。

### Tension

tension 沿 rope/string/cable 指向远离物体的方向；理想轻绳模型中，同一连续绳段张力大小相同。

### Spring force

restoring force 指向 equilibrium；后续会定量写成 Hooke's law。

### Resistive force

流体阻力与相对流体的 velocity 有关，方向反对相对运动，大小可能近似与 $v$ 或 $v^2$ 成正比。

## 12. Free-Body Diagram / 受力图第一条规则

[[Free-Body Diagrams]] 用 arrows 表示**作用在所选物体上的真实外力**：

- arrow direction 表示 force direction；
- arrow length 表示 relative magnitude；
- label 写具体力及施力者；
- 不把 velocity、acceleration 或路径画成力；
- 本课特别强调：不要用分量箭头替代原始力。

下一课将继续 ordinary point-particle FBD 与 extended-body FBD。

## 13. Deep Phrases / 深句对应表

| English sentence | 中文抓手 |
|---|---|
| The components evolve independently but share the same time. | 分量方程独立，但时间相同。 |
| At the top, vertical velocity is zero while acceleration remains downward. | 最高点竖直速度为零，重力加速度仍向下。 |
| Relative velocity is a vector difference written as a frame chain. | 相对速度本质是带参考系标签的矢量差。 |
| Minimum time maximizes the crossing component; minimum distance cancels drift. | 最短时间最大化过河分量；最短路程抵消漂移。 |
| A normal force is perpendicular to a surface, not automatically equal to weight. | 支持力只保证垂直接触面，不自动等于重力。 |
| A free-body diagram contains forces acting on the chosen object. | 受力图只画作用在研究对象上的力。 |

## 14. Watch Out / 易错点

- projectile top: $v_y=0$，不是 $v=0$，更不是 $a=0$。
- range formula $R=v_0^2\sin2\theta/g$ 只适用于同高起落。
- horizontal and vertical equations cannot use different times for the same point。
- relative velocity 下标顺序不能靠感觉；先写“谁相对谁”。
- reference frame 有加速度时，不能直接沿用本节 acceleration invariant 的结论。
- friction、normal、tension 的大小必须由动力学求，不是默认公式。

## 15. Bridges / 向后连接

- [[AP物理C力学第1次正课-位移速度加速度与运动图像]] 提供一维模型。
- [[AP电磁学第1次正课-电荷库仑定律与电场]] 用同样的 component method 研究 uniform electric field 中的带电粒子。
- Next: [[AP物理C力学第3次正课-牛顿定律摩擦弹簧与系统法]] 将从 [[Free-Body Diagrams]] 继续进入 Newton's laws。
