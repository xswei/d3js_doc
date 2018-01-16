var tape = require("tape"),
    arrays = require("../"),
    OneTimeNumber = require("./OneTimeNumber");

tape("median(array) returns the median value for numbers", function(test) {
  test.equal(arrays.median([1]), 1);
  test.equal(arrays.median([5, 1, 2, 3, 4]), 3);
  test.equal(arrays.median([20, 3]), 11.5);
  test.equal(arrays.median([3, 20]), 11.5);
  test.end();
});

tape("median(array) ignores null, undefined and NaN", function(test) {
  test.equal(arrays.median([NaN, 1, 2, 3, 4, 5]), 3);
  test.equal(arrays.median([1, 2, 3, 4, 5, NaN]), 3);
  test.equal(arrays.median([10, null, 3, undefined, 5, NaN]), 5);
  test.end();
});

tape("median(array) can handle large numbers without overflowing", function(test) {
  test.equal(arrays.median([Number.MAX_VALUE, Number.MAX_VALUE]), Number.MAX_VALUE);
  test.equal(arrays.median([-Number.MAX_VALUE, -Number.MAX_VALUE]), -Number.MAX_VALUE);
  test.end();
});

tape("median(array) returns undefined if the array contains no observed values", function(test) {
  test.equal(arrays.median([]), undefined);
  test.equal(arrays.median([null]), undefined);
  test.equal(arrays.median([undefined]), undefined);
  test.equal(arrays.median([NaN]), undefined);
  test.equal(arrays.median([NaN, NaN]), undefined);
  test.end();
});

tape("median(array) coerces strings to numbers", function(test) {
  test.equal(arrays.median(["1"]), 1);
  test.equal(arrays.median(["5", "1", "2", "3", "4"]), 3);
  test.equal(arrays.median(["20", "3"]), 11.5);
  test.equal(arrays.median(["3", "20"]), 11.5);
  test.equal(arrays.median(["2", "3", "20"]), 3);
  test.equal(arrays.median(["20", "3", "2"]), 3);
  test.end();
});

tape("median(array) coerces values exactly once", function(test) {
  var array = [1, new OneTimeNumber(3)];
  test.equal(arrays.median(array), 2);
  test.equal(arrays.median(array), 1);
  test.end();
});

tape("median(array, f) returns the median value for numbers", function(test) {
  test.equal(arrays.median([1].map(box), unbox), 1);
  test.equal(arrays.median([5, 1, 2, 3, 4].map(box), unbox), 3);
  test.equal(arrays.median([20, 3].map(box), unbox), 11.5);
  test.equal(arrays.median([3, 20].map(box), unbox), 11.5);
  test.end();
});

tape("median(array, f) ignores null, undefined and NaN", function(test) {
  test.equal(arrays.median([NaN, 1, 2, 3, 4, 5].map(box), unbox), 3);
  test.equal(arrays.median([1, 2, 3, 4, 5, NaN].map(box), unbox), 3);
  test.equal(arrays.median([10, null, 3, undefined, 5, NaN].map(box), unbox), 5);
  test.end();
});

tape("median(array, f) can handle large numbers without overflowing", function(test) {
  test.equal(arrays.median([Number.MAX_VALUE, Number.MAX_VALUE].map(box), unbox), Number.MAX_VALUE);
  test.equal(arrays.median([-Number.MAX_VALUE, -Number.MAX_VALUE].map(box), unbox), -Number.MAX_VALUE);
  test.end();
});

tape("median(array, f) returns undefined if the array contains no observed values", function(test) {
  test.equal(arrays.median([].map(box), unbox), undefined);
  test.equal(arrays.median([null].map(box), unbox), undefined);
  test.equal(arrays.median([undefined].map(box), unbox), undefined);
  test.equal(arrays.median([NaN].map(box), unbox), undefined);
  test.equal(arrays.median([NaN, NaN].map(box), unbox), undefined);
  test.end();
});

tape("median(array, f) coerces strings to numbers", function(test) {
  test.equal(arrays.median(["1"].map(box), unbox), 1);
  test.equal(arrays.median(["5", "1", "2", "3", "4"].map(box), unbox), 3);
  test.equal(arrays.median(["20", "3"].map(box), unbox), 11.5);
  test.equal(arrays.median(["3", "20"].map(box), unbox), 11.5);
  test.equal(arrays.median(["2", "3", "20"].map(box), unbox), 3);
  test.equal(arrays.median(["20", "3", "2"].map(box), unbox), 3);
  test.end();
});

tape("median(array, f) coerces values exactly once", function(test) {
  var array = [1, new OneTimeNumber(3)].map(box);
  test.equal(arrays.median(array, unbox), 2);
  test.equal(arrays.median(array, unbox), 1);
  test.end();
});

tape("median(array, f) passes the accessor d, i, and array", function(test) {
  var results = [], array = ["a", "b", "c"];
  arrays.median(array, function(d, i, array) { results.push([d, i, array]); });
  test.deepEqual(results, [["a", 0, array], ["b", 1, array], ["c", 2, array]]);
  test.end();
});

tape("median(array, f) uses the global context", function(test) {
  var results = [];
  arrays.median([1, 2], function() { results.push(this); });
  test.deepEqual(results, [global, global]);
  test.end();
});

function box(value) {
  return {value: value};
}

function unbox(box) {
  return box.value;
}
