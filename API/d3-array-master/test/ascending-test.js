var tape = require("tape"),
    arrays = require("../");

require("./isNaN");

tape("ascending(a, b) returns a negative number if a < b", function(test) {
  test.ok(arrays.ascending(0, 1) < 0);
  test.ok(arrays.ascending("a", "b") < 0);
  test.end();
});

tape("ascending(a, b) returns a positive number if a > b", function(test) {
  test.ok(arrays.ascending(1, 0) > 0);
  test.ok(arrays.ascending("b", "a") > 0);
  test.end();
});

tape("ascending(a, b) returns zero if a >= b and a <= b", function(test) {
  test.equal(arrays.ascending(0, 0), 0);
  test.equal(arrays.ascending("a", "a"), 0);
  test.equal(arrays.ascending("0", 0), 0);
  test.equal(arrays.ascending(0, "0"), 0);
  test.end();
});

tape("ascending(a, b) returns NaN if a and b are not comparable", function(test) {
  test.isNaN(arrays.ascending(0, undefined));
  test.isNaN(arrays.ascending(undefined, 0));
  test.isNaN(arrays.ascending(undefined, undefined));
  test.isNaN(arrays.ascending(0, NaN));
  test.isNaN(arrays.ascending(NaN, 0));
  test.isNaN(arrays.ascending(NaN, NaN));
  test.end();
});
