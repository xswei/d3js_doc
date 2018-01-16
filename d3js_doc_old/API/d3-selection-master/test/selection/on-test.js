var tape = require("tape"),
    jsdom = require("jsdom"),
    d3 = require("../../");

tape("selection.on(type, listener) registers a listeners for the specified event type on each selected element", function(test) {
  var clicks = 0,
      document = jsdom.jsdom("<h1 id='one'></h1><h1 id='two'></h1>"),
      one = document.querySelector("#one"),
      two = document.querySelector("#two"),
      selection = d3.selectAll([one, two]);
  test.equal(selection.on("click", function() { ++clicks; }), selection);
  selection.dispatch("click");
  test.equal(clicks, 2);
  selection.dispatch("tick");
  test.equal(clicks, 2);
  test.end();
});

tape("selection.on(type, listener) observes the specified name, if any", function(test) {
  var foo = 0,
      bar = 0,
      document = jsdom.jsdom("<h1 id='one'></h1><h1 id='two'></h1>"),
      one = document.querySelector("#one"),
      two = document.querySelector("#two"),
      selection = d3.selectAll([one, two]).on("click.foo", function() { ++foo; }).on("click.bar", function() { ++bar; });
  selection.dispatch("click");
  test.equal(foo, 2);
  test.equal(bar, 2);
  test.end();
});

tape("selection.on(type, listener, capture) observes the specified capture flag, if any", function(test) {
  var result,
      selection = d3.select({addEventListener: function(type, listener, capture) { result = capture; }});
  test.equal(selection.on("click.foo", function() {}, true), selection);
  test.deepEqual(result, true);
  test.end();
});

tape("selection.on(type) returns the listener for the specified event type, if any", function(test) {
  var clicked = function() {},
      document = jsdom.jsdom("<h1 id='one'></h1><h1 id='two'></h1>"),
      one = document.querySelector("#one"),
      two = document.querySelector("#two"),
      selection = d3.selectAll([one, two]).on("click", clicked);
  test.equal(selection.on("click"), clicked);
  test.end();
});

tape("selection.on(type) observes the specified name, if any", function(test) {
  var clicked = function() {},
      document = jsdom.jsdom("<h1 id='one'></h1><h1 id='two'></h1>"),
      one = document.querySelector("#one"),
      two = document.querySelector("#two"),
      selection = d3.selectAll([one, two]).on("click.foo", clicked);
  test.equal(selection.on("click"), undefined);
  test.equal(selection.on("click.foo"), clicked);
  test.equal(selection.on("click.bar"), undefined);
  test.equal(selection.on("tick.foo"), undefined);
  test.equal(selection.on(".foo"), undefined);
  test.end();
});

tape("selection.on(type, null) removes the listener with the specified name, if any", function(test) {
  var clicks = 0,
      document = jsdom.jsdom("<h1 id='one'></h1><h1 id='two'></h1>"),
      one = document.querySelector("#one"),
      two = document.querySelector("#two"),
      selection = d3.selectAll([one, two]).on("click", function() { ++clicks; });
  test.equal(selection.on("click", null), selection);
  test.equal(selection.on("click"), undefined);
  selection.dispatch("click");
  test.equal(clicks, 0);
  test.end();
});

tape("selection.on(type, null) observes the specified name, if any", function(test) {
  var foo = 0,
      bar = 0,
      fooed = function() { ++foo; },
      barred = function() { ++bar; },
      document = jsdom.jsdom("<h1 id='one'></h1><h1 id='two'></h1>"),
      one = document.querySelector("#one"),
      two = document.querySelector("#two"),
      selection = d3.selectAll([one, two]).on("click.foo", fooed).on("click.bar", barred);
  test.equal(selection.on("click.foo", null), selection);
  test.equal(selection.on("click.foo"), undefined);
  test.equal(selection.on("click.bar"), barred);
  selection.dispatch("click");
  test.equal(foo, 0);
  test.equal(bar, 2);
  test.end();
});

tape("selection.on(type, null, capture) ignores the specified capture flag, if any", function(test) {
  var clicks = 0,
      clicked = function() { ++clicks; },
      document = jsdom.jsdom(),
      selection = d3.select(document).on("click.foo", clicked, true);
  selection.dispatch("click");
  test.equal(clicks, 1);
  selection.on(".foo", null, false).dispatch("click");
  test.equal(clicks, 1);
  test.equal(selection.on("click.foo"), undefined);
  test.end();
});

tape("selection.on(name, null) removes all listeners with the specified name", function(test) {
  var clicks = 0,
      loads = 0,
      clicked = function() { ++clicks; },
      loaded = function() { ++loads; },
      document = jsdom.jsdom("<h1 id='one'></h1><h1 id='two'></h1>"),
      one = document.querySelector("#one"),
      two = document.querySelector("#two"),
      selection = d3.selectAll([one, two]).on("click.foo", clicked).on("load.foo", loaded);
  test.equal(selection.on("click.foo"), clicked);
  test.equal(selection.on("load.foo"), loaded);
  selection.dispatch("click");
  selection.dispatch("load");
  test.equal(clicks, 2);
  test.equal(loads, 2);
  test.equal(selection.on(".foo", null), selection);
  test.equal(selection.on("click.foo"), undefined);
  test.equal(selection.on("load.foo"), undefined);
  selection.dispatch("click");
  selection.dispatch("load");
  test.equal(clicks, 2);
  test.equal(loads, 2);
  test.end();
});

tape("selection.on(name, null) can remove a listener with capture", function(test) {
  var clicks = 0,
      clicked = function() { ++clicks; },
      document = jsdom.jsdom(),
      selection = d3.select(document).on("click.foo", clicked, true);
  selection.dispatch("click");
  test.equal(clicks, 1);
  selection.on(".foo", null).dispatch("click");
  test.equal(clicks, 1);
  test.equal(selection.on("click.foo"), undefined);
  test.end();
});

tape("selection.on(name, listener) has no effect", function(test) {
  var clicks = 0,
      clicked = function() { ++clicks; },
      document = jsdom.jsdom("<h1 id='one'></h1><h1 id='two'></h1>"),
      one = document.querySelector("#one"),
      two = document.querySelector("#two"),
      selection = d3.selectAll([one, two]).on("click.foo", clicked);
  test.equal(selection.on(".foo", function() { throw new Error; }), selection);
  test.equal(selection.on("click.foo"), clicked);
  selection.dispatch("click");
  test.equal(clicks, 2);
  test.end();
});

tape("selection.on(type) skips missing elements", function(test) {
  var clicked = function() {},
      document = jsdom.jsdom("<h1 id='one'></h1><h1 id='two'></h1>"),
      one = document.querySelector("#one"),
      two = document.querySelector("#two"),
      selection = d3.selectAll([one, two]).on("click.foo", clicked);
  test.equal(d3.selectAll([, two]).on("click.foo"), clicked);
  test.end();
});

tape("selection.on(type, listener) skips missing elements", function(test) {
  var clicks = 0,
      clicked = function() { ++clicks; },
      document = jsdom.jsdom("<h1 id='one'></h1><h1 id='two'></h1>"),
      one = document.querySelector("#one"),
      two = document.querySelector("#two"),
      selection = d3.selectAll([, two]).on("click.foo", clicked);
  selection.dispatch("click");
  test.equal(clicks, 1);
  test.end();
});

tape("selection.on(type, listener) passes the listener data, index and group", function(test) {
  var document = jsdom.jsdom("<parent id='one'><child id='three'></child><child id='four'></child></parent><parent id='two'><child id='five'></child></parent>"),
      one = document.querySelector("#one"),
      two = document.querySelector("#two"),
      three = document.querySelector("#three"),
      four = document.querySelector("#four"),
      five = document.querySelector("#five"),
      results = [];

  var selection = d3.selectAll([one, two])
      .datum(function(d, i) { return "parent-" + i; })
    .selectAll("child")
      .data(function(d, i) { return [0, 1].map(function(j) { return "child-" + i + "-" + j; }); })
      .on("foo", function(d, i, nodes) { results.push([this, d, i, nodes]); });

  test.deepEqual(results, []);
  selection.dispatch("foo");
  test.deepEqual(results, [
    [three, "child-0-0", 0, [three, four]],
    [four, "child-0-1", 1, [three, four]],
    [five, "child-1-0", 0, [five, ]]
  ]);
  test.end();
});

tape("selection.on(type, listener) passes the listener the index as of registration time", function(test) {
  var result,
      document = jsdom.jsdom("<parent id='one'></parent>"),
      one = document.querySelector("#one"),
      selection = d3.selectAll([, one]).on("click", function(d, i) { result = i; });
  selection.dispatch("click");
  test.deepEqual(selection, {_groups: [[, one]], _parents: [null]});
  test.equal(result, 1);
  selection = selection.sort().dispatch("click");
  test.deepEqual(selection, {_groups: [[one, ]], _parents: [null]});
  test.equal(result, 1);
  test.end();
});
