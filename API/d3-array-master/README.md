# d3-array

数组是一种常用的数据结构，JavaScript支持原生的数组操作，并支持一些数组操作。详见[JavaScript中内置的数组方法](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype).

JavaScript中**修改数组自身**的方法:

* [*array*.pop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) - 移除最后一个元素.
* [*array*.push](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) - 追加一个或多个元素.
* [*array*.reverse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse) - 数组翻转.
* [*array*.shift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) - 移除第一个元素.
* [*array*.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) - 排序.
* [*array*.splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) - 添加或着移除.
* [*array*.unshift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift) - 在数组前添加一个或多个元素.

JavaScript中数组的**存取方法**:

* [*array*.concat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) - 将数组与数组或值合并.
* [*array*.join](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join) - 只用指定的字符串将数组转为一个字符串.
* [*array*.slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) - 提取切片.
* [*array*.indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) - 找出指定元素的索引.
* [*array*.lastIndexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf) - 找出指定元素的最后一个索引.

JavaScript中数组的**迭代方法**:

* [*array*.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) - 过滤.
* [*array*.forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) - 对每个元素执行某个方法.
* [*array*.every](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every) - 是否每个元素都符合给定的条件.
* [*array*.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) - 根据指定的操作对每个元素执行后返回一个新的数组.
* [*array*.some](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some) - 是否存在符合某个条件的元素.
* [*array*.reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) - 从左到右执行reduce操作并返回一个值.
* [*array*.reduceRight](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight) - 从右到左执行reduce操作并返回一个值.

## Installing


```html
<script src="https://d3js.org/d3-array.v1.min.js"></script>
<script>

var min = d3.min(array);

</script>
```

[测试d3-array](https://tonicdev.com/npm/d3-array)

## API Reference

* [Statistics](#statistics)
* [Search](#search)
* [Transformations](#transformations)
* [Histograms](#histograms)
* [Histogram Thresholds](#histogram-thresholds)

### Statistics

Methods for computing basic summary statistics.

<a name="min" href="#min">#</a> d3.<b>min</b>(<i>array</i>[, <i>accessor</i>]) [<>](https://github.com/d3/d3-array/blob/master/src/min.js "Source")

返回给定的*array*中的最小值。如果数组为空，则返回undefined。如果指定了*accessor*则相当于在计算最小值之前调用了*array.map(accessor)*

与内置方法[Math.min](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Math/min)不同,d3.min忽略undefined, null and NaN 等值，在忽略缺失数据时有用. 此外，元素使用自然排序而不是数值排序，比如["20","3"]会返回"20"，而[20,3]则返回3.


<a name="max" href="#max">#</a> d3.<b>max</b>(<i>array</i>[, <i>accessor</i>]) [<>](https://github.com/d3/d3-array/blob/master/src/max.js "Source")

返回给定的*array*中的最大值。如果数组为空，则返回undefined。如果指定了*accessor*则相当于在计算最小值之前调用了*array.map(accessor)*

与内置方法[Math.max](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Math/min)不同,d3.min忽略undefined, null and NaN 等值，在忽略缺失数据时有用. 此外，元素使用自然排序而不是数值排序，比如["20","3"]会返回"3"，而[20,3]则返回20.


<a name="extent" href="#extent">#</a> d3.<b>extent</b>(<i>array</i>[, <i>accessor</i>]) [<>](https://github.com/d3/d3-array/blob/master/src/extent.js "Source")

根据指定的数组返回[最小值](#min) 和 [最大值](#max).如果数组为空则返回[undefined, undefined]. 如果指定了*accessor*，则相当于在计算极值之前调用了*array.map(accessor)*.

<a name="sum" href="#sum">#</a> d3.<b>sum</b>(<i>array</i>[, <i>accessor</i>]) [<>](https://github.com/d3/d3-array/blob/master/src/sum.js "Source")

根据指定的*array*计算和. 如果数组为空则返回0.如果指定了*accessor*则相当于在求和之前调用了*array.map(accessor)*. 这个方法会忽略undefined 和 NaN.

<a name="mean" href="#mean">#</a> d3.<b>mean</b>(<i>array</i>[, <i>accessor</i>]) [<>](https://github.com/d3/d3-array/blob/master/src/mean.js "Source")

根据指定的数组返回数组的均值。如果数组为空则返回undefined.如果指定了*accessor*则相当于在计算之前调用了*array.map(accessor)*. 这个方法会忽略undefined 和 NaN.


<a name="median" href="#median">#</a> d3.<b>median</b>(<i>array</i>[, <i>accessor</i>]) [<>](https://github.com/d3/d3-array/blob/master/src/median.js "Source")

根据指定的数组使用[R-7 方法](https://en.wikipedia.org/wiki/Quantile#Estimating_quantiles_from_a_sample)返回数组的中位数。如果数组为空则返回undefined.如果指定了*accessor*则相当于在计算之前调用了*array.map(accessor)*. 这个方法会忽略undefined 和 NaN.


<a name="quantile" href="#quantile">#</a> d3.<b>quantile</b>(<i>array</i>, <i>p</i>[, <i>accessor</i>]) [<>](https://github.com/d3/d3-array/blob/master/src/quantile.js "Source")

根据指定的数组返回*p*-分位数, *p* 是 [0, 1]之间的小数. 例如中位数相当于 *p* = 0.5, 使用*p* = 0.25计算第一个四分位数, *p* = 0.75表示第三个四分位数. 这个方法也使用[R-7 方法](http://en.wikipedia.org/wiki/Quantile#Quantiles_of_a_population). 例如:

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

<a name="variance" href="#variance">#</a> d3.<b>variance</b>(<i>array</i>[, <i>accessor</i>]) [<>](https://github.com/d3/d3-array/blob/master/src/variance.js "Source")

返回指定数组的[总体方差的无偏估计( unbiased estimator of the population variance)](http://mathworld.wolfram.com/SampleVariance.html) . 如果数组中包含的元素个数小于2则返回undefined.如果指定了*accessor*则相当于在计算之前调用了*array.map(accessor)*. 这个方法忽略了undefined 和 NaN .

<a name="deviation" href="#deviation">#</a> d3.<b>deviation</b>(<i>array</i>[, <i>accessor</i>]) [<>](https://github.com/d3/d3-array/blob/master/src/deviation.js "Source")

返回数组的标准差，如果数组中包含的元素个数小于2则返回undefined.如果指定了*accessor*则相当于在计算之前调用了*array.map(accessor)*. 这个方法忽略了undefined 和 NaN .

### Search

查找类方法.

<a name="scan" href="#scan">#</a> d3.<b>scan</b>(<i>array</i>[, <i>comparator</i>]) [<>](https://github.com/d3/d3-array/blob/master/src/scan.js "Source")

对指定的数组进行线性扫描，根据指定的比较操作返回最终元素的索引。如果给定的数组不包含可比较的元素(比如比较操作返回NaN)则返回undefined,如果没有指定比较操作，则默认[ascending](#ascending). 例如:

```js
var array = [{foo: 42}, {foo: 91}];
d3.scan(array, function(a, b) { return a.foo - b.foo; }); // 0
d3.scan(array, function(a, b) { return b.foo - a.foo; }); // 1
```

这个方法与[min](#min)类似,但是这个方法是使用比较操作而不是访问器，并且这个方法返回的是索引而不是具体的值。

<a name="bisectLeft" href="#bisectLeft">#</a> d3.<b>bisectLeft</b>(<i>array</i>, <i>x</i>[, <i>lo</i>[, <i>hi</i>]]) [<>](https://github.com/d3/d3-array/blob/master/src/bisect.js#L6 "Source")

返回*x*在数组中应该被插入的位置并保证数组的有序性。参数*lo*和*hi*被用来指定一个子集来限制插入的位置。默认情况下可能插入到数组中的任何位置. 如果数组中已经存在x，则插入点的位置位于这个已经存在的元素之前(要考虑从左到右还是从右到左)。

<a name="bisect" href="#bisect">#</a> d3.<b>bisect</b>(<i>array</i>, <i>x</i>[, <i>lo</i>[, <i>hi</i>]]) [<>](https://github.com/d3/d3-array/blob/master/src/bisect.js "Source")<br>
<a name="bisectRight" href="#bisectRight">#</a> d3.<b>bisectRight</b>(<i>array</i>, <i>x</i>[, <i>lo</i>[, <i>hi</i>]]) [<>](https://github.com/d3/d3-array/blob/master/src/bisect.js#L6 "Source")

与[bisectLeft](#bisectLeft)类似, 但是插入点的位置是从右向左计算的.

<a name="bisector" href="#bisector">#</a> d3.<b>bisector</b>(<i>accessor</i>) [<>](https://github.com/d3/d3-array/blob/master/src/bisector.js "Source")
<br><a name="bisector" href="#bisector">#</a> d3.<b>bisector</b>(<i>comparator</i>) [<>](https://github.com/d3/d3-array/blob/master/src/bisector.js "Source")

使用指定的访问器或比较操作返回一个二等分对象。例如有如下对象数组：


```js
var data = [
  {date: new Date(2011, 1, 1), value: 0.5},
  {date: new Date(2011, 2, 1), value: 0.6},
  {date: new Date(2011, 3, 1), value: 0.7},
  {date: new Date(2011, 4, 1), value: 0.8}
];
```

使用访问器造二等分线对象：


```js
var bisectDate = d3.bisector(function(d) { return d.date; }).right;
```

等价于使用比较操作器造二等分线对象：

```js
var bisectDate = d3.bisector(function(d, x) { return d.date - x; }).right;
```

要注意的是，使用比较操作时，要将第二个参数设置为*x*.   这里的*x*相当于要插入的值。

然后使用类似于`bisectDate(data, new Date(2011, 1, 2))`的方法返回*new Date(2011, 1, 2)*在*data*中插入的索引，以保证插入之后依然有序。

<a name="bisector_left" href="#bisector_left">#</a> <i>bisector</i>.<b>left</b>(<i>array</i>, <i>x</i>[, <i>lo</i>[, <i>hi</i>]]) [<>](https://github.com/d3/d3-array/blob/master/src/bisector.js#L6 "Source")

等价于[bisectLeft](#bisectLeft)，但是使用的是二等分法.

<a name="bisector_right" href="#bisector_right">#</a> <i>bisector</i>.<b>right</b>(<i>array</i>, <i>x</i>[, <i>lo</i>[, <i>hi</i>]]) [<>](https://github.com/d3/d3-array/blob/master/src/bisector.js#L16 "Source")

等价于[bisectRight](#bisectRight), 但是使用的是二等分法.

<a name="ascending" href="#ascending">#</a> d3.<b>ascending</b>(<i>a</i>, <i>b</i>) [<>](https://github.com/d3/d3-array/blob/master/src/ascending.js "Source")


如果*a* 小于 *b*则返回 -1 ,如果*a* 大于 *b*则返回1, 否则返回 0. 这是自然数的一个比较操作，可以用于[*array*.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)来进行升序排序，定义如下:

```js
function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}
```


<a name="descending" href="#descending">#</a> d3.<b>descending</b>(<i>a</i>, <i>b</i>) [<>](https://github.com/d3/d3-array/blob/master/src/descending.js "Source")

如果*a* 小于 *b*则返回 1 ,如果*a* 大于 *b*则返回-1, 否则返回 0. 这是自然数的一个比较操作，可以用于[*array*.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)来进行降序排序，定义如下:

```js
function descending(a, b) {
  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
}
```


### Transformations

数组变换方法，返回新数组.

<a name="cross" href="#cross">#</a> d3.<b>cross</b>(<i>a</i>, <i>b</i>[, <i>reducer</i>]) [<>](https://github.com/d3/d3-array/blob/master/src/cross.js "Source")

返回a和b两个数组的[Cartesian product(笛卡尔乘积)](https://en.wikipedia.org/wiki/Cartesian_product)。对于数组*a*中的每个元素*i*和数组*b*中的每个元素*j*，分别有序的调用传入的*reducer*方法。*reducer*方法的参数分别为*i*和*j*，如果没有指定*reducer*则默认为*i*和*j*创建一个二维数组:


```js
function pair(a, b) {
  return [a, b];
}
```

例如:

```js
d3.cross([1, 2], ["x", "y"]); // 返回 [[1, "x"], [1, "y"], [2, "x"], [2, "y"]]
d3.cross([1, 2], ["x", "y"], (a, b) => a + b); // 返回 ["1x", "1y", "2x", "2y"]

<a name="merge" href="#merge">#</a> d3.<b>merge</b>(<i>arrays</i>) [<>](https://github.com/d3/d3-array/blob/master/src/merge.js "Source")

将指定的数组们合并为一个数组。这个方法与内置的concat方法有些像，但是当数组中嵌套另一个数组时会更方便：

```js
d3.merge([[1], [2, 3]]); // 返回 [1, 2, 3]
[].concat([[1],[2,3]]);	// [1,[2,3]]
```

<a name="pairs" href="#pairs">#</a> d3.<b>pairs</b>(<i>array</i>) [<>](https://github.com/d3/d3-array/blob/master/src/pairs.js "Source")

将给定的数组的每个元素与它之前的一个元素结合为一对，例如:

```js
d3.pairs([1, 2, 3, 4]); // returns [[1, 2], [2, 3], [3, 4]]
```

如果给定的数组中元素个数小于1，则返回空数组.

<a name="permute" href="#permute">#</a> d3.<b>permute</b>(<i>array</i>, <i>indexes</i>) [<>](https://github.com/d3/d3-array/blob/master/src/permute.js "Source")

根据指定的索引次序对数组进行排列，返回排列后的新数组。比如d3.permute(["a", "b", "c"], [1, 2, 0])
返回["b", "c", "a"]. 如果数组长度和索引长度不同，则会重复或忽略某些元素.

这个方法也可以对对象进行操作，第一个参数为对象，第二个参数为属性列表，则会根据属性列表返回对应的值数组，例如:

```js
var object = {yield: 27, variety: "Manchuria", year: 1931, site: "University Farm"},
    fields = ["site", "variety", "yield"];

d3.permute(object, fields); // returns ["University Farm", "Manchuria", 27]
```

<a name="shuffle" href="#shuffle">#</a> d3.<b>shuffle</b>(<i>array</i>[, <i>lo</i>[, <i>hi</i>]]) [<>](https://github.com/d3/d3-array/blob/master/src/shuffle.js "Source")


使用[Fisher–Yates shuffle](http://bost.ocks.org/mike/shuffle/)算法对数组进行随机重排.

<a name="ticks" href="#ticks">#</a> d3.<b>ticks</b>(<i>start</i>, <i>stop</i>, <i>count</i>) [<>](https://github.com/d3/d3-array/blob/master/src/ticks.js "Source")

在*start*和*stop*之间计算出一个等间隔的、精确的刻度序列，*count*用于指定参考刻度个数。由于小数可能并不精确，因此可以使用[d3-format](https://github.com/d3/d3-format)进行了格式化。


<a name="tickStep" href="#tickStep">#</a> d3.<b>tickStep</b>(<i>start</i>, <i>stop</i>, <i>count</i>) [<>](https://github.com/d3/d3-array/blob/master/src/ticks.js#L16 "Source")

根据*start*和*stop*以及*count*返回刻度的间隔大小。

<a name="range" href="#range">#</a> d3.<b>range</b>([<i>start</i>, ]<i>stop</i>[, <i>step</i>]) [<>](https://github.com/d3/d3-array/blob/master/src/range.js "Source")

根据*start*(如果指定)和*stop*以及*step*(如果指定)返回生成的序列。*start*默认为0，*step*默认为1。返回的序列不包含*stop*.例如:

```js
d3.range(0, 1, 0.2) // [0, 0.2, 0.4, 0.6000000000000001, 0.8]
```


```js
d3.range(0, 1, 1 / 49); // BAD: returns 50 elements!
d3.range(49).map(function(d) { return d / 49; }); // GOOD: returns 49 elements.
```

<a name="transpose" href="#transpose">#</a> d3.<b>transpose</b>(<i>matrix</i>) [<>](https://github.com/d3/d3-array/blob/master/src/transpose.js "Source")

使用[zip](#zip)操作进行[矩阵转置](http://en.wikipedia.org/wiki/Transpose).

<a name="zip" href="#zip">#</a> d3.<b>zip</b>(<i>arrays…</i>) [<>](https://github.com/d3/d3-array/blob/master/src/zip.js "Source")

数组重合并

```js
d3.zip([1, 2], [3, 4]); // returns [[1, 3], [2, 4]]
```

### Histograms

[<img src="https://raw.githubusercontent.com/d3/d3-array/master/img/histogram.png" width="480" height="250" alt="Histogram">](http://bl.ocks.org/mbostock/3048450)

直方图可以将一些离散的样本统计映射到连续的空间，并且这种映射是非重叠的。直方图经常用来对一系列数值分布空间进行可视化。


<a name="histogram" href="#histogram">#</a> d3.<b>histogram</b>() [<>](https://github.com/d3/d3-array/blob/master/src/histogram.js "Source")

使用默认的设置创建一个直方图生成器.

<a name="_histogram" href="#_histogram">#</a> <i>histogram</i>(<i>data</i>) [<>](https://github.com/d3/d3-array/blob/master/src/histogram.js#L14 "Source")

根据给定的数据样品计算对应的直方图。返回一个*bins*(纵向柱子)数组，每个*bin*都包含了与输入数据相关联的元素。*bin*的*length*属性表示这个*bin*里包含的元素个数，每个*bin*包含两个属性:

* `x0` - bin的下界 (包含).
* `x1` - bin的上界 (不包含,最后一个bin除外).

<a name="histogram_value" href="#histogram_value">#</a> <i>histogram</i>.<b>value</b>([<i>value</i>]) [<>](https://github.com/d3/d3-array/blob/master/src/histogram.js#L58 "Source")

如果指定了*value*，则为直方图设置值访问器并返回直方图生成器。如果*value*没有指定，则返回当前的值访问器。

当[生成](#_histogram)直方图时, 值访问器会在数据的每个元素上调用，并传递当前的元素 `d`, 索引 `i`, 以及原始数据 `data` . 默认的值访问器是假设输入数据是可以排序的(比如数值类型和日期类型)，如果原始数据不能直接排序，则需要设置值访问器，并在访问器内部返回一个可排序的值。

<a name="histogram_domain" href="#histogram_domain">#</a> <i>histogram</i>.<b>domain</b>([<i>domain</i>]) [<>](https://github.com/d3/d3-array/blob/master/src/histogram.js#L62 "Source")

如果指定了*domain*则设置直方图的输入范围，这个值是一个[min,max]数组，表示直方图可取的最小值和最大值，如果生成的数据某个元素的值超出这个范围，则忽略这个元素。

例如，如果直方图与[线性比例尺](https://github.com/d3/d3-scale#linear-scales) `x` 结合使用时，则需要进行如下设置:

```js
var histogram = d3.histogram()
    .domain(x.domain())
    .thresholds(x.ticks(20));
```

然后使用如下方法计算*bins*:

```js
var bins = histogram(numbers);
```

*domian*访问器是被生成后的*bins*数组调用，而不是原始数据。


<a name="histogram_thresholds" href="#histogram_thresholds">#</a> <i>histogram</i>.<b>thresholds</b>([<i>count</i>]) [<>](https://github.com/d3/d3-array/blob/master/src/histogram.js#L66 "Source")
<br><a name="histogram_thresholds" href="#histogram_thresholds">#</a> <i>histogram</i>.<b>thresholds</b>([<i>thresholds</i>])  [<>](https://github.com/d3/d3-array/blob/master/src/histogram.js#L66 "Source")

如果指定了*thresholds*，则根据指定的数组或方法设置[阈值生成器](#histogram-thresholds)并返回直方图生成器。默认的阈值是使用[Sturges’ formula](#thresholdSturges)方法. 阈值是以数组的形式定义的，比如 [*x0*, *x1*, …]. 任何比 *x0* 小的值被放置在第一个*bin*中。大于等于 *x0* 但是小于 *x1* 的被放置在第二个*bin*中; 以此类推. 最终[直方图生成器](#_histogram) 将包含 *thresholds*.length + 1 个 *bins*. 参考 [histogram thresholds](#histogram-thresholds) 获取更多信息.

如果使用 *count* 来代替 *thresholds*, 则 [domain](#histogram_domain) 将被分割成 *count* 个 *bins*; 参考 [ticks](#ticks).

### Histogram Thresholds

这些方法一般不直接使用，而是传递给[*histogram*.thresholds](#histogram_thresholds)使用. 

<a name="thresholdFreedmanDiaconis" href="#thresholdFreedmanDiaconis">#</a> d3.<b>thresholdFreedmanDiaconis</b>(<i>values</i>, <i>min</i>, <i>max</i>) [<>](https://github.com/d3/d3-array/blob/master/src/threshold/freedmanDiaconis.js "Source")

根据[Freedman–Diaconis rule](https://en.wikipedia.org/wiki/Histogram#Mathematical_definition)方法计算*bins*; *values* 必须为数值类型.

<a name="thresholdScott" href="#thresholdScott">#</a> d3.<b>thresholdScott</b>(<i>values</i>, <i>min</i>, <i>max</i>) [<>](https://github.com/d3/d3-array/blob/master/src/threshold/scott.js "Source")

根据[Scott’s normal reference rule](https://en.wikipedia.org/wiki/Histogram#Mathematical_definition)方法计算*bins*; *values* 必须为数值类型.

<a name="thresholdSturges" href="#thresholdSturges">#</a> d3.<b>thresholdSturges</b>(<i>values</i>) [<>](https://github.com/d3/d3-array/blob/master/src/threshold/sturges.js "Source")

根据[Sturges’ formula](https://en.wikipedia.org/wiki/Histogram#Mathematical_definition)方法计算*bins*; *values* 必须为数值类型.