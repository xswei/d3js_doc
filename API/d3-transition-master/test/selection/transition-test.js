var tape = require("tape"),
    jsdom = require("jsdom"),
    d3_timer = require("d3-timer"),
    d3_ease = require("d3-ease"),
    d3_selection = require("d3-selection"),
    d3_transition = require("../../");

tape("selection.transition() returns an instanceof d3.transition", function(test) {
  var root = jsdom.jsdom().documentElement,
      selection = d3_selection.select(root),
      transition = selection.transition();
  test.equal(transition instanceof d3_transition.transition, true);
  test.end();
});

tape("selection.transition() uses the default timing parameters", function(test) {
  var root = jsdom.jsdom().documentElement,
      selection = d3_selection.select(root),
      transition = selection.transition(),
      schedule = root.__transition[transition._id];
  test.equal(schedule.time, d3_timer.now());
  test.equal(schedule.delay, 0);
  test.equal(schedule.duration, 250);
  test.equal(schedule.ease, d3_ease.easeCubic);
  test.end();
});

tape("selection.transition() assigns a monotonically-increasing id", function(test) {
  var root = jsdom.jsdom().documentElement,
      selection = d3_selection.select(root),
      transition1 = selection.transition(),
      transition2 = selection.transition(),
      transition3 = selection.transition();
  test.ok(transition2._id > transition1._id);
  test.ok(transition3._id > transition2._id);
  test.end();
});

tape("selection.transition() uses a default name of null", function(test) {
  var root = jsdom.jsdom().documentElement,
      selection = d3_selection.select(root),
      transition = selection.transition(),
      schedule = root.__transition[transition._id];
  test.strictEqual(schedule.name, null);
  test.end();
});

tape("selection.transition(null) uses a name of null", function(test) {
  var root = jsdom.jsdom().documentElement,
      selection = d3_selection.select(root),
      transition = selection.transition(null),
      schedule = root.__transition[transition._id];
  test.strictEqual(schedule.name, null);
  test.end();
});

tape("selection.transition(undefined) uses a name of null", function(test) {
  var root = jsdom.jsdom().documentElement,
      selection = d3_selection.select(root),
      transition = selection.transition(undefined),
      schedule = root.__transition[transition._id];
  test.strictEqual(schedule.name, null);
  test.end();
});

tape("selection.transition(name) uses the specified name", function(test) {
  var root = jsdom.jsdom().documentElement,
      selection = d3_selection.select(root),
      transition = selection.transition("foo"),
      schedule = root.__transition[transition._id];
  test.strictEqual(schedule.name, "foo");
  test.end();
});

tape("selection.transition(name) coerces the name to a string", function(test) {
  var root = jsdom.jsdom().documentElement,
      selection = d3_selection.select(root),
      transition = selection.transition({toString: function() { return "foo"; }}),
      schedule = root.__transition[transition._id];
  test.strictEqual(schedule.name, "foo");
  test.end();
});

tape("selection.transition(transition) inherits the id, name and timing from the corresponding parent in the specified transition", function(test) {
  var document = jsdom.jsdom("<h1 id='one'><child></h1><h1 id='two'><child></h1>"),
      one = document.querySelector("#one"),
      two = document.querySelector("#two"),
      selection = d3_selection.selectAll([one, two]),
      transition = selection.transition().delay(function(d, i) { return i * 50; }).duration(100).ease(d3_ease.easeBounce),
      schedule1 = one.__transition[transition._id],
      schedule2 = two.__transition[transition._id],
      transition1b = d3_selection.select(one.firstChild).transition(transition),
      schedule1b = one.firstChild.__transition[transition._id];

  test.equal(transition1b._id, transition._id);
  test.equal(schedule1b.name, schedule1.name);
  test.equal(schedule1b.delay, schedule1.delay);
  test.equal(schedule1b.duration, schedule1.duration);
  test.equal(schedule1b.ease, schedule1.ease);
  test.equal(schedule1b.time, schedule1.time);

  d3_timer.timeout(function() {
    var transition2b = d3_selection.select(two.firstChild).transition(transition),
        schedule2b = two.firstChild.__transition[transition._id];

    test.equal(transition2b._id, transition._id);
    test.equal(schedule2b.name, schedule2.name);
    test.equal(schedule2b.delay, schedule2.delay);
    test.equal(schedule2b.duration, schedule2.duration);
    test.equal(schedule2b.ease, schedule2.ease);
    test.equal(schedule2b.time, schedule2.time);
    test.end();
  }, 10);
});

tape("selection.transition(transition) reselects the existing transition with the specified transition’s id, if any", function(test) {
  var root = jsdom.jsdom().documentElement,
      foo = function foo() {},
      bar = function bar() {},
      selection = d3_selection.select(root),
      transition1 = selection.transition().tween("tween", foo),
      schedule1 = root.__transition[transition1._id],
      transition2 = selection.transition(transition1).tween("tween", bar),
      schedule2 = root.__transition[transition2._id];

  test.equal(transition1._id, transition2._id);
  test.equal(schedule1, schedule2);
  test.equal(transition1.tween("tween"), bar);
  test.equal(transition2.tween("tween"), bar);
  test.end();
});
