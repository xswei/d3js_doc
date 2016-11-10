var tape = require("tape"),
    time = require("../"),
    date = require("./date");

tape("utcDays in an alias for utcDay.range", function(test) {
  test.equal(time.utcDays, time.utcDay.range);
  test.end();
});

tape("utcDay.floor(date) returns days", function(test) {
  test.deepEqual(time.utcDay.floor(date.utc(2010, 11, 31, 23)), date.utc(2010, 11, 31));
  test.deepEqual(time.utcDay.floor(date.utc(2011, 00, 01, 00)), date.utc(2011, 00, 01));
  test.deepEqual(time.utcDay.floor(date.utc(2011, 00, 01, 01)), date.utc(2011, 00, 01));
  test.end();
});

tape("utcDay.floor(date) does not observe daylight saving", function(test) {
  test.deepEqual(time.utcDay.floor(date.utc(2011, 02, 13, 07)), date.utc(2011, 02, 13));
  test.deepEqual(time.utcDay.floor(date.utc(2011, 02, 13, 08)), date.utc(2011, 02, 13));
  test.deepEqual(time.utcDay.floor(date.utc(2011, 02, 13, 09)), date.utc(2011, 02, 13));
  test.deepEqual(time.utcDay.floor(date.utc(2011, 02, 13, 10)), date.utc(2011, 02, 13));
  test.deepEqual(time.utcDay.floor(date.utc(2011, 10, 06, 05)), date.utc(2011, 10, 06));
  test.deepEqual(time.utcDay.floor(date.utc(2011, 10, 06, 06)), date.utc(2011, 10, 06));
  test.deepEqual(time.utcDay.floor(date.utc(2011, 10, 06, 07)), date.utc(2011, 10, 06));
  test.deepEqual(time.utcDay.floor(date.utc(2011, 10, 06, 08)), date.utc(2011, 10, 06));
  test.end();
});

tape("utcDay.round(date) returns days", function(test) {
  test.deepEqual(time.utcDay.round(date.utc(2010, 11, 30, 13)), date.utc(2010, 11, 31));
  test.deepEqual(time.utcDay.round(date.utc(2010, 11, 30, 11)), date.utc(2010, 11, 30));
  test.end();
});

tape("utcDay.ceil(date) returns days", function(test) {
  test.deepEqual(time.utcDay.ceil(date.utc(2010, 11, 30, 23)), date.utc(2010, 11, 31));
  test.deepEqual(time.utcDay.ceil(date.utc(2010, 11, 31, 00)), date.utc(2010, 11, 31));
  test.deepEqual(time.utcDay.ceil(date.utc(2010, 11, 31, 01)), date.utc(2011, 00, 01));
  test.end();
});

tape("utcDay.ceil(date) does not observe daylight saving", function(test) {
  test.deepEqual(time.utcDay.ceil(date.utc(2011, 02, 13, 07)), date.utc(2011, 02, 14));
  test.deepEqual(time.utcDay.ceil(date.utc(2011, 02, 13, 08)), date.utc(2011, 02, 14));
  test.deepEqual(time.utcDay.ceil(date.utc(2011, 02, 13, 09)), date.utc(2011, 02, 14));
  test.deepEqual(time.utcDay.ceil(date.utc(2011, 02, 13, 10)), date.utc(2011, 02, 14));
  test.deepEqual(time.utcDay.ceil(date.utc(2011, 10, 06, 05)), date.utc(2011, 10, 07));
  test.deepEqual(time.utcDay.ceil(date.utc(2011, 10, 06, 06)), date.utc(2011, 10, 07));
  test.deepEqual(time.utcDay.ceil(date.utc(2011, 10, 06, 07)), date.utc(2011, 10, 07));
  test.deepEqual(time.utcDay.ceil(date.utc(2011, 10, 06, 08)), date.utc(2011, 10, 07));
  test.end();
});

tape("utcDay.offset(date) is an alias for utcDay.offset(date, 1)", function(test) {
  test.deepEqual(time.utcDay.offset(date.utc(2010, 11, 31, 23, 59, 59, 999)), date.utc(2011, 00, 01, 23, 59, 59, 999));
  test.end();
});

tape("utcDay.offset(date, step) does not modify the passed-in date", function(test) {
  var d = date.utc(2010, 11, 31, 23, 59, 59, 999);
  time.utcDay.offset(d, +1);
  test.deepEqual(d, date.utc(2010, 11, 31, 23, 59, 59, 999));
  test.end();
});

tape("utcDay.offset(date, step) does not round the passed-in date", function(test) {
  test.deepEqual(time.utcDay.offset(date.utc(2010, 11, 31, 23, 59, 59, 999), +1), date.utc(2011, 00, 01, 23, 59, 59, 999));
  test.deepEqual(time.utcDay.offset(date.utc(2010, 11, 31, 23, 59, 59, 456), -2), date.utc(2010, 11, 29, 23, 59, 59, 456));
  test.end();
});

tape("utcDay.offset(date, step) allows step to be negative", function(test) {
  test.deepEqual(time.utcDay.offset(date.utc(2010, 11, 31), -1), date.utc(2010, 11, 30));
  test.deepEqual(time.utcDay.offset(date.utc(2011, 00, 01), -2), date.utc(2010, 11, 30));
  test.deepEqual(time.utcDay.offset(date.utc(2011, 00, 01), -1), date.utc(2010, 11, 31));
  test.end();
});

tape("utcDay.offset(date, step) allows step to be positive", function(test) {
  test.deepEqual(time.utcDay.offset(date.utc(2010, 11, 31), +1), date.utc(2011, 00, 01));
  test.deepEqual(time.utcDay.offset(date.utc(2010, 11, 30), +2), date.utc(2011, 00, 01));
  test.deepEqual(time.utcDay.offset(date.utc(2010, 11, 30), +1), date.utc(2010, 11, 31));
  test.end();
});

tape("utcDay.offset(date, step) allows step to be zero", function(test) {
  test.deepEqual(time.utcDay.offset(date.utc(2010, 11, 31, 23, 59, 59, 999), 0), date.utc(2010, 11, 31, 23, 59, 59, 999));
  test.deepEqual(time.utcDay.offset(date.utc(2010, 11, 31, 23, 59, 58, 000), 0), date.utc(2010, 11, 31, 23, 59, 58, 000));
  test.end();
});

tape("utcDay.count(start, end) counts days after start (exclusive) and before end (inclusive)", function(test) {
  test.equal(time.utcDay.count(date.utc(2011, 00, 01, 00), date.utc(2011, 04, 09, 00)), 128);
  test.equal(time.utcDay.count(date.utc(2011, 00, 01, 01), date.utc(2011, 04, 09, 00)), 128);
  test.equal(time.utcDay.count(date.utc(2010, 11, 31, 23), date.utc(2011, 04, 09, 00)), 129);
  test.equal(time.utcDay.count(date.utc(2011, 00, 01, 00), date.utc(2011, 04, 08, 23)), 127);
  test.equal(time.utcDay.count(date.utc(2011, 00, 01, 00), date.utc(2011, 04, 09, 01)), 128);
  test.end();
});

tape("utcDay.count(start, end) does not observe daylight saving", function(test) {
  test.equal(time.utcDay.count(date.utc(2011, 00, 01), date.utc(2011, 02, 13, 01)), 71);
  test.equal(time.utcDay.count(date.utc(2011, 00, 01), date.utc(2011, 02, 13, 03)), 71);
  test.equal(time.utcDay.count(date.utc(2011, 00, 01), date.utc(2011, 02, 13, 04)), 71);
  test.equal(time.utcDay.count(date.utc(2011, 00, 01), date.utc(2011, 10, 06, 00)), 309);
  test.equal(time.utcDay.count(date.utc(2011, 00, 01), date.utc(2011, 10, 06, 01)), 309);
  test.equal(time.utcDay.count(date.utc(2011, 00, 01), date.utc(2011, 10, 06, 02)), 309);
  test.end();
});

tape("utcDay.count(start, end) returns 364 or 365 for a full year", function(test) {
  test.equal(time.utcDay.count(date.utc(1999, 00, 01), date.utc(1999, 11, 31)), 364);
  test.equal(time.utcDay.count(date.utc(2000, 00, 01), date.utc(2000, 11, 31)), 365); // leap year
  test.equal(time.utcDay.count(date.utc(2001, 00, 01), date.utc(2001, 11, 31)), 364);
  test.equal(time.utcDay.count(date.utc(2002, 00, 01), date.utc(2002, 11, 31)), 364);
  test.equal(time.utcDay.count(date.utc(2003, 00, 01), date.utc(2003, 11, 31)), 364);
  test.equal(time.utcDay.count(date.utc(2004, 00, 01), date.utc(2004, 11, 31)), 365); // leap year
  test.equal(time.utcDay.count(date.utc(2005, 00, 01), date.utc(2005, 11, 31)), 364);
  test.equal(time.utcDay.count(date.utc(2006, 00, 01), date.utc(2006, 11, 31)), 364);
  test.equal(time.utcDay.count(date.utc(2007, 00, 01), date.utc(2007, 11, 31)), 364);
  test.equal(time.utcDay.count(date.utc(2008, 00, 01), date.utc(2008, 11, 31)), 365); // leap year
  test.equal(time.utcDay.count(date.utc(2009, 00, 01), date.utc(2009, 11, 31)), 364);
  test.equal(time.utcDay.count(date.utc(2010, 00, 01), date.utc(2010, 11, 31)), 364);
  test.equal(time.utcDay.count(date.utc(2011, 00, 01), date.utc(2011, 11, 31)), 364);
  test.end();
});

tape("utcDay.every(step) returns every stepth day, starting with the first day of the month", function(test) {
  test.deepEqual(time.utcDay.every(3).range(date.utc(2008, 11, 30, 0, 12), date.utc(2009, 0, 5, 23, 48)), [date.utc(2008, 11, 31), date.utc(2009, 0, 1), date.utc(2009, 0, 4)]);
  test.deepEqual(time.utcDay.every(5).range(date.utc(2008, 11, 30, 0, 12), date.utc(2009, 0, 6, 23, 48)), [date.utc(2008, 11, 31), date.utc(2009, 0, 1), date.utc(2009, 0, 6)]);
  test.deepEqual(time.utcDay.every(7).range(date.utc(2008, 11, 30, 0, 12), date.utc(2009, 0, 8, 23, 48)), [date.utc(2009, 0, 1), date.utc(2009, 0, 8)]);
  test.end();
});
