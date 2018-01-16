var tape = require("tape"),
    jsdom = require("jsdom"),
    d3 = require("../");

tape("d3.namespaces is the expected map", function(test) {
  test.deepEqual(d3.namespaces, {
    svg: "http://www.w3.org/2000/svg",
    xhtml: "http://www.w3.org/1999/xhtml",
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
  });
  test.end();
});
