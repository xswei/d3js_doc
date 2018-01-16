var tape = require("tape"),
    d3_quadtree = require("../");

tape("quadtree.size() returns the number of points in the quadtree", function(test) {
  var q = d3_quadtree.quadtree();
  test.equal(q.size(), 0);
  q.add([0, 0]).add([1, 2]);
  test.equal(q.size(), 2);
  test.end();
});

tape("quadtree.size() correctly counts coincident nodes", function(test) {
  var q = d3_quadtree.quadtree();
  q.add([0, 0]).add([0, 0]);
  test.equal(q.size(), 2);
  test.end();
});
