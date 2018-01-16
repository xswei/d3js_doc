var tape = require("tape"),
    arrays = require("../");

tape("extent(array) returns the least and greatest numeric values for numbers", function(test) {
  test.deepEqual(arrays.extent([1]), [1, 1]);
  test.deepEqual(arrays.extent([5, 1, 2, 3, 4]), [1, 5]);
  test.deepEqual(arrays.extent([20, 3]), [3, 20]);
  test.deepEqual(arrays.extent([3, 20]), [3, 20]);
  test.end();
});

tape("extent(array) returns the least and greatest lexicographic value for strings", function(test) {
  test.deepEqual(arrays.extent(["c", "a", "b"]), ["a", "c"]);
  test.deepEqual(arrays.extent(["20", "3"]), ["20", "3"]);
  test.deepEqual(arrays.extent(["3", "20"]), ["20", "3"]);
  test.end();
});

tape("extent(array) ignores null, undefined and NaN", function(test) {
  var o = {valueOf: function() { return NaN; }};
  test.deepEqual(arrays.extent([NaN, 1, 2, 3, 4, 5]), [1, 5]);
  test.deepEqual(arrays.extent([o, 1, 2, 3, 4, 5]), [1, 5]);
  test.deepEqual(arrays.extent([1, 2, 3, 4, 5, NaN]), [1, 5]);
  test.deepEqual(arrays.extent([1, 2, 3, 4, 5, o]), [1, 5]);
  test.deepEqual(arrays.extent([10, null, 3, undefined, 5, NaN]), [3, 10]);
  test.deepEqual(arrays.extent([-1, null, -3, undefined, -5, NaN]), [-5, -1]);
  test.end();
});

tape("extent(array) compares heterogenous types as numbers", function(test) {
  test.deepEqual(arrays.extent([20, "3"]), ["3", 20]);
  test.deepEqual(arrays.extent(["20", 3]), [3, "20"]);
  test.deepEqual(arrays.extent([3, "20"]), [3, "20"]);
  test.deepEqual(arrays.extent(["3", 20]), ["3", 20]);
  test.end();
});

tape("extent(array) returns undefined if the array contains no numbers", function(test) {
  test.deepEqual(arrays.extent([]), [undefined, undefined]);
  test.deepEqual(arrays.extent([null]), [undefined, undefined]);
  test.deepEqual(arrays.extent([undefined]), [undefined, undefined]);
  test.deepEqual(arrays.extent([NaN]), [undefined, undefined]);
  test.deepEqual(arrays.extent([NaN, NaN]), [undefined, undefined]);
  test.end();
});

tape("extent(array, f) returns the least and greatest numeric value for numbers", function(test) {
  test.deepEqual(arrays.extent([1].map(box), unbox), [1, 1]);
  test.deepEqual(arrays.extent([5, 1, 2, 3, 4].map(box), unbox), [1, 5]);
  test.deepEqual(arrays.extent([20, 3].map(box), unbox), [3, 20]);
  test.deepEqual(arrays.extent([3, 20].map(box), unbox), [3, 20]);
  test.end();
});

tape("extent(array, f) returns the least and greatest lexicographic value for strings", function(test) {
  test.deepEqual(arrays.extent(["c", "a", "b"].map(box), unbox), ["a", "c"]);
  test.deepEqual(arrays.extent(["20", "3"].map(box), unbox), ["20", "3"]);
  test.deepEqual(arrays.extent(["3", "20"].map(box), unbox), ["20", "3"]);
  test.end();
});

tape("extent(array, f) ignores null, undefined and NaN", function(test) {
  var o = {valueOf: function() { return NaN; }};
  test.deepEqual(arrays.extent([NaN, 1, 2, 3, 4, 5].map(box), unbox), [1, 5]);
  test.deepEqual(arrays.extent([o, 1, 2, 3, 4, 5].map(box), unbox), [1, 5]);
  test.deepEqual(arrays.extent([1, 2, 3, 4, 5, NaN].map(box), unbox), [1, 5]);
  test.deepEqual(arrays.extent([1, 2, 3, 4, 5, o].map(box), unbox), [1, 5]);
  test.deepEqual(arrays.extent([10, null, 3, undefined, 5, NaN].map(box), unbox), [3, 10]);
  test.deepEqual(arrays.extent([-1, null, -3, undefined, -5, NaN].map(box), unbox), [-5, -1]);
  test.end();
});

tape("extent(array, f) compares heterogenous types as numbers", function(test) {
  test.deepEqual(arrays.extent([20, "3"].map(box), unbox), ["3", 20]);
  test.deepEqual(arrays.extent(["20", 3].map(box), unbox), [3, "20"]);
  test.deepEqual(arrays.extent([3, "20"].map(box), unbox), [3, "20"]);
  test.deepEqual(arrays.extent(["3", 20].map(box), unbox), ["3", 20]);
  test.end();
});

tape("extent(array, f) returns undefined if the array contains no observed values", function(test) {
  test.deepEqual(arrays.extent([].map(box), unbox), [undefined, undefined]);
  test.deepEqual(arrays.extent([null].map(box), unbox), [undefined, undefined]);
  test.deepEqual(arrays.extent([undefined].map(box), unbox), [undefined, undefined]);
  test.deepEqual(arrays.extent([NaN].map(box), unbox), [undefined, undefined]);
  test.deepEqual(arrays.extent([NaN, NaN].map(box), unbox), [undefined, undefined]);
  test.end();
});

tape("extent(array, f) passes the accessor d, i, and array", function(test) {
  var results = [], array = ["a", "b", "c"];
  arrays.extent(array, function(d, i, array) { results.push([d, i, array]); });
  test.deepEqual(results, [["a", 0, array], ["b", 1, array], ["c", 2, array]]);
  test.end();
});

tape("extent(array, f) uses the global context", function(test) {
  var results = [];
  arrays.extent([1, 2], function() { results.push(this); });
  test.deepEqual(results, [global, global]);
  test.end();
});

function box(value) {
  return {value: value};
}

function unbox(box) {
  return box.value;
}
