var fs = require("fs"),
    path = require("path"),
    tape = require("tape"),
    queue = require("d3-queue"),
    d3 = require("../");

tape("locale data is valid", function(test) {
  fs.readdir("locale", function(error, locales) {
    if (error) throw error;
    var q = queue.queue(1);
    locales.forEach(function(locale) {
      if (!/\.json$/i.test(locale)) return;
      q.defer(testLocale, path.join("locale", locale));
    });
    q.awaitAll(function(error) {
      if (error) throw error;
      test.end();
    });
  });

  function testLocale(locale, callback) {
    fs.readFile(locale, "utf8", function(error, locale) {
      if (error) return void callback(error);
      locale = JSON.parse(locale);
      test.deepEqual(Object.keys(locale).sort(), ["date", "dateTime", "days", "months", "periods", "shortDays", "shortMonths", "time"]);
      locale = d3.timeFormatLocale(locale);
      callback(null);
    });
  }
});
