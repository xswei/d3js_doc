var tape = require("tape"),
    d3_geo = require("../../");

require("../pathEqual");

var equirectangular = d3_geo.geoEquirectangular()
    .scale(900 / Math.PI)
    .precision(0);

function testPath(projection, object) {
  return d3_geo.geoPath()
      .projection(projection)
      (object);
}

tape("geoPath(Point) renders a point", function(test) {
  test.pathEqual(testPath(equirectangular, {
    type: "Point",
    coordinates: [-63, 18]
  }), "M165,160m0,4.500000a4.500000,4.500000 0 1,1 0,-9a4.500000,4.500000 0 1,1 0,9z");
  test.end();
});

tape("geoPath(MultiPoint) renders a point", function(test) {
  test.pathEqual(testPath(equirectangular, {
    type: "MultiPoint",
    coordinates: [[-63, 18], [-62, 18], [-62, 17]]
  }), "M165,160m0,4.500000a4.500000,4.500000 0 1,1 0,-9a4.500000,4.500000 0 1,1 0,9zM170,160m0,4.500000a4.500000,4.500000 0 1,1 0,-9a4.500000,4.500000 0 1,1 0,9zM170,165m0,4.500000a4.500000,4.500000 0 1,1 0,-9a4.500000,4.500000 0 1,1 0,9z");
  test.end();
});

tape("geoPath(LineString) renders a line string", function(test) {
  test.pathEqual(testPath(equirectangular, {
    type: "LineString",
    coordinates: [[-63, 18], [-62, 18], [-62, 17]]
  }), "M165,160L170,160L170,165");
  test.end();
});

tape("geoPath(Polygon) renders a polygon", function(test) {
  test.pathEqual(testPath(equirectangular, {
    type: "Polygon",
    coordinates: [[[-63, 18], [-62, 18], [-62, 17], [-63, 18]]]
  }), "M165,160L170,160L170,165Z");
  test.end();
});

tape("geoPath(GeometryCollection) renders a geometry collection", function(test) {
  test.pathEqual(testPath(equirectangular, {
    type: "GeometryCollection",
    geometries: [{
      type: "Polygon",
      coordinates: [[[-63, 18], [-62, 18], [-62, 17], [-63, 18]]]
    }]
  }), "M165,160L170,160L170,165Z");
  test.end();
});

tape("geoPath(Feature) renders a feature", function(test) {
  test.pathEqual(testPath(equirectangular, {
    type: "Feature",
    geometry: {
      type: "Polygon",
      coordinates: [[[-63, 18], [-62, 18], [-62, 17], [-63, 18]]]
    }
  }), "M165,160L170,160L170,165Z");
  test.end();
});

tape("geoPath(FeatureCollection) renders a feature collection", function(test) {
  test.pathEqual(testPath(equirectangular, {
    type: "FeatureCollection",
    features: [{
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[-63, 18], [-62, 18], [-62, 17], [-63, 18]]]
      }
    }]
  }), "M165,160L170,160L170,165Z");
  test.end();
});

tape("geoPath(LineString) then geoPath(Point) does not treat the point as part of a line", function(test) {
  var path = d3_geo.geoPath().projection(equirectangular);
  test.pathEqual(path({
    type: "LineString",
    coordinates: [[-63, 18], [-62, 18], [-62, 17]]
  }), "M165,160L170,160L170,165");
  test.pathEqual(path({
    type: "Point",
    coordinates: [-63, 18]
  }), "M165,160m0,4.500000a4.500000,4.500000 0 1,1 0,-9a4.500000,4.500000 0 1,1 0,9z");
  test.end();
});
