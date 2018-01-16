var tape = require("tape"),
    format = require("../");

// A generalization from µ to all prefixes:
// test.equal(format.precisionPrefix(1e-6, 1e-6), 0); // 1µ
// test.equal(format.precisionPrefix(1e-6, 1e-7), 0); // 10µ
// test.equal(format.precisionPrefix(1e-6, 1e-8), 0); // 100µ
tape("precisionPrefix(step, value) returns zero if step has the same units as value", function(test) {
  for (var i = -24; i <= 24; i += 3) {
    for (var j = i; j < i + 3; ++j) {
      test.equal(format.precisionPrefix(+("1e" + i), +("1e" + j)), 0);
    }
  }
  test.end();
});

// A generalization from µ to all prefixes:
// test.equal(format.precisionPrefix(1e-9, 1e-6), 3); // 0.001µ
// test.equal(format.precisionPrefix(1e-8, 1e-6), 2); // 0.01µ
// test.equal(format.precisionPrefix(1e-7, 1e-6), 1); // 0.1µ
tape("precisionPrefix(step, value) returns greater than zero if fractional digits are needed", function(test) {
  for (var i = -24; i <= 24; i += 3) {
    for (var j = i - 4; j < i; ++j) {
      test.equal(format.precisionPrefix(+("1e" + j), +("1e" + i)), i - j);
    }
  }
  test.end();
});

tape("precisionPrefix(step, value) returns the expected precision when value is less than one yocto", function(test) {
  test.equal(format.precisionPrefix(1e-24, 1e-24), 0); // 1y
  test.equal(format.precisionPrefix(1e-25, 1e-25), 1); // 0.1y
  test.equal(format.precisionPrefix(1e-26, 1e-26), 2); // 0.01y
  test.equal(format.precisionPrefix(1e-27, 1e-27), 3); // 0.001y
  test.equal(format.precisionPrefix(1e-28, 1e-28), 4); // 0.0001y
  test.end();
});

tape("precisionPrefix(step, value) returns the expected precision when value is greater than than one yotta", function(test) {
  test.equal(format.precisionPrefix(1e24, 1e24), 0); // 1Y
  test.equal(format.precisionPrefix(1e24, 1e25), 0); // 10Y
  test.equal(format.precisionPrefix(1e24, 1e26), 0); // 100Y
  test.equal(format.precisionPrefix(1e24, 1e27), 0); // 1000Y
  test.equal(format.precisionPrefix(1e23, 1e27), 1); // 1000.0Y
  test.end();
});
