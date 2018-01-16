var tape = require("tape"),
    timer = require("../"),
    end = require("./end");

tape("timerFlush() immediately invokes any eligible timers", function(test) {
  var count = 0;
  var t = timer.timer(function() { ++count; t.stop(); });
  timer.timerFlush();
  timer.timerFlush();
  test.equal(count, 1);
  end(test);
});

tape("timerFlush() within timerFlush() still executes all eligible timers", function(test) {
  var count = 0;
  var t = timer.timer(function() { if (++count >= 3) t.stop(); timer.timerFlush(); });
  timer.timerFlush();
  test.equal(count, 3);
  end(test);
});

tape("timerFlush() observes the current time", function(test) {
  var start = timer.now(), foos = 0, bars = 0, bazs = 0;
  var foo = timer.timer(function() { ++foos; foo.stop(); }, 0, start + 1);
  var bar = timer.timer(function() { ++bars; bar.stop(); }, 0, start);
  var baz = timer.timer(function() { ++bazs; baz.stop(); }, 0, start - 1);
  timer.timerFlush();
  test.equal(foos, 0);
  test.equal(bars, 1);
  test.equal(bazs, 1);
  end(test);
});
