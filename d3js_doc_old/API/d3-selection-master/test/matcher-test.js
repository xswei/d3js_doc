var tape = require("tape"),
    jsdom = require("jsdom"),
    d3 = require("../");

tape("d3.matcher(selector).call(element) returns true if the element matches the selector", function(test) {
  var document = jsdom.jsdom("<body class='foo'>");
  test.equal(d3.matcher("body").call(document.body), true);
  test.equal(d3.matcher(".foo").call(document.body), true);
  test.equal(d3.matcher("body.foo").call(document.body), true);
  test.equal(d3.matcher("h1").call(document.body), false);
  test.equal(d3.matcher("body.bar").call(document.body), false);
  test.end();
});
