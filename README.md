**转载请注明本仓库地址**

最新版文档逐步完善中, 之前版本请参考 [**这里**](https://github.com/xswei/d3js_doc/tree/master/d3js_doc_old)

# D3: Data-Driven Documents

<a href="https://d3js.org"><img src="https://d3js.org/logo.svg" align="left" hspace="10" vspace="20"></a>

**D3** (或者叫 **D3.js** )是一个基于 web 标准的 JavaScript 可视化库. D3 可以借助 SVG, Canvas 以及 HTML 将你的数据生动的展现出来. D3 结合了强大的可视化交互技术以及数据驱动 DOM 的技术结合起来, 让你可以借助于现代浏览器的强大功能自由的对数据进行可视化. 

<br>

## 资源

* [API 参考](https://github.com/xswei/d3js_doc/tree/master/API_Reference/README.md)
* [API 参考 ( 原英文版 )](https://github.com/d3/d3/blob/master/API.md)
* [发布说明](https://github.com/d3/d3/releases)
* [官方画廊](https://github.com/d3/d3/wiki/Gallery)
* [Mike Bostock 的示例](https://bl.ocks.org/mbostock)
* [可视化编程](https://beta.observablehq.com/?utm_source=d3js-org)
* [教程](https://github.com/d3/d3/wiki/Tutorials)
* [插件](https://github.com/d3/d3/wiki/Plugins)
* [v3 与 v4](https://github.com/xswei/d3js_doc/tree/master/Release_Notes/CHANGES.md)
* [一些 Demo](https://github.com/xswei/d3js_doc/blob/master/API_Reference/EXAMPLES.md)

### 最新版本动态

#### 5.0.0(RC3)

- 移除 [d3-request](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-request) ; 添加 [d3-fetch](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-fetch/README.md)
- 移除 [d3-queue](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-queue) ; 推荐使用 [Promise.all](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)
- 添加 [d3-scale-chromatic](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-scale-chromatic/README.md)
- 添加 [d3-contour](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-contour/README.md) 
- 添加 [*selection*.clone]()
- 添加 [d3.create]()
- 移除 `d3.schemeCategory20*` 颜色方案
- 修复不同版本的D3模块的重复安装问题([#3256](https://github.com/d3/d3/issues/3256))
- Fix d3.format’s SI format for locales with currency suffixes.

D3现在包含新的基于 [ColorBrewer](https://en.wikipedia.org/wiki/Cynthia_Brewer#ColorBrewer)的 [category color schemes(类别颜色方案)](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-scale-chromatic/README.md).ColorBrewer配色方案拥有卓越的 [divering(发散)](https://github.com/d3/d3-scale-chromatic/blob/master/README.md#diverging) 和 [sequential(连续)](https://github.com/d3/d3-scale-chromatic/blob/master/README.md#sequential)颜色方案. 移除 `d3.schemeCategory20*` 是因为其设计经常被错误的用来暗示不存在的关系: 颜色相近的常被误以为是一组, 而亮度不同则常被误以为是排序. 

5.0.0 可以通过 `npm install d3@next` 来体验

## 安装

如果使用 `npm`, 则可以通过 `npm install d3` 来安装. 此外还可以下载 [最新版](https://unpkg.com/d3/build/), 最新版支持 AMD、CommonJS 以及基础标签引入形式. 你也可以直接从 [d3js.org](https://d3js.org), [CDNJS](https://cdnjs.com/libraries/d3), 或者 [unpkg](https://unpkg.com/d3/) 加载. 比如:

```js
<script src="https://d3js.org/d3.v4.js"></script>
```

压缩版:

```js
<script src="https://d3js.org/d3.v4.min.js"></script>
```

你也可以单独使用 `d3` 中的某个模块, 比如单独使用 [d3-selection](https://github.com/d3/d3-selection): 

```js
<script src="https://d3js.org/d3-selection.v1.min.js"></script>

```

如果要使用某个固定的版本, 则考虑 [CNDJS](https://cdnjs.com/libraries/d3) 或 [ unpkg](https://unpkg.com/d3/)

D3基于 [ES2015 modules](http://www.2ality.com/2014/09/es6-modules-final.html) 开发.  可以使用 Roolup, webpack 或者其他你偏爱的打包工具进行构建. 在一个符合 ES2015 的应用中导入 `d3` 或者 `d3` 的某些模块:

```js
import {scaleLinear} from "d3-scale";
```

或者导入 `d3` 的全部功能并且设置命名空间 (这里是 `d3`):

```js
import * as d3 from "d3";
```

在 Nodejs 环境中:

```js
var d3 = require("d3");
```

你也可以导入多个模块然后将这些模块集合到 `d3` 对象中, 此时使用 [Object.assign](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign):

```js
var d3 = Object.assign({}, require("d3-format"), require("d3-geo"), require("d3-geo-projection"));
```
