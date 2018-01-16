var tape = require("tape");

tape.Test.prototype.inDelta = function(actual, expected, delta) {
  delta = delta || 1e-6;
  this._assert(inDelta(actual, expected, delta), {
    message: "should be in delta " + delta,
    operator: "inDelta",
    actual: actual,
    expected: expected
  });
};

function inDelta(actual, expected, delta) {
  return (Array.isArray(expected) ? inDeltaArray
      : typeof expected === "object" ? inDeltaObject
      : inDeltaNumber)(actual, expected, delta);
}

function inDeltaArray(actual, expected, delta) {
  var n = expected.length, i = -1;
  if (actual.length !== n) return false;
  while (++i < n) if (!inDelta(actual[i], expected[i], delta)) return false;
  return true;
}

function inDeltaObject(actual, expected, delta) {
  for (var i in expected) if (!inDelta(actual[i], expected[i], delta)) return false;
  for (var i in actual) if (!(i in expected)) return false;
  return true;
}

function inDeltaNumber(actual, expected, delta) {
  return actual >= expected - delta && actual <= expected + delta;
}
