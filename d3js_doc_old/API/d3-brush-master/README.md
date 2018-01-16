# d3-brush
Brushing是一个通过点击或触摸来选择一个一维或二维区域的交互操作，比如可以通过点击鼠标并移动. brush经常被用来选择离散的元素比如散点图中的点或桌面上的文件等。它也可以被用来放大选中的区域，或选择[交叉过滤数据](http://square.github.io/crossfilter/) 或实时直方图:

[<img alt="Mona Lisa Histogram" src="https://raw.githubusercontent.com/d3/d3-brush/master/img/mona-lisa.jpg" width="420" height="219">](http://bl.ocks.org/mbostock/0d20834e3d5a46138752f86b9b79727e)

d3-brush模块的实现基于鼠标和触控事件以及[SVG](https://www.w3.org/TR/SVG/). 点击并拖动来对选中的区域进行变换，点击并拖拽brush边缘来改变选中的范围大小. 点击并拖拽选中区域外侧时开始一个新的brush区域，点击并在按下META键或 ALT键拖动时会以点击区域为中心进行区域选取，按下SPACE时或锁定当前区域大小，此时仅允许移动变换.

Brush也可以通过编程方式控制. 比如添加[*end* 事件](#brush-events)监听器, 然后使用[*brush*.move](#brush_move)来设置brush范围:

[<img alt="Brush Snapping" src="https://raw.githubusercontent.com/d3/d3-brush/master/img/snapping.png" width="420" height="219">](http://bl.ocks.org/mbostock/6232537)

## 安装引用

如果你使用NPM, `npm install d3-brush`. 也可以从 [d3js.org](https://d3js.org)直接下载 [最新版](https://github.com/d3/d3-brush/releases/latest).  可以作为[单独的模块](https://d3js.org/d3-brush.v1.min.js) 或 [D3 4.0](https://github.com/d3/d3)一部分使用. 也支持AMD, CommonJS, 和 vanilla环境. 在使用时，会创建`d3`全局变量:

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

[在你的浏览器中测试brush.](https://tonicdev.com/npm/d3-brush)

## API 参考

<a href="#brush" name="brush">#</a> d3.<b>brush</b>()

创建一个二维的brush.

<a href="#brushX" name="brushX">#</a> d3.<b>brushX</b>()

创建一个一维的 *x*-方向的brush.

<a href="#brushY" name="brushY">#</a> d3.<b>brushY</b>()

创建一个一维的 *y*-方向的brush.

<a href="#_brush" name="_brush">#</a> <i>brush</i>(<i>group</i>)

为指定的 *group* 应用brush, 一定是一个 [选择集](https://github.com/d3/d3-selection)，选择集为SVG的[G 元素](https://www.w3.org/TR/SVG/struct.html#Groups). 这个方法可以间接调用, 也可以通过使用 [*selection*.call](https://github.com/d3/d3-selection#selection_call)来调用. 例如:

```js
svg.append("g")
    .attr("class", "brush")
    .call(d3.brush().on("brush", brushed));
```
在内部，brush会使用 [*selection*.on](https://github.com/d3/d3-selection#selection_on)来绑定需要的拖拽事件监听器，事件监听器使用 `.brush`来表示这个事件监听器是用来brush的, 你可以使用如下方法来取消brush的事件监听器:

```js
group.on(".brush", null);
```
brush会创建SVG元素来显示选中的区域，你可以添加、删除或按需改变这些元素的样式，也可以通过样式表来修改外观. 二维的brush元素结构如下：

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
使用overlay矩形来表示brush的范围 [*brush*.extent](#brush_extent). selection矩形部分覆盖了由 [brush selection](#brushSelection)定义的区域. handle矩形表示四个边框和四个角落(不可见),当鼠标接近区域边缘时候可以拖动，实际上是鼠标移到了这些矩形上. 使用 [*brush*.move](#brush_move)来对brush进行编程设置.

<a href="#brush_move" name="brush_move">#</a> <i>brush</i>.<b>move</b>(<i>group</i>, <i>selection</i>)

为指定的group设置选中范围，这个group必须是一个[选择集](https://github.com/d3/d3-selection) 或一个SVG [G元素的](https://www.w3.org/TR/SVG/struct.html#Groups)[过渡](https://github.com/d3/d3-transition) . *selection* 为一个数值类型的数组. 对于. 对于 [二维 brush](#brush),必须由 [[*x0*, *y0*], [*x1*, *y1*]]定义,  *x0*和 *y0* 表示最小x和y值, *x1*和*y1* 表示最大x和y值. 对于 [*x*-brush](#brushX), 一定由 [*x0*, *x1*]定义; 对于 [*y*-brush](#brushY), 一定定义为 [*y0*, *y1*]. selection也可以是一个返回数组类型的方法. 如果是一个方法则会为每个选中的元素调用，并传递当前的数据 `d` 和索引`i`,  `this` 表示当前的DOM元素节点. 

<a href="#brush_extent" name="brush_extent">#</a> <i>brush</i>.<b>extent</b>([<i>extent</i>])

如果 *extent* 指定，则设置可刷取的范围，extent由 [[*x0*, *y0*], [*x1*, *y1*]]指定,  [*x0*, *y0*] 表示左上角坐标, [*x1*, *y1*] 表示右下角坐标, 并返回brush. *extent* 也可以使用返回类似数组的函数; 如果是方法，则会为每个选中的元素调用，并传递当前的数据 `d` 和索引`i`,  `this` 表示当前的DOM元素节点. 如果没有指定 *extent* 则返回当前的范围，默认如下:

```js
function extent() {
  var svg = this.ownerSVGElement || this;
  return [[0, 0], [svg.width.baseVal.value, svg.height.baseVal.value]];
}
```

brush的范围为应用brush的分组的最大覆盖范围，不能选中分组以外的元素。

<a href="#brush_filter" name="brush_filter">#</a> <i>brush</i>.<b>filter</b>([<i>filter</i>])

如果指定过滤器，则设置过滤器，以指定的函数返回的brush。如果未指定过滤器，返回当前的过滤器，其默认值为：:

```js
function filter() {
  return !event.button;
}
```
如果返回false，则会忽略起始事件并不会启动brush。这样可以用来区别哪些事件不作为brush操作。默认的过滤器会忽略第二层按下鼠标事件，因为这些事件可能被用作其他目的。

<a href="#brush_handleSize" name="brush_handleSize">#</a> <i>brush</i>.<b>handleSize</b>([<i>size</i>])

如果指定了*size* 则设置brush柄的大小并返回brush，如果没有指定则返回当前的handle尺寸，默认为6.这个是前面提到的handle rect的宽度或高度，当鼠标位于边缘3之内的时候会启动边缘拖拽功能. 这个方法一定要在 [应用brush](#_brush)到一个选择集之前设置。改变handlesize不会对之前的brush有影响。

<a href="#brush_on" name="brush_on">#</a> <i>brush</i>.<b>on</b>(<i>typenames</i>, [<i>listener</i>])

如果指定了 *listener* 则为brush设置指定类型的事件监听器并返回brush. 如果之前已经指定过事件监听器，则会覆盖之前的事件监听器. 如果*listener* 为 null, 则移除响应类型的时间监听器. 如果 *listener* 没有指定则返回第一个与事件类型匹配的事件监听器. 

*typenames* 是一个表示事件类型的字符串，多个类型可以使用空格隔开. 每个 *typename* 都是一个 *type*, 可以使用*.*指定类 `brush.foo` 和 `brush.bar`; 这样可以为相同的事件类型指定不同的监听器. 事件类型必须为如下中的一个:

* `start` - 开始brush操作，比如鼠标按下.
* `brush` -当拖动brush区域进行选取时，比如鼠标拖动.
* `end` - 在选取结束时，比如鼠标抬起.

参考[*dispatch*.on](https://github.com/d3/d3-dispatch#dispatch_on) 和 [Brush Events](#brush-events) 获取更多信息.

<a href="#brushSelection" name="brushSelection">#</a> d3.<b>brushSelection</b>(<i>node</i>)

返回指定节点的brush选择，在内部元素的brush或以 *element*.\_\_brush形式存储; 但是你应该使用d3.brushSelection而不是通过直接访问内部存储来调用，如果给定的node没有附加brush操作，则返回null. 此外 *selection* 被定义为一个数值数组. 对于 [二维 brush](#brush), 它是[[*x0*, *y0*], [*x1*, *y1*]]这种形式,  *x0* 和*y0* 表示最小x和y值, *x1*和 *y1* 表示最大x和y值, 对于[*x*-brush](#brushX), 表示为[*x0*, *x1*]; 对于 [*y*-brush](#brushY), 表示为[*y0*, *y1*].

### Brush 事件

当 [brush 事件监听器](#brush_on) 被调用时, [d3.event](https://github.com/d3/d3-selection#event) 被设置为当前的brush事件. brush *event* 对象包括以下几个属性:

* `target` -  [brush 事件](#brush)的目标元素.
* `type` - 事件类型 “start”, “brush” or “end”;参考 [*brush*.on](#brush_on).
* `selection` - 当前的 [brush 选择集](#brushSelection).
* `sourceEvent` - 底层输入事件, 比如 mousemove 或 touchmove.
