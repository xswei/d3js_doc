var tape = require("tape"),
    d3 = require("../../");

require("./projectionEqual");

tape("stereographic(point) returns the expected result", function(test) {
  var stereographic = d3.geoStereographic().translate([0, 0]).scale(1);
  test.projectionEqual(stereographic, [  0,   0], [ 0,  0]);
  test.projectionEqual(stereographic, [-90,   0], [-1,  0]);
  test.projectionEqual(stereographic, [ 90,   0], [ 1,  0]);
  test.projectionEqual(stereographic, [  0, -90], [ 0,  1]);
  test.projectionEqual(stereographic, [  0,  90], [ 0, -1]);
  test.end();
});
