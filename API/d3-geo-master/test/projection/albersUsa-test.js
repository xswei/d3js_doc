var tape = require("tape"),
    d3 = require("../../");

require("./projectionEqual");

tape("albersUsa(point) and albersUsa.invert(point) returns the expected result", function(test) {
  var albersUsa = d3.geoAlbersUsa();
  test.projectionEqual(albersUsa, [-122.4194, 37.7749], [107.4, 214.1], 0.1); // San Francisco, CA
  test.projectionEqual(albersUsa, [ -74.0059, 40.7128], [794.6, 176.5], 0.1); // New York, NY
  test.projectionEqual(albersUsa, [ -95.9928, 36.1540], [488.8, 298.0], 0.1); // Tulsa, OK
  test.projectionEqual(albersUsa, [-149.9003, 61.2181], [171.2, 446.9], 0.1); // Anchorage, AK
  test.projectionEqual(albersUsa, [-157.8583, 21.3069], [298.5, 451.0], 0.1); // Honolulu, HI
  test.equal(albersUsa([2.3522, 48.8566]), null); // Paris, France
  test.end();
});
