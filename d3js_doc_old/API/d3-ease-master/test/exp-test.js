var tape = require("tape"),
    ease = require("../"),
    generic = require("./generic");

require("./inDelta");

tape("easeExp is an alias for easeExpInOut", function(test) {
  test.equal(ease.easeExp, ease.easeExpInOut);
  test.end();
});

tape("easeExpIn(t) returns the expected results", function(test) {
  test.inDelta(ease.easeExpIn(0.0), 0.000976); // Note: not exactly zero.
  test.inDelta(ease.easeExpIn(0.1), 0.001953);
  test.inDelta(ease.easeExpIn(0.2), 0.003906);
  test.inDelta(ease.easeExpIn(0.3), 0.007813);
  test.inDelta(ease.easeExpIn(0.4), 0.015625);
  test.inDelta(ease.easeExpIn(0.5), 0.031250);
  test.inDelta(ease.easeExpIn(0.6), 0.062500);
  test.inDelta(ease.easeExpIn(0.7), 0.125000);
  test.inDelta(ease.easeExpIn(0.8), 0.250000);
  test.inDelta(ease.easeExpIn(0.9), 0.500000);
  test.inDelta(ease.easeExpIn(1.0), 1.000000);
  test.end();
});

tape("easeExpIn(t) coerces t to a number", function(test) {
  test.strictEqual(ease.easeExpIn(".9"), ease.easeExpIn(0.9));
  test.strictEqual(ease.easeExpIn({valueOf: function() { return 0.9; }}), ease.easeExpIn(0.9));
  test.end();
});

tape("easeExpOut(t) returns the expected results", function(test) {
  var expOut = generic.out(ease.easeExpIn);
  test.inDelta(ease.easeExpOut(0.0), expOut(0.0));
  test.inDelta(ease.easeExpOut(0.1), expOut(0.1));
  test.inDelta(ease.easeExpOut(0.2), expOut(0.2));
  test.inDelta(ease.easeExpOut(0.3), expOut(0.3));
  test.inDelta(ease.easeExpOut(0.4), expOut(0.4));
  test.inDelta(ease.easeExpOut(0.5), expOut(0.5));
  test.inDelta(ease.easeExpOut(0.6), expOut(0.6));
  test.inDelta(ease.easeExpOut(0.7), expOut(0.7));
  test.inDelta(ease.easeExpOut(0.8), expOut(0.8));
  test.inDelta(ease.easeExpOut(0.9), expOut(0.9));
  test.inDelta(ease.easeExpOut(1.0), expOut(1.0));
  test.end();
});

tape("easeExpOut(t) coerces t to a number", function(test) {
  test.strictEqual(ease.easeExpOut(".9"), ease.easeExpOut(0.9));
  test.strictEqual(ease.easeExpOut({valueOf: function() { return 0.9; }}), ease.easeExpOut(0.9));
  test.end();
});

tape("easeExpInOut(t) returns the expected results", function(test) {
  var expInOut = generic.inOut(ease.easeExpIn);
  test.inDelta(ease.easeExpInOut(0.0), expInOut(0.0));
  test.inDelta(ease.easeExpInOut(0.1), expInOut(0.1));
  test.inDelta(ease.easeExpInOut(0.2), expInOut(0.2));
  test.inDelta(ease.easeExpInOut(0.3), expInOut(0.3));
  test.inDelta(ease.easeExpInOut(0.4), expInOut(0.4));
  test.inDelta(ease.easeExpInOut(0.5), expInOut(0.5));
  test.inDelta(ease.easeExpInOut(0.6), expInOut(0.6));
  test.inDelta(ease.easeExpInOut(0.7), expInOut(0.7));
  test.inDelta(ease.easeExpInOut(0.8), expInOut(0.8));
  test.inDelta(ease.easeExpInOut(0.9), expInOut(0.9));
  test.inDelta(ease.easeExpInOut(1.0), expInOut(1.0));
  test.end();
});

tape("easeExpInOut(t) coerces t to a number", function(test) {
  test.strictEqual(ease.easeExpInOut(".9"), ease.easeExpInOut(0.9));
  test.strictEqual(ease.easeExpInOut({valueOf: function() { return 0.9; }}), ease.easeExpInOut(0.9));
  test.end();
});
