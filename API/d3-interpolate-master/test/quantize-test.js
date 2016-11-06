var tape = require("tape"),
    d3 = require("../");

tape("quantize(interpolate, n) returns n uniformly-spaced samples from the specified interpolator", function(test) {
  test.deepEqual(d3.quantize(d3.interpolateNumber(0, 1), 5), [
    0 / 4,
    1 / 4,
    2 / 4,
    3 / 4,
    4 / 4
  ]);
  test.deepEqual(d3.quantize(d3.interpolateRgb("steelblue", "brown"), 5), [
    "rgb(70, 130, 180)",
    "rgb(94, 108, 146)",
    "rgb(118, 86, 111)",
    "rgb(141, 64, 77)",
    "rgb(165, 42, 42)"
  ]);
  test.end();
});
