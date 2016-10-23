var tape = require("tape"),
    array = require("d3-array"),
    random = require("../");

require("seedrandom");
require("./inDelta");

var mathRandom = Math.random;

tape.test("randomNormal() returns random numbers with a mean of zero", function(test) {
  Math.seedrandom("a22ebc7c488a3a47");
  test.inDelta(array.mean(array.range(10000).map(random.randomNormal())), 0, .05);
  test.end();
});

tape.test("randomNormal() returns random numbers with a standard deviation of one", function(test) {
  Math.seedrandom("06fd26b46c25607e");
  test.inDelta(array.deviation(array.range(10000).map(random.randomNormal())), 1, .05);
  test.end();
});

tape.test("randomNormal(mu) returns random numbers with the specified mean", function(test) {
  Math.seedrandom("fffe77600db5c1ad");
  test.inDelta(array.mean(array.range(10000).map(random.randomNormal(42))), 42, .05);
  test.inDelta(array.mean(array.range(10000).map(random.randomNormal(-2))), -2, .05);
  test.end();
});

tape.test("randomNormal(mu) returns random numbers with a standard deviation of 1", function(test) {
  Math.seedrandom("9caf2156de45315a");
  test.inDelta(array.deviation(array.range(10000).map(random.randomNormal(42))), 1, .05);
  test.inDelta(array.deviation(array.range(10000).map(random.randomNormal(-2))), 1, .05);
  test.end();
});

tape.test("randomNormal(mu, sigma) returns random numbers with the specified mean and standard deviation", function(test) {
  Math.seedrandom("c0d761f591fb5e43");
  test.inDelta(array.mean(array.range(10000).map(random.randomNormal(42, 2))), 42, .05);
  test.inDelta(array.mean(array.range(10000).map(random.randomNormal(-2, 2))), -2, .05);
  test.inDelta(array.deviation(array.range(10000).map(random.randomNormal(42, 2))), 2, .05);
  test.inDelta(array.deviation(array.range(10000).map(random.randomNormal(-2, 2))), 2, .05);
  test.end();
});

tape("randomNormal() [teardown]", function(test) {
  Math.random = mathRandom;
  test.end();
});
