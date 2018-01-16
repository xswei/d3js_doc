# d3-queue

**queue(队列)**可以使得0个或多个延迟异步任务变得可配置:可以控制同时运行多少个任务。当所有的任务完成或出错后队列会将结果传递给*await*回调。这个有些类似于[Async.js](https://github.com/caolan/async)的 [parallel](https://github.com/caolan/async#paralleltasks-callback), [series](https://github.com/caolan/async#seriestasks-callback) (当 *concurrency* 为 1), 和 [queue](https://github.com/caolan/async#queue), 但是脚本的体积更小: d3-queue 经过gzip压缩后大概只有700字节而Async会有4300字节.


每个任务都被定义为一个包含回调的函数。比如有个任务在延迟之后打印hello:

```js
function delayedHello(callback) {
  setTimeout(function() {
    console.log("Hello!");
    callback(null);
  }, 250);
}
```

当任务完成后，要调用提供的回调函数。如果任务成功则回调函数的第一个参数应该为null，如果失败则第一个参数为error。可选的第二个参数可以是任务的返回值。

如果要同时执行多个任务则创建一个队列，并使用*defer*来添加任务，然后注册一个*await*回调以备任务执行完成(成功或失败)后调用:

```js

var q = d3.queue();
q.defer(delayedHello);
q.defer(delayedHello);
q.await(function(error) {
  if (error) throw error;
  console.log("Goodbye!");
});

```

当然你也可以使用`for`循环来延迟任务:


```js
var q = d3.queue();

for (var i = 0; i < 1000; ++i) {
  q.defer(delayedHello);
}

q.awaitAll(function(error) {
  if (error) throw error;
  console.log("Goodbye!");
});
```

任务函数可以接收可选的参数，比如给上面的delayHello添加name参数:

```js
function delayedHello(name, delay, callback) {
  setTimeout(function() {
    console.log("Hello, " + name + "!");
    callback(null);
  }, delay);
}
```

提供给[*queue*.defer](#queue_defer)的参数会自动传递给任务函数. 比如:

```js
d3.queue()
    .defer(delayedHello, "Alice", 250)
    .defer(delayedHello, "Bob", 500)
    .defer(delayedHello, "Carol", 750)
    .await(function(error) {
      if (error) throw error;
      console.log("Goodbye!");
    });
```
[asynchronous callback pattern(异步回调模式)](https://github.com/maxogden/art-of-node#callbacks)在Node.js中很常见。Queue可以直接与Node的接口一起使用，比如同时[stat two files(并发两个文件)](https://nodejs.org/dist/latest/docs/api/fs.html#fs_fs_stat_path_callback):

```js
d3.queue()
    .defer(fs.stat, __dirname + "/../Makefile")
    .defer(fs.stat, __dirname + "/../package.json")
    .await(function(error, file1, file2) {
      if (error) throw error;
      console.log(file1, file2);
    });
```

你也可以使用可以中段的任务:这些任务由*abort*方法返回一个对象来中断任务。如果任务通过[setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setTimeout) 来触发，则可以使用 [clearTimeout](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/clearTimeout) 来中断。例如:

```js
function delayedHello(name, delay, callback) {
  var id = setTimeout(function() {
    console.log("Hello, " + name + "!");
    callback(null);
  }, delay);
  return {
    abort: function() {
      clearTimeout(id);
    }
  };
}
```

如果调用[*queue*.abort](#queue_abort)，则所有进行中的任务都会被中断。另外，没有被启动的任务也不会被开始执行，比如使用队列来进行资源请求:

```js
var q = d3.queue()
    .defer(d3.request, "http://www.google.com:81")
    .defer(d3.request, "http://www.google.com:81")
    .defer(d3.request, "http://www.google.com:81")
    .awaitAll(function(error, results) {
      if (error) throw error;
      console.log(results);
    });
```

调用 `q.abort()`可以中断这些请求.

## Installing

NPM等安装方法略

```html
<script src="https://d3js.org/d3-queue.v3.min.js"></script>
<script>

var q = d3.queue();

</script>
```

[Try d3-queue in your browser.](https://tonicdev.com/npm/d3-queue)

## API Reference

<a href="#queue" name="queue">#</a> d3.<b>queue</b>([<i>concurrency</i>]) [<>](https://github.com/d3/d3-queue/blob/master/src/queue.js "Source")

构建一个并发数为*concurrency*的队列。如果*concurrency*没有指定，则队列的并发数没有限制。如果*concurrency*为正值。比如*concurrency*为1时所有的任务会严格串联执行，也就是一个完了接着下一个。如果*concurrency*为3则最多可以同时执行3个任务。

<a href="#queue_defer" name="queue_defer">#</a> <i>queue</i>.<b>defer</b>(<i>task</i>[, <i>arguments</i>…]) [<>](https://github.com/d3/d3-queue/blob/master/src/queue.js#L20 "Source")

设置*task*方法到队列中，可选的*arguments*. 在定义*task*函数时，可以指定一个回调，回调参数作为*task*函数的最后一个参数。则任务完成时会调用这个回调.

比如有个simpleTask函数，在延迟250ms后执行，执行完后直接调用回调:

```js
function simpleTask(callback) {
  setTimeout(function() {
    callback(null, {answer: 42});
  }, 250);
}
```

如果任务出错，则后续的任务将不会被开始。对于串联式队列(*concurrency*为1)，所有的任务都当前序任务成功完成后才会执行。对于*concurrency*不为1的多并发任务，一旦某个任务出错，则错误会被传给*await*回调，此时已经在执行的任务继续执行，但是这些继续执行的任务结果不会传给*await*回调。

任务只能在[*queue*.await](#queue_await) or [*queue*.awaitAll](#queue_awaitAll)之前调用。如果任务在这两个之后调用，则会出错。如果*task*不是一个函数也会出错。

<a href="#queue_abort" name="queue_abort">#</a> <i>queue</i>.<b>abort</b>() [<>](https://github.com/d3/d3-queue/blob/master/src/queue.js#L29 "Source")

中断当前所有的任务，并立即调用[*queue*.await](#queue_await) 或 [*queue*.awaitAll](#queue_awaitAll) 回调。参考 [introduction](#d3-queue)中的例子来获取中断任务的信息。

<a href="#queue_await" name="queue_await">#</a> <i>queue</i>.<b>await</b>(<i>callback</i>) [<>](https://github.com/d3/d3-queue/blob/master/src/queue.js#L33 "Source")

当所有的延迟任务完成后调用*callback*。*callback*的第一个参数为null(如果成功)或error(如果出错)。比如:

```js
d3.queue()
    .defer(fs.stat, __dirname + "/../Makefile")
    .defer(fs.stat, __dirname + "/../package.json")
    .await(function(error, file1, file2) { console.log(file1, file2); });
```

如果所有的[deferred](#queue_defer)已经完成则立即调用tcallback. 如果*callback*不是函数则会抛出错误。

<a href="#queue_awaitAll" name="queue_awaitAll">#</a> <i>queue</i>.<b>awaitAll</b>(<i>callback</i>) [<>](https://github.com/d3/d3-queue/blob/master/src/queue.js#L39 "Source")

当所有的延迟任务完成时调用*callback*。第一个参数为null(如果成功)或error(如果失败)。如果出错则不会向callback传递额外的参数。否则会将结果作为第二个参数传递给callback。例如:

```js
d3.queue()
    .defer(fs.stat, __dirname + "/../Makefile")
    .defer(fs.stat, __dirname + "/../package.json")
    .awaitAll(function(error, files) { console.log(files); });
```

如果所有的[deferred](#queue_defer)任务都完成则立即调用callback. 如果*callback*不是方法则抛出错误。
