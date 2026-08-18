---
title: "AP物理C力学第14次正课 - FRQ综合推导、实验与表达策略"
description: "A connected bilingual learning note about AP物理C力学第14次正课 - FRQ综合推导、实验与表达策略."
publish: true
tags: [open-notes, physics-mechanics]
---
# AP物理C力学第14次正课 - FRQ综合推导、实验与表达策略

## Reading Guide / 阅读说明

本课承接第 13 次，继续用 rotation、oscillation 与实验题整合 FRQ 方法。课堂后半把新版四类题型压缩成固定工作流；这些流程即使不再参加 AP，也能迁移到大学物理作业和实验报告。

> [!summary] 一句话主线
> **A strong FRQ solution makes every modeling decision visible: system, law, equation, algebra, graph, units, and a conclusion tied back to physics.**

## 1. Derivation Discipline / 推导题规范

derive 不是只写最终公式。推荐顺序：

1. define system, axis, and positive direction；
2. draw diagram if useful；
3. state governing law；
4. substitute model-specific expressions；
5. solve symbolically；
6. check that only allowed variables remain；
7. test units and limiting behavior。

转杆能量题的典型陷阱：gravitational potential change 由 center of mass 的高度变化决定，rotational energy 中的 $I$ 必须对应 actual pivot；必要时先用 [[Parallel-Axis Theorem]]。

## 2. Calculus Must Carry Meaning / 微积分要对应物理

- derivative：从 position 得 velocity，从 velocity 得 acceleration；
- integral：从 force-time 得 impulse，从 force-position 得 work；
- differential equation：识别 SHM、drag 或其他 evolution law；
- slope/area 必须连回 quantity 与 units。

写出 calculus operation 后，要解释所得量的物理意义，不能只留下符号运算。

## 3. Representations Must Agree / 多种表征必须一致

题目可能在 words、diagram、graph、equation 间转换。稳定检查：

- graph slope 是否匹配 derivative relation；
- graph area 是否匹配 accumulation relation；
- sign 是否匹配 chosen direction；
- arrow length 是否匹配 force magnitude；
- energy bars 是否闭合；
- equation 是否与 diagram 中的 system 相同。

## 4. Experimental Design and Analysis / 实验设计与分析

继承第 13 次的 [[Experimental Linearization]]：先推理论关系，再确定 independent/dependent variables、控制变量、测量设备、重复次数和分析图像。

实验答案不能只列器材；必须形成可执行序列，并说明如何从 slope/intercept 得到目标量。

## 5. Four Reusable FRQ Modes / 四类可复用任务

### Mathematical Routine

从 law 到 symbolic result。重点是推导链和变量一致性。

### Translation Between Representations

在图、表、文字、受力图与方程间转换。每一次转换都保留 signs、units 与 constraints。

### Experimental Design and Analysis

设计或解释测量，linearize data，画 [[Best-Fit Line]]，由 slope 求物理量。

### Qualitative/Quantitative Reasoning

先给 claim，再给独立的 physical principle，必要时推导，最后回到 comparison。

这些名称来自课堂所讲的 2025 考试框架，未来考试格式可能变化；这里保留的是可迁移的解题结构，而非时间敏感的分值。

## 6. Claim-Evidence-Reasoning / 解释题模板

推荐英文骨架：

> **Claim:** The quantity increases/decreases/remains the same.  
> **Principle:** State the relevant conservation law or dynamical relation.  
> **Reasoning:** Show how the changed condition affects the terms.  
> **Conclusion:** Therefore, the requested comparison follows.

避免 circular reasoning，例如“速度增大，因为它会更快”。要写中间机制。

## 7. Oscillation FRQ Pattern / 振动综合题

常见链条：

$$
x(t)\xrightarrow{d/dt}v(t)\xrightarrow{d/dt}a(t)
$$

再由：

$$
a=-\omega^2x,
\qquad
\omega^2=\frac{k_{eq}}{M_{total}}
$$

连接 spring constant、mass、period 和 energy。多弹簧先求 $k_{eq}$；图像只给变化质量时，先写 $M_{total}=M_0+m$，斜率仍可隔离 $k$，intercept 可用于求固定质量。

## 8. Verification Before Moving On / 每问后的快速复查

- subject and requested quantity；
- vector sign/direction；
- actual system boundary；
- correct moment arm and rotation axis；
- units and significant figures；
- derive/calculate/justify 等 command word 是否满足；
- 前一问若错，后一问能否用已给或自己的结果继续。

## 9. Deep Phrases / 深层表达

- **A derivation earns credibility by exposing assumptions and governing laws.**
- **A qualitative claim needs a causal chain, not a restatement of the result.**
- **Representations are equivalent only when they describe the same system and sign convention.**
- **Dimensional and limiting-case checks are part of the physics, not optional decoration.**

## 10. Error Checklist / 易错清单

- derive 只给最终式；
- center-of-mass height 与端点高度混淆；
- actual pivot 与 $I_{CM}$ 混用；
- 解释题只写结论；
- graph slope 求出后省略模型对应；
- 字母、上下标与题目定义不一致；
- 使用上一问错误结果后不标明 substitution。

## Connected Notes / 连接

- Previous: [[AP物理C力学第13次正课-FRQ实验线性化与作图规范]]
- Next: [[AP物理C力学串讲课-全课程模型与方法总复盘]]
- Concepts: [[FRQ Scientific Reasoning]] / [[Experimental Linearization]] / [[Best-Fit Line]]
