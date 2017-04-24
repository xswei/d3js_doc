# d3-color

尽管浏览器支持多种颜色标准，但是在使用javascript操作颜色时，并不能提供帮助. d3-color模块提供多种用于表示颜色的颜色空间，并且允许相互之间转换和操作。可以参考 [d3-interpolate](https://github.com/d3/d3-interpolate) 来获取更多颜色插值的信息.

例如颜色名为 “steelblue”:

```js
var c = d3.color("steelblue"); // {r: 70, g: 130, b: 180, opacity: 1}
```

将其转为HSL颜色空间表示:

```js
var c = d3.hsl("steelblue"); // {h: 207.27…, s: 0.44, l: 0.4902…, opacity: 1}
```

将色调旋转90度，提高饱和度，然后格式化为CSS字符串:

```js
c.h += 90;
c.s += 0.2;
c + ""; // rgb(198, 45, 205)
```

调整透明度:

```js
c.opacity = 0.8;
c + ""; // rgba(198, 45, 205, 0.8)
```

除了常用的RGB和HSL颜色空间外，d3-color模块还支持人类友好的两种颜色空间:

* Dave Green’s [Cubehelix](#cubehelix)
* [Lab (CIELAB)](#lab) 和 [HCL (CIELCH)](#hcl)

Cubehelix 的亮度是单调的，而*Lab*和*HCL*的感觉更均匀。*HCL*是*Lab*的圆柱形式，而*HSL*是*RGB*的圆柱形式。


## Installing

NPM等安装方法略

```html
<script src="https://d3js.org/d3-color.v1.min.js"></script>
<script>

var steelblue = d3.rgb("steelblue");

</script>
```

[在浏览器中测试 d3-color](https://tonicdev.com/npm/d3-color)

## API Reference

<a name="color" href="#color">#</a> d3.<b>color</b>(<i>specifier</i>) [<>](https://github.com/d3/d3-color/blob/master/src/color.js "Source")


将指定的符合[CSS Color Module Level 3](http://www.w3.org/TR/css3-color/#colorunits) 规则的字符串转换为 [RGB](#rgb) 或 [HSL](#hsl) 颜色. 如果给定的字符串非法，则返回null，例如:

* `rgb(255, 255, 255)`
* `rgb(10%, 20%, 30%)`
* `rgba(255, 255, 255, 0.4)`
* `rgba(10%, 20%, 30%, 0.4)`
* `hsl(120, 50%, 20%)`
* `hsla(120, 50%, 20%, 0.4)`
* `#ffeeaa`
* `#fea`
* `steelblue`

查看 CSS支持的 [颜色名列表](http://www.w3.org/TR/SVG/types.html#ColorKeywords).

这个方法也可以通过`instanceof`来测试一个对象是否是color实例.

<a name="color_opacity" href="#color_opacity">#</a> *color*.<b>opacity</b>

设置color的透明度，范围[0,1].

<a name="color_rgb" href="#color_rgb">#</a> *color*.<b>rgb</b>() [<>](https://github.com/d3/d3-color/blob/master/src/color.js#L209 "Source")

返回color的RGB表示,如果color为RGB，则返回自身。

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

构建一个RGB颜色通道的颜色对象。

参数可以是r,g,b[opacity]值，也可以是CSS支持的颜色表示，也可以是其他的color对象。最终都会被转为RGB表示.

<a name="hsl" href="#hsl">#</a> d3.<b>hsl</b>(<i>h</i>, <i>s</i>, <i>l</i>[, <i>opacity</i>]) [<>](https://github.com/d3/d3-color/blob/master/src/color.js#L281 "Source")<br>
<a href="#hsl">#</a> d3.<b>hsl</b>(<i>specifier</i>)<br>
<a href="#hsl">#</a> d3.<b>hsl</b>(<i>color</i>)<br>

构建一个HSL颜色通道的颜色对象。

参数可以是h,s,l[opacity]值，也可以是CSS支持的颜色表示，也可以是其他的color对象。如果不是直接指定的h,s,l[opacity]值，则会先转为RGB表示，然后再转为HSL表示.


<a name="lab" href="#lab">#</a> d3.<b>lab</b>(<i>l</i>, <i>a</i>, <i>b</i>[, <i>opacity</i>]) [<>](https://github.com/d3/d3-color/blob/master/src/lab.js#L30 "Source")<br>
<a href="#lab">#</a> d3.<b>lab</b>(<i>specifier</i>)<br>
<a href="#lab">#</a> d3.<b>lab</b>(<i>color</i>)<br>

构建一个Hab颜色通道的颜色对象。

参数可以是l,a,b[opacity]值，也可以是CSS支持的颜色表示，也可以是其他的color对象。如果不是直接指定的l,a,b[opacity]值，则会先转为RGB表示，然后再转为Lab表示.

<a name="hcl" href="#hcl">#</a> d3.<b>hcl</b>(<i>h</i>, <i>c</i>, <i>l</i>[, <i>opacity</i>]) [<>](https://github.com/d3/d3-color/blob/master/src/lab.js#L87 "Source")<br>
<a href="#hcl">#</a> d3.<b>hcl</b>(<i>specifier</i>)<br>
<a href="#hcl">#</a> d3.<b>hcl</b>(<i>color</i>)<br>

构建一个HCL颜色通道的颜色对象。

参数可以是h,c,l[opacity]值，也可以是CSS支持的颜色表示，也可以是其他的color对象。如果不是直接指定的h,c,l[opacity]值，则会先转为RGB表示，然后再转为HCL表示.

<a name="cubehelix" href="#cubehelix">#</a> d3.<b>cubehelix</b>(<i>h</i>, <i>s</i>, <i>l</i>[, <i>opacity</i>]) [<>](https://github.com/d3/d3-color/blob/master/src/cubehelix.js#L32 "Source")<br>
<a href="#cubehelix">#</a> d3.<b>cubehelix</b>(<i>specifier</i>)<br>
<a href="#cubehelix">#</a> d3.<b>cubehelix</b>(<i>color</i>)<br>

构建一个Cubehelix颜色通道的颜色对象。

参数可以是h,s,l[opacity]值，也可以是CSS支持的颜色表示，也可以是其他的color对象。如果不是直接指定的h,s,l[opacity]值，则会先转为RGB表示，然后再转为Cubehelix表示.
