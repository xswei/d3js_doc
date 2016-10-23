var tape = require("tape");

tape.Test.prototype.inDelta = function(actual, expected, delta) {
  this._assert(expected - delta <= actual && actual <= expected + delta, {
    message: "should be in delta",
    operator: "inDelta",
    actual: actual,
    expected: [expected - delta, expected + delta]
  });
};
