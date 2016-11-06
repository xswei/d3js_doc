var tape = require("tape"),
    jsdom = require("jsdom"),
    d3_timer = require("d3-timer"),
    d3_selection = require("d3-selection"),
    d3_transition = require("../");

tape("transition.on(\"start\", error) terminates the transition", function(test) {
  var root = jsdom.jsdom().documentElement,
      selection = d3_selection.select(root),
      transition = selection.transition().on("start", function() { throw new Error; });

  process.once("uncaughtException", function() {});

  // No transitions remaining after the transition ends.
  d3_timer.timeout(function() {
    test.strictEqual(root.__transition, undefined);
    test.end();
  });
});

tape("transition.on(\"start\", error) with delay terminates the transition", function(test) {
  var root = jsdom.jsdom().documentElement,
      selection = d3_selection.select(root),
      transition = selection.transition().delay(50).on("start", function() { throw new Error; });

  process.once("uncaughtException", function() {});

  // No transitions remaining after the transition ends.
  d3_timer.timeout(function() {
    test.strictEqual(root.__transition, undefined);
    test.end();
  }, 50);
});

tape("transition.tween(\"foo\", error) terminates the transition", function(test) {
  var root = jsdom.jsdom().documentElement,
      selection = d3_selection.select(root),
      transition = selection.transition().tween("foo", function() { throw new Error; });

  process.once("uncaughtException", function() {});

  // No transitions remaining after the transition ends.
  d3_timer.timeout(function() {
    test.strictEqual(root.__transition, undefined);
    test.end();
  });
});

tape("transition.tween(\"foo\", error) with delay terminates the transition", function(test) {
  var root = jsdom.jsdom().documentElement,
      selection = d3_selection.select(root),
      transition = selection.transition().delay(50).tween("foo", function() { throw new Error; });

  process.once("uncaughtException", function() {});

  // No transitions remaining after the transition ends.
  d3_timer.timeout(function() {
    test.strictEqual(root.__transition, undefined);
    test.end();
  }, 50);
});

tape("transition.tween(\"foo\", deferredError) terminates the transition", function(test) {
  var root = jsdom.jsdom().documentElement,
      selection = d3_selection.select(root),
      transition = selection.transition().duration(50).tween("foo", function() { return function(t) { if (t === 1) throw new Error; }; });

  process.once("uncaughtException", function() {});

  // No transitions remaining after the transition ends.
  d3_timer.timeout(function() {
    test.strictEqual(root.__transition, undefined);
    test.end();
  }, 50);
});

tape("transition.on(\"end\", error) terminates the transition", function(test) {
  var root = jsdom.jsdom().documentElement,
      selection = d3_selection.select(root),
      transition = selection.transition().delay(50).duration(50).on("end", function() { throw new Error; });

  process.once("uncaughtException", function() {});

  // No transitions remaining after the transition ends.
  d3_timer.timeout(function() {
    test.strictEqual(root.__transition, undefined);
    test.end();
  }, 100);
});
