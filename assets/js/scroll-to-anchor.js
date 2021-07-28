// scroll to anchor
var scrolltoanchor = (function () {
  "use strict";
  return function (t) {
    var n = this;
    void 0 === t && (t = {});
    var e = t.offset;
    void 0 === e && (e = 0);
    var o = t.duration;
    void 0 === o && (o = 800), (this.offset = e), (this.duration = o);
    var r = function (t) {
        return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
      },
      i = Array.prototype.slice
        .call(document.getElementsByTagName("a"))
        .filter(function (t) {
          return (function (t) {
            return -1 != (t.href && t.href.indexOf("#"));
          })(t);
        })
        .filter(function (t) {
          return (function (t) {
            return t.pathname == window.location.pathname || ("/" + t.pathname == window.location.pathname && t.search == location.search);
          })(t);
        });
    document.addEventListener("click", function (t) {
      var u = i.filter(function (n) {
        return t.target === n;
      })[0];
      u &&
        (t.preventDefault(),
        (function (t) {
          var i = t.getAttribute("href"),
            u = document.querySelector(i),
            a = u.getAttribute("data-anchor-offset");
          e = a || n.offset;
          var c = (function (t) {
              return Math.floor(t.getBoundingClientRect().top);
            })(u),
            f = window.pageYOffset || document.documentElement.scrollTop,
            l = f,
            d = f + c - e,
            s = !1,
            m = null,
            h = function (t) {
              if (s) return (document.documentElement.scrollTop = d), u.focus(), void window.history.pushState("", "", i);
              (l == d || t - m >= o) && (s = !0);
              var n = r((t - m) / o),
                e = l + (d - l) * n;
              (document.documentElement.scrollTop = e), requestAnimationFrame(h);
            };
          requestAnimationFrame(function (t) {
            (m = t), h(t);
          });
        })(u));
    });
  };
})();
