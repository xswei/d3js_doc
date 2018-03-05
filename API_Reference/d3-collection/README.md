# d3-collection

几种常用的键值对类型的数据结构

## Installing

- npm安装：`npm install d3-collection`
- 下载[最新版](https://github.com/d3/d3-collection/releases/latest)
- 直接从[d3js.org](https://d3js.org)以[单独的标准库](https://d3js.org/d3-collection.v1.min.js)引入或作为[D3 4.0](https://github.com/d3/d3)的一部分引入

支持AMD, CommonJS,和 vanilla 环境,暴露`d3`全局变量:

```js
<script src="https://d3js.org/d3-collection.v1.min.js"></script>
<script>

var map = d3.map()
    .set("foo", 1)
    .set("bar", 2);

</script>
```

[在浏览器中测试d3-collection](https://tonicdev.com/npm/d3-collection)

## API Reference

* [Objects](#objects)
* [Maps](#maps)
* [Sets](#sets)
* [Nests](#nests)

### Objects

在JavaScript中常见的数据类型是*associative array*(关联数组), 简言之就是具有一个属性集的*对象*. 对象的的标准迭代方式是[for…in 循环](https://developer.mozilla.org/en/JavaScript/Reference/Statements/for...in),但是迭代次序是未定义的.D3提供了以下几种将对象转为数字索引的标准数组的方法.

请注意：当使用普通对象作为属性名是可以的,但是当使用特殊内置的属性名时会导致意想不到的事发生,比如使用`object["__proto__"] = 42` 和 `"hasOwnProperty" in object`. 如果不能保证映射的键是安全的情况下请使用[maps](#maps) 和 [sets](#sets)(或标准的ES6数据结构)来代替对象.

<a name="keys" href="#keys">#</a> d3.<b>keys</b>(<i>object</i>) [<源码>](https://github.com/d3/d3-collection/blob/master/src/keys.js "Source")

返回一个包含了指定对象属性名的数组.数组的顺序是未定义(不可靠)的.

<a name="values" href="#values">#</a> d3.<b>values</b>(<i>object</i>) [<源码>](https://github.com/d3/d3-collection/blob/master/src/values.js "Source")

返回一个包含了指定对象属性值的数组.数组的顺序是未定义(不可靠)的.

<a name="entries" href="#entries">#</a> d3.<b>entries</b>(<i>object</i>) [<源码>](https://github.com/d3/d3-collection/blob/master/src/entries.js "Source")

将对象转为标准的包含key和value的对象数组.也就是将对象的key-value对重组为一个对象,比如将`{foo: 42}`转为`{key: "foo", value: 42}`. 所传入的对象被重组为一个数组. 次序同样是不固定的：

```js
d3.entries({foo: 42, bar: true}); // [{key: "foo", value: 42}, {key: "bar", value: true}]
```

### Maps

与[ES6 Maps](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)类似, 但是有以下几点不同:

* d3.maps的Keys强制要求为字符串.
* 使用[map.each](#map_each)遍历, 而不是[map.forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/forEach). (并且没有*thisArg*参数.)
* 使用[map.remove](#map_remove), 而不是[map.delete](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/delete).
* [map.entries](#map_entries)返回{key, value}对象数组而不是[key, value]迭代器
* [map.size](#map_size)是一个方法而不是[property](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/size); [map.empty](#map_empty)同样也是方法不是属性.

<a name="map" href="#map">#</a> d3.<b>map</b>([<i>object</i>[, <i>key</i>]]) [<源码>](https://github.com/d3/d3-collection/blob/master/src/map.js "Source")

构建一个新的map. 如果指定了*object*则将其所有的可枚举对象复制到map中.*object*可以是一个数组也可以是其他的map对象.可选的*key*方法用来指定使用哪个属性作为key,比如:

```js
var map = d3.map([{name: "foo"}, {name: "bar"}], function(d) { return d.name; });
map.get("foo"); // {"name": "foo"}
map.get("bar"); // {"name": "bar"}
map.get("baz"); // undefined
```

参考 [nests](#nests).

<a name="map_has" href="#map_has">#</a> <i>map</i>.<b>has</b>(<i>key</i>) [<源码>](https://github.com/d3/d3-collection/blob/master/src/map.js#L7 "Source")

当且仅当map中包含指定的*key*的时候返回true, 要注意其对应的*value*可能为`null`或者`undefined`

<a name="map_get" href="#map_get">#</a> <i>map</i>.<b>get</b>(<i>key</i>) [<源码>](https://github.com/d3/d3-collection/blob/master/src/map.js#L10 "Source")

返回指定的*key*对应的值,如果map中不包含指定的*key*则返回`undefined`

<a name="map_set" href="#map_set">#</a> <i>map</i>.<b>set</b>(<i>key</i>, <i>value</i>) [<源码>](https://github.com/d3/d3-collection/blob/master/src/map.js#L13 "Source")

设置map中指定的*key*为*value*, 如果已经有相同的*key*字符串则会被覆盖,此方法返回map对象因此可以链式调用. 例如:

```js
var map = d3.map()
    .set("foo", 1)
    .set("bar", 2)
    .set("baz", 3);

map.get("foo"); // 1
```

<a name="map_remove" href="#map_remove">#</a> <i>map</i>.<b>remove</b>(<i>key</i>) [<源码>](https://github.com/d3/d3-collection/blob/master/src/map.js#L17 "Source")

如果map中包含指定的*key*则将其删除并返回true, 否则什么都不做并返回false.

<a name="map_clear" href="#map_clear">#</a> <i>map</i>.<b>clear</b>() [<源码>](https://github.com/d3/d3-collection/blob/master/src/map.js#L21 "Source")

情况map中所有的项

<a name="map_keys" href="#map_keys">#</a> <i>map</i>.<b>keys</b>() [<源码>](https://github.com/d3/d3-collection/blob/master/src/map.js#L24 "Source")

以数组的形式返回map中所有的*keys*, 顺序是不可靠的.

<a name="map_values" href="#map_values">#</a> <i>map</i>.<b>values</b>() [<源码>](https://github.com/d3/d3-collection/blob/master/src/map.js#L29 "Source")

以数组的形式返回map中所有的*value*, 顺序是不可靠的.

<a name="map_entries" href="#map_entries">#</a> <i>map</i>.<b>entries</b>() [<源码>](https://github.com/d3/d3-collection/blob/master/src/map.js#L34 "Source")

将map中所有的项重组为key-value数组.顺序是随意的.每一项中*key*必须是字符串,但是对应的*value*可以是任意的类型.

<a name="map_each" href="#map_each">#</a> <i>map</i>.<b>each</b>(<i>function</i>) [<源码>](https://github.com/d3/d3-collection/blob/master/src/map.js#L48 "Source")

遍历map中的每一项,并对每一项执行*function*, 当前项的value和key作为参数, 随后是map本身, 返回undefined.

<a name="map_empty" href="#map_empty">#</a> <i>map</i>.<b>empty</b>() [<源码>](https://github.com/d3/d3-collection/blob/master/src/map.js#L44 "Source")

当且仅当map中没有任何项时返回true

<a name="map_size" href="#map_size">#</a> <i>map</i>.<b>size</b>() [<源码>](https://github.com/d3/d3-collection/blob/master/src/map.js#L39 "Source")

返回map中项的个数

### Sets

与 [ES6 Sets](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)类似,但是有以下不同:

* 值必须为字符串.
* [set.each](#set_each), 而非 [set.forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/forEach). (也没有*thisArg*参数.)
* [set.remove](#set_remove), 而非[set.delete](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/delete).
* [set.size](#set_size) 是一个方法, 而不是[property](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/size); [set.empty](#set_empty)也是一个方法而不是属性.

<a name="set" href="#set">#</a> d3.<b>set</b>([<i>array</i>[, <i>accessor</i>]]) [<源码>](https://github.com/d3/d3-collection/blob/master/src/set.js "Source")

构建一个新的set对象.如果指定了 *array* 则将 *array* 中的元素都作为set的元素并返回.*array*也可以是其他的set对象.如果指定了 *accessor* ,则在将元素添加到set之前先对每个元素执行执行的访问器方法.

<a name="set_has" href="#set_has">#</a> <i>set</i>.<b>has</b>(<i>value</i>) [<源码>](https://github.com/d3/d3-collection/blob/master/src/set.js#L9 "Source")

当set中包含指定的*value* 字符串时返回true.

<a name="set_add" href="#set_add">#</a> <i>set</i>.<b>add</b>(<i>value</i>) [<源码>](https://github.com/d3/d3-collection/blob/master/src/set.js#L10 "Source")

将指定的 *value* 字符串添加到set中并返回set,因此支持链式语法:

```js
var set = d3.set()
    .add("foo")
    .add("bar")
    .add("baz");

set.has("foo"); // true
```

<a name="set_remove" href="#set_remove">#</a> <i>set</i>.<b>remove</b>(<i>value</i>) [<源码>](https://github.com/d3/d3-collection/blob/master/src/set.js#L15 "Source")

如果set中存在*value*字符串则将其移除并返回true,否则什么都不做并返回false.

<a name="set_clear" href="#set_clear">#</a> <i>set</i>.<b>clear</b>() [<源码>](https://github.com/d3/d3-collection/blob/master/src/set.js#L16 "Source")

清空set.

<a name="set_values" href="#set_values">#</a> <i>set</i>.<b>values</b>() [<源码>](https://github.com/d3/d3-collection/blob/master/src/set.js#L17 "Source")

以数组的形式返回set中所有的values,顺序是任意不可信的,可以方便的用来去重:

```js
d3.set(["foo", "bar", "foo", "baz"]).values(); // "foo", "bar", "baz"
```

<a name="set_each" href="#set_each">#</a> <i>set</i>.<b>each</b>(<i>function</i>) [<源码>](https://github.com/d3/d3-collection/blob/master/src/set.js#L20 "Source")

为set中每个元素执行*function*,前两个参数都为value(为了和 [*map*.each](#map_each)对称),其次为set自身.最终返回undefined,遍历次序任意不可信.

<a name="set_empty" href="#set_empty">#</a> <i>set</i>.<b>empty</b>() [<源码>](https://github.com/d3/d3-collection/blob/master/src/set.js#L19 "Source")

当set中没有项时返回true.

<a name="set_size" href="#set_size">#</a> <i>set</i>.<b>size</b>() [<源码>](https://github.com/d3/d3-collection/blob/master/src/set.js#L18 "Source")

返回set中包含的项的个数.

### Nests

Nests(嵌套操作)可以将数组类型的元素重组为层次结构数据。想象一下SQL中的GROUP BY操作。除了可以对元素进行分组之外，嵌套操作的输出是一个树而不是扁平的表。树的具体结构层级由`key`函数决定。同时可以根据`value`对树的叶节点进行排序，而非叶节点可以根据`key`进行排序.

An optional rollup function will collapse the elements in each leaf node using a summary function. 

Nest操作(由[nest](#nest)返回的对象)是可以多次使用的，并且不保留对嵌套数据的任何引用。

The nest operator (the object returned by [nest](#nest)) is reusable, and does not retain any references to the data that is nested.

例如，考虑如下的扁平数据结构：

```js
var yields = [
  {yield: 27.00, variety: "Manchuria", year: 1931, site: "University Farm"},
  {yield: 48.87, variety: "Manchuria", year: 1931, site: "Waseca"},
  {yield: 27.43, variety: "Manchuria", year: 1931, site: "Morris"},
  ...
];
```

在可视化时可能需要先根据年份然后按照类别进行分组重构，可以进行如下操作:

```js
var entries = d3.nest()
    .key(function(d) { return d.year; })
    .key(function(d) { return d.variety; })
    .entries(yields);
```

返回的结果是一个嵌套的数组，最外层数据都由键值对组成:

```js
[{key: "1931", values: [
   {key: "Manchuria", values: [
     {yield: 27.00, variety: "Manchuria", year: 1931, site: "University Farm"},
     {yield: 48.87, variety: "Manchuria", year: 1931, site: "Waseca"},
     {yield: 27.43, variety: "Manchuria", year: 1931, site: "Morris"}, ...]},
   {key: "Glabron", values: [
     {yield: 43.07, variety: "Glabron", year: 1931, site: "University Farm"},
     {yield: 55.20, variety: "Glabron", year: 1931, site: "Waseca"}, ...]}, ...]},
 {key: "1932", values: ...}]
```

嵌套的数据结构能轻松的在SVG或HTML文档中生成分层结构。

更多介绍参考:

* Phoebe Bright’s [D3 Nest Tutorial and examples](http://bl.ocks.org/phoebebright/raw/3176159/)
* Shan Carter’s [Mister Nester](http://bl.ocks.org/shancarter/raw/4748131/)

<a name="nest" href="#nest">#</a> d3.<b>nest</b>() [<源码>](https://github.com/d3/d3-collection/blob/master/src/nest.js "Source")

构建一个新的嵌套操作。`keys`初始为空

<a name="nest_key" href="#nest_key">#</a> <i>nest</i>.<b>key</b>(<i>key</i>) [<源码>](https://github.com/d3/d3-collection/blob/master/src/nest.js#L4 "Source")

注册一个新的`key`函数，`key`函数将会在输入数组的每个元素上进行调用，并且返回一个字符串标识用来对所有元素进行分组。大多数情况下，是一个简单的访问器，就行上述例子中的年份和种类访问器一样。(`key`方法并不传递当前数组的索引)，每次注册`key`后，其会被添加到`key`数组的末尾，the nest operator applies an additional level of nesting.

<a name="nest_sortKeys" href="#nest_sortKeys">#</a> <i>nest</i>.<b>sortKeys</b>(<i>comparator</i>) [<源码>](https://github.com/d3/d3-collection/blob/master/src/nest.js#L5 "Source")

为[current key](#nest_key)指定一个*comparator*函数用以对当前`key`下的元素排序。和[d3.ascending](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-array/README.md#ascending) or [d3.descending](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-array/README.md#descending)类似。如果没有指定，则默认的`key`排序为undefined。例如，根据year和varieties进行排序：

```js
var entries = d3.nest()
    .key(function(d) { return d.year; }).sortKeys(d3.ascending)
    .key(function(d) { return d.variety; }).sortKeys(d3.descending)
    .entries(yields);
```

排序操作仅仅影响[*nest*.entries](#nest_entries)的结果。由[*nest*.map](#nest_map) 和 [*nest*.object](#nest_object)返回的`keys`的顺序是未知的。

<a name="nest_sortValues" href="#nest_sortValues">#</a> <i>nest</i>.<b>sortValues</b>(<i>comparator</i>) [<源码>](https://github.com/d3/d3-collection/blob/master/src/nest.js#L6 "Source")

为嵌套操作的叶节点指定一个*comparator*，和[d3.ascending](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-array/README.md#ascending) or [d3.descending](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-array/README.md#descending)类似。这与对数组进行嵌套重组之前进行排序是大致一致的。如果没有指定比较函数，则元素的顺序会依照输入数组的顺序排序。这个操作对[*nest*.map](#nest_map), [*nest*.entries](#nest_entries) 和 [*nest*.object](#nest_object)都有影响。

<a name="nest_rollup" href="#nest_rollup">#</a> <i>nest</i>.<b>rollup</b>(<i>function</i>) [<源码>](https://github.com/d3/d3-collection/blob/master/src/nest.js#L7 "Source")

指定一个`rollup(归纳)`函数，应用在每个分组的叶节点上。归纳函数的返回值将代替由[*nest*.map](#nest_map) 或 [*nest*.object](#nest_object)返回的叶节点元素。对于[*nest*.entries](#nest_entries)操作，它会代替用*entry*.value 代替 *entry*.values。如果指定了[leaf comparator](#nest_sortValues)则叶节点会在调用归纳函数之前调用。


注意：上述操作都在定义嵌套的行为，要将嵌套应用到具体的数据上，需要调用`nest.map`, `nest.object`以及`nest.entries`方法

<a name="nest_map" href="#nest_map">#</a> <i>nest</i>.<b>map</b>(<i>array</i>) [<源码>](https://github.com/d3/d3-collection/blob/master/src/nest.js#L50 "Source")

将嵌套操作应用到指定的数组，并返回嵌套后的[map](#map)。返回的map映射中的每一项都对应由第一个`key`函数的返回的独特的key值。每一项的值都取决于注册的key函数的数量：如果不止一个key函数则值是一个map，否则就是数组中经过过滤之后对应的key的元素数组。如果没有定义key函数，则返回输入数组。

<a name="nest_object" href="#nest_object">#</a> <i>nest</i>.<b>object</b>(<i>array</i>) [<源码>](https://github.com/d3/d3-collection/blob/master/src/nest.js#L49 "Source")

将指定的嵌套操作应用到指定的*array*, 返回一个嵌套对象。返回的关联数组中的每一项都与第一个`key`函数相关。每一项的值取决于key函数的个数：如果不止一个key函数则值为一个关联数组，否则是经过key函数过滤之后的数组。

注意的是如果输入数组中包括与JavaScript内置`key`（比如__proto__）冲突的话是不安全的。如果不能保证数组中所有的`key`都是安全的请使用[nest.map](#nest_map)代替。


<a name="nest_entries" href="#nest_entries">#</a> <i>nest</i>.<b>entries</b>(<i>array</i>) [<源码>](https://github.com/d3/d3-collection/blob/master/src/nest.js#L51 "Source")

将指定的嵌套操作应用到指定的*array*，返回经过嵌套处理后的`key-values`对。与将[*map*.entries](#map_entries)应用到关联数组类似。但是具有层次结构，嵌套体现在`value`，如果指定了多个`key`则如果对应的`key`下有数据的话，其`value`也为一个`key-values`对象，以此类推。
