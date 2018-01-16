# d3-dispatch

调度机制是一段用以分离关注点的低耦合的代码:注册回调函数然后传入任意的参数调用它们。在D3的许多组件中，比如[d3-request](https://github.com/d3/d3-request), 使用这个机制来触发事件监听器。道理就像 Nodejs的 [EventEmitter](https://nodejs.org/api/events.html), 但是每个事件监听器定义明确并且很容易就可以被移除。

例如为*start*和*end*事件创建一个事件调度器:

```js
var dispatch = d3.dispatch("start", "end");
```
然后使用 [*dispatch*.on](#dispatch_on)为其注册事件监听器:

```js
dispatch.on("start", callback1);
dispatch.on("start.foo", callback2);
dispatch.on("end", callback3);
```
然后可以通过 [*dispatch*.call](#dispatch_call) 或者 [*dispatch*.apply] 来调用*start*事件的回调:

```js
dispatch.call("start");
```
与*function*.call类似，你也可以指定`this`上下文和其他参数:

```js
dispatch.call("start", {about: "I am a context object"}, "I am an argument");
```

更多例子，参考 [d3-dispatch for coordinated views](http://bl.ocks.org/mbostock/5872848).

## Installing

NPM等安装方法略

```html
<script src="https://d3js.org/d3-dispatch.v1.min.js"></script>
<script>

var dispatch = d3.dispatch("start", "end");

</script>
```

[在浏览器中测试 d3-dispatch.](https://tonicdev.com/npm/d3-dispatch)

## API Reference

<a name="dispatch" href="#dispatch">#</a> d3.<b>dispatch</b>(<i>types…</i>) [<>](https://github.com/d3/d3-dispatch/blob/master/src/dispatch.js "Source")

为指定的事件类型创建事件调度器。*types*是一个字符串类型，比如 `"start"` 或 `"end"`.

<a name="dispatch_on" href="#dispatch_on">#</a> *dispatch*.<b>on</b>(<i>typenames</i>[, <i>callback</i>]) [<>](https://github.com/d3/d3-dispatch/blob/master/src/dispatch.js#L26 "Source")

根据指定的类型，添加或移除或获取对应的事件监听器。如果指定了*callback*则添加，如果*callback*参数为null则移除。如果*callback*参数缺失则获取当前的类型监听器.

*typenames*是一个字符串类型，比如`start` 或 `end.foo`，用(`.`)将type和name分割，意味着可以为同一个type添加不同的监听器。如果要同时指定多个*typenames*则只需要将其使用空格隔开，比如`start end` 或 `start.foo start.bar`.

如果要移除相同名的所有事件监听器，则根据名即可移除，比如要移除名为`foo`的所有事件监听器，则使用 `dispatch.on(".foo", null)`.

<a name="dispatch_copy" href="#dispatch_copy">#</a> *dispatch*.<b>copy</b>() [<>](https://github.com/d3/d3-dispatch/blob/master/src/dispatch.js#L49 "Source")

返回一个调度对象的拷贝。原来的调度对象和新的调度对象之间互不影响.

<a name="dispatch_call" href="#dispatch_call">#</a> *dispatch*.<b>call</b>(<i>type</i>[, <i>that</i>[, <i>arguments…</i>]]) [<>](https://github.com/d3/d3-dispatch/blob/master/src/dispatch.js#L54 "Source")

与 [*function*.call](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call) 类似, 调用*type*对应的监听器, 并传递 *arguments* 给监听器, *that* 作为当前 `this`的上下文。 参考 [*dispatch*.apply](#dispatch_apply) 获取更多信息.

<a name="dispatch_apply" href="#dispatch_apply">#</a> *dispatch*.<b>apply</b>(<i>type</i>[, <i>that</i>[, <i>arguments</i>]]) [<>](https://github.com/d3/d3-dispatch/blob/master/src/dispatch.js#L59 "Source")

与 [*function*.apply](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)类似, 调用*type*对应的监听器, 并传递 *arguments* 给监听器, *that* 作为当前 `this`的上下文。例如如果你想在*click*事件之后调用*custom*回调，并且传递当前的*this*上下文和*arguments*则可以:

```js
selection.on("click", function() {
  dispatch.apply("custom", this, arguments);
});
```

你可以传递任何想传递给监听器的参数。更一般的，你可以创建一个表示事件的对象，或者传递当前元素绑定的数据(*d*)和索引(*i*). 参考[function.call](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function/Call) 和 [function.apply](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function/Apply) 获取更多信息.
