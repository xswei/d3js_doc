# d3-drag

[Drag-and-drop](https://en.wikipedia.org/wiki/Drag_and_drop) 是一种易学流行的交互手势：将指针指向目标对象，按下并且拖动它到一个新的位置，然后释放。D3的[drag behavior](#api-reference)提供了方便灵活并且抽象的拖拽交互。例如可以使用D3的拖拽与
[force-directed graph](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-force)进行交互：

[<img alt="Force Dragging III" src="https://raw.githubusercontent.com/d3/d3-drag/master/img/force-graph.png" width="420" height="219">](http://bl.ocks.org/mbostock/ad70335eeef6d167bc36fd3c04378048)[<img alt="Force Dragging II" src="https://raw.githubusercontent.com/d3/d3-drag/master/img/force-collide.png" width="420" height="219">](http://bl.ocks.org/mbostock/2990a882e007f8384b04827617752738)

你也可以使用d3-drag来实现自定义的用户交互，比如滑块。但是拖拽交互不仅仅是用来改变元素的位置的。还有许多手势可以通过拖拽实现，比如套索一些算下，或者在canvas上画线：

[<img alt="Line Drawing" src="https://raw.githubusercontent.com/d3/d3-drag/master/img/drawing.png" width="420" height="219">](http://bl.ocks.org/mbostock/f705fc55e6f26df29354)

拖拽交互可以与其他的交互结合使用，比如[d3-zoom](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-zoom)：

[<img alt="Drag & Zoom II" src="https://raw.githubusercontent.com/d3/d3-drag/master/img/dots.png" width="420" height="219">](http://bl.ocks.org/mbostock/3127661b6f13f9316be745e77fdfb084)

拖拽行为与DOM无关，因此你可以在SVG、HTML甚至Canvas中使用它。并且你可以通过高级选择技术来扩展它比如Voronoi或者邻近搜索：

[<img alt="Circle Dragging IV" src="https://raw.githubusercontent.com/d3/d3-drag/master/img/voronoi.png" width="420" height="219">](http://bl.ocks.org/mbostock/ec10387f24c1fad2acac3bc11eb218a5)[<img alt="Circle Dragging II" src="https://raw.githubusercontent.com/d3/d3-drag/master/img/canvas.png" width="420" height="219">](http://bl.ocks.org/mbostock/c206c20294258c18832ff80d8fd395c3)

最重要的是，拖拽交互自动统一鼠标和触摸输入，并且屏蔽了不同浏览器的不同特性。当[Pointer Events](https://www.w3.org/TR/pointerevents/)可用时，拖拽事件也同样可用。

## Installing

- NPM, `npm install d3-drag`. 
- 下载 [latest release](https://github.com/d3/d3-drag/releases/latest)，可以作为单独的标准库，也可以作为D3 v4的一部分引入

```html
<script src="https://d3js.org/d3-dispatch.v1.min.js"></script>
<script src="https://d3js.org/d3-selection.v1.min.js"></script>
<script src="https://d3js.org/d3-drag.v1.min.js"></script>
<script>

var drag = d3.drag();

</script>
```

[在浏览器中测试d3-drag](https://tonicdev.com/npm/d3-drag)

## API Reference

下表描述了拖拽行为如何解析原生事件:

| Event(事件)        | Listening Element(监听元素) | Drag Event(拖拽事件) | Default Prevented?(阻止默认行为) |
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

所有消耗型事件的传播都是被[immediately stopped(立即停止)](https://dom.spec.whatwg.org/#dom-event-stopimmediatepropagation)的，如果你想阻止某些事件触发拖拽手势，请使用[*drag*.filter](#drag_filter).

¹ 捕获iframe之外的事件时必须的; 参考 [#9](https://github.com/d3/d3-drag/issues/9).
<br>² 仅仅适用于基于鼠标的活动的手势; 参考 [#9](https://github.com/d3/d3-drag/issues/9).
<br>³ 仅适用于一些特定鼠标事件之后才能应用; 参考 [*drag*.clickDistance](#drag_clickDistance).
<br>⁴ 触摸输入时必须允许[click emulation](https://developer.apple.com/library/ios/documentation/AppleApplications/Reference/SafariWebContent/HandlingEvents/HandlingEvents.html#//apple_ref/doc/uid/TP40006511-SW7) ; 参考 [#9](https://github.com/d3/d3-drag/issues/9).
<br>⁵ 忽略触摸手势结束后500ms内的[click emulation](https://developer.apple.com/library/ios/documentation/AppleApplications/Reference/SafariWebContent/HandlingEvents/HandlingEvents.html#//apple_ref/doc/uid/TP40006511-SW7).

<a href="#drag" name="drag">#</a> d3.<b>drag</b>() [<源码>](https://github.com/d3/d3-drag/blob/master/src/drag.js "Source")

创建一个新的拖拽行为并返回自身。[*drag*](#_drag)既是一个对象，也是一个函数，通常通过[*selection*.call](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-selection/README.md#selection_call)被应用在选中的元素上。

<a href="#_drag" name="_drag">#</a> <i>drag</i>(<i>selection</i>) [<源码>](https://github.com/d3/d3-drag/blob/master/src/drag.js#L39 "Source")

将拖拽应用到指定的[*selection*](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-selection)。通常不适用这个方法应用拖拽，而是通过[*selection*.call](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-selection/README.md#selection_call)。例如，将拖拽实例应用到一个选择集上:

```js
d3.selectAll(".node").call(d3.drag().on("start", started));
```

在内部拖拽行为使用[*selection*.on](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-selection/README.md#selection_on)将拖拽必需的事件绑定到元素上，事件名称都带有`.drag`，因此可以使用这个特殊的事件名来解绑拖拽事件:

```js
selection.on(".drag", null);
```

应用拖拽行为时会将[-webkit-tap-highlight-color](https://developer.apple.com/library/mac/documentation/AppleApplications/Reference/SafariWebContent/AdjustingtheTextSize/AdjustingtheTextSize.html#//apple_ref/doc/uid/TP40006510-SW5)样式设置为透明，禁止在IOS上的标签高亮。如果你想要不一样的样式，请在应用完拖拽行为之后移除或者重新设置这个属性。

<a href="#drag_container" name="drag_container">#</a> <i>drag</i>.<b>container</b>([<i>container</i>]) [<源码>](https://github.com/d3/d3-drag/blob/master/src/drag.js#L145 "Source")

如果指定了*container*，则将拖拽行为的容器访问器设置为指定的对象或方法。如果没有指定*container* ，则返回当前的容器访问器，默认为:

```js
function container() {
  return this.parentNode;
}
```

拖拽手势的*container* 定义了随后[drag events](#drag-events)的坐标系统。影响*event*.x 和 *event*.y。容器访问器返回的元素随后被传递给[d3.mouse](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-selection/README.md#mouse) 或 [d3.touch](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-selection/README.md#touch)，因此需要的时候要定义好容器访问器。

默认的容器访问器返回接收到初始事件的元素的父节点(参考[*drag*](#_drag))，在拖动SVG或者HTML元素时，通常是合理的，因为这些元素通常通过父元素定位。但是拖动Canvas中的元素时，你可能需要将容器访问器设置为Canvas自身:

```js
function container() {
  return this;
}
```

此外，设置容器访问器时，还可以直接将元素设置为参数: `drag.container(canvas)`.

<a href="#drag_filter" name="drag_filter">#</a> <i>drag</i>.<b>filter</b>([<i>filter</i>]) [<源码>](https://github.com/d3/d3-drag/blob/master/src/drag.js#L141 "Source")

如果指定了*filter*，则将*filter*设置为拖拽行为的过滤器。如果没有指定*filter*则返回当前的过滤器，默认为：

```js
function filter() {
  return !d3.event.button;
}
```

如果过滤器返回假，则初始事件会被忽略并且不会启动拖拽手势。也就是说过滤器可以定义哪些事件被忽略，默认的过滤器会忽略辅助按钮上的鼠标按下事件，因为这些按钮通常用作其他的作用，比如上下文菜单。

<a href="#drag_touchable" name="drag_touchable">#</a> <i>drag</i>.<b>touchable</b>([<i>touchable</i>]) [<源码>](https://github.com/d3/d3-drag/blob/master/src/drag.js#L153 "Source")

如果指定了*touchable*，则设置触摸支持检测器为执行的函数。如果没有指定，则返回当前的触摸支持检测方法，默认为：

```js
function touchable() {
  return "ontouchstart" in this; 
}
```

触摸事件监听器仅仅在触摸支持检测器返回真的时候才会被注册。默认的检测器在绝大多数浏览器中都能正常工作，但不是全部。例如Chrome的模拟移动仿真不会正常工作。

<a href="#drag_subject" name="drag_subject">#</a> <i>drag</i>.<b>subject</b>([<i>subject</i>]) [<源码>](https://github.com/d3/d3-drag/blob/master/src/drag.js#L149 "Source")

*subject* 译为 `主体`

如果*subject*指定，则为拖拽行为指定主体访问器。如果没有指定，则返回当前的主体访问器。默认为：

```js
function subject(d) {
  return d == null ? {x: d3.event.x, y: d3.event.y} : d;
}
```

主体代表的是*the thing being dragged*(当前被拖拽)的东西。当接收到启动输入事件时被计算，比如`mousedown`或`touchstart`. 在拖拽启动时立即被计算。主体通过随后的[drag events](#drag-events)中的*event*.subject来暴露。

默认情况下，主体为接收原始事件元素上的[datum](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-selection/README.md#selection_datum). 如果datum没有定义则主体为输入事件的坐标(参考上述默认主体访问器)。当在SVG中拖拽时。默认的主体为当前元素绑定的数据，但在Canvas中默认的主体为Canvas本身绑定的数据(不关心拖拽事件触发的位置)，此时自定义的主体访问器就显得有用了，比如可以将自定义主体访问器设置为鼠标事件坐标周围一定`半径`范围内的圆:

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

(如果需要的话可以使用[*quadtree*.find](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-quadtree/README.md#quadtree_find)加速.)

返回的主体应该是一个暴露`x`和`y`属性的对象，以便在拖动手势期间保留主体和指针的相对位置。如果主体为`null`或`undefined`则不会有拖拽手势触发，然而其他的输入事件仍然可以触发，参考[*drag*.filter](#drag_filter)。

拖拽的主体在拖拽手势触发后不应该再改变。主体访问器与[*selection*.on](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-selection/README.md#selection_on)的回调有相同的上下文和参数: 当前绑定的数据`d`、索引`i`， `this`上下文为当前DOM元素。在主体访问器中[d3.event](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-selection/README.md#event)是一个`beforestart`的[drag event](#drag-events)。使用*event*.sourceEvent来访问初始输入事件和*event*.identifier来访问触摸标识。*event*.x 和 *event*.y是相对于[container](#drag_container)，并且使用[d3.mouse](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-selection/README.md#mouse) 或 [d3.touch](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-selection/README.md#touch)计算。

<a href="#drag_clickDistance" name="drag_clickDistance">#</a> <i>drag</i>.<b>clickDistance</b>([<i>distance</i>]) [<源码>](https://github.com/d3/d3-drag/blob/master/src/drag.js#L162 "Source")

如果指定了*distance*，则设置鼠标在`mousedown` 和 `mouseup`之间移动时触发后续。

If *distance* is specified, sets the maximum distance that the mouse can move between mousedown and mouseup that will trigger a subsequent click event. If at any point between mousedown and mouseup the mouse is greater than or equal to *distance* from its position on mousedown, the click event following mouseup will be suppressed. If *distance* is not specified, returns the current distance threshold, which defaults to zero. The distance threshold is measured in client coordinates ([*event*.clientX](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/clientX) and [*event*.clientY](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/clientY)).

<a href="#drag_on" name="drag_on">#</a> <i>drag</i>.<b>on</b>(<i>typenames</i>, [<i>listener</i>]) [<源码>](https://github.com/d3/d3-drag/blob/master/src/drag.js#L157 "Source")

如果*listener*指定，则将其设置为对应的*typenames*的回调。如果对应*typenames*已经存在事件监听器则将其替换掉。如果*listener* 为`null`则表示移除对应的*typenames*上的事件监听器。如果没有指定*listener*，则返回第一个对应*typenames*的事件监听器，事件监听器的调用上下文以及参数与[*selection*.on](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-selection/README.md#selection_on)类似：当前元素绑定的数据`d`, 索引`i`, `this`指向当前DOM元素。

*typenames*是一个或者由空格分割的多个*typename*。每个*typename*都是一个*type*，可选的*name*可以由`.`和*type*分割，比如`drag.foo` 和 `drag.bar`。使用*name*可以为同一种*type*指定多个事件监听器。*type*必须为以下几种:

* `start` - 拖拽开始(mousedown or touchstart).
* `drag` - 拖拽中 (mousemove or touchmove).
* `end` - 拖拽结束 (mouseup, touchend or touchcancel).

参考 [*dispatch*.on](https://github.com/d3/d3-dispatch#dispatch_on).

Changes to registered listeners via *drag*.on during a drag gesture *do not affect* the current drag gesture. Instead, you must use [*event*.on](#event_on), which also allows you to register temporary event listeners for the current drag gesture. **Separate events are dispatched for each active pointer** during a drag gesture. For example, if simultaneously dragging multiple subjects with multiple fingers, a start event is dispatched for each finger, even if both fingers start touching simultaneously. See [Drag Events](#drag-events) for more.

<a href="#dragDisable" name="dragDisable">#</a> d3.<b>dragDisable</b>(<i>window</i>) [<源码>](https://github.com/d3/d3-drag/blob/master/src/nodrag.js#L4 "Source")

Prevents native drag-and-drop and text selection on the specified *window*. As an alternative to preventing the default action of mousedown events (see [#9](https://github.com/d3/d3-drag/issues/9)), this method prevents undesirable default actions following mousedown. In supported browsers, this means capturing dragstart and selectstart events, preventing the associated default actions, and immediately stopping their propagation. In browsers that do not support selection events, the user-select CSS property is set to none on the document element. This method is intended to be called on mousedown, followed by [d3.dragEnable](#dragEnable) on mouseup.

<a href="#dragEnable" name="dragEnable">#</a> d3.<b>dragEnable</b>(<i>window</i>[, <i>noclick</i>]) [<源码>](https://github.com/d3/d3-drag/blob/master/src/nodrag.js#L15 "Source")

Allows native drag-and-drop and text selection on the specified *window*; undoes the effect of [d3.dragDisable](#dragDisable). This method is intended to be called on mouseup, preceded by [d3.dragDisable](#dragDisable) on mousedown. If *noclick* is true, this method also temporarily suppresses click events. The suppression of click events expires after a zero-millisecond timeout, such that it only suppress the click event that would immediately follow the current mouseup event, if any.

### Drag Events

When a [drag event listener](#drag_on) is invoked, [d3.event](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-selection/README.md#event) is set to the current drag event. The *event* object exposes several fields:

* `target` - the associated [drag behavior](#drag).
* `type` - the string “start”, “drag” or “end”; see [*drag*.on](#drag_on).
* `subject` - the drag subject, defined by [*drag*.subject](#drag_subject).
* `x` - the new *x*-coordinate of the subject; see [*drag*.container](#drag_container).
* `y` - the new *y*-coordinate of the subject; see [*drag*.container](#drag_container).
* `dx` - the change in *x*-coordinate since the previous drag event.
* `dy` - the change in *y*-coordinate since the previous drag event.
* `identifier` - the string “mouse”, or a numeric [touch identifier](https://www.w3.org/TR/touch-events/#widl-Touch-identifier).
* `active` - the number of currently active drag gestures (on start and end, not including this one).
* `sourceEvent` - the underlying input event, such as mousemove or touchmove.

The *event*.active field is useful for detecting the first start event and the last end event in a sequence of concurrent drag gestures: it is zero when the first drag gesture starts, and zero when the last drag gesture ends.

The *event* object also exposes the [*event*.on](#event_on) method.

<a href="#event_on" name="event_on">#</a> <i>event</i>.<b>on</b>(<i>typenames</i>, [<i>listener</i>]) [<源码>](https://github.com/d3/d3-drag/blob/master/src/event.js "Source")

Equivalent to [*drag*.on](#drag_on), but only applies to the current drag gesture. Before the drag gesture starts, a [copy](https://github.com/d3/d3-dispatch#dispatch_copy) of the current drag [event listeners](#drag_on) is made. This copy is bound to the current drag gesture and modified by *event*.on. This is useful for temporary listeners that only receive events for the current drag gesture. For example, this start event listener registers temporary drag and end event listeners as closures:

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
