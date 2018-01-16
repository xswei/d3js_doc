var tape = require("tape"),
    array = require("d3-array"),
    d3 = require("../");

require("./inDelta");

function stripes(a, b) {
  return {type: "Polygon", coordinates: [a, b].map(function(d, i) {
    var stripe = array.range(-180, 180, 0.1).map(function(x) { return [x, d]; });
    stripe.push(stripe[0]);
    return i ? stripe.reverse() : stripe;
  })};
}

tape("area: Point", function(test) {
  test.equal(d3.geoArea({type: "Point", coordinates: [0, 0]}), 0);
  test.end();
});

tape("area: MultiPoint", function(test) {
  test.equal(d3.geoArea({type: "MultiPoint", coordinates: [[0, 1], [2, 3]]}), 0);
  test.end();
});

tape("area: LineString", function(test) {
  test.equal(d3.geoArea({type: "LineString", coordinates: [[0, 1], [2, 3]]}), 0);
  test.end();
});

tape("area: MultiLineString", function(test) {
  test.equal(d3.geoArea({type: "MultiLineString", coordinates: [[[0, 1], [2, 3]], [[4, 5], [6, 7]]]}), 0);
  test.end();
});

tape("area: Polygon - tiny", function(test) {
  test.inDelta(d3.geoArea({type: "Polygon", coordinates: [[
    [-64.66070178517852, 18.33986913231323],
    [-64.66079715091509, 18.33994007490749],
    [-64.66074946804680, 18.33994007490749],
    [-64.66070178517852, 18.33986913231323]
  ]]}), 4.890516e-13, 1e-13);
  test.end();
});

tape("area: Polygon - zero area", function(test) {
  test.equal(d3.geoArea({
    "type": "Polygon",
    "coordinates": [[
      [96.79142432523281, 5.262704519048153],
      [96.81065389253769, 5.272455576551362],
      [96.82988345984256, 5.272455576551362],
      [96.81065389253769, 5.272455576551362],
      [96.79142432523281, 5.262704519048153]
    ]]
  }), 0);
  test.end();
});

tape("area: Polygon - semilune", function(test) {
  test.inDelta(d3.geoArea({type: "Polygon", coordinates: [[[0, 0], [0, 90], [90, 0], [0, 0]]]}), Math.PI / 2, 1e-6);
  test.end();
});

tape("area: Polygon - lune", function(test) {
  test.inDelta(d3.geoArea({type: "Polygon", coordinates: [[[0, 0], [0, 90], [90, 0], [0, -90], [0, 0]]]}), Math.PI, 1e-6);
  test.end();
});

tape("area: Polygon - hemispheres North", function(test) {
  test.inDelta(d3.geoArea({type: "Polygon", coordinates: [[[0, 0], [-90, 0], [180, 0], [90, 0], [0, 0]]]}), 2 * Math.PI, 1e-6);
  test.end();
});

tape("area: Polygon - hemispheres South", function(test) {
  test.inDelta(d3.geoArea({type: "Polygon", coordinates: [[[0, 0], [90, 0], [180, 0], [-90, 0], [0, 0]]]}), 2 * Math.PI, 1e-6);
  test.end();
});

tape("area: Polygon - hemispheres East", function(test) {
  test.inDelta(d3.geoArea({type: "Polygon", coordinates: [[[0, 0], [0, 90], [180, 0], [0, -90], [0, 0]]]}), 2 * Math.PI, 1e-6);
  test.end();
});

tape("area: Polygon - hemispheres West", function(test) {
  test.inDelta(d3.geoArea({type: "Polygon", coordinates: [[[0, 0], [0, -90], [180, 0], [0, 90], [0, 0]]]}), 2 * Math.PI, 1e-6);
  test.end();
});

tape("area: Polygon - graticule outline sphere", function(test) {
  test.inDelta(d3.geoArea(d3.geoGraticule().extent([[-180, -90], [180, 90]]).outline()), 4 * Math.PI, 1e-5);
  test.end();
});

tape("area: Polygon - graticule outline hemisphere", function(test) {
  test.inDelta(d3.geoArea(d3.geoGraticule().extent([[-180, 0], [180, 90]]).outline()), 2 * Math.PI, 1e-5);
  test.end();
});

tape("area: Polygon - graticule outline semilune", function(test) {
  test.inDelta(d3.geoArea(d3.geoGraticule().extent([[0, 0], [90, 90]]).outline()), Math.PI / 2, 1e-5);
  test.end();
});

tape("area: Polygon - circles hemisphere", function(test) {
  test.inDelta(d3.geoArea(d3.geoCircle().radius(90)()), 2 * Math.PI, 1e-5);
  test.end();
});

tape("area: Polygon - circles 60°", function(test) {
  test.inDelta(d3.geoArea(d3.geoCircle().radius(60).precision(0.1)()), Math.PI, 1e-5);
  test.end();
});

tape("area: Polygon - circles 60° North", function(test) {
  test.inDelta(d3.geoArea(d3.geoCircle().radius(60).precision(0.1).center([0, 90])()), Math.PI, 1e-5);
  test.end();
});

tape("area: Polygon - circles 45°", function(test) {
  test.inDelta(d3.geoArea(d3.geoCircle().radius(45).precision(0.1)()), Math.PI * (2 - Math.SQRT2), 1e-5);
  test.end();
});

tape("area: Polygon - circles 45° North", function(test) {
  test.inDelta(d3.geoArea(d3.geoCircle().radius(45).precision(0.1).center([0, 90])()), Math.PI * (2 - Math.SQRT2), 1e-5);
  test.end();
});

tape("area: Polygon - circles 45° South", function(test) {
  test.inDelta(d3.geoArea(d3.geoCircle().radius(45).precision(0.1).center([0, -90])()), Math.PI * (2 - Math.SQRT2), 1e-5);
  test.end();
});

tape("area: Polygon - circles 135°", function(test) {
  test.inDelta(d3.geoArea(d3.geoCircle().radius(135).precision(0.1)()), Math.PI * (2 + Math.SQRT2), 1e-5);
  test.end();
});

tape("area: Polygon - circles 135° North", function(test) {
  test.inDelta(d3.geoArea(d3.geoCircle().radius(135).precision(0.1).center([0, 90])()), Math.PI * (2 + Math.SQRT2), 1e-5);
  test.end();
});

tape("area: Polygon - circles 135° South", function(test) {
  test.inDelta(d3.geoArea(d3.geoCircle().radius(135).precision(0.1).center([0, -90])()), Math.PI * (2 + Math.SQRT2), 1e-5);
  test.end();
});

tape("area: Polygon - circles tiny", function(test) {
  test.inDelta(d3.geoArea(d3.geoCircle().radius(1e-6).precision(0.1)()), 0, 1e-6);
  test.end();
});

tape("area: Polygon - circles huge", function(test) {
  test.inDelta(d3.geoArea(d3.geoCircle().radius(180 - 1e-6).precision(0.1)()), 4 * Math.PI, 1e-6);
  test.end();
});

tape("area: Polygon - circles 60° with 45° hole", function(test) {
  var circle = d3.geoCircle().precision(0.1);
  test.inDelta(d3.geoArea({
    type: "Polygon",
    coordinates: [
      circle.radius(60)().coordinates[0],
      circle.radius(45)().coordinates[0].reverse()
    ]
  }), Math.PI * (Math.SQRT2 - 1), 1e-5);
  test.end();
});

tape("area: Polygon - circles 45° holes at [0°, 0°] and [0°, 90°]", function(test) {
  var circle = d3.geoCircle().precision(0.1).radius(45);
  test.inDelta(d3.geoArea({
    type: "Polygon",
    coordinates: [
      circle.center([0, 0])().coordinates[0].reverse(),
      circle.center([0, 90])().coordinates[0].reverse()
    ]
  }), Math.PI * 2 * Math.SQRT2, 1e-5);
  test.end();
});

tape("area: Polygon - circles 45° holes at [0°, 90°] and [0°, 0°]", function(test) {
  var circle = d3.geoCircle().precision(0.1).radius(45);
  test.inDelta(d3.geoArea({
    type: "Polygon",
    coordinates: [
      circle.center([0, 90])().coordinates[0].reverse(),
      circle.center([0, 0])().coordinates[0].reverse()
    ]
  }), Math.PI * 2 * Math.SQRT2, 1e-5);
  test.end();
});

tape("area: Polygon - stripes 45°, -45°", function(test) {
  test.inDelta(d3.geoArea(stripes(45, -45)), Math.PI * 2 * Math.SQRT2, 1e-5);
  test.end();
});

tape("area: Polygon - stripes -45°, 45°", function(test) {
  test.inDelta(d3.geoArea(stripes(-45, 45)), Math.PI * 2 * (2 - Math.SQRT2), 1e-5);
  test.end();
});

tape("area: Polygon - stripes 45°, 30°", function(test) {
  test.inDelta(d3.geoArea(stripes(45, 30)), Math.PI * (Math.SQRT2 - 1), 1e-5);
  test.end();
});

tape("area: MultiPolygon two hemispheres", function(test) {
  test.equal(d3.geoArea({type: "MultiPolygon", coordinates: [
    [[[0, 0], [-90, 0], [180, 0], [90, 0], [0, 0]]],
    [[[0, 0], [90, 0], [180, 0], [-90, 0], [0, 0]]]
  ]}), 4 * Math.PI);
  test.end();
});

tape("area: Sphere", function(test) {
  test.equal(d3.geoArea({type: "Sphere"}), 4 * Math.PI);
  test.end();
});

tape("area: GeometryCollection", function(test) {
  test.equal(d3.geoArea({type: "GeometryCollection", geometries: [{type: "Sphere"}]}), 4 * Math.PI);
  test.end();
});

tape("area: FeatureCollection", function(test) {
  test.equal(d3.geoArea({type: "FeatureCollection", features: [{type: "Feature", geometry: {type: "Sphere"}}]}), 4 * Math.PI);
  test.end();
});

tape("area: Feature", function(test) {
  test.equal(d3.geoArea({type: "Feature", geometry: {type: "Sphere"}}), 4 * Math.PI);
  test.end();
});
