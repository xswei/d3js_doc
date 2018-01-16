var tape = require("tape"),
    polygon = require("../");

tape("polygonContains(polygon, point) returns the expected value for closed counterclockwise polygons", function(test) {
  test.equal(polygon.polygonContains([[0, 0], [0, 1], [1, 1], [1, 0], [0, 0]], [0.5, 0.5]), true);
  test.equal(polygon.polygonContains([[0, 0], [0, 1], [1, 1], [1, 0], [0, 0]], [1.5, 0.5]), false);
  test.equal(polygon.polygonContains([[0, 0], [0, 1], [1, 1], [1, 0], [0, 0]], [-0.5, 0.5]), false);
  test.equal(polygon.polygonContains([[0, 0], [0, 1], [1, 1], [1, 0], [0, 0]], [0.5, 1.5]), false);
  test.equal(polygon.polygonContains([[0, 0], [0, 1], [1, 1], [1, 0], [0, 0]], [0.5, -0.5]), false);
  test.end();
});

tape("polygonContains(polygon, point) returns the expected value for closed clockwise polygons", function(test) {
  test.equal(polygon.polygonContains([[0, 0], [1, 0], [1, 1], [0, 1], [0, 0]], [0.5, 0.5]), true);
  test.equal(polygon.polygonContains([[1, 1], [3, 2], [2, 3], [1, 1]], [1.5, 1.5]), true);
  test.end();
});

tape("polygonContains(polygon, point) returns the expected value for open counterclockwise polygons", function(test) {
  test.equal(polygon.polygonContains([[0, 0], [0, 1], [1, 1], [1, 0]], [0.5, 0.5]), true);
  test.end();
});

tape("polygonContains(polygon, point) returns the expected value for open clockwise polygons", function(test) {
  test.equal(polygon.polygonContains([[0, 0], [1, 0], [1, 1], [0, 1]], [0.5, 0.5]), true);
  test.equal(polygon.polygonContains([[1, 1], [3, 2], [2, 3]], [1.5, 1.5]), true);
  test.end();
});
