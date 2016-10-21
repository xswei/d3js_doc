var tape = require("tape"),
    jsdom = require("jsdom"),
    d3 = require("../../");

tape("selection.text() returns the text content on the first selected element", function(test) {
  var node = {textContent: "hello"};
  test.equal(d3.select(node).text(), "hello");
  test.equal(d3.selectAll([null, node]).text(), "hello");
  test.end();
});

tape("selection.text(value) sets text content on the selected elements", function(test) {
  var one = {textContent: ""},
      two = {textContent: ""},
      selection = d3.selectAll([one, two]);
  test.equal(selection.text("bar"), selection);
  test.equal(one.textContent, "bar");
  test.equal(two.textContent, "bar");
  test.end();
});

tape("selection.text(null) clears the text content on the selected elements", function(test) {
  var one = {textContent: "bar"},
      two = {textContent: "bar"},
      selection = d3.selectAll([one, two]);
  test.equal(selection.text(null), selection);
  test.equal(one.textContent, "");
  test.equal(two.textContent, "");
  test.end();
});

tape("selection.text(function) sets the value of the text content on the selected elements", function(test) {
  var one = {textContent: "bar"},
      two = {textContent: "bar"},
      selection = d3.selectAll([one, two]);
  test.equal(selection.text(function(d, i) { return i ? "baz" : null; }), selection);
  test.equal(one.textContent, "");
  test.equal(two.textContent, "baz");
  test.end();
});

tape("selection.text(function) passes the value function data, index and group", function(test) {
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
      .text(function(d, i, nodes) { results.push([this, d, i, nodes]); });

  test.deepEqual(results, [
    [three, "child-0-0", 0, [three, four]],
    [four, "child-0-1", 1, [three, four]],
    [five, "child-1-0", 0, [five, ]]
  ]);
  test.end();
});
