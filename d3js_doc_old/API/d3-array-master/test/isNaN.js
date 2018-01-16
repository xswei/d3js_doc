var tape = require("tape");

tape.Test.prototype.isNaN = function(actual) {
  this._assert(isNaN(actual) && actual !== actual, {
    message: "should be NaN",
    operator: "isNaN",
    actual: actual,
    expected: NaN
  });
};
