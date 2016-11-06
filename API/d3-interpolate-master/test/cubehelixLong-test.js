var tape = require("tape"),
    color = require("d3-color"),
    interpolate = require("../");

tape("interpolateCubehelixLong(a, b) converts a and b to Cubehelix colors", function(test) {
  test.equal(interpolate.interpolateCubehelixLong("steelblue", "brown")(0), color.rgb("steelblue") + "");
  test.equal(interpolate.interpolateCubehelixLong("steelblue", color.hcl("brown"))(1), color.rgb("brown") + "");
  test.equal(interpolate.interpolateCubehelixLong("steelblue", color.rgb("brown"))(1), color.rgb("brown") + "");
  test.end();
});

tape("interpolateCubehelixLong(a, b) interpolates in Cubehelix and returns an RGB string", function(test) {
  test.equal(interpolate.interpolateCubehelixLong("steelblue", "#f00")(0.2), "rgb(88, 100, 218)");
  test.equal(interpolate.interpolateCubehelixLong("rgba(70, 130, 180, 1)", "rgba(255, 0, 0, 0.2)")(0.2), "rgba(88, 100, 218, 0.84)");
  test.end();
});

tape("interpolateCubehelixLong.gamma(3)(a, b) returns the expected values", function(test) {
  test.equal(interpolate.interpolateCubehelixLong.gamma(3)("steelblue", "#f00")(0.2), "rgb(96, 107, 228)");
  test.end();
});

tape("interpolateCubehelixLong.gamma(g) coerces the specified gamma to a number", function(test) {
  test.equal(interpolate.interpolateCubehelixLong.gamma({valueOf: function() { return 3; }})("steelblue", "#f00")(0.2), "rgb(96, 107, 228)");
  test.end();
});

tape("interpolateCubehelixLong(a, b) is equivalent to interpolateCubehelixLong.gamma(1)(a, b)", function(test) {
  var i0 = interpolate.interpolateCubehelixLong.gamma(1)("purple", "orange"),
      i1 = interpolate.interpolateCubehelixLong("purple", "orange");
  test.equal(i1(0.0), i0(0.0));
  test.equal(i1(0.2), i0(0.2));
  test.equal(i1(0.4), i0(0.4));
  test.equal(i1(0.6), i0(0.6));
  test.equal(i1(0.8), i0(0.8));
  test.equal(i1(1.0), i0(1.0));
  test.end();
});
tape("interpolateCubehelixLong(a, b) uses the longest path when interpolating hue difference greater than 180°", function(test) {
  var i = interpolate.interpolateCubehelixLong("purple", "orange");
  test.equal(i(0.0), "rgb(128, 0, 128)");
  test.equal(i(0.2), "rgb(63, 54, 234)");
  test.equal(i(0.4), "rgb(0, 151, 217)");
  test.equal(i(0.6), "rgb(0, 223, 83)");
  test.equal(i(0.8), "rgb(79, 219, 0)");
  test.equal(i(1.0), "rgb(255, 165, 0)");
  test.end();
});

tape("interpolateCubehelixLong(a, b) uses a’s hue when b’s hue is undefined", function(test) {
  test.equal(interpolate.interpolateCubehelixLong("#f60", color.hcl(NaN, NaN, 0))(0.5), "rgb(162, 41, 0)");
  test.equal(interpolate.interpolateCubehelixLong("#6f0", color.hcl(NaN, NaN, 0))(0.5), "rgb(3, 173, 0)");
  test.end();
});

tape("interpolateCubehelixLong(a, b) uses b’s hue when a’s hue is undefined", function(test) {
  test.equal(interpolate.interpolateCubehelixLong(color.hcl(NaN, NaN, 0), "#f60")(0.5), "rgb(162, 41, 0)");
  test.equal(interpolate.interpolateCubehelixLong(color.hcl(NaN, NaN, 0), "#6f0")(0.5), "rgb(3, 173, 0)");
  test.end();
});

tape("interpolateCubehelixLong(a, b) uses a’s chroma when b’s chroma is undefined", function(test) {
  test.equal(interpolate.interpolateCubehelixLong("#ccc", color.hcl(NaN, NaN, 0))(0.5), "rgb(102, 102, 102)");
  test.equal(interpolate.interpolateCubehelixLong("#f00", color.hcl(NaN, NaN, 0))(0.5), "rgb(147, 0, 0)");
  test.end();
});

tape("interpolateCubehelixLong(a, b) uses b’s chroma when a’s chroma is undefined", function(test) {
  test.equal(interpolate.interpolateCubehelixLong(color.hcl(NaN, NaN, 0), "#ccc")(0.5), "rgb(102, 102, 102)");
  test.equal(interpolate.interpolateCubehelixLong(color.hcl(NaN, NaN, 0), "#f00")(0.5), "rgb(147, 0, 0)");
  test.end();
});

tape("interpolateCubehelixLong(a, b) uses b’s luminance when a’s luminance is undefined", function(test) {
  test.equal(interpolate.interpolateCubehelixLong(null, color.cubehelix(20, 1.5, 0.5))(0.5), "rgb(248, 93, 0)");
  test.end();
});

tape("interpolateCubehelixLong(a, b) uses a’s luminance when b’s luminance is undefined", function(test) {
  test.equal(interpolate.interpolateCubehelixLong(color.cubehelix(20, 1.5, 0.5), null)(0.5), "rgb(248, 93, 0)");
  test.end();
});
