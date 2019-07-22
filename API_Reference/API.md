# D3 API Reference

`D3` 是一个相互协同工作的 [模块集合](https://github.com/d3); 你可以单独使用其中某些模块也可以使用默认构建的全部功能。每个模块的源码和文档都在对应的仓库中获取到。可以通过下面的链接获取更多信息。`d3` v3.x 和 4.x 之间的差异可以参考 [CHANGES](https://github.com/xswei/d3js_doc/tree/master/Release_Notes/CHANGES.MD); 3.x 的文档可以参考 [这里](https://github.com/d3/d3-3.x-api-reference/blob/master/API-Reference.md)

* [Arrays](#arrays-d3-array) ([Statistics](#statistics), [Search](#search), [Transformations](#transformations), [Histograms](#histograms))
* [Axes](#axes-d3-axis)
* [Brushes](#brushes-d3-brush)
* [Chords](#chords-d3-chord)
* [Collections](#collections-d3-collection) ([Objects](#objects), [Maps](#maps), [Sets](#sets), [Nests](#nests))
* [Colors](#colors-d3-color)
* [Color Schemes](#color-schemes-d3-scale-chromatic)
* [Contours](#contours-d3-contour)
* [Dispatches](#dispatches-d3-dispatch)
* [Dragging](#dragging-d3-drag)
* [Delimiter-Separated Values](#delimiter-separated-values-d3-dsv)
* [Easings](#easings-d3-ease)
* [Fetches](#fetches-d3-fetch)
* [Forces](#forces-d3-force)
* [Number Formats](#number-formats-d3-format)
* [Geographies](#geographies-d3-geo) ([Paths](#paths), [Projections](#projections), [Spherical Math](#spherical-math), [Spherical Shapes](#spherical-shapes), [Streams](#streams), [Transforms](#transforms))
* [Hierarchies](#hierarchies-d3-hierarchy)
* [Interpolators](#interpolators-d3-interpolate)
* [Paths](#paths-d3-path)
* [Polygons](#polygons-d3-polygon)
* [Quadtrees](#quadtrees-d3-quadtree)
* [Random Numbers](#random-numbers-d3-random)
* [Scales](#scales-d3-scale) ([Continuous](#continuous-scales), [Sequential](#sequential-scales), [Quantize](#quantize-scales), [Ordinal](#ordinal-scales))
* [Selections](#selections-d3-selection) ([Selecting](#selecting-elements), [Modifying](#modifying-elements), [Data](#joining-data), [Events](#handling-events), [Control](#control-flow), [Local Variables](#local-variables), [Namespaces](#namespaces))
* [Shapes](#shapes-d3-shape) ([Arcs](#arcs), [Pies](#pies), [Lines](#lines), [Areas](#areas), [Curves](#curves), [Links](#links), [Symbols](#symbols), [Stacks](#stacks))
* [Time Formats](#time-formats-d3-time-format)
* [Time Intervals](#time-intervals-d3-time)
* [Timers](#timers-d3-timer)
* [Transitions](#transitions-d3-transition)
* [Voronoi Diagrams](#voronoi-diagrams-d3-voronoi)
* [Zooming](#zooming-d3-zoom)

`D3` 使用 [语义化版本](https://semver.org/lang/zh-CN/). 当前的版本号通过 `d3.version` 暴露.

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
* [*bisector*.left](https://github.com/xswei/d3-array/blob/master/README.md#bisector_left) - 与 `bisectLeft` 类似, 可以指定比较器.
* [*bisector*.right](https://github.com/xswei/d3-array/blob/master/README.md#bisector_right) - 与 `bisectRight` 类似, 可以指定比较器.
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
* [d3.thresholdFreedmanDiaconis](https://github.com/xswei/d3-array/blob/master/README.md#thresholdFreedmanDiaconis) - *Freedman–Diaconis* 阈值生成规则.
* [d3.thresholdScott](https://github.com/xswei/d3-array/blob/master/README.md#thresholdScott) - *Scott’s normal reference* 阈值生成规则.
* [d3.thresholdSturges](https://github.com/xswei/d3-array/blob/master/README.md#thresholdSturges) - *Sturges* 阈值生成规则.

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
* [d3.brushX](https://github.com/xswei/d3-brush/blob/master/README.md#brushX) - 创建一个新的 *x*- 维度的刷取交互
* [d3.brushY](https://github.com/xswei/d3-brush/blob/master/README.md#brushY) - 创建一个新的 *y*- 维度的刷取交互
* [*brush*](https://github.com/xswei/d3-brush/blob/master/README.md#_brush) - 将刷取操作应用到一个 `selection` 上
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
* [d3.ribbon](https://github.com/xswei/d3-chord/blob/master/README.md#ribbon) - 创建一个 `ribbon`(弦)生成器
* [*ribbon*](https://github.com/xswei/d3-chord/blob/master/README.md#_ribbon) - 根据指定的数据返回一个 `path` 路径以表示弦.
* [*ribbon*.source](https://github.com/xswei/d3-chord/blob/master/README.md#ribbon_source) - 设置 `ribbon` 的源访问器.
* [*ribbon*.target](https://github.com/xswei/d3-chord/blob/master/README.md#ribbon_target) - 设置 `ribbon` 的目标访问器.
* [*ribbon*.radius](https://github.com/xswei/d3-chord/blob/master/README.md#ribbon_radius) - 设置 `ribbon` 的半径.
* [*ribbon*.startAngle](https://github.com/xswei/d3-chord/blob/master/README.md#ribbon_startAngle) - 设置 `ribbon` 的起始角度访问器.
* [*ribbon*.endAngle](https://github.com/xswei/d3-chord/blob/master/README.md#ribbon_endAngle) - 设置 `ribbon` 的终止角度访问器.
* [*ribbon*.context](https://github.com/xswei/d3-chord/blob/master/README.md#ribbon_context) - 设置渲染上下文(`canvas`).

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
* [*map*.has](https://github.com/xswei/d3-collection/blob/master/README.md#map_has) - 当 `map` 映射中有给定的 `key` 时返回 `true`
* [*map*.get](https://github.com/xswei/d3-collection/blob/master/README.md#map_get) - 根据指定的 `key` 返回对应的值
* [*map*.set](https://github.com/xswei/d3-collection/blob/master/README.md#map_set) - 设置指定的 `key` 对应的值为指定的值
* [*map*.remove](https://github.com/xswei/d3-collection/blob/master/README.md#map_remove) - 移除指定的 `key` 以及值
* [*map*.clear](https://github.com/xswei/d3-collection/blob/master/README.md#map_clear) - 清空 `map` 映射中所有的项
* [*map*.keys](https://github.com/xswei/d3-collection/blob/master/README.md#map_keys) - 以数组的形式获取 `map` 映射中的 `key`
* [*map*.values](https://github.com/xswei/d3-collection/blob/master/README.md#map_values) - 以数组的形式获取 `map` 映射中的 `value`
* [*map*.entries](https://github.com/xswei/d3-collection/blob/master/README.md#map_entries) - 以数组的形式获取 `map` 映射中的 `key-values` 对象
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

* [d3.color](https://github.com/xswei/d3-color/blob/master/README.md#color) - 转换指定的 `CSS` 颜色字符串.
* [*color*.rgb](https://github.com/xswei/d3-color/blob/master/README.md#color_rgb) - 计算当前颜色值的 `RGB` 表示.
* [*color*.brighter](https://github.com/xswei/d3-color/blob/master/README.md#color_brighter) - 创建一个更亮的颜色副本.
* [*color*.darker](https://github.com/xswei/d3-color/blob/master/README.md#color_darker) - 创建一个更暗的颜色副本
* [*color*.displayable](https://github.com/xswei/d3-color/blob/master/README.md#color_displayable) - 判断当前设备是否支持当前颜色
* [*color*.hex](https://github.com/xswei/d3-color/blob/master/README.md#color_hex) - 返回十六进制的 `RGB` 字符串标识当前的颜色.
* [*color*.toString](https://github.com/xswei/d3-color/blob/master/README.md#color_toString) - 将当前颜色转为 `RGB` 颜色的十六进制表示
* [d3.rgb](https://github.com/xswei/d3-color/blob/master/README.md#rgb) - 创建一个新的 `RGB` 颜色.
* [d3.hsl](https://github.com/xswei/d3-color/blob/master/README.md#hsl) - 创建一个新的 `HSL` 颜色.
* [d3.lab](https://github.com/xswei/d3-color/blob/master/README.md#lab) - 创建一个新的 `Lab` 颜色.
* [d3.hcl](https://github.com/xswei/d3-color/blob/master/README.md#hcl) - 创建一个新的 `HCL` 颜色.
* [d3.lch](https://github.com/xswei/d3-color/blob/master/README.md#lch) - 创建一个新的 `HCL` 颜色.
* [d3.gray](https://github.com/xswei/d3-color/blob/master/README.md#gray) - 创建一个新的 `Lab` 灰色( `a` = `b` = 0).
* [d3.cubehelix](https://github.com/xswei/d3-color/blob/master/README.md#cubehelix) - 创建一个新的 `Cubehelix` 颜色.

## [Color Schemes (d3-scale-chromatic)](https://github.com/xswei/d3-scale-chromatic)

用于定量，序数和分类比例尺的颜色渐变和调色板。

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

* [d3.interpolateRainbow](https://github.com/d3/d3-scale-chromatic/blob/master/README.md#interpolateRainbow) - the “less-angry” rainbow
* [d3.interpolateSinebow](https://github.com/d3/d3-scale-chromatic/blob/master/README.md#interpolateSinebow) - 正弦顺滑的彩虹

## [Contours (d3-contour)](https://github.com/xswei/d3-contour)

Compute contour polygons using marching squares.

* [d3.contours](https://github.com/d3/d3-contour/blob/master/README.md#contours) - create a new contour generator.
* [contours](https://github.com/d3/d3-contour/blob/master/README.md#_contours) - compute the contours for a given grid of values.
* [contours.contour](https://github.com/d3/d3-contour/blob/master/README.md#contours_contour) -
* [contours.size](https://github.com/d3/d3-contour/blob/master/README.md#contours_size) -
* [contours.smooth](https://github.com/d3/d3-contour/blob/master/README.md#contours_smooth) -
* [contours.thresholds](https://github.com/d3/d3-contour/blob/master/README.md#contours_thresholds) -
* [d3.contourDensity](https://github.com/d3/d3-contour/blob/master/README.md#contourDensity) - create a new density estimator.
* [density](https://github.com/d3/d3-contour/blob/master/README.md#_density) - estimate the density of a given array of samples.
* [density.x](https://github.com/d3/d3-contour/blob/master/README.md#density_x) -
* [density.y](https://github.com/d3/d3-contour/blob/master/README.md#density_y) -
* [density.cellSize](https://github.com/d3/d3-contour/blob/master/README.md#density_cellSize) -
* [density.thresholds](https://github.com/d3/d3-contour/blob/master/README.md#density_thresholds) -
* [density.bandwidth](https://github.com/d3/d3-contour/blob/master/README.md#density_bandwidth) -

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
* [*drag*.clickDistance](https://github.com/xswei/d3-drag/blob/master/README.md#drag_clickDistance) - 设置可触发 `click` 事件的阈值距离
* [*drag*.on](https://github.com/xswei/d3-drag/blob/master/README.md#drag_on) - 监听拖拽事件.
* [*event*.on](https://github.com/xswei/d3-drag/blob/master/README.md#event_on) - 在当前拖拽手势中监听拖拽事件.
* [d3.dragDisable](https://github.com/xswei/d3-drag/blob/master/README.md#dragDisable) - 阻止原生拖拽以及文本选择.
* [d3.dragEnable](https://github.com/xswei/d3-drag/blob/master/README.md#dragEnable) - 启用原生拖拽以及文本选择.

## [Delimiter-Separated Values (d3-dsv)](https://github.com/xswei/d3-dsv)

解析和格式化以分隔符隔开的特定格式文件或字符串，大多数情况下指 `CSV` 和 `TSV`.

* [d3.dsvFormat](https://github.com/xswei/d3-dsv/blob/master/README.md#dsvFormat) - 根据指定的分隔符创建一个新的解析器和格式化器.
* [*dsv*.parse](https://github.com/xswei/d3-dsv/blob/master/README.md#dsv_parse) - 解析指定的字符串并返回对象数组.
* [*dsv*.parseRows](https://github.com/xswei/d3-dsv/blob/master/README.md#dsv_parseRows) - 解析指定的字符串并返回行数组.
* [*dsv*.format](https://github.com/xswei/d3-dsv/blob/master/README.md#dsv_format) - 格式化指定的对象数组为字符串.
* [*dsv*.formatRows](https://github.com/xswei/d3-dsv/blob/master/README.md#dsv_formatRows) - 格式化指定的行数组为字符串.
* [d3.csvParse](https://github.com/xswei/d3-dsv/blob/master/README.md#csvParse) - 解析指定的 `CSV` 字符串并返回对象数组.
* [d3.csvParseRows](https://github.com/xswei/d3-dsv/blob/master/README.md#csvParseRows) - 解析指定的 `CSV` 字符串并返回行数组.
* [d3.csvFormat](https://github.com/xswei/d3-dsv/blob/master/README.md#csvFormat) - 格式化指定的对象数组为 `CSV`.
* [d3.csvFormatRows](https://github.com/xswei/d3-dsv/blob/master/README.md#csvFormatRows) - 格式化指定的行数组为 `CSV`.
* [d3.tsvParse](https://github.com/xswei/d3-dsv/blob/master/README.md#tsvParse) - 解析指定的 `TSV` 字符串并返回对象数组.
* [d3.tsvParseRows](https://github.com/xswei/d3-dsv/blob/master/README.md#tsvParseRows) - 解析指定的 `TSV` 字符串并返回行数组.
* [d3.tsvFormat](https://github.com/xswei/d3-dsv/blob/master/README.md#tsvFormat) - 格式化指定的对象数组为 `TSV`.
* [d3.tsvFormatRows](https://github.com/xswei/d3-dsv/blob/master/README.md#tsvFormatRows) - 格式化指定的行数组为 `TSV`.

## [Easings (d3-ease)](https://github.com/xswei/d3-ease)

平滑过渡的过渡函数.

* [*ease*](https://github.com/xswei/d3-ease/blob/master/README.md#_ease) - 计算标准时间经过缓动方法计算后的时间.
* [d3.easeLinear](https://github.com/xswei/d3-ease/blob/master/README.md#easeLinear) - `linear` 缓动; 恒等函数.
* [d3.easePolyIn](https://github.com/xswei/d3-ease/blob/master/README.md#easePolyIn) - `polynomial` 缓动.
* [d3.easePolyOut](https://github.com/xswei/d3-ease/blob/master/README.md#easePolyOut) - 反转 `polynomial` 缓动.
* [d3.easePolyInOut](https://github.com/xswei/d3-ease/blob/master/README.md#easePolyInOut) - 对称 `polynomial` 缓动.
* [*poly*.exponent](https://github.com/xswei/d3-ease/blob/master/README.md#poly_exponent) - 指定 `polynomial` 的指数.
* [d3.easeQuad](https://github.com/xswei/d3-ease/blob/master/README.md#easeQuad) - `easeQuadInOut` 的别名.
* [d3.easeQuadIn](https://github.com/xswei/d3-ease/blob/master/README.md#easeQuadIn) - `quadratic` 缓动.
* [d3.easeQuadOut](https://github.com/xswei/d3-ease/blob/master/README.md#easeQuadOut) - 反转 `quadratic` 缓动.
* [d3.easeQuadInOut](https://github.com/xswei/d3-ease/blob/master/README.md#easeQuadInOut) - 对称 `quadratic` 缓动.
* [d3.easeCubic](https://github.com/xswei/d3-ease/blob/master/README.md#easeCubic) - `easeCubicInOut` 的别名.
* [d3.easeCubicIn](https://github.com/xswei/d3-ease/blob/master/README.md#easeCubicIn) - `cubic` 缓动.
* [d3.easeCubicOut](https://github.com/xswei/d3-ease/blob/master/README.md#easeCubicOut) - 反转 `cubic` 缓动.
* [d3.easeCubicInOut](https://github.com/xswei/d3-ease/blob/master/README.md#easeCubicInOut) - 对称 `cubic` 缓动.
* [d3.easeSin](https://github.com/xswei/d3-ease/blob/master/README.md#easeSin) - `easeSinInOut` 的别名.
* [d3.easeSinIn](https://github.com/xswei/d3-ease/blob/master/README.md#easeSinIn) - `sinusoidal` 缓动.
* [d3.easeSinOut](https://github.com/xswei/d3-ease/blob/master/README.md#easeSinOut) - 反转 `sinusoidal` 缓动.
* [d3.easeSinInOut](https://github.com/xswei/d3-ease/blob/master/README.md#easeSinInOut) - 对称 `sinusoidal` 缓动.
* [d3.easeExp](https://github.com/xswei/d3-ease/blob/master/README.md#easeExp) - `easeExpInOut` 的别名.
* [d3.easeExpIn](https://github.com/xswei/d3-ease/blob/master/README.md#easeExpIn) - `exponential` 缓动.
* [d3.easeExpOut](https://github.com/xswei/d3-ease/blob/master/README.md#easeExpOut) - 反转 `exponential` 缓动.
* [d3.easeExpInOut](https://github.com/xswei/d3-ease/blob/master/README.md#easeExpInOut) - 对称 `exponential` 缓动.
* [d3.easeCircle](https://github.com/xswei/d3-ease/blob/master/README.md#easeCircle) - `easeCircleInOut` 的别名.
* [d3.easeCircleIn](https://github.com/xswei/d3-ease/blob/master/README.md#easeCircleIn) - `circular` 缓动.
* [d3.easeCircleOut](https://github.com/xswei/d3-ease/blob/master/README.md#easeCircleOut) - 反转 `circular` 缓动.
* [d3.easeCircleInOut](https://github.com/xswei/d3-ease/blob/master/README.md#easeCircleInOut) - 对称 `circular` 缓动.
* [d3.easeElastic](https://github.com/xswei/d3-ease/blob/master/README.md#easeElastic) - `easeElasticOut` 的别名.
* [d3.easeElasticIn](https://github.com/xswei/d3-ease/blob/master/README.md#easeElasticIn) - `elastic` 缓动, 就像是橡皮筋.
* [d3.easeElasticOut](https://github.com/xswei/d3-ease/blob/master/README.md#easeElasticOut) - 反转 `elastic` 缓动.
* [d3.easeElasticInOut](https://github.com/xswei/d3-ease/blob/master/README.md#easeElasticInOut) - 对称 `elastic` 缓动.
* [*elastic*.amplitude](https://github.com/xswei/d3-ease/blob/master/README.md#elastic_amplitude) - 指定 `elastic` 的振幅.
* [*elastic*.period](https://github.com/xswei/d3-ease/blob/master/README.md#elastic_period) - 指定 `elastic` 的周期.
* [d3.easeBack](https://github.com/xswei/d3-ease/blob/master/README.md#easeBack) - `easeBackInOut` 的别名.
* [d3.easeBackIn](https://github.com/xswei/d3-ease/blob/master/README.md#easeBackIn) - `anticipatory` 缓动, 就像是舞者在跳跃之前先弯曲膝盖.
* [d3.easeBackOut](https://github.com/xswei/d3-ease/blob/master/README.md#easeBackOut) - 反转 `anticipatory` 缓动.
* [d3.easeBackInOut](https://github.com/xswei/d3-ease/blob/master/README.md#easeBackInOut) - 对称 `anticipatory` 缓动.
* [*back*.overshoot](https://github.com/xswei/d3-ease/blob/master/README.md#back_overshoot) - 指定超调量.
* [d3.easeBounce](https://github.com/xswei/d3-ease/blob/master/README.md#easeBounce) - `easeBounceOut` 的别名.
* [d3.easeBounceIn](https://github.com/xswei/d3-ease/blob/master/README.md#easeBounceIn) - `bounce` 缓动, 就像是橡皮球.
* [d3.easeBounceOut](https://github.com/xswei/d3-ease/blob/master/README.md#easeBounceOut) - 反转 `bounce` 缓动.
* [d3.easeBounceInOut](https://github.com/xswei/d3-ease/blob/master/README.md#easeBounceInOut) - 对称 `bounce` 缓动.

## [Fetches (d3-fetch)](https://github.com/xswei/d3-fetch)

基于 Fetch API 的更为便捷的获取数据方法.

* [d3.blob](https://github.com/xswei/d3-fetch/blob/master/README.md#blob) - 以 `blob` 的形式获取文件.
* [d3.buffer](https://github.com/xswei/d3-fetch/blob/master/README.md#buffer) - 以 `array buffer` 的形式获取文件.
* [d3.csv](https://github.com/xswei/d3-fetch/blob/master/README.md#csv) - 获取逗号分隔符 (`CSV`) 文件.
* [d3.dsv](https://github.com/xswei/d3-fetch/blob/master/README.md#dsv) - 获取分隔符 (`DSV`) 文件.
* [d3.image](https://github.com/xswei/d3-fetch/blob/master/README.md#image) - 获取图片.
* [d3.json](https://github.com/xswei/d3-fetch/blob/master/README.md#json) - 获取 `JSON` 文件.
* [d3.text](https://github.com/xswei/d3-fetch/blob/master/README.md#text) - 获取无格式文本.
* [d3.tsv](https://github.com/xswei/d3-fetch/blob/master/README.md#tsv) - 获取 `tab` 分隔符 (`TSV`) 文件.

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

对人类友好的数值格式化.

* [d3.format](https://github.com/xswei/d3-format/blob/master/README.md#format) - 默认语言环境中的 *locale*.format 别名.
* [d3.formatPrefix](https://github.com/xswei/d3-format/blob/master/README.md#formatPrefix) - 默认语言环境中的 *locale*.formatPrefix 别名.
* [d3.formatSpecifier](https://github.com/xswei/d3-format/blob/master/README.md#formatSpecifier) - 解析指定的说明符.
* [d3.formatLocale](https://github.com/xswei/d3-format/blob/master/README.md#formatLocale) - 定义一个自定义语言环境.
* [d3.formatDefaultLocale](https://github.com/xswei/d3-format/blob/master/README.md#formatDefaultLocale) - 定义一个默认的语言环境.
* [*locale*.format](https://github.com/xswei/d3-format/blob/master/README.md#locale_format) - 创建一个数值格式化.
* [*locale*.formatPrefix](https://github.com/xswei/d3-format/blob/master/README.md#locale_formatPrefix) - 创建一个科学计数法的数值格式化.
* [d3.precisionFixed](https://github.com/xswei/d3-format/blob/master/README.md#precisionFixed) - 为小数计数法计算建议的精度.
* [d3.precisionPrefix](https://github.com/xswei/d3-format/blob/master/README.md#precisionPrefix) - 为科学计数法计算建议的十进制精度.
* [d3.precisionRound](https://github.com/xswei/d3-format/blob/master/README.md#precisionRound) - 为四舍五入计算建议的十进制精度.

## [Geographies (d3-geo)](https://github.com/xswei/d3-geo)

地理投影, 形状以及数学计算.

### [Paths](https://github.com/xswei/d3-geo/blob/master/README.md#paths)

* [d3.geoPath](https://github.com/xswei/d3-geo/blob/master/README.md#geoPath) - 创建一个新的地理路径生成器.
* [*path*](https://github.com/xswei/d3-geo/blob/master/README.md#_path) - 投影并渲染指定的地理特征.
* [*path*.area](https://github.com/xswei/d3-geo/blob/master/README.md#path_area) - 计算指定的二位地理特征面积.
* [*path*.bounds](https://github.com/xswei/d3-geo/blob/master/README.md#path_bounds) - 计算指定的二位地理特征包裹框.
* [*path*.centroid](https://github.com/xswei/d3-geo/blob/master/README.md#path_centroid) - 算指定的二位地理特征中心.
* [*path*.measure](https://github.com/xswei/d3-geo/blob/master/README.md#path_measure) - 算指定的二位地理特征周长.
* [*path*.projection](https://github.com/xswei/d3-geo/blob/master/README.md#path_projection) - 设置地理路径生成器的投影方式.
* [*path*.context](https://github.com/xswei/d3-geo/blob/master/README.md#path_context) - 设置渲染上下文.
* [*path*.pointRadius](https://github.com/xswei/d3-geo/blob/master/README.md#path_pointRadius) - 设置点特征的半径.

### [Projections](https://github.com/xswei/d3-geo/blob/master/README.md#projections)

* [*projection*](https://github.com/xswei/d3-geo/blob/master/README.md#_projection) - 将指定的球面上一点投影到平面.
* [*projection*.invert](https://github.com/xswei/d3-geo/blob/master/README.md#projection_invert) - 逆转投影，根据平面一点反向计算球面坐标.
* [*projection*.stream](https://github.com/xswei/d3-geo/blob/master/README.md#projection_stream) - 将指定的流包装为 `project geometry`.
* [*projection*.clipAngle](https://github.com/xswei/d3-geo/blob/master/README.md#projection_clipAngle) - 设置剪辑圆的半径.
* [*projection*.clipExtent](https://github.com/xswei/d3-geo/blob/master/README.md#projection_clipExtent) - 以像素为单位设置视窗的裁剪范围.
* [*projection*.angle](https://github.com/d3/d3-geo/blob/master/README.md#projection_angle) - 设置投影后的旋转.
* [*projection*.scale](https://github.com/xswei/d3-geo/blob/master/README.md#projection_scale) - 设置缩放因子.
* [*projection*.translate](https://github.com/xswei/d3-geo/blob/master/README.md#projection_translate) - 设置平移偏移量.
* [*projection*.fitExtent](https://github.com/xswei/d3-geo/blob/master/README.md#projection_fitExtent) - 设置缩放和转换以适配 `GeoJSON` 对象.
* [*projection*.fitSize](https://github.com/xswei/d3-geo/blob/master/README.md#projection_fitSize) - 设置缩放和转换以适配 `GeoJSON` 对象.
* [*projection*.fitWidth](https://github.com/xswei/d3-geo/blob/master/README.md#projection_fitWidth) - 设置缩放和转换以适配 `GeoJSON` 对象.
* [*projection*.fitHeight](https://github.com/xswei/d3-geo/blob/master/README.md#projection_fitHeight) - 设置缩放和转换以适配 `GeoJSON` 对象.
* [*projection*.center](https://github.com/xswei/d3-geo/blob/master/README.md#projection_center) - 设置中心点.
* [*projection*.rotate](https://github.com/xswei/d3-geo/blob/master/README.md#projection_rotate) - 设置三轴旋转角度.
* [*projection*.precision](https://github.com/xswei/d3-geo/blob/master/README.md#projection_precision) - 设置采样的精度阈值.
* [*projection*.preclip](https://github.com/xswei/d3-geo/blob/master/README.md#projection.preclip) - 设置球形剪切流变换.
* [*projection*.postclip](https://github.com/xswei/d3-geo/blob/master/README.md#projection.postclip) - 设置平面剪切流变换.
* [d3.geoClipAntimeridian](https://github.com/xswei/d3-geo/blob/master/README.md#geoClipAntimeridian) - 沿着对向子午线切割的球面集合图形.
* [d3.geoClipCircle](https://github.com/xswei/d3-geo/blob/master/README.md#geoClipCircle) - 球面几何裁剪.
* [d3.geoClipRectangle](https://github.com/xswei/d3-geo/blob/master/README.md#geoClipRectangle) - 将平面几何图形剪辑到矩形视图.
* [d3.geoAlbers](https://github.com/xswei/d3-geo/blob/master/README.md#geoAlbers) - `Albers` 等面积圆锥投影.
* [d3.geoAlbersUsa](https://github.com/xswei/d3-geo/blob/master/README.md#geoAlbersUsa) - 适用于美国的复合 `Albers` 投影.
* [d3.geoAzimuthalEqualArea](https://github.com/xswei/d3-geo/blob/master/README.md#geoAzimuthalEqualArea) - 等面积方位投影.
* [d3.geoAzimuthalEquidistant](https://github.com/xswei/d3-geo/blob/master/README.md#geoAzimuthalEquidistant) - 方位等距投影.
* [d3.geoConicConformal](https://github.com/xswei/d3-geo/blob/master/README.md#geoConicConformal) - 圆锥保角投影.
* [d3.geoConicEqualArea](https://github.com/xswei/d3-geo/blob/master/README.md#geoConicEqualArea) - 圆锥等面积(`Albers`)投影.
* [d3.geoConicEquidistant](https://github.com/xswei/d3-geo/blob/master/README.md#geoConicEquidistant) -等距圆锥投影.
* [*conic*.parallels](https://github.com/xswei/d3-geo/blob/master/README.md#conic_parallels) - 设置两条标准平行线.
* [d3.geoEquirectangular](https://github.com/xswei/d3-geo/blob/master/README.md#geoEquirectangular) - 等矩形(平板)投影.
* [d3.geoGnomonic](https://github.com/xswei/d3-geo/blob/master/README.md#geoGnomonic) - 诺蒙尼日投影.
* [d3.geoMercator](https://github.com/xswei/d3-geo/blob/master/README.md#geoMercator) - 球面墨卡托投影.
* [d3.geoOrthographic](https://github.com/xswei/d3-geo/blob/master/README.md#geoOrthographic) - 方位角正投影.
* [d3.geoStereographic](https://github.com/xswei/d3-geo/blob/master/README.md#geoStereographic) - 方位立体投影.
* [d3.geoTransverseMercator](https://github.com/xswei/d3-geo/blob/master/README.md#geoTransverseMercator) - 横向球面墨卡托投影.
* [*project*](https://github.com/xswei/d3-geo/blob/master/README.md#_project) - 将球面坐标点投影到平面.
* [*project*.invert](https://github.com/xswei/d3-geo/blob/master/README.md#project_invert) - 平面到球面的投影逆计算.
* [d3.geoProjection](https://github.com/xswei/d3-geo/blob/master/README.md#geoProjection) - 创建一个自定义投影.
* [d3.geoProjectionMutator](https://github.com/xswei/d3-geo/blob/master/README.md#geoProjectionMutator) - 创建自定义可配置的投影.
* [d3.geoAzimuthalEqualAreaRaw](https://github.com/xswei/d3-geo/blob/master/README.md#geoAzimuthalEqualAreaRaw) - 原始的等面积方位投影.
* [d3.geoAzimuthalEquidistantRaw](https://github.com/xswei/d3-geo/blob/master/README.md#geoAzimuthalEquidistantRaw) - 原始的方位投影.
* [d3.geoConicConformalRaw](https://github.com/xswei/d3-geo/blob/master/README.md#geoConicConformalRaw) - 原始的圆锥保角投影.
* [d3.geoConicEqualAreaRaw](https://github.com/xswei/d3-geo/blob/master/README.md#geoConicEqualAreaRaw) - 原始的圆锥等面积 (`Albers)` 投影.
* [d3.geoConicEquidistantRaw](https://github.com/xswei/d3-geo/blob/master/README.md#geoConicEquidistantRaw) - 原始的等距圆锥投影.
* [d3.geoEquirectangularRaw](https://github.com/xswei/d3-geo/blob/master/README.md#geoEquirectangularRaw) - 原始的等矩形(平板)投影.
* [d3.geoGnomonicRaw](https://github.com/xswei/d3-geo/blob/master/README.md#geoGnomonicRaw) - 原始的诺蒙尼日投影.
* [d3.geoMercatorRaw](https://github.com/xswei/d3-geo/blob/master/README.md#geoMercatorRaw) - 原始的 `Mercator` 投影.
* [d3.geoOrthographicRaw](https://github.com/xswei/d3-geo/blob/master/README.md#geoOrthographicRaw) - 原始方位角正投影.
* [d3.geoStereographicRaw](https://github.com/xswei/d3-geo/blob/master/README.md#geoStereographicRaw) - 原始方位立体投影.
* [d3.geoTransverseMercatorRaw](https://github.com/xswei/d3-geo/blob/master/README.md#geoTransverseMercatorRaw) - 原始的横向球面墨卡托投影.

### [Spherical Math](https://github.com/xswei/d3-geo/blob/master/README.md#spherical-math)

* [d3.geoArea](https://github.com/xswei/d3-geo/blob/master/README.md#geoArea) - 根据给定的地理特征计算球面面积.
* [d3.geoBounds](https://github.com/xswei/d3-geo/blob/master/README.md#geoBounds) - 根据指定的地理特征计算包裹框(经纬度).
* [d3.geoCentroid](https://github.com/xswei/d3-geo/blob/master/README.md#geoCentroid) - 根据给定的地理特征计算球面中心.
* [d3.geoContains](https://github.com/xswei/d3-geo/blob/master/README.md#geoContains) - 测试一个点是否在给定的地理特征轮廓内部.
* [d3.geoDistance](https://github.com/xswei/d3-geo/blob/master/README.md#geoDistance) - 计算两个点之间的大圆距离.
* [d3.geoLength](https://github.com/xswei/d3-geo/blob/master/README.md#geoLength) - 计算一条线的长度或者多边形的周长.
* [d3.geoInterpolate](https://github.com/xswei/d3-geo/blob/master/README.md#geoInterpolate) - 在两个点之间沿着大圆进行插值.
* [d3.geoRotation](https://github.com/xswei/d3-geo/blob/master/README.md#geoRotation) - 根据指定的角度创建一个旋转函数.
* [*rotation*](https://github.com/xswei/d3-geo/blob/master/README.md#_rotation) - 沿着指定的球面对指定点进行旋转.
* [*rotation*.invert](https://github.com/xswei/d3-geo/blob/master/README.md#rotation_invert) - 计算某个点在旋转之前的点.

### [Spherical Shapes](https://github.com/xswei/d3-geo/blob/master/README.md#spherical-shapes)

* [d3.geoCircle](https://github.com/xswei/d3-geo/blob/master/README.md#geoCircle) - 创建一个圆生成器.
* [*circle*](https://github.com/xswei/d3-geo/blob/master/README.md#_circle) - 以分段的多边形的形式生成一个圆.
* [*circle*.center](https://github.com/xswei/d3-geo/blob/master/README.md#circle_center) - 以经纬度的方式指定圆心.
* [*circle*.radius](https://github.com/xswei/d3-geo/blob/master/README.md#circle_radius) - 以度为单位指定圆的角半径.
* [*circle*.precision](https://github.com/xswei/d3-geo/blob/master/README.md#circle_precision) - 指定分段圆的精度.
* [d3.geoGraticule](https://github.com/xswei/d3-geo/blob/master/README.md#geoGraticule) - 创建一个经纬网生成器.
* [*graticule*](https://github.com/xswei/d3-geo/blob/master/README.md#_graticule) - 生成表示经纬线的几何对象 `MultiLineString`.
* [*graticule*.lines](https://github.com/xswei/d3-geo/blob/master/README.md#graticule_lines) - 生成表示经纬线的几何对象 `LineStrings` 数组.
* [*graticule*.outline](https://github.com/xswei/d3-geo/blob/master/README.md#graticule_outline) - 生成经纬网的包裹多边形边界.
* [*graticule*.extent](https://github.com/xswei/d3-geo/blob/master/README.md#graticule_extent) - 获取或设置经纬度范围.
* [*graticule*.extentMajor](https://github.com/xswei/d3-geo/blob/master/README.md#graticule_extentMajor) - 获取或设置经度范围.
* [*graticule*.extentMinor](https://github.com/xswei/d3-geo/blob/master/README.md#graticule_extentMinor) - 获取或设置纬度范围.
* [*graticule*.step](https://github.com/xswei/d3-geo/blob/master/README.md#graticule_step) - 获取或设置经纬度间隔.
* [*graticule*.stepMajor](https://github.com/xswei/d3-geo/blob/master/README.md#graticule_stepMajor) - 获取或设置经度步长间隔.
* [*graticule*.stepMinor](https://github.com/xswei/d3-geo/blob/master/README.md#graticule_stepMinor) - 获取或设置纬度步长间隔.
* [*graticule*.precision](https://github.com/xswei/d3-geo/blob/master/README.md#graticule_precision) - 获取或设置纬度度精度.
* [d3.geoGraticule10](https://github.com/xswei/d3-geo/blob/master/README.md#geoGraticule10) - 生成默认的 `10°` 全球经纬线.

#### [Streams](https://github.com/xswei/d3-geo/blob/master/README.md#streams)

* [d3.geoStream](https://github.com/xswei/d3-geo/blob/master/README.md#geoStream) - 将 `GeoJSON` 对象转为几何流.
* [*stream*.point](https://github.com/xswei/d3-geo/blob/master/README.md#stream_point) - 表明指定点的坐标.
* [*stream*.lineStart](https://github.com/xswei/d3-geo/blob/master/README.md#stream_lineStart) - 表示线或者环的起点.
* [*stream*.lineEnd](https://github.com/xswei/d3-geo/blob/master/README.md#stream_lineEnd) - 表示线或者环的终点.
* [*stream*.polygonStart](https://github.com/xswei/d3-geo/blob/master/README.md#stream_polygonStart) - 表示多边形的起点.
* [*stream*.polygonEnd](https://github.com/xswei/d3-geo/blob/master/README.md#stream_polygonEnd) - 表示多边形的终点.
* [*stream*.sphere](https://github.com/xswei/d3-geo/blob/master/README.md#stream_sphere) - 表示球.

### [Transforms](https://github.com/xswei/d3-geo/blob/master/README.md#transforms)

* [d3.geoIdentity](https://github.com/xswei/d3-geo/blob/master/README.md#geoIdentity) - 缩放, 平移或者裁剪平面几何.
* [*identity*.reflectX](https://github.com/xswei/d3-geo/blob/master/README.md#identity_reflectX) - 反转 *x*-维度.
* [*identity*.reflectY](https://github.com/xswei/d3-geo/blob/master/README.md#identity_reflectY) - 反转 *y*-维度.
* [d3.geoTransform](https://github.com/xswei/d3-geo/blob/master/README.md#geoTransform) - 定义一个自定义的几个变换.

## [Hierarchies (d3-hierarchy)](https://github.com/xswei/d3-hierarchy)

对层次数据进行可视化的一些布局算法.

* [d3.hierarchy](https://github.com/xswei/d3-hierarchy/blob/master/README.md#hierarchy) - 从给定的层次结构数据构造一个根节点并为各个节点指定深度等属性.
* [*node*.ancestors](https://github.com/xswei/d3-hierarchy/blob/master/README.md#node_ancestors) - 从当前节点开始返回其祖先节点数组.
* [*node*.descendants](https://github.com/xswei/d3-hierarchy/blob/master/README.md#node_descendants) - 从当前节点开始返回其后代节点数组.
* [*node*.leaves](https://github.com/xswei/d3-hierarchy/blob/master/README.md#node_leaves) - 返回当前节点为根节点的子树的叶节点.
* [*node*.path](https://github.com/xswei/d3-hierarchy/blob/master/README.md#node_path) - 返回从当前节点到指定目标节点的最短路径.
* [*node*.links](https://github.com/xswei/d3-hierarchy/blob/master/README.md#node_links) - 返回当前节点所在子树的所有边.
* [*node*.sum](https://github.com/xswei/d3-hierarchy/blob/master/README.md#node_sum) - 评估和汇总定量值.
* [*node*.sort](https://github.com/xswei/d3-hierarchy/blob/master/README.md#node_sort) - 排序所有的后代兄弟节点.
* [*node*.count](https://github.com/xswei/d3-hierarchy/blob/master/README.md#node_count) - 统计叶节点的个数.
* [*node*.each](https://github.com/xswei/d3-hierarchy/blob/master/README.md#node_each) - 广度优先遍历当前子树.
* [*node*.eachAfter](https://github.com/xswei/d3-hierarchy/blob/master/README.md#node_eachAfter) - 后续遍历当前子树.
* [*node*.eachBefore](https://github.com/xswei/d3-hierarchy/blob/master/README.md#node_eachBefore) - 前序遍历当前子树.
* [*node*.copy](https://github.com/xswei/d3-hierarchy/blob/master/README.md#node_copy) - 拷贝一个当前节点为根节点的子树的副本.
* [d3.stratify](https://github.com/xswei/d3-hierarchy/blob/master/README.md#stratify) - 创建一个新的分层操作.
* [*stratify*](https://github.com/xswei/d3-hierarchy/blob/master/README.md#_stratify) - 根据扁平数据创建一个分层数据.
* [*stratify*.id](https://github.com/xswei/d3-hierarchy/blob/master/README.md#stratify_id) - 设置节点 `id` 访问器.
* [*stratify*.parentId](https://github.com/xswei/d3-hierarchy/blob/master/README.md#stratify_parentId) - 设置父节点 `id` 访问器.
* [d3.cluster](https://github.com/xswei/d3-hierarchy/blob/master/README.md#cluster) - 创建一个新的集群(系统树图)布局.
* [*cluster*](https://github.com/xswei/d3-hierarchy/blob/master/README.md#_cluster) - 将指定的数据布局为系统树图.
* [*cluster*.size](https://github.com/xswei/d3-hierarchy/blob/master/README.md#cluster_size) - 设置布局尺寸.
* [*cluster*.nodeSize](https://github.com/xswei/d3-hierarchy/blob/master/README.md#cluster_nodeSize) - 设计节点尺寸.
* [*cluster*.separation](https://github.com/xswei/d3-hierarchy/blob/master/README.md#cluster_separation) - 设置两个叶节点之间的间距.
* [d3.tree](https://github.com/xswei/d3-hierarchy/blob/master/README.md#tree) - 创建一个新的整齐(同深度节点对齐)的树布局.
* [*tree*](https://github.com/xswei/d3-hierarchy/blob/master/README.md#_tree) - 将指定的层次数据布局为整齐的树布局.
* [*tree*.size](https://github.com/xswei/d3-hierarchy/blob/master/README.md#tree_size) - 设置布局尺寸.
* [*tree*.nodeSize](https://github.com/xswei/d3-hierarchy/blob/master/README.md#tree_nodeSize) - 设置节点尺寸.
* [*tree*.separation](https://github.com/xswei/d3-hierarchy/blob/master/README.md#tree_separation) - 设置两个相邻的节点之间的间距.
* [d3.treemap](https://github.com/xswei/d3-hierarchy/blob/master/README.md#treemap) - 创建一个矩阵树图布局.
* [*treemap*](https://github.com/xswei/d3-hierarchy/blob/master/README.md#_treemap) - 将层次数据布局为矩阵树图.
* [*treemap*.tile](https://github.com/xswei/d3-hierarchy/blob/master/README.md#treemap_tile) - 设置矩阵树图布局的填铺方法.
* [*treemap*.size](https://github.com/xswei/d3-hierarchy/blob/master/README.md#treemap_size) - 设置布局尺寸.
* [*treemap*.round](https://github.com/xswei/d3-hierarchy/blob/master/README.md#treemap_round) - 设置输出坐标是否取整.
* [*treemap*.padding](https://github.com/xswei/d3-hierarchy/blob/master/README.md#treemap_padding) - 设置间隔参数.
* [*treemap*.paddingInner](https://github.com/xswei/d3-hierarchy/blob/master/README.md#treemap_paddingInner) - 设置同级节点之间的间隔.
* [*treemap*.paddingOuter](https://github.com/xswei/d3-hierarchy/blob/master/README.md#treemap_paddingOuter) - 设置父节点和子节点之间的间距.
* [*treemap*.paddingTop](https://github.com/xswei/d3-hierarchy/blob/master/README.md#treemap_paddingTop) - 设置父节点和子节点之间的顶部间距.
* [*treemap*.paddingRight](https://github.com/xswei/d3-hierarchy/blob/master/README.md#treemap_paddingRight) - 设置父节点和子节点之间的右侧间距.
* [*treemap*.paddingBottom](https://github.com/xswei/d3-hierarchy/blob/master/README.md#treemap_paddingBottom) - 设置父节点和子节点之间的底部间距.
* [*treemap*.paddingLeft](https://github.com/xswei/d3-hierarchy/blob/master/README.md#treemap_paddingLeft) - 设置父节点和子节点之间的左侧间距.
* [d3.treemapBinary](https://github.com/xswei/d3-hierarchy/blob/master/README.md#treemapBinary) - 平铺为平衡二叉树.
* [d3.treemapDice](https://github.com/xswei/d3-hierarchy/blob/master/README.md#treemapDice) - 以水平划分的形式平铺.
* [d3.treemapSlice](https://github.com/xswei/d3-hierarchy/blob/master/README.md#treemapSlice) - 以垂直划分的形式平铺.
* [d3.treemapSliceDice](https://github.com/xswei/d3-hierarchy/blob/master/README.md#treemapSliceDice) - 在 `slice` 和 `dice` 之间切换.
* [d3.treemapSquarify](https://github.com/xswei/d3-hierarchy/blob/master/README.md#treemapSquarify) - Bruls *et. al.* 的正方化布局.
* [d3.treemapResquarify](https://github.com/xswei/d3-hierarchy/blob/master/README.md#treemapResquarify) - 与 ` d3.treemapSquarify` 类似, 但是更新时更稳定.
* [*squarify*.ratio](https://github.com/xswei/d3-hierarchy/blob/master/README.md#squarify_ratio) - 设置期望的矩形纵横比.
* [d3.partition](https://github.com/xswei/d3-hierarchy/blob/master/README.md#partition) - 创建一个新的分区布局.
* [*partition*](https://github.com/xswei/d3-hierarchy/blob/master/README.md#_partition) - 将层次数据布局为分区图(属性计算).
* [*partition*.size](https://github.com/xswei/d3-hierarchy/blob/master/README.md#partition_size) - 设置分区图的尺寸.
* [*partition*.round](https://github.com/xswei/d3-hierarchy/blob/master/README.md#partition_round) - 设置输出坐标是否取整.
* [*partition*.padding](https://github.com/xswei/d3-hierarchy/blob/master/README.md#partition_padding) - 设置间隙.
* [d3.pack](https://github.com/xswei/d3-hierarchy/blob/master/README.md#pack) - 创建一个新的圆形打包图.
* [*pack*](https://github.com/xswei/d3-hierarchy/blob/master/README.md#_pack) - 为指定的层次数据计算绘制打包图需要的属性.
* [*pack*.radius](https://github.com/xswei/d3-hierarchy/blob/master/README.md#pack_radius) - 设置半径访问器.
* [*pack*.size](https://github.com/xswei/d3-hierarchy/blob/master/README.md#pack_size) - 设置布局尺寸.
* [*pack*.padding](https://github.com/xswei/d3-hierarchy/blob/master/README.md#pack_padding) - 设置间隙.
* [d3.packSiblings](https://github.com/xswei/d3-hierarchy/blob/master/README.md#packSiblings) - 将一组圆进行打包.
* [d3.packEnclose](https://github.com/xswei/d3-hierarchy/blob/master/README.md#packEnclose) - 计算指定圆数组的最小包裹圆.

## [Interpolators (d3-interpolate)](https://github.com/xswei/d3-interpolate)

对数值、颜色、字符串、数组、对象等进行插值

* [d3.interpolate](https://github.com/xswei/d3-interpolate#interpolate) - 生成一个任意数值的插值器.
* [d3.interpolateArray](https://github.com/xswei/d3-interpolate#interpolateArray) - 生成一个数组插值器.
* [d3.interpolateDate](https://github.com/xswei/d3-interpolate#interpolateDate) - 生成一个时间类型插值器.
* [d3.interpolateNumber](https://github.com/xswei/d3-interpolate#interpolateNumber) - 生成一个时间类型插值器.
* [d3.interpolateObject](https://github.com/xswei/d3-interpolate#interpolateObject) - 生成一个对象类型插值器.
* [d3.interpolateRound](https://github.com/xswei/d3-interpolate#interpolateRound) - 生成一个数值类型插值器.
* [d3.interpolateString](https://github.com/xswei/d3-interpolate#interpolateString) - 生成一个字符串类型插值器.
* [d3.interpolateTransformCss](https://github.com/xswei/d3-interpolate#interpolateTransformCss) - 生成一个 `2D CSS` 样式过渡插值器.
* [d3.interpolateTransformSvg](https://github.com/xswei/d3-interpolate#interpolateTransformSvg) - 生成一个 `2D SVG` 过渡插值器.
* [d3.interpolateZoom](https://github.com/xswei/d3-interpolate#interpolateZoom) - 在两个缩放视图之间过渡的插值器.
* [d3.interpolateRgb](https://github.com/xswei/d3-interpolate#interpolateRgb) - 生成一个 `RGB` 类型插值器.
* [d3.interpolateRgbBasis](https://github.com/xswei/d3-interpolate#interpolateRgbBasis) - 根据一组颜色返回一个 *B*- 样条插值器.
* [d3.interpolateRgbBasisClosed](https://github.com/xswei/d3-interpolate#interpolateRgbBasisClosed) - 根据一组颜色返回一个 *B*- 样条插值器.
* [d3.interpolateHsl](https://github.com/xswei/d3-interpolate#interpolateHsl) - 生成一个 `Hsl` 类型插值器.
* [d3.interpolateHslLong](https://github.com/xswei/d3-interpolate#interpolateHslLong) - 生成一个 `Hsl` 类型插值器(反向模式).
* [d3.interpolateLab](https://github.com/xswei/d3-interpolate#interpolateLab) - 生成一个 `Lab` 类型插值器.
* [d3.interpolateHcl](https://github.com/xswei/d3-interpolate#interpolateHcl) - 生成一个 `Hcl` 类型插值器.
* [d3.interpolateHclLong](https://github.com/xswei/d3-interpolate#interpolateHclLong) - 生成一个 `Hcl` 类型插值器(反向模式).
* [d3.interpolateCubehelix](https://github.com/xswei/d3-interpolate#interpolateCubehelix) - 生成一个 Cubehelix 类型插值器.
* [d3.interpolateCubehelixLong](https://github.com/xswei/d3-interpolate#interpolateCubehelixLong) - 生成一个 `Cubehelix` 类型插值器(反向模式).
* [*interpolate*.gamma](https://github.com/xswei/d3-interpolate#interpolate_gamma) - 应用 `gamma` 修正.
* [d3.interpolateBasis](https://github.com/xswei/d3-interpolate#interpolateBasis) - 根据一组数值返回一个 *B*- 样条插值器.
* [d3.interpolateBasisClosed](https://github.com/xswei/d3-interpolate#interpolateBasisClosed) - 根据一组数值返回一个 *B*- 样条插值器.
* [d3.piecewise](https://github.com/xswei/d3-interpolate/blob/master/README.md#piecewise) - 根据指定的 `values` 生成一个分段插值器.
* [d3.quantize](https://github.com/xswei/d3-interpolate#quantize) - 插值器生成一组均匀采样.

## [Paths (d3-path)](https://github.com/xswei/d3-path)

将 `Canvas` 路径命令序列化为 `SVG` 路径字符串。

* [d3.path](https://github.com/xswei/d3-path/blob/master/README.md#path) - 创建一个新的路径序列化.
* [*path*.moveTo](https://github.com/xswei/d3-path/blob/master/README.md#path_moveTo) - 移动到指定的点.
* [*path*.closePath](https://github.com/xswei/d3-path/blob/master/README.md#path_closePath) - 闭合当前子路径.
* [*path*.lineTo](https://github.com/xswei/d3-path/blob/master/README.md#path_lineTo) - 绘制直线.
* [*path*.quadraticCurveTo](https://github.com/xswei/d3-path/blob/master/README.md#path_quadraticCurveTo) - 绘制二次 `Bézier` 曲线.
* [*path*.bezierCurveTo](https://github.com/xswei/d3-path/blob/master/README.md#path_bezierCurveTo) - 绘制三次 `Bézier` 曲线.
* [*path*.arcTo](https://github.com/xswei/d3-path/blob/master/README.md#path_arcTo) - 绘制弧线段.
* [*path*.arc](https://github.com/xswei/d3-path/blob/master/README.md#path_arc) - 绘制弧线段.
* [*path*.rect](https://github.com/xswei/d3-path/blob/master/README.md#path_rect) - 绘制矩形.
* [*path*.toString](https://github.com/xswei/d3-path/blob/master/README.md#path_toString) - 序列化为 `SVG` 路径字符串.

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

## [Random Numbers (d3-random)](https://github.com/xswei/d3-random)

基于多种多样的分布模型生成随机数.

* [d3.randomUniform](https://github.com/xswei/d3-random/blob/master/README.md#randomUniform) - 一般分布.
* [d3.randomNormal](https://github.com/xswei/d3-random/blob/master/README.md#randomNormal) - 标准高斯分布.
* [d3.randomLogNormal](https://github.com/xswei/d3-random/blob/master/README.md#randomLogNormal) - 对数分布.
* [d3.randomBates](https://github.com/xswei/d3-random/blob/master/README.md#randomBates) - 贝茨分布.
* [d3.randomIrwinHall](https://github.com/xswei/d3-random/blob/master/README.md#randomIrwinHall) - `Irwin–Hall` 分布.
* [d3.randomExponential](https://github.com/xswei/d3-random/blob/master/README.md#randomExponential) - 指数分布.
* [*random*.source](https://github.com/xswei/d3-random/blob/master/README.md#random_source) - 设置随机数生成源.

## [Scales (d3-scale)](https://github.com/xswei/d3-scale)

将抽象数据映射到可视化表示的编码.

### [Continuous Scales](https://github.com/xswei/d3-scale/blob/master/README.md#continuous-scales)

将一个连续的，定量的输入映射到连续的输出区间.

* [*continuous*](https://github.com/xswei/d3-scale/blob/master/README.md#_continuous) - 根据给定的输入值计算对应的输出值.
* [*continuous*.invert](https://github.com/xswei/d3-scale/blob/master/README.md#continuous_invert) - 根据输出值计算对应的输入值.
* [*continuous*.domain](https://github.com/xswei/d3-scale/blob/master/README.md#continuous_domain) - 设置输入范围.
* [*continuous*.range](https://github.com/xswei/d3-scale/blob/master/README.md#continuous_range) - 设置输出范围.
* [*continuous*.rangeRound](https://github.com/xswei/d3-scale/blob/master/README.md#continuous_rangeRound) - 设置输出范围并且启用四舍五入.
* [*continuous*.clamp](https://github.com/xswei/d3-scale/blob/master/README.md#continuous_clamp) - 启用输入或输出的范围限制(输入输出限制在定义的范围之内).
* [*continuous*.interpolate](https://github.com/xswei/d3-scale/blob/master/README.md#continuous_interpolate) - 设置输出插值器.
* [*continuous*.ticks](https://github.com/xswei/d3-scale/blob/master/README.md#continuous_ticks) - 从输入范围中提取具有代表意义的值.
* [*continuous*.tickFormat](https://github.com/xswei/d3-scale/blob/master/README.md#continuous_tickFormat) - 将刻度格式化为人类友好的格式.
* [*continuous*.nice](https://github.com/xswei/d3-scale/blob/master/README.md#continuous_nice) - 将输入范围扩展到漂亮的整数.
* [*continuous*.copy](https://github.com/xswei/d3-scale/blob/master/README.md#continuous_copy) - 创建一个当前比例尺的副本.
* [d3.scaleLinear](https://github.com/xswei/d3-scale/blob/master/README.md#scaleLinear) - 创建一个定量的线性比例尺.
* [d3.scalePow](https://github.com/xswei/d3-scale/blob/master/README.md#scalePow) - 创建一个定量的指数比例尺.
* [*pow*](https://github.com/xswei/d3-scale/blob/master/README.md#_pow) - 根据输入值计算对应的输出值.
* [*pow*.invert](https://github.com/xswei/d3-scale/blob/master/README.md#pow_invert) - 根据输出值计算对应的输入值.
* [*pow*.exponent](https://github.com/xswei/d3-scale/blob/master/README.md#pow_exponent) - 设置指数.
* [*pow*.domain](https://github.com/xswei/d3-scale/blob/master/README.md#pow_domain) - 设置输入范围.
* [*pow*.range](https://github.com/xswei/d3-scale/blob/master/README.md#pow_range) - 设置输出范围.
* [*pow*.rangeRound](https://github.com/xswei/d3-scale/blob/master/README.md#pow_rangeRound) - 设置输出范围并且启用四舍五入.
* [*pow*.clamp](https://github.com/xswei/d3-scale/blob/master/README.md#pow_clamp) - 启用输入或输出的范围限制.
* [*pow*.interpolate](https://github.com/xswei/d3-scale/blob/master/README.md#pow_interpolate) - 设置输出插值器.
* [*pow*.ticks](https://github.com/xswei/d3-scale/blob/master/README.md#pow_ticks) - 从输入范围中提取具有代表意义的值(作为刻度).
* [*pow*.tickFormat](https://github.com/xswei/d3-scale/blob/master/README.md#pow_tickFormat) - 将刻度格式化为人类友好的格式.
* [*pow*.nice](https://github.com/xswei/d3-scale/blob/master/README.md#pow_nice) - 将输入范围扩展到漂亮的整数.
* [*pow*.copy](https://github.com/xswei/d3-scale/blob/master/README.md#pow_copy) - 创建一个当前比例尺的副本.
* [d3.scaleSqrt](https://github.com/xswei/d3-scale/blob/master/README.md#scaleSqrt) - 创建一个指数为 `0.5` 的指数比例尺.
* [d3.scaleLog](https://github.com/xswei/d3-scale/blob/master/README.md#scaleLog) - 创建一个对数比例尺.
* [*log*](https://github.com/xswei/d3-scale/blob/master/README.md#_log) - 根据输入值计算对应的输出值.
* [*log*.invert](https://github.com/xswei/d3-scale/blob/master/README.md#log_invert) - 根据输出值计算对应的输入值.
* [*log*.base](https://github.com/xswei/d3-scale/blob/master/README.md#log_base) - 设置对数的基.
* [*log*.domain](https://github.com/xswei/d3-scale/blob/master/README.md#log_domain) - 设置输入范围.
* [*log*.range](https://github.com/xswei/d3-scale/blob/master/README.md#log_range) - 设置输出范围.
* [*log*.rangeRound](https://github.com/xswei/d3-scale/blob/master/README.md#log_rangeRound) - 设置输出范围并且启用四舍五入.
* [*log*.clamp](https://github.com/xswei/d3-scale/blob/master/README.md#log_clamp) - 启用输入或输出的范围限制.
* [*log*.interpolate](https://github.com/xswei/d3-scale/blob/master/README.md#log_interpolate) - 设置输出插值器.
* [*log*.ticks](https://github.com/xswei/d3-scale/blob/master/README.md#log_ticks) - 从输入范围中提取具有代表意义的值(作为刻度).
* [*log*.tickFormat](https://github.com/xswei/d3-scale/blob/master/README.md#log_tickFormat) - 将刻度格式化为人类友好的格式.
* [*log*.nice](https://github.com/xswei/d3-scale/blob/master/README.md#log_nice) - 将输入范围扩展到漂亮的整数.
* [*log*.copy](https://github.com/xswei/d3-scale/blob/master/README.md#log_copy) - 创建一个当前比例尺的副本.
* [d3.scaleIdentity](https://github.com/xswei/d3-scale/blob/master/README.md#identity) - 创建一个定量的恒等比例尺.
* [d3.scaleTime](https://github.com/xswei/d3-scale/blob/master/README.md#scaleTime) - 创建一个线性的时间比例尺.
* [*time*](https://github.com/xswei/d3-scale/blob/master/README.md#_time) - 根据输入值计算对应的输出值.
* [*time*.invert](https://github.com/xswei/d3-scale/blob/master/README.md#time_invert) - 根据输出值计算对应的输入值.
* [*time*.domain](https://github.com/xswei/d3-scale/blob/master/README.md#time_domain) - 设置输入范围.
* [*time*.range](https://github.com/xswei/d3-scale/blob/master/README.md#time_range) - 设置输出范围.
* [*time*.rangeRound](https://github.com/xswei/d3-scale/blob/master/README.md#time_rangeRound) - 设置输出范围并且启用四舍五入.
* [*time*.clamp](https://github.com/xswei/d3-scale/blob/master/README.md#time_clamp) - 启用输入或输出的范围限制.
* [*time*.interpolate](https://github.com/xswei/d3-scale/blob/master/README.md#time_interpolate) - 设置输出插值器.
* [*time*.ticks](https://github.com/xswei/d3-scale/blob/master/README.md#time_ticks) - 从输入范围中提取具有代表意义的值(作为刻度).
* [*time*.tickFormat](https://github.com/xswei/d3-scale/blob/master/README.md#time_tickFormat) - 将刻度格式化为人类友好的格式.
* [*time*.nice](https://github.com/xswei/d3-scale/blob/master/README.md#time_nice) - 扩展输入范围到一个友好的时间.
* [*time*.copy](https://github.com/xswei/d3-scale/blob/master/README.md#time_copy) - 创建一个当前比例尺的副本.
* [d3.scaleUtc](https://github.com/xswei/d3-scale/blob/master/README.md#scaleUtc) - 创建一个 `UTC` 线性比例尺.

### [Sequential Scales](https://github.com/xswei/d3-scale/blob/master/README.md#sequential-scales)

将连续的定量的输入映射到连续的固定的插值器.

* [d3.scaleSequential](https://github.com/xswei/d3-scale/blob/master/README.md#scaleSequential) - 创建一个序列比例尺.
* [*sequential*.interpolator](https://github.com/xswei/d3-scale/blob/master/README.md#sequential_interpolator) - 设置序列比例尺的插值器.

### [Diverging Scales](https://github.com/xswei/d3-scale/blob/master/README.md#diverging-scales)

将连续的，定量的输入映射到连续的固定的插值器

* [d3.scaleDiverging](https://github.com/xswei/d3-scale/blob/master/README.md#scaleDiverging) - 创建一个发散比例尺.
* [*diverging*.interpolator](https://github.com/xswei/d3-scale/blob/master/README.md#diverging_interpolator) - 设置发散比例尺的插值器.

### [Quantize Scales](https://github.com/xswei/d3-scale/blob/master/README.md#quantize-scales)

将连续的输入域映射到离散的输出域.

* [d3.scaleQuantize](https://github.com/xswei/d3-scale/blob/master/README.md#scaleQuantize) - 创建一个量化比例尺
* [*quantize*](https://github.com/xswei/d3-scale/blob/master/README.md#_quantize) - 根据输入值计算对应的输出值.
* [*quantize*.invertExtent](https://github.com/xswei/d3-scale/blob/master/README.md#quantize_invertExtent) - 根据输出值计算输入范围.
* [*quantize*.domain](https://github.com/xswei/d3-scale/blob/master/README.md#quantize_domain) - 设置输入范围.
* [*quantize*.range](https://github.com/xswei/d3-scale/blob/master/README.md#quantize_range) - 设置输出范围.
* [*quantize*.nice](https://github.com/xswei/d3-scale/blob/master/README.md#quantize_nice) - 将输入范围扩展到漂亮的整数.
* [*quantize*.ticks](https://github.com/xswei/d3-scale/blob/master/README.md#quantize_ticks) - 从输入范围中提取具有代表意义的值(作为刻度).
* [*quantize*.tickFormat](https://github.com/xswei/d3-scale/blob/master/README.md#quantize_tickFormat) - 将刻度格式化为人类友好的格式.
* [*quantize*.copy](https://github.com/xswei/d3-scale/blob/master/README.md#quantize_copy) - 创建一个当前比例尺的副本.
* [d3.scaleQuantile](https://github.com/xswei/d3-scale/blob/master/README.md#scaleQuantile) - 创建一个分位数比例尺.
* [*quantile*](https://github.com/xswei/d3-scale/blob/master/README.md#_quantile) - 根据输入值计算对应的输出值.
* [*quantile*.invertExtent](https://github.com/xswei/d3-scale/blob/master/README.md#quantile_invertExtent) - 根据输出值计算对应的输入值的范围.
* [*quantile*.domain](https://github.com/xswei/d3-scale/blob/master/README.md#quantile_domain) - 设置输入范围.
* [*quantile*.range](https://github.com/xswei/d3-scale/blob/master/README.md#quantile_range) - 设置输出范围.
* [*quantile*.quantiles](https://github.com/xswei/d3-scale/blob/master/README.md#quantile_quantiles) - 获取分位数比例尺的阈值.
* [*quantile*.copy](https://github.com/xswei/d3-scale/blob/master/README.md#quantile_copy) - 创建一个当前比例尺的副本.
* [d3.scaleThreshold](https://github.com/xswei/d3-scale/blob/master/README.md#scaleThreshold) - 创建一个阈值比例尺.
* [*threshold*](https://github.com/xswei/d3-scale/blob/master/README.md#_threshold) - 根据输入值计算对应的输出值.
* [*threshold*.invertExtent](https://github.com/xswei/d3-scale/blob/master/README.md#threshold_invertExtent) - 根据输出值计算对应的输入区间.
* [*threshold*.domain](https://github.com/xswei/d3-scale/blob/master/README.md#threshold_domain) - 设置输入范围.
* [*threshold*.range](https://github.com/xswei/d3-scale/blob/master/README.md#threshold_range) - 设置输出范围.
* [*threshold*.copy](https://github.com/xswei/d3-scale/blob/master/README.md#threshold_copy) - 创建一个当前比例尺的副本.

### [Ordinal Scales](https://github.com/xswei/d3-scale/blob/master/README.md#ordinal-scales)

将离散的输入域映射到离散的输出域.

* [d3.scaleOrdinal](https://github.com/xswei/d3-scale/blob/master/README.md#scaleOrdinal) - 创建一个序数比例尺.
* [*ordinal*](https://github.com/xswei/d3-scale/blob/master/README.md#_ordinal) - 根据输入值计算对应的输出值.
* [*ordinal*.domain](https://github.com/xswei/d3-scale/blob/master/README.md#ordinal_domain) - 设置输入范围.
* [*ordinal*.range](https://github.com/xswei/d3-scale/blob/master/README.md#ordinal_range) - 设置输出范围.
* [*ordinal*.unknown](https://github.com/xswei/d3-scale/blob/master/README.md#ordinal_unknown) - 设置未知输入的输出值.
* [*ordinal*.copy](https://github.com/xswei/d3-scale/blob/master/README.md#ordinal_copy) - 创建一个当前比例尺的副本.
* [d3.scaleImplicit](https://github.com/xswei/d3-scale/blob/master/README.md#scaleImplicit) - 隐式的未知值.
* [d3.scaleBand](https://github.com/xswei/d3-scale/blob/master/README.md#scaleBand) - 创建一个序数分段比例尺.
* [*band*](https://github.com/xswei/d3-scale/blob/master/README.md#_band) - 根据给定的输入值计算经过映射之后的分段的起点值.
* [*band*.domain](https://github.com/xswei/d3-scale/blob/master/README.md#band_domain) - 设置输入范围.
* [*band*.range](https://github.com/xswei/d3-scale/blob/master/README.md#band_range) - 设置输出范围.
* [*band*.rangeRound](https://github.com/xswei/d3-scale/blob/master/README.md#band_rangeRound) - 设置输出范围并启用四舍五入.
* [*band*.round](https://github.com/xswei/d3-scale/blob/master/README.md#band_round) - 启用四舍五入.
* [*band*.paddingInner](https://github.com/xswei/d3-scale/blob/master/README.md#band_paddingInner) - 设置分段之间的间隔.
* [*band*.paddingOuter](https://github.com/xswei/d3-scale/blob/master/README.md#band_paddingOuter) - 设置第一个和最后一个 `band` 的外边距.
* [*band*.padding](https://github.com/xswei/d3-scale/blob/master/README.md#band_padding) - 设置最外侧以及所有 `band` 之间的间隔.
* [*band*.align](https://github.com/xswei/d3-scale/blob/master/README.md#band_align) - 设置分段的对齐方式.
* [*band*.bandwidth](https://github.com/xswei/d3-scale/blob/master/README.md#band_bandwidth) - 获取每个 `band` 的宽度.
* [*band*.step](https://github.com/xswei/d3-scale/blob/master/README.md#band_step) - 获取两个相邻的 `band` 之间的距离.
* [*band*.copy](https://github.com/xswei/d3-scale/blob/master/README.md#band_copy) - 创建一个当前比例尺的副本.
* [d3.scalePoint](https://github.com/xswei/d3-scale/blob/master/README.md#scalePoint) - 创建一个序数定点比例尺.
* [*point*](https://github.com/xswei/d3-scale/blob/master/README.md#_point) - 根据跟定的输入计算对应的定点值.
* [*point*.domain](https://github.com/xswei/d3-scale/blob/master/README.md#point_domain) - 设置输入范围.
* [*point*.range](https://github.com/xswei/d3-scale/blob/master/README.md#point_range) - 设置输出范围.
* [*point*.rangeRound](https://github.com/xswei/d3-scale/blob/master/README.md#point_rangeRound) - 设置输出范围并且启用四舍五入.
* [*point*.round](https://github.com/xswei/d3-scale/blob/master/README.md#point_round) - 启用四舍五入.
* [*point*.padding](https://github.com/xswei/d3-scale/blob/master/README.md#point_padding) - 设置第一个以及最后一个刻度的外边距.
* [*point*.align](https://github.com/xswei/d3-scale/blob/master/README.md#point_align) - 设置点的对齐方式.
* [*point*.bandwidth](https://github.com/xswei/d3-scale/blob/master/README.md#point_bandwidth) - 返回 `0`.
* [*point*.step](https://github.com/xswei/d3-scale/blob/master/README.md#point_step) - 获取相邻两个点之间的距离.
* [*point*.copy](https://github.com/xswei/d3-scale/blob/master/README.md#point_copy) - 创建一个当前比例尺的副本.

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
* [d3.window](https://github.com/xswei/d3-selection/blob/master/README.md#window) - 获取节点所属的 `window`.
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
* [*selection*.order](https://github.com/xswei/d3-selection/blob/master/README.md#selection_order) - 在文档中重新排列元素.
* [*selection*.raise](https://github.com/xswei/d3-selection/blob/master/README.md#selection_raise) - 将每个选中的元素重新排列为其对应父节点的最后一个子元素.
* [*selection*.lower](https://github.com/xswei/d3-selection/blob/master/README.md#selection_lower) - 将每个选中的元素重新排列为其对应父节点的第一个子元素.
* [d3.create](https://github.com/xswei/d3-selection/blob/master/README.md#create) - 创建一个指定名称的与文档分离的元素.
* [d3.creator](https://github.com/xswei/d3-selection/blob/master/README.md#creator) - 根据名称返回一个创建指定元素的函数.

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

* [*selection*.each](https://github.com/xswei/d3-selection/blob/master/README.md#selection_each) - 为每个选中的元素执行相应的函数.
* [*selection*.call](https://github.com/xswei/d3-selection/blob/master/README.md#selection_call) - 为当前选择集指向相应的函数.
* [*selection*.empty](https://github.com/xswei/d3-selection/blob/master/README.md#selection_empty) - 判断当前选择集是否为空.
* [*selection*.nodes](https://github.com/xswei/d3-selection/blob/master/README.md#selection_nodes) - 以数组的形式返回当前选择集中的所有被选中的元素.
* [*selection*.node](https://github.com/xswei/d3-selection/blob/master/README.md#selection_node) - 返回当前选择集中第一个非空元素.
* [*selection*.size](https://github.com/xswei/d3-selection/blob/master/README.md#selection_size) - 返回选择集中元素选中的数量.

### [Local Variables](https://github.com/xswei/d3-selection/blob/master/README.md#local-variables)

* [d3.local](https://github.com/xswei/d3-selection/blob/master/README.md#local) - 声明一个新的局部变量.
* [*local*.set](https://github.com/xswei/d3-selection/blob/master/README.md#local_set) - 设置一个局部变量的值.
* [*local*.get](https://github.com/xswei/d3-selection/blob/master/README.md#local_get) - 获取一个局部变量的值.
* [*local*.remove](https://github.com/xswei/d3-selection/blob/master/README.md#local_remove) - 移除一个局部变量.
* [*local*.toString](https://github.com/xswei/d3-selection/blob/master/README.md#local_toString) - 获取局部变量的属性标识符.

### [Namespaces](https://github.com/xswei/d3-selection/blob/master/README.md#namespaces)

* [d3.namespace](https://github.com/xswei/d3-selection/blob/master/README.md#namespace) - 限定一个前缀的 `XML` 名称, 比如 “xlink:href”.
* [d3.namespaces](https://github.com/xswei/d3-selection/blob/master/README.md#namespaces) - 内置的 `XML` 命名空间.

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
* [*arc*.padRadius](https://github.com/xswei/d3-shape/blob/master/README.md#arc_padRadius) - 设置半径间隔.
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

曲线或折线，在折线图中使用.

* [d3.line](https://github.com/xswei/d3-shape/blob/master/README.md#line) - 创建一个新的线条生成器.
* [*line*](https://github.com/xswei/d3-shape/blob/master/README.md#_line) - 根据指定的数据集生成一条线.
* [*line*.x](https://github.com/xswei/d3-shape/blob/master/README.md#line_x) - 设置线条生成器的 *x*-访问器.
* [*line*.y](https://github.com/xswei/d3-shape/blob/master/README.md#line_y) - 设置线条生成器的 *y*-访问器.
* [*line*.defined](https://github.com/xswei/d3-shape/blob/master/README.md#line_defined) - 设置 `defined`(缺省) 访问器.
* [*line*.curve](https://github.com/xswei/d3-shape/blob/master/README.md#line_curve) - 设置插值方式.
* [*line*.context](https://github.com/xswei/d3-shape/blob/master/README.md#line_context) - 设置渲染上下文.
* [d3.radialLine](https://github.com/xswei/d3-shape/blob/master/README.md#radialLine) - 创建一个新的放射线条生成器.
* [*radialLine*](https://github.com/xswei/d3-shape/blob/master/README.md#_radialLine) - 根据指定的数据集生成一条线.
* [*radialLine*.angle](https://github.com/xswei/d3-shape/blob/master/README.md#radialLine_angle) - 设置角度访问器.
* [*radialLine*.radius](https://github.com/xswei/d3-shape/blob/master/README.md#radialLine_radius) - 设置半径访问器.
* [*radialLine*.defined](https://github.com/xswei/d3-shape/blob/master/README.md#radialLine_defined) - 设置 `defined`(缺省) 访问器.
* [*radialLine*.curve](https://github.com/xswei/d3-shape/blob/master/README.md#radialLine_curve) - 设置插值方式.
* [*radialLine*.context](https://github.com/xswei/d3-shape/blob/master/README.md#radialLine_context) - 设置渲染上下文.

### [Areas](https://github.com/xswei/d3-shape/blob/master/README.md#areas)

由基线和顶线围成的一块区域，在面积图中使用.

* [d3.area](https://github.com/xswei/d3-shape/blob/master/README.md#area) - 创建一个新的区域生成器.
* [*area*](https://github.com/xswei/d3-shape/blob/master/README.md#_area) - 根据指定的数据集生成一个区域.
* [*area*.x](https://github.com/xswei/d3-shape/blob/master/README.md#area_x) - 设置 *x0* 和 *x1* 访问器.
* [*area*.x0](https://github.com/xswei/d3-shape/blob/master/README.md#area_x0) - 设置基线 *x* 访问器.
* [*area*.x1](https://github.com/xswei/d3-shape/blob/master/README.md#area_x1) - 设置顶线 *x* 访问器.
* [*area*.y](https://github.com/xswei/d3-shape/blob/master/README.md#area_y) - 设置 *y0* 和 *y1* 访问器.
* [*area*.y0](https://github.com/xswei/d3-shape/blob/master/README.md#area_y0) - 设置基线 *y* 访问器.
* [*area*.y1](https://github.com/xswei/d3-shape/blob/master/README.md#area_y1) - 设置顶线 *y* 访问器.
* [*area*.defined](https://github.com/xswei/d3-shape/blob/master/README.md#area_defined) - 设置 `defined`(缺省) 访问器.
* [*area*.curve](https://github.com/xswei/d3-shape/blob/master/README.md#area_curve) - 设置曲线插值方式.
* [*area*.context](https://github.com/xswei/d3-shape/blob/master/README.md#area_context) - 设置渲染上下文.
* [*area*.lineX0](https://github.com/xswei/d3-shape/blob/master/README.md#area_lineX0) - 派生出一条区域左侧边界线条生成器.
* [*area*.lineX1](https://github.com/xswei/d3-shape/blob/master/README.md#area_lineX1) - 派生出一条区域右侧边界线条生成器.
* [*area*.lineY0](https://github.com/xswei/d3-shape/blob/master/README.md#area_lineY0) - 派生出一条区域顶部边界线条生成器.
* [*area*.lineY1](https://github.com/xswei/d3-shape/blob/master/README.md#area_lineY1) - 派生出一条区域底部边界线条生成器.
* [d3.radialArea](https://github.com/xswei/d3-shape/blob/master/README.md#radialArea) - 创建一个新的径向区域生成器.
* [*radialArea*](https://github.com/xswei/d3-shape/blob/master/README.md#_radialArea) - 根据指定的数据集生成一个区域.
* [*radialArea*.angle](https://github.com/xswei/d3-shape/blob/master/README.md#radialArea_angle) - 设置起止角度访问器.
* [*radialArea*.startAngle](https://github.com/xswei/d3-shape/blob/master/README.md#radialArea_startAngle) - 设置起始角度访问器.
* [*radialArea*.endAngle](https://github.com/xswei/d3-shape/blob/master/README.md#radialArea_endAngle) - 设置终止角度访问器.
* [*radialArea*.radius](https://github.com/xswei/d3-shape/blob/master/README.md#radialArea_radius) - 设置内外半径访问器.
* [*radialArea*.innerRadius](https://github.com/xswei/d3-shape/blob/master/README.md#radialArea_innerRadius) - 设置内半径访问器.
* [*radialArea*.outerRadius](https://github.com/xswei/d3-shape/blob/master/README.md#radialArea_outerRadius) - 设置外半径访问器.
* [*radialArea*.defined](https://github.com/xswei/d3-shape/blob/master/README.md#radialArea_defined) - 设置 `defined` 访问器.
* [*radialArea*.curve](https://github.com/xswei/d3-shape/blob/master/README.md#radialArea_curve) - 设置插值方式.
* [*radialArea*.context](https://github.com/xswei/d3-shape/blob/master/README.md#radialArea_context) - 设置渲染上下文.
* [*radialArea*.lineStartAngle](https://github.com/xswei/d3-shape/blob/master/README.md#area_lineStartAngle) - 派生出一条区域起始角度边界线条生成器.
* [*radialArea*.lineEndAngle](https://github.com/xswei/d3-shape/blob/master/README.md#area_lineEndAngle) - 派生出一条区域终止角度边界线条生成器.
* [*radialArea*.lineInnerRadius](https://github.com/xswei/d3-shape/blob/master/README.md#area_lineInnerRadius) - 派生出一条区域内半径边界线条生成器.
* [*radialArea*.lineOuterRadius](https://github.com/xswei/d3-shape/blob/master/README.md#area_lineOuterRadius) - 派生出一条区域外半径边界线条生成器.

### [Curves](https://github.com/xswei/d3-shape/blob/master/README.md#curves)

在一系列点之间进行插值，形成一条连续的线.

* [d3.curveBasis](https://github.com/xswei/d3-shape/blob/master/README.md#curveBasis) - 三次 `basis ` 曲线.
* [d3.curveBasisClosed](https://github.com/xswei/d3-shape/blob/master/README.md#curveBasisClosed) - 闭合的三次 `basis ` 曲线.
* [d3.curveBasisOpen](https://github.com/xswei/d3-shape/blob/master/README.md#curveBasisOpen) - 三次 `basis ` 曲线.
* [d3.curveBundle](https://github.com/xswei/d3-shape/blob/master/README.md#curveBundle) - 可设置张力的三次 `basis ` 曲线.
* [*bundle*.beta](https://github.com/xswei/d3-shape/blob/master/README.md#bundle_beta) - 设置三次 `basis ` 曲线的张力 *beta*.
* [d3.curveCardinal](https://github.com/xswei/d3-shape/blob/master/README.md#curveCardinal) - 三次 `cardinal` 曲线.
* [d3.curveCardinalClosed](https://github.com/xswei/d3-shape/blob/master/README.md#curveCardinalClosed) - 闭合的三次 `cardinal` 曲线.
* [d3.curveCardinalOpen](https://github.com/xswei/d3-shape/blob/master/README.md#curveCardinalOpen) - 三次 `cardinal` 曲线.
* [*cardinal*.tension](https://github.com/xswei/d3-shape/blob/master/README.md#cardinal_tension) - 设置三次 `cardinal` 曲线的张力系数.
* [d3.curveCatmullRom](https://github.com/xswei/d3-shape/blob/master/README.md#curveCatmullRom) - 三次 `Catmull–Rom` 曲线.
* [d3.curveCatmullRomClosed](https://github.com/xswei/d3-shape/blob/master/README.md#curveCatmullRomClosed) - 三次 `Catmull–Rom` 曲线.
* [d3.curveCatmullRomOpen](https://github.com/xswei/d3-shape/blob/master/README.md#curveCatmullRomOpen) - 三次 `Catmull–Rom` 曲线.
* [*catmullRom*.alpha](https://github.com/xswei/d3-shape/blob/master/README.md#catmullRom_alpha) - 设置三次 `Catmull–Rom` 曲线的 *alpha* 参数.
* [d3.curveLinear](https://github.com/xswei/d3-shape/blob/master/README.md#curveLinear) - 折线.
* [d3.curveLinearClosed](https://github.com/xswei/d3-shape/blob/master/README.md#curveLinearClosed) - 闭合的折线.
* [d3.curveMonotoneX](https://github.com/xswei/d3-shape/blob/master/README.md#curveMonotoneX) - 保持 *x* 单调性的三次曲线.
* [d3.curveMonotoneY](https://github.com/xswei/d3-shape/blob/master/README.md#curveMonotoneY) - 保持 *y* 单调性的三次曲线.
* [d3.curveNatural](https://github.com/xswei/d3-shape/blob/master/README.md#curveNatural) - 自然三次样条曲线.
* [d3.curveStep](https://github.com/xswei/d3-shape/blob/master/README.md#curveStep) - 分段常数函数.
* [d3.curveStepAfter](https://github.com/xswei/d3-shape/blob/master/README.md#curveStepAfter) - 分段常数函数.
* [d3.curveStepBefore](https://github.com/xswei/d3-shape/blob/master/README.md#curveStepBefore) - 分段常数函数.
* [*curve*.areaStart](https://github.com/xswei/d3-shape/blob/master/README.md#curve_areaStart) - 开始一个新的区域段.
* [*curve*.areaEnd](https://github.com/xswei/d3-shape/blob/master/README.md#curve_areaEnd) - 结束当前的区域段.
* [*curve*.lineStart](https://github.com/xswei/d3-shape/blob/master/README.md#curve_lineStart) - 开始一个新的线段.
* [*curve*.lineEnd](https://github.com/xswei/d3-shape/blob/master/README.md#curve_lineEnd) - 结束当前的线段end the current line segment.
* [*curve*.point](https://github.com/xswei/d3-shape/blob/master/README.md#curve_point) - 为当前的线段中添加一个点.

### [Links](https://github.com/xswei/d3-shape/blob/master/README.md#links)

源点到目标点之间的圆滑三次 `Bézier` 曲线.

* [d3.linkVertical](https://github.com/xswei/d3-shape/blob/master/README.md#linkVertical) - 创建一个新的垂直 `link` 生成器.
* [d3.linkHorizontal](https://github.com/xswei/d3-shape/blob/master/README.md#linkHorizontal) - 创建一个新的水平的 `link` 生成器.
* [*link*](https://github.com/xswei/d3-shape/blob/master/README.md#_link) - 生成一个 `link`.
* [*link*.source](https://github.com/xswei/d3-shape/blob/master/README.md#link_source) - 设置源点访问器.
* [*link*.target](https://github.com/xswei/d3-shape/blob/master/README.md#link_target) - 设置目标点访问器.
* [*link*.x](https://github.com/xswei/d3-shape/blob/master/README.md#link_x) - 设置点的 *x*-访问器.
* [*link*.y](https://github.com/xswei/d3-shape/blob/master/README.md#link_y) - 设置点的 *y*-访问器.
* [d3.linkRadial](https://github.com/xswei/d3-shape/blob/master/README.md#linkRadial) - 创建一个新的径向 `link` 生成器.
* [*radialLink*.angle](https://github.com/xswei/d3-shape/blob/master/README.md#radialLink_angle) - 设置点的 *angle* 访问器.
* [*radialLink*.radius](https://github.com/xswei/d3-shape/blob/master/README.md#radialLink_radius) - 设置点的 *radius* 访问器.

### [Symbols](https://github.com/xswei/d3-shape/blob/master/README.md#symbols)

分类形状编码，应用于散点图等场景中.

* [d3.symbol](https://github.com/xswei/d3-shape/blob/master/README.md#symbol) - 创建一个新的符号生成器.
* [*symbol*](https://github.com/xswei/d3-shape/blob/master/README.md#_symbol) - 根据指定的数据生成一个符号.
* [*symbol*.type](https://github.com/xswei/d3-shape/blob/master/README.md#symbol_type) - 设置符号的类型.
* [*symbol*.size](https://github.com/xswei/d3-shape/blob/master/README.md#symbol_size) - 以平方像素为单位设置符号的大小.
* [*symbol*.context](https://github.com/xswei/d3-shape/blob/master/README.md#symbol_context) - 设置渲染上下文.
* [d3.symbols](https://github.com/xswei/d3-shape/blob/master/README.md#symbols) - 返回内置的符号类型数组.
* [d3.symbolCircle](https://github.com/xswei/d3-shape/blob/master/README.md#symbolCircle) - 圆.
* [d3.symbolCross](https://github.com/xswei/d3-shape/blob/master/README.md#symbolCross) - 十字.
* [d3.symbolDiamond](https://github.com/xswei/d3-shape/blob/master/README.md#symbolDiamond) - 菱形.
* [d3.symbolSquare](https://github.com/xswei/d3-shape/blob/master/README.md#symbolSquare) - 正方形.
* [d3.symbolStar](https://github.com/xswei/d3-shape/blob/master/README.md#symbolStar) - 五角星.
* [d3.symbolTriangle](https://github.com/xswei/d3-shape/blob/master/README.md#symbolTriangle) - 上三角.
* [d3.symbolWye](https://github.com/xswei/d3-shape/blob/master/README.md#symbolWye) - `Y` 符号.
* [*symbolType*.draw](https://github.com/xswei/d3-shape/blob/master/README.md#symbolType_draw) - 将符号绘制到指定的上下文中.

### [Stacks](https://github.com/xswei/d3-shape/blob/master/README.md#stacks)

堆叠图，堆叠面积、堆叠柱状图等.

* [d3.stack](https://github.com/xswei/d3-shape/blob/master/README.md#stack) - 创建一个新的堆叠生成器.
* [*stack*](https://github.com/xswei/d3-shape/blob/master/README.md#_stack) - 根据给定数据集计算其堆叠图需要的各个属性.
* [*stack*.keys](https://github.com/xswei/d3-shape/blob/master/README.md#stack_keys) - 设置 `keys` 访问器.
* [*stack*.value](https://github.com/xswei/d3-shape/blob/master/README.md#stack_value) - 设置 `value` 访问器.
* [*stack*.order](https://github.com/xswei/d3-shape/blob/master/README.md#stack_order) - 设置排序访问器.
* [*stack*.offset](https://github.com/xswei/d3-shape/blob/master/README.md#stack_offset) - 设置偏移访问器.
* [d3.stackOrderAscending](https://github.com/xswei/d3-shape/blob/master/README.md#stackOrderAscending) - 将和最小的值的序列放在底部.
* [d3.stackOrderDescending](https://github.com/xswei/d3-shape/blob/master/README.md#stackOrderDescending) - 将和最大的值的序列放在底部.
* [d3.stackOrderInsideOut](https://github.com/xswei/d3-shape/blob/master/README.md#stackOrderInsideOut) - 和越大越靠近中间.
* [d3.stackOrderNone](https://github.com/xswei/d3-shape/blob/master/README.md#stackOrderNone) - 使用原始数据的顺序不进行顺序调整.
* [d3.stackOrderReverse](https://github.com/xswei/d3-shape/blob/master/README.md#stackOrderReverse) - 将原始数据顺序逆转.
* [d3.stackOffsetExpand](https://github.com/xswei/d3-shape/blob/master/README.md#stackOffsetExpand) - 将基线设置为 `0` 并且顶线为 `1`.
* [d3.stackOffsetDiverging](https://github.com/xswei/d3-shape/blob/master/README.md#stackOffsetDiverging) - 正值在 `0` 之上，负值在 `0` 之下.
* [d3.stackOffsetNone](https://github.com/xswei/d3-shape/blob/master/README.md#stackOffsetNone) - 使用 `0` 基线.
* [d3.stackOffsetSilhouette](https://github.com/xswei/d3-shape/blob/master/README.md#stackOffsetSilhouette) - 将流图以 `0` 为中心居中.
* [d3.stackOffsetWiggle](https://github.com/xswei/d3-shape/blob/master/README.md#stackOffsetWiggle) - 最小化流图的摆动.

## [Time Formats (d3-time-format)](https://github.com/xswei/d3-time-format)

来自 `strptime` 和 `strftime` 的灵感，时间类型的解析个格式化。

* [d3.timeFormat](https://github.com/xswei/d3-time-format/blob/master/README.md#timeFormat) - 默认时区下 *locale*.format 的别名.
* [d3.timeParse](https://github.com/xswei/d3-time-format/blob/master/README.md#timeParse) - 默认时区下 *locale*.parse 的别名.
* [d3.utcFormat](https://github.com/xswei/d3-time-format/blob/master/README.md#utcFormat) -  默认时区下 *locale*.utcFormat 的别名.
* [d3.utcParse](https://github.com/xswei/d3-time-format/blob/master/README.md#utcParse) -  默认时区下 *locale*.utcParse 的别名.
* [d3.isoFormat](https://github.com/xswei/d3-time-format/blob/master/README.md#isoFormat) - `ISO 8601 UTC` 格式化.
* [d3.isoParse](https://github.com/xswei/d3-time-format/blob/master/README.md#isoParse) - `ISO 8601 UTC` 解析器.
* [d3.timeFormatLocale](https://github.com/xswei/d3-time-format/blob/master/README.md#timeFormatLocale) - 自定义区域.
* [d3.timeFormatDefaultLocale](https://github.com/xswei/d3-time-format/blob/master/README.md#timeFormatDefaultLocale) - 定义默认时区.
* [*locale*.format](https://github.com/xswei/d3-time-format/blob/master/README.md#locale_format) - 创建一个时间格式化.
* [*locale*.parse](https://github.com/xswei/d3-time-format/blob/master/README.md#locale_parse) - 创建一个时间解析器.
* [*locale*.utcFormat](https://github.com/xswei/d3-time-format/blob/master/README.md#locale_utcFormat) - 创建一个 `UTC` 格式化.
* [*locale*.utcParse](https://github.com/xswei/d3-time-format/blob/master/README.md#locale_utcParse) - 创建一个 `UTC` 解析器 .

## [Time Intervals (d3-time)](https://github.com/xswei/d3-time)

按照人类对日期的计算方式实现的日期计算.

* [d3.timeInterval](https://github.com/xswei/d3-time/blob/master/README.md#timeInterval) - 实现一个新的自定义的事件间隔.
* [*interval*](https://github.com/xswei/d3-time/blob/master/README.md#_interval) - *interval*.floor 的别名.
* [*interval*.floor](https://github.com/xswei/d3-time/blob/master/README.md#interval_floor) - 向下取整到最近的间隔边界.
* [*interval*.round](https://github.com/xswei/d3-time/blob/master/README.md#interval_round) - 取整到最近的间隔边界.
* [*interval*.ceil](https://github.com/xswei/d3-time/blob/master/README.md#interval_ceil) - 向上取整到最近的间隔边界.
* [*interval*.offset](https://github.com/xswei/d3-time/blob/master/README.md#interval_offset) - 对指定日期偏移指定的步长.
* [*interval*.range](https://github.com/xswei/d3-time/blob/master/README.md#interval_range) - 生成表示两个日期范围之间的值域.
* [*interval*.filter](https://github.com/xswei/d3-time/blob/master/README.md#interval_filter) - 过滤子集.
* [*interval*.every](https://github.com/xswei/d3-time/blob/master/README.md#interval_every) - 创建一个过滤子集的过滤器.
* [*interval*.count](https://github.com/xswei/d3-time/blob/master/README.md#interval_count) - 统计两个日期之间的数量.
* [d3.timeMillisecond](https://github.com/xswei/d3-time/blob/master/README.md#timeMillisecond), [d3.utcMillisecond](https://github.com/xswei/d3-time/blob/master/README.md#timeMillisecond) - 以毫秒为单位的间隔.
* [d3.timeMilliseconds](https://github.com/xswei/d3-time/blob/master/README.md#timeMillisecond), [d3.utcMilliseconds](https://github.com/xswei/d3-time/blob/master/README.md#timeMillisecond) - millisecond.range 的别名.
* [d3.timeSecond](https://github.com/xswei/d3-time/blob/master/README.md#timeSecond), [d3.utcSecond](https://github.com/xswei/d3-time/blob/master/README.md#timeSecond) -  以秒为单位的间隔..
* [d3.timeSeconds](https://github.com/xswei/d3-time/blob/master/README.md#timeSecond), [d3.utcSeconds](https://github.com/xswei/d3-time/blob/master/README.md#timeSecond) - second.range 的别名.
* [d3.timeMinute](https://github.com/xswei/d3-time/blob/master/README.md#timeMinute), [d3.utcMinute](https://github.com/xswei/d3-time/blob/master/README.md#timeMinute) -  以分钟为单位的间隔.
* [d3.timeMinutes](https://github.com/xswei/d3-time/blob/master/README.md#timeMinute), [d3.utcMinutes](https://github.com/xswei/d3-time/blob/master/README.md#timeMinute) - minute.range 的别名.
* [d3.timeHour](https://github.com/xswei/d3-time/blob/master/README.md#timeHour), [d3.utcHour](https://github.com/xswei/d3-time/blob/master/README.md#timeHour) -  以小时为单位的间隔.
* [d3.timeHours](https://github.com/xswei/d3-time/blob/master/README.md#timeHour), [d3.utcHours](https://github.com/xswei/d3-time/blob/master/README.md#timeHour) - hour.range 的别名.
* [d3.timeDay](https://github.com/xswei/d3-time/blob/master/README.md#timeDay), [d3.utcDay](https://github.com/xswei/d3-time/blob/master/README.md#timeDay) -  以天为单位的间隔.
* [d3.timeDays](https://github.com/xswei/d3-time/blob/master/README.md#timeDay), [d3.utcDays](https://github.com/xswei/d3-time/blob/master/README.md#timeDay) - day.range 的别名.
* [d3.timeWeek](https://github.com/xswei/d3-time/blob/master/README.md#timeWeek), [d3.utcWeek](https://github.com/xswei/d3-time/blob/master/README.md#timeWeek) -  以周为单位的间隔.
* [d3.timeWeeks](https://github.com/xswei/d3-time/blob/master/README.md#timeWeek), [d3.utcWeeks](https://github.com/xswei/d3-time/blob/master/README.md#timeWeek) - week.range 的别名.
* [d3.timeSunday](https://github.com/xswei/d3-time/blob/master/README.md#timeSunday), [d3.utcSunday](https://github.com/xswei/d3-time/blob/master/README.md#timeSunday) -  以周为单位的间隔, 始于周日.
* [d3.timeSundays](https://github.com/xswei/d3-time/blob/master/README.md#timeSunday), [d3.utcSundays](https://github.com/xswei/d3-time/blob/master/README.md#timeSunday) - sunday.range 的别名.
* [d3.timeMonday](https://github.com/xswei/d3-time/blob/master/README.md#timeMonday), [d3.utcMonday](https://github.com/xswei/d3-time/blob/master/README.md#timeMonday) - 以周为单位的间隔, 始于周一.
* [d3.timeMondays](https://github.com/xswei/d3-time/blob/master/README.md#timeMonday), [d3.utcMondays](https://github.com/xswei/d3-time/blob/master/README.md#timeMonday) - monday.range 的别名.
* [d3.timeTuesday](https://github.com/xswei/d3-time/blob/master/README.md#timeTuesday), [d3.utcTuesday](https://github.com/xswei/d3-time/blob/master/README.md#timeTuesday) - 以周为单位的间隔, 始于周二.
* [d3.timeTuesdays](https://github.com/xswei/d3-time/blob/master/README.md#timeTuesday), [d3.utcTuesdays](https://github.com/xswei/d3-time/blob/master/README.md#timeTuesday) - tuesday.range 的别名.
* [d3.timeWednesday](https://github.com/xswei/d3-time/blob/master/README.md#timeWednesday), [d3.utcWednesday](https://github.com/xswei/d3-time/blob/master/README.md#timeWednesday) - 以周为单位的间隔, 始于周三.
* [d3.timeWednesdays](https://github.com/xswei/d3-time/blob/master/README.md#timeWednesday), [d3.utcWednesdays](https://github.com/xswei/d3-time/blob/master/README.md#timeWednesday) - wednesday.range 的别名.
* [d3.timeThursday](https://github.com/xswei/d3-time/blob/master/README.md#timeThursday), [d3.utcThursday](https://github.com/xswei/d3-time/blob/master/README.md#timeThursday) - 以周为单位的间隔, 始于周四.
* [d3.timeThursdays](https://github.com/xswei/d3-time/blob/master/README.md#timeThursday), [d3.utcThursdays](https://github.com/xswei/d3-time/blob/master/README.md#timeThursday) - thursday.range 的别名.
* [d3.timeFriday](https://github.com/xswei/d3-time/blob/master/README.md#timeFriday), [d3.utcFriday](https://github.com/xswei/d3-time/blob/master/README.md#timeFriday) - 以周为单位的间隔, 始于周五.
* [d3.timeFridays](https://github.com/xswei/d3-time/blob/master/README.md#timeFriday), [d3.utcFridays](https://github.com/xswei/d3-time/blob/master/README.md#timeFriday) - friday.range 的别名.
* [d3.timeSaturday](https://github.com/xswei/d3-time/blob/master/README.md#timeSaturday), [d3.utcSaturday](https://github.com/xswei/d3-time/blob/master/README.md#timeSaturday) - 以周为单位的间隔, 始于周六.
* [d3.timeSaturdays](https://github.com/xswei/d3-time/blob/master/README.md#timeSaturday), [d3.utcSaturdays](https://github.com/xswei/d3-time/blob/master/README.md#timeSaturday) - saturday.range 的别名.
* [d3.timeMonth](https://github.com/xswei/d3-time/blob/master/README.md#timeMonth), [d3.utcMonth](https://github.com/xswei/d3-time/blob/master/README.md#timeMonth) - 以月为单位的间隔.
* [d3.timeMonths](https://github.com/xswei/d3-time/blob/master/README.md#timeMonth), [d3.utcMonths](https://github.com/xswei/d3-time/blob/master/README.md#timeMonth) - month.range 的别名.
* [d3.timeYear](https://github.com/xswei/d3-time/blob/master/README.md#timeYear), [d3.utcYear](https://github.com/xswei/d3-time/blob/master/README.md#timeYear) - 以年为单位的间隔.
* [d3.timeYears](https://github.com/xswei/d3-time/blob/master/README.md#timeYear), [d3.utcYears](https://github.com/xswei/d3-time/blob/master/README.md#timeYear) - year.range 的别名.

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
