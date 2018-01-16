var tape = require("tape"),
    voronoi = require("../");

tape("voronoi.links(points) returns the Delaunay mesh for the specified points", function(test) {
  var v = voronoi.voronoi();
  test.deepEqual(v.links([[200, 200], [760, 300]]), [
    {source: [200, 200], target: [760, 300]}
  ]);
  test.deepEqual(v.links([[200, 200], [500, 250], [760, 300]]), [
    {source: [200, 200], target: [500, 250]},
    {source: [500, 250], target: [760, 300]},
    {source: [760, 300], target: [200, 200]}
  ]);
  test.end();
});

tape("voronoi.links(points) observes the specified x- and y-accessors", function(test) {
  var v = voronoi.voronoi().x(function(d) { return d.x; }).y(function(d) { return d.y; });
  test.deepEqual(v.links([{x: 200, y: 200}, {x: 760, y: 300}]), [
    {source: {x: 200, y: 200}, target: {x: 760, y: 300}}
  ]);
  test.deepEqual(v.links([{x: 200, y: 200}, {x: 500, y: 250}, {x: 760, y: 300}]), [
    {source: {x: 200, y: 200}, target: {x: 500, y: 250}},
    {source: {x: 500, y: 250}, target: {x: 760, y: 300}},
    {source: {x: 760, y: 300}, target: {x: 200, y: 200}}
  ]);
  test.end();
});
