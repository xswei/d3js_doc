# d3-axis

axis组件可以将[比例尺](https://github.com/d3/d3-scale)以可读的方式显示.


#### 注
 
axis.tickArguments([a,b])相当于 axis.ticks(a) + axis.tickFormat(b)


## 安装

如果你使用NPM, `npm install d3-axis`. 也下载[最新版](https://github.com/d3/d3-axis/releases/latest). 或者以[独立库](https://d3js.org/d3-axis.v1.min.js) 或[D3 4.0](https://github.com/d3/d3)的一部分的形式从[d3js.org](https://d3js.org)获取. (你可能还需要 [d3-scale](https://github.com/d3/d3-scale)和 [d3-selection](https://github.com/d3/d3-selection),但是这些不是硬性要求). 也支持AMD, CommonJS,和vanilla环境. 在vanilla中, `d3`以如下方式被引入:

```html
<script src="https://d3js.org/d3-axis.v1.min.js"></script>
<script>

var axis = d3.axisLeft(scale);

</script>
```

[在你的浏览器中测试d3-axis](https://tonicdev.com/npm/d3-axis)

## API 参考

无论axis超哪个方向,轴始终被渲染在原点处. 如果需要改变轴的位置,则需要对容器元素使用 [变换属性](http://www.w3.org/TR/SVG/coords.html#TransformAttribute). 例如:

```js
d3.select("body").append("svg")
    .attr("class", "axis")
    .attr("width", 1440)
    .attr("height", 30)
  .append("g")
    .attr("transform", "translate(0,30)")
    .call(axis);
```
一旦被创建，轴的原点也被固定,如果需要改变原点,则需要移除旧的轴并重新创建一个新的轴.

由axis创建的元素是可以通过外部样式表或修改其属性来自定义轴的外观. 轴元素由一个class为"domain"的[path元素](https://www.w3.org/TR/SVG/paths.html#PathElement)来表示比例尺的输入范围, 后面跟随几个经过变换的class为"tick"的[g 元素](https://www.w3.org/TR/SVG/struct.html#Groups)来表示刻度. 每个刻度包含一个[line元素](https://www.w3.org/TR/SVG/shapes.html#LineElement) 来表示刻度线, 和一个[text 元素](https://www.w3.org/TR/SVG/text.html#TextElement) 表示刻度值. 如下为一个典型的bottom-oriented轴:

```html
<g fill="none" font-size="10" font-family="sans-serif" text-anchor="middle">
  <path class="domain" stroke="#000" d="M0.5,6V0.5H880.5V6"></path>
  <g class="tick" opacity="1" transform="translate(0,0)">
    <line stroke="#000" y2="6" x1="0.5" x2="0.5"></line>
    <text fill="#000" y="9" x="0.5" dy=".71em">0.0</text>
  </g>
  <g class="tick" opacity="1" transform="translate(176,0)">
    <line stroke="#000" y2="6" x1="0.5" x2="0.5"></line>
    <text fill="#000" y="9" x="0.5" dy=".71em">0.2</text>
  </g>
  <g class="tick" opacity="1" transform="translate(352,0)">
    <line stroke="#000" y2="6" x1="0.5" x2="0.5"></line>
    <text fill="#000" y="9" x="0.5" dy=".71em">0.4</text>
  </g>
  <g class="tick" opacity="1" transform="translate(528,0)">
    <line stroke="#000" y2="6" x1="0.5" x2="0.5"></line>
    <text fill="#000" y="9" x="0.5" dy=".71em">0.6</text>
  </g>
  <g class="tick" opacity="1" transform="translate(704,0)">
    <line stroke="#000" y2="6" x1="0.5" x2="0.5"></line>
    <text fill="#000" y="9" x="0.5" dy=".71em">0.8</text>
  </g>
  <g class="tick" opacity="1" transform="translate(880,0)">
    <line stroke="#000" y2="6" x1="0.5" x2="0.5"></line>
    <text fill="#000" y="9" x="0.5" dy=".71em">1.0</text>
  </g>
</g>
```


### # d3.axisTop(scale)

根据指定的 [scale](https://github.com/d3/d3-scale)构造一个top-axis, [tick 参数](#axis_ticks)为空, [tick 大小](#axis_tickSize)为 6 并且 [padding](#axis_tickPadding)为 3. 轴在水平方向绘制.

### # d3.axisRight(scale)

根据指定的 [scale](https://github.com/d3/d3-scale)构造一个right-axis, [tick 参数](#axis_ticks)为空, [tick 大小](#axis_tickSize)为 6 并且 [padding](#axis_tickPadding)为 3. 轴在垂直方向绘制.

### # d3.axisBottom(scale)

根据指定的 [scale](https://github.com/d3/d3-scale)构造一个bottom-axis, [tick 参数](#axis_ticks)为空, [tick 大小](#axis_tickSize)为 6 并且 [padding](#axis_tickPadding)为 3. 轴在水平方向绘制.


### # d3.axisLeft(scale)

根据指定的 [scale](https://github.com/d3/d3-scale)构造一个left-axis, [tick 参数](#axis_ticks)为空, [tick 大小](#axis_tickSize)为 6 并且 [padding](#axis_tickPadding)为 3. 轴在垂直方向绘制.

### # axis(context)

将轴渲染到指定的 *context(容器)*, 可以为一个SVG容器的 [选择集](https://github.com/d3/d3-selection) (SVG or G 元素) 或者是 一个[过渡](https://github.com/d3/d3-transition).

### # axis.scale([scale])
如果指定了 *scale* 则设置[比例尺](https://github.com/d3/d3-scale)并返回axis. 如果没有指定 *scale* 则返回当前使用的比例尺.

### # axis.ticks(arguments)
### # axis.ticks([count[,specifier]])
### # axis.ticks([interval[,specifier]])

设置当axis被[渲染](#_axis)时传给 [*scale*.ticks](https://github.com/d3/d3-scale#continuous_ticks) 和 [*scale*.tickFormat](https://github.com/d3/d3-scale#continuous_tickFormat)的*arguments*, 并返回axis生成器.  *arguments* 依赖[axis的比例尺](#axis_scale)类型: 最常见的是, 参数是一个建议的刻度数(或者当为时间比例尺时是一个 [时间间隔](https://github.com/d3/d3-time) ), 或一个[格式化](https://github.com/d3/d3-format)刻度值的操作.

例如,生成一个20个刻度并且刻度使用SI-前缀的刻度时可以如下：

```js
axis.ticks(20, "s");
```

当使用时间比例尺时每隔15分钟一个刻度:

```js
axis.ticks(d3.timeMinute.every(15));
```

这种方法也是一个[*axis*.tickArguments](#axis_tickArguments)的一个简易方式. 比如:


```js
axis.ticks(10);
```

相当于:

```js
axis.tickArguments([10]);
```

### # axis.tickArguments([*arguments*])

如果指定了 *arguments* 则当axis被渲染时将 *arguments* 传给 [*scale*.ticks](https://github.com/d3/d3-scale#continuous_ticks)和 [*scale*.tickFormat](https://github.com/d3/d3-scale#continuous_tickFormat) 并返回axis生成器.  *arguments* 依赖 [axis的比例尺](#axis_scale) 类型: 大多数情况下使用建议的刻度个数(或 [时间间隔](https://github.com/d3/d3-time) ), [format 操作](https://github.com/d3/d3-format)可以用来指定如何对刻度值进行格式化. 这个方法在同时设置 [*axis*.tickValues](#axis_tickValues), 和 [*axis*.tickFormat](#axis_tickFormat)时是很方便的. 如果 *arguments* 没有指定则返回当前的tick参数, 默认为空数组.

例如,生成一个20个刻度并且刻度使用SI-前缀的刻度时可以如下:

```js
axis.tickArguments([20, "s"]);
```

当使用时间比例尺时每隔15分钟一个刻:

```js
axis.tickArguments([d3.timeMinute.every(15)]);
```

这种方法是通过 [*axis*.tickValues](#axis_tickValues)明确设置刻度个数通过 [*axis*.tickFormat](#axis_tickFormat)设置刻度格式的替代品. 可参考 [*axis*.ticks](#axis_ticks).

### # axis.tickValues([*values*])

如果指定了 *values* 数组, 则使用指定的数组设置刻度，而不是自动生成刻度. 如果 *values* 为 null, 则清除当前的tick values参数. 如果没有指定 *values* 则返回当前的tick values参数默认为null. 例如, 使用指定的值设置刻度:

```js
var xAxis = d3.axisBottom(x)
    .tickValues([1, 2, 3, 5, 8, 13, 21]);
```

明确指定刻度值的优先级高于使用 [*axis*.tickArguments](#axis_tickArguments)设置的刻度参数. 然而, 当 [tickFormat](#axis_tickFormat) 没有设置的时候不会对刻度格式进行处理. 

### # axis.tickFormat([*foramt*])

如果指定了 *format* 则设置tick的格式并返回axis. 如果 *format* 没有指定则返回当前的格式化方法, 默认为null. 也就是说不会对刻度进行格式化操作. 当指定了 [*scale*.tickFormat](https://github.com/d3/d3-scale#continuous_tickFormat)时, 下由[*axis*.tickArguments](#axis_tickArguments)传入的参数也会被格式化处理.

参考 [d3-format](https://github.com/d3/d3-format) 和 [d3-time-format](https://github.com/d3/d3-time-format) 来获取关于格式化的相关文档. 例如, 显示逗号分组的1千分位s:

```js
axis.tickFormat(d3.format(",.0f"));
```

更一般的, 也可以将格式化参数传给 [*axis*.ticks](#axis_ticks):

```js
axis.ticks(10, ",f");
```

这个方法在设置时间格式时会很有用.

### # axis.tickSize([*size*])

如果指定了 *size* 则设置 [内侧](#axis_tickSizeInner) 和 [外侧](#axis_tickSizeOuter) 刻度大小并返回axis. 如果 *size* 没有指定则返回当前的刻度尺寸,默认为6.

### # axis.tickSizeInner([*size*])

如果指定了 *size* 则设置内侧的刻度尺寸并返回axis. 如果没有指定 *size* 则返回当前的内侧刻度尺寸大小,默认为6. 


### # axis.tickSizeOuter([*size*])

如果指定了 *size* 则设置外侧的刻度尺寸并返回axis. 如果没有指定 *size* 则返回当前的外侧刻度尺寸大小,默认为6. 事实上外侧的刻度不是真实的刻度,而是输入范围path上的一部分,但是可能会覆盖第一个或最后一个内部刻度,外部刻度尺寸为0时表示输入范围的path为一条直线。

### # axis.tickPadding([*padding*])

padding为刻度和刻度值之间的间距

如果 *padding* 被指定, 则根据指定的值以像素为单位设置padding. 如果没有指定 *padding* 则返回当前的padding值,默认为3.


