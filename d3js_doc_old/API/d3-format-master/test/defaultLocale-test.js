var tape = require("tape"),
    d3 = require("../");

var enUs = {
  "decimal": ".",
  "thousands": ",",
  "grouping": [3],
  "currency": ["$", ""]
};

var frFr = {
  "decimal": ",",
  "thousands": ".",
  "grouping": [3],
  "currency": ["", "\u00a0€"]
};

tape("d3.formatDefaultLocale(definition) returns the new default locale", function(test) {
  var locale = d3.formatDefaultLocale(frFr);
  try {
    test.equal(locale.format("$,.2f")(12345678.90), "12.345.678,90 €");
    test.end();
  } finally {
    d3.formatDefaultLocale(enUs);
  }
});

tape("d3.formatDefaultLocale(definition) affects d3.format", function(test) {
  var locale = d3.formatDefaultLocale(frFr);
  try {
    test.equal(d3.format, locale.format);
    test.equal(d3.format("$,.2f")(12345678.90), "12.345.678,90 €");
    test.end();
  } finally {
    d3.formatDefaultLocale(enUs);
  }
});

tape("d3.formatDefaultLocale(definition) affects d3.formatPrefix", function(test) {
  var locale = d3.formatDefaultLocale(frFr);
  try {
    test.equal(d3.formatPrefix, locale.formatPrefix);
    test.equal(d3.formatPrefix(",.2", 1e3)(12345678.90), "12.345,68k");
    test.end();
  } finally {
    d3.formatDefaultLocale(enUs);
  }
});
