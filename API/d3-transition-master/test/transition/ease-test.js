var tape = require("tape"),
    jsdom = require("jsdom"),
    d3_ease = require("d3-ease"),
    d3_timer = require("d3-timer"),
    d3_selection = require("d3-selection"),
    state = require("./state");

require("../../");

tape("transition.ease() returns the easing function for the first non-null node", function(test) {
  var document = jsdom.jsdom("<h1 id='one'></h1><h1 id='two'></h1>"),
      one = document.querySelector("#one"),
      two = document.querySelector("#two"),
      transition1 = d3_selection.select(one).transition(),
      transition2 = d3_selection.select(two).transition().ease(d3_ease.easeBounce);
  test.strictEqual(one.__transition[transition1._id].ease, d3_ease.easeCubic);
  test.strictEqual(two.__transition[transition2._id].ease, d3_ease.easeBounce);
  test.strictEqual(transition1.ease(), d3_ease.easeCubic);
  test.strictEqual(transition2.ease(), d3_ease.easeBounce);
  test.strictEqual(d3_selection.select(one).transition(transition1).ease(), d3_ease.easeCubic);
  test.strictEqual(d3_selection.select(two).transition(transition2).ease(), d3_ease.easeBounce);
  test.strictEqual(d3_selection.selectAll([null, one]).transition(transition1).ease(), d3_ease.easeCubic);
  test.strictEqual(d3_selection.selectAll([null, two]).transition(transition2).ease(), d3_ease.easeBounce);
  test.strictEqual(d3_selection.selectAll([one, two]).transition(transition1).ease(), d3_ease.easeCubic);
  test.strictEqual(d3_selection.selectAll([two, one]).transition(transition2).ease(), d3_ease.easeBounce);
  test.end();
});

tape("transition.ease(ease) throws an error if ease is not a function", function(test) {
  var root = jsdom.jsdom().documentElement,
      transition = d3_selection.select(root).transition();
  test.throws(function() { transition.ease(42); });
  test.throws(function() { transition.ease(null); });
  test.end();
});

tape("transition.ease(ease) sets the easing function for each selected element to the specified function", function(test) {
  var document = jsdom.jsdom("<h1 id='one'></h1><h1 id='two'></h1>"),
      one = document.querySelector("#one"),
      two = document.querySelector("#two"),
      transition = d3_selection.selectAll([one, two]).transition().ease(d3_ease.easeBounce);
  test.strictEqual(one.__transition[transition._id].ease, d3_ease.easeBounce);
  test.strictEqual(two.__transition[transition._id].ease, d3_ease.easeBounce);
  test.end();
});

tape("transition.ease(ease) passes the easing function the normalized time in [0, 1]", function(test) {
  var root = jsdom.jsdom().documentElement,
      actual,
      ease = function(t) { actual = t; return t; };

  d3_selection.select(root).transition().ease(ease);

  d3_timer.timeout(function(now) {
    test.equal(actual, now / 250);
    test.end();
  }, 100);
});

tape("transition.ease(ease) does not invoke the easing function on the last frame", function(test) {
  var root = jsdom.jsdom().documentElement,
      ease = function(t) { test.equal(schedule.state, state.RUNNING); return t; },
      transition = d3_selection.select(root).transition().ease(ease).on("end", function() { test.end(); }),
      schedule = root.__transition[transition._id];
});

tape("transition.ease(ease) observes the eased time returned by the easing function", function(test) {
  var root = jsdom.jsdom().documentElement,
      expected,
      ease = function() { return expected = Math.random() * 2 - 0.5; },
      tween = function() { return function(t) { test.equal(t, schedule.state === state.ENDING ? 1 : expected); }; },
      transition = d3_selection.select(root).transition().ease(ease).tween("tween", tween).on("end", function() { test.end(); }),
      schedule = root.__transition[transition._id];
});
