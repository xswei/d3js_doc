var tape = require("tape"),
    jsdom = require("jsdom"),
    d3_selection = require("d3-selection"),
    d3_transition = require("../../");

tape("transition.select(selector) selects the descendants matching the specified selector, then derives a transition", function(test) {
  var document = jsdom.jsdom("<h1 id='one'><child/></h1><h1 id='two'><child/></h1>"),
      one = document.querySelector("#one"),
      two = document.querySelector("#two"),
      transition1 = d3_selection.selectAll([one, two]).data([1, 2]).transition().delay(function(d) { return d * 10; }),
      transition2 = transition1.select("child");
  test.equal(transition2 instanceof d3_transition.transition, true);
  test.deepEqual(transition2._groups, [[one.firstChild, two.firstChild]]);
  test.equal(transition2._parents, transition1._parents);
  test.equal(transition2._name, transition1._name);
  test.equal(transition2._id, transition1._id);
  test.equal(one.firstChild.__data__, 1);
  test.equal(two.firstChild.__data__, 2);
  test.equal(one.firstChild.__transition[transition1._id].delay, 10);
  test.equal(two.firstChild.__transition[transition1._id].delay, 20);
  test.end();
});

tape("transition.select(function) selects the descendants returned by the specified function, then derives a transition", function(test) {
  var document = jsdom.jsdom("<h1 id='one'><child/></h1><h1 id='two'><child/></h1>"),
      one = document.querySelector("#one"),
      two = document.querySelector("#two"),
      transition1 = d3_selection.selectAll([one, two]).data([1, 2]).transition().delay(function(d) { return d * 10; }),
      transition2 = transition1.select(function() { return this.firstChild; });
  test.equal(transition2 instanceof d3_transition.transition, true);
  test.deepEqual(transition2._groups, [[one.firstChild, two.firstChild]]);
  test.equal(transition2._parents, transition1._parents);
  test.equal(transition2._name, transition1._name);
  test.equal(transition2._id, transition1._id);
  test.equal(one.firstChild.__data__, 1);
  test.equal(two.firstChild.__data__, 2);
  test.equal(one.firstChild.__transition[transition1._id].delay, 10);
  test.equal(two.firstChild.__transition[transition1._id].delay, 20);
  test.end();
});
