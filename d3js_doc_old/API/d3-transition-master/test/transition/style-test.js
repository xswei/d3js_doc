var tape = require("tape"),
    jsdom = require("jsdom"),
    d3_ease = require("d3-ease"),
    d3_timer = require("d3-timer"),
    d3_interpolate = require("d3-interpolate"),
    d3_selection = require("d3-selection");

require("../../");

tape("transition.style(name, value) creates an tween to the specified value", function(test) {
  var root = jsdom.jsdom().documentElement,
      ease = d3_ease.easeCubic,
      duration = 250,
      interpolate = d3_interpolate.interpolateRgb("red", "blue"),
      selection = d3_selection.select(root).style("color", "red"),
      transition = selection.transition().style("color", "blue");

  d3_timer.timeout(function(elapsed) {
    test.strictEqual(root.style.getPropertyValue("color"), interpolate(ease(elapsed / duration)));
    test.end();
  }, 125);
});

tape("transition.style(name, value) creates an tween to the value returned by the specified function", function(test) {
  var root = jsdom.jsdom().documentElement,
      ease = d3_ease.easeCubic,
      duration = 250,
      interpolate = d3_interpolate.interpolateRgb("red", "blue"),
      selection = d3_selection.select(root).style("color", "red"),
      transition = selection.transition().style("color", function() { return "blue"; });

  d3_timer.timeout(function(elapsed) {
    test.strictEqual(root.style.getPropertyValue("color"), interpolate(ease(elapsed / duration)));
    test.end();
  }, 125);
});

tape("transition.style(name, value) immediately evaluates the specified function with the expected context and arguments", function(test) {
  var document = jsdom.jsdom("<h1 id='one' style='color:#0ff;'></h1><h1 id='two' style='color:#f0f;'></h1>"),
      one = document.querySelector("#one"),
      two = document.querySelector("#two"),
      ease = d3_ease.easeCubic,
      duration = 250,
      interpolate1 = d3_interpolate.interpolateRgb("cyan", "red"),
      interpolate2 = d3_interpolate.interpolateRgb("magenta", "green"),
      selection = d3_selection.selectAll([one, two]).data(["red", "green"]),
      result = [],
      transition = selection.transition().style("color", function(d, i, nodes) { result.push([d, i, nodes, this]); return d; });

  test.deepEqual(result, [
    ["red", 0, [one, two], one],
    ["green", 1, [one, two], two]
  ]);

  d3_timer.timeout(function(elapsed) {
    test.strictEqual(one.style.getPropertyValue("color"), interpolate1(ease(elapsed / duration)));
    test.strictEqual(two.style.getPropertyValue("color"), interpolate2(ease(elapsed / duration)));
    test.end();
  }, 125);
});

tape("transition.style(name, value) constructs an interpolator using the current value on start", function(test) {
  var root = jsdom.jsdom().documentElement,
      ease = d3_ease.easeCubic,
      duration = 250,
      interpolate = d3_interpolate.interpolateRgb("red", "blue"),
      selection = d3_selection.select(root),
      transition = selection.transition().on("start", function() { selection.style("color", "red"); }).style("color", function() { return "blue"; });

  d3_timer.timeout(function(elapsed) {
    test.strictEqual(root.style.getPropertyValue("color"), interpolate(ease(elapsed / duration)));
    test.end();
  }, 125);
});

tape("transition.style(name, null) creates an tween which removes the specified style post-start", function(test) {
  var root = jsdom.jsdom().documentElement,
      selection = d3_selection.select(root).style("color", "red"),
      transition = selection.transition().style("color", null).on("start", started);

  function started() {
    test.equal(root.style.getPropertyValue("color"), "red");
  }

  d3_timer.timeout(function(elapsed) {
    test.equal(root.style.getPropertyValue("color"), "");
    test.end();
  });
});

tape("transition.style(name, value) creates an tween which removes the specified style post-start if the specified function returns null", function(test) {
  var root = jsdom.jsdom().documentElement,
      selection = d3_selection.select(root).style("color", "red"),
      transition = selection.transition().style("color", function() {}).on("start", started);

  function started() {
    test.equal(root.style.getPropertyValue("color"), "red");
  }

  d3_timer.timeout(function(elapsed) {
    test.equal(root.style.getPropertyValue("color"), "");
    test.end();
  });
});

tape("transition.style(name, value) interpolates numbers", function(test) {
  var root = jsdom.jsdom().documentElement,
      ease = d3_ease.easeCubic,
      duration = 250,
      interpolate = d3_interpolate.interpolateNumber(0, 1),
      selection = d3_selection.select(root).style("opacity", 0),
      transition = selection.transition().style("opacity", 1);

  d3_timer.timeout(function(elapsed) {
    test.strictEqual(root.style.getPropertyValue("opacity"), interpolate(ease(elapsed / duration)) + "");
    test.end();
  }, 125);
});

tape("transition.style(name, value) interpolates strings", function(test) {
  var root = jsdom.jsdom().documentElement,
      ease = d3_ease.easeCubic,
      duration = 250,
      interpolate = d3_interpolate.interpolateString("1px", "2px"),
      selection = d3_selection.select(root).style("font-size", "1px"),
      transition = selection.transition().style("font-size", "2px");

  d3_timer.timeout(function(elapsed) {
    test.strictEqual(root.style.getPropertyValue("font-size"), interpolate(ease(elapsed / duration)));
    test.end();
  }, 125);
});

tape("transition.style(name, value) interpolates colors", function(test) {
  var root = jsdom.jsdom().documentElement,
      ease = d3_ease.easeCubic,
      duration = 250,
      interpolate = d3_interpolate.interpolateRgb("#f00", "#00f"),
      selection = d3_selection.select(root).style("color", "#f00"),
      transition = selection.transition().style("color", "#00f");

  d3_timer.timeout(function(elapsed) {
    test.strictEqual(root.style.getPropertyValue("color"), interpolate(ease(elapsed / duration)));
    test.end();
  }, 125);
});

tape("transition.style(name, value) creates an styleTween with the specified name", function(test) {
  var root = jsdom.jsdom().documentElement,
      selection = d3_selection.select(root).style("color", "red"),
      transition = selection.transition().style("color", "blue");
  test.equal(transition.styleTween("color").call(root)(0.5), "rgb(128, 0, 128)");
  test.end();
});

tape("transition.style(name, value) creates a tween with the name \"style.name\"", function(test) {
  var root = jsdom.jsdom().documentElement,
      selection = d3_selection.select(root).style("color", "red"),
      transition = selection.transition().style("color", "blue");
  transition.tween("style.color").call(root)(0.5);
  test.equal(root.style.getPropertyValue("color"), "rgb(128, 0, 128)");
  test.end();
});
