# D3 API Reference

`d3` v4.0 是一个相互协同工作的 [模块集合](https://github.com/d3); 你可以单独使用其中某些模块也可以使用默认构建的全部功能。每个模块的源码和文档都在对应的仓库中获取到。可以通过下面的链接获取更多信息。`d3` v3.x 和 4.x 之间的差异可以参考 [CHANGES](https://github.com/xswei/d3js_doc/tree/master/Release_Notes/CHANGES.MD); 3.x 的文档可以参考 [这里](https://github.com/d3/d3-3.x-api-reference/blob/master/API-Reference.md)

* [Arrays](#arrays-d3-array) ([Statistics](#statistics), [Search](#search), [Transformations](#transformations), [Histograms](#histograms)) - **完成**
* [Axes](#axes-d3-axis) - **完成**
* [Brushes](#brushes-d3-brush) - **完成**
* [Chords](#chords-d3-chord) - **完成**
* [Collections](#collections-d3-collection) ([Objects](#objects), [Maps](#maps), [Sets](#sets), [Nests](#nests)) -**完成**
* [Colors](#colors-d3-color) - **完成**
* [Color Schemes](#color-schemes-d3-scale-chromatic)(V5 新增模块)
* [Contours](#contours-d3-contour) ( V5 新增模块 )
* [Dispatches](#dispatches-d3-dispatch) - **完成**
* [Dragging](#dragging-d3-drag) - **完成**
* [Delimiter-Separated Values](#delimiter-separated-values-d3-dsv)
* [Easings](#easings-d3-ease)
* [Fetches](#fetches-d3-fetch) ( V5 新增模块 ) - **完成**
* [Forces](#forces-d3-force) - **完成**
* [Number Formats](#number-formats-d3-format)
* [Geographies](#geographies-d3-geo) ([Paths](#paths), [Projections](#projections), [Spherical Math](#spherical-math), [Spherical Shapes](#spherical-shapes), [Streams](#streams), [Transforms](#transforms))
* [Hierarchies](#hierarchies-d3-hierarchy)
* [Interpolators](#interpolators-d3-interpolate)
* [Paths](#paths-d3-path) - **完成**
* [Polygons](#polygons-d3-polygon) - **完成**
* [Quadtrees](#quadtrees-d3-quadtree)
* [Queues](#queues-d3-queue) ( V5移除, 使用 **[Promise.all](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)** 替代) - **完成**
* [Random Numbers](#random-numbers-d3-random) - **完成**
* [Requests](#requests-d3-request) ( V5 移除, 使用 **[Fetches](#fetches-d3-fetch)** 替代 ) - **完成**
* [Scales](#scales-d3-scale) ([Continuous](#continuous-scales), [Sequential](#sequential-scales), [Quantize](#quantize-scales), [Ordinal](#ordinal-scales))
* [Selections](#selections-d3-selection) ([Selecting](#selecting-elements), [Modifying](#modifying-elements), [Data](#joining-data), [Events](#handling-events), [Control](#control-flow), [Local Variables](#local-variables), [Namespaces](#namespaces))
* [Shapes](#shapes-d3-shape) ([Arcs](#arcs), [Pies](#pies), [Lines](#lines), [Areas](#areas), [Curves](#curves), [Links](#links), [Symbols](#symbols), [Stacks](#stacks))
* [Time Formats](#time-formats-d3-time-format)
* [Time Intervals](#time-intervals-d3-time)
* [Timers](#timers-d3-timer) - **完成**
* [Transitions](#transitions-d3-transition)
* [Voronoi Diagrams](#voronoi-diagrams-d3-voronoi)
* [Zooming](#zooming-d3-zoom)

D3 使用 [语义化版本](https://semver.org/lang/zh-CN/). 当前的版本号通过 `d3.version` 暴露.

## [Arrays (d3-array)](https://github.com/xswei/d3-array)

数组操作，包括排序、查找、汇总等等

### [Statistics](https://github.com/xswei/d3-array/blob/master/README.md#statistics)

基本的静态统计计算方法

* [d3.min](https://github.com/xswei/d3-array/blob/master/README.md#min) - 计算数组中的最小值.
* [d3.max](https://github.com/xswei/d3-array/blob/master/README.md#max) - 计算数组中的最大值.
* [d3.extent](https://github.com/xswei/d3-array/blob/master/README.md#extent) - 计算数组中的最大值和最小值.
* [d3.sum](https://github.com/xswei/d3-array/blob/master/README.md#sum) - 计算数组元素之和.
* [d3.mean](https://github.com/xswei/d3-array/blob/master/README.md#mean) - 计算数组元素的算术中位数.
* [d3.median](https://github.com/xswei/d3-array/blob/master/README.md#median) - 计算数组元素的中位数 (也就是 0.5-分位数).
* [d3.quantile](https://github.com/xswei/d3-array/blob/master/README.md#quantile) - 计算有序数组的分位数.
* [d3.variance](https://github.com/xswei/d3-array/blob/master/README.md#variance) - 计算数组元素的方差.
* [d3.deviation](https://github.com/xswei/d3-array/blob/master/README.md#deviation) - 计算数组元素的标准差.

### [Search](https://github.com/xswei/d3-array/blob/master/README.md#search)

查找类方法

* [d3.scan](https://github.com/xswei/d3-array/blob/master/README.md#scan) - 使用指定的比较器进行线性查找指定的元素.
* [d3.bisect](https://github.com/xswei/d3-array/blob/master/README.md#bisect) - 二分查找有序数组中指定元素的索引.
* [d3.bisectRight](https://github.com/xswei/d3-array/blob/master/README.md#bisectRight) - 二分查找有序数组中指定元素的索引.
* [d3.bisectLeft](https://github.com/xswei/d3-array/blob/master/README.md#bisectLeft) - 二分查找有序数组中指定元素的索引.
* [d3.bisector](https://github.com/xswei/d3-array/blob/master/README.md#bisector) - 用指定的访问器或比较器对二分查找.
* [*bisector*.left](https://github.com/xswei/d3-array/blob/master/README.md#bisector_left) - 与 bisectLeft 类似, 可以指定比较器.
* [*bisector*.right](https://github.com/xswei/d3-array/blob/master/README.md#bisector_right) - 与 bisectRight 类似, 可以指定比较器.
* [d3.ascending](https://github.com/xswei/d3-array/blob/master/README.md#ascending) - 计算两个值的自然顺序.
* [d3.descending](https://github.com/xswei/d3-array/blob/master/README.md#descending) - 计算两个值的自然顺序.

### [Transformations](https://github.com/xswei/d3-array/blob/master/README.md#transformations)

数组变换和计算，返回新的数组

* [d3.cross](https://github.com/xswei/d3-array/blob/master/README.md#cross) - 计算两个数组的笛卡尔积.
* [d3.merge](https://github.com/xswei/d3-array/blob/master/README.md#merge) - 将多个数组合并为一个.
* [d3.pairs](https://github.com/xswei/d3-array/blob/master/README.md#pairs) - 将数组中相邻的两个元素两两结合.
* [d3.permute](https://github.com/xswei/d3-array/blob/master/README.md#permute) - 根据指定的索引返回对数组重排后的结果.
* [d3.shuffle](https://github.com/xswei/d3-array/blob/master/README.md#shuffle) - 随机打乱数组顺序
* [d3.ticks](https://github.com/xswei/d3-array/blob/master/README.md#ticks) - 从给定的区间范围内生成一系列值.
* [d3.tickIncrement](https://github.com/xswei/d3-array/blob/master/README.md#tickIncrement) - 从给定的区间范围内生成一系列值.
* [d3.tickStep](https://github.com/xswei/d3-array/blob/master/README.md#tickStep) - 从给定的区间范围内生成一系列值.
* [d3.range](https://github.com/xswei/d3-array/blob/master/README.md#range) - 根据指定的区间生成一系列值.
* [d3.transpose](https://github.com/xswei/d3-array/blob/master/README.md#transpose) - 将数组的数组进行转置.
* [d3.zip](https://github.com/xswei/d3-array/blob/master/README.md#zip) - 转置多个数组.

### [Histograms](https://github.com/xswei/d3-array/blob/master/README.md#histograms)

直方图将离散样本分成连续的，不重叠的区间

* [d3.histogram](https://github.com/xswei/d3-array/blob/master/README.md#histogram) - 创建一个新的直方图生成器.
* [*histogram*](https://github.com/xswei/d3-array/blob/master/README.md#_histogram) - 根据给定的数组计算直方图.
* [*histogram*.value](https://github.com/xswei/d3-array/blob/master/README.md#histogram_value) - 设置或获取直方图值访问器.
* [*histogram*.domain](https://github.com/xswei/d3-array/blob/master/README.md#histogram_domain) - 设置或获取直方图的可观测区间.
* [*histogram*.thresholds](https://github.com/xswei/d3-array/blob/master/README.md#histogram_thresholds) - 设置直方图阈值生成方式.
* [d3.thresholdFreedmanDiaconis](https://github.com/xswei/d3-array/blob/master/README.md#thresholdFreedmanDiaconis) - Freedman–Diaconis 阈值生成规则.
* [d3.thresholdScott](https://github.com/xswei/d3-array/blob/master/README.md#thresholdScott) - Scott’s normal reference 阈值生成规则.
* [d3.thresholdSturges](https://github.com/xswei/d3-array/blob/master/README.md#thresholdSturges) - Sturges’ 阈值生成规则.

## [Axes (d3-axis)](https://github.com/xswei/d3-axis)

基于比例尺提供人类友好的标尺刻度

* [d3.axisTop](https://github.com/xswei/d3-axis/blob/master/README.md#axisTop) - 创建一个新的刻度在上的坐标轴生成器
* [d3.axisRight](https://github.com/xswei/d3-axis/blob/master/README.md#axisRight) - 创建一个新的刻度在右的坐标轴生成器
* [d3.axisBottom](https://github.com/xswei/d3-axis/blob/master/README.md#axisBottom) - 创建一个新的刻度在下的坐标轴生成器
* [d3.axisLeft](https://github.com/xswei/d3-axis/blob/master/README.md#axisLeft) - 创建一个新的刻度在左的坐标轴生成器
* [*axis*](https://github.com/xswei/d3-axis/blob/master/README.md#_axis) - 为指定的选择器生成一个坐标轴
* [*axis*.scale](https://github.com/xswei/d3-axis/blob/master/README.md#axis_scale) - 设置坐标轴的比例尺
* [*axis*.ticks](https://github.com/xswei/d3-axis/blob/master/README.md#axis_ticks) - 自定义刻度的显示方式以及格式化刻度
* [*axis*.tickArguments](https://github.com/xswei/d3-axis/blob/master/README.md#axis_tickArguments) - 自定义如何生成刻度或者格式化刻度
* [*axis*.tickValues](https://github.com/xswei/d3-axis/blob/master/README.md#axis_tickValues) - 指定固定的刻度值
* [*axis*.tickFormat](https://github.com/xswei/d3-axis/blob/master/README.md#axis_tickFormat) - 指定固定的刻度格式化方式.
* [*axis*.tickSize](https://github.com/xswei/d3-axis/blob/master/README.md#axis_tickSize) - 设置刻度大小.
* [*axis*.tickSizeInner](https://github.com/xswei/d3-axis/blob/master/README.md#axis_tickSizeInner) - 设置内侧刻度大小.
* [*axis*.tickSizeOuter](https://github.com/xswei/d3-axis/blob/master/README.md#axis_tickSizeOuter) - 设置外侧(坐标轴两端)刻度大小.
* [*axis*.tickPadding](https://github.com/xswei/d3-axis/blob/master/README.md#axis_tickPadding) - 设置刻度和刻度文本之间的间距.

## [Brushes (d3-brush)](https://github.com/xswei/d3-brush)

使用鼠标或触摸选择一维或二维区域

* [d3.brush](https://github.com/xswei/d3-brush/blob/master/README.md#brush) - 创建一个新的二维刷取交互
* [d3.brushX](https://github.com/xswei/d3-brush/blob/master/README.md#brushX) - 创建一个新的*x*-维度的刷取交互
* [d3.brushY](https://github.com/xswei/d3-brush/blob/master/README.md#brushY) - 创建一个新的*y*-维度的刷取交互
* [*brush*](https://github.com/xswei/d3-brush/blob/master/README.md#_brush) - 将刷取操作应用到一个`selection`上
* [*brush*.move](https://github.com/xswei/d3-brush/blob/master/README.md#brush_move) - 移动刷取框选
* [*brush*.extent](https://github.com/xswei/d3-brush/blob/master/README.md#brush_extent) - 定义可刷取的范围
* [*brush*.filter](https://github.com/xswei/d3-brush/blob/master/README.md#brush_filter) - 过滤器定义哪些事件不触发刷取操作
* [*brush*.handleSize](https://github.com/xswei/d3-brush/blob/master/README.md#brush_handleSize) - 设置刷取把柄的大小
* [*brush*.on](https://github.com/xswei/d3-brush/blob/master/README.md#brush_on) - 注册刷取事件句柄
* [d3.brushSelection](https://github.com/xswei/d3-brush/blob/master/README.md#brushSelection) - 获取指定节点的刷取范围

## [Chords (d3-chord)](https://github.com/xswei/d3-chord)

* [d3.chord](https://github.com/xswei/d3-chord/blob/master/README.md#chord) - 创建一个新的弦图布局.
* [*chord*](https://github.com/xswei/d3-chord/blob/master/README.md#_chord) - 根据指定的方阵计算布局.
* [*chord*.padAngle](https://github.com/xswei/d3-chord/blob/master/README.md#chord_padAngle) - 设置相邻的分组之间的间隔
* [*chord*.sortGroups](https://github.com/xswei/d3-chord/blob/master/README.md#chord_sortGroups) - 定义分组排序规则
* [*chord*.sortSubgroups](https://github.com/xswei/d3-chord/blob/master/README.md#chord_sortSubgroups) - 定义分组内部子分组的排序规则
* [*chord*.sortChords](https://github.com/xswei/d3-chord/blob/master/README.md#chord_sortChords) - 定义弦之间的排序规则
* [d3.ribbon](https://github.com/xswei/d3-chord/blob/master/README.md#ribbon) - 创建一个ribbon(弦)生成器
* [*ribbon*](https://github.com/xswei/d3-chord/blob/master/README.md#_ribbon) - 根据指定的数据返回一个path路径以表示弦.
* [*ribbon*.source](https://github.com/xswei/d3-chord/blob/master/README.md#ribbon_source) - 设置ribbon的源访问器.
* [*ribbon*.target](https://github.com/xswei/d3-chord/blob/master/README.md#ribbon_target) - 设置ribbon的目标访问器.
* [*ribbon*.radius](https://github.com/xswei/d3-chord/blob/master/README.md#ribbon_radius) - 设置ribbon的半径.
* [*ribbon*.startAngle](https://github.com/xswei/d3-chord/blob/master/README.md#ribbon_startAngle) - 设置ribbon的起始角度访问器.
* [*ribbon*.endAngle](https://github.com/xswei/d3-chord/blob/master/README.md#ribbon_endAngle) - 设置ribbon的终止角度访问器.
* [*ribbon*.context](https://github.com/xswei/d3-chord/blob/master/README.md#ribbon_context) - 设置渲染上下文(canvas用).

## [Collections (d3-collection)](https://github.com/xswei/d3-collection)

一组方便的数据结构。

### [Objects](https://github.com/xswei/d3-collection/blob/master/README.md#objects)

将关联数组(对象)转为数组的一组方法

* [d3.keys](https://github.com/xswei/d3-collection/blob/master/README.md#keys) - 关联数组中所有的键
* [d3.values](https://github.com/xswei/d3-collection/blob/master/README.md#values) - 关联数组中所有的值
* [d3.entries](https://github.com/xswei/d3-collection/blob/master/README.md#entries) - 将关联数组转为 `key-value` 形式的对象数组

### [Maps](https://github.com/xswei/d3-collection/blob/master/README.md#maps)

与 `ES6` 的 `Map` 类似，但是有些不同

* [d3.map](https://github.com/xswei/d3-collection/blob/master/README.md#map) - 创建一个新的空的 `map` 映射.
* [*map*.has](https://github.com/xswei/d3-collection/blob/master/README.md#map_has) - 当map映射中有给定的 `key` 时返回 `true`
* [*map*.get](https://github.com/xswei/d3-collection/blob/master/README.md#map_get) - 根据指定的 `key` 返回对应的值
* [*map*.set](https://github.com/xswei/d3-collection/blob/master/README.md#map_set) - 设置指定的 `key` 对应的值为指定的值
* [*map*.remove](https://github.com/xswei/d3-collection/blob/master/README.md#map_remove) - 移除指定的 `key` 以及值
* [*map*.clear](https://github.com/xswei/d3-collection/blob/master/README.md#map_clear) - 清空map映射中所有的项
* [*map*.keys](https://github.com/xswei/d3-collection/blob/master/README.md#map_keys) - 以数组的形式获取map映射中的 `key`
* [*map*.values](https://github.com/xswei/d3-collection/blob/master/README.md#map_values) - 以数组的形式获取map映射中的 `value`
* [*map*.entries](https://github.com/xswei/d3-collection/blob/master/README.md#map_entries) - 以数组的形式获取map映射中的 `key-values` 对象
* [*map*.each](https://github.com/xswei/d3-collection/blob/master/README.md#map_each) - 遍历每一项并执行指定的方法.
* [*map*.empty](https://github.com/xswei/d3-collection/blob/master/README.md#map_empty) - 判断 `map` 映射是否为空
* [*map*.size](https://github.com/xswei/d3-collection/blob/master/README.md#map_size) - 计算 `map` 映射中项的数目

### [Sets](https://github.com/xswei/d3-collection/blob/master/README.md#sets)

与 `ES6`的 `Set` 类似，但是有些不同

* [d3.set](https://github.com/xswei/d3-collection/blob/master/README.md#set) - 创建一个新的空的集合
* [*set*.has](https://github.com/xswei/d3-collection/blob/master/README.md#set_has) - 判断集合中是否包含给定的值
* [*set*.add](https://github.com/xswei/d3-collection/blob/master/README.md#set_add) - 将指定的值添加到集合中
* [*set*.remove](https://github.com/xswei/d3-collection/blob/master/README.md#set_remove) - 移除集合中指定的值
* [*set*.clear](https://github.com/xswei/d3-collection/blob/master/README.md#set_clear) - 清空集合中所有的值
* [*set*.values](https://github.com/xswei/d3-collection/blob/master/README.md#set_values) - 以数组的形式获取集合中的所有值
* [*set*.each](https://github.com/xswei/d3-collection/blob/master/README.md#set_each) - 为集合中每一个值执行指定的函数
* [*set*.empty](https://github.com/xswei/d3-collection/blob/master/README.md#set_empty) - 判断集合是否为空
* [*set*.size](https://github.com/xswei/d3-collection/blob/master/README.md#set_size) - 获取集合中项的多少

### [Nests](https://github.com/xswei/d3-collection/blob/master/README.md#nests)

根据指定的规则将数组重组为层次结构

* [d3.nest](https://github.com/xswei/d3-collection/blob/master/README.md#nest) - 创建一个新的嵌套对象.
* [*nest*.key](https://github.com/xswei/d3-collection/blob/master/README.md#nest_key) - 为嵌套操作添加一个 `key` 作为分层依据
* [*nest*.sortKeys](https://github.com/xswei/d3-collection/blob/master/README.md#nest_sortKeys) - 根据 `key` 对当前层次的进行排序
* [*nest*.sortValues](https://github.com/xswei/d3-collection/blob/master/README.md#nest_sortValues) - 根据 `value` 对当叶节点进行排序
* [*nest*.rollup](https://github.com/xswei/d3-collection/blob/master/README.md#nest_rollup) - 为叶节点指定一个 `rollup` (归纳)函数
* [*nest*.map](https://github.com/xswei/d3-collection/blob/master/README.md#nest_map) - 生成嵌套结果，并返回一个 `map` 映射
* [*nest*.object](https://github.com/xswei/d3-collection/blob/master/README.md#nest_object) - 生成嵌套结果并返回一个关联数组
* [*nest*.entries](https://github.com/xswei/d3-collection/blob/master/README.md#nest_entries) - 生成嵌套结果，并返回一组  `key-value` 元组

## [Colors (d3-color)](https://github.com/xswei/d3-color)

颜色空间以及转换

* [d3.color](https://github.com/xswei/d3-color/blob/master/README.md#color) - 转换指定的CSS颜色字符串.
* [*color*.rgb](https://github.com/xswei/d3-color/blob/master/README.md#color_rgb) - 计算当前颜色值的RGB表示.
* [*color*.brighter](https://github.com/xswei/d3-color/blob/master/README.md#color_brighter) - 创建一个更亮的颜色副本.
* [*color*.darker](https://github.com/xswei/d3-color/blob/master/README.md#color_darker) - 创建一个更暗的颜色副本
* [*color*.displayable](https://github.com/xswei/d3-color/blob/master/README.md#color_displayable) - 判断当前设备是否支持当前颜色
* [*color*.toString](https://github.com/xswei/d3-color/blob/master/README.md#color_toString) - 将当前颜色转为RGB颜色的十六进制表示
* [d3.rgb](https://github.com/xswei/d3-color/blob/master/README.md#rgb) - 创建一个新的RGB颜色.
* [d3.hsl](https://github.com/xswei/d3-color/blob/master/README.md#hsl) - 创建一个新的HSL颜色.
* [d3.lab](https://github.com/xswei/d3-color/blob/master/README.md#lab) - 创建一个新的Lab颜色.
* [d3.hcl](https://github.com/xswei/d3-color/blob/master/README.md#hcl) - 创建一个新的HCL颜色.
* [d3.lch](https://github.com/d3/d3-color/blob/master/README.md#lch) - create a new HCL color.
* [d3.gray](https://github.com/d3/d3-color/blob/master/README.md#gray) - create a new Lab gray.
* [d3.cubehelix](https://github.com/xswei/d3-color/blob/master/README.md#cubehelix) - 创建一个新的Cubehelix颜色.

## [Color Schemes (d3-scale-chromatic)](https://github.com/xswei/d3-scale-chromatic)

Color ramps and palettes for quantitative, ordinal and categorical scales.

### Categorical

* [d3.schemeCategory10](https://github.com/xswei/d3-scale-chromatic/blob/master/README.md#schemeCategory10) -
* [d3.schemeAccent](https://github.com/xswei/d3-scale-chromatic/blob/master/README.md#schemeAccent) -
* [d3.schemeDark2](https://github.com/xswei/d3-scale-chromatic/blob/master/README.md#schemeDark2) -
* [d3.schemePaired](https://github.com/xswei/d3-scale-chromatic/blob/master/README.md#schemePaired) -
* [d3.schemePastel1](https://github.com/xswei/d3-scale-chromatic/blob/master/README.md#schemePastel1) -
* [d3.schemePastel2](https://github.com/xswei/d3-scale-chromatic/blob/master/README.md#schemePastel2) -
* [d3.schemeSet1](https://github.com/xswei/d3-scale-chromatic/blob/master/README.md#schemeSet1) -
* [d3.schemeSet2](https://github.com/xswei/d3-scale-chromatic/blob/master/README.md#schemeSet2) -
* [d3.schemeSet3](https://github.com/xswei/d3-scale-chromatic/blob/master/README.md#schemeSet3) -

### Diverging

* [d3.interpolateBrBG](https://github.com/xswei/d3-scale-chromatic/blob/master/README.md) -
* [d3.interpolatePiYG](https://github.com/xswei/d3-scale-chromatic/blob/master/README.md) -
* [d3.interpolatePRGn](https://github.com/xswei/d3-scale-chromatic/blob/master/README.md) -
* [d3.interpolatePuOr](https://github.com/xswei/d3-scale-chromatic/blob/master/README.md) -
* [d3.interpolateRdBu](https://github.com/xswei/d3-scale-chromatic/blob/master/README.md) -
* [d3.interpolateRdGy](https://github.com/xswei/d3-scale-chromatic/blob/master/README.md) -
* [d3.interpolateRdYlBu](https://github.com/xswei/d3-scale-chromatic/blob/master/README.md) -
* [d3.interpolateRdYlGn](https://github.com/xswei/d3-scale-chromatic/blob/master/README.md) -
* [d3.interpolateSpectral](https://github.com/xswei/d3-scale-chromatic/blob/master/README.md) -
* [d3.schemeBrBG](https://github.com/xswei/d3-scale-chromatic/blob/master/README.md#schemeBrBG) -
* [d3.schemePiYG](https://github.com/xswei/d3-scale-chromatic/blob/master/README.md#schemePiYG) -
* [d3.schemePRGn](https://github.com/xswei/d3-scale-chromatic/blob/master/README.md#schemePRGn) -
* [d3.schemePuOr](https://github.com/xswei/d3-scale-chromatic/blob/master/README.md#schemePuOr) -
* [d3.schemeRdBu](https://github.com/xswei/d3-scale-chromatic/blob/master/README.md#schemeRdBu) -
* [d3.schemeRdGy](https://github.com/xswei/d3-scale-chromatic/blob/master/README.md#schemeRdGy) -
* [d3.schemeRdYlBu](https://github.com/xswei/d3-scale-chromatic/blob/master/README.md#schemeRdYlBu) -
* [d3.schemeRdYlGn](https://github.com/xswei/d3-scale-chromatic/blob/master/README.md#schemeRdYlGn) -
* [d3.schemeSpectral](https://github.com/xswei/d3-scale-chromatic/blob/master/README.md#schemeSpectral) -

### Sequential (Single Hue)

* [d3.interpolateBlues](https://github.com/xswei/d3-scale-chromatic/blob/master/README.md) -
* [d3.interpolateGreens](https://github.com/xswei/d3-scale-chromatic/blob/master/README.md) -
* [d3.interpolateGreys](https://github.com/xswei/d3-scale-chromatic/blob/master/README.md) -
* [d3.interpolateOranges](https://github.com/xswei/d3-scale-chromatic/blob/master/README.md) -
* [d3.interpolatePurples](https://github.com/xswei/d3-scale-chromatic/blob/master/README.md) -
* [d3.interpolateReds](https://github.com/xswei/d3-scale-chromatic/blob/master/README.md) -
* [d3.schemeBlues](https://github.com/xswei/d3-scale-chromatic/blob/master/README.md#schemeBlues) -
* [d3.schemeGreens](https://github.com/xswei/d3-scale-chromatic/blob/master/README.md#schemeGreens) -
* [d3.schemeGreys](https://github.com/xswei/d3-scale-chromatic/blob/master/README.md#schemeGreys) -
* [d3.schemeOranges](https://github.com/xswei/d3-scale-chromatic/blob/master/README.md#schemeOranges) -
* [d3.schemePurples](https://github.com/xswei/d3-scale-chromatic/blob/master/README.md#schemePurples) -
* [d3.schemeReds](https://github.com/xswei/d3-scale-chromatic/blob/master/README.md#schemeReds) -

### Sequential (Multi-Hue)

* [d3.interpolateBuGn](https://github.com/xswei/d3-scale-chromatic/blob/master/README.md) -
* [d3.interpolateBuPu](https://github.com/xswei/d3-scale-chromatic/blob/master/README.md) -
* [d3.interpolateCool](https://github.com/xswei/d3-scale-chromatic/blob/master/README.md) -
* [d3.interpolateCubehelixDefault](https://github.com/xswei/d3-scale-chromatic/blob/master/README.md) -
* [d3.interpolateGnBu](https://github.com/xswei/d3-scale-chromatic/blob/master/README.md) -
* [d3.interpolateInferno](https://github.com/xswei/d3-scale-chromatic/blob/master/README.md) -
* [d3.interpolateMagma](https://github.com/xswei/d3-scale-chromatic/blob/master/README.md) -
* [d3.interpolateOrRd](https://github.com/xswei/d3-scale-chromatic/blob/master/README.md) -
* [d3.interpolatePlasma](https://github.com/xswei/d3-scale-chromatic/blob/master/README.md) -
* [d3.interpolatePuBu](https://github.com/xswei/d3-scale-chromatic/blob/master/README.md) -
* [d3.interpolatePuBuGn](https://github.com/xswei/d3-scale-chromatic/blob/master/README.md) -
* [d3.interpolatePuRd](https://github.com/xswei/d3-scale-chromatic/blob/master/README.md) -
* [d3.interpolateRdPu](https://github.com/xswei/d3-scale-chromatic/blob/master/README.md) -
* [d3.interpolateViridis](https://github.com/xswei/d3-scale-chromatic/blob/master/README.md) -
* [d3.interpolateWarm](https://github.com/xswei/d3-scale-chromatic/blob/master/README.md) -
* [d3.interpolateYlGn](https://github.com/xswei/d3-scale-chromatic/blob/master/README.md) -
* [d3.interpolateYlGnBu](https://github.com/xswei/d3-scale-chromatic/blob/master/README.md) -
* [d3.interpolateYlOrBr](https://github.com/xswei/d3-scale-chromatic/blob/master/README.md) -
* [d3.interpolateYlOrRd](https://github.com/xswei/d3-scale-chromatic/blob/master/README.md) -
* [d3.schemeBuGn](https://github.com/xswei/d3-scale-chromatic/blob/master/README.md#schemeBuGn) -
* [d3.schemeBuPu](https://github.com/xswei/d3-scale-chromatic/blob/master/README.md#schemeBuPu) -
* [d3.schemeGnBu](https://github.com/xswei/d3-scale-chromatic/blob/master/README.md#schemeGnBu) -
* [d3.schemeOrRd](https://github.com/xswei/d3-scale-chromatic/blob/master/README.md#schemeOrRd) -
* [d3.schemePuBu](https://github.com/xswei/d3-scale-chromatic/blob/master/README.md#schemePuBu) -
* [d3.schemePuBuGn](https://github.com/xswei/d3-scale-chromatic/blob/master/README.md#schemePuBuGn) -
* [d3.schemePuRd](https://github.com/xswei/d3-scale-chromatic/blob/master/README.md#schemePuRd) -
* [d3.schemeRdPu](https://github.com/xswei/d3-scale-chromatic/blob/master/README.md#schemeRdPu) -
* [d3.schemeYlGn](https://github.com/xswei/d3-scale-chromatic/blob/master/README.md#schemeYlGn) -
* [d3.schemeYlGnBu](https://github.com/xswei/d3-scale-chromatic/blob/master/README.md#schemeYlGnBu) -
* [d3.schemeYlOrBr](https://github.com/xswei/d3-scale-chromatic/blob/master/README.md#schemeYlOrBr) -
* [d3.schemeYlOrRd](https://github.com/xswei/d3-scale-chromatic/blob/master/README.md#schemeYlOrRd) -

### Cyclical

* [d3.interpolateRainbow](https://github.com/xswei/d3-scale-chromatic/blob/master/README.md) -

## [Contours (d3-contour)](https://github.com/xswei/d3-contour)

Compute contour polygons using marching squares.

* [d3.contours](https://github.com/xswei/d3-contour/blob/master/README.md#contours) - create a new contour generator.
* *contours* - compute the contours for a given grid of values.
* *contours*.size -
* *contours*.smooth -
* *contours*.thresholds -
* [d3.contourDensity](https://github.com/xswei/d3-contour/blob/master/README.md#contourDensity) - create a new density estimator.
* *density* - estimate the density of a given array of samples.
* *density*.x -
* *density*.y -
* *density*.cellSize -
* *density*.thresholds -
* *density*.bandwidth -

## [Dispatches (d3-dispatch)](https://github.com/xswei/d3-dispatch)

使用命名回调函数分离关注点

* [d3.dispatch](https://github.com/xswei/d3-dispatch/blob/master/README.md#dispatch) - 创建一个自定义事件分发器
* [*dispatch*.on](https://github.com/xswei/d3-dispatch/blob/master/README.md#dispatch_on) - 注册或取消注册事件监听器
* [*dispatch*.copy](https://github.com/xswei/d3-dispatch/blob/master/README.md#dispatch_copy) - 创建分发器的副本
* [*dispatch*.*call*](https://github.com/xswei/d3-dispatch/blob/master/README.md#dispatch_call) - 分发事件到注册的事件监听器
* [*dispatch*.*apply*](https://github.com/xswei/d3-dispatch/blob/master/README.md#dispatch_apply) - 分发事件到注册事件监听器

## [Dragging (d3-drag)](https://github.com/xswei/d3-drag)

使用鼠标或触摸输入拖放 `SVG`, `HTML` 或者 `Canvas`

* [d3.drag](https://github.com/xswei/d3-drag/blob/master/README.md#drag) - 创建一个拖拽交互.
* [*drag*](https://github.com/xswei/d3-drag/blob/master/README.md#_drag) - 将拖拽交互应用于选择集上.
* [*drag*.container](https://github.com/xswei/d3-drag/blob/master/README.md#drag_container) - 设置拖拽坐标系统.
* [*drag*.filter](https://github.com/xswei/d3-drag/blob/master/README.md#drag_filter) - 忽略一些拖拽启动事件.
* [*drag*.touchable](https://github.com/xswei/d3-drag/blob/master/README.md#drag_touchable) - 设置触摸支持检测.
* [*drag*.subject](https://github.com/xswei/d3-drag/blob/master/README.md#drag_subject) - 设置被拖拽的主体.
* [*drag*.clickDistance](https://github.com/xswei/d3-drag/blob/master/README.md#drag_clickDistance) - set the click distance threshold. --**TODO**
* [*drag*.on](https://github.com/xswei/d3-drag/blob/master/README.md#drag_on) - 监听拖拽事件.
* [*event*.on](https://github.com/xswei/d3-drag/blob/master/README.md#event_on) - 在当前拖拽手势中监听拖拽事件.
* [d3.dragDisable](https://github.com/xswei/d3-drag/blob/master/README.md#dragDisable) - 阻止原生拖拽以及文本选择.
* [d3.dragEnable](https://github.com/xswei/d3-drag/blob/master/README.md#dragEnable) - 启用原生拖拽以及文本选择.

## [Delimiter-Separated Values (d3-dsv)](https://github.com/xswei/d3-dsv)

解析和格式化以分隔符隔开的特定格式文件或字符串，大多数情况下指 CSV 和 TSV.

* [d3.dsvFormat](https://github.com/xswei/d3-dsv/blob/master/README.md#dsvFormat) - 根据指定的分隔符创建一个新的解析器和格式化器.
* [*dsv*.parse](https://github.com/xswei/d3-dsv/blob/master/README.md#dsv_parse) - 解析指定的字符串并返回对象数组.
* [*dsv*.parseRows](https://github.com/xswei/d3-dsv/blob/master/README.md#dsv_parseRows) - 解析指定的字符串并返回行数组.
* [*dsv*.format](https://github.com/xswei/d3-dsv/blob/master/README.md#dsv_format) - 格式化指定的对象数组为字符串.
* [*dsv*.formatRows](https://github.com/xswei/d3-dsv/blob/master/README.md#dsv_formatRows) - 格式化指定的行数组为字符串.
* [d3.csvParse](https://github.com/xswei/d3-dsv/blob/master/README.md#csvParse) - 解析指定的 CSV 字符串并返回对象数组.
* [d3.csvParseRows](https://github.com/xswei/d3-dsv/blob/master/README.md#csvParseRows) - 解析指定的 CSV 字符串并返回行数组.
* [d3.csvFormat](https://github.com/xswei/d3-dsv/blob/master/README.md#csvFormat) - 格式化指定的对象数组为 CSV.
* [d3.csvFormatRows](https://github.com/xswei/d3-dsv/blob/master/README.md#csvFormatRows) - 格式化指定的行数组为 CSV.
* [d3.tsvParse](https://github.com/xswei/d3-dsv/blob/master/README.md#tsvParse) - 解析指定的 TSV 字符串并返回对象数组.
* [d3.tsvParseRows](https://github.com/xswei/d3-dsv/blob/master/README.md#tsvParseRows) - 解析指定的 TSV 字符串并返回行数组.
* [d3.tsvFormat](https://github.com/xswei/d3-dsv/blob/master/README.md#tsvFormat) - 格式化指定的对象数组为 TSV.
* [d3.tsvFormatRows](https://github.com/xswei/d3-dsv/blob/master/README.md#tsvFormatRows) - 格式化指定的行数组为 TSV.

## [Easings (d3-ease)](https://github.com/xswei/d3-ease)

Easing functions for smooth animation.

* [*ease*](https://github.com/xswei/d3-ease/blob/master/README.md#_ease) - ease the given normalized time.
* [d3.easeLinear](https://github.com/xswei/d3-ease/blob/master/README.md#easeLinear) - linear easing; the identity function.
* [d3.easePolyIn](https://github.com/xswei/d3-ease/blob/master/README.md#easePolyIn) - polynomial easing; raises time to the given power.
* [d3.easePolyOut](https://github.com/xswei/d3-ease/blob/master/README.md#easePolyOut) - reverse polynomial easing.
* [d3.easePolyInOut](https://github.com/xswei/d3-ease/blob/master/README.md#easePolyInOut) - symmetric polynomial easing.
* [*poly*.exponent](https://github.com/xswei/d3-ease/blob/master/README.md#poly_exponent) - specify the polynomial exponent.
* [d3.easeQuad](https://github.com/xswei/d3-ease/blob/master/README.md#easeQuad) - an alias for easeQuadInOut.
* [d3.easeQuadIn](https://github.com/xswei/d3-ease/blob/master/README.md#easeQuadIn) - quadratic easing; squares time.
* [d3.easeQuadOut](https://github.com/xswei/d3-ease/blob/master/README.md#easeQuadOut) - reverse quadratic easing.
* [d3.easeQuadInOut](https://github.com/xswei/d3-ease/blob/master/README.md#easeQuadInOut) - symmetric quadratic easing.
* [d3.easeCubic](https://github.com/xswei/d3-ease/blob/master/README.md#easeCubic) - an alias for easeCubicInOut.
* [d3.easeCubicIn](https://github.com/xswei/d3-ease/blob/master/README.md#easeCubicIn) - cubic easing; cubes time.
* [d3.easeCubicOut](https://github.com/xswei/d3-ease/blob/master/README.md#easeCubicOut) - reverse cubic easing.
* [d3.easeCubicInOut](https://github.com/xswei/d3-ease/blob/master/README.md#easeCubicInOut) - symmetric cubic easing.
* [d3.easeSin](https://github.com/xswei/d3-ease/blob/master/README.md#easeSin) - an alias for easeSinInOut.
* [d3.easeSinIn](https://github.com/xswei/d3-ease/blob/master/README.md#easeSinIn) - sinusoidal easing.
* [d3.easeSinOut](https://github.com/xswei/d3-ease/blob/master/README.md#easeSinOut) - reverse sinusoidal easing.
* [d3.easeSinInOut](https://github.com/xswei/d3-ease/blob/master/README.md#easeSinInOut) - symmetric sinusoidal easing.
* [d3.easeExp](https://github.com/xswei/d3-ease/blob/master/README.md#easeExp) - an alias for easeExpInOut.
* [d3.easeExpIn](https://github.com/xswei/d3-ease/blob/master/README.md#easeExpIn) - exponential easing.
* [d3.easeExpOut](https://github.com/xswei/d3-ease/blob/master/README.md#easeExpOut) - reverse exponential easing.
* [d3.easeExpInOut](https://github.com/xswei/d3-ease/blob/master/README.md#easeExpInOut) - symmetric exponential easing.
* [d3.easeCircle](https://github.com/xswei/d3-ease/blob/master/README.md#easeCircle) - an alias for easeCircleInOut.
* [d3.easeCircleIn](https://github.com/xswei/d3-ease/blob/master/README.md#easeCircleIn) - circular easing.
* [d3.easeCircleOut](https://github.com/xswei/d3-ease/blob/master/README.md#easeCircleOut) - reverse circular easing.
* [d3.easeCircleInOut](https://github.com/xswei/d3-ease/blob/master/README.md#easeCircleInOut) - symmetric circular easing.
* [d3.easeElastic](https://github.com/xswei/d3-ease/blob/master/README.md#easeElastic) - an alias for easeElasticOut.
* [d3.easeElasticIn](https://github.com/xswei/d3-ease/blob/master/README.md#easeElasticIn) - elastic easing, like a rubber band.
* [d3.easeElasticOut](https://github.com/xswei/d3-ease/blob/master/README.md#easeElasticOut) - reverse elastic easing.
* [d3.easeElasticInOut](https://github.com/xswei/d3-ease/blob/master/README.md#easeElasticInOut) - symmetric elastic easing.
* [*elastic*.amplitude](https://github.com/xswei/d3-ease/blob/master/README.md#elastic_amplitude) - specify the elastic amplitude.
* [*elastic*.period](https://github.com/xswei/d3-ease/blob/master/README.md#elastic_period) - specify the elastic period.
* [d3.easeBack](https://github.com/xswei/d3-ease/blob/master/README.md#easeBack) - an alias for easeBackInOut.
* [d3.easeBackIn](https://github.com/xswei/d3-ease/blob/master/README.md#easeBackIn) - anticipatory easing, like a dancer bending his knees before jumping.
* [d3.easeBackOut](https://github.com/xswei/d3-ease/blob/master/README.md#easeBackOut) - reverse anticipatory easing.
* [d3.easeBackInOut](https://github.com/xswei/d3-ease/blob/master/README.md#easeBackInOut) - symmetric anticipatory easing.
* [*back*.overshoot](https://github.com/xswei/d3-ease/blob/master/README.md#back_overshoot) - specify the amount of overshoot.
* [d3.easeBounce](https://github.com/xswei/d3-ease/blob/master/README.md#easeBounce) - an alias for easeBounceOut.
* [d3.easeBounceIn](https://github.com/xswei/d3-ease/blob/master/README.md#easeBounceIn) - bounce easing, like a rubber ball.
* [d3.easeBounceOut](https://github.com/xswei/d3-ease/blob/master/README.md#easeBounceOut) - reverse bounce easing.
* [d3.easeBounceInOut](https://github.com/xswei/d3-ease/blob/master/README.md#easeBounceInOut) - symmetric bounce easing.

## [Fetches (d3-fetch)](https://github.com/xswei/d3-fetch)

基于 Fetch API 的更为便捷的获取数据方法.

* [d3.blob](https://github.com/xswei/d3-fetch/blob/master/README.md#blob) - 以 blob 的形式获取文件.
* [d3.buffer](https://github.com/xswei/d3-fetch/blob/master/README.md#buffer) - 以 array buffer 的形式获取文件.
* [d3.csv](https://github.com/xswei/d3-fetch/blob/master/README.md#csv) - 获取逗号分隔符(CSV)文件.
* [d3.dsv](https://github.com/xswei/d3-fetch/blob/master/README.md#dsv) - 获取分隔符(DSV)文件.
* [d3.image](https://github.com/xswei/d3-fetch/blob/master/README.md#image) - 获取图片.
* [d3.json](https://github.com/xswei/d3-fetch/blob/master/README.md#json) - 获取 JSON 文件.
* [d3.text](https://github.com/xswei/d3-fetch/blob/master/README.md#text) - 获取无格式文本.
* [d3.tsv](https://github.com/xswei/d3-fetch/blob/master/README.md#tsv) - 获取 tab 分隔符(TSV)文件.

## [Forces (d3-force)](https://github.com/xswei/d3-force)

使用速度 `Verlet` 积分的力模型仿真布局.

* [d3.forceSimulation](https://github.com/xswei/d3-force/blob/master/README.md#forceSimulation) - 创建一个新的力学仿真.
* [*simulation*.restart](https://github.com/xswei/d3-force/blob/master/README.md#simulation_restart) - 重新启动仿真的定时器.
* [*simulation*.stop](https://github.com/xswei/d3-force/blob/master/README.md#simulation_stop) - 停止仿真的定时器.
* [*simulation*.tick](https://github.com/xswei/d3-force/blob/master/README.md#simulation_tick) - 进行一步仿真模拟.
* [*simulation*.nodes](https://github.com/xswei/d3-force/blob/master/README.md#simulation_nodes) - 设置仿真的节点.
* [*simulation*.alpha](https://github.com/xswei/d3-force/blob/master/README.md#simulation_alpha) - 设置当前的 `alpha` 值.
* [*simulation*.alphaMin](https://github.com/xswei/d3-force/blob/master/README.md#simulation_alphaMin) - 设置最小 `alpha` 阈值.
* [*simulation*.alphaDecay](https://github.com/xswei/d3-force/blob/master/README.md#simulation_alphaDecay) - 设置 `alpha` 衰减率.
* [*simulation*.alphaTarget](https://github.com/xswei/d3-force/blob/master/README.md#simulation_alphaTarget) - 设置目标 `alpha` 值.
* [*simulation*.velocityDecay](https://github.com/xswei/d3-force/blob/master/README.md#simulation_velocityDecay) - 设置速度衰减率.
* [*simulation*.force](https://github.com/xswei/d3-force/blob/master/README.md#simulation_force) - 添加或移除一个力模型.
* [*simulation*.find](https://github.com/xswei/d3-force/blob/master/README.md#simulation_find) - 根据指定的位置找出最近的节点.
* [*simulation*.on](https://github.com/xswei/d3-force/blob/master/README.md#simulation_on) - 添加或移除事件监听器.
* [*force*](https://github.com/xswei/d3-force/blob/master/README.md#_force) - 应用力模型.
* [*force*.initialize](https://github.com/xswei/d3-force/blob/master/README.md#force_initialize) - 根据指定的节点初始化力模型.
* [d3.forceCenter](https://github.com/xswei/d3-force/blob/master/README.md#forceCenter) - 创建一个中心作用力.
* [*center*.x](https://github.com/xswei/d3-force/blob/master/README.md#center_x) - 设置中心作用力的 *x* -坐标.
* [*center*.y](https://github.com/xswei/d3-force/blob/master/README.md#center_y) - 设置中心作用力的 *y* -坐标.
* [d3.forceCollide](https://github.com/xswei/d3-force/blob/master/README.md#forceCollide) - 创建一个圆形区域的碰撞检测力模型.
* [*collide*.radius](https://github.com/xswei/d3-force/blob/master/README.md#collide_radius) - 设置碰撞半径.
* [*collide*.strength](https://github.com/xswei/d3-force/blob/master/README.md#collide_strength) - 设置碰撞检测力模型的强度.
* [*collide*.iterations](https://github.com/xswei/d3-force/blob/master/README.md#collide_iterations) - 设置迭代次数.
* [d3.forceLink](https://github.com/xswei/d3-force/blob/master/README.md#forceLink) - 创建一个 `link`(弹簧) 作用力.
* [*link*.links](https://github.com/xswei/d3-force/blob/master/README.md#link_links) - 设置弹簧作用力的边.
* [*link*.id](https://github.com/xswei/d3-force/blob/master/README.md#link_id) - 设置边元素中节点的查找方式是索引还是 `id` 字符串.
* [*link*.distance](https://github.com/xswei/d3-force/blob/master/README.md#link_distance) - 设置 `link` 的距离.
* [*link*.strength](https://github.com/xswei/d3-force/blob/master/README.md#link_strength) - 设置 `link` 的强度.
* [*link*.iterations](https://github.com/xswei/d3-force/blob/master/README.md#link_iterations) - 设置迭代次数.
* [d3.forceManyBody](https://github.com/xswei/d3-force/blob/master/README.md#forceManyBody) - 创建一个电荷作用力模型.
* [*manyBody*.strength](https://github.com/xswei/d3-force/blob/master/README.md#manyBody_strength) - 设置电荷力模型的强度.
* [*manyBody*.theta](https://github.com/xswei/d3-force/blob/master/README.md#manyBody_theta) - 设置 `Barnes–Hut` 算法的精度.
* [*manyBody*.distanceMin](https://github.com/xswei/d3-force/blob/master/README.md#manyBody_distanceMin) - 限制节点之间的最小距离.
* [*manyBody*.distanceMax](https://github.com/xswei/d3-force/blob/master/README.md#manyBody_distanceMax) - 限制节点之间的最大距离.
* [d3.forceX](https://github.com/xswei/d3-force/blob/master/README.md#forceX) - 创建一个 *x* -方向的一维作用力.
* [*x*.strength](https://github.com/xswei/d3-force/blob/master/README.md#x_strength) - 设置力强度.
* [*x*.x](https://github.com/xswei/d3-force/blob/master/README.md#x_x) - 设置目标 *x* -坐标.
* [d3.forceY](https://github.com/xswei/d3-force/blob/master/README.md#forceY) - 创建一个 *y* -方向的一维作用力.
* [*y*.strength](https://github.com/xswei/d3-force/blob/master/README.md#y_strength) - 设置力强度.
* [*y*.y](https://github.com/xswei/d3-force/blob/master/README.md#y_y) - 设置目标 *y* -坐标.
* [d3.forceRadial](https://github.com/xswei/d3-force/blob/master/README.md#forceRadial) - 创建一个环形布局的作用力.
* [*radial*.strength](https://github.com/xswei/d3-force/blob/master/README.md#radial_strength) - 设置力强度.
* [*radial*.radius](https://github.com/xswei/d3-force/blob/master/README.md#radial_radius) - 设置目标半径.
* [*radial*.x](https://github.com/xswei/d3-force/blob/master/README.md#radial_x) - 设置环形作用力的目标中心 *x* -坐标.
* [*radial*.y](https://github.com/xswei/d3-force/blob/master/README.md#radial_y) - 设置环形作用力的目标中心 *y* -坐标.

## [Number Formats (d3-format)](https://github.com/xswei/d3-format)

Format numbers for human consumption.

* [d3.format](https://github.com/xswei/d3-format/blob/master/README.md#format) - alias for *locale*.format on the default locale.
* [d3.formatPrefix](https://github.com/xswei/d3-format/blob/master/README.md#formatPrefix) - alias for *locale*.formatPrefix on the default locale.
* [d3.formatSpecifier](https://github.com/xswei/d3-format/blob/master/README.md#formatSpecifier) - parse a number format specifier.
* [d3.formatLocale](https://github.com/xswei/d3-format/blob/master/README.md#formatLocale) - define a custom locale.
* [d3.formatDefaultLocale](https://github.com/xswei/d3-format/blob/master/README.md#formatDefaultLocale) - define the default locale.
* [*locale*.format](https://github.com/xswei/d3-format/blob/master/README.md#locale_format) - create a number format.
* [*locale*.formatPrefix](https://github.com/xswei/d3-format/blob/master/README.md#locale_formatPrefix) - create a SI-prefix number format.
* [d3.precisionFixed](https://github.com/xswei/d3-format/blob/master/README.md#precisionFixed) - compute decimal precision for fixed-point notation.
* [d3.precisionPrefix](https://github.com/xswei/d3-format/blob/master/README.md#precisionPrefix) - compute decimal precision for SI-prefix notation.
* [d3.precisionRound](https://github.com/xswei/d3-format/blob/master/README.md#precisionRound) - compute significant digits for rounded notation.

## [Geographies (d3-geo)](https://github.com/xswei/d3-geo)

地理投影, 形状以及数学计算.

### [Paths](https://github.com/xswei/d3-geo/blob/master/README.md#paths)

* [d3.geoPath](https://github.com/xswei/d3-geo/blob/master/README.md#geoPath) - 创建一个新的地理路径生成器.
* [*path*](https://github.com/xswei/d3-geo/blob/master/README.md#_path) - 投影并渲染指定的地理特征.
* [*path*.area](https://github.com/xswei/d3-geo/blob/master/README.md#path_area) - 计算指定的二位地理特征面积.
* [*path*.bounds](https://github.com/xswei/d3-geo/blob/master/README.md#path_bounds) - 计算指定的二位地理特征包裹框.
* [*path*.centroid](https://github.com/xswei/d3-geo/blob/master/README.md#path_centroid) - 算指定的二位地理特征中心.
* [*path*.measure](https://github.com/xswei/d3-geo/blob/master/README.md#path_measure) - 算指定的二位地理特征周长.
* [*path*.projection](https://github.com/xswei/d3-geo/blob/master/README.md#path_projection) - 设置地理路径生成器的投影方式.
* [*path*.context](https://github.com/xswei/d3-geo/blob/master/README.md#path_context) - 设置渲染上下文.
* [*path*.pointRadius](https://github.com/xswei/d3-geo/blob/master/README.md#path_pointRadius) - 设置点特征的半径.

### [Projections](https://github.com/xswei/d3-geo/blob/master/README.md#projections)

* [*projection*](https://github.com/xswei/d3-geo/blob/master/README.md#_projection) - 将指定的球面上一点投影到平面.
* [*projection*.invert](https://github.com/xswei/d3-geo/blob/master/README.md#projection_invert) - 逆转投影，根据平面一点反向计算球面坐标.
* [*projection*.stream](https://github.com/xswei/d3-geo/blob/master/README.md#projection_stream) - wrap the specified stream to project geometry.
* [*projection*.clipAngle](https://github.com/xswei/d3-geo/blob/master/README.md#projection_clipAngle) - set the radius of the clip circle.
* [*projection*.clipExtent](https://github.com/xswei/d3-geo/blob/master/README.md#projection_clipExtent) - set the viewport clip extent, in pixels.
* [*projection*.scale](https://github.com/xswei/d3-geo/blob/master/README.md#projection_scale) - set the scale factor.
* [*projection*.translate](https://github.com/xswei/d3-geo/blob/master/README.md#projection_translate) - set the translation offset.
* [*projection*.fitExtent](https://github.com/xswei/d3-geo/blob/master/README.md#projection_fitExtent) - set the scale and translate to fit a GeoJSON object.
* [*projection*.fitSize](https://github.com/xswei/d3-geo/blob/master/README.md#projection_fitSize) - set the scale and translate to fit a GeoJSON object.
* [*projection*.fitWidth](https://github.com/xswei/d3-geo/blob/master/README.md#projection_fitWidth) - set the scale and translate to fit a GeoJSON object.
* [*projection*.fitHeight](https://github.com/xswei/d3-geo/blob/master/README.md#projection_fitHeight) - set the scale and translate to fit a GeoJSON object.
* [*projection*.center](https://github.com/xswei/d3-geo/blob/master/README.md#projection_center) - set the center point.
* [*projection*.rotate](https://github.com/xswei/d3-geo/blob/master/README.md#projection_rotate) - set the three-axis spherical rotation angles.
* [*projection*.precision](https://github.com/xswei/d3-geo/blob/master/README.md#projection_precision) - set the precision threshold for adaptive sampling.
* [*projection*.preclip](https://github.com/xswei/d3-geo/blob/master/README.md#projection.preclip) - set the spherical clipping stream transform.
* [*projection*.postclip](https://github.com/xswei/d3-geo/blob/master/README.md#projection.postclip) - set the planar clipping stream transform.
* [d3.geoClipAntimeridian](https://github.com/xswei/d3-geo/blob/master/README.md#geoClipAntimeridian) - cuts spherical geometries that cross the antimeridian.
* [d3.geoClipCircle](https://github.com/xswei/d3-geo/blob/master/README.md#geoClipCircle) - clips spherical geometries to a small circle.
* [d3.geoClipRectangle](https://github.com/xswei/d3-geo/blob/master/README.md#geoClipRectangle) - clips planar geometries to a rectangular viewport.
* [d3.geoAlbers](https://github.com/xswei/d3-geo/blob/master/README.md#geoAlbers) - the Albers equal-area conic projection.
* [d3.geoAlbersUsa](https://github.com/xswei/d3-geo/blob/master/README.md#geoAlbersUsa) - a composite Albers projection for the United States.
* [d3.geoAzimuthalEqualArea](https://github.com/xswei/d3-geo/blob/master/README.md#geoAzimuthalEqualArea) - the azimuthal equal-area projection.
* [d3.geoAzimuthalEquidistant](https://github.com/xswei/d3-geo/blob/master/README.md#geoAzimuthalEquidistant) - the azimuthal equidistant projection.
* [d3.geoConicConformal](https://github.com/xswei/d3-geo/blob/master/README.md#geoConicConformal) - the conic conformal projection.
* [d3.geoConicEqualArea](https://github.com/xswei/d3-geo/blob/master/README.md#geoConicEqualArea) - the conic equal-area (Albers) projection.
* [d3.geoConicEquidistant](https://github.com/xswei/d3-geo/blob/master/README.md#geoConicEquidistant) - the conic equidistant projection.
* [*conic*.parallels](https://github.com/xswei/d3-geo/blob/master/README.md#conic_parallels) - set the two standard parallels.
* [d3.geoEquirectangular](https://github.com/xswei/d3-geo/blob/master/README.md#geoEquirectangular) - the equirectangular (plate carreé) projection.
* [d3.geoGnomonic](https://github.com/xswei/d3-geo/blob/master/README.md#geoGnomonic) - the gnomonic projection.
* [d3.geoMercator](https://github.com/xswei/d3-geo/blob/master/README.md#geoMercator) - the spherical Mercator projection.
* [d3.geoOrthographic](https://github.com/xswei/d3-geo/blob/master/README.md#geoOrthographic) - the azimuthal orthographic projection.
* [d3.geoStereographic](https://github.com/xswei/d3-geo/blob/master/README.md#geoStereographic) - the azimuthal stereographic projection.
* [d3.geoTransverseMercator](https://github.com/xswei/d3-geo/blob/master/README.md#geoTransverseMercator) - the transverse spherical Mercator projection.
* [*project*](https://github.com/xswei/d3-geo/blob/master/README.md#_project) - project the specified point from the sphere to the plane.
* [*project*.invert](https://github.com/xswei/d3-geo/blob/master/README.md#project_invert) - unproject the specified point from the plane to the sphere.
* [d3.geoProjection](https://github.com/xswei/d3-geo/blob/master/README.md#geoProjection) - create a custom projection.
* [d3.geoProjectionMutator](https://github.com/xswei/d3-geo/blob/master/README.md#geoProjectionMutator) - create a custom configurable projection.
* [d3.geoAzimuthalEqualAreaRaw](https://github.com/xswei/d3-geo/blob/master/README.md#geoAzimuthalEqualAreaRaw) - the raw azimuthal equal-area projection.
* [d3.geoAzimuthalEquidistantRaw](https://github.com/xswei/d3-geo/blob/master/README.md#geoAzimuthalEquidistantRaw) - the raw azimuthal equidistant projection.
* [d3.geoConicConformalRaw](https://github.com/xswei/d3-geo/blob/master/README.md#geoConicConformalRaw) - the raw conic conformal projection.
* [d3.geoConicEqualAreaRaw](https://github.com/xswei/d3-geo/blob/master/README.md#geoConicEqualAreaRaw) - the raw conic equal-area (Albers) projection.
* [d3.geoConicEquidistantRaw](https://github.com/xswei/d3-geo/blob/master/README.md#geoConicEquidistantRaw) - the raw conic equidistant projection.
* [d3.geoEquirectangularRaw](https://github.com/xswei/d3-geo/blob/master/README.md#geoEquirectangularRaw) - the raw equirectangular (plate carreé) projection.
* [d3.geoGnomonicRaw](https://github.com/xswei/d3-geo/blob/master/README.md#geoGnomonicRaw) - the raw gnomonic projection.
* [d3.geoMercatorRaw](https://github.com/xswei/d3-geo/blob/master/README.md#geoMercatorRaw) - the raw Mercator projection.
* [d3.geoOrthographicRaw](https://github.com/xswei/d3-geo/blob/master/README.md#geoOrthographicRaw) - the raw azimuthal orthographic projection.
* [d3.geoStereographicRaw](https://github.com/xswei/d3-geo/blob/master/README.md#geoStereographicRaw) - the raw azimuthal stereographic projection.
* [d3.geoTransverseMercatorRaw](https://github.com/xswei/d3-geo/blob/master/README.md#geoTransverseMercatorRaw) - the raw transverse spherical Mercator projection.

### [Spherical Math](https://github.com/xswei/d3-geo/blob/master/README.md#spherical-math)

* [d3.geoArea](https://github.com/xswei/d3-geo/blob/master/README.md#geoArea) - 根据给定的地理特征计算球面面积.
* [d3.geoBounds](https://github.com/xswei/d3-geo/blob/master/README.md#geoBounds) - 根据指定的地理特征计算包裹框(经纬度).
* [d3.geoCentroid](https://github.com/xswei/d3-geo/blob/master/README.md#geoCentroid) - 根据给定的地理特征计算球面中心.
* [d3.geoContains](https://github.com/xswei/d3-geo/blob/master/README.md#geoContains) - 测试一个点是否在给定的地理特征轮廓内部.
* [d3.geoDistance](https://github.com/xswei/d3-geo/blob/master/README.md#geoDistance) - 计算两个点之间的大圆距离.
* [d3.geoLength](https://github.com/xswei/d3-geo/blob/master/README.md#geoLength) - 计算一条线的长度或者多边形的周长.
* [d3.geoInterpolate](https://github.com/xswei/d3-geo/blob/master/README.md#geoInterpolate) - 在两个点之间沿着大圆进行插值.
* [d3.geoRotation](https://github.com/xswei/d3-geo/blob/master/README.md#geoRotation) - 根据指定的角度创建一个旋转函数.
* [*rotation*](https://github.com/xswei/d3-geo/blob/master/README.md#_rotation) - 沿着指定的球面对指定点进行旋转.
* [*rotation*.invert](https://github.com/xswei/d3-geo/blob/master/README.md#rotation_invert) - 计算某个点在旋转之前的点.

### [Spherical Shapes](https://github.com/xswei/d3-geo/blob/master/README.md#spherical-shapes)

* [d3.geoCircle](https://github.com/xswei/d3-geo/blob/master/README.md#geoCircle) - create a circle generator.
* [*circle*](https://github.com/xswei/d3-geo/blob/master/README.md#_circle) - generate a piecewise circle as a Polygon.
* [*circle*.center](https://github.com/xswei/d3-geo/blob/master/README.md#circle_center) - specify the circle center in latitude and longitude.
* [*circle*.radius](https://github.com/xswei/d3-geo/blob/master/README.md#circle_radius) - specify the angular radius in degrees.
* [*circle*.precision](https://github.com/xswei/d3-geo/blob/master/README.md#circle_precision) - specify the precision of the piecewise circle.
* [d3.geoGraticule](https://github.com/xswei/d3-geo/blob/master/README.md#geoGraticule) - create a graticule generator.
* [*graticule*](https://github.com/xswei/d3-geo/blob/master/README.md#_graticule) - generate a MultiLineString of meridians and parallels.
* [*graticule*.lines](https://github.com/xswei/d3-geo/blob/master/README.md#graticule_lines) - generate an array of LineStrings of meridians and parallels.
* [*graticule*.outline](https://github.com/xswei/d3-geo/blob/master/README.md#graticule_outline) - generate a Polygon of the graticule’s extent.
* [*graticule*.extent](https://github.com/xswei/d3-geo/blob/master/README.md#graticule_extent) - get or set the major & minor extents.
* [*graticule*.extentMajor](https://github.com/xswei/d3-geo/blob/master/README.md#graticule_extentMajor) - get or set the major extent.
* [*graticule*.extentMinor](https://github.com/xswei/d3-geo/blob/master/README.md#graticule_extentMinor) - get or set the minor extent.
* [*graticule*.step](https://github.com/xswei/d3-geo/blob/master/README.md#graticule_step) - get or set the major & minor step intervals.
* [*graticule*.stepMajor](https://github.com/xswei/d3-geo/blob/master/README.md#graticule_stepMajor) - get or set the major step intervals.
* [*graticule*.stepMinor](https://github.com/xswei/d3-geo/blob/master/README.md#graticule_stepMinor) - get or set the minor step intervals.
* [*graticule*.precision](https://github.com/xswei/d3-geo/blob/master/README.md#graticule_precision) - get or set the latitudinal precision.
* [d3.geoGraticule10](https://github.com/xswei/d3-geo/blob/master/README.md#geoGraticule10) - generate the default 10° global graticule.

#### [Streams](https://github.com/xswei/d3-geo/blob/master/README.md#streams)

* [d3.geoStream](https://github.com/xswei/d3-geo/blob/master/README.md#geoStream) - convert a GeoJSON object to a geometry stream.
* [*stream*.point](https://github.com/xswei/d3-geo/blob/master/README.md#stream_point) - indicates a point with the specified coordinates.
* [*stream*.lineStart](https://github.com/xswei/d3-geo/blob/master/README.md#stream_lineStart) - indicates the start of a line or ring.
* [*stream*.lineEnd](https://github.com/xswei/d3-geo/blob/master/README.md#stream_lineEnd) - indicates the end of a line or ring.
* [*stream*.polygonStart](https://github.com/xswei/d3-geo/blob/master/README.md#stream_polygonStart) - indicates the start of a polygon.
* [*stream*.polygonEnd](https://github.com/xswei/d3-geo/blob/master/README.md#stream_polygonEnd) - indicates the end of a polygon.
* [*stream*.sphere](https://github.com/xswei/d3-geo/blob/master/README.md#stream_sphere) - indicates the sphere.

### [Transforms](https://github.com/xswei/d3-geo/blob/master/README.md#transforms)

* [d3.geoIdentity](https://github.com/xswei/d3-geo/blob/master/README.md#geoIdentity) - scale, translate or clip planar geometry.
* [*identity*.reflectX](https://github.com/xswei/d3-geo/blob/master/README.md#identity_reflectX) - reflect the *x*-dimension.
* [*identity*.reflectY](https://github.com/xswei/d3-geo/blob/master/README.md#identity_reflectY) - reflect the *y*-dimension.
* [d3.geoTransform](https://github.com/xswei/d3-geo/blob/master/README.md#geoTransform) - define a custom geometry transform.

## [Hierarchies (d3-hierarchy)](https://github.com/xswei/d3-hierarchy)

Layout algorithms for visualizing hierarchical data.

* [d3.hierarchy](https://github.com/xswei/d3-hierarchy/blob/master/README.md#hierarchy) - constructs a root node from hierarchical data.
* [*node*.ancestors](https://github.com/xswei/d3-hierarchy/blob/master/README.md#node_ancestors) - generate an array of ancestors.
* [*node*.descendants](https://github.com/xswei/d3-hierarchy/blob/master/README.md#node_descendants) - generate an array of descendants.
* [*node*.leaves](https://github.com/xswei/d3-hierarchy/blob/master/README.md#node_leaves) - generate an array of leaves.
* [*node*.path](https://github.com/xswei/d3-hierarchy/blob/master/README.md#node_path) - generate the shortest path to another node.
* [*node*.links](https://github.com/xswei/d3-hierarchy/blob/master/README.md#node_links) - generate an array of links.
* [*node*.sum](https://github.com/xswei/d3-hierarchy/blob/master/README.md#node_sum) - evaluate and aggregate quantitative values.
* [*node*.sort](https://github.com/xswei/d3-hierarchy/blob/master/README.md#node_sort) - sort all descendant siblings.
* [*node*.count](https://github.com/xswei/d3-hierarchy/blob/master/README.md#node_count) - count the number of leaves.
* [*node*.each](https://github.com/xswei/d3-hierarchy/blob/master/README.md#node_each) - breadth-first traversal.
* [*node*.eachAfter](https://github.com/xswei/d3-hierarchy/blob/master/README.md#node_eachAfter) - post-order traversal.
* [*node*.eachBefore](https://github.com/xswei/d3-hierarchy/blob/master/README.md#node_eachBefore) - pre-order traversal.
* [*node*.copy](https://github.com/xswei/d3-hierarchy/blob/master/README.md#node_copy) - copy a hierarchy.
* [d3.stratify](https://github.com/xswei/d3-hierarchy/blob/master/README.md#stratify) - create a new stratify operator.
* [*stratify*](https://github.com/xswei/d3-hierarchy/blob/master/README.md#_stratify) - construct a root node from tabular data.
* [*stratify*.id](https://github.com/xswei/d3-hierarchy/blob/master/README.md#stratify_id) - set the node id accessor.
* [*stratify*.parentId](https://github.com/xswei/d3-hierarchy/blob/master/README.md#stratify_parentId) - set the parent node id accessor.
* [d3.cluster](https://github.com/xswei/d3-hierarchy/blob/master/README.md#cluster) - create a new cluster (dendrogram) layout.
* [*cluster*](https://github.com/xswei/d3-hierarchy/blob/master/README.md#_cluster) - layout the specified hierarchy in a dendrogram.
* [*cluster*.size](https://github.com/xswei/d3-hierarchy/blob/master/README.md#cluster_size) - set the layout size.
* [*cluster*.nodeSize](https://github.com/xswei/d3-hierarchy/blob/master/README.md#cluster_nodeSize) - set the node size.
* [*cluster*.separation](https://github.com/xswei/d3-hierarchy/blob/master/README.md#cluster_separation) - set the separation between leaves.
* [d3.tree](https://github.com/xswei/d3-hierarchy/blob/master/README.md#tree) - create a new tidy tree layout.
* [*tree*](https://github.com/xswei/d3-hierarchy/blob/master/README.md#_tree) - layout the specified hierarchy in a tidy tree.
* [*tree*.size](https://github.com/xswei/d3-hierarchy/blob/master/README.md#tree_size) - set the layout size.
* [*tree*.nodeSize](https://github.com/xswei/d3-hierarchy/blob/master/README.md#tree_nodeSize) - set the node size.
* [*tree*.separation](https://github.com/xswei/d3-hierarchy/blob/master/README.md#tree_separation) - set the separation between nodes.
* [d3.treemap](https://github.com/xswei/d3-hierarchy/blob/master/README.md#treemap) - create a new treemap layout.
* [*treemap*](https://github.com/xswei/d3-hierarchy/blob/master/README.md#_treemap) - layout the specified hierarchy as a treemap.
* [*treemap*.tile](https://github.com/xswei/d3-hierarchy/blob/master/README.md#treemap_tile) - set the tiling method.
* [*treemap*.size](https://github.com/xswei/d3-hierarchy/blob/master/README.md#treemap_size) - set the layout size.
* [*treemap*.round](https://github.com/xswei/d3-hierarchy/blob/master/README.md#treemap_round) - set whether the output coordinates are rounded.
* [*treemap*.padding](https://github.com/xswei/d3-hierarchy/blob/master/README.md#treemap_padding) - set the padding.
* [*treemap*.paddingInner](https://github.com/xswei/d3-hierarchy/blob/master/README.md#treemap_paddingInner) - set the padding between siblings.
* [*treemap*.paddingOuter](https://github.com/xswei/d3-hierarchy/blob/master/README.md#treemap_paddingOuter) - set the padding between parent and children.
* [*treemap*.paddingTop](https://github.com/xswei/d3-hierarchy/blob/master/README.md#treemap_paddingTop) - set the padding between the parent’s top edge and children.
* [*treemap*.paddingRight](https://github.com/xswei/d3-hierarchy/blob/master/README.md#treemap_paddingRight) - set the padding between the parent’s right edge and children.
* [*treemap*.paddingBottom](https://github.com/xswei/d3-hierarchy/blob/master/README.md#treemap_paddingBottom) - set the padding between the parent’s bottom edge and children.
* [*treemap*.paddingLeft](https://github.com/xswei/d3-hierarchy/blob/master/README.md#treemap_paddingLeft) - set the padding between the parent’s left edge and children.
* [d3.treemapBinary](https://github.com/xswei/d3-hierarchy/blob/master/README.md#treemapBinary) - tile using a balanced binary tree.
* [d3.treemapDice](https://github.com/xswei/d3-hierarchy/blob/master/README.md#treemapDice) - tile into a horizontal row.
* [d3.treemapSlice](https://github.com/xswei/d3-hierarchy/blob/master/README.md#treemapSlice) - tile into a vertical column.
* [d3.treemapSliceDice](https://github.com/xswei/d3-hierarchy/blob/master/README.md#treemapSliceDice) - alternate between slicing and dicing.
* [d3.treemapSquarify](https://github.com/xswei/d3-hierarchy/blob/master/README.md#treemapSquarify) - tile using squarified rows per Bruls *et. al.*
* [d3.treemapResquarify](https://github.com/xswei/d3-hierarchy/blob/master/README.md#treemapResquarify) - like d3.treemapSquarify, but performs stable updates.
* [*squarify*.ratio](https://github.com/xswei/d3-hierarchy/blob/master/README.md#squarify_ratio) - set the desired rectangle aspect ratio.
* [d3.partition](https://github.com/xswei/d3-hierarchy/blob/master/README.md#partition) - create a new partition (icicle or sunburst) layout.
* [*partition*](https://github.com/xswei/d3-hierarchy/blob/master/README.md#_partition) - layout the specified hierarchy as a partition diagram.
* [*partition*.size](https://github.com/xswei/d3-hierarchy/blob/master/README.md#partition_size) - set the layout size.
* [*partition*.round](https://github.com/xswei/d3-hierarchy/blob/master/README.md#partition_round) - set whether the output coordinates are rounded.
* [*partition*.padding](https://github.com/xswei/d3-hierarchy/blob/master/README.md#partition_padding) - set the padding.
* [d3.pack](https://github.com/xswei/d3-hierarchy/blob/master/README.md#pack) - create a new circle-packing layout.
* [*pack*](https://github.com/xswei/d3-hierarchy/blob/master/README.md#_pack) - layout the specified hierarchy using circle-packing.
* [*pack*.radius](https://github.com/xswei/d3-hierarchy/blob/master/README.md#pack_radius) - set the radius accessor.
* [*pack*.size](https://github.com/xswei/d3-hierarchy/blob/master/README.md#pack_size) - set the layout size.
* [*pack*.padding](https://github.com/xswei/d3-hierarchy/blob/master/README.md#pack_padding) - set the padding.
* [d3.packSiblings](https://github.com/xswei/d3-hierarchy/blob/master/README.md#packSiblings) - pack the specified array of circles.
* [d3.packEnclose](https://github.com/xswei/d3-hierarchy/blob/master/README.md#packEnclose) - enclose the specified array of circles.

## [Interpolators (d3-interpolate)](https://github.com/xswei/d3-interpolate)

对数值、颜色、字符串、数组、对象等进行插值

* [d3.interpolate](https://github.com/xswei/d3-interpolate#interpolate) - 生成一个任意数值的插值器.
* [d3.interpolateArray](https://github.com/xswei/d3-interpolate#interpolateArray) - 生成一个数组插值器.
* [d3.interpolateDate](https://github.com/xswei/d3-interpolate#interpolateDate) - 生成一个时间类型插值器.
* [d3.interpolateNumber](https://github.com/xswei/d3-interpolate#interpolateNumber) - 生成一个时间类型插值器.
* [d3.interpolateObject](https://github.com/xswei/d3-interpolate#interpolateObject) - 生成一个对象类型插值器.
* [d3.interpolateRound](https://github.com/xswei/d3-interpolate#interpolateRound) - 生成一个数值类型插值器.
* [d3.interpolateString](https://github.com/xswei/d3-interpolate#interpolateString) - 生成一个字符串类型插值器.
* [d3.interpolateTransformCss](https://github.com/xswei/d3-interpolate#interpolateTransformCss) - 生成一个 2D css 样式过渡插值器.
* [d3.interpolateTransformSvg](https://github.com/xswei/d3-interpolate#interpolateTransformSvg) - 生成一个 2D SVG 过渡插值器.
* [d3.interpolateZoom](https://github.com/xswei/d3-interpolate#interpolateZoom) - 在两个缩放视图之间过渡的插值器.
* [d3.interpolateRgb](https://github.com/xswei/d3-interpolate#interpolateRgb) - 生成一个RGB类型插值器.
* [d3.interpolateRgbBasis](https://github.com/xswei/d3-interpolate#interpolateRgbBasis) - 根据一组颜色返回一个 B- 样条插值器.
* [d3.interpolateRgbBasisClosed](https://github.com/xswei/d3-interpolate#interpolateRgbBasisClosed) - 根据一组颜色返回一个 B- 样条插值器.
* [d3.interpolateHsl](https://github.com/xswei/d3-interpolate#interpolateHsl) - 生成一个 Hsl 类型插值器.
* [d3.interpolateHslLong](https://github.com/xswei/d3-interpolate#interpolateHslLong) - 生成一个 Hsl 类型插值器(反向模式).
* [d3.interpolateLab](https://github.com/xswei/d3-interpolate#interpolateLab) - 生成一个 Lab 类型插值器.
* [d3.interpolateHcl](https://github.com/xswei/d3-interpolate#interpolateHcl) - 生成一个 Hcl 类型插值器.
* [d3.interpolateHclLong](https://github.com/xswei/d3-interpolate#interpolateHclLong) - 生成一个 Hcl 类型插值器(反向模式).
* [d3.interpolateCubehelix](https://github.com/xswei/d3-interpolate#interpolateCubehelix) - 生成一个 Cubehelix 类型插值器.
* [d3.interpolateCubehelixLong](https://github.com/xswei/d3-interpolate#interpolateCubehelixLong) - 生成一个 Cubehelix 类型插值器(反向模式).
* [*interpolate*.gamma](https://github.com/xswei/d3-interpolate#interpolate_gamma) - 应用 `gamma` 修正.
* [d3.interpolateBasis](https://github.com/xswei/d3-interpolate#interpolateBasis) - 根据一组数值返回一个 B- 样条插值器.
* [d3.interpolateBasisClosed](https://github.com/xswei/d3-interpolate#interpolateBasisClosed) - 根据一组数值返回一个 B- 样条插值器.
* [d3.quantize](https://github.com/xswei/d3-interpolate#quantize) - 插值器生成一组均匀采样.

## [Paths (d3-path)](https://github.com/xswei/d3-path)

将 Canvas 路径命令序列化为 SVG 路径字符串。

* [d3.path](https://github.com/xswei/d3-path/blob/master/README.md#path) - 创建一个新的路径序列化.
* [*path*.moveTo](https://github.com/xswei/d3-path/blob/master/README.md#path_moveTo) - 移动到指定的点.
* [*path*.closePath](https://github.com/xswei/d3-path/blob/master/README.md#path_closePath) - 闭合当前子路径.
* [*path*.lineTo](https://github.com/xswei/d3-path/blob/master/README.md#path_lineTo) - 绘制直线.
* [*path*.quadraticCurveTo](https://github.com/xswei/d3-path/blob/master/README.md#path_quadraticCurveTo) - 绘制二次 Bézier 曲线.
* [*path*.bezierCurveTo](https://github.com/xswei/d3-path/blob/master/README.md#path_bezierCurveTo) - 绘制三次 Bézier 曲线.
* [*path*.arcTo](https://github.com/xswei/d3-path/blob/master/README.md#path_arcTo) - 绘制弧线段.
* [*path*.arc](https://github.com/xswei/d3-path/blob/master/README.md#path_arc) - 绘制弧线段.
* [*path*.rect](https://github.com/xswei/d3-path/blob/master/README.md#path_rect) - 绘制矩形.
* [*path*.toString](https://github.com/xswei/d3-path/blob/master/README.md#path_toString) - 序列化为 SVG 路径字符串.

## [Polygons (d3-polygon)](https://github.com/xswei/d3-polygon)

二维多边形的几何操作.

* [d3.polygonArea](https://github.com/xswei/d3-polygon/blob/master/README.md#polygonArea) - 计算指定多边形的面积.
* [d3.polygonCentroid](https://github.com/xswei/d3-polygon/blob/master/README.md#polygonCentroid) - 计算指定多边形的几何中心.
* [d3.polygonHull](https://github.com/xswei/d3-polygon/blob/master/README.md#polygonHull) - 计算指定一系列点的凸包.
* [d3.polygonContains](https://github.com/xswei/d3-polygon/blob/master/README.md#polygonContains) - 测试某个点是否在某个多边形内部.
* [d3.polygonLength](https://github.com/xswei/d3-polygon/blob/master/README.md#polygonLength) - 计算指定多边形的周长.

## [Quadtrees (d3-quadtree)](https://github.com/xswei/d3-quadtree)

四叉树, 二维空间递归细分.

* [d3.quadtree](https://github.com/xswei/d3-quadtree/blob/master/README.md#quadtree) - 创建一个新的空的四叉树.
* [*quadtree*.x](https://github.com/xswei/d3-quadtree/blob/master/README.md#quadtree_x) - 设置 *x* 访问器.
* [*quadtree*.y](https://github.com/xswei/d3-quadtree/blob/master/README.md#quadtree_y) - 设置 *y* 访问器.
* [*quadtree*.add](https://github.com/xswei/d3-quadtree/blob/master/README.md#quadtree_add) - 向四叉树中添加数据.
* [*quadtree*.addAll](https://github.com/xswei/d3-quadtree/blob/master/README.md#quadtree_addAll) - 向四叉树中添加数据数组.
* [*quadtree*.remove](https://github.com/xswei/d3-quadtree/blob/master/README.md#quadtree_remove) - 从四叉树中移除数据.
* [*quadtree*.removeAll](https://github.com/xswei/d3-quadtree/blob/master/README.md#quadtree_removeAll) - 从四叉树中移除一组数据.
* [*quadtree*.copy](https://github.com/xswei/d3-quadtree/blob/master/README.md#quadtree_copy) - 创建一个四叉树的拷贝.
* [*quadtree*.root](https://github.com/xswei/d3-quadtree/blob/master/README.md#quadtree_root) - 获取四叉树的根节点.
* [*quadtree*.data](https://github.com/xswei/d3-quadtree/blob/master/README.md#quadtree_data) - 从四叉树中取回数据.
* [*quadtree*.size](https://github.com/xswei/d3-quadtree/blob/master/README.md#quadtree_size) - 计算四叉树中的数据个数.
* [*quadtree*.find](https://github.com/xswei/d3-quadtree/blob/master/README.md#quadtree_find) - 从四叉树中快速查找最接近的数据.
* [*quadtree*.visit](https://github.com/xswei/d3-quadtree/blob/master/README.md#quadtree_visit) - 前序遍历四叉树中的所有节点.
* [*quadtree*.visitAfter](https://github.com/xswei/d3-quadtree/blob/master/README.md#quadtree_visitAfter) - 后序遍历四叉树中的所有节点.
* [*quadtree*.cover](https://github.com/xswei/d3-quadtree/blob/master/README.md#quadtree_cover) - 扩展四叉树直到覆盖指定的点.
* [*quadtree*.extent](https://github.com/xswei/d3-quadtree/blob/master/README.md#quadtree_extent) - 扩展四叉树以覆盖指定的区间.

## [Queues (d3-queue)](https://github.com/xswei/d3-queue)

使用可配置的并发管理异步任务.

* [d3.queue](https://github.com/xswei/d3-queue/blob/master/README.md#queue) - 管理异步任务的并发执行.
* [*queue*.defer](https://github.com/xswei/d3-queue/blob/master/README.md#queue_defer) - 注册异步任务.
* [*queue*.abort](https://github.com/xswei/d3-queue/blob/master/README.md#queue_abort) - 中断活动的异步任务并且取消未执行的任务.
* [*queue*.await](https://github.com/xswei/d3-queue/blob/master/README.md#queue_await) - 注册任务完成时的回调.
* [*queue*.awaitAll](https://github.com/xswei/d3-queue/blob/master/README.md#queue_awaitAll) - 注册任务完成时的回调.

## [Random Numbers (d3-random)](https://github.com/xswei/d3-random)

基于多种多样的分布模型生成随机数.

* [d3.randomUniform](https://github.com/xswei/d3-random/blob/master/README.md#randomUniform) - 一般分布.
* [d3.randomNormal](https://github.com/xswei/d3-random/blob/master/README.md#randomNormal) - 标准高斯分布.
* [d3.randomLogNormal](https://github.com/xswei/d3-random/blob/master/README.md#randomLogNormal) - 对数分布.
* [d3.randomBates](https://github.com/xswei/d3-random/blob/master/README.md#randomBates) - 贝茨分布.
* [d3.randomIrwinHall](https://github.com/xswei/d3-random/blob/master/README.md#randomIrwinHall) - Irwin–Hall 分布.
* [d3.randomExponential](https://github.com/xswei/d3-random/blob/master/README.md#randomExponential) - 指数分布.
* [*random*.source](https://github.com/xswei/d3-random/blob/master/README.md#random_source) - 设置随机数生成源.

## [Requests (d3-request)](https://github.com/xswei/d3-request)

基于异步 XMLHttpRequest 的易用封装

* [d3.request](https://github.com/xswei/d3-request/blob/master/README.md#request) - 创建一个异步请求.
* [*request*.header](https://github.com/xswei/d3-request/blob/master/README.md#request_header) - 设置请求头.
* [*request*.user](https://github.com/xswei/d3-request/blob/master/README.md#request_user) - 设置身份验证用户名.
* [*request*.password](https://github.com/xswei/d3-request/blob/master/README.md#request_password) - 设置身份验证密码.
* [*request*.mimeType](https://github.com/xswei/d3-request/blob/master/README.md#request_mimeType) - 设置 MIME 类型.
* [*request*.timeout](https://github.com/xswei/d3-request/blob/master/README.md#request_timeout) - 设置超时时间(毫秒).
* [*request*.responseType](https://github.com/xswei/d3-request/blob/master/README.md#request_responseType) - 设置相应类型.
* [*request*.response](https://github.com/xswei/d3-request/blob/master/README.md#request_response) - 设置响应函数.
* [*request*.get](https://github.com/xswei/d3-request/blob/master/README.md#request_get) - 以 GET 形式发送请求.
* [*request*.post](https://github.com/xswei/d3-request/blob/master/README.md#request_post) - 以 POST 形式发送请求.
* [*request*.send](https://github.com/xswei/d3-request/blob/master/README.md#request_send) - 发送请求.
* [*request*.abort](https://github.com/xswei/d3-request/blob/master/README.md#request_abort) - 中断请求.
* [*request*.on](https://github.com/xswei/d3-request/blob/master/README.md#request_on) - 设置请求事件监听.
* [d3.csv](https://github.com/xswei/d3-request/blob/master/README.md#csv) - 获取 CSV 文件.
* [d3.html](https://github.com/xswei/d3-request/blob/master/README.md#html) - 获取 HTML 文件.
* [d3.json](https://github.com/xswei/d3-request/blob/master/README.md#json) - 获取 JSON 文件.
* [d3.text](https://github.com/xswei/d3-request/blob/master/README.md#text) - 获取文本文件.
* [d3.tsv](https://github.com/xswei/d3-request/blob/master/README.md#tsv) - 获取 TSV 文件.
* [d3.xml](https://github.com/xswei/d3-request/blob/master/README.md#xml) - 获取 XML 文件.

## [Scales (d3-scale)](https://github.com/xswei/d3-scale)

Encodings that map abstract data to visual representation.

### [Continuous Scales](https://github.com/xswei/d3-scale/blob/master/README.md#continuous-scales)

Map a continuous, quantitative domain to a continuous range.

* [*continuous*](https://github.com/xswei/d3-scale/blob/master/README.md#_continuous) - compute the range value corresponding to a given domain value.
* [*continuous*.invert](https://github.com/xswei/d3-scale/blob/master/README.md#continuous_invert) - compute the domain value corresponding to a given range value.
* [*continuous*.domain](https://github.com/xswei/d3-scale/blob/master/README.md#continuous_domain) - set the input domain.
* [*continuous*.range](https://github.com/xswei/d3-scale/blob/master/README.md#continuous_range) - set the output range.
* [*continuous*.rangeRound](https://github.com/xswei/d3-scale/blob/master/README.md#continuous_rangeRound) - set the output range and enable rounding.
* [*continuous*.clamp](https://github.com/xswei/d3-scale/blob/master/README.md#continuous_clamp) - enable clamping to the domain or range.
* [*continuous*.interpolate](https://github.com/xswei/d3-scale/blob/master/README.md#continuous_interpolate) - set the output interpolator.
* [*continuous*.ticks](https://github.com/xswei/d3-scale/blob/master/README.md#continuous_ticks) - compute representative values from the domain.
* [*continuous*.tickFormat](https://github.com/xswei/d3-scale/blob/master/README.md#continuous_tickFormat) - format ticks for human consumption.
* [*continuous*.nice](https://github.com/xswei/d3-scale/blob/master/README.md#continuous_nice) - extend the domain to nice round numbers.
* [*continuous*.copy](https://github.com/xswei/d3-scale/blob/master/README.md#continuous_copy) - create a copy of this scale.
* [d3.scaleLinear](https://github.com/xswei/d3-scale/blob/master/README.md#scaleLinear) - create a quantitative linear scale.
* [d3.scalePow](https://github.com/xswei/d3-scale/blob/master/README.md#scalePow) - create a quantitative power scale.
* [*pow*](https://github.com/xswei/d3-scale/blob/master/README.md#_pow) - compute the range value corresponding to a given domain value.
* [*pow*.invert](https://github.com/xswei/d3-scale/blob/master/README.md#pow_invert) - compute the domain value corresponding to a given range value.
* [*pow*.exponent](https://github.com/xswei/d3-scale/blob/master/README.md#pow_exponent) - set the power exponent.
* [*pow*.domain](https://github.com/xswei/d3-scale/blob/master/README.md#pow_domain) - set the input domain.
* [*pow*.range](https://github.com/xswei/d3-scale/blob/master/README.md#pow_range) - set the output range.
* [*pow*.rangeRound](https://github.com/xswei/d3-scale/blob/master/README.md#pow_rangeRound) - set the output range and enable rounding.
* [*pow*.clamp](https://github.com/xswei/d3-scale/blob/master/README.md#pow_clamp) - enable clamping to the domain or range.
* [*pow*.interpolate](https://github.com/xswei/d3-scale/blob/master/README.md#pow_interpolate) - set the output interpolator.
* [*pow*.ticks](https://github.com/xswei/d3-scale/blob/master/README.md#pow_ticks) - compute representative values from the domain.
* [*pow*.tickFormat](https://github.com/xswei/d3-scale/blob/master/README.md#pow_tickFormat) - format ticks for human consumption.
* [*pow*.nice](https://github.com/xswei/d3-scale/blob/master/README.md#pow_nice) - extend the domain to nice round numbers.
* [*pow*.copy](https://github.com/xswei/d3-scale/blob/master/README.md#pow_copy) - create a copy of this scale.
* [d3.scaleSqrt](https://github.com/xswei/d3-scale/blob/master/README.md#scaleSqrt) - create a quantitative power scale with exponent 0.5.
* [d3.scaleLog](https://github.com/xswei/d3-scale/blob/master/README.md#scaleLog) - create a quantitative logarithmic scale.
* [*log*](https://github.com/xswei/d3-scale/blob/master/README.md#_log) - compute the range value corresponding to a given domain value.
* [*log*.invert](https://github.com/xswei/d3-scale/blob/master/README.md#log_invert) - compute the domain value corresponding to a given range value.
* [*log*.base](https://github.com/xswei/d3-scale/blob/master/README.md#log_base) - set the logarithm base.
* [*log*.domain](https://github.com/xswei/d3-scale/blob/master/README.md#log_domain) - set the input domain.
* [*log*.range](https://github.com/xswei/d3-scale/blob/master/README.md#log_range) - set the output range.
* [*log*.rangeRound](https://github.com/xswei/d3-scale/blob/master/README.md#log_rangeRound) - set the output range and enable rounding.
* [*log*.clamp](https://github.com/xswei/d3-scale/blob/master/README.md#log_clamp) - enable clamping to the domain or range.
* [*log*.interpolate](https://github.com/xswei/d3-scale/blob/master/README.md#log_interpolate) - set the output interpolator.
* [*log*.ticks](https://github.com/xswei/d3-scale/blob/master/README.md#log_ticks) - compute representative values from the domain.
* [*log*.tickFormat](https://github.com/xswei/d3-scale/blob/master/README.md#log_tickFormat) - format ticks for human consumption.
* [*log*.nice](https://github.com/xswei/d3-scale/blob/master/README.md#log_nice) - extend the domain to nice round numbers.
* [*log*.copy](https://github.com/xswei/d3-scale/blob/master/README.md#log_copy) - create a copy of this scale.
* [d3.scaleIdentity](https://github.com/xswei/d3-scale/blob/master/README.md#identity) - create a quantitative identity scale.
* [d3.scaleTime](https://github.com/xswei/d3-scale/blob/master/README.md#scaleTime) - create a linear scale for time.
* [*time*](https://github.com/xswei/d3-scale/blob/master/README.md#_time) - compute the range value corresponding to a given domain value.
* [*time*.invert](https://github.com/xswei/d3-scale/blob/master/README.md#time_invert) - compute the domain value corresponding to a given range value.
* [*time*.domain](https://github.com/xswei/d3-scale/blob/master/README.md#time_domain) - set the input domain.
* [*time*.range](https://github.com/xswei/d3-scale/blob/master/README.md#time_range) - set the output range.
* [*time*.rangeRound](https://github.com/xswei/d3-scale/blob/master/README.md#time_rangeRound) - set the output range and enable rounding.
* [*time*.clamp](https://github.com/xswei/d3-scale/blob/master/README.md#time_clamp) - enable clamping to the domain or range.
* [*time*.interpolate](https://github.com/xswei/d3-scale/blob/master/README.md#time_interpolate) - set the output interpolator.
* [*time*.ticks](https://github.com/xswei/d3-scale/blob/master/README.md#time_ticks) - compute representative values from the domain.
* [*time*.tickFormat](https://github.com/xswei/d3-scale/blob/master/README.md#time_tickFormat) - format ticks for human consumption.
* [*time*.nice](https://github.com/xswei/d3-scale/blob/master/README.md#time_nice) - extend the domain to nice round times.
* [*time*.copy](https://github.com/xswei/d3-scale/blob/master/README.md#time_copy) - create a copy of this scale.
* [d3.scaleUtc](https://github.com/xswei/d3-scale/blob/master/README.md#scaleUtc) - create a linear scale for UTC.

### [Sequential Scales](https://github.com/xswei/d3-scale/blob/master/README.md#sequential-scales)

Map a continuous, quantitative domain to a continuous, fixed interpolator.

* [d3.scaleSequential](https://github.com/xswei/d3-scale/blob/master/README.md#scaleSequential) - create a sequential scale.
* [*sequential*.interpolator](https://github.com/xswei/d3-scale/blob/master/README.md#sequential_interpolator) - set the scale’s output interpolator.
* [d3.interpolateViridis](https://github.com/xswei/d3-scale/blob/master/README.md#interpolateViridis) - a dark-to-light color scheme.
* [d3.interpolateInferno](https://github.com/xswei/d3-scale/blob/master/README.md#interpolateInferno) - a dark-to-light color scheme.
* [d3.interpolateMagma](https://github.com/xswei/d3-scale/blob/master/README.md#interpolateMagma) - a dark-to-light color scheme.
* [d3.interpolatePlasma](https://github.com/xswei/d3-scale/blob/master/README.md#interpolatePlasma) - a dark-to-light color scheme.
* [d3.interpolateWarm](https://github.com/xswei/d3-scale/blob/master/README.md#interpolateWarm) - a rotating-hue color scheme.
* [d3.interpolateCool](https://github.com/xswei/d3-scale/blob/master/README.md#interpolateCool) - a rotating-hue color scheme.
* [d3.interpolateRainbow](https://github.com/xswei/d3-scale/blob/master/README.md#interpolateRainbow) - a cyclical rotating-hue color scheme.
* [d3.interpolateCubehelixDefault](https://github.com/xswei/d3-scale/blob/master/README.md#interpolateCubehelixDefault) - a dark-to-light, rotating-hue color scheme.

### [Quantize Scales](https://github.com/xswei/d3-scale/blob/master/README.md#quantize-scales)

Map a continuous, quantitative domain to a discrete range.

* [d3.scaleQuantize](https://github.com/xswei/d3-scale/blob/master/README.md#scaleQuantize) - create a uniform quantizing linear scale.
* [*quantize*](https://github.com/xswei/d3-scale/blob/master/README.md#_quantize) - compute the range value corresponding to a given domain value.
* [*quantize*.invertExtent](https://github.com/xswei/d3-scale/blob/master/README.md#quantize_invertExtent) - compute the domain values corresponding to a given range value.
* [*quantize*.domain](https://github.com/xswei/d3-scale/blob/master/README.md#quantize_domain) - set the input domain.
* [*quantize*.range](https://github.com/xswei/d3-scale/blob/master/README.md#quantize_range) - set the output range.
* [*quantize*.nice](https://github.com/xswei/d3-scale/blob/master/README.md#quantize_nice) - extend the domain to nice round numbers.
* [*quantize*.ticks](https://github.com/xswei/d3-scale/blob/master/README.md#quantize_ticks) - compute representative values from the domain.
* [*quantize*.tickFormat](https://github.com/xswei/d3-scale/blob/master/README.md#quantize_tickFormat) - format ticks for human consumption.
* [*quantize*.copy](https://github.com/xswei/d3-scale/blob/master/README.md#quantize_copy) - create a copy of this scale.
* [d3.scaleQuantile](https://github.com/xswei/d3-scale/blob/master/README.md#scaleQuantile) - create a quantile quantizing linear scale.
* [*quantile*](https://github.com/xswei/d3-scale/blob/master/README.md#_quantile) - compute the range value corresponding to a given domain value.
* [*quantile*.invertExtent](https://github.com/xswei/d3-scale/blob/master/README.md#quantile_invertExtent) - compute the domain values corresponding to a given range value.
* [*quantile*.domain](https://github.com/xswei/d3-scale/blob/master/README.md#quantile_domain) - set the input domain.
* [*quantile*.range](https://github.com/xswei/d3-scale/blob/master/README.md#quantile_range) - set the output range.
* [*quantile*.quantiles](https://github.com/xswei/d3-scale/blob/master/README.md#quantile_quantiles) - get the quantile thresholds.
* [*quantile*.copy](https://github.com/xswei/d3-scale/blob/master/README.md#quantile_copy) - create a copy of this scale.
* [d3.scaleThreshold](https://github.com/xswei/d3-scale/blob/master/README.md#scaleThreshold) - create an arbitrary quantizing linear scale.
* [*threshold*](https://github.com/xswei/d3-scale/blob/master/README.md#_threshold) - compute the range value corresponding to a given domain value.
* [*threshold*.invertExtent](https://github.com/xswei/d3-scale/blob/master/README.md#threshold_invertExtent) - compute the domain values corresponding to a given range value.
* [*threshold*.domain](https://github.com/xswei/d3-scale/blob/master/README.md#threshold_domain) - set the input domain.
* [*threshold*.range](https://github.com/xswei/d3-scale/blob/master/README.md#threshold_range) - set the output range.
* [*threshold*.copy](https://github.com/xswei/d3-scale/blob/master/README.md#threshold_copy) - create a copy of this scale.

### [Ordinal Scales](https://github.com/xswei/d3-scale/blob/master/README.md#ordinal-scales)

Map a discrete domain to a discrete range.

* [d3.scaleOrdinal](https://github.com/xswei/d3-scale/blob/master/README.md#scaleOrdinal) - create an ordinal scale.
* [*ordinal*](https://github.com/xswei/d3-scale/blob/master/README.md#_ordinal) - compute the range value corresponding to a given domain value.
* [*ordinal*.domain](https://github.com/xswei/d3-scale/blob/master/README.md#ordinal_domain) - set the input domain.
* [*ordinal*.range](https://github.com/xswei/d3-scale/blob/master/README.md#ordinal_range) - set the output range.
* [*ordinal*.unknown](https://github.com/xswei/d3-scale/blob/master/README.md#ordinal_unknown) - set the output value for unknown inputs.
* [*ordinal*.copy](https://github.com/xswei/d3-scale/blob/master/README.md#ordinal_copy) - create a copy of this scale.
* [d3.scaleImplicit](https://github.com/xswei/d3-scale/blob/master/README.md#scaleImplicit) - a special unknown value for implicit domains.
* [d3.scaleBand](https://github.com/xswei/d3-scale/blob/master/README.md#scaleBand) - create an ordinal band scale.
* [*band*](https://github.com/xswei/d3-scale/blob/master/README.md#_band) - compute the band start corresponding to a given domain value.
* [*band*.domain](https://github.com/xswei/d3-scale/blob/master/README.md#band_domain) - set the input domain.
* [*band*.range](https://github.com/xswei/d3-scale/blob/master/README.md#band_range) - set the output range.
* [*band*.rangeRound](https://github.com/xswei/d3-scale/blob/master/README.md#band_rangeRound) - set the output range and enable rounding.
* [*band*.round](https://github.com/xswei/d3-scale/blob/master/README.md#band_round) - enable rounding.
* [*band*.paddingInner](https://github.com/xswei/d3-scale/blob/master/README.md#band_paddingInner) - set padding between bands.
* [*band*.paddingOuter](https://github.com/xswei/d3-scale/blob/master/README.md#band_paddingOuter) - set padding outside the first and last bands.
* [*band*.padding](https://github.com/xswei/d3-scale/blob/master/README.md#band_padding) - set padding outside and between bands.
* [*band*.align](https://github.com/xswei/d3-scale/blob/master/README.md#band_align) - set band alignment, if there is extra space.
* [*band*.bandwidth](https://github.com/xswei/d3-scale/blob/master/README.md#band_bandwidth) - get the width of each band.
* [*band*.step](https://github.com/xswei/d3-scale/blob/master/README.md#band_step) - get the distance between the starts of adjacent bands.
* [*band*.copy](https://github.com/xswei/d3-scale/blob/master/README.md#band_copy) - create a copy of this scale.
* [d3.scalePoint](https://github.com/xswei/d3-scale/blob/master/README.md#scalePoint) - create an ordinal point scale.
* [*point*](https://github.com/xswei/d3-scale/blob/master/README.md#_point) - compute the point corresponding to a given domain value.
* [*point*.domain](https://github.com/xswei/d3-scale/blob/master/README.md#point_domain) - set the input domain.
* [*point*.range](https://github.com/xswei/d3-scale/blob/master/README.md#point_range) - set the output range.
* [*point*.rangeRound](https://github.com/xswei/d3-scale/blob/master/README.md#point_rangeRound) - set the output range and enable rounding.
* [*point*.round](https://github.com/xswei/d3-scale/blob/master/README.md#point_round) - enable rounding.
* [*point*.padding](https://github.com/xswei/d3-scale/blob/master/README.md#point_padding) - set padding outside the first and last point.
* [*point*.align](https://github.com/xswei/d3-scale/blob/master/README.md#point_align) - set point alignment, if there is extra space.
* [*point*.bandwidth](https://github.com/xswei/d3-scale/blob/master/README.md#point_bandwidth) - returns zero.
* [*point*.step](https://github.com/xswei/d3-scale/blob/master/README.md#point_step) - get the distance between the starts of adjacent points.
* [*point*.copy](https://github.com/xswei/d3-scale/blob/master/README.md#point_copy) - create a copy of this scale.
* [d3.schemeCategory10](https://github.com/xswei/d3-scale/blob/master/README.md#schemeCategory10) - a categorical scheme with 10 colors.
* [d3.schemeCategory20](https://github.com/xswei/d3-scale/blob/master/README.md#schemeCategory20) - a categorical scheme with 20 colors.
* [d3.schemeCategory20b](https://github.com/xswei/d3-scale/blob/master/README.md#schemeCategory20b) - a categorical scheme with 20 colors.
* [d3.schemeCategory20c](https://github.com/xswei/d3-scale/blob/master/README.md#schemeCategory20c) - a categorical scheme with 20 colors.

## [Selections (d3-selection)](https://github.com/xswei/d3-selection)

通过选择元素和绑定数据对 DOM 元素进行修改或变换.

### [Selecting Elements](https://github.com/xswei/d3-selection/blob/master/README.md#selecting-elements)

* [d3.selection](https://github.com/xswei/d3-selection/blob/master/README.md#selection) - 选取文档元素的根节点.
* [d3.select](https://github.com/xswei/d3-selection/blob/master/README.md#select) - 从文档中选取一个元素.
* [d3.selectAll](https://github.com/xswei/d3-selection/blob/master/README.md#selectAll) - 从文档中选择多个元素.
* [*selection*.select](https://github.com/xswei/d3-selection/blob/master/README.md#selection_select) - 从每个被选中的元素中选择一个后代元素.
* [*selection*.selectAll](https://github.com/xswei/d3-selection/blob/master/README.md#selection_selectAll) -从每个被选中的元素中选择多个后代元素.
* [*selection*.filter](https://github.com/xswei/d3-selection/blob/master/README.md#selection_filter) - 基于数据对元素进行过滤.
* [*selection*.merge](https://github.com/xswei/d3-selection/blob/master/README.md#selection_merge) - 将当前选择集与其他选择集进行合并.
* [d3.matcher](https://github.com/xswei/d3-selection/blob/master/README.md#matcher) - 测试一个元素是否符合某种选择器.
* [d3.selector](https://github.com/xswei/d3-selection/blob/master/README.md#selector) - 选择一个元素.
* [d3.selectorAll](https://github.com/xswei/d3-selection/blob/master/README.md#selectorAll) - 选择多个元素.
* [d3.window](https://github.com/xswei/d3-selection/blob/master/README.md#window) - 获取节点所属的 window.
* [d3.style](https://github.com/xswei/d3-selection/blob/master/README.md#style) - 获取节点当前的指定样式名称的样式值.

### [Modifying Elements](https://github.com/xswei/d3-selection/blob/master/README.md#modifying-elements)

* [*selection*.attr](https://github.com/xswei/d3-selection/blob/master/README.md#selection_attr) - 设置或获取属性.
* [*selection*.classed](https://github.com/xswei/d3-selection/blob/master/README.md#selection_classed) - 获取，添加或者移除 CSS 类.
* [*selection*.style](https://github.com/xswei/d3-selection/blob/master/README.md#selection_style) - 获取或设置样式属性.
* [*selection*.property](https://github.com/xswei/d3-selection/blob/master/README.md#selection_property) - 获取或设置一个特殊属性.
* [*selection*.text](https://github.com/xswei/d3-selection/blob/master/README.md#selection_text) - 设置或获取文本内容.
* [*selection*.html](https://github.com/xswei/d3-selection/blob/master/README.md#selection_html) - 设置或获取 HTML 内容.
* [*selection*.append](https://github.com/xswei/d3-selection/blob/master/README.md#selection_append) - 创建、添加并返回一个新的元素.
* [*selection*.insert](https://github.com/xswei/d3-selection/blob/master/README.md#selection_insert) - 创建、插入并返回一个新的元素.
* [*selection*.remove](https://github.com/xswei/d3-selection/blob/master/README.md#selection_remove) - 从文档中移除元素.
* [*selection*.clone](https://github.com/xswei/d3-selection/blob/master/README.md#selection_clone) - 插入选中元素的克隆.
* [*selection*.sort](https://github.com/xswei/d3-selection/blob/master/README.md#selection_sort) - 基于数据对文档中的元素进行排序.
* [*selection*.order](https://github.com/xswei/d3-selection/blob/master/README.md#selection_order) - reorders elements in the document to match the selection.
* [*selection*.raise](https://github.com/xswei/d3-selection/blob/master/README.md#selection_raise) - reorders each element as the last child of its parent.
* [*selection*.lower](https://github.com/xswei/d3-selection/blob/master/README.md#selection_lower) - reorders each element as the first child of its parent.
* [d3.create](https://github.com/xswei/d3-selection/blob/master/README.md#create) - create and select a detached element.
* [d3.creator](https://github.com/xswei/d3-selection/blob/master/README.md#creator) - create an element by name.

### [Joining Data](https://github.com/xswei/d3-selection/blob/master/README.md#joining-data)

* [*selection*.data](https://github.com/xswei/d3-selection/blob/master/README.md#selection_data) - 将元素与数据绑定.
* [*selection*.enter](https://github.com/xswei/d3-selection/blob/master/README.md#selection_enter) - 获取需要插入的选择集(数据个数大于元素个数)的占位符.
* [*selection*.exit](https://github.com/xswei/d3-selection/blob/master/README.md#selection_exit) - 获取多余的元素的选择集(数据个数小于元素个数).
* [*selection*.datum](https://github.com/xswei/d3-selection/blob/master/README.md#selection_datum) - 设置或获取元素绑定的数据集(不进行数据与元素个数的对比).

### [Handling Events](https://github.com/xswei/d3-selection/blob/master/README.md#handling-events)

* [*selection*.on](https://github.com/xswei/d3-selection/blob/master/README.md#selection_on) - 添加或移除事件监听器.
* [*selection*.dispatch](https://github.com/xswei/d3-selection/blob/master/README.md#selection_dispatch) - 分发一个自定义事件.
* [d3.event](https://github.com/xswei/d3-selection/blob/master/README.md#event) - 当前交互中的用户事件对象.
* [d3.customEvent](https://github.com/xswei/d3-selection/blob/master/README.md#customEvent) - 临时定义一个自定义事件.
* [d3.mouse](https://github.com/xswei/d3-selection/blob/master/README.md#mouse) - 获取鼠标相对于给定容器的坐标位置.
* [d3.touch](https://github.com/xswei/d3-selection/blob/master/README.md#touch) - 获取相对于给定容器的触摸坐标位置.
* [d3.touches](https://github.com/xswei/d3-selection/blob/master/README.md#touches) - 获取相对于给定容器的触摸坐标位置.
* [d3.clientPoint](https://github.com/xswei/d3-selection/blob/master/README.md#clientPoint) - 获取相对于给定容器的位置.

### [Control Flow](https://github.com/xswei/d3-selection/blob/master/README.md#control-flow)

* [*selection*.each](https://github.com/xswei/d3-selection/blob/master/README.md#selection_each) - call a function for each element.
* [*selection*.call](https://github.com/xswei/d3-selection/blob/master/README.md#selection_call) - call a function with this selection.
* [*selection*.empty](https://github.com/xswei/d3-selection/blob/master/README.md#selection_empty) - returns true if this selection is empty.
* [*selection*.nodes](https://github.com/xswei/d3-selection/blob/master/README.md#selection_nodes) - returns an array of all selected elements.
* [*selection*.node](https://github.com/xswei/d3-selection/blob/master/README.md#selection_node) - returns the first (non-null) element.
* [*selection*.size](https://github.com/xswei/d3-selection/blob/master/README.md#selection_size) - returns the count of elements.

### [Local Variables](https://github.com/xswei/d3-selection/blob/master/README.md#local-variables)

* [d3.local](https://github.com/xswei/d3-selection/blob/master/README.md#local) - declares a new local variable.
* [*local*.set](https://github.com/xswei/d3-selection/blob/master/README.md#local_set) - set a local variable’s value.
* [*local*.get](https://github.com/xswei/d3-selection/blob/master/README.md#local_get) - get a local variable’s value.
* [*local*.remove](https://github.com/xswei/d3-selection/blob/master/README.md#local_remove) - delete a local variable.
* [*local*.toString](https://github.com/xswei/d3-selection/blob/master/README.md#local_toString) - get the property identifier of a local variable.

### [Namespaces](https://github.com/xswei/d3-selection/blob/master/README.md#namespaces)

* [d3.namespace](https://github.com/xswei/d3-selection/blob/master/README.md#namespace) - qualify a prefixed XML name, such as “xlink:href”.
* [d3.namespaces](https://github.com/xswei/d3-selection/blob/master/README.md#namespaces) - the built-in XML namespaces.

## [Shapes (d3-shape)](https://github.com/xswei/d3-shape)

可视化基本图元

### [Arcs](https://github.com/xswei/d3-shape/blob/master/README.md#arcs)

圆形或环形，在饼图或者环形图中用到

* [d3.arc](https://github.com/xswei/d3-shape/blob/master/README.md#arc) - 创建一个环生成器.
* [*arc*](https://github.com/xswei/d3-shape/blob/master/README.md#_arc) - 根据指定的数据生成环.
* [*arc*.centroid](https://github.com/xswei/d3-shape/blob/master/README.md#arc_centroid) - 计算环的中心点.
* [*arc*.innerRadius](https://github.com/xswei/d3-shape/blob/master/README.md#arc_innerRadius) - 设置环的内半径.
* [*arc*.outerRadius](https://github.com/xswei/d3-shape/blob/master/README.md#arc_outerRadius) - 设置环的外半径.
* [*arc*.cornerRadius](https://github.com/xswei/d3-shape/blob/master/README.md#arc_cornerRadius) - 设置拐角半径.
* [*arc*.startAngle](https://github.com/xswei/d3-shape/blob/master/README.md#arc_startAngle) - 设置起始角度.
* [*arc*.endAngle](https://github.com/xswei/d3-shape/blob/master/README.md#arc_endAngle) - 设置终止角度.
* [*arc*.padAngle](https://github.com/xswei/d3-shape/blob/master/README.md#arc_padAngle) - 设置相邻两个环之间的间隙角度.
* [*arc*.padRadius](https://github.com/xswei/d3-shape/blob/master/README.md#arc_padRadius) - set the radius at which to linearize padding.
* [*arc*.context](https://github.com/xswei/d3-shape/blob/master/README.md#arc_context) - 设置渲染上下文.

### [Pies](https://github.com/xswei/d3-shape/blob/master/README.md#pies)

将一组表格数据转换成生成饼图或者环形图需要的数据

* [d3.pie](https://github.com/xswei/d3-shape/blob/master/README.md#pie) - 创建一个新的饼图生成器.
* [*pie*](https://github.com/xswei/d3-shape/blob/master/README.md#_pie) - 根据指定的数据计算每条数据对应环形的角度.
* [*pie*.value](https://github.com/xswei/d3-shape/blob/master/README.md#pie_value) - 设置值访问器.
* [*pie*.sort](https://github.com/xswei/d3-shape/blob/master/README.md#pie_sort) - 设置排序比较器.
* [*pie*.sortValues](https://github.com/xswei/d3-shape/blob/master/README.md#pie_sortValues) - 设置排序比较器.
* [*pie*.startAngle](https://github.com/xswei/d3-shape/blob/master/README.md#pie_startAngle) - 设置所有环形的起始角度.
* [*pie*.endAngle](https://github.com/xswei/d3-shape/blob/master/README.md#pie_endAngle) - 设置所有环形的终止角度.
* [*pie*.padAngle](https://github.com/xswei/d3-shape/blob/master/README.md#pie_padAngle) - 设置相邻两个环之间的间隙角度.

### [Lines](https://github.com/xswei/d3-shape/blob/master/README.md#lines)

A spline or polyline, as in a line chart.

* [d3.line](https://github.com/xswei/d3-shape/blob/master/README.md#line) - create a new line generator.
* [*line*](https://github.com/xswei/d3-shape/blob/master/README.md#_line) - generate a line for the given dataset.
* [*line*.x](https://github.com/xswei/d3-shape/blob/master/README.md#line_x) - set the *x* accessor.
* [*line*.y](https://github.com/xswei/d3-shape/blob/master/README.md#line_y) - set the *y* accessor.
* [*line*.defined](https://github.com/xswei/d3-shape/blob/master/README.md#line_defined) - set the defined accessor.
* [*line*.curve](https://github.com/xswei/d3-shape/blob/master/README.md#line_curve) - set the curve interpolator.
* [*line*.context](https://github.com/xswei/d3-shape/blob/master/README.md#line_context) - set the rendering context.
* [d3.radialLine](https://github.com/xswei/d3-shape/blob/master/README.md#radialLine) - create a new radial line generator.
* [*radialLine*](https://github.com/xswei/d3-shape/blob/master/README.md#_radialLine) - generate a line for the given dataset.
* [*radialLine*.angle](https://github.com/xswei/d3-shape/blob/master/README.md#radialLine_angle) - set the angle accessor.
* [*radialLine*.radius](https://github.com/xswei/d3-shape/blob/master/README.md#radialLine_radius) - set the radius accessor.
* [*radialLine*.defined](https://github.com/xswei/d3-shape/blob/master/README.md#radialLine_defined) - set the defined accessor.
* [*radialLine*.curve](https://github.com/xswei/d3-shape/blob/master/README.md#radialLine_curve) - set the curve interpolator.
* [*radialLine*.context](https://github.com/xswei/d3-shape/blob/master/README.md#radialLine_context) - set the rendering context.

### [Areas](https://github.com/xswei/d3-shape/blob/master/README.md#areas)

An area, defined by a bounding topline and baseline, as in an area chart.

* [d3.area](https://github.com/xswei/d3-shape/blob/master/README.md#area) - create a new area generator.
* [*area*](https://github.com/xswei/d3-shape/blob/master/README.md#_area) - generate an area for the given dataset.
* [*area*.x](https://github.com/xswei/d3-shape/blob/master/README.md#area_x) - set the *x0* and *x1* accessors.
* [*area*.x0](https://github.com/xswei/d3-shape/blob/master/README.md#area_x0) - set the baseline *x* accessor.
* [*area*.x1](https://github.com/xswei/d3-shape/blob/master/README.md#area_x1) - set the topline *x* accessor.
* [*area*.y](https://github.com/xswei/d3-shape/blob/master/README.md#area_y) - set the *y0* and *y1* accessors.
* [*area*.y0](https://github.com/xswei/d3-shape/blob/master/README.md#area_y0) - set the baseline *y* accessor.
* [*area*.y1](https://github.com/xswei/d3-shape/blob/master/README.md#area_y1) - set the topline *y* accessor.
* [*area*.defined](https://github.com/xswei/d3-shape/blob/master/README.md#area_defined) - set the defined accessor.
* [*area*.curve](https://github.com/xswei/d3-shape/blob/master/README.md#area_curve) - set the curve interpolator.
* [*area*.context](https://github.com/xswei/d3-shape/blob/master/README.md#area_context) - set the rendering context.
* [*area*.lineX0](https://github.com/xswei/d3-shape/blob/master/README.md#area_lineX0) - derive a line for the left edge of an area.
* [*area*.lineX1](https://github.com/xswei/d3-shape/blob/master/README.md#area_lineX1) - derive a line for the right edge of an area.
* [*area*.lineY0](https://github.com/xswei/d3-shape/blob/master/README.md#area_lineY0) - derive a line for the top edge of an area.
* [*area*.lineY1](https://github.com/xswei/d3-shape/blob/master/README.md#area_lineY1) - derive a line for the bottom edge of an area.
* [d3.radialArea](https://github.com/xswei/d3-shape/blob/master/README.md#radialArea) - create a new radial area generator.
* [*radialArea*](https://github.com/xswei/d3-shape/blob/master/README.md#_radialArea) - generate an area for the given dataset.
* [*radialArea*.angle](https://github.com/xswei/d3-shape/blob/master/README.md#radialArea_angle) - set the start and end angle accessors.
* [*radialArea*.startAngle](https://github.com/xswei/d3-shape/blob/master/README.md#radialArea_startAngle) - set the start angle accessor.
* [*radialArea*.endAngle](https://github.com/xswei/d3-shape/blob/master/README.md#radialArea_endAngle) - set the end angle accessor.
* [*radialArea*.radius](https://github.com/xswei/d3-shape/blob/master/README.md#radialArea_radius) - set the inner and outer radius accessors.
* [*radialArea*.innerRadius](https://github.com/xswei/d3-shape/blob/master/README.md#radialArea_innerRadius) - set the inner radius accessor.
* [*radialArea*.outerRadius](https://github.com/xswei/d3-shape/blob/master/README.md#radialArea_outerRadius) - set the outer radius accessor.
* [*radialArea*.defined](https://github.com/xswei/d3-shape/blob/master/README.md#radialArea_defined) - set the defined accessor.
* [*radialArea*.curve](https://github.com/xswei/d3-shape/blob/master/README.md#radialArea_curve) - set the curve interpolator.
* [*radialArea*.context](https://github.com/xswei/d3-shape/blob/master/README.md#radialArea_context) - set the rendering context.
* [*radialArea*.lineStartAngle](https://github.com/xswei/d3-shape/blob/master/README.md#area_lineStartAngle) - derive a line for the start edge of an area.
* [*radialArea*.lineEndAngle](https://github.com/xswei/d3-shape/blob/master/README.md#area_lineEndAngle) - derive a line for the end edge of an area.
* [*radialArea*.lineInnerRadius](https://github.com/xswei/d3-shape/blob/master/README.md#area_lineInnerRadius) - derive a line for the inner edge of an area.
* [*radialArea*.lineOuterRadius](https://github.com/xswei/d3-shape/blob/master/README.md#area_lineOuterRadius) - derive a line for the outer edge of an area.

### [Curves](https://github.com/xswei/d3-shape/blob/master/README.md#curves)

Interpolate between points to produce a continuous shape.

* [d3.curveBasis](https://github.com/xswei/d3-shape/blob/master/README.md#curveBasis) - a cubic basis spline, repeating the end points.
* [d3.curveBasisClosed](https://github.com/xswei/d3-shape/blob/master/README.md#curveBasisClosed) - a closed cubic basis spline.
* [d3.curveBasisOpen](https://github.com/xswei/d3-shape/blob/master/README.md#curveBasisOpen) - a cubic basis spline.
* [d3.curveBundle](https://github.com/xswei/d3-shape/blob/master/README.md#curveBundle) - a straightened cubic basis spline.
* [*bundle*.beta](https://github.com/xswei/d3-shape/blob/master/README.md#bundle_beta) - set the bundle tension *beta*.
* [d3.curveCardinal](https://github.com/xswei/d3-shape/blob/master/README.md#curveCardinal) - a cubic cardinal spline, with one-sided difference at each end.
* [d3.curveCardinalClosed](https://github.com/xswei/d3-shape/blob/master/README.md#curveCardinalClosed) - a closed cubic cardinal spline.
* [d3.curveCardinalOpen](https://github.com/xswei/d3-shape/blob/master/README.md#curveCardinalOpen) - a cubic cardinal spline.
* [*cardinal*.tension](https://github.com/xswei/d3-shape/blob/master/README.md#cardinal_tension) - set the cardinal spline tension.
* [d3.curveCatmullRom](https://github.com/xswei/d3-shape/blob/master/README.md#curveCatmullRom) - a cubic Catmull–Rom spline, with one-sided difference at each end.
* [d3.curveCatmullRomClosed](https://github.com/xswei/d3-shape/blob/master/README.md#curveCatmullRomClosed) - a closed cubic Catmull–Rom spline.
* [d3.curveCatmullRomOpen](https://github.com/xswei/d3-shape/blob/master/README.md#curveCatmullRomOpen) - a cubic Catmull–Rom spline.
* [*catmullRom*.alpha](https://github.com/xswei/d3-shape/blob/master/README.md#catmullRom_alpha) - set the Catmull–Rom parameter *alpha*.
* [d3.curveLinear](https://github.com/xswei/d3-shape/blob/master/README.md#curveLinear) - a polyline.
* [d3.curveLinearClosed](https://github.com/xswei/d3-shape/blob/master/README.md#curveLinearClosed) - a closed polyline.
* [d3.curveMonotoneX](https://github.com/xswei/d3-shape/blob/master/README.md#curveMonotoneX) - a cubic spline that, given monotonicity in *x*, preserves it in *y*.
* [d3.curveMonotoneY](https://github.com/xswei/d3-shape/blob/master/README.md#curveMonotoneY) - a cubic spline that, given monotonicity in *y*, preserves it in *x*.
* [d3.curveNatural](https://github.com/xswei/d3-shape/blob/master/README.md#curveNatural) - a natural cubic spline.
* [d3.curveStep](https://github.com/xswei/d3-shape/blob/master/README.md#curveStep) - a piecewise constant function.
* [d3.curveStepAfter](https://github.com/xswei/d3-shape/blob/master/README.md#curveStepAfter) - a piecewise constant function.
* [d3.curveStepBefore](https://github.com/xswei/d3-shape/blob/master/README.md#curveStepBefore) - a piecewise constant function.
* [*curve*.areaStart](https://github.com/xswei/d3-shape/blob/master/README.md#curve_areaStart) - start a new area segment.
* [*curve*.areaEnd](https://github.com/xswei/d3-shape/blob/master/README.md#curve_areaEnd) - end the current area segment.
* [*curve*.lineStart](https://github.com/xswei/d3-shape/blob/master/README.md#curve_lineStart) - start a new line segment.
* [*curve*.lineEnd](https://github.com/xswei/d3-shape/blob/master/README.md#curve_lineEnd) - end the current line segment.
* [*curve*.point](https://github.com/xswei/d3-shape/blob/master/README.md#curve_point) - add a point to the current line segment.

### [Links](https://github.com/xswei/d3-shape/blob/master/README.md#links)

A smooth cubic Bézier curve from a source to a target.

* [d3.linkVertical](https://github.com/xswei/d3-shape/blob/master/README.md#linkVertical) - create a new vertical link generator.
* [d3.linkHorizontal](https://github.com/xswei/d3-shape/blob/master/README.md#linkHorizontal) - create a new horizontal link generator.
* [*link*](https://github.com/xswei/d3-shape/blob/master/README.md#_link) - generate a link.
* [*link*.source](https://github.com/xswei/d3-shape/blob/master/README.md#link_source) - set the source accessor.
* [*link*.target](https://github.com/xswei/d3-shape/blob/master/README.md#link_target) - set the target accessor.
* [*link*.x](https://github.com/xswei/d3-shape/blob/master/README.md#link_x) - set the point *x*-accessor.
* [*link*.y](https://github.com/xswei/d3-shape/blob/master/README.md#link_y) - set the point *y*-accessor.
* [d3.linkRadial](https://github.com/xswei/d3-shape/blob/master/README.md#linkRadial) - create a new radial link generator.
* [*radialLink*.angle](https://github.com/xswei/d3-shape/blob/master/README.md#radialLink_angle) - set the point *angle* accessor.
* [*radialLink*.radius](https://github.com/xswei/d3-shape/blob/master/README.md#radialLink_radius) - set the point *radius* accessor.

### [Symbols](https://github.com/xswei/d3-shape/blob/master/README.md#symbols)

A categorical shape encoding, as in a scatterplot.

* [d3.symbol](https://github.com/xswei/d3-shape/blob/master/README.md#symbol) - create a new symbol generator.
* [*symbol*](https://github.com/xswei/d3-shape/blob/master/README.md#_symbol) - generate a symbol for the given datum.
* [*symbol*.type](https://github.com/xswei/d3-shape/blob/master/README.md#symbol_type) - set the symbol type.
* [*symbol*.size](https://github.com/xswei/d3-shape/blob/master/README.md#symbol_size) - set the size of the symbol in square pixels.
* [*symbol*.context](https://github.com/xswei/d3-shape/blob/master/README.md#symbol_context) - set the rendering context.
* [d3.symbols](https://github.com/xswei/d3-shape/blob/master/README.md#symbols) - the array of built-in symbol types.
* [d3.symbolCircle](https://github.com/xswei/d3-shape/blob/master/README.md#symbolCircle) - a circle.
* [d3.symbolCross](https://github.com/xswei/d3-shape/blob/master/README.md#symbolCross) - a Greek cross with arms of equal length.
* [d3.symbolDiamond](https://github.com/xswei/d3-shape/blob/master/README.md#symbolDiamond) - a rhombus.
* [d3.symbolSquare](https://github.com/xswei/d3-shape/blob/master/README.md#symbolSquare) - a square.
* [d3.symbolStar](https://github.com/xswei/d3-shape/blob/master/README.md#symbolStar) - a pentagonal star (pentagram).
* [d3.symbolTriangle](https://github.com/xswei/d3-shape/blob/master/README.md#symbolTriangle) - an up-pointing triangle.
* [d3.symbolWye](https://github.com/xswei/d3-shape/blob/master/README.md#symbolWye) - a Y shape.
* [*symbolType*.draw](https://github.com/xswei/d3-shape/blob/master/README.md#symbolType_draw) - draw this symbol to the given context.

### [Stacks](https://github.com/xswei/d3-shape/blob/master/README.md#stacks)

Stack shapes, placing one adjacent to another, as in a stacked bar chart.

* [d3.stack](https://github.com/xswei/d3-shape/blob/master/README.md#stack) - create a new stack generator.
* [*stack*](https://github.com/xswei/d3-shape/blob/master/README.md#_stack) - generate a stack for the given dataset.
* [*stack*.keys](https://github.com/xswei/d3-shape/blob/master/README.md#stack_keys) - set the keys accessor.
* [*stack*.value](https://github.com/xswei/d3-shape/blob/master/README.md#stack_value) - set the value accessor.
* [*stack*.order](https://github.com/xswei/d3-shape/blob/master/README.md#stack_order) - set the order accessor.
* [*stack*.offset](https://github.com/xswei/d3-shape/blob/master/README.md#stack_offset) - set the offset accessor.
* [d3.stackOrderAscending](https://github.com/xswei/d3-shape/blob/master/README.md#stackOrderAscending) - put the smallest series on bottom.
* [d3.stackOrderDescending](https://github.com/xswei/d3-shape/blob/master/README.md#stackOrderDescending) - put the largest series on bottom.
* [d3.stackOrderInsideOut](https://github.com/xswei/d3-shape/blob/master/README.md#stackOrderInsideOut) - put larger series in the middle.
* [d3.stackOrderNone](https://github.com/xswei/d3-shape/blob/master/README.md#stackOrderNone) - use the given series order.
* [d3.stackOrderReverse](https://github.com/xswei/d3-shape/blob/master/README.md#stackOrderReverse) - use the reverse of the given series order.
* [d3.stackOffsetExpand](https://github.com/xswei/d3-shape/blob/master/README.md#stackOffsetExpand) - normalize the baseline to zero and topline to one.
* [d3.stackOffsetDiverging](https://github.com/xswei/d3-shape/blob/master/README.md#stackOffsetDiverging) - positive above zero; negative below zero.
* [d3.stackOffsetNone](https://github.com/xswei/d3-shape/blob/master/README.md#stackOffsetNone) - apply a zero baseline.
* [d3.stackOffsetSilhouette](https://github.com/xswei/d3-shape/blob/master/README.md#stackOffsetSilhouette) - center the streamgraph around zero.
* [d3.stackOffsetWiggle](https://github.com/xswei/d3-shape/blob/master/README.md#stackOffsetWiggle) - minimize streamgraph wiggling.

## [Time Formats (d3-time-format)](https://github.com/xswei/d3-time-format)

Parse and format times, inspired by strptime and strftime.

* [d3.timeFormat](https://github.com/xswei/d3-time-format/blob/master/README.md#timeFormat) - alias for *locale*.format on the default locale.
* [d3.timeParse](https://github.com/xswei/d3-time-format/blob/master/README.md#timeParse) - alias for *locale*.parse on the default locale.
* [d3.utcFormat](https://github.com/xswei/d3-time-format/blob/master/README.md#utcFormat) -  alias for *locale*.utcFormat on the default locale.
* [d3.utcParse](https://github.com/xswei/d3-time-format/blob/master/README.md#utcParse) -  alias for *locale*.utcParse on the default locale.
* [d3.isoFormat](https://github.com/xswei/d3-time-format/blob/master/README.md#isoFormat) - an ISO 8601 UTC formatter.
* [d3.isoParse](https://github.com/xswei/d3-time-format/blob/master/README.md#isoParse) - an ISO 8601 UTC parser.
* [d3.timeFormatLocale](https://github.com/xswei/d3-time-format/blob/master/README.md#timeFormatLocale) - define a custom locale.
* [d3.timeFormatDefaultLocale](https://github.com/xswei/d3-time-format/blob/master/README.md#timeFormatDefaultLocale) - define the default locale.
* [*locale*.format](https://github.com/xswei/d3-time-format/blob/master/README.md#locale_format) - create a time formatter.
* [*locale*.parse](https://github.com/xswei/d3-time-format/blob/master/README.md#locale_parse) - create a time parser.
* [*locale*.utcFormat](https://github.com/xswei/d3-time-format/blob/master/README.md#locale_utcFormat) - create a UTC formatter.
* [*locale*.utcParse](https://github.com/xswei/d3-time-format/blob/master/README.md#locale_utcParse) - create a UTC parser.

## [Time Intervals (d3-time)](https://github.com/xswei/d3-time)

A calculator for humanity’s peculiar conventions of time.

* [d3.timeInterval](https://github.com/xswei/d3-time/blob/master/README.md#timeInterval) - implement a new custom time interval.
* [*interval*](https://github.com/xswei/d3-time/blob/master/README.md#_interval) - alias for *interval*.floor.
* [*interval*.floor](https://github.com/xswei/d3-time/blob/master/README.md#interval_floor) - round down to the nearest boundary.
* [*interval*.round](https://github.com/xswei/d3-time/blob/master/README.md#interval_round) - round to the nearest boundary.
* [*interval*.ceil](https://github.com/xswei/d3-time/blob/master/README.md#interval_ceil) - round up to the nearest boundary.
* [*interval*.offset](https://github.com/xswei/d3-time/blob/master/README.md#interval_offset) - offset a date by some number of intervals.
* [*interval*.range](https://github.com/xswei/d3-time/blob/master/README.md#interval_range) - generate a range of dates at interval boundaries.
* [*interval*.filter](https://github.com/xswei/d3-time/blob/master/README.md#interval_filter) - create a filtered subset of this interval.
* [*interval*.every](https://github.com/xswei/d3-time/blob/master/README.md#interval_every) - create a filtered subset of this interval.
* [*interval*.count](https://github.com/xswei/d3-time/blob/master/README.md#interval_count) - count interval boundaries between two dates.
* [d3.timeMillisecond](https://github.com/xswei/d3-time/blob/master/README.md#timeMillisecond), [d3.utcMillisecond](https://github.com/xswei/d3-time/blob/master/README.md#timeMillisecond) - the millisecond interval.
* [d3.timeMilliseconds](https://github.com/xswei/d3-time/blob/master/README.md#timeMillisecond), [d3.utcMilliseconds](https://github.com/xswei/d3-time/blob/master/README.md#timeMillisecond) - aliases for millisecond.range.
* [d3.timeSecond](https://github.com/xswei/d3-time/blob/master/README.md#timeSecond), [d3.utcSecond](https://github.com/xswei/d3-time/blob/master/README.md#timeSecond) - the second interval.
* [d3.timeSeconds](https://github.com/xswei/d3-time/blob/master/README.md#timeSecond), [d3.utcSeconds](https://github.com/xswei/d3-time/blob/master/README.md#timeSecond) - aliases for second.range.
* [d3.timeMinute](https://github.com/xswei/d3-time/blob/master/README.md#timeMinute), [d3.utcMinute](https://github.com/xswei/d3-time/blob/master/README.md#timeMinute) - the minute interval.
* [d3.timeMinutes](https://github.com/xswei/d3-time/blob/master/README.md#timeMinute), [d3.utcMinutes](https://github.com/xswei/d3-time/blob/master/README.md#timeMinute) - aliases for minute.range.
* [d3.timeHour](https://github.com/xswei/d3-time/blob/master/README.md#timeHour), [d3.utcHour](https://github.com/xswei/d3-time/blob/master/README.md#timeHour) - the hour interval.
* [d3.timeHours](https://github.com/xswei/d3-time/blob/master/README.md#timeHour), [d3.utcHours](https://github.com/xswei/d3-time/blob/master/README.md#timeHour) - aliases for hour.range.
* [d3.timeDay](https://github.com/xswei/d3-time/blob/master/README.md#timeDay), [d3.utcDay](https://github.com/xswei/d3-time/blob/master/README.md#timeDay) - the day interval.
* [d3.timeDays](https://github.com/xswei/d3-time/blob/master/README.md#timeDay), [d3.utcDays](https://github.com/xswei/d3-time/blob/master/README.md#timeDay) - aliases for day.range.
* [d3.timeWeek](https://github.com/xswei/d3-time/blob/master/README.md#timeWeek), [d3.utcWeek](https://github.com/xswei/d3-time/blob/master/README.md#timeWeek) - aliases for sunday.
* [d3.timeWeeks](https://github.com/xswei/d3-time/blob/master/README.md#timeWeek), [d3.utcWeeks](https://github.com/xswei/d3-time/blob/master/README.md#timeWeek) - aliases for week.range.
* [d3.timeSunday](https://github.com/xswei/d3-time/blob/master/README.md#timeSunday), [d3.utcSunday](https://github.com/xswei/d3-time/blob/master/README.md#timeSunday) - the week interval, starting on Sunday.
* [d3.timeSundays](https://github.com/xswei/d3-time/blob/master/README.md#timeSunday), [d3.utcSundays](https://github.com/xswei/d3-time/blob/master/README.md#timeSunday) - aliases for sunday.range.
* [d3.timeMonday](https://github.com/xswei/d3-time/blob/master/README.md#timeMonday), [d3.utcMonday](https://github.com/xswei/d3-time/blob/master/README.md#timeMonday) - the week interval, starting on Monday.
* [d3.timeMondays](https://github.com/xswei/d3-time/blob/master/README.md#timeMonday), [d3.utcMondays](https://github.com/xswei/d3-time/blob/master/README.md#timeMonday) - aliases for monday.range.
* [d3.timeTuesday](https://github.com/xswei/d3-time/blob/master/README.md#timeTuesday), [d3.utcTuesday](https://github.com/xswei/d3-time/blob/master/README.md#timeTuesday) - the week interval, starting on Tuesday.
* [d3.timeTuesdays](https://github.com/xswei/d3-time/blob/master/README.md#timeTuesday), [d3.utcTuesdays](https://github.com/xswei/d3-time/blob/master/README.md#timeTuesday) - aliases for tuesday.range.
* [d3.timeWednesday](https://github.com/xswei/d3-time/blob/master/README.md#timeWednesday), [d3.utcWednesday](https://github.com/xswei/d3-time/blob/master/README.md#timeWednesday) - the week interval, starting on Wednesday.
* [d3.timeWednesdays](https://github.com/xswei/d3-time/blob/master/README.md#timeWednesday), [d3.utcWednesdays](https://github.com/xswei/d3-time/blob/master/README.md#timeWednesday) - aliases for wednesday.range.
* [d3.timeThursday](https://github.com/xswei/d3-time/blob/master/README.md#timeThursday), [d3.utcThursday](https://github.com/xswei/d3-time/blob/master/README.md#timeThursday) - the week interval, starting on Thursday.
* [d3.timeThursdays](https://github.com/xswei/d3-time/blob/master/README.md#timeThursday), [d3.utcThursdays](https://github.com/xswei/d3-time/blob/master/README.md#timeThursday) - aliases for thursday.range.
* [d3.timeFriday](https://github.com/xswei/d3-time/blob/master/README.md#timeFriday), [d3.utcFriday](https://github.com/xswei/d3-time/blob/master/README.md#timeFriday) - the week interval, starting on Friday.
* [d3.timeFridays](https://github.com/xswei/d3-time/blob/master/README.md#timeFriday), [d3.utcFridays](https://github.com/xswei/d3-time/blob/master/README.md#timeFriday) - aliases for friday.range.
* [d3.timeSaturday](https://github.com/xswei/d3-time/blob/master/README.md#timeSaturday), [d3.utcSaturday](https://github.com/xswei/d3-time/blob/master/README.md#timeSaturday) - the week interval, starting on Saturday.
* [d3.timeSaturdays](https://github.com/xswei/d3-time/blob/master/README.md#timeSaturday), [d3.utcSaturdays](https://github.com/xswei/d3-time/blob/master/README.md#timeSaturday) - aliases for saturday.range.
* [d3.timeMonth](https://github.com/xswei/d3-time/blob/master/README.md#timeMonth), [d3.utcMonth](https://github.com/xswei/d3-time/blob/master/README.md#timeMonth) - the month interval.
* [d3.timeMonths](https://github.com/xswei/d3-time/blob/master/README.md#timeMonth), [d3.utcMonths](https://github.com/xswei/d3-time/blob/master/README.md#timeMonth) - aliases for month.range.
* [d3.timeYear](https://github.com/xswei/d3-time/blob/master/README.md#timeYear), [d3.utcYear](https://github.com/xswei/d3-time/blob/master/README.md#timeYear) - the year interval.
* [d3.timeYears](https://github.com/xswei/d3-time/blob/master/README.md#timeYear), [d3.utcYears](https://github.com/xswei/d3-time/blob/master/README.md#timeYear) - aliases for year.range.

## [Timers (d3-timer)](https://github.com/xswei/d3-timer)

一个高效的可以用来管理上千并发动画的队列

* [d3.now](https://github.com/xswei/d3-timer/blob/master/README.md#now) - 获取当前高精度时间戳(参考[DOMHighResTimeStamp](https://developer.mozilla.org/en-US/docs/Web/API/DOMHighResTimeStamp)).
* [d3.timer](https://github.com/xswei/d3-timer/blob/master/README.md#timer) - 定义一个定时器.
* [*timer*.restart](https://github.com/xswei/d3-timer/blob/master/README.md#timer_restart) - 重新设置定时器的开始时间和回调.
* [*timer*.stop](https://github.com/xswei/d3-timer/blob/master/README.md#timer_stop) - 停止定时器.
* [d3.timerFlush](https://github.com/xswei/d3-timer/blob/master/README.md#timerFlush) - 立即执行合法的定时器.
* [d3.timeout](https://github.com/xswei/d3-timer/blob/master/README.md#timeout) - 定义一个只执行一次回调的定时器.
* [d3.interval](https://github.com/xswei/d3-timer/blob/master/README.md#interval) - 定义一个可以按照指定间隔执行回调的定时器.

## [Transitions (d3-transition)](https://github.com/xswei/d3-transition)

对 [selections](#selections) 进行动画过渡.

* [*selection*.transition](https://github.com/xswei/d3-transition/blob/master/README.md#selection_transition) - 为指定的选择集指定一个过渡.
* [*selection*.interrupt](https://github.com/xswei/d3-transition/blob/master/README.md#selection_interrupt) - 中断并且取消选中元素的过渡.
* [d3.transition](https://github.com/xswei/d3-transition/blob/master/README.md#transition) - 为文档根元素指定一个过渡.
* [*transition*.select](https://github.com/xswei/d3-transition/blob/master/README.md#transition_select) - 在选中的元素上指定一个过渡.
* [*transition*.selectAll](https://github.com/xswei/d3-transition/blob/master/README.md#transition_selectAll) - 在指定的元素上指定一个过渡.
* [*transition*.filter](https://github.com/xswei/d3-transition/blob/master/README.md#transition_filter) - 基于数据对元素进行过滤.
* [*transition*.merge](https://github.com/xswei/d3-transition/blob/master/README.md#transition_merge) - 将当前过渡与其他的过渡进行合并.
* [*transition*.selection](https://github.com/xswei/d3-transition/blob/master/README.md#transition_selection) - 返回过渡所应用的选择集.
* [*transition*.transition](https://github.com/xswei/d3-transition/blob/master/README.md#transition_transition) - 基于当前过渡继续指定一个新的过渡.
* [*transition*.call](https://github.com/xswei/d3-transition/blob/master/README.md#transition_call) - 为当前过渡指定一次指定的函数.
* [*transition*.nodes](https://github.com/xswei/d3-transition/blob/master/README.md#transition_nodes) - 返回当前过渡元素的数组.
* [*transition*.node](https://github.com/xswei/d3-transition/blob/master/README.md#transition_node) - 返回第一个非空元素.
* [*transition*.size](https://github.com/xswei/d3-transition/blob/master/README.md#transition_size) - 返回元素的数量.
* [*transition*.empty](https://github.com/xswei/d3-transition/blob/master/README.md#transition_empty) - 如果过渡为空则返回 `true`.
* [*transition*.each](https://github.com/xswei/d3-transition/blob/master/README.md#transition_each) - 为每个元素调用指定的方法.
* [*transition*.on](https://github.com/xswei/d3-transition/blob/master/README.md#transition_on) - 添加或移除过渡事件句柄.
* [*transition*.attr](https://github.com/xswei/d3-transition/blob/master/README.md#transition_attr) - 使用默认的插值器在两个给定的属性之间进行过渡.
* [*transition*.attrTween](https://github.com/xswei/d3-transition/blob/master/README.md#transition_attrTween) - 使用自定义插值器在给定的属性之间进行过渡.
* [*transition*.style](https://github.com/xswei/d3-transition/blob/master/README.md#transition_style) - 使用默认的插值器在两个给定的样式之间进行过渡.
* [*transition*.styleTween](https://github.com/xswei/d3-transition/blob/master/README.md#transition_styleTween) -  使用自定义插值器在给定的样式之间进行过渡.
* [*transition*.text](https://github.com/xswei/d3-transition/blob/master/README.md#transition_text) - 在过渡开始时设置文本内容.
* [*transition*.remove](https://github.com/xswei/d3-transition/blob/master/README.md#transition_remove) - 在过渡结束后移除选中的元素.
* [*transition*.tween](https://github.com/xswei/d3-transition/blob/master/README.md#transition_tween) - 对于每个选定的元素，在过渡过程中执行指定的函数.
* [*transition*.delay](https://github.com/xswei/d3-transition/blob/master/README.md#transition_delay) - 指定每个元素的过渡延时时间(毫秒).
* [*transition*.duration](https://github.com/xswei/d3-transition/blob/master/README.md#transition_duration) - 指定每个过渡元素的过渡时间(毫秒).
* [*transition*.ease](https://github.com/xswei/d3-transition/blob/master/README.md#transition_ease) - 指定过渡函数(过渡动画类型).
* [d3.active](https://github.com/xswei/d3-transition/blob/master/README.md#active) - 返回指定节点上活动的过渡，可用来创建重复动画.
* [d3.interrupt](https://github.com/xswei/d3-transition/blob/master/README.md#interrupt) - 中断指定节点上的过渡并取消符合条件的未执行的过渡.

## [Voronoi Diagrams (d3-voronoi)](https://github.com/xswei/d3-voronoi)

根据指定的一组点集计算其泰森多边形.

* [d3.voronoi](https://github.com/xswei/d3-voronoi/blob/master/README.md#voronoi) - 创建一个新的泰森多边形生成器.
* [*voronoi*](https://github.com/xswei/d3-voronoi/blob/master/README.md#_voronoi) - 根据指定的一组点生成新的泰森多边形计算结果.
* [*voronoi*.polygons](https://github.com/xswei/d3-voronoi/blob/master/README.md#voronoi_polygons) - 根据指定的一组点生成泰森多边形中多边形集合.
* [*voronoi*.triangles](https://github.com/xswei/d3-voronoi/blob/master/README.md#voronoi_triangles) - 根据指定的一组点计算其德劳内三角剖分结果集合.
* [*voronoi*.links](https://github.com/xswei/d3-voronoi/blob/master/README.md#voronoi_links) - 计算指定一组点集的三角剖分结果以边的形式返回.
* [*voronoi*.x](https://github.com/xswei/d3-voronoi/blob/master/README.md#voronoi_x) - 设置 *x* 访问器.
* [*voronoi*.y](https://github.com/xswei/d3-voronoi/blob/master/README.md#voronoi_y) - 设置 *y* 访问器.
* [*voronoi*.extent](https://github.com/xswei/d3-voronoi/blob/master/README.md#voronoi_extent) - 设置点集合的可观测边界.
* [*voronoi*.size](https://github.com/xswei/d3-voronoi/blob/master/README.md#voronoi_size) - 设置点集合的可观测边界.
* [*diagram*.polygons](https://github.com/xswei/d3-voronoi/blob/master/README.md#diagram_polygons) - 返回指定泰森多边形的多边形数组.
* [*diagram*.triangles](https://github.com/xswei/d3-voronoi/blob/master/README.md#diagram_triangles) - 返回指定泰森多边形的三角形数组.
* [*diagram*.links](https://github.com/xswei/d3-voronoi/blob/master/README.md#diagram_links) - 返回指定泰森多边形的边数组.
* [*diagram*.find](https://github.com/xswei/d3-voronoi/blob/master/README.md#diagram_find) - 找到当前泰森多边形划分中距离目标点指定半径范围内最近的点.

## [Zooming (d3-zoom)](https://github.com/xswei/d3-zoom)

使用触摸鼠标或者触摸面板缩放 SVG, HTML 或者 Canvas.

* [d3.zoom](https://github.com/xswei/d3-zoom/blob/master/README.md#zoom) - 创建一个缩放交互.
* [*zoom*](https://github.com/xswei/d3-zoom/blob/master/README.md#_zoom) - 将缩放交互应用到指定的被选中的元素上.
* [*zoom*.transform](https://github.com/xswei/d3-zoom/blob/master/README.md#zoom_transform) - 修改指定的选中的元素的变换.
* [*zoom*.translateTo](https://github.com/xswei/d3-zoom/blob/master/README.md#zoom_translateTo) - 对指定的选中元素进行平移变换.
* [*zoom*.translateBy](https://github.com/xswei/d3-zoom/blob/master/README.md#zoom_translateBy) - 对指定的选中元素进行平移变换.
* [*zoom*.scaleBy](https://github.com/xswei/d3-zoom/blob/master/README.md#zoom_scaleBy) - 对指定的选中元素进行苏佛昂变换.
* [*zoom*.scaleTo](https://github.com/xswei/d3-zoom/blob/master/README.md#zoom_scaleTo) - 对指定的选中元素进行平移变换.
* [*zoom*.filter](https://github.com/xswei/d3-zoom/blob/master/README.md#zoom_filter) - 控制哪些输入事件可以触发缩放操作.
* [*zoom*.touchable](https://github.com/xswei/d3-zoom/blob/master/README.md#zoom_touchable) - 设置触摸支持检测其器.
* [*zoom*.wheelDelta](https://github.com/xswei/d3-zoom/blob/master/README.md#zoom_wheelDelta) - 重置滚轮事件与缩放之间对应的倍数.
* [*zoom*.clickDistance](https://github.com/xswei/d3-zoom/blob/master/README.md#zoom_clickDistance) - 设置点击距离阈值.
* [*zoom*.extent](https://github.com/xswei/d3-zoom/blob/master/README.md#zoom_extent) - 设置视口的范围.
* [*zoom*.scaleExtent](https://github.com/xswei/d3-zoom/blob/master/README.md#zoom_scaleExtent) - 设置可缩放系数大小.
* [*zoom*.translateExtent](https://github.com/xswei/d3-zoom/blob/master/README.md#zoom_translateExtent) - 设置可缩放世界大小.
* [*zoom*.constrain](https://github.com/xswei/d3-zoom/blob/master/README.md#zoom_constrain) - 重置缩放约束逻辑.
* [*zoom*.duration](https://github.com/xswei/d3-zoom/blob/master/README.md#zoom_duration) - 设置缩放变换的过渡时间.
* [*zoom*.interpolate](https://github.com/xswei/d3-zoom/blob/master/README.md#zoom_interpolate) - 控制缩放变换的插值方式.
* [*zoom*.on](https://github.com/xswei/d3-zoom/blob/master/README.md#zoom_on) - 监听缩放事件.
* [d3.zoomTransform](https://github.com/xswei/d3-zoom/blob/master/README.md#zoomTransform) - 获取指定元素的缩放变换.
* [*transform*.scale](https://github.com/xswei/d3-zoom/blob/master/README.md#transform_scale) - 根据指定的数值缩放当前坐标变换.
* [*transform*.translate](https://github.com/xswei/d3-zoom/blob/master/README.md#transform_translate) - 根据指定的值平移当前坐标变换.
* [*transform*.apply](https://github.com/xswei/d3-zoom/blob/master/README.md#transform_apply) - 返回指定的点经过坐标转换后的新坐标.
* [*transform*.applyX](https://github.com/xswei/d3-zoom/blob/master/README.md#transform_applyX) - 返回指定的 *x*-坐标经过坐标转换后的新坐标.
* [*transform*.applyY](https://github.com/xswei/d3-zoom/blob/master/README.md#transform_applyY) - 返回指定的 *y*-坐标经过坐标转换后的新坐标.
* [*transform*.invert](https://github.com/xswei/d3-zoom/blob/master/README.md#transform_invert) - 返回指定的点经过坐标转换之前的坐标.
* [*transform*.invertX](https://github.com/xswei/d3-zoom/blob/master/README.md#transform_invertX) - 返回指定的点经过坐标转换之前的 *x*-坐标.
* [*transform*.invertY](https://github.com/xswei/d3-zoom/blob/master/README.md#transform_invertY) - 返回指定的点经过坐标转换之前的 *y*-坐标.
* [*transform*.rescaleX](https://github.com/xswei/d3-zoom/blob/master/README.md#transform_rescaleX) - 将当前坐标变换应用到指定的 *x*- 比例尺的 `domain`.
* [*transform*.rescaleY](https://github.com/xswei/d3-zoom/blob/master/README.md#transform_rescaleY) - 将当前坐标变换应用到指定的 *y*- 比例尺的 `domain`.
* [*transform*.toString](https://github.com/xswei/d3-zoom/blob/master/README.md#transform_toString) - 将坐标转换格式化为 `SVG` 可直接用的字符串.
* [d3.zoomIdentity](https://github.com/xswei/d3-zoom/blob/master/README.md#zoomIdentity) - 当前坐标变换标识.
