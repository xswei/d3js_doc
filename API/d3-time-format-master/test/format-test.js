var tape = require("tape"),
    time = require("d3-time"),
    timeFormat = require("../"),
    date = require("./date");

var formatMillisecond = timeFormat.timeFormat(".%L"),
    formatSecond = timeFormat.timeFormat(":%S"),
    formatMinute = timeFormat.timeFormat("%I:%M"),
    formatHour = timeFormat.timeFormat("%I %p"),
    formatDay = timeFormat.timeFormat("%a %d"),
    formatWeek = timeFormat.timeFormat("%b %d"),
    formatMonth = timeFormat.timeFormat("%B"),
    formatYear = timeFormat.timeFormat("%Y");

function multi(d) {
  return (time.timeSecond(d) < d ? formatMillisecond
      : time.timeMinute(d) < d ? formatSecond
      : time.timeHour(d) < d ? formatMinute
      : time.timeDay(d) < d ? formatHour
      : time.timeMonth(d) < d ? (time.timeWeek(d) < d ? formatDay : formatWeek)
      : time.timeYear(d) < d ? formatMonth
      : formatYear)(d);
}

tape("timeFormat(date) coerces the specified date to a Date", function(test) {
  var f = timeFormat.timeFormat("%c");
  test.equal(f(+date.local(1990, 0, 1)), "1/1/1990, 12:00:00 AM");
  test.equal(f(+date.local(1990, 0, 2)), "1/2/1990, 12:00:00 AM");
  test.equal(f(+date.local(1990, 0, 3)), "1/3/1990, 12:00:00 AM");
  test.equal(f(+date.local(1990, 0, 4)), "1/4/1990, 12:00:00 AM");
  test.equal(f(+date.local(1990, 0, 5)), "1/5/1990, 12:00:00 AM");
  test.equal(f(+date.local(1990, 0, 6)), "1/6/1990, 12:00:00 AM");
  test.equal(f(+date.local(1990, 0, 7)), "1/7/1990, 12:00:00 AM");
  test.end();
});

tape("timeFormat(\"%a\")(date) formats abbreviated weekdays", function(test) {
  var f = timeFormat.timeFormat("%a");
  test.equal(f(date.local(1990, 0, 1)), "Mon");
  test.equal(f(date.local(1990, 0, 2)), "Tue");
  test.equal(f(date.local(1990, 0, 3)), "Wed");
  test.equal(f(date.local(1990, 0, 4)), "Thu");
  test.equal(f(date.local(1990, 0, 5)), "Fri");
  test.equal(f(date.local(1990, 0, 6)), "Sat");
  test.equal(f(date.local(1990, 0, 7)), "Sun");
  test.end();
});

tape("timeFormat(\"%A\")(date) formats weekdays", function(test) {
  var f = timeFormat.timeFormat("%A");
  test.equal(f(date.local(1990, 0, 1)), "Monday");
  test.equal(f(date.local(1990, 0, 2)), "Tuesday");
  test.equal(f(date.local(1990, 0, 3)), "Wednesday");
  test.equal(f(date.local(1990, 0, 4)), "Thursday");
  test.equal(f(date.local(1990, 0, 5)), "Friday");
  test.equal(f(date.local(1990, 0, 6)), "Saturday");
  test.equal(f(date.local(1990, 0, 7)), "Sunday");
  test.end();
});

tape("timeFormat(\"%b\")(date) formats abbreviated months", function(test) {
  var f = timeFormat.timeFormat("%b");
  test.equal(f(date.local(1990,  0, 1)), "Jan");
  test.equal(f(date.local(1990,  1, 1)), "Feb");
  test.equal(f(date.local(1990,  2, 1)), "Mar");
  test.equal(f(date.local(1990,  3, 1)), "Apr");
  test.equal(f(date.local(1990,  4, 1)), "May");
  test.equal(f(date.local(1990,  5, 1)), "Jun");
  test.equal(f(date.local(1990,  6, 1)), "Jul");
  test.equal(f(date.local(1990,  7, 1)), "Aug");
  test.equal(f(date.local(1990,  8, 1)), "Sep");
  test.equal(f(date.local(1990,  9, 1)), "Oct");
  test.equal(f(date.local(1990, 10, 1)), "Nov");
  test.equal(f(date.local(1990, 11, 1)), "Dec");
  test.end();
});

tape("timeFormat(\"%B\")(date) formats months", function(test) {
  var f = timeFormat.timeFormat("%B");
  test.equal(f(date.local(1990,  0, 1)), "January");
  test.equal(f(date.local(1990,  1, 1)), "February");
  test.equal(f(date.local(1990,  2, 1)), "March");
  test.equal(f(date.local(1990,  3, 1)), "April");
  test.equal(f(date.local(1990,  4, 1)), "May");
  test.equal(f(date.local(1990,  5, 1)), "June");
  test.equal(f(date.local(1990,  6, 1)), "July");
  test.equal(f(date.local(1990,  7, 1)), "August");
  test.equal(f(date.local(1990,  8, 1)), "September");
  test.equal(f(date.local(1990,  9, 1)), "October");
  test.equal(f(date.local(1990, 10, 1)), "November");
  test.equal(f(date.local(1990, 11, 1)), "December");
  test.end();
});

tape("timeFormat(\"%c\")(date) formats localized dates and times", function(test) {
  var f = timeFormat.timeFormat("%c");
  test.equal(f(date.local(1990, 0, 1)), "1/1/1990, 12:00:00 AM");
  test.end();
});

tape("timeFormat(\"%d\")(date) formats zero-padded dates", function(test) {
  var f = timeFormat.timeFormat("%d");
  test.equal(f(date.local(1990, 0, 1)), "01");
  test.end();
});

tape("timeFormat(\"%e\")(date) formats space-padded dates", function(test) {
  var f = timeFormat.timeFormat("%e");
  test.equal(f(date.local(1990, 0, 1)), " 1");
  test.end();
});

tape("timeFormat(\"%H\")(date) formats zero-padded hours (24)", function(test) {
  var f = timeFormat.timeFormat("%H");
  test.equal(f(date.local(1990, 0, 1,  0)), "00");
  test.equal(f(date.local(1990, 0, 1, 13)), "13");
  test.end();
});

tape("timeFormat(\"%I\")(date) formats zero-padded hours (12)", function(test) {
  var f = timeFormat.timeFormat("%I");
  test.equal(f(date.local(1990, 0, 1,  0)), "12");
  test.equal(f(date.local(1990, 0, 1, 13)), "01");
  test.end();
});

tape("timeFormat(\"%j\")(date) formats zero-padded day of year numbers", function(test) {
  var f = timeFormat.timeFormat("%j");
  test.equal(f(date.local(1990,  0,  1)), "001");
  test.equal(f(date.local(1990,  5,  1)), "152");
  test.equal(f(date.local(2010,  2, 13)), "072");
  test.equal(f(date.local(2010,  2, 14)), "073"); // DST begins
  test.equal(f(date.local(2010,  2, 15)), "074");
  test.equal(f(date.local(2010, 10,  6)), "310");
  test.equal(f(date.local(2010, 10,  7)), "311"); // DST ends
  test.equal(f(date.local(2010, 10,  8)), "312");
  test.end();
});

tape("timeFormat(\"%m\")(date) formats zero-padded months", function(test) {
  var f = timeFormat.timeFormat("%m");
  test.equal(f(date.local(1990, 0, 1)), "01");
  test.equal(f(date.local(1990, 9, 1)), "10");
  test.end();
});

tape("timeFormat(\"%M\")(date) formats zero-padded minutes", function(test) {
  var f = timeFormat.timeFormat("%M");
  test.equal(f(date.local(1990, 0, 1, 0,  0)), "00");
  test.equal(f(date.local(1990, 0, 1, 0, 32)), "32");
  test.end();
});

tape("timeFormat(\"%p\")(date) formats AM or PM", function(test) {
  var f = timeFormat.timeFormat("%p");
  test.equal(f(date.local(1990, 0, 1,  0)), "AM");
  test.equal(f(date.local(1990, 0, 1, 13)), "PM");
  test.end();
});

tape("timeFormat(\"%S\")(date) formats zero-padded seconds", function(test) {
  var f = timeFormat.timeFormat("%S");
  test.equal(f(date.local(1990, 0, 1, 0, 0,  0)), "00");
  test.equal(f(date.local(1990, 0, 1, 0, 0, 32)), "32");
  var f = timeFormat.timeFormat("%0S");
  test.equal(f(date.local(1990, 0, 1, 0, 0,  0)), "00");
  test.equal(f(date.local(1990, 0, 1, 0, 0, 32)), "32");
  test.end();
});

tape("timeFormat(\"%_S\")(date) formats space-padded seconds", function(test) {
  var f = timeFormat.timeFormat("%_S");
  test.equal(f(date.local(1990, 0, 1, 0, 0,  0)), " 0");
  test.equal(f(date.local(1990, 0, 1, 0, 0,  3)), " 3");
  test.equal(f(date.local(1990, 0, 1, 0, 0, 32)), "32");
  test.end();
});

tape("timeFormat(\"-S\")(date) formats no-padded seconds", function(test) {
  var f = timeFormat.timeFormat("%-S");
  test.equal(f(date.local(1990, 0, 1, 0, 0,  0)), "0");
  test.equal(f(date.local(1990, 0, 1, 0, 0,  3)), "3");
  test.equal(f(date.local(1990, 0, 1, 0, 0, 32)), "32");
  test.end();
});

tape("timeFormat(\"%L\")(date) formats zero-padded milliseconds", function(test) {
  var f = timeFormat.timeFormat("%L");
  test.equal(f(date.local(1990, 0, 1, 0, 0, 0,   0)), "000");
  test.equal(f(date.local(1990, 0, 1, 0, 0, 0, 432)), "432");
  test.end();
});

tape("timeFormat(\"%U\")(date) formats zero-padded week numbers", function(test) {
  var f = timeFormat.timeFormat("%U");
  test.equal(f(date.local(1990,  0,  1,  0)), "00");
  test.equal(f(date.local(1990,  5,  1,  0)), "21");
  test.equal(f(date.local(2010,  2, 13, 23)), "10");
  test.equal(f(date.local(2010,  2, 14,  0)), "11"); // DST begins
  test.equal(f(date.local(2010,  2, 15,  0)), "11");
  test.equal(f(date.local(2010, 10,  6, 23)), "44");
  test.equal(f(date.local(2010, 10,  7,  0)), "45"); // DST ends
  test.equal(f(date.local(2010, 10,  8,  0)), "45");
  test.end();
});

tape("timeFormat(\"%x\")(date) formats localized dates", function(test) {
  var f = timeFormat.timeFormat("%x");
  test.equal(f(date.local(1990, 0, 1)), "1/1/1990");
  test.equal(f(date.local(2010, 5, 1)), "6/1/2010");
  test.end();
});

tape("timeFormat(\"%X\")(date) formats localized times", function(test) {
  var f = timeFormat.timeFormat("%X");
  test.equal(f(date.local(1990, 0, 1,  0,  0,  0)), "12:00:00 AM");
  test.equal(f(date.local(1990, 0, 1, 13, 34, 59)), "1:34:59 PM");
  test.end();
});

tape("timeFormat(\"%y\")(date) formats zero-padded two-digit years", function(test) {
  var f = timeFormat.timeFormat("%y");
  test.equal(f(date.local(+1990, 0, 1)), "90");
  test.equal(f(date.local(+2002, 0, 1)), "02");
  test.equal(f(date.local(-0002, 0, 1)), "-02");
  test.end();
});

tape("timeFormat(\"%Y\")(date) formats zero-padded four-digit years", function(test) {
  var f = timeFormat.timeFormat("%Y");
  test.equal(f(date.local(  123, 0, 1)), "0123");
  test.equal(f(date.local( 1990, 0, 1)), "1990");
  test.equal(f(date.local( 2002, 0, 1)), "2002");
  test.equal(f(date.local(10002, 0, 1)), "0002");
  test.equal(f(date.local(   -2, 0, 1)), "-0002");
  test.end();
});

tape("timeFormat(\"%Z\")(date) formats time zones", function(test) {
  var f = timeFormat.timeFormat("%Z");
  test.equal(f(date.local(1990, 0, 1)), "-0800");
  test.end();
});

tape("timeFormat(\"%%\")(date) formats literal percent signs", function(test) {
  var f = timeFormat.timeFormat("%%");
  test.equal(f(date.local(1990, 0, 1)), "%");
  test.end();
});

tape("timeFormat(…) can be used to create a conditional multi-format", function(test) {
  test.equal(multi(date.local(1990, 0, 1, 0, 0, 0, 12)), ".012");
  test.equal(multi(date.local(1990, 0, 1, 0, 0, 1,  0)), ":01");
  test.equal(multi(date.local(1990, 0, 1, 0, 1, 0,  0)), "12:01");
  test.equal(multi(date.local(1990, 0, 1, 1, 0, 0,  0)), "01 AM");
  test.equal(multi(date.local(1990, 0, 2, 0, 0, 0,  0)), "Tue 02");
  test.equal(multi(date.local(1990, 1, 1, 0, 0, 0,  0)), "February");
  test.equal(multi(date.local(1990, 0, 1, 0, 0, 0,  0)), "1990");
  test.end();
});
