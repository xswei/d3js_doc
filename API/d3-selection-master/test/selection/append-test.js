var tape = require("tape"),
    jsdom = require("jsdom"),
    d3 = require("../../");

tape("selection.append(…) returns a selection", function(test) {
  var document = jsdom.jsdom();
  test.ok(d3.select(document.body).append("h1") instanceof d3.selection);
  test.end();
});

tape("selection.append(name) appends a new element of the specified name as the last child of each selected element", function(test) {
  var document = jsdom.jsdom("<div id='one'><span class='before'></span></div><div id='two'><span class='before'></span></div>"),
      one = document.querySelector("#one"),
      two = document.querySelector("#two"),
      selection = d3.selectAll([one, two]).append("span"),
      three = one.querySelector("span:last-child"),
      four = two.querySelector("span:last-child");
  test.deepEqual(selection, {_groups: [[three, four]], _parents: [null]});
  test.end();
});

tape("selection.append(name) observes the specified namespace, if any", function(test) {
  var document = jsdom.jsdom("<div id='one'></div><div id='two'></div>"),
      one = document.querySelector("#one"),
      two = document.querySelector("#two"),
      selection = d3.selectAll([one, two]).append("svg:g"),
      three = one.querySelector("g"),
      four = two.querySelector("g");
  test.equal(three.namespaceURI, "http://www.w3.org/2000/svg");
  test.equal(four.namespaceURI, "http://www.w3.org/2000/svg");
  test.deepEqual(selection, {_groups: [[three, four]], _parents: [null]});
  test.end();
});

tape("selection.append(name) uses createElement, not createElementNS, if the implied namespace is the same as the document", function(test) {
  var pass = 0,
      document = jsdom.jsdom("<div id='one'></div><div id='two'></div>"),
      one = document.querySelector("#one"),
      two = document.querySelector("#two"),
      createElement = document.createElement;

  document.createElement = function() {
    ++pass;
    return createElement.apply(this, arguments);
  };

  var selection = d3.selectAll([one, two]).append("P"),
      three = one.querySelector("p"),
      four = two.querySelector("p");
  test.equal(pass, 2);
  test.deepEqual(selection, {_groups: [[three, four]], _parents: [null]});
  test.end();
});

tape("selection.append(name) observes the implicit namespace, if any", function(test) {
  var document = jsdom.jsdom("<div id='one'></div><div id='two'></div>"),
      one = document.querySelector("#one"),
      two = document.querySelector("#two"),
      selection = d3.selectAll([one, two]).append("svg"),
      three = one.querySelector("svg"),
      four = two.querySelector("svg");
  test.equal(three.namespaceURI, "http://www.w3.org/2000/svg");
  test.equal(four.namespaceURI, "http://www.w3.org/2000/svg");
  test.deepEqual(selection, {_groups: [[three, four]], _parents: [null]});
  test.end();
});

tape("selection.append(name) observes the inherited namespace, if any", function(test) {
  var document = jsdom.jsdom("<div id='one'></div><div id='two'></div>"),
      one = document.querySelector("#one"),
      two = document.querySelector("#two"),
      selection = d3.selectAll([one, two]).append("svg").append("g"),
      three = one.querySelector("g"),
      four = two.querySelector("g");
  test.equal(three.namespaceURI, "http://www.w3.org/2000/svg");
  test.equal(four.namespaceURI, "http://www.w3.org/2000/svg");
  test.deepEqual(selection, {_groups: [[three, four]], _parents: [null]});
  test.end();
});

tape("selection.append(name) observes a custom namespace, if any", function(test) {
  try {
    d3.namespaces.d3js = "https://d3js.org/2016/namespace";
    var document = jsdom.jsdom("<div id='one'></div><div id='two'></div>"),
        one = document.querySelector("#one"),
        two = document.querySelector("#two"),
        selection = d3.selectAll([one, two]).append("d3js"),
        three = one.querySelector("d3js"),
        four = two.querySelector("d3js");
    test.equal(three.namespaceURI, "https://d3js.org/2016/namespace");
    test.equal(four.namespaceURI, "https://d3js.org/2016/namespace");
    test.deepEqual(selection, {_groups: [[three, four]], _parents: [null]});
    test.end();
  } finally {
    delete d3.namespaces.d3js;
  }
});

tape("selection.append(function) appends the returned element as the last child of each selected element", function(test) {
  var document = jsdom.jsdom("<div id='one'><span class='before'></span></div><div id='two'><span class='before'></span></div>"),
      one = document.querySelector("#one"),
      two = document.querySelector("#two"),
      selection = d3.selectAll([one, two]).append(function() { return document.createElement("SPAN"); }),
      three = one.querySelector("span:last-child"),
      four = two.querySelector("span:last-child");
  test.deepEqual(selection, {_groups: [[three, four]], _parents: [null]});
  test.end();
});

tape("selection.append(function) passes the creator function data, index and group", function(test) {
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
      .append(function(d, i, nodes) { results.push([this, d, i, nodes]); return document.createElement("SPAN"); });

  test.deepEqual(results, [
    [three, "child-0-0", 0, [three, four]],
    [four, "child-0-1", 1, [three, four]],
    [five, "child-1-0", 0, [five, ]]
  ]);
  test.end();
});

tape("selection.append(…) propagates data if defined on the originating element", function(test) {
  var document = jsdom.jsdom("<parent><child>hello</child></parent>"),
      parent = document.querySelector("parent");
  parent.__data__ = 0; // still counts as data even though falsey
  test.equal(d3.select(parent).append("child").datum(), 0);
  test.end();
});

tape("selection.append(…) will not propagate data if not defined on the originating element", function(test) {
  var document = jsdom.jsdom("<parent><child>hello</child></parent>"),
      parent = document.querySelector("parent"),
      child = document.querySelector("child");
  child.__data__ = 42;
  d3.select(parent).append(function() { return child; });
  test.equal(child.__data__, 42);
  test.end();
});

tape("selection.append(…) propagates parents from the originating selection", function(test) {
  var document = jsdom.jsdom("<parent></parent><parent></parent>"),
      parents = d3.select(document).selectAll("parent"),
      childs = parents.append("child");
  test.deepEqual(parents, {_groups: [document.querySelectorAll("parent")], _parents: [document]});
  test.deepEqual(childs, {_groups: [document.querySelectorAll("child")], _parents: [document]});
  test.ok(parents._parents === childs._parents); // Not copied!
  test.end();
});

tape("selection.append(…) can select elements when the originating selection is nested", function(test) {
  var document = jsdom.jsdom("<parent id='one'><child></child></parent><parent id='two'><child></child></parent>"),
      one = document.querySelector("#one"),
      two = document.querySelector("#two"),
      selection = d3.selectAll([one, two]).selectAll("child").append("span"),
      three = one.querySelector("span"),
      four = two.querySelector("span");
  test.deepEqual(selection, {_groups: [[three], [four]], _parents: [one, two]});
  test.end();
});

tape("selection.append(…) skips missing originating elements", function(test) {
  var document = jsdom.jsdom("<h1></h1>"),
      h1 = document.querySelector("h1"),
      selection = d3.selectAll([, h1]).append("span"),
      span = h1.querySelector("span");
  test.deepEqual(selection, {_groups: [[, span]], _parents: [null]});
  test.end();
});
