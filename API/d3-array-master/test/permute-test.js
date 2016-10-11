var tape = require("tape"),
    arrays = require("../");

tape("permute(array) permutes according to the specified index", function(test) {
  test.deepEqual(arrays.permute([3, 4, 5], [2, 1, 0]), [5, 4, 3]);
  test.deepEqual(arrays.permute([3, 4, 5], [2, 0, 1]), [5, 3, 4]);
  test.deepEqual(arrays.permute([3, 4, 5], [0, 1, 2]), [3, 4, 5]);
  test.end();
});

tape("permute(array) does not modify the input array", function(test) {
  var input = [3, 4, 5];
  arrays.permute(input, [2, 1, 0]);
  test.deepEqual(input, [3, 4, 5]);
  test.end();
});

tape("permute(array) can duplicate input values", function(test) {
  test.deepEqual(arrays.permute([3, 4, 5], [0, 1, 0]), [3, 4, 3]);
  test.deepEqual(arrays.permute([3, 4, 5], [2, 2, 2]), [5, 5, 5]);
  test.deepEqual(arrays.permute([3, 4, 5], [0, 1, 1]), [3, 4, 4]);
  test.end();
});

tape("permute(array) can return more elements", function(test) {
  test.deepEqual(arrays.permute([3, 4, 5], [0, 0, 1, 2]), [3, 3, 4, 5]);
  test.deepEqual(arrays.permute([3, 4, 5], [0, 1, 1, 1]), [3, 4, 4, 4]);
  test.end();
});

tape("permute(array) can return fewer elements", function(test) {
  test.deepEqual(arrays.permute([3, 4, 5], [0]), [3]);
  test.deepEqual(arrays.permute([3, 4, 5], [1, 2]), [4, 5]);
  test.deepEqual(arrays.permute([3, 4, 5], []), []);
  test.end();
});

tape("permute(array) can return undefined elements", function(test) {
  test.deepEqual(arrays.permute([3, 4, 5], [10]), [undefined]);
  test.deepEqual(arrays.permute([3, 4, 5], [-1]), [undefined]);
  test.deepEqual(arrays.permute([3, 4, 5], [0, -1]), [3, undefined]);
  test.end();
});
