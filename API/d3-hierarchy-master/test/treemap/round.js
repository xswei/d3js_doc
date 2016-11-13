module.exports = function(d) {
  return {
    x0: round(d.x0),
    y0: round(d.y0),
    x1: round(d.x1),
    y1: round(d.y1)
  };
};

function round(x) {
  return Math.round(x * 100) / 100;
}
