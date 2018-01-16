var tape = require("tape"),
    d3_selection = require("d3-selection"),
    d3_transition = require("../../");

tape("transition.empty is the same as selection.empty", function(test) {
  test.equal(d3_transition.transition.prototype.empty, d3_selection.selection.prototype.empty);
  test.end();
});
