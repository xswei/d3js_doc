var tape = require("tape"),
    jsdom = require("jsdom"),
    d3 = require("../../");

tape("selection.insert(name, before) inserts a new element of the specified name before the specified child of each selected element", function(test) {
  var document = jsdom.jsdom("<div id='one'><span class='before'></span></div><div id='two'><span class='before'></span></div>"),
      one = document.querySelector("#one"),
      two = document.querySelector("#two"),
      selection = d3.selectAll([one, two]).insert("span", ".before"),
      three = one.querySelector("span:first-child"),
      four = two.querySelector("span:first-child");
  test.deepEqual(selection, {_groups: [[three, four]], _parents: [null]});
  test.end();
});

tape("selection.insert(function, function) inserts the returned element before the specified child of each selected element", function(test) {
  var document = jsdom.jsdom("<div id='one'><span class='before'></span></div><div id='two'><span class='before'></span></div>"),
      one = document.querySelector("#one"),
      two = document.querySelector("#two"),
      selection = d3.selectAll([one, two]).insert(function() { return document.createElement("SPAN"); }, function() { return this.firstChild; }),
      three = one.querySelector("span:first-child"),
      four = two.querySelector("span:first-child");
  test.deepEqual(selection, {_groups: [[three, four]], _parents: [null]});
  test.end();
});

tape("selection.insert(function, function) inserts the returned element as the last child if the selector function returns null", function(test) {
  var document = jsdom.jsdom("<div id='one'><span class='before'></span></div><div id='two'><span class='before'></span></div>"),
      one = document.querySelector("#one"),
      two = document.querySelector("#two"),
      selection = d3.selectAll([one, two]).insert(function() { return document.createElement("SPAN"); }, function() { return; }),
      three = one.querySelector("span:last-child"),
      four = two.querySelector("span:last-child");
  test.deepEqual(selection, {_groups: [[three, four]], _parents: [null]});
  test.end();
});

tape("selection.insert(name, function) passes the selector function data, index and group", function(test) {
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
      .insert("span", function(d, i, nodes) { results.push([this, d, i, nodes]); });

  test.deepEqual(results, [
    [three, "child-0-0", 0, [three, four]],
    [four, "child-0-1", 1, [three, four]],
    [five, "child-1-0", 0, [five, ]]
  ]);
  test.end();
});
