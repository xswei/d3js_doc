var tape = require("tape"),
    dsv = require("../"),
    fs = require("fs"),
    table = require("./table");

tape("tsvParse(string) returns the expected objects", function(test) {
  test.deepEqual(dsv.tsvParse("a\tb\tc\n1\t2\t3\n"), table([{a: "1", b: "2", c: "3"}], ["a", "b", "c"]));
  test.deepEqual(dsv.tsvParse(fs.readFileSync("test/data/sample.tsv", "utf-8")), table([{Hello: "42", World: "\"fish\""}], ["Hello", "World"]));
  test.end();
});

tape("tsvParse(string) does not strip whitespace", function(test) {
  test.deepEqual(dsv.tsvParse("a\tb\tc\n 1\t 2\t3\n"), table([{a: " 1", b: " 2", c: "3"}], ["a", "b", "c"]));
  test.end();
});

tape("tsvParse(string) parses quoted values", function(test) {
  test.deepEqual(dsv.tsvParse("a\tb\tc\n\"1\"\t2\t3"), table([{a: "1", b: "2", c: "3"}], ["a", "b", "c"]));
  test.deepEqual(dsv.tsvParse("a\tb\tc\n\"1\"\t2\t3\n"), table([{a: "1", b: "2", c: "3"}], ["a", "b", "c"]));
  test.end();
});

tape("tsvParse(string) parses quoted values with quotes", function(test) {
  test.deepEqual(dsv.tsvParse("a\n\"\"\"hello\"\"\""), table([{a: "\"hello\""}], ["a"]));
  test.end();
});

tape("tsvParse(string) parses quoted values with newlines", function(test) {
  test.deepEqual(dsv.tsvParse("a\n\"new\nline\""), table([{a: "new\nline"}], ["a"]));
  test.deepEqual(dsv.tsvParse("a\n\"new\rline\""), table([{a: "new\rline"}], ["a"]));
  test.deepEqual(dsv.tsvParse("a\n\"new\r\nline\""), table([{a: "new\r\nline"}], ["a"]));
  test.end();
});

tape("tsvParse(string) observes Unix, Mac and DOS newlines", function(test) {
  test.deepEqual(dsv.tsvParse("a\tb\tc\n1\t2\t3\n4\t5\t\"6\"\n7\t8\t9"), table([{a: "1", b: "2", c: "3"}, {a: "4", b: "5", c: "6"}, {a: "7", b: "8", c: "9"}], ["a", "b", "c"]));
  test.deepEqual(dsv.tsvParse("a\tb\tc\r1\t2\t3\r4\t5\t\"6\"\r7\t8\t9"), table([{a: "1", b: "2", c: "3"}, {a: "4", b: "5", c: "6"}, {a: "7", b: "8", c: "9"}], ["a", "b", "c"]));
  test.deepEqual(dsv.tsvParse("a\tb\tc\r\n1\t2\t3\r\n4\t5\t\"6\"\r\n7\t8\t9"), table([{a: "1", b: "2", c: "3"}, {a: "4", b: "5", c: "6"}, {a: "7", b: "8", c: "9"}], ["a", "b", "c"]));
  test.end();
});

tape("tsvParse(string, row) returns the expected converted objects", function(test) {
  function row(d) { d.Hello = -d.Hello; return d; }
  test.deepEqual(dsv.tsvParse(fs.readFileSync("test/data/sample.tsv", "utf-8"), row), table([{Hello: -42, World: "\"fish\""}], ["Hello", "World"]));
  test.deepEqual(dsv.tsvParse("a\tb\tc\n1\t2\t3\n", function(d) { return d; }), table([{a: "1", b: "2", c: "3"}], ["a", "b", "c"]));
  test.end();
});

tape("tsvParse(string, row) skips rows if row returns null or undefined", function(test) {
  function row(d, i) { return [d, null, undefined, false][i]; }
  test.deepEqual(dsv.tsvParse("field\n42\n\n\n\n", row), table([{field: "42"}, false], ["field"]));
  test.deepEqual(dsv.tsvParse("a\tb\tc\n1\t2\t3\n2\t3\t4", function(d) { return d.a & 1 ? null : d; }), table([{a: "2", b: "3", c: "4"}], ["a", "b", "c"]));
  test.deepEqual(dsv.tsvParse("a\tb\tc\n1\t2\t3\n2\t3\t4", function(d) { return d.a & 1 ? undefined : d; }), table([{a: "2", b: "3", c: "4"}], ["a", "b", "c"]));
  test.end();
});

tape("tsvParse(string, row) invokes row(d, i) for each row d, in order", function(test) {
  var rows = [];
  dsv.tsvParse("a\n1\n2\n3\n4", function(d, i) { rows.push({d: d, i: i}); });
  test.deepEqual(rows, [{d: {a: "1"}, i: 0}, {d: {a: "2"}, i: 1}, {d: {a: "3"}, i: 2}, {d: {a: "4"}, i: 3}]);
  test.end();
});

tape("tsvParseRows(string) returns the expected array of array of string", function(test) {
  test.deepEqual(dsv.tsvParseRows("a\tb\tc\n"), [["a", "b", "c"]]);
  test.end();
});

tape("tsvParseRows(string) parses quoted values", function(test) {
  test.deepEqual(dsv.tsvParseRows("\"1\"\t2\t3\n"), [["1", "2", "3"]]);
  test.deepEqual(dsv.tsvParseRows("\"hello\""), [["hello"]]);
  test.end();
});

tape("tsvParseRows(string) parses quoted values with quotes", function(test) {
  test.deepEqual(dsv.tsvParseRows("\"\"\"hello\"\"\""), [["\"hello\""]]);
  test.end();
});

tape("tsvParseRows(string) parses quoted values with newlines", function(test) {
  test.deepEqual(dsv.tsvParseRows("\"new\nline\""), [["new\nline"]]);
  test.deepEqual(dsv.tsvParseRows("\"new\rline\""), [["new\rline"]]);
  test.deepEqual(dsv.tsvParseRows("\"new\r\nline\""), [["new\r\nline"]]);
  test.end();
});

tape("tsvParseRows(string) parses Unix, Mac and DOS newlines", function(test) {
  test.deepEqual(dsv.tsvParseRows("a\tb\tc\n1\t2\t3\n4\t5\t\"6\"\n7\t8\t9"), [["a", "b", "c"], ["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"]]);
  test.deepEqual(dsv.tsvParseRows("a\tb\tc\r1\t2\t3\r4\t5\t\"6\"\r7\t8\t9"), [["a", "b", "c"], ["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"]]);
  test.deepEqual(dsv.tsvParseRows("a\tb\tc\r\n1\t2\t3\r\n4\t5\t\"6\"\r\n7\t8\t9"), [["a", "b", "c"], ["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"]]);
  test.end();
});

tape("tsvParseRows(string, row) returns the expected converted array of array of string", function(test) {
  function row(d, i) { if (i) d[0] = -d[0]; return d; }
  test.deepEqual(dsv.tsvParseRows(fs.readFileSync("test/data/sample.tsv", "utf-8"), row), [["Hello", "World"], [-42, "\"fish\""]]);
  test.deepEqual(dsv.tsvParseRows("a\tb\tc\n1\t2\t3\n", function(d) { return d; }), [["a", "b", "c"], ["1", "2", "3"]]);
  test.end();
});

tape("tsvParseRows(string, row) skips rows if row returns null or undefined", function(test) {
  function row(d, i) { return [d, null, undefined, false][i]; }
  test.deepEqual(dsv.tsvParseRows("field\n42\n\n\n", row), [["field"], false]);
  test.deepEqual(dsv.tsvParseRows("a\tb\tc\n1\t2\t3\n2\t3\t4", function(d, i) { return i & 1 ? null : d; }), [["a", "b", "c"], ["2", "3", "4"]]);
  test.deepEqual(dsv.tsvParseRows("a\tb\tc\n1\t2\t3\n2\t3\t4", function(d, i) { return i & 1 ? undefined : d; }), [["a", "b", "c"], ["2", "3", "4"]]);
  test.end();
});

tape("tsvParseRows(string, row) invokes row(d, i) for each row d, in order", function(test) {
  var rows = [];
  dsv.tsvParseRows("a\n1\n2\n3\n4", function(d, i) { rows.push({d: d, i: i}); });
  test.deepEqual(rows, [{d: ["a"], i: 0}, {d: ["1"], i: 1}, {d: ["2"], i: 2}, {d: ["3"], i: 3}, {d: ["4"], i: 4}]);
  test.end();
});

tape("tsvFormat(array) takes an array of objects as input", function(test) {
  test.deepEqual(dsv.tsvFormat([{a: 1, b: 2, c: 3}]), "a\tb\tc\n1\t2\t3");
  test.end();
});

tape("tsvFormat(array) escapes field names and values containing delimiters", function(test) {
  test.deepEqual(dsv.tsvFormat([{"foo\tbar": true}]), "\"foo\tbar\"\ntrue");
  test.deepEqual(dsv.tsvFormat([{field: "foo\tbar"}]), "field\n\"foo\tbar\"");
  test.end();
});

tape("tsvFormat(array) computes the union of all fields", function(test) {
  test.deepEqual(dsv.tsvFormat([{a: 1}, {a: 1, b: 2}, {a: 1, b: 2, c: 3}, {b: 1, c: 2}, {c: 1}]), "a\tb\tc\n1\t\t\n1\t2\t\n1\t2\t3\n\t1\t2\n\t\t1");
  test.end();
});

tape("tsvFormat(array) orders fields by first-seen", function(test) {
  test.deepEqual(dsv.tsvFormat([{a: 1, b: 2}, {c: 3, b: 4}, {c: 5, a: 1, b: 2}]), "a\tb\tc\n1\t2\t\n\t4\t3\n1\t2\t5");
  test.end();
});

tape("tsvFormat(array, columns) observes the specified array of column names", function(test) {
  test.deepEqual(dsv.tsvFormat([{a: 1, b: 2, c: 3}], ["c", "b", "a"]), "c\tb\ta\n3\t2\t1");
  test.deepEqual(dsv.tsvFormat([{a: 1, b: 2, c: 3}], ["c", "a"]), "c\ta\n3\t1");
  test.deepEqual(dsv.tsvFormat([{a: 1, b: 2, c: 3}], []), "\n");
  test.deepEqual(dsv.tsvFormat([{a: 1, b: 2, c: 3}], ["d"]), "d\n");
  test.end();
});

tape("tsvFormatRows(array) takes an array of array of string as input", function(test) {
  test.deepEqual(dsv.tsvFormatRows([["a", "b", "c"], ["1", "2", "3"]]), "a\tb\tc\n1\t2\t3");
  test.end();
});

tape("tsvFormatRows(array) separates lines using Unix newline", function(test) {
  test.deepEqual(dsv.tsvFormatRows([[], []]), "\n");
  test.end();
});

tape("tsvFormatRows(array) does not strip whitespace", function(test) {
  test.deepEqual(dsv.tsvFormatRows([["a ", " b", "c"], ["1", "2", "3 "]]), "a \t b\tc\n1\t2\t3 ");
  test.end();
});

tape("tsvFormatRows(array) does not quote simple values", function(test) {
  test.deepEqual(dsv.tsvFormatRows([["a"], [1]]), "a\n1");
  test.end();
});

tape("tsvFormatRows(array) escapes double quotes", function(test) {
  test.deepEqual(dsv.tsvFormatRows([["\"fish\""]]), "\"\"\"fish\"\"\"");
  test.end();
});

tape("tsvFormatRows(array) escapes Unix newlines", function(test) {
  test.deepEqual(dsv.tsvFormatRows([["new\nline"]]), "\"new\nline\"");
  test.end();
});

tape("tsvFormatRows(array) escapes values containing delimiters", function(test) {
  test.deepEqual(dsv.tsvFormatRows([["oxford\ttab"]]), "\"oxford\ttab\"");
  test.end();
});
