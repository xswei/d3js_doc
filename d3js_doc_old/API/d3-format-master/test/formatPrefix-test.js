var tape = require("tape"),
    format = require("../");

tape("formatPrefix(\"s\", value)(number) formats with the SI prefix appropriate to the specified value", function(test) {
  test.equal(format.formatPrefix(",.0s", 1e-6)(.00042), "420µ");
  test.equal(format.formatPrefix(",.0s", 1e-6)(.0042), "4,200µ");
  test.equal(format.formatPrefix(",.3s", 1e-3)(.00042), "0.420m");
  test.end();
});

tape("formatPrefix(\"s\", value)(number) uses yocto for very small reference values", function(test) {
  test.equal(format.formatPrefix(",.0s", 1e-27)(1e-24), "1y");
  test.end();
});

tape("formatPrefix(\"s\", value)(number) uses yotta for very small reference values", function(test) {
  test.equal(format.formatPrefix(",.0s", 1e27)(1e24), "1Y");
  test.end();
});

tape("formatPrefix(\"$,s\", value)(number) formats with the specified SI prefix", function(test) {
  var f = format.formatPrefix(" $12,.1s", 1e6);
  test.equal(f(-42e6),  "      -$42.0M");
  test.equal(f(+4.2e6), "        $4.2M");
  test.end();
});
