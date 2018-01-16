var tape = require("tape"),
    timeFormat = require("../"),
    date = require("./date"),
    FiFi = require("../locale/fi-FI");

tape("parse(string) coerces the specified string to a string", function(test) {
  var p = timeFormat.timeParse("%c");
  test.deepEqual(p({toString: function() { return "1/1/1990, 12:00:00 AM"; }}), date.local(1990, 0, 1));
  test.deepEqual(p({toString: function() { return "1/2/1990, 12:00:00 AM"; }}), date.local(1990, 0, 2));
  test.deepEqual(p({toString: function() { return "1/3/1990, 12:00:00 AM"; }}), date.local(1990, 0, 3));
  test.deepEqual(p({toString: function() { return "1/4/1990, 12:00:00 AM"; }}), date.local(1990, 0, 4));
  test.deepEqual(p({toString: function() { return "1/5/1990, 12:00:00 AM"; }}), date.local(1990, 0, 5));
  test.deepEqual(p({toString: function() { return "1/6/1990, 12:00:00 AM"; }}), date.local(1990, 0, 6));
  test.deepEqual(p({toString: function() { return "1/7/1990, 12:00:00 AM"; }}), date.local(1990, 0, 7));
  test.end();
});

tape("timeParse(\"%a %m/%d/%Y\")(date) parses abbreviated weekday and date", function(test) {
  var p = timeFormat.timeParse("%a %m/%d/%Y");
  test.deepEqual(p("Sun 01/01/1990"), date.local(1990, 0, 1));
  test.deepEqual(p("Wed 02/03/1991"), date.local(1991, 1, 3));
  test.equal(p("XXX 03/10/2010"), null);
  test.end();
});

tape("timeParse(\"%A %m/%d/%Y\")(date) parses weekday and date", function(test) {
  var p = timeFormat.timeParse("%A %m/%d/%Y");
  test.deepEqual(p("Sunday 01/01/1990"), date.local(1990, 0, 1));
  test.deepEqual(p("Wednesday 02/03/1991"), date.local(1991, 1, 3));
  test.equal(p("Caturday 03/10/2010"), null);
  test.end();
});

tape("timeParse(\"%U %Y\")(date) parses week number (Sunday) and year", function(test) {
  var p = timeFormat.timeParse("%U %Y");
  test.deepEqual(p("00 1990"), date.local(1989, 11, 31));
  test.deepEqual(p("05 1991"), date.local(1991,  1,  3));
  test.deepEqual(p("01 1995"), date.local(1995,  0,  1));
  test.end();
});

tape("timeParse(\"%a %U %Y\")(date) parses abbreviated weekday, week number (Sunday) and year", function(test) {
  var p = timeFormat.timeParse("%a %U %Y");
  test.deepEqual(p("Mon 00 1990"), date.local(1990, 0, 1));
  test.deepEqual(p("Sun 05 1991"), date.local(1991, 1, 3));
  test.deepEqual(p("Sun 01 1995"), date.local(1995, 0, 1));
  test.equal(p("XXX 03 2010"), null);
  test.end();
});

tape("timeParse(\"%A %U %Y\")(date) parses weekday, week number (Sunday) and year", function(test) {
  var p = timeFormat.timeParse("%A %U %Y");
  test.deepEqual(p("Monday 00 1990"), date.local(1990, 0, 1));
  test.deepEqual(p("Sunday 05 1991"), date.local(1991, 1, 3));
  test.deepEqual(p("Sunday 01 1995"), date.local(1995, 0, 1));
  test.equal(p("Caturday 03 2010"), null);
  test.end();
});

tape("timeParse(\"%w %U %Y\")(date) parses numeric weekday, week number (Sunday) and year", function(test) {
  var p = timeFormat.timeParse("%w %U %Y");
  test.deepEqual(p("1 00 1990"), date.local(1990, 0, 1));
  test.deepEqual(p("0 05 1991"), date.local(1991, 1, 3));
  test.deepEqual(p("0 01 1995"), date.local(1995, 0, 1));
  test.equal(p("X 03 2010"), null);
  test.end();
});

tape("timeParse(\"%W %Y\")(date) parses week number (Monday) and year", function(test) {
  var p = timeFormat.timeParse("%W %Y");
  test.deepEqual(p("01 1990"), date.local(1990,  0,  1));
  test.deepEqual(p("04 1991"), date.local(1991,  0, 28));
  test.deepEqual(p("00 1995"), date.local(1994, 11, 26));
  test.end();
});

tape("timeParse(\"%a %W %Y\")(date) parses abbreviated weekday, week number (Monday) and year", function(test) {
  var p = timeFormat.timeParse("%a %W %Y");
  test.deepEqual(p("Mon 01 1990"), date.local(1990, 0, 1));
  test.deepEqual(p("Sun 04 1991"), date.local(1991, 1, 3));
  test.deepEqual(p("Sun 00 1995"), date.local(1995, 0, 1));
  test.equal(p("XXX 03 2010"), null);
  test.end();
});

tape("timeParse(\"%A %W %Y\")(date) parses weekday, week number (Monday) and year", function(test) {
  var p = timeFormat.timeParse("%A %W %Y");
  test.deepEqual(p("Monday 01 1990"), date.local(1990, 0, 1));
  test.deepEqual(p("Sunday 04 1991"), date.local(1991, 1, 3));
  test.deepEqual(p("Sunday 00 1995"), date.local(1995, 0, 1));
  test.equal(p("Caturday 03 2010"), null);
  test.end();
});

tape("timeParse(\"%w %W %Y\")(date) parses numeric weekday, week number (Monday) and year", function(test) {
  var p = timeFormat.timeParse("%w %W %Y");
  test.deepEqual(p("1 01 1990"), date.local(1990, 0, 1));
  test.deepEqual(p("0 04 1991"), date.local(1991, 1, 3));
  test.deepEqual(p("0 00 1995"), date.local(1995, 0, 1));
  test.equal(p("X 03 2010"), null);
  test.end();
});

tape("timeParse(\"%m/%d/%y\")(date) parses month, date and two-digit year", function(test) {
  var p = timeFormat.timeParse("%m/%d/%y");
  test.deepEqual(p("02/03/69"), date.local(1969, 1, 3));
  test.deepEqual(p("01/01/90"), date.local(1990, 0, 1));
  test.deepEqual(p("02/03/91"), date.local(1991, 1, 3));
  test.deepEqual(p("02/03/68"), date.local(2068, 1, 3));
  test.equal(p("03/10/2010"), null);
  test.end();
});

tape("timeParse(\"%x\")(date) parses locale date", function(test) {
  var p = timeFormat.timeParse("%x");
  test.deepEqual(p("1/1/1990"), date.local(1990, 0, 1));
  test.deepEqual(p("2/3/1991"), date.local(1991, 1, 3));
  test.deepEqual(p("3/10/2010"), date.local(2010, 2, 10));
  test.end();
});

tape("timeParse(\"%b %d, %Y\")(date) parses abbreviated month, date and year", function(test) {
  var p = timeFormat.timeParse("%b %d, %Y");
  test.deepEqual(p("jan 01, 1990"), date.local(1990, 0, 1));
  test.deepEqual(p("feb  2, 2010"), date.local(2010, 1, 2));
  test.equal(p("jan. 1, 1990"), null);
  test.end();
});

tape("timeParse(\"%B %d, %Y\")(date) parses month, date and year", function(test) {
  var p = timeFormat.timeParse("%B %d, %Y");
  test.deepEqual(p("january 01, 1990"), date.local(1990, 0, 1));
  test.deepEqual(p("February  2, 2010"), date.local(2010, 1, 2));
  test.equal(p("jan 1, 1990"), null);
  test.end();
});

tape("timeParse(\"%j %m/%d/%Y\")(date) parses day of year and date", function(test) {
  var p = timeFormat.timeParse("%j %m/%d/%Y");
  test.deepEqual(p("001 01/01/1990"), date.local(1990, 0, 1));
  test.deepEqual(p("034 02/03/1991"), date.local(1991, 1, 3));
  test.equal(p("2012 03/10/2010"), null);
  test.end();
});

tape("timeParse(\"%c\")(date) parses locale date and time", function(test) {
  var p = timeFormat.timeParse("%c");
  test.deepEqual(p("1/1/1990, 12:00:00 AM"), date.local(1990, 0, 1));
  test.end();
});

tape("timeParse(\"%H:%M:%S\")(date) parses twenty-four hour, minute and second", function(test) {
  var p = timeFormat.timeParse("%H:%M:%S");
  test.deepEqual(p("00:00:00"), date.local(1900, 0, 1, 0, 0, 0));
  test.deepEqual(p("11:59:59"), date.local(1900, 0, 1, 11, 59, 59));
  test.deepEqual(p("12:00:00"), date.local(1900, 0, 1, 12, 0, 0));
  test.deepEqual(p("12:00:01"), date.local(1900, 0, 1, 12, 0, 1));
  test.deepEqual(p("23:59:59"), date.local(1900, 0, 1, 23, 59, 59));
  test.end();
});

tape("timeParse(\"%X\")(date) parses locale time", function(test) {
  var p = timeFormat.timeParse("%X");
  test.deepEqual(p("12:00:00 AM"), date.local(1900, 0, 1, 0, 0, 0));
  test.deepEqual(p("11:59:59 AM"), date.local(1900, 0, 1, 11, 59, 59));
  test.deepEqual(p("12:00:00 PM"), date.local(1900, 0, 1, 12, 0, 0));
  test.deepEqual(p("12:00:01 PM"), date.local(1900, 0, 1, 12, 0, 1));
  test.deepEqual(p("11:59:59 PM"), date.local(1900, 0, 1, 23, 59, 59));
  test.end();
});

tape("timeParse(\"%I:%M:%S %p\")(date) parses twelve hour, minute and second", function(test) {
  var p = timeFormat.timeParse("%I:%M:%S %p");
  test.deepEqual(p("12:00:00 am"), date.local(1900, 0, 1, 0, 0, 0));
  test.deepEqual(p("11:59:59 AM"), date.local(1900, 0, 1, 11, 59, 59));
  test.deepEqual(p("12:00:00 pm"), date.local(1900, 0, 1, 12, 0, 0));
  test.deepEqual(p("12:00:01 pm"), date.local(1900, 0, 1, 12, 0, 1));
  test.deepEqual(p("11:59:59 PM"), date.local(1900, 0, 1, 23, 59, 59));
  test.end();
});

tape("timeParse(\"%I %p\")(date) parses period in non-English locales", function(test) {
  var p = timeFormat.timeFormatLocale(FiFi).parse("%I:%M:%S %p");
  test.deepEqual(p("12:00:00 a.m."), date.local(1900, 0, 1, 0, 0, 0));
  test.deepEqual(p("11:59:59 A.M."), date.local(1900, 0, 1, 11, 59, 59));
  test.deepEqual(p("12:00:00 p.m."), date.local(1900, 0, 1, 12, 0, 0));
  test.deepEqual(p("12:00:01 p.m."), date.local(1900, 0, 1, 12, 0, 1));
  test.deepEqual(p("11:59:59 P.M."), date.local(1900, 0, 1, 23, 59, 59));
  test.end();
});

tape("timeParse(\"%% %m/%d/%Y\")(date) parses literal %", function(test) {
  var p = timeFormat.timeParse("%% %m/%d/%Y");
  test.deepEqual(p("% 01/01/1990"), date.local(1990, 0, 1));
  test.deepEqual(p("% 02/03/1991"), date.local(1991, 1, 3));
  test.equal(p("%% 03/10/2010"), null);
  test.end();
});

tape("timeParse(\"%m/%d/%Y %Z\")(date) parses timezone offset", function(test) {
  var p = timeFormat.timeParse("%m/%d/%Y %Z");
  test.deepEqual(p("01/02/1990 +0000"), date.local(1990, 0, 1, 16));
  test.deepEqual(p("01/02/1990 +0100"), date.local(1990, 0, 1, 15));
  test.deepEqual(p("01/02/1990 +0130"), date.local(1990, 0, 1, 14, 30));
  test.deepEqual(p("01/02/1990 -0100"), date.local(1990, 0, 1, 17));
  test.deepEqual(p("01/02/1990 -0130"), date.local(1990, 0, 1, 17, 30));
  test.deepEqual(p("01/02/1990 -0800"), date.local(1990, 0, 2, 0));
  test.end();
});

tape("timeParse(\"%m/%d/%Y %Z\")(date) parses timezone offset in the form '+-hh:mm'", function(test) {
  var p = timeFormat.timeParse("%m/%d/%Y %Z");
  test.deepEqual(p("01/02/1990 +01:30"), date.local(1990, 0, 1, 14, 30));
  test.deepEqual(p("01/02/1990 -01:30"), date.local(1990, 0, 1, 17, 30));
  test.end();
});

tape("timeParse(\"%m/%d/%Y %Z\")(date) parses timezone offset in the form '+-hh'", function(test) {
  var p = timeFormat.timeParse("%m/%d/%Y %Z");
  test.deepEqual(p("01/02/1990 +01"), date.local(1990, 0, 1, 15));
  test.deepEqual(p("01/02/1990 -01"), date.local(1990, 0, 1, 17));
  test.end();
});

tape("timeParse(\"%m/%d/%Y %Z\")(date) parses timezone offset in the form 'Z'", function(test) {
  var p = timeFormat.timeParse("%m/%d/%Y %Z");
  test.deepEqual(p("01/02/1990 Z"), date.local(1990, 0, 1, 16));
  test.end();
});

tape("timeParse(\"%-m/%0d/%_Y\")(date) ignores optional padding modifier, skipping zeroes and spaces", function(test) {
  var p = timeFormat.timeParse("%-m/%0d/%_Y");
  test.deepEqual(p("01/ 1/1990"), date.local(1990, 0, 1));
  test.end();
});

tape("timeParse(\"%b %d, %Y\")(date) doesn't crash when given weird strings", function(test) {
  try {
    Object.prototype.foo = 10;
    var p = timeFormat.timeParse("%b %d, %Y");
    test.equal(p("foo 1, 1990"), null);
  } finally {
    delete Object.prototype.foo;
  }
  test.end();
});
