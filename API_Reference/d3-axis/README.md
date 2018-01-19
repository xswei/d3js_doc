# d3-axis

坐标轴组件可以将[scales](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale)显示为人类友好的刻度标尺参考。减轻了在可视化中的视觉任务。

## Installing

- 使用npm安装，`npm install d3-axis`
- 下载[最新版](https://github.com/d3/d3-axis/releases/latest)文件或者直接从官网引入
- 作为[D3 4.0](https://github.com/d3/d3)的一部分使用

使用下面方式引入时会创建一个`d3`全局变量:

```html
<script src="https://d3js.org/d3-axis.v1.min.js"></script>
<script>

var axis = d3.axisLeft(scale);

</script>
```

[在浏览器中测试d3-axis](https://tonicdev.com/npm/d3-axis)

## API Reference

如论坐标轴的方向如何，都已原点为起点开始渲染。如果要改变坐标轴的位置，则需要通过[变换属性](http://www.w3.org/TR/SVG/coords.html#TransformAttribute)来实现，例如：

```js
d3.select("body").append("svg")
    .attr("width", 1440)
    .attr("height", 30)
  .append("g")
    .attr("transform", "translate(0,30)")
    .call(axis);
```

坐标轴元素的创建是公共API的一部分，你可以自由的设置外部样式或者修改元素来[自定义器表现形式](https://bl.ocks.org/mbostock/3371592)

[<img alt="Custom Axis" src="https://raw.githubusercontent.com/d3/d3-axis/master/img/custom.png" width="420" height="219">](http://bl.ocks.org/mbostock/3371592)

一个坐标轴包含以下几种元素：
- 类名为“domain”的[path元素](https://www.w3.org/TR/SVG/paths.html#PathElement)表示比例尺的输入范围
- 类名为“tick”的[g elements](https://www.w3.org/TR/SVG/struct.html#Groups)表示刻度
- 每个刻度g元素中包含[line element](https://www.w3.org/TR/SVG/shapes.html#LineElement)和[text element](https://www.w3.org/TR/SVG/text.html#TextElement)表示刻度线和文字标签

坐标轴的DOM结构如下：

```html
<g fill="none" font-size="10" font-family="sans-serif" text-anchor="middle">
  <path class="domain" stroke="#000" d="M0.5,6V0.5H880.5V6"></path>
  <g class="tick" opacity="1" transform="translate(0.5,0)">
    <line stroke="#000" y2="6"></line>
    <text fill="#000" y="9" dy="0.71em">0.0</text>
  </g>
  <g class="tick" opacity="1" transform="translate(176.5,0)">
    <line stroke="#000" y2="6"></line>
    <text fill="#000" y="9" dy="0.71em">0.2</text>
  </g>
  <g class="tick" opacity="1" transform="translate(352.5,0)">
    <line stroke="#000" y2="6"></line>
    <text fill="#000" y="9" dy="0.71em">0.4</text>
  </g>
  <g class="tick" opacity="1" transform="translate(528.5,0)">
    <line stroke="#000" y2="6"></line>
    <text fill="#000" y="9" dy="0.71em">0.6</text>
  </g>
  <g class="tick" opacity="1" transform="translate(704.5,0)">
    <line stroke="#000" y2="6"></line>
    <text fill="#000" y="9" dy="0.71em">0.8</text>
  </g>
  <g class="tick" opacity="1" transform="translate(880.5,0)">
    <line stroke="#000" y2="6"></line>
    <text fill="#000" y="9" dy="0.71em">1.0</text>
  </g>
</g>
```

坐标轴的方向是固定的，如果要改变方向，则要移除旧的并重新创建一个新的坐标轴。

<a name="axisTop" href="#axisTop">#</a> d3.<b>axisTop</b>(<i>scale</i>) [<源码>](https://github.com/d3/d3-axis/blob/master/src/axis.js#L159 "Source")

使用给定的[scale](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale)构建一个刻度在上的坐标轴生成器, 默认[tick arguments](#axis_ticks)为空, [tick size](#axis_tickSize)为6， [padding](#axis_tickPadding)为3. 坐标轴为水平方向

<a name="axisRight" href="#axisRight">#</a> d3.<b>axisRight</b>(<i>scale</i>) [<源码>](https://github.com/d3/d3-axis/blob/master/src/axis.js#L163 "Source")

使用给定的[scale](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale)构建一个刻度在上的坐标轴生成器, 默认[tick arguments](#axis_ticks)为空, [tick size](#axis_tickSize)为6， [padding](#axis_tickPadding)为3. 坐标轴为垂直方向

<a name="axisBottom" href="#axisBottom">#</a> d3.<b>axisBottom</b>(<i>scale</i>) [<源码>](https://github.com/d3/d3-axis/blob/master/src/axis.js#L167 "Source")

使用给定的[scale](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale)构建一个刻度在上的坐标轴生成器, 默认[tick arguments](#axis_ticks)为空, [tick size](#axis_tickSize)为6， [padding](#axis_tickPadding)为3. 坐标轴为水平方向

<a name="axisLeft" href="#axisLeft">#</a> d3.<b>axisLeft</b>(<i>scale</i>) [<源码>](https://github.com/d3/d3-axis/blob/master/src/axis.js#L171 "Source")

使用给定的[scale](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale)构建一个刻度在上的坐标轴生成器, 默认[tick arguments](#axis_ticks)为空, [tick size](#axis_tickSize)为6， [padding](#axis_tickPadding)为3. 坐标轴为垂直方向

<a name="_axis" href="#_axis">#</a> <i>axis</i>(<i>context</i>) [<源码>](https://github.com/d3/d3-axis/blob/master/src/axis.js#L40 "Source")

将坐标轴渲染到指定的*context*， *context*可能是一个包含SVG元素的[selection](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-selection)也可能是一个[transition](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-transition).

<a name="axis_scale" href="#axis_scale">#</a> <i>axis</i>.<b>scale</b>([<i>scale</i>]) [<源码>](https://github.com/d3/d3-axis/blob/master/src/axis.js#L120 "Source")

如果指定了*scale*则设置坐标轴的[scale](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale)，如果没有指定*scale*则返回当前坐标轴所使用的比例尺。

<a name="axis_ticks" href="#axis_ticks">#</a> <i>axis</i>.<b>ticks</b>(<i>arguments…</i>) [<源码>](https://github.com/d3/d3-axis/blob/master/src/axis.js#L124 "Source")
<br><a href="#axis_ticks">#</a> <i>axis</i>.<b>ticks</b>([<i>count</i>[, <i>specifier</i>]])
<br><a href="#axis_ticks">#</a> <i>axis</i>.<b>ticks</b>([<i>interval</i>[, <i>specifier</i>]])

在坐标轴[渲染](#_axis)时将传入的*arguments*传递给[*scale*.ticks](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-scale/README.md#axis_ticks) 和 [*scale*.tickFormat](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-scale/blob/master/README.md#continuous_tickFormat)并且返回当前坐标轴生成器. 也就是 *arguments* 依赖 [axis’ scale](#axis_scale): 大多数情况下建议传入一个期望的ticks个数: *count* for the number of ticks (或者当使用时间比例尺时传入 [time *interval*](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-time)), 或者是 [format *specifier*](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-format)定义刻度的展示格式。

这个方法有局限，当使用[band](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-scale/README.md#band-scales) 和 [point](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-scale/README.md#point-scales)比例尺时没有作用，但是[*axis*.tickValues](#axis_tickValues). 和 [*axis*.tickFormat](#axis_tickFormat) 不受比例尺类型限制。

比如当使用国际单位格式并且刻度参考个数为20的线性比例尺:

```js
axis.ticks(20, "s");
```

每隔15分钟生成一个刻度的时间比例尺：

```js
axis.ticks(d3.timeMinute.every(15));
```

这个方法也可以看做是[*axis*.tickArguments](#axis_tickArguments)的简写，例如：

```js
axis.ticks(10);
```

等价于：

```js
axis.tickArguments([10]);
```

<a name="axis_tickArguments" href="#axis_tickArguments">#</a> <i>axis</i>.<b>tickArguments</b>([<i>arguments</i>]) [<源码>](https://github.com/d3/d3-axis/blob/master/src/axis.js#L128 "Source")

如果设置了*arguments*则将其传递给[*scale*.ticks](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-scale/README.md#axis_ticks) 和 [*scale*.tickFormat](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-scale/blob/master/README.md#continuous_tickFormat)并且返回当前坐标轴生成器。也就是 *arguments* 依赖 [axis’ scale](#axis_scale): 大多数情况下建议传入一个期望的ticks个数: *count* for the number of ticks (或者当使用时间比例尺时传入 [time *interval*](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-time)), 或者是 [format *specifier*](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-format)定义刻度的展示格式。

这个方法有局限，当使用[band](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-scale/README.md#band-scales) 和 [point](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-scale/README.md#point-scales)比例尺时没有作用，但是[*axis*.tickValues](#axis_tickValues). 和 [*axis*.tickFormat](#axis_tickFormat) 不受比例尺类型限制。

如果没有指定 *arguments* 则返回当前的tick参数，默认是一个空数组。

比如当使用国际单位格式并且刻度参考个数为20的线性比例尺:

```js
axis.tickArguments([20, "s"]);
```

每隔15分钟生成一个刻度的时间比例尺：

```js
axis.tickArguments([d3.timeMinute.every(15)]);
```

参考 [*axis*.ticks](#axis_ticks).

<a name="axis_tickValues" href="#axis_tickValues">#</a> <i>axis</i>.<b>tickValues</b>([<i>values</i>]) [<源码>](https://github.com/d3/d3-axis/blob/master/src/axis.js#L132 "Source")

If a *values* array is specified, the specified values are used for ticks rather than using the scale’s automatic tick generator. If *values* is null, clears any previously-set explicit tick values and reverts back to the scale’s tick generator. If *values* is not specified, returns the current tick values, which defaults to null. For example, to generate ticks at specific values:

```js
var xAxis = d3.axisBottom(x)
    .tickValues([1, 2, 3, 5, 8, 13, 21]);
```

The explicit tick values take precedent over the tick arguments set by [*axis*.tickArguments](#axis_tickArguments). However, any tick arguments will still be passed to the scale’s [tickFormat](#axis_tickFormat) function if a tick format is not also set.

<a name="axis_tickFormat" href="#axis_tickFormat">#</a> <i>axis</i>.<b>tickFormat</b>([<i>format</i>]) [<源码>](https://github.com/d3/d3-axis/blob/master/src/axis.js#L136 "Source")

If *format* is specified, sets the tick format function and returns the axis. If *format* is not specified, returns the current format function, which defaults to null. A null format indicates that the scale’s default formatter should be used, which is generated by calling [*scale*.tickFormat](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-scale/README.md#continuous_tickFormat). In this case, the arguments specified by [*axis*.tickArguments](#axis_tickArguments) are likewise passed to *scale*.tickFormat.

See [d3-format](https://github.com/d3/d3-format) and [d3-time-format](https://github.com/d3/d3-time-format) for help creating formatters. For example, to display integers with comma-grouping for thousands:

```js
axis.tickFormat(d3.format(",.0f"));
```

More commonly, a format specifier is passed to [*axis*.ticks](#axis_ticks):

```js
axis.ticks(10, ",f");
```

This has the advantage of setting the format precision automatically based on the tick interval.

<a name="axis_tickSize" href="#axis_tickSize">#</a> <i>axis</i>.<b>tickSize</b>([<i>size</i>]) [<源码>](https://github.com/d3/d3-axis/blob/master/src/axis.js#L140 "Source")

If *size* is specified, sets the [inner](#axis_tickSizeInner) and [outer](#axis_tickSizeOuter) tick size to the specified value and returns the axis. If *size* is not specified, returns the current inner tick size, which defaults to 6.

<a name="axis_tickSizeInner" href="#axis_tickSizeInner">#</a> <i>axis</i>.<b>tickSizeInner</b>([<i>size</i>]) [<源码>](https://github.com/d3/d3-axis/blob/master/src/axis.js#L144 "Source")

If *size* is specified, sets the inner tick size to the specified value and returns the axis. If *size* is not specified, returns the current inner tick size, which defaults to 6. The inner tick size controls the length of the tick lines, offset from the native position of the axis.

<a name="axis_tickSizeOuter" href="#axis_tickSizeOuter">#</a> <i>axis</i>.<b>tickSizeOuter</b>([<i>size</i>]) [<源码>](https://github.com/d3/d3-axis/blob/master/src/axis.js#L148 "Source")

If *size* is specified, sets the outer tick size to the specified value and returns the axis. If *size* is not specified, returns the current outer tick size, which defaults to 6. The outer tick size controls the length of the square ends of the domain path, offset from the native position of the axis. Thus, the “outer ticks” are not actually ticks but part of the domain path, and their position is determined by the associated scale’s domain extent. Thus, outer ticks may overlap with the first or last inner tick. An outer tick size of 0 suppresses the square ends of the domain path, instead producing a straight line.

<a name="axis_tickPadding" href="#axis_tickPadding">#</a> <i>axis</i>.<b>tickPadding</b>([<i>padding</i>]) [<源码>](https://github.com/d3/d3-axis/blob/master/src/axis.js#L152 "Source")

If *padding* is specified, sets the padding to the specified value in pixels and returns the axis. If *padding* is not specified, returns the current padding which defaults to 3 pixels.
