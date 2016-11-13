var tape = require("tape"),
    d3 = require("../");

require("./inDelta");

tape("bounds: Feature", function(test) {
  test.deepEqual(d3.geoBounds({
    type: "Feature",
    geometry: {
      type: "MultiPoint",
      coordinates: [[-123, 39], [-122, 38]]
    }
  }), [[-123, 38], [-122, 39]]);
  test.end();
});

tape("bounds: FeatureCollection", function(test) {
  test.deepEqual(d3.geoBounds({
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-123, 39]
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-122, 38]
        }
      }
    ]
  }), [[-123, 38], [-122, 39]]);
  test.end();
});

tape("bounds: GeometryCollection", function(test) {
  test.deepEqual(d3.geoBounds({
    type: "GeometryCollection",
    geometries: [
      {
        type: "Point",
        coordinates: [-123, 39]
      },
      {
        type: "Point",
        coordinates: [-122, 38]
      }
    ]
  }), [[-123, 38], [-122, 39]]);
  test.end();
});

tape("bounds: LineString - simple", function(test) {
  test.deepEqual(d3.geoBounds({
    type: "LineString",
    coordinates: [[-123, 39], [-122, 38]]
  }), [[-123, 38], [-122, 39]]);
  test.end();
});

tape("bounds: LineString - containing coincident points", function(test) {
  test.deepEqual(d3.geoBounds({
    type: "LineString",
    coordinates: [[-123, 39], [-122, 38], [-122, 38]]
  }), [[-123, 38], [-122, 39]]);
  test.end();
});

tape("bounds: LineString - meridian", function(test) {
  test.deepEqual(d3.geoBounds({
    type: "LineString",
    coordinates: [[0, 0], [0, 1], [0, 60]]
  }), [[0, 0], [0, 60]]);
  test.end();
});

tape("bounds: LineString - equator", function(test) {
  test.deepEqual(d3.geoBounds({
    type: "LineString",
    coordinates: [[0, 0], [1, 0], [60, 0]]
  }), [[0, 0], [60, 0]]);
  test.end();
});

tape("bounds: LineString - containing an inflection point in the Northern hemisphere", function(test) {
  test.inDelta(d3.geoBounds({
    type: "LineString",
    coordinates: [[-45, 60], [45, 60]]
  }), [[-45, 60], [45, 67.792345]], 1e-6);
  test.end();
});

tape("bounds: LineString - containing an inflection point in the Southern hemisphere", function(test) {
  test.inDelta(d3.geoBounds({
    type: "LineString",
    coordinates: [[-45, -60], [45, -60]]
  }), [[-45, -67.792345], [45, -60]], 1e-6);
  test.end();
});

tape("bounds: MultiLineString", function(test) {
  test.deepEqual(d3.geoBounds({
    type: "MultiLineString",
    coordinates: [[[-123, 39], [-122, 38]]]
  }), [[-123, 38], [-122, 39]]);
  test.end();
});

tape("bounds: MultiPoint - simple", function(test) {
  test.deepEqual(d3.geoBounds({
    type: "MultiPoint",
    coordinates: [[-123, 39], [-122, 38]]
  }), [[-123, 38], [-122, 39]]);
  test.end();
});

tape("bounds: MultiPoint - two points near antimeridian", function(test) {
  test.deepEqual(d3.geoBounds({
    type: "MultiPoint",
    coordinates: [[-179, 39], [179, 38]]
  }), [[179, 38], [-179, 39]]);
  test.end();
});

tape("bounds: MultiPoint - two points near antimeridian, two points near primary meridian", function(test) {
  test.deepEqual(d3.geoBounds({
    type: "MultiPoint",
    coordinates: [[-179, 39], [179, 38], [-1, 0], [1, 0]]
  }), [[-1, 0], [-179, 39]]);
  test.end();
});

tape("bounds: MultiPoint - two points near primary meridian, two points near antimeridian", function(test) {
  test.deepEqual(d3.geoBounds({
    type: "MultiPoint",
    coordinates: [[-1, 0], [1, 0], [-179, 39], [179, 38]]
  }), [[-1, 0], [-179, 39]]);
  test.end();
});

tape("bounds: MultiPoint - four mixed points near primary meridian and antimeridian", function(test) {
  test.deepEqual(d3.geoBounds({
    type: "MultiPoint",
    coordinates: [[-1, 0], [-179, 39], [1, 0], [179, 38]]
  }), [[-1, 0], [-179, 39]]);
  test.end();
});

tape("bounds: MultiPoint - three points near antimeridian", function(test) {
  test.deepEqual(d3.geoBounds({
    type: "MultiPoint",
    coordinates: [[178, 38], [179, 39], [-179, 37]]
  }), [[178, 37], [-179, 39]]);
  test.end();
});

tape("bounds: MultiPoint - various points near antimeridian", function(test) {
  test.deepEqual(d3.geoBounds({
    type: "MultiPoint",
    coordinates: [[-179, 39], [-179, 38], [178, 39], [-178, 38]]
  }), [[178, 38], [-178, 39]]);
  test.end();
});

tape("bounds: MultiPolygon", function(test) {
  test.inDelta(d3.geoBounds({
    type: "MultiPolygon",
    coordinates: [
      [[[-123, 39], [-122, 39], [-122, 38], [-123, 39]],
      [[10, 20], [20, 20], [20, 10], [10, 10], [10, 20]]]
    ]
  }), [[-123, 10], [20, 39.001067]], 1e-6);
  test.end();
});

tape("bounds: Point", function(test) {
  test.deepEqual(d3.geoBounds({
    type: "Point",
    coordinates: [-123, 39]
  }), [[-123, 39], [-123, 39]]);
  test.end();
});

tape("bounds: Polygon - simple", function(test) {
  test.inDelta(d3.geoBounds({
    type: "Polygon",
    coordinates: [[[-123, 39], [-122, 39], [-122, 38], [-123, 39]]]
  }), [[-123, 38], [-122, 39.001067]], 1e-6);
  test.end();
});

tape("bounds: Polygon - larger than a hemisphere, small, counter-clockwise", function(test) {
  test.deepEqual(d3.geoBounds({
    type: "Polygon",
    coordinates: [[[0, 0], [10, 0], [10, 10], [0, 10], [0, 0]]]
  }), [[-180, -90], [180, 90]]);
  test.end();
});

tape("bounds: Polygon - larger than a hemisphere, large lat-lon rectangle", function(test) {
  test.inDelta(d3.geoBounds({
    type: "Polygon",
    coordinates: [[[-170, 80], [0, 80], [170, 80], [170, -80], [0, -80], [-170, -80], [-170, 80]]]
  }), [[-170, -89.119552], [170, 89.119552]], 1e-6);
  test.end();
});

tape("bounds: Polygon - larger than a hemisphere, South pole", function(test) {
  test.inDelta(d3.geoBounds({
    type: "Polygon",
    coordinates: [[[10, 80], [170, 80], [-170, 80], [-10, 80], [10, 80]]]
  }), [[-180, -90], [180, 88.246216]], 1e-6);
  test.end();
});

tape("bounds: Polygon - larger than a hemisphere, excluding both poles", function(test) {
  test.inDelta(d3.geoBounds({
    type: "Polygon",
    coordinates: [[[10, 80], [170, 80], [-170, 80], [-10, 80], [-10, 0], [-10, -80], [-170, -80], [170, -80], [10, -80], [10, 0], [10, 80]]]
  }), [[10, -88.246216], [-10, 88.246216]], 1e-6);
  test.end();
});

tape("bounds: Polygon - South pole", function(test) {
  test.deepEqual(d3.geoBounds({
    type: "Polygon",
    coordinates: [[[-60, -80], [60, -80], [180, -80], [-60, -80]]]
  }), [[-180, -90], [180, -80]]);
  test.end();
});

tape("bounds: Polygon - ring", function(test) {
  test.inDelta(d3.geoBounds({
    type: "Polygon",
    coordinates: [
      [[-60, -80], [60, -80], [180, -80], [-60, -80]],
      [[-60, -89], [180, -89], [60, -89], [-60, -89]]
    ]
  }), [[-180, -89.499961], [180, -80]], 1e-6);
  test.end();
});

tape("bounds: NestedCollection", function(test) {
  test.deepEqual(d3.geoBounds({
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "GeometryCollection",
          geometries: [
            {
              type: "Point",
              coordinates: [-120,47]
            },
            {
              type: "Point",
              coordinates: [-119,46]
            }
          ]
        }
      }
    ]
  }), [[-120,46], [-119,47]]);
  test.end();
});

tape("bounds: null geometries - Feature", function(test) {
  var b = d3.geoBounds({type: "Feature", geometry: null});
  test.assert(isNaN(b[0][0]));
  test.assert(isNaN(b[0][1]));
  test.assert(isNaN(b[1][0]));
  test.assert(isNaN(b[1][1]));
  test.end();
});

tape("bounds: null geometries - MultiPoint", function(test) {
  var b = d3.geoBounds({type: "MultiPoint", coordinates: []});
  test.assert(isNaN(b[0][0]));
  test.assert(isNaN(b[0][1]));
  test.assert(isNaN(b[1][0]));
  test.assert(isNaN(b[1][1]));
  test.end();
});

tape("bounds: null geometries - MultiLineString", function(test) {
  var b = d3.geoBounds({type: "MultiLineString", coordinates: []});
  test.assert(isNaN(b[0][0]));
  test.assert(isNaN(b[0][1]));
  test.assert(isNaN(b[1][0]));
  test.assert(isNaN(b[1][1]));
  test.end();
});

tape("bounds: null geometries - MultiPolygon", function(test) {
  var b = d3.geoBounds({type: "MultiPolygon", coordinates: []});
  test.assert(isNaN(b[0][0]));
  test.assert(isNaN(b[0][1]));
  test.assert(isNaN(b[1][0]));
  test.assert(isNaN(b[1][1]));
  test.end();
});
