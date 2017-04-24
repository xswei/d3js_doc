# d3-dsv

这个模块提供了一个使用指定分割符对数据进行格式化的解析器，比如CSV和TSV。这种扁平化的表格类型在表格数据中很有用，比如EXCEL等，并且比JSON更节省空间。这个模块的实现基于 [RFC 4180](http://tools.ietf.org/html/rfc4180).

CSV和TSV已经被内置到这个模块中，比如对CSV或TSV格式的字符串进行转化:

```js
d3.csvParse("foo,bar\n1,2"); // [{foo: "1", bar: "2"}, columns: ["foo", "bar"]]
d3.tsvParse("foo\tbar\n1\t2"); // [{foo: "1", bar: "2"}, columns: ["foo", "bar"]]
```

或将CSV或TSV序列化为字符串:

```js
d3.csvFormat([{foo: "1", bar: "2"}]); // "foo,bar\n1,2"
d3.tsvFormat([{foo: "1", bar: "2"}]); // "foo\tbar\n1\t2"
```

也可以自定义一种分割符，比如使用"|"来分割，那么使用[d3.dsvFormat](#dsvFormat):

```js
var psv = d3.dsvFormat("|");

console.log(psv.parse("foo|bar\n1|2")); // [{foo: "1", bar: "2"}, columns: ["foo", "bar"]]
```

为了方便的在浏览器中加载CSV或TSV文件， [d3-request](https://github.com/d3/d3-request) 模块内置了 [d3.csv](https://github.com/d3/d3-request#csv) 和 [d3.tsv](https://github.com/d3/d3-request#tsv) 方法.

## Installing

NPM等安装方法略

```html
<script src="https://d3js.org/d3-dsv.v1.min.js"></script>
<script>

var data = d3.csvParse(string);

</script>
```

[在浏览器中测试d3-csv.](https://tonicdev.com/npm/d3-dsv)

## API Reference

<a name="csvParse" href="#csvParse">#</a> d3.<b>csvParse</b>(<i>string</i>[, <i>row</i>]) [<>](https://github.com/d3/d3-dsv/blob/master/src/csv.js#L5 "Source")

等价于 [dsvFormat](#dsvFormat)(",").[parse](#dsv_parse).

<a name="csvParseRows" href="#csvParseRows">#</a> d3.<b>csvParseRows</b>(<i>string</i>[, <i>row</i>]) [<>](https://github.com/d3/d3-dsv/blob/master/src/csv.js#L6 "Source")

等价于 [dsvFormat](#dsvFormat)(",").[parseRows](#dsv_parseRows).

<a name="csvFormat" href="#csvFormat">#</a> d3.<b>csvFormat</b>(<i>rows</i>[, <i>columns</i>]) [<>](https://github.com/d3/d3-dsv/blob/master/src/csv.js#L7 "Source")

等价于 [dsvFormat](#dsvFormat)(",").[format](#dsv_format).

<a name="csvFormatRows" href="#csvFormatRows">#</a> d3.<b>csvFormatRows</b>(<i>rows</i>) [<>](https://github.com/d3/d3-dsv/blob/master/src/csv.js#L8 "Source")

等价于 [dsvFormat](#dsvFormat)(",").[formatRows](#dsv_formatRows).

<a name="tsvParse" href="#tsvParse">#</a> d3.<b>tsvParse</b>(<i>string</i>[, <i>row</i>]) [<>](https://github.com/d3/d3-dsv/blob/master/src/tsv.js#L5 "Source")

等价于 [dsvFormat](#dsvFormat)("\t").[parse](#dsv_parse).

<a name="tsvParseRows" href="#tsvParseRows">#</a> d3.<b>tsvParseRows</b>(<i>string</i>[, <i>row</i>]) [<>](https://github.com/d3/d3-dsv/blob/master/src/tsv.js#L6 "Source")

等价于 [dsvFormat](#dsvFormat)("\t").[parseRows](#dsv_parseRows).

<a name="tsvFormat" href="#tsvFormat">#</a> d3.<b>tsvFormat</b>(<i>rows</i>[, <i>columns</i>]) [<>](https://github.com/d3/d3-dsv/blob/master/src/tsv.js#L7 "Source")

等价于 [dsvFormat](#dsvFormat)("\t").[format](#dsv_format).

<a name="tsvFormatRows" href="#tsvFormatRows">#</a> d3.<b>tsvFormatRows</b>(<i>rows</i>) [<>](https://github.com/d3/d3-dsv/blob/master/src/tsv.js#L8 "Source")

等价于 [dsvFormat](#dsvFormat)("\t").[formatRows](#dsv_formatRows).

<a name="dsvFormat" href="#dsvFormat">#</a> d3.<b>dsvFormat</b>(<i>delimiter</i>) [<>](https://github.com/d3/d3-dsv/blob/master/src/dsv.js#L30)

使用指定的*delimiter*构建一个DSV解析和序列化对象。*delimiter*必须是一个单一的字符。

<a name="dsv_parse" href="#dsv_parse">#</a> *dsv*.<b>parse</b>(<i>string</i>[, <i>row</i>]) [<>](https://github.com/d3/d3-dsv/blob/master/src/dsv.js#L34 "Source")

解析指定的*string*，返回一个对象数组，每个对象表示一行数据。

与[*dsv*.parseRows](#dsv_parseRows)不同，这个方法要求DSV内容的第一行为列名。这些列明最后会被解析为数组中的属性名。例如，考虑如下的CSV文件:

```
Year,Make,Model,Length
1997,Ford,E350,2.34
2000,Mercury,Cougar,2.38
```

解析后的JavaScript数组为:


```js
[
  {"Year": "1997", "Make": "Ford", "Model": "E350", "Length": "2.34"},
  {"Year": "2000", "Make": "Mercury", "Model": "Cougar", "Length": "2.38"}
]
```

返回后的数组包含一个 `cloumns`属性，包含了输入数据的列名。例如:

```js
data.columns; // ["Year", "Make", "Model", "Length"]
```

如果没有指定 *row* 转换函数，则最终返回数组中对象元素的值都为字符串类型。为了安全起见，没有将其自动转为数字、日期或其他的类型。在一些应用场景中，JavaScript可以根据需要自动将字符串转为数值类型(比如使用 `+` 操作)。但是最好还是指定一个 *row* 转换函数。

如果指定了 *row* 函数，则指定的函数会为每一行数据调用指定的转换函数，并传递当前行数据(`d`)和索引(`i`).如果转换函数返回值为null或undefined则会跳过当前的行。否则使用返回值替代原有的未转换的对象。比如:

```js
var data = d3.csvParse(string, function(d) {
  return {
    year: new Date(+d.Year, 0, 1), // lowercase and convert "Year" to Date
    make: d.Make, // lowercase
    model: d.Model, // lowercase
    length: +d.Length // lowercase and convert "Length" to number
  };
});
```

注意:使用`+`比 [parseInt](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/parseInt) 或[parseFloat](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/parseFloat) 更快, 但是也有限制，比如对 `"30px"` 使用`+`或得到 `NaN`,而`parseInt` 和 `parseFloat` 会得到 `30`.

<a name="dsv_parseRows" href="#dsv_parseRows">#</a> <i>dsv</i>.<b>parseRows</b>(<i>string</i>[, <i>row</i>]) [<>](https://github.com/d3/d3-dsv/blob/master/src/dsv.js#L43 "Source")


将指定的字符串解析为数组的数组.

与 [*dsv*.parse](#dsv_parse) 不同, 这个方法将第一行视为标准的一行数据而不是列名，例如:

```
1997,Ford,E350,2.34
2000,Mercury,Cougar,2.38
```

返回的JavaScript数组结果为:

```js
[
  ["1997", "Ford", "E350", "2.34"],
  ["2000", "Mercury", "Cougar", "2.38"]
]
```

*row*转换函数同上，要注意*row*函数的返回值并不一定要与原有的类型一致，比如原有的数组元素为对象类型时，可以在*row*函数中返回一个其他类型类替代原有的对象类型，同理如果原有的数组中元素为数组，那也可以返回一个对象类型替代，比如:

```js
var data = d3.csvParseRows(string, function(d, i) {
  return {
    year: new Date(+d[0], 0, 1), // convert first colum column to Date
    make: d[1],
    model: d[2],
    length: +d[3] // convert fourth column to number
  };
});
```

从效果上来看，*row*函数更像 [map](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/map) 和 [filter](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/filter)操作。

<a name="dsv_format" href="#dsv_format">#</a> <i>dsv</i>.<b>format</b>(<i>rows</i>[, <i>columns</i>]) [<>](https://github.com/d3/d3-dsv/blob/master/src/dsv.js#L105 "Source")

将指定的数组对象序列化为*string*类型，与[*dsv*.parse](#dsv_parse)的作用相反. 每行数据使用 (`\n`) 分割, 每列数据使用指定的分割符分割。 

如果没有指定 *columns* ，则会使用所有数据的属性名作为列明。列明的顺序是不固定的。如果指定了 *columns* 则序列化后每行的顺序按照指定的顺序排列:

```js
var string = d3.csvFormat(data, ["year", "make", "model", "length"]);
```


<a name="dsv_formatRows" href="#dsv_formatRows">#</a> <i>dsv</i>.<b>formatRows</b>(<i>rows</i>) [<>](https://github.com/d3/d3-dsv/blob/master/src/dsv.js#L114 "Source")

序列化数组的数组。与[*dsv*.parseRows](#dsv_parseRows)的作用相反. 

上述两种序列化方式都可以指定*row*转换函数，当然也有其他的替代方案，比如使用array.map来在序列化对象数组之前做预处理:

```js
var string = d3.csvFormatRows(data.map(function(d, i) {
  return [
    d.year.getFullYear(), // Assuming d.year is a Date object.
    d.make,
    d.model,
    d.length
  ];
}));
```

当然也可以使用[*array*.concat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) 来指定列明，但是使用这种方法后要使用 d3.csvFormatRows来进行序列化:

```js
var string = d3.csvFormatRows([[
    "year",
    "make",
    "model",
    "length"
  ]].concat(data.map(function(d, i) {
  return [
    d.year.getFullYear(), // Assuming d.year is a Date object.
    d.make,
    d.model,
    d.length
  ];
})));
```

### Content Security Policy

If a [content security policy](http://www.w3.org/TR/CSP/) is in place, note that [*dsv*.parse](#dsv_parse) requires `unsafe-eval` in the `script-src` directive, due to the (safe) use of dynamic code generation for fast parsing. (See [source](https://github.com/d3/d3-dsv/blob/master/src/dsv.js).) Alternatively, use [*dsv*.parseRows](#dsv_parseRows).

## Command Line Reference

命令行引用

### dsv2dsv

<a name="dsv2dsv" href="#dsv2dsv">#</a> <b>dsv2dsv</b> [<i>options…</i>] [<i>file</i>]

将指定的DSV输入*文件*转为另一种DSV文件，如果没有指定*file*，则默认从stdin中读取，比如讲CSV转为TSV:


```
csv2tsv < example.csv > example.tsv
```

将windows-1252 CSV 转为 utf-8 CSV:

```
dsv2dsv --input-encoding windows-1252 < latin1.csv > utf8.csv
```

<a name="dsv2dsv_help" href="dsv2dsv_help">#</a> dsv2dsv <b>-h</b>
<br><a href="dsv2dsv_help">#</a> dsv2dsv <b>--help</b>

输出使用帮助信息


<a name="dsv2dsv_version" href="dsv2dsv_version">#</a> dsv2dsv <b>-V</b>
<br><a href="dsv2dsv_version">#</a> dsv2dsv <b>--version</b>

输出版本号

<a name="dsv2dsv_out" href="dsv2dsv_out">#</a> dsv2dsv <b>-o</b> <i>file</i>
<br><a href="dsv2dsv_out">#</a> dsv2dsv <b>--out</b> <i>file</i>

指定输出文件名，默认“-”


<a name="dsv2dsv_input_delimiter" href="dsv2dsv_input_delimiter">#</a> dsv2dsv <b>-r</b> <i>delimiter</i>
<br><a href="dsv2dsv_input_delimiter">#</a> dsv2dsv <b>--input-delimiter</b> <i>delimiter</i>

指定输入文件分隔符，默认为“,”（CSV）.


<a name="dsv2dsv_input_encoding" href="dsv2dsv_input_encoding">#</a> dsv2dsv <b>--input-encoding</b> <i>encoding</i>

指定输入文件的编码格式，默认为“utf8”.

<a name="dsv2dsv_output_delimiter" href="dsv2dsv_output_delimiter">#</a> dsv2dsv <b>-w</b> <i>delimiter</i>
<br><a href="dsv2dsv_output_delimiter">#</a> dsv2dsv <b>--output-delimiter</b> <i>delimiter</i>

指定输出文件的分隔符，默认为“,”

<a name="dsv2dsv_output_encoding" href="dsv2dsv_output_encoding">#</a> dsv2dsv <b>--output-encoding</b> <i>encoding</i>

指定输出文件的编码格式，默认为“utf8”.


<a name="csv2tsv" href="#csv2tsv">#</a> <b>csv2tsv</b> [<i>options…</i>] [<i>file</i>]

等价于[dsv2dsv](#dsv2dsv)，但是[output delimiter](#dsv2dsv_output_delimiter)默认为“\t”


<a name="tsv2csv" href="#tsv2csv">#</a> <b>tsv2csv</b> [<i>options…</i>] [<i>file</i>]

等价于[dsv2dsv](#dsv2dsv)，但是[input delimiter](#dsv2dsv_output_delimiter)默认为“\t”


### dsv2json

<a name="dsv2json" href="#dsv2json">#</a> <b>dsv2json</b> [<i>options…</i>] [<i>file</i>]

将指定的DSV文件转为JSON。

例如将csv转为json格式:


```
csv2json < example.csv > example.json
```

或者将CSV转为自动换行的 JSON 流:

```
csv2json -n < example.csv > example.ndjson
```

<a name="dsv2json_help" href="dsv2json_help">#</a> dsv2json <b>-h</b>
<br><a href="dsv2json_help">#</a> dsv2json <b>--help</b>

输出帮助信息。


<a name="dsv2json_version" href="dsv2json_version">#</a> dsv2json <b>-V</b>
<br><a href="dsv2json_version">#</a> dsv2json <b>--version</b>

输出版本号

<a name="dsv2json_out" href="dsv2json_out">#</a> dsv2json <b>-o</b> <i>file</i>
<br><a href="dsv2json_out">#</a> dsv2json <b>--out</b> <i>file</i>

指定输出文件名，默认为“-”


<a name="dsv2json_input_delimiter" href="dsv2json_input_delimiter">#</a> dsv2json <b>-r</b> <i>delimiter</i>
<br><a href="dsv2json_input_delimiter">#</a> dsv2json <b>--input-delimiter</b> <i>delimiter</i>

指定输入文件的分隔符，默认为“,” 

<a name="dsv2json_input_encoding" href="dsv2json_input_encoding">#</a> dsv2json <b>--input-encoding</b> <i>encoding</i>

指定输入文件的编码格式，默认为 “utf8”.

<a name="dsv2json_output_encoding" href="dsv2json_output_encoding">#</a> dsv2json <b>-r</b> <i>encoding</i>
<br><a href="dsv2json_output_encoding">#</a> dsv2json <b>--output-encoding</b> <i>encoding</i>

指定输出文件的编码格式，默认为 “utf8”.

<a name="dsv2json_newline_delimited" href="dsv2json_newline_delimited">#</a> dsv2json <b>-n</b>
<br><a href="dsv2json_newline_delimited">#</a> dsv2json <b>--newline-delimited</b>

输出[newline-delimited JSON](https://github.com/mbostock/ndjson-cli) 而不是一个JSON数组

<a name="csv2json" href="#csv2json">#</a> <b>csv2json</b> [<i>options…</i>] [<i>file</i>]

等价于 [dsv2json](#dsv2json).

<a name="tsv2json" href="#csv2json">#</a> <b>tsv2json</b> [<i>options…</i>] [<i>file</i>]

等价于 [dsv2json](#dsv2json),但是 [input delimiter](#dsv2json_input_delimiter)默认为 (\t).

### json2dsv

<a name="json2dsv" href="#json2dsv">#</a> <b>json2dsv</b> [<i>options…</i>] [<i>file</i>]

将JSON文件转为DSV，比如讲JSON转为CSV：


```
json2csv < example.json > example.csv
```
或者将一个newline-delimited的JSON转为CSV：


```
json2csv -n < example.ndjson > example.csv
```

<a name="json2dsv_help" href="json2dsv_help">#</a> json2dsv <b>-h</b>
<br><a href="json2dsv_help">#</a> json2dsv <b>--help</b>

输出帮助信息


<a name="json2dsv_version" href="json2dsv_version">#</a> json2dsv <b>-V</b>
<br><a href="json2dsv_version">#</a> json2dsv <b>--version</b>

输出版本号

<a name="json2dsv_out" href="json2dsv_out">#</a> json2dsv <b>-o</b> <i>file</i>
<br><a href="json2dsv_out">#</a> json2dsv <b>--out</b> <i>file</i>

指定输出文件名，默认为“-”


<a name="json2dsv_input_encoding" href="json2dsv_input_encoding">#</a> json2dsv <b>--input-encoding</b> <i>encoding</i>

指定输入文件编码格式，默认为 “utf8”.

<a name="json2dsv_output_delimiter" href="json2dsv_output_delimiter">#</a> json2dsv <b>-w</b> <i>delimiter</i>
<br><a href="json2dsv_output_delimiter">#</a> json2dsv <b>--output-delimiter</b> <i>delimiter</i>

指定输出文件分隔符，默认为“,”

<a name="json2dsv_output_encoding" href="json2dsv_output_encoding">#</a> json2dsv <b>--output-encoding</b> <i>encoding</i>

指定输出文件编码格式，默认为 “utf8”.

<a name="json2dsv_newline_delimited" href="json2dsv_newline_delimited">#</a> json2dsv <b>-n</b>
<br><a href="json2dsv_newline_delimited">#</a> json2dsv <b>--newline-delimited</b>

读取一个 [newline-delimited JSON](https://github.com/mbostock/ndjson-cli) JSON  而不是 JSON数组

<a name="csv2json" href="#csv2json">#</a> <b>csv2json</b> [<i>options…</i>] [<i>file</i>]

等价于 [json2dsv](#json2dsv).

<a name="tsv2json" href="#csv2json">#</a> <b>tsv2json</b> [<i>options…</i>] [<i>file</i>]

等价于 [json2dsv](#json2dsv), 但是 [output delimiter](#json2dsv_output_delimiter) 为(\t).
