import { g as na, c as re } from "./_commonjsHelpers-DaMA6jEr.js";
var fa, Po;
function ip() {
  return Po || (Po = 1, fa = (e) => {
    const r = e.match(/^[ \t]*(?=\S)/gm);
    return r ? r.reduce((t, i) => Math.min(t, i.length), 1 / 0) : 0;
  }), fa;
}
var ma, xo;
function sp() {
  if (xo) return ma;
  xo = 1;
  const e = ip();
  return ma = (r) => {
    const t = e(r);
    if (t === 0)
      return r;
    const i = new RegExp(`^[ \\t]{${t}}`, "gm");
    return r.replace(i, "");
  }, ma;
}
var va, wo;
function lp() {
  return wo || (wo = 1, va = (e, r = 1, t) => {
    if (t = {
      indent: " ",
      includeEmptyLines: !1,
      ...t
    }, typeof e != "string")
      throw new TypeError(
        `Expected \`input\` to be a \`string\`, got \`${typeof e}\``
      );
    if (typeof r != "number")
      throw new TypeError(
        `Expected \`count\` to be a \`number\`, got \`${typeof r}\``
      );
    if (typeof t.indent != "string")
      throw new TypeError(
        `Expected \`options.indent\` to be a \`string\`, got \`${typeof t.indent}\``
      );
    if (r === 0)
      return e;
    const i = t.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
    return e.replace(i, t.indent.repeat(r));
  }), va;
}
var ha, Eo;
function up() {
  if (Eo) return ha;
  Eo = 1;
  const e = sp(), r = lp();
  return ha = (t, i = 0, a) => r(e(t), i, a), ha;
}
var cp = up();
const Oo = /* @__PURE__ */ na(cp);
function yc(e) {
  Object.defineProperty(e, "__esModule", { value: !0, configurable: !0 });
}
function vo(e, r, t, i) {
  Object.defineProperty(e, r, { get: t, set: i, enumerable: !0, configurable: !0 });
}
var qc = {};
yc(qc);
vo(qc, "default", () => Cc);
class Cc extends Error {
  constructor(r, t, i, a, n) {
    super(r + ":" + i + ":" + a + ": " + t), this.reason = t, this.filename = r, this.line = i, this.column = a, this.source = n;
  }
}
var _c = {};
yc(_c);
vo(_c, "default", () => Pc);
class Pc {
  constructor(r, t, i) {
    this.start = r, this.end = t, this.source = i;
  }
}
var dp = {};
vo(dp, "CssTypes", () => L);
var L = /* @__PURE__ */ function(e) {
  return e.stylesheet = "stylesheet", e.rule = "rule", e.declaration = "declaration", e.comment = "comment", e.container = "container", e.charset = "charset", e.document = "document", e.customMedia = "custom-media", e.fontFace = "font-face", e.host = "host", e.import = "import", e.keyframes = "keyframes", e.keyframe = "keyframe", e.layer = "layer", e.media = "media", e.namespace = "namespace", e.page = "page", e.startingStyle = "starting-style", e.supports = "supports", e;
}({});
const ba = /\/\*[^]*?(?:\*\/|$)/g, pp = (e, r) => {
  r = r || {};
  let t = 1, i = 1;
  function a(O) {
    const P = O.match(/\n/g);
    P && (t += P.length);
    const S = O.lastIndexOf(`
`);
    i = ~S ? O.length - S : i + O.length;
  }
  function n() {
    const O = {
      line: t,
      column: i
    };
    return function(P) {
      return P.position = new Pc(O, {
        line: t,
        column: i
      }, (r == null ? void 0 : r.source) || ""), v(), P;
    };
  }
  const o = [];
  function s(O) {
    const P = new Cc((r == null ? void 0 : r.source) || "", O, t, i, e);
    if (r != null && r.silent) o.push(P);
    else throw P;
  }
  function l() {
    const O = d();
    return {
      type: L.stylesheet,
      stylesheet: {
        source: r == null ? void 0 : r.source,
        rules: O,
        parsingErrors: o
      }
    };
  }
  function c() {
    return p(/^{\s*/);
  }
  function u() {
    return p(/^}/);
  }
  function d() {
    let O;
    const P = [];
    for (v(), C(P); e.length && e.charAt(0) !== "}" && (O = ae() || ne()); ) O && (P.push(O), C(P));
    return P;
  }
  function p(O) {
    const P = O.exec(e);
    if (!P) return;
    const S = P[0];
    return a(S), e = e.slice(S.length), P;
  }
  function v() {
    p(/^\s*/);
  }
  function C(O) {
    let P;
    for (O = O || []; P = g(); ) P && O.push(P);
    return O;
  }
  function g() {
    const O = n();
    if (e.charAt(0) !== "/" || e.charAt(1) !== "*") return;
    const P = p(/^\/\*[^]*?\*\//);
    return P ? O({
      type: L.comment,
      comment: P[0].slice(2, -2)
    }) : s("End of comment missing");
  }
  function _(O, P, S) {
    let E = P + 1, k = !1, U = O.indexOf(")", E);
    for (; !k && U !== -1; ) {
      const X = O.indexOf("(", E);
      X !== -1 && X < U ? (E = _(O, X + 1) + 1, U = O.indexOf(")", E)) : k = !0;
    }
    return k && U !== -1 ? U : -1;
  }
  function f() {
    const O = p(/^([^{]+)/);
    if (!O) return;
    let P = z(O[0]).replace(ba, "");
    if (P.indexOf(",") === -1) return [
      P
    ];
    let S = 0, E = P.indexOf("(", S);
    for (; E !== -1; ) {
      const k = _(P, E);
      if (k === -1) break;
      S = k + 1, P = P.substring(0, E) + P.substring(E, k).replace(/,/g, "‌") + P.substring(k), E = P.indexOf("(", S);
    }
    return P = P.replace(/("|')(?:\\\1|.)*?\1/g, (k) => k.replace(/,/g, "‌")), P.split(",").map((k) => z(k.replace(/\u200C/g, ",")));
  }
  function y() {
    const O = n(), P = p(/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/);
    if (!P) return;
    const S = z(P[0]);
    if (!p(/^:\s*/)) return s("property missing ':'");
    const E = p(/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|[^)])*?\)|[^};])+)/), k = O({
      type: L.declaration,
      property: S.replace(ba, ""),
      value: E ? z(E[0]).replace(ba, "") : ""
    });
    return p(/^[;\s]*/), k;
  }
  function q() {
    const O = [];
    if (!c()) return s("missing '{'");
    C(O);
    let P;
    for (; P = y(); ) P && (O.push(P), C(O));
    return u() ? O : s("missing '}'");
  }
  function R() {
    let O;
    const P = [], S = n();
    for (; O = p(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/); )
      P.push(O[1]), p(/^,\s*/);
    if (P.length)
      return S({
        type: L.keyframe,
        values: P,
        declarations: q() || []
      });
  }
  function m() {
    const O = n(), P = p(/^@([-\w]+)?keyframes\s*/);
    if (!P) return;
    const S = P[1], E = p(/^([-\w]+)\s*/);
    if (!E) return s("@keyframes missing name");
    const k = E[1];
    if (!c()) return s("@keyframes missing '{'");
    let U, X = C();
    for (; U = R(); )
      X.push(U), X = X.concat(C());
    return u() ? O({
      type: L.keyframes,
      name: k,
      vendor: S,
      keyframes: X
    }) : s("@keyframes missing '}'");
  }
  function h() {
    const O = n(), P = p(/^@supports *([^{]+)/);
    if (!P) return;
    const S = z(P[1]);
    if (!c()) return s("@supports missing '{'");
    const E = C().concat(d());
    return u() ? O({
      type: L.supports,
      supports: S,
      rules: E
    }) : s("@supports missing '}'");
  }
  function b() {
    const O = n();
    if (!p(/^@host\s*/)) return;
    if (!c()) return s("@host missing '{'");
    const S = C().concat(d());
    return u() ? O({
      type: L.host,
      rules: S
    }) : s("@host missing '}'");
  }
  function x() {
    const O = n(), P = p(/^@container *([^{]+)/);
    if (!P) return;
    const S = z(P[1]);
    if (!c()) return s("@container missing '{'");
    const E = C().concat(d());
    return u() ? O({
      type: L.container,
      container: S,
      rules: E
    }) : s("@container missing '}'");
  }
  function A() {
    const O = n(), P = p(/^@layer *([^{;@]+)/);
    if (!P) return;
    const S = z(P[1]);
    if (!c())
      return p(/^[;\s]*/), O({
        type: L.layer,
        layer: S
      });
    const E = C().concat(d());
    return u() ? O({
      type: L.layer,
      layer: S,
      rules: E
    }) : s("@layer missing '}'");
  }
  function T() {
    const O = n(), P = p(/^@media *([^{]+)/);
    if (!P) return;
    const S = z(P[1]);
    if (!c()) return s("@media missing '{'");
    const E = C().concat(d());
    return u() ? O({
      type: L.media,
      media: S,
      rules: E
    }) : s("@media missing '}'");
  }
  function M() {
    const O = n(), P = p(/^@custom-media\s+(--\S+)\s*([^{;\s][^{;]*);/);
    if (P)
      return O({
        type: L.customMedia,
        name: z(P[1]),
        media: z(P[2])
      });
  }
  function j() {
    const O = n();
    if (!p(/^@page */)) return;
    const S = f() || [];
    if (!c()) return s("@page missing '{'");
    let E = C(), k;
    for (; k = y(); )
      E.push(k), E = E.concat(C());
    return u() ? O({
      type: L.page,
      selectors: S,
      declarations: E
    }) : s("@page missing '}'");
  }
  function $() {
    const O = n(), P = p(/^@([-\w]+)?document *([^{]+)/);
    if (!P) return;
    const S = z(P[1]), E = z(P[2]);
    if (!c()) return s("@document missing '{'");
    const k = C().concat(d());
    return u() ? O({
      type: L.document,
      document: E,
      vendor: S,
      rules: k
    }) : s("@document missing '}'");
  }
  function H() {
    const O = n();
    if (!p(/^@font-face\s*/)) return;
    if (!c()) return s("@font-face missing '{'");
    let S = C(), E;
    for (; E = y(); )
      S.push(E), S = S.concat(C());
    return u() ? O({
      type: L.fontFace,
      declarations: S
    }) : s("@font-face missing '}'");
  }
  function I() {
    const O = n();
    if (!p(/^@starting-style\s*/)) return;
    if (!c()) return s("@starting-style missing '{'");
    const S = C().concat(d());
    return u() ? O({
      type: L.startingStyle,
      rules: S
    }) : s("@starting-style missing '}'");
  }
  const G = ee("import"), W = ee("charset"), Y = ee("namespace");
  function ee(O) {
    const P = new RegExp("^@" + O + `\\s*((?::?[^;'"]|"(?:\\\\"|[^"])*?"|'(?:\\\\'|[^'])*?')+)(?:;|$)`);
    return function() {
      const S = n(), E = p(P);
      if (!E) return;
      const k = {
        type: O
      };
      return k[O] = E[1].trim(), S(k);
    };
  }
  function ae() {
    if (e[0] === "@")
      return m() || T() || M() || h() || G() || W() || Y() || $() || j() || b() || H() || x() || I() || A();
  }
  function ne() {
    const O = n(), P = f();
    return P ? (C(), O({
      type: L.rule,
      selectors: P,
      declarations: q() || []
    })) : s("selector missing");
  }
  return io(l());
};
function z(e) {
  return e ? e.trim() : "";
}
function io(e, r) {
  const t = e && typeof e.type == "string", i = t ? e : r;
  for (const a in e) {
    const n = e[a];
    Array.isArray(n) ? n.forEach((o) => {
      io(o, i);
    }) : n && typeof n == "object" && io(n, i);
  }
  return t && Object.defineProperty(e, "parent", {
    configurable: !0,
    writable: !0,
    enumerable: !1,
    value: r || null
  }), e;
}
var fp = pp;
const mp = fp;
var vp = Object.prototype.toString;
function hp(e) {
  return typeof e == "function" || vp.call(e) === "[object Function]";
}
function bp(e) {
  var r = Number(e);
  return isNaN(r) ? 0 : r === 0 || !isFinite(r) ? r : (r > 0 ? 1 : -1) * Math.floor(Math.abs(r));
}
var Rp = Math.pow(2, 53) - 1;
function gp(e) {
  var r = bp(e);
  return Math.min(Math.max(r, 0), Rp);
}
function K(e, r) {
  var t = Array, i = Object(e);
  if (e == null)
    throw new TypeError("Array.from requires an array-like object - not null or undefined");
  for (var a = gp(i.length), n = hp(t) ? Object(new t(a)) : new Array(a), o = 0, s; o < a; )
    s = i[o], n[o] = s, o += 1;
  return n.length = a, n;
}
function Xt(e) {
  "@babel/helpers - typeof";
  return Xt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Xt(e);
}
function yp(e, r) {
  if (!(e instanceof r))
    throw new TypeError("Cannot call a class as a function");
}
function qp(e, r) {
  for (var t = 0; t < r.length; t++) {
    var i = r[t];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, xc(i.key), i);
  }
}
function Cp(e, r, t) {
  return r && qp(e.prototype, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function _p(e, r, t) {
  return r = xc(r), r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function xc(e) {
  var r = Pp(e, "string");
  return Xt(r) === "symbol" ? r : String(r);
}
function Pp(e, r) {
  if (Xt(e) !== "object" || e === null) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var i = t.call(e, r);
    if (Xt(i) !== "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(e);
}
var xp = /* @__PURE__ */ function() {
  function e() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    yp(this, e), _p(this, "items", void 0), this.items = r;
  }
  return Cp(e, [{
    key: "add",
    value: function(t) {
      return this.has(t) === !1 && this.items.push(t), this;
    }
  }, {
    key: "clear",
    value: function() {
      this.items = [];
    }
  }, {
    key: "delete",
    value: function(t) {
      var i = this.items.length;
      return this.items = this.items.filter(function(a) {
        return a !== t;
      }), i !== this.items.length;
    }
  }, {
    key: "forEach",
    value: function(t) {
      var i = this;
      this.items.forEach(function(a) {
        t(a, a, i);
      });
    }
  }, {
    key: "has",
    value: function(t) {
      return this.items.indexOf(t) !== -1;
    }
  }, {
    key: "size",
    get: function() {
      return this.items.length;
    }
  }]), e;
}();
const wp = typeof Set > "u" ? Set : xp;
function B(e) {
  var r;
  return (
    // eslint-disable-next-line no-restricted-properties -- actual guard for environments without localName
    (r = e.localName) !== null && r !== void 0 ? r : (
      // eslint-disable-next-line no-restricted-properties -- required for the fallback
      e.tagName.toLowerCase()
    )
  );
}
var Ep = {
  article: "article",
  aside: "complementary",
  button: "button",
  datalist: "listbox",
  dd: "definition",
  details: "group",
  dialog: "dialog",
  dt: "term",
  fieldset: "group",
  figure: "figure",
  // WARNING: Only with an accessible name
  form: "form",
  footer: "contentinfo",
  h1: "heading",
  h2: "heading",
  h3: "heading",
  h4: "heading",
  h5: "heading",
  h6: "heading",
  header: "banner",
  hr: "separator",
  html: "document",
  legend: "legend",
  li: "listitem",
  math: "math",
  main: "main",
  menu: "list",
  nav: "navigation",
  ol: "list",
  optgroup: "group",
  // WARNING: Only in certain context
  option: "option",
  output: "status",
  progress: "progressbar",
  // WARNING: Only with an accessible name
  section: "region",
  summary: "button",
  table: "table",
  tbody: "rowgroup",
  textarea: "textbox",
  tfoot: "rowgroup",
  // WARNING: Only in certain context
  td: "cell",
  th: "columnheader",
  thead: "rowgroup",
  tr: "row",
  ul: "list"
}, Op = {
  caption: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  code: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  deletion: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  emphasis: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  generic: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby", "aria-roledescription"]),
  insertion: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  none: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  paragraph: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  presentation: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  strong: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  subscript: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  superscript: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"])
};
function Mp(e, r) {
  return [
    "aria-atomic",
    "aria-busy",
    "aria-controls",
    "aria-current",
    "aria-description",
    "aria-describedby",
    "aria-details",
    // "disabled",
    "aria-dropeffect",
    // "errormessage",
    "aria-flowto",
    "aria-grabbed",
    // "haspopup",
    "aria-hidden",
    // "invalid",
    "aria-keyshortcuts",
    "aria-label",
    "aria-labelledby",
    "aria-live",
    "aria-owns",
    "aria-relevant",
    "aria-roledescription"
  ].some(function(t) {
    var i;
    return e.hasAttribute(t) && !((i = Op[r]) !== null && i !== void 0 && i.has(t));
  });
}
function wc(e, r) {
  return Mp(e, r);
}
function Ap(e) {
  var r = Tp(e);
  if (r === null || so.indexOf(r) !== -1) {
    var t = Sp(e);
    if (so.indexOf(r || "") === -1 || wc(e, t || ""))
      return t;
  }
  return r;
}
function Sp(e) {
  var r = Ep[B(e)];
  if (r !== void 0)
    return r;
  switch (B(e)) {
    case "a":
    case "area":
    case "link":
      if (e.hasAttribute("href"))
        return "link";
      break;
    case "img":
      return e.getAttribute("alt") === "" && !wc(e, "img") ? "presentation" : "img";
    case "input": {
      var t = e, i = t.type;
      switch (i) {
        case "button":
        case "image":
        case "reset":
        case "submit":
          return "button";
        case "checkbox":
        case "radio":
          return i;
        case "range":
          return "slider";
        case "email":
        case "tel":
        case "text":
        case "url":
          return e.hasAttribute("list") ? "combobox" : "textbox";
        case "search":
          return e.hasAttribute("list") ? "combobox" : "searchbox";
        case "number":
          return "spinbutton";
        default:
          return null;
      }
    }
    case "select":
      return e.hasAttribute("multiple") || e.size > 1 ? "listbox" : "combobox";
  }
  return null;
}
function Tp(e) {
  var r = e.getAttribute("role");
  if (r !== null) {
    var t = r.trim().split(" ")[0];
    if (t.length > 0)
      return t;
  }
  return null;
}
var so = ["presentation", "none"];
function D(e) {
  return e !== null && e.nodeType === e.ELEMENT_NODE;
}
function Ec(e) {
  return D(e) && B(e) === "caption";
}
function ea(e) {
  return D(e) && B(e) === "input";
}
function jp(e) {
  return D(e) && B(e) === "optgroup";
}
function $p(e) {
  return D(e) && B(e) === "select";
}
function Np(e) {
  return D(e) && B(e) === "table";
}
function kp(e) {
  return D(e) && B(e) === "textarea";
}
function Dp(e) {
  var r = e.ownerDocument === null ? e : e.ownerDocument, t = r.defaultView;
  if (t === null)
    throw new TypeError("no window available");
  return t;
}
function Hp(e) {
  return D(e) && B(e) === "fieldset";
}
function Lp(e) {
  return D(e) && B(e) === "legend";
}
function Ip(e) {
  return D(e) && B(e) === "slot";
}
function Fp(e) {
  return D(e) && e.ownerSVGElement !== void 0;
}
function Bp(e) {
  return D(e) && B(e) === "svg";
}
function Up(e) {
  return Fp(e) && B(e) === "title";
}
function aa(e, r) {
  if (D(e) && e.hasAttribute(r)) {
    var t = e.getAttribute(r).split(" "), i = e.getRootNode ? e.getRootNode() : e.ownerDocument;
    return t.map(function(a) {
      return i.getElementById(a);
    }).filter(
      function(a) {
        return a !== null;
      }
      // TODO: why does this not narrow?
    );
  }
  return [];
}
function J(e, r) {
  return D(e) ? r.indexOf(Ap(e)) !== -1 : !1;
}
function Vp(e) {
  return e.trim().replace(/\s\s+/g, " ");
}
function Gp(e, r) {
  if (!D(e))
    return !1;
  if (e.hasAttribute("hidden") || e.getAttribute("aria-hidden") === "true")
    return !0;
  var t = r(e);
  return t.getPropertyValue("display") === "none" || t.getPropertyValue("visibility") === "hidden";
}
function zp(e) {
  return J(e, ["button", "combobox", "listbox", "textbox"]) || Oc(e, "range");
}
function Oc(e, r) {
  if (!D(e))
    return !1;
  switch (r) {
    case "range":
      return J(e, ["meter", "progressbar", "scrollbar", "slider", "spinbutton"]);
    default:
      throw new TypeError("No knowledge about abstract role '".concat(r, "'. This is likely a bug :("));
  }
}
function Mo(e, r) {
  var t = K(e.querySelectorAll(r));
  return aa(e, "aria-owns").forEach(function(i) {
    t.push.apply(t, K(i.querySelectorAll(r)));
  }), t;
}
function Kp(e) {
  return $p(e) ? e.selectedOptions || Mo(e, "[selected]") : Mo(e, '[aria-selected="true"]');
}
function Wp(e) {
  return J(e, so);
}
function Xp(e) {
  return Ec(e);
}
function Yp(e) {
  return J(e, ["button", "cell", "checkbox", "columnheader", "gridcell", "heading", "label", "legend", "link", "menuitem", "menuitemcheckbox", "menuitemradio", "option", "radio", "row", "rowheader", "switch", "tab", "tooltip", "treeitem"]);
}
function Jp(e) {
  return !1;
}
function Qp(e) {
  return ea(e) || kp(e) ? e.value : e.textContent || "";
}
function Ao(e) {
  var r = e.getPropertyValue("content");
  return /^["'].*["']$/.test(r) ? r.slice(1, -1) : "";
}
function Mc(e) {
  var r = B(e);
  return r === "button" || r === "input" && e.getAttribute("type") !== "hidden" || r === "meter" || r === "output" || r === "progress" || r === "select" || r === "textarea";
}
function Ac(e) {
  if (Mc(e))
    return e;
  var r = null;
  return e.childNodes.forEach(function(t) {
    if (r === null && D(t)) {
      var i = Ac(t);
      i !== null && (r = i);
    }
  }), r;
}
function Zp(e) {
  if (e.control !== void 0)
    return e.control;
  var r = e.getAttribute("for");
  return r !== null ? e.ownerDocument.getElementById(r) : Ac(e);
}
function ef(e) {
  var r = e.labels;
  if (r === null)
    return r;
  if (r !== void 0)
    return K(r);
  if (!Mc(e))
    return null;
  var t = e.ownerDocument;
  return K(t.querySelectorAll("label")).filter(function(i) {
    return Zp(i) === e;
  });
}
function rf(e) {
  var r = e.assignedNodes();
  return r.length === 0 ? K(e.childNodes) : r;
}
function Sc(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = new wp(), i = Dp(e), a = r.compute, n = a === void 0 ? "name" : a, o = r.computedStyleSupportsPseudoElements, s = o === void 0 ? r.getComputedStyle !== void 0 : o, l = r.getComputedStyle, c = l === void 0 ? i.getComputedStyle.bind(i) : l, u = r.hidden, d = u === void 0 ? !1 : u;
  function p(f, y) {
    var q = "";
    if (D(f) && s) {
      var R = c(f, "::before"), m = Ao(R);
      q = "".concat(m, " ").concat(q);
    }
    var h = Ip(f) ? rf(f) : K(f.childNodes).concat(aa(f, "aria-owns"));
    if (h.forEach(function(A) {
      var T = _(A, {
        isEmbeddedInLabel: y.isEmbeddedInLabel,
        isReferenced: !1,
        recursion: !0
      }), M = D(A) ? c(A).getPropertyValue("display") : "inline", j = M !== "inline" ? " " : "";
      q += "".concat(j).concat(T).concat(j);
    }), D(f) && s) {
      var b = c(f, "::after"), x = Ao(b);
      q = "".concat(q, " ").concat(x);
    }
    return q.trim();
  }
  function v(f, y) {
    var q = f.getAttributeNode(y);
    return q !== null && !t.has(q) && q.value.trim() !== "" ? (t.add(q), q.value) : null;
  }
  function C(f) {
    return D(f) ? v(f, "title") : null;
  }
  function g(f) {
    if (!D(f))
      return null;
    if (Hp(f)) {
      t.add(f);
      for (var y = K(f.childNodes), q = 0; q < y.length; q += 1) {
        var R = y[q];
        if (Lp(R))
          return _(R, {
            isEmbeddedInLabel: !1,
            isReferenced: !1,
            recursion: !1
          });
      }
    } else if (Np(f)) {
      t.add(f);
      for (var m = K(f.childNodes), h = 0; h < m.length; h += 1) {
        var b = m[h];
        if (Ec(b))
          return _(b, {
            isEmbeddedInLabel: !1,
            isReferenced: !1,
            recursion: !1
          });
      }
    } else if (Bp(f)) {
      t.add(f);
      for (var x = K(f.childNodes), A = 0; A < x.length; A += 1) {
        var T = x[A];
        if (Up(T))
          return T.textContent;
      }
      return null;
    } else if (B(f) === "img" || B(f) === "area") {
      var M = v(f, "alt");
      if (M !== null)
        return M;
    } else if (jp(f)) {
      var j = v(f, "label");
      if (j !== null)
        return j;
    }
    if (ea(f) && (f.type === "button" || f.type === "submit" || f.type === "reset")) {
      var $ = v(f, "value");
      if ($ !== null)
        return $;
      if (f.type === "submit")
        return "Submit";
      if (f.type === "reset")
        return "Reset";
    }
    var H = ef(f);
    if (H !== null && H.length !== 0)
      return t.add(f), K(H).map(function(Y) {
        return _(Y, {
          isEmbeddedInLabel: !0,
          isReferenced: !1,
          recursion: !0
        });
      }).filter(function(Y) {
        return Y.length > 0;
      }).join(" ");
    if (ea(f) && f.type === "image") {
      var I = v(f, "alt");
      if (I !== null)
        return I;
      var G = v(f, "title");
      return G !== null ? G : "Submit Query";
    }
    if (J(f, ["button"])) {
      var W = p(f, {
        isEmbeddedInLabel: !1
      });
      if (W !== "")
        return W;
    }
    return null;
  }
  function _(f, y) {
    if (t.has(f))
      return "";
    if (!d && Gp(f, c) && !y.isReferenced)
      return t.add(f), "";
    var q = D(f) ? f.getAttributeNode("aria-labelledby") : null, R = q !== null && !t.has(q) ? aa(f, "aria-labelledby") : [];
    if (n === "name" && !y.isReferenced && R.length > 0)
      return t.add(q), R.map(function(M) {
        return _(M, {
          isEmbeddedInLabel: y.isEmbeddedInLabel,
          isReferenced: !0,
          // this isn't recursion as specified, otherwise we would skip
          // `aria-label` in
          // <input id="myself" aria-label="foo" aria-labelledby="myself"
          recursion: !1
        });
      }).join(" ");
    var m = y.recursion && zp(f) && n === "name";
    if (!m) {
      var h = (D(f) && f.getAttribute("aria-label") || "").trim();
      if (h !== "" && n === "name")
        return t.add(f), h;
      if (!Wp(f)) {
        var b = g(f);
        if (b !== null)
          return t.add(f), b;
      }
    }
    if (J(f, ["menu"]))
      return t.add(f), "";
    if (m || y.isEmbeddedInLabel || y.isReferenced) {
      if (J(f, ["combobox", "listbox"])) {
        t.add(f);
        var x = Kp(f);
        return x.length === 0 ? ea(f) ? f.value : "" : K(x).map(function(M) {
          return _(M, {
            isEmbeddedInLabel: y.isEmbeddedInLabel,
            isReferenced: !1,
            recursion: !0
          });
        }).join(" ");
      }
      if (Oc(f, "range"))
        return t.add(f), f.hasAttribute("aria-valuetext") ? f.getAttribute("aria-valuetext") : f.hasAttribute("aria-valuenow") ? f.getAttribute("aria-valuenow") : f.getAttribute("value") || "";
      if (J(f, ["textbox"]))
        return t.add(f), Qp(f);
    }
    if (Yp(f) || D(f) && y.isReferenced || Xp(f) || Jp()) {
      var A = p(f, {
        isEmbeddedInLabel: y.isEmbeddedInLabel
      });
      if (A !== "")
        return t.add(f), A;
    }
    if (f.nodeType === f.TEXT_NODE)
      return t.add(f), f.textContent || "";
    if (y.recursion)
      return t.add(f), p(f, {
        isEmbeddedInLabel: y.isEmbeddedInLabel
      });
    var T = C(f);
    return T !== null ? (t.add(f), T) : (t.add(f), "");
  }
  return Vp(_(e, {
    isEmbeddedInLabel: !1,
    // by spec computeAccessibleDescription starts with the referenced elements as roots
    isReferenced: n === "description",
    recursion: !1
  }));
}
function Yt(e) {
  "@babel/helpers - typeof";
  return Yt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Yt(e);
}
function So(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    r && (i = i.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), t.push.apply(t, i);
  }
  return t;
}
function To(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? So(Object(t), !0).forEach(function(i) {
      tf(e, i, t[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : So(Object(t)).forEach(function(i) {
      Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(t, i));
    });
  }
  return e;
}
function tf(e, r, t) {
  return r = af(r), r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function af(e) {
  var r = nf(e, "string");
  return Yt(r) === "symbol" ? r : String(r);
}
function nf(e, r) {
  if (Yt(e) !== "object" || e === null) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var i = t.call(e, r);
    if (Yt(i) !== "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(e);
}
function of(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = aa(e, "aria-describedby").map(function(n) {
    return Sc(n, To(To({}, r), {}, {
      compute: "description"
    }));
  }).join(" ");
  if (t === "") {
    var i = e.getAttribute("aria-description");
    t = i === null ? "" : i;
  }
  if (t === "") {
    var a = e.getAttribute("title");
    t = a === null ? "" : a;
  }
  return t;
}
function sf(e) {
  return J(e, ["caption", "code", "deletion", "emphasis", "generic", "insertion", "none", "paragraph", "presentation", "strong", "subscript", "superscript"]);
}
function lf(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return sf(e) ? "" : Sc(e, r);
}
var V = {}, oe = {}, Zt = {}, ie = {}, jo;
function uf() {
  if (jo) return ie;
  jo = 1, Object.defineProperty(ie, "__esModule", {
    value: !0
  }), ie.default = void 0;
  function e() {
    var r = this, t = 0, i = {
      "@@iterator": function() {
        return i;
      },
      next: function() {
        if (t < r.length) {
          var n = r[t];
          return t = t + 1, {
            done: !1,
            value: n
          };
        } else
          return {
            done: !0
          };
      }
    };
    return i;
  }
  return ie.default = e, ie;
}
var $o;
function Jt() {
  if ($o) return Zt;
  $o = 1, Object.defineProperty(Zt, "__esModule", {
    value: !0
  }), Zt.default = i;
  var e = r(uf());
  function r(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function t(a) {
    "@babel/helpers - typeof";
    return t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
      return typeof n;
    } : function(n) {
      return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
    }, t(a);
  }
  function i(a, n) {
    return typeof Symbol == "function" && t(Symbol.iterator) === "symbol" && Object.defineProperty(a, Symbol.iterator, {
      value: e.default.bind(n)
    }), a;
  }
  return Zt;
}
var No;
function cf() {
  if (No) return oe;
  No = 1, Object.defineProperty(oe, "__esModule", {
    value: !0
  }), oe.default = void 0;
  var e = r(Jt());
  function r(u) {
    return u && u.__esModule ? u : { default: u };
  }
  function t(u, d) {
    return s(u) || o(u, d) || a(u, d) || i();
  }
  function i() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function a(u, d) {
    if (u) {
      if (typeof u == "string") return n(u, d);
      var p = {}.toString.call(u).slice(8, -1);
      return p === "Object" && u.constructor && (p = u.constructor.name), p === "Map" || p === "Set" ? Array.from(u) : p === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p) ? n(u, d) : void 0;
    }
  }
  function n(u, d) {
    (d == null || d > u.length) && (d = u.length);
    for (var p = 0, v = Array(d); p < d; p++) v[p] = u[p];
    return v;
  }
  function o(u, d) {
    var p = u == null ? null : typeof Symbol < "u" && u[Symbol.iterator] || u["@@iterator"];
    if (p != null) {
      var v, C, g, _, f = [], y = !0, q = !1;
      try {
        if (g = (p = p.call(u)).next, d === 0) {
          if (Object(p) !== p) return;
          y = !1;
        } else for (; !(y = (v = g.call(p)).done) && (f.push(v.value), f.length !== d); y = !0) ;
      } catch (R) {
        q = !0, C = R;
      } finally {
        try {
          if (!y && p.return != null && (_ = p.return(), Object(_) !== _)) return;
        } finally {
          if (q) throw C;
        }
      }
      return f;
    }
  }
  function s(u) {
    if (Array.isArray(u)) return u;
  }
  var l = [["aria-activedescendant", {
    type: "id"
  }], ["aria-atomic", {
    type: "boolean"
  }], ["aria-autocomplete", {
    type: "token",
    values: ["inline", "list", "both", "none"]
  }], ["aria-braillelabel", {
    type: "string"
  }], ["aria-brailleroledescription", {
    type: "string"
  }], ["aria-busy", {
    type: "boolean"
  }], ["aria-checked", {
    type: "tristate"
  }], ["aria-colcount", {
    type: "integer"
  }], ["aria-colindex", {
    type: "integer"
  }], ["aria-colspan", {
    type: "integer"
  }], ["aria-controls", {
    type: "idlist"
  }], ["aria-current", {
    type: "token",
    values: ["page", "step", "location", "date", "time", !0, !1]
  }], ["aria-describedby", {
    type: "idlist"
  }], ["aria-description", {
    type: "string"
  }], ["aria-details", {
    type: "id"
  }], ["aria-disabled", {
    type: "boolean"
  }], ["aria-dropeffect", {
    type: "tokenlist",
    values: ["copy", "execute", "link", "move", "none", "popup"]
  }], ["aria-errormessage", {
    type: "id"
  }], ["aria-expanded", {
    type: "boolean",
    allowundefined: !0
  }], ["aria-flowto", {
    type: "idlist"
  }], ["aria-grabbed", {
    type: "boolean",
    allowundefined: !0
  }], ["aria-haspopup", {
    type: "token",
    values: [!1, !0, "menu", "listbox", "tree", "grid", "dialog"]
  }], ["aria-hidden", {
    type: "boolean",
    allowundefined: !0
  }], ["aria-invalid", {
    type: "token",
    values: ["grammar", !1, "spelling", !0]
  }], ["aria-keyshortcuts", {
    type: "string"
  }], ["aria-label", {
    type: "string"
  }], ["aria-labelledby", {
    type: "idlist"
  }], ["aria-level", {
    type: "integer"
  }], ["aria-live", {
    type: "token",
    values: ["assertive", "off", "polite"]
  }], ["aria-modal", {
    type: "boolean"
  }], ["aria-multiline", {
    type: "boolean"
  }], ["aria-multiselectable", {
    type: "boolean"
  }], ["aria-orientation", {
    type: "token",
    values: ["vertical", "undefined", "horizontal"]
  }], ["aria-owns", {
    type: "idlist"
  }], ["aria-placeholder", {
    type: "string"
  }], ["aria-posinset", {
    type: "integer"
  }], ["aria-pressed", {
    type: "tristate"
  }], ["aria-readonly", {
    type: "boolean"
  }], ["aria-relevant", {
    type: "tokenlist",
    values: ["additions", "all", "removals", "text"]
  }], ["aria-required", {
    type: "boolean"
  }], ["aria-roledescription", {
    type: "string"
  }], ["aria-rowcount", {
    type: "integer"
  }], ["aria-rowindex", {
    type: "integer"
  }], ["aria-rowspan", {
    type: "integer"
  }], ["aria-selected", {
    type: "boolean",
    allowundefined: !0
  }], ["aria-setsize", {
    type: "integer"
  }], ["aria-sort", {
    type: "token",
    values: ["ascending", "descending", "none", "other"]
  }], ["aria-valuemax", {
    type: "number"
  }], ["aria-valuemin", {
    type: "number"
  }], ["aria-valuenow", {
    type: "number"
  }], ["aria-valuetext", {
    type: "string"
  }]], c = {
    entries: function() {
      return l;
    },
    forEach: function(d) {
      for (var p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, v = 0, C = l; v < C.length; v++) {
        var g = t(C[v], 2), _ = g[0], f = g[1];
        d.call(p, f, _, l);
      }
    },
    get: function(d) {
      var p = l.filter(function(v) {
        return v[0] === d;
      })[0];
      return p && p[1];
    },
    has: function(d) {
      return !!c.get(d);
    },
    keys: function() {
      return l.map(function(d) {
        var p = t(d, 1), v = p[0];
        return v;
      });
    },
    values: function() {
      return l.map(function(d) {
        var p = t(d, 2), v = p[1];
        return v;
      });
    }
  };
  return oe.default = (0, e.default)(c, c.entries()), oe;
}
var se = {}, ko;
function df() {
  if (ko) return se;
  ko = 1, Object.defineProperty(se, "__esModule", {
    value: !0
  }), se.default = void 0;
  var e = r(Jt());
  function r(u) {
    return u && u.__esModule ? u : { default: u };
  }
  function t(u, d) {
    return s(u) || o(u, d) || a(u, d) || i();
  }
  function i() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function a(u, d) {
    if (u) {
      if (typeof u == "string") return n(u, d);
      var p = {}.toString.call(u).slice(8, -1);
      return p === "Object" && u.constructor && (p = u.constructor.name), p === "Map" || p === "Set" ? Array.from(u) : p === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p) ? n(u, d) : void 0;
    }
  }
  function n(u, d) {
    (d == null || d > u.length) && (d = u.length);
    for (var p = 0, v = Array(d); p < d; p++) v[p] = u[p];
    return v;
  }
  function o(u, d) {
    var p = u == null ? null : typeof Symbol < "u" && u[Symbol.iterator] || u["@@iterator"];
    if (p != null) {
      var v, C, g, _, f = [], y = !0, q = !1;
      try {
        if (g = (p = p.call(u)).next, d === 0) {
          if (Object(p) !== p) return;
          y = !1;
        } else for (; !(y = (v = g.call(p)).done) && (f.push(v.value), f.length !== d); y = !0) ;
      } catch (R) {
        q = !0, C = R;
      } finally {
        try {
          if (!y && p.return != null && (_ = p.return(), Object(_) !== _)) return;
        } finally {
          if (q) throw C;
        }
      }
      return f;
    }
  }
  function s(u) {
    if (Array.isArray(u)) return u;
  }
  var l = [["a", {
    reserved: !1
  }], ["abbr", {
    reserved: !1
  }], ["acronym", {
    reserved: !1
  }], ["address", {
    reserved: !1
  }], ["applet", {
    reserved: !1
  }], ["area", {
    reserved: !1
  }], ["article", {
    reserved: !1
  }], ["aside", {
    reserved: !1
  }], ["audio", {
    reserved: !1
  }], ["b", {
    reserved: !1
  }], ["base", {
    reserved: !0
  }], ["bdi", {
    reserved: !1
  }], ["bdo", {
    reserved: !1
  }], ["big", {
    reserved: !1
  }], ["blink", {
    reserved: !1
  }], ["blockquote", {
    reserved: !1
  }], ["body", {
    reserved: !1
  }], ["br", {
    reserved: !1
  }], ["button", {
    reserved: !1
  }], ["canvas", {
    reserved: !1
  }], ["caption", {
    reserved: !1
  }], ["center", {
    reserved: !1
  }], ["cite", {
    reserved: !1
  }], ["code", {
    reserved: !1
  }], ["col", {
    reserved: !0
  }], ["colgroup", {
    reserved: !0
  }], ["content", {
    reserved: !1
  }], ["data", {
    reserved: !1
  }], ["datalist", {
    reserved: !1
  }], ["dd", {
    reserved: !1
  }], ["del", {
    reserved: !1
  }], ["details", {
    reserved: !1
  }], ["dfn", {
    reserved: !1
  }], ["dialog", {
    reserved: !1
  }], ["dir", {
    reserved: !1
  }], ["div", {
    reserved: !1
  }], ["dl", {
    reserved: !1
  }], ["dt", {
    reserved: !1
  }], ["em", {
    reserved: !1
  }], ["embed", {
    reserved: !1
  }], ["fieldset", {
    reserved: !1
  }], ["figcaption", {
    reserved: !1
  }], ["figure", {
    reserved: !1
  }], ["font", {
    reserved: !1
  }], ["footer", {
    reserved: !1
  }], ["form", {
    reserved: !1
  }], ["frame", {
    reserved: !1
  }], ["frameset", {
    reserved: !1
  }], ["h1", {
    reserved: !1
  }], ["h2", {
    reserved: !1
  }], ["h3", {
    reserved: !1
  }], ["h4", {
    reserved: !1
  }], ["h5", {
    reserved: !1
  }], ["h6", {
    reserved: !1
  }], ["head", {
    reserved: !0
  }], ["header", {
    reserved: !1
  }], ["hgroup", {
    reserved: !1
  }], ["hr", {
    reserved: !1
  }], ["html", {
    reserved: !0
  }], ["i", {
    reserved: !1
  }], ["iframe", {
    reserved: !1
  }], ["img", {
    reserved: !1
  }], ["input", {
    reserved: !1
  }], ["ins", {
    reserved: !1
  }], ["kbd", {
    reserved: !1
  }], ["keygen", {
    reserved: !1
  }], ["label", {
    reserved: !1
  }], ["legend", {
    reserved: !1
  }], ["li", {
    reserved: !1
  }], ["link", {
    reserved: !0
  }], ["main", {
    reserved: !1
  }], ["map", {
    reserved: !1
  }], ["mark", {
    reserved: !1
  }], ["marquee", {
    reserved: !1
  }], ["menu", {
    reserved: !1
  }], ["menuitem", {
    reserved: !1
  }], ["meta", {
    reserved: !0
  }], ["meter", {
    reserved: !1
  }], ["nav", {
    reserved: !1
  }], ["noembed", {
    reserved: !0
  }], ["noscript", {
    reserved: !0
  }], ["object", {
    reserved: !1
  }], ["ol", {
    reserved: !1
  }], ["optgroup", {
    reserved: !1
  }], ["option", {
    reserved: !1
  }], ["output", {
    reserved: !1
  }], ["p", {
    reserved: !1
  }], ["param", {
    reserved: !0
  }], ["picture", {
    reserved: !0
  }], ["pre", {
    reserved: !1
  }], ["progress", {
    reserved: !1
  }], ["q", {
    reserved: !1
  }], ["rp", {
    reserved: !1
  }], ["rt", {
    reserved: !1
  }], ["rtc", {
    reserved: !1
  }], ["ruby", {
    reserved: !1
  }], ["s", {
    reserved: !1
  }], ["samp", {
    reserved: !1
  }], ["script", {
    reserved: !0
  }], ["section", {
    reserved: !1
  }], ["select", {
    reserved: !1
  }], ["small", {
    reserved: !1
  }], ["source", {
    reserved: !0
  }], ["spacer", {
    reserved: !1
  }], ["span", {
    reserved: !1
  }], ["strike", {
    reserved: !1
  }], ["strong", {
    reserved: !1
  }], ["style", {
    reserved: !0
  }], ["sub", {
    reserved: !1
  }], ["summary", {
    reserved: !1
  }], ["sup", {
    reserved: !1
  }], ["table", {
    reserved: !1
  }], ["tbody", {
    reserved: !1
  }], ["td", {
    reserved: !1
  }], ["textarea", {
    reserved: !1
  }], ["tfoot", {
    reserved: !1
  }], ["th", {
    reserved: !1
  }], ["thead", {
    reserved: !1
  }], ["time", {
    reserved: !1
  }], ["title", {
    reserved: !0
  }], ["tr", {
    reserved: !1
  }], ["track", {
    reserved: !0
  }], ["tt", {
    reserved: !1
  }], ["u", {
    reserved: !1
  }], ["ul", {
    reserved: !1
  }], ["var", {
    reserved: !1
  }], ["video", {
    reserved: !1
  }], ["wbr", {
    reserved: !1
  }], ["xmp", {
    reserved: !1
  }]], c = {
    entries: function() {
      return l;
    },
    forEach: function(d) {
      for (var p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, v = 0, C = l; v < C.length; v++) {
        var g = t(C[v], 2), _ = g[0], f = g[1];
        d.call(p, f, _, l);
      }
    },
    get: function(d) {
      var p = l.filter(function(v) {
        return v[0] === d;
      })[0];
      return p && p[1];
    },
    has: function(d) {
      return !!c.get(d);
    },
    keys: function() {
      return l.map(function(d) {
        var p = t(d, 1), v = p[0];
        return v;
      });
    },
    values: function() {
      return l.map(function(d) {
        var p = t(d, 2), v = p[1];
        return v;
      });
    }
  };
  return se.default = (0, e.default)(c, c.entries()), se;
}
var le = {}, ue = {}, ce = {}, Do;
function pf() {
  if (Do) return ce;
  Do = 1, Object.defineProperty(ce, "__esModule", {
    value: !0
  }), ce.default = void 0;
  var e = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "widget"]]
  };
  return ce.default = e, ce;
}
var de = {}, Ho;
function ff() {
  if (Ho) return de;
  Ho = 1, Object.defineProperty(de, "__esModule", {
    value: !0
  }), de.default = void 0;
  var e = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-activedescendant": null,
      "aria-disabled": null
    },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "widget"]]
  };
  return de.default = e, de;
}
var pe = {}, Lo;
function mf() {
  if (Lo) return pe;
  Lo = 1, Object.defineProperty(pe, "__esModule", {
    value: !0
  }), pe.default = void 0;
  var e = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null
    },
    relatedConcepts: [{
      concept: {
        name: "input"
      },
      module: "XForms"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "widget"]]
  };
  return pe.default = e, pe;
}
var fe = {}, Io;
function vf() {
  if (Io) return fe;
  Io = 1, Object.defineProperty(fe, "__esModule", {
    value: !0
  }), fe.default = void 0;
  var e = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  };
  return fe.default = e, fe;
}
var me = {}, Fo;
function hf() {
  if (Fo) return me;
  Fo = 1, Object.defineProperty(me, "__esModule", {
    value: !0
  }), me.default = void 0;
  var e = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-valuemax": null,
      "aria-valuemin": null,
      "aria-valuenow": null
    },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure"]]
  };
  return me.default = e, me;
}
var ve = {}, Bo;
function bf() {
  if (Bo) return ve;
  Bo = 1, Object.defineProperty(ve, "__esModule", {
    value: !0
  }), ve.default = void 0;
  var e = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: [],
    prohibitedProps: [],
    props: {
      "aria-atomic": null,
      "aria-busy": null,
      "aria-controls": null,
      "aria-current": null,
      "aria-describedby": null,
      "aria-details": null,
      "aria-dropeffect": null,
      "aria-flowto": null,
      "aria-grabbed": null,
      "aria-hidden": null,
      "aria-keyshortcuts": null,
      "aria-label": null,
      "aria-labelledby": null,
      "aria-live": null,
      "aria-owns": null,
      "aria-relevant": null,
      "aria-roledescription": null
    },
    relatedConcepts: [{
      concept: {
        name: "role"
      },
      module: "XHTML"
    }, {
      concept: {
        name: "type"
      },
      module: "Dublin Core"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: []
  };
  return ve.default = e, ve;
}
var he = {}, Uo;
function Rf() {
  if (Uo) return he;
  Uo = 1, Object.defineProperty(he, "__esModule", {
    value: !0
  }), he.default = void 0;
  var e = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: [],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "frontmatter"
      },
      module: "DTB"
    }, {
      concept: {
        name: "level"
      },
      module: "DTB"
    }, {
      concept: {
        name: "level"
      },
      module: "SMIL"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure"]]
  };
  return he.default = e, he;
}
var be = {}, Vo;
function gf() {
  if (Vo) return be;
  Vo = 1, Object.defineProperty(be, "__esModule", {
    value: !0
  }), be.default = void 0;
  var e = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure"]]
  };
  return be.default = e, be;
}
var Re = {}, Go;
function yf() {
  if (Go) return Re;
  Go = 1, Object.defineProperty(Re, "__esModule", {
    value: !0
  }), Re.default = void 0;
  var e = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-orientation": null
    },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "widget", "composite"], ["roletype", "structure", "section", "group"]]
  };
  return Re.default = e, Re;
}
var ge = {}, zo;
function qf() {
  if (zo) return ge;
  zo = 1, Object.defineProperty(ge, "__esModule", {
    value: !0
  }), ge.default = void 0;
  var e = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: [],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype"]]
  };
  return ge.default = e, ge;
}
var ye = {}, Ko;
function Cf() {
  if (Ko) return ye;
  Ko = 1, Object.defineProperty(ye, "__esModule", {
    value: !0
  }), ye.default = void 0;
  var e = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: [],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype"]]
  };
  return ye.default = e, ye;
}
var qe = {}, Wo;
function _f() {
  if (Wo) return qe;
  Wo = 1, Object.defineProperty(qe, "__esModule", {
    value: !0
  }), qe.default = void 0;
  var e = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-modal": null
    },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype"]]
  };
  return qe.default = e, qe;
}
var Xo;
function Pf() {
  if (Xo) return ue;
  Xo = 1, Object.defineProperty(ue, "__esModule", {
    value: !0
  }), ue.default = void 0;
  var e = p(pf()), r = p(ff()), t = p(mf()), i = p(vf()), a = p(hf()), n = p(bf()), o = p(Rf()), s = p(gf()), l = p(yf()), c = p(qf()), u = p(Cf()), d = p(_f());
  function p(C) {
    return C && C.__esModule ? C : { default: C };
  }
  var v = [["command", e.default], ["composite", r.default], ["input", t.default], ["landmark", i.default], ["range", a.default], ["roletype", n.default], ["section", o.default], ["sectionhead", s.default], ["select", l.default], ["structure", c.default], ["widget", u.default], ["window", d.default]];
  return ue.default = v, ue;
}
var Ce = {}, _e = {}, Yo;
function xf() {
  if (Yo) return _e;
  Yo = 1, Object.defineProperty(_e, "__esModule", {
    value: !0
  }), _e.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-atomic": "true",
      "aria-live": "assertive"
    },
    relatedConcepts: [{
      concept: {
        name: "alert"
      },
      module: "XForms"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  };
  return _e.default = e, _e;
}
var Pe = {}, Jo;
function wf() {
  if (Jo) return Pe;
  Jo = 1, Object.defineProperty(Pe, "__esModule", {
    value: !0
  }), Pe.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "alert"
      },
      module: "XForms"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "alert"], ["roletype", "window", "dialog"]]
  };
  return Pe.default = e, Pe;
}
var xe = {}, Qo;
function Ef() {
  if (Qo) return xe;
  Qo = 1, Object.defineProperty(xe, "__esModule", {
    value: !0
  }), xe.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-activedescendant": null,
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "Device Independence Delivery Unit"
      }
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure"]]
  };
  return xe.default = e, xe;
}
var we = {}, Zo;
function Of() {
  if (Zo) return we;
  Zo = 1, Object.defineProperty(we, "__esModule", {
    value: !0
  }), we.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-posinset": null,
      "aria-setsize": null
    },
    relatedConcepts: [{
      concept: {
        name: "article"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "document"]]
  };
  return we.default = e, we;
}
var Ee = {}, ei;
function Mf() {
  if (ei) return Ee;
  ei = 1, Object.defineProperty(Ee, "__esModule", {
    value: !0
  }), Ee.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        constraints: ["scoped to the body element"],
        name: "header"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  };
  return Ee.default = e, Ee;
}
var Oe = {}, ri;
function Af() {
  if (ri) return Oe;
  ri = 1, Object.defineProperty(Oe, "__esModule", {
    value: !0
  }), Oe.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "blockquote"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  };
  return Oe.default = e, Oe;
}
var Me = {}, ti;
function Sf() {
  if (ti) return Me;
  ti = 1, Object.defineProperty(Me, "__esModule", {
    value: !0
  }), Me.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-pressed": null
    },
    relatedConcepts: [{
      concept: {
        attributes: [{
          name: "type",
          value: "button"
        }],
        name: "input"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          name: "type",
          value: "image"
        }],
        name: "input"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          name: "type",
          value: "reset"
        }],
        name: "input"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          name: "type",
          value: "submit"
        }],
        name: "input"
      },
      module: "HTML"
    }, {
      concept: {
        name: "button"
      },
      module: "HTML"
    }, {
      concept: {
        name: "trigger"
      },
      module: "XForms"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "widget", "command"]]
  };
  return Me.default = e, Me;
}
var Ae = {}, ai;
function Tf() {
  if (ai) return Ae;
  ai = 1, Object.defineProperty(Ae, "__esModule", {
    value: !0
  }), Ae.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["prohibited"],
    prohibitedProps: ["aria-label", "aria-labelledby"],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "caption"
      },
      module: "HTML"
    }],
    requireContextRole: ["figure", "grid", "table"],
    requiredContextRole: ["figure", "grid", "table"],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  };
  return Ae.default = e, Ae;
}
var Se = {}, ni;
function jf() {
  if (ni) return Se;
  ni = 1, Object.defineProperty(Se, "__esModule", {
    value: !0
  }), Se.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-colindex": null,
      "aria-colspan": null,
      "aria-rowindex": null,
      "aria-rowspan": null
    },
    relatedConcepts: [{
      concept: {
        constraints: ["ancestor table element has table role"],
        name: "td"
      },
      module: "HTML"
    }],
    requireContextRole: ["row"],
    requiredContextRole: ["row"],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  };
  return Se.default = e, Se;
}
var Te = {}, oi;
function $f() {
  if (oi) return Te;
  oi = 1, Object.defineProperty(Te, "__esModule", {
    value: !0
  }), Te.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-checked": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-invalid": null,
      "aria-readonly": null,
      "aria-required": null
    },
    relatedConcepts: [{
      concept: {
        attributes: [{
          name: "type",
          value: "checkbox"
        }],
        name: "input"
      },
      module: "HTML"
    }, {
      concept: {
        name: "option"
      },
      module: "ARIA"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {
      "aria-checked": null
    },
    superClass: [["roletype", "widget", "input"]]
  };
  return Te.default = e, Te;
}
var je = {}, ii;
function Nf() {
  if (ii) return je;
  ii = 1, Object.defineProperty(je, "__esModule", {
    value: !0
  }), je.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["prohibited"],
    prohibitedProps: ["aria-label", "aria-labelledby"],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "code"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  };
  return je.default = e, je;
}
var $e = {}, si;
function kf() {
  if (si) return $e;
  si = 1, Object.defineProperty($e, "__esModule", {
    value: !0
  }), $e.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-sort": null
    },
    relatedConcepts: [{
      concept: {
        name: "th"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          name: "scope",
          value: "col"
        }],
        name: "th"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          name: "scope",
          value: "colgroup"
        }],
        name: "th"
      },
      module: "HTML"
    }],
    requireContextRole: ["row"],
    requiredContextRole: ["row"],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "cell"], ["roletype", "structure", "section", "cell", "gridcell"], ["roletype", "widget", "gridcell"], ["roletype", "structure", "sectionhead"]]
  };
  return $e.default = e, $e;
}
var Ne = {}, li;
function Df() {
  if (li) return Ne;
  li = 1, Object.defineProperty(Ne, "__esModule", {
    value: !0
  }), Ne.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-activedescendant": null,
      "aria-autocomplete": null,
      "aria-errormessage": null,
      "aria-invalid": null,
      "aria-readonly": null,
      "aria-required": null,
      "aria-expanded": "false",
      "aria-haspopup": "listbox"
    },
    relatedConcepts: [{
      concept: {
        attributes: [{
          constraints: ["set"],
          name: "list"
        }, {
          name: "type",
          value: "email"
        }],
        name: "input"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          constraints: ["set"],
          name: "list"
        }, {
          name: "type",
          value: "search"
        }],
        name: "input"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          constraints: ["set"],
          name: "list"
        }, {
          name: "type",
          value: "tel"
        }],
        name: "input"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          constraints: ["set"],
          name: "list"
        }, {
          name: "type",
          value: "text"
        }],
        name: "input"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          constraints: ["set"],
          name: "list"
        }, {
          name: "type",
          value: "url"
        }],
        name: "input"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          constraints: ["set"],
          name: "list"
        }, {
          name: "type",
          value: "url"
        }],
        name: "input"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          constraints: ["undefined"],
          name: "multiple"
        }, {
          constraints: ["undefined"],
          name: "size"
        }],
        constraints: ["the multiple attribute is not set and the size attribute does not have a value greater than 1"],
        name: "select"
      },
      module: "HTML"
    }, {
      concept: {
        name: "select"
      },
      module: "XForms"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {
      "aria-controls": null,
      "aria-expanded": "false"
    },
    superClass: [["roletype", "widget", "input"]]
  };
  return Ne.default = e, Ne;
}
var ke = {}, ui;
function Hf() {
  if (ui) return ke;
  ui = 1, Object.defineProperty(ke, "__esModule", {
    value: !0
  }), ke.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        constraints: ["scoped to the body element", "scoped to the main element"],
        name: "aside"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          constraints: ["set"],
          name: "aria-label"
        }],
        constraints: ["scoped to a sectioning content element", "scoped to a sectioning root element other than body"],
        name: "aside"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          constraints: ["set"],
          name: "aria-labelledby"
        }],
        constraints: ["scoped to a sectioning content element", "scoped to a sectioning root element other than body"],
        name: "aside"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  };
  return ke.default = e, ke;
}
var De = {}, ci;
function Lf() {
  if (ci) return De;
  ci = 1, Object.defineProperty(De, "__esModule", {
    value: !0
  }), De.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        constraints: ["scoped to the body element"],
        name: "footer"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  };
  return De.default = e, De;
}
var He = {}, di;
function If() {
  if (di) return He;
  di = 1, Object.defineProperty(He, "__esModule", {
    value: !0
  }), He.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "dd"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  };
  return He.default = e, He;
}
var Le = {}, pi;
function Ff() {
  if (pi) return Le;
  pi = 1, Object.defineProperty(Le, "__esModule", {
    value: !0
  }), Le.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["prohibited"],
    prohibitedProps: ["aria-label", "aria-labelledby"],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "del"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  };
  return Le.default = e, Le;
}
var Ie = {}, fi;
function Bf() {
  if (fi) return Ie;
  fi = 1, Object.defineProperty(Ie, "__esModule", {
    value: !0
  }), Ie.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "dialog"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "window"]]
  };
  return Ie.default = e, Ie;
}
var Fe = {}, mi;
function Uf() {
  if (mi) return Fe;
  mi = 1, Object.defineProperty(Fe, "__esModule", {
    value: !0
  }), Fe.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      module: "DAISY Guide"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "list"]]
  };
  return Fe.default = e, Fe;
}
var Be = {}, vi;
function Vf() {
  if (vi) return Be;
  vi = 1, Object.defineProperty(Be, "__esModule", {
    value: !0
  }), Be.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "Device Independence Delivery Unit"
      }
    }, {
      concept: {
        name: "html"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure"]]
  };
  return Be.default = e, Be;
}
var Ue = {}, hi;
function Gf() {
  if (hi) return Ue;
  hi = 1, Object.defineProperty(Ue, "__esModule", {
    value: !0
  }), Ue.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["prohibited"],
    prohibitedProps: ["aria-label", "aria-labelledby"],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "em"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  };
  return Ue.default = e, Ue;
}
var Ve = {}, bi;
function zf() {
  if (bi) return Ve;
  bi = 1, Object.defineProperty(Ve, "__esModule", {
    value: !0
  }), Ve.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [["article"]],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "list"]]
  };
  return Ve.default = e, Ve;
}
var Ge = {}, Ri;
function Kf() {
  if (Ri) return Ge;
  Ri = 1, Object.defineProperty(Ge, "__esModule", {
    value: !0
  }), Ge.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "figure"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  };
  return Ge.default = e, Ge;
}
var ze = {}, gi;
function Wf() {
  if (gi) return ze;
  gi = 1, Object.defineProperty(ze, "__esModule", {
    value: !0
  }), ze.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        attributes: [{
          constraints: ["set"],
          name: "aria-label"
        }],
        name: "form"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          constraints: ["set"],
          name: "aria-labelledby"
        }],
        name: "form"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          constraints: ["set"],
          name: "name"
        }],
        name: "form"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  };
  return ze.default = e, ze;
}
var Ke = {}, yi;
function Xf() {
  if (yi) return Ke;
  yi = 1, Object.defineProperty(Ke, "__esModule", {
    value: !0
  }), Ke.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["prohibited"],
    prohibitedProps: ["aria-label", "aria-labelledby"],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "a"
      },
      module: "HTML"
    }, {
      concept: {
        name: "area"
      },
      module: "HTML"
    }, {
      concept: {
        name: "aside"
      },
      module: "HTML"
    }, {
      concept: {
        name: "b"
      },
      module: "HTML"
    }, {
      concept: {
        name: "bdo"
      },
      module: "HTML"
    }, {
      concept: {
        name: "body"
      },
      module: "HTML"
    }, {
      concept: {
        name: "data"
      },
      module: "HTML"
    }, {
      concept: {
        name: "div"
      },
      module: "HTML"
    }, {
      concept: {
        constraints: ["scoped to the main element", "scoped to a sectioning content element", "scoped to a sectioning root element other than body"],
        name: "footer"
      },
      module: "HTML"
    }, {
      concept: {
        constraints: ["scoped to the main element", "scoped to a sectioning content element", "scoped to a sectioning root element other than body"],
        name: "header"
      },
      module: "HTML"
    }, {
      concept: {
        name: "hgroup"
      },
      module: "HTML"
    }, {
      concept: {
        name: "i"
      },
      module: "HTML"
    }, {
      concept: {
        name: "pre"
      },
      module: "HTML"
    }, {
      concept: {
        name: "q"
      },
      module: "HTML"
    }, {
      concept: {
        name: "samp"
      },
      module: "HTML"
    }, {
      concept: {
        name: "section"
      },
      module: "HTML"
    }, {
      concept: {
        name: "small"
      },
      module: "HTML"
    }, {
      concept: {
        name: "span"
      },
      module: "HTML"
    }, {
      concept: {
        name: "u"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure"]]
  };
  return Ke.default = e, Ke;
}
var We = {}, qi;
function Yf() {
  if (qi) return We;
  qi = 1, Object.defineProperty(We, "__esModule", {
    value: !0
  }), We.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-multiselectable": null,
      "aria-readonly": null
    },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [["row"], ["row", "rowgroup"]],
    requiredProps: {},
    superClass: [["roletype", "widget", "composite"], ["roletype", "structure", "section", "table"]]
  };
  return We.default = e, We;
}
var Xe = {}, Ci;
function Jf() {
  if (Ci) return Xe;
  Ci = 1, Object.defineProperty(Xe, "__esModule", {
    value: !0
  }), Xe.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null,
      "aria-readonly": null,
      "aria-required": null,
      "aria-selected": null
    },
    relatedConcepts: [{
      concept: {
        constraints: ["ancestor table element has grid role", "ancestor table element has treegrid role"],
        name: "td"
      },
      module: "HTML"
    }],
    requireContextRole: ["row"],
    requiredContextRole: ["row"],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "cell"], ["roletype", "widget"]]
  };
  return Xe.default = e, Xe;
}
var Ye = {}, _i;
function Qf() {
  if (_i) return Ye;
  _i = 1, Object.defineProperty(Ye, "__esModule", {
    value: !0
  }), Ye.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-activedescendant": null,
      "aria-disabled": null
    },
    relatedConcepts: [{
      concept: {
        name: "details"
      },
      module: "HTML"
    }, {
      concept: {
        name: "fieldset"
      },
      module: "HTML"
    }, {
      concept: {
        name: "optgroup"
      },
      module: "HTML"
    }, {
      concept: {
        name: "address"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  };
  return Ye.default = e, Ye;
}
var Je = {}, Pi;
function Zf() {
  if (Pi) return Je;
  Pi = 1, Object.defineProperty(Je, "__esModule", {
    value: !0
  }), Je.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-level": "2"
    },
    relatedConcepts: [{
      concept: {
        name: "h1"
      },
      module: "HTML"
    }, {
      concept: {
        name: "h2"
      },
      module: "HTML"
    }, {
      concept: {
        name: "h3"
      },
      module: "HTML"
    }, {
      concept: {
        name: "h4"
      },
      module: "HTML"
    }, {
      concept: {
        name: "h5"
      },
      module: "HTML"
    }, {
      concept: {
        name: "h6"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {
      "aria-level": "2"
    },
    superClass: [["roletype", "structure", "sectionhead"]]
  };
  return Je.default = e, Je;
}
var Qe = {}, xi;
function em() {
  if (xi) return Qe;
  xi = 1, Object.defineProperty(Qe, "__esModule", {
    value: !0
  }), Qe.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        attributes: [{
          constraints: ["set"],
          name: "alt"
        }],
        name: "img"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          constraints: ["undefined"],
          name: "alt"
        }],
        name: "img"
      },
      module: "HTML"
    }, {
      concept: {
        name: "imggroup"
      },
      module: "DTB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  };
  return Qe.default = e, Qe;
}
var Ze = {}, wi;
function rm() {
  if (wi) return Ze;
  wi = 1, Object.defineProperty(Ze, "__esModule", {
    value: !0
  }), Ze.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["prohibited"],
    prohibitedProps: ["aria-label", "aria-labelledby"],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "ins"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  };
  return Ze.default = e, Ze;
}
var er = {}, Ei;
function tm() {
  if (Ei) return er;
  Ei = 1, Object.defineProperty(er, "__esModule", {
    value: !0
  }), er.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-expanded": null,
      "aria-haspopup": null
    },
    relatedConcepts: [{
      concept: {
        attributes: [{
          constraints: ["set"],
          name: "href"
        }],
        name: "a"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          constraints: ["set"],
          name: "href"
        }],
        name: "area"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "widget", "command"]]
  };
  return er.default = e, er;
}
var rr = {}, Oi;
function am() {
  if (Oi) return rr;
  Oi = 1, Object.defineProperty(rr, "__esModule", {
    value: !0
  }), rr.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "menu"
      },
      module: "HTML"
    }, {
      concept: {
        name: "ol"
      },
      module: "HTML"
    }, {
      concept: {
        name: "ul"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [["listitem"]],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  };
  return rr.default = e, rr;
}
var tr = {}, Mi;
function nm() {
  if (Mi) return tr;
  Mi = 1, Object.defineProperty(tr, "__esModule", {
    value: !0
  }), tr.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-invalid": null,
      "aria-multiselectable": null,
      "aria-readonly": null,
      "aria-required": null,
      "aria-orientation": "vertical"
    },
    relatedConcepts: [{
      concept: {
        attributes: [{
          constraints: [">1"],
          name: "size"
        }],
        constraints: ["the size attribute value is greater than 1"],
        name: "select"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          name: "multiple"
        }],
        name: "select"
      },
      module: "HTML"
    }, {
      concept: {
        name: "datalist"
      },
      module: "HTML"
    }, {
      concept: {
        name: "list"
      },
      module: "ARIA"
    }, {
      concept: {
        name: "select"
      },
      module: "XForms"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [["option", "group"], ["option"]],
    requiredProps: {},
    superClass: [["roletype", "widget", "composite", "select"], ["roletype", "structure", "section", "group", "select"]]
  };
  return tr.default = e, tr;
}
var ar = {}, Ai;
function om() {
  if (Ai) return ar;
  Ai = 1, Object.defineProperty(ar, "__esModule", {
    value: !0
  }), ar.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-level": null,
      "aria-posinset": null,
      "aria-setsize": null
    },
    relatedConcepts: [{
      concept: {
        constraints: ["direct descendant of ol", "direct descendant of ul", "direct descendant of menu"],
        name: "li"
      },
      module: "HTML"
    }, {
      concept: {
        name: "item"
      },
      module: "XForms"
    }],
    requireContextRole: ["directory", "list"],
    requiredContextRole: ["directory", "list"],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  };
  return ar.default = e, ar;
}
var nr = {}, Si;
function im() {
  if (Si) return nr;
  Si = 1, Object.defineProperty(nr, "__esModule", {
    value: !0
  }), nr.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-live": "polite"
    },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  };
  return nr.default = e, nr;
}
var or = {}, Ti;
function sm() {
  if (Ti) return or;
  Ti = 1, Object.defineProperty(or, "__esModule", {
    value: !0
  }), or.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "main"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  };
  return or.default = e, or;
}
var ir = {}, ji;
function lm() {
  if (ji) return ir;
  ji = 1, Object.defineProperty(ir, "__esModule", {
    value: !0
  }), ir.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["prohibited"],
    prohibitedProps: [],
    props: {
      "aria-braillelabel": null,
      "aria-brailleroledescription": null,
      "aria-description": null
    },
    relatedConcepts: [{
      concept: {
        name: "mark"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  };
  return ir.default = e, ir;
}
var sr = {}, $i;
function um() {
  if ($i) return sr;
  $i = 1, Object.defineProperty(sr, "__esModule", {
    value: !0
  }), sr.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  };
  return sr.default = e, sr;
}
var lr = {}, Ni;
function cm() {
  if (Ni) return lr;
  Ni = 1, Object.defineProperty(lr, "__esModule", {
    value: !0
  }), lr.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "math"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  };
  return lr.default = e, lr;
}
var ur = {}, ki;
function dm() {
  if (ki) return ur;
  ki = 1, Object.defineProperty(ur, "__esModule", {
    value: !0
  }), ur.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-orientation": "vertical"
    },
    relatedConcepts: [{
      concept: {
        name: "MENU"
      },
      module: "JAPI"
    }, {
      concept: {
        name: "list"
      },
      module: "ARIA"
    }, {
      concept: {
        name: "select"
      },
      module: "XForms"
    }, {
      concept: {
        name: "sidebar"
      },
      module: "DTB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [["menuitem", "group"], ["menuitemradio", "group"], ["menuitemcheckbox", "group"], ["menuitem"], ["menuitemcheckbox"], ["menuitemradio"]],
    requiredProps: {},
    superClass: [["roletype", "widget", "composite", "select"], ["roletype", "structure", "section", "group", "select"]]
  };
  return ur.default = e, ur;
}
var cr = {}, Di;
function pm() {
  if (Di) return cr;
  Di = 1, Object.defineProperty(cr, "__esModule", {
    value: !0
  }), cr.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-orientation": "horizontal"
    },
    relatedConcepts: [{
      concept: {
        name: "toolbar"
      },
      module: "ARIA"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [["menuitem", "group"], ["menuitemradio", "group"], ["menuitemcheckbox", "group"], ["menuitem"], ["menuitemcheckbox"], ["menuitemradio"]],
    requiredProps: {},
    superClass: [["roletype", "widget", "composite", "select", "menu"], ["roletype", "structure", "section", "group", "select", "menu"]]
  };
  return cr.default = e, cr;
}
var dr = {}, Hi;
function fm() {
  if (Hi) return dr;
  Hi = 1, Object.defineProperty(dr, "__esModule", {
    value: !0
  }), dr.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-posinset": null,
      "aria-setsize": null
    },
    relatedConcepts: [{
      concept: {
        name: "MENU_ITEM"
      },
      module: "JAPI"
    }, {
      concept: {
        name: "listitem"
      },
      module: "ARIA"
    }, {
      concept: {
        name: "option"
      },
      module: "ARIA"
    }],
    requireContextRole: ["group", "menu", "menubar"],
    requiredContextRole: ["group", "menu", "menubar"],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "widget", "command"]]
  };
  return dr.default = e, dr;
}
var pr = {}, Li;
function mm() {
  if (Li) return pr;
  Li = 1, Object.defineProperty(pr, "__esModule", {
    value: !0
  }), pr.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "menuitem"
      },
      module: "ARIA"
    }],
    requireContextRole: ["group", "menu", "menubar"],
    requiredContextRole: ["group", "menu", "menubar"],
    requiredOwnedElements: [],
    requiredProps: {
      "aria-checked": null
    },
    superClass: [["roletype", "widget", "input", "checkbox"], ["roletype", "widget", "command", "menuitem"]]
  };
  return pr.default = e, pr;
}
var fr = {}, Ii;
function vm() {
  if (Ii) return fr;
  Ii = 1, Object.defineProperty(fr, "__esModule", {
    value: !0
  }), fr.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "menuitem"
      },
      module: "ARIA"
    }],
    requireContextRole: ["group", "menu", "menubar"],
    requiredContextRole: ["group", "menu", "menubar"],
    requiredOwnedElements: [],
    requiredProps: {
      "aria-checked": null
    },
    superClass: [["roletype", "widget", "input", "checkbox", "menuitemcheckbox"], ["roletype", "widget", "command", "menuitem", "menuitemcheckbox"], ["roletype", "widget", "input", "radio"]]
  };
  return fr.default = e, fr;
}
var mr = {}, Fi;
function hm() {
  if (Fi) return mr;
  Fi = 1, Object.defineProperty(mr, "__esModule", {
    value: !0
  }), mr.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-valuetext": null,
      "aria-valuemax": "100",
      "aria-valuemin": "0"
    },
    relatedConcepts: [{
      concept: {
        name: "meter"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {
      "aria-valuenow": null
    },
    superClass: [["roletype", "structure", "range"]]
  };
  return mr.default = e, mr;
}
var vr = {}, Bi;
function bm() {
  if (Bi) return vr;
  Bi = 1, Object.defineProperty(vr, "__esModule", {
    value: !0
  }), vr.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "nav"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  };
  return vr.default = e, vr;
}
var hr = {}, Ui;
function Rm() {
  if (Ui) return hr;
  Ui = 1, Object.defineProperty(hr, "__esModule", {
    value: !0
  }), hr.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: [],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: []
  };
  return hr.default = e, hr;
}
var br = {}, Vi;
function gm() {
  if (Vi) return br;
  Vi = 1, Object.defineProperty(br, "__esModule", {
    value: !0
  }), br.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  };
  return br.default = e, br;
}
var Rr = {}, Gi;
function ym() {
  if (Gi) return Rr;
  Gi = 1, Object.defineProperty(Rr, "__esModule", {
    value: !0
  }), Rr.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-checked": null,
      "aria-posinset": null,
      "aria-setsize": null,
      "aria-selected": "false"
    },
    relatedConcepts: [{
      concept: {
        name: "item"
      },
      module: "XForms"
    }, {
      concept: {
        name: "listitem"
      },
      module: "ARIA"
    }, {
      concept: {
        name: "option"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {
      "aria-selected": "false"
    },
    superClass: [["roletype", "widget", "input"]]
  };
  return Rr.default = e, Rr;
}
var gr = {}, zi;
function qm() {
  if (zi) return gr;
  zi = 1, Object.defineProperty(gr, "__esModule", {
    value: !0
  }), gr.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["prohibited"],
    prohibitedProps: ["aria-label", "aria-labelledby"],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "p"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  };
  return gr.default = e, gr;
}
var yr = {}, Ki;
function Cm() {
  if (Ki) return yr;
  Ki = 1, Object.defineProperty(yr, "__esModule", {
    value: !0
  }), yr.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["prohibited"],
    prohibitedProps: ["aria-label", "aria-labelledby"],
    props: {},
    relatedConcepts: [{
      concept: {
        attributes: [{
          name: "alt",
          value: ""
        }],
        name: "img"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure"]]
  };
  return yr.default = e, yr;
}
var qr = {}, Wi;
function _m() {
  if (Wi) return qr;
  Wi = 1, Object.defineProperty(qr, "__esModule", {
    value: !0
  }), qr.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-valuetext": null
    },
    relatedConcepts: [{
      concept: {
        name: "progress"
      },
      module: "HTML"
    }, {
      concept: {
        name: "status"
      },
      module: "ARIA"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "range"], ["roletype", "widget"]]
  };
  return qr.default = e, qr;
}
var Cr = {}, Xi;
function Pm() {
  if (Xi) return Cr;
  Xi = 1, Object.defineProperty(Cr, "__esModule", {
    value: !0
  }), Cr.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-checked": null,
      "aria-posinset": null,
      "aria-setsize": null
    },
    relatedConcepts: [{
      concept: {
        attributes: [{
          name: "type",
          value: "radio"
        }],
        name: "input"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {
      "aria-checked": null
    },
    superClass: [["roletype", "widget", "input"]]
  };
  return Cr.default = e, Cr;
}
var _r = {}, Yi;
function xm() {
  if (Yi) return _r;
  Yi = 1, Object.defineProperty(_r, "__esModule", {
    value: !0
  }), _r.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-errormessage": null,
      "aria-invalid": null,
      "aria-readonly": null,
      "aria-required": null
    },
    relatedConcepts: [{
      concept: {
        name: "list"
      },
      module: "ARIA"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [["radio"]],
    requiredProps: {},
    superClass: [["roletype", "widget", "composite", "select"], ["roletype", "structure", "section", "group", "select"]]
  };
  return _r.default = e, _r;
}
var Pr = {}, Ji;
function wm() {
  if (Ji) return Pr;
  Ji = 1, Object.defineProperty(Pr, "__esModule", {
    value: !0
  }), Pr.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        attributes: [{
          constraints: ["set"],
          name: "aria-label"
        }],
        name: "section"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          constraints: ["set"],
          name: "aria-labelledby"
        }],
        name: "section"
      },
      module: "HTML"
    }, {
      concept: {
        name: "Device Independence Glossart perceivable unit"
      }
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  };
  return Pr.default = e, Pr;
}
var xr = {}, Qi;
function Em() {
  if (Qi) return xr;
  Qi = 1, Object.defineProperty(xr, "__esModule", {
    value: !0
  }), xr.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-colindex": null,
      "aria-expanded": null,
      "aria-level": null,
      "aria-posinset": null,
      "aria-rowindex": null,
      "aria-selected": null,
      "aria-setsize": null
    },
    relatedConcepts: [{
      concept: {
        name: "tr"
      },
      module: "HTML"
    }],
    requireContextRole: ["grid", "rowgroup", "table", "treegrid"],
    requiredContextRole: ["grid", "rowgroup", "table", "treegrid"],
    requiredOwnedElements: [["cell"], ["columnheader"], ["gridcell"], ["rowheader"]],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "group"], ["roletype", "widget"]]
  };
  return xr.default = e, xr;
}
var wr = {}, Zi;
function Om() {
  if (Zi) return wr;
  Zi = 1, Object.defineProperty(wr, "__esModule", {
    value: !0
  }), wr.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "tbody"
      },
      module: "HTML"
    }, {
      concept: {
        name: "tfoot"
      },
      module: "HTML"
    }, {
      concept: {
        name: "thead"
      },
      module: "HTML"
    }],
    requireContextRole: ["grid", "table", "treegrid"],
    requiredContextRole: ["grid", "table", "treegrid"],
    requiredOwnedElements: [["row"]],
    requiredProps: {},
    superClass: [["roletype", "structure"]]
  };
  return wr.default = e, wr;
}
var Er = {}, es;
function Mm() {
  if (es) return Er;
  es = 1, Object.defineProperty(Er, "__esModule", {
    value: !0
  }), Er.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-sort": null
    },
    relatedConcepts: [{
      concept: {
        attributes: [{
          name: "scope",
          value: "row"
        }],
        name: "th"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          name: "scope",
          value: "rowgroup"
        }],
        name: "th"
      },
      module: "HTML"
    }],
    requireContextRole: ["row", "rowgroup"],
    requiredContextRole: ["row", "rowgroup"],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "cell"], ["roletype", "structure", "section", "cell", "gridcell"], ["roletype", "widget", "gridcell"], ["roletype", "structure", "sectionhead"]]
  };
  return Er.default = e, Er;
}
var Or = {}, rs;
function Am() {
  if (rs) return Or;
  rs = 1, Object.defineProperty(Or, "__esModule", {
    value: !0
  }), Or.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-valuetext": null,
      "aria-orientation": "vertical",
      "aria-valuemax": "100",
      "aria-valuemin": "0"
    },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {
      "aria-controls": null,
      "aria-valuenow": null
    },
    superClass: [["roletype", "structure", "range"], ["roletype", "widget"]]
  };
  return Or.default = e, Or;
}
var Mr = {}, ts;
function Sm() {
  if (ts) return Mr;
  ts = 1, Object.defineProperty(Mr, "__esModule", {
    value: !0
  }), Mr.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  };
  return Mr.default = e, Mr;
}
var Ar = {}, as;
function Tm() {
  if (as) return Ar;
  as = 1, Object.defineProperty(Ar, "__esModule", {
    value: !0
  }), Ar.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        attributes: [{
          constraints: ["undefined"],
          name: "list"
        }, {
          name: "type",
          value: "search"
        }],
        constraints: ["the list attribute is not set"],
        name: "input"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "widget", "input", "textbox"]]
  };
  return Ar.default = e, Ar;
}
var Sr = {}, ns;
function jm() {
  if (ns) return Sr;
  ns = 1, Object.defineProperty(Sr, "__esModule", {
    value: !0
  }), Sr.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-orientation": "horizontal",
      "aria-valuemax": "100",
      "aria-valuemin": "0",
      "aria-valuenow": null,
      "aria-valuetext": null
    },
    relatedConcepts: [{
      concept: {
        name: "hr"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure"]]
  };
  return Sr.default = e, Sr;
}
var Tr = {}, os;
function $m() {
  if (os) return Tr;
  os = 1, Object.defineProperty(Tr, "__esModule", {
    value: !0
  }), Tr.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-errormessage": null,
      "aria-haspopup": null,
      "aria-invalid": null,
      "aria-readonly": null,
      "aria-valuetext": null,
      "aria-orientation": "horizontal",
      "aria-valuemax": "100",
      "aria-valuemin": "0"
    },
    relatedConcepts: [{
      concept: {
        attributes: [{
          name: "type",
          value: "range"
        }],
        name: "input"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {
      "aria-valuenow": null
    },
    superClass: [["roletype", "widget", "input"], ["roletype", "structure", "range"]]
  };
  return Tr.default = e, Tr;
}
var jr = {}, is;
function Nm() {
  if (is) return jr;
  is = 1, Object.defineProperty(jr, "__esModule", {
    value: !0
  }), jr.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-errormessage": null,
      "aria-invalid": null,
      "aria-readonly": null,
      "aria-required": null,
      "aria-valuetext": null,
      "aria-valuenow": "0"
    },
    relatedConcepts: [{
      concept: {
        attributes: [{
          name: "type",
          value: "number"
        }],
        name: "input"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "widget", "composite"], ["roletype", "widget", "input"], ["roletype", "structure", "range"]]
  };
  return jr.default = e, jr;
}
var $r = {}, ss;
function km() {
  if (ss) return $r;
  ss = 1, Object.defineProperty($r, "__esModule", {
    value: !0
  }), $r.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-atomic": "true",
      "aria-live": "polite"
    },
    relatedConcepts: [{
      concept: {
        name: "output"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  };
  return $r.default = e, $r;
}
var Nr = {}, ls;
function Dm() {
  if (ls) return Nr;
  ls = 1, Object.defineProperty(Nr, "__esModule", {
    value: !0
  }), Nr.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["prohibited"],
    prohibitedProps: ["aria-label", "aria-labelledby"],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "strong"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  };
  return Nr.default = e, Nr;
}
var kr = {}, us;
function Hm() {
  if (us) return kr;
  us = 1, Object.defineProperty(kr, "__esModule", {
    value: !0
  }), kr.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["prohibited"],
    prohibitedProps: ["aria-label", "aria-labelledby"],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "sub"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  };
  return kr.default = e, kr;
}
var Dr = {}, cs;
function Lm() {
  if (cs) return Dr;
  cs = 1, Object.defineProperty(Dr, "__esModule", {
    value: !0
  }), Dr.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["prohibited"],
    prohibitedProps: ["aria-label", "aria-labelledby"],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "sup"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  };
  return Dr.default = e, Dr;
}
var Hr = {}, ds;
function Im() {
  if (ds) return Hr;
  ds = 1, Object.defineProperty(Hr, "__esModule", {
    value: !0
  }), Hr.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "button"
      },
      module: "ARIA"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {
      "aria-checked": null
    },
    superClass: [["roletype", "widget", "input", "checkbox"]]
  };
  return Hr.default = e, Hr;
}
var Lr = {}, ps;
function Fm() {
  if (ps) return Lr;
  ps = 1, Object.defineProperty(Lr, "__esModule", {
    value: !0
  }), Lr.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-posinset": null,
      "aria-setsize": null,
      "aria-selected": "false"
    },
    relatedConcepts: [],
    requireContextRole: ["tablist"],
    requiredContextRole: ["tablist"],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "sectionhead"], ["roletype", "widget"]]
  };
  return Lr.default = e, Lr;
}
var Ir = {}, fs;
function Bm() {
  if (fs) return Ir;
  fs = 1, Object.defineProperty(Ir, "__esModule", {
    value: !0
  }), Ir.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-colcount": null,
      "aria-rowcount": null
    },
    relatedConcepts: [{
      concept: {
        name: "table"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [["row"], ["row", "rowgroup"]],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  };
  return Ir.default = e, Ir;
}
var Fr = {}, ms;
function Um() {
  if (ms) return Fr;
  ms = 1, Object.defineProperty(Fr, "__esModule", {
    value: !0
  }), Fr.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-level": null,
      "aria-multiselectable": null,
      "aria-orientation": "horizontal"
    },
    relatedConcepts: [{
      module: "DAISY",
      concept: {
        name: "guide"
      }
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [["tab"]],
    requiredProps: {},
    superClass: [["roletype", "widget", "composite"]]
  };
  return Fr.default = e, Fr;
}
var Br = {}, vs;
function Vm() {
  if (vs) return Br;
  vs = 1, Object.defineProperty(Br, "__esModule", {
    value: !0
  }), Br.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  };
  return Br.default = e, Br;
}
var Ur = {}, hs;
function Gm() {
  if (hs) return Ur;
  hs = 1, Object.defineProperty(Ur, "__esModule", {
    value: !0
  }), Ur.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "dfn"
      },
      module: "HTML"
    }, {
      concept: {
        name: "dt"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  };
  return Ur.default = e, Ur;
}
var Vr = {}, bs;
function zm() {
  if (bs) return Vr;
  bs = 1, Object.defineProperty(Vr, "__esModule", {
    value: !0
  }), Vr.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-activedescendant": null,
      "aria-autocomplete": null,
      "aria-errormessage": null,
      "aria-haspopup": null,
      "aria-invalid": null,
      "aria-multiline": null,
      "aria-placeholder": null,
      "aria-readonly": null,
      "aria-required": null
    },
    relatedConcepts: [{
      concept: {
        attributes: [{
          constraints: ["undefined"],
          name: "type"
        }, {
          constraints: ["undefined"],
          name: "list"
        }],
        constraints: ["the list attribute is not set"],
        name: "input"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          constraints: ["undefined"],
          name: "list"
        }, {
          name: "type",
          value: "email"
        }],
        constraints: ["the list attribute is not set"],
        name: "input"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          constraints: ["undefined"],
          name: "list"
        }, {
          name: "type",
          value: "tel"
        }],
        constraints: ["the list attribute is not set"],
        name: "input"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          constraints: ["undefined"],
          name: "list"
        }, {
          name: "type",
          value: "text"
        }],
        constraints: ["the list attribute is not set"],
        name: "input"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          constraints: ["undefined"],
          name: "list"
        }, {
          name: "type",
          value: "url"
        }],
        constraints: ["the list attribute is not set"],
        name: "input"
      },
      module: "HTML"
    }, {
      concept: {
        name: "input"
      },
      module: "XForms"
    }, {
      concept: {
        name: "textarea"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "widget", "input"]]
  };
  return Vr.default = e, Vr;
}
var Gr = {}, Rs;
function Km() {
  if (Rs) return Gr;
  Rs = 1, Object.defineProperty(Gr, "__esModule", {
    value: !0
  }), Gr.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "time"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  };
  return Gr.default = e, Gr;
}
var zr = {}, gs;
function Wm() {
  if (gs) return zr;
  gs = 1, Object.defineProperty(zr, "__esModule", {
    value: !0
  }), zr.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "status"]]
  };
  return zr.default = e, zr;
}
var Kr = {}, ys;
function Xm() {
  if (ys) return Kr;
  ys = 1, Object.defineProperty(Kr, "__esModule", {
    value: !0
  }), Kr.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-orientation": "horizontal"
    },
    relatedConcepts: [{
      concept: {
        name: "menubar"
      },
      module: "ARIA"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "group"]]
  };
  return Kr.default = e, Kr;
}
var Wr = {}, qs;
function Ym() {
  if (qs) return Wr;
  qs = 1, Object.defineProperty(Wr, "__esModule", {
    value: !0
  }), Wr.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  };
  return Wr.default = e, Wr;
}
var Xr = {}, Cs;
function Jm() {
  if (Cs) return Xr;
  Cs = 1, Object.defineProperty(Xr, "__esModule", {
    value: !0
  }), Xr.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-errormessage": null,
      "aria-invalid": null,
      "aria-multiselectable": null,
      "aria-required": null,
      "aria-orientation": "vertical"
    },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [["treeitem", "group"], ["treeitem"]],
    requiredProps: {},
    superClass: [["roletype", "widget", "composite", "select"], ["roletype", "structure", "section", "group", "select"]]
  };
  return Xr.default = e, Xr;
}
var Yr = {}, _s;
function Qm() {
  if (_s) return Yr;
  _s = 1, Object.defineProperty(Yr, "__esModule", {
    value: !0
  }), Yr.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [["row"], ["row", "rowgroup"]],
    requiredProps: {},
    superClass: [["roletype", "widget", "composite", "grid"], ["roletype", "structure", "section", "table", "grid"], ["roletype", "widget", "composite", "select", "tree"], ["roletype", "structure", "section", "group", "select", "tree"]]
  };
  return Yr.default = e, Yr;
}
var Jr = {}, Ps;
function Zm() {
  if (Ps) return Jr;
  Ps = 1, Object.defineProperty(Jr, "__esModule", {
    value: !0
  }), Jr.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-expanded": null,
      "aria-haspopup": null
    },
    relatedConcepts: [],
    requireContextRole: ["group", "tree"],
    requiredContextRole: ["group", "tree"],
    requiredOwnedElements: [],
    requiredProps: {
      "aria-selected": null
    },
    superClass: [["roletype", "structure", "section", "listitem"], ["roletype", "widget", "input", "option"]]
  };
  return Jr.default = e, Jr;
}
var xs;
function ev() {
  if (xs) return Ce;
  xs = 1, Object.defineProperty(Ce, "__esModule", {
    value: !0
  }), Ce.default = void 0;
  var e = w(xf()), r = w(wf()), t = w(Ef()), i = w(Of()), a = w(Mf()), n = w(Af()), o = w(Sf()), s = w(Tf()), l = w(jf()), c = w($f()), u = w(Nf()), d = w(kf()), p = w(Df()), v = w(Hf()), C = w(Lf()), g = w(If()), _ = w(Ff()), f = w(Bf()), y = w(Uf()), q = w(Vf()), R = w(Gf()), m = w(zf()), h = w(Kf()), b = w(Wf()), x = w(Xf()), A = w(Yf()), T = w(Jf()), M = w(Qf()), j = w(Zf()), $ = w(em()), H = w(rm()), I = w(tm()), G = w(am()), W = w(nm()), Y = w(om()), ee = w(im()), ae = w(sm()), ne = w(lm()), O = w(um()), P = w(cm()), S = w(dm()), E = w(pm()), k = w(fm()), U = w(mm()), X = w(vm()), _o = w(hm()), Cd = w(bm()), _d = w(Rm()), Pd = w(gm()), xd = w(ym()), wd = w(qm()), Ed = w(Cm()), Od = w(_m()), Md = w(Pm()), Ad = w(xm()), Sd = w(wm()), Td = w(Em()), jd = w(Om()), $d = w(Mm()), Nd = w(Am()), kd = w(Sm()), Dd = w(Tm()), Hd = w(jm()), Ld = w($m()), Id = w(Nm()), Fd = w(km()), Bd = w(Dm()), Ud = w(Hm()), Vd = w(Lm()), Gd = w(Im()), zd = w(Fm()), Kd = w(Bm()), Wd = w(Um()), Xd = w(Vm()), Yd = w(Gm()), Jd = w(zm()), Qd = w(Km()), Zd = w(Wm()), ep = w(Xm()), rp = w(Ym()), tp = w(Jm()), ap = w(Qm()), np = w(Zm());
  function w(Qt) {
    return Qt && Qt.__esModule ? Qt : { default: Qt };
  }
  var op = [["alert", e.default], ["alertdialog", r.default], ["application", t.default], ["article", i.default], ["banner", a.default], ["blockquote", n.default], ["button", o.default], ["caption", s.default], ["cell", l.default], ["checkbox", c.default], ["code", u.default], ["columnheader", d.default], ["combobox", p.default], ["complementary", v.default], ["contentinfo", C.default], ["definition", g.default], ["deletion", _.default], ["dialog", f.default], ["directory", y.default], ["document", q.default], ["emphasis", R.default], ["feed", m.default], ["figure", h.default], ["form", b.default], ["generic", x.default], ["grid", A.default], ["gridcell", T.default], ["group", M.default], ["heading", j.default], ["img", $.default], ["insertion", H.default], ["link", I.default], ["list", G.default], ["listbox", W.default], ["listitem", Y.default], ["log", ee.default], ["main", ae.default], ["mark", ne.default], ["marquee", O.default], ["math", P.default], ["menu", S.default], ["menubar", E.default], ["menuitem", k.default], ["menuitemcheckbox", U.default], ["menuitemradio", X.default], ["meter", _o.default], ["navigation", Cd.default], ["none", _d.default], ["note", Pd.default], ["option", xd.default], ["paragraph", wd.default], ["presentation", Ed.default], ["progressbar", Od.default], ["radio", Md.default], ["radiogroup", Ad.default], ["region", Sd.default], ["row", Td.default], ["rowgroup", jd.default], ["rowheader", $d.default], ["scrollbar", Nd.default], ["search", kd.default], ["searchbox", Dd.default], ["separator", Hd.default], ["slider", Ld.default], ["spinbutton", Id.default], ["status", Fd.default], ["strong", Bd.default], ["subscript", Ud.default], ["superscript", Vd.default], ["switch", Gd.default], ["tab", zd.default], ["table", Kd.default], ["tablist", Wd.default], ["tabpanel", Xd.default], ["term", Yd.default], ["textbox", Jd.default], ["time", Qd.default], ["timer", Zd.default], ["toolbar", ep.default], ["tooltip", rp.default], ["tree", tp.default], ["treegrid", ap.default], ["treeitem", np.default]];
  return Ce.default = op, Ce;
}
var Qr = {}, Zr = {}, ws;
function rv() {
  if (ws) return Zr;
  ws = 1, Object.defineProperty(Zr, "__esModule", {
    value: !0
  }), Zr.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "abstract [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  };
  return Zr.default = e, Zr;
}
var et = {}, Es;
function tv() {
  if (Es) return et;
  Es = 1, Object.defineProperty(et, "__esModule", {
    value: !0
  }), et.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "acknowledgments [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  };
  return et.default = e, et;
}
var rt = {}, Os;
function av() {
  if (Os) return rt;
  Os = 1, Object.defineProperty(rt, "__esModule", {
    value: !0
  }), rt.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "afterword [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  };
  return rt.default = e, rt;
}
var tt = {}, Ms;
function nv() {
  if (Ms) return tt;
  Ms = 1, Object.defineProperty(tt, "__esModule", {
    value: !0
  }), tt.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "appendix [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  };
  return tt.default = e, tt;
}
var at = {}, As;
function ov() {
  if (As) return at;
  As = 1, Object.defineProperty(at, "__esModule", {
    value: !0
  }), at.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-errormessage": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "referrer [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "widget", "command", "link"]]
  };
  return at.default = e, at;
}
var nt = {}, Ss;
function iv() {
  if (Ss) return nt;
  Ss = 1, Object.defineProperty(nt, "__esModule", {
    value: !0
  }), nt.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "EPUB biblioentry [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: ["doc-bibliography"],
    requiredContextRole: ["doc-bibliography"],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "listitem"]]
  };
  return nt.default = e, nt;
}
var ot = {}, Ts;
function sv() {
  if (Ts) return ot;
  Ts = 1, Object.defineProperty(ot, "__esModule", {
    value: !0
  }), ot.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "bibliography [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [["doc-biblioentry"]],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  };
  return ot.default = e, ot;
}
var it = {}, js;
function lv() {
  if (js) return it;
  js = 1, Object.defineProperty(it, "__esModule", {
    value: !0
  }), it.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-errormessage": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "biblioref [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "widget", "command", "link"]]
  };
  return it.default = e, it;
}
var st = {}, $s;
function uv() {
  if ($s) return st;
  $s = 1, Object.defineProperty(st, "__esModule", {
    value: !0
  }), st.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "chapter [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  };
  return st.default = e, st;
}
var lt = {}, Ns;
function cv() {
  if (Ns) return lt;
  Ns = 1, Object.defineProperty(lt, "__esModule", {
    value: !0
  }), lt.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "colophon [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  };
  return lt.default = e, lt;
}
var ut = {}, ks;
function dv() {
  if (ks) return ut;
  ks = 1, Object.defineProperty(ut, "__esModule", {
    value: !0
  }), ut.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "conclusion [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  };
  return ut.default = e, ut;
}
var ct = {}, Ds;
function pv() {
  if (Ds) return ct;
  Ds = 1, Object.defineProperty(ct, "__esModule", {
    value: !0
  }), ct.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "cover [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "img"]]
  };
  return ct.default = e, ct;
}
var dt = {}, Hs;
function fv() {
  if (Hs) return dt;
  Hs = 1, Object.defineProperty(dt, "__esModule", {
    value: !0
  }), dt.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "credit [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  };
  return dt.default = e, dt;
}
var pt = {}, Ls;
function mv() {
  if (Ls) return pt;
  Ls = 1, Object.defineProperty(pt, "__esModule", {
    value: !0
  }), pt.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "credits [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  };
  return pt.default = e, pt;
}
var ft = {}, Is;
function vv() {
  if (Is) return ft;
  Is = 1, Object.defineProperty(ft, "__esModule", {
    value: !0
  }), ft.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "dedication [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  };
  return ft.default = e, ft;
}
var mt = {}, Fs;
function hv() {
  if (Fs) return mt;
  Fs = 1, Object.defineProperty(mt, "__esModule", {
    value: !0
  }), mt.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "rearnote [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: ["doc-endnotes"],
    requiredContextRole: ["doc-endnotes"],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "listitem"]]
  };
  return mt.default = e, mt;
}
var vt = {}, Bs;
function bv() {
  if (Bs) return vt;
  Bs = 1, Object.defineProperty(vt, "__esModule", {
    value: !0
  }), vt.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "rearnotes [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [["doc-endnote"]],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  };
  return vt.default = e, vt;
}
var ht = {}, Us;
function Rv() {
  if (Us) return ht;
  Us = 1, Object.defineProperty(ht, "__esModule", {
    value: !0
  }), ht.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "epigraph [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  };
  return ht.default = e, ht;
}
var bt = {}, Vs;
function gv() {
  if (Vs) return bt;
  Vs = 1, Object.defineProperty(bt, "__esModule", {
    value: !0
  }), bt.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "epilogue [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  };
  return bt.default = e, bt;
}
var Rt = {}, Gs;
function yv() {
  if (Gs) return Rt;
  Gs = 1, Object.defineProperty(Rt, "__esModule", {
    value: !0
  }), Rt.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "errata [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  };
  return Rt.default = e, Rt;
}
var gt = {}, zs;
function qv() {
  if (zs) return gt;
  zs = 1, Object.defineProperty(gt, "__esModule", {
    value: !0
  }), gt.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  };
  return gt.default = e, gt;
}
var yt = {}, Ks;
function Cv() {
  if (Ks) return yt;
  Ks = 1, Object.defineProperty(yt, "__esModule", {
    value: !0
  }), yt.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "footnote [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  };
  return yt.default = e, yt;
}
var qt = {}, Ws;
function _v() {
  if (Ws) return qt;
  Ws = 1, Object.defineProperty(qt, "__esModule", {
    value: !0
  }), qt.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "foreword [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  };
  return qt.default = e, qt;
}
var Ct = {}, Xs;
function Pv() {
  if (Xs) return Ct;
  Xs = 1, Object.defineProperty(Ct, "__esModule", {
    value: !0
  }), Ct.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "glossary [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [["definition"], ["term"]],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  };
  return Ct.default = e, Ct;
}
var _t = {}, Ys;
function xv() {
  if (Ys) return _t;
  Ys = 1, Object.defineProperty(_t, "__esModule", {
    value: !0
  }), _t.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-errormessage": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "glossref [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "widget", "command", "link"]]
  };
  return _t.default = e, _t;
}
var Pt = {}, Js;
function wv() {
  if (Js) return Pt;
  Js = 1, Object.defineProperty(Pt, "__esModule", {
    value: !0
  }), Pt.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "index [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark", "navigation"]]
  };
  return Pt.default = e, Pt;
}
var xt = {}, Qs;
function Ev() {
  if (Qs) return xt;
  Qs = 1, Object.defineProperty(xt, "__esModule", {
    value: !0
  }), xt.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "introduction [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  };
  return xt.default = e, xt;
}
var wt = {}, Zs;
function Ov() {
  if (Zs) return wt;
  Zs = 1, Object.defineProperty(wt, "__esModule", {
    value: !0
  }), wt.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-errormessage": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "noteref [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "widget", "command", "link"]]
  };
  return wt.default = e, wt;
}
var Et = {}, el;
function Mv() {
  if (el) return Et;
  el = 1, Object.defineProperty(Et, "__esModule", {
    value: !0
  }), Et.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "notice [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "note"]]
  };
  return Et.default = e, Et;
}
var Ot = {}, rl;
function Av() {
  if (rl) return Ot;
  rl = 1, Object.defineProperty(Ot, "__esModule", {
    value: !0
  }), Ot.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "pagebreak [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "separator"]]
  };
  return Ot.default = e, Ot;
}
var Mt = {}, tl;
function Sv() {
  if (tl) return Mt;
  tl = 1, Object.defineProperty(Mt, "__esModule", {
    value: !0
  }), Mt.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["prohibited"],
    prohibitedProps: [],
    props: {
      "aria-braillelabel": null,
      "aria-brailleroledescription": null,
      "aria-description": null,
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  };
  return Mt.default = e, Mt;
}
var At = {}, al;
function Tv() {
  if (al) return At;
  al = 1, Object.defineProperty(At, "__esModule", {
    value: !0
  }), At.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["prohibited"],
    prohibitedProps: [],
    props: {
      "aria-braillelabel": null,
      "aria-brailleroledescription": null,
      "aria-description": null,
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  };
  return At.default = e, At;
}
var St = {}, nl;
function jv() {
  if (nl) return St;
  nl = 1, Object.defineProperty(St, "__esModule", {
    value: !0
  }), St.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "page-list [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark", "navigation"]]
  };
  return St.default = e, St;
}
var Tt = {}, ol;
function $v() {
  if (ol) return Tt;
  ol = 1, Object.defineProperty(Tt, "__esModule", {
    value: !0
  }), Tt.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "part [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  };
  return Tt.default = e, Tt;
}
var jt = {}, il;
function Nv() {
  if (il) return jt;
  il = 1, Object.defineProperty(jt, "__esModule", {
    value: !0
  }), jt.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "preface [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  };
  return jt.default = e, jt;
}
var $t = {}, sl;
function kv() {
  if (sl) return $t;
  sl = 1, Object.defineProperty($t, "__esModule", {
    value: !0
  }), $t.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "prologue [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  };
  return $t.default = e, $t;
}
var Nt = {}, ll;
function Dv() {
  if (ll) return Nt;
  ll = 1, Object.defineProperty(Nt, "__esModule", {
    value: !0
  }), Nt.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "pullquote [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["none"]]
  };
  return Nt.default = e, Nt;
}
var kt = {}, ul;
function Hv() {
  if (ul) return kt;
  ul = 1, Object.defineProperty(kt, "__esModule", {
    value: !0
  }), kt.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "qna [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  };
  return kt.default = e, kt;
}
var Dt = {}, cl;
function Lv() {
  if (cl) return Dt;
  cl = 1, Object.defineProperty(Dt, "__esModule", {
    value: !0
  }), Dt.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "subtitle [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "sectionhead"]]
  };
  return Dt.default = e, Dt;
}
var Ht = {}, dl;
function Iv() {
  if (dl) return Ht;
  dl = 1, Object.defineProperty(Ht, "__esModule", {
    value: !0
  }), Ht.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "help [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "note"]]
  };
  return Ht.default = e, Ht;
}
var Lt = {}, pl;
function Fv() {
  if (pl) return Lt;
  pl = 1, Object.defineProperty(Lt, "__esModule", {
    value: !0
  }), Lt.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "toc [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark", "navigation"]]
  };
  return Lt.default = e, Lt;
}
var fl;
function Bv() {
  if (fl) return Qr;
  fl = 1, Object.defineProperty(Qr, "__esModule", {
    value: !0
  }), Qr.default = void 0;
  var e = E(rv()), r = E(tv()), t = E(av()), i = E(nv()), a = E(ov()), n = E(iv()), o = E(sv()), s = E(lv()), l = E(uv()), c = E(cv()), u = E(dv()), d = E(pv()), p = E(fv()), v = E(mv()), C = E(vv()), g = E(hv()), _ = E(bv()), f = E(Rv()), y = E(gv()), q = E(yv()), R = E(qv()), m = E(Cv()), h = E(_v()), b = E(Pv()), x = E(xv()), A = E(wv()), T = E(Ev()), M = E(Ov()), j = E(Mv()), $ = E(Av()), H = E(Sv()), I = E(Tv()), G = E(jv()), W = E($v()), Y = E(Nv()), ee = E(kv()), ae = E(Dv()), ne = E(Hv()), O = E(Lv()), P = E(Iv()), S = E(Fv());
  function E(U) {
    return U && U.__esModule ? U : { default: U };
  }
  var k = [["doc-abstract", e.default], ["doc-acknowledgments", r.default], ["doc-afterword", t.default], ["doc-appendix", i.default], ["doc-backlink", a.default], ["doc-biblioentry", n.default], ["doc-bibliography", o.default], ["doc-biblioref", s.default], ["doc-chapter", l.default], ["doc-colophon", c.default], ["doc-conclusion", u.default], ["doc-cover", d.default], ["doc-credit", p.default], ["doc-credits", v.default], ["doc-dedication", C.default], ["doc-endnote", g.default], ["doc-endnotes", _.default], ["doc-epigraph", f.default], ["doc-epilogue", y.default], ["doc-errata", q.default], ["doc-example", R.default], ["doc-footnote", m.default], ["doc-foreword", h.default], ["doc-glossary", b.default], ["doc-glossref", x.default], ["doc-index", A.default], ["doc-introduction", T.default], ["doc-noteref", M.default], ["doc-notice", j.default], ["doc-pagebreak", $.default], ["doc-pagefooter", H.default], ["doc-pageheader", I.default], ["doc-pagelist", G.default], ["doc-part", W.default], ["doc-preface", Y.default], ["doc-prologue", ee.default], ["doc-pullquote", ae.default], ["doc-qna", ne.default], ["doc-subtitle", O.default], ["doc-tip", P.default], ["doc-toc", S.default]];
  return Qr.default = k, Qr;
}
var It = {}, Ft = {}, ml;
function Uv() {
  if (ml) return Ft;
  ml = 1, Object.defineProperty(Ft, "__esModule", {
    value: !0
  }), Ft.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      module: "GRAPHICS",
      concept: {
        name: "graphics-object"
      }
    }, {
      module: "ARIA",
      concept: {
        name: "img"
      }
    }, {
      module: "ARIA",
      concept: {
        name: "article"
      }
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "document"]]
  };
  return Ft.default = e, Ft;
}
var Bt = {}, vl;
function Vv() {
  if (vl) return Bt;
  vl = 1, Object.defineProperty(Bt, "__esModule", {
    value: !0
  }), Bt.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      module: "GRAPHICS",
      concept: {
        name: "graphics-document"
      }
    }, {
      module: "ARIA",
      concept: {
        name: "group"
      }
    }, {
      module: "ARIA",
      concept: {
        name: "img"
      }
    }, {
      module: "GRAPHICS",
      concept: {
        name: "graphics-symbol"
      }
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "group"]]
  };
  return Bt.default = e, Bt;
}
var Ut = {}, hl;
function Gv() {
  if (hl) return Ut;
  hl = 1, Object.defineProperty(Ut, "__esModule", {
    value: !0
  }), Ut.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "img"]]
  };
  return Ut.default = e, Ut;
}
var bl;
function zv() {
  if (bl) return It;
  bl = 1, Object.defineProperty(It, "__esModule", {
    value: !0
  }), It.default = void 0;
  var e = i(Uv()), r = i(Vv()), t = i(Gv());
  function i(n) {
    return n && n.__esModule ? n : { default: n };
  }
  var a = [["graphics-document", e.default], ["graphics-object", r.default], ["graphics-symbol", t.default]];
  return It.default = a, It;
}
var Rl;
function ho() {
  if (Rl) return le;
  Rl = 1, Object.defineProperty(le, "__esModule", {
    value: !0
  }), le.default = void 0;
  var e = n(Pf()), r = n(ev()), t = n(Bv()), i = n(zv()), a = n(Jt());
  function n(g) {
    return g && g.__esModule ? g : { default: g };
  }
  function o(g, _) {
    var f = typeof Symbol < "u" && g[Symbol.iterator] || g["@@iterator"];
    if (!f) {
      if (Array.isArray(g) || (f = c(g)) || _) {
        f && (g = f);
        var y = 0, q = function() {
        };
        return { s: q, n: function() {
          return y >= g.length ? { done: !0 } : { done: !1, value: g[y++] };
        }, e: function(x) {
          throw x;
        }, f: q };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var R, m = !0, h = !1;
    return { s: function() {
      f = f.call(g);
    }, n: function() {
      var x = f.next();
      return m = x.done, x;
    }, e: function(x) {
      h = !0, R = x;
    }, f: function() {
      try {
        m || f.return == null || f.return();
      } finally {
        if (h) throw R;
      }
    } };
  }
  function s(g, _) {
    return p(g) || d(g, _) || c(g, _) || l();
  }
  function l() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function c(g, _) {
    if (g) {
      if (typeof g == "string") return u(g, _);
      var f = {}.toString.call(g).slice(8, -1);
      return f === "Object" && g.constructor && (f = g.constructor.name), f === "Map" || f === "Set" ? Array.from(g) : f === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f) ? u(g, _) : void 0;
    }
  }
  function u(g, _) {
    (_ == null || _ > g.length) && (_ = g.length);
    for (var f = 0, y = Array(_); f < _; f++) y[f] = g[f];
    return y;
  }
  function d(g, _) {
    var f = g == null ? null : typeof Symbol < "u" && g[Symbol.iterator] || g["@@iterator"];
    if (f != null) {
      var y, q, R, m, h = [], b = !0, x = !1;
      try {
        if (R = (f = f.call(g)).next, _ === 0) {
          if (Object(f) !== f) return;
          b = !1;
        } else for (; !(b = (y = R.call(f)).done) && (h.push(y.value), h.length !== _); b = !0) ;
      } catch (A) {
        x = !0, q = A;
      } finally {
        try {
          if (!b && f.return != null && (m = f.return(), Object(m) !== m)) return;
        } finally {
          if (x) throw q;
        }
      }
      return h;
    }
  }
  function p(g) {
    if (Array.isArray(g)) return g;
  }
  var v = [].concat(e.default, r.default, t.default, i.default);
  v.forEach(function(g) {
    var _ = s(g, 2), f = _[1], y = o(f.superClass), q;
    try {
      for (y.s(); !(q = y.n()).done; ) {
        var R = q.value, m = o(R), h;
        try {
          var b = function() {
            var A = h.value, T = v.filter(function(I) {
              var G = s(I, 1), W = G[0];
              return W === A;
            })[0];
            if (T)
              for (var M = T[1], j = 0, $ = Object.keys(M.props); j < $.length; j++) {
                var H = $[j];
                Object.prototype.hasOwnProperty.call(f.props, H) || (f.props[H] = M.props[H]);
              }
          };
          for (m.s(); !(h = m.n()).done; )
            b();
        } catch (x) {
          m.e(x);
        } finally {
          m.f();
        }
      }
    } catch (x) {
      y.e(x);
    } finally {
      y.f();
    }
  });
  var C = {
    entries: function() {
      return v;
    },
    forEach: function(_) {
      var f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, y = o(v), q;
      try {
        for (y.s(); !(q = y.n()).done; ) {
          var R = s(q.value, 2), m = R[0], h = R[1];
          _.call(f, h, m, v);
        }
      } catch (b) {
        y.e(b);
      } finally {
        y.f();
      }
    },
    get: function(_) {
      var f = v.filter(function(y) {
        return y[0] === _;
      })[0];
      return f && f[1];
    },
    has: function(_) {
      return !!C.get(_);
    },
    keys: function() {
      return v.map(function(_) {
        var f = s(_, 1), y = f[0];
        return y;
      });
    },
    values: function() {
      return v.map(function(_) {
        var f = s(_, 2), y = f[1];
        return y;
      });
    }
  };
  return le.default = (0, a.default)(C, C.entries()), le;
}
var Vt = {}, gl;
function Kv() {
  if (gl) return Vt;
  gl = 1, Object.defineProperty(Vt, "__esModule", {
    value: !0
  }), Vt.default = void 0;
  var e = t(Jt()), r = t(ho());
  function t(m) {
    return m && m.__esModule ? m : { default: m };
  }
  function i(m, h) {
    return l(m) || s(m, h) || n(m, h) || a();
  }
  function a() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function n(m, h) {
    if (m) {
      if (typeof m == "string") return o(m, h);
      var b = {}.toString.call(m).slice(8, -1);
      return b === "Object" && m.constructor && (b = m.constructor.name), b === "Map" || b === "Set" ? Array.from(m) : b === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b) ? o(m, h) : void 0;
    }
  }
  function o(m, h) {
    (h == null || h > m.length) && (h = m.length);
    for (var b = 0, x = Array(h); b < h; b++) x[b] = m[b];
    return x;
  }
  function s(m, h) {
    var b = m == null ? null : typeof Symbol < "u" && m[Symbol.iterator] || m["@@iterator"];
    if (b != null) {
      var x, A, T, M, j = [], $ = !0, H = !1;
      try {
        if (T = (b = b.call(m)).next, h === 0) {
          if (Object(b) !== b) return;
          $ = !1;
        } else for (; !($ = (x = T.call(b)).done) && (j.push(x.value), j.length !== h); $ = !0) ;
      } catch (I) {
        H = !0, A = I;
      } finally {
        try {
          if (!$ && b.return != null && (M = b.return(), Object(M) !== M)) return;
        } finally {
          if (H) throw A;
        }
      }
      return j;
    }
  }
  function l(m) {
    if (Array.isArray(m)) return m;
  }
  for (var c = [], u = r.default.keys(), d = 0; d < u.length; d++) {
    var p = u[d], v = r.default.get(p);
    if (v)
      for (var C = [].concat(v.baseConcepts, v.relatedConcepts), g = function() {
        var h = C[_];
        if (h.module === "HTML") {
          var b = h.concept;
          if (b) {
            var x = c.filter(function(j) {
              return y(j[0], b);
            })[0], A;
            x ? A = x[1] : A = [];
            for (var T = !0, M = 0; M < A.length; M++)
              if (A[M] === p) {
                T = !1;
                break;
              }
            T && A.push(p), x || c.push([b, A]);
          }
        }
      }, _ = 0; _ < C.length; _++)
        g();
  }
  var f = {
    entries: function() {
      return c;
    },
    forEach: function(h) {
      for (var b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, x = 0, A = c; x < A.length; x++) {
        var T = i(A[x], 2), M = T[0], j = T[1];
        h.call(b, j, M, c);
      }
    },
    get: function(h) {
      var b = c.filter(function(x) {
        return h.name === x[0].name && R(h.attributes, x[0].attributes);
      })[0];
      return b && b[1];
    },
    has: function(h) {
      return !!f.get(h);
    },
    keys: function() {
      return c.map(function(h) {
        var b = i(h, 1), x = b[0];
        return x;
      });
    },
    values: function() {
      return c.map(function(h) {
        var b = i(h, 2), x = b[1];
        return x;
      });
    }
  };
  function y(m, h) {
    return m.name === h.name && q(m.constraints, h.constraints) && R(m.attributes, h.attributes);
  }
  function q(m, h) {
    if (m === void 0 && h !== void 0 || m !== void 0 && h === void 0)
      return !1;
    if (m !== void 0 && h !== void 0) {
      if (m.length !== h.length)
        return !1;
      for (var b = 0; b < m.length; b++)
        if (m[b] !== h[b])
          return !1;
    }
    return !0;
  }
  function R(m, h) {
    if (m === void 0 && h !== void 0 || m !== void 0 && h === void 0)
      return !1;
    if (m !== void 0 && h !== void 0) {
      if (m.length !== h.length)
        return !1;
      for (var b = 0; b < m.length; b++) {
        if (m[b].name !== h[b].name || m[b].value !== h[b].value || m[b].constraints === void 0 && h[b].constraints !== void 0 || m[b].constraints !== void 0 && h[b].constraints === void 0)
          return !1;
        if (m[b].constraints !== void 0 && h[b].constraints !== void 0) {
          if (m[b].constraints.length !== h[b].constraints.length)
            return !1;
          for (var x = 0; x < m[b].constraints.length; x++)
            if (m[b].constraints[x] !== h[b].constraints[x])
              return !1;
        }
      }
    }
    return !0;
  }
  return Vt.default = (0, e.default)(f, f.entries()), Vt;
}
var Gt = {}, yl;
function Wv() {
  if (yl) return Gt;
  yl = 1, Object.defineProperty(Gt, "__esModule", {
    value: !0
  }), Gt.default = void 0;
  var e = t(Jt()), r = t(ho());
  function t(R) {
    return R && R.__esModule ? R : { default: R };
  }
  function i(R, m) {
    return l(R) || s(R, m) || n(R, m) || a();
  }
  function a() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function n(R, m) {
    if (R) {
      if (typeof R == "string") return o(R, m);
      var h = {}.toString.call(R).slice(8, -1);
      return h === "Object" && R.constructor && (h = R.constructor.name), h === "Map" || h === "Set" ? Array.from(R) : h === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(h) ? o(R, m) : void 0;
    }
  }
  function o(R, m) {
    (m == null || m > R.length) && (m = R.length);
    for (var h = 0, b = Array(m); h < m; h++) b[h] = R[h];
    return b;
  }
  function s(R, m) {
    var h = R == null ? null : typeof Symbol < "u" && R[Symbol.iterator] || R["@@iterator"];
    if (h != null) {
      var b, x, A, T, M = [], j = !0, $ = !1;
      try {
        if (A = (h = h.call(R)).next, m === 0) {
          if (Object(h) !== h) return;
          j = !1;
        } else for (; !(j = (b = A.call(h)).done) && (M.push(b.value), M.length !== m); j = !0) ;
      } catch (H) {
        $ = !0, x = H;
      } finally {
        try {
          if (!j && h.return != null && (T = h.return(), Object(T) !== T)) return;
        } finally {
          if ($) throw x;
        }
      }
      return M;
    }
  }
  function l(R) {
    if (Array.isArray(R)) return R;
  }
  for (var c = [], u = r.default.keys(), d = 0; d < u.length; d++) {
    var p = u[d], v = r.default.get(p), C = [];
    if (v) {
      for (var g = [].concat(v.baseConcepts, v.relatedConcepts), _ = 0; _ < g.length; _++) {
        var f = g[_];
        if (f.module === "HTML") {
          var y = f.concept;
          y != null && C.push(y);
        }
      }
      C.length > 0 && c.push([p, C]);
    }
  }
  var q = {
    entries: function() {
      return c;
    },
    forEach: function(m) {
      for (var h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, b = 0, x = c; b < x.length; b++) {
        var A = i(x[b], 2), T = A[0], M = A[1];
        m.call(h, M, T, c);
      }
    },
    get: function(m) {
      var h = c.filter(function(b) {
        return b[0] === m;
      })[0];
      return h && h[1];
    },
    has: function(m) {
      return !!q.get(m);
    },
    keys: function() {
      return c.map(function(m) {
        var h = i(m, 1), b = h[0];
        return b;
      });
    },
    values: function() {
      return c.map(function(m) {
        var h = i(m, 2), b = h[1];
        return b;
      });
    }
  };
  return Gt.default = (0, e.default)(q, q.entries()), Gt;
}
var ql;
function Xv() {
  if (ql) return V;
  ql = 1, Object.defineProperty(V, "__esModule", {
    value: !0
  }), V.roles = V.roleElements = V.elementRoles = V.dom = V.aria = void 0;
  var e = n(cf()), r = n(df()), t = n(ho()), i = n(Kv()), a = n(Wv());
  function n(o) {
    return o && o.__esModule ? o : { default: o };
  }
  return V.aria = e.default, V.dom = r.default, V.roles = t.default, V.elementRoles = i.default, V.roleElements = a.default, V;
}
var bo = Xv(), ra = { exports: {} }, Ra, Cl;
function Yv() {
  return Cl || (Cl = 1, Ra = {
    aliceblue: [240, 248, 255],
    antiquewhite: [250, 235, 215],
    aqua: [0, 255, 255],
    aquamarine: [127, 255, 212],
    azure: [240, 255, 255],
    beige: [245, 245, 220],
    bisque: [255, 228, 196],
    black: [0, 0, 0],
    blanchedalmond: [255, 235, 205],
    blue: [0, 0, 255],
    blueviolet: [138, 43, 226],
    brown: [165, 42, 42],
    burlywood: [222, 184, 135],
    cadetblue: [95, 158, 160],
    chartreuse: [127, 255, 0],
    chocolate: [210, 105, 30],
    coral: [255, 127, 80],
    cornflowerblue: [100, 149, 237],
    cornsilk: [255, 248, 220],
    crimson: [220, 20, 60],
    cyan: [0, 255, 255],
    darkblue: [0, 0, 139],
    darkcyan: [0, 139, 139],
    darkgoldenrod: [184, 134, 11],
    darkgray: [169, 169, 169],
    darkgreen: [0, 100, 0],
    darkgrey: [169, 169, 169],
    darkkhaki: [189, 183, 107],
    darkmagenta: [139, 0, 139],
    darkolivegreen: [85, 107, 47],
    darkorange: [255, 140, 0],
    darkorchid: [153, 50, 204],
    darkred: [139, 0, 0],
    darksalmon: [233, 150, 122],
    darkseagreen: [143, 188, 143],
    darkslateblue: [72, 61, 139],
    darkslategray: [47, 79, 79],
    darkslategrey: [47, 79, 79],
    darkturquoise: [0, 206, 209],
    darkviolet: [148, 0, 211],
    deeppink: [255, 20, 147],
    deepskyblue: [0, 191, 255],
    dimgray: [105, 105, 105],
    dimgrey: [105, 105, 105],
    dodgerblue: [30, 144, 255],
    firebrick: [178, 34, 34],
    floralwhite: [255, 250, 240],
    forestgreen: [34, 139, 34],
    fuchsia: [255, 0, 255],
    gainsboro: [220, 220, 220],
    ghostwhite: [248, 248, 255],
    gold: [255, 215, 0],
    goldenrod: [218, 165, 32],
    gray: [128, 128, 128],
    green: [0, 128, 0],
    greenyellow: [173, 255, 47],
    grey: [128, 128, 128],
    honeydew: [240, 255, 240],
    hotpink: [255, 105, 180],
    indianred: [205, 92, 92],
    indigo: [75, 0, 130],
    ivory: [255, 255, 240],
    khaki: [240, 230, 140],
    lavender: [230, 230, 250],
    lavenderblush: [255, 240, 245],
    lawngreen: [124, 252, 0],
    lemonchiffon: [255, 250, 205],
    lightblue: [173, 216, 230],
    lightcoral: [240, 128, 128],
    lightcyan: [224, 255, 255],
    lightgoldenrodyellow: [250, 250, 210],
    lightgray: [211, 211, 211],
    lightgreen: [144, 238, 144],
    lightgrey: [211, 211, 211],
    lightpink: [255, 182, 193],
    lightsalmon: [255, 160, 122],
    lightseagreen: [32, 178, 170],
    lightskyblue: [135, 206, 250],
    lightslategray: [119, 136, 153],
    lightslategrey: [119, 136, 153],
    lightsteelblue: [176, 196, 222],
    lightyellow: [255, 255, 224],
    lime: [0, 255, 0],
    limegreen: [50, 205, 50],
    linen: [250, 240, 230],
    magenta: [255, 0, 255],
    maroon: [128, 0, 0],
    mediumaquamarine: [102, 205, 170],
    mediumblue: [0, 0, 205],
    mediumorchid: [186, 85, 211],
    mediumpurple: [147, 112, 219],
    mediumseagreen: [60, 179, 113],
    mediumslateblue: [123, 104, 238],
    mediumspringgreen: [0, 250, 154],
    mediumturquoise: [72, 209, 204],
    mediumvioletred: [199, 21, 133],
    midnightblue: [25, 25, 112],
    mintcream: [245, 255, 250],
    mistyrose: [255, 228, 225],
    moccasin: [255, 228, 181],
    navajowhite: [255, 222, 173],
    navy: [0, 0, 128],
    oldlace: [253, 245, 230],
    olive: [128, 128, 0],
    olivedrab: [107, 142, 35],
    orange: [255, 165, 0],
    orangered: [255, 69, 0],
    orchid: [218, 112, 214],
    palegoldenrod: [238, 232, 170],
    palegreen: [152, 251, 152],
    paleturquoise: [175, 238, 238],
    palevioletred: [219, 112, 147],
    papayawhip: [255, 239, 213],
    peachpuff: [255, 218, 185],
    peru: [205, 133, 63],
    pink: [255, 192, 203],
    plum: [221, 160, 221],
    powderblue: [176, 224, 230],
    purple: [128, 0, 128],
    rebeccapurple: [102, 51, 153],
    red: [255, 0, 0],
    rosybrown: [188, 143, 143],
    royalblue: [65, 105, 225],
    saddlebrown: [139, 69, 19],
    salmon: [250, 128, 114],
    sandybrown: [244, 164, 96],
    seagreen: [46, 139, 87],
    seashell: [255, 245, 238],
    sienna: [160, 82, 45],
    silver: [192, 192, 192],
    skyblue: [135, 206, 235],
    slateblue: [106, 90, 205],
    slategray: [112, 128, 144],
    slategrey: [112, 128, 144],
    snow: [255, 250, 250],
    springgreen: [0, 255, 127],
    steelblue: [70, 130, 180],
    tan: [210, 180, 140],
    teal: [0, 128, 128],
    thistle: [216, 191, 216],
    tomato: [255, 99, 71],
    turquoise: [64, 224, 208],
    violet: [238, 130, 238],
    wheat: [245, 222, 179],
    white: [255, 255, 255],
    whitesmoke: [245, 245, 245],
    yellow: [255, 255, 0],
    yellowgreen: [154, 205, 50]
  }), Ra;
}
var ga, _l;
function Tc() {
  if (_l) return ga;
  _l = 1;
  const e = Yv(), r = {};
  for (const a of Object.keys(e))
    r[e[a]] = a;
  const t = {
    rgb: { channels: 3, labels: "rgb" },
    hsl: { channels: 3, labels: "hsl" },
    hsv: { channels: 3, labels: "hsv" },
    hwb: { channels: 3, labels: "hwb" },
    cmyk: { channels: 4, labels: "cmyk" },
    xyz: { channels: 3, labels: "xyz" },
    lab: { channels: 3, labels: "lab" },
    lch: { channels: 3, labels: "lch" },
    hex: { channels: 1, labels: ["hex"] },
    keyword: { channels: 1, labels: ["keyword"] },
    ansi16: { channels: 1, labels: ["ansi16"] },
    ansi256: { channels: 1, labels: ["ansi256"] },
    hcg: { channels: 3, labels: ["h", "c", "g"] },
    apple: { channels: 3, labels: ["r16", "g16", "b16"] },
    gray: { channels: 1, labels: ["gray"] }
  };
  ga = t;
  for (const a of Object.keys(t)) {
    if (!("channels" in t[a]))
      throw new Error("missing channels property: " + a);
    if (!("labels" in t[a]))
      throw new Error("missing channel labels property: " + a);
    if (t[a].labels.length !== t[a].channels)
      throw new Error("channel and label counts mismatch: " + a);
    const { channels: n, labels: o } = t[a];
    delete t[a].channels, delete t[a].labels, Object.defineProperty(t[a], "channels", { value: n }), Object.defineProperty(t[a], "labels", { value: o });
  }
  t.rgb.hsl = function(a) {
    const n = a[0] / 255, o = a[1] / 255, s = a[2] / 255, l = Math.min(n, o, s), c = Math.max(n, o, s), u = c - l;
    let d, p;
    c === l ? d = 0 : n === c ? d = (o - s) / u : o === c ? d = 2 + (s - n) / u : s === c && (d = 4 + (n - o) / u), d = Math.min(d * 60, 360), d < 0 && (d += 360);
    const v = (l + c) / 2;
    return c === l ? p = 0 : v <= 0.5 ? p = u / (c + l) : p = u / (2 - c - l), [d, p * 100, v * 100];
  }, t.rgb.hsv = function(a) {
    let n, o, s, l, c;
    const u = a[0] / 255, d = a[1] / 255, p = a[2] / 255, v = Math.max(u, d, p), C = v - Math.min(u, d, p), g = function(_) {
      return (v - _) / 6 / C + 1 / 2;
    };
    return C === 0 ? (l = 0, c = 0) : (c = C / v, n = g(u), o = g(d), s = g(p), u === v ? l = s - o : d === v ? l = 1 / 3 + n - s : p === v && (l = 2 / 3 + o - n), l < 0 ? l += 1 : l > 1 && (l -= 1)), [
      l * 360,
      c * 100,
      v * 100
    ];
  }, t.rgb.hwb = function(a) {
    const n = a[0], o = a[1];
    let s = a[2];
    const l = t.rgb.hsl(a)[0], c = 1 / 255 * Math.min(n, Math.min(o, s));
    return s = 1 - 1 / 255 * Math.max(n, Math.max(o, s)), [l, c * 100, s * 100];
  }, t.rgb.cmyk = function(a) {
    const n = a[0] / 255, o = a[1] / 255, s = a[2] / 255, l = Math.min(1 - n, 1 - o, 1 - s), c = (1 - n - l) / (1 - l) || 0, u = (1 - o - l) / (1 - l) || 0, d = (1 - s - l) / (1 - l) || 0;
    return [c * 100, u * 100, d * 100, l * 100];
  };
  function i(a, n) {
    return (a[0] - n[0]) ** 2 + (a[1] - n[1]) ** 2 + (a[2] - n[2]) ** 2;
  }
  return t.rgb.keyword = function(a) {
    const n = r[a];
    if (n)
      return n;
    let o = 1 / 0, s;
    for (const l of Object.keys(e)) {
      const c = e[l], u = i(a, c);
      u < o && (o = u, s = l);
    }
    return s;
  }, t.keyword.rgb = function(a) {
    return e[a];
  }, t.rgb.xyz = function(a) {
    let n = a[0] / 255, o = a[1] / 255, s = a[2] / 255;
    n = n > 0.04045 ? ((n + 0.055) / 1.055) ** 2.4 : n / 12.92, o = o > 0.04045 ? ((o + 0.055) / 1.055) ** 2.4 : o / 12.92, s = s > 0.04045 ? ((s + 0.055) / 1.055) ** 2.4 : s / 12.92;
    const l = n * 0.4124 + o * 0.3576 + s * 0.1805, c = n * 0.2126 + o * 0.7152 + s * 0.0722, u = n * 0.0193 + o * 0.1192 + s * 0.9505;
    return [l * 100, c * 100, u * 100];
  }, t.rgb.lab = function(a) {
    const n = t.rgb.xyz(a);
    let o = n[0], s = n[1], l = n[2];
    o /= 95.047, s /= 100, l /= 108.883, o = o > 8856e-6 ? o ** (1 / 3) : 7.787 * o + 16 / 116, s = s > 8856e-6 ? s ** (1 / 3) : 7.787 * s + 16 / 116, l = l > 8856e-6 ? l ** (1 / 3) : 7.787 * l + 16 / 116;
    const c = 116 * s - 16, u = 500 * (o - s), d = 200 * (s - l);
    return [c, u, d];
  }, t.hsl.rgb = function(a) {
    const n = a[0] / 360, o = a[1] / 100, s = a[2] / 100;
    let l, c, u;
    if (o === 0)
      return u = s * 255, [u, u, u];
    s < 0.5 ? l = s * (1 + o) : l = s + o - s * o;
    const d = 2 * s - l, p = [0, 0, 0];
    for (let v = 0; v < 3; v++)
      c = n + 1 / 3 * -(v - 1), c < 0 && c++, c > 1 && c--, 6 * c < 1 ? u = d + (l - d) * 6 * c : 2 * c < 1 ? u = l : 3 * c < 2 ? u = d + (l - d) * (2 / 3 - c) * 6 : u = d, p[v] = u * 255;
    return p;
  }, t.hsl.hsv = function(a) {
    const n = a[0];
    let o = a[1] / 100, s = a[2] / 100, l = o;
    const c = Math.max(s, 0.01);
    s *= 2, o *= s <= 1 ? s : 2 - s, l *= c <= 1 ? c : 2 - c;
    const u = (s + o) / 2, d = s === 0 ? 2 * l / (c + l) : 2 * o / (s + o);
    return [n, d * 100, u * 100];
  }, t.hsv.rgb = function(a) {
    const n = a[0] / 60, o = a[1] / 100;
    let s = a[2] / 100;
    const l = Math.floor(n) % 6, c = n - Math.floor(n), u = 255 * s * (1 - o), d = 255 * s * (1 - o * c), p = 255 * s * (1 - o * (1 - c));
    switch (s *= 255, l) {
      case 0:
        return [s, p, u];
      case 1:
        return [d, s, u];
      case 2:
        return [u, s, p];
      case 3:
        return [u, d, s];
      case 4:
        return [p, u, s];
      case 5:
        return [s, u, d];
    }
  }, t.hsv.hsl = function(a) {
    const n = a[0], o = a[1] / 100, s = a[2] / 100, l = Math.max(s, 0.01);
    let c, u;
    u = (2 - o) * s;
    const d = (2 - o) * l;
    return c = o * l, c /= d <= 1 ? d : 2 - d, c = c || 0, u /= 2, [n, c * 100, u * 100];
  }, t.hwb.rgb = function(a) {
    const n = a[0] / 360;
    let o = a[1] / 100, s = a[2] / 100;
    const l = o + s;
    let c;
    l > 1 && (o /= l, s /= l);
    const u = Math.floor(6 * n), d = 1 - s;
    c = 6 * n - u, (u & 1) !== 0 && (c = 1 - c);
    const p = o + c * (d - o);
    let v, C, g;
    switch (u) {
      default:
      case 6:
      case 0:
        v = d, C = p, g = o;
        break;
      case 1:
        v = p, C = d, g = o;
        break;
      case 2:
        v = o, C = d, g = p;
        break;
      case 3:
        v = o, C = p, g = d;
        break;
      case 4:
        v = p, C = o, g = d;
        break;
      case 5:
        v = d, C = o, g = p;
        break;
    }
    return [v * 255, C * 255, g * 255];
  }, t.cmyk.rgb = function(a) {
    const n = a[0] / 100, o = a[1] / 100, s = a[2] / 100, l = a[3] / 100, c = 1 - Math.min(1, n * (1 - l) + l), u = 1 - Math.min(1, o * (1 - l) + l), d = 1 - Math.min(1, s * (1 - l) + l);
    return [c * 255, u * 255, d * 255];
  }, t.xyz.rgb = function(a) {
    const n = a[0] / 100, o = a[1] / 100, s = a[2] / 100;
    let l, c, u;
    return l = n * 3.2406 + o * -1.5372 + s * -0.4986, c = n * -0.9689 + o * 1.8758 + s * 0.0415, u = n * 0.0557 + o * -0.204 + s * 1.057, l = l > 31308e-7 ? 1.055 * l ** (1 / 2.4) - 0.055 : l * 12.92, c = c > 31308e-7 ? 1.055 * c ** (1 / 2.4) - 0.055 : c * 12.92, u = u > 31308e-7 ? 1.055 * u ** (1 / 2.4) - 0.055 : u * 12.92, l = Math.min(Math.max(0, l), 1), c = Math.min(Math.max(0, c), 1), u = Math.min(Math.max(0, u), 1), [l * 255, c * 255, u * 255];
  }, t.xyz.lab = function(a) {
    let n = a[0], o = a[1], s = a[2];
    n /= 95.047, o /= 100, s /= 108.883, n = n > 8856e-6 ? n ** (1 / 3) : 7.787 * n + 16 / 116, o = o > 8856e-6 ? o ** (1 / 3) : 7.787 * o + 16 / 116, s = s > 8856e-6 ? s ** (1 / 3) : 7.787 * s + 16 / 116;
    const l = 116 * o - 16, c = 500 * (n - o), u = 200 * (o - s);
    return [l, c, u];
  }, t.lab.xyz = function(a) {
    const n = a[0], o = a[1], s = a[2];
    let l, c, u;
    c = (n + 16) / 116, l = o / 500 + c, u = c - s / 200;
    const d = c ** 3, p = l ** 3, v = u ** 3;
    return c = d > 8856e-6 ? d : (c - 16 / 116) / 7.787, l = p > 8856e-6 ? p : (l - 16 / 116) / 7.787, u = v > 8856e-6 ? v : (u - 16 / 116) / 7.787, l *= 95.047, c *= 100, u *= 108.883, [l, c, u];
  }, t.lab.lch = function(a) {
    const n = a[0], o = a[1], s = a[2];
    let l;
    l = Math.atan2(s, o) * 360 / 2 / Math.PI, l < 0 && (l += 360);
    const u = Math.sqrt(o * o + s * s);
    return [n, u, l];
  }, t.lch.lab = function(a) {
    const n = a[0], o = a[1], l = a[2] / 360 * 2 * Math.PI, c = o * Math.cos(l), u = o * Math.sin(l);
    return [n, c, u];
  }, t.rgb.ansi16 = function(a, n = null) {
    const [o, s, l] = a;
    let c = n === null ? t.rgb.hsv(a)[2] : n;
    if (c = Math.round(c / 50), c === 0)
      return 30;
    let u = 30 + (Math.round(l / 255) << 2 | Math.round(s / 255) << 1 | Math.round(o / 255));
    return c === 2 && (u += 60), u;
  }, t.hsv.ansi16 = function(a) {
    return t.rgb.ansi16(t.hsv.rgb(a), a[2]);
  }, t.rgb.ansi256 = function(a) {
    const n = a[0], o = a[1], s = a[2];
    return n === o && o === s ? n < 8 ? 16 : n > 248 ? 231 : Math.round((n - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(n / 255 * 5) + 6 * Math.round(o / 255 * 5) + Math.round(s / 255 * 5);
  }, t.ansi16.rgb = function(a) {
    let n = a % 10;
    if (n === 0 || n === 7)
      return a > 50 && (n += 3.5), n = n / 10.5 * 255, [n, n, n];
    const o = (~~(a > 50) + 1) * 0.5, s = (n & 1) * o * 255, l = (n >> 1 & 1) * o * 255, c = (n >> 2 & 1) * o * 255;
    return [s, l, c];
  }, t.ansi256.rgb = function(a) {
    if (a >= 232) {
      const c = (a - 232) * 10 + 8;
      return [c, c, c];
    }
    a -= 16;
    let n;
    const o = Math.floor(a / 36) / 5 * 255, s = Math.floor((n = a % 36) / 6) / 5 * 255, l = n % 6 / 5 * 255;
    return [o, s, l];
  }, t.rgb.hex = function(a) {
    const o = (((Math.round(a[0]) & 255) << 16) + ((Math.round(a[1]) & 255) << 8) + (Math.round(a[2]) & 255)).toString(16).toUpperCase();
    return "000000".substring(o.length) + o;
  }, t.hex.rgb = function(a) {
    const n = a.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
    if (!n)
      return [0, 0, 0];
    let o = n[0];
    n[0].length === 3 && (o = o.split("").map((d) => d + d).join(""));
    const s = parseInt(o, 16), l = s >> 16 & 255, c = s >> 8 & 255, u = s & 255;
    return [l, c, u];
  }, t.rgb.hcg = function(a) {
    const n = a[0] / 255, o = a[1] / 255, s = a[2] / 255, l = Math.max(Math.max(n, o), s), c = Math.min(Math.min(n, o), s), u = l - c;
    let d, p;
    return u < 1 ? d = c / (1 - u) : d = 0, u <= 0 ? p = 0 : l === n ? p = (o - s) / u % 6 : l === o ? p = 2 + (s - n) / u : p = 4 + (n - o) / u, p /= 6, p %= 1, [p * 360, u * 100, d * 100];
  }, t.hsl.hcg = function(a) {
    const n = a[1] / 100, o = a[2] / 100, s = o < 0.5 ? 2 * n * o : 2 * n * (1 - o);
    let l = 0;
    return s < 1 && (l = (o - 0.5 * s) / (1 - s)), [a[0], s * 100, l * 100];
  }, t.hsv.hcg = function(a) {
    const n = a[1] / 100, o = a[2] / 100, s = n * o;
    let l = 0;
    return s < 1 && (l = (o - s) / (1 - s)), [a[0], s * 100, l * 100];
  }, t.hcg.rgb = function(a) {
    const n = a[0] / 360, o = a[1] / 100, s = a[2] / 100;
    if (o === 0)
      return [s * 255, s * 255, s * 255];
    const l = [0, 0, 0], c = n % 1 * 6, u = c % 1, d = 1 - u;
    let p = 0;
    switch (Math.floor(c)) {
      case 0:
        l[0] = 1, l[1] = u, l[2] = 0;
        break;
      case 1:
        l[0] = d, l[1] = 1, l[2] = 0;
        break;
      case 2:
        l[0] = 0, l[1] = 1, l[2] = u;
        break;
      case 3:
        l[0] = 0, l[1] = d, l[2] = 1;
        break;
      case 4:
        l[0] = u, l[1] = 0, l[2] = 1;
        break;
      default:
        l[0] = 1, l[1] = 0, l[2] = d;
    }
    return p = (1 - o) * s, [
      (o * l[0] + p) * 255,
      (o * l[1] + p) * 255,
      (o * l[2] + p) * 255
    ];
  }, t.hcg.hsv = function(a) {
    const n = a[1] / 100, o = a[2] / 100, s = n + o * (1 - n);
    let l = 0;
    return s > 0 && (l = n / s), [a[0], l * 100, s * 100];
  }, t.hcg.hsl = function(a) {
    const n = a[1] / 100, s = a[2] / 100 * (1 - n) + 0.5 * n;
    let l = 0;
    return s > 0 && s < 0.5 ? l = n / (2 * s) : s >= 0.5 && s < 1 && (l = n / (2 * (1 - s))), [a[0], l * 100, s * 100];
  }, t.hcg.hwb = function(a) {
    const n = a[1] / 100, o = a[2] / 100, s = n + o * (1 - n);
    return [a[0], (s - n) * 100, (1 - s) * 100];
  }, t.hwb.hcg = function(a) {
    const n = a[1] / 100, s = 1 - a[2] / 100, l = s - n;
    let c = 0;
    return l < 1 && (c = (s - l) / (1 - l)), [a[0], l * 100, c * 100];
  }, t.apple.rgb = function(a) {
    return [a[0] / 65535 * 255, a[1] / 65535 * 255, a[2] / 65535 * 255];
  }, t.rgb.apple = function(a) {
    return [a[0] / 255 * 65535, a[1] / 255 * 65535, a[2] / 255 * 65535];
  }, t.gray.rgb = function(a) {
    return [a[0] / 100 * 255, a[0] / 100 * 255, a[0] / 100 * 255];
  }, t.gray.hsl = function(a) {
    return [0, 0, a[0]];
  }, t.gray.hsv = t.gray.hsl, t.gray.hwb = function(a) {
    return [0, 100, a[0]];
  }, t.gray.cmyk = function(a) {
    return [0, 0, 0, a[0]];
  }, t.gray.lab = function(a) {
    return [a[0], 0, 0];
  }, t.gray.hex = function(a) {
    const n = Math.round(a[0] / 100 * 255) & 255, s = ((n << 16) + (n << 8) + n).toString(16).toUpperCase();
    return "000000".substring(s.length) + s;
  }, t.rgb.gray = function(a) {
    return [(a[0] + a[1] + a[2]) / 3 / 255 * 100];
  }, ga;
}
var ya, Pl;
function Jv() {
  if (Pl) return ya;
  Pl = 1;
  const e = Tc();
  function r() {
    const n = {}, o = Object.keys(e);
    for (let s = o.length, l = 0; l < s; l++)
      n[o[l]] = {
        // http://jsperf.com/1-vs-infinity
        // micro-opt, but this is simple.
        distance: -1,
        parent: null
      };
    return n;
  }
  function t(n) {
    const o = r(), s = [n];
    for (o[n].distance = 0; s.length; ) {
      const l = s.pop(), c = Object.keys(e[l]);
      for (let u = c.length, d = 0; d < u; d++) {
        const p = c[d], v = o[p];
        v.distance === -1 && (v.distance = o[l].distance + 1, v.parent = l, s.unshift(p));
      }
    }
    return o;
  }
  function i(n, o) {
    return function(s) {
      return o(n(s));
    };
  }
  function a(n, o) {
    const s = [o[n].parent, n];
    let l = e[o[n].parent][n], c = o[n].parent;
    for (; o[c].parent; )
      s.unshift(o[c].parent), l = i(e[o[c].parent][c], l), c = o[c].parent;
    return l.conversion = s, l;
  }
  return ya = function(n) {
    const o = t(n), s = {}, l = Object.keys(o);
    for (let c = l.length, u = 0; u < c; u++) {
      const d = l[u];
      o[d].parent !== null && (s[d] = a(d, o));
    }
    return s;
  }, ya;
}
var qa, xl;
function Qv() {
  if (xl) return qa;
  xl = 1;
  const e = Tc(), r = Jv(), t = {}, i = Object.keys(e);
  function a(o) {
    const s = function(...l) {
      const c = l[0];
      return c == null ? c : (c.length > 1 && (l = c), o(l));
    };
    return "conversion" in o && (s.conversion = o.conversion), s;
  }
  function n(o) {
    const s = function(...l) {
      const c = l[0];
      if (c == null)
        return c;
      c.length > 1 && (l = c);
      const u = o(l);
      if (typeof u == "object")
        for (let d = u.length, p = 0; p < d; p++)
          u[p] = Math.round(u[p]);
      return u;
    };
    return "conversion" in o && (s.conversion = o.conversion), s;
  }
  return i.forEach((o) => {
    t[o] = {}, Object.defineProperty(t[o], "channels", { value: e[o].channels }), Object.defineProperty(t[o], "labels", { value: e[o].labels });
    const s = r(o);
    Object.keys(s).forEach((c) => {
      const u = s[c];
      t[o][c] = n(u), t[o][c].raw = a(u);
    });
  }), qa = t, qa;
}
ra.exports;
var wl;
function Zv() {
  return wl || (wl = 1, function(e) {
    const r = (u, d) => (...p) => `\x1B[${u(...p) + d}m`, t = (u, d) => (...p) => {
      const v = u(...p);
      return `\x1B[${38 + d};5;${v}m`;
    }, i = (u, d) => (...p) => {
      const v = u(...p);
      return `\x1B[${38 + d};2;${v[0]};${v[1]};${v[2]}m`;
    }, a = (u) => u, n = (u, d, p) => [u, d, p], o = (u, d, p) => {
      Object.defineProperty(u, d, {
        get: () => {
          const v = p();
          return Object.defineProperty(u, d, {
            value: v,
            enumerable: !0,
            configurable: !0
          }), v;
        },
        enumerable: !0,
        configurable: !0
      });
    };
    let s;
    const l = (u, d, p, v) => {
      s === void 0 && (s = Qv());
      const C = v ? 10 : 0, g = {};
      for (const [_, f] of Object.entries(s)) {
        const y = _ === "ansi16" ? "ansi" : _;
        _ === d ? g[y] = u(p, C) : typeof f == "object" && (g[y] = u(f[d], C));
      }
      return g;
    };
    function c() {
      const u = /* @__PURE__ */ new Map(), d = {
        modifier: {
          reset: [0, 0],
          // 21 isn't widely supported and 22 does the same thing
          bold: [1, 22],
          dim: [2, 22],
          italic: [3, 23],
          underline: [4, 24],
          inverse: [7, 27],
          hidden: [8, 28],
          strikethrough: [9, 29]
        },
        color: {
          black: [30, 39],
          red: [31, 39],
          green: [32, 39],
          yellow: [33, 39],
          blue: [34, 39],
          magenta: [35, 39],
          cyan: [36, 39],
          white: [37, 39],
          // Bright color
          blackBright: [90, 39],
          redBright: [91, 39],
          greenBright: [92, 39],
          yellowBright: [93, 39],
          blueBright: [94, 39],
          magentaBright: [95, 39],
          cyanBright: [96, 39],
          whiteBright: [97, 39]
        },
        bgColor: {
          bgBlack: [40, 49],
          bgRed: [41, 49],
          bgGreen: [42, 49],
          bgYellow: [43, 49],
          bgBlue: [44, 49],
          bgMagenta: [45, 49],
          bgCyan: [46, 49],
          bgWhite: [47, 49],
          // Bright color
          bgBlackBright: [100, 49],
          bgRedBright: [101, 49],
          bgGreenBright: [102, 49],
          bgYellowBright: [103, 49],
          bgBlueBright: [104, 49],
          bgMagentaBright: [105, 49],
          bgCyanBright: [106, 49],
          bgWhiteBright: [107, 49]
        }
      };
      d.color.gray = d.color.blackBright, d.bgColor.bgGray = d.bgColor.bgBlackBright, d.color.grey = d.color.blackBright, d.bgColor.bgGrey = d.bgColor.bgBlackBright;
      for (const [p, v] of Object.entries(d)) {
        for (const [C, g] of Object.entries(v))
          d[C] = {
            open: `\x1B[${g[0]}m`,
            close: `\x1B[${g[1]}m`
          }, v[C] = d[C], u.set(g[0], g[1]);
        Object.defineProperty(d, p, {
          value: v,
          enumerable: !1
        });
      }
      return Object.defineProperty(d, "codes", {
        value: u,
        enumerable: !1
      }), d.color.close = "\x1B[39m", d.bgColor.close = "\x1B[49m", o(d.color, "ansi", () => l(r, "ansi16", a, !1)), o(d.color, "ansi256", () => l(t, "ansi256", a, !1)), o(d.color, "ansi16m", () => l(i, "rgb", n, !1)), o(d.bgColor, "ansi", () => l(r, "ansi16", a, !0)), o(d.bgColor, "ansi256", () => l(t, "ansi256", a, !0)), o(d.bgColor, "ansi16m", () => l(i, "rgb", n, !0)), d;
    }
    Object.defineProperty(e, "exports", {
      enumerable: !0,
      get: c
    });
  }(ra)), ra.exports;
}
var Ca, El;
function eh() {
  return El || (El = 1, Ca = {
    stdout: !1,
    stderr: !1
  }), Ca;
}
var _a, Ol;
function rh() {
  return Ol || (Ol = 1, _a = {
    stringReplaceAll: (t, i, a) => {
      let n = t.indexOf(i);
      if (n === -1)
        return t;
      const o = i.length;
      let s = 0, l = "";
      do
        l += t.substr(s, n - s) + i + a, s = n + o, n = t.indexOf(i, s);
      while (n !== -1);
      return l += t.substr(s), l;
    },
    stringEncaseCRLFWithFirstIndex: (t, i, a, n) => {
      let o = 0, s = "";
      do {
        const l = t[n - 1] === "\r";
        s += t.substr(o, (l ? n - 1 : n) - o) + i + (l ? `\r
` : `
`) + a, o = n + 1, n = t.indexOf(`
`, o);
      } while (n !== -1);
      return s += t.substr(o), s;
    }
  }), _a;
}
var Pa, Ml;
function th() {
  if (Ml) return Pa;
  Ml = 1;
  const e = /(?:\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi, r = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g, t = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/, i = /\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.)|([^\\])/gi, a = /* @__PURE__ */ new Map([
    ["n", `
`],
    ["r", "\r"],
    ["t", "	"],
    ["b", "\b"],
    ["f", "\f"],
    ["v", "\v"],
    ["0", "\0"],
    ["\\", "\\"],
    ["e", "\x1B"],
    ["a", "\x07"]
  ]);
  function n(c) {
    const u = c[0] === "u", d = c[1] === "{";
    return u && !d && c.length === 5 || c[0] === "x" && c.length === 3 ? String.fromCharCode(parseInt(c.slice(1), 16)) : u && d ? String.fromCodePoint(parseInt(c.slice(2, -1), 16)) : a.get(c) || c;
  }
  function o(c, u) {
    const d = [], p = u.trim().split(/\s*,\s*/g);
    let v;
    for (const C of p) {
      const g = Number(C);
      if (!Number.isNaN(g))
        d.push(g);
      else if (v = C.match(t))
        d.push(v[2].replace(i, (_, f, y) => f ? n(f) : y));
      else
        throw new Error(`Invalid Chalk template style argument: ${C} (in style '${c}')`);
    }
    return d;
  }
  function s(c) {
    r.lastIndex = 0;
    const u = [];
    let d;
    for (; (d = r.exec(c)) !== null; ) {
      const p = d[1];
      if (d[2]) {
        const v = o(p, d[2]);
        u.push([p].concat(v));
      } else
        u.push([p]);
    }
    return u;
  }
  function l(c, u) {
    const d = {};
    for (const v of u)
      for (const C of v.styles)
        d[C[0]] = v.inverse ? null : C.slice(1);
    let p = c;
    for (const [v, C] of Object.entries(d))
      if (Array.isArray(C)) {
        if (!(v in p))
          throw new Error(`Unknown Chalk style: ${v}`);
        p = C.length > 0 ? p[v](...C) : p[v];
      }
    return p;
  }
  return Pa = (c, u) => {
    const d = [], p = [];
    let v = [];
    if (u.replace(e, (C, g, _, f, y, q) => {
      if (g)
        v.push(n(g));
      else if (f) {
        const R = v.join("");
        v = [], p.push(d.length === 0 ? R : l(c, d)(R)), d.push({ inverse: _, styles: s(f) });
      } else if (y) {
        if (d.length === 0)
          throw new Error("Found extraneous } in Chalk template literal");
        p.push(l(c, d)(v.join(""))), v = [], d.pop();
      } else
        v.push(q);
    }), p.push(v.join("")), d.length > 0) {
      const C = `Chalk template literal is missing ${d.length} closing bracket${d.length === 1 ? "" : "s"} (\`}\`)`;
      throw new Error(C);
    }
    return p.join("");
  }, Pa;
}
var xa, Al;
function ah() {
  if (Al) return xa;
  Al = 1;
  const e = Zv(), { stdout: r, stderr: t } = eh(), {
    stringReplaceAll: i,
    stringEncaseCRLFWithFirstIndex: a
  } = rh(), n = [
    "ansi",
    "ansi",
    "ansi256",
    "ansi16m"
  ], o = /* @__PURE__ */ Object.create(null), s = (q, R = {}) => {
    if (R.level > 3 || R.level < 0)
      throw new Error("The `level` option should be an integer from 0 to 3");
    const m = r ? r.level : 0;
    q.level = R.level === void 0 ? m : R.level;
  };
  class l {
    constructor(R) {
      return c(R);
    }
  }
  const c = (q) => {
    const R = {};
    return s(R, q), R.template = (...m) => f(R.template, ...m), Object.setPrototypeOf(R, u.prototype), Object.setPrototypeOf(R.template, R), R.template.constructor = () => {
      throw new Error("`chalk.constructor()` is deprecated. Use `new chalk.Instance()` instead.");
    }, R.template.Instance = l, R.template;
  };
  function u(q) {
    return c(q);
  }
  for (const [q, R] of Object.entries(e))
    o[q] = {
      get() {
        const m = C(this, v(R.open, R.close, this._styler), this._isEmpty);
        return Object.defineProperty(this, q, { value: m }), m;
      }
    };
  o.visible = {
    get() {
      const q = C(this, this._styler, !0);
      return Object.defineProperty(this, "visible", { value: q }), q;
    }
  };
  const d = ["rgb", "hex", "keyword", "hsl", "hsv", "hwb", "ansi", "ansi256"];
  for (const q of d)
    o[q] = {
      get() {
        const { level: R } = this;
        return function(...m) {
          const h = v(e.color[n[R]][q](...m), e.color.close, this._styler);
          return C(this, h, this._isEmpty);
        };
      }
    };
  for (const q of d) {
    const R = "bg" + q[0].toUpperCase() + q.slice(1);
    o[R] = {
      get() {
        const { level: m } = this;
        return function(...h) {
          const b = v(e.bgColor[n[m]][q](...h), e.bgColor.close, this._styler);
          return C(this, b, this._isEmpty);
        };
      }
    };
  }
  const p = Object.defineProperties(() => {
  }, {
    ...o,
    level: {
      enumerable: !0,
      get() {
        return this._generator.level;
      },
      set(q) {
        this._generator.level = q;
      }
    }
  }), v = (q, R, m) => {
    let h, b;
    return m === void 0 ? (h = q, b = R) : (h = m.openAll + q, b = R + m.closeAll), {
      open: q,
      close: R,
      openAll: h,
      closeAll: b,
      parent: m
    };
  }, C = (q, R, m) => {
    const h = (...b) => g(h, b.length === 1 ? "" + b[0] : b.join(" "));
    return h.__proto__ = p, h._generator = q, h._styler = R, h._isEmpty = m, h;
  }, g = (q, R) => {
    if (q.level <= 0 || !R)
      return q._isEmpty ? "" : R;
    let m = q._styler;
    if (m === void 0)
      return R;
    const { openAll: h, closeAll: b } = m;
    if (R.indexOf("\x1B") !== -1)
      for (; m !== void 0; )
        R = i(R, m.close, m.open), m = m.parent;
    const x = R.indexOf(`
`);
    return x !== -1 && (R = a(R, b, h, x)), h + R + b;
  };
  let _;
  const f = (q, ...R) => {
    const [m] = R;
    if (!Array.isArray(m))
      return R.join(" ");
    const h = R.slice(1), b = [m.raw[0]];
    for (let x = 1; x < m.length; x++)
      b.push(
        String(h[x - 1]).replace(/[{}\\]/g, "\\$&"),
        String(m.raw[x])
      );
    return _ === void 0 && (_ = th()), _(q, b.join(""));
  };
  Object.defineProperties(u.prototype, o);
  const y = u();
  return y.supportsColor = r, y.stderr = u({ level: t ? t.level : 0 }), y.stderr.supportsColor = t, y.Level = {
    None: 0,
    Basic: 1,
    Ansi256: 2,
    TrueColor: 3,
    0: "None",
    1: "Basic",
    2: "Ansi256",
    3: "TrueColor"
  }, xa = y, xa;
}
var nh = ah();
const oh = /* @__PURE__ */ na(nh);
var wa, Sl;
function ih() {
  if (Sl) return wa;
  Sl = 1;
  function e() {
    this.__data__ = [], this.size = 0;
  }
  return wa = e, wa;
}
var Ea, Tl;
function jc() {
  if (Tl) return Ea;
  Tl = 1;
  function e(r, t) {
    return r === t || r !== r && t !== t;
  }
  return Ea = e, Ea;
}
var Oa, jl;
function oa() {
  if (jl) return Oa;
  jl = 1;
  var e = jc();
  function r(t, i) {
    for (var a = t.length; a--; )
      if (e(t[a][0], i))
        return a;
    return -1;
  }
  return Oa = r, Oa;
}
var Ma, $l;
function sh() {
  if ($l) return Ma;
  $l = 1;
  var e = oa(), r = Array.prototype, t = r.splice;
  function i(a) {
    var n = this.__data__, o = e(n, a);
    if (o < 0)
      return !1;
    var s = n.length - 1;
    return o == s ? n.pop() : t.call(n, o, 1), --this.size, !0;
  }
  return Ma = i, Ma;
}
var Aa, Nl;
function lh() {
  if (Nl) return Aa;
  Nl = 1;
  var e = oa();
  function r(t) {
    var i = this.__data__, a = e(i, t);
    return a < 0 ? void 0 : i[a][1];
  }
  return Aa = r, Aa;
}
var Sa, kl;
function uh() {
  if (kl) return Sa;
  kl = 1;
  var e = oa();
  function r(t) {
    return e(this.__data__, t) > -1;
  }
  return Sa = r, Sa;
}
var Ta, Dl;
function ch() {
  if (Dl) return Ta;
  Dl = 1;
  var e = oa();
  function r(t, i) {
    var a = this.__data__, n = e(a, t);
    return n < 0 ? (++this.size, a.push([t, i])) : a[n][1] = i, this;
  }
  return Ta = r, Ta;
}
var ja, Hl;
function ia() {
  if (Hl) return ja;
  Hl = 1;
  var e = ih(), r = sh(), t = lh(), i = uh(), a = ch();
  function n(o) {
    var s = -1, l = o == null ? 0 : o.length;
    for (this.clear(); ++s < l; ) {
      var c = o[s];
      this.set(c[0], c[1]);
    }
  }
  return n.prototype.clear = e, n.prototype.delete = r, n.prototype.get = t, n.prototype.has = i, n.prototype.set = a, ja = n, ja;
}
var $a, Ll;
function dh() {
  if (Ll) return $a;
  Ll = 1;
  var e = ia();
  function r() {
    this.__data__ = new e(), this.size = 0;
  }
  return $a = r, $a;
}
var Na, Il;
function ph() {
  if (Il) return Na;
  Il = 1;
  function e(r) {
    var t = this.__data__, i = t.delete(r);
    return this.size = t.size, i;
  }
  return Na = e, Na;
}
var ka, Fl;
function fh() {
  if (Fl) return ka;
  Fl = 1;
  function e(r) {
    return this.__data__.get(r);
  }
  return ka = e, ka;
}
var Da, Bl;
function mh() {
  if (Bl) return Da;
  Bl = 1;
  function e(r) {
    return this.__data__.has(r);
  }
  return Da = e, Da;
}
var Ha, Ul;
function $c() {
  if (Ul) return Ha;
  Ul = 1;
  var e = typeof re == "object" && re && re.Object === Object && re;
  return Ha = e, Ha;
}
var La, Vl;
function Q() {
  if (Vl) return La;
  Vl = 1;
  var e = $c(), r = typeof self == "object" && self && self.Object === Object && self, t = e || r || Function("return this")();
  return La = t, La;
}
var Ia, Gl;
function Ro() {
  if (Gl) return Ia;
  Gl = 1;
  var e = Q(), r = e.Symbol;
  return Ia = r, Ia;
}
var Fa, zl;
function vh() {
  if (zl) return Fa;
  zl = 1;
  var e = Ro(), r = Object.prototype, t = r.hasOwnProperty, i = r.toString, a = e ? e.toStringTag : void 0;
  function n(o) {
    var s = t.call(o, a), l = o[a];
    try {
      o[a] = void 0;
      var c = !0;
    } catch {
    }
    var u = i.call(o);
    return c && (s ? o[a] = l : delete o[a]), u;
  }
  return Fa = n, Fa;
}
var Ba, Kl;
function hh() {
  if (Kl) return Ba;
  Kl = 1;
  var e = Object.prototype, r = e.toString;
  function t(i) {
    return r.call(i);
  }
  return Ba = t, Ba;
}
var Ua, Wl;
function sa() {
  if (Wl) return Ua;
  Wl = 1;
  var e = Ro(), r = vh(), t = hh(), i = "[object Null]", a = "[object Undefined]", n = e ? e.toStringTag : void 0;
  function o(s) {
    return s == null ? s === void 0 ? a : i : n && n in Object(s) ? r(s) : t(s);
  }
  return Ua = o, Ua;
}
var Va, Xl;
function Nc() {
  if (Xl) return Va;
  Xl = 1;
  function e(r) {
    var t = typeof r;
    return r != null && (t == "object" || t == "function");
  }
  return Va = e, Va;
}
var Ga, Yl;
function kc() {
  if (Yl) return Ga;
  Yl = 1;
  var e = sa(), r = Nc(), t = "[object AsyncFunction]", i = "[object Function]", a = "[object GeneratorFunction]", n = "[object Proxy]";
  function o(s) {
    if (!r(s))
      return !1;
    var l = e(s);
    return l == i || l == a || l == t || l == n;
  }
  return Ga = o, Ga;
}
var za, Jl;
function bh() {
  if (Jl) return za;
  Jl = 1;
  var e = Q(), r = e["__core-js_shared__"];
  return za = r, za;
}
var Ka, Ql;
function Rh() {
  if (Ql) return Ka;
  Ql = 1;
  var e = bh(), r = function() {
    var i = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "");
    return i ? "Symbol(src)_1." + i : "";
  }();
  function t(i) {
    return !!r && r in i;
  }
  return Ka = t, Ka;
}
var Wa, Zl;
function Dc() {
  if (Zl) return Wa;
  Zl = 1;
  var e = Function.prototype, r = e.toString;
  function t(i) {
    if (i != null) {
      try {
        return r.call(i);
      } catch {
      }
      try {
        return i + "";
      } catch {
      }
    }
    return "";
  }
  return Wa = t, Wa;
}
var Xa, eu;
function gh() {
  if (eu) return Xa;
  eu = 1;
  var e = kc(), r = Rh(), t = Nc(), i = Dc(), a = /[\\^$.*+?()[\]{}|]/g, n = /^\[object .+?Constructor\]$/, o = Function.prototype, s = Object.prototype, l = o.toString, c = s.hasOwnProperty, u = RegExp(
    "^" + l.call(c).replace(a, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function d(p) {
    if (!t(p) || r(p))
      return !1;
    var v = e(p) ? u : n;
    return v.test(i(p));
  }
  return Xa = d, Xa;
}
var Ya, ru;
function yh() {
  if (ru) return Ya;
  ru = 1;
  function e(r, t) {
    return r == null ? void 0 : r[t];
  }
  return Ya = e, Ya;
}
var Ja, tu;
function te() {
  if (tu) return Ja;
  tu = 1;
  var e = gh(), r = yh();
  function t(i, a) {
    var n = r(i, a);
    return e(n) ? n : void 0;
  }
  return Ja = t, Ja;
}
var Qa, au;
function go() {
  if (au) return Qa;
  au = 1;
  var e = te(), r = Q(), t = e(r, "Map");
  return Qa = t, Qa;
}
var Za, nu;
function la() {
  if (nu) return Za;
  nu = 1;
  var e = te(), r = e(Object, "create");
  return Za = r, Za;
}
var en, ou;
function qh() {
  if (ou) return en;
  ou = 1;
  var e = la();
  function r() {
    this.__data__ = e ? e(null) : {}, this.size = 0;
  }
  return en = r, en;
}
var rn, iu;
function Ch() {
  if (iu) return rn;
  iu = 1;
  function e(r) {
    var t = this.has(r) && delete this.__data__[r];
    return this.size -= t ? 1 : 0, t;
  }
  return rn = e, rn;
}
var tn, su;
function _h() {
  if (su) return tn;
  su = 1;
  var e = la(), r = "__lodash_hash_undefined__", t = Object.prototype, i = t.hasOwnProperty;
  function a(n) {
    var o = this.__data__;
    if (e) {
      var s = o[n];
      return s === r ? void 0 : s;
    }
    return i.call(o, n) ? o[n] : void 0;
  }
  return tn = a, tn;
}
var an, lu;
function Ph() {
  if (lu) return an;
  lu = 1;
  var e = la(), r = Object.prototype, t = r.hasOwnProperty;
  function i(a) {
    var n = this.__data__;
    return e ? n[a] !== void 0 : t.call(n, a);
  }
  return an = i, an;
}
var nn, uu;
function xh() {
  if (uu) return nn;
  uu = 1;
  var e = la(), r = "__lodash_hash_undefined__";
  function t(i, a) {
    var n = this.__data__;
    return this.size += this.has(i) ? 0 : 1, n[i] = e && a === void 0 ? r : a, this;
  }
  return nn = t, nn;
}
var on, cu;
function wh() {
  if (cu) return on;
  cu = 1;
  var e = qh(), r = Ch(), t = _h(), i = Ph(), a = xh();
  function n(o) {
    var s = -1, l = o == null ? 0 : o.length;
    for (this.clear(); ++s < l; ) {
      var c = o[s];
      this.set(c[0], c[1]);
    }
  }
  return n.prototype.clear = e, n.prototype.delete = r, n.prototype.get = t, n.prototype.has = i, n.prototype.set = a, on = n, on;
}
var sn, du;
function Eh() {
  if (du) return sn;
  du = 1;
  var e = wh(), r = ia(), t = go();
  function i() {
    this.size = 0, this.__data__ = {
      hash: new e(),
      map: new (t || r)(),
      string: new e()
    };
  }
  return sn = i, sn;
}
var ln, pu;
function Oh() {
  if (pu) return ln;
  pu = 1;
  function e(r) {
    var t = typeof r;
    return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? r !== "__proto__" : r === null;
  }
  return ln = e, ln;
}
var un, fu;
function ua() {
  if (fu) return un;
  fu = 1;
  var e = Oh();
  function r(t, i) {
    var a = t.__data__;
    return e(i) ? a[typeof i == "string" ? "string" : "hash"] : a.map;
  }
  return un = r, un;
}
var cn, mu;
function Mh() {
  if (mu) return cn;
  mu = 1;
  var e = ua();
  function r(t) {
    var i = e(this, t).delete(t);
    return this.size -= i ? 1 : 0, i;
  }
  return cn = r, cn;
}
var dn, vu;
function Ah() {
  if (vu) return dn;
  vu = 1;
  var e = ua();
  function r(t) {
    return e(this, t).get(t);
  }
  return dn = r, dn;
}
var pn, hu;
function Sh() {
  if (hu) return pn;
  hu = 1;
  var e = ua();
  function r(t) {
    return e(this, t).has(t);
  }
  return pn = r, pn;
}
var fn, bu;
function Th() {
  if (bu) return fn;
  bu = 1;
  var e = ua();
  function r(t, i) {
    var a = e(this, t), n = a.size;
    return a.set(t, i), this.size += a.size == n ? 0 : 1, this;
  }
  return fn = r, fn;
}
var mn, Ru;
function Hc() {
  if (Ru) return mn;
  Ru = 1;
  var e = Eh(), r = Mh(), t = Ah(), i = Sh(), a = Th();
  function n(o) {
    var s = -1, l = o == null ? 0 : o.length;
    for (this.clear(); ++s < l; ) {
      var c = o[s];
      this.set(c[0], c[1]);
    }
  }
  return n.prototype.clear = e, n.prototype.delete = r, n.prototype.get = t, n.prototype.has = i, n.prototype.set = a, mn = n, mn;
}
var vn, gu;
function jh() {
  if (gu) return vn;
  gu = 1;
  var e = ia(), r = go(), t = Hc(), i = 200;
  function a(n, o) {
    var s = this.__data__;
    if (s instanceof e) {
      var l = s.__data__;
      if (!r || l.length < i - 1)
        return l.push([n, o]), this.size = ++s.size, this;
      s = this.__data__ = new t(l);
    }
    return s.set(n, o), this.size = s.size, this;
  }
  return vn = a, vn;
}
var hn, yu;
function $h() {
  if (yu) return hn;
  yu = 1;
  var e = ia(), r = dh(), t = ph(), i = fh(), a = mh(), n = jh();
  function o(s) {
    var l = this.__data__ = new e(s);
    this.size = l.size;
  }
  return o.prototype.clear = r, o.prototype.delete = t, o.prototype.get = i, o.prototype.has = a, o.prototype.set = n, hn = o, hn;
}
var bn, qu;
function Nh() {
  if (qu) return bn;
  qu = 1;
  var e = "__lodash_hash_undefined__";
  function r(t) {
    return this.__data__.set(t, e), this;
  }
  return bn = r, bn;
}
var Rn, Cu;
function kh() {
  if (Cu) return Rn;
  Cu = 1;
  function e(r) {
    return this.__data__.has(r);
  }
  return Rn = e, Rn;
}
var gn, _u;
function Dh() {
  if (_u) return gn;
  _u = 1;
  var e = Hc(), r = Nh(), t = kh();
  function i(a) {
    var n = -1, o = a == null ? 0 : a.length;
    for (this.__data__ = new e(); ++n < o; )
      this.add(a[n]);
  }
  return i.prototype.add = i.prototype.push = r, i.prototype.has = t, gn = i, gn;
}
var yn, Pu;
function Hh() {
  if (Pu) return yn;
  Pu = 1;
  function e(r, t) {
    for (var i = -1, a = r == null ? 0 : r.length; ++i < a; )
      if (t(r[i], i, r))
        return !0;
    return !1;
  }
  return yn = e, yn;
}
var qn, xu;
function Lh() {
  if (xu) return qn;
  xu = 1;
  function e(r, t) {
    return r.has(t);
  }
  return qn = e, qn;
}
var Cn, wu;
function Lc() {
  if (wu) return Cn;
  wu = 1;
  var e = Dh(), r = Hh(), t = Lh(), i = 1, a = 2;
  function n(o, s, l, c, u, d) {
    var p = l & i, v = o.length, C = s.length;
    if (v != C && !(p && C > v))
      return !1;
    var g = d.get(o), _ = d.get(s);
    if (g && _)
      return g == s && _ == o;
    var f = -1, y = !0, q = l & a ? new e() : void 0;
    for (d.set(o, s), d.set(s, o); ++f < v; ) {
      var R = o[f], m = s[f];
      if (c)
        var h = p ? c(m, R, f, s, o, d) : c(R, m, f, o, s, d);
      if (h !== void 0) {
        if (h)
          continue;
        y = !1;
        break;
      }
      if (q) {
        if (!r(s, function(b, x) {
          if (!t(q, x) && (R === b || u(R, b, l, c, d)))
            return q.push(x);
        })) {
          y = !1;
          break;
        }
      } else if (!(R === m || u(R, m, l, c, d))) {
        y = !1;
        break;
      }
    }
    return d.delete(o), d.delete(s), y;
  }
  return Cn = n, Cn;
}
var _n, Eu;
function Ih() {
  if (Eu) return _n;
  Eu = 1;
  var e = Q(), r = e.Uint8Array;
  return _n = r, _n;
}
var Pn, Ou;
function Fh() {
  if (Ou) return Pn;
  Ou = 1;
  function e(r) {
    var t = -1, i = Array(r.size);
    return r.forEach(function(a, n) {
      i[++t] = [n, a];
    }), i;
  }
  return Pn = e, Pn;
}
var xn, Mu;
function Bh() {
  if (Mu) return xn;
  Mu = 1;
  function e(r) {
    var t = -1, i = Array(r.size);
    return r.forEach(function(a) {
      i[++t] = a;
    }), i;
  }
  return xn = e, xn;
}
var wn, Au;
function Uh() {
  if (Au) return wn;
  Au = 1;
  var e = Ro(), r = Ih(), t = jc(), i = Lc(), a = Fh(), n = Bh(), o = 1, s = 2, l = "[object Boolean]", c = "[object Date]", u = "[object Error]", d = "[object Map]", p = "[object Number]", v = "[object RegExp]", C = "[object Set]", g = "[object String]", _ = "[object Symbol]", f = "[object ArrayBuffer]", y = "[object DataView]", q = e ? e.prototype : void 0, R = q ? q.valueOf : void 0;
  function m(h, b, x, A, T, M, j) {
    switch (x) {
      case y:
        if (h.byteLength != b.byteLength || h.byteOffset != b.byteOffset)
          return !1;
        h = h.buffer, b = b.buffer;
      case f:
        return !(h.byteLength != b.byteLength || !M(new r(h), new r(b)));
      case l:
      case c:
      case p:
        return t(+h, +b);
      case u:
        return h.name == b.name && h.message == b.message;
      case v:
      case g:
        return h == b + "";
      case d:
        var $ = a;
      case C:
        var H = A & o;
        if ($ || ($ = n), h.size != b.size && !H)
          return !1;
        var I = j.get(h);
        if (I)
          return I == b;
        A |= s, j.set(h, b);
        var G = i($(h), $(b), A, T, M, j);
        return j.delete(h), G;
      case _:
        if (R)
          return R.call(h) == R.call(b);
    }
    return !1;
  }
  return wn = m, wn;
}
var En, Su;
function Vh() {
  if (Su) return En;
  Su = 1;
  function e(r, t) {
    for (var i = -1, a = t.length, n = r.length; ++i < a; )
      r[n + i] = t[i];
    return r;
  }
  return En = e, En;
}
var On, Tu;
function yo() {
  if (Tu) return On;
  Tu = 1;
  var e = Array.isArray;
  return On = e, On;
}
var Mn, ju;
function Gh() {
  if (ju) return Mn;
  ju = 1;
  var e = Vh(), r = yo();
  function t(i, a, n) {
    var o = a(i);
    return r(i) ? o : e(o, n(i));
  }
  return Mn = t, Mn;
}
var An, $u;
function zh() {
  if ($u) return An;
  $u = 1;
  function e(r, t) {
    for (var i = -1, a = r == null ? 0 : r.length, n = 0, o = []; ++i < a; ) {
      var s = r[i];
      t(s, i, r) && (o[n++] = s);
    }
    return o;
  }
  return An = e, An;
}
var Sn, Nu;
function Kh() {
  if (Nu) return Sn;
  Nu = 1;
  function e() {
    return [];
  }
  return Sn = e, Sn;
}
var Tn, ku;
function Wh() {
  if (ku) return Tn;
  ku = 1;
  var e = zh(), r = Kh(), t = Object.prototype, i = t.propertyIsEnumerable, a = Object.getOwnPropertySymbols, n = a ? function(o) {
    return o == null ? [] : (o = Object(o), e(a(o), function(s) {
      return i.call(o, s);
    }));
  } : r;
  return Tn = n, Tn;
}
var jn, Du;
function Xh() {
  if (Du) return jn;
  Du = 1;
  function e(r, t) {
    for (var i = -1, a = Array(r); ++i < r; )
      a[i] = t(i);
    return a;
  }
  return jn = e, jn;
}
var $n, Hu;
function ca() {
  if (Hu) return $n;
  Hu = 1;
  function e(r) {
    return r != null && typeof r == "object";
  }
  return $n = e, $n;
}
var Nn, Lu;
function Yh() {
  if (Lu) return Nn;
  Lu = 1;
  var e = sa(), r = ca(), t = "[object Arguments]";
  function i(a) {
    return r(a) && e(a) == t;
  }
  return Nn = i, Nn;
}
var kn, Iu;
function Jh() {
  if (Iu) return kn;
  Iu = 1;
  var e = Yh(), r = ca(), t = Object.prototype, i = t.hasOwnProperty, a = t.propertyIsEnumerable, n = e(/* @__PURE__ */ function() {
    return arguments;
  }()) ? e : function(o) {
    return r(o) && i.call(o, "callee") && !a.call(o, "callee");
  };
  return kn = n, kn;
}
var Kt = { exports: {} }, Dn, Fu;
function Qh() {
  if (Fu) return Dn;
  Fu = 1;
  function e() {
    return !1;
  }
  return Dn = e, Dn;
}
Kt.exports;
var Bu;
function Ic() {
  return Bu || (Bu = 1, function(e, r) {
    var t = Q(), i = Qh(), a = r && !r.nodeType && r, n = a && !0 && e && !e.nodeType && e, o = n && n.exports === a, s = o ? t.Buffer : void 0, l = s ? s.isBuffer : void 0, c = l || i;
    e.exports = c;
  }(Kt, Kt.exports)), Kt.exports;
}
var Hn, Uu;
function Zh() {
  if (Uu) return Hn;
  Uu = 1;
  var e = 9007199254740991, r = /^(?:0|[1-9]\d*)$/;
  function t(i, a) {
    var n = typeof i;
    return a = a ?? e, !!a && (n == "number" || n != "symbol" && r.test(i)) && i > -1 && i % 1 == 0 && i < a;
  }
  return Hn = t, Hn;
}
var Ln, Vu;
function Fc() {
  if (Vu) return Ln;
  Vu = 1;
  var e = 9007199254740991;
  function r(t) {
    return typeof t == "number" && t > -1 && t % 1 == 0 && t <= e;
  }
  return Ln = r, Ln;
}
var In, Gu;
function eb() {
  if (Gu) return In;
  Gu = 1;
  var e = sa(), r = Fc(), t = ca(), i = "[object Arguments]", a = "[object Array]", n = "[object Boolean]", o = "[object Date]", s = "[object Error]", l = "[object Function]", c = "[object Map]", u = "[object Number]", d = "[object Object]", p = "[object RegExp]", v = "[object Set]", C = "[object String]", g = "[object WeakMap]", _ = "[object ArrayBuffer]", f = "[object DataView]", y = "[object Float32Array]", q = "[object Float64Array]", R = "[object Int8Array]", m = "[object Int16Array]", h = "[object Int32Array]", b = "[object Uint8Array]", x = "[object Uint8ClampedArray]", A = "[object Uint16Array]", T = "[object Uint32Array]", M = {};
  M[y] = M[q] = M[R] = M[m] = M[h] = M[b] = M[x] = M[A] = M[T] = !0, M[i] = M[a] = M[_] = M[n] = M[f] = M[o] = M[s] = M[l] = M[c] = M[u] = M[d] = M[p] = M[v] = M[C] = M[g] = !1;
  function j($) {
    return t($) && r($.length) && !!M[e($)];
  }
  return In = j, In;
}
var Fn, zu;
function rb() {
  if (zu) return Fn;
  zu = 1;
  function e(r) {
    return function(t) {
      return r(t);
    };
  }
  return Fn = e, Fn;
}
var Wt = { exports: {} };
Wt.exports;
var Ku;
function tb() {
  return Ku || (Ku = 1, function(e, r) {
    var t = $c(), i = r && !r.nodeType && r, a = i && !0 && e && !e.nodeType && e, n = a && a.exports === i, o = n && t.process, s = function() {
      try {
        var l = a && a.require && a.require("util").types;
        return l || o && o.binding && o.binding("util");
      } catch {
      }
    }();
    e.exports = s;
  }(Wt, Wt.exports)), Wt.exports;
}
var Bn, Wu;
function Bc() {
  if (Wu) return Bn;
  Wu = 1;
  var e = eb(), r = rb(), t = tb(), i = t && t.isTypedArray, a = i ? r(i) : e;
  return Bn = a, Bn;
}
var Un, Xu;
function ab() {
  if (Xu) return Un;
  Xu = 1;
  var e = Xh(), r = Jh(), t = yo(), i = Ic(), a = Zh(), n = Bc(), o = Object.prototype, s = o.hasOwnProperty;
  function l(c, u) {
    var d = t(c), p = !d && r(c), v = !d && !p && i(c), C = !d && !p && !v && n(c), g = d || p || v || C, _ = g ? e(c.length, String) : [], f = _.length;
    for (var y in c)
      (u || s.call(c, y)) && !(g && // Safari 9 has enumerable `arguments.length` in strict mode.
      (y == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      v && (y == "offset" || y == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      C && (y == "buffer" || y == "byteLength" || y == "byteOffset") || // Skip index properties.
      a(y, f))) && _.push(y);
    return _;
  }
  return Un = l, Un;
}
var Vn, Yu;
function nb() {
  if (Yu) return Vn;
  Yu = 1;
  var e = Object.prototype;
  function r(t) {
    var i = t && t.constructor, a = typeof i == "function" && i.prototype || e;
    return t === a;
  }
  return Vn = r, Vn;
}
var Gn, Ju;
function ob() {
  if (Ju) return Gn;
  Ju = 1;
  function e(r, t) {
    return function(i) {
      return r(t(i));
    };
  }
  return Gn = e, Gn;
}
var zn, Qu;
function ib() {
  if (Qu) return zn;
  Qu = 1;
  var e = ob(), r = e(Object.keys, Object);
  return zn = r, zn;
}
var Kn, Zu;
function sb() {
  if (Zu) return Kn;
  Zu = 1;
  var e = nb(), r = ib(), t = Object.prototype, i = t.hasOwnProperty;
  function a(n) {
    if (!e(n))
      return r(n);
    var o = [];
    for (var s in Object(n))
      i.call(n, s) && s != "constructor" && o.push(s);
    return o;
  }
  return Kn = a, Kn;
}
var Wn, ec;
function lb() {
  if (ec) return Wn;
  ec = 1;
  var e = kc(), r = Fc();
  function t(i) {
    return i != null && r(i.length) && !e(i);
  }
  return Wn = t, Wn;
}
var Xn, rc;
function ub() {
  if (rc) return Xn;
  rc = 1;
  var e = ab(), r = sb(), t = lb();
  function i(a) {
    return t(a) ? e(a) : r(a);
  }
  return Xn = i, Xn;
}
var Yn, tc;
function cb() {
  if (tc) return Yn;
  tc = 1;
  var e = Gh(), r = Wh(), t = ub();
  function i(a) {
    return e(a, t, r);
  }
  return Yn = i, Yn;
}
var Jn, ac;
function db() {
  if (ac) return Jn;
  ac = 1;
  var e = cb(), r = 1, t = Object.prototype, i = t.hasOwnProperty;
  function a(n, o, s, l, c, u) {
    var d = s & r, p = e(n), v = p.length, C = e(o), g = C.length;
    if (v != g && !d)
      return !1;
    for (var _ = v; _--; ) {
      var f = p[_];
      if (!(d ? f in o : i.call(o, f)))
        return !1;
    }
    var y = u.get(n), q = u.get(o);
    if (y && q)
      return y == o && q == n;
    var R = !0;
    u.set(n, o), u.set(o, n);
    for (var m = d; ++_ < v; ) {
      f = p[_];
      var h = n[f], b = o[f];
      if (l)
        var x = d ? l(b, h, f, o, n, u) : l(h, b, f, n, o, u);
      if (!(x === void 0 ? h === b || c(h, b, s, l, u) : x)) {
        R = !1;
        break;
      }
      m || (m = f == "constructor");
    }
    if (R && !m) {
      var A = n.constructor, T = o.constructor;
      A != T && "constructor" in n && "constructor" in o && !(typeof A == "function" && A instanceof A && typeof T == "function" && T instanceof T) && (R = !1);
    }
    return u.delete(n), u.delete(o), R;
  }
  return Jn = a, Jn;
}
var Qn, nc;
function pb() {
  if (nc) return Qn;
  nc = 1;
  var e = te(), r = Q(), t = e(r, "DataView");
  return Qn = t, Qn;
}
var Zn, oc;
function fb() {
  if (oc) return Zn;
  oc = 1;
  var e = te(), r = Q(), t = e(r, "Promise");
  return Zn = t, Zn;
}
var eo, ic;
function mb() {
  if (ic) return eo;
  ic = 1;
  var e = te(), r = Q(), t = e(r, "Set");
  return eo = t, eo;
}
var ro, sc;
function vb() {
  if (sc) return ro;
  sc = 1;
  var e = te(), r = Q(), t = e(r, "WeakMap");
  return ro = t, ro;
}
var to, lc;
function hb() {
  if (lc) return to;
  lc = 1;
  var e = pb(), r = go(), t = fb(), i = mb(), a = vb(), n = sa(), o = Dc(), s = "[object Map]", l = "[object Object]", c = "[object Promise]", u = "[object Set]", d = "[object WeakMap]", p = "[object DataView]", v = o(e), C = o(r), g = o(t), _ = o(i), f = o(a), y = n;
  return (e && y(new e(new ArrayBuffer(1))) != p || r && y(new r()) != s || t && y(t.resolve()) != c || i && y(new i()) != u || a && y(new a()) != d) && (y = function(q) {
    var R = n(q), m = R == l ? q.constructor : void 0, h = m ? o(m) : "";
    if (h)
      switch (h) {
        case v:
          return p;
        case C:
          return s;
        case g:
          return c;
        case _:
          return u;
        case f:
          return d;
      }
    return R;
  }), to = y, to;
}
var ao, uc;
function bb() {
  if (uc) return ao;
  uc = 1;
  var e = $h(), r = Lc(), t = Uh(), i = db(), a = hb(), n = yo(), o = Ic(), s = Bc(), l = 1, c = "[object Arguments]", u = "[object Array]", d = "[object Object]", p = Object.prototype, v = p.hasOwnProperty;
  function C(g, _, f, y, q, R) {
    var m = n(g), h = n(_), b = m ? u : a(g), x = h ? u : a(_);
    b = b == c ? d : b, x = x == c ? d : x;
    var A = b == d, T = x == d, M = b == x;
    if (M && o(g)) {
      if (!o(_))
        return !1;
      m = !0, A = !1;
    }
    if (M && !A)
      return R || (R = new e()), m || s(g) ? r(g, _, f, y, q, R) : t(g, _, b, f, y, q, R);
    if (!(f & l)) {
      var j = A && v.call(g, "__wrapped__"), $ = T && v.call(_, "__wrapped__");
      if (j || $) {
        var H = j ? g.value() : g, I = $ ? _.value() : _;
        return R || (R = new e()), q(H, I, f, y, R);
      }
    }
    return M ? (R || (R = new e()), i(g, _, f, y, q, R)) : !1;
  }
  return ao = C, ao;
}
var no, cc;
function Rb() {
  if (cc) return no;
  cc = 1;
  var e = bb(), r = ca();
  function t(i, a, n, o, s) {
    return i === a ? !0 : i == null || a == null || !r(i) && !r(a) ? i !== i && a !== a : e(i, a, n, o, t, s);
  }
  return no = t, no;
}
var oo, dc;
function gb() {
  if (dc) return oo;
  dc = 1;
  var e = Rb();
  function r(t, i, a) {
    a = typeof a == "function" ? a : void 0;
    var n = a ? a(t, i) : void 0;
    return n === void 0 ? e(t, i, void 0, a) : !!n;
  }
  return oo = r, oo;
}
var yb = gb();
const qo = /* @__PURE__ */ na(yb);
var ta = { exports: {} };
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
var qb = ta.exports, pc;
function Cb() {
  return pc || (pc = 1, function(e, r) {
    (function(t, i) {
      e.exports = i(t);
    })(typeof re < "u" ? re : qb, function(t) {
      if (t.CSS && t.CSS.escape)
        return t.CSS.escape;
      var i = function(a) {
        if (arguments.length == 0)
          throw new TypeError("`CSS.escape` requires an argument.");
        for (var n = String(a), o = n.length, s = -1, l, c = "", u = n.charCodeAt(0); ++s < o; ) {
          if (l = n.charCodeAt(s), l == 0) {
            c += "�";
            continue;
          }
          if (
            // If the character is in the range [\1-\1F] (U+0001 to U+001F) or is
            // U+007F, […]
            l >= 1 && l <= 31 || l == 127 || // If the character is the first character and is in the range [0-9]
            // (U+0030 to U+0039), […]
            s == 0 && l >= 48 && l <= 57 || // If the character is the second character and is in the range [0-9]
            // (U+0030 to U+0039) and the first character is a `-` (U+002D), […]
            s == 1 && l >= 48 && l <= 57 && u == 45
          ) {
            c += "\\" + l.toString(16) + " ";
            continue;
          }
          if (
            // If the character is the first character and is a `-` (U+002D), and
            // there is no second character, […]
            s == 0 && o == 1 && l == 45
          ) {
            c += "\\" + n.charAt(s);
            continue;
          }
          if (l >= 128 || l == 45 || l == 95 || l >= 48 && l <= 57 || l >= 65 && l <= 90 || l >= 97 && l <= 122) {
            c += n.charAt(s);
            continue;
          }
          c += "\\" + n.charAt(s);
        }
        return c;
      };
      return t.CSS || (t.CSS = {}), t.CSS.escape = i, i;
    });
  }(ta)), ta.exports;
}
var _b = Cb();
const Pb = /* @__PURE__ */ na(_b);
class Uc extends Error {
  constructor(r, t, i, a) {
    super(), Error.captureStackTrace && Error.captureStackTrace(this, i);
    let n = "";
    try {
      n = a.utils.printWithType(
        "Received",
        t,
        a.utils.printReceived
      );
    } catch {
    }
    this.message = [
      a.utils.matcherHint(
        `${a.isNot ? ".not" : ""}.${i.name}`,
        "received",
        ""
      ),
      "",
      // eslint-disable-next-line new-cap
      `${a.utils.RECEIVED_COLOR(
        "received"
      )} value must ${r}.`,
      n
    ].join(`
`);
  }
}
class fc extends Uc {
  constructor(...r) {
    super("be an HTMLElement or an SVGElement", ...r);
  }
}
class mc extends Uc {
  constructor(...r) {
    super("be a Node", ...r);
  }
}
function Vc(e, r, ...t) {
  if (!e || !e.ownerDocument || !e.ownerDocument.defaultView)
    throw new r(e, ...t);
}
function xb(e, ...r) {
  Vc(e, mc, ...r);
  const t = e.ownerDocument.defaultView;
  if (!(e instanceof t.Node))
    throw new mc(e, ...r);
}
function N(e, ...r) {
  Vc(e, fc, ...r);
  const t = e.ownerDocument.defaultView;
  if (!(e instanceof t.HTMLElement) && !(e instanceof t.SVGElement))
    throw new fc(e, ...r);
}
class wb extends Error {
  constructor(r, t, i) {
    super(), Error.captureStackTrace && Error.captureStackTrace(this, t), this.message = [
      r.message,
      "",
      // eslint-disable-next-line new-cap
      i.utils.RECEIVED_COLOR("Failing css:"),
      // eslint-disable-next-line new-cap
      i.utils.RECEIVED_COLOR(`${r.css}`)
    ].join(`
`);
  }
}
function Eb(e, ...r) {
  const t = mp(`selector { ${e} }`, { silent: !0 }).stylesheet;
  if (t.parsingErrors && t.parsingErrors.length > 0) {
    const { reason: a, line: n } = t.parsingErrors[0];
    throw new wb(
      {
        css: e,
        message: `Syntax error parsing expected css: ${a} on line: ${n}`
      },
      ...r
    );
  }
  return t.rules[0].declarations.filter((a) => a.type === "declaration").reduce(
    (a, { property: n, value: o }) => Object.assign(a, { [n]: o }),
    {}
  );
}
function vc(e, r) {
  return typeof r == "string" ? r : e.utils.stringify(r);
}
function F(e, r, t, i, a, n) {
  return [
    `${r}
`,
    // eslint-disable-next-line new-cap
    `${t}:
${e.utils.EXPECTED_COLOR(
      Oo(vc(e, i), 2)
    )}`,
    // eslint-disable-next-line new-cap
    `${a}:
${e.utils.RECEIVED_COLOR(
      Oo(vc(e, n), 2)
    )}`
  ].join(`
`);
}
function Ob(e, r) {
  return r instanceof RegExp ? r.test(e) : e.includes(String(r));
}
function da(e, r) {
  console.warn(
    `Warning: ${e} has been deprecated and will be removed in future updates.`,
    r
  );
}
function pa(e) {
  return e.replace(/\s+/g, " ").trim();
}
function Z(e) {
  return e.tagName && e.tagName.toLowerCase();
}
function Mb({ multiple: e, options: r }) {
  const t = [...r].filter((i) => i.selected);
  if (e)
    return [...t].map((i) => i.value);
  if (t.length !== 0)
    return t[0].value;
}
function Ab(e) {
  switch (e.type) {
    case "number":
      return e.value === "" ? null : Number(e.value);
    case "checkbox":
      return e.checked;
    default:
      return e.value;
  }
}
const Sb = ["meter", "progressbar", "slider", "spinbutton"];
function Tb(e) {
  if (Sb.includes(e.getAttribute("role")))
    return Number(e.getAttribute("aria-valuenow"));
}
function Gc(e) {
  if (e)
    switch (e.tagName.toLowerCase()) {
      case "input":
        return Ab(e);
      case "select":
        return Mb(e);
      default:
        return e.value ?? Tb(e);
    }
}
function jb(e, { wordConnector: r = ", ", lastWordConnector: t = " and " } = {}) {
  return [e.slice(0, -1).join(r), e[e.length - 1]].join(
    e.length > 1 ? t : ""
  );
}
function Co(e, r) {
  if (Array.isArray(e) && Array.isArray(r))
    return [...new Set(e)].every((t) => new Set(r).has(t));
}
function lo(e, r) {
  return da(
    "toBeInTheDOM",
    "Please use toBeInTheDocument for searching the entire document and toContainElement for searching a specific container."
  ), e && N(e, lo, this), r && N(r, lo, this), {
    pass: r ? r.contains(e) : !!e,
    message: () => [
      this.utils.matcherHint(
        `${this.isNot ? ".not" : ""}.toBeInTheDOM`,
        "element",
        ""
      ),
      "",
      "Received:",
      `  ${this.utils.printReceived(
        e && e.cloneNode(!1)
      )}`
    ].join(`
`)
  };
}
function zc(e) {
  (e !== null || !this.isNot) && N(e, zc, this);
  const r = e === null ? !1 : e.ownerDocument === e.getRootNode({ composed: !0 }), t = () => `expected document not to contain element, found ${this.utils.stringify(
    e.cloneNode(!0)
  )} instead`, i = () => "element could not be found in the document";
  return {
    pass: r,
    message: () => [
      this.utils.matcherHint(
        `${this.isNot ? ".not" : ""}.toBeInTheDocument`,
        "element",
        ""
      ),
      "",
      // eslint-disable-next-line new-cap
      this.utils.RECEIVED_COLOR(this.isNot ? t() : i())
    ].join(`
`)
  };
}
function Kc(e) {
  return da(
    "toBeEmpty",
    "Please use instead toBeEmptyDOMElement for finding empty nodes in the DOM."
  ), N(e, Kc, this), {
    pass: e.innerHTML === "",
    message: () => [
      this.utils.matcherHint(
        `${this.isNot ? ".not" : ""}.toBeEmpty`,
        "element",
        ""
      ),
      "",
      "Received:",
      `  ${this.utils.printReceived(e.innerHTML)}`
    ].join(`
`)
  };
}
function Wc(e) {
  return N(e, Wc, this), {
    pass: $b(e),
    message: () => [
      this.utils.matcherHint(
        `${this.isNot ? ".not" : ""}.toBeEmptyDOMElement`,
        "element",
        ""
      ),
      "",
      "Received:",
      `  ${this.utils.printReceived(e.innerHTML)}`
    ].join(`
`)
  };
}
function $b(e) {
  return [...e.childNodes].filter((t) => t.nodeType !== 8).length === 0;
}
function uo(e, r) {
  return N(e, uo, this), r !== null && N(r, uo, this), {
    pass: e.contains(r),
    message: () => [
      this.utils.matcherHint(
        `${this.isNot ? ".not" : ""}.toContainElement`,
        "element",
        "element"
      ),
      "",
      // eslint-disable-next-line new-cap
      this.utils.RECEIVED_COLOR(`${this.utils.stringify(
        e.cloneNode(!1)
      )} ${this.isNot ? "contains:" : "does not contain:"} ${this.utils.stringify(r && r.cloneNode(!1))}
        `)
    ].join(`
`)
  };
}
function Nb(e, r) {
  const t = e.ownerDocument.createElement("div");
  return t.innerHTML = r, t.innerHTML;
}
function Xc(e, r) {
  if (N(e, Xc, this), typeof r != "string")
    throw new Error(`.toContainHTML() expects a string value, got ${r}`);
  return {
    pass: e.outerHTML.includes(Nb(e, r)),
    message: () => [
      this.utils.matcherHint(
        `${this.isNot ? ".not" : ""}.toContainHTML`,
        "element",
        ""
      ),
      "Expected:",
      // eslint-disable-next-line new-cap
      `  ${this.utils.EXPECTED_COLOR(r)}`,
      "Received:",
      `  ${this.utils.printReceived(e.cloneNode(!0))}`
    ].join(`
`)
  };
}
function Yc(e, r, t = { normalizeWhitespace: !0 }) {
  xb(e, Yc, this);
  const i = t.normalizeWhitespace ? pa(e.textContent) : e.textContent.replace(/\u00a0/g, " "), a = i !== "" && r === "";
  return {
    pass: !a && Ob(i, r),
    message: () => {
      const n = this.isNot ? "not to" : "to";
      return F(
        this,
        this.utils.matcherHint(
          `${this.isNot ? ".not" : ""}.toHaveTextContent`,
          "element",
          ""
        ),
        a ? "Checking with empty string will always match, use .toBeEmptyDOMElement() instead" : `Expected element ${n} have text content`,
        r,
        "Received",
        i
      );
    }
  };
}
function co(e, r) {
  N(e, co, this);
  const t = of(e), i = arguments.length === 1;
  let a = !1;
  return i ? a = t !== "" : a = r instanceof RegExp ? r.test(t) : this.equals(
    t,
    r
  ), {
    pass: a,
    message: () => {
      const n = this.isNot ? "not to" : "to";
      return F(
        this,
        this.utils.matcherHint(
          `${this.isNot ? ".not" : ""}.${co.name}`,
          "element",
          ""
        ),
        `Expected element ${n} have accessible description`,
        r,
        "Received",
        t
      );
    }
  };
}
const zt = "aria-invalid", kb = ["false"];
function Jc(e, r) {
  var c;
  N(e, Jc, this);
  const t = this.isNot ? "not to" : "to", i = this.isNot ? ".not.toHaveAccessibleErrorMessage" : ".toHaveAccessibleErrorMessage", a = e.getAttribute("aria-errormessage");
  if (!!a && /\s+/.test(a))
    return {
      pass: !1,
      message: () => F(
        this,
        this.utils.matcherHint(i, "element"),
        "Expected element's `aria-errormessage` attribute to be empty or a single, valid ID",
        "",
        "Received",
        `aria-errormessage="${a}"`
      )
    };
  const o = e.getAttribute(zt);
  if (!e.hasAttribute(zt) || kb.includes(o))
    return {
      pass: !1,
      message: () => F(
        this,
        this.utils.matcherHint(i, "element"),
        "Expected element to be marked as invalid with attribute",
        `${zt}="${String(!0)}"`,
        "Received",
        e.hasAttribute("aria-invalid") ? `${zt}="${e.getAttribute(zt)}` : null
      )
    };
  const l = pa(
    ((c = e.ownerDocument.getElementById(a)) == null ? void 0 : c.textContent) ?? ""
  );
  return {
    pass: r === void 0 ? !!l : r instanceof RegExp ? r.test(l) : this.equals(l, r),
    message: () => F(
      this,
      this.utils.matcherHint(i, "element"),
      `Expected element ${t} have accessible error message`,
      r ?? "",
      "Received",
      l
    )
  };
}
const Db = Ib(bo.elementRoles);
function po(e, r) {
  N(e, po, this);
  const t = Hb(e);
  return {
    pass: t.some((a) => a === r),
    message: () => {
      const a = this.isNot ? "not to" : "to";
      return F(
        this,
        this.utils.matcherHint(
          `${this.isNot ? ".not" : ""}.${po.name}`,
          "element",
          ""
        ),
        `Expected element ${a} have role`,
        r,
        "Received",
        t.join(", ")
      );
    }
  };
}
function Hb(e) {
  return e.hasAttribute("role") ? e.getAttribute("role").split(" ").filter(Boolean) : Lb(e);
}
function Lb(e) {
  for (const { match: r, roles: t } of Db)
    if (r(e))
      return [...t];
  return [];
}
function Ib(e) {
  function r({ name: o, attributes: s }) {
    return `${o}${s.map(({ name: l, value: c, constraints: u = [] }) => u.indexOf("undefined") !== -1 ? `:not([${l}])` : c ? `[${l}="${c}"]` : `[${l}]`).join("")}`;
  }
  function t({ attributes: o = [] }) {
    return o.length;
  }
  function i({ specificity: o }, { specificity: s }) {
    return s - o;
  }
  function a(o) {
    let { attributes: s = [] } = o;
    const l = s.findIndex(
      (u) => u.value && u.name === "type" && u.value === "text"
    );
    l >= 0 && (s = [
      ...s.slice(0, l),
      ...s.slice(l + 1)
    ]);
    const c = r({ ...o, attributes: s });
    return (u) => l >= 0 && u.type !== "text" ? !1 : u.matches(c);
  }
  let n = [];
  for (const [o, s] of e.entries())
    n = [
      ...n,
      {
        match: a(o),
        roles: Array.from(s),
        specificity: t(o)
      }
    ];
  return n.sort(i);
}
function fo(e, r) {
  N(e, fo, this);
  const t = lf(e), i = arguments.length === 1;
  let a = !1;
  return i ? a = t !== "" : a = r instanceof RegExp ? r.test(t) : this.equals(t, r), {
    pass: a,
    message: () => {
      const n = this.isNot ? "not to" : "to";
      return F(
        this,
        this.utils.matcherHint(
          `${this.isNot ? ".not" : ""}.${fo.name}`,
          "element",
          ""
        ),
        `Expected element ${n} have accessible name`,
        r,
        "Received",
        t
      );
    }
  };
}
function hc(e, r, t) {
  return t === void 0 ? r : `${r}=${e(t)}`;
}
function Fb(e, r, t) {
  return t === void 0 ? `element.hasAttribute(${e(r)})` : `element.getAttribute(${e(r)}) === ${e(t)}`;
}
function Qc(e, r, t) {
  N(e, Qc, this);
  const i = t !== void 0, a = e.hasAttribute(r), n = e.getAttribute(r);
  return {
    pass: i ? a && this.equals(n, t) : a,
    message: () => {
      const o = this.isNot ? "not to" : "to", s = a ? hc(this.utils.stringify, r, n) : null, l = this.utils.matcherHint(
        `${this.isNot ? ".not" : ""}.toHaveAttribute`,
        "element",
        this.utils.printExpected(r),
        {
          secondArgument: i ? this.utils.printExpected(t) : void 0,
          comment: Fb(
            this.utils.stringify,
            r,
            t
          )
        }
      );
      return F(
        this,
        l,
        `Expected the element ${o} have attribute`,
        hc(this.utils.stringify, r, t),
        "Received",
        s
      );
    }
  };
}
function Bb(e) {
  const r = e.pop();
  let t, i;
  return typeof r == "object" && !(r instanceof RegExp) ? (t = e, i = r) : (t = e.concat(r), i = { exact: !1 }), { expectedClassNames: t, options: i };
}
function bc(e) {
  return e ? e.split(/\s+/).filter((r) => r.length > 0) : [];
}
function Rc(e, r) {
  return e.every(
    (t) => typeof t == "string" ? r.includes(t) : r.some((i) => t.test(i))
  );
}
function Zc(e, ...r) {
  N(e, Zc, this);
  const { expectedClassNames: t, options: i } = Bb(r), a = bc(e.getAttribute("class")), n = t.reduce(
    (s, l) => s.concat(
      typeof l == "string" || !l ? bc(l) : l
    ),
    []
  ), o = n.some((s) => s instanceof RegExp);
  if (i.exact && o)
    throw new Error("Exact option does not support RegExp expected class names");
  return i.exact ? {
    pass: Rc(n, a) && n.length === a.length,
    message: () => {
      const s = this.isNot ? "not to" : "to";
      return F(
        this,
        this.utils.matcherHint(
          `${this.isNot ? ".not" : ""}.toHaveClass`,
          "element",
          this.utils.printExpected(n.join(" "))
        ),
        `Expected the element ${s} have EXACTLY defined classes`,
        n.join(" "),
        "Received",
        a.join(" ")
      );
    }
  } : n.length > 0 ? {
    pass: Rc(n, a),
    message: () => {
      const s = this.isNot ? "not to" : "to";
      return F(
        this,
        this.utils.matcherHint(
          `${this.isNot ? ".not" : ""}.toHaveClass`,
          "element",
          this.utils.printExpected(n.join(" "))
        ),
        `Expected the element ${s} have class`,
        n.join(" "),
        "Received",
        a.join(" ")
      );
    }
  } : {
    pass: this.isNot ? a.length > 0 : !1,
    message: () => this.isNot ? F(
      this,
      this.utils.matcherHint(".not.toHaveClass", "element", ""),
      "Expected the element to have classes",
      "(none)",
      "Received",
      a.join(" ")
    ) : [
      this.utils.matcherHint(".toHaveClass", "element"),
      "At least one expected class must be provided."
    ].join(`
`)
  };
}
function Ub(e, r) {
  const t = {}, i = e.createElement("div");
  return Object.keys(r).forEach((a) => {
    i.style[a] = r[a], t[a] = i.style[a];
  }), t;
}
function Vb(e, r) {
  return !!Object.keys(e).length && Object.entries(e).every(([t, i]) => {
    const a = t.startsWith("--"), n = [t];
    return a || n.push(t.toLowerCase()), n.some(
      (o) => r[o] === i || r.getPropertyValue(o) === i
    );
  });
}
function gc(e) {
  return Object.keys(e).sort().map((r) => `${r}: ${e[r]};`).join(`
`);
}
function Gb(e, r, t) {
  const i = Array.from(t).filter((n) => r[n] !== void 0).reduce(
    (n, o) => Object.assign(n, { [o]: t.getPropertyValue(o) }),
    {}
  );
  return e(gc(r), gc(i)).replace(`${oh.red("+ Received")}
`, "");
}
function mo(e, r) {
  N(e, mo, this);
  const t = typeof r == "object" ? r : Eb(r, mo, this), { getComputedStyle: i } = e.ownerDocument.defaultView, a = Ub(e.ownerDocument, t), n = i(e);
  return {
    pass: Vb(a, n),
    message: () => {
      const o = `${this.isNot ? ".not" : ""}.toHaveStyle`;
      return [
        this.utils.matcherHint(o, "element", ""),
        Gb(this.utils.diff, a, n)
      ].join(`

`);
    }
  };
}
function ed(e) {
  return N(e, ed, this), {
    pass: e.ownerDocument.activeElement === e,
    message: () => [
      this.utils.matcherHint(
        `${this.isNot ? ".not" : ""}.toHaveFocus`,
        "element",
        ""
      ),
      "",
      ...this.isNot ? [
        "Received element is focused:",
        `  ${this.utils.printReceived(e)}`
      ] : [
        "Expected element with focus:",
        `  ${this.utils.printExpected(e)}`,
        "Received element with focus:",
        `  ${this.utils.printReceived(
          e.ownerDocument.activeElement
        )}`
      ]
    ].join(`
`)
  };
}
function zb(e) {
  const r = [...new Set(e.map((t) => t.type))];
  if (r.length !== 1)
    throw new Error(
      "Multiple form elements with the same name must be of the same type"
    );
  switch (r[0]) {
    case "radio": {
      const t = e.find((i) => i.checked);
      return t ? t.value : void 0;
    }
    case "checkbox":
      return e.filter((t) => t.checked).map((t) => t.value);
    default:
      return e.map((t) => t.value);
  }
}
function Kb(e, r) {
  const t = [...e.querySelectorAll(`[name="${Pb(r)}"]`)];
  if (t.length !== 0)
    switch (t.length) {
      case 1:
        return Gc(t[0]);
      default:
        return zb(t);
    }
}
function Wb(e) {
  return /\[\]$/.test(e) ? e.slice(0, -2) : e;
}
function Xb(e) {
  return Array.from(e.elements).map((t) => t.name).reduce(
    (t, i) => ({
      ...t,
      [Wb(i)]: Kb(e, i)
    }),
    {}
  );
}
function rd(e, r) {
  if (N(e, rd, this), !e.elements)
    throw new Error("toHaveFormValues must be called on a form or a fieldset");
  const t = Xb(e);
  return {
    pass: Object.entries(r).every(
      ([i, a]) => qo(t[i], a, Co)
    ),
    message: () => {
      const i = this.isNot ? "not to" : "to", a = `${this.isNot ? ".not" : ""}.toHaveFormValues`, n = Object.keys(t).filter((o) => r.hasOwnProperty(o)).reduce((o, s) => ({ ...o, [s]: t[s] }), {});
      return [
        this.utils.matcherHint(a, "element", ""),
        `Expected the element ${i} have form values`,
        this.utils.diff(r, n)
      ].join(`

`);
    }
  };
}
function Yb(e) {
  const { getComputedStyle: r } = e.ownerDocument.defaultView, { display: t, visibility: i, opacity: a } = r(e);
  return t !== "none" && i !== "hidden" && i !== "collapse" && a !== "0" && a !== 0;
}
function Jb(e, r) {
  let t;
  return r ? t = e.nodeName === "DETAILS" && r.nodeName !== "SUMMARY" ? e.hasAttribute("open") : !0 : t = e.nodeName === "DETAILS" ? e.hasAttribute("open") : !0, !e.hasAttribute("hidden") && t;
}
function td(e, r) {
  return Yb(e) && Jb(e, r) && (!e.parentElement || td(e.parentElement, e));
}
function ad(e) {
  N(e, ad, this);
  const r = e.ownerDocument === e.getRootNode({ composed: !0 }), t = r && td(e);
  return {
    pass: t,
    message: () => {
      const i = t ? "is" : "is not";
      return [
        this.utils.matcherHint(
          `${this.isNot ? ".not" : ""}.toBeVisible`,
          "element",
          ""
        ),
        "",
        `Received element ${i} visible${r ? "" : " (element is not in the document)"}:`,
        `  ${this.utils.printReceived(e.cloneNode(!1))}`
      ].join(`
`);
    }
  };
}
const Qb = [
  "fieldset",
  "input",
  "select",
  "optgroup",
  "option",
  "button",
  "textarea"
];
function Zb(e, r) {
  return Z(e) === "legend" && Z(r) === "fieldset" && e.isSameNode(
    Array.from(r.children).find((t) => Z(t) === "legend")
  );
}
function eR(e, r) {
  return od(r) && !Zb(e, r);
}
function rR(e) {
  return e.includes("-");
}
function nd(e) {
  const r = Z(e);
  return Qb.includes(r) || rR(r);
}
function od(e) {
  return nd(e) && e.hasAttribute("disabled");
}
function id(e) {
  const r = e.parentElement;
  return !!r && (eR(e, r) || id(r));
}
function sd(e) {
  return nd(e) && (od(e) || id(e));
}
function ld(e) {
  N(e, ld, this);
  const r = sd(e);
  return {
    pass: r,
    message: () => {
      const t = r ? "is" : "is not";
      return [
        this.utils.matcherHint(
          `${this.isNot ? ".not" : ""}.toBeDisabled`,
          "element",
          ""
        ),
        "",
        `Received element ${t} disabled:`,
        `  ${this.utils.printReceived(e.cloneNode(!1))}`
      ].join(`
`);
    }
  };
}
function ud(e) {
  N(e, ud, this);
  const r = !sd(e);
  return {
    pass: r,
    message: () => {
      const t = r ? "is" : "is not";
      return [
        this.utils.matcherHint(
          `${this.isNot ? ".not" : ""}.toBeEnabled`,
          "element",
          ""
        ),
        "",
        `Received element ${t} enabled:`,
        `  ${this.utils.printReceived(e.cloneNode(!1))}`
      ].join(`
`);
    }
  };
}
const tR = ["select", "textarea"], aR = ["input", "select", "textarea"], nR = [
  "color",
  "hidden",
  "range",
  "submit",
  "image",
  "reset"
], oR = [
  "checkbox",
  "combobox",
  "gridcell",
  "listbox",
  "radiogroup",
  "spinbutton",
  "textbox",
  "tree"
];
function iR(e) {
  return tR.includes(Z(e)) && e.hasAttribute("required");
}
function sR(e) {
  return Z(e) === "input" && e.hasAttribute("required") && (e.hasAttribute("type") && !nR.includes(e.getAttribute("type")) || !e.hasAttribute("type"));
}
function lR(e) {
  return e.hasAttribute("aria-required") && e.getAttribute("aria-required") === "true" && (aR.includes(Z(e)) || e.hasAttribute("role") && oR.includes(e.getAttribute("role")));
}
function cd(e) {
  N(e, cd, this);
  const r = iR(e) || sR(e) || lR(e);
  return {
    pass: r,
    message: () => {
      const t = r ? "is" : "is not";
      return [
        this.utils.matcherHint(
          `${this.isNot ? ".not" : ""}.toBeRequired`,
          "element",
          ""
        ),
        "",
        `Received element ${t} required:`,
        `  ${this.utils.printReceived(e.cloneNode(!1))}`
      ].join(`
`);
    }
  };
}
const uR = ["form", "input", "select", "textarea"];
function cR(e) {
  return e.hasAttribute("aria-invalid") && e.getAttribute("aria-invalid") !== "false";
}
function dR(e) {
  return uR.includes(Z(e));
}
function dd(e) {
  const r = cR(e);
  return dR(e) ? r || !e.checkValidity() : r;
}
function pd(e) {
  N(e, pd, this);
  const r = dd(e);
  return {
    pass: r,
    message: () => {
      const t = r ? "is" : "is not";
      return [
        this.utils.matcherHint(
          `${this.isNot ? ".not" : ""}.toBeInvalid`,
          "element",
          ""
        ),
        "",
        `Received element ${t} currently invalid:`,
        `  ${this.utils.printReceived(e.cloneNode(!1))}`
      ].join(`
`);
    }
  };
}
function fd(e) {
  N(e, fd, this);
  const r = !dd(e);
  return {
    pass: r,
    message: () => {
      const t = r ? "is" : "is not";
      return [
        this.utils.matcherHint(
          `${this.isNot ? ".not" : ""}.toBeValid`,
          "element",
          ""
        ),
        "",
        `Received element ${t} currently valid:`,
        `  ${this.utils.printReceived(e.cloneNode(!1))}`
      ].join(`
`);
    }
  };
}
function md(e, r) {
  if (N(e, md, this), e.tagName.toLowerCase() === "input" && ["checkbox", "radio"].includes(e.type))
    throw new Error(
      "input with type=checkbox or type=radio cannot be used with .toHaveValue(). Use .toBeChecked() for type=checkbox or .toHaveFormValues() instead"
    );
  const t = Gc(e), i = r !== void 0;
  let a = r, n = t;
  return r == t && r !== t && (a = `${r} (${typeof r})`, n = `${t} (${typeof t})`), {
    pass: i ? qo(t, r, Co) : !!t,
    message: () => {
      const o = this.isNot ? "not to" : "to", s = this.utils.matcherHint(
        `${this.isNot ? ".not" : ""}.toHaveValue`,
        "element",
        r
      );
      return F(
        this,
        s,
        `Expected the element ${o} have value`,
        i ? a : "(any)",
        "Received",
        n
      );
    }
  };
}
function vd(e, r) {
  N(e, vd, this);
  const t = e.tagName.toLowerCase();
  if (!["select", "input", "textarea"].includes(t))
    throw new Error(
      ".toHaveDisplayValue() currently supports only input, textarea or select elements, try with another matcher instead."
    );
  if (t === "input" && ["radio", "checkbox"].includes(e.type))
    throw new Error(
      `.toHaveDisplayValue() currently does not support input[type="${e.type}"], try with another matcher instead.`
    );
  const i = pR(t, e), a = fR(r), n = a.filter(
    (l) => i.some(
      (c) => l instanceof RegExp ? l.test(c) : this.equals(c, String(l))
    )
  ).length, o = n === i.length, s = n === a.length;
  return {
    pass: o && s,
    message: () => F(
      this,
      this.utils.matcherHint(
        `${this.isNot ? ".not" : ""}.toHaveDisplayValue`,
        "element",
        ""
      ),
      `Expected element ${this.isNot ? "not " : ""}to have display value`,
      r,
      "Received",
      i
    )
  };
}
function pR(e, r) {
  return e === "select" ? Array.from(r).filter((t) => t.selected).map((t) => t.textContent) : [r.value];
}
function fR(e) {
  return e instanceof Array ? e : [e];
}
function hd(e) {
  N(e, hd, this);
  const r = () => e.tagName.toLowerCase() === "input" && ["checkbox", "radio"].includes(e.type), t = () => bd(e.getAttribute("role")) && ["true", "false"].includes(e.getAttribute("aria-checked"));
  if (!r() && !t())
    return {
      pass: !1,
      message: () => `only inputs with type="checkbox" or type="radio" or elements with ${mR()} and a valid aria-checked attribute can be used with .toBeChecked(). Use .toHaveValue() instead`
    };
  const i = () => r() ? e.checked : e.getAttribute("aria-checked") === "true";
  return {
    pass: i(),
    message: () => {
      const a = i() ? "is" : "is not";
      return [
        this.utils.matcherHint(
          `${this.isNot ? ".not" : ""}.toBeChecked`,
          "element",
          ""
        ),
        "",
        `Received element ${a} checked:`,
        `  ${this.utils.printReceived(e.cloneNode(!1))}`
      ].join(`
`);
    }
  };
}
function mR() {
  return jb(
    vR().map((e) => `role="${e}"`),
    { lastWordConnector: " or " }
  );
}
function vR() {
  return bo.roles.keys().filter(bd);
}
function bd(e) {
  var r;
  return ((r = bo.roles.get(e)) == null ? void 0 : r.props["aria-checked"]) !== void 0;
}
function Rd(e) {
  N(e, Rd, this);
  const r = () => e.tagName.toLowerCase() === "input" && e.type === "checkbox", t = () => e.getAttribute("role") === "checkbox";
  if (!r() && !t())
    return {
      pass: !1,
      message: () => 'only inputs with type="checkbox" or elements with role="checkbox" and a valid aria-checked attribute can be used with .toBePartiallyChecked(). Use .toHaveValue() instead'
    };
  const i = () => {
    const a = e.getAttribute("aria-checked") === "mixed";
    return r() && e.indeterminate || a;
  };
  return {
    pass: i(),
    message: () => {
      const a = i() ? "is" : "is not";
      return [
        this.utils.matcherHint(
          `${this.isNot ? ".not" : ""}.toBePartiallyChecked`,
          "element",
          ""
        ),
        "",
        `Received element ${a} partially checked:`,
        `  ${this.utils.printReceived(e.cloneNode(!1))}`
      ].join(`
`);
    }
  };
}
function gd(e, r) {
  da(
    "toHaveDescription",
    "Please use toHaveAccessibleDescription."
  ), N(e, gd, this);
  const t = r !== void 0, a = (e.getAttribute("aria-describedby") || "").split(/\s+/).filter(Boolean);
  let n = "";
  if (a.length > 0) {
    const o = e.ownerDocument, s = a.map((l) => o.getElementById(l)).filter(Boolean);
    n = pa(s.map((l) => l.textContent).join(" "));
  }
  return {
    pass: t ? r instanceof RegExp ? r.test(n) : this.equals(n, r) : !!n,
    message: () => {
      const o = this.isNot ? "not to" : "to";
      return F(
        this,
        this.utils.matcherHint(
          `${this.isNot ? ".not" : ""}.toHaveDescription`,
          "element",
          ""
        ),
        `Expected the element ${o} have description`,
        this.utils.printExpected(r),
        "Received",
        this.utils.printReceived(n)
      );
    }
  };
}
function yd(e, r) {
  if (da("toHaveErrorMessage", "Please use toHaveAccessibleErrorMessage."), N(e, yd, this), !e.hasAttribute("aria-invalid") || e.getAttribute("aria-invalid") === "false") {
    const o = this.isNot ? ".not" : "";
    return {
      pass: !1,
      message: () => F(
        this,
        this.utils.matcherHint(`${o}.toHaveErrorMessage`, "element", ""),
        "Expected the element to have invalid state indicated by",
        'aria-invalid="true"',
        "Received",
        e.hasAttribute("aria-invalid") ? `aria-invalid="${e.getAttribute("aria-invalid")}"` : this.utils.printReceived("")
      )
    };
  }
  const t = r !== void 0, a = (e.getAttribute("aria-errormessage") || "").split(/\s+/).filter(Boolean);
  let n = "";
  if (a.length > 0) {
    const o = e.ownerDocument, s = a.map((l) => o.getElementById(l)).filter(Boolean);
    n = pa(
      s.map((l) => l.textContent).join(" ")
    );
  }
  return {
    pass: t ? r instanceof RegExp ? r.test(n) : this.equals(n, r) : !!n,
    message: () => {
      const o = this.isNot ? "not to" : "to";
      return F(
        this,
        this.utils.matcherHint(
          `${this.isNot ? ".not" : ""}.toHaveErrorMessage`,
          "element",
          ""
        ),
        `Expected the element ${o} have error message`,
        this.utils.printExpected(r),
        "Received",
        this.utils.printReceived(n)
      );
    }
  };
}
function hR(e) {
  const r = e.ownerDocument.getSelection();
  if (["input", "textarea"].includes(e.tagName.toLowerCase()))
    return ["radio", "checkbox"].includes(e.type) ? "" : e.value.toString().substring(e.selectionStart, e.selectionEnd);
  if (r.anchorNode === null || r.focusNode === null)
    return "";
  const t = r.getRangeAt(0), i = e.ownerDocument.createRange();
  if (r.containsNode(e, !1))
    i.selectNodeContents(e), r.removeAllRanges(), r.addRange(i);
  else if (!(e.contains(r.anchorNode) && e.contains(r.focusNode))) {
    const n = e === t.startContainer || e.contains(t.startContainer), o = e === t.endContainer || e.contains(t.endContainer);
    r.removeAllRanges(), (n || o) && (i.selectNodeContents(e), n && i.setStart(
      t.startContainer,
      t.startOffset
    ), o && i.setEnd(
      t.endContainer,
      t.endOffset
    ), r.addRange(i));
  }
  const a = r.toString();
  return r.removeAllRanges(), r.addRange(t), a;
}
function qd(e, r) {
  N(e, qd, this);
  const t = r !== void 0;
  if (t && typeof r != "string")
    throw new Error("expected selection must be a string or undefined");
  const i = hR(e);
  return {
    pass: t ? qo(i, r, Co) : !!i,
    message: () => {
      const a = this.isNot ? "not to" : "to", n = this.utils.matcherHint(
        `${this.isNot ? ".not" : ""}.toHaveSelection`,
        "element",
        r
      );
      return F(
        this,
        n,
        `Expected the element ${a} have selection`,
        t ? r : "(any)",
        "Received",
        i
      );
    }
  };
}
var bR = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  toBeChecked: hd,
  toBeDisabled: ld,
  toBeEmpty: Kc,
  toBeEmptyDOMElement: Wc,
  toBeEnabled: ud,
  toBeInTheDOM: lo,
  toBeInTheDocument: zc,
  toBeInvalid: pd,
  toBePartiallyChecked: Rd,
  toBeRequired: cd,
  toBeValid: fd,
  toBeVisible: ad,
  toContainElement: uo,
  toContainHTML: Xc,
  toHaveAccessibleDescription: co,
  toHaveAccessibleErrorMessage: Jc,
  toHaveAccessibleName: fo,
  toHaveAttribute: Qc,
  toHaveClass: Zc,
  toHaveDescription: gd,
  toHaveDisplayValue: vd,
  toHaveErrorMessage: yd,
  toHaveFocus: ed,
  toHaveFormValues: rd,
  toHaveRole: po,
  toHaveSelection: qd,
  toHaveStyle: mo,
  toHaveTextContent: Yc,
  toHaveValue: md
});
expect.extend(bR);
//# sourceMappingURL=setupTests.js.map
