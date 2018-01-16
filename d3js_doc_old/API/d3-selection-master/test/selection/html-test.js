var tape = require("tape"),
    jsdom = require("jsdom"),
    d3 = require("../../");

tape("selection.html() returns the inner HTML on the first selected element", function(test) {
  var node = {innerHTML: "hello"};
  test.equal(d3.select(node).html(), "hello");
  test.equal(d3.selectAll([null, node]).html(), "hello");
  test.end();
});

tape("selection.html(value) sets inner HTML on the selected elements", function(test) {
  var one = {innerHTML: ""},
      two = {innerHTML: ""},
      selection = d3.selectAll([one, two]);
  test.equal(selection.html("bar"), selection);
  test.equal(one.innerHTML, "bar");
  test.equal(two.innerHTML, "bar");
  test.end();
});

tape("selection.html(null) clears the inner HTML on the selected elements", function(test) {
  var one = {innerHTML: "bar"},
      two = {innerHTML: "bar"},
      selection = d3.selectAll([one, two]);
  test.equal(selection.html(null), selection);
  test.equal(one.innerHTML, "");
  test.equal(two.innerHTML, "");
  test.end();
});

tape("selection.html(function) sets the value of the inner HTML on the selected elements", function(test) {
  var one = {innerHTML: "bar"},
      two = {innerHTML: "bar"},
      selection = d3.selectAll([one, two]);
  test.equal(selection.html(function(d, i) { return i ? "baz" : null; }), selection);
  test.equal(one.innerHTML, "");
  test.equal(two.innerHTML, "baz");
  test.end();
});

tape("selection.html(function) passes the value function data, index and group", function(test) {
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
      .html(function(d, i, nodes) { results.push([this, d, i, nodes]); });

  test.deepEqual(results, [
    [three, "child-0-0", 0, [three, four]],
    [four, "child-0-1", 1, [three, four]],
    [five, "child-1-0", 0, [five, ]]
  ]);
  test.end();
});
