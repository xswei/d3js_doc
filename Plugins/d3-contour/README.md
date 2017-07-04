# d3-contour

[原版链接](https://github.com/d3/d3-contour)


这个库通过[marching squares](https://en.wikipedia.org/wiki/Marching_squares)计算一组数值的多边形轮廓。例如Maungawhau的拓扑轮廓(经典的`volcano`数据集和`terrain.colors`):

[<img alt="Contour Plot" src="https://raw.githubusercontent.com/d3/d3-contour/master/img/volcano.gif" width="420" height="295">](https://bl.ocks.org/mbostock/4241134)

对于每一个[threshold value(阈值)](#contours_thresholds)，[contour generator(轮廓生成器)](#_contours)都会构建一个GeoJSON的MultiPolygon对象来表示输入值大于或等于阈值的多边形区域。几何轮廓是一个平面结构，⟨<i>i</i> + 0.5, <i>j</i> + 0.5⟩ 对应输入数组数据的第<i>i</i> + <i>jn</i>个。这里是一个加载地面湿度GeoTIFF的例子，另一个是将PND进行模糊处理以平滑多边形轮廓的例子：


[<img alt="GeoTiff Contours" src="https://raw.githubusercontent.com/d3/d3-contour/master/img/temperature.png" width="420" height="219">](https://bl.ocks.org/mbostock/4886c227038510f1c103ce305bef6fcc)
[<img alt="Cloud Contours" src="https://raw.githubusercontent.com/d3/d3-contour/master/img/clouds.png" width="420" height="219">](https://bl.ocks.org/mbostock/818053c76d79d4841790c332656bf9da)

由于`contour`多边形是一个GeoJSON，因此你可以使用标准的工具对其进行变换和显示，比如[d3.geoPath](https://github.com/d3/d3-geo/blob/master/README.md#geoPath), [d3.geoProject](https://github.com/d3/d3-geo-projection/blob/master/README.md#geoProject) 和 [d3.geoStitch](https://github.com/d3/d3-geo-projection/blob/master/README.md#geoStitch)。例如地表温度与地理投影结合使用的例子:

[<img alt="GeoTiff Contours II" src="https://raw.githubusercontent.com/d3/d3-contour/master/img/reprojection.png" width="420" height="219">](https://bl.ocks.org/mbostock/83c0be21dba7602ee14982b020b12f51)

轮廓图也可以通过采样来观察连续的值变化。下图为一个Goldstein-Price函数(一个全局优化的测试函数)和一个*sin*(*x* + *y*)*sin*(*x* - *y*)的trippy 动画:


[<img alt="Contour Plot II" src="https://raw.githubusercontent.com/d3/d3-contour/master/img/goldstein-price.png" width="420" height="219">](https://bl.ocks.org/mbostock/f48ff9c1af4d637c9a518727f5fdfef5)
[<img alt="Contour Plot III" src="https://raw.githubusercontent.com/d3/d3-contour/master/img/sin-cos.png" width="420" height="219">](https://bl.ocks.org/mbostock/bf2f5f02b62b5b3bb92ae1b59b53da36)

轮廓也可以显示点云的[estimated density(密度估计)](#density-estimation)，这在大数据集中避免过度绘制很有用。这个库实现了快速二维核密度估计。参考[d3.contourDensity](#contourDensity)。下面为一个显示的是忠实泉(一个间歇式热喷泉)的空闲持续时间和喷发持续时间之间的关系:


[<img alt="Density Contours" src="https://raw.githubusercontent.com/d3/d3-contour/master/img/faithful.png" width="420" height="219">](https://bl.ocks.org/mbostock/e3f4376d54e02d5d43ae32a7cf0e6aa9)

下面为一个显示了53940颗钻石重量和价格之间的关系密度图。

[<img alt="Density Contours" src="https://raw.githubusercontent.com/d3/d3-contour/master/img/diamonds.png" width="420" height="420">](https://bl.ocks.org/mbostock/7f5f22524bd1d824dd53c535eda0187f)

## Installing

NPM等安装方法略

```html
<script src="https://d3js.org/d3-contour.v1.min.js"></script>
<script>

// Populate a grid of n×m values where -2 ≤ x ≤ 2 and -2 ≤ y ≤ 1.
var n = 256, m = 256, values = new Array(n * m);
for (var j = 0.5, k = 0; j < m; ++j) {
  for (var i = 0.5; i < n; ++i, ++k) {
    values[k] = goldsteinPrice(i / n * 4 - 2, 1 - j / m * 3);
  }
}

// Compute the contour polygons at log-spaced intervals; returns an array of MultiPolygon.
var contours = d3.contours()
    .size([n, m])
    .thresholds(d3.range(2, 21).map(p => Math.pow(2, p)))
    (values);

// See https://en.wikipedia.org/wiki/Test_functions_for_optimization
function goldsteinPrice(x, y) {
  return (1 + Math.pow(x + y + 1, 2) * (19 - 14 * x + 3 * x * x - 14 * y + 6 * x * x + 3 * y * y))
      * (30 + Math.pow(2 * x - 3 * y, 2) * (18 - 32 * x + 12 * x * x + 48 * y - 36 * x * y + 27 * y * y));
}

</script>
```

[Try d3-contour in your browser.](https://tonicdev.com/npm/d3-contour)

## API Reference

<a name="contours" href="#contours">#</a> d3.<b>contours</b>() [<>](https://github.com/d3/d3-contour/blob/master/src/contours.js "Source")

使用默认的设置构建一个`contour`生成器


<a name="_contours" href="#_contours">#</a> <i>contours</i>(<i>values</i>) [<>](https://github.com/d3/d3-contour/blob/master/src/contours.js#L34 "Source")

根据指定的*value*数组计算其对应的轮廓，返回一个[GeoJSON](http://geojson.org/geojson-spec.html) [MultiPolygon](http://geojson.org/geojson-spec.html#multipolygon) [geometry objects](http://geojson.org/geojson-spec.html#geometry-objects)数组。数组中的每一个几何对象都表示一组大于或等于[threshold value(阈值)](#contours_thresholds)的值。阈值通过<i>geometry</i>.value属性暴露。

输入的*values*必须是<i>n</i>×<i>m</i>的，也就是[<i>n</i>, <i>m</i>]为`contour`的[size(尺寸)](#contours_size)。此外，每一个[<i>i</i> + <i>jn</i>] 的 <i>values</i>必须表示⟨<i>i</i>, <i>j</i>⟩索引处的值。例如生成一个使用[Goldstein–Price function](https://en.wikipedia.org/wiki/Test_functions_for_optimization)生成的256x256的数据网格，其中-2 ≤ <i>x</i> ≤ 2 and -2 ≤ <i>y</i> ≤ 1:




```js
var n = 256, m = 256, values = new Array(n * m);
for (var j = 0.5, k = 0; j < m; ++j) {
  for (var i = 0.5; i < n; ++i, ++k) {
    values[k] = goldsteinPrice(i / n * 4 - 2, 1 - j / m * 3);
  }
}

function goldsteinPrice(x, y) {
  return (1 + Math.pow(x + y + 1, 2) * (19 - 14 * x + 3 * x * x - 14 * y + 6 * x * x + 3 * y * y))
      * (30 + Math.pow(2 * x - 3 * y, 2) * (18 - 32 * x + 12 * x * x + 48 * y - 36 * x * y + 27 * y * y));
}
```


轮廓生成器使用的数据格式为一维数组形式，但这个一维数组其实表示的是一个矩阵。`n`和`m`实际上表示的是`列`和`行`，因此一维数组中共`n*m`个元素。然后通过[<i>i</i> + <i>jn</i>]来表示第`i`行第`j`列的值(二维矩阵中)。



返回的几何对象通常被传给[d3.geoPath](https://github.com/d3/d3-geo/blob/master/README.md#geoPath)来显示，使用null或者[d3.geoIdentity](https://github.com/d3/d3-geo/blob/master/README.md#geoIdentity)来与画布进行关联。


<a name="contours_size" href="#contours_size">#</a> <i>contours</i>.<b>size</b>([<i>size</i>]) [<>](https://github.com/d3/d3-contour/blob/master/src/contours.js#L185 "Source")

设置或获取 [contour generator](#_contour)的尺寸。*size*以数组 \[<i>n</i>, <i>m</i>\]的形式指定，<i>n</i>表示二维数组的列数，<i>m</i>为行数。*n* 和 *m*必须为正值。如果没有指定*size*则返回当前的*size*, 默认为[1,1]

<a name="contours_smooth" href="#contours_smooth">#</a> <i>contours</i>.<b>smooth</b>([<i>smooth</i>]) [<>](https://github.com/d3/d3-contour/blob/master/src/contours.js#L196 "Source")

设置或获取是否对轮廓进行平滑处理，默认为true。

<a name="contours_thresholds" href="#contours_thresholds">#</a> <i>contours</i>.<b>thresholds</b>([<i>thresholds</i>]) [<>](https://github.com/d3/d3-contour/blob/master/src/contours.js#L192 "Source")


设置或获取阈值生成器。阈值的指定形式为一个数组。默认的阈值生成方式使用[Sturges’ formula](https://github.com/d3/d3-array/blob/master/README.md#thresholdSturges)来生成。


阈值通过[*x0*, *x1*, …]的数组形式指定。阈值用来对输入的矩阵进行区域划分，划分的边界根据指定的阈值来设置。也就是大于等于*x0*的为一组，大于等于*x1*的为一组，...以此类推。最后生成的几何对象中有一个value属性，表示当前对象对应的阈值大小。

如果给阈值指定了一个数值而非数组，则输入的值将会根据这个值自动进行均匀划分，也就是划分为指定的数值个。这与[d3.ticks](https://github.com/d3/d3-array/blob/master/README.md#ticks)有些类似。

## Density Estimation

<a name="contourDensity" href="#contourDensity">#</a> d3.<b>contourDensity</b>() [<>](https://github.com/d3/d3-contour/blob/master/src/density.js "Source")

使用默认的设置构建一个新的密度估计器

<a name="_density" href="#_density">#</a> <i>density</i>(<i>data</i>) [<>](https://github.com/d3/d3-contour/blob/master/src/density.js#L27 "Source")

Estimates the density contours for the given array of *data*, returning an array of [GeoJSON](http://geojson.org/geojson-spec.html) [MultiPolygon](http://geojson.org/geojson-spec.html#multipolygon) [geometry objects](http://geojson.org/geojson-spec.html#geometry-objects). Each geometry object represents the area where the estimated number of points per square pixel is greater than or equal to the corresponding [threshold value](#density_thresholds); the threshold value for each geometry object is exposed as <i>geometry</i>.value. The returned geometry objects are typically passed to [d3.geoPath](https://github.com/d3/d3-geo/blob/master/README.md#geoPath) to display, using null or [d3.geoIdentity](https://github.com/d3/d3-geo/blob/master/README.md#geoIdentity) as the associated projection. See also [d3.contours](#contours).

The *x*- and *y*-coordinate for each data point are computed using [*density*.x](#density_x) and [*density*.y](#density_y). The generated contours are only accurate within the estimator’s [defined size](#density_size).

<a name="density_x" href="#density_x">#</a> <i>density</i>.<b>x</b>([<i>x</i>]) [<>](https://github.com/d3/d3-contour/blob/master/src/density.js#L91 "Source")

If *x* is specified, sets the *x*-coordinate accessor. If *x* is not specified, returns the current *x*-coordinate accessor, which defaults to:

```js
function x(d) {
  return d[0];
}
```

<a name="density_y" href="#density_y">#</a> <i>density</i>.<b>y</b>([<i>y</i>]) [<>](https://github.com/d3/d3-contour/blob/master/src/density.js#L95 "Source")

If *y* is specified, sets the *y*-coordinate accessor. If *y* is not specified, returns the current *y*-coordinate accessor, which defaults to:

```js
function y(d) {
  return d[1];
}
```

<a name="density_size" href="#density_size">#</a> <i>density</i>.<b>size</b>([<i>size</i>]) [<>](https://github.com/d3/d3-contour/blob/master/src/density.js#L99 "Source")

If *size* is specified, sets the size of the density estimator to the specified bounds and returns the estimator. The *size* is specified as an array \[<i>width</i>, <i>height</i>\], where <i>width</i> is the maximum *x*-value and <i>height</i> is the maximum *y*-value. If *size* is not specified, returns the current size which defaults to [960, 500]. The [estimated density contours](#_density) are only accurate within the defined size.

<a name="density_cellSize" href="#density_cellSize">#</a> <i>density</i>.<b>cellSize</b>([<i>cellSize</i>]) [<>](https://github.com/d3/d3-contour/blob/master/src/density.js#L106 "Source")

If *cellSize* is specified, sets the size of individual cells in the underlying bin grid to the specified positive integer and returns the estimator. If *cellSize* is not specified, returns the current cell size, which defaults to 4. The cell size is rounded down to the nearest power of two. Smaller cells produce more detailed contour polygons, but are more expensive to compute.

<a name="density_thresholds" href="#density_thresholds">#</a> <i>density</i>.<b>thresholds</b>([<i>thresholds</i>]) [<>](https://github.com/d3/d3-contour/blob/master/src/density.js#L112 "Source")

If *thresholds* is specified, sets the threshold generator to the specified function or array and returns this contour generator. If *thresholds* is not specified, returns the current threshold generator, which by default generates about twenty nicely-rounded density thresholds.

Thresholds are defined as an array of values [*x0*, *x1*, …]. The first [generated density contour](#_density) corresponds to the area where the estimated density is greater than or equal to *x0*; the second contour corresponds to the area where the estimated density is greater than or equal to *x1*, and so on. Thus, there is exactly one generated MultiPolygon geometry object for each specified threshold value; the threshold value is exposed as <i>geometry</i>.value. The first value *x0* should typically be greater than zero.

If a *count* is specified instead of an array of *thresholds*, then approximately *count* uniformly-spaced nicely-rounded thresholds will be generated; see [d3.ticks](https://github.com/d3/d3-array/blob/master/README.md#ticks).

<a name="density_bandwidth" href="#density_bandwidth">#</a> <i>density</i>.<b>bandwidth</b>([<i>bandwidth</i>]) [<>](https://github.com/d3/d3-contour/blob/master/src/density.js#L116 "Source")

If *bandwidth* is specified, sets the bandwidth (the standard deviation) of the Gaussian kernel and returns the estimate. If *bandwidth* is not specified, returns the current bandwidth, which defaults to 20.4939…. The specified *bandwidth* is currently rounded to the nearest supported value by this implementation, and must be nonnegative.
