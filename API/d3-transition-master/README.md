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

After selecting elements and creating a transition with [*selection*.transition](#selection_transition), use the transition’s transformation methods to affect document content.

<a name="transition_attr" href="#transition_attr">#</a> <i>transition</i>.<b>attr</b>(<i>name</i>, <i>value</i>) [<>](https://github.com/d3/d3-transition/blob/master/src/transition/attr.js "Source")

For each selected element, assigns the [attribute tween](#transition_attrTween) for the attribute with the specified *name* to the specified target *value*. The starting value of the tween is the attribute’s value when the transition starts. The target *value* may be specified either as a constant or a function. If a function, it is immediately evaluated for each selected element, in order, being passed the current datum `d` and index `i`, with the `this` context as the current DOM element.

If the target value is null, the attribute is removed when the transition starts. Otherwise, an interpolator is chosen based on the type of the target value, using the following algorithm:

1. If *value* is a number, use [interpolateNumber](https://github.com/d3/d3-interpolate#interpolateNumber).
2. If *value* is a [color](https://github.com/d3/d3-color#color) or a string coercible to a color, use [interpolateRgb](https://github.com/d3/d3-interpolate#interpolateRgb).
3. Use [interpolateString](https://github.com/d3/d3-interpolate#interpolateString).

To apply a different interpolator, use [*transition*.attrTween](#transition_attrTween).

<a name="transition_attrTween" href="#transition_attrTween">#</a> <i>transition</i>.<b>attrTween</b>(<i>name</i>[, <i>factory</i>]) [<>](https://github.com/d3/d3-transition/blob/master/src/transition/attrTween.js "Source")

If *factory* is specified and not null, assigns the attribute [tween](#transition_tween) for the attribute with the specified *name* to the specified interpolator *factory*. An interpolator factory is a function that returns an [interpolator](https://github.com/d3/d3-interpolate); when the transition starts, the *factory* is evaluated for each selected element, in order, being passed the current datum `d` and index `i`, with the `this` context as the current DOM element. The returned interpolator will then be invoked for each frame of the transition, in order, being passed the [eased](#transition_ease) time *t*, typically in the range [0, 1]. Lastly, the return value of the interpolator will be used to set the attribute value. The interpolator must return a string. (To remove an attribute at the start of a transition, use [*transition*.attr](#transition_attr); to remove an attribute at the end of a transition, use [*transition*.on](#transition_on) to listen for the *end* event.)

If the specified *factory* is null, removes the previously-assigned attribute tween of the specified *name*, if any. If *factory* is not specified, returns the current interpolator factory for attribute with the specified *name*, or undefined if no such tween exists.

For example, to interpolate the fill attribute from red to blue:

```js
selection.attrTween("fill", function() {
  return d3.interpolateRgb("red", "blue");
});
```

Or to interpolate from the current fill to blue, like [*transition*.attr](#transition_attr):

```js
selection.attrTween("fill", function() {
  return d3.interpolateRgb(this.getAttribute("fill"), "blue");
});
```

Or to apply a custom rainbow interpolator:

```js
selection.attrTween("fill", function() {
  return function(t) {
    return "hsl(" + t * 360 + ",100%,50%)";
  };
});
```

This method is useful to specify a custom interpolator, such as one that understands [SVG paths](http://bl.ocks.org/mbostock/3916621). A useful technique is *data interpolation*, where [d3.interpolateObject](https://github.com/d3/d3-interpolate#interpolateObject) is used to interpolate two data values, and the resulting value is then used (say, with a [shape](https://github.com/d3/d3-shape)) to compute the new attribute value.

<a name="transition_style" href="#transition_style">#</a> <i>transition</i>.<b>style</b>(<i>name</i>, <i>value</i>[, <i>priority</i>]) [<>](https://github.com/d3/d3-transition/blob/master/src/transition/style.js "Source")

For each selected element, assigns the [style tween](#transition_styleTween) for the style with the specified *name* to the specified target *value* with the specified *priority*. The starting value of the tween is the style’s computed value when the transition starts. The target *value* may be specified either as a constant or a function. If a function, it is immediately evaluated for each selected element, in order, being passed the current datum `d` and index `i`, with the `this` context as the current DOM element.

If the target value is null, the style is removed when the transition starts. Otherwise, an interpolator is chosen based on the type of the target value, using the following algorithm:

1. If *value* is a number, use [interpolateNumber](https://github.com/d3/d3-interpolate#interpolateNumber).
2. If *value* is a [color](https://github.com/d3/d3-color#color) or a string coercible to a color, use [interpolateRgb](https://github.com/d3/d3-interpolate#interpolateRgb).
3. Use [interpolateString](https://github.com/d3/d3-interpolate#interpolateString).

To apply a different interpolator, use [*transition*.styleTween](#transition_styleTween).

<a name="transition_styleTween" href="#transition_styleTween">#</a> <i>transition</i>.<b>styleTween</b>(<i>name</i>[, <i>factory</i>[, <i>priority</i>]])) [<>](https://github.com/d3/d3-transition/blob/master/src/transition/styleTween.js "Source")

If *factory* is specified and not null, assigns the style [tween](#transition_tween) for the style with the specified *name* to the specified interpolator *factory*. An interpolator factory is a function that returns an [interpolator](https://github.com/d3/d3-interpolate); when the transition starts, the *factory* is evaluated for each selected element, in order, being passed the current datum `d` and index `i`, with the `this` context as the current DOM element. The returned interpolator will then be invoked for each frame of the transition, in order, being passed the [eased](#transition_ease) time *t*, typically in the range [0, 1]. Lastly, the return value of the interpolator will be used to set the style value with the specified *priority*. The interpolator must return a string. (To remove an style at the start of a transition, use [*transition*.style](#transition_style); to remove an style at the end of a transition, use [*transition*.on](#transition_on) to listen for the *end* event.)

If the specified *factory* is null, removes the previously-assigned style tween of the specified *name*, if any. If *factory* is not specified, returns the current interpolator factory for style with the specified *name*, or undefined if no such tween exists.

For example, to interpolate the fill style from red to blue:

```js
selection.styleTween("fill", function() {
  return d3.interpolateRgb("red", "blue");
});
```

Or to interpolate from the current fill to blue, like [*transition*.style](#transition_style):

```js
selection.styleTween("fill", function() {
  return d3.interpolateRgb(getComputedStyle(this).getPropertyValue("fill"), "blue");
});
```

Or to apply a custom rainbow interpolator:

```js
selection.styleTween("fill", function() {
  return function(t) {
    return "hsl(" + t * 360 + ",100%,50%)";
  };
});
```

This method is useful to specify a custom interpolator, such as with *data interpolation*, where [d3.interpolateObject](https://github.com/d3/d3-interpolate#interpolateObject) is used to interpolate two data values, and the resulting value is then used to compute the new style value.

<a name="transition_text" href="#transition_text">#</a> <i>transition</i>.<b>text</b>(<i>value</i>) [<>](https://github.com/d3/d3-transition/blob/master/src/transition/text.js "Source")

For each selected element, sets the [text content](http://www.w3.org/TR/DOM-Level-3-Core/core.html#Node3-textContent) to the specified target *value* when the transition starts. The *value* may be specified either as a constant or a function. If a function, it is immediately evaluated for each selected element, in order, being passed the current datum `d` and index `i`, with the `this` context as the current DOM element. The function’s return value is then used to set each element’s text content. A null value will clear the content.

To interpolate text rather than to set it on start, use [*transition*.tween](#transition_tween) ([for example](http://bl.ocks.org/mbostock/7004f92cac972edef365)) or append a replacement element and cross-fade opacity ([for example](http://bl.ocks.org/mbostock/f7dcecb19c4af317e464)). Text is not interpolated by default because it is usually undesirable.

<a name="transition_remove" href="#transition_remove">#</a> <i>transition</i>.<b>remove</b>() [<>](https://github.com/d3/d3-transition/blob/master/src/transition/remove.js "Source")

For each selected element, [removes](https://github.com/d3/d3-selection#selection_remove) the element when the transition ends, as long as the element has no other active or pending transitions. If the element has other active or pending transitions, does nothing.

<a name="transition_tween" href="#transition_tween">#</a> <i>transition</i>.<b>tween</b>(<i>name</i>[, <i>value</i>]) [<>](https://github.com/d3/d3-transition/blob/master/src/transition/tween.js "Source")

For each selected element, assigns the tween with the specified *name* with the specified *value* function. The *value* must be specified as a function that returns a function. When the transition starts, the *value* function is evaluated for each selected element, in order, being passed the current datum `d` and index `i`, with the `this` context as the current DOM element. The returned function is then invoked for each frame of the transition, in order, being passed the [eased](#transition_ease) time *t*, typically in the range [0, 1]. If the specified *value* is null, removes the previously-assigned tween of the specified *name*, if any.

For example, to interpolate the fill attribute to blue, like [*transition*.attr](#transition_attr):

```js
selection.tween("attr.fill", function() {
  var node = this, i = d3.interpolateRgb(node.getAttribute("fill"), "blue");
  return function(t) {
    node.setAttribute("fill", i(t));
  };
});
```

This method is useful to specify a custom interpolator, or to perform side-effects, say to animate the [scroll offset](http://bl.ocks.org/mbostock/1649463).

### Timing

The [easing](#transition_ease), [delay](#transition_delay) and [duration](#transition_duration) of a transition is configurable. For example, a per-element delay can be used to [stagger the reordering](http://bl.ocks.org/mbostock/3885705) of elements, improving perception. See [Animated Transitions in Statistical Data Graphics](http://vis.berkeley.edu/papers/animated_transitions/) for recommendations.

<a name="transition_delay" href="#transition_delay">#</a> <i>transition</i>.<b>delay</b>([<i>value</i>]) [<>](https://github.com/d3/d3-transition/blob/master/src/transition/delay.js "Source")

For each selected element, sets the transition delay to the specified *value* in milliseconds. The *value* may be specified either as a constant or a function. If a function, it is immediately evaluated for each selected element, in order, being passed the current datum `d` and index `i`, with the `this` context as the current DOM element. The function’s return value is then used to set each element’s transition delay. If a delay is not specified, it defaults to zero.

If a *value* is not specified, returns the current value of the delay for the first (non-null) element in the transition. This is generally useful only if you know that the transition contains exactly one element.

Setting the delay to a multiple of the index `i` is a convenient way to stagger transitions across a set of elements. For example:

```js
transition.delay(function(d, i) { return i * 10; });
```

Of course, you can also compute the delay as a function of the data, or [sort the selection](https://github.com/d3/d3-selection#selection_sort) before computed an index-based delay.

<a name="transition_duration" href="#transition_duration">#</a> <i>transition</i>.<b>duration</b>([<i>value</i>]) [<>](https://github.com/d3/d3-transition/blob/master/src/transition/duration.js "Source")

For each selected element, sets the transition duration to the specified *value* in milliseconds. The *value* may be specified either as a constant or a function. If a function, it is immediately evaluated for each selected element, in order, being passed the current datum `d` and index `i`, with the `this` context as the current DOM element. The function’s return value is then used to set each element’s transition duration. If a duration is not specified, it defaults to 250ms.

If a *value* is not specified, returns the current value of the duration for the first (non-null) element in the transition. This is generally useful only if you know that the transition contains exactly one element.

<a name="transition_ease" href="#transition_ease">#</a> <i>transition</i>.<b>ease</b>([<i>value</i>]) [<>](https://github.com/d3/d3-transition/blob/master/src/transition/ease.js "Source")

Specifies the transition [easing function](https://github.com/d3/d3-ease) for all selected elements. The *value* must be specified as a function. The easing function is invoked for each frame of the animation, being passed the normalized time *t* in the range [0, 1]; it must then return the eased time *tʹ* which is typically also in the range [0, 1]. A good easing function should return 0 if *t* = 0 and 1 if *t* = 1. If an easing function is not specified, it defaults to [d3.easeCubic](https://github.com/d3/d3-ease#easeCubic).

If a *value* is not specified, returns the current easing function for the first (non-null) element in the transition. This is generally useful only if you know that the transition contains exactly one element.

### Control Flow

For advanced usage, transitions provide methods for custom control flow.

<a name="transition_on" href="#transition_on">#</a> <i>transition</i>.<b>on</b>(<i>typenames</i>[, <i>listener</i>]) [<>](https://github.com/d3/d3-transition/blob/master/src/transition/on.js "Source")

Adds or removes a *listener* to each selected element for the specified event *typenames*. The *typenames* is one of the following string event types:

* `start` - when the transition starts.
* `end` - when the transition ends.
* `interrupt` - when the transition is interrupted.

See [The Life of a Transition](#the-life-of-a-transition) for more. Note that these are *not* native DOM events as implemented by [*selection*.on](https://github.com/d3/d3-selection#selection_on) and [*selection*.dispatch](https://github.com/d3/d3-selection#selection_dispatch), but transition events!

The type may be optionally followed by a period (`.`) and a name; the optional name allows multiple callbacks to be registered to receive events of the same type, such as `start.foo` and `start.bar`. To specify multiple typenames, separate typenames with spaces, such as `interrupt end` or `start.foo start.bar`.

When a specified transition event is dispatched on a selected node, the specified *listener* will be invoked for the transitioning element, being passed the current datum `d` and index `i`, with the `this` context as the current DOM element. Listeners always see the latest datum for their element, but the index is a property of the selection and is fixed when the listener is assigned; to update the index, re-assign the listener.

If an event listener was previously registered for the same *typename* on a selected element, the old listener is removed before the new listener is added. To remove a listener, pass null as the *listener*. To remove all listeners for a given name, pass null as the *listener* and `.foo` as the *typename*, where `foo` is the name; to remove all listeners with no name, specify `.` as the *typename*.

If a *listener* is not specified, returns the currently-assigned listener for the specified event *typename* on the first (non-null) selected element, if any. If multiple typenames are specified, the first matching listener is returned.

<a name="transition_each" href="#transition_each">#</a> <i>transition</i>.<b>each</b>(<i>function</i>) [<>](https://github.com/d3/d3-selection/blob/master/src/selection/each.js "Source")

Invokes the specified *function* for each selected element, passing in the current datum `d` and index `i`, with the `this` context of the current DOM element. This method can be used to invoke arbitrary code for each selected element, and is useful for creating a context to access parent and child data simultaneously. Equivalent to [*selection*.each](https://github.com/d3/d3-selection#selection_each).

<a name="transition_call" href="#transition_call">#</a> <i>transition</i>.<b>call</b>(<i>function</i>[, <i>arguments…</i>]) [<>](https://github.com/d3/d3-selection/blob/master/src/selection/call.js "Source")

Invokes the specified *function* exactly once, passing in this transition along with any optional *arguments*. Returns this transition. This is equivalent to invoking the function by hand but facilitates method chaining. For example, to set several attributes in a reusable function:

```js
function color(transition, fill, stroke) {
  transition
      .style("fill", fill)
      .style("stroke", stroke);
}
```

Now say:

```js
d3.selectAll("div").transition().call(color, "red", "blue");
```

This is equivalent to:

```js
color(d3.selectAll("div").transition(), "red", "blue");
```

Equivalent to [*selection*.call](https://github.com/d3/d3-selection#selection_call).

<a name="transition_empty" href="#transition_empty">#</a> <i>transition</i>.<b>empty</b>() [<>](https://github.com/d3/d3-selection/blob/master/src/selection/empty.js "Source")

Returns true if this transition contains no (non-null) elements. Equivalent to [*selection*.empty](https://github.com/d3/d3-selection#selection_empty).

<a name="transition_nodes" href="#transition_nodes">#</a> <i>transition</i>.<b>nodes</b>() [<>](https://github.com/d3/d3-selection/blob/master/src/selection/nodes.js "Source")

Returns an array of all (non-null) elements in this transition. Equivalent to [*selection*.nodes](https://github.com/d3/d3-selection#selection_nodes).

<a name="transition_node" href="#transition_node">#</a> <i>transition</i>.<b>node</b>() [<>](https://github.com/d3/d3-selection/blob/master/src/selection/node.js "Source")

Returns the first (non-null) element in this transition. If the transition is empty, returns null. Equivalent to [*selection*.node](https://github.com/d3/d3-selection#selection_node).

<a name="transition_size" href="#transition_size">#</a> <i>transition</i>.<b>size</b>() [<>](https://github.com/d3/d3-selection/blob/master/src/selection/size.js "Source")

Returns the total number of elements in this transition. Equivalent to [*selection*.size](https://github.com/d3/d3-selection#selection_size).

### The Life of a Transition

Immediately after creating a transition, such as by [*selection*.transition](#selection_transition) or [*transition*.transition](#transition_transition), you may configure the transition using methods such as [*transition*.delay](#transition_delay), [*transition*.duration](#transition_duration), [*transition*.attr](#transition_attr) and [*transition*.style](#transition_style). Methods that specify target values (such as *transition*.attr) are evaluated synchronously; however, methods that require the starting value for interpolation, such as [*transition*.attrTween](#transition_attrTween) and [*transition*.styleTween](#transition_styleTween), must be deferred until the transition starts.

Shortly after creation, either at the end of the current frame or during the next frame, the transition is scheduled. At this point, the delay and `start` event listeners may no longer be changed.

When the transition subsequently starts, it interrupts the active transition of the same name on the same element, if any, dispatching an `interrupt` event to registered listeners. (Note that interrupts happen on start, not creation, and thus even a zero-delay transition will not immediately interrupt the active transition: the old transition is given a final frame. Use [*selection*.interrupt](#selection_interrupt) to interrupt immediately.) The starting transition also cancels any pending transitions of the same name on the same element that were created before the starting transition. The transition then dispatches a `start` event to registered listeners. This is the last moment at which the transition may be modified: after starting, the transition’s timing, tweens, and listeners may no longer be changed. The transition initializes its tweens immediately after starting.

During the frame the transition starts, but *after* all transitions starting this frame have been started, the transition invokes its tweens for the first time. Batching tween initialization, which typically involves reading from the DOM, improves performance by avoiding interleaved DOM reads and writes.

For each frame that a transition is active, it invokes its tweens with an [eased](#transition_ease) *t*-value ranging from 0 to 1. Within each frame, the transition invokes its tweens in the order they were registered.

When a transition ends, it invokes its tweens a final time with a (non-eased) *t*-value of 1. It then dispatches an `end` event to registered listeners. This is the last moment at which the transition may be inspected: after ending, the transition is deleted from the element, and its configuration is destroyed. (A transition’s configuration is also destroyed on interrupt or cancel.)
