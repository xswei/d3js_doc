var tape = require("tape"),
    format = require("d3-format"),
    interpolate = require("d3-interpolate"),
    color = require("d3-color"),
    scale = require("../");

require("./inDelta");

tape("scaleLog() has the expected defaults", function(test) {
  var x = scale.scaleLog();
  test.deepEqual(x.domain(), [1, 10]);
  test.deepEqual(x.range(), [0, 1]);
  test.equal(x.clamp(), false);
  test.equal(x.base(), 10);
  test.equal(x.interpolate(), interpolate.interpolate);
  test.deepEqual(x.interpolate()({array: ["red"]}, {array: ["blue"]})(0.5), {array: ["rgb(128, 0, 128)"]});
  test.inDelta(x(5), 0.69897);
  test.inDelta(x.invert(0.69897), 5);
  test.inDelta(x(3.162278), 0.5);
  test.inDelta(x.invert(0.5), 3.162278);
  test.end();
});

tape("log.domain(…) coerces values to numbers", function(test) {
  var x = scale.scaleLog().domain([new Date(1990, 0, 1), new Date(1991, 0, 1)]);
  test.equal(typeof x.domain()[0], "number");
  test.equal(typeof x.domain()[1], "number");
  test.inDelta(x(new Date(1989,  9, 20)), -0.2061048);
  test.inDelta(x(new Date(1990,  0,  1)),  0.0000000);
  test.inDelta(x(new Date(1990,  2, 15)),  0.2039385);
  test.inDelta(x(new Date(1990,  4, 27)),  0.4057544);
  test.inDelta(x(new Date(1991,  0,  1)),  1.0000000);
  test.inDelta(x(new Date(1991,  2, 15)),  1.1942797);
  x.domain(["1", "10"]);
  test.equal(typeof x.domain()[0], "number");
  test.equal(typeof x.domain()[1], "number");
  test.inDelta(x(5), 0.69897);
  x.domain([new Number(1), new Number(10)]);
  test.equal(typeof x.domain()[0], "number");
  test.equal(typeof x.domain()[1], "number");
  test.inDelta(x(5), 0.69897);
  test.end();
});

tape("log.domain(…) can take negative values", function(test) {
  var x = scale.scaleLog().domain([-100, -1]);
  test.deepEqual(x.ticks().map(x.tickFormat(Infinity)), [
    "-1e+2",
    "-9e+1", "-8e+1", "-7e+1", "-6e+1", "-5e+1", "-4e+1", "-3e+1", "-2e+1", "-1e+1",
    "-9e+0", "-8e+0", "-7e+0", "-6e+0", "-5e+0", "-4e+0", "-3e+0", "-2e+0", "-1e+0"
  ]);
  test.inDelta(x(-50), 0.150515);
  test.end();
});

tape("log.domain(…).range(…) can take more than two values", function(test) {
  var x = scale.scaleLog().domain([0.1, 1, 100]).range(["red", "white", "green"]);
  test.equal(x(0.5), "rgb(255, 178, 178)");
  test.equal(x(50), "rgb(38, 147, 38)");
  test.equal(x(75), "rgb(16, 136, 16)");
  test.end();
});

tape("log.domain(…) preserves specified domain exactly, with no floating point error", function(test) {
  var x = scale.scaleLog().domain([0.1, 1000]);
  test.deepEqual(x.domain(), [0.1, 1000]);
  test.end();
});

tape("log.range(…) does not coerce values to numbers", function(test) {
  var x = scale.scaleLog().range(["0", "2"]);
  test.equal(typeof x.range()[0], "string");
  test.equal(typeof x.range()[1], "string");
  test.end();
});

tape("log.range(…) can take colors", function(test) {
  var x = scale.scaleLog().range(["red", "blue"]);
  test.equal(x(5), "rgb(77, 0, 178)");
  x.range(["#ff0000", "#0000ff"]);
  test.equal(x(5), "rgb(77, 0, 178)");
  x.range(["#f00", "#00f"]);
  test.equal(x(5), "rgb(77, 0, 178)");
  x.range([color.rgb(255, 0, 0), color.hsl(240, 1, 0.5)]);
  test.equal(x(5), "rgb(77, 0, 178)");
  x.range(["hsl(0,100%,50%)", "hsl(240,100%,50%)"]);
  test.equal(x(5), "rgb(77, 0, 178)");
  test.end();
});

tape("log.range(…) can take arrays or objects", function(test) {
  var x = scale.scaleLog().range([{color: "red"}, {color: "blue"}]);
  test.deepEqual(x(5), {color: "rgb(77, 0, 178)"});
  x.range([["red"], ["blue"]]);
  test.deepEqual(x(5), ["rgb(77, 0, 178)"]);
  test.end();
});

tape("log.interpolate(f) sets the interpolator", function(test) {
  var x = scale.scaleLog().range(["red", "blue"]);
  test.equal(x.interpolate(), interpolate.interpolate);
  test.equal(x(5), "rgb(77, 0, 178)");
  x.interpolate(interpolate.interpolateHsl);
  test.equal(x(5), "rgb(154, 0, 255)");
  test.end();
});

tape("log(x) does not clamp by default", function(test) {
  var x = scale.scaleLog();
  test.equal(x.clamp(), false);
  test.inDelta(x(0.5), -0.3010299);
  test.inDelta(x(15), 1.1760913);
  test.end();
});

tape("log.clamp(true)(x) clamps to the domain", function(test) {
  var x = scale.scaleLog().clamp(true);
  test.inDelta(x(-1), 0);
  test.inDelta(x(5), 0.69897);
  test.inDelta(x(15), 1);
  x.domain([10, 1]);
  test.inDelta(x(-1), 1);
  test.inDelta(x(5), 0.30103);
  test.inDelta(x(15), 0);
  test.end();
});

tape("log.clamp(true).invert(y) clamps to the range", function(test) {
  var x = scale.scaleLog().clamp(true);
  test.inDelta(x.invert(-0.1), 1);
  test.inDelta(x.invert(0.69897), 5);
  test.inDelta(x.invert(1.5), 10);
  x.domain([10, 1]);
  test.inDelta(x.invert(-0.1), 10);
  test.inDelta(x.invert(0.30103), 5);
  test.inDelta(x.invert(1.5), 1);
  test.end();
});

tape("log(x) maps a number x to a number y", function(test) {
  var x = scale.scaleLog().domain([1, 2]);
  test.inDelta(x(0.5), -1.0000000);
  test.inDelta(x(1.0),  0.0000000);
  test.inDelta(x(1.5),  0.5849625);
  test.inDelta(x(2.0),  1.0000000);
  test.inDelta(x(2.5),  1.3219281);
  test.end();
});

tape("log.invert(y) maps a number y to a number x", function(test) {
  var x = scale.scaleLog().domain([1, 2]);
  test.inDelta(x.invert(-1.0000000), 0.5);
  test.inDelta(x.invert( 0.0000000), 1.0);
  test.inDelta(x.invert( 0.5849625), 1.5);
  test.inDelta(x.invert( 1.0000000), 2.0);
  test.inDelta(x.invert( 1.3219281), 2.5);
  test.end();
});

tape("log.invert(y) coerces y to number", function(test) {
  var x = scale.scaleLog().range(["0", "2"]);
  test.inDelta(x.invert("1"), 3.1622777);
  x.range([new Date(1990, 0, 1), new Date(1991, 0, 1)]);
  test.inDelta(x.invert(new Date(1990, 6, 2, 13)), 3.1622777);
  x.range(["#000", "#fff"]);
  test.ok(Number.isNaN(x.invert("#999")));
  test.end();
});

tape("log.base(b) sets the log base, changing the ticks", function(test) {
  var x = scale.scaleLog().domain([1, 32]);
  test.deepEqual(x.base(2).ticks().map(x.tickFormat()), ["1", "2", "4", "8", "16", "32"]);
  test.deepEqual(x.base(Math.E).ticks().map(x.tickFormat()), ["1", "2.71828182846", "7.38905609893", "20.0855369232"]);
  test.end();
});

tape("log.nice() nices the domain, extending it to powers of ten", function(test) {
  var x = scale.scaleLog().domain([1.1, 10.9]).nice();
  test.deepEqual(x.domain(), [1, 100]);
  x.domain([10.9, 1.1]).nice();
  test.deepEqual(x.domain(), [100, 1]);
  x.domain([0.7, 11.001]).nice();
  test.deepEqual(x.domain(), [0.1, 100]);
  x.domain([123.1, 6.7]).nice();
  test.deepEqual(x.domain(), [1000, 1]);
  x.domain([0.01, 0.49]).nice();
  test.deepEqual(x.domain(), [0.01, 1]);
  x.domain([1.5, 50]).nice();
  test.deepEqual(x.domain(), [1, 100]);
  test.inDelta(x(1), 0);
  test.inDelta(x(100), 1);
  test.end();
});

tape("log.nice() works on degenerate domains", function(test) {
  var x = scale.scaleLog().domain([0, 0]).nice();
  test.deepEqual(x.domain(), [0, 0]);
  x.domain([0.5, 0.5]).nice();
  test.deepEqual(x.domain(), [0.1, 1]);
  test.end();
});

tape("log.nice() on a polylog domain only affects the extent", function(test) {
  var x = scale.scaleLog().domain([1.1, 1.5, 10.9]).nice();
  test.deepEqual(x.domain(), [1, 1.5, 100]);
  x.domain([-123.1, -1.5, -0.5]).nice();
  test.deepEqual(x.domain(), [-1000, -1.5, -0.1]);
  test.end();
});

tape("log.copy() isolates changes to the domain", function(test) {
  var x = scale.scaleLog(), y = x.copy();
  x.domain([10, 100]);
  test.deepEqual(y.domain(), [1, 10]);
  test.inDelta(x(10), 0);
  test.inDelta(y(1), 0);
  y.domain([100, 1000]);
  test.inDelta(x(100), 1);
  test.inDelta(y(100), 0);
  test.deepEqual(x.domain(), [10, 100]);
  test.deepEqual(y.domain(), [100, 1000]);
  test.end();
});

tape("log.copy() isolates changes to the domain via nice", function(test) {
  var x = scale.scaleLog().domain([1.5, 50]), y = x.copy().nice();
  test.deepEqual(x.domain(), [1.5, 50]);
  test.inDelta(x(1.5), 0);
  test.inDelta(x(50), 1);
  test.inDelta(x.invert(0), 1.5);
  test.inDelta(x.invert(1), 50);
  test.deepEqual(y.domain(), [1, 100]);
  test.inDelta(y(1), 0);
  test.inDelta(y(100), 1);
  test.inDelta(y.invert(0), 1);
  test.inDelta(y.invert(1), 100);
  test.end();
});

tape("log.copy() isolates changes to the range", function(test) {
  var x = scale.scaleLog(), y = x.copy();
  x.range([1, 2]);
  test.inDelta(x.invert(1), 1);
  test.inDelta(y.invert(1), 10);
  test.deepEqual(y.range(), [0, 1]);
  y.range([2, 3]);
  test.inDelta(x.invert(2), 10);
  test.inDelta(y.invert(2), 1);
  test.deepEqual(x.range(), [1, 2]);
  test.deepEqual(y.range(), [2, 3]);
  test.end();
});

tape("log.copy() isolates changes to the interpolator", function(test) {
  var x = scale.scaleLog().range(["red", "blue"]), y = x.copy();
  x.interpolate(interpolate.interpolateHsl);
  test.equal(x(5), "rgb(154, 0, 255)");
  test.equal(y(5), "rgb(77, 0, 178)");
  test.equal(y.interpolate(), interpolate.interpolate);
  test.end();
});

tape("log.copy() isolates changes to clamping", function(test) {
  var x = scale.scaleLog().clamp(true), y = x.copy();
  x.clamp(false);
  test.inDelta(x(0.5), -0.30103);
  test.inDelta(y(0.5), 0);
  test.equal(y.clamp(), true);
  y.clamp(false);
  test.inDelta(x(20), 1.30103);
  test.inDelta(y(20), 1.30103);
  test.equal(x.clamp(), false);
  test.end();
});

tape("log.ticks() generates the expected power-of-ten for ascending ticks", function(test) {
  var s = scale.scaleLog();
  test.deepEqual(s.domain([1e-1, 1e1]).ticks().map(round), [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  test.deepEqual(s.domain([1e-1, 1e0]).ticks().map(round), [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]);
  test.deepEqual(s.domain([-1e0, -1e-1]).ticks().map(round), [-1, -0.9, -0.8, -0.7, -0.6, -0.5, -0.4, -0.3, -0.2, -0.1]);
  test.end();
});


tape("log.ticks() generates the expected power-of-ten ticks for descending domains", function(test) {
  var s = scale.scaleLog();
  test.deepEqual(s.domain([-1e-1, -1e1]).ticks().map(round), [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, -0.9, -0.8, -0.7, -0.6, -0.5, -0.4, -0.3, -0.2, -0.1].reverse());
  test.deepEqual(s.domain([-1e-1, -1e0]).ticks().map(round), [-1, -0.9, -0.8, -0.7, -0.6, -0.5, -0.4, -0.3, -0.2, -0.1].reverse());
  test.deepEqual(s.domain([1e0, 1e-1]).ticks().map(round), [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1].reverse());
  test.end();
});

tape("log.ticks() generates the expected power-of-ten ticks for small domains", function(test) {
  var s = scale.scaleLog();
  test.deepEqual(s.domain([1, 5]).ticks(), [1, 2, 3, 4, 5]);
  test.deepEqual(s.domain([5, 1]).ticks(), [5, 4, 3, 2, 1]);
  test.deepEqual(s.domain([-1, -5]).ticks(), [-1, -2, -3, -4, -5]);
  test.deepEqual(s.domain([-5, -1]).ticks(), [-5, -4, -3, -2, -1]);
  test.end();
});

tape("log.base(base).ticks() generates the expected power-of-base ticks", function(test) {
  var s = scale.scaleLog().base(Math.E);
  test.deepEqual(s.domain([0.1, 100]).ticks().map(round), [0.135335283237, 0.367879441171, 1, 2.718281828459, 7.389056098931, 20.085536923188, 54.598150033144]);
  test.end();
});

tape("log.tickFormat() is equivalent to log.tickFormat(10)", function(test) {
  var s = scale.scaleLog();
  test.deepEqual(s.domain([1e-1, 1e1]).ticks().map(s.tickFormat()), ["1e-1", "2e-1", "3e-1", "4e-1", "5e-1", "", "", "", "", "1e+0", "2e+0", "3e+0", "4e+0", "5e+0", "", "", "", "", "1e+1"]);
  test.end();
});

tape("log.tickFormat(count) returns a filtered \".0e\" format", function(test) {
  var s = scale.scaleLog(), t = s.domain([1e-1, 1e1]).ticks();
  test.deepEqual(t.map(s.tickFormat(10)), ["1e-1", "2e-1", "3e-1", "4e-1", "5e-1",     "",     "",     "",     "", "1e+0", "2e+0", "3e+0", "4e+0", "5e+0",     "",     "",     "",     "", "1e+1"]);
  test.deepEqual(t.map(s.tickFormat(5)),  ["1e-1", "2e-1",     "",     "",     "",     "",     "",     "",     "", "1e+0", "2e+0",     "",     "",     "",     "",     "",     "",     "", "1e+1"]);
  test.deepEqual(t.map(s.tickFormat(1)),  ["1e-1",     "",     "",     "",     "",     "",     "",     "",     "", "1e+0",     "",     "",     "",     "",     "",     "",     "",     "", "1e+1"]);
  test.deepEqual(t.map(s.tickFormat(0)),  ["1e-1",     "",     "",     "",     "",     "",     "",     "",     "", "1e+0",     "",     "",     "",     "",     "",     "",     "",     "", "1e+1"]);
  test.end();
});

tape("log.tickFormat(count, format) returns the specified format, filtered", function(test) {
  var s = scale.scaleLog(), t = s.domain([1e-1, 1e1]).ticks();
  test.deepEqual(t.map(s.tickFormat(10, "+")), ["+0.1", "+0.2", "+0.3", "+0.4", "+0.5", "", "", "", "", "+1", "+2", "+3", "+4", "+5", "", "", "", "", "+10"]);
  test.end();
});

tape("log.base(base).tickFormat() returns the \",\" format", function(test) {
  var s = scale.scaleLog().base(Math.E);
  test.deepEqual(s.domain([1e-1, 1e1]).ticks().map(s.tickFormat()), ["0.135335283237", "0.367879441171", "1", "2.71828182846", "7.38905609893"]);
  test.end();
});

tape("log.base(base).tickFormat(count) returns a filtered \",\" format", function(test) {
  var s = scale.scaleLog().base(16), t = s.domain([1e-1, 1e1]).ticks();
  test.deepEqual(t.map(s.tickFormat(10)), ["0.125", "0.1875", "0.25", "0.3125", "0.375", "", "", "", "", "", "", "", "", "", "1", "2", "3", "4", "5", "6", "", "", "", ""]);
  test.deepEqual(t.map(s.tickFormat(5)), ["0.125", "0.1875", "", "", "", "", "", "", "", "", "", "", "", "", "1", "2", "3", "", "", "", "", "", "", ""]);
  test.deepEqual(t.map(s.tickFormat(1)), ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "1", "", "", "", "", "", "", "", "", ""]);
  test.end();
});

tape("log.ticks() generates log ticks", function(test) {
  var x = scale.scaleLog();
  test.deepEqual(x.ticks().map(x.tickFormat(Infinity)), [
    "1e+0", "2e+0", "3e+0", "4e+0", "5e+0", "6e+0", "7e+0", "8e+0", "9e+0",
    "1e+1"
  ]);
  x.domain([100, 1]);
  test.deepEqual(x.ticks().map(x.tickFormat(Infinity)), [
    "1e+2",
    "9e+1", "8e+1", "7e+1", "6e+1", "5e+1", "4e+1", "3e+1", "2e+1", "1e+1",
    "9e+0", "8e+0", "7e+0", "6e+0", "5e+0", "4e+0", "3e+0", "2e+0", "1e+0"
  ]);
  x.domain([0.49999, 0.006029505943610648]);
  test.deepEqual(x.ticks().map(x.tickFormat(Infinity)), [
    "4e-1", "3e-1", "2e-1", "1e-1",
    "9e-2", "8e-2", "7e-2", "6e-2", "5e-2", "4e-2", "3e-2", "2e-2", "1e-2",
    "9e-3", "8e-3", "7e-3"
  ]);
  x.domain([0.95, 1.05e8]);
  test.deepEqual(x.ticks().map(x.tickFormat(8)).filter(String), [
    "1e+0", "1e+1", "1e+2", "1e+3", "1e+4", "1e+5", "1e+6", "1e+7", "1e+8"
  ]);
  test.end();
});

tape("log.tickFormat(count) filters ticks to about count", function(test) {
  var x = scale.scaleLog();
  test.deepEqual(x.ticks().map(x.tickFormat(5)), [
    "1e+0", "2e+0", "3e+0", "4e+0", "5e+0", "", "", "", "",
    "1e+1"
  ]);
  x.domain([100, 1]);
  test.deepEqual(x.ticks().map(x.tickFormat(10)), [
    "1e+2",
    "", "", "", "", "5e+1", "4e+1", "3e+1", "2e+1", "1e+1",
    "", "", "", "", "5e+0", "4e+0", "3e+0", "2e+0", "1e+0"
  ]);
  test.end();
});

tape("log.ticks(count) filters powers-of-ten ticks for huge domains", function(test) {
  var x = scale.scaleLog().domain([1e10, 1]);
  test.deepEqual(x.ticks().map(x.tickFormat()), ["1e+10", "1e+9", "1e+8", "1e+7", "1e+6", "1e+5", "1e+4", "1e+3", "1e+2", "1e+1", "1e+0"]);
  x.domain([1e-29, 1e-1]);
  test.deepEqual(x.ticks().map(x.tickFormat()), ["1e-28", "1e-26", "1e-24", "1e-22", "1e-20", "1e-18", "1e-16", "1e-14", "1e-12", "1e-10", "1e-8", "1e-6", "1e-4", "1e-2"]);
  test.end();
});

tape("log.ticks() generates ticks that cover the domain", function(test) {
  var x = scale.scaleLog().domain([0.01, 10000]);
  test.deepEqual(x.ticks(20).map(x.tickFormat(20)), [
    "1e-2", "2e-2", "3e-2", "", "", "", "", "", "",
    "1e-1", "2e-1", "3e-1", "", "", "", "", "", "",
    "1e+0", "2e+0", "3e+0", "", "", "", "", "", "",
    "1e+1", "2e+1", "3e+1", "", "", "", "", "", "",
    "1e+2", "2e+2", "3e+2", "", "", "", "", "", "",
    "1e+3", "2e+3", "3e+3", "", "", "", "", "", "",
    "1e+4"
  ]);
  test.end();
});

tape("log.ticks() generates ticks that cover the niced domain", function(test) {
  var x = scale.scaleLog().domain([0.0124123, 1230.4]).nice();
  test.deepEqual(x.ticks(20).map(x.tickFormat(20)), [
    "1e-2", "2e-2", "3e-2", "", "", "", "", "", "",
    "1e-1", "2e-1", "3e-1", "", "", "", "", "", "",
    "1e+0", "2e+0", "3e+0", "", "", "", "", "", "",
    "1e+1", "2e+1", "3e+1", "", "", "", "", "", "",
    "1e+2", "2e+2", "3e+2", "", "", "", "", "", "",
    "1e+3", "2e+3", "3e+3", "", "", "", "", "", "",
    "1e+4"
  ]);
  test.end();
});

tape("log.tickFormat(count, format) returns a filtered format", function(test) {
  var x = scale.scaleLog().domain([1000.1, 1]);
  test.deepEqual(x.ticks().map(x.tickFormat(10, format.format("+,d"))), [
    "+1,000",
    "", "", "", "", "", "", "+300", "+200", "+100",
    "", "", "", "", "", "", "+30", "+20", "+10",
    "", "", "", "", "", "", "+3", "+2", "+1"
  ]);
  test.end();
});

tape("log.tickFormat(count, specifier) returns a filtered format", function(test) {
  var x = scale.scaleLog().domain([1000.1, 1]);
  test.deepEqual(x.ticks().map(x.tickFormat(10, ".1s")), [
    "1k",
    "", "", "", "", "", "", "300", "200", "100",
    "", "", "", "", "", "", "30", "20", "10",
    "", "", "", "", "", "", "3", "2", "1"
  ]);
  test.end();
});

tape("log.ticks() returns the empty array when the domain is degenerate", function(test) {
  var x = scale.scaleLog();
  test.deepEqual(x.domain([0, 1]).ticks(), []);
  test.deepEqual(x.domain([1, 0]).ticks(), []);
  test.deepEqual(x.domain([0, -1]).ticks(), []);
  test.deepEqual(x.domain([-1, 0]).ticks(), []);
  test.deepEqual(x.domain([-1, 1]).ticks(), []);
  test.deepEqual(x.domain([0, 0]).ticks(), []);
  test.end();
});

function round(x) {
  return Math.round(x * 1e12) / 1e12;
}
