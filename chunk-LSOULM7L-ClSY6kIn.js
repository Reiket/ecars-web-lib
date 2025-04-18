import * as l from "react";
var O = {}, ae;
function Se() {
  if (ae) return O;
  ae = 1, Object.defineProperty(O, "__esModule", { value: !0 }), O.parse = s, O.serialize = u;
  const e = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/, t = /^[\u0021-\u003A\u003C-\u007E]*$/, r = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i, a = /^[\u0020-\u003A\u003D-\u007E]*$/, n = Object.prototype.toString, o = /* @__PURE__ */ (() => {
    const m = function() {
    };
    return m.prototype = /* @__PURE__ */ Object.create(null), m;
  })();
  function s(m, d) {
    const f = new o(), g = m.length;
    if (g < 2)
      return f;
    const x = (d == null ? void 0 : d.decode) || h;
    let p = 0;
    do {
      const w = m.indexOf("=", p);
      if (w === -1)
        break;
      const v = m.indexOf(";", p), C = v === -1 ? g : v;
      if (w > C) {
        p = m.lastIndexOf(";", w - 1) + 1;
        continue;
      }
      const S = c(m, p, w), N = i(m, w, S), I = m.slice(S, N);
      if (f[I] === void 0) {
        let F = c(m, w + 1, C), R = i(m, C, F);
        const T = x(m.slice(F, R));
        f[I] = T;
      }
      p = C + 1;
    } while (p < g);
    return f;
  }
  function c(m, d, f) {
    do {
      const g = m.charCodeAt(d);
      if (g !== 32 && g !== 9)
        return d;
    } while (++d < f);
    return f;
  }
  function i(m, d, f) {
    for (; d > f; ) {
      const g = m.charCodeAt(--d);
      if (g !== 32 && g !== 9)
        return d + 1;
    }
    return f;
  }
  function u(m, d, f) {
    const g = (f == null ? void 0 : f.encode) || encodeURIComponent;
    if (!e.test(m))
      throw new TypeError(`argument name is invalid: ${m}`);
    const x = g(d);
    if (!t.test(x))
      throw new TypeError(`argument val is invalid: ${d}`);
    let p = m + "=" + x;
    if (!f)
      return p;
    if (f.maxAge !== void 0) {
      if (!Number.isInteger(f.maxAge))
        throw new TypeError(`option maxAge is invalid: ${f.maxAge}`);
      p += "; Max-Age=" + f.maxAge;
    }
    if (f.domain) {
      if (!r.test(f.domain))
        throw new TypeError(`option domain is invalid: ${f.domain}`);
      p += "; Domain=" + f.domain;
    }
    if (f.path) {
      if (!a.test(f.path))
        throw new TypeError(`option path is invalid: ${f.path}`);
      p += "; Path=" + f.path;
    }
    if (f.expires) {
      if (!y(f.expires) || !Number.isFinite(f.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${f.expires}`);
      p += "; Expires=" + f.expires.toUTCString();
    }
    if (f.httpOnly && (p += "; HttpOnly"), f.secure && (p += "; Secure"), f.partitioned && (p += "; Partitioned"), f.priority)
      switch (typeof f.priority == "string" ? f.priority.toLowerCase() : void 0) {
        case "low":
          p += "; Priority=Low";
          break;
        case "medium":
          p += "; Priority=Medium";
          break;
        case "high":
          p += "; Priority=High";
          break;
        default:
          throw new TypeError(`option priority is invalid: ${f.priority}`);
      }
    if (f.sameSite)
      switch (typeof f.sameSite == "string" ? f.sameSite.toLowerCase() : f.sameSite) {
        case !0:
        case "strict":
          p += "; SameSite=Strict";
          break;
        case "lax":
          p += "; SameSite=Lax";
          break;
        case "none":
          p += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${f.sameSite}`);
      }
    return p;
  }
  function h(m) {
    if (m.indexOf("%") === -1)
      return m;
    try {
      return decodeURIComponent(m);
    } catch {
      return m;
    }
  }
  function y(m) {
    return n.call(m) === "[object Date]";
  }
  return O;
}
Se();
/**
 * react-router v7.5.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Pe(e = {}) {
  let { initialEntries: t = ["/"], initialIndex: r, v5Compat: a = !1 } = e, n;
  n = t.map(
    (d, f) => h(
      d,
      typeof d == "string" ? null : d.state,
      f === 0 ? "default" : void 0
    )
  );
  let o = i(
    r ?? n.length - 1
  ), s = "POP", c = null;
  function i(d) {
    return Math.min(Math.max(d, 0), n.length - 1);
  }
  function u() {
    return n[o];
  }
  function h(d, f = null, g) {
    let x = Le(
      n ? u().pathname : "/",
      d,
      f,
      g
    );
    return b(
      x.pathname.charAt(0) === "/",
      `relative pathnames are not supported in memory history: ${JSON.stringify(
        d
      )}`
    ), x;
  }
  function y(d) {
    return typeof d == "string" ? d : j(d);
  }
  return {
    get index() {
      return o;
    },
    get action() {
      return s;
    },
    get location() {
      return u();
    },
    createHref: y,
    createURL(d) {
      return new URL(y(d), "http://localhost");
    },
    encodeLocation(d) {
      let f = typeof d == "string" ? D(d) : d;
      return {
        pathname: f.pathname || "",
        search: f.search || "",
        hash: f.hash || ""
      };
    },
    push(d, f) {
      s = "PUSH";
      let g = h(d, f);
      o += 1, n.splice(o, n.length, g), a && c && c({ action: s, location: g, delta: 1 });
    },
    replace(d, f) {
      s = "REPLACE";
      let g = h(d, f);
      n[o] = g, a && c && c({ action: s, location: g, delta: 0 });
    },
    go(d) {
      s = "POP";
      let f = i(o + d), g = n[f];
      o = f, c && c({ action: s, location: g, delta: d });
    },
    listen(d) {
      return c = d, () => {
        c = null;
      };
    }
  };
}
function E(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
function b(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {
    }
  }
}
function ke() {
  return Math.random().toString(36).substring(2, 10);
}
function Le(e, t, r = null, a) {
  return {
    pathname: typeof e == "string" ? e : e.pathname,
    search: "",
    hash: "",
    ...typeof t == "string" ? D(t) : t,
    state: r,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: t && t.key || a || ke()
  };
}
function j({
  pathname: e = "/",
  search: t = "",
  hash: r = ""
}) {
  return t && t !== "?" && (e += t.charAt(0) === "?" ? t : "?" + t), r && r !== "#" && (e += r.charAt(0) === "#" ? r : "#" + r), e;
}
function D(e) {
  let t = {};
  if (e) {
    let r = e.indexOf("#");
    r >= 0 && (t.hash = e.substring(r), e = e.substring(0, r));
    let a = e.indexOf("?");
    a >= 0 && (t.search = e.substring(a), e = e.substring(0, a)), e && (t.pathname = e);
  }
  return t;
}
function ue(e, t, r = "/") {
  return $e(e, t, r, !1);
}
function $e(e, t, r, a) {
  let n = typeof t == "string" ? D(t) : t, o = L(n.pathname || "/", r);
  if (o == null)
    return null;
  let s = se(e);
  Ie(s);
  let c = null;
  for (let i = 0; c == null && i < s.length; ++i) {
    let u = He(o);
    c = Ue(
      s[i],
      u,
      a
    );
  }
  return c;
}
function se(e, t = [], r = [], a = "") {
  let n = (o, s, c) => {
    let i = {
      relativePath: c === void 0 ? o.path || "" : c,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: s,
      route: o
    };
    i.relativePath.startsWith("/") && (E(
      i.relativePath.startsWith(a),
      `Absolute route path "${i.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
    ), i.relativePath = i.relativePath.slice(a.length));
    let u = k([a, i.relativePath]), h = r.concat(i);
    o.children && o.children.length > 0 && (E(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      o.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${u}".`
    ), se(o.children, t, h, u)), !(o.path == null && !o.index) && t.push({
      path: u,
      score: Oe(u, o.index),
      routesMeta: h
    });
  };
  return e.forEach((o, s) => {
    var c;
    if (o.path === "" || !((c = o.path) != null && c.includes("?")))
      n(o, s);
    else
      for (let i of ce(o.path))
        n(o, s, i);
  }), t;
}
function ce(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [r, ...a] = t, n = r.endsWith("?"), o = r.replace(/\?$/, "");
  if (a.length === 0)
    return n ? [o, ""] : [o];
  let s = ce(a.join("/")), c = [];
  return c.push(
    ...s.map(
      (i) => i === "" ? o : [o, i].join("/")
    )
  ), n && c.push(...s), c.map(
    (i) => e.startsWith("/") && i === "" ? "/" : i
  );
}
function Ie(e) {
  e.sort(
    (t, r) => t.score !== r.score ? r.score - t.score : Be(
      t.routesMeta.map((a) => a.childrenIndex),
      r.routesMeta.map((a) => a.childrenIndex)
    )
  );
}
var Te = /^:[\w-]+$/, Fe = 3, De = 2, Me = 1, Ne = 10, Ae = -2, oe = (e) => e === "*";
function Oe(e, t) {
  let r = e.split("/"), a = r.length;
  return r.some(oe) && (a += Ae), t && (a += De), r.filter((n) => !oe(n)).reduce(
    (n, o) => n + (Te.test(o) ? Fe : o === "" ? Me : Ne),
    a
  );
}
function Be(e, t) {
  return e.length === t.length && e.slice(0, -1).every((a, n) => a === t[n]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    e[e.length - 1] - t[t.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function Ue(e, t, r = !1) {
  let { routesMeta: a } = e, n = {}, o = "/", s = [];
  for (let c = 0; c < a.length; ++c) {
    let i = a[c], u = c === a.length - 1, h = o === "/" ? t : t.slice(o.length) || "/", y = J(
      { path: i.relativePath, caseSensitive: i.caseSensitive, end: u },
      h
    ), m = i.route;
    if (!y && u && r && !a[a.length - 1].route.index && (y = J(
      {
        path: i.relativePath,
        caseSensitive: i.caseSensitive,
        end: !1
      },
      h
    )), !y)
      return null;
    Object.assign(n, y.params), s.push({
      // TODO: Can this as be avoided?
      params: n,
      pathname: k([o, y.pathname]),
      pathnameBase: je(
        k([o, y.pathnameBase])
      ),
      route: m
    }), y.pathnameBase !== "/" && (o = k([o, y.pathnameBase]));
  }
  return s;
}
function J(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [r, a] = We(
    e.path,
    e.caseSensitive,
    e.end
  ), n = t.match(r);
  if (!n) return null;
  let o = n[0], s = o.replace(/(.)\/+$/, "$1"), c = n.slice(1);
  return {
    params: a.reduce(
      (u, { paramName: h, isOptional: y }, m) => {
        if (h === "*") {
          let f = c[m] || "";
          s = o.slice(0, o.length - f.length).replace(/(.)\/+$/, "$1");
        }
        const d = c[m];
        return y && !d ? u[h] = void 0 : u[h] = (d || "").replace(/%2F/g, "/"), u;
      },
      {}
    ),
    pathname: o,
    pathnameBase: s,
    pattern: e
  };
}
function We(e, t = !1, r = !0) {
  b(
    e === "*" || !e.endsWith("*") || e.endsWith("/*"),
    `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, "/*")}".`
  );
  let a = [], n = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (s, c, i) => (a.push({ paramName: c, isOptional: i != null }), i ? "/?([^\\/]+)?" : "/([^\\/]+)")
  );
  return e.endsWith("*") ? (a.push({ paramName: "*" }), n += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? n += "\\/*$" : e !== "" && e !== "/" && (n += "(?:(?=\\/|$))"), [new RegExp(n, t ? void 0 : "i"), a];
}
function He(e) {
  try {
    return e.split("/").map((t) => decodeURIComponent(t).replace(/\//g, "%2F")).join("/");
  } catch (t) {
    return b(
      !1,
      `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`
    ), e;
  }
}
function L(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase()))
    return null;
  let r = t.endsWith("/") ? t.length - 1 : t.length, a = e.charAt(r);
  return a && a !== "/" ? null : e.slice(r) || "/";
}
function _e(e, t = "/") {
  let {
    pathname: r,
    search: a = "",
    hash: n = ""
  } = typeof e == "string" ? D(e) : e;
  return {
    pathname: r ? r.startsWith("/") ? r : ze(r, t) : t,
    search: Je(a),
    hash: Ke(n)
  };
}
function ze(e, t) {
  let r = t.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((n) => {
    n === ".." ? r.length > 1 && r.pop() : n !== "." && r.push(n);
  }), r.length > 1 ? r.join("/") : "/";
}
function q(e, t, r, a) {
  return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(
    a
  )}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Ve(e) {
  return e.filter(
    (t, r) => r === 0 || t.route.path && t.route.path.length > 0
  );
}
function fe(e) {
  let t = Ve(e);
  return t.map(
    (r, a) => a === t.length - 1 ? r.pathname : r.pathnameBase
  );
}
function de(e, t, r, a = !1) {
  let n;
  typeof e == "string" ? n = D(e) : (n = { ...e }, E(
    !n.pathname || !n.pathname.includes("?"),
    q("?", "pathname", "search", n)
  ), E(
    !n.pathname || !n.pathname.includes("#"),
    q("#", "pathname", "hash", n)
  ), E(
    !n.search || !n.search.includes("#"),
    q("#", "search", "hash", n)
  ));
  let o = e === "" || n.pathname === "", s = o ? "/" : n.pathname, c;
  if (s == null)
    c = r;
  else {
    let y = t.length - 1;
    if (!a && s.startsWith("..")) {
      let m = s.split("/");
      for (; m[0] === ".."; )
        m.shift(), y -= 1;
      n.pathname = m.join("/");
    }
    c = y >= 0 ? t[y] : "/";
  }
  let i = _e(n, c), u = s && s !== "/" && s.endsWith("/"), h = (o || s === ".") && r.endsWith("/");
  return !i.pathname.endsWith("/") && (u || h) && (i.pathname += "/"), i;
}
var k = (e) => e.join("/").replace(/\/\/+/g, "/"), je = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"), Je = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, Ke = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function Ye(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
}
var he = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
];
new Set(
  he
);
var qe = [
  "GET",
  ...he
];
new Set(qe);
var A = l.createContext(null);
A.displayName = "DataRouter";
var K = l.createContext(null);
K.displayName = "DataRouterState";
var me = l.createContext({
  isTransitioning: !1
});
me.displayName = "ViewTransition";
var Ge = l.createContext(
  /* @__PURE__ */ new Map()
);
Ge.displayName = "Fetchers";
var Xe = l.createContext(null);
Xe.displayName = "Await";
var P = l.createContext(
  null
);
P.displayName = "Navigation";
var U = l.createContext(
  null
);
U.displayName = "Location";
var $ = l.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
$.displayName = "Route";
var Q = l.createContext(null);
Q.displayName = "RouteError";
function Qe(e, { relative: t } = {}) {
  E(
    W(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: r, navigator: a } = l.useContext(P), { hash: n, pathname: o, search: s } = H(e, { relative: t }), c = o;
  return r !== "/" && (c = o === "/" ? r : k([r, o])), a.createHref({ pathname: c, search: s, hash: n });
}
function W() {
  return l.useContext(U) != null;
}
function M() {
  return E(
    W(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), l.useContext(U).location;
}
var pe = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function ye(e) {
  l.useContext(P).static || l.useLayoutEffect(e);
}
function Ze() {
  let { isDataRoute: e } = l.useContext($);
  return e ? dt() : et();
}
function et() {
  E(
    W(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let e = l.useContext(A), { basename: t, navigator: r } = l.useContext(P), { matches: a } = l.useContext($), { pathname: n } = M(), o = JSON.stringify(fe(a)), s = l.useRef(!1);
  return ye(() => {
    s.current = !0;
  }), l.useCallback(
    (i, u = {}) => {
      if (b(s.current, pe), !s.current) return;
      if (typeof i == "number") {
        r.go(i);
        return;
      }
      let h = de(
        i,
        JSON.parse(o),
        n,
        u.relative === "path"
      );
      e == null && t !== "/" && (h.pathname = h.pathname === "/" ? t : k([t, h.pathname])), (u.replace ? r.replace : r.push)(
        h,
        u.state,
        u
      );
    },
    [
      t,
      r,
      o,
      n,
      e
    ]
  );
}
l.createContext(null);
function H(e, { relative: t } = {}) {
  let { matches: r } = l.useContext($), { pathname: a } = M(), n = JSON.stringify(fe(r));
  return l.useMemo(
    () => de(
      e,
      JSON.parse(n),
      a,
      t === "path"
    ),
    [e, n, a, t]
  );
}
function tt(e, t) {
  return ge(e, t);
}
function ge(e, t, r, a) {
  var w;
  E(
    W(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: n, static: o } = l.useContext(P), { matches: s } = l.useContext($), c = s[s.length - 1], i = c ? c.params : {}, u = c ? c.pathname : "/", h = c ? c.pathnameBase : "/", y = c && c.route;
  {
    let v = y && y.path || "";
    ve(
      u,
      !y || v.endsWith("*") || v.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${u}" (under <Route path="${v}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${v}"> to <Route path="${v === "/" ? "*" : `${v}/*`}">.`
    );
  }
  let m = M(), d;
  if (t) {
    let v = typeof t == "string" ? D(t) : t;
    E(
      h === "/" || ((w = v.pathname) == null ? void 0 : w.startsWith(h)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${h}" but pathname "${v.pathname}" was given in the \`location\` prop.`
    ), d = v;
  } else
    d = m;
  let f = d.pathname || "/", g = f;
  if (h !== "/") {
    let v = h.replace(/^\//, "").split("/");
    g = "/" + f.replace(/^\//, "").split("/").slice(v.length).join("/");
  }
  let x = !o && r && r.matches && r.matches.length > 0 ? r.matches : ue(e, { pathname: g });
  b(
    y || x != null,
    `No routes matched location "${d.pathname}${d.search}${d.hash}" `
  ), b(
    x == null || x[x.length - 1].route.element !== void 0 || x[x.length - 1].route.Component !== void 0 || x[x.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  );
  let p = it(
    x && x.map(
      (v) => Object.assign({}, v, {
        params: Object.assign({}, i, v.params),
        pathname: k([
          h,
          // Re-encode pathnames that were decoded inside matchRoutes
          n.encodeLocation ? n.encodeLocation(v.pathname).pathname : v.pathname
        ]),
        pathnameBase: v.pathnameBase === "/" ? h : k([
          h,
          // Re-encode pathnames that were decoded inside matchRoutes
          n.encodeLocation ? n.encodeLocation(v.pathnameBase).pathname : v.pathnameBase
        ])
      })
    ),
    s,
    r,
    a
  );
  return t && p ? /* @__PURE__ */ l.createElement(
    U.Provider,
    {
      value: {
        location: {
          pathname: "/",
          search: "",
          hash: "",
          state: null,
          key: "default",
          ...d
        },
        navigationType: "POP"
        /* Pop */
      }
    },
    p
  ) : p;
}
function rt() {
  let e = ft(), t = Ye(e) ? `${e.status} ${e.statusText}` : e instanceof Error ? e.message : JSON.stringify(e), r = e instanceof Error ? e.stack : null, a = "rgba(200,200,200, 0.5)", n = { padding: "0.5rem", backgroundColor: a }, o = { padding: "2px 4px", backgroundColor: a }, s = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    e
  ), s = /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ l.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ l.createElement("code", { style: o }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ l.createElement("code", { style: o }, "errorElement"), " prop on your route.")), /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ l.createElement("h3", { style: { fontStyle: "italic" } }, t), r ? /* @__PURE__ */ l.createElement("pre", { style: n }, r) : null, s);
}
var nt = /* @__PURE__ */ l.createElement(rt, null), at = class extends l.Component {
  constructor(e) {
    super(e), this.state = {
      location: e.location,
      revalidation: e.revalidation,
      error: e.error
    };
  }
  static getDerivedStateFromError(e) {
    return { error: e };
  }
  static getDerivedStateFromProps(e, t) {
    return t.location !== e.location || t.revalidation !== "idle" && e.revalidation === "idle" ? {
      error: e.error,
      location: e.location,
      revalidation: e.revalidation
    } : {
      error: e.error !== void 0 ? e.error : t.error,
      location: t.location,
      revalidation: e.revalidation || t.revalidation
    };
  }
  componentDidCatch(e, t) {
    console.error(
      "React Router caught the following error during render",
      e,
      t
    );
  }
  render() {
    return this.state.error !== void 0 ? /* @__PURE__ */ l.createElement($.Provider, { value: this.props.routeContext }, /* @__PURE__ */ l.createElement(
      Q.Provider,
      {
        value: this.state.error,
        children: this.props.component
      }
    )) : this.props.children;
  }
};
function ot({ routeContext: e, match: t, children: r }) {
  let a = l.useContext(A);
  return a && a.static && a.staticContext && (t.route.errorElement || t.route.ErrorBoundary) && (a.staticContext._deepestRenderedBoundaryId = t.route.id), /* @__PURE__ */ l.createElement($.Provider, { value: e }, r);
}
function it(e, t = [], r = null, a = null) {
  if (e == null) {
    if (!r)
      return null;
    if (r.errors)
      e = r.matches;
    else if (t.length === 0 && !r.initialized && r.matches.length > 0)
      e = r.matches;
    else
      return null;
  }
  let n = e, o = r == null ? void 0 : r.errors;
  if (o != null) {
    let i = n.findIndex(
      (u) => u.route.id && (o == null ? void 0 : o[u.route.id]) !== void 0
    );
    E(
      i >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        o
      ).join(",")}`
    ), n = n.slice(
      0,
      Math.min(n.length, i + 1)
    );
  }
  let s = !1, c = -1;
  if (r)
    for (let i = 0; i < n.length; i++) {
      let u = n[i];
      if ((u.route.HydrateFallback || u.route.hydrateFallbackElement) && (c = i), u.route.id) {
        let { loaderData: h, errors: y } = r, m = u.route.loader && !h.hasOwnProperty(u.route.id) && (!y || y[u.route.id] === void 0);
        if (u.route.lazy || m) {
          s = !0, c >= 0 ? n = n.slice(0, c + 1) : n = [n[0]];
          break;
        }
      }
    }
  return n.reduceRight((i, u, h) => {
    let y, m = !1, d = null, f = null;
    r && (y = o && u.route.id ? o[u.route.id] : void 0, d = u.route.errorElement || nt, s && (c < 0 && h === 0 ? (ve(
      "route-fallback",
      !1,
      "No `HydrateFallback` element provided to render during initial hydration"
    ), m = !0, f = null) : c === h && (m = !0, f = u.route.hydrateFallbackElement || null)));
    let g = t.concat(n.slice(0, h + 1)), x = () => {
      let p;
      return y ? p = d : m ? p = f : u.route.Component ? p = /* @__PURE__ */ l.createElement(u.route.Component, null) : u.route.element ? p = u.route.element : p = i, /* @__PURE__ */ l.createElement(
        ot,
        {
          match: u,
          routeContext: {
            outlet: i,
            matches: g,
            isDataRoute: r != null
          },
          children: p
        }
      );
    };
    return r && (u.route.ErrorBoundary || u.route.errorElement || h === 0) ? /* @__PURE__ */ l.createElement(
      at,
      {
        location: r.location,
        revalidation: r.revalidation,
        component: d,
        error: y,
        children: x(),
        routeContext: { outlet: null, matches: g, isDataRoute: !0 }
      }
    ) : x();
  }, null);
}
function Z(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function lt(e) {
  let t = l.useContext(A);
  return E(t, Z(e)), t;
}
function ut(e) {
  let t = l.useContext(K);
  return E(t, Z(e)), t;
}
function st(e) {
  let t = l.useContext($);
  return E(t, Z(e)), t;
}
function ee(e) {
  let t = st(e), r = t.matches[t.matches.length - 1];
  return E(
    r.route.id,
    `${e} can only be used on routes that contain a unique "id"`
  ), r.route.id;
}
function ct() {
  return ee(
    "useRouteId"
    /* UseRouteId */
  );
}
function ft() {
  var a;
  let e = l.useContext(Q), t = ut(
    "useRouteError"
    /* UseRouteError */
  ), r = ee(
    "useRouteError"
    /* UseRouteError */
  );
  return e !== void 0 ? e : (a = t.errors) == null ? void 0 : a[r];
}
function dt() {
  let { router: e } = lt(
    "useNavigate"
    /* UseNavigateStable */
  ), t = ee(
    "useNavigate"
    /* UseNavigateStable */
  ), r = l.useRef(!1);
  return ye(() => {
    r.current = !0;
  }), l.useCallback(
    async (n, o = {}) => {
      b(r.current, pe), r.current && (typeof n == "number" ? e.navigate(n) : await e.navigate(n, { fromRouteId: t, ...o }));
    },
    [e, t]
  );
}
var ie = {};
function ve(e, t, r) {
  !t && !ie[e] && (ie[e] = !0, b(!1, r));
}
l.memo(ht);
function ht({
  routes: e,
  future: t,
  state: r
}) {
  return ge(e, void 0, r, t);
}
function Yt({
  basename: e,
  children: t,
  initialEntries: r,
  initialIndex: a
}) {
  let n = l.useRef();
  n.current == null && (n.current = Pe({
    initialEntries: r,
    initialIndex: a,
    v5Compat: !0
  }));
  let o = n.current, [s, c] = l.useState({
    action: o.action,
    location: o.location
  }), i = l.useCallback(
    (u) => {
      l.startTransition(() => c(u));
    },
    [c]
  );
  return l.useLayoutEffect(() => o.listen(i), [o, i]), /* @__PURE__ */ l.createElement(
    pt,
    {
      basename: e,
      children: t,
      location: s.location,
      navigationType: s.action,
      navigator: o
    }
  );
}
function mt(e) {
  E(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function pt({
  basename: e = "/",
  children: t = null,
  location: r,
  navigationType: a = "POP",
  navigator: n,
  static: o = !1
}) {
  E(
    !W(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let s = e.replace(/^\/*/, "/"), c = l.useMemo(
    () => ({
      basename: s,
      navigator: n,
      static: o,
      future: {}
    }),
    [s, n, o]
  );
  typeof r == "string" && (r = D(r));
  let {
    pathname: i = "/",
    search: u = "",
    hash: h = "",
    state: y = null,
    key: m = "default"
  } = r, d = l.useMemo(() => {
    let f = L(i, s);
    return f == null ? null : {
      location: {
        pathname: f,
        search: u,
        hash: h,
        state: y,
        key: m
      },
      navigationType: a
    };
  }, [s, i, u, h, y, m, a]);
  return b(
    d != null,
    `<Router basename="${s}"> is not able to match the URL "${i}${u}${h}" because it does not start with the basename, so the <Router> won't render anything.`
  ), d == null ? null : /* @__PURE__ */ l.createElement(P.Provider, { value: c }, /* @__PURE__ */ l.createElement(U.Provider, { children: t, value: d }));
}
function qt({
  children: e,
  location: t
}) {
  return tt(X(e), t);
}
function X(e, t = []) {
  let r = [];
  return l.Children.forEach(e, (a, n) => {
    if (!l.isValidElement(a))
      return;
    let o = [...t, n];
    if (a.type === l.Fragment) {
      r.push.apply(
        r,
        X(a.props.children, o)
      );
      return;
    }
    E(
      a.type === mt,
      `[${typeof a.type == "string" ? a.type : a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
    ), E(
      !a.props.index || !a.props.children,
      "An index route cannot have child routes."
    );
    let s = {
      id: a.props.id || o.join("-"),
      caseSensitive: a.props.caseSensitive,
      element: a.props.element,
      Component: a.props.Component,
      index: a.props.index,
      path: a.props.path,
      loader: a.props.loader,
      action: a.props.action,
      hydrateFallbackElement: a.props.hydrateFallbackElement,
      HydrateFallback: a.props.HydrateFallback,
      errorElement: a.props.errorElement,
      ErrorBoundary: a.props.ErrorBoundary,
      hasErrorBoundary: a.props.hasErrorBoundary === !0 || a.props.ErrorBoundary != null || a.props.errorElement != null,
      shouldRevalidate: a.props.shouldRevalidate,
      handle: a.props.handle,
      lazy: a.props.lazy
    };
    a.props.children && (s.children = X(
      a.props.children,
      o
    )), r.push(s);
  }), r;
}
var z = "get", V = "application/x-www-form-urlencoded";
function Y(e) {
  return e != null && typeof e.tagName == "string";
}
function yt(e) {
  return Y(e) && e.tagName.toLowerCase() === "button";
}
function gt(e) {
  return Y(e) && e.tagName.toLowerCase() === "form";
}
function vt(e) {
  return Y(e) && e.tagName.toLowerCase() === "input";
}
function xt(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function wt(e, t) {
  return e.button === 0 && // Ignore everything but left clicks
  (!t || t === "_self") && // Let browser handle "target=_blank" etc.
  !xt(e);
}
var _ = null;
function Et() {
  if (_ === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), _ = !1;
    } catch {
      _ = !0;
    }
  return _;
}
var Ct = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function G(e) {
  return e != null && !Ct.has(e) ? (b(
    !1,
    `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${V}"`
  ), null) : e;
}
function Rt(e, t) {
  let r, a, n, o, s;
  if (gt(e)) {
    let c = e.getAttribute("action");
    a = c ? L(c, t) : null, r = e.getAttribute("method") || z, n = G(e.getAttribute("enctype")) || V, o = new FormData(e);
  } else if (yt(e) || vt(e) && (e.type === "submit" || e.type === "image")) {
    let c = e.form;
    if (c == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let i = e.getAttribute("formaction") || c.getAttribute("action");
    if (a = i ? L(i, t) : null, r = e.getAttribute("formmethod") || c.getAttribute("method") || z, n = G(e.getAttribute("formenctype")) || G(c.getAttribute("enctype")) || V, o = new FormData(c, e), !Et()) {
      let { name: u, type: h, value: y } = e;
      if (h === "image") {
        let m = u ? `${u}.` : "";
        o.append(`${m}x`, "0"), o.append(`${m}y`, "0");
      } else u && o.append(u, y);
    }
  } else {
    if (Y(e))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    r = z, a = null, n = V, s = e;
  }
  return o && n === "text/plain" && (s = o, o = void 0), { action: a, method: r.toLowerCase(), encType: n, formData: o, body: s };
}
function te(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
async function bt(e, t) {
  if (e.id in t)
    return t[e.id];
  try {
    let r = await import(
      /* @vite-ignore */
      /* webpackIgnore: true */
      e.module
    );
    return t[e.id] = r, r;
  } catch (r) {
    return console.error(
      `Error loading route module \`${e.module}\`, reloading page...`
    ), console.error(r), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {
    });
  }
}
function St(e) {
  return e == null ? !1 : e.href == null ? e.rel === "preload" && typeof e.imageSrcSet == "string" && typeof e.imageSizes == "string" : typeof e.rel == "string" && typeof e.href == "string";
}
async function Pt(e, t, r) {
  let a = await Promise.all(
    e.map(async (n) => {
      let o = t.routes[n.route.id];
      if (o) {
        let s = await bt(o, r);
        return s.links ? s.links() : [];
      }
      return [];
    })
  );
  return It(
    a.flat(1).filter(St).filter((n) => n.rel === "stylesheet" || n.rel === "preload").map(
      (n) => n.rel === "stylesheet" ? { ...n, rel: "prefetch", as: "style" } : { ...n, rel: "prefetch" }
    )
  );
}
function le(e, t, r, a, n, o) {
  let s = (i, u) => r[u] ? i.route.id !== r[u].route.id : !0, c = (i, u) => {
    var h;
    return (
      // param change, /users/123 -> /users/456
      r[u].pathname !== i.pathname || // splat param changed, which is not present in match.path
      // e.g. /files/images/avatar.jpg -> files/finances.xls
      ((h = r[u].route.path) == null ? void 0 : h.endsWith("*")) && r[u].params["*"] !== i.params["*"]
    );
  };
  return o === "assets" ? t.filter(
    (i, u) => s(i, u) || c(i, u)
  ) : o === "data" ? t.filter((i, u) => {
    var y;
    let h = a.routes[i.route.id];
    if (!h || !h.hasLoader)
      return !1;
    if (s(i, u) || c(i, u))
      return !0;
    if (i.route.shouldRevalidate) {
      let m = i.route.shouldRevalidate({
        currentUrl: new URL(
          n.pathname + n.search + n.hash,
          window.origin
        ),
        currentParams: ((y = r[0]) == null ? void 0 : y.params) || {},
        nextUrl: new URL(e, window.origin),
        nextParams: i.params,
        defaultShouldRevalidate: !0
      });
      if (typeof m == "boolean")
        return m;
    }
    return !0;
  }) : [];
}
function kt(e, t, { includeHydrateFallback: r } = {}) {
  return Lt(
    e.map((a) => {
      let n = t.routes[a.route.id];
      if (!n) return [];
      let o = [n.module];
      return n.clientActionModule && (o = o.concat(n.clientActionModule)), n.clientLoaderModule && (o = o.concat(n.clientLoaderModule)), r && n.hydrateFallbackModule && (o = o.concat(n.hydrateFallbackModule)), n.imports && (o = o.concat(n.imports)), o;
    }).flat(1)
  );
}
function Lt(e) {
  return [...new Set(e)];
}
function $t(e) {
  let t = {}, r = Object.keys(e).sort();
  for (let a of r)
    t[a] = e[a];
  return t;
}
function It(e, t) {
  let r = /* @__PURE__ */ new Set();
  return new Set(t), e.reduce((a, n) => {
    let o = JSON.stringify($t(n));
    return r.has(o) || (r.add(o), a.push({ key: o, link: n })), a;
  }, []);
}
var Tt = /* @__PURE__ */ new Set([100, 101, 204, 205]);
function Ft(e, t) {
  let r = typeof e == "string" ? new URL(
    e,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : e;
  return r.pathname === "/" ? r.pathname = "_root.data" : t && L(r.pathname, t) === "/" ? r.pathname = `${t.replace(/\/$/, "")}/_root.data` : r.pathname = `${r.pathname.replace(/\/$/, "")}.data`, r;
}
function xe() {
  let e = l.useContext(A);
  return te(
    e,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), e;
}
function Dt() {
  let e = l.useContext(K);
  return te(
    e,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), e;
}
var re = l.createContext(void 0);
re.displayName = "FrameworkContext";
function we() {
  let e = l.useContext(re);
  return te(
    e,
    "You must render this element inside a <HydratedRouter> element"
  ), e;
}
function Mt(e, t) {
  let r = l.useContext(re), [a, n] = l.useState(!1), [o, s] = l.useState(!1), { onFocus: c, onBlur: i, onMouseEnter: u, onMouseLeave: h, onTouchStart: y } = t, m = l.useRef(null);
  l.useEffect(() => {
    if (e === "render" && s(!0), e === "viewport") {
      let g = (p) => {
        p.forEach((w) => {
          s(w.isIntersecting);
        });
      }, x = new IntersectionObserver(g, { threshold: 0.5 });
      return m.current && x.observe(m.current), () => {
        x.disconnect();
      };
    }
  }, [e]), l.useEffect(() => {
    if (a) {
      let g = setTimeout(() => {
        s(!0);
      }, 100);
      return () => {
        clearTimeout(g);
      };
    }
  }, [a]);
  let d = () => {
    n(!0);
  }, f = () => {
    n(!1), s(!1);
  };
  return r ? e !== "intent" ? [o, m, {}] : [
    o,
    m,
    {
      onFocus: B(c, d),
      onBlur: B(i, f),
      onMouseEnter: B(u, d),
      onMouseLeave: B(h, f),
      onTouchStart: B(y, d)
    }
  ] : [!1, m, {}];
}
function B(e, t) {
  return (r) => {
    e && e(r), r.defaultPrevented || t(r);
  };
}
function Nt({
  page: e,
  ...t
}) {
  let { router: r } = xe(), a = l.useMemo(
    () => ue(r.routes, e, r.basename),
    [r.routes, e, r.basename]
  );
  return a ? /* @__PURE__ */ l.createElement(Ot, { page: e, matches: a, ...t }) : null;
}
function At(e) {
  let { manifest: t, routeModules: r } = we(), [a, n] = l.useState([]);
  return l.useEffect(() => {
    let o = !1;
    return Pt(e, t, r).then(
      (s) => {
        o || n(s);
      }
    ), () => {
      o = !0;
    };
  }, [e, t, r]), a;
}
function Ot({
  page: e,
  matches: t,
  ...r
}) {
  let a = M(), { manifest: n, routeModules: o } = we(), { basename: s } = xe(), { loaderData: c, matches: i } = Dt(), u = l.useMemo(
    () => le(
      e,
      t,
      i,
      n,
      a,
      "data"
    ),
    [e, t, i, n, a]
  ), h = l.useMemo(
    () => le(
      e,
      t,
      i,
      n,
      a,
      "assets"
    ),
    [e, t, i, n, a]
  ), y = l.useMemo(() => {
    if (e === a.pathname + a.search + a.hash)
      return [];
    let f = /* @__PURE__ */ new Set(), g = !1;
    if (t.forEach((p) => {
      var v;
      let w = n.routes[p.route.id];
      !w || !w.hasLoader || (!u.some((C) => C.route.id === p.route.id) && p.route.id in c && ((v = o[p.route.id]) != null && v.shouldRevalidate) || w.hasClientLoader ? g = !0 : f.add(p.route.id));
    }), f.size === 0)
      return [];
    let x = Ft(e, s);
    return g && f.size > 0 && x.searchParams.set(
      "_routes",
      t.filter((p) => f.has(p.route.id)).map((p) => p.route.id).join(",")
    ), [x.pathname + x.search];
  }, [
    s,
    c,
    a,
    n,
    u,
    t,
    e,
    o
  ]), m = l.useMemo(
    () => kt(h, n),
    [h, n]
  ), d = At(h);
  return /* @__PURE__ */ l.createElement(l.Fragment, null, y.map((f) => /* @__PURE__ */ l.createElement("link", { key: f, rel: "prefetch", as: "fetch", href: f, ...r })), m.map((f) => /* @__PURE__ */ l.createElement("link", { key: f, rel: "modulepreload", href: f, ...r })), d.map(({ key: f, link: g }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ l.createElement("link", { key: f, ...g })
  )));
}
function Bt(...e) {
  return (t) => {
    e.forEach((r) => {
      typeof r == "function" ? r(t) : r != null && (r.current = t);
    });
  };
}
var Ee = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  Ee && (window.__reactRouterVersion = "7.5.1");
} catch {
}
var Ce = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Re = l.forwardRef(
  function({
    onClick: t,
    discover: r = "render",
    prefetch: a = "none",
    relative: n,
    reloadDocument: o,
    replace: s,
    state: c,
    target: i,
    to: u,
    preventScrollReset: h,
    viewTransition: y,
    ...m
  }, d) {
    let { basename: f } = l.useContext(P), g = typeof u == "string" && Ce.test(u), x, p = !1;
    if (typeof u == "string" && g && (x = u, Ee))
      try {
        let R = new URL(window.location.href), T = u.startsWith("//") ? new URL(R.protocol + u) : new URL(u), ne = L(T.pathname, f);
        T.origin === R.origin && ne != null ? u = ne + T.search + T.hash : p = !0;
      } catch {
        b(
          !1,
          `<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let w = Qe(u, { relative: n }), [v, C, S] = Mt(
      a,
      m
    ), N = _t(u, {
      replace: s,
      state: c,
      target: i,
      preventScrollReset: h,
      relative: n,
      viewTransition: y
    });
    function I(R) {
      t && t(R), R.defaultPrevented || N(R);
    }
    let F = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ l.createElement(
        "a",
        {
          ...m,
          ...S,
          href: x || w,
          onClick: p || o ? t : I,
          ref: Bt(d, C),
          target: i,
          "data-discover": !g && r === "render" ? "true" : void 0
        }
      )
    );
    return v && !g ? /* @__PURE__ */ l.createElement(l.Fragment, null, F, /* @__PURE__ */ l.createElement(Nt, { page: w })) : F;
  }
);
Re.displayName = "Link";
var Ut = l.forwardRef(
  function({
    "aria-current": t = "page",
    caseSensitive: r = !1,
    className: a = "",
    end: n = !1,
    style: o,
    to: s,
    viewTransition: c,
    children: i,
    ...u
  }, h) {
    let y = H(s, { relative: u.relative }), m = M(), d = l.useContext(K), { navigator: f, basename: g } = l.useContext(P), x = d != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    Kt(y) && c === !0, p = f.encodeLocation ? f.encodeLocation(y).pathname : y.pathname, w = m.pathname, v = d && d.navigation && d.navigation.location ? d.navigation.location.pathname : null;
    r || (w = w.toLowerCase(), v = v ? v.toLowerCase() : null, p = p.toLowerCase()), v && g && (v = L(v, g) || v);
    const C = p !== "/" && p.endsWith("/") ? p.length - 1 : p.length;
    let S = w === p || !n && w.startsWith(p) && w.charAt(C) === "/", N = v != null && (v === p || !n && v.startsWith(p) && v.charAt(p.length) === "/"), I = {
      isActive: S,
      isPending: N,
      isTransitioning: x
    }, F = S ? t : void 0, R;
    typeof a == "function" ? R = a(I) : R = [
      a,
      S ? "active" : null,
      N ? "pending" : null,
      x ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let T = typeof o == "function" ? o(I) : o;
    return /* @__PURE__ */ l.createElement(
      Re,
      {
        ...u,
        "aria-current": F,
        className: R,
        ref: h,
        style: T,
        to: s,
        viewTransition: c
      },
      typeof i == "function" ? i(I) : i
    );
  }
);
Ut.displayName = "NavLink";
var Wt = l.forwardRef(
  ({
    discover: e = "render",
    fetcherKey: t,
    navigate: r,
    reloadDocument: a,
    replace: n,
    state: o,
    method: s = z,
    action: c,
    onSubmit: i,
    relative: u,
    preventScrollReset: h,
    viewTransition: y,
    ...m
  }, d) => {
    let f = jt(), g = Jt(c, { relative: u }), x = s.toLowerCase() === "get" ? "get" : "post", p = typeof c == "string" && Ce.test(c), w = (v) => {
      if (i && i(v), v.defaultPrevented) return;
      v.preventDefault();
      let C = v.nativeEvent.submitter, S = (C == null ? void 0 : C.getAttribute("formmethod")) || s;
      f(C || v.currentTarget, {
        fetcherKey: t,
        method: S,
        navigate: r,
        replace: n,
        state: o,
        relative: u,
        preventScrollReset: h,
        viewTransition: y
      });
    };
    return /* @__PURE__ */ l.createElement(
      "form",
      {
        ref: d,
        method: x,
        action: g,
        onSubmit: a ? i : w,
        ...m,
        "data-discover": !p && e === "render" ? "true" : void 0
      }
    );
  }
);
Wt.displayName = "Form";
function Ht(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function be(e) {
  let t = l.useContext(A);
  return E(t, Ht(e)), t;
}
function _t(e, {
  target: t,
  replace: r,
  state: a,
  preventScrollReset: n,
  relative: o,
  viewTransition: s
} = {}) {
  let c = Ze(), i = M(), u = H(e, { relative: o });
  return l.useCallback(
    (h) => {
      if (wt(h, t)) {
        h.preventDefault();
        let y = r !== void 0 ? r : j(i) === j(u);
        c(e, {
          replace: y,
          state: a,
          preventScrollReset: n,
          relative: o,
          viewTransition: s
        });
      }
    },
    [
      i,
      c,
      u,
      r,
      a,
      t,
      e,
      n,
      o,
      s
    ]
  );
}
var zt = 0, Vt = () => `__${String(++zt)}__`;
function jt() {
  let { router: e } = be(
    "useSubmit"
    /* UseSubmit */
  ), { basename: t } = l.useContext(P), r = ct();
  return l.useCallback(
    async (a, n = {}) => {
      let { action: o, method: s, encType: c, formData: i, body: u } = Rt(
        a,
        t
      );
      if (n.navigate === !1) {
        let h = n.fetcherKey || Vt();
        await e.fetch(h, r, n.action || o, {
          preventScrollReset: n.preventScrollReset,
          formData: i,
          body: u,
          formMethod: n.method || s,
          formEncType: n.encType || c,
          flushSync: n.flushSync
        });
      } else
        await e.navigate(n.action || o, {
          preventScrollReset: n.preventScrollReset,
          formData: i,
          body: u,
          formMethod: n.method || s,
          formEncType: n.encType || c,
          replace: n.replace,
          state: n.state,
          fromRouteId: r,
          flushSync: n.flushSync,
          viewTransition: n.viewTransition
        });
    },
    [e, t, r]
  );
}
function Jt(e, { relative: t } = {}) {
  let { basename: r } = l.useContext(P), a = l.useContext($);
  E(a, "useFormAction must be used inside a RouteContext");
  let [n] = a.matches.slice(-1), o = { ...H(e || ".", { relative: t }) }, s = M();
  if (e == null) {
    o.search = s.search;
    let c = new URLSearchParams(o.search), i = c.getAll("index");
    if (i.some((h) => h === "")) {
      c.delete("index"), i.filter((y) => y).forEach((y) => c.append("index", y));
      let h = c.toString();
      o.search = h ? `?${h}` : "";
    }
  }
  return (!e || e === ".") && n.route.index && (o.search = o.search ? o.search.replace(/^\?/, "?index&") : "?index"), r !== "/" && (o.pathname = o.pathname === "/" ? r : k([r, o.pathname])), j(o);
}
function Kt(e, t = {}) {
  let r = l.useContext(me);
  E(
    r != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: a } = be(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), n = H(e, { relative: t.relative });
  if (!r.isTransitioning)
    return !1;
  let o = L(r.currentLocation.pathname, a) || r.currentLocation.pathname, s = L(r.nextLocation.pathname, a) || r.nextLocation.pathname;
  return J(n.pathname, s) != null || J(n.pathname, o) != null;
}
new TextEncoder();
[
  ...Tt
];
export {
  Re as L,
  Yt as M,
  Ut as N,
  qt as R,
  mt as a
};
//# sourceMappingURL=chunk-LSOULM7L-ClSY6kIn.js.map
