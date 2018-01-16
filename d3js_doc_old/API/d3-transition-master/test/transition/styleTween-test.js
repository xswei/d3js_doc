var tape = require("tape"),
    jsdom = require("jsdom"),
    d3_ease = require("d3-ease"),
    d3_timer = require("d3-timer"),
    d3_interpolate = require("d3-interpolate"),
    d3_selection = require("d3-selection"),
    state = require("./state");

require("../../");

tape("transition.styleTween(name, value) defines a style tween using the interpolator returned by the specified function", function(test) {
  var root = jsdom.jsdom().documentElement,
      interpolate = d3_interpolate.interpolateHcl("red", "blue"),
      ease = d3_ease.easeCubic,
      transition = d3_selection.select(root).transition().styleTween("color", function() { return interpolate; });

  d3_timer.timeout(function(elapsed) {
    test.deepEqual(root.style.getPropertyValue("color"), interpolate(ease(elapsed / 250)));
    test.deepEqual(root.style.getPropertyPriority("color"), "");
    test.end();
  }, 125);
});

tape("transition.styleTween(name, value, priority) defines a style tween using the interpolator returned by the specified function", function(test) {
  var root = jsdom.jsdom().documentElement,
      interpolate = d3_interpolate.interpolateHcl("red", "blue"),
      ease = d3_ease.easeCubic,
      transition = d3_selection.select(root).transition().styleTween("color", function() { return interpolate; }, "important");

  d3_timer.timeout(function(elapsed) {
    test.deepEqual(root.style.getPropertyValue("color"), interpolate(ease(elapsed / 250)));
    test.deepEqual(root.style.getPropertyPriority("color"), "important");
    test.end();
  }, 125);
});

tape("transition.styleTween(name, value) invokes the value function with the expected context and arguments", function(test) {
  var document = jsdom.jsdom("<h1 id='one'></h1><h1 id='two'></h1>"),
      one = document.querySelector("#one"),
      two = document.querySelector("#two"),
      result = [],
      transition = d3_selection.selectAll([one, two]).data(["one", "two"]).transition().styleTween("color", function(d, i, nodes) { result.push([d, i, nodes, this]); });

  d3_timer.timeout(function(elapsed) {
    test.deepEqual(result, [
      ["one", 0, [one, two], one],
      ["two", 1, [one, two], two]
    ]);
    test.end();
  });
});

tape("transition.styleTween(name, value) passes the eased time to the interpolator", function(test) {
  var root = jsdom.jsdom().documentElement,
      then = d3_timer.now(),
      duration = 250,
      ease = d3_ease.easeCubic,
      transition = d3_selection.select(root).transition().styleTween("color", function() { return interpolate; }).on("end", function() { test.end(); }),
      schedule = root.__transition[transition._id];

  function interpolate(t) {
    "use strict";
    test.equal(this, undefined);
    test.equal(t, schedule.state === state.ENDING ? 1 : ease((d3_timer.now() - then) / duration));
  }
});

tape("transition.styleTween(name, value) allows the specified function to return null for a noop", function(test) {
  var root = jsdom.jsdom().documentElement,
      selection = d3_selection.select(root).style("color", "red"),
      transition = selection.transition().styleTween("color", function() {});

  d3_timer.timeout(function(elapsed) {
    test.deepEqual(root.style.getPropertyValue("color"), "red");
    test.end();
  }, 125);
});

tape("transition.styleTween(name, value) coerces the specified name to a string", function(test) {
  var root = jsdom.jsdom().documentElement,
      interpolate = d3_interpolate.interpolateHcl("red", "blue"),
      ease = d3_ease.easeCubic,
      transition = d3_selection.select(root).transition().styleTween({toString: function() { return "color"; }}, function() { return interpolate; });

  d3_timer.timeout(function(elapsed) {
    test.deepEqual(root.style.getPropertyValue("color"), interpolate(ease(elapsed / 250)));
    test.end();
  }, 125);
});

tape("transition.styleTween(name, value) throws an error if value is not null and not a function", function(test) {
  var root = jsdom.jsdom().documentElement,
      transition = d3_selection.select(root).transition();
  test.throws(function() { transition.styleTween("color", 42); });
  test.end();
});

tape("transition.styleTween(name, null) removes the specified style tween", function(test) {
  var root = jsdom.jsdom().documentElement,
      interpolate = d3_interpolate.interpolateHcl("red", "blue"),
      transition = d3_selection.select(root).transition().styleTween("color", function() { return interpolate; }).styleTween("color", null);

  test.equal(transition.styleTween("color"), null);
  test.equal(transition.tween("style.color"), null);

  d3_timer.timeout(function(elapsed) {
    test.strictEqual(root.style.getPropertyValue("color"), "");
    test.end();
  }, 125);
});

tape("transition.styleTween(name) returns the style tween with the specified name", function(test) {
  var root = jsdom.jsdom().documentElement,
      interpolate = d3_interpolate.interpolateHcl("red", "blue"),
      tween = function() { return interpolate; },
      transition = d3_selection.select(root).transition().styleTween("color", tween).on("start", started).on("end", ended);

  test.equal(transition.styleTween("color"), tween);
  test.equal(transition.styleTween("bar"), null);

  function started() {
    test.equal(transition.styleTween("color"), tween);
  }

  function ended() {
    test.equal(transition.styleTween("color"), tween);
    test.end();
  }
});

tape("transition.styleTween(name) coerces the specified name to a string", function(test) {
  var root = jsdom.jsdom().documentElement,
      tween = function() {},
      transition = d3_selection.select(root).transition().styleTween("color", tween);

  test.equal(transition.styleTween({toString: function() { return "color"; }}), tween);
  test.end();
});
