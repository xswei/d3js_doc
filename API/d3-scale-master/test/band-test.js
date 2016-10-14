var tape = require("tape"),
    scale = require("../");

tape("scaleBand() has the expected defaults", function(test) {
  var s = scale.scaleBand();
  test.deepEqual(s.domain(), []);
  test.deepEqual(s.range(), [0, 1]);
  test.equal(s.bandwidth(), 1);
  test.equal(s.step(), 1);
  test.equal(s.round(), false);
  test.equal(s.paddingInner(), 0);
  test.equal(s.paddingOuter(), 0);
  test.equal(s.align(), 0.5);
  test.end();
});

tape("band(value) computes discrete bands in a continuous range", function(test) {
  var s = scale.scaleBand().range([0, 960]);
  test.equal(s("foo"), undefined);
  s.domain(["foo", "bar"]);
  test.equal(s("foo"), 0);
  test.equal(s("bar"), 480);
  s.domain(["a", "b", "c"]).range([0, 120]);
  test.deepEqual(s.domain().map(s), [0, 40, 80]);
  test.equal(s.bandwidth(), 40);
  s.padding(0.2);
  test.deepEqual(s.domain().map(s), [7.5, 45, 82.5]);
  test.equal(s.bandwidth(), 30);
  test.end();
});

tape("band(value) returns undefined for values outside the domain", function(test) {
  var s = scale.scaleBand().domain(["a", "b", "c"]);
  test.equal(s("d"), undefined);
  test.equal(s("e"), undefined);
  test.equal(s("f"), undefined);
  test.end();
});

tape("band(value) does not implicitly add values to the domain", function(test) {
  var s = scale.scaleBand().domain(["a", "b", "c"]);
  s("d");
  s("e");
  test.deepEqual(s.domain(), ["a", "b", "c"]);
  test.end();
});

tape("band.step() returns the distance between the starts of adjacent bands", function(test) {
  var s = scale.scaleBand().range([0, 960]);
  test.equal(s.domain(["foo"]).step(), 960);
  test.equal(s.domain(["foo", "bar"]).step(), 480);
  test.equal(s.domain(["foo", "bar", "baz"]).step(), 320);
  s.padding(0.5);
  test.equal(s.domain(["foo"]).step(), 640);
  test.equal(s.domain(["foo", "bar"]).step(), 384);
  test.end();
});

tape("band.bandwidth() returns the width of the band", function(test) {
  var s = scale.scaleBand().range([0, 960]);
  test.equal(s.domain([]).bandwidth(), 960);
  test.equal(s.domain(["foo"]).bandwidth(), 960);
  test.equal(s.domain(["foo", "bar"]).bandwidth(), 480);
  test.equal(s.domain(["foo", "bar", "baz"]).bandwidth(), 320);
  s.padding(0.5);
  test.equal(s.domain([]).bandwidth(), 480);
  test.equal(s.domain(["foo"]).bandwidth(), 320);
  test.equal(s.domain(["foo", "bar"]).bandwidth(), 192);
  test.end();
});

tape("band.domain([]) computes reasonable band and step values", function(test) {
  var s = scale.scaleBand().domain([]).range([0, 960]);
  test.equal(s.step(), 960);
  test.equal(s.bandwidth(), 960);
  s.padding(0.5);
  test.equal(s.step(), 960);
  test.equal(s.bandwidth(), 480);
  s.padding(1);
  test.equal(s.step(), 960);
  test.equal(s.bandwidth(), 0);
  test.end();
});

tape("band.domain([value]) computes a reasonable singleton band, even with padding", function(test) {
  var s = scale.scaleBand().domain(["foo"]).range([0, 960]);
  test.equal(s("foo"), 0);
  test.equal(s.step(), 960);
  test.equal(s.bandwidth(), 960);
  s.padding(0.5);
  test.equal(s("foo"), 320);
  test.equal(s.step(), 640);
  test.equal(s.bandwidth(), 320);
  s.padding(1);
  test.equal(s("foo"), 480);
  test.equal(s.step(), 480);
  test.equal(s.bandwidth(), 0);
  test.end();
});

tape("band.domain(values) recomputes the bands", function(test) {
  var s = scale.scaleBand().domain(["a", "b", "c"]).rangeRound([0, 100]);
  test.deepEqual(s.domain().map(s), [1, 34, 67]);
  test.equal(s.bandwidth(), 33);
  s.domain(["a", "b", "c", "d"]);
  test.deepEqual(s.domain().map(s), [0, 25, 50, 75]);
  test.equal(s.bandwidth(), 25);
  test.end();
});

tape("band.domain(values) makes a copy of the specified domain values", function(test) {
  var domain = ["red", "green"],
      s = scale.scaleBand().domain(domain);
  domain.push("blue");
  test.deepEqual(s.domain(), ["red", "green"]);
  test.end();
});

tape("band.domain() returns a copy of the domain", function(test) {
  var s = scale.scaleBand().domain(["red", "green"]),
      domain = s.domain();
  test.deepEqual(domain, ["red", "green"]);
  domain.push("blue");
  test.deepEqual(s.domain(), ["red", "green"]);
  test.end();
});

tape("band.range(values) can be descending", function(test) {
  var s = scale.scaleBand().domain(["a", "b", "c"]).range([120, 0]);
  test.deepEqual(s.domain().map(s), [80, 40, 0]);
  test.equal(s.bandwidth(), 40);
  s.padding(0.2);
  test.deepEqual(s.domain().map(s), [82.5, 45, 7.5]);
  test.equal(s.bandwidth(), 30);
  test.end();
});

tape("band.range(values) makes a copy of the specified range values", function(test) {
  var range = [1, 2],
      s = scale.scaleBand().range(range);
  range.push("blue");
  test.deepEqual(s.range(), [1, 2]);
  test.end();
});

tape("band.range() returns a copy of the range", function(test) {
  var s = scale.scaleBand().range([1, 2]),
      range = s.range();
  test.deepEqual(range, [1, 2]);
  range.push("blue");
  test.deepEqual(s.range(), [1, 2]);
  test.end();
});

tape("band.range(values) coerces values[0] and values[1] to numbers", function(test) {
  var s = scale.scaleBand().range({0: "1.0", 1: "2.0", length: 2});
  test.deepEqual(s.range(), [1, 2]);
  test.end();
});

tape("band.paddingInner(p) specifies the inner padding p", function(test) {
  var s = scale.scaleBand().domain(["a", "b", "c"]).range([120, 0]).paddingInner(0.1).round(true);
  test.deepEqual(s.domain().map(s), [83, 42, 1]);
  test.equal(s.bandwidth(), 37);
  s.paddingInner(0.2);
  test.deepEqual(s.domain().map(s), [85, 43, 1]);
  test.equal(s.bandwidth(), 34);
  test.end();
});

tape("band.paddingInner(p) coerces p to a number in [0, 1]", function(test) {
  var s = scale.scaleBand();
  test.equal(s.paddingInner("1.0").paddingInner(), 1);
  test.equal(s.paddingInner("-1.0").paddingInner(), 0);
  test.equal(s.paddingInner("2.0").paddingInner(), 1);
  test.ok(Number.isNaN(s.paddingInner(NaN).paddingInner()));
  test.end();
});

tape("band.paddingOuter(p) specifies the outer padding p", function(test) {
  var s = scale.scaleBand().domain(["a", "b", "c"]).range([120, 0]).paddingInner(0.2).paddingOuter(0.1);
  test.deepEqual(s.domain().map(s), [84, 44, 4]);
  test.equal(s.bandwidth(), 32);
  s.paddingOuter(1);
  test.deepEqual(s.domain().map(s), [75, 50, 25]);
  test.equal(s.bandwidth(), 20);
  test.end();
});

tape("band.paddingOuter(p) coerces p to a number in [0, 1]", function(test) {
  var s = scale.scaleBand();
  test.equal(s.paddingOuter("1.0").paddingOuter(), 1);
  test.equal(s.paddingOuter("-1.0").paddingOuter(), 0);
  test.equal(s.paddingOuter("2.0").paddingOuter(), 1);
  test.ok(Number.isNaN(s.paddingOuter(NaN).paddingOuter()));
  test.end();
});

tape("band.rangeRound(values) is an alias for band.range(values).round(true)", function(test) {
  var s = scale.scaleBand().domain(["a", "b", "c"]).rangeRound([0, 100]);
  test.deepEqual(s.range(), [0, 100]);
  test.equal(s.round(), true);
  test.end();
});

tape("band.round(true) computes discrete rounded bands in a continuous range", function(test) {
  var s = scale.scaleBand().domain(["a", "b", "c"]).range([0, 100]).round(true);
  test.deepEqual(s.domain().map(s), [1, 34, 67]);
  test.equal(s.bandwidth(), 33);
  s.padding(0.2);
  test.deepEqual(s.domain().map(s), [7, 38, 69]);
  test.equal(s.bandwidth(), 25);
  test.end();
});

tape("band.copy() copies all fields", function(test) {
  var s1 = scale.scaleBand().domain(["red", "green"]).range([1, 2]).round(true).paddingInner(0.1).paddingOuter(0.2),
      s2 = s1.copy();
  test.deepEqual(s2.domain(), s1.domain());
  test.deepEqual(s2.range(), s1.range());
  test.equal(s2.round(), s1.round());
  test.equal(s2.paddingInner(), s1.paddingInner());
  test.equal(s2.paddingOuter(), s1.paddingOuter());
  test.end();
});

tape("band.copy() isolates changes to the domain", function(test) {
  var s1 = scale.scaleBand().domain(["foo", "bar"]).range([0, 2]),
      s2 = s1.copy();
  s1.domain(["red", "blue"]);
  test.deepEqual(s2.domain(), ["foo", "bar"]);
  test.deepEqual(s1.domain().map(s1), [0, 1]);
  test.deepEqual(s2.domain().map(s2), [0, 1]);
  s2.domain(["red", "blue"]);
  test.deepEqual(s1.domain(), ["red", "blue"]);
  test.deepEqual(s1.domain().map(s1), [0, 1]);
  test.deepEqual(s2.domain().map(s2), [0, 1]);
  test.end();
});

tape("band.copy() isolates changes to the range", function(test) {
  var s1 = scale.scaleBand().domain(["foo", "bar"]).range([0, 2]),
      s2 = s1.copy();
  s1.range([3, 5]);
  test.deepEqual(s2.range(), [0, 2]);
  test.deepEqual(s1.domain().map(s1), [3, 4]);
  test.deepEqual(s2.domain().map(s2), [0, 1]);
  s2.range([5, 7]);
  test.deepEqual(s1.range(), [3, 5]);
  test.deepEqual(s1.domain().map(s1), [3, 4]);
  test.deepEqual(s2.domain().map(s2), [5, 6]);
  test.end();
});

// TODO align tests for padding & round
