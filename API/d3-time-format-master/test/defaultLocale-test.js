var tape = require("tape"),
    d3 = require("../"),
    enUs = require("../locale/en-US"),
    frFr = require("../locale/fr-FR");

tape("d3.timeFormat(specifier) defaults to en-US", function(test) {
  test.equal(d3.timeFormat("%c")(new Date(2000, 0, 1)), "1/1/2000, 12:00:00 AM");
  test.end();
});

tape("d3.timeParse(specifier) defaults to en-US", function(test) {
  test.equal(+d3.timeParse("%c")("1/1/2000, 12:00:00 AM"), +new Date(2000, 0, 1));
  test.end();
});

tape("d3.utcFormat(specifier) defaults to en-US", function(test) {
  test.equal(d3.utcFormat("%c")(new Date(Date.UTC(2000, 0, 1))), "1/1/2000, 12:00:00 AM");
  test.end();
});

tape("d3.utcParse(specifier) defaults to en-US", function(test) {
  test.equal(+d3.utcParse("%c")("1/1/2000, 12:00:00 AM"), +new Date(Date.UTC(2000, 0, 1)));
  test.end();
});

tape("d3.timeFormatDefaultLocale(definition) returns the new default locale", function(test) {
  var locale = d3.timeFormatDefaultLocale(frFr);
  try {
    test.equal(locale.format("%c")(new Date(2000, 0, 1)), "samedi, le  1 janvier 2000, 00:00:00");
    test.end();
  } finally {
    d3.timeFormatDefaultLocale(enUs);
  }
});

tape("d3.timeFormatDefaultLocale(definition) affects d3.timeFormat", function(test) {
  var locale = d3.timeFormatDefaultLocale(frFr);
  try {
    test.equal(d3.timeFormat, locale.format);
    test.equal(d3.timeFormat("%c")(new Date(2000, 0, 1)), "samedi, le  1 janvier 2000, 00:00:00");
    test.end();
  } finally {
    d3.timeFormatDefaultLocale(enUs);
  }
});

tape("d3.timeFormatDefaultLocale(definition) affects d3.timeParse", function(test) {
  var locale = d3.timeFormatDefaultLocale(frFr);
  try {
    test.equal(d3.timeParse, locale.parse);
    test.equal(+d3.timeParse("%c")("samedi, le  1 janvier 2000, 00:00:00"), +new Date(2000, 0, 1));
    test.end();
  } finally {
    d3.timeFormatDefaultLocale(enUs);
  }
});

tape("d3.timeFormatDefaultLocale(definition) affects d3.utcFormat", function(test) {
  var locale = d3.timeFormatDefaultLocale(frFr);
  try {
    test.equal(d3.utcFormat, locale.utcFormat);
    test.equal(d3.utcFormat("%c")(new Date(Date.UTC(2000, 0, 1))), "samedi, le  1 janvier 2000, 00:00:00");
    test.end();
  } finally {
    d3.timeFormatDefaultLocale(enUs);
  }
});

tape("d3.timeFormatDefaultLocale(definition) affects d3.utcParse", function(test) {
  var locale = d3.timeFormatDefaultLocale(frFr);
  try {
    test.equal(d3.utcParse, locale.utcParse);
    test.equal(+d3.utcParse("%c")("samedi, le  1 janvier 2000, 00:00:00"), +new Date(Date.UTC(2000, 0, 1)));
    test.end();
  } finally {
    d3.timeFormatDefaultLocale(enUs);
  }
});
