var tape = require("tape"),
    format = require("../");

tape("format(\"s\") outputs SI-prefix notation with default precision 6", function(test) {
  var f = format.format("s");
  test.equal(f(0), "0.00000");
  test.equal(f(1), "1.00000");
  test.equal(f(10), "10.0000");
  test.equal(f(100), "100.000");
  test.equal(f(999.5), "999.500");
  test.equal(f(999500), "999.500k");
  test.equal(f(1000), "1.00000k");
  test.equal(f(100), "100.000");
  test.equal(f(1400), "1.40000k");
  test.equal(f(1500.5), "1.50050k");
  test.equal(f(.00001), "10.0000µ");
  test.equal(f(.000001), "1.00000µ");
  test.end();
});

tape("format(\"[.precision]s\") outputs SI-prefix notation with precision significant digits", function(test) {
  var f = format.format(".3s");
  test.equal(f(0), "0.00");
  test.equal(f(1), "1.00");
  test.equal(f(10), "10.0");
  test.equal(f(100), "100");
  test.equal(f(999.5), "1.00k");
  test.equal(f(999500), "1.00M");
  test.equal(f(1000), "1.00k");
  test.equal(f(1500.5), "1.50k");
  test.equal(f(145500000), "146M");
  test.equal(f(145999999.999999347), "146M");
  test.equal(f(1e26), "100Y");
  test.equal(f(.000001), "1.00µ");
  test.equal(f(.009995), "10.0m");
  var f = format.format(".4s");
  test.equal(f(999.5), "999.5");
  test.equal(f(999500), "999.5k");
  test.equal(f(.009995), "9.995m");
  test.end();
});

tape("format(\"s\") formats numbers smaller than 1e-24 with yocto", function(test) {
  var f = format.format(".8s");
  test.equal(f(1.29e-30), "0.0000013y"); // Note: rounded!
  test.equal(f(1.29e-29), "0.0000129y");
  test.equal(f(1.29e-28), "0.0001290y");
  test.equal(f(1.29e-27), "0.0012900y");
  test.equal(f(1.29e-26), "0.0129000y");
  test.equal(f(1.29e-25), "0.1290000y");
  test.equal(f(1.29e-24), "1.2900000y");
  test.equal(f(1.29e-23), "12.900000y");
  test.equal(f(1.29e-22), "129.00000y");
  test.equal(f(1.29e-21), "1.2900000z");
  test.equal(f(-1.29e-30), "-0.0000013y"); // Note: rounded!
  test.equal(f(-1.29e-29), "-0.0000129y");
  test.equal(f(-1.29e-28), "-0.0001290y");
  test.equal(f(-1.29e-27), "-0.0012900y");
  test.equal(f(-1.29e-26), "-0.0129000y");
  test.equal(f(-1.29e-25), "-0.1290000y");
  test.equal(f(-1.29e-24), "-1.2900000y");
  test.equal(f(-1.29e-23), "-12.900000y");
  test.equal(f(-1.29e-22), "-129.00000y");
  test.equal(f(-1.29e-21), "-1.2900000z");
  test.end();
});

tape("format(\"s\") formats numbers larger than 1e24 with yotta", function(test) {
  var f = format.format(".8s");
  test.equal(f(1.23e+21), "1.2300000Z");
  test.equal(f(1.23e+22), "12.300000Z");
  test.equal(f(1.23e+23), "123.00000Z");
  test.equal(f(1.23e+24), "1.2300000Y");
  test.equal(f(1.23e+25), "12.300000Y");
  test.equal(f(1.23e+26), "123.00000Y");
  test.equal(f(1.23e+27), "1230.0000Y");
  test.equal(f(1.23e+28), "12300.000Y");
  test.equal(f(1.23e+29), "123000.00Y");
  test.equal(f(1.23e+30), "1230000.0Y");
  test.equal(f(-1.23e+21), "-1.2300000Z");
  test.equal(f(-1.23e+22), "-12.300000Z");
  test.equal(f(-1.23e+23), "-123.00000Z");
  test.equal(f(-1.23e+24), "-1.2300000Y");
  test.equal(f(-1.23e+25), "-12.300000Y");
  test.equal(f(-1.23e+26), "-123.00000Y");
  test.equal(f(-1.23e+27), "-1230.0000Y");
  test.equal(f(-1.23e+28), "-12300.000Y");
  test.equal(f(-1.23e+29), "-123000.00Y");
  test.equal(f(-1.23e+30), "-1230000.0Y");
  test.end();
});

tape("format(\"$s\") outputs SI-prefix notation with a currency symbol", function(test) {
  var f = format.format("$.2s");
  test.equal(f(0), "$0.0");
  test.equal(f(2.5e5), "$250k");
  test.equal(f(-2.5e8), "-$250M");
  test.equal(f(2.5e11), "$250G");
  var f = format.format("$.3s");
  test.equal(f(0), "$0.00");
  test.equal(f(1), "$1.00");
  test.equal(f(10), "$10.0");
  test.equal(f(100), "$100");
  test.equal(f(999.5), "$1.00k");
  test.equal(f(999500), "$1.00M");
  test.equal(f(1000), "$1.00k");
  test.equal(f(1500.5), "$1.50k");
  test.equal(f(145500000), "$146M");
  test.equal(f(145999999.999999347), "$146M");
  test.equal(f(1e26), "$100Y");
  test.equal(f(.000001), "$1.00µ");
  test.equal(f(.009995), "$10.0m");
  var f = format.format("$.4s");
  test.equal(f(999.5), "$999.5");
  test.equal(f(999500), "$999.5k");
  test.equal(f(.009995), "$9.995m");
  test.end();
});

tape("format(\"s\") SI-prefix notation precision is consistent for small and large numbers", function(test) {
  var f = format.format(".0s");
  test.equal(f(1e-5), "10µ");
  test.equal(f(1e-4), "100µ");
  test.equal(f(1e-3), "1m");
  test.equal(f(1e-2), "10m");
  test.equal(f(1e-1), "100m");
  test.equal(f(1e+0), "1");
  test.equal(f(1e+1), "10");
  test.equal(f(1e+2), "100");
  test.equal(f(1e+3), "1k");
  test.equal(f(1e+4), "10k");
  test.equal(f(1e+5), "100k");
  var f = format.format(".4s");
  test.equal(f(1e-5), "10.00µ");
  test.equal(f(1e-4), "100.0µ");
  test.equal(f(1e-3), "1.000m");
  test.equal(f(1e-2), "10.00m");
  test.equal(f(1e-1), "100.0m");
  test.equal(f(1e+0), "1.000");
  test.equal(f(1e+1), "10.00");
  test.equal(f(1e+2), "100.0");
  test.equal(f(1e+3), "1.000k");
  test.equal(f(1e+4), "10.00k");
  test.equal(f(1e+5), "100.0k");
  test.end();
});

tape("format(\"0[width],s\") will group thousands due to zero fill", function(test) {
  var f = format.format("020,s");
  test.equal(f(42),    "000,000,000,042.0000");
  test.equal(f(42e12), "00,000,000,042.0000T");
  test.end();
});

tape("format(\",s\") will group thousands for very large numbers", function(test) {
  var f = format.format(",s");
  test.equal(f(42e30), "42,000,000Y");
  test.end();
});
