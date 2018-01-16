var tape = require("tape"),
    arrays = require("../");

tape("quantile(array, p) requires sorted numeric input", function(test) {
  test.equal(arrays.quantile([1, 2, 3, 4], 0), 1);
  test.equal(arrays.quantile([1, 2, 3, 4], 1), 4);
  test.equal(arrays.quantile([4, 3, 2, 1], 0), 4);
  test.equal(arrays.quantile([4, 3, 2, 1], 1), 1);
  test.end();
});

tape("quantile(array, p) uses the R-7 method", function(test) {
  var data = [3, 6, 7, 8, 8, 10, 13, 15, 16, 20];
  test.equal(arrays.quantile(data, 0), 3);
  test.equal(arrays.quantile(data, 0.25), 7.25);
  test.equal(arrays.quantile(data, 0.5), 9);
  test.equal(arrays.quantile(data, 0.75), 14.5);
  test.equal(arrays.quantile(data, 1), 20);
  var data = [3, 6, 7, 8, 8, 9, 10, 13, 15, 16, 20];
  test.equal(arrays.quantile(data, 0), 3);
  test.equal(arrays.quantile(data, 0.25), 7.5);
  test.equal(arrays.quantile(data, 0.5), 9);
  test.equal(arrays.quantile(data, 0.75), 14);
  test.equal(arrays.quantile(data, 1), 20);
  test.end();
});

tape("quantile(array, p) coerces values to numbers", function(test) {
  var strings = ["1", "2", "3", "4"];
  test.equal(arrays.quantile(strings, 1 / 3), 2);
  test.equal(arrays.quantile(strings, 1 / 2), 2.5);
  test.equal(arrays.quantile(strings, 2 / 3), 3);
  var dates = [new Date(Date.UTC(2011, 0, 1)), new Date(Date.UTC(2012, 0, 1))];
  test.equal(arrays.quantile(dates, 0), +new Date(Date.UTC(2011, 0, 1)));
  test.equal(arrays.quantile(dates, 1 / 2), +new Date(Date.UTC(2011, 6, 2, 12)));
  test.equal(arrays.quantile(dates, 1), +new Date(Date.UTC(2012, 0, 1)));
  test.end();
});

tape("quantile(array, p) returns an exact value for integer p-values", function(test) {
  var data = [1, 2, 3, 4];
  test.equal(arrays.quantile(data, 1 / 3), 2);
  test.equal(arrays.quantile(data, 2 / 3), 3);
  test.end();
});

tape("quantile(array, p) returns the first value for p = 0", function(test) {
  var data = [1, 2, 3, 4];
  test.equal(arrays.quantile(data, 0), 1);
  test.end();
});

tape("quantile(array, p) returns the last value for p = 1", function(test) {
  var data = [1, 2, 3, 4];
  test.equal(arrays.quantile(data, 1), 4);
  test.end();
});

tape("quantile(array, p, f) observes the specified accessor", function(test) {
  test.equal(arrays.quantile([1, 2, 3, 4].map(box), 0.5, unbox), 2.5);
  test.equal(arrays.quantile([1, 2, 3, 4].map(box), 0, unbox), 1);
  test.equal(arrays.quantile([1, 2, 3, 4].map(box), 1, unbox), 4);
  test.equal(arrays.quantile([2].map(box), 0, unbox), 2);
  test.equal(arrays.quantile([2].map(box), 0.5, unbox), 2);
  test.equal(arrays.quantile([2].map(box), 1, unbox), 2);
  test.equal(arrays.quantile([], 0, unbox), undefined);
  test.equal(arrays.quantile([], 0.5, unbox), undefined);
  test.equal(arrays.quantile([], 1, unbox), undefined);
  test.end();
});

function box(value) {
  return {value: value};
}

function unbox(box) {
  return box.value;
}
