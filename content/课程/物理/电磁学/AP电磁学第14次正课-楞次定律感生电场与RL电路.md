---
title: "AP电磁学第14次正课 - 楞次定律、感生电场与RL电路"
description: "A connected bilingual learning note about AP电磁学第14次正课 - 楞次定律、感生电场与RL电路."
publish: true
tags: [open-notes, physics-electromagnetism]
---
# AP电磁学第14次正课 - 楞次定律、感生电场与RL电路

## Reading Guide / 阅读说明

the course transcript 开头完整复习了上一课的 generator、[[Motional EMF]]、[[Magnetic Flux]] 与 [[Faraday's Law]]，并明确把磁通变化分成 $B$、$A$、orientation 三条路径。随后课堂进入 Lenz direction、induced electric field、self-inductance 和 RL transient。

因此本课与 [[AP电磁学第13次正课-动生电动势磁通量与法拉第定律]] 连续，记为第 14 次正课。

> [!summary] 一句话主线
> **Induction opposes change: a changing magnetic flux creates a circulating electric field, and an inductor uses that same principle to prevent current from changing instantaneously.**
>
> 电磁感应反抗的是“变化”。变化的磁通量产生环形感生电场；线圈又借此产生 self-induced EMF，使电流不能瞬间出现或消失，并把能量暂存在 magnetic field 中。

## 1. What This Lecture Is About / 这节课在讲什么

第 13 课已经回答：怎样通过改变 magnetic flux 产生 EMF。

本课继续问三个更深的问题：

1. induced current 的 direction 怎样判断？
2. 没有 battery、甚至没有 physical wire 时，什么在推动 charge？
3. 把 coil 放回 circuit 后，它怎样改变 current 随时间的行为？

~~~text
changing magnetic flux
-> Faraday's law gives EMF magnitude
-> Lenz's law gives direction
-> changing B creates circulating induced E
-> a coil links its own flux
-> self-induced EMF opposes di/dt
-> inductor stores magnetic energy
-> RL circuit changes exponentially
~~~

## 2. Class Flow / 课堂脉络

1. 复习 magnetic flux 与 Faraday's law。
2. 用 $B$、$A$、angle 三种变化方式统一 motional 与 induced EMF。
3. 比较 average EMF 与 instantaneous EMF。
4. 加入 $N$ turns 的 flux linkage。
5. 用 [[Lenz's Law]] 判断进入、离开、旋转与靠近线圈时的 current direction。
6. 从 changing magnetic field 推出 [[Induced Electric Field]]。
7. 比较 electrostatic field 与 induced electric field。
8. 由 coil 的 self-induction 定义 [[Inductors]]。
9. 推出 $mathcal E_L=-L,di/dt$ 与 solenoid inductance。
10. 推出 inductor energy $U_L=\frac12LI^2$。
11. 讨论 inductors 的 series / parallel combination。
12. 分析 [[RL Circuits]] 的 switch-on 与 decay。
13. 对照 [[RC Circuits]] 的 initial / final behavior。
14. 用 time constant $\tau_L=L/R$ 读 graph。
15. 用 final circuit example 训练 $0^+$、steady state 与 $di/dt$。

## 3. Review: How Flux Changes / 复习磁通怎样变化

### Knowledge Point 1: Area Is a Vector

magnetic flux：

$$
\boxed{\Phi_B=\int \vec B\cdot d\vec A}
$$

uniform field and flat surface：

$$
\boxed{\Phi_B=BA\cos\theta}
$$

$\theta$ 是 $\vec B$ 与 **area normal** 的夹角，不是 $\vec B$ 与平面本身的夹角。

> **Flux measures how much field passes through the oriented surface.**

如果题目给的是 field 与 plane 的夹角 $\alpha$，则：

$$
\Phi_B=BA\sin\alpha
$$

### Knowledge Point 2: There Are Three Basic Ways to Change Flux

从 $\Phi_B=BA\cos\theta$ 可见：

- change $B$：move a magnet、change source current、use alternating current；
- change $A$：sliding rod、loop entering or leaving a field region；
- change $\theta$：rotate a coil in a magnetic field。

课堂把“切割磁感线”重新解释为 overlap area 随时间变化：

$$
\frac{dA}{dt}=Lv
$$

所以：

$$
|\mathcal E|
=B\frac{dA}{dt}
=BLv
$$

这把 [[Motional EMF]] 的 $BLv$ 与 [[Faraday's Law]] 统一起来。

### Knowledge Point 3: Use Only the Area Actually Inside the Field

若 loop 只有一部分处于 field region：

$$
\Phi_B=B A_{\text{inside}}
$$

几何总面积不能直接代入。课堂半个正方形处于 changing field 的例子使用：

$$
A_{\text{inside}}=\frac12s^2
$$

因此若 $dB/dt=\beta$：

$$
|\mathcal E|=\frac12s^2\beta,
\qquad
I=\frac{s^2\beta}{2R}
$$

## 4. Average and Instantaneous EMF / 平均与瞬时电动势

### Knowledge Point 4: Average EMF Uses a Finite Change

$$
\boxed{
|\mathcal E_{\text{avg}}|
=N\left|\frac{\Delta\Phi_B}{\Delta t}\right|
}
$$

当题目只给 initial flux、final flux 与 elapsed time 时，求的是 average EMF。

### Knowledge Point 5: Instantaneous EMF Uses a Derivative

$$
\boxed{
\mathcal E(t)=-N\frac{d\Phi_B}{dt}
}
$$

若 coil 以 constant angular speed $\omega$ 旋转，$\theta=\omega t+\theta_0$：

$$
\Phi_B=BA\cos\theta
$$

所以：

$$
\boxed{
\mathcal E(t)=NBA\omega\sin\theta
}
$$

这里的 $\sin\theta$ 来自对 $\cos\theta$ 求导；$\omega=d\theta/dt$ 来自 [[Chain Rule]]。

### Knowledge Point 6: More Turns Add More EMF

每一匝 linking the same changing flux 时：

$$
\boxed{
\mathcal E=-N\frac{d\Phi_B}{dt}
}
$$

$N\Phi_B$ 称为 flux linkage。绕更多 turns 能提高 induced EMF，但前提是各匝确实 linked by essentially the same flux。

## 5. Lenz's Law / 楞次定律

### Knowledge Point 7: Oppose the Change, Not the Field

[[Lenz's Law]] 的核心句：

> **The induced current creates a magnetic field that opposes the change in magnetic flux.**
>
> 感应电流产生的磁场反抗 magnetic flux 的变化，而不一定反向于原来的 magnetic field。

因此：

- original flux increasing：induced $\vec B$ opposite the original flux direction；
- original flux decreasing：induced $\vec B$ same as the original flux direction。

老师课堂压缩成：

> **Oppose the change / 反抗改变。**

### Knowledge Point 8: Stable Direction Procedure

判断 current direction 的可靠流程：

1. 先选观察方向和 surface normal。
2. 判断 external magnetic flux 指向哪里。
3. 判断 flux magnitude 在 increasing 还是 decreasing。
4. 用 Lenz's law 决定 induced $\vec B$。
5. 用 right-hand grip rule 把 induced $\vec B$ 转成 current direction。

不要从“磁铁向哪走”直接猜 clockwise / counterclockwise；中间必须经过 flux change。

### Knowledge Point 9: A Loop Entering, Staying in, and Leaving a Field

loop 进入 uniform field：

- overlap area increases；
- flux magnitude increases；
- induced current creates opposite $\vec B$。

loop 完全处于 uniform field 并匀速平移：

- left and right motional effects cancel；
- total flux stays constant；
- no net induced EMF。

loop 离开 field：

- overlap area decreases；
- induced current creates $\vec B$ in the original direction；
- current direction reverses relative to entering。

> [!important] Motion alone is not enough
> Conductor 可以在切割 field lines，但如果 whole-loop flux 不变，closed loop 的 net EMF 仍可能为 zero。

### Knowledge Point 10: A Falling Magnet Is Opposed on Both Entry and Exit

magnet 靠近 loop 时，flux increases，loop produces a repelling magnetic effect。

magnet 远离 loop 时，flux decreases，loop produces an attracting magnetic effect。

两种情况的 induced current direction 不同，但产生的 mechanical effect 都反抗 motion。这与第 13 课的 [[Electromagnetic Damping]] 和 energy conservation 一致。

## 6. Induced Electric Field / 感生电场

### Knowledge Point 11: Changing Magnetic Flux Creates a Circulating Electric Field

Faraday's law 的 field form：

$$
\boxed{
\oint_C\vec E\cdot d\vec\ell
=-\frac{d\Phi_B}{dt}
}
$$

这比“wire 中出现 current”更根本：即使空间里没有 conducting loop，changing magnetic field 仍会在周围建立 circulating [[Induced Electric Field]]；wire 只是让这个 electric field 能驱动 free charges 形成 current。

### Knowledge Point 12: Induced E Is Non-Conservative

electrostatic field：

$$
\oint\vec E_{\text{electrostatic}}\cdot d\vec\ell=0
$$

induced electric field：

$$
\oint\vec E_{\text{induced}}\cdot d\vec\ell
=-\frac{d\Phi_B}{dt}\ne0
$$

所以 induced electric field 是 **non-conservative / 非保守场**。它的 field lines 可以形成 closed loops，不能在整个区域内用单值 electrostatic potential $V$ 完整描述。

这正是为什么“沿着电场方向 potential 一直降低，转一圈又回到原点”会产生矛盾：那条 electrostatic potential rule 的适用前提已经失效。

### Knowledge Point 13: Do Not Confuse the Two Closed Integrals

Faraday-Maxwell law 使用 closed **path**：

$$
\oint_C\vec E\cdot d\vec\ell
=-\frac{d}{dt}\int_S\vec B\cdot d\vec A
$$

Gauss's law 使用 closed **surface**：

$$
\oint_S\vec E\cdot d\vec A
=\frac{Q_{\text{enc}}}{\epsilon_0}
$$

区别：

- Faraday：circulation，line integral，changing magnetic flux；
- Gauss：flux，surface integral，enclosed electric charge。

### Knowledge Point 14: Magnetic Fields Have No Observed Sources or Sinks

$$
\boxed{\oint_S\vec B\cdot d\vec A=0}
$$

classical electromagnetism 中 magnetic field lines form closed loops；尚无 experimentally established magnetic monopole。这里的“无源”不是说 magnetic field 不由 current 产生，而是说没有 isolated magnetic charge 作为 field-line endpoint。

## 7. Self-Inductance / 自感

### Knowledge Point 15: A Coil Opposes Changes in Its Own Current

current through a coil creates magnetic field and flux。若 current changes，coil-linked flux changes，于是同一个 coil 中产生 induced EMF。这叫 self-induction。

> **An inductor opposes changes in current, not current itself.**
>
> 电感反抗的是电流的变化，不是稳定电流本身。

因此：

- current increasing：self-induced EMF opposes the current increase；
- current decreasing：self-induced EMF supports the old current direction；
- steady DC current：$di/dt=0$，ideal inductor has zero voltage drop。

课堂的“来拒去留”可以译成：

> **It resists the arrival of current and resists its departure.**

### Knowledge Point 16: Inductance Measures Flux Linkage per Current

linear magnetic system：

$$
\boxed{L=\frac{N\Phi_B}{I}}
$$

$L$ 越大，同样 current 建立的 flux linkage 越大，也就越强烈地反抗 subsequent current change。

unit：

$$
1\ \mathrm H
=1\ \frac{\mathrm{V\,s}}{\mathrm A}
=1\ \Omega\mathrm s
$$

### Knowledge Point 17: Inductor EMF Depends on Current Change Rate

由 Faraday's law：

$$
\boxed{
\mathcal E_L=-L\frac{di}{dt}
}
$$

magnitude：

$$
\boxed{
|V_L|=L\left|\frac{di}{dt}\right|
}
$$

negative sign 表示 Lenz direction。做 circuit algebra 时，更稳妥的是先按 chosen current direction 使用 passive sign convention，再写 Kirchhoff equation，避免机械地给每个 $Ldi/dt$ 加负号。

### Knowledge Point 18: Solenoid Geometry Controls Inductance

long air-core solenoid：

$$
B=\mu_0\frac{N}{\ell}I
$$

代入 $L=N\Phi/I$：

$$
\boxed{
L=\mu_0\frac{N^2A}{\ell}
}
$$

因此：

- more turns $N$：$L\propto N^2$；
- larger cross-sectional area $A$：larger $L$；
- longer coil $\ell$ with fixed $N$：smaller $L$；
- magnetic core：replace $\mu_0$ by appropriate permeability $\mu$。

## 8. Energy Stored in an Inductor / 电感储能

### Knowledge Point 19: Building Current Requires Work

inductor voltage magnitude：

$$
V_L=L\frac{di}{dt}
$$

instantaneous power delivered to the inductor：

$$
P=iV_L
=Li\frac{di}{dt}
$$

因此：

$$
dU=L i\,di
$$

从 $0$ 积到 $I$：

$$
\boxed{
U_L=\frac12LI^2
}
$$

energy 储存在 coil 建立的 magnetic field 中。断电后 current 衰减，magnetic field collapses，这部分能量可以重新送回 circuit。

> **A resistor dissipates energy; an ideal inductor stores and can return it.**

### Knowledge Point 20: Current Matters Quadratically

若 current 变为 $kI$：

$$
U_L' = k^2U_L
$$

所以 current 衰减到 initial value 的 $10\%$ 时，remaining magnetic energy 只有 $1\%$。

## 9. Combining Inductors / 电感串并联

对 uncoupled ideal inductors：

series：

$$
\boxed{L_{\text{eq}}=L_1+L_2+\cdots}
$$

parallel：

$$
\boxed{
\frac1{L_{\text{eq}}}
=\frac1{L_1}+\frac1{L_2}+\cdots
}
$$

形式上与 resistors 相同，与 capacitors 相反。

> [!warning] Mutual coupling matters
> 若 coils 靠得很近、共享 significant magnetic flux，mutual inductance 会改变等效结果；上面的简单公式假设 inductors uncoupled。

## 10. RL Circuit: Switch-On / RL通电过程

### Knowledge Point 21: Current Through an Inductor Cannot Jump

因为：

$$
V_L=L\frac{di}{dt}
$$

finite voltage 无法产生 infinite $di/dt$，所以 ideal inductor current continuous：

$$
\boxed{i_L(0^+)=i_L(0^-)}
$$

若 initially unenergized：

$$
i(0^-)=0\quad\Rightarrow\quad i(0^+)=0
$$

因此在刚闭合开关的瞬间，inductor 对该 branch 等效为 open circuit；DC steady state 时 $di/dt=0$，ideal inductor 等效为 wire / short circuit。

> **First instant: preserve the old current. Final DC state: replace the ideal inductor by a wire.**

### Knowledge Point 22: The Current Rises Exponentially

series RL circuit：

$$
\mathcal E-iR-L\frac{di}{dt}=0
$$

initial current zero 时：

$$
\boxed{
i(t)=\frac{\mathcal E}{R}
\left(1-e^{-t/\tau_L}\right)
}
$$

其中：

$$
\boxed{\tau_L=\frac LR}
$$

voltages：

$$
V_R(t)=\mathcal E\left(1-e^{-t/\tau_L}\right)
$$

$$
V_L(t)=\mathcal E e^{-t/\tau_L}
$$

所以 switch-on 后：

- current：$0\to\mathcal E/R$；
- resistor voltage：$0\to\mathcal E$；
- inductor voltage：$\mathcal E\to0$。

### Knowledge Point 23: Time Constant Sets the Pace

at $t=\tau_L$：

$$
i(\tau_L)
=\left(1-e^{-1}\right)I_\infty
\approx0.632I_\infty
$$

larger $L$ means slower current change；larger series $R$ means smaller $\tau_L$ and faster approach to the new steady state, though it also lowers $I_\infty=\mathcal E/R$。

## 11. RL Circuit: Decay / RL断电衰减

### Knowledge Point 24: The Inductor Temporarily Acts as a Source

remove the external source but retain a closed $RL$ path：

$$
L\frac{di}{dt}+iR=0
$$

solution：

$$
\boxed{
i(t)=I_0e^{-t/\tau_L}
}
$$

inductor polarity reverses as needed to keep current flowing in its previous direction。

### Knowledge Point 25: Energy Decays Twice as Fast in the Exponent

$$
U_L(t)=\frac12L[i(t)]^2
$$

因此：

$$
\boxed{
U_L(t)=U_0e^{-2t/\tau_L}
}
$$

经过 $2.3\tau_L$：

$$
\frac{U}{U_0}=e^{-4.6}\approx0.010
$$

即 remaining energy 约 $1\%$，released / dissipated energy 约 $99\%$。

课堂计算时容易漏掉 square，误写成 $e^{-2.3}$；energy depends on $I^2$。

## 12. RL and RC Are Dual Switching Models / RL与RC对照

| Feature | Capacitor | Inductor |
|---|---|---|
| cannot jump | voltage $V_C$ | current $i_L$ |
| initially uncharged / unenergized at $0^+$ | short circuit | open circuit |
| DC steady state | open circuit | short circuit |
| stored energy | $\frac12CV^2$ | $\frac12LI^2$ |
| time constant | $\tau_C=RC$ | $\tau_L=L/R$ |
| underlying memory | stored electric field | stored magnetic field |

[[RC Circuits]] 与 [[RL Circuits]] 都是 first-order exponential systems，但“连续不跳变的量”正好相反。

## 13. Circuit Problem Strategy / 电感开关题固定流程

### Knowledge Point 26: Analyze Three Moments Separately

1. $t=0^-$：switch 之前的 steady state，确定 stored current。
2. $t=0^+$：enforce $i_L(0^+)=i_L(0^-)$，再重画 circuit。
3. $t\to\infty$：DC steady state，把 ideal inductor 替换为 wire。
4. 若求 initial slope，先求 **inductor terminals 的真实 voltage**，再用 $di/dt=V_L/L$。

### Knowledge Point 27: Initial and Final Equivalent Circuits Give Most Answers

课堂最后一题中，$R_A$ 在 main branch，$R_B$ 与 inductor branch 并联：

- steady state：inductor becomes a wire and shorts $R_B$；
- first instant from zero current：inductor branch is open，current flows through $R_A+R_B$。

由 final current $2.4\ \mathrm A$ 与 source $24\ \mathrm V$：

$$
R_A=\frac{24}{2.4}=10\ \Omega
$$

由 initial total current $0.8\ \mathrm A$：

$$
R_A+R_B=\frac{24}{0.8}=30\ \Omega
$$

所以：

$$
R_B=20\ \Omega
$$

### Knowledge Point 28: Initial di/dt Uses the Voltage Across L, Not Automatically the Source Voltage

在 $0^+$，inductor branch open，$R_A$ 与 $R_B$ 分压。$R_B$ 两端也就是 inductor terminals 的 voltage：

$$
V_L(0^+)=V_{R_B}
=24\frac{20}{10+20}
=16\ \mathrm V
$$

若 $L=0.05\ \mathrm H$：

$$
\boxed{
\left|\frac{di}{dt}\right|_{0^+}
=\frac{16}{0.05}
=320\ \mathrm{A/s}
}
$$

transcript 末尾老师也纠正了先前直接使用 $24\ \mathrm V$ 得到 $480\ \mathrm{A/s}$ 的口误。

> [!important] First find $V_L$
> $|di/dt|=|V_L|/L$ 中的 $V_L$ 是当时真正加在 inductor 两端的 voltage，不一定等于 source EMF。

## 14. Formula Map / 公式地图

### Induction

$$
\Phi_B=\int\vec B\cdot d\vec A
$$

$$
\mathcal E=-N\frac{d\Phi_B}{dt}
$$

$$
\oint\vec E\cdot d\vec\ell
=-\frac{d\Phi_B}{dt}
$$

### Inductor

$$
L=\frac{N\Phi_B}{I}
$$

$$
\mathcal E_L=-L\frac{di}{dt}
$$

$$
L_{\text{solenoid}}=\mu_0\frac{N^2A}{\ell}
$$

$$
U_L=\frac12LI^2
$$

### RL transient

$$
\tau_L=\frac LR
$$

$$
i_{\text{rise}}(t)=I_\infty(1-e^{-t/\tau_L})
$$

$$
i_{\text{decay}}(t)=I_0e^{-t/\tau_L}
$$

$$
U_{\text{decay}}(t)=U_0e^{-2t/\tau_L}
$$

## 15. Deep Phrases / 能记住意思的关键句

这些不是单纯术语表，而是读到一句话就能找回整段 reasoning 的 anchors：

- **Flux is field through an oriented surface.**  磁通量是穿过有方向面积的磁场总量。
- **Faraday gives the amount; Lenz gives the direction.**  法拉第定大小，楞次定方向。
- **Oppose the change, not the field.**  反抗的是变化，不是永远反向于原磁场。
- **Motion does not guarantee induction; flux change does.**  有运动不一定有净感应，磁通变化才是判断标准。
- **A changing magnetic field creates a circulating electric field.**  变化磁场建立的是环形感生电场。
- **An inductor opposes changes in current, not current itself.**  电感反抗电流变化，不反抗稳定电流。
- **Current through an inductor cannot jump.**  电感电流不能瞬间跳变。
- **At first preserve the old current; at DC steady state use a wire.**  初瞬间守住旧电流，直流稳态把电感看成导线。
- **A resistor dissipates; an ideal inductor stores and returns.**  电阻耗散能量，理想电感储存并可返还能量。
- **The time constant sets the pace, not the final value.**  时间常数决定变化速度，不决定最终值。
- **Find the actual inductor voltage before finding $di/dt$.**  先求电感真实端电压，再求电流变化率。

## 16. Fidelity Notes and Corrections / 转写校正

### Correction 1: “感生电场是保守场”是课堂口误

transcript 在约 `47:58` 一度说 induced electric field “依然是保守的”，但紧接着又说明沿 closed loop 的 line integral nonzero、传统 potential 无法处理。正确结论是：

$$
\boxed{\text{induced electric field is non-conservative}}
$$

### Correction 2: “无源场”要区分 divergence 与 circulation

magnetic field 没有 observed monopole，对应 $\nabla\cdot\vec B=0$。induced electric field 的重点则是 $\nabla\times\vec E=-\partial\vec B/\partial t$。两者都可出现 closed field lines，但数学信息不同。

### Correction 3: AC transformer 的相位描述只作直觉

transformer 的 induced voltage 与 flux derivative 有相位关系；不能只靠“有没有固定南北极”完整描述。课堂此处是 qualitative preview，不替代 mutual-inductance / AC circuit analysis。

### Correction 4: RL time constant

transcript 的自动转写多次把 $L/R$ 识别成“L2”或“L除2”。正确式为：

$$
\boxed{\tau_L=L/R}
$$

### Correction 5: Final example slope

老师最初把 source voltage $24\ \mathrm V$ 直接代入 $V_L/L$；学生用 Kirchhoff's rule 指出 inductor voltage 是 divider result $16\ \mathrm V$。最终正确答案为 $320\ \mathrm{A/s}$。

## 17. Self-Check / 自测

1. 为什么 magnetic flux angle 必须相对 area normal 定义？
2. $B$、$A$、$\theta$ 分别如何改变 flux？
3. average EMF 与 instantaneous EMF 的公式有何不同？
4. 为什么 rotating coil 的 EMF 含 $\sin\theta$？
5. Lenz's law 反抗 field 还是 flux change？
6. loop 完全进入 uniform field 后继续匀速平移，为什么 net EMF 为 zero？
7. magnet 进入和离开 loop 时，current direction 为什么反向但 force 都阻碍 motion？
8. 为什么 changing $B$ 可以在没有 wire 的空间里产生 electric field？
9. electrostatic field 与 induced electric field 的 closed-loop integral 有何不同？
10. self-induction 为什么只在 current changing 时出现？
11. $L=N\Phi/I$ 的物理意义是什么？
12. 为什么 $U_L=\frac12LI^2$？
13. ideal inductor 在 $0^+$ 和 DC steady state 分别怎样等效？
14. RL rise 与 decay 的 current functions 分别是什么？
15. 为什么 energy decay exponent 是 $-2t/\tau_L$？
16. 为什么求 initial $di/dt$ 前必须先重画 $0^+$ circuit？

## 18. After-Class Compression / 课后压缩版

1. flux：

$$
\Phi_B=BA\cos\theta
$$

2. Faraday-Lenz：

$$
\mathcal E=-N\frac{d\Phi_B}{dt}
$$

3. field form：

$$
\oint\vec E\cdot d\vec\ell=-\frac{d\Phi_B}{dt}
$$

4. self-induced EMF：

$$
\mathcal E_L=-L\frac{di}{dt}
$$

5. solenoid inductance：

$$
L=\mu_0\frac{N^2A}{\ell}
$$

6. magnetic energy：

$$
U_L=\frac12LI^2
$$

7. RL time constant：

$$
\tau_L=\frac LR
$$

8. rise：

$$
i=I_\infty(1-e^{-t/\tau_L})
$$

9. decay：

$$
i=I_0e^{-t/\tau_L}
$$

10. switching：

$$
i_L(0^+)=i_L(0^-)
$$

## 19. Video Companion / 搭配课堂观看

| Timestamp | 内容 |
|---|---|
| 00:00-00:08 | 第13课复习：generator、flux、$B/A/\theta$ 三种变化 |
| 00:08-00:13 | changing-$B$ example、只取 field 内面积 |
| 00:13-00:27 | rotating coil、average / instantaneous EMF、$N$ turns |
| 00:27-00:42 | Lenz's law、进出磁场、旋转线圈、落下磁铁 |
| 00:42-00:51 | induced electric field、closed-loop integral、AC qualitative discussion |
| 00:51-01:03 | self-induction、$\mathcal E_L=-Ldi/dt$、solenoid inductance |
| 01:03-01:15 | 课间 |
| 01:15-01:25 | inductance meaning 与 magnetic energy |
| 01:25-01:27 | inductor series / parallel |
| 01:27-01:43 | RL switch-on、initial/final behavior、time constant |
| 01:43-01:55 | RL decay 与 energy fraction |
| 01:57-02:05 | 综合开关题与 $di/dt$ 纠错 |

## 20. Connections / 知识网络

### Lecture Sequence

- Previous: [[AP电磁学第13次正课-动生电动势磁通量与法拉第定律]]
- Next: transcript 结尾说明下一节为结课内容，待后续 source 确认

### Induction Branch

- [[Magnetic Flux]] -> change rate
- [[Faraday's Law]] -> EMF
- [[Lenz's Law]] -> direction and energy consistency
- [[Induced Electric Field]] -> circulating non-conservative field
- [[Electromagnetic Induction]] -> unifies motional and changing-field cases

### Circuit Branch

- [[Inductors]] -> self-induced EMF and magnetic energy
- [[RL Circuits]] -> exponential current response
- [[Kirchhoff's Rules]] -> transient differential equation
- [[RC Circuits]] -> dual first-order switching model
- [[Electric Power]] -> $P=iV_L=dU_L/dt$

### Mathematics Branch

- [[Derivatives]] -> $d\Phi_B/dt$ and $di/dt$
- [[Chain Rule]] -> rotating-coil EMF
- [[Integrals]] -> flux and circulating-field line integral
- [[Differential Equations]] -> RL rise and decay
- [[Exponential Functions]] -> transient response

本课把第 13 课的 generator principle 收回到 circuit component：Faraday-Lenz law 不只解释外部磁场怎样“造电”，也解释 coil 怎样对自己的 current change 产生 memory。这个 memory 以 magnetic field energy 的形式存在，并通过 RL exponential transient 表现出来。
