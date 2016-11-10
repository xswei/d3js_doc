var tape = require("tape"),
    time = require("../"),
    date = require("./date");

tape("utcYear.every(n).floor(date) returns integer multiples of n years", function(test) {
  test.deepEqual(time.utcYear.every(10).floor(date.utc(2009, 11, 31, 23, 59, 59)), date.utc(2000, 00, 01));
  test.deepEqual(time.utcYear.every(10).floor(date.utc(2010, 00, 01, 00, 00, 00)), date.utc(2010, 00, 01));
  test.deepEqual(time.utcYear.every(10).floor(date.utc(2010, 00, 01, 00, 00, 01)), date.utc(2010, 00, 01));
  test.end();
});

tape("utcYear.every(n).ceil(date) returns integer multiples of n years", function(test) {
  test.deepEqual(time.utcYear.every(100).ceil(date.utc(1999, 11, 31, 23, 59, 59)), date.utc(2000, 00, 01));
  test.deepEqual(time.utcYear.every(100).ceil(date.utc(2000, 00, 01, 00, 00, 00)), date.utc(2000, 00, 01));
  test.deepEqual(time.utcYear.every(100).ceil(date.utc(2000, 00, 01, 00, 00, 01)), date.utc(2100, 00, 01));
  test.end();
});

tape("utcYear.every(n).offset(date, count) does not modify the passed-in date", function(test) {
  var d = date.utc(2010, 11, 31, 23, 59, 59, 999);
  time.utcYear.every(5).offset(d, +1);
  test.deepEqual(d, date.utc(2010, 11, 31, 23, 59, 59, 999));
  test.end();
});

tape("utcYear.every(n).offset(date, count) does not round the passed-in-date", function(test) {
  test.deepEqual(time.utcYear.every(5).offset(date.utc(2010, 11, 31, 23, 59, 59, 999), +1), date.utc(2015, 11, 31, 23, 59, 59, 999));
  test.deepEqual(time.utcYear.every(5).offset(date.utc(2010, 11, 31, 23, 59, 59, 456), -2), date.utc(2000, 11, 31, 23, 59, 59, 456));
  test.end();
});

tape("utcYear.every(n) does not define interval.count or interval.every", function(test) {
  var decade = time.utcYear.every(10);
  test.equal(decade.count, undefined);
  test.equal(decade.every, undefined);
  test.end();
});

tape("utcYear.every(n).range(start, stop) returns multiples of n years", function(test) {
  test.deepEqual(time.utcYear.every(10).range(date.utc(2010, 0, 1), date.utc(2031, 0, 1)), [
    date.utc(2010, 0, 1),
    date.utc(2020, 0, 1),
    date.utc(2030, 0, 1)
  ]);
  test.end();
});
