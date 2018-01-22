# d3-brush

刷取交互指在一维或二维空间内使用手势，比如点击然后拖拽鼠标拾取一块区域范围的操作。刷取操作经常用来选取一些离散的元素，比如散点图中的点或者桌面上的文件等等。它也可以被用来对感兴趣的区域进行放大操作，或者选择连续区域进行[交叉过滤数据](http://square.github.io/crossfilter/):

[<img alt="Mona Lisa Histogram" src="https://raw.githubusercontent.com/d3/d3-brush/master/img/mona-lisa.jpg" width="420" height="219">](http://bl.ocks.org/mbostock/0d20834e3d5a46138752f86b9b79727e)

d3-brush模块的实现基于注册于[SVG](https://www.w3.org/TR/SVG/)上的鼠标和触摸操作。

- 点击或者拖拽选择区域把柄可以调整对应的侧边位置，并改变已选中区域的大小形状。
- 点击并拖拽隐形的覆盖层可以移动整个已选中的范围，只改变已选中区域的位置，不改变大小和形状。按住META (⌘)键并点击可刷取范围内的点也会达到这种效果。
- 按住ALT (⌥)并移动鼠标时会已鼠标刚开始按下的点为中心调整已选中区域的大小
- 调整已选中区域大小的过程中按住SPACE时会将调整大小变为调整已选中区间位置
- 刷取过程中按住shift会固定刷取的方向

刷取操作也支持编程控制，例如通过监听[*end* events](#brush-events)事件，然后对选中区间通过[*brush*.move](#brush_move)进行微调：

[<img alt="Brush Snapping" src="https://raw.githubusercontent.com/d3/d3-brush/master/img/snapping.png" width="420" height="219">](http://bl.ocks.org/mbostock/6232537)

或者点击已刷取外侧时重新对刷取范围进行位置调整：

[<img alt="Click-to-Recenter" src="https://raw.githubusercontent.com/d3/d3-brush/master/img/recenter.jpg" width="420" height="219">](https://bl.ocks.org/mbostock/6498000)

## Installing

- npm： `npm install d3-brush`
- 下载[最新版](https://github.com/d3/d3-brush/releases/latest)
- 直接从[d3js.org](https://d3js.org)作为一个[标准的库](https://d3js.org/d3-brush.v1.min.js)引用
- 作为[D3 4.0](https://github.com/d3/d3)的一部分使用

安装后会对全局暴露一个`d3`全局变量：

```html
<script src="https://d3js.org/d3-color.v1.min.js"></script>
<script src="https://d3js.org/d3-dispatch.v1.min.js"></script>
<script src="https://d3js.org/d3-ease.v1.min.js"></script>
<script src="https://d3js.org/d3-interpolate.v1.min.js"></script>
<script src="https://d3js.org/d3-timer.v1.min.js"></script>
<script src="https://d3js.org/d3-selection.v1.min.js"></script>
<script src="https://d3js.org/d3-transition.v1.min.js"></script>
<script src="https://d3js.org/d3-drag.v1.min.js"></script>
<script src="https://d3js.org/d3-brush.v1.min.js"></script>
<script>

var brush = d3.brush();

</script>
```

[在浏览器中测试d3-brush](https://tonicdev.com/npm/d3-brush)

## API Reference

<a href="#brush" name="brush">#</a> d3.<b>brush</b>() [<源码>](https://github.com/d3/d3-brush/blob/master/src/brush.js#L131 "Source")

创建一个新的二维刷取交互器

<a href="#brushX" name="brushX">#</a> d3.<b>brushX</b>() [<源码>](https://github.com/d3/d3-brush/blob/master/src/brush.js#L123 "Source")

创建一个新的一维的*x*-方向的刷取器

<a href="#brushY" name="brushY">#</a> d3.<b>brushY</b>() [<源码>](https://github.com/d3/d3-brush/blob/master/src/brush.js#L127 "Source")

创建一个新的一维的*y*-方向的刷取器

<a href="#_brush" name="_brush">#</a> <i>brush</i>(<i>group</i>) [<源码>](https://github.com/d3/d3-brush/blob/master/src/brush.js#L142 "Source")

Applies the brush to the specified *group*, which must be a [selection](https://github.com/d3/d3-selection) of SVG [G elements](https://www.w3.org/TR/SVG/struct.html#Groups). This function is typically not invoked directly, and is instead invoked via [*selection*.call](https://github.com/d3/d3-selection#selection_call). For example, to render a brush:

```js
svg.append("g")
    .attr("class", "brush")
    .call(d3.brush().on("brush", brushed));
```

Internally, the brush uses [*selection*.on](https://github.com/d3/d3-selection#selection_on) to bind the necessary event listeners for dragging. The listeners use the name `.brush`, so you can subsequently unbind the brush event listeners as follows:

```js
group.on(".brush", null);
```

The brush also creates the SVG elements necessary to display the brush selection and to receive input events for interaction. You can add, remove or modify these elements as desired to change the brush appearance; you can also apply stylesheets to modify the brush appearance. The structure of a two-dimensional brush is as follows:

```html
<g class="brush" fill="none" pointer-events="all" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
  <rect class="overlay" pointer-events="all" cursor="crosshair" x="0" y="0" width="960" height="500"></rect>
  <rect class="selection" cursor="move" fill="#777" fill-opacity="0.3" stroke="#fff" shape-rendering="crispEdges" x="112" y="194" width="182" height="83"></rect>
  <rect class="handle handle--n" cursor="ns-resize" x="107" y="189" width="192" height="10"></rect>
  <rect class="handle handle--e" cursor="ew-resize" x="289" y="189" width="10" height="93"></rect>
  <rect class="handle handle--s" cursor="ns-resize" x="107" y="272" width="192" height="10"></rect>
  <rect class="handle handle--w" cursor="ew-resize" x="107" y="189" width="10" height="93"></rect>
  <rect class="handle handle--nw" cursor="nwse-resize" x="107" y="189" width="10" height="10"></rect>
  <rect class="handle handle--ne" cursor="nesw-resize" x="289" y="189" width="10" height="10"></rect>
  <rect class="handle handle--se" cursor="nwse-resize" x="289" y="272" width="10" height="10"></rect>
  <rect class="handle handle--sw" cursor="nesw-resize" x="107" y="272" width="10" height="10"></rect>
</g>
```

The overlay rect covers the brushable area defined by [*brush*.extent](#brush_extent). The selection rect covers the area defined by the current [brush selection](#brushSelection). The handle rects cover the edges and corners of the brush selection, allowing the corresponding value in the brush selection to be modified interactively. To modify the brush selection programmatically, use [*brush*.move](#brush_move).

<a href="#brush_move" name="brush_move">#</a> <i>brush</i>.<b>move</b>(<i>group</i>, <i>selection</i>) [<源码>](https://github.com/d3/d3-brush/blob/master/src/brush.js#L189 "Source")

Sets the active *selection* of the brush on the specified *group*, which must be a [selection](https://github.com/d3/d3-selection) or a [transition](https://github.com/d3/d3-transition) of SVG [G elements](https://www.w3.org/TR/SVG/struct.html#Groups). The *selection* must be defined as an array of numbers, or null to clear the brush selection. For a [two-dimensional brush](#brush), it must be defined as [[*x0*, *y0*], [*x1*, *y1*]], where *x0* is the minimum *x*-value, *y0* is the minimum *y*-value, *x1* is the maximum *x*-value, and *y1* is the maximum *y*-value. For an [*x*-brush](#brushX), it must be defined as [*x0*, *x1*]; for a [*y*-brush](#brushY), it must be defined as [*y0*, *y1*]. The selection may also be specified as a function which returns such an array; if a function, it is invoked for each selected element, being passed the current datum `d` and index `i`, with the `this` context as the current DOM element. The returned array defines the brush selection for that element.

<a href="#brush_extent" name="brush_extent">#</a> <i>brush</i>.<b>extent</b>([<i>extent</i>]) [<源码>](https://github.com/d3/d3-brush/blob/master/src/brush.js#L521 "Source")

If *extent* is specified, sets the brushable extent to the specified array of points [[*x0*, *y0*], [*x1*, *y1*]], where [*x0*, *y0*] is the top-left corner and [*x1*, *y1*] is the bottom-right corner, and returns this brush. The *extent* may also be specified as a function which returns such an array; if a function, it is invoked for each selected element, being passed the current datum `d` and index `i`, with the `this` context as the current DOM element. If *extent* is not specified, returns the current extent accessor, which defaults to:

```js
function extent() {
  var svg = this.ownerSVGElement || this;
  return [[0, 0], [svg.width.baseVal.value, svg.height.baseVal.value]];
}
```

This default implementation requires that the owner SVG element have defined [width](https://www.w3.org/TR/SVG/struct.html#SVGElementWidthAttribute) and [height](https://www.w3.org/TR/SVG/struct.html#SVGElementHeightAttribute) attributes rather than (for example) relying on CSS properties or the viewBox attribute; SVG provides no programmatic method for retrieving the [initial viewport size](https://www.w3.org/TR/SVG/coords.html#ViewportSpace). Alternatively, consider using [*element*.getBoundingClientRect](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect). (In Firefox, [*element*.clientWidth](https://developer.mozilla.org/en-US/docs/Web/API/Element/clientWidth) and [*element*.clientHeight](https://developer.mozilla.org/en-US/docs/Web/API/Element/clientHeight) is zero for SVG elements!)

The brush extent determines the size of the invisible overlay and also constrains the brush selection; the brush selection cannot go outside the brush extent.

<a href="#brush_filter" name="brush_filter">#</a> <i>brush</i>.<b>filter</b>([<i>filter</i>]) [<源码>](https://github.com/d3/d3-brush/blob/master/src/brush.js#L525 "Source")

If *filter* is specified, sets the filter to the specified function and returns the brush. If *filter* is not specified, returns the current filter, which defaults to:

```js
function filter() {
  return !event.button;
}
```

If the filter returns falsey, the initiating event is ignored and no brush gesture is started. Thus, the filter determines which input events are ignored. The default filter ignores mousedown events on secondary buttons, since those buttons are typically intended for other purposes, such as the context menu.

<a href="#brush_handleSize" name="brush_handleSize">#</a> <i>brush</i>.<b>handleSize</b>([<i>size</i>]) [<源码>](https://github.com/d3/d3-brush/blob/master/src/brush.js#L529 "Source")

If *size* is specified, sets the size of the brush handles to the specified number and returns the brush. If *size* is not specified, returns the current handle size, which defaults to six. This method must be called before [applying the brush](#_brush) to a selection; changing the handle size does not affect brushes that were previously rendered.

<a href="#brush_on" name="brush_on">#</a> <i>brush</i>.<b>on</b>(<i>typenames</i>[, <i>listener</i>]) [<源码>](https://github.com/d3/d3-brush/blob/master/src/brush.js#L533 "Source")

If *listener* is specified, sets the event *listener* for the specified *typenames* and returns the brush. If an event listener was already registered for the same type and name, the existing listener is removed before the new listener is added. If *listener* is null, removes the current event listeners for the specified *typenames*, if any. If *listener* is not specified, returns the first currently-assigned listener matching the specified *typenames*, if any. When a specified event is dispatched, each *listener* will be invoked with the same context and arguments as [*selection*.on](https://github.com/d3/d3-selection#selection_on) listeners: the current datum `d` and index `i`, with the `this` context as the current DOM element.

The *typenames* is a string containing one or more *typename* separated by whitespace. Each *typename* is a *type*, optionally followed by a period (`.`) and a *name*, such as `brush.foo` and `brush.bar`; the name allows multiple listeners to be registered for the same *type*. The *type* must be one of the following:

* `start` - at the start of a brush gesture, such as on mousedown.
* `brush` - when the brush moves, such as on mousemove.
* `end` - at the end of a brush gesture, such as on mouseup.

See [*dispatch*.on](https://github.com/d3/d3-dispatch#dispatch_on) and [Brush Events](#brush-events) for more.

<a href="#brushSelection" name="brushSelection">#</a> d3.<b>brushSelection</b>(<i>node</i>) [<源码>](https://github.com/d3/d3-brush/blob/master/src/brush.js#L118 "Source")

Returns the current brush selection for the specified *node*. Internally, an element’s brush state is stored as *element*.\_\_brush; however, you should use this method rather than accessing it directly. If the given *node* has no selection, returns null. Otherwise, the *selection* is defined as an array of numbers. For a [two-dimensional brush](#brush), it is [[*x0*, *y0*], [*x1*, *y1*]], where *x0* is the minimum *x*-value, *y0* is the minimum *y*-value, *x1* is the maximum *x*-value, and *y1* is the maximum *y*-value. For an [*x*-brush](#brushX), it is [*x0*, *x1*]; for a [*y*-brush](#brushY), it is [*y0*, *y1*].

### Brush Events

When a [brush event listener](#brush_on) is invoked, [d3.event](https://github.com/d3/d3-selection#event) is set to the current brush event. The *event* object exposes several fields:

* `target` - the associated [brush behavior](#brush).
* `type` - the string “start”, “brush” or “end”; see [*brush*.on](#brush_on).
* `selection` - the current [brush selection](#brushSelection).
* `sourceEvent` - the underlying input event, such as mousemove or touchmove.
