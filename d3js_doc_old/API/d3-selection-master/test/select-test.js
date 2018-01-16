var tape = require("tape"),
    jsdom = require("jsdom"),
    d3 = require("../");

tape("d3.select(…) returns an instanceof d3.selection", function(test) {
  var document = jsdom.jsdom("<h1>hello</h1>");
  test.ok(d3.select(document) instanceof d3.selection);
  test.end();
});

tape("d3.select(string) selects the first element that matches the selector string", function(test) {
  var document = global.document = jsdom.jsdom("<h1 id='one'>foo</h1><h1 id='two'>bar</h1>");
  try {
    test.deepEqual(d3.select("h1"), {_groups: [[document.querySelector("h1")]], _parents: [document.documentElement]});
    test.end();
  } finally {
    delete global.document;
  }
});

tape("d3.select(element) selects the given element", function(test) {
  var document = jsdom.jsdom("<h1>hello</h1>");
  test.deepEqual(d3.select(document.body), {_groups: [[document.body]], _parents: [null]});
  test.deepEqual(d3.select(document.documentElement), {_groups: [[document.documentElement]], _parents: [null]});
  test.end();
});

tape("d3.select(window) selects the given window", function(test) {
  var document = jsdom.jsdom("<h1>hello</h1>");
  test.deepEqual(d3.select(document.defaultView), {_groups: [[document.defaultView]], _parents: [null]});
  test.end();
});

tape("d3.select(document) selects the given document", function(test) {
  var document = jsdom.jsdom("<h1>hello</h1>");
  test.deepEqual(d3.select(document), {_groups: [[document]], _parents: [null]});
  test.end();
});

tape("d3.select(null) selects null", function(test) {
  var document = jsdom.jsdom("<h1>hello</h1><null></null><undefined></undefined>");
  test.deepEqual(d3.select(null), {_groups: [[null]], _parents: [null]});
  test.deepEqual(d3.select(undefined), {_groups: [[undefined]], _parents: [null]});
  test.deepEqual(d3.select(), {_groups: [[undefined]], _parents: [null]});
  test.end();
});

tape("d3.select(object) selects an arbitrary object", function(test) {
  var object = {};
  test.deepEqual(d3.select(object), {_groups: [[object]], _parents: [null]});
  test.end();
});
