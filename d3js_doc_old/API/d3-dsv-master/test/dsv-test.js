var tape = require("tape"),
    dsv = require("../"),
    fs = require("fs"),
    table = require("./table");

var psv = dsv.dsvFormat("|");

tape("dsv(\"|\").parse(string) returns the expected objects", function(test) {
  test.deepEqual(psv.parse("a|b|c\n1|2|3\n"), table([{a: "1", b: "2", c: "3"}], ["a", "b", "c"]));
  test.deepEqual(psv.parse(fs.readFileSync("test/data/sample.psv", "utf-8")), table([{Hello: "42", World: "\"fish\""}], ["Hello", "World"]));
  test.end();
});

tape("dsv(\"|\").parse(string) does not strip whitespace", function(test) {
  test.deepEqual(psv.parse("a|b|c\n 1| 2|3\n"), table([{a: " 1", b: " 2", c: "3"}], ["a", "b", "c"]));
  test.end();
});

tape("dsv(\"|\").parse(string) parses quoted values", function(test) {
  test.deepEqual(psv.parse("a|b|c\n\"1\"|2|3"), table([{a: "1", b: "2", c: "3"}], ["a", "b", "c"]));
  test.deepEqual(psv.parse("a|b|c\n\"1\"|2|3\n"), table([{a: "1", b: "2", c: "3"}], ["a", "b", "c"]));
  test.end();
});

tape("dsv(\"|\").parse(string) parses quoted values with quotes", function(test) {
  test.deepEqual(psv.parse("a\n\"\"\"hello\"\"\""), table([{a: "\"hello\""}], ["a"]));
  test.end();
});

tape("dsv(\"|\").parse(string) parses quoted values with newlines", function(test) {
  test.deepEqual(psv.parse("a\n\"new\nline\""), table([{a: "new\nline"}], ["a"]));
  test.deepEqual(psv.parse("a\n\"new\rline\""), table([{a: "new\rline"}], ["a"]));
  test.deepEqual(psv.parse("a\n\"new\r\nline\""), table([{a: "new\r\nline"}], ["a"]));
  test.end();
});

tape("dsv(\"|\").parse(string) observes Unix, Mac and DOS newlines", function(test) {
  test.deepEqual(psv.parse("a|b|c\n1|2|3\n4|5|\"6\"\n7|8|9"), table([{a: "1", b: "2", c: "3"}, {a: "4", b: "5", c: "6"}, {a: "7", b: "8", c: "9"}], ["a", "b", "c"]));
  test.deepEqual(psv.parse("a|b|c\r1|2|3\r4|5|\"6\"\r7|8|9"), table([{a: "1", b: "2", c: "3"}, {a: "4", b: "5", c: "6"}, {a: "7", b: "8", c: "9"}], ["a", "b", "c"]));
  test.deepEqual(psv.parse("a|b|c\r\n1|2|3\r\n4|5|\"6\"\r\n7|8|9"), table([{a: "1", b: "2", c: "3"}, {a: "4", b: "5", c: "6"}, {a: "7", b: "8", c: "9"}], ["a", "b", "c"]));
  test.end();
});

tape("dsv(\"|\").parse(string, row) returns the expected converted objects", function(test) {
  function row(d) { d.Hello = -d.Hello; return d; }
  test.deepEqual(psv.parse(fs.readFileSync("test/data/sample.psv", "utf-8"), row), table([{Hello: -42, World: "\"fish\""}], ["Hello", "World"]));
  test.deepEqual(psv.parse("a|b|c\n1|2|3\n", function(d) { return d; }), table([{a: "1", b: "2", c: "3"}], ["a", "b", "c"]));
  test.end();
});

tape("dsv(\"|\").parse(string, row) skips rows if row returns null or undefined", function(test) {
  function row(d, i) { return [d, null, undefined, false][i]; }
  test.deepEqual(psv.parse("field\n42\n\n\n\n", row), table([{field: "42"}, false], ["field"]));
  test.deepEqual(psv.parse("a|b|c\n1|2|3\n2|3|4", function(d) { return d.a & 1 ? null : d; }), table([{a: "2", b: "3", c: "4"}], ["a", "b", "c"]));
  test.deepEqual(psv.parse("a|b|c\n1|2|3\n2|3|4", function(d) { return d.a & 1 ? undefined : d; }), table([{a: "2", b: "3", c: "4"}], ["a", "b", "c"]));
  test.end();
});

tape("dsv(\"|\").parse(string, row) invokes row(d, i, columns) for each row d, in order", function(test) {
  var rows = [];
  psv.parse("a\n1\n2\n3\n4", function(d, i, columns) { rows.push({d: d, i: i, columns: columns}); });
  test.deepEqual(rows, [{d: {a: "1"}, i: 0, columns: ["a"]}, {d: {a: "2"}, i: 1, columns: ["a"]}, {d: {a: "3"}, i: 2, columns: ["a"]}, {d: {a: "4"}, i: 3, columns: ["a"]}]);
  test.end();
});

tape("dsv(\"|\").parseRows(string) returns the expected array of array of string", function(test) {
  test.deepEqual(psv.parseRows("a|b|c\n"), [["a", "b", "c"]]);
  test.end();
});

tape("dsv(\"|\").parseRows(string) parses quoted values", function(test) {
  test.deepEqual(psv.parseRows("\"1\"|2|3\n"), [["1", "2", "3"]]);
  test.deepEqual(psv.parseRows("\"hello\""), [["hello"]]);
  test.end();
});

tape("dsv(\"|\").parseRows(string) parses quoted values with quotes", function(test) {
  test.deepEqual(psv.parseRows("\"\"\"hello\"\"\""), [["\"hello\""]]);
  test.end();
});

tape("dsv(\"|\").parseRows(string) parses quoted values with newlines", function(test) {
  test.deepEqual(psv.parseRows("\"new\nline\""), [["new\nline"]]);
  test.deepEqual(psv.parseRows("\"new\rline\""), [["new\rline"]]);
  test.deepEqual(psv.parseRows("\"new\r\nline\""), [["new\r\nline"]]);
  test.end();
});

tape("dsv(\"|\").parseRows(string) parses Unix, Mac and DOS newlines", function(test) {
  test.deepEqual(psv.parseRows("a|b|c\n1|2|3\n4|5|\"6\"\n7|8|9"), [["a", "b", "c"], ["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"]]);
  test.deepEqual(psv.parseRows("a|b|c\r1|2|3\r4|5|\"6\"\r7|8|9"), [["a", "b", "c"], ["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"]]);
  test.deepEqual(psv.parseRows("a|b|c\r\n1|2|3\r\n4|5|\"6\"\r\n7|8|9"), [["a", "b", "c"], ["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"]]);
  test.end();
});

tape("dsv(\"|\").parseRows(string, row) returns the expected converted array of array of string", function(test) {
  function row(d, i) { if (i) d[0] = -d[0]; return d; }
  test.deepEqual(psv.parseRows(fs.readFileSync("test/data/sample.psv", "utf-8"), row), [["Hello", "World"], [-42, "\"fish\""]]);
  test.deepEqual(psv.parseRows("a|b|c\n1|2|3\n", function(d) { return d; }), [["a", "b", "c"], ["1", "2", "3"]]);
  test.end();
});

tape("dsv(\"|\").parseRows(string, row) skips rows if row returns null or undefined", function(test) {
  function row(d, i) { return [d, null, undefined, false][i]; }
  test.deepEqual(psv.parseRows("field\n42\n\n\n", row), [["field"], false]);
  test.deepEqual(psv.parseRows("a|b|c\n1|2|3\n2|3|4", function(d, i) { return i & 1 ? null : d; }), [["a", "b", "c"], ["2", "3", "4"]]);
  test.deepEqual(psv.parseRows("a|b|c\n1|2|3\n2|3|4", function(d, i) { return i & 1 ? undefined : d; }), [["a", "b", "c"], ["2", "3", "4"]]);
  test.end();
});

tape("dsv(\"|\").parseRows(string, row) invokes row(d, i) for each row d, in order", function(test) {
  var rows = [];
  psv.parseRows("a\n1\n2\n3\n4", function(d, i) { rows.push({d: d, i: i}); });
  test.deepEqual(rows, [{d: ["a"], i: 0}, {d: ["1"], i: 1}, {d: ["2"], i: 2}, {d: ["3"], i: 3}, {d: ["4"], i: 4}]);
  test.end();
});

tape("dsv(\"|\").format(array) takes an array of objects as input", function(test) {
  test.deepEqual(psv.format([{a: 1, b: 2, c: 3}]), "a|b|c\n1|2|3");
  test.end();
});

tape("dsv(\"|\").format(array) escapes field names and values containing delimiters", function(test) {
  test.deepEqual(psv.format([{"foo|bar": true}]), "\"foo|bar\"\ntrue");
  test.deepEqual(psv.format([{field: "foo|bar"}]), "field\n\"foo|bar\"");
  test.end();
});

tape("dsv(\"|\").format(array) computes the union of all fields", function(test) {
  test.deepEqual(psv.format([{a: 1}, {a: 1, b: 2}, {a: 1, b: 2, c: 3}, {b: 1, c: 2}, {c: 1}]), "a|b|c\n1||\n1|2|\n1|2|3\n|1|2\n||1");
  test.end();
});

tape("dsv(\"|\").format(array) orders fields by first-seen", function(test) {
  test.deepEqual(psv.format([{a: 1, b: 2}, {c: 3, b: 4}, {c: 5, a: 1, b: 2}]), "a|b|c\n1|2|\n|4|3\n1|2|5");
  test.end();
});

tape("dsv(\"|\").format(array, columns) observes the specified array of column names", function(test) {
  test.deepEqual(psv.format([{a: 1, b: 2, c: 3}], ["c", "b", "a"]), "c|b|a\n3|2|1");
  test.deepEqual(psv.format([{a: 1, b: 2, c: 3}], ["c", "a"]), "c|a\n3|1");
  test.deepEqual(psv.format([{a: 1, b: 2, c: 3}], []), "\n");
  test.deepEqual(psv.format([{a: 1, b: 2, c: 3}], ["d"]), "d\n");
  test.end();
});

tape("dsv(\"|\").formatRows(array) takes an array of array of string as input", function(test) {
  test.deepEqual(psv.formatRows([["a", "b", "c"], ["1", "2", "3"]]), "a|b|c\n1|2|3");
  test.end();
});

tape("dsv(\"|\").formatRows(array) separates lines using Unix newline", function(test) {
  test.deepEqual(psv.formatRows([[], []]), "\n");
  test.end();
});

tape("dsv(\"|\").formatRows(array) does not strip whitespace", function(test) {
  test.deepEqual(psv.formatRows([["a ", " b", "c"], ["1", "2", "3 "]]), "a | b|c\n1|2|3 ");
  test.end();
});

tape("dsv(\"|\").formatRows(array) does not quote simple values", function(test) {
  test.deepEqual(psv.formatRows([["a"], [1]]), "a\n1");
  test.end();
});

tape("dsv(\"|\").formatRows(array) escapes double quotes", function(test) {
  test.deepEqual(psv.formatRows([["\"fish\""]]), "\"\"\"fish\"\"\"");
  test.end();
});

tape("dsv(\"|\").formatRows(array) escapes Unix newlines", function(test) {
  test.deepEqual(psv.formatRows([["new\nline"]]), "\"new\nline\"");
  test.end();
});

tape("dsv(\"|\").formatRows(array) escapes values containing delimiters", function(test) {
  test.deepEqual(psv.formatRows([["oxford|tab"]]), "\"oxford|tab\"");
  test.end();
});
