var tape = require("tape"),
    format = require("../");

tape("format(\"%\") can output a whole percentage", function(test) {
  var f = format.format(".0%");
  test.equal(f(0), "0%");
  test.equal(f(.042), "4%");
  test.equal(f(.42), "42%");
  test.equal(f(4.2), "420%");
  test.equal(f(-.042), "-4%");
  test.equal(f(-.42), "-42%");
  test.equal(f(-4.2), "-420%");
  test.end();
});

tape("format(\".%\") can output a percentage with precision", function(test) {
  var f = format.format(".1%");
  test.equal(f(.234), "23.4%");
  var f = format.format(".2%");
  test.equal(f(.234), "23.40%");
  test.end();
});

tape("format(\"%\") fill respects suffix", function(test) {
  test.equal(format.format("020.0%")(42), "0000000000000004200%");
  test.equal(format.format("20.0%")(42), "               4200%");
  test.end();
});

tape("format(\"^%\") align center puts suffix adjacent to number", function(test) {
  test.equal(format.format("^21.0%")(.42),    "         42%         ");
  test.equal(format.format("^21,.0%")(422),   "       42,200%       ");
  test.equal(format.format("^21,.0%")(-422),  "      -42,200%       ");
  test.end();
});
