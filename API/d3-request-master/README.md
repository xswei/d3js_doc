# d3-request

这个模块提供了XMLHttpRequest的一个替代方案，例如加载一个text文件:

```js
d3.text("/path/to/file.txt", function(error, text) {
  if (error) throw error;
  console.log(text); // Hello, world!
});
```
加载并格式化一个CSV文件:

```js
d3.csv("/path/to/file.csv", function(error, data) {
  if (error) throw error;
  console.log(data); // [{"Hello": "world"}, …]
});
```

提交查询参数:

```js
d3.request("/path/to/resource")
    .header("X-Requested-With", "XMLHttpRequest")
    .header("Content-Type", "application/x-www-form-urlencoded")
    .post("a=2&b=3", callback);
```

这个模块支持 [JSON](#json), [CSV](#csv) and [TSV](#tsv); 如果在浏览器环境, 也支持[HTML](#html) 和 [XML](#xml). 你也可以直接使用[request](#request) 或 [text](#text) 请求数据然后手动转换成需要的格式.

## Installing

NPM等安装方法略:

```html
<script src="https://d3js.org/d3-collection.v1.min.js"></script>
<script src="https://d3js.org/d3-dispatch.v1.min.js"></script>
<script src="https://d3js.org/d3-dsv.v1.min.js"></script>
<script src="https://d3js.org/d3-request.v1.min.js"></script>
<script>

d3.csv("/path/to/file.csv", callback);

</script>
```

[Try d3-request in your browser.](https://tonicdev.com/npm/d3-request)

## API Reference

<a name="request" href="#request">#</a> d3.<b>request</b>(<i>url</i>[, <i>callback</i>]) [<>](https://github.com/d3/d3-request/blob/master/src/request.js#L4 "Source")

定义一个指向*url*的异步请求对象。如果没有指定*callback*并且则请求还没 [sent(发送)](#request_send) 的话则可以继续对请求进行设置。如果指定了 *callback* 则相当于在构建请求之后立即调用了 [*request*.get](#request_get):

```js
d3.request(url)
    .get(callback);
```
等价于：

```js
d3.request(url,callback);

```


注意：如果你要设置请求头或者MIME类型，那一定不能直接指定回调，必须在使用 [*request*.header](#request_header) 或 [*request*.mimeType](#request_mimeType) 之后使用 [*request*.get](#request_get) 来指定回调.

因为一旦指定了回调，请求就会立即发出而没有设置请求头的机会，在d3.request()中指定和使用request.get()指定一样。所以只能在request.get()之前设置请求头等信息。

<a name="request_header" href="#request_header">#</a> <i>request</i>.<b>header</b>(<i>name</i>[, <i>value</i>]) [<>](https://github.com/d3/d3-request/blob/master/src/request.js#L51 "Source")

如果指定了*value*,则将对应的name设置为*value*并返回当前请求，如果*value*为null，则相当于移除请求头中的name项，如果没有设置*value*则返回当前请求头中的name项的值.

请求头的设置必须在[sent](#request_send)之前，所以要设置请求头时只能通过[*request*.get](#request_get)来代替. 例如:

```js
d3.request(url)
    .header("Accept-Language", "en-US")
    .header("X-Requested-With", "XMLHttpRequest")
    .get(callback);
```

注意：这个模块不会设置默认的`XMLHttpRequest`请求头。一些服务器需要根据请求头信息来过滤不必要的请求，但是请求头可能会触发跨域检查，如果需要的话，在发送请求之前设置好头信息。


<a name="request_mimeType" href="#request_mimeType">#</a> <i>request</i>.<b>mimeType</b>([<i>type</i>]) [<>](https://github.com/d3/d3-request/blob/master/src/request.js#L60 "Source")

如果指定了*type*,则将对应的MIME类型设置为*type*并返回当前请求，如果*type*为null，则相当于移除请求头中的MIME类型，如果没有设置*type*则返回当前请求头中的MIME类型的值.

MIME类型的设置也只能在请求发送之前，也就是说要使用request.get()来设置回调。例如:

```js
d3.request(url)
    .mimeType("text/csv")
    .get(callback);
```

<a name="request_user" href="#request_user">#</a> <i>request</i>.<b>user</b>([<i>value</i>]) [<>](https://github.com/d3/d3-request/blob/master/src/request.js#L80 "Source")

如果指定了*value*则为指定的请求设置身份验证名，并返回当前的请求实例，如果没有指定*value*则返回当前的用户名。默认为null。

<a name="request_password" href="#request_password">#</a> <i>request</i>.<b>password</b>([<i>value</i>]) [<>](https://github.com/d3/d3-request/blob/master/src/request.js#L84 "Source")


如果指定了*value*则为指定的请求设置身份验证密码，并返回当前的请求实例，如果没有指定*value*则返回当前的用户密码。默认为null

<a name="request_timeout" href="#request_timeout">#</a> <i>request</i>.<b>timeout</b>([<i>timeout</i>]) [<>](https://github.com/d3/d3-request/blob/master/src/request.js#L74 "Source")

如果设置了*timeout*,相当于设置了 [timeout](http://www.w3.org/TR/XMLHttpRequest/#the-timeout-attribute) 属性，单位为毫秒并返回当前的请求实例。如果没有指定 *timeout* 则返回当前的响应超时时间，默认为0。

<a name="request_responseType" href="#request_responseType">#</a> <i>request</i>.<b>responseType</b>([<i>type</i>]) [<>](https://github.com/d3/d3-request/blob/master/src/request.js#L68 "Source")

如果指定了*type*, 则设置 [响应类型(response type)](http://www.w3.org/TR/XMLHttpRequest/#the-responsetype-attribute)，一般情况下可以取以下值: `​` (空字符串), `arraybuffer`, `blob`, `document`, 和 `text`. 如果没有指定 *type* 则返回当前的响应类型，默认为 `​`(空字符串).

<a name="request_response" href="#request_response">#</a> <i>request</i>.<b>response</b>(<i>value</i>) [<>](https://github.com/d3/d3-request/blob/master/src/request.js#L90 "Source")

设置返回值处理函数，在接受到请求后，会执行指定的方法。比如做格式转换等，参数为响应体。可以参考 [json](#json) 和 [text](#text)

<a name="request_get" href="#request_get">#</a> <i>request</i>.<b>get</b>([<i>data</i>][, <i>callback</i>]) [<>](https://github.com/d3/d3-request/blob/master/src/request.js#L96 "Source")

相当于使用使用 GET 方式执行 [*request*.send](#request_send):

```js
request.send("GET", data, callback);
```

<a name="request_post" href="#request_post">#</a> <i>request</i>.<b>post</b>([<i>data</i>][, <i>callback</i>]) [<>](https://github.com/d3/d3-request/blob/master/src/request.js#L101 "Source")

相当于使用使用 POST 方式执行 [*request*.send](#request_send):

```js
request.send("POST", data, callback);
```

<a name="request_send" href="#request_send">#</a> <i>request</i>.<b>send</b>(<i>method</i>[, <i>data</i>][, <i>callback</i>]) [<>](https://github.com/d3/d3-request/blob/master/src/request.js#L106 "Source")

使用指定的 *method* (比如 `GET` 或 `POST`)发送请求, *data* 参数是可选的。 如果指定了 *callback* 那么请求完成时被调动(成功或失败). `callback`有如下参数: error(如果出错的话),  [response value(响应值)](#request_response). 如果出错，那响应值为undefined. 这个方法相当于:

```js
request
    .on("error", function(error) { callback(error); })
    .on("load", function(xhr) { callback(null, xhr); })
    .send(method, data);
```
如果不指定*callback*，那"load" 和 "error" 监听器应该使用 [*request*.on](#request_on)来指定.

<a name="request_abort" href="#request_abort">#</a> <i>request</i>.<b>abort</b>() [<>](https://github.com/d3/d3-request/blob/master/src/request.js#L121 "Source")

中段请求并返回当前请求实例，参考 [XMLHttpRequest’s abort](http://www.w3.org/TR/XMLHttpRequest/#the-abort%28%29-method).

<a name="request_on" href="#request_on">#</a> <i>request</i>.<b>on</b>(<i>type</i>[, <i>listener</i>]) [<>](https://github.com/d3/d3-request/blob/master/src/request.js#L126 "Source")

如果指定了 *listener* ，则为对应的 *type* 设置监听器并返回当前请求实例. 如果之前已经为这个*type*注册了监听器，则会覆盖掉之前的监听器. 如果 *listener* 为null, 则移除*type*对应的监听器，如果没有指定 *listener* 则返回 *type* 当前的监听器.

type必须为如下几种:

* `beforesend` - 在[sent](#request_send)请求之前允许定义请求头 .
* `progress` - 监控进度信息，参考[progress of the request](http://www.w3.org/TR/progress-events/).
* `load` - 当请求成功完成时.
* `error` - 当请求完成，但是没有成功; 包括 4xx and 5xx 响应码.

也可以通过(`.`)来为同一种type添加多个监听器，具体参考[d3-dispatch](https://github.com/d3/d3-dispatch)。

<a name="csv" href="#csv">#</a> d3.<b>csv</b>(<i>url</i>[[, <i>row</i>], <i>callback</i>]) [<>](https://github.com/d3/d3-request/blob/master/src/csv.js "Source")


内建的请求CSV格式文件的请求。默认的参数以及设置好，比如MIME类型为 `text/csv`. 可以通过[*dsv*.parse](https://github.com/d3/d3-dsv#dsv_parse) 来对CSV中的数据进行处理:

```js
function row(d) {
  return {
    year: new Date(+d.Year, 0, 1), // convert "Year" column to Date
    make: d.Make,
    model: d.Model,
    length: +d.Length // convert "Length" column to number
  };
}
```

*row* 转换可以传给d3.csv():

```js
d3.csv(url, row, callback);
```

也可以单独设置:

```js
d3.csv(url)
    .row(row)
    .get(callback);
```

转换函数近似等价于:

```js
d3.request(url)
    .mimeType("text/csv")
    .response(function(xhr) { return d3.csvParse(xhr.responseText, row); })
    .get(callback);
```

<a name="html" href="#html">#</a> d3.<b>html</b>(<i>url</i>[, <i>callback</i>]) [<>](https://github.com/d3/d3-request/blob/master/src/html.js "Source")

请求HTML文件。请求结果以 [document fragment](https://developer.mozilla.org/en-US/docs/DOM/range.createContextualFragment)形式返回.

等价于:

```js
d3.request(url)
    .mimeType("text/html")
    .response(function(xhr) { return document.createRange().createContextualFragment(xhr.responseText); })
    .get(callback);
```


<a name="json" href="#json">#</a> d3.<b>json</b>(<i>url</i>[, <i>callback</i>]) [<>](https://github.com/d3/d3-request/blob/master/src/json.js "Source")

请求一个 [JSON](http://json.org) 文件，MIME类型为 `application/json`.

等价于:

```js
d3.request(url)
    .mimeType("application/json")
    .response(function(xhr) { return JSON.parse(xhr.responseText); })
    .get(callback);
```

<a name="text" href="#text">#</a> d3.<b>text</b>(<i>url</i>[, <i>callback</i>]) [<>](https://github.com/d3/d3-request/blob/master/src/text.js "Source")


请求一个text文件，MIME类型为 `text/plain`.

等价于:

```js
d3.request(url)
    .mimeType("text/plain")
    .response(function(xhr) { return xhr.responseText; })
    .get(callback);
```

<a name="tsv" href="#tsv">#</a> d3.<b>tsv</b>(<i>url</i>[[, <i>row</i>], <i>callback</i>]) [<>](https://github.com/d3/d3-request/blob/master/src/tsv.js "Source")

请求[TSV](https://github.com/d3/d3-dsv#tsvParse) 文件。MIME类型为 `text/tab-separated-values`. 可选的 *row*转换函数可以用来对每行数据进行转换; 参考 [*dsv*.parse](https://github.com/d3/d3-dsv#dsv_parse) ，例如:

```js
function row(d) {
  return {
    year: new Date(+d.Year, 0, 1), // convert "Year" column to Date
    make: d.Make,
    model: d.Model,
    length: +d.Length // convert "Length" column to number
  };
}
```

行转换函数可以直接传给d3.tst()：

```js
d3.tsv(url, row, callback);
```

也可以单独设置:

```js
d3.tsv(url)
    .row(row)
    .get(callback);
```

如果使用d3.request()实现，则相当于:

```js
d3.request(url)
    .mimeType("text/tab-separated-values")
    .response(function(xhr) { return d3.tsvParse(xhr.responseText, row); })
    .get(callback);
```

<a name="xml" href="#xml">#</a> d3.<b>xml</b>(<i>url</i>[, <i>callback</i>]) [<>](https://github.com/d3/d3-request/blob/master/src/xml.js "Source")

请求XML文件，MIME类型为 `application/xml`.

相当于:

```js
d3.request(url)
    .mimeType("application/xml")
    .response(function(xhr) { return xhr.responseXML; })
    .get(callback);
```

XML转换依赖于由 [node-XMLHttpRequest](https://github.com/driverdan/node-XMLHttpRequest/issues/8) 支持的 [*xhr*.responseXML](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseXML) ，这个方法只在浏览器环境中支持，在Node中不支持.
