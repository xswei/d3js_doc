var tape = require("tape"),
    ease = require("../"),
    generic = require("./generic");

require("./inDelta");

tape("easeCubic is an alias for easeCubicInOut", function(test) {
  test.equal(ease.easeCubic, ease.easeCubicInOut);
  test.end();
});

tape("easeCubicIn(t) returns the expected results", function(test) {
  test.inDelta(ease.easeCubicIn(0.0), 0.000);
  test.inDelta(ease.easeCubicIn(0.1), 0.001);
  test.inDelta(ease.easeCubicIn(0.2), 0.008);
  test.inDelta(ease.easeCubicIn(0.3), 0.027);
  test.inDelta(ease.easeCubicIn(0.4), 0.064);
  test.inDelta(ease.easeCubicIn(0.5), 0.125);
  test.inDelta(ease.easeCubicIn(0.6), 0.216);
  test.inDelta(ease.easeCubicIn(0.7), 0.343);
  test.inDelta(ease.easeCubicIn(0.8), 0.512);
  test.inDelta(ease.easeCubicIn(0.9), 0.729);
  test.inDelta(ease.easeCubicIn(1.0), 1.000);
  test.end();
});

tape("easeCubicIn(t) coerces t to a number", function(test) {
  test.strictEqual(ease.easeCubicIn(".9"), ease.easeCubicIn(0.9));
  test.strictEqual(ease.easeCubicIn({valueOf: function() { return 0.9; }}), ease.easeCubicIn(0.9));
  test.end();
});

tape("easeCubicOut(t) returns the expected results", function(test) {
  var cubicOut = generic.out(ease.easeCubicIn);
  test.inDelta(ease.easeCubicOut(0.0), cubicOut(0.0));
  test.inDelta(ease.easeCubicOut(0.1), cubicOut(0.1));
  test.inDelta(ease.easeCubicOut(0.2), cubicOut(0.2));
  test.inDelta(ease.easeCubicOut(0.3), cubicOut(0.3));
  test.inDelta(ease.easeCubicOut(0.4), cubicOut(0.4));
  test.inDelta(ease.easeCubicOut(0.5), cubicOut(0.5));
  test.inDelta(ease.easeCubicOut(0.6), cubicOut(0.6));
  test.inDelta(ease.easeCubicOut(0.7), cubicOut(0.7));
  test.inDelta(ease.easeCubicOut(0.8), cubicOut(0.8));
  test.inDelta(ease.easeCubicOut(0.9), cubicOut(0.9));
  test.inDelta(ease.easeCubicOut(1.0), cubicOut(1.0));
  test.end();
});

tape("easeCubicOut(t) coerces t to a number", function(test) {
  test.strictEqual(ease.easeCubicOut(".9"), ease.easeCubicOut(0.9));
  test.strictEqual(ease.easeCubicOut({valueOf: function() { return 0.9; }}), ease.easeCubicOut(0.9));
  test.end();
});

tape("easeCubicInOut(t) returns the expected results", function(test) {
  var cubicInOut = generic.inOut(ease.easeCubicIn);
  test.inDelta(ease.easeCubicInOut(0.0), cubicInOut(0.0));
  test.inDelta(ease.easeCubicInOut(0.1), cubicInOut(0.1));
  test.inDelta(ease.easeCubicInOut(0.2), cubicInOut(0.2));
  test.inDelta(ease.easeCubicInOut(0.3), cubicInOut(0.3));
  test.inDelta(ease.easeCubicInOut(0.4), cubicInOut(0.4));
  test.inDelta(ease.easeCubicInOut(0.5), cubicInOut(0.5));
  test.inDelta(ease.easeCubicInOut(0.6), cubicInOut(0.6));
  test.inDelta(ease.easeCubicInOut(0.7), cubicInOut(0.7));
  test.inDelta(ease.easeCubicInOut(0.8), cubicInOut(0.8));
  test.inDelta(ease.easeCubicInOut(0.9), cubicInOut(0.9));
  test.inDelta(ease.easeCubicInOut(1.0), cubicInOut(1.0));
  test.end();
});

tape("easeCubicInOut(t) coerces t to a number", function(test) {
  test.strictEqual(ease.easeCubicInOut(".9"), ease.easeCubicInOut(0.9));
  test.strictEqual(ease.easeCubicInOut({valueOf: function() { return 0.9; }}), ease.easeCubicInOut(0.9));
  test.end();
});
