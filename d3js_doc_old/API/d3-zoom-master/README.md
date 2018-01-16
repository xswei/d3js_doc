# d3-zoom

平移和缩放是可视化中很重要的交互。 它易学易用: 点击-拖拽来平移，滚动滚轮来缩放，也可以使用触摸实现。 平移和缩放在基于web的地图中十分常见，但是也可以应用于其他的可视化设计比如时间序列和散点图等。

在D3中缩放是通过d3-zoom实现的，既方便又灵活，可以对[selections](https://github.com/d3/d3-selection)进行平移和缩放，它封装了浏览器支持的[input events](#api-reference )并对浏览器兼容性做了处理。缩放操作与DOM无关，因此可以应用在SVG, HTML 或者 Canvas 中.

[<img alt="Canvas Zooming" src="https://raw.githubusercontent.com/d3/d3-zoom/master/img/dots.png" width="420" height="219">](http://bl.ocks.org/mbostock/d1f7b58631e71fbf9c568345ee04a60e)[<img alt="SVG Zooming" src="https://raw.githubusercontent.com/d3/d3-zoom/master/img/dots.png" width="420" height="219">](http://bl.ocks.org/mbostock/4e3925cdc804db257a86fdef3a032a45)

缩放操作也可以应用在[d3-scale](https://github.com/d3/d3-scale) 和 [d3-axis](https://github.com/d3/d3-axis)，参考[*transform*.rescaleX](#transform_rescaleX) 和 [*transform*.rescaleY](#transform_rescaleY)，也可以使用[*zoom*.scaleExtent](#zoom_scaleExtent)和[*zoom*.translateExtent](#zoom_translateExtent)来限制缩放大小和平移区间.

[<img alt="Axis Zooming" src="https://raw.githubusercontent.com/d3/d3-zoom/master/img/axis.png" width="420" height="219">](http://bl.ocks.org/mbostock/db6b4335bf1662b413e7968910104f0f)

zoom操作可以和其他的操作结合起来，比如[d3-drag](https://github.com/d3/d3-drag) 和[d3-brush](https://github.com/d3/d3-brush)等。

[<img alt="Drag & Zoom II" src="https://raw.githubusercontent.com/d3/d3-zoom/master/img/dots.png" width="420" height="219">](http://bl.ocks.org/mbostock/3127661b6f13f9316be745e77fdfb084)

zoom可以使用[*zoom*.transform](#zoom_transform)方法进行编程操作。平滑变换的实现基于[“Smooth and efficient zooming and panning”](http://www.win.tue.nl/~vanwijk/zoompan.pdf).

[<img alt="Zoom Transitions" src="https://raw.githubusercontent.com/d3/d3-zoom/master/img/transition.png" width="420" height="219">](http://bl.ocks.org/mbostock/b783fbb2e673561d214e09c7fb5cedee)

参考[d3-tile](https://github.com/d3/d3-tile)获取更多关于平移缩放的例子。

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

| Event(事件)  | Listening Element(监听对象) | Zoom Event(缩放事件)  | Default Prevented?(阻止默认行为) |
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

所有的事件传播都是被[immediately stopped(立即停止)](https://dom.spec.whatwg.org/#dom-event-stopimmediatepropagation).

¹ 有必要捕获iframe之外的事件; 参考 [d3-drag#9](https://github.com/d3/d3-drag/issues/9).
<br>² 使用鼠标时仅有一个活动对象; 参考 [d3-drag#9](https://github.com/d3/d3-drag/issues/9).
<br>³ 只能在非空的基于鼠标的手势之后立即应用。
<br>⁴ 允许在使用触摸输入时候进行 [click emulation(点击仿真)](https://developer.apple.com/library/ios/documentation/AppleApplications/Reference/SafariWebContent/HandlingEvents/HandlingEvents.html#//apple_ref/doc/uid/TP40006511-SW7); 参考 [d3-drag#9](https://github.com/d3/d3-drag/issues/9).
<br>⁵ 忽略500ms以内的触摸操作，如果可以使用[click emulation](https://developer.apple.com/library/ios/documentation/AppleApplications/Reference/SafariWebContent/HandlingEvents/HandlingEvents.html#//apple_ref/doc/uid/TP40006511-SW7)的话.
<br>⁶ 双击触发缩放变换.
<br>⁷ 两个相邻的滚轮事件在150ms之内触发的话，只触发最后一次滚轮事件。
<br>⁸ 如果没有设置[scale extent](#zoom_scaleExtent)，则忽略缩放大小限制.

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

如果要禁止滚轮滚动缩放，可以在讲zoom事件应用于选择集之后移除zoom事件中的滚轮事件：


```js
selection
    .call(zoom)
    .on("wheel.zoom", null);
```

此外，也可以使用[*zoom*.filter](#zoom_filter)来控制哪些事件可以用来缩放。

应用缩放事件之后在可能也会同时设置[-webkit-tap-highlight-color](https://developer.apple.com/library/mac/documentation/AppleApplications/Reference/SafariWebContent/AdjustingtheTextSize/AdjustingtheTextSize.html#//apple_ref/doc/uid/TP40006510-SW5)样式为透明，禁止IOS上的高亮显示。如果想设置一个其他的高亮颜色，则可以移除这个样式然后重新设置。


<a href="#zoom_transform" name="zoom_transform">#</a> <i>zoom</i>.<b>transform</b>(<i>selection</i>, <i>transform</i>) [<>](https://github.com/d3/d3-zoom/blob/master/src/zoom.js#L63 "Source")

如果*selection*是一个选择集，则将选择集中所有的元素变换设置为[current zoom transform](#zoomTransform)并立即触发start, zoom 和 end [events](#zoom-events)。如果*selection*是一个过渡，则使用[d3.interpolateZoom](https://github.com/d3/d3-interpolate#interpolateZoom)过渡到指定的变换并触发start, 过渡过程中的每一次tick都触发zoom，在过渡完成或中断后触发end[events](#zoom-events)。*transform*可以为一个[zoom transform(缩放变换)](#zoom-transforms)，也可以是一个返回缩放变换的函数，如果是一个函数，则会为每个选择集中的元素调用一次，并传递当前绑定的数据`d`、索引`i`，`this`指向当前DOM元素上下文。

这个方法通常情况下不直接调用，而是通过 [*selection*.call](https://github.com/d3/d3-selection#selection_call) 或 [*transition*.call](https://github.com/d3/d3-transition#transition_call)调用。比如将缩放变换重新设置为[identity transform](#zoomIdentity)：

```js
selection.call(zoom.transform, d3.zoomIdentity);
```

使用过渡对当前元素进行变换：

```js
selection.transition().duration(750).call(zoom.transform, d3.zoomIdentity);
```

这个方法要求你指定新的完整的变化，并且不能定义[scale extent](#zoom_scaleExtent) 和 [translate extent](#zoom_translateExtent)。要从已有的缩放变换中导出一个新的变换，并执行缩放和兵役，可以参考[*zoom*.translateBy](#zoom_translateBy), [*zoom*.scaleBy](#zoom_scaleBy) 和 [*zoom*.scaleTo](#zoom_scaleTo)


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

当 [zoom event listener](#zoom_on) 被调用时, [d3.event](https://github.com/d3/d3-selection#event) 会被设置为当前的zoom事件. zoom *event* 对象由以下几部分组成:

* `target` - 当前的缩放[zoom behavior](#zoom).
* `type` - 事件类型:“start”, “zoom” 或者 “end”; 参考 [*zoom*.on](#zoom_on).
* `transform` - 当前的[zoom transform(缩放变换)](#zoom-transforms).
* `sourceEvent` - 原始事件, 比如 mousemove 或 touchmove.

### Zoom Transforms

zoom操作将zoom状态存储在应用了缩放操作的元素上，而不是zoom操作本身。这是因为zoom操作可能会同时被应用在很多元素上。这样的话每个元素就可以独立的缩放。元素的缩放可以通过交互也可以通过[*zoom*.transform](#zoom_transform)进行设置。


使用[zoom event](#zoom-events)的*event*.transform来获取当前的缩放状态。或者使用为指定的节点使用[d3.zoomTransform](#zoomTransform)。后者可以方便的使用编程的方式进行操作。


<a href="#zoomTransform" name="zoomTransform">#</a> d3.<b>zoomTransform</b>(<i>node</i>) [<>](https://github.com/d3/d3-zoom/blob/master/src/transform.js "Source")

返回指定节点当前的变换。*node* 必须为单个DOM节点而不是一个选择集。因为选择集中可能包含多个元素，每个元素都可能有不同的变换状态。如果是一个选择集，则必须先调用[*selection*.node](https://github.com/d3/d3-selection#selection_node):


```js
var transform = d3.zoomTransform(selection.node());
```

在 [event listener](https://github.com/d3/d3-selection#selection_on)上下文中，this指向的就是当前的DOM节点，则此时就可以直接使用this:

```js
var transform = d3.zoomTransform(this);
```

在内部，元素的变换状态以*element*.\_\_zoom的形式存储。但是最好使用提供的方法来进行操作，而不要直接去操作这个属性。如果给定的*node*没有定义变换属性(也就是没有应用zoom操作)，则返回[identity transformation](#zoomIdentity)。二维空间中的变换矩阵形式如下:


*k* 0 *t<sub>x</sub>*
<br>0 *k* *t<sub>y</sub>*
<br>0 0 1

点 ⟨*x*,*y*⟩ 变换后的坐标为 ⟨*x* × *k* + *t<sub>x</sub>*,*y* × *k* + *t<sub>y</sub>*⟩. 但是d3对此进行了封装，提供了以下三个参数:

* `x` - x方向的平移量
* `y` - y方向的平移量
* `k` - 缩放因子

这些属性应该设置为只读，不要直接进行操作，如果要改变这些，使用[*transform*.scale](#transform_scale) and [*transform*.translate](#transform_translate) 或者 [*zoom*.scaleBy](#zoom_scaleBy), [*zoom*.scaleTo](#zoom_scaleTo) 和 [*zoom*.translateBy](#zoom_translateBy)。 如果要创建一个缩放变换则使用如下方法:

```js
var t = d3.zoomIdentity.translate(x, y).scale(k);
```

将缩放变换应用到[Canvas 2D context](https://www.w3.org/TR/2dcontext/)中，则需要使用[*context*.translate](https://www.w3.org/TR/2dcontext/#dom-context-2d-translate) 和 [*context*.scale](https://www.w3.org/TR/2dcontext/#dom-context-2d-scale),注意缩放和平移的顺序:

```js
context.translate(transform.x, transform.y);
context.scale(transform.k, transform.k);
```

类似的，也可以将其应用到HTML元素的[CSS](https://www.w3.org/TR/css-transforms-1/)变换中:

```js
div.style("transform", "translate(" + transform.x + "px," + transform.y + "px) scale(" + transform.k + ")");
```

应用到SVG中:


```js
g.attr("transform", "translate(" + transform.x + "," + transform.y + ") scale(" + transform.k + ")");
```

更一般的，可以使用 [*transform*.toString](#transform_toString):

```js
g.attr("transform", transform);
```


注意变换顺序！！！

<a href="#transform_scale" name="transform_scale">#</a> <i>transform</i>.<b>scale</b>(<i>k</i>) [<>](https://github.com/d3/d3-zoom/blob/master/src/transform.js#L9 "Source")

返回一个缩放因子为*k₁*的变换， *k₁*等于*k₀* × *k*，*k₀*为当前的scale值。不改变当前的变换状态，只返回新的状态。

<a href="#transform_translate" name="transform_translate">#</a> <i>transform</i>.<b>translate</b>(<i>x</i>, <i>y</i>) [<>](https://github.com/d3/d3-zoom/blob/master/src/transform.js#L12 "Source")

类似*transform.scale(k)*,返回新的平移后的新状态，不改变当前状态。

<a href="#transform_apply" name="transform_apply">#</a> <i>transform</i>.<b>apply</b>(<i>point</i>) [<>](https://github.com/d3/d3-zoom/blob/master/src/transform.js#L15 "Source")

将变换应用到指定的点，返回对指定的点应用变换后的新坐标。

<a href="#transform_applyX" name="transform_applyX">#</a> <i>transform</i>.<b>applyX</b>(<i>x</i>) [<>](https://github.com/d3/d3-zoom/blob/master/src/transform.js#L18 "Source")

将变换应用到某个值，对这个值进行x方向的变换，然后返回新值。

<a href="#transform_applyY" name="transform_applyY">#</a> <i>transform</i>.<b>applyY</b>(<i>y</i>) [<>](https://github.com/d3/d3-zoom/blob/master/src/transform.js#L21 "Source")

将变换应用到某个值，对这个值进行x方向的变换，然后返回新值。

<a href="#transform_invert" name="transform_invert">#</a> <i>transform</i>.<b>invert</b>(<i>point</i>) [<>](https://github.com/d3/d3-zoom/blob/master/src/transform.js#L24 "Source")

对点进行逆变换

<a href="#transform_invertX" name="transform_invertX">#</a> <i>transform</i>.<b>invertX</b>(<i>x</i>) [<>](https://github.com/d3/d3-zoom/blob/master/src/transform.js#L27 "Source")

对值进行x方向逆变换

<a href="#transform_invertY" name="transform_invertY">#</a> <i>transform</i>.<b>invertY</b>(<i>y</i>) [<>](https://github.com/d3/d3-zoom/blob/master/src/transform.js#L30 "Source")

对值进行y方向逆变换

<a href="#transform_rescaleX" name="transform_rescaleX">#</a> <i>transform</i>.<b>rescaleX</b>(<i>x</i>) [<>](https://github.com/d3/d3-zoom/blob/master/src/transform.js#L33 "Source")

返回一个x方向的[continuous scale](https://github.com/d3/d3-scale#continuous-scales)的副本，副本与原来的比例尺之间做了变换映射，也就是在变换前后比例尺的输入输出都能正确对应。内部实现方式如下:

```js
function rescaleX(x) {
  var range = x.range().map(transform.invertX, transform),
      domain = range.map(x.invert, x);
  return x.copy().domain(domain);
}
```

要注意scale *x*必须为 [d3.interpolateNumber](https://github.com/d3/d3-interpolate#interpolateNumber)，不能是[*continuous*.rangeRound](https://github.com/d3/d3-scale#continuous_rangeRound)，要不然不能进行[*continuous*.invert](https://github.com/d3/d3-scale#continuous_invert)计算。也就不能正常缩放。

The scale *x* must use [d3.interpolateNumber](https://github.com/d3/d3-interpolate#interpolateNumber); do not use [*continuous*.rangeRound](https://github.com/d3/d3-scale#continuous_rangeRound) as this reduces the accuracy of [*continuous*.invert](https://github.com/d3/d3-scale#continuous_invert) and can lead to an inaccurate rescaled domain. This method does not modify the input scale *x*; *x* thus represents the untransformed scale, while the returned scale represents its transformed view.

<a href="#transform_rescaleY" name="transform_rescaleY">#</a> <i>transform</i>.<b>rescaleY</b>(<i>y</i>) [<>](https://github.com/d3/d3-zoom/blob/master/src/transform.js#L36 "Source")

返回一个y方向的[continuous scale](https://github.com/d3/d3-scale#continuous-scales)的副本，副本与原来的比例尺之间做了变换映射，也就是在变换前后比例尺的输入输出都能正确对应。内部实现方式如下:

```js
function rescaleY(y) {
  var range = y.range().map(transform.invertY, transform),
      domain = range.map(y.invert, y);
  return y.copy().domain(domain);
}
```

要注意scale *y*必须为 [d3.interpolateNumber](https://github.com/d3/d3-interpolate#interpolateNumber)，不能是[*continuous*.rangeRound](https://github.com/d3/d3-scale#continuous_rangeRound)，要不然不能进行[*continuous*.invert](https://github.com/d3/d3-scale#continuous_invert)计算。也就不能正常缩放。

<a href="#transform_toString" name="transform_toString">#</a> <i>transform</i>.<b>toString</b>() [<>](https://github.com/d3/d3-zoom/blob/master/src/transform.js#L39 "Source")

返回一个SVG可用的变换的字符串表示。在内部定义如下:


```js
function toString() {
  return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
}
```

<a href="#zoomIdentity" name="zoomIdentity">#</a> d3.<b>zoomIdentity</b> [<>](https://github.com/d3/d3-zoom/blob/master/src/transform.js#L44 "Source")

变换的初始值 *k* = 1, *t<sub>x</sub>* = *t<sub>y</sub>* = 0.
