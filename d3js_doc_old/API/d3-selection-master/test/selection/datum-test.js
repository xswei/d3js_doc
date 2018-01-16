var tape = require("tape"),
    jsdom = require("jsdom"),
    d3 = require("../../");

tape("selection.datum() returns the datum on the first selected element", function(test) {
  var node = {__data__: "hello"};
  test.equal(d3.select(node).datum(), "hello");
  test.equal(d3.selectAll([null, node]).datum(), "hello");
  test.end();
});

tape("selection.datum(value) sets datum on the selected elements", function(test) {
  var one = {__data__: ""},
      two = {__data__: ""},
      selection = d3.selectAll([one, two]);
  test.equal(selection.datum("bar"), selection);
  test.equal(one.__data__, "bar");
  test.equal(two.__data__, "bar");
  test.end();
});

tape("selection.datum(null) clears the datum on the selected elements", function(test) {
  var one = {__data__: "bar"},
      two = {__data__: "bar"},
      selection = d3.selectAll([one, two]);
  test.equal(selection.datum(null), selection);
  test.equal("__data__" in one, false);
  test.equal("__data__" in two, false);
  test.end();
});

tape("selection.datum(function) sets the value of the datum on the selected elements", function(test) {
  var one = {__data__: "bar"},
      two = {__data__: "bar"},
      selection = d3.selectAll([one, two]);
  test.equal(selection.datum(function(d, i) { return i ? "baz" : null; }), selection);
  test.equal("__data__" in one, false);
  test.equal(two.__data__, "baz");
  test.end();
});

tape("selection.datum(function) passes the value function data, index and group", function(test) {
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
      .datum(function(d, i, nodes) { results.push([this, d, i, nodes]); });

  test.deepEqual(results, [
    [three, "child-0-0", 0, [three, four]],
    [four, "child-0-1", 1, [three, four]],
    [five, "child-1-0", 0, [five, ]]
  ]);
  test.end();
});
