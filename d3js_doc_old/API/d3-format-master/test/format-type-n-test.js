var tape = require("tape"),
    format = require("../");

tape("format(\"n\") is an alias for \",g\"", function(test) {
  var f = format.format(".12n");
  test.equal(f(0), "0.00000000000");
  test.equal(f(42), "42.0000000000");
  test.equal(f(42000000), "42,000,000.0000");
  test.equal(f(420000000), "420,000,000.000");
  test.equal(f(-4), "-4.00000000000");
  test.equal(f(-42), "-42.0000000000");
  test.equal(f(-4200000), "-4,200,000.00000");
  test.equal(f(-42000000), "-42,000,000.0000");
  test.equal(f(.0042), "0.00420000000000");
  test.equal(f(.42), "0.420000000000");
  test.equal(f(1e21), "1.00000000000e+21");
  test.end();
});

tape("format(\"n\") uses zero padding", function(test) {
  test.equal(format.format("01.0n")(0), "0");
  test.equal(format.format("02.0n")(0), "00");
  test.equal(format.format("03.0n")(0), "000");
  test.equal(format.format("05.0n")(0), "0,000");
  test.equal(format.format("08.0n")(0), "0,000,000");
  test.equal(format.format("013.0n")(0), "0,000,000,000");
  test.equal(format.format("021.0n")(0), "0,000,000,000,000,000");
  test.equal(format.format("013.8n")(-42000000), "-0,042,000,000");
  test.end();
});
