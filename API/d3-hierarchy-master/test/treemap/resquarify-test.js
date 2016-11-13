var tape = require("tape"),
    d3_hierarchy = require("../../"),
    round = require("./round");

tape("treemapResquarify(parent, x0, y0, x1, y1) produces a stable update", function(test) {
  var tile = d3_hierarchy.treemapResquarify,
      root = {value: 20, children: [{value: 10}, {value: 10}]};
  tile(root, 0, 0, 20, 10);
  test.deepEqual(root.children.map(round), [
    {x0:  0, x1: 10, y0:  0, y1: 10},
    {x0: 10, x1: 20, y0:  0, y1: 10}
  ]);
  tile(root, 0, 0, 10, 20);
  test.deepEqual(root.children.map(round), [
    {x0:  0, x1:  5, y0:  0, y1: 20},
    {x0:  5, x1: 10, y0:  0, y1: 20}
  ]);
  test.end();
});

tape("treemapResquarify.ratio(ratio) observes the specified ratio", function(test) {
  var tile = d3_hierarchy.treemapResquarify.ratio(1),
      root = {
        value: 24,
        children: [
          {value: 6},
          {value: 6},
          {value: 4},
          {value: 3},
          {value: 2},
          {value: 2},
          {value: 1}
        ]
      };
  tile(root, 0, 0, 6, 4);
  test.deepEqual(root.children.map(round), [
    {x0: 0.00, x1: 3.00, y0: 0.00, y1: 2.00},
    {x0: 0.00, x1: 3.00, y0: 2.00, y1: 4.00},
    {x0: 3.00, x1: 4.71, y0: 0.00, y1: 2.33},
    {x0: 4.71, x1: 6.00, y0: 0.00, y1: 2.33},
    {x0: 3.00, x1: 4.20, y0: 2.33, y1: 4.00},
    {x0: 4.20, x1: 5.40, y0: 2.33, y1: 4.00},
    {x0: 5.40, x1: 6.00, y0: 2.33, y1: 4.00}
  ]);
  test.end();
});

tape("treemapResquarify.ratio(ratio) is stable if the ratio is unchanged", function(test) {
  var root = {value: 20, children: [{value: 10}, {value: 10}]};
  d3_hierarchy.treemapResquarify(root, 0, 0, 20, 10);
  test.deepEqual(root.children.map(round), [
    {x0:  0, x1: 10, y0:  0, y1: 10},
    {x0: 10, x1: 20, y0:  0, y1: 10}
  ]);
  d3_hierarchy.treemapResquarify.ratio((1 + Math.sqrt(5)) / 2)(root, 0, 0, 10, 20);
  test.deepEqual(root.children.map(round), [
    {x0:  0, x1:  5, y0:  0, y1: 20},
    {x0:  5, x1: 10, y0:  0, y1: 20}
  ]);
  test.end();
});

tape("treemapResquarify.ratio(ratio) is unstable if the ratio is changed", function(test) {
  var root = {value: 20, children: [{value: 10}, {value: 10}]};
  d3_hierarchy.treemapResquarify(root, 0, 0, 20, 10);
  test.deepEqual(root.children.map(round), [
    {x0:  0, x1: 10, y0:  0, y1: 10},
    {x0: 10, x1: 20, y0:  0, y1: 10}
  ]);
  d3_hierarchy.treemapResquarify.ratio(1)(root, 0, 0, 10, 20);
  test.deepEqual(root.children.map(round), [
    {x0:  0, x1: 10, y0:  0, y1: 10},
    {x0:  0, x1: 10, y0: 10, y1: 20}
  ]);
  test.end();
});
