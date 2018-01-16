var tape = require("tape"),
    d3 = require("../"),
    identity = d3.zoomIdentity;

tape("d3.zoomIdentity transform contains k = 1, x = y = 0", function(test) {
  test.deepEqual(toObject(identity), {k: 1, x: 0, y: 0});
  test.end();
});

tape("transform.scale(k) returns a new transform scaled with k", function(test) {
  var transform = identity.scale(2.5);
  test.deepEqual(toObject(transform.scale(2)), {k: 5, x: 0, y: 0});
  test.end();
});

tape("transform.translate(x, y) returns a new transform translated with x and y", function(test) {
  var transform = identity.translate(2, 3);
  test.deepEqual(toObject(transform.translate(-4, 4)), {k: 1, x: -2, y: 7});
  test.deepEqual(toObject(transform.scale(2).translate(-4, 4)), {k: 2, x: -6, y: 11});
  test.end();
});

tape("transform.apply([x, y]) returns the transformation of the specified point", function(test) {
  test.deepEqual(identity.translate(2, 3).scale(2).apply([4, 5]), [10, 13]);
  test.end();
});

tape("transform.applyX(x) returns the transformation of the specified x-coordinate", function(test) {
  test.deepEqual(identity.translate(2, 0).scale(2).applyX(4), 10);
  test.end();
});

tape("transform.applyY(y) returns the transformation of the specified y-coordinate", function(test) {
  test.deepEqual(identity.translate(0, 3).scale(2).applyY(5), 13);
  test.end();
});

tape("transform.invert([x, y]) returns the inverse transformation of the specified point", function(test) {
  test.deepEqual(identity.translate(2, 3).scale(2).invert([4, 5]), [1, 1]);
  test.end();
});

tape("transform.invertX(x) returns the inverse transformation of the specified x-coordinate", function(test) {
  test.deepEqual(identity.translate(2, 0).scale(2).invertX(4), 1);
  test.end();
});

tape("transform.invertY(y) returns the inverse transformation of the specified y-coordinate", function(test) {
  test.deepEqual(identity.translate(0, 3).scale(2).invertY(5), 1);
  test.end();
});

// transform.rescaleX(x)

// transform.rescaleY(y)

tape("transform.toString() returns a string representing the SVG transform", function(test) {
  test.equal(d3.zoomIdentity.toString(), "translate(0,0) scale(1)");
  test.end();
});

function toObject(transform) {
  return {k: transform.k, x: transform.x, y: transform.y};
}
