var tape = require("tape"),
    collection = require("../"),
    array = require("d3-array");

tape("set() returns an empty set", function(test) {
  var s = collection.set();
  test.equal(s instanceof collection.set, true);
  test.equal(s.constructor.name, "Set");
  test.deepEqual(s.values(), []);
  test.end();
});

tape("set(null) returns an empty set", function(test) {
  var s = collection.set(null);
  test.deepEqual(s.values(), []);
  test.end();
});

tape("set(array) adds array entries", function(test) {
  var s = collection.set(["foo"]);
  test.equal(s.has("foo"), true);
  var s = collection.set(["foo", "bar"]);
  test.equal(s.has("foo"), true);
  test.equal(s.has("bar"), true);
  test.end();
});

tape("set(array, f) observes the specified accessor function", function(test) {
  var name = function(d) { return d.name; };
  var s = collection.set([{name: "foo"}], name);
  test.equal(s.has("foo"), true);
  var s = collection.set([{name: "foo"}, {name: "bar"}], name);
  test.equal(s.has("foo"), true);
  test.equal(s.has("bar"), true);
  test.end();
});

tape("set(set) copies the given set", function(test) {
  var a = collection.set(["foo"]),
      b = collection.set(a);
  test.equal(b.has("foo"), true);
  test.equal(b.has("foo"), true);
  a.add("bar");
  test.equal(b.has("bar"), false);
  test.end();
});

tape("set.size() returns the number of distinct values", function(test) {
  var s = collection.set();
  test.equal(s.size(), 0);
  s.add("foo");
  test.equal(s.size(), 1);
  s.add("foo");
  test.equal(s.size(), 1);
  s.add("bar");
  test.equal(s.size(), 2);
  s.remove("foo");
  test.equal(s.size(), 1);
  s.remove("foo");
  test.equal(s.size(), 1);
  s.remove("bar");
  test.equal(s.size(), 0);
  test.end();
});

tape("set.clear() removes all values", function(test) {
  var s = collection.set().add("foo").add("bar").add("foo");
  test.equal(s.size(), 2);
  s.clear();
  test.equal(s.size(), 0);
  test.deepEqual(s.values(), []);
  test.end();
});

tape("set.empty() returns true only if the set is empty", function(test) {
  var s = collection.set();
  test.equal(s.empty(), true);
  s.add("foo");
  test.equal(s.empty(), false);
  s.add("foo");
  test.equal(s.empty(), false);
  s.add("bar");
  test.equal(s.empty(), false);
  s.remove("foo");
  test.equal(s.empty(), false);
  s.remove("foo");
  test.equal(s.empty(), false);
  s.remove("bar");
  test.equal(s.empty(), true);
  test.end();
});

tape("set.each(callback) passes value, value and the set", function(test) {
  var s = collection.set(["foo", "bar"]),
      c = [];
  s.each(function(v0, v1, s) { c.push([v0, v1, s]); });
  c.sort();
  test.deepEqual(c, [["bar", "bar", s], ["foo", "foo", s]]);
  test.end();
});

tape("set.each(callback) uses the global context", function(test) {
  var s = collection.set(["foo", "bar"]),
      c = [];
  s.each(function() { c.push(this); });
  test.strictEqual(c[0], global);
  test.strictEqual(c[1], global);
  test.equal(c.length, 2);
  test.end();
});

tape("set.each(callback) iterates in arbitrary order", function(test) {
  var s1 = collection.set(["foo", "bar"]),
      s2 = collection.set(["bar", "foo"]),
      c1 = [],
      c2 = [];
  s1.each(function(v) { c1.push(v); });
  s2.each(function(v) { c2.push(v); });
  c1.sort();
  c2.sort();
  test.deepEqual(c1, c2);
  test.end();
});

tape("set.values() returns an array of string values", function(test) {
  var s = collection.set(["foo", "bar"]);
  test.deepEqual(s.values().sort(), ["bar", "foo"]);
  test.end();
});

tape("set.values() empty sets have an empty values array", function(test) {
  var s = collection.set();
  test.deepEqual(s.values(), []);
  s.add("foo");
  test.deepEqual(s.values(), ["foo"]);
  s.remove("foo");
  test.deepEqual(s.values(), []);
  test.end();
});

tape("set.values() values are returned in arbitrary order", function(test) {
  var s = collection.set(["foo", "bar"]);
  test.deepEqual(s.values().sort(array.ascending), ["bar", "foo"]);
  var s = collection.set(["bar", "foo"]);
  test.deepEqual(s.values().sort(array.ascending), ["bar", "foo"]);
  test.end();
});

tape("set.values() properly unescapes prefixed keys", function(test) {
  var s = collection.set(["__proto__", "$weird"]);
  test.deepEqual(s.values().sort(array.ascending), ["$weird", "__proto__"]);
  test.end();
});

tape("set.values() observes changes via add and remove", function(test) {
  var s = collection.set(["foo", "bar"]);
  test.deepEqual(s.values().sort(array.ascending), ["bar", "foo"]);
  s.remove("foo");
  test.deepEqual(s.values(), ["bar"]);
  s.add("bar");
  test.deepEqual(s.values(), ["bar"]);
  s.add("foo");
  test.deepEqual(s.values().sort(array.ascending), ["bar", "foo"]);
  s.remove("bar");
  test.deepEqual(s.values(), ["foo"]);
  s.remove("foo");
  test.deepEqual(s.values(), []);
  s.remove("foo");
  test.deepEqual(s.values(), []);
  test.end();
});

tape("set.has(value) empty sets do not have object built-ins", function(test) {
  var s = collection.set();
  test.equal(s.has("__proto__"), false);
  test.equal(s.has("hasOwnProperty"), false);
  test.end();
});

tape("set.has(value) coerces values to strings", function(test) {
  var s = collection.set(["42", "null", "undefined"]);
  test.equal(s.has(42), true);
  test.equal(s.has(null), true);
  test.equal(s.has(undefined), true);
  test.end();
});

tape("set.has(value) observes changes via add and remove", function(test) {
  var s = collection.set(["foo"]);
  test.equal(s.has("foo"), true);
  s.add("foo");
  test.equal(s.has("foo"), true);
  s.remove("foo");
  test.equal(s.has("foo"), false);
  s.add("foo");
  test.equal(s.has("foo"), true);
  test.end();
});

tape("set.has(value) returns undefined for missing values", function(test) {
  var s = collection.set(["foo"]);
  test.equal(s.has("bar"), false);
  test.end();
});

tape("set.add(value) returns the set", function(test) {
  var s = collection.set();
  test.equal(s.add("foo"), s);
  test.equal(s.add(2), s);
  test.deepEqual(s.values().sort(), ["2", "foo"]);
  test.end();
});

tape("set.add(value) can add values using built-in names", function(test) {
  var s = collection.set().add("__proto__");
  test.equal(s.has("__proto__"), true);
  test.end();
});

tape("set.add(value) can add values using zero-prefixed names", function(test) {
  var s = collection.set().add("$weird");
  test.equal(s.has("$weird"), true);
  test.end();
});

tape("set.add(value) coerces values to strings", function(test) {
  var s = collection.set();
  s.add(42);
  test.equal(s.has(42), true);
  s.add(null);
  test.equal(s.has(null), true);
  s.add(undefined);
  test.equal(s.has(undefined), true);
  test.deepEqual(s.values().sort(), ["42", "null", "undefined"]);
  test.end();
});

tape("set.add(value) can add null, undefined or empty string values", function(test) {
  var s = collection.set().add("").add("null").add("undefined");
  test.equal(s.has(""), true);
  test.equal(s.has("null"), true);
  test.equal(s.has("undefined"), true);
  test.end();
});

tape("set.remove(value) returns true if the value was removed", function(test) {
  var s = collection.set(["foo"]);
  test.equal(s.remove("foo"), true);
  test.end();
});

tape("set.remove(value) returns false if the value is not an element", function(test) {
  var s = collection.set();
  test.equal(s.remove("foo"), false);
  test.end();
});
