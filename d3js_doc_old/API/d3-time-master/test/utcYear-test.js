var tape = require("tape"),
    time = require("../"),
    date = require("./date");

tape("utcYear.floor(date) returns years", function(test) {
  test.deepEqual(time.utcYear.floor(date.utc(2010, 11, 31, 23, 59, 59)), date.utc(2010, 00, 01));
  test.deepEqual(time.utcYear.floor(date.utc(2011, 00, 01, 00, 00, 00)), date.utc(2011, 00, 01));
  test.deepEqual(time.utcYear.floor(date.utc(2011, 00, 01, 00, 00, 01)), date.utc(2011, 00, 01));
  test.end();
});

tape("utcYear.floor(date) does not modify the specified date", function(test) {
  var d = date.utc(2010, 11, 31, 23, 59, 59);
  test.deepEqual(time.utcYear.floor(d), date.utc(2010, 00, 01));
  test.deepEqual(d, date.utc(2010, 11, 31, 23, 59, 59));
  test.end();
});

tape("utcYear.floor(date) correctly handles years in the first century", function(test) {
  test.deepEqual(time.utcYear.floor(date.utc(0011, 10, 06, 07)), date.utc(0011, 00, 01));
  test.end();
});

tape("utcYear.ceil(date) returns years", function(test) {
  test.deepEqual(time.utcYear.ceil(date.utc(2010, 11, 31, 23, 59, 59)), date.utc(2011, 00, 01));
  test.deepEqual(time.utcYear.ceil(date.utc(2011, 00, 01, 00, 00, 00)), date.utc(2011, 00, 01));
  test.deepEqual(time.utcYear.ceil(date.utc(2011, 00, 01, 00, 00, 01)), date.utc(2012, 00, 01));
  test.end();
});

tape("utcYear.offset(date, count) does not modify the passed-in date", function(test) {
  var d = date.utc(2010, 11, 31, 23, 59, 59, 999);
  time.utcYear.offset(d, +1);
  test.deepEqual(d, date.utc(2010, 11, 31, 23, 59, 59, 999));
  test.end();
});

tape("utcYear.offset(date, count) does not round the passed-in-date", function(test) {
  test.deepEqual(time.utcYear.offset(date.utc(2010, 11, 31, 23, 59, 59, 999), +1), date.utc(2011, 11, 31, 23, 59, 59, 999));
  test.deepEqual(time.utcYear.offset(date.utc(2010, 11, 31, 23, 59, 59, 456), -2), date.utc(2008, 11, 31, 23, 59, 59, 456));
  test.end();
});

tape("utcYear.offset(date, count) allows negative offsets", function(test) {
  test.deepEqual(time.utcYear.offset(date.utc(2010, 11, 01), -1), date.utc(2009, 11, 01));
  test.deepEqual(time.utcYear.offset(date.utc(2011, 00, 01), -2), date.utc(2009, 00, 01));
  test.deepEqual(time.utcYear.offset(date.utc(2011, 00, 01), -1), date.utc(2010, 00, 01));
  test.end();
});

tape("utcYear.offset(date, count) allows positive offsets", function(test) {
  test.deepEqual(time.utcYear.offset(date.utc(2009, 11, 01), +1), date.utc(2010, 11, 01));
  test.deepEqual(time.utcYear.offset(date.utc(2009, 00, 01), +2), date.utc(2011, 00, 01));
  test.deepEqual(time.utcYear.offset(date.utc(2010, 00, 01), +1), date.utc(2011, 00, 01));
  test.end();
});

tape("utcYear.offset(date, count) allows zero offset", function(test) {
  test.deepEqual(time.utcYear.offset(date.utc(2010, 11, 31, 23, 59, 59, 999), 0), date.utc(2010, 11, 31, 23, 59, 59, 999));
  test.deepEqual(time.utcYear.offset(date.utc(2010, 11, 31, 23, 59, 58, 000), 0), date.utc(2010, 11, 31, 23, 59, 58, 000));
  test.end();
});

tape("utcYear.every(step) returns every stepth year, starting with year zero", function(test) {
  test.deepEqual(time.utcYear.every(5).range(date.utc(2008), date.utc(2023)), [date.utc(2010), date.utc(2015), date.utc(2020)]);
  test.end();
});

tape("utcYear.range(start, stop) returns years", function(test) {
  test.deepEqual(time.utcYear.range(date.utc(2010, 0, 1), date.utc(2013, 0, 1)), [
    date.utc(2010, 0, 1),
    date.utc(2011, 0, 1),
    date.utc(2012, 0, 1)
  ]);
  test.end();
});

tape("utcYear.range(start, stop) has an inclusive lower bound", function(test) {
  test.deepEqual(time.utcYear.range(date.utc(2010, 0, 1), date.utc(2013, 0, 1))[0], date.utc(2010, 0, 1));
  test.end();
});

tape("utcYear.range(start, stop) has an exclusive upper bound", function(test) {
  test.deepEqual(time.utcYear.range(date.utc(2010, 0, 1), date.utc(2013, 0, 1))[2], date.utc(2012, 0, 1));
  test.end();
});

tape("utcYear.range(start, stop, step) can skip years", function(test) {
  test.deepEqual(time.utcYear.range(date.utc(2009, 0, 1), date.utc(2029, 0, 1), 5), [
    date.utc(2009, 0, 1),
    date.utc(2014, 0, 1),
    date.utc(2019, 0, 1),
    date.utc(2024, 0, 1)
  ]);
  test.end();
});
