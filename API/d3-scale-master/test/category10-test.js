var tape = require("tape"),
    d3 = require("../");

tape("schemeCategory10 is an array of RGB strings", function(test) {
  test.deepEqual(d3.schemeCategory10, ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf"]);
  test.end();
});
