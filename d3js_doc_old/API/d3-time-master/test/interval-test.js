var tape = require("tape"),
    time = require("../"),
    date = require("./date");

tape("timeInterval is an alias for timeInterval.floor", function(test) {
  test.equal(time.timeYear, time.timeYear.floor);
  test.end();
});

tape("timeInterval(floor, offset) returns a custom time interval", function(test) {
  var i = time.timeInterval(function(date) {
    date.setUTCMinutes(0, 0, 0);
  }, function(date, step) {
    date.setUTCHours(date.getUTCHours() + step);
  });
  test.deepEqual(i(date.utc(2015, 0, 1, 12, 34, 56, 789)), date.utc(2015, 0, 1, 12));
  test.end();
});

tape("timeInterval(floor, offset) does not define a count method", function(test) {
  var i = time.timeInterval(function(date) {
    date.setUTCMinutes(0, 0, 0);
  }, function(date, step) {
    date.setUTCHours(date.getUTCHours() + step);
  });
  test.ok(!("count" in i));
  test.end();
});

tape("timeInterval(floor, offset) floors the step before passing it to offset", function(test) {
  var steps = [], i = time.timeInterval(function(date) {
    date.setUTCMinutes(0, 0, 0);
  }, function(date, step) {
    steps.push(+step), date.setUTCHours(date.getUTCHours() + step);
  });
  test.deepEqual(i.offset(date.utc(2015, 0, 1, 12, 34, 56, 789), 1.5), date.utc(2015, 0, 1, 13, 34, 56, 789));
  test.deepEqual(i.range(date.utc(2015, 0, 1, 12), date.utc(2015, 0, 1, 15), 1.5), [date.utc(2015, 0, 1, 12), date.utc(2015, 0, 1, 13), date.utc(2015, 0, 1, 14)]);
  test.ok(steps.every(function(step) { return step === 1; }));
  test.end();
});

tape("timeInterval(floor, offset, count) defines a count method", function(test) {
  var i = time.timeInterval(function(date) {
    date.setUTCMinutes(0, 0, 0);
  }, function(date, step) {
    date.setUTCHours(date.getUTCHours() + step);
  }, function(start, end) {
    return (end - start) / 36e5;
  });
  test.equal(i.count(date.utc(2015, 0, 1, 12, 34), date.utc(2015, 0, 1, 15, 56)), 3);
  test.end();
});

tape("timeInterval(floor, offset, count) floors dates before passing them to count", function(test) {
  var dates = [], i = time.timeInterval(function(date) {
    date.setUTCMinutes(0, 0, 0);
  }, function(date, step) {
    date.setUTCHours(date.getUTCHours() + step);
  }, function(start, end) {
    return dates.push(new Date(+start), new Date(+end)), (end - start) / 36e5;
  });
  i.count(date.utc(2015, 0, 1, 12, 34), date.utc(2015, 0, 1, 15, 56));
  test.deepEqual(dates, [date.utc(2015, 0, 1, 12), date.utc(2015, 0, 1, 15)]);
  test.end();
});

tape("timeInterval.every(step) returns null if step is invalid", function(test) {
  test.equal(time.timeDay.every(), null);
  test.equal(time.timeMinute.every(null), null);
  test.equal(time.timeSecond.every(undefined), null);
  test.equal(time.timeDay.every(NaN), null);
  test.equal(time.timeMinute.every(0), null);
  test.equal(time.timeSecond.every(0.8), null);
  test.equal(time.timeHour.every(-1), null);
  test.end();
});

tape("timeInterval.every(step) returns interval if step is one", function(test) {
  test.equal(time.timeDay.every("1"), time.timeDay);
  test.equal(time.timeMinute.every(1), time.timeMinute);
  test.equal(time.timeSecond.every(1.8), time.timeSecond);
  test.end();
});

tape("timeInterval.every(step).range(invalid, invalid) returns the empty array", function(test) {
  test.deepEqual(time.timeMinute.every(15).range(NaN, NaN), []);
  test.end();
});
