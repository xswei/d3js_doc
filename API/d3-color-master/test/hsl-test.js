var tape = require("tape"),
    color = require("../");

require("./hslEqual");
require("./rgbEqual");

tape("hsl(…) returns an instance of hsl and color", function(test) {
  var c = color.hsl(120, 0.4, 0.5);
  test.ok(c instanceof color.hsl);
  test.ok(c instanceof color.color);
  test.equal(c.constructor.name, "Hsl");
  test.end();
});

tape("hsl(…) exposes h, s, and l channel values and opacity", function(test) {
  test.hslEqual(color.hsl("#abc"), 210, 0.25, 0.7333333, 1);
  test.hslEqual(color.hsl("hsla(60, 100%, 20%, 0.4)"), 60, 1, 0.2, 0.4);
  test.end();
});

tape("hsl.toString() converts to RGB and formats as rgb(…) or rgba(…)", function(test) {
  test.equal(color.hsl("#abcdef") + "", "rgb(171, 205, 239)");
  test.equal(color.hsl("moccasin") + "", "rgb(255, 228, 181)");
  test.equal(color.hsl("hsl(60, 100%, 20%)") + "", "rgb(102, 102, 0)");
  test.equal(color.hsl("hsla(60, 100%, 20%, 0.4)") + "", "rgba(102, 102, 0, 0.4)");
  test.equal(color.hsl("rgb(12, 34, 56)") + "", "rgb(12, 34, 56)");
  test.equal(color.hsl(color.rgb(12, 34, 56)) + "", "rgb(12, 34, 56)");
  test.equal(color.hsl(color.hsl(60, 1, 0.2)) + "", "rgb(102, 102, 0)");
  test.equal(color.hsl(color.hsl(60, 1, 0.2, 0.4)) + "", "rgba(102, 102, 0, 0.4)");
  test.end();
});

tape("hsl.toString() reflects h, s and l channel values and opacity", function(test) {
  var c = color.hsl("#abc");
  c.h += 10, c.s += 0.01, c.l -= 0.01, c.opacity = 0.4;
  test.equal(c + "", "rgba(166, 178, 203, 0.4)");
  test.end();
});

tape("hsl.toString() treats undefined channel values as 0", function(test) {
  test.equal(color.hsl("invalid") + "", "rgb(0, 0, 0)");
  test.equal(color.hsl("#000") + "", "rgb(0, 0, 0)");
  test.equal(color.hsl("#ccc") + "", "rgb(204, 204, 204)");
  test.equal(color.hsl("#fff") + "", "rgb(255, 255, 255)");
  test.equal(color.hsl(NaN, 0.5, 0.4) + "", "rgb(102, 102, 102)"); // equivalent to hsl(*, 0, 0.4)
  test.equal(color.hsl(120, NaN, 0.4) + "", "rgb(102, 102, 102)");
  test.equal(color.hsl(NaN, NaN, 0.4) + "", "rgb(102, 102, 102)");
  test.equal(color.hsl(120, 0.5, NaN) + "", "rgb(0, 0, 0)"); // equivalent to hsl(120, 0.5, 0)
  test.end();
});

tape("hsl.toString() treats undefined opacity as 1", function(test) {
  var c = color.hsl("#abc");
  c.opacity = NaN;
  test.equal(c + "", "rgb(170, 187, 204)");
  test.end();
});

tape("hsl(h, s, l) does not wrap hue to [0,360)", function(test) {
  test.hslEqual(color.hsl(-10, 0.4, 0.5), -10, 0.4, 0.5, 1);
  test.hslEqual(color.hsl(0, 0.4, 0.5), 0, 0.4, 0.5, 1);
  test.hslEqual(color.hsl(360, 0.4, 0.5), 360, 0.4, 0.5, 1);
  test.hslEqual(color.hsl(370, 0.4, 0.5), 370, 0.4, 0.5, 1);
  test.end();
});

tape("hsl(h, s, l) does not clamp s and l channel values to [0,1]", function(test) {
  test.hslEqual(color.hsl(120, -0.1, 0.5), 120, -0.1, 0.5, 1);
  test.hslEqual(color.hsl(120, 1.1, 0.5), 120, 1.1, 0.5, 1);
  test.hslEqual(color.hsl(120, 0.2, -0.1), 120, 0.2, -0.1, 1);
  test.hslEqual(color.hsl(120, 0.2, 1.1), 120, 0.2, 1.1, 1);
  test.end();
});

tape("hsl(h, s, l, opacity) does not clamp opacity to [0,1]", function(test) {
  test.hslEqual(color.hsl(120, 0.1, 0.5, -0.2), 120, 0.1, 0.5, -0.2);
  test.hslEqual(color.hsl(120, 0.9, 0.5, 1.2), 120, 0.9, 0.5, 1.2);
  test.end();
});

tape("hsl(h, s, l) coerces channel values to numbers", function(test) {
  test.hslEqual(color.hsl("120", ".4", ".5"), 120, 0.4, 0.5, 1);
  test.end();
});

tape("hsl(h, s, l, opacity) coerces opacity to number", function(test) {
  test.hslEqual(color.hsl(120, 0.1, 0.5, "0.2"), 120, 0.1, 0.5, 0.2);
  test.hslEqual(color.hsl(120, 0.9, 0.5, "0.9"), 120, 0.9, 0.5, 0.9);
  test.end();
});

tape("hsl(h, s, l) allows undefined channel values", function(test) {
  test.hslEqual(color.hsl(undefined, NaN, "foo"), NaN, NaN, NaN, 1);
  test.hslEqual(color.hsl(undefined, 0.4, 0.5), NaN, 0.4, 0.5, 1);
  test.hslEqual(color.hsl(42, undefined, 0.5), 42, NaN, 0.5, 1);
  test.hslEqual(color.hsl(42, 0.4, undefined), 42, 0.4, NaN, 1);
  test.end();
});

tape("hsl(h, s, l, opacity) converts undefined opacity to 1", function(test) {
  test.hslEqual(color.hsl(10, 0.2, 0.3, null), 10, 0.2, 0.3, 1);
  test.hslEqual(color.hsl(10, 0.2, 0.3, undefined), 10, 0.2, 0.3, 1);
  test.end();
});

tape("hsl(h, s, l) preserves explicit hue, even for grays", function(test) {
  test.hslEqual(color.hsl(0, 0, 0), 0, 0, 0, 1);
  test.hslEqual(color.hsl(42, 0, 0.5), 42, 0, 0.5, 1);
  test.hslEqual(color.hsl(118, 0, 1), 118, 0, 1, 1);
  test.end();
});

tape("hsl(h, s, l) preserves explicit saturation, even for white or black", function(test) {
  test.hslEqual(color.hsl(0, 0, 0), 0, 0, 0, 1);
  test.hslEqual(color.hsl(0, 0.18, 0), 0, 0.18, 0, 1);
  test.hslEqual(color.hsl(0, 0.42, 1), 0, 0.42, 1, 1);
  test.hslEqual(color.hsl(0, 1, 1), 0, 1, 1, 1);
  test.end();
});

tape("hsl(format) parses the specified format and converts to HSL", function(test) {
  test.hslEqual(color.hsl("#abcdef"), 210, 0.68, 0.8039215, 1);
  test.hslEqual(color.hsl("#abc"), 210, 0.25, 0.733333333, 1);
  test.hslEqual(color.hsl("rgb(12, 34, 56)"), 210, 0.647058, 0.1333333, 1);
  test.hslEqual(color.hsl("rgb(12%, 34%, 56%)"), 210, 0.647058, 0.34, 1);
  test.hslEqual(color.hsl("hsl(60,100%,20%)"), 60, 1, 0.2, 1);
  test.hslEqual(color.hsl("hsla(60,100%,20%,0.4)"), 60, 1, 0.2, 0.4);
  test.hslEqual(color.hsl("aliceblue"), 208, 1, 0.9705882, 1);
  test.hslEqual(color.hsl("transparent"), NaN, NaN, NaN, 0);
  test.end();
});

tape("hsl(format) ignores the hue if the saturation is <= 0", function(test) {
  test.hslEqual(color.hsl("hsl(120,0%,20%)"), NaN, 0, 0.2, 1);
  test.hslEqual(color.hsl("hsl(120,-10%,20%)"), NaN, -0.1, 0.2, 1);
  test.end();
});

tape("hsl(format) ignores the hue and saturation if the lightness is <= 0 or >= 1", function(test) {
  test.hslEqual(color.hsl("hsl(120,20%,-10%)"), NaN, NaN, -0.1, 1);
  test.hslEqual(color.hsl("hsl(120,20%,0%)"), NaN, NaN, 0.0, 1);
  test.hslEqual(color.hsl("hsl(120,20%,100%)"), NaN, NaN, 1.0, 1);
  test.hslEqual(color.hsl("hsl(120,20%,120%)"), NaN, NaN, 1.2, 1);
  test.end();
});

tape("hsl(format) ignores all channels if the alpha is <= 0", function(test) {
  test.hslEqual(color.hsl("hsla(120,20%,10%,0)"), NaN, NaN, NaN, 0);
  test.hslEqual(color.hsl("hsla(120,20%,10%,-0.1)"), NaN, NaN, NaN, -0.1);
  test.end();
});

tape("hsl(format) does not lose precision when parsing HSL formats", function(test) {
  test.hslEqual(color.hsl("hsl(325,50%,40%)"), 325, 0.5, 0.4, 1);
  test.end();
});

tape("hsl(format) returns undefined channel values for unknown formats", function(test) {
  test.hslEqual(color.hsl("invalid"), NaN, NaN, NaN, NaN);
  test.end();
});

tape("hsl(hsl) copies an HSL color", function(test) {
  var c1 = color.hsl("hsla(120,30%,50%,0.4)"),
      c2 = color.hsl(c1);
  test.hslEqual(c1, 120, 0.3, 0.5, 0.4);
  c1.h = c1.s = c1.l = c1.opacity = 0;
  test.hslEqual(c1, 0, 0, 0, 0);
  test.hslEqual(c2, 120, 0.3, 0.5, 0.4);
  test.end();
});

tape("hsl(rgb) converts from RGB", function(test) {
  test.hslEqual(color.hsl(color.rgb(255, 0, 0, 0.4)), 0, 1, 0.5, 0.4);
  test.end();
});

tape("hsl(color) returns undefined hue and zero saturation for grays (but not white and black)", function(test) {
  test.hslEqual(color.hsl("gray"), NaN, 0, 0.5019608, 1);
  test.hslEqual(color.hsl("#ccc"), NaN, 0, 0.8, 1);
  test.hslEqual(color.hsl(color.rgb("gray")), NaN, 0, 0.5019608, 1);
  test.end();
});

tape("hsl(color) returns undefined hue and saturation for black and white", function(test) {
  test.hslEqual(color.hsl("black"), NaN, NaN, 0, 1);
  test.hslEqual(color.hsl("#000"), NaN, NaN, 0, 1);
  test.hslEqual(color.hsl("white"), NaN, NaN, 1, 1);
  test.hslEqual(color.hsl("#fff"), NaN, NaN, 1, 1);
  test.hslEqual(color.hsl(color.rgb("#fff")), NaN, NaN, 1, 1);
  test.end();
});

tape("hsl(color) converts from another colorspace via color.rgb()", function(test) {
  function TestColor() {}
  TestColor.prototype = Object.create(color.color.prototype);
  TestColor.prototype.rgb = function() { return color.rgb(12, 34, 56, 0.4); };
  TestColor.prototype.toString = function() { throw new Error("should use rgb, not toString"); };
  test.hslEqual(color.hsl(new TestColor), 210, 0.6470588, 0.1333334, 0.4);
  test.end();
});

tape("hsl.displayable() returns true if the color is within the RGB gamut and the opacity is in [0,1]", function(test) {
  test.equal(color.hsl("white").displayable(), true);
  test.equal(color.hsl("red").displayable(), true);
  test.equal(color.hsl("black").displayable(), true);
  test.equal(color.hsl("invalid").displayable(), false);
  test.equal(color.hsl(NaN, NaN, 1).displayable(), true);
  test.equal(color.hsl(NaN, NaN, 1.5).displayable(), false);
  test.equal(color.hsl(120, -0.5, 0).displayable(), false);
  test.equal(color.hsl(120, 1.5, 0).displayable(), false);
  test.equal(color.hsl(0, 1, 1, 0).displayable(), true);
  test.equal(color.hsl(0, 1, 1, 1).displayable(), true);
  test.equal(color.hsl(0, 1, 1, -0.2).displayable(), false);
  test.equal(color.hsl(0, 1, 1, 1.2).displayable(), false);
  test.end();
});

tape("hsl.brighter(k) returns a brighter color if k > 0", function(test) {
  var c = color.hsl("rgba(165, 42, 42, 0.4)");
  test.hslEqual(c.brighter(0.5), 0, 0.5942028, 0.4851222, 0.4);
  test.hslEqual(c.brighter(1), 0, 0.5942028, 0.5798319, 0.4);
  test.hslEqual(c.brighter(2), 0, 0.5942028, 0.8283313, 0.4);
  test.end();
});

tape("hsl.brighter(k) returns a copy", function(test) {
  var c1 = color.hsl("rgba(70, 130, 180, 0.4)"),
      c2 = c1.brighter(1);
  test.hslEqual(c1, 207.272727, 0.44, 0.4901961, 0.4);
  test.hslEqual(c2, 207.272727, 0.44, 0.7002801, 0.4);
  test.end();
});

tape("hsl.brighter() is equivalent to hsl.brighter(1)", function(test) {
  var c1 = color.hsl("rgba(70, 130, 180, 0.4)"),
      c2 = c1.brighter(),
      c3 = c1.brighter(1);
  test.hslEqual(c2, c3.h, c3.s, c3.l, 0.4);
  test.end();
});

tape("hsl.brighter(k) is equivalent to hsl.darker(-k)", function(test) {
  var c1 = color.hsl("rgba(70, 130, 180, 0.4)"),
      c2 = c1.brighter(1.5),
      c3 = c1.darker(-1.5);
  test.hslEqual(c2, c3.h, c3.s, c3.l, 0.4);
  test.end();
});

tape("hsl(\"black\").brighter() still returns black", function(test) {
  var c1 = color.hsl("black"),
      c2 = c1.brighter(1);
  test.hslEqual(c1, NaN, NaN, 0, 1);
  test.hslEqual(c2, NaN, NaN, 0, 1);
  test.end();
});

tape("hsl.darker(k) returns a darker color if k > 0", function(test) {
  var c = color.hsl("rgba(165, 42, 42, 0.4)");
  test.hslEqual(c.darker(0.5), 0, 0.5942029, 0.3395855, 0.4);
  test.hslEqual(c.darker(1), 0, 0.5942029, 0.2841176, 0.4);
  test.hslEqual(c.darker(2), 0, 0.5942029, 0.1988823, 0.4);
  test.end();
});

tape("hsl.darker(k) returns a copy", function(test) {
  var c1 = color.hsl("rgba(70, 130, 180, 0.4)"),
      c2 = c1.darker(1);
  test.hslEqual(c1, 207.272727, 0.44, 0.4901961, 0.4);
  test.hslEqual(c2, 207.272727, 0.44, 0.3431373, 0.4);
  test.end();
});

tape("hsl.darker() is equivalent to hsl.darker(1)", function(test) {
  var c1 = color.hsl("rgba(70, 130, 180, 0.4)"),
      c2 = c1.darker(),
      c3 = c1.darker(1);
  test.hslEqual(c2, c3.h, c3.s, c3.l, 0.4);
  test.end();
});

tape("hsl.darker(k) is equivalent to hsl.brighter(-k)", function(test) {
  var c1 = color.hsl("rgba(70, 130, 180, 0.4)"),
      c2 = c1.darker(1.5),
      c3 = c1.brighter(-1.5);
  test.hslEqual(c2, c3.h, c3.s, c3.l, 0.4);
  test.end();
});

tape("hsl.rgb() converts to RGB", function(test) {
  var c = color.hsl(120, 0.3, 0.5, 0.4);
  test.rgbEqual(c.rgb(), 89, 166, 89, 0.4);
  test.end();
});
