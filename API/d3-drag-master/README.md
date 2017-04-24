# d3-drag

[Drag-and-drop(拖拽)](https://en.wikipedia.org/wiki/Drag_and_drop) 是一种流行且易学的交互方式。D3的 [drag behavior](#api-reference) 为[selections](https://github.com/d3/d3-selection)提供了一个方便且灵活的交互方式, 例如你可以使用拖拽交互来增强 [力导向](https://github.com/d3/d3-force)效果, 或者拖拽力学仿真中相互碰撞的圆:

[<img alt="Force Dragging III" src="https://raw.githubusercontent.com/d3/d3-drag/master/img/force-graph.png" width="420" height="219">](http://bl.ocks.org/mbostock/ad70335eeef6d167bc36fd3c04378048)[<img alt="Force Dragging II" src="https://raw.githubusercontent.com/d3/d3-drag/master/img/force-collide.png" width="420" height="219">](http://bl.ocks.org/mbostock/2990a882e007f8384b04827617752738)

你也可以使用拖拽交互来做一些传统的控件，比如滑块等。但是拖拽交互并不局限于移动元素，有很多种响应拖拽操作的方式，比如可以使用它来套索散点图中的元素，或者使用canvas画图：


[<img alt="Line Drawing" src="https://raw.githubusercontent.com/d3/d3-drag/master/img/drawing.png" width="420" height="219">](http://bl.ocks.org/mbostock/f705fc55e6f26df29354)

拖拽交互也可以与其他交互结合使用，比如和[d3-zoom](https://github.com/d3/d3-zoom)结合使用 .

[<img alt="Drag & Zoom II" src="https://raw.githubusercontent.com/d3/d3-drag/master/img/dots.png" width="420" height="219">](http://bl.ocks.org/mbostock/3127661b6f13f9316be745e77fdfb084)

拖拽交互对DOM元素不敏感，所以你可以将其应用在SVG,HTML甚至Canvas上。并且可以通过其他技术手段对其进行扩展，比如可以将Voronoi叠加到目标元素上:

[<img alt="Circle Dragging IV" src="https://raw.githubusercontent.com/d3/d3-drag/master/img/voronoi.png" width="420" height="219">](http://bl.ocks.org/mbostock/ec10387f24c1fad2acac3bc11eb218a5)[<img alt="Circle Dragging II" src="https://raw.githubusercontent.com/d3/d3-drag/master/img/canvas.png" width="420" height="219">](http://bl.ocks.org/mbostock/c206c20294258c18832ff80d8fd395c3)


有一点好处，那就是拖拽操作统一了鼠标和触摸输入，并且屏蔽了浏览器的差异性。如果支持[Pointer Events](https://www.w3.org/TR/pointerevents/) 那么也支持拖拽操作。

W3C对Pointer的定义为：以任何输入设备在屏幕上做出接触点的效果，比如鼠标，笔，触摸等。

## Installing

NPM等安装方法略

```html
<script src="https://d3js.org/d3-dispatch.v1.min.js"></script>
<script src="https://d3js.org/d3-selection.v1.min.js"></script>
<script src="https://d3js.org/d3-drag.v1.min.js"></script>
<script>

var drag = d3.drag();

</script>
```

[Try d3-drag in your browser.](https://tonicdev.com/npm/d3-drag)

## API Reference

下面的表格描述了拖拽事件与原始Pointer Event之间的对应关系:

| Event        | Listening Element | Drag Event | Default Prevented? |
| ------------ | ----------------- | ---------- | ------------------ |
| mousedown⁵   | selection         | start      | no¹                |
| mousemove²   | window¹           | drag       | yes                |
| mouseup²     | window¹           | end        | yes                |
| dragstart²   | window            | -          | yes                |
| selectstart² | window            | -          | yes                |
| click³       | window            | -          | yes                |
| touchstart   | selection         | start      | no⁴                |
| touchmove    | selection         | drag       | yes                |
| touchend     | selection         | end        | no⁴                |
| touchcancel  | selection         | end        | no⁴                |

所有的事件传播会被阻止，如果要防止某些非拖拽事件触发拖拽事件监听器，则要设置 [*drag*.filter](#drag_filter)来对事件进行过滤.

¹ 必须捕获iframe外的事件; 参考 [#9](https://github.com/d3/d3-drag/issues/9).
<br>² 仅适用于基于鼠标的活动; 参考 [#9](https://github.com/d3/d3-drag/issues/9).
<br>³ 只能在非空的基于鼠标的手势之后立即应用.
<br>⁴ 必须允许在触摸输入上进行点击仿真; 参考 [#9](https://github.com/d3/d3-drag/issues/9).
<br>⁵ 忽略500ms内的同类型事件，为了避免过度的事件触发影响客户端性能。

<a href="#drag" name="drag">#</a> d3.<b>drag</b>() [<>](https://github.com/d3/d3-drag/blob/master/src/drag.js "Source")

创建一个新的拖拽操作，返回一个[*drag*](#_drag), 它是一个对象方法。一般通过 [*selection*.call](https://github.com/d3/d3-selection#selection_call)将其应用在指定的选择集上.

<a href="#_drag" name="_drag">#</a> <i>drag</i>(<i>selection</i>) [<>](https://github.com/d3/d3-drag/blob/master/src/drag.js#L31 "Source")

将拖拽操作应用到指定的选择集。这个方法并不会直接使用，在内部通过使用 [*selection*.call](https://github.com/d3/d3-selection#selection_call)间接调用. 比如使用如下方法为选择集添加拖拽事件:

```js
d3.selectAll(".node").call(d3.drag().on("start", started));
```

在内部，拖拽操作通过[*selection*.on](https://github.com/d3/d3-selection#selection_on) 来为元素添加监听事件. 事件监听器使用 `.drag` 来标识这是一个拖拽事件, 所以你可以通过如下方法来取消拖拽操作:

```js
selection.on(".drag", null);
```

应用拖拽操作时，在IOS上也会同步改变 [-webkit-tap-highlight-color](https://developer.apple.com/library/mac/documentation/AppleApplications/Reference/SafariWebContent/AdjustingtheTextSize/AdjustingtheTextSize.html#//apple_ref/doc/uid/TP40006510-SW5) 来高亮显示拖拽的元素，如果你想自定义高亮颜色，则需要在应用拖拽交互后移除或重新应用这个样式.

<a href="#drag_container" name="drag_container">#</a> <i>drag</i>.<b>container</b>([<i>container</i>]) [<>](https://github.com/d3/d3-drag/blob/master/src/drag.js#L31 "Source")

拖拽事件中，当前的鼠标坐标是常常被使用到的，那么当前的鼠标位置如何计算，是相对于哪个祖先元素？这就需要通过*container*来设置。

如果指定了*container*，则设置拖拽事件的相对祖先元素，并返回当前的拖拽对象。如果没有设置*container*则返回当前的祖先元素访问器，默认：

```js
function container() {
  return this.parentNode;
}
```

*container*指定了拖拽事件的坐标系统，对 *event*.x 和 *event*.y有影响. 由container访问器返回的元素最后会被传给[d3.mouse](https://github.com/d3/d3-selection#mouse) 或 [d3.touch](https://github.com/d3/d3-selection#touch) 来计算事件的具体坐标.


默认的容器访问器返回选择集的父级元素，这种默认设置经常被用来操作SVG和HTML，因为这些元素通常使用相对父元素的定位来获取坐标。如果拖拽Canvas上的图元元素，则需要设置容器为元素自身:

```js
function container() {
  return this;
}
```

当然也可以直接设置，而不是使用访问器的形式，比如`drag.container(canvas)`.

<a href="#drag_filter" href="drag_filter">#</a> <i>drag</i>.<b>filter</b>([<i>filter</i>]) [<>](https://github.com/d3/d3-drag/blob/master/src/drag.js#L126 "Source")

如果指定了 *filter*，则设置事件过滤器，并返回拖拽行为，如果没有指定 *filter* 则返回当前的过滤器，默认为:

```js
function filter() {
  return !d3.event.button;
}
```

如果过滤器返回false，则会忽略这个事件，并没有拖拽行为发生。过滤器决定了哪些输入事件应当被忽略。默认的过滤器会忽略辅助按钮上的鼠标按下事件，因为这些按钮通常有其他的目的，比如菜单按钮.

<a href="#drag_subject" name="drag_subject">#</a> <i>drag</i>.<b>subject</b>([<i>subject</i>]) [<>](https://github.com/d3/d3-drag/blob/master/src/drag.js#L134 "Source")

不太理解，先放着。

如果*subject*指定了，则设置当前的 subject 访问器为指定的对象或者函数，并返回当前的拖拽操作。如果没有指定*subject*,则返回当前的 subject 访问器，默认为：

```js
function subject(d) {
  return d == null ? {x: event.x, y: event.y} : d;
}
```

*subject* 表示 *当前正被拖拽的东西*。当接收到输入事件时被计算得到，比如鼠标按下或者开始触摸等在拖拽开始之前。然后 subject 作为*event*.subject被附加到[drag events](#drag-events)上。


默认的 subject 是接收拖拽事件的原始元素上绑定的[datum](https://github.com/d3/d3-selection#selection_datum)；如果datum未定义，则表示指针坐标位置的对象会被创建。当在SVG中拖拽圆时，默认的subject就是当前被拖拽圆上绑定的数据。当使用[Canvas](https://html.spec.whatwg.org/multipage/scripting.html#the-canvas-element)时，默认的subject就是当前canvas元素上的datum(无论你点击的是canvas上的哪个位置)。当使用canvas时，自定义的subject访问器就显得非常重要了，比如在当前位置指定半径区域内选取一个圆表示当前被拖拽的对象:

```js
function subject() {
  var n = circles.length,
      i,
      dx,
      dy,
      d2,
      s2 = radius * radius,
      circle,
      subject;

  for (i = 0; i < n; ++i) {
    circle = circles[i];
    dx = d3.event.x - circle.x;
    dy = d3.event.y - circle.y;
    d2 = dx * dx + dy * dy;
    if (d2 < s2) subject = circle, s2 = d2;
  }

  return subject;
}
```

如果需要的话，上述操作可以使用[*quadtree*.find](https://github.com/d3/d3-quadtree#quadtree_find)来加速。

返回的subject应该是一个包含`x`和`y`属性的对象，所以subject和指针在拖拽过程中的相对位置可以保持。如果subject为null或者undefined，则不会启动拖拽手势；然而，其他的起始点也可以启动 拖拽手势，参考[*drag*.filter](#drag_filter)。

拖拽过程中的subject可能在拖拽过程中没有变化。拖拽访问器和[*selection*.on](https://github.com/d3/d3-selection#selection_on)事件会以相同的上下文和参数被调用：当前数据`d`，索引`i`以及指向当前DOM元素的`this`。在对subject访问器进行计算过程中，[d3.event](https://github.com/d3/d3-selection#event)是一个先于[drag event](#drag-events)启动的事件。使用*event*.sourceEvent可以访问原始事件，*event*.identifier可以访问原始触摸标识符。*event*.x 和 *event*.y坐标是想对于[container](#drag_container)并使用[d3.mouse](https://github.com/d3/d3-selection#mouse) 或 [d3.touch](https://github.com/d3/d3-selection#touch)计算的，


<a href="#drag_on" name="drag_on">#</a> <i>drag</i>.<b>on</b>(<i>typenames</i>, [<i>listener</i>]) [<>](https://github.com/d3/d3-drag/blob/master/src/drag.js#L138 "Source")

如果指定了*listener*，则将其设置为指定类型的回调事件，并返回拖拽行为。如果已经为执行的*typename*注册了监听器，则会将其覆盖。如果*listener*为null，则相当于移除*typename*对应的监听器。如果没有指定*listener*，则返回与*typename*匹配的第一个监听器。当事件发生时，对应的监听器将会被执行，并传递当前元素绑定的数据 `d` 和索引 `i`,  `this` 指向当前DOM元素.


*typenames* 是一个或多个由空格分割的字符串. 每个 *typename* 都是一个可以由(`.`)分割的 *type*和*name*, 比如`drag.foo` 和 `drag.bar`; *name* 允许为同一种*type*添加多个监听器，而*type*必须为如下几种:

* `start` - 开始拖拽 (对应 mousedown 或 touchstart).
* `drag` - 拖拽中 (对应 mousemove 或 touchmove).
* `end` - 拖拽结束 (对应 mouseup, touchend 或 touchcancel).

参考 [*dispatch*.on](https://github.com/d3/d3-dispatch#dispatch_on) 获取更多信息.


<a href="#dragDisable" name="dragDisable">#</a> d3.<b>dragDisable</b>(<i>window</i>) [<>](https://github.com/d3/d3-drag/blob/master/src/nodrag.js#L4 "Source")

阻止指定窗口上的原生拖拽和文本选择事件。

<a href="#dragEnable" name="dragEnable">#</a> d3.<b>dragEnable</b>(<i>window</i>[, <i>noclick</i>]) [<>](https://github.com/d3/d3-drag/blob/master/src/nodrag.js#L15 "Source")

启用指定*window*上的原生拖拽和文本选择事件，取消[d3.dragDisable](#dragDisable)的影响. 

### Drag Events

当[drag event listener](#drag_on)被调用的时候, [d3.event](https://github.com/d3/d3-selection#event)会被设置为当前的拖拽事件. *event*对象包括以下几个属性:

* `target` - 关联的[drag behavior](#drag).
* `type` - 事件类型， “start”, “drag” or “end”; 参考 [*drag*.on](#drag_on).
* `subject` - 由 [*drag*.subject](#drag_subject)定义的.
* `x` - 新的 *x*-坐标.
* `y` - 新的 *y*-坐标.
* `dx` - 相对与上个拖拽事件的*x*-方向的偏移.
* `dy` - 相对与上个拖拽事件的*y*-方向的偏移.
* `identifier` - 字符串“mouse”, 或 [touch identifier](https://www.w3.org/TR/touch-events/#widl-Touch-identifier)标识符
* `active` - 当前活动的拖放操作数量.
* `sourceEvent` - 底层原生事件, 比如mousemove 或 touchmove.

*event*.active 在多个拖放并发进行时是有用的。记录了同时进行拖放操作的数量。


*event* 对象也包含 [*event*.on](#event_on) 方法.

<a href="#event_on" name="event_on">#</a> <i>event</i>.<b>on</b>(<i>typenames</i>, [<i>listener</i>]) [<>](https://github.com/d3/d3-drag/blob/master/src/event.js "Source")

相当于[*drag*.on](#drag_on), 但是只能应用于当前的拖拽操作。在进行拖拽之前，会创建一个[event listeners](#drag_on) 副本. 这个副本通过*event*.on被绑定到当前的拖拽操作。这可以用来创建一个临时的拖拽监听器，例如通过闭包创建一个临时的拖拽事件监听器:

```js
function started() {
  var circle = d3.select(this).classed("dragging", true);

  d3.event.on("drag", dragged).on("end", ended);

  function dragged(d) {
    circle.raise().attr("cx", d.x = d3.event.x).attr("cy", d.y = d3.event.y);
  }

  function ended() {
    circle.classed("dragging", false);
  }
}
```
