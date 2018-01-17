# d3-array

JavaScript中的数据通常由一个数组来表示，所以当可视化或分析数据时往往也会操作数组。常见的数组操作包括切片，过滤，遍历等等。JavaScript本身支持的数组操作可以参考[这里](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype).

JavaScript中**修改数组自身**的方法:

* [*array*.pop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) - 移除最后一个元素
* [*array*.push](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) - 追加一个或多个元素
* [*array*.reverse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse) - 数组翻转
* [*array*.shift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) - 移除第一个元素
* [*array*.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) - 排序
* [*array*.splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) - 添加或者移除
* [*array*.unshift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift) - 在数组前添加一个或多个元素

JavaScript中数组的**存取方法**:

* [*array*.concat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) - 将数组与数组或值合并
* [*array*.join](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join) - 只用指定的字符串将数组转为一个字符串
* [*array*.slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) - 提取切片
* [*array*.indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) - 找出指定元素的索引
* [*array*.lastIndexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf) - 找出指定元素的最后一个索引

JavaScript中数组的**迭代方法**:

* [*array*.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) - 过滤
* [*array*.forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) - 对每个元素执行某个方法
* [*array*.every](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every) - 是否每个元素都符合给定的条件
* [*array*.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) - 根据指定的操作对每个元素执行后返回一个新的数组
* [*array*.some](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some) - 是否存在符合某个条件的元素
* [*array*.reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) - 从左到右执行reduce操作并返回一个值
* [*array*.reduceRight](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight) - 从右到左执行reduce操作并返回一个值


## 安装

通过npm命令: `npm install d3-array` 安装. 或者下载[最新发布](https://github.com/d3/d3-array/releases/latest)的版本. 也可以直接从 [d3js.org](https://d3js.org) 下载, 可以作为一个 [标准库](https://d3js.org/d3-array.v1.min.js) 或者 [D3 4.0](https://github.com/d3/d3)的一部分. 支持AMD, CommonJS, and vanilla 环境. 在 vanilla 环境中, 会暴露出一个 `d3` 全局变量:

```html
<script src="https://d3js.org/d3-array.v1.min.js"></script>
<script>

var min = d3.min(array);

</script>
```

[在浏览器中测试 d3-array.](https://tonicdev.com/npm/d3-array)

## API Reference

* [Statistics](#statistics)
* [Search](#search)
* [Transformations](#transformations)
* [Histograms](#histograms)
* [Histogram Thresholds](#histogram-thresholds)

### Statistics

基本的统计计算方法。

<a name="min" href="#min">#</a> d3.<b>min</b>(<i>array</i>[, <i>accessor</i>]) [<源码>](https://github.com/d3/d3-array/blob/master/src/min.js "Source")

对指定的*array*进行自然排序返回最小值。如果数组为空则返回undefined。可选的参数*accessor*可以用来自定义如何访问数组中的元素。*accessor* 将会被传递给*map*以在数组的每个元素上进行调用，返回值将会被作为对比依据。

与内置的[Math.min](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Math/min)不同，这个方法可以忽略undefined, null 和 NaN等特殊值。在可视化中用来忽略缺失数据是很有用的。需要注意的是，对比是以自然排序进行的，而非数值对比。比如对字符串['20', '3']进行`min`操作返回'20'，而对数值 [20, 3] 进行`min`操作则返回3。

请参阅 [scan](#scan) 和 [extent](#extent).

<a name="max" href="#max">#</a> d3.<b>max</b>(<i>array</i>[, <i>accessor</i>]) [<源码>](https://github.com/d3/d3-array/blob/master/src/max.js "Source")

对指定的*array*进行自然排序返回最大值。如果数组为空则返回undefined。可选的参数*accessor*可以用来自定义如何访问数组中的元素。*accessor* 将会被传递给*map*以在数组的每个元素上进行调用，返回值将会被作为对比依据。

与内置的[Math.max](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Math/max)不同，这个方法可以忽略undefined, null 和 NaN等特殊值。在可视化中用来忽略缺失数据是很有用的。需要注意的是，对比是以自然排序进行的，而非数值对比。比如对字符串['20', '3']进行`max`操作返回'3'，而对数值 [20, 3] 进行`max`操作则返回20。

请参阅 [scan](#scan) 和 [extent](#extent).

<a name="extent" href="#extent">#</a> d3.<b>extent</b>(<i>array</i>[, <i>accessor</i>]) [<源码>](https://github.com/d3/d3-array/blob/master/src/extent.js "Source")

使用自然排序返回指定数组的[最小值](#min) 和 [最大值](#max)。如果数组为空，则返回[undefined, undefined]。可选的 *accessor* 可以用来指定数组元素的访问方式，如果指定了*accessor*则在获取最值前会通过*array*.map(*accessor*)进行计算。

<a name="sum" href="#sum">#</a> d3.<b>sum</b>(<i>array</i>[, <i>accessor</i>]) [<源码>](https://github.com/d3/d3-array/blob/master/src/sum.js "Source")

对指定的*array*计算和. 如果数组为空则返回0，可选的 *accessor* 可以用来指定数组元素的访问方式，如果指定了*accessor*则在求和前会通过*array*.map(*accessor*)进行计算。在忽略undefined和NaN时*accessor*很有用.

<a name="mean" href="#mean">#</a> d3.<b>mean</b>(<i>array</i>[, <i>accessor</i>]) [<源码>](https://github.com/d3/d3-array/blob/master/src/mean.js "Source")

对指定的数组返回数组的均值。如果数组为空则返回undefined.如果指定了*accessor*则相当于在计算之前调用了*array.map(accessor)*. 这个方法会忽略undefined 和 NaN.

<a name="median" href="#median">#</a> d3.<b>median</b>(<i>array</i>[, <i>accessor</i>]) [<源码>](https://github.com/d3/d3-array/blob/master/src/median.js "Source")

对指定的数组使用[R-7 方法](https://en.wikipedia.org/wiki/Quantile#Estimating_quantiles_from_a_sample)返回数组的中位数。如果数组为空则返回undefined.如果指定了*accessor*则相当于在计算之前调用了*array.map(accessor)*. 这个方法会忽略undefined 和 NaN.

<a name="quantile" href="#quantile">#</a> d3.<b>quantile</b>(<i>array</i>, <i>p</i>[, <i>accessor</i>]) [<源码>](https://github.com/d3/d3-array/blob/master/src/quantile.js "Source")

返回指定**有序数组**的*p*-分位数, *p* 是 [0, 1]之间的小数. 例如中位数相当于 *p* = 0.5, 使用*p* = 0.25计算第一个四分位数, *p* = 0.75表示第三个四分位数. 这个方法也使用[R-7 方法](http://en.wikipedia.org/wiki/Quantile#Quantiles_of_a_population). 例如:

```js
var a = [0, 10, 30];
d3.quantile(a, 0); // 0
d3.quantile(a, 0.5); // 10
d3.quantile(a, 1); // 30
d3.quantile(a, 0.25); // 5
d3.quantile(a, 0.75); // 20
d3.quantile(a, 0.1); // 2
```

如果指定了*accessor*则相当于在计算之前调用了*array.map(accessor)*。

<a name="variance" href="#variance">#</a> d3.<b>variance</b>(<i>array</i>[, <i>accessor</i>]) [<源码>](https://github.com/d3/d3-array/blob/master/src/variance.js "Source")

根据指定的数组返回 [无偏估计方差](http://mathworld.wolfram.com/SampleVariance.html). 如果数组中包含的元素个数小于2则返回undefined. 如果指定了*accessor*则相当于在计算之前调用了*array.map(accessor)*. 这个方法忽略了undefined 和 NaN.

<a name="deviation" href="#deviation">#</a> d3.<b>deviation</b>(<i>array</i>[, <i>accessor</i>]) [<源码>](https://github.com/d3/d3-array/blob/master/src/deviation.js "Source")

返回数组的标准差，标准差定义为[方差](#variance)的平方根。如果数组中包含的元素个数小于2则返回undefined.如果指定了*accessor*则相当于在计算之前调用了*array.map(accessor)*. 这个方法忽略了undefined 和 NaN.

### Search

查找类方法.

<a name="scan" href="#scan">#</a> d3.<b>scan</b>(<i>array</i>[, <i>comparator</i>]) [<源码>](https://github.com/d3/d3-array/blob/master/src/scan.js "Source")

对指定的数组进行线性扫描，根据指定的比较操作返回最终元素的索引。如果给定的数组中没有可比较的元素(比如比较时返回NaN)则返回undefined。如果没有指定*comparator*，则默认[升序](#ascending)，例如：

```js
var array = [{foo: 42}, {foo: 91}];
d3.scan(array, function(a, b) { return a.foo - b.foo; }); // 0
d3.scan(array, function(a, b) { return b.foo - a.foo; }); // 1
```

这个操作与[min](#min)类似，不同的是此操作使用比较器而非访问器并且返回的是选定元素的索引。请参考 [bisect](#bisect).

<a name="bisectLeft" href="#bisectLeft">#</a> d3.<b>bisectLeft</b>(<i>array</i>, <i>x</i>[, <i>lo</i>[, <i>hi</i>]]) [<源码>](https://github.com/d3/d3-array/blob/master/src/bisect.js#L6 "Source")

二分查找，返回指定元素*x*在数组中的插入位置，以继续保持有序状态。参数*lo* 和 *hi* 可以用来指定一个子集来限制插入的位置。默认情况下可能插入到数组中的任何位置. 如果数组中已经存在x，则插入点的位置位于这个已经存在的元素之前(要考虑从左到右还是从右到左)。返回值*i*可以作为[splice](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/splice)的参数，可以将数组分为两部分， *array*.slice(*lo*, *i*) 表示左半边而 *array*.slice(*i*, *hi*) 表示右半边。

<a name="bisect" href="#bisect">#</a> d3.<b>bisect</b>(<i>array</i>, <i>x</i>[, <i>lo</i>[, <i>hi</i>]]) [<源码>](https://github.com/d3/d3-array/blob/master/src/bisect.js "Source")<br>
<a name="bisectRight" href="#bisectRight">#</a> d3.<b>bisectRight</b>(<i>array</i>, <i>x</i>[, <i>lo</i>[, <i>hi</i>]]) [<源码>](https://github.com/d3/d3-array/blob/master/src/bisect.js#L6 "Source")

与 [bisectLeft](#bisectLeft)类似, 不同的是在计算插入点的位置时从右侧(数组末尾)开始计算

<a name="bisector" href="#bisector">#</a> d3.<b>bisector</b>(<i>accessor</i>) [<源码>](https://github.com/d3/d3-array/blob/master/src/bisector.js "Source")
<br><a name="bisector" href="#bisector">#</a> d3.<b>bisector</b>(<i>comparator</i>) [<源码>](https://github.com/d3/d3-array/blob/master/src/bisector.js "Source")

使用指定的*accessor* 或 *comparator*方法返回一个二分查找对象。这个方法克服了`bisect`只能对基本类型元素进行划分的确定，支持对象类型的插入点查找，例如给定一下对象数组:


```js
var data = [
  {date: new Date(2011, 1, 1), value: 0.5},
  {date: new Date(2011, 2, 1), value: 0.6},
  {date: new Date(2011, 3, 1), value: 0.7},
  {date: new Date(2011, 4, 1), value: 0.8}
];
```
通过一下方法构造一个二分查找对象：

```js
var bisectDate = d3.bisector(function(d) { return d.date; }).right;
```

使用比较器时等价于：

```js
var bisectDate = d3.bisector(function(d, x) { return d.date - x; }).right;
```

然后可以通过 *bisectDate*(*array*, *date*)进行使用, 同样返回一个索引. 需要注意的是比较器总是传递搜索值`x`作为第二个参数. 如果要按不同于自然顺序的顺序对值进行排序，请使用比较器而不是访问器，例如按降序而不是升序排列。

<a name="bisector_left" href="#bisector_left">#</a> <i>bisector</i>.<b>left</b>(<i>array</i>, <i>x</i>[, <i>lo</i>[, <i>hi</i>]]) [<源码>](https://github.com/d3/d3-array/blob/master/src/bisector.js#L6 "Source")

等价于 [bisectLeft](#bisectLeft), 只不过使用的是二分查找对象自己的对比方式.

<a name="bisector_right" href="#bisector_right">#</a> <i>bisector</i>.<b>right</b>(<i>array</i>, <i>x</i>[, <i>lo</i>[, <i>hi</i>]]) [<源码>](https://github.com/d3/d3-array/blob/master/src/bisector.js#L16 "Source")

等价于 [bisectRight](#bisectRight), 只不过使用的是二分查找对象自己的对比方式.

<a name="ascending" href="#ascending">#</a> d3.<b>ascending</b>(<i>a</i>, <i>b</i>) [<源码>](https://github.com/d3/d3-array/blob/master/src/ascending.js "Source")

如果 *a* 小于 *b* 则返回 -1, 如果*a* 大于*b* 返回 1 否则返回 0. 这个比较器可以与内置的[*array*.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) 结合使用，内部实现为:

```js
function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}
```

请注意，如果没有为内置排序方法指定比较器函数，则默认顺序是词典（按字母顺序）而不是自然排序，这种特性可能在对数组进行排序时导致意想不到的结果。

<a name="descending" href="#descending">#</a> d3.<b>descending</b>(<i>a</i>, <i>b</i>) [<源码>](https://github.com/d3/d3-array/blob/master/src/descending.js "Source")

如果 *a* 小于 *b* 则返回 1, 如果*a* 大于*b* 返回 -1 否则返回 0. 内部实现为：

```js
function descending(a, b) {
  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
}
```
请注意，如果没有为内置排序方法指定比较器函数，则默认顺序是词典（按字母顺序）而不是自然排序，这种特性可能在对数组进行排序时导致意想不到的结果。

### Transformations

数组转换类方法

<a name="cross" href="#cross">#</a> d3.<b>cross</b>(<i>a</i>, <i>b</i>[, <i>reducer</i>]) [<源码>](https://github.com/d3/d3-array/blob/master/src/cross.js "Source")

返回a和b两个数组的[Cartesian product(笛卡尔乘积)]，对于数组*a*中的每个元素*i*和数组*b*中的每个元素*j*，分别有序的调用传入的*reducer*方法。*reducer*方法的参数分别为*i*和*j*，如果没有指定*reducer*则默认为*i*和*j*创建一个二维数组:

```js
function pair(a, b) {
  return [a, b];
}
```

例如:

```js
d3.cross([1, 2], ["x", "y"]); // 返回 [[1, "x"], [1, "y"], [2, "x"], [2, "y"]]
d3.cross([1, 2], ["x", "y"], (a, b) => a + b); // 返回 ["1x", "1y", "2x", "2y"]
```

<a name="merge" href="#merge">#</a> d3.<b>merge</b>(<i>arrays</i>) [<源码>](https://github.com/d3/d3-array/blob/master/src/merge.js "Source")

将指定的数组们合并为一个数组。这个方法与内置的concat方法有些像，但是当数组中嵌套另一个数组时会更方便：

```js
d3.merge([[1], [2, 3]]); // returns [1, 2, 3]
```

<a name="pairs" href="#pairs">#</a> d3.<b>pairs</b>(<i>array</i>[, <i>reducer</i>]) [<源码>](https://github.com/d3/d3-array/blob/master/src/pairs.js "Source")

为数组中邻近的两个元素有序的依次执行*reducer*方法，*reducer*两个参数为*i*和*i*-1。如果没有指定*reducer*则默认为每两个邻近的元素创建一个二维数组：

```js
function pair(a, b) {
  return [a, b];
}
```

例如:

```js
d3.pairs([1, 2, 3, 4]); // returns [[1, 2], [2, 3], [3, 4]]
d3.pairs([1, 2, 3, 4], (a, b) => b - a); // returns [1, 1, 1];
```

如果传入的数组元素个数小于2则返回一个空数组。

<a name="permute" href="#permute">#</a> d3.<b>permute</b>(<i>array</i>, <i>indexes</i>) [<源码>](https://github.com/d3/d3-array/blob/master/src/permute.js "Source")

根据指定的索引和数组返回一组置换后的数组序列。返回后的数组序列顺序与*indexes*保持一致。比如permute(["a", "b", "c"], [1, 2, 0]) 返回 ["b", "c", "a"]. *indexes*的长度可以与*array*不一致，*indexes*可以被复制或省略。

这个方法也适用于使用`key`数组从对象中提取`value`序列，比如:

```js
var object = {yield: 27, variety: "Manchuria", year: 1931, site: "University Farm"},
    fields = ["site", "variety", "yield"];

d3.permute(object, fields); // returns ["University Farm", "Manchuria", 27]
```

<a name="shuffle" href="#shuffle">#</a> d3.<b>shuffle</b>(<i>array</i>[, <i>lo</i>[, <i>hi</i>]]) [<源码>](https://github.com/d3/d3-array/blob/master/src/shuffle.js "Source")

使用[Fisher–Yates shuffle](http://bost.ocks.org/mike/shuffle/)算法对数组进行随机重排.

<a name="ticks" href="#ticks">#</a> d3.<b>ticks</b>(<i>start</i>, <i>stop</i>, <i>count</i>) [<源码>](https://github.com/d3/d3-array/blob/master/src/ticks.js "Source")

在*start* 和 *stop*(包含)之间返回大约 *count* + 1 个等间隔的数组序列，每个值都是十的1,2或5的次幂。参考[d3.tickIncrement](#tickIncrement), [d3.tickStep](#tickStep) 和 [*linear*.ticks](https://github.com/d3/d3-scale/blob/master/README.md#linear_ticks)。

<a name="tickIncrement" href="#tickIncrement">#</a> d3.<b>tickIncrement</b>(<i>start</i>, <i>stop</i>, <i>count</i>) [<源码>](https://github.com/d3/d3-array/blob/master/src/ticks.js#L16 "Source")

与 [d3.tickStep](#tickStep)类似, 只不过要求 *start* 不大于 *stop*, 如果根据指定的 *start*, *stop* 和 *count* 计算出的个数小于1， 则返回stop对应的负值， 这个方法始终返回一个整数用来被[d3.ticks](#ticks)使用，以避免因IEEE 754浮点数存储带来的不精确问题.

<a name="tickStep" href="#tickStep">#</a> d3.<b>tickStep</b>(<i>start</i>, <i>stop</i>, <i>count</i>) [<源码>](https://github.com/d3/d3-array/blob/master/src/ticks.js#L16 "Source")

和[d3.ticks](#ticks)不同的是: 这个方法返回的不是序列，而是序列的步长，这个步长是十的1,2或5的次幂。因浮点数的存储问题，返回的小数可能不精确，可以使用[d3-format]来进行格式化(https://github.com/d3/d3-format).

<a name="range" href="#range">#</a> d3.<b>range</b>([<i>start</i>, ]<i>stop</i>[, <i>step</i>]) [<源码>](https://github.com/d3/d3-array/blob/master/src/range.js "Source")

与Python的[range](http://docs.python.org/library/functions.html#range)方法类似，返回一个数组序列，此方法通常用于迭代一系列一致间隔的数值，如数组的索引或线性刻度的刻度。

如果没有指定*step*则默认的步长为 1。如果没有指定*start* 则默认从 0开始，返回的结果包含*stop*。 如果*step*为正则最后的元素*start* + *i* \* *step* 小于 *stop*;如果*step*为负，责返回的最后一个元素最小，*start* + *i* \* *step*大于*stop*。

这些参数不要求是整数，如果是整数的话返回的结果则可以更准确的预测，如果是小数则会出现以下情况：

```js
d3.range(0, 1, 0.2) // [0, 0.2, 0.4, 0.6000000000000001, 0.8]
```

这是由于IEEE 754 双精度浮点数的存储导致的, 如 0.2 * 3 = 0.6000000000000001. 此时可以使用[d3-format](https://github.com/d3/d3-format)来进行格式化操作。参考[d3-scale](https://github.com/d3/d3-scale)中的[linear.tickFormat](https://github.com/d3/d3-scale/blob/master/README.md#linear_tickFormat)操作

如果对返回的个数有要求的话，可以考虑使用[array.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) 实现，例如：

```js
d3.range(0, 1, 1 / 49); // BAD: 返回 50 个元素!
d3.range(49).map(function(d) { return d / 49; }); // GOOD: 返回 49 个元素.
```

<a name="transpose" href="#transpose">#</a> d3.<b>transpose</b>(<i>matrix</i>) [<源码>](https://github.com/d3/d3-array/blob/master/src/transpose.js "Source")

使用 [zip](#zip) 操作对二维矩阵进行 [矩阵转置](http://en.wikipedia.org/wiki/Transpose).

<a name="zip" href="#zip">#</a> d3.<b>zip</b>(<i>arrays…</i>) [<源码>](https://github.com/d3/d3-array/blob/master/src/zip.js "Source")

返回数组的数组，其中第i个数组包含来自每个参数数组的第i个元素。返回数组的长度等于参数中最短数组的长度。如果参数中只有一个数组，则同样返回一个数组的数组，只不过是一个一维数组的数组。如果没有参数则返回一个空数组。


```js
d3.zip([1, 2], [3, 4]); // returns [[1, 3], [2, 4]]
```

### Histograms

[<img src="https://raw.githubusercontent.com/d3/d3-array/master/img/histogram.png" width="480" height="250" alt="Histogram">](http://bl.ocks.org/mbostock/3048450)

直方图经常用来将大量的离散的值统计成相邻的少量的不重叠的区间。直方图经常用来统计数值的分布情况。

<a name="histogram" href="#histogram">#</a> d3.<b>histogram</b>() [<源码>](https://github.com/d3/d3-array/blob/master/src/histogram.js "Source")

使用默认的设置构建一个新的直方图生成器

<a name="_histogram" href="#_histogram">#</a> <i>histogram</i>(<i>data</i>) [<源码>](https://github.com/d3/d3-array/blob/master/src/histogram.js#L14 "Source")

根据给定的*data*生成直方图。返回一个*bins*数组(bins可以理解为直方图的柱子)， 每个bin都包含了一些输入数据，包含哪些取决于输入数据的大小是否在当前bin的区间内。bin的`length`属性表示当前bin中包含的元素个数。每个bin包含以下两个属性:

* `x0` - 当前bin的低值(包含)
* `x1` - 当前bin的高值(不包含， 最后一个bin除外).

<a name="histogram_value" href="#histogram_value">#</a> <i>histogram</i>.<b>value</b>([<i>value</i>]) [<源码>](https://github.com/d3/d3-array/blob/master/src/histogram.js#L58 "Source")

设置或获取直方图的值访问器，如果指定了*value*参数则表示设置当前直方图的访问器，否则返回当前直方图的值访问器，默认为:

```js
ƒ (x) {
  return x;
}
```

当直方图被[生成](#_histogram)的时候，值访问器将会在输入数组的每一个元素上进行调用，参数依次为`d`, 索引 `i`, 以及输入数据 `data`. 默认的值访问器假设输入数据是可比较的，比如数值类型和时间类型，如果输入数据不能直接进行比较，则需要设置值访问器，值访问器返回的结果必须是可比较的.

这与在进行统计之前首先进行值映射类似，当输入数据元素不能直接进行比较时非常有用。

<a name="histogram_domain" href="#histogram_domain">#</a> <i>histogram</i>.<b>domain</b>([<i>domain</i>]) [<源码>](https://github.com/d3/d3-array/blob/master/src/histogram.js#L62 "Source")

如果指定了*domain*参数则设置直方图的输入范围，输入数据中超出这个范围的元素将被忽略。*domain*为一个数组或者返回数组的方法。如果没有指定*domain*则返回当前的domain设置，默认为[extent](#extent)(也就是不对输入范围做要求)。直方图的domain参数由[*min*,*max*]确定，分别表示了输入范围的最小值和最大值。此范围外的值在直方图[生成](#_histogram)的时候被忽略.

比如当使用直方图和[线性比例尺] `x`(https://github.com/d3/d3-scale/blob/master/README.md#linear-scales) 一起使用的时候可以:

```js
var histogram = d3.histogram()
    .domain(x.domain())
    .thresholds(x.ticks(20));
```

然后就可以根据输入的数组计算出一组bins:

```js
var bins = histogram(numbers);
```

需要注意的是domain访问器在经过[values](#histogram_value)计算之后的值上进行调用，而不是原始的输入数据.

<a name="histogram_thresholds" href="#histogram_thresholds">#</a> <i>histogram</i>.<b>thresholds</b>([<i>count</i>]) [<源码>](https://github.com/d3/d3-array/blob/master/src/histogram.js#L66 "Source")
<br><a name="histogram_thresholds" href="#histogram_thresholds">#</a> <i>histogram</i>.<b>thresholds</b>([<i>thresholds</i>])  [<源码>](https://github.com/d3/d3-array/blob/master/src/histogram.js#L66 "Source")

首先说一下阈值这个概念，有没有发现上述文档中并没有提到在输入一组数据之后，输出bins的个数或者bins如何划分。因为默认情况下直方图有一个默认的划分规则，如果想按照自己的意愿(比如期待bins的个数，甚至最后的bins的范围都不一样)对一组数据进行划分那就需要阈值这个东西。

如果指定了*thresholds*则将[threshold generator(阈值生成器)](#histogram-thresholds)设置为指定的数组或方法并返回直方图生成器。如果没有指定*thresholds*参数则返回当前的阈值生成器，默认为[Sturges’ formula](#thresholdSturges)(出于这个原因，直方图的值必须是数字)。阈值由类似于[*x0*, *x1*, …]的数组进行定义，然后直方图生成器会根据这个数组对输入数据进行划分，小于*x0*的放到第一个bin中，大于等于*x0*并且小于*x1*的放到第二个bin中，大于等于*x1*小于*x2*的放到第三个bin中...以此类推...大于最后一个元素*xn*的放到最后一个bin中，这样就可以实现不等分bins。最后结果会生成*thresholds*.length + 1个bins。参考[直方图阈值](#histogram-thresholds).

任何在[domain](#histogram_domain)之外的值都会被忽略，也就是第一个bin的*bin*.x0等于domain的最小值,最后一个bin的*bin*.x1等于domain的最大值。

也可以通过制定*count*来设置期待的bins个数，如果设置*count*则阈值将会被统一的划分为近似的计数区。参考[ticks](#ticks)

### Histogram Thresholds

这些功能不能直接使用，而是要传递给[*histogram*.thresholds](#histogram_thresholds)使用。你可以通过三个参数来实现自己的阈值生成器：输入[*values*](#histogram_value), 以及由 *min* 和 *max* 表示的[可观测区间](#histogram_domain)。自定义的阈值生成器也要遵循[直方图阈值](#histogram-thresholds)的要求，也就是返回一组阈值数组或者返回一个*count*。如果返回的是*count*则最后生成的bins个数近似等于*count*，可以参考[ticks](#ticks).

<a name="thresholdFreedmanDiaconis" href="#thresholdFreedmanDiaconis">#</a> d3.<b>thresholdFreedmanDiaconis</b>(<i>values</i>, <i>min</i>, <i>max</i>) [<源码>](https://github.com/d3/d3-array/blob/master/src/threshold/freedmanDiaconis.js "Source")

根据 [Freedman–Diaconis rule]算法返回bins个数
(https://en.wikipedia.org/wiki/Histogram#Mathematical_definition) 返回理想的bins个数;*values*必须为数值类型数组.

<a name="thresholdScott" href="#thresholdScott">#</a> d3.<b>thresholdScott</b>(<i>values</i>, <i>min</i>, <i>max</i>) [<源码>](https://github.com/d3/d3-array/blob/master/src/threshold/scott.js "Source")

根据 [Scott’s normal reference rule](https://en.wikipedia.org/wiki/Histogram#Mathematical_definition)返回理想的bins个数;*values*必须为数值类型数组.

<a name="thresholdSturges" href="#thresholdSturges">#</a> d3.<b>thresholdSturges</b>(<i>values</i>) [<源码>](https://github.com/d3/d3-array/blob/master/src/threshold/sturges.js "Source")

根据 [Sturges’ formula](https://en.wikipedia.org/wiki/Histogram#Mathematical_definition)返回理想的bins个数;*values*必须为数值类型数组.
