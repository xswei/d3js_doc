var tape = require("tape"),
    d3_geo = require("../../"),
    testContext = require("./test-context");

var equirectangular = d3_geo.geoEquirectangular()
    .scale(900 / Math.PI)
    .precision(0);

function testBounds(projection, object) {
  return d3_geo.geoPath()
      .projection(projection)
      .bounds(object);
}

tape("geoPath.bounds(…) of a polygon with no holes", function(test) {
  test.deepEqual(testBounds(equirectangular, {
    type: "Polygon",
    coordinates: [[[100, 0], [100, 1], [101, 1], [101, 0], [100, 0]]]
  }), [[980, 245], [985, 250]]);
  test.end();
});

tape("geoPath.bounds(…) of a polygon with holes", function(test) {
  test.deepEqual(testBounds(equirectangular, {
    type: "Polygon",
    coordinates: [[[100, 0], [100, 1], [101, 1], [101, 0], [100, 0]], [[100.2, 0.2], [100.8, 0.2], [100.8, 0.8], [100.2, 0.8], [100.2, 0.2]]]
  }), [[980, 245], [985, 250]]);
  test.end();
});

tape("geoPath.bounds(…) of a sphere", function(test) {
  test.deepEqual(testBounds(equirectangular, {
    type: "Sphere"
  }), [[-420, -200], [1380, 700]]);
  test.end();
});
