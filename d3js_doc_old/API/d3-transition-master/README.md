# d3-transition

transition是一个类[selection](https://github.com/d3/d3-selection)为DOM元素进行过渡的接口。*transitions*可以使DOM从当前状态平滑的过渡到目标状态。

应用过渡，首先选中一个元素，然后使用 [*selection*.transition](#selection_transition), 然后指定目标状态,比如:

```js
d3.select("body")
  .transition()
    .style("background-color", "red");
```

过渡支持大多数选择集的方法(比如 [*transition*.attr](#transition_attr) 和 [*transition*.style](#transition_style) 对应[*selection*.attr](https://github.com/d3/d3-selection#selection_attr) 和 [*selection*.style](https://github.com/d3/d3-selection#selection_style)), 但是并不是所有的方法都支持，比如在过渡前可以对选择集使用 [append](https://github.com/d3/d3-selection#selection_append) 或者[bind data](https://github.com/d3/d3-selection#joining-data)，[*transition*.remove](#transition_remove)操作则可以在过渡结束后移除元素。

为了计算过渡的中间状态，过渡提供了许多[built-in interpolators(内建的插值方法)](https://github.com/d3/d3-interpolate). [Colors](https://github.com/d3/d3-interpolate#interpolateRgb), [numbers](https://github.com/d3/d3-interpolate#interpolateNumber), 和 [transforms](https://github.com/d3/d3-interpolate#interpolateTransform). 嵌入数字的[Strings](https://github.com/d3/d3-interpolate#interpolateString)也支持。 如果要自定义插值器，则使用 [*transition*.attrTween](#transition_attrTween), [*transition*.styleTween](#transition_styleTween) 或者 [*transition*.tween](#transition_tween).

## Installing

NPM等安装方法略

```html
<script src="https://d3js.org/d3-color.v1.min.js"></script>
<script src="https://d3js.org/d3-dispatch.v1.min.js"></script>
<script src="https://d3js.org/d3-ease.v1.min.js"></script>
<script src="https://d3js.org/d3-interpolate.v1.min.js"></script>
<script src="https://d3js.org/d3-selection.v1.min.js"></script>
<script src="https://d3js.org/d3-timer.v1.min.js"></script>
<script src="https://d3js.org/d3-transition.v1.min.js"></script>
<script>

var transition = d3.transition();

</script>
```

[在浏览器中测试d3-transition.](https://tonicdev.com/npm/d3-transition)

## API Reference

* [Selecting Elements(选择元素)](#selecting-elements)
* [Modifying Elements(修改元素)](#modifying-elements)
* [Timing(时间)](#timing)
* [Control Flow(控制流)](#control-flow)
* [The Life of a Transition(过渡的生命周期)](#the-life-of-a-transition)

### Selecting Elements

过渡通过[selections](https://github.com/d3/d3-selection) 的 [*selection*.transition](#selection_transition)进行调用. 你也可以在文档的根节点使用[d3.transition](#transition)创建一个过渡.

<a name="selection_transition" href="#selection_transition">#</a> <i>selection</i>.<b>transition</b>([<i>name</i>]) [<>](https://github.com/d3/d3-transition/blob/master/src/selection/transition.js "Source")

为指定的选择集添加一个指定name的过渡。如果没有指定*name*则使用null。

如果对同一个选择集同时进行多个过渡，则需要指定*name*，这样后来的过渡进行时由于有不同的*name*就不会中断前面的个过渡。在过渡对象内部，除了`_name`属性之外，还有自动赋值的`_id`属性。

如果*name*是一个[transition](#transition)实例，则返回的过渡与之拥有相同的id和name。如果元素上已经存在同名id则会返回已经存在的过渡。比如为所有的*.apple*和".orange"应用相同的过渡:

```js
var t = d3.transition()
    .duration(750)
    .ease(d3.easeLinear);

d3.selectAll(".apple").transition(t)
    .style("fill", "red");

d3.selectAll(".orange").transition(t)
    .style("fill", "orange");
```


<a name="selection_interrupt" href="#selection_interrupt">#</a> <i>selection</i>.<b>interrupt</b>([<i>name</i>]) [<>](https://github.com/d3/d3-transition/blob/master/src/selection/interrupt.js "Source")

中断选择集上活动的名为name的过渡。如果*name*所表示的过渡还没有开始，则也不用开始了。如果没有指定*name*,则使用null。

中断元素上的过渡对任何后代元素上的任何过渡没有影响。例如[axis transition](https://github.com/d3/d3-axis)时，由于axis由许多独立的部分组成，因此在对axis过渡进行中断时，首先要对包含axis的[G element](https://www.w3.org/TR/SVG/struct.html#Groups)元素的所有后代(刻度，刻度值等)进行中断:

```js
selection.selectAll("*").interrupt();
```

[universal selector(通配符)](https://developer.mozilla.org/en-US/docs/Web/CSS/Universal_selectors), `*`, 选中所有的后代元素，你也可以通过如下方式中断G元素以及其所有后代的过渡:

```js
selection.interrupt().selectAll("*").interrupt();
```

<a name="interrupt" href="#interrupt">#</a> d3.<b>interrupt</b>(<i>node</i>[, <i>name</i>]) [<>](https://github.com/d3/d3-transition/blob/master/src/interrupt.js "Source")

中断指定节点的指定name的过渡。如果过渡还没有开始，则不用开始了。如果没有指定*name*则使用null，参考[*selection*.interrupt](#selection_interrupt).

<a name="transition" href="#transition">#</a> d3.<b>transition</b>([<i>name</i>]) [<>](https://github.com/d3/d3-transition/blob/master/src/transition/index.js#L29 "Source")

使用指定的name返回一个新的对根元素`document.documentElement`的过渡。如果没有指定name则使用null。新的过渡与其他同name的过渡是独立的。因为内部有`_id`属性区分。name也可以是一个过渡实例。参考[*selection*.transition](#selection_transition). 这个方法等价于:

```js
d3.selection()
  .transition(name)
```

这个方法可以用来测试是否是过渡实例(`instanceof d3.transition`), 也可以用来对过渡的原型链进行扩展。

<a name="transition_select" href="#transition_select">#</a> <i>transition</i>.<b>select</b>(<i>selector</i>) [<>](https://github.com/d3/d3-transition/blob/master/src/transition/select.js "Source")

选择过渡集中的第一个符合条件的元素,如果存在符合条件的元素，则返回一个针对这个元素的过渡。*selector*可以通过字符串也可以通过函数指定，如果是一个函数则会为过渡集中的每个元素调用，并传递`d` 和索引 `i`,`this`指向当前DOM元素的上下文。

这个方法等价于通过[*transition*.selection](#transition_selection)获取选择集，然后通过[*selection*.select](https://github.com/d3/d3-selection#selection_select)创建一个子选择集，然后再通过[*selection*.transition](#selection_transition)创建一个新的过渡:

```js
transition
  .selection()
  .select(selector)
  .transition(transition)
```

<a name="transition_selectAll" href="#transition_selectAll">#</a> <i>transition</i>.<b>selectAll</b>(<i>selector</i>) [<>](https://github.com/d3/d3-transition/blob/master/src/transition/selectAll.js "Source")

同上，只不过是选择所有符合条件的元素，然后在这些符合元素上都创建过渡，等价于:

```js
transition
  .selection()
  .selectAll(selector)
  .transition(transition)
```

<a name="transition_filter" href="#transition_filter">#</a> <i>transition</i>.<b>filter</b>(<i>filter</i>) [<>](https://github.com/d3/d3-transition/blob/master/src/transition/filter.js "Source")

对过渡集中的元素进行过滤，返回符合条件的元素的过渡。等价于:

```js
transition
  .selection()
  .filter(filter)
  .transition(transition)
```

<a name="transition_merge" href="#transition_merge">#</a> <i>transition</i>.<b>merge</b>(<i>other</i>) [<>](https://github.com/d3/d3-transition/blob/master/src/transition/merge.js "Source")

合并两个过渡集，等价于:

```js
transition
  .selection()
  .merge(other.selection())
  .transition(transition)
```

<a name="transition_transition" href="#transition_transition">#</a> <i>transition</i>.<b>transition</b>() [<>](https://github.com/d3/d3-transition/blob/master/src/transition/transition.js "Source")

在当前的过渡集上再创建一个新的过渡，可以使用这个方法串联多个过渡:

```js
d3.selectAll(".apple")
  .transition() // First fade to green.
    .style("fill", "green")
  .transition() // Then red.
    .style("fill", "red")
  .transition() // Wait one second. Then brown, and remove.
    .delay(1000)
    .style("fill", "brown")
    .remove();
```

延迟是相对于前一个过渡的。在上述例子中颜色变成"red" 1000ms之后才开始变"brown"

<a name="transition_selection" href="#transition_selection">#</a> <i>transition</i>.<b>selection</b>() [<>](https://github.com/d3/d3-transition/blob/master/src/transition/selection.js "Source")

返回当前过渡集中所包含的[selection](https://github.com/d3/d3-selection#selection)。也就是从过渡集中将选择集分离出来。

<a name="active" href="#active">#</a> d3.<b>active</b>(<i>node</i>[, <i>name</i>]) [<>](https://github.com/d3/d3-transition/blob/master/src/active.js "Source")

返回指定节点上名为name的活动的过渡。如果没有指定name则使用null。这个方法可以方便的创建链式过渡，比如创建一个循环disco过渡:

```js
d3.selectAll("circle").transition()
    .delay(function(d, i) { return i * 50; })
    .on("start", function repeat() {
        d3.active(this)
            .style("fill", "red")
          .transition()
            .style("fill", "green")
          .transition()
            .style("fill", "blue")
          .transition()
            .on("start", repeat);
      });
```

参考[chained transitions](http://bl.ocks.org/mbostock/70d5541b547cc222aa02).

### Modifying Elements

当选中元素并使用 [*selection*.transition](#selection_transition)创建一个过渡之后，就可以对元素的内容属性进行过渡了。

<a name="transition_attr" href="#transition_attr">#</a> <i>transition</i>.<b>attr</b>(<i>name</i>, <i>value</i>) [<>](https://github.com/d3/d3-transition/blob/master/src/transition/attr.js "Source")

将选中的元素的名为name的属性从当前值过渡到目标值。*value*可以是一个值也可以是一个方法也可以是null，如果是一个方法则会被立即调用，并传递当前元素绑定的数据*d*,*i*,*this*指向当前的元素。如果*target*为null则变换开始时将这个属性移除。否则使用如下的算法对其进行插值:

1. 如果 *value* 是数值, 则使用[interpolateNumber](https://github.com/d3/d3-interpolate#interpolateNumber).
2. 如果 *value* 是[color](https://github.com/d3/d3-color#color)或者是一个表示颜色的字符串则使用[interpolateRgb](https://github.com/d3/d3-interpolate#interpolateRgb).
3. 其他情况使用[interpolateString](https://github.com/d3/d3-interpolate#interpolateString).

如果要使用其他的插值方式，则使用 [*transition*.attrTween](#transition_attrTween)方法.

<a name="transition_attrTween" href="#transition_attrTween">#</a> <i>transition</i>.<b>attrTween</b>(<i>name</i>[, <i>factory</i>]) [<>](https://github.com/d3/d3-transition/blob/master/src/transition/attrTween.js "Source")

如果*factory*非null，则根据插值*factory*从对name进行过渡。插值*factory*是一个返回[interpolator](https://github.com/d3/d3-interpolate)的方法。在过渡开始时，对每个元素调用*factory*，并传递当前的元素绑定的数据*d*,*i*，*this*指向当前的DOM元素。返回的插值器会在过渡中的每一帧进行调用并传递当前的参数*t*. *t*的范围为[0,1],然后返回插值器计算后的值给name使用，插值器必须返回字符串类型。

如果*factory*为null，则移除name属性。如果没有指定*factory*则返回当前的插值器。

比如，对fill属性进行插值:

```js
selection.attrTween("fill", function() {
  return d3.interpolateRgb("red", "blue");
});
```

或者从当前的fill值插值到blue：

```js
selection.attrTween("fill", function() {
  return d3.interpolateRgb(this.getAttribute("fill"), "blue");
});
```

或者使用自定义的方法代替自带的插值器:

```js
selection.attrTween("fill", function() {
  return function(t) {
    return "hsl(" + t * 360 + ",100%,50%)";
  };
});
```

这个方法在指定自定义的插值器时是有用的，比如对[SVG paths](http://bl.ocks.org/mbostock/3916621)进行插值。

<a name="transition_style" href="#transition_style">#</a> <i>transition</i>.<b>style</b>(<i>name</i>, <i>value</i>[, <i>priority</i>]) [<>](https://github.com/d3/d3-transition/blob/master/src/transition/style.js "Source")

同*transition.attr(name, value)*用法。

<a name="transition_styleTween" href="#transition_styleTween">#</a> <i>transition</i>.<b>styleTween</b>(<i>name</i>[, <i>factory</i>[, <i>priority</i>]])) [<>](https://github.com/d3/d3-transition/blob/master/src/transition/styleTween.js "Source")

同*transition.attrTween(name[, factory])*用法。

<a name="transition_text" href="#transition_text">#</a> <i>transition</i>.<b>text</b>(<i>value</i>) [<>](https://github.com/d3/d3-transition/blob/master/src/transition/text.js "Source")

过渡开始时将指定的元素的[text content](http://www.w3.org/TR/DOM-Level-3-Core/core.html#Node3-textContent)设置为目标值。*value*可以是一个常量也可以是一个方法，如果是方法则在过渡开始时进行调用。

使用插值的方式比直接设置要更好些，比如使用 [*transition*.tween](#transition_tween) ([for example](http://bl.ocks.org/mbostock/7004f92cac972edef365)) 或者使用透明度渐变的替代元素([for example](http://bl.ocks.org/mbostock/f7dcecb19c4af317e464)). 文本内容不能直接使用默认的插值器进行过渡。

<a name="transition_remove" href="#transition_remove">#</a> <i>transition</i>.<b>remove</b>() [<>](https://github.com/d3/d3-transition/blob/master/src/transition/remove.js "Source")

在过渡结束时如果元素上没有其他活动的过渡或待进行的过渡则[removes](https://github.com/d3/d3-selection#selection_remove)元素。否则什么都不做。

<a name="transition_tween" href="#transition_tween">#</a> <i>transition</i>.<b>tween</b>(<i>name</i>[, <i>value</i>]) [<>](https://github.com/d3/d3-transition/blob/master/src/transition/tween.js "Source")

为每个元素的name属性创建补间过渡。*value*必须为一个返回方法的方法形式。过渡开始时，*value*方法会对每个选中的元素进行调用，并传递当前的元素绑定的数据*d*,*i*,*this*指向当前的DOM元素。返回的方法会接受参数*t*计算出当前的值赋给name。比如对fill属性使用tween进行过渡:

```js
selection.tween("attr.fill", function() {
  var node = this, i = d3.interpolateRgb(node.getAttribute("fill"), "blue");
  return function(t) {
    node.setAttribute("fill", i(t));
  };
});
```


### Timing

过渡中的[easing](#transition_ease), [delay](#transition_delay) 和 [duration](#transition_duration)是可配置的. 参考[Animated Transitions in Statistical Data Graphics](http://vis.berkeley.edu/papers/animated_transitions/).

<a name="transition_delay" href="#transition_delay">#</a> <i>transition</i>.<b>delay</b>([<i>value</i>]) [<>](https://github.com/d3/d3-transition/blob/master/src/transition/delay.js "Source")

设置或获取延迟时间，*value*可以为常量也可以为函数，如果是函数则可以为过渡集中的每个元素设置不同的延迟时间。默认延迟时间为0.

为不同的元素设置不同的延迟时间:

```js
transition.delay(function(d, i) { return i * 10; });
```

<a name="transition_duration" href="#transition_duration">#</a> <i>transition</i>.<b>duration</b>([<i>value</i>]) [<>](https://github.com/d3/d3-transition/blob/master/src/transition/duration.js "Source")

设置或获取过渡时间，*value*可以为函数。

<a name="transition_ease" href="#transition_ease">#</a> <i>transition</i>.<b>ease</b>([<i>value</i>]) [<>](https://github.com/d3/d3-transition/blob/master/src/transition/ease.js "Source")

设置或获取[easing function(过渡方式)](https://github.com/d3/d3-ease)，默认为[d3.easeCubic](https://github.com/d3/d3-ease#easeCubic).


### Control Flow

一些对过渡的控制方法。

<a name="transition_on" href="#transition_on">#</a> <i>transition</i>.<b>on</b>(<i>typenames</i>[, <i>listener</i>]) [<>](https://github.com/d3/d3-transition/blob/master/src/transition/on.js "Source")

为过渡添加时间监听器，事件类型如下:

* `start` - 过渡开始时.
* `end` - 过渡结束后.
* `interrupt` - 过渡被中断.

参考[The Life of a Transition](#the-life-of-a-transition). 这些事件不是DOM的本地事件，而是过渡的事件。

事件类型可以通过(`.`) 指定name，也就是同一种事件类型可以指定多个事件监听器。比如`start.foo` 和 `start.bar`. 也可以同时指定多个时间监听器，通过空格隔开，比如:`start.foo start.bar`.

<a name="transition_each" href="#transition_each">#</a> <i>transition</i>.<b>each</b>(<i>function</i>) [<>](https://github.com/d3/d3-selection/blob/master/src/selection/each.js "Source")

为过渡集中的每个元素调用指定的函数。等价于[*selection*.each](https://github.com/d3/d3-selection#selection_each).

<a name="transition_call" href="#transition_call">#</a> <i>transition</i>.<b>call</b>(<i>function</i>[, <i>arguments…</i>]) [<>](https://github.com/d3/d3-selection/blob/master/src/selection/call.js "Source")

调用一次指定的函数，比如:

```js
function color(transition, fill, stroke) {
  transition
      .style("fill", fill)
      .style("stroke", stroke);
}
```

可以如下使用:

```js
d3.selectAll("div").transition().call(color, "red", "blue");
```

等价于:

```js
color(d3.selectAll("div").transition(), "red", "blue");
```

等价于 [*selection*.call](https://github.com/d3/d3-selection#selection_call).

<a name="transition_empty" href="#transition_empty">#</a> <i>transition</i>.<b>empty</b>() [<>](https://github.com/d3/d3-selection/blob/master/src/selection/empty.js "Source")

等价于 [*selection*.empty](https://github.com/d3/d3-selection#selection_empty).

<a name="transition_nodes" href="#transition_nodes">#</a> <i>transition</i>.<b>nodes</b>() [<>](https://github.com/d3/d3-selection/blob/master/src/selection/nodes.js "Source")

等价于 [*selection*.nodes](https://github.com/d3/d3-selection#selection_nodes).

<a name="transition_node" href="#transition_node">#</a> <i>transition</i>.<b>node</b>() [<>](https://github.com/d3/d3-selection/blob/master/src/selection/node.js "Source")

等价于 [*selection*.node](https://github.com/d3/d3-selection#selection_node).

<a name="transition_size" href="#transition_size">#</a> <i>transition</i>.<b>size</b>() [<>](https://github.com/d3/d3-selection/blob/master/src/selection/size.js "Source")

 等价于 [*selection*.size](https://github.com/d3/d3-selection#selection_size).

### The Life of a Transition

在使用[*selection*.transition](#selection_transition) 或者 [*transition*.transition](#transition_transition)创建一个过渡集之后，可以使用 [*transition*.delay](#transition_delay), [*transition*.duration](#transition_duration), [*transition*.attr](#transition_attr) 和 [*transition*.style](#transition_style)等方法对过渡进行配置。但是有些属性需要通过[*transition*.attrTween](#transition_attrTween) 和 [*transition*.styleTween](#transition_styleTween)来进行配置。

....不想写了...

在创建好过渡集之后，延迟和过渡集的事件监听都不能被重新定义。也就是一旦创建好了一个过渡效果，就不能再改变了。

当过渡开始时，会中断同一个元素上的同一个属性的其他过渡(如果有的话)，并且触发其事件监听器，换句话说就是如果一个元素的一个属性正在进行过渡，此时又开始了这个属性的另一个过渡，则之前的过渡会被终止，并且触发定义在之前过渡上的事件监听器。要注意这种中断发生在过渡启动时，而不是定义时。也就是后来的过渡启动的时候才会终止已经存在的过渡。也可以使用[*selection*.interrupt](#selection_interrupt)来手动终止。The starting transition also cancels any pending transitions of the same name on the same element that were created before the starting transition. The transition then dispatches a `start` event to registered listeners. This is the last moment at which the transition may be modified: after starting, the transition’s timing, tweens, and listeners may no longer be changed. The transition initializes its tweens immediately after starting.

During the frame the transition starts, but *after* all transitions starting this frame have been started, the transition invokes its tweens for the first time. Batching tween initialization, which typically involves reading from the DOM, improves performance by avoiding interleaved DOM reads and writes.

For each frame that a transition is active, it invokes its tweens with an [eased](#transition_ease) *t*-value ranging from 0 to 1. Within each frame, the transition invokes its tweens in the order they were registered.

When a transition ends, it invokes its tweens a final time with a (non-eased) *t*-value of 1. It then dispatches an `end` event to registered listeners. This is the last moment at which the transition may be inspected: after ending, the transition is deleted from the element, and its configuration is destroyed. (A transition’s configuration is also destroyed on interrupt or cancel.)
