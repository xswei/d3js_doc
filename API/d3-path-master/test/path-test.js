var tape = require("tape"),
    path = require("../");

require("./pathEqual");

tape("path is an instanceof path", function(test) {
  var p = path.path();
  test.ok(p instanceof path.path);
  test.equal(p.constructor.name, "Path");
  test.pathEqual(p, "");
  test.end();
});

tape("path.moveTo(x, y) appends an M command", function(test) {
  var p = path.path(); p.moveTo(150, 50);
  test.pathEqual(p, "M150,50");
  p.lineTo(200, 100);
  test.pathEqual(p, "M150,50L200,100");
  p.moveTo(100, 50);
  test.pathEqual(p, "M150,50L200,100M100,50");
  test.end();
});

tape("path.closePath() appends a Z command", function(test) {
  var p = path.path(); p.moveTo(150, 50);
  test.pathEqual(p, "M150,50");
  p.closePath();
  test.pathEqual(p, "M150,50Z");
  p.closePath();
  test.pathEqual(p, "M150,50ZZ");
  test.end();
});

tape("path.closePath() does nothing if the path is empty", function(test) {
  var p = path.path();
  test.pathEqual(p, "");
  p.closePath();
  test.pathEqual(p, "");
  test.end();
});

tape("path.lineTo(x, y) appends an L command", function(test) {
  var p = path.path(); p.moveTo(150, 50);
  test.pathEqual(p, "M150,50");
  p.lineTo(200, 100);
  test.pathEqual(p, "M150,50L200,100");
  p.lineTo(100, 50);
  test.pathEqual(p, "M150,50L200,100L100,50");
  test.end();
});

tape("path.quadraticCurveTo(x1, y1, x, y) appends a Q command", function(test) {
  var p = path.path(); p.moveTo(150, 50);
  test.pathEqual(p, "M150,50");
  p.quadraticCurveTo(100, 50, 200, 100);
  test.pathEqual(p, "M150,50Q100,50,200,100");
  test.end();
});

tape("path.bezierCurveTo(x1, y1, x, y) appends a C command", function(test) {
  var p = path.path(); p.moveTo(150, 50);
  test.pathEqual(p, "M150,50");
  p.bezierCurveTo(100, 50, 0, 24, 200, 100);
  test.pathEqual(p, "M150,50C100,50,0,24,200,100");
  test.end();
});

tape("path.arc(x, y, radius, startAngle, endAngle) throws an error if the radius is negative", function(test) {
  var p = path.path(); p.moveTo(150, 100);
  test.throws(function() { p.arc(100, 100, -50, 0, Math.PI / 2); }, /negative radius/);
  test.end();
});

tape("path.arc(x, y, radius, startAngle, endAngle) may append only an M command if the radius is zero", function(test) {
  var p = path.path(); p.arc(100, 100, 0, 0, Math.PI / 2);
  test.pathEqual(p, "M100,100");
  test.end();
});

tape("path.arc(x, y, radius, startAngle, endAngle) may append only an L command if the radius is zero", function(test) {
  var p = path.path(); p.moveTo(0, 0); p.arc(100, 100, 0, 0, Math.PI / 2);
  test.pathEqual(p, "M0,0L100,100");
  test.end();
});

tape("path.arc(x, y, radius, startAngle, endAngle) may append an M command if the path was empty", function(test) {
  var p = path.path(); p.arc(100, 100, 50, 0, Math.PI * 2);
  test.pathEqual(p, "M150,100A50,50,0,1,1,50,100A50,50,0,1,1,150,100");
  var p = path.path(); p.arc(0, 50, 50, -Math.PI / 2, 0);
  test.pathEqual(p, "M0,0A50,50,0,0,1,50,50");
  test.end();
});

tape("path.arc(x, y, radius, startAngle, endAngle) may append an L command if the arc doesn’t start at the current point", function(test) {
  var p = path.path(); p.moveTo(100, 100); p.arc(100, 100, 50, 0, Math.PI * 2);
  test.pathEqual(p, "M100,100L150,100A50,50,0,1,1,50,100A50,50,0,1,1,150,100");
  test.end();
});

tape("path.arc(x, y, radius, startAngle, endAngle) appends a single A command if the angle is less than π", function(test) {
  var p = path.path(); p.moveTo(150, 100); p.arc(100, 100, 50, 0, Math.PI / 2);
  test.pathEqual(p, "M150,100A50,50,0,0,1,100,150");
  test.end();
});

tape("path.arc(x, y, radius, startAngle, endAngle) appends a single A command if the angle is less than τ", function(test) {
  var p = path.path(); p.moveTo(150, 100); p.arc(100, 100, 50, 0, Math.PI * 1);
  test.pathEqual(p, "M150,100A50,50,0,1,1,50,100");
  test.end();
});

tape("path.arc(x, y, radius, startAngle, endAngle) appends two A commands if the angle is greater than τ", function(test) {
  var p = path.path(); p.moveTo(150, 100); p.arc(100, 100, 50, 0, Math.PI * 2);
  test.pathEqual(p, "M150,100A50,50,0,1,1,50,100A50,50,0,1,1,150,100");
  test.end();
});

tape("path.arc(x, y, radius, 0, π/2, false) draws a small clockwise arc", function(test) {
  var p = path.path(); p.moveTo(150, 100); p.arc(100, 100, 50, 0, Math.PI / 2, false);
  test.pathEqual(p, "M150,100A50,50,0,0,1,100,150");
  test.end();
});

tape("path.arc(x, y, radius, -π/2, 0, false) draws a small clockwise arc", function(test) {
  var p = path.path(); p.moveTo(100, 50); p.arc(100, 100, 50, -Math.PI / 2, 0, false);
  test.pathEqual(p, "M100,50A50,50,0,0,1,150,100");
  test.end();
});

tape("path.arc(x, y, radius, 0, 13π/2, false) draws a clockwise circle", function(test) {
  var p = path.path(); p.moveTo(150, 100); p.arc(100, 100, 50, 0, 13 * Math.PI / 2, false);
  test.pathEqual(p, "M150,100A50,50,0,1,1,50,100A50,50,0,1,1,150,100");
  test.end();
});

tape("path.arc(x, y, radius, 13π/2, 0, false) draws a big clockwise arc", function(test) {
  var p = path.path(); p.moveTo(100, 150); p.arc(100, 100, 50, 13 * Math.PI / 2, 0, false);
  test.pathEqual(p, "M100,150A50,50,0,1,1,150,100");
  test.end();
});

tape("path.arc(x, y, radius, π/2, 0, false) draws a big clockwise arc", function(test) {
  var p = path.path(); p.moveTo(100, 150); p.arc(100, 100, 50, Math.PI / 2, 0, false);
  test.pathEqual(p, "M100,150A50,50,0,1,1,150,100");
  test.end();
});

tape("path.arc(x, y, radius, 3π/2, 0, false) draws a small clockwise arc", function(test) {
  var p = path.path(); p.moveTo(100, 50); p.arc(100, 100, 50, 3 * Math.PI / 2, 0, false);
  test.pathEqual(p, "M100,50A50,50,0,0,1,150,100");
  test.end();
});

tape("path.arc(x, y, radius, 15π/2, 0, false) draws a small clockwise arc", function(test) {
  var p = path.path(); p.moveTo(100, 50); p.arc(100, 100, 50, 15 * Math.PI / 2, 0, false);
  test.pathEqual(p, "M100,50A50,50,0,0,1,150,100");
  test.end();
});

tape("path.arc(x, y, radius, 0, π/2, true) draws a big anticlockwise arc", function(test) {
  var p = path.path(); p.moveTo(150, 100); p.arc(100, 100, 50, 0, Math.PI / 2, true);
  test.pathEqual(p, "M150,100A50,50,0,1,0,100,150");
  test.end();
});

tape("path.arc(x, y, radius, -π/2, 0, true) draws a big anticlockwise arc", function(test) {
  var p = path.path(); p.moveTo(100, 50); p.arc(100, 100, 50, -Math.PI / 2, 0, true);
  test.pathEqual(p, "M100,50A50,50,0,1,0,150,100");
  test.end();
});

tape("path.arc(x, y, radius, -13π/2, 0, true) draws a big anticlockwise arc", function(test) {
  var p = path.path(); p.moveTo(100, 50); p.arc(100, 100, 50, -13 * Math.PI / 2, 0, true);
  test.pathEqual(p, "M100,50A50,50,0,1,0,150,100");
  test.end();
});

tape("path.arc(x, y, radius, 0, 13π/2, true) draws a big anticlockwise arc", function(test) {
  var p = path.path(); p.moveTo(150, 100); p.arc(100, 100, 50, 0, 13 * Math.PI / 2, true);
  test.pathEqual(p, "M150,100A50,50,0,1,0,100,150");
  test.end();
});

tape("path.arc(x, y, radius, π/2, 0, true) draws a small anticlockwise arc", function(test) {
  var p = path.path(); p.moveTo(100, 150); p.arc(100, 100, 50, Math.PI / 2, 0, true);
  test.pathEqual(p, "M100,150A50,50,0,0,0,150,100");
  test.end();
});

tape("path.arc(x, y, radius, 3π/2, 0, true) draws a big anticlockwise arc", function(test) {
  var p = path.path(); p.moveTo(100, 50); p.arc(100, 100, 50, 3 * Math.PI / 2, 0, true);
  test.pathEqual(p, "M100,50A50,50,0,1,0,150,100");
  test.end();
});

tape("path.arcTo(x1, y1, x2, y2, radius) throws an error if the radius is negative", function(test) {
  var p = path.path(); p.moveTo(150, 100);
  test.throws(function() { p.arcTo(270, 39, 163, 100, -53); }, /negative radius/);
  test.end();
});

tape("path.arcTo(x1, y1, x2, y2, radius) appends an M command if the path was empty", function(test) {
  var p = path.path(); p.arcTo(270, 39, 163, 100, 53);
  test.pathEqual(p, "M270,39");
  test.end();
});

tape("path.arcTo(x1, y1, x2, y2, radius) does nothing if the previous point was ⟨x1,y1⟩", function(test) {
  var p = path.path(); p.moveTo(270, 39); p.arcTo(270, 39, 163, 100, 53);
  test.pathEqual(p, "M270,39");
  test.end();
});

tape("path.arcTo(x1, y1, x2, y2, radius) appends an L command if the previous point, ⟨x1,y1⟩ and ⟨x2,y2⟩ are collinear", function(test) {
  var p = path.path(); p.moveTo(100, 50); p.arcTo(101, 51, 102, 52, 10);
  test.pathEqual(p, "M100,50L101,51");
  test.end();
});

tape("path.arcTo(x1, y1, x2, y2, radius) appends an L command if ⟨x1,y1⟩ and ⟨x2,y2⟩ are coincident", function(test) {
  var p = path.path(); p.moveTo(100, 50); p.arcTo(101, 51, 101, 51, 10);
  test.pathEqual(p, "M100,50L101,51");
  test.end();
});

tape("path.arcTo(x1, y1, x2, y2, radius) appends an L command if the radius is zero", function(test) {
  var p = path.path(); p.moveTo(270, 182), p.arcTo(270, 39, 163, 100, 0);
  test.pathEqual(p, "M270,182L270,39");
  test.end();
});

tape("path.arcTo(x1, y1, x2, y2, radius) appends L and A commands if the arc does not start at the current point", function(test) {
  var p = path.path(); p.moveTo(270, 182), p.arcTo(270, 39, 163, 100, 53);
  test.pathEqual(p, "M270,182L270,130.222686A53,53,0,0,0,190.750991,84.179342");
  var p = path.path(); p.moveTo(270, 182), p.arcTo(270, 39, 363, 100, 53);
  test.pathEqual(p, "M270,182L270,137.147168A53,53,0,0,1,352.068382,92.829799");
  test.end();
});

tape("path.arcTo(x1, y1, x2, y2, radius) appends only an A command if the arc starts at the current point", function(test) {
  var p = path.path(); p.moveTo(100, 100), p.arcTo(200, 100, 200, 200, 100);
  test.pathEqual(p, "M100,100A100,100,0,0,1,200,200");
  test.end();
});

tape("path.arcTo(x1, y1, x2, y2, radius) sets the last point to be the end tangent of the arc", function(test) {
  var p = path.path(); p.moveTo(100, 100), p.arcTo(200, 100, 200, 200, 50); p.arc(150, 150, 50, 0, Math.PI);
  test.pathEqual(p, "M100,100L150,100A50,50,0,0,1,200,150A50,50,0,1,1,100,150");
  test.end();
});

tape("path.rect(x, y, w, h) appends M, h, v, h, and Z commands", function(test) {
  var p = path.path(); p.moveTo(150, 100), p.rect(100, 200, 50, 25);
  test.pathEqual(p, "M150,100M100,200h50v25h-50Z");
  test.end();
});
