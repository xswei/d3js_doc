var tape = require("tape"),
    ease = require("../"),
    generic = require("./generic");

require("./inDelta");

tape("easeQuad is an alias for easeQuadInOut", function(test) {
  test.equal(ease.easeQuad, ease.easeQuadInOut);
  test.end();
});

tape("easeQuadIn(t) returns the expected results", function(test) {
  test.inDelta(ease.easeQuadIn(0.0), 0.00);
  test.inDelta(ease.easeQuadIn(0.1), 0.01);
  test.inDelta(ease.easeQuadIn(0.2), 0.04);
  test.inDelta(ease.easeQuadIn(0.3), 0.09);
  test.inDelta(ease.easeQuadIn(0.4), 0.16);
  test.inDelta(ease.easeQuadIn(0.5), 0.25);
  test.inDelta(ease.easeQuadIn(0.6), 0.36);
  test.inDelta(ease.easeQuadIn(0.7), 0.49);
  test.inDelta(ease.easeQuadIn(0.8), 0.64);
  test.inDelta(ease.easeQuadIn(0.9), 0.81);
  test.inDelta(ease.easeQuadIn(1.0), 1.00);
  test.end();
});

tape("easeQuadIn(t) coerces t to a number", function(test) {
  test.strictEqual(ease.easeQuadIn(".9"), ease.easeQuadIn(0.9));
  test.strictEqual(ease.easeQuadIn({valueOf: function() { return 0.9; }}), ease.easeQuadIn(0.9));
  test.end();
});

tape("easeQuadOut(t) returns the expected results", function(test) {
  var quadOut = generic.out(ease.easeQuadIn);
  test.inDelta(ease.easeQuadOut(0.0), quadOut(0.0));
  test.inDelta(ease.easeQuadOut(0.1), quadOut(0.1));
  test.inDelta(ease.easeQuadOut(0.2), quadOut(0.2));
  test.inDelta(ease.easeQuadOut(0.3), quadOut(0.3));
  test.inDelta(ease.easeQuadOut(0.4), quadOut(0.4));
  test.inDelta(ease.easeQuadOut(0.5), quadOut(0.5));
  test.inDelta(ease.easeQuadOut(0.6), quadOut(0.6));
  test.inDelta(ease.easeQuadOut(0.7), quadOut(0.7));
  test.inDelta(ease.easeQuadOut(0.8), quadOut(0.8));
  test.inDelta(ease.easeQuadOut(0.9), quadOut(0.9));
  test.inDelta(ease.easeQuadOut(1.0), quadOut(1.0));
  test.end();
});

tape("easeQuadOut(t) coerces t to a number", function(test) {
  test.strictEqual(ease.easeQuadOut(".9"), ease.easeQuadOut(0.9));
  test.strictEqual(ease.easeQuadOut({valueOf: function() { return 0.9; }}), ease.easeQuadOut(0.9));
  test.end();
});

tape("easeQuadInOut(t) returns the expected results", function(test) {
  var quadInOut = generic.inOut(ease.easeQuadIn);
  test.inDelta(ease.easeQuadInOut(0.0), quadInOut(0.0));
  test.inDelta(ease.easeQuadInOut(0.1), quadInOut(0.1));
  test.inDelta(ease.easeQuadInOut(0.2), quadInOut(0.2));
  test.inDelta(ease.easeQuadInOut(0.3), quadInOut(0.3));
  test.inDelta(ease.easeQuadInOut(0.4), quadInOut(0.4));
  test.inDelta(ease.easeQuadInOut(0.5), quadInOut(0.5));
  test.inDelta(ease.easeQuadInOut(0.6), quadInOut(0.6));
  test.inDelta(ease.easeQuadInOut(0.7), quadInOut(0.7));
  test.inDelta(ease.easeQuadInOut(0.8), quadInOut(0.8));
  test.inDelta(ease.easeQuadInOut(0.9), quadInOut(0.9));
  test.inDelta(ease.easeQuadInOut(1.0), quadInOut(1.0));
  test.end();
});

tape("easeQuadInOut(t) coerces t to a number", function(test) {
  test.strictEqual(ease.easeQuadInOut(".9"), ease.easeQuadInOut(0.9));
  test.strictEqual(ease.easeQuadInOut({valueOf: function() { return 0.9; }}), ease.easeQuadInOut(0.9));
  test.end();
});
