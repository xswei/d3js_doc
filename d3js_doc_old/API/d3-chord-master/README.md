# d3-chord

一种表示相互之间流量的环形可视化布局

[<img alt="Chord Diagram" src="https://raw.githubusercontent.com/d3/d3-chord/master/img/chord.png" width="480" height="480">](http://bl.ocks.org/mbostock/4062006)

## Installing

NPM等安装方法略

```html
<script src="https://d3js.org/d3-array.v1.min.js"></script>
<script src="https://d3js.org/d3-path.v1.min.js"></script>
<script src="https://d3js.org/d3-chord.v1.min.js"></script>
<script>

var chord = d3.chord();

</script>
```

[在浏览器中测试d3-chord](https://tonicdev.com/npm/d3-chord)

## API Reference

<a href="#chord" name="chord">#</a> d3.<b>chord</b>() [<>](https://github.com/d3/d3-chord/blob/master/src/chord.js "Source")

使用默认的设置创建一个弦图生成器

<a href="#_chord" name="_chord">#</a> <i>chord</i>(<i>matrix</i>) [<>](https://github.com/d3/d3-chord/blob/master/src/chord.js#L19 "Source")

对*matrix*进行计算，计算出矩阵数据对应的弦图布局数据以备画图。*matrix*必须为方阵。*matrix*[*i*][*j*] 表示第*i*个节点到第*j*个节点的流量。*matrix*[*i*][*j*]不能为负数。比如[Circos tableviewer example](http://mkweb.bcgsc.ca/circos/guide/tables/)中的matrix数据:

```js
var matrix = [
  [11975,  5871, 8916, 2868],
  [ 1951, 10048, 2060, 6171],
  [ 8010, 16145, 8090, 8045],
  [ 1013,   990,  940, 6907]
];
```

返回值是一组表示弦的对象数组，每个对象都有以下属性:

* `source` - 该弦的源子分组对象
* `target` - 该弦的目标子分组对象

每一个子分组都有以下数属性:

* `startAngle` - 起始角度
* `endAngle` - 终止角度
* `value` -  *matrix*[*i*][*j*]的值
* `index` - 索引 *i*
* `subindex` - 索引 *j*

弦数据通常传递给[d3.ribbon](#ribbon)来显示相互之间的流量关系。

弦图数组也包含了另一个表示分组的属性 *chords*.groups,*chords*.groups表示计算后的分组数组，每个分组包含以下属性:

* `startAngle` - 起始角度
* `endAngle` - 终止角度
* `value` - 从节点*i*出去的总量
* `index` - 节点索引*i*

分组数据传递给[d3.arc](https://github.com/d3/d3-shape#arc)来绘制。

<a href="#chord_padAngle" name="#chord_padAngle">#</a> <i>chord</i>.<b>padAngle</b>([<i>angle</i>]) [<>](https://github.com/d3/d3-chord/blob/master/src/chord.js#L104 "Source")

设置或获取相邻分组之间的间隔，默认为0

<a href="#chord_sortGroups" name="#chord_sortGroups">#</a> <i>chord</i>.<b>sortGroups</b>([<i>compare</i>]) [<>](https://github.com/d3/d3-chord/blob/master/src/chord.js#L108 "Source")

设置或获取分组的排序规则。

<a href="#chord_sortSubgroups" name="#chord_sortSubgroups">#</a> <i>chord</i>.<b>sortSubgroups</b>([<i>compare</i>]) [<>](https://github.com/d3/d3-chord/blob/master/src/chord.js#L112 "Source")

设置或获取子分组的排序规则

<a href="#chord_sortChords" name="#chord_sortChords">#</a> <i>chord</i>.<b>sortChords</b>([<i>compare</i>]) [<>](https://github.com/d3/d3-chord/blob/master/src/chord.js#L116 "Source")

设置或获取弦的排序规则

<a href="#ribbon" name="ribbon">#</a> d3.<b>ribbon</b>() [<>](https://github.com/d3/d3-chord/blob/master/src/ribbon.js "Source")

使用默认的设置创建一个新的ribbon生成器

<a href="#_ribbon" name="_ribbon">#</a> <i>ribbon</i>(<i>arguments…</i>) [<>](https://github.com/d3/d3-chord/blob/master/src/ribbon.js#L34 "Source")

根据制定的数据生成一个ribbon路径，比如

```js
var ribbon = d3.ribbon();

ribbon({
  source: {startAngle: 0.7524114, endAngle: 1.1212972, radius: 240},
  target: {startAngle: 1.8617078, endAngle: 1.9842927, radius: 240}
}); // "M164.0162810494058,-175.21032946354026A240,240,0,0,1,216.1595644740915,-104.28347273835429Q0,0,229.9158815306728,68.8381247563705A240,240,0,0,1,219.77316791012538,96.43523560788266Q0,0,164.0162810494058,-175.21032946354026Z"
```

默认情况下radius为240，等价于：

```js
var ribbon = d3.ribbon()
    .radius(240);

ribbon({
  source: {startAngle: 0.7524114, endAngle: 1.1212972},
  target: {startAngle: 1.8617078, endAngle: 1.9842927}
}); // "M164.0162810494058,-175.21032946354026A240,240,0,0,1,216.1595644740915,-104.28347273835429Q0,0,229.9158815306728,68.8381247563705A240,240,0,0,1,219.77316791012538,96.43523560788266Q0,0,164.0162810494058,-175.21032946354026Z"
```

如果指定了cavnas的上下文，则将路径信息保存在指定的context上下文中。

<a href="#ribbon_source" name="ribbon_source">#</a> <i>ribbon</i>.<b>source</b>([<i>source</i>]) [<>](https://github.com/d3/d3-chord/blob/master/src/ribbon.js#L74 "Source")

设置或获取source访问器，默认为:

```js
function source(d) {
  return d.source;
}
```

<a href="#ribbon_target" name="ribbon_target">#</a> <i>ribbon</i>.<b>target</b>([<i>target</i>]) [<>](https://github.com/d3/d3-chord/blob/master/src/ribbon.js#L78 "Source")

设置或获取targete访问器，默认为:

```js
function target(d) {
  return d.target;
}
```

<a href="#ribbon_radius" name="ribbon_radius">#</a> <i>ribbon</i>.<b>radius</b>([<i>radius</i>]) [<>](https://github.com/d3/d3-chord/blob/master/src/ribbon.js#L62 "Source")

设置或获取半径

```js
function radius(d) {
  return d.radius;
}
```

<a href="#ribbon_startAngle" name="ribbon_startAngle">#</a> <i>ribbon</i>.<b>startAngle</b>([<i>angle</i>]) [<>](https://github.com/d3/d3-chord/blob/master/src/ribbon.js#L66 "Source")

设置或获取起始角度访问器

```js
function startAngle(d) {
  return d.startAngle;
}
```

12点钟方向为0度，以弧度为单位

<a href="#ribbon_endAngle" name="ribbon_endAngle">#</a> <i>ribbon</i>.<b>endAngle</b>([<i>angle</i>]) [<>](https://github.com/d3/d3-chord/blob/master/src/ribbon.js#L70 "Source")

设置或获取终止角度访问器

```js
function endAngle(d) {
  return d.endAngle;
}
```


<a href="#ribbon_context" name="ribbon_context">#</a> <i>ribbon</i>.<b>context</b>([<i>context</i>]) [<>](https://github.com/d3/d3-chord/blob/master/src/ribbon.js#L82 "Source")

如果指定了context则将绘制路径信息保存到canvas的context上下文中。如果使用canvas绘制则要调用这个方法。
