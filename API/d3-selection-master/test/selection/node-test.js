var tape = require("tape"),
    jsdom = require("jsdom"),
    d3 = require("../../");

tape("selection.node() returns the first element in a selection", function(test) {
  var document = jsdom.jsdom("<h1 id='one'></h1><h1 id='two'></h1>"),
      one = document.querySelector("#one"),
      two = document.querySelector("#two");
  test.equal(d3.selectAll([one, two]).node(), one);
  test.end();
});

tape("selection.node() skips missing elements", function(test) {
  var document = jsdom.jsdom("<h1 id='one'></h1><h1 id='two'></h1>"),
      one = document.querySelector("#one"),
      two = document.querySelector("#two");
  test.equal(d3.selectAll([, one,, two]).node(), one);
  test.end();
});

tape("selection.node() skips empty groups", function(test) {
  var document = jsdom.jsdom("<h1 id='one'></h1><h1 id='two'></h1>"),
      one = document.querySelector("#one"),
      two = document.querySelector("#two");
  test.equal(d3.selectAll([one, two]).selectAll(function(d, i) { return i ? [this] : []; }).node(), two);
  test.end();
});

tape("selection.node() returns null for an empty selection", function(test) {
  test.equal(d3.select(null).node(), null);
  test.equal(d3.selectAll([]).node(), null);
  test.equal(d3.selectAll([,,]).node(), null);
  test.end();
});
