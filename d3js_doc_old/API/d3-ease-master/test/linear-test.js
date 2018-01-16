var tape = require("tape"),
    ease = require("../");

require("./inDelta");

tape("easeLinear(t) returns the expected results", function(test) {
  test.inDelta(ease.easeLinear(0.0), 0.0);
  test.inDelta(ease.easeLinear(0.1), 0.1);
  test.inDelta(ease.easeLinear(0.2), 0.2);
  test.inDelta(ease.easeLinear(0.3), 0.3);
  test.inDelta(ease.easeLinear(0.4), 0.4);
  test.inDelta(ease.easeLinear(0.5), 0.5);
  test.inDelta(ease.easeLinear(0.6), 0.6);
  test.inDelta(ease.easeLinear(0.7), 0.7);
  test.inDelta(ease.easeLinear(0.8), 0.8);
  test.inDelta(ease.easeLinear(0.9), 0.9);
  test.inDelta(ease.easeLinear(1.0), 1.0);
  test.end();
});

tape("easeLinear(t) coerces t to a number", function(test) {
  test.strictEqual(ease.easeLinear(".9"), ease.easeLinear(0.9));
  test.strictEqual(ease.easeLinear({valueOf: function() { return 0.9; }}), ease.easeLinear(0.9));
  test.end();
});
