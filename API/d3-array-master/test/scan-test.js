var tape = require("tape"),
    arrays = require("../");

tape("scan(array) compares using natural order", function(test) {
  test.strictEqual(arrays.scan([0, 1]), 0);
  test.strictEqual(arrays.scan([1, 0]), 1);
  test.strictEqual(arrays.scan([0, "1"]), 0);
  test.strictEqual(arrays.scan(["1", 0]), 1);
  test.strictEqual(arrays.scan(["10", "2"]), 0);
  test.strictEqual(arrays.scan(["2", "10"]), 1);
  test.strictEqual(arrays.scan(["10", "2", NaN]), 0);
  test.strictEqual(arrays.scan([NaN, "10", "2"]), 1);
  test.strictEqual(arrays.scan(["2", NaN, "10"]), 2);
  test.strictEqual(arrays.scan([2, NaN, 10]), 0);
  test.strictEqual(arrays.scan([10, 2, NaN]), 1);
  test.strictEqual(arrays.scan([NaN, 10, 2]), 2);
  test.end();
});

tape("scan(array, compare) compares using the specified compare function", function(test) {
  var a = {name: "a"}, b = {name: "b"};
  test.strictEqual(arrays.scan([a, b], function(a, b) { return a.name.localeCompare(b.name); }), 0);
  test.strictEqual(arrays.scan([1, 0], arrays.descending), 0);
  test.strictEqual(arrays.scan(["1", 0], arrays.descending), 0);
  test.strictEqual(arrays.scan(["2", "10"], arrays.descending), 0);
  test.strictEqual(arrays.scan(["2", NaN, "10"], arrays.descending), 0);
  test.strictEqual(arrays.scan([2, NaN, 10], arrays.descending), 2);
  test.end();
});

tape("scan(array) returns undefined if the array is empty", function(test) {
  test.strictEqual(arrays.scan([]), undefined);
  test.end();
});

tape("scan(array) returns undefined if the array contains only incomparable values", function(test) {
  test.strictEqual(arrays.scan([NaN, undefined]), undefined);
  test.strictEqual(arrays.scan([NaN, "foo"], function(a, b) { return a - b; }), undefined);
  test.end();
});

tape("scan(array) returns the first of equal values", function(test) {
  test.strictEqual(arrays.scan([2, 2, 1, 1, 0, 0, 0, 3, 0]), 4);
  test.strictEqual(arrays.scan([3, 2, 2, 1, 1, 0, 0, 0, 3, 0], arrays.descending), 0);
  test.end();
});
