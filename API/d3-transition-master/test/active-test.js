var tape = require("tape"),
    jsdom = require("jsdom"),
    d3_timer = require("d3-timer"),
    d3_selection = require("d3-selection"),
    d3_transition = require("../");

tape("d3.active(node) returns null if the specified node has no active transition with the null name", function(test) {
  var root = jsdom.jsdom().documentElement,
      selection = d3_selection.select(root);

  // No transitions pending.
  test.strictEqual(d3_transition.active(root), null);

  // Two transitions created.
  selection.transition().delay(50).duration(50);
  selection.transition("foo").duration(50);
  test.strictEqual(d3_transition.active(root), null);

  // One transition scheduled; one active with a different name.
  d3_timer.timeout(function() {
    test.strictEqual(d3_transition.active(root), null);
  });

  // No transitions remaining after the transition ends.
  d3_timer.timeout(function() {
    test.strictEqual(d3_transition.active(root), null);
    test.end();
  }, 100);
});

tape("d3.active(node, null) returns null if the specified node has no active transition with the null name", function(test) {
  var root = jsdom.jsdom().documentElement,
      selection = d3_selection.select(root);

  // No transitions pending.
  test.strictEqual(d3_transition.active(root, null), null);

  // Two transitions created.
  selection.transition().delay(50).duration(50);
  selection.transition("foo").duration(50);
  test.strictEqual(d3_transition.active(root, null), null);

  // One transition scheduled; one active with a different name.
  d3_timer.timeout(function() {
    test.strictEqual(d3_transition.active(root, null), null);
  });

  // No transitions remaining after the transition ends.
  d3_timer.timeout(function() {
    test.strictEqual(d3_transition.active(root, null), null);
    test.end();
  }, 100);
});

tape("d3.active(node, undefined) returns null if the specified node has no active transition with the null name", function(test) {
  var root = jsdom.jsdom().documentElement,
      selection = d3_selection.select(root);

  // No transitions pending.
  test.strictEqual(d3_transition.active(root, undefined), null);

  // Two transitions created.
  selection.transition().delay(50).duration(50);
  selection.transition("foo").duration(50);
  test.strictEqual(d3_transition.active(root, undefined), null);

  // One transition scheduled; one active with a different name.
  d3_timer.timeout(function() {
    test.strictEqual(d3_transition.active(root, undefined), null);
  });

  // No transitions remaining after the transition ends.
  d3_timer.timeout(function() {
    test.strictEqual(d3_transition.active(root, undefined), null);
    test.end();
  }, 100);
});

tape("d3.active(node, name) returns null if the specified node has no active transition with the specified name", function(test) {
  var root = jsdom.jsdom().documentElement,
      selection = d3_selection.select(root);

  // No transitions pending.
  test.strictEqual(d3_transition.active(root, "foo"), null);

  // Two transitions created.
  selection.transition("foo").delay(50).duration(50);
  selection.transition().duration(50);
  test.strictEqual(d3_transition.active(root, null), null);

  // One transition scheduled; one active with a different name.
  test.strictEqual(d3_transition.active(root, "foo"), null);

  // One transition scheduled.
  d3_timer.timeout(function() {
    test.strictEqual(d3_transition.active(root, "foo"), null);
  });

  // No transitions remaining after the transition ends.
  d3_timer.timeout(function() {
    test.strictEqual(d3_transition.active(root, "foo"), null);
    test.end();
  }, 100);
});

tape("d3.active(node) returns the active transition on the specified node with the null name", function(test) {
  var root = jsdom.jsdom().documentElement,
      selection = d3_selection.select(root),
      transition = selection.transition().on("start", check).tween("tween", tweened).on("end", ended);

  function check() {
    var t = d3_transition.active(root);
    test.deepEqual(t._groups, [[root]]);
    test.deepEqual(t._parents, [null]);
    test.strictEqual(t._name, null);
    test.strictEqual(t._id, transition._id);
  }

  function tweened() {
    check();
    return function(t) {
      if (t >= 1) check();
    };
  }

  function ended() {
    check();
    test.end();
  }
});

tape("d3.active(node, name) returns the active transition on the specified node with the specified name", function(test) {
  var root = jsdom.jsdom().documentElement,
      selection = d3_selection.select(root),
      transition = selection.transition("foo").on("start", check).tween("tween", tweened).on("end", ended);

  function check() {
    var t = d3_transition.active(root, "foo");
    test.deepEqual(t._groups, [[root]]);
    test.deepEqual(t._parents, [null]);
    test.strictEqual(t._name, "foo");
    test.strictEqual(t._id, transition._id);
  }

  function tweened() {
    check();
    return function(t) {
      if (t >= 1) check();
    };
  }

  function ended() {
    check();
    test.end();
  }
});
