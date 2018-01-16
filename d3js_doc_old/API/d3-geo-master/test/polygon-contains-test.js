var tape = require("tape"),
    rollup = require("rollup"),
    d3_geo = require("../");

rollup.rollup({entry: "src/polygon-contains.js"}).then(function(bundle) {
  var contains = new Function(bundle.generate({format: "iife", moduleName: "_"}).code + " return _;")();

  function polygonContains(polygon, point) {
    return contains(polygon.map(ringRadians), pointRadians(point));
  }

  tape("geoPolygonContains(empty, point) returns false", function(test) {
    test.equal(polygonContains([], [0, 0]), 0);
    test.end();
  });

  tape("geoPolygonContains(simple, point) returns the expected value", function(test) {
    var polygon = [[[0, 0], [0, 1], [1, 1], [1, 0], [0, 0]]];
    test.equal(polygonContains(polygon, [0.1, 2]), 0);
    test.equal(polygonContains(polygon, [0.1, 0.1]), 1);
    test.end();
  });

  tape("geoPolygonContains(smallCircle, point) returns the expected value", function(test) {
    var polygon = d3_geo.geoCircle().radius(60)().coordinates;
    test.equal(polygonContains(polygon, [-180, 0]), 0);
    test.equal(polygonContains(polygon, [1, 1]), 1);
    test.end();
  });

  tape("geoPolygonContains(southPole, point) returns the expected value", function(test) {
    var polygon = [[[-60, -80], [60, -80], [180, -80], [-60, -80]]];
    test.equal(polygonContains(polygon, [0, 0]), 0);
    test.equal(polygonContains(polygon, [0, -85]), 1);
    test.end();
  });

  tape("geoPolygonContains(northPole, point) returns the expected value", function(test) {
    var polygon = [[[60, 80], [-60, 80], [-180, 80], [60, 80]]];
    test.equal(polygonContains(polygon, [0, 0]), 0);
    test.equal(polygonContains(polygon, [0, 85]), 1);
    test.end();
  });

  tape("geoPolygonContains(largeNearOrigin, point) returns the expected value", function(test) {
    var polygon = [[[0, 0], [1, 0], [1, 1], [0, 1], [0, 0]]];
    test.equal(polygonContains(polygon, [0.1, 0.1]), 0);
    test.equal(polygonContains(polygon, [2, 0.1]), 1);
    test.end();
  });

  tape("geoPolygonContains(largeNearSouthPole, point) returns the expected value", function(test) {
    var polygon = [[[-60, 80], [60, 80], [180, 80], [-60, 80]]];
    test.equal(polygonContains(polygon, [0, 85]), 0);
    test.equal(polygonContains(polygon, [0, 0]), 1);
    test.end();
  });

  tape("geoPolygonContains(largeNearNorthPole, point) returns the expected value", function(test) {
    var polygon = [[[60, -80], [-60, -80], [-180, -80], [60, -80]]];
    test.equal(polygonContains(polygon, [0, -85]), 0);
    test.equal(polygonContains(polygon, [0, 0]), 1);
    test.end();
  });

  tape("geoPolygonContains(largeCircle, point) returns the expected value", function(test) {
    var polygon = d3_geo.geoCircle().radius(120)().coordinates;
    test.equal(polygonContains(polygon, [-180, 0]), 0);
    test.equal(polygonContains(polygon, [-90, 0]), 1);
    test.end();
  });

  tape("geoPolygonContains(largeNarrowStripHole, point) returns the expected value", function(test) {
    var polygon = [[[-170, -1], [0, -1], [170, -1], [170, 1], [0, 1], [-170, 1], [-170, -1]]];
    test.equal(polygonContains(polygon, [0, 0]), 0);
    test.equal(polygonContains(polygon, [0, 20]), 1);
    test.end();
  });

  tape("geoPolygonContains(largeNarrowEquatorialHole, point) returns the expected value", function(test) {
    var circle = d3_geo.geoCircle().center([0, -90]),
        ring0 = circle.radius(90 - 0.01)().coordinates[0],
        ring1 = circle.radius(90 + 0.01)().coordinates[0].reverse(),
        polygon = [ring0, ring1];
    test.equal(polygonContains(polygon, [0, 0]), 0);
    test.equal(polygonContains(polygon, [0, -90]), 1);
    test.end();
  });

  tape("geoPolygonContains(largeNarrowEquatorialStrip, point) returns the expected value", function(test) {
    var circle = d3_geo.geoCircle().center([0, -90]),
        ring0 = circle.radius(90 + 0.01)().coordinates[0],
        ring1 = circle.radius(90 - 0.01)().coordinates[0].reverse(),
        polygon = [ring0, ring1];
    test.equal(polygonContains(polygon, [0, -90]), 0);
    test.equal(polygonContains(polygon, [0, 0]), 1);
    test.end();
  });

  tape("geoPolygonContains(ringNearOrigin, point) returns the expected value", function(test) {
    var ring0 = [[0, 0], [0, 1], [1, 1], [1, 0], [0, 0]],
        ring1 = [[0.4, 0.4], [0.6, 0.4], [0.6, 0.6], [0.4, 0.6], [0.4, 0.4]],
        polygon = [ring0, ring1];
    test.equal(polygonContains(polygon, [0.5, 0.5]), 0);
    test.equal(polygonContains(polygon, [0.1, 0.5]), 1);
    test.end();
  });

  tape("geoPolygonContains(ringEquatorial, point) returns the expected value", function(test) {
    var ring0 = [[0, -10], [-120, -10], [120, -10], [0, -10]],
        ring1 = [[0, 10], [120, 10], [-120, 10], [0, 10]],
        polygon = [ring0, ring1];
    test.equal(polygonContains(polygon, [0, 20]), 0);
    test.equal(polygonContains(polygon, [0, 0]), 1);
    test.end();
  });

  tape("geoPolygonContains(ringExcludingBothPoles, point) returns the expected value", function(test) {
    var ring0 = [[10, 10], [-10, 10], [-10, -10], [10, -10], [10, 10]].reverse(),
        ring1 = [[170, 10], [170, -10], [-170, -10], [-170, 10], [170, 10]].reverse(),
        polygon = [ring0, ring1];
    test.equal(polygonContains(polygon, [0, 90]), 0);
    test.equal(polygonContains(polygon, [0, 0]), 1);
    test.end();
  });

  tape("geoPolygonContains(ringContainingBothPoles, point) returns the expected value", function(test) {
    var ring0 = [[10, 10], [-10, 10], [-10, -10], [10, -10], [10, 10]],
        ring1 = [[170, 10], [170, -10], [-170, -10], [-170, 10], [170, 10]],
        polygon = [ring0, ring1];
    test.equal(polygonContains(polygon, [0, 0]), 0);
    test.equal(polygonContains(polygon, [0, 20]), 1);
    test.end();
  });

  tape("geoPolygonContains(ringContainingSouthPole, point) returns the expected value", function(test) {
    var ring0 = [[10, 10], [-10, 10], [-10, -10], [10, -10], [10, 10]],
        ring1 = [[0, 80], [120, 80], [-120, 80], [0, 80]],
        polygon = [ring0, ring1];
    test.equal(polygonContains(polygon, [0, 90]), 0);
    test.equal(polygonContains(polygon, [0, -90]), 1);
    test.end();
  });

  tape("geoPolygonContains(ringContainingNorthPole, point) returns the expected value", function(test) {
    var ring0 = [[10, 10], [-10, 10], [-10, -10], [10, -10], [10, 10]].reverse(),
        ring1 = [[0, 80], [120, 80], [-120, 80], [0, 80]].reverse(),
        polygon = [ring0, ring1];
    test.equal(polygonContains(polygon, [0, -90]), 0);
    test.equal(polygonContains(polygon, [0, 90]), 1);
    test.end();
  });

  tape("geoPolygonContains(selfIntersectingNearOrigin, point) returns the expected value", function(test) {
    var polygon = [[[0, 0], [1, 0], [1, 3], [3, 3], [3, 1], [0, 1], [0, 0]]];
    test.equal(polygonContains(polygon, [15, 0.5]), 0);
    test.equal(polygonContains(polygon, [12, 2]), 0);
    test.equal(polygonContains(polygon, [0.5, 0.5]), 1);
    test.equal(polygonContains(polygon, [2, 2]), 1);
    test.end();
  });

  tape("geoPolygonContains(selfIntersectingNearSouthPole, point) returns the expected value", function(test) {
    var polygon = [[[-10, -80], [120, -80], [-120, -80], [10, -85], [10, -75], [-10, -75], [-10, -80]]];
    test.equal(polygonContains(polygon, [0, 0]), 0);
    test.equal(polygonContains(polygon, [0, -76]), 1);
    test.equal(polygonContains(polygon, [0, -89]), 1);
    test.end();
  });

  tape("geoPolygonContains(selfIntersectingNearNorthPole, point) returns the expected value", function(test) {
    var polygon = [[[-10, 80], [-10, 75], [10, 75], [10, 85], [-120, 80], [120, 80], [-10, 80]]];
    test.equal(polygonContains(polygon, [0, 0]), 0);
    test.equal(polygonContains(polygon, [0, 76]), 1);
    test.equal(polygonContains(polygon, [0, 89]), 1);
    test.end();
  });

  tape("geoPolygonContains(hemisphereTouchingTheSouthPole, point) returns the expected value", function(test) {
    var polygon = d3_geo.geoCircle().radius(90)().coordinates;
    test.equal(polygonContains(polygon, [0, 0]), 1);
    test.end();
  });

  tape("geoPolygonContains(triangleTouchingTheSouthPole, point) returns the expected value", function(test) {
    var polygon = [[[180, -90], [-45, 0], [45, 0], [180, -90]]];
    test.equal(polygonContains(polygon, [-46, 0]), 0);
    test.equal(polygonContains(polygon, [0, 1]), 0);
    test.equal(polygonContains(polygon, [-90, -80]), 0);
    test.equal(polygonContains(polygon, [-44, 0]), 1);
    test.equal(polygonContains(polygon, [0, 0]), 1);
    test.equal(polygonContains(polygon, [0, -30]), 1);
    test.equal(polygonContains(polygon, [30, -80]), 1);
    test.end();
  });

  tape("geoPolygonContains(triangleTouchingTheSouthPole2, point) returns the expected value", function(test) {
    var polygon = [[[-45, 0], [45, 0], [180, -90], [-45, 0]]];
    test.equal(polygonContains(polygon, [-46, 0]), 0);
    test.equal(polygonContains(polygon, [0, 1]), 0);
    test.equal(polygonContains(polygon, [-90, -80]), 0);
    test.equal(polygonContains(polygon, [-44, 0]), 1);
    test.equal(polygonContains(polygon, [0, 0]), 1);
    test.equal(polygonContains(polygon, [0, -30]), 1);
    test.equal(polygonContains(polygon, [30, -80]), 1);
    test.end();
  });

  tape("geoPolygonContains(triangleTouchingTheSouthPole3, point) returns the expected value", function(test) {
    var polygon = [[[180, -90], [-135, 0], [135, 0], [180, -90]]];
    test.equal(polygonContains(polygon, [180, 0]), 0);
    test.equal(polygonContains(polygon, [150, 0]), 0);
    test.equal(polygonContains(polygon, [180, -30]), 0);
    test.equal(polygonContains(polygon, [150, -80]), 0);
    test.equal(polygonContains(polygon, [0, 0]), 1);
    test.equal(polygonContains(polygon, [180, 1]), 1);
    test.equal(polygonContains(polygon, [-90, -80]), 1);
    test.end();
  });

  tape("geoPolygonContains(triangleTouchingTheNorthPole, point) returns the expected value", function(test) {
    var polygon = [[[180, 90], [45, 0], [-45, 0], [180, 90]]];
    test.equal(polygonContains(polygon, [-90, 0]), 0);
    test.equal(polygonContains(polygon, [0, -1]), 0);
    test.equal(polygonContains(polygon, [0, -80]), 0);
    test.equal(polygonContains(polygon, [-90, 1]), 0);
    test.equal(polygonContains(polygon, [-90, 80]), 0);
    test.equal(polygonContains(polygon, [-44, 10]), 1);
    test.equal(polygonContains(polygon, [0, 10]), 1);
    test.equal(polygonContains(polygon, [30, 80]), 1);
    test.end();
  });
});

function ringRadians(ring) {
  return ring = ring.map(pointRadians), ring.pop(), ring;
}

function pointRadians(point) {
  return [point[0] * Math.PI / 180, point[1] * Math.PI / 180];
}
