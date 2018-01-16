var tape = require("tape"),
    array = require("d3-array"),
    scale = require("../");

require("./inDelta");

tape("scaleQuantize() has the expected defaults", function(test) {
  var s = scale.scaleQuantize();
  test.deepEqual(s.domain(), [0, 1]);
  test.deepEqual(s.range(), [0, 1]);
  test.equal(s(0.25), 0);
  test.equal(s(0.75), 1);
  test.end();
});

tape("quantize(value) maps a number to a discrete value in the range", function(test) {
  var s = scale.scaleQuantize().range([0, 1, 2]);
  test.equal(s(0.0), 0);
  test.equal(s(0.2), 0);
  test.equal(s(0.4), 1);
  test.equal(s(0.6), 1);
  test.equal(s(0.8), 2);
  test.equal(s(1.0), 2);
  test.end();
});

tape("quantize(value) clamps input values to the domain", function(test) {
  var a = {},
      b = {},
      c = {},
      s = scale.scaleQuantize().range([a, b, c]);
  test.equal(s(-0.5), a);
  test.equal(s(+1.5), c);
  test.end();
});

tape("quantize.domain() coerces domain values to numbers", function(test) {
  var s = scale.scaleQuantize().domain(["-1.20", "2.40"]);
  test.deepEqual(s.domain(), [-1.2, 2.4]);
  test.equal(s(-1.2), 0);
  test.equal(s( 0.5), 0);
  test.equal(s( 0.7), 1);
  test.equal(s( 2.4), 1);
  test.end();
});

tape("quantize.domain() only considers the first and second element of the domain", function(test) {
  var s = scale.scaleQuantize().domain([-1, 100, 200]);
  test.deepEqual(s.domain(), [-1, 100]);
  test.end();
});

tape("quantize.range() cardinality determines the degree of quantization", function(test) {
  var s = scale.scaleQuantize();
  test.inDelta(s.range(array.range(0, 1.001, 0.001))(1/3), 0.333, 1e-6);
  test.inDelta(s.range(array.range(0, 1.010, 0.010))(1/3), 0.330, 1e-6);
  test.inDelta(s.range(array.range(0, 1.100, 0.100))(1/3), 0.300, 1e-6);
  test.inDelta(s.range(array.range(0, 1.200, 0.200))(1/3), 0.400, 1e-6);
  test.inDelta(s.range(array.range(0, 1.250, 0.250))(1/3), 0.250, 1e-6);
  test.inDelta(s.range(array.range(0, 1.500, 0.500))(1/3), 0.500, 1e-6);
  test.inDelta(s.range(array.range(1))(1/3), 0, 1e-6);
  test.end();
});

tape("quantize.range() values are arbitrary", function(test) {
  var a = {},
      b = {},
      c = {},
      s = scale.scaleQuantize().range([a, b, c]);
  test.equal(s(0.0), a);
  test.equal(s(0.2), a);
  test.equal(s(0.4), b);
  test.equal(s(0.6), b);
  test.equal(s(0.8), c);
  test.equal(s(1.0), c);
  test.end();
});

tape("quantize.invertExtent() maps a value in the range to a domain extent", function(test) {
  var s = scale.scaleQuantize().range([0, 1, 2, 3]);
  test.deepEqual(s.invertExtent(0), [0.00, 0.25]);
  test.deepEqual(s.invertExtent(1), [0.25, 0.50]);
  test.deepEqual(s.invertExtent(2), [0.50, 0.75]);
  test.deepEqual(s.invertExtent(3), [0.75, 1.00]);
  test.end();
});

tape("quantize.invertExtent() allows arbitrary range values", function(test) {
  var a = {},
      b = {},
      s = scale.scaleQuantize().range([a, b]);
  test.deepEqual(s.invertExtent(a), [0.0, 0.5]);
  test.deepEqual(s.invertExtent(b), [0.5, 1.0]);
  test.end();
});

tape("quantize.invertExtent() returns [NaN, NaN] when the given value is not in the range", function(test) {
  var s = scale.scaleQuantize();
  test.ok(s.invertExtent(-1).every(Number.isNaN));
  test.ok(s.invertExtent(0.5).every(Number.isNaN));
  test.ok(s.invertExtent(2).every(Number.isNaN));
  test.ok(s.invertExtent("a").every(Number.isNaN));
  test.end();
});

tape("quantize.invertExtent() returns the first match if duplicate values exist in the range", function(test) {
  var s = scale.scaleQuantize().range([0, 1, 2, 0]);
  test.deepEqual(s.invertExtent(0), [0.00, 0.25]);
  test.deepEqual(s.invertExtent(1), [0.25, 0.50]);
  test.end();
});

tape("quantize.invertExtent(y) is exactly consistent with quantize(x)", function(test) {
  var s = scale.scaleQuantize().domain([4.2, 6.2]).range(array.range(10));
  s.range().forEach(function(y) {
    var e = s.invertExtent(y);
    test.equal(s(e[0]), y);
    test.equal(s(e[1]), y < 9 ? y + 1 : y);
  });
  test.end();
});
