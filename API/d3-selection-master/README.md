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

After selecting elements, use the selection’s transformation methods to affect document content. For example, to set the name attribute and color style of an anchor element:

```js
d3.select("a")
    .attr("name", "fred")
    .style("color", "red");
```

To experiment with selections, visit [d3js.org](https://d3js.org) and open your browser’s developer console! (In Chrome, open the console with ⌥⌘J.) Select elements and then inspect the returned selection to see which elements are selected and how they are grouped. Call selection methods and see how the page content changes.

<a name="selection_attr" href="#selection_attr">#</a> <i>selection</i>.<b>attr</b>(<i>name</i>[, <i>value</i>]) [<>](https://github.com/d3/d3-selection/blob/master/src/selection/attr.js "Source")

If a *value* is specified, sets the attribute with the specified *name* to the specified value on the selected elements and returns this selection. If the *value* is a constant, all elements are given the same attribute value; otherwise, if the *value* is a function, the function is evaluated for each selected element, in order, being passed the current datum (*d*), the current index (*i*), and the current group (*nodes*), with *this* as the current DOM element. The function’s return value is then used to set each element’s attribute. A null value will remove the specified attribute.

If a *value* is not specified, returns the current value of the specified attribute for the first (non-null) element in the selection. This is generally useful only if you know that the selection contains exactly one element.

The specified *name* may have a namespace prefix, such as `xlink:href` to specify the `href` attribute in the XLink namespace. See [namespaces](#namespaces) for the map of supported namespaces; additional namespaces can be registered by adding to the map.

<a name="selection_classed" href="#selection_classed">#</a> <i>selection</i>.<b>classed</b>(<i>names</i>[, <i>value</i>]) [<>](https://github.com/d3/d3-selection/blob/master/src/selection/classed.js "Source")

If a *value* is specified, assigns or unassigns the specified CSS class *names* on the selected elements by setting the `class` attribute or modifying the `classList` property and returns this selection. The specified *names* is a string of space-separated class names. For example, to assign the classes `foo` and `bar` to the selected elements:

```js
selection.classed("foo bar", true);
```

If the *value* is truthy, then all elements are assigned the specified classes; otherwise, the classes are unassigned. If the *value* is a function, then the function is evaluated for each selected element, in order, being passed the current datum (*d*), the current index (*i*), and the current group (*nodes*), with *this* as the current DOM element. The function’s return value is then used to assign or unassign classes on each element. For example, to randomly associate the class *foo* with on average half the selected elements:

```js
selection.classed("foo", function() { return Math.random() > 0.5; });
```

If a *value* is not specified, returns true if and only if the first (non-null) selected element has the specified *classes*. This is generally useful only if you know the selection contains exactly one element.

<a name="selection_style" href="#selection_style">#</a> <i>selection</i>.<b>style</b>(<i>name</i>[, <i>value</i>[, <i>priority</i>]]) [<>](https://github.com/d3/d3-selection/blob/master/src/selection/style.js "Source")

If a *value* is specified, sets the style property with the specified *name* to the specified value on the selected elements and returns this selection. If the *value* is a constant, then all elements are given the same style property value; otherwise, if the *value* is a function, then the function is evaluated for each selected element, in order, being passed the current datum (*d*), the current index (*i*), and the current group (*nodes*), with *this* as the current DOM element. The function’s return value is then used to set each element’s style property. A null value will remove the style property. An optional *priority* may also be specified, either as null or the string `important` (without the exclamation point).

If a *value* is not specified, returns the current computed value of the specified style property for the first (non-null) element in the selection. This is generally useful only if you know the selection contains exactly one element. The computed value **may be different than the previously-set value**, particularly if it was set using a shorthand property (such as the `font` style, which is shorthand for `font-size`, `font-face`, etc.).

Caution: unlike many SVG attributes, CSS styles typically have associated units. For example, `3px` is a valid stroke-width property value, while `3` is not. Some browsers implicitly assign the `px` (pixel) unit to numeric values, but not all browsers do: IE, for example, throws an “invalid arguments” error!

<a name="selection_property" href="#selection_property">#</a> <i>selection</i>.<b>property</b>(<i>name</i>[, <i>value</i>]) [<>](https://github.com/d3/d3-selection/blob/master/src/selection/property.js "Source")

Some HTML elements have special properties that are not addressable using attributes or styles, such as a form field’s text `value` and a checkbox’s `checked` boolean. Use this method to get or set these properties.

If a *value* is specified, sets the property with the specified *name* to the specified value on selected elements. If the *value* is a constant, then all elements are given the same property value; otherwise, if the *value* is a function, then the function is evaluated for each selected element, in order, being passed the current datum (*d*), the current index (*i*), and the current group (*nodes*), with *this* as the current DOM element. The function’s return value is then used to set each element’s property. A null value will delete the specified property.

If a *value* is not specified, returns the value of the specified property for the first (non-null) element in the selection. This is generally useful only if you know the selection contains exactly one element.

<a name="selection_text" href="#selection_text">#</a> <i>selection</i>.<b>text</b>([<i>value</i>]) [<>](https://github.com/d3/d3-selection/blob/master/src/selection/text.js "Source")

If a *value* is specified, sets the [text content](http://www.w3.org/TR/DOM-Level-3-Core/core.html#Node3-textContent) to the specified value on all selected elements, replacing any existing child elements. If the *value* is a constant, then all elements are given the same text content; otherwise, if the *value* is a function, then the function is evaluated for each selected element, in order, being passed the current datum (*d*), the current index (*i*), and the current group (*nodes*), with *this* as the current DOM element. The function’s return value is then used to set each element’s text content. A null value will clear the content.

If a *value* is not specified, returns the text content for the first (non-null) element in the selection. This is generally useful only if you know the selection contains exactly one element.

<a name="selection_html" href="#selection_html">#</a> <i>selection</i>.<b>html</b>([<i>value</i>]) [<>](https://github.com/d3/d3-selection/blob/master/src/selection/html.js "Source")

If a *value* is specified, sets the [inner HTML](http://dev.w3.org/html5/spec-LC/apis-in-html-documents.html#innerhtml) to the specified value on all selected elements, replacing any existing child elements. If the *value* is a constant, then all elements are given the same inner HTML; otherwise, if the *value* is a function, then the function is evaluated for each selected element, in order, being passed the current datum (*d*), the current index (*i*), and the current group (*nodes*), with *this* as the current DOM element. The function’s return value is then used to set each element’s inner HTML. A null value will clear the content.

If a *value* is not specified, returns the inner HTML for the first (non-null) element in the selection. This is generally useful only if you know the selection contains exactly one element.

Use [*selection*.append](#selection_append) or [*selection*.insert](#selection_insert) instead to create data-driven content; this method is intended for when you want a little bit of HTML, say for rich formatting. Also, *selection*.html is only supported on HTML elements. SVG elements and other non-HTML elements do not support the innerHTML property, and thus are incompatible with *selection*.html. Consider using [XMLSerializer](https://developer.mozilla.org/en-US/docs/XMLSerializer) to convert a DOM subtree to text. See also the [innersvg polyfill](https://code.google.com/p/innersvg/), which provides a shim to support the innerHTML property on SVG elements.

<a name="selection_append" href="#selection_append">#</a> <i>selection</i>.<b>append</b>(<i>type</i>) [<>](https://github.com/d3/d3-selection/blob/master/src/selection/append.js "Source")

If the specified *type* is a string, appends a new element of this type (tag name) as the last child of each selected element, or the next following sibling in the update selection if this is an [enter selection](#selection_enter). (The enter behavior allows you to insert elements into the DOM in an order consistent with bound data; however, the slower [*selection*.order](#selection_order) may still be required if updating elements change order.) Otherwise, the *type* may be a function which is evaluated for each selected element, in order, being passed the current datum (*d*), the current index (*i*), and the current group (*nodes*), with *this* as the current DOM element. This function should return an element to be appended. (The function typically creates a new element, but it may instead return an existing element.) For example, to append a DIV element to each paragraph:

```js
d3.selectAll("p").append("div");
```

This is equivalent to:

```js
d3.selectAll("p").append(function() {
  return document.createElement("div");
});
```

Which is equivalent to:

```js
d3.selectAll("p").select(function() {
  return this.appendChild(document.createElement("div"));
});
```

In both cases, this method returns a new selection containing the appended elements. Each new element inherits the data of the current elements, if any, in the same manner as [*selection*.select](#selection_select).

The specified *name* may have a namespace prefix, such as `svg:text` to specify a `text` attribute in the SVG namespace. See [namespaces](#namespaces) for the map of supported namespaces; additional namespaces can be registered by adding to the map. If no namespace is specified, the namespace will be inherited from the parent element; or, if the name is one of the known prefixes, the corresponding namespace will be used (for example, `svg` implies `svg:svg`).

<a name="selection_insert" href="#selection_insert">#</a> <i>selection</i>.<b>insert</b>(<i>type</i>, <i>before</i>) [<>](https://github.com/d3/d3-selection/blob/master/src/selection/insert.js "Source")

If the specified *type* is a string, inserts a new element of this type (tag name) before the element matching the specified *before* selector for each selected element. For example, a *before* selector `:first-child` will prepend nodes before the first child. Both *type* and *before* may instead be specified as functions which are evaluated for each selected element, in order, being passed the current datum (*d*), the current index (*i*), and the current group (*nodes*), with *this* as the current DOM element. The *type* function should return an element to be inserted; the *before* function should return the child element before which the element should be inserted. For example, to insert a DIV element to each paragraph:

```js
d3.selectAll("p").insert("div");
```

This is equivalent to:

```js
d3.selectAll("p").insert(function() {
  return document.createElement("div");
});
```

Which is equivalent to:

```js
d3.selectAll("p").select(function() {
  return this.insertBefore(document.createElement("div"), null);
});
```

In both cases, this method returns a new selection containing the appended elements. Each new element inherits the data of the current elements, if any, in the same manner as [*selection*.select](#selection_select).

The specified *name* may have a namespace prefix, such as `svg:text` to specify a `text` attribute in the SVG namespace. See [namespaces](#namespaces) for the map of supported namespaces; additional namespaces can be registered by adding to the map. If no namespace is specified, the namespace will be inherited from the parent element; or, if the name is one of the known prefixes, the corresponding namespace will be used (for example, `svg` implies `svg:svg`).

<a name="selection_remove" href="#selection_remove">#</a> <i>selection</i>.<b>remove</b>() [<>](https://github.com/d3/d3-selection/blob/master/src/selection/remove.js "Source")

Removes the selected elements from the document. Returns this selection (the removed elements) which are now detached from the DOM. There is not currently a dedicated API to add removed elements back to the document; however, you can pass a function to [*selection*.append](#selection_append) or [*selection*.insert](#selection_insert) to re-add elements.

<a name="selection_sort" href="#selection_sort">#</a> <i>selection</i>.<b>sort</b>(<i>compare</i>) [<>](https://github.com/d3/d3-selection/blob/master/src/selection/sort.js "Source")

Returns a new selection that contains a copy of each group in this selection sorted according to the *compare* function. After sorting, re-inserts elements to match the resulting order (per [*selection*.order](#selection_order)).

The compare function, which defaults to [ascending](https://github.com/d3/d3-array#ascending), is passed two elements’ data *a* and *b* to compare. It should return either a negative, positive, or zero value. If negative, then *a* should be before *b*; if positive, then *a* should be after *b*; otherwise, *a* and *b* are considered equal and the order is arbitrary.

Note that sorting is not guaranteed to be stable; however, it is guaranteed to have the same behavior as your browser’s built-in [sort](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/sort) method on arrays.

<a name="selection_order" href="#selection_order">#</a> <i>selection</i>.<b>order</b>() [<>](https://github.com/d3/d3-selection/blob/master/src/selection/order.js "Source")

Re-inserts elements into the document such that the document order of each group matches the selection order. This is equivalent to calling [*selection*.sort](#selection_sort) if the data is already sorted, but much faster.

<a name="selection_raise" href="#selection_raise">#</a> <i>selection</i>.<b>raise</b>() [<>](https://github.com/d3/d3-selection/blob/master/src/selection/raise.js "Source")

Re-inserts each selected element, in order, as the last child of its parent. Equivalent to:

```js
selection.each(function() {
  this.parentNode.appendChild(this);
});
```

<a name="selection_lower" href="#selection_lower">#</a> <i>selection</i>.<b>lower</b>() [<>](https://github.com/d3/d3-selection/blob/master/src/selection/lower.js "Source")

Re-inserts each selected element, in order, as the first child of its parent. Equivalent to:

```js
selection.each(function() {
  this.parentNode.insertBefore(this, this.parentNode.firstChild);
});
```

<a name="creator" href="#creator">#</a> d3.<b>creator</b>(<i>name</i>) [<>](https://github.com/d3/d3-selection/blob/master/src/creator.js "Source")

Given the specified element *name*, returns a function which creates an element of the given name, assuming that `this` is the parent element. This method is used internally by [*selection*.append](#selection_append) and [*selection*.insert](#selection_insert) to create new elements. For example, this:

```js
selection.append("div");
```

Is equivalent to:

```js
selection.append(d3.creator("div"));
```

See [namespace](#namespace) for details on supported namespace prefixes, such as for SVG elements.

### Joining Data

For an introduction to D3’s data joins, see [Thinking With Joins](http://bost.ocks.org/mike/join/). Also see the [General Update Pattern](http://bl.ocks.org/mbostock/3808218) examples.

<a name="selection_data" href="#selection_data">#</a> <i>selection</i>.<b>data</b>([<i>data</i>[, <i>key</i>]]) [<>](https://github.com/d3/d3-selection/blob/master/src/selection/data.js "Source")

Joins the specified array of *data* with the selected elements, returning a new selection that it represents the *update* selection: the elements successfully bound to data. Also defines the [enter](#selection_enter) and [exit](#selection_exit) selections on the returned selection, which can be used to add or remove elements to correspond to the new data. The specified *data* is an array of arbitrary values (*e.g.*, numbers or objects), or a function that returns an array of values for each group. When data is assigned to an element, it is stored in the property `__data__`, thus making the data “sticky” and available on re-selection.

The *data* is specified **for each group** in the selection. If the selection has multiple groups (such as [d3.selectAll](#selectAll) followed by [*selection*.selectAll](#selection_selectAll)), then *data* should typically be specified as a function. This function will be evaluated for each group in order, being passed the group’s parent datum (*d*, which may be undefined), the group index (*i*), and the selection’s parent nodes (*nodes*), with *this* as the group’s parent element. For example, to create an HTML table from a matrix of numbers:

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
  .data(matrix)
  .enter().append("tr");

var td = tr.selectAll("td")
  .data(function(d) { return d; })
  .enter().append("td")
    .text(function(d) { return d; });
```

In this example the *data* function is the identity function: for each table row, it returns the corresponding row from the data matrix.

If a *key* function is not specified, then the first datum in *data* is assigned to the first selected element, the second datum to the second selected element, and so on. A *key* function may be specified to control which datum is assigned to which element, replacing the default join-by-index. This key function is evaluated for each selected element, in order, being passed the current datum (*d*), the current index (*i*), and the current group (*nodes*), with *this* as the current DOM element. The key function is then also evaluated for each new datum in *data*, being passed the current datum (*d*), the current index (*i*), and the group’s new *data*, with *this* as the group’s parent DOM element. The datum for a given key is assigned to the element with the matching key. If multiple elements have the same key, the duplicate elements are put into the exit selection; if multiple data have the same key, the duplicate data are put into the enter selection.

For example, given this document:

```html
<div id="Ford"></div>
<div id="Jarrah"></div>
<div id="Kwon"></div>
<div id="Locke"></div>
<div id="Reyes"></div>
<div id="Shephard"></div>
```

You could join data by key as follows:


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

This example key function uses the datum *d* if present, and otherwise falls back to the element’s id property. Since these elements were not previously bound to data, the datum *d* is null when the key function is evaluated on selected elements, and non-null when the key function is evaluated on the new data.

The *update* and *enter* selections are returned in data order, while the *exit* selection preserves the selection order prior to the join. If a key function is specified, the order of elements in the selection may not match their order in the document; use [*selection*.order](#order) or [*selection*.sort](#sort) as needed. For more on how the key function affects the join, see [A Bar Chart, Part 2](http://bost.ocks.org/mike/bar/2/) and [Object Constancy](http://bost.ocks.org/mike/constancy/).

Although the data-join can be used simply to create (to *enter*) a set of elements corresponding to data, more generally the data-join is designed to let you create, destroy or update elements as needed so that the resulting DOM corresponds to the new data. The data-join lets you do this efficiently by executing only the minimum necessary operations on each state of element (entering, updating, or exiting), and allows you to declare concise animated transitions between states as well. Here is a simple example of the [General Update Pattern](http://bl.ocks.org/mbostock/3808218):

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

Breaking this down into discrete steps:

1. Any existing circles (that are descendants of the `svg` selection) are [selected](#selection_selectAll).
2. These circles are [joined to new `data`](#selection_data), returning the matching circles: the *update* selection.
3. These updating circles are given a blue fill.
4. Any existing circles that do *not* match new data—the *exit* selection—are removed.
5. New circles are [appended](#selection_append) for any new data that do *not* match any existing circle: the *enter* selection.
6. These entering circles are given a green fill.
7. A new selection representing the [union](#selection_merge) of entering and updating circles is created.
8. These entering and updating circles are given a black stroke.

As described in the preceding paragraphs, the “matching” logic is determined by the key function passed to *selection*.data; since no key function is used in the above code sample, the elements and data are joined by index.

If *data* is not specified, this method returns the array of data for the selected elements.

This method cannot be used to clear bound data; use [*selection*.datum](#selection_datum) instead.

<a name="selection_enter" href="#selection_enter">#</a> <i>selection</i>.<b>enter</b>() [<>](https://github.com/d3/d3-selection/blob/master/src/selection/enter.js "Source")

Returns the enter selection: placeholder nodes for each datum that had no corresponding DOM element in the selection. The enter selection is determined by [*selection*.data](#selection_data), and is empty on a selection that is not joined to data.

The enter selection is typically used to create “missing” elements corresponding to new data. For example, to create DIV elements from an array of numbers:

```js
var div = d3.select("body")
  .selectAll("div")
  .data([4, 8, 15, 16, 23, 42])
  .enter().append("div")
    .text(function(d) { return d; });
```

If the body is initially empty, the above code will create six new DIV elements, append them to the body in-order, and assign their text content as the associated (string-coerced) number:

```html
<div>4</div>
<div>8</div>
<div>15</div>
<div>16</div>
<div>23</div>
<div>42</div>
```

Conceptually, the enter selection’s placeholders are pointers to the parent element (in this example, the document body). The enter selection is typically only used transiently to append elements, and is often [merged](#selection_merge) with the update selection after appending, such that modifications can be applied to both entering and updating elements.

<a name="selection_exit" href="#selection_exit">#</a> <i>selection</i>.<b>exit</b>() [<>](https://github.com/d3/d3-selection/blob/master/src/selection/exit.js "Source")

Returns the exit selection: existing DOM elements in the selection for which no new datum was found. The exit selection is determined by the previous [*selection*.data](#selection_data), and is thus empty until the selection is joined to data. If the exit selection is retrieved more than once after a data join, subsequent calls return the empty selection.

The exit selection is typically used to remove “superfluous” elements corresponding to old data. For example, to update the DIV elements created previously with a new array of numbers:

```js
div = div.data([1, 2, 4, 8, 16, 32], function(d) { return d; });
```

Since a key function was specified (as the identity function), and the new data contains the numbers [4, 8, 16] which match existing elements in the document, the update selection contains three DIV elements. Leaving those elements as-is, we can append new elements for [1, 2, 32] using the enter selection:

```js
div.enter().append("div").text(function(d) { return d; });
```

Likewise, to remove the exiting elements [15, 23, 42]:

```js
div.exit().remove();
```

Now the document body looks like this:

```html
<div>1</div>
<div>2</div>
<div>4</div>
<div>8</div>
<div>16</div>
<div>32</div>
```

The order of the DOM elements matches the order of the data because the old data’s order and the new data’s order were consistent. If the new data’s order is different, use [*selection*.order](#selection_order) to reorder the elements in the DOM. See the [General Update Pattern](http://bl.ocks.org/mbostock/3808218) example thread for more on data joins.

<a name="selection_datum" href="#selection_datum">#</a> <i>selection</i>.<b>datum</b>([<i>value</i>]) [<>](https://github.com/d3/d3-selection/blob/master/src/selection/datum.js "Source")

Gets or sets the bound data for each selected element. Unlike [*selection*.data](#selection_data), this method does not compute a join and does not affect indexes or the enter and exit selections.

If a *value* is specified, sets the element’s bound data to the specified value on all selected elements. If the *value* is a constant, all elements are given the same datum; otherwise, if the *value* is a function, then the function is evaluated for each selected element, in order, being passed the current datum (*d*), the current index (*i*), and the current group (*nodes*), with *this* as the current DOM element. The function is then used to set each element’s new data. A null value will delete the bound data.

If a *value* is not specified, returns the bound datum for the first (non-null) element in the selection. This is generally useful only if you know the selection contains exactly one element.

This method is useful for accessing HTML5 [custom data attributes](http://www.w3.org/TR/html5/dom.html#custom-data-attribute). For example, given the following elements:

```html
<ul id="list">
  <li data-username="shawnbot">Shawn Allen</li>
  <li data-username="mbostock">Mike Bostock</li>
</ul>
```

You can expose the custom data attributes by setting each element’s data as the built-in [dataset](http://www.w3.org/TR/html5/dom.html#dom-dataset) property:

```js
selection.datum(function() { return this.dataset; })
```

### Handling Events

For interaction, selections allow listening for and dispatching of events.

<a name="selection_on" href="#selection_on">#</a> <i>selection</i>.<b>on</b>(<i>typenames</i>[, <i>listener</i>[, <i>capture</i>]]) [<>](https://github.com/d3/d3-selection/blob/master/src/selection/on.js "Source")

Adds or removes a *listener* to each selected element for the specified event *typenames*. The *typenames* is a string event type, such as `click`, `mouseover`, or `submit`; any [DOM event type](https://developer.mozilla.org/en-US/docs/Web/Events#Standard_events) supported by your browser may be used. The type may be optionally followed by a period (`.`) and a name; the optional name allows multiple callbacks to be registered to receive events of the same type, such as `click.foo` and `click.bar`. To specify multiple typenames, separate typenames with spaces, such as `input change` or `click.foo click.bar`.

When a specified event is dispatched on a selected node, the specified *listener* will be evaluated for each selected element, being passed the current datum (*d*), the current index (*i*), and the current group (*nodes*), with *this* as the current DOM element. Listeners always see the latest datum for their element, but the index is a property of the selection and is fixed when the listener is assigned; to update the index, re-assign the listener. To access the current event within a listener, use [d3.event](#event).

If an event listener was previously registered for the same *typename* on a selected element, the old listener is removed before the new listener is added. To remove a listener, pass null as the *listener*. To remove all listeners for a given name, pass null as the *listener* and `.foo` as the *typename*, where `foo` is the name; to remove all listeners with no name, specify `.` as the *typename*.

An optional *capture* flag may be specified which corresponds to the W3C [useCapture flag](http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-registration): “After initiating capture, all events of the specified type will be dispatched to the registered EventListener before being dispatched to any EventTargets beneath them in the tree. Events which are bubbling upward through the tree will not trigger an EventListener designated to use capture.”

If a *listener* is not specified, returns the currently-assigned listener for the specified event *typename* on the first (non-null) selected element, if any. If multiple typenames are specified, the first matching listener is returned.

<a name="selection_dispatch" href="#selection_dispatch">#</a> <i>selection</i>.<b>dispatch</b>(<i>type</i>[, <i>parameters</i>]) [<>](https://github.com/d3/d3-selection/blob/master/src/selection/dispatch.js "Source")

Dispatches a [custom event](http://www.w3.org/TR/dom/#interface-customevent) of the specified *type* to each selected element, in order. An optional *parameters* map may be specified to set additional properties of the event. It may contain the following fields:

* [`bubbles`](https://www.w3.org/TR/dom/#dom-event-bubbles) - if true, the event is dispatched to ancestors in reverse tree order.
* [`cancelable`](https://www.w3.org/TR/dom/#dom-event-cancelable) - if true, *event*.preventDefault is allowed.
* [`detail`](https://www.w3.org/TR/dom/#dom-customevent-detail) - any custom data associated with the event.

If *parameters* is a function, it is evaluated for each selected element, in order, being passed the current datum (*d*), the current index (*i*), and the current group (*nodes*), with *this* as the current DOM element. It must return the parameters map for the current element.

<a name="event" href="#event">#</a> d3.<b>event</b>

The current [event](https://developer.mozilla.org/en-US/docs/DOM/event), if any. This is set during the invocation of an event listener, and is reset after the listener terminates. Use this to access standard event fields such as [*event*.timeStamp](https://www.w3.org/TR/dom/#dom-event-timestamp) and methods such as [*event*.preventDefault](https://www.w3.org/TR/dom/#dom-event-preventdefault). While you can use the native [*event*.pageX](https://developer.mozilla.org/en/DOM/event.pageX) and [*event*.pageY](https://developer.mozilla.org/en/DOM/event.pageY), it is often more convenient to transform the event position to the local coordinate system of the container that received the event using [d3.mouse](#mouse), [d3.touch](#touch) or [d3.touches](#touches).

If you use Babel, Webpack, or another ES6-to-ES5 bundler, be aware that the value of d3.event changes during an event! An import of d3.event must be a [live binding](http://www.2ality.com/2015/07/es6-module-exports.html), so you may need to configure the bundler to import from D3’s ES6 modules rather than from the generated UMD bundle; not all bundlers observe [jsnext:main](https://github.com/rollup/rollup/wiki/jsnext:main). Also beware of conflicts with the [*window*.event](https://developer.mozilla.org/en-US/docs/Web/API/Window/event) global.

<a name="customEvent" href="#customEvent">#</a> d3.<b>customEvent</b>(<i>event</i>, <i>listener</i>[, <i>that</i>[, <i>arguments</i>]]) [<>](https://github.com/d3/d3-selection/blob/master/src/selection/on.js#L98 "Source")

Invokes the specified *listener*, using the specified *that* `this` context and passing the specified *arguments*, if any. During the invocation, [d3.event](#event) is set to the specified *event*; after the listener returns (or throws an error), d3.event is restored to its previous value. In addition, sets *event*.sourceEvent to the prior value of d3.event, allowing custom events to retain a reference to the originating native event. Returns the value returned by the *listener*.

<a name="mouse" href="#mouse">#</a> d3.<b>mouse</b>(<i>container</i>) [<>](https://github.com/d3/d3-selection/blob/master/src/mouse.js "Source")

Returns the *x* and *y* coordinates of the [current event](#event) relative to the specified *container*. The container may be an HTML or SVG container element, such as a [G element](http://www.w3.org/TR/SVG/struct.html#Groups) or an [SVG element](http://www.w3.org/TR/SVG/struct.html#SVGElement). The coordinates are returned as a two-element array of numbers [*x*, *y*].

<a name="touch" href="#touch">#</a> d3.<b>touch</b>(<i>container</i>[, <i>touches</i>], <i>identifier</i>) [<>](https://github.com/d3/d3-selection/blob/master/src/touch.js "Source")

Returns the *x* and *y* coordinates of the touch with the specified *identifier* associated with the [current event](#event) relative to the specified *container*. The container may be an HTML or SVG container element, such as a [G element](http://www.w3.org/TR/SVG/struct.html#Groups) or an [SVG element](http://www.w3.org/TR/SVG/struct.html#SVGElement). The coordinates are returned as a two-element array of numbers [*x*, *y*]. If there is no touch with the specified identifier in *touches*, returns null; this can be useful for ignoring touchmove events where the only some touches have moved. If *touches* is not specified, it defaults to the current event’s [changedTouches](http://developer.apple.com/library/safari/documentation/UserExperience/Reference/TouchEventClassReference/TouchEvent/TouchEvent.html#//apple_ref/javascript/instp/TouchEvent/changedTouches) property.

<a name="touches" href="#touches">#</a> d3.<b>touches</b>(<i>container</i>[, <i>touches</i>]) [<>](https://github.com/d3/d3-selection/blob/master/src/touches.js "Source")

Returns the *x* and *y* coordinates of the touches associated with the [current event](#event) relative to the specified *container*. The container may be an HTML or SVG container element, such as a [G element](http://www.w3.org/TR/SVG/struct.html#Groups) or an [SVG element](http://www.w3.org/TR/SVG/struct.html#SVGElement). The coordinates are returned as an array of two-element arrays of numbers \[\[*x1*, *y1*], [*x2*, *y2*], …\]. If *touches* is not specified, it defaults to the current event’s [touches](http://developer.apple.com/library/safari/documentation/UserExperience/Reference/TouchEventClassReference/TouchEvent/TouchEvent.html#//apple_ref/javascript/instp/TouchEvent/touches) property.

### Control Flow

For advanced usage, selections provide methods for custom control flow.

<a name="selection_each" href="#selection_each">#</a> <i>selection</i>.<b>each</b>(<i>function</i>) [<>](https://github.com/d3/d3-selection/blob/master/src/selection/each.js "Source")

Invokes the specified *function* for each selected element, passing in passed the current datum (*d*), the current index (*i*), and the current group (*nodes*), with *this* of the current DOM element. This method can be used to invoke arbitrary code for each selected element, and is useful for creating a context to access parent and child data simultaneously, such as:

```js
parent.each(function(p, j) {
  d3.select(this)
    .selectAll(".child")
      .text(function(d, i) { return "child " + d.name + " of " + p.name; });
});
```

See [Sized Donut Multiples](http://bl.ocks.org/mbostock/4c5fad723c87d2fd8273) for an example.

<a name="selection_call" href="#selection_call">#</a> <i>selection</i>.<b>call</b>(<i>function</i>[, <i>arguments…</i>]) [<>](https://github.com/d3/d3-selection/blob/master/src/selection/call.js "Source")

Invokes the specified *function* exactly once, passing in this selection along with any optional *arguments*. Returns this selection. This is equivalent to invoking the function by hand but facilitates method chaining. For example, to set several styles in a reusable function:

```js
function name(selection, first, last) {
  selection
      .attr("first-name", first)
      .attr("last-name", last);
}
```

Now say:

```js
d3.selectAll("div").call(name, "John", "Snow");
```

This is roughly equivalent to:

```js
name(d3.selectAll("div"), "John", "Snow");
```

The only difference is that *selection*.call always returns the *selection* and not the return value of the called *function*, `name`.

<a name="selection_empty" href="#selection_empty">#</a> <i>selection</i>.<b>empty</b>() [<>](https://github.com/d3/d3-selection/blob/master/src/selection/empty.js "Source")

Returns true if this selection contains no (non-null) elements.

<a name="selection_nodes" href="#selection_nodes">#</a> <i>selection</i>.<b>nodes</b>() [<>](https://github.com/d3/d3-selection/blob/master/src/selection/nodes.js "Source")

Returns an array of all (non-null) elements in this selection.

<a name="selection_node" href="#selection_node">#</a> <i>selection</i>.<b>node</b>() [<>](https://github.com/d3/d3-selection/blob/master/src/selection/node.js "Source")

Returns the first (non-null) element in this selection. If the selection is empty, returns null.

<a name="selection_size" href="#selection_size">#</a> <i>selection</i>.<b>size</b>() [<>](https://github.com/d3/d3-selection/blob/master/src/selection/size.js "Source")

Returns the total number of elements in this selection.

### Local Variables

D3 locals allow you to define local state independent of data. For instance, when rendering [small multiples](http://bl.ocks.org/mbostock/e1192fe405703d8321a5187350910e08) of time-series data, you might want the same *x*-scale for all charts but distinct *y*-scales to compare the relative performance of each metric. D3 locals are scoped by DOM elements: on set, the value is stored on the given element; on get, the value is retrieved from given element or the nearest ancestor that defines it.

<a name="local" href="#local">#</a> d3.<b>local</b>() [<>](https://github.com/d3/d3-selection/blob/master/src/local.js "Source")

Declares a new local variable. For example:

```js
var foo = d3.local();
```

Like `var`, each local is a distinct symbolic reference; unlike `var`, the value of each local is also scoped by the DOM.

<a name="local_set" href="#local_set">#</a> <i>local</i>.<b>set</b>(<i>node</i>, <i>value</i>) [<>](https://github.com/d3/d3-selection/blob/master/src/local.js#L18 "Source")

Sets the value of this local on the specified *node* to the *value*, and returns the specified *value*. This is often performed using [*selection*.each](#selection_each):

```js
selection.each(function(d) { foo.set(this, d.value); });
```

If you are just setting a single variable, consider using [*selection*.property](#selection_property):

```js
selection.property(foo, function(d) { return d.value; });
```

<a name="local_get" href="#local_get">#</a> <i>local</i>.<b>get</b>(<i>node</i>) [<>](https://github.com/d3/d3-selection/blob/master/src/local.js#L13 "Source")

Returns the value of this local on the specified *node*. If the *node* does not define this local, returns the value from the nearest ancestor that defines it. Returns undefined if no ancestor defines this local.

<a name="local_remove" href="#local_remove">#</a> <i>local</i>.<b>remove</b>(<i>node</i>) [<>](https://github.com/d3/d3-selection/blob/master/src/local.js#L21 "Source")

Deletes this local’s value from the specified *node* and returns its previous value. Returns true if the *node* defined this local prior to removal, and false otherwise. If ancestors also define this local, those definitions are unaffected, and thus [*local*.get](#local_get) will still return the inherited value.

<a name="local_toString" href="#local_toString">#</a> <i>local</i>.<b>toString</b>() [<>](https://github.com/d3/d3-selection/blob/master/src/local.js#L24 "Source")

Returns the automatically-generated identifier for this local. This is the name of the property that is used to store the local’s value on elements, and thus you can also set or get the local’s value using *element*[*local*] or by using [*selection*.property](#selection_property).

### Namespaces

XML namespaces are fun! Right? Fortunately you can mostly ignore them.

<a name="namespace" href="#namespace">#</a> d3.<b>namespace</b>(<i>name</i>) [<>](https://github.com/d3/d3-selection/blob/master/src/namespace.js "Source")

Qualifies the specified *name*, which may or may not have a namespace prefix. If the name contains a colon (`:`), the substring before the colon is interpreted as the namespace prefix, which must be registered in [d3.namespaces](#namespaces). Returns an object `space` and `local` attributes describing the full namespace URL and the local name. For example:

```js
d3.namespace("svg:text"); // {space: "http://www.w3.org/2000/svg", local: "text"}
```

If the name does not contain a colon, this function merely returns the input name.

<a name="namespaces" href="#namespaces">#</a> d3.<b>namespaces</b> [<>](https://github.com/d3/d3-selection/blob/master/src/namespaces.js "Source")

The map of registered namespace prefixes. The initial value is:

```js
{
  svg: "http://www.w3.org/2000/svg",
  xhtml: "http://www.w3.org/1999/xhtml",
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
}
```

Additional prefixes may be assigned as needed to create elements or attributes in other namespaces.
