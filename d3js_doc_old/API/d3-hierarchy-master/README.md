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

**cluster layout**用来产生树状的节点链接图:所有的叶节点的都有相同的深度。注意与[tidy trees(树状图)](#tree)区分。

树状图与集群图不同，集群图所有的叶节点都有相同的深度，也就是可以不管叶节点到根节点有多少层，最终布局的叶节点都可以对其，树状图则不是。

<a name="cluster" href="#cluster">#</a> d3.<b>cluster</b>() [<>](https://github.com/d3/d3-hierarchy/blob/master/src/cluster.js "Source")

构建一个默认的群集布局。

<a name="_cluster" href="#_cluster">#</a> <i>cluster</i>(<i>root</i>) [<>](https://github.com/d3/d3-hierarchy/blob/master/src/cluster.js#L39 "Source")

将指定的根节点代表的[hierarchy](#hierarchy)数据布局为群集结构，每个节点都包含以下属性:

* *node*.x - 节点的*x*-坐标
* *node*.y - 节点的*y*-坐标

*x*和*y*坐标表示位于任意坐标系统中，也就是说这里的x和y并不一定是传统意义上的直角坐标，换做极坐标也使用这两个属性表示角度和半径。参考[radial layout](http://bl.ocks.org/mbostock/4739610f6d96aaad2fb1e78a72b385ab). 如果要排序则需要先调用 [*root*.sort](#node_sort).

<a name="cluster_size" href="#cluster_size">#</a> <i>cluster</i>.<b>size</b>([<i>size</i>]) [<>](https://github.com/d3/d3-hierarchy/blob/master/src/cluster.js#L75 "Source")

设置或获取布局的尺寸，默认[1,1], 注意这个size不特指直角坐标系，也可以是极坐标系统，比如使用[360,radius]可以生成一个径向布局的半径为radius的群集布局。此时节点的x属性表示的是弧度，y表示的是半径。

<a name="cluster_nodeSize" href="#cluster_nodeSize">#</a> <i>cluster</i>.<b>nodeSize</b>([<i>size</i>]) [<>](https://github.com/d3/d3-hierarchy/blob/master/src/cluster.js#L79 "Source")

设置或获取节点的尺寸。默认为null，如果指定了节点尺寸则根节点会被置于⟨0, 0⟩.

<a name="cluster_separation" href="#cluster_separation">#</a> <i>cluster</i>.<b>separation</b>([<i>separation</i>]) [<>](https://github.com/d3/d3-hierarchy/blob/master/src/cluster.js#L71 "Source")

设置或获取间隔访问器。默认为:

```js
function separation(a, b) {
  return a.parent == b.parent ? 1 : 2;
}
```

间隔用来设置相邻的兄弟节点之间的距离。间隔访问器传递两个节点*a*和*b*，然后根据a和b返回间隔，比如a和b共有一个父节点时间隔小一些，否则女间隔大一些。

### Tree

[<img alt="Tidy Tree" src="https://raw.githubusercontent.com/d3/d3-hierarchy/master/img/tree.png">](http://bl.ocks.org/mbostock/9d0899acb5d3b8d839d9d613a9e1fe04)

**tree**布局基于[Reingold–Tilford “tidy” algorithm](http://emr.cs.iit.edu/~reingold/tidier-drawings.pdf)生成一个整洁的树状布局。要注意和[dendograms](#cluster)的区别

<a name="tree" href="#tree">#</a> d3.<b>tree</b>() [<>](https://github.com/d3/d3-hierarchy/blob/master/src/tree.js "Source")

使用默认的设置构建一个树图布局生成器.

<a name="_tree" href="#_tree">#</a> <i>tree</i>(<i>root</i>) [<>](https://github.com/d3/d3-hierarchy/blob/master/src/tree.js#L106 "Source")

根据指定的根节点代表的[hierarchy](#hierarchy)数据生成一个树状布局数据，每个节点包含以下属性:\

* *node*.x - 节点的 *x*-坐标
* *node*.y - 节点的 *y*-坐标

*x*和*y*坐标表示位于任意坐标系统中，也就是说这里的x和y并不一定是传统意义上的直角坐标，换做极坐标也使用这两个属性表示角度和半径。

<a name="tree_size" href="#tree_size">#</a> <i>tree</i>.<b>size</b>([<i>size</i>]) [<>](https://github.com/d3/d3-hierarchy/blob/master/src/tree.js#L228 "Source")

设置或获取布局尺寸，参考cluster的设置方法。

<a name="tree_nodeSize" href="#tree_nodeSize">#</a> <i>tree</i>.<b>nodeSize</b>([<i>size</i>]) [<>](https://github.com/d3/d3-hierarchy/blob/master/src/tree.js#L232 "Source")

设置或获取节点的尺寸，参考cluster的设置方法

<a name="tree_separation" href="#tree_separation">#</a> <i>tree</i>.<b>separation</b>([<i>separation</i>]) [<>](https://github.com/d3/d3-hierarchy/blob/master/src/tree.js#L224 "Source")

设置或获取叶节点之间的间隔访问器，参考cluster的设置方法, 默认为:

```js
function separation(a, b) {
  return a.parent == b.parent ? 1 : 2;
}
```

如果是径向布局的树图，则使用如下方法设置间隔更合适:

```js
function separation(a, b) {
  return (a.parent == b.parent ? 1 : 2) / a.depth;
}
```

### Treemap

[<img alt="Treemap" src="https://raw.githubusercontent.com/d3/d3-hierarchy/master/img/treemap.png">](http://bl.ocks.org/mbostock/6bbb0a7ff7686b124d80)

*Treemap*在1991年由[Ben Shneiderman](http://www.cs.umd.edu/hcil/treemap-history/)提出, **treemap**根据节点的值将一个矩形递归的分割成小的矩形，每个矩形表示一个节点。 

<a name="treemap" href="#treemap">#</a> d3.<b>treemap</b>()

使用默认的设置构建一个treemap生成器

<a name="_treemap" href="#_treemap">#</a> <i>treemap</i>(<i>root</i>) [<>](https://github.com/d3/d3-hierarchy/blob/master/src/treemap/index.js#L18 "Source")

根据root表示的 [hierarchy](#hierarchy)布局为treemap结构。每个节点都包含以下属性:

* *node*.x0 - 矩形的左边界坐标
* *node*.y0 - 矩形的上边界坐标
* *node*.x1 - 矩形的右边界坐标
* *node*.y1 - 矩形的下边界坐标

矩形的大小根据节点的值设置，节点的值可以在布局之前使用[*root*.sum](#node_sum)进行设置计算，也可以在布局之前使用[*root*.sort](#node_sort)进行排序

<a name="treemap_tile" href="#treemap_tile">#</a> <i>treemap</i>.<b>tile</b>([<i>tile</i>]) [<>](https://github.com/d3/d3-hierarchy/blob/master/src/treemap/index.js#L61 "Source")

设置或获取[tiling method](#treemap-tiling),默认为[d3.treemapSquarify](#treemapSquarify)。

这个方法的作用具体参考[tiling method](#treemap-tiling)

<a name="treemap_size" href="#treemap_size">#</a> <i>treemap</i>.<b>size</b>([<i>size</i>]) [<>](https://github.com/d3/d3-hierarchy/blob/master/src/treemap/index.js#L57 "Source")

设置或获取布局尺寸，默认为[1,1]

<a name="treemap_round" href="#treemap_round">#</a> <i>treemap</i>.<b>round</b>([<i>round</i>]) [<>](https://github.com/d3/d3-hierarchy/blob/master/src/treemap/index.js#L53 "Source")

是否启用取整，默认为false

<a name="treemap_padding" href="#treemap_padding">#</a> <i>treemap</i>.<b>padding</b>([<i>padding</i>]) [<>](https://github.com/d3/d3-hierarchy/blob/master/src/treemap/index.js#L65 "Source")

设置或获取间隔参数，等于同时设置[inner](#treemap_paddingInner) 和 [outer](#treemap_paddingOuter)

<a name="treemap_paddingInner" href="#treemap_paddingInner">#</a> <i>treemap</i>.<b>paddingInner</b>([<i>padding</i>]) [<>](https://github.com/d3/d3-hierarchy/blob/master/src/treemap/index.js#L69 "Source")

设置或获取内部间隔，默认为0，(相当于盒模型中的padding)

<a name="treemap_paddingOuter" href="#treemap_paddingOuter">#</a> <i>treemap</i>.<b>paddingOuter</b>([<i>padding</i>]) [<>](https://github.com/d3/d3-hierarchy/blob/master/src/treemap/index.js#L73 "Source")

同时设置外部间隔，默认为0，相当于盒模型中的margin

<a name="treemap_paddingTop" href="#treemap_paddingTop">#</a> <i>treemap</i>.<b>paddingTop</b>([<i>padding</i>]) [<>](https://github.com/d3/d3-hierarchy/blob/master/src/treemap/index.js#L77 "Source")

设置或获取顶部间隔, 默认为0，(margin-top)

<a name="treemap_paddingRight" href="#treemap_paddingRight">#</a> <i>treemap</i>.<b>paddingRight</b>([<i>padding</i>]) [<>](https://github.com/d3/d3-hierarchy/blob/master/src/treemap/index.js#L81 "Source")

设置或获取右部间隔, 默认为0，(margin-right)

<a name="treemap_paddingBottom" href="#treemap_paddingBottom">#</a> <i>treemap</i>.<b>paddingBottom</b>([<i>padding</i>]) [<>](https://github.com/d3/d3-hierarchy/blob/master/src/treemap/index.js#L85 "Source")

设置或获取底部间隔, 默认为0，(margin-bottom)

<a name="treemap_paddingLeft" href="#treemap_paddingLeft">#</a> <i>treemap</i>.<b>paddingLeft</b>([<i>padding</i>]) [<>](https://github.com/d3/d3-hierarchy/blob/master/src/treemap/index.js#L89 "Source")

设置或获取左部间隔, 默认为0，(margin-left)

#### Treemap Tiling

一些供[*treemap*.tile](#treemap_tile)使用的内置方法。看图吧...不解释

<a name="treemapBinary" href="#treemapBinary">#</a> d3.<b>treemapBinary</b>(<i>node</i>, <i>x0</i>, <i>y0</i>, <i>x1</i>, <i>y1</i>) [<>](https://github.com/d3/d3-hierarchy/blob/master/src/treemap/binary.js "Source")

将指定的节点以递归的方式划分为一个大致平衡的二叉树，如果宽度大于高度则水平划分，如果高度大于宽度则垂直划分。

<a name="treemapDice" href="#treemapDice">#</a> d3.<b>treemapDice</b>(<i>node</i>, <i>x0</i>, <i>y0</i>, <i>x1</i>, <i>y1</i>) [<>](https://github.com/d3/d3-hierarchy/blob/master/src/treemap/dice.js "Source")

根据每个子节点水平划分矩形，并且顺序是有序的。

<a name="treemapSlice" href="#treemapSlice">#</a> d3.<b>treemapSlice</b>(<i>node</i>, <i>x0</i>, <i>y0</i>, <i>x1</i>, <i>y1</i>) [<>](https://github.com/d3/d3-hierarchy/blob/master/src/treemap/slice.js "Source")

根据每个子节点垂直划分矩形，并且顺序是有序的。

<a name="treemapSliceDice" href="#treemapSliceDice">#</a> d3.<b>treemapSliceDice</b>(<i>node</i>, <i>x0</i>, <i>y0</i>, <i>x1</i>, <i>y1</i>) [<>](https://github.com/d3/d3-hierarchy/blob/master/src/treemap/sliceDice.js "Source")

如果指定的节点深度为奇数则使用treemapSlice，否则使用treemapDice

<a name="treemapSquarify" href="#treemapSquarify">#</a> d3.<b>treemapSquarify</b>(<i>node</i>, <i>x0</i>, <i>y0</i>, <i>x1</i>, <i>y1</i>) [<>](https://github.com/d3/d3-hierarchy/blob/master/src/treemap/squarify.js "Source")

这种方法可以用以产生宽高比相等的矩形分区。

<a name="treemapResquarify" href="#treemapResquarify">#</a> d3.<b>treemapResquarify</b>(<i>node</i>, <i>x0</i>, <i>y0</i>, <i>x1</i>, <i>y1</i>) [<>](https://github.com/d3/d3-hierarchy/blob/master/src/treemap/resquarify.js "Source")

与"treemapSquarify"类似，但是不同的是不会改变矩形的位置，只调整大小。


<a name="squarify_ratio" href="#squarify_ratio">#</a> <i>squarify</i>.<b>ratio</b>(<i>ratio</i>) [<>](https://github.com/d3/d3-hierarchy/blob/master/src/treemap/squarify.js#L58 "Source")

产生等比例矩形时的比例大小，这个值必须大于等于1

### Partition

[<img alt="Partition" src="https://raw.githubusercontent.com/d3/d3-hierarchy/master/img/partition.png">](http://bl.ocks.org/mbostock/2e73ec84221cb9773f4c)

**paratition**布局是一种邻接图:可以看成是节点链接树图的空白填充。

<a name="partition" href="#partition">#</a> d3.<b>partition</b>()

使用默认的设置构建一个分区图布局。

<a name="_partition" href="#_partition">#</a> <i>partition</i>(<i>root</i>) [<>](https://github.com/d3/d3-hierarchy/blob/master/src/partition.js#L10 "Source")

将root表示的[hierarchy](#hierarchy)布局为分区结构布局。每个节点包含一下属性:

* *node*.x0 - 矩形的左边界坐标
* *node*.y0 - 矩形的上边界坐标
* *node*.x1 - 矩形的右边界坐标
* *node*.y1 - 矩形的下边界坐标

在布局之前首先要调用[*root*.sum](#node_sum)统计每一个节点的值。也可以通过[*root*.sort](#node_sort)进行排序。

<a name="partition_size" href="#partition_size">#</a> <i>partition</i>.<b>size</b>([<i>size</i>]) [<>](https://github.com/d3/d3-hierarchy/blob/master/src/partition.js#L43 "Source")

设置或获取布局的尺寸，默认为[1,1] 可以使用极坐标布局看来画旭日图。

<a name="partition_round" href="#partition_round">#</a> <i>partition</i>.<b>round</b>([<i>round</i>]) [<>](https://github.com/d3/d3-hierarchy/blob/master/src/partition.js#L39 "Source")

是否进行取整计算，默认为false

<a name="partition_padding" href="#partition_padding">#</a> <i>partition</i>.<b>padding</b>([<i>padding</i>]) [<>](https://github.com/d3/d3-hierarchy/blob/master/src/partition.js#L47 "Source")

设置或获取相邻分区之间的间隔。默认为0

### Pack

[<img alt="Circle-Packing" src="https://raw.githubusercontent.com/d3/d3-hierarchy/master/img/pack.png">](http://bl.ocks.org/mbostock/ca5b03a33affa4160321)

将节点布局为相互包含的打包图。打包不如[treemap](#treemap)空间利用率高，会造成空间的浪费。

<a name="pack" href="#pack">#</a> d3.<b>pack</b>()

使用默认的设置构建一个打包图布局。

<a name="_pack" href="#_pack">#</a> <i>pack</i>(<i>root</i>) [<>](https://github.com/d3/d3-hierarchy/blob/master/src/pack/index.js#L15 "Source")

将root表示的[hierarchy](#hierarchy)数据布局为打包图。每个节点包含以下属性:

* *node*.x - 节点中心的*x*-坐标
* *node*.y - 节点中心的*y*-坐标
* *node*.r - 表示节点的圆的半径

在布局之前首先要调用[*root*.sum](#node_sum)统计每一个节点的值。也可以通过[*root*.sort](#node_sort)进行排序。

<a name="pack_radius" href="#pack_radius">#</a> <i>pack</i>.<b>radius</b>([<i>radius</i>]) [<>](https://github.com/d3/d3-hierarchy/blob/master/src/pack/index.js#L30 "Source")

设置或获取布局的半径范围。默认为null，如果为null则会根据叶节点的值等比例的调整以适应[layout size](#pack_size).

<a name="pack_size" href="#pack_size">#</a> <i>pack</i>.<b>size</b>([<i>size</i>]) [<>](https://github.com/d3/d3-hierarchy/blob/master/src/pack/index.js#L34 "Source")

布局的尺寸，默认为[1,1]

<a name="pack_padding" href="#pack_padding">#</a> <i>pack</i>.<b>padding</b>([<i>padding</i>]) [<>](https://github.com/d3/d3-hierarchy/blob/master/src/pack/index.js#L38 "Source")

设置或获取表示节点圆的之间的间隔参数。

<a name="packSiblings" href="#packSiblings">#</a> d3.<b>packSiblings</b>(<i>circles</i>) [<>](https://github.com/d3/d3-hierarchy/blob/master/src/pack/siblings.js "Source")

将一组*circles*打包. 每个circle都包含以下属性:

* *circle*.x - 圆的*x*-坐标
* *circle*.y - 圆的*y*-坐标

这个算法基于[Wang *et al.*](https://dl.acm.org/citation.cfm?id=1124851)


<a name="packEnclose" href="#packEnclose">#</a> d3.<b>packEnclose</b>(<i>circles</i>) [<>](https://github.com/d3/d3-hierarchy/blob/master/src/pack/enclose.js "Source")

计算能包围所有圆最小圆。

