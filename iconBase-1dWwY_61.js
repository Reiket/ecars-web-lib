import l from "react";
var y = { color: void 0, size: void 0, className: void 0, style: void 0, attr: void 0 }, m = l.createContext && l.createContext(y), O = ["attr", "size", "title"];
function g(r, t) {
  if (r == null) return {};
  var e, n, o = function(i, c) {
    if (i == null) return {};
    var s = {};
    for (var u in i) if (Object.prototype.hasOwnProperty.call(i, u)) {
      if (c.indexOf(u) >= 0) continue;
      s[u] = i[u];
    }
    return s;
  }(r, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(r);
    for (n = 0; n < a.length; n++) e = a[n], t.indexOf(e) >= 0 || Object.prototype.propertyIsEnumerable.call(r, e) && (o[e] = r[e]);
  }
  return o;
}
function f() {
  return f = Object.assign ? Object.assign.bind() : function(r) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
    }
    return r;
  }, f.apply(this, arguments);
}
function b(r, t) {
  var e = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(r, o).enumerable;
    })), e.push.apply(e, n);
  }
  return e;
}
function p(r) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? b(Object(e), !0).forEach(function(n) {
      j(r, n, e[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(e)) : b(Object(e)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(e, n));
    });
  }
  return r;
}
function j(r, t, e) {
  var n;
  return (t = typeof (n = function(o, a) {
    if (typeof o != "object" || !o) return o;
    var i = o[Symbol.toPrimitive];
    if (i !== void 0) {
      var c = i.call(o, a || "default");
      if (typeof c != "object") return c;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (a === "string" ? String : Number)(o);
  }(t, "string")) == "symbol" ? n : n + "") in r ? Object.defineProperty(r, t, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : r[t] = e, r;
}
function v(r) {
  return r && r.map((t, e) => l.createElement(t.tag, p({ key: e }, t.attr), v(t.child)));
}
function w(r) {
  return (t) => l.createElement(d, f({ attr: p({}, r.attr) }, t), v(r.child));
}
function d(r) {
  var t = (e) => {
    var n, { attr: o, size: a, title: i } = r, c = g(r, O), s = a || e.size || "1em";
    return e.className && (n = e.className), r.className && (n = (n ? n + " " : "") + r.className), l.createElement("svg", f({ stroke: "currentColor", fill: "currentColor", strokeWidth: "0" }, e.attr, o, c, { className: n, style: p(p({ color: r.color || e.color }, e.style), r.style), height: s, width: s, xmlns: "http://www.w3.org/2000/svg" }), i && l.createElement("title", null, i), r.children);
  };
  return m !== void 0 ? l.createElement(m.Consumer, null, (e) => t(e)) : t(y);
}
export {
  w as G
};
//# sourceMappingURL=iconBase-1dWwY_61.js.map
