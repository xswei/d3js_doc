#!/usr/bin/env node

var d3_array = require("d3-array"),
    d3_quadtree = require("../");

var n = 1000000,
    points1 = new Array(n),
    points2 = new Array(n);

for (var j = 0; j < n; ++j) {
  points1[j] = [Math.random() * 99, Math.random() * 99];
}

for (var j = 0; j < n; ++j) {
  points2[j] = [points1[j][0] + Math.random(), points1[j][1] + Math.random()];
}

var start = now();
var root = d3_quadtree.quadtree().extent([[0, 0], [100, 100]]).addAll(points1);
var end = now();
console.log("create", Math.round(end - start));

var start = now();
root.visit(function(node, x0, y0, x1, y1) {});
var end = now();
console.log("iterate", Math.round(end - start));

var start = now();
for (var j = 0, p; j < n; ++j) {
  root.remove(points1[j]);
  root.add(points2[j]);
}
var end = now();
console.log("update", Math.round(end - start));

function now() {
  var now = process.hrtime();
  return now[0] * 1e3 + now[1] / 1e6;
}
