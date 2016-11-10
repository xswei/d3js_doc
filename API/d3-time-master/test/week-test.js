var tape = require("tape"),
    time = require("../"),
    date = require("./date");

tape("timeWeek.floor(date) returns sundays", function(test) {
  test.deepEqual(time.timeWeek.floor(date.local(2010, 11, 31, 23, 59, 59)), date.local(2010, 11, 26));
  test.deepEqual(time.timeWeek.floor(date.local(2011, 00, 01, 00, 00, 00)), date.local(2010, 11, 26));
  test.deepEqual(time.timeWeek.floor(date.local(2011, 00, 01, 00, 00, 01)), date.local(2010, 11, 26));
  test.deepEqual(time.timeWeek.floor(date.local(2011, 00, 01, 23, 59, 59)), date.local(2010, 11, 26));
  test.deepEqual(time.timeWeek.floor(date.local(2011, 00, 02, 00, 00, 00)), date.local(2011, 00, 02));
  test.deepEqual(time.timeWeek.floor(date.local(2011, 00, 02, 00, 00, 01)), date.local(2011, 00, 02));
  test.end();
});

tape("timeWeek.floor(date) observes the start of daylight savings time", function(test) {
  test.deepEqual(time.timeWeek.floor(date.local(2011, 02, 13, 01)), date.local(2011, 02, 13));
  test.end();
});

tape("timeWeek.floor(date) observes the end of the daylight savings time", function(test) {
  test.deepEqual(time.timeWeek.floor(date.local(2011, 10, 06, 01)), date.local(2011, 10, 06));
  test.end();
});

tape("timeWeek.floor(date) correctly handles years in the first century", function(test) {
  test.deepEqual(time.timeWeek.floor(date.local(0011, 10, 06, 07)), date.local(0011, 10, 01));
  test.end();
});

tape("timeWeek.ceil(date) returns sundays", function(test) {
  test.deepEqual(time.timeWeek.ceil(date.local(2010, 11, 31, 23, 59, 59)), date.local(2011, 00, 02));
  test.deepEqual(time.timeWeek.ceil(date.local(2011, 00, 01, 00, 00, 00)), date.local(2011, 00, 02));
  test.deepEqual(time.timeWeek.ceil(date.local(2011, 00, 01, 00, 00, 01)), date.local(2011, 00, 02));
  test.deepEqual(time.timeWeek.ceil(date.local(2011, 00, 01, 23, 59, 59)), date.local(2011, 00, 02));
  test.deepEqual(time.timeWeek.ceil(date.local(2011, 00, 02, 00, 00, 00)), date.local(2011, 00, 02));
  test.deepEqual(time.timeWeek.ceil(date.local(2011, 00, 02, 00, 00, 01)), date.local(2011, 00, 09));
  test.end();
});

tape("timeWeek.ceil(date) observes the start of daylight savings time", function(test) {
  test.deepEqual(time.timeWeek.ceil(date.local(2011, 02, 13, 01)), date.local(2011, 02, 20));
  test.end();
});

tape("timeWeek.ceil(date) observes the end of the daylight savings time", function(test) {
  test.deepEqual(time.timeWeek.ceil(date.local(2011, 10, 06, 01)), date.local(2011, 10, 13));
  test.end();
});

tape("timeWeek.offset(date, step) does not modify the passed-in date", function(test) {
  var d = date.local(2010, 11, 31, 23, 59, 59, 999);
  time.timeWeek.offset(d, +1);
  test.deepEqual(d, date.local(2010, 11, 31, 23, 59, 59, 999));
  test.end();
});

tape("timeWeek.offset(date, step) does not round the passed-in-date", function(test) {
  test.deepEqual(time.timeWeek.offset(date.local(2010, 11, 31, 23, 59, 59, 999), +1), date.local(2011, 00, 07, 23, 59, 59, 999));
  test.deepEqual(time.timeWeek.offset(date.local(2010, 11, 31, 23, 59, 59, 456), -2), date.local(2010, 11, 17, 23, 59, 59, 456));
  test.end();
});

tape("timeWeek.offset(date, step) allows negative offsets", function(test) {
  test.deepEqual(time.timeWeek.offset(date.local(2010, 11, 01), -1), date.local(2010, 10, 24));
  test.deepEqual(time.timeWeek.offset(date.local(2011, 00, 01), -2), date.local(2010, 11, 18));
  test.deepEqual(time.timeWeek.offset(date.local(2011, 00, 01), -1), date.local(2010, 11, 25));
  test.end();
});

tape("timeWeek.offset(date, step) allows positive offsets", function(test) {
  test.deepEqual(time.timeWeek.offset(date.local(2010, 10, 24), +1), date.local(2010, 11, 01));
  test.deepEqual(time.timeWeek.offset(date.local(2010, 11, 18), +2), date.local(2011, 00, 01));
  test.deepEqual(time.timeWeek.offset(date.local(2010, 11, 25), +1), date.local(2011, 00, 01));
  test.end();
});

tape("timeWeek.offset(date, step) allows zero offset", function(test) {
  test.deepEqual(time.timeWeek.offset(date.local(2010, 11, 31, 23, 59, 59, 999), 0), date.local(2010, 11, 31, 23, 59, 59, 999));
  test.deepEqual(time.timeWeek.offset(date.local(2010, 11, 31, 23, 59, 58, 000), 0), date.local(2010, 11, 31, 23, 59, 58, 000));
  test.end();
});

tape("timeWeek.range(start, stop) returns sundays", function(test) {
  test.deepEqual(time.timeWeek.range(date.local(2010, 11, 21), date.local(2011, 0, 12)), [
    date.local(2010, 11, 26),
    date.local(2011, 0, 2),
    date.local(2011, 0, 9)
  ]);
  test.end();
});

tape("timeWeek.range(start, stop) has an inclusive lower bound", function(test) {
  test.deepEqual(time.timeWeek.range(date.local(2010, 11, 21), date.local(2011, 0, 12))[0], date.local(2010, 11, 26));
  test.end();
});

tape("timeWeek.range(start, stop) has an exclusive upper bound", function(test) {
  test.deepEqual(time.timeWeek.range(date.local(2010, 11, 21), date.local(2011, 0, 12))[2], date.local(2011, 0, 9));
  test.end();
});

tape("timeWeek.range(start, stop) can skip weeks", function(test) {
  test.deepEqual(time.timeWeek.range(date.local(2011, 0, 1), date.local(2011, 3, 1), 4), [
    date.local(2011, 0, 2),
    date.local(2011, 0, 30),
    date.local(2011, 1, 27),
    date.local(2011, 2, 27)
  ]);
  test.end();
});

tape("timeWeek.range(start, stop) observes start of daylight savings time", function(test) {
  test.deepEqual(time.timeWeek.range(date.local(2011, 2, 1), date.local(2011, 2, 28)), [
    date.local(2011, 2, 6),
    date.local(2011, 2, 13),
    date.local(2011, 2, 20),
    date.local(2011, 2, 27)
  ]);
  test.end();
});

tape("timeWeek.range(start, stop) observes end of daylight savings time", function(test) {
  test.deepEqual(time.timeWeek.range(date.local(2011, 10, 1), date.local(2011, 10, 30)), [
    date.local(2011, 10, 6),
    date.local(2011, 10, 13),
    date.local(2011, 10, 20),
    date.local(2011, 10, 27)
  ]);
  test.end();
});

tape("timeWeek is an alias for timeSunday", function(test) {
  test.equal(time.timeWeek, time.timeSunday);
  test.end();
});

tape("timeWeek.every(step) returns every stepth Sunday, starting with the first Sunday of the month", function(test) {
  test.deepEqual(time.timeWeek.every(2).range(date.local(2008, 11, 3), date.local(2009, 1, 5)), [date.local(2008, 11, 7), date.local(2008, 11, 21), date.local(2009, 0, 4), date.local(2009, 0, 18), date.local(2009, 1, 1)]);
  test.end();
});
