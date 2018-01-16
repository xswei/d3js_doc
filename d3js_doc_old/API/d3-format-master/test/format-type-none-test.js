var tape = require("tape"),
    format = require("../");

tape("format(\".[precision]\") uses significant precision and trims insignificant zeros", function(test) {
  test.equal(format.format(".1")(4.9), "5");
  test.equal(format.format(".1")(0.49), "0.5");
  test.equal(format.format(".2")(4.9), "4.9");
  test.equal(format.format(".2")(0.49), "0.49");
  test.equal(format.format(".2")(0.449), "0.45");
  test.equal(format.format(".3")(4.9), "4.9");
  test.equal(format.format(".3")(0.49), "0.49");
  test.equal(format.format(".3")(0.449), "0.449");
  test.equal(format.format(".3")(0.4449), "0.445");
  test.equal(format.format(".5")(0.444449), "0.44445");
  test.end();
});

tape("format(\".[precision]\") does not trim significant zeros", function(test) {
  test.equal(format.format(".5")(10), "10");
  test.equal(format.format(".5")(100), "100");
  test.equal(format.format(".5")(1000), "1000");
  test.equal(format.format(".5")(21010), "21010");
  test.equal(format.format(".5")(1.10001), "1.1");
  test.equal(format.format(".5")(1.10001e6), "1.1e+6");
  test.equal(format.format(".6")(1.10001), "1.10001");
  test.equal(format.format(".6")(1.10001e6), "1.10001e+6");
  test.end();
});

tape("format(\".[precision]\") also trims the decimal point if there are only insignificant zeros", function(test) {
  test.equal(format.format(".5")(1.00001), "1");
  test.equal(format.format(".5")(1.00001e6), "1e+6");
  test.equal(format.format(".6")(1.00001), "1.00001");
  test.equal(format.format(".6")(1.00001e6), "1.00001e+6");
  test.end();
});

tape("format(\"$\") can output a currency", function(test) {
  var f = format.format("$");
  test.equal(f(0), "$0");
  test.equal(f(.042), "$0.042");
  test.equal(f(.42), "$0.42");
  test.equal(f(4.2), "$4.2");
  test.equal(f(-.042), "-$0.042");
  test.equal(f(-.42), "-$0.42");
  test.equal(f(-4.2), "-$4.2");
  test.end();
});

tape("format(\"($\") can output a currency with parentheses for negative values", function(test) {
  var f = format.format("($");
  test.equal(f(0), "$0");
  test.equal(f(.042), "$0.042");
  test.equal(f(.42), "$0.42");
  test.equal(f(4.2), "$4.2");
  test.equal(f(-.042), "($0.042)");
  test.equal(f(-.42), "($0.42)");
  test.equal(f(-4.2), "($4.2)");
  test.end();
});
