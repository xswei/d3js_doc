var tape = require("tape"),
    color = require("d3-color"),
    interpolate = require("../");

tape("interpolateRgb(a, b) converts a and b to RGB colors", function(test) {
  test.equal(interpolate.interpolateRgb("steelblue", "brown")(0), color.rgb("steelblue") + "");
  test.equal(interpolate.interpolateRgb("steelblue", color.hsl("brown"))(1), color.rgb("brown") + "");
  test.equal(interpolate.interpolateRgb("steelblue", color.rgb("brown"))(1), color.rgb("brown") + "");
  test.end();
});

tape("interpolateRgb(a, b) interpolates in RGB and returns an RGB string", function(test) {
  test.equal(interpolate.interpolateRgb("steelblue", "#f00")(0.2), "rgb(107, 104, 144)");
  test.equal(interpolate.interpolateRgb("rgba(70, 130, 180, 1)", "rgba(255, 0, 0, 0.2)")(0.2), "rgba(107, 104, 144, 0.84)");
  test.end();
});

tape("interpolateRgb(a, b) uses b’s channel value when a’s channel value is undefined", function(test) {
  test.equal(interpolate.interpolateRgb(null, color.rgb(20, 40, 60))(0.5), color.rgb(20, 40, 60) + "");
  test.equal(interpolate.interpolateRgb(color.rgb(NaN, 20, 40), color.rgb(60, 80, 100))(0.5), color.rgb(60, 50, 70) + "");
  test.equal(interpolate.interpolateRgb(color.rgb(20, NaN, 40), color.rgb(60, 80, 100))(0.5), color.rgb(40, 80, 70) + "");
  test.equal(interpolate.interpolateRgb(color.rgb(20, 40, NaN), color.rgb(60, 80, 100))(0.5), color.rgb(40, 60, 100) + "");
  test.end();
});

tape("interpolateRgb(a, b) uses a’s channel value when b’s channel value is undefined", function(test) {
  test.equal(interpolate.interpolateRgb(color.rgb(20, 40, 60), null)(0.5), color.rgb(20, 40, 60) + "");
  test.equal(interpolate.interpolateRgb(color.rgb(60, 80, 100), color.rgb(NaN, 20, 40))(0.5), color.rgb(60, 50, 70) + "");
  test.equal(interpolate.interpolateRgb(color.rgb(60, 80, 100), color.rgb(20, NaN, 40))(0.5), color.rgb(40, 80, 70) + "");
  test.equal(interpolate.interpolateRgb(color.rgb(60, 80, 100), color.rgb(20, 40, NaN))(0.5), color.rgb(40, 60, 100) + "");
  test.end();
});

tape("interpolateRgb.gamma(3)(a, b) returns the expected values", function(test) {
  test.equal(interpolate.interpolateRgb.gamma(3)("steelblue", "#f00")(0.2), "rgb(153, 121, 167)");
  test.end();
});

tape("interpolateRgb.gamma(g) coerces the specified gamma to a number", function(test) {
  test.equal(interpolate.interpolateRgb.gamma({valueOf: function() { return 3; }})("steelblue", "#f00")(0.2), "rgb(153, 121, 167)");
  test.end();
});

tape("interpolateRgb(a, b) is equivalent to interpolateRgb.gamma(1)(a, b)", function(test) {
  var i0 = interpolate.interpolateRgb.gamma(1)("purple", "orange"),
      i1 = interpolate.interpolateRgb("purple", "orange");
  test.equal(i1(0.0), i0(0.0));
  test.equal(i1(0.2), i0(0.2));
  test.equal(i1(0.4), i0(0.4));
  test.equal(i1(0.6), i0(0.6));
  test.equal(i1(0.8), i0(0.8));
  test.equal(i1(1.0), i0(1.0));
  test.end();
});
