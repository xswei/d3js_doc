var tape = require("tape"),
    scale = require("../");

tape("scalePoint() has the expected defaults", function(test) {
  var s = scale.scalePoint();
  test.deepEqual(s.domain(), []);
  test.deepEqual(s.range(), [0, 1]);
  test.equal(s.bandwidth(), 0);
  test.equal(s.step(), 1);
  test.equal(s.round(), false);
  test.equal(s.padding(), 0);
  test.equal(s.align(), 0.5);
  test.end();
});

tape("scalePoint() does not expose paddingInner and paddingOuter", function(test) {
  var s = scale.scalePoint();
  test.equal(s.paddingInner, undefined);
  test.equal(s.paddingOuter, undefined);
  test.end();
});

tape("scalePoint() is similar to scaleBand().paddingInner(1)", function(test) {
  var p = scale.scalePoint().domain(["foo", "bar"]).range([0, 960]),
      b = scale.scaleBand().domain(["foo", "bar"]).range([0, 960]).paddingInner(1);
  test.deepEqual(p.domain().map(p), b.domain().map(b));
  test.equal(p.bandwidth(), b.bandwidth());
  test.equal(p.step(), b.step());
  test.end();
});

tape("point.padding(p) sets the band outer padding to p", function(test) {
  var p = scale.scalePoint().domain(["foo", "bar"]).range([0, 960]).padding(0.5),
      b = scale.scaleBand().domain(["foo", "bar"]).range([0, 960]).paddingInner(1).paddingOuter(0.5);
  test.deepEqual(p.domain().map(p), b.domain().map(b));
  test.equal(p.bandwidth(), b.bandwidth());
  test.equal(p.step(), b.step());
  test.end();
});

tape("point.copy() returns a copy", function(test) {
  var s = scale.scalePoint();
  test.deepEqual(s.domain(), []);
  test.deepEqual(s.range(), [0, 1]);
  test.equal(s.bandwidth(), 0);
  test.equal(s.step(), 1);
  test.equal(s.round(), false);
  test.equal(s.padding(), 0);
  test.equal(s.align(), 0.5);
  test.end();
});
