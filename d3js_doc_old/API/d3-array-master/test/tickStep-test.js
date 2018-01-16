var tape = require("tape"),
    array = require("../");

tape("tickStep(start, stop, count) returns NaN if any argument is NaN", function(test) {
  test.ok(isNaN(array.tickStep(NaN, 1, 1)));
  test.ok(isNaN(array.tickStep(0, NaN, 1)));
  test.ok(isNaN(array.tickStep(0, 1, NaN)));
  test.ok(isNaN(array.tickStep(NaN, NaN, 1)));
  test.ok(isNaN(array.tickStep(0, NaN, NaN)));
  test.ok(isNaN(array.tickStep(NaN, 1, NaN)));
  test.ok(isNaN(array.tickStep(NaN, NaN, NaN)));
  test.end();
});

tape("tickStep(start, stop, count) returns NaN or 0 if start === stop", function(test) {
  test.ok(isNaN(array.tickStep(1, 1, -1)));
  test.ok(isNaN(array.tickStep(1, 1, 0)));
  test.ok(isNaN(array.tickStep(1, 1, NaN)));
  test.equal(array.tickStep(1, 1, 1), 0);
  test.equal(array.tickStep(1, 1, 10), 0);
  test.end();
});

tape("tickStep(start, stop, count) returns 0 or Infinity if count is not positive", function(test) {
  test.equal(array.tickStep(0, 1, -1), Infinity);
  test.equal(array.tickStep(0, 1, 0), Infinity);
  test.end();
});

tape("tickStep(start, stop, count) returns 0 if count is infinity", function(test) {
  test.equal(array.tickStep(0, 1, Infinity), 0);
  test.end();
});

tape("tickStep(start, stop, count) returns approximately count + 1 tickStep when start < stop", function(test) {
  test.equal(array.tickStep(  0,  1, 10), 0.1);
  test.equal(array.tickStep(  0,  1,  9), 0.1);
  test.equal(array.tickStep(  0,  1,  8), 0.1);
  test.equal(array.tickStep(  0,  1,  7), 0.2);
  test.equal(array.tickStep(  0,  1,  6), 0.2);
  test.equal(array.tickStep(  0,  1,  5), 0.2);
  test.equal(array.tickStep(  0,  1,  4), 0.2);
  test.equal(array.tickStep(  0,  1,  3), 0.5);
  test.equal(array.tickStep(  0,  1,  2), 0.5);
  test.equal(array.tickStep(  0,  1,  1), 1.0);
  test.equal(array.tickStep(  0, 10, 10), 1);
  test.equal(array.tickStep(  0, 10,  9), 1);
  test.equal(array.tickStep(  0, 10,  8), 1);
  test.equal(array.tickStep(  0, 10,  7), 2);
  test.equal(array.tickStep(  0, 10,  6), 2);
  test.equal(array.tickStep(  0, 10,  5), 2);
  test.equal(array.tickStep(  0, 10,  4), 2);
  test.equal(array.tickStep(  0, 10,  3), 5);
  test.equal(array.tickStep(  0, 10,  2), 5);
  test.equal(array.tickStep(  0, 10,  1), 10);
  test.equal(array.tickStep(-10, 10, 10),  2);
  test.equal(array.tickStep(-10, 10,  9),  2);
  test.equal(array.tickStep(-10, 10,  8),  2);
  test.equal(array.tickStep(-10, 10,  7),  2);
  test.equal(array.tickStep(-10, 10,  6),  5);
  test.equal(array.tickStep(-10, 10,  5),  5);
  test.equal(array.tickStep(-10, 10,  4),  5);
  test.equal(array.tickStep(-10, 10,  3),  5);
  test.equal(array.tickStep(-10, 10,  2), 10);
  test.equal(array.tickStep(-10, 10,  1), 20);
  test.end();
});

tape("tickStep(start, stop, count) returns -tickStep(stop, start, count)", function(test) {
  test.equal(array.tickStep(  0,  1, 10), -array.tickStep( 1,   0, 10));
  test.equal(array.tickStep(  0,  1,  9), -array.tickStep( 1,   0,  9));
  test.equal(array.tickStep(  0,  1,  8), -array.tickStep( 1,   0,  8));
  test.equal(array.tickStep(  0,  1,  7), -array.tickStep( 1,   0,  7));
  test.equal(array.tickStep(  0,  1,  6), -array.tickStep( 1,   0,  6));
  test.equal(array.tickStep(  0,  1,  5), -array.tickStep( 1,   0,  5));
  test.equal(array.tickStep(  0,  1,  4), -array.tickStep( 1,   0,  4));
  test.equal(array.tickStep(  0,  1,  3), -array.tickStep( 1,   0,  3));
  test.equal(array.tickStep(  0,  1,  2), -array.tickStep( 1,   0,  2));
  test.equal(array.tickStep(  0,  1,  1), -array.tickStep( 1,   0,  1));
  test.equal(array.tickStep(  0, 10, 10), -array.tickStep(10,   0, 10));
  test.equal(array.tickStep(  0, 10,  9), -array.tickStep(10,   0,  9));
  test.equal(array.tickStep(  0, 10,  8), -array.tickStep(10,   0,  8));
  test.equal(array.tickStep(  0, 10,  7), -array.tickStep(10,   0,  7));
  test.equal(array.tickStep(  0, 10,  6), -array.tickStep(10,   0,  6));
  test.equal(array.tickStep(  0, 10,  5), -array.tickStep(10,   0,  5));
  test.equal(array.tickStep(  0, 10,  4), -array.tickStep(10,   0,  4));
  test.equal(array.tickStep(  0, 10,  3), -array.tickStep(10,   0,  3));
  test.equal(array.tickStep(  0, 10,  2), -array.tickStep(10,   0,  2));
  test.equal(array.tickStep(  0, 10,  1), -array.tickStep(10,   0,  1));
  test.equal(array.tickStep(-10, 10, 10), -array.tickStep(10, -10, 10));
  test.equal(array.tickStep(-10, 10,  9), -array.tickStep(10, -10,  9));
  test.equal(array.tickStep(-10, 10,  8), -array.tickStep(10, -10,  8));
  test.equal(array.tickStep(-10, 10,  7), -array.tickStep(10, -10,  7));
  test.equal(array.tickStep(-10, 10,  6), -array.tickStep(10, -10,  6));
  test.equal(array.tickStep(-10, 10,  5), -array.tickStep(10, -10,  5));
  test.equal(array.tickStep(-10, 10,  4), -array.tickStep(10, -10,  4));
  test.equal(array.tickStep(-10, 10,  3), -array.tickStep(10, -10,  3));
  test.equal(array.tickStep(-10, 10,  2), -array.tickStep(10, -10,  2));
  test.equal(array.tickStep(-10, 10,  1), -array.tickStep(10, -10,  1));
  test.end();
});
