### 力导向小节

* [英文文档](https://github.com/d3/d3-force)
* [中文文档](https://github.com/xswei/d3js_doc/tree/master/d3js_doc_old/API/d3-force-master)

### 力学图的使用

在使用力学图时，首先要定义一个仿真系统(simulation)，仿真系统本身不会布局，仿真系统主要用来对节点位置进行初始化以及设置仿真中的各个参数。

在对节点布局时，首先要指定一个[力学模型](https://github.com/xswei/d3js_doc/tree/master/d3js_doc_old/API/d3-force-master#forces)，力学模型有多种，按需定义，可定义多个。通过simulation.force指定:

```js
var simulation = d3.forceSimulation(nodes)
	.force("center",d3.forceCenter(x,y))
	.force("link",d3.forceLink())


```

使用simulation.force定义的时候第一个参数为字符串，表示类型，第二个为定义的力学模型，力学模型的参数可以根据具体的模型自定义。


定义好力学模型之后，节点的位置才会被调整，此时就可以更新节点的位置。

### 经常遇到的问题

#### 数据的link中不使用索引，使用字符串表示source和target

可以，这种形式在指定力学模型为link时候，通过link.id来指定。参考[这里](https://github.com/xswei/d3js_doc/tree/master/d3js_doc_old/API/d3-force-master#links)


#### 节点之间的连线单独指定

可以，同样是link力学模型，设置link.distance即可，参考[这里](https://github.com/xswei/d3js_doc/tree/master/d3js_doc_old/API/d3-force-master#link_distance)

