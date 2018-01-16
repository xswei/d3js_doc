var tape = require("tape"),
    d3_quadtree = require("../");

tape("quadtree.data() returns an array of data in the quadtree", function(test) {
  var q = d3_quadtree.quadtree();
  test.deepEqual(q.data(), []);
  q.add([0, 0]).add([1, 2]);
  test.deepEqual(q.data(), [[0, 0], [1, 2]]);
  test.end();
});

tape("quadtree.data() correctly handles coincident nodes", function(test) {
  var q = d3_quadtree.quadtree();
  q.add([0, 0]).add([0, 0]);
  test.deepEqual(q.data(), [[0, 0], [0, 0]]);
  test.end();
});
