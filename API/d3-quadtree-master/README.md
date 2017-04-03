# d3-quadtree

[quadtree](https://en.wikipedia.org/wiki/Quadtree)可以递归的将二维空间分割为若干个正方形。每个不同的点都独立存在一个叶[node(节点)](#nodes)上。同一类点由链表表示。四叉树可以加速各种空间操作，比如基于[Barnes–Hut approximation](https://en.wikipedia.org/wiki/Barnes–Hut_simulation)来计算多个个体之间的力,碰撞检测或者寻找相邻点。


<a href="http://bl.ocks.org/mbostock/9078690"><img src="http://bl.ocks.org/mbostock/raw/9078690/thumbnail.png" width="202"></a>
<a href="http://bl.ocks.org/mbostock/4343214"><img src="http://bl.ocks.org/mbostock/raw/4343214/thumbnail.png" width="202"></a>

## Installing

NPM等安装方法略

```html
<script src="https://d3js.org/d3-quadtree.v1.min.js"></script>
<script>

var quadtree = d3.quadtree();

</script>
```

[Try d3-quadtree in your browser.](https://tonicdev.com/npm/d3-quadtree)

## API Reference

<a name="quadtree" href="#quadtree">#</a> d3.<b>quadtree</b>([<i>data</i>[, <i>x</i>, <i>y</i>]])
 [<>](https://github.com/d3/d3-quadtree/blob/master/src/quadtree.js#L14 "Source")

使用空的[extent](#quadtree_extent) 的默认的 [*x*-](#quadtree_x) ,[*y*-](#quadtree_y)访问器创建一个新的四叉树. 如果指定了*data*则将data所表示的数组[adds](#quadtree_addAll)到四叉树中，等价于:

```js
var tree = d3.quadtree()
    .addAll(data);
```

如果*x* 和 *y*也指定了，则设置[*x*-](#quadtree_x) 和 [*y*-](#quadtree_y)访问器，等价于:

```js
var tree = d3.quadtree()
    .x(x)
    .y(y)
    .addAll(data);
```

<a name="quadtree_x" href="#quadtree_x">#</a> <i>quadtree</i>.<b>x</b>([<i>x</i>]) [<>](https://github.com/d3/d3-quadtree/blob/master/src/x.js "Source")

设置或获取x-访问器，默认为:

```js
function x(d) {
  return d[0];
}
```

x-访问器用来设置当向四叉树中添加或移除节点时如何访问节点的x坐标。

<a name="quadtree_y" href="#quadtree_y">#</a> <i>quadtree</i>.<b>y</b>([<i>y</i>])
 [<>](https://github.com/d3/d3-quadtree/blob/master/src/y.js "Source")

设置或获取y访问器，默认为:

```js
function y(d) {
  return d[1];
}
```

<a name="quadtree_extent" href="#quadtree_extent">#</a> <i>quadtree</i>.<b>extent</b>([*extent*])
 [<>](https://github.com/d3/d3-quadtree/blob/master/src/extent.js "Source")

如果指定了*extent*则将四叉树的覆盖范围扩展到[[*x0*, *y0*], [*x1*, *y1*]]，如果没有指定则返回当前的四叉树边界[[*x0*, *y0*], [*x1*, *y1*]]，默认为undefined。四叉树的边界也可以通过调用 [*quadtree*.cover](#quadtree_cover) 或者 [*quadtree*.add](#quadtree_add)来改变.

<a name="quadtree_cover" href="#quadtree_cover">#</a> <i>quadtree</i>.<b>cover</b>(<i>x</i>, <i>y</i>)
 [<>](https://github.com/d3/d3-quadtree/blob/master/src/cover.js "Source")

扩展四叉树的范围使其覆盖点⟨*x*,*y*⟩, 并返回四叉树。如果已经覆盖了指定的点，则什么都不做。如果已经指定了extent则对之前指定的边界重复两次以使其覆盖指定的点。如果当前的四叉树为空，则extent会被初始化为[[⌊*x*⌋, ⌊*y*⌋], [⌈*x*⌉, ⌈*y*⌉]].(取整是为了在后续的重复中避免浮点数计算的错误)

<a name="quadtree_add" href="#quadtree_add">#</a> <i>quadtree</i>.<b>add</b>(<i>datum</i>)
 [<>](https://github.com/d3/d3-quadtree/blob/master/src/add.js "Source")

将指定的数据添加到四叉树中，如果新的点在当前四叉树范围之外，则自动使用[cover](#quadtree_cover)方法。

<a name="quadtree_addAll" href="#quadtree_addAll">#</a> <i>quadtree</i>.<b>addAll</b>(<i>data</i>)
 [<>](https://github.com/d3/d3-quadtree/blob/master/src/add.js#L50 "Source")

将指定的数组都添加到四叉树中，这个方法相当于重复调用 [*quadtree*.add](#quadtree_add):

```js
for (var i = 0, n = data.length; i < n; ++i) {
  quadtree.add(data[i]);
}
```

循环添加节点的方法比循环使用*add*生成的四叉树更紧凑，因为数据的范围再添加之前已经被计算。

<a name="quadtree_remove" href="#quadtree_remove">#</a> <i>quadtree</i>.<b>remove</b>(<i>datum</i>)
 [<>](https://github.com/d3/d3-quadtree/blob/master/src/remove.js "Source")

移除一个数据，如果指定的*datum*不在四叉树中，则什么都不做

<a name="quadtree_removeAll" href="#quadtree_removeAll">#</a> <i>quadtree</i>.<b>removeAll</b>(<i>data</i>)
 [<>](https://github.com/d3/d3-quadtree/blob/master/src/remove.js#L59 "Source")

…

<a name="quadtree_copy" href="#quadtree_copy">#</a> <i>quadtree</i>.<b>copy</b>()

返回一个四叉树的拷贝，四叉树中的数据没有拷贝，而是共享引用。

<a name="quadtree_root" href="#quadtree_root">#</a> <i>quadtree</i>.<b>root</b>()
 [<>](https://github.com/d3/d3-quadtree/blob/master/src/root.js "Source")

返回四叉树的根[node(节点)](#nodes).

<a name="quadtree_data" href="#quadtree_data">#</a> <i>quadtree</i>.<b>data</b>()
 [<>](https://github.com/d3/d3-quadtree/blob/master/src/data.js "Source")

返回四叉树中所包含的data数组.

<a name="quadtree_size" href="#quadtree_size">#</a> <i>quadtree</i>.<b>size</b>()
 [<>](https://github.com/d3/d3-quadtree/blob/master/src/size.js "Source")

返回四叉树中所包含的data数量.

<a name="quadtree_find" href="#quadtree_find">#</a> <i>quadtree</i>.<b>find</b>(<i>x</i>, <i>y</i>[, <i>radius</i>])
 [<>](https://github.com/d3/d3-quadtree/blob/master/src/find.js "Source")

返回离指定的点最接近的点，可以指定一个搜索半径。如果没有找到则返回undefined。

<a name="quadtree_visit" href="#quadtree_visit">#</a> <i>quadtree</i>.<b>visit</b>(<i>callback</i>)
 [<>](https://github.com/d3/d3-quadtree/blob/master/src/visit.js "Source")

以前序遍历的方式访问每一个[node(节点)](#nodes)，并调用指定的函数，函数参数为*node*, *x0*, *y0*, *x1*, *y1*表示每个正方形节点的范围。如果指定的回调函数返回true则其子节点将不会被访问到。这个方法可以用来快速的访问四叉树中的某一部分。比如[Barnes–Hut approximation](https://en.wikipedia.org/wiki/Barnes–Hut_simulation). 

<a name="quadtree_visitAfter" href="#quadtree_visitAfter">#</a> <i>quadtree</i>.<b>visitAfter</b>(<i>callback</i>)
 [<>](https://github.com/d3/d3-quadtree/blob/master/src/visitAfter.js "Source")

同上，只不过采用的是后序遍历。

### Nodes

在内部，节点一四元数组的形式存储，从左到右，从上到下:

* `0` - 左上象限
* `1` - 右上象限
* `2` - 左下象限
* `3` - 右下象限


叶节点包括如下属性:

* `data` - 保存了原来的数据, 也就是传递给[*quadtree*.add](#quadtree_add)的数据.
* `next` - 下一个数据如果有的话.

`length`属性用来记录子节点个数，对于叶节点来说是undefined。可以使用这个属性来访问所有的叶节点:

```js
if (!node.length) do console.log(node.data); while (node = node.next);
```

四叉树中点的*x*和*y*一定不能直接修改，要通过[remove](#quadtree_remove) 移除后再通过[add](#quadtree_add)重新添加。
