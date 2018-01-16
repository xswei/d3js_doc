var tape = require("tape"),
    jsdom = require("jsdom"),
    d3_ease = require("d3-ease"),
    d3_timer = require("d3-timer"),
    d3_interpolate = require("d3-interpolate"),
    d3_selection = require("d3-selection");

require("../../");

tape("transition.attr(name, value) creates an tween to the specified value", function(test) {
  var root = jsdom.jsdom().documentElement,
      ease = d3_ease.easeCubic,
      duration = 250,
      interpolate = d3_interpolate.interpolateRgb("red", "blue"),
      selection = d3_selection.select(root).attr("fill", "red"),
      transition = selection.transition().attr("fill", "blue");

  d3_timer.timeout(function(elapsed) {
    test.strictEqual(root.getAttribute("fill"), interpolate(ease(elapsed / duration)));
    test.end();
  }, 125);
});

tape("transition.attr(name, value) creates a namespaced tween to the specified value", function(test) {
  var root = jsdom.jsdom().documentElement,
      ease = d3_ease.easeCubic,
      duration = 250,
      interpolate = d3_interpolate.interpolateRgb("red", "blue"),
      selection = d3_selection.select(root).attr("svg:fill", "red"),
      transition = selection.transition().attr("svg:fill", "blue");

  d3_timer.timeout(function(elapsed) {
    test.strictEqual(root.getAttributeNS("http://www.w3.org/2000/svg", "fill"), interpolate(ease(elapsed / duration)));
    test.end();
  }, 125);
});

tape("transition.attr(name, value) creates an tween to the value returned by the specified function", function(test) {
  var root = jsdom.jsdom().documentElement,
      ease = d3_ease.easeCubic,
      duration = 250,
      interpolate = d3_interpolate.interpolateRgb("red", "blue"),
      selection = d3_selection.select(root).attr("fill", "red"),
      transition = selection.transition().attr("fill", function() { return "blue"; });

  d3_timer.timeout(function(elapsed) {
    test.strictEqual(root.getAttribute("fill"), interpolate(ease(elapsed / duration)));
    test.end();
  }, 125);
});

tape("transition.attr(name, value) creates a namespaced tween to the value returned by the specified function", function(test) {
  var root = jsdom.jsdom().documentElement,
      ease = d3_ease.easeCubic,
      duration = 250,
      interpolate = d3_interpolate.interpolateRgb("red", "blue"),
      selection = d3_selection.select(root).attr("svg:fill", "red"),
      transition = selection.transition().attr("svg:fill", function() { return "blue"; });

  d3_timer.timeout(function(elapsed) {
    test.strictEqual(root.getAttributeNS("http://www.w3.org/2000/svg", "fill"), interpolate(ease(elapsed / duration)));
    test.end();
  }, 125);
});

tape("transition.attr(name, value) immediately evaluates the specified function with the expected context and arguments", function(test) {
  var document = jsdom.jsdom("<h1 id='one' fill='cyan'></h1><h1 id='two' fill='magenta'></h1>"),
      one = document.querySelector("#one"),
      two = document.querySelector("#two"),
      ease = d3_ease.easeCubic,
      duration = 250,
      interpolate1 = d3_interpolate.interpolateRgb("cyan", "red"),
      interpolate2 = d3_interpolate.interpolateRgb("magenta", "green"),
      selection = d3_selection.selectAll([one, two]).data(["red", "green"]),
      result = [],
      transition = selection.transition().attr("fill", function(d, i, nodes) { result.push([d, i, nodes, this]); return d; });

  test.deepEqual(result, [
    ["red", 0, [one, two], one],
    ["green", 1, [one, two], two]
  ]);

  d3_timer.timeout(function(elapsed) {
    test.strictEqual(one.getAttribute("fill"), interpolate1(ease(elapsed / duration)));
    test.strictEqual(two.getAttribute("fill"), interpolate2(ease(elapsed / duration)));
    test.end();
  }, 125);
});

tape("transition.attr(name, value) constructs an interpolator using the current value on start", function(test) {
  var root = jsdom.jsdom().documentElement,
      ease = d3_ease.easeCubic,
      duration = 250,
      interpolate = d3_interpolate.interpolateRgb("red", "blue"),
      selection = d3_selection.select(root),
      transition = selection.transition().on("start", function() { selection.attr("fill", "red"); }).attr("fill", function() { return "blue"; });

  d3_timer.timeout(function(elapsed) {
    test.strictEqual(root.getAttribute("fill"), interpolate(ease(elapsed / duration)));
    test.end();
  }, 125);
});

tape("transition.attr(name, null) creates an tween which removes the specified attribute post-start", function(test) {
  var root = jsdom.jsdom().documentElement,
      selection = d3_selection.select(root).attr("fill", "red"),
      transition = selection.transition().attr("fill", null).on("start", started);

  function started() {
    test.equal(root.getAttribute("fill"), "red");
  }

  d3_timer.timeout(function(elapsed) {
    test.equal(root.hasAttribute("fill"), false);
    test.end();
  });
});

tape("transition.attr(name, null) creates an tween which removes the specified namespaced attribute post-start", function(test) {
  var root = jsdom.jsdom().documentElement,
      selection = d3_selection.select(root).attr("svg:fill", "red"),
      transition = selection.transition().attr("svg:fill", null).on("start", started);

  function started() {
    test.equal(root.getAttributeNS("http://www.w3.org/2000/svg", "fill"), "red");
  }

  d3_timer.timeout(function(elapsed) {
    test.equal(root.hasAttributeNS("http://www.w3.org/2000/svg", "fill"), false);
    test.end();
  });
});

tape("transition.attr(name, value) creates an tween which removes the specified attribute post-start if the specified function returns null", function(test) {
  var root = jsdom.jsdom().documentElement,
      selection = d3_selection.select(root).attr("fill", "red"),
      transition = selection.transition().attr("fill", function() {}).on("start", started);

  function started() {
    test.equal(root.getAttribute("fill"), "red");
  }

  d3_timer.timeout(function(elapsed) {
    test.equal(root.hasAttribute("fill"), false);
    test.end();
  });
});

tape("transition.attr(name, value) creates an tween which removes the specified namespaced attribute post-start if the specified function returns null", function(test) {
  var root = jsdom.jsdom().documentElement,
      selection = d3_selection.select(root).attr("svg:fill", "red"),
      transition = selection.transition().attr("svg:fill", function() {}).on("start", started);

  function started() {
    test.equal(root.getAttributeNS("http://www.w3.org/2000/svg", "fill"), "red");
  }

  d3_timer.timeout(function(elapsed) {
    test.equal(root.hasAttributeNS("http://www.w3.org/2000/svg", "fill"), false);
    test.end();
  });
});

tape("transition.attr(name, value) interpolates numbers", function(test) {
  var root = jsdom.jsdom().documentElement,
      ease = d3_ease.easeCubic,
      duration = 250,
      interpolate = d3_interpolate.interpolateNumber(1, 2),
      selection = d3_selection.select(root).attr("foo", 1),
      transition = selection.transition().attr("foo", 2);

  d3_timer.timeout(function(elapsed) {
    test.strictEqual(root.getAttribute("foo"), interpolate(ease(elapsed / duration)) + "");
    test.end();
  }, 125);
});

tape("transition.attr(name, value) interpolates strings", function(test) {
  var root = jsdom.jsdom().documentElement,
      ease = d3_ease.easeCubic,
      duration = 250,
      interpolate = d3_interpolate.interpolateString("1px", "2px"),
      selection = d3_selection.select(root).attr("foo", "1px"),
      transition = selection.transition().attr("foo", "2px");

  d3_timer.timeout(function(elapsed) {
    test.strictEqual(root.getAttribute("foo"), interpolate(ease(elapsed / duration)));
    test.end();
  }, 125);
});

tape("transition.attr(name, value) interpolates colors", function(test) {
  var root = jsdom.jsdom().documentElement,
      ease = d3_ease.easeCubic,
      duration = 250,
      interpolate = d3_interpolate.interpolateRgb("#f00", "#00f"),
      selection = d3_selection.select(root).attr("foo", "#f00"),
      transition = selection.transition().attr("foo", "#00f");

  d3_timer.timeout(function(elapsed) {
    test.strictEqual(root.getAttribute("foo"), interpolate(ease(elapsed / duration)));
    test.end();
  }, 125);
});

tape("transition.attr(name, value) creates an attrTween with the specified name", function(test) {
  var root = jsdom.jsdom().documentElement,
      selection = d3_selection.select(root).attr("fill", "red"),
      transition = selection.transition().attr("fill", "blue");
  test.equal(transition.attrTween("fill").call(root)(0.5), "rgb(128, 0, 128)");
  test.end();
});

tape("transition.attr(name, value) creates a tween with the name \"attr.name\"", function(test) {
  var root = jsdom.jsdom().documentElement,
      selection = d3_selection.select(root).attr("fill", "red"),
      transition = selection.transition().attr("fill", "blue");
  transition.tween("attr.fill").call(root)(0.5);
  test.equal(root.getAttribute("fill"), "rgb(128, 0, 128)");
  test.end();
});
