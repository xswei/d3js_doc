var tape = require("tape"),
    ease = require("../"),
    generic = require("./generic");

require("./inDelta");

tape("easeBounce is an alias for easeBounceOut", function(test) {
  test.equal(ease.easeBounce, ease.easeBounceOut);
  test.end();
});

tape("easeBounceIn(t) returns the expected results", function(test) {
  test.inDelta(ease.easeBounceIn(0.0), 0.000000);
  test.inDelta(ease.easeBounceIn(0.1), 0.011875);
  test.inDelta(ease.easeBounceIn(0.2), 0.060000);
  test.inDelta(ease.easeBounceIn(0.3), 0.069375);
  test.inDelta(ease.easeBounceIn(0.4), 0.227500);
  test.inDelta(ease.easeBounceIn(0.5), 0.234375);
  test.inDelta(ease.easeBounceIn(0.6), 0.090000);
  test.inDelta(ease.easeBounceIn(0.7), 0.319375);
  test.inDelta(ease.easeBounceIn(0.8), 0.697500);
  test.inDelta(ease.easeBounceIn(0.9), 0.924375);
  test.inDelta(ease.easeBounceIn(1.0), 1.000000);
  test.end();
});

tape("easeBounceIn(t) coerces t to a number", function(test) {
  test.strictEqual(ease.easeBounceIn(".9"), ease.easeBounceIn(0.9));
  test.strictEqual(ease.easeBounceIn({valueOf: function() { return 0.9; }}), ease.easeBounceIn(0.9));
  test.end();
});

tape("easeBounceOut(t) returns the expected results", function(test) {
  var bounceOut = generic.out(ease.easeBounceIn);
  test.inDelta(ease.easeBounceOut(0.0), bounceOut(0.0));
  test.inDelta(ease.easeBounceOut(0.1), bounceOut(0.1));
  test.inDelta(ease.easeBounceOut(0.2), bounceOut(0.2));
  test.inDelta(ease.easeBounceOut(0.3), bounceOut(0.3));
  test.inDelta(ease.easeBounceOut(0.4), bounceOut(0.4));
  test.inDelta(ease.easeBounceOut(0.5), bounceOut(0.5));
  test.inDelta(ease.easeBounceOut(0.6), bounceOut(0.6));
  test.inDelta(ease.easeBounceOut(0.7), bounceOut(0.7));
  test.inDelta(ease.easeBounceOut(0.8), bounceOut(0.8));
  test.inDelta(ease.easeBounceOut(0.9), bounceOut(0.9));
  test.inDelta(ease.easeBounceOut(1.0), bounceOut(1.0));
  test.end();
});

tape("easeBounceOut(t) coerces t to a number", function(test) {
  test.strictEqual(ease.easeBounceOut(".9"), ease.easeBounceOut(0.9));
  test.strictEqual(ease.easeBounceOut({valueOf: function() { return 0.9; }}), ease.easeBounceOut(0.9));
  test.end();
});

tape("easeBounceInOut(t) returns the expected results", function(test) {
  var bounceInOut = generic.inOut(ease.easeBounceIn);
  test.inDelta(ease.easeBounceInOut(0.0), bounceInOut(0.0));
  test.inDelta(ease.easeBounceInOut(0.1), bounceInOut(0.1));
  test.inDelta(ease.easeBounceInOut(0.2), bounceInOut(0.2));
  test.inDelta(ease.easeBounceInOut(0.3), bounceInOut(0.3));
  test.inDelta(ease.easeBounceInOut(0.4), bounceInOut(0.4));
  test.inDelta(ease.easeBounceInOut(0.5), bounceInOut(0.5));
  test.inDelta(ease.easeBounceInOut(0.6), bounceInOut(0.6));
  test.inDelta(ease.easeBounceInOut(0.7), bounceInOut(0.7));
  test.inDelta(ease.easeBounceInOut(0.8), bounceInOut(0.8));
  test.inDelta(ease.easeBounceInOut(0.9), bounceInOut(0.9));
  test.inDelta(ease.easeBounceInOut(1.0), bounceInOut(1.0));
  test.end();
});

tape("easeBounceInOut(t) coerces t to a number", function(test) {
  test.strictEqual(ease.easeBounceInOut(".9"), ease.easeBounceInOut(0.9));
  test.strictEqual(ease.easeBounceInOut({valueOf: function() { return 0.9; }}), ease.easeBounceInOut(0.9));
  test.end();
});
