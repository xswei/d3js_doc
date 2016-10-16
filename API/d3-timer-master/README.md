# d3-timer

这个模块提供了一个高效的队列，可以用来保证动画的一致性。在内部使用 [requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame) 实现。如果浏览器不支持，则切换使用 [setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setTimeout) 来实现，调用间隔为多于24ms.

## Installing

NPM等安装方法略

```html
<script src="https://d3js.org/d3-timer.v1.min.js"></script>
<script>

var timer = d3.timer(callback);

</script>
```

[Try d3-timer in your browser.](https://tonicdev.com/npm/d3-timer)

## API Reference

<a name="now" href="#now">#</a> d3.<b>now</b>() [<>](https://github.com/d3/d3-timer/blob/master/src/timer.js#L15 "Source")

返回由[performance.now](https://developer.mozilla.org/en-US/docs/Web/API/Performance/now)定义的当前时间(如果可用)，否则返回 [Date.now](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date/now) . 当前时间从页面的第一帧开始计算; 在同一帧里，这个值是一致的，同一帧内的定时器被认为是同步的。.

<a name="timer" href="#timer">#</a> d3.<b>timer</b>(<i>callback</i>[, <i>delay</i>[, <i>time</i>]]) [<>](https://github.com/d3/d3-timer/blob/master/src/timer.js#L52 "Source")

执行频率与[requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)相当。

定义一个新的*timer*定时器，一直调用*callback*直到定时器被[stopped](#timer_stop). 可选的 *delay* 以好眠为单定义了延时执行*callback*，如果没有定义延时，则表示立即执行; *delay* 的相对时间为第三个参数*time*，完整的参数结构为:从*time*开始计时，*delay*之后开始执行*callback*。*time*默认为[now](#now).

*callback* 的参数为已行时间，比如如果定时器执行超过200ms之后停止:

```js
var t = d3.timer(function(elapsed) {
  console.log(elapsed);
  if (elapsed > 200) t.stop();
}, 150);
```

执行输出大概(不同环境输出不同)为:

```
3
25
48
65
85
106
125
146
167
189
209
```


第一个输出值为3ms，是因为这个时间是定时器开始执行的时间，而不是定时器定义后开始计时。

如果 [timer](#timer) 在另一个定时器内被调用，则新的定时器会在当前帧结束前调用，而不是推迟到下一帧。在同一帧中，定时器的回调执行就得到了保证，而不关心起始时间。

<a name="timer_restart" href="#timer_restart">#</a> <i>timer</i>.<b>restart</b>(<i>callback</i>[, <i>delay</i>[, <i>time</i>]]) [<>](https://github.com/d3/d3-timer/blob/master/src/timer.js#L31 "Source")

重启定时器。相当于终止当前定时器并创新创建了一个定时器。

<a name="timer_stop" href="#timer_stop">#</a> <i>timer</i>.<b>stop</b>() [<>](https://github.com/d3/d3-timer/blob/master/src/timer.js#L43 "Source")


终止当前定时器。对已经停止的定时器没有作用。

<a name="timerFlush" href="#timerFlush">#</a> d3.<b>timerFlush</b>() [<>](https://github.com/d3/d3-timer/blob/master/src/timer.js#L58 "Source")

立即调用合法的定时器，延迟不会超过17ms。可以使用这个方法来立即执行定时器避免闪烁问题。

Immediately invoke any eligible timer callbacks. Note that zero-delay timers are normally first executed after one frame (~17ms). This can cause a brief flicker because the browser renders the page twice: once at the end of the first event loop, then again immediately on the first timer callback. By flushing the timer queue at the end of the first event loop, you can run any zero-delay timers immediately and avoid the flicker.

<a name="timeout" href="#timeout">#</a> d3.<b>timeout</b>(<i>callback</i>[, <i>delay</i>[, <i>time</i>]]) [<>](https://github.com/d3/d3-timer/blob/master/src/timeout.js "Source")

与 [timer](#timer)类似，但是只调用一次回调, 之后自动[stops](#timer_stop). 

<a name="interval" href="#interval">#</a> d3.<b>interval</b>(<i>callback</i>[, <i>delay</i>[, <i>time</i>]]) [<>](https://github.com/d3/d3-timer/blob/master/src/interval.js "Source")

可以设置时间间隔，功能与[setInterval](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval)类似。
