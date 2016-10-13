require("./XMLHttpRequest");

var tape = require("tape"),
    request = require("../build/d3-request"),
    table = require("./table");

tape("tsv(url, callback) makes an asynchronous GET request for a TSV file", function(test) {
  request.tsv("test/data/sample.tsv", function(error, data) {
    if (error) throw error;
    test.equal(XMLHttpRequest._last._info.url, "test/data/sample.tsv");
    test.equal(XMLHttpRequest._last._info.method, "GET");
    test.equal(XMLHttpRequest._last._info.async, true);
    test.equal(XMLHttpRequest._last._info.mimeType, "text/tab-separated-values");
    test.deepEqual(data, table([{Hello: "42", World: "\"fish\""}], ["Hello", "World"]));
    test.end();
  });
});

tape("tsv(url, callback) is an alias tsv(url).get(callback)", function(test) {
  request.tsv("test/data/sample.tsv").get(function(error, data) {
    if (error) throw error;
    test.equal(XMLHttpRequest._last._info.url, "test/data/sample.tsv");
    test.equal(XMLHttpRequest._last._info.method, "GET");
    test.equal(XMLHttpRequest._last._info.async, true);
    test.equal(XMLHttpRequest._last._info.mimeType, "text/tab-separated-values");
    test.deepEqual(data, table([{Hello: "42", World: "\"fish\""}], ["Hello", "World"]));
    test.end();
  });
});

tape("tsv(url, row, callback) observes the specified row conversion function", function(test) {
  request.tsv("test/data/sample.tsv", function(d) { d.Hello = -d.Hello; return d; }, function(error, data) {
    if (error) throw error;
    test.deepEqual(data, table([{Hello: -42, World: "\"fish\""}], ["Hello", "World"]));
    test.end();
  });
});

tape("tsv(url, row, callback) is an alias for tsv(url).row(row).get(callback)", function(test) {
  request.tsv("test/data/sample.tsv").row(function(d) { d.Hello = -d.Hello; return d; }).get(function(error, data) {
    if (error) throw error;
    test.deepEqual(data, table([{Hello: -42, World: "\"fish\""}], ["Hello", "World"]));
    test.end();
  });
});

tape("tsv(url).mimeType(type).get(callback) observes the specified mime type", function(test) {
  request.tsv("test/data/sample.tsv").mimeType("text/plain").get(function(error, data) {
    if (error) throw error;
    test.deepEqual(data, table([{Hello: "42", World: "\"fish\""}], ["Hello", "World"]));
    test.equal(XMLHttpRequest._last._info.mimeType, "text/plain");
    test.end();
  });
});
