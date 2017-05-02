# d3js中文参考文档


#### 仅供参考，以[原英文版](https://github.com/d3/d3/blob/master/API.md)为准


---
* [介绍](https://github.com/xswei/d3js_doc/tree/master/Introduction)

* [d3 4.X与3.X的不同](https://github.com/xswei/d3js_doc/tree/master/ReleaseNotes)

* [示例](http://bl.ocks.org/mbostock)

* [插件](https://github.com/xswei/d3js_doc/tree/master/Plugins)

* [英文教程](https://github.com/d3/d3/wiki/Tutorials)

* [DEMO](https://github.com/xswei/d3js_doc/tree/master/demo)

* [Mike Bostock的案例](https://bl.ocks.org/mbostock)

* [官方画廊](https://github.com/d3/d3/wiki/Gallery)

#### 文档参考

* [Arrays](https://github.com/xswei/d3js_doc/tree/master/API/d3-array-master)  (Statistics, Search, Transformations, Histograms)(**数组、
静态方法、查找类方法、变换类方法、直方图**)

* [Axes](https://github.com/xswei/d3js_doc/tree/master/API/d3-axis-master)(**坐标轴**)

* [Brushes](https://github.com/xswei/d3js_doc/tree/master/API/d3-brush-master)(**刷子**)

* [Chords](https://github.com/xswei/d3js_doc/tree/master/API/d3-chord-master)(**弦图**)

* [Collections](https://github.com/xswei/d3js_doc/tree/master/API/d3-collection-master)(Object,Maps,Sets,Nests)(**集合、对象、map、嵌套**)

* [Colors](https://github.com/xswei/d3js_doc/tree/master/API/d3-color-master)(**颜色**)

* [Delimiter-Separated Values(d3-dsv)](https://github.com/xswei/d3js_doc/tree/master/API/d3-dsv-master)(**dsv模块**)

* [Dispatches](https://github.com/xswei/d3js_doc/tree/master/API/d3-dispatch-master)(**事件调度**)

* [Dragging](https://github.com/xswei/d3js_doc/tree/master/API/d3-drag-master)(**拖拽**)

* [Easings](https://github.com/xswei/d3js_doc/tree/master/API/d3-ease-master)(**过渡类型**)

* [Forces](https://github.com/xswei/d3js_doc/tree/master/API/d3-force-master)(**力学仿真模拟**)

* [Number Formats](https://github.com/xswei/d3js_doc/tree/master/API/d3-format-master)(**数值格式化**)

* [Geographies](https://github.com/xswei/d3js_doc/tree/master/API/d3-geo-master)(**地理**)

* [Hierarchies](https://github.com/xswei/d3js_doc/tree/master/API/d3-hierarchy-master)(层次结构布局)

* [Interpolators](https://github.com/xswei/d3js_doc/tree/master/API/d3-interpolate-master)(插值器)

* [Paths](https://github.com/xswei/d3js_doc/tree/master/API/d3-path-master)(**Canvas和SVG之间互转**)

* [Polygons](https://github.com/xswei/d3js_doc/tree/master/API/d3-polygon-master)(**二维多边形**)

* [Quadtrees](https://github.com/xswei/d3js_doc/tree/master/API/d3-quadtree-master)(**四叉树**)

* [Queues](https://github.com/xswei/d3js_doc/tree/master/API/d3-queue-master)(**队列**)

* [Random Numbers](https://github.com/xswei/d3js_doc/tree/master/API/d3-random-master)(**随机数**)

* [Requests](https://github.com/xswei/d3js_doc/tree/master/API/d3-request-master)(**数据请求**)

* [Scales](https://github.com/xswei/d3js_doc/tree/master/API/d3-scale-master)  (Continuous, Sequential, Quantize, Ordinal)(比例尺)

* [Selections](https://github.com/xswei/d3js_doc/tree/master/API/d3-selection-master)  (Selecting, Modifying, Data, Events, Control, Local Variables, Namespaces)(选择集)

* [Shapes](https://github.com/xswei/d3js_doc/tree/master/API/d3-shape-master)  (Arcs, Pies, Lines, Areas, Curves, Symbols, Stacks)(形状)

* [Time Formats](https://github.com/xswei/d3js_doc/tree/master/API/d3-time-format-master)(日期时间)

* [Time Intervals](https://github.com/xswei/d3js_doc/tree/master/API/d3-time-master)(时间间隔)

* [Timers](https://github.com/xswei/d3js_doc/tree/master/API/d3-timer-master)(**定时器**)

* [Transitions](https://github.com/xswei/d3js_doc/tree/master/API/d3-transition-master)(过渡)

* [Voronoi Diagrams](https://github.com/xswei/d3js_doc/tree/master/API/d3-voronoi-master)(Voronoi图)

* [Zooming](https://github.com/xswei/d3js_doc/tree/master/API/d3-zoom-master)(**缩放**)

#### 安装

如果使用`npm`，则可以通过`npm install d3`来安装。此外还可以下载[最新版](https://unpkg.com/d3/build/)，最新版支持AMD、CommonJS以及vanilla环境。可以使用[Rollup创建自定义的库文件包](http://bl.ocks.org/mbostock/bb09af4c39c79cffcde4)，也可以直接从[d3js.org](https://d3js.org/)引用：

```js
<script src="https://d3js.org/d3.v4.js"></script>
```

压缩版:

```js
<script src="https://d3js.org/d3.v4.min.js"></script>
```

你也可以单独使用d3中的某个模块，比如,单独使用[d3-selection](https://github.com/d3/d3-selection)：

```js
<script src="https://d3js.org/d3-selection.v1.min.js"></script>

```

如果要使用某个固定的版本，则考虑[CNDJS](https://cdnjs.com/libraries/d3) 或[ unpkg](https://unpkg.com/d3/)

#### 支持环境

D3支持“现代”浏览器，也就是除IE8及以下的浏览器。D3针对Firefox，Chrome，Safari，Opera，IE9 +，Android和iOS进行测试，D3的一部分功能能在旧版的浏览器中运行，因为D3的核心功能对浏览器的要求比较低：JavaScript和 [W3C DOM](http://www.w3.org/DOM/) API。D3使用 Level 1级[Selectors API](http://www.w3.org/TR/selectors-api/)，但是可以通过预先加载[Sizzle](http://sizzlejs.com/)来实现兼容。现代浏览器对[SVG](http://www.w3.org/TR/SVG/)和[CSS3 Transition](http://www.w3.org/TR/css3-transitions/) 的支持比较好。所以D3不支持更低级别的浏览器，如果你的浏览器不支持这些标准，那么祝你好运...

D3也可以运行在[Node](http://nodejs.org/) 和 [Web workers](http://www.whatwg.org/specs/web-apps/current-work/multipage/workers.html)中. 在Node环境中使用DOM的时候，必须要提供自己的DOM实现。推荐使用[JSDOM](https://github.com/tmpvar/jsdom)，为了避免定义全局`document`，建议将DOM传递给d3.select或者将NodeList传递给d3.selectAll,如下：

```js
var d3 = require("d3"),
    jsdom = require("jsdom");

var document = jsdom.jsdom(),
    svg = d3.select(document.body).append("svg");

```

#### 本地开发

由于浏览器的安全限制，不能直接读取本地文件。在本地开发的时候，必须要运行一个服务器环境而不是使用`file://`, 推荐使用Nodejs的[http-server](https://www.npmjs.com/package/http-server)，安装方法:

```js
npm install -g http-server

```

运行:

```js
http-server & 

```

然后会在当前目录启动一个 http://localhost:8080 的服务。