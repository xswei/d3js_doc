# d3-selection

数据驱动文档都是基于对文档选择集的操作:设置 [attributes](#selection_attr), [styles](#selection_style), [properties](#selection_property), [HTML](#selection_html) 或者 [text](#selection_text) 内容, 对选择集使用 [data join](#joining-data)的 [enter](#selection_enter) 和 [exit](#selection_enter) 操作可以为选择集 [add](#selection_append) 或 [remove](#selection_remove) 数据.

选择集的方法一般返回当前选择集或一个新的选择集，这样可以支持简明的链式语法。例如为所有的p元素设置类和样式:

```js
d3.selectAll("p")
    .attr("class", "graf")
    .style("color", "red");
```

等价于:

```js
var p = d3.selectAll("p");
p.attr("class", "graf");
p.style("color", "red");
```

按照约定，返回当前选择集的方法使用四个空格，而返回新选择集的方法则使用两个。这样有利于突出显示，便于分析程序:

```js
d3.select("body")
  .append("svg")
    .attr("width", 960)
    .attr("height", 500)
  .append("g")
    .attr("transform", "translate(20,20)")
  .append("rect")
    .attr("width", 920)
    .attr("height", 460);
```


## Installing

NPM等安装方法略。

```html
<script src="https://d3js.org/d3-selection.v1.min.js"></script>
<script>

var div = d3.selectAll("div");

</script>
```

[在浏览器中测试 d3-selection.](https://tonicdev.com/npm/d3-selection)

## API Reference

* [Selecting Elements(选择元素)](#selecting-elements)
* [Modifying Elements(修改元素)](#modifying-elements)
* [Joining Data(绑定数据)](#joining-data)
* [Handling Events(事件句柄)](#handling-events)
* [Control Flow(控制流)](#control-flow)
* [Local Variables(本地变量)](#local-variables)
* [Namespaces(命名空间)](#namespaces)

### Selecting Elements

选择器方法接受[W3C selector strings](http://www.w3.org/TR/selectors-api/)支持的字符串，比如`.fancy`表示选择类名为*fancy*的元素, `div`选择DIV元素. 选择器方法有两种形式: select and selectAll. select仅仅选择第一个匹配的元素。而selectAll则选中所有匹配的元素. 顶级的选择器方法[d3.select](#select) 和 [d3.selectAll](#selectAll)会查询整个文档。而子选择器[*selection*.select](#selection_select) 和 [*selection*.selectAll](#selection_selectAll)则仅仅在当前选择集中进行查找匹配的元素.

<a name="selection" href="#selection">#</a> d3.<b>selection</b>() [<>](https://github.com/d3/d3-selection/blob/master/src/selection/index.js#L38 "Source")

[Selects](#select) 根元素, `document.documentElement`. 这个方法可以被用来测试一个选择集是否是d3.selection的实例(`instanceof d3.selection`) 或者扩展选择集的属性，比如为选择集添加一个方法来检测checkboxes:

```js
d3.selection.prototype.checked = function(value) {
  return arguments.length < 1   
      ? this.property("checked")
      : this.property("checked", !!value);
};
```

然后使用:

```js
d3.selectAll("input[type=checkbox]").checked(true);
```

<a name="select" href="#select">#</a> d3.<b>select</b>(<i>selector</i>) [<>](https://github.com/d3/d3-selection/blob/master/src/select.js#L3 "Source")

选择第一个匹配*selector*字符串的元素:

```js
var anchor = d3.select("a");
```

如果*selector*不是一个字符串，则选中其引用的节点。比如使用`this`选中当前的元素:

```js
d3.selectAll("p").on("click", function() {
  d3.select(this).style("color", "red");
});
```

<a name="selectAll" href="#selectAll">#</a> d3.<b>selectAll</b>(<i>selector</i>) [<>](https://github.com/d3/d3-selection/blob/master/src/selectAll.js#L3 "Source")

选中所有与*selector*匹配的元素。

```js
var paragraph = d3.selectAll("p");
```

如果*selector*不是一个字符串，则选中其引用的节点。比如使用一个NodeList作为参数，则会选中这个数组中所有的元素:

```js
d3.selectAll(document.links).style("color", "red");
```

<a name="selection_select" href="#selection_select">#</a> <i>selection</i>.<b>select</b>(<i>selector</i>) [<>](https://github.com/d3/d3-selection/blob/master/src/selection/select.js "Source")

同d3.select(selector),但是这个方法可选择的范围更窄，只能在*selection*中进行选择。

```js
var b = d3.selectAll("p").select("b");
```

如果 *selector*是一个方法，则它会在已经选中的每个元素上调用一次，并传递当前元素绑定的数据(*d*), 索引(*i*), 以及当前的分组 (*nodes*), *this* 指向当前的元素。这个方法一定要返回一个元素或null。最终将所有返回的元素选中作为*selection.select(selector)*的结果。比如选中每个p元素的上一个兄弟节点:

```js
var previous = d3.selectAll("p").select(function() {
  return this.previousElementSibling;
});
```

与[*selection*.selectAll](#selection_selectAll)不同，*selection*.select不会影响分组:它保持了现有的分组结构和索引，以及传递数据给子选择集。分组在数据的绑定中担当了重要的角色。具体可以参考[Nested Selections](http://bost.ocks.org/mike/nest/) 和 [How Selections Work](http://bost.ocks.org/mike/selection/) 来获取更多关于选择集分组的信息.

<a name="selection_selectAll" href="#selection_selectAll">#</a> <i>selection</i>.<b>selectAll</b>(<i>selector</i>) [<>](https://github.com/d3/d3-selection/blob/master/src/selection/selectAll.js "Source")

选中每个已选中元素的符合规则的后代元素。也就是说*selection*是一个选择集，并且这个选择集中可能有多个元素，*selection*.selectAll(selector)方法就是选中*selection*中的中的每个元素的符合规则的后代元素。最后返回的选择集根据对应的父节点进行分组。如果没有选中任何元素或者*selection*为null，则分组为空。比如选中所有p元素中的b元素:

```js
var b = d3.selectAll("p").selectAll("b");
```

如果*selector*是一个方法，则对*selection*中的每个元素调用这个方法，并将返回值记录下，作为最后的选中结果。比如选中所有p元素的上一个兄弟节点和下一个兄弟节点:

```js
var sibling = d3.selectAll("p").selectAll(function() {
  return [
    this.previousElementSibling,
    this.nextElementSibling
  ];
});
```

与[*selection*.select](#selection_select)不同, *selection*.selectAll会影响分组结构: 所有选中的元素根据其在原始选择集中的元素进行分组。具体可以参考[Nested Selections](http://bost.ocks.org/mike/nest/) 和 [How Selections Work](http://bost.ocks.org/mike/selection/) 来获取更多关于选择集分组的信息.

<a name="selection_filter" href="#selection_filter">#</a> <i>selection</i>.<b>filter</b>(<i>filter</i>) [<>](https://github.com/d3/d3-selection/blob/master/src/selection/filter.js "Source")

*filter*可以是一个CSS选择字符串，也可以是一个方法。

过滤选择集，返回一个新的选择集。会对选择集中的每个元素进行调用*filter*方法(或匹配CSS字符串)，*filter*返回true时，才保留这个元素。*filter*方法传递当前元素绑定的数据*d*,索引*i*以及当前的分组*nodes*,*this*指向当前的元素。

例如过滤表格中的偶数列:

```js
var even = d3.selectAll("tr").filter(":nth-child(even)");
```
等价于:

```js
var even = d3.selectAll("tr:nth-child(even)");
```

使用方法来进行过滤:

```js
var even = d3.selectAll("tr").filter(function(d, i) { return i & 1; });
```

也可以使用 [*selection*.select](#selection_select):

```js
var even = d3.selectAll("tr").select(function(d, i) { return i & 1 ? this : null; });
```

要注意`:nth-child`是基于1开始计数的，而不是基于0.

<a name="selection_merge" href="#selection_merge">#</a> <i>selection</i>.<b>merge</b>(<i>other</i>) [<>](https://github.com/d3/d3-selection/blob/master/src/selection/merge.js "Source")

将*other*对应的选择集合并到*selection*上，返回的选择集与*selection*具有相同个数的分组和父节点。

这个方法通常用在[data-join](#joining-data)之后来合并[enter](#selection_enter) 和 [update](#selection_data). 在进行enter和updae之后将两个选择集合并而不需要其他的操作，比如:

```js
var circle = svg.selectAll("circle").data(data) // UPDATE
    .style("fill", "blue");

circle.exit().remove(); // EXIT

circle.enter().append("circle") // ENTER
    .style("fill", "green")
  .merge(circle) // ENTER + UPDATE
    .style("stroke", "black");
```

参考 [*selection*.data](#selection_data) 获取完整的解释。

这个方法的目的不是将两个选择集连接起来，如果*selection*和other在相同的索引上都有非null元素，则这个*selection*在这个索引上的元素会被保留，则other在这个索引上对应的元素会被忽略。

<a name="matcher" href="#matcher">#</a> d3.<b>matcher</b>(<i>selector</i>) [<>](https://github.com/d3/d3-selection/blob/master/src/matcher.js "Source")

根据指定的*selector*返回一个函数，这个函数可以接受一个元素，并判断这个元素是否满足*selector*，如果满足则返回true否则返回false。这个方法可以被用在[*selection*.filter](#selection_filter). 比如:

```js
var div = selection.filter("div");
```

等价于:

```js
var div = selection.filter(d3.matcher("div"));
```

<a name="selector" href="#selector">#</a> d3.<b>selector</b>(<i>selector</i>) [<>](https://github.com/d3/d3-selection/blob/master/src/selector.js "Source")

根据指定的*selector*, 返回一个可以匹配第一个满足selector元素的方法。可以被[*selection*.select](#selection_select)使用. 比如:

```js
var div = selection.select("div");
```

等价于:

```js
var div = selection.select(d3.selector("div"));
```

<a name="selectorAll" href="#selectorAll">#</a> d3.<b>selectorAll</b>(<i>selector</i>) [<>](https://github.com/d3/d3-selection/blob/master/src/selectAll.js "Source")

根据指定的*selector*, 返回所有可以匹配selector元素的方法。可以被[*selection*.selectAll](#selection_selectAll)使用. 比如:

```js
var div = selection.selectAll("div");
```

等价于:

```js
var div = selection.selectAll(d3.selectorAll("div"));
```

<a name="window" href="#window">#</a> d3.<b>window</b>(<i>node</i>) [<>](https://github.com/d3/d3-selection/blob/master/src/window.js "Source")

返回*node*所属的window对象。如果 *node* 是一个节点，则返回所属的文档。如果 *node* 是一个文档，则返回这个文档

### Modifying Elements

在选中元素之后，就可以通过一些方法对元素进行操作。比如设置a元素的name属性和颜色:

```js
d3.select("a")
    .attr("name", "fred")
    .style("color", "red");
```


<a name="selection_attr" href="#selection_attr">#</a> <i>selection</i>.<b>attr</b>(<i>name</i>[, <i>value</i>]) [<>](https://github.com/d3/d3-selection/blob/master/src/selection/attr.js "Source")

如果指定了*value*参数则这个方法就是设置，如果只有*name*参数则是获取，下同。

设置或获取元素的*name*属性。

value可以是一个变量，也可以是一个方法，如果是方法，则会执行这个方法，并传递当前元素绑定的数据 (*d*), 索引(*i*), 以及当前分组(*nodes*), this指向的是当前的元素，将方法的返回值作为*name*对应的值。

*name*可能是一个带前缀的属性，比如 `xlink:href`来指定`href`属性的明明空间. 参考[namespaces](#namespaces) 查询支持的明明空间.

<a name="selection_classed" href="#selection_classed">#</a> <i>selection</i>.<b>classed</b>(<i>names</i>[, <i>value</i>]) [<>](https://github.com/d3/d3-selection/blob/master/src/selection/classed.js "Source")

设置或获取指定的类名状态，如果指定了*value*则根据*value*值启用或关闭类。如果没有指定*value*则相当于查询指定类的状态。*name*可以同时指定多个，使用空格隔开。比如为选择集添加foo和bar两个类:

```js
selection.classed("foo bar", true);
```

如果*value*是一个方法，则根据返回值决定是添加还是移除某个类。比如随机的设置或移除foo类:

```js
selection.classed("foo", function() { return Math.random() > 0.5; });
```
如果没有指定*value*则当且仅当第一个非null元素使用了对应的类时返回true。

<a name="selection_style" href="#selection_style">#</a> <i>selection</i>.<b>style</b>(<i>name</i>[, <i>value</i>[, <i>priority</i>]]) [<>](https://github.com/d3/d3-selection/blob/master/src/selection/style.js "Source")

如果指定了*value*，则设置对应的样式为*value*。*value*可以为变量，也可以为一个函数，函数会传递当前元素绑定的数据*d*,索引*i*以及当前的分组*groups*。在函数内部*this*指向当前的元素，函数的返回值作为样式的值。可选的*priority*可以设置为默认的null或字符串`important` (没有感叹号).

如果没有指定*value*则返回当前选择集第一个非null元素经过计算后的样式值，要注意计算后的值 **可能与设置值不同**,尤其是使用了速写方法(比如`font`样式代替标准的`font-size`,`font-face`样式,等等).

注意:与SVG的属性不同，CSS的样式通常有单位，比如`3px`是一个笔画宽度单位，而`3`不是。一些浏览器会隐式为数值类型指定`px`单位，但是有些则不会，比如:IE不指定单位时会出现 “invalid arguments” 错误!

<a name="selection_property" href="#selection_property">#</a> <i>selection</i>.<b>property</b>(<i>name</i>[, <i>value</i>]) [<>](https://github.com/d3/d3-selection/blob/master/src/selection/property.js "Source")

一些HTML元素有些属性不能使用attribute或styles来查询或设置。比如form表单的text元素值以及checkbox的checked值。这时候就需要使用*selection*.property(name[,value])来设置或读取。

按照惯例，设置还是获取取决于有没有指定*value*. *value*可以是变量也可以是函数，函数传递*d*,*i*,*nodes*为参数,*this*指向当前的元素。

<a name="selection_text" href="#selection_text">#</a> <i>selection</i>.<b>text</b>([<i>value</i>]) [<>](https://github.com/d3/d3-selection/blob/master/src/selection/text.js "Source")

设置或获取[text content](http://www.w3.org/TR/DOM-Level-3-Core/core.html#Node3-textContent)内容。可以使用这个方法清空元素内容。

<a name="selection_html" href="#selection_html">#</a> <i>selection</i>.<b>html</b>([<i>value</i>]) [<>](https://github.com/d3/d3-selection/blob/master/src/selection/html.js "Source")

设置或获取[inner HTML](http://dev.w3.org/html5/spec-LC/apis-in-html-documents.html#innerhtml)内容。可以使用这个方法清空元素内容。

使用 [*selection*.append](#selection_append) 或 [*selection*.insert](#selection_insert) 来创建元素，*selection*.html 也支持手动插入HTML字符串来实现插入或添加元素，但是明显更复杂.

<a name="selection_append" href="#selection_append">#</a> <i>selection</i>.<b>append</b>(<i>type</i>) [<>](https://github.com/d3/d3-selection/blob/master/src/selection/append.js "Source")

如果*type*是一个字符串，则在选择集中的每个元素的子元素末尾追加一个元素。如果selection是一个[enter selection](#selection_enter)，则将元素追加到元素末尾，作为选择集中元素的下一个兄弟节点。enter操作可以将数据与DOM元素的顺序对应，当然也可以使用效率更慢一点的[*selection*.order](#selection_order)操作进行手动排序。

此外，*type*还可以是一个方法，则会传递*d*,*i*,*nodes*为参数，并在函数内部返回一个元素。这个元素类型可以根据实际需要选择。换句话说，就是如果*type*是一个方法的话，添加的元素就不一定是同一种类型。比如为每个p元素中添加一个div元素:

```js
d3.selectAll("p").append("div");
```

等价于:

```js
d3.selectAll("p").append(function() {
  return document.createElement("div");
});
```

等价于:

```js
d3.selectAll("p").select(function() {
  return this.appendChild(document.createElement("div"));
});
```

在上述例子中，都返回了一个包含添加元素的新的选择集。新的元素继承了当前元素的数据。

有些元素需要命名空间前缀，比如`svg:text`表示SVG命名空间中的`text`。关于命名空间更多信息参考 [namespaces](#namespaces). 如果没有指定命名空间，那元素将会继承父元素的命名空间。

<a name="selection_insert" href="#selection_insert">#</a> <i>selection</i>.<b>insert</b>(<i>type</i>, <i>before</i>) [<>](https://github.com/d3/d3-selection/blob/master/src/selection/insert.js "Source")

如果*type*是一个字符串，则在指定的元素前插入一个新元素。如果*type*为一个函数，则会传递*d*,*i*,*nodes*为参数，并将返回的元素插入到选择集中。*type*和*before*都可以使用函数代替。比如在每个p元素中插入div元素:

```js
d3.selectAll("p").insert("div");
```

等价于:

```js
d3.selectAll("p").insert(function() {
  return document.createElement("div");
});
```

等价于:

```js
d3.selectAll("p").select(function() {
  return this.insertBefore(document.createElement("div"), null);
});
```

<a name="selection_remove" href="#selection_remove">#</a> <i>selection</i>.<b>remove</b>() [<>](https://github.com/d3/d3-selection/blob/master/src/selection/remove.js "Source")

从文档中将选择集移除，并返回移除的选择集。

<a name="selection_sort" href="#selection_sort">#</a> <i>selection</i>.<b>sort</b>(<i>compare</i>) [<>](https://github.com/d3/d3-selection/blob/master/src/selection/sort.js "Source")

返回一个新的经过排序的选择集。参数为一个比较方法。

比较方法默认是[ascending](https://github.com/d3/d3-array#ascending)，传递两个元素的数据*a*和*b*.

<a name="selection_order" href="#selection_order">#</a> <i>selection</i>.<b>order</b>() [<>](https://github.com/d3/d3-selection/blob/master/src/selection/order.js "Source")

重新插入元素到文档中，以使每个组的文档顺序与选择顺序匹配。如果数据顺序已经排好等价于调用[*selection*.sort](#selection_sort)但是更快.

<a name="selection_raise" href="#selection_raise">#</a> <i>selection</i>.<b>raise</b>() [<>](https://github.com/d3/d3-selection/blob/master/src/selection/raise.js "Source")

重新将元素插入到对应父元素,作为父元素的最后一个子元素。相等于:

```js
selection.each(function() {
  this.parentNode.appendChild(this);
});
```

<a name="selection_lower" href="#selection_lower">#</a> <i>selection</i>.<b>lower</b>() [<>](https://github.com/d3/d3-selection/blob/master/src/selection/lower.js "Source")

重新将元素插入到对应父元素,作为父元素的第一个子元素，相当于:

```js
selection.each(function() {
  this.parentNode.insertBefore(this, this.parentNode.firstChild);
});
```

<a name="creator" href="#creator">#</a> d3.<b>creator</b>(<i>name</i>) [<>](https://github.com/d3/d3-selection/blob/master/src/creator.js "Source")

根据指定的元素名，返回一个可以创建对应子元素的方法。比如:

```js
selection.append("div");
```

等价于:

```js
selection.append(d3.creator("div"));
```

参考 [namespace](#namespace)获取更多关于命名空间的信息，比如SVG元素.

### Joining Data

关于D3数据绑定的介绍，参考[Thinking With Joins](http://bost.ocks.org/mike/join/)以及 [General Update Pattern](http://bl.ocks.org/mbostock/3808218)上的实例.

<a name="selection_data" href="#selection_data">#</a> <i>selection</i>.<b>data</b>([<i>data</i>[, <i>key</i>]]) [<>](https://github.com/d3/d3-selection/blob/master/src/selection/data.js "Source")

将数组类型的*data*与选择集中的元素绑定，返回一个update集:数据与元素绑定。因为数据个数未必与元素个数一致，所以又有[enter](#selection_enter) 和 [exit](#selection_exit)操作。*data*元素可以是任意类型，比如数值类型或对象类型。也可以是一个返回一个数组的函数. 元素会以`__data__`这个属性存储绑定的数据。这样就可以使数据作为元素的一个属性存在有利用根据数据反复对元素操作而不需要每次操作都绑定一次.

数据绑定过程中，有个重要的问题就是分组问题。比如一个选择集有多个分组，每个分组又包含多个元素，此时数据应该如何绑定到元素上？

*data*是绑定到每个分组上的。如果选择集有多个分组(比如通过[*selection*.selectAll](#selection_selectAll)选择的就可能有多个分组)，则*data*应该使用函数来使得数据正确的与分组对应。比如使用矩阵创建一个HTML表格:

```js
var matrix = [
  [11975,  5871, 8916, 2868],
  [ 1951, 10048, 2060, 6171],
  [ 8010, 16145, 8090, 8045],
  [ 1013,   990,  940, 6907]
];

var tr = d3.select("body")
  .append("table")
  .selectAll("tr")
  .data(matrix)   //将矩阵中的每个元素(数组)绑定到tr元素
  .enter().append("tr");

var td = tr.selectAll("td")
  .data(function(d) { return d; })  //将绑定到tr元素的数据(数组)拆开为单个的数值，绑定到td元素
  .enter().append("td")
    .text(function(d) { return d; });
```

如果没有指定*key*方法，则数据数组中的第一个元素与选择集中的第一个元素绑定，第二个与第二个，以此类推。

*key*方法可以控制哪个数据元素对应哪个DOM元素，打破依次对应的规律。

*key*方法首先对选择集中的每个元素进行评估，然后对每个数据元素进行评估。也就是说*key*方法会被调用两次，每次的参数也不一样。根据键值将数据与DOM元素对应。如果多个元素有同样的键值，则将重复的元素放到exit集中，如果多个数据有同样的键值，则将多余的数据放到enter集中以备添加元素。

比如对于下面的DOM文档:

```html
<div id="Ford"></div>
<div id="Jarrah"></div>
<div id="Kwon"></div>
<div id="Locke"></div>
<div id="Reyes"></div>
<div id="Shephard"></div>
```

You could join data by key as follows:
使用如下方法绑定数据:


```js
var data = [
  {name: "Locke", number: 4},
  {name: "Reyes", number: 8},
  {name: "Ford", number: 15},
  {name: "Jarrah", number: 16},
  {name: "Shephard", number: 31},
  {name: "Kwon", number: 34}
];

d3.selectAll("div")
  .data(data, function(d) { return d ? d.name : this.id; })
    .text(function(d) { return d.number; });
```

这个*key*方法优先读取元素绑定的数据*d*，如果*d*不存在则读取元素的*id*.因为这些元素之前没有绑定数据，因此*d*为null，之后绑定新的数据时*d*就不是null了。


This example key function uses the datum *d* if present, and otherwise falls back to the element’s id property. Since these elements were not previously bound to data, the datum *d* is null when the key function is evaluated on selected elements, and non-null when the key function is evaluated on the new data.

*update*集和*enter*集根据数据的顺序被返回，*exit*集则保持了元素的顺序。如果使用了*key*方法，那么返回的选择集中元素的顺序可能与其在DOM文档中的顺序不一致。如果需要可以使用 [*selection*.order](#order) 或 [*selection*.sort](#sort) 来进行排序. 

想了解更多关于*key*方法的具体信息可以参考[A Bar Chart, Part 2](http://bost.ocks.org/mike/bar/2/) 和 [Object Constancy](http://bost.ocks.org/mike/constancy/).

数据绑定操作可以方便的根据具体数据操作DOM元素。在数据绑定操作之后会产生三种选择集:update集,enter集以及exit集。之后可以对这三种集合进行相应的操作，一般数据绑定的模式[General Update Pattern](http://bl.ocks.org/mbostock/3808218)如下:

```js
var circle = svg.selectAll("circle") // 1
  .data(data) // 2
    .style("fill", "blue"); // 3

circle.exit().remove(); // 4

circle.enter().append("circle") // 5
    .style("fill", "green") // 6
  .merge(circle) // 7
    .style("stroke", "black"); // 8
```

将这个过程分解成一下步骤:

1. 当前存在的circles被选中.
2. 将新的[数据绑定](#selection_data)到这些圆上, 返回update集.
3. 将update集中的圆颜色设置为blue.
4. 没有数据对应的圆，也就是多余的圆被删除.
5. 新的圆被 [appended](#selection_append)，也就是圆不够了，会添加新的圆进来.
6. 新加入的圆颜色设置为green.
7. 将新添加的圆和已存在的圆[union(合并)](#selection_merge)为一个新的选择集，包括了当前所有的存在的圆.
8. 将当前所有的圆的边线设置为black.


如果没有指定*data*则返回当前选择集中的元素绑定的数据，以数组的形式返回。

这个方法不能用来清除绑定的数据，要使用[*selection*.datum](#selection_datum) 来清除。

<a name="selection_enter" href="#selection_enter">#</a> <i>selection</i>.<b>enter</b>() [<>](https://github.com/d3/d3-selection/blob/master/src/selection/enter.js "Source")

返回一个enter集，准确来说是一个DOM元素占位符，此时没有任何元素，需要使用*append*方法添加元素。

enter集通常用来创建缺失的元素，比如根据数组创建DIV元素:

```js
var div = d3.select("body")
  .selectAll("div")
  .data([4, 8, 15, 16, 23, 42])
  .enter().append("div")
    .text(function(d) { return d; });
```

如果初始状态下body为空则会创建6个DIV元素并将其添加到body中:

```html
<div>4</div>
<div>8</div>
<div>15</div>
<div>16</div>
<div>23</div>
<div>42</div>
```

<a name="selection_exit" href="#selection_exit">#</a> <i>selection</i>.<b>exit</b>() [<>](https://github.com/d3/d3-selection/blob/master/src/selection/exit.js "Source")

返回exit集:现有的元素没有被数据绑定时将没有数据的这些元素返回。

比如对div重新绑定数据:

```js
div = div.data([1, 2, 4, 8, 16, 32], function(d) { return d; });
```

使用看key方法，会将div中与新的数据中的交集留下，而没有对应到新数据的元素被放到exit集中. 交集为[4,8,16],这部分元素作为update集。而之前的元素中不存在[1,2,32]，则作为enter集。:

```js
div.enter().append("div").text(function(d) { return d; });
```

而之前的[15,23,42]没有在新的数据中出现，因此作为exit集:

```js
div.exit().remove();
```

此时的DOM如下:

```html
<div>1</div>
<div>2</div>
<div>4</div>
<div>8</div>
<div>16</div>
<div>32</div>
```

DOM元素的顺序与数据元素的顺序一致。

<a name="selection_datum" href="#selection_datum">#</a> <i>selection</i>.<b>datum</b>([<i>value</i>]) [<>](https://github.com/d3/d3-selection/blob/master/src/selection/datum.js "Source")

获取选中的元素的数据或者为选中的元素绑定数据。与[*selection*.data](#selection_data)不同, 这个方法不去计算数据元素和DOM元素的结合，也就是不影响索引或enter集和exit集。

如果指定了*value*,则设置选中的所有元素绑定的数据为*value*。如果*value*为变量，则将选中的元素绑定的数据统一设置为value。如果*value*是一个方法，则会对每个元素调用这个方法，并传递*d*,*i*,*nodes*,this指向当前的DOM元素。如果返回null则表示删除当前元素所绑定的数据。

如果*value*没有指定，则返回当前选择集中第一个非null元素绑定的数据，这个方法在访问HTML5 的 [custom data attributes](http://www.w3.org/TR/html5/dom.html#custom-data-attribute)时是有用的. 比如有如下元素:

```html
<ul id="list">
  <li data-username="shawnbot">Shawn Allen</li>
  <li data-username="mbostock">Mike Bostock</li>
</ul>
```

可以使用[dataset](http://www.w3.org/TR/html5/dom.html#dom-dataset)属性将这些数据属性导出:

```js
selection.datum(function() { return this.dataset; })
```


### Handling Events

selections允许监听和分发事件以支持交互。


<a name="selection_on" href="#selection_on">#</a> <i>selection</i>.<b>on</b>(<i>typenames</i>[, <i>listener</i>[, <i>capture</i>]]) [<>](https://github.com/d3/d3-selection/blob/master/src/selection/on.js "Source")

添加或移除选择集中的每个元素上事件类型为*typenames*的事件。*typenames*是一个表示事件类型的字符串，比如`click`, `mouseover`, 或 `submit`; 任何浏览器支持的[DOM event type](https://developer.mozilla.org/en-US/docs/Web/Events#Standard_events) 都可以使用. type和name之间可以使用(`.`)隔开，以为同一种事件类型添加不同的事件监听器;比如`click.foo` 和 `click.bar`. 同时指定多个typenames时可以使用空格隔开，比如 `input change` 或 `click.foo click.bar`.

当一个指定的事件被分发到一个被选中的元素节点上时，对应的*listener*将会被调用并传递绑定的数据(*d*),索引(*i*), 当前的分组(*nodes*), 回调中的*this*指向的是当前的DOM元素. 通过 [d3.event](#event)访问当前的事件对象.

如果之前已经为*typenames*注册了事件监听器，则会覆盖。如果*listener*为null则会移除*typenames*对应的事件监听器。此时要注意事件类型的匹配，比如向`.foo`传递null则所有name为`foo`的事件监听器都被移除，类似于CSS类的选择模式。

可选的*capture*标识相当于W3C 的 [useCapture flag](http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-registration):当启用事件捕获后，指定类型的事件将被,默认为false。

如果没有指定*listener*，则返回*typenames*对应的事件监听器，如果指定了多个*typenames*则只返回第一个。

<a name="selection_dispatch" href="#selection_dispatch">#</a> <i>selection</i>.<b>dispatch</b>(<i>type</i>[, <i>parameters</i>]) [<>](https://github.com/d3/d3-selection/blob/master/src/selection/dispatch.js "Source")

为选择集中的每个元素分发一个类型为*type*的[custom event](http://www.w3.org/TR/dom/#interface-customevent)，也就是等于在选择集上触发了*type*事件, *parameters*对象可以指定事件的一些属性:

* [`bubbles`](https://www.w3.org/TR/dom/#dom-event-bubbles) - 如果为true则这个事件可以冒泡.
* [`cancelable`](https://www.w3.org/TR/dom/#dom-event-cancelable) - 如果为true则等于调用了*event*.preventDefault.
* [`detail`](https://www.w3.org/TR/dom/#dom-customevent-detail) - 可自定义一些数据传给回调.

如果*parameters*是一个方法，则会对选中的每个元素调用。并传递当前元素的的(*d*),(*i*)和(*nodes*), *this*指向DOM元素. 这个方法必须返回对象类型.

<a name="event" href="#event">#</a> d3.<b>event</b>

当前的[event](https://developer.mozilla.org/en-US/docs/DOM/event), 如果有的话. 这个属性再事件发生时被设置, 并在事件回调结束后被重置. 可以使用这个来访问标准的事件对象属性，比如[*event*.timeStamp](https://www.w3.org/TR/dom/#dom-event-timestamp) 以及方法比如 [*event*.preventDefault](https://www.w3.org/TR/dom/#dom-event-preventdefault). 也可以使用 [*event*.pageX](https://developer.mozilla.org/en/DOM/event.pageX) 和 [*event*.pageY](https://developer.mozilla.org/en/DOM/event.pageY), 这个是很方便的因为不需要使用[d3.mouse](#mouse), [d3.touch](#touch) 或 [d3.touches](#touches)对原生事件对象进行坐标转换 .

如果你使用了Babel, Webpack, 或其他的 ES6-to-ES5 打包工具, 要注意d3.event值的变化。d3.event很重要的一点就是一定是 [live binding(活绑定)](http://www.2ality.com/2015/07/es6-module-exports.html), 所以要使用D3’s ES6 模块配置打包工具而不是使用UMD打包; 并不是所有得打包工具都遵循[jsnext:main](https://github.com/rollup/rollup/wiki/jsnext:main). 也要小心与[*window*.event](https://developer.mozilla.org/en-US/docs/Web/API/Window/event) 冲突.

<a name="customEvent" href="#customEvent">#</a> d3.<b>customEvent</b>(<i>event</i>, <i>listener</i>[, <i>that</i>[, <i>arguments</i>]]) [<>](https://github.com/d3/d3-selection/blob/master/src/selection/on.js#L98 "Source")

调用指定的*listener*，使用指定的*that* `this`上下文并传递指定的参数*arguments*. 在调用期间[d3.event](#event)会被设置为指定的*event*对象; 在调用结束后d3.event被重新设置为之前的值.

<a name="mouse" href="#mouse">#</a> d3.<b>mouse</b>(<i>container</i>) [<>](https://github.com/d3/d3-selection/blob/master/src/mouse.js "Source")

返回当前[current event](#event)相对于*container*的*x*和*y*坐标。container可以为HTML,SVG元素，比如[G element](http://www.w3.org/TR/SVG/struct.html#Groups) 或[SVG element](http://www.w3.org/TR/SVG/struct.html#SVGElement). 返回值是一个包含两个元素的数组[*x*, *y*].

参数是一个node对象，而不是selection.

<a name="touch" href="#touch">#</a> d3.<b>touch</b>(<i>container</i>[, <i>touches</i>], <i>identifier</i>) [<>](https://github.com/d3/d3-selection/blob/master/src/touch.js "Source")

返回当前标志符为*identifier*的[current event](#event)相对于*container*的*x*和*y*坐标。container可以为HTML,SVG元素，比如[G element](http://www.w3.org/TR/SVG/struct.html#Groups) 或[SVG element](http://www.w3.org/TR/SVG/struct.html#SVGElement). 返回值是一个包含两个元素的数组[*x*, *y*].

如果当前指定的*identifier*没有触摸事件，则返回null。使用标示符可以忽略触摸拖动事件。如果没有指定*touches*则默认为当前事件的[changedTouches](http://developer.apple.com/library/safari/documentation/UserExperience/Reference/TouchEventClassReference/TouchEvent/TouchEvent.html#//apple_ref/javascript/instp/TouchEvent/changedTouches) 属性.

<a name="touches" href="#touches">#</a> d3.<b>touches</b>(<i>container</i>[, <i>touches</i>]) [<>](https://github.com/d3/d3-selection/blob/master/src/touches.js "Source")

返回当前触摸[current event](#event)相对于*container*的*x*和*y*坐标。container可以为HTML,SVG元素，比如[G element](http://www.w3.org/TR/SVG/struct.html#Groups) 或[SVG element](http://www.w3.org/TR/SVG/struct.html#SVGElement)。由于可能存在多个触摸点，因此这个方法返回一个二维数组表示所有的触摸点，返回的形式为 \[\[*x1*, *y1*], [*x2*, *y2*], …\]. 如果没有指定 *touches* 则默认为当前事件的[touches](http://developer.apple.com/library/safari/documentation/UserExperience/Reference/TouchEventClassReference/TouchEvent/TouchEvent.html#//apple_ref/javascript/instp/TouchEvent/touches) 属性.

### Control Flow

selection提供了一些控制方法

<a name="selection_each" href="#selection_each">#</a> <i>selection</i>.<b>each</b>(<i>function</i>) [<>](https://github.com/d3/d3-selection/blob/master/src/selection/each.js "Source")

为选择集中的每个元素调用*function*方法，并传递当前元素绑定的数据*d*,索引*i*,当前分组*nodes*。*this*指向当前的DOM元素。这个方法可以为元素调用任意代码，比如:

```js
parent.each(function(p, j) {
  d3.select(this)
    .selectAll(".child")
      .text(function(d, i) { return "child " + d.name + " of " + p.name; });
});
```

参考 [Sized Donut Multiples](http://bl.ocks.org/mbostock/4c5fad723c87d2fd8273) 例子.

<a name="selection_call" href="#selection_call">#</a> <i>selection</i>.<b>call</b>(<i>function</i>[, <i>arguments…</i>]) [<>](https://github.com/d3/d3-selection/blob/master/src/selection/call.js "Source")

为选择集调用一次*function*，使用可选的*arguments*传递参数，并返回选择集以支持链式语法。比如在可以重复使用的函数内部设置选择集的属性:

```js
function name(selection, first, last) {
  selection
      .attr("first-name", first)
      .attr("last-name", last);
}
```

可以使用:

```js
d3.selectAll("div").call(name, "John", "Snow");
```

等价于:

```js
name(d3.selectAll("div"), "John", "Snow");
```

不同的是*selection*.call总是返回*selection*。

<a name="selection_empty" href="#selection_empty">#</a> <i>selection</i>.<b>empty</b>() [<>](https://github.com/d3/d3-selection/blob/master/src/selection/empty.js "Source")

当且仅当选择集中没有任何非null元素时返回true

<a name="selection_nodes" href="#selection_nodes">#</a> <i>selection</i>.<b>nodes</b>() [<>](https://github.com/d3/d3-selection/blob/master/src/selection/nodes.js "Source")

将选择集中的非null元素以数组的形式返回。

<a name="selection_node" href="#selection_node">#</a> <i>selection</i>.<b>node</b>() [<>](https://github.com/d3/d3-selection/blob/master/src/selection/node.js "Source")

将选择集中的第一个非null元素返回。


<a name="selection_size" href="#selection_size">#</a> <i>selection</i>.<b>size</b>() [<>](https://github.com/d3/d3-selection/blob/master/src/selection/size.js "Source")

返回选择集中的元素个数。

### Local Variables

D3本地化允许定义独立于数据的本地状态. 例如，当渲染[small multiples](http://bl.ocks.org/mbostock/e1192fe405703d8321a5187350910e08)的时间序列时，你可能要对所有的图表使用同样的x-scale而y-scales则独立。D3本地变量由DOM元素限定:设置时值被存储在给定的DOM元素中，获取时值从给定的元素或者最接近的祖先元素获取。

<a name="local" href="#local">#</a> d3.<b>local</b>() [<>](https://github.com/d3/d3-selection/blob/master/src/local.js "Source")

声明一个本地变量：

```js
var foo = d3.local();
```

与*var*类似，本地变量由一个变量引用。与*var*不同的是每个本地变量的值由DOM限定。

<a name="local_set" href="#local_set">#</a> <i>local</i>.<b>set</b>(<i>node</i>, <i>value</i>) [<>](https://github.com/d3/d3-selection/blob/master/src/local.js#L18 "Source")

设置本地变量的值，设置指定*node*的值为*value*，并返回*value*。通常使用[*selection*.each](#selection_each)来实现:

```js
selection.each(function(d) { foo.set(this, d.value); });
```

如果仅仅需要设置一个单一的值，考虑使用[*selection*.property](#selection_property):

```js
selection.property(foo, function(d) { return d.value; });
```

<a name="local_get" href="#local_get">#</a> <i>local</i>.<b>get</b>(<i>node</i>) [<>](https://github.com/d3/d3-selection/blob/master/src/local.js#L13 "Source")

返回指定*node*的本地变量值。如果*node*没有定义在local中则返回定义的最接近的祖先元素的值。否则返回undefined。

<a name="local_remove" href="#local_remove">#</a> <i>local</i>.<b>remove</b>(<i>node</i>) [<>](https://github.com/d3/d3-selection/blob/master/src/local.js#L21 "Source")

移除*node*中定义的本地变量并返回其值。

<a name="local_toString" href="#local_toString">#</a> <i>local</i>.<b>toString</b>() [<>](https://github.com/d3/d3-selection/blob/master/src/local.js#L24 "Source")

返回自动生成的本地变量标示符。这个标示符以属性的形式存储在DOM元素中，可以使用*element*[*local*] 或[*selection*.property](#selection_property)来进行设置或读取.

### Namespaces

XML的命名空间在大多数时候都容易被忽略，然而它是很重要的。

<a name="namespace" href="#namespace">#</a> d3.<b>namespace</b>(<i>name</i>) [<>](https://github.com/d3/d3-selection/blob/master/src/namespace.js "Source")

限定指定的命名，可能不包含命名空间前缀。如果name包含了冒号(`:`)，则冒号之前的子串被作为命名空间前缀注册到[d3.namespaces](#namespaces).返回一个包含`space` 和 `local` 属性的对象用以描述完整的命名空间URL和本地名称，例如:

```js
d3.namespace("svg:text"); // {space: "http://www.w3.org/2000/svg", local: "text"}
```

如果*name*不包含冒号则这个方法值返回输入的*name*。

<a name="namespaces" href="#namespaces">#</a> d3.<b>namespaces</b> [<>](https://github.com/d3/d3-selection/blob/master/src/namespaces.js "Source")


返回注册的命名空间前缀，初始值为:

```js
{
  svg: "http://www.w3.org/2000/svg",
  xhtml: "http://www.w3.org/1999/xhtml",
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
}
```

这些前缀在创建元素或设置属性时可以派的上用场。

