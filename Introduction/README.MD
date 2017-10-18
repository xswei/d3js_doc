#### d3js简介

### d3js是什么

d3js是一个可以基于数据来操作文档的JavaScript库。可以帮助你使用HTML,CSS,SVG以及Canvas来展示数据。D3遵循现有的Web标准，可以不需要其他任何框架独立运行在现代浏览器中，它结合强大的可视化组件来驱动DOM操作。

最新的版本(4.7.3)：

[d3.zip](https://github.com/d3/d3/releases/download/v4.7.3/d3.zip)

或者插入如下代码来在线使用:

```html
<script src="https://d3js.org/d3.v4.min.js"></script>
```

### 介绍

D3可以将数据绑定到DOM上，然后根据数据来计算对应DOM的属性值。例如你可以根据一组数据生成一个表格。或者也可以生成一个可以过渡和交互的SVG图形。

D3不是一个框架，因此也没有操作上的限制。没有框架的限制带来的好处就是你可以完全按照自己的意愿来表达数据，而不是受限于条条框框，非常灵活。D3的运行速度很快，支持大数据集和动态交互以及动画。

[教程](https://github.com/d3/d3/wiki/Tutorials)

### Selections(选择集)

通过原生的[W3C DOM API](http://www.w3.org/DOM/DOMTR)来修改文档是很无聊的：方法名冗余，并且对多个元素进行操作时需要循环操作,例如改变`p`元素的颜色:

```js
var paragraphs = document.getElementsByTagName("p");
for (var i = 0; i < paragraphs.length; i++) {
	var paragraph = paragraphs.item(i);
	paragraph.style.setProperty("color", "white", null);
}

```

D3采用声明式方法，可以对任意节点以及节点集合进行操作，则上述例子可以修改为:

```js

d3.selectAll("p").style("color", "white");

```

同时，可以操作其他节点，而不相互影响:

```js

d3.select("body").style("background-color", "black");
```

选择器是[W3C所定义的选择集](http://www.w3.org/TR/selectors-api/),并且支持现代浏览器。如果浏览器比较老旧，则可以借助[Sizzle](http://sizzlejs.com/)来向后兼容。上述例子中"p"和"body"都是选择器中的一种。也可以使用其他的合法选择器:类选择器、ID选择器属性值选择器等。

关于选择器的更多资料参考[Selection](https://github.com/d3/d3/wiki/Selections)或[选择集](https://github.com/xswei/d3js_doc/tree/master/API/d3-selection-master)

### 动态属性

熟悉[jQuery](http://jquery.com/)或者[Prototype](http://www.prototypejs.org/)的同学可能会立即发现D3与这些框架的相似之处。但是不同的是，样式、属性以及其他属性的值在D3中可以是函数形式，而不仅仅是常量。

这个功能十分强大，它可以支持动态设置属性、样式等值。比如随机的为每个段落设置颜色:

```js
d3.selectAll("p").style("color", function() {
	return "hsl(" + Math.random() * 360 + ",100%,50%)";
});

```

或者为奇偶段落设置不同的颜色:

```js
d3.selectAll("p").style("color", function(d, i) {
	return i % 2 ? "#fff" : "#eee";
});

```

这种通过匿名函数动态设置属性、样式值的方法常用来绑定数据。数据被定义在一个数组中，并且每一个数据值可以作为这个函数的参数，此外还有索引等参数，比如根据数据值设置不同的字体大小:

```js
d3.selectAll("p")
	.data([4, 8, 15, 16, 23, 42])
    .style("font-size", function(d) { return d + "px"; });

```

一旦为元素绑定数据之后，后续如果需要操作就不需要重新绑定,D3会搜索已经绑定的数据。也就是可以一次绑定，多次使用。

### enter和exit操作

数据绑定的时候可能出现DOM元素与数据元素个数不匹配的问题，那么enter和exit就是用来处理这个问题的。enter操作用来添加新的DOM元素，exit操作用来移除多余的DOM元素。

如果数据元素多于DOM个数时用enter，如果数据元素少于DOM元素，则用exit。


在数据绑定时候存在三种情形：

- 数据元素个数多于DOM元素个数
- 数据元素与DOM元素个数一样
- 数据元素个数少于DOM元素个数

情形1：数据元素个数多于DOM元素个数

如以下例子，如果文档中`p`标签的个数少于数组个数(6个),则使用enter和append操作来补齐DOM元素:

```js
d3.select("body")
	.selectAll("p")
	.data([4, 8, 15, 16, 23, 42])
	.enter().append("p")
	.text(function(d) { return "I’m number " + d + "!"; });

```

情形2：数据元素与DOM元素个数一样

如果这种情况再使用data来绑定数据，相当于是更新了每个DOM元素所对应的数据，此时不需要加入新节点也不需要删除多余的节点:

```js
//update
var p = d3.select("body")
	.selectAll("p")
	.data([4, 8, 15, 16, 23, 42])
	.text(function(d) { return d; });

```

情形3：数据元素个数少于DOM元素个数

假设`p`元素的个数多于6个，数据元素个数为6，则：

```js
var p = d3.select("body")
	.selectAll("p")
	.data([4, 8, 15, 16, 23, 42])
	.text(function(d) { return d; });

p.exit().remove()  //移除多余的元素
```

但是在实际应用中，不可能先去统计一下元素个数，因此这三种情形可以一起使用:

```js

// Update 情形2
var p = d3.select("body")
	.selectAll("p")
	.data([4, 8, 15, 16, 23, 42])
	.text(function(d) { return d; });      

// Enter 情形1
p.enter().append("p")
    .text(function(d) { return d; });

// Exit 情形3
	p.exit().remove();

```

有了这三种操作，就可以自由的根据数据元素动态的修改DOM元素了。


### D3不是一种新的表示

D3不引入新的视觉表示方法，而是借助于现有的Web元素:HTML,CSS,SVG等。例如，可以使用D3创建SVG元素，并使用外部样式表进行样式化。也可以使用复合过滤器效果，虚线和裁剪。这样在调试的时候可以方便的使用浏览器内置的调试工具来进行调试。

### 过渡

D3支持动画效果，这种动画效果可以通过对样式属性的过渡实现。其补间插值支持多种方式，比如线性、弹性等。此外D3内置了多种插值方式，比如对数值类型、字符类型路径数据以及颜色等。

比如对元素的背景颜色进行过渡:

```js

d3.select("body").transition()
    .style("background-color", "black");

```

此外还可以为一组元素设置不同的延迟:

```js
d3.selectAll("circle").transition()
    .duration(750)
    .delay(function(d, i) { return i * 10; })
    .attr("r", function(d) { return Math.sqrt(d * scale); });

```

除了D3提供的过渡之外，你也可以通过CSS动画来实现对元素的过渡效果。



[更多教程](https://github.com/d3/d3/wiki/Tutorials)
