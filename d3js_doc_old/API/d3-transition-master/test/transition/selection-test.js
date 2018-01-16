var tape = require("tape"),
    jsdom = require("jsdom"),
    d3_selection = require("d3-selection");

require("../../");

tape("transition.selection() returns the transition’s selection", function(test) {
  var document = jsdom.jsdom("<h1 id='one'>one</h1><h1 id='two'>two</h1>"),
      selection0 = d3_selection.select(document.body).selectAll("h1"),
      transition = selection0.transition(),
      selection1 = transition.selection();
  test.ok(selection1 instanceof d3_selection.selection);
  test.equal(selection1._groups, selection0._groups);
  test.equal(selection1._parents, selection0._parents);
  test.end();
});
