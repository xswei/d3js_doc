var tape = require("tape"),
    array = require("d3-array"),
    random = require("../"),
    skewness = require("./skewness"),
    kurtosis = require("./kurtosis");

require("seedrandom");
require("./inDelta");

var mathRandom = Math.random;

tape.test("randomIrwinHall(n) returns random numbers with a mean of n / 2", function(test) {
  Math.seedrandom("f330fbece4c1c99f");
  test.inDelta(array.mean(array.range(10000).map(random.randomIrwinHall(1))), 1 / 2, .05);
  test.inDelta(array.mean(array.range(10000).map(random.randomIrwinHall(10))), 10 / 2, .05);
  test.end();
});

tape.test("randomIrwinHall(n) returns random numbers with a variance of n / 12", function(test) {
  Math.seedrandom("c4af5ee918417093");
  test.inDelta(array.variance(array.range(10000).map(random.randomIrwinHall(1))), 1 / 12, .05);
  test.inDelta(array.variance(array.range(10000).map(random.randomIrwinHall(10))), 10 / 12, .05);
  test.end();
});

tape.test("randomIrwinHall(n) returns random numbers with a skewness of 0", function(test) {
  Math.seedrandom("bb0bb470f346ff65");
  test.inDelta(skewness(array.range(10000).map(random.randomIrwinHall(1))), 0, .05);
  test.inDelta(skewness(array.range(10000).map(random.randomIrwinHall(10))), 0, .05);
  test.end();
});

tape.test("randomIrwinHall(n) returns random numbers with a kurtosis of -6 / (5 * n)", function(test) {
  Math.seedrandom("3c21f0c8f5a8332c");
  test.inDelta(kurtosis(array.range(10000).map(random.randomIrwinHall(1))), -6 / 5, .05);
  test.inDelta(kurtosis(array.range(10000).map(random.randomIrwinHall(10))), -6 / 50, .05);
  test.end();
});

tape("randomIrwinHall() [teardown]", function(test) {
  Math.random = mathRandom;
  test.end();
});
