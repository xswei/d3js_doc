var tape = require("tape"),
    jsdom = require("jsdom"),
    d3_selection = require("d3-selection"),
    d3_transition = require("../");

tape("d3.interrupt(node) cancels any pending transitions on the specified node", function(test) {
  var root = jsdom.jsdom().documentElement,
      selection = d3_selection.select(root),
      transition1 = selection.transition(),
      transition2 = transition1.transition();
  test.equal(transition1._id in root.__transition, true);
  test.equal(transition2._id in root.__transition, true);
  d3_transition.interrupt(root);
  test.equal(root.__transition, undefined);
  test.end();
});

tape("selection.interrupt(name) only cancels pending transitions with the specified name", function(test) {
  var root = jsdom.jsdom().documentElement,
      selection = d3_selection.select(root),
      transition1 = selection.transition("foo"),
      transition2 = selection.transition();
  test.equal(transition1._id in root.__transition, true);
  test.equal(transition2._id in root.__transition, true);
  d3_transition.interrupt(root, "foo");
  test.equal(transition1._id in root.__transition, false);
  test.equal(transition2._id in root.__transition, true);
  test.end();
});
