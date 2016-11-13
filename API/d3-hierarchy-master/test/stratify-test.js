var tape = require("tape"),
    d3_hierarchy = require("../");

tape("stratify() has the expected defaults", function(test) {
  var s = d3_hierarchy.stratify();
  test.equal(s.id()({id: "foo"}), "foo");
  test.equal(s.parentId()({parentId: "bar"}), "bar");
  test.end();
});

tape("stratify(data) returns the root node", function(test) {
  var s = d3_hierarchy.stratify(),
      root = s([
          {id: "a"},
          {id: "aa", parentId: "a"},
          {id: "ab", parentId: "a"},
          {id: "aaa", parentId: "aa"}
        ]);
  test.ok(root instanceof d3_hierarchy.hierarchy);
  test.deepEqual(noparent(root), {
    id: "a",
    depth: 0,
    height: 2,
    data: {id: "a"},
    children: [
      {
        id: "aa",
        depth: 1,
        height: 1,
        data: {id: "aa", parentId: "a"},
        children: [
          {
            id: "aaa",
            depth: 2,
            height: 0,
            data: {id: "aaa", parentId: "aa"}
          }
        ]
      },
      {
        id: "ab",
        depth: 1,
        height: 0,
        data: {id: "ab", parentId: "a"}
      }
    ]
  });
  test.end();
});

tape("stratify(data) does not require the data to be in topological order", function(test) {
  var s = d3_hierarchy.stratify(),
      root = s([
          {id: "aaa", parentId: "aa"},
          {id: "aa", parentId: "a"},
          {id: "ab", parentId: "a"},
          {id: "a"}
        ]);
  test.deepEqual(noparent(root), {
    id: "a",
    depth: 0,
    height: 2,
    data: {id: "a"},
    children: [
      {
        id: "aa",
        depth: 1,
        height: 1,
        data: {id: "aa", parentId: "a"},
        children: [
          {
            id: "aaa",
            depth: 2,
            height: 0,
            data: {id: "aaa", parentId: "aa"}
          }
        ]
      },
      {
        id: "ab",
        depth: 1,
        height: 0,
        data: {id: "ab", parentId: "a"}
      }
    ]
  });
  test.end();
});

tape("stratify(data) preserves the input order of siblings", function(test) {
  var s = d3_hierarchy.stratify(),
      root = s([
          {id: "aaa", parentId: "aa"},
          {id: "ab", parentId: "a"},
          {id: "aa", parentId: "a"},
          {id: "a"}
        ]);
  test.deepEqual(noparent(root), {
    id: "a",
    depth: 0,
    height: 2,
    data: {id: "a"},
    children: [
      {
        id: "ab",
        depth: 1,
        height: 0,
        data: {id: "ab", parentId: "a"}
      },
      {
        id: "aa",
        depth: 1,
        height: 1,
        data: {id: "aa", parentId: "a"},
        children: [
          {
            id: "aaa",
            depth: 2,
            height: 0,
            data: {id: "aaa", parentId: "aa"}
          }
        ]
      }
    ]
  });
  test.end();
});

tape("stratify(data) treats an empty parentId as the root", function(test) {
  var s = d3_hierarchy.stratify(),
      root = s([
          {id: "a", parentId: ""},
          {id: "aa", parentId: "a"},
          {id: "ab", parentId: "a"},
          {id: "aaa", parentId: "aa"}
        ]);
  test.deepEqual(noparent(root), {
    id: "a",
    depth: 0,
    height: 2,
    data: {id: "a", parentId: ""},
    children: [
      {
        id: "aa",
        depth: 1,
        height: 1,
        data: {id: "aa", parentId: "a"},
        children: [
          {
            id: "aaa",
            depth: 2,
            height: 0,
            data: {id: "aaa", parentId: "aa"}
          }
        ]
      },
      {
        id: "ab",
        depth: 1,
        height: 0,
        data: {id: "ab", parentId: "a"}
      }
    ]
  });
  test.end();
});

tape("stratify(data) does not treat a falsy but non-empty parentId as the root", function(test) {
  var s = d3_hierarchy.stratify(),
      root = s([
          {id: 0, parentId: null},
          {id: 1, parentId: 0},
          {id: 2, parentId: 0}
        ]);
  test.deepEqual(noparent(root), {
    id: "0",
    depth: 0,
    height: 1,
    data: {id: 0, parentId: null},
    children: [
      {
        id: "1",
        depth: 1,
        height: 0,
        data: {id: 1, parentId: 0}
      },
      {
        id: "2",
        depth: 1,
        height: 0,
        data: {id: 2, parentId: 0}
      }
    ]
  });
  test.end();
});

tape("stratify(data) throws an error if the data does not have a single root", function(test) {
  var s = d3_hierarchy.stratify();
  test.throws(function() { s([{id: "a"}, {id: "b"}]); }, /\bmultiple roots\b/);
  test.throws(function() { s([{id: "a", parentId: "a"}]); }, /\bno root\b/);
  test.throws(function() { s([{id: "a", parentId: "b"}, {id: "b", parentId: "a"}]); }, /\bno root\b/);
  test.end();
});

tape("stratify(data) throws an error if the hierarchy is cyclical", function(test) {
  var s = d3_hierarchy.stratify();
  test.throws(function() { s([{id: "root"}, {id: "a", parentId: "a"}]); }, /\bcycle\b/);
  test.throws(function() { s([{id: "root"}, {id: "a", parentId: "b"}, {id: "b", parentId: "a"}]); }, /\bcycle\b/);
  test.end();
});

tape("stratify(data) throws an error if multiple parents have the same id", function(test) {
  var s = d3_hierarchy.stratify();
  test.throws(function() { s([{id: "a"}, {id: "b", parentId: "a"}, {id: "b", parentId: "a"}, {id: "c", parentId: "b"}]); }, /\bambiguous\b/);
  test.end();
});

tape("stratify(data) throws an error if the specified parent is not found", function(test) {
  var s = d3_hierarchy.stratify();
  test.throws(function() { s([{id: "a"}, {id: "b", parentId: "c"}]); }, /\bmissing\b/);
  test.end();
});

tape("stratify(data) allows the id to be undefined for leaf nodes", function(test) {
  var s = d3_hierarchy.stratify(),
      root = s([
          {id: "a"},
          {parentId: "a"},
          {parentId: "a"}
        ]);
  test.deepEqual(noparent(root), {
    id: "a",
    depth: 0,
    height: 1,
    data: {id: "a"},
    children: [
      {
        depth: 1,
        height: 0,
        data: {parentId: "a"}
      },
      {
        depth: 1,
        height: 0,
        data: {parentId: "a"}
      }
    ]
  });
  test.end();
});

tape("stratify(data) allows the id to be non-unique for leaf nodes", function(test) {
  var s = d3_hierarchy.stratify(),
      root = s([
          {id: "a", parentId: null},
          {id: "b", parentId: "a"},
          {id: "b", parentId: "a"}
        ]);
  test.deepEqual(noparent(root), {
    id: "a",
    depth: 0,
    height: 1,
    data: {id: "a", parentId: null},
    children: [
      {
        id: "b",
        depth: 1,
        height: 0,
        data: {id: "b", parentId: "a"}
      },
      {
        id: "b",
        depth: 1,
        height: 0,
        data: {id: "b", parentId: "a"}
      }
    ]
  });
  test.end();
});

tape("stratify(data) coerces the id to a string, if not null and not empty", function(test) {
  var s = d3_hierarchy.stratify();
  test.strictEqual(s([{id: {toString: function() { return "a"}}}]).id, "a");
  test.strictEqual(s([{id: ""}]).id, undefined);
  test.strictEqual(s([{id: null}]).id, undefined);
  test.strictEqual(s([{id: undefined}]).id, undefined);
  test.strictEqual(s([{}]).id, undefined);
  test.end();
});

tape("stratify(data) allows the id to be undefined for leaf nodes", function(test) {
  var s = d3_hierarchy.stratify(),
      o = {parentId: {toString: function() { return "a"; }}},
      root = s([{id: "a"}, o]);
  test.deepEqual(noparent(root), {
    id: "a",
    depth: 0,
    height: 1,
    data: {id: "a"},
    children: [
      {
        depth: 1,
        height: 0,
        data: o
      }
    ]
  });
  test.end();
});

tape("stratify.id(id) observes the specified id function", function(test) {
  var foo = function(d) { return d.foo; },
      s = d3_hierarchy.stratify().id(foo),
      root = s([
          {foo: "a"},
          {foo: "aa", parentId: "a"},
          {foo: "ab", parentId: "a"},
          {foo: "aaa", parentId: "aa"}
        ]);
  test.equal(s.id(), foo);
  test.deepEqual(noparent(root), {
    id: "a",
    depth: 0,
    height: 2,
    data: {foo: "a"},
    children: [
      {
        id: "aa",
        depth: 1,
        height: 1,
        data: {foo: "aa", parentId: "a"},
        children: [
          {
            id: "aaa",
            depth: 2,
            height: 0,
            data: {foo: "aaa", parentId:"aa" }
          }
        ]
      },
      {
        id: "ab",
        depth: 1,
        height: 0,
        data: {foo: "ab", parentId:"a" }
      }
    ]
  });
  test.end();
});

tape("stratify.id(id) tests that id is a function", function(test) {
  var s = d3_hierarchy.stratify();
  test.throws(function() { s.id(42); });
  test.throws(function() { s.id(null); });
  test.end();
});

tape("stratify.parentId(id) observes the specified parent id function", function(test) {
  var foo = function(d) { return d.foo; },
      s = d3_hierarchy.stratify().parentId(foo),
      root = s([
          {id: "a"},
          {id: "aa", foo: "a"},
          {id: "ab", foo: "a"},
          {id: "aaa", foo: "aa"}
        ]);
  test.equal(s.parentId(), foo);
  test.deepEqual(noparent(root), {
    id: "a",
    depth: 0,
    height: 2,
    data: {id: "a"},
    children: [
      {
        id: "aa",
        depth: 1,
        height: 1,
        data: {id: "aa", foo: "a"},
        children: [
          {
            id: "aaa",
            depth: 2,
            height: 0,
            data: {id: "aaa", foo: "aa"}
          }
        ]
      },
      {
        id: "ab",
        depth: 1,
        height: 0,
        data: {id: "ab", foo: "a"}
      }
    ]
  });
  test.end();
});

tape("stratify.parentId(id) tests that id is a function", function(test) {
  var s = d3_hierarchy.stratify();
  test.throws(function() { s.parentId(42); });
  test.throws(function() { s.parentId(null); });
  test.end();
});

function noparent(node) {
  var copy = {};
  for (var k in node) {
    if (node.hasOwnProperty(k)) switch (k) {
      case "children": copy.children = node.children.map(noparent); break;
      case "parent": break;
      default: copy[k] = node[k]; break;
    }
  }
  return copy;
}
