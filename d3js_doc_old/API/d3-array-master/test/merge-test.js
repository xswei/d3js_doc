var tape = require("tape"),
    arrays = require("../");

tape("merge(arrays) merges an array of arrays", function(test) {
  var a = {}, b = {}, c = {}, d = {}, e = {}, f = {};
  test.deepEqual(arrays.merge([[a], [b, c], [d, e, f]]), [a, b, c, d, e, f]);
  test.end();
});

tape("merge(arrays) returns a new array when zero arrays are passed", function(test) {
  var input = [],
      output = arrays.merge(input);
  test.deepEqual(output, []);
  input.push([0.1]);
  test.deepEqual(input, [[0.1]]);
  test.deepEqual(output, []);
  test.end();
});

tape("merge(arrays) returns a new array when one array is passed", function(test) {
  var input = [[1, 2, 3]],
      output = arrays.merge(input);
  test.deepEqual(output, [1, 2, 3]);
  input.push([4.1]);
  input[0].push(3.1);
  test.deepEqual(input, [[1, 2, 3, 3.1], [4.1]]);
  test.deepEqual(output, [1, 2, 3]);
  test.end();
});

tape("merge(arrays) returns a new array when two or more arrays are passed", function(test) {
  var input = [[1, 2, 3], [4, 5], [6]],
      output = arrays.merge(input);
  test.deepEqual(output, [1, 2, 3, 4, 5, 6]);
  input.push([7.1]);
  input[0].push(3.1);
  input[1].push(5.1);
  input[2].push(6.1);
  test.deepEqual(input, [[1, 2, 3, 3.1], [4, 5, 5.1], [6, 6.1], [7.1]]);
  test.deepEqual(output, [1, 2, 3, 4, 5, 6]);
  test.end();
});

tape("merge(arrays) does not modify the input arrays", function(test) {
  var input = [[1, 2, 3], [4, 5], [6]];
  arrays.merge(input);
  test.deepEqual(input, [[1, 2, 3], [4, 5], [6]]);
  test.end();
});
