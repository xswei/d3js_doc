var tape = require("tape"),
    format = require("../");

tape("format(\"b\") binary", function(test) {
  test.equal(format.format("b")(10), "1010");
  test.end();
});

tape("format(\"#b\") binary with prefix", function(test) {
  test.equal(format.format("#b")(10), "0b1010");
  test.end();
});
