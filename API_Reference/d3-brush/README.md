# d3-brush

刷取交互指在一维或二维空间内使用手势,比如点击然后拖拽鼠标拾取一块区域范围的操作.刷取操作经常用来选取一些离散的元素,比如散点图中的点或者桌面上的文件等等.它也可以被用来对感兴趣的区域进行放大操作,或者选择连续区域进行[交叉过滤数据](http://square.github.io/crossfilter/):

[<img alt="Mona Lisa Histogram" src="https://raw.githubusercontent.com/d3/d3-brush/master/img/mona-lisa.jpg" width="420" height="219">](http://bl.ocks.org/mbostock/0d20834e3d5a46138752f86b9b79727e)

d3-brush模块的实现基于注册于[SVG](https://www.w3.org/TR/SVG/)上的鼠标和触摸操作.

- 点击或者拖拽选择区域把柄可以调整对应的侧边位置,并改变已选中区域的大小形状.
- 点击并拖拽隐形的覆盖层可以移动整个已选中的范围,只改变已选中区域的位置,不改变大小和形状.按住META (⌘)键并点击可刷取范围内的点也会达到这种效果.
- 按住ALT (⌥)并移动鼠标时会已鼠标刚开始按下的点为中心调整已选中区域的大小
- 调整已选中区域大小的过程中按住SPACE时会将调整大小变为调整已选中区间位置
- 刷取过程中按住shift会固定刷取的方向

刷取操作也支持编程控制,例如通过监听[*end* events](#brush-events)事件,然后对选中区间通过[*brush*.move](#brush_move)进行微调：

[<img alt="Brush Snapping" src="https://raw.githubusercontent.com/d3/d3-brush/master/img/snapping.png" width="420" height="219">](http://bl.ocks.org/mbostock/6232537)

或者点击已刷取外侧时重新对刷取范围进行位置调整：

[<img alt="Click-to-Recenter" src="https://raw.githubusercontent.com/d3/d3-brush/master/img/recenter.jpg" width="420" height="219">](https://bl.ocks.org/mbostock/6498000)

## Installing

- npm： `npm install d3-brush`
- 下载[最新版](https://github.com/d3/d3-brush/releases/latest)
- 直接从[d3js.org](https://d3js.org)作为一个[标准的库](https://d3js.org/d3-brush.v1.min.js)引用
- 作为[D3 4.0](https://github.com/d3/d3)的一部分使用

安装后会对全局暴露一个`d3`全局变量：

```js
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

将刷取交互应用到指定的*group*(分组元素)上,*group*必须是一个SVG [G 元素的](https://www.w3.org/TR/SVG/struct.html#Groups)[选择集](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-selection)(也可以直接应用到svg上,但是不建议这样用).这个方法通常不直接调用,而是通过[*selection*.call](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-selection/README.md#selection_call)来使用,例如：

```js
svg.append("g")
    .attr("class", "brush")
    .call(d3.brush().on("brush", brushed));
```

在内部,brush使用[*selection*.on](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-selection/README.md#selection_on)方法来注册刷取所必需的事件监听器.事件监听器使用`.brush`作为事件类名称,所以当你需要取消选择集上的刷取事件监听器时,可以通过以下方式取消：

```js
group.on(".brush", null);
```

刷取操作会创建一些必要的SVG元素来显示刷取交互显示元素.你可以添加,移除或者修改这些元素的外观.你也可以将样式文件应用到这些元素上.二维刷取所生成的元素结构如下：

```js
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

- `rect.overlay`表示由[*brush*.extent](#brush_extent)定义的可刷取的整个区域.
- `rect.selection`表示当前[刷取选中](#brushSelection)的区域.
- `handle.rect`表示已经刷取区域的边边角角,用来定义事件以便对已刷取的区域进行微调.
- 以编程的方式对刷取范围进行调整请使用[*brush*.move](#brush_move).

<a href="#brush_move" name="brush_move">#</a> <i>brush</i>.<b>move</b>(<i>group</i>, <i>selection</i>) [<源码>](https://github.com/d3/d3-brush/blob/master/src/brush.js#L189 "Source")

通过编程的方式实现对刷取范围的调整,也就是将*group*的刷取范围设置为*selection*.*group*必须是一个SVG [G 元素的](https://www.w3.org/TR/SVG/struct.html#Groups)的[选择集](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-selection)或者[过渡](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-transition). selection必须是一个数值类型的数组,或者null(用以清空已选范围).

对于二维刷取来说,selection必须是一个类似于[[*x0*, *y0*], [*x1*, *y1*]]的二维数组,*x0*, *y0* 表示左上角坐标, *x1*, *y1* 表示右下角坐标.如果刷取操作是一个*x*-方向的一维的,则selection为[*x0*, *x1*]表示x方向的一维区间,同理如果是*y*-方向的, [*y0*, *y1*]也表示一个y方向的一维区间.

除此之外,selection也可以是一个范围数组的方法,这个方法会传递当前绑定的数据`d`和索引`i`,`this`表示当前的DOM元素.

<a href="#brush_extent" name="brush_extent">#</a> <i>brush</i>.<b>extent</b>([<i>extent</i>]) [<源码>](https://github.com/d3/d3-brush/blob/master/src/brush.js#L521 "Source")

设置或获取刷取操作的可刷取范围,*extent*参数类似于[[*x0*, *y0*], [*x1*, *y1*]],[*x0*, *y0*] 为左上角坐标,[*x1*, *y1*] 为右下角坐标.*extent*也可以是一个返回数组的方法,这个方法会传递当前绑定的数据`d`和索引`i`,`this`表示当前的DOM元素.如果没有指定则范湖当前刷取操作的可刷取范围,默认为当前元素所在的SVG的大小：

```js
function extent() {
  var svg = this.ownerSVGElement || this;
  return [[0, 0], [svg.width.baseVal.value, svg.height.baseVal.value]];
}
```

默认的*extent*要求SVG有自己的[width](https://www.w3.org/TR/SVG/struct.html#SVGElementWidthAttribute) 和 [height](https://www.w3.org/TR/SVG/struct.html#SVGElementHeightAttribute) 属性,而不是使用CSS或者viewBox 属性; SVG没有现成的接口获取[初始视口大小](https://www.w3.org/TR/SVG/coords.html#ViewportSpace),但是可以通过[*element*.getBoundingClientRect](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)来计算获取(在Firefox中,[*element*.clientWidth](https://developer.mozilla.org/en-US/docs/Web/API/Element/clientWidth) 和 [*element*.clientHeight](https://developer.mozilla.org/en-US/docs/Web/API/Element/clientHeight)计算SVG元素的结果是 0 )

brush的*extemt*(边界)决定了`rect.overlay`的大小,同时也确定了可刷取范围,超出这个区域的不能进行刷取操作.

<a href="#brush_filter" name="brush_filter">#</a> <i>brush</i>.<b>filter</b>([<i>filter</i>]) [<源码>](https://github.com/d3/d3-brush/blob/master/src/brush.js#L525 "Source")

如果设置了*filter*则将过滤器设置为指定的函数并返回刷取操作,如果没有指定,则返回当前的过滤器,默认为：

```js
function filter() {
  return !event.button;
}
```

如果过滤器返回假值,则忽略启动刷取的事件并且不进行刷取操作.因此过滤器用来决定哪些输入事件被忽略.默认情况下过滤器会忽略辅助按钮上的mousedown事件,因为这些按钮通常有其他用途.

<a href="#brush_handleSize" name="brush_handleSize">#</a> <i>brush</i>.<b>handleSize</b>([<i>size</i>]) [<源码>](https://github.com/d3/d3-brush/blob/master/src/brush.js#L529 "Source")

设置或获取调整刷取范围的把柄的大小.也就是`rect.handle`的大小,这个大小决定了鼠标距离`rect.selection`多远时就能触发调整操作.默认为`6px`.这个方法必须在 [应用brush](#_brush)到selection之前执行.这个方法不会对已经渲染的刷取操作生效.

<a href="#brush_on" name="brush_on">#</a> <i>brush</i>.<b>on</b>(<i>typenames</i>[, <i>listener</i>]) [<源码>](https://github.com/d3/d3-brush/blob/master/src/brush.js#L533 "Source")

如果指定了*listener*句柄则将指定的句柄应用到对应的*typenames*事件类型上.如果*typenames*已经有句柄存在,则会被替换掉.如果*listener*为`null`则表示取消对应的*typenames*事件句柄.如果没有指定*listener*则返回对应的当前*typenames*上已经注册的句柄.

当触发一个事件时,对应的事件句柄将会被调用,其方式和参数与[*selection*.on](https://github.com/d3/d3-selection#selection_on)一样：当前绑定的数据`d`,索引`i`,`this`指向当前的DOM元素.

*typenames*是一个可以由空格分开的一个或多个*typename*.每个*typename*都可以由一个*type*可一个可选的*name*组成(由`.`连接).比如 `brush.foo` and `brush.bar`;这样就允许一种事件类型绑定多个事件句柄.*type*必须为以下几种：

* `start` - 刷取事件开始,比如`mousedown`事件
* `brush` - 刷取移动时,比如`mousemove`事件
* `end` - 刷取结束时,比如`mouseup`事件

参考 [*dispatch*.on](https://github.com/d3/d3-dispatch#dispatch_on) and [Brush Events](#brush-events) 获取更多信息.

<a href="#brushSelection" name="brushSelection">#</a> d3.<b>brushSelection</b>(<i>node</i>) [<源码>](https://github.com/d3/d3-brush/blob/master/src/brush.js#L118 "Source")

返回指定*node*的刷取区间.在内部元素的刷取状态存储在*element*.\_\_brush属性上；但是不能直接使用这个属性.如果给定的*node*没有应用刷取操作,则返回`null`.*selection*被定义为数组.对于二维刷取操作,由[[*x0*, *y0*], [*x1*, *y1*]]表示.对于一维的*x* 或 *y*方向刷取,则由[*x0*, *x1*] 和 [*y0*, *y1*]表示.
sss
### Brush Events

当[brush event listener](#brush_on)被调用时, [d3.event](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-selection/README.md#event) 被设置为当前的刷取事件对象.当前的*event*对象有以下几个属性:

* `target` - 触发 [brush 行为](#brush)的元素.
* `type` - 字符串 “start”, “brush” 或 “end”; 参考 [*brush*.on](#brush_on).
* `selection` - 当前的[刷取选择集](#brushSelection).
* `sourceEvent` - 原始事件,比如mousemove 或 touchmove.
