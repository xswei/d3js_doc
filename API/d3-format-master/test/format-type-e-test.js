var tape = require("tape"),
    format = require("../");

tape("format(\"e\") can output exponent notation", function(test) {
  var f = format.format("e");
  test.equal(f(0), "0.000000e+0");
  test.equal(f(42), "4.200000e+1");
  test.equal(f(42000000), "4.200000e+7");
  test.equal(f(420000000), "4.200000e+8");
  test.equal(f(-4), "-4.000000e+0");
  test.equal(f(-42), "-4.200000e+1");
  test.equal(f(-4200000), "-4.200000e+6");
  test.equal(f(-42000000), "-4.200000e+7");
  test.equal(format.format(".0e")(42), "4e+1")
  test.equal(format.format(".3e")(42), "4.200e+1")
  test.end();
});

tape("format(\"e\") can format negative zero as zero", function(test) {
  test.equal(format.format("1e")(-0), "0.000000e+0");
  test.equal(format.format("1e")(-1e-12), "-1.000000e-12");
  test.end();
});

tape("format(\",e\") does not group Infinity", function(test) {
  test.equal(format.format(",e")(Infinity), "Infinity");
  test.end();
});
