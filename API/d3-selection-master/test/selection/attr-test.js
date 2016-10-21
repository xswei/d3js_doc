var tape = require("tape"),
    jsdom = require("jsdom"),
    d3 = require("../../");

tape("selection.attr(name) returns the value of the attribute with the specified name on the first selected element", function(test) {
  var document = jsdom.jsdom("<h1 class='c1 c2'>hello</h1><h1 class='c3'></h1>");
  test.equal(d3.select(document).select("h1").attr("class"), "c1 c2");
  test.equal(d3.selectAll([null, document]).select("h1").attr("class"), "c1 c2");
  test.end();
});

tape("selection.attr(name) coerces the specified name to a string", function(test) {
  var document = jsdom.jsdom("<h1 class='c1 c2'>hello</h1><h1 class='c3'></h1>");
  test.equal(d3.select(document).select("h1").attr({toString: function() { return "class"; }}), "c1 c2");
  test.end();
});

tape("selection.attr(name) observes the namespace prefix, if any", function(test) {
  var selection = d3.select({
    getAttribute: function(name) { return name === "foo" ? "bar" : null; },
    getAttributeNS: function(url, name) { return url === "http://www.w3.org/2000/svg" && name === "foo" ? "svg:bar" : null; }
  });
  test.equal(selection.attr("foo"), "bar");
  test.equal(selection.attr("svg:foo"), "svg:bar");
  test.end();
});

tape("selection.attr(name) observes a custom namespace prefix, if any", function(test) {
  var selection = d3.select({
    getAttributeNS: function(url, name) { return url === "https://d3js.org/2016/namespace" && name === "pie" ? "tasty" : null; }
  });
  try {
    d3.namespaces.d3js = "https://d3js.org/2016/namespace";
    test.equal(selection.attr("d3js:pie"), "tasty");
  } finally {
    delete d3.namespaces.d3js;
  }
  test.end();
});

tape("selection.attr(name, value) observes the namespace prefix, if any", function(test) {
  var result, selection = d3.select({
    setAttribute: function(name, value) { result = name === "foo" ? value : null; },
    setAttributeNS: function(url, name, value) { result = url === "http://www.w3.org/2000/svg" && name === "foo" ? value : null; }
  });
  test.equal((result = undefined, selection.attr("foo", "bar"), result), "bar");
  test.equal((result = undefined, selection.attr("svg:foo", "svg:bar"), result), "svg:bar");
  test.equal((result = undefined, selection.attr("foo", function() { return "bar"; }), result), "bar");
  test.equal((result = undefined, selection.attr("svg:foo", function() { return "svg:bar"; }), result), "svg:bar");
  test.end();
});

tape("selection.attr(name, null) observes the namespace prefix, if any", function(test) {
  var result, selection = d3.select({
    removeAttribute: function(name) { result = name === "foo" ? "foo" : null; },
    removeAttributeNS: function(url, name) { result = url === "http://www.w3.org/2000/svg" && name === "foo" ? "svg:foo" : null; }
  });
  test.equal((result = undefined, selection.attr("foo", null), result), "foo");
  test.equal((result = undefined, selection.attr("svg:foo", null), result), "svg:foo");
  test.equal((result = undefined, selection.attr("foo", function() { return null; }), result), "foo");
  test.equal((result = undefined, selection.attr("svg:foo", function() { return null; }), result), "svg:foo");
  test.end();
});

tape("selection.attr(name, value) sets the value of the attribute with the specified name on the selected elements", function(test) {
  var document = jsdom.jsdom("<h1 id='one' class='c1 c2'>hello</h1><h1 id='two' class='c3'></h1>"),
      one = document.querySelector("#one"),
      two = document.querySelector("#two"),
      selection = d3.selectAll([one, two]);
  test.equal(selection.attr("foo", "bar"), selection);
  test.equal(one.getAttribute("foo"), "bar");
  test.equal(two.getAttribute("foo"), "bar");
  test.end();
});

tape("selection.attr(name, null) removes the attribute with the specified name on the selected elements", function(test) {
  var document = jsdom.jsdom("<h1 id='one' foo='bar' class='c1 c2'>hello</h1><h1 id='two' foo='bar' class='c3'></h1>"),
      one = document.querySelector("#one"),
      two = document.querySelector("#two"),
      selection = d3.selectAll([one, two]);
  test.equal(selection.attr("foo", null), selection);
  test.equal(one.hasAttribute("foo"), false);
  test.equal(two.hasAttribute("foo"), false);
  test.end();
});

tape("selection.attr(name, function) sets the value of the attribute with the specified name on the selected elements", function(test) {
  var document = jsdom.jsdom("<h1 id='one' class='c1 c2'>hello</h1><h1 id='two' class='c3'></h1>"),
      one = document.querySelector("#one"),
      two = document.querySelector("#two"),
      selection = d3.selectAll([one, two]);
  test.equal(selection.attr("foo", function(d, i) { return i ? "bar-" + i : null; }), selection);
  test.equal(one.hasAttribute("foo"), false);
  test.equal(two.getAttribute("foo"), "bar-1");
  test.end();
});

tape("selection.attr(name, function) passes the value function data, index and group", function(test) {
  var document = jsdom.jsdom("<parent id='one'><child id='three'></child><child id='four'></child></parent><parent id='two'><child id='five'></child></parent>"),
      one = document.querySelector("#one"),
      two = document.querySelector("#two"),
      three = document.querySelector("#three"),
      four = document.querySelector("#four"),
      five = document.querySelector("#five"),
      results = [];

  d3.selectAll([one, two])
      .datum(function(d, i) { return "parent-" + i; })
    .selectAll("child")
      .data(function(d, i) { return [0, 1].map(function(j) { return "child-" + i + "-" + j; }); })
      .attr("foo", function(d, i, nodes) { results.push([this, d, i, nodes]); });

  test.deepEqual(results, [
    [three, "child-0-0", 0, [three, four]],
    [four, "child-0-1", 1, [three, four]],
    [five, "child-1-0", 0, [five, ]]
  ]);
  test.end();
});
