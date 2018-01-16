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

从指定的*interpolator*中返回*n*个间隔均匀的采样点。*n*是一个比1大的整数。第一个采样点取*t*=0，最后一个采样点取*t*=1. 这个方法可以用来从指定的插值器中生成固定数量的样本，比如从[continuous interpolator](https://github.com/d3/d3-scale#interpolateWarm)中生成一些刻度表示[quantize scale](https://github.com/d3/d3-scale#quantize-scales).

### Color Spaces

<a name="interpolateRgb" href="#interpolateRgb">#</a> d3.<b>interpolateRgb</b>(<i>a</i>, <i>b</i>) [<>](https://github.com/d3/d3-interpolate/blob/master/src/rgb.js "Source")

<img src="https://raw.githubusercontent.com/d3/d3-interpolate/master/img/rgb.png" width="100%" height="40" alt="rgb">

Or, with a corrected [gamma](#interpolate_gamma) of 2.2:

<img src="https://raw.githubusercontent.com/d3/d3-interpolate/master/img/rgbGamma.png" width="100%" height="40" alt="rgbGamma">

返回一个RGB颜色空间的，起止值为a和b的插值器。并且可以配置[gamma](#interpolate_gamma)参数，如果没有指定[gamma](#interpolate_gamma)则默认为1.0。*a*和*b*不一定为RGB表示，但是一定要可以使用[d3.rgb](https://github.com/d3/d3-color#rgb)被转化为RGB，插值器的返回值为RGB字符串。

<a href="#interpolateRgbBasis" name="interpolateRgbBasis">#</a> d3.<b>interpolateRgbBasis</b>(<i>colors</i>) [<>](https://github.com/d3/d3-interpolate/blob/master/src/rgb.js#L54 "Source")

在指定的一组颜色之间进行B-spline插值，颜色都会被转化为[RGB color space](https://github.com/d3/d3-color#rgb)表示。*t*=0时返回*colors*[0]，*t*=1时返回*colors*[*colors*.length - 1]，不支持透明度的插值。参考[d3.interpolateBasis](#interpolateBasis), 和 [d3-scale-chromatic](https://github.com/d3/d3-scale-chromatic) 获取更多例子.

<a href="#interpolateRgbBasisClosed" name="interpolateRgbBasisClosed">#</a> d3.<b>interpolateRgbBasisClosed</b>(<i>colors</i>) [<>](https://github.com/d3/d3-interpolate/blob/master/src/rgb.js#L55 "Source")

在指定的一组颜色之间进行B-spline插值，颜色都会被转化为[RGB color space](https://github.com/d3/d3-color#rgb)表示。控制点首位相连呈周期状，在创建周期颜色比例尺时是有用的，参考[d3.interpolateBasisClosed](#interpolateBasisClosed)和 [d3-scale-chromatic](https://github.com/d3/d3-scale-chromatic).

<a name="interpolateHsl" href="#interpolateHsl">#</a> d3.<b>interpolateHsl</b>(<i>a</i>, <i>b</i>) [<>](https://github.com/d3/d3-interpolate/blob/master/src/hsl.js "Source")

<img src="https://raw.githubusercontent.com/d3/d3-interpolate/master/img/hsl.png" width="100%" height="40" alt="hsl">

返回一个HSL颜色空间的，起止值为a和b的插值器。*a*和*b*不一定适用HSL表示，但是一定要能通过[d3.hsl](https://github.com/d3/d3-color#hsl)被转为HSL颜色表示。返回值使用RGB表示。这个插值器的hues值使用的是*a*和*b*之间短的那一截，因为hues值是一个圆环形。

<a name="interpolateHslLong" href="#interpolateHslLong">#</a> d3.<b>interpolateHslLong</b>(<i>a</i>, <i>b</i>) [<>](https://github.com/d3/d3-interpolate/blob/master/src/hsl.js#L21 "Source")

<img src="https://raw.githubusercontent.com/d3/d3-interpolate/master/img/hslLong.png" width="100%" height="40" alt="hslLong">

与[interpolateHsl](#interpolateHsl)类似, 但是hues的插值使用的是长的那一节。

<a name="interpolateLab" href="#interpolateLab">#</a> d3.<b>interpolateLab</b>(<i>a</i>, <i>b</i>) [<>](https://github.com/d3/d3-interpolate/blob/master/src/lab.js "Source")

<img src="https://raw.githubusercontent.com/d3/d3-interpolate/master/img/lab.png" width="100%" height="40" alt="lab">

返回一个Lab颜色空间的，起止值为a和b的插值器。*a*和*b*不一定适用Lab表示，但是一定要能通过[d3.lab](https://github.com/d3/d3-color#lab)转化为Lab表示. 返回值是一个RGB字符串。

<a name="interpolateHcl" href="#interpolateHcl">#</a> d3.<b>interpolateHcl</b>(<i>a</i>, <i>b</i>) [<>](https://github.com/d3/d3-interpolate/blob/master/src/hcl.js "Source")

<img src="https://raw.githubusercontent.com/d3/d3-interpolate/master/img/hcl.png" width="100%" height="40" alt="hcl">

返回一个HCL颜色空间的，起止值为a和b的插值器。*a*和*b*不一定适用Lab表示，但是一定要能通过[d3.hcl](https://github.com/d3/d3-color#hcl)转为HCL值. 如果有一个颜色的 hue 或 chroma值为NaN, 则使用另一个对应的值。hues之间比较短的那一段被使用。返回的值使用RGB字符串表示。

<a name="interpolateHclLong" href="#interpolateHclLong">#</a> d3.<b>interpolateHclLong</b>(<i>a</i>, <i>b</i>) [<>](https://github.com/d3/d3-interpolate/blob/master/src/hcl.js#L21 "Source")

<img src="https://raw.githubusercontent.com/d3/d3-interpolate/master/img/hclLong.png" width="100%" height="40" alt="hclLong">

同[interpolateHcl](#interpolateHcl), 但是hues之间比较长的那一段被使用

<a name="interpolateCubehelix" href="#interpolateCubehelix">#</a> d3.<b>interpolateCubehelix</b>(<i>a</i>, <i>b</i>) [<>](https://github.com/d3/d3-interpolate/blob/master/src/cubehelix.js "Source")

<img src="https://raw.githubusercontent.com/d3/d3-interpolate/master/img/cubehelix.png" width="100%" height="40" alt="cubehelix">

[gamma](#interpolate_gamma)为3.0时候:

<img src="https://raw.githubusercontent.com/d3/d3-interpolate/master/img/cubehelixGamma.png" width="100%" height="40" alt="cubehelixGamma">

返回一个Cubehelix颜色空间的，介于*a*和*b*之间的插值器。也可以配置[gamma](#interpolate_gamma)，如果不配置则默认为1.0。*a* 和 *b*不一定要使用Cubehelix表示，但是一定要刻意通过[d3.cubehelix](https://github.com/d3/d3-color#cubehelix)转化为Cubehelix。如果有一个颜色的 hue 或 saturation值为NaN, 则使用另一个对应的值。hues之间比较短的那一段被使用。返回的值使用RGB字符串表示。

<a name="interpolateCubehelixLong" href="#interpolateCubehelixLong">#</a> d3.<b>interpolateCubehelixLong</b>(<i>a</i>, <i>b</i>) [<>](https://github.com/d3/d3-interpolate/blob/master/src/cubehelix.js#L29 "Source")

<img src="https://raw.githubusercontent.com/d3/d3-interpolate/master/img/cubehelixLong.png" width="100%" height="40" alt="cubehelixLong">

[gamma](#interpolate_gamma) 为 3.0时:

<img src="https://raw.githubusercontent.com/d3/d3-interpolate/master/img/cubehelixGammaLong.png" width="100%" height="40" alt="cubehelixGammaLong">

与[interpolateCubehelix](#interpolateCubehelix), 但是使用hues之间比较长的那一段

<a name="interpolate_gamma" href="#interpolate_gamma">#</a> <i>interpolate</i>.<b>gamma</b>(<i>gamma</i>)

为[interpolateRgb](#interpolateRgb), [interpolateCubehelix](#interpolateCubehelix) 或者 [interpolateCubehelixLong](#interpolateCubehelixLong)设置*gamma*参数. 比如为RGB插值器设置*gamma*为2.2:

```js
var interpolator = d3.interpolateRgb.gamma(2.2)("purple", "orange");
```

参考Eric Brasseur的文章[Gamma error in picture scaling](https://web.archive.org/web/20160112115812/http://www.4p8.com/eric.brasseur/gamma.html), 获取更多关于gamma的介绍.

### Splines

标准的插值器在*t* = 0和*t* = 1之间进行线性过渡，而样条插值器则对*t*在[0,1]之间使用分段多项式函数平滑过渡，现在只支持基本[B-splines](https://en.wikipedia.org/wiki/B-spline)插值。

<a href="#interpolateBasis" name="interpolateBasis">#</a> d3.<b>interpolateBasis</b>(<i>values</i>) [<>](https://github.com/d3/d3-interpolate/blob/master/src/basis.js "Source")

通过指定的值数组返回一个基本的B样条插值，必须是数字。当*t*=0时取*values*[0]，*t*=1时取[*values*.length - 1]。参考[d3.curveBasis](https://github.com/d3/d3-shape#curveBasis).

<a href="#interpolateBasisClosed" name="interpolateBasisClosed">#</a> d3.<b>interpolateBasisClosed</b>(<i>values</i>) [<>](https://github.com/d3/d3-interpolate/blob/master/src/basisClosed.js "Source")

通过指定的值数组返回一个基本的B样条插值，必须是数字。这种插值方式是连续的有周期的，参考[d3.curveBasisClosed](https://github.com/d3/d3-shape#curveBasisClosed).
