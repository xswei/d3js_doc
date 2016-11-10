var tape = require("tape"),
    time = require("../"),
    date = require("./date");

tape("utcSaturdays in an alias for utcSaturday.range", function(test) {
  test.equal(time.utcSaturdays, time.utcSaturday.range);
  test.end();
});

tape("utcSaturday.floor(date) returns Saturdays", function(test) {
  test.deepEqual(time.utcSaturday.floor(date.utc(2011, 00, 06, 23, 59, 59)), date.utc(2011, 00, 01));
  test.deepEqual(time.utcSaturday.floor(date.utc(2011, 00, 07, 00, 00, 00)), date.utc(2011, 00, 01));
  test.deepEqual(time.utcSaturday.floor(date.utc(2011, 00, 07, 00, 00, 01)), date.utc(2011, 00, 01));
  test.deepEqual(time.utcSaturday.floor(date.utc(2011, 00, 07, 23, 59, 59)), date.utc(2011, 00, 01));
  test.deepEqual(time.utcSaturday.floor(date.utc(2011, 00, 08, 00, 00, 00)), date.utc(2011, 00, 08));
  test.deepEqual(time.utcSaturday.floor(date.utc(2011, 00, 08, 00, 00, 01)), date.utc(2011, 00, 08));
  test.end();
});

tape("utcSaturday.count(start, end) counts Saturdays after start (exclusive) and before end (inclusive)", function(test) {
  //       January 2012
  // Su Mo Tu We Th Fr Sa
  //  1  2  3  4  5  6  7
  //  8  9 10 11 12 13 14
  // 15 16 17 18 19 20 21
  // 22 23 24 25 26 27 28
  // 29 30 31
  test.equal(time.utcSaturday.count(date.utc(2012, 00, 01), date.utc(2012, 00, 06)), 0);
  test.equal(time.utcSaturday.count(date.utc(2012, 00, 01), date.utc(2012, 00, 07)), 1);
  test.equal(time.utcSaturday.count(date.utc(2012, 00, 01), date.utc(2012, 00, 08)), 1);
  test.equal(time.utcSaturday.count(date.utc(2012, 00, 01), date.utc(2012, 00, 14)), 2);

  //     January 2011
  // Su Mo Tu We Th Fr Sa
  //                    1
  //  2  3  4  5  6  7  8
  //  9 10 11 12 13 14 15
  // 16 17 18 19 20 21 22
  // 23 24 25 26 27 28 29
  // 30 31
  test.equal(time.utcSaturday.count(date.utc(2011, 00, 01), date.utc(2011, 00, 07)), 0);
  test.equal(time.utcSaturday.count(date.utc(2011, 00, 01), date.utc(2011, 00, 08)), 1);
  test.equal(time.utcSaturday.count(date.utc(2011, 00, 01), date.utc(2011, 00, 09)), 1);
  test.end();
});

tape("utcSaturday.count(start, end) does not observe daylight saving", function(test) {
  test.equal(time.utcSaturday.count(date.utc(2011, 00, 01), date.utc(2011, 02, 13, 01)), 10);
  test.equal(time.utcSaturday.count(date.utc(2011, 00, 01), date.utc(2011, 02, 13, 03)), 10);
  test.equal(time.utcSaturday.count(date.utc(2011, 00, 01), date.utc(2011, 02, 13, 04)), 10);
  test.equal(time.utcSaturday.count(date.utc(2011, 00, 01), date.utc(2011, 10, 06, 00)), 44);
  test.equal(time.utcSaturday.count(date.utc(2011, 00, 01), date.utc(2011, 10, 06, 01)), 44);
  test.equal(time.utcSaturday.count(date.utc(2011, 00, 01), date.utc(2011, 10, 06, 02)), 44);
  test.end();
});
