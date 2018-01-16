var tape = require("tape"),
    arrays = require("../");

tape("max(array) returns the greatest numeric value for numbers", function(test) {
  test.deepEqual(arrays.max([1]), 1);
  test.deepEqual(arrays.max([5, 1, 2, 3, 4]), 5);
  test.deepEqual(arrays.max([20, 3]), 20);
  test.deepEqual(arrays.max([3, 20]), 20);
  test.end();
});

tape("max(array) returns the greatest lexicographic value for strings", function(test) {
  test.deepEqual(arrays.max(["c", "a", "b"]), "c");
  test.deepEqual(arrays.max(["20", "3"]), "3");
  test.deepEqual(arrays.max(["3", "20"]), "3");
  test.end();
});

tape("max(array) ignores null, undefined and NaN", function(test) {
  var o = {valueOf: function() { return NaN; }};
  test.deepEqual(arrays.max([NaN, 1, 2, 3, 4, 5]), 5);
  test.deepEqual(arrays.max([o, 1, 2, 3, 4, 5]), 5);
  test.deepEqual(arrays.max([1, 2, 3, 4, 5, NaN]), 5);
  test.deepEqual(arrays.max([1, 2, 3, 4, 5, o]), 5);
  test.deepEqual(arrays.max([10, null, 3, undefined, 5, NaN]), 10);
  test.deepEqual(arrays.max([-1, null, -3, undefined, -5, NaN]), -1);
  test.end();
});

tape("max(array) compares heterogenous types as numbers", function(test) {
  test.equal(arrays.max([20, "3"]), 20);
  test.equal(arrays.max(["20", 3]), "20");
  test.equal(arrays.max([3, "20"]), "20");
  test.equal(arrays.max(["3", 20]), 20);
  test.end();
});

tape("max(array) returns undefined if the array contains no numbers", function(test) {
  test.equal(arrays.max([]), undefined);
  test.equal(arrays.max([null]), undefined);
  test.equal(arrays.max([undefined]), undefined);
  test.equal(arrays.max([NaN]), undefined);
  test.equal(arrays.max([NaN, NaN]), undefined);
  test.end();
});

tape("max(array, f) returns the greatest numeric value for numbers", function(test) {
  test.deepEqual(arrays.max([1].map(box), unbox), 1);
  test.deepEqual(arrays.max([5, 1, 2, 3, 4].map(box), unbox), 5);
  test.deepEqual(arrays.max([20, 3].map(box), unbox), 20);
  test.deepEqual(arrays.max([3, 20].map(box), unbox), 20);
  test.end();
});

tape("max(array, f) returns the greatest lexicographic value for strings", function(test) {
  test.deepEqual(arrays.max(["c", "a", "b"].map(box), unbox), "c");
  test.deepEqual(arrays.max(["20", "3"].map(box), unbox), "3");
  test.deepEqual(arrays.max(["3", "20"].map(box), unbox), "3");
  test.end();
});

tape("max(array, f) ignores null, undefined and NaN", function(test) {
  var o = {valueOf: function() { return NaN; }};
  test.deepEqual(arrays.max([NaN, 1, 2, 3, 4, 5].map(box), unbox), 5);
  test.deepEqual(arrays.max([o, 1, 2, 3, 4, 5].map(box), unbox), 5);
  test.deepEqual(arrays.max([1, 2, 3, 4, 5, NaN].map(box), unbox), 5);
  test.deepEqual(arrays.max([1, 2, 3, 4, 5, o].map(box), unbox), 5);
  test.deepEqual(arrays.max([10, null, 3, undefined, 5, NaN].map(box), unbox), 10);
  test.deepEqual(arrays.max([-1, null, -3, undefined, -5, NaN].map(box), unbox), -1);
  test.end();
});

tape("max(array, f) compares heterogenous types as numbers", function(test) {
  test.equal(arrays.max([20, "3"].map(box), unbox), 20);
  test.equal(arrays.max(["20", 3].map(box), unbox), "20");
  test.equal(arrays.max([3, "20"].map(box), unbox), "20");
  test.equal(arrays.max(["3", 20].map(box), unbox), 20);
  test.end();
});

tape("max(array, f) returns undefined if the array contains no observed values", function(test) {
  test.equal(arrays.max([].map(box), unbox), undefined);
  test.equal(arrays.max([null].map(box), unbox), undefined);
  test.equal(arrays.max([undefined].map(box), unbox), undefined);
  test.equal(arrays.max([NaN].map(box), unbox), undefined);
  test.equal(arrays.max([NaN, NaN].map(box), unbox), undefined);
  test.end();
});

tape("max(array, f) passes the accessor d, i, and array", function(test) {
  var results = [], array = ["a", "b", "c"];
  arrays.max(array, function(d, i, array) { results.push([d, i, array]); });
  test.deepEqual(results, [["a", 0, array], ["b", 1, array], ["c", 2, array]]);
  test.end();
});

tape("max(array, f) uses the global context", function(test) {
  var results = [];
  arrays.max([1, 2], function() { results.push(this); });
  test.deepEqual(results, [global, global]);
  test.end();
});

function box(value) {
  return {value: value};
}

function unbox(box) {
  return box.value;
}
