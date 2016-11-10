var tape = require("tape"),
    d3_quadtree = require("../");

tape("quadtree.add(datum) creates a new point and adds it to the quadtree", function(test) {
  var q = d3_quadtree.quadtree();
  test.deepEqual(q.add([0, 0]).root(), {data: [0, 0]});
  test.deepEqual(q.add([1, 1]).root(), [{data: [0, 0]},,, {data: [1, 1]}]);
  test.deepEqual(q.add([1, 0]).root(), [{data: [0, 0]}, {data: [1, 0]},, {data: [1, 1]}]);
  test.deepEqual(q.add([0, 1]).root(), [{data: [0, 0]}, {data: [1, 0]}, {data: [0, 1]}, {data: [1, 1]}]);
  test.deepEqual(q.add([0.4, 0.4]).root(), [[{data: [0, 0]},,, {data: [0.4, 0.4]}], {data: [1, 0]}, {data: [0, 1]}, {data: [1, 1]}]);
  test.end();
});

tape("quadtree.add(datum) handles points being on the perimeter of the quadtree bounds", function(test) {
  var results = [], q = d3_quadtree.quadtree().extent([[0, 0], [1, 1]]);
  test.deepEqual(q.add([0, 0]).root(), {data: [0, 0]});
  test.deepEqual(q.add([1, 1]).root(), [{data: [0, 0]},,, {data: [1, 1]}]);
  test.deepEqual(q.add([1, 0]).root(), [{data: [0, 0]}, {data: [1, 0]},, {data: [1, 1]}]);
  test.deepEqual(q.add([0, 1]).root(), [{data: [0, 0]}, {data: [1, 0]}, {data: [0, 1]}, {data: [1, 1]}]);
  test.end();
});

tape("quadtree.add(datum) handles points being to the top of the quadtree bounds", function(test) {
  var results = [], q = d3_quadtree.quadtree().extent([[0, 0], [2, 2]]);
  test.deepEqual(q.add([1, -1]).extent(), [[0, -2], [4, 2]]);
  test.end();
});

tape("quadtree.add(datum) handles points being to the right of the quadtree bounds", function(test) {
  var results = [], q = d3_quadtree.quadtree().extent([[0, 0], [2, 2]]);
  test.deepEqual(q.add([3, 1]).extent(), [[0, 0], [4, 4]]);
  test.end();
});

tape("quadtree.add(datum) handles points being to the bottom of the quadtree bounds", function(test) {
  var results = [], q = d3_quadtree.quadtree().extent([[0, 0], [2, 2]]);
  test.deepEqual(q.add([1, 3]).extent(), [[0, 0], [4, 4]]);
  test.end();
});

tape("quadtree.add(datum) handles points being to the left of the quadtree bounds", function(test) {
  var results = [], q = d3_quadtree.quadtree().extent([[0, 0], [2, 2]]);
  test.deepEqual(q.add([-1, 1]).extent(), [[-2, 0], [2, 4]]);
  test.end();
});

tape("quadtree.add(datum) handles coincident points by creating a linked list", function(test) {
  var q = d3_quadtree.quadtree().extent([[0, 0], [1, 1]]);
  test.deepEqual(q.add([0, 0]).root(), {data: [0, 0]});
  test.deepEqual(q.add([1, 0]).root(), [{data: [0, 0]}, {data: [1, 0]},, ]);
  test.deepEqual(q.add([0, 1]).root(), [{data: [0, 0]}, {data: [1, 0]}, {data: [0, 1]}, ]);
  test.deepEqual(q.add([0, 1]).root(), [{data: [0, 0]}, {data: [1, 0]}, {data: [0, 1], next: {data: [0, 1]}}, ]);
  test.end();
});

tape("quadtree.add(datum) implicitly defines trivial bounds for the first point", function(test) {
  var q = d3_quadtree.quadtree().add([1, 2]);
  test.deepEqual(q.extent(), [[1, 2], [2, 3]]);
  test.deepEqual(q.root(), {data: [1, 2]});
  test.end();
});
