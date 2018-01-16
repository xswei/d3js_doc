var tape = require("tape"),
    d3_selection = require("d3-selection"),
    d3_transition = require("../../");

tape("transition.call is the same as selection.call", function(test) {
  test.equal(d3_transition.transition.prototype.call, d3_selection.selection.prototype.call);
  test.end();
});
