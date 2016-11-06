var tape = require("tape"),
    jsdom = require("jsdom"),
    d3_timer = require("d3-timer"),
    d3_selection = require("d3-selection");

require("../../");

tape("transition.remove() creates an end listener to remove the element", function(test) {
  var document = jsdom.jsdom(),
      root = document.documentElement,
      body = document.body,
      selection = d3_selection.select(body),
      transition = selection.transition().remove().on("start", started).on("end", ended);

  function started() {
    test.equal(body.parentNode, root);
  }

  function ended() {
    test.equal(body.parentNode, null);
    test.end();
  }

  d3_timer.timeout(function(elapsed) {
    test.equal(body.parentNode, root);
  });
});

tape("transition.remove() creates an end listener named end.remove", function(test) {
  var document = jsdom.jsdom(),
      root = document.documentElement,
      body = document.body,
      selection = d3_selection.select(body),
      transition = selection.transition().remove().on("start", started).on("end", ended);

  transition.on("end.remove").call(body);
  test.equal(body.parentNode, null);
  transition.on("end.remove", null);
  root.appendChild(body);

  function started() {
    test.equal(body.parentNode, root);
  }

  function ended() {
    test.equal(body.parentNode, root);
    test.end();
  }
});
