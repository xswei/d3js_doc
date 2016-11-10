var tape = require("tape"),
    d3_quadtree = require("../");

tape("quadtree.y(y) sets the y-accessor used by quadtree.add", function(test) {
  var q = d3_quadtree.quadtree().y(y).add({0: 1, y: 2});
  test.deepEqual(q.extent(), [[1, 2], [2, 3]]);
  test.deepEqual(q.root(), {data: {0: 1, y: 2}});
  test.end();
});

tape("quadtree.y(y) sets the y-accessor used by quadtree.addAll", function(test) {
  var q = d3_quadtree.quadtree().y(y).addAll([{0: 1, y: 2}]);
  test.deepEqual(q.extent(), [[1, 2], [2, 3]]);
  test.deepEqual(q.root(), {data: {0: 1, y: 2}});
  test.end();
});

tape("quadtree.y(y) sets the y-accessor used by quadtree.remove", function(test) {
  var p0 = {0: 0, y: 1},
      p1 = {0: 1, y: 2},
      q = d3_quadtree.quadtree().y(y);
  test.deepEqual(q.add(p0).root(), {data: {0: 0, y: 1}});
  test.deepEqual(q.add(p1).root(), [{data: {0: 0, y: 1}},,, {data: {0: 1, y: 2}}]);
  test.deepEqual(q.remove(p1).root(), {data: {0: 0, y: 1}});
  test.equal(q.remove(p0).root(), undefined);
  test.end();
});

function y(d) {
  return d.y;
}
