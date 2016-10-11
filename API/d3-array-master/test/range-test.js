var tape = require("tape"),
    arrays = require("../");

tape("range(stop) returns [0, 1, 2, … stop - 1]", function(test) {
  test.deepEqual(arrays.range(5), [0, 1, 2, 3, 4]);
  test.deepEqual(arrays.range(2.01), [0, 1, 2]);
  test.deepEqual(arrays.range(1), [0]);
  test.deepEqual(arrays.range(.5), [0]);
  test.end();
});

tape("range(stop) returns an empty array if stop <= 0", function(test) {
  test.deepEqual(arrays.range(0), []);
  test.deepEqual(arrays.range(-0.5), []);
  test.deepEqual(arrays.range(-1), []);
  test.end();
});

tape("range(stop) returns an empty array if stop is NaN", function(test) {
  test.deepEqual(arrays.range(NaN), []);
  test.deepEqual(arrays.range(), []);
  test.end();
});

tape("range(start, stop) returns [start, start + 1, … stop - 1]", function(test) {
  test.deepEqual(arrays.range(0, 5), [0, 1, 2, 3, 4]);
  test.deepEqual(arrays.range(2, 5), [2, 3, 4]);
  test.deepEqual(arrays.range(2.5, 5), [2.5, 3.5, 4.5]);
  test.deepEqual(arrays.range(-1, 3), [-1, 0, 1, 2]);
  test.end();
});

tape("range(start, stop) returns an empty array if start or stop is NaN", function(test) {
  test.deepEqual(arrays.range(0, NaN), []);
  test.deepEqual(arrays.range(1, NaN), []);
  test.deepEqual(arrays.range(-1, NaN), []);
  test.deepEqual(arrays.range(0, undefined), []);
  test.deepEqual(arrays.range(1, undefined), []);
  test.deepEqual(arrays.range(-1, undefined), []);
  test.deepEqual(arrays.range(NaN, 0), []);
  test.deepEqual(arrays.range(NaN, 1), []);
  test.deepEqual(arrays.range(NaN, -1), []);
  test.deepEqual(arrays.range(undefined, 0), []);
  test.deepEqual(arrays.range(undefined, 1), []);
  test.deepEqual(arrays.range(undefined, -1), []);
  test.deepEqual(arrays.range(NaN, NaN), []);
  test.deepEqual(arrays.range(undefined, undefined), []);
  test.end();
});

tape("range(start, stop) returns an empty array if start >= stop", function(test) {
  test.deepEqual(arrays.range(0, 0), []);
  test.deepEqual(arrays.range(5, 5), []);
  test.deepEqual(arrays.range(6, 5), []);
  test.deepEqual(arrays.range(10, 10), []);
  test.deepEqual(arrays.range(20, 10), []);
  test.end();
});

tape("range(start, stop, step) returns [start, start + step, start + 2 * step, … stop - step]", function(test) {
  test.deepEqual(arrays.range(0, 5, 1), [0, 1, 2, 3, 4]);
  test.deepEqual(arrays.range(0, 5, 2), [0, 2, 4]);
  test.deepEqual(arrays.range(2, 5, 2), [2, 4]);
  test.deepEqual(arrays.range(-1, 3, 2), [-1, 1]);
  test.end();
});

tape("range(start, stop, step) allows a negative step", function(test) {
  test.deepEqual(arrays.range(5, 0, -1), [5, 4, 3, 2, 1]);
  test.deepEqual(arrays.range(5, 0, -2), [5, 3, 1]);
  test.deepEqual(arrays.range(5, 2, -2), [5, 3]);
  test.deepEqual(arrays.range(3, -1, -2), [3, 1]);
  test.end();
});

tape("range(start, stop, step) returns an empty array if start >= stop and step > 0", function(test) {
  test.deepEqual(arrays.range(5, 5, 2), []);
  test.deepEqual(arrays.range(6, 5, 2), []);
  test.deepEqual(arrays.range(10, 10, 1), []);
  test.deepEqual(arrays.range(10, 10, 0.5), []);
  test.deepEqual(arrays.range(0, 0, 1), []);
  test.deepEqual(arrays.range(0, 0, 0.5), []);
  test.deepEqual(arrays.range(20, 10, 2), []);
  test.deepEqual(arrays.range(20, 10, 1), []);
  test.deepEqual(arrays.range(20, 10, 0.5), []);
  test.end();
});

tape("range(start, stop, step) returns an empty array if start >= stop and step < 0", function(test) {
  test.deepEqual(arrays.range(5, 5, -2), []);
  test.deepEqual(arrays.range(5, 6, -2), []);
  test.deepEqual(arrays.range(10, 10, -1), []);
  test.deepEqual(arrays.range(10, 10, -0.5), []);
  test.deepEqual(arrays.range(0, 0, -1), []);
  test.deepEqual(arrays.range(0, 0, -0.5), []);
  test.deepEqual(arrays.range(10, 20, -2), []);
  test.deepEqual(arrays.range(10, 20, -1), []);
  test.deepEqual(arrays.range(10, 20, -0.5), []);
  test.end();
});

tape("range(start, stop, step) returns an empty array if start, stop or step is NaN", function(test) {
  test.deepEqual(arrays.range(NaN, 3, 2), []);
  test.deepEqual(arrays.range(3, NaN, 2), []);
  test.deepEqual(arrays.range(0, 5, NaN), []);
  test.deepEqual(arrays.range(NaN, NaN, NaN), []);
  test.deepEqual(arrays.range(NaN, NaN, NaN), []);
  test.deepEqual(arrays.range(undefined, undefined, undefined), []);
  test.deepEqual(arrays.range(0, 10, NaN), []);
  test.deepEqual(arrays.range(10, 0, NaN), []);
  test.deepEqual(arrays.range(0, 10, undefined), []);
  test.deepEqual(arrays.range(10, 0, undefined), []);
  test.end();
});

tape("range(start, stop, step) returns an empty array if step is zero", function(test) {
  test.deepEqual(arrays.range(0, 5, 0), []);
  test.end();
});

tape("range(start, stop, step) returns exactly [start + step * i, …] for fractional steps", function(test) {
  test.deepEqual(arrays.range(0, 0.5, 0.1), [0 + 0.1 * 0, 0 + 0.1 * 1, 0 + 0.1 * 2, 0 + 0.1 * 3, 0 + 0.1 * 4]);
  test.deepEqual(arrays.range(0.5, 0, -0.1), [0.5 - 0.1 * 0, 0.5 - 0.1 * 1, 0.5 - 0.1 * 2, 0.5 - 0.1 * 3, 0.5 - 0.1 * 4]);
  test.deepEqual(arrays.range(-2, -1.2, 0.1), [-2 + 0.1 * 0, -2 + 0.1 * 1, -2 + 0.1 * 2, -2 + 0.1 * 3, -2 + 0.1 * 4, -2 + 0.1 * 5, -2 + 0.1 * 6, -2 + 0.1 * 7]);
  test.deepEqual(arrays.range(-1.2, -2, -0.1), [-1.2 - 0.1 * 0, -1.2 - 0.1 * 1, -1.2 - 0.1 * 2, -1.2 - 0.1 * 3, -1.2 - 0.1 * 4, -1.2 - 0.1 * 5, -1.2 - 0.1 * 6, -1.2 - 0.1 * 7]);
  test.end();
});

tape("range(start, stop, step) returns exactly [start + step * i, …] for very small fractional steps", function(test) {
  test.deepEqual(arrays.range(2.1e-31, 5e-31, 1.1e-31), [2.1e-31 + 1.1e-31 * 0, 2.1e-31 + 1.1e-31 * 1, 2.1e-31 + 1.1e-31 * 2]);
  test.deepEqual(arrays.range(5e-31, 2.1e-31, -1.1e-31), [5e-31 - 1.1e-31 * 0, 5e-31 - 1.1e-31 * 1, 5e-31 - 1.1e-31 * 2]);
  test.end();
});

tape("range(start, stop, step) returns exactly [start + step * i, …] for very large fractional steps", function(test) {
  test.deepEqual(arrays.range(1e300, 2e300, 0.3e300), [1e300 + 0.3e300 * 0, 1e300 + 0.3e300 * 1, 1e300 + 0.3e300 * 2, 1e300 + 0.3e300 * 3]);
  test.deepEqual(arrays.range(2e300, 1e300, -0.3e300), [2e300 - 0.3e300 * 0, 2e300 - 0.3e300 * 1, 2e300 - 0.3e300 * 2, 2e300 - 0.3e300 * 3]);
  test.end();
});
