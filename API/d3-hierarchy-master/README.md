# d3-hierarchy

许多数据集都是分层结构的，比如按照州进行的人口普查，文件系统结构，公司内部等级等。


这个模块实现了几种常用的层级数据结构可视化技术:


**Node-link diagrams(节点链接图)**使用独立的节点和连接表示拓扑结构。比如使用圆表示节点并使用连线表示节点之间的关系。比如[“tidy” tree](#tree)可以将所有的叶节点都对其而显得整洁。而[Indented trees(缩进树)](https://bl.ocks.org/mbostock/1093025)则很方便交互。


**Adjacency diagrams(邻接图)**通过相对位移表示节点的拓扑结构。可以将每个节点编码为一个定量的面积区域，使用面积表示收益或文件大小等。参考[“icicle” diagram](#partition)例子


**Enclosure diagrams(打包图)**也使用面积编码，但是通过包围的方式表示节点之间的关系。[treemap](#treemap)将区域递归的分割成小的矩形，而[Circle-packing](#pack)使用嵌套的圆。

一个好的层级数据可视化应该既可以从个体元素上微观个体元素，又能从整体上进行宏观观察。

## Installing

NPM等安装方法略

```html
<script src="https://d3js.org/d3-hierarchy.v1.min.js"></script>
<script>

var treemap = d3.treemap();

</script>
```

[在浏览器中测试d3-hierarchy](https://tonicdev.com/npm/d3-hierarchy)

## API Reference

* [Hierarchy](#hierarchy) ([Stratify](#stratify))
* [Cluster(群集)](#cluster)
* [Tree(树图)](#tree)
* [Treemap(矩阵树图)](#treemap) ([Treemap Tiling](#treemap-tiling))
* [Partition(分区图)](#partition)
* [Pack(打包图)](#pack)

### Hierarchy

在计算层级结构布局之前，首先需要一个根节点。如果你的数据已经格式化为层级结构，，比如JSON格式则可以直接传递给[d3.hierarchy](#hierarchy)；否则你可以重新组织列表类型的数据，比如CSV格式，然后使用[d3.stratify](#stratify)转为层级结构格式。


<a name="hierarchy" href="#hierarchy">#</a> d3.<b>hierarchy</b>(<i>data</i>[, <i>children</i>]) [<>](https://github.com/d3/d3-hierarchy/blob/master/src/hierarchy/index.js#L12 "Source")

以给定的具有层次结构的数据*data*为基础，构建一个具有根节点的新的层级结构数据。*data*必须为表示根节点的对象类型，比如:


```json
{
  "name": "Eve",
  "children": [
    {
      "name": "Cain"
    },
    {
      "name": "Seth",
      "children": [
        {
          "name": "Enos"
        },
        {
          "name": "Noam"
        }
      ]
    },
    {
      "name": "Abel"
    },
    {
      "name": "Awan",
      "children": [
        {
          "name": "Enoch"
        }
      ]
    },
    {
      "name": "Azura"
    }
  ]
}
```

*children*可以指定子代访问器，如果在数据中子节点是通过children属性引用的一个数组，则使用默认设置就好，如果是其他的属性，则需要将子代访问器设置为相应的属性，默认为:

```js
function children(d) {
  return d.children;
}
```

d3.hierarchy返回的数据包含以下属性:


* *node*.data - 原来传给[constructor](#hierarchy)的数据
* *node*.depth - 节点的深度，根节点为0
* *node*.height - 节点的高度，叶节点为0
* *node*.parent - 节点的父节点，根节点为null
* *node*.children - 子节点数组，叶节点没有定义这个属性
* *node*.value - 当前节点以及后代节点的总值，通过[*node*.sum](#node_sum)设置.

这个方法也可以通过`instanceof d3.hierarchy`用来测试一个对象是否是d3.hierarchy的实例。或者可以在原型链上扩展d3.hierarchy方法。

<a name="node_ancestors" href="#node_ancestors">#</a> <i>node</i>.<b>ancestors</b>() [<>](https://github.com/d3/d3-hierarchy/blob/master/src/hierarchy/ancestors.js "Source")

以数组的形式放返回当前节点的所有祖先元素。

<a name="node_descendants" href="#node_descendants">#</a> <i>node</i>.<b>descendants</b>() [<>](https://github.com/d3/d3-hierarchy/blob/master/src/hierarchy/descendants.js "Source")

返回当前节点所有的后代节点

<a name="node_leaves" href="#node_leaves">#</a> <i>node</i>.<b>leaves</b>() [<>](https://github.com/d3/d3-hierarchy/blob/master/src/hierarchy/leaves.js "Source")

返回以当前节点为根节点的子树的所有叶节点

<a name="node_path" href="#node_path">#</a> <i>node</i>.<b>path</b>(<i>target</i>) [<>](https://github.com/d3/d3-hierarchy/blob/master/src/hierarchy/path.js "Source")

返回当前节点离目标节点最短路径。返回形式为包含路径所经过节点组成的数组。这个方法对于[hierarchical edge bundling(层级结构变捆绑)](https://bl.ocks.org/mbostock/7607999)中很有用.

<a name="node_links" href="#node_links">#</a> <i>node</i>.<b>links</b>() [<>](https://github.com/d3/d3-hierarchy/blob/master/src/hierarchy/links.js "Source")

返回以当前节点为根节点的子树中所有的连接(边)，每个连接都有source和target属性组成，source表示连接的父节点，target表示连接的子节点。

<a name="node_sum" href="#node_sum">#</a> <i>node</i>.<b>sum</b>(<i>value</i>) [<>](https://github.com/d3/d3-hierarchy/blob/master/src/hierarchy/sum.js "Source")

计算以当前节点为父节点的子树中某个值的总和。比如，假如每个节点都有一个value属性表示当前节点的值(或权重)，则可以通过如下设置统计某个子树的值的总和:

```js
root.sum(function(d) { return d.value ? 1 : 0; });
```

如果布局的时候需要计算节点的值，则必须要先调用*node*.sum方法，比如[d3.treemap](#treemap)，这个方法支持链式语法，所以你可以在计算布局之前调用*node*.sum and [*node*.sort](#node_sort),然后通过*node.descendants()*生成 所有的节点:

```js
var treemap = d3.treemap()
    .size([width, height])
    .padding(2);

var nodes = treemap(root
    .sum(function(d) { return d.value; })
    .sort(function(a, b) { return b.height - a.height || b.value - a.value; }))
  .descendants();
```

上述例子假设几点包含了value属性.

<a name="node_sort" href="#node_sort">#</a> <i>node</i>.<b>sort</b>(<i>compare</i>) [<>](https://github.com/d3/d3-hierarchy/blob/master/src/hierarchy/sort.js "Source")

以前序遍历的方式对当前节点的子节点进行排序。比较函数两个参数*a*和*b*分别表示两个节点的引用。更多排序参考 [*array*.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) 

与[*node*.sum](#node_sum)不同, *compare* 函数接受两个节点为参数，而不是两个节点的某个表示数据的属性。如果如果数据有一个value属性，则需要使用如下方法进行排序(对比sum和sort),推荐在[circle-packing](#pack)中使用这种排序:

```js
root
    .sum(function(d) { return d.value; })
    .sort(function(a, b) { return b.value - a.value; });
``````

类似的，也可以通过节点的高度和值来进行排序，这种排序推荐在 [treemaps](#treemap) and [icicles](#partition)中使用:

```js
root
    .sum(function(d) { return d.value; })
    .sort(function(a, b) { return b.height - a.height || b.value - a.value; });
```

通过节点的高度和递增的id排序，在 [trees](#tree) and [dendrograms](#cluster)中推荐使用:

```js
root
    .sum(function(d) { return d.value; })
    .sort(function(a, b) { return b.height - a.height || a.id.localeCompare(b.id); });
```


<a name="node_each" href="#node_each">#</a> <i>node</i>.<b>each</b>(<i>function</i>) [<>](https://github.com/d3/d3-hierarchy/blob/master/src/hierarchy/each.js "Source")

以[breadth-first order(广度优先)](https://en.wikipedia.org/wiki/Breadth-first_search)的次序为每个节点调用指定的的方法。传递当前的节点*node*。

<a name="node_eachAfter" href="#node_eachAfter">#</a> <i>node</i>.<b>eachAfter</b>(<i>function</i>) [<>](https://github.com/d3/d3-hierarchy/blob/master/src/hierarchy/eachAfter.js "Source")

以[post-order traversal(后续)](https://en.wikipedia.org/wiki/Tree_traversal#Post-order)遍历的次序每个节点调用指定的的方法。传递当前的节点*node*。


<a name="node_eachBefore" href="#node_eachBefore">#</a> <i>node</i>.<b>eachBefore</b>(<i>function</i>) [<>](https://github.com/d3/d3-hierarchy/blob/master/src/hierarchy/eachBefore.js "Source")

以[pre-order traversal(前序)](https://en.wikipedia.org/wiki/Tree_traversal#Pre-order)遍历的次序每个节点调用指定的的方法。传递当前的节点*node*。

<a name="node_copy" href="#node_copy">#</a> <i>node</i>.<b>copy</b>() [<>](https://github.com/d3/d3-hierarchy/blob/master/src/hierarchy/index.js#L39 "Source")

返回一个以当前节点为根节点的子树的深拷贝

#### Stratify

考虑如下表示层级结构的数据结构:

Name  | Parent
------|--------
Eve   |
Cain  | Eve
Seth  | Eve
Enos  | Seth
Noam  | Seth
Abel  | Eve
Awan  | Eve
Enoch | Awan
Azura | Eve


上述数据格式可以方便的存储在CSV文件中:

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

然后使用[d3.csvParse](https://github.com/d3/d3-dsv#csvParse)转成json格式的csv数据:

```js
var table = d3.csvParse(text);
```

返回:

```json
[
  {"name": "Eve",   "parent": ""},
  {"name": "Cain",  "parent": "Eve"},
  {"name": "Seth",  "parent": "Eve"},
  {"name": "Enos",  "parent": "Seth"},
  {"name": "Noam",  "parent": "Seth"},
  {"name": "Abel",  "parent": "Eve"},
  {"name": "Awan",  "parent": "Eve"},
  {"name": "Enoch", "parent": "Awan"},
  {"name": "Azura", "parent": "Eve"}
]
```

然后转为一个hierarchy数据:

```js
var root = d3.stratify()
    .id(function(d) { return d.name; })
    .parentId(function(d) { return d.parent; })
    (table);
```

返回数据结构如下:

[<img alt="Stratify" src="https://raw.githubusercontent.com/d3/d3-hierarchy/master/img/stratify.png">](https://tonicdev.com/mbostock/56fed33d8630b01300f72daa)

然后这个hierarchy格式的数据就可以传给布局使用，比如[d3.tree](#_tree)。

<a name="stratify" href="#stratify">#</a> d3.<b>stratify</b>() [<>](https://github.com/d3/d3-hierarchy/blob/master/src/stratify.js "Source")

使用默认的设置构建一个stratify(分层)操作。

<a name="_stratify" href="#_stratify">#</a> <i>stratify</i>(<i>data</i>) [<>](https://github.com/d3/d3-hierarchy/blob/master/src/stratify.js#L20 "Source")

根据指定的列表类型的数据生成对应的hierarchy(层次结构数据)。返回对象中的每个节点都对应原来列表类型数据中的一个对象的浅复制。

<a name="stratify_id" href="#stratify_id">#</a> <i>stratify</i>.<b>id</b>([<i>id</i>]) [<>](https://github.com/d3/d3-hierarchy/blob/master/src/stratify.js#L64 "Source")

设置或获取*id*访问器。这个属性作为构建层级结构节点的唯一标示。默认为:

```js
function id(d) {
  return d.id;
}
```

上述实例中，每个节点的标示使用name属性表示，因此要设置id为name

列表内的数据通过这个属性和parentId来"认亲".

<a name="stratify_parentId" href="#stratify_parentId">#</a> <i>stratify</i>.<b>parentId</b>([<i>parentId</i>]) [<>](https://github.com/d3/d3-hierarchy/blob/master/src/stratify.js#L68 "Source")

设置或获取父节id访问器。默认为:

```js
function parentId(d) {
  return d.parentId;
}
```

在上述例子中使用parent属性表示当前节点的父节点，因此要设置父节点标志为parent属性。

### Cluster

[<img alt="Dendrogram" src="https://raw.githubusercontent.com/d3/d3-hierarchy/master/img/cluster.png">](http://bl.ocks.org/mbostock/ff91c1558bc570b08539547ccc90050b)

The **cluster layout** produces [dendrograms](http://en.wikipedia.org/wiki/Dendrogram): node-link diagrams that place leaf nodes of the tree at the same depth. Dendograms are typically less compact than [tidy trees](#tree), but are useful when all the leaves should be at the same level, such as for hierarchical clustering or [phylogenetic tree diagrams](http://bl.ocks.org/mbostock/c034d66572fd6bd6815a).

<a name="cluster" href="#cluster">#</a> d3.<b>cluster</b>() [<>](https://github.com/d3/d3-hierarchy/blob/master/src/cluster.js "Source")

Creates a new cluster layout with default settings.

<a name="_cluster" href="#_cluster">#</a> <i>cluster</i>(<i>root</i>) [<>](https://github.com/d3/d3-hierarchy/blob/master/src/cluster.js#L39 "Source")

Lays out the specified *root* [hierarchy](#hierarchy), assigning the following properties on *root* and its descendants:

* *node*.x - the *x*-coordinate of the node
* *node*.y - the *y*-coordinate of the node

The coordinates *x* and *y* represent an arbitrary coordinate system; for example, you can treat *x* as an angle and *y* as a radius to produce a [radial layout](http://bl.ocks.org/mbostock/4739610f6d96aaad2fb1e78a72b385ab). You may want to call [*root*.sort](#node_sort) before passing the hierarchy to the cluster layout.

<a name="cluster_size" href="#cluster_size">#</a> <i>cluster</i>.<b>size</b>([<i>size</i>]) [<>](https://github.com/d3/d3-hierarchy/blob/master/src/cluster.js#L75 "Source")

If *size* is specified, sets this cluster layout’s size to the specified two-element array of numbers [*width*, *height*] and returns this cluster layout. If *size* is not specified, returns the current layout size, which defaults to [1, 1]. A layout size of null indicates that a [node size](#node_size) will be used instead. The coordinates *x* and *y* represent an arbitrary coordinate system; for example, to produce a [radial layout](http://bl.ocks.org/mbostock/4739610f6d96aaad2fb1e78a72b385ab), a size of [360, *radius*] corresponds to a breadth of 360° and a depth of *radius*.

<a name="cluster_nodeSize" href="#cluster_nodeSize">#</a> <i>cluster</i>.<b>nodeSize</b>([<i>size</i>]) [<>](https://github.com/d3/d3-hierarchy/blob/master/src/cluster.js#L79 "Source")

If *size* is specified, sets this cluster layout’s node size to the specified two-element array of numbers [*width*, *height*] and returns this cluster layout. If *size* is not specified, returns the current node size, which defaults to null. A node size of null indicates that a [layout size](#cluster_size) will be used instead. When a node size is specified, the root node is always positioned at ⟨0, 0⟩.

<a name="cluster_separation" href="#cluster_separation">#</a> <i>cluster</i>.<b>separation</b>([<i>separation</i>]) [<>](https://github.com/d3/d3-hierarchy/blob/master/src/cluster.js#L71 "Source")

If *separation* is specified, sets the separation accessor to the specified function and returns this cluster layout. If *separation* is not specified, returns the current separation accessor, which defaults to:

```js
function separation(a, b) {
  return a.parent == b.parent ? 1 : 2;
}
```

The separation accessor is used to separate neighboring leaves. The separation function is passed two leaves *a* and *b*, and must return the desired separation. The nodes are typically siblings, though the nodes may be more distantly related if the layout decides to place such nodes adjacent.

### Tree

[<img alt="Tidy Tree" src="https://raw.githubusercontent.com/d3/d3-hierarchy/master/img/tree.png">](http://bl.ocks.org/mbostock/9d0899acb5d3b8d839d9d613a9e1fe04)

The **tree** layout produces tidy node-link diagrams of trees using the [Reingold–Tilford “tidy” algorithm](http://emr.cs.iit.edu/~reingold/tidier-drawings.pdf), improved to run in linear time by [Buchheim *et al.*](http://dirk.jivas.de/papers/buchheim02improving.pdf) Tidy trees are typically more compact than [dendograms](#cluster).

<a name="tree" href="#tree">#</a> d3.<b>tree</b>() [<>](https://github.com/d3/d3-hierarchy/blob/master/src/tree.js "Source")

Creates a new tree layout with default settings.

<a name="_tree" href="#_tree">#</a> <i>tree</i>(<i>root</i>) [<>](https://github.com/d3/d3-hierarchy/blob/master/src/tree.js#L106 "Source")

Lays out the specified *root* [hierarchy](#hierarchy), assigning the following properties on *root* and its descendants:

* *node*.x - the *x*-coordinate of the node
* *node*.y - the *y*-coordinate of the node

The coordinates *x* and *y* represent an arbitrary coordinate system; for example, you can treat *x* as an angle and *y* as a radius to produce a [radial layout](http://bl.ocks.org/mbostock/2e12b0bd732e7fe4000e2d11ecab0268). You may want to call [*root*.sort](#node_sort) before passing the hierarchy to the tree layout.

<a name="tree_size" href="#tree_size">#</a> <i>tree</i>.<b>size</b>([<i>size</i>]) [<>](https://github.com/d3/d3-hierarchy/blob/master/src/tree.js#L228 "Source")

If *size* is specified, sets this tree layout’s size to the specified two-element array of numbers [*width*, *height*] and returns this tree layout. If *size* is not specified, returns the current layout size, which defaults to [1, 1]. A layout size of null indicates that a [node size](#node_size) will be used instead. The coordinates *x* and *y* represent an arbitrary coordinate system; for example, to produce a [radial layout](http://bl.ocks.org/mbostock/2e12b0bd732e7fe4000e2d11ecab0268), a size of [360, *radius*] corresponds to a breadth of 360° and a depth of *radius*.

<a name="tree_nodeSize" href="#tree_nodeSize">#</a> <i>tree</i>.<b>nodeSize</b>([<i>size</i>]) [<>](https://github.com/d3/d3-hierarchy/blob/master/src/tree.js#L232 "Source")

If *size* is specified, sets this tree layout’s node size to the specified two-element array of numbers [*width*, *height*] and returns this tree layout. If *size* is not specified, returns the current node size, which defaults to null. A node size of null indicates that a [layout size](#tree_size) will be used instead. When a node size is specified, the root node is always positioned at ⟨0, 0⟩.

<a name="tree_separation" href="#tree_separation">#</a> <i>tree</i>.<b>separation</b>([<i>separation</i>]) [<>](https://github.com/d3/d3-hierarchy/blob/master/src/tree.js#L224 "Source")

If *separation* is specified, sets the separation accessor to the specified function and returns this tree layout. If *separation* is not specified, returns the current separation accessor, which defaults to:

```js
function separation(a, b) {
  return a.parent == b.parent ? 1 : 2;
}
```

A variation that is more appropriate for radial layouts reduces the separation gap proportionally to the radius:

```js
function separation(a, b) {
  return (a.parent == b.parent ? 1 : 2) / a.depth;
}
```

The separation accessor is used to separate neighboring nodes. The separation function is passed two nodes *a* and *b*, and must return the desired separation. The nodes are typically siblings, though the nodes may be more distantly related if the layout decides to place such nodes adjacent.

### Treemap

[<img alt="Treemap" src="https://raw.githubusercontent.com/d3/d3-hierarchy/master/img/treemap.png">](http://bl.ocks.org/mbostock/6bbb0a7ff7686b124d80)

Introduced by [Ben Shneiderman](http://www.cs.umd.edu/hcil/treemap-history/) in 1991, a **treemap** recursively subdivides area into rectangles according to each node’s associated value. D3’s treemap implementation supports an extensible [tiling method](#treemap_tile): the default [squarified](#treemapSquarified) method seeks to generate rectangles with a [golden](https://en.wikipedia.org/wiki/Golden_ratio) aspect ratio; this offers better readability and size estimation than [slice-and-dice](#treemapSliceDice), which simply alternates between horizontal and vertical subdivision by depth.

<a name="treemap" href="#treemap">#</a> d3.<b>treemap</b>()

Creates a new treemap layout with default settings.

<a name="_treemap" href="#_treemap">#</a> <i>treemap</i>(<i>root</i>) [<>](https://github.com/d3/d3-hierarchy/blob/master/src/treemap/index.js#L18 "Source")

Lays out the specified *root* [hierarchy](#hierarchy), assigning the following properties on *root* and its descendants:

* *node*.x0 - the left edge of the rectangle
* *node*.y0 - the top edge of the rectangle
* *node*.x1 - the right edge of the rectangle
* *node*.y1 - the bottom edge of the rectangle

You must call [*root*.sum](#node_sum) before passing the hierarchy to the treemap layout. You probably also want to call [*root*.sort](#node_sort) to order the hierarchy before computing the layout.

<a name="treemap_tile" href="#treemap_tile">#</a> <i>treemap</i>.<b>tile</b>([<i>tile</i>]) [<>](https://github.com/d3/d3-hierarchy/blob/master/src/treemap/index.js#L61 "Source")

If *tile* is specified, sets the [tiling method](#treemap-tiling) to the specified function and returns this treemap layout. If *tile* is not specified, returns the current tiling method, which defaults to [d3.treemapSquarify](#treemapSquarify) with the golden ratio.

<a name="treemap_size" href="#treemap_size">#</a> <i>treemap</i>.<b>size</b>([<i>size</i>]) [<>](https://github.com/d3/d3-hierarchy/blob/master/src/treemap/index.js#L57 "Source")

If *size* is specified, sets this treemap layout’s size to the specified two-element array of numbers [*width*, *height*] and returns this treemap layout. If *size* is not specified, returns the current size, which defaults to [1, 1].

<a name="treemap_round" href="#treemap_round">#</a> <i>treemap</i>.<b>round</b>([<i>round</i>]) [<>](https://github.com/d3/d3-hierarchy/blob/master/src/treemap/index.js#L53 "Source")

If *round* is specified, enables or disables rounding according to the given boolean and returns this treemap layout. If *round* is not specified, returns the current rounding state, which defaults to false.

<a name="treemap_padding" href="#treemap_padding">#</a> <i>treemap</i>.<b>padding</b>([<i>padding</i>]) [<>](https://github.com/d3/d3-hierarchy/blob/master/src/treemap/index.js#L65 "Source")

If *padding* is specified, sets the [inner](#treemap_paddingInner) and [outer](#treemap_paddingOuter) padding to the specified number or function and returns this treemap layout. If *padding* is not specified, returns the current inner padding function.

<a name="treemap_paddingInner" href="#treemap_paddingInner">#</a> <i>treemap</i>.<b>paddingInner</b>([<i>padding</i>]) [<>](https://github.com/d3/d3-hierarchy/blob/master/src/treemap/index.js#L69 "Source")

If *padding* is specified, sets the inner padding to the specified number or function and returns this treemap layout. If *padding* is not specified, returns the current inner padding function, which defaults to the constant zero. If *padding* is a function, it is invoked for each node with children, being passed the current node. The inner padding is used to separate a node’s adjacent children.

<a name="treemap_paddingOuter" href="#treemap_paddingOuter">#</a> <i>treemap</i>.<b>paddingOuter</b>([<i>padding</i>]) [<>](https://github.com/d3/d3-hierarchy/blob/master/src/treemap/index.js#L73 "Source")

If *padding* is specified, sets the [top](#treemap_paddingTop), [right](#treemap_paddingRight), [bottom](#treemap_paddingBottom) and [left](#treemap_paddingLeft) padding to the specified number or function and returns this treemap layout. If *padding* is not specified, returns the current top padding function.

<a name="treemap_paddingTop" href="#treemap_paddingTop">#</a> <i>treemap</i>.<b>paddingTop</b>([<i>padding</i>]) [<>](https://github.com/d3/d3-hierarchy/blob/master/src/treemap/index.js#L77 "Source")

If *padding* is specified, sets the top padding to the specified number or function and returns this treemap layout. If *padding* is not specified, returns the current top padding function, which defaults to the constant zero. If *padding* is a function, it is invoked for each node with children, being passed the current node. The top padding is used to separate the top edge of a node from its children.

<a name="treemap_paddingRight" href="#treemap_paddingRight">#</a> <i>treemap</i>.<b>paddingRight</b>([<i>padding</i>]) [<>](https://github.com/d3/d3-hierarchy/blob/master/src/treemap/index.js#L81 "Source")

If *padding* is specified, sets the right padding to the specified number or function and returns this treemap layout. If *padding* is not specified, returns the current right padding function, which defaults to the constant zero. If *padding* is a function, it is invoked for each node with children, being passed the current node. The right padding is used to separate the right edge of a node from its children.

<a name="treemap_paddingBottom" href="#treemap_paddingBottom">#</a> <i>treemap</i>.<b>paddingBottom</b>([<i>padding</i>]) [<>](https://github.com/d3/d3-hierarchy/blob/master/src/treemap/index.js#L85 "Source")

If *padding* is specified, sets the bottom padding to the specified number or function and returns this treemap layout. If *padding* is not specified, returns the current bottom padding function, which defaults to the constant zero. If *padding* is a function, it is invoked for each node with children, being passed the current node. The bottom padding is used to separate the bottom edge of a node from its children.

<a name="treemap_paddingLeft" href="#treemap_paddingLeft">#</a> <i>treemap</i>.<b>paddingLeft</b>([<i>padding</i>]) [<>](https://github.com/d3/d3-hierarchy/blob/master/src/treemap/index.js#L89 "Source")

If *padding* is specified, sets the left padding to the specified number or function and returns this treemap layout. If *padding* is not specified, returns the current left padding function, which defaults to the constant zero. If *padding* is a function, it is invoked for each node with children, being passed the current node. The left padding is used to separate the left edge of a node from its children.

#### Treemap Tiling

Several built-in tiling methods are provided for use with [*treemap*.tile](#treemap_tile).

<a name="treemapBinary" href="#treemapBinary">#</a> d3.<b>treemapBinary</b>(<i>node</i>, <i>x0</i>, <i>y0</i>, <i>x1</i>, <i>y1</i>) [<>](https://github.com/d3/d3-hierarchy/blob/master/src/treemap/binary.js "Source")

Recursively partitions the specified *nodes* into an approximately-balanced binary tree, choosing horizontal partitioning for wide rectangles and vertical partitioning for tall rectangles.

<a name="treemapDice" href="#treemapDice">#</a> d3.<b>treemapDice</b>(<i>node</i>, <i>x0</i>, <i>y0</i>, <i>x1</i>, <i>y1</i>) [<>](https://github.com/d3/d3-hierarchy/blob/master/src/treemap/dice.js "Source")

Divides the rectangular area specified by *x0*, *y0*, *x1*, *y1* horizontally according the value of each of the specified *node*’s children. The children are positioned in order, starting with the left edge (*x0*) of the given rectangle. If the sum of the children’s values is less than the specified *node*’s value (*i.e.*, if the specified *node* has a non-zero internal value), the remaining empty space will be positioned on the right edge (*x1*) of the given rectangle.

<a name="treemapSlice" href="#treemapSlice">#</a> d3.<b>treemapSlice</b>(<i>node</i>, <i>x0</i>, <i>y0</i>, <i>x1</i>, <i>y1</i>) [<>](https://github.com/d3/d3-hierarchy/blob/master/src/treemap/slice.js "Source")

Divides the rectangular area specified by *x0*, *y0*, *x1*, *y1* vertically according the value of each of the specified *node*’s children. The children are positioned in order, starting with the top edge (*y0*) of the given rectangle. If the sum of the children’s values is less than the specified *node*’s value (*i.e.*, if the specified *node* has a non-zero internal value), the remaining empty space will be positioned on the bottom edge (*y1*) of the given rectangle.

<a name="treemapSliceDice" href="#treemapSliceDice">#</a> d3.<b>treemapSliceDice</b>(<i>node</i>, <i>x0</i>, <i>y0</i>, <i>x1</i>, <i>y1</i>) [<>](https://github.com/d3/d3-hierarchy/blob/master/src/treemap/sliceDice.js "Source")

If the specified *node* has odd depth, delegates to [treemapSlice](#treemapSlice); otherwise delegates to [treemapDice](#treemapDice).

<a name="treemapSquarify" href="#treemapSquarify">#</a> d3.<b>treemapSquarify</b>(<i>node</i>, <i>x0</i>, <i>y0</i>, <i>x1</i>, <i>y1</i>) [<>](https://github.com/d3/d3-hierarchy/blob/master/src/treemap/squarify.js "Source")

Implements the [squarified treemap](https://www.win.tue.nl/~vanwijk/stm.pdf) algorithm by Bruls *et al.*, which seeks to produce rectangles of a given [aspect ratio](#squarify_ratio).

<a name="treemapResquarify" href="#treemapResquarify">#</a> d3.<b>treemapResquarify</b>(<i>node</i>, <i>x0</i>, <i>y0</i>, <i>x1</i>, <i>y1</i>) [<>](https://github.com/d3/d3-hierarchy/blob/master/src/treemap/resquarify.js "Source")

Like [d3.treemapSquarify](#treemapSquarify), except preserves the topology (node adjacencies) of the previous layout computed by d3.treemapResquarify, if there is one and it used the same [target aspect ratio](#resquarify_ratio). This tiling method is good for animating changes to treemaps because it only changes node sizes and not their relative positions, thus avoiding distracting shuffling and occlusion. The downside of a stable update, however, is a suboptimal layout for subsequent updates: only the first layout uses the Bruls *et al.* squarified algorithm.

<a name="squarify_ratio" href="#squarify_ratio">#</a> <i>squarify</i>.<b>ratio</b>(<i>ratio</i>) [<>](https://github.com/d3/d3-hierarchy/blob/master/src/treemap/squarify.js#L58 "Source")

Specifies the desired aspect ratio of the generated rectangles. The *ratio* must be specified as a number greater than or equal to one. Note that the orientation of the generated rectangles (tall or wide) is not implied by the ratio; for example, a ratio of two will attempt to produce a mixture of rectangles whose *width*:*height* ratio is either 2:1 or 1:2. (However, you can approximately achieve this result by generating a square treemap at different dimensions, and then [stretching the treemap](http://bl.ocks.org/mbostock/5c50a377e76a1974248bd628befdec95) to the desired aspect ratio.) Furthermore, the specified *ratio* is merely a hint to the tiling algorithm; the rectangles are not guaranteed to have the specified aspect ratio. If not specified, the aspect ratio defaults to the golden ratio, φ = (1 + sqrt(5)) / 2, per [Kong *et al.*](http://vis.stanford.edu/papers/perception-treemaps)

### Partition

[<img alt="Partition" src="https://raw.githubusercontent.com/d3/d3-hierarchy/master/img/partition.png">](http://bl.ocks.org/mbostock/2e73ec84221cb9773f4c)

The **partition layout** produces adjacency diagrams: a space-filling variant of a node-link tree diagram. Rather than drawing a link between parent and child in the hierarchy, nodes are drawn as solid areas (either arcs or rectangles), and their placement relative to other nodes reveals their position in the hierarchy. The size of the nodes encodes a quantitative dimension that would be difficult to show in a node-link diagram.

<a name="partition" href="#partition">#</a> d3.<b>partition</b>()

Creates a new partition layout with the default settings.

<a name="_partition" href="#_partition">#</a> <i>partition</i>(<i>root</i>) [<>](https://github.com/d3/d3-hierarchy/blob/master/src/partition.js#L10 "Source")

Lays out the specified *root* [hierarchy](#hierarchy), assigning the following properties on *root* and its descendants:

* *node*.x0 - the left edge of the rectangle
* *node*.y0 - the top edge of the rectangle
* *node*.x1 - the right edge of the rectangle
* *node*.y1 - the bottom edge of the rectangle

You must call [*root*.sum](#node_sum) before passing the hierarchy to the partition layout. You probably also want to call [*root*.sort](#node_sort) to order the hierarchy before computing the layout.

<a name="partition_size" href="#partition_size">#</a> <i>partition</i>.<b>size</b>([<i>size</i>]) [<>](https://github.com/d3/d3-hierarchy/blob/master/src/partition.js#L43 "Source")

If *size* is specified, sets this partition layout’s size to the specified two-element array of numbers [*width*, *height*] and returns this partition layout. If *size* is not specified, returns the current size, which defaults to [1, 1].

<a name="partition_round" href="#partition_round">#</a> <i>partition</i>.<b>round</b>([<i>round</i>]) [<>](https://github.com/d3/d3-hierarchy/blob/master/src/partition.js#L39 "Source")

If *round* is specified, enables or disables rounding according to the given boolean and returns this partition layout. If *round* is not specified, returns the current rounding state, which defaults to false.

<a name="partition_padding" href="#partition_padding">#</a> <i>partition</i>.<b>padding</b>([<i>padding</i>]) [<>](https://github.com/d3/d3-hierarchy/blob/master/src/partition.js#L47 "Source")

If *padding* is specified, sets the padding to the specified number and returns this partition layout. If *padding* is not specified, returns the current padding, which defaults to zero. The padding is used to separate a node’s adjacent children.

### Pack

[<img alt="Circle-Packing" src="https://raw.githubusercontent.com/d3/d3-hierarchy/master/img/pack.png">](http://bl.ocks.org/mbostock/ca5b03a33affa4160321)

Enclosure diagrams use containment (nesting) to represent a hierarchy. The size of the leaf circles encodes a quantitative dimension of the data. The enclosing circles show the approximate cumulative size of each subtree, but due to wasted space there is some distortion; only the leaf nodes can be compared accurately. Although [circle packing](http://en.wikipedia.org/wiki/Circle_packing) does not use space as efficiently as a [treemap](#treemap), the “wasted” space more prominently reveals the hierarchical structure.

<a name="pack" href="#pack">#</a> d3.<b>pack</b>()

Creates a new pack layout with the default settings.

<a name="_pack" href="#_pack">#</a> <i>pack</i>(<i>root</i>) [<>](https://github.com/d3/d3-hierarchy/blob/master/src/pack/index.js#L15 "Source")

Lays out the specified *root* [hierarchy](#hierarchy), assigning the following properties on *root* and its descendants:

* *node*.x - the *x*-coordinate of the circle’s center
* *node*.y - the *y*-coordinate of the circle’s center
* *node*.r - the radius of the circle

You must call [*root*.sum](#node_sum) before passing the hierarchy to the pack layout. You probably also want to call [*root*.sort](#node_sort) to order the hierarchy before computing the layout.

<a name="pack_radius" href="#pack_radius">#</a> <i>pack</i>.<b>radius</b>([<i>radius</i>]) [<>](https://github.com/d3/d3-hierarchy/blob/master/src/pack/index.js#L30 "Source")

If *radius* is specified, sets the pack layout’s radius accessor to the specified function and returns this pack layout. If *radius* is not specified, returns the current radius accessor, which defaults to null. If the radius accessor is null, the radius of each leaf circle is derived from the leaf *node*.value (computed by [*node*.sum](#node_sum)); the radii are then scaled proportionally to fit the [layout size](#pack_size). If the radius accessor is not null, the radius of each leaf circle is specified exactly by the function.

<a name="pack_size" href="#pack_size">#</a> <i>pack</i>.<b>size</b>([<i>size</i>]) [<>](https://github.com/d3/d3-hierarchy/blob/master/src/pack/index.js#L34 "Source")

If *size* is specified, sets this pack layout’s size to the specified two-element array of numbers [*width*, *height*] and returns this pack layout. If *size* is not specified, returns the current size, which defaults to [1, 1].

<a name="pack_padding" href="#pack_padding">#</a> <i>pack</i>.<b>padding</b>([<i>padding</i>]) [<>](https://github.com/d3/d3-hierarchy/blob/master/src/pack/index.js#L38 "Source")

If *padding* is specified, sets this pack layout’s padding accessor to the specified number or function or returns this pack layout. If *padding* is not specified, returns the current padding accessor, which defaults to the constant zero. When siblings are packed, tangent siblings will be separated by approximately the specified padding; the enclosing parent circle will also be separated from its children by approximately the specified padding. If an [explicit radius](#pack_radius) is not specified, the padding is approximate because a two-pass algorithm is needed to fit within the [layout size](#pack_size): the circles are first packed without padding; a scaling factor is computed and applied to the specified padding; and lastly the circles are re-packed with padding.

<a name="packSiblings" href="#packSiblings">#</a> d3.<b>packSiblings</b>(<i>circles</i>) [<>](https://github.com/d3/d3-hierarchy/blob/master/src/pack/siblings.js "Source")

Packs the specified array of *circles*, each of which must have a *circle*.r property specifying the circle’s radius. Assigns the following properties to each circle:

* *circle*.x - the *x*-coordinate of the circle’s center
* *circle*.y - the *y*-coordinate of the circle’s center

The circles are positioned according to the front-chain packing algorithm by [Wang *et al.*](https://dl.acm.org/citation.cfm?id=1124851)

<a name="packEnclose" href="#packEnclose">#</a> d3.<b>packEnclose</b>(<i>circles</i>) [<>](https://github.com/d3/d3-hierarchy/blob/master/src/pack/enclose.js "Source")

Computes the [smallest circle](https://en.wikipedia.org/wiki/Smallest-circle_problem) that encloses the specified array of *circles*, each of which must have a *circle*.r property specifying the circle’s radius, and *circle*.x and *circle*.y properties specifying the circle’s center. The enclosing circle is computed using [Welzl’s algorithm](http://link.springer.com/chapter/10.1007/BFb0038202) adapted to enclose circles rather than points. (See also [Apollonius’ Problem](https://bl.ocks.org/mbostock/751fdd637f4bc2e3f08b).)
