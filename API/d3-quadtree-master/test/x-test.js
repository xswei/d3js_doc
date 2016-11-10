var tape = require("tape"),
    d3_quadtree = require("../");

tape("quadtree.x(x) sets the x-accessor used by quadtree.add", function(test) {
  var q = d3_quadtree.quadtree().x(x).add({x: 1, 1: 2});
  test.deepEqual(q.extent(), [[1, 2], [2, 3]]);
  test.deepEqual(q.root(), {data: {x: 1, 1: 2}});
  test.end();
});

tape("quadtree.x(x) sets the x-accessor used by quadtree.addAll", function(test) {
  var q = d3_quadtree.quadtree().x(x).addAll([{x: 1, 1: 2}]);
  test.deepEqual(q.extent(), [[1, 2], [2, 3]]);
  test.deepEqual(q.root(), {data: {x: 1, 1: 2}});
  test.end();
});

tape("quadtree.x(x) sets the x-accessor used by quadtree.remove", function(test) {
  var p0 = {x: 0, 1: 1},
      p1 = {x: 1, 1: 2},
      q = d3_quadtree.quadtree().x(x);
  test.deepEqual(q.add(p0).root(), {data: {x: 0, 1: 1}});
  test.deepEqual(q.add(p1).root(), [{data: {x: 0, 1: 1}},,, {data: {x: 1, 1: 2}}]);
  test.deepEqual(q.remove(p1).root(), {data: {x: 0, 1: 1}});
  test.equal(q.remove(p0).root(), undefined);
  test.end();
});

function x(d) {
  return d.x;
}
