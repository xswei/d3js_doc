# d3-dispatch

分发是一个用来降低代码耦合度的机制：注册回调函数然后使用任意参数调用。很多D3组件比如[d3-request](https://github.com/xswei/d3js_doc/blob/master/API_Reference/d3-request)，通过这种机制触发事件监听器。与Node’s [EventEmitter](https://nodejs.org/api/events.html)类似，只不过每个监听器都有确定的名字以方便移除或替换。

例如创建一个用来分发*start* 和 *end*的分发器:

```js
var dispatch = d3.dispatch("start", "end");
```
然后使用[*dispatch*.on](#dispatch_on)注册回调函数：


```js
dispatch.on("start", callback1);
dispatch.on("start.foo", callback2);
dispatch.on("end", callback3);
```

然后可以通过[*dispatch*.call](#dispatch_call) 或者 [*dispatch*.apply](#dispatch_apply)来调用所有的*start*回调：

```js
dispatch.call("start");
```

和*function*.call类似，你也可以指定`this`环境和任意参数：

```js
dispatch.call("start", {about: "I am a context object"}, "I am an argument");
```

更多分发的例子参考[d3-dispatch for coordinated views](http://bl.ocks.org/mbostock/5872848).

## Installing

- NPM：  `npm install d3-dispatch`
- 下载[最新版](https://github.com/d3/d3-dispatch/releases/latest)，可以作为一个标准的独立库，也可以作为[D3 4.0](https://github.com/d3/d3)的一部分引入，会创建`d3`全局变量

```html
<script src="https://d3js.org/d3-dispatch.v1.min.js"></script>
<script>

var dispatch = d3.dispatch("start", "end");

</script>
```

[在浏览器中测试 d3-dispatch](https://tonicdev.com/npm/d3-dispatch)

## API Reference

<a name="dispatch" href="#dispatch">#</a> d3.<b>dispatch</b>(<i>types…</i>) [<>](https://github.com/d3/d3-dispatch/blob/master/src/dispatch.js "Source")

为指定的事件*types*创建一个新的分发器。每个*type*都是一个字符串，比如`"start"` or `"end"`.

创建的时候只能指定*types*，不能指定*names*, 与绑定监听器不同。


<a name="dispatch_on" href="#dispatch_on">#</a> *dispatch*.<b>on</b>(<i>typenames</i>[, <i>callback</i>]) [<>](https://github.com/d3/d3-dispatch/blob/master/src/dispatch.js#L26 "Source")

添加、移除或者获取指定*typenames*的 *callback*。如果 *callback*为方法则表示为对应的 *typenames*指定回调，如果对应的 *typenames*已经有回调，则替换。

*typenames*是一个字符串，包含(`.`)分开的*type*和*names*，其中*names*可选。比如`start` or `end.foo`这种形式。也就是说同一种*type*可以指定多个不同*name*的回调，比如`start.foo` 和 `start.bar`，在创建时可以使用空格隔开:`start end` or `start.foo start.bar`

移除所有*name*为*foo*的回调，使用`dispatch.on(".foo", null)`

如果没有指定*callback*参数，则表示返回当前*typenames*的回调。如果有多个*typenames*，则返回第一个匹配的回调。

<a name="dispatch_copy" href="#dispatch_copy">#</a> *dispatch*.<b>copy</b>() [<>](https://github.com/d3/d3-dispatch/blob/master/src/dispatch.js#L49 "Source")

返回当前分发对象的一个副本，修改主体不会对副本有影响。

<a name="dispatch_call" href="#dispatch_call">#</a> *dispatch*.<b>call</b>(<i>type</i>[, <i>that</i>[, <i>arguments…</i>]]) [<>](https://github.com/d3/d3-dispatch/blob/master/src/dispatch.js#L54 "Source")

与[*function*.call](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)类似, 调用对应*type*的回调，并为回调函数传递*arguments*，*that*参数会被作为回调函数中的`this`上下文。参考[*dispatch*.apply](#dispatch_apply)。

触发的时候只能指定*types*，不能指定*names*, 与绑定监听器不同。

<a name="dispatch_apply" href="#dispatch_apply">#</a> *dispatch*.<b>apply</b>(<i>type</i>[, <i>that</i>[, <i>arguments</i>]]) [<>](https://github.com/d3/d3-dispatch/blob/master/src/dispatch.js#L59 "Source")

触发的时候只能指定*types*，不能指定*names*, 与绑定监听器不同。

与 [*function*.apply](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)类似, 调用指定的*type*对应的回调函数，并传递指定的*arguments*，*that*则会被作为回调函数中的`this`上下文。例如如果你想在原始的点击事件中触发自定义的回调，并且传递当前的上下文环境和参数，则可以：

```js
selection.on("click", function() {
  dispatch.apply("custom", this, arguments);
});
```

你可以传递任何想传递的参数，更一般的情况下，你可能会创建一个对象表示当前事件，或者传递当前的数据(*d*)  和索引 (*i*)；参考[function.call](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function/Call) 和 [function.apply](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function/Apply) 获取更多信息。
