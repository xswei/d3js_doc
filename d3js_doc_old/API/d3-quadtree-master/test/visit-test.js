var tape = require("tape"),
    d3_quadtree = require("../");

tape("quadtree.visit(callback) visits each node in a quadtree", function(test) {
  var results = [], q = d3_quadtree.quadtree()
      .addAll([[0, 0], [1, 0], [0, 1], [1, 1]]);
  test.equal(q.visit(function(node, x0, y0, x1, y1) { results.push([x0, y0, x1, y1]); }), q);
  test.deepEqual(results, [
    [0.0, 0.0, 1.0, 1.0],
    [0.0, 0.0, 0.5, 0.5],
    [0.5, 0.0, 1.0, 0.5],
    [0.0, 0.5, 0.5, 1.0],
    [0.5, 0.5, 1.0, 1.0]
  ]);
  test.end();
});

tape("quadtree.visit(callback) applies pre-order traversal", function(test) {
  var results = [], q = d3_quadtree.quadtree()
      .extent([[0, 0], [960, 960]])
      .addAll([[100, 100], [200, 200], [300, 300]]);
  test.equal(q.visit(function(node, x0, y0, x1, y1) { results.push([x0, y0, x1, y1]); }), q);
  test.deepEqual(results, [
    [  0,   0, 1024, 1024],
    [  0,   0, 512, 512],
    [  0,   0, 256, 256],
    [  0,   0, 128, 128],
    [128, 128, 256, 256],
    [256, 256, 512, 512]
  ]);
  test.end();
});

tape("quadtree.visit(callback) does not recurse if the callback returns truthy", function(test) {
  var results = [], q = d3_quadtree.quadtree()
      .extent([[0, 0], [960, 960]])
      .addAll([[100, 100], [700, 700], [800, 800]]);
  test.equal(q.visit(function(node, x0, y0, x1, y1) { results.push([x0, y0, x1, y1]); return x0 > 0; }), q);
  test.deepEqual(results, [
    [  0,   0, 1024, 1024],
    [  0,   0, 512, 512],
    [512, 512, 1024, 1024]
  ]);
  test.end();
});

tape("quadtree.visit(callback) on an empty quadtree with no bounds does nothing", function(test) {
  var results = [], q = d3_quadtree.quadtree();
  test.equal(q.visit(function(node, x0, y0, x1, y1) { results.push([x0, y0, x1, y1]); }), q);
  test.equal(results.length, 0);
  test.end();
});

tape("quadtree.visit(callback) on an empty quadtree with bounds does nothing", function(test) {
  var results = [], q = d3_quadtree.quadtree()
      .extent([[0, 0], [960, 960]]);
  test.equal(q.visit(function(node, x0, y0, x1, y1) { results.push([x0, y0, x1, y1]); }), q);
  test.deepEqual(results.length, 0);
  test.end();
});
