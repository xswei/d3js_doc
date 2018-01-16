var tape = require("tape"),
    time = require("../"),
    date = require("./date");

tape("timeDays in an alias for timeDay.range", function(test) {
  test.equal(time.timeDays, time.timeDay.range);
  test.end();
});

tape("timeDay is an alias for timeDay.floor", function(test) {
  test.equal(time.timeDay, time.timeDay.floor);
  test.end();
});

tape("timeDay.floor(date) returns days", function(test) {
  test.deepEqual(time.timeDay.floor(date.local(2010, 11, 31, 23)), date.local(2010, 11, 31));
  test.deepEqual(time.timeDay.floor(date.local(2011, 00, 01, 00)), date.local(2011, 00, 01));
  test.deepEqual(time.timeDay.floor(date.local(2011, 00, 01, 01)), date.local(2011, 00, 01));
  test.end();
});

tape("timeDay.floor(date) observes daylight saving", function(test) {
  test.deepEqual(time.timeDay.floor(date.utc(2011, 02, 13, 07)), date.local(2011, 02, 12));
  test.deepEqual(time.timeDay.floor(date.utc(2011, 02, 13, 08)), date.local(2011, 02, 13));
  test.deepEqual(time.timeDay.floor(date.utc(2011, 02, 13, 09)), date.local(2011, 02, 13));
  test.deepEqual(time.timeDay.floor(date.utc(2011, 02, 13, 10)), date.local(2011, 02, 13));
  test.deepEqual(time.timeDay.floor(date.utc(2011, 10, 06, 07)), date.local(2011, 10, 06));
  test.deepEqual(time.timeDay.floor(date.utc(2011, 10, 06, 08)), date.local(2011, 10, 06));
  test.deepEqual(time.timeDay.floor(date.utc(2011, 10, 06, 09)), date.local(2011, 10, 06));
  test.deepEqual(time.timeDay.floor(date.utc(2011, 10, 06, 10)), date.local(2011, 10, 06));
  test.end();
});

tape("timeDay.floor(date) handles years in the first century", function(test) {
  test.deepEqual(time.timeDay.floor(date.local(0011, 10, 06, 07)), date.local(0011, 10, 06));
  test.end();
});

tape("timeDay.round(date) returns days", function(test) {
  test.deepEqual(time.timeDay.round(date.local(2010, 11, 30, 13)), date.local(2010, 11, 31));
  test.deepEqual(time.timeDay.round(date.local(2010, 11, 30, 11)), date.local(2010, 11, 30));
  test.end();
});

tape("timeDay.round(date) observes daylight saving", function(test) {
  test.deepEqual(time.timeDay.round(date.utc(2011, 02, 13, 07)), date.local(2011, 02, 13));
  test.deepEqual(time.timeDay.round(date.utc(2011, 02, 13, 08)), date.local(2011, 02, 13));
  test.deepEqual(time.timeDay.round(date.utc(2011, 02, 13, 09)), date.local(2011, 02, 13));
  test.deepEqual(time.timeDay.round(date.utc(2011, 02, 13, 20)), date.local(2011, 02, 14));
  test.deepEqual(time.timeDay.round(date.utc(2011, 10, 06, 07)), date.local(2011, 10, 06));
  test.deepEqual(time.timeDay.round(date.utc(2011, 10, 06, 08)), date.local(2011, 10, 06));
  test.deepEqual(time.timeDay.round(date.utc(2011, 10, 06, 09)), date.local(2011, 10, 06));
  test.deepEqual(time.timeDay.round(date.utc(2011, 10, 06, 20)), date.local(2011, 10, 07));
  test.end();
});

tape("timeDay.round(date) handles midnight in leap years", function(test) {
  test.deepEqual(time.timeDay.round(date.utc(2012, 02, 01, 00)), date.local(2012, 02, 01));
  test.deepEqual(time.timeDay.round(date.utc(2012, 02, 01, 00)), date.local(2012, 02, 01));
  test.end();
});

tape("timeDay.ceil(date) returns days", function(test) {
  test.deepEqual(time.timeDay.ceil(date.local(2010, 11, 30, 23)), date.local(2010, 11, 31));
  test.deepEqual(time.timeDay.ceil(date.local(2010, 11, 31, 00)), date.local(2010, 11, 31));
  test.deepEqual(time.timeDay.ceil(date.local(2010, 11, 31, 01)), date.local(2011, 00, 01));
  test.end();
});

tape("timeDay.ceil(date) observes start of daylight saving", function(test) {
  test.deepEqual(time.timeDay.ceil(date.utc(2011, 02, 13, 07)), date.local(2011, 02, 13));
  test.deepEqual(time.timeDay.ceil(date.utc(2011, 02, 13, 08)), date.local(2011, 02, 13));
  test.deepEqual(time.timeDay.ceil(date.utc(2011, 02, 13, 09)), date.local(2011, 02, 14));
  test.deepEqual(time.timeDay.ceil(date.utc(2011, 02, 13, 10)), date.local(2011, 02, 14));
  test.end();
});

tape("timeDay.ceil(date) observes end of daylight saving", function(test) {
  test.deepEqual(time.timeDay.ceil(date.utc(2011, 10, 06, 07)), date.local(2011, 10, 06));
  test.deepEqual(time.timeDay.ceil(date.utc(2011, 10, 06, 08)), date.local(2011, 10, 07));
  test.deepEqual(time.timeDay.ceil(date.utc(2011, 10, 06, 09)), date.local(2011, 10, 07));
  test.deepEqual(time.timeDay.ceil(date.utc(2011, 10, 06, 10)), date.local(2011, 10, 07));
  test.end();
});

tape("timeDay.ceil(date) handles midnight for leap years", function(test) {
  test.deepEqual(time.timeDay.ceil(date.utc(2012, 02, 01, 00)), date.local(2012, 02, 01));
  test.deepEqual(time.timeDay.ceil(date.utc(2012, 02, 01, 00)), date.local(2012, 02, 01));
  test.end();
});

tape("timeDay.offset(date) is an alias for timeDay.offset(date, 1)", function(test) {
  test.deepEqual(time.timeDay.offset(date.local(2010, 11, 31, 23, 59, 59, 999)), date.local(2011, 00, 01, 23, 59, 59, 999));
  test.end();
});

tape("timeDay.offset(date, step) does not modify the passed-in date", function(test) {
  var d = date.local(2010, 11, 31, 23, 59, 59, 999);
  time.timeDay.offset(date, +1);
  test.deepEqual(d, date.local(2010, 11, 31, 23, 59, 59, 999));
  test.end();
});

tape("timeDay.offset(date, step) does not round the passed-in date", function(test) {
  test.deepEqual(time.timeDay.offset(date.local(2010, 11, 31, 23, 59, 59, 999), +1), date.local(2011, 00, 01, 23, 59, 59, 999));
  test.deepEqual(time.timeDay.offset(date.local(2010, 11, 31, 23, 59, 59, 456), -2), date.local(2010, 11, 29, 23, 59, 59, 456));
  test.end();
});

tape("timeDay.offset(date, step) allows step to be negative", function(test) {
  test.deepEqual(time.timeDay.offset(date.local(2010, 11, 31), -1), date.local(2010, 11, 30));
  test.deepEqual(time.timeDay.offset(date.local(2011, 00, 01), -2), date.local(2010, 11, 30));
  test.deepEqual(time.timeDay.offset(date.local(2011, 00, 01), -1), date.local(2010, 11, 31));
  test.end();
});

tape("timeDay.offset(date, step) allows step to be positive", function(test) {
  test.deepEqual(time.timeDay.offset(date.local(2010, 11, 31), +1), date.local(2011, 00, 01));
  test.deepEqual(time.timeDay.offset(date.local(2010, 11, 30), +2), date.local(2011, 00, 01));
  test.deepEqual(time.timeDay.offset(date.local(2010, 11, 30), +1), date.local(2010, 11, 31));
  test.end();
});

tape("timeDay.offset(date, step) allows step to be zero", function(test) {
  test.deepEqual(time.timeDay.offset(date.local(2010, 11, 31, 23, 59, 59, 999), 0), date.local(2010, 11, 31, 23, 59, 59, 999));
  test.deepEqual(time.timeDay.offset(date.local(2010, 11, 31, 23, 59, 58, 000), 0), date.local(2010, 11, 31, 23, 59, 58, 000));
  test.end();
});

tape("timeDay.range(start, stop) returns days between start (inclusive) and stop (exclusive)", function(test) {
  test.deepEqual(time.timeDay.range(date.local(2011, 10, 04), date.local(2011, 10, 10)), [
    date.local(2011, 10, 04),
    date.local(2011, 10, 05),
    date.local(2011, 10, 06),
    date.local(2011, 10, 07),
    date.local(2011, 10, 08),
    date.local(2011, 10, 09)
  ]);
  test.end();
});

tape("timeDay.range(start, stop) returns days", function(test) {
  test.deepEqual(time.timeDay.range(date.local(2011, 10, 04, 02), date.local(2011, 10, 10, 13)), [
    date.local(2011, 10, 05),
    date.local(2011, 10, 06),
    date.local(2011, 10, 07),
    date.local(2011, 10, 08),
    date.local(2011, 10, 09),
    date.local(2011, 10, 10)
  ]);
  test.end();
});

tape("timeDay.range(start, stop) coerces start and stop to dates", function(test) {
  test.deepEqual(time.timeDay.range(+date.local(2011, 10, 04), +date.local(2011, 10, 07)), [
    date.local(2011, 10, 04),
    date.local(2011, 10, 05),
    date.local(2011, 10, 06)
  ]);
  test.end();
});

tape("timeDay.range(start, stop) returns the empty array for invalid dates", function(test) {
  test.deepEqual(time.timeDay.range(new Date(NaN), Infinity), []);
  test.end();
});

tape("timeDay.range(start, stop) returns the empty array if start >= stop", function(test) {
  test.deepEqual(time.timeDay.range(date.local(2011, 10, 10), date.local(2011, 10, 04)), []);
  test.deepEqual(time.timeDay.range(date.local(2011, 10, 10), date.local(2011, 10, 10)), []);
  test.end();
});

tape("timeDay.range(start, stop, step) returns every step day", function(test) {
  test.deepEqual(time.timeDay.range(date.local(2011, 10, 04, 02), date.local(2011, 10, 14, 13), 3), [
    date.local(2011, 10, 05),
    date.local(2011, 10, 08),
    date.local(2011, 10, 11),
    date.local(2011, 10, 14)
  ]);
  test.end();
});

tape("timeDay.range(start, stop, step) returns the empty array if step is zero, negative or NaN", function(test) {
  test.deepEqual(time.timeDay.range(date.local(2011, 00, 01, 00), date.local(2011, 04, 09, 00), 0), []);
  test.deepEqual(time.timeDay.range(date.local(2011, 00, 01, 00), date.local(2011, 04, 09, 00), -1), []);
  test.deepEqual(time.timeDay.range(date.local(2011, 00, 01, 00), date.local(2011, 04, 09, 00), 0.5), []);
  test.deepEqual(time.timeDay.range(date.local(2011, 00, 01, 00), date.local(2011, 04, 09, 00), NaN), []);
  test.end();
});

tape("timeDay.count(start, end) counts days after start (exclusive) and before end (inclusive)", function(test) {
  test.equal(time.timeDay.count(date.local(2011, 00, 01, 00), date.local(2011, 04, 09, 00)), 128);
  test.equal(time.timeDay.count(date.local(2011, 00, 01, 01), date.local(2011, 04, 09, 00)), 128);
  test.equal(time.timeDay.count(date.local(2010, 11, 31, 23), date.local(2011, 04, 09, 00)), 129);
  test.equal(time.timeDay.count(date.local(2011, 00, 01, 00), date.local(2011, 04, 08, 23)), 127);
  test.equal(time.timeDay.count(date.local(2011, 00, 01, 00), date.local(2011, 04, 09, 01)), 128);
  test.end();
});

tape("timeDay.count(start, end) observes daylight saving", function(test) {
  test.equal(time.timeDay.count(date.local(2011, 00, 01), date.local(2011, 02, 13, 01)), 71);
  test.equal(time.timeDay.count(date.local(2011, 00, 01), date.local(2011, 02, 13, 03)), 71);
  test.equal(time.timeDay.count(date.local(2011, 00, 01), date.local(2011, 02, 13, 04)), 71);
  test.equal(time.timeDay.count(date.local(2011, 00, 01), date.local(2011, 10, 06, 00)), 309);
  test.equal(time.timeDay.count(date.local(2011, 00, 01), date.local(2011, 10, 06, 01)), 309);
  test.equal(time.timeDay.count(date.local(2011, 00, 01), date.local(2011, 10, 06, 02)), 309);
  test.end();
});

tape("timeDay.count(start, stop) does not exhibit floating-point rounding error", function(test) {
  var date = new Date(2011, 4, 9);
  test.equal(time.timeDay.count(time.timeYear(date), date), 128);
  test.end();
});

tape("timeDay.count(start, end) returns 364 or 365 for a full year", function(test) {
  test.equal(time.timeDay.count(date.local(1999, 00, 01), date.local(1999, 11, 31)), 364);
  test.equal(time.timeDay.count(date.local(2000, 00, 01), date.local(2000, 11, 31)), 365); // leap year
  test.equal(time.timeDay.count(date.local(2001, 00, 01), date.local(2001, 11, 31)), 364);
  test.equal(time.timeDay.count(date.local(2002, 00, 01), date.local(2002, 11, 31)), 364);
  test.equal(time.timeDay.count(date.local(2003, 00, 01), date.local(2003, 11, 31)), 364);
  test.equal(time.timeDay.count(date.local(2004, 00, 01), date.local(2004, 11, 31)), 365); // leap year
  test.equal(time.timeDay.count(date.local(2005, 00, 01), date.local(2005, 11, 31)), 364);
  test.equal(time.timeDay.count(date.local(2006, 00, 01), date.local(2006, 11, 31)), 364);
  test.equal(time.timeDay.count(date.local(2007, 00, 01), date.local(2007, 11, 31)), 364);
  test.equal(time.timeDay.count(date.local(2008, 00, 01), date.local(2008, 11, 31)), 365); // leap year
  test.equal(time.timeDay.count(date.local(2009, 00, 01), date.local(2009, 11, 31)), 364);
  test.equal(time.timeDay.count(date.local(2010, 00, 01), date.local(2010, 11, 31)), 364);
  test.equal(time.timeDay.count(date.local(2011, 00, 01), date.local(2011, 11, 31)), 364);
  test.end();
});

tape("timeDay.every(step) returns every stepth day, starting with the first day of the month", function(test) {
  test.deepEqual(time.timeDay.every(3).range(date.local(2008, 11, 30, 0, 12), date.local(2009, 0, 5, 23, 48)), [date.local(2008, 11, 31), date.local(2009, 0, 1), date.local(2009, 0, 4)]);
  test.deepEqual(time.timeDay.every(5).range(date.local(2008, 11, 30, 0, 12), date.local(2009, 0, 6, 23, 48)), [date.local(2008, 11, 31), date.local(2009, 0, 1), date.local(2009, 0, 6)]);
  test.deepEqual(time.timeDay.every(7).range(date.local(2008, 11, 30, 0, 12), date.local(2009, 0, 8, 23, 48)), [date.local(2009, 0, 1), date.local(2009, 0, 8)]);
  test.end();
});
