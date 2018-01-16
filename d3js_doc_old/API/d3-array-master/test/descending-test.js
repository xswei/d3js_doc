var tape = require("tape"),
    arrays = require("../");

require("./isNaN");

tape("descending(a, b) returns a positive number if a < b", function(test) {
  test.ok(arrays.descending(0, 1) > 0);
  test.ok(arrays.descending("a", "b") > 0);
  test.end();
});

tape("descending(a, b) returns a negative number if a > b", function(test) {
  test.ok(arrays.descending(1, 0) < 0);
  test.ok(arrays.descending("b", "a") < 0);
  test.end();
});

tape("descending(a, b) returns zero if a >= b and a <= b", function(test) {
  test.equal(arrays.descending(0, 0), 0);
  test.equal(arrays.descending("a", "a"), 0);
  test.equal(arrays.descending("0", 0), 0);
  test.equal(arrays.descending(0, "0"), 0);
  test.end();
});

tape("descending(a, b) returns NaN if a and b are not comparable", function(test) {
  test.isNaN(arrays.descending(0, undefined));
  test.isNaN(arrays.descending(undefined, 0));
  test.isNaN(arrays.descending(undefined, undefined));
  test.isNaN(arrays.descending(0, NaN));
  test.isNaN(arrays.descending(NaN, 0));
  test.isNaN(arrays.descending(NaN, NaN));
  test.end();
});
