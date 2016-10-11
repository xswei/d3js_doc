var tape = require("tape"),
    seedrandom = require("seedrandom"),
    arrays = require("../");

var random = Math.random;

tape.test("shuffle(array) shuffles the array in-place", function(test) {
  Math.seedrandom("a random seed.");
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  test.equal(arrays.shuffle(numbers), numbers);
  test.deepEqual(numbers, [6, 4, 7, 9, 3, 1, 5, 8, 0, 2]);
  test.end();
});

tape.test("shuffle(array, start) shuffles the subset array[start:] in-place", function(test) {
  Math.seedrandom("a random seed.");
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  test.equal(arrays.shuffle(numbers, 4), numbers);
  test.deepEqual(numbers, [0, 1, 2, 3, 9, 7, 6, 8, 4, 5]);
  test.end();
});

tape.test("shuffle(array, start, end) shuffles the subset array[start:end] in-place", function(test) {
  Math.seedrandom("a random seed.");
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  test.equal(arrays.shuffle(numbers, 3, 8), numbers);
  test.deepEqual(numbers, [0, 1, 2, 5, 7, 6, 3, 4, 8, 9]);
  test.end();
});

tape.test("shuffle() [teardown]", function(test) {
  Math.random = random;
  test.end();
});
