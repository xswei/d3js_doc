var tape = require("tape"),
    time = require("../"),
    date = require("./date");

tape("timeSecond.floor(date) returns seconds", function(test) {
  test.deepEqual(time.timeSecond.floor(date.local(2010, 11, 31, 23, 59, 59, 999)), date.local(2010, 11, 31, 23, 59, 59));
  test.deepEqual(time.timeSecond.floor(date.local(2011, 00, 01, 00, 00, 00, 000)), date.local(2011, 00, 01, 00, 00, 00));
  test.deepEqual(time.timeSecond.floor(date.local(2011, 00, 01, 00, 00, 00, 001)), date.local(2011, 00, 01, 00, 00, 00));
  test.end();
});

tape("timeSecond.round(date) returns seconds", function(test) {
  test.deepEqual(time.timeSecond.round(date.local(2010, 11, 31, 23, 59, 59, 999)), date.local(2011, 00, 01, 00, 00, 00));
  test.deepEqual(time.timeSecond.round(date.local(2011, 00, 01, 00, 00, 00, 499)), date.local(2011, 00, 01, 00, 00, 00));
  test.deepEqual(time.timeSecond.round(date.local(2011, 00, 01, 00, 00, 00, 500)), date.local(2011, 00, 01, 00, 00, 01));
  test.end();
});

tape("timeSecond.ceil(date) returns seconds", function(test) {
  test.deepEqual(time.timeSecond.ceil(date.local(2010, 11, 31, 23, 59, 59, 999)), date.local(2011, 00, 01, 00, 00, 00));
  test.deepEqual(time.timeSecond.ceil(date.local(2011, 00, 01, 00, 00, 00, 000)), date.local(2011, 00, 01, 00, 00, 00));
  test.deepEqual(time.timeSecond.ceil(date.local(2011, 00, 01, 00, 00, 00, 001)), date.local(2011, 00, 01, 00, 00, 01));
  test.end();
});

tape("timeSecond.offset(date, step) does not modify the passed-in date", function(test) {
  var d = date.local(2010, 11, 31, 23, 59, 59, 999);
  time.timeSecond.offset(d, +1);
  test.deepEqual(d, date.local(2010, 11, 31, 23, 59, 59, 999));
  test.end();
});

tape("timeSecond.offset(date, step) does not round the passed-in-date", function(test) {
  test.deepEqual(time.timeSecond.offset(date.local(2010, 11, 31, 23, 59, 59, 999), +1), date.local(2011, 00, 01, 00, 00, 00, 999));
  test.deepEqual(time.timeSecond.offset(date.local(2010, 11, 31, 23, 59, 59, 456), -2), date.local(2010, 11, 31, 23, 59, 57, 456));
  test.end();
});

tape("timeSecond.offset(date, step) allows negative offsets", function(test) {
  test.deepEqual(time.timeSecond.offset(date.local(2010, 11, 31, 23, 59, 59), -1), date.local(2010, 11, 31, 23, 59, 58));
  test.deepEqual(time.timeSecond.offset(date.local(2011, 00, 01, 00, 00, 00), -2), date.local(2010, 11, 31, 23, 59, 58));
  test.deepEqual(time.timeSecond.offset(date.local(2011, 00, 01, 00, 00, 00), -1), date.local(2010, 11, 31, 23, 59, 59));
  test.end();
});

tape("timeSecond.offset(date, step) allows positive offsets", function(test) {
  test.deepEqual(time.timeSecond.offset(date.local(2010, 11, 31, 23, 59, 58), +1), date.local(2010, 11, 31, 23, 59, 59));
  test.deepEqual(time.timeSecond.offset(date.local(2010, 11, 31, 23, 59, 58), +2), date.local(2011, 00, 01, 00, 00, 00));
  test.deepEqual(time.timeSecond.offset(date.local(2010, 11, 31, 23, 59, 59), +1), date.local(2011, 00, 01, 00, 00, 00));
  test.end();
});

tape("timeSecond.offset(date, step) allows zero offset", function(test) {
  test.deepEqual(time.timeSecond.offset(date.local(2010, 11, 31, 23, 59, 59, 999), 0), date.local(2010, 11, 31, 23, 59, 59, 999));
  test.deepEqual(time.timeSecond.offset(date.local(2010, 11, 31, 23, 59, 58, 000), 0), date.local(2010, 11, 31, 23, 59, 58, 000));
  test.end();
});

tape("timeSecond.range(start, stop) returns seconds", function(test) {
  test.deepEqual(time.timeSecond.range(date.local(2010, 11, 31, 23, 59, 59), date.local(2011, 0, 1, 0, 0, 2)), [
    date.local(2010, 11, 31, 23, 59, 59),
    date.local(2011, 0, 1, 0, 0, 0),
    date.local(2011, 0, 1, 0, 0, 1)
  ]);
  test.end();
});

tape("timeSecond.range(start, stop) has an inclusive lower bound", function(test) {
  test.deepEqual(time.timeSecond.range(date.local(2010, 11, 31, 23, 59, 59), date.local(2011, 0, 1, 0, 0, 2))[0], date.local(2010, 11, 31, 23, 59, 59));
  test.end();
});

tape("timeSecond.range(start, stop) has an exclusive upper bound", function(test) {
  test.deepEqual(time.timeSecond.range(date.local(2010, 11, 31, 23, 59, 59), date.local(2011, 0, 1, 0, 0, 2))[2], date.local(2011, 0, 1, 0, 0, 1));
  test.end();
});

tape("timeSecond.range(start, stop, step) can skip seconds", function(test) {
  test.deepEqual(time.timeSecond.range(date.local(2011, 1, 1, 12, 0, 7), date.local(2011, 1, 1, 12, 1, 7), 15), [
    date.local(2011, 1, 1, 12, 0, 7),
    date.local(2011, 1, 1, 12, 0, 22),
    date.local(2011, 1, 1, 12, 0, 37),
    date.local(2011, 1, 1, 12, 0, 52)
  ]);
  test.end();
});

tape("timeSecond.range(start, stop) observes start of daylight savings time", function(test) {
  test.deepEqual(time.timeSecond.range(date.utc(2011, 2, 13, 9, 59, 59), date.utc(2011, 2, 13, 10, 0, 2)), [
    date.utc(2011, 2, 13, 9, 59, 59),
    date.utc(2011, 2, 13, 10, 0, 0),
    date.utc(2011, 2, 13, 10, 0, 1)
  ]);
  test.end();
});

tape("timeSecond.range(start, stop) observes end of daylight savings time", function(test) {
  test.deepEqual(time.timeSecond.range(date.utc(2011, 10, 6, 8, 59, 59), date.utc(2011, 10, 6, 9, 0, 2)), [
    date.utc(2011, 10, 6, 8, 59, 59),
    date.utc(2011, 10, 6, 9, 0, 0),
    date.utc(2011, 10, 6, 9, 0, 1)
  ]);
  test.end();
});

tape("timeSecond.every(step) returns every stepth second, starting with the first second of the minute", function(test) {
  test.deepEqual(time.timeSecond.every(15).range(date.local(2008, 11, 30, 12, 36, 47), date.local(2008, 11, 30, 12, 37, 57)), [date.local(2008, 11, 30, 12, 37, 0), date.local(2008, 11, 30, 12, 37, 15), date.local(2008, 11, 30, 12, 37, 30), date.local(2008, 11, 30, 12, 37, 45)]);
  test.deepEqual(time.timeSecond.every(30).range(date.local(2008, 11, 30, 12, 36, 47), date.local(2008, 11, 30, 12, 37, 57)), [date.local(2008, 11, 30, 12, 37, 0), date.local(2008, 11, 30, 12, 37, 30)]);
  test.end();
});

tape("timeSecond.range(start, stop) returns every second crossing the daylight savings boundary", function(test) {
  test.deepEqual(time.timeSecond.range(new Date(1478422800000 - 2 * 1e3), new Date(1478422800000 + 2 * 1e3)), [
    new Date(1478422798000), // Sun Nov 06 2016 01:59:58 GMT-0700 (PDT)
    new Date(1478422799000), // Sun Nov 06 2016 01:59:59 GMT-0700 (PDT)
    new Date(1478422800000), // Sun Nov 06 2016 01:00:00 GMT-0800 (PDT)
    new Date(1478422801000)  // Sun Nov 06 2016 01:00:01 GMT-0800 (PDT)
  ]);
  test.end();
});
