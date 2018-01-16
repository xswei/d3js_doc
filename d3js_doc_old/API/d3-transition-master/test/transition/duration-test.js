var tape = require("tape"),
    jsdom = require("jsdom"),
    d3_selection = require("d3-selection");

require("../../");

tape("transition.duration() returns the duration for the first non-null node", function(test) {
  var document = jsdom.jsdom("<h1 id='one'></h1><h1 id='two'></h1>"),
      one = document.querySelector("#one"),
      two = document.querySelector("#two"),
      transition1 = d3_selection.select(one).transition(),
      transition2 = d3_selection.select(two).transition().duration(50);
  test.strictEqual(one.__transition[transition1._id].duration, 250);
  test.strictEqual(two.__transition[transition2._id].duration, 50);
  test.strictEqual(transition1.duration(), 250);
  test.strictEqual(transition2.duration(), 50);
  test.strictEqual(d3_selection.select(one).transition(transition1).duration(), 250);
  test.strictEqual(d3_selection.select(two).transition(transition2).duration(), 50);
  test.strictEqual(d3_selection.selectAll([null, one]).transition(transition1).duration(), 250);
  test.strictEqual(d3_selection.selectAll([null, two]).transition(transition2).duration(), 50);
  test.strictEqual(d3_selection.selectAll([one, two]).transition(transition1).duration(), 250);
  test.strictEqual(d3_selection.selectAll([two, one]).transition(transition2).duration(), 50);
  test.end();
});

tape("transition.duration(number) sets the duration for each selected element to the specified number", function(test) {
  var document = jsdom.jsdom("<h1 id='one'></h1><h1 id='two'></h1>"),
      one = document.querySelector("#one"),
      two = document.querySelector("#two"),
      transition = d3_selection.selectAll([one, two]).transition().duration(50);
  test.strictEqual(one.__transition[transition._id].duration, 50);
  test.strictEqual(two.__transition[transition._id].duration, 50);
  test.end();
});

tape("transition.duration(value) coerces the specified value to a number", function(test) {
  var document = jsdom.jsdom("<h1 id='one'></h1><h1 id='two'></h1>"),
      one = document.querySelector("#one"),
      two = document.querySelector("#two"),
      transition = d3_selection.selectAll([one, two]).transition().duration("50");
  test.strictEqual(one.__transition[transition._id].duration, 50);
  test.strictEqual(two.__transition[transition._id].duration, 50);
  test.end();
});

tape("transition.duration(function) passes the expected arguments and context to the function", function(test) {
  var document = jsdom.jsdom("<h1 id='one'></h1><h1 id='two'></h1>"),
      one = document.querySelector("#one"),
      two = document.querySelector("#two"),
      result = [],
      selection = d3_selection.selectAll([one, two]).data(["one", "two"]),
      transition = selection.transition().duration(function(d, i, nodes) { result.push([d, i, nodes, this]); });
  test.deepEqual(result, [
    ["one", 0, transition._groups[0], one],
    ["two", 1, transition._groups[0], two]
  ]);
  test.end();
});

tape("transition.duration(function) sets the duration for each selected element to the number returned by the specified function", function(test) {
  var document = jsdom.jsdom("<h1 id='one'></h1><h1 id='two'></h1>"),
      one = document.querySelector("#one"),
      two = document.querySelector("#two"),
      transition = d3_selection.selectAll([one, two]).transition().duration(function(d, i) { return i * 20; });
  test.strictEqual(one.__transition[transition._id].duration, 0);
  test.strictEqual(two.__transition[transition._id].duration, 20);
  test.end();
});

tape("transition.duration(function) coerces the value returned by the specified function to a number", function(test) {
  var document = jsdom.jsdom("<h1 id='one'></h1><h1 id='two'></h1>"),
      one = document.querySelector("#one"),
      two = document.querySelector("#two"),
      transition = d3_selection.selectAll([one, two]).transition().duration(function(d, i) { return i * 20 + ""; });
  test.strictEqual(one.__transition[transition._id].duration, 0);
  test.strictEqual(two.__transition[transition._id].duration, 20);
  test.end();
});
