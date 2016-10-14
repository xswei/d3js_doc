var tape = require("tape"),
    scale = require("../"),
    roundEpsilon = require("./roundEpsilon");

require("./inDelta");

tape("scalePow() has the expected defaults", function(test) {
  var s = scale.scalePow();
  test.deepEqual(s.domain(), [0, 1]);
  test.deepEqual(s.range(), [0, 1]);
  test.equal(s.clamp(), false);
  test.equal(s.exponent(), 1);
  test.deepEqual(s.interpolate()({array: ["red"]}, {array: ["blue"]})(0.5), {array: ["rgb(128, 0, 128)"]});
  test.end();
});

tape("pow(x) maps a domain value x to a range value y", function(test) {
  test.equal(scale.scalePow().exponent(0.5)(0.5), Math.SQRT1_2);
  test.end();
});

tape("pow(x) ignores extra range values if the domain is smaller than the range", function(test) {
  test.equal(scale.scalePow().domain([-10, 0]).range(["red", "white", "green"]).clamp(true)(-5), "rgb(255, 128, 128)");
  test.equal(scale.scalePow().domain([-10, 0]).range(["red", "white", "green"]).clamp(true)(50), "rgb(255, 255, 255)");
  test.end();
});

tape("pow(x) ignores extra domain values if the range is smaller than the domain", function(test) {
  test.equal(scale.scalePow().domain([-10, 0, 100]).range(["red", "white"]).clamp(true)(-5), "rgb(255, 128, 128)");
  test.equal(scale.scalePow().domain([-10, 0, 100]).range(["red", "white"]).clamp(true)(50), "rgb(255, 255, 255)");
  test.end();
});

tape("pow(x) maps an empty domain to the range start", function(test) {
  test.equal(scale.scalePow().domain([0, 0]).range([1, 2])(0), 1);
  test.equal(scale.scalePow().domain([0, 0]).range([2, 1])(1), 2);
  test.end();
});

tape("pow(x) can map a bipow domain with two values to the corresponding range", function(test) {
  var s = scale.scalePow().domain([1, 2]);
  test.deepEqual(s.domain(), [1, 2]);
  test.equal(s(0.5), -0.5);
  test.equal(s(1.0),  0.0);
  test.equal(s(1.5),  0.5);
  test.equal(s(2.0),  1.0);
  test.equal(s(2.5),  1.5);
  test.equal(s.invert(-0.5), 0.5);
  test.equal(s.invert( 0.0), 1.0);
  test.equal(s.invert( 0.5), 1.5);
  test.equal(s.invert( 1.0), 2.0);
  test.equal(s.invert( 1.5), 2.5);
  test.end();
});

tape("pow(x) can map a polypow domain with more than two values to the corresponding range", function(test) {
  var s = scale.scalePow().domain([-10, 0, 100]).range(["red", "white", "green"]);
  test.deepEqual(s.domain(), [-10, 0, 100]);
  test.equal(s(-5), "rgb(255, 128, 128)");
  test.equal(s(50), "rgb(128, 192, 128)");
  test.equal(s(75), "rgb(64, 160, 64)");
  s.domain([4, 2, 1]).range([1, 2, 4]);
  test.equal(s(1.5), 3);
  test.equal(s(3), 1.5);
  test.equal(s.invert(1.5), 3);
  test.equal(s.invert(3), 1.5);
  s.domain([1, 2, 4]).range([4, 2, 1]);
  test.equal(s(1.5), 3);
  test.equal(s(3), 1.5);
  test.equal(s.invert(1.5), 3);
  test.equal(s.invert(3), 1.5);
  test.end();
});

tape("pow.invert(y) maps a range value y to a domain value x", function(test) {
  test.equal(scale.scalePow().range([1, 2]).invert(1.5), 0.5);
  test.end();
});

tape("pow.invert(y) maps an empty range to the domain start", function(test) {
  test.equal(scale.scalePow().domain([1, 2]).range([0, 0]).invert(0), 1);
  test.equal(scale.scalePow().domain([2, 1]).range([0, 0]).invert(1), 2);
  test.end();
});

tape("pow.invert(y) coerces range values to numbers", function(test) {
  test.equal(scale.scalePow().range(["0", "2"]).invert("1"), 0.5);
  test.equal(scale.scalePow().range([new Date(1990, 0, 1), new Date(1991, 0, 1)]).invert(new Date(1990, 6, 2, 13)), 0.5);
  test.end();
});

tape("pow.invert(y) returns NaN if the range is not coercible to number", function(test) {
  test.ok(isNaN(scale.scalePow().range(["#000", "#fff"]).invert("#999")));
  test.ok(isNaN(scale.scalePow().range([0, "#fff"]).invert("#999")));
  test.end();
});

tape("pow.exponent(exponent) sets the exponent to the specified value", function(test) {
  var x = scale.scalePow().exponent(0.5).domain([1, 2]);
  test.inDelta(x(1), 0, 1e-6);
  test.inDelta(x(1.5), 0.5425821, 1e-6);
  test.inDelta(x(2), 1, 1e-6);
  test.equal(x.exponent(), 0.5);
  x.exponent(2).domain([1, 2]);
  test.inDelta(x(1), 0, 1e-6);
  test.inDelta(x(1.5), 0.41666667, 1e-6);
  test.inDelta(x(2), 1, 1e-6);
  test.equal(x.exponent(), 2);
  x.exponent(-1).domain([1, 2]);
  test.inDelta(x(1), 0, 1e-6);
  test.inDelta(x(1.5), 0.6666667, 1e-6);
  test.inDelta(x(2), 1, 1e-6);
  test.equal(x.exponent(), -1);
  test.end();
});

tape("pow.exponent(exponent) changing the exponent does not change the domain or range", function(test) {
  var x = scale.scalePow().domain([1, 2]).range([3, 4]);
  x.exponent(0.5);
  test.deepEqual(x.domain(), [1, 2]);
  test.deepEqual(x.range(), [3, 4]);
  x.exponent(2);
  test.deepEqual(x.domain(), [1, 2]);
  test.deepEqual(x.range(), [3, 4]);
  x.exponent(-1);
  test.deepEqual(x.domain(), [1, 2]);
  test.deepEqual(x.range(), [3, 4]);
  test.end();
});

tape("pow.domain(domain) accepts an array of numbers", function(test) {
  test.deepEqual(scale.scalePow().domain([]).domain(), []);
  test.deepEqual(scale.scalePow().domain([1, 0]).domain(), [1, 0]);
  test.deepEqual(scale.scalePow().domain([1, 2, 3]).domain(), [1, 2, 3]);
  test.end();
});

tape("pow.domain(domain) coerces domain values to numbers", function(test) {
  test.deepEqual(scale.scalePow().domain([new Date(1990, 0, 1), new Date(1991, 0, 1)]).domain(), [631180800000, 662716800000]);
  test.deepEqual(scale.scalePow().domain(["0.0", "1.0"]).domain(), [0, 1]);
  test.deepEqual(scale.scalePow().domain([new Number(0), new Number(1)]).domain(), [0, 1]);
  test.end();
});

tape("pow.domain(domain) makes a copy of domain values", function(test) {
  var d = [1, 2], s = scale.scalePow().domain(d);
  test.deepEqual(s.domain(), [1, 2]);
  d.push(3);
  test.deepEqual(s.domain(), [1, 2]);
  test.deepEqual(d, [1, 2, 3]);
  test.end();
});

tape("pow.domain() returns a copy of domain values", function(test) {
  var s = scale.scalePow(), d = s.domain();
  test.deepEqual(d, [0, 1]);
  d.push(3);
  test.deepEqual(s.domain(), [0, 1]);
  test.end();
});

tape("pow.range(range) does not coerce range to numbers", function(test) {
  var s = scale.scalePow().range(["0px", "2px"]);
  test.deepEqual(s.range(), ["0px", "2px"]);
  test.equal(s(0.5), "1px");
  test.end();
});

tape("pow.range(range) can accept range values as colors", function(test) {
  test.equal(scale.scalePow().range(["red", "blue"])(0.5), "rgb(128, 0, 128)");
  test.equal(scale.scalePow().range(["#ff0000", "#0000ff"])(0.5), "rgb(128, 0, 128)");
  test.equal(scale.scalePow().range(["#f00", "#00f"])(0.5), "rgb(128, 0, 128)");
  test.equal(scale.scalePow().range(["rgb(255,0,0)", "hsl(240,100%,50%)"])(0.5), "rgb(128, 0, 128)");
  test.equal(scale.scalePow().range(["rgb(100%,0%,0%)", "hsl(240,100%,50%)"])(0.5), "rgb(128, 0, 128)");
  test.equal(scale.scalePow().range(["hsl(0,100%,50%)", "hsl(240,100%,50%)"])(0.5), "rgb(128, 0, 128)");
  test.end();
});

tape("pow.range(range) can accept range values as arrays or objects", function(test) {
  test.deepEqual(scale.scalePow().range([{color: "red"}, {color: "blue"}])(0.5), {color: "rgb(128, 0, 128)"});
  test.deepEqual(scale.scalePow().range([["red"], ["blue"]])(0.5), ["rgb(128, 0, 128)"]);
  test.end();
});

tape("pow.range(range) makes a copy of range values", function(test) {
  var r = [1, 2], s = scale.scalePow().range(r);
  test.deepEqual(s.range(), [1, 2]);
  r.push(3);
  test.deepEqual(s.range(), [1, 2]);
  test.deepEqual(r, [1, 2, 3]);
  test.end();
});

tape("pow.range() returns a copy of range values", function(test) {
  var s = scale.scalePow(), r = s.range();
  test.deepEqual(r, [0, 1]);
  r.push(3);
  test.deepEqual(s.range(), [0, 1]);
  test.end();
});

tape("pow.rangeRound(range) is an alias for pow.range(range).interpolate(interpolateRound)", function(test) {
  test.equal(scale.scalePow().rangeRound([0, 10])(0.59), 6);
  test.end();
});

tape("pow.clamp() is false by default", function(test) {
  test.equal(scale.scalePow().clamp(), false);
  test.equal(scale.scalePow().range([10, 20])(2), 30);
  test.equal(scale.scalePow().range([10, 20])(-1), 0);
  test.equal(scale.scalePow().range([10, 20]).invert(30), 2);
  test.equal(scale.scalePow().range([10, 20]).invert(0), -1);
  test.end();
});

tape("pow.clamp(true) restricts output values to the range", function(test) {
  test.equal(scale.scalePow().clamp(true).range([10, 20])(2), 20);
  test.equal(scale.scalePow().clamp(true).range([10, 20])(-1), 10);
  test.end();
});

tape("pow.clamp(true) restricts input values to the domain", function(test) {
  test.equal(scale.scalePow().clamp(true).range([10, 20]).invert(30), 1);
  test.equal(scale.scalePow().clamp(true).range([10, 20]).invert(0), 0);
  test.end();
});

tape("pow.clamp(clamp) coerces the specified clamp value to a boolean", function(test) {
  test.equal(scale.scalePow().clamp("true").clamp(), true);
  test.equal(scale.scalePow().clamp(1).clamp(), true);
  test.equal(scale.scalePow().clamp("").clamp(), false);
  test.equal(scale.scalePow().clamp(0).clamp(), false);
  test.end();
});

tape("pow.interpolate(interpolate) takes a custom interpolator factory", function(test) {
  function interpolate(a, b) { return function(t) { return [a, b, t]; }; }
  var s = scale.scalePow().domain([10, 20]).range(["a", "b"]).interpolate(interpolate);
  test.equal(s.interpolate(), interpolate);
  test.deepEqual(s(15), ["a", "b", 0.5]);
  test.end();
});

tape("pow.nice() is an alias for pow.nice(10)", function(test) {
  test.deepEqual(scale.scalePow().domain([0, 0.96]).nice().domain(), [0, 1]);
  test.deepEqual(scale.scalePow().domain([0, 96]).nice().domain(), [0, 100]);
  test.end();
});

tape("pow.nice(count) extends the domain to match the desired ticks", function(test) {
  test.deepEqual(scale.scalePow().domain([0, 0.96]).nice(10).domain(), [0, 1]);
  test.deepEqual(scale.scalePow().domain([0, 96]).nice(10).domain(), [0, 100]);
  test.deepEqual(scale.scalePow().domain([0.96, 0]).nice(10).domain(), [1, 0]);
  test.deepEqual(scale.scalePow().domain([96, 0]).nice(10).domain(), [100, 0]);
  test.deepEqual(scale.scalePow().domain([0, -0.96]).nice(10).domain(), [0, -1]);
  test.deepEqual(scale.scalePow().domain([0, -96]).nice(10).domain(), [0, -100]);
  test.deepEqual(scale.scalePow().domain([-0.96, 0]).nice(10).domain(), [-1, 0]);
  test.deepEqual(scale.scalePow().domain([-96, 0]).nice(10).domain(), [-100, 0]);
  test.end();
});

tape("pow.nice(count) nices the domain, extending it to round numbers", function(test) {
  test.deepEqual(scale.scalePow().domain([1.1, 10.9]).nice(10).domain(), [1, 11]);
  test.deepEqual(scale.scalePow().domain([10.9, 1.1]).nice(10).domain(), [11, 1]);
  test.deepEqual(scale.scalePow().domain([0.7, 11.001]).nice(10).domain(), [0, 12]);
  test.deepEqual(scale.scalePow().domain([123.1, 6.7]).nice(10).domain(), [130, 0]);
  test.deepEqual(scale.scalePow().domain([0, 0.49]).nice(10).domain(), [0, 0.5]);
  test.end();
});

tape("pow.nice(count) has no effect on degenerate domains", function(test) {
  test.deepEqual(scale.scalePow().domain([0, 0]).nice(10).domain(), [0, 0]);
  test.deepEqual(scale.scalePow().domain([0.5, 0.5]).nice(10).domain(), [0.5, 0.5]);
  test.end();
});

tape("pow.nice(count) nicing a polypow domain only affects the extent", function(test) {
  test.deepEqual(scale.scalePow().domain([1.1, 1, 2, 3, 10.9]).nice(10).domain(), [1, 1, 2, 3, 11]);
  test.deepEqual(scale.scalePow().domain([123.1, 1, 2, 3, -0.9]).nice(10).domain(), [130, 1, 2, 3, -10]);
  test.end();
});

tape("pow.nice(count) accepts a tick count to control nicing step", function(test) {
  test.deepEqual(scale.scalePow().domain([12, 87]).nice(5).domain(), [0, 100]);
  test.deepEqual(scale.scalePow().domain([12, 87]).nice(10).domain(), [10, 90]);
  test.deepEqual(scale.scalePow().domain([12, 87]).nice(100).domain(), [12, 87]);
  test.end();
});

tape("pow.ticks(count) returns the expected ticks for an ascending domain", function(test) {
  var s = scale.scalePow();
  test.deepEqual(s.ticks(10).map(roundEpsilon), [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]);
  test.deepEqual(s.ticks(9).map(roundEpsilon),  [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]);
  test.deepEqual(s.ticks(8).map(roundEpsilon),  [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]);
  test.deepEqual(s.ticks(7).map(roundEpsilon),  [0.0,      0.2,      0.4,      0.6,      0.8,      1.0]);
  test.deepEqual(s.ticks(6).map(roundEpsilon),  [0.0,      0.2,      0.4,      0.6,      0.8,      1.0]);
  test.deepEqual(s.ticks(5).map(roundEpsilon),  [0.0,      0.2,      0.4,      0.6,      0.8,      1.0]);
  test.deepEqual(s.ticks(4).map(roundEpsilon),  [0.0,      0.2,      0.4,      0.6,      0.8,      1.0]);
  test.deepEqual(s.ticks(3).map(roundEpsilon),  [0.0,                     0.5,                     1.0]);
  test.deepEqual(s.ticks(2).map(roundEpsilon),  [0.0,                     0.5,                     1.0]);
  test.deepEqual(s.ticks(1).map(roundEpsilon),  [0.0,                                              1.0]);
  s.domain([-100, 100]);
  test.deepEqual(s.ticks(10), [-100, -80, -60,      -40, -20, 0, 20, 40,     60, 80, 100]);
  test.deepEqual(s.ticks(9),  [-100, -80, -60,      -40, -20, 0, 20, 40,     60, 80, 100]);
  test.deepEqual(s.ticks(8),  [-100, -80, -60,      -40, -20, 0, 20, 40,     60, 80, 100]);
  test.deepEqual(s.ticks(7),  [-100, -80, -60,      -40, -20, 0, 20, 40,     60, 80, 100]);
  test.deepEqual(s.ticks(6),  [-100,           -50,           0,         50,         100]);
  test.deepEqual(s.ticks(5),  [-100,           -50,           0,         50,         100]);
  test.deepEqual(s.ticks(4),  [-100,           -50,           0,         50,         100]);
  test.deepEqual(s.ticks(3),  [-100,           -50,           0,         50,         100]);
  test.deepEqual(s.ticks(2),  [-100,                          0,                     100]);
  test.deepEqual(s.ticks(1),  [                               0                         ]);
  test.end();
});

tape("pow.ticks(count) returns the expected ticks for a descending domain", function(test) {
  var s = scale.scalePow().domain([1, 0]);
  test.deepEqual(s.ticks(10).map(roundEpsilon), [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0].reverse());
  test.deepEqual(s.ticks(9).map(roundEpsilon),  [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0].reverse());
  test.deepEqual(s.ticks(8).map(roundEpsilon),  [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0].reverse());
  test.deepEqual(s.ticks(7).map(roundEpsilon),  [0.0,      0.2,      0.4,      0.6,      0.8,      1.0].reverse());
  test.deepEqual(s.ticks(6).map(roundEpsilon),  [0.0,      0.2,      0.4,      0.6,      0.8,      1.0].reverse());
  test.deepEqual(s.ticks(5).map(roundEpsilon),  [0.0,      0.2,      0.4,      0.6,      0.8,      1.0].reverse());
  test.deepEqual(s.ticks(4).map(roundEpsilon),  [0.0,      0.2,      0.4,      0.6,      0.8,      1.0].reverse());
  test.deepEqual(s.ticks(3).map(roundEpsilon),  [0.0,                     0.5,                     1.0].reverse());
  test.deepEqual(s.ticks(2).map(roundEpsilon),  [0.0,                     0.5,                     1.0].reverse());
  test.deepEqual(s.ticks(1).map(roundEpsilon),  [0.0,                                              1.0].reverse());
  s.domain([100, -100]);
  test.deepEqual(s.ticks(10), [-100, -80, -60,      -40, -20, 0, 20, 40,     60, 80, 100].reverse());
  test.deepEqual(s.ticks(9),  [-100, -80, -60,      -40, -20, 0, 20, 40,     60, 80, 100].reverse());
  test.deepEqual(s.ticks(8),  [-100, -80, -60,      -40, -20, 0, 20, 40,     60, 80, 100].reverse());
  test.deepEqual(s.ticks(7),  [-100, -80, -60,      -40, -20, 0, 20, 40,     60, 80, 100].reverse());
  test.deepEqual(s.ticks(6),  [-100,           -50,           0,         50,         100].reverse());
  test.deepEqual(s.ticks(5),  [-100,           -50,           0,         50,         100].reverse());
  test.deepEqual(s.ticks(4),  [-100,           -50,           0,         50,         100].reverse());
  test.deepEqual(s.ticks(3),  [-100,           -50,           0,         50,         100].reverse());
  test.deepEqual(s.ticks(2),  [-100,                          0,                     100].reverse());
  test.deepEqual(s.ticks(1),  [                               0                         ].reverse());
  test.end();
});

tape("pow.ticks(count) returns the expected ticks for a polypow domain", function(test) {
  var s = scale.scalePow().domain([0, 0.25, 0.9, 1]);
  test.deepEqual(s.ticks(10).map(roundEpsilon), [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]);
  test.deepEqual(s.ticks(9).map(roundEpsilon),  [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]);
  test.deepEqual(s.ticks(8).map(roundEpsilon),  [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]);
  test.deepEqual(s.ticks(7).map(roundEpsilon),  [0.0,      0.2,      0.4,      0.6,      0.8,      1.0]);
  test.deepEqual(s.ticks(6).map(roundEpsilon),  [0.0,      0.2,      0.4,      0.6,      0.8,      1.0]);
  test.deepEqual(s.ticks(5).map(roundEpsilon),  [0.0,      0.2,      0.4,      0.6,      0.8,      1.0]);
  test.deepEqual(s.ticks(4).map(roundEpsilon),  [0.0,      0.2,      0.4,      0.6,      0.8,      1.0]);
  test.deepEqual(s.ticks(3).map(roundEpsilon),  [0.0,                     0.5,                     1.0]);
  test.deepEqual(s.ticks(2).map(roundEpsilon),  [0.0,                     0.5,                     1.0]);
  test.deepEqual(s.ticks(1).map(roundEpsilon),  [0.0,                                              1.0]);
  s.domain([-100, 0, 100]);
  test.deepEqual(s.ticks(10), [-100, -80, -60,      -40, -20, 0, 20, 40,     60, 80, 100]);
  test.deepEqual(s.ticks(9),  [-100, -80, -60,      -40, -20, 0, 20, 40,     60, 80, 100]);
  test.deepEqual(s.ticks(8),  [-100, -80, -60,      -40, -20, 0, 20, 40,     60, 80, 100]);
  test.deepEqual(s.ticks(7),  [-100, -80, -60,      -40, -20, 0, 20, 40,     60, 80, 100]);
  test.deepEqual(s.ticks(6),  [-100,           -50,           0,         50,         100]);
  test.deepEqual(s.ticks(5),  [-100,           -50,           0,         50,         100]);
  test.deepEqual(s.ticks(4),  [-100,           -50,           0,         50,         100]);
  test.deepEqual(s.ticks(3),  [-100,           -50,           0,         50,         100]);
  test.deepEqual(s.ticks(2),  [-100,                          0,                     100]);
  test.deepEqual(s.ticks(1),  [                               0                         ]);
  test.end();
});

tape("pow.ticks(count) returns the empty array if count is not a positive integer", function(test) {
  var s = scale.scalePow();
  test.deepEqual(s.ticks(NaN), []);
  test.deepEqual(s.ticks(0), []);
  test.deepEqual(s.ticks(-1), []);
  test.deepEqual(s.ticks(Infinity), []);
  test.end();
});

tape("pow.ticks() is an alias for pow.ticks(10)", function(test) {
  var s = scale.scalePow();
  test.deepEqual(s.ticks(), s.ticks(10));
  test.end();
});

tape("pow.tickFormat() is an alias for pow.tickFormat(10)", function(test) {
  test.equal(scale.scalePow().tickFormat()(0.2), "0.2");
  test.equal(scale.scalePow().domain([-100, 100]).tickFormat()(-20), "-20");
  test.end();
});

tape("pow.tickFormat(count) returns a format suitable for the ticks", function(test) {
  test.equal(scale.scalePow().tickFormat(10)(0.2), "0.2");
  test.equal(scale.scalePow().tickFormat(20)(0.2), "0.20");
  test.equal(scale.scalePow().domain([-100, 100]).tickFormat(10)(-20), "-20");
  test.end();
});

tape("pow.tickFormat(count, specifier) sets the appropriate fixed precision if not specified", function(test) {
  test.equal(scale.scalePow().tickFormat(10, "+f")(0.2), "+0.2");
  test.equal(scale.scalePow().tickFormat(20, "+f")(0.2), "+0.20");
  test.equal(scale.scalePow().tickFormat(10, "+%")(0.2), "+20%");
  test.equal(scale.scalePow().domain([0.19, 0.21]).tickFormat(10, "+%")(0.2), "+20.0%");
  test.end();
});

tape("pow.tickFormat(count, specifier) sets the appropriate round precision if not specified", function(test) {
  test.equal(scale.scalePow().domain([0, 9]).tickFormat(10, "")(2.10), "2");
  test.equal(scale.scalePow().domain([0, 9]).tickFormat(100, "")(2.01), "2");
  test.equal(scale.scalePow().domain([0, 9]).tickFormat(100, "")(2.11), "2.1");
  test.equal(scale.scalePow().domain([0, 9]).tickFormat(10, "e")(2.10), "2e+0");
  test.equal(scale.scalePow().domain([0, 9]).tickFormat(100, "e")(2.01), "2.0e+0");
  test.equal(scale.scalePow().domain([0, 9]).tickFormat(100, "e")(2.11), "2.1e+0");
  test.equal(scale.scalePow().domain([0, 9]).tickFormat(10, "g")(2.10), "2");
  test.equal(scale.scalePow().domain([0, 9]).tickFormat(100, "g")(2.01), "2.0");
  test.equal(scale.scalePow().domain([0, 9]).tickFormat(100, "g")(2.11), "2.1");
  test.equal(scale.scalePow().domain([0, 9]).tickFormat(10, "r")(2.10e6), "2000000");
  test.equal(scale.scalePow().domain([0, 9]).tickFormat(100, "r")(2.01e6), "2000000");
  test.equal(scale.scalePow().domain([0, 9]).tickFormat(100, "r")(2.11e6), "2100000");
  test.equal(scale.scalePow().domain([0, 0.9]).tickFormat(10, "p")(0.210), "20%");
  test.equal(scale.scalePow().domain([0.19, 0.21]).tickFormat(10, "p")(0.201), "20.1%");
  test.end();
});

tape("pow.tickFormat(count, specifier) sets the appropriate prefix precision if not specified", function(test) {
  test.equal(scale.scalePow().domain([0, 1e6]).tickFormat(10, "$s")(0.51e6), "$0.5M");
  test.equal(scale.scalePow().domain([0, 1e6]).tickFormat(100, "$s")(0.501e6), "$0.50M");
  test.end();
});

tape("pow.copy() returns a copy with changes to the domain are isolated", function(test) {
  var x = scale.scalePow(), y = x.copy();
  x.domain([1, 2]);
  test.deepEqual(y.domain(), [0, 1]);
  test.equal(x(1), 0);
  test.equal(y(1), 1);
  y.domain([2, 3]);
  test.equal(x(2), 1);
  test.equal(y(2), 0);
  test.deepEqual(x.domain(), [1, 2]);
  test.deepEqual(y.domain(), [2, 3]);
  y = x.domain([1, 1.9]).copy();
  x.nice(5);
  test.deepEqual(x.domain(), [1, 2]);
  test.deepEqual(y.domain(), [1, 1.9]);
  test.end();
});

tape("pow.copy() returns a copy with changes to the range are isolated", function(test) {
  var x = scale.scalePow(), y = x.copy();
  x.range([1, 2]);
  test.equal(x.invert(1), 0);
  test.equal(y.invert(1), 1);
  test.deepEqual(y.range(), [0, 1]);
  y.range([2, 3]);
  test.equal(x.invert(2), 1);
  test.equal(y.invert(2), 0);
  test.deepEqual(x.range(), [1, 2]);
  test.deepEqual(y.range(), [2, 3]);
  test.end();
});

tape("pow.copy() returns a copy with changes to the interpolator are isolated", function(test) {
  var x = scale.scalePow().range(["red", "blue"]),
      y = x.copy(),
      i0 = x.interpolate(),
      i1 = function(a, b) { return function() { return b; }; };
  x.interpolate(i1);
  test.equal(y.interpolate(), i0);
  test.equal(x(0.5), "blue");
  test.equal(y(0.5), "rgb(128, 0, 128)");
  test.end();
});

tape("pow.copy() returns a copy with changes to clamping are isolated", function(test) {
  var x = scale.scalePow().clamp(true), y = x.copy();
  x.clamp(false);
  test.equal(x(2), 2);
  test.equal(y(2), 1);
  test.equal(y.clamp(), true);
  y.clamp(false);
  test.equal(x(2), 2);
  test.equal(y(2), 2);
  test.equal(x.clamp(), false);
  test.end();
});

tape("pow().clamp(true).invert(x) cannot return a value outside the domain", function(test) {
  var x = scale.scalePow().exponent(0.5).domain([1, 20]).clamp(true);
  test.equal(x.invert(0), 1);
  test.equal(x.invert(1), 20);
  test.end();
});

tape("scaleSqrt() is an alias for pow().exponent(0.5)", function(test) {
  var s = scale.scaleSqrt();
  test.equal(s.exponent(), 0.5);
  test.inDelta(s(0.5), Math.SQRT1_2, 1e-6);
  test.inDelta(s.invert(Math.SQRT1_2), 0.5, 1e-6);
  test.end();
});
