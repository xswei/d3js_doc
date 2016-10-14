var tape = require("tape"),
    d3 = require("../");

tape("schemeCategory20b is an array of RGB strings", function(test) {
  test.deepEqual(d3.schemeCategory20b, ["#393b79", "#5254a3", "#6b6ecf", "#9c9ede", "#637939", "#8ca252", "#b5cf6b", "#cedb9c", "#8c6d31", "#bd9e39", "#e7ba52", "#e7cb94", "#843c39", "#ad494a", "#d6616b", "#e7969c", "#7b4173", "#a55194", "#ce6dbd", "#de9ed6"]);
  test.end();
});
