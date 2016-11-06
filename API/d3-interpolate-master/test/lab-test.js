var tape = require("tape"),
    color = require("d3-color"),
    interpolate = require("../");

tape("interpolateLab(a, b) converts a and b to Lab colors", function(test) {
  test.equal(interpolate.interpolateLab("steelblue", "brown")(0), color.rgb("steelblue") + "");
  test.equal(interpolate.interpolateLab("steelblue", color.hsl("brown"))(1), color.rgb("brown") + "");
  test.equal(interpolate.interpolateLab("steelblue", color.rgb("brown"))(1), color.rgb("brown") + "");
  test.end();
});

tape("interpolateLab(a, b) interpolates in Lab and returns an RGB string", function(test) {
  test.equal(interpolate.interpolateLab("steelblue", "#f00")(0.2), "rgb(138, 119, 147)");
  test.equal(interpolate.interpolateLab("rgba(70, 130, 180, 1)", "rgba(255, 0, 0, 0.2)")(0.2), "rgba(138, 119, 147, 0.84)");
  test.end();
});

tape("interpolateLab(a, b) uses b’s channel value when a’s channel value is undefined", function(test) {
  test.equal(interpolate.interpolateLab(null, color.lab(20, 40, 60))(0.5), color.lab(20, 40, 60) + "");
  test.equal(interpolate.interpolateLab(color.lab(NaN, 20, 40), color.lab(60, 80, 100))(0.5), color.lab(60, 50, 70) + "");
  test.equal(interpolate.interpolateLab(color.lab(20, NaN, 40), color.lab(60, 80, 100))(0.5), color.lab(40, 80, 70) + "");
  test.equal(interpolate.interpolateLab(color.lab(20, 40, NaN), color.lab(60, 80, 100))(0.5), color.lab(40, 60, 100) + "");
  test.end();
});

tape("interpolateLab(a, b) uses a’s channel value when b’s channel value is undefined", function(test) {
  test.equal(interpolate.interpolateLab(color.lab(20, 40, 60), null)(0.5), color.lab(20, 40, 60) + "");
  test.equal(interpolate.interpolateLab(color.lab(60, 80, 100), color.lab(NaN, 20, 40))(0.5), color.lab(60, 50, 70) + "");
  test.equal(interpolate.interpolateLab(color.lab(60, 80, 100), color.lab(20, NaN, 40))(0.5), color.lab(40, 80, 70) + "");
  test.equal(interpolate.interpolateLab(color.lab(60, 80, 100), color.lab(20, 40, NaN))(0.5), color.lab(40, 60, 100) + "");
  test.end();
});
