var tape = require("tape"),
    arrays = require("../");

tape("histogram() returns a default histogram generator", function(test) {
  var h = arrays.histogram();
  test.equal(h.value()(42), 42);
  test.equal(h.domain(), arrays.extent);
  test.deepEqual(h.thresholds(), arrays.thresholdSturges);
  test.end();
});

tape("histogram(data) computes a histogram of the specified array of data", function(test) {
  var h = arrays.histogram();
  test.deepEqual(h([0, 0, 0, 10, 20, 20]), [
    bin([0, 0, 0], 0, 5),
    bin([], 5, 10),
    bin([10], 10, 15),
    bin([20, 20], 15, 20) // Note: inclusive upper bound for last bin.
  ]);
  test.end();
});

tape("histogram.value(number) sets the constant value", function(test) {
  var h = arrays.histogram().value(12); // Pointless, but for consistency.
  test.deepEqual(h([0, 0, 0, 1, 2, 2]), [
    bin([0, 0, 0, 1, 2, 2], 12, 12),
  ]);
  test.end();
});

tape("histogram.value(function) sets the value accessor", function(test) {
  var h = arrays.histogram().value(function(d) { return d.value; }),
      a = {value: 0},
      b = {value: 10},
      c = {value: 20};
  test.deepEqual(h([a, a, a, b, c, c]), [
    bin([a, a, a], 0, 5),
    bin([], 5, 10),
    bin([b], 10, 15),
    bin([c, c], 15, 20)
  ]);
  test.end();
});

tape("histogram.domain(array) sets the domain", function(test) {
  var h = arrays.histogram().domain([0, 20]);
  test.deepEqual(h.domain()(), [0, 20]);
  test.deepEqual(h([1, 2, 2, 10, 18, 18]), [
    bin([1, 2, 2], 0, 5),
    bin([], 5, 10),
    bin([10], 10, 15),
    bin([18, 18], 15, 20)
  ]);
  test.end();
});

tape("histogram.domain(function) sets the domain accessor", function(test) {
  var values = [1, 2, 2, 10, 18, 18],
      actual,
      domain = function(values) { actual = values; return [0, 20]; },
      h = arrays.histogram().domain(domain);
  test.equal(h.domain(), domain);
  test.deepEqual(h(values), [
    bin([1, 2, 2], 0, 5),
    bin([], 5, 10),
    bin([10], 10, 15),
    bin([18, 18], 15, 20)
  ]);
  test.deepEqual(actual, values);
  test.end();
});

tape("histogram.thresholds(number) sets the approximate number of bin thresholds", function(test) {
  var h = arrays.histogram().thresholds(3);
  test.deepEqual(h([0, 0, 0, 10, 30, 30]), [
    bin([0, 0, 0], 0, 10),
    bin([10], 10, 20),
    bin([30, 30], 20, 30) // Note: inclusive upper bound for last bin.
  ]);
  test.end();
});

tape("histogram.thresholds(array) sets the bin thresholds", function(test) {
  var h = arrays.histogram().thresholds([10, 20]);
  test.deepEqual(h([0, 0, 0, 10, 30, 30]), [
    bin([0, 0, 0], 0, 10),
    bin([10], 10, 20),
    bin([30, 30], 20, 30) // Note: inclusive upper bound for last bin.
  ]);
  test.end();
});

tape("histogram.thresholds(function) sets the bin thresholds accessor", function(test) {
  var actual,
      values = [0, 0, 0, 10, 30, 30],
      h = arrays.histogram().thresholds(function(values, x0, x1) { actual = [values, x0, x1]; return [10, 20]; });
  test.deepEqual(h(values), [
    bin([0, 0, 0], 0, 10),
    bin([10], 10, 20),
    bin([30, 30], 20, 30) // Note: inclusive upper bound for last bin.
  ]);
  test.deepEqual(actual, [values, 0, 30]);
  test.deepEqual(h.thresholds(function() { return 5; })(values), [
    bin([0, 0, 0], 0, 5),
    bin([], 5, 10),
    bin([10], 10, 15),
    bin([], 15, 20),
    bin([], 20, 25),
    bin([30, 30], 25, 30) // Note: inclusive upper bound for last bin.
  ]);
  test.end();
});

function bin(bin, x0, x1)  {
  bin.x0 = x0;
  bin.x1 = x1;
  return bin;
}
