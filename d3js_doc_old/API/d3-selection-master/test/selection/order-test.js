var tape = require("tape"),
    jsdom = require("jsdom"),
    d3 = require("../../");

tape("selection.order() moves selected elements so that they are before their next sibling", function(test) {
  var document = jsdom.jsdom("<h1 id='one'></h1><h1 id='two'></h1>"),
      one = document.querySelector("#one"),
      two = document.querySelector("#two"),
      selection = d3.selectAll([two, one]);
  test.equal(selection.order(), selection);
  test.equal(one.nextSibling, null);
  test.equal(two.nextSibling, one);
  test.end();
});

tape("selection.order() only orders within each group", function(test) {
  var document = jsdom.jsdom("<h1><span id='one'></span></h1><h1><span id='two'></span></h1>"),
      one = document.querySelector("#one"),
      two = document.querySelector("#two"),
      selection = d3.select(document).selectAll("h1").selectAll("span");
  test.equal(selection.order(), selection);
  test.equal(one.nextSibling, null);
  test.equal(two.nextSibling, null);
  test.end();
});

tape("selection.order() does not re-append nodes that are already in order", function(test) {
  var two = {nextSibling: null},
      one = {nextSibling: two},
      selection = d3.selectAll([one, two]);
  test.equal(selection.order(), selection);
  test.equal(one.nextSibling, two);
  test.equal(two.nextSibling, null);
  test.end();
});
