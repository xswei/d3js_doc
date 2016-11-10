var tape = require("tape"),
    time = require("../"),
    date = require("./date");

tape("utcWeek.floor(date) returns sundays", function(test) {
  test.deepEqual(time.utcWeek.floor(date.utc(2010, 11, 31, 23, 59, 59)), date.utc(2010, 11, 26));
  test.deepEqual(time.utcWeek.floor(date.utc(2011, 00, 01, 00, 00, 00)), date.utc(2010, 11, 26));
  test.deepEqual(time.utcWeek.floor(date.utc(2011, 00, 01, 00, 00, 01)), date.utc(2010, 11, 26));
  test.deepEqual(time.utcWeek.floor(date.utc(2011, 00, 01, 23, 59, 59)), date.utc(2010, 11, 26));
  test.deepEqual(time.utcWeek.floor(date.utc(2011, 00, 02, 00, 00, 00)), date.utc(2011, 00, 02));
  test.deepEqual(time.utcWeek.floor(date.utc(2011, 00, 02, 00, 00, 01)), date.utc(2011, 00, 02));
  test.end();
});

tape("utcWeek.floor(date) observes the start of daylight savings time", function(test) {
  test.deepEqual(time.utcWeek.floor(date.utc(2011, 02, 13, 01)), date.utc(2011, 02, 13));
  test.end();
});

tape("utcWeek.floor(date) observes the end of the daylight savings time", function(test) {
  test.deepEqual(time.utcWeek.floor(date.utc(2011, 10, 06, 01)), date.utc(2011, 10, 06));
  test.end();
});

tape("utcWeek.floor(date) correctly handles years in the first century", function(test) {
  test.deepEqual(time.utcWeek.floor(date.utc(0011, 10, 06, 07)), date.utc(0011, 10, 01));
  test.end();
});

tape("utcWeek.ceil(date) returns sundays", function(test) {
  test.deepEqual(time.utcWeek.ceil(date.utc(2010, 11, 31, 23, 59, 59)), date.utc(2011, 00, 02));
  test.deepEqual(time.utcWeek.ceil(date.utc(2011, 00, 01, 00, 00, 00)), date.utc(2011, 00, 02));
  test.deepEqual(time.utcWeek.ceil(date.utc(2011, 00, 01, 00, 00, 01)), date.utc(2011, 00, 02));
  test.deepEqual(time.utcWeek.ceil(date.utc(2011, 00, 01, 23, 59, 59)), date.utc(2011, 00, 02));
  test.deepEqual(time.utcWeek.ceil(date.utc(2011, 00, 02, 00, 00, 00)), date.utc(2011, 00, 02));
  test.deepEqual(time.utcWeek.ceil(date.utc(2011, 00, 02, 00, 00, 01)), date.utc(2011, 00, 09));
  test.end();
});

tape("utcWeek.ceil(date) does not observe the start of daylight savings time", function(test) {
  test.deepEqual(time.utcWeek.ceil(date.utc(2011, 02, 13, 01)), date.utc(2011, 02, 20));
  test.end();
});

tape("utcWeek.ceil(date) does not observe the end of the daylight savings time", function(test) {
  test.deepEqual(time.utcWeek.ceil(date.utc(2011, 10, 06, 01)), date.utc(2011, 10, 13));
  test.end();
});

tape("utcWeek.offset(date, step) does not modify the passed-in date", function(test) {
  var d = date.utc(2010, 11, 31, 23, 59, 59, 999);
  time.utcWeek.offset(d, +1);
  test.deepEqual(d, date.utc(2010, 11, 31, 23, 59, 59, 999));
  test.end();
});

tape("utcWeek.offset(date, step) does not round the passed-in-date", function(test) {
  test.deepEqual(time.utcWeek.offset(date.utc(2010, 11, 31, 23, 59, 59, 999), +1), date.utc(2011, 00, 07, 23, 59, 59, 999));
  test.deepEqual(time.utcWeek.offset(date.utc(2010, 11, 31, 23, 59, 59, 456), -2), date.utc(2010, 11, 17, 23, 59, 59, 456));
  test.end();
});

tape("utcWeek.offset(date, step) allows negative offsets", function(test) {
  test.deepEqual(time.utcWeek.offset(date.utc(2010, 11, 01), -1), date.utc(2010, 10, 24));
  test.deepEqual(time.utcWeek.offset(date.utc(2011, 00, 01), -2), date.utc(2010, 11, 18));
  test.deepEqual(time.utcWeek.offset(date.utc(2011, 00, 01), -1), date.utc(2010, 11, 25));
  test.end();
});

tape("utcWeek.offset(date, step) allows positive offsets", function(test) {
  test.deepEqual(time.utcWeek.offset(date.utc(2010, 10, 24), +1), date.utc(2010, 11, 01));
  test.deepEqual(time.utcWeek.offset(date.utc(2010, 11, 18), +2), date.utc(2011, 00, 01));
  test.deepEqual(time.utcWeek.offset(date.utc(2010, 11, 25), +1), date.utc(2011, 00, 01));
  test.end();
});

tape("utcWeek.offset(date, step) allows zero offset", function(test) {
  test.deepEqual(time.utcWeek.offset(date.utc(2010, 11, 31, 23, 59, 59, 999), 0), date.utc(2010, 11, 31, 23, 59, 59, 999));
  test.deepEqual(time.utcWeek.offset(date.utc(2010, 11, 31, 23, 59, 58, 000), 0), date.utc(2010, 11, 31, 23, 59, 58, 000));
  test.end();
});

tape("utcWeek.range(start, stop) returns sundays", function(test) {
  test.deepEqual(time.utcWeek.range(date.utc(2010, 11, 21), date.utc(2011, 0, 12)), [
    date.utc(2010, 11, 26),
    date.utc(2011, 0, 2),
    date.utc(2011, 0, 9)
  ]);
  test.end();
});

tape("utcWeek.range(start, stop) has an inclusive lower bound", function(test) {
  test.deepEqual(time.utcWeek.range(date.utc(2010, 11, 21), date.utc(2011, 0, 12))[0], date.utc(2010, 11, 26));
  test.end();
});

tape("utcWeek.range(start, stop) has an exclusive upper bound", function(test) {
  test.deepEqual(time.utcWeek.range(date.utc(2010, 11, 21), date.utc(2011, 0, 12))[2], date.utc(2011, 0, 9));
  test.end();
});

tape("utcWeek.range(start, stop) can skip weeks", function(test) {
  test.deepEqual(time.utcWeek.range(date.utc(2011, 0, 1), date.utc(2011, 3, 1), 4), [
    date.utc(2011, 0, 2),
    date.utc(2011, 0, 30),
    date.utc(2011, 1, 27),
    date.utc(2011, 2, 27)
  ]);
  test.end();
});

tape("utcWeek.range(start, stop) does not observe start of daylight savings time", function(test) {
  test.deepEqual(time.utcWeek.range(date.utc(2011, 2, 1), date.utc(2011, 2, 28)), [
    date.utc(2011, 2, 6),
    date.utc(2011, 2, 13),
    date.utc(2011, 2, 20),
    date.utc(2011, 2, 27)
  ]);
  test.end();
});

tape("utcWeek.range(start, stop) does not observe end of daylight savings time", function(test) {
  test.deepEqual(time.utcWeek.range(date.utc(2011, 10, 1), date.utc(2011, 10, 30)), [
    date.utc(2011, 10, 6),
    date.utc(2011, 10, 13),
    date.utc(2011, 10, 20),
    date.utc(2011, 10, 27)
  ]);
  test.end();
});

tape("utcWeek is an alias for utcSunday", function(test) {
  test.equal(time.utcWeek, time.utcSunday);
  test.end();
});

tape("utcWeek.every(step) returns every stepth Sunday, starting with the first Sunday of the month", function(test) {
  test.deepEqual(time.utcWeek.every(2).range(date.utc(2008, 11, 3), date.utc(2009, 1, 5)), [date.utc(2008, 11, 7), date.utc(2008, 11, 21), date.utc(2009, 0, 4), date.utc(2009, 0, 18), date.utc(2009, 1, 1)]);
  test.end();
});
