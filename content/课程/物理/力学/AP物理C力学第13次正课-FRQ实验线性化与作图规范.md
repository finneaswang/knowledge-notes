---
title: "AP物理C力学第13次正课 - FRQ实验、线性化与作图规范"
description: "A connected bilingual learning note about AP物理C力学第13次正课 - FRQ实验、线性化与作图规范."
publish: true
tags: [open-notes, physics-mechanics]
---
# AP物理C力学第13次正课 - FRQ实验、线性化与作图规范

## Reading Guide / 阅读说明

全部物理知识已讲完，本课进入两次连续 FRQ 专项。重点不是增加公式，而是把 model equation 转成可测量变量、直线图像、斜率和评分可见的实验论证。

> [!summary] 一句话主线
> **Derive the model first, choose transformed axes that make it linear, then let slope and intercept carry the physical parameters.**

## 1. Why Linearize / 为什么要线性化

实验数据有散点时，直线比曲线更容易判断趋势、拟合参数与识别异常值。若：

$$
y=Ax^n+B
$$

可画 $y$ versus $x^n$，得到 slope $A$、intercept $B$。

例：自由落体

$$
h=\frac12gt^2
$$

画 $h$ versus $t^2$：

$$
slope=\frac g2
\quad\Longrightarrow\quad
g=2(slope)
$$

若交换横纵轴也可，但 slope 关系会取倒数，后续必须 consistent。

## 2. Common Transformations / 常见变换

- $y=A\sqrt{x}$：画 $y$ versus $\sqrt{x}$，或画 $y^2$ versus $x$；
- $y=A/x$：画 $y$ versus $1/x$；
- $y=Ae^{Bx}$：画 $\ln y$ versus $x$，slope $B$、intercept $\ln A$；
- power law $y=Ax^n$：$\ln y=\ln A+n\ln x$。

真正目标是把 equation 写成 $Y=mX+b$，然后明确 $Y,X,m,b$ 分别是什么。见 [[Experimental Linearization]]。

## 3. Axis Checklist / 坐标轴检查

每条轴必须有：

- quantity or transformed quantity；
- unit，包括平方、倒数或根号后的单位；
- evenly spaced scale；
- 充分使用给定图纸，课堂建议数据覆盖至少约三分之二轴长；
- 不必强制从零开始，除非物理或题目要求。

先算 transformed data table，再决定 scale，避免边画边改。

## 4. Best-Fit Line / 最佳拟合线

[[Best-Fit Line]] 不是逐点折线，也不是强行穿过原点：

- 让散点在线两侧大致平衡；
- 尽量接近整体趋势；
- 明显 outlier 不应支配整条线；
- 求 slope 时选拟合线上的两点，且尽量相距较远；
- 标出所用两点，便于评分者检查。

$$
slope=\frac{y_2-y_1}{x_2-x_1}
$$

不要直接用两个原始数据点，除非它们恰好位于 best-fit line 上。

## 5. From Slope to Physics / 从斜率回到物理量

答案需要显式展示：

1. measured slope；
2. theoretical slope expression；
3. solve for requested parameter；
4. substitute with units and appropriate significant figures。

不要从 graph slope 一步跳到最终数字，中间的物理对应关系通常就是得分点。

## 6. Experimental Procedure / 实验步骤

可评分步骤应说明：

1. what is changed；
2. what is measured and with which device；
3. what is held constant；
4. how enough data pairs are collected；
5. repeat trials and average to reduce random uncertainty；
6. how the graph/fit determines the target quantity。

常见设备英文：photogate、motion sensor、force sensor、meterstick、stopwatch、balance。

## 7. Uncertainty and Model Failure / 不确定度与模型偏差

分析变化时不要只说“有误差”，而要建立方向链：

```text
non-ideal effect
-> measured quantity changes
-> graph slope/intercept changes
-> inferred parameter becomes too high or too low
```

区分：

- random uncertainty：重复与平均可减弱；
- systematic bias：重复不会消除，需要改装置、校准或修正模型。

## 8. Free-Body Diagrams in FRQ / FRQ受力图

- 只画真实外力；
- arrow tail 从物体/质心出发；
- label 清楚；
- 若题目要求 relative magnitude，箭头长度必须符合方程关系；
- 不画 velocity、acceleration 或 force components as extra forces。

## 9. Deep Phrases / 深层表达

- **The transformed variables should make the theoretical relationship linear.**
- **The slope must be interpreted through the model equation, not treated as the final physical answer.**
- **Repeated trials reduce random uncertainty but do not remove systematic bias.**
- **A best-fit line represents the trend of all data, not a connection between adjacent points.**

## 10. Error Checklist / 易错清单

- 横纵轴填反后仍用原 slope 公式；
- transformed units 漏平方或倒数；
- scale 使用范围太小；
- best-fit line 连点或强穿原点；
- 用相邻点求 slope，放大读数误差；
- 实验步骤不写 repeat/average；
- 只写“friction causes error”，没有说明高估还是低估。

## Connected Notes / 连接

- Previous: [[AP物理C力学第12次正课-简谐振动弹簧摆与共振]]
- Next: [[AP物理C力学第14次正课-FRQ综合推导实验与表达策略]]
- Concepts: [[Experimental Linearization]] / [[Best-Fit Line]] / [[FRQ Scientific Reasoning]]
