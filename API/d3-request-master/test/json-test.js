require("./XMLHttpRequest");

var tape = require("tape"),
    request = require("../build/d3-request");

tape("json(url, callback) makes an asynchronous GET request for a JSON file", function(test) {
  request.json("test/data/sample.json", function(error, json) {
    if (error) throw error;
    test.equal(XMLHttpRequest._last._info.url, "test/data/sample.json");
    test.equal(XMLHttpRequest._last._info.method, "GET");
    test.equal(XMLHttpRequest._last._info.async, true);
    test.equal(XMLHttpRequest._last._info.mimeType, "application/json");
    test.equal(XMLHttpRequest._last.readyState, 4);
    test.equal(XMLHttpRequest._last.status, 200);
    test.deepEqual(json, {message: "Hello, world!"});
    test.end();
  });
});

tape("json(url, callback) returns an error when given invalid JSON", function(test) {
  request.json("test/data/sample.tsv", function(error, json) {
    test.ok(error instanceof SyntaxError);
    test.end();
  });
});

tape("json(url, callback) is an alias for json(url).get(callback)", function(test) {
  request.json("test/data/sample.json").get(function(error, json) {
    if (error) throw error;
    test.equal(XMLHttpRequest._last._info.url, "test/data/sample.json");
    test.equal(XMLHttpRequest._last._info.method, "GET");
    test.equal(XMLHttpRequest._last._info.async, true);
    test.equal(XMLHttpRequest._last._info.mimeType, "application/json");
    test.equal(XMLHttpRequest._last.readyState, 4);
    test.equal(XMLHttpRequest._last.status, 200);
    test.deepEqual(json, {message: "Hello, world!"});
    test.end();
  });
});

tape("json(url).mimeType(type).get(callback) observes the specified mime type", function(test) {
  request.json("test/data/sample.json").mimeType("applicatin/json+test").get(function(error, json) {
    if (error) throw error;
    test.equal(XMLHttpRequest._last._info.mimeType, "applicatin/json+test");
    test.deepEqual(json, {message: "Hello, world!"});
    test.end();
  });
});
