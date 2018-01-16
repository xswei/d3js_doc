var fs = require("fs"),
    tape = require("tape"),
    abortableTask = require("./abortableTask"),
    asynchronousTask = require("./asynchronousTask"),
    deferredSynchronousTask = require("./deferredSynchronousTask"),
    synchronousTask = require("./synchronousTask"),
    queue = require("../");

tape("example queue of fs.stat", function(test) {
  queue.queue()
      .defer(fs.stat, __dirname + "/../index.js")
      .defer(fs.stat, __dirname + "/../README.md")
      .defer(fs.stat, __dirname + "/../package.json")
      .await(callback);

  function callback(error, one, two, three) {
    test.equal(error, null);
    test.ok(one.size > 0);
    test.ok(two.size > 0);
    test.ok(three.size > 0);
    test.end();
  }
});

tape("if the concurrency is invalid, an Error is thrown", function(test) {
  test.throws(function() { queue.queue(NaN); }, /Error/);
  test.throws(function() { queue.queue(0); }, /Error/);
  test.throws(function() { queue.queue(-1); }, /Error/);
  test.end();
});

tape("queue.defer throws an error if passed a non-function", function(test) {
  test.throws(function() { queue.queue().defer(42); }, /Error/);
  test.end();
});

tape("queue.await throws an error if passed a non-function", function(test) {
  var task = asynchronousTask();
  test.throws(function() { queue.queue().defer(task).await(42); }, /Error/);
  test.end();
});

tape("queue.awaitAll throws an error if passed a non-function", function(test) {
  var task = asynchronousTask();
  test.throws(function() { queue.queue().defer(task).awaitAll(42); }, /Error/);
  test.end();
});

tape("in a queue of a single synchronous task that errors, the error is returned", function(test) {
  queue.queue()
      .defer(function(callback) { callback(-1); })
      .await(callback);

  function callback(error, result) {
    test.equal(error, -1);
    test.equal(result, undefined);
    test.end();
  }
});

tape("in a queue of a single asynchronous task that errors, the error is returned", function(test) {
  queue.queue()
      .defer(function(callback) { process.nextTick(function() { callback(-1); }); })
      .await(callback);

  function callback(error, result) {
    test.equal(error, -1);
    test.equal(result, undefined);
    test.end();
  }
});

tape("in a queue with multiple tasks that error, the first error is returned", function(test) {
  queue.queue()
      .defer(function(callback) { setTimeout(function() { callback(-2); }, 100); })
      .defer(function(callback) { process.nextTick(function() { callback(-1); }); })
      .defer(function(callback) { setTimeout(function() { callback(-3); }, 200); })
      .await(callback);

  function callback(error, one, two, three) {
    test.equal(error, -1);
    test.equal(one, undefined);
    test.equal(two, undefined);
    test.equal(three, undefined);
    test.end();
  }
});

tape("in a queue with multiple tasks where one errors, the first error is returned", function(test) {
  queue.queue()
      .defer(function(callback) { process.nextTick(function() { callback(-1); }); })
      .defer(function(callback) { process.nextTick(function() { callback(null, 'ok'); }); })
      .await(callback);

  function callback(error, one, two) {
    test.equal(error, -1);
    test.equal(one, undefined);
    test.equal(two, undefined);
    test.end();
  }
});

tape("in a queue with multiple synchronous tasks that error, the first error prevents the other tasks from running", function(test) {
  queue.queue()
      .defer(function(callback) { callback(-1); })
      .defer(function(callback) { callback(-2); })
      .defer(function(callback) { throw new Error; })
      .await(callback);

  function callback(error, one, two, three) {
    test.equal(error, -1);
    test.equal(one, undefined);
    test.equal(two, undefined);
    test.equal(three, undefined);
    test.end();
  }
});

tape("in a queue with a task that throws an error synchronously, the error is reported to the await callback", function(test) {
  queue.queue()
      .defer(function(callback) { throw new Error("foo"); })
      .await(callback);

  function callback(error) {
    test.equal(error.message, "foo");
    test.end();
  }
});

tape("in a queue with a task that throws an error after calling back, the error is ignored", function(test) {
  queue.queue()
      .defer(function(callback) { setTimeout(function() { callback(null, 1); }, 100); })
      .defer(function(callback) { callback(null, 2); process.nextTick(function() { callback(new Error("foo")); }); })
      .await(callback);

  function callback(error, one, two) {
    test.equal(error, null);
    test.equal(one, 1);
    test.equal(two, 2);
    test.end();
  }
});

tape("in a queue with a task that doesn’t terminate and another that errors synchronously, the error is still reported", function(test) {
  queue.queue()
      .defer(function() { /* Run forever! */ })
      .defer(function(callback) { callback(new Error("foo")); })
      .await(callback);

  function callback(error) {
    test.equal(error.message, "foo");
    test.end();
  }
});

tape("a serial queue of asynchronous closures processes tasks serially", function(test) {
  var tasks = [],
      task = asynchronousTask(),
      n = 10,
      q = queue.queue(1);

  while (--n >= 0) tasks.push(task);
  tasks.forEach(function(t) { q.defer(t); });
  q.awaitAll(callback);

  function callback(error, results) {
    test.equal(error, null);
    test.deepEqual(results, [
      {active: 1, index: 0},
      {active: 1, index: 1},
      {active: 1, index: 2},
      {active: 1, index: 3},
      {active: 1, index: 4},
      {active: 1, index: 5},
      {active: 1, index: 6},
      {active: 1, index: 7},
      {active: 1, index: 8},
      {active: 1, index: 9}
    ]);
    test.end();
  }
});

tape("a fully-concurrent queue of ten asynchronous tasks executes all tasks concurrently", function(test) {
  var t = asynchronousTask();

  queue.queue()
      .defer(t)
      .defer(t)
      .defer(t)
      .defer(t)
      .defer(t)
      .defer(t)
      .defer(t)
      .defer(t)
      .defer(t)
      .defer(t)
      .awaitAll(callback);

  function callback(error, results) {
    test.equal(null, error);
    test.deepEqual(results, [
      {active: 10, index: 0},
      {active: 9, index: 1},
      {active: 8, index: 2},
      {active: 7, index: 3},
      {active: 6, index: 4},
      {active: 5, index: 5},
      {active: 4, index: 6},
      {active: 3, index: 7},
      {active: 2, index: 8},
      {active: 1, index: 9}
    ]);
    test.end();
  }
});

tape("a partly-concurrent queue of ten asynchronous tasks executes at most three tasks concurrently", function(test) {
  var t = asynchronousTask();

  queue.queue(3)
      .defer(t)
      .defer(t)
      .defer(t)
      .defer(t)
      .defer(t)
      .defer(t)
      .defer(t)
      .defer(t)
      .defer(t)
      .defer(t)
      .awaitAll(callback);

  function callback(error, results) {
    test.equal(null, error);
    test.deepEqual(results, [
      {active: 3, index: 0},
      {active: 3, index: 1},
      {active: 3, index: 2},
      {active: 3, index: 3},
      {active: 3, index: 4},
      {active: 3, index: 5},
      {active: 3, index: 6},
      {active: 3, index: 7},
      {active: 2, index: 8},
      {active: 1, index: 9}
    ]);
    test.end();
  }
});

tape("a serialized queue of ten asynchronous tasks executes all tasks in series", function(test) {
  var t = asynchronousTask();

  queue.queue(1)
      .defer(t)
      .defer(t)
      .defer(t)
      .defer(t)
      .defer(t)
      .defer(t)
      .defer(t)
      .defer(t)
      .defer(t)
      .defer(t)
      .awaitAll(callback);

  function callback(error, results) {
    test.equal(null, error);
    test.deepEqual(results, [
      {active: 1, index: 0},
      {active: 1, index: 1},
      {active: 1, index: 2},
      {active: 1, index: 3},
      {active: 1, index: 4},
      {active: 1, index: 5},
      {active: 1, index: 6},
      {active: 1, index: 7},
      {active: 1, index: 8},
      {active: 1, index: 9}
    ]);
    test.end();
  }
});

tape("a serialized queue of ten deferred synchronous tasks executes all tasks in series, within the callback of the first task", function(test) {
  var t = deferredSynchronousTask();

  queue.queue(1)
      .defer(t)
      .defer(t)
      .defer(t)
      .defer(t)
      .defer(t)
      .defer(t)
      .defer(t)
      .defer(t)
      .defer(t)
      .defer(t)
      .awaitAll(callback);

  t.finish();

  function callback(error, results) {
    test.equal(null, error);
    test.deepEqual(results, [
      {active: 1, index: 0},
      {active: 2, index: 1},
      {active: 2, index: 2},
      {active: 2, index: 3},
      {active: 2, index: 4},
      {active: 2, index: 5},
      {active: 2, index: 6},
      {active: 2, index: 7},
      {active: 2, index: 8},
      {active: 2, index: 9}
    ]);
    test.end();
  }
});

tape("a partly-concurrent queue of ten synchronous tasks executes all tasks in series", function(test) {
  var t = synchronousTask();

  queue.queue(3)
      .defer(t)
      .defer(t)
      .defer(t)
      .defer(t)
      .defer(t)
      .defer(t)
      .defer(t)
      .defer(t)
      .defer(t)
      .defer(t)
      .awaitAll(callback);

  function callback(error, results) {
    test.equal(null, error);
    test.deepEqual(results, [
      {active: 1, index: 0},
      {active: 1, index: 1},
      {active: 1, index: 2},
      {active: 1, index: 3},
      {active: 1, index: 4},
      {active: 1, index: 5},
      {active: 1, index: 6},
      {active: 1, index: 7},
      {active: 1, index: 8},
      {active: 1, index: 9}
    ]);
    test.end();
  }
});

tape("a serialized queue of ten synchronous tasks executes all tasks in series", function(test) {
  var t = synchronousTask();

  queue.queue(1)
      .defer(t)
      .defer(t)
      .defer(t)
      .defer(t)
      .defer(t)
      .defer(t)
      .defer(t)
      .defer(t)
      .defer(t)
      .defer(t)
      .awaitAll(callback);

  function callback(error, results) {
    test.equal(null, error);
    test.deepEqual(results, [
      {active: 1, index: 0},
      {active: 1, index: 1},
      {active: 1, index: 2},
      {active: 1, index: 3},
      {active: 1, index: 4},
      {active: 1, index: 5},
      {active: 1, index: 6},
      {active: 1, index: 7},
      {active: 1, index: 8},
      {active: 1, index: 9}
    ]);
    test.end();
  }
});

tape("a huge queue of deferred synchronous tasks does not throw a RangeError", function(test) {
  var t = deferredSynchronousTask(),
      q = queue.queue(),
      n = 200000;

  for (var i = 0; i < n; ++i) q.defer(t);
  t.finish();
  q.awaitAll(callback);

  function callback(error, results) {
    test.equal(null, error);
    test.equal(results.length, n);
    test.end();
  }
});

tape("if a task calls back successfully more than once, subsequent calls are ignored", function(test) {
  queue.queue()
      .defer(function(callback) { setTimeout(function() { callback(null, 1); }, 100); })
      .defer(function(callback) { callback(null, 2); process.nextTick(function() { callback(null, -1); }); })
      .defer(function(callback) { callback(null, 3); process.nextTick(function() { callback(new Error("foo")); }); })
      .defer(function(callback) { process.nextTick(function() { callback(null, 4); }); setTimeout(function() { callback(new Error("bar")); }, 100); })
      .await(callback);

  function callback(error, one, two, three, four) {
    test.equal(error, null);
    test.equal(one, 1);
    test.equal(two, 2);
    test.equal(three, 3);
    test.equal(four, 4);
    test.end();
  }
});

tape("if a task calls back with an error more than once, subsequent calls are ignored", function(test) {
  queue.queue()
      .defer(function(callback) { setTimeout(function() { callback(null, 1); }, 100); })
      .defer(function(callback) { callback(new Error("foo")); process.nextTick(function() { callback(new Error("bar")); }); })
      .defer(function(callback) { process.nextTick(function() { callback(new Error("bar")); }); setTimeout(function() { callback(new Error("baz")); }, 100); })
      .await(callback);

  function callback(error) {
    test.equal(error.message, "foo");
    test.end();
  }
});

tape("if a task throws an error aftering calling back synchronously, the error is ignored", function(test) {
  queue.queue()
      .defer(function(callback) { callback(null, 1); throw new Error; })
      .await(callback);

  function callback(error, one) {
    test.equal(error, null);
    test.equal(one, 1);
    test.end();
  }
});

tape("if the await callback throws an error aftering calling back synchronously, the error is thrown", function(test) {
  queue.queue(1)
      .defer(function(callback) { process.nextTick(callback); })
      .defer(function(callback) { callback(null, 1); })
      .await(function() { throw new Error("foo"); });

  process.once("uncaughtException", function(error) {
    test.equal(error.message, "foo");
    test.end();
  });
});

tape("if a task errors, another task can still complete successfully, and is ignored", function(test) {
  queue.queue()
      .defer(function(callback) { setTimeout(function() { callback(null, 1); }, 10); })
      .defer(function(callback) { callback(new Error("foo")); })
      .await(callback);

  function callback(error) {
    test.equal(error.message, "foo");
    test.end();
  }
});

tape("if a task errors, it is not subsequently aborted", function(test) {
  var aborted = false;

  var q = queue.queue()
      .defer(function(callback) { process.nextTick(function() { callback(new Error("foo")); }); return {abort: function() { aborted = true; }}; })
      .await(callback);

  function callback(error) {
    test.equal(error.message, "foo");
    test.equal(aborted, false);
    test.end();
  }
});

tape("a task that defers another task is allowed", function(test) {
  var q = queue.queue();

  q.defer(function(callback) {
    callback(null);
    q.defer(function(callback) {
      test.end();
    });
  });
});

tape("a falsey error is still considered an error", function(test) {
  queue.queue()
      .defer(function(callback) { callback(0); })
      .defer(function() { throw new Error; })
      .await(function(error) { test.equal(error, 0); test.end(); });
});

tape("if the await callback is set during abort, it only gets called once", function(test) {
  var q = queue.queue();
  q.defer(function() { return {abort: function() { q.await(callback); }}; });
  q.defer(function() { throw new Error("foo"); });

  function callback(error) {
    test.equal(error.message, "foo");
    test.end();
  }
});

tape("aborts a queue of partially-completed asynchronous tasks", function(test) {
  var shortTask = abortableTask(50),
      longTask = abortableTask(5000);

  var q = queue.queue()
      .defer(shortTask)
      .defer(longTask)
      .defer(shortTask)
      .defer(longTask)
      .defer(shortTask)
      .defer(longTask)
      .defer(shortTask)
      .defer(longTask)
      .defer(shortTask)
      .defer(longTask)
      .awaitAll(callback);

  setTimeout(function() {
    q.abort();
  }, 250);

  function callback(error, results) {
    test.equal(error.message, "abort");
    test.equal(results, undefined);
    test.equal(shortTask.aborted(), 0);
    test.equal(longTask.aborted(), 5);
    test.end();
  }
});

tape("aborts an entire queue of asynchronous tasks", function(test) {
  var longTask = abortableTask(5000);

  var q = queue.queue()
      .defer(longTask)
      .defer(longTask)
      .defer(longTask)
      .defer(longTask)
      .defer(longTask)
      .awaitAll(callback);

  setTimeout(function() {
    q.abort();
  }, 250);

  function callback(error, results) {
    test.equal(error.message, "abort");
    test.equal(results, undefined);
    test.equal(longTask.aborted(), 5);
    test.end();
  }
});

tape("does not abort tasks that have not yet started", function(test) {
  var shortTask = abortableTask(50),
      longTask = abortableTask(5000);

  var q = queue.queue(2) // enough for two short tasks to run
      .defer(shortTask)
      .defer(longTask)
      .defer(shortTask)
      .defer(longTask)
      .defer(shortTask)
      .defer(longTask)
      .defer(shortTask)
      .defer(longTask)
      .defer(shortTask)
      .defer(longTask)
      .awaitAll(callback);

  setTimeout(function() {
    q.abort();
  }, 250);

  function callback(error, results) {
    test.equal(error.message, "abort");
    test.equal(results, undefined);
    test.equal(shortTask.aborted(), 0);
    test.equal(longTask.aborted(), 2);
    test.end();
  }
});
