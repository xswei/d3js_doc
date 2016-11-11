var tape = require("tape"),
    ease = require("../"),
    generic = require("./generic");

require("./inDelta");

tape("easeBack is an alias for easeBackInOut", function(test) {
  test.equal(ease.easeBack, ease.easeBackInOut);
  test.end();
});

tape("easeBackIn(t) returns the expected results", function(test) {
  test.inDelta(ease.easeBackIn(0.0),  0.000000);
  test.inDelta(ease.easeBackIn(0.1), -0.014314);
  test.inDelta(ease.easeBackIn(0.2), -0.046451);
  test.inDelta(ease.easeBackIn(0.3), -0.080200);
  test.inDelta(ease.easeBackIn(0.4), -0.099352);
  test.inDelta(ease.easeBackIn(0.5), -0.087698);
  test.inDelta(ease.easeBackIn(0.6), -0.029028);
  test.inDelta(ease.easeBackIn(0.7), +0.092868);
  test.inDelta(ease.easeBackIn(0.8), +0.294198);
  test.inDelta(ease.easeBackIn(0.9), +0.591172);
  test.inDelta(ease.easeBackIn(1.0), +1.000000);
  test.end();
});

tape("easeBackIn(t) coerces t to a number", function(test) {
  test.strictEqual(ease.easeBackIn(".9"), ease.easeBackIn(0.9));
  test.strictEqual(ease.easeBackIn({valueOf: function() { return 0.9; }}), ease.easeBackIn(0.9));
  test.end();
});

tape("easeBackOut(t) returns the expected results", function(test) {
  var backOut = generic.out(ease.easeBackIn);
  test.inDelta(ease.easeBackOut(0.0), backOut(0.0));
  test.inDelta(ease.easeBackOut(0.1), backOut(0.1));
  test.inDelta(ease.easeBackOut(0.2), backOut(0.2));
  test.inDelta(ease.easeBackOut(0.3), backOut(0.3));
  test.inDelta(ease.easeBackOut(0.4), backOut(0.4));
  test.inDelta(ease.easeBackOut(0.5), backOut(0.5));
  test.inDelta(ease.easeBackOut(0.6), backOut(0.6));
  test.inDelta(ease.easeBackOut(0.7), backOut(0.7));
  test.inDelta(ease.easeBackOut(0.8), backOut(0.8));
  test.inDelta(ease.easeBackOut(0.9), backOut(0.9));
  test.inDelta(ease.easeBackOut(1.0), backOut(1.0));
  test.end();
});

tape("easeBackOut(t) coerces t to a number", function(test) {
  test.strictEqual(ease.easeBackOut(".9"), ease.easeBackOut(0.9));
  test.strictEqual(ease.easeBackOut({valueOf: function() { return 0.9; }}), ease.easeBackOut(0.9));
  test.end();
});

tape("easeBackInOut(t) returns the expected results", function(test) {
  var backInOut = generic.inOut(ease.easeBackIn);
  test.inDelta(ease.easeBackInOut(0.0), backInOut(0.0));
  test.inDelta(ease.easeBackInOut(0.1), backInOut(0.1));
  test.inDelta(ease.easeBackInOut(0.2), backInOut(0.2));
  test.inDelta(ease.easeBackInOut(0.3), backInOut(0.3));
  test.inDelta(ease.easeBackInOut(0.4), backInOut(0.4));
  test.inDelta(ease.easeBackInOut(0.5), backInOut(0.5));
  test.inDelta(ease.easeBackInOut(0.6), backInOut(0.6));
  test.inDelta(ease.easeBackInOut(0.7), backInOut(0.7));
  test.inDelta(ease.easeBackInOut(0.8), backInOut(0.8));
  test.inDelta(ease.easeBackInOut(0.9), backInOut(0.9));
  test.inDelta(ease.easeBackInOut(1.0), backInOut(1.0));
  test.end();
});

tape("easeBackInOut(t) coerces t to a number", function(test) {
  test.strictEqual(ease.easeBackInOut(".9"), ease.easeBackInOut(0.9));
  test.strictEqual(ease.easeBackInOut({valueOf: function() { return 0.9; }}), ease.easeBackInOut(0.9));
  test.end();
});
