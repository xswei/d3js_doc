var tape = require("tape"),
    d3_selection = require("d3-selection"),
    d3_transition = require("../../");

tape("transition.nodes is the same as selection.nodes", function(test) {
  test.equal(d3_transition.transition.prototype.nodes, d3_selection.selection.prototype.nodes);
  test.end();
});
