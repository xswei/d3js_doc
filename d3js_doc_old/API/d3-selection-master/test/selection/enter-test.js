var tape = require("tape"),
    jsdom = require("jsdom"),
    d3 = require("../../");

tape("selection.enter() returns an empty selection before a data-join", function(test) {
  var body = jsdom.jsdom("<h1>hello</h1>").body,
      selection = d3.select(body);
  test.deepEqual(selection.enter(), {_groups: [[]], _parents: [null]});
  test.end();
});

tape("selection.enter() contains EnterNodes", function(test) {
  var body = jsdom.jsdom().body,
      selection = d3.select(body).selectAll("div").data([1, 2, 3]);
  test.equal(selection.enter().node().constructor.name, "EnterNode");
  test.end();
});

tape("selection.enter() shares the update selection’s parents", function(test) {
  var body = jsdom.jsdom("<h1>hello</h1>").body,
      selection = d3.select(body);
  test.equal(selection.enter()._parents, selection._parents);
  test.end();
});

tape("selection.enter() returns the same selection each time", function(test) {
  var body = jsdom.jsdom("<h1>hello</h1>").body,
      selection = d3.select(body);
  test.deepEqual(selection.enter(), selection.enter());
  test.end();
});

tape("selection.enter() contains unbound data after a data-join", function(test) {
  var body = jsdom.jsdom("<div id='one'></div><div id='two'></div>").body,
      one = body.querySelector("#one"),
      two = body.querySelector("#two"),
      selection = d3.select(body).selectAll("div").data(["foo", "bar", "baz"]);
  test.deepEqual(selection.enter(), {
    _groups: [[,, {
      __data__: "baz",
      _next: null,
      _parent: body,
      namespaceURI: "http://www.w3.org/1999/xhtml",
      ownerDocument: body.ownerDocument
    }]],
    _parents: [body]
  });
  test.end();
});

tape("selection.enter() uses the order of the data", function(test) {
  var body = jsdom.jsdom("<div id='one'></div><div id='two'></div><div id='three'></div>").body,
      one = body.querySelector("#one"),
      two = body.querySelector("#two"),
      three = body.querySelector("#three"),
      selection = d3.select(body).selectAll("div").data(["one", "four", "three", "five"], function(d) { return d || this.id; });
  test.deepEqual(selection.enter(), {
    _groups: [[, {
      __data__: "four",
      _next: three,
      _parent: body,
      namespaceURI: "http://www.w3.org/1999/xhtml",
      ownerDocument: body.ownerDocument
    },, {
      __data__: "five",
      _next: null,
      _parent: body,
      namespaceURI: "http://www.w3.org/1999/xhtml",
      ownerDocument: body.ownerDocument
    }]],
    _parents: [body]
  });
  test.end();
});

tape("enter.append(…) inherits the namespaceURI from the parent", function(test) {
  var body = d3.select(jsdom.jsdom().body),
      svg = body.append("svg"),
      g = svg.selectAll("g").data(["foo"]).enter().append("g");
  test.equal(body.node().namespaceURI, "http://www.w3.org/1999/xhtml");
  test.equal(svg.node().namespaceURI, "http://www.w3.org/2000/svg");
  test.equal(g.node().namespaceURI, "http://www.w3.org/2000/svg");
  test.end();
});

tape("enter.append(…) does not override an explicit namespace", function(test) {
  var body = d3.select(jsdom.jsdom().body),
      svg = body.append("svg"),
      g = svg.selectAll("g").data(["foo"]).enter().append("xhtml:g");
  test.equal(body.node().namespaceURI, "http://www.w3.org/1999/xhtml");
  test.equal(svg.node().namespaceURI, "http://www.w3.org/2000/svg");
  test.equal(g.node().namespaceURI, "http://www.w3.org/1999/xhtml");
  test.end();
});

tape("enter.append(…) inserts entering nodes before the next node in the update selection", function(test) {
  var document = jsdom.jsdom(),
      identity = function(d) { return d; },
      p = d3.select(document.body).selectAll("p");
  p = p.data([1, 3], identity);
  p = p.enter().append("p").text(identity).merge(p);
  p = p.data([0, 1, 2, 3, 4], identity);
  p = p.enter().append("p").text(identity).merge(p);
  test.equal(document.body.innerHTML, "<p>0</p><p>1</p><p>2</p><p>3</p><p>4</p>");
  test.end();
});

tape("enter.insert(…, before) inserts entering nodes before the sibling matching the specified selector", function(test) {
  var document = jsdom.jsdom("<hr>"),
      identity = function(d) { return d; },
      p = d3.select(document.body).selectAll("p");
  p = p.data([1, 3], identity);
  p = p.enter().insert("p", "hr").text(identity).merge(p);
  p = p.data([0, 1, 2, 3, 4], identity);
  p = p.enter().insert("p", "hr").text(identity).merge(p);
  test.equal(document.body.innerHTML, "<p>1</p><p>3</p><p>0</p><p>2</p><p>4</p><hr>");
  test.end();
});

tape("enter.insert(…, null) inserts entering nodes after the last child", function(test) {
  var document = jsdom.jsdom(),
      identity = function(d) { return d; },
      p = d3.select(document.body).selectAll("p");
  p = p.data([1, 3], identity);
  p = p.enter().insert("p", null).text(identity).merge(p);
  p = p.data([0, 1, 2, 3, 4], identity);
  p = p.enter().insert("p", null).text(identity).merge(p);
  test.equal(document.body.innerHTML, "<p>1</p><p>3</p><p>0</p><p>2</p><p>4</p>");
  test.end();
});
