var tape = require("tape"),
    timer = require("../"),
    end = require("./end");

require("./inRange");

tape("timer(callback) returns an instanceof timer", function(test) {
  var t = timer.timer(function() {});
  test.equal(t instanceof timer.timer, true);
  test.equal(t.constructor.name, "Timer");
  t.stop();
  end(test);
});

tape("timer(callback) verifies that callback is a function", function(test) {
  test.throws(function() { timer.timer(); }, TypeError);
  test.throws(function() { timer.timer("42"); }, TypeError);
  test.throws(function() { timer.timer(null); }, TypeError);
  test.end();
});

// It’s difficult to test the timing behavior reliably, since there can be small
// hiccups that cause a timer to be delayed. So we test only the mean rate.
tape("timer(callback) invokes the callback about every 17ms", function(test) {
  var then = timer.now(), count = 0;
  var t = timer.timer(function() {
    if (++count > 10) {
      t.stop();
      test.inRange(timer.now() - then, (17 - 5) * count, (17 + 5) * count);
      end(test);
    }
  });
});

tape("timer(callback) invokes the callback until the timer is stopped", function(test) {
  var count = 0;
  var t = timer.timer(function() {
    if (++count > 2) {
      t.stop();
      end(test);
    }
  });
});

tape("timer(callback) uses the global context for the callback", function(test) {
  var t = timer.timer(function() {
    test.equal(this, global);
    t.stop();
    end(test);
  });
});

tape("timer(callback) passes the callback the elapsed time", function(test) {
  var then = timer.now(), count = 0;
  var t = timer.timer(function(elapsed) {
    ++count;
    test.equal(elapsed, timer.now() - then);
    if (count > 10) {
      t.stop();
      end(test);
    }
  });
});

tape("timer(callback, delay) first invokes the callback after the specified delay", function(test) {
  var then = timer.now(), delay = 150;
  var t = timer.timer(function() {
    t.stop();
    test.inRange(timer.now() - then, delay - 10, delay + 10);
    end(test);
  }, delay);
});

tape("timer(callback, delay) computes the elapsed time relative to the delay", function(test) {
  var delay = 150;
  var t = timer.timer(function(elapsed) {
    t.stop();
    test.inRange(elapsed, 0, 10);
    end(test);
  }, delay);
});

tape("timer(callback, delay, time) computes the effective delay relative to the specified time", function(test) {
  var delay = 150, skew = 200;
  var t = timer.timer(function(elapsed) {
    t.stop();
    test.inRange(elapsed, skew - delay + 17 - 10, skew - delay + 17 + 10);
    end(test);
  }, delay, timer.now() - skew);
});

tape("timer(callback) invokes callbacks in scheduling order during synchronous flush", function(test) {
  var results = [];
  var t0 = timer.timer(function() { results.push(1); t0.stop(); });
  var t1 = timer.timer(function() { results.push(2); t1.stop(); });
  var t2 = timer.timer(function() { results.push(3); t2.stop(); });
  timer.timerFlush();
  test.deepEqual(results, [1, 2, 3]);
  end(test);
});

tape("timer(callback) invokes callbacks in scheduling order during asynchronous flush", function(test) {
  var results = [];
  var t0 = timer.timer(function() { results.push(1); t0.stop(); });
  var t1 = timer.timer(function() { results.push(2); t1.stop(); });
  var t2 = timer.timer(function() { results.push(3); t2.stop(); });
  var t3 = timer.timer(function() {
    t3.stop();
    test.deepEqual(results, [1, 2, 3]);
    end(test);
  });
});

// Even though these timers have different delays, they are still called back in
// scheduling order when they are simultaneously active.
tape("timer(callback, delay) invokes callbacks in scheduling order during asynchronous flush", function(test) {
  var then = timer.now(), results;
  var t0 = timer.timer(function() { results = [1]; t0.stop(); }, 60, then);
  var t1 = timer.timer(function() { if (results) results.push(2), t1.stop(); }, 40, then);
  var t2 = timer.timer(function() { if (results) results.push(3), t2.stop(); }, 80, then);
  var t3 = timer.timer(function() {
    t3.stop();
    test.deepEqual(results, [1, 2, 3]);
    end(test);
  }, 100, then);
});

tape("timer(callback) within a frame invokes the callback at the end of the same frame", function(test) {
  var then = timer.now();
  var t0 = timer.timer(function(elapsed, now) {
    var delay = timer.now() - then;
    var t1 = timer.timer(function(elapsed2, now2) {
      t1.stop();
      test.equal(elapsed2, 0);
      test.equal(now2, now);
      test.inRange(timer.now() - then, delay, delay + 3);
      end(test);
    }, 0, now);
    t0.stop();
  });
});

// Note: assumes that Node doesn’t support requestAnimationFrame, falling back to setTimeout.
tape("timer(callback, delay) within a timerFlush() does not request duplicate frames", function(test) {
  var setTimeout0 = setTimeout,
      frames = 0;

  // This requests a frame, too, so do it before the test starts.
  timer.now();

  setTimeout = function() {
    ++frames;
    return setTimeout0.apply(this, arguments);
  };

  var t0 = timer.timer(function(elapsed) {

    // 2. The first timer is invoked synchronously by timerFlush, so only the
    // first frame—when this timer was created—has been requested.
    test.equal(frames, 1);

    t0.stop();

    // 3. This timer was stopped during flush, so it doesn’t request a frame.
    test.equal(frames, 1);

    var t1 = timer.timer(function() {

      // 6. Still only one frame has been requested so far: the second timer has
      // a <17ms delay, and so was called back during the first frame requested
      // by the first timer on creation. If the second timer had a longer delay,
      // it might need another frame (or timeout) before invocation.
      test.equal(frames, 1);

      t1.stop();

      // 7. Stopping the second timer doesn’t immediately request a frame since
      // we’re now within an implicit flush (initiated by this timer).
      test.equal(frames, 1);

      setTimeout0(function() {

        // 8. Since the timer queue was empty when we stopped the second timer,
        // no additional frame was requested after the timers were flushed.
        test.equal(frames, 1);

        setTimeout = setTimeout0;
        end(test);
      }, 50);
    }, 1);

    // 4. Creating a second timer during flush also doesn’t immediately request
    // a frame; the request would happen AFTER all the timers are called back,
    // and we still have the request active from when the first timer was
    // created, since the first timer is invoked synchronously.
    test.equal(frames, 1);
  });

  // 1. Creating the first timer requests the first frame.
  test.equal(frames, 1);

  timer.timerFlush();

  // 5. Still only one frame active!
  test.equal(frames, 1);
});

// Note: assumes that Node doesn’t support requestAnimationFrame, falling back to setTimeout.
tape("timer(callback) switches to setTimeout for long delays", function(test) {
  var setTimeout0 = setTimeout,
      frames = 0,
      timeouts = 0;

  // This requests a frame, too, so do it before the test starts.
  timer.now();

  setTimeout = function(callback, delay) {
    delay === 17 ? ++frames : ++timeouts;
    return setTimeout0.apply(this, arguments);
  };

  var t0 = timer.timer(function() {

    // 2. The first timer had a delay >24ms, so after the first scheduling
    // frame, we used a longer timeout to wake up.
    test.equal(frames, 1);
    test.equal(timeouts, 1);

    t0.stop();

    // 3. Stopping a timer during flush doesn’t request a new frame.
    test.equal(frames, 1);
    test.equal(timeouts, 1);

    var t1 = timer.timer(function() {

      // 5. The second timer had a short delay, so it’s not immediately invoked
      // during the same tick as the first timer; it gets a new frame.
      test.equal(frames, 2);
      test.equal(timeouts, 1);

      t1.stop();

      // 6. Stopping a timer during flush doesn’t request a new frame.
      test.equal(frames, 2);
      test.equal(timeouts, 1);

      setTimeout0(function() {

        // 7. Since the timer queue was empty when we stopped the second timer,
        // no additional frame was requested after the timers were flushed.
        test.equal(frames, 2);
        test.equal(timeouts, 1);

        setTimeout = setTimeout0;
        end(test);
      }, 50);
    }, 1);

    // 4. Scheduling a new timer during flush doesn’t request a new frame;
    // that happens after all the timers have been invoked.
    test.equal(frames, 1);
    test.equal(timeouts, 1);
  }, 100);

  // 1. Creating the first timer requests the first frame. Even though the timer
  // has a long delay, we always use a frame to consolidate timer creation for
  // multiple timers. That way, if you schedule a bunch of timers with different
  // delays, we don’t thrash timeouts.
  test.equal(frames, 1);
  test.equal(timeouts, 0);
});

tape("timer.stop() immediately stops the timer", function(test) {
  var count = 0;
  var t = timer.timer(function() { ++count; });
  setTimeout(function() {
    t.stop();
    test.equal(count, 1);
    end(test);
  }, 24);
});

tape("timer.stop() recomputes the new wake time after one frame", function(test) {
  var setTimeout0 = setTimeout,
      delays = [];

  // This requests a frame, too, so do it before the test starts.
  timer.now();

  setTimeout = function(callback, delay) {
    delays.push(delay);
    return setTimeout0.apply(this, arguments);
  };

  var t0 = timer.timer(function() {}, 1000);
  var t1 = timer.timer(function() {}, 500);
  setTimeout0(function() {

    // 1. The two timers are scheduling in the first frame, and then the new
    // wake time is computed based on minimum relative time of active timers.
    test.equal(delays.length, 2);
    test.equal(delays[0], 17);
    test.inRange(delays[1], 500 - 17 - 10, 500 - 17 + 10);

    t1.stop();

    // 2. The second timer (with the smaller delay) was stopped, but the new
    // wake time isn’t computed until the next frame, since we stopped the timer
    // outside of a flush.
    test.equal(delays.length, 3);
    test.equal(delays[2], 17);

    setTimeout0(function() {

      // 3. The alarm was reset to wake for the long-delay timer.
      test.equal(delays.length, 4);
      test.inRange(delays[3], 1000 - 100 - 17 * 1.5 - 10, 1000 - 100 - 17 * 1.5 + 10);

      t0.stop();

      setTimeout0(function() {

        // 4. The alarm was cleared after the long-delay timer was cancelled.
        test.equal(delays.length, 5);
        test.equal(delays[4], 17);

        setTimeout = setTimeout0;
        end(test);
      }, 100);
    }, 100);
  }, 100);
});

tape("timer.restart(callback) verifies that callback is a function", function(test) {
  var t = timer.timer(function() {});
  test.throws(function() { t.restart(); }, TypeError);
  test.throws(function() { t.restart(null); }, TypeError);
  test.throws(function() { t.restart("42"); }, TypeError);
  t.stop();
  end(test);
});

tape("timer.restart(callback) implicitly uses zero delay and the current time", function(test) {
  var t = timer.timer(function() {}, 1000);
  t.restart(function(elapsed) {
    test.inRange(elapsed, 17 - 10, 17 + 10);
    t.stop();
    end(test);
  });
});

tape("timer.restart(callback, delay, time) recomputes the new wake time after one frame", function(test) {
  var then = timer.now(),
      setTimeout0 = setTimeout,
      delays = [];

  setTimeout = function(callback, delay) {
    delays.push(delay);
    return setTimeout0.apply(this, arguments);
  };

  var t = timer.timer(function() {}, 500, then);
  setTimeout0(function() {

    // 1. The timer is scheduled in the first frame, and then the new wake time
    // is computed based on its relative time.
    test.equal(delays.length, 2);
    test.equal(delays[0], 17);
    test.inRange(delays[1], 500 - 17 - 10, 500 - 17 + 10);

    t.restart(function() {}, 1000, then);

    // 2. The timer was delayed, but the new wake time isn’t computed until the
    // next frame, since we restarted the timer outside of a flush.
    test.equal(delays.length, 3);
    test.equal(delays[2], 17);

    setTimeout0(function() {

      // 3. The alarm was reset to wake for the longer delay.
      test.equal(delays.length, 4);
      test.inRange(delays[3], 1000 - 100 - 17 * 1.5 - 10, 1000 - 100 - 17 * 1.5 + 10);

      t.stop();

      setTimeout0(function() {

        // 4. The alarm was cleared after the timer was cancelled.
        test.equal(delays.length, 5);
        test.equal(delays[4], 17);

        setTimeout = setTimeout0;
        end(test);
      }, 100);
    }, 100);
  }, 100);
});

tape("timer.stop() immediately followed by timer.restart() doesn’t cause an infinite loop", function(test) {
  var t = timer.timer(function() {}), last;
  t.stop();
  t.restart(function(elapsed) {
    if (!last) return last = elapsed;
    if (elapsed === last) test.fail("repeated invocation");
    t.stop();
    test.end();
  });
});

tape("timer.stop() immediately followed by timer.restart() doesn’t cause an infinite loop (2)", function(test) {
  var t0 = timer.timer(function() {}), t1 = timer.timer(function() {}), last;
  t0.stop();
  t0.restart(function(elapsed) {
    if (!last) return last = elapsed;
    if (elapsed === last) test.fail("repeated invocation");
    t0.stop();
    test.end();
  });
  t1.stop();
});

tape("timer.stop() clears the internal _next field after a timeout", function(test) {
  var t0 = timer.timer(function() {}), t1 = timer.timer(function() {});
  t0.stop();
  setTimeout(function() {
    test.equal(!t0._next, true);
    t1.stop();
    test.end();
  }, 100);
});
