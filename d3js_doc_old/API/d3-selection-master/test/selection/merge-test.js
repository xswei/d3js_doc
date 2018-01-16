var tape = require("tape"),
    jsdom = require("jsdom"),
    d3 = require("../../");

tape("selection.merge(selection) returns a new selection, merging the two selections", function(test) {
  var document = jsdom.jsdom("<h1 id='one'>one</h1><h1 id='two'>two</h1>"),
      body = document.body,
      one = document.querySelector("#one"),
      two = document.querySelector("#two"),
      selection0 = d3.select(body).selectAll("h1"),
      selection1 = selection0.select(function(d, i) { return i & 1 ? this : null; }),
      selection2 = selection0.select(function(d, i) { return i & 1 ? null : this; });
  test.deepEqual(selection1.merge(selection2), {_groups: [[one, two]], _parents: [body]});
  test.deepEqual(selection1, {_groups: [[, two]], _parents: [body]});
  test.deepEqual(selection2, {_groups: [[one, ]], _parents: [body]});
  test.end();
});

tape("selection.merge(selection) returns a selection with the same size and parents as this selection", function(test) {
  var document0 = jsdom.jsdom("<h1 id='one'>one</h1><h1 id='two'>two</h1>"),
      document1 = jsdom.jsdom("<h1 id='one'>one</h1><h1 id='two'>two</h1><h1 id='three'>three</h1>"),
      body0 = document0.body,
      body1 = document1.body,
      one0 = document0.querySelector("#one"),
      one1 = document1.querySelector("#one"),
      two0 = document0.querySelector("#two"),
      two1 = document1.querySelector("#two"),
      three1 = document1.querySelector("#three");
  test.deepEqual(d3.select(body0).selectAll("h1").merge(d3.select(body1).selectAll("h1")), {_groups: [[one0, two0]], _parents: [body0]});
  test.deepEqual(d3.select(body1).selectAll("h1").merge(d3.select(body0).selectAll("h1")), {_groups: [[one1, two1, three1]], _parents: [body1]});
  test.end();
});

tape("selection.merge(selection) reuses groups from this selection if the other selection has fewer groups", function(test) {
  var document = jsdom.jsdom("<parent><child></child><child></child></parent><parent><child></child><child></child></parent>"),
      body = document.body,
      selection0 = d3.select(body).selectAll("parent").selectAll("child"),
      selection1 = d3.select(body).selectAll("parent:first-child").selectAll("child"),
      selection01 = selection0.merge(selection1),
      selection10 = selection1.merge(selection0);
  test.deepEqual(selection01, selection0);
  test.deepEqual(selection10, selection1);
  test.equal(selection01._groups[1], selection0._groups[1]);
  test.end();
});

tape("selection.merge(selection) reuses this selection’s parents", function(test) {
  var document = jsdom.jsdom("<parent><child></child><child></child></parent><parent><child></child><child></child></parent>"),
      body = document.body,
      selection0 = d3.select(body).selectAll("parent").selectAll("child"),
      selection1 = d3.select(body).selectAll("parent:first-child").selectAll("child"),
      selection01 = selection0.merge(selection1),
      selection10 = selection1.merge(selection0);
  test.equal(selection01._parents, selection0._parents);
  test.equal(selection10._parents, selection1._parents);
  test.end();
});
