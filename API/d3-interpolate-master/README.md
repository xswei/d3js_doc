# d3-interpolate

这个模块提供了在两个值之间多种插值的方法。值可以是数值，颜色，字符串，数组或者其他可以深层嵌套的对象。比如:


```js
var i = d3.interpolateNumber(10, 20);
i(0.0); // 10
i(0.2); // 12
i(0.5); // 15
i(1.0); // 20
```

返回的*i*被称作插值器。给插值器传递一个起始值*a*，结束值*b*以及一个参数*t*，参数*t*位于[0,1]. 然后插值器会返回一个至于*a*和*b*之间的值。

你也可以对数值以外的数据进行插值，比如对颜色进行插值：

```js
d3.interpolateLab("steelblue", "brown")(0.5); // "rgb(142, 92, 109)"
```

对更复杂一点的对象类型进行插值:

```js
var i = d3.interpolate({colors: ["red", "blue"]}, {colors: ["white", "black"]});
i(0.0); // {colors: ["rgb(255, 0, 0)", "rgb(0, 0, 255)"]}
i(0.5); // {colors: ["rgb(255, 128, 128)", "rgb(0, 0, 128)"]}
i(1.0); // {colors: ["rgb(255, 255, 255)", "rgb(0, 0, 0)"]}
```

注意插值器不仅可以检测嵌套对象和数值，还可以检测表示颜色的字符串(比如"steelblue"等)和数值。

## Installing

NPM等安装方法略

```html
<script src="https://d3js.org/d3-color.v1.min.js"></script>
<script src="https://d3js.org/d3-interpolate.v1.min.js"></script>
<script>

var interpolate = d3.interpolateRgb("steelblue", "brown");

</script>
```

[在浏览器中测试d3-interpolate](https://tonicdev.com/npm/d3-interpolate)

## API Reference

<a name="interpolate" href="#interpolate">#</a> d3.<b>interpolate</b>(<i>a</i>, <i>b</i>)

返回一个起止值分分别为*a*和*b*的插值器，使用的算法如下:

1. 如果 *b* 是一个 null, undefined 或者 boolean, 则返回常量*b*.
2. 如果 *b* 是一个数值，则使用[interpolateNumber](#interpolateNumber).
3. 如果 *b* 是一个 [color](https://github.com/d3/d3-color#color) 或者是一个表示颜色的字符串，则使用 [interpolateRgb](#interpolateRgb).
4. 如果 *b* 是一个 [date](https://developer.mozilla.org  /en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)则使用[interpolateDate](#interpolateDate).
5. 如果 *b* 是一个字符串则使用 [interpolateString](#interpolateString).
6. 如果 *b* 是一个[array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)则使用[interpolateArray](#interpolateArray).
7. 如果 *b* 是一个可以转为数值类型的值则使用[interpolateNumber](#interpolateNumber).
8. 使用[interpolateObject](#interpolateObject).

确定好类型之后，*a*被转化为对应的类型。


<a name="interpolateNumber" href="#interpolateNumber">#</a> d3.<b>interpolateNumber</b>(<i>a</i>, <i>b</i>) [<>](https://github.com/d3/d3-interpolate/blob/master/src/number.js "Source")

在*a*和*b*两个数值之间进行插值，定义如下:

```js
function interpolator(t) {
  return a * (1 - t) + b * t;
}
```

警告:当插值器被用作生成字符串时，要避免从0或者向0插值。因为非常小的数值可能会被处理，比如`0.0000001`会被转化为`"1e-7"`。

<a name="interpolateRound" href="#interpolateRound">#</a> d3.<b>interpolateRound</b>(<i>a</i>, <i>b</i>) [<>](https://github.com/d3/d3-interpolate/blob/master/src/round.js "Source")

返回一个在a和b之间进行插值的插值器，但是这个方法对插值结果进行了取整。

Returns an interpolator between the two numbers *a* and *b*; the interpolator is similar to [interpolateNumber](#interpolateNumber), except it will round the resulting value to the nearest integer.

<a name="interpolateString" href="#interpolateString">#</a> d3.<b>interpolateString</b>(<i>a</i>, <i>b</i>) [<>](https://github.com/d3/d3-interpolate/blob/master/src/string.js "Source")

返回一个在字符串a和b之间进行插值的插值器。字符串插值器会在两个字符串之间寻找嵌入的数值，然后再使用数值插值器。

如果在字符串*b*中找到嵌入的数值，则会在*a*中找对应的数值。如果找到了则在这两个嵌入的数值之间使用[interpolateNumber](#interpolateNumber)。

字符串中除了数值外，其余的部分作为模板常量不会发生改变，如果剩余的非数值字符串不同，则以*b*为准。

比如如果*a*为`"300 12px sans-serif"`,*b*为`"500 36px Comic-Sans"`，则会找到两组嵌入的数值`300-500`和`12-36`,其余的字符`px Comic-Sans`作为常量字符串。当*t*等于0.5时插值器返回的值为`"400 24px Comic-Sans"`.

<a name="interpolateDate" href="#interpolateDate">#</a> d3.<b>interpolateDate</b>(<i>a</i>, <i>b</i>) [<>](https://github.com/d3/d3-interpolate/blob/master/src/date.js "Source")

返回一个日期类型的插值器。返回的类型为Date类型。

<a name="interpolateArray" href="#interpolateArray">#</a> d3.<b>interpolateArray</b>(<i>a</i>, <i>b</i>) [<>](https://github.com/d3/d3-interpolate/blob/master/src/array.js "Source")

返回一个在a和b两个数组之间插值的插值器。在内部首先会创建一个和b等长的数组，对于数组b中的每个元素，如果在a中有对应的元素，则则两个对应的元素之间进行插值。如果a中没有对应的元素则直接使用b中的元素。

例如对于a为[0,1],b为[1,10,100],t为0.5时返回值为[0.5,5.5,100], a中没有和100对应的值，因此直接使用b中的值.

<a name="interpolateObject" href="#interpolateObject">#</a> d3.<b>interpolateObject</b>(<i>a</i>, <i>b</i>) [<>](https://github.com/d3/d3-interpolate/blob/master/src/object.js "Source")

返回一个在两个对象之间插值的插值器。在内部会创建一个临时的对象，这个临时的对象和b有相同的属性，然后在a中找相同的属性，然后对属性进行分别插值，如果a中没有对应的属性则返回b的值。

比如对于对象a为`{x: 0, y: 1}`, *b* 为`{x: 1, y: 10, z: 100}`,  *t* = 0.5 的结果为 `{x: 0.5, y: 5.5, z: 100}`.

对对象插值在计算数据时候是很有用的，比如在对arc进行过渡时，使用对象插值的方式对arc对象数据进行插值来计算过渡过程中的path值。

<a name="interpolateTransformCss" href="#interpolateTransformCss">#</a> d3.<b>interpolateTransformCss</b>(<i>a</i>, <i>b</i>) [<>](https://github.com/d3/d3-interpolate/blob/master/src/transform/index.js#L62 "Source")

创建一个2D CSS变换插值器，比如translate, rotate, *x*-skew 和 scale等。具体的实现标准参考[matrix decomposition for animation](http://www.w3.org/TR/css3-2d-transforms/#matrix-decomposition).

<a name="interpolateTransformSvg" href="#interpolateTransformSvg">#</a> d3.<b>interpolateTransformSvg</b>(<i>a</i>, <i>b</i>) [<>](https://github.com/d3/d3-interpolate/blob/master/src/transform/index.js#L63 "Source")

创建一个2D SVG变换插值器

```js

var i = d3.interpolateTransformSvg("scale(1)","scale(10)");

i(0.5);	//"scale(0.5,0.5)", 返回标准形式

```

<a name="interpolateZoom" href="#interpolateZoom">#</a> d3.<b>interpolateZoom</b>(<i>a</i>, <i>b</i>) [<>](https://github.com/d3/d3-interpolate/blob/master/src/zoom.js "Source")

返回一个在a和b两个二维视图之间进行插值的插值器。基于Jarke J. van Wijk and Wim A.A. Nuij的[“Smooth and efficient zooming and panning”](http://www.win.tue.nl/~vanwijk/zoompan.pdf)。每个视图被定义为一个包含三个属性的数组：*cx*, *cy* 和 *width*。 前两个值*cx*, *cy*代表视图的中心。*width*代表视图的尺寸
、
返回的插值器包含一个 *duration* 属性用来定义过渡的毫秒数。

### Sampling

<a name="quantize" href="#quantize">#</a> d3.<b>quantize</b>(<i>interpolator</i>, <i>n</i>) [<>](https://github.com/d3/d3-interpolate/blob/master/src/quantize.js "Source")

Returns *n* uniformly-spaced samples from the specified *interpolator*, where *n* is an integer greater than one. The first sample is always at *t* = 0, and the last sample is always at *t* = 1. This can be useful in generating a fixed number of samples from a given interpolator, such as to derive the range of a [quantize scale](https://github.com/d3/d3-scale#quantize-scales) from a [continuous interpolator](https://github.com/d3/d3-scale#interpolateWarm).

Caution: this method will not work with interpolators that do not return defensive copies of their output, such as [d3.interpolateArray](#interpolateArray), [d3.interpolateDate](#interpolateDate) and [d3.interpolateObject](#interpolateObject). For those interpolators, you must wrap the interpolator and create a copy for each returned value.

### Color Spaces

<a name="interpolateRgb" href="#interpolateRgb">#</a> d3.<b>interpolateRgb</b>(<i>a</i>, <i>b</i>) [<>](https://github.com/d3/d3-interpolate/blob/master/src/rgb.js "Source")

<img src="https://raw.githubusercontent.com/d3/d3-interpolate/master/img/rgb.png" width="100%" height="40" alt="rgb">

Or, with a corrected [gamma](#interpolate_gamma) of 2.2:

<img src="https://raw.githubusercontent.com/d3/d3-interpolate/master/img/rgbGamma.png" width="100%" height="40" alt="rgbGamma">

Returns an RGB color space interpolator between the two colors *a* and *b* with a configurable [gamma](#interpolate_gamma). If the gamma is not specified, it defaults to 1.0. The colors *a* and *b* need not be in RGB; they will be converted to RGB using [d3.rgb](https://github.com/d3/d3-color#rgb). The return value of the interpolator is an RGB string.

<a href="#interpolateRgbBasis" name="interpolateRgbBasis">#</a> d3.<b>interpolateRgbBasis</b>(<i>colors</i>) [<>](https://github.com/d3/d3-interpolate/blob/master/src/rgb.js#L54 "Source")

Returns a uniform nonrational B-spline interpolator through the specified array of *colors*, which are converted to [RGB color space](https://github.com/d3/d3-color#rgb). Implicit control points are generated such that the interpolator returns *colors*[0] at *t* = 0 and *colors*[*colors*.length - 1] at *t* = 1. Opacity interpolation is not currently supported. See also [d3.interpolateBasis](#interpolateBasis), and see [d3-scale-chromatic](https://github.com/d3/d3-scale-chromatic) for examples.

<a href="#interpolateRgbBasisClosed" name="interpolateRgbBasisClosed">#</a> d3.<b>interpolateRgbBasisClosed</b>(<i>colors</i>) [<>](https://github.com/d3/d3-interpolate/blob/master/src/rgb.js#L55 "Source")

Returns a uniform nonrational B-spline interpolator through the specified array of *colors*, which are converted to [RGB color space](https://github.com/d3/d3-color#rgb). The control points are implicitly repeated such that the resulting spline has cyclical C² continuity when repeated around *t* in [0,1]; this is useful, for example, to create cyclical color scales. Opacity interpolation is not currently supported. See also [d3.interpolateBasisClosed](#interpolateBasisClosed), and see [d3-scale-chromatic](https://github.com/d3/d3-scale-chromatic) for examples.

<a name="interpolateHsl" href="#interpolateHsl">#</a> d3.<b>interpolateHsl</b>(<i>a</i>, <i>b</i>) [<>](https://github.com/d3/d3-interpolate/blob/master/src/hsl.js "Source")

<img src="https://raw.githubusercontent.com/d3/d3-interpolate/master/img/hsl.png" width="100%" height="40" alt="hsl">

Returns an HSL color space interpolator between the two colors *a* and *b*. The colors *a* and *b* need not be in HSL; they will be converted to HSL using [d3.hsl](https://github.com/d3/d3-color#hsl). If either color’s hue or saturation is NaN, the opposing color’s channel value is used. The shortest path between hues is used. The return value of the interpolator is an RGB string.

<a name="interpolateHslLong" href="#interpolateHslLong">#</a> d3.<b>interpolateHslLong</b>(<i>a</i>, <i>b</i>) [<>](https://github.com/d3/d3-interpolate/blob/master/src/hsl.js#L21 "Source")

<img src="https://raw.githubusercontent.com/d3/d3-interpolate/master/img/hslLong.png" width="100%" height="40" alt="hslLong">

Like [interpolateHsl](#interpolateHsl), but does not use the shortest path between hues.

<a name="interpolateLab" href="#interpolateLab">#</a> d3.<b>interpolateLab</b>(<i>a</i>, <i>b</i>) [<>](https://github.com/d3/d3-interpolate/blob/master/src/lab.js "Source")

<img src="https://raw.githubusercontent.com/d3/d3-interpolate/master/img/lab.png" width="100%" height="40" alt="lab">

Returns a Lab color space interpolator between the two colors *a* and *b*. The colors *a* and *b* need not be in Lab; they will be converted to Lab using [d3.lab](https://github.com/d3/d3-color#lab). The return value of the interpolator is an RGB string.

<a name="interpolateHcl" href="#interpolateHcl">#</a> d3.<b>interpolateHcl</b>(<i>a</i>, <i>b</i>) [<>](https://github.com/d3/d3-interpolate/blob/master/src/hcl.js "Source")

<img src="https://raw.githubusercontent.com/d3/d3-interpolate/master/img/hcl.png" width="100%" height="40" alt="hcl">

Returns an HCL color space interpolator between the two colors *a* and *b*. The colors *a* and *b* need not be in HCL; they will be converted to HCL using [d3.hcl](https://github.com/d3/d3-color#hcl). If either color’s hue or chroma is NaN, the opposing color’s channel value is used. The shortest path between hues is used. The return value of the interpolator is an RGB string.

<a name="interpolateHclLong" href="#interpolateHclLong">#</a> d3.<b>interpolateHclLong</b>(<i>a</i>, <i>b</i>) [<>](https://github.com/d3/d3-interpolate/blob/master/src/hcl.js#L21 "Source")

<img src="https://raw.githubusercontent.com/d3/d3-interpolate/master/img/hclLong.png" width="100%" height="40" alt="hclLong">

Like [interpolateHcl](#interpolateHcl), but does not use the shortest path between hues.

<a name="interpolateCubehelix" href="#interpolateCubehelix">#</a> d3.<b>interpolateCubehelix</b>(<i>a</i>, <i>b</i>) [<>](https://github.com/d3/d3-interpolate/blob/master/src/cubehelix.js "Source")

<img src="https://raw.githubusercontent.com/d3/d3-interpolate/master/img/cubehelix.png" width="100%" height="40" alt="cubehelix">

Or, with a [gamma](#interpolate_gamma) of 3.0 to emphasize high-intensity values:

<img src="https://raw.githubusercontent.com/d3/d3-interpolate/master/img/cubehelixGamma.png" width="100%" height="40" alt="cubehelixGamma">

Returns a Cubehelix color space interpolator between the two colors *a* and *b* using a configurable [gamma](#interpolate_gamma). If the gamma is not specified, it defaults to 1.0. The colors *a* and *b* need not be in Cubehelix; they will be converted to Cubehelix using [d3.cubehelix](https://github.com/d3/d3-color#cubehelix). If either color’s hue or saturation is NaN, the opposing color’s channel value is used. The shortest path between hues is used. The return value of the interpolator is an RGB string.

<a name="interpolateCubehelixLong" href="#interpolateCubehelixLong">#</a> d3.<b>interpolateCubehelixLong</b>(<i>a</i>, <i>b</i>) [<>](https://github.com/d3/d3-interpolate/blob/master/src/cubehelix.js#L29 "Source")

<img src="https://raw.githubusercontent.com/d3/d3-interpolate/master/img/cubehelixLong.png" width="100%" height="40" alt="cubehelixLong">

Or, with a [gamma](#interpolate_gamma) of 3.0 to emphasize high-intensity values:

<img src="https://raw.githubusercontent.com/d3/d3-interpolate/master/img/cubehelixGammaLong.png" width="100%" height="40" alt="cubehelixGammaLong">

Like [interpolateCubehelix](#interpolateCubehelix), but does not use the shortest path between hues.

<a name="interpolate_gamma" href="#interpolate_gamma">#</a> <i>interpolate</i>.<b>gamma</b>(<i>gamma</i>)

Given that *interpolate* is one of [interpolateRgb](#interpolateRgb), [interpolateCubehelix](#interpolateCubehelix) or [interpolateCubehelixLong](#interpolateCubehelixLong), returns a new interpolator factory of the same type using the specified *gamma*. For example, to interpolate from purple to orange with a gamma of 2.2 in RGB space:

```js
var interpolator = d3.interpolateRgb.gamma(2.2)("purple", "orange");
```

See Eric Brasseur’s article, [Gamma error in picture scaling](https://web.archive.org/web/20160112115812/http://www.4p8.com/eric.brasseur/gamma.html), for more on gamma correction.

### Splines

Whereas standard interpolators blend from a starting value *a* at *t* = 0 to an ending value *b* at *t* = 1, spline interpolators smoothly blend multiple input values for *t* in [0,1] using piecewise polynomial functions. Only cubic uniform nonrational [B-splines](https://en.wikipedia.org/wiki/B-spline) are currently supported, also known as basis splines.

<a href="#interpolateBasis" name="interpolateBasis">#</a> d3.<b>interpolateBasis</b>(<i>values</i>) [<>](https://github.com/d3/d3-interpolate/blob/master/src/basis.js "Source")

Returns a uniform nonrational B-spline interpolator through the specified array of *values*, which must be numbers. Implicit control points are generated such that the interpolator returns *values*[0] at *t* = 0 and *values*[*values*.length - 1] at *t* = 1. See also [d3.curveBasis](https://github.com/d3/d3-shape#curveBasis).

<a href="#interpolateBasisClosed" name="interpolateBasisClosed">#</a> d3.<b>interpolateBasisClosed</b>(<i>values</i>) [<>](https://github.com/d3/d3-interpolate/blob/master/src/basisClosed.js "Source")

Returns a uniform nonrational B-spline interpolator through the specified array of *values*, which must be numbers. The control points are implicitly repeated such that the resulting one-dimensional spline has cyclical C² continuity when repeated around *t* in [0,1]. See also [d3.curveBasisClosed](https://github.com/d3/d3-shape#curveBasisClosed).
