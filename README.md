[![GitHub stars](https://img.shields.io/github/stars/xswei/d3js_doc.svg?style=flat-square)](https://github.com/xswei/d3js_doc/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/xswei/d3js_doc.svg?style=flat-square)](https://github.com/xswei/d3js_doc/issues)
[![GitHub forks](https://img.shields.io/github/forks/xswei/d3js_doc.svg?style=flat-square)](https://github.com/xswei/d3js_doc/network)
[![GitHub last commit](https://img.shields.io/github/last-commit/xswei/d3js_doc.svg?style=flat-square)](https://github.com/xswei/d3js_doc)

# D3: Data-Driven Documents

<a href="https://d3js.org"><img src="https://d3js.org/logo.svg" align="left" hspace="10" vspace="10"></a>

**D3** (或者叫 **D3.js** )是一个基于 `web` 标准的 **JavaScript** 可视化库. `D3` 可以借助 `SVG`, `Canvas` 以及 `HTML` 将你的数据生动的展现出来. `D3` 结合了强大的可视化交互技术以及数据驱动 `DOM` 的技术, 让你可以借助于现代浏览器的强大功能自由的对数据进行可视化。 

<br>

## 资源

* [最新发布版本](https://github.com/d3/d3/releases)

#### 文档

* [API 文档 ( 中文版 )](https://github.com/xswei/d3js_doc/tree/master/API_Reference/API.md?_blank)
* [API 文档 ( 英文版 )](https://github.com/d3/d3/blob/master/API.md?_blank)
* [d3-queue(v5.x.x中被移除)](https://github.com/xswei/d3js_doc/blob/master/API_Reference/V4.md)
* [d3-request(v5.x.x中被移除)](https://github.com/xswei/d3js_doc/blob/master/API_Reference/V4.md)
* [v3 与 v4](https://github.com/xswei/d3js_doc/tree/master/API_Reference/CHANGES.md)

#### 示例

* [官方画廊](https://github.com/d3/d3/wiki/Gallery?_blank)
* [搜索示例](http://blockbuilder.org/search#)
* [Mike Bostock 的示例](https://bl.ocks.org/mbostock?_blank)

#### 社区

* [d3.js on Stack Overflow](https://stackoverflow.com/questions/tagged/d3.js?_blank)
* [d3.js Google Group](http://groups.google.com/group/d3-js?_blank)
* [插件](https://github.com/d3/d3/wiki/Plugins?_blank)

#### 教程

* [教程](https://github.com/d3/d3/wiki/Tutorials?_blank)
* [基于 d3js 的图论](https://mrpandey.github.io/d3graphTheory/index.html)
* [理解数据绑定](https://bost.ocks.org/mike/join/?_blank)
* [数据绑定示例](https://bl.ocks.org/mbostock/3808218?_blank)

## 最新版本动态

#### 5.10.0 (2019-08-20)

##### d3-brush

- Add brush.touchable.
- Add brush.clear.
- Add brush.keyModifiers.
- Fix default brush.extent to consider the SVG viewBox, if any.
- Fix scroll prevention on touch devices.
- Fix coercion of selection and extent inputs.
- Fix order of handles in the DOM.
- Fix brush.move when selection is empty.
- Fix Space key immediately after clicking on a handle.
- Fix missing brush event on parallel start.
- Fix handling of orphaned input gestures.
- Fix default brush.touchable if navigator.maxTouchPoints.
- Fix multitouch gestures.
- Fix click consumption when brush is not empty.
- Fix default brush.filter on control-click.

##### d3-color

- Add color.copy.
- Add color.formatHex.
- Add color.formatHsl.
- Add color.formatRgb.
- Deprecate color.hex; use color.formatHex instead.

##### d3-drag

- Fix default drag.filter on control-click.
- Fix default drag.touchable if navigator.maxTouchPoints.

##### d3-path

- Fix coercion of anticlockwise argument to path.arc. Thanks, @Fil!

##### d3-scale-chromatic

- Add d3.schemeTableau10. Thanks @akngs!

##### d3-zoom

- Fix default zoom.extent to consider the SVG viewBox.
- Fix default zoom.filter to ignore control-click.
- Fix default zoom.touchable if navigator.maxTouchPoints.
- Fix default zoom.wheelDelta if deltaMode !== 0. Thanks, @Dakkaron!
- Fix handling of filtered multitouch gestures. Thanks, @robinhouston and @testower!
- Fix handling of orphaned gestures.
- Fix emitting of zoom events during dbltap gestures. Thanks, @cambecc!
- Add optional point to zoom.transform and related methods.
- Fix d3.zoomTransform to inherit the transform from the closest ancestor, if any.

#### 5.x.x 大版本改动

`D3 5.0` 引入了很少的非向后兼容的改变.

`D3` 现在采用的是 [Promises](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Using_promises) 来替代异步回调加载数据。 `Promises` 简化了异步代码结构，尤其是现代浏览器支持 [async and await](https://javascript.info/async-await) 操作。(在 [Observable](https://beta.observablehq.com) 中参考 [introduction to promises](https://beta.observablehq.com/@mbostock/introduction-to-promises) 的介绍)。例如在 `V4` 中使用如下方式加载 `CSV` 文件:

```js
d3.csv("file.csv", function(error, data) {
  if (error) throw error;
  console.log(data);
});
```

在 `V5` 中基于 `Promises` 实现:

```js
d3.csv("file.csv").then(function(data) {
  console.log(data);
});
```

要注意的是不需要重新抛出错误，因为 `Promise` 会自动 `reject`，并且需要的话可以使用 *promise*.catch。使用 `await` 的话代码会更简单：

```js
const data = await d3.csv("file.csv");
console.log(data);
```

由于采用了 `promises`，`D3` 现在使用 [Fetch API](https://fetch.spec.whatwg.org/) 来代替 [XMLHttpRequest](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest): [d3-request](https://github.com/d3/d3-request) 模块由 [d3-fetch](https://github.com/d3/d3-fetch) 替代。`Fetch` 支持许多强大的特性，比如 [streaming responses](https://beta.observablehq.com/@mbostock/streaming-shapefiles)。`D3 5.0` 也不再使用 [d3-queue](https://github.com/d3/d3-queue)，取而代之推荐 [Promise.all](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) 来处理批量异步任务，或者使用辅助库比如 [p-queue](https://github.com/sindresorhus/p-queue) 来 [control concurrency(控制并发)](https://beta.observablehq.com/@mbostock/hello-p-queue).

`D3` 不再提供 `d3.schemeCategory20*` 颜色方案。因为这些颜色有缺陷，可能会错误的暗示数据中的关系：色调相近的可能被认为是一个分组，而亮度可能被错认为是排序。作为替换，`D3 5.0` 使用 [d3-scale-chromatic](https://github.com/d3/d3-scale-chromatic)，它实现了 `ColorBrewer` 的方案设计，包括 [categorical](https://github.com/d3/d3-scale-chromatic/blob/master/README.md#categorical), [diverging](https://github.com/d3/d3-scale-chromatic/blob/master/README.md#diverging), [sequential single-hue](https://github.com/d3/d3-scale-chromatic/blob/master/README.md#sequential-single-hue) 和 [sequential multi-hue](https://github.com/d3/d3-scale-chromatic/blob/master/README.md#sequential-multi-hue) 方案。这些颜色方案在连续式和分散式都是可用的。

`D3` 提供了通过 [d3-contour](https://github.com/d3/d3-contour) 实现的 [marching squares(生成二维轮廓的算法)](https://beta.observablehq.com/@mbostock/d3-contour-plot) 和 [density estimation(密度估计)](https://beta.observablehq.com/@mbostock/d3-density-contours). 并且添加了两个新的 [d3-selection](https://github.com/d3/d3-selection)  方法：[*selection*.clone](https://github.com/d3/d3-selection/blob/master/README.md#selection_clone) 用来克隆已选择的节点，[d3.create](https://github.com/d3/d3-selection/blob/master/README.md#create) 用来创建分离的元素。 [Geographic projections](https://github.com/d3/d3-geo) 也支持  [*projection*.angle](https://github.com/d3/d3-geo/blob/master/README.md#projection_angle)，一种由 **Philippe Rivière** 提出的梦幻般的新的多面体投影。

最后，`D3` 的 [package.json](https://github.com/d3/d3/blob/master/package.json) 不再引用依赖的精确版本，解决了重复安装 `D3` 模块的问题。

## 安装

如果使用 `npm`, 则可以通过 `npm install d3` 来安装. 此外还可以下载 [最新版](https://unpkg.com/d3/build/), 最新版支持 `AMD`、`CommonJS` 以及基础标签引入形式. 你也可以直接从 [d3js.org](https://d3js.org), [CDNJS](https://cdnjs.com/libraries/d3), 或者 [unpkg](https://unpkg.com/d3/) 加载. 比如:
«
```js
<script src="https://d3js.org/d3.v5.js"></script>
```

压缩版:

```js
<script src="https://d3js.org/d3.v5.min.js"></script>
```

你也可以单独使用 `d3` 中的某个模块, 比如单独使用 [d3-selection](https://github.com/d3/d3-selection): 

```js
<script src="https://d3js.org/d3-selection.v1.js"></script>

```

D3基于 [ES2015 modules](http://www.2ality.com/2014/09/es6-modules-final.html) 开发.  可以使用 `Rollup`, `webpack` 或者其他你偏爱的打包工具进行构建. 在一个符合 ES2015 的应用中导入 `d3` 或者 `d3` 的某些模块:

```js
import {scaleLinear} from "d3-scale";
```

或者导入 `d3` 的全部功能并且设置命名空间 (这里是 `d3`):

```js
import * as d3 from "d3";
```

在 `Nodejs` 环境中:

```js
var d3 = require("d3");
```

你也可以导入多个模块然后将这些模块集合到 `d3` 对象中, 此时使用 [Object.assign](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign):

```js
var d3 = Object.assign({}, require("d3-format"), require("d3-geo"), require("d3-geo-projection"));
```

## 支持环境

`D3 5+` 支持最新浏览器，比如 `Chrome`，`Edge`，`Firefox` 以及 `Safari`。`D3 v4` 以及之前的版本支持 `IE 9` 以上的版本。`D3` 的一部分功能能在旧版的浏览器中运行，因为 `D3` 的核心功能对浏览器的要求比较低。例如 `d3-selection` 使用 `Level 1` 级 [Selectors API](http://www.w3.org/TR/selectors-api/)，但是可以通过预先加载 [Sizzle](http://sizzlejs.com/) 来实现兼容。现代浏览器对 [SVG](http://www.w3.org/TR/SVG/) 和 [CSS3 Transition](http://www.w3.org/TR/css3-transitions/) 的支持比较好。所以 `D3` 不支持更低级别的浏览器，如果你的浏览器不支持这些标准，那么对不起了，老铁。

`D3` 也可以运行在 [Node](http://nodejs.org/) 和 [Web workers](http://www.whatwg.org/specs/web-apps/current-work/multipage/workers.html) 中. 在 `Node` 环境中使用 `DOM` 的时候，必须要提供自己的 `DOM` 实现。推荐使用 [JSDOM](https://github.com/tmpvar/jsdom)，为了避免定义全局 `document`，建议将 `DOM` 传递给 `d3.select` 或者将 `NodeList` 传递给 `d3.selectAll`, 如下：

```js
var d3 = require("d3"),
    jsdom = require("jsdom");

var document = jsdom.jsdom(),
    svg = d3.select(document.body).append("svg");
```
在支持 [ES 模块化](http://exploringjs.com/es6/ch_modules.html) 的环境中，你可以将 `d3` 作为一个命名空间来导入 `D3` 的全部功能:

```js
import * as d3 from "d3";
```
如果你不想导入全部模块，则分配命名空间的时候要和 `d3` 进行区分:

```js
import * as d3 from "d3";
import * as d3GeoProjection from "d3-geo-projection";
```
出于这个原因，应该优先考虑 `D3` 模块中的原有变量名，可以按需导入：

```js
import {select, selectAll} from "d3-selection";
import {geoPath} from "d3-geo";
import {geoPatterson} from "d3-geo-projection";
```
如果你使用打包工具，则确保已经配置好正确的入口，可以参考 [resolve.mainFields](https://webpack.js.org/configuration/resolve/#resolve-mainfields)

## 本地开发

由于浏览器的安全限制，不能直接读取本地文件。在本地开发的时候，必须要运行一个服务器环境而不是使用`file://`, 推荐使用 `Nodejs` 的[http-server](https://www.npmjs.com/package/http-server)，安装方法:

```js
npm install -g http-server
```

运行:

```js
http-server & 

```

然后会在当前目录启动一个 http://localhost:8080 的服务。

### 联系我

<img src="https://github.com/xswei/d3js_doc/blob/master/img/QQ-translator.jpg" width="200" align=center />
214175619

### 营养跟不上了快给我来瓶冰阔乐

<img src="https://github.com/xswei/d3js_doc/blob/master/img/weichat-donate.png" width="200" align=center />

### 翻译说明

每个子仓库中包含三个 `.md` 文件:

- *README.md* 文件是翻译后的中文版
- *README_EN.md* 文件是翻译时参照的英文版
- *README_ORIGIN.md* 文件是源仓库文档

更新时, 首先将 *README_ORIGIN.md* 与官网文档进行同步, 然后将 *README_EN.md* 和 *README_ORIGIN.md* 进行比对, 将 `diff` 更新至 *README.md*, 同时将 *README_EN.md* 与 *README_ORIGIN.md* 进行同步.

### 版权说明

<a rel="license" href="https://creativecommons.org/licenses/by-nc/4.0/deed.zh"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" /></a>

