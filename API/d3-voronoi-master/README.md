# d3-voronoi

这个模块根据[Steven J. Fortune’s algorithm](https://en.wikipedia.org/wiki/Fortune's_algorithm) 实现了根据二维空间的一组点计算 [Voronoi diagram](https://en.wikipedia.org/wiki/Voronoi_diagram) 或[Delaunay triangulation](https://en.wikipedia.org/wiki/Delaunay_triangulation)。

Voronoi图不仅在视觉上有吸引力，而且是一个交互的是实用工具。比如去增加散点图中的点的目标区域面积。参考[“Strikeouts on the Rise”](http://www.nytimes.com/interactive/2013/03/29/sports/baseball/Strikeouts-Are-Still-Soaring.html)。也可以参考Tovi Grossman在[bubble cursors](http://www.tovigrossman.com/BubbleCursor)中的论文来获取相关技术。Voronoi图也可以用来对标签进行自动定位， Delaunay在计算视觉元素相邻或分组元素时是有用的。


<a href="http://bl.ocks.org/mbostock/6675193"><img src="http://bl.ocks.org/mbostock/raw/6675193/thumbnail.png" width="202"></a>
<a href="http://bl.ocks.org/mbostock/4060366"><img src="http://bl.ocks.org/mbostock/raw/4060366/thumbnail.png" width="202"></a>
<a href="http://bl.ocks.org/mbostock/4341156"><img src="http://bl.ocks.org/mbostock/raw/4341156/thumbnail.png" width="202"></a>
<a href="http://bl.ocks.org/mbostock/4360892"><img src="http://bl.ocks.org/mbostock/raw/4360892/thumbnail.png" width="202"></a>
<a href="http://bl.ocks.org/mbostock/7608400"><img src="http://bl.ocks.org/mbostock/raw/7608400/thumbnail.png" width="202"></a>
<a href="http://bl.ocks.org/mbostock/4636377"><img src="http://bl.ocks.org/mbostock/raw/4636377/thumbnail.png" width="202"></a>
<a href="http://bl.ocks.org/mbostock/1073373"><img src="http://bl.ocks.org/mbostock/raw/1073373/thumbnail.png" width="202"></a>
<a href="http://bl.ocks.org/mbostock/8033015"><img src="http://bl.ocks.org/mbostock/raw/8033015/thumbnail.png" width="202"></a>
<a href="http://bl.ocks.org/mbostock/c6966db1fcb0ed2988da"><img src="http://bl.ocks.org/mbostock/raw/c6966db1fcb0ed2988da/thumbnail.png" width="202"></a>
<a href="http://bl.ocks.org/mbostock/ec10387f24c1fad2acac3bc11eb218a5"><img src="http://bl.ocks.org/mbostock/raw/ec10387f24c1fad2acac3bc11eb218a5/thumbnail.png" width="202"></a>

## Installing

NPM等安装方法略。


```html
<script src="https://d3js.org/d3-voronoi.v1.min.js"></script>
<script>

var voronoi = d3.voronoi();

</script>
```

[在浏览器中测试d3-voronoi](https://tonicdev.com/npm/d3-voronoi)

## API Reference

<a name="voronoi" href="#voronoi">#</a> d3.<b>voronoi</b>() [<>](https://github.com/d3/d3-voronoi/blob/master/src/voronoi.js "Source")

使用默认的设置创建一个 Voronoi 布局。默认的[*x*-](#voronoi_x) 和 [*y*-](#voronoi_y)访问器以及[extent](#voronoi_extent)为null。

<a name="_voronoi" href="#_voronoi">#</a> <i>voronoi</i>(<i>data</i>) [<>](https://github.com/d3/d3-voronoi/blob/master/src/voronoi.js#L10 "Source")

根据制定的一组点计算[Voronoi diagram](#voronoi-diagrams)

<a name="voronoi_x" href="#voronoi_x">#</a> <i>voronoi</i>.<b>x</b>([<i>x</i>]) [<>](https://github.com/d3/d3-voronoi/blob/master/src/voronoi.js#L31 "Source")

设置或获取*x*访问器，默认为:

```js
function x(d) {
  return d[0];
}
```

<a name="voronoi_y" href="#voronoi_y">#</a> <i>voronoi</i>.<b>y</b>([<i>y</i>]) [<>](https://github.com/d3/d3-voronoi/blob/master/src/voronoi.js#L35 "Source")

设置或获取*y*访问器，默认为:

```js
function y(d) {
  return d[1];
}
```

<a name="voronoi_extent" href="#voronoi_extent">#</a> <i>voronoi</i>.<b>extent</b>([<i>extent</i>]) [<>](https://github.com/d3/d3-voronoi/blob/master/src/voronoi.js#L39 "Source")

设置或获取Voronoi图的剪切范围。以\[\[<i>x0</i>, <i>y0</i>\], \[<i>x1</i>, <i>y1</i>\]\]的形式制定,\[<i>x0</i>, <i>y0</i>\]表示左上角坐标，\[<i>x1</i>, <i>y1</i>\]表示右下角坐标。当使用[*voronoi*.polygons](#voronoi_polygons)时，需要设置剪切范围。

<a name="voronoi_size" href="#voronoi_size">#</a> <i>voronoi</i>.<b>size</b>([<i>size</i>]) [<>](https://github.com/d3/d3-voronoi/blob/master/src/voronoi.js#L43 "Source")

[*voronoi*.extent](#voronoi_extent)的另一种别名，等价于:

```js
voronoi.extent([[0, 0], size]);
```

<a name="voronoi_polygons" href="#voronoi_polygons">#</a> <i>voronoi</i>.<b>polygons</b>(<i>data</i>) [<>](https://github.com/d3/d3-voronoi/blob/master/src/voronoi.js#L19 "Source")

返回一组多边形，每个多边形都代表一个输入的数据点。等价于:

```js
voronoi(data).polygons();
```

参考[*diagram*.polygons](#diagram_polygons). Note: an [extent](#voronoi_extent) is required.

<a name="voronoi_triangles" href="#voronoi_triangles">#</a> <i>voronoi</i>.<b>triangles</b>(<i>data</i>) [<>](https://github.com/d3/d3-voronoi/blob/master/src/voronoi.js#L27 "Source")

返回对数据进行Delaunay三角剖分后的结果,返回的每个三角形都由三个点定义等价于:

```js
voronoi(data).triangles();
```

参考[*diagram*.triangles](#diagram_triangles)

<a name="voronoi_links" href="#voronoi_links">#</a> <i>voronoi</i>.<b>links</b>(<i>data</i>) [<>](https://github.com/d3/d3-voronoi/blob/master/src/voronoi.js#L23 "Source")


返回 Delaunay 三角剖分后的点与点之间的连接，每个连线都有srouce和target两个属性，等价于：

```js
voronoi(data).links();
```

参考[*diagram*.links](#diagram_links)

### Voronoi Diagrams

<a name="diagram" href="#diagram">#</a> <i>diagram</i> [<>](https://github.com/d3/d3-voronoi/blob/master/src/Diagram.js "Source")

经过[*voronoi*](#_voronoi)计算后的 Voronoi图有以下两个属性:

* `edges` - [edges](#diagram_edge)数组.
* `cells` - [cells](#diagram_cell)数组, 一个输入点对应一个，如果有重复的点则可能为null

<a name="diagram_polygons" href="#diagram_polygons">#</a> <i>diagram</i>.<b>polygons</b>() [<>](https://github.com/d3/d3-voronoi/blob/master/src/Diagram.js#L72 "Source")

返回一个多边形数组，每个多边形都包含了一个输入点。多边形由\[*x*, *y*\]组成的数组表示。并且包含了一个*data*属性，表示其包裹的输入点。

<a name="diagram_triangles" href="#diagram_triangles">#</a> <i>diagram</i>.<b>triangles</b>() [<>](https://github.com/d3/d3-voronoi/blob/master/src/Diagram.js#L82 "Source")

返回Delaunay三角剖分后的三角形数组，三角形的三个顶点来自输入数据。

<a name="diagram_links" href="#diagram_links">#</a> <i>diagram</i>.<b>links</b>() [<>](https://github.com/d3/d3-voronoi/blob/master/src/Diagram.js#L108 "Source")

返回Delaunay三角剖分后的点与点之间的连接，每个连接都包含以下两个属性:

* `source` - 源节点，输入数据中的一个点
* `target` - 目标节点，输入数据中 的一个点

<a name="diagram_find" href="#diagram_find">#</a> <i>diagram</i>.<b>find</b>(<i>x</i>, <i>y</i>[, <i>radius</i>]) [<>](https://github.com/d3/d3-voronoi/blob/master/src/Diagram.js#L119 "Source")

返回距离点\[*x*, *y*\]最近的点. 可以指定一个半径,在指定的半径内搜索。

参考[bl.ocks.org/1b7ddbcd71454d685d1259781968aefc](http://bl.ocks.org/Fil/1b7ddbcd71454d685d1259781968aefc)

<a name="cell" href="#cell">#</a> <i>cell</i>

每个cell都包含以下属性:

* `site` - [site](#site)表示对应输入数据的一些信息。
* `halfedges` - 包围对应的点的多边形的边的索引，索引指向[*diagram*.edges](#diagram)

<a name="site" href="#site">#</a> <i>site</i>

每个site 都是一个由\[*x*, *y*\]组成的二维数组，并且包含以下两个属性:

* `index` - site的索引，对应输入数据中的索引。
* `data` - 原始输入数据

<a name="edge" href="#edge">#</a> <i>edge</i>

边数组，每个边都被定义为\[\[*x0*, *y0*\], \[*x1*, *y1*\]\]形式。并且包含以下属性:


* `left` - 边左边的[site](#site)
* `right` - 边右边的[site](#site)
