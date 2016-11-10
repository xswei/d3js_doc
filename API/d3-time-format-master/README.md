# d3-time-format

这个模块使用javascript实现了[strptime](http://pubs.opengroup.org/onlinepubs/009695399/functions/strptime.html) 和 [strftime](http://pubs.opengroup.org/onlinepubs/007908799/xsh/strftime.html)提出的日期和时间类转化格式化方法. 在格式化日期时，创建一个[formatter](#locale_format) from a specifier (a string with the desired format *directives*, indicated by `%`); 然后传给转化器一个日期，之后返回一个字符串，比如:

```js
var formatTime = d3.timeFormat("%B %d, %Y");
formatTime(new Date); // "June 30, 2015"
```

与格式化相反，转化器也使用类似的形式把字符转为Date类型:

```js
var parseTime = d3.timeParse("%B %d, %Y");
parseTime("June 30, 2015"); // Tue Jun 30 2015 00:00:00 GMT-0700 (PDT)
```

你也可以自定义更多的格式化类型，比如:

```js
var formatMillisecond = d3.timeFormat(".%L"),
    formatSecond = d3.timeFormat(":%S"),
    formatMinute = d3.timeFormat("%I:%M"),
    formatHour = d3.timeFormat("%I %p"),
    formatDay = d3.timeFormat("%a %d"),
    formatWeek = d3.timeFormat("%b %d"),
    formatMonth = d3.timeFormat("%B"),
    formatYear = d3.timeFormat("%Y");

function multiFormat(date) {
  return (d3.timeSecond(date) < date ? formatMillisecond
      : d3.timeMinute(date) < date ? formatSecond
      : d3.timeHour(date) < date ? formatMinute
      : d3.timeDay(date) < date ? formatHour
      : d3.timeMonth(date) < date ? (d3.timeWeek(date) < date ? formatDay : formatWeek)
      : d3.timeYear(date) < date ? formatMonth
      : formatYear)(date);
}
```

这个模块常用来在[time scales](https://github.com/d3/d3-scale#time-scales)中生成易读的刻度值。

## Installing

NPM等安装方法略

```html
<script src="https://d3js.org/d3-time.v1.min.js"></script>
<script src="https://d3js.org/d3-time-format.v2.min.js"></script>
<script>

var format = d3.timeFormat("%x");

</script>
```

[在浏览器中测试d3-time-format](https://tonicdev.com/npm/d3-time-format)

## API Reference

<a name="timeFormat" href="#timeFormat">#</a> d3.<b>timeFormat</b>(<i>specifier</i>) [<>](https://github.com/d3/d3-time-format/blob/master/src/defaultLocale.js#L4 "Source")

[*locale*.format](#locale_format)的别名，使用[default locale(默认的本地时间类型)](#timeFormatDefaultLocale).

<a name="timeParse" href="#timeParse">#</a> d3.<b>timeParse</b>(<i>specifier</i>) [<>](https://github.com/d3/d3-time-format/blob/master/src/defaultLocale.js#L5 "Source")

[*locale*.parse](#locale_parse)的别名，使用[default locale(默认的本地时间类型)](#timeFormatDefaultLocale).

<a name="utcFormat" href="#utcFormat">#</a> d3.<b>utcFormat</b>(<i>specifier</i>) [<>](https://github.com/d3/d3-time-format/blob/master/src/defaultLocale.js#L6 "Source")

[*locale*.utcFormat](#locale_utcFormat)的别名，使用[default locale(默认的本地时间类型)](#timeFormatDefaultLocale).

<a name="utcParse" href="#utcParse">#</a> d3.<b>utcParse</b>(<i>specifier</i>) [<>](https://github.com/d3/d3-time-format/blob/master/src/defaultLocale.js#L7 "Source")

[*locale*.utcParse](#locale_utcParse)的别名，使用[default locale(默认的本地时间类型)](#timeFormatDefaultLocale).

<a name="isoFormat" href="#isoFormat">#</a> d3.<b>isoFormat</b> [<>](https://github.com/d3/d3-time-format/blob/master/src/isoFormat.js "Source")

将当前时间格式化为标准的[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)时间格式. ISO时间是国际标准化组织的国际标准的表示方法，时区也会被相应的转化，因此转化前后可能时间不一样

<a name="isoParse" href="#isoParse">#</a> d3.<b>isoParse</b> [<>](https://github.com/d3/d3-time-format/blob/master/src/isoParse.js "Source")

将[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)字符串转为日期类型，你也可以根据ISO的时间格式自定义一个转化器:

```js
var strictIsoParse = d3.utcParse("%Y-%m-%dT%H:%M:%S.%LZ");
```

<a name="locale_format" href="#locale_format">#</a> <i>locale</i>.<b>format</b>(<i>specifier</i>) [<>](https://github.com/d3/d3-time-format/blob/master/src/locale.js#L293 "Source")

根据给定的字符串返回一个新的格式化器，字符串可以由以下指令组成:

* `%a` - 星期的简拼.*
* `%A` - 星期的全拼.*
* `%b` - 月的简拼.*
* `%B` - 月的全拼.*
* `%c` - 本地时间格式, 比如 `%a %b %e %H:%M:%S %Y`. 不同地方格式不一样*
* `%d` - 日[01,31].
* `%e` - 日[ 1,31]; 等价于 `%_d`.与"%d"不同的是如果为个位数则使用空格补齐两位数
* `%H` - 24小时制时 [00,23].
* `%I` - 12小时制时 [01,12].
* `%j` - 一年中的第几天 [001,366].
* `%m` - 月份[01,12].
* `%M` - 分钟 [00,59].
* `%L` - 毫秒 [000, 999].
* `%p` - AM or PM.*
* `%S` - 秒 [00,61].
* `%U` - 一年中的第几周，从周日开始算新的一周 [00,53].
* `%w` - 从周日开始算起，是所在周的第几天 [0,6].
* `%W` - 一年中的第几周，从周一开始算新的一周 [00,53].
* `%x` - 本地日期格式, 比如 `%m/%d/%Y`.不同地方格式不一样*
* `%X` - 本地时间格式, 比如 `%H:%M:%S`.不同地方格式不一样*
* `%y` - 所在世纪的第几年(16)[00,99].
* `%Y` - 年的全写(2016).
* `%Z` - 返回当前时区，比如 `-0700`, `-07:00`, `-07`, or `Z`.
* `%%` - 占位符号 (`%`).


`%`后面可以跟一些标示符，当位数不足时候填充: 

* `0` - 使用0填充
* `_` - 空格填充
* `-` - 不填充

比如日期为两位数，当遇到个位数的时候为了格式上的一致，可以对 空位进行填充:

```js
d3.timeFormat("%m")(new Date("2014-1-9 9:9:9"));  //"01"

d3.timeFormat("%_m")(new Date("2014-1-9 9:9:9")); //" 1"

d3.timeFormat("%-m")(new Date("2014-1-9 9:9:9")); //"1"

```

默认情况下使用0填充，除了`%e`(`%e`默认使用`_`表示空格填充)

返回的格式化器对*[date](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date)*类型的数据进行格式化，然后返回字符串类型表示:


```js
var formatMonth = d3.timeFormat("%B"),
    formatDay = d3.timeFormat("%A"),
    date = new Date(2014, 4, 1); // Thu May 01 2014 00:00:00 GMT-0700 (PDT)

formatMonth(date); // "May"
formatDay(date); // "Thursday"
```

<a name="locale_parse" href="#locale_parse">#</a> <i>locale</i>.<b>parse</b>(<i>specifier</i>) [<>](https://github.com/d3/d3-time-format/blob/master/src/locale.js#L298 "Source")

使用特定的字符返回一个转化器。与格式化器相反，转化器能将字符串类型转为date类型。*specifier*与[*locale*.format](#locale_format)一样。

比如，如果*specifier*为`%Y-%m-%dT%H:%M:%SZ`, 则传入`"2011-07-01T19:15:28Z"`可以正常工作，但是传入`"2011-07-01T19:15:28"`, `"2011-07-01 19:15:28"` 和 `"2011-07-01"` 将返回null，因为不能正确识别格式。

<a name="locale_utcFormat" href="#locale_utcFormat">#</a> <i>locale</i>.<b>utcFormat</b>(<i>specifier</i>) [<>](https://github.com/d3/d3-time-format/blob/master/src/locale.js#L303 "Source")

等价于 [*locale*.format](#locale_format), 只是将所有的指令都解释为[Coordinated Universal Time (UTC)](https://en.wikipedia.org/wiki/Coordinated_Universal_Time) 而不是本地时间.

<a name="locale_utcParse" href="#locale_utcParse">#</a> <i>locale</i>.<b>utcParse</b>(<i>specifier</i>) [<>](https://github.com/d3/d3-time-format/blob/master/src/locale.js#L308 "Source")

等价于 [*locale*.parse](#locale_parse), except all directives are interpreted as [Coordinated Universal Time (UTC)](https://en.wikipedia.org/wiki/Coordinated_Universal_Time) 而不是本地时间.

### Locales

<a name="timeFormatLocale" href="#timeFormatLocale">#</a> d3.<b>timeFormatLocale</b>(<i>definition</i>) [<>](https://github.com/d3/d3-time-format/blob/master/src/locale.js "Source")

根据指定的定义使用[*locale*.format](#locale_format), [*locale*.parse](#locale_parse), [*locale*.utcFormat](#locale_utcFormat), [*locale*.utcParse](#locale_utcParse)方法返回一个本地时间表示. *definition*必须包含以下属性:

* `dateTime` - 时间日期(`%c`)格式化字符串 (<i>e.g.</i>, `"%a %b %e %X %Y"`).
* `date` - 日期(`%x`)格式化字符串 (<i>e.g.</i>, `"%m/%d/%Y"`).
* `time` - 时间(`%X`)格式化字符串 (<i>e.g.</i>, `"%H:%M:%S"`).
* `periods` - A.M. 和 P.M.(<i>e.g.</i>, `["AM", "PM"]`).
* `days` - 从周日开始，星期几的全称.
* `shortDays` - 从周日开始，星期几的简拼.
* `months` - 从January开始的全拼.
* `shortMonths` - 从January开始的间拼.

<a name="timeFormatDefaultLocale" href="#timeFormatDefaultLocale">#</a> d3.<b>timeFormatDefaultLocale</b>(<i>definition</i>) [<>](https://github.com/d3/d3-time-format/blob/master/src/defaultLocale.js "Source")

等价于 [d3.timeFormatLocale](#timeFormatLocale),也可以由[d3.timeFormat](#timeFormat), [d3.timeParse](#timeParse), [d3.utcFormat](#utcFormat) 和 [d3.utcParse](#utcParse) 来重定义[*locale*.format](#locale_format), [*locale*.parse](#locale_parse), [*locale*.utcFormat](#locale_utcFormat) 和 [*locale*.utcParse](#locale_utcParse). 默认为 [U.S. English](https://github.com/d3/d3-time-format/blob/master/locale/en-US.json)格式.
