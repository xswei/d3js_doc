var tape = require("tape"),
    d3_hierarchy = require("../../"),
    round = require("./round"),
    simple = require("../data/simple2");

tape("treemap() has the expected defaults", function(test) {
  var treemap = d3_hierarchy.treemap();
  test.equal(treemap.tile(), d3_hierarchy.treemapSquarify);
  test.deepEqual(treemap.size(), [1, 1]);
  test.deepEqual(treemap.round(), false);
  test.end();
});

tape("treemap.round(round) observes the specified rounding", function(test) {
  var treemap = d3_hierarchy.treemap().size([600, 400]).round(true),
      root = treemap(d3_hierarchy.hierarchy(simple).sum(defaultValue).sort(descendingValue)),
      nodes = root.descendants().map(round);
  test.deepEqual(treemap.round(), true);
  test.deepEqual(nodes, [
    {x0:   0, x1: 600, y0:   0, y1: 400},
    {x0:   0, x1: 300, y0:   0, y1: 200},
    {x0:   0, x1: 300, y0: 200, y1: 400},
    {x0: 300, x1: 471, y0:   0, y1: 233},
    {x0: 471, x1: 600, y0:   0, y1: 233},
    {x0: 300, x1: 540, y0: 233, y1: 317},
    {x0: 300, x1: 540, y0: 317, y1: 400},
    {x0: 540, x1: 600, y0: 233, y1: 400}
  ]);
  test.end();
});

tape("treemap.round(round) coerces the specified round to boolean", function(test) {
  var treemap = d3_hierarchy.treemap().round("yes");
  test.strictEqual(treemap.round(), true);
  test.end();
});

tape("treemap.padding(padding) sets the inner and outer padding to the specified value", function(test) {
  var treemap = d3_hierarchy.treemap().padding("42");
  test.strictEqual(treemap.padding()(), 42);
  test.strictEqual(treemap.paddingInner()(), 42);
  test.strictEqual(treemap.paddingOuter()(), 42);
  test.strictEqual(treemap.paddingTop()(), 42);
  test.strictEqual(treemap.paddingRight()(), 42);
  test.strictEqual(treemap.paddingBottom()(), 42);
  test.strictEqual(treemap.paddingLeft()(), 42);
  test.end();
});

tape("treemap.paddingInner(padding) observes the specified padding", function(test) {
  var treemap = d3_hierarchy.treemap().size([6, 4]).paddingInner(0.5),
      root = treemap(d3_hierarchy.hierarchy(simple).sum(defaultValue).sort(descendingValue)),
      nodes = root.descendants().map(round);
  test.strictEqual(treemap.paddingInner()(), 0.5);
  test.deepEqual(treemap.size(), [6, 4]);
  test.deepEqual(nodes, [
    {x0: 0.00, x1: 6.00, y0: 0.00, y1: 4.00},
    {x0: 0.00, x1: 2.75, y0: 0.00, y1: 1.75},
    {x0: 0.00, x1: 2.75, y0: 2.25, y1: 4.00},
    {x0: 3.25, x1: 4.61, y0: 0.00, y1: 2.13},
    {x0: 5.11, x1: 6.00, y0: 0.00, y1: 2.13},
    {x0: 3.25, x1: 5.35, y0: 2.63, y1: 3.06},
    {x0: 3.25, x1: 5.35, y0: 3.56, y1: 4.00},
    {x0: 5.85, x1: 6.00, y0: 2.63, y1: 4.00}
  ]);
  test.end();
});

tape("treemap.paddingOuter(padding) observes the specified padding", function(test) {
  var treemap = d3_hierarchy.treemap().size([6, 4]).paddingOuter(0.5),
      root = treemap(d3_hierarchy.hierarchy(simple).sum(defaultValue).sort(descendingValue)),
      nodes = root.descendants().map(round);
  test.strictEqual(treemap.paddingOuter()(), 0.5);
  test.strictEqual(treemap.paddingTop()(), 0.5);
  test.strictEqual(treemap.paddingRight()(), 0.5);
  test.strictEqual(treemap.paddingBottom()(), 0.5);
  test.strictEqual(treemap.paddingLeft()(), 0.5);
  test.deepEqual(treemap.size(), [6, 4]);
  test.deepEqual(nodes, [
    {x0: 0.00, x1: 6.00, y0: 0.00, y1: 4.00},
    {x0: 0.50, x1: 3.00, y0: 0.50, y1: 2.00},
    {x0: 0.50, x1: 3.00, y0: 2.00, y1: 3.50},
    {x0: 3.00, x1: 4.43, y0: 0.50, y1: 2.25},
    {x0: 4.43, x1: 5.50, y0: 0.50, y1: 2.25},
    {x0: 3.00, x1: 5.00, y0: 2.25, y1: 2.88},
    {x0: 3.00, x1: 5.00, y0: 2.88, y1: 3.50},
    {x0: 5.00, x1: 5.50, y0: 2.25, y1: 3.50}
  ]);
  test.end();
});

tape("treemap.size(size) observes the specified size", function(test) {
  var treemap = d3_hierarchy.treemap().size([6, 4]),
      root = treemap(d3_hierarchy.hierarchy(simple).sum(defaultValue).sort(descendingValue)),
      nodes = root.descendants().map(round);
  test.deepEqual(treemap.size(), [6, 4]);
  test.deepEqual(nodes, [
    {x0: 0.00, x1: 6.00, y0: 0.00, y1: 4.00},
    {x0: 0.00, x1: 3.00, y0: 0.00, y1: 2.00},
    {x0: 0.00, x1: 3.00, y0: 2.00, y1: 4.00},
    {x0: 3.00, x1: 4.71, y0: 0.00, y1: 2.33},
    {x0: 4.71, x1: 6.00, y0: 0.00, y1: 2.33},
    {x0: 3.00, x1: 5.40, y0: 2.33, y1: 3.17},
    {x0: 3.00, x1: 5.40, y0: 3.17, y1: 4.00},
    {x0: 5.40, x1: 6.00, y0: 2.33, y1: 4.00}
  ]);
  test.end();
});

tape("treemap.size(size) coerces the specified size to numbers", function(test) {
  var treemap = d3_hierarchy.treemap().size(["6", {valueOf: function() { return 4; }}]);
  test.strictEqual(treemap.size()[0], 6);
  test.strictEqual(treemap.size()[1], 4);
  test.end();
});

tape("treemap.size(size) makes defensive copies", function(test) {
  var size = [6, 4],
      treemap = d3_hierarchy.treemap().size(size),
      root = (size[1] = 100, treemap(d3_hierarchy.hierarchy(simple).sum(defaultValue).sort(descendingValue))),
      nodes = root.descendants().map(round);
  test.deepEqual(treemap.size(), [6, 4]);
  treemap.size()[1] = 100;
  test.deepEqual(treemap.size(), [6, 4]);
  test.deepEqual(nodes, [
    {x0: 0.00, x1: 6.00, y0: 0.00, y1: 4.00},
    {x0: 0.00, x1: 3.00, y0: 0.00, y1: 2.00},
    {x0: 0.00, x1: 3.00, y0: 2.00, y1: 4.00},
    {x0: 3.00, x1: 4.71, y0: 0.00, y1: 2.33},
    {x0: 4.71, x1: 6.00, y0: 0.00, y1: 2.33},
    {x0: 3.00, x1: 5.40, y0: 2.33, y1: 3.17},
    {x0: 3.00, x1: 5.40, y0: 3.17, y1: 4.00},
    {x0: 5.40, x1: 6.00, y0: 2.33, y1: 4.00}
  ]);
  test.end();
});

tape("treemap.tile(tile) observes the specified tile function", function(test) {
  var treemap = d3_hierarchy.treemap().size([6, 4]).tile(d3_hierarchy.treemapSlice),
      root = treemap(d3_hierarchy.hierarchy(simple).sum(defaultValue).sort(descendingValue)),
      nodes = root.descendants().map(round);
  test.equal(treemap.tile(), d3_hierarchy.treemapSlice);
  test.deepEqual(nodes, [
    {x0: 0.00, x1: 6.00, y0: 0.00, y1: 4.00},
    {x0: 0.00, x1: 6.00, y0: 0.00, y1: 1.00},
    {x0: 0.00, x1: 6.00, y0: 1.00, y1: 2.00},
    {x0: 0.00, x1: 6.00, y0: 2.00, y1: 2.67},
    {x0: 0.00, x1: 6.00, y0: 2.67, y1: 3.17},
    {x0: 0.00, x1: 6.00, y0: 3.17, y1: 3.50},
    {x0: 0.00, x1: 6.00, y0: 3.50, y1: 3.83},
    {x0: 0.00, x1: 6.00, y0: 3.83, y1: 4.00}
  ]);
  test.end();
});

tape("treemap(data) observes the specified values", function(test) {
  var foo = function(d) { return d.foo; },
      treemap = d3_hierarchy.treemap().size([6, 4]),
      root = treemap(d3_hierarchy.hierarchy(require("../data/simple3")).sum(foo).sort(descendingValue)),
      nodes = root.descendants().map(round);
  test.deepEqual(treemap.size(), [6, 4]);
  test.deepEqual(nodes, [
    {x0: 0.00, x1: 6.00, y0: 0.00, y1: 4.00},
    {x0: 0.00, x1: 3.00, y0: 0.00, y1: 2.00},
    {x0: 0.00, x1: 3.00, y0: 2.00, y1: 4.00},
    {x0: 3.00, x1: 4.71, y0: 0.00, y1: 2.33},
    {x0: 4.71, x1: 6.00, y0: 0.00, y1: 2.33},
    {x0: 3.00, x1: 5.40, y0: 2.33, y1: 3.17},
    {x0: 3.00, x1: 5.40, y0: 3.17, y1: 4.00},
    {x0: 5.40, x1: 6.00, y0: 2.33, y1: 4.00}
  ]);
  test.end();
});

tape("treemap(data) observes the specified sibling order", function(test) {
  var treemap = d3_hierarchy.treemap(),
      root = treemap(d3_hierarchy.hierarchy(simple).sum(defaultValue).sort(ascendingValue));
  test.deepEqual(root.descendants().map(function(d) { return d.value; }), [24, 1, 2, 2, 3, 4, 6, 6]);
  test.end();
});

function defaultValue(d) {
  return d.value;
}

function ascendingValue(a, b) {
  return a.value - b.value;
}

function descendingValue(a, b) {
  return b.value - a.value;
}
