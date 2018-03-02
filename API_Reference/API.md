# D3 API Reference

D3 4.0是一个相互协同工作的[模块集合](https://github.com/d3); 你可以单独使用其中某些模块也可以使用默认构建的全部功能。每个模块的源码和文档都在对应的仓库中获取到。可以通过下面的链接获取更多信息。D3 3.x 和 4.x 之间的差异可以参考[CHANGES](https://github.com/xswei/d3js_doc/tree/master/Release_Notes/CHANGES.MD); 3.x 的文档可以参考[这里](https://github.com/d3/d3-3.x-api-reference/blob/master/API-Reference.md)

* [Arrays](#arrays-d3-array) ([Statistics](#statistics), [Search](#search), [Transformations](#transformations), [Histograms](#histograms))
* [Axes](#axes-d3-axis)
* [Brushes](#brushes-d3-brush)
* [Chords](#chords-d3-chord)
* [Collections](#collections-d3-collection) ([Objects](#objects), [Maps](#maps), [Sets](#sets), [Nests](#nests))
* [Colors](#colors-d3-color)
* [Color Schemes](#color-schemes-d3-scale-chromatic)(V5 新增模块)
* [Contours](#contours-d3-contour)(V5 新增模块)
* [Dispatches](#dispatches-d3-dispatch)
* [Dragging](#dragging-d3-drag)
* [Delimiter-Separated Values](#delimiter-separated-values-d3-dsv)
* [Easings](#easings-d3-ease)
* [Fetches](#fetches-d3-fetch)(V5 新增模块)
* [Forces](#forces-d3-force)
* [Number Formats](#number-formats-d3-format)
* [Geographies](#geographies-d3-geo) ([Paths](#paths), [Projections](#projections), [Spherical Math](#spherical-math), [Spherical Shapes](#spherical-shapes), [Streams](#streams), [Transforms](#transforms))
* [Hierarchies](#hierarchies-d3-hierarchy)
* [Interpolators](#interpolators-d3-interpolate)
* [Paths](#paths-d3-path)
* [Polygons](#polygons-d3-polygon)
* [Quadtrees](#quadtrees-d3-quadtree)
* [Queues](#queues-d3-queue)
* [Random Numbers](#random-numbers-d3-random)
* [Requests](#requests-d3-request)(V5 移除, 替代品为[Fetches](#fetches-d3-fetch))
* [Scales](#scales-d3-scale) ([Continuous](#continuous-scales), [Sequential](#sequential-scales), [Quantize](#quantize-scales), [Ordinal](#ordinal-scales))
* [Selections](#selections-d3-selection) ([Selecting](#selecting-elements), [Modifying](#modifying-elements), [Data](#joining-data), [Events](#handling-events), [Control](#control-flow), [Local Variables](#local-variables), [Namespaces](#namespaces))
* [Shapes](#shapes-d3-shape) ([Arcs](#arcs), [Pies](#pies), [Lines](#lines), [Areas](#areas), [Curves](#curves), [Links](#links), [Symbols](#symbols), [Stacks](#stacks))
* [Time Formats](#time-formats-d3-time-format)
* [Time Intervals](#time-intervals-d3-time)
* [Timers](#timers-d3-timer)
* [Transitions](#transitions-d3-transition)
* [Voronoi Diagrams](#voronoi-diagrams-d3-voronoi)
* [Zooming](#zooming-d3-zoom)

D3 使用[语义化版本](https://semver.org/lang/zh-CN/). 当前的版本号通过 `d3.version` 暴露.

## [Arrays (d3-array)](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-array/README.md)

**Done**

数组操作，包括排序、查找、汇总等等

### [Statistics](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-array/README.md#statistics)

基本的静态统计计算方法

* [d3.min](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-array/README.md#min) - 计算数组中的最小值.
* [d3.max](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-array/README.md#max) - 计算数组中的最大值.
* [d3.extent](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-array/README.md#extent) - 计算数组中的最大值和最小值.
* [d3.sum](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-array/README.md#sum) - 计算数组元素之和.
* [d3.mean](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-array/README.md#mean) - 计算数组元素的算术中位数.
* [d3.median](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-array/README.md#median) - 计算数组元素的中位数 (也就是 0.5-分位数).
* [d3.quantile](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-array/README.md#quantile) - 计算有序数组的分位数.
* [d3.variance](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-array/README.md#variance) - 计算数组元素的方差.
* [d3.deviation](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-array/README.md#deviation) - 计算数组元素的标准差.

### [Search](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-array/README.md#search)

查找类方法

* [d3.scan](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-array/README.md#scan) - 使用指定的比较器进行线性查找指定的元素.
* [d3.bisect](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-array/README.md#bisect) - 二分查找有序数组中指定元素的索引.
* [d3.bisectRight](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-array/README.md#bisectRight) - 二分查找有序数组中指定元素的索引.
* [d3.bisectLeft](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-array/README.md#bisectLeft) - 二分查找有序数组中指定元素的索引.
* [d3.bisector](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-array/README.md#bisector) - 用指定的访问器或比较器对二分查找.
* [*bisector*.left](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-array/README.md#bisector_left) - 与bisectLeft类似, 可以指定比较器.
* [*bisector*.right](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-array/README.md#bisector_right) - 与bisectRight类似, 可以指定比较器.
* [d3.ascending](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-array/README.md#ascending) - 计算两个值的自然顺序.
* [d3.descending](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-array/README.md#descending) - 计算两个值的自然顺序.

### [Transformations](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-array/README.md#transformations)

数组变换和计算，返回新的数组

* [d3.cross](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-array/README.md#cross) - 计算两个数组的笛卡尔积.
* [d3.merge](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-array/README.md#merge) - 将多个数组合并为一个.
* [d3.pairs](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-array/README.md#pairs) - 将数组中相邻的两个元素两两结合.
* [d3.permute](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-array/README.md#permute) - 根据指定的索引返回对数组重排后的结果.
* [d3.shuffle](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-array/README.md#shuffle) - 随机打乱数组顺序
* [d3.ticks](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-array/README.md#ticks) - 从给定的区间范围内生成一系列值.
* [d3.tickIncrement](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-array/README.md#tickIncrement) - 从给定的区间范围内生成一系列值.
* [d3.tickStep](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-array/README.md#tickStep) - 从给定的区间范围内生成一系列值.
* [d3.range](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-array/README.md#range) - 根据指定的区间生成一系列值.
* [d3.transpose](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-array/README.md#transpose) - 将数组的数组进行转置.
* [d3.zip](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-array/README.md#zip) - 转置多个数组.

### [Histograms](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-array/README.md#histograms)

直方图将离散样本分成连续的，不重叠的区间。

* [d3.histogram](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-array/README.md#histogram) - 创建一个新的直方图生成器.
* [*histogram*](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-array/README.md#_histogram) - 根据给定的数组计算直方图.
* [*histogram*.value](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-array/README.md#histogram_value) - 设置或获取直方图值访问器.
* [*histogram*.domain](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-array/README.md#histogram_domain) - 设置或获取直方图的可观测区间.
* [*histogram*.thresholds](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-array/README.md#histogram_thresholds) - 设置直方图阈值(生成方式).
* [d3.thresholdFreedmanDiaconis](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-array/README.md#thresholdFreedmanDiaconis) - Freedman–Diaconis直方图生成规则.
* [d3.thresholdScott](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-array/README.md#thresholdScott) - Scott’s normal reference 直方图生成规则.
* [d3.thresholdSturges](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-array/README.md#thresholdSturges) - Sturges’ 直方图生成规则.

## [Axes (d3-axis)](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-axis)

**Done**

基于比例尺提供人类友好的标尺刻度

* [d3.axisTop](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-axis/README.md#axisTop) - 创建一个新的刻度在上的坐标轴生成器
* [d3.axisRight](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-axis/README.md#axisRight) - 创建一个新的刻度在右的坐标轴生成器
* [d3.axisBottom](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-axis/README.md#axisBottom) - 创建一个新的刻度在下的坐标轴生成器
* [d3.axisLeft](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-axis/README.md#axisLeft) - 创建一个新的刻度在左的坐标轴生成器
* [*axis*](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-axis/README.md#_axis) - 为指定的选择器生成一个坐标轴
* [*axis*.scale](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-axis/README.md#axis_scale) - 设置坐标轴的比例尺
* [*axis*.ticks](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-axis/README.md#axis_ticks) - 自定义刻度的显示方式以及格式化刻度
* [*axis*.tickArguments](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-axis/README.md#axis_tickArguments) - 自定义如何生成刻度或者格式化刻度
* [*axis*.tickValues](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-axis/README.md#axis_tickValues) - 指定固定的刻度值
* [*axis*.tickFormat](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-axis/README.md#axis_tickFormat) - 指定固定的刻度格式化方式.
* [*axis*.tickSize](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-axis/README.md#axis_tickSize) - 设置刻度大小.
* [*axis*.tickSizeInner](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-axis/README.md#axis_tickSizeInner) - 设置内侧刻度大小.
* [*axis*.tickSizeOuter](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-axis/README.md#axis_tickSizeOuter) - 设置外侧(坐标轴两端)刻度大小.
* [*axis*.tickPadding](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-axis/README.md#axis_tickPadding) - 设置刻度和刻度文本之间的间距.

## [Brushes (d3-brush)](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-brush)

**Done**

使用鼠标或触摸选择一维或二维区域。

* [d3.brush](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-brush/README.md#brush) - 创建一个新的二维刷取交互
* [d3.brushX](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-brush/README.md#brushX) - 创建一个新的*x*-维度的刷取交互
* [d3.brushY](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-brush/README.md#brushY) - 创建一个新的*y*-维度的刷取交互
* [*brush*](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-brush/README.md#_brush) - 将刷取操作应用到一个`selection`上
* [*brush*.move](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-brush/README.md#brush_move) - 移动刷取框选
* [*brush*.extent](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-brush/README.md#brush_extent) - 定义可刷取的范围
* [*brush*.filter](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-brush/README.md#brush_filter) - 过滤器定义哪些事件不触发刷取操作
* [*brush*.handleSize](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-brush/README.md#brush_handleSize) - 设置刷取把柄的大小
* [*brush*.on](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-brush/README.md#brush_on) - 注册刷取事件句柄
* [d3.brushSelection](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-brush/README.md#brushSelection) - 获取指定节点的刷取范围

## [Chords (d3-chord)](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-chord)

**Done**

* [d3.chord](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-chord/README.md#chord) - 创建一个新的弦图布局.
* [*chord*](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-chord/README.md#_chord) - 根据指定的方阵计算布局.
* [*chord*.padAngle](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-chord/README.md#chord_padAngle) - 设置相邻的分组之间的间隔
* [*chord*.sortGroups](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-chord/README.md#chord_sortGroups) - 定义分组排序规则
* [*chord*.sortSubgroups](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-chord/README.md#chord_sortSubgroups) - 定义分组内部子分组的排序规则
* [*chord*.sortChords](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-chord/README.md#chord_sortChords) - 定义弦之间的排序规则
* [d3.ribbon](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-chord/README.md#ribbon) - 创建一个ribbon(弦)生成器
* [*ribbon*](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-chord/README.md#_ribbon) - 根据指定的数据返回一个path路径以表示弦.
* [*ribbon*.source](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-chord/README.md#ribbon_source) - 设置ribbon的源访问器.
* [*ribbon*.target](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-chord/README.md#ribbon_target) - 设置ribbon的目标访问器.
* [*ribbon*.radius](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-chord/README.md#ribbon_radius) - 设置ribbon的半径.
* [*ribbon*.startAngle](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-chord/README.md#ribbon_startAngle) - 设置ribbon的起始角度访问器.
* [*ribbon*.endAngle](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-chord/README.md#ribbon_endAngle) - 设置ribbon的终止角度访问器.
* [*ribbon*.context](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-chord/README.md#ribbon_context) - 设置渲染上下文(canvas用).

## [Collections (d3-collection)](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-collection)

**Done**

一组方便的数据结构。

### [Objects](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-collection/README.md#objects)

将关联数组(对象)转为数组的一组方法

* [d3.keys](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-collection/README.md#keys) - 关联数组中所有的键
* [d3.values](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-collection/README.md#values) - 关联数组中所有的值
* [d3.entries](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-collection/README.md#entries) - 将关联数组转为`key-value`形式的对象数组

### [Maps](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-collection/README.md#maps)

与ES6的Map类似，但是有些不同

* [d3.map](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-collection/README.md#map) - 创建一个新的空的map映射.
* [*map*.has](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-collection/README.md#map_has) - 当map映射中有给定的`key`时返回true
* [*map*.get](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-collection/README.md#map_get) - 根据指定的`key`返回对应的值
* [*map*.set](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-collection/README.md#map_set) - 设置指定的`key`对应的值为指定的值
* [*map*.remove](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-collection/README.md#map_remove) - 移除指定的`key`以及值
* [*map*.clear](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-collection/README.md#map_clear) - 清空map映射中所有的项
* [*map*.keys](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-collection/README.md#map_keys) - 以数组的形式获取map映射中的`key`
* [*map*.values](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-collection/README.md#map_values) - 以数组的形式获取map映射中的`value`
* [*map*.entries](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-collection/README.md#map_entries) - 以数组的形式获取map映射中的`key-values`对象
* [*map*.each](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-collection/README.md#map_each) - 遍历每一项并执行指定的方法.
* [*map*.empty](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-collection/README.md#map_empty) - 判断map映射是否为空
* [*map*.size](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-collection/README.md#map_size) - 计算map映射中项的数目

### [Sets](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-collection/README.md#sets)

与ES6的Set类似，但是有些不同

* [d3.set](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-collection/README.md#set) - 创建一个新的空的集合
* [*set*.has](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-collection/README.md#set_has) - 判断集合中是否包含给定的值
* [*set*.add](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-collection/README.md#set_add) - 将指定的值添加到集合中
* [*set*.remove](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-collection/README.md#set_remove) - 移除集合中指定的值
* [*set*.clear](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-collection/README.md#set_clear) - 清空集合中所有的值
* [*set*.values](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-collection/README.md#set_values) - 以数组的形式获取集合中的所有值
* [*set*.each](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-collection/README.md#set_each) - 为集合中每一个值执行指定的函数
* [*set*.empty](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-collection/README.md#set_empty) - 判断集合是否为空
* [*set*.size](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-collection/README.md#set_size) - 获取集合中项的多少

### [Nests](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-collection/README.md#nests)

根据指定的规则将数组重组为层次结构

* [d3.nest](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-collection/README.md#nest) - 创建一个新的嵌套对象.
* [*nest*.key](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-collection/README.md#nest_key) - 为嵌套操作添加一个`key`作为分层依据
* [*nest*.sortKeys](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-collection/README.md#nest_sortKeys) - 根据`key`对当前层次的进行排序
* [*nest*.sortValues](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-collection/README.md#nest_sortValues) - 根据`value`对当叶节点进行排序
* [*nest*.rollup](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-collection/README.md#nest_rollup) - 为叶节点指定一个rollup(归纳)函数
* [*nest*.map](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-collection/README.md#nest_map) - 生成嵌套结果，并返回一个map映射
* [*nest*.object](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-collection/README.md#nest_object) - 生成嵌套结果并返回一个关联数组
* [*nest*.entries](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-collection/README.md#nest_entries) - 生成嵌套结果，并返回一组`key-value`元组

## [Colors (d3-color)](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-color)

**Done**

颜色空间以及转换

* [d3.color](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-color/README.md#color) - 转换指定的CSS颜色字符串.
* [*color*.rgb](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-color/README.md#color_rgb) - 计算当前颜色值的RGB表示.
* [*color*.brighter](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-color/README.md#color_brighter) - 创建一个更亮的颜色副本.
* [*color*.darker](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-color/README.md#color_darker) - 创建一个更暗的颜色副本
* [*color*.displayable](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-color/README.md#color_displayable) - 判断当前设备是否支持当前颜色
* [*color*.toString](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-color/README.md#color_toString) - 将当前颜色转为RGB颜色的十六进制表示
* [d3.rgb](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-color/README.md#rgb) - 创建一个新的RGB颜色.
* [d3.hsl](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-color/README.md#hsl) - 创建一个新的HSL颜色.
* [d3.lab](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-color/README.md#lab) - 创建一个新的Lab颜色.
* [d3.hcl](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-color/README.md#hcl) - 创建一个新的HCL颜色.
* [d3.cubehelix](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-color/README.md#cubehelix) - 创建一个新的Cubehelix颜色.

## [Color Schemes (d3-scale-chromatic)](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-scale-chromatic/README.md)

Color ramps and palettes for quantitative, ordinal and categorical scales.

### Categorical

* [d3.schemeCategory10](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-scale-chromatic/README.md#schemeCategory10) -
* [d3.schemeAccent](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-scale-chromatic/README.md#schemeAccent) -
* [d3.schemeDark2](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-scale-chromatic/README.md#schemeDark2) -
* [d3.schemePaired](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-scale-chromatic/README.md#schemePaired) -
* [d3.schemePastel1](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-scale-chromatic/README.md#schemePastel1) -
* [d3.schemePastel2](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-scale-chromatic/README.md#schemePastel2) -
* [d3.schemeSet1](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-scale-chromatic/README.md#schemeSet1) -
* [d3.schemeSet2](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-scale-chromatic/README.md#schemeSet2) -
* [d3.schemeSet3](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-scale-chromatic/README.md#schemeSet3) -

### Diverging

* [d3.interpolateBrBG](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-scale-chromatic/README.md) -
* [d3.interpolatePiYG](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-scale-chromatic/README.md) -
* [d3.interpolatePRGn](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-scale-chromatic/README.md) -
* [d3.interpolatePuOr](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-scale-chromatic/README.md) -
* [d3.interpolateRdBu](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-scale-chromatic/README.md) -
* [d3.interpolateRdGy](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-scale-chromatic/README.md) -
* [d3.interpolateRdYlBu](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-scale-chromatic/README.md) -
* [d3.interpolateRdYlGn](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-scale-chromatic/README.md) -
* [d3.interpolateSpectral](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-scale-chromatic/README.md) -
* [d3.schemeBrBG](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-scale-chromatic/README.md#schemeBrBG) -
* [d3.schemePiYG](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-scale-chromatic/README.md#schemePiYG) -
* [d3.schemePRGn](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-scale-chromatic/README.md#schemePRGn) -
* [d3.schemePuOr](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-scale-chromatic/README.md#schemePuOr) -
* [d3.schemeRdBu](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-scale-chromatic/README.md#schemeRdBu) -
* [d3.schemeRdGy](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-scale-chromatic/README.md#schemeRdGy) -
* [d3.schemeRdYlBu](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-scale-chromatic/README.md#schemeRdYlBu) -
* [d3.schemeRdYlGn](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-scale-chromatic/README.md#schemeRdYlGn) -
* [d3.schemeSpectral](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-scale-chromatic/README.md#schemeSpectral) -

### Sequential (Single Hue)

* [d3.interpolateBlues](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-scale-chromatic/README.md) -
* [d3.interpolateGreens](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-scale-chromatic/README.md) -
* [d3.interpolateGreys](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-scale-chromatic/README.md) -
* [d3.interpolateOranges](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-scale-chromatic/README.md) -
* [d3.interpolatePurples](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-scale-chromatic/README.md) -
* [d3.interpolateReds](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-scale-chromatic/README.md) -
* [d3.schemeBlues](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-scale-chromatic/README.md#schemeBlues) -
* [d3.schemeGreens](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-scale-chromatic/README.md#schemeGreens) -
* [d3.schemeGreys](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-scale-chromatic/README.md#schemeGreys) -
* [d3.schemeOranges](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-scale-chromatic/README.md#schemeOranges) -
* [d3.schemePurples](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-scale-chromatic/README.md#schemePurples) -
* [d3.schemeReds](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-scale-chromatic/README.md#schemeReds) -

### Sequential (Multi-Hue)

* [d3.interpolateBuGn](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-scale-chromatic/README.md) -
* [d3.interpolateBuPu](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-scale-chromatic/README.md) -
* [d3.interpolateCool](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-scale-chromatic/README.md) -
* [d3.interpolateCubehelixDefault](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-scale-chromatic/README.md) -
* [d3.interpolateGnBu](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-scale-chromatic/README.md) -
* [d3.interpolateInferno](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-scale-chromatic/README.md) -
* [d3.interpolateMagma](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-scale-chromatic/README.md) -
* [d3.interpolateOrRd](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-scale-chromatic/README.md) -
* [d3.interpolatePlasma](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-scale-chromatic/README.md) -
* [d3.interpolatePuBu](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-scale-chromatic/README.md) -
* [d3.interpolatePuBuGn](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-scale-chromatic/README.md) -
* [d3.interpolatePuRd](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-scale-chromatic/README.md) -
* [d3.interpolateRdPu](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-scale-chromatic/README.md) -
* [d3.interpolateViridis](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-scale-chromatic/README.md) -
* [d3.interpolateWarm](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-scale-chromatic/README.md) -
* [d3.interpolateYlGn](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-scale-chromatic/README.md) -
* [d3.interpolateYlGnBu](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-scale-chromatic/README.md) -
* [d3.interpolateYlOrBr](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-scale-chromatic/README.md) -
* [d3.interpolateYlOrRd](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-scale-chromatic/README.md) -
* [d3.schemeBuGn](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-scale-chromatic/README.md#schemeBuGn) -
* [d3.schemeBuPu](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-scale-chromatic/README.md#schemeBuPu) -
* [d3.schemeGnBu](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-scale-chromatic/README.md#schemeGnBu) -
* [d3.schemeOrRd](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-scale-chromatic/README.md#schemeOrRd) -
* [d3.schemePuBu](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-scale-chromatic/README.md#schemePuBu) -
* [d3.schemePuBuGn](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-scale-chromatic/README.md#schemePuBuGn) -
* [d3.schemePuRd](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-scale-chromatic/README.md#schemePuRd) -
* [d3.schemeRdPu](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-scale-chromatic/README.md#schemeRdPu) -
* [d3.schemeYlGn](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-scale-chromatic/README.md#schemeYlGn) -
* [d3.schemeYlGnBu](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-scale-chromatic/README.md#schemeYlGnBu) -
* [d3.schemeYlOrBr](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-scale-chromatic/README.md#schemeYlOrBr) -
* [d3.schemeYlOrRd](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-scale-chromatic/README.md#schemeYlOrRd) -

### Cyclical

* [d3.interpolateRainbow](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-scale-chromatic/README.md) -

## [Contours (d3-contour)](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-contour/README.md)

Compute contour polygons using marching squares.

* [d3.contours](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-contour/README.md#contours) - create a new contour generator.
* *contours* - compute the contours for a given grid of values.
* *contours*.size -
* *contours*.smooth -
* *contours*.thresholds -
* [d3.contourDensity](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-contour/README.md#contourDensity) - create a new density estimator.
* *density* - estimate the density of a given array of samples.
* *density*.x -
* *density*.y -
* *density*.cellSize -
* *density*.thresholds -
* *density*.bandwidth -

## [Dispatches (d3-dispatch)](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-dispatch)

**Done**

使用命名回调函数分离关注点

* [d3.dispatch](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-dispatch/README.md#dispatch) - 创建一个自定义事件分发器
* [*dispatch*.on](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-dispatch/README.md#dispatch_on) - 注册或取消注册事件监听器
* [*dispatch*.copy](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-dispatch/README.md#dispatch_copy) - 创建分发器的副本
* [*dispatch*.*call*](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-dispatch/README.md#dispatch_call) - 分发事件到注册的事件监听器
* [*dispatch*.*apply*](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-dispatch/README.md#dispatch_apply) - 分发事件到注册事件监听器

## [Dragging (d3-drag)](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-drag)

Drag and drop SVG, HTML or Canvas using mouse or touch input.

* [d3.drag](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-drag/README.md#drag) - create a drag behavior.
* [*drag*](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-drag/README.md#_drag) - apply the drag behavior to a selection.
* [*drag*.container](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-drag/README.md#drag_container) - set the coordinate system.
* [*drag*.filter](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-drag/README.md#drag_filter) - ignore some initiating input events.
* [*drag*.touchable](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-drag/README.md#drag_touchable) - set the touch support detector.
* [*drag*.subject](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-drag/README.md#drag_subject) - set the thing being dragged.
* [*drag*.clickDistance](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-drag/README.md#drag_clickDistance) - set the click distance threshold.
* [*drag*.on](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-drag/README.md#drag_on) - listen for drag events.
* [*event*.on](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-drag/README.md#event_on) - listen for drag events on the current gesture.
* [d3.dragDisable](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-drag/README.md#dragDisable) - prevent native drag-and-drop and text selection.
* [d3.dragEnable](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-drag/README.md#dragEnable) - enable native drag-and-drop and text selection.

## [Delimiter-Separated Values (d3-dsv)](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-dsv)

Parse and format delimiter-separated values, most commonly CSV and TSV.

* [d3.dsvFormat](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-dsv/README.md#dsvFormat) - create a new parser and formatter for the given delimiter.
* [*dsv*.parse](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-dsv/README.md#dsv_parse) - parse the given string, returning an array of objects.
* [*dsv*.parseRows](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-dsv/README.md#dsv_parseRows) - parse the given string, returning an array of rows.
* [*dsv*.format](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-dsv/README.md#dsv_format) - format the given array of objects.
* [*dsv*.formatRows](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-dsv/README.md#dsv_formatRows) - format the given array of rows.
* [d3.csvParse](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-dsv/README.md#csvParse) - parse the given CSV string, returning an array of objects.
* [d3.csvParseRows](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-dsv/README.md#csvParseRows) - parse the given CSV string, returning an array of rows.
* [d3.csvFormat](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-dsv/README.md#csvFormat) - format the given array of objects as CSV.
* [d3.csvFormatRows](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-dsv/README.md#csvFormatRows) - format the given array of rows as CSV.
* [d3.tsvParse](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-dsv/README.md#tsvParse) - parse the given TSV string, returning an array of objects.
* [d3.tsvParseRows](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-dsv/README.md#tsvParseRows) - parse the given TSV string, returning an array of rows.
* [d3.tsvFormat](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-dsv/README.md#tsvFormat) - format the given array of objects as TSV.
* [d3.tsvFormatRows](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-dsv/README.md#tsvFormatRows) - format the given array of rows as TSV.

## [Easings (d3-ease)](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-ease)

Easing functions for smooth animation.

* [*ease*](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-ease/README.md#_ease) - ease the given normalized time.
* [d3.easeLinear](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-ease/README.md#easeLinear) - linear easing; the identity function.
* [d3.easePolyIn](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-ease/README.md#easePolyIn) - polynomial easing; raises time to the given power.
* [d3.easePolyOut](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-ease/README.md#easePolyOut) - reverse polynomial easing.
* [d3.easePolyInOut](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-ease/README.md#easePolyInOut) - symmetric polynomial easing.
* [*poly*.exponent](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-ease/README.md#poly_exponent) - specify the polynomial exponent.
* [d3.easeQuad](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-ease/README.md#easeQuad) - an alias for easeQuadInOut.
* [d3.easeQuadIn](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-ease/README.md#easeQuadIn) - quadratic easing; squares time.
* [d3.easeQuadOut](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-ease/README.md#easeQuadOut) - reverse quadratic easing.
* [d3.easeQuadInOut](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-ease/README.md#easeQuadInOut) - symmetric quadratic easing.
* [d3.easeCubic](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-ease/README.md#easeCubic) - an alias for easeCubicInOut.
* [d3.easeCubicIn](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-ease/README.md#easeCubicIn) - cubic easing; cubes time.
* [d3.easeCubicOut](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-ease/README.md#easeCubicOut) - reverse cubic easing.
* [d3.easeCubicInOut](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-ease/README.md#easeCubicInOut) - symmetric cubic easing.
* [d3.easeSin](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-ease/README.md#easeSin) - an alias for easeSinInOut.
* [d3.easeSinIn](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-ease/README.md#easeSinIn) - sinusoidal easing.
* [d3.easeSinOut](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-ease/README.md#easeSinOut) - reverse sinusoidal easing.
* [d3.easeSinInOut](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-ease/README.md#easeSinInOut) - symmetric sinusoidal easing.
* [d3.easeExp](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-ease/README.md#easeExp) - an alias for easeExpInOut.
* [d3.easeExpIn](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-ease/README.md#easeExpIn) - exponential easing.
* [d3.easeExpOut](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-ease/README.md#easeExpOut) - reverse exponential easing.
* [d3.easeExpInOut](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-ease/README.md#easeExpInOut) - symmetric exponential easing.
* [d3.easeCircle](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-ease/README.md#easeCircle) - an alias for easeCircleInOut.
* [d3.easeCircleIn](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-ease/README.md#easeCircleIn) - circular easing.
* [d3.easeCircleOut](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-ease/README.md#easeCircleOut) - reverse circular easing.
* [d3.easeCircleInOut](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-ease/README.md#easeCircleInOut) - symmetric circular easing.
* [d3.easeElastic](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-ease/README.md#easeElastic) - an alias for easeElasticOut.
* [d3.easeElasticIn](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-ease/README.md#easeElasticIn) - elastic easing, like a rubber band.
* [d3.easeElasticOut](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-ease/README.md#easeElasticOut) - reverse elastic easing.
* [d3.easeElasticInOut](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-ease/README.md#easeElasticInOut) - symmetric elastic easing.
* [*elastic*.amplitude](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-ease/README.md#elastic_amplitude) - specify the elastic amplitude.
* [*elastic*.period](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-ease/README.md#elastic_period) - specify the elastic period.
* [d3.easeBack](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-ease/README.md#easeBack) - an alias for easeBackInOut.
* [d3.easeBackIn](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-ease/README.md#easeBackIn) - anticipatory easing, like a dancer bending his knees before jumping.
* [d3.easeBackOut](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-ease/README.md#easeBackOut) - reverse anticipatory easing.
* [d3.easeBackInOut](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-ease/README.md#easeBackInOut) - symmetric anticipatory easing.
* [*back*.overshoot](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-ease/README.md#back_overshoot) - specify the amount of overshoot.
* [d3.easeBounce](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-ease/README.md#easeBounce) - an alias for easeBounceOut.
* [d3.easeBounceIn](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-ease/README.md#easeBounceIn) - bounce easing, like a rubber ball.
* [d3.easeBounceOut](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-ease/README.md#easeBounceOut) - reverse bounce easing.
* [d3.easeBounceInOut](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-ease/README.md#easeBounceInOut) - symmetric bounce easing.

## [Fetches (d3-fetch)](https://github.com/xswei/d3-fetch)

Convenience methods on top of the Fetch API.

* [d3.blob](https://github.com/xswei/d3-fetch/blob/master/README.md#blob) - 以 blob 的形式获取文件.
* [d3.buffer](https://github.com/xswei/d3-fetch/blob/master/README.md#buffer) - 以 array buffer 的形式获取文件.
* [d3.csv](https://github.com/xswei/d3-fetch/blob/master/README.md#csv) - 获取逗号分隔符(CSV)文件get a comma-separated values (CSV) file.
* [d3.dsv](https://github.com/xswei/d3-fetch/blob/master/README.md#dsv) - get a delimiter-separated values (CSV) file.以 blob 的形式获取文件.
* [d3.image](https://github.com/xswei/d3-fetch/blob/master/README.md#image) - get an image.以 blob 的形式获取文件.
* [d3.json](https://github.com/xswei/d3-fetch/blob/master/README.md#json) - get a JSON file.以 blob 的形式获取文件.
* [d3.text](https://github.com/xswei/d3-fetch/blob/master/README.md#text) - get a plain text file.
* [d3.tsv](https://github.com/xswei/d3-fetch/blob/master/README.md#tsv) - get a tab-separated values (TSV) file.

## [Forces (d3-force)](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-force)

Force-directed graph layout using velocity Verlet integration.

* [d3.forceSimulation](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-force/README.md#forceSimulation) - create a new force simulation.
* [*simulation*.restart](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-force/README.md#simulation_restart) - reheat and restart the simulation’s timer.
* [*simulation*.stop](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-force/README.md#simulation_stop) - stop the simulation’s timer.
* [*simulation*.tick](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-force/README.md#simulation_tick) - advance the simulation one step.
* [*simulation*.nodes](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-force/README.md#simulation_nodes) - set the simulation’s nodes.
* [*simulation*.alpha](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-force/README.md#simulation_alpha) - set the current alpha.
* [*simulation*.alphaMin](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-force/README.md#simulation_alphaMin) - set the minimum alpha threshold.
* [*simulation*.alphaDecay](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-force/README.md#simulation_alphaDecay) - set the alpha exponential decay rate.
* [*simulation*.alphaTarget](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-force/README.md#simulation_alphaTarget) - set the target alpha.
* [*simulation*.velocityDecay](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-force/README.md#simulation_velocityDecay) - set the velocity decay rate.
* [*simulation*.force](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-force/README.md#simulation_force) - add or remove a force.
* [*simulation*.find](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-force/README.md#simulation_find) - find the closest node to the given position.
* [*simulation*.on](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-force/README.md#simulation_on) - add or remove an event listener.
* [*force*](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-force/README.md#_force) - apply the force.
* [*force*.initialize](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-force/README.md#force_initialize) - initialize the force with the given nodes.
* [d3.forceCenter](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-force/README.md#forceCenter) - create a centering force.
* [*center*.x](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-force/README.md#center_x) - set the center *x*-coordinate.
* [*center*.y](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-force/README.md#center_y) - set the center *y*-coordinate.
* [d3.forceCollide](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-force/README.md#forceCollide) - create a circle collision force.
* [*collide*.radius](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-force/README.md#collide_radius) - set the circle radius.
* [*collide*.strength](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-force/README.md#collide_strength) - set the collision resolution strength.
* [*collide*.iterations](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-force/README.md#collide_iterations) - set the number of iterations.
* [d3.forceLink](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-force/README.md#forceLink) - create a link force.
* [*link*.links](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-force/README.md#link_links) - set the array of links.
* [*link*.id](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-force/README.md#link_id) - link nodes by numeric index or string identifier.
* [*link*.distance](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-force/README.md#link_distance) - set the link distance.
* [*link*.strength](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-force/README.md#link_strength) - set the link strength.
* [*link*.iterations](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-force/README.md#link_iterations) - set the number of iterations.
* [d3.forceManyBody](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-force/README.md#forceManyBody) - create a many-body force.
* [*manyBody*.strength](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-force/README.md#manyBody_strength) - set the force strength.
* [*manyBody*.theta](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-force/README.md#manyBody_theta) - set the Barnes–Hut approximation accuracy.
* [*manyBody*.distanceMin](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-force/README.md#manyBody_distanceMin) - limit the force when nodes are close.
* [*manyBody*.distanceMax](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-force/README.md#manyBody_distanceMax) - limit the force when nodes are far.
* [d3.forceX](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-force/README.md#forceX) - create an *x*-positioning force.
* [*x*.strength](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-force/README.md#x_strength) - set the force strength.
* [*x*.x](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-force/README.md#x_x) - set the target *x*-coordinate.
* [d3.forceY](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-force/README.md#forceY) - create an *y*-positioning force.
* [*y*.strength](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-force/README.md#y_strength) - set the force strength.
* [*y*.y](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-force/README.md#y_y) - set the target *y*-coordinate.
* [d3.forceRadial](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-force/README.md#forceRadial) - create a radial positioning force.
* [*radial*.strength](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-force/README.md#radial_strength) - set the force strength.
* [*radial*.radius](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-force/README.md#radial_radius) - set the target radius.
* [*radial*.x](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-force/README.md#radial_x) - set the target center *x*-coordinate.
* [*radial*.y](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-force/README.md#radial_y) - set the target center *y*-coordinate.

## [Number Formats (d3-format)](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-format)

Format numbers for human consumption.

* [d3.format](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-format/README.md#format) - alias for *locale*.format on the default locale.
* [d3.formatPrefix](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-format/README.md#formatPrefix) - alias for *locale*.formatPrefix on the default locale.
* [d3.formatSpecifier](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-format/README.md#formatSpecifier) - parse a number format specifier.
* [d3.formatLocale](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-format/README.md#formatLocale) - define a custom locale.
* [d3.formatDefaultLocale](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-format/README.md#formatDefaultLocale) - define the default locale.
* [*locale*.format](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-format/README.md#locale_format) - create a number format.
* [*locale*.formatPrefix](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-format/README.md#locale_formatPrefix) - create a SI-prefix number format.
* [d3.precisionFixed](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-format/README.md#precisionFixed) - compute decimal precision for fixed-point notation.
* [d3.precisionPrefix](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-format/README.md#precisionPrefix) - compute decimal precision for SI-prefix notation.
* [d3.precisionRound](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-format/README.md#precisionRound) - compute significant digits for rounded notation.

## [Geographies (d3-geo)](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo)

Geographic projections, shapes and math.

### [Paths](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#paths)

* [d3.geoPath](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#geoPath) - create a new geographic path generator.
* [*path*](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#_path) - project and render the specified feature.
* [*path*.area](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#path_area) - compute the projected planar area of a given feature.
* [*path*.bounds](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#path_bounds) - compute the projected planar bounding box of a given feature.
* [*path*.centroid](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#path_centroid) - compute the projected planar centroid of a given feature.
* [*path*.measure](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#path_measure) - compute the projected planar length of a given feature.
* [*path*.projection](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#path_projection) - set the geographic projection.
* [*path*.context](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#path_context) - set the render context.
* [*path*.pointRadius](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#path_pointRadius) - set the radius to display point features.

### [Projections](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#projections)

* [*projection*](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#_projection) - project the specified point from the sphere to the plane.
* [*projection*.invert](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#projection_invert) - unproject the specified point from the plane to the sphere.
* [*projection*.stream](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#projection_stream) - wrap the specified stream to project geometry.
* [*projection*.clipAngle](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#projection_clipAngle) - set the radius of the clip circle.
* [*projection*.clipExtent](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#projection_clipExtent) - set the viewport clip extent, in pixels.
* [*projection*.scale](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#projection_scale) - set the scale factor.
* [*projection*.translate](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#projection_translate) - set the translation offset.
* [*projection*.fitExtent](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#projection_fitExtent) - set the scale and translate to fit a GeoJSON object.
* [*projection*.fitSize](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#projection_fitSize) - set the scale and translate to fit a GeoJSON object.
* [*projection*.fitWidth](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#projection_fitWidth) - set the scale and translate to fit a GeoJSON object.
* [*projection*.fitHeight](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#projection_fitHeight) - set the scale and translate to fit a GeoJSON object.
* [*projection*.center](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#projection_center) - set the center point.
* [*projection*.rotate](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#projection_rotate) - set the three-axis spherical rotation angles.
* [*projection*.precision](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#projection_precision) - set the precision threshold for adaptive sampling.
* [*projection*.preclip](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#projection.preclip) - set the spherical clipping stream transform.
* [*projection*.postclip](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#projection.postclip) - set the planar clipping stream transform.
* [d3.geoClipAntimeridian](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#geoClipAntimeridian) - cuts spherical geometries that cross the antimeridian.
* [d3.geoClipCircle](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#geoClipCircle) - clips spherical geometries to a small circle.
* [d3.geoClipRectangle](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#geoClipRectangle) - clips planar geometries to a rectangular viewport.
* [d3.geoAlbers](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#geoAlbers) - the Albers equal-area conic projection.
* [d3.geoAlbersUsa](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#geoAlbersUsa) - a composite Albers projection for the United States.
* [d3.geoAzimuthalEqualArea](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#geoAzimuthalEqualArea) - the azimuthal equal-area projection.
* [d3.geoAzimuthalEquidistant](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#geoAzimuthalEquidistant) - the azimuthal equidistant projection.
* [d3.geoConicConformal](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#geoConicConformal) - the conic conformal projection.
* [d3.geoConicEqualArea](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#geoConicEqualArea) - the conic equal-area (Albers) projection.
* [d3.geoConicEquidistant](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#geoConicEquidistant) - the conic equidistant projection.
* [*conic*.parallels](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#conic_parallels) - set the two standard parallels.
* [d3.geoEquirectangular](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#geoEquirectangular) - the equirectangular (plate carreé) projection.
* [d3.geoGnomonic](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#geoGnomonic) - the gnomonic projection.
* [d3.geoMercator](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#geoMercator) - the spherical Mercator projection.
* [d3.geoOrthographic](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#geoOrthographic) - the azimuthal orthographic projection.
* [d3.geoStereographic](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#geoStereographic) - the azimuthal stereographic projection.
* [d3.geoTransverseMercator](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#geoTransverseMercator) - the transverse spherical Mercator projection.
* [*project*](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#_project) - project the specified point from the sphere to the plane.
* [*project*.invert](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#project_invert) - unproject the specified point from the plane to the sphere.
* [d3.geoProjection](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#geoProjection) - create a custom projection.
* [d3.geoProjectionMutator](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#geoProjectionMutator) - create a custom configurable projection.
* [d3.geoAzimuthalEqualAreaRaw](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#geoAzimuthalEqualAreaRaw) - the raw azimuthal equal-area projection.
* [d3.geoAzimuthalEquidistantRaw](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#geoAzimuthalEquidistantRaw) - the raw azimuthal equidistant projection.
* [d3.geoConicConformalRaw](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#geoConicConformalRaw) - the raw conic conformal projection.
* [d3.geoConicEqualAreaRaw](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#geoConicEqualAreaRaw) - the raw conic equal-area (Albers) projection.
* [d3.geoConicEquidistantRaw](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#geoConicEquidistantRaw) - the raw conic equidistant projection.
* [d3.geoEquirectangularRaw](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#geoEquirectangularRaw) - the raw equirectangular (plate carreé) projection.
* [d3.geoGnomonicRaw](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#geoGnomonicRaw) - the raw gnomonic projection.
* [d3.geoMercatorRaw](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#geoMercatorRaw) - the raw Mercator projection.
* [d3.geoOrthographicRaw](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#geoOrthographicRaw) - the raw azimuthal orthographic projection.
* [d3.geoStereographicRaw](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#geoStereographicRaw) - the raw azimuthal stereographic projection.
* [d3.geoTransverseMercatorRaw](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#geoTransverseMercatorRaw) - the raw transverse spherical Mercator projection.

### [Spherical Math](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#spherical-math)

* [d3.geoArea](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#geoArea) - compute the spherical area of a given feature.
* [d3.geoBounds](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#geoBounds) - compute the latitude-longitude bounding box for a given feature.
* [d3.geoCentroid](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#geoCentroid) - compute the spherical centroid of a given feature.
* [d3.geoContains](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#geoContains) - test whether a point is inside a given feature.
* [d3.geoDistance](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#geoDistance) - compute the great-arc distance between two points.
* [d3.geoLength](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#geoLength) - compute the length of a line string or the perimeter of a polygon.
* [d3.geoInterpolate](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#geoInterpolate) - interpolate between two points along a great arc.
* [d3.geoRotation](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#geoRotation) - create a rotation function for the specified angles.
* [*rotation*](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#_rotation) - rotate the given point around the sphere.
* [*rotation*.invert](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#rotation_invert) - unrotate the given point around the sphere.

### [Spherical Shapes](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#spherical-shapes)

* [d3.geoCircle](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#geoCircle) - create a circle generator.
* [*circle*](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#_circle) - generate a piecewise circle as a Polygon.
* [*circle*.center](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#circle_center) - specify the circle center in latitude and longitude.
* [*circle*.radius](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#circle_radius) - specify the angular radius in degrees.
* [*circle*.precision](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#circle_precision) - specify the precision of the piecewise circle.
* [d3.geoGraticule](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#geoGraticule) - create a graticule generator.
* [*graticule*](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#_graticule) - generate a MultiLineString of meridians and parallels.
* [*graticule*.lines](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#graticule_lines) - generate an array of LineStrings of meridians and parallels.
* [*graticule*.outline](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#graticule_outline) - generate a Polygon of the graticule’s extent.
* [*graticule*.extent](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#graticule_extent) - get or set the major & minor extents.
* [*graticule*.extentMajor](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#graticule_extentMajor) - get or set the major extent.
* [*graticule*.extentMinor](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#graticule_extentMinor) - get or set the minor extent.
* [*graticule*.step](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#graticule_step) - get or set the major & minor step intervals.
* [*graticule*.stepMajor](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#graticule_stepMajor) - get or set the major step intervals.
* [*graticule*.stepMinor](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#graticule_stepMinor) - get or set the minor step intervals.
* [*graticule*.precision](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#graticule_precision) - get or set the latitudinal precision.
* [d3.geoGraticule10](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#geoGraticule10) - generate the default 10° global graticule.

#### [Streams](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#streams)

* [d3.geoStream](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#geoStream) - convert a GeoJSON object to a geometry stream.
* [*stream*.point](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#stream_point) - indicates a point with the specified coordinates.
* [*stream*.lineStart](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#stream_lineStart) - indicates the start of a line or ring.
* [*stream*.lineEnd](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#stream_lineEnd) - indicates the end of a line or ring.
* [*stream*.polygonStart](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#stream_polygonStart) - indicates the start of a polygon.
* [*stream*.polygonEnd](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#stream_polygonEnd) - indicates the end of a polygon.
* [*stream*.sphere](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#stream_sphere) - indicates the sphere.

### [Transforms](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#transforms)

* [d3.geoIdentity](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#geoIdentity) - scale, translate or clip planar geometry.
* [*identity*.reflectX](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#identity_reflectX) - reflect the *x*-dimension.
* [*identity*.reflectY](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#identity_reflectY) - reflect the *y*-dimension.
* [d3.geoTransform](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-geo/README.md#geoTransform) - define a custom geometry transform.

## [Hierarchies (d3-hierarchy)](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-hierarchy)

Layout algorithms for visualizing hierarchical data.

* [d3.hierarchy](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-hierarchy/README.md#hierarchy) - constructs a root node from hierarchical data.
* [*node*.ancestors](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-hierarchy/README.md#node_ancestors) - generate an array of ancestors.
* [*node*.descendants](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-hierarchy/README.md#node_descendants) - generate an array of descendants.
* [*node*.leaves](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-hierarchy/README.md#node_leaves) - generate an array of leaves.
* [*node*.path](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-hierarchy/README.md#node_path) - generate the shortest path to another node.
* [*node*.links](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-hierarchy/README.md#node_links) - generate an array of links.
* [*node*.sum](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-hierarchy/README.md#node_sum) - evaluate and aggregate quantitative values.
* [*node*.sort](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-hierarchy/README.md#node_sort) - sort all descendant siblings.
* [*node*.count](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-hierarchy/README.md#node_count) - count the number of leaves.
* [*node*.each](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-hierarchy/README.md#node_each) - breadth-first traversal.
* [*node*.eachAfter](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-hierarchy/README.md#node_eachAfter) - post-order traversal.
* [*node*.eachBefore](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-hierarchy/README.md#node_eachBefore) - pre-order traversal.
* [*node*.copy](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-hierarchy/README.md#node_copy) - copy a hierarchy.
* [d3.stratify](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-hierarchy/README.md#stratify) - create a new stratify operator.
* [*stratify*](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-hierarchy/README.md#_stratify) - construct a root node from tabular data.
* [*stratify*.id](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-hierarchy/README.md#stratify_id) - set the node id accessor.
* [*stratify*.parentId](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-hierarchy/README.md#stratify_parentId) - set the parent node id accessor.
* [d3.cluster](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-hierarchy/README.md#cluster) - create a new cluster (dendrogram) layout.
* [*cluster*](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-hierarchy/README.md#_cluster) - layout the specified hierarchy in a dendrogram.
* [*cluster*.size](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-hierarchy/README.md#cluster_size) - set the layout size.
* [*cluster*.nodeSize](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-hierarchy/README.md#cluster_nodeSize) - set the node size.
* [*cluster*.separation](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-hierarchy/README.md#cluster_separation) - set the separation between leaves.
* [d3.tree](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-hierarchy/README.md#tree) - create a new tidy tree layout.
* [*tree*](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-hierarchy/README.md#_tree) - layout the specified hierarchy in a tidy tree.
* [*tree*.size](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-hierarchy/README.md#tree_size) - set the layout size.
* [*tree*.nodeSize](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-hierarchy/README.md#tree_nodeSize) - set the node size.
* [*tree*.separation](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-hierarchy/README.md#tree_separation) - set the separation between nodes.
* [d3.treemap](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-hierarchy/README.md#treemap) - create a new treemap layout.
* [*treemap*](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-hierarchy/README.md#_treemap) - layout the specified hierarchy as a treemap.
* [*treemap*.tile](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-hierarchy/README.md#treemap_tile) - set the tiling method.
* [*treemap*.size](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-hierarchy/README.md#treemap_size) - set the layout size.
* [*treemap*.round](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-hierarchy/README.md#treemap_round) - set whether the output coordinates are rounded.
* [*treemap*.padding](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-hierarchy/README.md#treemap_padding) - set the padding.
* [*treemap*.paddingInner](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-hierarchy/README.md#treemap_paddingInner) - set the padding between siblings.
* [*treemap*.paddingOuter](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-hierarchy/README.md#treemap_paddingOuter) - set the padding between parent and children.
* [*treemap*.paddingTop](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-hierarchy/README.md#treemap_paddingTop) - set the padding between the parent’s top edge and children.
* [*treemap*.paddingRight](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-hierarchy/README.md#treemap_paddingRight) - set the padding between the parent’s right edge and children.
* [*treemap*.paddingBottom](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-hierarchy/README.md#treemap_paddingBottom) - set the padding between the parent’s bottom edge and children.
* [*treemap*.paddingLeft](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-hierarchy/README.md#treemap_paddingLeft) - set the padding between the parent’s left edge and children.
* [d3.treemapBinary](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-hierarchy/README.md#treemapBinary) - tile using a balanced binary tree.
* [d3.treemapDice](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-hierarchy/README.md#treemapDice) - tile into a horizontal row.
* [d3.treemapSlice](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-hierarchy/README.md#treemapSlice) - tile into a vertical column.
* [d3.treemapSliceDice](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-hierarchy/README.md#treemapSliceDice) - alternate between slicing and dicing.
* [d3.treemapSquarify](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-hierarchy/README.md#treemapSquarify) - tile using squarified rows per Bruls *et. al.*
* [d3.treemapResquarify](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-hierarchy/README.md#treemapResquarify) - like d3.treemapSquarify, but performs stable updates.
* [*squarify*.ratio](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-hierarchy/README.md#squarify_ratio) - set the desired rectangle aspect ratio.
* [d3.partition](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-hierarchy/README.md#partition) - create a new partition (icicle or sunburst) layout.
* [*partition*](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-hierarchy/README.md#_partition) - layout the specified hierarchy as a partition diagram.
* [*partition*.size](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-hierarchy/README.md#partition_size) - set the layout size.
* [*partition*.round](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-hierarchy/README.md#partition_round) - set whether the output coordinates are rounded.
* [*partition*.padding](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-hierarchy/README.md#partition_padding) - set the padding.
* [d3.pack](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-hierarchy/README.md#pack) - create a new circle-packing layout.
* [*pack*](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-hierarchy/README.md#_pack) - layout the specified hierarchy using circle-packing.
* [*pack*.radius](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-hierarchy/README.md#pack_radius) - set the radius accessor.
* [*pack*.size](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-hierarchy/README.md#pack_size) - set the layout size.
* [*pack*.padding](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-hierarchy/README.md#pack_padding) - set the padding.
* [d3.packSiblings](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-hierarchy/README.md#packSiblings) - pack the specified array of circles.
* [d3.packEnclose](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-hierarchy/README.md#packEnclose) - enclose the specified array of circles.

## [Interpolators (d3-interpolate)](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-interpolate)

Interpolate numbers, colors, strings, arrays, objects, whatever!

* [d3.interpolate](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-interpolate/README.md#interpolate) - interpolate arbitrary values.
* [d3.interpolateArray](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-interpolate/README.md#interpolateArray) - interpolate arrays of arbitrary values.
* [d3.interpolateDate](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-interpolate/README.md#interpolateDate) - interpolate dates.
* [d3.interpolateNumber](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-interpolate/README.md#interpolateNumber) - interpolate numbers.
* [d3.interpolateObject](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-interpolate/README.md#interpolateObject) - interpolate arbitrary objects.
* [d3.interpolateRound](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-interpolate/README.md#interpolateRound) - interpolate integers.
* [d3.interpolateString](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-interpolate/README.md#interpolateString) - interpolate strings with embedded numbers.
* [d3.interpolateTransformCss](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-interpolate/README.md#interpolateTransformCss) - interpolate 2D CSS transforms.
* [d3.interpolateTransformSvg](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-interpolate/README.md#interpolateTransformSvg) - interpolate 2D SVG transforms.
* [d3.interpolateZoom](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-interpolate/README.md#interpolateZoom) - zoom and pan between two views.
* [d3.interpolateRgb](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-interpolate/README.md#interpolateRgb) - interpolate RGB colors.
* [d3.interpolateRgbBasis](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-interpolate/README.md#interpolateRgbBasis) - generate a B-spline through a set of colors.
* [d3.interpolateRgbBasisClosed](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-interpolate/README.md#interpolateRgbBasisClosed) - generate a closed B-spline through a set of colors.
* [d3.interpolateHsl](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-interpolate/README.md#interpolateHsl) - interpolate HSL colors.
* [d3.interpolateHslLong](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-interpolate/README.md#interpolateHslLong) - interpolate HSL colors, the long way.
* [d3.interpolateLab](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-interpolate/README.md#interpolateLab) - interpolate Lab colors.
* [d3.interpolateHcl](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-interpolate/README.md#interpolateHcl) - interpolate HCL colors.
* [d3.interpolateHclLong](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-interpolate/README.md#interpolateHclLong) - interpolate HCL colors, the long way.
* [d3.interpolateCubehelix](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-interpolate/README.md#interpolateCubehelix) - interpolate Cubehelix colors.
* [d3.interpolateCubehelixLong](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-interpolate/README.md#interpolateCubehelixLong) - interpolate Cubehelix colors, the long way.
* [*interpolate*.gamma](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-interpolate/README.md#interpolate_gamma) - apply gamma correction during interpolation.
* [d3.interpolateBasis](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-interpolate/README.md#interpolateBasis) - generate a B-spline through a set of values.
* [d3.interpolateBasisClosed](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-interpolate/README.md#interpolateBasisClosed) - generate a closed B-spline through a set of values.
* [d3.quantize](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-interpolate/README.md#quantize) - generate uniformly-spaced samples from an interpolator.

## [Paths (d3-path)](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-path)

Serialize Canvas path commands to SVG.

* [d3.path](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-path/README.md#path) - create a new path serializer.
* [*path*.moveTo](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-path/README.md#path_moveTo) - move to the given point.
* [*path*.closePath](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-path/README.md#path_closePath) - close the current subpath.
* [*path*.lineTo](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-path/README.md#path_lineTo) - draw a straight line segment.
* [*path*.quadraticCurveTo](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-path/README.md#path_quadraticCurveTo) - draw a quadratic Bézier segment.
* [*path*.bezierCurveTo](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-path/README.md#path_bezierCurveTo) - draw a cubic Bézier segment.
* [*path*.arcTo](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-path/README.md#path_arcTo) - draw a circular arc segment.
* [*path*.arc](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-path/README.md#path_arc) - draw a circular arc segment.
* [*path*.rect](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-path/README.md#path_rect) - draw a rectangle.
* [*path*.toString](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-path/README.md#path_toString) - serialize to an SVG path data string.

## [Polygons (d3-polygon)](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-polygon)

Geometric operations for two-dimensional polygons.

* [d3.polygonArea](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-polygon/README.md#polygonArea) - compute the area of the given polygon.
* [d3.polygonCentroid](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-polygon/README.md#polygonCentroid) - compute the centroid of the given polygon.
* [d3.polygonHull](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-polygon/README.md#polygonHull) - compute the convex hull of the given points.
* [d3.polygonContains](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-polygon/README.md#polygonContains) - test whether a point is inside a polygon.
* [d3.polygonLength](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-polygon/README.md#polygonLength) - compute the length of the given polygon’s perimeter.

## [Quadtrees (d3-quadtree)](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-quadtree)

Two-dimensional recursive spatial subdivision.

* [d3.quadtree](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-quadtree/README.md#quadtree) - create a new, empty quadtree.
* [*quadtree*.x](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-quadtree/README.md#quadtree_x) - set the *x* accessor.
* [*quadtree*.y](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-quadtree/README.md#quadtree_y) - set the *y* accessor.
* [*quadtree*.add](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-quadtree/README.md#quadtree_add) - add a datum to a quadtree.
* [*quadtree*.addAll](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-quadtree/README.md#quadtree_addAll) - add an array of data to a quadtree.
* [*quadtree*.remove](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-quadtree/README.md#quadtree_remove) - remove a datum from a quadtree.
* [*quadtree*.removeAll](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-quadtree/README.md#quadtree_removeAll) - remove an array of data from a quadtree.
* [*quadtree*.copy](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-quadtree/README.md#quadtree_copy) - create a copy of a quadtree.
* [*quadtree*.root](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-quadtree/README.md#quadtree_root) - get the quadtree’s root node.
* [*quadtree*.data](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-quadtree/README.md#quadtree_data) - retrieve all data from the quadtree.
* [*quadtree*.size](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-quadtree/README.md#quadtree_size) - count the number of data in the quadtree.
* [*quadtree*.find](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-quadtree/README.md#quadtree_find) - quickly find the closest datum in a quadtree.
* [*quadtree*.visit](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-quadtree/README.md#quadtree_visit) - selectively visit nodes in a quadtree.
* [*quadtree*.visitAfter](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-quadtree/README.md#quadtree_visitAfter) - visit all nodes in a quadtree.
* [*quadtree*.cover](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-quadtree/README.md#quadtree_cover) - extend the quadtree to cover a point.
* [*quadtree*.extent](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-quadtree/README.md#quadtree_extent) - extend the quadtree to cover an extent.

## [Queues (d3-queue)](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-queue)

Evaluate asynchronous tasks with configurable concurrency.

* [d3.queue](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-queue/README.md#queue) - manage the concurrent evaluation of asynchronous tasks.
* [*queue*.defer](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-queue/README.md#queue_defer) - register a task for evaluation.
* [*queue*.abort](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-queue/README.md#queue_abort) - abort any active tasks and cancel any pending ones.
* [*queue*.await](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-queue/README.md#queue_await) - register a callback for when tasks complete.
* [*queue*.awaitAll](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-queue/README.md#queue_awaitAll) - register a callback for when tasks complete.

## [Random Numbers (d3-random)](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-random)

Generate random numbers from various distributions.

* [d3.randomUniform](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-random/README.md#randomUniform) - from a uniform distribution.
* [d3.randomNormal](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-random/README.md#randomNormal) - from a normal distribution.
* [d3.randomLogNormal](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-random/README.md#randomLogNormal) - from a log-normal distribution.
* [d3.randomBates](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-random/README.md#randomBates) - from a Bates distribution.
* [d3.randomIrwinHall](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-random/README.md#randomIrwinHall) - from an Irwin–Hall distribution.
* [d3.randomExponential](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-random/README.md#randomExponential) - from an exponential distribution.
* [*random*.source](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-random/README.md#random_source) - set the source of randomness.

## [Requests (d3-request)](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-request)

A convenient alternative to asynchronous XMLHttpRequest.

* [d3.request](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-request/README.md#request) - make an asynchronous request.
* [*request*.header](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-request/README.md#request_header) - set a request header.
* [*request*.user](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-request/README.md#request_user) - set the user for authentication.
* [*request*.password](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-request/README.md#request_password) - set the password for authentication.
* [*request*.mimeType](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-request/README.md#request_mimeType) - set the MIME type.
* [*request*.timeout](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-request/README.md#request_timeout) - set the timeout in milliseconds.
* [*request*.responseType](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-request/README.md#request_responseType) - set the response type.
* [*request*.response](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-request/README.md#request_response) - set the response function.
* [*request*.get](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-request/README.md#request_get) - send a GET request.
* [*request*.post](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-request/README.md#request_post) - send a POST request.
* [*request*.send](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-request/README.md#request_send) - set the request.
* [*request*.abort](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-request/README.md#request_abort) - abort the request.
* [*request*.on](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-request/README.md#request_on) - listen for a request event.
* [d3.csv](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-request/README.md#csv) - get a comma-separated values (CSV) file.
* [d3.html](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-request/README.md#html) - get an HTML file.
* [d3.json](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-request/README.md#json) - get a JSON file.
* [d3.text](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-request/README.md#text) - get a plain text file.
* [d3.tsv](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-request/README.md#tsv) - get a tab-separated values (TSV) file.
* [d3.xml](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-request/README.md#xml) - get an XML file.

## [Scales (d3-scale)](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale)

Encodings that map abstract data to visual representation.

### [Continuous Scales](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#continuous-scales)

Map a continuous, quantitative domain to a continuous range.

* [*continuous*](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#_continuous) - compute the range value corresponding to a given domain value.
* [*continuous*.invert](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#continuous_invert) - compute the domain value corresponding to a given range value.
* [*continuous*.domain](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#continuous_domain) - set the input domain.
* [*continuous*.range](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#continuous_range) - set the output range.
* [*continuous*.rangeRound](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#continuous_rangeRound) - set the output range and enable rounding.
* [*continuous*.clamp](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#continuous_clamp) - enable clamping to the domain or range.
* [*continuous*.interpolate](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#continuous_interpolate) - set the output interpolator.
* [*continuous*.ticks](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#continuous_ticks) - compute representative values from the domain.
* [*continuous*.tickFormat](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#continuous_tickFormat) - format ticks for human consumption.
* [*continuous*.nice](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#continuous_nice) - extend the domain to nice round numbers.
* [*continuous*.copy](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#continuous_copy) - create a copy of this scale.
* [d3.scaleLinear](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#scaleLinear) - create a quantitative linear scale.
* [d3.scalePow](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#scalePow) - create a quantitative power scale.
* [*pow*](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#_pow) - compute the range value corresponding to a given domain value.
* [*pow*.invert](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#pow_invert) - compute the domain value corresponding to a given range value.
* [*pow*.exponent](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#pow_exponent) - set the power exponent.
* [*pow*.domain](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#pow_domain) - set the input domain.
* [*pow*.range](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#pow_range) - set the output range.
* [*pow*.rangeRound](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#pow_rangeRound) - set the output range and enable rounding.
* [*pow*.clamp](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#pow_clamp) - enable clamping to the domain or range.
* [*pow*.interpolate](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#pow_interpolate) - set the output interpolator.
* [*pow*.ticks](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#pow_ticks) - compute representative values from the domain.
* [*pow*.tickFormat](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#pow_tickFormat) - format ticks for human consumption.
* [*pow*.nice](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#pow_nice) - extend the domain to nice round numbers.
* [*pow*.copy](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#pow_copy) - create a copy of this scale.
* [d3.scaleSqrt](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#scaleSqrt) - create a quantitative power scale with exponent 0.5.
* [d3.scaleLog](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#scaleLog) - create a quantitative logarithmic scale.
* [*log*](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#_log) - compute the range value corresponding to a given domain value.
* [*log*.invert](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#log_invert) - compute the domain value corresponding to a given range value.
* [*log*.base](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#log_base) - set the logarithm base.
* [*log*.domain](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#log_domain) - set the input domain.
* [*log*.range](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#log_range) - set the output range.
* [*log*.rangeRound](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#log_rangeRound) - set the output range and enable rounding.
* [*log*.clamp](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#log_clamp) - enable clamping to the domain or range.
* [*log*.interpolate](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#log_interpolate) - set the output interpolator.
* [*log*.ticks](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#log_ticks) - compute representative values from the domain.
* [*log*.tickFormat](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#log_tickFormat) - format ticks for human consumption.
* [*log*.nice](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#log_nice) - extend the domain to nice round numbers.
* [*log*.copy](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#log_copy) - create a copy of this scale.
* [d3.scaleIdentity](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#identity) - create a quantitative identity scale.
* [d3.scaleTime](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#scaleTime) - create a linear scale for time.
* [*time*](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#_time) - compute the range value corresponding to a given domain value.
* [*time*.invert](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#time_invert) - compute the domain value corresponding to a given range value.
* [*time*.domain](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#time_domain) - set the input domain.
* [*time*.range](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#time_range) - set the output range.
* [*time*.rangeRound](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#time_rangeRound) - set the output range and enable rounding.
* [*time*.clamp](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#time_clamp) - enable clamping to the domain or range.
* [*time*.interpolate](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#time_interpolate) - set the output interpolator.
* [*time*.ticks](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#time_ticks) - compute representative values from the domain.
* [*time*.tickFormat](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#time_tickFormat) - format ticks for human consumption.
* [*time*.nice](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#time_nice) - extend the domain to nice round times.
* [*time*.copy](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#time_copy) - create a copy of this scale.
* [d3.scaleUtc](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#scaleUtc) - create a linear scale for UTC.

### [Sequential Scales](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#sequential-scales)

Map a continuous, quantitative domain to a continuous, fixed interpolator.

* [d3.scaleSequential](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#scaleSequential) - create a sequential scale.
* [*sequential*.interpolator](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#sequential_interpolator) - set the scale’s output interpolator.
* [d3.interpolateViridis](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#interpolateViridis) - a dark-to-light color scheme.
* [d3.interpolateInferno](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#interpolateInferno) - a dark-to-light color scheme.
* [d3.interpolateMagma](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#interpolateMagma) - a dark-to-light color scheme.
* [d3.interpolatePlasma](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#interpolatePlasma) - a dark-to-light color scheme.
* [d3.interpolateWarm](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#interpolateWarm) - a rotating-hue color scheme.
* [d3.interpolateCool](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#interpolateCool) - a rotating-hue color scheme.
* [d3.interpolateRainbow](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#interpolateRainbow) - a cyclical rotating-hue color scheme.
* [d3.interpolateCubehelixDefault](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#interpolateCubehelixDefault) - a dark-to-light, rotating-hue color scheme.

### [Quantize Scales](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#quantize-scales)

Map a continuous, quantitative domain to a discrete range.

* [d3.scaleQuantize](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#scaleQuantize) - create a uniform quantizing linear scale.
* [*quantize*](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#_quantize) - compute the range value corresponding to a given domain value.
* [*quantize*.invertExtent](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#quantize_invertExtent) - compute the domain values corresponding to a given range value.
* [*quantize*.domain](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#quantize_domain) - set the input domain.
* [*quantize*.range](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#quantize_range) - set the output range.
* [*quantize*.nice](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#quantize_nice) - extend the domain to nice round numbers.
* [*quantize*.ticks](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#quantize_ticks) - compute representative values from the domain.
* [*quantize*.tickFormat](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#quantize_tickFormat) - format ticks for human consumption.
* [*quantize*.copy](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#quantize_copy) - create a copy of this scale.
* [d3.scaleQuantile](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#scaleQuantile) - create a quantile quantizing linear scale.
* [*quantile*](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#_quantile) - compute the range value corresponding to a given domain value.
* [*quantile*.invertExtent](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#quantile_invertExtent) - compute the domain values corresponding to a given range value.
* [*quantile*.domain](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#quantile_domain) - set the input domain.
* [*quantile*.range](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#quantile_range) - set the output range.
* [*quantile*.quantiles](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#quantile_quantiles) - get the quantile thresholds.
* [*quantile*.copy](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#quantile_copy) - create a copy of this scale.
* [d3.scaleThreshold](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#scaleThreshold) - create an arbitrary quantizing linear scale.
* [*threshold*](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#_threshold) - compute the range value corresponding to a given domain value.
* [*threshold*.invertExtent](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#threshold_invertExtent) - compute the domain values corresponding to a given range value.
* [*threshold*.domain](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#threshold_domain) - set the input domain.
* [*threshold*.range](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#threshold_range) - set the output range.
* [*threshold*.copy](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#threshold_copy) - create a copy of this scale.

### [Ordinal Scales](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#ordinal-scales)

Map a discrete domain to a discrete range.

* [d3.scaleOrdinal](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#scaleOrdinal) - create an ordinal scale.
* [*ordinal*](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#_ordinal) - compute the range value corresponding to a given domain value.
* [*ordinal*.domain](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#ordinal_domain) - set the input domain.
* [*ordinal*.range](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#ordinal_range) - set the output range.
* [*ordinal*.unknown](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#ordinal_unknown) - set the output value for unknown inputs.
* [*ordinal*.copy](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#ordinal_copy) - create a copy of this scale.
* [d3.scaleImplicit](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#scaleImplicit) - a special unknown value for implicit domains.
* [d3.scaleBand](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#scaleBand) - create an ordinal band scale.
* [*band*](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#_band) - compute the band start corresponding to a given domain value.
* [*band*.domain](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#band_domain) - set the input domain.
* [*band*.range](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#band_range) - set the output range.
* [*band*.rangeRound](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#band_rangeRound) - set the output range and enable rounding.
* [*band*.round](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#band_round) - enable rounding.
* [*band*.paddingInner](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#band_paddingInner) - set padding between bands.
* [*band*.paddingOuter](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#band_paddingOuter) - set padding outside the first and last bands.
* [*band*.padding](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#band_padding) - set padding outside and between bands.
* [*band*.align](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#band_align) - set band alignment, if there is extra space.
* [*band*.bandwidth](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#band_bandwidth) - get the width of each band.
* [*band*.step](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#band_step) - get the distance between the starts of adjacent bands.
* [*band*.copy](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#band_copy) - create a copy of this scale.
* [d3.scalePoint](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#scalePoint) - create an ordinal point scale.
* [*point*](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#_point) - compute the point corresponding to a given domain value.
* [*point*.domain](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#point_domain) - set the input domain.
* [*point*.range](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#point_range) - set the output range.
* [*point*.rangeRound](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#point_rangeRound) - set the output range and enable rounding.
* [*point*.round](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#point_round) - enable rounding.
* [*point*.padding](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#point_padding) - set padding outside the first and last point.
* [*point*.align](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#point_align) - set point alignment, if there is extra space.
* [*point*.bandwidth](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#point_bandwidth) - returns zero.
* [*point*.step](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#point_step) - get the distance between the starts of adjacent points.
* [*point*.copy](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#point_copy) - create a copy of this scale.
* [d3.schemeCategory10](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#schemeCategory10) - a categorical scheme with 10 colors.
* [d3.schemeCategory20](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#schemeCategory20) - a categorical scheme with 20 colors.
* [d3.schemeCategory20b](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#schemeCategory20b) - a categorical scheme with 20 colors.
* [d3.schemeCategory20c](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-scale/README.md#schemeCategory20c) - a categorical scheme with 20 colors.

## [Selections (d3-selection)](https://github.com/xswei/d3js_doc/tree/master/API_Reference/d3-selection)

Transform the DOM by selecting elements and joining to data.

### [Selecting Elements](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-selection/README.md#selecting-elements)

* [d3.selection](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-selection/README.md#selection) - select the root document element.
* [d3.select](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-selection/README.md#select) - select an element from the document.
* [d3.selectAll](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-selection/README.md#selectAll) - select multiple elements from the document.
* [*selection*.select](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-selection/README.md#selection_select) - select a descendant element for each selected element.
* [*selection*.selectAll](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-selection/README.md#selection_selectAll) - select multiple descendants for each selected element.
* [*selection*.filter](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-selection/README.md#selection_filter) - filter elements based on data.
* [*selection*.merge](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-selection/README.md#selection_merge) - merge this selection with another.
* [d3.matcher](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-selection/README.md#matcher) - test whether an element matches a selector.
* [d3.selector](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-selection/README.md#selector) - select an element.
* [d3.selectorAll](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-selection/README.md#selectorAll) - select elements.
* [d3.window](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-selection/README.md#window) - get a node’s owner window.
* [d3.style](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-selection/README.md#style) - get a node’s current style value.

### [Modifying Elements](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-selection/README.md#modifying-elements)

* [*selection*.attr](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-selection/README.md#selection_attr) - get or set an attribute.
* [*selection*.classed](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-selection/README.md#selection_classed) - get, add or remove CSS classes.
* [*selection*.style](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-selection/README.md#selection_style) - get or set a style property.
* [*selection*.property](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-selection/README.md#selection_property) - get or set a (raw) property.
* [*selection*.text](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-selection/README.md#selection_text) - get or set the text content.
* [*selection*.html](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-selection/README.md#selection_html) - get or set the inner HTML.
* [*selection*.append](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-selection/README.md#selection_append) - create, append and select new elements.
* [*selection*.insert](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-selection/README.md#selection_insert) - create, insert and select new elements.
* [*selection*.remove](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-selection/README.md#selection_remove) - remove elements from the document.
* [*selection*.clone](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-selection/README.md#selection_clone) - insert clones of selected elements.
* [*selection*.sort](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-selection/README.md#selection_sort) - sort elements in the document based on data.
* [*selection*.order](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-selection/README.md#selection_order) - reorders elements in the document to match the selection.
* [*selection*.raise](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-selection/README.md#selection_raise) - reorders each element as the last child of its parent.
* [*selection*.lower](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-selection/README.md#selection_lower) - reorders each element as the first child of its parent.
* [d3.create](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-selection/README.md#create) - create and select a detached element.
* [d3.creator](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-selection/README.md#creator) - create an element by name.

### [Joining Data](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-selection/README.md#joining-data)

* [*selection*.data](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-selection/README.md#selection_data) - join elements to data.
* [*selection*.enter](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-selection/README.md#selection_enter) - get the enter selection (data missing elements).
* [*selection*.exit](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-selection/README.md#selection_exit) - get the exit selection (elements missing data).
* [*selection*.datum](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-selection/README.md#selection_datum) - get or set element data (without joining).

### [Handling Events](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-selection/README.md#handling-events)

* [*selection*.on](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-selection/README.md#selection_on) - add or remove event listeners.
* [*selection*.dispatch](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-selection/README.md#selection_dispatch) - dispatch a custom event.
* [d3.event](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-selection/README.md#event) - the current user event, during interaction.
* [d3.customEvent](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-selection/README.md#customEvent) - temporarily define a custom event.
* [d3.mouse](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-selection/README.md#mouse) - get the mouse position relative to a given container.
* [d3.touch](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-selection/README.md#touch) - get a touch position relative to a given container.
* [d3.touches](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-selection/README.md#touches) - get the touch positions relative to a given container.
* [d3.clientPoint](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-selection/README.md#clientPoint) - get a position relative to a given container.

### [Control Flow](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-selection/README.md#control-flow)

* [*selection*.each](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-selection/README.md#selection_each) - call a function for each element.
* [*selection*.call](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-selection/README.md#selection_call) - call a function with this selection.
* [*selection*.empty](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-selection/README.md#selection_empty) - returns true if this selection is empty.
* [*selection*.nodes](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-selection/README.md#selection_nodes) - returns an array of all selected elements.
* [*selection*.node](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-selection/README.md#selection_node) - returns the first (non-null) element.
* [*selection*.size](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-selection/README.md#selection_size) - returns the count of elements.

### [Local Variables](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-selection/README.md#local-variables)

* [d3.local](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-selection/README.md#local) - declares a new local variable.
* [*local*.set](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-selection/README.md#local_set) - set a local variable’s value.
* [*local*.get](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-selection/README.md#local_get) - get a local variable’s value.
* [*local*.remove](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-selection/README.md#local_remove) - delete a local variable.
* [*local*.toString](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-selection/README.md#local_toString) - get the property identifier of a local variable.

### [Namespaces](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-selection/README.md#namespaces)

* [d3.namespace](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-selection/README.md#namespace) - qualify a prefixed XML name, such as “xlink:href”.
* [d3.namespaces](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-selection/README.md#namespaces) - the built-in XML namespaces.

## [Shapes (d3-shape)](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape)

Graphical primitives for visualization.

### [Arcs](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#arcs)

Circular or annular sectors, as in a pie or donut chart.

* [d3.arc](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#arc) - create a new arc generator.
* [*arc*](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#_arc) - generate an arc for the given datum.
* [*arc*.centroid](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#arc_centroid) - compute an arc’s midpoint.
* [*arc*.innerRadius](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#arc_innerRadius) - set the inner radius.
* [*arc*.outerRadius](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#arc_outerRadius) - set the outer radius.
* [*arc*.cornerRadius](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#arc_cornerRadius) - set the corner radius, for rounded corners.
* [*arc*.startAngle](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#arc_startAngle) - set the start angle.
* [*arc*.endAngle](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#arc_endAngle) - set the end angle.
* [*arc*.padAngle](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#arc_padAngle) - set the angle between adjacent arcs, for padded arcs.
* [*arc*.padRadius](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#arc_padRadius) - set the radius at which to linearize padding.
* [*arc*.context](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#arc_context) - set the rendering context.

### [Pies](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#pies)

Compute the necessary angles to represent a tabular dataset as a pie or donut chart.

* [d3.pie](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#pie) - create a new pie generator.
* [*pie*](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#_pie) - compute the arc angles for the given dataset.
* [*pie*.value](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#pie_value) - set the value accessor.
* [*pie*.sort](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#pie_sort) - set the sort order comparator.
* [*pie*.sortValues](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#pie_sortValues) - set the sort order comparator.
* [*pie*.startAngle](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#pie_startAngle) - set the overall start angle.
* [*pie*.endAngle](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#pie_endAngle) - set the overall end angle.
* [*pie*.padAngle](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#pie_padAngle) - set the pad angle between adjacent arcs.

### [Lines](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#lines)

A spline or polyline, as in a line chart.

* [d3.line](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#line) - create a new line generator.
* [*line*](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#_line) - generate a line for the given dataset.
* [*line*.x](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#line_x) - set the *x* accessor.
* [*line*.y](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#line_y) - set the *y* accessor.
* [*line*.defined](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#line_defined) - set the defined accessor.
* [*line*.curve](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#line_curve) - set the curve interpolator.
* [*line*.context](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#line_context) - set the rendering context.
* [d3.radialLine](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#radialLine) - create a new radial line generator.
* [*radialLine*](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#_radialLine) - generate a line for the given dataset.
* [*radialLine*.angle](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#radialLine_angle) - set the angle accessor.
* [*radialLine*.radius](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#radialLine_radius) - set the radius accessor.
* [*radialLine*.defined](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#radialLine_defined) - set the defined accessor.
* [*radialLine*.curve](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#radialLine_curve) - set the curve interpolator.
* [*radialLine*.context](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#radialLine_context) - set the rendering context.

### [Areas](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#areas)

An area, defined by a bounding topline and baseline, as in an area chart.

* [d3.area](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#area) - create a new area generator.
* [*area*](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#_area) - generate an area for the given dataset.
* [*area*.x](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#area_x) - set the *x0* and *x1* accessors.
* [*area*.x0](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#area_x0) - set the baseline *x* accessor.
* [*area*.x1](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#area_x1) - set the topline *x* accessor.
* [*area*.y](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#area_y) - set the *y0* and *y1* accessors.
* [*area*.y0](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#area_y0) - set the baseline *y* accessor.
* [*area*.y1](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#area_y1) - set the topline *y* accessor.
* [*area*.defined](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#area_defined) - set the defined accessor.
* [*area*.curve](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#area_curve) - set the curve interpolator.
* [*area*.context](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#area_context) - set the rendering context.
* [*area*.lineX0](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#area_lineX0) - derive a line for the left edge of an area.
* [*area*.lineX1](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#area_lineX1) - derive a line for the right edge of an area.
* [*area*.lineY0](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#area_lineY0) - derive a line for the top edge of an area.
* [*area*.lineY1](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#area_lineY1) - derive a line for the bottom edge of an area.
* [d3.radialArea](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#radialArea) - create a new radial area generator.
* [*radialArea*](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#_radialArea) - generate an area for the given dataset.
* [*radialArea*.angle](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#radialArea_angle) - set the start and end angle accessors.
* [*radialArea*.startAngle](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#radialArea_startAngle) - set the start angle accessor.
* [*radialArea*.endAngle](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#radialArea_endAngle) - set the end angle accessor.
* [*radialArea*.radius](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#radialArea_radius) - set the inner and outer radius accessors.
* [*radialArea*.innerRadius](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#radialArea_innerRadius) - set the inner radius accessor.
* [*radialArea*.outerRadius](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#radialArea_outerRadius) - set the outer radius accessor.
* [*radialArea*.defined](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#radialArea_defined) - set the defined accessor.
* [*radialArea*.curve](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#radialArea_curve) - set the curve interpolator.
* [*radialArea*.context](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#radialArea_context) - set the rendering context.
* [*radialArea*.lineStartAngle](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#area_lineStartAngle) - derive a line for the start edge of an area.
* [*radialArea*.lineEndAngle](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#area_lineEndAngle) - derive a line for the end edge of an area.
* [*radialArea*.lineInnerRadius](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#area_lineInnerRadius) - derive a line for the inner edge of an area.
* [*radialArea*.lineOuterRadius](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#area_lineOuterRadius) - derive a line for the outer edge of an area.

### [Curves](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#curves)

Interpolate between points to produce a continuous shape.

* [d3.curveBasis](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#curveBasis) - a cubic basis spline, repeating the end points.
* [d3.curveBasisClosed](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#curveBasisClosed) - a closed cubic basis spline.
* [d3.curveBasisOpen](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#curveBasisOpen) - a cubic basis spline.
* [d3.curveBundle](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#curveBundle) - a straightened cubic basis spline.
* [*bundle*.beta](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#bundle_beta) - set the bundle tension *beta*.
* [d3.curveCardinal](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#curveCardinal) - a cubic cardinal spline, with one-sided difference at each end.
* [d3.curveCardinalClosed](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#curveCardinalClosed) - a closed cubic cardinal spline.
* [d3.curveCardinalOpen](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#curveCardinalOpen) - a cubic cardinal spline.
* [*cardinal*.tension](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#cardinal_tension) - set the cardinal spline tension.
* [d3.curveCatmullRom](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#curveCatmullRom) - a cubic Catmull–Rom spline, with one-sided difference at each end.
* [d3.curveCatmullRomClosed](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#curveCatmullRomClosed) - a closed cubic Catmull–Rom spline.
* [d3.curveCatmullRomOpen](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#curveCatmullRomOpen) - a cubic Catmull–Rom spline.
* [*catmullRom*.alpha](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#catmullRom_alpha) - set the Catmull–Rom parameter *alpha*.
* [d3.curveLinear](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#curveLinear) - a polyline.
* [d3.curveLinearClosed](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#curveLinearClosed) - a closed polyline.
* [d3.curveMonotoneX](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#curveMonotoneX) - a cubic spline that, given monotonicity in *x*, preserves it in *y*.
* [d3.curveMonotoneY](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#curveMonotoneY) - a cubic spline that, given monotonicity in *y*, preserves it in *x*.
* [d3.curveNatural](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#curveNatural) - a natural cubic spline.
* [d3.curveStep](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#curveStep) - a piecewise constant function.
* [d3.curveStepAfter](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#curveStepAfter) - a piecewise constant function.
* [d3.curveStepBefore](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#curveStepBefore) - a piecewise constant function.
* [*curve*.areaStart](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#curve_areaStart) - start a new area segment.
* [*curve*.areaEnd](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#curve_areaEnd) - end the current area segment.
* [*curve*.lineStart](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#curve_lineStart) - start a new line segment.
* [*curve*.lineEnd](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#curve_lineEnd) - end the current line segment.
* [*curve*.point](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#curve_point) - add a point to the current line segment.

### [Links](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#links)

A smooth cubic Bézier curve from a source to a target.

* [d3.linkVertical](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#linkVertical) - create a new vertical link generator.
* [d3.linkHorizontal](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#linkHorizontal) - create a new horizontal link generator.
* [*link*](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#_link) - generate a link.
* [*link*.source](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#link_source) - set the source accessor.
* [*link*.target](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#link_target) - set the target accessor.
* [*link*.x](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#link_x) - set the point *x*-accessor.
* [*link*.y](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#link_y) - set the point *y*-accessor.
* [d3.linkRadial](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#linkRadial) - create a new radial link generator.
* [*radialLink*.angle](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#radialLink_angle) - set the point *angle* accessor.
* [*radialLink*.radius](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#radialLink_radius) - set the point *radius* accessor.

### [Symbols](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#symbols)

A categorical shape encoding, as in a scatterplot.

* [d3.symbol](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#symbol) - create a new symbol generator.
* [*symbol*](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#_symbol) - generate a symbol for the given datum.
* [*symbol*.type](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#symbol_type) - set the symbol type.
* [*symbol*.size](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#symbol_size) - set the size of the symbol in square pixels.
* [*symbol*.context](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#symbol_context) - set the rendering context.
* [d3.symbols](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#symbols) - the array of built-in symbol types.
* [d3.symbolCircle](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#symbolCircle) - a circle.
* [d3.symbolCross](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#symbolCross) - a Greek cross with arms of equal length.
* [d3.symbolDiamond](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#symbolDiamond) - a rhombus.
* [d3.symbolSquare](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#symbolSquare) - a square.
* [d3.symbolStar](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#symbolStar) - a pentagonal star (pentagram).
* [d3.symbolTriangle](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#symbolTriangle) - an up-pointing triangle.
* [d3.symbolWye](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#symbolWye) - a Y shape.
* [*symbolType*.draw](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#symbolType_draw) - draw this symbol to the given context.

### [Stacks](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#stacks)

Stack shapes, placing one adjacent to another, as in a stacked bar chart.

* [d3.stack](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#stack) - create a new stack generator.
* [*stack*](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#_stack) - generate a stack for the given dataset.
* [*stack*.keys](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#stack_keys) - set the keys accessor.
* [*stack*.value](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#stack_value) - set the value accessor.
* [*stack*.order](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#stack_order) - set the order accessor.
* [*stack*.offset](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#stack_offset) - set the offset accessor.
* [d3.stackOrderAscending](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#stackOrderAscending) - put the smallest series on bottom.
* [d3.stackOrderDescending](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#stackOrderDescending) - put the largest series on bottom.
* [d3.stackOrderInsideOut](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#stackOrderInsideOut) - put larger series in the middle.
* [d3.stackOrderNone](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#stackOrderNone) - use the given series order.
* [d3.stackOrderReverse](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#stackOrderReverse) - use the reverse of the given series order.
* [d3.stackOffsetExpand](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#stackOffsetExpand) - normalize the baseline to zero and topline to one.
* [d3.stackOffsetDiverging](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#stackOffsetDiverging) - positive above zero; negative below zero.
* [d3.stackOffsetNone](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#stackOffsetNone) - apply a zero baseline.
* [d3.stackOffsetSilhouette](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#stackOffsetSilhouette) - center the streamgraph around zero.
* [d3.stackOffsetWiggle](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-shape/README.md#stackOffsetWiggle) - minimize streamgraph wiggling.

## [Time Formats (d3-time-format)](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-time-format)

Parse and format times, inspired by strptime and strftime.

* [d3.timeFormat](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-time-format/README.md#timeFormat) - alias for *locale*.format on the default locale.
* [d3.timeParse](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-time-format/README.md#timeParse) - alias for *locale*.parse on the default locale.
* [d3.utcFormat](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-time-format/README.md#utcFormat) -  alias for *locale*.utcFormat on the default locale.
* [d3.utcParse](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-time-format/README.md#utcParse) -  alias for *locale*.utcParse on the default locale.
* [d3.isoFormat](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-time-format/README.md#isoFormat) - an ISO 8601 UTC formatter.
* [d3.isoParse](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-time-format/README.md#isoParse) - an ISO 8601 UTC parser.
* [d3.timeFormatLocale](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-time-format/README.md#timeFormatLocale) - define a custom locale.
* [d3.timeFormatDefaultLocale](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-time-format/README.md#timeFormatDefaultLocale) - define the default locale.
* [*locale*.format](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-time-format/README.md#locale_format) - create a time formatter.
* [*locale*.parse](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-time-format/README.md#locale_parse) - create a time parser.
* [*locale*.utcFormat](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-time-format/README.md#locale_utcFormat) - create a UTC formatter.
* [*locale*.utcParse](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-time-format/README.md#locale_utcParse) - create a UTC parser.

## [Time Intervals (d3-time)](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-time)

A calculator for humanity’s peculiar conventions of time.

* [d3.timeInterval](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-time/README.md#timeInterval) - implement a new custom time interval.
* [*interval*](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-time/README.md#_interval) - alias for *interval*.floor.
* [*interval*.floor](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-time/README.md#interval_floor) - round down to the nearest boundary.
* [*interval*.round](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-time/README.md#interval_round) - round to the nearest boundary.
* [*interval*.ceil](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-time/README.md#interval_ceil) - round up to the nearest boundary.
* [*interval*.offset](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-time/README.md#interval_offset) - offset a date by some number of intervals.
* [*interval*.range](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-time/README.md#interval_range) - generate a range of dates at interval boundaries.
* [*interval*.filter](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-time/README.md#interval_filter) - create a filtered subset of this interval.
* [*interval*.every](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-time/README.md#interval_every) - create a filtered subset of this interval.
* [*interval*.count](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-time/README.md#interval_count) - count interval boundaries between two dates.
* [d3.timeMillisecond](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-time/README.md#timeMillisecond), [d3.utcMillisecond](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-time/README.md#timeMillisecond) - the millisecond interval.
* [d3.timeMilliseconds](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-time/README.md#timeMillisecond), [d3.utcMilliseconds](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-time/README.md#timeMillisecond) - aliases for millisecond.range.
* [d3.timeSecond](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-time/README.md#timeSecond), [d3.utcSecond](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-time/README.md#timeSecond) - the second interval.
* [d3.timeSeconds](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-time/README.md#timeSecond), [d3.utcSeconds](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-time/README.md#timeSecond) - aliases for second.range.
* [d3.timeMinute](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-time/README.md#timeMinute), [d3.utcMinute](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-time/README.md#timeMinute) - the minute interval.
* [d3.timeMinutes](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-time/README.md#timeMinute), [d3.utcMinutes](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-time/README.md#timeMinute) - aliases for minute.range.
* [d3.timeHour](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-time/README.md#timeHour), [d3.utcHour](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-time/README.md#timeHour) - the hour interval.
* [d3.timeHours](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-time/README.md#timeHour), [d3.utcHours](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-time/README.md#timeHour) - aliases for hour.range.
* [d3.timeDay](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-time/README.md#timeDay), [d3.utcDay](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-time/README.md#timeDay) - the day interval.
* [d3.timeDays](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-time/README.md#timeDay), [d3.utcDays](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-time/README.md#timeDay) - aliases for day.range.
* [d3.timeWeek](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-time/README.md#timeWeek), [d3.utcWeek](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-time/README.md#timeWeek) - aliases for sunday.
* [d3.timeWeeks](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-time/README.md#timeWeek), [d3.utcWeeks](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-time/README.md#timeWeek) - aliases for week.range.
* [d3.timeSunday](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-time/README.md#timeSunday), [d3.utcSunday](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-time/README.md#timeSunday) - the week interval, starting on Sunday.
* [d3.timeSundays](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-time/README.md#timeSunday), [d3.utcSundays](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-time/README.md#timeSunday) - aliases for sunday.range.
* [d3.timeMonday](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-time/README.md#timeMonday), [d3.utcMonday](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-time/README.md#timeMonday) - the week interval, starting on Monday.
* [d3.timeMondays](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-time/README.md#timeMonday), [d3.utcMondays](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-time/README.md#timeMonday) - aliases for monday.range.
* [d3.timeTuesday](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-time/README.md#timeTuesday), [d3.utcTuesday](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-time/README.md#timeTuesday) - the week interval, starting on Tuesday.
* [d3.timeTuesdays](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-time/README.md#timeTuesday), [d3.utcTuesdays](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-time/README.md#timeTuesday) - aliases for tuesday.range.
* [d3.timeWednesday](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-time/README.md#timeWednesday), [d3.utcWednesday](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-time/README.md#timeWednesday) - the week interval, starting on Wednesday.
* [d3.timeWednesdays](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-time/README.md#timeWednesday), [d3.utcWednesdays](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-time/README.md#timeWednesday) - aliases for wednesday.range.
* [d3.timeThursday](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-time/README.md#timeThursday), [d3.utcThursday](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-time/README.md#timeThursday) - the week interval, starting on Thursday.
* [d3.timeThursdays](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-time/README.md#timeThursday), [d3.utcThursdays](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-time/README.md#timeThursday) - aliases for thursday.range.
* [d3.timeFriday](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-time/README.md#timeFriday), [d3.utcFriday](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-time/README.md#timeFriday) - the week interval, starting on Friday.
* [d3.timeFridays](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-time/README.md#timeFriday), [d3.utcFridays](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-time/README.md#timeFriday) - aliases for friday.range.
* [d3.timeSaturday](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-time/README.md#timeSaturday), [d3.utcSaturday](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-time/README.md#timeSaturday) - the week interval, starting on Saturday.
* [d3.timeSaturdays](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-time/README.md#timeSaturday), [d3.utcSaturdays](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-time/README.md#timeSaturday) - aliases for saturday.range.
* [d3.timeMonth](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-time/README.md#timeMonth), [d3.utcMonth](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-time/README.md#timeMonth) - the month interval.
* [d3.timeMonths](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-time/README.md#timeMonth), [d3.utcMonths](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-time/README.md#timeMonth) - aliases for month.range.
* [d3.timeYear](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-time/README.md#timeYear), [d3.utcYear](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-time/README.md#timeYear) - the year interval.
* [d3.timeYears](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-time/README.md#timeYear), [d3.utcYears](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-time/README.md#timeYear) - aliases for year.range.

## [Timers (d3-timer)](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-timer)

An efficient queue for managing thousands of concurrent animations.

* [d3.now](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-timer/README.md#now) - get the current high-resolution time.
* [d3.timer](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-timer/README.md#timer) - schedule a new timer.
* [*timer*.restart](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-timer/README.md#timer_restart) - reset the timer’s start time and callback.
* [*timer*.stop](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-timer/README.md#timer_stop) - stop the timer.
* [d3.timerFlush](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-timer/README.md#timerFlush) - immediately execute any eligible timers.
* [d3.timeout](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-timer/README.md#timeout) - schedule a timer that stops on its first callback.
* [d3.interval](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-timer/README.md#interval) - schedule a timer that is called with a configurable period.

## [Transitions (d3-transition)](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-transition)

Animated transitions for [selections](#selections).

* [*selection*.transition](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-transition/README.md#selection_transition) - schedule a transition for the selected elements.
* [*selection*.interrupt](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-transition/README.md#selection_interrupt) - interrupt and cancel transitions on the selected elements.
* [d3.transition](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-transition/README.md#transition) - schedule a transition on the root document element.
* [*transition*.select](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-transition/README.md#transition_select) - schedule a transition on the selected elements.
* [*transition*.selectAll](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-transition/README.md#transition_selectAll) - schedule a transition on the selected elements.
* [*transition*.filter](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-transition/README.md#transition_filter) - filter elements based on data.
* [*transition*.merge](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-transition/README.md#transition_merge) - merge this transition with another.
* [*transition*.selection](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-transition/README.md#transition_selection) - returns a selection for this transition.
* [*transition*.transition](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-transition/README.md#transition_transition) - schedule a new transition following this one.
* [*transition*.call](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-transition/README.md#transition_call) - call a function with this transition.
* [*transition*.nodes](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-transition/README.md#transition_nodes) - returns an array of all selected elements.
* [*transition*.node](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-transition/README.md#transition_node) - returns the first (non-null) element.
* [*transition*.size](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-transition/README.md#transition_size) - returns the count of elements.
* [*transition*.empty](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-transition/README.md#transition_empty) - returns true if this transition is empty.
* [*transition*.each](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-transition/README.md#transition_each) - call a function for each element.
* [*transition*.on](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-transition/README.md#transition_on) - add or remove transition event listeners.
* [*transition*.attr](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-transition/README.md#transition_attr) - tween the given attribute using the default interpolator.
* [*transition*.attrTween](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-transition/README.md#transition_attrTween) - tween the given attribute using a custom interpolator.
* [*transition*.style](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-transition/README.md#transition_style) - tween the given style property using the default interpolator.
* [*transition*.styleTween](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-transition/README.md#transition_styleTween) - tween the given style property using a custom interpolator.
* [*transition*.text](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-transition/README.md#transition_text) - set the text content when the transition starts.
* [*transition*.remove](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-transition/README.md#transition_remove) - remove the selected elements when the transition ends.
* [*transition*.tween](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-transition/README.md#transition_tween) - run custom code during the transition.
* [*transition*.delay](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-transition/README.md#transition_delay) - specify per-element delay in milliseconds.
* [*transition*.duration](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-transition/README.md#transition_duration) - specify per-element duration in milliseconds.
* [*transition*.ease](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-transition/README.md#transition_ease) - specify the easing function.
* [d3.active](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-transition/README.md#active) - select the active transition for a given node.
* [d3.interrupt](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-transition/README.md#interrupt) - interrupt the active transition for a given node.

## [Voronoi Diagrams (d3-voronoi)](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-voronoi)

Compute the Voronoi diagram of a given set of points.

* [d3.voronoi](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-voronoi/README.md#voronoi) - create a new Voronoi generator.
* [*voronoi*](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-voronoi/README.md#_voronoi) - generate a new Voronoi diagram for the given points.
* [*voronoi*.polygons](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-voronoi/README.md#voronoi_polygons) - compute the Voronoi polygons for the given points.
* [*voronoi*.triangles](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-voronoi/README.md#voronoi_triangles) - compute the Delaunay triangles for the given points.
* [*voronoi*.links](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-voronoi/README.md#voronoi_links) - compute the Delaunay links for the given points.
* [*voronoi*.x](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-voronoi/README.md#voronoi_x) - set the *x* accessor.
* [*voronoi*.y](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-voronoi/README.md#voronoi_y) - set the *y* accessor.
* [*voronoi*.extent](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-voronoi/README.md#voronoi_extent) - set the observed extent of points.
* [*voronoi*.size](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-voronoi/README.md#voronoi_size) - set the observed extent of points.
* [*diagram*.polygons](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-voronoi/README.md#diagram_polygons) - compute the polygons for this Voronoi diagram.
* [*diagram*.triangles](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-voronoi/README.md#diagram_triangles) - compute the triangles for this Voronoi diagram.
* [*diagram*.links](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-voronoi/README.md#diagram_links) - compute the links for this Voronoi diagram.
* [*diagram*.find](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-voronoi/README.md#diagram_find) - find the closest point in this Voronoi diagram.

## [Zooming (d3-zoom)](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-zoom)

Pan and zoom SVG, HTML or Canvas using mouse or touch input.

* [d3.zoom](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-zoom/README.md#zoom) - create a zoom behavior.
* [*zoom*](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-zoom/README.md#_zoom) - apply the zoom behavior to the selected elements.
* [*zoom*.transform](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-zoom/README.md#zoom_transform) - change the transform for the selected elements.
* [*zoom*.translateTo](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-zoom/README.md#zoom_translateTo) - translate the transform for the selected elements.
* [*zoom*.translateBy](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-zoom/README.md#zoom_translateBy) - translate the transform for the selected elements.
* [*zoom*.scaleBy](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-zoom/README.md#zoom_scaleBy) - scale the transform for the selected elements.
* [*zoom*.scaleTo](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-zoom/README.md#zoom_scaleTo) - scale the transform for the selected elements.
* [*zoom*.filter](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-zoom/README.md#zoom_filter) - control which input events initiate zooming.
* [*zoom*.touchable](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-zoom/README.md#zoom_touchable) - set the touch support detector.
* [*zoom*.wheelDelta](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-zoom/README.md#zoom_wheelDelta) - override scaling for wheel events.
* [*zoom*.clickDistance](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-zoom/README.md#zoom_clickDistance) - set the click distance threshold.
* [*zoom*.extent](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-zoom/README.md#zoom_extent) - set the extent of the viewport.
* [*zoom*.scaleExtent](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-zoom/README.md#zoom_scaleExtent) - set the allowed scale range.
* [*zoom*.translateExtent](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-zoom/README.md#zoom_translateExtent) - set the extent of the zoomable world.
* [*zoom*.constrain](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-zoom/README.md#zoom_constrain) - override the transform constraint logic.
* [*zoom*.duration](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-zoom/README.md#zoom_duration) - set the duration of zoom transitions.
* [*zoom*.interpolate](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-zoom/README.md#zoom_interpolate) - control the interpolation of zoom transitions.
* [*zoom*.on](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-zoom/README.md#zoom_on) - listen for zoom events.
* [d3.zoomTransform](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-zoom/README.md#zoomTransform) - get the zoom transform for a given element.
* [*transform*.scale](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-zoom/README.md#transform_scale) - scale a transform by the specified amount.
* [*transform*.translate](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-zoom/README.md#transform_translate) - translate a transform by the specified amount.
* [*transform*.apply](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-zoom/README.md#transform_apply) - apply the transform to the given point.
* [*transform*.applyX](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-zoom/README.md#transform_applyX) - apply the transform to the given *x*-coordinate.
* [*transform*.applyY](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-zoom/README.md#transform_applyY) - apply the transform to the given *y*-coordinate.
* [*transform*.invert](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-zoom/README.md#transform_invert) - unapply the transform to the given point.
* [*transform*.invertX](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-zoom/README.md#transform_invertX) - unapply the transform to the given *x*-coordinate.
* [*transform*.invertY](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-zoom/README.md#transform_invertY) - unapply the transform to the given *y*-coordinate.
* [*transform*.rescaleX](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-zoom/README.md#transform_rescaleX) - apply the transform to an *x*-scale’s domain.
* [*transform*.rescaleY](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-zoom/README.md#transform_rescaleY) - apply the transform to a *y*-scale’s domain.
* [*transform*.toString](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-zoom/README.md#transform_toString) - format the transform as an SVG transform string.
* [d3.zoomIdentity](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-zoom/README.md#zoomIdentity) - the identity transform.
