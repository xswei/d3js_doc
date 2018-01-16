var tape = require("tape"),
    ease = require("../"),
    generic = require("./generic");

require("./inDelta");

tape("easeCircle is an alias for easeCircleInOut", function(test) {
  test.equal(ease.easeCircle, ease.easeCircleInOut);
  test.end();
});

tape("easeCircleIn(t) returns the expected results", function(test) {
  test.inDelta(ease.easeCircleIn(0.0), 0.000000);
  test.inDelta(ease.easeCircleIn(0.1), 0.005013);
  test.inDelta(ease.easeCircleIn(0.2), 0.020204);
  test.inDelta(ease.easeCircleIn(0.3), 0.046061);
  test.inDelta(ease.easeCircleIn(0.4), 0.083485);
  test.inDelta(ease.easeCircleIn(0.5), 0.133975);
  test.inDelta(ease.easeCircleIn(0.6), 0.200000);
  test.inDelta(ease.easeCircleIn(0.7), 0.285857);
  test.inDelta(ease.easeCircleIn(0.8), 0.400000);
  test.inDelta(ease.easeCircleIn(0.9), 0.564110);
  test.inDelta(ease.easeCircleIn(1.0), 1.000000);
  test.end();
});

tape("easeCircleIn(t) coerces t to a number", function(test) {
  test.strictEqual(ease.easeCircleIn(".9"), ease.easeCircleIn(0.9));
  test.strictEqual(ease.easeCircleIn({valueOf: function() { return 0.9; }}), ease.easeCircleIn(0.9));
  test.end();
});

tape("easeCircleOut(t) returns the expected results", function(test) {
  var circleOut = generic.out(ease.easeCircleIn);
  test.inDelta(ease.easeCircleOut(0.0), circleOut(0.0));
  test.inDelta(ease.easeCircleOut(0.1), circleOut(0.1));
  test.inDelta(ease.easeCircleOut(0.2), circleOut(0.2));
  test.inDelta(ease.easeCircleOut(0.3), circleOut(0.3));
  test.inDelta(ease.easeCircleOut(0.4), circleOut(0.4));
  test.inDelta(ease.easeCircleOut(0.5), circleOut(0.5));
  test.inDelta(ease.easeCircleOut(0.6), circleOut(0.6));
  test.inDelta(ease.easeCircleOut(0.7), circleOut(0.7));
  test.inDelta(ease.easeCircleOut(0.8), circleOut(0.8));
  test.inDelta(ease.easeCircleOut(0.9), circleOut(0.9));
  test.inDelta(ease.easeCircleOut(1.0), circleOut(1.0));
  test.end();
});

tape("easeCircleOut(t) coerces t to a number", function(test) {
  test.strictEqual(ease.easeCircleOut(".9"), ease.easeCircleOut(0.9));
  test.strictEqual(ease.easeCircleOut({valueOf: function() { return 0.9; }}), ease.easeCircleOut(0.9));
  test.end();
});

tape("easeCircleInOut(t) returns the expected results", function(test) {
  var circleInOut = generic.inOut(ease.easeCircleIn);
  test.inDelta(ease.easeCircleInOut(0.0), circleInOut(0.0));
  test.inDelta(ease.easeCircleInOut(0.1), circleInOut(0.1));
  test.inDelta(ease.easeCircleInOut(0.2), circleInOut(0.2));
  test.inDelta(ease.easeCircleInOut(0.3), circleInOut(0.3));
  test.inDelta(ease.easeCircleInOut(0.4), circleInOut(0.4));
  test.inDelta(ease.easeCircleInOut(0.5), circleInOut(0.5));
  test.inDelta(ease.easeCircleInOut(0.6), circleInOut(0.6));
  test.inDelta(ease.easeCircleInOut(0.7), circleInOut(0.7));
  test.inDelta(ease.easeCircleInOut(0.8), circleInOut(0.8));
  test.inDelta(ease.easeCircleInOut(0.9), circleInOut(0.9));
  test.inDelta(ease.easeCircleInOut(1.0), circleInOut(1.0));
  test.end();
});

tape("easeCircleInOut(t) coerces t to a number", function(test) {
  test.strictEqual(ease.easeCircleInOut(".9"), ease.easeCircleInOut(0.9));
  test.strictEqual(ease.easeCircleInOut({valueOf: function() { return 0.9; }}), ease.easeCircleInOut(0.9));
  test.end();
});
