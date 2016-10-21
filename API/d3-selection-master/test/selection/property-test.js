var tape = require("tape"),
    jsdom = require("jsdom"),
    d3 = require("../../");

tape("selection.property(name) returns the property with the specified name on the first selected element", function(test) {
  var node = {foo: 42};
  test.equal(d3.select(node).property("foo"), 42);
  test.equal(d3.selectAll([null, node]).property("foo"), 42);
  test.end();
});

tape("selection.property(name, value) sets property with the specified name on the selected elements", function(test) {
  var one = {},
      two = {},
      selection = d3.selectAll([one, two]);
  test.equal(selection.property("foo", "bar"), selection);
  test.equal(one.foo, "bar");
  test.equal(two.foo, "bar");
  test.end();
});

tape("selection.property(name, null) removes the property with the specified name on the selected elements", function(test) {
  var one = {foo: "bar"},
      two = {foo: "bar"},
      selection = d3.selectAll([one, two]);
  test.equal(selection.property("foo", null), selection);
  test.equal("foo" in one, false);
  test.equal("foo" in two, false);
  test.end();
});

tape("selection.property(name, function) sets the value of the property with the specified name on the selected elements", function(test) {
  var one = {foo: "bar"},
      two = {foo: "bar"},
      selection = d3.selectAll([one, two]);
  test.equal(selection.property("foo", function(d, i) { return i ? "baz" : null; }), selection);
  test.equal("foo" in one, false);
  test.equal(two.foo, "baz");
  test.end();
});

tape("selection.property(name, function) passes the value function data, index and group", function(test) {
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
      .property("color", function(d, i, nodes) { results.push([this, d, i, nodes]); });

  test.deepEqual(results, [
    [three, "child-0-0", 0, [three, four]],
    [four, "child-0-1", 1, [three, four]],
    [five, "child-1-0", 0, [five, ]]
  ]);
  test.end();
});
