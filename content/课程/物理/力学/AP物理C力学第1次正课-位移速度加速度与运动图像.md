---
title: "AP物理C力学第1次正课 - 位移速度加速度与运动图像"
description: "A connected bilingual learning note about AP物理C力学第1次正课 - 位移速度加速度与运动图像."
publish: true
tags: [open-notes, physics-mechanics]
---
# AP物理C力学第1次正课 - 位移速度加速度与运动图像

## Reading Guide / 阅读说明

这节课从 vector language 开始，建立完整的一维运动学链条，并用 $x$-$t$、$v$-$t$、$a$-$t$ graphs 把 derivative 和 integral 变成可见的物理关系。结尾进入 constant acceleration 与 free fall，为下一课的二维抛体运动做准备。

Connected from:

- [[AP物理C力学-课程主页]]
- [[AP物理C力学预备课-微积分工具]]
- [[微积分BC第4次正课-反函数高阶导数与运动应用]]

> [!summary] 一句话主线
> **Position tells where an object is; velocity tells how position changes; acceleration tells how velocity changes. Slopes differentiate this chain, and signed areas integrate it backward.**
>
> 位置告诉你物体在哪里；速度告诉你位置怎样变；加速度告诉你速度怎样变。图像斜率沿链条向下求导，带符号面积沿链条向上累积。

## 1. Class Flow / 课堂脉络

1. scalar 与 vector。
2. position、displacement 与 distance。
3. vector equality、opposite vectors、head-to-tail addition、components。
4. average velocity 与 average speed。
5. instantaneous velocity 与 tangent slope。
6. average / instantaneous acceleration。
7. $x$-$t$、$v$-$t$、$a$-$t$ graph 的 slope-area dictionary。
8. 用 derivative 和 integral 在 $x,v,a$ 之间转换。
9. constant-acceleration equations。
10. [[Free Fall]] 作为 constant acceleration 的特例。

## 2. Scalars and Vectors / 标量与矢量

> **A scalar has magnitude only; a vector has both magnitude and direction.**

- scalar examples: distance, speed, time, mass。
- vector examples: position, displacement, velocity, acceleration, force。

向量可写成 components：

$$
\vec A=A_x\hat i+A_y\hat j+A_z\hat k
$$

其中 $\hat i,\hat j,\hat k$ 是沿坐标轴的 unit vectors，大小均为 1。

### Vector addition

几何上用 head-to-tail rule 或 parallelogram rule；代数上逐分量相加：

$$
\vec A+\vec B
=(A_x+B_x)\hat i+(A_y+B_y)\hat j+(A_z+B_z)\hat k
$$

课堂强调的路径写法：

$$
\overrightarrow{AB}+\overrightarrow{BC}=\overrightarrow{AC}
$$

这将在下一课的 [[Relative Motion]] 中再次出现。

### Vector subtraction

$$
\vec A-\vec B=\vec A+(-\vec B)
$$

如果两个向量起点相同，$“末减初”$ 的差向量由初向量箭头指向末向量箭头。

## 3. Position, Displacement, and Distance / 位置、位移与路程

[[Position and Displacement]] 的核心定义：

$$
\boxed{\Delta\vec r=\vec r_f-\vec r_i}
$$

> **Displacement is the change in position, not the path traveled.**

distance 是实际路径总长度，是 scalar；displacement 只看起点到终点，是 vector。

$$
\boxed{\text{distance}\ge |\text{displacement}|}
$$

只有沿直线且不反向时取等号。绕一圈回到起点时：

$$
\Delta\vec r=0,
\qquad
\text{distance}>0
$$

一维中：

$$
\Delta x=x_f-x_i
$$

$\Delta x>0$ 只表示末位置相对初位置更靠正方向，不代表运动过程中从未反向。

## 4. Average Velocity and Average Speed / 平均速度与平均速率

$$
\boxed{\vec v_{\text{avg}}=\frac{\Delta\vec r}{\Delta t}}
$$

$$
\boxed{\text{average speed}=\frac{\text{total distance}}{\Delta t}}
$$

因此：

$$
\text{average speed}\ge |\vec v_{\text{avg}}|
$$

> **Average velocity depends on displacement; average speed depends on total distance.**

中文抓手：一个看首尾净变化，一个看整个路径。

## 5. Instantaneous Velocity / 瞬时速度

$$
\boxed{v(t)=\lim_{\Delta t\to0}\frac{\Delta x}{\Delta t}=\frac{dx}{dt}}
$$

在 position-time graph 上：

- finite interval secant slope = average velocity；
- tangent slope at one time = instantaneous velocity。

instantaneous speed 是 instantaneous velocity 的 magnitude：

$$
\boxed{\text{speed}=|v|}
$$

注意：这与 average speed 的定义不同。后者不能写成 $|v_{\text{avg}}|$，除非运动没有反向。

## 6. Acceleration / 加速度

$$
\boxed{a_{\text{avg}}=\frac{\Delta v}{\Delta t}}
$$

$$
\boxed{a(t)=\frac{dv}{dt}=\frac{d^2x}{dt^2}}
$$

> **Acceleration describes how velocity changes, not how fast an object is moving.**

速率变化判断：

- $v$ 与 $a$ 同号：speeding up；
- $v$ 与 $a$ 异号：slowing down。

negative acceleration 不等于 slowing down。若 $v<0,a<0$，速度数值更负，但 speed 反而增大。

## 7. Kinematics Graphs / 运动图像字典

[[Kinematics Graphs]] 的核心不是“认形状”，而是准确说出 ordinate、slope 和 signed area 各代表什么。

| Graph | Height / 纵坐标 | Slope / 斜率 | Signed area / 带符号面积 |
|---|---|---|---|
| $x$-$t$ | position $x$ | velocity $v$ | 通常无直接基础含义 |
| $v$-$t$ | velocity $v$ | acceleration $a$ | displacement $\Delta x$ |
| $a$-$t$ | acceleration $a$ | jerk（本课不重点） | change in velocity $\Delta v$ |

### Reading an $x$-$t$ graph

- graph above axis: position positive，不代表一定向右运动；
- slope positive: $v>0$；slope negative: $v<0$；
- slope zero: momentarily at rest；
- slope becoming steeper: $|v|$ increasing。

### Reading a $v$-$t$ graph

- height sign gives direction；
- slope gives acceleration；
- crossing the axis means $v=0$ and may indicate reversal；
- area above axis positive, below axis negative。

$$
\Delta x=\int_{t_1}^{t_2}v(t)\,dt
$$

若求 total distance：

$$
\text{distance}=\int_{t_1}^{t_2}|v(t)|\,dt
$$

### Reading an $a$-$t$ graph

$$
\Delta v=\int_{t_1}^{t_2}a(t)\,dt
$$

area 给的是 velocity change，不是 final velocity：

$$
v_f=v_i+\int_{t_i}^{t_f}a(t)\,dt
$$

## 8. Initial Conditions / 初始条件为什么不可少

积分 acceleration：

$$
v(t)=\int a(t)dt=v_{\text{family}}(t)+C
$$

$C$ 由 initial velocity 确定。再积分得到 position 时，还需要 initial position。

> **A rate of change determines how motion evolves, but an initial condition determines which motion occurs.**

见 [[Initial Conditions]]。

## 9. Constant-Acceleration Motion / 匀加速运动

当 $a$ 在所研究区间内恒定，[[Constant-Acceleration Motion]] 给出：

$$
\boxed{v=v_0+at}
$$

$$
\boxed{x=x_0+v_0t+\frac12at^2}
$$

$$
\boxed{v^2=v_0^2+2a(x-x_0)}
$$

以及：

$$
v_{\text{avg}}=\frac{v_0+v}{2},
\qquad
\Delta x=v_{\text{avg}}t
$$

### Formula selection / 选公式的方法

先列已知与未知变量，再选不含多余未知量的 equation：

- 没有 time：优先考虑 $v^2=v_0^2+2a\Delta x$；
- 已知 $t$、$v_0$、$a$ 求 $v$：用 $v=v_0+at$；
- 已知 $t$ 求 position：用 $x=x_0+v_0t+\frac12at^2$。

不要把公式选择变成关键词匹配；先确认 constant acceleration assumption。

## 10. Free Fall / 自由落体

忽略空气阻力、近地面时：

$$
\vec a=\vec g
$$

若 upward is positive：

$$
a=-g,
\qquad
g\approx9.8\ \text{m/s}^2
$$

课堂计算有时按题目约定取 $g\approx10\ \text{m/s}^2$。符号来自坐标选择，不是来自字母 $g$ 本身。

从静止释放只是 free fall 的一种：$v_0=0$；竖直上抛同样只受重力，也是 free fall，但 $v_0\ne0$。

## 11. Deep Phrases / 深句对应表

| English sentence | 中文抓手 |
|---|---|
| Position is a vector measured from an origin. | 位置必须相对原点并带方向。 |
| Displacement depends only on the endpoints. | 位移只看首尾。 |
| Velocity is the slope of a position-time graph. | $x$-$t$ 图的斜率是速度。 |
| Displacement is the signed area under a velocity-time graph. | $v$-$t$ 图带符号面积是位移。 |
| Negative acceleration means velocity is decreasing, not necessarily speed. | 负加速度表示速度变小，不必然表示速率变小。 |
| Gravity points downward regardless of the chosen positive direction. | 重力方向向下，正负号由坐标决定。 |

## 12. Exam Communication / 作答语言

- “The slope of the position-time graph is the velocity.”
- “The signed area under the velocity-time graph from $t_1$ to $t_2$ equals the displacement.”
- “Because velocity and acceleration have opposite signs, the object's speed is decreasing.”
- 写出单位；vector answer 还应写方向或带符号分量。

## 13. Next / 下一课

[[AP物理C力学第2次正课-抛体相对运动与力的开端]] 把一维匀加速模型分解到 $x,y$ 两个方向，并用 vector addition 处理 relative velocity。
