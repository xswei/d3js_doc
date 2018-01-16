var tape = require("tape"),
    collection = require("../"),
    array = require("d3-array");

require("./isNaN");

tape("entries(object) enumerates every entry", function(test) {
  test.deepEqual(collection.entries({a: 1, b: 2}).sort(ascendingKey), [{key: "a", value: 1}, {key: "b", value: 2}]);
  test.end();
});

tape("entries(object) includes entries defined on prototypes", function(test) {
  function abc() {
    this.a = 1;
    this.b = 2;
  }
  abc.prototype.c = 3;
  test.deepEqual(collection.entries(new abc).sort(ascendingKey), [{key: "a", value: 1}, {key: "b", value: 2}, {key: "c", value: 3}]);
  test.end();
});

tape("entries(object) includes null, undefined and NaN values", function(test) {
  var v = collection.entries({a: null, b: undefined, c: NaN}).sort(ascendingKey);
  test.equal(v.length, 3);
  test.equal(v[0].key, "a");
  test.equal(v[0].value, null);
  test.equal(v[1].key, "b");
  test.equal(v[1].value, undefined);
  test.equal(v[2].key, "c");
  test.isNaN(v[2].value);
  test.end();
});

function ascendingKey(a, b) {
  return array.ascending(a.key, b.key);
}
