var array = require("d3-array");

module.exports = function(numbers) {
  var mean = array.mean(numbers),
      sum4 = 0,
      sum2 = 0,
      v,
      i = -1,
      n = numbers.length;

  while (++i < n) {
    v = numbers[i] - mean;
    sum2 += v * v;
    sum4 += v * v * v * v;
  }

  return (1 / n) * sum4 / Math.pow((1 / n) * sum2, 2) - 3;
};
