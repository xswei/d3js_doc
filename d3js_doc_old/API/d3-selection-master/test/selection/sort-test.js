var tape = require("tape"),
    jsdom = require("jsdom"),
    d3 = require("../../");

tape("selection.sort(…) returns a new selection, sorting each group’s data, and then ordering the elements to match", function(test) {
  var document = jsdom.jsdom("<h1 id='one' data-value='1'></h1><h1 id='two' data-value='0'></h1><h1 id='three' data-value='2'></h1>"),
      one = document.querySelector("#one"),
      two = document.querySelector("#two"),
      three = document.querySelector("#three"),
      selection0 = d3.selectAll([two, three, one]).datum(function() { return +this.getAttribute("data-value"); }),
      selection1 = selection0.sort(function(a, b) { return a - b; });
  test.deepEqual(selection0, {_groups: [[two, three, one]], _parents: [null]});
  test.deepEqual(selection1, {_groups: [[two, one, three]], _parents: [null]});
  test.equal(two.nextSibling, one);
  test.equal(one.nextSibling, three);
  test.equal(three.nextSibling, null);
  test.end();
});

tape("selection.sort(…) sorts each group separately", function(test) {
  var document = jsdom.jsdom("<div id='one'><h1 id='three' data-value='1'></h1><h1 id='four' data-value='0'></h1></div><div id='two'><h1 id='five' data-value='3'></h1><h1 id='six' data-value='-1'></h1></div>"),
      one = document.querySelector("#one"),
      two = document.querySelector("#two"),
      three = document.querySelector("#three"),
      four = document.querySelector("#four"),
      five = document.querySelector("#five"),
      six = document.querySelector("#six"),
      selection = d3.selectAll([one, two]).selectAll("h1").datum(function() { return +this.getAttribute("data-value"); });
  test.deepEqual(selection.sort(function(a, b) { return a - b; }), {_groups: [[four, three], [six, five]], _parents: [one, two]});
  test.equal(four.nextSibling, three);
  test.equal(three.nextSibling, null);
  test.equal(six.nextSibling, five);
  test.equal(five.nextSibling, null);
  test.end();
});

tape("selection.sort() uses natural ascending order", function(test) {
  var document = jsdom.jsdom("<h1 id='one'></h1><h1 id='two'></h1>"),
      one = document.querySelector("#one"),
      two = document.querySelector("#two"),
      selection = d3.selectAll([two, one]).datum(function(d, i) { i; });
  test.deepEqual(selection.sort(), {_groups: [[two, one]], _parents: [null]});
  test.equal(one.nextSibling, null);
  test.equal(two.nextSibling, one);
  test.end();
});

tape("selection.sort() puts missing elements at the end of each group", function(test) {
  var document = jsdom.jsdom("<h1 id='one'></h1><h1 id='two'></h1>"),
      one = document.querySelector("#one"),
      two = document.querySelector("#two"),
      selection = d3.selectAll([two, one]).datum(function(d, i) { return i; });
  test.deepEqual(d3.selectAll([, one,, two]).sort(), {_groups: [[two, one,,]], _parents: [null]});
  test.equal(two.nextSibling, one);
  test.equal(one.nextSibling, null);
  test.end();
});

tape("selection.sort(function) puts missing elements at the end of each group", function(test) {
  var document = jsdom.jsdom("<h1 id='one'></h1><h1 id='two'></h1>"),
      one = document.querySelector("#one"),
      two = document.querySelector("#two"),
      selection = d3.selectAll([two, one]).datum(function(d, i) { return i; });
  test.deepEqual(d3.selectAll([, one,, two]).sort(function(a, b) { return b - a; }), {_groups: [[one, two,,]], _parents: [null]});
  test.equal(one.nextSibling, two);
  test.equal(two.nextSibling, null);
  test.end();
});

tape("selection.sort(function) uses the specified data comparator function", function(test) {
  var document = jsdom.jsdom("<h1 id='one'></h1><h1 id='two'></h1>"),
      one = document.querySelector("#one"),
      two = document.querySelector("#two"),
      selection = d3.selectAll([two, one]).datum(function(d, i) { return i; });
  test.deepEqual(selection.sort(function(a, b) { return b - a; }), {_groups: [[one, two]], _parents: [null]});
  test.equal(one.nextSibling, two);
  test.equal(two.nextSibling, null);
  test.end();
});

tape("selection.sort(function) returns a new selection, and does not modify the groups array in-place", function(test) {
  var document = jsdom.jsdom("<h1 id='one'></h1><h1 id='two'></h1>"),
      one = document.querySelector("#one"),
      two = document.querySelector("#two"),
      selection0 = d3.selectAll([one, two]).datum(function(d, i) { return i; }),
      selection1 = selection0.sort(function(a, b) { return b - a; }),
      selection2 = selection1.sort();
  test.deepEqual(selection0, {_groups: [[one, two]], _parents: [null]});
  test.deepEqual(selection1, {_groups: [[two, one]], _parents: [null]});
  test.deepEqual(selection2, {_groups: [[one, two]], _parents: [null]});
  test.end();
});
