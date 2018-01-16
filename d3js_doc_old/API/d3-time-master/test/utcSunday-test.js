var tape = require("tape"),
    time = require("../"),
    date = require("./date");

tape("utcSundays in an alias for utcSunday.range", function(test) {
  test.equal(time.utcSundays, time.utcSunday.range);
  test.end();
});

tape("utcSunday.floor(date) returns Sundays", function(test) {
  test.deepEqual(time.utcSunday.floor(date.utc(2010, 11, 31, 23, 59, 59)), date.utc(2010, 11, 26));
  test.deepEqual(time.utcSunday.floor(date.utc(2011, 00, 01, 00, 00, 00)), date.utc(2010, 11, 26));
  test.deepEqual(time.utcSunday.floor(date.utc(2011, 00, 01, 00, 00, 01)), date.utc(2010, 11, 26));
  test.deepEqual(time.utcSunday.floor(date.utc(2011, 00, 01, 23, 59, 59)), date.utc(2010, 11, 26));
  test.deepEqual(time.utcSunday.floor(date.utc(2011, 00, 02, 00, 00, 00)), date.utc(2011, 00, 02));
  test.deepEqual(time.utcSunday.floor(date.utc(2011, 00, 02, 00, 00, 01)), date.utc(2011, 00, 02));
  test.end();
});

tape("utcSunday.floor(date) observes daylight saving", function(test) {
  test.deepEqual(time.utcSunday.floor(date.utc(2011, 02, 13, 01)), date.utc(2011, 02, 13));
  test.deepEqual(time.utcSunday.floor(date.utc(2011, 10, 06, 01)), date.utc(2011, 10, 06));
  test.end();
});

tape("utcSunday.floor(date) handles years in the first century", function(test) {
  test.deepEqual(time.utcSunday.floor(date.utc(0011, 10, 06, 07)), date.utc(0011, 10, 01));
  test.end();
});

tape("utcSunday.ceil(date) returns Sundays", function(test) {
  test.deepEqual(time.utcSunday.ceil(date.utc(2010, 11, 31, 23, 59, 59)), date.utc(2011, 00, 02));
  test.deepEqual(time.utcSunday.ceil(date.utc(2011, 00, 01, 00, 00, 00)), date.utc(2011, 00, 02));
  test.deepEqual(time.utcSunday.ceil(date.utc(2011, 00, 01, 00, 00, 01)), date.utc(2011, 00, 02));
  test.deepEqual(time.utcSunday.ceil(date.utc(2011, 00, 01, 23, 59, 59)), date.utc(2011, 00, 02));
  test.deepEqual(time.utcSunday.ceil(date.utc(2011, 00, 02, 00, 00, 00)), date.utc(2011, 00, 02));
  test.deepEqual(time.utcSunday.ceil(date.utc(2011, 00, 02, 00, 00, 01)), date.utc(2011, 00, 09));
  test.end();
});

tape("utcSunday.ceil(date) observes daylight saving", function(test) {
  test.deepEqual(time.utcSunday.ceil(date.utc(2011, 02, 13, 01)), date.utc(2011, 02, 20));
  test.deepEqual(time.utcSunday.ceil(date.utc(2011, 10, 06, 01)), date.utc(2011, 10, 13));
  test.end();
});

tape("utcSunday.offset(date) is an alias for utcSunday.offset(date, 1)", function(test) {
  test.deepEqual(time.utcSunday.offset(date.utc(2010, 11, 31, 23, 59, 59, 999)), date.utc(2011, 00, 07, 23, 59, 59, 999));
  test.end();
});

tape("utcSunday.offset(date, step) does not modify the passed-in date", function(test) {
  var d = date.utc(2010, 11, 31, 23, 59, 59, 999);
  time.utcSunday.offset(d, +1);
  test.deepEqual(d, date.utc(2010, 11, 31, 23, 59, 59, 999));
  test.end();
});

tape("utcSunday.offset(date, step) does not round the passed-in date", function(test) {
  test.deepEqual(time.utcSunday.offset(date.utc(2010, 11, 31, 23, 59, 59, 999), +1), date.utc(2011, 00, 07, 23, 59, 59, 999));
  test.deepEqual(time.utcSunday.offset(date.utc(2010, 11, 31, 23, 59, 59, 456), -2), date.utc(2010, 11, 17, 23, 59, 59, 456));
  test.end();
});

tape("utcSunday.offset(date, step) allows step to be negative", function(test) {
  test.deepEqual(time.utcSunday.offset(date.utc(2010, 11, 01), -1), date.utc(2010, 10, 24));
  test.deepEqual(time.utcSunday.offset(date.utc(2011, 00, 01), -2), date.utc(2010, 11, 18));
  test.deepEqual(time.utcSunday.offset(date.utc(2011, 00, 01), -1), date.utc(2010, 11, 25));
  test.end();
});

tape("utcSunday.offset(date, step) allows step to be positive", function(test) {
  test.deepEqual(time.utcSunday.offset(date.utc(2010, 10, 24), +1), date.utc(2010, 11, 01));
  test.deepEqual(time.utcSunday.offset(date.utc(2010, 11, 18), +2), date.utc(2011, 00, 01));
  test.deepEqual(time.utcSunday.offset(date.utc(2010, 11, 25), +1), date.utc(2011, 00, 01));
  test.end();
});

tape("utcSunday.offset(date, step) allows step to be zero", function(test) {
  test.deepEqual(time.utcSunday.offset(date.utc(2010, 11, 31, 23, 59, 59, 999), 0), date.utc(2010, 11, 31, 23, 59, 59, 999));
  test.deepEqual(time.utcSunday.offset(date.utc(2010, 11, 31, 23, 59, 58, 000), 0), date.utc(2010, 11, 31, 23, 59, 58, 000));
  test.end();
});

tape("utcSunday.range(start, stop) returns Sundays between start (inclusive) and stop (exclusive)", function(test) {
  test.deepEqual(time.utcSunday.range(date.utc(2011, 11, 01), date.utc(2012, 00, 15)), [
    date.utc(2011, 11, 04),
    date.utc(2011, 11, 11),
    date.utc(2011, 11, 18),
    date.utc(2011, 11, 25),
    date.utc(2012, 00, 01),
    date.utc(2012, 00, 08)
  ]);
  test.end();
});

tape("utcSunday.range(start, stop) returns Sundays", function(test) {
  test.deepEqual(time.utcSunday.range(date.utc(2011, 11, 01, 12, 23), date.utc(2012, 00, 14, 12, 23)), [
    date.utc(2011, 11, 04),
    date.utc(2011, 11, 11),
    date.utc(2011, 11, 18),
    date.utc(2011, 11, 25),
    date.utc(2012, 00, 01),
    date.utc(2012, 00, 08)
  ]);
  test.end();
});

tape("utcSunday.range(start, stop) coerces start and stop to dates", function(test) {
  test.deepEqual(time.utcSunday.range(+date.utc(2011, 11, 01), +date.utc(2012, 00, 15)), [
    date.utc(2011, 11, 04),
    date.utc(2011, 11, 11),
    date.utc(2011, 11, 18),
    date.utc(2011, 11, 25),
    date.utc(2012, 00, 01),
    date.utc(2012, 00, 08)
  ]);
  test.end();
});

tape("utcSunday.range(start, stop) returns the empty array for invalid dates", function(test) {
  test.deepEqual(time.utcSunday.range(new Date(NaN), Infinity), []);
  test.end();
});

tape("utcSunday.range(start, stop) returns the empty array if start >= stop", function(test) {
  test.deepEqual(time.utcSunday.range(date.utc(2011, 11, 10), date.utc(2011, 10, 04)), []);
  test.deepEqual(time.utcSunday.range(date.utc(2011, 10, 01), date.utc(2011, 10, 01)), []);
  test.end();
});

tape("utcSunday.range(start, stop, step) returns every step Sunday", function(test) {
  test.deepEqual(time.utcSunday.range(date.utc(2011, 11, 01), date.utc(2012, 00, 15), 2), [
    date.utc(2011, 11, 04),
    date.utc(2011, 11, 18),
    date.utc(2012, 00, 01)
  ]);
  test.end();
});

tape("utcSunday.count(start, end) counts Sundays after start (exclusive) and before end (inclusive)", function(test) {
  //     January 2014
  // Su Mo Tu We Th Fr Sa
  //           1  2  3  4
  //  5  6  7  8  9 10 11
  // 12 13 14 15 16 17 18
  // 19 20 21 22 23 24 25
  // 26 27 28 29 30 31
  test.equal(time.utcSunday.count(date.utc(2014, 00, 01), date.utc(2014, 00, 04)), 0);
  test.equal(time.utcSunday.count(date.utc(2014, 00, 01), date.utc(2014, 00, 05)), 1);
  test.equal(time.utcSunday.count(date.utc(2014, 00, 01), date.utc(2014, 00, 06)), 1);
  test.equal(time.utcSunday.count(date.utc(2014, 00, 01), date.utc(2014, 00, 12)), 2);

  //       January 2012
  // Su Mo Tu We Th Fr Sa
  //  1  2  3  4  5  6  7
  //  8  9 10 11 12 13 14
  // 15 16 17 18 19 20 21
  // 22 23 24 25 26 27 28
  // 29 30 31
  test.equal(time.utcSunday.count(date.utc(2012, 00, 01), date.utc(2012, 00, 07)), 0);
  test.equal(time.utcSunday.count(date.utc(2012, 00, 01), date.utc(2012, 00, 08)), 1);
  test.equal(time.utcSunday.count(date.utc(2012, 00, 01), date.utc(2012, 00, 09)), 1);
  test.end();
});

tape("utcSunday.count(start, end) does not observe daylight saving", function(test) {
  test.equal(time.utcSunday.count(date.utc(2011, 00, 01), date.utc(2011, 02, 13, 01)), 11);
  test.equal(time.utcSunday.count(date.utc(2011, 00, 01), date.utc(2011, 02, 13, 03)), 11);
  test.equal(time.utcSunday.count(date.utc(2011, 00, 01), date.utc(2011, 02, 13, 04)), 11);
  test.equal(time.utcSunday.count(date.utc(2011, 00, 01), date.utc(2011, 10, 06, 00)), 45);
  test.equal(time.utcSunday.count(date.utc(2011, 00, 01), date.utc(2011, 10, 06, 01)), 45);
  test.equal(time.utcSunday.count(date.utc(2011, 00, 01), date.utc(2011, 10, 06, 02)), 45);
  test.end();
});
