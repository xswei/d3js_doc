var tape = require("tape"),
    format = require("../");

tape("format(\"p\") can output a percentage", function(test) {
  var f = format.format("p");
  test.equal(f(.00123), "0.123000%");
  test.equal(f(.0123), "1.23000%");
  test.equal(f(.123), "12.3000%");
  test.equal(f(.234), "23.4000%");
  test.equal(f(1.23), "123.000%");
  test.equal(f(-.00123), "-0.123000%");
  test.equal(f(-.0123), "-1.23000%");
  test.equal(f(-.123), "-12.3000%");
  test.equal(f(-1.23), "-123.000%");
  test.end();
});

tape("format(\"+p\") can output a percentage with rounding and sign", function(test) {
  var f = format.format("+.2p");
  test.equal(f(.00123), "+0.12%");
  test.equal(f(.0123), "+1.2%");
  test.equal(f(.123), "+12%");
  test.equal(f(1.23), "+120%");
  test.equal(f(-.00123), "-0.12%");
  test.equal(f(-.0123), "-1.2%");
  test.equal(f(-.123), "-12%");
  test.equal(f(-1.23), "-120%");
  test.end();
});
