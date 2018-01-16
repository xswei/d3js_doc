var tape = require("tape"),
    timeFormat = require("../"),
    date = require("./date");

tape("utcParse(\"\")(date) parses abbreviated weekday and numeric date", function(test) {
  var p = timeFormat.utcParse("%a %m/%d/%Y");
  test.deepEqual(p("Sun 01/01/1990"), date.utc(1990, 0, 1));
  test.deepEqual(p("Wed 02/03/1991"), date.utc(1991, 1, 3));
  test.equal(p("XXX 03/10/2010"), null);
  test.end();
});

tape("utcParse(\"\")(date) parses weekday and numeric date", function(test) {
  var p = timeFormat.utcParse("%A %m/%d/%Y");
  test.deepEqual(p("Sunday 01/01/1990"), date.utc(1990, 0, 1));
  test.deepEqual(p("Wednesday 02/03/1991"), date.utc(1991, 1, 3));
  test.equal(p("Caturday 03/10/2010"), null);
  test.end();
});

tape("utcParse(\"\")(date) parses numeric date", function(test) {
  var p = timeFormat.utcParse("%m/%d/%y");
  test.deepEqual(p("01/01/90"), date.utc(1990, 0, 1));
  test.deepEqual(p("02/03/91"), date.utc(1991, 1, 3));
  test.equal(p("03/10/2010"), null);
  test.end();
});

tape("utcParse(\"\")(date) parses locale date", function(test) {
  var p = timeFormat.utcParse("%x");
  test.deepEqual(p("01/01/1990"), date.utc(1990, 0, 1));
  test.deepEqual(p("02/03/1991"), date.utc(1991, 1, 3));
  test.deepEqual(p("03/10/2010"), date.utc(2010, 2, 10));
  test.end();
});

tape("utcParse(\"\")(date) parses abbreviated month, date and year", function(test) {
  var p = timeFormat.utcParse("%b %d, %Y");
  test.deepEqual(p("jan 01, 1990"), date.utc(1990, 0, 1));
  test.deepEqual(p("feb  2, 2010"), date.utc(2010, 1, 2));
  test.equal(p("jan. 1, 1990"), null);
  test.end();
});

tape("utcParse(\"\")(date) parses month, date and year", function(test) {
  var p = timeFormat.utcParse("%B %d, %Y");
  test.deepEqual(p("january 01, 1990"), date.utc(1990, 0, 1));
  test.deepEqual(p("February  2, 2010"), date.utc(2010, 1, 2));
  test.equal(p("jan 1, 1990"), null);
  test.end();
});

tape("utcParse(\"\")(date) parses locale date and time", function(test) {
  var p = timeFormat.utcParse("%c");
  test.deepEqual(p("1/1/1990, 12:00:00 AM"), date.utc(1990, 0, 1));
  test.end();
});

tape("utcParse(\"\")(date) parses twenty-four hour, minute and second", function(test) {
  var p = timeFormat.utcParse("%H:%M:%S");
  test.deepEqual(p("00:00:00"), date.utc(1900, 0, 1, 0, 0, 0));
  test.deepEqual(p("11:59:59"), date.utc(1900, 0, 1, 11, 59, 59));
  test.deepEqual(p("12:00:00"), date.utc(1900, 0, 1, 12, 0, 0));
  test.deepEqual(p("12:00:01"), date.utc(1900, 0, 1, 12, 0, 1));
  test.deepEqual(p("23:59:59"), date.utc(1900, 0, 1, 23, 59, 59));
  test.end();
});

tape("utcParse(\"\")(date) parses locale time", function(test) {
  var p = timeFormat.utcParse("%X");
  test.deepEqual(p("12:00:00 AM"), date.utc(1900, 0, 1, 0, 0, 0));
  test.deepEqual(p("11:59:59 AM"), date.utc(1900, 0, 1, 11, 59, 59));
  test.deepEqual(p("12:00:00 PM"), date.utc(1900, 0, 1, 12, 0, 0));
  test.deepEqual(p("12:00:01 PM"), date.utc(1900, 0, 1, 12, 0, 1));
  test.deepEqual(p("11:59:59 PM"), date.utc(1900, 0, 1, 23, 59, 59));
  test.end();
});

tape("utcParse(\"\")(date) parses twelve hour, minute and second", function(test) {
  var p = timeFormat.utcParse("%I:%M:%S %p");
  test.deepEqual(p("12:00:00 am"), date.utc(1900, 0, 1, 0, 0, 0));
  test.deepEqual(p("11:59:59 AM"), date.utc(1900, 0, 1, 11, 59, 59));
  test.deepEqual(p("12:00:00 pm"), date.utc(1900, 0, 1, 12, 0, 0));
  test.deepEqual(p("12:00:01 pm"), date.utc(1900, 0, 1, 12, 0, 1));
  test.deepEqual(p("11:59:59 PM"), date.utc(1900, 0, 1, 23, 59, 59));
  test.end();
});

tape("utcParse(\"\")(date) parses timezone offset", function(test) {
  var p = timeFormat.utcParse("%m/%d/%Y %Z");
  test.deepEqual(p("01/02/1990 +0000"), date.utc(1990, 0, 2));
  test.deepEqual(p("01/02/1990 +0100"), date.utc(1990, 0, 1, 23));
  test.deepEqual(p("01/02/1990 -0100"), date.utc(1990, 0, 2, 1));
  test.deepEqual(p("01/02/1990 -0800"), date.local(1990, 0, 2));
  test.end();
});

tape("utcParse(\"\")(date) parses timezone offset (in the form '+-hh:mm')", function(test) {
  var p = timeFormat.utcParse("%m/%d/%Y %Z");
  test.deepEqual(p("01/02/1990 +01:30"), date.utc(1990, 0, 1, 22, 30));
  test.deepEqual(p("01/02/1990 -01:30"), date.utc(1990, 0, 2, 1, 30));
  test.end();
});

tape("utcParse(\"\")(date) parses timezone offset (in the form '+-hh')", function(test) {
  var p = timeFormat.utcParse("%m/%d/%Y %Z");
  test.deepEqual(p("01/02/1990 +01"), date.utc(1990, 0, 1, 23));
  test.deepEqual(p("01/02/1990 -01"), date.utc(1990, 0, 2, 1));
  test.end();
});

tape("utcParse(\"\")(date) parses timezone offset (in the form 'Z')", function(test) {
  var p = timeFormat.utcParse("%m/%d/%Y %Z");
  test.deepEqual(p("01/02/1990 Z"), date.utc(1990, 0, 2));
  test.end();
});
