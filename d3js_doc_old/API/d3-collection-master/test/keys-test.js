var tape = require("tape"),
    collection = require("../"),
    array = require("d3-array");

require("./isNaN");

tape("keys(object) enumerates every entry", function(test) {
  test.deepEqual(collection.keys({a: 1, b: 2}).sort(array.ascending), ["a", "b"]);
  test.end();
});

tape("keys(object) includes keys defined on prototypes", function(test) {
  function abc() {
    this.a = 1;
    this.b = 2;
  }
  abc.prototype.c = 3;
  test.deepEqual(collection.keys(new abc).sort(array.ascending), ["a", "b", "c"]);
  test.end();
});

tape("keys(object) includes null, undefined and NaN values", function(test) {
  test.deepEqual(collection.keys({a: null, b: undefined, c: NaN}).sort(array.ascending), ["a", "b", "c"]);
  test.end();
});
