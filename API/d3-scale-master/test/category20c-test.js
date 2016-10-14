var tape = require("tape"),
    d3 = require("../");

tape("schemeCategory20c is an array of RGB strings", function(test) {
  test.deepEqual(d3.schemeCategory20c, ["#3182bd", "#6baed6", "#9ecae1", "#c6dbef", "#e6550d", "#fd8d3c", "#fdae6b", "#fdd0a2", "#31a354", "#74c476", "#a1d99b", "#c7e9c0", "#756bb1", "#9e9ac8", "#bcbddc", "#dadaeb", "#636363", "#969696", "#bdbdbd", "#d9d9d9"]);
  test.end();
});
