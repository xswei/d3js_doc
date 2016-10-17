var tape = require("tape"),
    format = require("../");

tape("precisionFixed(number) returns the expected value", function(test) {
  test.equal(format.precisionFixed(8.9), 0);
  test.equal(format.precisionFixed(1.1), 0);
  test.equal(format.precisionFixed(0.89), 1);
  test.equal(format.precisionFixed(0.11), 1);
  test.equal(format.precisionFixed(0.089), 2);
  test.equal(format.precisionFixed(0.011), 2);
  test.end();
});
