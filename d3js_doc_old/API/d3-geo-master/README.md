# d3-geo

地图投影实际上是实现了从经纬度到屏幕坐标点的相互转化，比如墨卡投影:

```js
function mercator(x, y) {
  return [x, Math.log(Math.tan(Math.PI / 4 + y / 2))];
}
```

如果你的点集是一个包含无限个点的连续集，则这在数学上是行得通的。但是在计算机中不能计算无限多个点，因此在地理几何中要使用离散的点表示一个几何特征。

在几何上，将一个曲面(地球球面)投影到平面上是很困难的，曲面的边界不是直线，而是[geodesics(测地线)](https://en.wikipedia.org/wiki/Geodesic)。要将其投影到平面上，除了[gnomonic(日晷投影)](#geoGnomonic)之外所有的投影的测地线都是曲线，因此准确的投影需要顺着弧度进行插值。D3使用基于[line simplification method(线简化方法)](https://bost.ocks.org/mike/simplify/)的[adaptive sampling(自适应采样)](https://bl.ocks.org/mbostock/3795544)来对精度和性能进行平衡。

无论是对多边形还是折线进行投影都必须处理曲面和平面之间的差异。有一些投影需要[crosses the antimeridian(穿过180度经线)](https://bl.ocks.org/mbostock/3788999)裁剪几何，而有些需要[clipping geometry to a great circle(裁剪几何大圆)](http://bl.ocks.org/mbostock/3021474)。

球面多边形还需要一个[winding order convention(约定)](https://bl.ocks.org/mbostock/a7bdfeb041e850799a8d3dce4d8c50c8)来定义那一侧属于内侧，哪一侧属于外侧：多角形的外环小于半球必须是顺时针方向，而多边形的外环大于半球必须是逆时针方向的。这个约定也被[TopoJSON](https://github.com/topojson) 和 [ESRI shapefiles](https://github.com/mbostock/shapefile)使用。但是这个规则与GeoJSON 的 [RFC 7946](https://tools.ietf.org/html/rfc7946#section-3.1.6)标准相反。另请注意，标准的GeoJSON WGS84使用平面等角坐标，而不是球面坐标，因此可能需要对180度经线进行[stitching(拼接)](https://github.com/d3/d3-geo-projection/blob/master/README.md#geostitch)以移除缝隙。


D3的方法提供了丰富的表现力:你可以根据你的数据选择正确的投影，D3支持各种常见的和[unusual map projections(不常见的地图投影)](https://github.com/d3/d3-geo-projection)。更多参考[The Toolmaker’s Guide](https://vimeo.com/106198518#t=20m0s)和[The Toolmaker’s Guide](https://vimeo.com/106198518#t=20m0s).

D3使用[GeoJSON](http://geojson.org/geojson-spec.html)来表示地理几何特性([TopoJSON(拓扑JSON)](https://github.com/mbostock/topojson)是GeoJSON的扩展版本，简化了JSON文件,可以使用ogr2ogr转为GeoJSON)。除此之外，[map projections](#projections)还包含了有用的[spherical shape generators(球面几何生成器)](#spherical-shapes)和[spherical math utilities(球面数学工具)](#spherical-math).

## Installing

NPM等安装方法略

```html
<script src="https://d3js.org/d3-array.v1.min.js"></script>
<script src="https://d3js.org/d3-geo.v1.min.js"></script>
<script>

var projection = d3.geoAlbers(),
    path = d3.geoPath(projection);

</script>
```

[在浏览器中测试d3-geo](https://tonicdev.com/npm/d3-geo)

## API Reference

* [Paths(路径)](#paths)
* [Projections(投影)](#projections) ([Azimuthal(方位角)](#azimuthal-projections), [Composite(合成投影)](#composite-projections), [Conic(锥)](#conic-projections), [Cylindrical(圆柱)](#cylindrical-projections))
* [Raw Projections(原始|自定义投影)](#raw-projections)
* [Spherical Math(球面数学)](#spherical-math)
* [Spherical Shapes(球面几何)](#spherical-shapes)
* [Streams(流)](#streams)
* [Transforms(变换)](#transforms)

### Paths

地理路径生成器[d3.geoPath](#geoPath)，有些类似[d3-shape](https://github.com/d3/d3-shape):给定一个GeoJSON几何或特征对象，生成一个SVG路径或[renders the path to a Canvas(渲染路径信息到canvas)](http://bl.ocks.org/mbostock/3783604)。canvas在创建动态和交互式投影时性能好，应当首先考虑使用。路径可以使用[projections](#projections) 或 [transforms](#transforms), 也可以直接渲染到SVG或Canvas。

<a href="#geoPath" name="geoPath">#</a> d3.<b>geoPath</b>([<i>projection</i>[, <i>context</i>]]) [<>](https://github.com/d3/d3-geo/blob/master/src/path/index.js "Source")

使用默认的设置构建一个地理路径生成器。如果指定了*projection*则将其设置为[current projection(当前投影)](#path_projection)。如果指定了*context*则设置为[current context(当前上下文)](#path_context).


<a href="_path" name="_path">#</a> <i>path</i>(<i>object</i>[, <i>arguments…</i>]) [<>](https://github.com/d3/d3-geo/blob/master/src/path/index.js#L16 "Source")

渲染指定的对象，可以为一个GeoJSON特征或几何对象:

* Point - 一个单一的点
* MultiPoint - 一组点
* LineString - 一组线条上的连续的点
* MultiLineString - 多条线条的上的一组点
* Polygon - 表示一个多边形的一组点
* MultiPolygon - 一个表示多个多边形的多维数组
* GeometryCollection - 一个几何对象数组
* Feature - 一个表示几何对象的特征
* FeatureCollection - 一组特征对象

也支持用来渲染地球轮廓的*Sphere(球)*，这在渲染地球轮廓的时候很有用；球没有坐标。所有的*arguments*会被传递给[pointRadius](#path_pointRadius)访问器。

为了显示多个特征，需要将他们与特征集合结合:

```js
svg.append("path")
    .datum({type: "FeatureCollection", features: features})
    .attr("d", d3.geoPath());
```

//上述例子中所有的几何特征都会合成为一个path

或者使用多个path元素:

```js
svg.selectAll("path")
  .data(features)
  .enter().append("path")
    .attr("d", d3.geoPath());
```

拆分为多个path元素通常比单一的path元素更慢。然而独立的path在单独设置样式或交互时是很有用的。Cnavas渲染通常比SVG更快，但是需要在样式和交互上做更多的额外工作。

<a href="#path_area" name="path_area">#</a> <i>path</i>.<b>area</b>(<i>object</i>) [<>](https://github.com/d3/d3-geo/blob/master/src/path/index.js#L24 "Source")

返回指定GeoJSON对象投影的面的面积(平方像素)。Point, MultiPoint, LineString 和 MultiLineString的面积为0。对于多边形和多边形集合特征这个方法会首先计算最外层包围的面积，然后减去中间孔洞的面积。这个方法遵守[projection](#path_projection)的剪切方式。参考[*projection*.clipAngle](#projection_clipAngle) 和 [*projection*.clipExtent](#projection_clipExtent).

<a href="#path_bounds" name="path_bounds">#</a> <i>path</i>.<b>bounds</b>(<i>object</i>) [<>](https://github.com/d3/d3-geo/blob/master/src/path/index.js#L29 "Source")

返回指定GeoJSON对象投影面的包围框。最终结果为二维数组形式:\[\[*x₀*, *y₀*\], \[*x₁*, *y₁*\]\]. 这个方法遵守[projection](#path_projection)的剪切方式。参考[*projection*.clipAngle](#projection_clipAngle) 和 [*projection*.clipExtent](#projection_clipExtent).

<a href="#path_centroid" name="path_centroid">#</a> <i>path</i>.<b>centroid</b>(<i>object</i>) [<>](https://github.com/d3/d3-geo/blob/master/src/path/index.js#L34 "Source")

返回指定GeoJSON对象投影面的几何中心。这个方法遵守[projection](#path_projection)的剪切方式。参考[*projection*.clipAngle](#projection_clipAngle) 和 [*projection*.clipExtent](#projection_clipExtent).

<a href="#path_projection" name="path_projection">#</a> <i>path</i>.<b>projection</b>([<i>projection</i>]) [<>](https://github.com/d3/d3-geo/blob/master/src/path/index.js#L39 "Source")

设置或获取地理路径生成器的投影方式, 默认为null. 投影方式为null时候也就是直接将经纬度当屏幕坐标使用。

投影通常为D3内置的[geographic projections(地理投影)](#projections); 但是任何表示[*projection*.stream](#projection_stream)的函数都可以使用, 满足[custom projections(自定义投影)](http://bl.ocks.org/mbostock/5663666)的需求. 参考[transforms](#transforms)获取更多关于任意几何变换的例子

<a href="#path_context" name="path_context">#</a> <i>path</i>.<b>context</b>([<i>context</i>]) [<>](https://github.com/d3/d3-geo/blob/master/src/path/index.js#L43 "Source")

如果指定了*context*则设将路径信息保存到指定的上下文中。context一定要包含[CanvasRenderingContext2D API](https://www.w3.org/TR/2dcontext/#canvasrenderingcontext2d)的以下方法:

* *context*.beginPath()
* *context*.moveTo(*x*, *y*)
* *context*.lineTo(*x*, *y*)
* *context*.arc(*x*, *y*, *radius*, *startAngle*, *endAngle*)
* *context*.closePath()

如果没有指定*context*则返回当前的渲染上下文，默认为null


<a href="#path_pointRadius" name="path_pointRadius">#</a> <i>path</i>.<b>pointRadius</b>([<i>radius</i>]) [<>](https://github.com/d3/d3-geo/blob/master/src/path/index.js#L50 "Source")

设置或获取点或者点集中点的半径大小，默认为4.5. 半径可以为常量也可以为计算每个特征的函数。这个函数会被传递给[path generator](#_path)调用。比如如果你的GeoJSON有其他的额外的属性，则可以通过这个属性来设置点的大小。也可以使用[d3.symbol](https://github.com/d3/d3-shape#symbols) 和 [projection](#geoProjection)来生成更多的形状。

### Projections

投影的作用在于将球面多边形转为平面多边形，D3提供了几种标准的投影:

* [Azimuthal(方位角投影)](#azimuthal-projections)
* [Composite(复合投影)](#composite-projections)
* [Conic(圆锥投影)](#conic-projections)
* [Cylindrical(圆柱投影)](#cylindrical-projections)

大多数投影可以参考[d3-geo-projection](https://github.com/d3/d3-geo-projection). 你也可以通过[d3.geoProjection](#geoProjection) 或 [d3.geoProjectionMutator](#geoProjectionMutator)来实现[custom projections(自定义投影)](#raw-projections)

<a href="#_projection" name="_projection">#</a> <i>projection</i>(<i>point</i>) [<>](https://github.com/d3/d3-geo/blob/master/src/projection/index.js#L34 "Source")

根据指定的表示经纬度的\[*longitude*, *latitude*\]返回一个投影后对应的屏幕点坐标\[*x*, *y*\], 也可能返回null,比如给定的坐标点位于投影裁剪范围之外。

<a href="#projection_invert" name="projection_invert">#</a> <i>projection</i>.<b>invert</b>(<i>point</i>) [<>](https://github.com/d3/d3-geo/blob/master/src/projection/index.js#L39 "Source")

逆投影，根据坐标点返回经纬度。如果给定的点在投影裁剪区域之外则返回null。

这个方法只在可逆计算的投影中定义。

<a href="#projection_stream" name="projection_stream">#</a> <i>projection</i>.<b>stream</b>(<i>stream</i>) [<>](https://github.com/d3/d3-geo/blob/master/src/projection/index.js#L48 "Source")


为指定的输出流返回一个[projection stream(投影流)](#streams)。在输出之前会对输入做投影转换。一个典型的转换过程 : 输入的几何首先被转换为三维坐标中的弧度以及角度,然后裁剪为小圆或者沿着180度经线剪,最后自适应采样并通过缩放平移等变换投影到平面。

<a href="#projection_clipAngle" name="projection_clipAngle">#</a> <i>projection</i>.<b>clipAngle</b>([<i>angle</i>]) [<>](https://github.com/d3/d3-geo/blob/master/src/projection/index.js#L52 "Source")

设置或获取投影的裁剪大圆的角度。如果*angle*为null则表示为[antimeridian cutting(沿着180度经线)](http://bl.ocks.org/mbostock/3788999)。与[*projection*.clipExtent](#projection_clipExtent)相互独立。

<a href="#projection_clipExtent" name="projection_clipExtent">#</a> <i>projection</i>.<b>clipExtent</b>([<i>extent</i>]) [<>](https://github.com/d3/d3-geo/blob/master/src/projection/index.js#L56 "Source")

设置或获取投影的视口裁剪范围。以\[\[<i>x₀</i>, <i>y₀</i>\], \[<i>x₁</i>, <i>y₁</i>\]\]的形式指定, <i>x₀</i>表示视口的左边界, <i>y₀</i>表示上边界, <i>x₁</i> 表示右边界<i>y₁</i> 表示下边界. 如果 *extent*为null,则表示不使用视口裁剪。视口裁剪与[*projection*.clipAngle](#projection_clipAngle)相互独立.

<a href="#projection_scale" name="projection_scale">#</a> <i>projection</i>.<b>scale</b>([<i>scale</i>]) [<>](https://github.com/d3/d3-geo/blob/master/src/projection/index.js#L60 "Source")

设置或获取投影的缩放因子。不同的投影有不同的默认值

<a href="#projection_translate" name="projection_translate">#</a> <i>projection</i>.<b>translate</b>([<i>translate</i>]) [<>](https://github.com/d3/d3-geo/blob/master/src/projection/index.js#L64v "Source")

设置或获取投影的平移偏移量。默认为[480, 250]。等于在一个`960 x 500` 的区域中确定了投影[center(中心)](#projection_center)

<a href="#projection_center" name="projection_center">#</a> <i>projection</i>.<b>center</b>([<i>center</i>]) [<>](https://github.com/d3/d3-geo/blob/master/src/projection/index.js#L68 "Source")

设置或获取投影的中心，参数以经纬度的形式指定。默认为 ⟨0°,0°⟩.

<a href="#projection_rotate" name="projection_rotate">#</a> <i>projection</i>.<b>rotate</b>([<i>angles</i>]) [<>](https://github.com/d3/d3-geo/blob/master/src/projection/index.js#L72 "Source")

设置或获取投影的[three-axis rotation(三轴旋转)](http://bl.ocks.org/mbostock/4282586)。必须通过二元或三元数组指定，分别表示[*lambda*, *phi*, *gamma*], 这三个值表示围绕[each spherical axis(三维轴)]上的选择角度(http://bl.ocks.org/mbostock/4282586). 默认为[0,0,0], *gamma*默认为0，参考[d3.geoRotation](#geoRotation)

<a href="#projection_precision" name="projection_precision">#</a> <i>projection</i>.<b>precision</b>([<i>precision</i>]) [<>](https://github.com/d3/d3-geo/blob/master/src/projection/index.js#L76 "Source")

设置或获取投影采样精度，这个参数会传递给[Douglas–Peucker](http://en.wikipedia.org/wiki/Ramer–Douglas–Peucker_algorithm)使用，默认为√0.5 ≅ 0.70710…

<a href="#projection_fitExtent" name="projection_fitExtent">#</a> <i>projection</i>.<b>fitExtent</b>(<i>extent</i>, <i>object</i>) [<>](https://github.com/d3/d3-geo/blob/master/src/projection/index.js#L80 "Source")

自动设置投影的[scale](#projection_scale) 和 [translate](#projection_translate)来使得GeoJSON对象适应指定的*extent*. *extent*通过\[\[x₀, y₀\], \[x₁, y₁\]\]的形式指定。

参考[New Jersey State Plane projection](http://bl.ocks.org/mbostock/5126418)，在这个例子中nj表示GeoJSON对象，将其自适应调整在960×500,并且边界为20:

```js
var projection = d3.geoTransverseMercator()
    .rotate([74 + 30 / 60, -38 - 50 / 60])
    .fitExtent([[20, 20], [940, 480]], nj);
```

如果也设置了[clip extent](#projection_clipExtent),则[clip extent](#projection_clipExtent)会被忽略。

<a href="#projection_fitSize" name="projection_fitSize">#</a> <i>projection</i>.<b>fitSize</b>(<i>size</i>, <i>object</i>) [<>](https://github.com/d3/d3-geo/blob/master/src/projection/index.js#L82 "Source")

[*projection*.fitExtent](#projection_fitExtent)的一个简便方法(左上角坐标为[0,0]时)，如下两个是等价的：

```js
projection.fitExtent([[0, 0], [width, height]], object);
projection.fitSize([width, height], object);
```

#### Azimuthal Projections

方位角投影直接将球体投影到平面上。

方位投影是一类投影，具体还可以细分


<a href="#geoAzimuthalEqualArea" name="geoAzimuthalEqualArea">#</a> d3.<b>geoAzimuthalEqualArea</b>() [<>](https://github.com/d3/d3-geo/blob/master/src/projection/azimuthalEqualArea.js "Source")
<br><a href="#geoAzimuthalEqualAreaRaw" name="geoAzimuthalEqualAreaRaw">#</a> d3.<b>geoAzimuthalEqualAreaRaw</b>

[<img src="https://raw.githubusercontent.com/d3/d3-geo/master/img/azimuthalEqualArea.png" width="480" height="250">](http://bl.ocks.org/mbostock/3757101)

等面积投影

<a href="#geoAzimuthalEquidistant" name="geoAzimuthalEquidistant">#</a> d3.<b>geoAzimuthalEquidistant</b>() [<>](https://github.com/d3/d3-geo/blob/master/src/projection/azimuthalEquidistant.js "Source")
<br><a href="#geoAzimuthalEquidistantRaw" name="geoAzimuthalEquidistantRaw">#</a> d3.<b>geoAzimuthalEquidistantRaw</b>

[<img src="https://raw.githubusercontent.com/d3/d3-geo/master/img/azimuthalEquidistant.png" width="480" height="250">](http://bl.ocks.org/mbostock/3757110)

等距投影

<a href="#geoGnomonic" name="geoGnomonic">#</a> d3.<b>geoGnomonic</b>() [<>](https://github.com/d3/d3-geo/blob/master/src/projection/gnomonic.js "Source")
<br><a href="#geoGnomonicRaw" name="geoGnomonicRaw">#</a> d3.<b>geoGnomonicRaw</b>

[<img src="https://raw.githubusercontent.com/d3/d3-geo/master/img/gnomonic.png" width="480" height="250">](http://bl.ocks.org/mbostock/3757349)

球心投影

<a href="#geoOrthographic" name="geoOrthographic">#</a> d3.<b>geoOrthographic</b>() [<>](https://github.com/d3/d3-geo/blob/master/src/projection/orthographic.js "Source")
<br><a href="#geoOrthographicRaw" name="geoOrthographicRaw">#</a> d3.<b>geoOrthographicRaw</b>

[<img src="https://raw.githubusercontent.com/d3/d3-geo/master/img/orthographic.png" width="480" height="250">](http://bl.ocks.org/mbostock/3757125)

正交投影

<a href="#geoStereographic" name="geoStereographic">#</a> d3.<b>geoStereographic</b>() [<>](https://github.com/d3/d3-geo/blob/master/src/projection/stereographic.js "Source")
<br><a href="#geoStereographicRaw" name="geoStereographicRaw">#</a> d3.<b>geoStereographicRaw</b>

[<img src="https://raw.githubusercontent.com/d3/d3-geo/master/img/stereographic.png" width="480" height="250">](http://bl.ocks.org/mbostock/3757137)

球面投影

#### Composite Projections

复合投影由几种不同的投影组成。复合投影自带fixed clip,center 和 rotation。不支持[*projection*.center](#projection_center), [*projection*.rotate](#projection_rotate), [*projection*.clipAngle](#projection_clipAngle), [*projection*.clipExtent](#projection_clipExtent).

<a href="#geoAlbersUsa" name="geoAlbersUsa">#</a> d3.<b>geoAlbersUsa</b>() [<>](https://github.com/d3/d3-geo/blob/master/src/projection/albersUsa.js "Source")

[<img src="https://raw.githubusercontent.com/d3/d3-geo/master/img/albersUsa.png" width="480" height="250">](http://bl.ocks.org/mbostock/4090848) 

以美国为中心的[d3.geoConicEqualArea](#geoConicEqualArea) 投影:

[<img src="https://raw.githubusercontent.com/d3/d3-geo/master/img/albersUsa-parameters.png" width="480" height="250">](https://bl.ocks.org/Fil/7723167596af40d9159be34ffbf8d36b)

更多的例子参考[d3-composite-projections](http://geoexamples.com/d3-composite-projections/)

#### Conic Projections

圆锥投影将球面覆盖到一个圆锥上，然后在展开到平面上。圆锥投影包括[two standard parallels(双标准纬线)](#conic_parallels)等积投影。


<a href="#conic_parallels" name="conic_parallels">#</a> <i>conic</i>.<b>parallels</b>([<i>parallels</i>]) [<>](https://github.com/d3/d3-geo/blob/master/src/projection/conic.js#L10 "Source")

[two standard parallels(双标准纬线)](#conic_parallels)定义了投影的地图布局。

<a href="#geoAlbers" name="geoAlbers">#</a> d3.<b>geoAlbers</b>() [<>](https://github.com/d3/d3-geo/blob/master/src/projection/albers.js "Source")

[<img src="https://raw.githubusercontent.com/d3/d3-geo/master/img/albers.png" width="480" height="250">](http://bl.ocks.org/mbostock/3734308)

阿尔伯斯投影

<a href="#geoConicConformal" name="geoConicConformal">#</a> d3.<b>geoConicConformal</b>() [<>](https://github.com/d3/d3-geo/blob/master/src/projection/conicConformal.js "Source")
<br><a href="#geoConicConformalRaw" name="geoConicConformalRaw">#</a> d3.<b>geoConicConformalRaw</b>(<i>phi0</i>, <i>phi1</i>) [<>](https://github.com/d3/d3-geo/blob/master/src/projection/conicConformal.js "Source")

[<img src="https://raw.githubusercontent.com/d3/d3-geo/master/img/conicConformal.png" width="480" height="250">](http://bl.ocks.org/mbostock/3734321)

兰伯特正形圆锥投影，双标准纬线默认为[30°, 30°].

<a href="#geoConicEqualArea" name="geoConicEqualArea">#</a> d3.<b>geoConicEqualArea</b>() [<>](https://github.com/d3/d3-geo/blob/master/src/projection/conicEqualArea.js "Source")
<br><a href="#geoConicEqualAreaRaw" name="geoConicEqualAreaRaw">#</a> d3.<b>geoConicEqualAreaRaw</b>(<i>phi0</i>, <i>phi1</i>) [<>](https://github.com/d3/d3-geo/blob/master/src/projection/conicEqualArea.js "Source")

[<img src="https://raw.githubusercontent.com/d3/d3-geo/master/img/conicEqualArea.png" width="480" height="250">](http://bl.ocks.org/mbostock/3734308)

双标准纬线等积圆锥投影

<a href="#geoConicEquidistant" name="geoConicEquidistant">#</a> d3.<b>geoConicEquidistant</b>() [<>](https://github.com/d3/d3-geo/blob/master/src/projection/conicEquidistant.js "Source")
<br><a href="#geoConicEquidistantRaw" name="geoConicEquidistantRaw">#</a> d3.<b>geoConicEquidistantRaw</b>(<i>phi0</i>, <i>phi1</i>) [<>](https://github.com/d3/d3-geo/blob/master/src/projection/conicEquidistant.js "Source")

[<img src="https://raw.githubusercontent.com/d3/d3-geo/master/img/conicEquidistant.png" width="480" height="250">](http://bl.ocks.org/mbostock/3734317)

双标准纬线等距圆锥投影

#### Cylindrical Projections

圆柱投影先将球面映射到一个圆柱球面上，然后再将圆柱展开。

<a href="#geoEquirectangular" name="geoEquirectangular">#</a> d3.<b>geoEquirectangular</b>() [<>](https://github.com/d3/d3-geo/blob/master/src/projection/equirectangular.js "Source")
<br><a href="#geoEquirectangularRaw" name="geoEquirectangularRaw">#</a> d3.<b>geoEquirectangularRaw</b>

[<img src="https://raw.githubusercontent.com/d3/d3-geo/master/img/equirectangular.png" width="480" height="250">](http://bl.ocks.org/mbostock/3757119)

普通圆柱投影。


<a href="#geoMercator" name="geoMercator">#</a> d3.<b>geoMercator</b>() [<>](https://github.com/d3/d3-geo/blob/master/src/projection/mercator.js "Source")
<br><a href="#geoMercatorRaw" name="geoMercatorRaw">#</a> d3.<b>geoMercatorRaw</b>

[<img src="https://raw.githubusercontent.com/d3/d3-geo/master/img/mercator.png" width="480" height="250">](http://bl.ocks.org/mbostock/3757132)

默认[*projection*.clipExtent](#projection_clipExtent)为±85°经度的墨卡托投影。

<a href="#geoTransverseMercator" name="geoTransverseMercator">#</a> d3.<b>geoTransverseMercator</b>() [<>](https://github.com/d3/d3-geo/blob/master/src/projection/transverseMercator.js "Source")
<br><a href="#geoTransverseMercatorRaw" name="geoTransverseMercatorRaw">#</a> d3.<b>geoTransverseMercatorRaw</b>

[<img src="https://raw.githubusercontent.com/d3/d3-geo/master/img/transverseMercator.png" width="480" height="250">](http://bl.ocks.org/mbostock/5126418)

横向墨卡托投影。

### Raw Projections

Raw projections(自定义投影)是一个点与点之间相互转化的函数。通常被传递给[d3.geoProjection](#geoProjection) 或 [d3.geoProjectionMutator](#geoProjectionMutator)使用。原始投影接受球面经坐标\[*lambda*, *phi*\](弧度制)然后返回点\[*x*, *y*\]


<a href="#_project" name="_project">#</a> <i>project</i>(<i>lambda</i>, <i>phi</i>)

将点[<i>lambda</i>, <i>phi</i>]转化为新的坐标\[*x*, *y*\].

<a href="#project_invert" name="project_invert">#</a> <i>project</i>.<b>invert</b>(<i>x</i>, <i>y</i>)

[*project*](#_project)的逆转换 

<a href="#geoProjection" name="geoProjection">#</a> d3.<b>geoProjection</b>(<i>project</i>) [<>](https://github.com/d3/d3-geo/blob/master/src/projection/index.js#L18 "Source")

根据指定的[raw projection](#_project)构建一个新的自定义的投影*project*。*project*接收*longitude* 和 *latitude*的弧度表示为参数，返回\[*x*, *y*\]。自定义的投影不需要对点进行缩放平移，会自动调用[*projection*.scale](#projection_scale), [*projection*.translate](#projection_translate), 和 [*projection*.center](#projection_center). 

如墨卡托投影的实现如下:

```js
var mercator = d3.geoProjection(function(x, y) {
  return [x, Math.log(Math.tan(Math.PI / 4 + y / 2))];
});
```

<a href="#geoProjectionMutator" name="geoProjectionMutator">#</a> d3.<b>geoProjectionMutator</b>(<i>factory</i>) [<>](https://github.com/d3/d3-geo/blob/master/src/projection/index.js#L22 "Source")

根据指定的[raw projection](#_project)构建一个新的投影并返回一个*mutate*函数来检测[raw projection](#_project)的变化。比如[d3.geoConicEqualAreaRaw](#geoConicEqualAreaRaw), 的形式如下:

```js
// y0 and y1 represent two parallels
function conicFactory(phi0, phi1) {
  return function conicRaw(lambda, phi) {
    return […, …];
  };
}
```

使用d3.geoProjectionMutator可以实现一个标准的纬线可以改变的投影:

```js
function conicCustom() {
  var phi0 = 29.5,
      phi1 = 45.5,
      mutate = d3.geoProjectionMutator(conicFactory),
      projection = mutate(phi0, phi1);

  projection.parallels = function(_) {
    return arguments.length ? mutate(phi0 = +_[0], phi1 = +_[1]) : [phi0, phi1];
  };

  return projection;
}
```

### Spherical Math

球面数学

<a name="geoArea" href="#geoArea">#</a> d3.<b>geoArea</b>(<i>feature</i>) [<>](https://github.com/d3/d3-geo/blob/master/src/area.js "Source")

返回指定的GeoJSON特征代表的球面的面积，使用[steradians](http://mathworld.wolfram.com/Steradian.html)表示


<a name="geoBounds" href="#geoBounds">#</a> d3.<b>geoBounds</b>(<i>feature</i>) [<>](https://github.com/d3/d3-geo/blob/master/src/bounds.js "Source")

返回指定GeoJSON特征的包围框。返回值为二维数组\[\[*left*, *bottom*], \[*right*, *top*\]\], *left*表示最小经度，*bottom* 表示latitude, *right* 表示最大经度, *top*表示最大维度

<a name="geoCentroid" href="#geoCentroid">#</a> d3.<b>geoCentroid</b>(<i>feature</i>) [<>](https://github.com/d3/d3-geo/blob/master/src/centroid.js "Source")

返回指定GeoJSON特征几何中心

<a name="geoDistance" href="#geoDistance">#</a> d3.<b>geoDistance</b>(<i>a</i>, <i>b</i>) [<>](https://github.com/d3/d3-geo/blob/master/src/distance.js "Source")

返回a到b之间的弧度距离(球心到a-球心到b之间的弧度差)

<a name="geoLength" href="#geoLength">#</a> d3.<b>geoLength</b>(<i>feature</i>) [<>](https://github.com/d3/d3-geo/blob/master/src/length.js "Source")

返回指定GeoJSON的弧长(对于多边形则返回周长)

<a name="geoInterpolate" href="#geoInterpolate">#</a> d3.<b>geoInterpolate</b>(<i>a</i>, <i>b</i>) [<>](https://github.com/d3/d3-geo/blob/master/src/interpolate.js "Source")

返回一个介于a和b之间的插值器。插值方式为以a为起点b为终点，参数[0,1]，沿着a和b之间的大弧

<a name="geoRotation" href="#geoRotation">#</a> d3.<b>geoRotation</b>(<i>angles</i>) [<>](https://github.com/d3/d3-geo/blob/master/src/rotation.js "Source")

根据指定的角度返回一个[rotation function(旋转函数)](#_rotation)。角度是一个二维或三维数组表示[*lambda*, *phi*, *gamma*]，围绕三个轴的旋转量。*gamma*默认为0。

<a name="_rotation" href="#_rotation">#</a> <i>rotation</i>(<i>point</i>) [<>](https://github.com/d3/d3-geo/blob/master/src/rotation.js#L35 "Source")

返回指定的\[*longitude*, *latitude*\]经过旋转后的坐标点

<a name="rotation_invert" href="#rotation_invert">#</a> <i>rotation</i>.<b>invert</b>(<i>point</i>) [<>](https://github.com/d3/d3-geo/blob/master/src/rotation.js#L47 "Source")

逆旋转，根据指定的点计算出该点是经过哪个点旋转后得到的

### Spherical Shapes

在生成[great arc](https://en.wikipedia.org/wiki/Great-circle_distance)时，只需交将表示弧线的GeoJSON传递给 [d3.geoPath](#geoPath)，然后D3的投影会使用插值来生成一系列点，所以不需要大弧线生成器。

<a name="geoCircle" href="#geoCircle">#</a> d3.<b>geoCircle</b>() [<>](https://github.com/d3/d3-geo/blob/master/src/circle.js "Source")

返回一个新的圆生成器

<a name="_circle" href="#_circle">#</a> <i>circle</i>(<i>arguments…</i>) [<>](https://github.com/d3/d3-geo/blob/master/src/circle.js#L47 "Source")

根据指定的参数返回一个接近圆的使用GeoJSON表示的多边形。

<a name="circle_center" href="#circle_center">#</a> <i>circle</i>.<b>center</b>([<i>center</i>]) [<>](https://github.com/d3/d3-geo/blob/master/src/circle.js#L59 "Source")

设置或获取圆的中心。以\[*longitude*, *latitude*\]的形式指定。 默认为:

```js
function center() {
  return [0, 0];
}
```

<a name="circle_radius" href="#circle_radius">#</a> <i>circle</i>.<b>radius</b>([<i>radius</i>]) [<>](https://github.com/d3/d3-geo/blob/master/src/circle.js#L63 "Source")

设置或获取圆的半径，默认为；

```js
function radius() {
  return 90;
}
```

<a name="circle_precision" href="#circle_precision">#</a> <i>circle</i>.<b>precision</b>([<i>angle</i>]) [<>](https://github.com/d3/d3-geo/blob/master/src/circle.js#L67 "Source")

设置或获取圆的精度，精度越高，最后的多边形越接近圆，但是计算更复杂，默认为:

```js
function precision() {
  return 6;
}
```

<a name="geoGraticule" href="#geoGraticule">#</a> d3.<b>geoGraticule</b>() [<>](https://github.com/d3/d3-geo/blob/master/src/graticule.js "Source")

创建一个经纬度网格生成器: 默认的网格在±80°之间每隔10度有一个维度线。

<img src="https://raw.githubusercontent.com/d3/d3-geo/master/img/graticule.png" width="480" height="360">

<a name="_graticule" href="#_graticule">#</a> <i>graticule</i>() [<>](https://github.com/d3/d3-geo/blob/master/src/graticule.js#L21 "Source")

返回一个 GeoJSON MultiLineString几何对象，表示所有的经线和纬线

<a name="graticule_lines" href="#graticule_lines">#</a> <i>graticule</i>.<b>lines</b>() [<>](https://github.com/d3/d3-geo/blob/master/src/graticule.js#L32 "Source")

返回一组表示经线和纬线的GeoJSON LineString几何对象

<a name="graticule_outline" href="#graticule_outline">#</a> <i>graticule</i>.<b>outline</b>() [<>](https://github.com/d3/d3-geo/blob/master/src/graticule.js#L36 "Source")

返回一个GeoJSON Polygon几何对象表示轮廓

<a name="graticule_extent" href="#graticule_extent">#</a> <i>graticule</i>.<b>extent</b>([<i>extent</i>]) [<>](https://github.com/d3/d3-geo/blob/master/src/graticule.js#L48 "Source")

设置或获取球面网格的范围，等于同时设置major和minor。默认为⟨⟨-180°, -80° - ε⟩, ⟨180°, 80° + ε⟩⟩.

<a name="graticule_extentMajor" href="#graticule_extentMajor">#</a> <i>graticule</i>.<b>extentMajor</b>([<i>extent</i>]) [<>](https://github.com/d3/d3-geo/blob/master/src/graticule.js#L53 "Source")

设置或获取major范围，默认为 ⟨⟨-180°, -90° + ε⟩, ⟨180°, 90° - ε⟩⟩.

<a name="graticule_extentMinor" href="#graticule_extentMinor">#</a> <i>graticule</i>.<b>extentMinor</b>([<i>extent</i>]) [<>](https://github.com/d3/d3-geo/blob/master/src/graticule.js#L62 "Source")

设置或获取minor范围，默认为 ⟨⟨-180°, -80° - ε⟩, ⟨180°, 80° + ε⟩⟩.

<a name="graticule_step" href="#graticule_step">#</a> <i>graticule</i>.<b>step</b>([<i>step</i>]) [<>](https://github.com/d3/d3-geo/blob/master/src/graticule.js#L71 "Source")

设置或获取步长，等于同时设置major 和 minor的步长，默认为⟨10°, 10°⟩.

<a name="graticule_stepMajor" href="#graticule_stepMajor">#</a> <i>graticule</i>.<b>stepMajor</b>([<i>step</i>]) [<>](https://github.com/d3/d3-geo/blob/master/src/graticule.js#L76 "Source")

设置或获取major步长，默认为 ⟨90°, 360°⟩.

<a name="graticule_stepMinor" href="#graticule_stepMinor">#</a> <i>graticule</i>.<b>stepMinor</b>([<i>step</i>]) [<>](https://github.com/d3/d3-geo/blob/master/src/graticule.js#L82 "Source")

设置或获取minor步长，默认为 ⟨10°, 10°⟩.

<a name="graticule_precision" href="#graticule_precision">#</a> <i>graticule</i>.<b>precision</b>([<i>angle</i>]) [<>](https://github.com/d3/d3-geo/blob/master/src/graticule.js#L88 "Source")

设置或获取网格线的经度，默认为2.5°.

<a name="geoGraticule10" href="#geoGraticule10">#</a> d3.<b>geoGraticule10</b>() [<>](https://github.com/d3/d3-geo/blob/master/src/graticule.js#L103 "Source")

等价于:

```js
function geoGraticule10() {
  return d3.geoGraticule()();
}
```

### Streams

D3的几何变换通过一系列函数调用。Streams(流)必须实现几个接受几何输入的方法。

<a href="#geoStream" name="geoStream">#</a> d3.<b>geoStream</b>(<i>object</i>, <i>stream</i>) [<>](https://github.com/d3/d3-geo/blob/master/src/stream.js "Source")

将指定的GeoJSON对象转为[projection *stream*](#projection-streams)

<a name="stream_point" href="#stream_point">#</a> <i>stream</i>.<b>point</b>(<i>x</i>, <i>y</i>[, <i>z</i>])

将指定的坐标x,y和可选的z转为，坐标系统是相互依赖的。比如[projection streams](https://github.com/d3/d3-geo-projection)接受球面坐标为输入。

<a name="stream_lineStart" href="#stream_lineStart">#</a> <i>stream</i>.<b>lineStart</b>()

开始一个线条流

<a name="stream_lineEnd" href="#stream_lineEnd">#</a> <i>stream</i>.<b>lineEnd</b>()

结束一个线条流，比如有如下输入:

```json
{
  "type": "Polygon",
  "coordinates": [
    [[0, 0], [1, 0], [1, 1], [0, 1], [0, 0]]
  ]
}
```

使用流的方法创建折线:

```js
stream.polygonStart();
stream.lineStart();
stream.point(0, 0);
stream.point(1, 0);
stream.point(1, 1);
stream.point(0, 1);
stream.lineEnd();
stream.polygonEnd();
```

<a name="stream_polygonStart" href="#stream_polygonStart">#</a> <i>stream</i>.<b>polygonStart</b>()

开始一个多边形流

<a name="stream_polygonEnd" href="#stream_polygonEnd">#</a> <i>stream</i>.<b>polygonEnd</b>()

结束一个多边形流

<a name="stream_sphere" href="#stream_sphere">#</a> <i>stream</i>.<b>sphere</b>()

表示一个球心位于⟨0,0,0⟩的球

### Transforms

变换是一种投影，一个状态对另一个状态。变换实现了 [*projection*.stream](#projection_stream)到[*path*.projection](#path_projection)的转换. 但是这仅仅是投影方法的一个子集，表示几何转换而不是球面到平面的转换。

<a href="#geoTransform" name="geoTransform">#</a> d3.<b>geoTransform</b>(<i>methods</i>) [<>](https://github.com/d3/d3-geo/blob/master/src/transform.js#L7 "Source")

使用指定的方法定义一个转换。比如对y坐标进行逆转换:

```js
var flipY = d3.geoTransform({
  point: function(x, y) {
    this.stream.point(x, -y);
  }
});
```

或者使用矩阵定义一个更高效的转换:

```js
function matrix(a, b, c, d, tx, ty) {
  return d3.geoTransform({
    point: function(x, y) {
      this.stream.point(a * x + b * y + tx, c * x + d * y + ty);
    }
  });
}
```

<a href="#geoIdentity" name="geoIdentity">#</a> d3.<b>geoIdentity</b>() [<>](https://github.com/d3/d3-geo/blob/master/src/projection/identity.js "Source")

恒等转化可以被来缩放，平移和平面的裁剪。它实现了[*projection*.scale](#projection_scale), [*projection*.translate](#projection_translate), [*projection*.fitExtent](#projection_fitExtent), [*projection*.fitSize](#projection_fitSize) 和 [*projection*.clipExtent](#projection_clipExtent).


<a href="#identity_reflectX" name="identity_reflectX">#</a> <i>identity</i>.<b>reflectX</b>([<i>reflect</i>])

设置或获取x方向的反射 *reflect* 

If *reflect* is specified, sets whether or not the *x*-dimension is reflected (negated) in the output. If *reflect* is not specified, returns true if *x*-reflection is enabled, which defaults to false.

<a href="#identity_reflectY" name="identity_reflectY">#</a> <i>identity</i>.<b>reflectY</b>([<i>reflect</i>])

设置或获取y方向的反射 *reflect* 

If *reflect* is specified, sets whether or not the *y*-dimension is reflected (negated) in the output. If *reflect* is not specified, returns true if *y*-reflection is enabled, which defaults to false. This is especially useful for transforming from standard [spatial reference systems](https://en.wikipedia.org/wiki/Spatial_reference_system), which treat positive *y* as pointing up, to display coordinate systems such as Canvas and SVG, which treat positive *y* as pointing down.

