var tape = require("tape"),
    arrays = require("../");

tape("deviation(array) returns the standard deviation of the specified numbers", function(test) {
  test.equal(arrays.deviation([5, 1, 2, 3, 4]), Math.sqrt(2.5));
  test.equal(arrays.deviation([20, 3]), Math.sqrt(144.5));
  test.equal(arrays.deviation([3, 20]), Math.sqrt(144.5));
  test.end();
});

tape("deviation(array) ignores null, undefined and NaN", function(test) {
  test.equal(arrays.deviation([NaN, 1, 2, 3, 4, 5]), Math.sqrt(2.5));
  test.equal(arrays.deviation([1, 2, 3, 4, 5, NaN]), Math.sqrt(2.5));
  test.equal(arrays.deviation([10, null, 3, undefined, 5, NaN]), Math.sqrt(13));
  test.end();
});

tape("deviation(array) can handle large numbers without overflowing", function(test) {
  test.equal(arrays.deviation([Number.MAX_VALUE, Number.MAX_VALUE]), 0);
  test.equal(arrays.deviation([-Number.MAX_VALUE, -Number.MAX_VALUE]), 0);
  test.end();
});

tape("deviation(array) returns undefined if the array has fewer than two numbers", function(test) {
  test.equal(arrays.deviation([1]), undefined);
  test.equal(arrays.deviation([]), undefined);
  test.equal(arrays.deviation([null]), undefined);
  test.equal(arrays.deviation([undefined]), undefined);
  test.equal(arrays.deviation([NaN]), undefined);
  test.equal(arrays.deviation([NaN, NaN]), undefined);
  test.end();
});

tape("deviation(array, f) returns the deviation of the specified numbers", function(test) {
  test.equal(arrays.deviation([5, 1, 2, 3, 4].map(box), unbox), Math.sqrt(2.5));
  test.equal(arrays.deviation([20, 3].map(box), unbox), Math.sqrt(144.5));
  test.equal(arrays.deviation([3, 20].map(box), unbox), Math.sqrt(144.5));
  test.end();
});

tape("deviation(array, f) ignores null, undefined and NaN", function(test) {
  test.equal(arrays.deviation([NaN, 1, 2, 3, 4, 5].map(box), unbox), Math.sqrt(2.5));
  test.equal(arrays.deviation([1, 2, 3, 4, 5, NaN].map(box), unbox), Math.sqrt(2.5));
  test.equal(arrays.deviation([10, null, 3, undefined, 5, NaN].map(box), unbox), Math.sqrt(13));
  test.end();
});

tape("deviation(array, f) can handle large numbers without overflowing", function(test) {
  test.equal(arrays.deviation([Number.MAX_VALUE, Number.MAX_VALUE].map(box), unbox), 0);
  test.equal(arrays.deviation([-Number.MAX_VALUE, -Number.MAX_VALUE].map(box), unbox), 0);
  test.end();
});

tape("deviation(array, f) returns undefined if the array has fewer than two numbers", function(test) {
  test.equal(arrays.deviation([1].map(box), unbox), undefined);
  test.equal(arrays.deviation([].map(box), unbox), undefined);
  test.equal(arrays.deviation([null].map(box), unbox), undefined);
  test.equal(arrays.deviation([undefined].map(box), unbox), undefined);
  test.equal(arrays.deviation([NaN].map(box), unbox), undefined);
  test.equal(arrays.deviation([NaN, NaN].map(box), unbox), undefined);
  test.end();
});

function box(value) {
  return {value: value};
}

function unbox(box) {
  return box.value;
}
