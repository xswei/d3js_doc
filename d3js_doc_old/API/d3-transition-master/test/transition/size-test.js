var tape = require("tape"),
    d3_selection = require("d3-selection"),
    d3_transition = require("../../");

tape("transition.size is the same as selection.size", function(test) {
  test.equal(d3_transition.transition.prototype.size, d3_selection.selection.prototype.size);
  test.end();
});
