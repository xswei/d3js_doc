require("./XMLHttpRequest");

var tape = require("tape"),
    request = require("../build/d3-request");

tape("text(url, callback) makes an asynchronous GET request for a plain text file", function(test) {
  request.text("test/data/sample.txt", function(error, text) {
    if (error) throw error;
    test.equal(XMLHttpRequest._last._info.url, "test/data/sample.txt");
    test.equal(XMLHttpRequest._last._info.method, "GET");
    test.equal(XMLHttpRequest._last._info.async, true);
    test.equal(XMLHttpRequest._last._info.mimeType, "text/plain");
    test.equal(XMLHttpRequest._last.readyState, 4);
    test.equal(XMLHttpRequest._last.status, 200);
    test.equal(text, "Hello, world!\n");
    test.end();
  });
});

tape("text(url, callback) is an alias for text(url).get(callback)", function(test) {
  request.text("test/data/sample.txt").get(function(error, text) {
    if (error) throw error;
    test.equal(XMLHttpRequest._last._info.url, "test/data/sample.txt");
    test.equal(XMLHttpRequest._last._info.method, "GET");
    test.equal(XMLHttpRequest._last._info.async, true);
    test.equal(XMLHttpRequest._last._info.mimeType, "text/plain");
    test.equal(XMLHttpRequest._last.readyState, 4);
    test.equal(XMLHttpRequest._last.status, 200);
    test.equal(text, "Hello, world!\n");
    test.end();
  });
});

tape("text(url).mimeType(type).get(callback) observes the specified mime type", function(test) {
  request.text("test/data/sample.txt").mimeType("text/plain+special").get(function(error, text) {
    if (error) throw error;
    test.equal(XMLHttpRequest._last._info.mimeType, "text/plain+special");
    test.equal(text, "Hello, world!\n");
    test.end();
  });
});
