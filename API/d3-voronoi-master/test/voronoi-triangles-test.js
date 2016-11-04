var tape = require("tape"),
    voronoi = require("../");

tape("voronoi.triangles(points) returns the Delaunay triangulation for the specified points", function(test) {
  var v = voronoi.voronoi();
  test.deepEqual(v.triangles([[200, 200], [500, 250], [760, 300]]), [
    [[200, 200], [760, 300], [500, 250]]
  ]);
  test.end();
});

tape("voronoi.triangles(points) observes the specified x- and y-accessors", function(test) {
  var v = voronoi.voronoi().x(function(d) { return d.x; }).y(function(d) { return d.y; });
  test.deepEqual(v.triangles([{x: 200, y: 200}, {x: 500, y: 250}, {x: 760, y: 300}]), [
    [{x: 200, y: 200}, {x: 760, y: 300}, {x: 500, y: 250}]
  ]);
  test.end();
});

tape("voronoi.extent(extent).triangles(points) returns a limited triangulation", function(test) {
  var v = voronoi.voronoi().extent([[0, 0], [800, 600]]);
  test.deepEqual(v.triangles([[100, 100], [100, 200], [200, 200], [500, 250], [760, 300]]), [
    [[100, 100], [100, 200], [200, 200]]
  ]);
  test.end();
});

