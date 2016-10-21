var tape = require("tape"),
    jsdom = require("jsdom"),
    d3 = require("../../");

tape("selection.remove() removes selected elements from their parent", function(test) {
  var document = jsdom.jsdom("<h1 id='one'></h1><h1 id='two'></h1>"),
      one = document.querySelector("#one"),
      two = document.querySelector("#two"),
      selection = d3.selectAll([two, one]);
  test.equal(selection.remove(), selection);
  test.equal(one.parentNode, null);
  test.equal(two.parentNode, null);
  test.end();
});

tape("selection.remove() skips elements that have already been detached", function(test) {
  var document = jsdom.jsdom("<h1 id='one'></h1><h1 id='two'></h1>"),
      one = document.querySelector("#one"),
      two = document.querySelector("#two"),
      selection = d3.selectAll([two, one]);
  one.parentNode.removeChild(one);
  test.equal(selection.remove(), selection);
  test.equal(one.parentNode, null);
  test.equal(two.parentNode, null);
  test.end();
});

tape("selection.remove() skips missing elements", function(test) {
  var document = jsdom.jsdom("<h1 id='one'></h1><h1 id='two'></h1>"),
      one = document.querySelector("#one"),
      two = document.querySelector("#two"),
      selection = d3.selectAll([, one]);
  test.equal(selection.remove(), selection);
  test.equal(one.parentNode, null);
  test.equal(two.parentNode, document.body);
  test.end();
});
