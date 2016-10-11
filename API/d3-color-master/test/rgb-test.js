var tape = require("tape"),
    color = require("../");

require("./rgbEqual");

tape("rgb(…) returns an instance of rgb and color", function(test) {
  var c = color.rgb(70, 130, 180);
  test.ok(c instanceof color.rgb);
  test.ok(c instanceof color.color);
  test.equal(c.constructor.name, "Rgb");
  test.end();
});

tape("rgb(…) exposes r, g and b channel values and opacity", function(test) {
  test.rgbEqual(color.rgb("#abc"), 170, 187, 204, 1);
  test.rgbEqual(color.rgb("rgba(170, 187, 204, 0.4)"), 170, 187, 204, 0.4);
  test.end();
});

tape("rgb.toString() formats as rgb(…) or rgba(…)", function(test) {
  test.equal(color.rgb("#abcdef") + "", "rgb(171, 205, 239)");
  test.equal(color.rgb("moccasin") + "", "rgb(255, 228, 181)");
  test.equal(color.rgb("hsl(60, 100%, 20%)") + "", "rgb(102, 102, 0)");
  test.equal(color.rgb("rgb(12, 34, 56)") + "", "rgb(12, 34, 56)");
  test.equal(color.rgb(color.rgb(12, 34, 56)) + "", "rgb(12, 34, 56)");
  test.equal(color.rgb(color.hsl(60, 1, 0.2)) + "", "rgb(102, 102, 0)");
  test.equal(color.rgb("rgba(12, 34, 56, 0.4)") + "", "rgba(12, 34, 56, 0.4)");
  test.equal(color.rgb("rgba(12%, 34%, 56%, 0.4)") + "", "rgba(31, 87, 143, 0.4)");
  test.equal(color.rgb("hsla(60, 100%, 20%, 0.4)") + "", "rgba(102, 102, 0, 0.4)");
  test.end();
});

tape("rgb.toString() reflects r, g and b channel values and opacity", function(test) {
  var c = color.rgb("#abc");
  ++c.r, ++c.g, ++c.b, c.opacity = 0.5;
  test.equal(c + "", "rgba(171, 188, 205, 0.5)");
  test.end();
});

tape("rgb.toString() treats undefined channel values as 0", function(test) {
  test.equal(color.rgb("invalid") + "", "rgb(0, 0, 0)");
  test.equal(color.rgb(NaN, 12, 34) + "", "rgb(0, 12, 34)");
  test.end();
});

tape("rgb.toString() treats undefined opacity as 1", function(test) {
  var c = color.rgb("#abc");
  ++c.r, ++c.g, ++c.b, c.opacity = NaN;
  test.equal(c + "", "rgb(171, 188, 205)");
  test.end();
});

tape("rgb.toString() clamps r, g, b and opacity channel values", function(test) {
  test.equal(color.rgb(-1,  2,  3) + "", "rgb(0, 2, 3)");
  test.equal(color.rgb( 2, -1,  3) + "", "rgb(2, 0, 3)");
  test.equal(color.rgb( 2,  3, -1) + "", "rgb(2, 3, 0)");
  test.equal(color.rgb( 2,  3, -1, -0.2) + "", "rgba(2, 3, 0, 0)");
  test.equal(color.rgb( 2,  3, -1, 1.2) + "", "rgb(2, 3, 0)");
  test.end();
});

tape("rgb.toString() rounds r, g and b channel values", function(test) {
  test.equal(color.rgb(0.5, 2.0, 3.0) + "", "rgb(1, 2, 3)");
  test.equal(color.rgb(2.0, 0.5, 3.0) + "", "rgb(2, 1, 3)");
  test.equal(color.rgb(2.0, 3.0, 0.5) + "", "rgb(2, 3, 1)");
  test.end();
});

tape("rgb(r, g, b) does not round channel values", function(test) {
  test.rgbStrictEqual(color.rgb(1.2, 2.6, 42.9), 1.2, 2.6, 42.9, 1);
  test.end();
});

tape("rgb(r, g, b) does not clamp channel values", function(test) {
  test.rgbEqual(color.rgb(-10, -20, -30), -10, -20, -30, 1);
  test.rgbEqual(color.rgb(300, 400, 500), 300, 400, 500, 1);
  test.end();
});

tape("rgb(r, g, b, opacity) does not clamp opacity", function(test) {
  test.rgbEqual(color.rgb(-10, -20, -30, -0.2), -10, -20, -30, -0.2);
  test.rgbEqual(color.rgb(300, 400, 500, 1.2), 300, 400, 500, 1.2);
  test.end();
});

tape("rgb(r, g, b) coerces channel values to numbers", function(test) {
  test.rgbEqual(color.rgb("12", "34", "56"), 12, 34, 56, 1);
  test.rgbEqual(color.rgb(null, null, null), 0, 0, 0, 1);
  test.end();
});

tape("rgb(r, g, b, opacity) coerces opacity to number", function(test) {
  test.rgbStrictEqual(color.rgb(-10, -20, -30, "-0.2"), -10, -20, -30, -0.2);
  test.rgbStrictEqual(color.rgb(300, 400, 500, "1.2"), 300, 400, 500, 1.2);
  test.end();
});

tape("rgb(r, g, b) allows undefined channel values", function(test) {
  test.rgbEqual(color.rgb(undefined, NaN, "foo"), NaN, NaN, NaN, 1);
  test.rgbEqual(color.rgb(undefined, 42, 56), NaN, 42, 56, 1);
  test.rgbEqual(color.rgb(42, undefined, 56), 42, NaN, 56, 1);
  test.rgbEqual(color.rgb(42, 56, undefined), 42, 56, NaN, 1);
  test.end();
});

tape("rgb(r, g, b, opacity) converts undefined opacity to 1", function(test) {
  test.rgbEqual(color.rgb(10, 20, 30, null), 10, 20, 30, 1);
  test.rgbEqual(color.rgb(10, 20, 30, undefined), 10, 20, 30, 1);
  test.end();
});

tape("rgb(format) parses the specified format and converts to RGB", function(test) {
  test.rgbEqual(color.rgb("#abcdef"), 171, 205, 239, 1);
  test.rgbEqual(color.rgb("#abc"), 170, 187, 204, 1);
  test.rgbEqual(color.rgb("rgb(12, 34, 56)"), 12, 34, 56, 1);
  test.rgbEqual(color.rgb("rgb(12%, 34%, 56%)"), 31, 87, 143, 1);
  test.rgbEqual(color.rgb("hsl(60,100%,20%)"), 102, 102, 0, 1);
  test.rgbEqual(color.rgb("aliceblue"), 240, 248, 255, 1);
  test.rgbEqual(color.rgb("hsla(60,100%,20%,0.4)"), 102, 102, 0, 0.4);
  test.end();
});

tape("rgb(format) ignores all channels if the alpha is <= 0", function(test) {
  test.rgbEqual(color.rgb("rgba(12,34,45,0)"), NaN, NaN, NaN, 0);
  test.rgbEqual(color.rgb("rgba(12,34,45,-0.1)"), NaN, NaN, NaN, -0.1);
  test.end();
});

tape("rgb(format) returns undefined channel values for unknown formats", function(test) {
  test.rgbEqual(color.rgb("invalid"), NaN, NaN, NaN, NaN);
  test.end();
});

tape("rgb(rgb) copies an RGB color", function(test) {
  var c1 = color.rgb("rgba(70, 130, 180, 0.4)"),
      c2 = color.rgb(c1);
  test.rgbEqual(c1, 70, 130, 180, 0.4);
  c1.r = c1.g = c1.b = c1.opacity = 0;
  test.rgbEqual(c1, 0, 0, 0, 0);
  test.rgbEqual(c2, 70, 130, 180, 0.4);
  test.end();
});

tape("rgb(hsl) converts from HSL", function(test) {
  test.rgbEqual(color.rgb(color.hsl(0, 1, 0.5)), 255, 0, 0, 1);
  test.rgbEqual(color.rgb(color.hsl(0, 1, 0.5, 0.4)), 255, 0, 0, 0.4);
  test.end();
});

tape("rgb(color) converts from another colorspace via color.rgb()", function(test) {
  function TestColor() {}
  TestColor.prototype = Object.create(color.color.prototype);
  TestColor.prototype.rgb = function() { return color.rgb(12, 34, 56, 0.4); };
  TestColor.prototype.toString = function() { throw new Error("should use rgb, not toString"); };
  test.rgbEqual(color.rgb(new TestColor), 12, 34, 56, 0.4);
  test.end();
});

tape("rgb.displayable() returns true if the color is within the RGB gamut and opacity is in [0,1]", function(test) {
  test.equal(color.rgb("white").displayable(), true);
  test.equal(color.rgb("red").displayable(), true);
  test.equal(color.rgb("black").displayable(), true);
  test.equal(color.rgb("invalid").displayable(), false);
  test.equal(color.rgb(-1, 0, 0).displayable(), false);
  test.equal(color.rgb(0, -1, 0).displayable(), false);
  test.equal(color.rgb(0, 0, -1).displayable(), false);
  test.equal(color.rgb(256, 0, 0).displayable(), false);
  test.equal(color.rgb(0, 256, 0).displayable(), false);
  test.equal(color.rgb(0, 0, 256).displayable(), false);
  test.equal(color.rgb(0, 0, 255, 0).displayable(), true);
  test.equal(color.rgb(0, 0, 255, 1.2).displayable(), false);
  test.equal(color.rgb(0, 0, 255, -0.2).displayable(), false);
  test.end();
});

tape("rgb.brighter(k) returns a brighter color if k > 0", function(test) {
  var c = color.rgb("rgba(165, 42, 42, 0.4)");
  test.rgbEqual(c.brighter(0.5), 197, 50, 50, 0.4);
  test.rgbEqual(c.brighter(1), 236, 60, 60, 0.4);
  test.rgbEqual(c.brighter(2), 337, 86, 86, 0.4);
  test.end();
});

tape("rgb.brighter(k) returns a copy", function(test) {
  var c1 = color.rgb("rgba(70, 130, 180, 0.4)"),
      c2 = c1.brighter(1);
  test.rgbEqual(c1, 70, 130, 180, 0.4);
  test.rgbEqual(c2, 100, 186, 257, 0.4);
  test.end();
});

tape("rgb.brighter() is equivalent to rgb.brighter(1)", function(test) {
  var c1 = color.rgb("rgba(70, 130, 180, 0.4)"),
      c2 = c1.brighter(),
      c3 = c1.brighter(1);
  test.rgbEqual(c2, c3.r, c3.g, c3.b, 0.4);
  test.end();
});

tape("rgb.brighter(k) is equivalent to rgb.darker(-k)", function(test) {
  var c1 = color.rgb("rgba(70, 130, 180, 0.4)"),
      c2 = c1.brighter(1.5),
      c3 = c1.darker(-1.5);
  test.rgbEqual(c2, c3.r, c3.g, c3.b, 0.4);
  test.end();
});

tape("rgb(\"black\").brighter() still returns black", function(test) {
  var c1 = color.rgb("black"),
      c2 = c1.brighter(1);
  test.rgbEqual(c1, 0, 0, 0, 1);
  test.rgbEqual(c2, 0, 0, 0, 1);
  test.end();
});

tape("rgb.darker(k) returns a darker color if k > 0", function(test) {
  var c = color.rgb("rgba(165, 42, 42, 0.4)");
  test.rgbEqual(c.darker(0.5), 138, 35, 35, 0.4);
  test.rgbEqual(c.darker(1), 115, 29, 29, 0.4);
  test.rgbEqual(c.darker(2), 81, 21, 21, 0.4);
  test.end();
});

tape("rgb.darker(k) returns a copy", function(test) {
  var c1 = color.rgb("rgba(70, 130, 180, 0.4)"),
      c2 = c1.darker(1);
  test.rgbEqual(c1, 70, 130, 180, 0.4);
  test.rgbEqual(c2, 49, 91, 126, 0.4);
  test.end();
});

tape("rgb.darker() is equivalent to rgb.darker(1)", function(test) {
  var c1 = color.rgb("rgba(70, 130, 180, 0.4)"),
      c2 = c1.darker(),
      c3 = c1.darker(1);
  test.rgbEqual(c2, c3.r, c3.g, c3.b, 0.4);
  test.end();
});

tape("rgb.darker(k) is equivalent to rgb.brighter(-k)", function(test) {
  var c1 = color.rgb("rgba(70, 130, 180, 0.4)"),
      c2 = c1.darker(1.5),
      c3 = c1.brighter(-1.5);
  test.rgbEqual(c2, c3.r, c3.g, c3.b, 0.4);
  test.end();
});

tape("rgb.rgb() returns this", function(test) {
  var c = color.rgb(70, 130, 180);
  test.equal(c.rgb(), c);
  test.end();
});
