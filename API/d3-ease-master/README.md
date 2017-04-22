# d3-ease

[过渡类型参考](https://bl.ocks.org/mbostock/248bac3b8e354a9103c4)

*Easing*是一个控制动画过渡方式的函数，通常情况下为[slow-in, slow-out](https://en.wikipedia.org/wiki/12_basic_principles_of_animation#Slow_In_and_Slow_Out). 通过合理的调整缓动，可以使得动画更合理平滑。

在这个模块中实现了一些[ease method](#ease_ease), 通过接受一个归一化的参数*t*返回当前的“eased” 时间 *tʹ*. *t*和*t'*都在[0,1]之间，0代表动画开始，1代表动画结束。一个好的过渡应该在*t*取0时返回0，*t*取1时返回1。参考[easing explorer](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4).

注:在对动画进行过渡过程中，现实世界的时间变化是恒定的，比如从0秒到10秒之间为10秒，这个是没有办法改变的，而在对动画元素的插值过程中可以通过修改缓动函数指定属性的过渡方式。比如现实中0秒时候对应属性初始值，10秒时对应属性的目标值。但是在初始值和目标值之间不一定非要使用线性过渡，因此需要在现实中的0-10秒和属性的过渡时间之间建立一个对应关系。

假设属性值的过渡也是线性的，对应的时候只需要将时间"错开对应"就能得到非线性的缓动过程，比如实际中的5s对应属性过渡的3s或7s处的值。

举个例子:假设属性的初始值为100，目标值为200，过渡时间为10秒钟，那0秒对应的就是100,10秒对应的就是200。如果使用线性过渡，那5秒对应的就是150. 如果使用非线性过渡，那5秒对应的值就可能为130,也可能为160. 这样就产生了慢入慢出或快入快出等效果。

与上述例子不同的是，这个模块在计算时候对时间进行了归一化，也就是参数*t*和计算后的参数*t'*都位于[0,1]范围内。


## Installing

NPM等安装方法略

```html
<script src="https://d3js.org/d3-ease.v1.min.js"></script>
<script>

var ease = d3.easeCubic;

</script>
```

[在浏览器中测试d3-ease](https://tonicdev.com/npm/d3-ease)

## API Reference

<a name="_ease" href="#_ease">#</a> <i>ease</i>(<i>t</i>)

根据指定的*t*返回一个"eased" 时间 *tʹ*，都在0到1之间，不同的缓动函数采用不同的对应，比如线性过渡中0-1之间的数值一一对应。

```js
var te = d3.easeCubic(t);
```

应用[elastic](#easeElastic)缓动:

```js
// 在过渡之前创建缓动函数
var customElastic = d3.easeElastic.period(0.4);

// 在过渡期间通过缓动函数计算中间值
var te = customElastic(t);
```

<a name="easeLinear" href="#easeLinear">#</a> d3.<b>easeLinear</b>(<i>t</i>) [<>](https://github.com/d3/d3-ease/blob/master/src/linear.js "Source")

线性过渡

[<img src="https://raw.githubusercontent.com/d3/d3-ease/master/img/linear.png" alt="linear" width="100%" height="240">](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#linear)

<a name="easePolyIn" href="#easePolyIn">#</a> d3.<b>easePolyIn</b>(<i>t</i>) [<>](https://github.com/d3/d3-ease/blob/master/src/poly.js#L3 "Source")

多项式过渡; 可以指定一个[exponent](#poly_exponent)值. 默认值为3时等价于[cubicIn](#easeCubicIn).

[<img src="https://raw.githubusercontent.com/d3/d3-ease/master/img/polyIn.png" alt="polyIn" width="100%" height="240">](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#polyIn)

<a name="easePolyOut" href="#easePolyOut">#</a> d3.<b>easePolyOut</b>(<i>t</i>) [<>](https://github.com/d3/d3-ease/blob/master/src/poly.js#L15 "Source")

多项式过渡，等价于 1 - [polyIn](#easePolyIn)(1 - *t*)，默认指数为3时等价于[cubicOut](#easeCubicOut).

[<img src="https://raw.githubusercontent.com/d3/d3-ease/master/img/polyOut.png" alt="polyOut" width="100%" height="240">](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#polyOut)

<a name="easePoly" href="#easePoly">#</a> d3.<b>easePoly</b>(<i>t</i>) [<>](https://github.com/d3/d3-ease/blob/master/src/poly.js "Source")
<br><a name="easePolyInOut" href="#easePolyInOut">#</a> d3.<b>easePolyInOut</b>(<i>t</i>) [<>](https://github.com/d3/d3-ease/blob/master/src/poly.js#L27 "Source")

对称多项式过渡，在*t*位于[0, 0.5]时相当于使用[polyIn](#easePolyIn)，而*t*位于[0.5, 1]时使用[polyOut](#easePolyOut)。此时指数为3补课调整，等价于[cubic](#easeCubic).

[<img src="https://raw.githubusercontent.com/d3/d3-ease/master/img/polyInOut.png" alt="polyInOut" width="100%" height="240">](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#polyInOut)

<a name="poly_exponent" href="#poly_exponent">#</a> <i>poly</i>.<b>exponent</b>(<i>e</i>) [<>](https://github.com/d3/d3-ease/blob/master/src/poly.js#L1 "Source")

指数过渡，指定不同的指数可以等价于创建[linear](#easeLinear), [quad](#easeQuad), 和 [cubic](#easeCubic):

```js
var linear = d3.easePoly.exponent(1),
    quad = d3.easePoly.exponent(2),
    cubic = d3.easePoly.exponent(3);
```

<a name="easeQuadIn" href="#easeQuadIn">#</a> d3.<b>easeQuadIn</b>(<i>t</i>) [<>](https://github.com/d3/d3-ease/blob/master/src/quad.js#L1 "Source")

二次过渡，等价于 [polyIn](#easePolyIn).[exponent](#poly_exponent)(2).

[<img src="https://raw.githubusercontent.com/d3/d3-ease/master/img/quadIn.png" alt="quadIn" width="100%" height="240">](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#quadIn)

<a name="easeQuadOut" href="#easeQuadOut">#</a> d3.<b>easeQuadOut</b>(<i>t</i>) [<>](https://github.com/d3/d3-ease/blob/master/src/quad.js#L5 "Source")

翻转二次过渡，等价于1 - [quadIn](#easeQuadIn)(1 - *t*). 也等价于[polyOut](#easePolyOut).[exponent](#poly_exponent)(2).

[<img src="https://raw.githubusercontent.com/d3/d3-ease/master/img/quadOut.png" alt="quadOut" width="100%" height="240">](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#quadOut)

<a name="easeQuad" href="#easeQuad">#</a> d3.<b>easeQuad</b>(<i>t</i>) [<>](https://github.com/d3/d3-ease/blob/master/src/quad.js "Source")
<br><a name="easeQuadInOut" href="#easeQuadInOut">#</a> d3.<b>easeQuadInOut</b>(<i>t</i>) [<>](https://github.com/d3/d3-ease/blob/master/src/quad.js#L9 "Source")

对称二次过渡。*t* 位于 [0, 0.5]时等价于[quadIn](#easeQuadIn)，*t* 位于 [0.5, 1]时等价于[poly](#easePoly).[exponent](#poly_exponent)(2)

[<img src="https://raw.githubusercontent.com/d3/d3-ease/master/img/quadInOut.png" alt="quadInOut" width="100%" height="240">](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#quadInOut)

<a name="easeCubicIn" href="#easeCubicIn">#</a> d3.<b>easeCubicIn</b>(<i>t</i>) [<>](https://github.com/d3/d3-ease/blob/master/src/cubic.js#L1 "Source")

三次过渡等价于 [polyIn](#easePolyIn).[exponent](#poly_exponent)(3).

[<img src="https://raw.githubusercontent.com/d3/d3-ease/master/img/cubicIn.png" alt="cubicIn" width="100%" height="240">](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#cubicIn)

<a name="easeCubicOut" href="#easeCubicOut">#</a> d3.<b>easeCubicOut</b>(<i>t</i>) [<>](https://github.com/d3/d3-ease/blob/master/src/cubic.js#L5 "Source")

翻转三次过渡等价于1 - [cubicIn](#easeCubicIn)(1 - *t*). 也等价于 [polyOut](#easePolyOut)，也等价于`polyOut.exponent(2)`.

[<img src="https://raw.githubusercontent.com/d3/d3-ease/master/img/cubicOut.png" alt="cubicOut" width="100%" height="240">](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#cubicOut)

<a name="easeCubic" href="#easeCubic">#</a> d3.<b>easeCubic</b>(<i>t</i>) [<>](https://github.com/d3/d3-ease/blob/master/src/cubic.js "Source")
<br><a name="easeCubicInOut" href="#easeCubicInOut">#</a> d3.<b>easeCubicInOut</b>(<i>t</i>) [<>](https://github.com/d3/d3-ease/blob/master/src/cubic.js#L9 "Source")

对称三次过渡，*t* 位于 [0, 0.5]时等价于[cubicIn](#easeCubicIn)，*t* 位于 [0.5, 1]时等价于[cubicOut](#easeCubicOut)，也等价于[poly](#easePoly).[exponent](#poly_exponent)(3).

[<img src="https://raw.githubusercontent.com/d3/d3-ease/master/img/cubicInOut.png" alt="cubicInOut" width="100%" height="240">](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#cubicInOut)

<a name="easeSinIn" href="#easeSinIn">#</a> d3.<b>easeSinIn</b>(<i>t</i>) [<>](https://github.com/d3/d3-ease/blob/master/src/sin.js#L4 "Source")

正弦过渡，返回sin(*t*).

[<img src="https://raw.githubusercontent.com/d3/d3-ease/master/img/sinIn.png" alt="sinIn" width="100%" height="240">](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#sinIn)

<a name="easeSinOut" href="#easeSinOut">#</a> d3.<b>easeSinOut</b>(<i>t</i>) [<>](https://github.com/d3/d3-ease/blob/master/src/sin.js#L8 "Source")

翻转正弦过渡，等价于1 - [sinIn](#easeSinIn)(1 - *t*).

[<img src="https://raw.githubusercontent.com/d3/d3-ease/master/img/sinOut.png" alt="sinOut" width="100%" height="240">](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#sinOut)

<a name="easeSin" href="#easeSin">#</a> d3.<b>easeSin</b>(<i>t</i>) [<>](https://github.com/d3/d3-ease/blob/master/src/sin.js "Source")
<br><a name="easeSinInOut" href="#easeSinInOut">#</a> d3.<b>easeSinInOut</b>(<i>t</i>) [<>](https://github.com/d3/d3-ease/blob/master/src/sin.js#L12 "Source")

对称正弦过渡。在*t* 位于 [0, 0.5]时等价于[sinIn](#easeSinIn)，*t* 位于 [0.5, 1]时等价于[sinOut](#easeSinOut) 

[<img src="https://raw.githubusercontent.com/d3/d3-ease/master/img/sinInOut.png" alt="sinInOut" width="100%" height="240">](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#sinInOut)

<a name="easeExpIn" href="#easeExpIn">#</a> d3.<b>easeExpIn</b>(<i>t</i>) [<>](https://github.com/d3/d3-ease/blob/master/src/exp.js#L1 "Source")

指数过渡

[<img src="https://raw.githubusercontent.com/d3/d3-ease/master/img/expIn.png" alt="expIn" width="100%" height="240">](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#expIn)

<a name="easeExpOut" href="#easeExpOut">#</a> d3.<b>easeExpOut</b>(<i>t</i>) [<>](https://github.com/d3/d3-ease/blob/master/src/exp.js#L5 "Source")

翻转指数过渡，等价于 1 - [expIn](#easeExpIn)(1 - *t*).

[<img src="https://raw.githubusercontent.com/d3/d3-ease/master/img/expOut.png" alt="expOut" width="100%" height="240">](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#expOut)

<a name="easeExp" href="#easeExp">#</a> d3.<b>easeExp</b>(<i>t</i>) [<>](https://github.com/d3/d3-ease/blob/master/src/exp.js "Source")
<br><a name="easeExpInOut" href="#easeExpInOut">#</a> d3.<b>easeExpInOut</b>(<i>t</i>) [<>](https://github.com/d3/d3-ease/blob/master/src/exp.js#L9 "Source")

对称指数过渡

[<img src="https://raw.githubusercontent.com/d3/d3-ease/master/img/expInOut.png" alt="expInOut" width="100%" height="240">](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#expInOut)

<a name="easeCircleIn" href="#easeCircleIn">#</a> d3.<b>easeCircleIn</b>(<i>t</i>) [<>](https://github.com/d3/d3-ease/blob/master/src/circle.js#L1 "Source")

圆形(?)过渡，看图感受

[<img src="https://raw.githubusercontent.com/d3/d3-ease/master/img/circleIn.png" alt="circleIn" width="100%" height="240">](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#circleIn)

<a name="easeCircleOut" href="#easeCircleOut">#</a> d3.<b>easeCircleOut</b>(<i>t</i>) [<>](https://github.com/d3/d3-ease/blob/master/src/circle.js#L5 "Source")

翻转圆形(?)过渡


[<img src="https://raw.githubusercontent.com/d3/d3-ease/master/img/circleOut.png" alt="circleOut" width="100%" height="240">](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#circleOut)

<a name="easeCircle" href="#easeCircle">#</a> d3.<b>easeCircle</b>(<i>t</i>) [<>](https://github.com/d3/d3-ease/blob/master/src/circle.js "Source")
<br><a name="easeCircleInOut" href="#easeCircleInOut">#</a> d3.<b>easeCircleInOut</b>(<i>t</i>) [<>](https://github.com/d3/d3-ease/blob/master/src/circle.js#L9 "Source")

对称圆形(?)过渡

[<img src="https://raw.githubusercontent.com/d3/d3-ease/master/img/circleInOut.png" alt="circleInOut" width="100%" height="240">](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#circleInOut)

<a name="easeElasticIn" href="#easeElasticIn">#</a> d3.<b>easeElasticIn</b>(<i>t</i>) [<>](https://github.com/d3/d3-ease/blob/master/src/elastic.js#L5 "Source")

弹性过渡，可以指定[amplitude](#elastic_amplitude) 和 [period](#elastic_period)参数默认为1 和 0.3

[<img src="https://raw.githubusercontent.com/d3/d3-ease/master/img/elasticIn.png" alt="elasticIn" width="100%" height="360">](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#elasticIn)

<a name="easeElastic" href="#easeElastic">#</a> d3.<b>easeElastic</b>(<i>t</i>) [<>](https://github.com/d3/d3-ease/blob/master/src/elastic.js "Source")
<br><a name="easeElasticOut" href="#easeElasticOut">#</a> d3.<b>easeElasticOut</b>(<i>t</i>) [<>](https://github.com/d3/d3-ease/blob/master/src/elastic.js#L18 "Source")

翻转弹性过渡，等价于 1 - [elasticIn](#easeElasticIn)(1 - *t*).

[<img src="https://raw.githubusercontent.com/d3/d3-ease/master/img/elasticOut.png" alt="elasticOut" width="100%" height="360">](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#elasticOut)

<a name="easeElasticInOut" href="#easeElasticInOut">#</a> d3.<b>easeElasticInOut</b>(<i>t</i>) [<>](https://github.com/d3/d3-ease/blob/master/src/elastic.js#L31 "Source")

翻转弹性过渡

[<img src="https://raw.githubusercontent.com/d3/d3-ease/master/img/elasticInOut.png" alt="elasticInOut" width="100%" height="360">](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#elasticInOut)

<a name="elastic_amplitude" href="#elastic_amplitude">#</a> <i>elastic</i>.<b>amplitude</b>(<i>a</i>) [<>](https://github.com/d3/d3-ease/blob/master/src/elastic.js#L40 "Source")

指定amplitude参数 *a*.

<a name="elastic_period" href="#elastic_period">#</a> <i>elastic</i>.<b>period</b>(<i>p</i>) [<>](https://github.com/d3/d3-ease/blob/master/src/elastic.js#L41 "Source")

指定period参数 *p*.

<a name="easeBackIn" href="#easeBackIn">#</a> d3.<b>easeBackIn</b>(<i>t</i>) [<>](https://github.com/d3/d3-ease/blob/master/src/back.js#L3 "Source")

[Anticipatory](https://en.wikipedia.org/wiki/12_basic_principles_of_animation#Anticipation)(不知道怎么翻译看图感受曲线)过渡

[<img src="https://raw.githubusercontent.com/d3/d3-ease/master/img/backIn.png" alt="backIn" width="100%" height="300">](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#backIn)

<a name="easeBackOut" href="#easeBackOut">#</a> d3.<b>easeBackOut</b>(<i>t</i>) [<>](https://github.com/d3/d3-ease/blob/master/src/back.js#L15 "Source")

翻转anticipatory过渡，相当于1 - [backIn](#easeBackIn)(1 - *t*).

[<img src="https://raw.githubusercontent.com/d3/d3-ease/master/img/backOut.png" alt="backOut" width="100%" height="300">](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#backOut)

<a name="easeBack" href="#easeBack">#</a> d3.<b>easeBack</b>(<i>t</i>) [<>](https://github.com/d3/d3-ease/blob/master/src/back.js "Source")
<br><a name="easeBackInOut" href="#easeBackInOut">#</a> d3.<b>easeBackInOut</b>(<i>t</i>) [<>](https://github.com/d3/d3-ease/blob/master/src/back.js#L27 "Source")

*t* 在 [0, 0.5] 时候 [backIn](#easeBackIn)，*t* 在 [0.5, 1] 时候 [backOut](#easeBackOut) .

[<img src="https://raw.githubusercontent.com/d3/d3-ease/master/img/backInOut.png" alt="backInOut" width="100%" height="300">](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#backInOut)

<a name="back_overshoot" href="#back_overshoot">#</a> <i>back</i>.<b>overshoot</b>(<i>s</i>) [<>](https://github.com/d3/d3-ease/blob/master/src/back.js#L1 "Source")

指定overshoot参数 *s*.

<a name="easeBounceIn" href="#easeBounceIn">#</a> d3.<b>easeBounceIn</b>(<i>t</i>) [<>](https://github.com/d3/d3-ease/blob/master/src/bounce.js#L12 "Source")

弹跳过渡

[<img src="https://raw.githubusercontent.com/d3/d3-ease/master/img/bounceIn.png" alt="bounceIn" width="100%" height="240">](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#bounceIn)

<a name="easeBounce" href="#easeBounce">#</a> d3.<b>easeBounce</b>(<i>t</i>) [<>](https://github.com/d3/d3-ease/blob/master/src/bounce.js "Source")
<br><a name="easeBounceOut" href="#easeBounceOut">#</a> d3.<b>easeBounceOut</b>(<i>t</i>) [<>](https://github.com/d3/d3-ease/blob/master/src/bounce.js#L16 "Source")

翻转弹跳过渡，等价于 1 - [bounceIn](#easeBounceIn)(1 - *t*).

[<img src="https://raw.githubusercontent.com/d3/d3-ease/master/img/bounceOut.png" alt="bounceOut" width="100%" height="240">](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#bounceOut)

<a name="easeBounceInOut" href="#easeBounceInOut">#</a> d3.<b>easeBounceInOut</b>(<i>t</i>) [<>](https://github.com/d3/d3-ease/blob/master/src/bounce.js#L20 "Source")

对称弹跳过渡

[<img src="https://raw.githubusercontent.com/d3/d3-ease/master/img/bounceInOut.png" alt="bounceInOut" width="100%" height="240">](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#bounceInOut)
