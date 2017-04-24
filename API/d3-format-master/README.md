# d3-format

JavaScript有时候并不能像你期望的那样显示数值，比如:

```js
for (var i = 0; i < 10; i++) {
  console.log(0.1 * i);
}
```

结果竟然是这样:

```js
0
0.1
0.2
0.30000000000000004
0.4
0.5
0.6000000000000001
0.7000000000000001
0.8
0.9
```

这是因为 [binary floating point(二进制表示浮点类型数据)](https://en.wikipedia.org/wiki/Double-precision_floating-point_format) 决定的! ಠ_ಠ

对数值进行简单的四舍五入远远不能满足需要。因为在实际应用中，不仅仅会遇到小数问题，还有表示方法的问题。比如将一个比较大的数值使用科学计数法表示以及货币的表示格式等。

d3-format是一个可以将数字格式化为人类友好的表示的模块。比如:

```js
var f = d3.format(".1f");
for (var i = 0; i < 10; i++) {
  console.log(f(0.1 * i));
}
```

将会得到:

```js
0.0
0.1
0.2
0.3
0.4
0.5
0.6
0.7
0.8
0.9
```

但是d3-format 模块的作用远远不止 [number.toFixed](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed)! 例如:

```js
d3.format(".0%")(0.123);  // rounded percentage, "12%"
d3.format("($.2f")(-3.5); // localized fixed-point currency, "(£3.50)"
d3.format("+20")(42);     // space-filled and signed, "                 +42"
d3.format(".^20")(42);    // dot-filled and centered, ".........42........."
d3.format(".2s")(42e6);   // SI-prefix with two significant digits, "42M"
d3.format("#x")(48879);   // prefixed lowercase hexadecimal, "0xbeef"
d3.format(",.2r")(4223);  // grouped thousands with two significant digits, "4,200"
```

参考 [*locale*.format](#locale_format) 获取更多信息.

## Installing

NPM等安装方法略

```html
<script src="https://d3js.org/d3-format.v1.min.js"></script>
<script>

var format = d3.format(".2s");

</script>
```

不同区域的文件放在[unpkg](https://unpkg.com/)上，可以通过[d3.json](https://github.com/d3/d3-request/blob/master/README.md#json)加载。比如将Russian设置为默认区域:

```js
d3.json("https://unpkg.com/d3-format@1/locale/ru-RU.json", function(error, locale) {
  if (error) throw error;

  d3.formatDefaultLocale(locale);

  var format = d3.format("$,");

  console.log(format(1234.56)); // 1 234,56 руб.
});

```

[Try d3-format in your browser.](https://tonicdev.com/npm/d3-format)

## API Reference

<a name="format" href="#format">#</a> d3.<b>format</b>(<i>specifier</i>) [<>](https://github.com/d3/d3-format/blob/master/src/defaultLocale.js#L4 "Source")

[*locale*.format](#locale_format)的别称.

<a name="formatPrefix" href="#formatPrefix">#</a> d3.<b>formatPrefix</b>(<i>specifier</i>, <i>value</i>) [<>](https://github.com/d3/d3-format/blob/master/src/defaultLocale.js#L5 "Source")

[*locale*.formatPrefix](#locale_formatPrefix)的别称.

<a name="locale_format" href="#locale_format">#</a> <i>locale</i>.<b>format</b>(<i>specifier</i>) [<>](https://github.com/d3/d3-format/blob/master/src/locale.js#L18 "Source")

根据指定的*specifier*字符串返回一个格式化函数。返回的格式化方法只接受一个数值类型参数，执行之后返回格式化之后的数值。*specifier*的一般格式为:

```
[​[fill]align][sign][symbol][0][width][,][.precision][type]
```

*fill* 可以是任意字符串. *fill*字符串标识的是对齐方式，*align*指定了宽度。*fill*必须为如下几种:

* `>` - 右对齐. (默认).
* `<` - 左对齐.
* `^` - 居中.
* `=` - 与`>`类似, but with any sign and symbol to the left of any padding.

*sign* 可以为:

* `-` - 如果是负数添加-号，如果是正数什么都不做. (Default behavior.)
* `+` - 如果是正数也添加+号.
* `(` - 如果是负数将其使用圆括号括起来.
* ` ` (space) - 如果是负号则什么都不做，如果是正数则不添加+号，而是使用空格代替+号.

```js

d3.format("-")(-1); // "-1"
d3.format("-")(1);  // "1"

d3.format("+")(-1); // "-1"
d3.format("+")(1);  // "+1"

d3.format("(")(-1); // "(-1)"
d3.format("(")(1);  // "1"

d3.format(" ")(-1); // "-1"
d3.format("(")(1);  // " 1"

```

*symbol* 可以取以下值:

* `$` - 应用货币符号.
* `#` - 将由`0b`, `0o`, or `0x`标识的二进制、八进制或十六进制数据转为十进制.

```js
d3.format("$")(10);     //"$10"
d3.format("#")(0b1111); //"15"
```

*zero*选项定义了空位填补操作。等于隐式的设置了*fill*为 `0`并且*align*为 `=`. 紧随其后的*width*定义了可用位置的最小宽度。如果没有指定*width*，宽度将由内容的实际宽度决定。*comma*(`,`)符号指定了是否使用`,`来对数字进行千分位分割。

```js

d3.format("04")(9);     //"0009"  使用的是[zero][width]两个说明符，此时不能使用[[fill]align]了，否则会报错
d3.format(",")(100000); //"100,000"
d3.format("010,")(100000);  //"00,100,000"


```

最后两个说明符是*.precision*和*type* ,  *.precision*指定了精度，*type*则指定类型(浮点、百分比或科学计数法等)。如果没有指定*。precision*且*type*不为` `空,则默认为6. 如果*.precision*没有指定并且*type*为` `空，则默认精度为12。

*type* 值可以为:

* `e` - 指数.
* `f` - 小数.
* `g` - 小数或指数中的一个，四舍五入到有效数字
* `r` - 十进制计数法，四舍五入到有效数字.
* `s` - 带有[SI prefix](#locale_formatPrefix)的十进制计数法，四舍五入到有效数字.
* `%` - 百分比表示.
* `p` - 百分比表示,四舍五入到有效数字.
* `b` - 二进制表示，四舍五入到整数.
* `o` - 八进制表示，四舍五入到整数.
* `d` - 十进制表示，四舍五入到整数.
* `x` - 小写的十六进制表示，四舍五入到整数.
* `X` - 大写的十六进制表示，四舍五入到整数.
* `c` - 在打印之前将整数转为对应的unicode编码.
* `​` (none) - 与 `g`类似.

```js
d3.format("e")(1000); //"1.000000e+3"
d3.format(".3e")(1000); //"1.000e+3"

d3.format("f")(1000); //"1.000000"
d3.format(".3f")(1000); //"1.000"

d3.format("g")(1000); //"1000.00"
d3.format(".3g")(1000); //"1.00e+3"

d3.format("r")(11.11);  //"11.1100"
d3.format(".3r")(11.11);  //"11.1"

d3.format("%")(1);  //"100.000000%"
d3.format(".0%")(1);  //"100%"


d3.format(".2")(42);  // "42"
d3.format(".2")(4.2); // "4.2"
d3.format(".1")(42);  // "4e+1"
d3.format(".1")(4.2); // "4"
```

<a name="locale_formatPrefix" href="#locale_formatPrefix">#</a> <i>locale</i>.<b>formatPrefix</b>(<i>specifier</i>, <i>value</i>) [<>](https://github.com/d3/d3-format/blob/master/src/locale.js#L127 "Source")

等价于[*locale*.format](#locale_format), 但是返回的额方法会使用适当的科学计数法前缀表示。支持以下前缀:

* `y` - yocto, 10⁻²⁴
* `z` - zepto, 10⁻²¹
* `a` - atto, 10⁻¹⁸
* `f` - femto, 10⁻¹⁵
* `p` - pico, 10⁻¹²
* `n` - nano, 10⁻⁹
* `µ` - micro, 10⁻⁶
* `m` - milli, 10⁻³
* `​` (none) - 10⁰
* `k` - kilo, 10³
* `M` - mega, 10⁶
* `G` - giga, 10⁹
* `T` - tera, 10¹²
* `P` - peta, 10¹⁵
* `E` - exa, 10¹⁸
* `Z` - zetta, 10²¹
* `Y` - yotta, 10²⁴

与 [*locale*.format](#locale_format)使用 `s`格式类型不同, 这个方法考虑了科学计数法前缀，比如:

```js
var f = d3.formatPrefix(",.0", 1e-6);
f(0.00042); // "420µ"
f(0.0042); // "4,200µ"
```

<a name="formatSpecifier" href="#formatSpecifier">#</a> d3.<b>formatSpecifier</b>(<i>specifier</i>) [<>](https://github.com/d3/d3-format/blob/master/src/formatSpecifier.js "Source")

将指定的分割符转成对象形式。比如`formatSpecifier("s")` 返回:

```js
{
  "fill": " ",
  "align": ">",
  "sign": "-",
  "symbol": "",
  "zero": false,
  "width": undefined,
  "comma": false,
  "precision": 6,
  "type": "s"
}
```

这个方法有助于理解如何解析格式说明符并导出新的说明符，比如你可以手动修改说明符中的某一项来创建一个新的格式:

```js
var s = d3.formatSpecifier("f");
s.precision = precisionFixed(0.01);
var f = d3.format(s);
f(42); // "42.00";
```

<a name="precisionFixed" href="#precisionFixed">#</a> d3.<b>precisionFixed</b>(<i>step</i>) [<>](https://github.com/d3/d3-format/blob/master/src/precisionFixed.js "Source")

根据指定的*step*返回一个建议的小数。*step*表示输入值和输出值之间的最小差距。比如对于 1, 1.5, 和 2, *step*为0.5时:

```js
var p = d3.precisionFixed(0.5),
    f = d3.format("." + p + "f");
f(1);   // "1.0"
f(1.5); // "1.5"
f(2);   // "2.0"
```

然而杜宇1, 2 和 3, *step* 应该为1，并且precision 为 0:

```js
var p = d3.precisionFixed(1),
    f = d3.format("." + p + "f");
f(1); // "1"
f(2); // "2"
f(3); // "3"
```

对于 `%`类型，应该减2:

```js
var p = Math.max(0, d3.precisionFixed(0.05) - 2),
    f = d3.format("." + p + "%");
f(0.45); // "45%"
f(0.50); // "50%"
f(0.55); // "55%"
```

<a name="precisionPrefix" href="#precisionPrefix">#</a> d3.<b>precisionPrefix</b>(<i>step</i>, <i>value</i>) [<>](https://github.com/d3/d3-format/blob/master/src/precisionPrefix.js "Source")


根据*step*和*max*使用[*locale*.formatPrefix](#locale_formatPrefix) 返回建议的小数精度。比如给定 1.1e6, 1.2e6, 和 1.3e6, *step* 应该为1e5, *value*为1.3e6, 建议的精度为1:

```js
var p = d3.precisionPrefix(1e5, 1.3e6),
    f = d3.formatPrefix("." + p, 1.3e6);
f(1.1e6); // "1.1M"
f(1.2e6); // "1.2M"
f(1.3e6); // "1.3M"
```

<a name="precisionRound" href="#precisionRound">#</a> d3.<b>precisionRound</b>(<i>step</i>, <i>max</i>) [<>](https://github.com/d3/d3-format/blob/master/src/precisionRound.js "Source")


根据*step*和*max*返回建议的小数精度:

```js
var p = d3.precisionRound(0.01, 1.01),
    f = d3.format("." + p + "r");
f(0.99); // "0.990"
f(1.0);  // "1.00"
f(1.01); // "1.01"
```

然而对于 0.9, 1.0, 和 1.1, *step*应该为0.1, *max* 应该为1.1, 建议的精度为2:

```js
var p = d3.precisionRound(0.1, 1.1),
    f = d3.format("." + p + "r");
f(0.9); // "0.90"
f(1.0); // "1.0"
f(1.1); // "1.1"
```

对于 `e` 格式类型，应该减1:

```js
var p = Math.max(0, d3.precisionRound(0.01, 1.01) - 1),
    f = d3.format("." + p + "e");
f(0.01); // "1.00e-2"
f(1.01); // "1.01e+0"
```

### Locales

<a name="formatLocale" href="#formatLocale">#</a> d3.<b>formatLocale</b>(<i>definition</i>) [<>](https://github.com/d3/d3-format/blob/master/src/locale.js "Source")

返回根据指定的*definition*使用[*locale*.format](#locale_format) 和[*locale*.formatPrefix](#locale_formatPrefix)方法返回*locale*对象。*definition*必须包括以下属性: 

* `decimal` - 小数点 (e.g., `"."`).
* `thousands` - 分组分割符号 (e.g., `","`).
* `grouping` - 分组尺寸 (e.g., `[3]`),[3]表示使用千分位
* `currency` - 前缀或后缀 (e.g., `["$", ""]`).



<a name="formatDefaultLocale" href="#formatDefaultLocale">#</a> d3.<b>formatDefaultLocale</b>(<i>definition</i>) [<>](https://github.com/d3/d3-format/blob/master/src/defaultLocale.js "Source")

等价于[d3.formatLocale](#formatLocale), 只是重定义了[d3.format](#format) 和 [d3.formatPrefix](#formatPrefix) 默认为 [U.S. English](https://github.com/d3/d3-format/blob/master/locale/en-US.json).
