# d3-path

在使用2D Canvas绘图时，你会使用到如下代码::

```js
function drawCircle(context, radius) {
  context.moveTo(radius, 0);
  context.arc(0, 0, radius, 0, 2 * Math.PI);
}
```

d3-path模块可以获取Canvas2dContext状态并转为[SVG](http://www.w3.org/TR/SVG/paths.html)路径字符串. 这个模块通过 [序列化](#path_toString) [CanvasPathMethods](http://www.w3.org/TR/2dcontext/#canvaspathmethods) 然后调用[SVG path data](http://www.w3.org/TR/SVG/paths.html#PathData)来实现(构造一个path对象，记录canvas路径，并提供方法将路径在canvas绘图命令和SVG路径之间转换). 例如:

```js
var context = d3.path();	
drawCircle(context, 40);
pathElement.setAttribute("d", context.toString());
```

这样就可以只写一次代码，而同时应用于SVG和Canvas，更多示例参考[d3-shape](https://github.com/d3/d3-shape).

## Installing

NPM等安装方法略


```html
<script src="https://d3js.org/d3-path.v1.min.js"></script>
<script>

var path = d3.path();
path.moveTo(1, 2);
path.lineTo(3, 4);
path.closePath();

</script>
```

[Try d3-path in your browser.](https://tonicdev.com/npm/d3-path)

## API Reference

<a name="path" href="#path">#</a> d3.<b>path</b>() [<>](https://github.com/d3/d3-path/blob/master/src/path.js "Source")

构造一个path对象，这个path对象拥有 [CanvasPathMethods](http://www.w3.org/TR/2dcontext/#canvaspathmethods)的方法.

也就是说这个path对象可以当canvas的context用，当然限于以下基本的绘图方法。

<a name="path_moveTo" href="#path_moveTo">#</a> <i>path</i>.<b>moveTo</b>(<i>x</i>, <i>y</i>) [<>](https://github.com/d3/d3-path/blob/master/src/path.js#L18 "Source")

相当于 [*context*.moveTo](http://www.w3.org/TR/2dcontext/#dom-context-2d-moveto) 和 SVG的 [“moveto” command](http://www.w3.org/TR/SVG/paths.html#PathDataMovetoCommands)命令.

<a name="path_closePath" href="#path_closePath">#</A> <i>path</i>.<b>closePath</b>() [<>](https://github.com/d3/d3-path/blob/master/src/path.js#L21 "Source")

闭合路径，相当于[*context*.closePath](http://www.w3.org/TR/2dcontext/#dom-context-2d-closepath) 和 SVG的 [“closepath” command(Z/z)](http://www.w3.org/TR/SVG/paths.html#PathDataClosePathCommand).

<a name="path_lineTo" href="#path_lineTo">#</a> <i>path</i>.<b>lineTo</b>(<i>x</i>, <i>y</i>) [<>](https://github.com/d3/d3-path/blob/master/src/path.js#L27 "Source")

相当于 [*context*.lineTo](http://www.w3.org/TR/2dcontext/#dom-context-2d-lineto) 和SVG的 [“lineto” command(L/l)](http://www.w3.org/TR/SVG/paths.html#PathDataLinetoCommands).

<a name="path_quadraticCurveTo" href="#path_quadraticCurveTo">#</a> <i>path</i>.<b>quadraticCurveTo</b>(<i>cpx</i>, <i>cpy</i>, <i>x</i>, <i>y</i>) [<>](https://github.com/d3/d3-path/blob/master/src/path.js#L30 "Source")

绘制一个二次贝塞尔曲线，相当于 [*context*.quadraticCurveTo](http://www.w3.org/TR/2dcontext/#dom-context-2d-quadraticcurveto) 和SVG的 [quadratic Bézier curve commands(Q/q)](http://www.w3.org/TR/SVG/paths.html#PathDataQuadraticBezierCommands)命令.

<a name="path_bezierCurveTo" href="#path_bezierCurveTo">#</a> <i>path</i>.<b>bezierCurveTo</b>(<i>cpx1</i>, <i>cpy1</i>, <i>cpx2</i>, <i>cpy2</i>, <i>x</i>, <i>y</i>) [<>](https://github.com/d3/d3-path/blob/master/src/path.js#L33 "Source")

绘制一个三次贝塞尔曲线，相当于[*context*.bezierCurveTo](http://www.w3.org/TR/2dcontext/#dom-context-2d-beziercurveto) 和SVG的 [cubic Bézier curve commands(C/c)](http://www.w3.org/TR/SVG/paths.html#PathDataCubicBezierCommands)命令.

<a name="path_arcTo" href="#path_arcTo">#</a> <i>path</i>.<b>arcTo</b>(<i>x1</i>, <i>y1</i>, <i>x2</i>, <i>y2</i>, <i>radius</i>) [<>](https://github.com/d3/d3-path/blob/master/src/path.js#L36 "Source")

绘制一段圆弧，相当于[*context*.arcTo](http://www.w3.org/TR/2dcontext/#dom-context-2d-arcto) 和SVG的 [elliptical arc curve commands(C/c)](http://www.w3.org/TR/SVG/paths.html#PathDataEllipticalArcCommands).

context.arcTo(x1, y1, x2, y2, radius):根据给定的控制点和半径画一段圆弧，再以直线连接两个控制点。

<a name="path_arc" href="#path_arc">#</a> <i>path</i>.<b>arc</b>(<i>x</i>, <i>y</i>, <i>radius</i>, <i>startAngle</i>, <i>endAngle</i>[, <i>anticlockwise</i>]) [<>](https://github.com/d3/d3-path/blob/master/src/path.js#L92 "Source")

绘制一段圆弧，相当于[*context*.arc](http://www.w3.org/TR/2dcontext/#dom-context-2d-arc) 和SVG的 [elliptical arc curve commands(C/c)](http://www.w3.org/TR/SVG/paths.html#PathDataEllipticalArcCommands).

context.arc(x, y, radius, startAngle, endAngle, anticlockwise):画一个以（x,y）为圆心的以radius为半径的圆弧（圆），从startAngle开始到endAngle结束，按照anticlockwise给定的方向（默认为顺时针）来生成。

<a name="path_rect" href="#path_rect">#</a> <i>path</i>.<b>rect</b>(<i>x</i>, <i>y</i>, <i>w</i>, <i>h</i>) [<>](https://github.com/d3/d3-path/blob/master/src/path.js#L137 "Source")

创建一个矩形，相当于[*context*.rect](http://www.w3.org/TR/2dcontext/#dom-context-2d-rect) 和 SVG的 [“lineto” commands](http://www.w3.org/TR/SVG/paths.html#PathDataLinetoCommands)，SVG中没有直接画矩形的命令，这里通过L,V,H命令的结合画出一个矩形.

<a name="path_toString" href="#path_toString">#</a> <i>path</i>.<b>toString</b>() [<>](https://github.com/d3/d3-path/blob/master/src/path.js#L140 "Source")

将*path*对象的路径信息以SVG可用的[path](http://www.w3.org/TR/SVG/paths.html#PathData)元素*d*属性输出，可以直接把输出的字符串赋值给SVG的path元素。
