var tape = require("tape"),
    timeFormat = require("../"),
    date = require("./date");

tape("isoFormat(date) returns an ISO 8601 UTC string", function(test) {
  test.equal(timeFormat.isoFormat(date.utc(1990, 0, 1, 0, 0, 0)), "1990-01-01T00:00:00.000Z");
  test.equal(timeFormat.isoFormat(date.utc(2011, 11, 31, 23, 59, 59)), "2011-12-31T23:59:59.000Z");
  test.end();
});
