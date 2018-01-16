var tape = require("tape"),
    jsdom = require("jsdom"),
    d3 = require("../../");

tape("selection.empty() return false if the selection is not empty", function(test) {
  var document = jsdom.jsdom("<h1 id='one'></h1><h1 id='two'></h1>");
  test.equal(d3.select(document).empty(), false);
  test.end();
});

tape("selection.empty() return true if the selection is empty", function(test) {
  var document = jsdom.jsdom("<h1 id='one'></h1><h1 id='two'></h1>");
  test.equal(d3.select(null).empty(), true);
  test.equal(d3.selectAll([]).empty(), true);
  test.equal(d3.selectAll([,]).empty(), true);
  test.end();
});
