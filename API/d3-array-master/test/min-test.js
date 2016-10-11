var tape = require("tape"),
    arrays = require("../");

tape("min(array) returns the least numeric value for numbers", function(test) {
  test.deepEqual(arrays.min([1]), 1);
  test.deepEqual(arrays.min([5, 1, 2, 3, 4]), 1);
  test.deepEqual(arrays.min([20, 3]), 3);
  test.deepEqual(arrays.min([3, 20]), 3);
  test.end();
});

tape("min(array) returns the least lexicographic value for strings", function(test) {
  test.deepEqual(arrays.min(["c", "a", "b"]), "a");
  test.deepEqual(arrays.min(["20", "3"]), "20");
  test.deepEqual(arrays.min(["3", "20"]), "20");
  test.end();
});

tape("min(array) ignores null, undefined and NaN", function(test) {
  var o = {valueOf: function() { return NaN; }};
  test.deepEqual(arrays.min([NaN, 1, 2, 3, 4, 5]), 1);
  test.deepEqual(arrays.min([o, 1, 2, 3, 4, 5]), 1);
  test.deepEqual(arrays.min([1, 2, 3, 4, 5, NaN]), 1);
  test.deepEqual(arrays.min([1, 2, 3, 4, 5, o]), 1);
  test.deepEqual(arrays.min([10, null, 3, undefined, 5, NaN]), 3);
  test.deepEqual(arrays.min([-1, null, -3, undefined, -5, NaN]), -5);
  test.end();
});

tape("min(array) compares heterogenous types as numbers", function(test) {
  test.equal(arrays.min([20, "3"]), "3");
  test.equal(arrays.min(["20", 3]), 3);
  test.equal(arrays.min([3, "20"]), 3);
  test.equal(arrays.min(["3", 20]), "3");
  test.end();
});

tape("min(array) returns undefined if the array contains no numbers", function(test) {
  test.equal(arrays.min([]), undefined);
  test.equal(arrays.min([null]), undefined);
  test.equal(arrays.min([undefined]), undefined);
  test.equal(arrays.min([NaN]), undefined);
  test.equal(arrays.min([NaN, NaN]), undefined);
  test.end();
});

tape("min(array, f) returns the least numeric value for numbers", function(test) {
  test.deepEqual(arrays.min([1].map(box), unbox), 1);
  test.deepEqual(arrays.min([5, 1, 2, 3, 4].map(box), unbox), 1);
  test.deepEqual(arrays.min([20, 3].map(box), unbox), 3);
  test.deepEqual(arrays.min([3, 20].map(box), unbox), 3);
  test.end();
});

tape("min(array, f) returns the least lexicographic value for strings", function(test) {
  test.deepEqual(arrays.min(["c", "a", "b"].map(box), unbox), "a");
  test.deepEqual(arrays.min(["20", "3"].map(box), unbox), "20");
  test.deepEqual(arrays.min(["3", "20"].map(box), unbox), "20");
  test.end();
});

tape("min(array, f) ignores null, undefined and NaN", function(test) {
  var o = {valueOf: function() { return NaN; }};
  test.deepEqual(arrays.min([NaN, 1, 2, 3, 4, 5].map(box), unbox), 1);
  test.deepEqual(arrays.min([o, 1, 2, 3, 4, 5].map(box), unbox), 1);
  test.deepEqual(arrays.min([1, 2, 3, 4, 5, NaN].map(box), unbox), 1);
  test.deepEqual(arrays.min([1, 2, 3, 4, 5, o].map(box), unbox), 1);
  test.deepEqual(arrays.min([10, null, 3, undefined, 5, NaN].map(box), unbox), 3);
  test.deepEqual(arrays.min([-1, null, -3, undefined, -5, NaN].map(box), unbox), -5);
  test.end();
});

tape("min(array, f) compares heterogenous types as numbers", function(test) {
  test.equal(arrays.min([20, "3"].map(box), unbox), "3");
  test.equal(arrays.min(["20", 3].map(box), unbox), 3);
  test.equal(arrays.min([3, "20"].map(box), unbox), 3);
  test.equal(arrays.min(["3", 20].map(box), unbox), "3");
  test.end();
});

tape("min(array, f) returns undefined if the array contains no observed values", function(test) {
  test.equal(arrays.min([].map(box), unbox), undefined);
  test.equal(arrays.min([null].map(box), unbox), undefined);
  test.equal(arrays.min([undefined].map(box), unbox), undefined);
  test.equal(arrays.min([NaN].map(box), unbox), undefined);
  test.equal(arrays.min([NaN, NaN].map(box), unbox), undefined);
  test.end();
});

tape("min(array, f) passes the accessor d, i, and array", function(test) {
  var results = [], array = ["a", "b", "c"];
  arrays.min(array, function(d, i, array) { results.push([d, i, array]); });
  test.deepEqual(results, [["a", 0, array], ["b", 1, array], ["c", 2, array]]);
  test.end();
});

tape("min(array, f) uses the global context", function(test) {
  var results = [];
  arrays.min([1, 2], function() { results.push(this); });
  test.deepEqual(results, [global, global]);
  test.end();
});

function box(value) {
  return {value: value};
}

function unbox(box) {
  return box.value;
}
