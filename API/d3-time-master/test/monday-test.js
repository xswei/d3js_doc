var tape = require("tape"),
    time = require("../"),
    date = require("./date");

tape("timeMondays in an alias for timeMonday.range", function(test) {
  test.equal(time.timeMondays, time.timeMonday.range);
  test.end();
});

tape("timeMonday.floor(date) returns Mondays", function(test) {
  test.deepEqual(time.timeMonday.floor(date.local(2011, 00, 01, 23, 59, 59)), date.local(2010, 11, 27));
  test.deepEqual(time.timeMonday.floor(date.local(2011, 00, 02, 00, 00, 00)), date.local(2010, 11, 27));
  test.deepEqual(time.timeMonday.floor(date.local(2011, 00, 02, 00, 00, 01)), date.local(2010, 11, 27));
  test.deepEqual(time.timeMonday.floor(date.local(2011, 00, 02, 23, 59, 59)), date.local(2010, 11, 27));
  test.deepEqual(time.timeMonday.floor(date.local(2011, 00, 03, 00, 00, 00)), date.local(2011, 00, 03));
  test.deepEqual(time.timeMonday.floor(date.local(2011, 00, 03, 00, 00, 01)), date.local(2011, 00, 03));
  test.end();
});

tape("timeMonday.range(start, stop, step) returns every step Monday", function(test) {
  test.deepEqual(time.timeMonday.range(date.local(2011, 11, 01), date.local(2012, 00, 15), 2), [
    date.local(2011, 11, 05),
    date.local(2011, 11, 19),
    date.local(2012, 00, 02)
  ]);
  test.end();
});

tape("timeMonday.count(start, end) counts Mondays after start (exclusive) and before end (inclusive)", function(test) {
  //     January 2014
  // Su Mo Tu We Th Fr Sa
  //           1  2  3  4
  //  5  6  7  8  9 10 11
  // 12 13 14 15 16 17 18
  // 19 20 21 22 23 24 25
  // 26 27 28 29 30 31
  test.equal(time.timeMonday.count(date.local(2014, 00, 01), date.local(2014, 00, 05)), 0);
  test.equal(time.timeMonday.count(date.local(2014, 00, 01), date.local(2014, 00, 06)), 1);
  test.equal(time.timeMonday.count(date.local(2014, 00, 01), date.local(2014, 00, 07)), 1);
  test.equal(time.timeMonday.count(date.local(2014, 00, 01), date.local(2014, 00, 13)), 2);

  //     January 2018
  // Su Mo Tu We Th Fr Sa
  //     1  2  3  4  5  6
  //  7  8  9 10 11 12 13
  // 14 15 16 17 18 19 20
  // 21 22 23 24 25 26 27
  // 28 29 30 31
  test.equal(time.timeMonday.count(date.local(2018, 00, 01), date.local(2018, 00, 07)), 0);
  test.equal(time.timeMonday.count(date.local(2018, 00, 01), date.local(2018, 00, 08)), 1);
  test.equal(time.timeMonday.count(date.local(2018, 00, 01), date.local(2018, 00, 09)), 1);
  test.end();
});

tape("timeMonday.count(start, end) observes daylight saving", function(test) {
  test.equal(time.timeMonday.count(date.local(2011, 00, 01), date.local(2011, 02, 13, 01)), 10);
  test.equal(time.timeMonday.count(date.local(2011, 00, 01), date.local(2011, 02, 13, 03)), 10);
  test.equal(time.timeMonday.count(date.local(2011, 00, 01), date.local(2011, 02, 13, 04)), 10);
  test.equal(time.timeMonday.count(date.local(2011, 00, 01), date.local(2011, 10, 06, 00)), 44);
  test.equal(time.timeMonday.count(date.local(2011, 00, 01), date.local(2011, 10, 06, 01)), 44);
  test.equal(time.timeMonday.count(date.local(2011, 00, 01), date.local(2011, 10, 06, 02)), 44);
  test.end();
});
