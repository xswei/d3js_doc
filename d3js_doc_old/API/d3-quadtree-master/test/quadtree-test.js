var tape = require("tape"),
    d3_quadtree = require("../");

tape("d3.quadtree() creates an empty quadtree", function(test) {
  var q = d3_quadtree.quadtree();
  test.ok(q instanceof d3_quadtree.quadtree);
  test.equal(q.visit(function(node, x0, y0, x1, y1) { throw new Error; }), q);
  test.equal(q.size(), 0);
  test.equal(q.extent(), undefined);
  test.equal(q.root(), undefined);
  test.deepEqual(q.data(), []);
  test.end();
});

tape("d3.quadtree(nodes) is equivalent to d3.quadtree().addAll(nodes)", function(test) {
  var q = d3_quadtree.quadtree([[0, 0], [1, 1]]);
  test.ok(q instanceof d3_quadtree.quadtree);
  test.deepEqual(q.root(), [{data: [0, 0]},,, {data: [1, 1]}]);
  test.end();
});

tape("d3.quadtree(nodes, x, y) is equivalent to d3.quadtree().x(x).y(y).addAll(nodes)", function(test) {
  var q = d3_quadtree.quadtree([{x: 0, y: 0}, {x: 1, y: 1}], function(d) { return d.x; }, function(d) { return d.y; });
  test.ok(q instanceof d3_quadtree.quadtree);
  test.deepEqual(q.root(), [{data: {x: 0, y: 0}},,, {data: {x: 1, y: 1}}]);
  test.end();
});
