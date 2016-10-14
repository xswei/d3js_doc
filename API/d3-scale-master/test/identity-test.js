var tape = require("tape"),
    scale = require("../");

tape("scaleIdentity() has the expected defaults", function(test) {
  var s = scale.scaleIdentity();
  test.deepEqual(s.domain(), [0, 1]);
  test.deepEqual(s.range(), [0, 1]);
  test.end();
});

tape("identity(x) is the identity function", function(test) {
  var s = scale.scaleIdentity().domain([1, 2]);
  test.equal(s(0.5), 0.5);
  test.equal(s(1), 1);
  test.equal(s(1.5), 1.5);
  test.equal(s(2), 2);
  test.equal(s(2.5), 2.5);
  test.end();
});

tape("identity(x) coerces input to a number", function(test) {
  var s = scale.scaleIdentity().domain([1, 2]);
  test.equal(s("2"), 2);
  test.end();
});

tape("identity.invert(y) is the identity function", function(test) {
  var s = scale.scaleIdentity().domain([1, 2]);
  test.equal(s.invert(0.5), 0.5);
  test.equal(s.invert(1), 1);
  test.equal(s.invert(1.5), 1.5);
  test.equal(s.invert(2), 2);
  test.equal(s.invert(2.5), 2.5);
  test.end();
});

tape("identity.invert(y) coerces range value to numbers", function(test) {
  var s = scale.scaleIdentity().range(["0", "2"]);
  test.equal(s.invert("1"), 1);
  s.range([new Date(1990, 0, 1), new Date(1991, 0, 1)]);
  test.equal(s.invert(new Date(1990, 6, 2, 13)), +new Date(1990, 6, 2, 13));
  s.range(["#000", "#fff"]);
  test.ok(isNaN(s.invert("#999")));
  test.end();
});

tape("identity.invert(y) coerces input to a number", function(test) {
  var s = scale.scaleIdentity().domain([1, 2]);
  test.equal(s.invert("2"), 2);
  test.end();
});

tape("identity.domain() is an alias for scale.range()", function(test) {
  var s = scale.scaleIdentity();
  test.equal(s.domain, s.range);
  test.deepEqual(s.domain(), s.range());
  s.domain([-10, 0, 100]);
  test.deepEqual(s.range(), [-10, 0, 100]);
  s.range([-10, 0, 100]);
  test.deepEqual(s.domain(), [-10, 0, 100]);
  test.end();
});

tape("identity.domain() defaults to [0, 1]", function(test) {
  var s = scale.scaleIdentity();
  test.deepEqual(s.domain(), [0, 1]);
  test.deepEqual(s.range(), [0, 1]);
  test.equal(s(0.5), 0.5);
  test.end();
});

tape("identity.domain() coerces values to numbers", function(test) {
  var s = scale.scaleIdentity().domain([new Date(1990, 0, 1), new Date(1991, 0, 1)]);
  test.equal(typeof s.domain()[0], "number");
  test.equal(typeof s.domain()[1], "number");
  test.equal(s.domain()[0], +new Date(1990, 0, 1));
  test.equal(s.domain()[1], +new Date(1991, 0, 1));
  test.equal(typeof s(new Date(1989, 9, 20)), "number");
  test.equal(s(new Date(1989, 9, 20)), +new Date(1989, 9, 20));
  s.domain(["0", "1"]);
  test.equal(typeof s.domain()[0], "number");
  test.equal(typeof s.domain()[1], "number");
  test.equal(s(0.5), 0.5);
  s.domain([new Number(0), new Number(1)]);
  test.equal(typeof s.domain()[0], "number");
  test.equal(typeof s.domain()[1], "number");
  test.equal(s(0.5), 0.5);
  s.range([new Date(1990, 0, 1), new Date(1991, 0, 1)]);
  test.equal(typeof s.range()[0], "number");
  test.equal(typeof s.range()[1], "number");
  test.equal(s.range()[0], +new Date(1990, 0, 1));
  test.equal(s.range()[1], +new Date(1991, 0, 1));
  test.equal(typeof s(new Date(1989, 9, 20)), "number");
  test.equal(s(new Date(1989, 9, 20)), +new Date(1989, 9, 20));
  s.range(["0", "1"]);
  test.equal(typeof s.range()[0], "number");
  test.equal(typeof s.range()[1], "number");
  test.equal(s(0.5), 0.5);
  s.range([new Number(0), new Number(1)]);
  test.equal(typeof s.range()[0], "number");
  test.equal(typeof s.range()[1], "number");
  test.equal(s(0.5), 0.5);
  test.end();
});

tape("identity.domain() can specify a polyidentity domain and range", function(test) {
  var s = scale.scaleIdentity().domain([-10, 0, 100]);
  test.deepEqual(s.domain(), [-10, 0, 100]);
  test.equal(s(-5), -5);
  test.equal(s(50), 50);
  test.equal(s(75), 75);
  s.range([-10, 0, 100]);
  test.deepEqual(s.range(), [-10, 0, 100]);
  test.equal(s(-5), -5);
  test.equal(s(50), 50);
  test.equal(s(75), 75);
  test.end();
});

tape("identity.domain() does not affect the identity function", function(test) {
  var s = scale.scaleIdentity().domain([Infinity, NaN]);
  test.equal(s(42), 42);
  test.equal(s.invert(-42), -42);
  test.end();
});

tape("identity.ticks(count) generates ticks of varying degree", function(test) {
  var s = scale.scaleIdentity();
  test.deepEqual(s.ticks(1).map(s.tickFormat(1)), ["0", "1"]);
  test.deepEqual(s.ticks(2).map(s.tickFormat(2)), ["0.0", "0.5", "1.0"]);
  test.deepEqual(s.ticks(5).map(s.tickFormat(5)), ["0.0", "0.2", "0.4", "0.6", "0.8", "1.0"]);
  test.deepEqual(s.ticks(10).map(s.tickFormat(10)), ["0.0", "0.1", "0.2", "0.3", "0.4", "0.5", "0.6", "0.7", "0.8", "0.9", "1.0"]);
  s.domain([1, 0]);
  test.deepEqual(s.ticks(1).map(s.tickFormat(1)), ["0", "1"].reverse());
  test.deepEqual(s.ticks(2).map(s.tickFormat(2)), ["0.0", "0.5", "1.0"].reverse());
  test.deepEqual(s.ticks(5).map(s.tickFormat(5)), ["0.0", "0.2", "0.4", "0.6", "0.8", "1.0"].reverse());
  test.deepEqual(s.ticks(10).map(s.tickFormat(10)), ["0.0", "0.1", "0.2", "0.3", "0.4", "0.5", "0.6", "0.7", "0.8", "0.9", "1.0"].reverse());
  test.end();
});

tape("identity.tickFormat(count) formats ticks with the appropriate precision", function(test) {
  var s = scale.scaleIdentity().domain([0.123456789, 1.23456789]);
  test.equal(s.tickFormat(1)(s.ticks(1)[0]), "1");
  test.equal(s.tickFormat(2)(s.ticks(2)[0]), "0.5");
  test.equal(s.tickFormat(4)(s.ticks(4)[0]), "0.2");
  test.equal(s.tickFormat(8)(s.ticks(8)[0]), "0.2");
  test.equal(s.tickFormat(16)(s.ticks(16)[0]), "0.15");
  test.equal(s.tickFormat(32)(s.ticks(32)[0]), "0.15");
  test.equal(s.tickFormat(64)(s.ticks(64)[0]), "0.14");
  test.equal(s.tickFormat(128)(s.ticks(128)[0]), "0.13");
  test.equal(s.tickFormat(256)(s.ticks(256)[0]), "0.125");
  test.end();
});

tape("identity.copy() isolates changes to the domain or range", function(test) {
  var s1 = scale.scaleIdentity(),
      s2 = s1.copy(),
      s3 = s1.copy();
  s1.domain([1, 2]);
  test.deepEqual(s2.domain(), [0, 1]);
  s2.domain([2, 3]);
  test.deepEqual(s1.domain(), [1, 2]);
  test.deepEqual(s2.domain(), [2, 3]);
  s2 = s3.copy();
  s3.range([1, 2]);
  test.deepEqual(s2.range(), [0, 1]);
  s2.range([2, 3]);
  test.deepEqual(s3.range(), [1, 2]);
  test.deepEqual(s2.range(), [2, 3]);
  test.end();
});
