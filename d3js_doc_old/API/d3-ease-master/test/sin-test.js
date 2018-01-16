var tape = require("tape"),
    ease = require("../"),
    generic = require("./generic");

require("./inDelta");

tape("easeSin is an alias for easeSinInOut", function(test) {
  test.equal(ease.easeSin, ease.easeSinInOut);
  test.end();
});

tape("easeSinIn(t) returns the expected results", function(test) {
  test.inDelta(ease.easeSinIn(0.0), 0.000000);
  test.inDelta(ease.easeSinIn(0.1), 0.012312);
  test.inDelta(ease.easeSinIn(0.2), 0.048943);
  test.inDelta(ease.easeSinIn(0.3), 0.108993);
  test.inDelta(ease.easeSinIn(0.4), 0.190983);
  test.inDelta(ease.easeSinIn(0.5), 0.292893);
  test.inDelta(ease.easeSinIn(0.6), 0.412215);
  test.inDelta(ease.easeSinIn(0.7), 0.546010);
  test.inDelta(ease.easeSinIn(0.8), 0.690983);
  test.inDelta(ease.easeSinIn(0.9), 0.843566);
  test.inDelta(ease.easeSinIn(1.0), 1.000000);
  test.end();
});

tape("easeSinIn(t) coerces t to a number", function(test) {
  test.strictEqual(ease.easeSinIn(".9"), ease.easeSinIn(0.9));
  test.strictEqual(ease.easeSinIn({valueOf: function() { return 0.9; }}), ease.easeSinIn(0.9));
  test.end();
});

tape("easeSinOut(t) returns the expected results", function(test) {
  var sinOut = generic.out(ease.easeSinIn);
  test.inDelta(ease.easeSinOut(0.0), sinOut(0.0));
  test.inDelta(ease.easeSinOut(0.1), sinOut(0.1));
  test.inDelta(ease.easeSinOut(0.2), sinOut(0.2));
  test.inDelta(ease.easeSinOut(0.3), sinOut(0.3));
  test.inDelta(ease.easeSinOut(0.4), sinOut(0.4));
  test.inDelta(ease.easeSinOut(0.5), sinOut(0.5));
  test.inDelta(ease.easeSinOut(0.6), sinOut(0.6));
  test.inDelta(ease.easeSinOut(0.7), sinOut(0.7));
  test.inDelta(ease.easeSinOut(0.8), sinOut(0.8));
  test.inDelta(ease.easeSinOut(0.9), sinOut(0.9));
  test.inDelta(ease.easeSinOut(1.0), sinOut(1.0));
  test.end();
});

tape("easeSinOut(t) coerces t to a number", function(test) {
  test.strictEqual(ease.easeSinOut(".9"), ease.easeSinOut(0.9));
  test.strictEqual(ease.easeSinOut({valueOf: function() { return 0.9; }}), ease.easeSinOut(0.9));
  test.end();
});

tape("easeSinInOut(t) returns the expected results", function(test) {
  var sinInOut = generic.inOut(ease.easeSinIn);
  test.inDelta(ease.easeSinInOut(0.0), sinInOut(0.0));
  test.inDelta(ease.easeSinInOut(0.1), sinInOut(0.1));
  test.inDelta(ease.easeSinInOut(0.2), sinInOut(0.2));
  test.inDelta(ease.easeSinInOut(0.3), sinInOut(0.3));
  test.inDelta(ease.easeSinInOut(0.4), sinInOut(0.4));
  test.inDelta(ease.easeSinInOut(0.5), sinInOut(0.5));
  test.inDelta(ease.easeSinInOut(0.6), sinInOut(0.6));
  test.inDelta(ease.easeSinInOut(0.7), sinInOut(0.7));
  test.inDelta(ease.easeSinInOut(0.8), sinInOut(0.8));
  test.inDelta(ease.easeSinInOut(0.9), sinInOut(0.9));
  test.inDelta(ease.easeSinInOut(1.0), sinInOut(1.0));
  test.end();
});

tape("easeSinInOut(t) coerces t to a number", function(test) {
  test.strictEqual(ease.easeSinInOut(".9"), ease.easeSinInOut(0.9));
  test.strictEqual(ease.easeSinInOut({valueOf: function() { return 0.9; }}), ease.easeSinInOut(0.9));
  test.end();
});
