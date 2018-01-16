var tape = require("tape"),
    jsdom = require("jsdom"),
    d3_transition = require("../../");

tape("d3.transition() returns a transition on the document element with the null name", function(test) {
  var document = global.document = jsdom.jsdom(),
      root = document.documentElement;
  try {
    var transition = d3_transition.transition(),
        schedule = root.__transition[transition._id];
    test.equal(transition.node(), root);
    test.strictEqual(schedule.name, null);
    test.end();
  } finally {
    delete global.document;
  }
});

tape("d3.transition(null) returns a transition on the document element with the null name", function(test) {
  var document = global.document = jsdom.jsdom(),
      root = document.documentElement;
  try {
    var transition = d3_transition.transition(null),
        schedule = root.__transition[transition._id];
    test.equal(transition.node(), root);
    test.strictEqual(schedule.name, null);
    test.end();
  } finally {
    delete global.document;
  }
});

tape("d3.transition(undefined) returns a transition on the document element with the null name", function(test) {
  var document = global.document = jsdom.jsdom(),
      root = document.documentElement;
  try {
    var transition = d3_transition.transition(undefined),
        schedule = root.__transition[transition._id];
    test.equal(transition.node(), root);
    test.strictEqual(schedule.name, null);
    test.end();
  } finally {
    delete global.document;
  }
});

tape("d3.transition(name) returns a transition on the document element with the specified name", function(test) {
  var document = global.document = jsdom.jsdom(),
      root = document.documentElement;
  try {
    var transition = d3_transition.transition("foo"),
        schedule = root.__transition[transition._id];
    test.equal(transition.node(), root);
    test.strictEqual(schedule.name, "foo");
    test.end();
  } finally {
    delete global.document;
  }
});

tape("d3.transition.prototype can be extended", function(test) {
  global.document = jsdom.jsdom();
  try {
    var pass = 0;
    d3_transition.transition.prototype.test = function() { return ++pass; };
    test.equal(d3_transition.transition().test(), 1);
    test.equal(pass, 1);
    test.end();
  } finally {
    delete d3_transition.transition.prototype.test;
    delete global.document;
  }
});

tape("transitions are instanceof d3.transition", function(test) {
  global.document = jsdom.jsdom();
  try {
    test.equal(d3_transition.transition() instanceof d3_transition.transition, true);
    test.equal(d3_transition.transition().constructor.name, "Transition");
    test.end();
  } finally {
    delete global.document;
  }
});
