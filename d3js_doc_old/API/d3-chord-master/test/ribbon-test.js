var tape = require("tape"),
    d3 = require("../");

tape("d3.ribbon() has the expected defaults", function(test) {
  var r = d3.ribbon();
  test.equal(r.radius()({radius: 42}), 42);
  test.equal(r.startAngle()({startAngle: 42}), 42);
  test.equal(r.endAngle()({endAngle: 42}), 42);
  test.deepEqual(r.source()({source: {name: "foo"}}), {name: "foo"});
  test.deepEqual(r.target()({target: {name: "foo"}}), {name: "foo"});
  test.equal(r.context(), null);
  test.end();
});

tape("ribbon.radius(radius) sets the radius accessor", function(test) {
  var foo = function(d) { return d.foo; },
      r = d3.ribbon();
  test.equal(r.radius(foo), r);
  test.equal(r.radius(), foo);
  test.equal(r.radius(42), r);
  test.equal(r.radius()(), 42);
  test.end();
});

tape("ribbon.startAngle(startAngle) sets the startAngle accessor", function(test) {
  var foo = function(d) { return d.foo; },
      r = d3.ribbon();
  test.equal(r.startAngle(foo), r);
  test.equal(r.startAngle(), foo);
  test.equal(r.startAngle(1.2), r);
  test.equal(r.startAngle()(), 1.2);
  test.end();
});

tape("ribbon.endAngle(endAngle) sets the endAngle accessor", function(test) {
  var foo = function(d) { return d.foo; },
      r = d3.ribbon();
  test.equal(r.endAngle(foo), r);
  test.equal(r.endAngle(), foo);
  test.equal(r.endAngle(1.2), r);
  test.equal(r.endAngle()(), 1.2);
  test.end();
});

tape("ribbon.source(source) sets the source accessor", function(test) {
  var foo = function(d) { return d.foo; },
      r = d3.ribbon();
  test.equal(r.source(foo), r);
  test.equal(r.source(), foo);
  test.end();
});

tape("ribbon.target(target) sets the target accessor", function(test) {
  var foo = function(d) { return d.foo; },
      r = d3.ribbon();
  test.equal(r.target(foo), r);
  test.equal(r.target(), foo);
  test.end();
});
