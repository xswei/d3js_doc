module.exports = function(counter) {
  var active = 0, deferrals = [];

  if (!counter) counter = {scheduled: 0};

  function task(callback) {
    if (deferrals) return deferrals.push({callback: callback, index: counter.scheduled++});
    try {
      callback(null, {active: ++active, index: counter.scheduled++});
    } finally {
      --active;
    }
  }

  task.finish = function() {
    var deferrals_ = deferrals.slice();
    deferrals = null;
    deferrals_.forEach(function(deferral) {
      try {
        deferral.callback(null, {active: ++active, index: deferral.index});
      } finally {
        --active;
      }
    });
  };

  return task;
};
