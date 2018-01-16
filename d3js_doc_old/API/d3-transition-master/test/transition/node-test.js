var tape = require("tape"),
    d3_selection = require("d3-selection"),
    d3_transition = require("../../");

tape("transition.node is the same as selection.node", function(test) {
  test.equal(d3_transition.transition.prototype.node, d3_selection.selection.prototype.node);
  test.end();
});
