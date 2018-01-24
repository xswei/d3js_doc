# d3-collection

几种常用的键值对类型的数据结构

## Installing

- npm安装：`npm install d3-collection`
- 下载[最新版](https://github.com/d3/d3-collection/releases/latest)
- 直接从[d3js.org](https://d3js.org)以[单独的标准库](https://d3js.org/d3-collection.v1.min.js)引入或作为[D3 4.0](https://github.com/d3/d3)的一部分引入

支持AMD, CommonJS,和 vanilla 环境,暴露`d3`全局变量:

```html
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

Nesting allows elements in an array to be grouped into a hierarchical tree structure; think of it like the GROUP BY operator in SQL, except you can have multiple levels of grouping, and the resulting output is a tree rather than a flat table. The levels in the tree are specified by key functions. The leaf nodes of the tree can be sorted by value, while the internal nodes can be sorted by key. An optional rollup function will collapse the elements in each leaf node using a summary function. The nest operator (the object returned by [nest](#nest)) is reusable, and does not retain any references to the data that is nested.

For example, consider the following tabular data structure of Barley yields, from various sites in Minnesota during 1931-2:

```js
var yields = [
  {yield: 27.00, variety: "Manchuria", year: 1931, site: "University Farm"},
  {yield: 48.87, variety: "Manchuria", year: 1931, site: "Waseca"},
  {yield: 27.43, variety: "Manchuria", year: 1931, site: "Morris"},
  ...
];
```

To facilitate visualization, it may be useful to nest the elements first by year, and then by variety, as follows:

```js
var entries = d3.nest()
    .key(function(d) { return d.year; })
    .key(function(d) { return d.variety; })
    .entries(yields);
```

This returns a nested array. Each element of the outer array is a key-values pair, listing the values for each distinct key:

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

The nested form allows easy iteration and generation of hierarchical structures in SVG or HTML.

For a longer introduction to nesting, see:

* Phoebe Bright’s [D3 Nest Tutorial and examples](http://bl.ocks.org/phoebebright/raw/3176159/)
* Shan Carter’s [Mister Nester](http://bl.ocks.org/shancarter/raw/4748131/)

<a name="nest" href="#nest">#</a> d3.<b>nest</b>() [<源码>](https://github.com/d3/d3-collection/blob/master/src/nest.js "Source")

Creates a new nest operator. The set of keys is initially empty.

<a name="nest_key" href="#nest_key">#</a> <i>nest</i>.<b>key</b>(<i>key</i>) [<源码>](https://github.com/d3/d3-collection/blob/master/src/nest.js#L4 "Source")

Registers a new *key* function. The *key* function will be invoked for each element in the input array and must return a string identifier to assign the element to its group. Most often, the function is a simple accessor, such as the year and variety accessors above. (Keys functions are *not* passed the input array index.) Each time a key is registered, it is pushed onto the end of the internal array of keys, and the nest operator applies an additional level of nesting.

<a name="nest_sortKeys" href="#nest_sortKeys">#</a> <i>nest</i>.<b>sortKeys</b>(<i>comparator</i>) [<源码>](https://github.com/d3/d3-collection/blob/master/src/nest.js#L5 "Source")

Sorts key values for the [current key](#nest_key) using the specified *comparator* function, such as [d3.ascending](https://github.com/d3/d3-array#ascending) or [d3.descending](https://github.com/d3/d3-array#descending). If no comparator is specified for the current key, the order in which keys will be returned is undefined. For example, to sort years in ascending order and varieties in descending order:

```js
var entries = d3.nest()
    .key(function(d) { return d.year; }).sortKeys(d3.ascending)
    .key(function(d) { return d.variety; }).sortKeys(d3.descending)
    .entries(yields);
```

Note that this only affects the result of [*nest*.entries](#nest_entries); the order of keys returned by [*nest*.map](#nest_map) and [*nest*.object](#nest_object) is always undefined, regardless of comparator.

<a name="nest_sortValues" href="#nest_sortValues">#</a> <i>nest</i>.<b>sortValues</b>(<i>comparator</i>) [<源码>](https://github.com/d3/d3-collection/blob/master/src/nest.js#L6 "Source")

Sorts leaf elements using the specified *comparator* function, such as [d3.ascending](https://github.com/d3/d3-array#ascending) or [d3.descending](https://github.com/d3/d3-array#descending). This is roughly equivalent to sorting the input array before applying the nest operator; however it is typically more efficient as the size of each group is smaller. If no value comparator is specified, elements will be returned in the order they appeared in the input array. This applies to [*nest*.map](#nest_map), [*nest*.entries](#nest_entries) and [*nest*.object](#nest_object).

<a name="nest_rollup" href="#nest_rollup">#</a> <i>nest</i>.<b>rollup</b>(<i>function</i>) [<源码>](https://github.com/d3/d3-collection/blob/master/src/nest.js#L7 "Source")

Specifies a rollup *function* to be applied on each group of leaf elements. The return value of the rollup function will replace the array of leaf values in either the associative array returned by [*nest*.map](#nest_map) or [*nest*.object](#nest_object); for [*nest*.entries](#nest_entries), it replaces the leaf *entry*.values with *entry*.value. If a [leaf comparator](#nest_sortValues) is specified, the leaf elements are sorted prior to invoking the rollup function.

<a name="nest_map" href="#nest_map">#</a> <i>nest</i>.<b>map</b>(<i>array</i>) [<源码>](https://github.com/d3/d3-collection/blob/master/src/nest.js#L50 "Source")

Applies the nest operator to the specified *array*, returning a nested [map](#map). Each entry in the returned map corresponds to a distinct key value returned by the first key function. The entry value depends on the number of registered key functions: if there is an additional key, the value is another map; otherwise, the value is the array of elements filtered from the input *array* that have the given key value. If no keys are defined, returns the input *array*.

<a name="nest_object" href="#nest_object">#</a> <i>nest</i>.<b>object</b>(<i>array</i>) [<源码>](https://github.com/d3/d3-collection/blob/master/src/nest.js#L49 "Source")

Applies the nest operator to the specified *array*, returning a nested object. Each entry in the returned associative array corresponds to a distinct key value returned by the first key function. The entry value depends on the number of registered key functions: if there is an additional key, the value is another associative array; otherwise, the value is the array of elements filtered from the input *array* that have the given key value.

Note: this method is unsafe if any of the keys conflict with built-in JavaScript properties, such as `__proto__`. If you cannot guarantee that the keys will be safe, you should use [nest.map](#nest_map) instead.

<a name="nest_entries" href="#nest_entries">#</a> <i>nest</i>.<b>entries</b>(<i>array</i>) [<源码>](https://github.com/d3/d3-collection/blob/master/src/nest.js#L51 "Source")

Applies the nest operator to the specified *array*, returning an array of key-values entries. Conceptually, this is similar to applying [*map*.entries](#map_entries) to the associative array returned by [*nest*.map](#nest_map), but it applies to every level of the hierarchy rather than just the first (outermost) level. Each entry in the returned array corresponds to a distinct key value returned by the first key function. The entry value depends on the number of registered key functions: if there is an additional key, the value is another nested array of entries; otherwise, the value is the array of elements filtered from the input *array* that have the given key value.
