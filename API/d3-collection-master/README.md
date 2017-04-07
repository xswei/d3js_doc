# d3-collection

D3内置的一些数据结构，包括对象(Object),集合(Set),映射(Map)以及Nests。

## Installing

NPM等安装方法略

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

Object是JavaScript中一种常见的数据结构，它是以key-value的形式存储。在遍历时可以使用[for…in 循环](https://developer.mozilla.org/en/JavaScript/Reference/Statements/for...in).但是要注意，这个循环顺序是不确定的,并且会将原型链上的属性遍历出来，因此要结合*hasOwnProperty*来过滤属性。

<a name="keys" href="#keys">#</a> d3.<b>keys</b>(<i>object</i>) [<>](https://github.com/d3/d3-collection/blob/master/src/keys.js "Source")

以数组的形式返回指定对象(或类数组对象)中的key，返回的次序是未经过排序的。

<a name="values" href="#values">#</a> d3.<b>values</b>(<i>object</i>) [<>](https://github.com/d3/d3-collection/blob/master/src/values.js "Source")

以数组的形式返回指定对象(或类数组对象)中的value，返回的次序是未经过排序的。

<a name="entries" href="#entries">#</a> d3.<b>entries</b>(<i>object</i>) [<>](https://github.com/d3/d3-collection/blob/master/src/entries.js "Source")

将指定对象重构为对象数组，加入了key和value属性，具体如下所示:

```js
d3.entries({foo: 42, bar: true}); // [{key: "foo", value: 42}, {key: "bar", value: true}]
```

### Maps

与[ES6 Maps](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)有些相似, 但是有如下不同:

* Keys必须为字符串.
* 使用[map.each](#map_each), 而是不是 [map.forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/forEach). (Also, no *thisArg*.)
* 使用[map.remove](#map_remove)删除, 而不是[map.delete](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/delete).
* 使用[map.entries](#map_entries)返回{key, value}对象数组, 而不是[key, value]的迭代器.
* [map.size](#map_size)是一个方法, 而不是[property](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/size)属性; 同样[map.empty](#map_empty)也是.

<a name="map" href="#map">#</a> d3.<b>map</b>([<i>object</i>[, <i>key</i>]]) [<>](https://github.com/d3/d3-collection/blob/master/src/map.js "Source")

构造一个map结构，如果指定了*object*, 则将*object*中的可枚举属性加入到map中。object也可以是一个数组或其他的map. 可选的 *key* 方法可以用来指定索引方式. 例如如果要通过属性值进行map索引则:

```js
var map = d3.map([{name: "foo"}, {name: "bar"}], function(d) { return d.name; });
map.get("foo"); // {"name": "foo"}
map.get("bar"); // {"name": "bar"}
map.get("baz"); // undefined
```

如果不指定*key* 方法,则map只能通过索引访问:

```js
var map = d3.map([{name: "foo"}, {name: "bar"}]);
map.get("0"); // {"name": "foo"}
map.get("1"); // {"name": "bar"}
map.get("foo"); // undefined
```


<a name="map_has" href="#map_has">#</a> <i>map</i>.<b>has</b>(<i>key</i>) [<>](https://github.com/d3/d3-collection/blob/master/src/map.js#L7 "Source")

当且仅*map*中存在指定的*key*字符串时候返回true，要注意值可能为 `null` 或 `undefined`.

<a name="map_get" href="#map_get">#</a> <i>map</i>.<b>get</b>(<i>key</i>) [<>](https://github.com/d3/d3-collection/blob/master/src/map.js#L10 "Source")

返回指定*key*字符串的值，如果不存在则返回 `undefined`.

<a name="map_set" href="#map_set">#</a> <i>map</i>.<b>set</b>(<i>key</i>, <i>value</i>) [<>](https://github.com/d3/d3-collection/blob/master/src/map.js#L13 "Source")

为指定的*key*设置值*value*,如果map中存在*key*则覆盖，如果不存在则添加一条记录，允许链式语法。例如:

```js
var map = d3.map()
    .set("foo", 1)
    .set("bar", 2)
    .set("baz", 3);

map.get("foo"); // 1
```

<a name="map_remove" href="#map_remove">#</a> <i>map</i>.<b>remove</b>(<i>key</i>) [<>](https://github.com/d3/d3-collection/blob/master/src/map.js#L17 "Source")

移除*key*对应的那条数据,移除成功返回true，否则不做任何操作并返回false。

<a name="map_clear" href="#map_clear">#</a> <i>map</i>.<b>clear</b>() [<>](https://github.com/d3/d3-collection/blob/master/src/map.js#L21 "Source")

清空map.

<a name="map_keys" href="#map_keys">#</a> <i>map</i>.<b>keys</b>() [<>](https://github.com/d3/d3-collection/blob/master/src/map.js#L24 "Source")

将map中的key以数组的形式返回，返回顺序是任意不可信的。

<a name="map_values" href="#map_values">#</a> <i>map</i>.<b>values</b>() [<>](https://github.com/d3/d3-collection/blob/master/src/map.js#L29 "Source")

将map中的值以数组的形式返回，返回顺序是任意不可信的。

<a name="map_entries" href="#map_entries">#</a> <i>map</i>.<b>entries</b>() [<>](https://github.com/d3/d3-collection/blob/master/src/map.js#L34 "Source")

以{key,value}数组的形式返回map中的条目.

<a name="map_each" href="#map_each">#</a> <i>map</i>.<b>each</b>(<i>function</i>) [<>](https://github.com/d3/d3-collection/blob/master/src/map.js#L48 "Source")

为map中的每个元素执行 *function* , 传递当前的元素的 *value* 和 *key* 以及*map*自身为参数, 并返回 undefined. 

<a name="map_empty" href="#map_empty">#</a> <i>map</i>.<b>empty</b>() [<>](https://github.com/d3/d3-collection/blob/master/src/map.js#L44 "Source")

判断*map*是否为空，当且仅当map中有0个条目时返回true.

<a name="map_size" href="#map_size">#</a> <i>map</i>.<b>size</b>() [<>](https://github.com/d3/d3-collection/blob/master/src/map.js#L39 "Source")

获取map中所包含的条目数量。

### Sets

与[ES6 Sets](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)有些类似，但是有如下不同:

* Values必须为字符串.
* 使用[set.each](#set_each)遍历而不是[set.forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/forEach).
* 使用[set.remove](#set_remove)移除元素而不是[set.delete](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/delete).
* [set.size](#set_size)是一个方法用以获取集合大小而不是属性[property](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/size); [set.empty](#set_empty)也是.

<a name="set" href="#set">#</a> d3.<b>set</b>([<i>array</i>[, <i>accessor</i>]]) [<>](https://github.com/d3/d3-collection/blob/master/src/set.js "Source")

构建一个新的set对象。如果指定了 *array* 则将 *array* 中的元素都作为set的元素并返回。*array*也可以是其他的set对象。如果指定了 *accessor* ,则在将元素添加到set之前先对每个元素执行执行的访问器方法.

<a name="set_has" href="#set_has">#</a> <i>set</i>.<b>has</b>(<i>value</i>) [<>](https://github.com/d3/d3-collection/blob/master/src/set.js#L9 "Source")

当set中包含指定的*value* 字符串时返回true.

<a name="set_add" href="#set_add">#</a> <i>set</i>.<b>add</b>(<i>value</i>) [<>](https://github.com/d3/d3-collection/blob/master/src/set.js#L10 "Source")

将指定的 *value* 字符串添加到set中并返回set，因此支持链式语法:

```js
var set = d3.set()
    .add("foo")
    .add("bar")
    .add("baz");

set.has("foo"); // true
```

<a name="set_remove" href="#set_remove">#</a> <i>set</i>.<b>remove</b>(<i>value</i>) [<>](https://github.com/d3/d3-collection/blob/master/src/set.js#L15 "Source")

如果set中存在*value*字符串则将其移除并返回true，否则什么都不做并返回false。

<a name="set_clear" href="#set_clear">#</a> <i>set</i>.<b>clear</b>() [<>](https://github.com/d3/d3-collection/blob/master/src/set.js#L16 "Source")

清空set.

<a name="set_values" href="#set_values">#</a> <i>set</i>.<b>values</b>() [<>](https://github.com/d3/d3-collection/blob/master/src/set.js#L17 "Source")

以数组的形式返回set中所有的values，顺序是任意不可信的，可以方便的用来去重:

```js
d3.set(["foo", "bar", "foo", "baz"]).values(); // "foo", "bar", "baz"
```

<a name="set_each" href="#set_each">#</a> <i>set</i>.<b>each</b>(<i>function</i>) [<>](https://github.com/d3/d3-collection/blob/master/src/set.js#L20 "Source")

为set中每个元素执行*function*，前两个参数都为value，第三个参数为set自身。最终返回undefined，遍历次序任意不可信.

<a name="set_empty" href="#set_empty">#</a> <i>set</i>.<b>empty</b>() [<>](https://github.com/d3/d3-collection/blob/master/src/set.js#L19 "Source")

当set中没有条目时返回true。

<a name="set_size" href="#set_size">#</a> <i>set</i>.<b>size</b>() [<>](https://github.com/d3/d3-collection/blob/master/src/set.js#L18 "Source")

返回set中包含的条目个数。

### Nests

嵌套结构可以将数组中的元素重构为层次结构。与SQL中的GROUP BY操作类似，只不过Nest结果返回一个层级结构的树而不是表(SQL的GROUP BY操作返回表)。嵌套规则可以通过*key*方法说明，嵌套后的叶节点都可以根据值进行排序而非叶节点可以通过*key*进行排序。


例如对于以下的列表数据:

```js
var yields = [
  {yield: 27.00, variety: "Manchuria", year: 1931, site: "University Farm"},
  {yield: 48.87, variety: "Manchuria", year: 1931, site: "Waseca"},
  {yield: 27.43, variety: "Manchuria", year: 1931, site: "Morris"},
  ...
];
```

依次根据year属性和variety属性对列表进行重构:

```js
var entries = d3.nest()
    .key(function(d) { return d.year; })
    .key(function(d) { return d.variety; })
    .entries(yields);
```

然后返回重构后的层级结构数据，输出的数组中的每个元素都是以key-value形式出现(使用了entries方法):

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

Nest结构可以方便的生成SVG或HTML嵌套结构。

关于嵌套的更多信息可以参考以下资料:

* Phoebe Bright’s [D3 Nest Tutorial and examples](http://bl.ocks.org/phoebebright/raw/3176159/)
* Shan Carter’s [Mister Nester](http://bl.ocks.org/shancarter/raw/4748131/)

<a name="nest" href="#nest">#</a> d3.<b>nest</b>() [<>](https://github.com/d3/d3-collection/blob/master/src/nest.js "Source")

创建一个嵌套结构操作，并且*keys*为空。

<a name="nest_key" href="#nest_key">#</a> <i>nest</i>.<b>key</b>(<i>key</i>) [<>](https://github.com/d3/d3-collection/blob/master/src/nest.js#L4 "Source")

注册一个新的*key*方法，*key*方法将在输入数据的每个元素上调用，并且返回一个字符串标识以便归组重构。*key*方法就是一个访问器，可以添加多个*key*方法，每次添加之后都将*key*方法追加到内部*keys*数组末尾。


<a name="nest_sortKeys" href="#nest_sortKeys">#</a> <i>nest</i>.<b>sortKeys</b>(<i>comparator</i>) [<>](https://github.com/d3/d3-collection/blob/master/src/nest.js#L5 "Source")

为*key*指定排序规则，如果没有指定排序规则则返回当前的排序规则，默认为undefined。例如如果要根据上述例子中的year属性升序并根据varieties进行降序则:

```js
var entries = d3.nest()
    .key(function(d) { return d.year; }).sortKeys(d3.ascending)
    .key(function(d) { return d.variety; }).sortKeys(d3.descending)
    .entries(yields);
```

要注意这个排序在使用 [*nest*.entries](#nest_entries)才起作用，而由[*nest*.map](#nest_map) 和 [*nest*.object](#nest_object) 返回的数据则没有用.

<a name="nest_sortValues" href="#nest_sortValues">#</a> <i>nest</i>.<b>sortValues</b>(<i>comparator</i>) [<>](https://github.com/d3/d3-collection/blob/master/src/nest.js#L6 "Source")

根据value值对叶节点进行排序。这个排序在使用 [*nest*.entries](#nest_entries)才起作用，而由[*nest*.map](#nest_map) 和 [*nest*.object](#nest_object) 返回的数据则没有用。

<a name="nest_rollup" href="#nest_rollup">#</a> <i>nest</i>.<b>rollup</b>(<i>function</i>) [<>](https://github.com/d3/d3-collection/blob/master/src/nest.js#L7 "Source")

为每个叶节点元素指定卷积方法。在 [*nest*.map](#nest_map)和[*nest*.object](#nest_object)返回的值将代替原叶节点的值; 而在[*nest*.entries](#nest_entries)中, 将使用*entry*.value 代替 *entry*.values .

<a name="nest_map" href="#nest_map">#</a> <i>nest</i>.<b>map</b>(<i>array</i>) [<>](https://github.com/d3/d3-collection/blob/master/src/nest.js#L50 "Source")

为指定的数组应用嵌套操作，并以map的形式返回。

<a name="nest_object" href="#nest_object">#</a> <i>nest</i>.<b>object</b>(<i>array</i>) [<>](https://github.com/d3/d3-collection/blob/master/src/nest.js#L49 "Source")


为指定的数组应用嵌套操作，并以`object`的形式返回。

<a name="nest_entries" href="#nest_entries">#</a> <i>nest</i>.<b>entries</b>(<i>array</i>) [<>](https://github.com/d3/d3-collection/blob/master/src/nest.js#L51 "Source")

为指定的数组应用嵌套操作，并以`entries`的形式返回。