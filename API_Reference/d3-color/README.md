# d3-color

浏览器可以解析很多种颜色，但是不能帮你处理颜色。`d3-color`模块提供各种空间的颜色表示，并支持在各种颜色空间之间进行转换和操作。(例如使用[d3-interpolate](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-interpolate)进行颜色差值)

例如定义一种“steelblue”颜色:

```js
var c = d3.color("steelblue"); // {r: 70, g: 130, b: 180, opacity: 1}
```

将其转换到HSL空间:

```js
var c = d3.hsl("steelblue"); // {h: 207.27…, s: 0.44, l: 0.4902…, opacity: 1}
```

旋转H值，调整饱和度，将其转为CSS字符串：

```js
c.h += 90;
c.s += 0.2;
c + ""; // rgb(198, 45, 205)
```

调整透明度并转为CSS可用的字符串:

```js
c.opacity = 0.8;
c + ""; // rgba(198, 45, 205, 0.8)
```

除了 [RGB](#rgb) and [HSL](#hsl)颜色空间之外，`d3-color`还提供了另外两种专用于设计领域的颜色空间：

* Dave Green’s [Cubehelix](#cubehelix)
* [Lab (CIELAB)](#lab) and [HCL (CIELCH)](#hcl)

Cubehelix颜色空间单调明亮，而Lab和HCL颜色空间在视觉上更均衡。 HCL是Lab的圆柱形式，与HSL是RGB圆柱形式类似。

## Installing

- npm: `npm install d3-color`
- 下载 [最新版](https://github.com/d3/d3-color/releases/latest)，直接从[d3js.org](https://d3js.org)引用
- 可以作为单独的标准库引入也可以作为[D3 4.0](https://github.com/d3/d3)的一部分引入。

通过标签引入会创建一个`d3`全局变量：

```html
<script src="https://d3js.org/d3-color.v1.min.js"></script>
<script>

var steelblue = d3.rgb("steelblue");

</script>
```

[在浏览器中测试d3-color](https://tonicdev.com/npm/d3-color)

## API Reference

<a name="color" href="#color">#</a> d3.<b>color</b>(<i>specifier</i>) [<>](https://github.com/d3/d3-color/blob/master/src/color.js "Source")

将[CSS Color Module Level 3](http://www.w3.org/TR/css3-color/#colorunits)指定的颜色字符串转换，返回 [RGB](#rgb) 或 [HSL](#hsl) 颜色表示. 如果指定的字符串不可用，则返回null:

* `rgb(255, 255, 255)`
* `rgb(10%, 20%, 30%)`
* `rgba(255, 255, 255, 0.4)`
* `rgba(10%, 20%, 30%, 0.4)`
* `hsl(120, 50%, 20%)`
* `hsla(120, 50%, 20%, 0.4)`
* `#ffeeaa`
* `#fea`
* `steelblue`

支持的[颜色命名](http://www.w3.org/TR/SVG/types.html#ColorKeywords)列表由css指定

这个方法也可以通过`instanceof`来测试一个对象是否是color实例.

<a name="color_opacity" href="#color_opacity">#</a> *color*.<b>opacity</b>

设置color的透明度，范围[0,1].

<a name="color_rgb" href="#color_rgb">#</a> *color*.<b>rgb</b>() [<>](https://github.com/d3/d3-color/blob/master/src/color.js#L209 "Source")

返回颜色的[RGB 表示](#rgb). 对于RGB颜色则返回自身

<a name="color_brighter" href="#color_brighter">#</a> *color*.<b>brighter</b>([<i>k</i>]) [<>](https://github.com/d3/d3-color/blob/master/src/color.js#L221 "Source")

将color调的更亮，k为一个可选的系数。k默认为 1.这个方法的具体实现依赖于颜色空间。

<a name="color_darker" href="#color_darker">#</a> *color*.<b>darker</b>([<i>k</i>]) [<>](https://github.com/d3/d3-color/blob/master/src/color.js#L225 "Source")

将color调的更暗，k为一个可选的系数。k默认为 1.这个方法的具体实现依赖于颜色空间。

<a name="color_displayable" href="#color_displayable">#</a> *color*.<b>displayable</b>() [<>](https://github.com/d3/d3-color/blob/master/src/color.js#L169 "Source")

如果color在标准硬件上可显示的话返回true。例如对于RGB来说，任何一个颜色通道值不在[0,255]之间或透明度值不在[0,1]之间时返回false.

<a name="color_toString" href="#color_toString">#</a> *color*.<b>toString</b>() [<>](https://github.com/d3/d3-color/blob/master/src/color.js#L172 "Source")

将color转为[CSS Object Model specification](https://drafts.csswg.org/cssom/#serialize-a-css-component-value)字符串, 比如 `rgb(247, 234, 186)`. 如果color不可显示，则返回一个合适的可显示的字符串。比如如果值超过255会将其调整为255.

<a name="rgb" href="#rgb">#</a> d3.<b>rgb</b>(<i>r</i>, <i>g</i>, <i>b</i>[, <i>opacity</i>]) [<>](https://github.com/d3/d3-color/blob/master/src/color.js#L209 "Source")<br>
<a href="#rgb">#</a> d3.<b>rgb</b>(<i>specifier</i>)<br>
<a href="#rgb">#</a> d3.<b>rgb</b>(<i>color</i>)<br>

构建一个[RGB](https://en.wikipedia.org/wiki/RGB_color_model)颜色通道的颜色对象。返回的颜色对象中包含`r`, `g` 和 `b`三个属性。可以使用[RGB color picker](http://bl.ocks.org/mbostock/78d64ca7ef013b4dcf8f)来了解三个值之间的相互影响。

如果指定了*r*, *g* and *b*，则表示返回颜色对象的三个通道值。可选的*opacity* 用来表示透明度。
如果指定的是一个CSS Color Module Level 3字符串,则会将其转换为RGB颜色空间。参考[color](#color)
如果指定的是一个color对象则会被转换为RGB颜色空间对象。

与[*color*.rgb](#color_rgb)不同的是，这个方法总会返回一个新的实例，即便是传入的也是RGB颜色实例。

<a name="hsl" href="#hsl">#</a> d3.<b>hsl</b>(<i>h</i>, <i>s</i>, <i>l</i>[, <i>opacity</i>]) [<>](https://github.com/d3/d3-color/blob/master/src/color.js#L281 "Source")<br>
<a href="#hsl">#</a> d3.<b>hsl</b>(<i>specifier</i>)<br>
<a href="#hsl">#</a> d3.<b>hsl</b>(<i>color</i>)<br>

构建一个[HSL](https://en.wikipedia.org/wiki/HSL_and_HSV)颜色通道的颜色对象。返回的颜色对象中包含`h`, `s` 和 `l`三个属性。可以使用[HSL color picker](http://bl.ocks.org/mbostock/debaad4fcce9bcee14cf)来了解三个值之间的相互影响。

如果指定了*h*, *s* and *l*，则表示返回颜色对象的通道值。可选的*opacity* 用来表示透明度。
如果指定的是一个CSS Color Module Level 3字符串,则会将其转换为HSL颜色空间。参考[color](#color)
如果指定的是一个color对象则会先被转为RGB颜色空间值，然后被转换为HSL颜色空间对象。

<a name="lab" href="#lab">#</a> d3.<b>lab</b>(<i>l</i>, <i>a</i>, <i>b</i>[, <i>opacity</i>]) [<>](https://github.com/d3/d3-color/blob/master/src/lab.js#L30 "Source")<br>
<a href="#lab">#</a> d3.<b>lab</b>(<i>specifier</i>)<br>
<a href="#lab">#</a> d3.<b>lab</b>(<i>color</i>)<br>

构建一个[Lab](https://en.wikipedia.org/wiki/Lab_color_space#CIELAB)颜色通道的颜色对象。返回的颜色对象中包含`l`, `a` 和 `b`三个属性。可以使用[Lab color picker](http://bl.ocks.org/mbostock/9f37cc207c0cb166921b)来了解三个值之间的相互影响。

如果指定了*l*, *a* and *b*，则表示返回颜色对象的通道值。可选的*opacity* 用来表示透明度。
如果指定的是一个CSS Color Module Level 3字符串,则会将其转换为Lab颜色空间。参考[color](#color)
如果指定的是一个color对象则会先被转为RGB颜色空间值，然后被转换为Lab颜色空间对象。

<a name="hcl" href="#hcl">#</a> d3.<b>hcl</b>(<i>h</i>, <i>c</i>, <i>l</i>[, <i>opacity</i>]) [<>](https://github.com/d3/d3-color/blob/master/src/lab.js#L87 "Source")<br>
<a href="#hcl">#</a> d3.<b>hcl</b>(<i>specifier</i>)<br>
<a href="#hcl">#</a> d3.<b>hcl</b>(<i>color</i>)<br>

构建一个[HCL](https://en.wikipedia.org/wiki/HCL_color_space)颜色通道的颜色对象。返回的颜色对象中包含`h`, `c` 和 `l`三个属性。可以使用[HCL color picker](http://bl.ocks.org/mbostock/3e115519a1b495e0bd95)来了解三个值之间的相互影响。

如果指定了*h*, *c* and *l*，则表示返回颜色对象的通道值。可选的*opacity* 用来表示透明度。
如果指定的是一个CSS Color Module Level 3字符串,则会将其转换为HCL颜色空间。参考[color](#color)
如果指定的是一个color对象则会先被转为RGB颜色空间值，然后被转换为HCL颜色空间对象。

<a name="cubehelix" href="#cubehelix">#</a> d3.<b>cubehelix</b>(<i>h</i>, <i>s</i>, <i>l</i>[, <i>opacity</i>]) [<>](https://github.com/d3/d3-color/blob/master/src/cubehelix.js#L32 "Source")<br>
<a href="#cubehelix">#</a> d3.<b>cubehelix</b>(<i>specifier</i>)<br>
<a href="#cubehelix">#</a> d3.<b>cubehelix</b>(<i>color</i>)<br>

构建一个[Cubehelix](https://www.mrao.cam.ac.uk/~dag/CUBEHELIX/) 颜色通道的颜色对象。返回的颜色对象中包含`h`, `s` 和 `l`三个属性。可以使用[Cubehelix color picker](http://bl.ocks.org/mbostock/ba8d75e45794c27168b5)来了解三个值之间的相互影响。

如果指定了*h*, *s* and *l*，则表示返回颜色对象的通道值。可选的*opacity* 用来表示透明度。
如果指定的是一个CSS Color Module Level 3字符串,则会将其转换为Cubehelix颜色空间。参考[color](#color)
如果指定的是一个color对象则会先被转为RGB颜色空间值，然后被转换为Cubehelix颜色空间对象。
