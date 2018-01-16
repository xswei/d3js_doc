var tape = require("tape"),
    jsdom = require("jsdom"),
    d3_selection = require("d3-selection"),
    d3_transition = require("../../");

tape("transition.filter(selector) retains the elements matching the specified selector", function(test) {
  var document = jsdom.jsdom("<h1 id='one'></h1><h1 id='two'></h1>"),
      one = document.querySelector("#one"),
      two = document.querySelector("#two"),
      transition1 = d3_selection.selectAll([one, two]).data([1, 2]).transition().delay(function(d) { return d * 10; }),
      transition2 = transition1.filter("#two");
  test.equal(transition2 instanceof d3_transition.transition, true);
  test.deepEqual(transition2._groups, [[two]]);
  test.equal(transition2._parents, transition1._parents);
  test.equal(transition2._name, transition1._name);
  test.equal(transition2._id, transition1._id);
  test.end();
});

tape("transition.filter(function) retains the elements for which the specified function returns true", function(test) {
  var document = jsdom.jsdom("<h1 id='one'></h1><h1 id='two'></h1>"),
      one = document.querySelector("#one"),
      two = document.querySelector("#two"),
      transition1 = d3_selection.selectAll([one, two]).data([1, 2]).transition().delay(function(d) { return d * 10; }),
      transition2 = transition1.filter(function() { return this === two; });
  test.equal(transition2 instanceof d3_transition.transition, true);
  test.deepEqual(transition2._groups, [[two]]);
  test.equal(transition2._parents, transition1._parents);
  test.equal(transition2._name, transition1._name);
  test.equal(transition2._id, transition1._id);
  test.end();
});
