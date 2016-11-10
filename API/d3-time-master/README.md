# d3-time

可视化过程中经常遇到不规则的时间，比如在[Gregorian calendar](https://en.wikipedia.org/wiki/Gregorian_calendar)中，月份有28,29,30和31天。年份也有365和366天。在夏令时，有23,24,25个小时之分。

因为这些时间特性，在生成时间刻度时候是困难的。比如你想计算两个时间之间的天数的时候，你不能简单的使用毫秒数差除以24小时:

```js
var start = new Date(2015, 02, 01), // Sun Mar 01 2015 00:00:00 GMT-0800 (PST)
    end = new Date(2015, 03, 01); // Wed Apr 01 2015 00:00:00 GMT-0700 (PDT)
(end - start) / 864e5; // 30.958333333333332, oops!
```

相反，可以使用[timeDay](#timeDay).[count](#interval_count)方法来正确计算:

```js
d3.timeDay.count(start, end); // 31
```

[day](#day) [interval](#api-reference)是d3-time模块中的一个方法。也支持其他的时间间隔，比如[hours](#timeHour), [weeks](#timeWeek), [months](#timeMonth), *等等.*  为了计算[rounding](#interval_round) 和 [counting](#interval_count), intervals也可以用来生成一组边界日历，比如生成当前月份的所有周日: 

```js
var now = new Date;
d3.timeWeek.range(d3.timeMonth.floor(now), d3.timeMonth.ceil(now));
// [Sun Jun 07 2015 00:00:00 GMT-0700 (PDT),
//  Sun Jun 14 2015 00:00:00 GMT-0700 (PDT),
//  Sun Jun 21 2015 00:00:00 GMT-0700 (PDT),
//  Sun Jun 28 2015 00:00:00 GMT-0700 (PDT)]
```

d3-time模块的实现基于ECMAScript [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date). 

这个模块常常被D3的time比例尺使用来生成刻度. 也可以直接用来生成[calendar layouts](http://bl.ocks.org/mbostock/4063318)一样的东西.

## Installing

NPM等安装的方法略

```html
<script src="https://d3js.org/d3-time.v1.min.js"></script>
<script>

var day = d3.timeDay(new Date);

</script>
```

[在浏览器中测试d3-time.](https://tonicdev.com/npm/d3-time)

## API Reference


<a name="_interval" href="#_interval">#</a> <i>interval</i>(<i>date</i>) [<>](https://github.com/d3/d3-time/blob/master/src/interval.js#L6 "Source")

[*interval*.floor](#interval_floor)的别称. 例如, [timeYear](#timeYear)(*date*) 和 timeYear.floor(*date*) 是等价的.

<a name="interval_floor" href="#interval_floor">#</a> <i>interval</i>.<b>floor</b>(<i>date</i>) [<>](https://github.com/d3/d3-time/blob/master/src/interval.js#L10 "Source")

对时间进行向下取整，返回一个新的Date表示。取整的精度取决于*interval*，例如:

```js
var date = new Date("2016-11-10 12:25:30");	//date:Thu Nov 10 2016 12:25:30 GMT+0800 (中国标准时间)

d3.timeMinute.floor(date);	//Thu Nov 10 2016 12:25:00 GMT+0800 (中国标准时间)

d3.timeDay.floor(date);	//Thu Nov 10 2016 00:00:00 GMT+0800 (中国标准时间)

```

这个方法是幂等的:如果*date*已经为整了，则返回一个相等的新的date表示。另外这个方法可以进行运算，比如*interval*.floor(*interval*.floor(*date*) - 1) 会返回计算后的date表示:

```js
d3.timeDay.floor(date);	//Thu Nov 10 2016 00:00:00 GMT+0800 (中国标准时间)

d3.timeDay(d3.timeDay.floor(date)-1);	//Wed Nov 09 2016 00:00:00 GMT+0800 (中国标准时间)

``` 

要注意的是Date对象不能通过 `==` and `===`来进行比较，也就是说你不能使用 `==` and `===`来判断一个date已经为整，但是你可以将其转化为数值类型来判断:

```js
// Returns true if the specified date is a day boundary.
function isDay(date) {
  return +d3.timeDay.floor(date) === +date;
}
```

这个方法比测试是否是12:00 AM来判断是否为天数整数更可靠

<a name="interval_round" href="#interval_round">#</a> <i>interval</i>.<b>round</b>(<i>date</i>) [<>](https://github.com/d3/d3-time/blob/master/src/interval.js#L16 "Source")

同为取整，只不过不是向下取整，而是取最接近的，如果为[timeDay](#timeDay)的话，要看传入的具体时间返回当前或者下一天的date表示。

<a name="interval_ceil" href="#interval_ceil">#</a> <i>interval</i>.<b>ceil</b>(<i>date</i>) [<>](https://github.com/d3/d3-time/blob/master/src/interval.js#L12 "Source")

向上取整。返回下个整数日期

<a name="interval_offset" href="#interval_offset">#</a> <i>interval</i>.<b>offset</b>(<i>date</i>[, <i>step</i>]) [<>](https://github.com/d3/d3-time/blob/master/src/interval.js#L22 "Source")

返回相对date，距离为step的date表示。*step*默认为1。*step*为负数时则表示已经过去的date。

比如:

```js

var date = new Date("2016-11-10 12:25:30");	//date:Thu Nov 10 2016 12:25:30 GMT+0800 (中国标准时间)

d3.timeDay.offset(date,1);	//Fri Nov 11 2016 12:25:30 GMT+0800 (中国标准时间)

d3.timeDay.offset(date,10);	//Sun Nov 20 2016 12:25:30 GMT+0800 (中国标准时间)

d3.timeDay.offset(date,-10);	//Mon Oct 31 2016 12:25:30 GMT+0800 (中国标准时间)

```

<a name="interval_range" href="#interval_range">#</a> <i>interval</i>.<b>range</b>(<i>start</i>, <i>stop</i>[, <i>step</i>]) [<>](https://github.com/d3/d3-time/blob/master/src/interval.js#L26 "Source")

在start和stop之间返回步长为step的一组date表示。

```js

var start = new Date("2016-11-1 12:25:30");
var stop = new Date("2016-11-10 12:25:30");

d3.timeDay.range(start,stop,2);
//
[Wed Nov 02 2016 00:00:00 GMT+0800 (中国标准时间),
Fri Nov 04 2016 00:00:00 GMT+0800 (中国标准时间),
Sun Nov 06 2016 00:00:00 GMT+0800 (中国标准时间),
Tue Nov 08 2016 00:00:00 GMT+0800 (中国标准时间),
Thu Nov 10 2016 00:00:00 GMT+0800 (中国标准时间)]

//以天为单位，每隔2天取一个值，也可以不用d3.timeDay改用其他的时间单位

```

奇数天:

```js
d3.timeDay.range(new Date(2015, 0, 1), new Date(2015, 0, 7), 2);
// [Thu Jan 01 2015 00:00:00 GMT-0800 (PST),
//  Sat Jan 03 2015 00:00:00 GMT-0800 (PST),
//  Mon Jan 05 2015 00:00:00 GMT-0800 (PST)]
```

偶数天:

```js
d3.timeDay.range(new Date(2015, 0, 2), new Date(2015, 0, 8), 2);
// [Fri Jan 02 2015 00:00:00 GMT-0800 (PST),
//  Sun Jan 04 2015 00:00:00 GMT-0800 (PST),
//  Tue Jan 06 2015 00:00:00 GMT-0800 (PST)]
```

这个方法也可以使用[*interval*.every](#interval_every)代替.

<a name="interval_filter" href="#interval_filter">#</a> <i>interval</i>.<b>filter</b>(<i>test</i>) [<>](https://github.com/d3/d3-time/blob/master/src/interval.js#L35 "Source")

手动过滤某些时间，比如返回某个月的1号，11号，21号，31号:

```js
var i = d3.timeDay.filter(function(d) { return (d.getDate() - 1) % 10 === 0; });
```

<a name="interval_every" href="#interval_every">#</a> <i>interval</i>.<b>every</b>(<i>step</i>) [<>](https://github.com/d3/d3-time/blob/master/src/interval.js#L50 "Source")

返回过滤后的时间间隔，步长为*step*。比如[timeMinute](#timeMinute).every(15) 返回一组间隔为15分钟的时间序列: :00, :15, :30, :45, <i>etc.</i> 这个方法与[*interval*.range](#interval_range)结合使用: 

```js
d3.timeDay.every(2).range(new Date(2015, 0, 1), new Date(2015, 0, 7));
// [Thu Jan 01 2015 00:00:00 GMT-0800 (PST),
//  Sat Jan 03 2015 00:00:00 GMT-0800 (PST),
//  Mon Jan 05 2015 00:00:00 GMT-0800 (PST)]
```

or:

```js
d3.timeDay.every(2).range(new Date(2015, 0, 2), new Date(2015, 0, 8));
// [Sat Jan 03 2015 00:00:00 GMT-0800 (PST),
//  Mon Jan 05 2015 00:00:00 GMT-0800 (PST),
//  Wed Jan 07 2015 00:00:00 GMT-0800 (PST)]
```

参考[*interval*.filter](#interval_filter).

<a name="interval_count" href="#interval_count">#</a> <i>interval</i>.<b>count</b>(<i>start</i>, <i>end</i>) [<>](https://github.com/d3/d3-time/blob/master/src/interval.js#L44 "Source")

记数，在start和stop之间统计个数，单位由*interval*表示，比如统计从今年开始，到现在过了多少天:

```js
var now = new Date;
d3.timeDay.count(d3.timeYear(now), now); // 177
```

除了时分秒年月日之外还可以统计其他单位的，比如有多少个周日:

```js
d3.timeSunday.count(d3.timeYear(now), now); // 25
```

<a name="timeInterval" href="#timeInterval">#</a> d3.<b>timeInterval</b>(<i>floor</i>, <i>offset</i>[, <i>count</i>[, <i>field</i>]]) [<>](https://github.com/d3/d3-time/blob/master/src/interval.js#L4 "Source")

根据指定的*floor* 和 *offset*方法以及可选的 *count*函数构造一个*interval*。

*floor*接受date参数，并将其向下取整

*offset*函数接受date和整数步长为参数，计算出距离date步长为step的时间点

可选的*count*函数接受start和stop时间。并返回两者之间以某个时间为单位的统计个数，具体的实现要自定义。

可选的*field*函数的行为用来定义实现[*interval*.every](#interval_every)的功能

### Intervals

d3-time模块提供了如下*interval*

<a name="timeMillisecond" href="#timeMillisecond">#</a> d3.<b>timeMillisecond</b> [<>](https://github.com/d3/d3-time/blob/master/src/millisecond.js "Source")
<br><a href="#timeMillisecond">#</a> d3.<b>utcMillisecond</b>

毫秒，最小的可用的时间单位

<a name="timeSecond" href="#timeSecond">#</a> d3.<b>timeSecond</b> [<>](https://github.com/d3/d3-time/blob/master/src/second.js "Source")
<br><a href="#timeSecond">#</a> d3.<b>utcSecond</b>

秒

<a name="timeMinute" href="#timeMinute">#</a> d3.<b>timeMinute</b> [<>](https://github.com/d3/d3-time/blob/master/src/minute.js "Source")
<br><a href="#timeMinute">#</a> d3.<b>utcMinute</b> [<>](https://github.com/d3/d3-time/blob/master/src/utcMinute.js "Source")

分钟

<a name="timeHour" href="#timeHour">#</a> d3.<b>timeHour</b> [<>](https://github.com/d3/d3-time/blob/master/src/hour.js "Source")
<br><a href="#timeHour">#</a> d3.<b>utcHour</b> [<>](https://github.com/d3/d3-time/blob/master/src/utcHour.js "Source")

小时

<a name="timeDay" href="#timeDay">#</a> d3.<b>timeDay</b> [<>](https://github.com/d3/d3-time/blob/master/src/day.js "Source")
<br><a href="#timeDay">#</a> d3.<b>utcDay</b> [<>](https://github.com/d3/d3-time/blob/master/src/utcDay.js "Source")

天

<a name="timeWeek" href="#timeWeek">#</a> d3.<b>timeWeek</b> [<>](https://github.com/d3/d3-time/blob/master/src/week.js "Source")
<br><a href="#timeWeek">#</a> d3.<b>utcWeek</b> [<>](https://github.com/d3/d3-time/blob/master/src/utcWeek.js "Source")

等价于[sunday](#sunday)

<a name="timeSunday" href="#timeSunday">#</a> d3.<b>timeSunday</b> [<>](https://github.com/d3/d3-time/blob/master/src/week.js#L15 "Source")
<br><a href="#timeSunday">#</a> d3.<b>utcSunday</b> [<>](https://github.com/d3/d3-time/blob/master/src/utcWeek.js#L15 "Source")

周日

<a name="timeMonday" href="#timeMonday">#</a> d3.<b>timeMonday</b> [<>](https://github.com/d3/d3-time/blob/master/src/week.js#L16 "Source")
<br><a href="#timeMonday">#</a> d3.<b>utcMonday</b> [<>](https://github.com/d3/d3-time/blob/master/src/utcWeek.js#L16 "Source")

周一

<a name="timeTuesday" href="#timeTuesday">#</a> d3.<b>timeTuesday</b> [<>](https://github.com/d3/d3-time/blob/master/src/week.js#L17 "Source")
<br><a href="#timeTuesday">#</a> d3.<b>utcTuesday</b> [<>](https://github.com/d3/d3-time/blob/master/src/utcWeek.js#L17 "Source")

周二

<a name="timeWednesday" href="#timeWednesday">#</a> d3.<b>timeWednesday</b> [<>](https://github.com/d3/d3-time/blob/master/src/week.js#L18 "Source")
<br><a href="#timeWednesday">#</a> d3.<b>utcWednesday</b> [<>](https://github.com/d3/d3-time/blob/master/src/utcWeek.js#L18 "Source")

周三

<a name="timeThursday" href="#timeThursday">#</a> d3.<b>timeThursday</b> [<>](https://github.com/d3/d3-time/blob/master/src/week.js#L19 "Source")
<br><a href="#timeThursday">#</a> d3.<b>utcThursday</b> [<>](https://github.com/d3/d3-time/blob/master/src/utcWeek.js#L19 "Source")

周四

<a name="timeFriday" href="#timeFriday">#</a> d3.<b>timeFriday</b> [<>](https://github.com/d3/d3-time/blob/master/src/week.js#L20 "Source")
<br><a href="#timeFriday">#</a> d3.<b>utcFriday</b> [<>](https://github.com/d3/d3-time/blob/master/src/utcWeek.js#L20 "Source")

周五

<a name="timeSaturday" href="#timeSaturday">#</a> d3.<b>timeSaturday</b> [<>](https://github.com/d3/d3-time/blob/master/src/week.js#L21 "Source")
<br><a href="#timeSaturday">#</a> d3.<b>utcSaturday</b> [<>](https://github.com/d3/d3-time/blob/master/src/utcWeek.js#L21 "Source")

周六

<a name="timeMonth" href="#timeMonth">#</a> d3.<b>timeMonth</b> [<>](https://github.com/d3/d3-time/blob/master/src/month.js "Source")
<br><a href="#timeMonth">#</a> d3.<b>utcMonth</b> [<>](https://github.com/d3/d3-time/blob/master/src/utcMonth.js "Source")

月

<a name="timeYear" href="#timeYear">#</a> d3.<b>timeYear</b> [<>](https://github.com/d3/d3-time/blob/master/src/year.js "Source")
<br><a href="#timeYear">#</a> d3.<b>utcYear</b> [<>](https://github.com/d3/d3-time/blob/master/src/utcYear.js "Source")

年

### Ranges

为方便起见，也提供了[*interval*.range](#interval_range)的简写的方式

<a name="timeMilliseconds" href="#timeMilliseconds">#</a> d3.<b>timeMilliseconds</b>(<i>start</i>, <i>stop</i>[, <i>step</i>]) [<>](https://github.com/d3/d3-time/blob/master/src/millisecond.js#L26 "Source")
<br><a href="#timeMilliseconds">#</a> d3.<b>utcMilliseconds</b>(<i>start</i>, <i>stop</i>[, <i>step</i>])

等价于 [timeMillisecond](#timeMillisecond).[range](#interval_range) 和 [utcMillisecond](#timeMillisecond).[range](#interval_range).

<a name="timeSeconds" href="#timeSeconds">#</a> d3.<b>timeSeconds</b>(<i>start</i>, <i>stop</i>[, <i>step</i>]) [<>](https://github.com/d3/d3-time/blob/master/src/second.js#L15 "Source")
<br><a href="#timeSeconds">#</a> d3.<b>utcSeconds</b>(<i>start</i>, <i>stop</i>[, <i>step</i>])

等价于 [timeSecond](#timeSecond).[range](#interval_range) 和 [utcSecond](#timeSecond).[range](#interval_range).

<a name="timeMinutes" href="#timeMinutes">#</a> d3.<b>timeMinutes</b>(<i>start</i>, <i>stop</i>[, <i>step</i>]) [<>](https://github.com/d3/d3-time/blob/master/src/minute.js#L15 "Source")
<br><a href="#timeMinutes">#</a> d3.<b>utcMinutes</b>(<i>start</i>, <i>stop</i>[, <i>step</i>]) [<>](https://github.com/d3/d3-time/blob/master/src/utcMinute.js#L15 "Source")

等价于 [timeMinute](#timeMinute).[range](#interval_range) 和 [utcMinute](#timeMinute).[range](#interval_range).

<a name="timeHours" href="#timeHours">#</a> d3.<b>timeHours</b>(<i>start</i>, <i>stop</i>[, <i>step</i>]) [<>](https://github.com/d3/d3-time/blob/master/src/hour.js#L17 "Source")
<br><a href="#timeHours">#</a> d3.<b>utcHours</b>(<i>start</i>, <i>stop</i>[, <i>step</i>]) [<>](https://github.com/d3/d3-time/blob/master/src/utcHour.js#L15 "Source")

等价于 [timeHour](#timeHour).[range](#interval_range) 和 [utcHour](#timeHour).[range](#interval_range).

<a name="timeDays" href="#timeDays">#</a> d3.<b>timeDays</b>(<i>start</i>, <i>stop</i>[, <i>step</i>]) [<>](https://github.com/d3/d3-time/blob/master/src/day.js#L15 "Source")
<br><a href="#timeDays">#</a> d3.<b>utcDays</b>(<i>start</i>, <i>stop</i>[, <i>step</i>]) [<>](https://github.com/d3/d3-time/blob/master/src/utcDay.js#L15 "Source")

等价于 [timeDay](#timeDay).[range](#interval_range) 和 [utcDay](#timeDay).[range](#interval_range).

<a name="timeWeeks" href="#timeWeeks">#</a> d3.<b>timeWeeks</b>(<i>start</i>, <i>stop</i>[, <i>step</i>])
<br><a href="#timeWeeks">#</a> d3.<b>utcWeeks</b>(<i>start</i>, <i>stop</i>[, <i>step</i>])

等价于 [timeWeek](#timeWeek).[range](#interval_range) 和 [utcWeek](#timeWeek).[range](#interval_range).

<a name="timeSundays" href="#timeSundays">#</a> d3.<b>timeSundays</b>(<i>start</i>, <i>stop</i>[, <i>step</i>]) [<>](https://github.com/d3/d3-time/blob/master/src/week.js#L23 "Source")
<br><a href="#timeSundays">#</a> d3.<b>utcSundays</b>(<i>start</i>, <i>stop</i>[, <i>step</i>]) [<>](https://github.com/d3/d3-time/blob/master/src/utcWeek.js#L23 "Source")

等价于 [timeSunday](#timeSunday).[range](#interval_range) 和 [utcSunday](#timeSunday).[range](#interval_range).

<a name="timeMondays" href="#timeMondays">#</a> d3.<b>timeMondays</b>(<i>start</i>, <i>stop</i>[, <i>step</i>]) [<>](https://github.com/d3/d3-time/blob/master/src/week.js#L24 "Source")
<br><a href="#timeMondays">#</a> d3.<b>utcMondays</b>(<i>start</i>, <i>stop</i>[, <i>step</i>]) [<>](https://github.com/d3/d3-time/blob/master/src/utcWeek.js#L24 "Source")

等价于 [timeMonday](#timeMonday).[range](#interval_range) 和 [utcMonday](#timeMonday).[range](#interval_range).

<a name="timeTuesdays" href="#timeTuesdays">#</a> d3.<b>timeTuesdays</b>(<i>start</i>, <i>stop</i>[, <i>step</i>]) [<>](https://github.com/d3/d3-time/blob/master/src/week.js#L25 "Source")
<br><a href="#timeTuesdays">#</a> d3.<b>utcTuesdays</b>(<i>start</i>, <i>stop</i>[, <i>step</i>]) [<>](https://github.com/d3/d3-time/blob/master/src/utcWeek.js#L25 "Source")

等价于 [timeTuesday](#timeTuesday).[range](#interval_range) 和 [utcTuesday](#timeTuesday).[range](#interval_range).

<a name="timeWednesdays" href="#timeWednesdays">#</a> d3.<b>timeWednesdays</b>(<i>start</i>, <i>stop</i>[, <i>step</i>]) [<>](https://github.com/d3/d3-time/blob/master/src/week.js#L26 "Source")
<br><a href="#timeWednesdays">#</a> d3.<b>utcWednesdays</b>(<i>start</i>, <i>stop</i>[, <i>step</i>]) [<>](https://github.com/d3/d3-time/blob/master/src/utcWeek.js#L26 "Source")

等价于 [timeWednesday](#timeWednesday).[range](#interval_range) 和 [utcWednesday](#timeWednesday).[range](#interval_range).

<a name="timeThursdays" href="#timeThursdays">#</a> d3.<b>timeThursdays</b>(<i>start</i>, <i>stop</i>[, <i>step</i>]) [<>](https://github.com/d3/d3-time/blob/master/src/week.js#L27 "Source")
<br><a href="#timeThursdays">#</a> d3.<b>utcThursdays</b>(<i>start</i>, <i>stop</i>[, <i>step</i>]) [<>](https://github.com/d3/d3-time/blob/master/src/utcWeek.js#L27 "Source")

等价于 [timeThursday](#timeThursday).[range](#interval_range) 和 [utcThursday](#timeThursday).[range](#interval_range).

<a name="timeFridays" href="#timeFridays">#</a> d3.<b>timeFridays</b>(<i>start</i>, <i>stop</i>[, <i>step</i>]) [<>](https://github.com/d3/d3-time/blob/master/src/week.js#L28 "Source")
<br><a href="#timeFridays">#</a> d3.<b>utcFridays</b>(<i>start</i>, <i>stop</i>[, <i>step</i>]) [<>](https://github.com/d3/d3-time/blob/master/src/utcWeek.js#L28 "Source")

等价于 [timeFriday](#timeFriday).[range](#interval_range) 和 [utcFriday](#timeFriday).[range](#interval_range).

<a name="timeSaturdays" href="#timeSaturdays">#</a> d3.<b>timeSaturdays</b>(<i>start</i>, <i>stop</i>[, <i>step</i>]) [<>](https://github.com/d3/d3-time/blob/master/src/week.js#L29 "Source")
<br><a href="#timeSaturdays">#</a> d3.<b>utcSaturdays</b>(<i>start</i>, <i>stop</i>[, <i>step</i>]) [<>](https://github.com/d3/d3-time/blob/master/src/utcWeek.js#L29 "Source")

等价于 [timeSaturday](#timeSaturday).[range](#interval_range) 和 [utcSaturday](#timeSaturday).[range](#interval_range).

<a name="timeMonths" href="#timeMonths">#</a> d3.<b>timeMonths</b>(<i>start</i>, <i>stop</i>[, <i>step</i>]) [<>](https://github.com/d3/d3-time/blob/master/src/month.js#L15 "Source")
<br><a href="#timeMonths">#</a> d3.<b>utcMonths</b>(<i>start</i>, <i>stop</i>[, <i>step</i>]) [<>](https://github.com/d3/d3-time/blob/master/src/utcMonth.js#L15 "Source")

等价于 [timeMonth](#timeMonth).[range](#interval_range) 和 [utcMonth](#timeMonth).[range](#interval_range).

<a name="timeYears" href="#timeYears">#</a> d3.<b>timeYears</b>(<i>start</i>, <i>stop</i>[, <i>step</i>]) [<>](https://github.com/d3/d3-time/blob/master/src/year.js#L26 "Source")
<br><a href="#timeYears">#</a> d3.<b>utcYears</b>(<i>start</i>, <i>stop</i>[, <i>step</i>]) [<>](https://github.com/d3/d3-time/blob/master/src/utcYear.js#L26 "Source")

等价于 [timeYear](#timeYear).[range](#interval_range) 和 [utcYear](#timeYear).[range](#interval_range).
