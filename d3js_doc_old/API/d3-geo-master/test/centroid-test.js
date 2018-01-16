var tape = require("tape"),
    array = require("d3-array"),
    d3 = require("../");

require("./inDelta");

tape("the centroid of a point is itself", function(test) {
  test.inDelta(d3.geoCentroid({type: "Point", coordinates: [0, 0]}), [0, 0], 1e-6);
  test.inDelta(d3.geoCentroid({type: "Point", coordinates: [1, 1]}), [1, 1], 1e-6);
  test.inDelta(d3.geoCentroid({type: "Point", coordinates: [2, 3]}), [2, 3], 1e-6);
  test.inDelta(d3.geoCentroid({type: "Point", coordinates: [-4, -5]}), [-4, -5], 1e-6);
  test.end();
});

tape("the centroid of a set of points is the (spherical) average of its constituent members", function(test) {
  test.inDelta(d3.geoCentroid({type: "GeometryCollection", geometries: [{type: "Point", coordinates: [0, 0]}, {type: "Point", coordinates: [1, 2]}]}), [0.499847, 1.000038], 1e-6);
  test.inDelta(d3.geoCentroid({type: "MultiPoint", coordinates: [[0, 0], [1, 2]]}), [0.499847, 1.000038], 1e-6);
  test.inDelta(d3.geoCentroid({type: "MultiPoint", coordinates: [[179, 0], [-179, 0]]}), [180, 0], 1e-6);
  test.end();
});

tape("the centroid of a set of points and their antipodes is ambiguous", function(test) {
  test.ok(d3.geoCentroid({type: "MultiPoint", coordinates: [[0, 0], [180, 0]]}).every(isNaN));
  test.ok(d3.geoCentroid({type: "MultiPoint", coordinates: [[0, 0], [90, 0], [180, 0], [-90, 0]]}).every(isNaN));
  test.ok(d3.geoCentroid({type: "MultiPoint", coordinates: [[0, 0], [0, 90], [180, 0], [0, -90]]}).every(isNaN));
  test.end();
});

tape("the centroid of the empty set of points is ambiguous", function(test) {
  test.ok(d3.geoCentroid({type: "MultiPoint", coordinates: []}).every(isNaN));
  test.end();
});

tape("the centroid of a line string is the (spherical) average of its constituent great arc segments", function(test) {
  test.inDelta(d3.geoCentroid({type: "LineString", coordinates: [[0, 0], [1, 0]]}), [0.5, 0], 1e-6);
  test.inDelta(d3.geoCentroid({type: "LineString", coordinates: [[0, 0], [0, 90]]}), [0, 45], 1e-6);
  test.inDelta(d3.geoCentroid({type: "LineString", coordinates: [[0, 0], [0, 45], [0, 90]]}), [0, 45], 1e-6);
  test.inDelta(d3.geoCentroid({type: "LineString", coordinates: [[-1, -1], [1, 1]]}), [0, 0], 1e-6);
  test.inDelta(d3.geoCentroid({type: "LineString", coordinates: [[-60, -1], [60, 1]]}), [0, 0], 1e-6);
  test.inDelta(d3.geoCentroid({type: "LineString", coordinates: [[179, -1], [-179, 1]]}), [180, 0], 1e-6);
  test.inDelta(d3.geoCentroid({type: "LineString", coordinates: [[-179, 0], [0, 0], [179, 0]]}), [0, 0], 1e-6);
  test.inDelta(d3.geoCentroid({type: "LineString", coordinates: [[-180, -90], [0, 0], [0, 90]]}), [0, 0], 1e-6);
  test.end();
});

tape("the centroid of a great arc from a point to its antipode is ambiguous", function(test) {
  test.ok(d3.geoCentroid({type: "LineString", coordinates: [[180, 0], [0, 0]]}).every(isNaN));
  test.ok(d3.geoCentroid({type: "MultiLineString", coordinates: [[[0, -90], [0, 90]]]}).every(isNaN));
  test.end();
});

tape("the centroid of a set of line strings is the (spherical) average of its constituent great arc segments", function(test) {
  test.inDelta(d3.geoCentroid({type: "MultiLineString", coordinates: [[[0, 0], [0, 2]]]}), [0, 1], 1e-6);
  test.end();
});

tape("a line of zero length is treated as points", function(test) {
  test.inDelta(d3.geoCentroid({type: "LineString", coordinates: [[1, 1], [1, 1]]}), [1, 1], 1e-6);
  test.inDelta(d3.geoCentroid({type: "GeometryCollection", geometries: [{type: "Point", coordinates: [0, 0]}, {type: "LineString", coordinates: [[1, 2], [1, 2]]}]}), [0.666534, 1.333408], 1e-6);
  test.end();
});

tape("an empty polygon with non-zero extent is treated as a line", function(test) {
  test.inDelta(d3.geoCentroid({type: "Polygon", coordinates: [[[1, 1], [2, 1], [3, 1], [2, 1], [1, 1]]]}), [2, 1.000076], 1e-6);
  test.inDelta(d3.geoCentroid({type: "GeometryCollection", geometries: [{type: "Point", coordinates: [0, 0]}, {type: "Polygon", coordinates: [[[1, 2], [1, 2], [1, 2], [1, 2]]]}]}), [0.799907, 1.600077], 1e-6);
  test.end();
});

tape("an empty polygon with zero extent is treated as a point", function(test) {
  test.inDelta(d3.geoCentroid({type: "Polygon", coordinates: [[[1, 1], [1, 1], [1, 1], [1, 1]]]}), [1, 1], 1e-6);
  test.inDelta(d3.geoCentroid({type: "GeometryCollection", geometries: [{type: "Point", coordinates: [0, 0]}, {type: "Polygon", coordinates: [[[1, 2], [1, 2], [1, 2], [1, 2]]]}]}), [0.799907, 1.600077], 1e-6);
  test.end();
});

tape("the centroid of the equator is ambiguous", function(test) {
  test.ok(d3.geoCentroid({type: "LineString", coordinates: [[0, 0], [120, 0], [-120, 0], [0, 0]]}).every(isNaN));
  test.end();
});

tape("the centroid of a polygon is the (spherical) average of its surface", function(test) {
  test.inDelta(d3.geoCentroid({type: "Polygon", coordinates: [[[0, -90], [0, 0], [0, 90], [1, 0], [0, -90]]]}), [0.5, 0], 1e-6);
  test.inDelta(d3.geoCentroid({type: "Polygon", coordinates: [array.range(-180, 180 + 1 / 2, 1).map(function(x) { return [x, -60]; })]})[1], -90, 1e-6);
  test.inDelta(d3.geoCentroid({type: "Polygon", coordinates: [[[0, -10], [0, 10], [10, 10], [10, -10], [0, -10]]]}), [5, 0], 1e-6);
  test.end();
});

tape("the centroid of a set of polygons is the (spherical) average of its surface", function(test) {
  var circle = d3.geoCircle();
  test.inDelta(d3.geoCentroid({
    type: "MultiPolygon",
    coordinates: [
      circle.radius(45).center([0, 0])().coordinates,
      circle.radius(60).center([180, 0])().coordinates
    ]
  }), [180, 0], 1e-6);
  test.end();
});

tape("the centroid of a lune is the (spherical) average of its surface", function(test) {
  test.inDelta(d3.geoCentroid({type: "Polygon", coordinates: [[[0, -90], [0, 0], [0, 90], [1, 0], [0, -90]]]}), [0.5, 0], 1e-6);
  test.end();
});

tape("the centroid of a small circle is its center: 5°", function(test) {
  test.inDelta(d3.geoCentroid(d3.geoCircle().radius(5).center([30, 45])()), [30, 45], 1e-6);
  test.end();
});

tape("the centroid of a small circle is its center: 135°", function(test) {
  test.inDelta(d3.geoCentroid(d3.geoCircle().radius(135).center([30, 45])()), [30, 45], 1e-6);
  test.end();
});

tape("the centroid of a small circle is its center: South Pole", function(test) {
  test.equal(d3.geoCentroid({type: "Polygon", coordinates: [array.range(-180, 180 + 1 / 2, 1).map(function(x) { return [x, -60]; })]})[1], -90);
  test.end();
});

tape("the centroid of a small circle is its center: equator", function(test) {
  test.inDelta(d3.geoCentroid({type: "Polygon", coordinates: [[[0, -10], [0, 10], [10, 10], [10, -10], [0, -10]]]}), [5, 0], 1e-6);
  test.end();
});

tape("the centroid of a small circle is its center: equator with coincident points", function(test) {
  test.inDelta(d3.geoCentroid({type: "Polygon", coordinates: [[[0, -10], [0, 10], [0, 10], [10, 10], [10, -10], [0, -10]]]}), [5, 0], 1e-6);
  test.end();
});

tape("the centroid of a small circle is its center: other", function(test) {
  test.inDelta(d3.geoCentroid({type: "Polygon", coordinates: [[[-180, 0], [-180, 10], [-179, 10], [-179, 0], [-180, 0]]]}), [-179.5, 4.987448], 1e-6);
  test.end();
});

tape("the centroid of a small circle is its center: concentric rings", function(test) {
  var circle = d3.geoCircle().center([0, 45]),
      coordinates = circle.radius(60)().coordinates;
  coordinates.push(circle.radius(45)().coordinates[0].reverse());
  test.inDelta(d3.geoCentroid({type: "Polygon", coordinates: coordinates}), [0, 45], 1e-6);
  test.end();
});

tape("the centroid of a spherical square on the equator", function(test) {
  test.inDelta(d3.geoCentroid({type: "Polygon", coordinates: [[[0, -10], [0, 10], [10, 10], [10, -10], [0, -10]]]}), [5, 0], 1e-6);
  test.end();
});

tape("the centroid of a spherical square touching the antimeridian", function(test) {
  test.inDelta(d3.geoCentroid({type: "Polygon", coordinates: [[[-180, 0], [-180, 10], [-179, 10], [-179, 0], [-180, 0]]]}), [-179.5, 4.987448], 1e-6);
  test.end();
});

tape("concentric rings", function(test) {
  var circle = d3.geoCircle().center([0, 45]),
      coordinates = circle.radius(60)().coordinates;
  coordinates.push(circle.radius(45)().coordinates[0].reverse());
  test.inDelta(d3.geoCentroid({type: "Polygon", coordinates: coordinates}), [0, 45], 1e-6);
  test.end();
});

tape("the centroid of a sphere is ambiguous", function(test) {
  test.ok(d3.geoCentroid({type: "Sphere"}).every(isNaN));
  test.end();
});

tape("the centroid of a feature is the centroid of its constituent geometry", function(test) {
  test.inDelta(d3.geoCentroid({type: "Feature", geometry: {type: "LineString", coordinates: [[1, 1], [1, 1]]}}), [1, 1], 1e-6);
  test.inDelta(d3.geoCentroid({type: "Feature", geometry: {type: "Point", coordinates: [1, 1]}}), [1, 1], 1e-6);
  test.inDelta(d3.geoCentroid({type: "Feature", geometry: {type: "Polygon", coordinates: [[[0, -90], [0, 0], [0, 90], [1, 0], [0, -90]]]}}), [0.5, 0], 1e-6);
  test.end();
});

tape("the centroid of a feature collection is the centroid of its constituent geometry", function(test) {
  test.inDelta(d3.geoCentroid({type: "FeatureCollection", features: [
    {type: "Feature", geometry: {type: "LineString", coordinates: [[179, 0], [180, 0]]}},
    {type: "Feature", geometry: {type: "Point", coordinates: [0, 0]}}
  ]}), [179.5, 0], 1e-6);
  test.end();
});

tape("the centroid of a non-empty line string and a point only considers the line string", function(test) {
  test.inDelta(d3.geoCentroid({type: "GeometryCollection", geometries: [
    {type: "LineString", coordinates: [[179, 0], [180, 0]]},
    {type: "Point", coordinates: [0, 0]}
  ]}), [179.5, 0], 1e-6);
  test.end();
});

tape("the centroid of a non-empty polygon, a non-empty line string and a point only considers the polygon", function(test) {
  test.inDelta(d3.geoCentroid({type: "GeometryCollection", geometries: [
    {type: "Polygon", coordinates: [[[-180, 0], [-180, 1], [-179, 1], [-179, 0], [-180, 0]]]},
    {type: "LineString", coordinates: [[179, 0], [180, 0]]},
    {type: "Point", coordinates: [0, 0]}
  ]}), [-179.5, 0.500006], 1e-6);
  test.inDelta(d3.geoCentroid({type: "GeometryCollection", geometries: [
    {type: "Point", coordinates: [0, 0]},
    {type: "LineString", coordinates: [[179, 0], [180, 0]]},
    {type: "Polygon", coordinates: [[[-180, 0], [-180, 1], [-179, 1], [-179, 0], [-180, 0]]]}
  ]}), [-179.5, 0.500006], 1e-6);
  test.end();
});

tape("the centroid of the sphere and a point is the point", function(test) {
  test.deepEqual(d3.geoCentroid({type: "GeometryCollection", geometries: [
    {type: "Sphere"},
    {type: "Point", coordinates: [0, 0]}
  ]}), [0, 0]);
  test.deepEqual(d3.geoCentroid({type: "GeometryCollection", geometries: [
    {type: "Point", coordinates: [0, 0]},
    {type: "Sphere"}
  ]}), [0, 0]);
  test.end();
});
