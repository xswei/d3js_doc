var tape = require("tape"),
    jsdom = require("jsdom"),
    d3 = require("../../");

tape("selection.style(name) returns the computed value of the style property with the specified name on the first selected element", function(test) {
  var style = {getPropertyValue: function(name) { return name === "color" ? "rgb(255, 0, 0)" : ""}},
      node = {ownerDocument: {defaultView: {getComputedStyle: function(n) { return n === node ? style : null; }}}};
  test.equal(d3.select(node).style("color"), "rgb(255, 0, 0)");
  test.equal(d3.selectAll([null, node]).style("color"), "rgb(255, 0, 0)");
  test.end();
});

tape("selection.style(name, value) sets the value of the style property with the specified name on the selected elements", function(test) {
  var document = jsdom.jsdom("<h1 id='one' class='c1 c2'>hello</h1><h1 id='two' class='c3'></h1>"),
      one = document.querySelector("#one"),
      two = document.querySelector("#two"),
      selection = d3.selectAll([one, two]);
  test.equal(selection.style("color", "red"), selection);
  test.equal(one.style.getPropertyValue("color"), "red");
  test.equal(one.style.getPropertyPriority("color"), "");
  test.equal(two.style.getPropertyValue("color"), "red");
  test.equal(two.style.getPropertyPriority("color"), "");
  test.end();
});

tape("selection.style(name, value, priority) sets the value and priority of the style property with the specified name on the selected elements", function(test) {
  var document = jsdom.jsdom("<h1 id='one' class='c1 c2'>hello</h1><h1 id='two' class='c3'></h1>"),
      one = document.querySelector("#one"),
      two = document.querySelector("#two"),
      selection = d3.selectAll([one, two]);
  test.equal(selection.style("color", "red", "important"), selection);
  test.equal(one.style.getPropertyValue("color"), "red");
  test.equal(one.style.getPropertyPriority("color"), "important");
  test.equal(two.style.getPropertyValue("color"), "red");
  test.equal(two.style.getPropertyPriority("color"), "important");
  test.end();
});

tape("selection.style(name, null) removes the attribute with the specified name on the selected elements", function(test) {
  var document = jsdom.jsdom("<h1 id='one' style='color:red;' class='c1 c2'>hello</h1><h1 id='two' style='color:red;' class='c3'></h1>"),
      one = document.querySelector("#one"),
      two = document.querySelector("#two"),
      selection = d3.selectAll([one, two]);
  test.equal(selection.style("color", null), selection);
  test.equal(one.style.getPropertyValue("color"), "");
  test.equal(one.style.getPropertyPriority("color"), "");
  test.equal(two.style.getPropertyValue("color"), "");
  test.equal(two.style.getPropertyPriority("color"), "");
  test.end();
});

tape("selection.style(name, function) sets the value of the style property with the specified name on the selected elements", function(test) {
  var document = jsdom.jsdom("<h1 id='one' class='c1 c2'>hello</h1><h1 id='two' class='c3'></h1>"),
      one = document.querySelector("#one"),
      two = document.querySelector("#two"),
      selection = d3.selectAll([one, two]);
  test.equal(selection.style("color", function(d, i) { return i ? "red" : null; }), selection);
  test.equal(one.style.getPropertyValue("color"), "");
  test.equal(one.style.getPropertyPriority("color"), "");
  test.equal(two.style.getPropertyValue("color"), "red");
  test.equal(two.style.getPropertyPriority("color"), "");
  test.end();
});

tape("selection.style(name, function, priority) sets the value and priority of the style property with the specified name on the selected elements", function(test) {
  var document = jsdom.jsdom("<h1 id='one' class='c1 c2'>hello</h1><h1 id='two' class='c3'></h1>"),
      one = document.querySelector("#one"),
      two = document.querySelector("#two"),
      selection = d3.selectAll([one, two]);
  test.equal(selection.style("color", function(d, i) { return i ? "red" : null; }, "important"), selection);
  test.equal(one.style.getPropertyValue("color"), "");
  test.equal(one.style.getPropertyPriority("color"), "");
  test.equal(two.style.getPropertyValue("color"), "red");
  test.equal(two.style.getPropertyPriority("color"), "important");
  test.end();
});

tape("selection.style(name, function) passes the value function data, index and group", function(test) {
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
      .style("color", function(d, i, nodes) { results.push([this, d, i, nodes]); });

  test.deepEqual(results, [
    [three, "child-0-0", 0, [three, four]],
    [four, "child-0-1", 1, [three, four]],
    [five, "child-1-0", 0, [five, ]]
  ]);
  test.end();
});
