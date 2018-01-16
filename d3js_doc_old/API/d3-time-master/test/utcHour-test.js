var tape = require("tape"),
    time = require("../"),
    date = require("./date");

tape("utcHour.floor(date) returns hours", function(test) {
  test.deepEqual(time.utcHour.floor(date.utc(2010, 11, 31, 23, 59)), date.utc(2010, 11, 31, 23));
  test.deepEqual(time.utcHour.floor(date.utc(2011, 00, 01, 00, 00)), date.utc(2011, 00, 01, 00));
  test.deepEqual(time.utcHour.floor(date.utc(2011, 00, 01, 00, 01)), date.utc(2011, 00, 01, 00));
  test.end();
});

tape("utcHour.floor(date) observes start of daylight savings time", function(test) {
  test.deepEqual(time.utcHour.floor(date.utc(2011, 02, 13, 08, 59)), date.utc(2011, 02, 13, 08));
  test.deepEqual(time.utcHour.floor(date.utc(2011, 02, 13, 09, 00)), date.utc(2011, 02, 13, 09));
  test.deepEqual(time.utcHour.floor(date.utc(2011, 02, 13, 09, 01)), date.utc(2011, 02, 13, 09));
  test.deepEqual(time.utcHour.floor(date.utc(2011, 02, 13, 09, 59)), date.utc(2011, 02, 13, 09));
  test.deepEqual(time.utcHour.floor(date.utc(2011, 02, 13, 10, 00)), date.utc(2011, 02, 13, 10));
  test.deepEqual(time.utcHour.floor(date.utc(2011, 02, 13, 10, 01)), date.utc(2011, 02, 13, 10));
  test.end();
});

tape("utcHour.floor(date) observes end of daylight savings time", function(test) {
  test.deepEqual(time.utcHour.floor(date.utc(2011, 10, 06, 07, 59)), date.utc(2011, 10, 06, 07));
  test.deepEqual(time.utcHour.floor(date.utc(2011, 10, 06, 08, 00)), date.utc(2011, 10, 06, 08));
  test.deepEqual(time.utcHour.floor(date.utc(2011, 10, 06, 08, 01)), date.utc(2011, 10, 06, 08));
  test.deepEqual(time.utcHour.floor(date.utc(2011, 10, 06, 08, 59)), date.utc(2011, 10, 06, 08));
  test.deepEqual(time.utcHour.floor(date.utc(2011, 10, 06, 09, 00)), date.utc(2011, 10, 06, 09));
  test.deepEqual(time.utcHour.floor(date.utc(2011, 10, 06, 09, 01)), date.utc(2011, 10, 06, 09));
  test.end();
});


tape("utcHour.ceil(date) returns hours", function(test) {
  test.deepEqual(time.utcHour.ceil(date.utc(2010, 11, 31, 23, 59)), date.utc(2011, 00, 01, 00));
  test.deepEqual(time.utcHour.ceil(date.utc(2011, 00, 01, 00, 00)), date.utc(2011, 00, 01, 00));
  test.deepEqual(time.utcHour.ceil(date.utc(2011, 00, 01, 00, 01)), date.utc(2011, 00, 01, 01));
  test.end();
});

tape("utcHour.ceil(date) observes start of daylight savings time", function(test) {
  test.deepEqual(time.utcHour.ceil(date.utc(2011, 02, 13, 08, 59)), date.utc(2011, 02, 13, 09));
  test.deepEqual(time.utcHour.ceil(date.utc(2011, 02, 13, 09, 00)), date.utc(2011, 02, 13, 09));
  test.deepEqual(time.utcHour.ceil(date.utc(2011, 02, 13, 09, 01)), date.utc(2011, 02, 13, 10));
  test.deepEqual(time.utcHour.ceil(date.utc(2011, 02, 13, 09, 59)), date.utc(2011, 02, 13, 10));
  test.deepEqual(time.utcHour.ceil(date.utc(2011, 02, 13, 10, 00)), date.utc(2011, 02, 13, 10));
  test.deepEqual(time.utcHour.ceil(date.utc(2011, 02, 13, 10, 01)), date.utc(2011, 02, 13, 11));
  test.end();
});

tape("utcHour.ceil(date) observes end of daylight savings time", function(test) {
  test.deepEqual(time.utcHour.ceil(date.utc(2011, 10, 06, 07, 59)), date.utc(2011, 10, 06, 08));
  test.deepEqual(time.utcHour.ceil(date.utc(2011, 10, 06, 08, 00)), date.utc(2011, 10, 06, 08));
  test.deepEqual(time.utcHour.ceil(date.utc(2011, 10, 06, 08, 01)), date.utc(2011, 10, 06, 09));
  test.deepEqual(time.utcHour.ceil(date.utc(2011, 10, 06, 08, 59)), date.utc(2011, 10, 06, 09));
  test.deepEqual(time.utcHour.ceil(date.utc(2011, 10, 06, 09, 00)), date.utc(2011, 10, 06, 09));
  test.deepEqual(time.utcHour.ceil(date.utc(2011, 10, 06, 09, 01)), date.utc(2011, 10, 06, 10));
  test.end();
});

tape("utcHour.offset(date) does not modify the passed-in date", function(test) {
  var d = date.utc(2010, 11, 31, 23, 59, 59, 999);
  time.utcHour.offset(d, +1);
  test.deepEqual(d, date.utc(2010, 11, 31, 23, 59, 59, 999));
  test.end();
});

tape("utcHour.offset(date) does not round the passed-in-date", function(test) {
  test.deepEqual(time.utcHour.offset(date.utc(2010, 11, 31, 23, 59, 59, 999), +1), date.utc(2011, 00, 01, 00, 59, 59, 999));
  test.deepEqual(time.utcHour.offset(date.utc(2010, 11, 31, 23, 59, 59, 456), -2), date.utc(2010, 11, 31, 21, 59, 59, 456));
  test.end();
});

tape("utcHour.offset(date) allows negative offsets", function(test) {
  test.deepEqual(time.utcHour.offset(date.utc(2010, 11, 31, 12), -1), date.utc(2010, 11, 31, 11));
  test.deepEqual(time.utcHour.offset(date.utc(2011, 00, 01, 01), -2), date.utc(2010, 11, 31, 23));
  test.deepEqual(time.utcHour.offset(date.utc(2011, 00, 01, 00), -1), date.utc(2010, 11, 31, 23));
  test.end();
});

tape("utcHour.offset(date) allows positive offsets", function(test) {
  test.deepEqual(time.utcHour.offset(date.utc(2010, 11, 31, 11), +1), date.utc(2010, 11, 31, 12));
  test.deepEqual(time.utcHour.offset(date.utc(2010, 11, 31, 23), +2), date.utc(2011, 00, 01, 01));
  test.deepEqual(time.utcHour.offset(date.utc(2010, 11, 31, 23), +1), date.utc(2011, 00, 01, 00));
  test.end();
});

tape("utcHour.offset(date) allows zero offset", function(test) {
  test.deepEqual(time.utcHour.offset(date.utc(2010, 11, 31, 23, 59, 59, 999), 0), date.utc(2010, 11, 31, 23, 59, 59, 999));
  test.deepEqual(time.utcHour.offset(date.utc(2010, 11, 31, 23, 59, 58, 000), 0), date.utc(2010, 11, 31, 23, 59, 58, 000));
  test.end();
});

tape("utcHour.range(start, stop) returns hours", function(test) {
  test.deepEqual(time.utcHour.range(date.utc(2010, 11, 31, 12, 30), date.utc(2010, 11, 31, 15, 30)), [
    date.utc(2010, 11, 31, 13),
    date.utc(2010, 11, 31, 14),
    date.utc(2010, 11, 31, 15)
  ]);
  test.end();
});

tape("utcHour.range(start, stop) has an inclusive lower bound", function(test) {
  test.deepEqual(time.utcHour.range(date.utc(2010, 11, 31, 23), date.utc(2011, 0, 1, 2))[0], date.utc(2010, 11, 31, 23));
  test.end();
});

tape("utcHour.range(start, stop) has an exclusive upper bound", function(test) {
  test.deepEqual(time.utcHour.range(date.utc(2010, 11, 31, 23), date.utc(2011, 0, 1, 2))[2], date.utc(2011, 0, 1, 1));
  test.end();
});

tape("utcHour.range(start, stop) can skip hours", function(test) {
  test.deepEqual(time.utcHour.range(date.utc(2011, 1, 1, 1), date.utc(2011, 1, 1, 13), 3), [
    date.utc(2011, 1, 1, 1),
    date.utc(2011, 1, 1, 4),
    date.utc(2011, 1, 1, 7),
    date.utc(2011, 1, 1, 10)
  ]);
  test.end();
});

tape("utcHour.range(start, stop) does not observe the start of daylight savings time", function(test) {
  test.deepEqual(time.utcHour.range(date.utc(2011, 2, 13, 1), date.utc(2011, 2, 13, 5)), [
    date.utc(2011, 2, 13, 1),
    date.utc(2011, 2, 13, 2),
    date.utc(2011, 2, 13, 3),
    date.utc(2011, 2, 13, 4)
  ]);
  test.end();
});

tape("utcHour.range(start, stop) does not observe the end of daylight savings time", function(test) {
  test.deepEqual(time.utcHour.range(date.utc(2011, 10, 6, 0), date.utc(2011, 10, 6, 2)), [
    date.utc(2011, 10, 6, 0),
    date.utc(2011, 10, 6, 1)
  ]);
  test.end();
});

tape("utcHour.every(step) returns every stepth hour, starting with the first hour of the day", function(test) {
  test.deepEqual(time.utcHour.every(4).range(date.utc(2008, 11, 30, 12, 47), date.utc(2008, 11, 31, 13, 57)), [date.utc(2008, 11, 30, 16), date.utc(2008, 11, 30, 20), date.utc(2008, 11, 31, 0), date.utc(2008, 11, 31, 4), date.utc(2008, 11, 31, 8), date.utc(2008, 11, 31, 12)]);
  test.deepEqual(time.utcHour.every(12).range(date.utc(2008, 11, 30, 12, 47), date.utc(2008, 11, 31, 13, 57)), [date.utc(2008, 11, 31, 0), date.utc(2008, 11, 31, 12)]);
  test.end();
});
