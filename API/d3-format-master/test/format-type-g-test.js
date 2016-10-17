var tape = require("tape"),
    format = require("../");

tape("format(\"g\") can output general notation", function(test) {
  test.equal(format.format(".1g")(0.049), "0.05");
  test.equal(format.format(".1g")(0.49), "0.5");
  test.equal(format.format(".2g")(0.449), "0.45");
  test.equal(format.format(".3g")(0.4449), "0.445");
  test.equal(format.format(".5g")(0.444449), "0.44445");
  test.equal(format.format(".1g")(100), "1e+2");
  test.equal(format.format(".2g")(100), "1.0e+2");
  test.equal(format.format(".3g")(100), "100");
  test.equal(format.format(".5g")(100), "100.00");
  test.equal(format.format(".5g")(100.2), "100.20");
  test.equal(format.format(".2g")(0.002), "0.0020");
  test.end();
});

tape("format(\",g\") can group thousands with general notation", function(test) {
  var f = format.format(",.12g");
  test.equal(f(0), "0.00000000000");
  test.equal(f(42), "42.0000000000");
  test.equal(f(42000000), "42,000,000.0000");
  test.equal(f(420000000), "420,000,000.000");
  test.equal(f(-4), "-4.00000000000");
  test.equal(f(-42), "-42.0000000000");
  test.equal(f(-4200000), "-4,200,000.00000");
  test.equal(f(-42000000), "-42,000,000.0000");
  test.end();
});
