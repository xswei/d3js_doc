var tape = require("tape"),
    time = require("../");

tape("utcMillisecond is an alias for timeMillisecond", function(test) {
  test.equal(time.utcMillisecond, time.timeMillisecond);
  test.end();
});
