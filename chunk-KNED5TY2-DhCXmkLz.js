import * as i from "react";
var fe, Q = {};
/**
 * react-router v7.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function We(e = {}) {
  let t, { initialEntries: a = ["/"], initialIndex: n, v5Compat: l = !1 } = e;
  t = a.map((s, v) => d(s, typeof s == "string" ? null : s.state, v === 0 ? "default" : void 0));
  let o = r(n ?? t.length - 1), p = "POP", c = null;
  function r(s) {
    return Math.min(Math.max(s, 0), t.length - 1);
  }
  function h() {
    return t[o];
  }
  function d(s, v = null, m) {
    let x = function(g, b, y = null, f) {
      return { pathname: typeof g == "string" ? g : g.pathname, search: "", hash: "", ...typeof b == "string" ? H(b) : b, state: y, key: b && b.key || f || Be() };
    }(t ? h().pathname : "/", s, v, m);
    return O(x.pathname.charAt(0) === "/", `relative pathnames are not supported in memory history: ${JSON.stringify(s)}`), x;
  }
  function u(s) {
    return typeof s == "string" ? s : re(s);
  }
  return { get index() {
    return o;
  }, get action() {
    return p;
  }, get location() {
    return h();
  }, createHref: u, createURL: (s) => new URL(u(s), "http://localhost"), encodeLocation(s) {
    let v = typeof s == "string" ? H(s) : s;
    return { pathname: v.pathname || "", search: v.search || "", hash: v.hash || "" };
  }, push(s, v) {
    p = "PUSH";
    let m = d(s, v);
    o += 1, t.splice(o, t.length, m), l && c && c({ action: p, location: m, delta: 1 });
  }, replace(s, v) {
    p = "REPLACE";
    let m = d(s, v);
    t[o] = m, l && c && c({ action: p, location: m, delta: 0 });
  }, go(s) {
    p = "POP";
    let v = r(o + s), m = t[v];
    o = v, c && c({ action: p, location: m, delta: s });
  }, listen: (s) => (c = s, () => {
    c = null;
  }) };
}
function T(e, t) {
  if (e === !1 || e == null) throw new Error(t);
}
function O(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {
    }
  }
}
function Be() {
  return Math.random().toString(36).substring(2, 10);
}
function re({ pathname: e = "/", search: t = "", hash: a = "" }) {
  return t && t !== "?" && (e += t.charAt(0) === "?" ? t : "?" + t), a && a !== "#" && (e += a.charAt(0) === "#" ? a : "#" + a), e;
}
function H(e) {
  let t = {};
  if (e) {
    let a = e.indexOf("#");
    a >= 0 && (t.hash = e.substring(a), e = e.substring(0, a));
    let n = e.indexOf("?");
    n >= 0 && (t.search = e.substring(n), e = e.substring(0, n)), e && (t.pathname = e);
  }
  return t;
}
function Re(e, t, a = "/") {
  return function(n, l, o, p) {
    let c = typeof l == "string" ? H(l) : l, r = B(c.pathname || "/", o);
    if (r == null) return null;
    let h = Ce(n);
    (function(u) {
      u.sort((s, v) => s.score !== v.score ? v.score - s.score : function(m, x) {
        return m.length === x.length && m.slice(0, -1).every((b, y) => b === x[y]) ? m[m.length - 1] - x[x.length - 1] : 0;
      }(s.routesMeta.map((m) => m.childrenIndex), v.routesMeta.map((m) => m.childrenIndex)));
    })(h);
    let d = null;
    for (let u = 0; d == null && u < h.length; ++u) {
      let s = Ve(r);
      d = Ke(h[u], s, p);
    }
    return d;
  }(e, t, a, !1);
}
function Ce(e, t = [], a = [], n = "") {
  let l = (o, p, c) => {
    let r = { relativePath: c === void 0 ? o.path || "" : c, caseSensitive: o.caseSensitive === !0, childrenIndex: p, route: o };
    r.relativePath.startsWith("/") && (T(r.relativePath.startsWith(n), `Absolute route path "${r.relativePath}" nested under path "${n}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`), r.relativePath = r.relativePath.slice(n.length));
    let h = j([n, r.relativePath]), d = a.concat(r);
    o.children && o.children.length > 0 && (T(o.index !== !0, `Index routes must not have child routes. Please remove all child routes from route path "${h}".`), Ce(o.children, t, d, h)), (o.path != null || o.index) && t.push({ path: h, score: Ye(h, o.index), routesMeta: d });
  };
  return e.forEach((o, p) => {
    var c;
    if (o.path !== "" && ((c = o.path) != null && c.includes("?"))) for (let r of Se(o.path)) l(o, p, r);
    else l(o, p);
  }), t;
}
function Se(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [a, ...n] = t, l = a.endsWith("?"), o = a.replace(/\?$/, "");
  if (n.length === 0) return l ? [o, ""] : [o];
  let p = Se(n.join("/")), c = [];
  return c.push(...p.map((r) => r === "" ? o : [o, r].join("/"))), l && c.push(...p), c.map((r) => e.startsWith("/") && r === "" ? "/" : r);
}
(function() {
  if (fe) return Q;
  fe = 1, Object.defineProperty(Q, "__esModule", { value: !0 }), Q.parse = function(h, d) {
    const u = new o(), s = h.length;
    if (s < 2) return u;
    const v = (d == null ? void 0 : d.decode) || r;
    let m = 0;
    do {
      const x = h.indexOf("=", m);
      if (x === -1) break;
      const g = h.indexOf(";", m), b = g === -1 ? s : g;
      if (x > b) {
        m = h.lastIndexOf(";", x - 1) + 1;
        continue;
      }
      const y = p(h, m, x), f = c(h, x, y), $ = h.slice(y, f);
      if (u[$] === void 0) {
        let C = p(h, x + 1, b), R = c(h, b, C);
        const w = v(h.slice(C, R));
        u[$] = w;
      }
      m = b + 1;
    } while (m < s);
    return u;
  }, Q.serialize = function(h, d, u) {
    const s = (u == null ? void 0 : u.encode) || encodeURIComponent;
    if (!e.test(h)) throw new TypeError(`argument name is invalid: ${h}`);
    const v = s(d);
    if (!t.test(v)) throw new TypeError(`argument val is invalid: ${d}`);
    let m = h + "=" + v;
    if (!u) return m;
    if (u.maxAge !== void 0) {
      if (!Number.isInteger(u.maxAge)) throw new TypeError(`option maxAge is invalid: ${u.maxAge}`);
      m += "; Max-Age=" + u.maxAge;
    }
    if (u.domain) {
      if (!a.test(u.domain)) throw new TypeError(`option domain is invalid: ${u.domain}`);
      m += "; Domain=" + u.domain;
    }
    if (u.path) {
      if (!n.test(u.path)) throw new TypeError(`option path is invalid: ${u.path}`);
      m += "; Path=" + u.path;
    }
    if (u.expires) {
      if (!function(x) {
        return l.call(x) === "[object Date]";
      }(u.expires) || !Number.isFinite(u.expires.valueOf())) throw new TypeError(`option expires is invalid: ${u.expires}`);
      m += "; Expires=" + u.expires.toUTCString();
    }
    if (u.httpOnly && (m += "; HttpOnly"), u.secure && (m += "; Secure"), u.partitioned && (m += "; Partitioned"), u.priority)
      switch (typeof u.priority == "string" ? u.priority.toLowerCase() : void 0) {
        case "low":
          m += "; Priority=Low";
          break;
        case "medium":
          m += "; Priority=Medium";
          break;
        case "high":
          m += "; Priority=High";
          break;
        default:
          throw new TypeError(`option priority is invalid: ${u.priority}`);
      }
    if (u.sameSite)
      switch (typeof u.sameSite == "string" ? u.sameSite.toLowerCase() : u.sameSite) {
        case !0:
        case "strict":
          m += "; SameSite=Strict";
          break;
        case "lax":
          m += "; SameSite=Lax";
          break;
        case "none":
          m += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${u.sameSite}`);
      }
    return m;
  };
  const e = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/, t = /^[\u0021-\u003A\u003C-\u007E]*$/, a = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i, n = /^[\u0020-\u003A\u003D-\u007E]*$/, l = Object.prototype.toString, o = (() => {
    const h = function() {
    };
    return h.prototype = /* @__PURE__ */ Object.create(null), h;
  })();
  function p(h, d, u) {
    do {
      const s = h.charCodeAt(d);
      if (s !== 32 && s !== 9) return d;
    } while (++d < u);
    return u;
  }
  function c(h, d, u) {
    for (; d > u; ) {
      const s = h.charCodeAt(--d);
      if (s !== 32 && s !== 9) return d + 1;
    }
    return u;
  }
  function r(h) {
    if (h.indexOf("%") === -1) return h;
    try {
      return decodeURIComponent(h);
    } catch {
      return h;
    }
  }
})();
var je = /^:[\w-]+$/, Ie = 3, ze = 2, _e = 1, He = 10, Je = -2, ve = (e) => e === "*";
function Ye(e, t) {
  let a = e.split("/"), n = a.length;
  return a.some(ve) && (n += Je), t && (n += ze), a.filter((l) => !ve(l)).reduce((l, o) => l + (je.test(o) ? Ie : o === "" ? _e : He), n);
}
function Ke(e, t, a = !1) {
  let { routesMeta: n } = e, l = {}, o = "/", p = [];
  for (let c = 0; c < n.length; ++c) {
    let r = n[c], h = c === n.length - 1, d = o === "/" ? t : t.slice(o.length) || "/", u = ae({ path: r.relativePath, caseSensitive: r.caseSensitive, end: h }, d), s = r.route;
    if (!u && h && a && !n[n.length - 1].route.index && (u = ae({ path: r.relativePath, caseSensitive: r.caseSensitive, end: !1 }, d)), !u) return null;
    Object.assign(l, u.params), p.push({ params: l, pathname: j([o, u.pathname]), pathnameBase: qe(j([o, u.pathnameBase])), route: s }), u.pathnameBase !== "/" && (o = j([o, u.pathnameBase]));
  }
  return p;
}
function ae(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [a, n] = function(r, h = !1, d = !0) {
    O(r === "*" || !r.endsWith("*") || r.endsWith("/*"), `Route path "${r}" will be treated as if it were "${r.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/, "/*")}".`);
    let u = [], s = "^" + r.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (m, x, g) => (u.push({ paramName: x, isOptional: g != null }), g ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return r.endsWith("*") ? (u.push({ paramName: "*" }), s += r === "*" || r === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : d ? s += "\\/*$" : r !== "" && r !== "/" && (s += "(?:(?=\\/|$))"), [new RegExp(s, h ? void 0 : "i"), u];
  }(e.path, e.caseSensitive, e.end), l = t.match(a);
  if (!l) return null;
  let o = l[0], p = o.replace(/(.)\/+$/, "$1"), c = l.slice(1);
  return { params: n.reduce((r, { paramName: h, isOptional: d }, u) => {
    if (h === "*") {
      let v = c[u] || "";
      p = o.slice(0, o.length - v.length).replace(/(.)\/+$/, "$1");
    }
    const s = c[u];
    return r[h] = d && !s ? void 0 : (s || "").replace(/%2F/g, "/"), r;
  }, {}), pathname: o, pathnameBase: p, pattern: e };
}
function Ve(e) {
  try {
    return e.split("/").map((t) => decodeURIComponent(t).replace(/\//g, "%2F")).join("/");
  } catch (t) {
    return O(!1, `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`), e;
  }
}
function B(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let a = t.endsWith("/") ? t.length - 1 : t.length, n = e.charAt(a);
  return n && n !== "/" ? null : e.slice(a) || "/";
}
function ie(e, t, a, n) {
  return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(n)}].  Please separate it out to the \`to.${a}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function $e(e) {
  let t = function(a) {
    return a.filter((n, l) => l === 0 || n.route.path && n.route.path.length > 0);
  }(e);
  return t.map((a, n) => n === t.length - 1 ? a.pathname : a.pathnameBase);
}
function Le(e, t, a, n = !1) {
  let l;
  typeof e == "string" ? l = H(e) : (l = { ...e }, T(!l.pathname || !l.pathname.includes("?"), ie("?", "pathname", "search", l)), T(!l.pathname || !l.pathname.includes("#"), ie("#", "pathname", "hash", l)), T(!l.search || !l.search.includes("#"), ie("#", "search", "hash", l)));
  let o, p = e === "" || l.pathname === "", c = p ? "/" : l.pathname;
  if (c == null) o = a;
  else {
    let u = t.length - 1;
    if (!n && c.startsWith("..")) {
      let s = c.split("/");
      for (; s[0] === ".."; ) s.shift(), u -= 1;
      l.pathname = s.join("/");
    }
    o = u >= 0 ? t[u] : "/";
  }
  let r = function(u, s = "/") {
    let { pathname: v, search: m = "", hash: x = "" } = typeof u == "string" ? H(u) : u;
    return { pathname: v ? v.startsWith("/") ? v : function(b, y) {
      let f = y.replace(/\/+$/, "").split("/");
      return b.split("/").forEach(($) => {
        $ === ".." ? f.length > 1 && f.pop() : $ !== "." && f.push($);
      }), f.length > 1 ? f.join("/") : "/";
    }(v, s) : s, search: Ge(m), hash: Xe(x) };
  }(l, o), h = c && c !== "/" && c.endsWith("/"), d = (p || c === ".") && a.endsWith("/");
  return r.pathname.endsWith("/") || !h && !d || (r.pathname += "/"), r;
}
var j = (e) => e.join("/").replace(/\/\/+/g, "/"), qe = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"), Ge = (e) => e && e !== "?" ? e.startsWith("?") ? e : "?" + e : "", Xe = (e) => e && e !== "#" ? e.startsWith("#") ? e : "#" + e : "", ke = ["POST", "PUT", "PATCH", "DELETE"];
new Set(ke);
var Qe = ["GET", ...ke];
new Set(Qe);
var Y = i.createContext(null);
Y.displayName = "DataRouter";
var oe = i.createContext(null);
oe.displayName = "DataRouterState";
var Te = i.createContext({ isTransitioning: !1 });
Te.displayName = "ViewTransition", i.createContext(/* @__PURE__ */ new Map()).displayName = "Fetchers", i.createContext(null).displayName = "Await";
var U = i.createContext(null);
U.displayName = "Navigation";
var q = i.createContext(null);
q.displayName = "Location";
var I = i.createContext({ outlet: null, matches: [], isDataRoute: !1 });
I.displayName = "Route";
var se = i.createContext(null);
function G() {
  return i.useContext(q) != null;
}
function J() {
  return T(G(), "useLocation() may be used only in the context of a <Router> component."), i.useContext(q).location;
}
se.displayName = "RouteError";
var ye = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function ge(e) {
  i.useContext(U).static || i.useLayoutEffect(e);
}
function Ze() {
  let { isDataRoute: e } = i.useContext(I);
  return e ? function() {
    let { router: t } = function(l) {
      let o = i.useContext(Y);
      return T(o, ce(l)), o;
    }("useNavigate"), a = he("useNavigate"), n = i.useRef(!1);
    return ge(() => {
      n.current = !0;
    }), i.useCallback(async (l, o = {}) => {
      O(n.current, ye), n.current && (typeof l == "number" ? t.navigate(l) : await t.navigate(l, { fromRouteId: a, ...o }));
    }, [t, a]);
  }() : function() {
    T(G(), "useNavigate() may be used only in the context of a <Router> component.");
    let t = i.useContext(Y), { basename: a, navigator: n } = i.useContext(U), { matches: l } = i.useContext(I), { pathname: o } = J(), p = JSON.stringify($e(l)), c = i.useRef(!1);
    return ge(() => {
      c.current = !0;
    }), i.useCallback((r, h = {}) => {
      if (O(c.current, ye), !c.current) return;
      if (typeof r == "number") return void n.go(r);
      let d = Le(r, JSON.parse(p), o, h.relative === "path");
      t == null && a !== "/" && (d.pathname = d.pathname === "/" ? a : j([a, d.pathname])), (h.replace ? n.replace : n.push)(d, h.state, h);
    }, [a, n, p, o, t]);
  }();
}
function V(e, { relative: t } = {}) {
  let { matches: a } = i.useContext(I), { pathname: n } = J(), l = JSON.stringify($e(a));
  return i.useMemo(() => Le(e, JSON.parse(l), n, t === "path"), [e, l, n, t]);
}
function Pe(e, t, a, n) {
  var y;
  T(G(), "useRoutes() may be used only in the context of a <Router> component.");
  let { navigator: l, static: o } = i.useContext(U), { matches: p } = i.useContext(I), c = p[p.length - 1], r = c ? c.params : {}, h = c ? c.pathname : "/", d = c ? c.pathnameBase : "/", u = c && c.route;
  {
    let f = u && u.path || "";
    be(h, !u || f.endsWith("*") || f.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${f}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${f}"> to <Route path="${f === "/" ? "*" : `${f}/*`}">.`);
  }
  let s, v = J();
  if (t) {
    let f = typeof t == "string" ? H(t) : t;
    T(d === "/" || ((y = f.pathname) == null ? void 0 : y.startsWith(d)), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${d}" but pathname "${f.pathname}" was given in the \`location\` prop.`), s = f;
  } else s = v;
  let m = s.pathname || "/", x = m;
  if (d !== "/") {
    let f = d.replace(/^\//, "").split("/");
    x = "/" + m.replace(/^\//, "").split("/").slice(f.length).join("/");
  }
  let g = !o && a && a.matches && a.matches.length > 0 ? a.matches : Re(e, { pathname: x });
  O(u || g != null, `No routes matched location "${s.pathname}${s.search}${s.hash}" `), O(g == null || g[g.length - 1].route.element !== void 0 || g[g.length - 1].route.Component !== void 0 || g[g.length - 1].route.lazy !== void 0, `Matched leaf route at location "${s.pathname}${s.search}${s.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
  let b = function(f, $ = [], C = null) {
    if (f == null) {
      if (!C) return null;
      if (C.errors) f = C.matches;
      else {
        if ($.length !== 0 || C.initialized || !(C.matches.length > 0)) return null;
        f = C.matches;
      }
    }
    let R = f, w = C == null ? void 0 : C.errors;
    if (w != null) {
      let k = R.findIndex((E) => E.route.id && (w == null ? void 0 : w[E.route.id]) !== void 0);
      T(k >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(w).join(",")}`), R = R.slice(0, Math.min(R.length, k + 1));
    }
    let P = !1, L = -1;
    if (C) for (let k = 0; k < R.length; k++) {
      let E = R[k];
      if ((E.route.HydrateFallback || E.route.hydrateFallbackElement) && (L = k), E.route.id) {
        let { loaderData: S, errors: A } = C, N = E.route.loader && !S.hasOwnProperty(E.route.id) && (!A || A[E.route.id] === void 0);
        if (E.route.lazy || N) {
          P = !0, R = L >= 0 ? R.slice(0, L + 1) : [R[0]];
          break;
        }
      }
    }
    return R.reduceRight((k, E, S) => {
      let A, N = !1, F = null, D = null;
      C && (A = w && E.route.id ? w[E.route.id] : void 0, F = E.route.errorElement || tt, P && (L < 0 && S === 0 ? (be("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"), N = !0, D = null) : L === S && (N = !0, D = E.route.hydrateFallbackElement || null)));
      let _ = $.concat(R.slice(0, S + 1)), W = () => {
        let M;
        return M = A ? F : N ? D : E.route.Component ? i.createElement(E.route.Component, null) : E.route.element ? E.route.element : k, i.createElement(rt, { match: E, routeContext: { outlet: k, matches: _, isDataRoute: C != null }, children: M });
      };
      return C && (E.route.ErrorBoundary || E.route.errorElement || S === 0) ? i.createElement(nt, { location: C.location, revalidation: C.revalidation, component: F, error: A, children: W(), routeContext: { outlet: null, matches: _, isDataRoute: !0 } }) : W();
    }, null);
  }(g && g.map((f) => Object.assign({}, f, { params: Object.assign({}, r, f.params), pathname: j([d, l.encodeLocation ? l.encodeLocation(f.pathname).pathname : f.pathname]), pathnameBase: f.pathnameBase === "/" ? d : j([d, l.encodeLocation ? l.encodeLocation(f.pathnameBase).pathname : f.pathnameBase]) })), p, a, n);
  return t && b ? i.createElement(q.Provider, { value: { location: { pathname: "/", search: "", hash: "", state: null, key: "default", ...s }, navigationType: "POP" } }, b) : b;
}
function et() {
  let e = function() {
    var d;
    let c = i.useContext(se), r = function(u) {
      let s = i.useContext(oe);
      return T(s, ce(u)), s;
    }("useRouteError"), h = he("useRouteError");
    return c !== void 0 ? c : (d = r.errors) == null ? void 0 : d[h];
  }(), t = function(c) {
    return c != null && typeof c.status == "number" && typeof c.statusText == "string" && typeof c.internal == "boolean" && "data" in c;
  }(e) ? `${e.status} ${e.statusText}` : e instanceof Error ? e.message : JSON.stringify(e), a = e instanceof Error ? e.stack : null, n = "rgba(200,200,200, 0.5)", l = { padding: "0.5rem", backgroundColor: n }, o = { padding: "2px 4px", backgroundColor: n }, p = null;
  return console.error("Error handled by React Router default ErrorBoundary:", e), p = i.createElement(i.Fragment, null, i.createElement("p", null, "💿 Hey developer 👋"), i.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", i.createElement("code", { style: o }, "ErrorBoundary"), " or", " ", i.createElement("code", { style: o }, "errorElement"), " prop on your route.")), i.createElement(i.Fragment, null, i.createElement("h2", null, "Unexpected Application Error!"), i.createElement("h3", { style: { fontStyle: "italic" } }, t), a ? i.createElement("pre", { style: l }, a) : null, p);
}
i.createContext(null);
var tt = i.createElement(et, null), nt = class extends i.Component {
  constructor(e) {
    super(e), this.state = { location: e.location, revalidation: e.revalidation, error: e.error };
  }
  static getDerivedStateFromError(e) {
    return { error: e };
  }
  static getDerivedStateFromProps(e, t) {
    return t.location !== e.location || t.revalidation !== "idle" && e.revalidation === "idle" ? { error: e.error, location: e.location, revalidation: e.revalidation } : { error: e.error !== void 0 ? e.error : t.error, location: t.location, revalidation: e.revalidation || t.revalidation };
  }
  componentDidCatch(e, t) {
    console.error("React Router caught the following error during render", e, t);
  }
  render() {
    return this.state.error !== void 0 ? i.createElement(I.Provider, { value: this.props.routeContext }, i.createElement(se.Provider, { value: this.state.error, children: this.props.component })) : this.props.children;
  }
};
function rt({ routeContext: e, match: t, children: a }) {
  let n = i.useContext(Y);
  return n && n.static && n.staticContext && (t.route.errorElement || t.route.ErrorBoundary) && (n.staticContext._deepestRenderedBoundaryId = t.route.id), i.createElement(I.Provider, { value: e }, a);
}
function ce(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function he(e) {
  let t = function(n) {
    let l = i.useContext(I);
    return T(l, ce(n)), l;
  }(e), a = t.matches[t.matches.length - 1];
  return T(a.route.id, `${e} can only be used on routes that contain a unique "id"`), a.route.id;
}
var we = {};
function be(e, t, a) {
  t || we[e] || (we[e] = !0, O(!1, a));
}
function yt({ basename: e, children: t, initialEntries: a, initialIndex: n }) {
  let l = i.useRef();
  l.current == null && (l.current = We({ initialEntries: a, initialIndex: n, v5Compat: !0 }));
  let o = l.current, [p, c] = i.useState({ action: o.action, location: o.location }), r = i.useCallback((h) => {
    i.startTransition(() => c(h));
  }, [c]);
  return i.useLayoutEffect(() => o.listen(r), [o, r]), i.createElement(ot, { basename: e, children: t, location: p.location, navigationType: p.action, navigator: o });
}
function at(e) {
  T(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.");
}
function ot({ basename: e = "/", children: t = null, location: a, navigationType: n = "POP", navigator: l, static: o = !1 }) {
  T(!G(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
  let p = e.replace(/^\/*/, "/"), c = i.useMemo(() => ({ basename: p, navigator: l, static: o, future: {} }), [p, l, o]);
  typeof a == "string" && (a = H(a));
  let { pathname: r = "/", search: h = "", hash: d = "", state: u = null, key: s = "default" } = a, v = i.useMemo(() => {
    let m = B(r, p);
    return m == null ? null : { location: { pathname: m, search: h, hash: d, state: u, key: s }, navigationType: n };
  }, [p, r, h, d, u, s, n]);
  return O(v != null, `<Router basename="${p}"> is not able to match the URL "${r}${h}${d}" because it does not start with the basename, so the <Router> won't render anything.`), v == null ? null : i.createElement(U.Provider, { value: c }, i.createElement(q.Provider, { children: t, value: v }));
}
function gt({ children: e, location: t }) {
  return Pe(ue(e), t);
}
function ue(e, t = []) {
  let a = [];
  return i.Children.forEach(e, (n, l) => {
    if (!i.isValidElement(n)) return;
    let o = [...t, l];
    if (n.type === i.Fragment) return void a.push.apply(a, ue(n.props.children, o));
    T(n.type === at, `[${typeof n.type == "string" ? n.type : n.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`), T(!n.props.index || !n.props.children, "An index route cannot have child routes.");
    let p = { id: n.props.id || o.join("-"), caseSensitive: n.props.caseSensitive, element: n.props.element, Component: n.props.Component, index: n.props.index, path: n.props.path, loader: n.props.loader, action: n.props.action, hydrateFallbackElement: n.props.hydrateFallbackElement, HydrateFallback: n.props.HydrateFallback, errorElement: n.props.errorElement, ErrorBoundary: n.props.ErrorBoundary, hasErrorBoundary: n.props.hasErrorBoundary === !0 || n.props.ErrorBoundary != null || n.props.errorElement != null, shouldRevalidate: n.props.shouldRevalidate, handle: n.props.handle, lazy: n.props.lazy };
    n.props.children && (p.children = ue(n.props.children, o)), a.push(p);
  }), a;
}
i.memo(function({ routes: e, future: t, state: a }) {
  return Pe(e, void 0, a, t);
});
var te = "get", ne = "application/x-www-form-urlencoded";
function Z(e) {
  return e != null && typeof e.tagName == "string";
}
var ee = null, it = /* @__PURE__ */ new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function le(e) {
  return e == null || it.has(e) ? e : (O(!1, `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ne}"`), null);
}
function lt(e, t) {
  let a, n, l, o, p;
  if (Z(c = e) && c.tagName.toLowerCase() === "form") {
    let r = e.getAttribute("action");
    n = r ? B(r, t) : null, a = e.getAttribute("method") || te, l = le(e.getAttribute("enctype")) || ne, o = new FormData(e);
  } else if (function(r) {
    return Z(r) && r.tagName.toLowerCase() === "button";
  }(e) || function(r) {
    return Z(r) && r.tagName.toLowerCase() === "input";
  }(e) && (e.type === "submit" || e.type === "image")) {
    let r = e.form;
    if (r == null) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let h = e.getAttribute("formaction") || r.getAttribute("action");
    if (n = h ? B(h, t) : null, a = e.getAttribute("formmethod") || r.getAttribute("method") || te, l = le(e.getAttribute("formenctype")) || le(r.getAttribute("enctype")) || ne, o = new FormData(r, e), !function() {
      if (ee === null) try {
        new FormData(document.createElement("form"), 0), ee = !1;
      } catch {
        ee = !0;
      }
      return ee;
    }()) {
      let { name: d, type: u, value: s } = e;
      if (u === "image") {
        let v = d ? `${d}.` : "";
        o.append(`${v}x`, "0"), o.append(`${v}y`, "0");
      } else d && o.append(d, s);
    }
  } else {
    if (Z(e)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
    a = te, n = null, l = ne, p = e;
  }
  var c;
  return o && l === "text/plain" && (p = o, o = void 0), { action: n, method: a.toLowerCase(), encType: l, formData: o, body: p };
}
function pe(e, t) {
  if (e === !1 || e == null) throw new Error(t);
}
function ut(e) {
  return e != null && (e.href == null ? e.rel === "preload" && typeof e.imageSrcSet == "string" && typeof e.imageSizes == "string" : typeof e.rel == "string" && typeof e.href == "string");
}
async function st(e, t, a) {
  return function(n, l) {
    let o = /* @__PURE__ */ new Set();
    return new Set(l), n.reduce((p, c) => {
      let r = JSON.stringify(function(h) {
        let d = {}, u = Object.keys(h).sort();
        for (let s of u) d[s] = h[s];
        return d;
      }(c));
      return o.has(r) || (o.add(r), p.push({ key: r, link: c })), p;
    }, []);
  }((await Promise.all(e.map(async (n) => {
    let l = t.routes[n.route.id];
    if (l) {
      let o = await async function(p, c) {
        if (p.id in c) return c[p.id];
        try {
          let r = await import(p.module);
          return c[p.id] = r, r;
        } catch (r) {
          return console.error(`Error loading route module \`${p.module}\`, reloading page...`), console.error(r), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {
          });
        }
      }(l, a);
      return o.links ? o.links() : [];
    }
    return [];
  }))).flat(1).filter(ut).filter((n) => n.rel === "stylesheet" || n.rel === "preload").map((n) => n.rel === "stylesheet" ? { ...n, rel: "prefetch", as: "style" } : { ...n, rel: "prefetch" }));
}
function xe(e, t, a, n, l, o) {
  let p = (r, h) => !a[h] || r.route.id !== a[h].route.id, c = (r, h) => {
    var d;
    return a[h].pathname !== r.pathname || ((d = a[h].route.path) == null ? void 0 : d.endsWith("*")) && a[h].params["*"] !== r.params["*"];
  };
  return o === "assets" ? t.filter((r, h) => p(r, h) || c(r, h)) : o === "data" ? t.filter((r, h) => {
    var u;
    let d = n.routes[r.route.id];
    if (!d || !d.hasLoader) return !1;
    if (p(r, h) || c(r, h)) return !0;
    if (r.route.shouldRevalidate) {
      let s = r.route.shouldRevalidate({ currentUrl: new URL(l.pathname + l.search + l.hash, window.origin), currentParams: ((u = a[0]) == null ? void 0 : u.params) || {}, nextUrl: new URL(e, window.origin), nextParams: r.params, defaultShouldRevalidate: !0 });
      if (typeof s == "boolean") return s;
    }
    return !0;
  }) : [];
}
function ct(e, t, { includeHydrateFallback: a } = {}) {
  return n = e.map((l) => {
    let o = t.routes[l.route.id];
    if (!o) return [];
    let p = [o.module];
    return o.clientActionModule && (p = p.concat(o.clientActionModule)), o.clientLoaderModule && (p = p.concat(o.clientLoaderModule)), a && o.hydrateFallbackModule && (p = p.concat(o.hydrateFallbackModule)), o.imports && (p = p.concat(o.imports)), p;
  }).flat(1), [...new Set(n)];
  var n;
}
function Ae() {
  let e = i.useContext(Y);
  return pe(e, "You must render this element inside a <DataRouterContext.Provider> element"), e;
}
var de = i.createContext(void 0);
function Ee() {
  let e = i.useContext(de);
  return pe(e, "You must render this element inside a <HydratedRouter> element"), e;
}
function K(e, t) {
  return (a) => {
    e && e(a), a.defaultPrevented || t(a);
  };
}
function ht({ page: e, ...t }) {
  let { router: a } = Ae(), n = i.useMemo(() => Re(a.routes, e, a.basename), [a.routes, e, a.basename]);
  return n ? i.createElement(pt, { page: e, matches: n, ...t }) : null;
}
function pt({ page: e, matches: t, ...a }) {
  let n = J(), { manifest: l, routeModules: o } = Ee(), { basename: p } = Ae(), { loaderData: c, matches: r } = function() {
    let m = i.useContext(oe);
    return pe(m, "You must render this element inside a <DataRouterStateContext.Provider> element"), m;
  }(), h = i.useMemo(() => xe(e, t, r, l, n, "data"), [e, t, r, l, n]), d = i.useMemo(() => xe(e, t, r, l, n, "assets"), [e, t, r, l, n]), u = i.useMemo(() => {
    if (e === n.pathname + n.search + n.hash) return [];
    let m = /* @__PURE__ */ new Set(), x = !1;
    if (t.forEach((b) => {
      var f;
      let y = l.routes[b.route.id];
      y && y.hasLoader && (!h.some(($) => $.route.id === b.route.id) && b.route.id in c && ((f = o[b.route.id]) != null && f.shouldRevalidate) || y.hasClientLoader ? x = !0 : m.add(b.route.id));
    }), m.size === 0) return [];
    let g = function(b, y) {
      let f = typeof b == "string" ? new URL(b, typeof window > "u" ? "server://singlefetch/" : window.location.origin) : b;
      return f.pathname === "/" ? f.pathname = "_root.data" : y && B(f.pathname, y) === "/" ? f.pathname = `${y.replace(/\/$/, "")}/_root.data` : f.pathname = `${f.pathname.replace(/\/$/, "")}.data`, f;
    }(e, p);
    return x && m.size > 0 && g.searchParams.set("_routes", t.filter((b) => m.has(b.route.id)).map((b) => b.route.id).join(",")), [g.pathname + g.search];
  }, [p, c, n, l, h, t, e, o]), s = i.useMemo(() => ct(d, l), [d, l]), v = function(m) {
    let { manifest: x, routeModules: g } = Ee(), [b, y] = i.useState([]);
    return i.useEffect(() => {
      let f = !1;
      return st(m, x, g).then(($) => {
        f || y($);
      }), () => {
        f = !0;
      };
    }, [m, x, g]), b;
  }(d);
  return i.createElement(i.Fragment, null, u.map((m) => i.createElement("link", { key: m, rel: "prefetch", as: "fetch", href: m, ...a })), s.map((m) => i.createElement("link", { key: m, rel: "modulepreload", href: m, ...a })), v.map(({ key: m, link: x }) => i.createElement("link", { key: m, ...x })));
}
function dt(...e) {
  return (t) => {
    e.forEach((a) => {
      typeof a == "function" ? a(t) : a != null && (a.current = t);
    });
  };
}
de.displayName = "FrameworkContext";
var Ne = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0;
try {
  Ne && (window.__reactRouterVersion = "7.5.0");
} catch {
}
var Me = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Oe = i.forwardRef(function({ onClick: e, discover: t = "render", prefetch: a = "none", relative: n, reloadDocument: l, replace: o, state: p, target: c, to: r, preventScrollReset: h, viewTransition: d, ...u }, s) {
  let v, { basename: m } = i.useContext(U), x = typeof r == "string" && Me.test(r), g = !1;
  if (typeof r == "string" && x && (v = r, Ne)) try {
    let w = new URL(window.location.href), P = r.startsWith("//") ? new URL(w.protocol + r) : new URL(r), L = B(P.pathname, m);
    P.origin === w.origin && L != null ? r = L + P.search + P.hash : g = !0;
  } catch {
    O(!1, `<Link to="${r}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`);
  }
  let b = function(w, { relative: P } = {}) {
    T(G(), "useHref() may be used only in the context of a <Router> component.");
    let { basename: L, navigator: k } = i.useContext(U), { hash: E, pathname: S, search: A } = V(w, { relative: P }), N = S;
    return L !== "/" && (N = S === "/" ? L : j([L, S])), k.createHref({ pathname: N, search: A, hash: E });
  }(r, { relative: n }), [y, f, $] = function(w, P) {
    let L = i.useContext(de), [k, E] = i.useState(!1), [S, A] = i.useState(!1), { onFocus: N, onBlur: F, onMouseEnter: D, onMouseLeave: _, onTouchStart: W } = P, M = i.useRef(null);
    i.useEffect(() => {
      if (w === "render" && A(!0), w === "viewport") {
        let X = new IntersectionObserver((De) => {
          De.forEach((Ue) => {
            A(Ue.isIntersecting);
          });
        }, { threshold: 0.5 });
        return M.current && X.observe(M.current), () => {
          X.disconnect();
        };
      }
    }, [w]), i.useEffect(() => {
      if (k) {
        let X = setTimeout(() => {
          A(!0);
        }, 100);
        return () => {
          clearTimeout(X);
        };
      }
    }, [k]);
    let z = () => {
      E(!0);
    }, me = () => {
      E(!1), A(!1);
    };
    return L ? w !== "intent" ? [S, M, {}] : [S, M, { onFocus: K(N, z), onBlur: K(F, me), onMouseEnter: K(D, z), onMouseLeave: K(_, me), onTouchStart: K(W, z) }] : [!1, M, {}];
  }(a, u), C = function(w, { target: P, replace: L, state: k, preventScrollReset: E, relative: S, viewTransition: A } = {}) {
    let N = Ze(), F = J(), D = V(w, { relative: S });
    return i.useCallback((_) => {
      if (function(W, M) {
        return !(W.button !== 0 || M && M !== "_self" || function(z) {
          return !!(z.metaKey || z.altKey || z.ctrlKey || z.shiftKey);
        }(W));
      }(_, P)) {
        _.preventDefault();
        let W = L !== void 0 ? L : re(F) === re(D);
        N(w, { replace: W, state: k, preventScrollReset: E, relative: S, viewTransition: A });
      }
    }, [F, N, D, L, k, P, w, E, S, A]);
  }(r, { replace: o, state: p, target: c, preventScrollReset: h, relative: n, viewTransition: d }), R = i.createElement("a", { ...u, ...$, href: v || b, onClick: g || l ? e : function(w) {
    e && e(w), w.defaultPrevented || C(w);
  }, ref: dt(s, f), target: c, "data-discover": x || t !== "render" ? void 0 : "true" });
  return y && !x ? i.createElement(i.Fragment, null, R, i.createElement(ht, { page: b })) : R;
});
Oe.displayName = "Link";
var mt = i.forwardRef(function({ "aria-current": e = "page", caseSensitive: t = !1, className: a = "", end: n = !1, style: l, to: o, viewTransition: p, children: c, ...r }, h) {
  let d = V(o, { relative: r.relative }), u = J(), s = i.useContext(oe), { navigator: v, basename: m } = i.useContext(U), x = s != null && function(k, E = {}) {
    let S = i.useContext(Te);
    T(S != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
    let { basename: A } = Fe("useViewTransitionState"), N = V(k, { relative: E.relative });
    if (!S.isTransitioning) return !1;
    let F = B(S.currentLocation.pathname, A) || S.currentLocation.pathname, D = B(S.nextLocation.pathname, A) || S.nextLocation.pathname;
    return ae(N.pathname, D) != null || ae(N.pathname, F) != null;
  }(d) && p === !0, g = v.encodeLocation ? v.encodeLocation(d).pathname : d.pathname, b = u.pathname, y = s && s.navigation && s.navigation.location ? s.navigation.location.pathname : null;
  t || (b = b.toLowerCase(), y = y ? y.toLowerCase() : null, g = g.toLowerCase()), y && m && (y = B(y, m) || y);
  const f = g !== "/" && g.endsWith("/") ? g.length - 1 : g.length;
  let $, C = b === g || !n && b.startsWith(g) && b.charAt(f) === "/", R = y != null && (y === g || !n && y.startsWith(g) && y.charAt(g.length) === "/"), w = { isActive: C, isPending: R, isTransitioning: x }, P = C ? e : void 0;
  $ = typeof a == "function" ? a(w) : [a, C ? "active" : null, R ? "pending" : null, x ? "transitioning" : null].filter(Boolean).join(" ");
  let L = typeof l == "function" ? l(w) : l;
  return i.createElement(Oe, { ...r, "aria-current": P, className: $, ref: h, style: L, to: o, viewTransition: p }, typeof c == "function" ? c(w) : c);
});
function Fe(e) {
  let t = i.useContext(Y);
  return T(t, function(a) {
    return `${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
  }(e)), t;
}
mt.displayName = "NavLink", i.forwardRef(({ discover: e = "render", fetcherKey: t, navigate: a, reloadDocument: n, replace: l, state: o, method: p = te, action: c, onSubmit: r, relative: h, preventScrollReset: d, viewTransition: u, ...s }, v) => {
  let m = function() {
    let { router: y } = Fe("useSubmit"), { basename: f } = i.useContext(U), $ = he("useRouteId");
    return i.useCallback(async (C, R = {}) => {
      let { action: w, method: P, encType: L, formData: k, body: E } = lt(C, f);
      if (R.navigate === !1) {
        let S = R.fetcherKey || vt();
        await y.fetch(S, $, R.action || w, { preventScrollReset: R.preventScrollReset, formData: k, body: E, formMethod: R.method || P, formEncType: R.encType || L, flushSync: R.flushSync });
      } else await y.navigate(R.action || w, { preventScrollReset: R.preventScrollReset, formData: k, body: E, formMethod: R.method || P, formEncType: R.encType || L, replace: R.replace, state: R.state, fromRouteId: $, flushSync: R.flushSync, viewTransition: R.viewTransition });
    }, [y, f, $]);
  }(), x = function(y, { relative: f } = {}) {
    let { basename: $ } = i.useContext(U), C = i.useContext(I);
    T(C, "useFormAction must be used inside a RouteContext");
    let [R] = C.matches.slice(-1), w = { ...V(y || ".", { relative: f }) }, P = J();
    if (y == null) {
      w.search = P.search;
      let L = new URLSearchParams(w.search), k = L.getAll("index");
      if (k.some((E) => E === "")) {
        L.delete("index"), k.filter((S) => S).forEach((S) => L.append("index", S));
        let E = L.toString();
        w.search = E ? `?${E}` : "";
      }
    }
    return y && y !== "." || !R.route.index || (w.search = w.search ? w.search.replace(/^\?/, "?index&") : "?index"), $ !== "/" && (w.pathname = w.pathname === "/" ? $ : j([$, w.pathname])), re(w);
  }(c, { relative: h }), g = p.toLowerCase() === "get" ? "get" : "post", b = typeof c == "string" && Me.test(c);
  return i.createElement("form", { ref: v, method: g, action: x, onSubmit: n ? r : (y) => {
    if (r && r(y), y.defaultPrevented) return;
    y.preventDefault();
    let f = y.nativeEvent.submitter, $ = (f == null ? void 0 : f.getAttribute("formmethod")) || p;
    m(f || y.currentTarget, { fetcherKey: t, method: $, navigate: a, replace: l, state: o, relative: h, preventScrollReset: d, viewTransition: u });
  }, ...s, "data-discover": b || e !== "render" ? void 0 : "true" });
}).displayName = "Form";
var ft = 0, vt = () => `__${String(++ft)}__`;
new TextEncoder();
export {
  Oe as L,
  yt as M,
  mt as N,
  gt as R,
  at as a
};
//# sourceMappingURL=chunk-KNED5TY2-DhCXmkLz.js.map
