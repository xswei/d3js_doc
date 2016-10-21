var tape = require("tape"),
    jsdom = require("jsdom"),
    d3 = require("../../");

tape("d3.window(node) returns node.ownerDocument.defaultView", function(test) {
  var document = jsdom.jsdom();
  test.equal(d3.window(document.body), document.defaultView);
  test.end();
});

tape("d3.window(document) returns document.defaultView", function(test) {
  var document = jsdom.jsdom();
  test.equal(d3.window(document), document.defaultView);
  test.end();
});

tape("d3.window(window) returns window", function(test) {
  var window = jsdom.jsdom().defaultView;
  test.equal(d3.window(window), window);
  test.end();
});
