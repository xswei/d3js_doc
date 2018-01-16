var tape = require("tape"),
    format = require("../");

tape("format(\"o\") octal", function(test) {
  test.equal(format.format("o")(10), "12");
  test.end();
});

tape("format(\"#o\") octal with prefix", function(test) {
  test.equal(format.format("#o")(10), "0o12");
  test.end();
});
