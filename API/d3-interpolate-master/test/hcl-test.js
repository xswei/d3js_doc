var tape = require("tape"),
    color = require("d3-color"),
    interpolate = require("../");

tape("interpolateHcl(a, b) converts a and b to HCL colors", function(test) {
  test.equal(interpolate.interpolateHcl("steelblue", "brown")(0), color.rgb("steelblue") + "");
  test.equal(interpolate.interpolateHcl("steelblue", color.hcl("brown"))(1), color.rgb("brown") + "");
  test.equal(interpolate.interpolateHcl("steelblue", color.rgb("brown"))(1), color.rgb("brown") + "");
  test.end();
});

tape("interpolateHcl(a, b) interpolates in HCL and returns an RGB string", function(test) {
  test.equal(interpolate.interpolateHcl("steelblue", "#f00")(0.2), "rgb(105, 120, 201)");
  test.equal(interpolate.interpolateHcl("rgba(70, 130, 180, 1)", "rgba(255, 0, 0, 0.2)")(0.2), "rgba(105, 120, 201, 0.84)");
  test.end();
});

tape("interpolateHcl(a, b) uses the shortest path when interpolating hue difference greater than 180°", function(test) {
  var i = interpolate.interpolateHcl(color.hcl(10, 50, 50), color.hcl(350, 50, 50));
  test.equal(i(0.0), "rgb(196, 79, 106)");
  test.equal(i(0.2), "rgb(196, 79, 112)");
  test.equal(i(0.4), "rgb(195, 79, 118)");
  test.equal(i(0.6), "rgb(193, 79, 124)");
  test.equal(i(0.8), "rgb(191, 80, 129)");
  test.equal(i(1.0), "rgb(189, 81, 135)");
  test.end();
});

tape("interpolateHcl(a, b) uses the shortest path when interpolating hue difference greater than 360°", function(test) {
  var i = interpolate.interpolateHcl(color.hcl(10, 50, 50), color.hcl(380, 50, 50));
  test.equal(i(0.0), "rgb(196, 79, 106)");
  test.equal(i(0.2), "rgb(196, 79, 104)");
  test.equal(i(0.4), "rgb(197, 80, 101)");
  test.equal(i(0.6), "rgb(196, 80, 98)");
  test.equal(i(0.8), "rgb(196, 80, 95)");
  test.equal(i(1.0), "rgb(196, 81, 92)");
  test.end();
});

tape("interpolateHcl(a, b) uses the shortest path when interpolating hue difference greater than 540°", function(test) {
  var i = interpolate.interpolateHcl(color.hcl(10, 50, 50), color.hcl(710, 50, 50));
  test.equal(i(0.0), "rgb(196, 79, 106)");
  test.equal(i(0.2), "rgb(196, 79, 112)");
  test.equal(i(0.4), "rgb(195, 79, 118)");
  test.equal(i(0.6), "rgb(193, 79, 124)");
  test.equal(i(0.8), "rgb(191, 80, 129)");
  test.equal(i(1.0), "rgb(189, 81, 135)");
  test.end();
});

tape("interpolateHcl(a, b) uses the shortest path when interpolating hue difference greater than 720°", function(test) {
  var i = interpolate.interpolateHcl(color.hcl(10, 50, 50), color.hcl(740, 50, 50));
  test.equal(i(0.0), "rgb(196, 79, 106)");
  test.equal(i(0.2), "rgb(196, 79, 104)");
  test.equal(i(0.4), "rgb(197, 80, 101)");
  test.equal(i(0.6), "rgb(196, 80, 98)");
  test.equal(i(0.8), "rgb(196, 80, 95)");
  test.equal(i(1.0), "rgb(196, 81, 92)");
  test.end();
});

tape("interpolateHcl(a, b) uses a’s hue when b’s hue is undefined", function(test) {
  test.equal(interpolate.interpolateHcl("#f60", color.hcl(NaN, NaN, 0))(0.5), "rgb(155, 0, 0)");
  test.equal(interpolate.interpolateHcl("#6f0", color.hcl(NaN, NaN, 0))(0.5), "rgb(0, 129, 0)");
  test.end();
});

tape("interpolateHcl(a, b) uses b’s hue when a’s hue is undefined", function(test) {
  test.equal(interpolate.interpolateHcl(color.hcl(NaN, NaN, 0), "#f60")(0.5), "rgb(155, 0, 0)");
  test.equal(interpolate.interpolateHcl(color.hcl(NaN, NaN, 0), "#6f0")(0.5), "rgb(0, 129, 0)");
  test.end();
});

tape("interpolateHcl(a, b) uses a’s chroma when b’s chroma is undefined", function(test) {
  test.equal(interpolate.interpolateHcl("#ccc", color.hcl(NaN, NaN, 0))(0.5), "rgb(97, 97, 97)");
  test.equal(interpolate.interpolateHcl("#f00", color.hcl(NaN, NaN, 0))(0.5), "rgb(166, 0, 0)");
  test.end();
});

tape("interpolateHcl(a, b) uses b’s chroma when a’s chroma is undefined", function(test) {
  test.equal(interpolate.interpolateHcl(color.hcl(NaN, NaN, 0), "#ccc")(0.5), "rgb(97, 97, 97)");
  test.equal(interpolate.interpolateHcl(color.hcl(NaN, NaN, 0), "#f00")(0.5), "rgb(166, 0, 0)");
  test.end();
});

tape("interpolateHcl(a, b) uses b’s luminance when a’s luminance is undefined", function(test) {
  test.equal(interpolate.interpolateHcl(null, color.hcl(20, 80, 50))(0.5), "rgb(234, 19, 77)");
  test.end();
});

tape("interpolateHcl(a, b) uses a’s luminance when b’s luminance is undefined", function(test) {
  test.equal(interpolate.interpolateHcl(color.hcl(20, 80, 50), null)(0.5), "rgb(234, 19, 77)");
  test.end();
});
