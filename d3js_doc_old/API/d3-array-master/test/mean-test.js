var tape = require("tape"),
    arrays = require("../"),
    OneTimeNumber = require("./OneTimeNumber");

tape("mean(array) returns the mean value for numbers", function(test) {
  test.equal(arrays.mean([1]), 1);
  test.equal(arrays.mean([5, 1, 2, 3, 4]), 3);
  test.equal(arrays.mean([20, 3]), 11.5);
  test.equal(arrays.mean([3, 20]), 11.5);
  test.end();
});

tape("mean(array) ignores null, undefined and NaN", function(test) {
  test.equal(arrays.mean([NaN, 1, 2, 3, 4, 5]), 3);
  test.equal(arrays.mean([1, 2, 3, 4, 5, NaN]), 3);
  test.equal(arrays.mean([10, null, 3, undefined, 5, NaN]), 6);
  test.end();
});

tape("mean(array) returns undefined if the array contains no observed values", function(test) {
  test.equal(arrays.mean([]), undefined);
  test.equal(arrays.mean([null]), undefined);
  test.equal(arrays.mean([undefined]), undefined);
  test.equal(arrays.mean([NaN]), undefined);
  test.equal(arrays.mean([NaN, NaN]), undefined);
  test.end();
});

tape("mean(array) coerces values to numbers", function(test) {
  test.equal(arrays.mean(["1"]), 1);
  test.equal(arrays.mean(["5", "1", "2", "3", "4"]), 3);
  test.equal(arrays.mean(["20", "3"]), 11.5);
  test.equal(arrays.mean(["3", "20"]), 11.5);
  test.end();
});

tape("mean(array) coerces values exactly once", function(test) {
  var numbers = [1, new OneTimeNumber(3)];
  test.equal(arrays.mean(numbers), 2);
  test.equal(arrays.mean(numbers), 1);
  test.end();
});

tape("mean(array, f) returns the mean value for numbers", function(test) {
  test.equal(arrays.mean([1].map(box), unbox), 1);
  test.equal(arrays.mean([5, 1, 2, 3, 4].map(box), unbox), 3);
  test.equal(arrays.mean([20, 3].map(box), unbox), 11.5);
  test.equal(arrays.mean([3, 20].map(box), unbox), 11.5);
  test.end();
});

tape("mean(array, f) ignores null, undefined and NaN", function(test) {
  test.equal(arrays.mean([NaN, 1, 2, 3, 4, 5].map(box), unbox), 3);
  test.equal(arrays.mean([1, 2, 3, 4, 5, NaN].map(box), unbox), 3);
  test.equal(arrays.mean([10, null, 3, undefined, 5, NaN].map(box), unbox), 6);
  test.end();
});

tape("mean(array, f) returns undefined if the array contains no observed values", function(test) {
  test.equal(arrays.mean([].map(box), unbox), undefined);
  test.equal(arrays.mean([null].map(box), unbox), undefined);
  test.equal(arrays.mean([undefined].map(box), unbox), undefined);
  test.equal(arrays.mean([NaN].map(box), unbox), undefined);
  test.equal(arrays.mean([NaN, NaN].map(box), unbox), undefined);
  test.end();
});

tape("mean(array, f) coerces values to numbers", function(test) {
  test.equal(arrays.mean(["1"].map(box), unbox), 1);
  test.equal(arrays.mean(["5", "1", "2", "3", "4"].map(box), unbox), 3);
  test.equal(arrays.mean(["20", "3"].map(box), unbox), 11.5);
  test.equal(arrays.mean(["3", "20"].map(box), unbox), 11.5);
  test.end();
});

tape("mean(array, f) coerces values exactly once", function(test) {
  var numbers = [1, new OneTimeNumber(3)].map(box);
  test.equal(arrays.mean(numbers, unbox), 2);
  test.equal(arrays.mean(numbers, unbox), 1);
  test.end();
});

tape("mean(array, f) passes the accessor d, i, and array", function(test) {
  var results = [], strings = ["a", "b", "c"];
  arrays.mean(strings, function(d, i, array) { results.push([d, i, array]); });
  test.deepEqual(results, [["a", 0, strings], ["b", 1, strings], ["c", 2, strings]]);
  test.end();
});

tape("mean(array, f) uses the global context", function(test) {
  var results = [];
  arrays.mean([1, 2], function() { results.push(this); });
  test.deepEqual(results, [global, global]);
  test.end();
});

function box(value) {
  return {value: value};
}

function unbox(box) {
  return box.value;
}
