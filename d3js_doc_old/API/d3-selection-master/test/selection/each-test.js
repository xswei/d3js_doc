var tape = require("tape"),
    jsdom = require("jsdom"),
    d3 = require("../../");

tape("selection.each(function) calls the specified function for each selected element in order", function(test) {
  var result = [],
      document = jsdom.jsdom("<h1 id='one'></h1><h1 id='two'></h1>"),
      one = document.querySelector("#one"),
      two = document.querySelector("#two"),
      selection = d3.selectAll([one, two]).datum(function(d, i) { return "node-" + i; });
  test.equal(selection.each(function(d, i, nodes) { result.push(this, d, i, nodes); }), selection);
  test.deepEqual(result, [one, "node-0", 0, [one, two], two, "node-1", 1, [one, two]]);
  test.end();
});

tape("selection.each(function) skips missing elements", function(test) {
  var result = [],
      document = jsdom.jsdom("<h1 id='one'></h1><h1 id='two'></h1>"),
      one = document.querySelector("#one"),
      two = document.querySelector("#two"),
      selection = d3.selectAll([, one,, two]).datum(function(d, i) { return "node-" + i; });
  test.equal(selection.each(function(d, i, nodes) { result.push(this, d, i, nodes); }), selection);
  test.deepEqual(result, [one, "node-1", 1, [, one,, two], two, "node-3", 3, [, one,, two]]);
  test.end();
});
