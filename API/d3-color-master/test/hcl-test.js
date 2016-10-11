var tape = require("tape"),
    color = require("../");

require("./hclEqual");
require("./rgbEqual");

tape("hcl(…) returns an instance of hcl and color", function(test) {
  var c = color.hcl(120, 40, 50);
  test.ok(c instanceof color.hcl);
  test.ok(c instanceof color.color);
  test.equal(c.constructor.name, "Hcl");
  test.end();
});

tape("hcl(…) exposes h, c, and l channel values", function(test) {
  test.hclEqual(color.hcl("#abc"), 257.7177616818892, 10.774886733325554, 75.10497524893663, 1);
  test.end();
});

tape("hcl(…) returns defined hue and chroma, even for black and white", function(test) {
  test.hclEqual(color.hcl("black"), 0, 0, 0, 1);
  test.hclEqual(color.hcl("#000"), 0, 0, 0, 1);
  test.hclEqual(color.hcl(color.lab("#000")), 0, 0, 0, 1);
  test.hclEqual(color.hcl("white"), 158.19859051364818, 0.00001795054880958058, 100.00000386666655, 1);
  test.hclEqual(color.hcl("#fff"), 158.19859051364818, 0.00001795054880958058, 100.00000386666655, 1);
  test.hclEqual(color.hcl(color.lab("#fff")), 158.19859051364818, 0.00001795054880958058, 100.00000386666655, 1);
  test.end();
});

tape("hcl.toString() converts to RGB and formats as hexadecimal", function(test) {
  test.equal(color.hcl("#abcdef") + "", "rgb(171, 205, 239)");
  test.equal(color.hcl("moccasin") + "", "rgb(255, 228, 181)");
  test.equal(color.hcl("hsl(60, 100%, 20%)") + "", "rgb(102, 102, 0)");
  test.equal(color.hcl("rgb(12, 34, 56)") + "", "rgb(12, 34, 56)");
  test.equal(color.hcl(color.rgb(12, 34, 56)) + "", "rgb(12, 34, 56)");
  test.equal(color.hcl(color.hsl(60, 1, 0.2)) + "", "rgb(102, 102, 0)");
  test.end();
});

tape("hcl.toString() reflects h, c and l channel values", function(test) {
  var c = color.hcl("#abc");
  c.h += 10, c.c += 1, c.l -= 1;
  test.equal(c + "", "rgb(170, 183, 204)");
  test.end();
});

tape("hcl.toString() treats undefined opacity as 1", function(test) {
  var c = color.hcl("#abc");
  c.opacity = NaN;
  test.equal(c + "", "rgb(170, 187, 204)");
  test.end();
});

tape("hcl.toString() treats undefined channel values as 0", function(test) {
  test.equal(color.hcl("invalid") + "", "rgb(0, 0, 0)");
  test.equal(color.hcl("#000") + "", "rgb(0, 0, 0)");
  test.equal(color.hcl("#ccc") + "", "rgb(204, 204, 204)");
  test.equal(color.hcl("#fff") + "", "rgb(255, 255, 255)");
  test.equal(color.hcl(NaN, 20, 40) + "", "rgb(94, 94, 94)"); // equivalent to hcl(*, *, 40)
  test.equal(color.hcl(120, NaN, 40) + "", "rgb(94, 94, 94)");
  test.equal(color.hcl(0, NaN, 40) + "", "rgb(94, 94, 94)");
  test.equal(color.hcl(120, 50, NaN) + "", "rgb(0, 0, 0)"); // equivalent to hcl(*, *, 0)
  test.equal(color.hcl(0, 50, NaN) + "", "rgb(0, 0, 0)");
  test.equal(color.hcl(120, 0, NaN) + "", "rgb(0, 0, 0)");
  test.end();
});

tape("hcl(h, c, l) does not wrap hue to [0,360)", function(test) {
  test.hclEqual(color.hcl(-10, 40, 50), -10, 40, 50, 1);
  test.hclEqual(color.hcl(0, 40, 50), 0, 40, 50, 1);
  test.hclEqual(color.hcl(360, 40, 50), 360, 40, 50, 1);
  test.hclEqual(color.hcl(370, 40, 50), 370, 40, 50, 1);
  test.end();
});

tape("hcl(h, c, l) does not clamp l channel value", function(test) {
  test.hclEqual(color.hcl(120, 20, -10), 120, 20, -10, 1);
  test.hclEqual(color.hcl(120, 20, 0), 120, 20, 0, 1);
  test.hclEqual(color.hcl(120, 20, 100), 120, 20, 100, 1);
  test.hclEqual(color.hcl(120, 20, 110), 120, 20, 110, 1);
  test.end();
});

tape("hcl(h, c, l, opacity) does not clamp opacity to [0,1]", function(test) {
  test.hclEqual(color.hcl(120, 20, 100, -0.2), 120, 20, 100, -0.2);
  test.hclEqual(color.hcl(120, 20, 110, 1.2), 120, 20, 110, 1.2);
  test.end();
});

tape("hcl(h, c, l) coerces channel values to numbers", function(test) {
  test.hclEqual(color.hcl("120", "40", "50"), 120, 40, 50, 1);
  test.end();
});

tape("hcl(h, c, l, opacity) coerces opacity to number", function(test) {
  test.hclEqual(color.hcl(120, 40, 50, "0.2"), 120, 40, 50, 0.2);
  test.end();
});

tape("hcl(h, c, l) allows undefined channel values", function(test) {
  test.hclEqual(color.hcl(undefined, NaN, "foo"), NaN, NaN, NaN, 1);
  test.hclEqual(color.hcl(undefined, 40, 50), NaN, 40, 50, 1);
  test.hclEqual(color.hcl(42, undefined, 50), 42, NaN, 50, 1);
  test.hclEqual(color.hcl(42, 40, undefined), 42, 40, NaN, 1);
  test.end();
});

tape("hcl(h, c, l, opacity) converts undefined opacity to 1", function(test) {
  test.hclEqual(color.hcl(10, 20, 30, null), 10, 20, 30, 1);
  test.hclEqual(color.hcl(10, 20, 30, undefined), 10, 20, 30, 1);
  test.end();
});

tape("hcl(format) parses the specified format and converts to HCL", function(test) {
  test.hclEqual(color.hcl("#abcdef"), 259.84214815790716, 20.768234621934273, 81.04386565274363, 1);
  test.hclEqual(color.hcl("#abc"), 257.7177616818892, 10.774886733325554, 75.10497524893663, 1);
  test.hclEqual(color.hcl("rgb(12, 34, 56)"), 270.41717207657933, 16.833655998102003, 12.65624852526134, 1);
  test.hclEqual(color.hcl("rgb(12%, 34%, 56%)"), 274.03009307843763, 36.289366963489435, 36.040298589825746, 1);
  test.hclEqual(color.hcl("rgba(12%, 34%, 56%, 0.4)"), 274.03009307843763, 36.289366963489435, 36.040298589825746, 0.4);
  test.hclEqual(color.hcl("hsl(60,100%,20%)"), 102.85124420310271, 49.44871600399321, 41.73251953866431, 1);
  test.hclEqual(color.hcl("hsla(60,100%,20%,0.4)"), 102.85124420310271, 49.44871600399321, 41.73251953866431, 0.4);
  test.hclEqual(color.hcl("aliceblue"), 252.44447593419056, 4.4710949781436735, 97.17864982306108, 1);
  test.end();
});

tape("hcl(format) returns undefined channel values for unknown formats", function(test) {
  test.hclEqual(color.hcl("invalid"), NaN, NaN, NaN, NaN);
  test.end();
});

tape("hcl(hcl) copies an HCL color", function(test) {
  var c1 = color.hcl(120, 30, 50, 0.4),
      c2 = color.hcl(c1);
  test.hclEqual(c1, 120, 30, 50, 0.4);
  c1.h = c1.c = c1.l = c1.opacity = 0;
  test.hclEqual(c1, 0, 0, 0, 0);
  test.hclEqual(c2, 120, 30, 50, 0.4);
  test.end();
});

tape("hcl(lab) returns defined hue, even if a and b are non-zero", function(test) {
  test.hclEqual(color.hcl(color.lab(0, 0, 0)), 0, 0, 0, 1);
  test.hclEqual(color.hcl(color.lab(50, 0, 0)), 0, 0, 50, 1);
  test.hclEqual(color.hcl(color.lab(100, 0, 0)), 0, 0, 100, 1);
  test.hclEqual(color.hcl(color.lab(0, 10, 0)), 0, 10, 0, 1);
  test.hclEqual(color.hcl(color.lab(50, 10, 0)), 0, 10, 50, 1);
  test.hclEqual(color.hcl(color.lab(100, 10, 0)), 0, 10, 100, 1);
  test.end();
});

tape("hcl(rgb) converts from RGB", function(test) {
  test.hclEqual(color.hcl(color.rgb(255, 0, 0, 0.4)), 39.99901061253294, 104.55176567686985, 53.24079414130722, 0.4);
  test.end();
});

tape("hcl(color) converts from another colorspace via color.rgb()", function(test) {
  function TestColor() {}
  TestColor.prototype = Object.create(color.color.prototype);
  TestColor.prototype.rgb = function() { return color.rgb(12, 34, 56, 0.4); };
  TestColor.prototype.toString = function() { throw new Error("should use rgb, not toString"); };
  test.hclEqual(color.hcl(new TestColor), 270.41717207657933, 16.833655998102003, 12.65624852526134, 0.4);
  test.end();
});

tape("hcl.brighter(k) returns a brighter color if k > 0", function(test) {
  var c = color.hcl("rgba(165, 42, 42, 0.4)");
  test.hclEqual(c.brighter(0.5), 31.577795955065785, 58.32679960239559, 46.52650524281069, 0.4);
  test.hclEqual(c.brighter(1), 31.577795955065785, 58.32679960239559, 55.52650524281069, 0.4);
  test.hclEqual(c.brighter(2), 31.577795955065785, 58.32679960239559, 73.52650524281069, 0.4);
  test.end();
});

tape("hcl.brighter(k) returns a copy", function(test) {
  var c1 = color.hcl("rgba(70, 130, 180, 0.4)"),
      c2 = c1.brighter(1);
  test.hclEqual(c1, 262.78126775909277, 32.44906314974561, 52.46551718768575, 0.4);
  test.hclEqual(c2, 262.78126775909277, 32.44906314974561, 70.46551718768575, 0.4);
  test.end();
});

tape("hcl.brighter() is equivalent to hcl.brighter(1)", function(test) {
  var c1 = color.hcl("rgba(70, 130, 180, 0.4)"),
      c2 = c1.brighter(),
      c3 = c1.brighter(1);
  test.hclEqual(c2, c3.h, c3.c, c3.l, 0.4);
  test.end();
});

tape("hcl.brighter(k) is equivalent to hcl.darker(-k)", function(test) {
  var c1 = color.hcl("rgba(70, 130, 180, 0.4)"),
      c2 = c1.brighter(1.5),
      c3 = c1.darker(-1.5);
  test.hclEqual(c2, c3.h, c3.c, c3.l, 0.4);
  test.end();
});

tape("hcl.darker(k) returns a darker color if k > 0", function(test) {
  var c = color.hcl("rgba(165, 42, 42, 0.4)");
  test.hclEqual(c.darker(0.5), 31.577795955065785, 58.32679960239559, 28.526505242810693, 0.4);
  test.hclEqual(c.darker(1), 31.577795955065785, 58.32679960239559, 19.526505242810693, 0.4);
  test.hclEqual(c.darker(2), 31.577795955065785, 58.32679960239559, 1.5265052428106927, 0.4);
  test.end();
});

tape("hcl.darker(k) returns a copy", function(test) {
  var c1 = color.hcl("rgba(70, 130, 180, 0.4)"),
      c2 = c1.darker(1);
  test.hclEqual(c1, 262.78126775909277, 32.44906314974561, 52.46551718768575, 0.4);
  test.hclEqual(c2, 262.78126775909277, 32.44906314974561, 34.46551718768575, 0.4);
  test.end();
});

tape("hcl.darker() is equivalent to hcl.darker(1)", function(test) {
  var c1 = color.hcl("rgba(70, 130, 180, 0.4)"),
      c2 = c1.darker(),
      c3 = c1.darker(1);
  test.hclEqual(c2, c3.h, c3.c, c3.l, 0.4);
  test.end();
});

tape("hcl.darker(k) is equivalent to hcl.brighter(-k)", function(test) {
  var c1 = color.hcl("rgba(70, 130, 180, 0.4)"),
      c2 = c1.darker(1.5),
      c3 = c1.brighter(-1.5);
  test.hclEqual(c2, c3.h, c3.c, c3.l, 0.4);
  test.end();
});

tape("hcl.rgb() converts to RGB", function(test) {
  var c = color.hcl(120, 30, 50, 0.4);
  test.rgbEqual(c.rgb(), 109, 125, 74, 0.4);
  test.end();
});
