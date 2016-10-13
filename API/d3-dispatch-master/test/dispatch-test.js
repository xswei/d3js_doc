var tape = require("tape"),
    dispatch = require("../");

tape("dispatch(type…) returns a dispatch object with the specified types", function(test) {
  var d = dispatch.dispatch("foo", "bar");
  test.ok(d instanceof dispatch.dispatch);
  test.equal(d.constructor.name, "Dispatch");
  test.end();
});

tape("dispatch(type…) does not throw an error if a specified type name collides with a dispatch method", function(test) {
  var d = dispatch.dispatch("on");
  test.ok(d instanceof dispatch.dispatch);
  test.end();
});

tape("dispatch(type…) throws an error if a specified type name is illegal", function(test) {
  test.throws(function() { dispatch.dispatch("__proto__"); });
  test.throws(function() { dispatch.dispatch("hasOwnProperty"); });
  test.throws(function() { dispatch.dispatch(""); });
  test.end();
});

tape("dispatch(type…) throws an error if a specified type name is a duplicate", function(test) {
  test.throws(function() { dispatch.dispatch("foo", "foo"); });
  test.end();
});

tape("dispatch(type).call(type, object, arguments…) invokes callbacks of the specified type", function(test) {
  var foo = 0,
      bar = 0,
      d = dispatch.dispatch("foo", "bar").on("foo", function() { ++foo; }).on("bar", function() { ++bar; });
  d.call("foo");
  test.equal(foo, 1);
  test.equal(bar, 0);
  d.call("foo");
  d.call("bar");
  test.equal(foo, 2);
  test.equal(bar, 1);
  test.end();
});

tape("dispatch(type).call(type, object, arguments…) invokes callbacks with specified arguments and context", function(test) {
  var results = [],
      foo = {},
      bar = {},
      d = dispatch.dispatch("foo").on("foo", function() { results.push({this: this, arguments: [].slice.call(arguments)}); });
  d.call("foo", foo, bar);
  test.deepEqual(results, [{this: foo, arguments: [bar]}]);
  d.call("foo", bar, foo, 42, "baz");
  test.deepEqual(results, [{this: foo, arguments: [bar]}, {this: bar, arguments: [foo, 42, "baz"]}]);
  test.end();
});

tape("dispatch(type).call(type, object, arguments…) invokes callbacks in the order they were added", function(test) {
  var results = [],
      d = dispatch.dispatch("foo");
  d.on("foo.a", function() { results.push("A"); });
  d.on("foo.b", function() { results.push("B"); });
  d.call("foo");
  d.on("foo.c", function() { results.push("C"); });
  d.on("foo.a", function() { results.push("A"); }); // move to end
  d.call("foo");
  test.deepEqual(results, ["A", "B", "B", "C", "A"]);
  test.end();
});

tape("dispatch(type).call(type, object, arguments…) returns undefined", function(test) {
  var d = dispatch.dispatch("foo");
  test.equal(d.call("foo"), undefined);
  test.end();
});

tape("dispatch(type).apply(type, object, arguments) invokes callbacks of the specified type", function(test) {
  var foo = 0,
      bar = 0,
      d = dispatch.dispatch("foo", "bar").on("foo", function() { ++foo; }).on("bar", function() { ++bar; });
  d.apply("foo");
  test.equal(foo, 1);
  test.equal(bar, 0);
  d.apply("foo");
  d.apply("bar");
  test.equal(foo, 2);
  test.equal(bar, 1);
  test.end();
});

tape("dispatch(type).apply(type, object, arguments) invokes callbacks with specified arguments and context", function(test) {
  var results = [],
      foo = {},
      bar = {},
      d = dispatch.dispatch("foo").on("foo", function() { results.push({this: this, arguments: [].slice.call(arguments)}); });
  d.apply("foo", foo, [bar]);
  test.deepEqual(results, [{this: foo, arguments: [bar]}]);
  d.apply("foo", bar, [foo, 42, "baz"]);
  test.deepEqual(results, [{this: foo, arguments: [bar]}, {this: bar, arguments: [foo, 42, "baz"]}]);
  test.end();
});

tape("dispatch(type).apply(type, object, arguments) invokes callbacks in the order they were added", function(test) {
  var results = [],
      d = dispatch.dispatch("foo");
  d.on("foo.a", function() { results.push("A"); });
  d.on("foo.b", function() { results.push("B"); });
  d.apply("foo");
  d.on("foo.c", function() { results.push("C"); });
  d.on("foo.a", function() { results.push("A"); }); // move to end
  d.apply("foo");
  test.deepEqual(results, ["A", "B", "B", "C", "A"]);
  test.end();
});

tape("dispatch(type).apply(type, object, arguments) returns undefined", function(test) {
  var d = dispatch.dispatch("foo");
  test.equal(d.apply("foo"), undefined);
  test.end();
});

tape("dispatch(type).on(type, f) returns the dispatch object", function(test) {
  var d = dispatch.dispatch("foo");
  test.equal(d.on("foo", function() {}), d);
  test.end();
});

tape("dispatch(type).on(type, f) replaces an existing callback, if present", function(test) {
  var foo = 0,
      bar = 0,
      d = dispatch.dispatch("foo", "bar");
  d.on("foo", function() { ++foo; });
  d.call("foo");
  test.equal(foo, 1);
  test.equal(bar, 0);
  d.on("foo", function() { ++bar; });
  d.call("foo");
  test.equal(foo, 1);
  test.equal(bar, 1);
  test.end();
});

tape("dispatch(type).on(type, f) replacing an existing callback with itself has no effect", function(test) {
  var foo = 0,
      FOO = function() { ++foo; },
      d = dispatch.dispatch("foo").on("foo", FOO);
  d.call("foo");
  test.equal(foo, 1);
  d.on("foo", FOO).on("foo", FOO).on("foo", FOO);
  d.call("foo");
  test.equal(foo, 2);
  test.end();
});

tape("dispatch(type).on(type., …) is equivalent to dispatch(type).on(type, …)", function(test) {
  var d = dispatch.dispatch("foo"),
      foos = 0,
      bars = 0,
      foo = function() { ++foos; },
      bar = function() { ++bars; };
  test.equal(d.on("foo.", foo), d);
  test.equal(d.on("foo."), foo);
  test.equal(d.on("foo"), foo);
  test.equal(d.on("foo.", bar), d);
  test.equal(d.on("foo."), bar);
  test.equal(d.on("foo"), bar);
  test.equal(d.call("foo"), undefined);
  test.equal(foos, 0);
  test.equal(bars, 1);
  test.equal(d.on(".", null), d);
  test.equal(d.on("foo"), undefined);
  test.equal(d.call("foo"), undefined);
  test.equal(foos, 0);
  test.equal(bars, 1);
  test.end();
});

tape("dispatch(type).on(type, null) removes an existing callback, if present", function(test) {
  var foo = 0,
      d = dispatch.dispatch("foo", "bar");
  d.on("foo", function() { ++foo; });
  d.call("foo");
  test.equal(foo, 1);
  d.on("foo", null);
  d.call("foo");
  test.equal(foo, 1);
  test.end();
});

tape("dispatch(type).on(type, null) does not remove a shared callback", function(test) {
  var a = 0,
      A = function() { ++a; },
      d = dispatch.dispatch("foo", "bar").on("foo", A).on("bar", A);
  d.call("foo");
  d.call("bar");
  test.equal(a, 2);
  d.on("foo", null);
  d.call("bar");
  test.equal(a, 3);
  test.end();
});

tape("dispatch(type).on(type, null) removing a missing callback has no effect", function(test) {
  var d = dispatch.dispatch("foo"), a = 0;
  function A() { ++a; }
  d.on("foo.a", null).on("foo", A).on("foo", null).on("foo", null);
  d.call("foo");
  test.equal(a, 0);
  test.end();
});

tape("dispatch(type).on(type, null) during a callback does not invoke the old callback", function(test) {
  var a = 0,
      b = 0,
      c = 0,
      A = function() { ++a; d.on("foo.B", null); }, // remove B
      B = function() { ++b; },
      C = function() { ++c; },
      d = dispatch.dispatch("foo").on("foo.A", A).on("foo.B", B);
  d.call("foo");
  test.equal(a, 1);
  test.equal(b, 0);
  test.equal(c, 0);
  test.end();
});

tape("dispatch(type).on(type, f) during a callback does not invoke the old or the new callback", function(test) {
  var a = 0,
      b = 0,
      c = 0,
      A = function() { ++a; d.on("foo.B", C); }, // replace B with C
      B = function() { ++b; },
      C = function() { ++c; },
      d = dispatch.dispatch("foo").on("foo.A", A).on("foo.B", B);
  d.call("foo");
  test.equal(a, 1);
  test.equal(b, 0);
  test.equal(c, 0);
  test.end();
});

tape("dispatch(type).on(type, f) during a callback does not invoke the new callback", function(test) {
  var a = 0,
      b = 0,
      A = function() { ++a; d.on("foo.B", B); }, // add B
      B = function() { ++b; },
      d = dispatch.dispatch("foo").on("foo.A", A);
  d.call("foo");
  test.equal(a, 1);
  test.equal(b, 0);
  test.end();
});

tape("dispatch(type).on(type, f) coerces type to a string", function(test) {
  var f = function() {},
      g = function() {},
      d = dispatch.dispatch(null, undefined).on(null, f).on(undefined, g);
  test.equal(d.on(null), f);
  test.equal(d.on(undefined), g);
  test.end();
});

tape("dispatch(\"foo\", \"bar\").on(\"foo bar\", f) adds a callback for both types", function(test) {
  var foos = 0,
      foo = function() { ++foos; },
      d = dispatch.dispatch("foo", "bar").on("foo bar", foo);
  test.equal(d.on("foo"), foo);
  test.equal(d.on("bar"), foo);
  d.call("foo");
  test.equal(foos, 1);
  d.call("bar");
  test.equal(foos, 2);
  test.end();
});

tape("dispatch(\"foo\").on(\"foo.one foo.two\", f) adds a callback for both typenames", function(test) {
  var foos = 0,
      foo = function() { ++foos; },
      d = dispatch.dispatch("foo").on("foo.one foo.two", foo);
  test.equal(d.on("foo.one"), foo);
  test.equal(d.on("foo.two"), foo);
  d.call("foo");
  test.equal(foos, 2);
  test.end();
});

tape("dispatch(\"foo\", \"bar\").on(\"foo bar\") returns the callback for either type", function(test) {
  var foos = 0,
      foo = function() { ++foos; },
      d = dispatch.dispatch("foo", "bar");
  d.on("foo", foo);
  test.equal(d.on("foo bar"), foo);
  test.equal(d.on("bar foo"), foo);
  d.on("foo", null).on("bar", foo);
  test.equal(d.on("foo bar"), foo);
  test.equal(d.on("bar foo"), foo);
  test.end();
});

tape("dispatch(\"foo\").on(\"foo.one foo.two\") returns the callback for either typename", function(test) {
  var foos = 0,
      foo = function() { ++foos; },
      d = dispatch.dispatch("foo");
  d.on("foo.one", foo);
  test.equal(d.on("foo.one foo.two"), foo);
  test.equal(d.on("foo.two foo.one"), foo);
  test.equal(d.on("foo foo.one"), foo);
  test.equal(d.on("foo.one foo"), foo);
  d.on("foo.one", null).on("foo.two", foo);
  test.equal(d.on("foo.one foo.two"), foo);
  test.equal(d.on("foo.two foo.one"), foo);
  test.equal(d.on("foo foo.two"), foo);
  test.equal(d.on("foo.two foo"), foo);
  test.end();
});

tape("dispatch(\"foo\").on(\".one .two\", null) removes the callback for either typename", function(test) {
  var foos = 0,
      foo = function() { ++foos; },
      d = dispatch.dispatch("foo");
  d.on("foo.one", foo);
  d.on("foo.two", foo);
  d.on("foo.one foo.two", null);
  test.equal(d.on("foo.one"), undefined);
  test.equal(d.on("foo.two"), undefined);
  test.end();
});

tape("dispatch(type).on(type, f) throws an error if f is not a function", function(test) {
  test.throws(function() { dispatch.dispatch("foo").on("foo", 42); });
  test.end();
});

tape("dispatch(…).on(type, f) throws an error if the type is unknown", function(test) {
  test.throws(function() { dispatch.dispatch("foo").on("bar", function() {}); });
  test.throws(function() { dispatch.dispatch("foo").on("__proto__", function() {}); });
  test.end();
});

tape("dispatch(…).on(type) throws an error if the type is unknown", function(test) {
  test.throws(function() { dispatch.dispatch("foo").on("bar"); });
  test.throws(function() { dispatch.dispatch("foo").on("__proto__"); });
  test.end();
});

tape("dispatch(type).on(type) returns the expected callback", function(test) {
  var d = dispatch.dispatch("foo");
  function A() {}
  function B() {}
  function C() {}
  d.on("foo.a", A).on("foo.b", B).on("foo", C);
  test.equal(d.on("foo.a"), A);
  test.equal(d.on("foo.b"), B);
  test.equal(d.on("foo"), C);
  test.end();
});

tape("dispatch(type).on(.name) returns undefined when retrieving a callback", function(test) {
  var d = dispatch.dispatch("foo").on("foo.a", function() {});
  test.equal(d.on(".a"), undefined);
  test.end();
});

tape("dispatch(type).on(.name, null) removes all callbacks with the specified name", function(test) {
  var d = dispatch.dispatch("foo", "bar"), a = {}, b = {}, c = {}, those = [];
  function A() { those.push(a); }
  function B() { those.push(b); }
  function C() { those.push(c); }
  d.on("foo.a", A).on("bar.a", B).on("foo", C).on(".a", null);
  d.call("foo");
  d.call("bar");
  test.deepEqual(those, [c]);
  test.end();
});

tape("dispatch(type).on(.name, f) has no effect", function(test) {
  var d = dispatch.dispatch("foo", "bar"), a = {}, b = {}, those = [];
  function A() { those.push(a); }
  function B() { those.push(b); }
  d.on(".a", A).on("foo.a", B).on("bar", B);
  d.call("foo");
  d.call("bar");
  test.deepEqual(those, [b, b]);
  test.equal(d.on(".a"), undefined);
  test.end();
});

tape("dispatch(type…).copy() returns an isolated copy", function(test) {
  var foo = function() {},
      bar = function() {},
      d0 = dispatch.dispatch("foo", "bar").on("foo", foo).on("bar", bar),
      d1 = d0.copy();
  test.equal(d1.on("foo"), foo);
  test.equal(d1.on("bar"), bar);

  // Changes to d1 don’t affect d0.
  test.equal(d1.on("bar", null), d1);
  test.equal(d1.on("bar"), undefined);
  test.equal(d0.on("bar"), bar);

  // Changes to d0 don’t affect d1.
  test.equal(d0.on("foo", null), d0);
  test.equal(d0.on("foo"), undefined);
  test.equal(d1.on("foo"), foo);
  test.end();
});
