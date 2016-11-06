var tape = require("tape"),
    jsdom = require("jsdom"),
    d3_timer = require("d3-timer"),
    d3_selection = require("d3-selection");

require("../../");

tape("transition.transition() allows preceeding transitions with zero duration to end naturally", function(test) {
  var end0 = false,
      end1 = false,
      end2 = false,
      root = jsdom.jsdom().documentElement,
      selection = d3_selection.select(root),
      transition0 = selection.transition().duration(0).on("end", function() { end0 = true; }),
      transition1 = selection.transition().duration(0).on("end", function() { end1 = true; }),
      transition2 = transition0.transition().duration(0).on("end", function() { end2 = true; });

  d3_timer.timeout(function(elapsed) {
    test.equal(end0, true);
    test.equal(end1, true);
    test.equal(end2, true);
    test.end();
  }, 50);
});
