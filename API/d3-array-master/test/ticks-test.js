var tape = require("tape"),
    array = require("../");

tape("ticks(start, stop, count) returns the empty array if any argument is NaN", function(test) {
  test.deepEqual(array.ticks(NaN, 1, 1), []);
  test.deepEqual(array.ticks(0, NaN, 1), []);
  test.deepEqual(array.ticks(0, 1, NaN), []);
  test.deepEqual(array.ticks(NaN, NaN, 1), []);
  test.deepEqual(array.ticks(0, NaN, NaN), []);
  test.deepEqual(array.ticks(NaN, 1, NaN), []);
  test.deepEqual(array.ticks(NaN, NaN, NaN), []);
  test.end();
});

tape("ticks(start, stop, count) returns the empty array if start === stop", function(test) {
  test.deepEqual(array.ticks(1, 1, -1), []);
  test.deepEqual(array.ticks(1, 1, 0), []);
  test.deepEqual(array.ticks(1, 1, NaN), []);
  test.deepEqual(array.ticks(1, 1, 1), []);
  test.deepEqual(array.ticks(1, 1, 10), []);
  test.end();
});

tape("ticks(start, stop, count) returns the empty array if count is not positive", function(test) {
  test.deepEqual(array.ticks(0, 1, 0), []);
  test.deepEqual(array.ticks(0, 1, -1), []);
  test.deepEqual(array.ticks(0, 1, NaN), []);
  test.end();
});

tape("ticks(start, stop, count) returns the empty array if count is infinity", function(test) {
  test.deepEqual(array.ticks(0, 1, Infinity), []);
  test.end();
});

tape("ticks(start, stop, count) returns approximately count + 1 ticks when start < stop", function(test) {
  test.deepEqual(array.ticks(  0,  1, 10).map(round), [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]);
  test.deepEqual(array.ticks(  0,  1,  9).map(round), [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]);
  test.deepEqual(array.ticks(  0,  1,  8).map(round), [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]);
  test.deepEqual(array.ticks(  0,  1,  7).map(round), [0.0,      0.2,      0.4,      0.6,      0.8,      1.0]);
  test.deepEqual(array.ticks(  0,  1,  6).map(round), [0.0,      0.2,      0.4,      0.6,      0.8,      1.0]);
  test.deepEqual(array.ticks(  0,  1,  5).map(round), [0.0,      0.2,      0.4,      0.6,      0.8,      1.0]);
  test.deepEqual(array.ticks(  0,  1,  4).map(round), [0.0,      0.2,      0.4,      0.6,      0.8,      1.0]);
  test.deepEqual(array.ticks(  0,  1,  3).map(round), [0.0,                     0.5,                     1.0]);
  test.deepEqual(array.ticks(  0,  1,  2).map(round), [0.0,                     0.5,                     1.0]);
  test.deepEqual(array.ticks(  0,  1,  1).map(round), [0.0,                                              1.0]);
  test.deepEqual(array.ticks(  0, 10, 10).map(round), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  test.deepEqual(array.ticks(  0, 10,  9).map(round), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  test.deepEqual(array.ticks(  0, 10,  8).map(round), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  test.deepEqual(array.ticks(  0, 10,  7).map(round), [0,    2,    4,    6,    8,    10]);
  test.deepEqual(array.ticks(  0, 10,  6).map(round), [0,    2,    4,    6,    8,    10]);
  test.deepEqual(array.ticks(  0, 10,  5).map(round), [0,    2,    4,    6,    8,    10]);
  test.deepEqual(array.ticks(  0, 10,  4).map(round), [0,    2,    4,    6,    8,    10]);
  test.deepEqual(array.ticks(  0, 10,  3).map(round), [0,             5,             10]);
  test.deepEqual(array.ticks(  0, 10,  2).map(round), [0,             5,             10]);
  test.deepEqual(array.ticks(  0, 10,  1).map(round), [0,                            10]);
  test.deepEqual(array.ticks(-10, 10, 10).map(round), [-10, -8, -6, -4, -2, 0, 2, 4, 6, 8, 10]);
  test.deepEqual(array.ticks(-10, 10,  9).map(round), [-10, -8, -6, -4, -2, 0, 2, 4, 6, 8, 10]);
  test.deepEqual(array.ticks(-10, 10,  8).map(round), [-10, -8, -6, -4, -2, 0, 2, 4, 6, 8, 10]);
  test.deepEqual(array.ticks(-10, 10,  7).map(round), [-10, -8, -6, -4, -2, 0, 2, 4, 6, 8, 10]);
  test.deepEqual(array.ticks(-10, 10,  6).map(round), [-10,       -5,       0,      5,     10]);
  test.deepEqual(array.ticks(-10, 10,  5).map(round), [-10,       -5,       0,      5,     10]);
  test.deepEqual(array.ticks(-10, 10,  4).map(round), [-10,       -5,       0,      5,     10]);
  test.deepEqual(array.ticks(-10, 10,  3).map(round), [-10,       -5,       0,      5,     10]);
  test.deepEqual(array.ticks(-10, 10,  2).map(round), [-10,                 0,             10]);
  test.deepEqual(array.ticks(-10, 10,  1).map(round), [                     0,               ]);
  test.end();
});

tape("ticks(start, stop, count) returns the reverse of ticks(stop, start, count)", function(test) {
  test.deepEqual(array.ticks( 1,   0, 10).map(round), array.ticks(  0,  1, 10).reverse().map(round));
  test.deepEqual(array.ticks( 1,   0,  9).map(round), array.ticks(  0,  1,  9).reverse().map(round));
  test.deepEqual(array.ticks( 1,   0,  8).map(round), array.ticks(  0,  1,  8).reverse().map(round));
  test.deepEqual(array.ticks( 1,   0,  7).map(round), array.ticks(  0,  1,  7).reverse().map(round));
  test.deepEqual(array.ticks( 1,   0,  6).map(round), array.ticks(  0,  1,  6).reverse().map(round));
  test.deepEqual(array.ticks( 1,   0,  5).map(round), array.ticks(  0,  1,  5).reverse().map(round));
  test.deepEqual(array.ticks( 1,   0,  4).map(round), array.ticks(  0,  1,  4).reverse().map(round));
  test.deepEqual(array.ticks( 1,   0,  3).map(round), array.ticks(  0,  1,  3).reverse().map(round));
  test.deepEqual(array.ticks( 1,   0,  2).map(round), array.ticks(  0,  1,  2).reverse().map(round));
  test.deepEqual(array.ticks( 1,   0,  1).map(round), array.ticks(  0,  1,  1).reverse().map(round));
  test.deepEqual(array.ticks(10,   0, 10).map(round), array.ticks(  0, 10, 10).reverse().map(round));
  test.deepEqual(array.ticks(10,   0,  9).map(round), array.ticks(  0, 10,  9).reverse().map(round));
  test.deepEqual(array.ticks(10,   0,  8).map(round), array.ticks(  0, 10,  8).reverse().map(round));
  test.deepEqual(array.ticks(10,   0,  7).map(round), array.ticks(  0, 10,  7).reverse().map(round));
  test.deepEqual(array.ticks(10,   0,  6).map(round), array.ticks(  0, 10,  6).reverse().map(round));
  test.deepEqual(array.ticks(10,   0,  5).map(round), array.ticks(  0, 10,  5).reverse().map(round));
  test.deepEqual(array.ticks(10,   0,  4).map(round), array.ticks(  0, 10,  4).reverse().map(round));
  test.deepEqual(array.ticks(10,   0,  3).map(round), array.ticks(  0, 10,  3).reverse().map(round));
  test.deepEqual(array.ticks(10,   0,  2).map(round), array.ticks(  0, 10,  2).reverse().map(round));
  test.deepEqual(array.ticks(10,   0,  1).map(round), array.ticks(  0, 10,  1).reverse().map(round));
  test.deepEqual(array.ticks(10, -10, 10).map(round), array.ticks(-10, 10, 10).reverse().map(round));
  test.deepEqual(array.ticks(10, -10,  9).map(round), array.ticks(-10, 10,  9).reverse().map(round));
  test.deepEqual(array.ticks(10, -10,  8).map(round), array.ticks(-10, 10,  8).reverse().map(round));
  test.deepEqual(array.ticks(10, -10,  7).map(round), array.ticks(-10, 10,  7).reverse().map(round));
  test.deepEqual(array.ticks(10, -10,  6).map(round), array.ticks(-10, 10,  6).reverse().map(round));
  test.deepEqual(array.ticks(10, -10,  5).map(round), array.ticks(-10, 10,  5).reverse().map(round));
  test.deepEqual(array.ticks(10, -10,  4).map(round), array.ticks(-10, 10,  4).reverse().map(round));
  test.deepEqual(array.ticks(10, -10,  3).map(round), array.ticks(-10, 10,  3).reverse().map(round));
  test.deepEqual(array.ticks(10, -10,  2).map(round), array.ticks(-10, 10,  2).reverse().map(round));
  test.deepEqual(array.ticks(10, -10,  1).map(round), array.ticks(-10, 10,  1).reverse().map(round));
  test.end();
});

function round(x) {
  return Math.round(x * 1e12) / 1e12;
}
