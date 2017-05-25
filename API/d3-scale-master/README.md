# d3-scale

比例尺在可视化中实现了一个基本的功能：将抽象的数据转换为可表示的视觉元素。经常使用位置来表达数据信息，比如将数据中的米映射为像素，比例尺可以方便的完成视觉转码，比如颜色，边线宽度或者符号尺寸等。

对于 [continuous(连续性数据)](#continuous-scales)，常常使用线性

对于 [continuous(连续性)](#continuous-scales) 数据，通常要使用 [linear scale](#linear-scales). 或 [time scale](#time-scales).) ，如果有需要，你也可以使用 [power](#power-scales) 或 [log](#log-scales) 比例尺. [quantize scale(量化)](#quantize-scales) 比例尺可以对连续的数据进行四舍五入，将其分割成离散的值; 同样 [quantile scale(分位数)](#quantile-scales) 可以计算出总体样本的分位数, [threshold scale](#threshold-scales)允许对连续的数据区间进行任意分割. 还有一些其他内建的比例尺，比如[sequential color schemes](#sequential-scales) ; 具体参考 [d3-scale-chromatic](https://github.com/d3/d3-scale-chromatic) .


对于离散的数据，比如序数或颜色值数据，[ordinal scale](#ordinal-scales) 可以将离散的一组数据映射到对应的一组值上，比如颜色等。提供了 [band](#band-scales) 和 [point](#point-scales)两种比例尺，来对离散数据进行映射. 还有其他内建的序数比例尺，比如[categorical color scales](#category-scales) .

比例尺本身没有固定的可视化表现形式。大多数比例尺可以自动[generate](#continuous_ticks) 和 [format](#continuous_tickFormat) 刻度来表示所生成轴上的标识.

更多的介绍，可以参考以下教程:

* [Introducing d3-scale](https://medium.com/@mbostock/introducing-d3-scale-61980c51545f) by Mike Bostock

* [Chapter 7. Scales](http://chimera.labs.oreilly.com/books/1230000000345/ch07.html) of *Interactive Data Visualization for the Web* by Scott Murray

* [d3: scales, and color.](http://www.jeromecukier.net/blog/2011/08/11/d3-scales-and-color/) by Jérôme Cukier

## Installing

NPM等安装方法略

```html
<script src="https://d3js.org/d3-array.v1.min.js"></script>
<script src="https://d3js.org/d3-collection.v1.min.js"></script>
<script src="https://d3js.org/d3-color.v1.min.js"></script>
<script src="https://d3js.org/d3-format.v1.min.js"></script>
<script src="https://d3js.org/d3-interpolate.v1.min.js"></script>
<script src="https://d3js.org/d3-time.v1.min.js"></script>
<script src="https://d3js.org/d3-time-format.v2.min.js"></script>
<script src="https://d3js.org/d3-scale.v1.min.js"></script>
<script>

var x = d3.scaleLinear();

</script>
```

(如果你使用 [d3.scaleTime](#scaleTime) 或 [d3.scaleUtc](#scaleUtc) 则可以忽略d3-time和d3-time-format两个模块.)

[Try d3-scale in your browser.](https://tonicdev.com/npm/d3-scale)

## API Reference

* [Continuous(连续型)](#continuous-scales) ([Linear](#linear-scales), [Power](#power-scales), [Log](#log-scales), [Identity](#identity-scales), [Time](#time-scales))
* [Sequential(有序)](#sequential-scales)
* [Quantize(量化)](#quantize-scales)
* [Quantile(分位数)](#quantile-scales)
* [Threshold(阈值)](#threshold-scales)
* [Ordinal(序数型)](#ordinal-scales) ([Band](#band-scales), [Point](#point-scales), [Category](#category-scales))

### Continuous Scales

Continuous 是一个统称，描述的是同一类比例尺，具体的使用要通过[linear](#linear-scales), [power](#power-scales), [log](#log-scales), [identity](#identity-scales), [time](#time-scales) 或 [sequential color](#sequential-scales) 来创建。

连续型比例尺可以将连续的，可量化的输入 [domain](#continuous_domain) 映射到另一个一个连续区间 [range](#continuous_range).如果 range 也是数值类型，则映射可以 [inverted(逆计算)](#continuous_invert). 连续比例尺不会直接创建，而是使用 [linear](#linear-scales), [power](#power-scales), [log](#log-scales), [identity](#identity-scales), [time](#time-scales) 或 [sequential color](#sequential-scales) 来创建.

<a name="_continuous" href="#_continuous">#</a> <i>continuous</i>(<i>value</i>) [<>](https://github.com/d3/d3-scale/blob/master/src/continuous.js#L69 "Source")

给定[domain](#continuous_domain)范围中的一个*value*， 返回对应的[range](#continuous_range)中的值。如果*value*超过了*domain*范围并且[clamping](#continuous_clamp)没有设置，则返回的*value*也会超出设置的范围。例如:

```js
var x = d3.scaleLinear()
    .domain([10, 130])
    .range([0, 960]);

x(20); // 80
x(50); // 320
```

将其应用于颜色编码:

```js
var color = d3.scaleLinear()
    .domain([10, 100])
    .range(["brown", "steelblue"]);

color(20); // "#9a3439"
color(50); // "#7b5167"
```

<a name="continuous_invert" href="#continuous_invert">#</a> <i>continuous</i>.<b>invert</b>(<i>value</i>) [<>](https://github.com/d3/d3-scale/blob/master/src/continuous.js#L88 "Source")

给定一个[range](#continuous_range)范围内的*value*, 返回对应的[domain](#continuous_domain)中的值，相当于比例尺的逆计算。逆计算在交互中是很有用的，比如根据鼠标的位置计算对应的数据值。例如:

```js
var x = d3.scaleLinear()
    .domain([10, 130])
    .range([0, 960]);

x.invert(80); // 20
x.invert(320); // 50
```

如果给定的*value*超过了预设值的range，并且没有启用[clamping](#continuous_clamp) 则会正确返回domain值，但是也是超出预设值的domain范围。逆计算只支持数值计算，如果range是非数值类型的，则返回NaN.

因为浮点类型精度的限制所以逆计算是近似的。

<a name="continuous_domain" href="#continuous_domain">#</a> <i>continuous</i>.<b>domain</b>([<i>domain</i>]) [<>](https://github.com/d3/d3-scale/blob/master/src/continuous.js#L92 "Source")

如果指定了*domain*,则设置比例尺的domain为指定的数组。domain数组比如有两个或两个以上的元素。如果给定的数组元素非数值，则将其强制转换为数值类型。如果没有指定*domain*则返回当前的domain。

一般情况下，domain和range都会设置两个值，表示起止范围。如果指定了多个值的话，会创建一个分段的比例尺。例如，创建一个负值在白色和红色之间插值，正值在白色和绿色之间插值的比例尺:

```js
var color = d3.scaleLinear()
    .domain([-1, 0, 1])
    .range(["red", "white", "green"]);

color(-0.5); // "rgb(255, 128, 128)"
color(+0.5); // "rgb(128, 192, 128)"
```

在内部，分段比例尺使用[binary search(二分查找)](https://github.com/d3/d3-array#bisect)对给定domain和range进行查找。也就是说domain必须有序。如果domain和range的长度不同，分别为 *N* 和 *M*，那么取小的那一个。


<a name="continuous_range" href="#continuous_range">#</a> <i>continuous</i>.<b>range</b>([<i>range</i>]) [<>](https://github.com/d3/d3-scale/blob/master/src/continuous.js#L96 "Source")

如果指定了*range*则将比例尺的输出范围设置为range，给定的数组元素必须大于等于2个。和 [domain](#continuous_domain)不同，range的数组元素不一定为数值类型。任何支持[interpolator](#continuous_interpolate)都可以使用。要注意，如果要使用[invert](#continuous_invert) 那range的元素要为数值类型。如果没有指定 *range*则返回当前的range. 参考[*continuous*.interpolate](#continuous_interpolate) 获取更多信息.

<a name="continuous_rangeRound" href="#continuous_rangeRound">#</a> <i>continuous</i>.<b>rangeRound</b>([<i>range</i>]) [<>](https://github.com/d3/d3-scale/blob/master/src/continuous.js#L100 "Source")

将比例尺的[*range*](#continuous_range) 设置为指定的数组。与*countinuous.range([range])*的插值方式不同,等于将比例尺的插值方式由 [interpolator](#continuous_interpolate) 设置为 [interpolateRound](https://github.com/d3/d3-interpolate#interpolateRound). 与以下设置方式等价:

```js
continuous
    .range(range)
    .interpolate(d3.interpolateRound);
```

取整的插值方式有时候在避免锯齿方面是有效的。当然也可以使用 [shape-rendering](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering)的 “crispEdges” 样式来进行反锯齿. 要注意这种插值方式只支持数值类型.

<a name="continuous_clamp" href="#continuous_clamp">#</a> <i>continuous</i>.<b>clamp</b>(<i>clamp</i>) [<>](https://github.com/d3/d3-scale/blob/master/src/continuous.js#L104 "Source")

如果指定了*clamp*,则启用或禁用clamp操作。clmap操作用来规定当输入数据超出domain或range时要如何计算。如果设置为true，那么当输入值超过domain时，输出值不会超出预定义的range范围。默认为false。例如:

```js
var x = d3.scaleLinear()
    .domain([10, 130])
    .range([0, 960]);

x(-10); // -160, outside range
x.invert(-160); // -10, outside domain

x.clamp(true);
x(-10); // 0, clamped to range
x.invert(-160); // 10, clamped to domain
```

如果没有指定，则返回当前的clmap设置。

<a name="continuous_interpolate" href="#continuous_interpolate">#</a> <i>continuous</i>.<b>interpolate</b>(<i>interpolate</i>) [<>](https://github.com/d3/d3-scale/blob/master/src/continuous.js#L108 "Source")

如果指定了*interpolate* ，则设置比例尺[range](#continuous_range)的插值方式。插值方式会应用到每个比例尺片段(可能有多个片段)。这些插值方式会将domain映射到[0,1]之间，那么domain和range之间就通过[0,1]关联起来。然后根据插值器计算domain在[0,1]上对应的值，然后根据插值器计算这个值对应的range值。

例如，range为三个值的颜色比例尺:

```js
var color = d3.scaleLinear()
    .domain([-100, 0, +100])
    .range(["red", "white", "green"]);
```

这个比例尺会在内部创建两个插值器:

```js
var i0 = d3.interpolate("red", "white"),
    i1 = d3.interpolate("white", "green");
```

自定义插值器是常用的颜色插值方式,比如使用[HCL](https://github.com/d3/d3-interpolate#interpolateHcl)来进行插值:

```js
var color = d3.scaleLinear()
    .domain([10, 100])
    .range(["brown", "steelblue"])
    .interpolate(d3.interpolateHcl);
```

或者使用指定了 *gamma* 参数的[Cubehelix](https://github.com/d3/d3-interpolate#interpolateCubehelix):

```js
var color = d3.scaleLinear()
    .domain([10, 100])
    .range(["brown", "steelblue"])
    .interpolate(d3.interpolateCubehelix.gamma(3));
```


<a name="continuous_ticks" href="#continuous_ticks">#</a> <i>continuous</i>.<b>ticks</b>([<i>count</i>])

返回*count*个元素的数组，数组的取值是在domain中获。*count*是个参考值，使用时可能会做出调整。

<a name="continuous_tickFormat" href="#continuous_tickFormat">#</a> <i>continuous</i>.<b>tickFormat</b>([<i>count</i>[, <i>specifier</i>]]) [<>](https://github.com/d3/d3-scale/blob/master/src/tickFormat.js "Source")

返回一个[number format(格式化)](https://github.com/d3/d3-format)刻度显示方法，能对刻度进行格式转换。*count*应该根据实际的刻度值格式设置。

可选的 *specifier(说明符)* 可以对值进行[custom format(格式化)](https://github.com/d3/d3-format#locale_format) . 例如，将数字格式化为百分比类型:

```js
var x = d3.scaleLinear()
    .domain([-1, 1])
    .range([0, 960]);

var ticks = x.ticks(5),
    tickFormat = x.tickFormat(5, "+%");

ticks.map(tickFormat); // ["-100%", "-50%", "+0%", "+50%", "+100%"]
```


<a name="continuous_nice" href="#continuous_nice">#</a> <i>continuous</i>.<b>nice</b>([<i>count</i>]) [<>](https://github.com/d3/d3-scale/blob/master/src/nice.js "Source")

对[domain](#continuous_domain) 进行适当的扩展，以使其起始值是一个“整数”。当然如果本来就是整的，那就不做任何变化。比如如果你设置的domain为[0.201479…, 0.996679…], 在进行nice操作后就成了 [0.2, 1.0]. 如果domain有多个值，则只对第一个和最后一个进行取整操作.

<a name="continuous_copy" href="#continuous_copy">#</a> <i>continuous</i>.<b>copy</b>() [<>](https://github.com/d3/d3-scale/blob/master/src/continuous.js#L59 "Source")

返回当前比例尺一个精确的拷贝。原比例尺和返回的比例尺之间互不影响。

#### Linear Scales

<a name="scaleLinear" href="#scaleLinear">#</a> d3.<b>scaleLinear</b>() [<>](https://github.com/d3/d3-scale/blob/master/src/linear.js "Source")

创建一个默认的线性比例尺。[domain](#continuous_domain) 默认为 [0, 1], [range](#continuous_range) 默认为 [0, 1], 默认的插值类型为 [interpolator](#continuous_interpolate), 默认[clamping](#continuous_clamp) 不启用.

#### Power Scales

指数比例尺与线性比例尺类似，但是计算方法不同，比如对于*x*,计算对应*y*的方法为 *y* = *mx^k* + *b*, *k* is the [exponent(指数)](#pow_exponent).

<a name="scalePow" href="#scalePow">#</a> d3.<b>scalePow</b>() [<>](https://github.com/d3/d3-scale/blob/master/src/pow.js "Source")

创建一个默认的指数比例尺。默认的 [domain](#continuous_domain) 为 [0, 1], [range](#continuous_range) 为 [0, 1], [exponent](#pow_exponent) 1.

<a name="pow" href="#_pow">#</a> <i>pow</i>(<i>value</i>) [<>](https://github.com/d3/d3-scale/blob/master/src/pow.js#L9 "Source")

参考 [*continuous*](#_continuous).

<a name="pow_invert" href="#pow_invert">#</a> <i>pow</i>.<b>invert</b>(<i>value</i>)

参考 [*continuous*.invert](#continuous_invert).

<a name="pow_exponent" href="#pow_exponent">#</a> <i>pow</i>.<b>exponent</b>([<i>exponent</i>]) [<>](https://github.com/d3/d3-scale/blob/master/src/pow.js#L25 "Source")

If *exponent* is specified, sets the current exponent to the given numeric value. If *exponent* is not specified, returns the current exponent, which defaults to 1. (Note that this is effectively a [linear](#linear-scales) scale until you set a different exponent.)

<a name="pow_domain" href="#pow_domain">#</a> <i>pow</i>.<b>domain</b>([<i>domain</i>])

参考 [*continuous*.domain](#continuous_domain).

<a name="pow_range" href="#pow_range">#</a> <i>pow</i>.<b>range</b>([<i>range</i>])

参考 [*continuous*.range](#continuous_range).

<a name="pow_rangeRound" href="#pow_rangeRound">#</a> <i>pow</i>.<b>rangeRound</b>([<i>range</i>])

参考 [*continuous*.rangeRound](#continuous_rangeRound).

<a name="pow_clamp" href="#pow_clamp">#</a> <i>pow</i>.<b>clamp</b>(<i>clamp</i>)

参考 [*continuous*.clamp](#continuous_clamp).

<a name="pow_interpolate" href="#pow_interpolate">#</a> <i>pow</i>.<b>interpolate</b>(<i>interpolate</i>)

参考 [*continuous*.interpolate](#continuous_interpolate).

<a name="pow_ticks" href="#pow_ticks">#</a> <i>pow</i>.<b>ticks</b>([<i>count</i>])

参考 [*continuous*.ticks](#continuous_ticks).

<a name="pow_tickFormat" href="#pow_tickFormat">#</a> <i>pow</i>.<b>tickFormat</b>([<i>count</i>[, <i>specifier</i>]])

参考 [*continuous*.tickFormat](#continuous_tickFormat).

<a name="pow_nice" href="#pow_nice">#</a> <i>pow</i>.<b>nice</b>([<i>count</i>])

参考 [*continuous*.nice](#continuous_nice).

<a name="pow_copy" href="#pow_copy">#</a> <i>pow</i>.<b>copy</b>() [<>](https://github.com/d3/d3-scale/blob/master/src/pow.js#L29 "Source")

参考 [*continuous*.copy](#continuous_copy).

<a name="scaleSqrt" href="#scaleSqrt">#</a> d3.<b>scaleSqrt</b>() [<>](https://github.com/d3/d3-scale/blob/master/src/pow.js#L36 "Source")

平方根比例尺，与[power scale](#power-scales)类似，但是[exponent](#pow_exponent) 为 0.5, 这是 `d3.scalePow().exponent(0.5)` 的一个快捷方式.

#### Log Scales

Log比例尺也是连续性比例尺的一种。只不过以对数的方式计算domain和range之间的对应关系。对于输入*x*,计算输出*y*的公式为: *y* = *m* log(<i>x</i>) + *b*.

因为log(0) = -∞, 所以log比例尺的domain必须严格的正递增或负递减，不能跨越0. 

<a name="scaleLog" href="#scaleLog">#</a> d3.<b>scaleLog</b>() [<>](https://github.com/d3/d3-scale/blob/master/src/log.js "Source")

构建一个默认的log比例尺，默认 [domain](#log_domain) 为 [1, 10], [range](#log_range) 为 [0, 1], [base(对数低)](#log_base) 为 10, [clamping](#log_clamp) 不启用.

<a name="log" href="#_log">#</a> <i>log</i>(<i>value</i>) [<>](https://github.com/d3/d3-scale/blob/master/src/log.js#L42 "Source")

参考 [*continuous*](#_continuous).

<a name="log_invert" href="#log_invert">#</a> <i>log</i>.<b>invert</b>(<i>value</i>)

参考 [*continuous*.invert](#continuous_invert).

<a name="log_base" href="#log_base">#</a> <i>log</i>.<b>base</b>([<i>base</i>]) [<>](https://github.com/d3/d3-scale/blob/master/src/log.js#L55 "Source")

设置或获取对数的底数。默认为10。

<a name="log_domain" href="#log_domain">#</a> <i>log</i>.<b>domain</b>([<i>domain</i>]) [<>](https://github.com/d3/d3-scale/blob/master/src/log.js#L59 "Source")

参考 [*continuous*.domain](#continuous_domain).

<a name="log_range" href="#log_range">#</a> <i>log</i>.<b>range</b>([<i>range</i>]) [<>](https://github.com/d3/d3-scale/blob/master/src/continuous.js#L96 "Source")

参考 [*continuous*.range](#continuous_range).

<a name="log_rangeRound" href="#log_rangeRound">#</a> <i>log</i>.<b>rangeRound</b>([<i>range</i>])

参考 [*continuous*.rangeRound](#continuous_rangeRound).

<a name="log_clamp" href="#log_clamp">#</a> <i>log</i>.<b>clamp</b>(<i>clamp</i>)

参考 [*continuous*.clamp](#continuous_clamp).

<a name="log_interpolate" href="#log_interpolate">#</a> <i>log</i>.<b>interpolate</b>(<i>interpolate</i>)

参考 [*continuous*.interpolate](#continuous_interpolate).

<a name="log_ticks" href="#log_ticks">#</a> <i>log</i>.<b>ticks</b>([<i>count</i>]) [<>](https://github.com/d3/d3-scale/blob/master/src/log.js#L63 "Source")

与 [*continuous*.ticks](#continuous_ticks) 类似, 但是为log比例尺做了特殊处理。如果 [base(底)](#log_base) 是整数，则返回的刻度值是以底的整数幂均匀分割的.

<a name="log_tickFormat" href="#log_tickFormat">#</a> <i>log</i>.<b>tickFormat</b>([<i>count</i>[, <i>specifier</i>]]) [<>](https://github.com/d3/d3-scale/blob/master/src/log.js#L103 "Source")

与 [*continuous*.tickFormat](#continuous_tickFormat)类似, 也针对log比例尺做了特殊处理.

<a name="log_nice" href="#log_nice">#</a> <i>log</i>.<b>nice</b>() [<>](https://github.com/d3/d3-scale/blob/master/src/log.js#L116 "Source")

与 [*continuous*.nice](#continuous_nice) 类似.

<a name="log_copy" href="#log_copy">#</a> <i>log</i>.<b>copy</b>() [<>](https://github.com/d3/d3-scale/blob/master/src/log.js#L123 "Source")

参考 [*continuous*.copy](#continuous_copy).

#### Identity Scales

恒等比例尺是一种特殊的线性比例尺，domain和range是一样的;这种比例尺的scale方法和invert方法时同一个方法。这种比例尺在使用像素坐标系统时会偶尔用,不支持[rangeRound](#continuous_rangeRound), [clamp](#continuous_clamp) 或 [interpolate](#continuous_interpolate).

<a name="scaleIdentity" href="#scaleIdentity">#</a> d3.<b>scaleIdentity</b>() [<>](https://github.com/d3/d3-scale/blob/master/src/identity.js "Source")

构建一个默认的恒等比例尺， 默认的[domain](#continuous_domain) 为 [0, 1], [range](#continuous_range)为 [0, 1].

#### Time Scales

Time比例尺是[linear scales](#linear-scales) 的一个变种: *domain* 和 *invert* 值为[dates](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date)而不是简单的数值类型。Time比例尺的刻度实现基于 [calendar intervals](https://github.com/d3/d3-time).

例如:

```js
var x = d3.scaleTime()
    .domain([new Date(2000, 0, 1), new Date(2000, 0, 2)])
    .range([0, 960]);

x(new Date(2000, 0, 1,  5)); // 200
x(new Date(2000, 0, 1, 16)); // 640
x.invert(200); // Sat Jan 01 2000 05:00:00 GMT-0800 (PST)
x.invert(640); // Sat Jan 01 2000 16:00:00 GMT-0800 (PST)
```

对于有效的 *y* 值， <i>time</i>(<i>time</i>.invert(<i>y</i>)) 等于 *y*; 同样的，对于有效的输入值 *x* , <i>time</i>.invert(<i>time</i>(<i>x</i>)) 等于 *x*. 逆计算在交互时是很有用的.

<a name="scaleTime" href="#scaleTime">#</a> d3.<b>scaleTime</b>() [<>](https://github.com/d3/d3-scale/blob/master/src/time.js "Source")

构建一个默认的时间比例尺。默认的 [domain](#time_domain) 为 [2000-01-01, 2000-01-02], [range](#time_range) 为 [0, 1], 默认的插值为[default](https://github.com/d3/d3-interpolate#interpolate) [interpolator](#time_interpolate)， 默认 [clamping](#time_clamp) 不启用.

<a name="time" href="#_time">#</a> <i>time</i>(<i>value</i>) [<>](https://github.com/d3/d3-scale/blob/master/src/time.js#L133 "Source")

参考 [*continuous*](#_continuous).

<a name="time_invert" href="#time_invert">#</a> <i>time</i>.<b>invert</b>(<i>value</i>) [<>](https://github.com/d3/d3-scale/blob/master/src/time.js#L95 "Source")

参考 [*continuous*.invert](#continuous_invert).

<a name="time_domain" href="#time_domain">#</a> <i>time</i>.<b>domain</b>([<i>domain</i>]) [<>](https://github.com/d3/d3-scale/blob/master/src/time.js#L99 "Source")

参考 [*continuous*.domain](#continuous_domain).

<a name="time_range" href="#time_range">#</a> <i>time</i>.<b>range</b>([<i>range</i>])

参考 [*continuous*.range](#continuous_range).

<a name="time_rangeRound" href="#time_rangeRound">#</a> <i>time</i>.<b>rangeRound</b>([<i>range</i>])

参考 [*continuous*.rangeRound](#continuous_rangeRound).

<a name="time_clamp" href="#time_clamp">#</a> <i>time</i>.<b>clamp</b>(<i>clamp</i>)

参考 [*continuous*.clamp](#continuous_clamp).

<a name="time_interpolate" href="#time_interpolate">#</a> <i>time</i>.<b>interpolate</b>(<i>interpolate</i>)

参考 [*continuous*.interpolate](#continuous_interpolate).

<a name="time_ticks" href="#time_ticks">#</a> <i>time</i>.<b>ticks</b>([<i>count</i>]) [<>](https://github.com/d3/d3-scale/blob/master/src/time.js#L103 "Source")
<br><a name="time_ticks" href="#time_ticks">#</a> <i>time</i>.<b>ticks</b>([<i>interval</i>])

返回这个domain中具有代表意义的一组刻度。大多数情况下是等间隔的。这些刻度经常被用来显示到坐标轴上。

有两种方式来获取，一种是给定一个参考个数*count*:

```js
var x = d3.scaleTime();

x.ticks(10);
// [Sat Jan 01 2000 00:00:00 GMT-0800 (PST),
//  Sat Jan 01 2000 03:00:00 GMT-0800 (PST),
//  Sat Jan 01 2000 06:00:00 GMT-0800 (PST),
//  Sat Jan 01 2000 09:00:00 GMT-0800 (PST),
//  Sat Jan 01 2000 12:00:00 GMT-0800 (PST),
//  Sat Jan 01 2000 15:00:00 GMT-0800 (PST),
//  Sat Jan 01 2000 18:00:00 GMT-0800 (PST),
//  Sat Jan 01 2000 21:00:00 GMT-0800 (PST),
//  Sun Jan 02 2000 00:00:00 GMT-0800 (PST)]
```

另一种是指定一个时间间隔，每隔多长时间取一个刻度:s:

* 1-, 5-, 15- and 30-second.
* 1-, 5-, 15- and 30-minute.
* 1-, 3-, 6- and 12-hour.
* 1- and 2-day.
* 1-week.
* 1- and 3-month.
* 1-year.

如果要使用时间间隔，那参数一定要是 [time *interval*](https://github.com/d3/d3-time#intervals)类型，使用[*interval*.every](https://github.com/d3/d3-time#interval_every)方法. 例如生成一个15-[minute](https://github.com/d3/d3-time#minute) 的间隔:

```js
var x = d3.scaleTime()
    .domain([new Date(2000, 0, 1, 0), new Date(2000, 0, 1, 2)]);

x.ticks(d3.timeMinute.every(15));
// [Sat Jan 01 2000 00:00:00 GMT-0800 (PST),
//  Sat Jan 01 2000 00:15:00 GMT-0800 (PST),
//  Sat Jan 01 2000 00:30:00 GMT-0800 (PST),
//  Sat Jan 01 2000 00:45:00 GMT-0800 (PST),
//  Sat Jan 01 2000 01:00:00 GMT-0800 (PST),
//  Sat Jan 01 2000 01:15:00 GMT-0800 (PST),
//  Sat Jan 01 2000 01:30:00 GMT-0800 (PST),
//  Sat Jan 01 2000 01:45:00 GMT-0800 (PST),
//  Sat Jan 01 2000 02:00:00 GMT-0800 (PST)]
```

此外，也可以传递一个方法来[*interval*.filter(手动过滤)](https://github.com/d3/d3-time#interval_filter):

```js
x.ticks(d3.timeMinute.filter(function(d) {
  return d.getMinutes() % 15 === 0;
}));
```


<a name="time_tickFormat" href="#time_tickFormat">#</a> <i>time</i>.<b>tickFormat</b>([<i>count</i>[, <i>specifier</i>]]) [<>](https://github.com/d3/d3-scale/blob/master/src/time.js#L115 "Source")
<br><a href="#time_tickFormat">#</a> <i>time</i>.<b>tickFormat</b>([<i>interval</i>[, <i>specifier</i>]])

对返回的刻度进行格式化。对应[tick](#time_ticks)方法，同样有两种形式，一个是对应*count*，一个对应*interval*。第二个参数为格式化字符串。指定日期以何种形式返回，主要有以下几种:

* `%Y` - 年, 形如 `2011`.
* `%B` - 月(全拼), 形如 `February`.
* `%b %d` - 月(简拼)日for week boundaries, 形如 `Feb 06`.
* `%a %d` - 周几, 形如 `Mon 07`.
* `%I %p` - 小时, 形如 `01 AM`.
* `%I:%M` - 分钟, 形如 `01:23`.
* `:%S` - 秒, 形如 `:45`.
* `.%L` - 毫秒, 形如 `.012`.


关于日期格式化的更多信息，可以参考:[d3-time-format](https://github.com/d3/d3-time-format).

<a name="time_nice" href="#time_nice">#</a> <i>time</i>.<b>nice</b>([<i>count</i>]) [<>](https://github.com/d3/d3-scale/blob/master/src/time.js#L119 "Source")
<br><a name="time_nice" href="#time_nice">#</a> <i>time</i>.<b>nice</b>([<i>interval</i>[, <i>step</i>]])

对[domain](#time_domain)进行适当的扩展，以取整。 参考 [*continuous*.nice](#continuous_nice) .

*count*控制边界的调整步长，并返回可以覆盖之前整个domain的一个新domain。当然也可以使用 [time *interval*](https://github.com/d3/d3-time#intervals) 来设置调整步长。*nice* 操作的作用就是，加入定义的domain为 [2009-07-13T00:02, 2009-07-13T23:48], 修正之后的新 domain 为[2009-07-13, 2009-07-14].

<a name="scaleUtc" href="#scaleUtc">#</a> d3.<b>scaleUtc</b>() [<>](https://github.com/d3/d3-scale/blob/master/src/utcTime.js "Source")

与 [time](#time)等价, 只不过返回的时间比例尺的所有操作基于 [Coordinated Universal Time](https://en.wikipedia.org/wiki/Coordinated_Universal_Time) 而不是本地时间.

### Sequential Scales

顺序比例尺与[continuous scales](#continuous-scales)类似，都是将连续区间的值映射到另一个连续区间。但是与continuous scales不同的是，顺序比例尺的range是固定且不可配置的。Sequential Scales不提供[invert](#continuous_invert), [range](#continuous_range), [rangeRound](#continuous_rangeRound) 和 [interpolate](#continuous_interpolate) 方法.

<a name="scaleSequential" href="#scaleSequential">#</a> d3.<b>scaleSequential</b>(<i>interpolator</i>) [<>](https://github.com/d3/d3-scale/blob/master/src/sequential.js "Source")

使用指定的[*interpolator*](#sequential_interpolator)构建一个顺序比例尺。插值函数是必须的。插值器在内部使用时参数是[0,1], 0对应domain的第一个值，1对应domain的最后一个值。

也就是顺序比例尺在内部首先将 *domain*映射到[0,1]，然后根据最后输入的domain对应的值传给插值器计算出整个比例尺输出结果。比如:

```js
var rainbow = d3.scaleSequential(function(t) {
  return d3.hsl(t * 360, 1, 0.5) + "";
});
```

从审美的角度来说，使用 [d3.interpolateRainbow](#interpolateRainbow)更好一些:

```js
var rainbow = d3.scaleSequential(d3.interpolateRainbow);
```

对于其他的颜色模式，参考 [d3-scale-chromatic](https://github.com/d3/d3-scale-chromatic).

<a name="_sequential" href="#_sequential">#</a> <i>sequential</i>(<i>value</i>) [<>](https://github.com/d3/d3-scale/blob/master/src/sequential.js#L3 "Source")

参考 [*continuous*](#_continuous).

<a name="sequential_domain" href="#sequential_domain">#</a> <i>sequential</i>.<b>domain</b>([<i>domain</i>]) [<>](https://github.com/d3/d3-scale/blob/master/src/sequential.js#L13 "Source")

参考 [*continuous*.domain](#continuous_domain). 要注意sequential比例尺的domain只能是两个数值类型的值.

<a name="sequential_clamp" href="#sequential_clamp">#</a> <i>sequential</i>.<b>clamp</b>([<i>clamp</i>]) [<>](https://github.com/d3/d3-scale/blob/master/src/sequential.js#L17 "Source")

参考 [*continuous*.clamp](#continuous_clamp).

<a name="sequential_interpolator" href="#sequential_interpolator">#</a> <i>sequential</i>.<b>interpolator</b>([<i>interpolator</i>]) [<>](https://github.com/d3/d3-scale/blob/master/src/sequential.js#L21 "Source")

如果指定了 *interpolator* 则将比例尺的插值方式设置为指定的插值器。如果没有指定，则返回当前的插值器。

<a name="sequential_copy" href="#sequential_copy">#</a> <i>sequential</i>.<b>copy</b>() [<>](https://github.com/d3/d3-scale/blob/master/src/sequential.js#L25 "Source")

参考 [*continuous*.copy](#continuous_copy).

<a name="interpolateViridis" href="#interpolateViridis">#</a> d3.<b>interpolateViridis</b>(<i>t</i>) [<>](https://github.com/d3/d3-scale/blob/master/src/viridis.js "Source")

<img src="https://raw.githubusercontent.com/d3/d3-scale/master/img/viridis.png" width="100%" height="40" alt="viridis">

根据一个[0,1]之间的值*t*,返回对应的 “viridis”颜色值。 这种颜色模式由 [van der Walt, Smith and Firing](https://bids.github.io/colormap/) 为 matplotlib设计，返回形式为RGB字符串.

<a name="interpolateInferno" href="#interpolateInferno">#</a> d3.<b>interpolateInferno</b>(<i>t</i>)

<img src="https://raw.githubusercontent.com/d3/d3-scale/master/img/inferno.png" width="100%" height="40" alt="inferno">

根据一个[0,1]之间的值*t*,返回对应的 “inferno” 颜色值。 这种颜色模式由 [van der Walt, Smith and Firing](https://bids.github.io/colormap/) 为 matplotlib设计，返回形式为RGB字符串.

<a name="interpolateMagma" href="#interpolateMagma">#</a> d3.<b>interpolateMagma</b>(<i>t</i>)

<img src="https://raw.githubusercontent.com/d3/d3-scale/master/img/magma.png" width="100%" height="40" alt="magma">

根据一个[0,1]之间的值*t*,返回对应的 “magma” 颜色值。 这种颜色模式由 [van der Walt, Smith and Firing](https://bids.github.io/colormap/) 为 matplotlib设计，返回形式为RGB字符串.

<a name="interpolatePlasma" href="#interpolatePlasma">#</a> d3.<b>interpolatePlasma</b>(<i>t</i>)

<img src="https://raw.githubusercontent.com/d3/d3-scale/master/img/plasma.png" width="100%" height="40" alt="plasma">

根据一个[0,1]之间的值*t*,返回对应的 “plasma” 颜色值。 这种颜色模式由 [van der Walt, Smith and Firing](https://bids.github.io/colormap/) 为 matplotlib设计，返回形式为RGB字符串.

<a name="interpolateWarm" href="#interpolateWarm">#</a> d3.<b>interpolateWarm</b>(<i>t</i>)

<img src="https://raw.githubusercontent.com/d3/d3-scale/master/img/warm.png" width="100%" height="40" alt="warm">

根据给定的[0,1]之间的*t*，返回对应的 [Niccoli’s perceptual rainbow](https://mycarta.wordpress.com/2013/02/21/perceptual-rainbow-palette-the-method/) 颜色(Wram系)。

<a name="interpolateCool" href="#interpolateCool">#</a> d3.<b>interpolateCool</b>(<i>t</i>)

<img src="https://raw.githubusercontent.com/d3/d3-scale/master/img/cool.png" width="100%" height="40" alt="cool">

根据给定的[0,1]之间的*t*，返回对应的 [Niccoli’s perceptual rainbow](https://mycarta.wordpress.com/2013/02/21/perceptual-rainbow-palette-the-method/) 颜色(Cool系)。

<a name="interpolateRainbow" href="#interpolateRainbow">#</a> d3.<b>interpolateRainbow</b>(<i>t</i>) [<>](https://github.com/d3/d3-scale/blob/master/src/rainbow.js "Source")

<img src="https://raw.githubusercontent.com/d3/d3-scale/master/img/rainbow.png" width="100%" height="40" alt="rainbow">

[d3.interpolateWarm](#interpolateWarm) 和 [d3.interpolateCool](#interpolateCool)的组合，当*t*在[0,0.5]之间时使用[d3.interpolateWarm](#interpolateWarm)，*t*在[0.5,1]之间时使用[d3.interpolateCool](#interpolateCool)。

<a name="interpolateCubehelixDefault" href="#interpolateCubehelixDefault">#</a> d3.<b>interpolateCubehelixDefault</b>(<i>t</i>) [<>](https://github.com/d3/d3-scale/blob/master/src/cubehelix.js "Source")

<img src="https://raw.githubusercontent.com/d3/d3-scale/master/img/cubehelix.png" width="100%" height="40" alt="cubehelix">

根据*t*,返回[Green’s default Cubehelix](https://www.mrao.cam.ac.uk/~dag/CUBEHELIX/)颜色系列对应的颜色值，以RGB字符串的形式返回.

### Quantize Scales

Quantize(量化) 比例尺与[linear scales](#linear-scales)相似，不一样的是输出range不是连续的，而是离散的。量化比例尺根据输出范围将输入分割成不同的片段，每个片段内的值都会对应同一个range值。这样就完成了连续到离散的转换。输入*x*与输出*y*之间的换算公式:*y* = *m round(x)* + *b*. 具体例子参考 [bl.ocks.org/4060606](http://bl.ocks.org/mbostock/4060606) .

<a name="scaleQuantize" href="#scaleQuantize">#</a> d3.<b>scaleQuantize</b>() [<>](https://github.com/d3/d3-scale/blob/master/src/quantize.js "Source")

构造一个新的使用默认设置的量化比例尺，[domain](#quantize_domain)默认为 [0, 1]，[range](#quantize_range) 默认为 [0, 1]. 默认的量化比例尺功能与[Math.round](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Math/round) 方法类似.

<a name="_quantize" href="#_quantize">#</a> <i>quantize</i>(<i>value</i>) [<>](https://github.com/d3/d3-scale/blob/master/src/quantize.js#L5 "Source")

根据输入的*value*返回对应的range值。例如:

```js
var color = d3.scaleQuantize()
    .domain([0, 1])
    .range(["brown", "steelblue"]);

color(0.49); // "brown"
color(0.51); // "steelblue"
```

或者可以将输入范围内的值切割成3个部分输出:

```js
var width = d3.scaleQuantize()
    .domain([10, 100])
    .range([1, 2, 4]);

width(20); // 1
width(50); // 2
width(80); // 4
```

<a name="quantize_invertExtent" href="#quantize_invertExtent">#</a> <i>quantize</i>.<b>invertExtent</b>(<i>value</i>) [<>](https://github.com/d3/d3-scale/blob/master/src/quantize.js#L31 "Source")

逆计算。与其他的"一对一"比例尺不同，因为量化比例尺是"多对一"的，即多个输入对应同一个输出，因此在做逆计算时，就成了"一对多". 因此返回的是一个区间。例如:

```js
var width = d3.scaleQuantize()
    .domain([10, 100])
    .range([1, 2, 4]);

width.invertExtent(2); // [40, 70]
```

<a name="quantize_domain" href="#quantize_domain">#</a> <i>quantize</i>.<b>domain</b>([<i>domain</i>]) [<>](https://github.com/d3/d3-scale/blob/master/src/quantize.js#L23 "Source")

设置或获取*domain*。

<a name="quantize_range" href="#quantize_range">#</a> <i>quantize</i>.<b>range</b>([<i>range</i>]) [<>](https://github.com/d3/d3-scale/blob/master/src/quantize.js#L27 "Source")

设置或获取*range*.

<a name="quantize_ticks" href="#quantize_ticks">#</a> <i>quantize</i>.<b>ticks</b>([<i>count</i>])

相当于 [*continuous*.ticks](#continuous_ticks).

<a name="quantize_tickFormat" href="#quantize_tickFormat">#</a> <i>quantize</i>.<b>tickFormat</b>([<i>count</i>[, <i>specifier</i>]]) [<>](https://github.com/d3/d3-scale/blob/master/src/linear.js#L14 "Source")

相当于 [*continuous*.tickFormat](#continuous_tickFormat).

<a name="quantize_nice" href="#quantize_nice">#</a> <i>quantize</i>.<b>nice</b>()

相当于 [*continuous*.nice](#continuous_nice).

<a name="quantize_copy" href="#quantize_copy">#</a> <i>quantize</i>.<b>copy</b>() [<>](https://github.com/d3/d3-scale/blob/master/src/quantize.js#L39 "Source")

返回一个精确的拷贝，原比例尺与返回的新比例尺之间互不影响.

### Quantile Scales

Quantile(分位数)比例尺可以将一组样本输入映射到一组离散的值。分位数比例尺会对domain进行排序，然后将其映射到range上。可以根据输入的*domain*值计算出在*range*上的分位数。与d3-array的[quantile](https://github.com/d3/d3-array#quantile)类似。参考例子:[bl.ocks.org/8ca036b3505121279daf](http://bl.ocks.org/mbostock/8ca036b3505121279daf) .

<a name="scaleQuantile" href="#scaleQuantile">#</a> d3.<b>scaleQuantile</b>() [<>](https://github.com/d3/d3-scale/blob/master/src/quantile.js "Source")

构造一个默认的分位数比例尺。默认的 [domain](#quantile_domain) 和 [range](#quantile_range)为空. 

<a name="_quantile" href="#_quantile">#</a> <i>quantile</i>(<i>value</i>) [<>](https://github.com/d3/d3-scale/blob/master/src/quantile.js#L4 "Source")

根据指定的*domain*值返回对应的*range*值.

<a name="quantile_invertExtent" href="#quantile_invertExtent">#</a> <i>quantile</i>.<b>invertExtent</b>(<i>value</i>) [<>](https://github.com/d3/d3-scale/blob/master/src/quantile.js#L20 "Source")

逆计算出range值对应的domain区间.

<a name="quantile_domain" href="#quantile_domain">#</a> <i>quantile</i>.<b>domain</b>([<i>domain</i>]) [<>](https://github.com/d3/d3-scale/blob/master/src/quantile.js#L28 "Source")

设置或获取*domain*，如果设置domain会忽略NaN,null,undefined值。这些值不作为样本计算。在内部会对domain值进行转换(如果是非数值类型的话)并进行排序.

<a name="quantile_range" href="#quantile_range">#</a> <i>quantile</i>.<b>range</b>([<i>range</i>]) [<>](https://github.com/d3/d3-scale/blob/master/src/quantile.js#L36 "Source")

设置或获取*range*.

<a name="quantile_quantiles" href="#quantile_quantiles">#</a> <i>quantile</i>.<b>quantiles</b>() [<>](https://github.com/d3/d3-scale/blob/master/src/quantile.js#L40 "Source")

返回分位数阈值。如果[range](#quantile_range) 包含 *n*个值, 则会返回包含 *n* - 1 个值的阈值. 相当于从domain中提取参考点.

<a name="quantile_copy" href="#quantile_copy">#</a> <i>quantile</i>.<b>copy</b>() [<>](https://github.com/d3/d3-scale/blob/master/src/quantile.js#L44 "Source")

拷贝。原比例尺和新比例尺互不影响。

### Threshold Scales

Threshold(阈值)比例尺与[quantize scales](#quantize-scales)类似，只不过阈值比例尺允许将任意子集映射到离散区间。输入区间依然是连续的，但是会根据range被分割成一些切片。参考示例 [bl.ocks.org/3306362](http://bl.ocks.org/mbostock/3306362) .

<a name="scaleThreshold" href="#scaleThreshold">#</a> d3.<b>scaleThreshold</b>() [<>](https://github.com/d3/d3-scale/blob/master/src/threshold.js "Source")

构建一个新的阈值比例尺，默认的 [domain](#threshold_domain) 为 [0.5] ，[range](#threshold_range) 为 [0, 1]. 默认的阈值比例尺与[Math.round](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Math/round) 方法功能类似; 比如threshold(0.49) 返回 0, threshold(0.51) 返回 1.

<a name="_threshold" href="#_threshold">#</a> <i>threshold</i>(<i>value</i>) [<>](https://github.com/d3/d3-scale/blob/master/src/threshold.js#L4 "Source")

根据输入的*domain*值返回对应的额*range*值。例如:

```js
var color = d3.scaleThreshold()
    .domain([0, 1])
    .range(["red", "white", "green"]);

color(-1);   // "red"
color(0);    // "white"
color(0.5);  // "white"
color(1);    // "green"
color(1000); // "green"
```

<a name="threshold_invertExtent" href="#threshold_invertExtent">#</a> <i>threshold</i>.<b>invertExtent</b>(<i>value</i>) [<>](https://github.com/d3/d3-scale/blob/master/src/threshold.js#L21 "Source")

根据*range*逆计算出对应的*domain*区间，例如:

```js
var color = d3.scaleThreshold()
    .domain([0, 1])
    .range(["red", "white", "green"]);

color.invertExtent("red"); // [undefined, 0]
color.invertExtent("white"); // [0, 1]
color.invertExtent("green"); // [1, undefined]
```

<a name="threshold_domain" href="#threshold_domain">#</a> <i>threshold</i>.<b>domain</b>([<i>domain</i>]) [<>](https://github.com/d3/d3-scale/blob/master/src/threshold.js#L13 "Source")

设置或获取*domain*值。domain值必须升序排序。domain中的值一般为数值，但是任何可排序的值可以使用。如果range中的值个数为N+1,那么domain中的值必须为N。如果domain中的值少于N个，那么会忽略range中多于N的其他值。

<a name="threshold_range" href="#threshold_range">#</a> <i>threshold</i>.<b>range</b>([<i>range</i>]) [<>](https://github.com/d3/d3-scale/blob/master/src/threshold.js#L17 "Source")

设置或获取阈值比例尺的*range*.

<a name="threshold_copy" href="#threshold_copy">#</a> <i>threshold</i>.<b>copy</b>() [<>](https://github.com/d3/d3-scale/blob/master/src/threshold.js#L26 "Source")

拷贝。原比例尺和新比例尺互不影响。

### Ordinal Scales

与 [continuous scales](#continuous-scales)不同,  序数比例尺的domain和range都是离散的. 例如序数比例尺可以将一组名称映射到一组颜色值。

<a name="scaleOrdinal" href="#scaleOrdinal">#</a> d3.<b>scaleOrdinal</b>([<i>range</i>]) [<>](https://github.com/d3/d3-scale/blob/master/src/ordinal.js "Source")

构造一个默认的序数比例尺，默认的[domain](#ordinal_domain)和 [*range*](#ordinal_range)都为空. 

<a name="_ordinal" href="#_ordinal">#</a> <i>ordinal</i>(<i>value</i>) [<>](https://github.com/d3/d3-scale/blob/master/src/ordinal.js#L6 "Source")

根据*domain*值返回对应的*range*值

<a name="ordinal_domain" href="#ordinal_domain">#</a> <i>ordinal</i>.<b>domain</b>([<i>domain</i>]) [<>](https://github.com/d3/d3-scale/blob/master/src/ordinal.js#L22 "Source")

设置或获取序数比例尺的*domain*。第一个值被映射到range中的第一个值，第二个被映射到range中的第二个，以此类推。

<a name="ordinal_range" href="#ordinal_range">#</a> <i>ordinal</i>.<b>range</b>([<i>range</i>]) [<>](https://github.com/d3/d3-scale/blob/master/src/ordinal.js#L30 "Source")

设置或获取序数比例尺的*range*范围

<a name="ordinal_unknown" href="#ordinal_unknown">#</a> <i>ordinal</i>.<b>unknown</b>([<i>value</i>]) [<>](https://github.com/d3/d3-scale/blob/master/src/ordinal.js#L34 "Source")

如果domain输入没有对应的range值。则返回一个值，这个方法就是设置这个返回值。相当于设置一个未知值，在比例尺映射失败时返回这个值。

默认为[implicit](##scaleImplicit).

<a name="ordinal_copy" href="#ordinal_copy">#</a> <i>ordinal</i>.<b>copy</b>() [<>](https://github.com/d3/d3-scale/blob/master/src/ordinal.js#L38 "Source")

拷贝。原比例尺和新比例尺互不影响。

<a name="scaleImplicit" href="#scaleImplicit">#</a> d3.<b>scaleImplicit</b>

为 [*ordinal*.unknown](#ordinal_unknown)设计的一个特殊值.

#### Band Scales

Band比例尺与[ordinal scales](#ordinal-scales)类似，输出结果是自动计算的并被分割成一段一段的。

<img src="https://raw.githubusercontent.com/d3/d3-scale/master/img/band.png" width="751" height="238" alt="band">

<a name="scaleBand" href="#scaleBand">#</a> d3.<b>scaleBand</b>() [<>](https://github.com/d3/d3-scale/blob/master/src/band.js "Source")

构建一个默认的Band比例尺。默认的 [domain](#band_domain)为空, [range](#band_range) 为 [0, 1], 没有[padding](#band_padding), 没有 [rounding](#band_round) 和 [alignment](#band_align).

<a name="_band" href="#_band">#</a> <i>band</i>(*value*) [<>](https://github.com/d3/d3-scale/blob/master/src/band.js#L4 "Source")

根据*domain*值返回对应的输出的band的起点。如果输入值不在domain中，则返回undefined.

<a name="band_domain" href="#band_domain">#</a> <i>band</i>.<b>domain</b>([<i>domain</i>]) [<>](https://github.com/d3/d3-scale/blob/master/src/band.js#L32 "Source")

设置或获取*domain*。domain中的第一个值对应range中的第一个band，以此类推。

<a name="band_range" href="#band_range">#</a> <i>band</i>.<b>range</b>([<i>range</i>]) [<>](https://github.com/d3/d3-scale/blob/master/src/band.js#L36 "Source")

设置或获取*range*，所有的band就是由这个区间分割而来。

<a name="band_rangeRound" href="#band_rangeRound">#</a> <i>band</i>.<b>rangeRound</b>([<i>range</i>]) [<>](https://github.com/d3/d3-scale/blob/master/src/band.js#L40 "Source")

同上，只不过在分割为band时做了取整操作，等价于：

```js
band
    .range(range)
    .round(true);
```

取整有时候可以有效的避免锯齿

<a name="band_round" href="#band_round">#</a> <i>band</i>.<b>round</b>([<i>round</i>]) [<>](https://github.com/d3/d3-scale/blob/master/src/band.js#L52 "Source")

是否取整。

<a name="band_paddingInner" href="#band_paddingInner">#</a> <i>band</i>.<b>paddingInner</b>([<i>padding</i>]) [<>](https://github.com/d3/d3-scale/blob/master/src/band.js#L60 "Source")

设置或获取band与band之间的内部间隔，以百分比形式定义.

<a name="band_paddingOuter" href="#band_paddingOuter">#</a> <i>band</i>.<b>paddingOuter</b>([<i>padding</i>]) [<>](https://github.com/d3/d3-scale/blob/master/src/band.js#L64 "Source")

设置或获取band两边相对于range两端的间隔，同样以百分比形式定义.

<a name="band_padding" href="#band_padding">#</a> <i>band</i>.<b>padding</b>([<i>padding</i>]) [<>](https://github.com/d3/d3-scale/blob/master/src/band.js#L56 "Source")


等于同时设置或获取[inner](#band_paddingInner) 和 [outer](#band_paddingOuter).

<a name="band_align" href="#band_align">#</a> <i>band</i>.<b>align</b>([<i>align</i>]) [<>](https://github.com/d3/d3-scale/blob/master/src/band.js#L68 "Source")

这个值定义了band分布范围中未使用的空间，值的取值范围为[0,1], 默认是0.5，也就是band在其范围内是居中对齐的。在将range分割成不同的band时，会为每个band计算出一个区域，这个区域不等于实际的band的大小，因为可能设置了paddingOuter和paddingInner. 那么实际的band和其占有的范围就有了一个对齐关系。这个方法就是设置这个的。

<a name="band_bandwidth" href="#band_bandwidth">#</a> <i>band</i>.<b>bandwidth</b>() [<>](https://github.com/d3/d3-scale/blob/master/src/band.js#L44 "Source")

返回每个band的宽度.

<a name="band_step" href="#band_step">#</a> <i>band</i>.<b>step</b>() [<>](https://github.com/d3/d3-scale/blob/master/src/band.js#L48 "Source")

返回band与邻近的band之间的距离.

<a name="band_copy" href="#band_copy">#</a> <i>band</i>.<b>copy</b>() [<>](https://github.com/d3/d3-scale/blob/master/src/band.js#L72 "Source")

拷贝。原比例尺和新比例尺互不影响。

#### Point Scales

Point比例尺是一个[band scales](#band-scales)的变种。只不过返回的是一个点，而不是band。

<img src="https://raw.githubusercontent.com/d3/d3-scale/master/img/point.png" width="648" height="155" alt="point">

<a name="scalePoint" href="#scalePoint">#</a> d3.<b>scalePoint</b>()

构建一个point比例尺。默认的[domain](#point_domain) 为空,  [range](#point_range) 为 [0, 1], 没有 [padding](#point_padding), 没有 [rounding](#point_round) 和 [alignment](#point_align).

<a name="_point" href="#_point">#</a> <i>point</i>(*value*)

根据给定的值返回一个对应的点。

Given a *value* in the input [domain](#point_domain), returns the corresponding point derived from the output [range](#point_range). If the given *value* is not in the scale’s domain, returns undefined.

<a name="point_domain" href="#point_domain">#</a> <i>point</i>.<b>domain</b>([<i>domain</i>])

设置或获取*domain*。

<a name="point_range" href="#point_range">#</a> <i>point</i>.<b>range</b>([<i>range</i>])

设置或获取*range*。.

<a name="point_rangeRound" href="#point_rangeRound">#</a> <i>point</i>.<b>rangeRound</b>([<i>range</i>])

同上，只不过做了取整处理。等价于:

```js
point
    .range(range)
    .round(true);
```


<a name="point_round" href="#point_round">#</a> <i>point</i>.<b>round</b>([<i>round</i>])


是否取整。

<a name="point_padding" href="#point_padding">#</a> <i>point</i>.<b>padding</b>([<i>padding</i>])

因为输出是一个点。所以不存在paddingInner。这个是用来设置point与range两端的间距。

<a name="point_align" href="#point_align">#</a> <i>point</i>.<b>align</b>([<i>align</i>])

对齐方式，默认为0.5. 取值范围为[0,1]

<a name="point_bandwidth" href="#point_bandwidth">#</a> <i>point</i>.<b>bandwidth</b>()

返回0.

<a name="point_step" href="#point_step">#</a> <i>point</i>.<b>step</b>()

返回两个相邻点之间的距离.

<a name="point_copy" href="#point_copy">#</a> <i>point</i>.<b>copy</b>()


拷贝。原比例尺和新比例尺互不影响。

#### Category Scales

颜色序数比例尺。使用[d3.scaleOrdinal](#scaleOrdinal)实现. 例如:

```js
var color = d3.scaleOrdinal(d3.schemeCategory10);
```

跟多的颜色模型参考 [d3-scale-chromatic](https://github.com/d3/d3-scale-chromatic).

<a name="schemeCategory10" href="#schemeCategory10">#</a> d3.<b>schemeCategory10</b> [<>](https://github.com/d3/d3-scale/blob/master/src/category10.js "Source")

<img src="https://raw.githubusercontent.com/d3/d3-scale/master/img/category10.png" width="100%" height="40" alt="category10">


<a name="schemeCategory20" href="#schemeCategory20">#</a> d3.<b>schemeCategory20</b> [<>](https://github.com/d3/d3-scale/blob/master/src/category20.js "Source")

<img src="https://raw.githubusercontent.com/d3/d3-scale/master/img/category20.png" width="100%" height="40" alt="category20">


<a name="schemeCategory20b" href="#schemeCategory20b">#</a> d3.<b>schemeCategory20b</b> [<>](https://github.com/d3/d3-scale/blob/master/src/category20b.js "Source")

<img src="https://raw.githubusercontent.com/d3/d3-scale/master/img/category20b.png" width="100%" height="40" alt="category20b">


<a name="schemeCategory20c" href="#schemeCategory20c">#</a> d3.<b>schemeCategory20c</b> [<>](https://github.com/d3/d3-scale/blob/master/src/category20c.js "Source")

<img src="https://raw.githubusercontent.com/d3/d3-scale/master/img/category20c.png" width="100%" height="40" alt="category20c">

