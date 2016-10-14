var tape = require("tape"),
    scale = require("../");

tape("scaleQuantile() has the expected default", function(test) {
  var s = scale.scaleQuantile();
  test.deepEqual(s.domain(), []);
  test.deepEqual(s.range(), []);
  test.end();
});

tape("quantile(x) uses the R-7 algorithm to compute quantiles", function(test) {
  var s = scale.scaleQuantile().domain([3, 6, 7, 8, 8, 10, 13, 15, 16, 20]).range([0, 1, 2, 3]);
  test.deepEqual([3, 6, 6.9, 7, 7.1].map(s), [0, 0, 0, 0, 0]);
  test.deepEqual([8, 8.9].map(s), [1, 1]);
  test.deepEqual([9, 9.1, 10, 13].map(s), [2, 2, 2, 2]);
  test.deepEqual([14.9, 15, 15.1, 16, 20].map(s), [3, 3, 3, 3, 3]);
  s.domain([3, 6, 7, 8, 8, 9, 10, 13, 15, 16, 20]).range([0, 1, 2, 3]);
  test.deepEqual([3, 6, 6.9, 7, 7.1].map(s), [0, 0, 0, 0, 0]);
  test.deepEqual([8, 8.9].map(s), [1, 1]);
  test.deepEqual([9, 9.1, 10, 13].map(s), [2, 2, 2, 2]);
  test.deepEqual([14.9, 15, 15.1, 16, 20].map(s), [3, 3, 3, 3, 3]);
  test.end();
});

tape("quantile(x) returns undefined if the input value is NaN", function(test) {
  var s = scale.scaleQuantile().domain([3, 6, 7, 8, 8, 10, 13, 15, 16, 20]).range([0, 1, 2, 3]);
  test.equal(s(NaN), undefined);
  test.end();
});

tape("quantile.domain() values are sorted in ascending order", function(test) {
  var s = scale.scaleQuantile().domain([6, 3, 7, 8, 8, 13, 20, 15, 16, 10]);
  test.deepEqual(s.domain(), [3, 6, 7, 8, 8, 10, 13, 15, 16, 20]);
  test.end();
});

tape("quantile.domain() values are coerced to numbers", function(test) {
  var s = scale.scaleQuantile().domain(["6", "13", "20"]);
  test.deepEqual(s.domain(), [6, 13, 20]);
  test.end();
});

tape("quantile.domain() values are allowed to be zero", function(test) {
  var s = scale.scaleQuantile().domain([1, 2, 0, 0, null]);
  test.deepEqual(s.domain(), [0, 0, 1, 2]);
  test.end();
});

tape("quantile.domain() non-numeric values are ignored", function(test) {
  var s = scale.scaleQuantile().domain([6, 3, NaN, undefined, 7, 8, 8, 13, null, 20, 15, 16, 10, NaN]);
  test.deepEqual(s.domain(), [3, 6, 7, 8, 8, 10, 13, 15, 16, 20]);
  test.end();
});

tape("quantile.quantiles() returns the inner thresholds", function(test) {
  var s = scale.scaleQuantile().domain([3, 6, 7, 8, 8, 10, 13, 15, 16, 20]).range([0, 1, 2, 3]);
  test.deepEqual(s.quantiles(), [7.25, 9, 14.5]);
  s.domain([3, 6, 7, 8, 8, 9, 10, 13, 15, 16, 20]).range([0, 1, 2, 3]);
  test.deepEqual(s.quantiles(), [7.5, 9, 14]);
  test.end();
});

tape("quantile.range() cardinality determines the number of quantiles", function(test) {
  var s = scale.scaleQuantile().domain([3, 6, 7, 8, 8, 10, 13, 15, 16, 20]);
  test.deepEqual(s.range([0, 1, 2, 3]).quantiles(), [7.25, 9, 14.5]);
  test.deepEqual(s.range([0, 1]).quantiles(), [9]);
  test.deepEqual(s.range([,,,,,]).quantiles(), [6.8, 8, 11.2, 15.2]);
  test.deepEqual(s.range([,,,,,,]).quantiles(), [6.5, 8, 9, 13, 15.5]);
  test.end();
});

tape("quantile.range() values are arbitrary", function(test) {
  var a = {},
      b = {},
      c = {},
      s = scale.scaleQuantile().domain([3, 6, 7, 8, 8, 10, 13, 15, 16, 20]).range([a, b, c, a]);
  test.deepEqual([3, 6, 6.9, 7, 7.1].map(s), [a, a, a, a, a]);
  test.deepEqual([8, 8.9].map(s), [b, b]);
  test.deepEqual([9, 9.1, 10, 13].map(s), [c, c, c, c]);
  test.deepEqual([14.9, 15, 15.1, 16, 20].map(s), [a, a, a, a, a]);
  test.end();
});

tape("quantile.invertExtent() maps a value in the range to a domain extent", function(test) {
  var s = scale.scaleQuantile().domain([3, 6, 7, 8, 8, 10, 13, 15, 16, 20]).range([0, 1, 2, 3]);
  test.deepEqual(s.invertExtent(0), [3, 7.25]);
  test.deepEqual(s.invertExtent(1), [7.25, 9]);
  test.deepEqual(s.invertExtent(2), [9, 14.5]);
  test.deepEqual(s.invertExtent(3), [14.5, 20]);
  test.end();
});

tape("quantile.invertExtent() allows arbitrary range values", function(test) {
  var a = {},
      b = {},
      s = scale.scaleQuantile().domain([3, 6, 7, 8, 8, 10, 13, 15, 16, 20]).range([a, b]);
  test.deepEqual(s.invertExtent(a), [3, 9]);
  test.deepEqual(s.invertExtent(b), [9, 20]);
  test.end();
});

tape("quantile.invertExtent() returns [NaN, NaN] when the given value is not in the range", function(test) {
  var s = scale.scaleQuantile().domain([3, 6, 7, 8, 8, 10, 13, 15, 16, 20]);
  test.ok(s.invertExtent(-1).every(isNaN));
  test.ok(s.invertExtent(0.5).every(isNaN));
  test.ok(s.invertExtent(2).every(isNaN));
  test.ok(s.invertExtent('a').every(isNaN));
  test.end();
});

tape("quantile.invertExtent() returns the first match if duplicate values exist in the range", function(test) {
  var s = scale.scaleQuantile().domain([3, 6, 7, 8, 8, 10, 13, 15, 16, 20]).range([0, 1, 2, 0]);
  test.deepEqual(s.invertExtent(0), [3, 7.25]);
  test.deepEqual(s.invertExtent(1), [7.25, 9]);
  test.deepEqual(s.invertExtent(2), [9, 14.5]);
  test.end();
});
