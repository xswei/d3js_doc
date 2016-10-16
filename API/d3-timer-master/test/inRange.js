var tape = require("tape");

tape.Test.prototype.inRange = function(actual, expectedMin, expectedMax) {
  this._assert(expectedMin <= actual && actual <= expectedMax, {
    message: "should be in range",
    operator: "inRange",
    actual: actual,
    expected: [expectedMin, expectedMax]
  });
};
