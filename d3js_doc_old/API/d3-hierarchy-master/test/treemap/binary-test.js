var tape = require("tape"),
    d3_hierarchy = require("../../"),
    round = require("./round");

tape("treemapBinary(parent, x0, y0, x1, y1) generates a binary treemap layout", function(test) {
  var tile = d3_hierarchy.treemapBinary,
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
