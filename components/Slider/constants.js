import { jsx as We } from "react/jsx-runtime";
import A, { forwardRef as ye, useState as q, useRef as R, useEffect as ae, createContext as Pe, useLayoutEffect as je } from "react";
import { cn as Ye } from "../../services/helpers.js";
function he(t) {
  return t !== null && typeof t == "object" && "constructor" in t && t.constructor === Object;
}
function pe(t, e) {
  t === void 0 && (t = {}), e === void 0 && (e = {});
  const i = ["__proto__", "constructor", "prototype"];
  Object.keys(e).filter((s) => i.indexOf(s) < 0).forEach((s) => {
    typeof t[s] > "u" ? t[s] = e[s] : he(e[s]) && he(t[s]) && Object.keys(e[s]).length > 0 && pe(t[s], e[s]);
  });
}
const Me = {
  body: {},
  addEventListener() {
  },
  removeEventListener() {
  },
  activeElement: {
    blur() {
    },
    nodeName: ""
  },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return {
      initEvent() {
      }
    };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {
      },
      getElementsByTagName() {
        return [];
      }
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: ""
  }
};
function j() {
  const t = typeof document < "u" ? document : {};
  return pe(t, Me), t;
}
const qe = {
  document: Me,
  navigator: {
    userAgent: ""
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: ""
  },
  history: {
    replaceState() {
    },
    pushState() {
    },
    go() {
    },
    back() {
    }
  },
  CustomEvent: function() {
    return this;
  },
  addEventListener() {
  },
  removeEventListener() {
  },
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      }
    };
  },
  Image() {
  },
  Date() {
  },
  screen: {},
  setTimeout() {
  },
  clearTimeout() {
  },
  matchMedia() {
    return {};
  },
  requestAnimationFrame(t) {
    return typeof setTimeout > "u" ? (t(), null) : setTimeout(t, 0);
  },
  cancelAnimationFrame(t) {
    typeof setTimeout > "u" || clearTimeout(t);
  }
};
function V() {
  const t = typeof window < "u" ? window : {};
  return pe(t, qe), t;
}
function Xe(t) {
  return t === void 0 && (t = ""), t.trim().split(" ").filter((e) => !!e.trim());
}
function Ue(t) {
  const e = t;
  Object.keys(e).forEach((i) => {
    try {
      e[i] = null;
    } catch {
    }
    try {
      delete e[i];
    } catch {
    }
  });
}
function de(t, e) {
  return e === void 0 && (e = 0), setTimeout(t, e);
}
function Z() {
  return Date.now();
}
function Ke(t) {
  const e = V();
  let i;
  return e.getComputedStyle && (i = e.getComputedStyle(t, null)), !i && t.currentStyle && (i = t.currentStyle), i || (i = t.style), i;
}
function Qe(t, e) {
  e === void 0 && (e = "x");
  const i = V();
  let s, n, r;
  const o = Ke(t);
  return i.WebKitCSSMatrix ? (n = o.transform || o.webkitTransform, n.split(",").length > 6 && (n = n.split(", ").map((l) => l.replace(",", ".")).join(", ")), r = new i.WebKitCSSMatrix(n === "none" ? "" : n)) : (r = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), s = r.toString().split(",")), e === "x" && (i.WebKitCSSMatrix ? n = r.m41 : s.length === 16 ? n = parseFloat(s[12]) : n = parseFloat(s[4])), e === "y" && (i.WebKitCSSMatrix ? n = r.m42 : s.length === 16 ? n = parseFloat(s[13]) : n = parseFloat(s[5])), n || 0;
}
function U(t) {
  return typeof t == "object" && t !== null && t.constructor && Object.prototype.toString.call(t).slice(8, -1) === "Object";
}
function Ze(t) {
  return typeof window < "u" && typeof window.HTMLElement < "u" ? t instanceof HTMLElement : t && (t.nodeType === 1 || t.nodeType === 11);
}
function D() {
  const t = Object(arguments.length <= 0 ? void 0 : arguments[0]), e = ["__proto__", "constructor", "prototype"];
  for (let i = 1; i < arguments.length; i += 1) {
    const s = i < 0 || arguments.length <= i ? void 0 : arguments[i];
    if (s != null && !Ze(s)) {
      const n = Object.keys(Object(s)).filter((r) => e.indexOf(r) < 0);
      for (let r = 0, o = n.length; r < o; r += 1) {
        const l = n[r], a = Object.getOwnPropertyDescriptor(s, l);
        a !== void 0 && a.enumerable && (U(t[l]) && U(s[l]) ? s[l].__swiper__ ? t[l] = s[l] : D(t[l], s[l]) : !U(t[l]) && U(s[l]) ? (t[l] = {}, s[l].__swiper__ ? t[l] = s[l] : D(t[l], s[l])) : t[l] = s[l]);
      }
    }
  }
  return t;
}
function K(t, e, i) {
  t.style.setProperty(e, i);
}
function Ce(t) {
  let {
    swiper: e,
    targetPosition: i,
    side: s
  } = t;
  const n = V(), r = -e.translate;
  let o = null, l;
  const a = e.params.speed;
  e.wrapperEl.style.scrollSnapType = "none", n.cancelAnimationFrame(e.cssModeFrameID);
  const d = i > r ? "next" : "prev", c = (u, p) => d === "next" && u >= p || d === "prev" && u <= p, f = () => {
    l = (/* @__PURE__ */ new Date()).getTime(), o === null && (o = l);
    const u = Math.max(Math.min((l - o) / a, 1), 0), p = 0.5 - Math.cos(u * Math.PI) / 2;
    let m = r + p * (i - r);
    if (c(m, i) && (m = i), e.wrapperEl.scrollTo({
      [s]: m
    }), c(m, i)) {
      e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
        e.wrapperEl.style.overflow = "", e.wrapperEl.scrollTo({
          [s]: m
        });
      }), n.cancelAnimationFrame(e.cssModeFrameID);
      return;
    }
    e.cssModeFrameID = n.requestAnimationFrame(f);
  };
  f();
}
function H(t, e) {
  e === void 0 && (e = "");
  const i = V(), s = [...t.children];
  return i.HTMLSlotElement && t instanceof HTMLSlotElement && s.push(...t.assignedElements()), e ? s.filter((n) => n.matches(e)) : s;
}
function Je(t, e) {
  const i = [e];
  for (; i.length > 0; ) {
    const s = i.shift();
    if (t === s)
      return !0;
    i.push(...s.children, ...s.shadowRoot ? s.shadowRoot.children : [], ...s.assignedElements ? s.assignedElements() : []);
  }
}
function et(t, e) {
  const i = V();
  let s = e.contains(t);
  return !s && i.HTMLSlotElement && e instanceof HTMLSlotElement && (s = [...e.assignedElements()].includes(t), s || (s = Je(t, e))), s;
}
function J(t) {
  try {
    console.warn(t);
    return;
  } catch {
  }
}
function ce(t, e) {
  e === void 0 && (e = []);
  const i = document.createElement(t);
  return i.classList.add(...Array.isArray(e) ? e : Xe(e)), i;
}
function tt(t, e) {
  const i = [];
  for (; t.previousElementSibling; ) {
    const s = t.previousElementSibling;
    e ? s.matches(e) && i.push(s) : i.push(s), t = s;
  }
  return i;
}
function it(t, e) {
  const i = [];
  for (; t.nextElementSibling; ) {
    const s = t.nextElementSibling;
    e ? s.matches(e) && i.push(s) : i.push(s), t = s;
  }
  return i;
}
function k(t, e) {
  return V().getComputedStyle(t, null).getPropertyValue(e);
}
function ge(t) {
  let e = t, i;
  if (e) {
    for (i = 0; (e = e.previousSibling) !== null; )
      e.nodeType === 1 && (i += 1);
    return i;
  }
}
function st(t, e) {
  const i = [];
  let s = t.parentElement;
  for (; s; )
    i.push(s), s = s.parentElement;
  return i;
}
function ve(t, e, i) {
  const s = V();
  return t[e === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(s.getComputedStyle(t, null).getPropertyValue(e === "width" ? "margin-right" : "margin-top")) + parseFloat(s.getComputedStyle(t, null).getPropertyValue(e === "width" ? "margin-left" : "margin-bottom"));
}
function we(t, e) {
  e === void 0 && (e = ""), typeof trustedTypes < "u" ? t.innerHTML = trustedTypes.createPolicy("html", {
    createHTML: (i) => i
  }).createHTML(e) : t.innerHTML = e;
}
let te;
function rt() {
  const t = V(), e = j();
  return {
    smoothScroll: e.documentElement && e.documentElement.style && "scrollBehavior" in e.documentElement.style,
    touch: !!("ontouchstart" in t || t.DocumentTouch && e instanceof t.DocumentTouch)
  };
}
function Ie() {
  return te || (te = rt()), te;
}
let ie;
function nt(t) {
  let {
    userAgent: e
  } = t === void 0 ? {} : t;
  const i = Ie(), s = V(), n = s.navigator.platform, r = e || s.navigator.userAgent, o = {
    ios: !1,
    android: !1
  }, l = s.screen.width, a = s.screen.height, d = r.match(/(Android);?[\s\/]+([\d.]+)?/);
  let c = r.match(/(iPad).*OS\s([\d_]+)/);
  const f = r.match(/(iPod)(.*OS\s([\d_]+))?/), u = !c && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/), p = n === "Win32";
  let m = n === "MacIntel";
  const v = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
  return !c && m && i.touch && v.indexOf(`${l}x${a}`) >= 0 && (c = r.match(/(Version)\/([\d.]+)/), c || (c = [0, 1, "13_0_0"]), m = !1), d && !p && (o.os = "android", o.android = !0), (c || u || f) && (o.os = "ios", o.ios = !0), o;
}
function Oe(t) {
  return t === void 0 && (t = {}), ie || (ie = nt(t)), ie;
}
let se;
function lt() {
  const t = V(), e = Oe();
  let i = !1;
  function s() {
    const l = t.navigator.userAgent.toLowerCase();
    return l.indexOf("safari") >= 0 && l.indexOf("chrome") < 0 && l.indexOf("android") < 0;
  }
  if (s()) {
    const l = String(t.navigator.userAgent);
    if (l.includes("Version/")) {
      const [a, d] = l.split("Version/")[1].split(" ")[0].split(".").map((c) => Number(c));
      i = a < 16 || a === 16 && d < 2;
    }
  }
  const n = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent), r = s(), o = r || n && e.ios;
  return {
    isSafari: i || r,
    needPerspectiveFix: i,
    need3dFix: o,
    isWebView: n
  };
}
function Le() {
  return se || (se = lt()), se;
}
function ot(t) {
  let {
    swiper: e,
    on: i,
    emit: s
  } = t;
  const n = V();
  let r = null, o = null;
  const l = () => {
    !e || e.destroyed || !e.initialized || (s("beforeResize"), s("resize"));
  }, a = () => {
    !e || e.destroyed || !e.initialized || (r = new ResizeObserver((f) => {
      o = n.requestAnimationFrame(() => {
        const {
          width: u,
          height: p
        } = e;
        let m = u, v = p;
        f.forEach((P) => {
          let {
            contentBoxSize: h,
            contentRect: S,
            target: g
          } = P;
          g && g !== e.el || (m = S ? S.width : (h[0] || h).inlineSize, v = S ? S.height : (h[0] || h).blockSize);
        }), (m !== u || v !== p) && l();
      });
    }), r.observe(e.el));
  }, d = () => {
    o && n.cancelAnimationFrame(o), r && r.unobserve && e.el && (r.unobserve(e.el), r = null);
  }, c = () => {
    !e || e.destroyed || !e.initialized || s("orientationchange");
  };
  i("init", () => {
    if (e.params.resizeObserver && typeof n.ResizeObserver < "u") {
      a();
      return;
    }
    n.addEventListener("resize", l), n.addEventListener("orientationchange", c);
  }), i("destroy", () => {
    d(), n.removeEventListener("resize", l), n.removeEventListener("orientationchange", c);
  });
}
function at(t) {
  let {
    swiper: e,
    extendParams: i,
    on: s,
    emit: n
  } = t;
  const r = [], o = V(), l = function(c, f) {
    f === void 0 && (f = {});
    const u = o.MutationObserver || o.WebkitMutationObserver, p = new u((m) => {
      if (e.__preventObserver__) return;
      if (m.length === 1) {
        n("observerUpdate", m[0]);
        return;
      }
      const v = function() {
        n("observerUpdate", m[0]);
      };
      o.requestAnimationFrame ? o.requestAnimationFrame(v) : o.setTimeout(v, 0);
    });
    p.observe(c, {
      attributes: typeof f.attributes > "u" ? !0 : f.attributes,
      childList: e.isElement || (typeof f.childList > "u" ? !0 : f).childList,
      characterData: typeof f.characterData > "u" ? !0 : f.characterData
    }), r.push(p);
  }, a = () => {
    if (e.params.observer) {
      if (e.params.observeParents) {
        const c = st(e.hostEl);
        for (let f = 0; f < c.length; f += 1)
          l(c[f]);
      }
      l(e.hostEl, {
        childList: e.params.observeSlideChildren
      }), l(e.wrapperEl, {
        attributes: !1
      });
    }
  }, d = () => {
    r.forEach((c) => {
      c.disconnect();
    }), r.splice(0, r.length);
  };
  i({
    observer: !1,
    observeParents: !1,
    observeSlideChildren: !1
  }), s("init", a), s("destroy", d);
}
var dt = {
  on(t, e, i) {
    const s = this;
    if (!s.eventsListeners || s.destroyed || typeof e != "function") return s;
    const n = i ? "unshift" : "push";
    return t.split(" ").forEach((r) => {
      s.eventsListeners[r] || (s.eventsListeners[r] = []), s.eventsListeners[r][n](e);
    }), s;
  },
  once(t, e, i) {
    const s = this;
    if (!s.eventsListeners || s.destroyed || typeof e != "function") return s;
    function n() {
      s.off(t, n), n.__emitterProxy && delete n.__emitterProxy;
      for (var r = arguments.length, o = new Array(r), l = 0; l < r; l++)
        o[l] = arguments[l];
      e.apply(s, o);
    }
    return n.__emitterProxy = e, s.on(t, n, i);
  },
  onAny(t, e) {
    const i = this;
    if (!i.eventsListeners || i.destroyed || typeof t != "function") return i;
    const s = e ? "unshift" : "push";
    return i.eventsAnyListeners.indexOf(t) < 0 && i.eventsAnyListeners[s](t), i;
  },
  offAny(t) {
    const e = this;
    if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners) return e;
    const i = e.eventsAnyListeners.indexOf(t);
    return i >= 0 && e.eventsAnyListeners.splice(i, 1), e;
  },
  off(t, e) {
    const i = this;
    return !i.eventsListeners || i.destroyed || !i.eventsListeners || t.split(" ").forEach((s) => {
      typeof e > "u" ? i.eventsListeners[s] = [] : i.eventsListeners[s] && i.eventsListeners[s].forEach((n, r) => {
        (n === e || n.__emitterProxy && n.__emitterProxy === e) && i.eventsListeners[s].splice(r, 1);
      });
    }), i;
  },
  emit() {
    const t = this;
    if (!t.eventsListeners || t.destroyed || !t.eventsListeners) return t;
    let e, i, s;
    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
      r[o] = arguments[o];
    return typeof r[0] == "string" || Array.isArray(r[0]) ? (e = r[0], i = r.slice(1, r.length), s = t) : (e = r[0].events, i = r[0].data, s = r[0].context || t), i.unshift(s), (Array.isArray(e) ? e : e.split(" ")).forEach((a) => {
      t.eventsAnyListeners && t.eventsAnyListeners.length && t.eventsAnyListeners.forEach((d) => {
        d.apply(s, [a, ...i]);
      }), t.eventsListeners && t.eventsListeners[a] && t.eventsListeners[a].forEach((d) => {
        d.apply(s, i);
      });
    }), t;
  }
};
function ct() {
  const t = this;
  let e, i;
  const s = t.el;
  typeof t.params.width < "u" && t.params.width !== null ? e = t.params.width : e = s.clientWidth, typeof t.params.height < "u" && t.params.height !== null ? i = t.params.height : i = s.clientHeight, !(e === 0 && t.isHorizontal() || i === 0 && t.isVertical()) && (e = e - parseInt(k(s, "padding-left") || 0, 10) - parseInt(k(s, "padding-right") || 0, 10), i = i - parseInt(k(s, "padding-top") || 0, 10) - parseInt(k(s, "padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(i) && (i = 0), Object.assign(t, {
    width: e,
    height: i,
    size: t.isHorizontal() ? e : i
  }));
}
function ft() {
  const t = this;
  function e(w, x) {
    return parseFloat(w.getPropertyValue(t.getDirectionLabel(x)) || 0);
  }
  const i = t.params, {
    wrapperEl: s,
    slidesEl: n,
    size: r,
    rtlTranslate: o,
    wrongRTL: l
  } = t, a = t.virtual && i.virtual.enabled, d = a ? t.virtual.slides.length : t.slides.length, c = H(n, `.${t.params.slideClass}, swiper-slide`), f = a ? t.virtual.slides.length : c.length;
  let u = [];
  const p = [], m = [];
  let v = i.slidesOffsetBefore;
  typeof v == "function" && (v = i.slidesOffsetBefore.call(t));
  let P = i.slidesOffsetAfter;
  typeof P == "function" && (P = i.slidesOffsetAfter.call(t));
  const h = t.snapGrid.length, S = t.slidesGrid.length;
  let g = i.spaceBetween, E = -v, T = 0, I = 0;
  if (typeof r > "u")
    return;
  typeof g == "string" && g.indexOf("%") >= 0 ? g = parseFloat(g.replace("%", "")) / 100 * r : typeof g == "string" && (g = parseFloat(g)), t.virtualSize = -g, c.forEach((w) => {
    o ? w.style.marginLeft = "" : w.style.marginRight = "", w.style.marginBottom = "", w.style.marginTop = "";
  }), i.centeredSlides && i.cssMode && (K(s, "--swiper-centered-offset-before", ""), K(s, "--swiper-centered-offset-after", ""));
  const M = i.grid && i.grid.rows > 1 && t.grid;
  M ? t.grid.initSlides(c) : t.grid && t.grid.unsetSlides();
  let y;
  const b = i.slidesPerView === "auto" && i.breakpoints && Object.keys(i.breakpoints).filter((w) => typeof i.breakpoints[w].slidesPerView < "u").length > 0;
  for (let w = 0; w < f; w += 1) {
    y = 0;
    let x;
    if (c[w] && (x = c[w]), M && t.grid.updateSlide(w, x, c), !(c[w] && k(x, "display") === "none")) {
      if (i.slidesPerView === "auto") {
        b && (c[w].style[t.getDirectionLabel("width")] = "");
        const C = getComputedStyle(x), z = x.style.transform, B = x.style.webkitTransform;
        if (z && (x.style.transform = "none"), B && (x.style.webkitTransform = "none"), i.roundLengths)
          y = t.isHorizontal() ? ve(x, "width") : ve(x, "height");
        else {
          const N = e(C, "width"), O = e(C, "padding-left"), _ = e(C, "padding-right"), G = e(C, "margin-left"), L = e(C, "margin-right"), F = C.getPropertyValue("box-sizing");
          if (F && F === "border-box")
            y = N + G + L;
          else {
            const {
              clientWidth: He,
              offsetWidth: ke
            } = x;
            y = N + O + _ + G + L + (ke - He);
          }
        }
        z && (x.style.transform = z), B && (x.style.webkitTransform = B), i.roundLengths && (y = Math.floor(y));
      } else
        y = (r - (i.slidesPerView - 1) * g) / i.slidesPerView, i.roundLengths && (y = Math.floor(y)), c[w] && (c[w].style[t.getDirectionLabel("width")] = `${y}px`);
      c[w] && (c[w].swiperSlideSize = y), m.push(y), i.centeredSlides ? (E = E + y / 2 + T / 2 + g, T === 0 && w !== 0 && (E = E - r / 2 - g), w === 0 && (E = E - r / 2 - g), Math.abs(E) < 1 / 1e3 && (E = 0), i.roundLengths && (E = Math.floor(E)), I % i.slidesPerGroup === 0 && u.push(E), p.push(E)) : (i.roundLengths && (E = Math.floor(E)), (I - Math.min(t.params.slidesPerGroupSkip, I)) % t.params.slidesPerGroup === 0 && u.push(E), p.push(E), E = E + y + g), t.virtualSize += y + g, T = y, I += 1;
    }
  }
  if (t.virtualSize = Math.max(t.virtualSize, r) + P, o && l && (i.effect === "slide" || i.effect === "coverflow") && (s.style.width = `${t.virtualSize + g}px`), i.setWrapperSize && (s.style[t.getDirectionLabel("width")] = `${t.virtualSize + g}px`), M && t.grid.updateWrapperSize(y, u), !i.centeredSlides) {
    const w = [];
    for (let x = 0; x < u.length; x += 1) {
      let C = u[x];
      i.roundLengths && (C = Math.floor(C)), u[x] <= t.virtualSize - r && w.push(C);
    }
    u = w, Math.floor(t.virtualSize - r) - Math.floor(u[u.length - 1]) > 1 && u.push(t.virtualSize - r);
  }
  if (a && i.loop) {
    const w = m[0] + g;
    if (i.slidesPerGroup > 1) {
      const x = Math.ceil((t.virtual.slidesBefore + t.virtual.slidesAfter) / i.slidesPerGroup), C = w * i.slidesPerGroup;
      for (let z = 0; z < x; z += 1)
        u.push(u[u.length - 1] + C);
    }
    for (let x = 0; x < t.virtual.slidesBefore + t.virtual.slidesAfter; x += 1)
      i.slidesPerGroup === 1 && u.push(u[u.length - 1] + w), p.push(p[p.length - 1] + w), t.virtualSize += w;
  }
  if (u.length === 0 && (u = [0]), g !== 0) {
    const w = t.isHorizontal() && o ? "marginLeft" : t.getDirectionLabel("marginRight");
    c.filter((x, C) => !i.cssMode || i.loop ? !0 : C !== c.length - 1).forEach((x) => {
      x.style[w] = `${g}px`;
    });
  }
  if (i.centeredSlides && i.centeredSlidesBounds) {
    let w = 0;
    m.forEach((C) => {
      w += C + (g || 0);
    }), w -= g;
    const x = w > r ? w - r : 0;
    u = u.map((C) => C <= 0 ? -v : C > x ? x + P : C);
  }
  if (i.centerInsufficientSlides) {
    let w = 0;
    m.forEach((C) => {
      w += C + (g || 0);
    }), w -= g;
    const x = (i.slidesOffsetBefore || 0) + (i.slidesOffsetAfter || 0);
    if (w + x < r) {
      const C = (r - w - x) / 2;
      u.forEach((z, B) => {
        u[B] = z - C;
      }), p.forEach((z, B) => {
        p[B] = z + C;
      });
    }
  }
  if (Object.assign(t, {
    slides: c,
    snapGrid: u,
    slidesGrid: p,
    slidesSizesGrid: m
  }), i.centeredSlides && i.cssMode && !i.centeredSlidesBounds) {
    K(s, "--swiper-centered-offset-before", `${-u[0]}px`), K(s, "--swiper-centered-offset-after", `${t.size / 2 - m[m.length - 1] / 2}px`);
    const w = -t.snapGrid[0], x = -t.slidesGrid[0];
    t.snapGrid = t.snapGrid.map((C) => C + w), t.slidesGrid = t.slidesGrid.map((C) => C + x);
  }
  if (f !== d && t.emit("slidesLengthChange"), u.length !== h && (t.params.watchOverflow && t.checkOverflow(), t.emit("snapGridLengthChange")), p.length !== S && t.emit("slidesGridLengthChange"), i.watchSlidesProgress && t.updateSlidesOffset(), t.emit("slidesUpdated"), !a && !i.cssMode && (i.effect === "slide" || i.effect === "fade")) {
    const w = `${i.containerModifierClass}backface-hidden`, x = t.el.classList.contains(w);
    f <= i.maxBackfaceHiddenSlides ? x || t.el.classList.add(w) : x && t.el.classList.remove(w);
  }
}
function ut(t) {
  const e = this, i = [], s = e.virtual && e.params.virtual.enabled;
  let n = 0, r;
  typeof t == "number" ? e.setTransition(t) : t === !0 && e.setTransition(e.params.speed);
  const o = (l) => s ? e.slides[e.getSlideIndexByData(l)] : e.slides[l];
  if (e.params.slidesPerView !== "auto" && e.params.slidesPerView > 1)
    if (e.params.centeredSlides)
      (e.visibleSlides || []).forEach((l) => {
        i.push(l);
      });
    else
      for (r = 0; r < Math.ceil(e.params.slidesPerView); r += 1) {
        const l = e.activeIndex + r;
        if (l > e.slides.length && !s) break;
        i.push(o(l));
      }
  else
    i.push(o(e.activeIndex));
  for (r = 0; r < i.length; r += 1)
    if (typeof i[r] < "u") {
      const l = i[r].offsetHeight;
      n = l > n ? l : n;
    }
  (n || n === 0) && (e.wrapperEl.style.height = `${n}px`);
}
function pt() {
  const t = this, e = t.slides, i = t.isElement ? t.isHorizontal() ? t.wrapperEl.offsetLeft : t.wrapperEl.offsetTop : 0;
  for (let s = 0; s < e.length; s += 1)
    e[s].swiperSlideOffset = (t.isHorizontal() ? e[s].offsetLeft : e[s].offsetTop) - i - t.cssOverflowAdjustment();
}
const Se = (t, e, i) => {
  e && !t.classList.contains(i) ? t.classList.add(i) : !e && t.classList.contains(i) && t.classList.remove(i);
};
function mt(t) {
  t === void 0 && (t = this && this.translate || 0);
  const e = this, i = e.params, {
    slides: s,
    rtlTranslate: n,
    snapGrid: r
  } = e;
  if (s.length === 0) return;
  typeof s[0].swiperSlideOffset > "u" && e.updateSlidesOffset();
  let o = -t;
  n && (o = t), e.visibleSlidesIndexes = [], e.visibleSlides = [];
  let l = i.spaceBetween;
  typeof l == "string" && l.indexOf("%") >= 0 ? l = parseFloat(l.replace("%", "")) / 100 * e.size : typeof l == "string" && (l = parseFloat(l));
  for (let a = 0; a < s.length; a += 1) {
    const d = s[a];
    let c = d.swiperSlideOffset;
    i.cssMode && i.centeredSlides && (c -= s[0].swiperSlideOffset);
    const f = (o + (i.centeredSlides ? e.minTranslate() : 0) - c) / (d.swiperSlideSize + l), u = (o - r[0] + (i.centeredSlides ? e.minTranslate() : 0) - c) / (d.swiperSlideSize + l), p = -(o - c), m = p + e.slidesSizesGrid[a], v = p >= 0 && p <= e.size - e.slidesSizesGrid[a], P = p >= 0 && p < e.size - 1 || m > 1 && m <= e.size || p <= 0 && m >= e.size;
    P && (e.visibleSlides.push(d), e.visibleSlidesIndexes.push(a)), Se(d, P, i.slideVisibleClass), Se(d, v, i.slideFullyVisibleClass), d.progress = n ? -f : f, d.originalProgress = n ? -u : u;
  }
}
function ht(t) {
  const e = this;
  if (typeof t > "u") {
    const c = e.rtlTranslate ? -1 : 1;
    t = e && e.translate && e.translate * c || 0;
  }
  const i = e.params, s = e.maxTranslate() - e.minTranslate();
  let {
    progress: n,
    isBeginning: r,
    isEnd: o,
    progressLoop: l
  } = e;
  const a = r, d = o;
  if (s === 0)
    n = 0, r = !0, o = !0;
  else {
    n = (t - e.minTranslate()) / s;
    const c = Math.abs(t - e.minTranslate()) < 1, f = Math.abs(t - e.maxTranslate()) < 1;
    r = c || n <= 0, o = f || n >= 1, c && (n = 0), f && (n = 1);
  }
  if (i.loop) {
    const c = e.getSlideIndexByData(0), f = e.getSlideIndexByData(e.slides.length - 1), u = e.slidesGrid[c], p = e.slidesGrid[f], m = e.slidesGrid[e.slidesGrid.length - 1], v = Math.abs(t);
    v >= u ? l = (v - u) / m : l = (v + m - p) / m, l > 1 && (l -= 1);
  }
  Object.assign(e, {
    progress: n,
    progressLoop: l,
    isBeginning: r,
    isEnd: o
  }), (i.watchSlidesProgress || i.centeredSlides && i.autoHeight) && e.updateSlidesProgress(t), r && !a && e.emit("reachBeginning toEdge"), o && !d && e.emit("reachEnd toEdge"), (a && !r || d && !o) && e.emit("fromEdge"), e.emit("progress", n);
}
const re = (t, e, i) => {
  e && !t.classList.contains(i) ? t.classList.add(i) : !e && t.classList.contains(i) && t.classList.remove(i);
};
function gt() {
  const t = this, {
    slides: e,
    params: i,
    slidesEl: s,
    activeIndex: n
  } = t, r = t.virtual && i.virtual.enabled, o = t.grid && i.grid && i.grid.rows > 1, l = (f) => H(s, `.${i.slideClass}${f}, swiper-slide${f}`)[0];
  let a, d, c;
  if (r)
    if (i.loop) {
      let f = n - t.virtual.slidesBefore;
      f < 0 && (f = t.virtual.slides.length + f), f >= t.virtual.slides.length && (f -= t.virtual.slides.length), a = l(`[data-swiper-slide-index="${f}"]`);
    } else
      a = l(`[data-swiper-slide-index="${n}"]`);
  else
    o ? (a = e.find((f) => f.column === n), c = e.find((f) => f.column === n + 1), d = e.find((f) => f.column === n - 1)) : a = e[n];
  a && (o || (c = it(a, `.${i.slideClass}, swiper-slide`)[0], i.loop && !c && (c = e[0]), d = tt(a, `.${i.slideClass}, swiper-slide`)[0], i.loop && !d === 0 && (d = e[e.length - 1]))), e.forEach((f) => {
    re(f, f === a, i.slideActiveClass), re(f, f === c, i.slideNextClass), re(f, f === d, i.slidePrevClass);
  }), t.emitSlidesClasses();
}
const Q = (t, e) => {
  if (!t || t.destroyed || !t.params) return;
  const i = () => t.isElement ? "swiper-slide" : `.${t.params.slideClass}`, s = e.closest(i());
  if (s) {
    let n = s.querySelector(`.${t.params.lazyPreloaderClass}`);
    !n && t.isElement && (s.shadowRoot ? n = s.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`) : requestAnimationFrame(() => {
      s.shadowRoot && (n = s.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`), n && n.remove());
    })), n && n.remove();
  }
}, ne = (t, e) => {
  if (!t.slides[e]) return;
  const i = t.slides[e].querySelector('[loading="lazy"]');
  i && i.removeAttribute("loading");
}, fe = (t) => {
  if (!t || t.destroyed || !t.params) return;
  let e = t.params.lazyPreloadPrevNext;
  const i = t.slides.length;
  if (!i || !e || e < 0) return;
  e = Math.min(e, i);
  const s = t.params.slidesPerView === "auto" ? t.slidesPerViewDynamic() : Math.ceil(t.params.slidesPerView), n = t.activeIndex;
  if (t.params.grid && t.params.grid.rows > 1) {
    const o = n, l = [o - e];
    l.push(...Array.from({
      length: e
    }).map((a, d) => o + s + d)), t.slides.forEach((a, d) => {
      l.includes(a.column) && ne(t, d);
    });
    return;
  }
  const r = n + s - 1;
  if (t.params.rewind || t.params.loop)
    for (let o = n - e; o <= r + e; o += 1) {
      const l = (o % i + i) % i;
      (l < n || l > r) && ne(t, l);
    }
  else
    for (let o = Math.max(n - e, 0); o <= Math.min(r + e, i - 1); o += 1)
      o !== n && (o > r || o < n) && ne(t, o);
};
function vt(t) {
  const {
    slidesGrid: e,
    params: i
  } = t, s = t.rtlTranslate ? t.translate : -t.translate;
  let n;
  for (let r = 0; r < e.length; r += 1)
    typeof e[r + 1] < "u" ? s >= e[r] && s < e[r + 1] - (e[r + 1] - e[r]) / 2 ? n = r : s >= e[r] && s < e[r + 1] && (n = r + 1) : s >= e[r] && (n = r);
  return i.normalizeSlideIndex && (n < 0 || typeof n > "u") && (n = 0), n;
}
function wt(t) {
  const e = this, i = e.rtlTranslate ? e.translate : -e.translate, {
    snapGrid: s,
    params: n,
    activeIndex: r,
    realIndex: o,
    snapIndex: l
  } = e;
  let a = t, d;
  const c = (p) => {
    let m = p - e.virtual.slidesBefore;
    return m < 0 && (m = e.virtual.slides.length + m), m >= e.virtual.slides.length && (m -= e.virtual.slides.length), m;
  };
  if (typeof a > "u" && (a = vt(e)), s.indexOf(i) >= 0)
    d = s.indexOf(i);
  else {
    const p = Math.min(n.slidesPerGroupSkip, a);
    d = p + Math.floor((a - p) / n.slidesPerGroup);
  }
  if (d >= s.length && (d = s.length - 1), a === r && !e.params.loop) {
    d !== l && (e.snapIndex = d, e.emit("snapIndexChange"));
    return;
  }
  if (a === r && e.params.loop && e.virtual && e.params.virtual.enabled) {
    e.realIndex = c(a);
    return;
  }
  const f = e.grid && n.grid && n.grid.rows > 1;
  let u;
  if (e.virtual && n.virtual.enabled && n.loop)
    u = c(a);
  else if (f) {
    const p = e.slides.find((v) => v.column === a);
    let m = parseInt(p.getAttribute("data-swiper-slide-index"), 10);
    Number.isNaN(m) && (m = Math.max(e.slides.indexOf(p), 0)), u = Math.floor(m / n.grid.rows);
  } else if (e.slides[a]) {
    const p = e.slides[a].getAttribute("data-swiper-slide-index");
    p ? u = parseInt(p, 10) : u = a;
  } else
    u = a;
  Object.assign(e, {
    previousSnapIndex: l,
    snapIndex: d,
    previousRealIndex: o,
    realIndex: u,
    previousIndex: r,
    activeIndex: a
  }), e.initialized && fe(e), e.emit("activeIndexChange"), e.emit("snapIndexChange"), (e.initialized || e.params.runCallbacksOnInit) && (o !== u && e.emit("realIndexChange"), e.emit("slideChange"));
}
function St(t, e) {
  const i = this, s = i.params;
  let n = t.closest(`.${s.slideClass}, swiper-slide`);
  !n && i.isElement && e && e.length > 1 && e.includes(t) && [...e.slice(e.indexOf(t) + 1, e.length)].forEach((l) => {
    !n && l.matches && l.matches(`.${s.slideClass}, swiper-slide`) && (n = l);
  });
  let r = !1, o;
  if (n) {
    for (let l = 0; l < i.slides.length; l += 1)
      if (i.slides[l] === n) {
        r = !0, o = l;
        break;
      }
  }
  if (n && r)
    i.clickedSlide = n, i.virtual && i.params.virtual.enabled ? i.clickedIndex = parseInt(n.getAttribute("data-swiper-slide-index"), 10) : i.clickedIndex = o;
  else {
    i.clickedSlide = void 0, i.clickedIndex = void 0;
    return;
  }
  s.slideToClickedSlide && i.clickedIndex !== void 0 && i.clickedIndex !== i.activeIndex && i.slideToClickedSlide();
}
var Tt = {
  updateSize: ct,
  updateSlides: ft,
  updateAutoHeight: ut,
  updateSlidesOffset: pt,
  updateSlidesProgress: mt,
  updateProgress: ht,
  updateSlidesClasses: gt,
  updateActiveIndex: wt,
  updateClickedSlide: St
};
function bt(t) {
  t === void 0 && (t = this.isHorizontal() ? "x" : "y");
  const e = this, {
    params: i,
    rtlTranslate: s,
    translate: n,
    wrapperEl: r
  } = e;
  if (i.virtualTranslate)
    return s ? -n : n;
  if (i.cssMode)
    return n;
  let o = Qe(r, t);
  return o += e.cssOverflowAdjustment(), s && (o = -o), o || 0;
}
function xt(t, e) {
  const i = this, {
    rtlTranslate: s,
    params: n,
    wrapperEl: r,
    progress: o
  } = i;
  let l = 0, a = 0;
  const d = 0;
  i.isHorizontal() ? l = s ? -t : t : a = t, n.roundLengths && (l = Math.floor(l), a = Math.floor(a)), i.previousTranslate = i.translate, i.translate = i.isHorizontal() ? l : a, n.cssMode ? r[i.isHorizontal() ? "scrollLeft" : "scrollTop"] = i.isHorizontal() ? -l : -a : n.virtualTranslate || (i.isHorizontal() ? l -= i.cssOverflowAdjustment() : a -= i.cssOverflowAdjustment(), r.style.transform = `translate3d(${l}px, ${a}px, ${d}px)`);
  let c;
  const f = i.maxTranslate() - i.minTranslate();
  f === 0 ? c = 0 : c = (t - i.minTranslate()) / f, c !== o && i.updateProgress(t), i.emit("setTranslate", i.translate, e);
}
function Et() {
  return -this.snapGrid[0];
}
function yt() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function Pt(t, e, i, s, n) {
  t === void 0 && (t = 0), e === void 0 && (e = this.params.speed), i === void 0 && (i = !0), s === void 0 && (s = !0);
  const r = this, {
    params: o,
    wrapperEl: l
  } = r;
  if (r.animating && o.preventInteractionOnTransition)
    return !1;
  const a = r.minTranslate(), d = r.maxTranslate();
  let c;
  if (s && t > a ? c = a : s && t < d ? c = d : c = t, r.updateProgress(c), o.cssMode) {
    const f = r.isHorizontal();
    if (e === 0)
      l[f ? "scrollLeft" : "scrollTop"] = -c;
    else {
      if (!r.support.smoothScroll)
        return Ce({
          swiper: r,
          targetPosition: -c,
          side: f ? "left" : "top"
        }), !0;
      l.scrollTo({
        [f ? "left" : "top"]: -c,
        behavior: "smooth"
      });
    }
    return !0;
  }
  return e === 0 ? (r.setTransition(0), r.setTranslate(c), i && (r.emit("beforeTransitionStart", e, n), r.emit("transitionEnd"))) : (r.setTransition(e), r.setTranslate(c), i && (r.emit("beforeTransitionStart", e, n), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function(u) {
    !r || r.destroyed || u.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, r.animating = !1, i && r.emit("transitionEnd"));
  }), r.wrapperEl.addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd))), !0;
}
var Mt = {
  getTranslate: bt,
  setTranslate: xt,
  minTranslate: Et,
  maxTranslate: yt,
  translateTo: Pt
};
function Ct(t, e) {
  const i = this;
  i.params.cssMode || (i.wrapperEl.style.transitionDuration = `${t}ms`, i.wrapperEl.style.transitionDelay = t === 0 ? "0ms" : ""), i.emit("setTransition", t, e);
}
function ze(t) {
  let {
    swiper: e,
    runCallbacks: i,
    direction: s,
    step: n
  } = t;
  const {
    activeIndex: r,
    previousIndex: o
  } = e;
  let l = s;
  l || (r > o ? l = "next" : r < o ? l = "prev" : l = "reset"), e.emit(`transition${n}`), i && l === "reset" ? e.emit(`slideResetTransition${n}`) : i && r !== o && (e.emit(`slideChangeTransition${n}`), l === "next" ? e.emit(`slideNextTransition${n}`) : e.emit(`slidePrevTransition${n}`));
}
function It(t, e) {
  t === void 0 && (t = !0);
  const i = this, {
    params: s
  } = i;
  s.cssMode || (s.autoHeight && i.updateAutoHeight(), ze({
    swiper: i,
    runCallbacks: t,
    direction: e,
    step: "Start"
  }));
}
function Ot(t, e) {
  t === void 0 && (t = !0);
  const i = this, {
    params: s
  } = i;
  i.animating = !1, !s.cssMode && (i.setTransition(0), ze({
    swiper: i,
    runCallbacks: t,
    direction: e,
    step: "End"
  }));
}
var Lt = {
  setTransition: Ct,
  transitionStart: It,
  transitionEnd: Ot
};
function zt(t, e, i, s, n) {
  t === void 0 && (t = 0), i === void 0 && (i = !0), typeof t == "string" && (t = parseInt(t, 10));
  const r = this;
  let o = t;
  o < 0 && (o = 0);
  const {
    params: l,
    snapGrid: a,
    slidesGrid: d,
    previousIndex: c,
    activeIndex: f,
    rtlTranslate: u,
    wrapperEl: p,
    enabled: m
  } = r;
  if (!m && !s && !n || r.destroyed || r.animating && l.preventInteractionOnTransition)
    return !1;
  typeof e > "u" && (e = r.params.speed);
  const v = Math.min(r.params.slidesPerGroupSkip, o);
  let P = v + Math.floor((o - v) / r.params.slidesPerGroup);
  P >= a.length && (P = a.length - 1);
  const h = -a[P];
  if (l.normalizeSlideIndex)
    for (let M = 0; M < d.length; M += 1) {
      const y = -Math.floor(h * 100), b = Math.floor(d[M] * 100), w = Math.floor(d[M + 1] * 100);
      typeof d[M + 1] < "u" ? y >= b && y < w - (w - b) / 2 ? o = M : y >= b && y < w && (o = M + 1) : y >= b && (o = M);
    }
  if (r.initialized && o !== f && (!r.allowSlideNext && (u ? h > r.translate && h > r.minTranslate() : h < r.translate && h < r.minTranslate()) || !r.allowSlidePrev && h > r.translate && h > r.maxTranslate() && (f || 0) !== o))
    return !1;
  o !== (c || 0) && i && r.emit("beforeSlideChangeStart"), r.updateProgress(h);
  let S;
  o > f ? S = "next" : o < f ? S = "prev" : S = "reset";
  const g = r.virtual && r.params.virtual.enabled;
  if (!(g && n) && (u && -h === r.translate || !u && h === r.translate))
    return r.updateActiveIndex(o), l.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), l.effect !== "slide" && r.setTranslate(h), S !== "reset" && (r.transitionStart(i, S), r.transitionEnd(i, S)), !1;
  if (l.cssMode) {
    const M = r.isHorizontal(), y = u ? h : -h;
    if (e === 0)
      g && (r.wrapperEl.style.scrollSnapType = "none", r._immediateVirtual = !0), g && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0 ? (r._cssModeVirtualInitialSet = !0, requestAnimationFrame(() => {
        p[M ? "scrollLeft" : "scrollTop"] = y;
      })) : p[M ? "scrollLeft" : "scrollTop"] = y, g && requestAnimationFrame(() => {
        r.wrapperEl.style.scrollSnapType = "", r._immediateVirtual = !1;
      });
    else {
      if (!r.support.smoothScroll)
        return Ce({
          swiper: r,
          targetPosition: y,
          side: M ? "left" : "top"
        }), !0;
      p.scrollTo({
        [M ? "left" : "top"]: y,
        behavior: "smooth"
      });
    }
    return !0;
  }
  const I = Le().isSafari;
  return g && !n && I && r.isElement && r.virtual.update(!1, !1, o), r.setTransition(e), r.setTranslate(h), r.updateActiveIndex(o), r.updateSlidesClasses(), r.emit("beforeTransitionStart", e, s), r.transitionStart(i, S), e === 0 ? r.transitionEnd(i, S) : r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(y) {
    !r || r.destroyed || y.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(i, S));
  }), r.wrapperEl.addEventListener("transitionend", r.onSlideToWrapperTransitionEnd)), !0;
}
function At(t, e, i, s) {
  t === void 0 && (t = 0), i === void 0 && (i = !0), typeof t == "string" && (t = parseInt(t, 10));
  const n = this;
  if (n.destroyed) return;
  typeof e > "u" && (e = n.params.speed);
  const r = n.grid && n.params.grid && n.params.grid.rows > 1;
  let o = t;
  if (n.params.loop)
    if (n.virtual && n.params.virtual.enabled)
      o = o + n.virtual.slidesBefore;
    else {
      let l;
      if (r) {
        const u = o * n.params.grid.rows;
        l = n.slides.find((p) => p.getAttribute("data-swiper-slide-index") * 1 === u).column;
      } else
        l = n.getSlideIndexByData(o);
      const a = r ? Math.ceil(n.slides.length / n.params.grid.rows) : n.slides.length, {
        centeredSlides: d
      } = n.params;
      let c = n.params.slidesPerView;
      c === "auto" ? c = n.slidesPerViewDynamic() : (c = Math.ceil(parseFloat(n.params.slidesPerView, 10)), d && c % 2 === 0 && (c = c + 1));
      let f = a - l < c;
      if (d && (f = f || l < Math.ceil(c / 2)), s && d && n.params.slidesPerView !== "auto" && !r && (f = !1), f) {
        const u = d ? l < n.activeIndex ? "prev" : "next" : l - n.activeIndex - 1 < n.params.slidesPerView ? "next" : "prev";
        n.loopFix({
          direction: u,
          slideTo: !0,
          activeSlideIndex: u === "next" ? l + 1 : l - a + 1,
          slideRealIndex: u === "next" ? n.realIndex : void 0
        });
      }
      if (r) {
        const u = o * n.params.grid.rows;
        o = n.slides.find((p) => p.getAttribute("data-swiper-slide-index") * 1 === u).column;
      } else
        o = n.getSlideIndexByData(o);
    }
  return requestAnimationFrame(() => {
    n.slideTo(o, e, i, s);
  }), n;
}
function _t(t, e, i) {
  e === void 0 && (e = !0);
  const s = this, {
    enabled: n,
    params: r,
    animating: o
  } = s;
  if (!n || s.destroyed) return s;
  typeof t > "u" && (t = s.params.speed);
  let l = r.slidesPerGroup;
  r.slidesPerView === "auto" && r.slidesPerGroup === 1 && r.slidesPerGroupAuto && (l = Math.max(s.slidesPerViewDynamic("current", !0), 1));
  const a = s.activeIndex < r.slidesPerGroupSkip ? 1 : l, d = s.virtual && r.virtual.enabled;
  if (r.loop) {
    if (o && !d && r.loopPreventsSliding) return !1;
    if (s.loopFix({
      direction: "next"
    }), s._clientLeft = s.wrapperEl.clientLeft, s.activeIndex === s.slides.length - 1 && r.cssMode)
      return requestAnimationFrame(() => {
        s.slideTo(s.activeIndex + a, t, e, i);
      }), !0;
  }
  return r.rewind && s.isEnd ? s.slideTo(0, t, e, i) : s.slideTo(s.activeIndex + a, t, e, i);
}
function Gt(t, e, i) {
  e === void 0 && (e = !0);
  const s = this, {
    params: n,
    snapGrid: r,
    slidesGrid: o,
    rtlTranslate: l,
    enabled: a,
    animating: d
  } = s;
  if (!a || s.destroyed) return s;
  typeof t > "u" && (t = s.params.speed);
  const c = s.virtual && n.virtual.enabled;
  if (n.loop) {
    if (d && !c && n.loopPreventsSliding) return !1;
    s.loopFix({
      direction: "prev"
    }), s._clientLeft = s.wrapperEl.clientLeft;
  }
  const f = l ? s.translate : -s.translate;
  function u(S) {
    return S < 0 ? -Math.floor(Math.abs(S)) : Math.floor(S);
  }
  const p = u(f), m = r.map((S) => u(S)), v = n.freeMode && n.freeMode.enabled;
  let P = r[m.indexOf(p) - 1];
  if (typeof P > "u" && (n.cssMode || v)) {
    let S;
    r.forEach((g, E) => {
      p >= g && (S = E);
    }), typeof S < "u" && (P = v ? r[S] : r[S > 0 ? S - 1 : S]);
  }
  let h = 0;
  if (typeof P < "u" && (h = o.indexOf(P), h < 0 && (h = s.activeIndex - 1), n.slidesPerView === "auto" && n.slidesPerGroup === 1 && n.slidesPerGroupAuto && (h = h - s.slidesPerViewDynamic("previous", !0) + 1, h = Math.max(h, 0))), n.rewind && s.isBeginning) {
    const S = s.params.virtual && s.params.virtual.enabled && s.virtual ? s.virtual.slides.length - 1 : s.slides.length - 1;
    return s.slideTo(S, t, e, i);
  } else if (n.loop && s.activeIndex === 0 && n.cssMode)
    return requestAnimationFrame(() => {
      s.slideTo(h, t, e, i);
    }), !0;
  return s.slideTo(h, t, e, i);
}
function Vt(t, e, i) {
  e === void 0 && (e = !0);
  const s = this;
  if (!s.destroyed)
    return typeof t > "u" && (t = s.params.speed), s.slideTo(s.activeIndex, t, e, i);
}
function Dt(t, e, i, s) {
  e === void 0 && (e = !0), s === void 0 && (s = 0.5);
  const n = this;
  if (n.destroyed) return;
  typeof t > "u" && (t = n.params.speed);
  let r = n.activeIndex;
  const o = Math.min(n.params.slidesPerGroupSkip, r), l = o + Math.floor((r - o) / n.params.slidesPerGroup), a = n.rtlTranslate ? n.translate : -n.translate;
  if (a >= n.snapGrid[l]) {
    const d = n.snapGrid[l], c = n.snapGrid[l + 1];
    a - d > (c - d) * s && (r += n.params.slidesPerGroup);
  } else {
    const d = n.snapGrid[l - 1], c = n.snapGrid[l];
    a - d <= (c - d) * s && (r -= n.params.slidesPerGroup);
  }
  return r = Math.max(r, 0), r = Math.min(r, n.slidesGrid.length - 1), n.slideTo(r, t, e, i);
}
function Bt() {
  const t = this;
  if (t.destroyed) return;
  const {
    params: e,
    slidesEl: i
  } = t, s = e.slidesPerView === "auto" ? t.slidesPerViewDynamic() : e.slidesPerView;
  let n = t.clickedIndex, r;
  const o = t.isElement ? "swiper-slide" : `.${e.slideClass}`;
  if (e.loop) {
    if (t.animating) return;
    r = parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"), 10), e.centeredSlides ? n < t.loopedSlides - s / 2 || n > t.slides.length - t.loopedSlides + s / 2 ? (t.loopFix(), n = t.getSlideIndex(H(i, `${o}[data-swiper-slide-index="${r}"]`)[0]), de(() => {
      t.slideTo(n);
    })) : t.slideTo(n) : n > t.slides.length - s ? (t.loopFix(), n = t.getSlideIndex(H(i, `${o}[data-swiper-slide-index="${r}"]`)[0]), de(() => {
      t.slideTo(n);
    })) : t.slideTo(n);
  } else
    t.slideTo(n);
}
var Nt = {
  slideTo: zt,
  slideToLoop: At,
  slideNext: _t,
  slidePrev: Gt,
  slideReset: Vt,
  slideToClosest: Dt,
  slideToClickedSlide: Bt
};
function Ft(t, e) {
  const i = this, {
    params: s,
    slidesEl: n
  } = i;
  if (!s.loop || i.virtual && i.params.virtual.enabled) return;
  const r = () => {
    H(n, `.${s.slideClass}, swiper-slide`).forEach((u, p) => {
      u.setAttribute("data-swiper-slide-index", p);
    });
  }, o = i.grid && s.grid && s.grid.rows > 1, l = s.slidesPerGroup * (o ? s.grid.rows : 1), a = i.slides.length % l !== 0, d = o && i.slides.length % s.grid.rows !== 0, c = (f) => {
    for (let u = 0; u < f; u += 1) {
      const p = i.isElement ? ce("swiper-slide", [s.slideBlankClass]) : ce("div", [s.slideClass, s.slideBlankClass]);
      i.slidesEl.append(p);
    }
  };
  if (a) {
    if (s.loopAddBlankSlides) {
      const f = l - i.slides.length % l;
      c(f), i.recalcSlides(), i.updateSlides();
    } else
      J("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
    r();
  } else if (d) {
    if (s.loopAddBlankSlides) {
      const f = s.grid.rows - i.slides.length % s.grid.rows;
      c(f), i.recalcSlides(), i.updateSlides();
    } else
      J("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
    r();
  } else
    r();
  i.loopFix({
    slideRealIndex: t,
    direction: s.centeredSlides ? void 0 : "next",
    initial: e
  });
}
function Rt(t) {
  let {
    slideRealIndex: e,
    slideTo: i = !0,
    direction: s,
    setTranslate: n,
    activeSlideIndex: r,
    initial: o,
    byController: l,
    byMousewheel: a
  } = t === void 0 ? {} : t;
  const d = this;
  if (!d.params.loop) return;
  d.emit("beforeLoopFix");
  const {
    slides: c,
    allowSlidePrev: f,
    allowSlideNext: u,
    slidesEl: p,
    params: m
  } = d, {
    centeredSlides: v,
    initialSlide: P
  } = m;
  if (d.allowSlidePrev = !0, d.allowSlideNext = !0, d.virtual && m.virtual.enabled) {
    i && (!m.centeredSlides && d.snapIndex === 0 ? d.slideTo(d.virtual.slides.length, 0, !1, !0) : m.centeredSlides && d.snapIndex < m.slidesPerView ? d.slideTo(d.virtual.slides.length + d.snapIndex, 0, !1, !0) : d.snapIndex === d.snapGrid.length - 1 && d.slideTo(d.virtual.slidesBefore, 0, !1, !0)), d.allowSlidePrev = f, d.allowSlideNext = u, d.emit("loopFix");
    return;
  }
  let h = m.slidesPerView;
  h === "auto" ? h = d.slidesPerViewDynamic() : (h = Math.ceil(parseFloat(m.slidesPerView, 10)), v && h % 2 === 0 && (h = h + 1));
  const S = m.slidesPerGroupAuto ? h : m.slidesPerGroup;
  let g = S;
  g % S !== 0 && (g += S - g % S), g += m.loopAdditionalSlides, d.loopedSlides = g;
  const E = d.grid && m.grid && m.grid.rows > 1;
  c.length < h + g || d.params.effect === "cards" && c.length < h + g * 2 ? J("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : E && m.grid.fill === "row" && J("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
  const T = [], I = [], M = E ? Math.ceil(c.length / m.grid.rows) : c.length, y = o && M - P < h && !v;
  let b = y ? P : d.activeIndex;
  typeof r > "u" ? r = d.getSlideIndex(c.find((O) => O.classList.contains(m.slideActiveClass))) : b = r;
  const w = s === "next" || !s, x = s === "prev" || !s;
  let C = 0, z = 0;
  const N = (E ? c[r].column : r) + (v && typeof n > "u" ? -h / 2 + 0.5 : 0);
  if (N < g) {
    C = Math.max(g - N, S);
    for (let O = 0; O < g - N; O += 1) {
      const _ = O - Math.floor(O / M) * M;
      if (E) {
        const G = M - _ - 1;
        for (let L = c.length - 1; L >= 0; L -= 1)
          c[L].column === G && T.push(L);
      } else
        T.push(M - _ - 1);
    }
  } else if (N + h > M - g) {
    z = Math.max(N - (M - g * 2), S), y && (z = Math.max(z, h - M + P + 1));
    for (let O = 0; O < z; O += 1) {
      const _ = O - Math.floor(O / M) * M;
      E ? c.forEach((G, L) => {
        G.column === _ && I.push(L);
      }) : I.push(_);
    }
  }
  if (d.__preventObserver__ = !0, requestAnimationFrame(() => {
    d.__preventObserver__ = !1;
  }), d.params.effect === "cards" && c.length < h + g * 2 && (I.includes(r) && I.splice(I.indexOf(r), 1), T.includes(r) && T.splice(T.indexOf(r), 1)), x && T.forEach((O) => {
    c[O].swiperLoopMoveDOM = !0, p.prepend(c[O]), c[O].swiperLoopMoveDOM = !1;
  }), w && I.forEach((O) => {
    c[O].swiperLoopMoveDOM = !0, p.append(c[O]), c[O].swiperLoopMoveDOM = !1;
  }), d.recalcSlides(), m.slidesPerView === "auto" ? d.updateSlides() : E && (T.length > 0 && x || I.length > 0 && w) && d.slides.forEach((O, _) => {
    d.grid.updateSlide(_, O, d.slides);
  }), m.watchSlidesProgress && d.updateSlidesOffset(), i) {
    if (T.length > 0 && x) {
      if (typeof e > "u") {
        const O = d.slidesGrid[b], G = d.slidesGrid[b + C] - O;
        a ? d.setTranslate(d.translate - G) : (d.slideTo(b + Math.ceil(C), 0, !1, !0), n && (d.touchEventsData.startTranslate = d.touchEventsData.startTranslate - G, d.touchEventsData.currentTranslate = d.touchEventsData.currentTranslate - G));
      } else if (n) {
        const O = E ? T.length / m.grid.rows : T.length;
        d.slideTo(d.activeIndex + O, 0, !1, !0), d.touchEventsData.currentTranslate = d.translate;
      }
    } else if (I.length > 0 && w)
      if (typeof e > "u") {
        const O = d.slidesGrid[b], G = d.slidesGrid[b - z] - O;
        a ? d.setTranslate(d.translate - G) : (d.slideTo(b - z, 0, !1, !0), n && (d.touchEventsData.startTranslate = d.touchEventsData.startTranslate - G, d.touchEventsData.currentTranslate = d.touchEventsData.currentTranslate - G));
      } else {
        const O = E ? I.length / m.grid.rows : I.length;
        d.slideTo(d.activeIndex - O, 0, !1, !0);
      }
  }
  if (d.allowSlidePrev = f, d.allowSlideNext = u, d.controller && d.controller.control && !l) {
    const O = {
      slideRealIndex: e,
      direction: s,
      setTranslate: n,
      activeSlideIndex: r,
      byController: !0
    };
    Array.isArray(d.controller.control) ? d.controller.control.forEach((_) => {
      !_.destroyed && _.params.loop && _.loopFix({
        ...O,
        slideTo: _.params.slidesPerView === m.slidesPerView ? i : !1
      });
    }) : d.controller.control instanceof d.constructor && d.controller.control.params.loop && d.controller.control.loopFix({
      ...O,
      slideTo: d.controller.control.params.slidesPerView === m.slidesPerView ? i : !1
    });
  }
  d.emit("loopFix");
}
function $t() {
  const t = this, {
    params: e,
    slidesEl: i
  } = t;
  if (!e.loop || !i || t.virtual && t.params.virtual.enabled) return;
  t.recalcSlides();
  const s = [];
  t.slides.forEach((n) => {
    const r = typeof n.swiperSlideIndex > "u" ? n.getAttribute("data-swiper-slide-index") * 1 : n.swiperSlideIndex;
    s[r] = n;
  }), t.slides.forEach((n) => {
    n.removeAttribute("data-swiper-slide-index");
  }), s.forEach((n) => {
    i.append(n);
  }), t.recalcSlides(), t.slideTo(t.realIndex, 0);
}
var Ht = {
  loopCreate: Ft,
  loopFix: Rt,
  loopDestroy: $t
};
function kt(t) {
  const e = this;
  if (!e.params.simulateTouch || e.params.watchOverflow && e.isLocked || e.params.cssMode) return;
  const i = e.params.touchEventsTarget === "container" ? e.el : e.wrapperEl;
  e.isElement && (e.__preventObserver__ = !0), i.style.cursor = "move", i.style.cursor = t ? "grabbing" : "grab", e.isElement && requestAnimationFrame(() => {
    e.__preventObserver__ = !1;
  });
}
function Wt() {
  const t = this;
  t.params.watchOverflow && t.isLocked || t.params.cssMode || (t.isElement && (t.__preventObserver__ = !0), t[t.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "", t.isElement && requestAnimationFrame(() => {
    t.__preventObserver__ = !1;
  }));
}
var jt = {
  setGrabCursor: kt,
  unsetGrabCursor: Wt
};
function Yt(t, e) {
  e === void 0 && (e = this);
  function i(s) {
    if (!s || s === j() || s === V()) return null;
    s.assignedSlot && (s = s.assignedSlot);
    const n = s.closest(t);
    return !n && !s.getRootNode ? null : n || i(s.getRootNode().host);
  }
  return i(e);
}
function Te(t, e, i) {
  const s = V(), {
    params: n
  } = t, r = n.edgeSwipeDetection, o = n.edgeSwipeThreshold;
  return r && (i <= o || i >= s.innerWidth - o) ? r === "prevent" ? (e.preventDefault(), !0) : !1 : !0;
}
function qt(t) {
  const e = this, i = j();
  let s = t;
  s.originalEvent && (s = s.originalEvent);
  const n = e.touchEventsData;
  if (s.type === "pointerdown") {
    if (n.pointerId !== null && n.pointerId !== s.pointerId)
      return;
    n.pointerId = s.pointerId;
  } else s.type === "touchstart" && s.targetTouches.length === 1 && (n.touchId = s.targetTouches[0].identifier);
  if (s.type === "touchstart") {
    Te(e, s, s.targetTouches[0].pageX);
    return;
  }
  const {
    params: r,
    touches: o,
    enabled: l
  } = e;
  if (!l || !r.simulateTouch && s.pointerType === "mouse" || e.animating && r.preventInteractionOnTransition)
    return;
  !e.animating && r.cssMode && r.loop && e.loopFix();
  let a = s.target;
  if (r.touchEventsTarget === "wrapper" && !et(a, e.wrapperEl) || "which" in s && s.which === 3 || "button" in s && s.button > 0 || n.isTouched && n.isMoved) return;
  const d = !!r.noSwipingClass && r.noSwipingClass !== "", c = s.composedPath ? s.composedPath() : s.path;
  d && s.target && s.target.shadowRoot && c && (a = c[0]);
  const f = r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`, u = !!(s.target && s.target.shadowRoot);
  if (r.noSwiping && (u ? Yt(f, a) : a.closest(f))) {
    e.allowClick = !0;
    return;
  }
  if (r.swipeHandler && !a.closest(r.swipeHandler))
    return;
  o.currentX = s.pageX, o.currentY = s.pageY;
  const p = o.currentX, m = o.currentY;
  if (!Te(e, s, p))
    return;
  Object.assign(n, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0
  }), o.startX = p, o.startY = m, n.touchStartTime = Z(), e.allowClick = !0, e.updateSize(), e.swipeDirection = void 0, r.threshold > 0 && (n.allowThresholdMove = !1);
  let v = !0;
  a.matches(n.focusableElements) && (v = !1, a.nodeName === "SELECT" && (n.isTouched = !1)), i.activeElement && i.activeElement.matches(n.focusableElements) && i.activeElement !== a && (s.pointerType === "mouse" || s.pointerType !== "mouse" && !a.matches(n.focusableElements)) && i.activeElement.blur();
  const P = v && e.allowTouchMove && r.touchStartPreventDefault;
  (r.touchStartForcePreventDefault || P) && !a.isContentEditable && s.preventDefault(), r.freeMode && r.freeMode.enabled && e.freeMode && e.animating && !r.cssMode && e.freeMode.onTouchStart(), e.emit("touchStart", s);
}
function Xt(t) {
  const e = j(), i = this, s = i.touchEventsData, {
    params: n,
    touches: r,
    rtlTranslate: o,
    enabled: l
  } = i;
  if (!l || !n.simulateTouch && t.pointerType === "mouse") return;
  let a = t;
  if (a.originalEvent && (a = a.originalEvent), a.type === "pointermove" && (s.touchId !== null || a.pointerId !== s.pointerId))
    return;
  let d;
  if (a.type === "touchmove") {
    if (d = [...a.changedTouches].find((T) => T.identifier === s.touchId), !d || d.identifier !== s.touchId) return;
  } else
    d = a;
  if (!s.isTouched) {
    s.startMoving && s.isScrolling && i.emit("touchMoveOpposite", a);
    return;
  }
  const c = d.pageX, f = d.pageY;
  if (a.preventedByNestedSwiper) {
    r.startX = c, r.startY = f;
    return;
  }
  if (!i.allowTouchMove) {
    a.target.matches(s.focusableElements) || (i.allowClick = !1), s.isTouched && (Object.assign(r, {
      startX: c,
      startY: f,
      currentX: c,
      currentY: f
    }), s.touchStartTime = Z());
    return;
  }
  if (n.touchReleaseOnEdges && !n.loop)
    if (i.isVertical()) {
      if (f < r.startY && i.translate <= i.maxTranslate() || f > r.startY && i.translate >= i.minTranslate()) {
        s.isTouched = !1, s.isMoved = !1;
        return;
      }
    } else {
      if (o && (c > r.startX && -i.translate <= i.maxTranslate() || c < r.startX && -i.translate >= i.minTranslate()))
        return;
      if (!o && (c < r.startX && i.translate <= i.maxTranslate() || c > r.startX && i.translate >= i.minTranslate()))
        return;
    }
  if (e.activeElement && e.activeElement.matches(s.focusableElements) && e.activeElement !== a.target && a.pointerType !== "mouse" && e.activeElement.blur(), e.activeElement && a.target === e.activeElement && a.target.matches(s.focusableElements)) {
    s.isMoved = !0, i.allowClick = !1;
    return;
  }
  s.allowTouchCallbacks && i.emit("touchMove", a), r.previousX = r.currentX, r.previousY = r.currentY, r.currentX = c, r.currentY = f;
  const u = r.currentX - r.startX, p = r.currentY - r.startY;
  if (i.params.threshold && Math.sqrt(u ** 2 + p ** 2) < i.params.threshold) return;
  if (typeof s.isScrolling > "u") {
    let T;
    i.isHorizontal() && r.currentY === r.startY || i.isVertical() && r.currentX === r.startX ? s.isScrolling = !1 : u * u + p * p >= 25 && (T = Math.atan2(Math.abs(p), Math.abs(u)) * 180 / Math.PI, s.isScrolling = i.isHorizontal() ? T > n.touchAngle : 90 - T > n.touchAngle);
  }
  if (s.isScrolling && i.emit("touchMoveOpposite", a), typeof s.startMoving > "u" && (r.currentX !== r.startX || r.currentY !== r.startY) && (s.startMoving = !0), s.isScrolling || a.type === "touchmove" && s.preventTouchMoveFromPointerMove) {
    s.isTouched = !1;
    return;
  }
  if (!s.startMoving)
    return;
  i.allowClick = !1, !n.cssMode && a.cancelable && a.preventDefault(), n.touchMoveStopPropagation && !n.nested && a.stopPropagation();
  let m = i.isHorizontal() ? u : p, v = i.isHorizontal() ? r.currentX - r.previousX : r.currentY - r.previousY;
  n.oneWayMovement && (m = Math.abs(m) * (o ? 1 : -1), v = Math.abs(v) * (o ? 1 : -1)), r.diff = m, m *= n.touchRatio, o && (m = -m, v = -v);
  const P = i.touchesDirection;
  i.swipeDirection = m > 0 ? "prev" : "next", i.touchesDirection = v > 0 ? "prev" : "next";
  const h = i.params.loop && !n.cssMode, S = i.touchesDirection === "next" && i.allowSlideNext || i.touchesDirection === "prev" && i.allowSlidePrev;
  if (!s.isMoved) {
    if (h && S && i.loopFix({
      direction: i.swipeDirection
    }), s.startTranslate = i.getTranslate(), i.setTransition(0), i.animating) {
      const T = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0,
        detail: {
          bySwiperTouchMove: !0
        }
      });
      i.wrapperEl.dispatchEvent(T);
    }
    s.allowMomentumBounce = !1, n.grabCursor && (i.allowSlideNext === !0 || i.allowSlidePrev === !0) && i.setGrabCursor(!0), i.emit("sliderFirstMove", a);
  }
  if ((/* @__PURE__ */ new Date()).getTime(), n._loopSwapReset !== !1 && s.isMoved && s.allowThresholdMove && P !== i.touchesDirection && h && S && Math.abs(m) >= 1) {
    Object.assign(r, {
      startX: c,
      startY: f,
      currentX: c,
      currentY: f,
      startTranslate: s.currentTranslate
    }), s.loopSwapReset = !0, s.startTranslate = s.currentTranslate;
    return;
  }
  i.emit("sliderMove", a), s.isMoved = !0, s.currentTranslate = m + s.startTranslate;
  let g = !0, E = n.resistanceRatio;
  if (n.touchReleaseOnEdges && (E = 0), m > 0 ? (h && S && s.allowThresholdMove && s.currentTranslate > (n.centeredSlides ? i.minTranslate() - i.slidesSizesGrid[i.activeIndex + 1] - (n.slidesPerView !== "auto" && i.slides.length - n.slidesPerView >= 2 ? i.slidesSizesGrid[i.activeIndex + 1] + i.params.spaceBetween : 0) - i.params.spaceBetween : i.minTranslate()) && i.loopFix({
    direction: "prev",
    setTranslate: !0,
    activeSlideIndex: 0
  }), s.currentTranslate > i.minTranslate() && (g = !1, n.resistance && (s.currentTranslate = i.minTranslate() - 1 + (-i.minTranslate() + s.startTranslate + m) ** E))) : m < 0 && (h && S && s.allowThresholdMove && s.currentTranslate < (n.centeredSlides ? i.maxTranslate() + i.slidesSizesGrid[i.slidesSizesGrid.length - 1] + i.params.spaceBetween + (n.slidesPerView !== "auto" && i.slides.length - n.slidesPerView >= 2 ? i.slidesSizesGrid[i.slidesSizesGrid.length - 1] + i.params.spaceBetween : 0) : i.maxTranslate()) && i.loopFix({
    direction: "next",
    setTranslate: !0,
    activeSlideIndex: i.slides.length - (n.slidesPerView === "auto" ? i.slidesPerViewDynamic() : Math.ceil(parseFloat(n.slidesPerView, 10)))
  }), s.currentTranslate < i.maxTranslate() && (g = !1, n.resistance && (s.currentTranslate = i.maxTranslate() + 1 - (i.maxTranslate() - s.startTranslate - m) ** E))), g && (a.preventedByNestedSwiper = !0), !i.allowSlideNext && i.swipeDirection === "next" && s.currentTranslate < s.startTranslate && (s.currentTranslate = s.startTranslate), !i.allowSlidePrev && i.swipeDirection === "prev" && s.currentTranslate > s.startTranslate && (s.currentTranslate = s.startTranslate), !i.allowSlidePrev && !i.allowSlideNext && (s.currentTranslate = s.startTranslate), n.threshold > 0)
    if (Math.abs(m) > n.threshold || s.allowThresholdMove) {
      if (!s.allowThresholdMove) {
        s.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, s.currentTranslate = s.startTranslate, r.diff = i.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY;
        return;
      }
    } else {
      s.currentTranslate = s.startTranslate;
      return;
    }
  !n.followFinger || n.cssMode || ((n.freeMode && n.freeMode.enabled && i.freeMode || n.watchSlidesProgress) && (i.updateActiveIndex(), i.updateSlidesClasses()), n.freeMode && n.freeMode.enabled && i.freeMode && i.freeMode.onTouchMove(), i.updateProgress(s.currentTranslate), i.setTranslate(s.currentTranslate));
}
function Ut(t) {
  const e = this, i = e.touchEventsData;
  let s = t;
  s.originalEvent && (s = s.originalEvent);
  let n;
  if (s.type === "touchend" || s.type === "touchcancel") {
    if (n = [...s.changedTouches].find((T) => T.identifier === i.touchId), !n || n.identifier !== i.touchId) return;
  } else {
    if (i.touchId !== null || s.pointerId !== i.pointerId) return;
    n = s;
  }
  if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(s.type) && !(["pointercancel", "contextmenu"].includes(s.type) && (e.browser.isSafari || e.browser.isWebView)))
    return;
  i.pointerId = null, i.touchId = null;
  const {
    params: o,
    touches: l,
    rtlTranslate: a,
    slidesGrid: d,
    enabled: c
  } = e;
  if (!c || !o.simulateTouch && s.pointerType === "mouse") return;
  if (i.allowTouchCallbacks && e.emit("touchEnd", s), i.allowTouchCallbacks = !1, !i.isTouched) {
    i.isMoved && o.grabCursor && e.setGrabCursor(!1), i.isMoved = !1, i.startMoving = !1;
    return;
  }
  o.grabCursor && i.isMoved && i.isTouched && (e.allowSlideNext === !0 || e.allowSlidePrev === !0) && e.setGrabCursor(!1);
  const f = Z(), u = f - i.touchStartTime;
  if (e.allowClick) {
    const T = s.path || s.composedPath && s.composedPath();
    e.updateClickedSlide(T && T[0] || s.target, T), e.emit("tap click", s), u < 300 && f - i.lastClickTime < 300 && e.emit("doubleTap doubleClick", s);
  }
  if (i.lastClickTime = Z(), de(() => {
    e.destroyed || (e.allowClick = !0);
  }), !i.isTouched || !i.isMoved || !e.swipeDirection || l.diff === 0 && !i.loopSwapReset || i.currentTranslate === i.startTranslate && !i.loopSwapReset) {
    i.isTouched = !1, i.isMoved = !1, i.startMoving = !1;
    return;
  }
  i.isTouched = !1, i.isMoved = !1, i.startMoving = !1;
  let p;
  if (o.followFinger ? p = a ? e.translate : -e.translate : p = -i.currentTranslate, o.cssMode)
    return;
  if (o.freeMode && o.freeMode.enabled) {
    e.freeMode.onTouchEnd({
      currentPos: p
    });
    return;
  }
  const m = p >= -e.maxTranslate() && !e.params.loop;
  let v = 0, P = e.slidesSizesGrid[0];
  for (let T = 0; T < d.length; T += T < o.slidesPerGroupSkip ? 1 : o.slidesPerGroup) {
    const I = T < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
    typeof d[T + I] < "u" ? (m || p >= d[T] && p < d[T + I]) && (v = T, P = d[T + I] - d[T]) : (m || p >= d[T]) && (v = T, P = d[d.length - 1] - d[d.length - 2]);
  }
  let h = null, S = null;
  o.rewind && (e.isBeginning ? S = o.virtual && o.virtual.enabled && e.virtual ? e.virtual.slides.length - 1 : e.slides.length - 1 : e.isEnd && (h = 0));
  const g = (p - d[v]) / P, E = v < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
  if (u > o.longSwipesMs) {
    if (!o.longSwipes) {
      e.slideTo(e.activeIndex);
      return;
    }
    e.swipeDirection === "next" && (g >= o.longSwipesRatio ? e.slideTo(o.rewind && e.isEnd ? h : v + E) : e.slideTo(v)), e.swipeDirection === "prev" && (g > 1 - o.longSwipesRatio ? e.slideTo(v + E) : S !== null && g < 0 && Math.abs(g) > o.longSwipesRatio ? e.slideTo(S) : e.slideTo(v));
  } else {
    if (!o.shortSwipes) {
      e.slideTo(e.activeIndex);
      return;
    }
    e.navigation && (s.target === e.navigation.nextEl || s.target === e.navigation.prevEl) ? s.target === e.navigation.nextEl ? e.slideTo(v + E) : e.slideTo(v) : (e.swipeDirection === "next" && e.slideTo(h !== null ? h : v + E), e.swipeDirection === "prev" && e.slideTo(S !== null ? S : v));
  }
}
function be() {
  const t = this, {
    params: e,
    el: i
  } = t;
  if (i && i.offsetWidth === 0) return;
  e.breakpoints && t.setBreakpoint();
  const {
    allowSlideNext: s,
    allowSlidePrev: n,
    snapGrid: r
  } = t, o = t.virtual && t.params.virtual.enabled;
  t.allowSlideNext = !0, t.allowSlidePrev = !0, t.updateSize(), t.updateSlides(), t.updateSlidesClasses();
  const l = o && e.loop;
  (e.slidesPerView === "auto" || e.slidesPerView > 1) && t.isEnd && !t.isBeginning && !t.params.centeredSlides && !l ? t.slideTo(t.slides.length - 1, 0, !1, !0) : t.params.loop && !o ? t.slideToLoop(t.realIndex, 0, !1, !0) : t.slideTo(t.activeIndex, 0, !1, !0), t.autoplay && t.autoplay.running && t.autoplay.paused && (clearTimeout(t.autoplay.resizeTimeout), t.autoplay.resizeTimeout = setTimeout(() => {
    t.autoplay && t.autoplay.running && t.autoplay.paused && t.autoplay.resume();
  }, 500)), t.allowSlidePrev = n, t.allowSlideNext = s, t.params.watchOverflow && r !== t.snapGrid && t.checkOverflow();
}
function Kt(t) {
  const e = this;
  e.enabled && (e.allowClick || (e.params.preventClicks && t.preventDefault(), e.params.preventClicksPropagation && e.animating && (t.stopPropagation(), t.stopImmediatePropagation())));
}
function Qt() {
  const t = this, {
    wrapperEl: e,
    rtlTranslate: i,
    enabled: s
  } = t;
  if (!s) return;
  t.previousTranslate = t.translate, t.isHorizontal() ? t.translate = -e.scrollLeft : t.translate = -e.scrollTop, t.translate === 0 && (t.translate = 0), t.updateActiveIndex(), t.updateSlidesClasses();
  let n;
  const r = t.maxTranslate() - t.minTranslate();
  r === 0 ? n = 0 : n = (t.translate - t.minTranslate()) / r, n !== t.progress && t.updateProgress(i ? -t.translate : t.translate), t.emit("setTranslate", t.translate, !1);
}
function Zt(t) {
  const e = this;
  Q(e, t.target), !(e.params.cssMode || e.params.slidesPerView !== "auto" && !e.params.autoHeight) && e.update();
}
function Jt() {
  const t = this;
  t.documentTouchHandlerProceeded || (t.documentTouchHandlerProceeded = !0, t.params.touchReleaseOnEdges && (t.el.style.touchAction = "auto"));
}
const Ae = (t, e) => {
  const i = j(), {
    params: s,
    el: n,
    wrapperEl: r,
    device: o
  } = t, l = !!s.nested, a = e === "on" ? "addEventListener" : "removeEventListener", d = e;
  !n || typeof n == "string" || (i[a]("touchstart", t.onDocumentTouchStart, {
    passive: !1,
    capture: l
  }), n[a]("touchstart", t.onTouchStart, {
    passive: !1
  }), n[a]("pointerdown", t.onTouchStart, {
    passive: !1
  }), i[a]("touchmove", t.onTouchMove, {
    passive: !1,
    capture: l
  }), i[a]("pointermove", t.onTouchMove, {
    passive: !1,
    capture: l
  }), i[a]("touchend", t.onTouchEnd, {
    passive: !0
  }), i[a]("pointerup", t.onTouchEnd, {
    passive: !0
  }), i[a]("pointercancel", t.onTouchEnd, {
    passive: !0
  }), i[a]("touchcancel", t.onTouchEnd, {
    passive: !0
  }), i[a]("pointerout", t.onTouchEnd, {
    passive: !0
  }), i[a]("pointerleave", t.onTouchEnd, {
    passive: !0
  }), i[a]("contextmenu", t.onTouchEnd, {
    passive: !0
  }), (s.preventClicks || s.preventClicksPropagation) && n[a]("click", t.onClick, !0), s.cssMode && r[a]("scroll", t.onScroll), s.updateOnWindowResize ? t[d](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", be, !0) : t[d]("observerUpdate", be, !0), n[a]("load", t.onLoad, {
    capture: !0
  }));
};
function ei() {
  const t = this, {
    params: e
  } = t;
  t.onTouchStart = qt.bind(t), t.onTouchMove = Xt.bind(t), t.onTouchEnd = Ut.bind(t), t.onDocumentTouchStart = Jt.bind(t), e.cssMode && (t.onScroll = Qt.bind(t)), t.onClick = Kt.bind(t), t.onLoad = Zt.bind(t), Ae(t, "on");
}
function ti() {
  Ae(this, "off");
}
var ii = {
  attachEvents: ei,
  detachEvents: ti
};
const xe = (t, e) => t.grid && e.grid && e.grid.rows > 1;
function si() {
  const t = this, {
    realIndex: e,
    initialized: i,
    params: s,
    el: n
  } = t, r = s.breakpoints;
  if (!r || r && Object.keys(r).length === 0) return;
  const o = j(), l = s.breakpointsBase === "window" || !s.breakpointsBase ? s.breakpointsBase : "container", a = ["window", "container"].includes(s.breakpointsBase) || !s.breakpointsBase ? t.el : o.querySelector(s.breakpointsBase), d = t.getBreakpoint(r, l, a);
  if (!d || t.currentBreakpoint === d) return;
  const f = (d in r ? r[d] : void 0) || t.originalParams, u = xe(t, s), p = xe(t, f), m = t.params.grabCursor, v = f.grabCursor, P = s.enabled;
  u && !p ? (n.classList.remove(`${s.containerModifierClass}grid`, `${s.containerModifierClass}grid-column`), t.emitContainerClasses()) : !u && p && (n.classList.add(`${s.containerModifierClass}grid`), (f.grid.fill && f.grid.fill === "column" || !f.grid.fill && s.grid.fill === "column") && n.classList.add(`${s.containerModifierClass}grid-column`), t.emitContainerClasses()), m && !v ? t.unsetGrabCursor() : !m && v && t.setGrabCursor(), ["navigation", "pagination", "scrollbar"].forEach((I) => {
    if (typeof f[I] > "u") return;
    const M = s[I] && s[I].enabled, y = f[I] && f[I].enabled;
    M && !y && t[I].disable(), !M && y && t[I].enable();
  });
  const h = f.direction && f.direction !== s.direction, S = s.loop && (f.slidesPerView !== s.slidesPerView || h), g = s.loop;
  h && i && t.changeDirection(), D(t.params, f);
  const E = t.params.enabled, T = t.params.loop;
  Object.assign(t, {
    allowTouchMove: t.params.allowTouchMove,
    allowSlideNext: t.params.allowSlideNext,
    allowSlidePrev: t.params.allowSlidePrev
  }), P && !E ? t.disable() : !P && E && t.enable(), t.currentBreakpoint = d, t.emit("_beforeBreakpoint", f), i && (S ? (t.loopDestroy(), t.loopCreate(e), t.updateSlides()) : !g && T ? (t.loopCreate(e), t.updateSlides()) : g && !T && t.loopDestroy()), t.emit("breakpoint", f);
}
function ri(t, e, i) {
  if (e === void 0 && (e = "window"), !t || e === "container" && !i) return;
  let s = !1;
  const n = V(), r = e === "window" ? n.innerHeight : i.clientHeight, o = Object.keys(t).map((l) => {
    if (typeof l == "string" && l.indexOf("@") === 0) {
      const a = parseFloat(l.substr(1));
      return {
        value: r * a,
        point: l
      };
    }
    return {
      value: l,
      point: l
    };
  });
  o.sort((l, a) => parseInt(l.value, 10) - parseInt(a.value, 10));
  for (let l = 0; l < o.length; l += 1) {
    const {
      point: a,
      value: d
    } = o[l];
    e === "window" ? n.matchMedia(`(min-width: ${d}px)`).matches && (s = a) : d <= i.clientWidth && (s = a);
  }
  return s || "max";
}
var ni = {
  setBreakpoint: si,
  getBreakpoint: ri
};
function li(t, e) {
  const i = [];
  return t.forEach((s) => {
    typeof s == "object" ? Object.keys(s).forEach((n) => {
      s[n] && i.push(e + n);
    }) : typeof s == "string" && i.push(e + s);
  }), i;
}
function oi() {
  const t = this, {
    classNames: e,
    params: i,
    rtl: s,
    el: n,
    device: r
  } = t, o = li(["initialized", i.direction, {
    "free-mode": t.params.freeMode && i.freeMode.enabled
  }, {
    autoheight: i.autoHeight
  }, {
    rtl: s
  }, {
    grid: i.grid && i.grid.rows > 1
  }, {
    "grid-column": i.grid && i.grid.rows > 1 && i.grid.fill === "column"
  }, {
    android: r.android
  }, {
    ios: r.ios
  }, {
    "css-mode": i.cssMode
  }, {
    centered: i.cssMode && i.centeredSlides
  }, {
    "watch-progress": i.watchSlidesProgress
  }], i.containerModifierClass);
  e.push(...o), n.classList.add(...e), t.emitContainerClasses();
}
function ai() {
  const t = this, {
    el: e,
    classNames: i
  } = t;
  !e || typeof e == "string" || (e.classList.remove(...i), t.emitContainerClasses());
}
var di = {
  addClasses: oi,
  removeClasses: ai
};
function ci() {
  const t = this, {
    isLocked: e,
    params: i
  } = t, {
    slidesOffsetBefore: s
  } = i;
  if (s) {
    const n = t.slides.length - 1, r = t.slidesGrid[n] + t.slidesSizesGrid[n] + s * 2;
    t.isLocked = t.size > r;
  } else
    t.isLocked = t.snapGrid.length === 1;
  i.allowSlideNext === !0 && (t.allowSlideNext = !t.isLocked), i.allowSlidePrev === !0 && (t.allowSlidePrev = !t.isLocked), e && e !== t.isLocked && (t.isEnd = !1), e !== t.isLocked && t.emit(t.isLocked ? "lock" : "unlock");
}
var fi = {
  checkOverflow: ci
}, ue = {
  init: !0,
  direction: "horizontal",
  oneWayMovement: !1,
  swiperElementNodeName: "SWIPER-CONTAINER",
  touchEventsTarget: "wrapper",
  initialSlide: 0,
  speed: 300,
  cssMode: !1,
  updateOnWindowResize: !0,
  resizeObserver: !0,
  nested: !1,
  createElements: !1,
  eventsPrefix: "swiper",
  enabled: !0,
  focusableElements: "input, select, option, textarea, button, video, label",
  // Overrides
  width: null,
  height: null,
  //
  preventInteractionOnTransition: !1,
  // ssr
  userAgent: null,
  url: null,
  // To support iOS's swipe-to-go-back gesture (when being used in-app).
  edgeSwipeDetection: !1,
  edgeSwipeThreshold: 20,
  // Autoheight
  autoHeight: !1,
  // Set wrapper width
  setWrapperSize: !1,
  // Virtual Translate
  virtualTranslate: !1,
  // Effects
  effect: "slide",
  // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
  // Breakpoints
  breakpoints: void 0,
  breakpointsBase: "window",
  // Slides grid
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerGroup: 1,
  slidesPerGroupSkip: 0,
  slidesPerGroupAuto: !1,
  centeredSlides: !1,
  centeredSlidesBounds: !1,
  slidesOffsetBefore: 0,
  // in px
  slidesOffsetAfter: 0,
  // in px
  normalizeSlideIndex: !0,
  centerInsufficientSlides: !1,
  // Disable swiper and hide navigation when container not overflow
  watchOverflow: !0,
  // Round length
  roundLengths: !1,
  // Touches
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: !0,
  shortSwipes: !0,
  longSwipes: !0,
  longSwipesRatio: 0.5,
  longSwipesMs: 300,
  followFinger: !0,
  allowTouchMove: !0,
  threshold: 5,
  touchMoveStopPropagation: !1,
  touchStartPreventDefault: !0,
  touchStartForcePreventDefault: !1,
  touchReleaseOnEdges: !1,
  // Unique Navigation Elements
  uniqueNavElements: !0,
  // Resistance
  resistance: !0,
  resistanceRatio: 0.85,
  // Progress
  watchSlidesProgress: !1,
  // Cursor
  grabCursor: !1,
  // Clicks
  preventClicks: !0,
  preventClicksPropagation: !0,
  slideToClickedSlide: !1,
  // loop
  loop: !1,
  loopAddBlankSlides: !0,
  loopAdditionalSlides: 0,
  loopPreventsSliding: !0,
  // rewind
  rewind: !1,
  // Swiping/no swiping
  allowSlidePrev: !0,
  allowSlideNext: !0,
  swipeHandler: null,
  // '.swipe-handler',
  noSwiping: !0,
  noSwipingClass: "swiper-no-swiping",
  noSwipingSelector: null,
  // Passive Listeners
  passiveListeners: !0,
  maxBackfaceHiddenSlides: 10,
  // NS
  containerModifierClass: "swiper-",
  // NEW
  slideClass: "swiper-slide",
  slideBlankClass: "swiper-slide-blank",
  slideActiveClass: "swiper-slide-active",
  slideVisibleClass: "swiper-slide-visible",
  slideFullyVisibleClass: "swiper-slide-fully-visible",
  slideNextClass: "swiper-slide-next",
  slidePrevClass: "swiper-slide-prev",
  wrapperClass: "swiper-wrapper",
  lazyPreloaderClass: "swiper-lazy-preloader",
  lazyPreloadPrevNext: 0,
  // Callbacks
  runCallbacksOnInit: !0,
  // Internals
  _emitClasses: !1
};
function ui(t, e) {
  return function(s) {
    s === void 0 && (s = {});
    const n = Object.keys(s)[0], r = s[n];
    if (typeof r != "object" || r === null) {
      D(e, s);
      return;
    }
    if (t[n] === !0 && (t[n] = {
      enabled: !0
    }), n === "navigation" && t[n] && t[n].enabled && !t[n].prevEl && !t[n].nextEl && (t[n].auto = !0), ["pagination", "scrollbar"].indexOf(n) >= 0 && t[n] && t[n].enabled && !t[n].el && (t[n].auto = !0), !(n in t && "enabled" in r)) {
      D(e, s);
      return;
    }
    typeof t[n] == "object" && !("enabled" in t[n]) && (t[n].enabled = !0), t[n] || (t[n] = {
      enabled: !1
    }), D(e, s);
  };
}
const le = {
  eventsEmitter: dt,
  update: Tt,
  translate: Mt,
  transition: Lt,
  slide: Nt,
  loop: Ht,
  grabCursor: jt,
  events: ii,
  breakpoints: ni,
  checkOverflow: fi,
  classes: di
}, oe = {};
let me = class $ {
  constructor() {
    let e, i;
    for (var s = arguments.length, n = new Array(s), r = 0; r < s; r++)
      n[r] = arguments[r];
    n.length === 1 && n[0].constructor && Object.prototype.toString.call(n[0]).slice(8, -1) === "Object" ? i = n[0] : [e, i] = n, i || (i = {}), i = D({}, i), e && !i.el && (i.el = e);
    const o = j();
    if (i.el && typeof i.el == "string" && o.querySelectorAll(i.el).length > 1) {
      const c = [];
      return o.querySelectorAll(i.el).forEach((f) => {
        const u = D({}, i, {
          el: f
        });
        c.push(new $(u));
      }), c;
    }
    const l = this;
    l.__swiper__ = !0, l.support = Ie(), l.device = Oe({
      userAgent: i.userAgent
    }), l.browser = Le(), l.eventsListeners = {}, l.eventsAnyListeners = [], l.modules = [...l.__modules__], i.modules && Array.isArray(i.modules) && l.modules.push(...i.modules);
    const a = {};
    l.modules.forEach((c) => {
      c({
        params: i,
        swiper: l,
        extendParams: ui(i, a),
        on: l.on.bind(l),
        once: l.once.bind(l),
        off: l.off.bind(l),
        emit: l.emit.bind(l)
      });
    });
    const d = D({}, ue, a);
    return l.params = D({}, d, oe, i), l.originalParams = D({}, l.params), l.passedParams = D({}, i), l.params && l.params.on && Object.keys(l.params.on).forEach((c) => {
      l.on(c, l.params.on[c]);
    }), l.params && l.params.onAny && l.onAny(l.params.onAny), Object.assign(l, {
      enabled: l.params.enabled,
      el: e,
      // Classes
      classNames: [],
      // Slides
      slides: [],
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],
      // isDirection
      isHorizontal() {
        return l.params.direction === "horizontal";
      },
      isVertical() {
        return l.params.direction === "vertical";
      },
      // Indexes
      activeIndex: 0,
      realIndex: 0,
      //
      isBeginning: !0,
      isEnd: !1,
      // Props
      translate: 0,
      previousTranslate: 0,
      progress: 0,
      velocity: 0,
      animating: !1,
      cssOverflowAdjustment() {
        return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
      },
      // Locks
      allowSlideNext: l.params.allowSlideNext,
      allowSlidePrev: l.params.allowSlidePrev,
      // Touch Events
      touchEventsData: {
        isTouched: void 0,
        isMoved: void 0,
        allowTouchCallbacks: void 0,
        touchStartTime: void 0,
        isScrolling: void 0,
        currentTranslate: void 0,
        startTranslate: void 0,
        allowThresholdMove: void 0,
        // Form elements to match
        focusableElements: l.params.focusableElements,
        // Last click time
        lastClickTime: 0,
        clickTimeout: void 0,
        // Velocities
        velocities: [],
        allowMomentumBounce: void 0,
        startMoving: void 0,
        pointerId: null,
        touchId: null
      },
      // Clicks
      allowClick: !0,
      // Touches
      allowTouchMove: l.params.allowTouchMove,
      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0
      },
      // Images
      imagesToLoad: [],
      imagesLoaded: 0
    }), l.emit("_swiper"), l.params.init && l.init(), l;
  }
  getDirectionLabel(e) {
    return this.isHorizontal() ? e : {
      width: "height",
      "margin-top": "margin-left",
      "margin-bottom ": "margin-right",
      "margin-left": "margin-top",
      "margin-right": "margin-bottom",
      "padding-left": "padding-top",
      "padding-right": "padding-bottom",
      marginRight: "marginBottom"
    }[e];
  }
  getSlideIndex(e) {
    const {
      slidesEl: i,
      params: s
    } = this, n = H(i, `.${s.slideClass}, swiper-slide`), r = ge(n[0]);
    return ge(e) - r;
  }
  getSlideIndexByData(e) {
    return this.getSlideIndex(this.slides.find((i) => i.getAttribute("data-swiper-slide-index") * 1 === e));
  }
  recalcSlides() {
    const e = this, {
      slidesEl: i,
      params: s
    } = e;
    e.slides = H(i, `.${s.slideClass}, swiper-slide`);
  }
  enable() {
    const e = this;
    e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"));
  }
  disable() {
    const e = this;
    e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"));
  }
  setProgress(e, i) {
    const s = this;
    e = Math.min(Math.max(e, 0), 1);
    const n = s.minTranslate(), o = (s.maxTranslate() - n) * e + n;
    s.translateTo(o, typeof i > "u" ? 0 : i), s.updateActiveIndex(), s.updateSlidesClasses();
  }
  emitContainerClasses() {
    const e = this;
    if (!e.params._emitClasses || !e.el) return;
    const i = e.el.className.split(" ").filter((s) => s.indexOf("swiper") === 0 || s.indexOf(e.params.containerModifierClass) === 0);
    e.emit("_containerClasses", i.join(" "));
  }
  getSlideClasses(e) {
    const i = this;
    return i.destroyed ? "" : e.className.split(" ").filter((s) => s.indexOf("swiper-slide") === 0 || s.indexOf(i.params.slideClass) === 0).join(" ");
  }
  emitSlidesClasses() {
    const e = this;
    if (!e.params._emitClasses || !e.el) return;
    const i = [];
    e.slides.forEach((s) => {
      const n = e.getSlideClasses(s);
      i.push({
        slideEl: s,
        classNames: n
      }), e.emit("_slideClass", s, n);
    }), e.emit("_slideClasses", i);
  }
  slidesPerViewDynamic(e, i) {
    e === void 0 && (e = "current"), i === void 0 && (i = !1);
    const s = this, {
      params: n,
      slides: r,
      slidesGrid: o,
      slidesSizesGrid: l,
      size: a,
      activeIndex: d
    } = s;
    let c = 1;
    if (typeof n.slidesPerView == "number") return n.slidesPerView;
    if (n.centeredSlides) {
      let f = r[d] ? Math.ceil(r[d].swiperSlideSize) : 0, u;
      for (let p = d + 1; p < r.length; p += 1)
        r[p] && !u && (f += Math.ceil(r[p].swiperSlideSize), c += 1, f > a && (u = !0));
      for (let p = d - 1; p >= 0; p -= 1)
        r[p] && !u && (f += r[p].swiperSlideSize, c += 1, f > a && (u = !0));
    } else if (e === "current")
      for (let f = d + 1; f < r.length; f += 1)
        (i ? o[f] + l[f] - o[d] < a : o[f] - o[d] < a) && (c += 1);
    else
      for (let f = d - 1; f >= 0; f -= 1)
        o[d] - o[f] < a && (c += 1);
    return c;
  }
  update() {
    const e = this;
    if (!e || e.destroyed) return;
    const {
      snapGrid: i,
      params: s
    } = e;
    s.breakpoints && e.setBreakpoint(), [...e.el.querySelectorAll('[loading="lazy"]')].forEach((o) => {
      o.complete && Q(e, o);
    }), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses();
    function n() {
      const o = e.rtlTranslate ? e.translate * -1 : e.translate, l = Math.min(Math.max(o, e.maxTranslate()), e.minTranslate());
      e.setTranslate(l), e.updateActiveIndex(), e.updateSlidesClasses();
    }
    let r;
    if (s.freeMode && s.freeMode.enabled && !s.cssMode)
      n(), s.autoHeight && e.updateAutoHeight();
    else {
      if ((s.slidesPerView === "auto" || s.slidesPerView > 1) && e.isEnd && !s.centeredSlides) {
        const o = e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides;
        r = e.slideTo(o.length - 1, 0, !1, !0);
      } else
        r = e.slideTo(e.activeIndex, 0, !1, !0);
      r || n();
    }
    s.watchOverflow && i !== e.snapGrid && e.checkOverflow(), e.emit("update");
  }
  changeDirection(e, i) {
    i === void 0 && (i = !0);
    const s = this, n = s.params.direction;
    return e || (e = n === "horizontal" ? "vertical" : "horizontal"), e === n || e !== "horizontal" && e !== "vertical" || (s.el.classList.remove(`${s.params.containerModifierClass}${n}`), s.el.classList.add(`${s.params.containerModifierClass}${e}`), s.emitContainerClasses(), s.params.direction = e, s.slides.forEach((r) => {
      e === "vertical" ? r.style.width = "" : r.style.height = "";
    }), s.emit("changeDirection"), i && s.update()), s;
  }
  changeLanguageDirection(e) {
    const i = this;
    i.rtl && e === "rtl" || !i.rtl && e === "ltr" || (i.rtl = e === "rtl", i.rtlTranslate = i.params.direction === "horizontal" && i.rtl, i.rtl ? (i.el.classList.add(`${i.params.containerModifierClass}rtl`), i.el.dir = "rtl") : (i.el.classList.remove(`${i.params.containerModifierClass}rtl`), i.el.dir = "ltr"), i.update());
  }
  mount(e) {
    const i = this;
    if (i.mounted) return !0;
    let s = e || i.params.el;
    if (typeof s == "string" && (s = document.querySelector(s)), !s)
      return !1;
    s.swiper = i, s.parentNode && s.parentNode.host && s.parentNode.host.nodeName === i.params.swiperElementNodeName.toUpperCase() && (i.isElement = !0);
    const n = () => `.${(i.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let o = s && s.shadowRoot && s.shadowRoot.querySelector ? s.shadowRoot.querySelector(n()) : H(s, n())[0];
    return !o && i.params.createElements && (o = ce("div", i.params.wrapperClass), s.append(o), H(s, `.${i.params.slideClass}`).forEach((l) => {
      o.append(l);
    })), Object.assign(i, {
      el: s,
      wrapperEl: o,
      slidesEl: i.isElement && !s.parentNode.host.slideSlots ? s.parentNode.host : o,
      hostEl: i.isElement ? s.parentNode.host : s,
      mounted: !0,
      // RTL
      rtl: s.dir.toLowerCase() === "rtl" || k(s, "direction") === "rtl",
      rtlTranslate: i.params.direction === "horizontal" && (s.dir.toLowerCase() === "rtl" || k(s, "direction") === "rtl"),
      wrongRTL: k(o, "display") === "-webkit-box"
    }), !0;
  }
  init(e) {
    const i = this;
    if (i.initialized || i.mount(e) === !1) return i;
    i.emit("beforeInit"), i.params.breakpoints && i.setBreakpoint(), i.addClasses(), i.updateSize(), i.updateSlides(), i.params.watchOverflow && i.checkOverflow(), i.params.grabCursor && i.enabled && i.setGrabCursor(), i.params.loop && i.virtual && i.params.virtual.enabled ? i.slideTo(i.params.initialSlide + i.virtual.slidesBefore, 0, i.params.runCallbacksOnInit, !1, !0) : i.slideTo(i.params.initialSlide, 0, i.params.runCallbacksOnInit, !1, !0), i.params.loop && i.loopCreate(void 0, !0), i.attachEvents();
    const n = [...i.el.querySelectorAll('[loading="lazy"]')];
    return i.isElement && n.push(...i.hostEl.querySelectorAll('[loading="lazy"]')), n.forEach((r) => {
      r.complete ? Q(i, r) : r.addEventListener("load", (o) => {
        Q(i, o.target);
      });
    }), fe(i), i.initialized = !0, fe(i), i.emit("init"), i.emit("afterInit"), i;
  }
  destroy(e, i) {
    e === void 0 && (e = !0), i === void 0 && (i = !0);
    const s = this, {
      params: n,
      el: r,
      wrapperEl: o,
      slides: l
    } = s;
    return typeof s.params > "u" || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), n.loop && s.loopDestroy(), i && (s.removeClasses(), r && typeof r != "string" && r.removeAttribute("style"), o && o.removeAttribute("style"), l && l.length && l.forEach((a) => {
      a.classList.remove(n.slideVisibleClass, n.slideFullyVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass), a.removeAttribute("style"), a.removeAttribute("data-swiper-slide-index");
    })), s.emit("destroy"), Object.keys(s.eventsListeners).forEach((a) => {
      s.off(a);
    }), e !== !1 && (s.el && typeof s.el != "string" && (s.el.swiper = null), Ue(s)), s.destroyed = !0), null;
  }
  static extendDefaults(e) {
    D(oe, e);
  }
  static get extendedDefaults() {
    return oe;
  }
  static get defaults() {
    return ue;
  }
  static installModule(e) {
    $.prototype.__modules__ || ($.prototype.__modules__ = []);
    const i = $.prototype.__modules__;
    typeof e == "function" && i.indexOf(e) < 0 && i.push(e);
  }
  static use(e) {
    return Array.isArray(e) ? (e.forEach((i) => $.installModule(i)), $) : ($.installModule(e), $);
  }
};
Object.keys(le).forEach((t) => {
  Object.keys(le[t]).forEach((e) => {
    me.prototype[e] = le[t][e];
  });
});
me.use([ot, at]);
const _e = [
  "eventsPrefix",
  "injectStyles",
  "injectStylesUrls",
  "modules",
  "init",
  "_direction",
  "oneWayMovement",
  "swiperElementNodeName",
  "touchEventsTarget",
  "initialSlide",
  "_speed",
  "cssMode",
  "updateOnWindowResize",
  "resizeObserver",
  "nested",
  "focusableElements",
  "_enabled",
  "_width",
  "_height",
  "preventInteractionOnTransition",
  "userAgent",
  "url",
  "_edgeSwipeDetection",
  "_edgeSwipeThreshold",
  "_freeMode",
  "_autoHeight",
  "setWrapperSize",
  "virtualTranslate",
  "_effect",
  "breakpoints",
  "breakpointsBase",
  "_spaceBetween",
  "_slidesPerView",
  "maxBackfaceHiddenSlides",
  "_grid",
  "_slidesPerGroup",
  "_slidesPerGroupSkip",
  "_slidesPerGroupAuto",
  "_centeredSlides",
  "_centeredSlidesBounds",
  "_slidesOffsetBefore",
  "_slidesOffsetAfter",
  "normalizeSlideIndex",
  "_centerInsufficientSlides",
  "_watchOverflow",
  "roundLengths",
  "touchRatio",
  "touchAngle",
  "simulateTouch",
  "_shortSwipes",
  "_longSwipes",
  "longSwipesRatio",
  "longSwipesMs",
  "_followFinger",
  "allowTouchMove",
  "_threshold",
  "touchMoveStopPropagation",
  "touchStartPreventDefault",
  "touchStartForcePreventDefault",
  "touchReleaseOnEdges",
  "uniqueNavElements",
  "_resistance",
  "_resistanceRatio",
  "_watchSlidesProgress",
  "_grabCursor",
  "preventClicks",
  "preventClicksPropagation",
  "_slideToClickedSlide",
  "_loop",
  "loopAdditionalSlides",
  "loopAddBlankSlides",
  "loopPreventsSliding",
  "_rewind",
  "_allowSlidePrev",
  "_allowSlideNext",
  "_swipeHandler",
  "_noSwiping",
  "noSwipingClass",
  "noSwipingSelector",
  "passiveListeners",
  "containerModifierClass",
  "slideClass",
  "slideActiveClass",
  "slideVisibleClass",
  "slideFullyVisibleClass",
  "slideNextClass",
  "slidePrevClass",
  "slideBlankClass",
  "wrapperClass",
  "lazyPreloaderClass",
  "lazyPreloadPrevNext",
  "runCallbacksOnInit",
  "observer",
  "observeParents",
  "observeSlideChildren",
  // modules
  "a11y",
  "_autoplay",
  "_controller",
  "coverflowEffect",
  "cubeEffect",
  "fadeEffect",
  "flipEffect",
  "creativeEffect",
  "cardsEffect",
  "hashNavigation",
  "history",
  "keyboard",
  "mousewheel",
  "_navigation",
  "_pagination",
  "parallax",
  "_scrollbar",
  "_thumbs",
  "virtual",
  "zoom",
  "control"
];
function W(t) {
  return typeof t == "object" && t !== null && t.constructor && Object.prototype.toString.call(t).slice(8, -1) === "Object" && !t.__swiper__;
}
function Y(t, e) {
  const i = ["__proto__", "constructor", "prototype"];
  Object.keys(e).filter((s) => i.indexOf(s) < 0).forEach((s) => {
    typeof t[s] > "u" ? t[s] = e[s] : W(e[s]) && W(t[s]) && Object.keys(e[s]).length > 0 ? e[s].__swiper__ ? t[s] = e[s] : Y(t[s], e[s]) : t[s] = e[s];
  });
}
function Ge(t) {
  return t === void 0 && (t = {}), t.navigation && typeof t.navigation.nextEl > "u" && typeof t.navigation.prevEl > "u";
}
function Ve(t) {
  return t === void 0 && (t = {}), t.pagination && typeof t.pagination.el > "u";
}
function De(t) {
  return t === void 0 && (t = {}), t.scrollbar && typeof t.scrollbar.el > "u";
}
function Be(t) {
  t === void 0 && (t = "");
  const e = t.split(" ").map((s) => s.trim()).filter((s) => !!s), i = [];
  return e.forEach((s) => {
    i.indexOf(s) < 0 && i.push(s);
  }), i.join(" ");
}
function pi(t) {
  return t === void 0 && (t = ""), t ? t.includes("swiper-wrapper") ? t : `swiper-wrapper ${t}` : "swiper-wrapper";
}
function mi(t) {
  let {
    swiper: e,
    slides: i,
    passedParams: s,
    changedParams: n,
    nextEl: r,
    prevEl: o,
    scrollbarEl: l,
    paginationEl: a
  } = t;
  const d = n.filter((b) => b !== "children" && b !== "direction" && b !== "wrapperClass"), {
    params: c,
    pagination: f,
    navigation: u,
    scrollbar: p,
    virtual: m,
    thumbs: v
  } = e;
  let P, h, S, g, E, T, I, M;
  n.includes("thumbs") && s.thumbs && s.thumbs.swiper && !s.thumbs.swiper.destroyed && c.thumbs && (!c.thumbs.swiper || c.thumbs.swiper.destroyed) && (P = !0), n.includes("controller") && s.controller && s.controller.control && c.controller && !c.controller.control && (h = !0), n.includes("pagination") && s.pagination && (s.pagination.el || a) && (c.pagination || c.pagination === !1) && f && !f.el && (S = !0), n.includes("scrollbar") && s.scrollbar && (s.scrollbar.el || l) && (c.scrollbar || c.scrollbar === !1) && p && !p.el && (g = !0), n.includes("navigation") && s.navigation && (s.navigation.prevEl || o) && (s.navigation.nextEl || r) && (c.navigation || c.navigation === !1) && u && !u.prevEl && !u.nextEl && (E = !0);
  const y = (b) => {
    e[b] && (e[b].destroy(), b === "navigation" ? (e.isElement && (e[b].prevEl.remove(), e[b].nextEl.remove()), c[b].prevEl = void 0, c[b].nextEl = void 0, e[b].prevEl = void 0, e[b].nextEl = void 0) : (e.isElement && e[b].el.remove(), c[b].el = void 0, e[b].el = void 0));
  };
  n.includes("loop") && e.isElement && (c.loop && !s.loop ? T = !0 : !c.loop && s.loop ? I = !0 : M = !0), d.forEach((b) => {
    if (W(c[b]) && W(s[b]))
      Object.assign(c[b], s[b]), (b === "navigation" || b === "pagination" || b === "scrollbar") && "enabled" in s[b] && !s[b].enabled && y(b);
    else {
      const w = s[b];
      (w === !0 || w === !1) && (b === "navigation" || b === "pagination" || b === "scrollbar") ? w === !1 && y(b) : c[b] = s[b];
    }
  }), d.includes("controller") && !h && e.controller && e.controller.control && c.controller && c.controller.control && (e.controller.control = c.controller.control), n.includes("children") && i && m && c.virtual.enabled ? (m.slides = i, m.update(!0)) : n.includes("virtual") && m && c.virtual.enabled && (i && (m.slides = i), m.update(!0)), n.includes("children") && i && c.loop && (M = !0), P && v.init() && v.update(!0), h && (e.controller.control = c.controller.control), S && (e.isElement && (!a || typeof a == "string") && (a = document.createElement("div"), a.classList.add("swiper-pagination"), a.part.add("pagination"), e.el.appendChild(a)), a && (c.pagination.el = a), f.init(), f.render(), f.update()), g && (e.isElement && (!l || typeof l == "string") && (l = document.createElement("div"), l.classList.add("swiper-scrollbar"), l.part.add("scrollbar"), e.el.appendChild(l)), l && (c.scrollbar.el = l), p.init(), p.updateSize(), p.setTranslate()), E && (e.isElement && ((!r || typeof r == "string") && (r = document.createElement("div"), r.classList.add("swiper-button-next"), we(r, e.hostEl.constructor.nextButtonSvg), r.part.add("button-next"), e.el.appendChild(r)), (!o || typeof o == "string") && (o = document.createElement("div"), o.classList.add("swiper-button-prev"), we(o, e.hostEl.constructor.prevButtonSvg), o.part.add("button-prev"), e.el.appendChild(o))), r && (c.navigation.nextEl = r), o && (c.navigation.prevEl = o), u.init(), u.update()), n.includes("allowSlideNext") && (e.allowSlideNext = s.allowSlideNext), n.includes("allowSlidePrev") && (e.allowSlidePrev = s.allowSlidePrev), n.includes("direction") && e.changeDirection(s.direction, !1), (T || M) && e.loopDestroy(), (I || M) && e.loopCreate(), e.update();
}
function hi(t, e) {
  t === void 0 && (t = {}), e === void 0 && (e = !0);
  const i = {
    on: {}
  }, s = {}, n = {};
  Y(i, ue), i._emitClasses = !0, i.init = !1;
  const r = {}, o = _e.map((a) => a.replace(/_/, "")), l = Object.assign({}, t);
  return Object.keys(l).forEach((a) => {
    typeof t[a] > "u" || (o.indexOf(a) >= 0 ? W(t[a]) ? (i[a] = {}, n[a] = {}, Y(i[a], t[a]), Y(n[a], t[a])) : (i[a] = t[a], n[a] = t[a]) : a.search(/on[A-Z]/) === 0 && typeof t[a] == "function" ? e ? s[`${a[2].toLowerCase()}${a.substr(3)}`] = t[a] : i.on[`${a[2].toLowerCase()}${a.substr(3)}`] = t[a] : r[a] = t[a]);
  }), ["navigation", "pagination", "scrollbar"].forEach((a) => {
    i[a] === !0 && (i[a] = {}), i[a] === !1 && delete i[a];
  }), {
    params: i,
    passedParams: n,
    rest: r,
    events: s
  };
}
function gi(t, e) {
  let {
    el: i,
    nextEl: s,
    prevEl: n,
    paginationEl: r,
    scrollbarEl: o,
    swiper: l
  } = t;
  Ge(e) && s && n && (l.params.navigation.nextEl = s, l.originalParams.navigation.nextEl = s, l.params.navigation.prevEl = n, l.originalParams.navigation.prevEl = n), Ve(e) && r && (l.params.pagination.el = r, l.originalParams.pagination.el = r), De(e) && o && (l.params.scrollbar.el = o, l.originalParams.scrollbar.el = o), l.init(i);
}
function vi(t, e, i, s, n) {
  const r = [];
  if (!e) return r;
  const o = (a) => {
    r.indexOf(a) < 0 && r.push(a);
  };
  if (i && s) {
    const a = s.map(n), d = i.map(n);
    a.join("") !== d.join("") && o("children"), s.length !== i.length && o("children");
  }
  return _e.filter((a) => a[0] === "_").map((a) => a.replace(/_/, "")).forEach((a) => {
    if (a in t && a in e)
      if (W(t[a]) && W(e[a])) {
        const d = Object.keys(t[a]), c = Object.keys(e[a]);
        d.length !== c.length ? o(a) : (d.forEach((f) => {
          t[a][f] !== e[a][f] && o(a);
        }), c.forEach((f) => {
          t[a][f] !== e[a][f] && o(a);
        }));
      } else t[a] !== e[a] && o(a);
  }), r;
}
const wi = (t) => {
  !t || t.destroyed || !t.params.virtual || t.params.virtual && !t.params.virtual.enabled || (t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.emit("_virtualUpdated"), t.parallax && t.params.parallax && t.params.parallax.enabled && t.parallax.setTranslate());
};
function ee() {
  return ee = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var i = arguments[e];
      for (var s in i)
        Object.prototype.hasOwnProperty.call(i, s) && (t[s] = i[s]);
    }
    return t;
  }, ee.apply(this, arguments);
}
function Ne(t) {
  return t.type && t.type.displayName && t.type.displayName.includes("SwiperSlide");
}
function Fe(t) {
  const e = [];
  return A.Children.toArray(t).forEach((i) => {
    Ne(i) ? e.push(i) : i.props && i.props.children && Fe(i.props.children).forEach((s) => e.push(s));
  }), e;
}
function Si(t) {
  const e = [], i = {
    "container-start": [],
    "container-end": [],
    "wrapper-start": [],
    "wrapper-end": []
  };
  return A.Children.toArray(t).forEach((s) => {
    if (Ne(s))
      e.push(s);
    else if (s.props && s.props.slot && i[s.props.slot])
      i[s.props.slot].push(s);
    else if (s.props && s.props.children) {
      const n = Fe(s.props.children);
      n.length > 0 ? n.forEach((r) => e.push(r)) : i["container-end"].push(s);
    } else
      i["container-end"].push(s);
  }), {
    slides: e,
    slots: i
  };
}
function Ti(t, e, i) {
  if (!i) return null;
  const s = (c) => {
    let f = c;
    return c < 0 ? f = e.length + c : f >= e.length && (f = f - e.length), f;
  }, n = t.isHorizontal() ? {
    [t.rtlTranslate ? "right" : "left"]: `${i.offset}px`
  } : {
    top: `${i.offset}px`
  }, {
    from: r,
    to: o
  } = i, l = t.params.loop ? -e.length : 0, a = t.params.loop ? e.length * 2 : e.length, d = [];
  for (let c = l; c < a; c += 1)
    c >= r && c <= o && d.push(e[s(c)]);
  return d.map((c, f) => /* @__PURE__ */ A.cloneElement(c, {
    swiper: t,
    style: n,
    key: c.props.virtualIndex || c.key || `slide-${f}`
  }));
}
function X(t, e) {
  return typeof window > "u" ? ae(t, e) : je(t, e);
}
const Ee = /* @__PURE__ */ Pe(null), bi = /* @__PURE__ */ Pe(null), Re = /* @__PURE__ */ ye(function(t, e) {
  let {
    className: i,
    tag: s = "div",
    wrapperTag: n = "div",
    children: r,
    onSwiper: o,
    ...l
  } = t === void 0 ? {} : t, a = !1;
  const [d, c] = q("swiper"), [f, u] = q(null), [p, m] = q(!1), v = R(!1), P = R(null), h = R(null), S = R(null), g = R(null), E = R(null), T = R(null), I = R(null), M = R(null), {
    params: y,
    passedParams: b,
    rest: w,
    events: x
  } = hi(l), {
    slides: C,
    slots: z
  } = Si(r), B = () => {
    m(!p);
  };
  Object.assign(y.on, {
    _containerClasses(L, F) {
      c(F);
    }
  });
  const N = () => {
    Object.assign(y.on, x), a = !0;
    const L = {
      ...y
    };
    if (delete L.wrapperClass, h.current = new me(L), h.current.virtual && h.current.params.virtual.enabled) {
      h.current.virtual.slides = C;
      const F = {
        cache: !1,
        slides: C,
        renderExternal: u,
        renderExternalUpdate: !1
      };
      Y(h.current.params.virtual, F), Y(h.current.originalParams.virtual, F);
    }
  };
  P.current || N(), h.current && h.current.on("_beforeBreakpoint", B);
  const O = () => {
    a || !x || !h.current || Object.keys(x).forEach((L) => {
      h.current.on(L, x[L]);
    });
  }, _ = () => {
    !x || !h.current || Object.keys(x).forEach((L) => {
      h.current.off(L, x[L]);
    });
  };
  ae(() => () => {
    h.current && h.current.off("_beforeBreakpoint", B);
  }), ae(() => {
    !v.current && h.current && (h.current.emitSlidesClasses(), v.current = !0);
  }), X(() => {
    if (e && (e.current = P.current), !!P.current)
      return h.current.destroyed && N(), gi({
        el: P.current,
        nextEl: E.current,
        prevEl: T.current,
        paginationEl: I.current,
        scrollbarEl: M.current,
        swiper: h.current
      }, y), o && !h.current.destroyed && o(h.current), () => {
        h.current && !h.current.destroyed && h.current.destroy(!0, !1);
      };
  }, []), X(() => {
    O();
    const L = vi(b, S.current, C, g.current, (F) => F.key);
    return S.current = b, g.current = C, L.length && h.current && !h.current.destroyed && mi({
      swiper: h.current,
      slides: C,
      passedParams: b,
      changedParams: L,
      nextEl: E.current,
      prevEl: T.current,
      scrollbarEl: M.current,
      paginationEl: I.current
    }), () => {
      _();
    };
  }), X(() => {
    wi(h.current);
  }, [f]);
  function G() {
    return y.virtual ? Ti(h.current, C, f) : C.map((L, F) => /* @__PURE__ */ A.cloneElement(L, {
      swiper: h.current,
      swiperSlideIndex: F
    }));
  }
  return /* @__PURE__ */ A.createElement(s, ee({
    ref: P,
    className: Be(`${d}${i ? ` ${i}` : ""}`)
  }, w), /* @__PURE__ */ A.createElement(bi.Provider, {
    value: h.current
  }, z["container-start"], /* @__PURE__ */ A.createElement(n, {
    className: pi(y.wrapperClass)
  }, z["wrapper-start"], G(), z["wrapper-end"]), Ge(y) && /* @__PURE__ */ A.createElement(A.Fragment, null, /* @__PURE__ */ A.createElement("div", {
    ref: T,
    className: "swiper-button-prev"
  }), /* @__PURE__ */ A.createElement("div", {
    ref: E,
    className: "swiper-button-next"
  })), De(y) && /* @__PURE__ */ A.createElement("div", {
    ref: M,
    className: "swiper-scrollbar"
  }), Ve(y) && /* @__PURE__ */ A.createElement("div", {
    ref: I,
    className: "swiper-pagination"
  }), z["container-end"]));
});
Re.displayName = "Swiper";
const $e = /* @__PURE__ */ ye(function(t, e) {
  let {
    tag: i = "div",
    children: s,
    className: n = "",
    swiper: r,
    zoom: o,
    lazy: l,
    virtualIndex: a,
    swiperSlideIndex: d,
    ...c
  } = t === void 0 ? {} : t;
  const f = R(null), [u, p] = q("swiper-slide"), [m, v] = q(!1);
  function P(E, T, I) {
    T === f.current && p(I);
  }
  X(() => {
    if (typeof d < "u" && (f.current.swiperSlideIndex = d), e && (e.current = f.current), !(!f.current || !r)) {
      if (r.destroyed) {
        u !== "swiper-slide" && p("swiper-slide");
        return;
      }
      return r.on("_slideClass", P), () => {
        r && r.off("_slideClass", P);
      };
    }
  }), X(() => {
    r && f.current && !r.destroyed && p(r.getSlideClasses(f.current));
  }, [r]);
  const h = {
    isActive: u.indexOf("swiper-slide-active") >= 0,
    isVisible: u.indexOf("swiper-slide-visible") >= 0,
    isPrev: u.indexOf("swiper-slide-prev") >= 0,
    isNext: u.indexOf("swiper-slide-next") >= 0
  }, S = () => typeof s == "function" ? s(h) : s, g = () => {
    v(!0);
  };
  return /* @__PURE__ */ A.createElement(i, ee({
    ref: f,
    className: Be(`${u}${n ? ` ${n}` : ""}`),
    "data-swiper-slide-index": a,
    onLoad: g
  }, c), o && /* @__PURE__ */ A.createElement(Ee.Provider, {
    value: h
  }, /* @__PURE__ */ A.createElement("div", {
    className: "swiper-zoom-container",
    "data-swiper-zoom": typeof o == "number" ? o : void 0
  }, S(), l && !m && /* @__PURE__ */ A.createElement("div", {
    className: "swiper-lazy-preloader"
  }))), !o && /* @__PURE__ */ A.createElement(Ee.Provider, {
    value: h
  }, S(), l && !m && /* @__PURE__ */ A.createElement("div", {
    className: "swiper-lazy-preloader"
  })));
});
$e.displayName = "SwiperSlide";
const Ci = Object.assign(Ei, {
  Slide: $e
}), xi = "sliderTestId", Ei = ({ spaceBetween: t, slidesPerView: e, block: i, breakpoints: s, modules: n, children: r }) => /* @__PURE__ */ We(
  Re,
  {
    className: Ye(i, "slider"),
    "data-testid": xi,
    modules: n,
    spaceBetween: t,
    slidesPerView: e,
    breakpoints: s,
    children: r
  }
);
export {
  Ei as S,
  xi as SLIDER_TEST_ID,
  Ci as Slider
};
//# sourceMappingURL=constants.js.map
