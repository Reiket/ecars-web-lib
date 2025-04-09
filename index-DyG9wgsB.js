var Pl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function yl(P) {
  return P && P.__esModule && Object.prototype.hasOwnProperty.call(P, "default") ? P.default : P;
}
var St, Ht, Lt, S = {}, A = {}, _t = {}, B = {};
function gt() {
  if (Ht) return _t;
  Ht = 1, Object.defineProperty(_t, "__esModule", { value: !0 }), _t.default = function(R, y) {
    return typeof Symbol == "function" && O(Symbol.iterator) === "symbol" && Object.defineProperty(R, Symbol.iterator, { value: F.default.bind(y) }), R;
  };
  var P, F = (P = function() {
    if (St) return B;
    St = 1, Object.defineProperty(B, "__esModule", { value: !0 }), B.default = void 0;
    var R = function() {
      var y = this, f = 0, x = { "@@iterator": function() {
        return x;
      }, next: function() {
        if (f < y.length) {
          var g = y[f];
          return f += 1, { done: !1, value: g };
        }
        return { done: !0 };
      } };
      return x;
    };
    return B.default = R, B;
  }()) && P.__esModule ? P : { default: P };
  function O(R) {
    return O = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(y) {
      return typeof y;
    } : function(y) {
      return y && typeof Symbol == "function" && y.constructor === Symbol && y !== Symbol.prototype ? "symbol" : typeof y;
    }, O(R);
  }
  return _t;
}
function pl() {
  if (Lt) return A;
  Lt = 1, Object.defineProperty(A, "__esModule", { value: !0 }), A.default = void 0;
  var P, F = (P = gt()) && P.__esModule ? P : { default: P };
  function O(s, m) {
    return function(u) {
      if (Array.isArray(u)) return u;
    }(s) || function(u, b) {
      var v = u == null ? null : typeof Symbol < "u" && u[Symbol.iterator] || u["@@iterator"];
      if (v != null) {
        var c, d, i = [], C = !0, r = !1;
        try {
          for (v = v.call(u); !(C = (c = v.next()).done) && (i.push(c.value), !b || i.length !== b); C = !0) ;
        } catch (t) {
          r = !0, d = t;
        } finally {
          try {
            C || v.return == null || v.return();
          } finally {
            if (r) throw d;
          }
        }
        return i;
      }
    }(s, m) || R(s, m) || function() {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }();
  }
  function R(s, m) {
    if (s) {
      if (typeof s == "string") return y(s, m);
      var u = Object.prototype.toString.call(s).slice(8, -1);
      return u === "Object" && s.constructor && (u = s.constructor.name), u === "Map" || u === "Set" ? Array.from(s) : u === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u) ? y(s, m) : void 0;
    }
  }
  function y(s, m) {
    (m == null || m > s.length) && (m = s.length);
    for (var u = 0, b = new Array(m); u < m; u++) b[u] = s[u];
    return b;
  }
  var f = [["aria-activedescendant", { type: "id" }], ["aria-atomic", { type: "boolean" }], ["aria-autocomplete", { type: "token", values: ["inline", "list", "both", "none"] }], ["aria-braillelabel", { type: "string" }], ["aria-brailleroledescription", { type: "string" }], ["aria-busy", { type: "boolean" }], ["aria-checked", { type: "tristate" }], ["aria-colcount", { type: "integer" }], ["aria-colindex", { type: "integer" }], ["aria-colspan", { type: "integer" }], ["aria-controls", { type: "idlist" }], ["aria-current", { type: "token", values: ["page", "step", "location", "date", "time", !0, !1] }], ["aria-describedby", { type: "idlist" }], ["aria-description", { type: "string" }], ["aria-details", { type: "id" }], ["aria-disabled", { type: "boolean" }], ["aria-dropeffect", { type: "tokenlist", values: ["copy", "execute", "link", "move", "none", "popup"] }], ["aria-errormessage", { type: "id" }], ["aria-expanded", { type: "boolean", allowundefined: !0 }], ["aria-flowto", { type: "idlist" }], ["aria-grabbed", { type: "boolean", allowundefined: !0 }], ["aria-haspopup", { type: "token", values: [!1, !0, "menu", "listbox", "tree", "grid", "dialog"] }], ["aria-hidden", { type: "boolean", allowundefined: !0 }], ["aria-invalid", { type: "token", values: ["grammar", !1, "spelling", !0] }], ["aria-keyshortcuts", { type: "string" }], ["aria-label", { type: "string" }], ["aria-labelledby", { type: "idlist" }], ["aria-level", { type: "integer" }], ["aria-live", { type: "token", values: ["assertive", "off", "polite"] }], ["aria-modal", { type: "boolean" }], ["aria-multiline", { type: "boolean" }], ["aria-multiselectable", { type: "boolean" }], ["aria-orientation", { type: "token", values: ["vertical", "undefined", "horizontal"] }], ["aria-owns", { type: "idlist" }], ["aria-placeholder", { type: "string" }], ["aria-posinset", { type: "integer" }], ["aria-pressed", { type: "tristate" }], ["aria-readonly", { type: "boolean" }], ["aria-relevant", { type: "tokenlist", values: ["additions", "all", "removals", "text"] }], ["aria-required", { type: "boolean" }], ["aria-roledescription", { type: "string" }], ["aria-rowcount", { type: "integer" }], ["aria-rowindex", { type: "integer" }], ["aria-rowspan", { type: "integer" }], ["aria-selected", { type: "boolean", allowundefined: !0 }], ["aria-setsize", { type: "integer" }], ["aria-sort", { type: "token", values: ["ascending", "descending", "none", "other"] }], ["aria-valuemax", { type: "number" }], ["aria-valuemin", { type: "number" }], ["aria-valuenow", { type: "number" }], ["aria-valuetext", { type: "string" }]], x = { entries: function() {
    return f;
  }, forEach: function(s) {
    var m, u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, b = function(i, C) {
      var r = typeof Symbol < "u" && i[Symbol.iterator] || i["@@iterator"];
      if (!r) {
        if (Array.isArray(i) || (r = R(i)) || C) {
          r && (i = r);
          var t = 0, l = function() {
          };
          return { s: l, n: function() {
            return t >= i.length ? { done: !0 } : { done: !1, value: i[t++] };
          }, e: function(_) {
            throw _;
          }, f: l };
        }
        throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      var o, p = !0, q = !1;
      return { s: function() {
        r = r.call(i);
      }, n: function() {
        var _ = r.next();
        return p = _.done, _;
      }, e: function(_) {
        q = !0, o = _;
      }, f: function() {
        try {
          p || r.return == null || r.return();
        } finally {
          if (q) throw o;
        }
      } };
    }(f);
    try {
      for (b.s(); !(m = b.n()).done; ) {
        var v = O(m.value, 2), c = v[0], d = v[1];
        s.call(u, d, c, f);
      }
    } catch (i) {
      b.e(i);
    } finally {
      b.f();
    }
  }, get: function(s) {
    var m = f.find(function(u) {
      return u[0] === s;
    });
    return m && m[1];
  }, has: function(s) {
    return !!x.get(s);
  }, keys: function() {
    return f.map(function(s) {
      return O(s, 1)[0];
    });
  }, values: function() {
    return f.map(function(s) {
      return O(s, 2)[1];
    });
  } }, g = (0, F.default)(x, x.entries());
  return A.default = g, A;
}
var kt, I = {};
function ml() {
  if (kt) return I;
  kt = 1, Object.defineProperty(I, "__esModule", { value: !0 }), I.default = void 0;
  var P, F = (P = gt()) && P.__esModule ? P : { default: P };
  function O(s, m) {
    return function(u) {
      if (Array.isArray(u)) return u;
    }(s) || function(u, b) {
      var v = u == null ? null : typeof Symbol < "u" && u[Symbol.iterator] || u["@@iterator"];
      if (v != null) {
        var c, d, i = [], C = !0, r = !1;
        try {
          for (v = v.call(u); !(C = (c = v.next()).done) && (i.push(c.value), !b || i.length !== b); C = !0) ;
        } catch (t) {
          r = !0, d = t;
        } finally {
          try {
            C || v.return == null || v.return();
          } finally {
            if (r) throw d;
          }
        }
        return i;
      }
    }(s, m) || R(s, m) || function() {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }();
  }
  function R(s, m) {
    if (s) {
      if (typeof s == "string") return y(s, m);
      var u = Object.prototype.toString.call(s).slice(8, -1);
      return u === "Object" && s.constructor && (u = s.constructor.name), u === "Map" || u === "Set" ? Array.from(s) : u === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u) ? y(s, m) : void 0;
    }
  }
  function y(s, m) {
    (m == null || m > s.length) && (m = s.length);
    for (var u = 0, b = new Array(m); u < m; u++) b[u] = s[u];
    return b;
  }
  var f = [["a", { reserved: !1 }], ["abbr", { reserved: !1 }], ["acronym", { reserved: !1 }], ["address", { reserved: !1 }], ["applet", { reserved: !1 }], ["area", { reserved: !1 }], ["article", { reserved: !1 }], ["aside", { reserved: !1 }], ["audio", { reserved: !1 }], ["b", { reserved: !1 }], ["base", { reserved: !0 }], ["bdi", { reserved: !1 }], ["bdo", { reserved: !1 }], ["big", { reserved: !1 }], ["blink", { reserved: !1 }], ["blockquote", { reserved: !1 }], ["body", { reserved: !1 }], ["br", { reserved: !1 }], ["button", { reserved: !1 }], ["canvas", { reserved: !1 }], ["caption", { reserved: !1 }], ["center", { reserved: !1 }], ["cite", { reserved: !1 }], ["code", { reserved: !1 }], ["col", { reserved: !0 }], ["colgroup", { reserved: !0 }], ["content", { reserved: !1 }], ["data", { reserved: !1 }], ["datalist", { reserved: !1 }], ["dd", { reserved: !1 }], ["del", { reserved: !1 }], ["details", { reserved: !1 }], ["dfn", { reserved: !1 }], ["dialog", { reserved: !1 }], ["dir", { reserved: !1 }], ["div", { reserved: !1 }], ["dl", { reserved: !1 }], ["dt", { reserved: !1 }], ["em", { reserved: !1 }], ["embed", { reserved: !1 }], ["fieldset", { reserved: !1 }], ["figcaption", { reserved: !1 }], ["figure", { reserved: !1 }], ["font", { reserved: !1 }], ["footer", { reserved: !1 }], ["form", { reserved: !1 }], ["frame", { reserved: !1 }], ["frameset", { reserved: !1 }], ["h1", { reserved: !1 }], ["h2", { reserved: !1 }], ["h3", { reserved: !1 }], ["h4", { reserved: !1 }], ["h5", { reserved: !1 }], ["h6", { reserved: !1 }], ["head", { reserved: !0 }], ["header", { reserved: !1 }], ["hgroup", { reserved: !1 }], ["hr", { reserved: !1 }], ["html", { reserved: !0 }], ["i", { reserved: !1 }], ["iframe", { reserved: !1 }], ["img", { reserved: !1 }], ["input", { reserved: !1 }], ["ins", { reserved: !1 }], ["kbd", { reserved: !1 }], ["keygen", { reserved: !1 }], ["label", { reserved: !1 }], ["legend", { reserved: !1 }], ["li", { reserved: !1 }], ["link", { reserved: !0 }], ["main", { reserved: !1 }], ["map", { reserved: !1 }], ["mark", { reserved: !1 }], ["marquee", { reserved: !1 }], ["menu", { reserved: !1 }], ["menuitem", { reserved: !1 }], ["meta", { reserved: !0 }], ["meter", { reserved: !1 }], ["nav", { reserved: !1 }], ["noembed", { reserved: !0 }], ["noscript", { reserved: !0 }], ["object", { reserved: !1 }], ["ol", { reserved: !1 }], ["optgroup", { reserved: !1 }], ["option", { reserved: !1 }], ["output", { reserved: !1 }], ["p", { reserved: !1 }], ["param", { reserved: !0 }], ["picture", { reserved: !0 }], ["pre", { reserved: !1 }], ["progress", { reserved: !1 }], ["q", { reserved: !1 }], ["rp", { reserved: !1 }], ["rt", { reserved: !1 }], ["rtc", { reserved: !1 }], ["ruby", { reserved: !1 }], ["s", { reserved: !1 }], ["samp", { reserved: !1 }], ["script", { reserved: !0 }], ["section", { reserved: !1 }], ["select", { reserved: !1 }], ["small", { reserved: !1 }], ["source", { reserved: !0 }], ["spacer", { reserved: !1 }], ["span", { reserved: !1 }], ["strike", { reserved: !1 }], ["strong", { reserved: !1 }], ["style", { reserved: !0 }], ["sub", { reserved: !1 }], ["summary", { reserved: !1 }], ["sup", { reserved: !1 }], ["table", { reserved: !1 }], ["tbody", { reserved: !1 }], ["td", { reserved: !1 }], ["textarea", { reserved: !1 }], ["tfoot", { reserved: !1 }], ["th", { reserved: !1 }], ["thead", { reserved: !1 }], ["time", { reserved: !1 }], ["title", { reserved: !0 }], ["tr", { reserved: !1 }], ["track", { reserved: !0 }], ["tt", { reserved: !1 }], ["u", { reserved: !1 }], ["ul", { reserved: !1 }], ["var", { reserved: !1 }], ["video", { reserved: !1 }], ["wbr", { reserved: !1 }], ["xmp", { reserved: !1 }]], x = { entries: function() {
    return f;
  }, forEach: function(s) {
    var m, u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, b = function(i, C) {
      var r = typeof Symbol < "u" && i[Symbol.iterator] || i["@@iterator"];
      if (!r) {
        if (Array.isArray(i) || (r = R(i)) || C) {
          r && (i = r);
          var t = 0, l = function() {
          };
          return { s: l, n: function() {
            return t >= i.length ? { done: !0 } : { done: !1, value: i[t++] };
          }, e: function(_) {
            throw _;
          }, f: l };
        }
        throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      var o, p = !0, q = !1;
      return { s: function() {
        r = r.call(i);
      }, n: function() {
        var _ = r.next();
        return p = _.done, _;
      }, e: function(_) {
        q = !0, o = _;
      }, f: function() {
        try {
          p || r.return == null || r.return();
        } finally {
          if (q) throw o;
        }
      } };
    }(f);
    try {
      for (b.s(); !(m = b.n()).done; ) {
        var v = O(m.value, 2), c = v[0], d = v[1];
        s.call(u, d, c, f);
      }
    } catch (i) {
      b.e(i);
    } finally {
      b.f();
    }
  }, get: function(s) {
    var m = f.find(function(u) {
      return u[0] === s;
    });
    return m && m[1];
  }, has: function(s) {
    return !!x.get(s);
  }, keys: function() {
    return f.map(function(s) {
      return O(s, 1)[0];
    });
  }, values: function() {
    return f.map(function(s) {
      return O(s, 2)[1];
    });
  } }, g = (0, F.default)(x, x.entries());
  return I.default = g, I;
}
var Ut, V = {}, z = {}, D = {}, At, X = {}, Bt, G = {}, It, $ = {}, Vt, J = {}, zt, Y = {}, Dt, K = {}, Xt, Q = {}, Gt, W = {}, $t, Z = {}, Jt, ee = {}, Yt, Kt, re = {};
function fl() {
  if (Kt) return z;
  Kt = 1, Object.defineProperty(z, "__esModule", { value: !0 }), z.default = void 0;
  var P = v(function() {
    if (Ut) return D;
    Ut = 1, Object.defineProperty(D, "__esModule", { value: !0 }), D.default = void 0;
    var d = { abstract: !0, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author"], prohibitedProps: [], props: {}, relatedConcepts: [], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "widget"]] };
    return D.default = d, D;
  }()), F = v(function() {
    if (At) return X;
    At = 1, Object.defineProperty(X, "__esModule", { value: !0 }), X.default = void 0;
    var d = { abstract: !0, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author"], prohibitedProps: [], props: { "aria-activedescendant": null, "aria-disabled": null }, relatedConcepts: [], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "widget"]] };
    return X.default = d, X;
  }()), O = v(function() {
    if (Bt) return G;
    Bt = 1, Object.defineProperty(G, "__esModule", { value: !0 }), G.default = void 0;
    var d = { abstract: !0, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author"], prohibitedProps: [], props: { "aria-disabled": null }, relatedConcepts: [{ concept: { name: "input" }, module: "XForms" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "widget"]] };
    return G.default = d, G;
  }()), R = v(function() {
    if (It) return $;
    It = 1, Object.defineProperty($, "__esModule", { value: !0 }), $.default = void 0;
    var d = { abstract: !0, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author"], prohibitedProps: [], props: {}, relatedConcepts: [], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure", "section"]] };
    return $.default = d, $;
  }()), y = v(function() {
    if (Vt) return J;
    Vt = 1, Object.defineProperty(J, "__esModule", { value: !0 }), J.default = void 0;
    var d = { abstract: !0, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author"], prohibitedProps: [], props: { "aria-valuemax": null, "aria-valuemin": null, "aria-valuenow": null }, relatedConcepts: [], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure"]] };
    return J.default = d, J;
  }()), f = v(function() {
    if (zt) return Y;
    zt = 1, Object.defineProperty(Y, "__esModule", { value: !0 }), Y.default = void 0;
    var d = { abstract: !0, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: [], prohibitedProps: [], props: { "aria-atomic": null, "aria-busy": null, "aria-controls": null, "aria-current": null, "aria-describedby": null, "aria-details": null, "aria-dropeffect": null, "aria-flowto": null, "aria-grabbed": null, "aria-hidden": null, "aria-keyshortcuts": null, "aria-label": null, "aria-labelledby": null, "aria-live": null, "aria-owns": null, "aria-relevant": null, "aria-roledescription": null }, relatedConcepts: [{ concept: { name: "role" }, module: "XHTML" }, { concept: { name: "type" }, module: "Dublin Core" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [] };
    return Y.default = d, Y;
  }()), x = v(function() {
    if (Dt) return K;
    Dt = 1, Object.defineProperty(K, "__esModule", { value: !0 }), K.default = void 0;
    var d = { abstract: !0, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: [], prohibitedProps: [], props: {}, relatedConcepts: [{ concept: { name: "frontmatter" }, module: "DTB" }, { concept: { name: "level" }, module: "DTB" }, { concept: { name: "level" }, module: "SMIL" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure"]] };
    return K.default = d, K;
  }()), g = v(function() {
    if (Xt) return Q;
    Xt = 1, Object.defineProperty(Q, "__esModule", { value: !0 }), Q.default = void 0;
    var d = { abstract: !0, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author", "contents"], prohibitedProps: [], props: {}, relatedConcepts: [], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure"]] };
    return Q.default = d, Q;
  }()), s = v(function() {
    if (Gt) return W;
    Gt = 1, Object.defineProperty(W, "__esModule", { value: !0 }), W.default = void 0;
    var d = { abstract: !0, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author"], prohibitedProps: [], props: { "aria-orientation": null }, relatedConcepts: [], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "widget", "composite"], ["roletype", "structure", "section", "group"]] };
    return W.default = d, W;
  }()), m = v(function() {
    if ($t) return Z;
    $t = 1, Object.defineProperty(Z, "__esModule", { value: !0 }), Z.default = void 0;
    var d = { abstract: !0, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: [], prohibitedProps: [], props: {}, relatedConcepts: [], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype"]] };
    return Z.default = d, Z;
  }()), u = v(function() {
    if (Jt) return ee;
    Jt = 1, Object.defineProperty(ee, "__esModule", { value: !0 }), ee.default = void 0;
    var d = { abstract: !0, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: [], prohibitedProps: [], props: {}, relatedConcepts: [], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype"]] };
    return ee.default = d, ee;
  }()), b = v(function() {
    if (Yt) return re;
    Yt = 1, Object.defineProperty(re, "__esModule", { value: !0 }), re.default = void 0;
    var d = { abstract: !0, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author"], prohibitedProps: [], props: { "aria-modal": null }, relatedConcepts: [], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype"]] };
    return re.default = d, re;
  }());
  function v(d) {
    return d && d.__esModule ? d : { default: d };
  }
  var c = [["command", P.default], ["composite", F.default], ["input", O.default], ["landmark", R.default], ["range", y.default], ["roletype", f.default], ["section", x.default], ["sectionhead", g.default], ["select", s.default], ["structure", m.default], ["widget", u.default], ["window", b.default]];
  return z.default = c, z;
}
var Qt, te = {}, ae = {}, Wt, ne = {}, Zt, oe = {}, ea, le = {}, ra, ie = {}, ta, ue = {}, aa, se = {}, na, de = {}, oa, ce = {}, la, pe = {}, ia, me = {}, ua, fe = {}, sa, be = {}, da, ve = {}, ca, qe = {}, pa, he = {}, ma, Ce = {}, fa, Pe = {}, ba, ye = {}, va, Re = {}, qa, xe = {}, ha, ge = {}, Ca, _e = {}, Pa, Oe = {}, ya, we = {}, Ra, Me = {}, xa, Ee = {}, ga, je = {}, _a, Fe = {}, Oa, Ne = {}, wa, Te = {}, Ma, Se = {}, Ea, He = {}, ja, Le = {}, Fa, ke = {}, Na, Ue = {}, Ta, Ae = {}, Sa, Be = {}, Ha, Ie = {}, La, Ve = {}, ka, ze = {}, Ua, De = {}, Aa, Xe = {}, Ba, Ge = {}, Ia, $e = {}, Va, Je = {}, za, Ye = {}, Da, Ke = {}, Xa, Qe = {}, Ga, We = {}, $a, Ze = {}, Ja, er = {}, Ya, rr = {}, Ka, tr = {}, Qa, ar = {}, Wa, nr = {}, Za, or = {}, en, lr = {}, rn, ir = {}, tn, ur = {}, an, sr = {}, nn, dr = {}, on, cr = {}, ln, pr = {}, un, mr = {}, sn, fr = {}, dn, br = {}, cn, vr = {}, pn, qr = {}, mn, hr = {}, fn, Cr = {}, bn, Pr = {}, vn, yr = {}, qn, Rr = {}, hn, xr = {}, Cn, gr = {}, Pn, _r = {}, yn, Or = {}, Rn, wr = {}, xn, Mr = {}, gn, Er = {}, _n, jr = {}, On, wn, Fr = {};
function bl() {
  if (wn) return te;
  wn = 1, Object.defineProperty(te, "__esModule", { value: !0 }), te.default = void 0;
  var P = n(function() {
    if (Qt) return ae;
    Qt = 1, Object.defineProperty(ae, "__esModule", { value: !0 }), ae.default = void 0;
    var e = { abstract: !1, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author"], prohibitedProps: [], props: { "aria-atomic": "true", "aria-live": "assertive" }, relatedConcepts: [{ concept: { name: "alert" }, module: "XForms" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure", "section"]] };
    return ae.default = e, ae;
  }()), F = n(function() {
    if (Wt) return ne;
    Wt = 1, Object.defineProperty(ne, "__esModule", { value: !0 }), ne.default = void 0;
    var e = { abstract: !1, accessibleNameRequired: !0, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author"], prohibitedProps: [], props: {}, relatedConcepts: [{ concept: { name: "alert" }, module: "XForms" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure", "section", "alert"], ["roletype", "window", "dialog"]] };
    return ne.default = e, ne;
  }()), O = n(function() {
    if (Zt) return oe;
    Zt = 1, Object.defineProperty(oe, "__esModule", { value: !0 }), oe.default = void 0;
    var e = { abstract: !1, accessibleNameRequired: !0, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author"], prohibitedProps: [], props: { "aria-activedescendant": null, "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null }, relatedConcepts: [{ concept: { name: "Device Independence Delivery Unit" } }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure"]] };
    return oe.default = e, oe;
  }()), R = n(function() {
    if (ea) return le;
    ea = 1, Object.defineProperty(le, "__esModule", { value: !0 }), le.default = void 0;
    var e = { abstract: !1, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author"], prohibitedProps: [], props: { "aria-posinset": null, "aria-setsize": null }, relatedConcepts: [{ concept: { name: "article" }, module: "HTML" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure", "document"]] };
    return le.default = e, le;
  }()), y = n(function() {
    if (ra) return ie;
    ra = 1, Object.defineProperty(ie, "__esModule", { value: !0 }), ie.default = void 0;
    var e = { abstract: !1, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author"], prohibitedProps: [], props: {}, relatedConcepts: [{ concept: { constraints: ["scoped to the body element"], name: "header" }, module: "HTML" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure", "section", "landmark"]] };
    return ie.default = e, ie;
  }()), f = n(function() {
    if (ta) return ue;
    ta = 1, Object.defineProperty(ue, "__esModule", { value: !0 }), ue.default = void 0;
    var e = { abstract: !1, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author"], prohibitedProps: [], props: {}, relatedConcepts: [{ concept: { name: "blockquote" }, module: "HTML" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure", "section"]] };
    return ue.default = e, ue;
  }()), x = n(function() {
    if (aa) return se;
    aa = 1, Object.defineProperty(se, "__esModule", { value: !0 }), se.default = void 0;
    var e = { abstract: !1, accessibleNameRequired: !0, baseConcepts: [], childrenPresentational: !0, nameFrom: ["author", "contents"], prohibitedProps: [], props: { "aria-disabled": null, "aria-expanded": null, "aria-haspopup": null, "aria-pressed": null }, relatedConcepts: [{ concept: { attributes: [{ name: "type", value: "button" }], name: "input" }, module: "HTML" }, { concept: { attributes: [{ name: "type", value: "image" }], name: "input" }, module: "HTML" }, { concept: { attributes: [{ name: "type", value: "reset" }], name: "input" }, module: "HTML" }, { concept: { attributes: [{ name: "type", value: "submit" }], name: "input" }, module: "HTML" }, { concept: { name: "button" }, module: "HTML" }, { concept: { name: "trigger" }, module: "XForms" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "widget", "command"]] };
    return se.default = e, se;
  }()), g = n(function() {
    if (na) return de;
    na = 1, Object.defineProperty(de, "__esModule", { value: !0 }), de.default = void 0;
    var e = { abstract: !1, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: ["prohibited"], prohibitedProps: ["aria-label", "aria-labelledby"], props: {}, relatedConcepts: [{ concept: { name: "caption" }, module: "HTML" }], requireContextRole: ["figure", "grid", "table"], requiredContextRole: ["figure", "grid", "table"], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure", "section"]] };
    return de.default = e, de;
  }()), s = n(function() {
    if (oa) return ce;
    oa = 1, Object.defineProperty(ce, "__esModule", { value: !0 }), ce.default = void 0;
    var e = { abstract: !1, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author", "contents"], prohibitedProps: [], props: { "aria-colindex": null, "aria-colspan": null, "aria-rowindex": null, "aria-rowspan": null }, relatedConcepts: [{ concept: { constraints: ["ancestor table element has table role"], name: "td" }, module: "HTML" }], requireContextRole: ["row"], requiredContextRole: ["row"], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure", "section"]] };
    return ce.default = e, ce;
  }()), m = n(function() {
    if (la) return pe;
    la = 1, Object.defineProperty(pe, "__esModule", { value: !0 }), pe.default = void 0;
    var e = { abstract: !1, accessibleNameRequired: !0, baseConcepts: [], childrenPresentational: !0, nameFrom: ["author", "contents"], prohibitedProps: [], props: { "aria-checked": null, "aria-errormessage": null, "aria-expanded": null, "aria-invalid": null, "aria-readonly": null, "aria-required": null }, relatedConcepts: [{ concept: { attributes: [{ name: "type", value: "checkbox" }], name: "input" }, module: "HTML" }, { concept: { name: "option" }, module: "ARIA" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: { "aria-checked": null }, superClass: [["roletype", "widget", "input"]] };
    return pe.default = e, pe;
  }()), u = n(function() {
    if (ia) return me;
    ia = 1, Object.defineProperty(me, "__esModule", { value: !0 }), me.default = void 0;
    var e = { abstract: !1, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: ["prohibited"], prohibitedProps: ["aria-label", "aria-labelledby"], props: {}, relatedConcepts: [{ concept: { name: "code" }, module: "HTML" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure", "section"]] };
    return me.default = e, me;
  }()), b = n(function() {
    if (ua) return fe;
    ua = 1, Object.defineProperty(fe, "__esModule", { value: !0 }), fe.default = void 0;
    var e = { abstract: !1, accessibleNameRequired: !0, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author", "contents"], prohibitedProps: [], props: { "aria-sort": null }, relatedConcepts: [{ concept: { name: "th" }, module: "HTML" }, { concept: { attributes: [{ name: "scope", value: "col" }], name: "th" }, module: "HTML" }, { concept: { attributes: [{ name: "scope", value: "colgroup" }], name: "th" }, module: "HTML" }], requireContextRole: ["row"], requiredContextRole: ["row"], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure", "section", "cell"], ["roletype", "structure", "section", "cell", "gridcell"], ["roletype", "widget", "gridcell"], ["roletype", "structure", "sectionhead"]] };
    return fe.default = e, fe;
  }()), v = n(function() {
    if (sa) return be;
    sa = 1, Object.defineProperty(be, "__esModule", { value: !0 }), be.default = void 0;
    var e = { abstract: !1, accessibleNameRequired: !0, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author"], prohibitedProps: [], props: { "aria-activedescendant": null, "aria-autocomplete": null, "aria-errormessage": null, "aria-invalid": null, "aria-readonly": null, "aria-required": null, "aria-expanded": "false", "aria-haspopup": "listbox" }, relatedConcepts: [{ concept: { attributes: [{ constraints: ["set"], name: "list" }, { name: "type", value: "email" }], name: "input" }, module: "HTML" }, { concept: { attributes: [{ constraints: ["set"], name: "list" }, { name: "type", value: "search" }], name: "input" }, module: "HTML" }, { concept: { attributes: [{ constraints: ["set"], name: "list" }, { name: "type", value: "tel" }], name: "input" }, module: "HTML" }, { concept: { attributes: [{ constraints: ["set"], name: "list" }, { name: "type", value: "text" }], name: "input" }, module: "HTML" }, { concept: { attributes: [{ constraints: ["set"], name: "list" }, { name: "type", value: "url" }], name: "input" }, module: "HTML" }, { concept: { attributes: [{ constraints: ["set"], name: "list" }, { name: "type", value: "url" }], name: "input" }, module: "HTML" }, { concept: { attributes: [{ constraints: ["undefined"], name: "multiple" }, { constraints: ["undefined"], name: "size" }], constraints: ["the multiple attribute is not set and the size attribute does not have a value greater than 1"], name: "select" }, module: "HTML" }, { concept: { name: "select" }, module: "XForms" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: { "aria-controls": null, "aria-expanded": "false" }, superClass: [["roletype", "widget", "input"]] };
    return be.default = e, be;
  }()), c = n(function() {
    if (da) return ve;
    da = 1, Object.defineProperty(ve, "__esModule", { value: !0 }), ve.default = void 0;
    var e = { abstract: !1, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author"], prohibitedProps: [], props: {}, relatedConcepts: [{ concept: { name: "aside" }, module: "HTML" }, { concept: { attributes: [{ constraints: ["set"], name: "aria-label" }], constraints: ["scoped to a sectioning content element", "scoped to a sectioning root element other than body"], name: "aside" }, module: "HTML" }, { concept: { attributes: [{ constraints: ["set"], name: "aria-labelledby" }], constraints: ["scoped to a sectioning content element", "scoped to a sectioning root element other than body"], name: "aside" }, module: "HTML" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure", "section", "landmark"]] };
    return ve.default = e, ve;
  }()), d = n(function() {
    if (ca) return qe;
    ca = 1, Object.defineProperty(qe, "__esModule", { value: !0 }), qe.default = void 0;
    var e = { abstract: !1, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author"], prohibitedProps: [], props: {}, relatedConcepts: [{ concept: { constraints: ["scoped to the body element"], name: "footer" }, module: "HTML" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure", "section", "landmark"]] };
    return qe.default = e, qe;
  }()), i = n(function() {
    if (pa) return he;
    pa = 1, Object.defineProperty(he, "__esModule", { value: !0 }), he.default = void 0;
    var e = { abstract: !1, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author"], prohibitedProps: [], props: {}, relatedConcepts: [{ concept: { name: "dd" }, module: "HTML" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure", "section"]] };
    return he.default = e, he;
  }()), C = n(function() {
    if (ma) return Ce;
    ma = 1, Object.defineProperty(Ce, "__esModule", { value: !0 }), Ce.default = void 0;
    var e = { abstract: !1, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: ["prohibited"], prohibitedProps: ["aria-label", "aria-labelledby"], props: {}, relatedConcepts: [{ concept: { name: "del" }, module: "HTML" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure", "section"]] };
    return Ce.default = e, Ce;
  }()), r = n(function() {
    if (fa) return Pe;
    fa = 1, Object.defineProperty(Pe, "__esModule", { value: !0 }), Pe.default = void 0;
    var e = { abstract: !1, accessibleNameRequired: !0, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author"], prohibitedProps: [], props: {}, relatedConcepts: [{ concept: { name: "dialog" }, module: "HTML" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "window"]] };
    return Pe.default = e, Pe;
  }()), t = n(function() {
    if (ba) return ye;
    ba = 1, Object.defineProperty(ye, "__esModule", { value: !0 }), ye.default = void 0;
    var e = { abstract: !1, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author"], prohibitedProps: [], props: {}, relatedConcepts: [{ module: "DAISY Guide" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure", "section", "list"]] };
    return ye.default = e, ye;
  }()), l = n(function() {
    if (va) return Re;
    va = 1, Object.defineProperty(Re, "__esModule", { value: !0 }), Re.default = void 0;
    var e = { abstract: !1, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author"], prohibitedProps: [], props: {}, relatedConcepts: [{ concept: { name: "Device Independence Delivery Unit" } }, { concept: { name: "html" }, module: "HTML" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure"]] };
    return Re.default = e, Re;
  }()), o = n(function() {
    if (qa) return xe;
    qa = 1, Object.defineProperty(xe, "__esModule", { value: !0 }), xe.default = void 0;
    var e = { abstract: !1, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: ["prohibited"], prohibitedProps: ["aria-label", "aria-labelledby"], props: {}, relatedConcepts: [{ concept: { name: "em" }, module: "HTML" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure", "section"]] };
    return xe.default = e, xe;
  }()), p = n(function() {
    if (ha) return ge;
    ha = 1, Object.defineProperty(ge, "__esModule", { value: !0 }), ge.default = void 0;
    var e = { abstract: !1, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author"], prohibitedProps: [], props: {}, relatedConcepts: [], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [["article"]], requiredProps: {}, superClass: [["roletype", "structure", "section", "list"]] };
    return ge.default = e, ge;
  }()), q = n(function() {
    if (Ca) return _e;
    Ca = 1, Object.defineProperty(_e, "__esModule", { value: !0 }), _e.default = void 0;
    var e = { abstract: !1, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author"], prohibitedProps: [], props: {}, relatedConcepts: [{ concept: { name: "figure" }, module: "HTML" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure", "section"]] };
    return _e.default = e, _e;
  }()), _ = n(function() {
    if (Pa) return Oe;
    Pa = 1, Object.defineProperty(Oe, "__esModule", { value: !0 }), Oe.default = void 0;
    var e = { abstract: !1, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author"], prohibitedProps: [], props: {}, relatedConcepts: [{ concept: { attributes: [{ constraints: ["set"], name: "aria-label" }], name: "form" }, module: "HTML" }, { concept: { attributes: [{ constraints: ["set"], name: "aria-labelledby" }], name: "form" }, module: "HTML" }, { concept: { attributes: [{ constraints: ["set"], name: "name" }], name: "form" }, module: "HTML" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure", "section", "landmark"]] };
    return Oe.default = e, Oe;
  }()), M = n(function() {
    if (ya) return we;
    ya = 1, Object.defineProperty(we, "__esModule", { value: !0 }), we.default = void 0;
    var e = { abstract: !1, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: ["prohibited"], prohibitedProps: ["aria-label", "aria-labelledby"], props: {}, relatedConcepts: [{ concept: { name: "a" }, module: "HTML" }, { concept: { name: "area" }, module: "HTML" }, { concept: { name: "aside" }, module: "HTML" }, { concept: { name: "b" }, module: "HTML" }, { concept: { name: "bdo" }, module: "HTML" }, { concept: { name: "body" }, module: "HTML" }, { concept: { name: "data" }, module: "HTML" }, { concept: { name: "div" }, module: "HTML" }, { concept: { constraints: ["scoped to the main element", "scoped to a sectioning content element", "scoped to a sectioning root element other than body"], name: "footer" }, module: "HTML" }, { concept: { constraints: ["scoped to the main element", "scoped to a sectioning content element", "scoped to a sectioning root element other than body"], name: "header" }, module: "HTML" }, { concept: { name: "hgroup" }, module: "HTML" }, { concept: { name: "i" }, module: "HTML" }, { concept: { name: "pre" }, module: "HTML" }, { concept: { name: "q" }, module: "HTML" }, { concept: { name: "samp" }, module: "HTML" }, { concept: { name: "section" }, module: "HTML" }, { concept: { name: "small" }, module: "HTML" }, { concept: { name: "span" }, module: "HTML" }, { concept: { name: "u" }, module: "HTML" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure"]] };
    return we.default = e, we;
  }()), w = n(function() {
    if (Ra) return Me;
    Ra = 1, Object.defineProperty(Me, "__esModule", { value: !0 }), Me.default = void 0;
    var e = { abstract: !1, accessibleNameRequired: !0, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author"], prohibitedProps: [], props: { "aria-multiselectable": null, "aria-readonly": null }, relatedConcepts: [], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [["row"], ["row", "rowgroup"]], requiredProps: {}, superClass: [["roletype", "widget", "composite"], ["roletype", "structure", "section", "table"]] };
    return Me.default = e, Me;
  }()), E = n(function() {
    if (xa) return Ee;
    xa = 1, Object.defineProperty(Ee, "__esModule", { value: !0 }), Ee.default = void 0;
    var e = { abstract: !1, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author", "contents"], prohibitedProps: [], props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null, "aria-readonly": null, "aria-required": null, "aria-selected": null }, relatedConcepts: [{ concept: { constraints: ["ancestor table element has grid role", "ancestor table element has treegrid role"], name: "td" }, module: "HTML" }], requireContextRole: ["row"], requiredContextRole: ["row"], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure", "section", "cell"], ["roletype", "widget"]] };
    return Ee.default = e, Ee;
  }()), j = n(function() {
    if (ga) return je;
    ga = 1, Object.defineProperty(je, "__esModule", { value: !0 }), je.default = void 0;
    var e = { abstract: !1, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author"], prohibitedProps: [], props: { "aria-activedescendant": null, "aria-disabled": null }, relatedConcepts: [{ concept: { name: "details" }, module: "HTML" }, { concept: { name: "fieldset" }, module: "HTML" }, { concept: { name: "optgroup" }, module: "HTML" }, { concept: { name: "address" }, module: "HTML" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure", "section"]] };
    return je.default = e, je;
  }()), N = n(function() {
    if (_a) return Fe;
    _a = 1, Object.defineProperty(Fe, "__esModule", { value: !0 }), Fe.default = void 0;
    var e = { abstract: !1, accessibleNameRequired: !0, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author", "contents"], prohibitedProps: [], props: { "aria-level": "2" }, relatedConcepts: [{ concept: { name: "h1" }, module: "HTML" }, { concept: { name: "h2" }, module: "HTML" }, { concept: { name: "h3" }, module: "HTML" }, { concept: { name: "h4" }, module: "HTML" }, { concept: { name: "h5" }, module: "HTML" }, { concept: { name: "h6" }, module: "HTML" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: { "aria-level": "2" }, superClass: [["roletype", "structure", "sectionhead"]] };
    return Fe.default = e, Fe;
  }()), H = n(function() {
    if (Oa) return Ne;
    Oa = 1, Object.defineProperty(Ne, "__esModule", { value: !0 }), Ne.default = void 0;
    var e = { abstract: !1, accessibleNameRequired: !0, baseConcepts: [], childrenPresentational: !0, nameFrom: ["author"], prohibitedProps: [], props: {}, relatedConcepts: [{ concept: { attributes: [{ constraints: ["set"], name: "alt" }], name: "img" }, module: "HTML" }, { concept: { attributes: [{ constraints: ["undefined"], name: "alt" }], name: "img" }, module: "HTML" }, { concept: { name: "imggroup" }, module: "DTB" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure", "section"]] };
    return Ne.default = e, Ne;
  }()), k = n(function() {
    if (wa) return Te;
    wa = 1, Object.defineProperty(Te, "__esModule", { value: !0 }), Te.default = void 0;
    var e = { abstract: !1, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: ["prohibited"], prohibitedProps: ["aria-label", "aria-labelledby"], props: {}, relatedConcepts: [{ concept: { name: "ins" }, module: "HTML" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure", "section"]] };
    return Te.default = e, Te;
  }()), U = n(function() {
    if (Ma) return Se;
    Ma = 1, Object.defineProperty(Se, "__esModule", { value: !0 }), Se.default = void 0;
    var e = { abstract: !1, accessibleNameRequired: !0, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author", "contents"], prohibitedProps: [], props: { "aria-disabled": null, "aria-expanded": null, "aria-haspopup": null }, relatedConcepts: [{ concept: { attributes: [{ constraints: ["set"], name: "href" }], name: "a" }, module: "HTML" }, { concept: { attributes: [{ constraints: ["set"], name: "href" }], name: "area" }, module: "HTML" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "widget", "command"]] };
    return Se.default = e, Se;
  }()), T = n(function() {
    if (Ea) return He;
    Ea = 1, Object.defineProperty(He, "__esModule", { value: !0 }), He.default = void 0;
    var e = { abstract: !1, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author"], prohibitedProps: [], props: {}, relatedConcepts: [{ concept: { name: "menu" }, module: "HTML" }, { concept: { name: "ol" }, module: "HTML" }, { concept: { name: "ul" }, module: "HTML" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [["listitem"]], requiredProps: {}, superClass: [["roletype", "structure", "section"]] };
    return He.default = e, He;
  }()), L = n(function() {
    if (ja) return Le;
    ja = 1, Object.defineProperty(Le, "__esModule", { value: !0 }), Le.default = void 0;
    var e = { abstract: !1, accessibleNameRequired: !0, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author"], prohibitedProps: [], props: { "aria-errormessage": null, "aria-expanded": null, "aria-invalid": null, "aria-multiselectable": null, "aria-readonly": null, "aria-required": null, "aria-orientation": "vertical" }, relatedConcepts: [{ concept: { attributes: [{ constraints: [">1"], name: "size" }], constraints: ["the size attribute value is greater than 1"], name: "select" }, module: "HTML" }, { concept: { attributes: [{ name: "multiple" }], name: "select" }, module: "HTML" }, { concept: { name: "datalist" }, module: "HTML" }, { concept: { name: "list" }, module: "ARIA" }, { concept: { name: "select" }, module: "XForms" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [["option", "group"], ["option"]], requiredProps: {}, superClass: [["roletype", "widget", "composite", "select"], ["roletype", "structure", "section", "group", "select"]] };
    return Le.default = e, Le;
  }()), Ot = n(function() {
    if (Fa) return ke;
    Fa = 1, Object.defineProperty(ke, "__esModule", { value: !0 }), ke.default = void 0;
    var e = { abstract: !1, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author"], prohibitedProps: [], props: { "aria-level": null, "aria-posinset": null, "aria-setsize": null }, relatedConcepts: [{ concept: { constraints: ["direct descendant of ol", "direct descendant of ul", "direct descendant of menu"], name: "li" }, module: "HTML" }, { concept: { name: "item" }, module: "XForms" }], requireContextRole: ["directory", "list"], requiredContextRole: ["directory", "list"], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure", "section"]] };
    return ke.default = e, ke;
  }()), wt = n(function() {
    if (Na) return Ue;
    Na = 1, Object.defineProperty(Ue, "__esModule", { value: !0 }), Ue.default = void 0;
    var e = { abstract: !1, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author"], prohibitedProps: [], props: { "aria-live": "polite" }, relatedConcepts: [], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure", "section"]] };
    return Ue.default = e, Ue;
  }()), Mt = n(function() {
    if (Ta) return Ae;
    Ta = 1, Object.defineProperty(Ae, "__esModule", { value: !0 }), Ae.default = void 0;
    var e = { abstract: !1, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author"], prohibitedProps: [], props: {}, relatedConcepts: [{ concept: { name: "main" }, module: "HTML" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure", "section", "landmark"]] };
    return Ae.default = e, Ae;
  }()), Et = n(function() {
    if (Sa) return Be;
    Sa = 1, Object.defineProperty(Be, "__esModule", { value: !0 }), Be.default = void 0;
    var e = { abstract: !1, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: ["prohibited"], prohibitedProps: [], props: { "aria-braillelabel": null, "aria-brailleroledescription": null, "aria-description": null }, relatedConcepts: [{ concept: { name: "mark" }, module: "HTML" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure", "section"]] };
    return Be.default = e, Be;
  }()), jt = n(function() {
    if (Ha) return Ie;
    Ha = 1, Object.defineProperty(Ie, "__esModule", { value: !0 }), Ie.default = void 0;
    var e = { abstract: !1, accessibleNameRequired: !0, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author"], prohibitedProps: [], props: {}, relatedConcepts: [], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure", "section"]] };
    return Ie.default = e, Ie;
  }()), h = n(function() {
    if (La) return Ve;
    La = 1, Object.defineProperty(Ve, "__esModule", { value: !0 }), Ve.default = void 0;
    var e = { abstract: !1, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author"], prohibitedProps: [], props: {}, relatedConcepts: [{ concept: { name: "math" }, module: "HTML" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure", "section"]] };
    return Ve.default = e, Ve;
  }()), Ft = n(function() {
    if (ka) return ze;
    ka = 1, Object.defineProperty(ze, "__esModule", { value: !0 }), ze.default = void 0;
    var e = { abstract: !1, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author"], prohibitedProps: [], props: { "aria-orientation": "vertical" }, relatedConcepts: [{ concept: { name: "MENU" }, module: "JAPI" }, { concept: { name: "list" }, module: "ARIA" }, { concept: { name: "select" }, module: "XForms" }, { concept: { name: "sidebar" }, module: "DTB" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [["menuitem", "group"], ["menuitemradio", "group"], ["menuitemcheckbox", "group"], ["menuitem"], ["menuitemcheckbox"], ["menuitemradio"]], requiredProps: {}, superClass: [["roletype", "widget", "composite", "select"], ["roletype", "structure", "section", "group", "select"]] };
    return ze.default = e, ze;
  }()), a = n(function() {
    if (Ua) return De;
    Ua = 1, Object.defineProperty(De, "__esModule", { value: !0 }), De.default = void 0;
    var e = { abstract: !1, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author"], prohibitedProps: [], props: { "aria-orientation": "horizontal" }, relatedConcepts: [{ concept: { name: "toolbar" }, module: "ARIA" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [["menuitem", "group"], ["menuitemradio", "group"], ["menuitemcheckbox", "group"], ["menuitem"], ["menuitemcheckbox"], ["menuitemradio"]], requiredProps: {}, superClass: [["roletype", "widget", "composite", "select", "menu"], ["roletype", "structure", "section", "group", "select", "menu"]] };
    return De.default = e, De;
  }()), go = n(function() {
    if (Aa) return Xe;
    Aa = 1, Object.defineProperty(Xe, "__esModule", { value: !0 }), Xe.default = void 0;
    var e = { abstract: !1, accessibleNameRequired: !0, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author", "contents"], prohibitedProps: [], props: { "aria-disabled": null, "aria-expanded": null, "aria-haspopup": null, "aria-posinset": null, "aria-setsize": null }, relatedConcepts: [{ concept: { name: "MENU_ITEM" }, module: "JAPI" }, { concept: { name: "listitem" }, module: "ARIA" }, { concept: { name: "option" }, module: "ARIA" }], requireContextRole: ["group", "menu", "menubar"], requiredContextRole: ["group", "menu", "menubar"], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "widget", "command"]] };
    return Xe.default = e, Xe;
  }()), _o = n(function() {
    if (Ba) return Ge;
    Ba = 1, Object.defineProperty(Ge, "__esModule", { value: !0 }), Ge.default = void 0;
    var e = { abstract: !1, accessibleNameRequired: !0, baseConcepts: [], childrenPresentational: !0, nameFrom: ["author", "contents"], prohibitedProps: [], props: {}, relatedConcepts: [{ concept: { name: "menuitem" }, module: "ARIA" }], requireContextRole: ["group", "menu", "menubar"], requiredContextRole: ["group", "menu", "menubar"], requiredOwnedElements: [], requiredProps: { "aria-checked": null }, superClass: [["roletype", "widget", "input", "checkbox"], ["roletype", "widget", "command", "menuitem"]] };
    return Ge.default = e, Ge;
  }()), Oo = n(function() {
    if (Ia) return $e;
    Ia = 1, Object.defineProperty($e, "__esModule", { value: !0 }), $e.default = void 0;
    var e = { abstract: !1, accessibleNameRequired: !0, baseConcepts: [], childrenPresentational: !0, nameFrom: ["author", "contents"], prohibitedProps: [], props: {}, relatedConcepts: [{ concept: { name: "menuitem" }, module: "ARIA" }], requireContextRole: ["group", "menu", "menubar"], requiredContextRole: ["group", "menu", "menubar"], requiredOwnedElements: [], requiredProps: { "aria-checked": null }, superClass: [["roletype", "widget", "input", "checkbox", "menuitemcheckbox"], ["roletype", "widget", "command", "menuitem", "menuitemcheckbox"], ["roletype", "widget", "input", "radio"]] };
    return $e.default = e, $e;
  }()), wo = n(function() {
    if (Va) return Je;
    Va = 1, Object.defineProperty(Je, "__esModule", { value: !0 }), Je.default = void 0;
    var e = { abstract: !1, accessibleNameRequired: !0, baseConcepts: [], childrenPresentational: !0, nameFrom: ["author"], prohibitedProps: [], props: { "aria-valuetext": null, "aria-valuemax": "100", "aria-valuemin": "0" }, relatedConcepts: [{ concept: { name: "meter" }, module: "HTML" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: { "aria-valuenow": null }, superClass: [["roletype", "structure", "range"]] };
    return Je.default = e, Je;
  }()), Mo = n(function() {
    if (za) return Ye;
    za = 1, Object.defineProperty(Ye, "__esModule", { value: !0 }), Ye.default = void 0;
    var e = { abstract: !1, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author"], prohibitedProps: [], props: {}, relatedConcepts: [{ concept: { name: "nav" }, module: "HTML" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure", "section", "landmark"]] };
    return Ye.default = e, Ye;
  }()), Eo = n(function() {
    if (Da) return Ke;
    Da = 1, Object.defineProperty(Ke, "__esModule", { value: !0 }), Ke.default = void 0;
    var e = { abstract: !1, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: [], prohibitedProps: [], props: {}, relatedConcepts: [], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [] };
    return Ke.default = e, Ke;
  }()), jo = n(function() {
    if (Xa) return Qe;
    Xa = 1, Object.defineProperty(Qe, "__esModule", { value: !0 }), Qe.default = void 0;
    var e = { abstract: !1, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author"], prohibitedProps: [], props: {}, relatedConcepts: [], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure", "section"]] };
    return Qe.default = e, Qe;
  }()), Fo = n(function() {
    if (Ga) return We;
    Ga = 1, Object.defineProperty(We, "__esModule", { value: !0 }), We.default = void 0;
    var e = { abstract: !1, accessibleNameRequired: !0, baseConcepts: [], childrenPresentational: !0, nameFrom: ["author", "contents"], prohibitedProps: [], props: { "aria-checked": null, "aria-posinset": null, "aria-setsize": null, "aria-selected": "false" }, relatedConcepts: [{ concept: { name: "item" }, module: "XForms" }, { concept: { name: "listitem" }, module: "ARIA" }, { concept: { name: "option" }, module: "HTML" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: { "aria-selected": "false" }, superClass: [["roletype", "widget", "input"]] };
    return We.default = e, We;
  }()), No = n(function() {
    if ($a) return Ze;
    $a = 1, Object.defineProperty(Ze, "__esModule", { value: !0 }), Ze.default = void 0;
    var e = { abstract: !1, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: ["prohibited"], prohibitedProps: ["aria-label", "aria-labelledby"], props: {}, relatedConcepts: [{ concept: { name: "p" }, module: "HTML" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure", "section"]] };
    return Ze.default = e, Ze;
  }()), To = n(function() {
    if (Ja) return er;
    Ja = 1, Object.defineProperty(er, "__esModule", { value: !0 }), er.default = void 0;
    var e = { abstract: !1, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: ["prohibited"], prohibitedProps: ["aria-label", "aria-labelledby"], props: {}, relatedConcepts: [{ concept: { attributes: [{ name: "alt", value: "" }], name: "img" }, module: "HTML" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure"]] };
    return er.default = e, er;
  }()), So = n(function() {
    if (Ya) return rr;
    Ya = 1, Object.defineProperty(rr, "__esModule", { value: !0 }), rr.default = void 0;
    var e = { abstract: !1, accessibleNameRequired: !0, baseConcepts: [], childrenPresentational: !0, nameFrom: ["author"], prohibitedProps: [], props: { "aria-valuetext": null }, relatedConcepts: [{ concept: { name: "progress" }, module: "HTML" }, { concept: { name: "status" }, module: "ARIA" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure", "range"], ["roletype", "widget"]] };
    return rr.default = e, rr;
  }()), Ho = n(function() {
    if (Ka) return tr;
    Ka = 1, Object.defineProperty(tr, "__esModule", { value: !0 }), tr.default = void 0;
    var e = { abstract: !1, accessibleNameRequired: !0, baseConcepts: [], childrenPresentational: !0, nameFrom: ["author", "contents"], prohibitedProps: [], props: { "aria-checked": null, "aria-posinset": null, "aria-setsize": null }, relatedConcepts: [{ concept: { attributes: [{ name: "type", value: "radio" }], name: "input" }, module: "HTML" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: { "aria-checked": null }, superClass: [["roletype", "widget", "input"]] };
    return tr.default = e, tr;
  }()), Lo = n(function() {
    if (Qa) return ar;
    Qa = 1, Object.defineProperty(ar, "__esModule", { value: !0 }), ar.default = void 0;
    var e = { abstract: !1, accessibleNameRequired: !0, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author"], prohibitedProps: [], props: { "aria-errormessage": null, "aria-invalid": null, "aria-readonly": null, "aria-required": null }, relatedConcepts: [{ concept: { name: "list" }, module: "ARIA" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [["radio"]], requiredProps: {}, superClass: [["roletype", "widget", "composite", "select"], ["roletype", "structure", "section", "group", "select"]] };
    return ar.default = e, ar;
  }()), ko = n(function() {
    if (Wa) return nr;
    Wa = 1, Object.defineProperty(nr, "__esModule", { value: !0 }), nr.default = void 0;
    var e = { abstract: !1, accessibleNameRequired: !0, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author"], prohibitedProps: [], props: {}, relatedConcepts: [{ concept: { attributes: [{ constraints: ["set"], name: "aria-label" }], name: "section" }, module: "HTML" }, { concept: { attributes: [{ constraints: ["set"], name: "aria-labelledby" }], name: "section" }, module: "HTML" }, { concept: { name: "Device Independence Glossart perceivable unit" } }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure", "section", "landmark"]] };
    return nr.default = e, nr;
  }()), Uo = n(function() {
    if (Za) return or;
    Za = 1, Object.defineProperty(or, "__esModule", { value: !0 }), or.default = void 0;
    var e = { abstract: !1, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author", "contents"], prohibitedProps: [], props: { "aria-colindex": null, "aria-expanded": null, "aria-level": null, "aria-posinset": null, "aria-rowindex": null, "aria-selected": null, "aria-setsize": null }, relatedConcepts: [{ concept: { name: "tr" }, module: "HTML" }], requireContextRole: ["grid", "rowgroup", "table", "treegrid"], requiredContextRole: ["grid", "rowgroup", "table", "treegrid"], requiredOwnedElements: [["cell"], ["columnheader"], ["gridcell"], ["rowheader"]], requiredProps: {}, superClass: [["roletype", "structure", "section", "group"], ["roletype", "widget"]] };
    return or.default = e, or;
  }()), Ao = n(function() {
    if (en) return lr;
    en = 1, Object.defineProperty(lr, "__esModule", { value: !0 }), lr.default = void 0;
    var e = { abstract: !1, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author", "contents"], prohibitedProps: [], props: {}, relatedConcepts: [{ concept: { name: "tbody" }, module: "HTML" }, { concept: { name: "tfoot" }, module: "HTML" }, { concept: { name: "thead" }, module: "HTML" }], requireContextRole: ["grid", "table", "treegrid"], requiredContextRole: ["grid", "table", "treegrid"], requiredOwnedElements: [["row"]], requiredProps: {}, superClass: [["roletype", "structure"]] };
    return lr.default = e, lr;
  }()), Bo = n(function() {
    if (rn) return ir;
    rn = 1, Object.defineProperty(ir, "__esModule", { value: !0 }), ir.default = void 0;
    var e = { abstract: !1, accessibleNameRequired: !0, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author", "contents"], prohibitedProps: [], props: { "aria-sort": null }, relatedConcepts: [{ concept: { attributes: [{ name: "scope", value: "row" }], name: "th" }, module: "HTML" }, { concept: { attributes: [{ name: "scope", value: "rowgroup" }], name: "th" }, module: "HTML" }], requireContextRole: ["row", "rowgroup"], requiredContextRole: ["row", "rowgroup"], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure", "section", "cell"], ["roletype", "structure", "section", "cell", "gridcell"], ["roletype", "widget", "gridcell"], ["roletype", "structure", "sectionhead"]] };
    return ir.default = e, ir;
  }()), Io = n(function() {
    if (tn) return ur;
    tn = 1, Object.defineProperty(ur, "__esModule", { value: !0 }), ur.default = void 0;
    var e = { abstract: !1, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !0, nameFrom: ["author"], prohibitedProps: [], props: { "aria-disabled": null, "aria-valuetext": null, "aria-orientation": "vertical", "aria-valuemax": "100", "aria-valuemin": "0" }, relatedConcepts: [], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: { "aria-controls": null, "aria-valuenow": null }, superClass: [["roletype", "structure", "range"], ["roletype", "widget"]] };
    return ur.default = e, ur;
  }()), Vo = n(function() {
    if (an) return sr;
    an = 1, Object.defineProperty(sr, "__esModule", { value: !0 }), sr.default = void 0;
    var e = { abstract: !1, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author"], prohibitedProps: [], props: {}, relatedConcepts: [], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure", "section", "landmark"]] };
    return sr.default = e, sr;
  }()), zo = n(function() {
    if (nn) return dr;
    nn = 1, Object.defineProperty(dr, "__esModule", { value: !0 }), dr.default = void 0;
    var e = { abstract: !1, accessibleNameRequired: !0, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author"], prohibitedProps: [], props: {}, relatedConcepts: [{ concept: { attributes: [{ constraints: ["undefined"], name: "list" }, { name: "type", value: "search" }], constraints: ["the list attribute is not set"], name: "input" }, module: "HTML" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "widget", "input", "textbox"]] };
    return dr.default = e, dr;
  }()), Do = n(function() {
    if (on) return cr;
    on = 1, Object.defineProperty(cr, "__esModule", { value: !0 }), cr.default = void 0;
    var e = { abstract: !1, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !0, nameFrom: ["author"], prohibitedProps: [], props: { "aria-disabled": null, "aria-orientation": "horizontal", "aria-valuemax": "100", "aria-valuemin": "0", "aria-valuenow": null, "aria-valuetext": null }, relatedConcepts: [{ concept: { name: "hr" }, module: "HTML" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure"]] };
    return cr.default = e, cr;
  }()), Xo = n(function() {
    if (ln) return pr;
    ln = 1, Object.defineProperty(pr, "__esModule", { value: !0 }), pr.default = void 0;
    var e = { abstract: !1, accessibleNameRequired: !0, baseConcepts: [], childrenPresentational: !0, nameFrom: ["author"], prohibitedProps: [], props: { "aria-errormessage": null, "aria-haspopup": null, "aria-invalid": null, "aria-readonly": null, "aria-valuetext": null, "aria-orientation": "horizontal", "aria-valuemax": "100", "aria-valuemin": "0" }, relatedConcepts: [{ concept: { attributes: [{ name: "type", value: "range" }], name: "input" }, module: "HTML" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: { "aria-valuenow": null }, superClass: [["roletype", "widget", "input"], ["roletype", "structure", "range"]] };
    return pr.default = e, pr;
  }()), Go = n(function() {
    if (un) return mr;
    un = 1, Object.defineProperty(mr, "__esModule", { value: !0 }), mr.default = void 0;
    var e = { abstract: !1, accessibleNameRequired: !0, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author"], prohibitedProps: [], props: { "aria-errormessage": null, "aria-invalid": null, "aria-readonly": null, "aria-required": null, "aria-valuetext": null, "aria-valuenow": "0" }, relatedConcepts: [{ concept: { attributes: [{ name: "type", value: "number" }], name: "input" }, module: "HTML" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "widget", "composite"], ["roletype", "widget", "input"], ["roletype", "structure", "range"]] };
    return mr.default = e, mr;
  }()), $o = n(function() {
    if (sn) return fr;
    sn = 1, Object.defineProperty(fr, "__esModule", { value: !0 }), fr.default = void 0;
    var e = { abstract: !1, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author"], prohibitedProps: [], props: { "aria-atomic": "true", "aria-live": "polite" }, relatedConcepts: [{ concept: { name: "output" }, module: "HTML" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure", "section"]] };
    return fr.default = e, fr;
  }()), Jo = n(function() {
    if (dn) return br;
    dn = 1, Object.defineProperty(br, "__esModule", { value: !0 }), br.default = void 0;
    var e = { abstract: !1, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: ["prohibited"], prohibitedProps: ["aria-label", "aria-labelledby"], props: {}, relatedConcepts: [{ concept: { name: "strong" }, module: "HTML" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure", "section"]] };
    return br.default = e, br;
  }()), Yo = n(function() {
    if (cn) return vr;
    cn = 1, Object.defineProperty(vr, "__esModule", { value: !0 }), vr.default = void 0;
    var e = { abstract: !1, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: ["prohibited"], prohibitedProps: ["aria-label", "aria-labelledby"], props: {}, relatedConcepts: [{ concept: { name: "sub" }, module: "HTML" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure", "section"]] };
    return vr.default = e, vr;
  }()), Ko = n(function() {
    if (pn) return qr;
    pn = 1, Object.defineProperty(qr, "__esModule", { value: !0 }), qr.default = void 0;
    var e = { abstract: !1, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: ["prohibited"], prohibitedProps: ["aria-label", "aria-labelledby"], props: {}, relatedConcepts: [{ concept: { name: "sup" }, module: "HTML" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure", "section"]] };
    return qr.default = e, qr;
  }()), Qo = n(function() {
    if (mn) return hr;
    mn = 1, Object.defineProperty(hr, "__esModule", { value: !0 }), hr.default = void 0;
    var e = { abstract: !1, accessibleNameRequired: !0, baseConcepts: [], childrenPresentational: !0, nameFrom: ["author", "contents"], prohibitedProps: [], props: {}, relatedConcepts: [{ concept: { name: "button" }, module: "ARIA" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: { "aria-checked": null }, superClass: [["roletype", "widget", "input", "checkbox"]] };
    return hr.default = e, hr;
  }()), Wo = n(function() {
    if (fn) return Cr;
    fn = 1, Object.defineProperty(Cr, "__esModule", { value: !0 }), Cr.default = void 0;
    var e = { abstract: !1, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !0, nameFrom: ["author", "contents"], prohibitedProps: [], props: { "aria-disabled": null, "aria-expanded": null, "aria-haspopup": null, "aria-posinset": null, "aria-setsize": null, "aria-selected": "false" }, relatedConcepts: [], requireContextRole: ["tablist"], requiredContextRole: ["tablist"], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure", "sectionhead"], ["roletype", "widget"]] };
    return Cr.default = e, Cr;
  }()), Zo = n(function() {
    if (bn) return Pr;
    bn = 1, Object.defineProperty(Pr, "__esModule", { value: !0 }), Pr.default = void 0;
    var e = { abstract: !1, accessibleNameRequired: !0, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author"], prohibitedProps: [], props: { "aria-colcount": null, "aria-rowcount": null }, relatedConcepts: [{ concept: { name: "table" }, module: "HTML" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [["row"], ["row", "rowgroup"]], requiredProps: {}, superClass: [["roletype", "structure", "section"]] };
    return Pr.default = e, Pr;
  }()), el = n(function() {
    if (vn) return yr;
    vn = 1, Object.defineProperty(yr, "__esModule", { value: !0 }), yr.default = void 0;
    var e = { abstract: !1, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author"], prohibitedProps: [], props: { "aria-level": null, "aria-multiselectable": null, "aria-orientation": "horizontal" }, relatedConcepts: [{ module: "DAISY", concept: { name: "guide" } }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [["tab"]], requiredProps: {}, superClass: [["roletype", "widget", "composite"]] };
    return yr.default = e, yr;
  }()), rl = n(function() {
    if (qn) return Rr;
    qn = 1, Object.defineProperty(Rr, "__esModule", { value: !0 }), Rr.default = void 0;
    var e = { abstract: !1, accessibleNameRequired: !0, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author"], prohibitedProps: [], props: {}, relatedConcepts: [], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure", "section"]] };
    return Rr.default = e, Rr;
  }()), tl = n(function() {
    if (hn) return xr;
    hn = 1, Object.defineProperty(xr, "__esModule", { value: !0 }), xr.default = void 0;
    var e = { abstract: !1, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author"], prohibitedProps: [], props: {}, relatedConcepts: [{ concept: { name: "dfn" }, module: "HTML" }, { concept: { name: "dt" }, module: "HTML" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure", "section"]] };
    return xr.default = e, xr;
  }()), al = n(function() {
    if (Cn) return gr;
    Cn = 1, Object.defineProperty(gr, "__esModule", { value: !0 }), gr.default = void 0;
    var e = { abstract: !1, accessibleNameRequired: !0, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author"], prohibitedProps: [], props: { "aria-activedescendant": null, "aria-autocomplete": null, "aria-errormessage": null, "aria-haspopup": null, "aria-invalid": null, "aria-multiline": null, "aria-placeholder": null, "aria-readonly": null, "aria-required": null }, relatedConcepts: [{ concept: { attributes: [{ constraints: ["undefined"], name: "type" }, { constraints: ["undefined"], name: "list" }], constraints: ["the list attribute is not set"], name: "input" }, module: "HTML" }, { concept: { attributes: [{ constraints: ["undefined"], name: "list" }, { name: "type", value: "email" }], constraints: ["the list attribute is not set"], name: "input" }, module: "HTML" }, { concept: { attributes: [{ constraints: ["undefined"], name: "list" }, { name: "type", value: "tel" }], constraints: ["the list attribute is not set"], name: "input" }, module: "HTML" }, { concept: { attributes: [{ constraints: ["undefined"], name: "list" }, { name: "type", value: "text" }], constraints: ["the list attribute is not set"], name: "input" }, module: "HTML" }, { concept: { attributes: [{ constraints: ["undefined"], name: "list" }, { name: "type", value: "url" }], constraints: ["the list attribute is not set"], name: "input" }, module: "HTML" }, { concept: { name: "input" }, module: "XForms" }, { concept: { name: "textarea" }, module: "HTML" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "widget", "input"]] };
    return gr.default = e, gr;
  }()), nl = n(function() {
    if (Pn) return _r;
    Pn = 1, Object.defineProperty(_r, "__esModule", { value: !0 }), _r.default = void 0;
    var e = { abstract: !1, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author"], prohibitedProps: [], props: {}, relatedConcepts: [{ concept: { name: "time" }, module: "HTML" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure", "section"]] };
    return _r.default = e, _r;
  }()), ol = n(function() {
    if (yn) return Or;
    yn = 1, Object.defineProperty(Or, "__esModule", { value: !0 }), Or.default = void 0;
    var e = { abstract: !1, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author"], prohibitedProps: [], props: {}, relatedConcepts: [], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure", "section", "status"]] };
    return Or.default = e, Or;
  }()), ll = n(function() {
    if (Rn) return wr;
    Rn = 1, Object.defineProperty(wr, "__esModule", { value: !0 }), wr.default = void 0;
    var e = { abstract: !1, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author"], prohibitedProps: [], props: { "aria-orientation": "horizontal" }, relatedConcepts: [{ concept: { name: "menubar" }, module: "ARIA" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure", "section", "group"]] };
    return wr.default = e, wr;
  }()), il = n(function() {
    if (xn) return Mr;
    xn = 1, Object.defineProperty(Mr, "__esModule", { value: !0 }), Mr.default = void 0;
    var e = { abstract: !1, accessibleNameRequired: !0, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author", "contents"], prohibitedProps: [], props: {}, relatedConcepts: [], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure", "section"]] };
    return Mr.default = e, Mr;
  }()), ul = n(function() {
    if (gn) return Er;
    gn = 1, Object.defineProperty(Er, "__esModule", { value: !0 }), Er.default = void 0;
    var e = { abstract: !1, accessibleNameRequired: !0, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author"], prohibitedProps: [], props: { "aria-errormessage": null, "aria-invalid": null, "aria-multiselectable": null, "aria-required": null, "aria-orientation": "vertical" }, relatedConcepts: [], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [["treeitem", "group"], ["treeitem"]], requiredProps: {}, superClass: [["roletype", "widget", "composite", "select"], ["roletype", "structure", "section", "group", "select"]] };
    return Er.default = e, Er;
  }()), sl = n(function() {
    if (_n) return jr;
    _n = 1, Object.defineProperty(jr, "__esModule", { value: !0 }), jr.default = void 0;
    var e = { abstract: !1, accessibleNameRequired: !0, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author"], prohibitedProps: [], props: {}, relatedConcepts: [], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [["row"], ["row", "rowgroup"]], requiredProps: {}, superClass: [["roletype", "widget", "composite", "grid"], ["roletype", "structure", "section", "table", "grid"], ["roletype", "widget", "composite", "select", "tree"], ["roletype", "structure", "section", "group", "select", "tree"]] };
    return jr.default = e, jr;
  }()), dl = n(function() {
    if (On) return Fr;
    On = 1, Object.defineProperty(Fr, "__esModule", { value: !0 }), Fr.default = void 0;
    var e = { abstract: !1, accessibleNameRequired: !0, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author", "contents"], prohibitedProps: [], props: { "aria-expanded": null, "aria-haspopup": null }, relatedConcepts: [], requireContextRole: ["group", "tree"], requiredContextRole: ["group", "tree"], requiredOwnedElements: [], requiredProps: { "aria-selected": null }, superClass: [["roletype", "structure", "section", "listitem"], ["roletype", "widget", "input", "option"]] };
    return Fr.default = e, Fr;
  }());
  function n(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var cl = [["alert", P.default], ["alertdialog", F.default], ["application", O.default], ["article", R.default], ["banner", y.default], ["blockquote", f.default], ["button", x.default], ["caption", g.default], ["cell", s.default], ["checkbox", m.default], ["code", u.default], ["columnheader", b.default], ["combobox", v.default], ["complementary", c.default], ["contentinfo", d.default], ["definition", i.default], ["deletion", C.default], ["dialog", r.default], ["directory", t.default], ["document", l.default], ["emphasis", o.default], ["feed", p.default], ["figure", q.default], ["form", _.default], ["generic", M.default], ["grid", w.default], ["gridcell", E.default], ["group", j.default], ["heading", N.default], ["img", H.default], ["insertion", k.default], ["link", U.default], ["list", T.default], ["listbox", L.default], ["listitem", Ot.default], ["log", wt.default], ["main", Mt.default], ["mark", Et.default], ["marquee", jt.default], ["math", h.default], ["menu", Ft.default], ["menubar", a.default], ["menuitem", go.default], ["menuitemcheckbox", _o.default], ["menuitemradio", Oo.default], ["meter", wo.default], ["navigation", Mo.default], ["none", Eo.default], ["note", jo.default], ["option", Fo.default], ["paragraph", No.default], ["presentation", To.default], ["progressbar", So.default], ["radio", Ho.default], ["radiogroup", Lo.default], ["region", ko.default], ["row", Uo.default], ["rowgroup", Ao.default], ["rowheader", Bo.default], ["scrollbar", Io.default], ["search", Vo.default], ["searchbox", zo.default], ["separator", Do.default], ["slider", Xo.default], ["spinbutton", Go.default], ["status", $o.default], ["strong", Jo.default], ["subscript", Yo.default], ["superscript", Ko.default], ["switch", Qo.default], ["tab", Wo.default], ["table", Zo.default], ["tablist", el.default], ["tabpanel", rl.default], ["term", tl.default], ["textbox", al.default], ["time", nl.default], ["timer", ol.default], ["toolbar", ll.default], ["tooltip", il.default], ["tree", ul.default], ["treegrid", sl.default], ["treeitem", dl.default]];
  return te.default = cl, te;
}
var Mn, Nr = {}, Tr = {}, En, Sr = {}, jn, Hr = {}, Fn, Lr = {}, Nn, kr = {}, Tn, Ur = {}, Sn, Ar = {}, Hn, Br = {}, Ln, Ir = {}, kn, Vr = {}, Un, zr = {}, An, Dr = {}, Bn, Xr = {}, In, Gr = {}, Vn, $r = {}, zn, Jr = {}, Dn, Yr = {}, Xn, Kr = {}, Gn, Qr = {}, $n, Wr = {}, Jn, Zr = {}, Yn, et = {}, Kn, rt = {}, Qn, tt = {}, Wn, at = {}, Zn, nt = {}, eo, ot = {}, ro, lt = {}, to, it = {}, ao, ut = {}, no, st = {}, oo, dt = {}, lo, ct = {}, io, pt = {}, uo, mt = {}, so, ft = {}, co, bt = {}, po, vt = {}, mo, fo, qt = {};
function vl() {
  if (fo) return Nr;
  fo = 1, Object.defineProperty(Nr, "__esModule", { value: !0 }), Nr.default = void 0;
  var P = h(function() {
    if (Mn) return Tr;
    Mn = 1, Object.defineProperty(Tr, "__esModule", { value: !0 }), Tr.default = void 0;
    var a = { abstract: !1, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author"], prohibitedProps: [], props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null }, relatedConcepts: [{ concept: { name: "abstract [EPUB-SSV]" }, module: "EPUB" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure", "section"]] };
    return Tr.default = a, Tr;
  }()), F = h(function() {
    if (En) return Sr;
    En = 1, Object.defineProperty(Sr, "__esModule", { value: !0 }), Sr.default = void 0;
    var a = { abstract: !1, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author"], prohibitedProps: [], props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null }, relatedConcepts: [{ concept: { name: "acknowledgments [EPUB-SSV]" }, module: "EPUB" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure", "section", "landmark"]] };
    return Sr.default = a, Sr;
  }()), O = h(function() {
    if (jn) return Hr;
    jn = 1, Object.defineProperty(Hr, "__esModule", { value: !0 }), Hr.default = void 0;
    var a = { abstract: !1, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author"], prohibitedProps: [], props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null }, relatedConcepts: [{ concept: { name: "afterword [EPUB-SSV]" }, module: "EPUB" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure", "section", "landmark"]] };
    return Hr.default = a, Hr;
  }()), R = h(function() {
    if (Fn) return Lr;
    Fn = 1, Object.defineProperty(Lr, "__esModule", { value: !0 }), Lr.default = void 0;
    var a = { abstract: !1, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author"], prohibitedProps: [], props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null }, relatedConcepts: [{ concept: { name: "appendix [EPUB-SSV]" }, module: "EPUB" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure", "section", "landmark"]] };
    return Lr.default = a, Lr;
  }()), y = h(function() {
    if (Nn) return kr;
    Nn = 1, Object.defineProperty(kr, "__esModule", { value: !0 }), kr.default = void 0;
    var a = { abstract: !1, accessibleNameRequired: !0, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author", "contents"], prohibitedProps: [], props: { "aria-errormessage": null, "aria-invalid": null }, relatedConcepts: [{ concept: { name: "referrer [EPUB-SSV]" }, module: "EPUB" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "widget", "command", "link"]] };
    return kr.default = a, kr;
  }()), f = h(function() {
    if (Tn) return Ur;
    Tn = 1, Object.defineProperty(Ur, "__esModule", { value: !0 }), Ur.default = void 0;
    var a = { abstract: !1, accessibleNameRequired: !0, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author"], prohibitedProps: [], props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null }, relatedConcepts: [{ concept: { name: "EPUB biblioentry [EPUB-SSV]" }, module: "EPUB" }], requireContextRole: ["doc-bibliography"], requiredContextRole: ["doc-bibliography"], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure", "section", "listitem"]] };
    return Ur.default = a, Ur;
  }()), x = h(function() {
    if (Sn) return Ar;
    Sn = 1, Object.defineProperty(Ar, "__esModule", { value: !0 }), Ar.default = void 0;
    var a = { abstract: !1, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author"], prohibitedProps: [], props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null }, relatedConcepts: [{ concept: { name: "bibliography [EPUB-SSV]" }, module: "EPUB" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [["doc-biblioentry"]], requiredProps: {}, superClass: [["roletype", "structure", "section", "landmark"]] };
    return Ar.default = a, Ar;
  }()), g = h(function() {
    if (Hn) return Br;
    Hn = 1, Object.defineProperty(Br, "__esModule", { value: !0 }), Br.default = void 0;
    var a = { abstract: !1, accessibleNameRequired: !0, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author", "contents"], prohibitedProps: [], props: { "aria-errormessage": null, "aria-invalid": null }, relatedConcepts: [{ concept: { name: "biblioref [EPUB-SSV]" }, module: "EPUB" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "widget", "command", "link"]] };
    return Br.default = a, Br;
  }()), s = h(function() {
    if (Ln) return Ir;
    Ln = 1, Object.defineProperty(Ir, "__esModule", { value: !0 }), Ir.default = void 0;
    var a = { abstract: !1, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author"], prohibitedProps: [], props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null }, relatedConcepts: [{ concept: { name: "chapter [EPUB-SSV]" }, module: "EPUB" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure", "section", "landmark"]] };
    return Ir.default = a, Ir;
  }()), m = h(function() {
    if (kn) return Vr;
    kn = 1, Object.defineProperty(Vr, "__esModule", { value: !0 }), Vr.default = void 0;
    var a = { abstract: !1, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author"], prohibitedProps: [], props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null }, relatedConcepts: [{ concept: { name: "colophon [EPUB-SSV]" }, module: "EPUB" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure", "section"]] };
    return Vr.default = a, Vr;
  }()), u = h(function() {
    if (Un) return zr;
    Un = 1, Object.defineProperty(zr, "__esModule", { value: !0 }), zr.default = void 0;
    var a = { abstract: !1, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author"], prohibitedProps: [], props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null }, relatedConcepts: [{ concept: { name: "conclusion [EPUB-SSV]" }, module: "EPUB" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure", "section", "landmark"]] };
    return zr.default = a, zr;
  }()), b = h(function() {
    if (An) return Dr;
    An = 1, Object.defineProperty(Dr, "__esModule", { value: !0 }), Dr.default = void 0;
    var a = { abstract: !1, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author"], prohibitedProps: [], props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null }, relatedConcepts: [{ concept: { name: "cover [EPUB-SSV]" }, module: "EPUB" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure", "section", "img"]] };
    return Dr.default = a, Dr;
  }()), v = h(function() {
    if (Bn) return Xr;
    Bn = 1, Object.defineProperty(Xr, "__esModule", { value: !0 }), Xr.default = void 0;
    var a = { abstract: !1, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author"], prohibitedProps: [], props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null }, relatedConcepts: [{ concept: { name: "credit [EPUB-SSV]" }, module: "EPUB" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure", "section"]] };
    return Xr.default = a, Xr;
  }()), c = h(function() {
    if (In) return Gr;
    In = 1, Object.defineProperty(Gr, "__esModule", { value: !0 }), Gr.default = void 0;
    var a = { abstract: !1, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author"], prohibitedProps: [], props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null }, relatedConcepts: [{ concept: { name: "credits [EPUB-SSV]" }, module: "EPUB" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure", "section", "landmark"]] };
    return Gr.default = a, Gr;
  }()), d = h(function() {
    if (Vn) return $r;
    Vn = 1, Object.defineProperty($r, "__esModule", { value: !0 }), $r.default = void 0;
    var a = { abstract: !1, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author"], prohibitedProps: [], props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null }, relatedConcepts: [{ concept: { name: "dedication [EPUB-SSV]" }, module: "EPUB" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure", "section"]] };
    return $r.default = a, $r;
  }()), i = h(function() {
    if (zn) return Jr;
    zn = 1, Object.defineProperty(Jr, "__esModule", { value: !0 }), Jr.default = void 0;
    var a = { abstract: !1, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author"], prohibitedProps: [], props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null }, relatedConcepts: [{ concept: { name: "rearnote [EPUB-SSV]" }, module: "EPUB" }], requireContextRole: ["doc-endnotes"], requiredContextRole: ["doc-endnotes"], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure", "section", "listitem"]] };
    return Jr.default = a, Jr;
  }()), C = h(function() {
    if (Dn) return Yr;
    Dn = 1, Object.defineProperty(Yr, "__esModule", { value: !0 }), Yr.default = void 0;
    var a = { abstract: !1, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author"], prohibitedProps: [], props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null }, relatedConcepts: [{ concept: { name: "rearnotes [EPUB-SSV]" }, module: "EPUB" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [["doc-endnote"]], requiredProps: {}, superClass: [["roletype", "structure", "section", "landmark"]] };
    return Yr.default = a, Yr;
  }()), r = h(function() {
    if (Xn) return Kr;
    Xn = 1, Object.defineProperty(Kr, "__esModule", { value: !0 }), Kr.default = void 0;
    var a = { abstract: !1, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author"], prohibitedProps: [], props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null }, relatedConcepts: [{ concept: { name: "epigraph [EPUB-SSV]" }, module: "EPUB" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure", "section"]] };
    return Kr.default = a, Kr;
  }()), t = h(function() {
    if (Gn) return Qr;
    Gn = 1, Object.defineProperty(Qr, "__esModule", { value: !0 }), Qr.default = void 0;
    var a = { abstract: !1, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author"], prohibitedProps: [], props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null }, relatedConcepts: [{ concept: { name: "epilogue [EPUB-SSV]" }, module: "EPUB" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure", "section", "landmark"]] };
    return Qr.default = a, Qr;
  }()), l = h(function() {
    if ($n) return Wr;
    $n = 1, Object.defineProperty(Wr, "__esModule", { value: !0 }), Wr.default = void 0;
    var a = { abstract: !1, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author"], prohibitedProps: [], props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null }, relatedConcepts: [{ concept: { name: "errata [EPUB-SSV]" }, module: "EPUB" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure", "section", "landmark"]] };
    return Wr.default = a, Wr;
  }()), o = h(function() {
    if (Jn) return Zr;
    Jn = 1, Object.defineProperty(Zr, "__esModule", { value: !0 }), Zr.default = void 0;
    var a = { abstract: !1, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author"], prohibitedProps: [], props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null }, relatedConcepts: [], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure", "section"]] };
    return Zr.default = a, Zr;
  }()), p = h(function() {
    if (Yn) return et;
    Yn = 1, Object.defineProperty(et, "__esModule", { value: !0 }), et.default = void 0;
    var a = { abstract: !1, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author"], prohibitedProps: [], props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null }, relatedConcepts: [{ concept: { name: "footnote [EPUB-SSV]" }, module: "EPUB" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure", "section"]] };
    return et.default = a, et;
  }()), q = h(function() {
    if (Kn) return rt;
    Kn = 1, Object.defineProperty(rt, "__esModule", { value: !0 }), rt.default = void 0;
    var a = { abstract: !1, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author"], prohibitedProps: [], props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null }, relatedConcepts: [{ concept: { name: "foreword [EPUB-SSV]" }, module: "EPUB" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure", "section", "landmark"]] };
    return rt.default = a, rt;
  }()), _ = h(function() {
    if (Qn) return tt;
    Qn = 1, Object.defineProperty(tt, "__esModule", { value: !0 }), tt.default = void 0;
    var a = { abstract: !1, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author"], prohibitedProps: [], props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null }, relatedConcepts: [{ concept: { name: "glossary [EPUB-SSV]" }, module: "EPUB" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [["definition"], ["term"]], requiredProps: {}, superClass: [["roletype", "structure", "section", "landmark"]] };
    return tt.default = a, tt;
  }()), M = h(function() {
    if (Wn) return at;
    Wn = 1, Object.defineProperty(at, "__esModule", { value: !0 }), at.default = void 0;
    var a = { abstract: !1, accessibleNameRequired: !0, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author", "contents"], prohibitedProps: [], props: { "aria-errormessage": null, "aria-invalid": null }, relatedConcepts: [{ concept: { name: "glossref [EPUB-SSV]" }, module: "EPUB" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "widget", "command", "link"]] };
    return at.default = a, at;
  }()), w = h(function() {
    if (Zn) return nt;
    Zn = 1, Object.defineProperty(nt, "__esModule", { value: !0 }), nt.default = void 0;
    var a = { abstract: !1, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author"], prohibitedProps: [], props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null }, relatedConcepts: [{ concept: { name: "index [EPUB-SSV]" }, module: "EPUB" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure", "section", "landmark", "navigation"]] };
    return nt.default = a, nt;
  }()), E = h(function() {
    if (eo) return ot;
    eo = 1, Object.defineProperty(ot, "__esModule", { value: !0 }), ot.default = void 0;
    var a = { abstract: !1, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author"], prohibitedProps: [], props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null }, relatedConcepts: [{ concept: { name: "introduction [EPUB-SSV]" }, module: "EPUB" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure", "section", "landmark"]] };
    return ot.default = a, ot;
  }()), j = h(function() {
    if (ro) return lt;
    ro = 1, Object.defineProperty(lt, "__esModule", { value: !0 }), lt.default = void 0;
    var a = { abstract: !1, accessibleNameRequired: !0, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author", "contents"], prohibitedProps: [], props: { "aria-errormessage": null, "aria-invalid": null }, relatedConcepts: [{ concept: { name: "noteref [EPUB-SSV]" }, module: "EPUB" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "widget", "command", "link"]] };
    return lt.default = a, lt;
  }()), N = h(function() {
    if (to) return it;
    to = 1, Object.defineProperty(it, "__esModule", { value: !0 }), it.default = void 0;
    var a = { abstract: !1, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author"], prohibitedProps: [], props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null }, relatedConcepts: [{ concept: { name: "notice [EPUB-SSV]" }, module: "EPUB" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure", "section", "note"]] };
    return it.default = a, it;
  }()), H = h(function() {
    if (ao) return ut;
    ao = 1, Object.defineProperty(ut, "__esModule", { value: !0 }), ut.default = void 0;
    var a = { abstract: !1, accessibleNameRequired: !0, baseConcepts: [], childrenPresentational: !0, nameFrom: ["author"], prohibitedProps: [], props: { "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null }, relatedConcepts: [{ concept: { name: "pagebreak [EPUB-SSV]" }, module: "EPUB" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure", "separator"]] };
    return ut.default = a, ut;
  }()), k = h(function() {
    if (no) return st;
    no = 1, Object.defineProperty(st, "__esModule", { value: !0 }), st.default = void 0;
    var a = { abstract: !1, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author"], prohibitedProps: [], props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null }, relatedConcepts: [{ concept: { name: "page-list [EPUB-SSV]" }, module: "EPUB" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure", "section", "landmark", "navigation"]] };
    return st.default = a, st;
  }()), U = h(function() {
    if (oo) return dt;
    oo = 1, Object.defineProperty(dt, "__esModule", { value: !0 }), dt.default = void 0;
    var a = { abstract: !1, accessibleNameRequired: !0, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author"], prohibitedProps: [], props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null }, relatedConcepts: [{ concept: { name: "part [EPUB-SSV]" }, module: "EPUB" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure", "section", "landmark"]] };
    return dt.default = a, dt;
  }()), T = h(function() {
    if (lo) return ct;
    lo = 1, Object.defineProperty(ct, "__esModule", { value: !0 }), ct.default = void 0;
    var a = { abstract: !1, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author"], prohibitedProps: [], props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null }, relatedConcepts: [{ concept: { name: "preface [EPUB-SSV]" }, module: "EPUB" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure", "section", "landmark"]] };
    return ct.default = a, ct;
  }()), L = h(function() {
    if (io) return pt;
    io = 1, Object.defineProperty(pt, "__esModule", { value: !0 }), pt.default = void 0;
    var a = { abstract: !1, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author"], prohibitedProps: [], props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null }, relatedConcepts: [{ concept: { name: "prologue [EPUB-SSV]" }, module: "EPUB" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure", "section", "landmark"]] };
    return pt.default = a, pt;
  }()), Ot = h(function() {
    if (uo) return mt;
    uo = 1, Object.defineProperty(mt, "__esModule", { value: !0 }), mt.default = void 0;
    var a = { abstract: !1, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author"], prohibitedProps: [], props: {}, relatedConcepts: [{ concept: { name: "pullquote [EPUB-SSV]" }, module: "EPUB" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["none"]] };
    return mt.default = a, mt;
  }()), wt = h(function() {
    if (so) return ft;
    so = 1, Object.defineProperty(ft, "__esModule", { value: !0 }), ft.default = void 0;
    var a = { abstract: !1, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author"], prohibitedProps: [], props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null }, relatedConcepts: [{ concept: { name: "qna [EPUB-SSV]" }, module: "EPUB" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure", "section"]] };
    return ft.default = a, ft;
  }()), Mt = h(function() {
    if (co) return bt;
    co = 1, Object.defineProperty(bt, "__esModule", { value: !0 }), bt.default = void 0;
    var a = { abstract: !1, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author"], prohibitedProps: [], props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null }, relatedConcepts: [{ concept: { name: "subtitle [EPUB-SSV]" }, module: "EPUB" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure", "sectionhead"]] };
    return bt.default = a, bt;
  }()), Et = h(function() {
    if (po) return vt;
    po = 1, Object.defineProperty(vt, "__esModule", { value: !0 }), vt.default = void 0;
    var a = { abstract: !1, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author"], prohibitedProps: [], props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null }, relatedConcepts: [{ concept: { name: "help [EPUB-SSV]" }, module: "EPUB" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure", "section", "note"]] };
    return vt.default = a, vt;
  }()), jt = h(function() {
    if (mo) return qt;
    mo = 1, Object.defineProperty(qt, "__esModule", { value: !0 }), qt.default = void 0;
    var a = { abstract: !1, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author"], prohibitedProps: [], props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null }, relatedConcepts: [{ concept: { name: "toc [EPUB-SSV]" }, module: "EPUB" }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure", "section", "landmark", "navigation"]] };
    return qt.default = a, qt;
  }());
  function h(a) {
    return a && a.__esModule ? a : { default: a };
  }
  var Ft = [["doc-abstract", P.default], ["doc-acknowledgments", F.default], ["doc-afterword", O.default], ["doc-appendix", R.default], ["doc-backlink", y.default], ["doc-biblioentry", f.default], ["doc-bibliography", x.default], ["doc-biblioref", g.default], ["doc-chapter", s.default], ["doc-colophon", m.default], ["doc-conclusion", u.default], ["doc-cover", b.default], ["doc-credit", v.default], ["doc-credits", c.default], ["doc-dedication", d.default], ["doc-endnote", i.default], ["doc-endnotes", C.default], ["doc-epigraph", r.default], ["doc-epilogue", t.default], ["doc-errata", l.default], ["doc-example", o.default], ["doc-footnote", p.default], ["doc-foreword", q.default], ["doc-glossary", _.default], ["doc-glossref", M.default], ["doc-index", w.default], ["doc-introduction", E.default], ["doc-noteref", j.default], ["doc-notice", N.default], ["doc-pagebreak", H.default], ["doc-pagelist", k.default], ["doc-part", U.default], ["doc-preface", T.default], ["doc-prologue", L.default], ["doc-pullquote", Ot.default], ["doc-qna", wt.default], ["doc-subtitle", Mt.default], ["doc-tip", Et.default], ["doc-toc", jt.default]];
  return Nr.default = Ft, Nr;
}
var bo, ht = {}, Ct = {}, vo, Pt = {}, qo, ho, Co, yt = {};
function ql() {
  if (ho) return ht;
  ho = 1, Object.defineProperty(ht, "__esModule", { value: !0 }), ht.default = void 0;
  var P = R(function() {
    if (bo) return Ct;
    bo = 1, Object.defineProperty(Ct, "__esModule", { value: !0 }), Ct.default = void 0;
    var f = { abstract: !1, accessibleNameRequired: !0, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author"], prohibitedProps: [], props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null }, relatedConcepts: [{ module: "GRAPHICS", concept: { name: "graphics-object" } }, { module: "ARIA", concept: { name: "img" } }, { module: "ARIA", concept: { name: "article" } }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure", "document"]] };
    return Ct.default = f, Ct;
  }()), F = R(function() {
    if (vo) return Pt;
    vo = 1, Object.defineProperty(Pt, "__esModule", { value: !0 }), Pt.default = void 0;
    var f = { abstract: !1, accessibleNameRequired: !1, baseConcepts: [], childrenPresentational: !1, nameFrom: ["author", "contents"], prohibitedProps: [], props: { "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null }, relatedConcepts: [{ module: "GRAPHICS", concept: { name: "graphics-document" } }, { module: "ARIA", concept: { name: "group" } }, { module: "ARIA", concept: { name: "img" } }, { module: "GRAPHICS", concept: { name: "graphics-symbol" } }], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure", "section", "group"]] };
    return Pt.default = f, Pt;
  }()), O = R(function() {
    if (qo) return yt;
    qo = 1, Object.defineProperty(yt, "__esModule", { value: !0 }), yt.default = void 0;
    var f = { abstract: !1, accessibleNameRequired: !0, baseConcepts: [], childrenPresentational: !0, nameFrom: ["author"], prohibitedProps: [], props: { "aria-disabled": null, "aria-errormessage": null, "aria-expanded": null, "aria-haspopup": null, "aria-invalid": null }, relatedConcepts: [], requireContextRole: [], requiredContextRole: [], requiredOwnedElements: [], requiredProps: {}, superClass: [["roletype", "structure", "section", "img"]] };
    return yt.default = f, yt;
  }());
  function R(f) {
    return f && f.__esModule ? f : { default: f };
  }
  var y = [["graphics-document", P.default], ["graphics-object", F.default], ["graphics-symbol", O.default]];
  return ht.default = y, ht;
}
function Tt() {
  if (Co) return V;
  Co = 1, Object.defineProperty(V, "__esModule", { value: !0 }), V.default = void 0;
  var P = f(fl()), F = f(bl()), O = f(vl()), R = f(ql()), y = f(gt());
  function f(c) {
    return c && c.__esModule ? c : { default: c };
  }
  function x(c, d) {
    var i = typeof Symbol < "u" && c[Symbol.iterator] || c["@@iterator"];
    if (!i) {
      if (Array.isArray(c) || (i = s(c)) || d) {
        i && (c = i);
        var C = 0, r = function() {
        };
        return { s: r, n: function() {
          return C >= c.length ? { done: !0 } : { done: !1, value: c[C++] };
        }, e: function(p) {
          throw p;
        }, f: r };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var t, l = !0, o = !1;
    return { s: function() {
      i = i.call(c);
    }, n: function() {
      var p = i.next();
      return l = p.done, p;
    }, e: function(p) {
      o = !0, t = p;
    }, f: function() {
      try {
        l || i.return == null || i.return();
      } finally {
        if (o) throw t;
      }
    } };
  }
  function g(c, d) {
    return function(i) {
      if (Array.isArray(i)) return i;
    }(c) || function(i, C) {
      var r = i == null ? null : typeof Symbol < "u" && i[Symbol.iterator] || i["@@iterator"];
      if (r != null) {
        var t, l, o = [], p = !0, q = !1;
        try {
          for (r = r.call(i); !(p = (t = r.next()).done) && (o.push(t.value), !C || o.length !== C); p = !0) ;
        } catch (_) {
          q = !0, l = _;
        } finally {
          try {
            p || r.return == null || r.return();
          } finally {
            if (q) throw l;
          }
        }
        return o;
      }
    }(c, d) || s(c, d) || function() {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }();
  }
  function s(c, d) {
    if (c) {
      if (typeof c == "string") return m(c, d);
      var i = Object.prototype.toString.call(c).slice(8, -1);
      return i === "Object" && c.constructor && (i = c.constructor.name), i === "Map" || i === "Set" ? Array.from(c) : i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? m(c, d) : void 0;
    }
  }
  function m(c, d) {
    (d == null || d > c.length) && (d = c.length);
    for (var i = 0, C = new Array(d); i < d; i++) C[i] = c[i];
    return C;
  }
  var u = [].concat(P.default, F.default, O.default, R.default);
  u.forEach(function(c) {
    var d, i = g(c, 2)[1], C = x(i.superClass);
    try {
      for (C.s(); !(d = C.n()).done; ) {
        var r, t = x(d.value);
        try {
          var l = function() {
            var o, p, q, _ = r.value, M = u.find(function(H) {
              return g(H, 1)[0] === _;
            });
            if (M) for (var w = M[1], E = 0, j = Object.keys(w.props); E < j.length; E++) {
              var N = j[E];
              Object.prototype.hasOwnProperty.call(i.props, N) || Object.assign(i.props, (o = {}, p = N, q = w.props[N], p in o ? Object.defineProperty(o, p, { value: q, enumerable: !0, configurable: !0, writable: !0 }) : o[p] = q, o));
            }
          };
          for (t.s(); !(r = t.n()).done; ) l();
        } catch (o) {
          t.e(o);
        } finally {
          t.f();
        }
      }
    } catch (o) {
      C.e(o);
    } finally {
      C.f();
    }
  });
  var b = { entries: function() {
    return u;
  }, forEach: function(c) {
    var d, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, C = x(u);
    try {
      for (C.s(); !(d = C.n()).done; ) {
        var r = g(d.value, 2), t = r[0], l = r[1];
        c.call(i, l, t, u);
      }
    } catch (o) {
      C.e(o);
    } finally {
      C.f();
    }
  }, get: function(c) {
    var d = u.find(function(i) {
      return i[0] === c;
    });
    return d && d[1];
  }, has: function(c) {
    return !!b.get(c);
  }, keys: function() {
    return u.map(function(c) {
      return g(c, 1)[0];
    });
  }, values: function() {
    return u.map(function(c) {
      return g(c, 2)[1];
    });
  } }, v = (0, y.default)(b, b.entries());
  return V.default = v, V;
}
var Po, yo, Rt = {}, Nt = {};
function hl() {
  if (yo) return Rt;
  yo = 1, Object.defineProperty(Rt, "__esModule", { value: !0 }), Rt.default = void 0;
  var P = function() {
    if (Po) return Nt;
    Po = 1;
    var r = Object.prototype.hasOwnProperty;
    return Nt.dequal = function t(l, o) {
      var p, q;
      if (l === o) return !0;
      if (l && o && (p = l.constructor) === o.constructor) {
        if (p === Date) return l.getTime() === o.getTime();
        if (p === RegExp) return l.toString() === o.toString();
        if (p === Array) {
          if ((q = l.length) === o.length) for (; q-- && t(l[q], o[q]); ) ;
          return q === -1;
        }
        if (!p || typeof l == "object") {
          for (p in q = 0, l)
            if (r.call(l, p) && ++q && !r.call(o, p) || !(p in o) || !t(l[p], o[p])) return !1;
          return Object.keys(o).length === q;
        }
      }
      return l != l && o != o;
    }, Nt;
  }(), F = R(gt()), O = R(Tt());
  function R(r) {
    return r && r.__esModule ? r : { default: r };
  }
  function y(r, t) {
    return function(l) {
      if (Array.isArray(l)) return l;
    }(r) || function(l, o) {
      var p = l == null ? null : typeof Symbol < "u" && l[Symbol.iterator] || l["@@iterator"];
      if (p != null) {
        var q, _, M = [], w = !0, E = !1;
        try {
          for (p = p.call(l); !(w = (q = p.next()).done) && (M.push(q.value), !o || M.length !== o); w = !0) ;
        } catch (j) {
          E = !0, _ = j;
        } finally {
          try {
            w || p.return == null || p.return();
          } finally {
            if (E) throw _;
          }
        }
        return M;
      }
    }(r, t) || f(r, t) || function() {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }();
  }
  function f(r, t) {
    if (r) {
      if (typeof r == "string") return x(r, t);
      var l = Object.prototype.toString.call(r).slice(8, -1);
      return l === "Object" && r.constructor && (l = r.constructor.name), l === "Map" || l === "Set" ? Array.from(r) : l === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l) ? x(r, t) : void 0;
    }
  }
  function x(r, t) {
    (t == null || t > r.length) && (t = r.length);
    for (var l = 0, o = new Array(t); l < t; l++) o[l] = r[l];
    return o;
  }
  for (var g = [], s = O.default.keys(), m = 0; m < s.length; m++) {
    var u = s[m], b = O.default.get(u);
    if (b) for (var v = [].concat(b.baseConcepts, b.relatedConcepts), c = 0; c < v.length; c++) {
      var d = v[c];
      d.module === "HTML" && function() {
        var r = d.concept;
        if (r) {
          var t, l = g.find(function(q) {
            return (0, P.dequal)(q, r);
          });
          t = l ? l[1] : [];
          for (var o = !0, p = 0; p < t.length; p++) if (t[p] === u) {
            o = !1;
            break;
          }
          o && t.push(u), g.push([r, t]);
        }
      }();
    }
  }
  var i = { entries: function() {
    return g;
  }, forEach: function(r) {
    var t, l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, o = function(M, w) {
      var E = typeof Symbol < "u" && M[Symbol.iterator] || M["@@iterator"];
      if (!E) {
        if (Array.isArray(M) || (E = f(M)) || w) {
          E && (M = E);
          var j = 0, N = function() {
          };
          return { s: N, n: function() {
            return j >= M.length ? { done: !0 } : { done: !1, value: M[j++] };
          }, e: function(T) {
            throw T;
          }, f: N };
        }
        throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      var H, k = !0, U = !1;
      return { s: function() {
        E = E.call(M);
      }, n: function() {
        var T = E.next();
        return k = T.done, T;
      }, e: function(T) {
        U = !0, H = T;
      }, f: function() {
        try {
          k || E.return == null || E.return();
        } finally {
          if (U) throw H;
        }
      } };
    }(g);
    try {
      for (o.s(); !(t = o.n()).done; ) {
        var p = y(t.value, 2), q = p[0], _ = p[1];
        r.call(l, _, q, g);
      }
    } catch (M) {
      o.e(M);
    } finally {
      o.f();
    }
  }, get: function(r) {
    var t = g.find(function(l) {
      return r.name === l[0].name && (0, P.dequal)(r.attributes, l[0].attributes);
    });
    return t && t[1];
  }, has: function(r) {
    return !!i.get(r);
  }, keys: function() {
    return g.map(function(r) {
      return y(r, 1)[0];
    });
  }, values: function() {
    return g.map(function(r) {
      return y(r, 2)[1];
    });
  } }, C = (0, F.default)(i, i.entries());
  return Rt.default = C, Rt;
}
var Ro, xo, xt = {};
function Cl() {
  if (Ro) return xt;
  Ro = 1, Object.defineProperty(xt, "__esModule", { value: !0 }), xt.default = void 0;
  var P = O(gt()), F = O(Tt());
  function O(t) {
    return t && t.__esModule ? t : { default: t };
  }
  function R(t, l) {
    return function(o) {
      if (Array.isArray(o)) return o;
    }(t) || function(o, p) {
      var q = o == null ? null : typeof Symbol < "u" && o[Symbol.iterator] || o["@@iterator"];
      if (q != null) {
        var _, M, w = [], E = !0, j = !1;
        try {
          for (q = q.call(o); !(E = (_ = q.next()).done) && (w.push(_.value), !p || w.length !== p); E = !0) ;
        } catch (N) {
          j = !0, M = N;
        } finally {
          try {
            E || q.return == null || q.return();
          } finally {
            if (j) throw M;
          }
        }
        return w;
      }
    }(t, l) || y(t, l) || function() {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }();
  }
  function y(t, l) {
    if (t) {
      if (typeof t == "string") return f(t, l);
      var o = Object.prototype.toString.call(t).slice(8, -1);
      return o === "Object" && t.constructor && (o = t.constructor.name), o === "Map" || o === "Set" ? Array.from(t) : o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? f(t, l) : void 0;
    }
  }
  function f(t, l) {
    (l == null || l > t.length) && (l = t.length);
    for (var o = 0, p = new Array(l); o < l; o++) p[o] = t[o];
    return p;
  }
  for (var x = [], g = F.default.keys(), s = 0; s < g.length; s++) {
    var m = g[s], u = F.default.get(m), b = [];
    if (u) {
      for (var v = [].concat(u.baseConcepts, u.relatedConcepts), c = 0; c < v.length; c++) {
        var d = v[c];
        if (d.module === "HTML") {
          var i = d.concept;
          i != null && b.push(i);
        }
      }
      b.length > 0 && x.push([m, b]);
    }
  }
  var C = { entries: function() {
    return x;
  }, forEach: function(t) {
    var l, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, p = function(w, E) {
      var j = typeof Symbol < "u" && w[Symbol.iterator] || w["@@iterator"];
      if (!j) {
        if (Array.isArray(w) || (j = y(w)) || E) {
          j && (w = j);
          var N = 0, H = function() {
          };
          return { s: H, n: function() {
            return N >= w.length ? { done: !0 } : { done: !1, value: w[N++] };
          }, e: function(L) {
            throw L;
          }, f: H };
        }
        throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      var k, U = !0, T = !1;
      return { s: function() {
        j = j.call(w);
      }, n: function() {
        var L = j.next();
        return U = L.done, L;
      }, e: function(L) {
        T = !0, k = L;
      }, f: function() {
        try {
          U || j.return == null || j.return();
        } finally {
          if (T) throw k;
        }
      } };
    }(x);
    try {
      for (p.s(); !(l = p.n()).done; ) {
        var q = R(l.value, 2), _ = q[0], M = q[1];
        t.call(o, M, _, x);
      }
    } catch (w) {
      p.e(w);
    } finally {
      p.f();
    }
  }, get: function(t) {
    var l = x.find(function(o) {
      return o[0] === t;
    });
    return l && l[1];
  }, has: function(t) {
    return !!C.get(t);
  }, keys: function() {
    return x.map(function(t) {
      return R(t, 1)[0];
    });
  }, values: function() {
    return x.map(function(t) {
      return R(t, 2)[1];
    });
  } }, r = (0, P.default)(C, C.entries());
  return xt.default = r, xt;
}
var Rl = function() {
  if (xo) return S;
  xo = 1, Object.defineProperty(S, "__esModule", { value: !0 }), S.roles = S.roleElements = S.elementRoles = S.dom = S.aria = void 0;
  var P = f(pl()), F = f(ml()), O = f(Tt()), R = f(hl()), y = f(Cl());
  function f(b) {
    return b && b.__esModule ? b : { default: b };
  }
  var x = P.default;
  S.aria = x;
  var g = F.default;
  S.dom = g;
  var s = O.default;
  S.roles = s;
  var m = R.default;
  S.elementRoles = m;
  var u = y.default;
  return S.roleElements = u, S;
}();
export {
  Pl as c,
  yl as g,
  Rl as l
};
//# sourceMappingURL=index-DyG9wgsB.js.map
