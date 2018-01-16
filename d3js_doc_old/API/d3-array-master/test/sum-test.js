var tape = require("tape"),
    arrays = require("../");

tape("sum(array) returns the sum of the specified numbers", function(test) {
  test.equal(arrays.sum([1]), 1);
  test.equal(arrays.sum([5, 1, 2, 3, 4]), 15);
  test.equal(arrays.sum([20, 3]), 23);
  test.equal(arrays.sum([3, 20]), 23);
  test.end();
});

tape("sum(array) observes values that can be coerced to numbers", function(test) {
  test.equal(arrays.sum(["20", "3"]), 23);
  test.equal(arrays.sum(["3", "20"]), 23);
  test.equal(arrays.sum(["3", 20]), 23);
  test.equal(arrays.sum([20, "3"]), 23);
  test.equal(arrays.sum([3, "20"]), 23);
  test.equal(arrays.sum(["20", 3]), 23);
  test.end();
});

tape("sum(array) ignores non-numeric values", function(test) {
  test.equal(arrays.sum(["a", "b", "c"]), 0);
  test.equal(arrays.sum(["a", 1, "2"]), 3);
  test.end();
});

tape("sum(array) ignores null, undefined and NaN", function(test) {
  test.equal(arrays.sum([NaN, 1, 2, 3, 4, 5]), 15);
  test.equal(arrays.sum([1, 2, 3, 4, 5, NaN]), 15);
  test.equal(arrays.sum([10, null, 3, undefined, 5, NaN]), 18);
  test.end();
});

tape("sum(array) returns zero if there are no numbers", function(test) {
  test.equal(arrays.sum([]), 0);
  test.equal(arrays.sum([NaN]), 0);
  test.equal(arrays.sum([undefined]), 0);
  test.equal(arrays.sum([undefined, NaN]), 0);
  test.equal(arrays.sum([undefined, NaN, {}]), 0);
  test.end();
});

tape("sum(array, f) returns the sum of the specified numbers", function(test) {
  test.equal(arrays.sum([1].map(box), unbox), 1);
  test.equal(arrays.sum([5, 1, 2, 3, 4].map(box), unbox), 15);
  test.equal(arrays.sum([20, 3].map(box), unbox), 23);
  test.equal(arrays.sum([3, 20].map(box), unbox), 23);
  test.end();
});

tape("sum(array, f) observes values that can be coerced to numbers", function(test) {
  test.equal(arrays.sum(["20", "3"].map(box), unbox), 23);
  test.equal(arrays.sum(["3", "20"].map(box), unbox), 23);
  test.equal(arrays.sum(["3", 20].map(box), unbox), 23);
  test.equal(arrays.sum([20, "3"].map(box), unbox), 23);
  test.equal(arrays.sum([3, "20"].map(box), unbox), 23);
  test.equal(arrays.sum(["20", 3].map(box), unbox), 23);
  test.end();
});

tape("sum(array, f) ignores non-numeric values", function(test) {
  test.equal(arrays.sum(["a", "b", "c"].map(box), unbox), 0);
  test.equal(arrays.sum(["a", 1, "2"].map(box), unbox), 3);
  test.end();
});

tape("sum(array, f) ignores null, undefined and NaN", function(test) {
  test.equal(arrays.sum([NaN, 1, 2, 3, 4, 5].map(box), unbox), 15);
  test.equal(arrays.sum([1, 2, 3, 4, 5, NaN].map(box), unbox), 15);
  test.equal(arrays.sum([10, null, 3, undefined, 5, NaN].map(box), unbox), 18);
  test.end();
});

tape("sum(array, f) returns zero if there are no numbers", function(test) {
  test.equal(arrays.sum([].map(box), unbox), 0);
  test.equal(arrays.sum([NaN].map(box), unbox), 0);
  test.equal(arrays.sum([undefined].map(box), unbox), 0);
  test.equal(arrays.sum([undefined, NaN].map(box), unbox), 0);
  test.equal(arrays.sum([undefined, NaN, {}].map(box), unbox), 0);
  test.end();
});

tape("sum(array, f) passes the accessor d, i, and array", function(test) {
  var results = [], array = ["a", "b", "c"];
  arrays.sum(array, function(d, i, array) { results.push([d, i, array]); });
  test.deepEqual(results, [["a", 0, array], ["b", 1, array], ["c", 2, array]]);
  test.end();
});

tape("sum(array, f) uses the global context", function(test) {
  var results = [];
  arrays.sum([1, 2], function() { results.push(this); });
  test.deepEqual(results, [global, global]);
  test.end();
});

function box(value) {
  return {value: value};
}

function unbox(box) {
  return box.value;
}
