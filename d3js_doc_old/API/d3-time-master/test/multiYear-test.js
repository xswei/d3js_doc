var tape = require("tape"),
    time = require("../"),
    date = require("./date");

tape("timeYear.every(n).floor(date) returns integer multiples of n years", function(test) {
  test.deepEqual(time.timeYear.every(10).floor(date.local(2009, 11, 31, 23, 59, 59)), date.local(2000, 00, 01));
  test.deepEqual(time.timeYear.every(10).floor(date.local(2010, 00, 01, 00, 00, 00)), date.local(2010, 00, 01));
  test.deepEqual(time.timeYear.every(10).floor(date.local(2010, 00, 01, 00, 00, 01)), date.local(2010, 00, 01));
  test.end();
});

tape("timeYear.every(n).ceil(date) returns integer multiples of n years", function(test) {
  test.deepEqual(time.timeYear.every(100).ceil(date.local(1999, 11, 31, 23, 59, 59)), date.local(2000, 00, 01));
  test.deepEqual(time.timeYear.every(100).ceil(date.local(2000, 00, 01, 00, 00, 00)), date.local(2000, 00, 01));
  test.deepEqual(time.timeYear.every(100).ceil(date.local(2000, 00, 01, 00, 00, 01)), date.local(2100, 00, 01));
  test.end();
});

tape("timeYear.every(n).offset(date, count) does not modify the passed-in date", function(test) {
  var d = date.local(2010, 11, 31, 23, 59, 59, 999);
  time.timeYear.every(5).offset(d, +1);
  test.deepEqual(d, date.local(2010, 11, 31, 23, 59, 59, 999));
  test.end();
});

tape("timeYear.every(n).offset(date, count) does not round the passed-in-date", function(test) {
  test.deepEqual(time.timeYear.every(5).offset(date.local(2010, 11, 31, 23, 59, 59, 999), +1), date.local(2015, 11, 31, 23, 59, 59, 999));
  test.deepEqual(time.timeYear.every(5).offset(date.local(2010, 11, 31, 23, 59, 59, 456), -2), date.local(2000, 11, 31, 23, 59, 59, 456));
  test.end();
});

tape("timeYear.every(n) does not define interval.count or interval.every", function(test) {
  var decade = time.timeYear.every(10);
  test.equal(decade.count, undefined);
  test.equal(decade.every, undefined);
  test.end();
});

tape("timeYear.every(n).range(start, stop) returns multiples of n years", function(test) {
  test.deepEqual(time.timeYear.every(10).range(date.local(2010, 0, 1), date.local(2031, 0, 1)), [
    date.local(2010, 0, 1),
    date.local(2020, 0, 1),
    date.local(2030, 0, 1)
  ]);
  test.end();
});
