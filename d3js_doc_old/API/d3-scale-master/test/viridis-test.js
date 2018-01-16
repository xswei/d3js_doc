var tape = require("tape"),
    d3 = require("../");

tape("interpolateViridis(t) returns the expected values", function(test) {
  test.equal(d3.interpolateViridis(0.0), "#440154");
  test.equal(d3.interpolateViridis(0.5), "#21918c");
  test.equal(d3.interpolateViridis(1.0), "#fde725");
  test.end();
});

tape("interpolateViridis(t) clamps t", function(test) {
  test.equal(d3.interpolateViridis(-0.5), "#440154");
  test.equal(d3.interpolateViridis( 0.0), "#440154");
  test.equal(d3.interpolateViridis( 0.5), "#21918c");
  test.equal(d3.interpolateViridis( 1.0), "#fde725");
  test.equal(d3.interpolateViridis( 1.5), "#fde725");
  test.end();
});
