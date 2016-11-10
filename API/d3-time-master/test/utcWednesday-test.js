var tape = require("tape"),
    time = require("../"),
    date = require("./date");

tape("utcWednesdays in an alias for utcWednesday.range", function(test) {
  test.equal(time.utcWednesdays, time.utcWednesday.range);
  test.end();
});

tape("utcWednesday.floor(date) returns Wednesdays", function(test) {
  test.deepEqual(time.utcWednesday.floor(date.utc(2011, 00, 03, 23, 59, 59)), date.utc(2010, 11, 29));
  test.deepEqual(time.utcWednesday.floor(date.utc(2011, 00, 04, 00, 00, 00)), date.utc(2010, 11, 29));
  test.deepEqual(time.utcWednesday.floor(date.utc(2011, 00, 04, 00, 00, 01)), date.utc(2010, 11, 29));
  test.deepEqual(time.utcWednesday.floor(date.utc(2011, 00, 04, 23, 59, 59)), date.utc(2010, 11, 29));
  test.deepEqual(time.utcWednesday.floor(date.utc(2011, 00, 05, 00, 00, 00)), date.utc(2011, 00, 05));
  test.deepEqual(time.utcWednesday.floor(date.utc(2011, 00, 05, 00, 00, 01)), date.utc(2011, 00, 05));
  test.end();
});

tape("utcWednesday.count(start, end) counts Wednesdays after start (exclusive) and before end (inclusive)", function(test) {
  //       January 2012
  // Su Mo Tu We Th Fr Sa
  //  1  2  3  4  5  6  7
  //  8  9 10 11 12 13 14
  // 15 16 17 18 19 20 21
  // 22 23 24 25 26 27 28
  // 29 30 31
  test.equal(time.utcWednesday.count(date.utc(2012, 00, 01), date.utc(2012, 00, 03)), 0);
  test.equal(time.utcWednesday.count(date.utc(2012, 00, 01), date.utc(2012, 00, 04)), 1);
  test.equal(time.utcWednesday.count(date.utc(2012, 00, 01), date.utc(2012, 00, 05)), 1);
  test.equal(time.utcWednesday.count(date.utc(2012, 00, 01), date.utc(2012, 00, 11)), 2);

  //     January 2014
  // Su Mo Tu We Th Fr Sa
  //           1  2  3  4
  //  5  6  7  8  9 10 11
  // 12 13 14 15 16 17 18
  // 19 20 21 22 23 24 25
  // 26 27 28 29 30 31
  test.equal(time.utcWednesday.count(date.utc(2014, 00, 01), date.utc(2014, 00, 07)), 0);
  test.equal(time.utcWednesday.count(date.utc(2014, 00, 01), date.utc(2014, 00, 08)), 1);
  test.equal(time.utcWednesday.count(date.utc(2014, 00, 01), date.utc(2014, 00, 09)), 1);
  test.end();
});

tape("utcWednesday.count(start, end) does not observe daylight saving", function(test) {
  test.equal(time.utcWednesday.count(date.utc(2011, 00, 01), date.utc(2011, 02, 13, 01)), 10);
  test.equal(time.utcWednesday.count(date.utc(2011, 00, 01), date.utc(2011, 02, 13, 03)), 10);
  test.equal(time.utcWednesday.count(date.utc(2011, 00, 01), date.utc(2011, 02, 13, 04)), 10);
  test.equal(time.utcWednesday.count(date.utc(2011, 00, 01), date.utc(2011, 10, 06, 00)), 44);
  test.equal(time.utcWednesday.count(date.utc(2011, 00, 01), date.utc(2011, 10, 06, 01)), 44);
  test.equal(time.utcWednesday.count(date.utc(2011, 00, 01), date.utc(2011, 10, 06, 02)), 44);
  test.end();
});
