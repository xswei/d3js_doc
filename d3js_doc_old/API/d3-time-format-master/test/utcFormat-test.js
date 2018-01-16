var tape = require("tape"),
    time = require("d3-time"),
    timeFormat = require("../"),
    date = require("./date");

var formatMillisecond = timeFormat.utcFormat(".%L"),
    formatSecond = timeFormat.utcFormat(":%S"),
    formatMinute = timeFormat.utcFormat("%I:%M"),
    formatHour = timeFormat.utcFormat("%I %p"),
    formatDay = timeFormat.utcFormat("%a %d"),
    formatWeek = timeFormat.utcFormat("%b %d"),
    formatMonth = timeFormat.utcFormat("%B"),
    formatYear = timeFormat.utcFormat("%Y");

function multi(d) {
  return (time.utcSecond(d) < d ? formatMillisecond
      : time.utcMinute(d) < d ? formatSecond
      : time.utcHour(d) < d ? formatMinute
      : time.utcDay(d) < d ? formatHour
      : time.utcMonth(d) < d ? (time.utcWeek(d) < d ? formatDay : formatWeek)
      : time.utcYear(d) < d ? formatMonth
      : formatYear)(d);
}

tape("utcFormat(\"%a\")(date) formats abbreviated weekdays", function(test) {
  var f = timeFormat.utcFormat("%a");
  test.equal(f(date.utc(1990, 0, 1)), "Mon");
  test.equal(f(date.utc(1990, 0, 2)), "Tue");
  test.equal(f(date.utc(1990, 0, 3)), "Wed");
  test.equal(f(date.utc(1990, 0, 4)), "Thu");
  test.equal(f(date.utc(1990, 0, 5)), "Fri");
  test.equal(f(date.utc(1990, 0, 6)), "Sat");
  test.equal(f(date.utc(1990, 0, 7)), "Sun");
  test.end();
});

tape("utcFormat(\"%A\")(date) formats weekdays", function(test) {
  var f = timeFormat.utcFormat("%A");
  test.equal(f(date.utc(1990, 0, 1)), "Monday");
  test.equal(f(date.utc(1990, 0, 2)), "Tuesday");
  test.equal(f(date.utc(1990, 0, 3)), "Wednesday");
  test.equal(f(date.utc(1990, 0, 4)), "Thursday");
  test.equal(f(date.utc(1990, 0, 5)), "Friday");
  test.equal(f(date.utc(1990, 0, 6)), "Saturday");
  test.equal(f(date.utc(1990, 0, 7)), "Sunday");
  test.end();
});

tape("utcFormat(\"%b\")(date) formats abbreviated months", function(test) {
  var f = timeFormat.utcFormat("%b");
  test.equal(f(date.utc(1990,  0, 1)), "Jan");
  test.equal(f(date.utc(1990,  1, 1)), "Feb");
  test.equal(f(date.utc(1990,  2, 1)), "Mar");
  test.equal(f(date.utc(1990,  3, 1)), "Apr");
  test.equal(f(date.utc(1990,  4, 1)), "May");
  test.equal(f(date.utc(1990,  5, 1)), "Jun");
  test.equal(f(date.utc(1990,  6, 1)), "Jul");
  test.equal(f(date.utc(1990,  7, 1)), "Aug");
  test.equal(f(date.utc(1990,  8, 1)), "Sep");
  test.equal(f(date.utc(1990,  9, 1)), "Oct");
  test.equal(f(date.utc(1990, 10, 1)), "Nov");
  test.equal(f(date.utc(1990, 11, 1)), "Dec");
  test.end();
});

tape("utcFormat(\"%B\")(date) formats months", function(test) {
  var f = timeFormat.utcFormat("%B");
  test.equal(f(date.utc(1990,  0, 1)), "January");
  test.equal(f(date.utc(1990,  1, 1)), "February");
  test.equal(f(date.utc(1990,  2, 1)), "March");
  test.equal(f(date.utc(1990,  3, 1)), "April");
  test.equal(f(date.utc(1990,  4, 1)), "May");
  test.equal(f(date.utc(1990,  5, 1)), "June");
  test.equal(f(date.utc(1990,  6, 1)), "July");
  test.equal(f(date.utc(1990,  7, 1)), "August");
  test.equal(f(date.utc(1990,  8, 1)), "September");
  test.equal(f(date.utc(1990,  9, 1)), "October");
  test.equal(f(date.utc(1990, 10, 1)), "November");
  test.equal(f(date.utc(1990, 11, 1)), "December");
  test.end();
});

tape("utcFormat(\"%c\")(date) formats localized dates and times", function(test) {
  var f = timeFormat.utcFormat("%c");
  test.equal(f(date.utc(1990, 0, 1)), "1/1/1990, 12:00:00 AM");
  test.end();
});

tape("utcFormat(\"%d\")(date) formats zero-padded dates", function(test) {
  var f = timeFormat.utcFormat("%d");
  test.equal(f(date.utc(1990, 0, 1)), "01");
  test.end();
});

tape("utcFormat(\"%e\")(date) formats space-padded dates", function(test) {
  var f = timeFormat.utcFormat("%e");
  test.equal(f(date.utc(1990, 0, 1)), " 1");
  test.end();
});

tape("utcFormat(\"%H\")(date) formats zero-padded hours (24)", function(test) {
  var f = timeFormat.utcFormat("%H");
  test.equal(f(date.utc(1990, 0, 1,  0)), "00");
  test.equal(f(date.utc(1990, 0, 1, 13)), "13");
  test.end();
});

tape("utcFormat(\"%I\")(date) formats zero-padded hours (12)", function(test) {
  var f = timeFormat.utcFormat("%I");
  test.equal(f(date.utc(1990, 0, 1,  0)), "12");
  test.equal(f(date.utc(1990, 0, 1, 13)), "01");
  test.end();
});

tape("utcFormat(\"%j\")(date) formats zero-padded day of year numbers", function(test) {
  var f = timeFormat.utcFormat("%j");
  test.equal(f(date.utc(1990,  0,  1)), "001");
  test.equal(f(date.utc(1990,  5,  1)), "152");
  test.equal(f(date.utc(2010,  2, 13)), "072");
  test.equal(f(date.utc(2010,  2, 14)), "073"); // DST begins
  test.equal(f(date.utc(2010,  2, 15)), "074");
  test.equal(f(date.utc(2010, 10,  6)), "310");
  test.equal(f(date.utc(2010, 10,  7)), "311"); // DST ends
  test.equal(f(date.utc(2010, 10,  8)), "312");
  test.end();
});

tape("utcFormat(\"%m\")(date) formats zero-padded months", function(test) {
  var f = timeFormat.utcFormat("%m");
  test.equal(f(date.utc(1990, 0, 1)), "01");
  test.equal(f(date.utc(1990, 9, 1)), "10");
  test.end();
});

tape("utcFormat(\"%M\")(date) formats zero-padded minutes", function(test) {
  var f = timeFormat.utcFormat("%M");
  test.equal(f(date.utc(1990, 0, 1, 0,  0)), "00");
  test.equal(f(date.utc(1990, 0, 1, 0, 32)), "32");
  test.end();
});

tape("utcFormat(\"%p\")(date) formats AM or PM", function(test) {
  var f = timeFormat.utcFormat("%p");
  test.equal(f(date.utc(1990, 0, 1,  0)), "AM");
  test.equal(f(date.utc(1990, 0, 1, 13)), "PM");
  test.end();
});

tape("utcFormat(\"%S\")(date) formats zero-padded seconds", function(test) {
  var f = timeFormat.utcFormat("%S");
  test.equal(f(date.utc(1990, 0, 1, 0, 0,  0)), "00");
  test.equal(f(date.utc(1990, 0, 1, 0, 0, 32)), "32");
  var f = timeFormat.utcFormat("%0S");
  test.equal(f(date.utc(1990, 0, 1, 0, 0,  0)), "00");
  test.equal(f(date.utc(1990, 0, 1, 0, 0, 32)), "32");
  test.end();
});

tape("utcFormat(\"%_S\")(date) formats space-padded seconds", function(test) {
  var f = timeFormat.utcFormat("%_S");
  test.equal(f(date.utc(1990, 0, 1, 0, 0,  0)), " 0");
  test.equal(f(date.utc(1990, 0, 1, 0, 0,  3)), " 3");
  test.equal(f(date.utc(1990, 0, 1, 0, 0, 32)), "32");
  test.end();
});

tape("utcFormat(\"-S\")(date) formats no-padded seconds", function(test) {
  var f = timeFormat.utcFormat("%-S");
  test.equal(f(date.utc(1990, 0, 1, 0, 0,  0)), "0");
  test.equal(f(date.utc(1990, 0, 1, 0, 0,  3)), "3");
  test.equal(f(date.utc(1990, 0, 1, 0, 0, 32)), "32");
  test.end();
});

tape("utcFormat(\"%L\")(date) formats zero-padded milliseconds", function(test) {
  var f = timeFormat.utcFormat("%L");
  test.equal(f(date.utc(1990, 0, 1, 0, 0, 0,   0)), "000");
  test.equal(f(date.utc(1990, 0, 1, 0, 0, 0, 432)), "432");
  test.end();
});

tape("utcFormat(\"%U\")(date) formats zero-padded week numbers", function(test) {
  var f = timeFormat.utcFormat("%U");
  test.equal(f(date.utc(1990,  0,  1,  0)), "00");
  test.equal(f(date.utc(1990,  5,  1,  0)), "21");
  test.equal(f(date.utc(2010,  2, 13, 23)), "10");
  test.equal(f(date.utc(2010,  2, 14,  0)), "11"); // DST begins
  test.equal(f(date.utc(2010,  2, 15,  0)), "11");
  test.equal(f(date.utc(2010, 10,  6, 23)), "44");
  test.equal(f(date.utc(2010, 10,  7,  0)), "45"); // DST ends
  test.equal(f(date.utc(2010, 10,  8,  0)), "45");
  test.end();
});

tape("utcFormat(\"%x\")(date) formats localized dates", function(test) {
  var f = timeFormat.utcFormat("%x");
  test.equal(f(date.utc(1990, 0, 1)), "1/1/1990");
  test.equal(f(date.utc(2010, 5, 1)), "6/1/2010");
  test.end();
});

tape("utcFormat(\"%X\")(date) formats localized times", function(test) {
  var f = timeFormat.utcFormat("%X");
  test.equal(f(date.utc(1990, 0, 1,  0,  0,  0)), "12:00:00 AM");
  test.equal(f(date.utc(1990, 0, 1, 13, 34, 59)), "1:34:59 PM");
  test.end();
});

tape("utcFormat(\"%y\")(date) formats zero-padded two-digit years", function(test) {
  var f = timeFormat.utcFormat("%y");
  test.equal(f(date.utc(+1990, 0, 1)), "90");
  test.equal(f(date.utc(+2002, 0, 1)), "02");
  test.equal(f(date.utc(-0002, 0, 1)), "-02");
  test.end();
});

tape("utcFormat(\"%Y\")(date) formats zero-padded four-digit years", function(test) {
  var f = timeFormat.utcFormat("%Y");
  test.equal(f(date.utc(  123, 0, 1)), "0123");
  test.equal(f(date.utc( 1990, 0, 1)), "1990");
  test.equal(f(date.utc( 2002, 0, 1)), "2002");
  test.equal(f(date.utc(10002, 0, 1)), "0002");
  test.equal(f(date.utc(   -2, 0, 1)), "-0002");
  test.end();
});

tape("utcFormat(\"%Z\")(date) formats time zones", function(test) {
  var f = timeFormat.utcFormat("%Z");
  test.equal(f(date.utc(1990, 0, 1)), "+0000");
  test.end();
});

tape("utcFormat(\"%%\")(date) formats literal percent signs", function(test) {
  var f = timeFormat.utcFormat("%%");
  test.equal(f(date.utc(1990, 0, 1)), "%");
  test.end();
});

tape("utcFormat(…) can be used to create a conditional multi-format", function(test) {
  test.equal(multi(date.utc(1990, 0, 1, 0, 0, 0, 12)), ".012");
  test.equal(multi(date.utc(1990, 0, 1, 0, 0, 1,  0)), ":01");
  test.equal(multi(date.utc(1990, 0, 1, 0, 1, 0,  0)), "12:01");
  test.equal(multi(date.utc(1990, 0, 1, 1, 0, 0,  0)), "01 AM");
  test.equal(multi(date.utc(1990, 0, 2, 0, 0, 0,  0)), "Tue 02");
  test.equal(multi(date.utc(1990, 1, 1, 0, 0, 0,  0)), "February");
  test.equal(multi(date.utc(1990, 0, 1, 0, 0, 0,  0)), "1990");
  test.end();
});
