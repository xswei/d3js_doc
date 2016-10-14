var tape = require("tape"),
    scale = require("../");

tape("scaleThreshold() has the expected defaults", function(test) {
  var x = scale.scaleThreshold();
  test.deepEqual(x.domain(), [0.5]);
  test.deepEqual(x.range(), [0, 1]);
  test.equal(x(0.50), 1);
  test.equal(x(0.49), 0);
  test.end();
});

tape("threshold(x) maps a number to a discrete value in the range", function(test) {
  var x = scale.scaleThreshold().domain([1/3, 2/3]).range(["a", "b", "c"]);
  test.equal(x(0), "a");
  test.equal(x(0.2), "a");
  test.equal(x(0.4), "b");
  test.equal(x(0.6), "b");
  test.equal(x(0.8), "c");
  test.equal(x(1), "c");
  test.end();
});

tape("threshold(x) returns undefined if the specified value x is not orderable", function(test) {
  var x = scale.scaleThreshold().domain([1/3, 2/3]).range(["a", "b", "c"]);
  test.equal(x(), undefined);
  test.equal(x(undefined), undefined);
  test.equal(x(NaN), undefined);
  test.equal(x(null), "a"); // null < 1/3
  test.end();
});

tape("threshold.domain(…) supports arbitrary orderable values", function(test) {
  var x = scale.scaleThreshold().domain(["10", "2"]).range([0, 1, 2]);
  test.strictEqual(x.domain()[0], "10");
  test.strictEqual(x.domain()[1], "2");
  test.equal(x("0"), 0);
  test.equal(x("12"), 1);
  test.equal(x("3"), 2);
  test.end();
});

tape("threshold.range(…) supports arbitrary values", function(test) {
  var a = {}, b = {}, c = {}, x = scale.scaleThreshold().domain([1/3, 2/3]).range([a, b, c]);
  test.equal(x(0), a);
  test.equal(x(0.2), a);
  test.equal(x(0.4), b);
  test.equal(x(0.6), b);
  test.equal(x(0.8), c);
  test.equal(x(1), c);
  test.end();
});

tape("threshold.invertExtent(y) returns the domain extent for the specified range value", function(test) {
  var a = {}, b = {}, c = {}, x = scale.scaleThreshold().domain([1/3, 2/3]).range([a, b, c]);
  test.deepEqual(x.invertExtent(a), [undefined, 1/3]);
  test.deepEqual(x.invertExtent(b), [1/3, 2/3]);
  test.deepEqual(x.invertExtent(c), [2/3, undefined]);
  test.deepEqual(x.invertExtent({}), [undefined, undefined]);
  test.end();
});
