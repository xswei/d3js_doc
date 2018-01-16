var tape = require("tape"),
    time = require("../"),
    date = require("./date");

tape("utcMinute.floor(date) returns minutes", function(test) {
  test.deepEqual(time.utcMinute.floor(date.utc(2010, 11, 31, 23, 59, 59)), date.utc(2010, 11, 31, 23, 59));
  test.deepEqual(time.utcMinute.floor(date.utc(2011, 00, 01, 00, 00, 00)), date.utc(2011, 00, 01, 00, 00));
  test.deepEqual(time.utcMinute.floor(date.utc(2011, 00, 01, 00, 00, 59)), date.utc(2011, 00, 01, 00, 00));
  test.deepEqual(time.utcMinute.floor(date.utc(2011, 00, 01, 00, 01, 00)), date.utc(2011, 00, 01, 00, 01));
  test.end();
});

tape("utcMinute.ceil(date) returns minutes", function(test) {
  test.deepEqual(time.utcMinute.ceil(date.utc(2010, 11, 31, 23, 59, 59)), date.utc(2011, 00, 01, 00, 00));
  test.deepEqual(time.utcMinute.ceil(date.utc(2011, 00, 01, 00, 00, 00)), date.utc(2011, 00, 01, 00, 00));
  test.deepEqual(time.utcMinute.ceil(date.utc(2011, 00, 01, 00, 00, 59)), date.utc(2011, 00, 01, 00, 01));
  test.deepEqual(time.utcMinute.ceil(date.utc(2011, 00, 01, 00, 01, 00)), date.utc(2011, 00, 01, 00, 01));
  test.end();
});

tape("utcMinute.offset(date) does not modify the passed-in date", function(test) {
  var d = date.utc(2010, 11, 31, 23, 59, 59, 999);
  time.utcMinute.offset(d, +1);
  test.deepEqual(d, date.utc(2010, 11, 31, 23, 59, 59, 999));
  test.end();
});

tape("utcMinute.offset(date) does not round the passed-in-date", function(test) {
  test.deepEqual(time.utcMinute.offset(date.utc(2010, 11, 31, 23, 59, 59, 999), +1), date.utc(2011, 00, 01, 00, 00, 59, 999));
  test.deepEqual(time.utcMinute.offset(date.utc(2010, 11, 31, 23, 59, 59, 456), -2), date.utc(2010, 11, 31, 23, 57, 59, 456));
  test.end();
});

tape("utcMinute.offset(date) allows negative offsets", function(test) {
  test.deepEqual(time.utcMinute.offset(date.utc(2010, 11, 31, 23, 12), -1), date.utc(2010, 11, 31, 23, 11));
  test.deepEqual(time.utcMinute.offset(date.utc(2011, 00, 01, 00, 01), -2), date.utc(2010, 11, 31, 23, 59));
  test.deepEqual(time.utcMinute.offset(date.utc(2011, 00, 01, 00, 00), -1), date.utc(2010, 11, 31, 23, 59));
  test.end();
});

tape("utcMinute.offset(date) allows positive offsets", function(test) {
  test.deepEqual(time.utcMinute.offset(date.utc(2010, 11, 31, 23, 11), +1), date.utc(2010, 11, 31, 23, 12));
  test.deepEqual(time.utcMinute.offset(date.utc(2010, 11, 31, 23, 59), +2), date.utc(2011, 00, 01, 00, 01));
  test.deepEqual(time.utcMinute.offset(date.utc(2010, 11, 31, 23, 59), +1), date.utc(2011, 00, 01, 00, 00));
  test.end();
});

tape("utcMinute.offset(date) allows zero offset", function(test) {
  test.deepEqual(time.utcMinute.offset(date.utc(2010, 11, 31, 23, 59, 59, 999), 0), date.utc(2010, 11, 31, 23, 59, 59, 999));
  test.deepEqual(time.utcMinute.offset(date.utc(2010, 11, 31, 23, 59, 58, 000), 0), date.utc(2010, 11, 31, 23, 59, 58, 000));
  test.end();
});

tape("utcMinute.range(start, stop), returns minutes", function(test) {
  test.deepEqual(time.utcMinute.range(date.utc(2010, 11, 31, 23, 59), date.utc(2011, 0, 1, 0, 2)), [
    date.utc(2010, 11, 31, 23, 59),
    date.utc(2011, 0, 1, 0, 0),
    date.utc(2011, 0, 1, 0, 1)
  ]);
  test.end();
});

tape("utcMinute.range(start, stop), has an inclusive lower bound", function(test) {
  test.deepEqual(time.utcMinute.range(date.utc(2010, 11, 31, 23, 59), date.utc(2011, 0, 1, 0, 2))[0], date.utc(2010, 11, 31, 23, 59));
  test.end();
});

tape("utcMinute.range(start, stop), has an exclusive upper bound", function(test) {
  test.deepEqual(time.utcMinute.range(date.utc(2010, 11, 31, 23, 59), date.utc(2011, 0, 1, 0, 2))[2], date.utc(2011, 0, 1, 0, 1));
  test.end();
});

tape("utcMinute.range(start, stop), can skip minutes", function(test) {
  test.deepEqual(time.utcMinute.range(date.utc(2011, 1, 1, 12, 7), date.utc(2011, 1, 1, 13, 7), 15), [
    date.utc(2011, 1, 1, 12, 7),
    date.utc(2011, 1, 1, 12, 22),
    date.utc(2011, 1, 1, 12, 37),
    date.utc(2011, 1, 1, 12, 52)
  ]);
  test.end();
});

tape("utcMinute.range(start, stop), observes start of daylight savings time", function(test) {
  test.deepEqual(time.utcMinute.range(date.utc(2011, 2, 13, 9, 59), date.utc(2011, 2, 13, 10, 2)), [
    date.utc(2011, 2, 13, 9, 59),
    date.utc(2011, 2, 13, 10, 0),
    date.utc(2011, 2, 13, 10, 1)
  ]);
  test.end();
});

tape("utcMinute.range(start, stop), observes end of daylight savings time", function(test) {
  test.deepEqual(time.utcMinute.range(date.utc(2011, 10, 6, 8, 59), date.utc(2011, 10, 6, 9, 2)), [
    date.utc(2011, 10, 6, 8, 59),
    date.utc(2011, 10, 6, 9, 0),
    date.utc(2011, 10, 6, 9, 1)
  ]);
  test.end();
});

tape("utcMinute.every(step) returns every stepth minute, starting with the first minute of the hour", function(test) {
  test.deepEqual(time.utcMinute.every(15).range(date.utc(2008, 11, 30, 12, 47), date.utc(2008, 11, 30, 13, 57)), [date.utc(2008, 11, 30, 13, 0), date.utc(2008, 11, 30, 13, 15), date.utc(2008, 11, 30, 13, 30), date.utc(2008, 11, 30, 13, 45)]);
  test.deepEqual(time.utcMinute.every(30).range(date.utc(2008, 11, 30, 12, 47), date.utc(2008, 11, 30, 13, 57)), [date.utc(2008, 11, 30, 13, 0), date.utc(2008, 11, 30, 13, 30)]);
  test.end();
});
