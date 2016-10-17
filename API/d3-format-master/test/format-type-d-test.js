var tape = require("tape"),
    format = require("../");

tape("format(\"d\") can zero fill", function(test) {
  var f = format.format("08d");
  test.equal(f(0), "00000000");
  test.equal(f(42), "00000042");
  test.equal(f(42000000), "42000000");
  test.equal(f(420000000), "420000000");
  test.equal(f(-4), "-0000004");
  test.equal(f(-42), "-0000042");
  test.equal(f(-4200000), "-4200000");
  test.equal(f(-42000000), "-42000000");
  test.end();
});

tape("format(\"d\") can space fill", function(test) {
  var f = format.format("8d");
  test.equal(f(0), "       0");
  test.equal(f(42), "      42");
  test.equal(f(42000000), "42000000");
  test.equal(f(420000000), "420000000");
  test.equal(f(-4), "      -4");
  test.equal(f(-42), "     -42");
  test.equal(f(-4200000), "-4200000");
  test.equal(f(-42000000), "-42000000");
  test.end();
});

tape("format(\"d\") can underscore fill", function(test) {
  var f = format.format("_>8d");
  test.equal(f(0), "_______0");
  test.equal(f(42), "______42");
  test.equal(f(42000000), "42000000");
  test.equal(f(420000000), "420000000");
  test.equal(f(-4), "______-4");
  test.equal(f(-42), "_____-42");
  test.equal(f(-4200000), "-4200000");
  test.equal(f(-42000000), "-42000000");
  test.end();
});

tape("format(\"d\") can zero fill with sign and group", function(test) {
  var f = format.format("+08,d");
  test.equal(f(0), "+0,000,000");
  test.equal(f(42), "+0,000,042");
  test.equal(f(42000000), "+42,000,000");
  test.equal(f(420000000), "+420,000,000");
  test.equal(f(-4), "-0,000,004");
  test.equal(f(-42), "-0,000,042");
  test.equal(f(-4200000), "-4,200,000");
  test.equal(f(-42000000), "-42,000,000");
  test.end();
});

tape("format(\"d\") always uses zero precision", function(test) {
  var f = format.format(".2d");
  test.equal(f(0), "0");
  test.equal(f(42), "42");
  test.equal(f(-4.2), "-4");
  test.end();
});

tape("format(\"d\") rounds non-integers", function(test) {
  var f = format.format("d");
  test.equal(f(4.2), "4");
  test.end();
});

tape("format(\",d\") can group thousands", function(test) {
  var f = format.format(",d");
  test.equal(f(0), "0");
  test.equal(f(42), "42");
  test.equal(f(42000000), "42,000,000");
  test.equal(f(420000000), "420,000,000");
  test.equal(f(-4), "-4");
  test.equal(f(-42), "-42");
  test.equal(f(-4200000), "-4,200,000");
  test.equal(f(-42000000), "-42,000,000");
  test.equal(f(1e21), "1e+21");
  test.end();
});

tape("format(\"0,d\") can group thousands and zero fill", function(test) {
  test.equal(format.format("01,d")(0), "0");
  test.equal(format.format("01,d")(0), "0");
  test.equal(format.format("02,d")(0), "00");
  test.equal(format.format("03,d")(0), "000");
  test.equal(format.format("04,d")(0), "0,000");
  test.equal(format.format("05,d")(0), "0,000");
  test.equal(format.format("06,d")(0), "00,000");
  test.equal(format.format("08,d")(0), "0,000,000");
  test.equal(format.format("013,d")(0), "0,000,000,000");
  test.equal(format.format("021,d")(0), "0,000,000,000,000,000");
  test.equal(format.format("013,d")(-42000000), "-0,042,000,000");
  test.equal(format.format("012,d")(1e21), "0,000,001e+21");
  test.equal(format.format("013,d")(1e21), "0,000,001e+21");
  test.equal(format.format("014,d")(1e21), "00,000,001e+21");
  test.equal(format.format("015,d")(1e21), "000,000,001e+21");
  test.end();
});

tape("format(\"0,d\") can group thousands and zero fill with overflow", function(test) {
  test.equal(format.format("01,d")(1), "1");
  test.equal(format.format("01,d")(1), "1");
  test.equal(format.format("02,d")(12), "12");
  test.equal(format.format("03,d")(123), "123");
  test.equal(format.format("05,d")(12345), "12,345");
  test.equal(format.format("08,d")(12345678), "12,345,678");
  test.equal(format.format("013,d")(1234567890123), "1,234,567,890,123");
  test.end();
});

tape("format(\",d\") can group thousands and space fill", function(test) {
  test.equal(format.format("1,d")(0), "0");
  test.equal(format.format("1,d")(0), "0");
  test.equal(format.format("2,d")(0), " 0");
  test.equal(format.format("3,d")(0), "  0");
  test.equal(format.format("5,d")(0), "    0");
  test.equal(format.format("8,d")(0), "       0");
  test.equal(format.format("13,d")(0), "            0");
  test.equal(format.format("21,d")(0), "                    0");
  test.end();
});

tape("format(\",d\") can group thousands and space fill with overflow", function(test) {
  test.equal(format.format("1,d")(1), "1");
  test.equal(format.format("1,d")(1), "1");
  test.equal(format.format("2,d")(12), "12");
  test.equal(format.format("3,d")(123), "123");
  test.equal(format.format("5,d")(12345), "12,345");
  test.equal(format.format("8,d")(12345678), "12,345,678");
  test.equal(format.format("13,d")(1234567890123), "1,234,567,890,123");
  test.end();
});

tape("format(\"<d\") align left", function(test) {
  test.equal(format.format("<1,d")(0), "0");
  test.equal(format.format("<1,d")(0), "0");
  test.equal(format.format("<2,d")(0), "0 ");
  test.equal(format.format("<3,d")(0), "0  ");
  test.equal(format.format("<5,d")(0), "0    ");
  test.equal(format.format("<8,d")(0), "0       ");
  test.equal(format.format("<13,d")(0), "0            ");
  test.equal(format.format("<21,d")(0), "0                    ");
  test.end();
});

tape("format(\">d\") align right", function(test) {
  test.equal(format.format(">1,d")(0), "0");
  test.equal(format.format(">1,d")(0), "0");
  test.equal(format.format(">2,d")(0), " 0");
  test.equal(format.format(">3,d")(0), "  0");
  test.equal(format.format(">5,d")(0), "    0");
  test.equal(format.format(">8,d")(0), "       0");
  test.equal(format.format(">13,d")(0), "            0");
  test.equal(format.format(">21,d")(0), "                    0");
  test.equal(format.format(">21,d")(1000), "                1,000");
  test.equal(format.format(">21,d")(1e21), "                1e+21");
  test.end();
});

tape("format(\"^d\") align center", function(test) {
  test.equal(format.format("^1,d")(0), "0");
  test.equal(format.format("^1,d")(0), "0");
  test.equal(format.format("^2,d")(0), "0 ");
  test.equal(format.format("^3,d")(0), " 0 ");
  test.equal(format.format("^5,d")(0), "  0  ");
  test.equal(format.format("^8,d")(0), "   0    ");
  test.equal(format.format("^13,d")(0), "      0      ");
  test.equal(format.format("^21,d")(0), "          0          ");
  test.equal(format.format("^21,d")(1000), "        1,000        ");
  test.equal(format.format("^21,d")(1e21), "        1e+21        ");
  test.end();
});

tape("format(\"=+,d\") pad after sign", function(test) {
  test.equal(format.format("=+1,d")(0), "+0");
  test.equal(format.format("=+1,d")(0), "+0");
  test.equal(format.format("=+2,d")(0), "+0");
  test.equal(format.format("=+3,d")(0), "+ 0");
  test.equal(format.format("=+5,d")(0), "+   0");
  test.equal(format.format("=+8,d")(0), "+      0");
  test.equal(format.format("=+13,d")(0), "+           0");
  test.equal(format.format("=+21,d")(0), "+                   0");
  test.equal(format.format("=+21,d")(1e21), "+               1e+21");
  test.end();
});

tape("format(\"=+$,d\") pad after sign with currency", function(test) {
  test.equal(format.format("=+$1,d")(0), "+$0");
  test.equal(format.format("=+$1,d")(0), "+$0");
  test.equal(format.format("=+$2,d")(0), "+$0");
  test.equal(format.format("=+$3,d")(0), "+$0");
  test.equal(format.format("=+$5,d")(0), "+$  0");
  test.equal(format.format("=+$8,d")(0), "+$     0");
  test.equal(format.format("=+$13,d")(0), "+$          0");
  test.equal(format.format("=+$21,d")(0), "+$                  0");
  test.equal(format.format("=+$21,d")(1e21), "+$              1e+21");
  test.end();
});

tape("format(\" ,d\") a space can denote positive numbers", function(test) {
  test.equal(format.format(" 1,d")(-1), "-1");
  test.equal(format.format(" 1,d")(0), " 0");
  test.equal(format.format(" 2,d")(0), " 0");
  test.equal(format.format(" 3,d")(0), "  0");
  test.equal(format.format(" 5,d")(0), "    0");
  test.equal(format.format(" 8,d")(0), "       0");
  test.equal(format.format(" 13,d")(0), "            0");
  test.equal(format.format(" 21,d")(0), "                    0");
  test.equal(format.format(" 21,d")(1e21), "                1e+21");
  test.end();
});

tape("format(\"-,d\") explicitly only use a sign for negative numbers", function(test) {
  test.equal(format.format("-1,d")(-1), "-1");
  test.equal(format.format("-1,d")(0), "0");
  test.equal(format.format("-2,d")(0), " 0");
  test.equal(format.format("-3,d")(0), "  0");
  test.equal(format.format("-5,d")(0), "    0");
  test.equal(format.format("-8,d")(0), "       0");
  test.equal(format.format("-13,d")(0), "            0");
  test.equal(format.format("-21,d")(0), "                    0");
  test.end();
});

tape("format(\"d\") can format negative zero as zero", function(test) {
  test.equal(format.format("1d")(-0), "0");
  test.equal(format.format("1d")(-1e-12), "0");
  test.end();
});
