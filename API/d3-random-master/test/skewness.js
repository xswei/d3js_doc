var array = require("d3-array");

module.exports = function(numbers) {
  var mean = array.mean(numbers),
      sum3 = 0,
      sum2 = 0,
      v,
      i = -1,
      n = numbers.length;

  while (++i < n) {
    v = numbers[i] - mean;
    sum2 += v * v;
    sum3 += v * v * v;
  }

  return (1 / n) * sum3 / Math.pow((1 / (n - 1)) * sum2, 3 / 2);
};
