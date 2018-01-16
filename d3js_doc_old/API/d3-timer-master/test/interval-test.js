var tape = require("tape"),
    timer = require("../"),
    end = require("./end");

require("./inRange");

// It’s difficult to test the timing behavior reliably, since there can be small
// hiccups that cause a timer to be delayed. So we test only the mean rate.
tape("interval(callback) invokes the callback about every 17ms", function(test) {
  var then = timer.now(), count = 0;
  var t = timer.interval(function() {
    if (++count > 10) {
      t.stop();
      test.inRange(timer.now() - then, (17 - 5) * count, (17 + 5) * count);
      end(test);
    }
  });
});

tape("interval(callback) invokes the callback until the timer is stopped", function(test) {
  var count = 0;
  var t = timer.interval(function() {
    if (++count > 2) {
      t.stop();
      end(test);
    }
  });
});

tape("interval(callback, delay) invokes the callback about every delay milliseconds", function(test) {
  var then = timer.now(), delay = 50, nows = [then];
  var t = timer.interval(function() {
    if (nows.push(timer.now()) > 10) {
      t.stop();
      nows.forEach(function(now, i) { test.inRange(now - then, delay * i - 10, delay * i + 10); });
      end(test);
    }
  }, delay);
});

tape("interval(callback, delay, time) invokes the callback repeatedly after the specified delay relative to the given time", function(test) {
  var then = timer.now() + 50, delay = 50;
  var t = timer.interval(function(elapsed) {
    test.inRange(timer.now() - then, delay - 10, delay + 10);
    t.stop();
    end(test);
  }, delay, then);
});

tape("interval(callback) uses the global context for the callback", function(test) {
  var t = timer.interval(function() {
    test.equal(this, global);
    t.stop();
    end(test);
  });
});

tape("interval(callback) passes the callback the elapsed time", function(test) {
  var then = timer.now(), count = 0;
  var t = timer.interval(function(elapsed) {
    test.equal(elapsed, timer.now() - then);
    t.stop();
    end(test);
  }, 100);
});

tape("interval(callback) returns a timer", function(test) {
  var count = 0;
  var t = timer.interval(function() { ++count; });
  test.equal(t instanceof timer.timer, true);
  t.stop();
  setTimeout(function() {
    test.equal(count, 0);
    end(test);
  }, 100);
});
