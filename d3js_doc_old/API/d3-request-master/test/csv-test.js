require("./XMLHttpRequest");

var tape = require("tape"),
    request = require("../build/d3-request"),
    table = require("./table");

tape("csv(url, callback) makes an asynchronous GET request for a CSV file", function(test) {
  request.csv("test/data/sample.csv", function(error, data) {
    if (error) throw error;
    test.equal(XMLHttpRequest._last._info.url, "test/data/sample.csv");
    test.equal(XMLHttpRequest._last._info.method, "GET");
    test.equal(XMLHttpRequest._last._info.async, true);
    test.equal(XMLHttpRequest._last._info.mimeType, "text/csv");
    test.deepEqual(data, table([{Hello: "42", World: "\"fish\""}], ["Hello", "World"]));
    test.end();
  });
});

tape("csv(url, callback) is an alias csv(url).get(callback)", function(test) {
  request.csv("test/data/sample.csv").get(function(error, data) {
    if (error) throw error;
    test.equal(XMLHttpRequest._last._info.url, "test/data/sample.csv");
    test.equal(XMLHttpRequest._last._info.method, "GET");
    test.equal(XMLHttpRequest._last._info.async, true);
    test.equal(XMLHttpRequest._last._info.mimeType, "text/csv");
    test.deepEqual(data, table([{Hello: "42", World: "\"fish\""}], ["Hello", "World"]));
    test.end();
  });
});

tape("csv(url, row, callback) observes the specified row conversion function", function(test) {
  request.csv("test/data/sample.csv", function(d) { d.Hello = -d.Hello; return d; }, function(error, data) {
    if (error) throw error;
    test.deepEqual(data, table([{Hello: -42, World: "\"fish\""}], ["Hello", "World"]));
    test.end();
  });
});

tape("csv(url, row, callback) is an alias for csv(url).row(row).get(callback)", function(test) {
  request.csv("test/data/sample.csv").row(function(d) { d.Hello = -d.Hello; return d; }).get(function(error, data) {
    if (error) throw error;
    test.deepEqual(data, table([{Hello: -42, World: "\"fish\""}], ["Hello", "World"]));
    test.end();
  });
});

tape("csv(url).mimeType(type).get(callback) observes the specified mime type", function(test) {
  request.csv("test/data/sample.csv").mimeType("text/plain").get(function(error, data) {
    if (error) throw error;
    test.deepEqual(data, table([{Hello: "42", World: "\"fish\""}], ["Hello", "World"]));
    test.equal(XMLHttpRequest._last._info.mimeType, "text/plain");
    test.end();
  });
});
