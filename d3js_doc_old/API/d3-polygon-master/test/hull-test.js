var tape = require("tape"),
    polygon = require("../");

tape("polygonHull(points) returns null if points has fewer than three elements", function(test) {
  test.equal(polygon.polygonHull([]), null);
  test.equal(polygon.polygonHull([[0, 1]]), null);
  test.equal(polygon.polygonHull([[0, 1], [1, 0]]), null);
  test.end();
});

tape("polygonHull(points) returns the convex hull of the specified points", function(test) {
  test.deepEqual(polygon.polygonHull([[200, 200], [760, 300], [500, 500]]), [[760, 300], [200, 200], [500, 500]]);
  test.deepEqual(polygon.polygonHull([[200, 200], [760, 300], [500, 500], [400, 400]]), [[760, 300], [200, 200], [500, 500]]);
  test.end();
});

tape("polygonHull(points) handles points with duplicate ordinates", function(test) {
  test.deepEqual(polygon.polygonHull([[-10, -10], [10, 10], [10, -10], [-10, 10]]), [[10, 10], [10, -10], [-10, -10], [-10, 10]]);
  test.end();
});

tape("polygonHull(points) handles overlapping upper and lower hulls", function(test) {
  test.deepEqual(polygon.polygonHull([[0, -10], [0, 10], [0, 0], [10, 0], [-10, 0]]), [[10, 0], [0, -10], [-10, 0], [0, 10]]);
  test.end();
});

// Cases below taken from http://uva.onlinejudge.org/external/6/681.html
tape("polygonHull(points) handles various non-trivial hulls", function(test) {
  test.deepEqual(polygon.polygonHull([[60, 20], [250, 140], [180, 170], [79, 140], [50, 60], [60, 20]]), [[250, 140], [60, 20], [50, 60], [79, 140], [180, 170]]);
  test.deepEqual(polygon.polygonHull([[50, 60], [60, 20], [70, 45], [100, 70], [125, 90], [200, 113], [250, 140], [180, 170], [105, 140], [79, 140], [60, 85], [50, 60]]), [[250, 140], [60, 20], [50, 60], [79, 140], [180, 170]]);
  test.deepEqual(polygon.polygonHull([[30, 30], [50, 60], [60, 20], [70, 45], [86, 39], [112, 60], [200, 113], [250, 50], [300, 200], [130, 240], [76, 150], [47, 76], [36, 40], [33, 35], [30, 30]]), [[300, 200], [250, 50], [60, 20], [30, 30], [47, 76], [76, 150], [130, 240]]);
  test.end();
});
