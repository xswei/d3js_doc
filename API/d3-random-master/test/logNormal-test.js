var tape = require("tape"),
    array = require("d3-array"),
    random = require("../");

require("seedrandom");
require("./inDelta");

var mathRandom = Math.random;

tape.test("randomLogNormal() returns random numbers with a log-mean of zero", function(test) {
  Math.seedrandom("a22ebc7c488a3a47");
  test.inDelta(array.mean(array.range(10000).map(random.randomLogNormal()), Math.log), 0, .05);
  test.end();
});

tape.test("randomLogNormal() returns random numbers with a log-standard deviation of one", function(test) {
  Math.seedrandom("06fd26b46c25607e");
  test.inDelta(array.deviation(array.range(10000).map(random.randomLogNormal()), Math.log), 1, .05);
  test.end();
});

tape.test("randomLogNormal(mu) returns random numbers with the specified log-mean", function(test) {
  Math.seedrandom("fffe77600db5c1ad");
  test.inDelta(array.mean(array.range(10000).map(random.randomLogNormal(42)), Math.log), 42, .05);
  test.inDelta(array.mean(array.range(10000).map(random.randomLogNormal(-2)), Math.log), -2, .05);
  test.end();
});

tape.test("randomLogNormal(mu) returns random numbers with a log-standard deviation of 1", function(test) {
  Math.seedrandom("9caf2156de45315a");
  test.inDelta(array.deviation(array.range(10000).map(random.randomLogNormal(42)), Math.log), 1, .05);
  test.inDelta(array.deviation(array.range(10000).map(random.randomLogNormal(-2)), Math.log), 1, .05);
  test.end();
});

tape.test("randomLogNormal(mu, sigma) returns random numbers with the specified log-mean and log-standard deviation", function(test) {
  Math.seedrandom("c0d761f591fb5e43");
  test.inDelta(array.mean(array.range(10000).map(random.randomLogNormal(42, 2)), Math.log), 42, .05);
  test.inDelta(array.mean(array.range(10000).map(random.randomLogNormal(-2, 2)), Math.log), -2, .05);
  test.inDelta(array.deviation(array.range(10000).map(random.randomLogNormal(42, 2)), Math.log), 2, .05);
  test.inDelta(array.deviation(array.range(10000).map(random.randomLogNormal(-2, 2)), Math.log), 2, .05);
  test.end();
});

tape("randomLogNormal() [teardown]", function(test) {
  Math.random = mathRandom;
  test.end();
});
