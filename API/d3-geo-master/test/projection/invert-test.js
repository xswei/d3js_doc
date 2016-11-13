var tape = require("tape"),
    d3 = require("../../");

require("./projectionEqual");

[
  d3.geoAlbers,
  d3.geoAzimuthalEqualArea,
  d3.geoAzimuthalEquidistant,
  d3.geoConicConformal,
  function conicConformal() { return d3.geoConicConformal().parallels([20, 30]); },
  function conicConformal() { return d3.geoConicConformal().parallels([30, 30]); },
  function conicConformal() { return d3.geoConicConformal().parallels([-35, -50]); },
  d3.geoConicEqualArea,
  function conicEqualArea() { return d3.geoConicEqualArea().parallels([20, 30]); },
  function conicEqualArea() { return d3.geoConicEqualArea().parallels([-30, 30]); },
  function conicEqualArea() { return d3.geoConicEqualArea().parallels([-35, -50]); },
  d3.geoConicEquidistant,
  function conicEquidistant() { return d3.geoConicEquidistant().parallels([20, 30]); },
  function conicEquidistant() { return d3.geoConicEquidistant().parallels([30, 30]); },
  function conicEquidistant() { return d3.geoConicEquidistant().parallels([-35, -50]); },
  d3.geoEquirectangular,
  d3.geoGnomonic,
  d3.geoMercator,
  d3.geoOrthographic,
  d3.geoStereographic,
  d3.geoTransverseMercator
].forEach(function(factory) {
  var name = factory.name, projection = factory();
  tape(name + "(point) and " + name + ".invert(point) are symmetric", function(test) {
    [[0, 0], [30.3, 24.1], [-10, 42], [-2, -5]].forEach(function(point) {
      test.projectionEqual(projection, point, projection(point));
    });
    test.end();
  });
});

tape("albersUsa(point) and albersUsa.invert(point) are symmetric", function(test) {
  var projection = d3.geoAlbersUsa();
  [[-122.4194, 37.7749], [-74.0059, 40.7128], [-149.9003, 61.2181], [-157.8583, 21.3069]].forEach(function(point) {
    test.projectionEqual(projection, point, projection(point));
  });
  test.end();
});
