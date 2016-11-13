var tape = require("tape"),
    d3_geo = require("../../"),
    testContext = require("./test-context");

var equirectangular = d3_geo.geoEquirectangular()
    .scale(900 / Math.PI)
    .precision(0);

function testPath(projection, object) {
  var context = testContext();

  d3_geo.geoPath()
      .projection(projection)
      .context(context)
      (object);

  return context.result();
}

tape("geoPath.projection() defaults to undefined", function(test) {
  var path = d3_geo.geoPath();
  test.strictEqual(path.projection(), undefined);
  test.end();
});

tape("geoPath.context() defaults to undefined", function(test) {
  var path = d3_geo.geoPath();
  test.strictEqual(path.context(), undefined);
  test.end();
});

tape("d3.geoPath(projection) sets the initial projection", function(test) {
  var projection = d3_geo.geoAlbers(), path = d3_geo.geoPath(projection);
  test.strictEqual(path.projection(), projection);
  test.end();
});

tape("d3.geoPath(projection, context) sets the initial projection and context", function(test) {
  var context = testContext(), projection = d3_geo.geoAlbers(), path = d3_geo.geoPath(projection, context);
  test.strictEqual(path.projection(), projection);
  test.strictEqual(path.context(), context);
  test.end();
});

tape("geoPath(Point) renders a point", function(test) {
  test.deepEqual(testPath(equirectangular, {
    type: "Point",
    coordinates: [-63, 18]
  }), [
    {type: "moveTo", x: 170, y: 160},
    {type: "arc", x: 165, y: 160, r: 4.5}
  ]);
  test.end();
});

tape("geoPath(MultiPoint) renders a point", function(test) {
  test.deepEqual(testPath(equirectangular, {
    type: "MultiPoint",
    coordinates: [[-63, 18], [-62, 18], [-62, 17]]
  }), [
    {type: "moveTo", x: 170, y: 160}, {type: "arc", x: 165, y: 160, r: 4.5},
    {type: "moveTo", x: 175, y: 160}, {type: "arc", x: 170, y: 160, r: 4.5},
    {type: "moveTo", x: 175, y: 165}, {type: "arc", x: 170, y: 165, r: 4.5}
  ]);
  test.end();
});

tape("geoPath(LineString) renders a line string", function(test) {
  test.deepEqual(testPath(equirectangular, {
    type: "LineString",
    coordinates: [[-63, 18], [-62, 18], [-62, 17]]
  }), [
    {type: "moveTo", x: 165, y: 160},
    {type: "lineTo", x: 170, y: 160},
    {type: "lineTo", x: 170, y: 165}
  ]);
  test.end();
});

tape("geoPath(Polygon) renders a polygon", function(test) {
  test.deepEqual(testPath(equirectangular, {
    type: "Polygon",
    coordinates: [[[-63, 18], [-62, 18], [-62, 17], [-63, 18]]]
  }), [
    {type: "moveTo", x: 165, y: 160},
    {type: "lineTo", x: 170, y: 160},
    {type: "lineTo", x: 170, y: 165},
    {type: "closePath"}
  ]);
  test.end();
});

tape("geoPath(GeometryCollection) renders a geometry collection", function(test) {
  test.deepEqual(testPath(equirectangular, {
    type: "GeometryCollection",
    geometries: [{
      type: "Polygon",
      coordinates: [[[-63, 18], [-62, 18], [-62, 17], [-63, 18]]]
    }]
  }), [
    {type: "moveTo", x: 165, y: 160},
    {type: "lineTo", x: 170, y: 160},
    {type: "lineTo", x: 170, y: 165},
    {type: "closePath"}
  ]);
  test.end();
});

tape("geoPath(Feature) renders a feature", function(test) {
  test.deepEqual(testPath(equirectangular, {
    type: "Feature",
    geometry: {
      type: "Polygon",
      coordinates: [[[-63, 18], [-62, 18], [-62, 17], [-63, 18]]]
    }
  }), [
    {type: "moveTo", x: 165, y: 160},
    {type: "lineTo", x: 170, y: 160},
    {type: "lineTo", x: 170, y: 165},
    {type: "closePath"}
  ]);
  test.end();
});

tape("geoPath(FeatureCollection) renders a feature collection", function(test) {
  test.deepEqual(testPath(equirectangular, {
    type: "FeatureCollection",
    features: [{
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[-63, 18], [-62, 18], [-62, 17], [-63, 18]]]
      }
    }]
  }), [
    {type: "moveTo", x: 165, y: 160},
    {type: "lineTo", x: 170, y: 160},
    {type: "lineTo", x: 170, y: 165},
    {type: "closePath"}
  ]);
  test.end();
});

tape("geoPath(…) wraps longitudes outside of ±180°", function(test) {
  test.deepEqual(testPath(equirectangular, {
    type: "Point",
    coordinates: [180 + 1e-6, 0]
  }), [
    {type: "moveTo", x: -415, y: 250},
    {type: "arc", x: -420, y: 250, r: 4.5}
  ]);
  test.end();
});

tape("geoPath(…) observes the correct winding order of a tiny polygon", function(test) {
  test.deepEqual(testPath(equirectangular, {
    type: "Polygon",
    coordinates: [[
      [-0.06904102953339501, 0.346043661846373],
      [-6.725674252975136e-15, 0.3981303360336475],
      [-6.742247658534323e-15, -0.08812465346531581],
      [-0.17301258217724075, -0.12278150669440671],
      [-0.06904102953339501, 0.346043661846373]
    ]]
  }), [
    {type: "moveTo", x: 480, y: 248},
    {type: "lineTo", x: 480, y: 248},
    {type: "lineTo", x: 480, y: 250},
    {type: "lineTo", x: 479, y: 251},
    {type: "closePath"}
  ]);
  test.end();
});

tape("geoPath.projection(null)(…) does not transform coordinates", function(test) {
  test.deepEqual(testPath(null, {
    type: "Polygon",
    coordinates: [[[-63, 18], [-62, 18], [-62, 17], [-63, 18]]]
  }), [
    {type: "moveTo", x: -63, y: 18},
    {type: "lineTo", x: -62, y: 18},
    {type: "lineTo", x: -62, y: 17},
    {type: "closePath"}
  ]);
  test.end();
});

tape("geoPath.context(null)(null) returns undefined", function(test) {
  var path = d3_geo.geoPath();
  test.strictEqual(path(), undefined);
  test.strictEqual(path(null), undefined);
  test.strictEqual(path(undefined), undefined);
  test.end();
});

tape("geoPath.context(null)(Unknown) returns undefined", function(test) {
  var path = d3_geo.geoPath();
  test.strictEqual(path({type: "Unknown"}), undefined);
  test.strictEqual(path({type: "__proto__"}), undefined);
  test.end();
});

tape("geoPath(LineString) then geoPath(Point) does not treat the point as part of a line", function(test) {
  var context = testContext(), path = d3_geo.geoPath().projection(equirectangular).context(context);
  path({
    type: "LineString",
    coordinates: [[-63, 18], [-62, 18], [-62, 17]]
  });
  test.deepEqual(context.result(), [
    {type: "moveTo", x: 165, y: 160},
    {type: "lineTo", x: 170, y: 160},
    {type: "lineTo", x: 170, y: 165}
  ]);
  path({
    type: "Point",
    coordinates: [-63, 18]
  });
  test.deepEqual(context.result(), [
    {type: "moveTo", x: 170, y: 160},
    {type: "arc", x: 165, y: 160, r: 4.5}
  ]);
  test.end();
});
