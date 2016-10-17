var tape = require("tape"),
    format = require("../");

tape("format(\"f\") can output fixed-point notation", function(test) {
  test.equal(format.format(".1f")(0.49), "0.5");
  test.equal(format.format(".2f")(0.449), "0.45");
  test.equal(format.format(".3f")(0.4449), "0.445");
  test.equal(format.format(".5f")(0.444449), "0.44445");
  test.equal(format.format(".1f")(100), "100.0");
  test.equal(format.format(".2f")(100), "100.00");
  test.equal(format.format(".3f")(100), "100.000");
  test.equal(format.format(".5f")(100), "100.00000");
  test.end();
});

tape("format(\"+$,f\") can output a currency with comma-grouping and sign", function(test) {
  var f = format.format("+$,.2f");
  test.equal(f(0), "+$0.00");
  test.equal(f(0.429), "+$0.43");
  test.equal(f(-0.429), "-$0.43");
  test.equal(f(-1), "-$1.00");
  test.equal(f(1e4), "+$10,000.00");
  test.end();
});

tape("format(\",.f\") can group thousands, space fill, and round to significant digits", function(test) {
  test.equal(format.format("10,.1f")(123456.49), " 123,456.5");
  test.equal(format.format("10,.2f")(1234567.449), "1,234,567.45");
  test.equal(format.format("10,.3f")(12345678.4449), "12,345,678.445");
  test.equal(format.format("10,.5f")(123456789.444449), "123,456,789.44445");
  test.equal(format.format("10,.1f")(123456), " 123,456.0");
  test.equal(format.format("10,.2f")(1234567), "1,234,567.00");
  test.equal(format.format("10,.3f")(12345678), "12,345,678.000");
  test.equal(format.format("10,.5f")(123456789), "123,456,789.00000");
  test.end();
});

tape("format(\"f\") can display integers in fixed-point notation", function(test) {
  test.equal(format.format("f")(42), "42.000000");
  test.end();
});

tape("format(\"f\") can format negative zero as zero", function(test) {
  test.equal(format.format("1f")(-0), "0.000000");
  test.equal(format.format("1f")(-1e-12), "0.000000");
  test.end();
});

tape("format(\",f\") does not group Infinity", function(test) {
  test.equal(format.format(",f")(Infinity), "Infinity");
  test.end();
});
