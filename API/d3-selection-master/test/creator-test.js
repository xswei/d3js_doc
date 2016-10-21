var tape = require("tape"),
    jsdom = require("jsdom"),
    d3 = require("../");

tape("d3.creator(name).call(element) returns a new element with the given name", function(test) {
  var document = jsdom.jsdom("<body class='foo'>");
  test.deepEqual(type(d3.creator("h1").call(document.body)), {namespace: "http://www.w3.org/1999/xhtml", name: "H1"});
  test.deepEqual(type(d3.creator("xhtml:h1").call(document.body)), {namespace: "http://www.w3.org/1999/xhtml", name: "H1"});
  test.deepEqual(type(d3.creator("svg").call(document.body)), {namespace: "http://www.w3.org/2000/svg", name: "svg"});
  test.deepEqual(type(d3.creator("g").call(document.body)), {namespace: "http://www.w3.org/1999/xhtml", name: "G"});
  test.end();
});

tape("d3.creator(name).call(element) can inherit the namespace from the given element", function(test) {
  var document = jsdom.jsdom("<body class='foo'><svg></svg>"),
      svg = document.querySelector("svg");
  test.deepEqual(type(d3.creator("g").call(document.body)), {namespace: "http://www.w3.org/1999/xhtml", name: "G"});
  test.deepEqual(type(d3.creator("g").call(svg)), {namespace: "http://www.w3.org/2000/svg", name: "g"});
  test.end();
});

function type(element) {
  return {namespace: element.namespaceURI, name: element.tagName};
}
