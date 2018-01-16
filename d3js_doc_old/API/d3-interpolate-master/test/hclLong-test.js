var tape = require("tape"),
    color = require("d3-color"),
    interpolate = require("../");

tape("interpolateHclLong(a, b) converts a and b to HCL colors", function(test) {
  test.equal(interpolate.interpolateHclLong("steelblue", "brown")(0), color.rgb("steelblue") + "");
  test.equal(interpolate.interpolateHclLong("steelblue", color.hcl("brown"))(1), color.rgb("brown") + "");
  test.equal(interpolate.interpolateHclLong("steelblue", color.rgb("brown"))(1), color.rgb("brown") + "");
  test.end();
});

tape("interpolateHclLong(a, b) interpolates in HCL and returns an RGB string", function(test) {
  test.equal(interpolate.interpolateHclLong("steelblue", "#f00")(0.2), "rgb(0, 144, 174)");
  test.equal(interpolate.interpolateHclLong("rgba(70, 130, 180, 1)", "rgba(255, 0, 0, 0.2)")(0.2), "rgba(0, 144, 174, 0.84)");
  test.end();
});

tape("interpolateHclLong(a, b) does not use the shortest path when interpolating hue", function(test) {
  var i = interpolate.interpolateHclLong(color.hcl(10, 50, 50), color.hcl(350, 50, 50));
  test.equal(i(0.0), "rgb(196, 79, 106)");
  test.equal(i(0.2), "rgb(156, 111, 29)");
  test.equal(i(0.4), "rgb(46, 135, 69)");
  test.equal(i(0.6), "rgb(0, 138, 165)");
  test.equal(i(0.8), "rgb(67, 118, 202)");
  test.equal(i(1.0), "rgb(189, 81, 135)");
  test.end();
});

tape("interpolateHclLong(a, b) uses a’s hue when b’s hue is undefined", function(test) {
  test.equal(interpolate.interpolateHclLong("#f60", color.hcl(NaN, NaN, 0))(0.5), "rgb(155, 0, 0)");
  test.equal(interpolate.interpolateHclLong("#6f0", color.hcl(NaN, NaN, 0))(0.5), "rgb(0, 129, 0)");
  test.end();
});

tape("interpolateHclLong(a, b) uses b’s hue when a’s hue is undefined", function(test) {
  test.equal(interpolate.interpolateHclLong(color.hcl(NaN, NaN, 0), "#f60")(0.5), "rgb(155, 0, 0)");
  test.equal(interpolate.interpolateHclLong(color.hcl(NaN, NaN, 0), "#6f0")(0.5), "rgb(0, 129, 0)");
  test.end();
});

tape("interpolateHclLong(a, b) uses a’s chroma when b’s chroma is undefined", function(test) {
  test.equal(interpolate.interpolateHclLong("#ccc", color.hcl(NaN, NaN, 0))(0.5), "rgb(97, 97, 97)");
  test.equal(interpolate.interpolateHclLong("#f00", color.hcl(NaN, NaN, 0))(0.5), "rgb(166, 0, 0)");
  test.end();
});

tape("interpolateHclLong(a, b) uses b’s chroma when a’s chroma is undefined", function(test) {
  test.equal(interpolate.interpolateHclLong(color.hcl(NaN, NaN, 0), "#ccc")(0.5), "rgb(97, 97, 97)");
  test.equal(interpolate.interpolateHclLong(color.hcl(NaN, NaN, 0), "#f00")(0.5), "rgb(166, 0, 0)");
  test.end();
});

tape("interpolateHclLong(a, b) uses b’s luminance when a’s luminance is undefined", function(test) {
  test.equal(interpolate.interpolateHclLong(null, color.hcl(20, 80, 50))(0.5), "rgb(234, 19, 77)");
  test.end();
});

tape("interpolateHclLong(a, b) uses a’s luminance when b’s luminance is undefined", function(test) {
  test.equal(interpolate.interpolateHclLong(color.hcl(20, 80, 50), null)(0.5), "rgb(234, 19, 77)");
  test.end();
});
