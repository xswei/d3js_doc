# d3-force

这个模块基于[velocity Verlet](https://en.wikipedia.org/wiki/Verlet_integration)实现了物理粒子之间的作用力的仿真. 这个仿真做了简化处理:假设单位时间步长Δ*t* = 1, suoyou8粒子的质量常量*m* = 1。 这样的话每个粒子在Δ*t*时间内的加速度*a*就等于所受的合力*F*。可以不断修改粒子的运动速度然后调整粒子的位置。

在可视化领域中，仿真经常被用来实现[networks](http://bl.ocks.org/mbostock/ad70335eeef6d167bc36fd3c04378048) 和 [hierarchies](http://bl.ocks.org/mbostock/95aa92e2f4e8345aaa55a4a94d41ce37)!

[<img alt="Force Dragging III" src="https://raw.githubusercontent.com/d3/d3-force/master/img/graph.png" width="420" height="219">](http://bl.ocks.org/mbostock/ad70335eeef6d167bc36fd3c04378048)[<img alt="Force-Directed Tree" src="https://raw.githubusercontent.com/d3/d3-force/master/img/tree.png" width="420" height="219">](http://bl.ocks.org/mbostock/95aa92e2f4e8345aaa55a4a94d41ce37)

你也可以使用仿真来进行碰撞检测，比如[bubble charts](http://www.nytimes.com/interactive/2012/09/06/us/politics/convention-word-counts.html) 或 [beeswarm plots](http://bl.ocks.org/mbostock/6526445e2b44303eebf21da3b6627320):

[<img alt="Collision Detection" src="https://raw.githubusercontent.com/d3/d3-force/master/img/collide.png" width="420" height="219">](http://bl.ocks.org/mbostock/31ce330646fa8bcb7289ff3b97aab3f5)[<img alt="Beeswarm" src="https://raw.githubusercontent.com/d3/d3-force/master/img/beeswarm.png" width="420" height="219">](http://bl.ocks.org/mbostock/6526445e2b44303eebf21da3b6627320)

设置可以用来做一个简单的物理引擎，比如模拟一块布:

[<img alt="Force-Directed Lattice" src="https://raw.githubusercontent.com/d3/d3-force/master/img/lattice.png" width="480" height="250">](http://bl.ocks.org/mbostock/1b64ec067fcfc51e7471d944f51f1611)

在使用这个模块时，首先维持指定的一组节点创建一个[simulation](#simulation)，然后粒子之间产生力的相互作用并在每次tick的时候出发监听器事件，在监听器事件回调用更新粒子的位置。

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

根据指定的节点数组创建一个没有作用力的仿真。如果没有指定*nodes*则默认为空数组。仿真会自动开始，可以通过[*simulation*.on](#simulation_on)来为仿真的每一次tick添加事件监听器。也可以使用[*simulation*.stop](#simulation_stop)来停止仿真，[*simulation*.tick](#simulation_tick)来再次启用仿真。

<a name="simulation_restart" href="#simulation_restart">#</a> <i>simulation</i>.<b>restart</b>() [<>](https://github.com/d3/d3-force/blob/master/src/simulation.js#L80 "Source")

重启仿真内部的计时器，与[*simulation*.alphaTarget](#simulation_alphaTarget) 或 [*simulation*.alpha](#simulation_alpha)协同作用, 这个方法可以用在在交互时重新启动仿真，比如拖拽了某个节点或使用[*simulation*.stop](#simulation_stop)暂停仿真之后。

<a name="simulation_stop" href="#simulation_stop">#</a> <i>simulation</i>.<b>stop</b>() [<>](https://github.com/d3/d3-force/blob/master/src/simulation.js#L84 "Source")

停止仿真内部的计时器。如果仿真已经停止，则什么都不做。这个方法在手动调整仿真时候是很有用的。参考[*simulation*.tick](#simulation_tick).

<a name="simulation_tick" href="#simulation_tick">#</a> <i>simulation</i>.<b>tick</b>() [<>](https://github.com/d3/d3-force/blob/master/src/simulation.js#L38 "Source")

通过乘以alphaDecay增加当前的alpha值。然后为当前的仿真传入新的alpha值。然后通过乘以velocityDecay衰减每个节点的速度。最后计算节点的位置。这个方法不调用事件，事件仅仅在仿真自动开始或调用simulation.restart时由内部计时器调度。打点次数等于log(alpha)/log(1-alphaDecay)。默认为300次。

<a name="simulation_nodes" href="#simulation_nodes">#</a> <i>simulation</i>.<b>nodes</b>([<i>nodes</i>]) [<>](https://github.com/d3/d3-force/blob/master/src/simulation.js#L88 "Source")

如果指定了nodes，则根据当前的nodes对象数组初始化仿真的节点初始位置和速度。如果没有指定nodes则根据指定的构造器返回节点对象数组。

每个节点为一个对象类型，以下几个属性是通过仿真模拟器添加的：

* `index` - 节点的索引
* `x` - 节点当前的 *x*-位置
* `y` - 节点当前的 *y*-位置
* `vx` - 节点当前的 *x*-速度
* `vy` - 节点当前的 *y*-速度

位置 ⟨*x*,*y*⟩ 和速度 ⟨*vx*,*vy*⟩ 可能被随时修改. 如果 *vx* or *vy* 中的其中一个为NaN, 则速度回被初始化为 ⟨0,0⟩. 如果 *x* 或 *y* 为 NaN, 则位置会根据[phyllotaxis arrangement](http://bl.ocks.org/mbostock/11478058)进行初始化，不再是随机的。

由于节点都有默认的位置，如果想在一开始的时候手动指定节点的位置，则需要为节点设置如下两个属性:

* `fx` - *x*-位置
* `fy` - *y*-位置

在每次[tick](#simulation_tick)完成后，定义了*node*.fx的节点的*node*.x将被重置为*node*.fx，*node*.vx被设置为0. 同理*node*.y将被重置为*node*.fy，*node*.vy被设置为0. 在设置完时候*node*.fx 和 *node*.fy就被定义为null或移除这两个属性。

如果节点数组中的元素发生改变，比如移除或添加一个节点。则需要重新调用这个方法。

<a name="simulation_alpha" href="#simulation_alpha">#</a> <i>simulation</i>.<b>alpha</b>([<i>alpha</i>]) [<>](https://github.com/d3/d3-force/blob/master/src/simulation.js#L92 "Source")

设置或获取*alpha*值，区间为[0,1]. 默认为1。

<a name="simulation_alphaMin" href="#simulation_alphaMin">#</a> <i>simulation</i>.<b>alphaMin</b>([<i>min</i>]) [<>](https://github.com/d3/d3-force/blob/master/src/simulation.js#L96 "Source")

设置或获取最小的 *alpha*值，区间为[0,1], 默认为0.001. 在仿真过程中，*alpha*值会不断减小，当*alpha*小于最小*alpha*值时，仿真会停止。

*alpha*减小的方式是通过在每次tick的时候结合一个衰减系数来计算，这个系数通过[alpha decay rate](#simulation_alphaDecay)来定义，默认为0.0028。

子啊默认情况下，*alpha*值从1减小到0.001，计算公式为0.0228… = 1 - *pow*(0.001, 1 / 300)。也就是从1到0.001要计算300次小于0.001. 所以默认情况下tick次数为300次。

<a name="simulation_alphaDecay" href="#simulation_alphaDecay">#</a> <i>simulation</i>.<b>alphaDecay</b>([<i>decay</i>]) [<>](https://github.com/d3/d3-force/blob/master/src/simulation.js#L100 "Source")

设置或获取衰减系数，用来设置[*alpha*](#simulation_alpha)的衰减率。默认为0.0228… = 1 - *pow*(0.001, 1 / 300)， 0.001 是默认的[minimum *alpha*](#simulation_alphaMin)值.

衰减系数用来决定从当前alpha值到目标alpha值的过渡快慢。衰减系数越大，仿真的过程越短，当然效果会越差。 衰减系数越小，则仿真过程越长，最终的效果也就越好

<a name="simulation_alphaTarget" href="#simulation_alphaTarget">#</a> <i>simulation</i>.<b>alphaTarget</b>([<i>target</i>]) [<>](https://github.com/d3/d3-force/blob/master/src/simulation.js#L104 "Source")

alpha的目标值，区间为[0,1]. 默认为0

<a name="simulation_velocityDecay" href="#simulation_velocityDecay">#</a> <i>simulation</i>.<b>velocityDecay</b>([<i>decay</i>]) [<>](https://github.com/d3/d3-force/blob/master/src/simulation.js#L108 "Source")

速度衰减系数。相当于摩擦力。区间为[0,1], 默认为0.4

<a name="simulation_force" href="#simulation_force">#</a> <i>simulation</i>.<b>force</b>(<i>name</i>[, <i>force</i>]) [<>](https://github.com/d3/d3-force/blob/master/src/simulation.js#L112 "Source")

默认情况下，仿真是中的节点是没有力的作用的，需要通过这个方法为仿真系统设置力的作用，力有很多种，需要根据实际情况指定，比如在对图布局进行仿真时，可以如下:

```js
var simulation = d3.forceSimulation(nodes)
    .force("charge", d3.forceManyBody())	
    .force("link", d3.forceLink(links))	
    .force("center", d3.forceCenter());	
```

<a name="simulation_find" href="#simulation_find">#</a> <i>simulation</i>.<b>find</b>(<i>x</i>, <i>y</i>[, <i>radius</i>]) [<>](https://github.com/d3/d3-force/blob/master/src/simulation.js#L116 "Source")

返回离⟨*x*,*y*⟩ 点最接近的节点，可以指定一个搜索半径。如果在指定的半径区域内木有找到节点，则返回undefined.

<a name="simulation_on" href="#simulation_on">#</a> <i>simulation</i>.<b>on</b>(<i>typenames</i>, [<i>listener</i>]) [<>](https://github.com/d3/d3-force/blob/master/src/simulation.js#L139 "Source")

设置或获取事件监听器。

事件监听器通过type.names的形式指定，也就是同一种type可以根据name指定多个事件监听器。type有如下两种:

* `tick` - 每次tick时调用.
* `end` - 仿真结束时调用，也就是 *alpha* < [*alphaMin*](#simulation_alphaMin).

*tick*事件不会分发，仅仅在仿真内部使用

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
Forces通常读取节点的当前位置 ⟨*x*,*y*⟩ 然后

Forces typically read the node’s current position ⟨*x*,*y*⟩ and then add to (or subtract from) the node’s velocity ⟨*vx*,*vy*⟩. However, forces may also “peek ahead” to the anticipated next position of the node, ⟨*x* + *vx*,*y* + *vy*⟩; this is necessary for resolving geometric constraints through [iterative relaxation](https://en.wikipedia.org/wiki/Relaxation_\(iterative_method\)). Forces may also modify the position directly, which is sometimes useful to avoid adding energy to the simulation, such as when recentering the simulation in the viewport.

Simulations typically compose multiple forces as desired. This module provides several for your enjoyment:

* [Centering](#centering)
* [Collision](#collision)
* [Links](#links)
* [Many-Body](#many-body)
* [Positioning](#positioning)

Forces may optionally implement [*force*.initialize](#force_initialize) to receive the simulation’s array of nodes.

<a name="_force" href="#_force">#</a> <i>force</i>(<i>alpha</i>) [<>](https://github.com/d3/d3-force/blob/master/src/simulation.js#L44 "Source")

Applies this force, optionally observing the specified *alpha*. Typically, the force is applied to the array of nodes previously passed to [*force*.initialize](#force_initialize), however, some forces may apply to a subset of nodes, or behave differently. For example, [d3.forceLink](#links) applies to the source and target of each link.

<a name="force_initialize" href="#force_initialize">#</a> <i>force</i>.<b>initialize</b>(<i>nodes</i>) [<>](https://github.com/d3/d3-force/blob/master/src/simulation.js#L71 "Source")

Assigns the array of *nodes* to this force. This method is called when a force is bound to a simulation via [*simulation*.force](#simulation_force) and when the simulation’s nodes change via [*simulation*.nodes](#simulation_nodes). A force may perform necessary work during initialization, such as evaluating per-node parameters, to avoid repeatedly performing work during each application of the force.

#### Centering

The centering force translates nodes uniformly so that the mean position of all nodes (the center of mass if all nodes have equal weight) is at the given position ⟨[*x*](#center_x),[*y*](#center_y)⟩. This force modifies the positions of nodes on each application; it does not modify velocities, as doing so would typically cause the nodes to overshoot and oscillate around the desired center. This force helps keeps nodes in the center of the viewport, and unlike the [positioning force](#positioning), it does not distort their relative positions.

<a name="forceCenter" href="#forceCenter">#</a> d3.<b>forceCenter</b>([<i>x</i>, <i>y</i>]) [<>](https://github.com/d3/d3-force/blob/master/src/center.js#L1 "Source")

Creates a new centering force with the specified [*x*-](#center_x) and [*y*-](#center_y) coordinates. If *x* and *y* are not specified, they default to ⟨0,0⟩.

<a name="center_x" href="#center_x">#</a> <i>center</i>.<b>x</b>([<i>x</i>]) [<>](https://github.com/d3/d3-force/blob/master/src/center.js#L27 "Source")

If *x* is specified, sets the *x*-coordinate of the centering position to the specified number and returns this force. If *x* is not specified, returns the current *x*-coordinate, which defaults to zero.

<a name="center_y" href="#center_y">#</a> <i>center</i>.<b>y</b>([<i>y</i>]) [<>](https://github.com/d3/d3-force/blob/master/src/center.js#L31 "Source")

If *y* is specified, sets the *y*-coordinate of the centering position to the specified number and returns this force. If *y* is not specified, returns the current *y*-coordinate, which defaults to zero.

#### Collision

The collision force treats nodes as circles with a given [radius](#collide_radius), rather than points, and prevents nodes from overlapping. More formally, two nodes *a* and *b* are separated so that the distance between *a* and *b* is at least *radius*(*a*) + *radius*(*b*). To reduce jitter, this is by default a “soft” constraint with a configurable [strength](#collide_strength) and [iteration count](#collide_iterations).

<a name="forceCollide" href="#forceCollide">#</a> d3.<b>forceCollide</b>([<i>radius</i>]) [<>](https://github.com/d3/d3-force/blob/master/src/collide.js "Source")

Creates a new circle collision force with the specified [*radius*](#collide_radius). If *radius* is not specified, it defaults to the constant one for all nodes.

<a name="collide_radius" href="#collide_radius">#</a> <i>collide</i>.<b>radius</b>([<i>radius</i>]) [<>](https://github.com/d3/d3-force/blob/master/src/collide.js#L86 "Source")

If *radius* is specified, sets the radius accessor to the specified number or function, re-evaluates the radius accessor for each node, and returns this force. If *radius* is not specified, returns the current radius accessor, which defaults to:

```js
function radius() {
  return 1;
}
```

The radius accessor is invoked for each [node](#simulation_nodes) in the simulation, being passed the *node* and its zero-based *index*. The resulting number is then stored internally, such that the radius of each node is only recomputed when the force is initialized or when this method is called with a new *radius*, and not on every application of the force.

<a name="collide_strength" href="#collide_strength">#</a> <i>collide</i>.<b>strength</b>([<i>strength</i>]) [<>](https://github.com/d3/d3-force/blob/master/src/collide.js#L82 "Source")

If *strength* is specified, sets the force strength to the specified number in the range [0,1] and returns this force. If *strength* is not specified, returns the current strength which defaults to 0.7.

Overlapping nodes are resolved through iterative relaxation. For each node, the other nodes that are anticipated to overlap at the next tick (using the anticipated positions ⟨*x* + *vx*,*y* + *vy*⟩) are determined; the node’s velocity is then modified to push the node out of each overlapping node. The change in velocity is dampened by the force’s strength such that the resolution of simultaneous overlaps can be blended together to find a stable solution.

<a name="collide_iterations" href="#collide_iterations">#</a> <i>collide</i>.<b>iterations</b>([<i>iterations</i>]) [<>](https://github.com/d3/d3-force/blob/master/src/collide.js#L78 "Source")

If *iterations* is specified, sets the number of iterations per application to the specified number and returns this force. If *iterations* is not specified, returns the current iteration count which defaults to 1. Increasing the number of iterations greatly increases the rigidity of the constraint and avoids partial overlap of nodes, but also increases the runtime cost to evaluate the force.

#### Links

The link force pushes linked nodes together or apart according to the desired [link distance](#link_distance). The strength of the force is proportional to the difference between the linked nodes’ distance and the target distance, similar to a spring force.

<a name="forceLink" href="#forceLink">#</a> d3.<b>forceLink</b>([<i>links</i>]) [<>](https://github.com/d3/d3-force/blob/master/src/link.js "Source")

Creates a new link force with the specified *links* and default parameters. If *links* is not specified, it defaults to the empty array.

<a name="link_links" href="#link_links">#</a> <i>link</i>.<b>links</b>([<i>links</i>]) [<>](https://github.com/d3/d3-force/blob/master/src/link.js#L92 "Source")

If *links* is specified, sets the array of links associated with this force, recomputes the [distance](#link_distance) and [strength](#link_strength) parameters for each link, and returns this force. If *links* is not specified, returns the current array of links, which defaults to the empty array.

Each link is an object with the following properties:

* `source` - the link’s source node; see [*simulation*.nodes](#simulation_nodes)
* `target` - the link’s target node; see [*simulation*.nodes](#simulation_nodes)
* `index` - the zero-based index into *links*, assigned by this method

For convenience, a link’s source and target properties may be initialized using numeric or string identifiers rather than object references; see [*link*.id](#link_id).

If the specified array of *links* is modified, such as when links are added to or removed from the simulation, this method must be called again with the new (or changed) array to notify the force of the change; the force does not make a defensive copy of the specified array.

<a name="link_id" href="#link_id">#</a> <i>link</i>.<b>id</b>([<i>id</i>]) [<>](https://github.com/d3/d3-force/blob/master/src/link.js#L96 "Source")

If *id* is specified, sets the node id accessor to the specified function and returns this force. If *id* is not specified, returns the current node id accessor, which defaults to the numeric *node*.index:

```js
function id(d) {
  return d.index;
}
```

The default id accessor allows each link’s source and target to be specified as a zero-based index into the [nodes](#simulation_nodes) array. For example:

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

Now consider a different id accessor that returns a string:

```js
function id(d) {
  return d.id;
}
```

With this accessor, you can use named sources and targets:

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

This is particularly useful when representing graphs in JSON, as JSON does not allow references. See [this example](http://bl.ocks.org/mbostock/f584aa36df54c451c94a9d0798caed35).

The id accessor is invoked for each node whenever the force is initialized, as when the [nodes](#simulation_nodes) or [links](#link_links) change, being passed the node and its zero-based index.

<a name="link_distance" href="#link_distance">#</a> <i>link</i>.<b>distance</b>([<i>distance</i>]) [<>](https://github.com/d3/d3-force/blob/master/src/link.js#L108 "Source")

If *distance* is specified, sets the distance accessor to the specified number or function, re-evaluates the distance accessor for each link, and returns this force. If *distance* is not specified, returns the current distance accessor, which defaults to:

```js
function distance() {
  return 30;
}
```

The distance accessor is invoked for each [link](#link_links), being passed the *link* and its zero-based *index*. The resulting number is then stored internally, such that the distance of each link is only recomputed when the force is initialized or when this method is called with a new *distance*, and not on every application of the force.

<a name="link_strength" href="#link_strength">#</a> <i>link</i>.<b>strength</b>([<i>strength</i>]) [<>](https://github.com/d3/d3-force/blob/master/src/link.js#L104 "Source")

If *strength* is specified, sets the strength accessor to the specified number or function, re-evaluates the strength accessor for each link, and returns this force. If *strength* is not specified, returns the current strength accessor, which defaults to:

```js
function strength(link) {
  return 1 / Math.min(count(link.source), count(link.target));
}
```

Where *count*(*node*) is a function that returns the number of links with the given node as a source or target. This default was chosen because it automatically reduces the strength of links connected to heavily-connected nodes, improving stability.

The strength accessor is invoked for each [link](#link_links), being passed the *link* and its zero-based *index*. The resulting number is then stored internally, such that the strength of each link is only recomputed when the force is initialized or when this method is called with a new *strength*, and not on every application of the force.

<a name="link_iterations" href="#link_iterations">#</a> <i>link</i>.<b>iterations</b>([<i>iterations</i>]) [<>](https://github.com/d3/d3-force/blob/master/src/link.js#L100 "Source")

If *iterations* is specified, sets the number of iterations per application to the specified number and returns this force. If *iterations* is not specified, returns the current iteration count which defaults to 1. Increasing the number of iterations greatly increases the rigidity of the constraint and is useful for [complex structures such as lattices](http://bl.ocks.org/mbostock/1b64ec067fcfc51e7471d944f51f1611), but also increases the runtime cost to evaluate the force.

#### Many-Body

The many-body (or *n*-body) force applies mutually amongst all [nodes](#simulation_nodes). It can be used to simulate gravity (attraction) if the [strength](#manyBody_strength) is positive, or electrostatic charge (repulsion) if the strength is negative. This implementation uses quadtrees and the [Barnes–Hut approximation](https://en.wikipedia.org/wiki/Barnes–Hut_simulation) to greatly improve performance; the accuracy can be customized using the [theta](#manyBody_theta) parameter.

Unlike links, which only affect two linked nodes, the charge force is global: every node affects every other node, even if they are on disconnected subgraphs.

<a name="forceManyBody" href="#forceManyBody">#</a> d3.<b>forceManyBody</b>() [<>](https://github.com/d3/d3-force/blob/master/src/manyBody.js "Source")

Creates a new many-body force with the default parameters.

<a name="manyBody_strength" href="#manyBody_strength">#</a> <i>manyBody</i>.<b>strength</b>([<i>strength</i>]) [<>](https://github.com/d3/d3-force/blob/master/src/manyBody.js#L97 "Source")

If *strength* is specified, sets the strength accessor to the specified number or function, re-evaluates the strength accessor for each node, and returns this force. A positive value causes nodes to attract each other, similar to gravity, while a negative value causes nodes to repel each other, similar to electrostatic charge. If *strength* is not specified, returns the current strength accessor, which defaults to:

```js
function strength() {
  return -30;
}
```

The strength accessor is invoked for each [node](#simulation_nodes) in the simulation, being passed the *node* and its zero-based *index*. The resulting number is then stored internally, such that the strength of each node is only recomputed when the force is initialized or when this method is called with a new *strength*, and not on every application of the force.

<a name="manyBody_theta" href="#manyBody_theta">#</a> <i>manyBody</i>.<b>theta</b>([<i>theta</i>]) [<>](https://github.com/d3/d3-force/blob/master/src/manyBody.js#L109 "Source")

If *theta* is specified, sets the Barnes–Hut approximation criterion to the specified number and returns this force. If *theta* is not specified, returns the current value, which defaults to 0.9.

To accelerate computation, this force implements the [Barnes–Hut approximation](http://en.wikipedia.org/wiki/Barnes–Hut_simulation) which takes O(*n* log *n*) per application where *n* is the number of [nodes](#simulation_nodes). For each application, a [quadtree](https://github.com/d3/d3-quadtree) stores the current node positions; then for each node, the combined force of all other nodes on the given node is computed. For a cluster of nodes that is far away, the charge force can be approximated by treating the cluster as a single, larger node. The *theta* parameter determines the accuracy of the approximation: if the ratio *w* / *l* of the width *w* of the quadtree cell to the distance *l* from the node to the cell’s center of mass is less than *theta*, all nodes in the given cell are treated as a single node rather than individually.

<a name="manyBody_distanceMin" href="#manyBody_distanceMin">#</a> <i>manyBody</i>.<b>distanceMin</b>([<i>distance</i>]) [<>](https://github.com/d3/d3-force/blob/master/src/manyBody.js#L101 "Source")

If *distance* is specified, sets the minimum distance between nodes over which this force is considered. If *distance* is not specified, returns the current minimum distance, which defaults to 1. A minimum distance establishes an upper bound on the strength of the force between two nearby nodes, avoiding instability. In particular, it avoids an infinitely-strong force if two nodes are exactly coincident; in this case, the direction of the force is random.

<a name="manyBody_distanceMax" href="#manyBody_distanceMax">#</a> <i>manyBody</i>.<b>distanceMax</b>([<i>distance</i>]) [<>](https://github.com/d3/d3-force/blob/master/src/manyBody.js#L105 "Source")

If *distance* is specified, sets the maximum distance between nodes over which this force is considered. If *distance* is not specified, returns the current maximum distance, which defaults to infinity. Specifying a finite maximum distance improves performance and produces a more localized layout.

#### Positioning

The [*x*](#forceX)- and [*y*](#forceY)-positioning forces push nodes towards a desired position along the given dimension with a configurable strength. The strength of the force is proportional to the one-dimensional distance between the node’s position and the target position. While these forces can be used to position individual nodes, they are intended primarily for global forces that apply to all (or most) nodes.

<a name="forceX" href="#forceX">#</a> d3.<b>forceX</b>([<i>x</i>]) [<>](https://github.com/d3/d3-force/blob/master/src/x.js "Source")

Creates a new positioning force along the *x*-axis towards the given position [*x*](#x_x). If *x* is not specified, it defaults to 0.

<a name="x_strength" href="#x_strength">#</a> <i>x</i>.<b>strength</b>([<i>strength</i>]) [<>](https://github.com/d3/d3-force/blob/master/src/x.js#L32 "Source")

If *strength* is specified, sets the strength accessor to the specified number or function, re-evaluates the strength accessor for each node, and returns this force. The *strength* determines how much to increment the node’s *x*-velocity: ([*x*](#x_x) - *node*.x) × *strength*. For example, a value of 0.1 indicates that the node should move a tenth of the way from its current *x*-position to the target *x*-position with each application. Higher values moves nodes more quickly to the target position, often at the expense of other forces or constraints. A value outside the range [0,1] is not recommended.

If *strength* is not specified, returns the current strength accessor, which defaults to:

```js
function strength() {
  return 0.1;
}
```

The strength accessor is invoked for each [node](#simulation_nodes) in the simulation, being passed the *node* and its zero-based *index*. The resulting number is then stored internally, such that the strength of each node is only recomputed when the force is initialized or when this method is called with a new *strength*, and not on every application of the force.

<a name="x_x" href="#x_x">#</a> <i>x</i>.<b>x</b>([<i>x</i>]) [<>](https://github.com/d3/d3-force/blob/master/src/x.js#L36 "Source")

If *x* is specified, sets the *x*-coordinate accessor to the specified number or function, re-evaluates the *x*-accessor for each node, and returns this force. If *x* is not specified, returns the current *x*-accessor, which defaults to:

```js
function x() {
  return 0;
}
```

The *x*-accessor is invoked for each [node](#simulation_nodes) in the simulation, being passed the *node* and its zero-based *index*. The resulting number is then stored internally, such that the target *x*-coordinate of each node is only recomputed when the force is initialized or when this method is called with a new *x*, and not on every application of the force.

<a name="forceY" href="#forceY">#</a> d3.<b>forceY</b>([<i>y</i>]) [<>](https://github.com/d3/d3-force/blob/master/src/y.js "Source")

Creates a new positioning force along the *y*-axis towards the given position [*y*](#y_y). If *y* is not specified, it defaults to 0.

<a name="y_strength" href="#y_strength">#</a> <i>y</i>.<b>strength</b>([<i>strength</i>]) [<>](https://github.com/d3/d3-force/blob/master/src/y.js#L32 "Source")

If *strength* is specified, sets the strength accessor to the specified number or function, re-evaluates the strength accessor for each node, and returns this force. The *strength* determines how much to increment the node’s *y*-velocity: ([*y*](#y_y) - *node*.y) × *strength*. For example, a value of 0.1 indicates that the node should move a tenth of the way from its current *y*-position to the target *y*-position with each application. Higher values moves nodes more quickly to the target position, often at the expense of other forces or constraints. A value outside the range [0,1] is not recommended.

If *strength* is not specified, returns the current strength accessor, which defaults to:

```js
function strength() {
  return 0.1;
}
```

The strength accessor is invoked for each [node](#simulation_nodes) in the simulation, being passed the *node* and its zero-based *index*. The resulting number is then stored internally, such that the strength of each node is only recomputed when the force is initialized or when this method is called with a new *strength*, and not on every application of the force.

<a name="y_y" href="#y_y">#</a> <i>y</i>.<b>y</b>([<i>y</i>]) [<>](https://github.com/d3/d3-force/blob/master/src/y.js#L36 "Source")

If *y* is specified, sets the *y*-coordinate accessor to the specified number or function, re-evaluates the *y*-accessor for each node, and returns this force. If *y* is not specified, returns the current *y*-accessor, which defaults to:

```js
function y() {
  return 0;
}
```

The *y*-accessor is invoked for each [node](#simulation_nodes) in the simulation, being passed the *node* and its zero-based *index*. The resulting number is then stored internally, such that the target *y*-coordinate of each node is only recomputed when the force is initialized or when this method is called with a new *y*, and not on every application of the force.
