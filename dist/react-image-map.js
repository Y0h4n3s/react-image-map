!function (e, t) {
  "object" === typeof exports && "object" === typeof module ? module.exports = t() : "function" === typeof define && define.amd ? define([], t) : "object" === typeof exports ? exports.ImageMap = t() : e.ImageMap = t();
}(window, function () {
  return function (e) {
    var t = {};

    function r(n) {
      if (t[n]) return t[n].exports;
      var o = t[n] = {
        i: n,
        l: !1,
        exports: {}
      };
      return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports;
    }

    return r.m = e, r.c = t, r.d = function (e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get: n
      });
    }, r.r = function (e) {
      "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      });
    }, r.t = function (e, t) {
      if (1 & t && (e = r(e)), 8 & t) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (r.r(n), Object.defineProperty(n, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e) for (var o in e) r.d(n, o, function (t) {
        return e[t];
      }.bind(null, o));
      return n;
    }, r.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };
      return r.d(t, "a", t), t;
    }, r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, r.p = "", r(r.s = 4);
  }([function (e, t, r) {
    "use strict";

    e.exports = r(1);
  }, function (e, t, r) {
    "use strict";

    var n = r(2),
        o = "function" === typeof Symbol && Symbol.for,
        u = o ? Symbol.for("react.element") : 60103,
        c = o ? Symbol.for("react.portal") : 60106,
        i = o ? Symbol.for("react.fragment") : 60107,
        f = o ? Symbol.for("react.strict_mode") : 60108,
        l = o ? Symbol.for("react.profiler") : 60114,
        a = o ? Symbol.for("react.provider") : 60109,
        s = o ? Symbol.for("react.context") : 60110,
        p = o ? Symbol.for("react.forward_ref") : 60112,
        y = o ? Symbol.for("react.suspense") : 60113,
        d = o ? Symbol.for("react.memo") : 60115,
        b = o ? Symbol.for("react.lazy") : 60116,
        m = "function" === typeof Symbol && Symbol.iterator;

    function v(e) {
      for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++) t += "&args[]=" + encodeURIComponent(arguments[r]);

      return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }

    var h = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {}
    },
        g = {};

    function O(e, t, r) {
      this.props = e, this.context = t, this.refs = g, this.updater = r || h;
    }

    function j() {}

    function _(e, t, r) {
      this.props = e, this.context = t, this.refs = g, this.updater = r || h;
    }

    O.prototype.isReactComponent = {}, O.prototype.setState = function (e, t) {
      if ("object" !== typeof e && "function" !== typeof e && null != e) throw Error(v(85));
      this.updater.enqueueSetState(this, e, t, "setState");
    }, O.prototype.forceUpdate = function (e) {
      this.updater.enqueueForceUpdate(this, e, "forceUpdate");
    }, j.prototype = O.prototype;
    var w = _.prototype = new j();
    w.constructor = _, n(w, O.prototype), w.isPureReactComponent = !0;
    var S = {
      current: null
    },
        k = Object.prototype.hasOwnProperty,
        P = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    };

    function x(e, t, r) {
      var n,
          o = {},
          c = null,
          i = null;
      if (null != t) for (n in void 0 !== t.ref && (i = t.ref), void 0 !== t.key && (c = "" + t.key), t) k.call(t, n) && !P.hasOwnProperty(n) && (o[n] = t[n]);
      var f = arguments.length - 2;
      if (1 === f) o.children = r;else if (1 < f) {
        for (var l = Array(f), a = 0; a < f; a++) l[a] = arguments[a + 2];

        o.children = l;
      }
      if (e && e.defaultProps) for (n in f = e.defaultProps) void 0 === o[n] && (o[n] = f[n]);
      return {
        $$typeof: u,
        type: e,
        key: c,
        ref: i,
        props: o,
        _owner: S.current
      };
    }

    function E(e) {
      return "object" === typeof e && null !== e && e.$$typeof === u;
    }

    var C = /\/+/g,
        $ = [];

    function R(e, t, r, n) {
      if ($.length) {
        var o = $.pop();
        return o.result = e, o.keyPrefix = t, o.func = r, o.context = n, o.count = 0, o;
      }

      return {
        result: e,
        keyPrefix: t,
        func: r,
        context: n,
        count: 0
      };
    }

    function M(e) {
      e.result = null, e.keyPrefix = null, e.func = null, e.context = null, e.count = 0, 10 > $.length && $.push(e);
    }

    function I(e, t, r) {
      return null == e ? 0 : function e(t, r, n, o) {
        var i = typeof t;
        "undefined" !== i && "boolean" !== i || (t = null);
        var f = !1;
        if (null === t) f = !0;else switch (i) {
          case "string":
          case "number":
            f = !0;
            break;

          case "object":
            switch (t.$$typeof) {
              case u:
              case c:
                f = !0;
            }

        }
        if (f) return n(o, t, "" === r ? "." + N(t, 0) : r), 1;
        if (f = 0, r = "" === r ? "." : r + ":", Array.isArray(t)) for (var l = 0; l < t.length; l++) {
          var a = r + N(i = t[l], l);
          f += e(i, a, n, o);
        } else if (a = null === t || "object" !== typeof t ? null : "function" === typeof (a = m && t[m] || t["@@iterator"]) ? a : null, "function" === typeof a) for (t = a.call(t), l = 0; !(i = t.next()).done;) f += e(i = i.value, a = r + N(i, l++), n, o);else if ("object" === i) throw n = "" + t, Error(v(31, "[object Object]" === n ? "object with keys {" + Object.keys(t).join(", ") + "}" : n, ""));
        return f;
      }(e, "", t, r);
    }

    function N(e, t) {
      return "object" === typeof e && null !== e && null != e.key ? function (e) {
        var t = {
          "=": "=0",
          ":": "=2"
        };
        return "$" + ("" + e).replace(/[=:]/g, function (e) {
          return t[e];
        });
      }(e.key) : t.toString(36);
    }

    function A(e, t) {
      e.func.call(e.context, t, e.count++);
    }

    function D(e, t, r) {
      var n = e.result,
          o = e.keyPrefix;
      e = e.func.call(e.context, t, e.count++), Array.isArray(e) ? q(e, n, r, function (e) {
        return e;
      }) : null != e && (E(e) && (e = function (e, t) {
        return {
          $$typeof: u,
          type: e.type,
          key: t,
          ref: e.ref,
          props: e.props,
          _owner: e._owner
        };
      }(e, o + (!e.key || t && t.key === e.key ? "" : ("" + e.key).replace(C, "$&/") + "/") + r)), n.push(e));
    }

    function q(e, t, r, n, o) {
      var u = "";
      null != r && (u = ("" + r).replace(C, "$&/") + "/"), I(e, D, t = R(t, u, n, o)), M(t);
    }

    var U = {
      current: null
    };

    function T() {
      var e = U.current;
      if (null === e) throw Error(v(321));
      return e;
    }

    var F = {
      ReactCurrentDispatcher: U,
      ReactCurrentBatchConfig: {
        suspense: null
      },
      ReactCurrentOwner: S,
      IsSomeRendererActing: {
        current: !1
      },
      assign: n
    };
    t.Children = {
      map: function (e, t, r) {
        if (null == e) return e;
        var n = [];
        return q(e, n, null, t, r), n;
      },
      forEach: function (e, t, r) {
        if (null == e) return e;
        I(e, A, t = R(null, null, t, r)), M(t);
      },
      count: function (e) {
        return I(e, function () {
          return null;
        }, null);
      },
      toArray: function (e) {
        var t = [];
        return q(e, t, null, function (e) {
          return e;
        }), t;
      },
      only: function (e) {
        if (!E(e)) throw Error(v(143));
        return e;
      }
    }, t.Component = O, t.Fragment = i, t.Profiler = l, t.PureComponent = _, t.StrictMode = f, t.Suspense = y, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = F, t.cloneElement = function (e, t, r) {
      if (null === e || void 0 === e) throw Error(v(267, e));
      var o = n({}, e.props),
          c = e.key,
          i = e.ref,
          f = e._owner;

      if (null != t) {
        if (void 0 !== t.ref && (i = t.ref, f = S.current), void 0 !== t.key && (c = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;

        for (a in t) k.call(t, a) && !P.hasOwnProperty(a) && (o[a] = void 0 === t[a] && void 0 !== l ? l[a] : t[a]);
      }

      var a = arguments.length - 2;
      if (1 === a) o.children = r;else if (1 < a) {
        l = Array(a);

        for (var s = 0; s < a; s++) l[s] = arguments[s + 2];

        o.children = l;
      }
      return {
        $$typeof: u,
        type: e.type,
        key: c,
        ref: i,
        props: o,
        _owner: f
      };
    }, t.createContext = function (e, t) {
      return void 0 === t && (t = null), (e = {
        $$typeof: s,
        _calculateChangedBits: t,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null
      }).Provider = {
        $$typeof: a,
        _context: e
      }, e.Consumer = e;
    }, t.createElement = x, t.createFactory = function (e) {
      var t = x.bind(null, e);
      return t.type = e, t;
    }, t.createRef = function () {
      return {
        current: null
      };
    }, t.forwardRef = function (e) {
      return {
        $$typeof: p,
        render: e
      };
    }, t.isValidElement = E, t.lazy = function (e) {
      return {
        $$typeof: b,
        _ctor: e,
        _status: -1,
        _result: null
      };
    }, t.memo = function (e, t) {
      return {
        $$typeof: d,
        type: e,
        compare: void 0 === t ? null : t
      };
    }, t.useCallback = function (e, t) {
      return T().useCallback(e, t);
    }, t.useContext = function (e, t) {
      return T().useContext(e, t);
    }, t.useDebugValue = function () {}, t.useEffect = function (e, t) {
      return T().useEffect(e, t);
    }, t.useImperativeHandle = function (e, t, r) {
      return T().useImperativeHandle(e, t, r);
    }, t.useLayoutEffect = function (e, t) {
      return T().useLayoutEffect(e, t);
    }, t.useMemo = function (e, t) {
      return T().useMemo(e, t);
    }, t.useReducer = function (e, t, r) {
      return T().useReducer(e, t, r);
    }, t.useRef = function (e) {
      return T().useRef(e);
    }, t.useState = function (e) {
      return T().useState(e);
    }, t.version = "16.14.0";
  }, function (e, t, r) {
    "use strict";

    var n = Object.getOwnPropertySymbols,
        o = Object.prototype.hasOwnProperty,
        u = Object.prototype.propertyIsEnumerable;
    e.exports = function () {
      try {
        if (!Object.assign) return !1;
        var e = new String("abc");
        if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;

        for (var t = {}, r = 0; r < 10; r++) t["_" + String.fromCharCode(r)] = r;

        if ("0123456789" !== Object.getOwnPropertyNames(t).map(function (e) {
          return t[e];
        }).join("")) return !1;
        var n = {};
        return "abcdefghijklmnopqrst".split("").forEach(function (e) {
          n[e] = e;
        }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("");
      } catch (o) {
        return !1;
      }
    }() ? Object.assign : function (e, t) {
      for (var r, c, i = function (e) {
        if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
        return Object(e);
      }(e), f = 1; f < arguments.length; f++) {
        for (var l in r = Object(arguments[f])) o.call(r, l) && (i[l] = r[l]);

        if (n) {
          c = n(r);

          for (var a = 0; a < c.length; a++) u.call(r, c[a]) && (i[c[a]] = r[c[a]]);
        }
      }

      return i;
    };
  }, function (e, t, r) {}, function (e, t, r) {
    "use strict";

    function n(e, t, r) {
      return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r, e;
    }

    function o(e, t) {
      var r = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), r.push.apply(r, n);
      }

      return r;
    }

    function u(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2 ? o(Object(r), !0).forEach(function (t) {
          n(e, t, r[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : o(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }

      return e;
    }

    function c(e, t) {
      if (null == e) return {};

      var r,
          n,
          o = function (e, t) {
        if (null == e) return {};
        var r,
            n,
            o = {},
            u = Object.keys(e);

        for (n = 0; n < u.length; n++) r = u[n], t.indexOf(r) >= 0 || (o[r] = e[r]);

        return o;
      }(e, t);

      if (Object.getOwnPropertySymbols) {
        var u = Object.getOwnPropertySymbols(e);

        for (n = 0; n < u.length; n++) r = u[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
      }

      return o;
    }

    r.r(t);

    var i = r(0),
        f = r.n(i),
        l = (r(3), ["className", "src", "map", "onMapClick", "onClick"]),
        a = ["width", "height", "left", "top", "style", "render"],
        s = function (e) {
      var t = e.className,
          r = void 0 === t ? "" : t,
          n = e.src,
          o = void 0 === n ? "" : n,
          i = e.map,
          s = void 0 === i ? [] : i,
          p = e.onMapClick,
          y = void 0 === p ? function (e, t) {} : p,
          d = e.onClick,
          b = void 0 === d ? function () {} : d,
          m = c(e, l),
          v = function (e, t) {
        return function () {
          y(e, t);
        };
      };

      return f.a.createElement("div", {
        className: "image-map__content ".concat(r)
      }, f.a.createElement("video", Object.assign({
        className: "image-map__content__img",
        width: "100%",
        height: "100%",
        onClick: b
      }, m), f.a.createElement("source", {
        src: o
      })), s.map(function (e, t) {
        var n = e.width,
            o = void 0 === n ? 0 : n,
            i = e.height,
            l = void 0 === i ? 0 : i,
            s = e.left,
            p = void 0 === s ? 0 : s,
            y = e.top,
            d = void 0 === y ? 0 : y,
            b = e.style,
            m = void 0 === b ? {} : b,
            h = e.render,
            g = c(e, a);
        return f.a.createElement("span", Object.assign({
          key: t,
          className: "image-map__map ".concat(r, "_map_span-").concat(t)
        }, g, {
          style: u({
            width: o,
            height: l,
            left: p,
            top: d
          }, m),
          onClick: v(e, t)
        }), h && "function" === typeof h && h(e, t));
      }));
    };

    r.d(t, "ImageMap", function () {
      return s;
    });
  }]).ImageMap;
});