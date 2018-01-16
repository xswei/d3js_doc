var tape = require("tape"),
    jsdom = require("jsdom"),
    d3 = require("../../");

tape("selection.data(values) binds the specified values to the selected elements by index", function(test) {
  var body = jsdom.jsdom("<div id='one'></div><div id='two'></div><div id='three'></div>").body,
      one = body.querySelector("#one"),
      two = body.querySelector("#two"),
      three = body.querySelector("#three"),
      selection = d3.select(body).selectAll("div").data(["foo", "bar", "baz"]);
  test.equal(one.__data__, "foo");
  test.equal(two.__data__, "bar");
  test.equal(three.__data__, "baz");
  test.deepEqual(selection, {
    _groups: [[one, two, three]],
    _parents: [body],
    _enter: [[,, ]],
    _exit: [[,, ]]
  });
  test.end();
});

tape("selection.data(values) puts unbound data in the enter selection", function(test) {
  var body = jsdom.jsdom("<div id='one'></div><div id='two'></div>").body,
      one = body.querySelector("#one"),
      two = body.querySelector("#two"),
      selection = d3.select(body).selectAll("div").data(["foo", "bar", "baz"]);
  test.equal(one.__data__, "foo");
  test.equal(two.__data__, "bar");
  test.deepEqual(selection, {
    _groups: [[one, two, ]],
    _parents: [body],
    _enter: [[,, {
      __data__: "baz",
      _next: null,
      _parent: body,
      namespaceURI: "http://www.w3.org/1999/xhtml",
      ownerDocument: body.ownerDocument
    }]],
    _exit: [[,, ]]
  });
  test.end();
});

tape("selection.data(values) puts unbound elements in the exit selection", function(test) {
  var body = jsdom.jsdom("<div id='one'></div><div id='two'></div><div id='three'></div>").body,
      one = body.querySelector("#one"),
      two = body.querySelector("#two"),
      three = body.querySelector("#three"),
      selection = d3.select(body).selectAll("div").data(["foo", "bar"]);
  test.equal(one.__data__, "foo");
  test.equal(two.__data__, "bar");
  test.deepEqual(selection, {
    _groups: [[one, two, ]],
    _parents: [body],
    _enter: [[,,, ]],
    _exit: [[,, three]]
  });
  test.end();
});

tape("selection.data(values) binds the specified values to each group independently", function(test) {
  var body = jsdom.jsdom("<div id='zero'><span id='one'></span><span id='two'></span></div><div id='three'><span id='four'></span><span id='five'></span></div>").body,
      zero = body.querySelector("#zero"),
      one = body.querySelector("#one"),
      two = body.querySelector("#two"),
      three = body.querySelector("#three"),
      four = body.querySelector("#four"),
      five = body.querySelector("#five"),
      selection = d3.select(body).selectAll("div").selectAll("span").data(["foo", "bar"]);
  test.equal(one.__data__, "foo");
  test.equal(two.__data__, "bar");
  test.equal(four.__data__, "foo");
  test.equal(five.__data__, "bar");
  test.deepEqual(selection, {
    _groups: [[one, two], [four, five]],
    _parents: [zero, three],
    _enter: [[, ], [, ]],
    _exit: [[, ], [, ]]
  });
  test.end();
});

tape("selection.data(function) binds the specified return values to the selected elements by index", function(test) {
  var body = jsdom.jsdom("<div id='one'></div><div id='two'></div><div id='three'></div>").body,
      one = body.querySelector("#one"),
      two = body.querySelector("#two"),
      three = body.querySelector("#three"),
      selection = d3.select(body).selectAll("div").data(function() { return ["foo", "bar", "baz"]; });
  test.equal(one.__data__, "foo");
  test.equal(two.__data__, "bar");
  test.equal(three.__data__, "baz");
  test.deepEqual(selection, {
    _groups: [[one, two, three]],
    _parents: [body],
    _enter: [[,, ]],
    _exit: [[,, ]]
  });
  test.end();
});

tape("selection.data(function) passes the values function datum, index and parents", function(test) {
  var document = jsdom.jsdom("<parent id='one'><child></child><child></child></parent><parent id='two'><child></child></parent>"),
      one = document.querySelector("#one"),
      two = document.querySelector("#two"),
      results = [];

  d3.selectAll([one, two])
      .datum(function(d, i) { return "parent-" + i; })
    .selectAll("child")
      .data(function(d, i, nodes) { results.push([this, d, i, nodes]); return ["foo", "bar"]; });

  test.deepEqual(results, [
    [one, "parent-0", 0, [one, two]],
    [two, "parent-1", 1, [one, two]]
  ]);
  test.end();
});

tape("selection.data(values, function) joins data to element using the computed keys", function(test) {
  var body = jsdom.jsdom("<node id='one'></node><node id='two'></node><node id='three'></node>").body,
      one = body.querySelector("#one"),
      two = body.querySelector("#two"),
      three = body.querySelector("#three"),
      selection = d3.select(body).selectAll("node").data(["one", "four", "three"], function(d) { return d || this.id; });
  test.deepEqual(selection, {
    _groups: [[one,, three]],
    _parents: [body],
    _enter: [[, {
      __data__: "four",
      _next: three,
      _parent: body,
      namespaceURI: "http://www.w3.org/1999/xhtml",
      ownerDocument: body.ownerDocument
    }, ]],
    _exit: [[, two, ]]
  });
  test.end();
});

tape("selection.data(values, function) puts elements with duplicate keys into update or exit", function(test) {
  var body = jsdom.jsdom("<node id='one' name='foo'></node><node id='two' name='foo'></node><node id='three' name='bar'></node>").body,
      one = body.querySelector("#one"),
      two = body.querySelector("#two"),
      three = body.querySelector("#three"),
      selection = d3.select(body).selectAll("node").data(["foo"], function(d) { return d || this.getAttribute("name"); });
  test.deepEqual(selection, {
    _groups: [[one]],
    _parents: [body],
    _enter: [[,]],
    _exit: [[, two, three]]
  });
  test.end();
});

tape("selection.data(values, function) puts elements with duplicate keys into exit", function(test) {
  var body = jsdom.jsdom("<node id='one' name='foo'></node><node id='two' name='foo'></node><node id='three' name='bar'></node>").body,
      one = body.querySelector("#one"),
      two = body.querySelector("#two"),
      three = body.querySelector("#three"),
      selection = d3.select(body).selectAll("node").data(["bar"], function(d) { return d || this.getAttribute("name"); });
  test.deepEqual(selection, {
    _groups: [[three]],
    _parents: [body],
    _enter: [[,]],
    _exit: [[one, two,]]
  });
  test.end();
});

tape("selection.data(values, function) puts data with duplicate keys into update and enter", function(test) {
  var body = jsdom.jsdom("<node id='one'></node><node id='two'></node><node id='three'></node>").body,
      one = body.querySelector("#one"),
      two = body.querySelector("#two"),
      three = body.querySelector("#three"),
      selection = d3.select(body).selectAll("node").data(["one", "one", "two"], function(d) { return d || this.id; });
  test.deepEqual(selection, {
    _groups: [[one,, two]],
    _parents: [body],
    _enter: [[, {
      __data__: "one",
      _next: two,
      _parent: body,
      namespaceURI: "http://www.w3.org/1999/xhtml",
      ownerDocument: body.ownerDocument
    },, ]],
    _exit: [[,, three]]
  });
  test.end();
});

tape("selection.data(values, function) puts data with duplicate keys into enter", function(test) {
  var body = jsdom.jsdom("<node id='one'></node><node id='two'></node><node id='three'></node>").body,
      one = body.querySelector("#one"),
      two = body.querySelector("#two"),
      three = body.querySelector("#three"),
      selection = d3.select(body).selectAll("node").data(["foo", "foo", "two"], function(d) { return d || this.id; });
  test.deepEqual(selection, {
    _groups: [[,, two]],
    _parents: [body],
    _enter: [[{
      __data__: "foo",
      _next: two,
      _parent: body,
      namespaceURI: "http://www.w3.org/1999/xhtml",
      ownerDocument: body.ownerDocument
    }, {
      __data__: "foo",
      _next: two,
      _parent: body,
      namespaceURI: "http://www.w3.org/1999/xhtml",
      ownerDocument: body.ownerDocument
    }, ]],
    _exit: [[one,, three]]
  });
  test.end();
});

tape("selection.data(values, function) passes the key function datum, index and nodes or data", function(test) {
  var body = jsdom.jsdom("<node id='one'></node><node id='two'></node>").body,
      one = body.querySelector("#one"),
      two = body.querySelector("#two"),
      results = [];

  d3.select(one)
      .datum("foo");

  d3.select(body).selectAll("node")
      .data(["foo", "bar"], function(d, i, nodes) { results.push([this, d, i, nodes]); return d || this.id; });

  test.deepEqual(results, [
    [one, "foo", 0, [one, two]],
    [two, undefined, 1, [one, two]],
    [body, "foo", 0, ["foo", "bar"]],
    [body, "bar", 1, ["foo", "bar"]]
  ]);
  test.end();
});

tape("selection.data(values, function) applies the order of the data", function(test) {
  var body = jsdom.jsdom("<div id='one'></div><div id='two'></div><div id='three'></div>").body,
      one = body.querySelector("#one"),
      two = body.querySelector("#two"),
      three = body.querySelector("#three"),
      selection = d3.select(body).selectAll("div").data(["four", "three", "one", "five", "two"], function(d) { return d || this.id; });
  test.deepEqual(selection, {
    _groups: [[, three, one,, two]],
    _parents: [body],
    _enter: [[{
      __data__: "four",
      _next: three,
      _parent: body,
      namespaceURI: "http://www.w3.org/1999/xhtml",
      ownerDocument: body.ownerDocument
    },,, {
      __data__: "five",
      _next: two,
      _parent: body,
      namespaceURI: "http://www.w3.org/1999/xhtml",
      ownerDocument: body.ownerDocument
    }, ]],
    _exit: [[,,,]]
  });
  test.end();
});

tape("selection.data(values) returns a new selection, and does not modify the original selection", function(test) {
  var document = jsdom.jsdom("<h1 id='one'></h1><h1 id='two'></h1>"),
      root = document.documentElement,
      one = document.querySelector("#one"),
      two = document.querySelector("#two"),
      selection0 = d3.select(root).selectAll("h1"),
      selection1 = selection0.data([1, 2, 3]),
      selection2 = selection1.data([1]);
  test.deepEqual(selection0, {
    _groups: [[one, two]],
    _parents: [root]
  });
  test.deepEqual(selection1, {
    _groups: [[one, two, ]],
    _parents: [root],
    _enter: [[,, {__data__: 3, _next: null, _parent: root, namespaceURI: "http://www.w3.org/1999/xhtml", ownerDocument: document}]],
    _exit: [[,]]
  });
  test.deepEqual(selection2, {
    _groups: [[one]],
    _parents: [root],
    _enter: [[,]],
    _exit: [[, two]]
  });
  test.end();
});

tape("selection.data(values, key) does not modify the groups array in-place", function(test) {
  var document = jsdom.jsdom("<h1 id='one'></h1><h1 id='two'></h1>"),
      root = document.documentElement,
      one = document.querySelector("#one"),
      two = document.querySelector("#two"),
      key = function(d, i) { return i; },
      selection0 = d3.select(root).selectAll("h1"),
      selection1 = selection0.data([1, 2, 3], key),
      selection2 = selection1.data([1], key);
  test.deepEqual(selection0, {
    _groups: [[one, two]],
    _parents: [root]
  });
  test.deepEqual(selection1, {
    _groups: [[one, two, ]],
    _parents: [root],
    _enter: [[,, {__data__: 3, _next: null, _parent: root, namespaceURI: "http://www.w3.org/1999/xhtml", ownerDocument: document}]],
    _exit: [[,]]
  });
  test.deepEqual(selection2, {
    _groups: [[one]],
    _parents: [root],
    _enter: [[,]],
    _exit: [[, two]]
  });
  test.end();
});
