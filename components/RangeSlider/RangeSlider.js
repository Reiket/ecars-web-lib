import { jsx as Yt } from "react/jsx-runtime";
import { g as qt } from "../../_commonjsHelpers-DaMA6jEr.js";
import * as o from "react";
import { useMemo as Gt } from "react";
import { r as zt } from "../../index-CGl3Xo_k.js";
import { cn as Jt } from "../../services/helpers.js";
function Ee(e) {
  "@babel/helpers - typeof";
  return Ee = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ee(e);
}
function Qt(e, t) {
  if (Ee(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ee(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Zt(e) {
  var t = Qt(e, "string");
  return Ee(t) == "symbol" ? t : t + "";
}
function Z(e, t, r) {
  return (t = Zt(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function St(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(u) {
      return Object.getOwnPropertyDescriptor(e, u).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function U(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? St(Object(r), !0).forEach(function(n) {
      Z(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : St(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Qe(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function er(e) {
  if (Array.isArray(e)) return Qe(e);
}
function tr(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Dt(e, t) {
  if (e) {
    if (typeof e == "string") return Qe(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Qe(e, t) : void 0;
  }
}
function rr() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function fe(e) {
  return er(e) || tr(e) || Dt(e) || rr();
}
function nr(e) {
  if (Array.isArray(e)) return e;
}
function ar(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, u, a, l, s = [], b = !0, m = !1;
    try {
      if (a = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r) return;
        b = !1;
      } else for (; !(b = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); b = !0) ;
    } catch (y) {
      m = !0, u = y;
    } finally {
      try {
        if (!b && r.return != null && (l = r.return(), Object(l) !== l)) return;
      } finally {
        if (m) throw u;
      }
    }
    return s;
  }
}
function ur() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function V(e, t) {
  return nr(e) || ar(e, t) || Dt(e, t) || ur();
}
var ze = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var Ct;
function or() {
  return Ct || (Ct = 1, function(e) {
    (function() {
      var t = {}.hasOwnProperty;
      function r() {
        for (var a = "", l = 0; l < arguments.length; l++) {
          var s = arguments[l];
          s && (a = u(a, n(s)));
        }
        return a;
      }
      function n(a) {
        if (typeof a == "string" || typeof a == "number")
          return a;
        if (typeof a != "object")
          return "";
        if (Array.isArray(a))
          return r.apply(null, a);
        if (a.toString !== Object.prototype.toString && !a.toString.toString().includes("[native code]"))
          return a.toString();
        var l = "";
        for (var s in a)
          t.call(a, s) && a[s] && (l = u(l, s));
        return l;
      }
      function u(a, l) {
        return l ? a ? a + " " + l : a + l : a;
      }
      e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
    })();
  }(ze)), ze.exports;
}
var ir = or();
const Pe = /* @__PURE__ */ qt(ir);
function Ie(e) {
  var t = o.useRef();
  t.current = e;
  var r = o.useCallback(function() {
    for (var n, u = arguments.length, a = new Array(u), l = 0; l < u; l++)
      a[l] = arguments[l];
    return (n = t.current) === null || n === void 0 ? void 0 : n.call.apply(n, [t].concat(a));
  }, []);
  return r;
}
function lr() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var Et = process.env.NODE_ENV !== "test" && lr() ? o.useLayoutEffect : o.useEffect, pt = function(t, r) {
  var n = o.useRef(!0);
  Et(function() {
    return t(n.current);
  }, r), Et(function() {
    return n.current = !1, function() {
      n.current = !0;
    };
  }, []);
}, Mt = function(t, r) {
  pt(function(n) {
    if (!n)
      return t();
  }, r);
};
function kt(e) {
  var t = o.useRef(!1), r = o.useState(e), n = V(r, 2), u = n[0], a = n[1];
  o.useEffect(function() {
    return t.current = !1, function() {
      t.current = !0;
    };
  }, []);
  function l(s, b) {
    b && t.current || a(s);
  }
  return [u, l];
}
function Je(e) {
  return e !== void 0;
}
function cr(e, t) {
  var r = t || {}, n = r.defaultValue, u = r.value, a = r.onChange, l = r.postState, s = kt(function() {
    return Je(u) ? u : Je(n) ? typeof n == "function" ? n() : n : typeof e == "function" ? e() : e;
  }), b = V(s, 2), m = b[0], y = b[1], C = u !== void 0 ? u : m, M = l ? l(C) : C, h = Ie(a), S = kt([C]), v = V(S, 2), c = v[0], f = v[1];
  Mt(function() {
    var g = c[0];
    m !== g && h(m, g);
  }, [c]), Mt(function() {
    Je(u) || y(u);
  }, [u]);
  var i = Ie(function(g, R) {
    y(g, R), f([C], R);
  });
  return [M, i];
}
var Ze = {}, rt = [], sr = function(t) {
  rt.push(t);
};
function xt(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var r = rt.reduce(function(n, u) {
      return u(n ?? "", "warning");
    }, t);
    r && console.error("Warning: ".concat(r));
  }
}
function fr(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var r = rt.reduce(function(n, u) {
      return u(n ?? "", "note");
    }, t);
    r && console.warn("Note: ".concat(r));
  }
}
function dr() {
  Ze = {};
}
function wt(e, t, r) {
  !t && !Ze[r] && (e(!1, r), Ze[r] = !0);
}
function we(e, t) {
  wt(xt, e, t);
}
function vr(e, t) {
  wt(fr, e, t);
}
we.preMessage = sr;
we.resetWarned = dr;
we.noteOnce = vr;
function gr(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, n = /* @__PURE__ */ new Set();
  function u(a, l) {
    var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, b = n.has(a);
    if (we(!b, "Warning: There may be circular references"), b)
      return !1;
    if (a === l)
      return !0;
    if (r && s > 1)
      return !1;
    n.add(a);
    var m = s + 1;
    if (Array.isArray(a)) {
      if (!Array.isArray(l) || a.length !== l.length)
        return !1;
      for (var y = 0; y < a.length; y++)
        if (!u(a[y], l[y], m))
          return !1;
      return !0;
    }
    if (a && l && Ee(a) === "object" && Ee(l) === "object") {
      var C = Object.keys(a);
      return C.length !== Object.keys(l).length ? !1 : C.every(function(M) {
        return u(a[M], l[M], m);
      });
    }
    return !1;
  }
  return u(e, t);
}
function We() {
  return We = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, We.apply(null, arguments);
}
function mr(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function Pt(e, t) {
  if (e == null) return {};
  var r, n, u = mr(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (u[r] = e[r]);
  }
  return u;
}
function et(e, t, r) {
  return (e - t) / (r - t);
}
function nt(e, t, r, n) {
  var u = et(t, r, n), a = {};
  switch (e) {
    case "rtl":
      a.right = "".concat(u * 100, "%"), a.transform = "translateX(50%)";
      break;
    case "btt":
      a.bottom = "".concat(u * 100, "%"), a.transform = "translateY(50%)";
      break;
    case "ttb":
      a.top = "".concat(u * 100, "%"), a.transform = "translateY(-50%)";
      break;
    default:
      a.left = "".concat(u * 100, "%"), a.transform = "translateX(-50%)";
      break;
  }
  return a;
}
function xe(e, t) {
  return Array.isArray(e) ? e[t] : e;
}
var j = {
  /**
   * BACKSPACE
   */
  BACKSPACE: 8,
  /**
   * PAGE_UP
   */
  PAGE_UP: 33,
  // also NUM_NORTH_EAST
  /**
   * PAGE_DOWN
   */
  PAGE_DOWN: 34,
  // also NUM_SOUTH_EAST
  /**
   * END
   */
  END: 35,
  // also NUM_SOUTH_WEST
  /**
   * HOME
   */
  HOME: 36,
  // also NUM_NORTH_WEST
  /**
   * LEFT
   */
  LEFT: 37,
  // also NUM_WEST
  /**
   * UP
   */
  UP: 38,
  // also NUM_NORTH
  /**
   * RIGHT
   */
  RIGHT: 39,
  // also NUM_EAST
  /**
   * DOWN
   */
  DOWN: 40,
  // also NUM_INSERT
  /**
   * DELETE
   */
  DELETE: 46
}, _e = /* @__PURE__ */ o.createContext({
  min: 0,
  max: 0,
  direction: "ltr",
  step: 1,
  includedStart: 0,
  includedEnd: 0,
  tabIndex: 0,
  keyboard: !0,
  styles: {},
  classNames: {}
}), hr = /* @__PURE__ */ o.createContext({}), yr = ["prefixCls", "value", "valueIndex", "onStartMove", "onDelete", "style", "render", "dragging", "draggingDelete", "onOffsetChange", "onChangeComplete", "onFocus", "onMouseEnter"], tt = /* @__PURE__ */ o.forwardRef(function(e, t) {
  var r = e.prefixCls, n = e.value, u = e.valueIndex, a = e.onStartMove, l = e.onDelete, s = e.style, b = e.render, m = e.dragging, y = e.draggingDelete, C = e.onOffsetChange, M = e.onChangeComplete, h = e.onFocus, S = e.onMouseEnter, v = Pt(e, yr), c = o.useContext(_e), f = c.min, i = c.max, g = c.direction, R = c.disabled, x = c.keyboard, F = c.range, W = c.tabIndex, X = c.ariaLabelForHandle, P = c.ariaLabelledByForHandle, O = c.ariaRequired, E = c.ariaValueTextFormatterForHandle, k = c.styles, T = c.classNames, B = "".concat(r, "-handle"), I = function(_) {
    R || a(_, u);
  }, G = function(_) {
    h == null || h(_, u);
  }, A = function(_) {
    S(_, u);
  }, de = function(_) {
    if (!R && x) {
      var p = null;
      switch (_.which || _.keyCode) {
        case j.LEFT:
          p = g === "ltr" || g === "btt" ? -1 : 1;
          break;
        case j.RIGHT:
          p = g === "ltr" || g === "btt" ? 1 : -1;
          break;
        // Up is plus
        case j.UP:
          p = g !== "ttb" ? 1 : -1;
          break;
        // Down is minus
        case j.DOWN:
          p = g !== "ttb" ? -1 : 1;
          break;
        case j.HOME:
          p = "min";
          break;
        case j.END:
          p = "max";
          break;
        case j.PAGE_UP:
          p = 2;
          break;
        case j.PAGE_DOWN:
          p = -2;
          break;
        case j.BACKSPACE:
        case j.DELETE:
          l(u);
          break;
      }
      p !== null && (_.preventDefault(), C(p, u));
    }
  }, ne = function(_) {
    switch (_.which || _.keyCode) {
      case j.LEFT:
      case j.RIGHT:
      case j.UP:
      case j.DOWN:
      case j.HOME:
      case j.END:
      case j.PAGE_UP:
      case j.PAGE_DOWN:
        M == null || M();
        break;
    }
  }, Me = nt(g, n, f, i), ve = {};
  if (u !== null) {
    var ke;
    ve = {
      tabIndex: R ? null : xe(W, u),
      role: "slider",
      "aria-valuemin": f,
      "aria-valuemax": i,
      "aria-valuenow": n,
      "aria-disabled": R,
      "aria-label": xe(X, u),
      "aria-labelledby": xe(P, u),
      "aria-required": xe(O, u),
      "aria-valuetext": (ke = xe(E, u)) === null || ke === void 0 ? void 0 : ke(n),
      "aria-orientation": g === "ltr" || g === "rtl" ? "horizontal" : "vertical",
      onMouseDown: I,
      onTouchStart: I,
      onFocus: G,
      onMouseEnter: A,
      onKeyDown: de,
      onKeyUp: ne
    };
  }
  var Re = /* @__PURE__ */ o.createElement("div", We({
    ref: t,
    className: Pe(B, Z(Z(Z({}, "".concat(B, "-").concat(u + 1), u !== null && F), "".concat(B, "-dragging"), m), "".concat(B, "-dragging-delete"), y), T.handle),
    style: U(U(U({}, Me), s), k.handle)
  }, ve, v));
  return b && (Re = b(Re, {
    index: u,
    prefixCls: r,
    value: n,
    dragging: m,
    draggingDelete: y
  })), Re;
});
process.env.NODE_ENV !== "production" && (tt.displayName = "Handle");
var br = ["prefixCls", "style", "onStartMove", "onOffsetChange", "values", "handleRender", "activeHandleRender", "draggingIndex", "draggingDelete", "onFocus"], _t = /* @__PURE__ */ o.forwardRef(function(e, t) {
  var r = e.prefixCls, n = e.style, u = e.onStartMove, a = e.onOffsetChange, l = e.values, s = e.handleRender, b = e.activeHandleRender, m = e.draggingIndex, y = e.draggingDelete, C = e.onFocus, M = Pt(e, br), h = o.useRef({}), S = o.useState(!1), v = V(S, 2), c = v[0], f = v[1], i = o.useState(-1), g = V(i, 2), R = g[0], x = g[1], F = function(E) {
    x(E), f(!0);
  }, W = function(E, k) {
    F(k), C == null || C(E);
  }, X = function(E, k) {
    F(k);
  };
  o.useImperativeHandle(t, function() {
    return {
      focus: function(E) {
        var k;
        (k = h.current[E]) === null || k === void 0 || k.focus();
      },
      hideHelp: function() {
        zt.flushSync(function() {
          f(!1);
        });
      }
    };
  });
  var P = U({
    prefixCls: r,
    onStartMove: u,
    onOffsetChange: a,
    render: s,
    onFocus: W,
    onMouseEnter: X
  }, M);
  return /* @__PURE__ */ o.createElement(o.Fragment, null, l.map(function(O, E) {
    var k = m === E;
    return /* @__PURE__ */ o.createElement(tt, We({
      ref: function(B) {
        B ? h.current[E] = B : delete h.current[E];
      },
      dragging: k,
      draggingDelete: k && y,
      style: xe(n, E),
      key: E,
      value: O,
      valueIndex: E
    }, P));
  }), b && c && /* @__PURE__ */ o.createElement(tt, We({
    key: "a11y"
  }, P, {
    value: l[R],
    valueIndex: null,
    dragging: m !== -1,
    draggingDelete: y,
    render: b,
    style: {
      pointerEvents: "none"
    },
    tabIndex: null,
    "aria-hidden": !0
  })));
});
process.env.NODE_ENV !== "production" && (_t.displayName = "Handles");
var Sr = function(t) {
  var r = t.prefixCls, n = t.style, u = t.children, a = t.value, l = t.onClick, s = o.useContext(_e), b = s.min, m = s.max, y = s.direction, C = s.includedStart, M = s.includedEnd, h = s.included, S = "".concat(r, "-text"), v = nt(y, a, b, m);
  return /* @__PURE__ */ o.createElement("span", {
    className: Pe(S, Z({}, "".concat(S, "-active"), h && C <= a && a <= M)),
    style: U(U({}, v), n),
    onMouseDown: function(f) {
      f.stopPropagation();
    },
    onClick: function() {
      l(a);
    }
  }, u);
}, Cr = function(t) {
  var r = t.prefixCls, n = t.marks, u = t.onClick, a = "".concat(r, "-mark");
  return n.length ? /* @__PURE__ */ o.createElement("div", {
    className: a
  }, n.map(function(l) {
    var s = l.value, b = l.style, m = l.label;
    return /* @__PURE__ */ o.createElement(Sr, {
      key: s,
      prefixCls: a,
      style: b,
      value: s,
      onClick: u
    }, m);
  })) : null;
}, Er = function(t) {
  var r = t.prefixCls, n = t.value, u = t.style, a = t.activeStyle, l = o.useContext(_e), s = l.min, b = l.max, m = l.direction, y = l.included, C = l.includedStart, M = l.includedEnd, h = "".concat(r, "-dot"), S = y && C <= n && n <= M, v = U(U({}, nt(m, n, s, b)), typeof u == "function" ? u(n) : u);
  return S && (v = U(U({}, v), typeof a == "function" ? a(n) : a)), /* @__PURE__ */ o.createElement("span", {
    className: Pe(h, Z({}, "".concat(h, "-active"), S)),
    style: v
  });
}, Mr = function(t) {
  var r = t.prefixCls, n = t.marks, u = t.dots, a = t.style, l = t.activeStyle, s = o.useContext(_e), b = s.min, m = s.max, y = s.step, C = o.useMemo(function() {
    var M = /* @__PURE__ */ new Set();
    if (n.forEach(function(S) {
      M.add(S.value);
    }), u && y !== null)
      for (var h = b; h <= m; )
        M.add(h), h += y;
    return Array.from(M);
  }, [b, m, y, u, n]);
  return /* @__PURE__ */ o.createElement("div", {
    className: "".concat(r, "-step")
  }, C.map(function(M) {
    return /* @__PURE__ */ o.createElement(Er, {
      prefixCls: r,
      key: M,
      value: M,
      style: a,
      activeStyle: l
    });
  }));
}, Rt = function(t) {
  var r = t.prefixCls, n = t.style, u = t.start, a = t.end, l = t.index, s = t.onStartMove, b = t.replaceCls, m = o.useContext(_e), y = m.direction, C = m.min, M = m.max, h = m.disabled, S = m.range, v = m.classNames, c = "".concat(r, "-track"), f = et(u, C, M), i = et(a, C, M), g = function(W) {
    !h && s && s(W, -1);
  }, R = {};
  switch (y) {
    case "rtl":
      R.right = "".concat(f * 100, "%"), R.width = "".concat(i * 100 - f * 100, "%");
      break;
    case "btt":
      R.bottom = "".concat(f * 100, "%"), R.height = "".concat(i * 100 - f * 100, "%");
      break;
    case "ttb":
      R.top = "".concat(f * 100, "%"), R.height = "".concat(i * 100 - f * 100, "%");
      break;
    default:
      R.left = "".concat(f * 100, "%"), R.width = "".concat(i * 100 - f * 100, "%");
  }
  var x = b || Pe(c, Z(Z({}, "".concat(c, "-").concat(l + 1), l !== null && S), "".concat(r, "-track-draggable"), s), v.track);
  return /* @__PURE__ */ o.createElement("div", {
    className: x,
    style: U(U({}, R), n),
    onMouseDown: g,
    onTouchStart: g
  });
}, kr = function(t) {
  var r = t.prefixCls, n = t.style, u = t.values, a = t.startPoint, l = t.onStartMove, s = o.useContext(_e), b = s.included, m = s.range, y = s.min, C = s.styles, M = s.classNames, h = o.useMemo(function() {
    if (!m) {
      if (u.length === 0)
        return [];
      var v = a ?? y, c = u[0];
      return [{
        start: Math.min(v, c),
        end: Math.max(v, c)
      }];
    }
    for (var f = [], i = 0; i < u.length - 1; i += 1)
      f.push({
        start: u[i],
        end: u[i + 1]
      });
    return f;
  }, [u, m, a, y]);
  if (!b)
    return null;
  var S = h != null && h.length && (M.tracks || C.tracks) ? /* @__PURE__ */ o.createElement(Rt, {
    index: null,
    prefixCls: r,
    start: h[0].start,
    end: h[h.length - 1].end,
    replaceCls: Pe(M.tracks, "".concat(r, "-tracks")),
    style: C.tracks
  }) : null;
  return /* @__PURE__ */ o.createElement(o.Fragment, null, S, h.map(function(v, c) {
    var f = v.start, i = v.end;
    return /* @__PURE__ */ o.createElement(Rt, {
      index: c,
      prefixCls: r,
      style: U(U({}, xe(n, c)), C.track),
      start: f,
      end: i,
      key: c,
      onStartMove: l
    });
  }));
}, Rr = 130;
function Ot(e) {
  var t = "targetTouches" in e ? e.targetTouches[0] : e;
  return {
    pageX: t.pageX,
    pageY: t.pageY
  };
}
function Or(e, t, r, n, u, a, l, s, b, m, y) {
  var C = o.useState(null), M = V(C, 2), h = M[0], S = M[1], v = o.useState(-1), c = V(v, 2), f = c[0], i = c[1], g = o.useState(!1), R = V(g, 2), x = R[0], F = R[1], W = o.useState(r), X = V(W, 2), P = X[0], O = X[1], E = o.useState(r), k = V(E, 2), T = k[0], B = k[1], I = o.useRef(null), G = o.useRef(null), A = o.useRef(null), de = o.useContext(hr), ne = de.onDragStart, Me = de.onDragChange;
  pt(function() {
    f === -1 && O(r);
  }, [r, f]), o.useEffect(function() {
    return function() {
      document.removeEventListener("mousemove", I.current), document.removeEventListener("mouseup", G.current), A.current && (A.current.removeEventListener("touchmove", I.current), A.current.removeEventListener("touchend", G.current));
    };
  }, []);
  var ve = function(p, $, Y) {
    $ !== void 0 && S($), O(p);
    var z = p;
    Y && (z = p.filter(function(H, q) {
      return q !== f;
    })), l(z), Me && Me({
      rawValues: p,
      deleteIndex: Y ? f : -1,
      draggingIndex: f,
      draggingValue: $
    });
  }, ke = Ie(function(_, p, $) {
    if (_ === -1) {
      var Y = T[0], z = T[T.length - 1], H = n - Y, q = u - z, ee = p * (u - n);
      ee = Math.max(ee, H), ee = Math.min(ee, q);
      var Ne = a(Y + ee);
      ee = Ne - Y;
      var ae = T.map(function(ie) {
        return ie + ee;
      });
      ve(ae);
    } else {
      var ue = (u - n) * p, oe = fe(P);
      oe[_] = T[_];
      var me = b(oe, ue, _, "dist");
      ve(me.values, me.value, $);
    }
  }), Re = function(p, $, Y) {
    p.stopPropagation();
    var z = Y || r, H = z[$];
    i($), S(H), B(z), O(z), F(!1);
    var q = Ot(p), ee = q.pageX, Ne = q.pageY, ae = !1;
    ne && ne({
      rawValues: z,
      draggingIndex: $,
      draggingValue: H
    });
    var ue = function(ie) {
      ie.preventDefault();
      var J = Ot(ie), Fe = J.pageX, Ae = J.pageY, He = Fe - ee, re = Ae - Ne, te = e.current.getBoundingClientRect(), Oe = te.width, Te = te.height, he, ye;
      switch (t) {
        case "btt":
          he = -re / Te, ye = He;
          break;
        case "ttb":
          he = re / Te, ye = He;
          break;
        case "rtl":
          he = -He / Oe, ye = re;
          break;
        default:
          he = He / Oe, ye = re;
      }
      ae = m ? Math.abs(ye) > Rr && y < P.length : !1, F(ae), ke($, he, ae);
    }, oe = function me(ie) {
      ie.preventDefault(), document.removeEventListener("mouseup", me), document.removeEventListener("mousemove", ue), A.current && (A.current.removeEventListener("touchmove", I.current), A.current.removeEventListener("touchend", G.current)), I.current = null, G.current = null, A.current = null, s(ae), i(-1), F(!1);
    };
    document.addEventListener("mouseup", oe), document.addEventListener("mousemove", ue), p.currentTarget.addEventListener("touchend", oe), p.currentTarget.addEventListener("touchmove", ue), I.current = ue, G.current = oe, A.current = p.currentTarget;
  }, ge = o.useMemo(function() {
    var _ = fe(r).sort(function(H, q) {
      return H - q;
    }), p = fe(P).sort(function(H, q) {
      return H - q;
    }), $ = {};
    p.forEach(function(H) {
      $[H] = ($[H] || 0) + 1;
    }), _.forEach(function(H) {
      $[H] = ($[H] || 0) - 1;
    });
    var Y = m ? 1 : 0, z = Object.values($).reduce(function(H, q) {
      return H + Math.abs(q);
    }, 0);
    return z <= Y ? P : r;
  }, [r, P, m]);
  return [f, h, x, ge, Re];
}
function Dr(e, t, r, n, u, a) {
  var l = o.useCallback(function(h) {
    return Math.max(e, Math.min(t, h));
  }, [e, t]), s = o.useCallback(function(h) {
    if (r !== null) {
      var S = e + Math.round((l(h) - e) / r) * r, v = function(g) {
        return (String(g).split(".")[1] || "").length;
      }, c = Math.max(v(r), v(t), v(e)), f = Number(S.toFixed(c));
      return e <= f && f <= t ? f : null;
    }
    return null;
  }, [r, e, t, l]), b = o.useCallback(function(h) {
    var S = l(h), v = n.map(function(i) {
      return i.value;
    });
    r !== null && v.push(s(h)), v.push(e, t);
    var c = v[0], f = t - e;
    return v.forEach(function(i) {
      var g = Math.abs(S - i);
      g <= f && (c = i, f = g);
    }), c;
  }, [e, t, n, r, l, s]), m = function h(S, v, c) {
    var f = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "unit";
    if (typeof v == "number") {
      var i, g = S[c], R = g + v, x = [];
      n.forEach(function(O) {
        x.push(O.value);
      }), x.push(e, t), x.push(s(g));
      var F = v > 0 ? 1 : -1;
      f === "unit" ? x.push(s(g + F * r)) : x.push(s(R)), x = x.filter(function(O) {
        return O !== null;
      }).filter(function(O) {
        return v < 0 ? O <= g : O >= g;
      }), f === "unit" && (x = x.filter(function(O) {
        return O !== g;
      }));
      var W = f === "unit" ? g : R;
      i = x[0];
      var X = Math.abs(i - W);
      if (x.forEach(function(O) {
        var E = Math.abs(O - W);
        E < X && (i = O, X = E);
      }), i === void 0)
        return v < 0 ? e : t;
      if (f === "dist")
        return i;
      if (Math.abs(v) > 1) {
        var P = fe(S);
        return P[c] = i, h(P, v - F, c, f);
      }
      return i;
    } else {
      if (v === "min")
        return e;
      if (v === "max")
        return t;
    }
  }, y = function(S, v, c) {
    var f = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "unit", i = S[c], g = m(S, v, c, f);
    return {
      value: g,
      changed: g !== i
    };
  }, C = function(S) {
    return a === null && S === 0 || typeof a == "number" && S < a;
  }, M = function(S, v, c) {
    var f = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "unit", i = S.map(b), g = i[c], R = m(i, v, c, f);
    if (i[c] = R, u === !1) {
      var x = a || 0;
      c > 0 && i[c - 1] !== g && (i[c] = Math.max(i[c], i[c - 1] + x)), c < i.length - 1 && i[c + 1] !== g && (i[c] = Math.min(i[c], i[c + 1] - x));
    } else if (typeof a == "number" || a === null) {
      for (var F = c + 1; F < i.length; F += 1)
        for (var W = !0; C(i[F] - i[F - 1]) && W; ) {
          var X = y(i, 1, F);
          i[F] = X.value, W = X.changed;
        }
      for (var P = c; P > 0; P -= 1)
        for (var O = !0; C(i[P] - i[P - 1]) && O; ) {
          var E = y(i, -1, P - 1);
          i[P - 1] = E.value, O = E.changed;
        }
      for (var k = i.length - 1; k > 0; k -= 1)
        for (var T = !0; C(i[k] - i[k - 1]) && T; ) {
          var B = y(i, -1, k - 1);
          i[k - 1] = B.value, T = B.changed;
        }
      for (var I = 0; I < i.length - 1; I += 1)
        for (var G = !0; C(i[I + 1] - i[I]) && G; ) {
          var A = y(i, 1, I + 1);
          i[I + 1] = A.value, G = A.changed;
        }
    }
    return {
      value: i[c],
      values: i
    };
  };
  return [b, M];
}
function pr(e) {
  return Gt(function() {
    if (e === !0 || !e)
      return [!!e, !1, !1, 0];
    var t = e.editable, r = e.draggableTrack, n = e.minCount, u = e.maxCount;
    return process.env.NODE_ENV !== "production" && xt(!t || !r, "`editable` can not work with `draggableTrack`."), [!0, t, !t && r, n || 0, u];
  }, [e]);
}
var Nt = /* @__PURE__ */ o.forwardRef(function(e, t) {
  var r = e.prefixCls, n = r === void 0 ? "rc-slider" : r, u = e.className, a = e.style, l = e.classNames, s = e.styles, b = e.id, m = e.disabled, y = m === void 0 ? !1 : m, C = e.keyboard, M = C === void 0 ? !0 : C, h = e.autoFocus, S = e.onFocus, v = e.onBlur, c = e.min, f = c === void 0 ? 0 : c, i = e.max, g = i === void 0 ? 100 : i, R = e.step, x = R === void 0 ? 1 : R, F = e.value, W = e.defaultValue, X = e.range, P = e.count, O = e.onChange, E = e.onBeforeChange, k = e.onAfterChange, T = e.onChangeComplete, B = e.allowCross, I = B === void 0 ? !0 : B, G = e.pushable, A = G === void 0 ? !1 : G, de = e.reverse, ne = e.vertical, Me = e.included, ve = Me === void 0 ? !0 : Me, ke = e.startPoint, Re = e.trackStyle, ge = e.handleStyle, _ = e.railStyle, p = e.dotStyle, $ = e.activeDotStyle, Y = e.marks, z = e.dots, H = e.handleRender, q = e.activeHandleRender, ee = e.track, Ne = e.tabIndex, ae = Ne === void 0 ? 0 : Ne, ue = e.ariaLabelForHandle, oe = e.ariaLabelledByForHandle, me = e.ariaRequired, ie = e.ariaValueTextFormatterForHandle, J = o.useRef(null), Fe = o.useRef(null), Ae = o.useMemo(function() {
    return ne ? de ? "ttb" : "btt" : de ? "rtl" : "ltr";
  }, [de, ne]), He = pr(X), re = V(He, 5), te = re[0], Oe = re[1], Te = re[2], he = re[3], ye = re[4], Q = o.useMemo(function() {
    return isFinite(f) ? f : 0;
  }, [f]), $e = o.useMemo(function() {
    return isFinite(g) ? g : 100;
  }, [g]), De = o.useMemo(function() {
    return x !== null && x <= 0 ? 1 : x;
  }, [x]), Ft = o.useMemo(function() {
    return typeof A == "boolean" ? A ? De : !1 : A >= 0 ? A : !1;
  }, [A, De]), Be = o.useMemo(function() {
    return Object.keys(Y || {}).map(function(D) {
      var d = Y[D], w = {
        value: Number(D)
      };
      return d && Ee(d) === "object" && !/* @__PURE__ */ o.isValidElement(d) && ("label" in d || "style" in d) ? (w.style = d.style, w.label = d.label) : w.label = d, w;
    }).filter(function(D) {
      var d = D.label;
      return d || typeof d == "number";
    }).sort(function(D, d) {
      return D.value - d.value;
    });
  }, [Y]), At = Dr(Q, $e, De, Be, I, Ft), at = V(At, 2), Ke = at[0], ut = at[1], Ht = cr(W, {
    value: F
  }), ot = V(Ht, 2), be = ot[0], Tt = ot[1], K = o.useMemo(function() {
    var D = be == null ? [] : Array.isArray(be) ? be : [be], d = V(D, 1), w = d[0], N = w === void 0 ? Q : w, L = be === null ? [] : [N];
    if (te) {
      if (L = fe(D), P || be === void 0) {
        var Se = P >= 0 ? P + 1 : 2;
        for (L = L.slice(0, Se); L.length < Se; ) {
          var le;
          L.push((le = L[L.length - 1]) !== null && le !== void 0 ? le : Q);
        }
      }
      L.sort(function(ce, se) {
        return ce - se;
      });
    }
    return L.forEach(function(ce, se) {
      L[se] = Ke(ce);
    }), L;
  }, [be, te, Q, P, Ke]), Le = function(d) {
    return te ? d : d[0];
  }, Xe = Ie(function(D) {
    var d = fe(D).sort(function(w, N) {
      return w - N;
    });
    O && !gr(d, K, !0) && O(Le(d)), Tt(d);
  }), it = Ie(function(D) {
    D && J.current.hideHelp();
    var d = Le(K);
    k == null || k(d), we(!k, "[rc-slider] `onAfterChange` is deprecated. Please use `onChangeComplete` instead."), T == null || T(d);
  }), $t = function(d) {
    if (!(y || !Oe || K.length <= he)) {
      var w = fe(K);
      w.splice(d, 1), E == null || E(Le(w)), Xe(w);
      var N = Math.max(0, d - 1);
      J.current.hideHelp(), J.current.focus(N);
    }
  }, Lt = Or(Fe, Ae, K, Q, $e, Ke, Xe, it, ut, Oe, he), Ve = V(Lt, 5), lt = Ve[0], jt = Ve[1], It = Ve[2], qe = Ve[3], ct = Ve[4], st = function(d, w) {
    if (!y) {
      var N = fe(K), L = 0, Se = 0, le = $e - Q;
      K.forEach(function(Ce, Ye) {
        var bt = Math.abs(d - Ce);
        bt <= le && (le = bt, L = Ye), Ce < d && (Se = Ye);
      });
      var ce = L;
      Oe && le !== 0 && (!ye || K.length < ye) ? (N.splice(Se + 1, 0, d), ce = Se + 1) : N[L] = d, te && !K.length && P === void 0 && N.push(d);
      var se = Le(N);
      if (E == null || E(se), Xe(N), w) {
        var pe, je;
        (pe = document.activeElement) === null || pe === void 0 || (je = pe.blur) === null || je === void 0 || je.call(pe), J.current.focus(ce), ct(w, ce, N);
      } else
        k == null || k(se), we(!k, "[rc-slider] `onAfterChange` is deprecated. Please use `onChangeComplete` instead."), T == null || T(se);
    }
  }, Vt = function(d) {
    d.preventDefault();
    var w = Fe.current.getBoundingClientRect(), N = w.width, L = w.height, Se = w.left, le = w.top, ce = w.bottom, se = w.right, pe = d.clientX, je = d.clientY, Ce;
    switch (Ae) {
      case "btt":
        Ce = (ce - je) / L;
        break;
      case "ttb":
        Ce = (je - le) / L;
        break;
      case "rtl":
        Ce = (se - pe) / N;
        break;
      default:
        Ce = (pe - Se) / N;
    }
    var Ye = Q + Ce * ($e - Q);
    st(Ke(Ye), d);
  }, Ut = o.useState(null), ft = V(Ut, 2), Ge = ft[0], dt = ft[1], Wt = function(d, w) {
    if (!y) {
      var N = ut(K, d, w);
      E == null || E(Le(K)), Xe(N.values), dt(N.value);
    }
  };
  o.useEffect(function() {
    if (Ge !== null) {
      var D = K.indexOf(Ge);
      D >= 0 && J.current.focus(D);
    }
    dt(null);
  }, [Ge]);
  var Bt = o.useMemo(function() {
    return Te && De === null ? (process.env.NODE_ENV !== "production" && we(!1, "`draggableTrack` is not supported when `step` is `null`."), !1) : Te;
  }, [Te, De]), vt = Ie(function(D, d) {
    ct(D, d), E == null || E(Le(K));
  }), gt = lt !== -1;
  o.useEffect(function() {
    if (!gt) {
      var D = K.lastIndexOf(jt);
      J.current.focus(D);
    }
  }, [gt]);
  var Ue = o.useMemo(function() {
    return fe(qe).sort(function(D, d) {
      return D - d;
    });
  }, [qe]), Kt = o.useMemo(function() {
    return te ? [Ue[0], Ue[Ue.length - 1]] : [Q, Ue[0]];
  }, [Ue, te, Q]), mt = V(Kt, 2), ht = mt[0], yt = mt[1];
  o.useImperativeHandle(t, function() {
    return {
      focus: function() {
        J.current.focus(0);
      },
      blur: function() {
        var d, w = document, N = w.activeElement;
        (d = Fe.current) !== null && d !== void 0 && d.contains(N) && (N == null || N.blur());
      }
    };
  }), o.useEffect(function() {
    h && J.current.focus(0);
  }, []);
  var Xt = o.useMemo(function() {
    return {
      min: Q,
      max: $e,
      direction: Ae,
      disabled: y,
      keyboard: M,
      step: De,
      included: ve,
      includedStart: ht,
      includedEnd: yt,
      range: te,
      tabIndex: ae,
      ariaLabelForHandle: ue,
      ariaLabelledByForHandle: oe,
      ariaRequired: me,
      ariaValueTextFormatterForHandle: ie,
      styles: s || {},
      classNames: l || {}
    };
  }, [Q, $e, Ae, y, M, De, ve, ht, yt, te, ae, ue, oe, me, ie, s, l]);
  return /* @__PURE__ */ o.createElement(_e.Provider, {
    value: Xt
  }, /* @__PURE__ */ o.createElement("div", {
    ref: Fe,
    className: Pe(n, u, Z(Z(Z(Z({}, "".concat(n, "-disabled"), y), "".concat(n, "-vertical"), ne), "".concat(n, "-horizontal"), !ne), "".concat(n, "-with-marks"), Be.length)),
    style: a,
    onMouseDown: Vt,
    id: b
  }, /* @__PURE__ */ o.createElement("div", {
    className: Pe("".concat(n, "-rail"), l == null ? void 0 : l.rail),
    style: U(U({}, _), s == null ? void 0 : s.rail)
  }), ee !== !1 && /* @__PURE__ */ o.createElement(kr, {
    prefixCls: n,
    style: Re,
    values: K,
    startPoint: ke,
    onStartMove: Bt ? vt : void 0
  }), /* @__PURE__ */ o.createElement(Mr, {
    prefixCls: n,
    marks: Be,
    dots: z,
    style: p,
    activeStyle: $
  }), /* @__PURE__ */ o.createElement(_t, {
    ref: J,
    prefixCls: n,
    style: ge,
    values: qe,
    draggingIndex: lt,
    draggingDelete: It,
    onStartMove: vt,
    onOffsetChange: Wt,
    onFocus: S,
    onBlur: v,
    handleRender: H,
    activeHandleRender: q,
    onChangeComplete: it,
    onDelete: Oe ? $t : void 0
  }), /* @__PURE__ */ o.createElement(Cr, {
    prefixCls: n,
    marks: Be,
    onClick: st
  })));
});
process.env.NODE_ENV !== "production" && (Nt.displayName = "Slider");
const Fr = ({ block: e, ...t }) => /* @__PURE__ */ Yt(
  Nt,
  {
    className: Jt(e, "range-slider"),
    ...t,
    range: !0
  }
);
export {
  Fr as RangeSlider
};
//# sourceMappingURL=RangeSlider.js.map
