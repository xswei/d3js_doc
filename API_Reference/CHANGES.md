## 4.x.x 发生了哪些改变

`D3` `v4.x.x` 是由各个独立模块协同工作的, 而不是一个单独的库. 你可以按需加载独立的模块, 默认的完整资源包中包含了大概 30 个子模块.

例如:

```js
<script src="https://d3js.org/d3.v4.0.0-alpha.50.min.js"></script>
```

你也可以按需加载模块, 比如使用颜色生成器:

```js
<script src="https://d3js.org/d3.v4.0.0-alpha.50.min.js"></script>
<script src="https://d3js.org/d3-scale-chromatic.v0.3.min.js"></script>
```

如果你不需要使用全部功能, 仅仅使用 `D3` 的选择器功能, 则可以将 `D3` 的选择器模块单独引入:

```js
<script src="https://d3js.org/d3-selection.v0.9.min.js"></script>
```

你也可以使用 `Webpack` 或 `Rollup` 来管理所需要的模块, 来生成更轻量化的包. 模块化更容易让人理解, 开发和测试, 有利于扩展更丰富的功能.

如果你觉得模块化不重要, 可以继续使用默认的包, 但是使用 `ES6` 的模块有一个问题: `D3` `v4.x.x` 中每一个功能都有一个独立的命名空间, 而 `D3` `3.x.x` 则是相互叠加的. 比如 `d3.scale.linear` 成了现在的 `d3.scaleLinear`, `d3.layout.treemap` 成了 `d3.treemap`. 而使用 `ES6` 的模块化意味着 `D3` `4.x.x` 是在严格模式下编写的, 具有更好的可读性, 在 `3.x` 的基础上几乎进行了重写, 其他功能也得到了改善.

## 其他改变

默认的通用模块定义是匿名的. `D3` 子模块共享 `d3` 全局变量, 甚至你单独的引入它们. 这样无论你是否使用了默认包能保证代码的一致性.

使用 `D3` `3.x` 时有时候会因编码问题发生 `SyntaxError` 错误, 因为 `3.x` 中使用了 `λ`, `φ`, `τ` 和 `π` 等 `unicode` 字符作为数学简明变量名. 这样在你使用 `ISO-8859-1` 来代替 `UTF-8` 编码时出错, 在 4.0 中仅仅使用ascii来编码变量和字符串, 避免出现编码问题.

## 目录

### Arrays(d3-array)

新的 `d3.scan` 方法对数组进行线性扫描, 并根据指定的比较函数返回最小元素的索引. 这个方法有点类似于 `d3.min` 和 `d3.max`. 但 `d3.scan` 可以得到极值的索引而不仅仅是计算极值. 如:

```js
var data = [
  {name: "Alice", value: 2},
  {name: "Bob", value: 3},
  {name: "Carol", value: 1},
  {name: "Dwayne", value: 5}
];

var i = d3.scan(data, function(a, b) { return a.value - b.value; }); // 2
//d3对data中的元素两两比较，返回较小的，funtion运行了3+2+1=6次
data[i]; // {name: "Carol", value: 1}
```

`d3.ticks` 和 `d3.tickStep` 方法在生成刻度时是非常有用的. 可以代替生成 `d3-scale` 的`continuous.ticks`. 新的方法更精确, 比如返回由相对误差测量的最佳刻度数量. 

```js
var ticks = d3.ticks(0, 10, 5); // [0, 2, 4, 6, 8, 10]
//0到10之间取5个刻度
```
`d3.range` 方法, 当 `step` 非整数时候不再对浮点进行校正, 而是严格返回 `start+i*step`, 其中 `i` 为整数。当范围为无限大时返回空数组而不是报错. 如下:

```js
// 3.x中
d3.range(0,1,0.3)   //[0, 0.3, 0.6, 0.9]
d3.range(Infinity)  //出错
// 4.x.x 中
d3.range(0,1,0.3)   //[0, 0.3, 0.6, 0.8999999999999999]
d3.range(Infinity)  //[]
```

一些数组访问方式被改为更方便的数组方法, 比如 `array.forEach` 访问器被传入的参数有当前的元素 `d`、索引 `i` 以及数组自身 `array`. 这影响了 `d3.min`, `d3.max`, `d3.extent`, `d3.sum`, `d3.mean`, `d3.median`, `d3.quantile`, `d3.variance` 和 `d3.deviation`. `d3.quantile` 方法之前不接受访问器. 一些方法在没有参数传入时候被当做确实而不是直接检查 `arguments.length`. 

新的 `d3.histogram` 代替原有的 `d3.layout.histogram`. 返回的每个 `bin` 的 `bin.x` 和 `bin.dx` 被替换为 `bin.x0` 和 `bin.x1`. `bin.x0` 正好等于前一个 `bin` 的 `bin.x1`. 每一个`bin`只是简单的根据输入的数据产生. 

`histogram.range` 方法被重命名为 `histogram.domain`. `histogram.bins` 方法被重命名为`histogram.thresholds` 并不再接受上限值参数. `d3.histogram` 现在使用 `d3.ticks` 计算好的阈值. 

### Axes(d3-axis)

在 `3.x` 中你必须设置如下样式

```html
<style>
.axis path,
.axis line {
  fill: none;
  stroke: #000;
  shape-rendering: crispEdges;
}
.axis text {
  font: 10px sans-serif;
}
</style>
<script>
  d3.select(".axis")
    .call(d3.svg.axis()
      .scale(x)
      .orient("bottom"));
</script>
```

要不然你会看到这样:

![image](https://raw.githubusercontent.com/d3/d3/master/img/axis-v3.png)

`4.x.x` 提供了默认的样式和更精简的语法. `3.x` 中使用 `d3.svg.axis` 和 `axis.orient` 来定义坐标轴, 而`4.x.x` 你可以直接使用 `d3.axisTop`, `d3.axisRight`, `d3.axisBottom`, `d3.axisLeft` 四种方法来生成轴. 

```html
<script>
d3.select(".axis")
  .call(d3.axisBottom(x));
</script>
```
生成如下, 你也可以像之前一样自定义样式或修改元素

![image](https://raw.githubusercontent.com/d3/d3/master/img/axis-v4.png)

还可以使用 `axis.tickArguments`, `axis.ticks`, `axis.tickSize`, `axis.tickSizeInner` 或`axis.tickSizeOuter` 方法来设置要显示刻度规律和刻度线大小等.

### Brushes(d3-brush)

代替 `d3.svg.brush` 方法, `4.x.x` 提供了 `d3.brushX`, `d3.brushY` 和 `d3.brush` 来表示沿着 `x` 方向, `y` 方向和两个方向的 3 个子类. `brushes` 不再依赖于比例尺而是定义了一个基于屏幕坐标的选择集. 但是可以根据坐标和比例尺反转来查询对应的域中包含的数据. 不必依靠比例尺的范围来确定可选取的区域. 可以通过 *brush.extent* 方法来设置. 如果不设置 *extent*, 则默认可选取的范围为当前元素所属的整个 `SVG` 元素. `brush.clamp` 方法也被移除. 刷子的范围只在所定义的 *extent* 内有效. 

刷子不再在内部存储被选中的元素, 刷子的位置被保存在被应用了刷子功能的元素上. 可以在被选中元素事件上使用刷子的位置信息. 如果以编程的方式移动刷子则使用 `brush.move` 方法

刷子提高了交互能力. 默认情况下刷子忽略某些事件比如右键单击操作, 你可以通过 `brush.filter` 来设置. 刷子也忽略了 `IOS` 上的鼠标仿真事件. 

刷子的默认样式也得到了改变. `3.x` 你必须要给刷子一个样式, 比如:

```css
.brush .extent {
  stroke: #fff;
  fill-opacity: .125;
  shape-rendering: crispEdges;
}
```

现在这些样式默认提供, 当然你也可以自定义. (4.x.x 中轴也提供了默认的样式). `brush.handleSize` 方法用来改变刷柄的尺寸, 默认为 6 像素. 刷子 `brushstart` 和 `brushend` 事件修改为start和end. 更容易与其他交互结合. 

[刷子例子](http://bl.ocks.org/mbostock/6232537)

### Chords(d3-chord)

扁平化命名空间

`d3.layout.chord` -> [d3.chord](https://github.com/d3/d3-chord#chord)

`d3.svg.chord` -> [d3.ribbon](https://github.com/d3/d3-chord#ribbon)

为了保持与 `arc.padAngle` 的一致性, `chord.padding` 被重命名为 `ribbon.padAngle`. 新的`ribbon.context` 方法支持使用 `canvas` 画布. 参考 [d3-path](https://github.com/d3/d3/blob/master/CHANGES.md#paths-d3-path)

### Colletions(d3-collection)

[d3.set](https://github.com/d3/d3-collection#set) 构造器可以接受已存在的集作为副本. 当传入一个数组时候的同时, 你也可以传入一个值访问器. 访问器函数可以使用标准参数：当前元素 `d`, 索引 `i` 以及整个数组 `data`. 如下：

```js
var yields = [
  {yield: 22.13333, variety: "Manchuria",        year: 1932, site: "Grand Rapids"},
  {yield: 26.76667, variety: "Peatland",         year: 1932, site: "Grand Rapids"},
  {yield: 28.10000, variety: "No. 462",          year: 1931, site: "Duluth"},
  {yield: 38.50000, variety: "Svansota",         year: 1932, site: "Waseca"},
  {yield: 40.46667, variety: "Svansota",         year: 1931, site: "Crookston"},
  {yield: 36.03333, variety: "Peatland",         year: 1932, site: "Waseca"},
  {yield: 34.46667, variety: "Wisconsin No. 38", year: 1931, site: "Grand Rapids"}
];
var sites = d3.set(yields, function(d) { return d.site; }); // Grand Rapids, Duluth, Waseca, Crookston
```

[d3.map](https://github.com/d3/d3-collection#map)也遵循标准的数组访问器参数模式. `map.forEach` 和 `set.forEach` 被重命名为 `map.each` 和 `set.each`. `map.each` 的参数依次为 `value`, `key` 和 `map`. `set.each` 的参数顺序为`value`, `value` 和 `set`. 这与 `ES6` 的 `map.forEach` 和 `set.forEach` 更接近. 与 `ES6` 的 `Map` 和 `Set` 类似, `map.set` 和 `set.add` 返回当前的集合(`3.x`返回当前值). 新添加的 `map.clear` 和`set.clear` 用来清空 `map` 和 `set`. 

`nest.map` 方法总是返回 `d3.map` 的实例. 当与 `nest.rollup` 结合使用的时候, `nest.entries` 返回叶节点的 `{key,value}` 对象而不是 `{key,value}`. 这使得 `nest.rollup` 更容易与层次结构结合使用. 比如 [嵌套树](http://bl.ocks.org/mbostock/2838bf53e0e65f369f476afd653663a2)

### Colors(d3-color)

所有的颜色都可以使用 `color.opacity` 来设置透明度 ([0,1]). 可以使用一个不含透明度参数的构造方法产生一个颜色, 如`d3.rgb`, `d3.hsl`, `d3.lab`, `d3.hcl` 或者 `d3.cubehelix`.

可以使用 `d3.color` 方法来将 `CSS` 颜色字符串转为 `RGB` 或 `HSL` 颜色. 它返回 `d3.color` 的实例或者 `null` (如果字符串无效).

```js
var red = d3.color("hsl(0, 80%, 50%)"); // {h: 0, l: 0.5, s: 0.8, opacity: 1}
```

`4.x.x` 中颜色解析能力更强, `d3.rgb`, `d3.hsl`, `d3.lab`, `d3.hcl` 和 `d3.cubehelix` 总是返回输入颜色转化为相应的颜色空间后的副本. 使用 `color.rgb` 来替换掉 `rgb.hsl` 来进行不同空间颜色转化.

`rgb` 颜色空间不再贪婪量化颜色, 改善了颜色精度. 在进行 `color.toString` 时可以使用 `color.displayable` 来判断颜色是否超出范围. `rgb.brighter` 方法得到了改进, 对黑色执行这个操作时返回的依然是黑色. 使用了新的颜色空间 [d3.cubehelix](https://github.com/d3/d3-color#cubehelix).

### Dispatched(d3-dispatch)

> 与在每个事件类型上装饰调度对象不同，4.0中调度对象对外提供dispatch.call和dispatch.apply两个方法并且将类型字符串作为第一个参数,例如在3.x中：

```
dispatcher.foo.call(that, "Hello, Foo!");
```
> 而在4.0中是这样：

```
dispatcher.call("foo", that, "Hello, Foo!");
```
> dispatch.on方法可以接受多个类型名称，可以同时对多个事件类型添加或移除事件监听器。比如:

```
dispatcher.on("foo bar", function(message) {
  console.log(message);
});
```
> 这符合d3-selection中选择集的新特定。dispatch.on添加了对监听器类型的检测(须一个方法)，以免之后出现错误。

> 新的d3.dispatch实现更快，使用更少的闭包来提高性能。此外还有一个dispatch.copy方法来拷贝一个dispatcher对象。当使用d3-transition对所有元素添加相同的过渡事件监听器的时候这种性能上的提高就显得很有用了。
## Dragging(d3-drag)
> 拖拽行为d3.behavior.drag被重命名为d3.drag。drag.origin由drag.subject替代用以定义拖拽的起始参考点。这在使用Canvas画布时非常有用，因为拖拽对象共享一个Canvas元素(在SVG中拖拽的元素都是独立的DOM元素)，比如[拖拽圆的例子](http://bl.ocks.org/mbostock/444757cc9f0fde320a5f469cd36860f4)

> 新的drag.container方法允许重新设置拖动元素的父级元素坐标系。坐标系默认为拖拽元素父节点。在Canvas上应用拖拽你可能要使用Canvas作为容器元素。

> Drag事件提供drag.on方法来为当前拖拽动作添加临时事件监听器。这些监听器可以捕获当前拖拽状态，比如有元素正在被拖动。使用event.active属性可以监测到当前是否有多个拖拽动作。dragstart和dragend事件被重命名为start和end。默认情况下，拖拽动作会忽略鼠标右击事件。使用drag.filter可以控制是否忽略它。拖拽行为也忽略IOS上的仿真鼠标事件。

> 新的d3.dragEnable和d3.dragDisable方法为跨浏览器和设备提供了低级别的API。这些方法在其他组件中也有，比如d3.brush。
## Delimiter-Separated Values(d3-dsv)
> 根据命名空间扁平化的思想，CSV和TSV的方法都做了重命名：

d3.csv.parse -> [d3.csvParse](https://github.com/d3/d3-dsv#csvParse)

d3.csv.parseRows -> [d3.csvParseRows](https://github.com/d3/d3-dsv#csvParseRows)

d3.csv.format -> [d3.csvFormat](https://github.com/d3/d3-dsv#csvFormat)

d3.csv.formatRows -> [d3.csvFormatRows](https://github.com/d3/d3-dsv#csvFormatRows)

d3.tsv.parse -> [d3.tsvParse](https://github.com/d3/d3-dsv#tsvParse)

d3.tsv.parseRows -> [d3.tsvParseRows](https://github.com/d3/d3-dsv#tsvParseRows)

d3.tsv.format -> [d3.tsvFormat](https://github.com/d3/d3-dsv#tsvFormat)

d3.tsv.formatRows -> [d3.tsvFormatRows](https://github.com/d3/d3-dsv#tsvFormatRows)

> 用以加载文件的d3.csv和d3.tsv方法没有被重命名，但是他们被定义在d3-request。不再由d3.dsv来定义。而是使用d3.dsvFormat方法来定义自定义分割解析器。你可以使用request.response来获取内容然后解析。或者使用d3.text方法。

> dsv.parse方法提供了columns来获取列名，比如：

```
d3.csv("cars.csv", function(error, data) {
  if (error) throw error;
  console.log(data.columns); // ["Year", "Make", "Model", "Length"]
});
```
> 你可以为dsv.format方法传入一个数组来按顺序获取指定的列,比如：

```
var string = d3.csvFormat(data, ["Year", "Model", "Length"]);
```
> 新的解析器更快并且更强大：输入数据在转化格式之前被强制转为字符串可以修复转化崩溃问题。

## Easings(d3-ease)
> 在3.x中使用字符串来定义过渡类型，然后将这些字符串传入d3.ease或transition.ease。在4.0中通过定义符号来设置过渡类型。比如[d3.easeCubicInOut.](https://github.com/d3/d3-ease#easeCubicInOut)。定义过渡符号是简洁的。如果需要的话你也可以自定义过渡类型。下面是3.x中字符与4.0中符号的对应关系：


linear -> d3.easeLinear¹

linear-in -> d3.easeLinear¹

linear-out -> d3.easeLinear¹

linear-in-out -> d3.easeLinear¹

linear-out-in -> d3.easeLinear¹

poly-in -> d3.easePolyIn

poly-out -> d3.easePolyOut

poly-in-out -> d3.easePolyInOut

poly-out-in -> REMOVED²

quad-in -> d3.easeQuadIn

quad-out -> d3.easeQuadOut

quad-in-out -> d3.easeQuadInOut

quad-out-in -> REMOVED²

cubic-in -> d3.easeCubicIn

cubic-out -> d3.easeCubicOut

cubic-in-out -> d3.easeCubicInOut

cubic-out-in -> REMOVED²

sin-in -> d3.easeSinIn

sin-out -> d3.easeSinOut

sin-in-out -> d3.easeSinInOut

sin-out-in -> REMOVED²

exp-in -> d3.easeExpIn

exp-out -> d3.easeExpOut

exp-in-out -> d3.easeExpInOut

exp-out-in -> REMOVED²

circle-in -> d3.easeCircleIn

circle-out -> d3.easeCircleOut

circle-in-out -> d3.easeCircleInOut

circle-out-in -> REMOVED²

elastic-in -> d3.easeElasticOut²

elastic-out -> d3.easeElasticIn²

elastic-in-out -> REMOVED²

elastic-out-in -> d3.easeElasticInOut²

back-in -> d3.easeBackIn

back-out -> d3.easeBackOut

back-in-out -> d3.easeBackInOut

back-out-in -> REMOVED²

bounce-in -> d3.easeBounceOut²

bounce-out -> d3.easeBounceIn²

bounce-in-out -> REMOVED²

bounce-out-in -> d3.easeBounceInOut²

> 与为d3.ease和transition.ease传入字符串不同，参数化的过渡更加灵活，比如指数过渡时候可以传入指数大小，其他也类似(poly.exponent, elastic.amplitude, elastic.period，back.overshoot)。比如在3.x中你可以如下定义：


```
var e = d3.ease("elastic-out-in", 1.2);
```
> 而在4.0中你可以如下定义：

```
var e = d3.easeElastic.amplitude(1.2);
```
> 许多过渡方法都得到了性能和精确度上的优化。并修复了一些bug，比如transition中保证了最后一帧时候t=1避免因小数点引起的错误。

> 新过渡方法的[视觉参考](https://github.com/d3/d3-ease/blob/master/README.md)和[动画参考](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4)。

## Forces(d3-force)
> d3.layout.force被重命名为d3.forceSimulation。新的力导向仿真使用速度Verlet算法而不是位置Verlet算法，即追踪节点的位置(node.x，node.y)和速度(node.vx,node.vy)而不是之前的位置(node.px，node.py)。

> 现在的力导向仿真可以很好的扩展：你可以指定哪些受力。这个方法使得作品更柔和。新的力导向也更灵活：可以为每个节点和连接设置参数。可以指定单独的x和y来代替force.gravity。新的link force代替force.linkStrength并且更稳定。新的many-body force代替原有的force.charge并且支持最小距离参数。性能的提高归功于4.0的新的四叉树。4.0提供了冲突解决和向中对齐的方法。

> 新的力导向仿真避免不确定性，比如在3.x中结点的初始位置是随机的，如果结点没有初始位置，则被放置在一个类似叶序图案上。

![image](https://raw.githubusercontent.com/d3/d3-force/master/img/phyllotaxis.png)
> 力导向仿真提供了一些方法来控制结点"过热"(根本停不下来那种),比如simulation.alphaMin和simulation.alphaDecay和内部计时器。调用simulation.alpha时对内部计时器没有影响，它由simulation.stop和simulatonrestart独立控制。与3.x一样，4.0使用simulation.tick来打点。force.frition由simulation.velocityDecay代替。新的simulation.alphaTarget方法允许设置期望的仿真"温度"(什么时候停下来)。这样可以使仿真重新开始然后再次冷却，提高了交互过程中的稳定性。

> force布局不再依赖拖拽行为，因为你可以直接创建一个可拖动的力导向布局。设置node.fx和node.fy来修正节点的位置。simulation.find方法替代了泰森多边形的SVG叠加，以找到最近节点的引用。
## Number Formats(d3-format)
> 默认精度发生了变化：除了none以外所有的指令位数默认为6，而3.x中为12。4.0中的默认精度产生的结果格式更一致：

```
var f = d3.format("e");
f(42);        // "4.200000e+1"
f(0.1 + 0.2); // "3.000000e-1"
```
> 在3.x中

```
var f = d3.format("e");
f(42);        // "4.200000e+1"
f(0.1 + 0.2); // "3.0000000000000004e-1"
```
> 使用node指令去除去无关紧要的末尾0，类似于g,例如

```
var f = d3.format(".3");
f(0.12345);   // "0.123"
f(0.10000);   // "0.1"
f(0.1 + 0.2); // "0.3"
```
> 在实现方面，使用number.toExponential代替Math.log来获取小数和指数提高了精确度。负0被格式化为无符号0。内部不安全的d3.round方法和d3.d3.requote被移除。

> d3.formatPrefix方法被改变。与返回带国际单位的字符串不同，它根据给定的分隔符和参考值返回一个国际单位格式化函数。比如格式化千：

```
var f = d3.formatPrefix(",.0", 1e3);
f(1e3); // "1k"
f(1e4); // "10k"
f(1e5); // "100k"
f(1e6); // "1,000k"
```
> 与d3.format的s指令不同，d3.formatPrefix总是返回相同的单位：

```
var f = d3.format(".0s");
f(1e3); // "1k"
f(1e4); // "10k"
f(1e5); // "100k"
f(1e6); // "1M"
```
> (标示用来将负数括起来，这在与$一起使用时很有用：

```
d3.format("+.0f")(-42);  // "-42"
d3.format("(.0f")(-42);  // "(42)"
d3.format("+$.0f")(-42); // "-$42"
d3.format("($.0f")(-42); // "($42)"
```
> =标示用来在左侧填充间隔：

```
d3.format(">6d")(-42);  // "   -42"
d3.format("=6d")(-42);  // "-   42"
d3.format(">(6d")(-42); // "  (42)"
d3.format("=(6d")(-42); // "(  42)"
```
> b,o,d和x指令会将参数四舍五入为最近整数后转化，而不是在遇到非整型数字时返回空字符串：

```
d3.format("b")(41.9); // "101010"
d3.format("o")(41.9); // "52"
d3.format("d")(41.9); // "42"
d3.format("x")(41.9); // "2a"
```
> c指令用来处理字符串数据，在想要填补对齐的时候是很有用的，比如三种对齐方式：

```
d3.format(">10c")("foo"); // "       foo"
d3.format("^10c")("foo"); // "   foo    "
d3.format("<10c")("foo"); // "foo       "
```
> 提供了一些新的的方法来计算建议的小数位数。这些方法也被d3-scale的刻度格式化使用并且很有用: d3.precisionFixed, d3.precisionPrefix和d3.precisionRound

## Geographies(d3-geo)
> 为了扁平化命名空间，对下列方法进行了重命名：
d3.geo.graticule -> d3.geoGraticule

d3.geo.circle -> d3.geoCircle

d3.geo.area -> d3.geoArea

d3.geo.bounds -> d3.geoBounds

d3.geo.centroid -> d3.geoCentroid

d3.geo.distance -> d3.geoDistance

d3.geo.interpolate -> d3.geoInterpolate

d3.geo.length -> d3.geoLength

d3.geo.rotation -> d3.geoRotation

d3.geo.stream -> d3.geoStream

d3.geo.path -> d3.geoPath

d3.geo.projection -> d3.geoProjection

d3.geo.projectionMutator -> d3.geoProjectionMutator

d3.geo.albers -> d3.geoAlbers

d3.geo.albersUsa -> d3.geoAlbersUsa

d3.geo.azimuthalEqualArea -> d3.geoAzimuthalEqualArea

d3.geo.azimuthalEquidistant -> d3.geoAzimuthalEquidistant

d3.geo.conicConformal -> d3.geoConicConformal

d3.geo.conicEqualArea -> d3.geoConicEqualArea

d3.geo.conicEquidistant -> d3.geoConicEquidistant

d3.geo.equirectangular -> d3.geoEquirectangular

d3.geo.gnomonic -> d3.geoGnomonic

d3.geo.mercator -> d3.geoMercator

d3.geo.orthographic -> d3.geoOrthographic

d3.geo.stereographic -> d3.geoStereographic

d3.geo.transverseMercator -> d3.geoTransverseMercator

> 也为了一致性对下面方法进行了重命名：

circle.origin -> circle.center

circle.angle -> circle.radius

graticule.majorExtent -> graticule.extentMajor

graticule.minorExtent -> graticule.extentMinor

graticule.majorStep -> graticule.stepMajor

graticule.minorStep -> graticule.stepMinor

> 4.0中投影有更多的默认设置，比如d3.geoOrthographic默认90度的弯角。仅仅显示前半球。d3.geoGnomonic默认60度的夹角。d3.geoPath默认的投影为null而不是d3.geoAlbersUsa。空投影在使用pre-projected geometry时可以被更快的渲染。

> path.projection不再被支持，而是使用d3.geoProjection或d3.geoProjectionMutator来定义一个自定义投影方式。对于任意的几何变换，可以参考[d3-geoTransform](https://github.com/d3/d3-geo#geoTransform)。
## Hierarchies(d3-hierarchy)
> 为了扁平化命名空间，对下列方法进行了重命名：

d3.layout.cluster -> d3.cluster

d3.layout.hierarchy -> d3.hierarchy

d3.layout.pack -> d3.pack

d3.layout.partition -> d3.partition

d3.layout.tree -> d3.tree

d3.layout.treemap -> d3.treemap
> 作为JSON的替代,d3的分层操作d3-stratify可以将一个列表数据转为层次结构数据。如果你使用的是SQL查询结果或CSV数据时可以使用这个方法：

```
name,parent
Eve,
Cain,Eve
Seth,Eve
Enos,Seth
Noam,Seth
Abel,Eve
Awan,Eve
Enoch,Awan
Azura,Eve
```
> 转化操作：

```
var root = d3.stratify()
    .id(function(d) { return d.name; })
    .parentId(function(d) { return d.parent; })
    (nodes);
```
> 使用d3.tree对root进行可视化结果：

![image](https://raw.githubusercontent.com/d3/d3/master/img/stratify.png)

> root节点当然也可以使用d3.hierarchy方法由JSON数据创建。4.0中层次布局使用root节点而非直接使用JSON数据可以在输入数据和布局之间很容易的进行区分。(比如node、.copy可以阻断布局的改变)。并且API也更简单：与之前相比，不再需要向value和sort来传入访问器函数，现在使用更一般的方法node.sum和node.sort来与层次结构布局结合。

> 新的d3.hierarchy API也为多样化的层级数据提供了更丰富的方法。比如，使用node.descendants为将拓扑序列所有的节点生成为数组。使用node.ancestors来访问祖先节点。使用node.links来生成{source,target}连接。替换了类似treemap.links以及其他布局中相似的方法。node.path方法代替了d3.layout.bundle布局。可以参考层级边捆绑的
[d3.curveBundle实例](https://github.com/d3/d3-shape#curveBundle)。

> 层级布局也被重写了。不在使用递归遍历方法，提高了性能(尤其是大数据集)。d3.tree布局不再使用node._来存储布局过程中的临时状态。

> treemap可以通过treemap.tile来扩展。默认的分区算法d3.treemapSquarify被重写了，提高了性能并修复了间距和取整bug。treemap.sticky方法由d3.treemapResquarify替代，treemap.ratio由squarify.ratio替代。并且新添加了d3.treemapBinay来实现二叉树图。

> 树图的间距也得到了提升。比如可以分开设置父子节点之间的间距(out padding)以及兄弟节点之间的间距(inner padding)。并且可以设置top-,right-,bottom-和left-outer间距。比如[nested treemap](http://bl.ocks.org/mbostock/911ad09bdead40ec0061)

> 间隙填充布局d3.treemap和d3.partition现在为每个节点提供x0,x1,y0,y1来代替原有的x0,dx,y0,dy。这可以确保相邻的两个元素之间的边是相等的，解决了由于浮点数引起的细微的差别。

> 圆形布局d3-pack也根据Welzl’的算法重写了，修复了一些bug。Welzl’ al.的算法可以精准的计算出每个父节点的最小包围圈，这比之前使用Wang et al的算法要准确很多。对比：下图中左边是3.x，右边是4.0：

3.x | 4.0
---|---
![image](https://raw.githubusercontent.com/d3/d3/master/img/pack-v3.png) | ![row 1 col 2](https://raw.githubusercontent.com/d3/d3/master/img/pack-v4.png)


## Interpolators(d3-interpolate)
> d3.interpolate方法不再依赖被移除的d3.interpolators了。它本地直接定义在库中，并且当对数值插值时稍快些。当使用d3.interpolateRgb对有效的CSS颜色说明符插值时，如果终点值为null,undefined或者布尔值时始终返回终点值。

> d3.interpolateObject和d3.interpolateArray做了一些改变。当起始值a不存在终止值b中时，这些不存在的将会被忽略。如下在4.0中bar属性被忽略：

```
d3.interpolateObject({foo: 2, bar: 1}, {foo: 3})(0.5); // {bar: 1, foo: 2.5} in 3.x

d3.interpolateObject({foo: 2, bar: 1}, {foo: 3})(0.5); // {foo: 2.5} in 4.0
```
> 如果a或者b为undefined或者不是对象类型时，它们将隐式的转为对象类型而不是抛出类型错误。

> 对变化进行插值被改名为d3.interpolateTransformSvg。对css插值也有对应的d3.interpolateTransformCss方法。并且允许自动在变换属性和样式属性之间插值(仅仅支持2D变换)。d3.transform方法被移除。

> 对颜色插值时返回rgb或rgba颜色字符串而不是十六进制格式。这样可以支持对的透明度插值。当起始颜色未定义时候，颜色插值器使用终止颜色值，反之亦然。这种思路之前被应用在某些颜色通道，而现在被应用在所有的颜色通道。

> 在特殊的圆柱形颜色通道比如 d3.interpolateHslLong, d3.interpolateHclLong和d3.interpolateCubehelixLong，插值器对色相进行线性插值而不是围绕一周的最短路径。

> 伽马矫正颜色插值也被支持。如使用interpolate.gamma来对如下颜色进行插值：

```
var interpolate = d3.interpolateRgb.gamma(2.2)("purple", "orange");
```
> 新添加了B样条插值器。这在任意离散的值之间过渡时是有用的。比如为离散的颜色创建平滑的颜色过渡。比如：d3.interpolateBasis和d3.interpolateBasisClosed 创建一维的B样条插值器。d3.interpolateRgbBasis和d3.interpolateRgbBasisClosed创建三维的RGB颜色空间B样条插值器。

> d3.quantize方法可以从连续的插值空间中生成等间距的离散采样。在使用颜色比例尺时可以用这个来设置颜色。

## Path(d3-path)
> d3.path的串行化支持使用 [CanvasPathMethods API](https://www.w3.org/TR/2dcontext/#canvaspathmethods)。可以将结果渲染到Canvas或SVG上。例如:

```
function drawCircle(context, radius) {
  context.moveTo(radius, 0);
  context.arc(0, 0, radius, 0, 2 * Math.PI);
}
```
> 可以将结果通过如下方式渲染到SVG上：

```
var context = d3.path();
drawCircle(context, 40);
pathElement.setAttribute("d", context.toString());
//context.toString()返回svg适用的路径字符串
```
> d3.path的串行化可以方便的在SVG和Canvas之间切换。
## Polygons(d3-polygon)
> 不再使用d3.geom.polygon构造器，取而代之的是你仅仅需要为polygon方法传入顶点数组。polygon.area和polygon.centriod由d3.polygonArea和d3.polygonCentriod代替。并且新添加了d3.polygonContains和d3.polygonLength方法。

> d3.geom.hull操作也由hull.x和hull.y代替。d3.polygonHull方法接受一组点返回convex hull

## Quadtrees(d3-quadtree)
> d3.geom.quadtree方法由d3.quadtree代替。4.0移除了四叉树生成器的概念。可以通过d3.quantree来生成四叉树，并通过quantree.add和qunatree.addAll方法来添加数据，比如在3.x中：

```
var quadtree = d3.geom.quadtree()
    .extent([[0, 0], [width, height]])
    (data);
```
> 而在4.0中：

```
var quadtree = d3.quadtree()
    .extent([[0, 0], [width, height]])
    .addAll(data);
```
> 新的四叉树的设计也得到了提升，不再使用递归，避免了有大量重合点的时候栈溢出。内部存储也更高效。构造一个100w点的四叉树通常只需要1秒，而在3.x中需要3秒。

> 内部结构也影响了qunatree.visit:使用node.length属性来区分叶节点和其他节点。例如,遍历所有的节点：


```
quadtree.visit(function(node) {
  if (!node.length) {
    do {
      console.log(node.data);
    } while (node = node.next)
  }
});
```
> 新的quantree.visitAfter方法可以使用后序遍历方法来遍历四叉树。并且可以使用quan.remove或quantree.removeAll来移除数据。新的数据加入到四叉树中时，四叉树将会通过反复判断这个数据是否已经存在与四叉树中，从而扩张它的范围。quantree.extent和quantree.cover方法可以在创建的时候显式的指定四叉树的范围。

> 四叉树还提供了几种实用的方法:quantree.copy(拷贝),quantree.data(获取所有的数据，返回数组),quantree.size(获取数据尺寸),quantree.root(获取根节点),quantree.find(查找)。
## Queues(d3-queue)
> 4.0提供了默认的队列数据结构。
## Random Numbers(d3-random)
> 为了命名空间的扁平化，对以下方法进行了重命名：

d3.random.normal -> d3.randomNormal

d3.random.logNormal -> d3.randomLogNormal

d3.random.bates -> d3.randomBates

d3.random.irwinHall -> d3.randomIrwinHall

> 增加了指数和均匀分布生成器。标准分布和对数分布得到了优化
## Request(d3-request)
> d3.xhr被重命名为d3.request。增加了用户名和密码的基本认证(request.user以及request.paddword)。可以使用request.timeout来设置超时时间。

> 如果请求出错，当前会向会监听器而传入"error"而不是XMLHTTPRequest。当前状态被传入到事件监听器而不是使用d3.event。如果d3.xml在解析xml时遇到错误，错误会被传给监听器而不是返回空回应。

> 除了d3.html和d3.xml以外也支持node-XMLHttpRequest(XMLHTTPRequest的包装)

## Scales(d3-scale)
> 为了扁平化命名空间，对如下方法进行重命名：

d3.scale.linear -> d3.scaleLinear

d3.scale.sqrt -> d3.scaleSqrt

d3.scale.pow -> d3.scalePow

d3.scale.log -> d3.scaleLog

d3.scale.quantize -> d3.scaleQuantize

d3.scale.threshold -> d3.scaleThreshold

d3.scale.quantile -> d3.scaleQuantile

d3.scale.identity -> d3.scaleIdentity

d3.scale.ordinal -> d3.scaleOrdinal

d3.time.scale -> d3.scaleTime

d3.time.scale.utc -> d3.scaleUtc

> 比例尺的刻度与输入范围的顺序一致。比如有一个输入范围降序的比例尺，生成的刻度也是降序的。这个改变影响了由axes生成的刻度顺序，比如：

```
d3.scaleLinear().domain([10, 0]).ticks(5); // [10, 8, 6, 4, 2, 0]
```
> 对数刻度默认10个刻度，而不是无穷多个。非线性的比例尺的刻度也更精确。在使用序数比例尺时你可以选择是否对输入值进行隐式转换，如果输入的值不属于定义的domain的话。默认情况下ordinal.unknown是d3.scalemplicit，这样会将这个值传入到domain中：

```
var x = d3.scaleOrdinal()
    .domain([0, 1])
    .range(["red", "green", "blue"]);

x.domain(); // [0, 1]
x(2); // "blue"
x.domain(); // [0, 1, 2]
```
> 如果设置了ordianl.unknown，就会严格按照定义的比例尺进行输入输出，不会自动为domain添加元素：

```
var x = d3.scaleOrdinal()
    .domain([0, 1])
    .range(["red", "green", "blue"])
    .unknown(undefined);

x.domain(); // [0, 1]
x(2); // undefined
x.domain(); // [0, 1]
```
>  ordinal.rangeBands和ordinal.rangeRoundBands 方法被新的子类代替：[Band  Scales](https://github.com/d3/d3-scale#band-scales),如在3.x中：


```
var x = d3.scaleOrdinal()
    .domain(["a", "b", "c"])
    .rangeBands([0, width]);
```
> 而在4.0中:

```
var x = d3.scaleBand()
    .domain(["a", "b", "c"])
    .range([0, width]);
```
> 新的band.padding, band.paddingInner和band.paddingOuter 方法代替原有的ordinal.rangeBands方法。 band.bandwidth和band.step代替原有的ordinal.rangeBand。新的band.align方法可以用来控制外边界的分布

> 类似的ordinal.rangePoints和ordinal.rangeRoundPoints方法也被子类替换：point scales,在3.x中：

```
var x = d3.scaleOrdinal()
    .domain(["a", "b", "c"])
    .rangePoints([0, width]);
```
> 4.0中:

```
var x = d3.scalePoint()
    .domain(["a", "b", "c"])
    .range([0, width]);
```
> 新的point.padding方法代替了ordinal.rangePoints。与ordinal.rangeBand 和 ordinal.rangePoints类似，point.bandWidth方法总是返回0。point.step方法返回相邻两点之间的间隔。

> 之前的颜色序数被改为：

d3.scale.category10 -> d3.schemeCategory10

d3.scale.category20 -> d3.schemeCategory20

d3.scale.category20b -> d3.schemeCategory20b

d3.scale.category20c -> d3.schemeCategory20c

> 3.x中：

```
var color = d3.scaleCategory10();
```

> 4.0中：

```
var color = d3.scaleOrdinal(d3.schemeCategory10);
```
> 连续比例尺是一个新的比例尺，将range使用插值代替。受Matplotlib的配色方案启发，4.0支持 viridis, inferno, magma, plasma四种连续颜色比例尺。使用d3.quantize来对这些进行离散量化后这些颜色使用到其他的比例尺。

连续颜色比例尺 |
---|---
![row 1 col 1](https://raw.githubusercontent.com/d3/d3-scale/master/img/viridis.png) |
![image](https://raw.githubusercontent.com/d3/d3-scale/master/img/inferno.png)|
![row 3 col 1](https://raw.githubusercontent.com/d3/d3-scale/master/img/magma.png) |
![row 4 col 1](https://raw.githubusercontent.com/d3/d3-scale/master/img/plasma.png) |

> 4.0也添加了新的Cubehelix配色方案，包括 Dave Green’s default和cyclical rainbow(受启发于Matteo Niccoli)：

Cubehelix配色方案 | 
---|---
![row 1 col 1](https://raw.githubusercontent.com/d3/d3-scale/master/img/cubehelix.png) | 
![row 2 col 1](https://raw.githubusercontent.com/d3/d3-scale/master/img/rainbow.png) | 
![row 4 col 1](https://raw.githubusercontent.com/d3/d3-scale/master/img/warm.png)| 
![row 2 col 1](https://raw.githubusercontent.com/d3/d3-scale/master/img/cool.png) | 


> 更多信息查阅  [d3-scale-chromatic](https://github.com/d3/d3-scale-chromatic) 和 [introducing d3-scale](https://medium.com/@mbostock/introducing-d3-scale-61980c51545f)

## Selection(d3-selection)
> 选择集不再被添加到Array的原型链上，而是简单的使用对象，提高了效率。内部存储(selection._groups和selection._parent)。请使用公共API来操作选择集。selection.nodes方法以数组的形式返回选择集中的所有节点而不是第一个。

> selection.sort和selection.data方法返回新的选择集而不是在原有的选择集上操作。selection.append方法不再将新加入的节点合并到undate选择集中。使用selection.merge方法来对绑定后的enter和update进行结合。例如在3.x中：

```
var circle = svg.selectAll("circle").data(data) // UPDATE
    .style("fill", "blue");

circle.exit().remove(); // EXIT

circle.enter().append("circle") // ENTER; modifies UPDATE! 🌶
    .style("fill", "green");

circle // ENTER + UPDATE
    .style("stroke", "black");
```
> 而在4.0中：

```
var circle = svg.selectAll("circle").data(data) // UPDATE
    .style("fill", "blue");

circle.exit().remove(); // EXIT

circle.enter().append("circle") // ENTER
    .style("fill", "green")
  .merge(circle) // ENTER + UPDATE
    .style("stroke", "black");
```
> 在3.x中 selection.enter和seletion.exit方法在调用selection.data之前都是未定义的。因此如果你试着调用这两个会抛出类型错误异常。在4.0中只是简单的返回空集(绑定数据之前)。

> 在3.x中selection.append总是在当前选择集末尾追加一个新的元素，当然可以使用selection.insert插入元素。这样会导致enter部分的元素被插入到update集之前。在4.0中默认的selection.append，如果不为seleciton.insert指定一个选择符，insert操作将会被追加到莫问。这样可以保证元素和数据的相对位置，例如有如下元素：

```
<div>a</div>
<div>b</div>
<div>f</div>
```
> 和如下代码:

```
var div = d3.select("body").selectAll("div")
  .data(["a", "b", "c", "d", "e", "f"], function(d) { return d || this.textContent; });

div.enter().append("div")
    .text(function(d) { return d; });
```
> 最后的元素为：

```
<div>a</div>
<div>b</div>
<div>c</div>
<div>d</div>
<div>e</div>
<div>f</div>
```
> 新加入的元素 c d e被插入到f之前。但是f是update集中的一个元素。尽管这样也可以保证数据与元素对应如果数据的顺序是固定的，但是如果数据改变了顺序，你依旧需要selection.order来对元素进行排序。

> selection方法做了一些微小的改变。在3.x中，如果多个数据有相同的键值，这些次重复的数据将被忽略并且不被包含在exit，update和enter中。选择集增加了一些新方法：selection.raise用来将当前元素添加到当前元素同代元素最前面。selection.lower则将当前元素放到同代元素最末尾。selection.dispatch可以添加一个事件监听器。

> 当使用获取模式,即不传入参数时候，seleciotn.data返回当前绑定的数据集，而不仅仅是第一个元素绑定的数据。selection.call方法当调用指定的函数时不再设置this环境，selection将被作为第一个参数。selection.on方法可以同时接受多个类型事件，比如：

```
selection.on("mousedown touchstart", function() {
  console.log(d3.event.type);
});
```

> 回调的参数也发生了变化,标准的参数应该是当前绑定的数据d,索引i以及元素组(节点)以及this。这与selection.data有些不同,selection.data被视为每个组而不是每个元素，它传入的参数为当前绑定的数据d,索引i以及选择集的父节点,this指向组的父节点。

> d3.ns.prefix被命名为d3.namespaces，d3.ns.qualify被命名为d3.namespace。d3.matcher可以在selection.filter中对元素过滤。d3.selector可以由selection.select使用,d3.selectorAll可以由selection.selectAll使用。d3.creator可以由selection.append和selection.insert使用。d3.window返回给定元素的所属window对象或文档。d3.customEvent当调用方法时临时设置d3.event，允许自定义事件调度。这种方法也被应用在d3.drag,d3.zoom和d3.brush中。

## Shapes(d3-shape)
> 为了扁平化命名空间，对如下方法进行重命名或移除：

d3.svg.line -> d3.line

d3.svg.line.radial -> d3.radialLine

d3.svg.area -> d3.area

d3.svg.area.radial -> d3.radialArea

d3.svg.arc -> d3.arc

d3.svg.symbol -> d3.symbol

d3.svg.symbolTypes -> d3.symbolTypes

d3.layout.pie -> d3.pie

d3.layout.stack -> d3.stack

d3.svg.diagonal -> REMOVED (see d3/d3-shape#27)

d3.svg.diagonal.radial -> REMOVED

> 形状不再局限于SVG。也可以由canvas渲染。形状生成器支持可选的上下文环境：CanvasRenderingContext2D，你可以生成一个路径来填充或描边。比如定义一个canvas的arc生成器：

```
var arc = d3.arc()
    .outerRadius(radius - 10)
    .innerRadius(0)
    .context(context);
```

> 然后渲染圆弧：

```
context.beginPath();
arc(d);
context.fill();
```
> line.context，area.context和arc.context类似。当context为空时返回使用d3-path返回一个序列化的SVG路径。4.0介绍了一些新的曲线API来说明如何根据数据为line和area插值。line.interpolate和area.interpolate方法由line.curve和area.curve代替。曲线的实现使用曲线接口而非返回svg路径的函数，这也同时兼容了SVG和Canvas。line.curve和area.curve的参数由字符串替换为方法，完整的替代如下：

linear -> d3.curveLinear

linear-closed -> d3.curveLinearClosed

step -> d3.curveStep

step-before -> d3.curveStepBefore

step-after -> d3.curveStepAfter

basis -> d3.curveBasis

basis-open -> d3.curveBasisOpen

basis-closed -> d3.curveBasisClosed

bundle -> d3.curveBundle

cardinal -> d3.curveCardinal

cardinal-open -> d3.curveCardinalOpen

cardinal-closed -> d3.curveCardinalClosed

monotone -> d3.curveMonotoneX

> 但那并不是全部，4.0还提供了新的插值方式：d3.curveCatmullRom, d3.curveCatmullRomClosed和d3.curveCatmullRomOpen.

插值方式 | 效果
---|---
d3.curveCatmullRom | ![row 1 col 2](https://raw.githubusercontent.com/d3/d3-shape/master/img/catmullRom.png)
d3.curveCatmullRomClosed | ![row 2 col 2](https://raw.githubusercontent.com/d3/d3-shape/master/img/catmullRomOpen.png)
d3.curveCatmullRomOpen | ![row 3 col 2](https://raw.githubusercontent.com/d3/d3-shape/master/img/catmullRomClosed.png)

> 每一种曲线都可以通过自己的参数来代替 line.tension和area.tension。比如默认的Catmull–Rom曲线的 catmullRom.alpha默认为0.5,你可以定义更一般的参数化曲线：

```
var line = d3.line()
    .curve(d3.curveCatmullRom.alpha(0.5));
```
> 4.0引入了一些新的符号API。定义的符号类型被传入symbol.type而不是传入字符串：

circle d-> d3.symbolCircle

cross d-> d3.symbolCross

diamond d-> d3.symbolDiamond

square d-> d3.symbolSquare

triangle-down d-> REMOVED

triangle-up d-> d3.symbolTriangle

ADDED d-> d3.symbolStar

ADDED d-> d3.symbolWye




header 1 | 
---|---
![row 1 col 1](https://raw.githubusercontent.com/d3/d3-shape/master/img/circle.png) | 
![image](https://raw.githubusercontent.com/d3/d3-shape/master/img/cross.png) | 
![row 1 col 1](https://raw.githubusercontent.com/d3/d3-shape/master/img/diamond.png) | 
![row 2 col 1](https://raw.githubusercontent.com/d3/d3-shape/master/img/square.png) | 
![row 1 col 1](https://raw.githubusercontent.com/d3/d3-shape/master/img/star.png) | 
![row 2 col 1](https://raw.githubusercontent.com/d3/d3-shape/master/img/triangle.png) | 
![row 2 col 1](https://raw.githubusercontent.com/d3/d3-shape/master/img/wye.png) | 


> 4.0对堆栈布局进行了大修。使用d3.stack代替d3.layout.stack。堆栈生成器需要一个x访问器。此外API也被简化：stack生成器接受扁平数据输入，比如以下数组：

```
var data = [
  {month: new Date(2015, 0, 1), apples: 3840, bananas: 1920, cherries: 960, dates: 400},
  {month: new Date(2015, 1, 1), apples: 1600, bananas: 1440, cherries: 960, dates: 400},
  {month: new Date(2015, 2, 1), apples:  640, bananas:  960, cherries: 640, dates: 400},
  {month: new Date(2015, 3, 1), apples:  320, bananas:  480, cherries: 640, dates: 400}
];
```
> 为了生成堆栈布局，首先定义一个堆栈生成器，然后将生成器应用在数据上：

```
var stack = d3.stack()
    .keys(["apples", "bananas", "cherries", "dates"])
    .order(d3.stackOrderNone)
    .offset(d3.stackOffsetNone);

var series = stack(data);
```
> 转化后的series数据格式如下，每个数据都有两个值表示下界和上界：


```
[
  [[   0, 3840], [   0, 1600], [   0,  640], [   0,  320]], // apples
  [[3840, 5760], [1600, 3040], [ 640, 1600], [ 320,  800]], // bananas
  [[5760, 6720], [3040, 4000], [1600, 2240], [ 800, 1440]], // cherries
  [[6720, 7120], [4000, 4400], [2240, 2640], [1440, 1840]], // dates
]
```
> 之后这些数据使用area生成器渲染或者渲染为bar图。

## Time Formats(d3-time-format)
> 为扁平化命名空间，对如下方法进行了重命名：

d3.time.format -> d3.timeFormat

d3.time.format.utc -> d3.utcFormat

d3.time.format.iso -> d3.isoFormat

> format.parse方法也被移除了。如在3.x中：


```
var parseTime = d3.time.format("%c").parse;
```
> 在4.0中：

```
var parseTime = d3.timeParse("%c");
```
> d3.time.format.multi由 d3.scaleTime的tick format代替。%z支持更灵活的时区，根据当本地时间比两个字符更长时能使用%p命令可以更准确的转换。默认的美国标准时间为12小时制并且更简明。这与在chrome和firefox中的 date.toLocaleString一致:

```
var now = new Date;
d3.timeFormat("%c")(new Date); // "6/23/2016, 2:01:33 PM"
d3.timeFormat("%x")(new Date); // "6/23/2016"
d3.timeFormat("%X")(new Date); // "2:01:38 PM"
```
> 时间格式化和解析性能得到了提高，并且实现更清晰明了

## Time Intervals(d3-time)
> 为了扁平化命名空间，本地时间间隔被修改(添加、重命名、移除)为：

ADDED -> d3.timeMillisecond

d3.time.second -> d3.timeSecond

d3.time.minute -> d3.timeMinute

d3.time.hour -> d3.timeHour

d3.time.day -> d3.timeDay

d3.time.sunday -> d3.timeSunday

d3.time.monday -> d3.timeMonday

d3.time.tuesday -> d3.timeTuesday

d3.time.wednesday -> d3.timeWednesday

d3.time.thursday -> d3.timeThursday

d3.time.friday -> d3.timeFriday

d3.time.saturday -> d3.timeSaturday

d3.time.week -> d3.timeWeek

d3.time.month -> d3.timeMonth

d3.time.year -> d3.timeYear

> UTC时间间隔：

ADDED -> d3.utcMillisecondd

d3.time.second.utc -> d3.utcSecondd

d3.time.minute.utc -> d3.utcMinuted

d3.time.hour.utc -> d3.utcHourd

d3.time.day.utc -> d3.utcDayd

d3.time.sunday.utc -> d3.utcSundayd

d3.time.monday.utc -> d3.utcMondayd

d3.time.tuesday.utc -> d3.utcTuesdayd

d3.time.wednesday.utc -> d3.utcWednesdayd

d3.time.thursday.utc -> d3.utcThursdayd

d3.time.friday.utc -> d3.utcFridayd

d3.time.saturday.utc -> d3.utcSaturdayd

d3.time.week.utc -> d3.utcWeekd

d3.time.month.utc -> d3.utcMonthd

d3.time.year.utc -> d3.utcYear

> 本地时间区间重命名为：

d3.time.seconds -> d3.timeSeconds

d3.time.minutes -> d3.timeMinutes

d3.time.hours -> d3.timeHours

d3.time.days -> d3.timeDays

d3.time.sundays -> d3.timeSundays

d3.time.mondays -> d3.timeMondays

d3.time.tuesdays -> d3.timeTuesdays

d3.time.wednesdays -> d3.timeWednesdays

d3.time.thursdays -> d3.timeThursdays

d3.time.fridays -> d3.timeFridays

d3.time.saturdays -> d3.timeSaturdays

d3.time.weeks -> d3.timeWeeks

d3.time.months -> d3.timeMonths

d3.time.years -> d3.timeYears

> UTC时间区间被重名为:

d3.time.seconds.utc -> d3.utcSeconds

d3.time.minutes.utc -> d3.utcMinutes

d3.time.hours.utc -> d3.utcHours

d3.time.days.utc -> d3.utcDays

d3.time.sundays.utc -> d3.utcSundays

d3.time.mondays.utc -> d3.utcMondays

d3.time.tuesdays.utc -> d3.utcTuesdays

d3.time.wednesdays.utc -> d3.utcWednesdays

d3.time.thursdays.utc -> d3.utcThursdays

d3.time.fridays.utc -> d3.utcFridays

d3.time.saturdays.utc -> d3.utcSaturdays

d3.time.weeks.utc -> d3.utcWeeks

d3.time.months.utc -> d3.utcMonths

d3.time.years.utc -> d3.utcYears

> interval.range的功能发生了改变：当step大于1时interval.range会像d3.range一样只是简单的跳过。最终返回每一步的时间。比如在3.x中：

```
d3.time.days(new Date(2016, 4, 28), new Date(2016, 5, 5), 2);
// [Sun May 29 2016 00:00:00 GMT-0700 (PDT),
//  Tue May 31 2016 00:00:00 GMT-0700 (PDT),
//  Wed Jun 01 2016 00:00:00 GMT-0700 (PDT),
//  Fri Jun 03 2016 00:00:00 GMT-0700 (PDT)]
```
> 注意到起始时间并不是从28开始在4.0中。并且31和1之间只隔了1天。而在4.0中可能更接近你期望的值：

```
d3.timeDays(new Date(2016, 4, 28), new Date(2016, 5, 5), 2);
// [Sat May 28 2016 00:00:00 GMT-0700 (PDT),
//  Mon May 30 2016 00:00:00 GMT-0700 (PDT),
//  Wed Jun 01 2016 00:00:00 GMT-0700 (PDT),
//  Fri Jun 03 2016 00:00:00 GMT-0700 (PDT)]
```
> 如果你想要一个过滤后时间间隔视图。你可以使用interval.every方法或更一般的interval.filter来获取：

```
d3.timeDay.every(2).range(new Date(2016, 4, 28), new Date(2016, 5, 5));
// [Sun May 29 2016 00:00:00 GMT-0700 (PDT),
//  Tue May 31 2016 00:00:00 GMT-0700 (PDT),
//  Wed Jun 01 2016 00:00:00 GMT-0700 (PDT),
//  Fri Jun 03 2016 00:00:00 GMT-0700 (PDT)]
```

> time interval提供了interal.count方法用来对起始时间之间进行统计，这个代替了3.x中的d3.time.dayOfYear和相关方法，如在3.x中：

```
var now = new Date;
d3.time.dayOfYear(now); // 165
```
> 在4.0中：

```
var now = new Date;
d3.timeDay.count(d3.timeYear(now), now); // 165
```
> 同样的 也替代了3.x中的d3.time.weekOfYear方法，在4.0中：

```
d3.timeWeek.count(d3.timeYear(now), now); // 24
```
> 新的interval.count方法更一般化，例如你可以而统计这是这周的第几个小时：

```
d3.timeHour.count(d3.timeWeek(now), now); // 64
```
> 下面是3.x到4.0的所有等价方法：

d3.time.dayOfYear -> d3.timeDay.count

d3.time.sundayOfYear -> d3.timeSunday.count

d3.time.mondayOfYear -> d3.timeMonday.count

d3.time.tuesdayOfYear -> d3.timeTuesday.count

d3.time.wednesdayOfYear -> d3.timeWednesday.count

d3.time.thursdayOfYear -> d3.timeThursday.count

d3.time.fridayOfYear -> d3.timeFriday.count

d3.time.saturdayOfYear -> d3.timeSaturday.count

d3.time.weekOfYear -> d3.timeWeek.count

d3.time.dayOfYear.utc -> d3.utcDay.count

d3.time.sundayOfYear.utc -> d3.utcSunday.count

d3.time.mondayOfYear.utc -> d3.utcMonday.count

d3.time.tuesdayOfYear.utc -> d3.utcTuesday.count

d3.time.wednesdayOfYear.utc -> d3.utcWednesday.count

d3.time.thursdayOfYear.utc -> d3.utcThursday.count

d3.time.fridayOfYear.utc -> d3.utcFriday.count

d3.time.saturdayOfYear.utc -> d3.utcSaturday.count

d3.time.weekOfYear.utc -> d3.utcWeek.count

## Timers(d3-timer)
> 在3.x中停止计时器的唯一方法是使回调返回true。如下：

```
d3.timer(function(elapsed) {
  console.log(elapsed);
  return elapsed >= 1000;
});
```
> 而在4.0中提供了timer.stop方法：

```
var t = d3.timer(function(elapsed) {
  console.log(elapsed);
  if (elapsed >= 1000) {
    t.stop();
  }
});
```
> 使用timer.stop的最大好处是timer不需要自我终止：可以在外部终止。等价于：

```
var t = d3.timer(function(elapsed) {
  console.log(elapsed);
});

d3.timeout(function() {
  t.stop();
}, 1000);
```
> 这个改善也被应用在d3-transition：当一个过渡被中断时，资源会被立即释放。

> 4.0也提供了timer.restart方法来重启定时器来代替timer运行时的回调。与timer.stop不同的是timer.restart保持了现有的定时器的优先级：保持了活跃的定时器的顺序。d3.timer.flush方法被重命名为d3.timerFlush。

> 3.x中的定时器可能导致浏览器挂起，当后台页面转为前活动页面时。例如一下的代码在每一秒进行一次过渡：

```
setInterval(function() {
  d3.selectAll("div").transition().call(someAnimation); // BAD
}, 1000);
```
> 如果这个函数在后台运行几个小时，那这个页面一旦成为活动页面上千个过渡队列都会试着同时运行。4.0避免了这种情况：页面为后台页面时，会对页面暂停计时,这样就避免了过渡队列的积累。使用d3.timer代替过渡来进行长时间运行的动画，或者使用d3.timeout和d3.interval来代替setTimeOut和setInterval可以避免页面在后台时候过渡队列的累积：

```
d3.interval(function() {
  d3.selectAll("div").transition().call(someAnimation); // GOOD
}, 1000);
```
> 4.0也支持高精度的计时d3.now方法：从页面的第一帧开始到现在的时间

## Transition(d3-transition)

> selection.transition方法生成了一个过渡实例，可以在selection上应用已存在的过渡：

```
var t = d3.transition()
    .duration(750)
    .ease(d3.easeLinear);

d3.selectAll(".apple").transition(t)
    .style("fill", "red");

d3.selectAll(".orange").transition(t)
    .style("fill", "orange");
```
> 这个方法代替了3.x中的transition.each方法。在4.0中transition.each与seleciton.each作用相同。使用transtion.on方法监听过渡事件。

> transition.delay的意义发生了改变：delay相对于过渡链上的上一个过渡而言，而不是第一个过渡。例如：

```
d3.selectAll(".apple")
  .transition() // First fade to green.
    .style("fill", "green")
  .transition() // Then red.
    .style("fill", "red")
  .transition() // Wait one second. Then brown, and remove.
    .delay(1000)
    .style("fill", "brown")
    .remove();
```
> 计时器在页面转为后台是会被冻结。selection.interrupt方法会取消元素上所有预定义的过渡并中断现有的过渡。当过渡被中断时所有相关的资源被释放，提高了性能。

> d3.active方法可以选中当前的活动的过渡。中可以创建一个无限循环的过渡，例如创建一个在红色和蓝色之间持续过渡的动画:

```
d3.select("circle")
  .transition()
    .on("start", function repeat() {
        d3.active(this)
            .style("fill", "red")
          .transition()
            .style("fill", "blue")
          .transition()
            .on("start", repeat);
      });
```

> transition.remove方法也得到了修复。transiton.ease方法不再接受字符串而是一个过渡类型方法。过渡的回调函数接受标准的参数：当前元素绑定的数据d,索引以及分组(节点)，这对transition.attrTween和transition.styleTween有显著的影响，不用为当前的属性或样式传入再补间函数作为第三个参数。

> 过渡被优化了。如果所有的元素都共享相同的补间，插值器，或者事件监听则通过过渡来获取状态而不需要单独的为每个元素分配。4.0也使用优化后的插值器来代替 d3.interpolate的transition.attr和transition.style。也可以在CSS和SVG变换之间进行过渡。

## Voronoi Diagrams(d3-voronoi)

> d3.geom.voronoi被重命名为d3.voronoi。voronoi.clipExtent方法被重命名为voronoi.extent。3.x中非公开的方法polygon.point被重命名为polygon.data用以获取元素的对应的数据。
> 在调用voronoi时返回完整的包括拓扑信息的voronoi图：每个边提供了edge.left和edge.right两个方法用以表示这个边的两边连接的点。每个voronoi分块被定义为边和点组成的数组。voronoi图也可以被用来将指定的点集计算成泰森多边形和三角剖分： diagram.polygons, diagram.links和diagram.triangles。

>  voronoi.polygons和diagram.polygons需要指定范围，voronoi.links, voronoi.triangles, diagram.links和diagram.triangles受裁剪区间的影响：如果两个点相邻并且剪切分块相邻则将这两个点连接。如果使用三角剖分则不需要考虑裁剪，设置extent为null即可。

## Zooming(d3-zoom)

> d3.behavior.zoom被重命名为d3.zoom。zoom行为不再在内部存储活跃的缩放(如可见区域，缩放、平移)。缩放变换被存储在任何应用了缩放的元素上。缩放行为可以对指定的元素通过调用d3.zoomTransform方法来实现，这样可以通过编程而非交互来实现缩放。

> 为了使得缩放更容易，提供了新的缩放变换：zoom。translateBy,zoom.scaleBy和zoom.scaleTo。缩放行为不再依赖比例尺，但是可以使用比例尺反转来获取对应比例尺的范围。3.x中的event.scale被event.transform.k替换。event.translate被event.transform.x和event.transform.y替换。zoom.center方法在编程实现的缩放中被移除。

> 新的zoom.translateExtent可以限制世界坐标系的可见范围：当前的可见范围总是被包含在变化区间中。zoom.size方法被zoom.extent方法替代。并且默认的行为更友好：默认的范围是应用缩放的元素而非之前默认的960*500。

> 缩放的交互能力也得到了提高。在同时滚轮和拖拽的时候更准确，同时触摸与移动也一样。zoomstart和zoomend事件被改名为start和end。默认情况下缩放会忽略鼠标右击事件，可以使用zoom.filter来设置。也忽略了IOS上的鼠标模拟事件。
