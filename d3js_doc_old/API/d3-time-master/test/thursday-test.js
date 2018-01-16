var tape = require("tape"),
    time = require("../"),
    date = require("./date");

tape("timeThursdays in an alias for timeThursday.range", function(test) {
  test.equal(time.timeThursdays, time.timeThursday.range);
  test.end();
});

tape("timeThursday.floor(date) returns Thursdays", function(test) {
  test.deepEqual(time.timeThursday.floor(date.local(2011, 00, 04, 23, 59, 59)), date.local(2010, 11, 30));
  test.deepEqual(time.timeThursday.floor(date.local(2011, 00, 05, 00, 00, 00)), date.local(2010, 11, 30));
  test.deepEqual(time.timeThursday.floor(date.local(2011, 00, 05, 00, 00, 01)), date.local(2010, 11, 30));
  test.deepEqual(time.timeThursday.floor(date.local(2011, 00, 05, 23, 59, 59)), date.local(2010, 11, 30));
  test.deepEqual(time.timeThursday.floor(date.local(2011, 00, 06, 00, 00, 00)), date.local(2011, 00, 06));
  test.deepEqual(time.timeThursday.floor(date.local(2011, 00, 06, 00, 00, 01)), date.local(2011, 00, 06));
  test.end();
});

tape("timeThursday.count(start, end) counts Thursdays after start (exclusive) and before end (inclusive)", function(test) {
  //       January 2012
  // Su Mo Tu We Th Fr Sa
  //  1  2  3  4  5  6  7
  //  8  9 10 11 12 13 14
  // 15 16 17 18 19 20 21
  // 22 23 24 25 26 27 28
  // 29 30 31
  test.equal(time.timeThursday.count(date.local(2012, 00, 01), date.local(2012, 00, 04)), 0);
  test.equal(time.timeThursday.count(date.local(2012, 00, 01), date.local(2012, 00, 05)), 1);
  test.equal(time.timeThursday.count(date.local(2012, 00, 01), date.local(2012, 00, 06)), 1);
  test.equal(time.timeThursday.count(date.local(2012, 00, 01), date.local(2012, 00, 12)), 2);

  //     January 2015
  // Su Mo Tu We Th Fr Sa
  //              1  2  3
  //  4  5  6  7  8  9 10
  // 11 12 13 14 15 16 17
  // 18 19 20 21 22 23 24
  // 25 26 27 28 29 30 31
  test.equal(time.timeThursday.count(date.local(2015, 00, 01), date.local(2015, 00, 07)), 0);
  test.equal(time.timeThursday.count(date.local(2015, 00, 01), date.local(2015, 00, 08)), 1);
  test.equal(time.timeThursday.count(date.local(2015, 00, 01), date.local(2015, 00, 09)), 1);
  test.end();
});

tape("timeThursday.count(start, end) observes daylight saving", function(test) {
  test.equal(time.timeThursday.count(date.local(2011, 00, 01), date.local(2011, 02, 13, 01)), 10);
  test.equal(time.timeThursday.count(date.local(2011, 00, 01), date.local(2011, 02, 13, 03)), 10);
  test.equal(time.timeThursday.count(date.local(2011, 00, 01), date.local(2011, 02, 13, 04)), 10);
  test.equal(time.timeThursday.count(date.local(2011, 00, 01), date.local(2011, 10, 06, 00)), 44);
  test.equal(time.timeThursday.count(date.local(2011, 00, 01), date.local(2011, 10, 06, 01)), 44);
  test.equal(time.timeThursday.count(date.local(2011, 00, 01), date.local(2011, 10, 06, 02)), 44);
  test.end();
});
