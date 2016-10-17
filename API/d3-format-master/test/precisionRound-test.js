var tape = require("tape"),
    format = require("../");

tape("precisionRound(step, max) returns the expected value", function(test) {
  test.equal(format.precisionRound(0.1, 1.1), 2); // "1.0", "1.1"
  test.equal(format.precisionRound(0.01, 0.99), 2); // "0.98", "0.99"
  test.equal(format.precisionRound(0.01, 1.00), 2); // "0.99", "1.0"
  test.equal(format.precisionRound(0.01, 1.01), 3); // "1.00", "1.01"
  test.end();
});
