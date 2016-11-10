var tape = require("tape"),
    time = require("../"),
    date = require("./date");

tape("utcSecond.floor(date) returns seconds", function(test) {
  test.deepEqual(time.utcSecond.floor(date.utc(2010, 11, 31, 23, 59, 59, 999)), date.utc(2010, 11, 31, 23, 59, 59));
  test.deepEqual(time.utcSecond.floor(date.utc(2011, 00, 01, 00, 00, 00, 000)), date.utc(2011, 00, 01, 00, 00, 00));
  test.deepEqual(time.utcSecond.floor(date.utc(2011, 00, 01, 00, 00, 00, 001)), date.utc(2011, 00, 01, 00, 00, 00));
  test.end();
});

tape("utcSecond.round(date) returns seconds", function(test) {
  test.deepEqual(time.utcSecond.round(date.utc(2010, 11, 31, 23, 59, 59, 999)), date.utc(2011, 00, 01, 00, 00, 00));
  test.deepEqual(time.utcSecond.round(date.utc(2011, 00, 01, 00, 00, 00, 499)), date.utc(2011, 00, 01, 00, 00, 00));
  test.deepEqual(time.utcSecond.round(date.utc(2011, 00, 01, 00, 00, 00, 500)), date.utc(2011, 00, 01, 00, 00, 01));
  test.end();
});

tape("utcSecond.ceil(date) returns seconds", function(test) {
  test.deepEqual(time.utcSecond.ceil(date.utc(2010, 11, 31, 23, 59, 59, 999)), date.utc(2011, 00, 01, 00, 00, 00));
  test.deepEqual(time.utcSecond.ceil(date.utc(2011, 00, 01, 00, 00, 00, 000)), date.utc(2011, 00, 01, 00, 00, 00));
  test.deepEqual(time.utcSecond.ceil(date.utc(2011, 00, 01, 00, 00, 00, 001)), date.utc(2011, 00, 01, 00, 00, 01));
  test.end();
});

tape("utcSecond.offset(date, step) does not modify the passed-in date", function(test) {
  var d = date.utc(2010, 11, 31, 23, 59, 59, 999);
  time.utcSecond.offset(d, +1);
  test.deepEqual(d, date.utc(2010, 11, 31, 23, 59, 59, 999));
  test.end();
});

tape("utcSecond.offset(date, step) does not round the passed-in-date", function(test) {
  test.deepEqual(time.utcSecond.offset(date.utc(2010, 11, 31, 23, 59, 59, 999), +1), date.utc(2011, 00, 01, 00, 00, 00, 999));
  test.deepEqual(time.utcSecond.offset(date.utc(2010, 11, 31, 23, 59, 59, 456), -2), date.utc(2010, 11, 31, 23, 59, 57, 456));
  test.end();
});

tape("utcSecond.offset(date, step) allows negative offsets", function(test) {
  test.deepEqual(time.utcSecond.offset(date.utc(2010, 11, 31, 23, 59, 59), -1), date.utc(2010, 11, 31, 23, 59, 58));
  test.deepEqual(time.utcSecond.offset(date.utc(2011, 00, 01, 00, 00, 00), -2), date.utc(2010, 11, 31, 23, 59, 58));
  test.deepEqual(time.utcSecond.offset(date.utc(2011, 00, 01, 00, 00, 00), -1), date.utc(2010, 11, 31, 23, 59, 59));
  test.end();
});

tape("utcSecond.offset(date, step) allows positive offsets", function(test) {
  test.deepEqual(time.utcSecond.offset(date.utc(2010, 11, 31, 23, 59, 58), +1), date.utc(2010, 11, 31, 23, 59, 59));
  test.deepEqual(time.utcSecond.offset(date.utc(2010, 11, 31, 23, 59, 58), +2), date.utc(2011, 00, 01, 00, 00, 00));
  test.deepEqual(time.utcSecond.offset(date.utc(2010, 11, 31, 23, 59, 59), +1), date.utc(2011, 00, 01, 00, 00, 00));
  test.end();
});

tape("utcSecond.offset(date, step) allows zero offset", function(test) {
  test.deepEqual(time.utcSecond.offset(date.utc(2010, 11, 31, 23, 59, 59, 999), 0), date.utc(2010, 11, 31, 23, 59, 59, 999));
  test.deepEqual(time.utcSecond.offset(date.utc(2010, 11, 31, 23, 59, 58, 000), 0), date.utc(2010, 11, 31, 23, 59, 58, 000));
  test.end();
});

tape("utcSecond.range(start, stop) returns seconds", function(test) {
  test.deepEqual(time.utcSecond.range(date.utc(2010, 11, 31, 23, 59, 59), date.utc(2011, 0, 1, 0, 0, 2)), [
    date.utc(2010, 11, 31, 23, 59, 59),
    date.utc(2011, 0, 1, 0, 0, 0),
    date.utc(2011, 0, 1, 0, 0, 1)
  ]);
  test.end();
});

tape("utcSecond.range(start, stop) has an inclusive lower bound", function(test) {
  test.deepEqual(time.utcSecond.range(date.utc(2010, 11, 31, 23, 59, 59), date.utc(2011, 0, 1, 0, 0, 2))[0], date.utc(2010, 11, 31, 23, 59, 59));
  test.end();
});

tape("utcSecond.range(start, stop) has an exclusive upper bound", function(test) {
  test.deepEqual(time.utcSecond.range(date.utc(2010, 11, 31, 23, 59, 59), date.utc(2011, 0, 1, 0, 0, 2))[2], date.utc(2011, 0, 1, 0, 0, 1));
  test.end();
});

tape("utcSecond.range(start, stop, step) can skip seconds", function(test) {
  test.deepEqual(time.utcSecond.range(date.utc(2011, 1, 1, 12, 0, 7), date.utc(2011, 1, 1, 12, 1, 7), 15), [
    date.utc(2011, 1, 1, 12, 0, 7),
    date.utc(2011, 1, 1, 12, 0, 22),
    date.utc(2011, 1, 1, 12, 0, 37),
    date.utc(2011, 1, 1, 12, 0, 52)
  ]);
  test.end();
});

tape("utcSecond.range(start, stop) observes start of daylight savings time", function(test) {
  test.deepEqual(time.utcSecond.range(date.utc(2011, 2, 13, 9, 59, 59), date.utc(2011, 2, 13, 10, 0, 2)), [
    date.utc(2011, 2, 13, 9, 59, 59),
    date.utc(2011, 2, 13, 10, 0, 0),
    date.utc(2011, 2, 13, 10, 0, 1)
  ]);
  test.end();
});

tape("utcSecond.range(start, stop) observes end of daylight savings time", function(test) {
  test.deepEqual(time.utcSecond.range(date.utc(2011, 10, 6, 8, 59, 59), date.utc(2011, 10, 6, 9, 0, 2)), [
    date.utc(2011, 10, 6, 8, 59, 59),
    date.utc(2011, 10, 6, 9, 0, 0),
    date.utc(2011, 10, 6, 9, 0, 1)
  ]);
  test.end();
});

tape("utcSecond.every(step) returns every stepth second, starting with the first second of the minute", function(test) {
  test.deepEqual(time.utcSecond.every(15).range(date.utc(2008, 11, 30, 12, 36, 47), date.utc(2008, 11, 30, 12, 37, 57)), [date.utc(2008, 11, 30, 12, 37, 0), date.utc(2008, 11, 30, 12, 37, 15), date.utc(2008, 11, 30, 12, 37, 30), date.utc(2008, 11, 30, 12, 37, 45)]);
  test.deepEqual(time.utcSecond.every(30).range(date.utc(2008, 11, 30, 12, 36, 47), date.utc(2008, 11, 30, 12, 37, 57)), [date.utc(2008, 11, 30, 12, 37, 0), date.utc(2008, 11, 30, 12, 37, 30)]);
  test.end();
});
