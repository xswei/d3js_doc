var tape = require("tape"),
    format = require("../");

tape("format(\"r\") can round to significant digits", function(test) {
  test.equal(format.format(".2r")(0), "0.0");
  test.equal(format.format(".1r")(0.049), "0.05");
  test.equal(format.format(".1r")(-0.049), "-0.05");
  test.equal(format.format(".1r")(0.49), "0.5");
  test.equal(format.format(".1r")(-0.49), "-0.5");
  test.equal(format.format(".2r")(0.449), "0.45");
  test.equal(format.format(".3r")(0.4449), "0.445");
  test.equal(format.format(".3r")(1.00), "1.00");
  test.equal(format.format(".3r")(0.9995), "1.00");
  test.equal(format.format(".5r")(0.444449), "0.44445");
  test.equal(format.format("r")(123.45), "123.450");
  test.equal(format.format(".1r")(123.45), "100");
  test.equal(format.format(".2r")(123.45), "120");
  test.equal(format.format(".3r")(123.45), "123");
  test.equal(format.format(".4r")(123.45), "123.5");
  test.equal(format.format(".5r")(123.45), "123.45");
  test.equal(format.format(".6r")(123.45), "123.450");
  test.equal(format.format(".1r")(.9), "0.9");
  test.equal(format.format(".1r")(.09), "0.09");
  test.equal(format.format(".1r")(.949), "0.9");
  test.equal(format.format(".1r")(.0949), "0.09");
  test.equal(format.format(".1r")(.0000000129), "0.00000001");
  test.equal(format.format(".2r")(.0000000129), "0.000000013");
  test.equal(format.format(".2r")(.00000000129), "0.0000000013");
  test.equal(format.format(".3r")(.00000000129), "0.00000000129");
  test.equal(format.format(".4r")(.00000000129), "0.000000001290");
  test.equal(format.format(".10r")(.9999999999), "0.9999999999");
  test.equal(format.format(".15r")(.999999999999999), "0.999999999999999");
  test.end();
});

tape("format(\"r\") can round very small numbers", function(test) {
  var f = format.format(".2r");
  test.equal(f(1e-22), "0.00000000000000000000010");
  test.end();
});
