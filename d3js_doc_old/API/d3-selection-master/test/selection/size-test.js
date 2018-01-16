var tape = require("tape"),
    jsdom = require("jsdom"),
    d3 = require("../../");

tape("selection.size() returns the number of selected elements", function(test) {
  var document = jsdom.jsdom("<h1 id='one'></h1><h1 id='two'></h1>"),
      one = document.querySelector("#one"),
      two = document.querySelector("#two");
  test.deepEqual(d3.selectAll([]).size(), 0);
  test.deepEqual(d3.selectAll([one]).size(), 1);
  test.deepEqual(d3.selectAll([one, two]).size(), 2);
  test.end();
});

tape("selection.size() skips missing elements", function(test) {
  var document = jsdom.jsdom("<h1 id='one'></h1><h1 id='two'></h1>"),
      one = document.querySelector("#one"),
      two = document.querySelector("#two");
  test.deepEqual(d3.selectAll([, one,, two]).size(), 2);
  test.end();
});
