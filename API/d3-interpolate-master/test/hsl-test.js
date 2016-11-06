var tape = require("tape"),
    color = require("d3-color"),
    interpolate = require("../");

tape("interpolateHsl(a, b) converts a and b to HSL colors", function(test) {
  test.equal(interpolate.interpolateHsl("steelblue", "brown")(0), color.rgb("steelblue") + "");
  test.equal(interpolate.interpolateHsl("steelblue", color.hsl("brown"))(1), color.rgb("brown") + "");
  test.equal(interpolate.interpolateHsl("steelblue", color.rgb("brown"))(1), color.rgb("brown") + "");
  test.end();
});

tape("interpolateHsl(a, b) interpolates in HSL and returns an RGB string", function(test) {
  test.equal(interpolate.interpolateHsl("steelblue", "#f00")(0.2), "rgb(56, 61, 195)");
  test.equal(interpolate.interpolateHsl("rgba(70, 130, 180, 1)", "rgba(255, 0, 0, 0.2)")(0.2), "rgba(56, 61, 195, 0.84)");
  test.end();
});

tape("interpolateHsl(a, b) uses the shortest path when interpolating hue", function(test) {
  var i = interpolate.interpolateHsl("hsl(10,50%,50%)", "hsl(350,50%,50%)");
  test.equal(i(0.0), "rgb(191, 85, 64)");
  test.equal(i(0.2), "rgb(191, 77, 64)");
  test.equal(i(0.4), "rgb(191, 68, 64)");
  test.equal(i(0.6), "rgb(191, 64, 68)");
  test.equal(i(0.8), "rgb(191, 64, 77)");
  test.equal(i(1.0), "rgb(191, 64, 85)");
  test.end();
});

tape("interpolateHsl(a, b) uses a’s hue when b’s hue is undefined", function(test) {
  test.equal(interpolate.interpolateHsl("#f60", "#000")(0.5), "rgb(128, 51, 0)");
  test.equal(interpolate.interpolateHsl("#6f0", "#fff")(0.5), "rgb(179, 255, 128)");
  test.end();
});

tape("interpolateHsl(a, b) uses b’s hue when a’s hue is undefined", function(test) {
  test.equal(interpolate.interpolateHsl("#000", "#f60")(0.5), "rgb(128, 51, 0)");
  test.equal(interpolate.interpolateHsl("#fff", "#6f0")(0.5), "rgb(179, 255, 128)");
  test.end();
});

tape("interpolateHsl(a, b) uses a’s saturation when b’s saturation is undefined", function(test) {
  test.equal(interpolate.interpolateHsl("#ccc", "#000")(0.5), "rgb(102, 102, 102)");
  test.equal(interpolate.interpolateHsl("#f00", "#000")(0.5), "rgb(128, 0, 0)");
  test.end();
});

tape("interpolateHsl(a, b) uses b’s saturation when a’s saturation is undefined", function(test) {
  test.equal(interpolate.interpolateHsl("#000", "#ccc")(0.5), "rgb(102, 102, 102)");
  test.equal(interpolate.interpolateHsl("#000", "#f00")(0.5), "rgb(128, 0, 0)");
  test.end();
});

tape("interpolateHsl(a, b) uses b’s lightness when a’s lightness is undefined", function(test) {
  test.equal(interpolate.interpolateHsl(null, color.hsl(20, 1.0, 0.5))(0.5), "rgb(255, 85, 0)");
  test.end();
});

tape("interpolateHsl(a, b) uses a’s lightness when b’s lightness is undefined", function(test) {
  test.equal(interpolate.interpolateHsl(color.hsl(20, 1.0, 0.5), null)(0.5), "rgb(255, 85, 0)");
  test.end();
});
