var tape = require("tape"),
    jsdom = require("jsdom"),
    d3 = require("../");

tape("d3.selector(selector).call(element) returns the first element that matches the selector", function(test) {
  var document = jsdom.jsdom("<body class='foo'>");
  test.equal(d3.selector("body").call(document.documentElement), document.body);
  test.equal(d3.selector(".foo").call(document.documentElement), document.body);
  test.equal(d3.selector("body.foo").call(document.documentElement), document.body);
  test.equal(d3.selector("h1").call(document.documentElement), null);
  test.equal(d3.selector("body.bar").call(document.documentElement), null);
  test.end();
});

tape("d3.selector(null).call(element) always returns undefined", function(test) {
  var document = jsdom.jsdom("<body class='foo'><undefined></undefined><null></null>");
  test.equal(d3.selector().call(document.documentElement), undefined);
  test.equal(d3.selector(null).call(document.documentElement), undefined);
  test.equal(d3.selector(undefined).call(document.documentElement), undefined);
  test.end();
});
