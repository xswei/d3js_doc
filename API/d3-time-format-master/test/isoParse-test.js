var tape = require("tape"),
    timeFormat = require("../"),
    date = require("./date");

tape("isoParse as ISO 8601", function(test) {
  test.deepEqual(timeFormat.isoParse("1990-01-01T00:00:00.000Z"), date.utc(1990, 0, 1, 0, 0, 0));
  test.deepEqual(timeFormat.isoParse("2011-12-31T23:59:59.000Z"), date.utc(2011, 11, 31, 23, 59, 59));
  test.equal(timeFormat.isoParse("1990-01-01T00:00:00.000X"), null);
  test.end();
});
