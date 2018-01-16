var tape = require("tape"),
    jsdom = require("jsdom"),
    d3_selection = require("d3-selection"),
    d3_timer = require("d3-timer"),
    state = require("../transition/state");

require("../../");

tape("selection.interrupt() returns the selection", function(test) {
  var document = jsdom.jsdom(),
      selection = d3_selection.select(document);
  test.equal(selection.interrupt(), selection);
  test.end();
});

tape("selection.interrupt() cancels any pending transitions on the selected elements", function(test) {
  var root = jsdom.jsdom().documentElement,
      selection = d3_selection.select(root),
      transition1 = selection.transition(),
      transition2 = transition1.transition();
  test.equal(transition1._id in root.__transition, true);
  test.equal(transition2._id in root.__transition, true);
  test.equal(selection.interrupt(), selection);
  test.equal(root.__transition, undefined);
  test.end();
});

tape("selection.interrupt() only cancels pending transitions with the null name", function(test) {
  var root = jsdom.jsdom().documentElement,
      selection = d3_selection.select(root),
      transition1 = selection.transition("foo"),
      transition2 = selection.transition();
  test.equal(transition1._id in root.__transition, true);
  test.equal(transition2._id in root.__transition, true);
  test.equal(selection.interrupt(), selection);
  test.equal(transition1._id in root.__transition, true);
  test.equal(transition2._id in root.__transition, false);
  test.end();
});

tape("selection.interrupt(null) only cancels pending transitions with the null name", function(test) {
  var root = jsdom.jsdom().documentElement,
      selection = d3_selection.select(root),
      transition1 = selection.transition("foo"),
      transition2 = selection.transition();
  test.equal(transition1._id in root.__transition, true);
  test.equal(transition2._id in root.__transition, true);
  test.equal(selection.interrupt(null), selection);
  test.equal(transition1._id in root.__transition, true);
  test.equal(transition2._id in root.__transition, false);
  test.end();
});

tape("selection.interrupt(undefined) only cancels pending transitions with the null name", function(test) {
  var root = jsdom.jsdom().documentElement,
      selection = d3_selection.select(root),
      transition1 = selection.transition("foo"),
      transition2 = selection.transition();
  test.equal(transition1._id in root.__transition, true);
  test.equal(transition2._id in root.__transition, true);
  test.equal(selection.interrupt(undefined), selection);
  test.equal(transition1._id in root.__transition, true);
  test.equal(transition2._id in root.__transition, false);
  test.end();
});

tape("selection.interrupt(name) only cancels pending transitions with the specified name", function(test) {
  var root = jsdom.jsdom().documentElement,
      selection = d3_selection.select(root),
      transition1 = selection.transition("foo"),
      transition2 = selection.transition();
  test.equal(transition1._id in root.__transition, true);
  test.equal(transition2._id in root.__transition, true);
  test.equal(selection.interrupt("foo"), selection);
  test.equal(transition1._id in root.__transition, false);
  test.equal(transition2._id in root.__transition, true);
  test.end();
});

tape("selection.interrupt(name) coerces the name to a string", function(test) {
  var root = jsdom.jsdom().documentElement,
      selection = d3_selection.select(root),
      transition1 = selection.transition("foo"),
      transition2 = selection.transition();
  test.equal(transition1._id in root.__transition, true);
  test.equal(transition2._id in root.__transition, true);
  test.equal(selection.interrupt({toString: function() { return "foo"; }}), selection);
  test.equal(transition1._id in root.__transition, false);
  test.equal(transition2._id in root.__transition, true);
  test.end();
});

tape("selection.interrupt() does nothing if there is no transition on the selected elements", function(test) {
  var root = jsdom.jsdom().documentElement,
      selection = d3_selection.select(root);
  test.equal(root.__transition, undefined);
  test.equal(selection.interrupt(), selection);
  test.equal(root.__transition, undefined);
  test.end();
});

tape("selection.interrupt() dispatches an interrupt event to the started transition on the selected elements", function(test) {
  var root = jsdom.jsdom().documentElement,
      interrupts = 0,
      selection = d3_selection.select(root),
      transition = selection.transition().on("interrupt", function() { ++interrupts; });
  d3_timer.timeout(function() {
    var schedule = root.__transition[transition._id];
    test.equal(schedule.state, state.STARTED);
    selection.interrupt();
    test.equal(schedule.timer._call, null);
    test.equal(schedule.state, state.ENDED);
    test.equal(root.__transition, undefined);
    test.equal(interrupts, 1);
    test.end();
  });
});

tape("selection.interrupt() destroys the schedule after dispatching the interrupt event", function(test) {
  var root = jsdom.jsdom().documentElement,
      selection = d3_selection.select(root),
      transition = selection.transition().on("interrupt", interrupted);

  d3_timer.timeout(function() {
    selection.interrupt();
  });

  function interrupted() {
    test.equal(transition.delay(), 0);
    test.equal(transition.duration(), 250);
    test.equal(transition.on("interrupt"), interrupted);
    test.end();
  }
});

tape("selection.interrupt() does not dispatch an interrupt event to a starting transition", function(test) {
  var root = jsdom.jsdom().documentElement,
      interrupts = 0,
      selection = d3_selection.select(root),
      transition = selection.transition().on("interrupt", function() { ++interrupts; }).on("start", started);

  function started() {
    var schedule = root.__transition[transition._id];
    test.equal(schedule.state, state.STARTING);
    selection.interrupt();
    test.equal(schedule.timer._call, null);
    test.equal(schedule.state, state.ENDED);
    test.equal(root.__transition, undefined);
    test.equal(interrupts, 0);
    test.end();
  }
});

tape("selection.interrupt() prevents a created transition from starting", function(test) {
  var root = jsdom.jsdom().documentElement,
      starts = 0,
      selection = d3_selection.select(root),
      transition = selection.transition().on("start", function() { ++starts; }),
      schedule = root.__transition[transition._id];

  test.equal(schedule.state, state.CREATED);
  selection.interrupt();
  test.equal(schedule.timer._call, null);
  test.equal(schedule.state, state.ENDED);
  test.equal(root.__transition, undefined);

  d3_timer.timeout(function() {
    test.equal(starts, 0);
    test.end();
  }, 10);
});

tape("selection.interrupt() prevents a scheduled transition from starting", function(test) {
  var root = jsdom.jsdom().documentElement,
      starts = 0,
      selection = d3_selection.select(root),
      transition = selection.transition().delay(50).on("start", function() { ++starts; }),
      schedule = root.__transition[transition._id];

  d3_timer.timeout(function() {
    test.equal(schedule.state, state.SCHEDULED);
    selection.interrupt();
    test.equal(schedule.timer._call, null);
    test.equal(schedule.state, state.ENDED);
    test.equal(root.__transition, undefined);
  });

  d3_timer.timeout(function() {
    test.equal(starts, 0);
    test.end();
  }, 60);
});

tape("selection.interrupt() prevents a starting transition from initializing tweens", function(test) {
  var root = jsdom.jsdom().documentElement,
      tweens = 0,
      selection = d3_selection.select(root),
      transition = selection.transition().tween("tween", function() { ++tweens; }).on("start", started),
      schedule = root.__transition[transition._id];

  function started() {
    test.equal(schedule.state, state.STARTING);
    selection.interrupt();
    test.equal(schedule.timer._call, null);
    test.equal(schedule.state, state.ENDED);
    test.equal(root.__transition, undefined);
  }

  d3_timer.timeout(function() {
    test.equal(tweens, 0);
    test.end();
  }, 10);
});

tape("selection.interrupt() during tween initialization prevents an active transition from continuing", function(test) {
  var root = jsdom.jsdom().documentElement,
      tweens = 0,
      selection = d3_selection.select(root),
      transition = selection.transition().tween("tween", function() { selection.interrupt(); return function() { ++tweens; }; }),
      schedule = root.__transition[transition._id];

  d3_timer.timeout(function() {
    test.equal(schedule.timer._call, null);
    test.equal(schedule.state, state.ENDED);
    test.equal(root.__transition, undefined);
    test.equal(tweens, 0);
    test.end();
  }, 10);
});

tape("selection.interrupt() prevents an active transition from continuing", function(test) {
  var root = jsdom.jsdom().documentElement,
      interrupted = false,
      tweens = 0,
      selection = d3_selection.select(root),
      transition = selection.transition().tween("tween", function() { return function() { if (interrupted) ++tweens; }; }),
      schedule = root.__transition[transition._id];

  d3_timer.timeout(function() {
    interrupted = true;
    test.equal(schedule.state, state.STARTED);
    selection.interrupt();
    test.equal(schedule.timer._call, null);
    test.equal(schedule.state, state.ENDED);
    test.equal(root.__transition, undefined);
  }, 10);

  d3_timer.timeout(function() {
    test.equal(tweens, 0);
    test.end();
  }, 50);
});

tape("selection.interrupt() during the final tween invocation prevents the end event from being dispatched", function(test) {
  var root = jsdom.jsdom().documentElement,
      ends = 0,
      selection = d3_selection.select(root),
      transition = selection.transition().duration(50).tween("tween", tween).on("end", function() { ++ends; }),
      schedule = root.__transition[transition._id];

  function tween() {
    return function(t) {
      if (t >= 1) {
        test.equal(schedule.state, state.ENDING);
        selection.interrupt();
      }
    };
  }

  d3_timer.timeout(function() {
    test.equal(schedule.timer._call, null);
    test.equal(schedule.state, state.ENDED);
    test.equal(root.__transition, undefined);
    test.equal(ends, 0);
    test.end();
  }, 60);
});

tape("selection.interrupt() has no effect on an ended transition", function(test) {
  var root = jsdom.jsdom().documentElement,
      selection = d3_selection.select(root),
      transition = selection.transition().duration(50).on("end", ended),
      schedule = root.__transition[transition._id];

  function ended() {
    d3_timer.timeout(function() {
      test.equal(schedule.state, state.ENDED);
      test.equal(schedule.timer._call, null);
      selection.interrupt();
      test.equal(schedule.state, state.ENDED);
      test.equal(schedule.timer._call, null);
      test.equal(root.__transition, undefined);
      test.end();
    });
  }
});

tape("selection.interrupt() has no effect on an interrupting transition", function(test) {
  var root = jsdom.jsdom().documentElement,
      interrupts = 0,
      selection = d3_selection.select(root),
      transition = selection.transition().duration(50).on("interrupt", interrupted),
      schedule = root.__transition[transition._id];

  d3_timer.timeout(function() {
    test.equal(schedule.state, state.STARTED);
    selection.interrupt();
    test.equal(schedule.state, state.ENDED);
    test.equal(schedule.timer._call, null);
    test.equal(interrupts, 1);
    test.end();
  });

  function interrupted() {
    ++interrupts;
    selection.interrupt();
  }
});
