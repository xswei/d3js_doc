var tape = require("tape"),
    jsdom = require("jsdom"),
    d3 = require("../");

tape("d3.selectAll(…) returns an instanceof d3.selection", function(test) {
  var document = jsdom.jsdom("<h1>hello</h1>");
  test.ok(d3.selectAll([document]) instanceof d3.selection);
  test.end();
});

tape("d3.selectAll(string) selects all elements that match the selector string, in order", function(test) {
  var document = global.document = jsdom.jsdom("<h1 id='one'>foo</h1><h1 id='two'>bar</h1>");
  try {
    test.deepEqual(d3.selectAll("h1"), {_groups: [document.querySelectorAll("h1")], _parents: [document.documentElement]});
    test.end();
  } finally {
    delete global.document;
  }
});

tape("d3.selectAll(nodeList) selects a NodeList of elements", function(test) {
  var document = jsdom.jsdom("<h1>hello</h1><h2>world</h2>");
  test.deepEqual(d3.selectAll(document.querySelectorAll("h1,h2")), {_groups: [document.querySelectorAll("h1,h2")], _parents: [null]});
  test.end();
});

tape("d3.selectAll(array) selects an array of elements", function(test) {
  var document = jsdom.jsdom("<h1>hello</h1><h2>world</h2>"),
      h1 = document.querySelector("h1"),
      h2 = document.querySelector("h2");
  test.deepEqual(d3.selectAll([h1, h2]), {_groups: [[h1, h2]], _parents: [null]});
  test.end();
});

tape("d3.selectAll(array) can select an empty array", function(test) {
  test.deepEqual(d3.selectAll([]), {_groups: [[]], _parents: [null]});
  test.end();
});

tape("d3.selectAll(null) selects an empty array", function(test) {
  test.deepEqual(d3.selectAll(), {_groups: [[]], _parents: [null]});
  test.deepEqual(d3.selectAll(null), {_groups: [[]], _parents: [null]});
  test.deepEqual(d3.selectAll(undefined), {_groups: [[]], _parents: [null]});
  test.end();
});

tape("d3.selectAll(null) selects a new empty array each time", function(test) {
  var one = d3.selectAll()._groups[0],
      two = d3.selectAll()._groups[0];
  test.equal(one === two, false);
  one.push("one");
  test.deepEqual(d3.selectAll()._groups[0], []);
  test.end();
});

tape("d3.selectAll(array) can select an array that contains null", function(test) {
  var document = jsdom.jsdom("<h1>hello</h1><h2>world</h2>"),
      h1 = document.querySelector("h1");
  test.deepEqual(d3.selectAll([null, h1, null]), {_groups: [[null, h1, null]], _parents: [null]});
  test.end();
});

tape("d3.selectAll(array) can select an array that contains arbitrary objects", function(test) {
  var object = {};
  test.deepEqual(d3.selectAll([object]), {_groups: [[object]], _parents: [null]});
  test.end();
});
