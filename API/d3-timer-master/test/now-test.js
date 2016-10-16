var tape = require("tape"),
    timer = require("../"),
    end = require("./end");

require("./inRange");

tape("now() returns the same time when called repeatedly", function(test) {
  var now = timer.now();
  test.ok(now > 0);
  test.equal(timer.now(), now);
  end(test);
});

tape("now() returns a different time when called after a timeout", function(test) {
  var then = timer.now();
  test.ok(then > 0);
  setTimeout(function() {
    test.inRange(timer.now() - then, 50 - 5, 50 + 5);
    end(test);
  }, 50);
});
