module.exports = function(counter) {
  var active = 0;

  if (!counter) counter = {scheduled: 0};

  return function(callback) {
    try {
      callback(null, {active: ++active, index: counter.scheduled++});
    } finally {
      --active;
    }
  };
};
