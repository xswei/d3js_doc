var tape = require("tape"),
    jsdom = require("jsdom"),
    d3 = require("../../");

tape("selection.nodes() returns an array containing all selected nodes", function(test) {
  var document = jsdom.jsdom("<h1 id='one'></h1><h1 id='two'></h1>"),
      one = document.querySelector("#one"),
      two = document.querySelector("#two");
  test.deepEqual(d3.selectAll([one, two]).nodes(), [one, two]);
  test.end();
});

tape("selection.nodes() merges nodes from all groups into a single array", function(test) {
  var document = jsdom.jsdom("<h1 id='one'></h1><h1 id='two'></h1>"),
      one = document.querySelector("#one"),
      two = document.querySelector("#two");
  test.deepEqual(d3.selectAll([one, two]).selectAll(function() { return [this]; }).nodes(), [one, two]);
  test.end();
});

tape("selection.nodes() skips missing elements", function(test) {
  var document = jsdom.jsdom("<h1 id='one'></h1><h1 id='two'></h1>"),
      one = document.querySelector("#one"),
      two = document.querySelector("#two");
  test.deepEqual(d3.selectAll([, one,, two]).nodes(), [one, two]);
  test.end();
});
