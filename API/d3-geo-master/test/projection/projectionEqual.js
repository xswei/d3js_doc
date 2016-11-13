var tape = require("tape");

tape.Test.prototype.projectionEqual = function(projection, location, point, delta) {
  this._assert(planarEqual(projection(location), point, delta || 1e-6)
      && sphericalEqual(projection.invert(point), location, delta || 1e-3), {
    message: "should be projected equivalents",
    operator: "planarEqual",
    actual: [projection.invert(point), projection(location)],
    expected: [location, point]
  });
};

function planarEqual(actual, expected, delta) {
  return Array.isArray(actual)
      && actual.length === 2
      && inDelta(actual[0], expected[0], delta)
      && inDelta(actual[1], expected[1], delta);
}

function sphericalEqual(actual, expected, delta) {
  return Array.isArray(actual)
      && actual.length === 2
      && longitudeEqual(actual[0], expected[0], delta)
      && inDelta(actual[1], expected[1], delta);
}

function longitudeEqual(actual, expected, delta) {
  actual = Math.abs(actual - expected) % 360;
  return actual <= delta || actual >= 360 - delta;
}

function inDelta(actual, expected, delta) {
  return Math.abs(actual - expected) <= delta;
}
