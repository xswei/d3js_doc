var tape = require("tape"),
    jsdom = require("jsdom"),
    d3_ease = require("d3-ease"),
    d3_timer = require("d3-timer"),
    d3_interpolate = require("d3-interpolate"),
    d3_selection = require("d3-selection"),
    state = require("./state");

require("../../");

tape("transition.attrTween(name, value) defines an attribute tween using the interpolator returned by the specified function", function(test) {
  var root = jsdom.jsdom().documentElement,
      interpolate = d3_interpolate.interpolateHcl("red", "blue"),
      transition = d3_selection.select(root).transition().attrTween("foo", function() { return interpolate; });

  d3_timer.timeout(function(elapsed) {
    test.strictEqual(root.getAttribute("foo"), interpolate(d3_ease.easeCubic(elapsed / 250)));
    test.end();
  }, 125);
});

tape("transition.attrTween(name, value) invokes the value function with the expected context and arguments", function(test) {
  var document = jsdom.jsdom("<h1 id='one'></h1><h1 id='two'></h1>"),
      one = document.querySelector("#one"),
      two = document.querySelector("#two"),
      result = [],
      transition = d3_selection.selectAll([one, two]).data(["one", "two"]).transition().attrTween("foo", function(d, i, nodes) { result.push([d, i, nodes, this]); });

  d3_timer.timeout(function(elapsed) {
    test.deepEqual(result, [
      ["one", 0, [one, two], one],
      ["two", 1, [one, two], two]
    ]);
    test.end();
  });
});

tape("transition.attrTween(name, value) passes the eased time to the interpolator", function(test) {
  var root = jsdom.jsdom().documentElement,
      then = d3_timer.now(),
      duration = 250,
      ease = d3_ease.easeCubic,
      transition = d3_selection.select(root).transition().attrTween("foo", function() { return interpolate; }).on("end", function() { test.end(); }),
      schedule = root.__transition[transition._id];

  function interpolate(t) {
    "use strict";
    test.equal(this, undefined);
    test.equal(t, schedule.state === state.ENDING ? 1 : ease((d3_timer.now() - then) / duration));
  }
});

tape("transition.attrTween(name, value) allows the specified function to return null for a noop", function(test) {
  var root = jsdom.jsdom().documentElement,
      selection = d3_selection.select(root).attr("foo", "42").attr("svg:bar", "43"),
      transition = selection.transition().attrTween("foo", function() {}).attrTween("svg:bar", function() {});

  d3_timer.timeout(function(elapsed) {
    test.strictEqual(root.getAttribute("foo"), "42");
    test.strictEqual(root.getAttributeNS("http://www.w3.org/2000/svg", "bar"), "43");
    test.end();
  }, 125);
});

tape("transition.attrTween(name, value) defines a namespaced attribute tween using the interpolator returned by the specified function", function(test) {
  var root = jsdom.jsdom().documentElement,
      interpolate = d3_interpolate.interpolateHcl("red", "blue"),
      transition = d3_selection.select(root).transition().attrTween("svg:foo", function() { return interpolate; });

  d3_timer.timeout(function(elapsed) {
    test.strictEqual(root.getAttributeNS("http://www.w3.org/2000/svg", "foo"), interpolate(d3_ease.easeCubic(elapsed / 250)));
    test.end();
  }, 125);
});

tape("transition.attrTween(name, value) coerces the specified name to a string", function(test) {
  var root = jsdom.jsdom().documentElement,
      interpolate = d3_interpolate.interpolateHcl("red", "blue"),
      transition = d3_selection.select(root).transition().attrTween({toString: function() { return "foo"; }}, function() { return interpolate; });

  d3_timer.timeout(function(elapsed) {
    test.strictEqual(root.getAttribute("foo"), interpolate(d3_ease.easeCubic(elapsed / 250)));
    test.end();
  }, 125);
});

tape("transition.attrTween(name, value) throws an error if value is not null and not a function", function(test) {
  var root = jsdom.jsdom().documentElement,
      transition = d3_selection.select(root).transition();
  test.throws(function() { transition.attrTween("foo", 42); });
  test.end();
});

tape("transition.attrTween(name, null) removes the specified attribute tween", function(test) {
  var root = jsdom.jsdom().documentElement,
      interpolate = d3_interpolate.interpolateHcl("red", "blue"),
      transition = d3_selection.select(root).transition().attrTween("foo", function() { return interpolate; }).attrTween("foo", null);

  test.equal(transition.attrTween("foo"), null);
  test.equal(transition.tween("attr.foo"), null);

  d3_timer.timeout(function(elapsed) {
    test.strictEqual(root.hasAttribute("foo"), false);
    test.end();
  }, 125);
});

tape("transition.attrTween(name) returns the attribute tween with the specified name", function(test) {
  var root = jsdom.jsdom().documentElement,
      interpolate = d3_interpolate.interpolateHcl("red", "blue"),
      tween = function() { return interpolate; },
      transition = d3_selection.select(root).transition().attrTween("foo", tween).on("start", started).on("end", ended);

  test.equal(transition.attrTween("foo"), tween);
  test.equal(transition.attrTween("bar"), null);

  function started() {
    test.equal(transition.attrTween("foo"), tween);
  }

  function ended() {
    test.equal(transition.attrTween("foo"), tween);
    test.end();
  }
});

tape("transition.attrTween(name) coerces the specified name to a string", function(test) {
  var root = jsdom.jsdom().documentElement,
      tween = function() {},
      transition = d3_selection.select(root).transition().attrTween("color", tween);

  test.equal(transition.attrTween({toString: function() { return "color"; }}), tween);
  test.end();
});
