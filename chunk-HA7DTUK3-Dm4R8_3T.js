import * as l from "react";
var fe, Q = {};
/**
 * react-router v7.2.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Ue(e = {}) {
  let t, { initialEntries: r = ["/"], initialIndex: n, v5Compat: i = !1 } = e;
  t = r.map((s, m) => d(s, typeof s == "string" ? null : s.state, m === 0 ? "default" : void 0));
  let o = a(n ?? t.length - 1), p = "POP", c = null;
  function a(s) {
    return Math.min(Math.max(s, 0), t.length - 1);
  }
  function h() {
    return t[o];
  }
  function d(s, m = null, f) {
    let E = function(v, b, g = null, y) {
      return { pathname: typeof v == "string" ? v : v.pathname, search: "", hash: "", ...typeof b == "string" ? H(b) : b, state: g, key: b && b.key || y || We() };
    }(t ? h().pathname : "/", s, m, f);
    return O(E.pathname.charAt(0) === "/", `relative pathnames are not supported in memory history: ${JSON.stringify(s)}`), E;
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
    let m = typeof s == "string" ? H(s) : s;
    return { pathname: m.pathname || "", search: m.search || "", hash: m.hash || "" };
  }, push(s, m) {
    p = "PUSH";
    let f = d(s, m);
    o += 1, t.splice(o, t.length, f), i && c && c({ action: p, location: f, delta: 1 });
  }, replace(s, m) {
    p = "REPLACE";
    let f = d(s, m);
    t[o] = f, i && c && c({ action: p, location: f, delta: 0 });
  }, go(s) {
    p = "POP";
    let m = a(o + s), f = t[m];
    o = m, c && c({ action: p, location: f, delta: s });
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
function We() {
  return Math.random().toString(36).substring(2, 10);
}
function re({ pathname: e = "/", search: t = "", hash: r = "" }) {
  return t && t !== "?" && (e += t.charAt(0) === "?" ? t : "?" + t), r && r !== "#" && (e += r.charAt(0) === "#" ? r : "#" + r), e;
}
function H(e) {
  let t = {};
  if (e) {
    let r = e.indexOf("#");
    r >= 0 && (t.hash = e.substring(r), e = e.substring(0, r));
    let n = e.indexOf("?");
    n >= 0 && (t.search = e.substring(n), e = e.substring(0, n)), e && (t.pathname = e);
  }
  return t;
}
function Re(e, t, r = "/") {
  return function(n, i, o, p) {
    let c = typeof i == "string" ? H(i) : i, a = z(c.pathname || "/", o);
    if (a == null) return null;
    let h = Ce(n);
    (function(u) {
      u.sort((s, m) => s.score !== m.score ? m.score - s.score : function(f, E) {
        return f.length === E.length && f.slice(0, -1).every((b, g) => b === E[g]) ? f[f.length - 1] - E[E.length - 1] : 0;
      }(s.routesMeta.map((f) => f.childrenIndex), m.routesMeta.map((f) => f.childrenIndex)));
    })(h);
    let d = null;
    for (let u = 0; d == null && u < h.length; ++u) {
      let s = Ke(a);
      d = Ye(h[u], s, p);
    }
    return d;
  }(e, t, r, !1);
}
function Ce(e, t = [], r = [], n = "") {
  let i = (o, p, c) => {
    let a = { relativePath: c === void 0 ? o.path || "" : c, caseSensitive: o.caseSensitive === !0, childrenIndex: p, route: o };
    a.relativePath.startsWith("/") && (T(a.relativePath.startsWith(n), `Absolute route path "${a.relativePath}" nested under path "${n}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`), a.relativePath = a.relativePath.slice(n.length));
    let h = B([n, a.relativePath]), d = r.concat(a);
    o.children && o.children.length > 0 && (T(o.index !== !0, `Index routes must not have child routes. Please remove all child routes from route path "${h}".`), Ce(o.children, t, d, h)), (o.path != null || o.index) && t.push({ path: h, score: Je(h, o.index), routesMeta: d });
  };
  return e.forEach((o, p) => {
    var c;
    if (o.path !== "" && ((c = o.path) != null && c.includes("?"))) for (let a of Se(o.path)) i(o, p, a);
    else i(o, p);
  }), t;
}
function Se(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [r, ...n] = t, i = r.endsWith("?"), o = r.replace(/\?$/, "");
  if (n.length === 0) return i ? [o, ""] : [o];
  let p = Se(n.join("/")), c = [];
  return c.push(...p.map((a) => a === "" ? o : [o, a].join("/"))), i && c.push(...p), c.map((a) => e.startsWith("/") && a === "" ? "/" : a);
}
(function() {
  if (fe) return Q;
  fe = 1, Object.defineProperty(Q, "__esModule", { value: !0 }), Q.parse = function(h, d) {
    const u = new o(), s = h.length;
    if (s < 2) return u;
    const m = (d == null ? void 0 : d.decode) || a;
    let f = 0;
    do {
      const E = h.indexOf("=", f);
      if (E === -1) break;
      const v = h.indexOf(";", f), b = v === -1 ? s : v;
      if (E > b) {
        f = h.lastIndexOf(";", E - 1) + 1;
        continue;
      }
      const g = p(h, f, E), y = c(h, E, g), k = h.slice(g, y);
      if (u[k] === void 0) {
        let C = p(h, E + 1, b), R = c(h, b, C);
        const w = m(h.slice(C, R));
        u[k] = w;
      }
      f = b + 1;
    } while (f < s);
    return u;
  }, Q.serialize = function(h, d, u) {
    const s = (u == null ? void 0 : u.encode) || encodeURIComponent;
    if (!e.test(h)) throw new TypeError(`argument name is invalid: ${h}`);
    const m = s(d);
    if (!t.test(m)) throw new TypeError(`argument val is invalid: ${d}`);
    let f = h + "=" + m;
    if (!u) return f;
    if (u.maxAge !== void 0) {
      if (!Number.isInteger(u.maxAge)) throw new TypeError(`option maxAge is invalid: ${u.maxAge}`);
      f += "; Max-Age=" + u.maxAge;
    }
    if (u.domain) {
      if (!r.test(u.domain)) throw new TypeError(`option domain is invalid: ${u.domain}`);
      f += "; Domain=" + u.domain;
    }
    if (u.path) {
      if (!n.test(u.path)) throw new TypeError(`option path is invalid: ${u.path}`);
      f += "; Path=" + u.path;
    }
    if (u.expires) {
      if (!function(E) {
        return i.call(E) === "[object Date]";
      }(u.expires) || !Number.isFinite(u.expires.valueOf())) throw new TypeError(`option expires is invalid: ${u.expires}`);
      f += "; Expires=" + u.expires.toUTCString();
    }
    if (u.httpOnly && (f += "; HttpOnly"), u.secure && (f += "; Secure"), u.partitioned && (f += "; Partitioned"), u.priority)
      switch (typeof u.priority == "string" ? u.priority.toLowerCase() : void 0) {
        case "low":
          f += "; Priority=Low";
          break;
        case "medium":
          f += "; Priority=Medium";
          break;
        case "high":
          f += "; Priority=High";
          break;
        default:
          throw new TypeError(`option priority is invalid: ${u.priority}`);
      }
    if (u.sameSite)
      switch (typeof u.sameSite == "string" ? u.sameSite.toLowerCase() : u.sameSite) {
        case !0:
        case "strict":
          f += "; SameSite=Strict";
          break;
        case "lax":
          f += "; SameSite=Lax";
          break;
        case "none":
          f += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${u.sameSite}`);
      }
    return f;
  };
  const e = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/, t = /^[\u0021-\u003A\u003C-\u007E]*$/, r = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i, n = /^[\u0020-\u003A\u003D-\u007E]*$/, i = Object.prototype.toString, o = (() => {
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
  function a(h) {
    if (h.indexOf("%") === -1) return h;
    try {
      return decodeURIComponent(h);
    } catch {
      return h;
    }
  }
})();
var Be = /^:[\w-]+$/, je = 3, Ie = 2, ze = 1, _e = 10, He = -2, ve = (e) => e === "*";
function Je(e, t) {
  let r = e.split("/"), n = r.length;
  return r.some(ve) && (n += He), t && (n += Ie), r.filter((i) => !ve(i)).reduce((i, o) => i + (Be.test(o) ? je : o === "" ? ze : _e), n);
}
function Ye(e, t, r = !1) {
  let { routesMeta: n } = e, i = {}, o = "/", p = [];
  for (let c = 0; c < n.length; ++c) {
    let a = n[c], h = c === n.length - 1, d = o === "/" ? t : t.slice(o.length) || "/", u = ae({ path: a.relativePath, caseSensitive: a.caseSensitive, end: h }, d), s = a.route;
    if (!u && h && r && !n[n.length - 1].route.index && (u = ae({ path: a.relativePath, caseSensitive: a.caseSensitive, end: !1 }, d)), !u) return null;
    Object.assign(i, u.params), p.push({ params: i, pathname: B([o, u.pathname]), pathnameBase: Ve(B([o, u.pathnameBase])), route: s }), u.pathnameBase !== "/" && (o = B([o, u.pathnameBase]));
  }
  return p;
}
function ae(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [r, n] = function(a, h = !1, d = !0) {
    O(a === "*" || !a.endsWith("*") || a.endsWith("/*"), `Route path "${a}" will be treated as if it were "${a.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/, "/*")}".`);
    let u = [], s = "^" + a.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (f, E, v) => (u.push({ paramName: E, isOptional: v != null }), v ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return a.endsWith("*") ? (u.push({ paramName: "*" }), s += a === "*" || a === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : d ? s += "\\/*$" : a !== "" && a !== "/" && (s += "(?:(?=\\/|$))"), [new RegExp(s, h ? void 0 : "i"), u];
  }(e.path, e.caseSensitive, e.end), i = t.match(r);
  if (!i) return null;
  let o = i[0], p = o.replace(/(.)\/+$/, "$1"), c = i.slice(1);
  return { params: n.reduce((a, { paramName: h, isOptional: d }, u) => {
    if (h === "*") {
      let m = c[u] || "";
      p = o.slice(0, o.length - m.length).replace(/(.)\/+$/, "$1");
    }
    const s = c[u];
    return a[h] = d && !s ? void 0 : (s || "").replace(/%2F/g, "/"), a;
  }, {}), pathname: o, pathnameBase: p, pattern: e };
}
function Ke(e) {
  try {
    return e.split("/").map((t) => decodeURIComponent(t).replace(/\//g, "%2F")).join("/");
  } catch (t) {
    return O(!1, `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`), e;
  }
}
function z(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let r = t.endsWith("/") ? t.length - 1 : t.length, n = e.charAt(r);
  return n && n !== "/" ? null : e.slice(r) || "/";
}
function ie(e, t, r, n) {
  return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(n)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function $e(e) {
  let t = function(r) {
    return r.filter((n, i) => i === 0 || n.route.path && n.route.path.length > 0);
  }(e);
  return t.map((r, n) => n === t.length - 1 ? r.pathname : r.pathnameBase);
}
function Le(e, t, r, n = !1) {
  let i;
  typeof e == "string" ? i = H(e) : (i = { ...e }, T(!i.pathname || !i.pathname.includes("?"), ie("?", "pathname", "search", i)), T(!i.pathname || !i.pathname.includes("#"), ie("#", "pathname", "hash", i)), T(!i.search || !i.search.includes("#"), ie("#", "search", "hash", i)));
  let o, p = e === "" || i.pathname === "", c = p ? "/" : i.pathname;
  if (c == null) o = r;
  else {
    let u = t.length - 1;
    if (!n && c.startsWith("..")) {
      let s = c.split("/");
      for (; s[0] === ".."; ) s.shift(), u -= 1;
      i.pathname = s.join("/");
    }
    o = u >= 0 ? t[u] : "/";
  }
  let a = function(u, s = "/") {
    let { pathname: m, search: f = "", hash: E = "" } = typeof u == "string" ? H(u) : u;
    return { pathname: m ? m.startsWith("/") ? m : function(b, g) {
      let y = g.replace(/\/+$/, "").split("/");
      return b.split("/").forEach((k) => {
        k === ".." ? y.length > 1 && y.pop() : k !== "." && y.push(k);
      }), y.length > 1 ? y.join("/") : "/";
    }(m, s) : s, search: qe(f), hash: Ge(E) };
  }(i, o), h = c && c !== "/" && c.endsWith("/"), d = (p || c === ".") && r.endsWith("/");
  return a.pathname.endsWith("/") || !h && !d || (a.pathname += "/"), a;
}
var B = (e) => e.join("/").replace(/\/\/+/g, "/"), Ve = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"), qe = (e) => e && e !== "?" ? e.startsWith("?") ? e : "?" + e : "", Ge = (e) => e && e !== "#" ? e.startsWith("#") ? e : "#" + e : "", ke = ["POST", "PUT", "PATCH", "DELETE"];
new Set(ke);
var Xe = ["GET", ...ke];
new Set(Xe);
var Y = l.createContext(null);
Y.displayName = "DataRouter";
var oe = l.createContext(null);
oe.displayName = "DataRouterState";
var Te = l.createContext({ isTransitioning: !1 });
Te.displayName = "ViewTransition", l.createContext(/* @__PURE__ */ new Map()).displayName = "Fetchers", l.createContext(null).displayName = "Await";
var U = l.createContext(null);
U.displayName = "Navigation";
var q = l.createContext(null);
q.displayName = "Location";
var j = l.createContext({ outlet: null, matches: [], isDataRoute: !1 });
j.displayName = "Route";
var se = l.createContext(null);
function G() {
  return l.useContext(q) != null;
}
function J() {
  return T(G(), "useLocation() may be used only in the context of a <Router> component."), l.useContext(q).location;
}
se.displayName = "RouteError";
var ye = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function ge(e) {
  l.useContext(U).static || l.useLayoutEffect(e);
}
function Qe() {
  let { isDataRoute: e } = l.useContext(j);
  return e ? function() {
    let { router: t } = function(i) {
      let o = l.useContext(Y);
      return T(o, ce(i)), o;
    }("useNavigate"), r = he("useNavigate"), n = l.useRef(!1);
    return ge(() => {
      n.current = !0;
    }), l.useCallback(async (i, o = {}) => {
      O(n.current, ye), n.current && (typeof i == "number" ? t.navigate(i) : await t.navigate(i, { fromRouteId: r, ...o }));
    }, [t, r]);
  }() : function() {
    T(G(), "useNavigate() may be used only in the context of a <Router> component.");
    let t = l.useContext(Y), { basename: r, navigator: n } = l.useContext(U), { matches: i } = l.useContext(j), { pathname: o } = J(), p = JSON.stringify($e(i)), c = l.useRef(!1);
    return ge(() => {
      c.current = !0;
    }), l.useCallback((a, h = {}) => {
      if (O(c.current, ye), !c.current) return;
      if (typeof a == "number") return void n.go(a);
      let d = Le(a, JSON.parse(p), o, h.relative === "path");
      t == null && r !== "/" && (d.pathname = d.pathname === "/" ? r : B([r, d.pathname])), (h.replace ? n.replace : n.push)(d, h.state, h);
    }, [r, n, p, o, t]);
  }();
}
function V(e, { relative: t } = {}) {
  let { matches: r } = l.useContext(j), { pathname: n } = J(), i = JSON.stringify($e(r));
  return l.useMemo(() => Le(e, JSON.parse(i), n, t === "path"), [e, i, n, t]);
}
function Pe(e, t, r, n) {
  var g;
  T(G(), "useRoutes() may be used only in the context of a <Router> component.");
  let { navigator: i, static: o } = l.useContext(U), { matches: p } = l.useContext(j), c = p[p.length - 1], a = c ? c.params : {}, h = c ? c.pathname : "/", d = c ? c.pathnameBase : "/", u = c && c.route;
  {
    let y = u && u.path || "";
    be(h, !u || y.endsWith("*") || y.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${y}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${y}"> to <Route path="${y === "/" ? "*" : `${y}/*`}">.`);
  }
  let s, m = J();
  if (t) {
    let y = typeof t == "string" ? H(t) : t;
    T(d === "/" || ((g = y.pathname) == null ? void 0 : g.startsWith(d)), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${d}" but pathname "${y.pathname}" was given in the \`location\` prop.`), s = y;
  } else s = m;
  let f = s.pathname || "/", E = f;
  if (d !== "/") {
    let y = d.replace(/^\//, "").split("/");
    E = "/" + f.replace(/^\//, "").split("/").slice(y.length).join("/");
  }
  let v = !o && r && r.matches && r.matches.length > 0 ? r.matches : Re(e, { pathname: E });
  O(u || v != null, `No routes matched location "${s.pathname}${s.search}${s.hash}" `), O(v == null || v[v.length - 1].route.element !== void 0 || v[v.length - 1].route.Component !== void 0 || v[v.length - 1].route.lazy !== void 0, `Matched leaf route at location "${s.pathname}${s.search}${s.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
  let b = function(y, k = [], C = null) {
    if (y == null) {
      if (!C) return null;
      if (C.errors) y = C.matches;
      else {
        if (k.length !== 0 || C.initialized || !(C.matches.length > 0)) return null;
        y = C.matches;
      }
    }
    let R = y, w = C == null ? void 0 : C.errors;
    if (w != null) {
      let L = R.findIndex((x) => x.route.id && (w == null ? void 0 : w[x.route.id]) !== void 0);
      T(L >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(w).join(",")}`), R = R.slice(0, Math.min(R.length, L + 1));
    }
    let P = !1, $ = -1;
    if (C) for (let L = 0; L < R.length; L++) {
      let x = R[L];
      if ((x.route.HydrateFallback || x.route.hydrateFallbackElement) && ($ = L), x.route.id) {
        let { loaderData: S, errors: A } = C, N = x.route.loader && !S.hasOwnProperty(x.route.id) && (!A || A[x.route.id] === void 0);
        if (x.route.lazy || N) {
          P = !0, R = $ >= 0 ? R.slice(0, $ + 1) : [R[0]];
          break;
        }
      }
    }
    return R.reduceRight((L, x, S) => {
      let A, N = !1, F = null, D = null;
      C && (A = w && x.route.id ? w[x.route.id] : void 0, F = x.route.errorElement || et, P && ($ < 0 && S === 0 ? (be("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"), N = !0, D = null) : $ === S && (N = !0, D = x.route.hydrateFallbackElement || null)));
      let _ = k.concat(R.slice(0, S + 1)), W = () => {
        let M;
        return M = A ? F : N ? D : x.route.Component ? l.createElement(x.route.Component, null) : x.route.element ? x.route.element : L, l.createElement(nt, { match: x, routeContext: { outlet: L, matches: _, isDataRoute: C != null }, children: M });
      };
      return C && (x.route.ErrorBoundary || x.route.errorElement || S === 0) ? l.createElement(tt, { location: C.location, revalidation: C.revalidation, component: F, error: A, children: W(), routeContext: { outlet: null, matches: _, isDataRoute: !0 } }) : W();
    }, null);
  }(v && v.map((y) => Object.assign({}, y, { params: Object.assign({}, a, y.params), pathname: B([d, i.encodeLocation ? i.encodeLocation(y.pathname).pathname : y.pathname]), pathnameBase: y.pathnameBase === "/" ? d : B([d, i.encodeLocation ? i.encodeLocation(y.pathnameBase).pathname : y.pathnameBase]) })), p, r, n);
  return t && b ? l.createElement(q.Provider, { value: { location: { pathname: "/", search: "", hash: "", state: null, key: "default", ...s }, navigationType: "POP" } }, b) : b;
}
function Ze() {
  let e = function() {
    var d;
    let c = l.useContext(se), a = function(u) {
      let s = l.useContext(oe);
      return T(s, ce(u)), s;
    }("useRouteError"), h = he("useRouteError");
    return c !== void 0 ? c : (d = a.errors) == null ? void 0 : d[h];
  }(), t = function(c) {
    return c != null && typeof c.status == "number" && typeof c.statusText == "string" && typeof c.internal == "boolean" && "data" in c;
  }(e) ? `${e.status} ${e.statusText}` : e instanceof Error ? e.message : JSON.stringify(e), r = e instanceof Error ? e.stack : null, n = "rgba(200,200,200, 0.5)", i = { padding: "0.5rem", backgroundColor: n }, o = { padding: "2px 4px", backgroundColor: n }, p = null;
  return console.error("Error handled by React Router default ErrorBoundary:", e), p = l.createElement(l.Fragment, null, l.createElement("p", null, "💿 Hey developer 👋"), l.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", l.createElement("code", { style: o }, "ErrorBoundary"), " or", " ", l.createElement("code", { style: o }, "errorElement"), " prop on your route.")), l.createElement(l.Fragment, null, l.createElement("h2", null, "Unexpected Application Error!"), l.createElement("h3", { style: { fontStyle: "italic" } }, t), r ? l.createElement("pre", { style: i }, r) : null, p);
}
l.createContext(null);
var et = l.createElement(Ze, null), tt = class extends l.Component {
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
    return this.state.error !== void 0 ? l.createElement(j.Provider, { value: this.props.routeContext }, l.createElement(se.Provider, { value: this.state.error, children: this.props.component })) : this.props.children;
  }
};
function nt({ routeContext: e, match: t, children: r }) {
  let n = l.useContext(Y);
  return n && n.static && n.staticContext && (t.route.errorElement || t.route.ErrorBoundary) && (n.staticContext._deepestRenderedBoundaryId = t.route.id), l.createElement(j.Provider, { value: e }, r);
}
function ce(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function he(e) {
  let t = function(n) {
    let i = l.useContext(j);
    return T(i, ce(n)), i;
  }(e), r = t.matches[t.matches.length - 1];
  return T(r.route.id, `${e} can only be used on routes that contain a unique "id"`), r.route.id;
}
var we = {};
function be(e, t, r) {
  t || we[e] || (we[e] = !0, O(!1, r));
}
function vt({ basename: e, children: t, initialEntries: r, initialIndex: n }) {
  let i = l.useRef();
  i.current == null && (i.current = Ue({ initialEntries: r, initialIndex: n, v5Compat: !0 }));
  let o = i.current, [p, c] = l.useState({ action: o.action, location: o.location }), a = l.useCallback((h) => {
    l.startTransition(() => c(h));
  }, [c]);
  return l.useLayoutEffect(() => o.listen(a), [o, a]), l.createElement(at, { basename: e, children: t, location: p.location, navigationType: p.action, navigator: o });
}
function rt(e) {
  T(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.");
}
function at({ basename: e = "/", children: t = null, location: r, navigationType: n = "POP", navigator: i, static: o = !1 }) {
  T(!G(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
  let p = e.replace(/^\/*/, "/"), c = l.useMemo(() => ({ basename: p, navigator: i, static: o, future: {} }), [p, i, o]);
  typeof r == "string" && (r = H(r));
  let { pathname: a = "/", search: h = "", hash: d = "", state: u = null, key: s = "default" } = r, m = l.useMemo(() => {
    let f = z(a, p);
    return f == null ? null : { location: { pathname: f, search: h, hash: d, state: u, key: s }, navigationType: n };
  }, [p, a, h, d, u, s, n]);
  return O(m != null, `<Router basename="${p}"> is not able to match the URL "${a}${h}${d}" because it does not start with the basename, so the <Router> won't render anything.`), m == null ? null : l.createElement(U.Provider, { value: c }, l.createElement(q.Provider, { children: t, value: m }));
}
function yt({ children: e, location: t }) {
  return Pe(ue(e), t);
}
function ue(e, t = []) {
  let r = [];
  return l.Children.forEach(e, (n, i) => {
    if (!l.isValidElement(n)) return;
    let o = [...t, i];
    if (n.type === l.Fragment) return void r.push.apply(r, ue(n.props.children, o));
    T(n.type === rt, `[${typeof n.type == "string" ? n.type : n.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`), T(!n.props.index || !n.props.children, "An index route cannot have child routes.");
    let p = { id: n.props.id || o.join("-"), caseSensitive: n.props.caseSensitive, element: n.props.element, Component: n.props.Component, index: n.props.index, path: n.props.path, loader: n.props.loader, action: n.props.action, hydrateFallbackElement: n.props.hydrateFallbackElement, HydrateFallback: n.props.HydrateFallback, errorElement: n.props.errorElement, ErrorBoundary: n.props.ErrorBoundary, hasErrorBoundary: n.props.hasErrorBoundary === !0 || n.props.ErrorBoundary != null || n.props.errorElement != null, shouldRevalidate: n.props.shouldRevalidate, handle: n.props.handle, lazy: n.props.lazy };
    n.props.children && (p.children = ue(n.props.children, o)), r.push(p);
  }), r;
}
l.memo(function({ routes: e, future: t, state: r }) {
  return Pe(e, void 0, r, t);
});
var te = "get", ne = "application/x-www-form-urlencoded";
function Z(e) {
  return e != null && typeof e.tagName == "string";
}
var ee = null, ot = /* @__PURE__ */ new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function le(e) {
  return e == null || ot.has(e) ? e : (O(!1, `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ne}"`), null);
}
function it(e, t) {
  let r, n, i, o, p;
  if (Z(c = e) && c.tagName.toLowerCase() === "form") {
    let a = e.getAttribute("action");
    n = a ? z(a, t) : null, r = e.getAttribute("method") || te, i = le(e.getAttribute("enctype")) || ne, o = new FormData(e);
  } else if (function(a) {
    return Z(a) && a.tagName.toLowerCase() === "button";
  }(e) || function(a) {
    return Z(a) && a.tagName.toLowerCase() === "input";
  }(e) && (e.type === "submit" || e.type === "image")) {
    let a = e.form;
    if (a == null) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let h = e.getAttribute("formaction") || a.getAttribute("action");
    if (n = h ? z(h, t) : null, r = e.getAttribute("formmethod") || a.getAttribute("method") || te, i = le(e.getAttribute("formenctype")) || le(a.getAttribute("enctype")) || ne, o = new FormData(a, e), !function() {
      if (ee === null) try {
        new FormData(document.createElement("form"), 0), ee = !1;
      } catch {
        ee = !0;
      }
      return ee;
    }()) {
      let { name: d, type: u, value: s } = e;
      if (u === "image") {
        let m = d ? `${d}.` : "";
        o.append(`${m}x`, "0"), o.append(`${m}y`, "0");
      } else d && o.append(d, s);
    }
  } else {
    if (Z(e)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
    r = te, n = null, i = ne, p = e;
  }
  var c;
  return o && i === "text/plain" && (p = o, o = void 0), { action: n, method: r.toLowerCase(), encType: i, formData: o, body: p };
}
function pe(e, t) {
  if (e === !1 || e == null) throw new Error(t);
}
function lt(e) {
  return e != null && (e.href == null ? e.rel === "preload" && typeof e.imageSrcSet == "string" && typeof e.imageSizes == "string" : typeof e.rel == "string" && typeof e.href == "string");
}
async function ut(e, t, r) {
  return function(n, i) {
    let o = /* @__PURE__ */ new Set();
    return new Set(i), n.reduce((p, c) => {
      let a = JSON.stringify(function(h) {
        let d = {}, u = Object.keys(h).sort();
        for (let s of u) d[s] = h[s];
        return d;
      }(c));
      return o.has(a) || (o.add(a), p.push({ key: a, link: c })), p;
    }, []);
  }((await Promise.all(e.map(async (n) => {
    let i = t.routes[n.route.id];
    if (i) {
      let o = await async function(p, c) {
        if (p.id in c) return c[p.id];
        try {
          let a = await import(p.module);
          return c[p.id] = a, a;
        } catch (a) {
          return console.error(`Error loading route module \`${p.module}\`, reloading page...`), console.error(a), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {
          });
        }
      }(i, r);
      return o.links ? o.links() : [];
    }
    return [];
  }))).flat(1).filter(lt).filter((n) => n.rel === "stylesheet" || n.rel === "preload").map((n) => n.rel === "stylesheet" ? { ...n, rel: "prefetch", as: "style" } : { ...n, rel: "prefetch" }));
}
function xe(e, t, r, n, i, o) {
  let p = (a, h) => !r[h] || a.route.id !== r[h].route.id, c = (a, h) => {
    var d;
    return r[h].pathname !== a.pathname || ((d = r[h].route.path) == null ? void 0 : d.endsWith("*")) && r[h].params["*"] !== a.params["*"];
  };
  return o === "assets" ? t.filter((a, h) => p(a, h) || c(a, h)) : o === "data" ? t.filter((a, h) => {
    var u;
    let d = n.routes[a.route.id];
    if (!d || !d.hasLoader) return !1;
    if (p(a, h) || c(a, h)) return !0;
    if (a.route.shouldRevalidate) {
      let s = a.route.shouldRevalidate({ currentUrl: new URL(i.pathname + i.search + i.hash, window.origin), currentParams: ((u = r[0]) == null ? void 0 : u.params) || {}, nextUrl: new URL(e, window.origin), nextParams: a.params, defaultShouldRevalidate: !0 });
      if (typeof s == "boolean") return s;
    }
    return !0;
  }) : [];
}
function st(e, t, { includeHydrateFallback: r } = {}) {
  return n = e.map((i) => {
    let o = t.routes[i.route.id];
    if (!o) return [];
    let p = [o.module];
    return o.clientActionModule && (p = p.concat(o.clientActionModule)), o.clientLoaderModule && (p = p.concat(o.clientLoaderModule)), r && o.hydrateFallbackModule && (p = p.concat(o.hydrateFallbackModule)), o.imports && (p = p.concat(o.imports)), p;
  }).flat(1), [...new Set(n)];
  var n;
}
var de = l.createContext(void 0);
function Ee() {
  let e = l.useContext(de);
  return pe(e, "You must render this element inside a <HydratedRouter> element"), e;
}
function K(e, t) {
  return (r) => {
    e && e(r), r.defaultPrevented || t(r);
  };
}
function ct({ page: e, ...t }) {
  let { router: r } = function() {
    let i = l.useContext(Y);
    return pe(i, "You must render this element inside a <DataRouterContext.Provider> element"), i;
  }(), n = l.useMemo(() => Re(r.routes, e, r.basename), [r.routes, e, r.basename]);
  return n ? l.createElement(ht, { page: e, matches: n, ...t }) : null;
}
function ht({ page: e, matches: t, ...r }) {
  let n = J(), { manifest: i, routeModules: o } = Ee(), { loaderData: p, matches: c } = function() {
    let m = l.useContext(oe);
    return pe(m, "You must render this element inside a <DataRouterStateContext.Provider> element"), m;
  }(), a = l.useMemo(() => xe(e, t, c, i, n, "data"), [e, t, c, i, n]), h = l.useMemo(() => xe(e, t, c, i, n, "assets"), [e, t, c, i, n]), d = l.useMemo(() => {
    if (e === n.pathname + n.search + n.hash) return [];
    let m = /* @__PURE__ */ new Set(), f = !1;
    if (t.forEach((v) => {
      var g;
      let b = i.routes[v.route.id];
      b && b.hasLoader && (!a.some((y) => y.route.id === v.route.id) && v.route.id in p && ((g = o[v.route.id]) != null && g.shouldRevalidate) || b.hasClientLoader ? f = !0 : m.add(v.route.id));
    }), m.size === 0) return [];
    let E = function(v) {
      let b = typeof v == "string" ? new URL(v, typeof window > "u" ? "server://singlefetch/" : window.location.origin) : v;
      return b.pathname === "/" ? b.pathname = "_root.data" : b.pathname = `${b.pathname.replace(/\/$/, "")}.data`, b;
    }(e);
    return f && m.size > 0 && E.searchParams.set("_routes", t.filter((v) => m.has(v.route.id)).map((v) => v.route.id).join(",")), [E.pathname + E.search];
  }, [p, n, i, a, t, e, o]), u = l.useMemo(() => st(h, i), [h, i]), s = function(m) {
    let { manifest: f, routeModules: E } = Ee(), [v, b] = l.useState([]);
    return l.useEffect(() => {
      let g = !1;
      return ut(m, f, E).then((y) => {
        g || b(y);
      }), () => {
        g = !0;
      };
    }, [m, f, E]), v;
  }(h);
  return l.createElement(l.Fragment, null, d.map((m) => l.createElement("link", { key: m, rel: "prefetch", as: "fetch", href: m, ...r })), u.map((m) => l.createElement("link", { key: m, rel: "modulepreload", href: m, ...r })), s.map(({ key: m, link: f }) => l.createElement("link", { key: m, ...f })));
}
function pt(...e) {
  return (t) => {
    e.forEach((r) => {
      typeof r == "function" ? r(t) : r != null && (r.current = t);
    });
  };
}
de.displayName = "FrameworkContext";
var Ae = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0;
try {
  Ae && (window.__reactRouterVersion = "7.2.0");
} catch {
}
var Ne = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Me = l.forwardRef(function({ onClick: e, discover: t = "render", prefetch: r = "none", relative: n, reloadDocument: i, replace: o, state: p, target: c, to: a, preventScrollReset: h, viewTransition: d, ...u }, s) {
  let m, { basename: f } = l.useContext(U), E = typeof a == "string" && Ne.test(a), v = !1;
  if (typeof a == "string" && E && (m = a, Ae)) try {
    let w = new URL(window.location.href), P = a.startsWith("//") ? new URL(w.protocol + a) : new URL(a), $ = z(P.pathname, f);
    P.origin === w.origin && $ != null ? a = $ + P.search + P.hash : v = !0;
  } catch {
    O(!1, `<Link to="${a}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`);
  }
  let b = function(w, { relative: P } = {}) {
    T(G(), "useHref() may be used only in the context of a <Router> component.");
    let { basename: $, navigator: L } = l.useContext(U), { hash: x, pathname: S, search: A } = V(w, { relative: P }), N = S;
    return $ !== "/" && (N = S === "/" ? $ : B([$, S])), L.createHref({ pathname: N, search: A, hash: x });
  }(a, { relative: n }), [g, y, k] = function(w, P) {
    let $ = l.useContext(de), [L, x] = l.useState(!1), [S, A] = l.useState(!1), { onFocus: N, onBlur: F, onMouseEnter: D, onMouseLeave: _, onTouchStart: W } = P, M = l.useRef(null);
    l.useEffect(() => {
      if (w === "render" && A(!0), w === "viewport") {
        let X = new IntersectionObserver((Fe) => {
          Fe.forEach((De) => {
            A(De.isIntersecting);
          });
        }, { threshold: 0.5 });
        return M.current && X.observe(M.current), () => {
          X.disconnect();
        };
      }
    }, [w]), l.useEffect(() => {
      if (L) {
        let X = setTimeout(() => {
          A(!0);
        }, 100);
        return () => {
          clearTimeout(X);
        };
      }
    }, [L]);
    let I = () => {
      x(!0);
    }, me = () => {
      x(!1), A(!1);
    };
    return $ ? w !== "intent" ? [S, M, {}] : [S, M, { onFocus: K(N, I), onBlur: K(F, me), onMouseEnter: K(D, I), onMouseLeave: K(_, me), onTouchStart: K(W, I) }] : [!1, M, {}];
  }(r, u), C = function(w, { target: P, replace: $, state: L, preventScrollReset: x, relative: S, viewTransition: A } = {}) {
    let N = Qe(), F = J(), D = V(w, { relative: S });
    return l.useCallback((_) => {
      if (function(W, M) {
        return !(W.button !== 0 || M && M !== "_self" || function(I) {
          return !!(I.metaKey || I.altKey || I.ctrlKey || I.shiftKey);
        }(W));
      }(_, P)) {
        _.preventDefault();
        let W = $ !== void 0 ? $ : re(F) === re(D);
        N(w, { replace: W, state: L, preventScrollReset: x, relative: S, viewTransition: A });
      }
    }, [F, N, D, $, L, P, w, x, S, A]);
  }(a, { replace: o, state: p, target: c, preventScrollReset: h, relative: n, viewTransition: d }), R = l.createElement("a", { ...u, ...k, href: m || b, onClick: v || i ? e : function(w) {
    e && e(w), w.defaultPrevented || C(w);
  }, ref: pt(s, y), target: c, "data-discover": E || t !== "render" ? void 0 : "true" });
  return g && !E ? l.createElement(l.Fragment, null, R, l.createElement(ct, { page: b })) : R;
});
Me.displayName = "Link";
var dt = l.forwardRef(function({ "aria-current": e = "page", caseSensitive: t = !1, className: r = "", end: n = !1, style: i, to: o, viewTransition: p, children: c, ...a }, h) {
  let d = V(o, { relative: a.relative }), u = J(), s = l.useContext(oe), { navigator: m, basename: f } = l.useContext(U), E = s != null && function(L, x = {}) {
    let S = l.useContext(Te);
    T(S != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
    let { basename: A } = Oe("useViewTransitionState"), N = V(L, { relative: x.relative });
    if (!S.isTransitioning) return !1;
    let F = z(S.currentLocation.pathname, A) || S.currentLocation.pathname, D = z(S.nextLocation.pathname, A) || S.nextLocation.pathname;
    return ae(N.pathname, D) != null || ae(N.pathname, F) != null;
  }(d) && p === !0, v = m.encodeLocation ? m.encodeLocation(d).pathname : d.pathname, b = u.pathname, g = s && s.navigation && s.navigation.location ? s.navigation.location.pathname : null;
  t || (b = b.toLowerCase(), g = g ? g.toLowerCase() : null, v = v.toLowerCase()), g && f && (g = z(g, f) || g);
  const y = v !== "/" && v.endsWith("/") ? v.length - 1 : v.length;
  let k, C = b === v || !n && b.startsWith(v) && b.charAt(y) === "/", R = g != null && (g === v || !n && g.startsWith(v) && g.charAt(v.length) === "/"), w = { isActive: C, isPending: R, isTransitioning: E }, P = C ? e : void 0;
  k = typeof r == "function" ? r(w) : [r, C ? "active" : null, R ? "pending" : null, E ? "transitioning" : null].filter(Boolean).join(" ");
  let $ = typeof i == "function" ? i(w) : i;
  return l.createElement(Me, { ...a, "aria-current": P, className: k, ref: h, style: $, to: o, viewTransition: p }, typeof c == "function" ? c(w) : c);
});
function Oe(e) {
  let t = l.useContext(Y);
  return T(t, function(r) {
    return `${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
  }(e)), t;
}
dt.displayName = "NavLink", l.forwardRef(({ discover: e = "render", fetcherKey: t, navigate: r, reloadDocument: n, replace: i, state: o, method: p = te, action: c, onSubmit: a, relative: h, preventScrollReset: d, viewTransition: u, ...s }, m) => {
  let f = function() {
    let { router: g } = Oe("useSubmit"), { basename: y } = l.useContext(U), k = he("useRouteId");
    return l.useCallback(async (C, R = {}) => {
      let { action: w, method: P, encType: $, formData: L, body: x } = it(C, y);
      if (R.navigate === !1) {
        let S = R.fetcherKey || ft();
        await g.fetch(S, k, R.action || w, { preventScrollReset: R.preventScrollReset, formData: L, body: x, formMethod: R.method || P, formEncType: R.encType || $, flushSync: R.flushSync });
      } else await g.navigate(R.action || w, { preventScrollReset: R.preventScrollReset, formData: L, body: x, formMethod: R.method || P, formEncType: R.encType || $, replace: R.replace, state: R.state, fromRouteId: k, flushSync: R.flushSync, viewTransition: R.viewTransition });
    }, [g, y, k]);
  }(), E = function(g, { relative: y } = {}) {
    let { basename: k } = l.useContext(U), C = l.useContext(j);
    T(C, "useFormAction must be used inside a RouteContext");
    let [R] = C.matches.slice(-1), w = { ...V(g || ".", { relative: y }) }, P = J();
    if (g == null) {
      w.search = P.search;
      let $ = new URLSearchParams(w.search), L = $.getAll("index");
      if (L.some((x) => x === "")) {
        $.delete("index"), L.filter((S) => S).forEach((S) => $.append("index", S));
        let x = $.toString();
        w.search = x ? `?${x}` : "";
      }
    }
    return g && g !== "." || !R.route.index || (w.search = w.search ? w.search.replace(/^\?/, "?index&") : "?index"), k !== "/" && (w.pathname = w.pathname === "/" ? k : B([k, w.pathname])), re(w);
  }(c, { relative: h }), v = p.toLowerCase() === "get" ? "get" : "post", b = typeof c == "string" && Ne.test(c);
  return l.createElement("form", { ref: m, method: v, action: E, onSubmit: n ? a : (g) => {
    if (a && a(g), g.defaultPrevented) return;
    g.preventDefault();
    let y = g.nativeEvent.submitter, k = (y == null ? void 0 : y.getAttribute("formmethod")) || p;
    f(y || g.currentTarget, { fetcherKey: t, method: k, navigate: r, replace: i, state: o, relative: h, preventScrollReset: d, viewTransition: u });
  }, ...s, "data-discover": b || e !== "render" ? void 0 : "true" });
}).displayName = "Form";
var mt = 0, ft = () => `__${String(++mt)}__`;
new TextEncoder();
export {
  Me as L,
  vt as M,
  dt as N,
  yt as R,
  rt as a
};
//# sourceMappingURL=chunk-HA7DTUK3-Dm4R8_3T.js.map
