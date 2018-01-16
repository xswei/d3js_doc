var tape = require("tape"),
    d3 = require("../"),
    array = require("d3-array");

require("./inDelta");

tape("circle generates a Polygon", function(test) {
  var o = d3.geoCircle()();
  test.equal(o.type, "Polygon");
  test.inDelta(o.coordinates, [[[-78.69007,-90],[-90,-84],[-90,-78],[-90,-72],[-90,-66],[-90,-60],[-90,-54],[-90,-48],[-90,-42],[-90,-36],[-90,-30],[-90,-24],[-90,-18],[-90,-12],[-90,-6],[-90,0],[-90,6],[-90,12],[-90,18],[-90,24],[-90,30],[-90,36],[-90,42],[-90,48],[-90,54],[-90,60],[-90,66],[-90,72],[-90,78],[-90,84],[-89.59666,90],[90,84],[90,78],[90,72],[90,66],[90,60],[90,54],[90,48],[90,42],[90,36],[90,30],[90,24],[90,18],[90,12],[90,6],[90,0],[90,-6],[90,-12],[90,-18],[90,-24],[90,-30],[90,-36],[90,-42],[90,-48],[90,-54],[90,-60],[90,-66],[90,-72],[90,-78],[90,-84],[89.56977,-90]]], 1e-5);
  test.end();
});

tape("circle.center([0, 90])", function(test) {
  var o = d3.geoCircle().center([0, 90])();
  test.equal(o.type, "Polygon");
  test.inDelta(o.coordinates, [array.range(360, -1, -6).map(function(x) { return [x >= 180 ? x - 360 : x, 0]; })], 1e-6);
  test.end();
});

tape("circle.center([45, 45])", function(test) {
  var o = d3.geoCircle().center([45, 45]).radius(0)();
  test.equal(o.type, "Polygon");
  test.inDelta(o.coordinates[0][0], [45, 45], 1e-6);
  test.end();
});

tape("circle: first and last points are coincident", function(test) {
  var o = d3.geoCircle().center([0, 0]).radius(0.02).precision(45)();
  test.inDelta(o.coordinates[0][0], o.coordinates[0].pop(), 1e-6);
  test.end();
});
