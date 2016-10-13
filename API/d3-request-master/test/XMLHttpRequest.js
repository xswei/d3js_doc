var fs = require("fs");

global.XMLHttpRequestProgressEvent = function XMLHttpRequestProgressEvent(target) {
  this.target = target;
};

XMLHttpRequestProgressEvent.prototype = Object.create(Error);

global.XMLHttpRequest = function XMLHttpRequest() {
  var that = this,
      info = that._info = {},
      headers = {},
      url;

  // TODO handle file system errors?

  that.readyState = 0;

  that.open = function(m, u, a) {
    info.method = m;
    info.url = u;
    info.async = a;
    that.readyState = 1;
    that.send = a ? read : readSync;
  };

  that.setRequestHeader = function(n, v) {
    if (/^Accept$/i.test(n)) info.mimeType = v.split(/,/g)[0];
  };

  function read() {
    that.readyState = 2;
    fs.readFile(info.url, "binary", function(e, d) {
      if (e) {
        that.status = 404; // assumed
      } else {
        that.status = 200;
        that.responseText = d;
        that.responseXML = {_xml: d};
        headers["Content-Length"] = d.length;
      }
      that.readyState = 4;
      XMLHttpRequest._last = that;
      if (that.onreadystatechange) that.onreadystatechange(new XMLHttpRequestProgressEvent(that));
    });
  }

  function readSync() {
    that.readyState = 2;
    try {
      var d = fs.readFileSync(info.url, "binary");
      that.status = 200;
      that.responseText = d;
      that.responseXML = {_xml: d};
      headers["Content-Length"] = d.length;
    } catch (e) {
      that.status = 404; // assumed
    }
    that.readyState = 4;
    XMLHttpRequest._last = that;
    if (that.onreadystatechange) that.onreadystatechange(new XMLHttpRequestProgressEvent(that));
  }

  that.getResponseHeader = function(n) {
    return headers[n];
  };
};
