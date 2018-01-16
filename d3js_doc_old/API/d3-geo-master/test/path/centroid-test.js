var tape = require("tape"),
    d3_geo = require("../../"),
    testContext = require("./test-context");

require("../inDelta");

var equirectangular = d3_geo.geoEquirectangular()
    .scale(900 / Math.PI)
    .precision(0);

function testCentroid(projection, object) {
  return d3_geo.geoPath()
      .projection(projection)
      .centroid(object);
}

tape("geoPath.centroid(…) of a point", function(test) {
  test.deepEqual(testCentroid(equirectangular, {type: "Point", coordinates: [0, 0]}), [480, 250]);
  test.end();
});

tape("geoPath.centroid(…) of an empty multipoint", function(test) {
  test.equal(testCentroid(equirectangular, {type: "MultiPoint", coordinates: []}).every(isNaN), true);
  test.end();
});

tape("geoPath.centroid(…) of a singleton multipoint", function(test) {
  test.deepEqual(testCentroid(equirectangular, {type: "MultiPoint", coordinates: [[0, 0]]}), [480, 250]);
  test.end();
});

tape("geoPath.centroid(…) of a multipoint with two points", function(test) {
  test.deepEqual(testCentroid(equirectangular, {type: "MultiPoint", coordinates: [[-122, 37], [-74, 40]]}), [-10, 57.5]);
  test.end();
});

tape("geoPath.centroid(…) of an empty linestring", function(test) {
  test.equal(testCentroid(equirectangular, {type: "LineString", coordinates: []}).every(isNaN), true);
  test.end();
});

tape("geoPath.centroid(…) of a linestring with two points", function(test) {
  test.deepEqual(testCentroid(equirectangular, {type: "LineString", coordinates: [[100, 0], [0, 0]]}), [730, 250]);
  test.deepEqual(testCentroid(equirectangular, {type: "LineString", coordinates: [[0, 0], [100, 0], [101, 0]]}), [732.5, 250]);
  test.end();
});

tape("geoPath.centroid(…) of a linestring with two points, one unique", function(test) {
  test.deepEqual(testCentroid(equirectangular, {type: "LineString", coordinates: [[-122, 37], [-122, 37]]}), [-130, 65]);
  test.deepEqual(testCentroid(equirectangular, {type: "LineString", coordinates: [[-74, 40], [-74, 40]]}), [110, 50]);
  test.end();
});

tape("geoPath.centroid(…) of a linestring with three points; two unique", function(test) {
  test.deepEqual(testCentroid(equirectangular, {type: "LineString", coordinates: [[-122, 37], [-74, 40], [-74, 40]]}), [-10, 57.5]);
  test.end();
});

tape("geoPath.centroid(…) of a linestring with three points", function(test) {
  test.inDelta(testCentroid(equirectangular, {type: "LineString", coordinates: [[-122, 37], [-74, 40], [-100, 0]]}), [17.389135, 103.563545], 1e-6);
  test.end();
});

tape("geoPath.centroid(…) of a multilinestring", function(test) {
  test.deepEqual(testCentroid(equirectangular, {type: "MultiLineString", coordinates: [[[100, 0], [0, 0]], [[-10, 0], [0, 0]]]}), [705, 250]);
  test.end();
});

tape("geoPath.centroid(…) of a single-ring polygon", function(test) {
  test.deepEqual(testCentroid(equirectangular, {type: "Polygon", coordinates: [[[100, 0], [100, 1], [101, 1], [101, 0], [100, 0]]]}), [982.5, 247.5]);
  test.end();
});

tape("geoPath.centroid(…) of a zero-area polygon", function(test) {
  test.deepEqual(testCentroid(equirectangular, {type: "Polygon", coordinates: [[[1, 0], [2, 0], [3, 0], [1, 0]]]}), [490, 250]);
  test.end();
});

tape("geoPath.centroid(…) of a polygon with two rings, one with zero area", function(test) {
  test.deepEqual(testCentroid(equirectangular, {type: "Polygon", coordinates: [
    [[100,   0], [100,   1], [101,   1], [101,   0], [100, 0]],
    [[100.1, 0], [100.2, 0], [100.3, 0], [100.1, 0]
  ]]}), [982.5, 247.5]);
  test.end();
});

tape("geoPath.centroid(…) of a polygon with clockwise exterior and anticlockwise interior", function(test) {
  test.inDelta(testCentroid(equirectangular, {
    type: "Polygon",
    coordinates: [
      [[-2, -2], [2, -2], [2, 2], [-2, 2], [-2, -2]].reverse(),
      [[ 0, -1], [1, -1], [1, 1], [ 0, 1], [ 0, -1]]
    ]
  }), [479.642857, 250], 1e-6);
  test.end();
});

tape("geoPath.centroid(…) of an empty multipolygon", function(test) {
  test.equal(testCentroid(equirectangular, {type: "MultiPolygon", coordinates: []}).every(isNaN), true);
  test.end();
});

tape("geoPath.centroid(…) of a singleton multipolygon", function(test) {
  test.deepEqual(testCentroid(equirectangular, {type: "MultiPolygon", coordinates: [[[[100, 0], [100, 1], [101, 1], [101, 0], [100, 0]]]]}), [982.5, 247.5]);
  test.end();
});

tape("geoPath.centroid(…) of a multipolygon with two polygons", function(test) {
  test.deepEqual(testCentroid(equirectangular, {type: "MultiPolygon", coordinates: [
    [[[100, 0], [100, 1], [101, 1], [101, 0], [100, 0]]],
    [[[0, 0], [1, 0], [1, -1], [0, -1], [0, 0]]]
  ]}), [732.5, 250]);
  test.end();
});

tape("geoPath.centroid(…) of a multipolygon with two polygons, one zero area", function(test) {
  test.deepEqual(testCentroid(equirectangular, {type: "MultiPolygon", coordinates: [
    [[[100, 0], [100, 1], [101, 1], [101, 0], [100, 0]]],
    [[[0, 0], [1, 0], [2, 0], [0, 0]]]
  ]}), [982.5, 247.5]);
  test.end();
});

tape("geoPath.centroid(…) of a geometry collection with a single point", function(test) {
  test.deepEqual(testCentroid(equirectangular, {type: "GeometryCollection", geometries: [{type: "Point", coordinates: [0, 0]}]}), [480, 250]);
  test.end();
});

tape("geoPath.centroid(…) of a geometry collection with a point and a linestring", function(test) {
  test.deepEqual(testCentroid(equirectangular, {type: "GeometryCollection", geometries: [
    {type: "LineString", coordinates: [[179, 0], [180, 0]]},
    {type: "Point", coordinates: [0, 0]}
  ]}), [1377.5, 250]);
  test.end();
});

tape("geoPath.centroid(…) of a geometry collection with a point, linestring and polygon", function(test) {
  test.deepEqual(testCentroid(equirectangular, {type: "GeometryCollection", geometries: [
    {type: "Polygon", coordinates: [[[-180, 0], [-180, 1], [-179, 1], [-179, 0], [-180, 0]]]},
    {type: "LineString", coordinates: [[179, 0], [180, 0]]},
    {type: "Point", coordinates: [0, 0]}
  ]}), [-417.5, 247.5]);
  test.end();
});

tape("geoPath.centroid(…) of a feature collection with a point", function(test) {
  test.deepEqual(testCentroid(equirectangular, {type: "FeatureCollection", features: [{type: "Feature", geometry: {type: "Point", coordinates: [0, 0]}}]}), [480, 250]);
  test.end();
});

tape("geoPath.centroid(…) of a feature collection with a point and a line string", function(test) {
  test.deepEqual(testCentroid(equirectangular, {type: "FeatureCollection", features: [
    {type: "Feature", geometry: {type: "LineString", coordinates: [[179, 0], [180, 0]]}},
    {type: "Feature", geometry: {type: "Point", coordinates: [0, 0]}}
  ]}), [1377.5, 250]);
  test.end();
});

tape("geoPath.centroid(…) of a feature collection with a point, line string and polygon", function(test) {
  test.deepEqual(testCentroid(equirectangular, {type: "FeatureCollection", features: [
    {type: "Feature", geometry: {type: "Polygon", coordinates: [[[-180, 0], [-180, 1], [-179, 1], [-179, 0], [-180, 0]]]}},
    {type: "Feature", geometry: {type: "LineString", coordinates: [[179, 0], [180, 0]]}},
    {type: "Feature", geometry: {type: "Point", coordinates: [0, 0]}}
  ]}), [-417.5, 247.5]);
  test.end();
});

tape("geoPath.centroid(…) of a sphere", function(test) {
  test.deepEqual(testCentroid(equirectangular, {type: "Sphere"}), [480, 250]);
  test.end();
});
