var tape = require("tape"),
    jsdom = require("jsdom"),
    d3 = require("../../");

tape("d3.selection() returns a selection of the document element", function(test) {
  var document = global.document = jsdom.jsdom();
  try {
    test.equal(d3.selection().node(), document.documentElement);
    test.end();
  } finally {
    delete global.document;
  }
});

tape("d3.selection.prototype can be extended", function(test) {
  var document = jsdom.jsdom("<input type='checkbox'>"),
      s = d3.select(document.querySelector("[type=checkbox]"));
  try {
    d3.selection.prototype.checked = function(value) {
      return arguments.length
          ? this.property("checked", !!value)
          : this.property("checked");
    };
    test.equal(s.checked(), false);
    test.equal(s.checked(true), s);
    test.equal(s.checked(), true);
    test.end();
  } finally {
    delete d3.selection.prototype.checked;
  }
});

tape("d3.selection() returns an instanceof d3.selection", function(test) {
  var document = global.document = jsdom.jsdom();
  try {
    test.ok(d3.selection() instanceof d3.selection);
    test.equal(d3.selection().constructor.name, "Selection");
    test.end();
  } finally {
    delete global.document;
  }
});
