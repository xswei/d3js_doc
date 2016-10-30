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

The line generator produces a [spline](https://en.wikipedia.org/wiki/Spline_\(mathematics\)) or [polyline](https://en.wikipedia.org/wiki/Polygonal_chain), as in a line chart. Lines also appear in many other visualization types, such as the links in [hierarchical edge bundling](http://bl.ocks.org/mbostock/7607999).

<a name="line" href="#line">#</a> d3.<b>line</b>() [<>](https://github.com/d3/d3-shape/blob/master/src/line.js "Source")

Constructs a new line generator with the default settings.

<a name="_line" href="#_line">#</a> <i>line</i>(<i>data</i>) [<>](https://github.com/d3/d3-shape/blob/master/src/line.js#L14 "Source")

Generates a line for the given array of *data*. Depending on this line generator’s associated [curve](#line_curve), the given input *data* may need to be sorted by *x*-value before being passed to the line generator. If the line generator has a [context](#line_context), then the line is rendered to this context as a sequence of [path method](http://www.w3.org/TR/2dcontext/#canvaspathmethods) calls and this function returns void. Otherwise, a [path data](http://www.w3.org/TR/SVG/paths.html#PathData) string is returned.

<a name="line_x" href="#line_x">#</a> <i>line</i>.<b>x</b>([<i>x</i>]) [<>](https://github.com/d3/d3-shape/blob/master/src/line.js#L34 "Source")

If *x* is specified, sets the x accessor to the specified function or number and returns this line generator. If *x* is not specified, returns the current x accessor, which defaults to:

```js
function x(d) {
  return d[0];
}
```

When a line is [generated](#_line), the x accessor will be invoked for each [defined](#line_defined) element in the input data array, being passed the element `d`, the index `i`, and the array `data` as three arguments. The default x accessor assumes that the input data are two-element arrays of numbers. If your data are in a different format, or if you wish to transform the data before rendering, then you should specify a custom accessor. For example, if `x` is a [time scale](https://github.com/d3/d3-scale#time-scales) and `y` is a [linear scale](https://github.com/d3/d3-scale#linear-scales):

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

If *y* is specified, sets the y accessor to the specified function or number and returns this line generator. If *y* is not specified, returns the current y accessor, which defaults to:

```js
function y(d) {
  return d[1];
}
```

When a line is [generated](#_line), the y accessor will be invoked for each [defined](#line_defined) element in the input data array, being passed the element `d`, the index `i`, and the array `data` as three arguments. The default y accessor assumes that the input data are two-element arrays of numbers. See [*line*.x](#line_x) for more information.

<a name="line_defined" href="#line_defined">#</a> <i>line</i>.<b>defined</b>([<i>defined</i>]) [<>](https://github.com/d3/d3-shape/blob/master/src/line.js#L42 "Source")

If *defined* is specified, sets the defined accessor to the specified function or boolean and returns this line generator. If *defined* is not specified, returns the current defined accessor, which defaults to:

```js
function defined() {
  return true;
}
```

The default accessor thus assumes that the input data is always defined. When a line is [generated](#_line), the defined accessor will be invoked for each element in the input data array, being passed the element `d`, the index `i`, and the array `data` as three arguments. If the given element is defined (*i.e.*, if the defined accessor returns a truthy value for this element), the [x](#line_x) and [y](#line_y) accessors will subsequently be evaluated and the point will be added to the current line segment. Otherwise, the element will be skipped, the current line segment will be ended, and a new line segment will be generated for the next defined point. As a result, the generated line may have several discrete segments. For example:

[<img src="https://raw.githubusercontent.com/d3/d3-shape/master/img/line-defined.png" width="480" height="250" alt="Line with Missing Data">](http://bl.ocks.org/mbostock/0533f44f2cfabecc5e3a)

Note that if a line segment consists of only a single point, it may appear invisible unless rendered with rounded or square [line caps](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-linecap). In addition, some curves such as [curveCardinalOpen](#curveCardinalOpen) only render a visible segment if it contains multiple points.

<a name="line_curve" href="#line_curve">#</a> <i>line</i>.<b>curve</b>([<i>curve</i>]) [<>](https://github.com/d3/d3-shape/blob/master/src/line.js#L46 "Source")

If *curve* is specified, sets the [curve factory](#curves) and returns this line generator. If *curve* is not specified, returns the current curve factory, which defaults to [curveLinear](#curveLinear).

<a name="line_context" href="#line_context">#</a> <i>line</i>.<b>context</b>([<i>context</i>]) [<>](https://github.com/d3/d3-shape/blob/master/src/line.js#L50 "Source")

If *context* is specified, sets the context and returns this line generator. If *context* is not specified, returns the current context, which defaults to null. If the context is not null, then the [generated line](#_line) is rendered to this context as a sequence of [path method](http://www.w3.org/TR/2dcontext/#canvaspathmethods) calls. Otherwise, a [path data](http://www.w3.org/TR/SVG/paths.html#PathData) string representing the generated line is returned.

<a name="radialLine" href="#radialLine">#</a> d3.<b>radialLine</b>() [<>](https://github.com/d3/d3-shape/blob/master/src/radialLine.js "Source")

<img alt="Radial Line" width="250" height="250" src="https://raw.githubusercontent.com/d3/d3-shape/master/img/line-radial.png">

Constructs a new radial line generator with the default settings. A radial line generator is equivalent to the standard Cartesian [line generator](#line), except the [x](#line_x) and [y](#line_y) accessors are replaced with [angle](#radialLine_angle) and [radius](#radialLine_radius) accessors. Radial lines are always positioned relative to ⟨0,0⟩; use a transform (see: [SVG](http://www.w3.org/TR/SVG/coords.html#TransformAttribute), [Canvas](http://www.w3.org/TR/2dcontext/#transformations)) to change the origin.

<a name="_radialLine" href="#_radialLine">#</a> <i>radialLine</i>(<i>data</i>) [<>](https://github.com/d3/d3-shape/blob/master/src/radialLine.js#L4 "Source")

Equivalent to [*line*](#_line).

<a name="radialLine_angle" href="#radialLine_angle">#</a> <i>radialLine</i>.<b>angle</b>([<i>angle</i>]) [<>](https://github.com/d3/d3-shape/blob/master/src/radialLine.js#L7 "Source")

Equivalent to [*line*.x](#line_x), except the accessor returns the angle in radians, with 0 at -*y* (12 o’clock).

<a name="radialLine_radius" href="#radialLine_radius">#</a> <i>radialLine</i>.<b>radius</b>([<i>radius</i>]) [<>](https://github.com/d3/d3-shape/blob/master/src/radialLine.js#L8 "Source")

Equivalent to [*line*.y](#line_y), except the accessor returns the radius: the distance from the origin ⟨0,0⟩.

<a name="radialLine_defined" href="#radialLine_defined">#</a> <i>radialLine</i>.<b>defined</b>([<i>defined</i>])

Equivalent to [*line*.defined](#line_defined).

<a name="radialLine_curve" href="#radialLine_curve">#</a> <i>radialLine</i>.<b>curve</b>([<i>curve</i>]) [<>](https://github.com/d3/d3-shape/blob/master/src/radialLine.js#L10 "Source")

Equivalent to [*line*.curve](#line_curve). Note that [curveMonotoneX](#curveMonotoneX) or [curveMonotoneY](#curveMonotoneY) are not recommended for radial lines because they assume that the data is monotonic in *x* or *y*, which is typically untrue of radial lines.

<a name="radialLine_context" href="#radialLine_context">#</a> <i>radialLine</i>.<b>context</b>([<i>context</i>])

Equivalent to [*line*.context](#line_context).

### Areas

[<img alt="Area Chart" width="295" height="154" src="https://raw.githubusercontent.com/d3/d3-shape/master/img/area.png">](http://bl.ocks.org/mbostock/3883195)[<img alt="Stacked Area Chart" width="295" height="154" src="https://raw.githubusercontent.com/d3/d3-shape/master/img/area-stacked.png">](http://bl.ocks.org/mbostock/3885211)[<img alt="Difference Chart" width="295" height="154" src="https://raw.githubusercontent.com/d3/d3-shape/master/img/area-difference.png">](http://bl.ocks.org/mbostock/3894205)

The area generator produces an area, as in an area chart. An area is defined by two bounding [lines](#lines), either splines or polylines. Typically, the two lines share the same [*x*-values](#area_x) ([x0](#area_x0) = [x1](#area_x1)), differing only in *y*-value ([y0](#area_y0) and [y1](#area_y1)); most commonly, y0 is defined as a constant representing [zero](http://www.vox.com/2015/11/19/9758062/y-axis-zero-chart). The first line (the <i>topline</i>) is defined by x1 and y1 and is rendered first; the second line (the <i>baseline</i>) is defined by x0 and y0 and is rendered second, with the points in reverse order. With a [curveLinear](#curveLinear) [curve](#area_curve), this produces a clockwise polygon.

<a name="area" href="#area">#</a> d3.<b>area</b>() [<>](https://github.com/d3/d3-shape/blob/master/src/area.js "Source")

Constructs a new area generator with the default settings.

<a name="_area" href="#_area">#</a> <i>area</i>(<i>data</i>) [<>](https://github.com/d3/d3-shape/blob/master/src/area.js#L17 "Source")

Generates an area for the given array of *data*. Depending on this area generator’s associated [curve](#area_curve), the given input *data* may need to be sorted by *x*-value before being passed to the area generator. If the area generator has a [context](#line_context), then the area is rendered to this context as a sequence of [path method](http://www.w3.org/TR/2dcontext/#canvaspathmethods) calls and this function returns void. Otherwise, a [path data](http://www.w3.org/TR/SVG/paths.html#PathData) string is returned.

<a name="area_x" href="#area_x">#</a> <i>area</i>.<b>x</b>([<i>x</i>]) [<>](https://github.com/d3/d3-shape/blob/master/src/area.js#L59 "Source")

If *x* is specified, sets [x0](#area_x0) to *x* and [x1](#area_x1) to null and returns this area generator. If *x* is not specified, returns the current x0 accessor.

<a name="area_x0" href="#area_x0">#</a> <i>area</i>.<b>x0</b>([<i>x</i>]) [<>](https://github.com/d3/d3-shape/blob/master/src/area.js#L63 "Source")

If *x* is specified, sets the x0 accessor to the specified function or number and returns this area generator. If *x* is not specified, returns the current x0 accessor, which defaults to:

```js
function x(d) {
  return d[0];
}
```

When an area is [generated](#_area), the x0 accessor will be invoked for each [defined](#area_defined) element in the input data array, being passed the element `d`, the index `i`, and the array `data` as three arguments. The default x0 accessor assumes that the input data are two-element arrays of numbers. If your data are in a different format, or if you wish to transform the data before rendering, then you should specify a custom accessor. For example, if `x` is a [time scale](https://github.com/d3/d3-scale#time-scales) and `y` is a [linear scale](https://github.com/d3/d3-scale#linear-scales):

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

If *x* is specified, sets the x1 accessor to the specified function or number and returns this area generator. If *x* is not specified, returns the current x1 accessor, which defaults to null, indicating that the previously-computed [x0](#area_x0) value should be reused for the x1 value.

When an area is [generated](#_area), the x1 accessor will be invoked for each [defined](#area_defined) element in the input data array, being passed the element `d`, the index `i`, and the array `data` as three arguments. See [*area*.x0](#area_x0) for more information.

<a name="area_y" href="#area_y">#</a> <i>area</i>.<b>y</b>([<i>y</i>]) [<>](https://github.com/d3/d3-shape/blob/master/src/area.js#L71 "Source")

If *y* is specified, sets [y0](#area_y0) to *y* and [y1](#area_y1) to null and returns this area generator. If *y* is not specified, returns the current y0 accessor.

<a name="area_y0" href="#area_y0">#</a> <i>area</i>.<b>y0</b>([<i>y</i>]) [<>](https://github.com/d3/d3-shape/blob/master/src/area.js#L75 "Source")

If *y* is specified, sets the y0 accessor to the specified function or number and returns this area generator. If *y* is not specified, returns the current y0 accessor, which defaults to:

```js
function y() {
  return 0;
}
```

When an area is [generated](#_area), the y0 accessor will be invoked for each [defined](#area_defined) element in the input data array, being passed the element `d`, the index `i`, and the array `data` as three arguments. See [*area*.x0](#area_x0) for more information.

<a name="area_y1" href="#area_y1">#</a> <i>area</i>.<b>y1</b>([<i>y</i>]) [<>](https://github.com/d3/d3-shape/blob/master/src/area.js#L79 "Source")

If *y* is specified, sets the y1 accessor to the specified function or number and returns this area generator. If *y* is not specified, returns the current y1 accessor, which defaults to:

```js
function y(d) {
  return d[1];
}
```

A null accessor is also allowed, indicating that the previously-computed [y0](#area_y0) value should be reused for the y1 value. When an area is [generated](#_area), the y1 accessor will be invoked for each [defined](#area_defined) element in the input data array, being passed the element `d`, the index `i`, and the array `data` as three arguments. See [*area*.x0](#area_x0) for more information.

<a name="area_defined" href="#area_defined">#</a> <i>area</i>.<b>defined</b>([<i>defined</i>]) [<>](https://github.com/d3/d3-shape/blob/master/src/area.js#L96 "Source")

If *defined* is specified, sets the defined accessor to the specified function or boolean and returns this area generator. If *defined* is not specified, returns the current defined accessor, which defaults to:

```js
function defined() {
  return true;
}
```

The default accessor thus assumes that the input data is always defined. When an area is [generated](#_area), the defined accessor will be invoked for each element in the input data array, being passed the element `d`, the index `i`, and the array `data` as three arguments. If the given element is defined (*i.e.*, if the defined accessor returns a truthy value for this element), the [x0](#area_x0), [x1](#area_x1), [y0](#area_y0) and [y1](#area_y1) accessors will subsequently be evaluated and the point will be added to the current area segment. Otherwise, the element will be skipped, the current area segment will be ended, and a new area segment will be generated for the next defined point. As a result, the generated area may have several discrete segments. For example:

[<img src="https://raw.githubusercontent.com/d3/d3-shape/master/img/area-defined.png" width="480" height="250" alt="Area with Missing Data">](http://bl.ocks.org/mbostock/3035090)

Note that if an area segment consists of only a single point, it may appear invisible unless rendered with rounded or square [line caps](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-linecap). In addition, some curves such as [curveCardinalOpen](#curveCardinalOpen) only render a visible segment if it contains multiple points.

<a name="area_curve" href="#area_curve">#</a> <i>area</i>.<b>curve</b>([<i>curve</i>]) [<>](https://github.com/d3/d3-shape/blob/master/src/area.js#L100 "Source")

If *curve* is specified, sets the [curve factory](#curves) and returns this area generator. If *curve* is not specified, returns the current curve factory, which defaults to [curveLinear](#curveLinear).

<a name="area_context" href="#area_context">#</a> <i>area</i>.<b>context</b>([<i>context</i>]) [<>](https://github.com/d3/d3-shape/blob/master/src/area.js#L104 "Source")

If *context* is specified, sets the context and returns this area generator. If *context* is not specified, returns the current context, which defaults to null. If the context is not null, then the [generated area](#_area) is rendered to this context as a sequence of [path method](http://www.w3.org/TR/2dcontext/#canvaspathmethods) calls. Otherwise, a [path data](http://www.w3.org/TR/SVG/paths.html#PathData) string representing the generated area is returned.

<a name="area_lineX0" href="#area_lineX0">#</a> <i>area</i>.<b>lineX0</b>() [<>](https://github.com/d3/d3-shape/blob/master/src/area.js#L83 "Source")
<br><a name="area_lineY0" href="#area_lineY0">#</a> <i>area</i>.<b>lineY0</b>() [<>](https://github.com/d3/d3-shape/blob/master/src/area.js#L84 "Source")

Returns a new [line generator](#lines) that has this area generator’s current [defined accessor](#area_defined), [curve](#area_curve) and [context](#area_context). The line’s [*x*-accessor](#line_x) is this area’s [*x0*-accessor](#area_x0), and the line’s [*y*-accessor](#line_y) is this area’s [*y0*-accessor](#area_y0).

<a name="area_lineX1" href="#area_lineX1">#</a> <i>area</i>.<b>lineX1</b>() [<>](https://github.com/d3/d3-shape/blob/master/src/area.js#L92 "Source")

Returns a new [line generator](#lines) that has this area generator’s current [defined accessor](#area_defined), [curve](#area_curve) and [context](#area_context). The line’s [*x*-accessor](#line_x) is this area’s [*x1*-accessor](#area_x1), and the line’s [*y*-accessor](#line_y) is this area’s [*y0*-accessor](#area_y0).

<a name="area_lineY1" href="#area_lineY1">#</a> <i>area</i>.<b>lineY1</b>() [<>](https://github.com/d3/d3-shape/blob/master/src/area.js#L88 "Source")

Returns a new [line generator](#lines) that has this area generator’s current [defined accessor](#area_defined), [curve](#area_curve) and [context](#area_context). The line’s [*x*-accessor](#line_x) is this area’s [*x0*-accessor](#area_x0), and the line’s [*y*-accessor](#line_y) is this area’s [*y1*-accessor](#area_y1).

<a name="radialArea" href="#radialArea">#</a> d3.<b>radialArea</b>() [<>](https://github.com/d3/d3-shape/blob/master/src/radialArea.js "Source")

<img alt="Radial Area" width="250" height="250" src="https://raw.githubusercontent.com/d3/d3-shape/master/img/area-radial.png">

Constructs a new radial area generator with the default settings. A radial area generator is equivalent to the standard Cartesian [area generator](#area), except the [x](#area_x) and [y](#area_y) accessors are replaced with [angle](#radialArea_angle) and [radius](#radialArea_radius) accessors. Radial areas are always positioned relative to ⟨0,0⟩; use a transform (see: [SVG](http://www.w3.org/TR/SVG/coords.html#TransformAttribute), [Canvas](http://www.w3.org/TR/2dcontext/#transformations)) to change the origin.

<a name="_radialArea" href="#_radialArea">#</a> <i>radialArea</i>(<i>data</i>)

Equivalent to [*area*](#_area).

<a name="radialArea_angle" href="#radialArea_angle">#</a> <i>radialArea</i>.<b>angle</b>([<i>angle</i>]) [<>](https://github.com/d3/d3-shape/blob/master/src/radialArea.js#L13 "Source")

Equivalent to [*area*.x](#area_x), except the accessor returns the angle in radians, with 0 at -*y* (12 o’clock).

<a name="radialArea_startAngle" href="#radialArea_startAngle">#</a> <i>radialArea</i>.<b>startAngle</b>([<i>angle</i>]) [<>](https://github.com/d3/d3-shape/blob/master/src/radialArea.js#L14 "Source")

Equivalent to [*area*.x0](#area_x0), except the accessor returns the angle in radians, with 0 at -*y* (12 o’clock). Note: typically [angle](#radialArea_angle) is used instead of setting separate start and end angles.

<a name="radialArea_endAngle" href="#radialArea_endAngle">#</a> <i>radialArea</i>.<b>endAngle</b>([<i>angle</i>]) [<>](https://github.com/d3/d3-shape/blob/master/src/radialArea.js#L15 "Source")

Equivalent to [*area*.x1](#area_x1), except the accessor returns the angle in radians, with 0 at -*y* (12 o’clock). Note: typically [angle](#radialArea_angle) is used instead of setting separate start and end angles.

<a name="radialArea_radius" href="#radialArea_radius">#</a> <i>radialArea</i>.<b>radius</b>([<i>radius</i>]) [<>](https://github.com/d3/d3-shape/blob/master/src/radialArea.js#L16 "Source")

Equivalent to [*area*.y](#area_y), except the accessor returns the radius: the distance from the origin ⟨0,0⟩.

<a name="radialArea_innerRadius" href="#radialArea_innerRadius">#</a> <i>radialArea</i>.<b>innerRadius</b>([<i>radius</i>]) [<>](https://github.com/d3/d3-shape/blob/master/src/radialArea.js#L17 "Source")

Equivalent to [*area*.y0](#area_y0), except the accessor returns the radius: the distance from the origin ⟨0,0⟩.

<a name="radialArea_outerRadius" href="#radialArea_outerRadius">#</a> <i>radialArea</i>.<b>outerRadius</b>([<i>radius</i>]) [<>](https://github.com/d3/d3-shape/blob/master/src/radialArea.js#L18 "Source")

Equivalent to [*area*.y1](#area_y1), except the accessor returns the radius: the distance from the origin ⟨0,0⟩.

<a name="radialArea_defined" href="#radialArea_defined">#</a> <i>radialArea</i>.<b>defined</b>([<i>defined</i>])

Equivalent to [*area*.defined](#area_defined).

<a name="radialArea_curve" href="#radialArea_curve">#</a> <i>radialArea</i>.<b>curve</b>([<i>curve</i>]) [<>](https://github.com/d3/d3-shape/blob/master/src/radialArea.js#L24 "Source")

Equivalent to [*area*.curve](#area_curve). Note that [curveMonotoneX](#curveMonotoneX) or [curveMonotoneY](#curveMonotoneY) are not recommended for radial areas because they assume that the data is monotonic in *x* or *y*, which is typically untrue of radial areas.

<a name="radialArea_context" href="#radialArea_context">#</a> <i>radialArea</i>.<b>context</b>([<i>context</i>])

Equivalent to [*line*.context](#line_context).

<a name="radialArea_lineStartAngle" href="#radialArea_lineStartAngle">#</a> <i>radialArea</i>.<b>lineStartAngle</b>() [<>](https://github.com/d3/d3-shape/blob/master/src/radialArea.js#L19 "Source")
<br><a name="radialArea_lineInnerRadius" href="#radialArea_lineInnerRadius">#</a> <i>radialArea</i>.<b>lineInnerRadius</b>() [<>](https://github.com/d3/d3-shape/blob/master/src/radialArea.js#L21 "Source")

Returns a new [radial line generator](#radialLine) that has this radial area generator’s current [defined accessor](#radialArea_defined), [curve](#radialArea_curve) and [context](#radialArea_context). The line’s [angle accessor](#radialLine_angle) is this area’s [start angle accessor](#radialArea_startAngle), and the line’s [radius accessor](#radialLine_radius) is this area’s [inner radius accessor](#radialArea_innerRadius).

<a name="radialArea_lineEndAngle" href="#radialArea_lineEndAngle">#</a> <i>radialArea</i>.<b>lineEndAngle</b>() [<>](https://github.com/d3/d3-shape/blob/master/src/radialArea.js#L20 "Source")

Returns a new [radial line generator](#radialLine) that has this radial area generator’s current [defined accessor](#radialArea_defined), [curve](#radialArea_curve) and [context](#radialArea_context). The line’s [angle accessor](#radialLine_angle) is this area’s [end angle accessor](#radialArea_endAngle), and the line’s [radius accessor](#radialLine_radius) is this area’s [inner radius accessor](#radialArea_innerRadius).

<a name="radialArea_lineOuterRadius" href="#radialArea_lineOuterRadius">#</a> <i>radialArea</i>.<b>lineOuterRadius</b>() [<>](https://github.com/d3/d3-shape/blob/master/src/radialArea.js#L22 "Source")

Returns a new [radial line generator](#radialLine) that has this radial area generator’s current [defined accessor](#radialArea_defined), [curve](#radialArea_curve) and [context](#radialArea_context). The line’s [angle accessor](#radialLine_angle) is this area’s [start angle accessor](#radialArea_startAngle), and the line’s [radius accessor](#radialLine_radius) is this area’s [outer radius accessor](#radialArea_outerRadius).

### Curves

While [lines](#lines) are defined as a sequence of two-dimensional [*x*, *y*] points, and [areas](#areas) are similarly defined by a topline and a baseline, there remains the task of transforming this discrete representation into a continuous shape: *i.e.*, how to interpolate between the points. A variety of curves are provided for this purpose.

Curves are typically not constructed or used directly, instead being passed to [*line*.curve](#line_curve) and [*area*.curve](#area_curve). For example:

```js
var line = d3.line()
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.value); })
    .curve(d3.curveCatmullRom.alpha(0.5));
```

<a name="curveBasis" href="#curveBasis">#</a> d3.<b>curveBasis</b>(<i>context</i>) [<>](https://github.com/d3/d3-shape/blob/master/src/curve/basis.js#L12 "Source")

<img src="https://raw.githubusercontent.com/d3/d3-shape/master/img/basis.png" width="888" height="240" alt="basis">

Produces a cubic [basis spline](https://en.wikipedia.org/wiki/B-spline) using the specified control points. The first and last points are triplicated such that the spline starts at the first point and ends at the last point, and is tangent to the line between the first and second points, and to the line between the penultimate and last points.

<a name="curveBasisClosed" href="#curveBasisClosed">#</a> d3.<b>curveBasisClosed</b>(<i>context</i>) [<>](https://github.com/d3/d3-shape/blob/master/src/curve/basisClosed.js "Source")

<img src="https://raw.githubusercontent.com/d3/d3-shape/master/img/basisClosed.png" width="888" height="240" alt="basisClosed">

Produces a closed cubic [basis spline](https://en.wikipedia.org/wiki/B-spline) using the specified control points. When a line segment ends, the first three control points are repeated, producing a closed loop with C2 continuity.

<a name="curveBasisOpen" href="#curveBasisOpen">#</a> d3.<b>curveBasisOpen</b>(<i>context</i>) [<>](https://github.com/d3/d3-shape/blob/master/src/curve/basisOpen.js "Source")

<img src="https://raw.githubusercontent.com/d3/d3-shape/master/img/basisOpen.png" width="888" height="240" alt="basisOpen">

Produces a cubic [basis spline](https://en.wikipedia.org/wiki/B-spline) using the specified control points. Unlike [basis](#basis), the first and last points are not repeated, and thus the curve typically does not intersect these points.

<a name="curveBundle" href="#curveBundle">#</a> d3.<b>curveBundle</b>(<i>context</i>) [<>](https://github.com/d3/d3-shape/blob/master/src/curve/bundle.js "Source")

<img src="https://raw.githubusercontent.com/d3/d3-shape/master/img/bundle.png" width="888" height="240" alt="bundle">

Produces a straightened cubic [basis spline](https://en.wikipedia.org/wiki/B-spline) using the specified control points, with the spline straightened according to the curve’s [*beta*](#curveBundle_beta), which defaults to 0.85. This curve is typically used in [hierarchical edge bundling](http://bl.ocks.org/mbostock/7607999) to disambiguate connections, as proposed by [Danny Holten](https://www.win.tue.nl/vis1/home/dholten/) in [Hierarchical Edge Bundles: Visualization of Adjacency Relations in Hierarchical Data](https://www.win.tue.nl/vis1/home/dholten/papers/bundles_infovis.pdf). This curve does not implement [*curve*.areaStart](#curve_areaStart) and [*curve*.areaEnd](#curve_areaEnd); it is intended to work with [d3.line](#lines), not [d3.area](#areas).

<a name="curveBundle_beta" href="#curveBundle_beta">#</a> <i>bundle</i>.<b>beta</b>(<i>beta</i>) [<>](https://github.com/d3/d3-shape/blob/master/src/curve/bundle.js#L51 "Source")

Returns a bundle curve with the specified *beta* in the range [0, 1], representing the bundle strength. If *beta* equals zero, a straight line between the first and last point is produced; if *beta* equals one, a standard [basis](#basis) spline is produced. For example:

```js
var line = d3.line().curve(d3.curveBundle.beta(0.5));
```

<a name="curveCardinal" href="#curveCardinal">#</a> d3.<b>curveCardinal</b>(<i>context</i>) [<>](https://github.com/d3/d3-shape/blob/master/src/curve/cardinal.js "Source")

<img src="https://raw.githubusercontent.com/d3/d3-shape/master/img/cardinal.png" width="888" height="240" alt="cardinal">

Produces a cubic [cardinal spline](https://en.wikipedia.org/wiki/Cubic_Hermite_spline#Cardinal_spline) using the specified control points, with one-sided differences used for the first and last piece. The default [tension](#curveCardinal_tension) is 0.

<a name="curveCardinalClosed" href="#curveCardinalClosed">#</a> d3.<b>curveCardinalClosed</b>(<i>context</i>) [<>](https://github.com/d3/d3-shape/blob/master/src/curve/cardinalClosed.js "Source")

<img src="https://raw.githubusercontent.com/d3/d3-shape/master/img/cardinalClosed.png" width="888" height="240" alt="cardinalClosed">

Produces a closed cubic [cardinal spline](https://en.wikipedia.org/wiki/Cubic_Hermite_spline#Cardinal_spline) using the specified control points. When a line segment ends, the first three control points are repeated, producing a closed loop. The default [tension](#curveCardinal_tension) is 0.

<a name="curveCardinalOpen" href="#curveCardinalOpen">#</a> d3.<b>curveCardinalOpen</b>(<i>context</i>) [<>](https://github.com/d3/d3-shape/blob/master/src/curve/cardinalOpen.js "Source")

<img src="https://raw.githubusercontent.com/d3/d3-shape/master/img/cardinalOpen.png" width="888" height="240" alt="cardinalOpen">

Produces a cubic [cardinal spline](https://en.wikipedia.org/wiki/Cubic_Hermite_spline#Cardinal_spline) using the specified control points. Unlike [curveCardinal](#curveCardinal), one-sided differences are not used for the first and last piece, and thus the curve starts at the second point and ends at the penultimate point. The default [tension](#curveCardinal_tension) is 0.

<a name="curveCardinal_tension" href="#curveCardinal_tension">#</a> <i>cardinal</i>.<b>tension</b>(<i>tension</i>) [<>](https://github.com/d3/d3-shape/blob/master/src/curve/cardinalOpen.js#L44 "Source")

Returns a cardinal curve with the specified *tension* in the range [0, 1]. The *tension* determines the length of the tangents: a *tension* of one yields all zero tangents, equivalent to [curveLinear](#curveLinear); a *tension* of zero produces a uniform [Catmull–Rom](#curveCatmullRom) spline. For example:

```js
var line = d3.line().curve(d3.curveCardinal.tension(0.5));
```

<a name="curveCatmullRom" href="#curveCatmullRom">#</a> d3.<b>curveCatmullRom</b>(<i>context</i>) [<>](https://github.com/d3/d3-shape/blob/master/src/curve/catmullRom.js "Source")

<img src="https://raw.githubusercontent.com/d3/d3-shape/master/img/catmullRom.png" width="888" height="240" alt="catmullRom">

Produces a cubic Catmull–Rom spline using the specified control points and the parameter [*alpha*](#catmullRom_alpha), which defaults to 0.5, as proposed by Yuksel et al. in [On the Parameterization of Catmull–Rom Curves](http://www.cemyuksel.com/research/catmullrom_param/), with one-sided differences used for the first and last piece.

<a name="curveCatmullRomClosed" href="#curveCatmullRomClosed">#</a> d3.<b>curveCatmullRomClosed</b>(<i>context</i>) [<>](https://github.com/d3/d3-shape/blob/master/src/curve/catmullRomClosed.js "Source")

<img src="https://raw.githubusercontent.com/d3/d3-shape/master/img/catmullRomClosed.png" width="888" height="330" alt="catmullRomClosed">

Produces a closed cubic Catmull–Rom spline using the specified control points and the parameter [*alpha*](#catmullRom_alpha), which defaults to 0.5, as proposed by Yuksel et al. When a line segment ends, the first three control points are repeated, producing a closed loop.

<a name="curveCatmullRomOpen" href="#curveCatmullRomOpen">#</a> d3.<b>curveCatmullRomOpen</b>(<i>context</i>) [<>](https://github.com/d3/d3-shape/blob/master/src/curve/catmullRomOpen.js "Source")

<img src="https://raw.githubusercontent.com/d3/d3-shape/master/img/catmullRomOpen.png" width="888" height="240" alt="catmullRomOpen">

Produces a cubic Catmull–Rom spline using the specified control points and the parameter [*alpha*](#catmullRom_alpha), which defaults to 0.5, as proposed by Yuksel et al. Unlike [curveCatmullRom](#curveCatmullRom), one-sided differences are not used for the first and last piece, and thus the curve starts at the second point and ends at the penultimate point.

<a name="curveCatmullRom_alpha" href="#curveCatmullRom_alpha">#</a> <i>catmullRom</i>.<b>alpha</b>(<i>alpha</i>) [<>](https://github.com/d3/d3-shape/blob/master/src/curve/catmullRom.js#L83 "Source")

Returns a cubic Catmull–Rom curve with the specified *alpha* in the range [0, 1]. If *alpha* is zero, produces a uniform spline, equivalent to [curveCardinal](#curveCardinal) with a tension of zero; if *alpha* is one, produces a chordal spline; if *alpha* is 0.5, produces a [centripetal spline](https://en.wikipedia.org/wiki/Centripetal_Catmull–Rom_spline). Centripetal splines are recommended to avoid self-intersections and overshoot. For example:

```js
var line = d3.line().curve(d3.curveCatmullRom.alpha(0.5));
```

<a name="curveLinear" href="#curveLinear">#</a> d3.<b>curveLinear</b>(<i>context</i>) [<>](https://github.com/d3/d3-shape/blob/master/src/curve/linear.js "Source")

<img src="https://raw.githubusercontent.com/d3/d3-shape/master/img/linear.png" width="888" height="240" alt="linear">

Produces a polyline through the specified points.

<a name="curveLinearClosed" href="#curveLinearClosed">#</a> d3.<b>curveLinearClosed</b>(<i>context</i>) [<>](https://github.com/d3/d3-shape/blob/master/src/curve/linearClosed.js "Source")

<img src="https://raw.githubusercontent.com/d3/d3-shape/master/img/linearClosed.png" width="888" height="240" alt="linearClosed">

Produces a closed polyline through the specified points by repeating the first point when the line segment ends.

<a name="curveMonotoneX" href="#curveMonotoneX">#</a> d3.<b>curveMonotoneX</b>(<i>context</i>) [<>](https://github.com/d3/d3-shape/blob/master/src/curve/monotone.js#L98 "Source")

<img src="https://raw.githubusercontent.com/d3/d3-shape/master/img/monotoneX.png" width="888" height="240" alt="monotoneX">

Produces a cubic spline that [preserves monotonicity](https://en.wikipedia.org/wiki/Monotone_cubic_interpolation) in *y*, assuming monotonicity in *x*, as proposed by Steffen in [A simple method for monotonic interpolation in one dimension](http://adsabs.harvard.edu/full/1990A%26A...239..443S): “a smooth curve with continuous first-order derivatives that passes through any given set of data points without spurious oscillations. Local extrema can occur only at grid points where they are given by the data, but not in between two adjacent grid points.”

<a name="curveMonotoneY" href="#curveMonotoneY">#</a> d3.<b>curveMonotoneY</b>(<i>context</i>) [<>](https://github.com/d3/d3-shape/blob/master/src/curve/monotone.js#L102 "Source")

<img src="https://raw.githubusercontent.com/d3/d3-shape/master/img/monotoneY.png" width="888" height="240" alt="monotoneY">

Produces a cubic spline that [preserves monotonicity](https://en.wikipedia.org/wiki/Monotone_cubic_interpolation) in *x*, assuming monotonicity in *y*, as proposed by Steffen in [A simple method for monotonic interpolation in one dimension](http://adsabs.harvard.edu/full/1990A%26A...239..443S): “a smooth curve with continuous first-order derivatives that passes through any given set of data points without spurious oscillations. Local extrema can occur only at grid points where they are given by the data, but not in between two adjacent grid points.”

<a name="curveNatural" href="#curveNatural">#</a> d3.<b>curveNatural</b>(<i>context</i>) [<>](https://github.com/d3/d3-shape/blob/master/src/curve/natural.js "Source")

<img src="https://raw.githubusercontent.com/d3/d3-shape/master/img/natural.png" width="888" height="240" alt="natural">

Produces a [natural](https://en.wikipedia.org/wiki/Spline_interpolation) [cubic spline](http://mathworld.wolfram.com/CubicSpline.html) with the second derivative of the spline set to zero at the endpoints.

<a name="curveStep" href="#curveStep">#</a> d3.<b>curveStep</b>(<i>context</i>) [<>](https://github.com/d3/d3-shape/blob/master/src/curve/step.js "Source")

<img src="https://raw.githubusercontent.com/d3/d3-shape/master/img/step.png" width="888" height="240" alt="step">

Produces a piecewise constant function (a [step function](https://en.wikipedia.org/wiki/Step_function)) consisting of alternating horizontal and vertical lines. The *y*-value changes at the midpoint of each pair of adjacent *x*-values.

<a name="curveStepAfter" href="#curveStepAfter">#</a> d3.<b>curveStepAfter</b>(<i>context</i>) [<>](https://github.com/d3/d3-shape/blob/master/src/curve/step.js#L51 "Source")

<img src="https://raw.githubusercontent.com/d3/d3-shape/master/img/stepAfter.png" width="888" height="240" alt="stepAfter">

Produces a piecewise constant function (a [step function](https://en.wikipedia.org/wiki/Step_function)) consisting of alternating horizontal and vertical lines. The *y*-value changes after the *x*-value.

<a name="curveStepBefore" href="#curveStepBefore">#</a> d3.<b>curveStepBefore</b>(<i>context</i>) [<>](https://github.com/d3/d3-shape/blob/master/src/curve/step.js#L47 "Source")

<img src="https://raw.githubusercontent.com/d3/d3-shape/master/img/stepBefore.png" width="888" height="240" alt="stepBefore">

Produces a piecewise constant function (a [step function](https://en.wikipedia.org/wiki/Step_function)) consisting of alternating horizontal and vertical lines. The *y*-value changes before the *x*-value.

### Custom Curves

Curves are typically not used directly, instead being passed to [*line*.curve](#line_curve) and [*area*.curve](#area_curve). However, you can define your own curve implementation should none of the built-in curves satisfy your needs using the following interface. You can also use this low-level interface with a built-in curve type as an alternative to the line and area generators.

<a name="curve_areaStart" href="#curve_areaStart">#</a> <i>curve</i>.<b>areaStart</b>() [<>](https://github.com/d3/d3-shape/blob/master/src/curve/step.js#L7 "Source")

Indicates the start of a new area segment. Each area segment consists of exactly two [line segments](#curve_lineStart): the topline, followed by the baseline, with the baseline points in reverse order.

<a name="curve_areaEnd" href="#curve_areaEnd">#</a> <i>curve</i>.<b>areaEnd</b>() [<>](https://github.com/d3/d3-shape/blob/master/src/curve/step.js#L10 "Source")

Indicates the end of the current area segment.

<a name="curve_lineStart" href="#curve_lineStart">#</a> <i>curve</i>.<b>lineStart</b>() [<>](https://github.com/d3/d3-shape/blob/master/src/curve/step.js#L13 "Source")

Indicates the start of a new line segment. Zero or more [points](#curve_point) will follow.

<a name="curve_lineEnd" href="#curve_lineEnd">#</a> <i>curve</i>.<b>lineEnd</b>() [<>](https://github.com/d3/d3-shape/blob/master/src/curve/step.js#L17 "Source")

Indicates the end of the current line segment.

<a name="curve_point" href="#curve_point">#</a> <i>curve</i>.<b>point</b>(<i>x</i>, <i>y</i>) [<>](https://github.com/d3/d3-shape/blob/master/src/curve/step.js#L22 "Source")

Indicates a new point in the current line segment with the given *x*- and *y*-values.

### Symbols

<a href="#symbolCircle"><img src="https://raw.githubusercontent.com/d3/d3-shape/master/img/circle.png" width="100" height="100"></a><a href="#symbolCross"><img src="https://raw.githubusercontent.com/d3/d3-shape/master/img/cross.png" width="100" height="100"></a><a href="#symbolDiamond"><img src="https://raw.githubusercontent.com/d3/d3-shape/master/img/diamond.png" width="100" height="100"></a><a href="#symbolSquare"><img src="https://raw.githubusercontent.com/d3/d3-shape/master/img/square.png" width="100" height="100"></a><a href="#symbolStar"><img src="https://raw.githubusercontent.com/d3/d3-shape/master/img/star.png" width="100" height="100"></a><a href="#symbolTriangle"><img src="https://raw.githubusercontent.com/d3/d3-shape/master/img/triangle.png" width="100" height="100"><a href="#symbolWye"><img src="https://raw.githubusercontent.com/d3/d3-shape/master/img/wye.png" width="100" height="100"></a>

Symbols provide a categorical shape encoding as is commonly used in scatterplots. Symbols are always centered at ⟨0,0⟩; use a transform (see: [SVG](http://www.w3.org/TR/SVG/coords.html#TransformAttribute), [Canvas](http://www.w3.org/TR/2dcontext/#transformations)) to move the arc to a different position.

<a name="symbol" href="#symbol">#</a> d3.<b>symbol</b>() [<>](https://github.com/d3/d3-shape/blob/master/src/symbol.js "Source")

Constructs a new symbol generator with the default settings.

<a name="_symbol" href="#_symbol">#</a> <i>symbol</i>(<i>arguments</i>…) [<>](https://github.com/d3/d3-shape/blob/master/src/symbol.js#L11 "Source")

Generates a symbol for the given *arguments*. The *arguments* are arbitrary; they are simply propagated to the symbol generator’s accessor functions along with the `this` object. For example, with the default settings, no arguments are needed to produce a circle with area 64 square pixels. If the symbol generator has a [context](#symbol_context), then the symbol is rendered to this context as a sequence of [path method](http://www.w3.org/TR/2dcontext/#canvaspathmethods) calls and this function returns void. Otherwise, a [path data](http://www.w3.org/TR/SVG/paths.html#PathData) string is returned.

<a name="symbol_type" href="#symbol_type">#</a> <i>symbol</i>.<b>type</b>([<i>type</i>]) [<>](https://github.com/d3/d3-shape/blob/master/src/symbol.js#L33 "Source")

If *type* is specified, sets the symbol type to the specified function or symbol type and returns this line generator. If *type* is not specified, returns the current symbol type accessor, which defaults to:

```js
function type() {
  return circle;
}
```

See [symbols](#symbols) for the set of built-in symbol types. To implement a custom symbol type, pass an object that implements [*symbolType*.draw](#symbolType_draw).

<a name="symbol_size" href="#symbol_size">#</a> <i>symbol</i>.<b>size</b>([<i>size</i>]) [<>](https://github.com/d3/d3-shape/blob/master/src/symbol.js#L37 "Source")

If *size* is specified, sets the size to the specified function or number and returns this symbol generator. If *size* is not specified, returns the current size accessor, which defaults to:

```js
function size() {
  return 64;
}
```

Specifying the size as a function is useful for constructing a scatterplot with a size encoding. If you wish to scale the symbol to fit a given bounding box, rather than by area, try [SVG’s getBBox](http://bl.ocks.org/mbostock/3dd515e692504c92ab65).

<a name="symbol_context" href="#symbol_context">#</a> <i>symbol</i>.<b>context</b>([<i>context</i>]) [<>](https://github.com/d3/d3-shape/blob/master/src/symbol.js#L41 "Source")

If *context* is specified, sets the context and returns this symbol generator. If *context* is not specified, returns the current context, which defaults to null. If the context is not null, then the [generated symbol](#_symbol) is rendered to this context as a sequence of [path method](http://www.w3.org/TR/2dcontext/#canvaspathmethods) calls. Otherwise, a [path data](http://www.w3.org/TR/SVG/paths.html#PathData) string representing the generated symbol is returned.

<a name="symbols" href="#symbols">#</a> d3.<b>symbols</b>

An array containing the set of all built-in symbol types: [circle](#symbolCircle), [cross](#symbolCross), [diamond](#symbolDiamond), [square](#symbolSquare), [star](#symbolStar), [triangle](#symbolTriangle), and [wye](#symbolWye). Useful for constructing the range of an [ordinal scale](https://github.com/d3/d3-scale#ordinal-scales) should you wish to use a shape encoding for categorical data.

<a name="symbolCircle" href="#symbolCircle">#</a> d3.<b>symbolCircle</b> [<>](https://github.com/d3/d3-shape/blob/master/src/symbol/circle.js "Source")

The circle symbol type.

<a name="symbolCross" href="#symbolCross">#</a> d3.<b>symbolCross</b> [<>](https://github.com/d3/d3-shape/blob/master/src/symbol/cross.js "Source")

The Greek cross symbol type, with arms of equal length.

<a name="symbolDiamond" href="#symbolDiamond">#</a> d3.<b>symbolDiamond</b> [<>](https://github.com/d3/d3-shape/blob/master/src/symbol/diamond.js "Source")

The rhombus symbol type.

<a name="symbolSquare" href="#symbolSquare">#</a> d3.<b>symbolSquare</b> [<>](https://github.com/d3/d3-shape/blob/master/src/symbol/square.js "Source")

The square symbol type.

<a name="symbolStar" href="#symbolStar">#</a> d3.<b>symbolStar</b> [<>](https://github.com/d3/d3-shape/blob/master/src/symbol/star.js "Source")

The pentagonal star (pentagram) symbol type.

<a name="symbolTriangle" href="#symbolTriangle">#</a> d3.<b>symbolTriangle</b> [<>](https://github.com/d3/d3-shape/blob/master/src/symbol/triangle.js "Source")

The up-pointing triangle symbol type.

<a name="symbolWye" href="#symbolWye">#</a> d3.<b>symbolWye</b> [<>](https://github.com/d3/d3-shape/blob/master/src/symbol/wye.js "Source")

The Y-shape symbol type.

### Custom Symbol Types

Symbol types are typically not used directly, instead being passed to [*symbol*.type](#symbol_type). However, you can define your own sumbol type implementation should none of the built-in types satisfy your needs using the following interface. You can also use this low-level interface with a built-in symbol type as an alternative to the symbol generator.

<a name="symbolType_draw" href="#symbolType_draw">#</a> <i>symbolType</i>.<b>draw</b>(<i>context</i>, <i>size</i>)

Renders this symbol type to the specified *context* with the specified *size* in square pixels. The *context* implements the [CanvasPathMethods](http://www.w3.org/TR/2dcontext/#canvaspathmethods) interface. (Note that this is a subset of the CanvasRenderingContext2D interface!)

### Stacks

[<img alt="Stacked Bar Chart" src="https://raw.githubusercontent.com/d3/d3-shape/master/img/stacked-bar.png" width="295" height="154">](http://bl.ocks.org/mbostock/3886208)[<img alt="Streamgraph" src="https://raw.githubusercontent.com/d3/d3-shape/master/img/stacked-stream.png" width="295" height="154">](http://bl.ocks.org/mbostock/4060954)

Some shape types can be stacked, placing one shape adjacent to another. For example, a bar chart of monthly sales might be broken down into a multi-series bar chart by product category, stacking bars vertically. This is equivalent to subdividing a bar chart by an ordinal dimension (such as product category) and applying a color encoding.

Stacked charts can show overall value and per-category value simultaneously; however, it is typically harder to compare across categories, as only the bottom layer of the stack is aligned. So, chose the [stack order](#stack_order) carefully, and consider a [streamgraph](#stackOffsetWiggle). (See also [grouped charts](http://bl.ocks.org/mbostock/3887051).)

Like the [pie generator](#pies), the stack generator does not produce a shape directly. Instead it computes positions which you can then pass to an [area generator](#areas) or use directly, say to position bars.

<a name="stack" href="#stack">#</a> d3.<b>stack</b>() [<>](https://github.com/d3/d3-shape/blob/master/src/stack.js "Source")

Constructs a new stack generator with the default settings.

<a name="_stack" href="#_stack">#</a> <i>stack</i>(<i>data</i>[, <i>arguments…</i>]) [<>](https://github.com/d3/d3-shape/blob/master/src/stack.js#L16 "Source")

Generates a stack for the given array of *data*, returning an array representing each series. Any additional *arguments* are arbitrary; they are simply propagated to accessors along with the `this` object.

The series are determined by the [keys accessor](#stack_keys); each series *i* in the returned array corresponds to the *i*th key. Each series is an array of points, where each point *j* corresponds to the *j*th element in the input *data*. Lastly, each point is represented as an array [*y0*, *y1*] where *y0* is the lower value (baseline) and *y1* is the upper value (topline); the difference between *y0* and *y1* corresponds to the computed [value](#stack_value) for this point. The key for each series is available as *series*.key, and the [index](#stack_order) as *series*.index. The input data element for each point is available as *point*.data.

For example, consider the following table representing monthly sales of fruits:

Month   | Apples | Bananas | Cherries | Dates
--------|--------|---------|----------|-------
 1/2015 |   3840 |    1920 |      960 |   400
 2/2015 |   1600 |    1440 |      960 |   400
 3/2015 |    640 |     960 |      640 |   400
 4/2015 |    320 |     480 |      640 |   400

This might be represented in JavaScript as an array of objects:

```js
var data = [
  {month: new Date(2015, 0, 1), apples: 3840, bananas: 1920, cherries: 960, dates: 400},
  {month: new Date(2015, 1, 1), apples: 1600, bananas: 1440, cherries: 960, dates: 400},
  {month: new Date(2015, 2, 1), apples:  640, bananas:  960, cherries: 640, dates: 400},
  {month: new Date(2015, 3, 1), apples:  320, bananas:  480, cherries: 640, dates: 400}
];
```

To produce a stack for this data:

```js
var stack = d3.stack()
    .keys(["apples", "bananas", "cherries", "dates"])
    .order(d3.stackOrderNone)
    .offset(d3.stackOffsetNone);

var series = stack(data);
```

The resulting array has one element per *series*. Each series has one point per month, and each point has a lower and upper value defining the baseline and topline:

```js
[
  [[   0, 3840], [   0, 1600], [   0,  640], [   0,  320]], // apples
  [[3840, 5760], [1600, 3040], [ 640, 1600], [ 320,  800]], // bananas
  [[5760, 6720], [3040, 4000], [1600, 2240], [ 800, 1440]], // cherries
  [[6720, 7120], [4000, 4400], [2240, 2640], [1440, 1840]], // dates
]
```

Each series in then typically passed to an [area generator](#areas) to render an area chart, or used to construct rectangles for a bar chart.

<a name="stack_keys" href="#stack_keys">#</a> <i>stack</i>.<b>keys</b>([<i>keys</i>]) [<>](https://github.com/d3/d3-shape/blob/master/src/stack.js#L40 "Source")

If *keys* is specified, sets the keys accessor to the specified function or array and returns this stack generator. If *keys* is not specified, returns the current keys accessor, which defaults to the empty array. A series (layer) is [generated](#_stack) for each key. Keys are typically strings, but they may be arbitrary values. The series’ key is passed to the [value accessor](#stack_value), along with each data point, to compute the point’s value.

<a name="stack_value" href="#stack_value">#</a> <i>stack</i>.<b>value</b>([<i>value</i>]) [<>](https://github.com/d3/d3-shape/blob/master/src/stack.js#L44 "Source")

If *value* is specified, sets the value accessor to the specified function or number and returns this stack generator. If *value* is not specified, returns the current value accessor, which defaults to:

```js
function value(d, key) {
  return d[key];
}
```

Thus, by default the stack generator assumes that the input data is an array of objects, with each object exposing named properties with numeric values; see [*stack*](#_stack) for an example.

<a name="stack_order" href="#stack_order">#</a> <i>stack</i>.<b>order</b>([<i>order</i>]) [<>](https://github.com/d3/d3-shape/blob/master/src/stack.js#L48 "Source")

If *order* is specified, sets the order accessor to the specified function or array and returns this stack generator. If *order* is not specified, returns the current order acccesor, which defaults to [stackOrderNone](#stackOrderNone); this uses the order given by the [key accessor](#stack_key). See [stack orders](#stack-orders) for the built-in orders.

If *order* is a function, it is passed the generated series array and must return an array of numeric indexes representing the stack order. For example, the default order is defined as:

```js
function orderNone(series) {
  var n = series.length, o = new Array(n);
  while (--n >= 0) o[n] = n;
  return o;
}
```

The stack order is computed prior to the [offset](#stack_offset); thus, the lower value for all points is zero at the time the order is computed. The index attribute for each series is also not set until after the order is computed.

<a name="stack_offset" href="#stack_offset">#</a> <i>stack</i>.<b>offset</b>([<i>offset</i>]) [<>](https://github.com/d3/d3-shape/blob/master/src/stack.js#L52 "Source")

If *offset* is specified, sets the offset accessor to the specified function or array and returns this stack generator. If *offset* is not specified, returns the current offset acccesor, which defaults to [stackOffsetNone](#stackOffsetNone); this uses a zero baseline. See [stack offsets](#stack-offsets) for the built-in offsets.

If *offset* is a function, it is passed the generated series array and the order index array. The offset function is then responsible for updating the lower and upper values in the series array to layout the stack. For example, the default offset is defined as:

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

Stack orders are typically not used directly, but are instead passed to [*stack*.order](#stack_order).

<a name="stackOrderAscending" href="#stackOrderAscending">#</a> d3.<b>stackOrderAscending</b>(<i>series</i>) [<>](https://github.com/d3/d3-shape/blob/master/src/order/ascending.js "Source")

Returns a series order such that the smallest series (according to the sum of values) is at the bottom.

<a name="stackOrderDescending" href="#stackOrderDescending">#</a> d3.<b>stackOrderDescending</b>(<i>series</i>) [<>](https://github.com/d3/d3-shape/blob/master/src/order/descending.js "Source")

Returns a series order such that the largest series (according to the sum of values) is at the bottom.

<a name="stackOrderInsideOut" href="#stackOrderInsideOut">#</a> d3.<b>stackOrderInsideOut</b>(<i>series</i>) [<>](https://github.com/d3/d3-shape/blob/master/src/order/insideOut.js "Source")

Returns a series order such that the larger series (according to the sum of values) are on the inside and the smaller series are on the outside. This order is recommended for streamgraphs in conjunction with the [wiggle offset](#stackOffsetWiggle). See [Stacked Graphs—Geometry & Aesthetics](http://leebyron.com/streamgraph/) by Bryon & Wattenberg for more information.

<a name="stackOrderNone" href="#stackOrderNone">#</a> d3.<b>stackOrderNone</b>(<i>series</i>) [<>](https://github.com/d3/d3-shape/blob/master/src/order/none.js "Source")

Returns the given series order [0, 1, … *n* - 1] where *n* is the number of elements in *series*. Thus, the stack order is given by the [key accessor](#stack_keys).

<a name="stackOrderReverse" href="#stackOrderReverse">#</a> d3.<b>stackOrderReverse</b>(<i>series</i>) [<>](https://github.com/d3/d3-shape/blob/master/src/order/reverse.js "Source")

Returns the reverse of the given series order [*n* - 1, *n* - 2, … 0] where *n* is the number of elements in *series*. Thus, the stack order is given by the reverse of the [key accessor](#stack_keys).

### Stack Offsets

Stack offsets are typically not used directly, but are instead passed to [*stack*.offset](#stack_offset).

<a name="stackOffsetExpand" href="#stackOffsetExpand">#</a> d3.<b>stackOffsetExpand</b>(<i>series</i>, <i>order</i>) [<>](https://github.com/d3/d3-shape/blob/master/src/offset/expand.js "Source")

Applies a zero baseline and normalizes the values for each point such that the topline is always one.

<a name="stackOffsetNone" href="#stackOffsetNone">#</a> d3.<b>stackOffsetNone</b>(<i>series</i>, <i>order</i>) [<>](https://github.com/d3/d3-shape/blob/master/src/offset/none.js "Source")

Applies a zero baseline.

<a name="stackOffsetSilhouette" href="#stackOffsetSilhouette">#</a> d3.<b>stackOffsetSilhouette</b>(<i>series</i>, <i>order</i>) [<>](https://github.com/d3/d3-shape/blob/master/src/offset/silhouette.js "Source")

Shifts the baseline down such that the center of the streamgraph is always at zero.

<a name="stackOffsetWiggle" href="#stackOffsetWiggle">#</a> d3.<b>stackOffsetWiggle</b>(<i>series</i>, <i>order</i>) [<>](https://github.com/d3/d3-shape/blob/master/src/offset/wiggle.js "Source")

Shifts the baseline so as to minimize the weighted wiggle of layers. This offset is recommended for streamgraphs in conjunction with the [inside-out order](#stackOrderInsideOut). See [Stacked Graphs—Geometry & Aesthetics](http://leebyron.com/streamgraph/) by Bryon & Wattenberg for more information.
