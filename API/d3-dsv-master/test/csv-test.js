var tape = require("tape"),
    dsv = require("../"),
    fs = require("fs"),
    table = require("./table");

tape("csvParse(string) returns the expected objects", function(test) {
  test.deepEqual(dsv.csvParse("a,b,c\n1,2,3\n"), table([{a: "1", b: "2", c: "3"}], ["a", "b", "c"]));
  test.deepEqual(dsv.csvParse(fs.readFileSync("test/data/sample.csv", "utf-8")), table([{Hello: "42", World: "\"fish\""}], ["Hello", "World"]));
  test.end();
});

tape("csvParse(string) does not strip whitespace", function(test) {
  test.deepEqual(dsv.csvParse("a,b,c\n 1, 2,3\n"), table([{a: " 1", b: " 2", c: "3"}], ["a", "b", "c"]));
  test.end();
});

tape("csvParse(string) parses quoted values", function(test) {
  test.deepEqual(dsv.csvParse("a,b,c\n\"1\",2,3"), table([{a: "1", b: "2", c: "3"}], ["a", "b", "c"]));
  test.deepEqual(dsv.csvParse("a,b,c\n\"1\",2,3\n"), table([{a: "1", b: "2", c: "3"}], ["a", "b", "c"]));
  test.end();
});

tape("csvParse(string) parses quoted values with quotes", function(test) {
  test.deepEqual(dsv.csvParse("a\n\"\"\"hello\"\"\""), table([{a: "\"hello\""}], ["a"]));
  test.end();
});

tape("csvParse(string) parses quoted values with newlines", function(test) {
  test.deepEqual(dsv.csvParse("a\n\"new\nline\""), table([{a: "new\nline"}], ["a"]));
  test.deepEqual(dsv.csvParse("a\n\"new\rline\""), table([{a: "new\rline"}], ["a"]));
  test.deepEqual(dsv.csvParse("a\n\"new\r\nline\""), table([{a: "new\r\nline"}], ["a"]));
  test.end();
});

tape("csvParse(string) observes Unix, Mac and DOS newlines", function(test) {
  test.deepEqual(dsv.csvParse("a,b,c\n1,2,3\n4,5,\"6\"\n7,8,9"), table([{a: "1", b: "2", c: "3"}, {a: "4", b: "5", c: "6"}, {a: "7", b: "8", c: "9"}], ["a", "b", "c"]));
  test.deepEqual(dsv.csvParse("a,b,c\r1,2,3\r4,5,\"6\"\r7,8,9"), table([{a: "1", b: "2", c: "3"}, {a: "4", b: "5", c: "6"}, {a: "7", b: "8", c: "9"}], ["a", "b", "c"]));
  test.deepEqual(dsv.csvParse("a,b,c\r\n1,2,3\r\n4,5,\"6\"\r\n7,8,9"), table([{a: "1", b: "2", c: "3"}, {a: "4", b: "5", c: "6"}, {a: "7", b: "8", c: "9"}], ["a", "b", "c"]));
  test.end();
});

tape("csvParse(string) returns columns in the input order", function(test) {
  test.deepEqual(dsv.csvParse("a,b,c\n").columns, ["a", "b", "c"]);
  test.deepEqual(dsv.csvParse("a,c,b\n").columns, ["a", "c", "b"]);
  test.deepEqual(dsv.csvParse("a,0,1\n").columns, ["a", "0", "1"]);
  test.deepEqual(dsv.csvParse("1,0,a\n").columns, ["1", "0", "a"]);
  test.end();
});

tape("csvParse(string, row) returns the expected converted objects", function(test) {
  function row(d) { d.Hello = -d.Hello; return d; }
  test.deepEqual(dsv.csvParse(fs.readFileSync("test/data/sample.csv", "utf-8"), row), table([{Hello: -42, World: "\"fish\""}], ["Hello", "World"]));
  test.deepEqual(dsv.csvParse("a,b,c\n1,2,3\n", function(d) { return d; }), table([{a: "1", b: "2", c: "3"}], ["a", "b", "c"]));
  test.end();
});

tape("csvParse(string, row) skips rows if row returns null or undefined", function(test) {
  function row(d, i) { return [d, null, undefined, false][i]; }
  test.deepEqual(dsv.csvParse("field\n42\n\n\n\n", row), table([{field: "42"}, false], ["field"]));
  test.deepEqual(dsv.csvParse("a,b,c\n1,2,3\n2,3,4", function(d) { return d.a & 1 ? null : d; }), table([{a: "2", b: "3", c: "4"}], ["a", "b", "c"]));
  test.deepEqual(dsv.csvParse("a,b,c\n1,2,3\n2,3,4", function(d) { return d.a & 1 ? undefined : d; }), table([{a: "2", b: "3", c: "4"}], ["a", "b", "c"]));
  test.end();
});

tape("csvParse(string, row) calls row(d, i) for each row d, in order", function(test) {
  var rows = [];
  dsv.csvParse("a\n1\n2\n3\n4", function(d, i) { rows.push({d: d, i: i}); });
  test.deepEqual(rows, [{d: {a: "1"}, i: 0}, {d: {a: "2"}, i: 1}, {d: {a: "3"}, i: 2}, {d: {a: "4"}, i: 3}]);;
  test.end();
});

tape("csvParseRows(string) returns the expected array of array of string", function(test) {
  test.deepEqual(dsv.csvParseRows("a,b,c\n"), [["a", "b", "c"]]);
  test.end();
});

tape("csvParseRows(string) parses quoted values", function(test) {
  test.deepEqual(dsv.csvParseRows("\"1\",2,3\n"), [["1", "2", "3"]]);
  test.deepEqual(dsv.csvParseRows("\"hello\""), [["hello"]]);
  test.end();
});

tape("csvParseRows(string) parses quoted values with quotes", function(test) {
  test.deepEqual(dsv.csvParseRows("\"\"\"hello\"\"\""), [["\"hello\""]]);
  test.end();
});

tape("csvParseRows(string) parses quoted values with newlines", function(test) {
  test.deepEqual(dsv.csvParseRows("\"new\nline\""), [["new\nline"]]);
  test.deepEqual(dsv.csvParseRows("\"new\rline\""), [["new\rline"]]);
  test.deepEqual(dsv.csvParseRows("\"new\r\nline\""), [["new\r\nline"]]);
  test.end();
});

tape("csvParseRows(string) parses Unix, Mac and DOS newlines", function(test) {
  test.deepEqual(dsv.csvParseRows("a,b,c\n1,2,3\n4,5,\"6\"\n7,8,9"), [["a", "b", "c"], ["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"]]);
  test.deepEqual(dsv.csvParseRows("a,b,c\r1,2,3\r4,5,\"6\"\r7,8,9"), [["a", "b", "c"], ["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"]]);
  test.deepEqual(dsv.csvParseRows("a,b,c\r\n1,2,3\r\n4,5,\"6\"\r\n7,8,9"), [["a", "b", "c"], ["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"]]);
  test.end();
});

tape("csvParseRows(string, row) returns the expected converted array of array of string", function(test) {
  function row(d, i) { if (i) d[0] = -d[0]; return d; }
  test.deepEqual(dsv.csvParseRows(fs.readFileSync("test/data/sample.csv", "utf-8"), row), [["Hello", "World"], [-42, "\"fish\""]]);
  test.deepEqual(dsv.csvParseRows("a,b,c\n1,2,3\n", function(d) { return d; }), [["a", "b", "c"], ["1", "2", "3"]]);
  test.end();
});

tape("csvParseRows(string, row) skips rows if row returns null or undefined", function(test) {
  function row(d, i) { return [d, null, undefined, false][i]; }
  test.deepEqual(dsv.csvParseRows("field\n42\n\n\n", row), [["field"], false]);
  test.deepEqual(dsv.csvParseRows("a,b,c\n1,2,3\n2,3,4", function(d, i) { return i & 1 ? null : d; }), [["a", "b", "c"], ["2", "3", "4"]]);
  test.deepEqual(dsv.csvParseRows("a,b,c\n1,2,3\n2,3,4", function(d, i) { return i & 1 ? undefined : d; }), [["a", "b", "c"], ["2", "3", "4"]]);
  test.end();
});

tape("csvParseRows(string, row) invokes row(d, i) for each row d, in order", function(test) {
  var rows = [];
  dsv.csvParseRows("a\n1\n2\n3\n4", function(d, i) { rows.push({d: d, i: i}); });
  test.deepEqual(rows, [{d: ["a"], i: 0}, {d: ["1"], i: 1}, {d: ["2"], i: 2}, {d: ["3"], i: 3}, {d: ["4"], i: 4}]);
  test.end();
});

tape("csvFormat(array) takes an array of objects as input", function(test) {
  test.deepEqual(dsv.csvFormat([{a: 1, b: 2, c: 3}]), "a,b,c\n1,2,3");
  test.end();
});

tape("csvFormat(array) escapes field names and values containing delimiters", function(test) {
  test.deepEqual(dsv.csvFormat([{"foo,bar": true}]), "\"foo,bar\"\ntrue");
  test.deepEqual(dsv.csvFormat([{field: "foo,bar"}]), "field\n\"foo,bar\"");
  test.end();
});

tape("csvFormat(array) computes the union of all fields", function(test) {
  test.deepEqual(dsv.csvFormat([{a: 1}, {a: 1, b: 2}, {a: 1, b: 2, c: 3}, {b: 1, c: 2}, {c: 1}]), "a,b,c\n1,,\n1,2,\n1,2,3\n,1,2\n,,1");
  test.end();
});

tape("csvFormat(array) orders fields by first-seen", function(test) {
  test.deepEqual(dsv.csvFormat([{a: 1, b: 2}, {c: 3, b: 4}, {c: 5, a: 1, b: 2}]), "a,b,c\n1,2,\n,4,3\n1,2,5");
  test.end();
});

tape("csvFormat(array, columns) observes the specified array of column names", function(test) {
  test.deepEqual(dsv.csvFormat([{a: 1, b: 2, c: 3}], ["c", "b", "a"]), "c,b,a\n3,2,1");
  test.deepEqual(dsv.csvFormat([{a: 1, b: 2, c: 3}], ["c", "a"]), "c,a\n3,1");
  test.deepEqual(dsv.csvFormat([{a: 1, b: 2, c: 3}], []), "\n");
  test.deepEqual(dsv.csvFormat([{a: 1, b: 2, c: 3}], ["d"]), "d\n");
  test.end();
});

tape("csvFormat(array, columns) coerces column names to strings", function(test) {
  test.deepEqual(dsv.csvFormat([{a: 1, b: 2, "\"fish\"": 3}], [{toString: function() { return "\"fish\""; }}]), "\"\"\"fish\"\"\"\n3");
  test.deepEqual(dsv.csvFormat([{a: 1, b: 2, c: 3}], ["a", null, "b", undefined, "c"]), "a,,b,,c\n1,,2,,3");
  test.end();
});

tape("csvFormat(array, columns) coerces field values to strings", function(test) {
  test.deepEqual(dsv.csvFormat([{a: {toString: function() { return "\"fish\""; }}}]), "a\n\"\"\"fish\"\"\"");
  test.deepEqual(dsv.csvFormat([{a: null, b: undefined, c: 3}]), "a,b,c\n,,3");
  test.end();
});

tape("csvFormatRows(array) takes an array of array of string as input", function(test) {
  test.deepEqual(dsv.csvFormatRows([["a", "b", "c"], ["1", "2", "3"]]), "a,b,c\n1,2,3");
  test.end();
});

tape("csvFormatRows(array) separates lines using Unix newline", function(test) {
  test.deepEqual(dsv.csvFormatRows([[], []]), "\n");
  test.end();
});

tape("csvFormatRows(array) does not strip whitespace", function(test) {
  test.deepEqual(dsv.csvFormatRows([["a ", " b", "c"], ["1", "2", "3 "]]), "a , b,c\n1,2,3 ");
  test.end();
});

tape("csvFormatRows(array) does not quote simple values", function(test) {
  test.deepEqual(dsv.csvFormatRows([["a"], [1]]), "a\n1");
  test.end();
});

tape("csvFormatRows(array) escapes double quotes", function(test) {
  test.deepEqual(dsv.csvFormatRows([["\"fish\""]]), "\"\"\"fish\"\"\"");
  test.end();
});

tape("csvFormatRows(array) escapes Unix newlines", function(test) {
  test.deepEqual(dsv.csvFormatRows([["new\nline"]]), "\"new\nline\"");
  test.end();
});

tape("csvFormatRows(array) escapes values containing delimiters", function(test) {
  test.deepEqual(dsv.csvFormatRows([["oxford,comma"]]), "\"oxford,comma\"");
  test.end();
});
