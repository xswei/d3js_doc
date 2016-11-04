var tape = require("tape"),
    asArray = require("./asArray"),
    voronoi = require("../");

tape("voronoi(points).find(x, y) returns the closest site", function(test) {
  var v = voronoi.voronoi();
  test.deepEqual(asArray(v([[200, 200], [500, 250], [760, 300]]).find(0, 0)), [200, 200]);
  test.deepEqual(asArray(v([[200, 200], [500, 250], [760, 300]]).find(600, 0)), [500, 250]);
  test.end();
});

tape("voronoi(points).find(x, y, radius) returns the closest site within radius", function(test) {
  var v = voronoi.voronoi();
  test.strictEqual(v([[200, 200], [500, 250], [760, 300]]).find(0, 0, 10), null);
  test.deepEqual(asArray(v([[200, 200], [500, 250], [760, 300]]).find(0, 0, 300)), [200, 200]);
  test.end();
});

tape("voronoi(points).find(x, y, 0) returns the site at the position [x, y]", function(test) {
  var v = voronoi.voronoi();
  test.deepEqual(asArray(v([[200, 200], [500, 250], [760, 300]]).find(200, 200, 0)), [200, 200]);
  test.end();
});
