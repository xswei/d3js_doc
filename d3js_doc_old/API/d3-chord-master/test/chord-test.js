var tape = require("tape"),
    d3 = require("../");

require("./inDelta");

// From http://mkweb.bcgsc.ca/circos/guide/tables/
var matrix = [
  [11975,  5871, 8916, 2868],
  [ 1951, 10048, 2060, 6171],
  [ 8010, 16145, 8090, 8045],
  [ 1013,   990,  940, 6907]
];

tape("d3.chord() has the epxected defaults", function(test) {
  var chord = d3.chord();
  test.equal(chord.padAngle(), 0);
  test.equal(chord.sortGroups(), null);
  test.equal(chord.sortSubgroups(), null);
  test.equal(chord.sortChords(), null);
  var chords = chord(matrix);
  test.inDelta(chords.groups, [
    {endAngle: 1.8617078, index: 0, startAngle: 0.0000000, value: 29630},
    {endAngle: 3.1327961, index: 1, startAngle: 1.8617078, value: 20230},
    {endAngle: 5.6642915, index: 2, startAngle: 3.1327961, value: 40290},
    {endAngle: 6.2831853, index: 3, startAngle: 5.6642915, value:  9850}
  ]);
  test.inDelta(chords, [{
    source: {endAngle: 0.7524114, index: 0, startAngle: 0.0000000, subindex: 0, value: 11975},
    target: {endAngle: 0.7524114, index: 0, startAngle: 0.0000000, subindex: 0, value: 11975}}, {
    source: {endAngle: 1.1212972, index: 0, startAngle: 0.7524114, subindex: 1, value:  5871},
    target: {endAngle: 1.9842927, index: 1, startAngle: 1.8617078, subindex: 0, value:  1951}}, {
    source: {endAngle: 1.6815060, index: 0, startAngle: 1.1212972, subindex: 2, value:  8916},
    target: {endAngle: 3.6360793, index: 2, startAngle: 3.1327961, subindex: 0, value:  8010}}, {
    source: {endAngle: 1.8617078, index: 0, startAngle: 1.6815060, subindex: 3, value:  2868},
    target: {endAngle: 5.7279402, index: 3, startAngle: 5.6642915, subindex: 0, value:  1013}}, {
    source: {endAngle: 2.6156272, index: 1, startAngle: 1.9842927, subindex: 1, value: 10048},
    target: {endAngle: 2.6156272, index: 1, startAngle: 1.9842927, subindex: 1, value: 10048}}, {
    source: {endAngle: 4.6504996, index: 2, startAngle: 3.6360793, subindex: 1, value: 16145},
    target: {endAngle: 2.7450608, index: 1, startAngle: 2.6156272, subindex: 2, value:  2060}}, {
    source: {endAngle: 3.1327961, index: 1, startAngle: 2.7450608, subindex: 3, value:  6171},
    target: {endAngle: 5.7901437, index: 3, startAngle: 5.7279402, subindex: 1, value:   990}}, {
    source: {endAngle: 5.1588092, index: 2, startAngle: 4.6504996, subindex: 2, value:  8090},
    target: {endAngle: 5.1588092, index: 2, startAngle: 4.6504996, subindex: 2, value:  8090}}, {
    source: {endAngle: 5.6642915, index: 2, startAngle: 5.1588092, subindex: 3, value:  8045},
    target: {endAngle: 5.8492056, index: 3, startAngle: 5.7901437, subindex: 2, value:   940}}, {
    source: {endAngle: 6.2831853, index: 3, startAngle: 5.8492056, subindex: 3, value:  6907},
    target: {endAngle: 6.2831853, index: 3, startAngle: 5.8492056, subindex: 3, value:  6907}}
  ]);
  test.end();
});

tape("chord.padAngle(angle) sets the pad angle", function(test) {
  var chord = d3.chord().sortSubgroups(function(a, b) { return b - a; });
  test.equal(chord.padAngle(0.05), chord);
  test.equal(chord.padAngle(), 0.05);
  var chords = chord(matrix);
  test.inDelta(chords.groups, [
    {endAngle: 1.80244780, index: 0, startAngle: 0.0000000, value: 29630},
    {endAngle: 3.08307619, index: 1, startAngle: 1.8524478, value: 20230},
    {endAngle: 5.58399155, index: 2, startAngle: 3.1330761, value: 40290},
    {endAngle: 6.23318530, index: 3, startAngle: 5.6339915, value:  9850}
  ]);
  test.inDelta(chords, [{
    source: {endAngle: 0.7284614, index: 0, startAngle: 0.0000000, subindex: 0, value: 11975},
    target: {endAngle: 0.7284614, index: 0, startAngle: 0.0000000, subindex: 0, value: 11975}}, {
    source: {endAngle: 1.6279820, index: 0, startAngle: 1.2708382, subindex: 1, value:  5871},
    target: {endAngle: 3.0830761, index: 1, startAngle: 2.9643932, subindex: 0, value:  1951}}, {
    source: {endAngle: 1.2708382, index: 0, startAngle: 0.7284614, subindex: 2, value:  8916},
    target: {endAngle: 5.5839915, index: 2, startAngle: 5.0967284, subindex: 0, value:  8010}}, {
    source: {endAngle: 1.8024478, index: 0, startAngle: 1.6279820, subindex: 3, value:  2868},
    target: {endAngle: 6.1157798, index: 3, startAngle: 6.0541571, subindex: 0, value:  1013}}, {
    source: {endAngle: 2.4636862, index: 1, startAngle: 1.8524478, subindex: 1, value: 10048},
    target: {endAngle: 2.4636862, index: 1, startAngle: 1.8524478, subindex: 1, value: 10048}}, {
    source: {endAngle: 4.1152064, index: 2, startAngle: 3.1330761, subindex: 1, value: 16145},
    target: {endAngle: 2.9643932, index: 1, startAngle: 2.8390796, subindex: 2, value:  2060}}, {
    source: {endAngle: 2.8390796, index: 1, startAngle: 2.4636862, subindex: 3, value:  6171},
    target: {endAngle: 6.1760033, index: 3, startAngle: 6.1157798, subindex: 1, value:   990}}, {
    source: {endAngle: 4.6073361, index: 2, startAngle: 4.1152064, subindex: 2, value:  8090},
    target: {endAngle: 4.6073361, index: 2, startAngle: 4.1152064, subindex: 2, value:  8090}}, {
    source: {endAngle: 5.0967284, index: 2, startAngle: 4.6073361, subindex: 3, value:  8045},
    target: {endAngle: 6.2331853, index: 3, startAngle: 6.1760033, subindex: 2, value:   940}}, {
    source: {endAngle: 6.0541571, index: 3, startAngle: 5.6339915, subindex: 3, value:  6907},
    target: {endAngle: 6.0541571, index: 3, startAngle: 5.6339915, subindex: 3, value:  6907}}
  ]);
  test.end();
});
