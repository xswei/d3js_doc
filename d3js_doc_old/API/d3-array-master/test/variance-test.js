var tape = require("tape"),
    arrays = require("../");

tape("variance(array) returns the variance of the specified numbers", function(test) {
  test.equal(arrays.variance([5, 1, 2, 3, 4]), 2.5);
  test.equal(arrays.variance([20, 3]), 144.5);
  test.equal(arrays.variance([3, 20]), 144.5);
  test.end();
});

tape("variance(array) ignores null, undefined and NaN", function(test) {
  test.equal(arrays.variance([NaN, 1, 2, 3, 4, 5]), 2.5);
  test.equal(arrays.variance([1, 2, 3, 4, 5, NaN]), 2.5);
  test.equal(arrays.variance([10, null, 3, undefined, 5, NaN]), 13);
  test.end();
});

tape("variance(array) can handle large numbers without overflowing", function(test) {
  test.equal(arrays.variance([Number.MAX_VALUE, Number.MAX_VALUE]), 0);
  test.equal(arrays.variance([-Number.MAX_VALUE, -Number.MAX_VALUE]), 0);
  test.end();
});

tape("variance(array) returns undefined if the array has fewer than two numbers", function(test) {
  test.equal(arrays.variance([1]), undefined);
  test.equal(arrays.variance([]), undefined);
  test.equal(arrays.variance([null]), undefined);
  test.equal(arrays.variance([undefined]), undefined);
  test.equal(arrays.variance([NaN]), undefined);
  test.equal(arrays.variance([NaN, NaN]), undefined);
  test.end();
});

tape("variance(array, f) returns the variance of the specified numbers", function(test) {
  test.equal(arrays.variance([5, 1, 2, 3, 4].map(box), unbox), 2.5);
  test.equal(arrays.variance([20, 3].map(box), unbox), 144.5);
  test.equal(arrays.variance([3, 20].map(box), unbox), 144.5);
  test.end();
});

tape("variance(array, f) ignores null, undefined and NaN", function(test) {
  test.equal(arrays.variance([NaN, 1, 2, 3, 4, 5].map(box), unbox), 2.5);
  test.equal(arrays.variance([1, 2, 3, 4, 5, NaN].map(box), unbox), 2.5);
  test.equal(arrays.variance([10, null, 3, undefined, 5, NaN].map(box), unbox), 13);
  test.end();
});

tape("variance(array, f) can handle large numbers without overflowing", function(test) {
  test.equal(arrays.variance([Number.MAX_VALUE, Number.MAX_VALUE].map(box), unbox), 0);
  test.equal(arrays.variance([-Number.MAX_VALUE, -Number.MAX_VALUE].map(box), unbox), 0);
  test.end();
});

tape("variance(array, f) returns undefined if the array has fewer than two numbers", function(test) {
  test.equal(arrays.variance([1].map(box), unbox), undefined);
  test.equal(arrays.variance([].map(box), unbox), undefined);
  test.equal(arrays.variance([null].map(box), unbox), undefined);
  test.equal(arrays.variance([undefined].map(box), unbox), undefined);
  test.equal(arrays.variance([NaN].map(box), unbox), undefined);
  test.equal(arrays.variance([NaN, NaN].map(box), unbox), undefined);
  test.end();
});

tape("variance(array, f) passes the accessor d, i, and array", function(test) {
  var results = [], array = ["a", "b", "c"];
  arrays.variance(array, function(d, i, array) { results.push([d, i, array]); });
  test.deepEqual(results, [["a", 0, array], ["b", 1, array], ["c", 2, array]]);
  test.end();
});

tape("variance(array, f) uses the global context", function(test) {
  var results = [];
  arrays.variance([1, 2], function() { results.push(this); });
  test.deepEqual(results, [global, global]);
  test.end();
});

function box(value) {
  return {value: value};
}

function unbox(box) {
  return box.value;
}
