var tape = require("tape"),
    arrays = require("../");

tape("pairs(array) returns the empty array if input array has fewer than two elements", function(test) {
  test.deepEqual(arrays.pairs([]), []);
  test.deepEqual(arrays.pairs([1]), []);
  test.end();
});

tape("pairs(array) returns pairs of adjacent elements in the given array", function(test) {
  var a = {}, b = {}, c = {}, d = {};
  test.deepEqual(arrays.pairs([1, 2]), [[1, 2]]);
  test.deepEqual(arrays.pairs([1, 2, 3]), [[1, 2], [2, 3]]);
  test.deepEqual(arrays.pairs([a, b, c, d]), [[a, b], [b, c], [c, d]]);
  test.end();
});

tape("pairs(array) includes null or undefined elements in pairs", function(test) {
  test.deepEqual(arrays.pairs([1, null, 2]), [[1, null], [null, 2]]);
  test.deepEqual(arrays.pairs([1, 2, undefined]), [[1, 2], [2, undefined]]);
  test.end();
});
