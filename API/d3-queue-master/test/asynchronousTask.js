module.exports = function(counter) {
  var active = 0;

  if (!counter) counter = {scheduled: 0};

  return function(callback) {
    var index = counter.scheduled++;
    ++active;
    process.nextTick(function() {
      try {
        callback(null, {active: active, index: index});
      } finally {
        --active;
      }
    });
  };
}
