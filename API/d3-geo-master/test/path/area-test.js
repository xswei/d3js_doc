var tape = require("tape"),
    d3_geo = require("../../"),
    testContext = require("./test-context");

var equirectangular = d3_geo.geoEquirectangular()
    .scale(900 / Math.PI)
    .precision(0);

function testArea(projection, object) {
  return d3_geo.geoPath()
      .projection(projection)
      .area(object);
}

tape("geoPath.area(…) of a polygon with no holes", function(test) {
  test.equal(testArea(equirectangular, {
    type: "Polygon",
    coordinates: [[[100, 0], [100, 1], [101, 1], [101, 0], [100, 0]]]
  }), 25);
  test.end();
});

tape("geoPath.area(…) of a polygon with holes", function(test) {
  test.equal(testArea(equirectangular, {
    type: "Polygon",
    coordinates: [[[100, 0], [100, 1], [101, 1], [101, 0], [100, 0]], [[100.2, 0.2], [100.8, 0.2], [100.8, 0.8], [100.2, 0.8], [100.2, 0.2]]]
  }), 16);
  test.end();
});

tape("geoPath.area(…) of a sphere", function(test) {
  test.equal(testArea(equirectangular, {
    type: "Sphere",
  }), 1620000);
  test.end();
});
