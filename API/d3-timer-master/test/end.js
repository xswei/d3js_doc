// Some tests need a trailing frame after timers are stopped to cleanup the
// queue and clear the alarm. Let that finish before starting a new test.
module.exports = function(test) {
  setTimeout(function() {
    test.end();
  }, 24);
};
