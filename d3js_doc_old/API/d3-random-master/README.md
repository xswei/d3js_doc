# d3-random

生成各种类型的随机数。

## Installing

NPM等安装方法略

```html
<script src="https://d3js.org/d3-random.v1.min.js"></script>
<script>

var random = d3.randomUniform(1, 10);

</script>
```

[在浏览器中测试d3-random](https://tonicdev.com/npm/d3-random)

## API Reference

<a name="randomUniform" href="#randomUniform">#</a> d3.<b>randomUniform</b>([<i>min</i>, ][<i>max</i>]) [<>](https://github.com/d3/d3-random/blob/master/src/uniform.js "Source")

返回一个[uniform distribution(均匀分布)](https://en.wikipedia.org/wiki/Uniform_distribution_\(continuous\))的随机数生成器(函数).*min*和*max*分别表示可选区间的上下界，包含*min*蛋不包含*max*。如果没有指定*min*则默认为0，如果没有指定*max*则默认为1. 例如:

```js
d3.randomUniform(6)(); // [0,6).
d3.randomUniform(1, 5)(); // [1,5).
```
你也可以使用内置的 [Math.random](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/random) 来生成随机数，比如要生成0到99(含)之间的随机数，可以使用`Math.random() * 100 | 0`.

<a name="randomNormal" href="#randomNormal">#</a> d3.<b>randomNormal</b>([<i>mu</i>][, <i>sigma</i>]) [<>](https://github.com/d3/d3-random/blob/master/src/normal.js "Source")

返回一个服从[normal (Gaussian) distribution(高斯正态分布)](https://en.wikipedia.org/wiki/Normal_distribution)分布的随机数生成器。期望值为*mu*，标准差为*sigma*。期望值默认为0，标准差默认为1.

<a name="randomLogNormal" href="#randomLogNormal">#</a> d3.<b>randomLogNormal</b>([<i>mu</i>][, <i>sigma</i>]) [<>](https://github.com/d3/d3-random/blob/master/src/logNormal.js "Source")

返回一个服从[log-normal distribution(对数正太分布)](https://en.wikipedia.org/wiki/Log-normal_distribution)分布的随机数生成器。期望值为*mu*，标准差为*sigma*。期望值默认为0，标准差默认为1.

<a name="randomBates" href="#randomBates">#</a> d3.<b>randomBates</b>(<i>n</i>) [<>](https://github.com/d3/d3-random/blob/master/src/bates.js "Source")

返回一个自变量为*n*的服从[Bates distribution](https://en.wikipedia.org/wiki/Bates_distribution)分布的随机数生成器。

<a name="randomIrwinHall" href="#randomIrwinHall">#</a> d3.<b>randomIrwinHall</b>(<i>n</i>) [<>](https://github.com/d3/d3-random/blob/master/src/irwinHall.js "Source")

返回一个自变量为*n*的服从[Irwin–Hall distribution](https://en.wikipedia.org/wiki/Irwin–Hall_distribution)分布的随机数生成器。

<a name="randomExponential" href="#randomExponential">#</a> d3.<b>randomExponential</b>(<i>lambda</i>) [<>](https://github.com/d3/d3-random/blob/master/src/exponential.js "Source")

返回一个服从比率为*lambda*[exponential distribution](https://en.wikipedia.org/wiki/Exponential_distribution)分布的随机数生成器。
