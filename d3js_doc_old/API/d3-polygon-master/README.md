# d3-polygon

这个模块提供了二维多边形的基本几何操作。每个多边形都被定义为一组顶点组成的数组[​[<i>x1</i>, <i>y1</i>], [<i>x2</i>, <i>y2</i>], …], 可能是闭合的也可能是开放的. 通常情况下，多边形是逆时针绘制的(坐标原点在左上角).

## Installing

NPM等安装方法略

```html
<script src="https://d3js.org/d3-polygon.v1.min.js"></script>
<script>

var hull = d3.polygonHull(points);

</script>
```

[在浏览器中测试d3-polygon.](https://tonicdev.com/npm/d3-polygon)

## API Reference

<a href="#polygonArea" name="polygonArea">#</a> d3.<b>polygonArea</b>(<i>polygon</i>) [<>](https://github.com/d3/d3-polygon/blob/master/src/area.js#L1 "Source Code")

返回指定多边形的面积，多边形如果为顺时针则返回负值。如果为逆时针则返回正值，默认以左上角<0,0>点为原点。

<a href="#polygonCentroid" name="polygonCentroid">#</a> d3.<b>polygonCentroid</b>(<i>polygon</i>) [<>](https://github.com/d3/d3-polygon/blob/master/src/centroid.js#L1 "Source Code")

返回指定多边形的 [中心](https://en.wikipedia.org/wiki/Centroid).

<a href="#polygonHull" name="polygonHull">#</a> d3.<b>polygonHull</b>(<i>points</i>) [<>](https://github.com/d3/d3-polygon/blob/master/src/hull.js#L23 "Source Code")

<a href="http://bl.ocks.org/mbostock/6f14f7b7f267a85f7cdc"><img src="https://raw.githubusercontent.com/d3/d3-polygon/master/img/hull.png" width="250" height="250"></a>

返回一个刚好包裹指定点的[凸多边形](https://en.wikipedia.org/wiki/Convex_hull)，使用的是 [Andrew’s monotone chain 算法](http://en.wikibooks.org/wiki/Algorithm_Implementation/Geometry/Convex_hull/Monotone_chain). 返回的值是一系列点，这些点连接起来刚好可以将输入的点全部包裹，如果输入的点少于3个，则返回null

<a href="#polygonContains" name="polygonContains">#</a> d3.<b>polygonContains</b>(<i>polygon</i>, <i>point</i>) [<>](https://github.com/d3/d3-polygon/blob/master/src/contains.js#L1 "Source Code")

如果指定的*point*位于*ploygon*中则返回true。关于点与多边形的关系，可以参考[inside the specified *polygon*](https://www.ecse.rpi.edu/Homepages/wrf/Research/Short_Notes/pnpoly.html).

<a href="#polygonLength" name="polygonLength">#</a> d3.<b>polygonLength</b>(<i>polygon</i>) [<>](https://github.com/d3/d3-polygon/blob/master/src/length.js#L1 "Source Code")

计算指定多边形的周长。
