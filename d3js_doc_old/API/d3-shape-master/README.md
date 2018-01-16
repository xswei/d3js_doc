# d3-shape

在可视化中经常会使用到一些图形元素，比如[symbols](#symbols), [arcs](#arcs), [lines](#lines) 和 [areas](#areas). 矩形元素可以很容易的使用SVG或Canvas绘制，而其他就比较复杂了，比如扇形和样条曲线等。这个模块提供了许多形状生成器以便直接使用。 

这些形状可以由数据驱动:每个生成器都提供了将输入数据映射到可视化元素的接口。比如你可以为一个时间序列定义一个线条生成器:

```js
var line = d3.line()
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.value); });
```

这个线条生成器可以计算出path元素的`d`属性:

```js
path.datum(data).attr("d", line);
```

或者也可以将其渲染到Canvas 2D上下文中:

```js
line.context(context)(data);
```

参考[Introducing d3-shape](https://medium.com/@mbostock/introducing-d3-shape-73f8367e6d12)获取更多信息.

## Installing

NPM等安装方法略

```html
<script src="https://d3js.org/d3-path.v1.min.js"></script>
<script src="https://d3js.org/d3-shape.v1.min.js"></script>
<script>

var line = d3.line();

</script>
```

[Try d3-shape in your browser.](https://tonicdev.com/npm/d3-shape)

## API Reference

* [Arcs(弧)](#arcs)
* [Pies(饼)](#pies)
* [Lines(线)](#lines)
* [Areas(区域面积)](#areas)
* [Curves(曲线)](#curves)
* [Custom Curves(定制曲线)](#custom-curves)
* [Links](#links)
* [Symbols(符号)](#symbols)
* [Custom Symbol Types(定制符号)](#custom-symbol-types)
* [Stacks(堆叠/栈)](#stacks)

### Arcs

[<img alt="Pie Chart" src="https://raw.githubusercontent.com/d3/d3-shape/master/img/pie.png" width="295" height="295">](http://bl.ocks.org/mbostock/8878e7fd82034f1d63cf)[<img alt="Donut Chart" src="https://raw.githubusercontent.com/d3/d3-shape/master/img/donut.png" width="295" height="295">](http://bl.ocks.org/mbostock/2394b23da1994fc202e1)

arc生成器可以生成圆形的或者环形的扇形，可以被用在pie或环形图中。如果[start](#arc_startAngle) 和 [end](#arc_endAngle)之间的插值大于[τ](https://en.wikipedia.org/wiki/Turn_\(geometry\)#Tau_proposal)，则arc生成器会产生一个完整的圆或环。如果小于[τ](https://en.wikipedia.org/wiki/Turn_\(geometry\)#Tau_proposal)则arc生成器可以设置[rounded corners(圆角)](#arc_cornerRadius) 和 [angular padding(间隙)](#arc_padAngle)。Arcs总是以<0,0>位中心，需要使用transform(参考: [SVG](http://www.w3.org/TR/SVG/coords.html#TransformAttribute), [Canvas](http://www.w3.org/TR/2dcontext/#transformations))来对其进行平移。


参考[pie generator](#pies), pie生成器可以根据一组数据计算出每个元素的起止角度，然后使用arc生成器根据计算后的数据绘制扇形或圆环。

<a name="arc" href="#arc">#</a> d3.<b>arc</b>() [<>](https://github.com/d3/d3-shape/blob/master/src/arc.js "Source")

构建一个新的默认的arc生成器

<a name="_arc" href="#_arc">#</a> <i>arc</i>(<i>arguments…</i>) [<>](https://github.com/d3/d3-shape/blob/master/src/arc.js#L89 "Source")

根据指定的*arguments*生成一个arc。*arguments*可以是任意的形式的，但是要包含必要的信息，比如使用一个包含半径信息(内外半径)和角度信息(起止角度)的对象绘制arc:

```js
var arc = d3.arc();

arc({
  innerRadius: 0,
  outerRadius: 100,
  startAngle: 0,
  endAngle: Math.PI / 2
}); // "M0,-100A100,100,0,0,1,100,0L0,0Z"
```

如果已经定义了半径信息和角度信息，则就不需要再次指定了，比如:

```js
var arc = d3.arc()
    .innerRadius(0)
    .outerRadius(100)
    .startAngle(0)
    .endAngle(Math.PI / 2);

arc(); // "M0,-100A100,100,0,0,1,100,0L0,0Z"
```

如果arc生成器包含了[context](#arc_context)上下文，则会调用一系列[path method](http://www.w3.org/TR/2dcontext/#canvaspathmethods)将arc渲染到上下文中。否则返回一个[path data](http://www.w3.org/TR/SVG/paths.html#PathData)字符串。


<a name="arc_centroid" href="#arc_centroid">#</a> <i>arc</i>.<b>centroid</b>(<i>arguments…</i>) [<>](https://github.com/d3/d3-shape/blob/master/src/arc.js#L224 "Source")

计算参数所表示的弧的中间点[*x*,*y*]. 计算方法为([startAngle](#arc_startAngle) + [endAngle](#arc_endAngle)) / 2 and ([innerRadius](#arc_innerRadius) + [outerRadius](#arc_outerRadius)) / 2. 例如:

[<img alt="Circular Sector Centroids" src="https://raw.githubusercontent.com/d3/d3-shape/master/img/centroid-circular-sector.png" width="250" height="250">](http://bl.ocks.org/mbostock/9b5a2fd1ce1a146f27e4)[<img alt="Annular Sector Centroids" src="https://raw.githubusercontent.com/d3/d3-shape/master/img/centroid-annular-sector.png" width="250" height="250">](http://bl.ocks.org/mbostock/c274877f647361f3df7d)

要注意这个不是几何中心，因为几何中心可能位于圆弧外侧。

<a name="arc_innerRadius" href="#arc_innerRadius">#</a> <i>arc</i>.<b>innerRadius</b>([<i>radius</i>]) [<>](https://github.com/d3/d3-shape/blob/master/src/arc.js#L230 "Source")

设置或获取内半径。如果没有指定*radius*则返回当前的内半径，默认为:

```js
function innerRadius(d) {
  return d.innerRadius;
}
```

如果*radius*为函数，则可以方便的构造出一个基于极坐标系统的堆叠图。经常结合 [sqrt scale](https://github.com/d3/d3-scale#sqrt) 一起使用. 如果内半径比外半径大，则内半径和外半径会被交换。负值视为0. 

<a name="arc_outerRadius" href="#arc_outerRadius">#</a> <i>arc</i>.<b>outerRadius</b>([<i>radius</i>]) [<>](https://github.com/d3/d3-shape/blob/master/src/arc.js#L234 "Source")

设置或获取外半径。如果没有指定*radius*则返回当前的外半径，默认为:

```js
function outerRadius(d) {
  return d.outerRadius;
}
```

如果*radius*为函数，则可以方便的构造出一个基于极坐标系统的堆叠图。经常结合 [sqrt scale](https://github.com/d3/d3-scale#sqrt) 一起使用. 如果内半径比外半径大，则内半径和外半径会被交换。负值视为0. 

<a name="arc_cornerRadius" href="#arc_cornerRadius">#</a> <i>arc</i>.<b>cornerRadius</b>([<i>radius</i>]) [<>](https://github.com/d3/d3-shape/blob/master/src/arc.js#L238 "Source")

设置或获取拐角半径，默认为:

```js
function cornerRadius() {
  return 0;
}
```

如果拐角半径比0大，则根据其值设置拐角大小。拐角的作用如下图:

[<img alt="Rounded Circular Sectors" src="https://raw.githubusercontent.com/d3/d3-shape/master/img/rounded-circular-sector.png" width="250" height="250">](http://bl.ocks.org/mbostock/e5e3680f3079cf5c3437)[<img alt="Rounded Annular Sectors" src="https://raw.githubusercontent.com/d3/d3-shape/master/img/rounded-annular-sector.png" width="250" height="250">](http://bl.ocks.org/mbostock/f41f50e06a6c04828b6e)


<a name="arc_startAngle" href="#arc_startAngle">#</a> <i>arc</i>.<b>startAngle</b>([<i>angle</i>]) [<>](https://github.com/d3/d3-shape/blob/master/src/arc.js#L246 "Source")

设置或获取弧形的起始角度并返回arc生成器。默认为:


```js
function startAngle(d) {
  return d.startAngle;
}
```

*angle*以弧度的形式定义0度对应12点钟方向，顺时针开始计算。如果|endAngle - startAngle| ≥ τ则会生成一个完整的圆或环。

<a name="arc_endAngle" href="#arc_endAngle">#</a> <i>arc</i>.<b>endAngle</b>([<i>angle</i>]) [<>](https://github.com/d3/d3-shape/blob/master/src/arc.js#L250 "Source")

设置或获取弧形的终止角度并返回arc生成器。默认为:

```js
function endAngle(d) {
  return d.endAngle;
}
```

*angle*以弧度的形式定义0度对应12点钟方向，顺时针开始计算。如果|endAngle - startAngle| ≥ τ则会生成一个完整的圆或环。


<a name="arc_padAngle" href="#arc_padAngle">#</a> <i>arc</i>.<b>padAngle</b>([<i>angle</i>]) [<>](https://github.com/d3/d3-shape/blob/master/src/arc.js#L254 "Source")

设置或获取间隙角度，间隙可以使得相邻的扇形之间隔开一段距离。如果没有设置则默认为:


```js
function padAngle() {
  return d && d.padAngle;
}
```

padAngle和padRadius是结合使用的，理解为在半径为padRadius处，相邻的两个扇形之间的距离为padAngle。内部使用padAngle*padRadius计算的。这个距离是从扇形的起始两处减去的。

[<img alt="Padded Circular Sectors" src="https://raw.githubusercontent.com/d3/d3-shape/master/img/padded-circular-sector.png" width="250" height="250">](http://bl.ocks.org/mbostock/f37b07b92633781a46f7)[<img alt="Padded Annular Sectors" src="https://raw.githubusercontent.com/d3/d3-shape/master/img/padded-annular-sector.png" width="250" height="250">](http://bl.ocks.org/mbostock/99f0a6533f7c949cf8b8)


<a name="arc_padRadius" href="#arc_padRadius">#</a> <i>arc</i>.<b>padRadius</b>([<i>radius</i>]) [<>](https://github.com/d3/d3-shape/blob/master/src/arc.js#L242 "Source")

设置或获取padAngle的参考点，默认为null，默认情况下使用sqrt([innerRadius](#arc_innerRadius) * innerRadius + [outerRadius](#arc_outerRadius) * outerRadius)值。

<a name="arc_context" href="#arc_context">#</a> <i>arc</i>.<b>context</b>([<i>context</i>]) [<>](https://github.com/d3/d3-shape/blob/master/src/arc.js#L258 "Source")

如果指定了*context*,则设置context的上下文并返回arc生成器。如果没有指定*context*则返回当前的上下文，默认为null。如果context非null则[generated arc](#_arc)会使用一些列[path method](http://www.w3.org/TR/2dcontext/#canvaspathmethods)方法来渲染。

### Pies

pie生成器不直接生成图形，而是计算出一组用于生成pie或圆环的数据集。然后根据计算结果使用[arc generator](#arcs)进行绘制.

<a name="pie" href="#pie">#</a> d3.<b>pie</b>() [<>](https://github.com/d3/d3-shape/blob/master/src/pie.js "Source")

构造一个默认的pie生成器。

<a name="_pie" href="#_pie">#</a> <i>pie</i>(<i>data</i>[, <i>arguments…</i>]) [<>](https://github.com/d3/d3-shape/blob/master/src/pie.js#L14 "Source")

根据指定的数组*data*返回一个对象数组，每个对象都包含一些用于绘制的属性。返回的对象个数和原有的数组个数一致，每个对象包含以下属性:

* `data` - 输入的原始数据元素.
* `value` - 当前pie的值.
* `index` - 基于0的索引.
* `startAngle` - 当前pie 的起始角度.
* `endAngle` - 当前pie的终止角度.
* `padAngle` - 相邻pie之间的间隙.


比如使用一个数组生成一组pie:

```js
var data = [1, 1, 2, 3, 5, 8, 13, 21];
var arcs = d3.pie()(data);
```
生成的数据如下:

```json
[
  {"data":  1, "value":  1, "startAngle": 6.050474740247008, "endAngle": 6.166830023713296, "padAngle": 0},
  {"data":  1, "value":  1, "startAngle": 6.166830023713296, "endAngle": 6.283185307179584, "padAngle": 0},
  {"data":  2, "value":  2, "startAngle": 5.817764173314431, "endAngle": 6.050474740247008, "padAngle": 0},
  {"data":  3, "value":  3, "startAngle": 5.468698322915565, "endAngle": 5.817764173314431, "padAngle": 0},
  {"data":  5, "value":  5, "startAngle": 4.886921905584122, "endAngle": 5.468698322915565, "padAngle": 0},
  {"data":  8, "value":  8, "startAngle": 3.956079637853813, "endAngle": 4.886921905584122, "padAngle": 0},
  {"data": 13, "value": 13, "startAngle": 2.443460952792061, "endAngle": 3.956079637853813, "padAngle": 0},
  {"data": 21, "value": 21, "startAngle": 0.000000000000000, "endAngle": 2.443460952792061, "padAngle": 0}
]
```

生成的数据顺序与输入数据顺序一致

<a name="pie_value" href="#pie_value">#</a> <i>pie</i>.<b>value</b>([<i>value</i>]) [<>](https://github.com/d3/d3-shape/blob/master/src/pie.js#L54 "Source")


设置或获取数据的值访问器，在实际应用中值可能是任意属性值，因此需要根据实际情况设置访问器，默认为:

```js
function value(d) {
  return d;
}
```

在内部，值访问器会被调用在所有的数据元素上。并传递`d`,`i`以及数据集`data`作为参数。比如使用数据元素中的number属性作为值时:

```js
var data = [
  {"number":  4, "name": Locke},
  {"number":  8, "name": Reyes},
  {"number": 15, "name": Ford},
  {"number": 16, "name": Jarrah},
  {"number": 23, "name": Shephard},
  {"number": 42, "name": Kwon}
];

var arcs = d3.pie()
    .value(function(d) { return d.number; })
    (data);
```

这个与 [mapping](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) 操作有些类似，如果使用map操作代替值访问器时。可以如下:

```js
var arcs = d3.pie()(data.map(function(d) { return d.number; }));
```

但是使用值访问器的好处在于它最后返回了对象类型，可以很方便的访问对象的其他属性.

<a name="pie_sort" href="#pie_sort">#</a> <i>pie</i>.<b>sort</b>([<i>compare</i>]) [<>](https://github.com/d3/d3-shape/blob/master/src/pie.js#L62 "Source")

如果指定了*compare*,在数据元素进行排序，这个排序方法可以根据数据元素的任何一个属性进行排序。比如根据上述例子中的name属性进行排序，则可以:

```js
pie.sort(function(a, b) { return a.name.localeCompare(b.name); });
```

排序操作不影响生成的元素的顺序，影响的是每个pie的[start angle](#pie_startAngle) 和 [end angle](#pie_endAngle).

<a name="pie_sortValues" href="#pie_sortValues">#</a> <i>pie</i>.<b>sortValues</b>([<i>compare</i>]) [<>](https://github.com/d3/d3-shape/blob/master/src/pie.js#L58 "Source")

与上述排序相比，这个排序针对性更强，它依据值进行排序，而不考虑其他属性的影响:

```js
function compare(a, b) {
  return b - a;
}
```


```js
pie.sortValues(function(a, b) { return a - b; });
```

排序操作不影响生成的元素的顺序，影响的是每个pie的[start angle](#pie_startAngle) 和 [end angle](#pie_endAngle).

<a name="pie_startAngle" href="#pie_startAngle">#</a> <i>pie</i>.<b>startAngle</b>([<i>angle</i>]) [<>](https://github.com/d3/d3-shape/blob/master/src/pie.js#L66 "Source")

设置或获取所有pie的起始角度。如果没有指定*angle*则将所有arc的起始角度设置为*angle*。默认情况下是以0度(12点钟方向)开始计算。默认为:

```js
function startAngle() {
  return 0;
}
```


<a name="pie_endAngle" href="#pie_endAngle">#</a> <i>pie</i>.<b>endAngle</b>([<i>angle</i>]) [<>](https://github.com/d3/d3-shape/blob/master/src/pie.js#L70 "Source")

设置或获取所有pie的终止角度。默认为:

```js
function endAngle() {
  return 2 * Math.PI;
}
```

设置起始角度和终止角度可以将所有的pie限制在某一个角度范围，而不是形成一个完整的圆形结构。


<a name="pie_padAngle" href="#pie_padAngle">#</a> <i>pie</i>.<b>padAngle</b>([<i>angle</i>]) [<>](https://github.com/d3/d3-shape/blob/master/src/pie.js#L74 "Source")

设置或获取相邻pie之间的间隙角度。默认为:

```js
function padAngle() {
  return 0;
}
```

关于间隙角度可以参考这个例子:[pie padding animation](http://bl.ocks.org/mbostock/3e961b4c97a1b543fff2)

### Lines

[<img width="295" height="154" alt="Line Chart" src="https://raw.githubusercontent.com/d3/d3-shape/master/img/line.png">](http://bl.ocks.org/mbostock/1550e57e12e73b86ad9e)

line生成器可以生成一个[spline](https://en.wikipedia.org/wiki/Spline_\(mathematics\)) 或 [polyline](https://en.wikipedia.org/wiki/Polygonal_chain). 除线条类型的图表外，线条还被应用在其他的可视化布局中，比如 [hierarchical edge bundling](http://bl.ocks.org/mbostock/7607999).

<a name="line" href="#line">#</a> d3.<b>line</b>() [<>](https://github.com/d3/d3-shape/blob/master/src/line.js "Source")

使用默认的设置构建一个line生成器

<a name="_line" href="#_line">#</a> <i>line</i>(<i>data</i>) [<>](https://github.com/d3/d3-shape/blob/master/src/line.js#L14 "Source")

使用指定的数据生成一条线，给定的数据顺序应该按照*x*值排好序。如果为生成器指定了[context](#line_context)，则会使用一系列[path method](http://www.w3.org/TR/2dcontext/#canvaspathmethods)将线条渲染到context中。如果没有指定context则返回一系列SVG路径字符串。

<a name="line_x" href="#line_x">#</a> <i>line</i>.<b>x</b>([<i>x</i>]) [<>](https://github.com/d3/d3-shape/blob/master/src/line.js#L34 "Source")

设置或获取*x*值访问器。默认为:

```js
function x(d) {
  return d[0];
}
```

在生成线条时，*x*访问器会对输入的数据依次调用以获取准确的*x*值。*x*访问器可以传递当前的数据元素*d*,索引*i*以及整个数据集*data*。默认情况下数据集为二维数组，*x*访问器如上所示。如果数据集为对象数组，且*x*值使用特定属性代替时可以如下:

```js
var data = [
  {date: new Date(2007, 3, 24), value: 93.24},
  {date: new Date(2007, 3, 25), value: 95.35},
  {date: new Date(2007, 3, 26), value: 98.84},
  {date: new Date(2007, 3, 27), value: 99.92},
  {date: new Date(2007, 3, 30), value: 99.80},
  {date: new Date(2007, 4,  1), value: 99.47},
  …
];

var line = d3.line()
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.value); });
```

<a name="line_y" href="#line_y">#</a> <i>line</i>.<b>y</b>([<i>y</i>]) [<>](https://github.com/d3/d3-shape/blob/master/src/line.js#L38 "Source")

设置或获取*y*访问器。默认为:

```js
function y(d) {
  return d[1];
}
```

*y*访问器的调用方式与*x*访问器类似。

<a name="line_defined" href="#line_defined">#</a> <i>line</i>.<b>defined</b>([<i>defined</i>]) [<>](https://github.com/d3/d3-shape/blob/master/src/line.js#L42 "Source")


设置或获取*defined*访问器，这个访问器指定在数据出现缺失时如何操作。默认情况下为:

```js
function defined() {
  return true;
}
```

默认的访问器都假设所有的输入数据都是正确定义的，如果输入的数据没被定义，则会出现断点，*defined*就是定义此时该如何操作。

如果想跳过没定义的值，则设置：

```js

var line = d3.line()
  .defined(function(d){return d;})
  ...

```


在生成线条时，值访问器会对输入的元素依次调用，如果能正确读取到*x*和*y*属性，则正常，如果不能则将跳过。例如:

[<img src="https://raw.githubusercontent.com/d3/d3-shape/master/img/line-defined.png" width="480" height="250" alt="Line with Missing Data">](http://bl.ocks.org/mbostock/0533f44f2cfabecc5e3a)


<a name="line_curve" href="#line_curve">#</a> <i>line</i>.<b>curve</b>([<i>curve</i>]) [<>](https://github.com/d3/d3-shape/blob/master/src/line.js#L46 "Source")

设置或获取[curve factory(曲线)](#curves)，这个方法类似于v3中的插值方式，因为在实际应用中，可能想让线条更圆滑，而不是菱角分明的折现。默认情况下为[curveLinear](#curveLinear).

<a name="line_context" href="#line_context">#</a> <i>line</i>.<b>context</b>([<i>context</i>]) [<>](https://github.com/d3/d3-shape/blob/master/src/line.js#L50 "Source")

如果指定了*context*，则设置上下文并返回线条生成器。如果没有指定则返回当前的上下文，默认为null。如果非null则线条生成器会调用一些列[path method](http://www.w3.org/TR/2dcontext/#canvaspathmethods)将路径信息添加到上下文中。

<a name="radialLine" href="#radialLine">#</a> d3.<b>radialLine</b>() [<>](https://github.com/d3/d3-shape/blob/master/src/radialLine.js "Source")

<img alt="Radial Line" width="250" height="250" src="https://raw.githubusercontent.com/d3/d3-shape/master/img/line-radial.png">

使用默认的设置构建一个radial线条生成器。radial线条与标准笛卡尔坐标系中的线条类似，只不过radial线条位于极坐标系中，标准线条中的*x*和*y*对应radial线条中的[angle](#radialLine_angle) 和 [radius](#radialLine_radius)。radial总是相对于`<0,0>`点的，所以要使用transform变换将其移动到指定的位置。

<a name="_radialLine" href="#_radialLine">#</a> <i>radialLine</i>(<i>data</i>) [<>](https://github.com/d3/d3-shape/blob/master/src/radialLine.js#L4 "Source")

等价于 [*line*](#_line).

<a name="radialLine_angle" href="#radialLine_angle">#</a> <i>radialLine</i>.<b>angle</b>([<i>angle</i>]) [<>](https://github.com/d3/d3-shape/blob/master/src/radialLine.js#L7 "Source")

等价于 [*line*.x](#line_x), 只不过返回的是角度值，0度位于12点钟方向

<a name="radialLine_radius" href="#radialLine_radius">#</a> <i>radialLine</i>.<b>radius</b>([<i>radius</i>]) [<>](https://github.com/d3/d3-shape/blob/master/src/radialLine.js#L8 "Source")

等价于 [*line*.y](#line_y), 访问器返回的是半径

<a name="radialLine_defined" href="#radialLine_defined">#</a> <i>radialLine</i>.<b>defined</b>([<i>defined</i>])

等价于 [*line*.defined](#line_defined).

<a name="radialLine_curve" href="#radialLine_curve">#</a> <i>radialLine</i>.<b>curve</b>([<i>curve</i>]) [<>](https://github.com/d3/d3-shape/blob/master/src/radialLine.js#L10 "Source")

等价于 [*line*.curve](#line_curve). 但是不推荐使用 [curveMonotoneX](#curveMonotoneX) 或 [curveMonotoneY](#curveMonotoneY)

<a name="radialLine_context" href="#radialLine_context">#</a> <i>radialLine</i>.<b>context</b>([<i>context</i>])

等价于 [*line*.context](#line_context).

### Areas


[<img alt="Area Chart" width="295" height="154" src="https://raw.githubusercontent.com/d3/d3-shape/master/img/area.png">](http://bl.ocks.org/mbostock/3883195)[<img alt="Stacked Area Chart" width="295" height="154" src="https://raw.githubusercontent.com/d3/d3-shape/master/img/area-stacked.png">](http://bl.ocks.org/mbostock/3885211)[<img alt="Difference Chart" width="295" height="154" src="https://raw.githubusercontent.com/d3/d3-shape/master/img/area-difference.png">](http://bl.ocks.org/mbostock/3894205)

area生成器可以生成一个区域，来绘制面积图。面积图由两个边界线组成，边界线可以是曲线也可以是折线。通常情况下两条边界线共享同一个[*x*-values](#area_x) ([x0](#area_x0) = [x1](#area_x1))，不同的是*y*-value ([y0](#area_y0) and [y1](#area_y1)); 大多数情况下y0是一个常量，用以表示[zero](http://www.vox.com/2015/11/19/9758062/y-axis-zero-chart)。面积图顶部曲线使用*x1*和*y1*定义，底部使用*x0*和*y0*表示。面积图区域是顺时针的多边形。

<a name="area" href="#area">#</a> d3.<b>area</b>() [<>](https://github.com/d3/d3-shape/blob/master/src/area.js "Source")

使用默认的设置构建一个面积图生成器。

<a name="_area" href="#_area">#</a> <i>area</i>(<i>data</i>) [<>](https://github.com/d3/d3-shape/blob/master/src/area.js#L17 "Source")

根据指定的数据返回一个使用路径字符串表示的面积。输入数据需要根据*x*值排好序。如果生成器包含上下文 [context](#line_context)，则区域会被渲染到上下文中。否则会调用一系列[path method](http://www.w3.org/TR/2dcontext/#canvaspathmethods)方法返回一个[path data](http://www.w3.org/TR/SVG/paths.html#PathData)字符串。


<a name="area_x" href="#area_x">#</a> <i>area</i>.<b>x</b>([<i>x</i>]) [<>](https://github.com/d3/d3-shape/blob/master/src/area.js#L59 "Source")

如果指定了*x*则将[x0](#area_x0)设置为*x*并将[x1](#area_x1)设置为null。如果没有指定则返回当前的x0访问器。

<a name="area_x0" href="#area_x0">#</a> <i>area</i>.<b>x0</b>([<i>x</i>]) [<>](https://github.com/d3/d3-shape/blob/master/src/area.js#L63 "Source")

设置或获取x0访问器。默认为:

```js
function x(d) {
  return d[0];
}
```

比如使用date属性作为x方向的值，则可以:


```js
var data = [
  {date: new Date(2007, 3, 24), value: 93.24},
  {date: new Date(2007, 3, 25), value: 95.35},
  {date: new Date(2007, 3, 26), value: 98.84},
  {date: new Date(2007, 3, 27), value: 99.92},
  {date: new Date(2007, 3, 30), value: 99.80},
  {date: new Date(2007, 4,  1), value: 99.47},
  …
];

var area = d3.area()
    .x(function(d) { return x(d.date); })
    .y1(function(d) { return y(d.value); })
    .y0(y(0));
```

<a name="area_x1" href="#area_x1">#</a> <i>area</i>.<b>x1</b>([<i>x</i>]) [<>](https://github.com/d3/d3-shape/blob/master/src/area.js#L67 "Source")

设置或获取x1访问器。默认为null。

<a name="area_y" href="#area_y">#</a> <i>area</i>.<b>y</b>([<i>y</i>]) [<>](https://github.com/d3/d3-shape/blob/master/src/area.js#L71 "Source")

如果指定了*y*则将 [y0](#area_y0) 设置为 *y* 并将 [y1](#area_y1) 设置为null。

<a name="area_y0" href="#area_y0">#</a> <i>area</i>.<b>y0</b>([<i>y</i>]) [<>](https://github.com/d3/d3-shape/blob/master/src/area.js#L75 "Source")

设置或获取y0访问器。默认为:

```js
function y() {
  return 0;
}
```

<a name="area_y1" href="#area_y1">#</a> <i>area</i>.<b>y1</b>([<i>y</i>]) [<>](https://github.com/d3/d3-shape/blob/master/src/area.js#L79 "Source")

设置或获取y1访问器。默认为:

```js
function y(d) {
  return d[1];
}
```

<a name="area_defined" href="#area_defined">#</a> <i>area</i>.<b>defined</b>([<i>defined</i>]) [<>](https://github.com/d3/d3-shape/blob/master/src/area.js#L96 "Source")

当数据中存在非法元素时，也就是出现断点时如何操作. 默认为:

```js
function defined() {
  return true;
}
```

可以通过这个方法使得面积图跳过非法的元素。比如:

```js

var area = d3.area()
  .defined(function(d){return d;})
  ...

```

[<img src="https://raw.githubusercontent.com/d3/d3-shape/master/img/area-defined.png" width="480" height="250" alt="Area with Missing Data">](http://bl.ocks.org/mbostock/3035090)

<a name="area_curve" href="#area_curve">#</a> <i>area</i>.<b>curve</b>([<i>curve</i>]) [<>](https://github.com/d3/d3-shape/blob/master/src/area.js#L100 "Source")

设置插值方式[curve factory](#curves) ，默认为[curveLinear](#curveLinear).

<a name="area_context" href="#area_context">#</a> <i>area</i>.<b>context</b>([<i>context</i>]) [<>](https://github.com/d3/d3-shape/blob/master/src/area.js#L104 "Source")

如果指定了*context*则将路径信息渲染到context上下文中。如果使用canvas画布则需要使用这个方法。

<a name="area_lineX0" href="#area_lineX0">#</a> <i>area</i>.<b>lineX0</b>() [<>](https://github.com/d3/d3-shape/blob/master/src/area.js#L83 "Source")
<br><a name="area_lineY0" href="#area_lineY0">#</a> <i>area</i>.<b>lineY0</b>() [<>](https://github.com/d3/d3-shape/blob/master/src/area.js#L84 "Source")

返回一个线条生成器，线条生成器的x访问器是面积生成器的 [*x0*-accessor](#area_x0)，线条生成器的y访问器是面积生成器的[*y0*-accessor](#area_y0)

<a name="area_lineX1" href="#area_lineX1">#</a> <i>area</i>.<b>lineX1</b>() [<>](https://github.com/d3/d3-shape/blob/master/src/area.js#L92 "Source")

返回一个线条生成器，线条生成器的x访问器是面积生成器的 [*x1*-accessor](#area_x1)，线条生成器的y访问器是面积生成器的[*y0*-accessor](#area_y0)

<a name="area_lineY1" href="#area_lineY1">#</a> <i>area</i>.<b>lineY1</b>() [<>](https://github.com/d3/d3-shape/blob/master/src/area.js#L88 "Source")

返回一个线条生成器，线条生成器的x访问器是面积生成器的 [*x1*-accessor](#area_x1)，线条生成器的y访问器是面积生成器的[*y1*-accessor](#area_y1)

<a name="radialArea" href="#radialArea">#</a> d3.<b>radialArea</b>() [<>](https://github.com/d3/d3-shape/blob/master/src/radialArea.js "Source")

<img alt="Radial Area" width="250" height="250" src="https://raw.githubusercontent.com/d3/d3-shape/master/img/area-radial.png">

径向面积图，与标准面积图不同的是，径向面积图处于极坐标中，对应的访问器为[angle](#radialArea_angle)和[radius](#radialArea_radius)，并且相对`<0,0>`点，需要使用transform变换将其移动到指定的位置。

<a name="_radialArea" href="#_radialArea">#</a> <i>radialArea</i>(<i>data</i>)

相当于 [*area*](#_area).

<a name="radialArea_angle" href="#radialArea_angle">#</a> <i>radialArea</i>.<b>angle</b>([<i>angle</i>]) [<>](https://github.com/d3/d3-shape/blob/master/src/radialArea.js#L13 "Source")

相当于 [*area*.x](#area_x), 返回弧度值，0度为12点钟方向。

<a name="radialArea_startAngle" href="#radialArea_startAngle">#</a> <i>radialArea</i>.<b>startAngle</b>([<i>angle</i>]) [<>](https://github.com/d3/d3-shape/blob/master/src/radialArea.js#L14 "Source")

相当于 [*area*.x0](#area_x0), 返回弧度值，0度为12点钟方向。

<a name="radialArea_endAngle" href="#radialArea_endAngle">#</a> <i>radialArea</i>.<b>endAngle</b>([<i>angle</i>]) [<>](https://github.com/d3/d3-shape/blob/master/src/radialArea.js#L15 "Source")

相当于 [*area*.x1](#area_x1), 返回弧度值，0度为12点钟方向。

<a name="radialArea_radius" href="#radialArea_radius">#</a> <i>radialArea</i>.<b>radius</b>([<i>radius</i>]) [<>](https://github.com/d3/d3-shape/blob/master/src/radialArea.js#L16 "Source")

相当于 [*area*.y](#area_y), 返回半径值，相对与`<0,0>`.

<a name="radialArea_innerRadius" href="#radialArea_innerRadius">#</a> <i>radialArea</i>.<b>innerRadius</b>([<i>radius</i>]) [<>](https://github.com/d3/d3-shape/blob/master/src/radialArea.js#L17 "Source")

相当于 [*area*.y0](#area_y0), 返回半径值，相对与`<0,0>`.

<a name="radialArea_outerRadius" href="#radialArea_outerRadius">#</a> <i>radialArea</i>.<b>outerRadius</b>([<i>radius</i>]) [<>](https://github.com/d3/d3-shape/blob/master/src/radialArea.js#L18 "Source")

相当于 [*area*.y1](#area_y1), 返回半径值，相对与`<0,0>`.

<a name="radialArea_defined" href="#radialArea_defined">#</a> <i>radialArea</i>.<b>defined</b>([<i>defined</i>])

相当于 [*area*.defined](#area_defined).

<a name="radialArea_curve" href="#radialArea_curve">#</a> <i>radialArea</i>.<b>curve</b>([<i>curve</i>]) [<>](https://github.com/d3/d3-shape/blob/master/src/radialArea.js#L24 "Source")

相当于 [*area*.curve](#area_curve).不推荐使用 [curveMonotoneX](#curveMonotoneX) 或 [curveMonotoneY](#curveMonotoneY)

<a name="radialArea_context" href="#radialArea_context">#</a> <i>radialArea</i>.<b>context</b>([<i>context</i>])

相当于 [*line*.context](#line_context).

<a name="radialArea_lineStartAngle" href="#radialArea_lineStartAngle">#</a> <i>radialArea</i>.<b>lineStartAngle</b>() [<>](https://github.com/d3/d3-shape/blob/master/src/radialArea.js#L19 "Source")
<br><a name="radialArea_lineInnerRadius" href="#radialArea_lineInnerRadius">#</a> <i>radialArea</i>.<b>lineInnerRadius</b>() [<>](https://github.com/d3/d3-shape/blob/master/src/radialArea.js#L21 "Source")

返回一个 [radial line generator](#radialLine)。返回的radial线条生成器的[angle accessor](#radialLine_angle)为径向面积图的[start angle accessor](#radialArea_startAngle), radial线条的 [radius accessor](#radialLine_radius) 为径向面积图的 [inner radius accessor](#radialArea_innerRadius).

<a name="radialArea_lineEndAngle" href="#radialArea_lineEndAngle">#</a> <i>radialArea</i>.<b>lineEndAngle</b>() [<>](https://github.com/d3/d3-shape/blob/master/src/radialArea.js#L20 "Source")

返回一个 [radial line generator](#radialLine)。返回的radial线条生成器的[angle accessor](#radialLine_angle)为径向面积图的[end angle accessor](#radialArea_endAngle), radial线条的 [radius accessor](#radialLine_radius) 为径向面积图的 [inner radius accessor](#radialArea_innerRadius).

<a name="radialArea_lineOuterRadius" href="#radialArea_lineOuterRadius">#</a> <i>radialArea</i>.<b>lineOuterRadius</b>() [<>](https://github.com/d3/d3-shape/blob/master/src/radialArea.js#L22 "Source")

返回一个 [radial line generator](#radialLine)。返回的radial线条生成器的[angle accessor](#radialLine_angle)为径向面积图的[start angle accessor](#radialArea_startAngle), radial线条的 [radius accessor](#radialLine_radius) 为径向面积图的[outer radius accessor](#radialArea_outerRadius).

### Curves

在二维空间生成一个点序列用来绘制线条或面积图时，除了定位好的这些点外，剩下的工作就是如何将这些点连接起来以形成一个连续的线条或闭合的区域。连接方式有很多种。


线条通常不是直接构造的，而是将线条插值方式传递给[*line*.curve](#line_curve) 或 [*area*.curve](#area_curve). 例如:

```js
var line = d3.line()
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.value); })
    .curve(d3.curveCatmullRom.alpha(0.5));
```

<a name="curveBasis" href="#curveBasis">#</a> d3.<b>curveBasis</b>(<i>context</i>) [<>](https://github.com/d3/d3-shape/blob/master/src/curve/basis.js#L12 "Source")

<img src="https://raw.githubusercontent.com/d3/d3-shape/master/img/basis.png" width="888" height="240" alt="basis">

三次[basis spline(B样条曲线)](https://en.wikipedia.org/wiki/B-spline)，包含起止点

<a name="curveBasisClosed" href="#curveBasisClosed">#</a> d3.<b>curveBasisClosed</b>(<i>context</i>) [<>](https://github.com/d3/d3-shape/blob/master/src/curve/basisClosed.js "Source")

<img src="https://raw.githubusercontent.com/d3/d3-shape/master/img/basisClosed.png" width="888" height="240" alt="basisClosed">

闭合三次[basis spline(B样条曲线)](https://en.wikipedia.org/wiki/B-spline)

<a name="curveBasisOpen" href="#curveBasisOpen">#</a> d3.<b>curveBasisOpen</b>(<i>context</i>) [<>](https://github.com/d3/d3-shape/blob/master/src/curve/basisOpen.js "Source")

<img src="https://raw.githubusercontent.com/d3/d3-shape/master/img/basisOpen.png" width="888" height="240" alt="basisOpen">

三次[basis spline(B样条曲线)](https://en.wikipedia.org/wiki/B-spline)，不包含起止点

<a name="curveBundle" href="#curveBundle">#</a> d3.<b>curveBundle</b>(<i>context</i>) [<>](https://github.com/d3/d3-shape/blob/master/src/curve/bundle.js "Source")

<img src="https://raw.githubusercontent.com/d3/d3-shape/master/img/bundle.png" width="888" height="240" alt="bundle">

使用指定的控制点生成[basis spline](https://en.wikipedia.org/wiki/B-spline)，不同的是这个可以指定参数[*beta*](#curveBundle_beta)来调整弯曲度，这种曲线通常被用在[hierarchical edge bundling(层级布局边捆绑)](http://bl.ocks.org/mbostock/7607999)中。[hierarchical edge bundling(层级布局边捆绑)](http://bl.ocks.org/mbostock/7607999)使用的是[Danny Holten](https://www.win.tue.nl/vis1/home/dholten/) 的 [Hierarchical Edge Bundles: Visualization of Adjacency Relations 的 Hierarchical Data](https://www.win.tue.nl/vis1/home/dholten/papers/bundles_infovis.pdf)文章中的算法。这种曲线只适合线条不适合面积图。

<a name="curveBundle_beta" href="#curveBundle_beta">#</a> <i>bundle</i>.<b>beta</b>(<i>beta</i>) [<>](https://github.com/d3/d3-shape/blob/master/src/curve/bundle.js#L51 "Source")

使用指定的捆绑参数返回一个捆绑曲线。参数介于[0,1]. 如果*beta*为0则会在起止点之间生成一条直线。如果*beta*为1则会生成一个标准的[basis](#basis)，例如:

```js
var line = d3.line().curve(d3.curveBundle.beta(0.5));
```

<a name="curveCardinal" href="#curveCardinal">#</a> d3.<b>curveCardinal</b>(<i>context</i>) [<>](https://github.com/d3/d3-shape/blob/master/src/curve/cardinal.js "Source")

<img src="https://raw.githubusercontent.com/d3/d3-shape/master/img/cardinal.png" width="888" height="240" alt="cardinal">

生成一个[cardinal spline](https://en.wikipedia.org/wiki/Cubic_Hermite_spline#Cardinal_spline),默认张力为0

<a name="curveCardinalClosed" href="#curveCardinalClosed">#</a> d3.<b>curveCardinalClosed</b>(<i>context</i>) [<>](https://github.com/d3/d3-shape/blob/master/src/curve/cardinalClosed.js "Source")

<img src="https://raw.githubusercontent.com/d3/d3-shape/master/img/cardinalClosed.png" width="888" height="240" alt="cardinalClosed">

生成一个闭合的[cardinal spline](https://en.wikipedia.org/wiki/Cubic_Hermite_spline#Cardinal_spline)，默认张力为0

<a name="curveCardinalOpen" href="#curveCardinalOpen">#</a> d3.<b>curveCardinalOpen</b>(<i>context</i>) [<>](https://github.com/d3/d3-shape/blob/master/src/curve/cardinalOpen.js "Source")

<img src="https://raw.githubusercontent.com/d3/d3-shape/master/img/cardinalOpen.png" width="888" height="240" alt="cardinalOpen">

生成一个开口的[cardinal spline](https://en.wikipedia.org/wiki/Cubic_Hermite_spline#Cardinal_spline)，不包含起止点。默认张力为0

<a name="curveCardinal_tension" href="#curveCardinal_tension">#</a> <i>cardinal</i>.<b>tension</b>(<i>tension</i>) [<>](https://github.com/d3/d3-shape/blob/master/src/curve/cardinalOpen.js#L44 "Source")

设置cardinal spline的张力，张力参数介于[0,1]. 张力为1时相当于[curveLinear](#curveLinear)，张力为0时为一个[Catmull–Rom](#curveCatmullRom)曲线，例如:


```js
var line = d3.line().curve(d3.curveCardinal.tension(0.5));
```

<a name="curveCatmullRom" href="#curveCatmullRom">#</a> d3.<b>curveCatmullRom</b>(<i>context</i>) [<>](https://github.com/d3/d3-shape/blob/master/src/curve/catmullRom.js "Source")

<img src="https://raw.githubusercontent.com/d3/d3-shape/master/img/catmullRom.png" width="888" height="240" alt="catmullRom">

使用指定的控制点和[*alpha*](#catmullRom_alpha)生成一个三次Catmull–Rom曲线，*alpha*默认为0.5。Catmull–Rom曲线参考[On the Parameterization of Catmull–Rom Curves](http://www.cemyuksel.com/research/catmullrom_param/)。

<a name="curveCatmullRomClosed" href="#curveCatmullRomClosed">#</a> d3.<b>curveCatmullRomClosed</b>(<i>context</i>) [<>](https://github.com/d3/d3-shape/blob/master/src/curve/catmullRomClosed.js "Source")

<img src="https://raw.githubusercontent.com/d3/d3-shape/master/img/catmullRomClosed.png" width="888" height="330" alt="catmullRomClosed">

使用指定的控制点和[*alpha*](#catmullRom_alpha)生成一个闭合的三次Catmull–Rom曲线

<a name="curveCatmullRomOpen" href="#curveCatmullRomOpen">#</a> d3.<b>curveCatmullRomOpen</b>(<i>context</i>) [<>](https://github.com/d3/d3-shape/blob/master/src/curve/catmullRomOpen.js "Source")

<img src="https://raw.githubusercontent.com/d3/d3-shape/master/img/catmullRomOpen.png" width="888" height="240" alt="catmullRomOpen">

使用指定的控制点和[*alpha*](#catmullRom_alpha)生成一个开放的三次Catmull–Rom曲线，不包含起止点

<a name="curveCatmullRom_alpha" href="#curveCatmullRom_alpha">#</a> <i>catmullRom</i>.<b>alpha</b>(<i>alpha</i>) [<>](https://github.com/d3/d3-shape/blob/master/src/curve/catmullRom.js#L83 "Source")

设置Catmull–Rom曲线的*alpha*参数，介于[0,1], 例如:

```js
var line = d3.line().curve(d3.curveCatmullRom.alpha(0.5));
```

<a name="curveLinear" href="#curveLinear">#</a> d3.<b>curveLinear</b>(<i>context</i>) [<>](https://github.com/d3/d3-shape/blob/master/src/curve/linear.js "Source")

<img src="https://raw.githubusercontent.com/d3/d3-shape/master/img/linear.png" width="888" height="240" alt="linear">

线性插值，那就是折线

<a name="curveLinearClosed" href="#curveLinearClosed">#</a> d3.<b>curveLinearClosed</b>(<i>context</i>) [<>](https://github.com/d3/d3-shape/blob/master/src/curve/linearClosed.js "Source")

<img src="https://raw.githubusercontent.com/d3/d3-shape/master/img/linearClosed.png" width="888" height="240" alt="linearClosed">

闭合的折线

<a name="curveMonotoneX" href="#curveMonotoneX">#</a> d3.<b>curveMonotoneX</b>(<i>context</i>) [<>](https://github.com/d3/d3-shape/blob/master/src/curve/monotone.js#L98 "Source")

<img src="https://raw.githubusercontent.com/d3/d3-shape/master/img/monotoneX.png" width="888" height="240" alt="monotoneX">

生成一个在y方向保持单调性的曲线。前提是曲线在x方向保持单调，具体算法参考[A simple method for monotonic interpolation in one dimension](http://adsabs.harvard.edu/full/1990A%26A...239..443S)

<a name="curveMonotoneY" href="#curveMonotoneY">#</a> d3.<b>curveMonotoneY</b>(<i>context</i>) [<>](https://github.com/d3/d3-shape/blob/master/src/curve/monotone.js#L102 "Source")

<img src="https://raw.githubusercontent.com/d3/d3-shape/master/img/monotoneY.png" width="888" height="240" alt="monotoneY">

生成一个在x方向保持单调性的曲线。前提是曲线在y方向保持单调，具体算法参考[A simple method for monotonic interpolation in one dimension](http://adsabs.harvard.edu/full/1990A%26A...239..443S)

<a name="curveNatural" href="#curveNatural">#</a> d3.<b>curveNatural</b>(<i>context</i>) [<>](https://github.com/d3/d3-shape/blob/master/src/curve/natural.js "Source")

<img src="https://raw.githubusercontent.com/d3/d3-shape/master/img/natural.png" width="888" height="240" alt="natural">

生成一个 [natural](https://en.wikipedia.org/wiki/Spline_interpolation) [cubic spline](http://mathworld.wolfram.com/CubicSpline.html)(自然的三次曲线)，曲线在终点的二阶导数为0.

<a name="curveStep" href="#curveStep">#</a> d3.<b>curveStep</b>(<i>context</i>) [<>](https://github.com/d3/d3-shape/blob/master/src/curve/step.js "Source")

<img src="https://raw.githubusercontent.com/d3/d3-shape/master/img/step.png" width="888" height="240" alt="step">

台阶状([step function](https://en.wikipedia.org/wiki/Step_function))的折线。*y*值在两个相邻的点*x*值中间点发生变化。

<a name="curveStepAfter" href="#curveStepAfter">#</a> d3.<b>curveStepAfter</b>(<i>context</i>) [<>](https://github.com/d3/d3-shape/blob/master/src/curve/step.js#L51 "Source")

<img src="https://raw.githubusercontent.com/d3/d3-shape/master/img/stepAfter.png" width="888" height="240" alt="stepAfter">

台阶状([step function](https://en.wikipedia.org/wiki/Step_function))的折线，注意*y*值变化的位置。

<a name="curveStepBefore" href="#curveStepBefore">#</a> d3.<b>curveStepBefore</b>(<i>context</i>) [<>](https://github.com/d3/d3-shape/blob/master/src/curve/step.js#L47 "Source")

<img src="https://raw.githubusercontent.com/d3/d3-shape/master/img/stepBefore.png" width="888" height="240" alt="stepBefore">

台阶状([step function](https://en.wikipedia.org/wiki/Step_function))的折线，注意*y*值变化的位置。

### Custom Curves

曲线样式通常被传递给[*line*.curve](#line_curve) 和 [*area*.curve](#area_curve)来使用。你也可以通过使用这些接口自定义曲线样式。

<a name="curve_areaStart" href="#curve_areaStart">#</a> <i>curve</i>.<b>areaStart</b>() [<>](https://github.com/d3/d3-shape/blob/master/src/curve/step.js#L7 "Source")

表示新的区域段的起点。每个区域都要考虑两个线条:顶部线条和底部线条。

<a name="curve_areaEnd" href="#curve_areaEnd">#</a> <i>curve</i>.<b>areaEnd</b>() [<>](https://github.com/d3/d3-shape/blob/master/src/curve/step.js#L10 "Source")

表示当前区域段的结束

<a name="curve_lineStart" href="#curve_lineStart">#</a> <i>curve</i>.<b>lineStart</b>() [<>](https://github.com/d3/d3-shape/blob/master/src/curve/step.js#L13 "Source")

新线段的开始点，后面跟着0个或多个[points](#curve_point)

<a name="curve_lineEnd" href="#curve_lineEnd">#</a> <i>curve</i>.<b>lineEnd</b>() [<>](https://github.com/d3/d3-shape/blob/master/src/curve/step.js#L17 "Source")

当前线段的结束点

<a name="curve_point" href="#curve_point">#</a> <i>curve</i>.<b>point</b>(<i>x</i>, <i>y</i>) [<>](https://github.com/d3/d3-shape/blob/master/src/curve/step.js#L22 "Source")

当前线段的一个使用*x*和*y*表示的新的点

### Links

[<img alt="Tidy Tree" src="https://raw.githubusercontent.com/d3/d3-hierarchy/master/img/tree.png">](http://bl.ocks.org/mbostock/9d0899acb5d3b8d839d9d613a9e1fe04)

The **link** shape generates a smooth cubic Bézier curve from a source point to a target point. The tangents of the curve at the start and end are either [vertical](#linkVertical), [horizontal](#linkHorizontal) or [radial](#linkRadial).

<a name="linkVertical" href="#linkVertical">#</a> d3.<b>linkVertical</b>() [<>](https://github.com/d3/d3-shape/blob/master/src/link/index.js#L74 "Source")

Returns a new [link generator](#_link) with vertical tangents. For example, to visualize [links](https://github.com/d3/d3-hierarchy/blob/master/README.md#node_links) in a [tree diagram](https://github.com/d3/d3-hierarchy/blob/master/README.md#tree) rooted on the top edge of the display, you might say:

```js
var link = d3.linkVertical()
    .x(function(d) { return d.x; })
    .y(function(d) { return d.y; });
```

<a name="linkHorizontal" href="#linkHorizontal">#</a> d3.<b>linkHorizontal</b>() [<>](https://github.com/d3/d3-shape/blob/master/src/link/index.js#L70 "Source")

Returns a new [link generator](#_link) with horizontal tangents. For example, to visualize [links](https://github.com/d3/d3-hierarchy/blob/master/README.md#node_links) in a [tree diagram](https://github.com/d3/d3-hierarchy/blob/master/README.md#tree) rooted on the left edge of the display, you might say:

```js
var link = d3.linkHorizontal()
    .x(function(d) { return d.y; })
    .y(function(d) { return d.x; });
```

<a href="#_link" name="_link">#</a> <i>link</i>(<i>arguments…</i>) [<>](https://github.com/d3/d3-shape/blob/master/src/link/index.js#L21 "Source")

Generates a link for the given *arguments*. The *arguments* are arbitrary; they are simply propagated to the link generator’s accessor functions along with the `this` object. For example, with the default settings, an object expected:

```js
link({
  source: [100, 100],
  target: [300, 300]
});
```

<a name="link_source" href="#link_source">#</a> <i>link</i>.<b>source</b>([<i>source</i>]) [<>](https://github.com/d3/d3-shape/blob/master/src/link/index.js#L28 "Source")

If *source* is specified, sets the source accessor to the specified function and returns this link generator. If *source* is not specified, returns the current source accessor, which defaults to:

```js
function source(d) {
  return d.source;
}
```

<a name="link_target" href="#link_target">#</a> <i>link</i>.<b>target</b>([<i>target</i>]) [<>](https://github.com/d3/d3-shape/blob/master/src/link/index.js#L32 "Source")

If *target* is specified, sets the target accessor to the specified function and returns this link generator. If *target* is not specified, returns the current target accessor, which defaults to:

```js
function target(d) {
  return d.target;
}
```

<a name="link_x" href="#link_x">#</a> <i>link</i>.<b>x</b>([<i>x</i>]) [<>](https://github.com/d3/d3-shape/blob/master/src/link/index.js#L36 "Source")

If *x* is specified, sets the *x*-accessor to the specified function or number and returns this link generator. If *x* is not specified, returns the current *x*-accessor, which defaults to:

```js
function x(d) {
  return d[0];
}
```

<a name="link_y" href="#link_y">#</a> <i>link</i>.<b>y</b>([<i>y</i>]) [<>](https://github.com/d3/d3-shape/blob/master/src/link/index.js#L40 "Source")

If *y* is specified, sets the *y*-accessor to the specified function or number and returns this link generator. If *y* is not specified, returns the current *y*-accessor, which defaults to:

```js
function y(d) {
  return d[1];
}
```

<a name="link_context" href="#link_context">#</a> <i>link</i>.<b>context</b>([<i>context</i>]) [<>](https://github.com/d3/d3-shape/blob/master/src/link/index.js#L44 "Source")

If *context* is specified, sets the context and returns this link generator. If *context* is not specified, returns the current context, which defaults to null. If the context is not null, then the [generated link](#_link) is rendered to this context as a sequence of [path method](http://www.w3.org/TR/2dcontext/#canvaspathmethods) calls. Otherwise, a [path data](http://www.w3.org/TR/SVG/paths.html#PathData) string representing the generated link is returned. See also [d3-path](https://github.com/d3/d3-path).

<a name="linkRadial" href="#linkRadial">#</a> d3.<b>linkRadial</b>() [<>](https://github.com/d3/d3-shape/blob/master/src/link/index.js#L78 "Source")

Returns a new [link generator](#_link) with radial tangents. For example, to visualize [links](https://github.com/d3/d3-hierarchy/blob/master/README.md#node_links) in a [tree diagram](https://github.com/d3/d3-hierarchy/blob/master/README.md#tree) rooted in the center of the display, you might say:

```js
var link = d3.linkRadial()
    .angle(function(d) { return d.x; })
    .radius(function(d) { return d.y; });
```

<a name="linkRadial_angle" href="#linkRadial_angle">#</a> <i>linkRadial</i>.<b>angle</b>([<i>angle</i>]) [<>](https://github.com/d3/d3-shape/blob/master/src/link/index.js#L80 "Source")

Equivalent to [*link*.x](#link_x), except the accessor returns the angle in radians, with 0 at -*y* (12 o’clock).

<a name="linkRadial_radius" href="#linkRadial_radius">#</a> <i>linkRadial</i>.<b>radius</b>([<i>radius</i>]) [<>](https://github.com/d3/d3-shape/blob/master/src/link/index.js#L81 "Source")

Equivalent to [*link*.y](#link_y), except the accessor returns the radius: the distance from the origin ⟨0,0⟩.

### Symbols

<a href="#symbolCircle"><img src="https://raw.githubusercontent.com/d3/d3-shape/master/img/circle.png" width="100" height="100"></a><a href="#symbolCross"><img src="https://raw.githubusercontent.com/d3/d3-shape/master/img/cross.png" width="100" height="100"></a><a href="#symbolDiamond"><img src="https://raw.githubusercontent.com/d3/d3-shape/master/img/diamond.png" width="100" height="100"></a><a href="#symbolSquare"><img src="https://raw.githubusercontent.com/d3/d3-shape/master/img/square.png" width="100" height="100"></a><a href="#symbolStar"><img src="https://raw.githubusercontent.com/d3/d3-shape/master/img/star.png" width="100" height="100"></a><a href="#symbolTriangle"><img src="https://raw.githubusercontent.com/d3/d3-shape/master/img/triangle.png" width="100" height="100"><a href="#symbolWye"><img src="https://raw.githubusercontent.com/d3/d3-shape/master/img/wye.png" width="100" height="100"></a>

Symbols提供了一些已定义的图形编码(符号)，通常被用在散点图中。符号总是被放在`<0,0>`点，需要使用transform变换将其移动到指定的位置

<a name="symbol" href="#symbol">#</a> d3.<b>symbol</b>() [<>](https://github.com/d3/d3-shape/blob/master/src/symbol.js "Source")

使用默认的设置创建一个符号生成器。

<a name="_symbol" href="#_symbol">#</a> <i>symbol</i>(<i>arguments</i>…) [<>](https://github.com/d3/d3-shape/blob/master/src/symbol.js#L11 "Source")

使用指定的参数创建一个符号。*arguments*是任意的，这些参数会被传递给符号生成器的访问器。如果没有参数时会返回一个面积为64像素的圆的路径字符串。如果符号生成器包含了[context](#symbol_context)，则路径信息会被附加到context上下文中，如果没有则会调用一些列[path method](http://www.w3.org/TR/2dcontext/#canvaspathmethods)返回一个[path data](http://www.w3.org/TR/SVG/paths.html#PathData)字符串。

<a name="symbol_type" href="#symbol_type">#</a> <i>symbol</i>.<b>type</b>([<i>type</i>]) [<>](https://github.com/d3/d3-shape/blob/master/src/symbol.js#L33 "Source")

如果指定了*type*则根据指定的*type*返回一个对应的符号字符串。如果没有指定*type*则返回默认的符号类型访问器，默认为:

```js
function type() {
  return circle;
}
```

参考 [symbols](#symbols) 获取更多的内置的符号类型. 如果要自定义符号，则使用 [*symbolType*.draw](#symbolType_draw).

<a name="symbol_size" href="#symbol_size">#</a> <i>symbol</i>.<b>size</b>([<i>size</i>]) [<>](https://github.com/d3/d3-shape/blob/master/src/symbol.js#L37 "Source")

设置或获取符号的大小，默认为64平方像素:

```js
function size() {
  return 64;
}
```

符号的大小可以作为一个视觉编码被使用，如果不想使用面积来表示大小的话，那也可以使用[SVG’s getBBox](http://bl.ocks.org/mbostock/3dd515e692504c92ab65)来设置符号的尺寸。

<a name="symbol_context" href="#symbol_context">#</a> <i>symbol</i>.<b>context</b>([<i>context</i>]) [<>](https://github.com/d3/d3-shape/blob/master/src/symbol.js#L41 "Source")

将符号路径信息附加到*context*上下文。在Canvas中绘制时使用。

<a name="symbols" href="#symbols">#</a> d3.<b>symbols</b>

包含[circle](#symbolCircle), [cross](#symbolCross), [diamond](#symbolDiamond), [square](#symbolSquare), [star](#symbolStar), [triangle](#symbolTriangle), and [wye](#symbolWye)的数组，每个数组元素都是一个对象，这个对象包含了*draw*方法，draw方法接受两个参数:context,size. 可以如下使用:

```js
var context = document.getElementById("canvas").getContext("2d");
      context.translate(100,100)
      d3.symbols[0].draw(context,100);
      context.stroke();
```


<a name="symbolCircle" href="#symbolCircle">#</a> d3.<b>symbolCircle</b> [<>](https://github.com/d3/d3-shape/blob/master/src/symbol/circle.js "Source")

圆

<a name="symbolCross" href="#symbolCross">#</a> d3.<b>symbolCross</b> [<>](https://github.com/d3/d3-shape/blob/master/src/symbol/cross.js "Source")

十字

<a name="symbolDiamond" href="#symbolDiamond">#</a> d3.<b>symbolDiamond</b> [<>](https://github.com/d3/d3-shape/blob/master/src/symbol/diamond.js "Source")

菱形

<a name="symbolSquare" href="#symbolSquare">#</a> d3.<b>symbolSquare</b> [<>](https://github.com/d3/d3-shape/blob/master/src/symbol/square.js "Source")

正方形

<a name="symbolStar" href="#symbolStar">#</a> d3.<b>symbolStar</b> [<>](https://github.com/d3/d3-shape/blob/master/src/symbol/star.js "Source")

五角星

<a name="symbolTriangle" href="#symbolTriangle">#</a> d3.<b>symbolTriangle</b> [<>](https://github.com/d3/d3-shape/blob/master/src/symbol/triangle.js "Source")

尖朝上的等边三角形


<a name="symbolWye" href="#symbolWye">#</a> d3.<b>symbolWye</b> [<>](https://github.com/d3/d3-shape/blob/master/src/symbol/wye.js "Source")

"Y"形

### Custom Symbol Types

符号类型通常不直接使用，而是传递给[*symbol*.type](#symbol_type)。你也可以使用如下接口自定义符号类型。

Symbol types are typically not used directly, instead being passed to [*symbol*.type](#symbol_type). However, you can define your own sumbol type implementation should none of the built-in types satisfy your needs using the following interface. You can also use this low-level interface with a built-in symbol type as an alternative to the symbol generator.

<a name="symbolType_draw" href="#symbolType_draw">#</a> <i>symbolType</i>.<b>draw</b>(<i>context</i>, <i>size</i>)

将符号类型渲染到指定的*context*中，大小为*size*。*context*充当[CanvasPathMethods](http://www.w3.org/TR/2dcontext/#canvaspathmethods)的角色，但是*context*只是CanvasPathMethods的一个子集。

### Stacks

[<img alt="Stacked Bar Chart" src="https://raw.githubusercontent.com/d3/d3-shape/master/img/stacked-bar.png" width="295" height="154">](http://bl.ocks.org/mbostock/3886208)[<img alt="Streamgraph" src="https://raw.githubusercontent.com/d3/d3-shape/master/img/stacked-stream.png" width="295" height="154">](http://bl.ocks.org/mbostock/4060954)

有一些形状可以堆叠放置。比如使用条形图表示某个月的销售额，月销售额可以由多种商品的销售额组成，相当于是将一个条形图细分为多个堆叠放置的小条形图。

堆叠图可以同时展示总量和构成总量的分量组成。但是在不同的分量之间是难以比较的。因为只有堆叠图的底部才是对齐的。因此要谨慎的选择[stack order](#stack_order)，并考虑 [streamgraph](#stackOffsetWiggle)。

与 [pie generator](#pies)类似，stack生成器不直接生成图形，而是根据输入的数据计算出属性值吗，然后借助[area generator](#areas)绘制面积图形或条形图。

<a name="stack" href="#stack">#</a> d3.<b>stack</b>() [<>](https://github.com/d3/d3-shape/blob/master/src/stack.js "Source")

使用默认的设置构建一个stack生成器。


<a name="_stack" href="#_stack">#</a> <i>stack</i>(<i>data</i>[, <i>arguments…</i>]) [<>](https://github.com/d3/d3-shape/blob/master/src/stack.js#L16 "Source")

根据指定的*data*数组计算一个stack布局，返回一个数组，每个元素都代表一个key值对应的数据序列。

数值的读取是通过[keys accessor](#stack_keys)定义的。比如对于如下数据:


Month   | Apples | Bananas | Cherries | Dates
--------|--------|---------|----------|-------
 1/2015 |   3840 |    1920 |      960 |   400
 2/2015 |   1600 |    1440 |      960 |   400
 3/2015 |    640 |     960 |      640 |   400
 4/2015 |    320 |     480 |      640 |   400

数据表示如下:

```js
var data = [
  {month: new Date(2015, 0, 1), apples: 3840, bananas: 1920, cherries: 960, dates: 400},
  {month: new Date(2015, 1, 1), apples: 1600, bananas: 1440, cherries: 960, dates: 400},
  {month: new Date(2015, 2, 1), apples:  640, bananas:  960, cherries: 640, dates: 400},
  {month: new Date(2015, 3, 1), apples:  320, bananas:  480, cherries: 640, dates: 400}
];
```

使用这些数据生成stack数据:

```js
var stack = d3.stack()
    .keys(["apples", "bananas", "cherries", "dates"])
    .order(d3.stackOrderNone)
    .offset(d3.stackOffsetNone);

var series = stack(data);
```

结果为一个三维数组，最外围表示的是不同的品种，第二层则是不同日期此品种的数量，最内层是[y0,y1],用以表示堆叠时的偏移量


```js
[
  [[   0, 3840], [   0, 1600], [   0,  640], [   0,  320]], // apples
  [[3840, 5760], [1600, 3040], [ 640, 1600], [ 320,  800]], // bananas
  [[5760, 6720], [3040, 4000], [1600, 2240], [ 800, 1440]], // cherries
  [[6720, 7120], [4000, 4400], [2240, 2640], [1440, 1840]], // dates
]
```

每一个品种都可以被传递给[area generator](#areas)来生成一个面积区域，也可以被用来绘制条形图.

<a name="stack_keys" href="#stack_keys">#</a> <i>stack</i>.<b>keys</b>([<i>keys</i>]) [<>](https://github.com/d3/d3-shape/blob/master/src/stack.js#L40 "Source")

设置或获取*keys*访问器，由于可能存在多个属性，因此keys是以数组的形式指定。

<a name="stack_value" href="#stack_value">#</a> <i>stack</i>.<b>value</b>([<i>value</i>]) [<>](https://github.com/d3/d3-shape/blob/master/src/stack.js#L44 "Source")

设置或获取*value*访问器，stack生成器会根据指定的*key*依次读取对应的*value*，默认情况下认为*value*是*key*属性对应的值，也就是以对象属性读取的方式读取*value*值，如果有其他方式，比如数组索引或者value为非数值类型那就需要设置这个访问器，默认为:


```js
function value(d, key) {
  return d[key];
}
```

默认情况下，stack生成器认为输入的数据是对象数组，每个对象中包含的key对应的值都为数值类型。


<a name="stack_order" href="#stack_order">#</a> <i>stack</i>.<b>order</b>([<i>order</i>]) [<>](https://github.com/d3/d3-shape/blob/master/src/stack.js#L48 "Source")

设置或获取堆叠次序。默认使用[stackOrderNone](#stackOrderNone)，也就是安装*keys*的次序设置的。参考[stack orders](#stack-orders)

如果*order*为函数，则函数必须返回一个索引数组表示排序后的顺序，默认的排序定义如下：

```js
function orderNone(series) {
  var n = series.length, o = new Array(n);
  while (--n >= 0) o[n] = n;
  return o;
}
```


<a name="stack_offset" href="#stack_offset">#</a> <i>stack</i>.<b>offset</b>([<i>offset</i>]) [<>](https://github.com/d3/d3-shape/blob/master/src/stack.js#L52 "Source")

设置或获取*offset*. offset表示堆叠类型参考[stack offsets](#stack-offsets).

默认的offset定义如下:

```js
function offsetNone(series, order) {
  if (!((n = series.length) > 1)) return;
  for (var i = 1, s0, s1 = series[order[0]], n, m = s1.length; i < n; ++i) {
    s0 = s1, s1 = series[order[i]];
    for (var j = 0; j < m; ++j) {
      s1[j][1] += s1[j][0] = s0[j][1];
    }
  }
}
```

### Stack Orders

stack排序方法一般不直接使用，而是传递给 [*stack*.order](#stack_order).

<a name="stackOrderAscending" href="#stackOrderAscending">#</a> d3.<b>stackOrderAscending</b>(<i>series</i>) [<>](https://github.com/d3/d3-shape/blob/master/src/order/ascending.js "Source")

最小的值(values之和)位于底部

<a name="stackOrderDescending" href="#stackOrderDescending">#</a> d3.<b>stackOrderDescending</b>(<i>series</i>) [<>](https://github.com/d3/d3-shape/blob/master/src/order/descending.js "Source")

最大的值(values之和)位于底部

<a name="stackOrderInsideOut" href="#stackOrderInsideOut">#</a> d3.<b>stackOrderInsideOut</b>(<i>series</i>) [<>](https://github.com/d3/d3-shape/blob/master/src/order/insideOut.js "Source")

最大的值在内侧，最小的值在外侧，这个是针对河流图的，也就是是朝两边同时堆叠的。参考[wiggle offset](#stackOffsetWiggle)。

<a name="stackOrderNone" href="#stackOrderNone">#</a> d3.<b>stackOrderNone</b>(<i>series</i>) [<>](https://github.com/d3/d3-shape/blob/master/src/order/none.js "Source")

次序是根据*keys*得到的，相当于没有排序。

<a name="stackOrderReverse" href="#stackOrderReverse">#</a> d3.<b>stackOrderReverse</b>(<i>series</i>) [<>](https://github.com/d3/d3-shape/blob/master/src/order/reverse.js "Source")

将原有的*key*序列翻转

### Stack Offsets

stack offset一般不直接使用，而是传递给[*stack*.offset](#stack_offset)。


<a name="stackOffsetExpand" href="#stackOffsetExpand">#</a> d3.<b>stackOffsetExpand</b>(<i>series</i>, <i>order</i>) [<>](https://github.com/d3/d3-shape/blob/master/src/offset/expand.js "Source")

将整个堆叠图放在0-1之间，也就是上边界和下边界都是常量，

<a name="stackOffsetNone" href="#stackOffsetNone">#</a> d3.<b>stackOffsetNone</b>(<i>series</i>, <i>order</i>) [<>](https://github.com/d3/d3-shape/blob/master/src/offset/none.js "Source")


以0为基线

<a name="stackOffsetSilhouette" href="#stackOffsetSilhouette">#</a> d3.<b>stackOffsetSilhouette</b>(<i>series</i>, <i>order</i>) [<>](https://github.com/d3/d3-shape/blob/master/src/offset/silhouette.js "Source")

上下移动基线，使得整个堆叠图的中心位于基线

<a name="stackOffsetWiggle" href="#stackOffsetWiggle">#</a> d3.<b>stackOffsetWiggle</b>(<i>series</i>, <i>order</i>) [<>](https://github.com/d3/d3-shape/blob/master/src/offset/wiggle.js "Source")

做河流图用的，参考 [Stacked Graphs—Geometry & Aesthetics](http://leebyron.com/streamgraph/)
