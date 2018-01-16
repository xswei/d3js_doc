var tape = require("tape"),
    format = require("../");

tape("format(\"c\") unicode character", function(test) {
  test.equal(format.format("c")("☃"), "☃");
  test.equal(format.format("020c")("☃"),  "0000000000000000000☃");
  test.equal(format.format(" ^20c")("☃"), "         ☃          ");
  test.equal(format.format("$c")("☃"), "$☃");
  test.end();
});

tape("format(\"c\") does not localize a decimal point", function(test) {
  test.equal(format.formatLocale({decimal: "/"}).format("c")("."), ".");
  test.end();
});
