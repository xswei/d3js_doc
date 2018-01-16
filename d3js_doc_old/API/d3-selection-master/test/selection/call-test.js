var tape = require("tape"),
    jsdom = require("jsdom"),
    d3 = require("../../");

tape("selection.call(function) calls the specified function, passing the selection", function(test) {
  var result,
      document = jsdom.jsdom(),
      selection = d3.select(document);
  test.equal(selection.call(function(selection) { result = selection; }), selection);
  test.equal(result, selection);
  test.end();
});

tape("selection.call(function, arguments…) calls the specified function, passing the additional arguments", function(test) {
  var result = [],
      foo = {},
      bar = {},
      document = jsdom.jsdom(),
      selection = d3.select(document);
  test.equal(selection.call(function(selection, a, b) { result.push(selection, a, b); }, foo, bar), selection);
  test.deepEqual(result, [selection, foo, bar]);
  test.end();
});
