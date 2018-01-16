# d3-force

### 小结

* [手动tick](#simulation_tick)来进行静态布局,参考这个[例子](https://bl.ocks.org/mbostock/1667139)
* 节点连接可以不止是索引，也可以是字符串标识，参考[这个](#links)
* 要为仿真指定力，否则只会tick，不会更新位置，可以同时指定多个力学模型

----------

这个模块基于[velocity Verlet](https://en.wikipedia.org/wiki/Verlet_integration)实现了物理粒子之间的作用力的仿真. 这个仿真做了简化处理:假设单位时间步长Δ*t* = 1, 所有粒子的质量常量*m* = 1。 这样的话每个粒子在Δ*t*时间内的加速度*a*就等于所受的合力*F*。可以不断修改粒子的运动速度然后调整粒子的位置。

在可视化领域中，仿真经常被用来实现[networks](http://bl.ocks.org/mbostock/ad70335eeef6d167bc36fd3c04378048) 和 [hierarchies](http://bl.ocks.org/mbostock/95aa92e2f4e8345aaa55a4a94d41ce37)!

[<img alt="Force Dragging III" src="https://raw.githubusercontent.com/d3/d3-force/master/img/graph.png" width="420" height="219">](http://bl.ocks.org/mbostock/ad70335eeef6d167bc36fd3c04378048)[<img alt="Force-Directed Tree" src="https://raw.githubusercontent.com/d3/d3-force/master/img/tree.png" width="420" height="219">](http://bl.ocks.org/mbostock/95aa92e2f4e8345aaa55a4a94d41ce37)

你也可以使用仿真来进行碰撞检测，比如[bubble charts](http://www.nytimes.com/interactive/2012/09/06/us/politics/convention-word-counts.html) 或 [beeswarm plots](http://bl.ocks.org/mbostock/6526445e2b44303eebf21da3b6627320):

[<img alt="Collision Detection" src="https://raw.githubusercontent.com/d3/d3-force/master/img/collide.png" width="420" height="219">](http://bl.ocks.org/mbostock/31ce330646fa8bcb7289ff3b97aab3f5)[<img alt="Beeswarm" src="https://raw.githubusercontent.com/d3/d3-force/master/img/beeswarm.png" width="420" height="219">](http://bl.ocks.org/mbostock/6526445e2b44303eebf21da3b6627320)

甚至可以用来做一个简单的物理引擎，比如模拟一块布:

[<img alt="Force-Directed Lattice" src="https://raw.githubusercontent.com/d3/d3-force/master/img/lattice.png" width="480" height="250">](http://bl.ocks.org/mbostock/1b64ec067fcfc51e7471d944f51f1611)

在使用这个模块时，首先为指定的一组节点创建一个仿真[simulation](#simulation)并且指定[力学模型类型](#simulation_force)，然后粒子之间产生力的相互作用并在每次tick的时候触发[监听器事件](#simulation_on)，在监听器事件回调用更新粒子的位置。

## Installing

NPM等安装方法略

```html
<script src="https://d3js.org/d3-collection.v1.min.js"></script>
<script src="https://d3js.org/d3-dispatch.v1.min.js"></script>
<script src="https://d3js.org/d3-quadtree.v1.min.js"></script>
<script src="https://d3js.org/d3-timer.v1.min.js"></script>
<script src="https://d3js.org/d3-force.v1.min.js"></script>
<script>

var simulation = d3.forceSimulation(nodes);

</script>
```

[在浏览器中测试d3-force](https://tonicdev.com/npm/d3-force)

## API Reference

### Simulation

<a name="forceSimulation" href="#forceSimulation">#</a> d3.<b>forceSimulation</b>([<i>nodes</i>]) [<>](https://github.com/d3/d3-force/blob/master/src/simulation.js "Source")

根据指定的节点数组创建一个没有[作用力](#simulation_force)的仿真。如果没有指定*nodes*则默认为空数组。仿真会自动开始，可以通过[*simulation*.on](#simulation_on)来为仿真的每一次tick添加事件监听器。也可以使用[*simulation*.stop](#simulation_stop)来停止仿真，[*simulation*.tick](#simulation_tick)来再次启用仿真。

<a name="simulation_restart" href="#simulation_restart">#</a> <i>simulation</i>.<b>restart</b>() [<>](https://github.com/d3/d3-force/blob/master/src/simulation.js#L80 "Source")

重启仿真内部的计时器，与[*simulation*.alphaTarget](#simulation_alphaTarget) 或 [*simulation*.alpha](#simulation_alpha)协同作用, 这个方法可以用在在交互时重新启动仿真，比如拖拽了某个节点或使用[*simulation*.stop](#simulation_stop)暂停仿真之后进行重新调整布局。

<a name="simulation_stop" href="#simulation_stop">#</a> <i>simulation</i>.<b>stop</b>() [<>](https://github.com/d3/d3-force/blob/master/src/simulation.js#L84 "Source")

停止仿真内部的计时器。如果仿真已经停止，则什么都不做。这个方法在手动调整仿真时候是很有用的。参考[*simulation*.tick](#simulation_tick).

<a name="simulation_tick" href="#simulation_tick">#</a> <i>simulation</i>.<b>tick</b>() [<>](https://github.com/d3/d3-force/blob/master/src/simulation.js#L38 "Source")

通过([*alphaTarget(alpha目标值)*](#simulation_alphaTarget) - *alpha*) × [*alphaDecay(alpha衰减系数)*](#simulation_alphaDecay)来调整仿真当前的[*alpha值*](#simulation_alpha)值。然后将这个新*alpha*值传给当前的[force(力)](#simulation_force)来调整布局。每个节点的速度是通过当前*velocity(速度)* × [*velocityDecay(速度衰减)*](#simulation_velocityDecay)来计算的，速度衰减可以理解为加速度。最后通过节点当前位置和速度计算出节点的下一个位置。

这个方法不会触发[events(事件)](#simulation_on)。事件只能通过仿真[creation(创建并自启动)](#forceSimulation) 或者调用 [*simulation*.restart](#simulation_restart)时由内部的计时器触发。事件的触发次数由⌈*log*([*alphaMin*](#simulation_alphaMin)) / *log*(1 - [*alphaDecay*](#simulation_alphaDecay))⌉计算的出; 默认参数情况下为300次.

这个方法可以与[*simulation*.stop](#simulation_stop)结合使用来计算[static force layout(静态布局)](https://bl.ocks.org/mbostock/1667139). 对于大规模图来说，静态布局应该通过 [in a web worker](https://bl.ocks.org/mbostock/01ab2e85e8727d6529d20391c0fd9a16) 来计算，这样可以避免冻结用户界面.



<a name="simulation_nodes" href="#simulation_nodes">#</a> <i>simulation</i>.<b>nodes</b>([<i>nodes</i>]) [<>](https://github.com/d3/d3-force/blob/master/src/simulation.js#L88 "Source")

如果指定了nodes，则根据当前的nodes对象数组初始化仿真的节点初始位置和速度。如果没有指定nodes则根据指定的构造器返回节点对象数组。

每个节点为一个对象类型，以下几个属性是通过仿真模拟器添加的：

* `index` - 节点的索引
* `x` - 节点当前的 *x*-位置
* `y` - 节点当前的 *y*-位置
* `vx` - 节点当前的 *x*-速度
* `vy` - 节点当前的 *y*-速度

位置 ⟨*x*,*y*⟩ 和速度 ⟨*vx*,*vy*⟩ 可能被随时修改. 如果 *vx* or *vy* 中的其中一个为NaN, 则速度会被初始化为 ⟨0,0⟩. 如果 *x* 或 *y* 为 NaN, 则位置会根据[phyllotaxis arrangement](http://bl.ocks.org/mbostock/11478058)进行初始化，不再是随机的。

如果要为某个节点设置默认的位置，则需要为该节点设置如下两个属性:

* `fx` - *x*-位置
* `fy` - *y*-位置

在每次[tick](#simulation_tick)完成后，定义了*node*.fx的节点的*node*.x将被重置为*node*.fx，*node*.vx被设置为0. 同理*node*.y将被重置为*node*.fy，*node*.vy被设置为0. 在设置完时候*node*.fx 和 *node*.fy就被定义为null或移除这两个属性。

如果节点数组中的元素发生改变，比如移除或添加一个节点。则需要重新调用这个方法。

<a name="simulation_alpha" href="#simulation_alpha">#</a> <i>simulation</i>.<b>alpha</b>([<i>alpha</i>]) [<>](https://github.com/d3/d3-force/blob/master/src/simulation.js#L92 "Source")

设置或获取仿真当前的*alpha*值，区间为[0,1]. 默认为1。

<a name="simulation_alphaMin" href="#simulation_alphaMin">#</a> <i>simulation</i>.<b>alphaMin</b>([<i>min</i>]) [<>](https://github.com/d3/d3-force/blob/master/src/simulation.js#L96 "Source")

设置或获取最小的 *alpha*值，区间为[0,1], 默认为0.001. 在仿真过程中，*alpha*值会不断减小，当*alpha*小于最小*alpha*值时，仿真会停止。

*alpha*减小的方式是通过在每次tick的时候结合一个衰减系数来计算，这个系数通过[alpha decay rate](#simulation_alphaDecay)来定义，默认为0.0028。

在默认情况下，*alpha*值从1减小到0.001，计算公式为0.0228… = 1 - *pow*(0.001, 1 / 300)。也就是从1到0.001要计算300次小于0.001. 所以默认情况下tick次数为300次。

<a name="simulation_alphaDecay" href="#simulation_alphaDecay">#</a> <i>simulation</i>.<b>alphaDecay</b>([<i>decay</i>]) [<>](https://github.com/d3/d3-force/blob/master/src/simulation.js#L100 "Source")

设置或获取衰减系数，用来设置[*alpha*](#simulation_alpha)的衰减率。默认为0.0228… = 1 - *pow*(0.001, 1 / 300)， 0.001 是默认的[minimum *alpha*](#simulation_alphaMin)值.

衰减系数用来决定从当前alpha值到*alphaTarget*值的过渡快慢。衰减系数越大，仿真的过程越短，当然效果会越差。 衰减系数越小，则仿真过程越长，最终的效果也就越好。

如果想要仿真永远运行，则设置*decay*为0，此时仿真的*alpha*保持不变。

<a name="simulation_alphaTarget" href="#simulation_alphaTarget">#</a> <i>simulation</i>.<b>alphaTarget</b>([<i>target</i>]) [<>](https://github.com/d3/d3-force/blob/master/src/simulation.js#L104 "Source")

alpha的目标值，区间为[0,1]. 默认为0

<a name="simulation_velocityDecay" href="#simulation_velocityDecay">#</a> <i>simulation</i>.<b>velocityDecay</b>([<i>decay</i>]) [<>](https://github.com/d3/d3-force/blob/master/src/simulation.js#L108 "Source")

速度衰减系数，相当于摩擦力。区间为[0,1], 默认为0.4。在每次*tick*之后，节点的速度都会等于当前速度乘以1-*velocityDecay*,和*alpha衰减*类似，速度衰减越慢最终的效果越好，但是如果速度衰减过慢，可能会导致震荡。

<a name="simulation_force" href="#simulation_force">#</a> <i>simulation</i>.<b>force</b>(<i>name</i>[, <i>force</i>]) [<>](https://github.com/d3/d3-force/blob/master/src/simulation.js#L112 "Source")

默认情况下，仿真是中的节点是没有力的作用的，需要通过这个方法为仿真系统设置力的作用，力有很多种，需要根据实际情况指定，比如在对图布局进行仿真时，可以设置如下几种力:

```js
var simulation = d3.forceSimulation(nodes)
    .force("charge", d3.forceManyBody())	 //节点间的作用力
    .force("link", d3.forceLink(links))	  //连线作用力
    .force("center", d3.forceCenter());	  //重力，布局有一个参考位置，不会跑偏
```

<a name="simulation_find" href="#simulation_find">#</a> <i>simulation</i>.<b>find</b>(<i>x</i>, <i>y</i>[, <i>radius</i>]) [<>](https://github.com/d3/d3-force/blob/master/src/simulation.js#L116 "Source")

返回离⟨*x*,*y*⟩ 点最接近的节点，可以指定一个搜索半径*radius*,*radius*默认无穷大。如果在指定的半径区域内木有找到节点，则返回undefined.

<a name="simulation_on" href="#simulation_on">#</a> <i>simulation</i>.<b>on</b>(<i>typenames</i>, [<i>listener</i>]) [<>](https://github.com/d3/d3-force/blob/master/src/simulation.js#L139 "Source")

设置或获取事件监听器。

事件监听器通过type.names的形式指定，也就是同一种type可以根据name指定多个事件监听器。type有如下两种:

* `tick` - 每次tick时调用.
* `end` - 仿真结束时调用，也就是 *alpha* < [*alphaMin*](#simulation_alphaMin).

*tick*事件不会由[*simulation*.tick](#simulation_tick)触发，仅仅可以通过内部计时器触发。

参考 [*dispatch*.on](https://github.com/d3/d3-dispatch#dispatch_on) 获取关于事件分发的详细介绍.



### Forces

*force*是一个简单的函数，用来修改节点的位置或速度。在这个部分，力可以被定义为模拟电荷作用也可以被定义为模拟重力或其他的几何约束，比如讲节点限制在一个区域内等。比如如果想要所有的节点都朝向⟨0,0⟩运动，则可以定义如下:

```js
function force(alpha) {
  for (var i = 0, n = nodes.length, node, k = alpha * 0.1; i < n; ++i) {
    node = nodes[i];
    node.vx -= node.x * k;
    node.vy -= node.y * k;
  }
}
```


Forces可以读取节点当前位置 ⟨*x*,*y*⟩ 然后增大或减小节点当前的速度 ⟨*vx*,*vy*⟩. 然而，Force也可以"窥探"到节点的下一个位置 ⟨*x* + *vx*,*y* + *vy*⟩; 这是[iterative relaxation(迭代松弛)](https://en.wikipedia.org/wiki/Relaxation_\(iterative_method\))解决几何约束必须的。Force也可以用来直接修改节点的位置以避免为仿真中添加能量，比如重新启动仿真时。


在这个模块中提供了以下几种力:

* [Centering](#centering)
* [Collision](#collision)
* [Links](#links)
* [Many-Body](#many-body)
* [Positioning](#positioning)

Forces可以通过[*force*.initialize](#force_initialize)来选择性的接受仿真的节点数组。

<a name="_force" href="#_force">#</a> <i>force</i>(<i>alpha</i>) [<>](https://github.com/d3/d3-force/blob/master/src/simulation.js#L44 "Source")

为力指定一个可选的的*alpha*，作用力可以被用到通过[*force*.initialize](#force_initialize)指定的节点上。也有些力可以应用在节点的子集上，或者为不同的节点之间指定不同的作用力，比如[d3.forceLink](#links)可以为每个连接单独指定作用力.

<a name="force_initialize" href="#force_initialize">#</a> <i>force</i>.<b>initialize</b>(<i>nodes</i>) [<>](https://github.com/d3/d3-force/blob/master/src/simulation.js#L71 "Source")

为作用力指定节点。这个方法会在一个作用力通过[*simulation*.force](#simulation_force)被绑定到仿真中并通过[*simulation*.nodes](#simulation_nodes)指定了节点时时调用。

#### Centering

centering作用力可以使得节点布局开之后围绕某个中心。相当于某个中心点对所有的节点都有一个制约，不会让布局的中心偏离。

<a name="forceCenter" href="#forceCenter">#</a> d3.<b>forceCenter</b>(<i>x</i>, <i>y</i>) [<>](https://github.com/d3/d3-force/blob/master/src/center.js#L1 "Source")

根据指定的[*x*-](#center_x) 和 [*y*-](#center_y)坐标创建一个centering作用力。默认为⟨0,0⟩.

<a name="center_x" href="#center_x">#</a> <i>center</i>.<b>x</b>([<i>x</i>]) [<>](https://github.com/d3/d3-force/blob/master/src/center.js#L27 "Source")

设置或获取center的x坐标，默认为0


<a name="center_y" href="#center_y">#</a> <i>center</i>.<b>y</b>([<i>y</i>]) [<>](https://github.com/d3/d3-force/blob/master/src/center.js#L31 "Source")

设置或获取center力的y坐标，默认为0

#### Collision

碰撞作用力可以为节点指定一个[radius](#collide_radius)区域来防止节点重叠, 而不是一个位置坐标。也就是节点*a* and *b*之间的距离至少为*radius*(*a*) + *radius*(*b*). 为了减少抖动，可以设置[strength(碰撞强度)](#collide_strength) 和 [iteration count(迭代次数)](#collide_iterations)两个参数.


<a name="forceCollide" href="#forceCollide">#</a> d3.<b>forceCollide</b>([<i>radius</i>]) [<>](https://github.com/d3/d3-force/blob/master/src/collide.js "Source")

使用默认的半径创建一个碰撞作用力。radius默认所有的节点都为1

<a name="collide_radius" href="#collide_radius">#</a> <i>collide</i>.<b>radius</b>([<i>radius</i>]) [<>](https://github.com/d3/d3-force/blob/master/src/collide.js#L86 "Source")

为指定节点设置一个碰撞半径，这个方法可以为节点分别设置不同的半径。默认情况下为:

```js
function radius() {
  return 1;
}
```

radius访问器会为仿真中的每个节点调用一次，以单独设置节点的碰撞半径，访问器函数会传递节点*node*以及索引*index*.


<a name="collide_strength" href="#collide_strength">#</a> <i>collide</i>.<b>strength</b>([<i>strength</i>]) [<>](https://github.com/d3/d3-force/blob/master/src/collide.js#L82 "Source")

设置碰撞力的强度，范围[0,1], 默认为0.7。 节点的重叠通过迭代松弛来解决。

<a name="collide_iterations" href="#collide_iterations">#</a> <i>collide</i>.<b>iterations</b>([<i>iterations</i>]) [<>](https://github.com/d3/d3-force/blob/master/src/collide.js#L78 "Source")

设置或获取迭代次数，默认为1，迭代次数越多最终的布局效果越好，但是计算复杂度更高，迭代次数越低，则计算复杂度越小，最终的效果也就越差。默认为1


#### Links

link作用力可以根据期望的[link distance(连接距离)](#link_distance)将节点连接在一起。作用力的强度与节点之间的距离成正比，类似于弹簧作用力。

<a name="forceLink" href="#forceLink">#</a> d3.<b>forceLink</b>([<i>links</i>]) [<>](https://github.com/d3/d3-force/blob/master/src/link.js "Source")

为指定的link数组创建一个link作用力。如果没有指定连接关系数组则默认为空。

<a name="link_links" href="#link_links">#</a> <i>link</i>.<b>links</b>([<i>links</i>]) [<>](https://github.com/d3/d3-force/blob/master/src/link.js#L92 "Source")

设置或获取link作用力的连接数组并重新计算[distance](#link_distance) 和 [strength](#link_strength). 如果没有指定*links*则返回当前的links数组，默认为空.

每个link都是包含以下两个属性的对象:

* `source` - 源数节点，参考 [*simulation*.nodes](#simulation_nodes)
* `target` - 目标节点，参考 [*simulation*.nodes](#simulation_nodes)
* `index` - 在*links*数组中的索引



为方便起见，每个连接的源和目的可以是数字索引或者字符串标示符。参考[*link*.id](#link_id).

如果links数组发生了改变，比如添加或删除一个link时则必须重新调用这个方法

<a name="link_id" href="#link_id">#</a> <i>link</i>.<b>id</b>([<i>id</i>]) [<>](https://github.com/d3/d3-force/blob/master/src/link.js#L96 "Source")

设置或获取link中节点的查找方式，默认使用*node*.index:

```js
function id(d) {
  return d.index;
}
```

默认的id访问器允许将source和target设置为基于[nodes](#simulation_nodes)数组的索引形式，比如:

```js
var nodes = [
  {"id": "Alice"},
  {"id": "Bob"},
  {"id": "Carol"}
];

var links = [
  {"source": 0, "target": 1}, // Alice → Bob
  {"source": 1, "target": 2} // Bob → Carol
];
```

也可以使用唯一的字符串来表示，比如:

```js
function id(d) {
  return d.id;
}
```

然后可以使用每个节点的id属性的值设置为source和target值:

```js
var nodes = [
  {"id": "Alice"},
  {"id": "Bob"},
  {"id": "Carol"}
];

var links = [
  {"source": "Alice", "target": "Bob"},
  {"source": "Bob", "target": "Carol"}
];
```

这个方法当图使用JSON格式表示的时候是很有用的。参考 [this example](http://bl.ocks.org/mbostock/f584aa36df54c451c94a9d0798caed35).

当link作用力初始化的时候id访问器都会在每个节点上调用

<a name="link_distance" href="#link_distance">#</a> <i>link</i>.<b>distance</b>([<i>distance</i>]) [<>](https://github.com/d3/d3-force/blob/master/src/link.js#L108 "Source")

设置或获取两个节点之间的距离，默认为:

```js
function distance() {
  return 30;
}
```

distance访问器会在每个link上调用，也就是可以为每个link设置不同的distance。


<a name="link_strength" href="#link_strength">#</a> <i>link</i>.<b>strength</b>([<i>strength</i>]) [<>](https://github.com/d3/d3-force/blob/master/src/link.js#L104 "Source")

设置或获取link的强度，默认：

```js
function strength(link) {
  return 1 / Math.min(count(link.source), count(link.target));
}
```

*count*(*node*)是一个返回与节点链接的其他节点的数量(节点的度)。这样的默认设置是为了当一个节点度很大时减小强度，提高稳定性。

强度也可以单独设置。

<a name="link_iterations" href="#link_iterations">#</a> <i>link</i>.<b>iterations</b>([<i>iterations</i>]) [<>](https://github.com/d3/d3-force/blob/master/src/link.js#L100 "Source")

设置或获取迭代次数，默认为1. 迭代次数越多，最终的仿真效果越好，计算复杂度也越高。

#### Many-Body

many-body(多体)作用力应用在所用的节点之间，当[strength](#manyBody_strength)为正的时候可以模拟重力，当为负的时候可以模拟电荷力。这个实现使用四叉树和[Barnes–Hut approximation](https://en.wikipedia.org/wiki/Barnes–Hut_simulation)的方法提高了性能。精确度可以通过[theta](#manyBody_theta)来控制.

与link不同，link作用力仅仅会影响有连接关系的两个节点，而电荷力是全局的，任何两个节点之间都有力的影响。

<a name="forceManyBody" href="#forceManyBody">#</a> d3.<b>forceManyBody</b>() [<>](https://github.com/d3/d3-force/blob/master/src/manyBody.js "Source")

使用默认的设置构建一个多体作用力。

<a name="manyBody_strength" href="#manyBody_strength">#</a> <i>manyBody</i>.<b>strength</b>([<i>strength</i>]) [<>](https://github.com/d3/d3-force/blob/master/src/manyBody.js#L97 "Source")

设置或获取强度参数，可以为负值也可以为正值，分别表示不同的力学类型，默认为:

```js
function strength() {
  return -30;
}
```

这个参数可以单独设置，也就是等于可以为不同的节点设置不同的电荷值

<a name="manyBody_theta" href="#manyBody_theta">#</a> <i>manyBody</i>.<b>theta</b>([<i>theta</i>]) [<>](https://github.com/d3/d3-force/blob/master/src/manyBody.js#L109 "Source")

设置或获取*theta*参数。*theta*参数用来设置Barnes–Hut 的近似标准。默认为0.9


*theta*是在实现[Barnes–Hut approximation](http://en.wikipedia.org/wiki/Barnes–Hut_simulation)时的一个参数，为了加速计算的。


<a name="manyBody_distanceMin" href="#manyBody_distanceMin">#</a> <i>manyBody</i>.<b>distanceMin</b>([<i>distance</i>]) [<>](https://github.com/d3/d3-force/blob/master/src/manyBody.js#L101 "Source")

设置或获取最小连接距离

<a name="manyBody_distanceMax" href="#manyBody_distanceMax">#</a> <i>manyBody</i>.<b>distanceMax</b>([<i>distance</i>]) [<>](https://github.com/d3/d3-force/blob/master/src/manyBody.js#L105 "Source")

设置或获取最大连接距离

#### Positioning

[*x*](#forceX) 和 [*y*](#forceY) position作用力可以将作用力限制在一个维度，方向或y方向。

<a name="forceX" href="#forceX">#</a> d3.<b>forceX</b>([<i>x</i>]) [<>](https://github.com/d3/d3-force/blob/master/src/x.js "Source")

根据给定的x位置创建一个x方向的作用力。如果没有指定x则默认为0

<a name="x_strength" href="#x_strength">#</a> <i>x</i>.<b>strength</b>([<i>strength</i>]) [<>](https://github.com/d3/d3-force/blob/master/src/x.js#L32 "Source")

设置或获取力的强度访问器，*strength*决定了节点x方向的速度增量:([*x*](#x_x) - *node*.x) × *strength*, 这个值越大则节点的位置会越快的朝向目标位置过渡，默认为:

```js
function strength() {
  return 0.1;
}
```

这个强度可以单独设置。


<a name="x_x" href="#x_x">#</a> <i>x</i>.<b>x</b>([<i>x</i>]) [<>](https://github.com/d3/d3-force/blob/master/src/x.js#L36 "Source")

设置或获取x坐标访问器。默认为:

```js
function x() {
  return 0;
}
```

可以单独设置。

<a name="forceY" href="#forceY">#</a> d3.<b>forceY</b>([<i>y</i>]) [<>](https://github.com/d3/d3-force/blob/master/src/y.js "Source")

根据给定的y位置创建一个y方向的作用力。如果没有指定y则默认为0

<a name="y_strength" href="#y_strength">#</a> <i>y</i>.<b>strength</b>([<i>strength</i>]) [<>](https://github.com/d3/d3-force/blob/master/src/y.js#L32 "Source")

设置或获取力的强度访问器，*strength*决定了节点x方向的速度增量:([*y*](#y_y) - *node*.y) × *strength*, 这个值越大则节点的位置会越快的朝向目标位置过渡，默认为:

```js
function strength() {
  return 0.1;
}
```

这个强度可以单独设置。

<a name="y_y" href="#y_y">#</a> <i>y</i>.<b>y</b>([<i>y</i>]) [<>](https://github.com/d3/d3-force/blob/master/src/y.js#L36 "Source")

设置或获取y坐标访问器。默认为:

```js
function y() {
  return 0;
}
```

可以单独设置。

