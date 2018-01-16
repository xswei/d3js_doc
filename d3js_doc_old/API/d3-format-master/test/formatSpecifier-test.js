var tape = require("tape"),
    format = require("../");

tape("formatSpecifier(specifier) throws an error for invalid formats", function(test) {
  test.throws(function() { format.formatSpecifier("foo"); }, /invalid format: foo/);
  test.throws(function() { format.formatSpecifier(".-2s"); }, /invalid format: \.-2s/);
  test.throws(function() { format.formatSpecifier(".f"); }, /invalid format: \.f/);
  test.end();
});

tape("formatSpecifier(\"\") has the expected defaults", function(test) {
  var s = format.formatSpecifier("");
  test.equal(s.fill, " ");
  test.equal(s.align, ">");
  test.equal(s.sign, "-");
  test.equal(s.symbol, "");
  test.equal(s.zero, false);
  test.equal(s.width, undefined);
  test.equal(s.comma, false);
  test.equal(s.precision, undefined);
  test.equal(s.type, "");
  test.end();
});

tape("formatSpecifier(specifier) uses the none type for unknown types", function(test) {
  test.equal(format.formatSpecifier("q").type, "");
  test.equal(format.formatSpecifier("S").type, "");
  test.end();
});

tape("formatSpecifier(\"n\") is an alias for \",g\"", function(test) {
  var s = format.formatSpecifier("n")
  test.equal(s.comma, true);
  test.equal(s.type, "g");
  test.end();
});

tape("formatSpecifier(\"0\") is an alias for \"0=\"", function(test) {
  var s = format.formatSpecifier("0")
  test.equal(s.zero, true);
  test.equal(s.fill, "0");
  test.equal(s.align, "=");
  test.end();
});

tape("formatSpecifier(specifier).toString() reflects current field values", function(test) {
  var s = format.formatSpecifier("");
  test.equal((s.fill = "_", s) + "", "_>-");
  test.equal((s.align = "^", s) + "", "_^-");
  test.equal((s.sign = "+", s) + "", "_^+");
  test.equal((s.symbol = "$", s) + "", "_^+$");
  test.equal((s.zero = true, s) + "", "_^+$0");
  test.equal((s.width = 12, s) + "", "_^+$012");
  test.equal((s.comma = true, s) + "", "_^+$012,");
  test.equal((s.precision = 2, s) + "", "_^+$012,.2");
  test.equal((s.type = "f", s) + "", "_^+$012,.2f");
  test.equal(format.format(s)(42), "+$0,000,042.00");
  test.end();
});

tape("formatSpecifier(specifier).toString() clamps precision to zero", function(test) {
  var s = format.formatSpecifier("");
  test.equal((s.precision = -1, s) + "", " >-.0");
  test.end();
});

tape("formatSpecifier(specifier).toString() clamps width to one", function(test) {
  var s = format.formatSpecifier("");
  test.equal((s.width = -1, s) + "", " >-1");
  test.end();
});
