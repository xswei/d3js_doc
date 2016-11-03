# d3-zoom

平移和缩放是可视化中很重要的交互。在D3中缩放是通过d3-zoom实现的，既方便又灵活。它封装了输入事件并对浏览器兼容性做了处理。缩放操作与DOM无关，因此可以应用在SVG, HTML 或者 Canvas 中.

[<img alt="Canvas Zooming" src="https://raw.githubusercontent.com/d3/d3-zoom/master/img/dots.png" width="420" height="219">](http://bl.ocks.org/mbostock/d1f7b58631e71fbf9c568345ee04a60e)[<img alt="SVG Zooming" src="https://raw.githubusercontent.com/d3/d3-zoom/master/img/dots.png" width="420" height="219">](http://bl.ocks.org/mbostock/4e3925cdc804db257a86fdef3a032a45)

缩放操作也可以应用在[d3-scale](https://github.com/d3/d3-scale) 和 [d3-axis](https://github.com/d3/d3-axis)，参考[*transform*.rescaleX](#transform_rescaleX) 和 [*transform*.rescaleY](#transform_rescaleY)，也可以使用[*zoom*.scaleExtent](#zoom_scaleExtent)和[*zoom*.translateExtent](#zoom_translateExtent)来限制缩放大小和平移区间.

[<img alt="Axis Zooming" src="https://raw.githubusercontent.com/d3/d3-zoom/master/img/axis.png" width="420" height="219">](http://bl.ocks.org/mbostock/db6b4335bf1662b413e7968910104f0f)

zoom操作可以和其他的操作结合起来，比如[d3-drag](https://github.com/d3/d3-drag).

[<img alt="Drag & Zoom II" src="https://raw.githubusercontent.com/d3/d3-zoom/master/img/dots.png" width="420" height="219">](http://bl.ocks.org/mbostock/3127661b6f13f9316be745e77fdfb084)

zoom可以使用[*zoom*.transform](#zoom_transform)通过编程操作。平滑变换的实现基于[“Smooth and efficient zooming and panning”](http://www.win.tue.nl/~vanwijk/zoompan.pdf).

[<img alt="Zoom Transitions" src="https://raw.githubusercontent.com/d3/d3-zoom/master/img/transition.png" width="420" height="219">](http://bl.ocks.org/mbostock/b783fbb2e673561d214e09c7fb5cedee)

参考[d3-tile](https://github.com/d3/d3-tile)获取更多关于平移缩放的例子

## Installing

NPM等安装方法略

```html
<script src="https://d3js.org/d3-color.v1.min.js"></script>
<script src="https://d3js.org/d3-dispatch.v1.min.js"></script>
<script src="https://d3js.org/d3-ease.v1.min.js"></script>
<script src="https://d3js.org/d3-interpolate.v1.min.js"></script>
<script src="https://d3js.org/d3-selection.v1.min.js"></script>
<script src="https://d3js.org/d3-timer.v1.min.js"></script>
<script src="https://d3js.org/d3-transition.v1.min.js"></script>
<script src="https://d3js.org/d3-drag.v1.min.js"></script>
<script src="https://d3js.org/d3-zoom.v1.min.js"></script>
<script>

var zoom = d3.zoom();

</script>
```

[Try d3-zoom in your browser.](https://tonicdev.com/npm/d3-zoom)

## API Reference

下面这个表是zoom时间和原生事件之间的对应关系:

| Event        | Listening Element | Zoom Event  | Default Prevented? |
| ------------ | ----------------- | ----------- | ------------------ |
| mousedown⁵   | selection         | start       | no¹                |
| mousemove²   | window¹           | zoom        | yes                |
| mouseup²     | window¹           | end         | yes                |
| dragstart²   | window            | -           | yes                |
| selectstart² | window            | -           | yes                |
| click³       | window            | -           | yes                |
| dblclick     | selection         | *multiple*⁶ | yes                |
| wheel⁸       | selection         | zoom⁷       | yes                |
| touchstart   | selection         | *multiple*⁶ | no⁴                |
| touchmove    | selection         | zoom        | yes                |
| touchend     | selection         | end         | no⁴                |
| touchcancel  | selection         | end         | no⁴                |

所有的时间传播都是被[immediately stopped(立即停止)](https://dom.spec.whatwg.org/#dom-event-stopimmediatepropagation).

¹ 有必要捕获iframe之外的事件; 参考 [d3-drag#9](https://github.com/d3/d3-drag/issues/9).
<br>² Only applies during an active, mouse-based gesture; see [d3-drag#9](https://github.com/d3/d3-drag/issues/9).
<br>³ Only applies immediately after a non-empty, mouse-based gesture.
<br>⁴ Necessary to allow [click emulation](https://developer.apple.com/library/ios/documentation/AppleApplications/Reference/SafariWebContent/HandlingEvents/HandlingEvents.html#//apple_ref/doc/uid/TP40006511-SW7) on touch input; see [d3-drag#9](https://github.com/d3/d3-drag/issues/9).
<br>⁵ Ignored if within 500ms of a touch gesture ending; assumes [click emulation](https://developer.apple.com/library/ios/documentation/AppleApplications/Reference/SafariWebContent/HandlingEvents/HandlingEvents.html#//apple_ref/doc/uid/TP40006511-SW7).
<br>⁶ Double-click and double-tap initiate a transition that emits start, zoom and end events.
<br>⁷ The first wheel event emits a start event; an end event is emitted when no wheel events are received for 150ms.
<br>⁸ Ignored if already at the corresponding limit of the [scale extent](#zoom_scaleExtent).

<a href="#zoom" name="zoom">#</a> d3.<b>zoom</b>() [<>](https://github.com/d3/d3-zoom/blob/master/src/zoom.js "Source")

创建一个zoom操作。返回一个[*zoom*](#_drag)对象方法，通常被传递给[*selection*.call](https://github.com/d3/d3-selection#selection_call)来调用。

<a href="#_zoom" name="_zoom">#</a> <i>zoom</i>(<i>selection</i>) [<>](https://github.com/d3/d3-zoom/blob/master/src/zoom.js#L51 "Source")

将zoom操作应用到指定的[*selection*](https://github.com/d3/d3-selection)，并绑定需要的事件监听器，为选择集中的每个元素初始化[zoom transform](#zoom-transforms)(如果没有定义的话)，通常不会直接这样使用，而是将其传递给[*selection*.call](https://github.com/d3/d3-selection#selection_call)，例如:


```js
selection.call(d3.zoom().on("zoom", zoomed));
```

在内部，zoom操作使用[*selection*.on](https://github.com/d3/d3-selection#selection_on)将事件绑定到指定的元素上。事件名使用`.zoom`，那么可以根据事件名取消zoom操作:


```js
selection.on(".zoom", null);
```


<a href="#zoom_transform" name="zoom_transform">#</a> <i>zoom</i>.<b>transform</b>(<i>selection</i>, <i>transform</i>) [<>](https://github.com/d3/d3-zoom/blob/master/src/zoom.js#L63 "Source")

如果*selection*是一个选择集，则将选择集中所有的元素变换设置为[current zoom transform](#zoomTransform)并立即触发start, zoom 和 end [events](#zoom-events)。

如果*selection*是一个过渡，则使用[d3.interpolateZoom](https://github.com/d3/d3-interpolate#interpolateZoom)过渡到指定的变换并触发start, 过渡中的每一次tick都触发zoom，在过渡完成或中断后触发end[events](#zoom-events)。

*transform*要定义为[zoom transform](#zoom-transforms)或一个返回zoom transform的方法，如果是一个方法，则会为选择集中每个元素调用，并传递 `d` 和索引 `i`,  `this`指向当前的DOM元素。

这个方法通常不直接使用，而是传递给[*selection*.call](https://github.com/d3/d3-selection#selection_call) 或[*transition*.call](https://github.com/d3/d3-transition#transition_call)，例如，立即将当前选择集中的元素归位:


```js
selection.call(zoom.transform, d3.zoomIdentity);
```

d3.zoomIdentity是一个固定的transform对象:

```js
d3.zoomIdentity = {
	k:1,
	x:0,
	y:0
}

```

或者将当前的过渡平滑过渡到初始位置:

```js
selection.transition().duration(750).call(zoom.transform, d3.zoomIdentity);
```

这个方法需要完整的指定新的变换，目标状态一定要是transform对象。并且没有定义[scale extent](#zoom_scaleExtent) 和[translate extent](#zoom_translateExtent)。

这个方法也提供了简单的接口，比如[*zoom*.translateBy](#zoom_translateBy), [*zoom*.scaleBy](#zoom_scaleBy) 和 [*zoom*.scaleTo](#zoom_scaleTo).

<a href="#zoom_translateBy" name="zoom_translateBy">#</a> <i>zoom</i>.<b>translateBy</b>(<i>selection</i>, <i>x</i>, <i>y</i>) [<>](https://github.com/d3/d3-zoom/blob/master/src/zoom.js#L97 "Source")

如果*selection*是一个选择集，则将当前选择集中的每个元素的[current zoom transform(当前变换状态)](#zoomTransform)中的 [translates](#transform_translate)设置为*+x* 和 *+y*，注意是在当前的基础上再次进行平移的。并触发start,zoom和end事件。

如果*selection*是一个过渡，则在当前状态和目标状态之间进行过渡。并触发start,zoom(每一次tick都触发)以及end事件。

这个方法是个[*zoom*.transform](#zoom_transform)的简单形式，当然只是针对平移，不能进行缩放。*x*和*y*必须为数值类型或返回数值类型的函数，在调用时会传递当前元素绑定的数据*d*,索引*i*。*this*指向当前元素。


<a href="#zoom_scaleBy" name="zoom_scaleBy">#</a> <i>zoom</i>.<b>scaleBy</b>(<i>selection</i>, <i>k</i>) [<>](https://github.com/d3/d3-zoom/blob/master/src/zoom.js#L78 "Source")

*zoom.scaleBy*操作类似*zoom.translateBy*. 但是要注意也是在当前基础上进行的，会累积。

<a href="#zoom_scaleTo" name="zoom_scaleTo">#</a> <i>zoom</i>.<b>scaleTo</b>(<i>selection</i>, <i>k</i>) [<>](https://github.com/d3/d3-zoom/blob/master/src/zoom.js#L86 "Source")

与*zoom.scaleBy*不同的是这个方法不会考虑当前的状态，指定的值直接就是最终的缩放大小。

<a href="#zoom_filter" name="zoom_filter">#</a> <i>zoom</i>.<b>filter</b>([<i>filter</i>]) [<>](https://github.com/d3/d3-zoom/blob/master/src/zoom.js#L350 "Source")

如果指定了*filter*, 则设置过滤器。如果没有指定*filter*则返回当前的过滤器，默认为:


```js
function filter() {
  return !event.button;
}
```

如果过滤器返回假，则会忽略当前事件，也不会触发zoom操作，过滤器定义了哪些事件被忽略。

<a href="#zoom_extent" name="zoom_extent">#</a> <i>zoom</i>.<b>extent</b>([<i>extent</i>]) [<>](https://github.com/d3/d3-zoom/blob/master/src/zoom.js#L354 "Source")

*extent*设置视口的范围。*extent*以 [[*x0*, *y0*], [*x1*, *y1*]]的形式定义。[*x0*, *y0*]表示视口左上角的坐标，[*x1*, *y1*]表示视口右下角的坐标。

*extent*也可以定义为返回 [[*x0*, *y0*], [*x1*, *y1*]]的函数。如果是一个函数，则会为每个被选中的元素调用，并传递 `d` 和索引 `i`。

如果没有指定，则返回当前的*extent*，默认为[[0, 0], [*width*, *height*]]。*width* 表示 元素的[client width](https://developer.mozilla.org/en-US/docs/Web/API/Element/clientWidth)，*height* 表示 [client height](https://developer.mozilla.org/en-US/docs/Web/API/Element/clientHeight)。

对于SVG中的元素来说，使用的是元素最接近的SVG元素的 [width](https://www.w3.org/TR/SVG/struct.html#SVGElementWidthAttribute)和 [height](https://www.w3.org/TR/SVG/struct.html#SVGElementHeightAttribute)，在这种情况下SVG元素要定义好[width](https://www.w3.org/TR/SVG/struct.html#SVGElementWidthAttribute) 和[height](https://www.w3.org/TR/SVG/struct.html#SVGElementHeightAttribute)属性。


<a href="#zoom_scaleExtent" name="zoom_scaleExtent">#</a> <i>zoom</i>.<b>scaleExtent</b>([<i>extent</i>]) [<>](https://github.com/d3/d3-zoom/blob/master/src/zoom.js#L358 "Source")

设置或获取缩放范围。默认为[0, ∞]

阻止浏览器默认的滚轮事件:

```js
selection
    .call(zoom)
    .on("wheel", function() { d3.event.preventDefault(); });
```

<a href="#zoom_translateExtent" name="zoom_translateExtent">#</a> <i>zoom</i>.<b>translateExtent</b>([<i>extent</i>]) [<>](https://github.com/d3/d3-zoom/blob/master/src/zoom.js#L362 "Source")


设置或获取平移区间，以[[*x0*, *y0*], [*x1*, *y1*]]表示。默认为[[-∞, -∞], [+∞, +∞]]

<a href="#zoom_duration" name="zoom_duration">#</a> <i>zoom</i>.<b>duration</b>([<i>duration</i>]) [<>](https://github.com/d3/d3-zoom/blob/master/src/zoom.js#L366 "Source")

设置或获取双击放大时的时间间隔。默认为250ms。

如果想禁用双击放大，则使用:

```js
selection
    .call(zoom)
    .on("dblclick.zoom", null);
```

<a href="#zoom_interpolate" name="zoom_interpolate">#</a> <i>zoom</i>.<b>interpolate</b>([<i>interpolate</i>]) [<>](https://github.com/d3/d3-zoom/blob/master/src/zoom.js#L370 "Source")

设置或获取过缩放过渡插值方式。默认为:[d3.interpolateZoom](https://github.com/d3/d3-interpolate#interpolateZoom), 如果在两个视图之间应用插值过渡，则考虑使用[d3.interpolateZoom](https://github.com/d3/d3-interpolate#interpolateZoom). 

<a href="#zoom_on" name="zoom_on">#</a> <i>zoom</i>.<b>on</b>(<i>typenames</i>[, <i>listener</i>]) [<>](https://github.com/d3/d3-zoom/blob/master/src/zoom.js#L374 "Source")

三种情况：设置，取消，获取事件监听器。

如果指定了*listener*则为对应的 *typenames* 设置事件监听器。

如果*listenter*为null则取消对应的 *typenames* 监听器。

如果没有指定*listenter*则返回对应的*typenames*监听器。


*typenames* 是一个字符串，由type和name组成。也就是可以为同一种事件类型添加多个监听器。比如`zoom.foo` 和 `zoom.bar`; type必须为如下几种:

* `start` - 开始缩放 (比如鼠标按下).
* `zoom` - 开始缩放变换(比如拖拽).
* `end` - 缩放结束(比如鼠标抬起 ).

参考[*dispatch*.on](https://github.com/d3/d3-dispatch#dispatch_on)

### Zoom Events

When a [zoom event listener](#zoom_on) is invoked, [d3.event](https://github.com/d3/d3-selection#event) is set to the current zoom event. The *event* object exposes several fields:

* `target` - the associated [zoom behavior](#zoom).
* `type` - the string “start”, “zoom” or “end”; see [*zoom*.on](#zoom_on).
* `transform` - the current [zoom transform](#zoom-transforms).
* `sourceEvent` - the underlying input event, such as mousemove or touchmove.

### Zoom Transforms

The zoom behavior stores the zoom state on the element to which the zoom behavior was [applied](#_zoom), not on the zoom behavior itself. This is because the zoom behavior can be applied to many elements simultaneously, and each element can be zoomed independently. The zoom state can change either on user interaction or programmatically via [*zoom*.transform](#zoom_transform).

To retrieve the zoom state, use *event*.transform on the current [zoom event](#zoom-events) within a zoom event listener (see [*zoom*.on](#zoom_on)), or use [d3.zoomTransform](#zoomTransform) for a given node. The latter is particularly useful for modifying the zoom state programmatically, say to implement buttons for zooming in and out.

<a href="#zoomTransform" name="zoomTransform">#</a> d3.<b>zoomTransform</b>(<i>node</i>) [<>](https://github.com/d3/d3-zoom/blob/master/src/transform.js "Source")

Returns the current transform for the specified *node*. Note that *node* should typically be a DOM element, not a *selection*. (A selection may consist of multiple nodes, in different states, and this function only returns a single transform.) If you have a selection, call [*selection*.node](https://github.com/d3/d3-selection#selection_node) first:

```js
var transform = d3.zoomTransform(selection.node());
```

In the context of an [event listener](https://github.com/d3/d3-selection#selection_on), the *node* is typically the element that received the input event (which should be equal to [*event*.transform](#zoom-events)), *this*:

```js
var transform = d3.zoomTransform(this);
```

Internally, an element’s transform is stored as *element*.\_\_zoom; however, you should use this method rather than accessing it directly. If the given *node* has no defined transform, returns the [identity transformation](#zoomIdentity). The returned transform represents a two-dimensional [transformation matrix](https://en.wikipedia.org/wiki/Transformation_matrix#Affine_transformations) of the form:

*k* 0 *t<sub>x</sub>*
<br>0 *k* *t<sub>y</sub>*
<br>0 0 1

(This matrix is capable of representing only scale and translation; a future release may also allow rotation, though this would probably not be a backwards-compatible change.) The position ⟨*x*,*y*⟩ is transformed to ⟨*x* × *k* + *t<sub>x</sub>*,*y* × *k* + *t<sub>y</sub>*⟩. The transform object exposes the following properties:

* `x` - the translation amount *t<sub>x</sub>* along the *x*-axis.
* `y` - the translation amount *t<sub>y</sub>* along the *y*-axis.
* `k` - the scale factor *k*.

These properties should be considered read-only; instead of mutating a transform, use [*transform*.scale](#transform_scale) and [*transform*.translate](#transform_translate) to derive a new transform. Also see [*zoom*.scaleBy](#zoom_scaleBy), [*zoom*.scaleTo](#zoom_scaleTo) and [*zoom*.translateBy](#zoom_translateBy) for convenience methods on the zoom behavior. To create a transform with a given *k*, *t<sub>x</sub>*, and *t<sub>y</sub>*:

```js
var t = d3.zoomIdentity.translate(x, y).scale(k);
```

To apply the transformation to a [Canvas 2D context](https://www.w3.org/TR/2dcontext/), use [*context*.translate](https://www.w3.org/TR/2dcontext/#dom-context-2d-translate) followed by [*context*.scale](https://www.w3.org/TR/2dcontext/#dom-context-2d-scale):

```js
context.translate(transform.x, transform.y);
context.scale(transform.k, transform.k);
```

Similarly, to apply the transformation to HTML elements via [CSS](https://www.w3.org/TR/css-transforms-1/):

```js
div.style("transform", "translate(" + transform.x + "px," + transform.y + "px) scale(" + transform.k + ")");
```

To apply the transformation to [SVG](https://www.w3.org/TR/SVG/coords.html#TransformAttribute):

```js
g.attr("transform", "translate(" + transform.x + "," + transform.y + ") scale(" + transform.k + ")");
```

Or more simply, taking advantage of [*transform*.toString](#transform_toString):

```js
g.attr("transform", transform);
```

Note that the order of transformations matters! The translate must be applied before the scale.

<a href="#transform_scale" name="transform_scale">#</a> <i>transform</i>.<b>scale</b>(<i>k</i>) [<>](https://github.com/d3/d3-zoom/blob/master/src/transform.js#L9 "Source")

Returns a transform whose scale *k₁* is equal to *k₀* × *k*, where *k₀* is this transform’s scale.

<a href="#transform_translate" name="transform_translate">#</a> <i>transform</i>.<b>translate</b>(<i>x</i>, <i>y</i>) [<>](https://github.com/d3/d3-zoom/blob/master/src/transform.js#L12 "Source")

Returns a transform whose translation *t<sub>x1</sub>* and *t<sub>y1</sub>* is equal to *t<sub>x0</sub>* + *x* and *t<sub>y0</sub>* + *y*, where *t<sub>x0</sub>* and *t<sub>y0</sub>* is this transform’s translation.

<a href="#transform_apply" name="transform_apply">#</a> <i>transform</i>.<b>apply</b>(<i>point</i>) [<>](https://github.com/d3/d3-zoom/blob/master/src/transform.js#L15 "Source")

Returns the transformation of the specified *point* which is a two-element array of numbers [*x*, *y*]. The returned point is equal to [*x* × *k* + *t<sub>x</sub>*, *y* × *k* + *t<sub>y</sub>*].

<a href="#transform_applyX" name="transform_applyX">#</a> <i>transform</i>.<b>applyX</b>(<i>x</i>) [<>](https://github.com/d3/d3-zoom/blob/master/src/transform.js#L18 "Source")

Returns the transformation of the specified *x*-coordinate, *x* × *k* + *t<sub>x</sub>*.

<a href="#transform_applyY" name="transform_applyY">#</a> <i>transform</i>.<b>applyY</b>(<i>y</i>) [<>](https://github.com/d3/d3-zoom/blob/master/src/transform.js#L21 "Source")

Returns the transformation of the specified *y*-coordinate, *y* × *k* + *t<sub>y</sub>*.

<a href="#transform_invert" name="transform_invert">#</a> <i>transform</i>.<b>invert</b>(<i>point</i>) [<>](https://github.com/d3/d3-zoom/blob/master/src/transform.js#L24 "Source")

Returns the inverse transformation of the specified *point* which is a two-element array of numbers [*x*, *y*]. The returned point is equal to [(*x* - *t<sub>x</sub>*) / *k*, (*y* - *t<sub>y</sub>*) / *k*].

<a href="#transform_invertX" name="transform_invertX">#</a> <i>transform</i>.<b>invertX</b>(<i>x</i>) [<>](https://github.com/d3/d3-zoom/blob/master/src/transform.js#L27 "Source")

Returns the inverse transformation of the specified *x*-coordinate, (*x* - *t<sub>x</sub>*) / *k*.

<a href="#transform_invertY" name="transform_invertY">#</a> <i>transform</i>.<b>invertY</b>(<i>y</i>) [<>](https://github.com/d3/d3-zoom/blob/master/src/transform.js#L30 "Source")

Returns the inverse transformation of the specified *y*-coordinate, (*y* - *t<sub>y</sub>*) / *k*.

<a href="#transform_rescaleX" name="transform_rescaleX">#</a> <i>transform</i>.<b>rescaleX</b>(<i>x</i>) [<>](https://github.com/d3/d3-zoom/blob/master/src/transform.js#L33 "Source")

Returns a [copy](https://github.com/d3/d3-scale#continuous_copy) of the [continuous scale](https://github.com/d3/d3-scale#continuous-scales) *x* whose [domain](https://github.com/d3/d3-scale#continuous_domain) is transformed. This is implemented by first applying the [inverse *x*-transform](#transform_invertX) on the scale’s [range](https://github.com/d3/d3-scale#continuous_range), and then applying the [inverse scale](https://github.com/d3/d3-scale#continuous_invert) to compute the corresponding domain:

```js
function rescaleX(x) {
  var range = x.range().map(transform.invertX, transform),
      domain = range.map(x.invert, x);
  return x.copy().domain(domain);
}
```

The scale *x* must use [d3.interpolateNumber](https://github.com/d3/d3-interpolate#interpolateNumber); do not use [*continuous*.rangeRound](https://github.com/d3/d3-scale#continuous_rangeRound) as this reduces the accuracy of [*continuous*.invert](https://github.com/d3/d3-scale#continuous_invert) and can lead to an inaccurate rescaled domain. This method does not modify the input scale *x*; *x* thus represents the untransformed scale, while the returned scale represents its transformed view.

<a href="#transform_rescaleY" name="transform_rescaleY">#</a> <i>transform</i>.<b>rescaleY</b>(<i>y</i>) [<>](https://github.com/d3/d3-zoom/blob/master/src/transform.js#L36 "Source")

Returns a [copy](https://github.com/d3/d3-scale#continuous_copy) of the [continuous scale](https://github.com/d3/d3-scale#continuous-scales) *y* whose [domain](https://github.com/d3/d3-scale#continuous_domain) is transformed. This is implemented by first applying the [inverse *y*-transform](#transform_invertY) on the scale’s [range](https://github.com/d3/d3-scale#continuous_range), and then applying the [inverse scale](https://github.com/d3/d3-scale#continuous_invert) to compute the corresponding domain:

```js
function rescaleY(y) {
  var range = y.range().map(transform.invertY, transform),
      domain = range.map(y.invert, y);
  return y.copy().domain(domain);
}
```

The scale *y* must use [d3.interpolateNumber](https://github.com/d3/d3-interpolate#interpolateNumber); do not use [*continuous*.rangeRound](https://github.com/d3/d3-scale#continuous_rangeRound) as this reduces the accuracy of [*continuous*.invert](https://github.com/d3/d3-scale#continuous_invert) and can lead to an inaccurate rescaled domain. This method does not modify the input scale *y*; *y* thus represents the untransformed scale, while the returned scale represents its transformed view.

<a href="#transform_toString" name="transform_toString">#</a> <i>transform</i>.<b>toString</b>() [<>](https://github.com/d3/d3-zoom/blob/master/src/transform.js#L39 "Source")

Returns a string representing the [SVG transform](https://www.w3.org/TR/SVG/coords.html#TransformAttribute) corresponding to this transform. Implemented as:

```js
function toString() {
  return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
}
```

<a href="#zoomIdentity" name="zoomIdentity">#</a> d3.<b>zoomIdentity</b> [<>](https://github.com/d3/d3-zoom/blob/master/src/transform.js#L44 "Source")

The identity transform, where *k* = 1, *t<sub>x</sub>* = *t<sub>y</sub>* = 0.
