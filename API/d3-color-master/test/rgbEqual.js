var tape = require("tape"),
    color = require("../");

tape.Test.prototype.rgbStrictEqual = function(actual, r, g, b, opacity) {
  this._assert(actual instanceof color.rgb
      && (isNaN(r) ? isNaN(actual.r) && actual.r !== actual.r : actual.r === r)
      && (isNaN(g) ? isNaN(actual.g) && actual.g !== actual.g : actual.g === g)
      && (isNaN(b) ? isNaN(actual.b) && actual.b !== actual.b : actual.b === b)
      && (isNaN(opacity) ? isNaN(actual.opacity) && actual.opacity !== actual.opacity : actual.opacity === opacity), {
    message: "should be equal",
    operator: "rgbStrictEqual",
    actual: [actual.r, actual.g, actual.b, actual.opacity],
    expected: [r, g, b, opacity]
  });
};

tape.Test.prototype.rgbEqual = function(actual, r, g, b, opacity) {
  this._assert(actual instanceof color.rgb
      && (isNaN(r) ? isNaN(actual.r) && actual.r !== actual.r : Math.round(actual.r) === Math.round(r))
      && (isNaN(g) ? isNaN(actual.g) && actual.g !== actual.g : Math.round(actual.g) === Math.round(g))
      && (isNaN(b) ? isNaN(actual.b) && actual.b !== actual.b : Math.round(actual.b) === Math.round(b))
      && (isNaN(opacity) ? isNaN(actual.opacity) && actual.opacity !== actual.opacity : actual.opacity === opacity), {
    message: "should be equal",
    operator: "rgbEqual",
    actual: [Math.round(actual.r), Math.round(actual.g), Math.round(actual.b), actual.opacity],
    expected: [Math.round(r), Math.round(g), Math.round(b), opacity]
  });
};
