var tape = require("tape"),
    interpolate = require("../");

tape("interpolateArray(a, b) interpolates defined elements in a and b", function(test) {
  test.deepEqual(interpolate.interpolateArray([2, 12], [4, 24])(0.5), [3, 18]);
  test.end();
});

tape("interpolateArray(a, b) interpolates nested objects and arrays", function(test) {
  test.deepEqual(interpolate.interpolateArray([[2, 12]], [[4, 24]])(0.5), [[3, 18]]);
  test.deepEqual(interpolate.interpolateArray([{foo: [2, 12]}], [{foo: [4, 24]}])(0.5), [{foo: [3, 18]}]);
  test.end();
});

tape("interpolateArray(a, b) ignores elements in a that are not in b", function(test) {
  test.deepEqual(interpolate.interpolateArray([2, 12, 12], [4, 24])(0.5), [3, 18]);
  test.end();
});

tape("interpolateArray(a, b) uses constant elements in b that are not in a", function(test) {
  test.deepEqual(interpolate.interpolateArray([2, 12], [4, 24, 12])(0.5), [3, 18, 12]);
  test.end();
});

tape("interpolateArray(a, b) treats undefined as an empty array", function(test) {
  test.deepEqual(interpolate.interpolateArray(undefined, [2, 12])(0.5), [2, 12]);
  test.deepEqual(interpolate.interpolateArray([2, 12], undefined)(0.5), []);
  test.deepEqual(interpolate.interpolateArray(undefined, undefined)(0.5), []);
  test.end();
});

tape("interpolateArray(a, b) interpolates array-like objects", function(test) {
  var array = new Float64Array(2),
      args = (function() { return arguments; })(2, 12);
  array[0] = 2;
  array[1] = 12;
  test.deepEqual(interpolate.interpolateArray(array, [4, 24])(0.5), [3, 18]);
  test.deepEqual(interpolate.interpolateArray(args, [4, 24])(0.5), [3, 18]);
  test.end();
});
