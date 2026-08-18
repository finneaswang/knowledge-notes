---
title: "第3次作业复盘 - Unit 4 导数的情境应用"
description: "A connected bilingual learning note about 第3次作业复盘 - Unit 4 导数的情境应用."
publish: true
tags: [open-notes, calculus-review]
---
# 第3次作业复盘 - Unit 4 导数的情境应用

## Reading Guide / 阅读说明

这份作业覆盖练习册 P63-P79。黑色记录第一次独立过程，红色记录求助后的修正或补充；两段 ChatGPT 对话用来恢复“为什么卡住”，不能把订正后的全对直接当成独立掌握。

> **Current conclusion:** 最终答案质量明显提高，尤其 FRQ 已能写出关系式、单位和语境；但 MC 中仍有大量红色连接。当前瓶颈已经从“不会求导”进一步收缩为：把文字情境翻译成正确对象、关系式与导数层级。

## Evidence Boundary / 证据边界

- 扫描件共 17 页，对应 MC 1-35 与 FRQ 36-42。
- 35 道 MC 订正后的最终选项全部与答案页一致。
- 从清晰可辨的黑色选择看，至少约 15 道在没有可见红色改动时已正确；部分题存在黑红重叠，因此不把它写成精确的独立得分。
- FRQ 36-42 的最终结果全部正确，但第36、37、42题有明确对话帮助，不能标记为独立掌握。
- 第38-41题的纸面答案完整；对话显示你能先解释题目对象并建立大部分关系，其中第40题最能代表本次真实进步。
- ChatGPT 在第1题把正确区间说对，却错误对应到选项 D；原题正确选项是 B。这属于 `AI`，不是你的数学错误。

## What Is Now Stable / 已经相对稳定

### 1. Direct differentiation inside a context

- 能从 position 写出 velocity，再从 velocity 写出 acceleration。
- 能对给定 rate function 求导，并保留 Chain Rule 的 inner derivative。
- 第29、31、32、34、35题说明常见 L'Hôpital calculation 已经具备执行能力。

### 2. Related-rates algebra after the model is known

- 一旦几何关系已经写出，能够对两边关于 $t$ 求导并代入已知 rate。
- 第22、25、27题显示 sphere、cone 与给定单变量模型可以完成。
- 第39、41题能从 $dr/dt$、$dh/dt$ 或 volume relation 得到目标 rate。

### 3. FRQ structure and contextual sentences

- 第38题正确写出 $H'(0)=-16$、切线 $L(t)=91-16t$，并得到 $H(3)\approx43^\circ\text{C}$。
- 第39题得到 $dh/dt=-2/3\text{ in/sec}$，符号与 decreasing 的解释一致。
- 第40题能主动建立

$$
N'(t)=E(t)-L(t),
\qquad
N''(t)=E'(t)-L'(t),
$$

再用 $N''(5)<0$ 判断“鱼的数量变化率正在下降”。这是本次最强的一道独立结构题。
- 第41题两问都正确，能由直径得到 $r=1$，并用 $h''>0$ 判断 $dh/dt$ 正在 increasing。

## Main Gaps / 主要缺口

### 1. Motion words must be translated into derivative objects (`R`)

固定对应：

| 问法 | 数学对象 |
|---|---|
| position increasing / moving right | $v(t)=s'(t)>0$ |
| position decreasing / moving left | $v(t)<0$ |
| speed | $|v(t)|$ |
| speeding up | $v(t)a(t)>0$ |
| slowing down | $v(t)a(t)<0$ |

第1、2题需要提示才能把一阶导继续解释为 velocity/speed；第20、21题又要求组合 $v$ 与 $a$ 的符号。连接 [[One-Dimensional Motion]]、[[Velocity and Speed]] 与 [[Acceleration]]。

一句对应关系：**Velocity tells direction; the agreement of velocity and acceleration tells whether speed is increasing. / 速度看方向，速度与加速度同号才是加速。**

### 2. Related rates starts with a relationship, not differentiation (`R + M`)

第5-8、19、22、24-28题反复说明：真正困难的不是最后求导，而是求导前的模型。

固定流程：

1. name every changing quantity；
2. write one relationship among them；
3. eliminate extra variables using geometry or similarity；
4. differentiate with respect to time；
5. substitute the instant and rates；
6. check sign and units。

典型提醒：

- diameter $20$ means radius $10$；
- cone 中的 $r/h$ 来自相似三角形，不是额外背一个 rate formula；
- 同一个量已经写成 $r=r(h)$ 后，应先代入 volume，再求导；
- 不要在建立关系前过早代入具体时刻。

连接 [[Related Rates]] 与 [[Implicit Differentiation]]。

### 3. Linear approximation uses one tangent point, not two secant points (`R`)

第9题最初把 near $x=a$ 理解成取 $a\pm1$ 做 secant slope。Linearization 实际只需要切点的数据：

$$
L(x)=f(a)+f'(a)(x-a).
$$

第10、11、18、38题最终都能使用这个模板，说明公式已经形成，但题型入口仍需固定。连接 [[Linear Approximation]] 与 [[Tangent Line]]。

一句对应关系：**A linear approximation is the tangent line frozen at one base point. / 线性近似就是固定在一个基点上的切线。**

### 4. L'Hôpital requires form recognition and clean differentiation (`R + M + A`)

第12-16、29-35题的困难分成三类：

- 没先确认 $0/0$ 或 $\infty/\infty$；
- 不知道何时需要重复使用 L'Hôpital；
- 求导后保留了本应消失的常数，例如 $(e^x-1)'=e^x$。

对 $x\to\infty$ 的 growth comparison，还要记住：

$$
\log x \ll x^p \ll a^x \quad (p>0,\ a>1).
$$

连接 [[L'Hôpital's Rule]]、[[Indeterminate Form]]、[[Limits]] 与 [[Exponential Growth]]。

### 5. Product + Chain still breaks when factors multiply (`M`, repeated)

这是从第2次作业延续到本次的唯一明显重复核心缺口。

第36题：

$$
f(t)=10+0.8t\sin\left(\frac{t^3}{100}\right)
$$

最初只写了对 sine 部分求导产生的一项，漏掉 Product Rule 的第一项：

$$
f'(t)
=0.8\sin\left(\frac{t^3}{100}\right)
+0.8t\cos\left(\frac{t^3}{100}\right)\frac{3t^2}{100}.
$$

第42题的三个变化因子同样需要帮助：

$$
(uvw)'=u'vw+uv'w+uvw'.
$$

这说明“会背 Product Rule”还没有稳定转化为“看见所有 changing factors”。连接 [[Product Rule]] 与 [[Chain Rule]]。

### 6. A rate and the rate of that rate are different objects (`R + J`)

第36题最初把 $f'(7)$ 解释为取走的香蕉数量。实际上：

- $f(t)$：removal rate，单位 lb/hr；
- $f'(t)$：removal rate 的变化率，单位 lb/hr$^2$。

第40、41题已经能正确处理 second-order meaning，说明概念正在稳定，但每次仍应先写：**What quantity does this function already measure?**

连接 [[Instantaneous Rate of Change]] 与 [[Second Derivative]]。

## Question Evidence Map / 题目证据地图

| 题目 | 证据 | 分类 | 对应节点 |
|---|---|---|---|
| 1-4 | position、velocity、speed、acceleration 的语言切换需要提示 | `R + AI` | [[One-Dimensional Motion]], [[Velocity and Speed]] |
| 5-8 | 球、圆锥、长方体和圆柱关系式多次需要红色补足 | `R + M` | [[Related Rates]] |
| 9-11, 18 | 第9题把 tangent approximation 当成 secant；后续题改善 | `R` | [[Linear Approximation]], [[Tangent Line]] |
| 12-16 | indeterminate form、重复 L'Hôpital 与三角/指数求导不稳定 | `R + M` | [[L'Hôpital's Rule]], [[Indeterminate Form]] |
| 17, 20-21, 23 | speed 与 $v,a$ 符号组合；第21题最终完成完整 sign analysis | `R + M` | [[One-Dimensional Motion]], [[Acceleration]] |
| 19, 22, 24-28 | 先写几何关系、相似比、单位与正负号 | `R + M + A` | [[Related Rates]] |
| 29-35 | 基本 L'Hôpital 计算逐渐稳定，但 growth hierarchy 与常数求导仍需补强 | `M + A` | [[L'Hôpital's Rule]], [[Exponential Growth]] |
| 36 | Product + Chain 漏项；$f'$ 的语境与平方单位需要纠正 | `M + J` | [[Product Rule]], [[Chain Rule]] |
| 37 | motion object 识别正确，但 $\ln(u)$ 求导需要回忆 | `M` | [[One-Dimensional Motion]], [[Chain Rule]] |
| 38-39 | 最终关系、计算、单位与情境解释正确 | stable with verification | [[Linear Approximation]], [[Related Rates]] |
| 40-41 | 二阶变化含义和符号判断完整，是本次最强证据 | stable | [[Second Derivative]], [[Related Rates]] |
| 42 | 三因子 Product Rule 和英文解释由完整反馈补足 | `M + J` | [[Product Rule]], [[Chain Rule]] |

## AI Reliability Audit / AI 可靠性审计

第二段分享对话中，ChatGPT 正确得到 $v(t)=3(t-2)^2$ 和 $t\ne2$，却把它对应成选项 D；扫描原题中该描述属于选项 B。

以后图像或选项题固定采用：

1. 先写数学结论，不急着写字母；
2. 回到原扫描逐项匹配选项；
3. AI 给出的字母不能替代原题核对；
4. 红色订正保留数学理由，而不只圈新字母。

## FRQ Review / FRQ 复盘

### 36 - Banana removal rate

最终计算与解释正确，但依赖反馈补上 Product Rule 的第一项，并纠正 rate 与 amount 的区别。状态：`rework required`。

### 37 - Particle moving left

最终得到

$$
x_P'(t)=\frac{2(t-1)}{t^2-2t+10}<0
\quad\text{for}\quad 0\le t<1.
$$

对象选择正确，但 $\ln(u)$ 的 derivative retrieval 需要帮助。状态：`short rework`。

### 38 - Tangent-line temperature estimate

计算、切线方程、近似值和语境完整。状态：`stable`。

### 39 - Funnel relation

$dr/dt=-1/5$、$h=3$ 与 $dr/dt=(h/10)(dh/dt)$ 组合正确，得到 $dh/dt=-2/3$。状态：`stable with sign check`。

### 40 - Net fish rate

能区分数量、数量的一阶变化率和变化率本身的变化，是本次最强答案。状态：`stable`。

### 41 - Draining cylinder

两问都正确，尤其能用 $h''=1/200>0$ 说明负的 $dh/dt$ 正在变得没那么负。状态：`stable`。

### 42 - Parking-lot entry rate

最终结果 $E'(7)\approx6.165$ 与单位正确，但三因子 Product Rule 和英文句子由完整答案补足。状态：`rework required`。

## Rework Queue / 重做清单

### Tier A - 24 小时后必须无提示重做

1. 第20题：只根据 position graph 判断 speeding up；
2. 第26题：cone similarity 先消元，再对 volume 求导；
3. 第30题：不用逐次机械求导，解释三种 growth rates；
4. 第36题：Product + Chain，并解释 lb/hr$^2$；
5. 第42题：三因子 Product Rule，不看范文写完整 FRQ。

### Tier B - 口头入口检查

- 第1题：position increasing 看哪个 derivative object？
- 第9题：为什么 linear approximation 不是 secant slope？
- 第12题：为什么是 $\infty/\infty$，需要几次 L'Hôpital？
- 第24题：哪些量在变，哪个关系永远成立？
- 第40题：为什么题目实际判断的是 $N''(5)$？

## Mastery Check / 掌握检查

能够不看答案完成 Tier A，并在动笔前说出以下五句话，才把状态改为 `mastered`：

1. This function measures ____.
2. The question asks for the rate of ____.
3. The relationship that remains true is ____.
4. The changing factors are ____.
5. The sign and units mean ____ in context.

## Final Diagnosis / 本次诊断

与前两次相比，你已经明显从“规则计算”走向“情境建模”：FRQ 38-41 说明你能够组织公式、导数层级、单位与英文解释。现在真正需要解决的不是扩大题量，而是减少红色入口提示，尤其是 **motion language、related-rates modeling 和 multiple changing factors**。

纵向主线变成：

~~~text
第1次：认不出基础题型
-> 第2次：多规则叠加容易漏层
-> 第3次：规则本身会，但文字情境到数学模型的第一步仍不稳定
~~~

## Connections / 连接

- [[00 作业复盘索引]]
- [[第1次作业复盘-Unit 2 导数基础]]
- [[第2次作业复盘-Unit 3 复合隐函数与反函数]]
- [[微积分BC第4次正课-反函数高阶导数与运动应用]]
- [[微积分BC第5次正课-相关变化率线性近似与中值定理]]
- [[One-Dimensional Motion]]
- [[Velocity and Speed]]
- [[Acceleration]]
- [[Related Rates]]
- [[Linear Approximation]]
- [[L'Hôpital's Rule]]
- [[Indeterminate Form]]
- [[Product Rule]]
- [[Chain Rule]]
- [[Second Derivative]]
