var tape = require("tape"),
    jsdom = require("jsdom"),
    d3_timer = require("d3-timer"),
    d3_selection = require("d3-selection");

require("../../");

tape("transition.text(value) creates a tween to set the text content to the specified value post-start", function(test) {
  var root = jsdom.jsdom().documentElement,
      selection = d3_selection.select(root),
      transition = selection.transition().text("hello").on("start", started);

  function started() {
    test.equal(root.textContent, "");
  }

  d3_timer.timeout(function(elapsed) {
    test.equal(root.textContent, "hello");
    test.end();
  });
});

tape("transition.text(value) creates a tween to set the text content to the value returned by the specified function post-start", function(test) {
  var root = jsdom.jsdom().documentElement,
      selection = d3_selection.select(root),
      transition = selection.transition().text(function() { return "hello"; }).on("start", started);

  function started() {
    test.equal(root.textContent, "");
  }

  d3_timer.timeout(function(elapsed) {
    test.equal(root.textContent, "hello");
    test.end();
  });
});

tape("transition.text(value) immediately evaluates the specified function with the expected context and arguments", function(test) {
  var document = jsdom.jsdom("<h1 id='one'></h1><h1 id='two'></h1>"),
      one = document.querySelector("#one"),
      two = document.querySelector("#two"),
      selection = d3_selection.selectAll([one, two]).data(["red", "green"]),
      result = [],
      transition = selection.transition().text(function(d, i, nodes) { result.push([d, i, nodes, this]); return d; });

  test.deepEqual(result, [
    ["red", 0, [one, two], one],
    ["green", 1, [one, two], two]
  ]);

  d3_timer.timeout(function(elapsed) {
    test.strictEqual(one.textContent, "red");
    test.strictEqual(two.textContent, "green");
    test.end();
  });
});

tape("transition.text(value) creates a tween with the name \"text\"", function(test) {
  var root = jsdom.jsdom().documentElement,
      selection = d3_selection.select(root),
      transition = selection.transition().text("hello");
  test.equal(transition.tween("text").call(root), undefined);
  test.equal(root.textContent, "hello");
  test.end();
});
