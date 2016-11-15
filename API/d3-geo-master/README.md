# d3-geo

地图投影实现了从经纬度到屏幕坐标点的转化，比如墨卡投影:

```js
function mercator(x, y) {
  return [x, Math.log(Math.tan(Math.PI / 4 + y / 2))];
}
```

如果你的几何图形包含了一组点集则这个方法一种合理的数学方法。计算机的内存不是无限的，所以你必须使用一组离散的点表示多边形或折线。

在几何上，将一个曲面(地球球面)投影到平面上是很困难的，曲面的边界不是直线，而是[geodesics(测地线)](https://en.wikipedia.org/wiki/Geodesic)。要将其投影到平面上，除了[gnomonic(日晷投影)](#geoGnomonic)之外所有的投影的测地线都是曲线，因此准确的投影需要顺着弧度进行插值。D3使用基于[line simplification method](https://bost.ocks.org/mike/simplify/)的[adaptive sampling(自适应采样)](https://bl.ocks.org/mbostock/3795544)来对精度和性能进行平衡。

无论是多边形投影还是折线投影都必须处理曲面和平面之间的不同。有一些投影需要[crosses the antimeridian(穿过反面子午线)](https://bl.ocks.org/mbostock/3788999)裁剪几何，而有些需要[clipping geometry to a great circle(裁剪几何大圆)](http://bl.ocks.org/mbostock/3021474)。此外球面多边形还需要一个约定来确定多边形的哪一边属于内侧:D3和[TopoJSON](https://github.com/mbostock/topojson)中顺时针围绕的区域表示内侧。

D3的方法提供了丰富的表现力:你可以根据你的数据选择正确的投影，D3支持各种常见的和[unusual map projections(不常见的地图投影)](https://github.com/d3/d3-geo-projection)。更多参考[The Toolmaker’s Guide](https://vimeo.com/106198518#t=20m0s).

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
* [Projections(投影)](#projections) ([Azimuthal](#azimuthal-projections), [Composite](#composite-projections), [Conic](#conic-projections), [Cylindrical](#cylindrical-projections))
* [Raw Projections](#raw-projections)
* [Spherical Math(球面数学)](#spherical-math)
* [Spherical Shapes(球面几何)](#spherical-shapes)
* [Streams(流)](#streams)
* [Transforms(变换)](#transforms)

### Paths

地理路径生成器[d3.geoPath](#geoPath)，有些类似[d3-shape](https://github.com/d3/d3-shape):给定一个GeoJSON几何或特征对象，生成一个SVG路径或[renders the path to a Canvas(渲染路径信息到canvas)](http://bl.ocks.org/mbostock/3783604)。canvas在创建动态和交互式投影时性能好，应当首先考虑使用。路径可以使用[projections](#projections) 或 [transforms](#transforms), 也可以直接渲染到SVG或Canvas平面

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

也支持用来渲染地球轮廓的*Sphere(球)*；球没有坐标。所有的*arguments*会被传递给[pointRadius](#path_pointRadius)访问器。

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

返回指定GeoJSON对象投影的面的面积(平方像素)。Point, MultiPoint, LineString 和 MultiLineString特征的面积为0。对于多边形和多边形集合特征这个方法会首先计算最外层包围的面积，然后减去中间孔洞的面积。这个方法遵守[projection](#path_projection)的剪切方式。参考[*projection*.clipAngle](#projection_clipAngle) 和 [*projection*.clipExtent](#projection_clipExtent).

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

设置或获取点以及多个点特征的半径大小，默认为4.5. 当半径可以为常量也可以为计算每个特征的函数。这个函数会被传递给[path generator](#_path)调用。比如如果你的GeoJSON有其他的额外的属性，则可以通过这个属性来设置点的大小。也可以使用[d3.symbol](https://github.com/d3/d3-shape#symbols) 和 [projection](#geoProjection)来生成更多的形状。
### Projections

投影的作用在于将球面多边形转为平面多边形，D3提供了几种标准的投影:

* [Azimuthal(方位角投影)](#azimuthal-projections)
* [Composite(复合投影)](#composite-projections)
* [Conic(圆锥投影)](#conic-projections)
* [Cylindrical(圆柱投影)](#cylindrical-projections)

大多数投影可以参考[d3-geo-projection](https://github.com/d3/d3-geo-projection). 你也可以通过[d3.geoProjection](#geoProjection) 或 [d3.geoProjectionMutator](#geoProjectionMutator)来实现[custom projections(自定义投影)](#raw-projections)

<a href="#_projection" name="_projection">#</a> <i>projection</i>(<i>point</i>) [<>](https://github.com/d3/d3-geo/blob/master/src/projection/index.js#L34 "Source")

根据指定的表示经纬度的\[*longitude*, *latitude*\]返回一个投影后对应的点\[*x*, *y*\], 也可能返回null,比如给定的坐标点位于投影裁剪之外。

<a href="#projection_invert" name="projection_invert">#</a> <i>projection</i>.<b>invert</b>(<i>point</i>) [<>](https://github.com/d3/d3-geo/blob/master/src/projection/index.js#L39 "Source")

逆投影，根据坐标点返回经纬度。如果给定的点在投影裁剪区域之外则返回null。

这个方法只在可逆投影中定义。


<a href="#projection_stream" name="projection_stream">#</a> <i>projection</i>.<b>stream</b>(<i>stream</i>) [<>](https://github.com/d3/d3-geo/blob/master/src/projection/index.js#L48 "Source")

为指定的输出流返回一个[projection stream](#streams)。在输出之前会对输入做投影转换。一个典型的转换过程:输入的几何首先被转换为弧度,然后围绕三个轴旋转,在反面子午线裁剪或泼削减成小圆,最后通过缩放平移等变换自适应采样投影到平面。


<a href="#projection_clipAngle" name="projection_clipAngle">#</a> <i>projection</i>.<b>clipAngle</b>([<i>angle</i>]) [<>](https://github.com/d3/d3-geo/blob/master/src/projection/index.js#L52 "Source")

设置或获取投影的裁剪圆半径。如果*angle*为null则切换为[antimeridian cutting](http://bl.ocks.org/mbostock/3788999)。与[*projection*.clipExtent](#projection_clipExtent)相互独立。

<a href="#projection_clipExtent" name="projection_clipExtent">#</a> <i>projection</i>.<b>clipExtent</b>([<i>extent</i>]) [<>](https://github.com/d3/d3-geo/blob/master/src/projection/index.js#L56 "Source")

设置或获取投影的视口裁剪范围。以\[\[<i>x₀</i>, <i>y₀</i>\], \[<i>x₁</i>, <i>y₁</i>\]\]的形式指定, <i>x₀</i>表示视口的左边界, <i>y₀</i>表示上边界, <i>x₁</i> 表示右边界<i>y₁</i> 表示下边界. 如果 *extent*为null,则表示不使用视口裁剪。视口裁剪与[*projection*.clipAngle](#projection_clipAngle)相互独立.

<a href="#projection_scale" name="projection_scale">#</a> <i>projection</i>.<b>scale</b>([<i>scale</i>]) [<>](https://github.com/d3/d3-geo/blob/master/src/projection/index.js#L60 "Source")

设置或获取投影的缩放因子。不同的投影有不同的默认值

<a href="#projection_translate" name="projection_translate">#</a> <i>projection</i>.<b>translate</b>([<i>translate</i>]) [<>](https://github.com/d3/d3-geo/blob/master/src/projection/index.js#L64v "Source")

设置或获取投影的平移偏移量。默认为[480, 250]。确定了投影[center](#projection_center)

<a href="#projection_center" name="projection_center">#</a> <i>projection</i>.<b>center</b>([<i>center</i>]) [<>](https://github.com/d3/d3-geo/blob/master/src/projection/index.js#L68 "Source")

设置或获取投影的中心，参数以经纬度的形式指定。默认为 ⟨0°,0°⟩.

<a href="#projection_rotate" name="projection_rotate">#</a> <i>projection</i>.<b>rotate</b>([<i>angles</i>]) [<>](https://github.com/d3/d3-geo/blob/master/src/projection/index.js#L72 "Source")

设置或获取投影的[three-axis rotation(三轴旋转)](http://bl.ocks.org/mbostock/4282586)。必须通过二元或三元数组指定，分别表示[*lambda*, *phi*, *gamma*], 这三个值表示[each spherical axis](http://bl.ocks.org/mbostock/4282586). 默认为[0,0,0], *gamma*默认为0，参考[d3.geoRotation](#geoRotation)

<a href="#projection_precision" name="projection_precision">#</a> <i>projection</i>.<b>precision</b>([<i>precision</i>]) [<>](https://github.com/d3/d3-geo/blob/master/src/projection/index.js#L76 "Source")

设置或获取投影采样精度，这个参数会传递给[Douglas–Peucker](http://en.wikipedia.org/wiki/Ramer–Douglas–Peucker_algorithm)使用，默认为√0.5 ≅ 0.70710…

<a href="#projection_fitExtent" name="projection_fitExtent">#</a> <i>projection</i>.<b>fitExtent</b>(<i>extent</i>, <i>object</i>) [<>](https://github.com/d3/d3-geo/blob/master/src/projection/index.js#L80 "Source")

设置投影的[scale](#projection_scale) 和 [translate](#projection_translate)来使得GeoJSON对象适应指定的*extent*. *extent*通过\[\[x₀, y₀\], \[x₁, y₁\]\]的形式指定。

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

Azimuthal projections project the sphere directly onto a plane.

<a href="#geoAzimuthalEqualArea" name="geoAzimuthalEqualArea">#</a> d3.<b>geoAzimuthalEqualArea</b>() [<>](https://github.com/d3/d3-geo/blob/master/src/projection/azimuthalEqualArea.js "Source")
<br><a href="#geoAzimuthalEqualAreaRaw" name="geoAzimuthalEqualAreaRaw">#</a> d3.<b>geoAzimuthalEqualAreaRaw</b>

[<img src="https://raw.githubusercontent.com/d3/d3-geo/master/img/azimuthalEqualArea.png" width="480" height="250">](http://bl.ocks.org/mbostock/3757101)

The azimuthal equal-area projection.

<a href="#geoAzimuthalEquidistant" name="geoAzimuthalEquidistant">#</a> d3.<b>geoAzimuthalEquidistant</b>() [<>](https://github.com/d3/d3-geo/blob/master/src/projection/azimuthalEquidistant.js "Source")
<br><a href="#geoAzimuthalEquidistantRaw" name="geoAzimuthalEquidistantRaw">#</a> d3.<b>geoAzimuthalEquidistantRaw</b>

[<img src="https://raw.githubusercontent.com/d3/d3-geo/master/img/azimuthalEquidistant.png" width="480" height="250">](http://bl.ocks.org/mbostock/3757110)

The azimuthal equidistant projection.

<a href="#geoGnomonic" name="geoGnomonic">#</a> d3.<b>geoGnomonic</b>() [<>](https://github.com/d3/d3-geo/blob/master/src/projection/gnomonic.js "Source")
<br><a href="#geoGnomonicRaw" name="geoGnomonicRaw">#</a> d3.<b>geoGnomonicRaw</b>

[<img src="https://raw.githubusercontent.com/d3/d3-geo/master/img/gnomonic.png" width="480" height="250">](http://bl.ocks.org/mbostock/3757349)

The gnomonic projection.

<a href="#geoOrthographic" name="geoOrthographic">#</a> d3.<b>geoOrthographic</b>() [<>](https://github.com/d3/d3-geo/blob/master/src/projection/orthographic.js "Source")
<br><a href="#geoOrthographicRaw" name="geoOrthographicRaw">#</a> d3.<b>geoOrthographicRaw</b>

[<img src="https://raw.githubusercontent.com/d3/d3-geo/master/img/orthographic.png" width="480" height="250">](http://bl.ocks.org/mbostock/3757125)

The orthographic projection.

<a href="#geoStereographic" name="geoStereographic">#</a> d3.<b>geoStereographic</b>() [<>](https://github.com/d3/d3-geo/blob/master/src/projection/stereographic.js "Source")
<br><a href="#geoStereographicRaw" name="geoStereographicRaw">#</a> d3.<b>geoStereographicRaw</b>

[<img src="https://raw.githubusercontent.com/d3/d3-geo/master/img/stereographic.png" width="480" height="250">](http://bl.ocks.org/mbostock/3757137)

The stereographic projection.

#### Composite Projections

Composite consist of several projections that are composed into a single display. The constituent projections have fixed clip, center and rotation, and thus composite projections do not support [*projection*.center](#projection_center), [*projection*.rotate](#projection_rotate), [*projection*.clipAngle](#projection_clipAngle), or [*projection*.clipExtent](#projection_clipExtent).

<a href="#geoAlbersUsa" name="geoAlbersUsa">#</a> d3.<b>geoAlbersUsa</b>() [<>](https://github.com/d3/d3-geo/blob/master/src/projection/albersUsa.js "Source")

[<img src="https://raw.githubusercontent.com/d3/d3-geo/master/img/albersUsa.png" width="480" height="250">](http://bl.ocks.org/mbostock/4090848)

This is a U.S.-centric composite projection of three [d3.geoConicEqualArea](#geoConicEqualArea) projections: [d3.geoAlbers](#geoAlbers) is used for the lower forty-eight states, and separate conic equal-area projections are used for Alaska and Hawaii. Note that the scale for Alaska is diminished: it is projected at 0.35× its true relative area. This diagram by Philippe Rivière illustrates how this projection uses two rectangular insets for Alaska and Hawaii:

[<img src="https://raw.githubusercontent.com/d3/d3-geo/master/img/albersUsa-parameters.png" width="480" height="250">](https://bl.ocks.org/Fil/7723167596af40d9159be34ffbf8d36b)

See [d3-composite-projections](http://geoexamples.com/d3-composite-projections/) for more examples.

#### Conic Projections

Conic projections project the sphere onto a cone, and then unroll the cone onto the plane. Conic projections have [two standard parallels](#conic_parallels).

<a href="#conic_parallels" name="conic_parallels">#</a> <i>conic</i>.<b>parallels</b>([<i>parallels</i>]) [<>](https://github.com/d3/d3-geo/blob/master/src/projection/conic.js#L10 "Source")

The [two standard parallels](https://en.wikipedia.org/wiki/Map_projection#Conic) that define the map layout in conic projections.

<a href="#geoAlbers" name="geoAlbers">#</a> d3.<b>geoAlbers</b>() [<>](https://github.com/d3/d3-geo/blob/master/src/projection/albers.js "Source")

[<img src="https://raw.githubusercontent.com/d3/d3-geo/master/img/albers.png" width="480" height="250">](http://bl.ocks.org/mbostock/3734308)

The Albers’ equal area-conic projection. This is a U.S.-centric configuration of [d3.geoConicEqualArea](#geoConicEqualArea).

<a href="#geoConicConformal" name="geoConicConformal">#</a> d3.<b>geoConicConformal</b>() [<>](https://github.com/d3/d3-geo/blob/master/src/projection/conicConformal.js "Source")
<br><a href="#geoConicConformalRaw" name="geoConicConformalRaw">#</a> d3.<b>geoConicConformalRaw</b>(<i>phi0</i>, <i>phi1</i>) [<>](https://github.com/d3/d3-geo/blob/master/src/projection/conicConformal.js "Source")

[<img src="https://raw.githubusercontent.com/d3/d3-geo/master/img/conicConformal.png" width="480" height="250">](http://bl.ocks.org/mbostock/3734321)

The conic conformal projection. The parallels default to [30°, 30°] resulting in flat top. See also [*conic*.parallels](#conic_parallels).

<a href="#geoConicEqualArea" name="geoConicEqualArea">#</a> d3.<b>geoConicEqualArea</b>() [<>](https://github.com/d3/d3-geo/blob/master/src/projection/conicEqualArea.js "Source")
<br><a href="#geoConicEqualAreaRaw" name="geoConicEqualAreaRaw">#</a> d3.<b>geoConicEqualAreaRaw</b>(<i>phi0</i>, <i>phi1</i>) [<>](https://github.com/d3/d3-geo/blob/master/src/projection/conicEqualArea.js "Source")

[<img src="https://raw.githubusercontent.com/d3/d3-geo/master/img/conicEqualArea.png" width="480" height="250">](http://bl.ocks.org/mbostock/3734308)

The Albers’ equal-area conic projection. See also [*conic*.parallels](#conic_parallels).

<a href="#geoConicEquidistant" name="geoConicEquidistant">#</a> d3.<b>geoConicEquidistant</b>() [<>](https://github.com/d3/d3-geo/blob/master/src/projection/conicEquidistant.js "Source")
<br><a href="#geoConicEquidistantRaw" name="geoConicEquidistantRaw">#</a> d3.<b>geoConicEquidistantRaw</b>(<i>phi0</i>, <i>phi1</i>) [<>](https://github.com/d3/d3-geo/blob/master/src/projection/conicEquidistant.js "Source")

[<img src="https://raw.githubusercontent.com/d3/d3-geo/master/img/conicEquidistant.png" width="480" height="250">](http://bl.ocks.org/mbostock/3734317)

The conic equidistant projection. See also [*conic*.parallels](#conic_parallels).

#### Cylindrical Projections

Conic projections project the sphere onto a containing cylinder, and then unroll the cylinder onto the plane.

<a href="#geoEquirectangular" name="geoEquirectangular">#</a> d3.<b>geoEquirectangular</b>() [<>](https://github.com/d3/d3-geo/blob/master/src/projection/equirectangular.js "Source")
<br><a href="#geoEquirectangularRaw" name="geoEquirectangularRaw">#</a> d3.<b>geoEquirectangularRaw</b>

[<img src="https://raw.githubusercontent.com/d3/d3-geo/master/img/equirectangular.png" width="480" height="250">](http://bl.ocks.org/mbostock/3757119)

The equirectangular (plate carrée) projection.

<a href="#geoMercator" name="geoMercator">#</a> d3.<b>geoMercator</b>() [<>](https://github.com/d3/d3-geo/blob/master/src/projection/mercator.js "Source")
<br><a href="#geoMercatorRaw" name="geoMercatorRaw">#</a> d3.<b>geoMercatorRaw</b>

[<img src="https://raw.githubusercontent.com/d3/d3-geo/master/img/mercator.png" width="480" height="250">](http://bl.ocks.org/mbostock/3757132)

The spherical Mercator projection. Defines a default [*projection*.clipExtent](#projection_clipExtent) such that the world is projected to a square, clipped to approximately ±85° latitude.

<a href="#geoTransverseMercator" name="geoTransverseMercator">#</a> d3.<b>geoTransverseMercator</b>() [<>](https://github.com/d3/d3-geo/blob/master/src/projection/transverseMercator.js "Source")
<br><a href="#geoTransverseMercatorRaw" name="geoTransverseMercatorRaw">#</a> d3.<b>geoTransverseMercatorRaw</b>

[<img src="https://raw.githubusercontent.com/d3/d3-geo/master/img/transverseMercator.png" width="480" height="250">](http://bl.ocks.org/mbostock/5126418)

The transverse spherical Mercator projection. Defines a default [*projection*.clipExtent](#projection_clipExtent) such that the world is projected to a square, clipped to approximately ±85° latitude.

### Raw Projections

Raw projections are point transformation functions that are used to implement custom projections; they typically passed to [d3.geoProjection](#geoProjection) or [d3.geoProjectionMutator](#geoProjectionMutator). They are exposed here to facilitate the derivation of related projections. Raw projections take spherical coordinates \[*lambda*, *phi*\] in radians (not degrees!) and return a point \[*x*, *y*\], typically in the unit square centered around the origin.

<a href="#_project" name="_project">#</a> <i>project</i>(<i>lambda</i>, <i>phi</i>)

Projects the specified point [<i>lambda</i>, <i>phi</i>] in radians, returning a new point \[*x*, *y*\] in unitless coordinates.

<a href="#project_invert" name="project_invert">#</a> <i>project</i>.<b>invert</b>(<i>x</i>, <i>y</i>)

The inverse of [*project*](#_project).

<a href="#geoProjection" name="geoProjection">#</a> d3.<b>geoProjection</b>(<i>project</i>) [<>](https://github.com/d3/d3-geo/blob/master/src/projection/index.js#L18 "Source")

Constructs a new projection from the specified [raw projection](#_project), *project*. The *project* function takes the *longitude* and *latitude* of a given point in [radians](http://mathworld.wolfram.com/Radian.html), often referred to as *lambda* (λ) and *phi* (φ), and returns a two-element array \[*x*, *y*\] representing its unit projection. The *project* function does not need to scale or translate the point, as these are applied automatically by [*projection*.scale](#projection_scale), [*projection*.translate](#projection_translate), and [*projection*.center](#projection_center). Likewise, the *project* function does not need to perform any spherical rotation, as [*projection*.rotate](#projection_rotate) is applied prior to projection.

For example, a spherical Mercator projection can be implemented as:

```js
var mercator = d3.geoProjection(function(x, y) {
  return [x, Math.log(Math.tan(Math.PI / 4 + y / 2))];
});
```

If the *project* function exposes an *invert* method, the returned projection will also expose [*projection*.invert](#projection_invert).

<a href="#geoProjectionMutator" name="geoProjectionMutator">#</a> d3.<b>geoProjectionMutator</b>(<i>factory</i>) [<>](https://github.com/d3/d3-geo/blob/master/src/projection/index.js#L22 "Source")

Constructs a new projection from the specified [raw projection](#_project) *factory* and returns a *mutate* function to call whenever the raw projection changes. The *factory* must return a raw projection. The returned *mutate* function returns the wrapped projection. For example, a conic projection typically has two configurable parallels. A suitable *factory* function, such as [d3.geoConicEqualAreaRaw](#geoConicEqualAreaRaw), would have the form:

```js
// y0 and y1 represent two parallels
function conicFactory(phi0, phi1) {
  return function conicRaw(lambda, phi) {
    return […, …];
  };
}
```

Using d3.geoProjectionMutator, you can implement a standard projection that allows the parallels to be changed, reassigning the raw projection used internally by [d3.geoProjection](#geoProjection):

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

When creating a mutable projection, the *mutate* function is typically not exposed.

### Spherical Math

<a name="geoArea" href="#geoArea">#</a> d3.<b>geoArea</b>(<i>feature</i>) [<>](https://github.com/d3/d3-geo/blob/master/src/area.js "Source")

Returns the spherical area of the specified GeoJSON *feature* in [steradians](http://mathworld.wolfram.com/Steradian.html). See also [*path*.area](#path_area), which computes the projected planar area.

<a name="geoBounds" href="#geoBounds">#</a> d3.<b>geoBounds</b>(<i>feature</i>) [<>](https://github.com/d3/d3-geo/blob/master/src/bounds.js "Source")

Returns the [spherical bounding box](https://www.jasondavies.com/maps/bounds/) for the specified GeoJSON *feature*. The bounding box is represented by a two-dimensional array: \[\[*left*, *bottom*], \[*right*, *top*\]\], where *left* is the minimum longitude, *bottom* is the minimum latitude, *right* is maximum longitude, and *top* is the maximum latitude. All coordinates are given in degrees. (Note that in projected planar coordinates, the minimum latitude is typically the maximum *y*-value, and the maximum latitude is typically the minimum *y*-value.)

<a name="geoCentroid" href="#geoCentroid">#</a> d3.<b>geoCentroid</b>(<i>feature</i>) [<>](https://github.com/d3/d3-geo/blob/master/src/centroid.js "Source")

Returns the spherical centroid of the specified GeoJSON *feature*. See also [*path*.centroid](#path_centroid), which computes the projected planar centroid.

<a name="geoDistance" href="#geoDistance">#</a> d3.<b>geoDistance</b>(<i>a</i>, <i>b</i>) [<>](https://github.com/d3/d3-geo/blob/master/src/distance.js "Source")

Returns the great-arc distance in [radians](http://mathworld.wolfram.com/Radian.html) between the two points *a* and *b*. Each point must be specified as a two-element array \[*longitude*, *latitude*\] in degrees.

<a name="geoLength" href="#geoLength">#</a> d3.<b>geoLength</b>(<i>feature</i>) [<>](https://github.com/d3/d3-geo/blob/master/src/length.js "Source")

Returns the great-arc length of the specified GeoJSON *feature* in [radians](http://mathworld.wolfram.com/Radian.html). For polygons, returns the perimeter of the exterior ring plus that of any interior rings.

<a name="geoInterpolate" href="#geoInterpolate">#</a> d3.<b>geoInterpolate</b>(<i>a</i>, <i>b</i>) [<>](https://github.com/d3/d3-geo/blob/master/src/interpolate.js "Source")

Returns an interpolator function given two points *a* and *b*. Each point must be specified as a two-element array \[*longitude*, *latitude*\] in degrees. The returned interpolator function takes a single argument *t*, where *t* is a number ranging from 0 to 1; a value of 0 returns the point *a*, while a value of 1 returns the point *b*. Intermediate values interpolate from *a* to *b* along the great arc that passes through both *a* and *b*. If *a* and *b* are antipodes, an arbitrary great arc is chosen.

<a name="geoRotation" href="#geoRotation">#</a> d3.<b>geoRotation</b>(<i>angles</i>) [<>](https://github.com/d3/d3-geo/blob/master/src/rotation.js "Source")

Returns a [rotation function](#_rotation) for the given *angles*, which must be a two- or three-element array of numbers [*lambda*, *phi*, *gamma*] specifying the rotation angles in degrees about [each spherical axis](http://bl.ocks.org/mbostock/4282586). (These correspond to [yaw, pitch and roll](http://en.wikipedia.org/wiki/Aircraft_principal_axes).) If the rotation angle *gamma* is omitted, it defaults to 0. See also [*projection*.rotate](#projection_rotate).

<a name="_rotation" href="#_rotation">#</a> <i>rotation</i>(<i>point</i>) [<>](https://github.com/d3/d3-geo/blob/master/src/rotation.js#L35 "Source")

Returns a new array \[*longitude*, *latitude*\] in degrees representing the rotated point of the given *point*. The point must be specified as a two-element array \[*longitude*, *latitude*\] in degrees.

<a name="rotation_invert" href="#rotation_invert">#</a> <i>rotation</i>.<b>invert</b>(<i>point</i>) [<>](https://github.com/d3/d3-geo/blob/master/src/rotation.js#L47 "Source")

Returns a new array \[*longitude*, *latitude*\] in degrees representing the point of the given rotated *point*; the inverse of [*rotation*](#_rotation). The point must be specified as a two-element array \[*longitude*, *latitude*\] in degrees.

### Spherical Shapes

To generate a [great arc](https://en.wikipedia.org/wiki/Great-circle_distance) (a segment of a great circle), simply pass a GeoJSON LineString geometry object to a [d3.geoPath](#geoPath). D3’s projections use great-arc interpolation for intermediate points, so there’s no need for a great arc shape generator.

<a name="geoCircle" href="#geoCircle">#</a> d3.<b>geoCircle</b>() [<>](https://github.com/d3/d3-geo/blob/master/src/circle.js "Source")

Returns a new circle generator.

<a name="_circle" href="#_circle">#</a> <i>circle</i>(<i>arguments…</i>) [<>](https://github.com/d3/d3-geo/blob/master/src/circle.js#L47 "Source")

Returns a new GeoJSON geometry object of type “Polygon” approximating a circle on the surface of a sphere, with the current [center](#circle_center), [radius](#circle_radius) and [precision](#circle_precision). Any *arguments* are passed to the accessors.

<a name="circle_center" href="#circle_center">#</a> <i>circle</i>.<b>center</b>([<i>center</i>]) [<>](https://github.com/d3/d3-geo/blob/master/src/circle.js#L59 "Source")

If *center* is specified, sets the circle center to the specified point \[*longitude*, *latitude*\] in degrees, and returns this circle generator. The center may also be specified as a function; this function will be invoked whenever a circle is [generated](#_circle), being passed any arguments passed to the circle generator. If *center* is not specified, returns the current center accessor, which defaults to:

```js
function center() {
  return [0, 0];
}
```

<a name="circle_radius" href="#circle_radius">#</a> <i>circle</i>.<b>radius</b>([<i>radius</i>]) [<>](https://github.com/d3/d3-geo/blob/master/src/circle.js#L63 "Source")

If *radius* is specified, sets the circle radius to the specified angle in degrees, and returns this circle generator. The radius may also be specified as a function; this function will be invoked whenever a circle is [generated](#_circle), being passed any arguments passed to the circle generator. If *radius* is not specified, returns the current radius accessor, which defaults to:

```js
function radius() {
  return 90;
}
```

<a name="circle_precision" href="#circle_precision">#</a> <i>circle</i>.<b>precision</b>([<i>angle</i>]) [<>](https://github.com/d3/d3-geo/blob/master/src/circle.js#L67 "Source")

If *precision* is specified, sets the circle precision to the specified angle in degrees, and returns this circle generator. The precision may also be specified as a function; this function will be invoked whenever a circle is [generated](#_circle), being passed any arguments passed to the circle generator. If *precision* is not specified, returns the current precision accessor, which defaults to:

```js
function precision() {
  return 6;
}
```

Small circles do not follow great arcs and thus the generated polygon is only an approximation. Specifying a smaller precision angle improves the accuracy of the approximate polygon, but also increase the cost to generate and render it.

<a name="geoGraticule" href="#geoGraticule">#</a> d3.<b>geoGraticule</b>() [<>](https://github.com/d3/d3-geo/blob/master/src/graticule.js "Source")

Constructs a feature generator for creating graticules: a uniform grid of [meridians](https://en.wikipedia.org/wiki/Meridian_\(geography\)) and [parallels](https://en.wikipedia.org/wiki/Circle_of_latitude) for showing projection distortion. The default graticule has meridians and parallels every 10° between ±80° latitude; for the polar regions, there are meridians every 90°.

<img src="https://raw.githubusercontent.com/d3/d3-geo/master/img/graticule.png" width="480" height="360">

<a name="_graticule" href="#_graticule">#</a> <i>graticule</i>() [<>](https://github.com/d3/d3-geo/blob/master/src/graticule.js#L21 "Source")

Returns a GeoJSON MultiLineString geometry object representing all meridians and parallels for this graticule.

<a name="graticule_lines" href="#graticule_lines">#</a> <i>graticule</i>.<b>lines</b>() [<>](https://github.com/d3/d3-geo/blob/master/src/graticule.js#L32 "Source")

Returns an array of GeoJSON LineString geometry objects, one for each meridian or parallel for this graticule.

<a name="graticule_outline" href="#graticule_outline">#</a> <i>graticule</i>.<b>outline</b>() [<>](https://github.com/d3/d3-geo/blob/master/src/graticule.js#L36 "Source")

Returns a GeoJSON Polygon geometry object representing the outline of this graticule, i.e. along the meridians and parallels defining its extent.

<a name="graticule_extent" href="#graticule_extent">#</a> <i>graticule</i>.<b>extent</b>([<i>extent</i>]) [<>](https://github.com/d3/d3-geo/blob/master/src/graticule.js#L48 "Source")

If *extent* is specified, sets the major and minor extents of this graticule. If *extent* is not specified, returns the current minor extent, which defaults to ⟨⟨-180°, -80° - ε⟩, ⟨180°, 80° + ε⟩⟩.

<a name="graticule_extentMajor" href="#graticule_extentMajor">#</a> <i>graticule</i>.<b>extentMajor</b>([<i>extent</i>]) [<>](https://github.com/d3/d3-geo/blob/master/src/graticule.js#L53 "Source")

If *extent* is specified, sets the major extent of this graticule. If *extent* is not specified, returns the current major extent, which defaults to ⟨⟨-180°, -90° + ε⟩, ⟨180°, 90° - ε⟩⟩.

<a name="graticule_extentMinor" href="#graticule_extentMinor">#</a> <i>graticule</i>.<b>extentMinor</b>([<i>extent</i>]) [<>](https://github.com/d3/d3-geo/blob/master/src/graticule.js#L62 "Source")

If *extent* is specified, sets the minor extent of this graticule. If *extent* is not specified, returns the current minor extent, which defaults to ⟨⟨-180°, -80° - ε⟩, ⟨180°, 80° + ε⟩⟩.

<a name="graticule_step" href="#graticule_step">#</a> <i>graticule</i>.<b>step</b>([<i>step</i>]) [<>](https://github.com/d3/d3-geo/blob/master/src/graticule.js#L71 "Source")

If *step* is specified, sets the major and minor step for this graticule. If *step* is not specified, returns the current minor step, which defaults to ⟨10°, 10°⟩.

<a name="graticule_stepMajor" href="#graticule_stepMajor">#</a> <i>graticule</i>.<b>stepMajor</b>([<i>step</i>]) [<>](https://github.com/d3/d3-geo/blob/master/src/graticule.js#L76 "Source")

If *step* is specified, sets the major step for this graticule. If *step* is not specified, returns the current major step, which defaults to ⟨90°, 360°⟩.

<a name="graticule_stepMinor" href="#graticule_stepMinor">#</a> <i>graticule</i>.<b>stepMinor</b>([<i>step</i>]) [<>](https://github.com/d3/d3-geo/blob/master/src/graticule.js#L82 "Source")

If *step* is specified, sets the minor step for this graticule. If *step* is not specified, returns the current minor step, which defaults to ⟨10°, 10°⟩.

<a name="graticule_precision" href="#graticule_precision">#</a> <i>graticule</i>.<b>precision</b>([<i>angle</i>]) [<>](https://github.com/d3/d3-geo/blob/master/src/graticule.js#L88 "Source")

If *precision* is specified, sets the precision for this graticule, in degrees. If *precision* is not specified, returns the current precision, which defaults to 2.5°.

<a name="geoGraticule10" href="#geoGraticule10">#</a> d3.<b>geoGraticule10</b>() [<>](https://github.com/d3/d3-geo/blob/master/src/graticule.js#L103 "Source")

A convenience method for directly generating the default 10° global graticule as a GeoJSON MultiLineString geometry object. Equivalent to:

```js
function geoGraticule10() {
  return d3.geoGraticule()();
}
```

### Streams

D3 transforms geometry using a sequence of function calls, rather than materializing intermediate representations, to minimize overhead. Streams must implement several methods to receive input geometry. Streams are inherently stateful; the meaning of a [point](#point) depends on whether the point is inside of a [line](#lineStart), and likewise a line is distinguished from a ring by a [polygon](#polygonStart). Despite the name “stream”, these method calls are currently synchronous.

<a href="#geoStream" name="geoStream">#</a> d3.<b>geoStream</b>(<i>object</i>, <i>stream</i>) [<>](https://github.com/d3/d3-geo/blob/master/src/stream.js "Source")

Streams the specified [GeoJSON](http://geojson.org) *object* to the specified [projection *stream*](#projection-streams). While both features and geometry objects are supported as input, the stream interface only describes the geometry, and thus additional feature properties are not visible to streams.

<a name="stream_point" href="#stream_point">#</a> <i>stream</i>.<b>point</b>(<i>x</i>, <i>y</i>[, <i>z</i>])

Indicates a point with the specified coordinates *x* and *y* (and optionally *z*). The coordinate system is unspecified and implementation-dependent; for example, [projection streams](https://github.com/d3/d3-geo-projection) require spherical coordinates in degrees as input. Outside the context of a polygon or line, a point indicates a point geometry object ([Point](http://www.geojson.org/geojson-spec.html#point) or [MultiPoint](http://www.geojson.org/geojson-spec.html#multipoint)). Within a line or polygon ring, the point indicates a control point.

<a name="stream_lineStart" href="#stream_lineStart">#</a> <i>stream</i>.<b>lineStart</b>()

Indicates the start of a line or ring. Within a polygon, indicates the start of a ring. The first ring of a polygon is the exterior ring, and is typically clockwise. Any subsequent rings indicate holes in the polygon, and are typically counterclockwise.

<a name="stream_lineEnd" href="#stream_lineEnd">#</a> <i>stream</i>.<b>lineEnd</b>()

Indicates the end of a line or ring. Within a polygon, indicates the end of a ring. Unlike GeoJSON, the redundant closing coordinate of a ring is *not* indicated via [point](#point), and instead is implied via lineEnd within a polygon. Thus, the given polygon input:

```json
{
  "type": "Polygon",
  "coordinates": [
    [[0, 0], [1, 0], [1, 1], [0, 1], [0, 0]]
  ]
}
```

Will produce the following series of method calls on the stream:

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

Indicates the start of a polygon. The first line of a polygon indicates the exterior ring, and any subsequent lines indicate interior holes.

<a name="stream_polygonEnd" href="#stream_polygonEnd">#</a> <i>stream</i>.<b>polygonEnd</b>()

Indicates the end of a polygon.

<a name="stream_sphere" href="#stream_sphere">#</a> <i>stream</i>.<b>sphere</b>()

Indicates the sphere (the globe; the unit sphere centered at ⟨0,0,0⟩).

### Transforms

Transforms are a generalization of projections. Transform implement [*projection*.stream](#projection_stream) and can be passed to [*path*.projection](#path_projection). However, they only implement a subset of the other projection methods, and represent arbitrary geometric transformations rather than projections from spherical to planar coordinates.

<a href="#geoTransform" name="geoTransform">#</a> d3.<b>geoTransform</b>(<i>methods</i>) [<>](https://github.com/d3/d3-geo/blob/master/src/transform.js#L7 "Source")

Defines an arbitrary transform using the methods defined on the specified *methods* object. Any undefined methods will use pass-through methods that propagate inputs to the output stream. For example, to invert the *y*-coordinates:

```js
var flipY = d3.geoTransform({
  point: function(x, y) {
    this.stream.point(x, -y);
  }
});
```

Or to define an affine matrix transformation:

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

The identity transform can be used to scale, translate and clip planar geometry. It implements [*projection*.scale](#projection_scale), [*projection*.translate](#projection_translate), [*projection*.fitExtent](#projection_fitExtent), [*projection*.fitSize](#projection_fitSize) and [*projection*.clipExtent](#projection_clipExtent).
