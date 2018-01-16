var tape = require("tape"),
    time = require("../"),
    date = require("./date");

tape("utcMonths in an alias for utcMonth.range", function(test) {
  test.equal(time.utcMonths, time.utcMonth.range);
  test.end();
});

tape("utcMonth.floor(date) returns months", function(test) {
  test.deepEqual(time.utcMonth.floor(date.utc(2010, 11, 31, 23)), date.utc(2010, 11, 01));
  test.deepEqual(time.utcMonth.floor(date.utc(2011, 00, 01, 00)), date.utc(2011, 00, 01));
  test.deepEqual(time.utcMonth.floor(date.utc(2011, 00, 01, 01)), date.utc(2011, 00, 01));
  test.end();
});

tape("utcMonth.floor(date) observes daylight saving", function(test) {
  test.deepEqual(time.utcMonth.floor(date.utc(2011, 02, 13, 07)), date.utc(2011, 02, 01));
  test.deepEqual(time.utcMonth.floor(date.utc(2011, 02, 13, 08)), date.utc(2011, 02, 01));
  test.deepEqual(time.utcMonth.floor(date.utc(2011, 02, 13, 09)), date.utc(2011, 02, 01));
  test.deepEqual(time.utcMonth.floor(date.utc(2011, 02, 13, 10)), date.utc(2011, 02, 01));
  test.deepEqual(time.utcMonth.floor(date.utc(2011, 10, 06, 07)), date.utc(2011, 10, 01));
  test.deepEqual(time.utcMonth.floor(date.utc(2011, 10, 06, 08)), date.utc(2011, 10, 01));
  test.deepEqual(time.utcMonth.floor(date.utc(2011, 10, 06, 09)), date.utc(2011, 10, 01));
  test.deepEqual(time.utcMonth.floor(date.utc(2011, 10, 06, 10)), date.utc(2011, 10, 01));
  test.end();
});

tape("utcMonth.floor(date) handles years in the first century", function(test) {
  test.deepEqual(time.utcMonth.floor(date.utc(0011, 10, 06, 07)), date.utc(0011, 10, 01));
  test.end();
});

tape("utcMonth.round(date) returns months", function(test) {
  test.deepEqual(time.utcMonth.round(date.utc(2010, 11, 16, 12)), date.utc(2011, 00, 01));
  test.deepEqual(time.utcMonth.round(date.utc(2010, 11, 16, 11)), date.utc(2010, 11, 01));
  test.end();
});

tape("utcMonth.round(date) observes daylight saving", function(test) {
  test.deepEqual(time.utcMonth.round(date.utc(2011, 02, 13, 07)), date.utc(2011, 02, 01));
  test.deepEqual(time.utcMonth.round(date.utc(2011, 02, 13, 08)), date.utc(2011, 02, 01));
  test.deepEqual(time.utcMonth.round(date.utc(2011, 02, 13, 09)), date.utc(2011, 02, 01));
  test.deepEqual(time.utcMonth.round(date.utc(2011, 02, 13, 20)), date.utc(2011, 02, 01));
  test.deepEqual(time.utcMonth.round(date.utc(2011, 10, 06, 07)), date.utc(2011, 10, 01));
  test.deepEqual(time.utcMonth.round(date.utc(2011, 10, 06, 08)), date.utc(2011, 10, 01));
  test.deepEqual(time.utcMonth.round(date.utc(2011, 10, 06, 09)), date.utc(2011, 10, 01));
  test.deepEqual(time.utcMonth.round(date.utc(2011, 10, 06, 20)), date.utc(2011, 10, 01));
  test.end();
});

tape("utcMonth.round(date) handles midnight for leap years", function(test) {
  test.deepEqual(time.utcMonth.round(date.utc(2012, 02, 01, 00)), date.utc(2012, 02, 01));
  test.deepEqual(time.utcMonth.round(date.utc(2012, 02, 01, 00)), date.utc(2012, 02, 01));
  test.end();
});

tape("utcMonth.ceil(date) returns months", function(test) {
  test.deepEqual(time.utcMonth.ceil(date.utc(2010, 10, 30, 23)), date.utc(2010, 11, 01));
  test.deepEqual(time.utcMonth.ceil(date.utc(2010, 11, 01, 01)), date.utc(2011, 00, 01));
  test.end();
});

tape("utcMonth.ceil(date) observes daylight saving", function(test) {
  test.deepEqual(time.utcMonth.ceil(date.utc(2011, 02, 13, 07)), date.utc(2011, 03, 01));
  test.deepEqual(time.utcMonth.ceil(date.utc(2011, 02, 13, 08)), date.utc(2011, 03, 01));
  test.deepEqual(time.utcMonth.ceil(date.utc(2011, 02, 13, 09)), date.utc(2011, 03, 01));
  test.deepEqual(time.utcMonth.ceil(date.utc(2011, 02, 13, 10)), date.utc(2011, 03, 01));
  test.deepEqual(time.utcMonth.ceil(date.utc(2011, 10, 06, 07)), date.utc(2011, 11, 01));
  test.deepEqual(time.utcMonth.ceil(date.utc(2011, 10, 06, 08)), date.utc(2011, 11, 01));
  test.deepEqual(time.utcMonth.ceil(date.utc(2011, 10, 06, 09)), date.utc(2011, 11, 01));
  test.deepEqual(time.utcMonth.ceil(date.utc(2011, 10, 06, 10)), date.utc(2011, 11, 01));
  test.end();
});

tape("utcMonth.ceil(date) handles midnight for leap years", function(test) {
  test.deepEqual(time.utcMonth.ceil(date.utc(2012, 02, 01, 00)), date.utc(2012, 02, 01));
  test.deepEqual(time.utcMonth.ceil(date.utc(2012, 02, 01, 00)), date.utc(2012, 02, 01));
  test.end();
});

tape("utcMonth.offset(date) is an alias for utcMonth.offset(date, 1)", function(test) {
  test.deepEqual(time.utcMonth.offset(date.utc(2010, 11, 31, 23, 59, 59, 999)), date.utc(2011, 00, 31, 23, 59, 59, 999));
  test.end();
});

tape("utcMonth.offset(date, step) does not modify the passed-in date", function(test) {
  var d = date.utc(2010, 11, 31, 23, 59, 59, 999);
  time.utcMonth.offset(date, +1);
  test.deepEqual(d, date.utc(2010, 11, 31, 23, 59, 59, 999));
  test.end();
});

tape("utcMonth.offset(date, step) does not round the passed-in date", function(test) {
  test.deepEqual(time.utcMonth.offset(date.utc(2010, 11, 31, 23, 59, 59, 999), +1), date.utc(2011, 00, 31, 23, 59, 59, 999));
  test.deepEqual(time.utcMonth.offset(date.utc(2010, 11, 31, 23, 59, 59, 456), -2), date.utc(2010, 09, 31, 23, 59, 59, 456));
  test.end();
});

tape("utcMonth.offset(date, step) allows step to be negative", function(test) {
  test.deepEqual(time.utcMonth.offset(date.utc(2010, 11, 31), -1), date.utc(2010, 10, 31));
  test.deepEqual(time.utcMonth.offset(date.utc(2011, 00, 01), -2), date.utc(2010, 10, 01));
  test.deepEqual(time.utcMonth.offset(date.utc(2011, 00, 01), -1), date.utc(2010, 11, 01));
  test.end();
});

tape("utcMonth.offset(date, step) allows step to be positive", function(test) {
  test.deepEqual(time.utcMonth.offset(date.utc(2010, 11, 31), +1), date.utc(2011, 00, 31));
  test.deepEqual(time.utcMonth.offset(date.utc(2010, 11, 30), +2), date.utc(2011, 01, 30));
  test.deepEqual(time.utcMonth.offset(date.utc(2010, 11, 30), +1), date.utc(2011, 00, 30));
  test.end();
});

tape("utcMonth.offset(date, step) allows step to be zero", function(test) {
  test.deepEqual(time.utcMonth.offset(date.utc(2010, 11, 31, 23, 59, 59, 999), 0), date.utc(2010, 11, 31, 23, 59, 59, 999));
  test.deepEqual(time.utcMonth.offset(date.utc(2010, 11, 31, 23, 59, 58, 000), 0), date.utc(2010, 11, 31, 23, 59, 58, 000));
  test.end();
});

tape("utcMonth.range(start, stop) returns months between start (inclusive) and stop (exclusive)", function(test) {
  test.deepEqual(time.utcMonth.range(date.utc(2011, 11, 01), date.utc(2012, 05, 01)), [
    date.utc(2011, 11, 01),
    date.utc(2012, 00, 01),
    date.utc(2012, 01, 01),
    date.utc(2012, 02, 01),
    date.utc(2012, 03, 01),
    date.utc(2012, 04, 01)
  ]);
  test.end();
});

tape("utcMonth.range(start, stop) returns months", function(test) {
  test.deepEqual(time.utcMonth.range(date.utc(2011, 10, 04, 02), date.utc(2012, 04, 10, 13)), [
    date.utc(2011, 11, 01),
    date.utc(2012, 00, 01),
    date.utc(2012, 01, 01),
    date.utc(2012, 02, 01),
    date.utc(2012, 03, 01),
    date.utc(2012, 04, 01)
  ]);
  test.end();
});

tape("utcMonth.range(start, stop) coerces start and stop to dates", function(test) {
  test.deepEqual(time.utcMonth.range(+date.utc(2011, 10, 04), +date.utc(2012, 01, 07)), [
    date.utc(2011, 11, 01),
    date.utc(2012, 00, 01),
    date.utc(2012, 01, 01)
  ]);
  test.end();
});

tape("utcMonth.range(start, stop) returns the empty array for invalid dates", function(test) {
  test.deepEqual(time.utcMonth.range(new Date(NaN), Infinity), []);
  test.end();
});

tape("utcMonth.range(start, stop) returns the empty array if start >= stop", function(test) {
  test.deepEqual(time.utcMonth.range(date.utc(2011, 11, 10), date.utc(2011, 10, 04)), []);
  test.deepEqual(time.utcMonth.range(date.utc(2011, 10, 01), date.utc(2011, 10, 01)), []);
  test.end();
});

tape("utcMonth.range(start, stop) returns months", function(test) {
  test.deepEqual(time.utcMonth.range(date.utc(2010, 10, 31), date.utc(2011, 2, 1)), [
    date.utc(2010, 11, 1),
    date.utc(2011, 0, 1),
    date.utc(2011, 1, 1)
  ]);
  test.end();
});

tape("utcMonth.range(start, stop) has an inclusive lower bound", function(test) {
  test.deepEqual(time.utcMonth.range(date.utc(2010, 10, 31), date.utc(2011, 2, 1))[0], date.utc(2010, 11, 1));
  test.end();
});

tape("utcMonth.range(start, stop) has an exclusive upper bound", function(test) {
  test.deepEqual(time.utcMonth.range(date.utc(2010, 10, 31), date.utc(2011, 2, 1))[2], date.utc(2011, 1, 1));
  test.end();
});

tape("utcMonth.range(start, stop) can skip months", function(test) {
  test.deepEqual(time.utcMonth.range(date.utc(2011, 1, 1), date.utc(2012, 1, 1), 3), [
    date.utc(2011, 1, 1),
    date.utc(2011, 4, 1),
    date.utc(2011, 7, 1),
    date.utc(2011, 10, 1)
  ]);
  test.end();
});

tape("utcMonth.range(start, stop) observes start of daylight savings time", function(test) {
  test.deepEqual(time.utcMonth.range(date.utc(2011, 0, 1), date.utc(2011, 4, 1)), [
    date.utc(2011, 0, 1),
    date.utc(2011, 1, 1),
    date.utc(2011, 2, 1),
    date.utc(2011, 3, 1)
  ]);
  test.end();
});

tape("utcMonth.range(start, stop) observes end of daylight savings time", function(test) {
  test.deepEqual(time.utcMonth.range(date.utc(2011, 9, 1), date.utc(2012, 1, 1)), [
    date.utc(2011, 9, 1),
    date.utc(2011, 10, 1),
    date.utc(2011, 11, 1),
    date.utc(2012, 0, 1)
  ]);
  test.end();
});

tape("utcMonth.count(start, end) counts months after start (exclusive) and before end (inclusive)", function(test) {
  test.equal(time.utcMonth.count(date.utc(2011, 00, 01), date.utc(2011, 04, 01)), 4);
  test.equal(time.utcMonth.count(date.utc(2011, 00, 01), date.utc(2011, 03, 30)), 3);
  test.equal(time.utcMonth.count(date.utc(2010, 11, 31), date.utc(2011, 03, 30)), 4);
  test.equal(time.utcMonth.count(date.utc(2010, 11, 31), date.utc(2011, 04, 01)), 5);
  test.equal(time.utcMonth.count(date.utc(2009, 11, 31), date.utc(2012, 04, 01)), 29);
  test.equal(time.utcMonth.count(date.utc(2012, 04, 01), date.utc(2009, 11, 31)), -29);
  test.end();
});

tape("utcMonth.every(step) returns every stepth month, starting with the first month of the year", function(test) {
  test.deepEqual(time.utcMonth.every(3).range(date.utc(2008, 11, 3), date.utc(2010, 6, 5)), [date.utc(2009, 0, 1), date.utc(2009, 3, 1), date.utc(2009, 6, 1), date.utc(2009, 9, 1), date.utc(2010, 0, 1), date.utc(2010, 3, 1), date.utc(2010, 6, 1)]);
  test.end();
});
