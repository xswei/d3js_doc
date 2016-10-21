var tape = require("tape"),
    jsdom = require("jsdom"),
    d3 = require("../../");

tape("selection.classed(classes) returns true if and only if the first element has the specified classes", function(test) {
  var document = jsdom.jsdom("<h1 class='c1 c2'>hello</h1><h1 class='c3'></h1>");
  test.equal(d3.select(document).select("h1").classed(""), true);
  test.equal(d3.select(document).select("h1").classed("c1"), true);
  test.equal(d3.select(document).select("h1").classed("c2"), true);
  test.equal(d3.select(document).select("h1").classed("c3"), false);
  test.equal(d3.select(document).select("h1").classed("c1 c2"), true);
  test.equal(d3.select(document).select("h1").classed("c2 c1"), true);
  test.equal(d3.select(document).select("h1").classed("c1 c3"), false);
  test.equal(d3.selectAll([null, document]).select("h1").classed("c1"), true);
  test.equal(d3.selectAll([null, document]).select("h1").classed("c2"), true);
  test.equal(d3.selectAll([null, document]).select("h1").classed("c3"), false);
  test.end();
});

tape("selection.classed(classes) coerces the specified classes to a string", function(test) {
  var document = jsdom.jsdom("<h1 class='c1 c2'>hello</h1><h1 class='c3'></h1>");
  test.equal(d3.select(document).select("h1").classed({toString: function() { return "c1 c2"; }}), true);
  test.end();
});

tape("selection.classed(classes) gets the class attribute if classList is not supported", function(test) {
  var node = new Node("c1 c2");
  test.equal(d3.select(node).classed(""), true);
  test.equal(d3.select(node).classed("c1"), true);
  test.equal(d3.select(node).classed("c2"), true);
  test.equal(d3.select(node).classed("c3"), false);
  test.equal(d3.select(node).classed("c1 c2"), true);
  test.equal(d3.select(node).classed("c2 c1"), true);
  test.equal(d3.select(node).classed("c1 c3"), false);
  test.end();
});

tape("selection.classed(classes, value) sets whether the selected elements have the specified classes", function(test) {
  var document = jsdom.jsdom(""),
      selection = d3.select(document.body);
  test.equal(selection.classed("c1"), false);
  test.equal(selection.attr("class"), null);
  test.equal(selection.classed("c1", true), selection);
  test.equal(selection.classed("c1"), true);
  test.equal(selection.attr("class"), "c1");
  test.equal(selection.classed("c1 c2", true), selection);
  test.equal(selection.classed("c1"), true);
  test.equal(selection.classed("c2"), true);
  test.equal(selection.classed("c1 c2"), true);
  test.equal(selection.attr("class"), "c1 c2");
  test.equal(selection.classed("c1", false), selection);
  test.equal(selection.classed("c1"), false);
  test.equal(selection.classed("c2"), true);
  test.equal(selection.classed("c1 c2"), false);
  test.equal(selection.attr("class"), "c2");
  test.equal(selection.classed("c1 c2", false), selection);
  test.equal(selection.classed("c1"), false);
  test.equal(selection.classed("c2"), false);
  test.equal(selection.attr("class"), "");
  test.end();
});

tape("selection.classed(classes, function) sets whether the selected elements have the specified classes", function(test) {
  var document = jsdom.jsdom(""),
      selection = d3.select(document.body);
  test.equal(selection.classed("c1 c2", function() { return true; }), selection);
  test.equal(selection.attr("class"), "c1 c2");
  test.equal(selection.classed("c1 c2", function() { return false; }), selection);
  test.equal(selection.attr("class"), "");
  test.end();
});

tape("selection.classed(classes, function) passes the value function data, index and group", function(test) {
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
      .classed("c1 c2", function(d, i, nodes) { results.push([this, d, i, nodes]); });

  test.deepEqual(results, [
    [three, "child-0-0", 0, [three, four]],
    [four, "child-0-1", 1, [three, four]],
    [five, "child-1-0", 0, [five, ]]
  ]);
  test.end();
});

tape("selection.classed(classes, value) sets the class attribute if classList is not supported", function(test) {
  var node = new Node(null),
      selection = d3.select(node);
  test.equal(selection.classed("c1"), false);
  test.equal(selection.attr("class"), null);
  test.equal(selection.classed("c1", true), selection);
  test.equal(selection.classed("c1"), true);
  test.equal(selection.attr("class"), "c1");
  test.equal(selection.classed("c1 c2", true), selection);
  test.equal(selection.classed("c1"), true);
  test.equal(selection.classed("c2"), true);
  test.equal(selection.classed("c1 c2"), true);
  test.equal(selection.attr("class"), "c1 c2");
  test.equal(selection.classed("c1", false), selection);
  test.equal(selection.classed("c1"), false);
  test.equal(selection.classed("c2"), true);
  test.equal(selection.classed("c1 c2"), false);
  test.equal(selection.attr("class"), "c2");
  test.equal(selection.classed("c1 c2", false), selection);
  test.equal(selection.classed("c1"), false);
  test.equal(selection.classed("c2"), false);
  test.equal(selection.attr("class"), "");
  test.end();
});

tape("selection.classed(classes, value) coerces the specified classes to a string", function(test) {
  var document = jsdom.jsdom("<h1>hello</h1>"),
      selection = d3.select(document).select("h1");
  test.equal(selection.classed("c1 c2"), false);
  test.equal(selection.classed({toString: function() { return "c1 c2"; }}, true), selection);
  test.equal(selection.classed("c1 c2"), true);
  test.end();
});

function Node(classes) {
  this._classes = classes;
}

Node.prototype = {
  getAttribute: function(name) { return name === "class" ? this._classes : null; },
  setAttribute: function(name, value) { if (name === "class") this._classes = value; }
};
