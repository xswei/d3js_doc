var tape = require("tape"),
    jsdom = require("jsdom"),
    d3_selection = require("d3-selection"),
    d3_transition = require("../../");

tape("transition.merge(other) merges elements from the specified other transition for null elements in this transition", function(test) {
  var document = jsdom.jsdom("<h1 id='one'></h1><h1 id='two'></h1>"),
      one = document.querySelector("#one"),
      two = document.querySelector("#two"),
      transition1 = d3_selection.selectAll([null, two]).transition(),
      transition2 = d3_selection.selectAll([one, null]).transition(transition1),
      transition3 = transition1.merge(transition2);
  test.equal(transition3 instanceof d3_transition.transition, true);
  test.deepEqual(transition3._groups, [[one, two]]);
  test.equal(transition3._parents, transition1._parents);
  test.equal(transition3._name, transition1._name);
  test.equal(transition3._id, transition1._id);
  test.end();
});

tape("transition.merge(other) throws an error if the other transition has a different id", function(test) {
  var document = jsdom.jsdom("<h1 id='one'></h1><h1 id='two'></h1>"),
      one = document.querySelector("#one"),
      two = document.querySelector("#two"),
      transition1 = d3_selection.selectAll([null, two]).transition(),
      transition2 = d3_selection.selectAll([one, null]).transition();
  test.throws(function() { transition1.merge(transition2); });
  test.end();
});
