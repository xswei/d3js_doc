var tape = require("tape"),
    topojson = require("topojson"),
    d3 = require("../../");

var usTopo = require("../data/us-10m.json"),
    us = topojson.feature(usTopo, usTopo.objects.land),
    worldTopo = require("../data/world-50m.json"),
    world = topojson.feature(worldTopo, worldTopo.objects.land);

require("../inDelta");

tape("projection.fitExtent(…) sphere equirectangular", function(test) {
  var projection = d3.geoEquirectangular();
  projection.fitExtent([[50, 50], [950, 950]], {type: "Sphere"});
  test.inDelta(projection.scale(), 900 / (2 * Math.PI), 1e-6);
  test.inDelta(projection.translate(), [500, 500], 1e-6);
  test.end();
});

tape("projection.fitExtent(…) world equirectangular", function(test) {
  var projection = d3.geoEquirectangular();
  projection.fitExtent([[50, 50], [950, 950]], world);
  test.inDelta(projection.scale(), 143.239449, 1e-6);
  test.inDelta(projection.translate(), [500, 491.999512], 1e-6);
  test.end();
});

tape("projection.fitExtent(…) world azimuthalEqualArea", function(test) {
  var projection = d3.geoAzimuthalEqualArea();
  projection.fitExtent([[50, 50], [950, 950]], world);
  test.inDelta(projection.scale(), 228.357167, 1e-6);
  test.inDelta(projection.translate(), [496.353437, 479.684335], 1e-6);
  test.end();
});

tape("projection.fitExtent(…) world azimuthalEquidistant", function(test) {
  var projection = d3.geoAzimuthalEquidistant();
  projection.fitExtent([[50, 50], [950, 950]], world);
  test.inDelta(projection.scale(), 153.559157, 1e-6);
  test.inDelta(projection.translate(), [485.272655, 452.093361], 1e-6);
  test.end();
});

tape("projection.fitExtent(…) world conicConformal", function(test) {
  var projection = d3.geoConicConformal().clipAngle(30).parallels([30, 60]).rotate([0, -45]);
  projection.fitExtent([[50, 50], [950, 950]], world);
  test.inDelta(projection.scale(), 626.111017, 1e-6);
  test.inDelta(projection.translate(), [444.395872, 410.223792], 1e-6);
  test.end();
});

tape("projection.fitExtent(…) world conicEqualArea", function(test) {
  var projection = d3.geoConicEqualArea();
  projection.fitExtent([[50, 50], [950, 950]], world);
  test.inDelta(projection.scale(), 145.862346, 1e-6);
  test.inDelta(projection.translate(), [500, 498.0114265], 1e-6);
  test.end();
});

tape("projection.fitExtent(…) world conicEquidistant", function(test) {
  var projection = d3.geoConicEquidistant();
  projection.fitExtent([[50, 50], [950, 950]], world);
  test.inDelta(projection.scale(), 123.085, 1e-6);
  test.inDelta(projection.translate(), [500, 498.5973334], 1e-6);
  test.end();
});

tape("projection.fitExtent(…) world equirectangular", function(test) {
  var projection = d3.geoEquirectangular();
  projection.fitExtent([[50, 50], [950, 950]], world);
  test.inDelta(projection.scale(), 143.239449, 1e-6);
  test.inDelta(projection.translate(), [500, 491.999512], 1e-6);
  test.end();
});

tape("projection.fitSize(…) world equirectangular", function(test) {
  var projection = d3.geoEquirectangular();
  projection.fitSize([900, 900], world);
  test.inDelta(projection.scale(), 143.239449, 1e-6);
  test.inDelta(projection.translate(), [450, 441.999512], 1e-6);
  test.end();
});

tape("projection.fitExtent(…) world gnomonic", function(test) {
  var projection = d3.geoGnomonic().clipAngle(45);
  projection.fitExtent([[50, 50], [950, 950]], world);
  test.inDelta(projection.scale(), 450.348236, 1e-6);
  test.inDelta(projection.translate(), [500.115152, 556.52294], 1e-6);
  test.end();
});

tape("projection.fitExtent(…) world mercator", function(test) {
  var projection = d3.geoMercator();
  projection.fitExtent([[50, 50], [950, 950]], world);
  test.inDelta(projection.scale(), 143.239449, 1e-6);
  test.inDelta(projection.translate(), [500, 481.549457], 1e-6);
  test.end();
});

tape("projection.fitExtent(…) world orthographic", function(test) {
  var projection = d3.geoOrthographic();
  projection.fitExtent([[50, 50], [950, 950]], world);
  test.inDelta(projection.scale(), 451.428643, 1e-6);
  test.inDelta(projection.translate(), [503.769378, 498.61496], 1e-6);
  test.end();
});

tape("projection.fitSize(…) world orthographic", function(test) {
  var projection = d3.geoOrthographic();
  projection.fitSize([900, 900], world);
  test.inDelta(projection.scale(), 451.428643, 1e-6);
  test.inDelta(projection.translate(), [453.769378, 448.61496], 1e-6);
  test.end();
});

tape("projection.fitExtent(…) world stereographic", function(test) {
  var projection = d3.geoStereographic();
  projection.fitExtent([[50, 50], [950, 950]], world);
  test.inDelta(projection.scale(), 162.934518, 1e-6);
  test.inDelta(projection.translate(), [478.546849, 432.922426], 1e-6);
  test.end();
});

tape("projection.fitExtent(…) world transverseMercator", function(test) {
  var projection = d3.geoTransverseMercator();
  projection.fitExtent([[50, 50], [950, 950]], world);
  test.inDelta(projection.scale(), 143.239449, 1e-6);
  test.inDelta(projection.translate(), [473.829753, 500], 1e-6);
  test.end();
});

tape("projection.fitExtent(…) USA albersUsa", function(test) {
  var projection = d3.geoAlbersUsa();
  projection.fitExtent([[50, 50], [950, 950]], us);
  test.inDelta(projection.scale(), 1152.889035, 1e-6);
  test.inDelta(projection.translate(), [533.52541, 496.232028], 1e-6);
  test.end();
});

tape("projection.fitExtent(…) null geometries - Feature", function(test) {
  var projection = d3.geoEquirectangular();
  projection.fitExtent([[50, 50], [950, 950]], {type: "Feature", geometry: null});
  var s = projection.scale(), t = projection.translate();
  test.assert(!s);
  test.assert(isNaN(t[0]));
  test.assert(isNaN(t[1]));
  test.end();
});

tape("projection.fitExtent(…) null geometries - MultiPoint", function(test) {
  var projection = d3.geoEquirectangular();
  projection.fitExtent([[50, 50], [950, 950]], {type: "MultiPoint", coordinates: []});
  var s = projection.scale(), t = projection.translate();
  test.assert(!s);
  test.assert(isNaN(t[0]));
  test.assert(isNaN(t[1]));
  test.end();
});

tape("projection.fitExtent(…) null geometries - MultiLineString", function(test) {
  var projection = d3.geoEquirectangular();
  projection.fitExtent([[50, 50], [950, 950]], {type: "MultiLineString", coordinates: []});
  var s = projection.scale(), t = projection.translate();
  test.assert(!s);
  test.assert(isNaN(t[0]));
  test.assert(isNaN(t[1]));
  test.end();
});

tape("projection.fitExtent(…) null geometries - MultiPolygon", function(test) {
  var projection = d3.geoEquirectangular();
  projection.fitExtent([[50, 50], [950, 950]], {type: "MultiPolygon", coordinates: []});
  var s = projection.scale(), t = projection.translate();
  test.assert(!s);
  test.assert(isNaN(t[0]));
  test.assert(isNaN(t[1]));
  test.end();
});

tape("projection.fitExtent(…) custom projection", function(test) {
  var projection = d3.geoProjection(function(x, y) { return [x, Math.pow(y, 3)]; });
  projection.fitExtent([[50, 50], [950, 950]], world);
  test.inDelta(projection.scale(), 128.901140, 1e-6);
  test.inDelta(projection.translate(), [500, 450.406949], 1e-6);
  test.end();
});

tape("projection.fitSize(…) ignore clipExtent - world equirectangular", function(test) {
  var p1 = d3.geoEquirectangular().fitSize([1000, 1000], world),
      s1 = p1.scale(),
      t1 = p1.translate(),
      c1 = p1.clipExtent(),
      p2 = d3.geoEquirectangular().clipExtent([[100, 200], [700, 600]]).fitSize([1000, 1000], world),
      s2 = p2.scale(),
      t2 = p2.translate(),
      c2 = p2.clipExtent();
  test.inDelta(s1, s2, 1e-6);
  test.inDelta(t1, t2, 1e-6);
  test.equal(c1, null);
  test.deepEqual(c2, [[100, 200], [700, 600]]);
  test.end();
});

tape("projection.fitExtent(…) chaining - world transverseMercator", function(test) {
  var projection = d3.geoTransverseMercator().fitExtent([[50, 50], [950, 950]], world).scale(500);
  test.equal(projection.scale(), 500);
  test.inDelta(projection.translate(), [473.829753, 500], 1e-6);
  test.end();
});

tape("projection.fitSize(…) resampling - world mercator", function(test) {
  var box = {"type": "Polygon", "coordinates": [[[-135, 45], [-45, 45], [-45, -45], [-135, -45], [-135, 45]]]},
      p1 = d3.geoMercator().precision(0.1).fitSize([1000, 1000], box),
      p2 = d3.geoMercator().precision(0).fitSize([1000, 1000], box),
      t1 = p1.translate(),
      t2 = p2.translate();
  test.equal(p1.precision(), 0.1);
  test.equal(p2.precision(), 0);
  test.inDelta(p1.scale(), 436.218018, 1e-6);
  test.inDelta(p2.scale(), 567.296328, 1e-6);
  test.inDelta(t1[0], 1185.209661, 1e-6);
  test.inDelta(t2[0], 1391.106989, 1e-6);
  test.inDelta(t1[1], 500, 1e-6);
  test.inDelta(t1[1], t2[1], 1e-6);
  test.end();
});
