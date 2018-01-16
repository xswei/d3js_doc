var tape = require("tape"),
    d3_selection = require("d3-selection"),
    d3_transition = require("../../");

tape("transition.each is the same as selection.each", function(test) {
  test.equal(d3_transition.transition.prototype.each, d3_selection.selection.prototype.each);
  test.end();
});
