module.exports = function(delay) {
  var active = 0,
      counter = {scheduled: 0, aborted: 0};

  function task(callback) {
    var index = counter.scheduled++;
    ++active;
    var timeout = setTimeout(function() {
      timeout = null;
      try {
        callback(null, {active: active, index: index});
      } finally {
        --active;
      }
    }, delay);
    return {
      abort: function() {
        if (timeout) {
          timeout = clearTimeout(timeout);
          ++counter.aborted;
        }
      }
    };
  }

  task.aborted = function() {
    return counter.aborted;
  };

  return task;
};
