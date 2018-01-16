var tape = require("tape"),
    d3 = require("../");

tape("interpolateCubehelixDefault(t) returns the expected values", function(test) {
  test.equal(d3.interpolateCubehelixDefault(0.0), "rgb(0, 0, 0)");
  test.equal(d3.interpolateCubehelixDefault(0.2), "rgb(22, 61, 78)");
  test.equal(d3.interpolateCubehelixDefault(0.5), "rgb(160, 121, 73)");
  test.equal(d3.interpolateCubehelixDefault(0.8), "rgb(193, 202, 243)");
  test.equal(d3.interpolateCubehelixDefault(1.0), "rgb(255, 255, 255)");
  test.end();
});
