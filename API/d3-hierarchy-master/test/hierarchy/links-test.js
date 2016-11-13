var tape = require("tape"),
    d3_hierarchy = require("../../");

tape("node.links() returns an array of {source, target}", function(test) {
  var root = d3_hierarchy.hierarchy({id: "root", children: [{id: "a"}, {id: "b", children: [{id: "ba"}]}]}),
      a = root.children[0],
      b = root.children[1],
      ba = root.children[1].children[0];
  test.deepEqual(root.links(), [
    {source: root, target: a},
    {source: root, target: b},
    {source: b, target: ba}
  ]);
  test.end();
});
