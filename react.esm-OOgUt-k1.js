import * as Tv from "react";
import Uy from "react";
import { g as n1, l as di } from "./index-EpqMzDvy.js";
var by = { exports: {} }, Un = {}, Ty = { exports: {} }, ka = {}, Cy = { exports: {} }, ob = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mw;
function wM() {
  return mw || (mw = 1, function(c) {
    function p(Ee, Be) {
      var Te = Ee.length;
      Ee.push(Be);
      e: for (; 0 < Te; ) {
        var vt = Te - 1 >>> 1, mt = Ee[vt];
        if (0 < O(mt, Be)) Ee[vt] = Be, Ee[Te] = mt, Te = vt;
        else break e;
      }
    }
    function m(Ee) {
      return Ee.length === 0 ? null : Ee[0];
    }
    function x(Ee) {
      if (Ee.length === 0) return null;
      var Be = Ee[0], Te = Ee.pop();
      if (Te !== Be) {
        Ee[0] = Te;
        e: for (var vt = 0, mt = Ee.length, gn = mt >>> 1; vt < gn; ) {
          var Vt = 2 * (vt + 1) - 1, cn = Ee[Vt], Jt = Vt + 1, an = Ee[Jt];
          if (0 > O(cn, Te)) Jt < mt && 0 > O(an, cn) ? (Ee[vt] = an, Ee[Jt] = Te, vt = Jt) : (Ee[vt] = cn, Ee[Vt] = Te, vt = Vt);
          else if (Jt < mt && 0 > O(an, Te)) Ee[vt] = an, Ee[Jt] = Te, vt = Jt;
          else break e;
        }
      }
      return Be;
    }
    function O(Ee, Be) {
      var Te = Ee.sortIndex - Be.sortIndex;
      return Te !== 0 ? Te : Ee.id - Be.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var A = performance;
      c.unstable_now = function() {
        return A.now();
      };
    } else {
      var y = Date, U = y.now();
      c.unstable_now = function() {
        return y.now() - U;
      };
    }
    var R = [], T = [], _ = 1, C = null, D = 3, z = !1, J = !1, W = !1, le = typeof setTimeout == "function" ? setTimeout : null, L = typeof clearTimeout == "function" ? clearTimeout : null, ue = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function oe(Ee) {
      for (var Be = m(T); Be !== null; ) {
        if (Be.callback === null) x(T);
        else if (Be.startTime <= Ee) x(T), Be.sortIndex = Be.expirationTime, p(R, Be);
        else break;
        Be = m(T);
      }
    }
    function me(Ee) {
      if (W = !1, oe(Ee), !J) if (m(R) !== null) J = !0, ut(Se);
      else {
        var Be = m(T);
        Be !== null && dt(me, Be.startTime - Ee);
      }
    }
    function Se(Ee, Be) {
      J = !1, W && (W = !1, L(ce), ce = -1), z = !0;
      var Te = D;
      try {
        for (oe(Be), C = m(R); C !== null && (!(C.expirationTime > Be) || Ee && !He()); ) {
          var vt = C.callback;
          if (typeof vt == "function") {
            C.callback = null, D = C.priorityLevel;
            var mt = vt(C.expirationTime <= Be);
            Be = c.unstable_now(), typeof mt == "function" ? C.callback = mt : C === m(R) && x(R), oe(Be);
          } else x(R);
          C = m(R);
        }
        if (C !== null) var gn = !0;
        else {
          var Vt = m(T);
          Vt !== null && dt(me, Vt.startTime - Be), gn = !1;
        }
        return gn;
      } finally {
        C = null, D = Te, z = !1;
      }
    }
    var V = !1, H = null, ce = -1, ke = 5, Ue = -1;
    function He() {
      return !(c.unstable_now() - Ue < ke);
    }
    function Ne() {
      if (H !== null) {
        var Ee = c.unstable_now();
        Ue = Ee;
        var Be = !0;
        try {
          Be = H(!0, Ee);
        } finally {
          Be ? ne() : (V = !1, H = null);
        }
      } else V = !1;
    }
    var ne;
    if (typeof ue == "function") ne = function() {
      ue(Ne);
    };
    else if (typeof MessageChannel < "u") {
      var xe = new MessageChannel(), gt = xe.port2;
      xe.port1.onmessage = Ne, ne = function() {
        gt.postMessage(null);
      };
    } else ne = function() {
      le(Ne, 0);
    };
    function ut(Ee) {
      H = Ee, V || (V = !0, ne());
    }
    function dt(Ee, Be) {
      ce = le(function() {
        Ee(c.unstable_now());
      }, Be);
    }
    c.unstable_IdlePriority = 5, c.unstable_ImmediatePriority = 1, c.unstable_LowPriority = 4, c.unstable_NormalPriority = 3, c.unstable_Profiling = null, c.unstable_UserBlockingPriority = 2, c.unstable_cancelCallback = function(Ee) {
      Ee.callback = null;
    }, c.unstable_continueExecution = function() {
      J || z || (J = !0, ut(Se));
    }, c.unstable_forceFrameRate = function(Ee) {
      0 > Ee || 125 < Ee ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ke = 0 < Ee ? Math.floor(1e3 / Ee) : 5;
    }, c.unstable_getCurrentPriorityLevel = function() {
      return D;
    }, c.unstable_getFirstCallbackNode = function() {
      return m(R);
    }, c.unstable_next = function(Ee) {
      switch (D) {
        case 1:
        case 2:
        case 3:
          var Be = 3;
          break;
        default:
          Be = D;
      }
      var Te = D;
      D = Be;
      try {
        return Ee();
      } finally {
        D = Te;
      }
    }, c.unstable_pauseExecution = function() {
    }, c.unstable_requestPaint = function() {
    }, c.unstable_runWithPriority = function(Ee, Be) {
      switch (Ee) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          Ee = 3;
      }
      var Te = D;
      D = Ee;
      try {
        return Be();
      } finally {
        D = Te;
      }
    }, c.unstable_scheduleCallback = function(Ee, Be, Te) {
      var vt = c.unstable_now();
      switch (typeof Te == "object" && Te !== null ? (Te = Te.delay, Te = typeof Te == "number" && 0 < Te ? vt + Te : vt) : Te = vt, Ee) {
        case 1:
          var mt = -1;
          break;
        case 2:
          mt = 250;
          break;
        case 5:
          mt = 1073741823;
          break;
        case 4:
          mt = 1e4;
          break;
        default:
          mt = 5e3;
      }
      return mt = Te + mt, Ee = { id: _++, callback: Be, priorityLevel: Ee, startTime: Te, expirationTime: mt, sortIndex: -1 }, Te > vt ? (Ee.sortIndex = Te, p(T, Ee), m(R) === null && Ee === m(T) && (W ? (L(ce), ce = -1) : W = !0, dt(me, Te - vt))) : (Ee.sortIndex = mt, p(R, Ee), J || z || (J = !0, ut(Se))), Ee;
    }, c.unstable_shouldYield = He, c.unstable_wrapCallback = function(Ee) {
      var Be = D;
      return function() {
        var Te = D;
        D = Be;
        try {
          return Ee.apply(this, arguments);
        } finally {
          D = Te;
        }
      };
    };
  }(ob)), ob;
}
var sb = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yw;
function RM() {
  return yw || (yw = 1, function(c) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var p = !1, m = 5;
      function x(b, Q) {
        var Z = b.length;
        b.push(Q), y(b, Q, Z);
      }
      function O(b) {
        return b.length === 0 ? null : b[0];
      }
      function A(b) {
        if (b.length === 0)
          return null;
        var Q = b[0], Z = b.pop();
        return Z !== Q && (b[0] = Z, U(b, Z, 0)), Q;
      }
      function y(b, Q, Z) {
        for (var Ce = Z; Ce > 0; ) {
          var Qe = Ce - 1 >>> 1, it = b[Qe];
          if (R(it, Q) > 0)
            b[Qe] = Q, b[Ce] = it, Ce = Qe;
          else
            return;
        }
      }
      function U(b, Q, Z) {
        for (var Ce = Z, Qe = b.length, it = Qe >>> 1; Ce < it; ) {
          var Ve = (Ce + 1) * 2 - 1, st = b[Ve], Rt = Ve + 1, xt = b[Rt];
          if (R(st, Q) < 0)
            Rt < Qe && R(xt, st) < 0 ? (b[Ce] = xt, b[Rt] = Q, Ce = Rt) : (b[Ce] = st, b[Ve] = Q, Ce = Ve);
          else if (Rt < Qe && R(xt, Q) < 0)
            b[Ce] = xt, b[Rt] = Q, Ce = Rt;
          else
            return;
        }
      }
      function R(b, Q) {
        var Z = b.sortIndex - Q.sortIndex;
        return Z !== 0 ? Z : b.id - Q.id;
      }
      var T = 1, _ = 2, C = 3, D = 4, z = 5;
      function J(b, Q) {
      }
      var W = typeof performance == "object" && typeof performance.now == "function";
      if (W) {
        var le = performance;
        c.unstable_now = function() {
          return le.now();
        };
      } else {
        var L = Date, ue = L.now();
        c.unstable_now = function() {
          return L.now() - ue;
        };
      }
      var oe = 1073741823, me = -1, Se = 250, V = 5e3, H = 1e4, ce = oe, ke = [], Ue = [], He = 1, Ne = null, ne = C, xe = !1, gt = !1, ut = !1, dt = typeof setTimeout == "function" ? setTimeout : null, Ee = typeof clearTimeout == "function" ? clearTimeout : null, Be = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function Te(b) {
        for (var Q = O(Ue); Q !== null; ) {
          if (Q.callback === null)
            A(Ue);
          else if (Q.startTime <= b)
            A(Ue), Q.sortIndex = Q.expirationTime, x(ke, Q);
          else
            return;
          Q = O(Ue);
        }
      }
      function vt(b) {
        if (ut = !1, Te(b), !gt)
          if (O(ke) !== null)
            gt = !0, $n(mt);
          else {
            var Q = O(Ue);
            Q !== null && lr(vt, Q.startTime - b);
          }
      }
      function mt(b, Q) {
        gt = !1, ut && (ut = !1, ca()), xe = !0;
        var Z = ne;
        try {
          var Ce;
          if (!p) return gn(b, Q);
        } finally {
          Ne = null, ne = Z, xe = !1;
        }
      }
      function gn(b, Q) {
        var Z = Q;
        for (Te(Z), Ne = O(ke); Ne !== null && !(Ne.expirationTime > Z && (!b || dr())); ) {
          var Ce = Ne.callback;
          if (typeof Ce == "function") {
            Ne.callback = null, ne = Ne.priorityLevel;
            var Qe = Ne.expirationTime <= Z, it = Ce(Qe);
            Z = c.unstable_now(), typeof it == "function" ? Ne.callback = it : Ne === O(ke) && A(ke), Te(Z);
          } else
            A(ke);
          Ne = O(ke);
        }
        if (Ne !== null)
          return !0;
        var Ve = O(Ue);
        return Ve !== null && lr(vt, Ve.startTime - Z), !1;
      }
      function Vt(b, Q) {
        switch (b) {
          case T:
          case _:
          case C:
          case D:
          case z:
            break;
          default:
            b = C;
        }
        var Z = ne;
        ne = b;
        try {
          return Q();
        } finally {
          ne = Z;
        }
      }
      function cn(b) {
        var Q;
        switch (ne) {
          case T:
          case _:
          case C:
            Q = C;
            break;
          default:
            Q = ne;
            break;
        }
        var Z = ne;
        ne = Q;
        try {
          return b();
        } finally {
          ne = Z;
        }
      }
      function Jt(b) {
        var Q = ne;
        return function() {
          var Z = ne;
          ne = Q;
          try {
            return b.apply(this, arguments);
          } finally {
            ne = Z;
          }
        };
      }
      function an(b, Q, Z) {
        var Ce = c.unstable_now(), Qe;
        if (typeof Z == "object" && Z !== null) {
          var it = Z.delay;
          typeof it == "number" && it > 0 ? Qe = Ce + it : Qe = Ce;
        } else
          Qe = Ce;
        var Ve;
        switch (b) {
          case T:
            Ve = me;
            break;
          case _:
            Ve = Se;
            break;
          case z:
            Ve = ce;
            break;
          case D:
            Ve = H;
            break;
          case C:
          default:
            Ve = V;
            break;
        }
        var st = Qe + Ve, Rt = {
          id: He++,
          callback: Q,
          priorityLevel: b,
          startTime: Qe,
          expirationTime: st,
          sortIndex: -1
        };
        return Qe > Ce ? (Rt.sortIndex = Qe, x(Ue, Rt), O(ke) === null && Rt === O(Ue) && (ut ? ca() : ut = !0, lr(vt, Qe - Ce))) : (Rt.sortIndex = st, x(ke, Rt), !gt && !xe && (gt = !0, $n(mt))), Rt;
      }
      function En() {
      }
      function P() {
        !gt && !xe && (gt = !0, $n(mt));
      }
      function Le() {
        return O(ke);
      }
      function fe(b) {
        b.callback = null;
      }
      function rt() {
        return ne;
      }
      var Ke = !1, ot = null, Ct = -1, wt = m, ln = -1;
      function dr() {
        var b = c.unstable_now() - ln;
        return !(b < wt);
      }
      function oa() {
      }
      function sa(b) {
        if (b < 0 || b > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        b > 0 ? wt = Math.floor(1e3 / b) : wt = m;
      }
      var In = function() {
        if (ot !== null) {
          var b = c.unstable_now();
          ln = b;
          var Q = !0, Z = !0;
          try {
            Z = ot(Q, b);
          } finally {
            Z ? Vn() : (Ke = !1, ot = null);
          }
        } else
          Ke = !1;
      }, Vn;
      if (typeof Be == "function")
        Vn = function() {
          Be(In);
        };
      else if (typeof MessageChannel < "u") {
        var ir = new MessageChannel(), Ma = ir.port2;
        ir.port1.onmessage = In, Vn = function() {
          Ma.postMessage(null);
        };
      } else
        Vn = function() {
          dt(In, 0);
        };
      function $n(b) {
        ot = b, Ke || (Ke = !0, Vn());
      }
      function lr(b, Q) {
        Ct = dt(function() {
          b(c.unstable_now());
        }, Q);
      }
      function ca() {
        Ee(Ct), Ct = -1;
      }
      var pr = oa, vi = null;
      c.unstable_IdlePriority = z, c.unstable_ImmediatePriority = T, c.unstable_LowPriority = D, c.unstable_NormalPriority = C, c.unstable_Profiling = vi, c.unstable_UserBlockingPriority = _, c.unstable_cancelCallback = fe, c.unstable_continueExecution = P, c.unstable_forceFrameRate = sa, c.unstable_getCurrentPriorityLevel = rt, c.unstable_getFirstCallbackNode = Le, c.unstable_next = cn, c.unstable_pauseExecution = En, c.unstable_requestPaint = pr, c.unstable_runWithPriority = Vt, c.unstable_scheduleCallback = an, c.unstable_shouldYield = dr, c.unstable_wrapCallback = Jt, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(sb)), sb;
}
var gw;
function r1() {
  return gw || (gw = 1, process.env.NODE_ENV === "production" ? Cy.exports = wM() : Cy.exports = RM()), Cy.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ew;
function xM() {
  if (Ew) return ka;
  Ew = 1;
  var c = Uy, p = r1();
  function m(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var x = /* @__PURE__ */ new Set(), O = {};
  function A(n, r) {
    y(n, r), y(n + "Capture", r);
  }
  function y(n, r) {
    for (O[n] = r, n = 0; n < r.length; n++) x.add(r[n]);
  }
  var U = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), R = Object.prototype.hasOwnProperty, T = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, _ = {}, C = {};
  function D(n) {
    return R.call(C, n) ? !0 : R.call(_, n) ? !1 : T.test(n) ? C[n] = !0 : (_[n] = !0, !1);
  }
  function z(n, r, l, o) {
    if (l !== null && l.type === 0) return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function J(n, r, l, o) {
    if (r === null || typeof r > "u" || z(n, r, l, o)) return !0;
    if (o) return !1;
    if (l !== null) switch (l.type) {
      case 3:
        return !r;
      case 4:
        return r === !1;
      case 5:
        return isNaN(r);
      case 6:
        return isNaN(r) || 1 > r;
    }
    return !1;
  }
  function W(n, r, l, o, f, v, E) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = f, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = v, this.removeEmptyString = E;
  }
  var le = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    le[n] = new W(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    le[r] = new W(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    le[n] = new W(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    le[n] = new W(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    le[n] = new W(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    le[n] = new W(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    le[n] = new W(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    le[n] = new W(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    le[n] = new W(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var L = /[\-:]([a-z])/g;
  function ue(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      L,
      ue
    );
    le[r] = new W(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(L, ue);
    le[r] = new W(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(L, ue);
    le[r] = new W(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    le[n] = new W(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), le.xlinkHref = new W("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    le[n] = new W(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function oe(n, r, l, o) {
    var f = le.hasOwnProperty(r) ? le[r] : null;
    (f !== null ? f.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (J(r, l, f, o) && (l = null), o || f === null ? D(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : f.mustUseProperty ? n[f.propertyName] = l === null ? f.type === 3 ? !1 : "" : l : (r = f.attributeName, o = f.attributeNamespace, l === null ? n.removeAttribute(r) : (f = f.type, l = f === 3 || f === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var me = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Se = Symbol.for("react.element"), V = Symbol.for("react.portal"), H = Symbol.for("react.fragment"), ce = Symbol.for("react.strict_mode"), ke = Symbol.for("react.profiler"), Ue = Symbol.for("react.provider"), He = Symbol.for("react.context"), Ne = Symbol.for("react.forward_ref"), ne = Symbol.for("react.suspense"), xe = Symbol.for("react.suspense_list"), gt = Symbol.for("react.memo"), ut = Symbol.for("react.lazy"), dt = Symbol.for("react.offscreen"), Ee = Symbol.iterator;
  function Be(n) {
    return n === null || typeof n != "object" ? null : (n = Ee && n[Ee] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var Te = Object.assign, vt;
  function mt(n) {
    if (vt === void 0) try {
      throw Error();
    } catch (l) {
      var r = l.stack.trim().match(/\n( *(at )?)/);
      vt = r && r[1] || "";
    }
    return `
` + vt + n;
  }
  var gn = !1;
  function Vt(n, r) {
    if (!n || gn) return "";
    gn = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r) if (r = function() {
        throw Error();
      }, Object.defineProperty(r.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(r, []);
        } catch (K) {
          var o = K;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (K) {
          o = K;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (K) {
          o = K;
        }
        n();
      }
    } catch (K) {
      if (K && o && typeof K.stack == "string") {
        for (var f = K.stack.split(`
`), v = o.stack.split(`
`), E = f.length - 1, k = v.length - 1; 1 <= E && 0 <= k && f[E] !== v[k]; ) k--;
        for (; 1 <= E && 0 <= k; E--, k--) if (f[E] !== v[k]) {
          if (E !== 1 || k !== 1)
            do
              if (E--, k--, 0 > k || f[E] !== v[k]) {
                var N = `
` + f[E].replace(" at new ", " at ");
                return n.displayName && N.includes("<anonymous>") && (N = N.replace("<anonymous>", n.displayName)), N;
              }
            while (1 <= E && 0 <= k);
          break;
        }
      }
    } finally {
      gn = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? mt(n) : "";
  }
  function cn(n) {
    switch (n.tag) {
      case 5:
        return mt(n.type);
      case 16:
        return mt("Lazy");
      case 13:
        return mt("Suspense");
      case 19:
        return mt("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Vt(n.type, !1), n;
      case 11:
        return n = Vt(n.type.render, !1), n;
      case 1:
        return n = Vt(n.type, !0), n;
      default:
        return "";
    }
  }
  function Jt(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case H:
        return "Fragment";
      case V:
        return "Portal";
      case ke:
        return "Profiler";
      case ce:
        return "StrictMode";
      case ne:
        return "Suspense";
      case xe:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case He:
        return (n.displayName || "Context") + ".Consumer";
      case Ue:
        return (n._context.displayName || "Context") + ".Provider";
      case Ne:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case gt:
        return r = n.displayName || null, r !== null ? r : Jt(n.type) || "Memo";
      case ut:
        r = n._payload, n = n._init;
        try {
          return Jt(n(r));
        } catch {
        }
    }
    return null;
  }
  function an(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return Jt(r);
      case 8:
        return r === ce ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function") return r.displayName || r.name || null;
        if (typeof r == "string") return r;
    }
    return null;
  }
  function En(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function P(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Le(n) {
    var r = P(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var f = l.get, v = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return f.call(this);
      }, set: function(E) {
        o = "" + E, v.call(this, E);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return o;
      }, setValue: function(E) {
        o = "" + E;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function fe(n) {
    n._valueTracker || (n._valueTracker = Le(n));
  }
  function rt(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var l = r.getValue(), o = "";
    return n && (o = P(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function Ke(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function ot(n, r) {
    var l = r.checked;
    return Te({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function Ct(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = En(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function wt(n, r) {
    r = r.checked, r != null && oe(n, "checked", r, !1);
  }
  function ln(n, r) {
    wt(n, r);
    var l = En(r.value), o = r.type;
    if (l != null) o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? oa(n, r.type, l) : r.hasOwnProperty("defaultValue") && oa(n, r.type, En(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function dr(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function oa(n, r, l) {
    (r !== "number" || Ke(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var sa = Array.isArray;
  function In(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var f = 0; f < l.length; f++) r["$" + l[f]] = !0;
      for (l = 0; l < n.length; l++) f = r.hasOwnProperty("$" + n[l].value), n[l].selected !== f && (n[l].selected = f), f && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + En(l), r = null, f = 0; f < n.length; f++) {
        if (n[f].value === l) {
          n[f].selected = !0, o && (n[f].defaultSelected = !0);
          return;
        }
        r !== null || n[f].disabled || (r = n[f]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Vn(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(m(91));
    return Te({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function ir(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null) throw Error(m(92));
        if (sa(l)) {
          if (1 < l.length) throw Error(m(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: En(l) };
  }
  function Ma(n, r) {
    var l = En(r.value), o = En(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function $n(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function lr(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function ca(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? lr(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var pr, vi = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, f) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, f);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (pr = pr || document.createElement("div"), pr.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = pr.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function b(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var Q = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, Z = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Q).forEach(function(n) {
    Z.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), Q[r] = Q[n];
    });
  });
  function Ce(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || Q.hasOwnProperty(n) && Q[n] ? ("" + r).trim() : r + "px";
  }
  function Qe(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var o = l.indexOf("--") === 0, f = Ce(l, r[l], o);
      l === "float" && (l = "cssFloat"), o ? n.setProperty(l, f) : n[l] = f;
    }
  }
  var it = Te({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Ve(n, r) {
    if (r) {
      if (it[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(m(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(m(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(m(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(m(62));
    }
  }
  function st(n, r) {
    if (n.indexOf("-") === -1) return typeof r.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Rt = null;
  function xt(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var en = null, qi = null, ja = null;
  function hi(n) {
    if (n = Ye(n)) {
      if (typeof en != "function") throw Error(m(280));
      var r = n.stateNode;
      r && (r = fn(r), en(n.stateNode, n.type, r));
    }
  }
  function uc(n) {
    qi ? ja ? ja.push(n) : ja = [n] : qi = n;
  }
  function Nu() {
    if (qi) {
      var n = qi, r = ja;
      if (ja = qi = null, hi(n), r) for (n = 0; n < r.length; n++) hi(r[n]);
    }
  }
  function Uu(n, r) {
    return n(r);
  }
  function Wi() {
  }
  var zu = !1;
  function zo(n, r, l) {
    if (zu) return n(r, l);
    zu = !0;
    try {
      return Uu(n, r, l);
    } finally {
      zu = !1, (qi !== null || ja !== null) && (Wi(), Nu());
    }
  }
  function Va(n, r) {
    var l = n.stateNode;
    if (l === null) return null;
    var o = fn(l);
    if (o === null) return null;
    l = o[r];
    e: switch (r) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (o = !o.disabled) || (n = n.type, o = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !o;
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (l && typeof l != "function") throw Error(m(231, r, typeof l));
    return l;
  }
  var $a = !1;
  if (U) try {
    var kr = {};
    Object.defineProperty(kr, "passive", { get: function() {
      $a = !0;
    } }), window.addEventListener("test", kr, kr), window.removeEventListener("test", kr, kr);
  } catch {
    $a = !1;
  }
  function Qi(n, r, l, o, f, v, E, k, N) {
    var K = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, K);
    } catch (ve) {
      this.onError(ve);
    }
  }
  var mi = !1, Gi = null, yi = !1, Ol = null, Ki = { onError: function(n) {
    mi = !0, Gi = n;
  } };
  function Iu(n, r, l, o, f, v, E, k, N) {
    mi = !1, Gi = null, Qi.apply(Ki, arguments);
  }
  function Fu(n, r, l, o, f, v, E, k, N) {
    if (Iu.apply(this, arguments), mi) {
      if (mi) {
        var K = Gi;
        mi = !1, Gi = null;
      } else throw Error(m(198));
      yi || (yi = !0, Ol = K);
    }
  }
  function _r(n) {
    var r = n, l = n;
    if (n.alternate) for (; r.return; ) r = r.return;
    else {
      n = r;
      do
        r = n, (r.flags & 4098) !== 0 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function Fn(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function Io(n) {
    if (_r(n) !== n) throw Error(m(188));
  }
  function cd(n) {
    var r = n.alternate;
    if (!r) {
      if (r = _r(n), r === null) throw Error(m(188));
      return r !== n ? null : n;
    }
    for (var l = n, o = r; ; ) {
      var f = l.return;
      if (f === null) break;
      var v = f.alternate;
      if (v === null) {
        if (o = f.return, o !== null) {
          l = o;
          continue;
        }
        break;
      }
      if (f.child === v.child) {
        for (v = f.child; v; ) {
          if (v === l) return Io(f), n;
          if (v === o) return Io(f), r;
          v = v.sibling;
        }
        throw Error(m(188));
      }
      if (l.return !== o.return) l = f, o = v;
      else {
        for (var E = !1, k = f.child; k; ) {
          if (k === l) {
            E = !0, l = f, o = v;
            break;
          }
          if (k === o) {
            E = !0, o = f, l = v;
            break;
          }
          k = k.sibling;
        }
        if (!E) {
          for (k = v.child; k; ) {
            if (k === l) {
              E = !0, l = v, o = f;
              break;
            }
            if (k === o) {
              E = !0, o = v, l = f;
              break;
            }
            k = k.sibling;
          }
          if (!E) throw Error(m(189));
        }
      }
      if (l.alternate !== o) throw Error(m(190));
    }
    if (l.tag !== 3) throw Error(m(188));
    return l.stateNode.current === l ? n : r;
  }
  function Fo(n) {
    return n = cd(n), n !== null ? oc(n) : null;
  }
  function oc(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = oc(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var sc = p.unstable_scheduleCallback, cc = p.unstable_cancelCallback, Bo = p.unstable_shouldYield, fd = p.unstable_requestPaint, It = p.unstable_now, ht = p.unstable_getCurrentPriorityLevel, gi = p.unstable_ImmediatePriority, Bu = p.unstable_UserBlockingPriority, Al = p.unstable_NormalPriority, M = p.unstable_LowPriority, re = p.unstable_IdlePriority, ae = null, se = null;
  function Ze(n) {
    if (se && typeof se.onCommitFiberRoot == "function") try {
      se.onCommitFiberRoot(ae, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var nt = Math.clz32 ? Math.clz32 : ur, Kt = Math.log, Mr = Math.LN2;
  function ur(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Kt(n) / Mr | 0) | 0;
  }
  var Sn = 64, Ft = 4194304;
  function Oa(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function Ya(n, r) {
    var l = n.pendingLanes;
    if (l === 0) return 0;
    var o = 0, f = n.suspendedLanes, v = n.pingedLanes, E = l & 268435455;
    if (E !== 0) {
      var k = E & ~f;
      k !== 0 ? o = Oa(k) : (v &= E, v !== 0 && (o = Oa(v)));
    } else E = l & ~f, E !== 0 ? o = Oa(E) : v !== 0 && (o = Oa(v));
    if (o === 0) return 0;
    if (r !== 0 && r !== o && (r & f) === 0 && (f = o & -o, v = r & -r, f >= v || f === 16 && (v & 4194240) !== 0)) return r;
    if ((o & 4) !== 0 && (o |= l & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= o; 0 < r; ) l = 31 - nt(r), f = 1 << l, o |= n[l], r &= ~f;
    return o;
  }
  function dd(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Pu(n, r) {
    for (var l = n.suspendedLanes, o = n.pingedLanes, f = n.expirationTimes, v = n.pendingLanes; 0 < v; ) {
      var E = 31 - nt(v), k = 1 << E, N = f[E];
      N === -1 ? ((k & l) === 0 || (k & o) !== 0) && (f[E] = dd(k, r)) : N <= r && (n.expiredLanes |= k), v &= ~k;
    }
  }
  function Hu(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function ju() {
    var n = Sn;
    return Sn <<= 1, (Sn & 4194240) === 0 && (Sn = 64), n;
  }
  function Vu(n) {
    for (var r = [], l = 0; 31 > l; l++) r.push(n);
    return r;
  }
  function or(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - nt(r), n[r] = l;
  }
  function fc(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var f = 31 - nt(l), v = 1 << f;
      r[f] = 0, o[f] = -1, n[f] = -1, l &= ~v;
    }
  }
  function Ll(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - nt(l), f = 1 << o;
      f & r | n[o] & r && (n[o] |= r), l &= ~f;
    }
  }
  var _t = 0;
  function Nl(n) {
    return n &= -n, 1 < n ? 4 < n ? (n & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Dt, dc, pd, ct, vd, vr = !1, Xi = [], fa = null, Zi = null, un = null, Qt = /* @__PURE__ */ new Map(), Po = /* @__PURE__ */ new Map(), Yn = [], da = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Ei(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        fa = null;
        break;
      case "dragenter":
      case "dragleave":
        Zi = null;
        break;
      case "mouseover":
      case "mouseout":
        un = null;
        break;
      case "pointerover":
      case "pointerout":
        Qt.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Po.delete(r.pointerId);
    }
  }
  function Ho(n, r, l, o, f, v) {
    return n === null || n.nativeEvent !== v ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: v, targetContainers: [f] }, r !== null && (r = Ye(r), r !== null && dc(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, f !== null && r.indexOf(f) === -1 && r.push(f), n);
  }
  function hd(n, r, l, o, f) {
    switch (r) {
      case "focusin":
        return fa = Ho(fa, n, r, l, o, f), !0;
      case "dragenter":
        return Zi = Ho(Zi, n, r, l, o, f), !0;
      case "mouseover":
        return un = Ho(un, n, r, l, o, f), !0;
      case "pointerover":
        var v = f.pointerId;
        return Qt.set(v, Ho(Qt.get(v) || null, n, r, l, o, f)), !0;
      case "gotpointercapture":
        return v = f.pointerId, Po.set(v, Ho(Po.get(v) || null, n, r, l, o, f)), !0;
    }
    return !1;
  }
  function md(n) {
    var r = $l(n.target);
    if (r !== null) {
      var l = _r(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = Fn(l), r !== null) {
            n.blockedOn = r, vd(n.priority, function() {
              pd(l);
            });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function jo(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = vc(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        Rt = o, l.target.dispatchEvent(o), Rt = null;
      } else return r = Ye(l), r !== null && dc(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function Dv(n, r, l) {
    jo(n) && l.delete(r);
  }
  function Py() {
    vr = !1, fa !== null && jo(fa) && (fa = null), Zi !== null && jo(Zi) && (Zi = null), un !== null && jo(un) && (un = null), Qt.forEach(Dv), Po.forEach(Dv);
  }
  function Vo(n, r) {
    n.blockedOn === r && (n.blockedOn = null, vr || (vr = !0, p.unstable_scheduleCallback(p.unstable_NormalPriority, Py)));
  }
  function Ji(n) {
    function r(f) {
      return Vo(f, n);
    }
    if (0 < Xi.length) {
      Vo(Xi[0], n);
      for (var l = 1; l < Xi.length; l++) {
        var o = Xi[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (fa !== null && Vo(fa, n), Zi !== null && Vo(Zi, n), un !== null && Vo(un, n), Qt.forEach(r), Po.forEach(r), l = 0; l < Yn.length; l++) o = Yn[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < Yn.length && (l = Yn[0], l.blockedOn === null); ) md(l), l.blockedOn === null && Yn.shift();
  }
  var Ul = me.ReactCurrentBatchConfig, zl = !0;
  function kv(n, r, l, o) {
    var f = _t, v = Ul.transition;
    Ul.transition = null;
    try {
      _t = 1, pc(n, r, l, o);
    } finally {
      _t = f, Ul.transition = v;
    }
  }
  function _v(n, r, l, o) {
    var f = _t, v = Ul.transition;
    Ul.transition = null;
    try {
      _t = 4, pc(n, r, l, o);
    } finally {
      _t = f, Ul.transition = v;
    }
  }
  function pc(n, r, l, o) {
    if (zl) {
      var f = vc(n, r, l, o);
      if (f === null) Ac(n, r, o, $o, l), Ei(n, o);
      else if (hd(f, n, r, l, o)) o.stopPropagation();
      else if (Ei(n, o), r & 4 && -1 < da.indexOf(n)) {
        for (; f !== null; ) {
          var v = Ye(f);
          if (v !== null && Dt(v), v = vc(n, r, l, o), v === null && Ac(n, r, o, $o, l), v === f) break;
          f = v;
        }
        f !== null && o.stopPropagation();
      } else Ac(n, r, o, null, l);
    }
  }
  var $o = null;
  function vc(n, r, l, o) {
    if ($o = null, n = xt(o), n = $l(n), n !== null) if (r = _r(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = Fn(r), n !== null) return n;
      n = null;
    } else if (l === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return $o = n, null;
  }
  function hc(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (ht()) {
          case gi:
            return 1;
          case Bu:
            return 4;
          case Al:
          case M:
            return 16;
          case re:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Si = null, mc = null, $u = null;
  function yd() {
    if ($u) return $u;
    var n, r = mc, l = r.length, o, f = "value" in Si ? Si.value : Si.textContent, v = f.length;
    for (n = 0; n < l && r[n] === f[n]; n++) ;
    var E = l - n;
    for (o = 1; o <= E && r[l - o] === f[v - o]; o++) ;
    return $u = f.slice(n, 1 < o ? 1 - o : void 0);
  }
  function yc(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function gc() {
    return !0;
  }
  function Ec() {
    return !1;
  }
  function Or(n) {
    function r(l, o, f, v, E) {
      this._reactName = l, this._targetInst = f, this.type = o, this.nativeEvent = v, this.target = E, this.currentTarget = null;
      for (var k in n) n.hasOwnProperty(k) && (l = n[k], this[k] = l ? l(v) : v[k]);
      return this.isDefaultPrevented = (v.defaultPrevented != null ? v.defaultPrevented : v.returnValue === !1) ? gc : Ec, this.isPropagationStopped = Ec, this;
    }
    return Te(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = gc);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = gc);
    }, persist: function() {
    }, isPersistent: gc }), r;
  }
  var Il = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Sc = Or(Il), Yu = Te({}, Il, { view: 0, detail: 0 }), Hy = Or(Yu), gd, qn, Fl, Yo = Te({}, Yu, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Cd, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Fl && (Fl && n.type === "mousemove" ? (gd = n.screenX - Fl.screenX, qn = n.screenY - Fl.screenY) : qn = gd = 0, Fl = n), gd);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : qn;
  } }), Ed = Or(Yo), jy = Te({}, Yo, { dataTransfer: 0 }), qu = Or(jy), Sd = Te({}, Yu, { relatedTarget: 0 }), bc = Or(Sd), Vy = Te({}, Il, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), $y = Or(Vy), Yy = Te({}, Il, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Mv = Or(Yy), bd = Te({}, Il, { data: 0 }), Td = Or(bd), Ov = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Av = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, qy = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function bi(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = qy[n]) ? !!r[n] : !1;
  }
  function Cd() {
    return bi;
  }
  var wd = Te({}, Yu, { key: function(n) {
    if (n.key) {
      var r = Ov[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = yc(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Av[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Cd, charCode: function(n) {
    return n.type === "keypress" ? yc(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? yc(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Rd = Or(wd), xd = Te({}, Yo, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Lv = Or(xd), Tc = Te({}, Yu, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Cd }), Nv = Or(Tc), Ar = Te({}, Il, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Ti = Or(Ar), bn = Te({}, Yo, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Ci = Or(bn), Dd = [9, 13, 27, 32], Wu = U && "CompositionEvent" in window, qo = null;
  U && "documentMode" in document && (qo = document.documentMode);
  var Wo = U && "TextEvent" in window && !qo, Uv = U && (!Wu || qo && 8 < qo && 11 >= qo), zv = " ", Cc = !1;
  function Iv(n, r) {
    switch (n) {
      case "keyup":
        return Dd.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Fv(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var Qu = !1;
  function Bv(n, r) {
    switch (n) {
      case "compositionend":
        return Fv(r);
      case "keypress":
        return r.which !== 32 ? null : (Cc = !0, zv);
      case "textInput":
        return n = r.data, n === zv && Cc ? null : n;
      default:
        return null;
    }
  }
  function Wy(n, r) {
    if (Qu) return n === "compositionend" || !Wu && Iv(n, r) ? (n = yd(), $u = mc = Si = null, Qu = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length) return r.char;
          if (r.which) return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return Uv && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Qy = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Pv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Qy[n.type] : r === "textarea";
  }
  function kd(n, r, l, o) {
    uc(o), r = Jo(r, "onChange"), 0 < r.length && (l = new Sc("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var qa = null, Bl = null;
  function Hv(n) {
    jl(n, 0);
  }
  function Qo(n) {
    var r = La(n);
    if (rt(r)) return n;
  }
  function Gy(n, r) {
    if (n === "change") return r;
  }
  var jv = !1;
  if (U) {
    var _d;
    if (U) {
      var Md = "oninput" in document;
      if (!Md) {
        var Vv = document.createElement("div");
        Vv.setAttribute("oninput", "return;"), Md = typeof Vv.oninput == "function";
      }
      _d = Md;
    } else _d = !1;
    jv = _d && (!document.documentMode || 9 < document.documentMode);
  }
  function $v() {
    qa && (qa.detachEvent("onpropertychange", Yv), Bl = qa = null);
  }
  function Yv(n) {
    if (n.propertyName === "value" && Qo(Bl)) {
      var r = [];
      kd(r, Bl, n, xt(n)), zo(Hv, r);
    }
  }
  function Ky(n, r, l) {
    n === "focusin" ? ($v(), qa = r, Bl = l, qa.attachEvent("onpropertychange", Yv)) : n === "focusout" && $v();
  }
  function qv(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return Qo(Bl);
  }
  function Xy(n, r) {
    if (n === "click") return Qo(r);
  }
  function Wv(n, r) {
    if (n === "input" || n === "change") return Qo(r);
  }
  function Zy(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var Aa = typeof Object.is == "function" ? Object.is : Zy;
  function Go(n, r) {
    if (Aa(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length) return !1;
    for (o = 0; o < l.length; o++) {
      var f = l[o];
      if (!R.call(r, f) || !Aa(n[f], r[f])) return !1;
    }
    return !0;
  }
  function Qv(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function wc(n, r) {
    var l = Qv(n);
    n = 0;
    for (var o; l; ) {
      if (l.nodeType === 3) {
        if (o = n + l.textContent.length, n <= r && o >= r) return { node: l, offset: r - n };
        n = o;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = Qv(l);
    }
  }
  function el(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? el(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function Ko() {
    for (var n = window, r = Ke(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) n = r.contentWindow;
      else break;
      r = Ke(n.document);
    }
    return r;
  }
  function Rc(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function Gu(n) {
    var r = Ko(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && el(l.ownerDocument.documentElement, l)) {
      if (o !== null && Rc(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l) l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var f = l.textContent.length, v = Math.min(o.start, f);
          o = o.end === void 0 ? v : Math.min(o.end, f), !n.extend && v > o && (f = o, o = v, v = f), f = wc(l, v);
          var E = wc(
            l,
            o
          );
          f && E && (n.rangeCount !== 1 || n.anchorNode !== f.node || n.anchorOffset !== f.offset || n.focusNode !== E.node || n.focusOffset !== E.offset) && (r = r.createRange(), r.setStart(f.node, f.offset), n.removeAllRanges(), v > o ? (n.addRange(r), n.extend(E.node, E.offset)) : (r.setEnd(E.node, E.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; ) n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++) n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var Jy = U && "documentMode" in document && 11 >= document.documentMode, Ku = null, Od = null, Xo = null, Ad = !1;
  function Ld(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Ad || Ku == null || Ku !== Ke(o) || (o = Ku, "selectionStart" in o && Rc(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), Xo && Go(Xo, o) || (Xo = o, o = Jo(Od, "onSelect"), 0 < o.length && (r = new Sc("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = Ku)));
  }
  function xc(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var Pl = { animationend: xc("Animation", "AnimationEnd"), animationiteration: xc("Animation", "AnimationIteration"), animationstart: xc("Animation", "AnimationStart"), transitionend: xc("Transition", "TransitionEnd") }, Wn = {}, Nd = {};
  U && (Nd = document.createElement("div").style, "AnimationEvent" in window || (delete Pl.animationend.animation, delete Pl.animationiteration.animation, delete Pl.animationstart.animation), "TransitionEvent" in window || delete Pl.transitionend.transition);
  function Dc(n) {
    if (Wn[n]) return Wn[n];
    if (!Pl[n]) return n;
    var r = Pl[n], l;
    for (l in r) if (r.hasOwnProperty(l) && l in Nd) return Wn[n] = r[l];
    return n;
  }
  var Gv = Dc("animationend"), Kv = Dc("animationiteration"), Xv = Dc("animationstart"), Zv = Dc("transitionend"), Ud = /* @__PURE__ */ new Map(), kc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function pa(n, r) {
    Ud.set(n, r), A(r, [n]);
  }
  for (var zd = 0; zd < kc.length; zd++) {
    var Hl = kc[zd], eg = Hl.toLowerCase(), tg = Hl[0].toUpperCase() + Hl.slice(1);
    pa(eg, "on" + tg);
  }
  pa(Gv, "onAnimationEnd"), pa(Kv, "onAnimationIteration"), pa(Xv, "onAnimationStart"), pa("dblclick", "onDoubleClick"), pa("focusin", "onFocus"), pa("focusout", "onBlur"), pa(Zv, "onTransitionEnd"), y("onMouseEnter", ["mouseout", "mouseover"]), y("onMouseLeave", ["mouseout", "mouseover"]), y("onPointerEnter", ["pointerout", "pointerover"]), y("onPointerLeave", ["pointerout", "pointerover"]), A("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), A("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), A("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), A("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), A("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), A("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Zo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Id = new Set("cancel close invalid load scroll toggle".split(" ").concat(Zo));
  function _c(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, Fu(o, r, void 0, n), n.currentTarget = null;
  }
  function jl(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], f = o.event;
      o = o.listeners;
      e: {
        var v = void 0;
        if (r) for (var E = o.length - 1; 0 <= E; E--) {
          var k = o[E], N = k.instance, K = k.currentTarget;
          if (k = k.listener, N !== v && f.isPropagationStopped()) break e;
          _c(f, k, K), v = N;
        }
        else for (E = 0; E < o.length; E++) {
          if (k = o[E], N = k.instance, K = k.currentTarget, k = k.listener, N !== v && f.isPropagationStopped()) break e;
          _c(f, k, K), v = N;
        }
      }
    }
    if (yi) throw n = Ol, yi = !1, Ol = null, n;
  }
  function Ut(n, r) {
    var l = r[ns];
    l === void 0 && (l = r[ns] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (Jv(r, n, 2, !1), l.add(o));
  }
  function Mc(n, r, l) {
    var o = 0;
    r && (o |= 4), Jv(l, n, o, r);
  }
  var Oc = "_reactListening" + Math.random().toString(36).slice(2);
  function Xu(n) {
    if (!n[Oc]) {
      n[Oc] = !0, x.forEach(function(l) {
        l !== "selectionchange" && (Id.has(l) || Mc(l, !1, n), Mc(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Oc] || (r[Oc] = !0, Mc("selectionchange", !1, r));
    }
  }
  function Jv(n, r, l, o) {
    switch (hc(r)) {
      case 1:
        var f = kv;
        break;
      case 4:
        f = _v;
        break;
      default:
        f = pc;
    }
    l = f.bind(null, r, l, n), f = void 0, !$a || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (f = !0), o ? f !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: f }) : n.addEventListener(r, l, !0) : f !== void 0 ? n.addEventListener(r, l, { passive: f }) : n.addEventListener(r, l, !1);
  }
  function Ac(n, r, l, o, f) {
    var v = o;
    if ((r & 1) === 0 && (r & 2) === 0 && o !== null) e: for (; ; ) {
      if (o === null) return;
      var E = o.tag;
      if (E === 3 || E === 4) {
        var k = o.stateNode.containerInfo;
        if (k === f || k.nodeType === 8 && k.parentNode === f) break;
        if (E === 4) for (E = o.return; E !== null; ) {
          var N = E.tag;
          if ((N === 3 || N === 4) && (N = E.stateNode.containerInfo, N === f || N.nodeType === 8 && N.parentNode === f)) return;
          E = E.return;
        }
        for (; k !== null; ) {
          if (E = $l(k), E === null) return;
          if (N = E.tag, N === 5 || N === 6) {
            o = v = E;
            continue e;
          }
          k = k.parentNode;
        }
      }
      o = o.return;
    }
    zo(function() {
      var K = v, ve = xt(l), ye = [];
      e: {
        var pe = Ud.get(n);
        if (pe !== void 0) {
          var _e = Sc, ze = n;
          switch (n) {
            case "keypress":
              if (yc(l) === 0) break e;
            case "keydown":
            case "keyup":
              _e = Rd;
              break;
            case "focusin":
              ze = "focus", _e = bc;
              break;
            case "focusout":
              ze = "blur", _e = bc;
              break;
            case "beforeblur":
            case "afterblur":
              _e = bc;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              _e = Ed;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              _e = qu;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              _e = Nv;
              break;
            case Gv:
            case Kv:
            case Xv:
              _e = $y;
              break;
            case Zv:
              _e = Ti;
              break;
            case "scroll":
              _e = Hy;
              break;
            case "wheel":
              _e = Ci;
              break;
            case "copy":
            case "cut":
            case "paste":
              _e = Mv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              _e = Lv;
          }
          var Pe = (r & 4) !== 0, mn = !Pe && n === "scroll", j = Pe ? pe !== null ? pe + "Capture" : null : pe;
          Pe = [];
          for (var F = K, q; F !== null; ) {
            q = F;
            var he = q.stateNode;
            if (q.tag === 5 && he !== null && (q = he, j !== null && (he = Va(F, j), he != null && Pe.push(Zu(F, he, q)))), mn) break;
            F = F.return;
          }
          0 < Pe.length && (pe = new _e(pe, ze, null, l, ve), ye.push({ event: pe, listeners: Pe }));
        }
      }
      if ((r & 7) === 0) {
        e: {
          if (pe = n === "mouseover" || n === "pointerover", _e = n === "mouseout" || n === "pointerout", pe && l !== Rt && (ze = l.relatedTarget || l.fromElement) && ($l(ze) || ze[wi])) break e;
          if ((_e || pe) && (pe = ve.window === ve ? ve : (pe = ve.ownerDocument) ? pe.defaultView || pe.parentWindow : window, _e ? (ze = l.relatedTarget || l.toElement, _e = K, ze = ze ? $l(ze) : null, ze !== null && (mn = _r(ze), ze !== mn || ze.tag !== 5 && ze.tag !== 6) && (ze = null)) : (_e = null, ze = K), _e !== ze)) {
            if (Pe = Ed, he = "onMouseLeave", j = "onMouseEnter", F = "mouse", (n === "pointerout" || n === "pointerover") && (Pe = Lv, he = "onPointerLeave", j = "onPointerEnter", F = "pointer"), mn = _e == null ? pe : La(_e), q = ze == null ? pe : La(ze), pe = new Pe(he, F + "leave", _e, l, ve), pe.target = mn, pe.relatedTarget = q, he = null, $l(ve) === K && (Pe = new Pe(j, F + "enter", ze, l, ve), Pe.target = q, Pe.relatedTarget = mn, he = Pe), mn = he, _e && ze) t: {
              for (Pe = _e, j = ze, F = 0, q = Pe; q; q = tl(q)) F++;
              for (q = 0, he = j; he; he = tl(he)) q++;
              for (; 0 < F - q; ) Pe = tl(Pe), F--;
              for (; 0 < q - F; ) j = tl(j), q--;
              for (; F--; ) {
                if (Pe === j || j !== null && Pe === j.alternate) break t;
                Pe = tl(Pe), j = tl(j);
              }
              Pe = null;
            }
            else Pe = null;
            _e !== null && eh(ye, pe, _e, Pe, !1), ze !== null && mn !== null && eh(ye, mn, ze, Pe, !0);
          }
        }
        e: {
          if (pe = K ? La(K) : window, _e = pe.nodeName && pe.nodeName.toLowerCase(), _e === "select" || _e === "input" && pe.type === "file") var Ie = Gy;
          else if (Pv(pe)) if (jv) Ie = Wv;
          else {
            Ie = qv;
            var Ge = Ky;
          }
          else (_e = pe.nodeName) && _e.toLowerCase() === "input" && (pe.type === "checkbox" || pe.type === "radio") && (Ie = Xy);
          if (Ie && (Ie = Ie(n, K))) {
            kd(ye, Ie, l, ve);
            break e;
          }
          Ge && Ge(n, pe, K), n === "focusout" && (Ge = pe._wrapperState) && Ge.controlled && pe.type === "number" && oa(pe, "number", pe.value);
        }
        switch (Ge = K ? La(K) : window, n) {
          case "focusin":
            (Pv(Ge) || Ge.contentEditable === "true") && (Ku = Ge, Od = K, Xo = null);
            break;
          case "focusout":
            Xo = Od = Ku = null;
            break;
          case "mousedown":
            Ad = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Ad = !1, Ld(ye, l, ve);
            break;
          case "selectionchange":
            if (Jy) break;
          case "keydown":
          case "keyup":
            Ld(ye, l, ve);
        }
        var Xe;
        if (Wu) e: {
          switch (n) {
            case "compositionstart":
              var tt = "onCompositionStart";
              break e;
            case "compositionend":
              tt = "onCompositionEnd";
              break e;
            case "compositionupdate":
              tt = "onCompositionUpdate";
              break e;
          }
          tt = void 0;
        }
        else Qu ? Iv(n, l) && (tt = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (tt = "onCompositionStart");
        tt && (Uv && l.locale !== "ko" && (Qu || tt !== "onCompositionStart" ? tt === "onCompositionEnd" && Qu && (Xe = yd()) : (Si = ve, mc = "value" in Si ? Si.value : Si.textContent, Qu = !0)), Ge = Jo(K, tt), 0 < Ge.length && (tt = new Td(tt, n, null, l, ve), ye.push({ event: tt, listeners: Ge }), Xe ? tt.data = Xe : (Xe = Fv(l), Xe !== null && (tt.data = Xe)))), (Xe = Wo ? Bv(n, l) : Wy(n, l)) && (K = Jo(K, "onBeforeInput"), 0 < K.length && (ve = new Td("onBeforeInput", "beforeinput", null, l, ve), ye.push({ event: ve, listeners: K }), ve.data = Xe));
      }
      jl(ye, r);
    });
  }
  function Zu(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function Jo(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var f = n, v = f.stateNode;
      f.tag === 5 && v !== null && (f = v, v = Va(n, l), v != null && o.unshift(Zu(n, v, f)), v = Va(n, r), v != null && o.push(Zu(n, v, f))), n = n.return;
    }
    return o;
  }
  function tl(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function eh(n, r, l, o, f) {
    for (var v = r._reactName, E = []; l !== null && l !== o; ) {
      var k = l, N = k.alternate, K = k.stateNode;
      if (N !== null && N === o) break;
      k.tag === 5 && K !== null && (k = K, f ? (N = Va(l, v), N != null && E.unshift(Zu(l, N, k))) : f || (N = Va(l, v), N != null && E.push(Zu(l, N, k)))), l = l.return;
    }
    E.length !== 0 && n.push({ event: r, listeners: E });
  }
  var th = /\r\n?/g, ng = /\u0000|\uFFFD/g;
  function nh(n) {
    return (typeof n == "string" ? n : "" + n).replace(th, `
`).replace(ng, "");
  }
  function Lc(n, r, l) {
    if (r = nh(r), nh(n) !== r && l) throw Error(m(425));
  }
  function nl() {
  }
  var es = null, Vl = null;
  function Nc(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Uc = typeof setTimeout == "function" ? setTimeout : void 0, Fd = typeof clearTimeout == "function" ? clearTimeout : void 0, rh = typeof Promise == "function" ? Promise : void 0, Ju = typeof queueMicrotask == "function" ? queueMicrotask : typeof rh < "u" ? function(n) {
    return rh.resolve(null).then(n).catch(zc);
  } : Uc;
  function zc(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function eo(n, r) {
    var l = r, o = 0;
    do {
      var f = l.nextSibling;
      if (n.removeChild(l), f && f.nodeType === 8) if (l = f.data, l === "/$") {
        if (o === 0) {
          n.removeChild(f), Ji(r);
          return;
        }
        o--;
      } else l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = f;
    } while (l);
    Ji(r);
  }
  function Wa(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3) break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?") break;
        if (r === "/$") return null;
      }
    }
    return n;
  }
  function ah(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0) return n;
          r--;
        } else l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var rl = Math.random().toString(36).slice(2), Qa = "__reactFiber$" + rl, ts = "__reactProps$" + rl, wi = "__reactContainer$" + rl, ns = "__reactEvents$" + rl, to = "__reactListeners$" + rl, rg = "__reactHandles$" + rl;
  function $l(n) {
    var r = n[Qa];
    if (r) return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[wi] || l[Qa]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null) for (n = ah(n); n !== null; ) {
          if (l = n[Qa]) return l;
          n = ah(n);
        }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function Ye(n) {
    return n = n[Qa] || n[wi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function La(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(m(33));
  }
  function fn(n) {
    return n[ts] || null;
  }
  var Et = [], va = -1;
  function Na(n) {
    return { current: n };
  }
  function $t(n) {
    0 > va || (n.current = Et[va], Et[va] = null, va--);
  }
  function $e(n, r) {
    va++, Et[va] = n.current, n.current = r;
  }
  var Lr = {}, on = Na(Lr), On = Na(!1), Nr = Lr;
  function ha(n, r) {
    var l = n.type.contextTypes;
    if (!l) return Lr;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r) return o.__reactInternalMemoizedMaskedChildContext;
    var f = {}, v;
    for (v in l) f[v] = r[v];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = f), f;
  }
  function Tn(n) {
    return n = n.childContextTypes, n != null;
  }
  function no() {
    $t(On), $t(on);
  }
  function ih(n, r, l) {
    if (on.current !== Lr) throw Error(m(168));
    $e(on, r), $e(On, l);
  }
  function rs(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function") return l;
    o = o.getChildContext();
    for (var f in o) if (!(f in r)) throw Error(m(108, an(n) || "Unknown", f));
    return Te({}, l, o);
  }
  function Ur(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Lr, Nr = on.current, $e(on, n), $e(On, On.current), !0;
  }
  function Ic(n, r, l) {
    var o = n.stateNode;
    if (!o) throw Error(m(169));
    l ? (n = rs(n, r, Nr), o.__reactInternalMemoizedMergedChildContext = n, $t(On), $t(on), $e(on, n)) : $t(On), $e(On, l);
  }
  var Ga = null, ro = !1, Ri = !1;
  function Fc(n) {
    Ga === null ? Ga = [n] : Ga.push(n);
  }
  function al(n) {
    ro = !0, Fc(n);
  }
  function Ka() {
    if (!Ri && Ga !== null) {
      Ri = !0;
      var n = 0, r = _t;
      try {
        var l = Ga;
        for (_t = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        Ga = null, ro = !1;
      } catch (f) {
        throw Ga !== null && (Ga = Ga.slice(n + 1)), sc(gi, Ka), f;
      } finally {
        _t = r, Ri = !1;
      }
    }
    return null;
  }
  var il = [], ll = 0, ul = null, xi = 0, Cn = [], ma = 0, Gr = null, Xa = 1, Za = "";
  function Yl(n, r) {
    il[ll++] = xi, il[ll++] = ul, ul = n, xi = r;
  }
  function lh(n, r, l) {
    Cn[ma++] = Xa, Cn[ma++] = Za, Cn[ma++] = Gr, Gr = n;
    var o = Xa;
    n = Za;
    var f = 32 - nt(o) - 1;
    o &= ~(1 << f), l += 1;
    var v = 32 - nt(r) + f;
    if (30 < v) {
      var E = f - f % 5;
      v = (o & (1 << E) - 1).toString(32), o >>= E, f -= E, Xa = 1 << 32 - nt(r) + f | l << f | o, Za = v + n;
    } else Xa = 1 << v | l << f | o, Za = n;
  }
  function Bc(n) {
    n.return !== null && (Yl(n, 1), lh(n, 1, 0));
  }
  function Pc(n) {
    for (; n === ul; ) ul = il[--ll], il[ll] = null, xi = il[--ll], il[ll] = null;
    for (; n === Gr; ) Gr = Cn[--ma], Cn[ma] = null, Za = Cn[--ma], Cn[ma] = null, Xa = Cn[--ma], Cn[ma] = null;
  }
  var zr = null, Ir = null, Xt = !1, ya = null;
  function Bd(n, r) {
    var l = Ta(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function uh(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, zr = n, Ir = Wa(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, zr = n, Ir = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = Gr !== null ? { id: Xa, overflow: Za } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = Ta(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, zr = n, Ir = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Pd(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Hd(n) {
    if (Xt) {
      var r = Ir;
      if (r) {
        var l = r;
        if (!uh(n, r)) {
          if (Pd(n)) throw Error(m(418));
          r = Wa(l.nextSibling);
          var o = zr;
          r && uh(n, r) ? Bd(o, l) : (n.flags = n.flags & -4097 | 2, Xt = !1, zr = n);
        }
      } else {
        if (Pd(n)) throw Error(m(418));
        n.flags = n.flags & -4097 | 2, Xt = !1, zr = n;
      }
    }
  }
  function An(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    zr = n;
  }
  function Hc(n) {
    if (n !== zr) return !1;
    if (!Xt) return An(n), Xt = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Nc(n.type, n.memoizedProps)), r && (r = Ir)) {
      if (Pd(n)) throw as(), Error(m(418));
      for (; r; ) Bd(n, r), r = Wa(r.nextSibling);
    }
    if (An(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(m(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                Ir = Wa(n.nextSibling);
                break e;
              }
              r--;
            } else l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        Ir = null;
      }
    } else Ir = zr ? Wa(n.stateNode.nextSibling) : null;
    return !0;
  }
  function as() {
    for (var n = Ir; n; ) n = Wa(n.nextSibling);
  }
  function ol() {
    Ir = zr = null, Xt = !1;
  }
  function Di(n) {
    ya === null ? ya = [n] : ya.push(n);
  }
  var ag = me.ReactCurrentBatchConfig;
  function ql(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1) throw Error(m(309));
          var o = l.stateNode;
        }
        if (!o) throw Error(m(147, n));
        var f = o, v = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === v ? r.ref : (r = function(E) {
          var k = f.refs;
          E === null ? delete k[v] : k[v] = E;
        }, r._stringRef = v, r);
      }
      if (typeof n != "string") throw Error(m(284));
      if (!l._owner) throw Error(m(290, n));
    }
    return n;
  }
  function jc(n, r) {
    throw n = Object.prototype.toString.call(r), Error(m(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function oh(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Wl(n) {
    function r(j, F) {
      if (n) {
        var q = j.deletions;
        q === null ? (j.deletions = [F], j.flags |= 16) : q.push(F);
      }
    }
    function l(j, F) {
      if (!n) return null;
      for (; F !== null; ) r(j, F), F = F.sibling;
      return null;
    }
    function o(j, F) {
      for (j = /* @__PURE__ */ new Map(); F !== null; ) F.key !== null ? j.set(F.key, F) : j.set(F.index, F), F = F.sibling;
      return j;
    }
    function f(j, F) {
      return j = ml(j, F), j.index = 0, j.sibling = null, j;
    }
    function v(j, F, q) {
      return j.index = q, n ? (q = j.alternate, q !== null ? (q = q.index, q < F ? (j.flags |= 2, F) : q) : (j.flags |= 2, F)) : (j.flags |= 1048576, F);
    }
    function E(j) {
      return n && j.alternate === null && (j.flags |= 2), j;
    }
    function k(j, F, q, he) {
      return F === null || F.tag !== 6 ? (F = gp(q, j.mode, he), F.return = j, F) : (F = f(F, q), F.return = j, F);
    }
    function N(j, F, q, he) {
      var Ie = q.type;
      return Ie === H ? ve(j, F, q.props.children, he, q.key) : F !== null && (F.elementType === Ie || typeof Ie == "object" && Ie !== null && Ie.$$typeof === ut && oh(Ie) === F.type) ? (he = f(F, q.props), he.ref = ql(j, F, q), he.return = j, he) : (he = Ns(q.type, q.key, q.props, null, j.mode, he), he.ref = ql(j, F, q), he.return = j, he);
    }
    function K(j, F, q, he) {
      return F === null || F.tag !== 4 || F.stateNode.containerInfo !== q.containerInfo || F.stateNode.implementation !== q.implementation ? (F = Tf(q, j.mode, he), F.return = j, F) : (F = f(F, q.children || []), F.return = j, F);
    }
    function ve(j, F, q, he, Ie) {
      return F === null || F.tag !== 7 ? (F = Li(q, j.mode, he, Ie), F.return = j, F) : (F = f(F, q), F.return = j, F);
    }
    function ye(j, F, q) {
      if (typeof F == "string" && F !== "" || typeof F == "number") return F = gp("" + F, j.mode, q), F.return = j, F;
      if (typeof F == "object" && F !== null) {
        switch (F.$$typeof) {
          case Se:
            return q = Ns(F.type, F.key, F.props, null, j.mode, q), q.ref = ql(j, null, F), q.return = j, q;
          case V:
            return F = Tf(F, j.mode, q), F.return = j, F;
          case ut:
            var he = F._init;
            return ye(j, he(F._payload), q);
        }
        if (sa(F) || Be(F)) return F = Li(F, j.mode, q, null), F.return = j, F;
        jc(j, F);
      }
      return null;
    }
    function pe(j, F, q, he) {
      var Ie = F !== null ? F.key : null;
      if (typeof q == "string" && q !== "" || typeof q == "number") return Ie !== null ? null : k(j, F, "" + q, he);
      if (typeof q == "object" && q !== null) {
        switch (q.$$typeof) {
          case Se:
            return q.key === Ie ? N(j, F, q, he) : null;
          case V:
            return q.key === Ie ? K(j, F, q, he) : null;
          case ut:
            return Ie = q._init, pe(
              j,
              F,
              Ie(q._payload),
              he
            );
        }
        if (sa(q) || Be(q)) return Ie !== null ? null : ve(j, F, q, he, null);
        jc(j, q);
      }
      return null;
    }
    function _e(j, F, q, he, Ie) {
      if (typeof he == "string" && he !== "" || typeof he == "number") return j = j.get(q) || null, k(F, j, "" + he, Ie);
      if (typeof he == "object" && he !== null) {
        switch (he.$$typeof) {
          case Se:
            return j = j.get(he.key === null ? q : he.key) || null, N(F, j, he, Ie);
          case V:
            return j = j.get(he.key === null ? q : he.key) || null, K(F, j, he, Ie);
          case ut:
            var Ge = he._init;
            return _e(j, F, q, Ge(he._payload), Ie);
        }
        if (sa(he) || Be(he)) return j = j.get(q) || null, ve(F, j, he, Ie, null);
        jc(F, he);
      }
      return null;
    }
    function ze(j, F, q, he) {
      for (var Ie = null, Ge = null, Xe = F, tt = F = 0, Hn = null; Xe !== null && tt < q.length; tt++) {
        Xe.index > tt ? (Hn = Xe, Xe = null) : Hn = Xe.sibling;
        var At = pe(j, Xe, q[tt], he);
        if (At === null) {
          Xe === null && (Xe = Hn);
          break;
        }
        n && Xe && At.alternate === null && r(j, Xe), F = v(At, F, tt), Ge === null ? Ie = At : Ge.sibling = At, Ge = At, Xe = Hn;
      }
      if (tt === q.length) return l(j, Xe), Xt && Yl(j, tt), Ie;
      if (Xe === null) {
        for (; tt < q.length; tt++) Xe = ye(j, q[tt], he), Xe !== null && (F = v(Xe, F, tt), Ge === null ? Ie = Xe : Ge.sibling = Xe, Ge = Xe);
        return Xt && Yl(j, tt), Ie;
      }
      for (Xe = o(j, Xe); tt < q.length; tt++) Hn = _e(Xe, j, tt, q[tt], he), Hn !== null && (n && Hn.alternate !== null && Xe.delete(Hn.key === null ? tt : Hn.key), F = v(Hn, F, tt), Ge === null ? Ie = Hn : Ge.sibling = Hn, Ge = Hn);
      return n && Xe.forEach(function(El) {
        return r(j, El);
      }), Xt && Yl(j, tt), Ie;
    }
    function Pe(j, F, q, he) {
      var Ie = Be(q);
      if (typeof Ie != "function") throw Error(m(150));
      if (q = Ie.call(q), q == null) throw Error(m(151));
      for (var Ge = Ie = null, Xe = F, tt = F = 0, Hn = null, At = q.next(); Xe !== null && !At.done; tt++, At = q.next()) {
        Xe.index > tt ? (Hn = Xe, Xe = null) : Hn = Xe.sibling;
        var El = pe(j, Xe, At.value, he);
        if (El === null) {
          Xe === null && (Xe = Hn);
          break;
        }
        n && Xe && El.alternate === null && r(j, Xe), F = v(El, F, tt), Ge === null ? Ie = El : Ge.sibling = El, Ge = El, Xe = Hn;
      }
      if (At.done) return l(
        j,
        Xe
      ), Xt && Yl(j, tt), Ie;
      if (Xe === null) {
        for (; !At.done; tt++, At = q.next()) At = ye(j, At.value, he), At !== null && (F = v(At, F, tt), Ge === null ? Ie = At : Ge.sibling = At, Ge = At);
        return Xt && Yl(j, tt), Ie;
      }
      for (Xe = o(j, Xe); !At.done; tt++, At = q.next()) At = _e(Xe, j, tt, At.value, he), At !== null && (n && At.alternate !== null && Xe.delete(At.key === null ? tt : At.key), F = v(At, F, tt), Ge === null ? Ie = At : Ge.sibling = At, Ge = At);
      return n && Xe.forEach(function($h) {
        return r(j, $h);
      }), Xt && Yl(j, tt), Ie;
    }
    function mn(j, F, q, he) {
      if (typeof q == "object" && q !== null && q.type === H && q.key === null && (q = q.props.children), typeof q == "object" && q !== null) {
        switch (q.$$typeof) {
          case Se:
            e: {
              for (var Ie = q.key, Ge = F; Ge !== null; ) {
                if (Ge.key === Ie) {
                  if (Ie = q.type, Ie === H) {
                    if (Ge.tag === 7) {
                      l(j, Ge.sibling), F = f(Ge, q.props.children), F.return = j, j = F;
                      break e;
                    }
                  } else if (Ge.elementType === Ie || typeof Ie == "object" && Ie !== null && Ie.$$typeof === ut && oh(Ie) === Ge.type) {
                    l(j, Ge.sibling), F = f(Ge, q.props), F.ref = ql(j, Ge, q), F.return = j, j = F;
                    break e;
                  }
                  l(j, Ge);
                  break;
                } else r(j, Ge);
                Ge = Ge.sibling;
              }
              q.type === H ? (F = Li(q.props.children, j.mode, he, q.key), F.return = j, j = F) : (he = Ns(q.type, q.key, q.props, null, j.mode, he), he.ref = ql(j, F, q), he.return = j, j = he);
            }
            return E(j);
          case V:
            e: {
              for (Ge = q.key; F !== null; ) {
                if (F.key === Ge) if (F.tag === 4 && F.stateNode.containerInfo === q.containerInfo && F.stateNode.implementation === q.implementation) {
                  l(j, F.sibling), F = f(F, q.children || []), F.return = j, j = F;
                  break e;
                } else {
                  l(j, F);
                  break;
                }
                else r(j, F);
                F = F.sibling;
              }
              F = Tf(q, j.mode, he), F.return = j, j = F;
            }
            return E(j);
          case ut:
            return Ge = q._init, mn(j, F, Ge(q._payload), he);
        }
        if (sa(q)) return ze(j, F, q, he);
        if (Be(q)) return Pe(j, F, q, he);
        jc(j, q);
      }
      return typeof q == "string" && q !== "" || typeof q == "number" ? (q = "" + q, F !== null && F.tag === 6 ? (l(j, F.sibling), F = f(F, q), F.return = j, j = F) : (l(j, F), F = gp(q, j.mode, he), F.return = j, j = F), E(j)) : l(j, F);
    }
    return mn;
  }
  var dn = Wl(!0), we = Wl(!1), Kr = Na(null), Fr = null, ao = null, jd = null;
  function Vd() {
    jd = ao = Fr = null;
  }
  function $d(n) {
    var r = Kr.current;
    $t(Kr), n._currentValue = r;
  }
  function Yd(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l) break;
      n = n.return;
    }
  }
  function tn(n, r) {
    Fr = n, jd = ao = null, n = n.dependencies, n !== null && n.firstContext !== null && ((n.lanes & r) !== 0 && (Rn = !0), n.firstContext = null);
  }
  function ga(n) {
    var r = n._currentValue;
    if (jd !== n) if (n = { context: n, memoizedValue: r, next: null }, ao === null) {
      if (Fr === null) throw Error(m(308));
      ao = n, Fr.dependencies = { lanes: 0, firstContext: n };
    } else ao = ao.next = n;
    return r;
  }
  var Ql = null;
  function qd(n) {
    Ql === null ? Ql = [n] : Ql.push(n);
  }
  function Wd(n, r, l, o) {
    var f = r.interleaved;
    return f === null ? (l.next = l, qd(r)) : (l.next = f.next, f.next = l), r.interleaved = l, Xr(n, o);
  }
  function Xr(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; ) n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Zr = !1;
  function Qd(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function sh(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function ki(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function sl(n, r, l) {
    var o = n.updateQueue;
    if (o === null) return null;
    if (o = o.shared, (St & 2) !== 0) {
      var f = o.pending;
      return f === null ? r.next = r : (r.next = f.next, f.next = r), o.pending = r, Xr(n, l);
    }
    return f = o.interleaved, f === null ? (r.next = r, qd(o)) : (r.next = f.next, f.next = r), o.interleaved = r, Xr(n, l);
  }
  function Vc(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Ll(n, l);
    }
  }
  function ch(n, r) {
    var l = n.updateQueue, o = n.alternate;
    if (o !== null && (o = o.updateQueue, l === o)) {
      var f = null, v = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var E = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          v === null ? f = v = E : v = v.next = E, l = l.next;
        } while (l !== null);
        v === null ? f = v = r : v = v.next = r;
      } else f = v = r;
      l = { baseState: o.baseState, firstBaseUpdate: f, lastBaseUpdate: v, shared: o.shared, effects: o.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function is(n, r, l, o) {
    var f = n.updateQueue;
    Zr = !1;
    var v = f.firstBaseUpdate, E = f.lastBaseUpdate, k = f.shared.pending;
    if (k !== null) {
      f.shared.pending = null;
      var N = k, K = N.next;
      N.next = null, E === null ? v = K : E.next = K, E = N;
      var ve = n.alternate;
      ve !== null && (ve = ve.updateQueue, k = ve.lastBaseUpdate, k !== E && (k === null ? ve.firstBaseUpdate = K : k.next = K, ve.lastBaseUpdate = N));
    }
    if (v !== null) {
      var ye = f.baseState;
      E = 0, ve = K = N = null, k = v;
      do {
        var pe = k.lane, _e = k.eventTime;
        if ((o & pe) === pe) {
          ve !== null && (ve = ve.next = {
            eventTime: _e,
            lane: 0,
            tag: k.tag,
            payload: k.payload,
            callback: k.callback,
            next: null
          });
          e: {
            var ze = n, Pe = k;
            switch (pe = r, _e = l, Pe.tag) {
              case 1:
                if (ze = Pe.payload, typeof ze == "function") {
                  ye = ze.call(_e, ye, pe);
                  break e;
                }
                ye = ze;
                break e;
              case 3:
                ze.flags = ze.flags & -65537 | 128;
              case 0:
                if (ze = Pe.payload, pe = typeof ze == "function" ? ze.call(_e, ye, pe) : ze, pe == null) break e;
                ye = Te({}, ye, pe);
                break e;
              case 2:
                Zr = !0;
            }
          }
          k.callback !== null && k.lane !== 0 && (n.flags |= 64, pe = f.effects, pe === null ? f.effects = [k] : pe.push(k));
        } else _e = { eventTime: _e, lane: pe, tag: k.tag, payload: k.payload, callback: k.callback, next: null }, ve === null ? (K = ve = _e, N = ye) : ve = ve.next = _e, E |= pe;
        if (k = k.next, k === null) {
          if (k = f.shared.pending, k === null) break;
          pe = k, k = pe.next, pe.next = null, f.lastBaseUpdate = pe, f.shared.pending = null;
        }
      } while (!0);
      if (ve === null && (N = ye), f.baseState = N, f.firstBaseUpdate = K, f.lastBaseUpdate = ve, r = f.shared.interleaved, r !== null) {
        f = r;
        do
          E |= f.lane, f = f.next;
        while (f !== r);
      } else v === null && (f.shared.lanes = 0);
      ri |= E, n.lanes = E, n.memoizedState = ye;
    }
  }
  function Gd(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var o = n[r], f = o.callback;
      if (f !== null) {
        if (o.callback = null, o = l, typeof f != "function") throw Error(m(191, f));
        f.call(o);
      }
    }
  }
  var ls = {}, Ja = Na(ls), us = Na(ls), os = Na(ls);
  function Gl(n) {
    if (n === ls) throw Error(m(174));
    return n;
  }
  function Kd(n, r) {
    switch ($e(os, r), $e(us, n), $e(Ja, ls), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : ca(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = ca(r, n);
    }
    $t(Ja), $e(Ja, r);
  }
  function Kl() {
    $t(Ja), $t(us), $t(os);
  }
  function fh(n) {
    Gl(os.current);
    var r = Gl(Ja.current), l = ca(r, n.type);
    r !== l && ($e(us, n), $e(Ja, l));
  }
  function $c(n) {
    us.current === n && ($t(Ja), $t(us));
  }
  var nn = Na(0);
  function Yc(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!")) return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if ((r.flags & 128) !== 0) return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n) return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var ss = [];
  function qe() {
    for (var n = 0; n < ss.length; n++) ss[n]._workInProgressVersionPrimary = null;
    ss.length = 0;
  }
  var pt = me.ReactCurrentDispatcher, Mt = me.ReactCurrentBatchConfig, Bt = 0, Ot = null, wn = null, Bn = null, qc = !1, cs = !1, Xl = 0, de = 0;
  function kt() {
    throw Error(m(321));
  }
  function Je(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!Aa(n[l], r[l])) return !1;
    return !0;
  }
  function cl(n, r, l, o, f, v) {
    if (Bt = v, Ot = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, pt.current = n === null || n.memoizedState === null ? of : ms, n = l(o, f), cs) {
      v = 0;
      do {
        if (cs = !1, Xl = 0, 25 <= v) throw Error(m(301));
        v += 1, Bn = wn = null, r.updateQueue = null, pt.current = sf, n = l(o, f);
      } while (cs);
    }
    if (pt.current = nu, r = wn !== null && wn.next !== null, Bt = 0, Bn = wn = Ot = null, qc = !1, r) throw Error(m(300));
    return n;
  }
  function Ua() {
    var n = Xl !== 0;
    return Xl = 0, n;
  }
  function sr() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Bn === null ? Ot.memoizedState = Bn = n : Bn = Bn.next = n, Bn;
  }
  function pn() {
    if (wn === null) {
      var n = Ot.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = wn.next;
    var r = Bn === null ? Ot.memoizedState : Bn.next;
    if (r !== null) Bn = r, wn = n;
    else {
      if (n === null) throw Error(m(310));
      wn = n, n = { memoizedState: wn.memoizedState, baseState: wn.baseState, baseQueue: wn.baseQueue, queue: wn.queue, next: null }, Bn === null ? Ot.memoizedState = Bn = n : Bn = Bn.next = n;
    }
    return Bn;
  }
  function _i(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function fl(n) {
    var r = pn(), l = r.queue;
    if (l === null) throw Error(m(311));
    l.lastRenderedReducer = n;
    var o = wn, f = o.baseQueue, v = l.pending;
    if (v !== null) {
      if (f !== null) {
        var E = f.next;
        f.next = v.next, v.next = E;
      }
      o.baseQueue = f = v, l.pending = null;
    }
    if (f !== null) {
      v = f.next, o = o.baseState;
      var k = E = null, N = null, K = v;
      do {
        var ve = K.lane;
        if ((Bt & ve) === ve) N !== null && (N = N.next = { lane: 0, action: K.action, hasEagerState: K.hasEagerState, eagerState: K.eagerState, next: null }), o = K.hasEagerState ? K.eagerState : n(o, K.action);
        else {
          var ye = {
            lane: ve,
            action: K.action,
            hasEagerState: K.hasEagerState,
            eagerState: K.eagerState,
            next: null
          };
          N === null ? (k = N = ye, E = o) : N = N.next = ye, Ot.lanes |= ve, ri |= ve;
        }
        K = K.next;
      } while (K !== null && K !== v);
      N === null ? E = o : N.next = k, Aa(o, r.memoizedState) || (Rn = !0), r.memoizedState = o, r.baseState = E, r.baseQueue = N, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      f = n;
      do
        v = f.lane, Ot.lanes |= v, ri |= v, f = f.next;
      while (f !== n);
    } else f === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function Zl(n) {
    var r = pn(), l = r.queue;
    if (l === null) throw Error(m(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, f = l.pending, v = r.memoizedState;
    if (f !== null) {
      l.pending = null;
      var E = f = f.next;
      do
        v = n(v, E.action), E = E.next;
      while (E !== f);
      Aa(v, r.memoizedState) || (Rn = !0), r.memoizedState = v, r.baseQueue === null && (r.baseState = v), l.lastRenderedState = v;
    }
    return [v, o];
  }
  function Wc() {
  }
  function Qc(n, r) {
    var l = Ot, o = pn(), f = r(), v = !Aa(o.memoizedState, f);
    if (v && (o.memoizedState = f, Rn = !0), o = o.queue, fs(Xc.bind(null, l, o, n), [n]), o.getSnapshot !== r || v || Bn !== null && Bn.memoizedState.tag & 1) {
      if (l.flags |= 2048, Jl(9, Kc.bind(null, l, o, f, r), void 0, null), Ln === null) throw Error(m(349));
      (Bt & 30) !== 0 || Gc(l, r, f);
    }
    return f;
  }
  function Gc(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = Ot.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Ot.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function Kc(n, r, l, o) {
    r.value = l, r.getSnapshot = o, Zc(r) && Jc(n);
  }
  function Xc(n, r, l) {
    return l(function() {
      Zc(r) && Jc(n);
    });
  }
  function Zc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !Aa(n, l);
    } catch {
      return !0;
    }
  }
  function Jc(n) {
    var r = Xr(n, 1);
    r !== null && gr(r, n, 1, -1);
  }
  function ef(n) {
    var r = sr();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: _i, lastRenderedState: n }, r.queue = n, n = n.dispatch = tu.bind(null, Ot, n), [r.memoizedState, n];
  }
  function Jl(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = Ot.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Ot.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function tf() {
    return pn().memoizedState;
  }
  function io(n, r, l, o) {
    var f = sr();
    Ot.flags |= n, f.memoizedState = Jl(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function lo(n, r, l, o) {
    var f = pn();
    o = o === void 0 ? null : o;
    var v = void 0;
    if (wn !== null) {
      var E = wn.memoizedState;
      if (v = E.destroy, o !== null && Je(o, E.deps)) {
        f.memoizedState = Jl(r, l, v, o);
        return;
      }
    }
    Ot.flags |= n, f.memoizedState = Jl(1 | r, l, v, o);
  }
  function nf(n, r) {
    return io(8390656, 8, n, r);
  }
  function fs(n, r) {
    return lo(2048, 8, n, r);
  }
  function rf(n, r) {
    return lo(4, 2, n, r);
  }
  function ds(n, r) {
    return lo(4, 4, n, r);
  }
  function eu(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function af(n, r, l) {
    return l = l != null ? l.concat([n]) : null, lo(4, 4, eu.bind(null, r, n), l);
  }
  function ps() {
  }
  function lf(n, r) {
    var l = pn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Je(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function uf(n, r) {
    var l = pn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Je(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function Xd(n, r, l) {
    return (Bt & 21) === 0 ? (n.baseState && (n.baseState = !1, Rn = !0), n.memoizedState = l) : (Aa(l, r) || (l = ju(), Ot.lanes |= l, ri |= l, n.baseState = !0), r);
  }
  function vs(n, r) {
    var l = _t;
    _t = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = Mt.transition;
    Mt.transition = {};
    try {
      n(!1), r();
    } finally {
      _t = l, Mt.transition = o;
    }
  }
  function Zd() {
    return pn().memoizedState;
  }
  function hs(n, r, l) {
    var o = ai(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, Jr(n)) dh(r, l);
    else if (l = Wd(n, r, l, o), l !== null) {
      var f = kn();
      gr(l, n, o, f), jt(l, r, o);
    }
  }
  function tu(n, r, l) {
    var o = ai(n), f = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (Jr(n)) dh(r, f);
    else {
      var v = n.alternate;
      if (n.lanes === 0 && (v === null || v.lanes === 0) && (v = r.lastRenderedReducer, v !== null)) try {
        var E = r.lastRenderedState, k = v(E, l);
        if (f.hasEagerState = !0, f.eagerState = k, Aa(k, E)) {
          var N = r.interleaved;
          N === null ? (f.next = f, qd(r)) : (f.next = N.next, N.next = f), r.interleaved = f;
          return;
        }
      } catch {
      } finally {
      }
      l = Wd(n, r, f, o), l !== null && (f = kn(), gr(l, n, o, f), jt(l, r, o));
    }
  }
  function Jr(n) {
    var r = n.alternate;
    return n === Ot || r !== null && r === Ot;
  }
  function dh(n, r) {
    cs = qc = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function jt(n, r, l) {
    if ((l & 4194240) !== 0) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Ll(n, l);
    }
  }
  var nu = { readContext: ga, useCallback: kt, useContext: kt, useEffect: kt, useImperativeHandle: kt, useInsertionEffect: kt, useLayoutEffect: kt, useMemo: kt, useReducer: kt, useRef: kt, useState: kt, useDebugValue: kt, useDeferredValue: kt, useTransition: kt, useMutableSource: kt, useSyncExternalStore: kt, useId: kt, unstable_isNewReconciler: !1 }, of = { readContext: ga, useCallback: function(n, r) {
    return sr().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: ga, useEffect: nf, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, io(
      4194308,
      4,
      eu.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return io(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return io(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = sr();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = sr();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = hs.bind(null, Ot, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = sr();
    return n = { current: n }, r.memoizedState = n;
  }, useState: ef, useDebugValue: ps, useDeferredValue: function(n) {
    return sr().memoizedState = n;
  }, useTransition: function() {
    var n = ef(!1), r = n[0];
    return n = vs.bind(null, n[1]), sr().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = Ot, f = sr();
    if (Xt) {
      if (l === void 0) throw Error(m(407));
      l = l();
    } else {
      if (l = r(), Ln === null) throw Error(m(349));
      (Bt & 30) !== 0 || Gc(o, r, l);
    }
    f.memoizedState = l;
    var v = { value: l, getSnapshot: r };
    return f.queue = v, nf(Xc.bind(
      null,
      o,
      v,
      n
    ), [n]), o.flags |= 2048, Jl(9, Kc.bind(null, o, v, l, r), void 0, null), l;
  }, useId: function() {
    var n = sr(), r = Ln.identifierPrefix;
    if (Xt) {
      var l = Za, o = Xa;
      l = (o & ~(1 << 32 - nt(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = Xl++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = de++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, ms = {
    readContext: ga,
    useCallback: lf,
    useContext: ga,
    useEffect: fs,
    useImperativeHandle: af,
    useInsertionEffect: rf,
    useLayoutEffect: ds,
    useMemo: uf,
    useReducer: fl,
    useRef: tf,
    useState: function() {
      return fl(_i);
    },
    useDebugValue: ps,
    useDeferredValue: function(n) {
      var r = pn();
      return Xd(r, wn.memoizedState, n);
    },
    useTransition: function() {
      var n = fl(_i)[0], r = pn().memoizedState;
      return [n, r];
    },
    useMutableSource: Wc,
    useSyncExternalStore: Qc,
    useId: Zd,
    unstable_isNewReconciler: !1
  }, sf = { readContext: ga, useCallback: lf, useContext: ga, useEffect: fs, useImperativeHandle: af, useInsertionEffect: rf, useLayoutEffect: ds, useMemo: uf, useReducer: Zl, useRef: tf, useState: function() {
    return Zl(_i);
  }, useDebugValue: ps, useDeferredValue: function(n) {
    var r = pn();
    return wn === null ? r.memoizedState = n : Xd(r, wn.memoizedState, n);
  }, useTransition: function() {
    var n = Zl(_i)[0], r = pn().memoizedState;
    return [n, r];
  }, useMutableSource: Wc, useSyncExternalStore: Qc, useId: Zd, unstable_isNewReconciler: !1 };
  function za(n, r) {
    if (n && n.defaultProps) {
      r = Te({}, r), n = n.defaultProps;
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function Jd(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : Te({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var cf = { isMounted: function(n) {
    return (n = n._reactInternals) ? _r(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = kn(), f = ai(n), v = ki(o, f);
    v.payload = r, l != null && (v.callback = l), r = sl(n, v, f), r !== null && (gr(r, n, f, o), Vc(r, n, f));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = kn(), f = ai(n), v = ki(o, f);
    v.tag = 1, v.payload = r, l != null && (v.callback = l), r = sl(n, v, f), r !== null && (gr(r, n, f, o), Vc(r, n, f));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = kn(), o = ai(n), f = ki(l, o);
    f.tag = 2, r != null && (f.callback = r), r = sl(n, f, o), r !== null && (gr(r, n, o, l), Vc(r, n, o));
  } };
  function ph(n, r, l, o, f, v, E) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, v, E) : r.prototype && r.prototype.isPureReactComponent ? !Go(l, o) || !Go(f, v) : !0;
  }
  function ff(n, r, l) {
    var o = !1, f = Lr, v = r.contextType;
    return typeof v == "object" && v !== null ? v = ga(v) : (f = Tn(r) ? Nr : on.current, o = r.contextTypes, v = (o = o != null) ? ha(n, f) : Lr), r = new r(l, v), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = cf, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = f, n.__reactInternalMemoizedMaskedChildContext = v), r;
  }
  function vh(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && cf.enqueueReplaceState(r, r.state, null);
  }
  function ys(n, r, l, o) {
    var f = n.stateNode;
    f.props = l, f.state = n.memoizedState, f.refs = {}, Qd(n);
    var v = r.contextType;
    typeof v == "object" && v !== null ? f.context = ga(v) : (v = Tn(r) ? Nr : on.current, f.context = ha(n, v)), f.state = n.memoizedState, v = r.getDerivedStateFromProps, typeof v == "function" && (Jd(n, r, v, l), f.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (r = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), r !== f.state && cf.enqueueReplaceState(f, f.state, null), is(n, l, f, o), f.state = n.memoizedState), typeof f.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function ru(n, r) {
    try {
      var l = "", o = r;
      do
        l += cn(o), o = o.return;
      while (o);
      var f = l;
    } catch (v) {
      f = `
Error generating stack: ` + v.message + `
` + v.stack;
    }
    return { value: n, source: r, stack: f, digest: null };
  }
  function ep(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function tp(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var df = typeof WeakMap == "function" ? WeakMap : Map;
  function hh(n, r, l) {
    l = ki(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      po || (po = !0, lu = o), tp(n, r);
    }, l;
  }
  function np(n, r, l) {
    l = ki(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var f = r.value;
      l.payload = function() {
        return o(f);
      }, l.callback = function() {
        tp(n, r);
      };
    }
    var v = n.stateNode;
    return v !== null && typeof v.componentDidCatch == "function" && (l.callback = function() {
      tp(n, r), typeof o != "function" && (vl === null ? vl = /* @__PURE__ */ new Set([this]) : vl.add(this));
      var E = r.stack;
      this.componentDidCatch(r.value, { componentStack: E !== null ? E : "" });
    }), l;
  }
  function rp(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new df();
      var f = /* @__PURE__ */ new Set();
      o.set(r, f);
    } else f = o.get(r), f === void 0 && (f = /* @__PURE__ */ new Set(), o.set(r, f));
    f.has(l) || (f.add(l), n = fg.bind(null, n, r, l), r.then(n, n));
  }
  function mh(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function dl(n, r, l, o, f) {
    return (n.mode & 1) === 0 ? (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = ki(-1, 1), r.tag = 2, sl(l, r, 1))), l.lanes |= 1), n) : (n.flags |= 65536, n.lanes = f, n);
  }
  var gs = me.ReactCurrentOwner, Rn = !1;
  function Qn(n, r, l, o) {
    r.child = n === null ? we(r, null, l, o) : dn(r, n.child, l, o);
  }
  function Br(n, r, l, o, f) {
    l = l.render;
    var v = r.ref;
    return tn(r, f), o = cl(n, r, l, o, v, f), l = Ua(), n !== null && !Rn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~f, Sa(n, r, f)) : (Xt && l && Bc(r), r.flags |= 1, Qn(n, r, o, f), r.child);
  }
  function au(n, r, l, o, f) {
    if (n === null) {
      var v = l.type;
      return typeof v == "function" && !yp(v) && v.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = v, ft(n, r, v, o, f)) : (n = Ns(l.type, null, o, r, r.mode, f), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (v = n.child, (n.lanes & f) === 0) {
      var E = v.memoizedProps;
      if (l = l.compare, l = l !== null ? l : Go, l(E, o) && n.ref === r.ref) return Sa(n, r, f);
    }
    return r.flags |= 1, n = ml(v, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function ft(n, r, l, o, f) {
    if (n !== null) {
      var v = n.memoizedProps;
      if (Go(v, o) && n.ref === r.ref) if (Rn = !1, r.pendingProps = o = v, (n.lanes & f) !== 0) (n.flags & 131072) !== 0 && (Rn = !0);
      else return r.lanes = n.lanes, Sa(n, r, f);
    }
    return yh(n, r, l, o, f);
  }
  function Es(n, r, l) {
    var o = r.pendingProps, f = o.children, v = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden") if ((r.mode & 1) === 0) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, $e(so, ea), ea |= l;
    else {
      if ((l & 1073741824) === 0) return n = v !== null ? v.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, $e(so, ea), ea |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = v !== null ? v.baseLanes : l, $e(so, ea), ea |= o;
    }
    else v !== null ? (o = v.baseLanes | l, r.memoizedState = null) : o = l, $e(so, ea), ea |= o;
    return Qn(n, r, f, l), r.child;
  }
  function ap(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function yh(n, r, l, o, f) {
    var v = Tn(l) ? Nr : on.current;
    return v = ha(r, v), tn(r, f), l = cl(n, r, l, o, v, f), o = Ua(), n !== null && !Rn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~f, Sa(n, r, f)) : (Xt && o && Bc(r), r.flags |= 1, Qn(n, r, l, f), r.child);
  }
  function gh(n, r, l, o, f) {
    if (Tn(l)) {
      var v = !0;
      Ur(r);
    } else v = !1;
    if (tn(r, f), r.stateNode === null) Ea(n, r), ff(r, l, o), ys(r, l, o, f), o = !0;
    else if (n === null) {
      var E = r.stateNode, k = r.memoizedProps;
      E.props = k;
      var N = E.context, K = l.contextType;
      typeof K == "object" && K !== null ? K = ga(K) : (K = Tn(l) ? Nr : on.current, K = ha(r, K));
      var ve = l.getDerivedStateFromProps, ye = typeof ve == "function" || typeof E.getSnapshotBeforeUpdate == "function";
      ye || typeof E.UNSAFE_componentWillReceiveProps != "function" && typeof E.componentWillReceiveProps != "function" || (k !== o || N !== K) && vh(r, E, o, K), Zr = !1;
      var pe = r.memoizedState;
      E.state = pe, is(r, o, E, f), N = r.memoizedState, k !== o || pe !== N || On.current || Zr ? (typeof ve == "function" && (Jd(r, l, ve, o), N = r.memoizedState), (k = Zr || ph(r, l, k, o, pe, N, K)) ? (ye || typeof E.UNSAFE_componentWillMount != "function" && typeof E.componentWillMount != "function" || (typeof E.componentWillMount == "function" && E.componentWillMount(), typeof E.UNSAFE_componentWillMount == "function" && E.UNSAFE_componentWillMount()), typeof E.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof E.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = N), E.props = o, E.state = N, E.context = K, o = k) : (typeof E.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      E = r.stateNode, sh(n, r), k = r.memoizedProps, K = r.type === r.elementType ? k : za(r.type, k), E.props = K, ye = r.pendingProps, pe = E.context, N = l.contextType, typeof N == "object" && N !== null ? N = ga(N) : (N = Tn(l) ? Nr : on.current, N = ha(r, N));
      var _e = l.getDerivedStateFromProps;
      (ve = typeof _e == "function" || typeof E.getSnapshotBeforeUpdate == "function") || typeof E.UNSAFE_componentWillReceiveProps != "function" && typeof E.componentWillReceiveProps != "function" || (k !== ye || pe !== N) && vh(r, E, o, N), Zr = !1, pe = r.memoizedState, E.state = pe, is(r, o, E, f);
      var ze = r.memoizedState;
      k !== ye || pe !== ze || On.current || Zr ? (typeof _e == "function" && (Jd(r, l, _e, o), ze = r.memoizedState), (K = Zr || ph(r, l, K, o, pe, ze, N) || !1) ? (ve || typeof E.UNSAFE_componentWillUpdate != "function" && typeof E.componentWillUpdate != "function" || (typeof E.componentWillUpdate == "function" && E.componentWillUpdate(o, ze, N), typeof E.UNSAFE_componentWillUpdate == "function" && E.UNSAFE_componentWillUpdate(o, ze, N)), typeof E.componentDidUpdate == "function" && (r.flags |= 4), typeof E.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof E.componentDidUpdate != "function" || k === n.memoizedProps && pe === n.memoizedState || (r.flags |= 4), typeof E.getSnapshotBeforeUpdate != "function" || k === n.memoizedProps && pe === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = ze), E.props = o, E.state = ze, E.context = N, o = K) : (typeof E.componentDidUpdate != "function" || k === n.memoizedProps && pe === n.memoizedState || (r.flags |= 4), typeof E.getSnapshotBeforeUpdate != "function" || k === n.memoizedProps && pe === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return Ss(n, r, l, o, v, f);
  }
  function Ss(n, r, l, o, f, v) {
    ap(n, r);
    var E = (r.flags & 128) !== 0;
    if (!o && !E) return f && Ic(r, l, !1), Sa(n, r, v);
    o = r.stateNode, gs.current = r;
    var k = E && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && E ? (r.child = dn(r, n.child, null, v), r.child = dn(r, null, k, v)) : Qn(n, r, k, v), r.memoizedState = o.state, f && Ic(r, l, !0), r.child;
  }
  function uo(n) {
    var r = n.stateNode;
    r.pendingContext ? ih(n, r.pendingContext, r.pendingContext !== r.context) : r.context && ih(n, r.context, !1), Kd(n, r.containerInfo);
  }
  function Eh(n, r, l, o, f) {
    return ol(), Di(f), r.flags |= 256, Qn(n, r, l, o), r.child;
  }
  var pf = { dehydrated: null, treeContext: null, retryLane: 0 };
  function ip(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function vf(n, r, l) {
    var o = r.pendingProps, f = nn.current, v = !1, E = (r.flags & 128) !== 0, k;
    if ((k = E) || (k = n !== null && n.memoizedState === null ? !1 : (f & 2) !== 0), k ? (v = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (f |= 1), $e(nn, f & 1), n === null)
      return Hd(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? ((r.mode & 1) === 0 ? r.lanes = 1 : n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824, null) : (E = o.children, n = o.fallback, v ? (o = r.mode, v = r.child, E = { mode: "hidden", children: E }, (o & 1) === 0 && v !== null ? (v.childLanes = 0, v.pendingProps = E) : v = yl(E, o, 0, null), n = Li(n, o, l, null), v.return = r, n.return = r, v.sibling = n, r.child = v, r.child.memoizedState = ip(l), r.memoizedState = pf, n) : lp(r, E));
    if (f = n.memoizedState, f !== null && (k = f.dehydrated, k !== null)) return Sh(n, r, E, o, k, f, l);
    if (v) {
      v = o.fallback, E = r.mode, f = n.child, k = f.sibling;
      var N = { mode: "hidden", children: o.children };
      return (E & 1) === 0 && r.child !== f ? (o = r.child, o.childLanes = 0, o.pendingProps = N, r.deletions = null) : (o = ml(f, N), o.subtreeFlags = f.subtreeFlags & 14680064), k !== null ? v = ml(k, v) : (v = Li(v, E, l, null), v.flags |= 2), v.return = r, o.return = r, o.sibling = v, r.child = o, o = v, v = r.child, E = n.child.memoizedState, E = E === null ? ip(l) : { baseLanes: E.baseLanes | l, cachePool: null, transitions: E.transitions }, v.memoizedState = E, v.childLanes = n.childLanes & ~l, r.memoizedState = pf, o;
    }
    return v = n.child, n = v.sibling, o = ml(v, { mode: "visible", children: o.children }), (r.mode & 1) === 0 && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function lp(n, r) {
    return r = yl({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function bs(n, r, l, o) {
    return o !== null && Di(o), dn(r, n.child, null, l), n = lp(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Sh(n, r, l, o, f, v, E) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = ep(Error(m(422))), bs(n, r, E, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (v = o.fallback, f = r.mode, o = yl({ mode: "visible", children: o.children }, f, 0, null), v = Li(v, f, E, null), v.flags |= 2, o.return = r, v.return = r, o.sibling = v, r.child = o, (r.mode & 1) !== 0 && dn(r, n.child, null, E), r.child.memoizedState = ip(E), r.memoizedState = pf, v);
    if ((r.mode & 1) === 0) return bs(n, r, E, null);
    if (f.data === "$!") {
      if (o = f.nextSibling && f.nextSibling.dataset, o) var k = o.dgst;
      return o = k, v = Error(m(419)), o = ep(v, o, void 0), bs(n, r, E, o);
    }
    if (k = (E & n.childLanes) !== 0, Rn || k) {
      if (o = Ln, o !== null) {
        switch (E & -E) {
          case 4:
            f = 2;
            break;
          case 16:
            f = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            f = 32;
            break;
          case 536870912:
            f = 268435456;
            break;
          default:
            f = 0;
        }
        f = (f & (o.suspendedLanes | E)) !== 0 ? 0 : f, f !== 0 && f !== v.retryLane && (v.retryLane = f, Xr(n, f), gr(o, n, f, -1));
      }
      return mp(), o = ep(Error(m(421))), bs(n, r, E, o);
    }
    return f.data === "$?" ? (r.flags |= 128, r.child = n.child, r = dg.bind(null, n), f._reactRetry = r, null) : (n = v.treeContext, Ir = Wa(f.nextSibling), zr = r, Xt = !0, ya = null, n !== null && (Cn[ma++] = Xa, Cn[ma++] = Za, Cn[ma++] = Gr, Xa = n.id, Za = n.overflow, Gr = r), r = lp(r, o.children), r.flags |= 4096, r);
  }
  function up(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), Yd(n.return, r, l);
  }
  function hr(n, r, l, o, f) {
    var v = n.memoizedState;
    v === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: f } : (v.isBackwards = r, v.rendering = null, v.renderingStartTime = 0, v.last = o, v.tail = l, v.tailMode = f);
  }
  function ei(n, r, l) {
    var o = r.pendingProps, f = o.revealOrder, v = o.tail;
    if (Qn(n, r, o.children, l), o = nn.current, (o & 2) !== 0) o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && (n.flags & 128) !== 0) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && up(n, l, r);
        else if (n.tag === 19) up(n, l, r);
        else if (n.child !== null) {
          n.child.return = n, n = n.child;
          continue;
        }
        if (n === r) break e;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === r) break e;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
      o &= 1;
    }
    if ($e(nn, o), (r.mode & 1) === 0) r.memoizedState = null;
    else switch (f) {
      case "forwards":
        for (l = r.child, f = null; l !== null; ) n = l.alternate, n !== null && Yc(n) === null && (f = l), l = l.sibling;
        l = f, l === null ? (f = r.child, r.child = null) : (f = l.sibling, l.sibling = null), hr(r, !1, f, l, v);
        break;
      case "backwards":
        for (l = null, f = r.child, r.child = null; f !== null; ) {
          if (n = f.alternate, n !== null && Yc(n) === null) {
            r.child = f;
            break;
          }
          n = f.sibling, f.sibling = l, l = f, f = n;
        }
        hr(r, !0, l, null, v);
        break;
      case "together":
        hr(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function Ea(n, r) {
    (r.mode & 1) === 0 && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function Sa(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), ri |= r.lanes, (l & r.childLanes) === 0) return null;
    if (n !== null && r.child !== n.child) throw Error(m(153));
    if (r.child !== null) {
      for (n = r.child, l = ml(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; ) n = n.sibling, l = l.sibling = ml(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function Ts(n, r, l) {
    switch (r.tag) {
      case 3:
        uo(r), ol();
        break;
      case 5:
        fh(r);
        break;
      case 1:
        Tn(r.type) && Ur(r);
        break;
      case 4:
        Kd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, f = r.memoizedProps.value;
        $e(Kr, o._currentValue), o._currentValue = f;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? ($e(nn, nn.current & 1), r.flags |= 128, null) : (l & r.child.childLanes) !== 0 ? vf(n, r, l) : ($e(nn, nn.current & 1), n = Sa(n, r, l), n !== null ? n.sibling : null);
        $e(nn, nn.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, (n.flags & 128) !== 0) {
          if (o) return ei(n, r, l);
          r.flags |= 128;
        }
        if (f = r.memoizedState, f !== null && (f.rendering = null, f.tail = null, f.lastEffect = null), $e(nn, nn.current), o) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, Es(n, r, l);
    }
    return Sa(n, r, l);
  }
  var ba, xn, bh, Th;
  ba = function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6) n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r) return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, xn = function() {
  }, bh = function(n, r, l, o) {
    var f = n.memoizedProps;
    if (f !== o) {
      n = r.stateNode, Gl(Ja.current);
      var v = null;
      switch (l) {
        case "input":
          f = ot(n, f), o = ot(n, o), v = [];
          break;
        case "select":
          f = Te({}, f, { value: void 0 }), o = Te({}, o, { value: void 0 }), v = [];
          break;
        case "textarea":
          f = Vn(n, f), o = Vn(n, o), v = [];
          break;
        default:
          typeof f.onClick != "function" && typeof o.onClick == "function" && (n.onclick = nl);
      }
      Ve(l, o);
      var E;
      l = null;
      for (K in f) if (!o.hasOwnProperty(K) && f.hasOwnProperty(K) && f[K] != null) if (K === "style") {
        var k = f[K];
        for (E in k) k.hasOwnProperty(E) && (l || (l = {}), l[E] = "");
      } else K !== "dangerouslySetInnerHTML" && K !== "children" && K !== "suppressContentEditableWarning" && K !== "suppressHydrationWarning" && K !== "autoFocus" && (O.hasOwnProperty(K) ? v || (v = []) : (v = v || []).push(K, null));
      for (K in o) {
        var N = o[K];
        if (k = f != null ? f[K] : void 0, o.hasOwnProperty(K) && N !== k && (N != null || k != null)) if (K === "style") if (k) {
          for (E in k) !k.hasOwnProperty(E) || N && N.hasOwnProperty(E) || (l || (l = {}), l[E] = "");
          for (E in N) N.hasOwnProperty(E) && k[E] !== N[E] && (l || (l = {}), l[E] = N[E]);
        } else l || (v || (v = []), v.push(
          K,
          l
        )), l = N;
        else K === "dangerouslySetInnerHTML" ? (N = N ? N.__html : void 0, k = k ? k.__html : void 0, N != null && k !== N && (v = v || []).push(K, N)) : K === "children" ? typeof N != "string" && typeof N != "number" || (v = v || []).push(K, "" + N) : K !== "suppressContentEditableWarning" && K !== "suppressHydrationWarning" && (O.hasOwnProperty(K) ? (N != null && K === "onScroll" && Ut("scroll", n), v || k === N || (v = [])) : (v = v || []).push(K, N));
      }
      l && (v = v || []).push("style", l);
      var K = v;
      (r.updateQueue = K) && (r.flags |= 4);
    }
  }, Th = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function Cs(n, r) {
    if (!Xt) switch (n.tailMode) {
      case "hidden":
        r = n.tail;
        for (var l = null; r !== null; ) r.alternate !== null && (l = r), r = r.sibling;
        l === null ? n.tail = null : l.sibling = null;
        break;
      case "collapsed":
        l = n.tail;
        for (var o = null; l !== null; ) l.alternate !== null && (o = l), l = l.sibling;
        o === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : o.sibling = null;
    }
  }
  function Pn(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r) for (var f = n.child; f !== null; ) l |= f.lanes | f.childLanes, o |= f.subtreeFlags & 14680064, o |= f.flags & 14680064, f.return = n, f = f.sibling;
    else for (f = n.child; f !== null; ) l |= f.lanes | f.childLanes, o |= f.subtreeFlags, o |= f.flags, f.return = n, f = f.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function Ch(n, r, l) {
    var o = r.pendingProps;
    switch (Pc(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Pn(r), null;
      case 1:
        return Tn(r.type) && no(), Pn(r), null;
      case 3:
        return o = r.stateNode, Kl(), $t(On), $t(on), qe(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (Hc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && (r.flags & 256) === 0 || (r.flags |= 1024, ya !== null && (uu(ya), ya = null))), xn(n, r), Pn(r), null;
      case 5:
        $c(r);
        var f = Gl(os.current);
        if (l = r.type, n !== null && r.stateNode != null) bh(n, r, l, o, f), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null) throw Error(m(166));
            return Pn(r), null;
          }
          if (n = Gl(Ja.current), Hc(r)) {
            o = r.stateNode, l = r.type;
            var v = r.memoizedProps;
            switch (o[Qa] = r, o[ts] = v, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                Ut("cancel", o), Ut("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                Ut("load", o);
                break;
              case "video":
              case "audio":
                for (f = 0; f < Zo.length; f++) Ut(Zo[f], o);
                break;
              case "source":
                Ut("error", o);
                break;
              case "img":
              case "image":
              case "link":
                Ut(
                  "error",
                  o
                ), Ut("load", o);
                break;
              case "details":
                Ut("toggle", o);
                break;
              case "input":
                Ct(o, v), Ut("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!v.multiple }, Ut("invalid", o);
                break;
              case "textarea":
                ir(o, v), Ut("invalid", o);
            }
            Ve(l, v), f = null;
            for (var E in v) if (v.hasOwnProperty(E)) {
              var k = v[E];
              E === "children" ? typeof k == "string" ? o.textContent !== k && (v.suppressHydrationWarning !== !0 && Lc(o.textContent, k, n), f = ["children", k]) : typeof k == "number" && o.textContent !== "" + k && (v.suppressHydrationWarning !== !0 && Lc(
                o.textContent,
                k,
                n
              ), f = ["children", "" + k]) : O.hasOwnProperty(E) && k != null && E === "onScroll" && Ut("scroll", o);
            }
            switch (l) {
              case "input":
                fe(o), dr(o, v, !0);
                break;
              case "textarea":
                fe(o), $n(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof v.onClick == "function" && (o.onclick = nl);
            }
            o = f, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            E = f.nodeType === 9 ? f : f.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = lr(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = E.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = E.createElement(l, { is: o.is }) : (n = E.createElement(l), l === "select" && (E = n, o.multiple ? E.multiple = !0 : o.size && (E.size = o.size))) : n = E.createElementNS(n, l), n[Qa] = r, n[ts] = o, ba(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (E = st(l, o), l) {
                case "dialog":
                  Ut("cancel", n), Ut("close", n), f = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Ut("load", n), f = o;
                  break;
                case "video":
                case "audio":
                  for (f = 0; f < Zo.length; f++) Ut(Zo[f], n);
                  f = o;
                  break;
                case "source":
                  Ut("error", n), f = o;
                  break;
                case "img":
                case "image":
                case "link":
                  Ut(
                    "error",
                    n
                  ), Ut("load", n), f = o;
                  break;
                case "details":
                  Ut("toggle", n), f = o;
                  break;
                case "input":
                  Ct(n, o), f = ot(n, o), Ut("invalid", n);
                  break;
                case "option":
                  f = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, f = Te({}, o, { value: void 0 }), Ut("invalid", n);
                  break;
                case "textarea":
                  ir(n, o), f = Vn(n, o), Ut("invalid", n);
                  break;
                default:
                  f = o;
              }
              Ve(l, f), k = f;
              for (v in k) if (k.hasOwnProperty(v)) {
                var N = k[v];
                v === "style" ? Qe(n, N) : v === "dangerouslySetInnerHTML" ? (N = N ? N.__html : void 0, N != null && vi(n, N)) : v === "children" ? typeof N == "string" ? (l !== "textarea" || N !== "") && b(n, N) : typeof N == "number" && b(n, "" + N) : v !== "suppressContentEditableWarning" && v !== "suppressHydrationWarning" && v !== "autoFocus" && (O.hasOwnProperty(v) ? N != null && v === "onScroll" && Ut("scroll", n) : N != null && oe(n, v, N, E));
              }
              switch (l) {
                case "input":
                  fe(n), dr(n, o, !1);
                  break;
                case "textarea":
                  fe(n), $n(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + En(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, v = o.value, v != null ? In(n, !!o.multiple, v, !1) : o.defaultValue != null && In(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof f.onClick == "function" && (n.onclick = nl);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  o = !!o.autoFocus;
                  break e;
                case "img":
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return Pn(r), null;
      case 6:
        if (n && r.stateNode != null) Th(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null) throw Error(m(166));
          if (l = Gl(os.current), Gl(Ja.current), Hc(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[Qa] = r, (v = o.nodeValue !== l) && (n = zr, n !== null)) switch (n.tag) {
              case 3:
                Lc(o.nodeValue, l, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && Lc(o.nodeValue, l, (n.mode & 1) !== 0);
            }
            v && (r.flags |= 4);
          } else o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[Qa] = r, r.stateNode = o;
        }
        return Pn(r), null;
      case 13:
        if ($t(nn), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (Xt && Ir !== null && (r.mode & 1) !== 0 && (r.flags & 128) === 0) as(), ol(), r.flags |= 98560, v = !1;
          else if (v = Hc(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!v) throw Error(m(318));
              if (v = r.memoizedState, v = v !== null ? v.dehydrated : null, !v) throw Error(m(317));
              v[Qa] = r;
            } else ol(), (r.flags & 128) === 0 && (r.memoizedState = null), r.flags |= 4;
            Pn(r), v = !1;
          } else ya !== null && (uu(ya), ya = null), v = !0;
          if (!v) return r.flags & 65536 ? r : null;
        }
        return (r.flags & 128) !== 0 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, (r.mode & 1) !== 0 && (n === null || (nn.current & 1) !== 0 ? hn === 0 && (hn = 3) : mp())), r.updateQueue !== null && (r.flags |= 4), Pn(r), null);
      case 4:
        return Kl(), xn(n, r), n === null && Xu(r.stateNode.containerInfo), Pn(r), null;
      case 10:
        return $d(r.type._context), Pn(r), null;
      case 17:
        return Tn(r.type) && no(), Pn(r), null;
      case 19:
        if ($t(nn), v = r.memoizedState, v === null) return Pn(r), null;
        if (o = (r.flags & 128) !== 0, E = v.rendering, E === null) if (o) Cs(v, !1);
        else {
          if (hn !== 0 || n !== null && (n.flags & 128) !== 0) for (n = r.child; n !== null; ) {
            if (E = Yc(n), E !== null) {
              for (r.flags |= 128, Cs(v, !1), o = E.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; ) v = l, n = o, v.flags &= 14680066, E = v.alternate, E === null ? (v.childLanes = 0, v.lanes = n, v.child = null, v.subtreeFlags = 0, v.memoizedProps = null, v.memoizedState = null, v.updateQueue = null, v.dependencies = null, v.stateNode = null) : (v.childLanes = E.childLanes, v.lanes = E.lanes, v.child = E.child, v.subtreeFlags = 0, v.deletions = null, v.memoizedProps = E.memoizedProps, v.memoizedState = E.memoizedState, v.updateQueue = E.updateQueue, v.type = E.type, n = E.dependencies, v.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return $e(nn, nn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          v.tail !== null && It() > fo && (r.flags |= 128, o = !0, Cs(v, !1), r.lanes = 4194304);
        }
        else {
          if (!o) if (n = Yc(E), n !== null) {
            if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), Cs(v, !0), v.tail === null && v.tailMode === "hidden" && !E.alternate && !Xt) return Pn(r), null;
          } else 2 * It() - v.renderingStartTime > fo && l !== 1073741824 && (r.flags |= 128, o = !0, Cs(v, !1), r.lanes = 4194304);
          v.isBackwards ? (E.sibling = r.child, r.child = E) : (l = v.last, l !== null ? l.sibling = E : r.child = E, v.last = E);
        }
        return v.tail !== null ? (r = v.tail, v.rendering = r, v.tail = r.sibling, v.renderingStartTime = It(), r.sibling = null, l = nn.current, $e(nn, o ? l & 1 | 2 : l & 1), r) : (Pn(r), null);
      case 22:
      case 23:
        return hp(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && (r.mode & 1) !== 0 ? (ea & 1073741824) !== 0 && (Pn(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Pn(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(m(156, r.tag));
  }
  function hf(n, r) {
    switch (Pc(r), r.tag) {
      case 1:
        return Tn(r.type) && no(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Kl(), $t(On), $t(on), qe(), n = r.flags, (n & 65536) !== 0 && (n & 128) === 0 ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return $c(r), null;
      case 13:
        if ($t(nn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(m(340));
          ol();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return $t(nn), null;
      case 4:
        return Kl(), null;
      case 10:
        return $d(r.type._context), null;
      case 22:
      case 23:
        return hp(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var ws = !1, cr = !1, ig = typeof WeakSet == "function" ? WeakSet : Set, Ae = null;
  function oo(n, r) {
    var l = n.ref;
    if (l !== null) if (typeof l == "function") try {
      l(null);
    } catch (o) {
      Zt(n, r, o);
    }
    else l.current = null;
  }
  function mf(n, r, l) {
    try {
      l();
    } catch (o) {
      Zt(n, r, o);
    }
  }
  var wh = !1;
  function Rh(n, r) {
    if (es = zl, n = Ko(), Rc(n)) {
      if ("selectionStart" in n) var l = { start: n.selectionStart, end: n.selectionEnd };
      else e: {
        l = (l = n.ownerDocument) && l.defaultView || window;
        var o = l.getSelection && l.getSelection();
        if (o && o.rangeCount !== 0) {
          l = o.anchorNode;
          var f = o.anchorOffset, v = o.focusNode;
          o = o.focusOffset;
          try {
            l.nodeType, v.nodeType;
          } catch {
            l = null;
            break e;
          }
          var E = 0, k = -1, N = -1, K = 0, ve = 0, ye = n, pe = null;
          t: for (; ; ) {
            for (var _e; ye !== l || f !== 0 && ye.nodeType !== 3 || (k = E + f), ye !== v || o !== 0 && ye.nodeType !== 3 || (N = E + o), ye.nodeType === 3 && (E += ye.nodeValue.length), (_e = ye.firstChild) !== null; )
              pe = ye, ye = _e;
            for (; ; ) {
              if (ye === n) break t;
              if (pe === l && ++K === f && (k = E), pe === v && ++ve === o && (N = E), (_e = ye.nextSibling) !== null) break;
              ye = pe, pe = ye.parentNode;
            }
            ye = _e;
          }
          l = k === -1 || N === -1 ? null : { start: k, end: N };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (Vl = { focusedElem: n, selectionRange: l }, zl = !1, Ae = r; Ae !== null; ) if (r = Ae, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, Ae = n;
    else for (; Ae !== null; ) {
      r = Ae;
      try {
        var ze = r.alternate;
        if ((r.flags & 1024) !== 0) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (ze !== null) {
              var Pe = ze.memoizedProps, mn = ze.memoizedState, j = r.stateNode, F = j.getSnapshotBeforeUpdate(r.elementType === r.type ? Pe : za(r.type, Pe), mn);
              j.__reactInternalSnapshotBeforeUpdate = F;
            }
            break;
          case 3:
            var q = r.stateNode.containerInfo;
            q.nodeType === 1 ? q.textContent = "" : q.nodeType === 9 && q.documentElement && q.removeChild(q.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(m(163));
        }
      } catch (he) {
        Zt(r, r.return, he);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, Ae = n;
        break;
      }
      Ae = r.return;
    }
    return ze = wh, wh = !1, ze;
  }
  function Rs(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var f = o = o.next;
      do {
        if ((f.tag & n) === n) {
          var v = f.destroy;
          f.destroy = void 0, v !== void 0 && mf(r, l, v);
        }
        f = f.next;
      } while (f !== o);
    }
  }
  function xs(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var o = l.create;
          l.destroy = o();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function op(n) {
    var r = n.ref;
    if (r !== null) {
      var l = n.stateNode;
      switch (n.tag) {
        case 5:
          n = l;
          break;
        default:
          n = l;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function yf(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, yf(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Qa], delete r[ts], delete r[ns], delete r[to], delete r[rg])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Ds(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Mi(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || Ds(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function ti(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = nl));
    else if (o !== 4 && (n = n.child, n !== null)) for (ti(n, r, l), n = n.sibling; n !== null; ) ti(n, r, l), n = n.sibling;
  }
  function ni(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null)) for (ni(n, r, l), n = n.sibling; n !== null; ) ni(n, r, l), n = n.sibling;
  }
  var vn = null, mr = !1;
  function yr(n, r, l) {
    for (l = l.child; l !== null; ) xh(n, r, l), l = l.sibling;
  }
  function xh(n, r, l) {
    if (se && typeof se.onCommitFiberUnmount == "function") try {
      se.onCommitFiberUnmount(ae, l);
    } catch {
    }
    switch (l.tag) {
      case 5:
        cr || oo(l, r);
      case 6:
        var o = vn, f = mr;
        vn = null, yr(n, r, l), vn = o, mr = f, vn !== null && (mr ? (n = vn, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : vn.removeChild(l.stateNode));
        break;
      case 18:
        vn !== null && (mr ? (n = vn, l = l.stateNode, n.nodeType === 8 ? eo(n.parentNode, l) : n.nodeType === 1 && eo(n, l), Ji(n)) : eo(vn, l.stateNode));
        break;
      case 4:
        o = vn, f = mr, vn = l.stateNode.containerInfo, mr = !0, yr(n, r, l), vn = o, mr = f;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!cr && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          f = o = o.next;
          do {
            var v = f, E = v.destroy;
            v = v.tag, E !== void 0 && ((v & 2) !== 0 || (v & 4) !== 0) && mf(l, r, E), f = f.next;
          } while (f !== o);
        }
        yr(n, r, l);
        break;
      case 1:
        if (!cr && (oo(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function")) try {
          o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
        } catch (k) {
          Zt(l, r, k);
        }
        yr(n, r, l);
        break;
      case 21:
        yr(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (cr = (o = cr) || l.memoizedState !== null, yr(n, r, l), cr = o) : yr(n, r, l);
        break;
      default:
        yr(n, r, l);
    }
  }
  function Dh(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new ig()), r.forEach(function(o) {
        var f = zh.bind(null, n, o);
        l.has(o) || (l.add(o), o.then(f, f));
      });
    }
  }
  function Ia(n, r) {
    var l = r.deletions;
    if (l !== null) for (var o = 0; o < l.length; o++) {
      var f = l[o];
      try {
        var v = n, E = r, k = E;
        e: for (; k !== null; ) {
          switch (k.tag) {
            case 5:
              vn = k.stateNode, mr = !1;
              break e;
            case 3:
              vn = k.stateNode.containerInfo, mr = !0;
              break e;
            case 4:
              vn = k.stateNode.containerInfo, mr = !0;
              break e;
          }
          k = k.return;
        }
        if (vn === null) throw Error(m(160));
        xh(v, E, f), vn = null, mr = !1;
        var N = f.alternate;
        N !== null && (N.return = null), f.return = null;
      } catch (K) {
        Zt(f, r, K);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) sp(r, n), r = r.sibling;
  }
  function sp(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Ia(r, n), Pr(n), o & 4) {
          try {
            Rs(3, n, n.return), xs(3, n);
          } catch (Pe) {
            Zt(n, n.return, Pe);
          }
          try {
            Rs(5, n, n.return);
          } catch (Pe) {
            Zt(n, n.return, Pe);
          }
        }
        break;
      case 1:
        Ia(r, n), Pr(n), o & 512 && l !== null && oo(l, l.return);
        break;
      case 5:
        if (Ia(r, n), Pr(n), o & 512 && l !== null && oo(l, l.return), n.flags & 32) {
          var f = n.stateNode;
          try {
            b(f, "");
          } catch (Pe) {
            Zt(n, n.return, Pe);
          }
        }
        if (o & 4 && (f = n.stateNode, f != null)) {
          var v = n.memoizedProps, E = l !== null ? l.memoizedProps : v, k = n.type, N = n.updateQueue;
          if (n.updateQueue = null, N !== null) try {
            k === "input" && v.type === "radio" && v.name != null && wt(f, v), st(k, E);
            var K = st(k, v);
            for (E = 0; E < N.length; E += 2) {
              var ve = N[E], ye = N[E + 1];
              ve === "style" ? Qe(f, ye) : ve === "dangerouslySetInnerHTML" ? vi(f, ye) : ve === "children" ? b(f, ye) : oe(f, ve, ye, K);
            }
            switch (k) {
              case "input":
                ln(f, v);
                break;
              case "textarea":
                Ma(f, v);
                break;
              case "select":
                var pe = f._wrapperState.wasMultiple;
                f._wrapperState.wasMultiple = !!v.multiple;
                var _e = v.value;
                _e != null ? In(f, !!v.multiple, _e, !1) : pe !== !!v.multiple && (v.defaultValue != null ? In(
                  f,
                  !!v.multiple,
                  v.defaultValue,
                  !0
                ) : In(f, !!v.multiple, v.multiple ? [] : "", !1));
            }
            f[ts] = v;
          } catch (Pe) {
            Zt(n, n.return, Pe);
          }
        }
        break;
      case 6:
        if (Ia(r, n), Pr(n), o & 4) {
          if (n.stateNode === null) throw Error(m(162));
          f = n.stateNode, v = n.memoizedProps;
          try {
            f.nodeValue = v;
          } catch (Pe) {
            Zt(n, n.return, Pe);
          }
        }
        break;
      case 3:
        if (Ia(r, n), Pr(n), o & 4 && l !== null && l.memoizedState.isDehydrated) try {
          Ji(r.containerInfo);
        } catch (Pe) {
          Zt(n, n.return, Pe);
        }
        break;
      case 4:
        Ia(r, n), Pr(n);
        break;
      case 13:
        Ia(r, n), Pr(n), f = n.child, f.flags & 8192 && (v = f.memoizedState !== null, f.stateNode.isHidden = v, !v || f.alternate !== null && f.alternate.memoizedState !== null || (dp = It())), o & 4 && Dh(n);
        break;
      case 22:
        if (ve = l !== null && l.memoizedState !== null, n.mode & 1 ? (cr = (K = cr) || ve, Ia(r, n), cr = K) : Ia(r, n), Pr(n), o & 8192) {
          if (K = n.memoizedState !== null, (n.stateNode.isHidden = K) && !ve && (n.mode & 1) !== 0) for (Ae = n, ve = n.child; ve !== null; ) {
            for (ye = Ae = ve; Ae !== null; ) {
              switch (pe = Ae, _e = pe.child, pe.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Rs(4, pe, pe.return);
                  break;
                case 1:
                  oo(pe, pe.return);
                  var ze = pe.stateNode;
                  if (typeof ze.componentWillUnmount == "function") {
                    o = pe, l = pe.return;
                    try {
                      r = o, ze.props = r.memoizedProps, ze.state = r.memoizedState, ze.componentWillUnmount();
                    } catch (Pe) {
                      Zt(o, l, Pe);
                    }
                  }
                  break;
                case 5:
                  oo(pe, pe.return);
                  break;
                case 22:
                  if (pe.memoizedState !== null) {
                    ks(ye);
                    continue;
                  }
              }
              _e !== null ? (_e.return = pe, Ae = _e) : ks(ye);
            }
            ve = ve.sibling;
          }
          e: for (ve = null, ye = n; ; ) {
            if (ye.tag === 5) {
              if (ve === null) {
                ve = ye;
                try {
                  f = ye.stateNode, K ? (v = f.style, typeof v.setProperty == "function" ? v.setProperty("display", "none", "important") : v.display = "none") : (k = ye.stateNode, N = ye.memoizedProps.style, E = N != null && N.hasOwnProperty("display") ? N.display : null, k.style.display = Ce("display", E));
                } catch (Pe) {
                  Zt(n, n.return, Pe);
                }
              }
            } else if (ye.tag === 6) {
              if (ve === null) try {
                ye.stateNode.nodeValue = K ? "" : ye.memoizedProps;
              } catch (Pe) {
                Zt(n, n.return, Pe);
              }
            } else if ((ye.tag !== 22 && ye.tag !== 23 || ye.memoizedState === null || ye === n) && ye.child !== null) {
              ye.child.return = ye, ye = ye.child;
              continue;
            }
            if (ye === n) break e;
            for (; ye.sibling === null; ) {
              if (ye.return === null || ye.return === n) break e;
              ve === ye && (ve = null), ye = ye.return;
            }
            ve === ye && (ve = null), ye.sibling.return = ye.return, ye = ye.sibling;
          }
        }
        break;
      case 19:
        Ia(r, n), Pr(n), o & 4 && Dh(n);
        break;
      case 21:
        break;
      default:
        Ia(
          r,
          n
        ), Pr(n);
    }
  }
  function Pr(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (Ds(l)) {
              var o = l;
              break e;
            }
            l = l.return;
          }
          throw Error(m(160));
        }
        switch (o.tag) {
          case 5:
            var f = o.stateNode;
            o.flags & 32 && (b(f, ""), o.flags &= -33);
            var v = Mi(n);
            ni(n, v, f);
            break;
          case 3:
          case 4:
            var E = o.stateNode.containerInfo, k = Mi(n);
            ti(n, k, E);
            break;
          default:
            throw Error(m(161));
        }
      } catch (N) {
        Zt(n, n.return, N);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function lg(n, r, l) {
    Ae = n, cp(n);
  }
  function cp(n, r, l) {
    for (var o = (n.mode & 1) !== 0; Ae !== null; ) {
      var f = Ae, v = f.child;
      if (f.tag === 22 && o) {
        var E = f.memoizedState !== null || ws;
        if (!E) {
          var k = f.alternate, N = k !== null && k.memoizedState !== null || cr;
          k = ws;
          var K = cr;
          if (ws = E, (cr = N) && !K) for (Ae = f; Ae !== null; ) E = Ae, N = E.child, E.tag === 22 && E.memoizedState !== null ? fp(f) : N !== null ? (N.return = E, Ae = N) : fp(f);
          for (; v !== null; ) Ae = v, cp(v), v = v.sibling;
          Ae = f, ws = k, cr = K;
        }
        kh(n);
      } else (f.subtreeFlags & 8772) !== 0 && v !== null ? (v.return = f, Ae = v) : kh(n);
    }
  }
  function kh(n) {
    for (; Ae !== null; ) {
      var r = Ae;
      if ((r.flags & 8772) !== 0) {
        var l = r.alternate;
        try {
          if ((r.flags & 8772) !== 0) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              cr || xs(5, r);
              break;
            case 1:
              var o = r.stateNode;
              if (r.flags & 4 && !cr) if (l === null) o.componentDidMount();
              else {
                var f = r.elementType === r.type ? l.memoizedProps : za(r.type, l.memoizedProps);
                o.componentDidUpdate(f, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
              }
              var v = r.updateQueue;
              v !== null && Gd(r, v, o);
              break;
            case 3:
              var E = r.updateQueue;
              if (E !== null) {
                if (l = null, r.child !== null) switch (r.child.tag) {
                  case 5:
                    l = r.child.stateNode;
                    break;
                  case 1:
                    l = r.child.stateNode;
                }
                Gd(r, E, l);
              }
              break;
            case 5:
              var k = r.stateNode;
              if (l === null && r.flags & 4) {
                l = k;
                var N = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    N.autoFocus && l.focus();
                    break;
                  case "img":
                    N.src && (l.src = N.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (r.memoizedState === null) {
                var K = r.alternate;
                if (K !== null) {
                  var ve = K.memoizedState;
                  if (ve !== null) {
                    var ye = ve.dehydrated;
                    ye !== null && Ji(ye);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(m(163));
          }
          cr || r.flags & 512 && op(r);
        } catch (pe) {
          Zt(r, r.return, pe);
        }
      }
      if (r === n) {
        Ae = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, Ae = l;
        break;
      }
      Ae = r.return;
    }
  }
  function ks(n) {
    for (; Ae !== null; ) {
      var r = Ae;
      if (r === n) {
        Ae = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, Ae = l;
        break;
      }
      Ae = r.return;
    }
  }
  function fp(n) {
    for (; Ae !== null; ) {
      var r = Ae;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              xs(4, r);
            } catch (N) {
              Zt(r, l, N);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var f = r.return;
              try {
                o.componentDidMount();
              } catch (N) {
                Zt(r, f, N);
              }
            }
            var v = r.return;
            try {
              op(r);
            } catch (N) {
              Zt(r, v, N);
            }
            break;
          case 5:
            var E = r.return;
            try {
              op(r);
            } catch (N) {
              Zt(r, E, N);
            }
        }
      } catch (N) {
        Zt(r, r.return, N);
      }
      if (r === n) {
        Ae = null;
        break;
      }
      var k = r.sibling;
      if (k !== null) {
        k.return = r.return, Ae = k;
        break;
      }
      Ae = r.return;
    }
  }
  var ug = Math.ceil, pl = me.ReactCurrentDispatcher, iu = me.ReactCurrentOwner, Gn = me.ReactCurrentBatchConfig, St = 0, Ln = null, Dn = null, Kn = 0, ea = 0, so = Na(0), hn = 0, _s = null, ri = 0, co = 0, gf = 0, Ms = null, Hr = null, dp = 0, fo = 1 / 0, ta = null, po = !1, lu = null, vl = null, Ef = !1, Oi = null, Os = 0, hl = 0, vo = null, As = -1, fr = 0;
  function kn() {
    return (St & 6) !== 0 ? It() : As !== -1 ? As : As = It();
  }
  function ai(n) {
    return (n.mode & 1) === 0 ? 1 : (St & 2) !== 0 && Kn !== 0 ? Kn & -Kn : ag.transition !== null ? (fr === 0 && (fr = ju()), fr) : (n = _t, n !== 0 || (n = window.event, n = n === void 0 ? 16 : hc(n.type)), n);
  }
  function gr(n, r, l, o) {
    if (50 < hl) throw hl = 0, vo = null, Error(m(185));
    or(n, l, o), ((St & 2) === 0 || n !== Ln) && (n === Ln && ((St & 2) === 0 && (co |= l), hn === 4 && Fa(n, Kn)), jr(n, o), l === 1 && St === 0 && (r.mode & 1) === 0 && (fo = It() + 500, ro && Ka()));
  }
  function jr(n, r) {
    var l = n.callbackNode;
    Pu(n, r);
    var o = Ya(n, n === Ln ? Kn : 0);
    if (o === 0) l !== null && cc(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && cc(l), r === 1) n.tag === 0 ? al(pp.bind(null, n)) : Fc(pp.bind(null, n)), Ju(function() {
        (St & 6) === 0 && Ka();
      }), l = null;
      else {
        switch (Nl(o)) {
          case 1:
            l = gi;
            break;
          case 4:
            l = Bu;
            break;
          case 16:
            l = Al;
            break;
          case 536870912:
            l = re;
            break;
          default:
            l = Al;
        }
        l = Fh(l, Sf.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function Sf(n, r) {
    if (As = -1, fr = 0, (St & 6) !== 0) throw Error(m(327));
    var l = n.callbackNode;
    if (ho() && n.callbackNode !== l) return null;
    var o = Ya(n, n === Ln ? Kn : 0);
    if (o === 0) return null;
    if ((o & 30) !== 0 || (o & n.expiredLanes) !== 0 || r) r = bf(n, o);
    else {
      r = o;
      var f = St;
      St |= 2;
      var v = Mh();
      (Ln !== n || Kn !== r) && (ta = null, fo = It() + 500, Ai(n, r));
      do
        try {
          Oh();
          break;
        } catch (k) {
          _h(n, k);
        }
      while (!0);
      Vd(), pl.current = v, St = f, Dn !== null ? r = 0 : (Ln = null, Kn = 0, r = hn);
    }
    if (r !== 0) {
      if (r === 2 && (f = Hu(n), f !== 0 && (o = f, r = Ls(n, f))), r === 1) throw l = _s, Ai(n, 0), Fa(n, o), jr(n, It()), l;
      if (r === 6) Fa(n, o);
      else {
        if (f = n.current.alternate, (o & 30) === 0 && !og(f) && (r = bf(n, o), r === 2 && (v = Hu(n), v !== 0 && (o = v, r = Ls(n, v))), r === 1)) throw l = _s, Ai(n, 0), Fa(n, o), jr(n, It()), l;
        switch (n.finishedWork = f, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(m(345));
          case 2:
            su(n, Hr, ta);
            break;
          case 3:
            if (Fa(n, o), (o & 130023424) === o && (r = dp + 500 - It(), 10 < r)) {
              if (Ya(n, 0) !== 0) break;
              if (f = n.suspendedLanes, (f & o) !== o) {
                kn(), n.pingedLanes |= n.suspendedLanes & f;
                break;
              }
              n.timeoutHandle = Uc(su.bind(null, n, Hr, ta), r);
              break;
            }
            su(n, Hr, ta);
            break;
          case 4:
            if (Fa(n, o), (o & 4194240) === o) break;
            for (r = n.eventTimes, f = -1; 0 < o; ) {
              var E = 31 - nt(o);
              v = 1 << E, E = r[E], E > f && (f = E), o &= ~v;
            }
            if (o = f, o = It() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * ug(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = Uc(su.bind(null, n, Hr, ta), o);
              break;
            }
            su(n, Hr, ta);
            break;
          case 5:
            su(n, Hr, ta);
            break;
          default:
            throw Error(m(329));
        }
      }
    }
    return jr(n, It()), n.callbackNode === l ? Sf.bind(null, n) : null;
  }
  function Ls(n, r) {
    var l = Ms;
    return n.current.memoizedState.isDehydrated && (Ai(n, r).flags |= 256), n = bf(n, r), n !== 2 && (r = Hr, Hr = l, r !== null && uu(r)), n;
  }
  function uu(n) {
    Hr === null ? Hr = n : Hr.push.apply(Hr, n);
  }
  function og(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null)) for (var o = 0; o < l.length; o++) {
          var f = l[o], v = f.getSnapshot;
          f = f.value;
          try {
            if (!Aa(v(), f)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null) l.return = r, r = l;
      else {
        if (r === n) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n) return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function Fa(n, r) {
    for (r &= ~gf, r &= ~co, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - nt(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function pp(n) {
    if ((St & 6) !== 0) throw Error(m(327));
    ho();
    var r = Ya(n, 0);
    if ((r & 1) === 0) return jr(n, It()), null;
    var l = bf(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = Hu(n);
      o !== 0 && (r = o, l = Ls(n, o));
    }
    if (l === 1) throw l = _s, Ai(n, 0), Fa(n, r), jr(n, It()), l;
    if (l === 6) throw Error(m(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, su(n, Hr, ta), jr(n, It()), null;
  }
  function vp(n, r) {
    var l = St;
    St |= 1;
    try {
      return n(r);
    } finally {
      St = l, St === 0 && (fo = It() + 500, ro && Ka());
    }
  }
  function ou(n) {
    Oi !== null && Oi.tag === 0 && (St & 6) === 0 && ho();
    var r = St;
    St |= 1;
    var l = Gn.transition, o = _t;
    try {
      if (Gn.transition = null, _t = 1, n) return n();
    } finally {
      _t = o, Gn.transition = l, St = r, (St & 6) === 0 && Ka();
    }
  }
  function hp() {
    ea = so.current, $t(so);
  }
  function Ai(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, Fd(l)), Dn !== null) for (l = Dn.return; l !== null; ) {
      var o = l;
      switch (Pc(o), o.tag) {
        case 1:
          o = o.type.childContextTypes, o != null && no();
          break;
        case 3:
          Kl(), $t(On), $t(on), qe();
          break;
        case 5:
          $c(o);
          break;
        case 4:
          Kl();
          break;
        case 13:
          $t(nn);
          break;
        case 19:
          $t(nn);
          break;
        case 10:
          $d(o.type._context);
          break;
        case 22:
        case 23:
          hp();
      }
      l = l.return;
    }
    if (Ln = n, Dn = n = ml(n.current, null), Kn = ea = r, hn = 0, _s = null, gf = co = ri = 0, Hr = Ms = null, Ql !== null) {
      for (r = 0; r < Ql.length; r++) if (l = Ql[r], o = l.interleaved, o !== null) {
        l.interleaved = null;
        var f = o.next, v = l.pending;
        if (v !== null) {
          var E = v.next;
          v.next = f, o.next = E;
        }
        l.pending = o;
      }
      Ql = null;
    }
    return n;
  }
  function _h(n, r) {
    do {
      var l = Dn;
      try {
        if (Vd(), pt.current = nu, qc) {
          for (var o = Ot.memoizedState; o !== null; ) {
            var f = o.queue;
            f !== null && (f.pending = null), o = o.next;
          }
          qc = !1;
        }
        if (Bt = 0, Bn = wn = Ot = null, cs = !1, Xl = 0, iu.current = null, l === null || l.return === null) {
          hn = 1, _s = r, Dn = null;
          break;
        }
        e: {
          var v = n, E = l.return, k = l, N = r;
          if (r = Kn, k.flags |= 32768, N !== null && typeof N == "object" && typeof N.then == "function") {
            var K = N, ve = k, ye = ve.tag;
            if ((ve.mode & 1) === 0 && (ye === 0 || ye === 11 || ye === 15)) {
              var pe = ve.alternate;
              pe ? (ve.updateQueue = pe.updateQueue, ve.memoizedState = pe.memoizedState, ve.lanes = pe.lanes) : (ve.updateQueue = null, ve.memoizedState = null);
            }
            var _e = mh(E);
            if (_e !== null) {
              _e.flags &= -257, dl(_e, E, k, v, r), _e.mode & 1 && rp(v, K, r), r = _e, N = K;
              var ze = r.updateQueue;
              if (ze === null) {
                var Pe = /* @__PURE__ */ new Set();
                Pe.add(N), r.updateQueue = Pe;
              } else ze.add(N);
              break e;
            } else {
              if ((r & 1) === 0) {
                rp(v, K, r), mp();
                break e;
              }
              N = Error(m(426));
            }
          } else if (Xt && k.mode & 1) {
            var mn = mh(E);
            if (mn !== null) {
              (mn.flags & 65536) === 0 && (mn.flags |= 256), dl(mn, E, k, v, r), Di(ru(N, k));
              break e;
            }
          }
          v = N = ru(N, k), hn !== 4 && (hn = 2), Ms === null ? Ms = [v] : Ms.push(v), v = E;
          do {
            switch (v.tag) {
              case 3:
                v.flags |= 65536, r &= -r, v.lanes |= r;
                var j = hh(v, N, r);
                ch(v, j);
                break e;
              case 1:
                k = N;
                var F = v.type, q = v.stateNode;
                if ((v.flags & 128) === 0 && (typeof F.getDerivedStateFromError == "function" || q !== null && typeof q.componentDidCatch == "function" && (vl === null || !vl.has(q)))) {
                  v.flags |= 65536, r &= -r, v.lanes |= r;
                  var he = np(v, k, r);
                  ch(v, he);
                  break e;
                }
            }
            v = v.return;
          } while (v !== null);
        }
        Lh(l);
      } catch (Ie) {
        r = Ie, Dn === l && l !== null && (Dn = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Mh() {
    var n = pl.current;
    return pl.current = nu, n === null ? nu : n;
  }
  function mp() {
    (hn === 0 || hn === 3 || hn === 2) && (hn = 4), Ln === null || (ri & 268435455) === 0 && (co & 268435455) === 0 || Fa(Ln, Kn);
  }
  function bf(n, r) {
    var l = St;
    St |= 2;
    var o = Mh();
    (Ln !== n || Kn !== r) && (ta = null, Ai(n, r));
    do
      try {
        sg();
        break;
      } catch (f) {
        _h(n, f);
      }
    while (!0);
    if (Vd(), St = l, pl.current = o, Dn !== null) throw Error(m(261));
    return Ln = null, Kn = 0, hn;
  }
  function sg() {
    for (; Dn !== null; ) Ah(Dn);
  }
  function Oh() {
    for (; Dn !== null && !Bo(); ) Ah(Dn);
  }
  function Ah(n) {
    var r = Ih(n.alternate, n, ea);
    n.memoizedProps = n.pendingProps, r === null ? Lh(n) : Dn = r, iu.current = null;
  }
  function Lh(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, (r.flags & 32768) === 0) {
        if (l = Ch(l, r, ea), l !== null) {
          Dn = l;
          return;
        }
      } else {
        if (l = hf(l, r), l !== null) {
          l.flags &= 32767, Dn = l;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          hn = 6, Dn = null;
          return;
        }
      }
      if (r = r.sibling, r !== null) {
        Dn = r;
        return;
      }
      Dn = r = n;
    } while (r !== null);
    hn === 0 && (hn = 5);
  }
  function su(n, r, l) {
    var o = _t, f = Gn.transition;
    try {
      Gn.transition = null, _t = 1, cg(n, r, l, o);
    } finally {
      Gn.transition = f, _t = o;
    }
    return null;
  }
  function cg(n, r, l, o) {
    do
      ho();
    while (Oi !== null);
    if ((St & 6) !== 0) throw Error(m(327));
    l = n.finishedWork;
    var f = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(m(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var v = l.lanes | l.childLanes;
    if (fc(n, v), n === Ln && (Dn = Ln = null, Kn = 0), (l.subtreeFlags & 2064) === 0 && (l.flags & 2064) === 0 || Ef || (Ef = !0, Fh(Al, function() {
      return ho(), null;
    })), v = (l.flags & 15990) !== 0, (l.subtreeFlags & 15990) !== 0 || v) {
      v = Gn.transition, Gn.transition = null;
      var E = _t;
      _t = 1;
      var k = St;
      St |= 4, iu.current = null, Rh(n, l), sp(l, n), Gu(Vl), zl = !!es, Vl = es = null, n.current = l, lg(l), fd(), St = k, _t = E, Gn.transition = v;
    } else n.current = l;
    if (Ef && (Ef = !1, Oi = n, Os = f), v = n.pendingLanes, v === 0 && (vl = null), Ze(l.stateNode), jr(n, It()), r !== null) for (o = n.onRecoverableError, l = 0; l < r.length; l++) f = r[l], o(f.value, { componentStack: f.stack, digest: f.digest });
    if (po) throw po = !1, n = lu, lu = null, n;
    return (Os & 1) !== 0 && n.tag !== 0 && ho(), v = n.pendingLanes, (v & 1) !== 0 ? n === vo ? hl++ : (hl = 0, vo = n) : hl = 0, Ka(), null;
  }
  function ho() {
    if (Oi !== null) {
      var n = Nl(Os), r = Gn.transition, l = _t;
      try {
        if (Gn.transition = null, _t = 16 > n ? 16 : n, Oi === null) var o = !1;
        else {
          if (n = Oi, Oi = null, Os = 0, (St & 6) !== 0) throw Error(m(331));
          var f = St;
          for (St |= 4, Ae = n.current; Ae !== null; ) {
            var v = Ae, E = v.child;
            if ((Ae.flags & 16) !== 0) {
              var k = v.deletions;
              if (k !== null) {
                for (var N = 0; N < k.length; N++) {
                  var K = k[N];
                  for (Ae = K; Ae !== null; ) {
                    var ve = Ae;
                    switch (ve.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Rs(8, ve, v);
                    }
                    var ye = ve.child;
                    if (ye !== null) ye.return = ve, Ae = ye;
                    else for (; Ae !== null; ) {
                      ve = Ae;
                      var pe = ve.sibling, _e = ve.return;
                      if (yf(ve), ve === K) {
                        Ae = null;
                        break;
                      }
                      if (pe !== null) {
                        pe.return = _e, Ae = pe;
                        break;
                      }
                      Ae = _e;
                    }
                  }
                }
                var ze = v.alternate;
                if (ze !== null) {
                  var Pe = ze.child;
                  if (Pe !== null) {
                    ze.child = null;
                    do {
                      var mn = Pe.sibling;
                      Pe.sibling = null, Pe = mn;
                    } while (Pe !== null);
                  }
                }
                Ae = v;
              }
            }
            if ((v.subtreeFlags & 2064) !== 0 && E !== null) E.return = v, Ae = E;
            else e: for (; Ae !== null; ) {
              if (v = Ae, (v.flags & 2048) !== 0) switch (v.tag) {
                case 0:
                case 11:
                case 15:
                  Rs(9, v, v.return);
              }
              var j = v.sibling;
              if (j !== null) {
                j.return = v.return, Ae = j;
                break e;
              }
              Ae = v.return;
            }
          }
          var F = n.current;
          for (Ae = F; Ae !== null; ) {
            E = Ae;
            var q = E.child;
            if ((E.subtreeFlags & 2064) !== 0 && q !== null) q.return = E, Ae = q;
            else e: for (E = F; Ae !== null; ) {
              if (k = Ae, (k.flags & 2048) !== 0) try {
                switch (k.tag) {
                  case 0:
                  case 11:
                  case 15:
                    xs(9, k);
                }
              } catch (Ie) {
                Zt(k, k.return, Ie);
              }
              if (k === E) {
                Ae = null;
                break e;
              }
              var he = k.sibling;
              if (he !== null) {
                he.return = k.return, Ae = he;
                break e;
              }
              Ae = k.return;
            }
          }
          if (St = f, Ka(), se && typeof se.onPostCommitFiberRoot == "function") try {
            se.onPostCommitFiberRoot(ae, n);
          } catch {
          }
          o = !0;
        }
        return o;
      } finally {
        _t = l, Gn.transition = r;
      }
    }
    return !1;
  }
  function Nh(n, r, l) {
    r = ru(l, r), r = hh(n, r, 1), n = sl(n, r, 1), r = kn(), n !== null && (or(n, 1, r), jr(n, r));
  }
  function Zt(n, r, l) {
    if (n.tag === 3) Nh(n, n, l);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        Nh(r, n, l);
        break;
      } else if (r.tag === 1) {
        var o = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (vl === null || !vl.has(o))) {
          n = ru(l, n), n = np(r, n, 1), r = sl(r, n, 1), n = kn(), r !== null && (or(r, 1, n), jr(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function fg(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = kn(), n.pingedLanes |= n.suspendedLanes & l, Ln === n && (Kn & l) === l && (hn === 4 || hn === 3 && (Kn & 130023424) === Kn && 500 > It() - dp ? Ai(n, 0) : gf |= l), jr(n, r);
  }
  function Uh(n, r) {
    r === 0 && ((n.mode & 1) === 0 ? r = 1 : (r = Ft, Ft <<= 1, (Ft & 130023424) === 0 && (Ft = 4194304)));
    var l = kn();
    n = Xr(n, r), n !== null && (or(n, r, l), jr(n, l));
  }
  function dg(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), Uh(n, l);
  }
  function zh(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var o = n.stateNode, f = n.memoizedState;
        f !== null && (l = f.retryLane);
        break;
      case 19:
        o = n.stateNode;
        break;
      default:
        throw Error(m(314));
    }
    o !== null && o.delete(r), Uh(n, l);
  }
  var Ih;
  Ih = function(n, r, l) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || On.current) Rn = !0;
    else {
      if ((n.lanes & l) === 0 && (r.flags & 128) === 0) return Rn = !1, Ts(n, r, l);
      Rn = (n.flags & 131072) !== 0;
    }
    else Rn = !1, Xt && (r.flags & 1048576) !== 0 && lh(r, xi, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        Ea(n, r), n = r.pendingProps;
        var f = ha(r, on.current);
        tn(r, l), f = cl(null, r, o, n, f, l);
        var v = Ua();
        return r.flags |= 1, typeof f == "object" && f !== null && typeof f.render == "function" && f.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Tn(o) ? (v = !0, Ur(r)) : v = !1, r.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, Qd(r), f.updater = cf, r.stateNode = f, f._reactInternals = r, ys(r, o, n, l), r = Ss(null, r, o, !0, v, l)) : (r.tag = 0, Xt && v && Bc(r), Qn(null, r, f, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (Ea(n, r), n = r.pendingProps, f = o._init, o = f(o._payload), r.type = o, f = r.tag = vg(o), n = za(o, n), f) {
            case 0:
              r = yh(null, r, o, n, l);
              break e;
            case 1:
              r = gh(null, r, o, n, l);
              break e;
            case 11:
              r = Br(null, r, o, n, l);
              break e;
            case 14:
              r = au(null, r, o, za(o.type, n), l);
              break e;
          }
          throw Error(m(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, f = r.pendingProps, f = r.elementType === o ? f : za(o, f), yh(n, r, o, f, l);
      case 1:
        return o = r.type, f = r.pendingProps, f = r.elementType === o ? f : za(o, f), gh(n, r, o, f, l);
      case 3:
        e: {
          if (uo(r), n === null) throw Error(m(387));
          o = r.pendingProps, v = r.memoizedState, f = v.element, sh(n, r), is(r, o, null, l);
          var E = r.memoizedState;
          if (o = E.element, v.isDehydrated) if (v = { element: o, isDehydrated: !1, cache: E.cache, pendingSuspenseBoundaries: E.pendingSuspenseBoundaries, transitions: E.transitions }, r.updateQueue.baseState = v, r.memoizedState = v, r.flags & 256) {
            f = ru(Error(m(423)), r), r = Eh(n, r, o, l, f);
            break e;
          } else if (o !== f) {
            f = ru(Error(m(424)), r), r = Eh(n, r, o, l, f);
            break e;
          } else for (Ir = Wa(r.stateNode.containerInfo.firstChild), zr = r, Xt = !0, ya = null, l = we(r, null, o, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (ol(), o === f) {
              r = Sa(n, r, l);
              break e;
            }
            Qn(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return fh(r), n === null && Hd(r), o = r.type, f = r.pendingProps, v = n !== null ? n.memoizedProps : null, E = f.children, Nc(o, f) ? E = null : v !== null && Nc(o, v) && (r.flags |= 32), ap(n, r), Qn(n, r, E, l), r.child;
      case 6:
        return n === null && Hd(r), null;
      case 13:
        return vf(n, r, l);
      case 4:
        return Kd(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = dn(r, null, o, l) : Qn(n, r, o, l), r.child;
      case 11:
        return o = r.type, f = r.pendingProps, f = r.elementType === o ? f : za(o, f), Br(n, r, o, f, l);
      case 7:
        return Qn(n, r, r.pendingProps, l), r.child;
      case 8:
        return Qn(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return Qn(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, f = r.pendingProps, v = r.memoizedProps, E = f.value, $e(Kr, o._currentValue), o._currentValue = E, v !== null) if (Aa(v.value, E)) {
            if (v.children === f.children && !On.current) {
              r = Sa(n, r, l);
              break e;
            }
          } else for (v = r.child, v !== null && (v.return = r); v !== null; ) {
            var k = v.dependencies;
            if (k !== null) {
              E = v.child;
              for (var N = k.firstContext; N !== null; ) {
                if (N.context === o) {
                  if (v.tag === 1) {
                    N = ki(-1, l & -l), N.tag = 2;
                    var K = v.updateQueue;
                    if (K !== null) {
                      K = K.shared;
                      var ve = K.pending;
                      ve === null ? N.next = N : (N.next = ve.next, ve.next = N), K.pending = N;
                    }
                  }
                  v.lanes |= l, N = v.alternate, N !== null && (N.lanes |= l), Yd(
                    v.return,
                    l,
                    r
                  ), k.lanes |= l;
                  break;
                }
                N = N.next;
              }
            } else if (v.tag === 10) E = v.type === r.type ? null : v.child;
            else if (v.tag === 18) {
              if (E = v.return, E === null) throw Error(m(341));
              E.lanes |= l, k = E.alternate, k !== null && (k.lanes |= l), Yd(E, l, r), E = v.sibling;
            } else E = v.child;
            if (E !== null) E.return = v;
            else for (E = v; E !== null; ) {
              if (E === r) {
                E = null;
                break;
              }
              if (v = E.sibling, v !== null) {
                v.return = E.return, E = v;
                break;
              }
              E = E.return;
            }
            v = E;
          }
          Qn(n, r, f.children, l), r = r.child;
        }
        return r;
      case 9:
        return f = r.type, o = r.pendingProps.children, tn(r, l), f = ga(f), o = o(f), r.flags |= 1, Qn(n, r, o, l), r.child;
      case 14:
        return o = r.type, f = za(o, r.pendingProps), f = za(o.type, f), au(n, r, o, f, l);
      case 15:
        return ft(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, f = r.pendingProps, f = r.elementType === o ? f : za(o, f), Ea(n, r), r.tag = 1, Tn(o) ? (n = !0, Ur(r)) : n = !1, tn(r, l), ff(r, o, f), ys(r, o, f, l), Ss(null, r, o, !0, n, l);
      case 19:
        return ei(n, r, l);
      case 22:
        return Es(n, r, l);
    }
    throw Error(m(156, r.tag));
  };
  function Fh(n, r) {
    return sc(n, r);
  }
  function pg(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ta(n, r, l, o) {
    return new pg(n, r, l, o);
  }
  function yp(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function vg(n) {
    if (typeof n == "function") return yp(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === Ne) return 11;
      if (n === gt) return 14;
    }
    return 2;
  }
  function ml(n, r) {
    var l = n.alternate;
    return l === null ? (l = Ta(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function Ns(n, r, l, o, f, v) {
    var E = 2;
    if (o = n, typeof n == "function") yp(n) && (E = 1);
    else if (typeof n == "string") E = 5;
    else e: switch (n) {
      case H:
        return Li(l.children, f, v, r);
      case ce:
        E = 8, f |= 8;
        break;
      case ke:
        return n = Ta(12, l, r, f | 2), n.elementType = ke, n.lanes = v, n;
      case ne:
        return n = Ta(13, l, r, f), n.elementType = ne, n.lanes = v, n;
      case xe:
        return n = Ta(19, l, r, f), n.elementType = xe, n.lanes = v, n;
      case dt:
        return yl(l, f, v, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case Ue:
            E = 10;
            break e;
          case He:
            E = 9;
            break e;
          case Ne:
            E = 11;
            break e;
          case gt:
            E = 14;
            break e;
          case ut:
            E = 16, o = null;
            break e;
        }
        throw Error(m(130, n == null ? n : typeof n, ""));
    }
    return r = Ta(E, l, r, f), r.elementType = n, r.type = o, r.lanes = v, r;
  }
  function Li(n, r, l, o) {
    return n = Ta(7, n, o, r), n.lanes = l, n;
  }
  function yl(n, r, l, o) {
    return n = Ta(22, n, o, r), n.elementType = dt, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function gp(n, r, l) {
    return n = Ta(6, n, null, r), n.lanes = l, n;
  }
  function Tf(n, r, l) {
    return r = Ta(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Bh(n, r, l, o, f) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Vu(0), this.expirationTimes = Vu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Vu(0), this.identifierPrefix = o, this.onRecoverableError = f, this.mutableSourceEagerHydrationData = null;
  }
  function Cf(n, r, l, o, f, v, E, k, N) {
    return n = new Bh(n, r, l, k, N), r === 1 ? (r = 1, v === !0 && (r |= 8)) : r = 0, v = Ta(3, null, null, r), n.current = v, v.stateNode = n, v.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Qd(v), n;
  }
  function hg(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: V, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function Ep(n) {
    if (!n) return Lr;
    n = n._reactInternals;
    e: {
      if (_r(n) !== n || n.tag !== 1) throw Error(m(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Tn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(m(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (Tn(l)) return rs(n, l, r);
    }
    return r;
  }
  function Ph(n, r, l, o, f, v, E, k, N) {
    return n = Cf(l, o, !0, n, f, v, E, k, N), n.context = Ep(null), l = n.current, o = kn(), f = ai(l), v = ki(o, f), v.callback = r ?? null, sl(l, v, f), n.current.lanes = f, or(n, f, o), jr(n, o), n;
  }
  function wf(n, r, l, o) {
    var f = r.current, v = kn(), E = ai(f);
    return l = Ep(l), r.context === null ? r.context = l : r.pendingContext = l, r = ki(v, E), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = sl(f, r, E), n !== null && (gr(n, f, E, v), Vc(n, f, E)), E;
  }
  function Rf(n) {
    if (n = n.current, !n.child) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function Sp(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function xf(n, r) {
    Sp(n, r), (n = n.alternate) && Sp(n, r);
  }
  function Hh() {
    return null;
  }
  var cu = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function bp(n) {
    this._internalRoot = n;
  }
  Df.prototype.render = bp.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(m(409));
    wf(n, r, null, null);
  }, Df.prototype.unmount = bp.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      ou(function() {
        wf(null, n, null, null);
      }), r[wi] = null;
    }
  };
  function Df(n) {
    this._internalRoot = n;
  }
  Df.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = ct();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < Yn.length && r !== 0 && r < Yn[l].priority; l++) ;
      Yn.splice(l, 0, n), l === 0 && md(n);
    }
  };
  function Tp(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function kf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function jh() {
  }
  function mg(n, r, l, o, f) {
    if (f) {
      if (typeof o == "function") {
        var v = o;
        o = function() {
          var K = Rf(E);
          v.call(K);
        };
      }
      var E = Ph(r, o, n, 0, null, !1, !1, "", jh);
      return n._reactRootContainer = E, n[wi] = E.current, Xu(n.nodeType === 8 ? n.parentNode : n), ou(), E;
    }
    for (; f = n.lastChild; ) n.removeChild(f);
    if (typeof o == "function") {
      var k = o;
      o = function() {
        var K = Rf(N);
        k.call(K);
      };
    }
    var N = Cf(n, 0, !1, null, null, !1, !1, "", jh);
    return n._reactRootContainer = N, n[wi] = N.current, Xu(n.nodeType === 8 ? n.parentNode : n), ou(function() {
      wf(r, N, l, o);
    }), N;
  }
  function Us(n, r, l, o, f) {
    var v = l._reactRootContainer;
    if (v) {
      var E = v;
      if (typeof f == "function") {
        var k = f;
        f = function() {
          var N = Rf(E);
          k.call(N);
        };
      }
      wf(r, E, n, f);
    } else E = mg(l, r, n, f, o);
    return Rf(E);
  }
  Dt = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = Oa(r.pendingLanes);
          l !== 0 && (Ll(r, l | 1), jr(r, It()), (St & 6) === 0 && (fo = It() + 500, Ka()));
        }
        break;
      case 13:
        ou(function() {
          var o = Xr(n, 1);
          if (o !== null) {
            var f = kn();
            gr(o, n, 1, f);
          }
        }), xf(n, 1);
    }
  }, dc = function(n) {
    if (n.tag === 13) {
      var r = Xr(n, 134217728);
      if (r !== null) {
        var l = kn();
        gr(r, n, 134217728, l);
      }
      xf(n, 134217728);
    }
  }, pd = function(n) {
    if (n.tag === 13) {
      var r = ai(n), l = Xr(n, r);
      if (l !== null) {
        var o = kn();
        gr(l, n, r, o);
      }
      xf(n, r);
    }
  }, ct = function() {
    return _t;
  }, vd = function(n, r) {
    var l = _t;
    try {
      return _t = n, r();
    } finally {
      _t = l;
    }
  }, en = function(n, r, l) {
    switch (r) {
      case "input":
        if (ln(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; ) l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var f = fn(o);
              if (!f) throw Error(m(90));
              rt(o), ln(o, f);
            }
          }
        }
        break;
      case "textarea":
        Ma(n, l);
        break;
      case "select":
        r = l.value, r != null && In(n, !!l.multiple, r, !1);
    }
  }, Uu = vp, Wi = ou;
  var yg = { usingClientEntryPoint: !1, Events: [Ye, La, fn, uc, Nu, vp] }, zs = { findFiberByHostInstance: $l, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Vh = { bundleType: zs.bundleType, version: zs.version, rendererPackageName: zs.rendererPackageName, rendererConfig: zs.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: me.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Fo(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: zs.findFiberByHostInstance || Hh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var gl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!gl.isDisabled && gl.supportsFiber) try {
      ae = gl.inject(Vh), se = gl;
    } catch {
    }
  }
  return ka.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yg, ka.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Tp(r)) throw Error(m(200));
    return hg(n, r, null, l);
  }, ka.createRoot = function(n, r) {
    if (!Tp(n)) throw Error(m(299));
    var l = !1, o = "", f = cu;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (f = r.onRecoverableError)), r = Cf(n, 1, !1, null, null, l, !1, o, f), n[wi] = r.current, Xu(n.nodeType === 8 ? n.parentNode : n), new bp(r);
  }, ka.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(m(188)) : (n = Object.keys(n).join(","), Error(m(268, n)));
    return n = Fo(r), n = n === null ? null : n.stateNode, n;
  }, ka.flushSync = function(n) {
    return ou(n);
  }, ka.hydrate = function(n, r, l) {
    if (!kf(r)) throw Error(m(200));
    return Us(null, n, r, !0, l);
  }, ka.hydrateRoot = function(n, r, l) {
    if (!Tp(n)) throw Error(m(405));
    var o = l != null && l.hydratedSources || null, f = !1, v = "", E = cu;
    if (l != null && (l.unstable_strictMode === !0 && (f = !0), l.identifierPrefix !== void 0 && (v = l.identifierPrefix), l.onRecoverableError !== void 0 && (E = l.onRecoverableError)), r = Ph(r, null, n, 1, l ?? null, f, !1, v, E), n[wi] = r.current, Xu(n), o) for (n = 0; n < o.length; n++) l = o[n], f = l._getVersion, f = f(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, f] : r.mutableSourceEagerHydrationData.push(
      l,
      f
    );
    return new Df(r);
  }, ka.render = function(n, r, l) {
    if (!kf(r)) throw Error(m(200));
    return Us(null, n, r, !1, l);
  }, ka.unmountComponentAtNode = function(n) {
    if (!kf(n)) throw Error(m(40));
    return n._reactRootContainer ? (ou(function() {
      Us(null, null, n, !1, function() {
        n._reactRootContainer = null, n[wi] = null;
      });
    }), !0) : !1;
  }, ka.unstable_batchedUpdates = vp, ka.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!kf(l)) throw Error(m(200));
    if (n == null || n._reactInternals === void 0) throw Error(m(38));
    return Us(n, r, l, !1, o);
  }, ka.version = "18.3.1-next-f1338f8080-20240426", ka;
}
var _a = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sw;
function DM() {
  return Sw || (Sw = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var c = Uy, p = r1(), m = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, x = !1;
    function O(e) {
      x = e;
    }
    function A(e) {
      if (!x) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        U("warn", e, a);
      }
    }
    function y(e) {
      if (!x) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        U("error", e, a);
      }
    }
    function U(e, t, a) {
      {
        var i = m.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(d) {
          return String(d);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var R = 0, T = 1, _ = 2, C = 3, D = 4, z = 5, J = 6, W = 7, le = 8, L = 9, ue = 10, oe = 11, me = 12, Se = 13, V = 14, H = 15, ce = 16, ke = 17, Ue = 18, He = 19, Ne = 21, ne = 22, xe = 23, gt = 24, ut = 25, dt = !0, Ee = !1, Be = !1, Te = !1, vt = !1, mt = !0, gn = !0, Vt = !0, cn = !0, Jt = /* @__PURE__ */ new Set(), an = {}, En = {};
    function P(e, t) {
      Le(e, t), Le(e + "Capture", t);
    }
    function Le(e, t) {
      an[e] && y("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), an[e] = t;
      {
        var a = e.toLowerCase();
        En[a] = e, e === "onDoubleClick" && (En.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        Jt.add(t[i]);
    }
    var fe = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", rt = Object.prototype.hasOwnProperty;
    function Ke(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function ot(e) {
      try {
        return Ct(e), !1;
      } catch {
        return !0;
      }
    }
    function Ct(e) {
      return "" + e;
    }
    function wt(e, t) {
      if (ot(e))
        return y("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Ke(e)), Ct(e);
    }
    function ln(e) {
      if (ot(e))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ke(e)), Ct(e);
    }
    function dr(e, t) {
      if (ot(e))
        return y("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Ke(e)), Ct(e);
    }
    function oa(e, t) {
      if (ot(e))
        return y("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Ke(e)), Ct(e);
    }
    function sa(e) {
      if (ot(e))
        return y("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Ke(e)), Ct(e);
    }
    function In(e) {
      if (ot(e))
        return y("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Ke(e)), Ct(e);
    }
    var Vn = 0, ir = 1, Ma = 2, $n = 3, lr = 4, ca = 5, pr = 6, vi = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", b = vi + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Q = new RegExp("^[" + vi + "][" + b + "]*$"), Z = {}, Ce = {};
    function Qe(e) {
      return rt.call(Ce, e) ? !0 : rt.call(Z, e) ? !1 : Q.test(e) ? (Ce[e] = !0, !0) : (Z[e] = !0, y("Invalid attribute name: `%s`", e), !1);
    }
    function it(e, t, a) {
      return t !== null ? t.type === Vn : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function Ve(e, t, a, i) {
      if (a !== null && a.type === Vn)
        return !1;
      switch (typeof t) {
        case "function":
        // $FlowIssue symbol is perfectly valid here
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var u = e.toLowerCase().slice(0, 5);
          return u !== "data-" && u !== "aria-";
        }
        default:
          return !1;
      }
    }
    function st(e, t, a, i) {
      if (t === null || typeof t > "u" || Ve(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case $n:
            return !t;
          case lr:
            return t === !1;
          case ca:
            return isNaN(t);
          case pr:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function Rt(e) {
      return en.hasOwnProperty(e) ? en[e] : null;
    }
    function xt(e, t, a, i, u, s, d) {
      this.acceptsBooleans = t === Ma || t === $n || t === lr, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = d;
    }
    var en = {}, qi = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    qi.forEach(function(e) {
      en[e] = new xt(
        e,
        Vn,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      en[t] = new xt(
        t,
        ir,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      en[e] = new xt(
        e,
        Ma,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      en[e] = new xt(
        e,
        Ma,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      en[e] = new xt(
        e,
        $n,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      en[e] = new xt(
        e,
        $n,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      en[e] = new xt(
        e,
        lr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      en[e] = new xt(
        e,
        pr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      en[e] = new xt(
        e,
        ca,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var ja = /[\-\:]([a-z])/g, hi = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(ja, hi);
      en[t] = new xt(
        t,
        ir,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(ja, hi);
      en[t] = new xt(
        t,
        ir,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(ja, hi);
      en[t] = new xt(
        t,
        ir,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      en[e] = new xt(
        e,
        ir,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var uc = "xlinkHref";
    en[uc] = new xt(
      "xlinkHref",
      ir,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      en[e] = new xt(
        e,
        ir,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var Nu = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Uu = !1;
    function Wi(e) {
      !Uu && Nu.test(e) && (Uu = !0, y("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function zu(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        wt(a, t), i.sanitizeURL && Wi("" + a);
        var s = i.attributeName, d = null;
        if (i.type === lr) {
          if (e.hasAttribute(s)) {
            var h = e.getAttribute(s);
            return h === "" ? !0 : st(t, a, i, !1) ? h : h === "" + a ? a : h;
          }
        } else if (e.hasAttribute(s)) {
          if (st(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === $n)
            return a;
          d = e.getAttribute(s);
        }
        return st(t, a, i, !1) ? d === null ? a : d : d === "" + a ? a : d;
      }
    }
    function zo(e, t, a, i) {
      {
        if (!Qe(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return wt(a, t), u === "" + a ? a : u;
      }
    }
    function Va(e, t, a, i) {
      var u = Rt(t);
      if (!it(t, u, i)) {
        if (st(t, a, u, i) && (a = null), i || u === null) {
          if (Qe(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (wt(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var d = u.mustUseProperty;
        if (d) {
          var h = u.propertyName;
          if (a === null) {
            var g = u.type;
            e[h] = g === $n ? !1 : "";
          } else
            e[h] = a;
          return;
        }
        var S = u.attributeName, w = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(S);
        else {
          var B = u.type, I;
          B === $n || B === lr && a === !0 ? I = "" : (wt(a, S), I = "" + a, u.sanitizeURL && Wi(I.toString())), w ? e.setAttributeNS(w, S, I) : e.setAttribute(S, I);
        }
      }
    }
    var $a = Symbol.for("react.element"), kr = Symbol.for("react.portal"), Qi = Symbol.for("react.fragment"), mi = Symbol.for("react.strict_mode"), Gi = Symbol.for("react.profiler"), yi = Symbol.for("react.provider"), Ol = Symbol.for("react.context"), Ki = Symbol.for("react.forward_ref"), Iu = Symbol.for("react.suspense"), Fu = Symbol.for("react.suspense_list"), _r = Symbol.for("react.memo"), Fn = Symbol.for("react.lazy"), Io = Symbol.for("react.scope"), cd = Symbol.for("react.debug_trace_mode"), Fo = Symbol.for("react.offscreen"), oc = Symbol.for("react.legacy_hidden"), sc = Symbol.for("react.cache"), cc = Symbol.for("react.tracing_marker"), Bo = Symbol.iterator, fd = "@@iterator";
    function It(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Bo && e[Bo] || e[fd];
      return typeof t == "function" ? t : null;
    }
    var ht = Object.assign, gi = 0, Bu, Al, M, re, ae, se, Ze;
    function nt() {
    }
    nt.__reactDisabledLog = !0;
    function Kt() {
      {
        if (gi === 0) {
          Bu = console.log, Al = console.info, M = console.warn, re = console.error, ae = console.group, se = console.groupCollapsed, Ze = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: nt,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        gi++;
      }
    }
    function Mr() {
      {
        if (gi--, gi === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ht({}, e, {
              value: Bu
            }),
            info: ht({}, e, {
              value: Al
            }),
            warn: ht({}, e, {
              value: M
            }),
            error: ht({}, e, {
              value: re
            }),
            group: ht({}, e, {
              value: ae
            }),
            groupCollapsed: ht({}, e, {
              value: se
            }),
            groupEnd: ht({}, e, {
              value: Ze
            })
          });
        }
        gi < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ur = m.ReactCurrentDispatcher, Sn;
    function Ft(e, t, a) {
      {
        if (Sn === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            Sn = i && i[1] || "";
          }
        return `
` + Sn + e;
      }
    }
    var Oa = !1, Ya;
    {
      var dd = typeof WeakMap == "function" ? WeakMap : Map;
      Ya = new dd();
    }
    function Pu(e, t) {
      if (!e || Oa)
        return "";
      {
        var a = Ya.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      Oa = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = ur.current, ur.current = null, Kt();
      try {
        if (t) {
          var d = function() {
            throw Error();
          };
          if (Object.defineProperty(d.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(d, []);
            } catch (X) {
              i = X;
            }
            Reflect.construct(e, [], d);
          } else {
            try {
              d.call();
            } catch (X) {
              i = X;
            }
            e.call(d.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (X) {
            i = X;
          }
          e();
        }
      } catch (X) {
        if (X && i && typeof X.stack == "string") {
          for (var h = X.stack.split(`
`), g = i.stack.split(`
`), S = h.length - 1, w = g.length - 1; S >= 1 && w >= 0 && h[S] !== g[w]; )
            w--;
          for (; S >= 1 && w >= 0; S--, w--)
            if (h[S] !== g[w]) {
              if (S !== 1 || w !== 1)
                do
                  if (S--, w--, w < 0 || h[S] !== g[w]) {
                    var B = `
` + h[S].replace(" at new ", " at ");
                    return e.displayName && B.includes("<anonymous>") && (B = B.replace("<anonymous>", e.displayName)), typeof e == "function" && Ya.set(e, B), B;
                  }
                while (S >= 1 && w >= 0);
              break;
            }
        }
      } finally {
        Oa = !1, ur.current = s, Mr(), Error.prepareStackTrace = u;
      }
      var I = e ? e.displayName || e.name : "", G = I ? Ft(I) : "";
      return typeof e == "function" && Ya.set(e, G), G;
    }
    function Hu(e, t, a) {
      return Pu(e, !0);
    }
    function ju(e, t, a) {
      return Pu(e, !1);
    }
    function Vu(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function or(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Pu(e, Vu(e));
      if (typeof e == "string")
        return Ft(e);
      switch (e) {
        case Iu:
          return Ft("Suspense");
        case Fu:
          return Ft("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Ki:
            return ju(e.render);
          case _r:
            return or(e.type, t, a);
          case Fn: {
            var i = e, u = i._payload, s = i._init;
            try {
              return or(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function fc(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case z:
          return Ft(e.type);
        case ce:
          return Ft("Lazy");
        case Se:
          return Ft("Suspense");
        case He:
          return Ft("SuspenseList");
        case R:
        case _:
        case H:
          return ju(e.type);
        case oe:
          return ju(e.type.render);
        case T:
          return Hu(e.type);
        default:
          return "";
      }
    }
    function Ll(e) {
      try {
        var t = "", a = e;
        do
          t += fc(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function _t(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function Nl(e) {
      return e.displayName || "Context";
    }
    function Dt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Qi:
          return "Fragment";
        case kr:
          return "Portal";
        case Gi:
          return "Profiler";
        case mi:
          return "StrictMode";
        case Iu:
          return "Suspense";
        case Fu:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Ol:
            var t = e;
            return Nl(t) + ".Consumer";
          case yi:
            var a = e;
            return Nl(a._context) + ".Provider";
          case Ki:
            return _t(e, e.render, "ForwardRef");
          case _r:
            var i = e.displayName || null;
            return i !== null ? i : Dt(e.type) || "Memo";
          case Fn: {
            var u = e, s = u._payload, d = u._init;
            try {
              return Dt(d(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function dc(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function pd(e) {
      return e.displayName || "Context";
    }
    function ct(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case gt:
          return "Cache";
        case L:
          var i = a;
          return pd(i) + ".Consumer";
        case ue:
          var u = a;
          return pd(u._context) + ".Provider";
        case Ue:
          return "DehydratedFragment";
        case oe:
          return dc(a, a.render, "ForwardRef");
        case W:
          return "Fragment";
        case z:
          return a;
        case D:
          return "Portal";
        case C:
          return "Root";
        case J:
          return "Text";
        case ce:
          return Dt(a);
        case le:
          return a === mi ? "StrictMode" : "Mode";
        case ne:
          return "Offscreen";
        case me:
          return "Profiler";
        case Ne:
          return "Scope";
        case Se:
          return "Suspense";
        case He:
          return "SuspenseList";
        case ut:
          return "TracingMarker";
        // The display name for this tags come from the user-provided type:
        case T:
        case R:
        case ke:
        case _:
        case V:
        case H:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var vd = m.ReactDebugCurrentFrame, vr = null, Xi = !1;
    function fa() {
      {
        if (vr === null)
          return null;
        var e = vr._debugOwner;
        if (e !== null && typeof e < "u")
          return ct(e);
      }
      return null;
    }
    function Zi() {
      return vr === null ? "" : Ll(vr);
    }
    function un() {
      vd.getCurrentStack = null, vr = null, Xi = !1;
    }
    function Qt(e) {
      vd.getCurrentStack = e === null ? null : Zi, vr = e, Xi = !1;
    }
    function Po() {
      return vr;
    }
    function Yn(e) {
      Xi = e;
    }
    function da(e) {
      return "" + e;
    }
    function Ei(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return In(e), e;
        default:
          return "";
      }
    }
    var Ho = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function hd(e, t) {
      Ho[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || y("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || y("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function md(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function jo(e) {
      return e._valueTracker;
    }
    function Dv(e) {
      e._valueTracker = null;
    }
    function Py(e) {
      var t = "";
      return e && (md(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Vo(e) {
      var t = md(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      In(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(h) {
            In(h), i = "" + h, s.call(this, h);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var d = {
          getValue: function() {
            return i;
          },
          setValue: function(h) {
            In(h), i = "" + h;
          },
          stopTracking: function() {
            Dv(e), delete e[t];
          }
        };
        return d;
      }
    }
    function Ji(e) {
      jo(e) || (e._valueTracker = Vo(e));
    }
    function Ul(e) {
      if (!e)
        return !1;
      var t = jo(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = Py(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function zl(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var kv = !1, _v = !1, pc = !1, $o = !1;
    function vc(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function hc(e, t) {
      var a = e, i = t.checked, u = ht({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function Si(e, t) {
      hd("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !_v && (y("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", fa() || "A component", t.type), _v = !0), t.value !== void 0 && t.defaultValue !== void 0 && !kv && (y("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", fa() || "A component", t.type), kv = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Ei(t.value != null ? t.value : i),
        controlled: vc(t)
      };
    }
    function mc(e, t) {
      var a = e, i = t.checked;
      i != null && Va(a, "checked", i, !1);
    }
    function $u(e, t) {
      var a = e;
      {
        var i = vc(t);
        !a._wrapperState.controlled && i && !$o && (y("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), $o = !0), a._wrapperState.controlled && !i && !pc && (y("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), pc = !0);
      }
      mc(e, t);
      var u = Ei(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = da(u)) : a.value !== da(u) && (a.value = da(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Ec(a, t.type, u) : t.hasOwnProperty("defaultValue") && Ec(a, t.type, Ei(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function yd(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var d = da(i._wrapperState.initialValue);
        a || d !== i.value && (i.value = d), i.defaultValue = d;
      }
      var h = i.name;
      h !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, h !== "" && (i.name = h);
    }
    function yc(e, t) {
      var a = e;
      $u(a, t), gc(a, t);
    }
    function gc(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        wt(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var d = u[s];
          if (!(d === e || d.form !== e.form)) {
            var h = um(d);
            if (!h)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            Ul(d), $u(d, h);
          }
        }
      }
    }
    function Ec(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || zl(e.ownerDocument) !== e) && (a == null ? e.defaultValue = da(e._wrapperState.initialValue) : e.defaultValue !== da(a) && (e.defaultValue = da(a)));
    }
    var Or = !1, Il = !1, Sc = !1;
    function Yu(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? c.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Il || (Il = !0, y("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (Sc || (Sc = !0, y("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !Or && (y("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Or = !0);
    }
    function Hy(e, t) {
      t.value != null && e.setAttribute("value", da(Ei(t.value)));
    }
    var gd = Array.isArray;
    function qn(e) {
      return gd(e);
    }
    var Fl;
    Fl = !1;
    function Yo() {
      var e = fa();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Ed = ["value", "defaultValue"];
    function jy(e) {
      {
        hd("select", e);
        for (var t = 0; t < Ed.length; t++) {
          var a = Ed[t];
          if (e[a] != null) {
            var i = qn(e[a]);
            e.multiple && !i ? y("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, Yo()) : !e.multiple && i && y("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, Yo());
          }
        }
      }
    }
    function qu(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, d = {}, h = 0; h < s.length; h++)
          d["$" + s[h]] = !0;
        for (var g = 0; g < u.length; g++) {
          var S = d.hasOwnProperty("$" + u[g].value);
          u[g].selected !== S && (u[g].selected = S), S && i && (u[g].defaultSelected = !0);
        }
      } else {
        for (var w = da(Ei(a)), B = null, I = 0; I < u.length; I++) {
          if (u[I].value === w) {
            u[I].selected = !0, i && (u[I].defaultSelected = !0);
            return;
          }
          B === null && !u[I].disabled && (B = u[I]);
        }
        B !== null && (B.selected = !0);
      }
    }
    function Sd(e, t) {
      return ht({}, t, {
        value: void 0
      });
    }
    function bc(e, t) {
      var a = e;
      jy(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Fl && (y("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Fl = !0);
    }
    function Vy(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? qu(a, !!t.multiple, i, !1) : t.defaultValue != null && qu(a, !!t.multiple, t.defaultValue, !0);
    }
    function $y(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? qu(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? qu(a, !!t.multiple, t.defaultValue, !0) : qu(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Yy(e, t) {
      var a = e, i = t.value;
      i != null && qu(a, !!t.multiple, i, !1);
    }
    var Mv = !1;
    function bd(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = ht({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: da(a._wrapperState.initialValue)
      });
      return i;
    }
    function Td(e, t) {
      var a = e;
      hd("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Mv && (y("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", fa() || "A component"), Mv = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          y("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (qn(u)) {
              if (u.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              u = u[0];
            }
            s = u;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: Ei(i)
      };
    }
    function Ov(e, t) {
      var a = e, i = Ei(t.value), u = Ei(t.defaultValue);
      if (i != null) {
        var s = da(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = da(u));
    }
    function Av(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function qy(e, t) {
      Ov(e, t);
    }
    var bi = "http://www.w3.org/1999/xhtml", Cd = "http://www.w3.org/1998/Math/MathML", wd = "http://www.w3.org/2000/svg";
    function Rd(e) {
      switch (e) {
        case "svg":
          return wd;
        case "math":
          return Cd;
        default:
          return bi;
      }
    }
    function xd(e, t) {
      return e == null || e === bi ? Rd(t) : e === wd && t === "foreignObject" ? bi : e;
    }
    var Lv = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, Tc, Nv = Lv(function(e, t) {
      if (e.namespaceURI === wd && !("innerHTML" in e)) {
        Tc = Tc || document.createElement("div"), Tc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = Tc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Ar = 1, Ti = 3, bn = 8, Ci = 9, Dd = 11, Wu = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Ti) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, qo = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, Wo = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function Uv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var zv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Wo).forEach(function(e) {
      zv.forEach(function(t) {
        Wo[Uv(t, e)] = Wo[e];
      });
    });
    function Cc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(Wo.hasOwnProperty(e) && Wo[e]) ? t + "px" : (oa(t, e), ("" + t).trim());
    }
    var Iv = /([A-Z])/g, Fv = /^ms-/;
    function Qu(e) {
      return e.replace(Iv, "-$1").toLowerCase().replace(Fv, "-ms-");
    }
    var Bv = function() {
    };
    {
      var Wy = /^(?:webkit|moz|o)[A-Z]/, Qy = /^-ms-/, Pv = /-(.)/g, kd = /;\s*$/, qa = {}, Bl = {}, Hv = !1, Qo = !1, Gy = function(e) {
        return e.replace(Pv, function(t, a) {
          return a.toUpperCase();
        });
      }, jv = function(e) {
        qa.hasOwnProperty(e) && qa[e] || (qa[e] = !0, y(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Gy(e.replace(Qy, "ms-"))
        ));
      }, _d = function(e) {
        qa.hasOwnProperty(e) && qa[e] || (qa[e] = !0, y("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, Md = function(e, t) {
        Bl.hasOwnProperty(t) && Bl[t] || (Bl[t] = !0, y(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(kd, "")));
      }, Vv = function(e, t) {
        Hv || (Hv = !0, y("`NaN` is an invalid value for the `%s` css style property.", e));
      }, $v = function(e, t) {
        Qo || (Qo = !0, y("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Bv = function(e, t) {
        e.indexOf("-") > -1 ? jv(e) : Wy.test(e) ? _d(e) : kd.test(t) && Md(e, t), typeof t == "number" && (isNaN(t) ? Vv(e, t) : isFinite(t) || $v(e, t));
      };
    }
    var Yv = Bv;
    function Ky(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : Qu(i)) + ":", t += Cc(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function qv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || Yv(i, t[i]);
          var s = Cc(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function Xy(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function Wv(e) {
      var t = {};
      for (var a in e)
        for (var i = qo[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function Zy(e, t) {
      {
        if (!t)
          return;
        var a = Wv(e), i = Wv(t), u = {};
        for (var s in a) {
          var d = a[s], h = i[s];
          if (h && d !== h) {
            var g = d + "," + h;
            if (u[g])
              continue;
            u[g] = !0, y("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Xy(e[d]) ? "Removing" : "Updating", d, h);
          }
        }
      }
    }
    var Aa = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, Go = ht({
      menuitem: !0
    }, Aa), Qv = "__html";
    function wc(e, t) {
      if (t) {
        if (Go[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Qv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && y("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function el(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        // These are reserved SVG and MathML elements.
        // We don't mind this list too much because we expect it to never grow.
        // The alternative is to track the namespace in a few places which is convoluted.
        // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var Ko = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, Rc = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, Gu = {}, Jy = new RegExp("^(aria)-[" + b + "]*$"), Ku = new RegExp("^(aria)[A-Z][" + b + "]*$");
    function Od(e, t) {
      {
        if (rt.call(Gu, t) && Gu[t])
          return !0;
        if (Ku.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = Rc.hasOwnProperty(a) ? a : null;
          if (i == null)
            return y("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Gu[t] = !0, !0;
          if (t !== i)
            return y("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), Gu[t] = !0, !0;
        }
        if (Jy.test(t)) {
          var u = t.toLowerCase(), s = Rc.hasOwnProperty(u) ? u : null;
          if (s == null)
            return Gu[t] = !0, !1;
          if (t !== s)
            return y("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), Gu[t] = !0, !0;
        }
      }
      return !0;
    }
    function Xo(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = Od(e, i);
          u || a.push(i);
        }
        var s = a.map(function(d) {
          return "`" + d + "`";
        }).join(", ");
        a.length === 1 ? y("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && y("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function Ad(e, t) {
      el(e, t) || Xo(e, t);
    }
    var Ld = !1;
    function xc(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !Ld && (Ld = !0, e === "select" && t.multiple ? y("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : y("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var Pl = function() {
    };
    {
      var Wn = {}, Nd = /^on./, Dc = /^on[^A-Z]/, Gv = new RegExp("^(aria)-[" + b + "]*$"), Kv = new RegExp("^(aria)[A-Z][" + b + "]*$");
      Pl = function(e, t, a, i) {
        if (rt.call(Wn, t) && Wn[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return y("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Wn[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, d = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var h = d.hasOwnProperty(u) ? d[u] : null;
          if (h != null)
            return y("Invalid event handler property `%s`. Did you mean `%s`?", t, h), Wn[t] = !0, !0;
          if (Nd.test(t))
            return y("Unknown event handler property `%s`. It will be ignored.", t), Wn[t] = !0, !0;
        } else if (Nd.test(t))
          return Dc.test(t) && y("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Wn[t] = !0, !0;
        if (Gv.test(t) || Kv.test(t))
          return !0;
        if (u === "innerhtml")
          return y("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Wn[t] = !0, !0;
        if (u === "aria")
          return y("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Wn[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return y("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), Wn[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return y("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Wn[t] = !0, !0;
        var g = Rt(t), S = g !== null && g.type === Vn;
        if (Ko.hasOwnProperty(u)) {
          var w = Ko[u];
          if (w !== t)
            return y("Invalid DOM property `%s`. Did you mean `%s`?", t, w), Wn[t] = !0, !0;
        } else if (!S && t !== u)
          return y("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), Wn[t] = !0, !0;
        return typeof a == "boolean" && Ve(t, a, g, !1) ? (a ? y('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : y('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), Wn[t] = !0, !0) : S ? !0 : Ve(t, a, g, !1) ? (Wn[t] = !0, !1) : ((a === "false" || a === "true") && g !== null && g.type === $n && (y("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), Wn[t] = !0), !0);
      };
    }
    var Xv = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = Pl(e, u, t[u], a);
          s || i.push(u);
        }
        var d = i.map(function(h) {
          return "`" + h + "`";
        }).join(", ");
        i.length === 1 ? y("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", d, e) : i.length > 1 && y("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", d, e);
      }
    };
    function Zv(e, t, a) {
      el(e, t) || Xv(e, t, a);
    }
    var Ud = 1, kc = 2, pa = 4, zd = Ud | kc | pa, Hl = null;
    function eg(e) {
      Hl !== null && y("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), Hl = e;
    }
    function tg() {
      Hl === null && y("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), Hl = null;
    }
    function Zo(e) {
      return e === Hl;
    }
    function Id(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Ti ? t.parentNode : t;
    }
    var _c = null, jl = null, Ut = null;
    function Mc(e) {
      var t = go(e);
      if (t) {
        if (typeof _c != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = um(a);
          _c(t.stateNode, t.type, i);
        }
      }
    }
    function Oc(e) {
      _c = e;
    }
    function Xu(e) {
      jl ? Ut ? Ut.push(e) : Ut = [e] : jl = e;
    }
    function Jv() {
      return jl !== null || Ut !== null;
    }
    function Ac() {
      if (jl) {
        var e = jl, t = Ut;
        if (jl = null, Ut = null, Mc(e), t)
          for (var a = 0; a < t.length; a++)
            Mc(t[a]);
      }
    }
    var Zu = function(e, t) {
      return e(t);
    }, Jo = function() {
    }, tl = !1;
    function eh() {
      var e = Jv();
      e && (Jo(), Ac());
    }
    function th(e, t, a) {
      if (tl)
        return e(t, a);
      tl = !0;
      try {
        return Zu(e, t, a);
      } finally {
        tl = !1, eh();
      }
    }
    function ng(e, t, a) {
      Zu = e, Jo = a;
    }
    function nh(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Lc(e, t, a) {
      switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(a.disabled && nh(t));
        default:
          return !1;
      }
    }
    function nl(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = um(a);
      if (i === null)
        return null;
      var u = i[t];
      if (Lc(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var es = !1;
    if (fe)
      try {
        var Vl = {};
        Object.defineProperty(Vl, "passive", {
          get: function() {
            es = !0;
          }
        }), window.addEventListener("test", Vl, Vl), window.removeEventListener("test", Vl, Vl);
      } catch {
        es = !1;
      }
    function Nc(e, t, a, i, u, s, d, h, g) {
      var S = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, S);
      } catch (w) {
        this.onError(w);
      }
    }
    var Uc = Nc;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Fd = document.createElement("react");
      Uc = function(t, a, i, u, s, d, h, g, S) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var w = document.createEvent("Event"), B = !1, I = !0, G = window.event, X = Object.getOwnPropertyDescriptor(window, "event");
        function ee() {
          Fd.removeEventListener(te, We, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = G);
        }
        var Re = Array.prototype.slice.call(arguments, 3);
        function We() {
          B = !0, ee(), a.apply(i, Re), I = !1;
        }
        var je, Tt = !1, yt = !1;
        function $(Y) {
          if (je = Y.error, Tt = !0, je === null && Y.colno === 0 && Y.lineno === 0 && (yt = !0), Y.defaultPrevented && je != null && typeof je == "object")
            try {
              je._suppressLogging = !0;
            } catch {
            }
        }
        var te = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", $), Fd.addEventListener(te, We, !1), w.initEvent(te, !1, !1), Fd.dispatchEvent(w), X && Object.defineProperty(window, "event", X), B && I && (Tt ? yt && (je = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : je = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(je)), window.removeEventListener("error", $), !B)
          return ee(), Nc.apply(this, arguments);
      };
    }
    var rh = Uc, Ju = !1, zc = null, eo = !1, Wa = null, ah = {
      onError: function(e) {
        Ju = !0, zc = e;
      }
    };
    function rl(e, t, a, i, u, s, d, h, g) {
      Ju = !1, zc = null, rh.apply(ah, arguments);
    }
    function Qa(e, t, a, i, u, s, d, h, g) {
      if (rl.apply(this, arguments), Ju) {
        var S = ns();
        eo || (eo = !0, Wa = S);
      }
    }
    function ts() {
      if (eo) {
        var e = Wa;
        throw eo = !1, Wa = null, e;
      }
    }
    function wi() {
      return Ju;
    }
    function ns() {
      if (Ju) {
        var e = zc;
        return Ju = !1, zc = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function to(e) {
      return e._reactInternals;
    }
    function rg(e) {
      return e._reactInternals !== void 0;
    }
    function $l(e, t) {
      e._reactInternals = t;
    }
    var Ye = (
      /*                      */
      0
    ), La = (
      /*                */
      1
    ), fn = (
      /*                    */
      2
    ), Et = (
      /*                       */
      4
    ), va = (
      /*                */
      16
    ), Na = (
      /*                 */
      32
    ), $t = (
      /*                     */
      64
    ), $e = (
      /*                   */
      128
    ), Lr = (
      /*            */
      256
    ), on = (
      /*                          */
      512
    ), On = (
      /*                     */
      1024
    ), Nr = (
      /*                      */
      2048
    ), ha = (
      /*                    */
      4096
    ), Tn = (
      /*                   */
      8192
    ), no = (
      /*             */
      16384
    ), ih = (
      /*               */
      32767
    ), rs = (
      /*                   */
      32768
    ), Ur = (
      /*                */
      65536
    ), Ic = (
      /* */
      131072
    ), Ga = (
      /*                       */
      1048576
    ), ro = (
      /*                    */
      2097152
    ), Ri = (
      /*                 */
      4194304
    ), Fc = (
      /*                */
      8388608
    ), al = (
      /*               */
      16777216
    ), Ka = (
      /*              */
      33554432
    ), il = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Et | On | 0
    ), ll = fn | Et | va | Na | on | ha | Tn, ul = Et | $t | on | Tn, xi = Nr | va, Cn = Ri | Fc | ro, ma = m.ReactCurrentOwner;
    function Gr(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (fn | ha)) !== Ye && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === C ? a : null;
    }
    function Xa(e) {
      if (e.tag === Se) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function Za(e) {
      return e.tag === C ? e.stateNode.containerInfo : null;
    }
    function Yl(e) {
      return Gr(e) === e;
    }
    function lh(e) {
      {
        var t = ma.current;
        if (t !== null && t.tag === T) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || y("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", ct(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = to(e);
      return u ? Gr(u) === u : !1;
    }
    function Bc(e) {
      if (Gr(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Pc(e) {
      var t = e.alternate;
      if (!t) {
        var a = Gr(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, u = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var d = s.alternate;
        if (d === null) {
          var h = s.return;
          if (h !== null) {
            i = u = h;
            continue;
          }
          break;
        }
        if (s.child === d.child) {
          for (var g = s.child; g; ) {
            if (g === i)
              return Bc(s), e;
            if (g === u)
              return Bc(s), t;
            g = g.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== u.return)
          i = s, u = d;
        else {
          for (var S = !1, w = s.child; w; ) {
            if (w === i) {
              S = !0, i = s, u = d;
              break;
            }
            if (w === u) {
              S = !0, u = s, i = d;
              break;
            }
            w = w.sibling;
          }
          if (!S) {
            for (w = d.child; w; ) {
              if (w === i) {
                S = !0, i = d, u = s;
                break;
              }
              if (w === u) {
                S = !0, u = d, i = s;
                break;
              }
              w = w.sibling;
            }
            if (!S)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== C)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function zr(e) {
      var t = Pc(e);
      return t !== null ? Ir(t) : null;
    }
    function Ir(e) {
      if (e.tag === z || e.tag === J)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = Ir(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function Xt(e) {
      var t = Pc(e);
      return t !== null ? ya(t) : null;
    }
    function ya(e) {
      if (e.tag === z || e.tag === J)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== D) {
          var a = ya(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var Bd = p.unstable_scheduleCallback, uh = p.unstable_cancelCallback, Pd = p.unstable_shouldYield, Hd = p.unstable_requestPaint, An = p.unstable_now, Hc = p.unstable_getCurrentPriorityLevel, as = p.unstable_ImmediatePriority, ol = p.unstable_UserBlockingPriority, Di = p.unstable_NormalPriority, ag = p.unstable_LowPriority, ql = p.unstable_IdlePriority, jc = p.unstable_yieldValue, oh = p.unstable_setDisableYieldValue, Wl = null, dn = null, we = null, Kr = !1, Fr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function ao(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return y("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        gn && (e = ht({}, e, {
          getLaneLabelMap: Ql,
          injectProfilingHooks: ga
        })), Wl = t.inject(e), dn = t;
      } catch (a) {
        y("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function jd(e, t) {
      if (dn && typeof dn.onScheduleFiberRoot == "function")
        try {
          dn.onScheduleFiberRoot(Wl, e, t);
        } catch (a) {
          Kr || (Kr = !0, y("React instrumentation encountered an error: %s", a));
        }
    }
    function Vd(e, t) {
      if (dn && typeof dn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & $e) === $e;
          if (Vt) {
            var i;
            switch (t) {
              case hr:
                i = as;
                break;
              case ei:
                i = ol;
                break;
              case Ea:
                i = Di;
                break;
              case Sa:
                i = ql;
                break;
              default:
                i = Di;
                break;
            }
            dn.onCommitFiberRoot(Wl, e, i, a);
          }
        } catch (u) {
          Kr || (Kr = !0, y("React instrumentation encountered an error: %s", u));
        }
    }
    function $d(e) {
      if (dn && typeof dn.onPostCommitFiberRoot == "function")
        try {
          dn.onPostCommitFiberRoot(Wl, e);
        } catch (t) {
          Kr || (Kr = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function Yd(e) {
      if (dn && typeof dn.onCommitFiberUnmount == "function")
        try {
          dn.onCommitFiberUnmount(Wl, e);
        } catch (t) {
          Kr || (Kr = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function tn(e) {
      if (typeof jc == "function" && (oh(e), O(e)), dn && typeof dn.setStrictMode == "function")
        try {
          dn.setStrictMode(Wl, e);
        } catch (t) {
          Kr || (Kr = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function ga(e) {
      we = e;
    }
    function Ql() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Xl; a++) {
          var i = dh(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function qd(e) {
      we !== null && typeof we.markCommitStarted == "function" && we.markCommitStarted(e);
    }
    function Wd() {
      we !== null && typeof we.markCommitStopped == "function" && we.markCommitStopped();
    }
    function Xr(e) {
      we !== null && typeof we.markComponentRenderStarted == "function" && we.markComponentRenderStarted(e);
    }
    function Zr() {
      we !== null && typeof we.markComponentRenderStopped == "function" && we.markComponentRenderStopped();
    }
    function Qd(e) {
      we !== null && typeof we.markComponentPassiveEffectMountStarted == "function" && we.markComponentPassiveEffectMountStarted(e);
    }
    function sh() {
      we !== null && typeof we.markComponentPassiveEffectMountStopped == "function" && we.markComponentPassiveEffectMountStopped();
    }
    function ki(e) {
      we !== null && typeof we.markComponentPassiveEffectUnmountStarted == "function" && we.markComponentPassiveEffectUnmountStarted(e);
    }
    function sl() {
      we !== null && typeof we.markComponentPassiveEffectUnmountStopped == "function" && we.markComponentPassiveEffectUnmountStopped();
    }
    function Vc(e) {
      we !== null && typeof we.markComponentLayoutEffectMountStarted == "function" && we.markComponentLayoutEffectMountStarted(e);
    }
    function ch() {
      we !== null && typeof we.markComponentLayoutEffectMountStopped == "function" && we.markComponentLayoutEffectMountStopped();
    }
    function is(e) {
      we !== null && typeof we.markComponentLayoutEffectUnmountStarted == "function" && we.markComponentLayoutEffectUnmountStarted(e);
    }
    function Gd() {
      we !== null && typeof we.markComponentLayoutEffectUnmountStopped == "function" && we.markComponentLayoutEffectUnmountStopped();
    }
    function ls(e, t, a) {
      we !== null && typeof we.markComponentErrored == "function" && we.markComponentErrored(e, t, a);
    }
    function Ja(e, t, a) {
      we !== null && typeof we.markComponentSuspended == "function" && we.markComponentSuspended(e, t, a);
    }
    function us(e) {
      we !== null && typeof we.markLayoutEffectsStarted == "function" && we.markLayoutEffectsStarted(e);
    }
    function os() {
      we !== null && typeof we.markLayoutEffectsStopped == "function" && we.markLayoutEffectsStopped();
    }
    function Gl(e) {
      we !== null && typeof we.markPassiveEffectsStarted == "function" && we.markPassiveEffectsStarted(e);
    }
    function Kd() {
      we !== null && typeof we.markPassiveEffectsStopped == "function" && we.markPassiveEffectsStopped();
    }
    function Kl(e) {
      we !== null && typeof we.markRenderStarted == "function" && we.markRenderStarted(e);
    }
    function fh() {
      we !== null && typeof we.markRenderYielded == "function" && we.markRenderYielded();
    }
    function $c() {
      we !== null && typeof we.markRenderStopped == "function" && we.markRenderStopped();
    }
    function nn(e) {
      we !== null && typeof we.markRenderScheduled == "function" && we.markRenderScheduled(e);
    }
    function Yc(e, t) {
      we !== null && typeof we.markForceUpdateScheduled == "function" && we.markForceUpdateScheduled(e, t);
    }
    function ss(e, t) {
      we !== null && typeof we.markStateUpdateScheduled == "function" && we.markStateUpdateScheduled(e, t);
    }
    var qe = (
      /*                         */
      0
    ), pt = (
      /*                 */
      1
    ), Mt = (
      /*                    */
      2
    ), Bt = (
      /*               */
      8
    ), Ot = (
      /*              */
      16
    ), wn = Math.clz32 ? Math.clz32 : cs, Bn = Math.log, qc = Math.LN2;
    function cs(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Bn(t) / qc | 0) | 0;
    }
    var Xl = 31, de = (
      /*                        */
      0
    ), kt = (
      /*                          */
      0
    ), Je = (
      /*                        */
      1
    ), cl = (
      /*    */
      2
    ), Ua = (
      /*             */
      4
    ), sr = (
      /*            */
      8
    ), pn = (
      /*                     */
      16
    ), _i = (
      /*                */
      32
    ), fl = (
      /*                       */
      4194240
    ), Zl = (
      /*                        */
      64
    ), Wc = (
      /*                        */
      128
    ), Qc = (
      /*                        */
      256
    ), Gc = (
      /*                        */
      512
    ), Kc = (
      /*                        */
      1024
    ), Xc = (
      /*                        */
      2048
    ), Zc = (
      /*                        */
      4096
    ), Jc = (
      /*                        */
      8192
    ), ef = (
      /*                        */
      16384
    ), Jl = (
      /*                       */
      32768
    ), tf = (
      /*                       */
      65536
    ), io = (
      /*                       */
      131072
    ), lo = (
      /*                       */
      262144
    ), nf = (
      /*                       */
      524288
    ), fs = (
      /*                       */
      1048576
    ), rf = (
      /*                       */
      2097152
    ), ds = (
      /*                            */
      130023424
    ), eu = (
      /*                             */
      4194304
    ), af = (
      /*                             */
      8388608
    ), ps = (
      /*                             */
      16777216
    ), lf = (
      /*                             */
      33554432
    ), uf = (
      /*                             */
      67108864
    ), Xd = eu, vs = (
      /*          */
      134217728
    ), Zd = (
      /*                          */
      268435455
    ), hs = (
      /*               */
      268435456
    ), tu = (
      /*                        */
      536870912
    ), Jr = (
      /*                   */
      1073741824
    );
    function dh(e) {
      {
        if (e & Je)
          return "Sync";
        if (e & cl)
          return "InputContinuousHydration";
        if (e & Ua)
          return "InputContinuous";
        if (e & sr)
          return "DefaultHydration";
        if (e & pn)
          return "Default";
        if (e & _i)
          return "TransitionHydration";
        if (e & fl)
          return "Transition";
        if (e & ds)
          return "Retry";
        if (e & vs)
          return "SelectiveHydration";
        if (e & hs)
          return "IdleHydration";
        if (e & tu)
          return "Idle";
        if (e & Jr)
          return "Offscreen";
      }
    }
    var jt = -1, nu = Zl, of = eu;
    function ms(e) {
      switch (dl(e)) {
        case Je:
          return Je;
        case cl:
          return cl;
        case Ua:
          return Ua;
        case sr:
          return sr;
        case pn:
          return pn;
        case _i:
          return _i;
        case Zl:
        case Wc:
        case Qc:
        case Gc:
        case Kc:
        case Xc:
        case Zc:
        case Jc:
        case ef:
        case Jl:
        case tf:
        case io:
        case lo:
        case nf:
        case fs:
        case rf:
          return e & fl;
        case eu:
        case af:
        case ps:
        case lf:
        case uf:
          return e & ds;
        case vs:
          return vs;
        case hs:
          return hs;
        case tu:
          return tu;
        case Jr:
          return Jr;
        default:
          return y("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function sf(e, t) {
      var a = e.pendingLanes;
      if (a === de)
        return de;
      var i = de, u = e.suspendedLanes, s = e.pingedLanes, d = a & Zd;
      if (d !== de) {
        var h = d & ~u;
        if (h !== de)
          i = ms(h);
        else {
          var g = d & s;
          g !== de && (i = ms(g));
        }
      } else {
        var S = a & ~u;
        S !== de ? i = ms(S) : s !== de && (i = ms(s));
      }
      if (i === de)
        return de;
      if (t !== de && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === de) {
        var w = dl(i), B = dl(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          w >= B || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          w === pn && (B & fl) !== de
        )
          return t;
      }
      (i & Ua) !== de && (i |= a & pn);
      var I = e.entangledLanes;
      if (I !== de)
        for (var G = e.entanglements, X = i & I; X > 0; ) {
          var ee = Rn(X), Re = 1 << ee;
          i |= G[ee], X &= ~Re;
        }
      return i;
    }
    function za(e, t) {
      for (var a = e.eventTimes, i = jt; t > 0; ) {
        var u = Rn(t), s = 1 << u, d = a[u];
        d > i && (i = d), t &= ~s;
      }
      return i;
    }
    function Jd(e, t) {
      switch (e) {
        case Je:
        case cl:
        case Ua:
          return t + 250;
        case sr:
        case pn:
        case _i:
        case Zl:
        case Wc:
        case Qc:
        case Gc:
        case Kc:
        case Xc:
        case Zc:
        case Jc:
        case ef:
        case Jl:
        case tf:
        case io:
        case lo:
        case nf:
        case fs:
        case rf:
          return t + 5e3;
        case eu:
        case af:
        case ps:
        case lf:
        case uf:
          return jt;
        case vs:
        case hs:
        case tu:
        case Jr:
          return jt;
        default:
          return y("Should have found matching lanes. This is a bug in React."), jt;
      }
    }
    function cf(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, d = a; d > 0; ) {
        var h = Rn(d), g = 1 << h, S = s[h];
        S === jt ? ((g & i) === de || (g & u) !== de) && (s[h] = Jd(g, t)) : S <= t && (e.expiredLanes |= g), d &= ~g;
      }
    }
    function ph(e) {
      return ms(e.pendingLanes);
    }
    function ff(e) {
      var t = e.pendingLanes & -1073741825;
      return t !== de ? t : t & Jr ? Jr : de;
    }
    function vh(e) {
      return (e & Je) !== de;
    }
    function ys(e) {
      return (e & Zd) !== de;
    }
    function ru(e) {
      return (e & ds) === e;
    }
    function ep(e) {
      var t = Je | Ua | pn;
      return (e & t) === de;
    }
    function tp(e) {
      return (e & fl) === e;
    }
    function df(e, t) {
      var a = cl | Ua | sr | pn;
      return (t & a) !== de;
    }
    function hh(e, t) {
      return (t & e.expiredLanes) !== de;
    }
    function np(e) {
      return (e & fl) !== de;
    }
    function rp() {
      var e = nu;
      return nu <<= 1, (nu & fl) === de && (nu = Zl), e;
    }
    function mh() {
      var e = of;
      return of <<= 1, (of & ds) === de && (of = eu), e;
    }
    function dl(e) {
      return e & -e;
    }
    function gs(e) {
      return dl(e);
    }
    function Rn(e) {
      return 31 - wn(e);
    }
    function Qn(e) {
      return Rn(e);
    }
    function Br(e, t) {
      return (e & t) !== de;
    }
    function au(e, t) {
      return (e & t) === t;
    }
    function ft(e, t) {
      return e | t;
    }
    function Es(e, t) {
      return e & ~t;
    }
    function ap(e, t) {
      return e & t;
    }
    function yh(e) {
      return e;
    }
    function gh(e, t) {
      return e !== kt && e < t ? e : t;
    }
    function Ss(e) {
      for (var t = [], a = 0; a < Xl; a++)
        t.push(e);
      return t;
    }
    function uo(e, t, a) {
      e.pendingLanes |= t, t !== tu && (e.suspendedLanes = de, e.pingedLanes = de);
      var i = e.eventTimes, u = Qn(t);
      i[u] = a;
    }
    function Eh(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = Rn(i), s = 1 << u;
        a[u] = jt, i &= ~s;
      }
    }
    function pf(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function ip(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = de, e.pingedLanes = de, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, d = a; d > 0; ) {
        var h = Rn(d), g = 1 << h;
        i[h] = de, u[h] = jt, s[h] = jt, d &= ~g;
      }
    }
    function vf(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = Rn(u), d = 1 << s;
        // Is this one of the newly entangled lanes?
        d & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~d;
      }
    }
    function lp(e, t) {
      var a = dl(t), i;
      switch (a) {
        case Ua:
          i = cl;
          break;
        case pn:
          i = sr;
          break;
        case Zl:
        case Wc:
        case Qc:
        case Gc:
        case Kc:
        case Xc:
        case Zc:
        case Jc:
        case ef:
        case Jl:
        case tf:
        case io:
        case lo:
        case nf:
        case fs:
        case rf:
        case eu:
        case af:
        case ps:
        case lf:
        case uf:
          i = _i;
          break;
        case tu:
          i = hs;
          break;
        default:
          i = kt;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== kt ? kt : i;
    }
    function bs(e, t, a) {
      if (Fr)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = Qn(a), s = 1 << u, d = i[u];
          d.add(t), a &= ~s;
        }
    }
    function Sh(e, t) {
      if (Fr)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = Qn(t), s = 1 << u, d = a[u];
          d.size > 0 && (d.forEach(function(h) {
            var g = h.alternate;
            (g === null || !i.has(g)) && i.add(h);
          }), d.clear()), t &= ~s;
        }
    }
    function up(e, t) {
      return null;
    }
    var hr = Je, ei = Ua, Ea = pn, Sa = tu, Ts = kt;
    function ba() {
      return Ts;
    }
    function xn(e) {
      Ts = e;
    }
    function bh(e, t) {
      var a = Ts;
      try {
        return Ts = e, t();
      } finally {
        Ts = a;
      }
    }
    function Th(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function Cs(e, t) {
      return e > t ? e : t;
    }
    function Pn(e, t) {
      return e !== 0 && e < t;
    }
    function Ch(e) {
      var t = dl(e);
      return Pn(hr, t) ? Pn(ei, t) ? ys(t) ? Ea : Sa : ei : hr;
    }
    function hf(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var ws;
    function cr(e) {
      ws = e;
    }
    function ig(e) {
      ws(e);
    }
    var Ae;
    function oo(e) {
      Ae = e;
    }
    var mf;
    function wh(e) {
      mf = e;
    }
    var Rh;
    function Rs(e) {
      Rh = e;
    }
    var xs;
    function op(e) {
      xs = e;
    }
    var yf = !1, Ds = [], Mi = null, ti = null, ni = null, vn = /* @__PURE__ */ new Map(), mr = /* @__PURE__ */ new Map(), yr = [], xh = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function Dh(e) {
      return xh.indexOf(e) > -1;
    }
    function Ia(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function sp(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Mi = null;
          break;
        case "dragenter":
        case "dragleave":
          ti = null;
          break;
        case "mouseover":
        case "mouseout":
          ni = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          vn.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          mr.delete(i);
          break;
        }
      }
    }
    function Pr(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var d = Ia(t, a, i, u, s);
        if (t !== null) {
          var h = go(t);
          h !== null && Ae(h);
        }
        return d;
      }
      e.eventSystemFlags |= i;
      var g = e.targetContainers;
      return u !== null && g.indexOf(u) === -1 && g.push(u), e;
    }
    function lg(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return Mi = Pr(Mi, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var d = u;
          return ti = Pr(ti, e, t, a, i, d), !0;
        }
        case "mouseover": {
          var h = u;
          return ni = Pr(ni, e, t, a, i, h), !0;
        }
        case "pointerover": {
          var g = u, S = g.pointerId;
          return vn.set(S, Pr(vn.get(S) || null, e, t, a, i, g)), !0;
        }
        case "gotpointercapture": {
          var w = u, B = w.pointerId;
          return mr.set(B, Pr(mr.get(B) || null, e, t, a, i, w)), !0;
        }
      }
      return !1;
    }
    function cp(e) {
      var t = Bs(e.target);
      if (t !== null) {
        var a = Gr(t);
        if (a !== null) {
          var i = a.tag;
          if (i === Se) {
            var u = Xa(a);
            if (u !== null) {
              e.blockedOn = u, xs(e.priority, function() {
                mf(a);
              });
              return;
            }
          } else if (i === C) {
            var s = a.stateNode;
            if (hf(s)) {
              e.blockedOn = Za(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function kh(e) {
      for (var t = Rh(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < yr.length && Pn(t, yr[i].priority); i++)
        ;
      yr.splice(i, 0, a), i === 0 && cp(a);
    }
    function ks(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = co(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          eg(s), u.target.dispatchEvent(s), tg();
        } else {
          var d = go(i);
          return d !== null && Ae(d), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function fp(e, t, a) {
      ks(e) && a.delete(t);
    }
    function ug() {
      yf = !1, Mi !== null && ks(Mi) && (Mi = null), ti !== null && ks(ti) && (ti = null), ni !== null && ks(ni) && (ni = null), vn.forEach(fp), mr.forEach(fp);
    }
    function pl(e, t) {
      e.blockedOn === t && (e.blockedOn = null, yf || (yf = !0, p.unstable_scheduleCallback(p.unstable_NormalPriority, ug)));
    }
    function iu(e) {
      if (Ds.length > 0) {
        pl(Ds[0], e);
        for (var t = 1; t < Ds.length; t++) {
          var a = Ds[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Mi !== null && pl(Mi, e), ti !== null && pl(ti, e), ni !== null && pl(ni, e);
      var i = function(h) {
        return pl(h, e);
      };
      vn.forEach(i), mr.forEach(i);
      for (var u = 0; u < yr.length; u++) {
        var s = yr[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; yr.length > 0; ) {
        var d = yr[0];
        if (d.blockedOn !== null)
          break;
        cp(d), d.blockedOn === null && yr.shift();
      }
    }
    var Gn = m.ReactCurrentBatchConfig, St = !0;
    function Ln(e) {
      St = !!e;
    }
    function Dn() {
      return St;
    }
    function Kn(e, t, a) {
      var i = gf(t), u;
      switch (i) {
        case hr:
          u = ea;
          break;
        case ei:
          u = so;
          break;
        case Ea:
        default:
          u = hn;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function ea(e, t, a, i) {
      var u = ba(), s = Gn.transition;
      Gn.transition = null;
      try {
        xn(hr), hn(e, t, a, i);
      } finally {
        xn(u), Gn.transition = s;
      }
    }
    function so(e, t, a, i) {
      var u = ba(), s = Gn.transition;
      Gn.transition = null;
      try {
        xn(ei), hn(e, t, a, i);
      } finally {
        xn(u), Gn.transition = s;
      }
    }
    function hn(e, t, a, i) {
      St && _s(e, t, a, i);
    }
    function _s(e, t, a, i) {
      var u = co(e, t, a, i);
      if (u === null) {
        wg(e, t, i, ri, a), sp(e, i);
        return;
      }
      if (lg(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (sp(e, i), t & pa && Dh(e)) {
        for (; u !== null; ) {
          var s = go(u);
          s !== null && ig(s);
          var d = co(e, t, a, i);
          if (d === null && wg(e, t, i, ri, a), d === u)
            break;
          u = d;
        }
        u !== null && i.stopPropagation();
        return;
      }
      wg(e, t, i, null, a);
    }
    var ri = null;
    function co(e, t, a, i) {
      ri = null;
      var u = Id(i), s = Bs(u);
      if (s !== null) {
        var d = Gr(s);
        if (d === null)
          s = null;
        else {
          var h = d.tag;
          if (h === Se) {
            var g = Xa(d);
            if (g !== null)
              return g;
            s = null;
          } else if (h === C) {
            var S = d.stateNode;
            if (hf(S))
              return Za(d);
            s = null;
          } else d !== s && (s = null);
        }
      }
      return ri = s, null;
    }
    function gf(e) {
      switch (e) {
        // Used by SimpleEventPlugin:
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        // Used by polyfills:
        // eslint-disable-next-line no-fallthrough
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        // Only enableCreateEventHandleAPI:
        // eslint-disable-next-line no-fallthrough
        case "beforeblur":
        case "afterblur":
        // Not used by React but could be by user code:
        // eslint-disable-next-line no-fallthrough
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return hr;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        // Not used by React but could be by user code:
        // eslint-disable-next-line no-fallthrough
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return ei;
        case "message": {
          var t = Hc();
          switch (t) {
            case as:
              return hr;
            case ol:
              return ei;
            case Di:
            case ag:
              return Ea;
            case ql:
              return Sa;
            default:
              return Ea;
          }
        }
        default:
          return Ea;
      }
    }
    function Ms(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function Hr(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function dp(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function fo(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var ta = null, po = null, lu = null;
    function vl(e) {
      return ta = e, po = Os(), !0;
    }
    function Ef() {
      ta = null, po = null, lu = null;
    }
    function Oi() {
      if (lu)
        return lu;
      var e, t = po, a = t.length, i, u = Os(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var d = a - e;
      for (i = 1; i <= d && t[a - i] === u[s - i]; i++)
        ;
      var h = i > 1 ? 1 - i : void 0;
      return lu = u.slice(e, h), lu;
    }
    function Os() {
      return "value" in ta ? ta.value : ta.textContent;
    }
    function hl(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function vo() {
      return !0;
    }
    function As() {
      return !1;
    }
    function fr(e) {
      function t(a, i, u, s, d) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = d, this.currentTarget = null;
        for (var h in e)
          if (e.hasOwnProperty(h)) {
            var g = e[h];
            g ? this[h] = g(s) : this[h] = s[h];
          }
        var S = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return S ? this.isDefaultPrevented = vo : this.isDefaultPrevented = As, this.isPropagationStopped = As, this;
      }
      return ht(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = vo);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = vo);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: vo
      }), t;
    }
    var kn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, ai = fr(kn), gr = ht({}, kn, {
      view: 0,
      detail: 0
    }), jr = fr(gr), Sf, Ls, uu;
    function og(e) {
      e !== uu && (uu && e.type === "mousemove" ? (Sf = e.screenX - uu.screenX, Ls = e.screenY - uu.screenY) : (Sf = 0, Ls = 0), uu = e);
    }
    var Fa = ht({}, gr, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Zt,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (og(e), Sf);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Ls;
      }
    }), pp = fr(Fa), vp = ht({}, Fa, {
      dataTransfer: 0
    }), ou = fr(vp), hp = ht({}, gr, {
      relatedTarget: 0
    }), Ai = fr(hp), _h = ht({}, kn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Mh = fr(_h), mp = ht({}, kn, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), bf = fr(mp), sg = ht({}, kn, {
      data: 0
    }), Oh = fr(sg), Ah = Oh, Lh = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, su = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function cg(e) {
      if (e.key) {
        var t = Lh[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = hl(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? su[e.keyCode] || "Unidentified" : "";
    }
    var ho = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function Nh(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = ho[e];
      return i ? !!a[i] : !1;
    }
    function Zt(e) {
      return Nh;
    }
    var fg = ht({}, gr, {
      key: cg,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Zt,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? hl(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? hl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), Uh = fr(fg), dg = ht({}, Fa, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), zh = fr(dg), Ih = ht({}, gr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Zt
    }), Fh = fr(Ih), pg = ht({}, kn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Ta = fr(pg), yp = ht({}, Fa, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), vg = fr(yp), ml = [9, 13, 27, 32], Ns = 229, Li = fe && "CompositionEvent" in window, yl = null;
    fe && "documentMode" in document && (yl = document.documentMode);
    var gp = fe && "TextEvent" in window && !yl, Tf = fe && (!Li || yl && yl > 8 && yl <= 11), Bh = 32, Cf = String.fromCharCode(Bh);
    function hg() {
      P("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), P("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), P("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), P("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Ep = !1;
    function Ph(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function wf(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function Rf(e, t) {
      return e === "keydown" && t.keyCode === Ns;
    }
    function Sp(e, t) {
      switch (e) {
        case "keyup":
          return ml.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Ns;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function xf(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function Hh(e) {
      return e.locale === "ko";
    }
    var cu = !1;
    function bp(e, t, a, i, u) {
      var s, d;
      if (Li ? s = wf(t) : cu ? Sp(t, i) && (s = "onCompositionEnd") : Rf(t, i) && (s = "onCompositionStart"), !s)
        return null;
      Tf && !Hh(i) && (!cu && s === "onCompositionStart" ? cu = vl(u) : s === "onCompositionEnd" && cu && (d = Oi()));
      var h = Qh(a, s);
      if (h.length > 0) {
        var g = new Oh(s, t, null, i, u);
        if (e.push({
          event: g,
          listeners: h
        }), d)
          g.data = d;
        else {
          var S = xf(i);
          S !== null && (g.data = S);
        }
      }
    }
    function Df(e, t) {
      switch (e) {
        case "compositionend":
          return xf(t);
        case "keypress":
          var a = t.which;
          return a !== Bh ? null : (Ep = !0, Cf);
        case "textInput":
          var i = t.data;
          return i === Cf && Ep ? null : i;
        default:
          return null;
      }
    }
    function Tp(e, t) {
      if (cu) {
        if (e === "compositionend" || !Li && Sp(e, t)) {
          var a = Oi();
          return Ef(), cu = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!Ph(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return Tf && !Hh(t) ? null : t.data;
        default:
          return null;
      }
    }
    function kf(e, t, a, i, u) {
      var s;
      if (gp ? s = Df(t, i) : s = Tp(t, i), !s)
        return null;
      var d = Qh(a, "onBeforeInput");
      if (d.length > 0) {
        var h = new Ah("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: h,
          listeners: d
        }), h.data = s;
      }
    }
    function jh(e, t, a, i, u, s, d) {
      bp(e, t, a, i, u), kf(e, t, a, i, u);
    }
    var mg = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function Us(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!mg[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function yg(e) {
      if (!fe)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function zs() {
      P("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function Vh(e, t, a, i) {
      Xu(i);
      var u = Qh(t, "onChange");
      if (u.length > 0) {
        var s = new ai("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: u
        });
      }
    }
    var gl = null, n = null;
    function r(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function l(e) {
      var t = [];
      Vh(t, n, e, Id(e)), th(o, t);
    }
    function o(e) {
      Wb(e, 0);
    }
    function f(e) {
      var t = Nf(e);
      if (Ul(t))
        return e;
    }
    function v(e, t) {
      if (e === "change")
        return t;
    }
    var E = !1;
    fe && (E = yg("input") && (!document.documentMode || document.documentMode > 9));
    function k(e, t) {
      gl = e, n = t, gl.attachEvent("onpropertychange", K);
    }
    function N() {
      gl && (gl.detachEvent("onpropertychange", K), gl = null, n = null);
    }
    function K(e) {
      e.propertyName === "value" && f(n) && l(e);
    }
    function ve(e, t, a) {
      e === "focusin" ? (N(), k(t, a)) : e === "focusout" && N();
    }
    function ye(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return f(n);
    }
    function pe(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function _e(e, t) {
      if (e === "click")
        return f(t);
    }
    function ze(e, t) {
      if (e === "input" || e === "change")
        return f(t);
    }
    function Pe(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Ec(e, "number", e.value);
    }
    function mn(e, t, a, i, u, s, d) {
      var h = a ? Nf(a) : window, g, S;
      if (r(h) ? g = v : Us(h) ? E ? g = ze : (g = ye, S = ve) : pe(h) && (g = _e), g) {
        var w = g(t, a);
        if (w) {
          Vh(e, w, i, u);
          return;
        }
      }
      S && S(t, h, a), t === "focusout" && Pe(h);
    }
    function j() {
      Le("onMouseEnter", ["mouseout", "mouseover"]), Le("onMouseLeave", ["mouseout", "mouseover"]), Le("onPointerEnter", ["pointerout", "pointerover"]), Le("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function F(e, t, a, i, u, s, d) {
      var h = t === "mouseover" || t === "pointerover", g = t === "mouseout" || t === "pointerout";
      if (h && !Zo(i)) {
        var S = i.relatedTarget || i.fromElement;
        if (S && (Bs(S) || zp(S)))
          return;
      }
      if (!(!g && !h)) {
        var w;
        if (u.window === u)
          w = u;
        else {
          var B = u.ownerDocument;
          B ? w = B.defaultView || B.parentWindow : w = window;
        }
        var I, G;
        if (g) {
          var X = i.relatedTarget || i.toElement;
          if (I = a, G = X ? Bs(X) : null, G !== null) {
            var ee = Gr(G);
            (G !== ee || G.tag !== z && G.tag !== J) && (G = null);
          }
        } else
          I = null, G = a;
        if (I !== G) {
          var Re = pp, We = "onMouseLeave", je = "onMouseEnter", Tt = "mouse";
          (t === "pointerout" || t === "pointerover") && (Re = zh, We = "onPointerLeave", je = "onPointerEnter", Tt = "pointer");
          var yt = I == null ? w : Nf(I), $ = G == null ? w : Nf(G), te = new Re(We, Tt + "leave", I, i, u);
          te.target = yt, te.relatedTarget = $;
          var Y = null, ge = Bs(u);
          if (ge === a) {
            var Oe = new Re(je, Tt + "enter", G, i, u);
            Oe.target = $, Oe.relatedTarget = yt, Y = Oe;
          }
          nR(e, te, Y, I, G);
        }
      }
    }
    function q(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var he = typeof Object.is == "function" ? Object.is : q;
    function Ie(e, t) {
      if (he(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!rt.call(t, s) || !he(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function Ge(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Xe(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function tt(e, t) {
      for (var a = Ge(e), i = 0, u = 0; a; ) {
        if (a.nodeType === Ti) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = Ge(Xe(a));
      }
    }
    function Hn(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, d = i.focusNode, h = i.focusOffset;
      try {
        u.nodeType, d.nodeType;
      } catch {
        return null;
      }
      return At(e, u, s, d, h);
    }
    function At(e, t, a, i, u) {
      var s = 0, d = -1, h = -1, g = 0, S = 0, w = e, B = null;
      e: for (; ; ) {
        for (var I = null; w === t && (a === 0 || w.nodeType === Ti) && (d = s + a), w === i && (u === 0 || w.nodeType === Ti) && (h = s + u), w.nodeType === Ti && (s += w.nodeValue.length), (I = w.firstChild) !== null; )
          B = w, w = I;
        for (; ; ) {
          if (w === e)
            break e;
          if (B === t && ++g === a && (d = s), B === i && ++S === u && (h = s), (I = w.nextSibling) !== null)
            break;
          w = B, B = w.parentNode;
        }
        w = I;
      }
      return d === -1 || h === -1 ? null : {
        start: d,
        end: h
      };
    }
    function El(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, d = Math.min(t.start, s), h = t.end === void 0 ? d : Math.min(t.end, s);
        if (!u.extend && d > h) {
          var g = h;
          h = d, d = g;
        }
        var S = tt(e, d), w = tt(e, h);
        if (S && w) {
          if (u.rangeCount === 1 && u.anchorNode === S.node && u.anchorOffset === S.offset && u.focusNode === w.node && u.focusOffset === w.offset)
            return;
          var B = a.createRange();
          B.setStart(S.node, S.offset), u.removeAllRanges(), d > h ? (u.addRange(B), u.extend(w.node, w.offset)) : (B.setEnd(w.node, w.offset), u.addRange(B));
        }
      }
    }
    function $h(e) {
      return e && e.nodeType === Ti;
    }
    function zb(e, t) {
      return !e || !t ? !1 : e === t ? !0 : $h(e) ? !1 : $h(t) ? zb(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function F1(e) {
      return e && e.ownerDocument && zb(e.ownerDocument.documentElement, e);
    }
    function B1(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function Ib() {
      for (var e = window, t = zl(); t instanceof e.HTMLIFrameElement; ) {
        if (B1(t))
          e = t.contentWindow;
        else
          return t;
        t = zl(e.document);
      }
      return t;
    }
    function gg(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function P1() {
      var e = Ib();
      return {
        focusedElem: e,
        selectionRange: gg(e) ? j1(e) : null
      };
    }
    function H1(e) {
      var t = Ib(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && F1(a)) {
        i !== null && gg(a) && V1(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === Ar && u.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var d = 0; d < u.length; d++) {
          var h = u[d];
          h.element.scrollLeft = h.left, h.element.scrollTop = h.top;
        }
      }
    }
    function j1(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = Hn(e), t || {
        start: 0,
        end: 0
      };
    }
    function V1(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : El(e, t);
    }
    var $1 = fe && "documentMode" in document && document.documentMode <= 11;
    function Y1() {
      P("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var _f = null, Eg = null, Cp = null, Sg = !1;
    function q1(e) {
      if ("selectionStart" in e && gg(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function W1(e) {
      return e.window === e ? e.document : e.nodeType === Ci ? e : e.ownerDocument;
    }
    function Fb(e, t, a) {
      var i = W1(a);
      if (!(Sg || _f == null || _f !== zl(i))) {
        var u = q1(_f);
        if (!Cp || !Ie(Cp, u)) {
          Cp = u;
          var s = Qh(Eg, "onSelect");
          if (s.length > 0) {
            var d = new ai("onSelect", "select", null, t, a);
            e.push({
              event: d,
              listeners: s
            }), d.target = _f;
          }
        }
      }
    }
    function Q1(e, t, a, i, u, s, d) {
      var h = a ? Nf(a) : window;
      switch (t) {
        // Track the input node that has focus.
        case "focusin":
          (Us(h) || h.contentEditable === "true") && (_f = h, Eg = a, Cp = null);
          break;
        case "focusout":
          _f = null, Eg = null, Cp = null;
          break;
        // Don't fire the event while the user is dragging. This matches the
        // semantics of the native select event.
        case "mousedown":
          Sg = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Sg = !1, Fb(e, i, u);
          break;
        // Chrome and IE fire non-standard event when selection is changed (and
        // sometimes when it hasn't). IE's event fires out of order with respect
        // to key and input events on deletion, so we discard it.
        //
        // Firefox doesn't support selectionchange, so check selection status
        // after each key entry. The selection changes after keydown and before
        // keyup, but we check on keydown as well in the case of holding down a
        // key, when multiple keydown events are fired but only one keyup is.
        // This is also our approach for IE handling, for the reason above.
        case "selectionchange":
          if ($1)
            break;
        // falls through
        case "keydown":
        case "keyup":
          Fb(e, i, u);
      }
    }
    function Yh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var Mf = {
      animationend: Yh("Animation", "AnimationEnd"),
      animationiteration: Yh("Animation", "AnimationIteration"),
      animationstart: Yh("Animation", "AnimationStart"),
      transitionend: Yh("Transition", "TransitionEnd")
    }, bg = {}, Bb = {};
    fe && (Bb = document.createElement("div").style, "AnimationEvent" in window || (delete Mf.animationend.animation, delete Mf.animationiteration.animation, delete Mf.animationstart.animation), "TransitionEvent" in window || delete Mf.transitionend.transition);
    function qh(e) {
      if (bg[e])
        return bg[e];
      if (!Mf[e])
        return e;
      var t = Mf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in Bb)
          return bg[e] = t[a];
      return e;
    }
    var Pb = qh("animationend"), Hb = qh("animationiteration"), jb = qh("animationstart"), Vb = qh("transitionend"), $b = /* @__PURE__ */ new Map(), Yb = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function mo(e, t) {
      $b.set(e, t), P(t, [e]);
    }
    function G1() {
      for (var e = 0; e < Yb.length; e++) {
        var t = Yb[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        mo(a, "on" + i);
      }
      mo(Pb, "onAnimationEnd"), mo(Hb, "onAnimationIteration"), mo(jb, "onAnimationStart"), mo("dblclick", "onDoubleClick"), mo("focusin", "onFocus"), mo("focusout", "onBlur"), mo(Vb, "onTransitionEnd");
    }
    function K1(e, t, a, i, u, s, d) {
      var h = $b.get(t);
      if (h !== void 0) {
        var g = ai, S = t;
        switch (t) {
          case "keypress":
            if (hl(i) === 0)
              return;
          /* falls through */
          case "keydown":
          case "keyup":
            g = Uh;
            break;
          case "focusin":
            S = "focus", g = Ai;
            break;
          case "focusout":
            S = "blur", g = Ai;
            break;
          case "beforeblur":
          case "afterblur":
            g = Ai;
            break;
          case "click":
            if (i.button === 2)
              return;
          /* falls through */
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          // TODO: Disabled elements should not respond to mouse events
          /* falls through */
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = pp;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = ou;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = Fh;
            break;
          case Pb:
          case Hb:
          case jb:
            g = Mh;
            break;
          case Vb:
            g = Ta;
            break;
          case "scroll":
            g = jr;
            break;
          case "wheel":
            g = vg;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = bf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = zh;
            break;
        }
        var w = (s & pa) !== 0;
        {
          var B = !w && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", I = eR(a, h, i.type, w, B);
          if (I.length > 0) {
            var G = new g(h, S, null, i, u);
            e.push({
              event: G,
              listeners: I
            });
          }
        }
      }
    }
    G1(), j(), zs(), Y1(), hg();
    function X1(e, t, a, i, u, s, d) {
      K1(e, t, a, i, u, s);
      var h = (s & zd) === 0;
      h && (F(e, t, a, i, u), mn(e, t, a, i, u), Q1(e, t, a, i, u), jh(e, t, a, i, u));
    }
    var wp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], Tg = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(wp));
    function qb(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Qa(i, t, void 0, e), e.currentTarget = null;
    }
    function Z1(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], d = s.instance, h = s.currentTarget, g = s.listener;
          if (d !== i && e.isPropagationStopped())
            return;
          qb(e, g, h), i = d;
        }
      else
        for (var S = 0; S < t.length; S++) {
          var w = t[S], B = w.instance, I = w.currentTarget, G = w.listener;
          if (B !== i && e.isPropagationStopped())
            return;
          qb(e, G, I), i = B;
        }
    }
    function Wb(e, t) {
      for (var a = (t & pa) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, d = u.listeners;
        Z1(s, d, a);
      }
      ts();
    }
    function J1(e, t, a, i, u) {
      var s = Id(a), d = [];
      X1(d, e, i, a, s, t), Wb(d, t);
    }
    function rn(e, t) {
      Tg.has(e) || y('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = _x(t), u = rR(e);
      i.has(u) || (Qb(t, e, kc, a), i.add(u));
    }
    function Cg(e, t, a) {
      Tg.has(e) && !t && y('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= pa), Qb(a, e, i, t);
    }
    var Wh = "_reactListening" + Math.random().toString(36).slice(2);
    function Rp(e) {
      if (!e[Wh]) {
        e[Wh] = !0, Jt.forEach(function(a) {
          a !== "selectionchange" && (Tg.has(a) || Cg(a, !1, e), Cg(a, !0, e));
        });
        var t = e.nodeType === Ci ? e : e.ownerDocument;
        t !== null && (t[Wh] || (t[Wh] = !0, Cg("selectionchange", !1, t)));
      }
    }
    function Qb(e, t, a, i, u) {
      var s = Kn(e, t, a), d = void 0;
      es && (t === "touchstart" || t === "touchmove" || t === "wheel") && (d = !0), e = e, i ? d !== void 0 ? dp(e, t, s, d) : Hr(e, t, s) : d !== void 0 ? fo(e, t, s, d) : Ms(e, t, s);
    }
    function Gb(e, t) {
      return e === t || e.nodeType === bn && e.parentNode === t;
    }
    function wg(e, t, a, i, u) {
      var s = i;
      if ((t & Ud) === 0 && (t & kc) === 0) {
        var d = u;
        if (i !== null) {
          var h = i;
          e: for (; ; ) {
            if (h === null)
              return;
            var g = h.tag;
            if (g === C || g === D) {
              var S = h.stateNode.containerInfo;
              if (Gb(S, d))
                break;
              if (g === D)
                for (var w = h.return; w !== null; ) {
                  var B = w.tag;
                  if (B === C || B === D) {
                    var I = w.stateNode.containerInfo;
                    if (Gb(I, d))
                      return;
                  }
                  w = w.return;
                }
              for (; S !== null; ) {
                var G = Bs(S);
                if (G === null)
                  return;
                var X = G.tag;
                if (X === z || X === J) {
                  h = s = G;
                  continue e;
                }
                S = S.parentNode;
              }
            }
            h = h.return;
          }
        }
      }
      th(function() {
        return J1(e, t, a, s);
      });
    }
    function xp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function eR(e, t, a, i, u, s) {
      for (var d = t !== null ? t + "Capture" : null, h = i ? d : t, g = [], S = e, w = null; S !== null; ) {
        var B = S, I = B.stateNode, G = B.tag;
        if (G === z && I !== null && (w = I, h !== null)) {
          var X = nl(S, h);
          X != null && g.push(xp(S, X, w));
        }
        if (u)
          break;
        S = S.return;
      }
      return g;
    }
    function Qh(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, d = s.stateNode, h = s.tag;
        if (h === z && d !== null) {
          var g = d, S = nl(u, a);
          S != null && i.unshift(xp(u, S, g));
          var w = nl(u, t);
          w != null && i.push(xp(u, w, g));
        }
        u = u.return;
      }
      return i;
    }
    function Of(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== z);
      return e || null;
    }
    function tR(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = Of(s))
        u++;
      for (var d = 0, h = i; h; h = Of(h))
        d++;
      for (; u - d > 0; )
        a = Of(a), u--;
      for (; d - u > 0; )
        i = Of(i), d--;
      for (var g = u; g--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = Of(a), i = Of(i);
      }
      return null;
    }
    function Kb(e, t, a, i, u) {
      for (var s = t._reactName, d = [], h = a; h !== null && h !== i; ) {
        var g = h, S = g.alternate, w = g.stateNode, B = g.tag;
        if (S !== null && S === i)
          break;
        if (B === z && w !== null) {
          var I = w;
          if (u) {
            var G = nl(h, s);
            G != null && d.unshift(xp(h, G, I));
          } else if (!u) {
            var X = nl(h, s);
            X != null && d.push(xp(h, X, I));
          }
        }
        h = h.return;
      }
      d.length !== 0 && e.push({
        event: t,
        listeners: d
      });
    }
    function nR(e, t, a, i, u) {
      var s = i && u ? tR(i, u) : null;
      i !== null && Kb(e, t, i, s, !1), u !== null && a !== null && Kb(e, a, u, s, !0);
    }
    function rR(e, t) {
      return e + "__bubble";
    }
    var Ca = !1, Dp = "dangerouslySetInnerHTML", Gh = "suppressContentEditableWarning", yo = "suppressHydrationWarning", Xb = "autoFocus", Is = "children", Fs = "style", Kh = "__html", Rg, Xh, kp, Zb, Zh, Jb, e0;
    Rg = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Xh = function(e, t) {
      Ad(e, t), xc(e, t), Zv(e, t, {
        registrationNameDependencies: an,
        possibleRegistrationNames: En
      });
    }, Jb = fe && !document.documentMode, kp = function(e, t, a) {
      if (!Ca) {
        var i = Jh(a), u = Jh(t);
        u !== i && (Ca = !0, y("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, Zb = function(e) {
      if (!Ca) {
        Ca = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), y("Extra attributes from the server: %s", t);
      }
    }, Zh = function(e, t) {
      t === !1 ? y("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : y("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, e0 = function(e, t) {
      var a = e.namespaceURI === bi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var aR = /\r\n?/g, iR = /\u0000|\uFFFD/g;
    function Jh(e) {
      sa(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(aR, `
`).replace(iR, "");
    }
    function em(e, t, a, i) {
      var u = Jh(t), s = Jh(e);
      if (s !== u && (i && (Ca || (Ca = !0, y('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && dt))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function t0(e) {
      return e.nodeType === Ci ? e : e.ownerDocument;
    }
    function lR() {
    }
    function tm(e) {
      e.onclick = lR;
    }
    function uR(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var d = i[s];
          if (s === Fs)
            d && Object.freeze(d), qv(t, d);
          else if (s === Dp) {
            var h = d ? d[Kh] : void 0;
            h != null && Nv(t, h);
          } else if (s === Is)
            if (typeof d == "string") {
              var g = e !== "textarea" || d !== "";
              g && Wu(t, d);
            } else typeof d == "number" && Wu(t, "" + d);
          else s === Gh || s === yo || s === Xb || (an.hasOwnProperty(s) ? d != null && (typeof d != "function" && Zh(s, d), s === "onScroll" && rn("scroll", t)) : d != null && Va(t, s, d, u));
        }
    }
    function oR(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], d = t[u + 1];
        s === Fs ? qv(e, d) : s === Dp ? Nv(e, d) : s === Is ? Wu(e, d) : Va(e, s, d, i);
      }
    }
    function sR(e, t, a, i) {
      var u, s = t0(a), d, h = i;
      if (h === bi && (h = Rd(e)), h === bi) {
        if (u = el(e, t), !u && e !== e.toLowerCase() && y("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var g = s.createElement("div");
          g.innerHTML = "<script><\/script>";
          var S = g.firstChild;
          d = g.removeChild(S);
        } else if (typeof t.is == "string")
          d = s.createElement(e, {
            is: t.is
          });
        else if (d = s.createElement(e), e === "select") {
          var w = d;
          t.multiple ? w.multiple = !0 : t.size && (w.size = t.size);
        }
      } else
        d = s.createElementNS(h, e);
      return h === bi && !u && Object.prototype.toString.call(d) === "[object HTMLUnknownElement]" && !rt.call(Rg, e) && (Rg[e] = !0, y("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), d;
    }
    function cR(e, t) {
      return t0(t).createTextNode(e);
    }
    function fR(e, t, a, i) {
      var u = el(t, a);
      Xh(t, a);
      var s;
      switch (t) {
        case "dialog":
          rn("cancel", e), rn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          rn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var d = 0; d < wp.length; d++)
            rn(wp[d], e);
          s = a;
          break;
        case "source":
          rn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          rn("error", e), rn("load", e), s = a;
          break;
        case "details":
          rn("toggle", e), s = a;
          break;
        case "input":
          Si(e, a), s = hc(e, a), rn("invalid", e);
          break;
        case "option":
          Yu(e, a), s = a;
          break;
        case "select":
          bc(e, a), s = Sd(e, a), rn("invalid", e);
          break;
        case "textarea":
          Td(e, a), s = bd(e, a), rn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (wc(t, s), uR(t, e, i, s, u), t) {
        case "input":
          Ji(e), yd(e, a, !1);
          break;
        case "textarea":
          Ji(e), Av(e);
          break;
        case "option":
          Hy(e, a);
          break;
        case "select":
          Vy(e, a);
          break;
        default:
          typeof s.onClick == "function" && tm(e);
          break;
      }
    }
    function dR(e, t, a, i, u) {
      Xh(t, i);
      var s = null, d, h;
      switch (t) {
        case "input":
          d = hc(e, a), h = hc(e, i), s = [];
          break;
        case "select":
          d = Sd(e, a), h = Sd(e, i), s = [];
          break;
        case "textarea":
          d = bd(e, a), h = bd(e, i), s = [];
          break;
        default:
          d = a, h = i, typeof d.onClick != "function" && typeof h.onClick == "function" && tm(e);
          break;
      }
      wc(t, h);
      var g, S, w = null;
      for (g in d)
        if (!(h.hasOwnProperty(g) || !d.hasOwnProperty(g) || d[g] == null))
          if (g === Fs) {
            var B = d[g];
            for (S in B)
              B.hasOwnProperty(S) && (w || (w = {}), w[S] = "");
          } else g === Dp || g === Is || g === Gh || g === yo || g === Xb || (an.hasOwnProperty(g) ? s || (s = []) : (s = s || []).push(g, null));
      for (g in h) {
        var I = h[g], G = d != null ? d[g] : void 0;
        if (!(!h.hasOwnProperty(g) || I === G || I == null && G == null))
          if (g === Fs)
            if (I && Object.freeze(I), G) {
              for (S in G)
                G.hasOwnProperty(S) && (!I || !I.hasOwnProperty(S)) && (w || (w = {}), w[S] = "");
              for (S in I)
                I.hasOwnProperty(S) && G[S] !== I[S] && (w || (w = {}), w[S] = I[S]);
            } else
              w || (s || (s = []), s.push(g, w)), w = I;
          else if (g === Dp) {
            var X = I ? I[Kh] : void 0, ee = G ? G[Kh] : void 0;
            X != null && ee !== X && (s = s || []).push(g, X);
          } else g === Is ? (typeof I == "string" || typeof I == "number") && (s = s || []).push(g, "" + I) : g === Gh || g === yo || (an.hasOwnProperty(g) ? (I != null && (typeof I != "function" && Zh(g, I), g === "onScroll" && rn("scroll", e)), !s && G !== I && (s = [])) : (s = s || []).push(g, I));
      }
      return w && (Zy(w, h[Fs]), (s = s || []).push(Fs, w)), s;
    }
    function pR(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && mc(e, u);
      var s = el(a, i), d = el(a, u);
      switch (oR(e, t, s, d), a) {
        case "input":
          $u(e, u);
          break;
        case "textarea":
          Ov(e, u);
          break;
        case "select":
          $y(e, u);
          break;
      }
    }
    function vR(e) {
      {
        var t = e.toLowerCase();
        return Ko.hasOwnProperty(t) && Ko[t] || null;
      }
    }
    function hR(e, t, a, i, u, s, d) {
      var h, g;
      switch (h = el(t, a), Xh(t, a), t) {
        case "dialog":
          rn("cancel", e), rn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          rn("load", e);
          break;
        case "video":
        case "audio":
          for (var S = 0; S < wp.length; S++)
            rn(wp[S], e);
          break;
        case "source":
          rn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          rn("error", e), rn("load", e);
          break;
        case "details":
          rn("toggle", e);
          break;
        case "input":
          Si(e, a), rn("invalid", e);
          break;
        case "option":
          Yu(e, a);
          break;
        case "select":
          bc(e, a), rn("invalid", e);
          break;
        case "textarea":
          Td(e, a), rn("invalid", e);
          break;
      }
      wc(t, a);
      {
        g = /* @__PURE__ */ new Set();
        for (var w = e.attributes, B = 0; B < w.length; B++) {
          var I = w[B].name.toLowerCase();
          switch (I) {
            // Controlled attributes are not validated
            // TODO: Only ignore them on controlled tags.
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              g.add(w[B].name);
          }
        }
      }
      var G = null;
      for (var X in a)
        if (a.hasOwnProperty(X)) {
          var ee = a[X];
          if (X === Is)
            typeof ee == "string" ? e.textContent !== ee && (a[yo] !== !0 && em(e.textContent, ee, s, d), G = [Is, ee]) : typeof ee == "number" && e.textContent !== "" + ee && (a[yo] !== !0 && em(e.textContent, ee, s, d), G = [Is, "" + ee]);
          else if (an.hasOwnProperty(X))
            ee != null && (typeof ee != "function" && Zh(X, ee), X === "onScroll" && rn("scroll", e));
          else if (d && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof h == "boolean") {
            var Re = void 0, We = Rt(X);
            if (a[yo] !== !0) {
              if (!(X === Gh || X === yo || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              X === "value" || X === "checked" || X === "selected")) {
                if (X === Dp) {
                  var je = e.innerHTML, Tt = ee ? ee[Kh] : void 0;
                  if (Tt != null) {
                    var yt = e0(e, Tt);
                    yt !== je && kp(X, je, yt);
                  }
                } else if (X === Fs) {
                  if (g.delete(X), Jb) {
                    var $ = Ky(ee);
                    Re = e.getAttribute("style"), $ !== Re && kp(X, Re, $);
                  }
                } else if (h)
                  g.delete(X.toLowerCase()), Re = zo(e, X, ee), ee !== Re && kp(X, Re, ee);
                else if (!it(X, We, h) && !st(X, ee, We, h)) {
                  var te = !1;
                  if (We !== null)
                    g.delete(We.attributeName), Re = zu(e, X, ee, We);
                  else {
                    var Y = i;
                    if (Y === bi && (Y = Rd(t)), Y === bi)
                      g.delete(X.toLowerCase());
                    else {
                      var ge = vR(X);
                      ge !== null && ge !== X && (te = !0, g.delete(ge)), g.delete(X);
                    }
                    Re = zo(e, X, ee);
                  }
                  var Oe = vt;
                  !Oe && ee !== Re && !te && kp(X, Re, ee);
                }
              }
            }
          }
        }
      switch (d && // $FlowFixMe - Should be inferred as not undefined.
      g.size > 0 && a[yo] !== !0 && Zb(g), t) {
        case "input":
          Ji(e), yd(e, a, !0);
          break;
        case "textarea":
          Ji(e), Av(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && tm(e);
          break;
      }
      return G;
    }
    function mR(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function xg(e, t) {
      {
        if (Ca)
          return;
        Ca = !0, y("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function Dg(e, t) {
      {
        if (Ca)
          return;
        Ca = !0, y('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function kg(e, t, a) {
      {
        if (Ca)
          return;
        Ca = !0, y("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function _g(e, t) {
      {
        if (t === "" || Ca)
          return;
        Ca = !0, y('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function yR(e, t, a) {
      switch (t) {
        case "input":
          yc(e, a);
          return;
        case "textarea":
          qy(e, a);
          return;
        case "select":
          Yy(e, a);
          return;
      }
    }
    var _p = function() {
    }, Mp = function() {
    };
    {
      var gR = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], n0 = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], ER = n0.concat(["button"]), SR = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], r0 = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      Mp = function(e, t) {
        var a = ht({}, e || r0), i = {
          tag: t
        };
        return n0.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), ER.indexOf(t) !== -1 && (a.pTagInButtonScope = null), gR.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var bR = function(e, t) {
        switch (t) {
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inselect
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          // Strictly speaking, seeing an <option> doesn't mean we're in a <select>
          // but
          case "option":
            return e === "#text";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intd
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incaption
          // No special behavior since these rules fall back to "in body" mode for
          // all except special table nodes which cause bad parsing behavior anyway.
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intr
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intbody
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incolgroup
          case "colgroup":
            return e === "col" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intable
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inhead
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/semantics.html#the-html-element
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return SR.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, TR = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, a0 = {};
      _p = function(e, t, a) {
        a = a || r0;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && y("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = bR(e, u) ? null : i, d = s ? null : TR(e, a), h = s || d;
        if (h) {
          var g = h.tag, S = !!s + "|" + e + "|" + g;
          if (!a0[S]) {
            a0[S] = !0;
            var w = e, B = "";
            if (e === "#text" ? /\S/.test(t) ? w = "Text nodes" : (w = "Whitespace text nodes", B = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : w = "<" + e + ">", s) {
              var I = "";
              g === "table" && e === "tr" && (I += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), y("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", w, g, B, I);
            } else
              y("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", w, g);
          }
        }
      };
    }
    var nm = "suppressHydrationWarning", rm = "$", am = "/$", Op = "$?", Ap = "$!", CR = "style", Mg = null, Og = null;
    function wR(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case Ci:
        case Dd: {
          t = i === Ci ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : xd(null, "");
          break;
        }
        default: {
          var s = i === bn ? e.parentNode : e, d = s.namespaceURI || null;
          t = s.tagName, a = xd(d, t);
          break;
        }
      }
      {
        var h = t.toLowerCase(), g = Mp(null, h);
        return {
          namespace: a,
          ancestorInfo: g
        };
      }
    }
    function RR(e, t, a) {
      {
        var i = e, u = xd(i.namespace, t), s = Mp(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function fN(e) {
      return e;
    }
    function xR(e) {
      Mg = Dn(), Og = P1();
      var t = null;
      return Ln(!1), t;
    }
    function DR(e) {
      H1(Og), Ln(Mg), Mg = null, Og = null;
    }
    function kR(e, t, a, i, u) {
      var s;
      {
        var d = i;
        if (_p(e, null, d.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var h = "" + t.children, g = Mp(d.ancestorInfo, e);
          _p(null, h, g);
        }
        s = d.namespace;
      }
      var S = sR(e, t, a, s);
      return Up(u, S), Bg(S, t), S;
    }
    function _R(e, t) {
      e.appendChild(t);
    }
    function MR(e, t, a, i, u) {
      switch (fR(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function OR(e, t, a, i, u, s) {
      {
        var d = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var h = "" + i.children, g = Mp(d.ancestorInfo, t);
          _p(null, h, g);
        }
      }
      return dR(e, t, a, i);
    }
    function Ag(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function AR(e, t, a, i) {
      {
        var u = a;
        _p(null, e, u.ancestorInfo);
      }
      var s = cR(e, t);
      return Up(i, s), s;
    }
    function LR() {
      var e = window.event;
      return e === void 0 ? Ea : gf(e.type);
    }
    var Lg = typeof setTimeout == "function" ? setTimeout : void 0, NR = typeof clearTimeout == "function" ? clearTimeout : void 0, Ng = -1, i0 = typeof Promise == "function" ? Promise : void 0, UR = typeof queueMicrotask == "function" ? queueMicrotask : typeof i0 < "u" ? function(e) {
      return i0.resolve(null).then(e).catch(zR);
    } : Lg;
    function zR(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function IR(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function FR(e, t, a, i, u, s) {
      pR(e, t, a, i, u), Bg(e, u);
    }
    function l0(e) {
      Wu(e, "");
    }
    function BR(e, t, a) {
      e.nodeValue = a;
    }
    function PR(e, t) {
      e.appendChild(t);
    }
    function HR(e, t) {
      var a;
      e.nodeType === bn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && tm(a);
    }
    function jR(e, t, a) {
      e.insertBefore(t, a);
    }
    function VR(e, t, a) {
      e.nodeType === bn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function $R(e, t) {
      e.removeChild(t);
    }
    function YR(e, t) {
      e.nodeType === bn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Ug(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === bn) {
          var s = u.data;
          if (s === am)
            if (i === 0) {
              e.removeChild(u), iu(t);
              return;
            } else
              i--;
          else (s === rm || s === Op || s === Ap) && i++;
        }
        a = u;
      } while (a);
      iu(t);
    }
    function qR(e, t) {
      e.nodeType === bn ? Ug(e.parentNode, t) : e.nodeType === Ar && Ug(e, t), iu(e);
    }
    function WR(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function QR(e) {
      e.nodeValue = "";
    }
    function GR(e, t) {
      e = e;
      var a = t[CR], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = Cc("display", i);
    }
    function KR(e, t) {
      e.nodeValue = t;
    }
    function XR(e) {
      e.nodeType === Ar ? e.textContent = "" : e.nodeType === Ci && e.documentElement && e.removeChild(e.documentElement);
    }
    function ZR(e, t, a) {
      return e.nodeType !== Ar || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function JR(e, t) {
      return t === "" || e.nodeType !== Ti ? null : e;
    }
    function ex(e) {
      return e.nodeType !== bn ? null : e;
    }
    function u0(e) {
      return e.data === Op;
    }
    function zg(e) {
      return e.data === Ap;
    }
    function tx(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function nx(e, t) {
      e._reactRetry = t;
    }
    function im(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Ar || t === Ti)
          break;
        if (t === bn) {
          var a = e.data;
          if (a === rm || a === Ap || a === Op)
            break;
          if (a === am)
            return null;
        }
      }
      return e;
    }
    function Lp(e) {
      return im(e.nextSibling);
    }
    function rx(e) {
      return im(e.firstChild);
    }
    function ax(e) {
      return im(e.firstChild);
    }
    function ix(e) {
      return im(e.nextSibling);
    }
    function lx(e, t, a, i, u, s, d) {
      Up(s, e), Bg(e, a);
      var h;
      {
        var g = u;
        h = g.namespace;
      }
      var S = (s.mode & pt) !== qe;
      return hR(e, t, a, h, i, S, d);
    }
    function ux(e, t, a, i) {
      return Up(a, e), a.mode & pt, mR(e, t);
    }
    function ox(e, t) {
      Up(t, e);
    }
    function sx(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === bn) {
          var i = t.data;
          if (i === am) {
            if (a === 0)
              return Lp(t);
            a--;
          } else (i === rm || i === Ap || i === Op) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function o0(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === bn) {
          var i = t.data;
          if (i === rm || i === Ap || i === Op) {
            if (a === 0)
              return t;
            a--;
          } else i === am && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function cx(e) {
      iu(e);
    }
    function fx(e) {
      iu(e);
    }
    function dx(e) {
      return e !== "head" && e !== "body";
    }
    function px(e, t, a, i) {
      var u = !0;
      em(t.nodeValue, a, i, u);
    }
    function vx(e, t, a, i, u, s) {
      if (t[nm] !== !0) {
        var d = !0;
        em(i.nodeValue, u, s, d);
      }
    }
    function hx(e, t) {
      t.nodeType === Ar ? xg(e, t) : t.nodeType === bn || Dg(e, t);
    }
    function mx(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Ar ? xg(a, t) : t.nodeType === bn || Dg(a, t));
      }
    }
    function yx(e, t, a, i, u) {
      (u || t[nm] !== !0) && (i.nodeType === Ar ? xg(a, i) : i.nodeType === bn || Dg(a, i));
    }
    function gx(e, t, a) {
      kg(e, t);
    }
    function Ex(e, t) {
      _g(e, t);
    }
    function Sx(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && kg(i, t);
      }
    }
    function bx(e, t) {
      {
        var a = e.parentNode;
        a !== null && _g(a, t);
      }
    }
    function Tx(e, t, a, i, u, s) {
      (s || t[nm] !== !0) && kg(a, i);
    }
    function Cx(e, t, a, i, u) {
      (u || t[nm] !== !0) && _g(a, i);
    }
    function wx(e) {
      y("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function Rx(e) {
      Rp(e);
    }
    var Af = Math.random().toString(36).slice(2), Lf = "__reactFiber$" + Af, Ig = "__reactProps$" + Af, Np = "__reactContainer$" + Af, Fg = "__reactEvents$" + Af, xx = "__reactListeners$" + Af, Dx = "__reactHandles$" + Af;
    function kx(e) {
      delete e[Lf], delete e[Ig], delete e[Fg], delete e[xx], delete e[Dx];
    }
    function Up(e, t) {
      t[Lf] = e;
    }
    function lm(e, t) {
      t[Np] = e;
    }
    function s0(e) {
      e[Np] = null;
    }
    function zp(e) {
      return !!e[Np];
    }
    function Bs(e) {
      var t = e[Lf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Np] || a[Lf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = o0(e); u !== null; ) {
              var s = u[Lf];
              if (s)
                return s;
              u = o0(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function go(e) {
      var t = e[Lf] || e[Np];
      return t && (t.tag === z || t.tag === J || t.tag === Se || t.tag === C) ? t : null;
    }
    function Nf(e) {
      if (e.tag === z || e.tag === J)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function um(e) {
      return e[Ig] || null;
    }
    function Bg(e, t) {
      e[Ig] = t;
    }
    function _x(e) {
      var t = e[Fg];
      return t === void 0 && (t = e[Fg] = /* @__PURE__ */ new Set()), t;
    }
    var c0 = {}, f0 = m.ReactDebugCurrentFrame;
    function om(e) {
      if (e) {
        var t = e._owner, a = or(e.type, e._source, t ? t.type : null);
        f0.setExtraStackFrame(a);
      } else
        f0.setExtraStackFrame(null);
    }
    function Ni(e, t, a, i, u) {
      {
        var s = Function.call.bind(rt);
        for (var d in e)
          if (s(e, d)) {
            var h = void 0;
            try {
              if (typeof e[d] != "function") {
                var g = Error((i || "React class") + ": " + a + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw g.name = "Invariant Violation", g;
              }
              h = e[d](t, d, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (S) {
              h = S;
            }
            h && !(h instanceof Error) && (om(u), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, d, typeof h), om(null)), h instanceof Error && !(h.message in c0) && (c0[h.message] = !0, om(u), y("Failed %s type: %s", a, h.message), om(null));
          }
      }
    }
    var Pg = [], sm;
    sm = [];
    var fu = -1;
    function Eo(e) {
      return {
        current: e
      };
    }
    function Vr(e, t) {
      if (fu < 0) {
        y("Unexpected pop.");
        return;
      }
      t !== sm[fu] && y("Unexpected Fiber popped."), e.current = Pg[fu], Pg[fu] = null, sm[fu] = null, fu--;
    }
    function $r(e, t, a) {
      fu++, Pg[fu] = e.current, sm[fu] = a, e.current = t;
    }
    var Hg;
    Hg = {};
    var Ba = {};
    Object.freeze(Ba);
    var du = Eo(Ba), Sl = Eo(!1), jg = Ba;
    function Uf(e, t, a) {
      return a && bl(t) ? jg : du.current;
    }
    function d0(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function zf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return Ba;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var d in i)
          s[d] = t[d];
        {
          var h = ct(e) || "Unknown";
          Ni(i, s, "context", h);
        }
        return u && d0(e, t, s), s;
      }
    }
    function cm() {
      return Sl.current;
    }
    function bl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function fm(e) {
      Vr(Sl, e), Vr(du, e);
    }
    function Vg(e) {
      Vr(Sl, e), Vr(du, e);
    }
    function p0(e, t, a) {
      {
        if (du.current !== Ba)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        $r(du, t, e), $r(Sl, a, e);
      }
    }
    function v0(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = ct(e) || "Unknown";
            Hg[s] || (Hg[s] = !0, y("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var d = i.getChildContext();
        for (var h in d)
          if (!(h in u))
            throw new Error((ct(e) || "Unknown") + '.getChildContext(): key "' + h + '" is not defined in childContextTypes.');
        {
          var g = ct(e) || "Unknown";
          Ni(u, d, "child context", g);
        }
        return ht({}, a, d);
      }
    }
    function dm(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || Ba;
        return jg = du.current, $r(du, a, e), $r(Sl, Sl.current, e), !0;
      }
    }
    function h0(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = v0(e, t, jg);
          i.__reactInternalMemoizedMergedChildContext = u, Vr(Sl, e), Vr(du, e), $r(du, u, e), $r(Sl, a, e);
        } else
          Vr(Sl, e), $r(Sl, a, e);
      }
    }
    function Mx(e) {
      {
        if (!Yl(e) || e.tag !== T)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case C:
              return t.stateNode.context;
            case T: {
              var a = t.type;
              if (bl(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var So = 0, pm = 1, pu = null, $g = !1, Yg = !1;
    function m0(e) {
      pu === null ? pu = [e] : pu.push(e);
    }
    function Ox(e) {
      $g = !0, m0(e);
    }
    function y0() {
      $g && bo();
    }
    function bo() {
      if (!Yg && pu !== null) {
        Yg = !0;
        var e = 0, t = ba();
        try {
          var a = !0, i = pu;
          for (xn(hr); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          pu = null, $g = !1;
        } catch (s) {
          throw pu !== null && (pu = pu.slice(e + 1)), Bd(as, bo), s;
        } finally {
          xn(t), Yg = !1;
        }
      }
      return null;
    }
    var If = [], Ff = 0, vm = null, hm = 0, ii = [], li = 0, Ps = null, vu = 1, hu = "";
    function Ax(e) {
      return js(), (e.flags & Ga) !== Ye;
    }
    function Lx(e) {
      return js(), hm;
    }
    function Nx() {
      var e = hu, t = vu, a = t & ~Ux(t);
      return a.toString(32) + e;
    }
    function Hs(e, t) {
      js(), If[Ff++] = hm, If[Ff++] = vm, vm = e, hm = t;
    }
    function g0(e, t, a) {
      js(), ii[li++] = vu, ii[li++] = hu, ii[li++] = Ps, Ps = e;
      var i = vu, u = hu, s = mm(i) - 1, d = i & ~(1 << s), h = a + 1, g = mm(t) + s;
      if (g > 30) {
        var S = s - s % 5, w = (1 << S) - 1, B = (d & w).toString(32), I = d >> S, G = s - S, X = mm(t) + G, ee = h << G, Re = ee | I, We = B + u;
        vu = 1 << X | Re, hu = We;
      } else {
        var je = h << s, Tt = je | d, yt = u;
        vu = 1 << g | Tt, hu = yt;
      }
    }
    function qg(e) {
      js();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Hs(e, a), g0(e, a, i);
      }
    }
    function mm(e) {
      return 32 - wn(e);
    }
    function Ux(e) {
      return 1 << mm(e) - 1;
    }
    function Wg(e) {
      for (; e === vm; )
        vm = If[--Ff], If[Ff] = null, hm = If[--Ff], If[Ff] = null;
      for (; e === Ps; )
        Ps = ii[--li], ii[li] = null, hu = ii[--li], ii[li] = null, vu = ii[--li], ii[li] = null;
    }
    function zx() {
      return js(), Ps !== null ? {
        id: vu,
        overflow: hu
      } : null;
    }
    function Ix(e, t) {
      js(), ii[li++] = vu, ii[li++] = hu, ii[li++] = Ps, vu = t.id, hu = t.overflow, Ps = e;
    }
    function js() {
      Sr() || y("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Er = null, ui = null, Ui = !1, Vs = !1, To = null;
    function Fx() {
      Ui && y("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function E0() {
      Vs = !0;
    }
    function Bx() {
      return Vs;
    }
    function Px(e) {
      var t = e.stateNode.containerInfo;
      return ui = ax(t), Er = e, Ui = !0, To = null, Vs = !1, !0;
    }
    function Hx(e, t, a) {
      return ui = ix(t), Er = e, Ui = !0, To = null, Vs = !1, a !== null && Ix(e, a), !0;
    }
    function S0(e, t) {
      switch (e.tag) {
        case C: {
          hx(e.stateNode.containerInfo, t);
          break;
        }
        case z: {
          var a = (e.mode & pt) !== qe;
          yx(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case Se: {
          var i = e.memoizedState;
          i.dehydrated !== null && mx(i.dehydrated, t);
          break;
        }
      }
    }
    function b0(e, t) {
      S0(e, t);
      var a = Y_();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= va) : i.push(a);
    }
    function Qg(e, t) {
      {
        if (Vs)
          return;
        switch (e.tag) {
          case C: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case z:
                var i = t.type;
                t.pendingProps, gx(a, i);
                break;
              case J:
                var u = t.pendingProps;
                Ex(a, u);
                break;
            }
            break;
          }
          case z: {
            var s = e.type, d = e.memoizedProps, h = e.stateNode;
            switch (t.tag) {
              case z: {
                var g = t.type, S = t.pendingProps, w = (e.mode & pt) !== qe;
                Tx(
                  s,
                  d,
                  h,
                  g,
                  S,
                  // TODO: Delete this argument when we remove the legacy root API.
                  w
                );
                break;
              }
              case J: {
                var B = t.pendingProps, I = (e.mode & pt) !== qe;
                Cx(
                  s,
                  d,
                  h,
                  B,
                  // TODO: Delete this argument when we remove the legacy root API.
                  I
                );
                break;
              }
            }
            break;
          }
          case Se: {
            var G = e.memoizedState, X = G.dehydrated;
            if (X !== null) switch (t.tag) {
              case z:
                var ee = t.type;
                t.pendingProps, Sx(X, ee);
                break;
              case J:
                var Re = t.pendingProps;
                bx(X, Re);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function T0(e, t) {
      t.flags = t.flags & -4097 | fn, Qg(e, t);
    }
    function C0(e, t) {
      switch (e.tag) {
        case z: {
          var a = e.type;
          e.pendingProps;
          var i = ZR(t, a);
          return i !== null ? (e.stateNode = i, Er = e, ui = rx(i), !0) : !1;
        }
        case J: {
          var u = e.pendingProps, s = JR(t, u);
          return s !== null ? (e.stateNode = s, Er = e, ui = null, !0) : !1;
        }
        case Se: {
          var d = ex(t);
          if (d !== null) {
            var h = {
              dehydrated: d,
              treeContext: zx(),
              retryLane: Jr
            };
            e.memoizedState = h;
            var g = q_(d);
            return g.return = e, e.child = g, Er = e, ui = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Gg(e) {
      return (e.mode & pt) !== qe && (e.flags & $e) === Ye;
    }
    function Kg(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function Xg(e) {
      if (Ui) {
        var t = ui;
        if (!t) {
          Gg(e) && (Qg(Er, e), Kg()), T0(Er, e), Ui = !1, Er = e;
          return;
        }
        var a = t;
        if (!C0(e, t)) {
          Gg(e) && (Qg(Er, e), Kg()), t = Lp(a);
          var i = Er;
          if (!t || !C0(e, t)) {
            T0(Er, e), Ui = !1, Er = e;
            return;
          }
          b0(i, a);
        }
      }
    }
    function jx(e, t, a) {
      var i = e.stateNode, u = !Vs, s = lx(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function Vx(e) {
      var t = e.stateNode, a = e.memoizedProps, i = ux(t, a, e);
      if (i) {
        var u = Er;
        if (u !== null)
          switch (u.tag) {
            case C: {
              var s = u.stateNode.containerInfo, d = (u.mode & pt) !== qe;
              px(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                d
              );
              break;
            }
            case z: {
              var h = u.type, g = u.memoizedProps, S = u.stateNode, w = (u.mode & pt) !== qe;
              vx(
                h,
                g,
                S,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                w
              );
              break;
            }
          }
      }
      return i;
    }
    function $x(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      ox(a, e);
    }
    function Yx(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return sx(a);
    }
    function w0(e) {
      for (var t = e.return; t !== null && t.tag !== z && t.tag !== C && t.tag !== Se; )
        t = t.return;
      Er = t;
    }
    function ym(e) {
      if (e !== Er)
        return !1;
      if (!Ui)
        return w0(e), Ui = !0, !1;
      if (e.tag !== C && (e.tag !== z || dx(e.type) && !Ag(e.type, e.memoizedProps))) {
        var t = ui;
        if (t)
          if (Gg(e))
            R0(e), Kg();
          else
            for (; t; )
              b0(e, t), t = Lp(t);
      }
      return w0(e), e.tag === Se ? ui = Yx(e) : ui = Er ? Lp(e.stateNode) : null, !0;
    }
    function qx() {
      return Ui && ui !== null;
    }
    function R0(e) {
      for (var t = ui; t; )
        S0(e, t), t = Lp(t);
    }
    function Bf() {
      Er = null, ui = null, Ui = !1, Vs = !1;
    }
    function x0() {
      To !== null && (EC(To), To = null);
    }
    function Sr() {
      return Ui;
    }
    function Zg(e) {
      To === null ? To = [e] : To.push(e);
    }
    var Wx = m.ReactCurrentBatchConfig, Qx = null;
    function Gx() {
      return Wx.transition;
    }
    var zi = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var Kx = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & Bt && (t = a), a = a.return;
        return t;
      }, $s = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, Ip = [], Fp = [], Bp = [], Pp = [], Hp = [], jp = [], Ys = /* @__PURE__ */ new Set();
      zi.recordUnsafeLifecycleWarnings = function(e, t) {
        Ys.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && Ip.push(e), e.mode & Bt && typeof t.UNSAFE_componentWillMount == "function" && Fp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Bp.push(e), e.mode & Bt && typeof t.UNSAFE_componentWillReceiveProps == "function" && Pp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Hp.push(e), e.mode & Bt && typeof t.UNSAFE_componentWillUpdate == "function" && jp.push(e));
      }, zi.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Ip.length > 0 && (Ip.forEach(function(I) {
          e.add(ct(I) || "Component"), Ys.add(I.type);
        }), Ip = []);
        var t = /* @__PURE__ */ new Set();
        Fp.length > 0 && (Fp.forEach(function(I) {
          t.add(ct(I) || "Component"), Ys.add(I.type);
        }), Fp = []);
        var a = /* @__PURE__ */ new Set();
        Bp.length > 0 && (Bp.forEach(function(I) {
          a.add(ct(I) || "Component"), Ys.add(I.type);
        }), Bp = []);
        var i = /* @__PURE__ */ new Set();
        Pp.length > 0 && (Pp.forEach(function(I) {
          i.add(ct(I) || "Component"), Ys.add(I.type);
        }), Pp = []);
        var u = /* @__PURE__ */ new Set();
        Hp.length > 0 && (Hp.forEach(function(I) {
          u.add(ct(I) || "Component"), Ys.add(I.type);
        }), Hp = []);
        var s = /* @__PURE__ */ new Set();
        if (jp.length > 0 && (jp.forEach(function(I) {
          s.add(ct(I) || "Component"), Ys.add(I.type);
        }), jp = []), t.size > 0) {
          var d = $s(t);
          y(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, d);
        }
        if (i.size > 0) {
          var h = $s(i);
          y(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, h);
        }
        if (s.size > 0) {
          var g = $s(s);
          y(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, g);
        }
        if (e.size > 0) {
          var S = $s(e);
          A(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, S);
        }
        if (a.size > 0) {
          var w = $s(a);
          A(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, w);
        }
        if (u.size > 0) {
          var B = $s(u);
          A(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, B);
        }
      };
      var gm = /* @__PURE__ */ new Map(), D0 = /* @__PURE__ */ new Set();
      zi.recordLegacyContextWarning = function(e, t) {
        var a = Kx(e);
        if (a === null) {
          y("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!D0.has(e.type)) {
          var i = gm.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], gm.set(a, i)), i.push(e));
        }
      }, zi.flushLegacyContextWarning = function() {
        gm.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(ct(s) || "Component"), D0.add(s.type);
            });
            var u = $s(i);
            try {
              Qt(a), y(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              un();
            }
          }
        });
      }, zi.discardPendingWarnings = function() {
        Ip = [], Fp = [], Bp = [], Pp = [], Hp = [], jp = [], gm = /* @__PURE__ */ new Map();
      };
    }
    var Jg, eE, tE, nE, rE, k0 = function(e, t) {
    };
    Jg = !1, eE = !1, tE = {}, nE = {}, rE = {}, k0 = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = ct(t) || "Component";
        nE[a] || (nE[a] = !0, y('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function Xx(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function Vp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & Bt || mt) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== T) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !Xx(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var u = ct(e) || "Component";
          tE[u] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, i), tE[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, d;
          if (s) {
            var h = s;
            if (h.tag !== T)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            d = h.stateNode;
          }
          if (!d)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var g = d;
          dr(i, "ref");
          var S = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === S)
            return t.ref;
          var w = function(B) {
            var I = g.refs;
            B === null ? delete I[S] : I[S] = B;
          };
          return w._stringRef = S, w;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function Em(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Sm(e) {
      {
        var t = ct(e) || "Component";
        if (rE[t])
          return;
        rE[t] = !0, y("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function _0(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function M0(e) {
      function t($, te) {
        if (e) {
          var Y = $.deletions;
          Y === null ? ($.deletions = [te], $.flags |= va) : Y.push(te);
        }
      }
      function a($, te) {
        if (!e)
          return null;
        for (var Y = te; Y !== null; )
          t($, Y), Y = Y.sibling;
        return null;
      }
      function i($, te) {
        for (var Y = /* @__PURE__ */ new Map(), ge = te; ge !== null; )
          ge.key !== null ? Y.set(ge.key, ge) : Y.set(ge.index, ge), ge = ge.sibling;
        return Y;
      }
      function u($, te) {
        var Y = ec($, te);
        return Y.index = 0, Y.sibling = null, Y;
      }
      function s($, te, Y) {
        if ($.index = Y, !e)
          return $.flags |= Ga, te;
        var ge = $.alternate;
        if (ge !== null) {
          var Oe = ge.index;
          return Oe < te ? ($.flags |= fn, te) : Oe;
        } else
          return $.flags |= fn, te;
      }
      function d($) {
        return e && $.alternate === null && ($.flags |= fn), $;
      }
      function h($, te, Y, ge) {
        if (te === null || te.tag !== J) {
          var Oe = ZS(Y, $.mode, ge);
          return Oe.return = $, Oe;
        } else {
          var De = u(te, Y);
          return De.return = $, De;
        }
      }
      function g($, te, Y, ge) {
        var Oe = Y.type;
        if (Oe === Qi)
          return w($, te, Y.props.children, ge, Y.key);
        if (te !== null && (te.elementType === Oe || // Keep this check inline so it only runs on the false path:
        UC(te, Y) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof Oe == "object" && Oe !== null && Oe.$$typeof === Fn && _0(Oe) === te.type)) {
          var De = u(te, Y.props);
          return De.ref = Vp($, te, Y), De.return = $, De._debugSource = Y._source, De._debugOwner = Y._owner, De;
        }
        var et = XS(Y, $.mode, ge);
        return et.ref = Vp($, te, Y), et.return = $, et;
      }
      function S($, te, Y, ge) {
        if (te === null || te.tag !== D || te.stateNode.containerInfo !== Y.containerInfo || te.stateNode.implementation !== Y.implementation) {
          var Oe = JS(Y, $.mode, ge);
          return Oe.return = $, Oe;
        } else {
          var De = u(te, Y.children || []);
          return De.return = $, De;
        }
      }
      function w($, te, Y, ge, Oe) {
        if (te === null || te.tag !== W) {
          var De = Lo(Y, $.mode, ge, Oe);
          return De.return = $, De;
        } else {
          var et = u(te, Y);
          return et.return = $, et;
        }
      }
      function B($, te, Y) {
        if (typeof te == "string" && te !== "" || typeof te == "number") {
          var ge = ZS("" + te, $.mode, Y);
          return ge.return = $, ge;
        }
        if (typeof te == "object" && te !== null) {
          switch (te.$$typeof) {
            case $a: {
              var Oe = XS(te, $.mode, Y);
              return Oe.ref = Vp($, null, te), Oe.return = $, Oe;
            }
            case kr: {
              var De = JS(te, $.mode, Y);
              return De.return = $, De;
            }
            case Fn: {
              var et = te._payload, lt = te._init;
              return B($, lt(et), Y);
            }
          }
          if (qn(te) || It(te)) {
            var Ht = Lo(te, $.mode, Y, null);
            return Ht.return = $, Ht;
          }
          Em($, te);
        }
        return typeof te == "function" && Sm($), null;
      }
      function I($, te, Y, ge) {
        var Oe = te !== null ? te.key : null;
        if (typeof Y == "string" && Y !== "" || typeof Y == "number")
          return Oe !== null ? null : h($, te, "" + Y, ge);
        if (typeof Y == "object" && Y !== null) {
          switch (Y.$$typeof) {
            case $a:
              return Y.key === Oe ? g($, te, Y, ge) : null;
            case kr:
              return Y.key === Oe ? S($, te, Y, ge) : null;
            case Fn: {
              var De = Y._payload, et = Y._init;
              return I($, te, et(De), ge);
            }
          }
          if (qn(Y) || It(Y))
            return Oe !== null ? null : w($, te, Y, ge, null);
          Em($, Y);
        }
        return typeof Y == "function" && Sm($), null;
      }
      function G($, te, Y, ge, Oe) {
        if (typeof ge == "string" && ge !== "" || typeof ge == "number") {
          var De = $.get(Y) || null;
          return h(te, De, "" + ge, Oe);
        }
        if (typeof ge == "object" && ge !== null) {
          switch (ge.$$typeof) {
            case $a: {
              var et = $.get(ge.key === null ? Y : ge.key) || null;
              return g(te, et, ge, Oe);
            }
            case kr: {
              var lt = $.get(ge.key === null ? Y : ge.key) || null;
              return S(te, lt, ge, Oe);
            }
            case Fn:
              var Ht = ge._payload, Lt = ge._init;
              return G($, te, Y, Lt(Ht), Oe);
          }
          if (qn(ge) || It(ge)) {
            var Nn = $.get(Y) || null;
            return w(te, Nn, ge, Oe, null);
          }
          Em(te, ge);
        }
        return typeof ge == "function" && Sm(te), null;
      }
      function X($, te, Y) {
        {
          if (typeof $ != "object" || $ === null)
            return te;
          switch ($.$$typeof) {
            case $a:
            case kr:
              k0($, Y);
              var ge = $.key;
              if (typeof ge != "string")
                break;
              if (te === null) {
                te = /* @__PURE__ */ new Set(), te.add(ge);
                break;
              }
              if (!te.has(ge)) {
                te.add(ge);
                break;
              }
              y("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", ge);
              break;
            case Fn:
              var Oe = $._payload, De = $._init;
              X(De(Oe), te, Y);
              break;
          }
        }
        return te;
      }
      function ee($, te, Y, ge) {
        for (var Oe = null, De = 0; De < Y.length; De++) {
          var et = Y[De];
          Oe = X(et, Oe, $);
        }
        for (var lt = null, Ht = null, Lt = te, Nn = 0, Nt = 0, _n = null; Lt !== null && Nt < Y.length; Nt++) {
          Lt.index > Nt ? (_n = Lt, Lt = null) : _n = Lt.sibling;
          var qr = I($, Lt, Y[Nt], ge);
          if (qr === null) {
            Lt === null && (Lt = _n);
            break;
          }
          e && Lt && qr.alternate === null && t($, Lt), Nn = s(qr, Nn, Nt), Ht === null ? lt = qr : Ht.sibling = qr, Ht = qr, Lt = _n;
        }
        if (Nt === Y.length) {
          if (a($, Lt), Sr()) {
            var Dr = Nt;
            Hs($, Dr);
          }
          return lt;
        }
        if (Lt === null) {
          for (; Nt < Y.length; Nt++) {
            var Ha = B($, Y[Nt], ge);
            Ha !== null && (Nn = s(Ha, Nn, Nt), Ht === null ? lt = Ha : Ht.sibling = Ha, Ht = Ha);
          }
          if (Sr()) {
            var ia = Nt;
            Hs($, ia);
          }
          return lt;
        }
        for (var la = i($, Lt); Nt < Y.length; Nt++) {
          var Wr = G(la, $, Nt, Y[Nt], ge);
          Wr !== null && (e && Wr.alternate !== null && la.delete(Wr.key === null ? Nt : Wr.key), Nn = s(Wr, Nn, Nt), Ht === null ? lt = Wr : Ht.sibling = Wr, Ht = Wr);
        }
        if (e && la.forEach(function(ad) {
          return t($, ad);
        }), Sr()) {
          var Tu = Nt;
          Hs($, Tu);
        }
        return lt;
      }
      function Re($, te, Y, ge) {
        var Oe = It(Y);
        if (typeof Oe != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          Y[Symbol.toStringTag] === "Generator" && (eE || y("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), eE = !0), Y.entries === Oe && (Jg || y("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Jg = !0);
          var De = Oe.call(Y);
          if (De)
            for (var et = null, lt = De.next(); !lt.done; lt = De.next()) {
              var Ht = lt.value;
              et = X(Ht, et, $);
            }
        }
        var Lt = Oe.call(Y);
        if (Lt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Nn = null, Nt = null, _n = te, qr = 0, Dr = 0, Ha = null, ia = Lt.next(); _n !== null && !ia.done; Dr++, ia = Lt.next()) {
          _n.index > Dr ? (Ha = _n, _n = null) : Ha = _n.sibling;
          var la = I($, _n, ia.value, ge);
          if (la === null) {
            _n === null && (_n = Ha);
            break;
          }
          e && _n && la.alternate === null && t($, _n), qr = s(la, qr, Dr), Nt === null ? Nn = la : Nt.sibling = la, Nt = la, _n = Ha;
        }
        if (ia.done) {
          if (a($, _n), Sr()) {
            var Wr = Dr;
            Hs($, Wr);
          }
          return Nn;
        }
        if (_n === null) {
          for (; !ia.done; Dr++, ia = Lt.next()) {
            var Tu = B($, ia.value, ge);
            Tu !== null && (qr = s(Tu, qr, Dr), Nt === null ? Nn = Tu : Nt.sibling = Tu, Nt = Tu);
          }
          if (Sr()) {
            var ad = Dr;
            Hs($, ad);
          }
          return Nn;
        }
        for (var bv = i($, _n); !ia.done; Dr++, ia = Lt.next()) {
          var _l = G(bv, $, Dr, ia.value, ge);
          _l !== null && (e && _l.alternate !== null && bv.delete(_l.key === null ? Dr : _l.key), qr = s(_l, qr, Dr), Nt === null ? Nn = _l : Nt.sibling = _l, Nt = _l);
        }
        if (e && bv.forEach(function(CM) {
          return t($, CM);
        }), Sr()) {
          var TM = Dr;
          Hs($, TM);
        }
        return Nn;
      }
      function We($, te, Y, ge) {
        if (te !== null && te.tag === J) {
          a($, te.sibling);
          var Oe = u(te, Y);
          return Oe.return = $, Oe;
        }
        a($, te);
        var De = ZS(Y, $.mode, ge);
        return De.return = $, De;
      }
      function je($, te, Y, ge) {
        for (var Oe = Y.key, De = te; De !== null; ) {
          if (De.key === Oe) {
            var et = Y.type;
            if (et === Qi) {
              if (De.tag === W) {
                a($, De.sibling);
                var lt = u(De, Y.props.children);
                return lt.return = $, lt._debugSource = Y._source, lt._debugOwner = Y._owner, lt;
              }
            } else if (De.elementType === et || // Keep this check inline so it only runs on the false path:
            UC(De, Y) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof et == "object" && et !== null && et.$$typeof === Fn && _0(et) === De.type) {
              a($, De.sibling);
              var Ht = u(De, Y.props);
              return Ht.ref = Vp($, De, Y), Ht.return = $, Ht._debugSource = Y._source, Ht._debugOwner = Y._owner, Ht;
            }
            a($, De);
            break;
          } else
            t($, De);
          De = De.sibling;
        }
        if (Y.type === Qi) {
          var Lt = Lo(Y.props.children, $.mode, ge, Y.key);
          return Lt.return = $, Lt;
        } else {
          var Nn = XS(Y, $.mode, ge);
          return Nn.ref = Vp($, te, Y), Nn.return = $, Nn;
        }
      }
      function Tt($, te, Y, ge) {
        for (var Oe = Y.key, De = te; De !== null; ) {
          if (De.key === Oe)
            if (De.tag === D && De.stateNode.containerInfo === Y.containerInfo && De.stateNode.implementation === Y.implementation) {
              a($, De.sibling);
              var et = u(De, Y.children || []);
              return et.return = $, et;
            } else {
              a($, De);
              break;
            }
          else
            t($, De);
          De = De.sibling;
        }
        var lt = JS(Y, $.mode, ge);
        return lt.return = $, lt;
      }
      function yt($, te, Y, ge) {
        var Oe = typeof Y == "object" && Y !== null && Y.type === Qi && Y.key === null;
        if (Oe && (Y = Y.props.children), typeof Y == "object" && Y !== null) {
          switch (Y.$$typeof) {
            case $a:
              return d(je($, te, Y, ge));
            case kr:
              return d(Tt($, te, Y, ge));
            case Fn:
              var De = Y._payload, et = Y._init;
              return yt($, te, et(De), ge);
          }
          if (qn(Y))
            return ee($, te, Y, ge);
          if (It(Y))
            return Re($, te, Y, ge);
          Em($, Y);
        }
        return typeof Y == "string" && Y !== "" || typeof Y == "number" ? d(We($, te, "" + Y, ge)) : (typeof Y == "function" && Sm($), a($, te));
      }
      return yt;
    }
    var Pf = M0(!0), O0 = M0(!1);
    function Zx(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = ec(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = ec(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function Jx(e, t) {
      for (var a = e.child; a !== null; )
        P_(a, t), a = a.sibling;
    }
    var aE = Eo(null), iE;
    iE = {};
    var bm = null, Hf = null, lE = null, Tm = !1;
    function Cm() {
      bm = null, Hf = null, lE = null, Tm = !1;
    }
    function A0() {
      Tm = !0;
    }
    function L0() {
      Tm = !1;
    }
    function N0(e, t, a) {
      $r(aE, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== iE && y("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = iE;
    }
    function uE(e, t) {
      var a = aE.current;
      Vr(aE, t), e._currentValue = a;
    }
    function oE(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (au(i.childLanes, t) ? u !== null && !au(u.childLanes, t) && (u.childLanes = ft(u.childLanes, t)) : (i.childLanes = ft(i.childLanes, t), u !== null && (u.childLanes = ft(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && y("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function eD(e, t, a) {
      tD(e, t, a);
    }
    function tD(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var d = s.firstContext; d !== null; ) {
            if (d.context === t) {
              if (i.tag === T) {
                var h = gs(a), g = mu(jt, h);
                g.tag = Rm;
                var S = i.updateQueue;
                if (S !== null) {
                  var w = S.shared, B = w.pending;
                  B === null ? g.next = g : (g.next = B.next, B.next = g), w.pending = g;
                }
              }
              i.lanes = ft(i.lanes, a);
              var I = i.alternate;
              I !== null && (I.lanes = ft(I.lanes, a)), oE(i.return, a, e), s.lanes = ft(s.lanes, a);
              break;
            }
            d = d.next;
          }
        } else if (i.tag === ue)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === Ue) {
          var G = i.return;
          if (G === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          G.lanes = ft(G.lanes, a);
          var X = G.alternate;
          X !== null && (X.lanes = ft(X.lanes, a)), oE(G, a, e), u = i.sibling;
        } else
          u = i.child;
        if (u !== null)
          u.return = i;
        else
          for (u = i; u !== null; ) {
            if (u === e) {
              u = null;
              break;
            }
            var ee = u.sibling;
            if (ee !== null) {
              ee.return = u.return, u = ee;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function jf(e, t) {
      bm = e, Hf = null, lE = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (Br(a.lanes, t) && av(), a.firstContext = null);
      }
    }
    function jn(e) {
      Tm && y("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (lE !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Hf === null) {
          if (bm === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Hf = a, bm.dependencies = {
            lanes: de,
            firstContext: a
          };
        } else
          Hf = Hf.next = a;
      }
      return t;
    }
    var qs = null;
    function sE(e) {
      qs === null ? qs = [e] : qs.push(e);
    }
    function nD() {
      if (qs !== null) {
        for (var e = 0; e < qs.length; e++) {
          var t = qs[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, u = t.pending;
            if (u !== null) {
              var s = u.next;
              u.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        qs = null;
      }
    }
    function U0(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, sE(t)) : (a.next = u.next, u.next = a), t.interleaved = a, wm(e, i);
    }
    function rD(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, sE(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function aD(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, sE(t)) : (a.next = u.next, u.next = a), t.interleaved = a, wm(e, i);
    }
    function wa(e, t) {
      return wm(e, t);
    }
    var iD = wm;
    function wm(e, t) {
      e.lanes = ft(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = ft(a.lanes, t)), a === null && (e.flags & (fn | ha)) !== Ye && OC(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = ft(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = ft(a.childLanes, t) : (u.flags & (fn | ha)) !== Ye && OC(e), i = u, u = u.return;
      if (i.tag === C) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var z0 = 0, I0 = 1, Rm = 2, cE = 3, xm = !1, fE, Dm;
    fE = !1, Dm = null;
    function dE(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: de
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function F0(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var u = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = u;
      }
    }
    function mu(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: z0,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Co(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (Dm === u && !fE && (y("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), fE = !0), r_()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, iD(e, a);
      } else
        return aD(e, u, t, a);
    }
    function km(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (np(a)) {
          var s = u.lanes;
          s = ap(s, e.pendingLanes);
          var d = ft(s, a);
          u.lanes = d, vf(e, d);
        }
      }
    }
    function pE(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var u = i.updateQueue;
        if (a === u) {
          var s = null, d = null, h = a.firstBaseUpdate;
          if (h !== null) {
            var g = h;
            do {
              var S = {
                eventTime: g.eventTime,
                lane: g.lane,
                tag: g.tag,
                payload: g.payload,
                callback: g.callback,
                next: null
              };
              d === null ? s = d = S : (d.next = S, d = S), g = g.next;
            } while (g !== null);
            d === null ? s = d = t : (d.next = t, d = t);
          } else
            s = d = t;
          a = {
            baseState: u.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: d,
            shared: u.shared,
            effects: u.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var w = a.lastBaseUpdate;
      w === null ? a.firstBaseUpdate = t : w.next = t, a.lastBaseUpdate = t;
    }
    function lD(e, t, a, i, u, s) {
      switch (a.tag) {
        case I0: {
          var d = a.payload;
          if (typeof d == "function") {
            A0();
            var h = d.call(s, i, u);
            {
              if (e.mode & Bt) {
                tn(!0);
                try {
                  d.call(s, i, u);
                } finally {
                  tn(!1);
                }
              }
              L0();
            }
            return h;
          }
          return d;
        }
        case cE:
          e.flags = e.flags & -65537 | $e;
        // Intentional fallthrough
        case z0: {
          var g = a.payload, S;
          if (typeof g == "function") {
            A0(), S = g.call(s, i, u);
            {
              if (e.mode & Bt) {
                tn(!0);
                try {
                  g.call(s, i, u);
                } finally {
                  tn(!1);
                }
              }
              L0();
            }
          } else
            S = g;
          return S == null ? i : ht({}, i, S);
        }
        case Rm:
          return xm = !0, i;
      }
      return i;
    }
    function _m(e, t, a, i) {
      var u = e.updateQueue;
      xm = !1, Dm = u.shared;
      var s = u.firstBaseUpdate, d = u.lastBaseUpdate, h = u.shared.pending;
      if (h !== null) {
        u.shared.pending = null;
        var g = h, S = g.next;
        g.next = null, d === null ? s = S : d.next = S, d = g;
        var w = e.alternate;
        if (w !== null) {
          var B = w.updateQueue, I = B.lastBaseUpdate;
          I !== d && (I === null ? B.firstBaseUpdate = S : I.next = S, B.lastBaseUpdate = g);
        }
      }
      if (s !== null) {
        var G = u.baseState, X = de, ee = null, Re = null, We = null, je = s;
        do {
          var Tt = je.lane, yt = je.eventTime;
          if (au(i, Tt)) {
            if (We !== null) {
              var te = {
                eventTime: yt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: kt,
                tag: je.tag,
                payload: je.payload,
                callback: je.callback,
                next: null
              };
              We = We.next = te;
            }
            G = lD(e, u, je, G, t, a);
            var Y = je.callback;
            if (Y !== null && // If the update was already committed, we should not queue its
            // callback again.
            je.lane !== kt) {
              e.flags |= $t;
              var ge = u.effects;
              ge === null ? u.effects = [je] : ge.push(je);
            }
          } else {
            var $ = {
              eventTime: yt,
              lane: Tt,
              tag: je.tag,
              payload: je.payload,
              callback: je.callback,
              next: null
            };
            We === null ? (Re = We = $, ee = G) : We = We.next = $, X = ft(X, Tt);
          }
          if (je = je.next, je === null) {
            if (h = u.shared.pending, h === null)
              break;
            var Oe = h, De = Oe.next;
            Oe.next = null, je = De, u.lastBaseUpdate = Oe, u.shared.pending = null;
          }
        } while (!0);
        We === null && (ee = G), u.baseState = ee, u.firstBaseUpdate = Re, u.lastBaseUpdate = We;
        var et = u.shared.interleaved;
        if (et !== null) {
          var lt = et;
          do
            X = ft(X, lt.lane), lt = lt.next;
          while (lt !== et);
        } else s === null && (u.shared.lanes = de);
        mv(X), e.lanes = X, e.memoizedState = G;
      }
      Dm = null;
    }
    function uD(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function B0() {
      xm = !1;
    }
    function Mm() {
      return xm;
    }
    function P0(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], d = s.callback;
          d !== null && (s.callback = null, uD(d, a));
        }
    }
    var $p = {}, wo = Eo($p), Yp = Eo($p), Om = Eo($p);
    function Am(e) {
      if (e === $p)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function H0() {
      var e = Am(Om.current);
      return e;
    }
    function vE(e, t) {
      $r(Om, t, e), $r(Yp, e, e), $r(wo, $p, e);
      var a = wR(t);
      Vr(wo, e), $r(wo, a, e);
    }
    function Vf(e) {
      Vr(wo, e), Vr(Yp, e), Vr(Om, e);
    }
    function hE() {
      var e = Am(wo.current);
      return e;
    }
    function j0(e) {
      Am(Om.current);
      var t = Am(wo.current), a = RR(t, e.type);
      t !== a && ($r(Yp, e, e), $r(wo, a, e));
    }
    function mE(e) {
      Yp.current === e && (Vr(wo, e), Vr(Yp, e));
    }
    var oD = 0, V0 = 1, $0 = 1, qp = 2, Ii = Eo(oD);
    function yE(e, t) {
      return (e & t) !== 0;
    }
    function $f(e) {
      return e & V0;
    }
    function gE(e, t) {
      return e & V0 | t;
    }
    function sD(e, t) {
      return e | t;
    }
    function Ro(e, t) {
      $r(Ii, t, e);
    }
    function Yf(e) {
      Vr(Ii, e);
    }
    function cD(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Lm(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === Se) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || u0(i) || zg(i))
              return t;
          }
        } else if (t.tag === He && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & $e) !== Ye;
          if (u)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Ra = (
      /*   */
      0
    ), Xn = (
      /* */
      1
    ), Tl = (
      /*  */
      2
    ), Zn = (
      /*    */
      4
    ), br = (
      /*   */
      8
    ), EE = [];
    function SE() {
      for (var e = 0; e < EE.length; e++) {
        var t = EE[e];
        t._workInProgressVersionPrimary = null;
      }
      EE.length = 0;
    }
    function fD(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var Me = m.ReactCurrentDispatcher, Wp = m.ReactCurrentBatchConfig, bE, qf;
    bE = /* @__PURE__ */ new Set();
    var Ws = de, Pt = null, Jn = null, er = null, Nm = !1, Qp = !1, Gp = 0, dD = 0, pD = 25, ie = null, oi = null, xo = -1, TE = !1;
    function zt() {
      {
        var e = ie;
        oi === null ? oi = [e] : oi.push(e);
      }
    }
    function be() {
      {
        var e = ie;
        oi !== null && (xo++, oi[xo] !== e && vD(e));
      }
    }
    function Wf(e) {
      e != null && !qn(e) && y("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", ie, typeof e);
    }
    function vD(e) {
      {
        var t = ct(Pt);
        if (!bE.has(t) && (bE.add(t), oi !== null)) {
          for (var a = "", i = 30, u = 0; u <= xo; u++) {
            for (var s = oi[u], d = u === xo ? e : s, h = u + 1 + ". " + s; h.length < i; )
              h += " ";
            h += d + `
`, a += h;
          }
          y(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function Yr() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function CE(e, t) {
      if (TE)
        return !1;
      if (t === null)
        return y("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", ie), !1;
      e.length !== t.length && y(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, ie, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!he(e[a], t[a]))
          return !1;
      return !0;
    }
    function Qf(e, t, a, i, u, s) {
      Ws = s, Pt = t, oi = e !== null ? e._debugHookTypes : null, xo = -1, TE = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = de, e !== null && e.memoizedState !== null ? Me.current = dT : oi !== null ? Me.current = fT : Me.current = cT;
      var d = a(i, u);
      if (Qp) {
        var h = 0;
        do {
          if (Qp = !1, Gp = 0, h >= pD)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          h += 1, TE = !1, Jn = null, er = null, t.updateQueue = null, xo = -1, Me.current = pT, d = a(i, u);
        } while (Qp);
      }
      Me.current = Wm, t._debugHookTypes = oi;
      var g = Jn !== null && Jn.next !== null;
      if (Ws = de, Pt = null, Jn = null, er = null, ie = null, oi = null, xo = -1, e !== null && (e.flags & Cn) !== (t.flags & Cn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & pt) !== qe && y("Internal React error: Expected static flag was missing. Please notify the React team."), Nm = !1, g)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return d;
    }
    function Gf() {
      var e = Gp !== 0;
      return Gp = 0, e;
    }
    function Y0(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Ot) !== qe ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = Es(e.lanes, a);
    }
    function q0() {
      if (Me.current = Wm, Nm) {
        for (var e = Pt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Nm = !1;
      }
      Ws = de, Pt = null, Jn = null, er = null, oi = null, xo = -1, ie = null, iT = !1, Qp = !1, Gp = 0;
    }
    function Cl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return er === null ? Pt.memoizedState = er = e : er = er.next = e, er;
    }
    function si() {
      var e;
      if (Jn === null) {
        var t = Pt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = Jn.next;
      var a;
      if (er === null ? a = Pt.memoizedState : a = er.next, a !== null)
        er = a, a = er.next, Jn = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        Jn = e;
        var i = {
          memoizedState: Jn.memoizedState,
          baseState: Jn.baseState,
          baseQueue: Jn.baseQueue,
          queue: Jn.queue,
          next: null
        };
        er === null ? Pt.memoizedState = er = i : er = er.next = i;
      }
      return er;
    }
    function W0() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function wE(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function RE(e, t, a) {
      var i = Cl(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: de,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var d = s.dispatch = gD.bind(null, Pt, s);
      return [i.memoizedState, d];
    }
    function xE(e, t, a) {
      var i = si(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = Jn, d = s.baseQueue, h = u.pending;
      if (h !== null) {
        if (d !== null) {
          var g = d.next, S = h.next;
          d.next = S, h.next = g;
        }
        s.baseQueue !== d && y("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = d = h, u.pending = null;
      }
      if (d !== null) {
        var w = d.next, B = s.baseState, I = null, G = null, X = null, ee = w;
        do {
          var Re = ee.lane;
          if (au(Ws, Re)) {
            if (X !== null) {
              var je = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: kt,
                action: ee.action,
                hasEagerState: ee.hasEagerState,
                eagerState: ee.eagerState,
                next: null
              };
              X = X.next = je;
            }
            if (ee.hasEagerState)
              B = ee.eagerState;
            else {
              var Tt = ee.action;
              B = e(B, Tt);
            }
          } else {
            var We = {
              lane: Re,
              action: ee.action,
              hasEagerState: ee.hasEagerState,
              eagerState: ee.eagerState,
              next: null
            };
            X === null ? (G = X = We, I = B) : X = X.next = We, Pt.lanes = ft(Pt.lanes, Re), mv(Re);
          }
          ee = ee.next;
        } while (ee !== null && ee !== w);
        X === null ? I = B : X.next = G, he(B, i.memoizedState) || av(), i.memoizedState = B, i.baseState = I, i.baseQueue = X, u.lastRenderedState = B;
      }
      var yt = u.interleaved;
      if (yt !== null) {
        var $ = yt;
        do {
          var te = $.lane;
          Pt.lanes = ft(Pt.lanes, te), mv(te), $ = $.next;
        } while ($ !== yt);
      } else d === null && (u.lanes = de);
      var Y = u.dispatch;
      return [i.memoizedState, Y];
    }
    function DE(e, t, a) {
      var i = si(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = u.dispatch, d = u.pending, h = i.memoizedState;
      if (d !== null) {
        u.pending = null;
        var g = d.next, S = g;
        do {
          var w = S.action;
          h = e(h, w), S = S.next;
        } while (S !== g);
        he(h, i.memoizedState) || av(), i.memoizedState = h, i.baseQueue === null && (i.baseState = h), u.lastRenderedState = h;
      }
      return [h, s];
    }
    function dN(e, t, a) {
    }
    function pN(e, t, a) {
    }
    function kE(e, t, a) {
      var i = Pt, u = Cl(), s, d = Sr();
      if (d) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), qf || s !== a() && (y("The result of getServerSnapshot should be cached to avoid an infinite loop"), qf = !0);
      } else {
        if (s = t(), !qf) {
          var h = t();
          he(s, h) || (y("The result of getSnapshot should be cached to avoid an infinite loop"), qf = !0);
        }
        var g = dy();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        df(g, Ws) || Q0(i, t, s);
      }
      u.memoizedState = s;
      var S = {
        value: s,
        getSnapshot: t
      };
      return u.queue = S, Bm(K0.bind(null, i, S, e), [e]), i.flags |= Nr, Kp(Xn | br, G0.bind(null, i, S, s, t), void 0, null), s;
    }
    function Um(e, t, a) {
      var i = Pt, u = si(), s = t();
      if (!qf) {
        var d = t();
        he(s, d) || (y("The result of getSnapshot should be cached to avoid an infinite loop"), qf = !0);
      }
      var h = u.memoizedState, g = !he(h, s);
      g && (u.memoizedState = s, av());
      var S = u.queue;
      if (Zp(K0.bind(null, i, S, e), [e]), S.getSnapshot !== t || g || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      er !== null && er.memoizedState.tag & Xn) {
        i.flags |= Nr, Kp(Xn | br, G0.bind(null, i, S, s, t), void 0, null);
        var w = dy();
        if (w === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        df(w, Ws) || Q0(i, t, s);
      }
      return s;
    }
    function Q0(e, t, a) {
      e.flags |= no;
      var i = {
        getSnapshot: t,
        value: a
      }, u = Pt.updateQueue;
      if (u === null)
        u = W0(), Pt.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function G0(e, t, a, i) {
      t.value = a, t.getSnapshot = i, X0(t) && Z0(e);
    }
    function K0(e, t, a) {
      var i = function() {
        X0(t) && Z0(e);
      };
      return a(i);
    }
    function X0(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !he(a, i);
      } catch {
        return !0;
      }
    }
    function Z0(e) {
      var t = wa(e, Je);
      t !== null && ar(t, e, Je, jt);
    }
    function zm(e) {
      var t = Cl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: de,
        dispatch: null,
        lastRenderedReducer: wE,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = ED.bind(null, Pt, a);
      return [t.memoizedState, i];
    }
    function _E(e) {
      return xE(wE);
    }
    function ME(e) {
      return DE(wE);
    }
    function Kp(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = Pt.updateQueue;
      if (s === null)
        s = W0(), Pt.updateQueue = s, s.lastEffect = u.next = u;
      else {
        var d = s.lastEffect;
        if (d === null)
          s.lastEffect = u.next = u;
        else {
          var h = d.next;
          d.next = u, u.next = h, s.lastEffect = u;
        }
      }
      return u;
    }
    function OE(e) {
      var t = Cl();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function Im(e) {
      var t = si();
      return t.memoizedState;
    }
    function Xp(e, t, a, i) {
      var u = Cl(), s = i === void 0 ? null : i;
      Pt.flags |= e, u.memoizedState = Kp(Xn | t, a, void 0, s);
    }
    function Fm(e, t, a, i) {
      var u = si(), s = i === void 0 ? null : i, d = void 0;
      if (Jn !== null) {
        var h = Jn.memoizedState;
        if (d = h.destroy, s !== null) {
          var g = h.deps;
          if (CE(s, g)) {
            u.memoizedState = Kp(t, a, d, s);
            return;
          }
        }
      }
      Pt.flags |= e, u.memoizedState = Kp(Xn | t, a, d, s);
    }
    function Bm(e, t) {
      return (Pt.mode & Ot) !== qe ? Xp(Ka | Nr | Fc, br, e, t) : Xp(Nr | Fc, br, e, t);
    }
    function Zp(e, t) {
      return Fm(Nr, br, e, t);
    }
    function AE(e, t) {
      return Xp(Et, Tl, e, t);
    }
    function Pm(e, t) {
      return Fm(Et, Tl, e, t);
    }
    function LE(e, t) {
      var a = Et;
      return a |= Ri, (Pt.mode & Ot) !== qe && (a |= al), Xp(a, Zn, e, t);
    }
    function Hm(e, t) {
      return Fm(Et, Zn, e, t);
    }
    function J0(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || y("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var s = e();
        return u.current = s, function() {
          u.current = null;
        };
      }
    }
    function NE(e, t, a) {
      typeof t != "function" && y("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = Et;
      return u |= Ri, (Pt.mode & Ot) !== qe && (u |= al), Xp(u, Zn, J0.bind(null, t, e), i);
    }
    function jm(e, t, a) {
      typeof t != "function" && y("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return Fm(Et, Zn, J0.bind(null, t, e), i);
    }
    function hD(e, t) {
    }
    var Vm = hD;
    function UE(e, t) {
      var a = Cl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function $m(e, t) {
      var a = si(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (CE(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function zE(e, t) {
      var a = Cl(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function Ym(e, t) {
      var a = si(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (CE(i, s))
          return u[0];
      }
      var d = e();
      return a.memoizedState = [d, i], d;
    }
    function IE(e) {
      var t = Cl();
      return t.memoizedState = e, e;
    }
    function eT(e) {
      var t = si(), a = Jn, i = a.memoizedState;
      return nT(t, i, e);
    }
    function tT(e) {
      var t = si();
      if (Jn === null)
        return t.memoizedState = e, e;
      var a = Jn.memoizedState;
      return nT(t, a, e);
    }
    function nT(e, t, a) {
      var i = !ep(Ws);
      if (i) {
        if (!he(a, t)) {
          var u = rp();
          Pt.lanes = ft(Pt.lanes, u), mv(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, av()), e.memoizedState = a, a;
    }
    function mD(e, t, a) {
      var i = ba();
      xn(Th(i, ei)), e(!0);
      var u = Wp.transition;
      Wp.transition = {};
      var s = Wp.transition;
      Wp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (xn(i), Wp.transition = u, u === null && s._updatedFibers) {
          var d = s._updatedFibers.size;
          d > 10 && A("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function FE() {
      var e = zm(!1), t = e[0], a = e[1], i = mD.bind(null, a), u = Cl();
      return u.memoizedState = i, [t, i];
    }
    function rT() {
      var e = _E(), t = e[0], a = si(), i = a.memoizedState;
      return [t, i];
    }
    function aT() {
      var e = ME(), t = e[0], a = si(), i = a.memoizedState;
      return [t, i];
    }
    var iT = !1;
    function yD() {
      return iT;
    }
    function BE() {
      var e = Cl(), t = dy(), a = t.identifierPrefix, i;
      if (Sr()) {
        var u = Nx();
        i = ":" + a + "R" + u;
        var s = Gp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var d = dD++;
        i = ":" + a + "r" + d.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function qm() {
      var e = si(), t = e.memoizedState;
      return t;
    }
    function gD(e, t, a) {
      typeof arguments[3] == "function" && y("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Oo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (lT(e))
        uT(t, u);
      else {
        var s = U0(e, t, u, i);
        if (s !== null) {
          var d = aa();
          ar(s, e, i, d), oT(s, t, i);
        }
      }
      sT(e, i);
    }
    function ED(e, t, a) {
      typeof arguments[3] == "function" && y("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Oo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (lT(e))
        uT(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === de && (s === null || s.lanes === de)) {
          var d = t.lastRenderedReducer;
          if (d !== null) {
            var h;
            h = Me.current, Me.current = Fi;
            try {
              var g = t.lastRenderedState, S = d(g, a);
              if (u.hasEagerState = !0, u.eagerState = S, he(S, g)) {
                rD(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              Me.current = h;
            }
          }
        }
        var w = U0(e, t, u, i);
        if (w !== null) {
          var B = aa();
          ar(w, e, i, B), oT(w, t, i);
        }
      }
      sT(e, i);
    }
    function lT(e) {
      var t = e.alternate;
      return e === Pt || t !== null && t === Pt;
    }
    function uT(e, t) {
      Qp = Nm = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function oT(e, t, a) {
      if (np(a)) {
        var i = t.lanes;
        i = ap(i, e.pendingLanes);
        var u = ft(i, a);
        t.lanes = u, vf(e, u);
      }
    }
    function sT(e, t, a) {
      ss(e, t);
    }
    var Wm = {
      readContext: jn,
      useCallback: Yr,
      useContext: Yr,
      useEffect: Yr,
      useImperativeHandle: Yr,
      useInsertionEffect: Yr,
      useLayoutEffect: Yr,
      useMemo: Yr,
      useReducer: Yr,
      useRef: Yr,
      useState: Yr,
      useDebugValue: Yr,
      useDeferredValue: Yr,
      useTransition: Yr,
      useMutableSource: Yr,
      useSyncExternalStore: Yr,
      useId: Yr,
      unstable_isNewReconciler: Ee
    }, cT = null, fT = null, dT = null, pT = null, wl = null, Fi = null, Qm = null;
    {
      var PE = function() {
        y("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, at = function() {
        y("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      cT = {
        readContext: function(e) {
          return jn(e);
        },
        useCallback: function(e, t) {
          return ie = "useCallback", zt(), Wf(t), UE(e, t);
        },
        useContext: function(e) {
          return ie = "useContext", zt(), jn(e);
        },
        useEffect: function(e, t) {
          return ie = "useEffect", zt(), Wf(t), Bm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ie = "useImperativeHandle", zt(), Wf(a), NE(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ie = "useInsertionEffect", zt(), Wf(t), AE(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ie = "useLayoutEffect", zt(), Wf(t), LE(e, t);
        },
        useMemo: function(e, t) {
          ie = "useMemo", zt(), Wf(t);
          var a = Me.current;
          Me.current = wl;
          try {
            return zE(e, t);
          } finally {
            Me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ie = "useReducer", zt();
          var i = Me.current;
          Me.current = wl;
          try {
            return RE(e, t, a);
          } finally {
            Me.current = i;
          }
        },
        useRef: function(e) {
          return ie = "useRef", zt(), OE(e);
        },
        useState: function(e) {
          ie = "useState", zt();
          var t = Me.current;
          Me.current = wl;
          try {
            return zm(e);
          } finally {
            Me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ie = "useDebugValue", zt(), void 0;
        },
        useDeferredValue: function(e) {
          return ie = "useDeferredValue", zt(), IE(e);
        },
        useTransition: function() {
          return ie = "useTransition", zt(), FE();
        },
        useMutableSource: function(e, t, a) {
          return ie = "useMutableSource", zt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ie = "useSyncExternalStore", zt(), kE(e, t, a);
        },
        useId: function() {
          return ie = "useId", zt(), BE();
        },
        unstable_isNewReconciler: Ee
      }, fT = {
        readContext: function(e) {
          return jn(e);
        },
        useCallback: function(e, t) {
          return ie = "useCallback", be(), UE(e, t);
        },
        useContext: function(e) {
          return ie = "useContext", be(), jn(e);
        },
        useEffect: function(e, t) {
          return ie = "useEffect", be(), Bm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ie = "useImperativeHandle", be(), NE(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ie = "useInsertionEffect", be(), AE(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ie = "useLayoutEffect", be(), LE(e, t);
        },
        useMemo: function(e, t) {
          ie = "useMemo", be();
          var a = Me.current;
          Me.current = wl;
          try {
            return zE(e, t);
          } finally {
            Me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ie = "useReducer", be();
          var i = Me.current;
          Me.current = wl;
          try {
            return RE(e, t, a);
          } finally {
            Me.current = i;
          }
        },
        useRef: function(e) {
          return ie = "useRef", be(), OE(e);
        },
        useState: function(e) {
          ie = "useState", be();
          var t = Me.current;
          Me.current = wl;
          try {
            return zm(e);
          } finally {
            Me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ie = "useDebugValue", be(), void 0;
        },
        useDeferredValue: function(e) {
          return ie = "useDeferredValue", be(), IE(e);
        },
        useTransition: function() {
          return ie = "useTransition", be(), FE();
        },
        useMutableSource: function(e, t, a) {
          return ie = "useMutableSource", be(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ie = "useSyncExternalStore", be(), kE(e, t, a);
        },
        useId: function() {
          return ie = "useId", be(), BE();
        },
        unstable_isNewReconciler: Ee
      }, dT = {
        readContext: function(e) {
          return jn(e);
        },
        useCallback: function(e, t) {
          return ie = "useCallback", be(), $m(e, t);
        },
        useContext: function(e) {
          return ie = "useContext", be(), jn(e);
        },
        useEffect: function(e, t) {
          return ie = "useEffect", be(), Zp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ie = "useImperativeHandle", be(), jm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ie = "useInsertionEffect", be(), Pm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ie = "useLayoutEffect", be(), Hm(e, t);
        },
        useMemo: function(e, t) {
          ie = "useMemo", be();
          var a = Me.current;
          Me.current = Fi;
          try {
            return Ym(e, t);
          } finally {
            Me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ie = "useReducer", be();
          var i = Me.current;
          Me.current = Fi;
          try {
            return xE(e, t, a);
          } finally {
            Me.current = i;
          }
        },
        useRef: function(e) {
          return ie = "useRef", be(), Im();
        },
        useState: function(e) {
          ie = "useState", be();
          var t = Me.current;
          Me.current = Fi;
          try {
            return _E(e);
          } finally {
            Me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ie = "useDebugValue", be(), Vm();
        },
        useDeferredValue: function(e) {
          return ie = "useDeferredValue", be(), eT(e);
        },
        useTransition: function() {
          return ie = "useTransition", be(), rT();
        },
        useMutableSource: function(e, t, a) {
          return ie = "useMutableSource", be(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ie = "useSyncExternalStore", be(), Um(e, t);
        },
        useId: function() {
          return ie = "useId", be(), qm();
        },
        unstable_isNewReconciler: Ee
      }, pT = {
        readContext: function(e) {
          return jn(e);
        },
        useCallback: function(e, t) {
          return ie = "useCallback", be(), $m(e, t);
        },
        useContext: function(e) {
          return ie = "useContext", be(), jn(e);
        },
        useEffect: function(e, t) {
          return ie = "useEffect", be(), Zp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ie = "useImperativeHandle", be(), jm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ie = "useInsertionEffect", be(), Pm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ie = "useLayoutEffect", be(), Hm(e, t);
        },
        useMemo: function(e, t) {
          ie = "useMemo", be();
          var a = Me.current;
          Me.current = Qm;
          try {
            return Ym(e, t);
          } finally {
            Me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ie = "useReducer", be();
          var i = Me.current;
          Me.current = Qm;
          try {
            return DE(e, t, a);
          } finally {
            Me.current = i;
          }
        },
        useRef: function(e) {
          return ie = "useRef", be(), Im();
        },
        useState: function(e) {
          ie = "useState", be();
          var t = Me.current;
          Me.current = Qm;
          try {
            return ME(e);
          } finally {
            Me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ie = "useDebugValue", be(), Vm();
        },
        useDeferredValue: function(e) {
          return ie = "useDeferredValue", be(), tT(e);
        },
        useTransition: function() {
          return ie = "useTransition", be(), aT();
        },
        useMutableSource: function(e, t, a) {
          return ie = "useMutableSource", be(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ie = "useSyncExternalStore", be(), Um(e, t);
        },
        useId: function() {
          return ie = "useId", be(), qm();
        },
        unstable_isNewReconciler: Ee
      }, wl = {
        readContext: function(e) {
          return PE(), jn(e);
        },
        useCallback: function(e, t) {
          return ie = "useCallback", at(), zt(), UE(e, t);
        },
        useContext: function(e) {
          return ie = "useContext", at(), zt(), jn(e);
        },
        useEffect: function(e, t) {
          return ie = "useEffect", at(), zt(), Bm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ie = "useImperativeHandle", at(), zt(), NE(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ie = "useInsertionEffect", at(), zt(), AE(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ie = "useLayoutEffect", at(), zt(), LE(e, t);
        },
        useMemo: function(e, t) {
          ie = "useMemo", at(), zt();
          var a = Me.current;
          Me.current = wl;
          try {
            return zE(e, t);
          } finally {
            Me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ie = "useReducer", at(), zt();
          var i = Me.current;
          Me.current = wl;
          try {
            return RE(e, t, a);
          } finally {
            Me.current = i;
          }
        },
        useRef: function(e) {
          return ie = "useRef", at(), zt(), OE(e);
        },
        useState: function(e) {
          ie = "useState", at(), zt();
          var t = Me.current;
          Me.current = wl;
          try {
            return zm(e);
          } finally {
            Me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ie = "useDebugValue", at(), zt(), void 0;
        },
        useDeferredValue: function(e) {
          return ie = "useDeferredValue", at(), zt(), IE(e);
        },
        useTransition: function() {
          return ie = "useTransition", at(), zt(), FE();
        },
        useMutableSource: function(e, t, a) {
          return ie = "useMutableSource", at(), zt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ie = "useSyncExternalStore", at(), zt(), kE(e, t, a);
        },
        useId: function() {
          return ie = "useId", at(), zt(), BE();
        },
        unstable_isNewReconciler: Ee
      }, Fi = {
        readContext: function(e) {
          return PE(), jn(e);
        },
        useCallback: function(e, t) {
          return ie = "useCallback", at(), be(), $m(e, t);
        },
        useContext: function(e) {
          return ie = "useContext", at(), be(), jn(e);
        },
        useEffect: function(e, t) {
          return ie = "useEffect", at(), be(), Zp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ie = "useImperativeHandle", at(), be(), jm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ie = "useInsertionEffect", at(), be(), Pm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ie = "useLayoutEffect", at(), be(), Hm(e, t);
        },
        useMemo: function(e, t) {
          ie = "useMemo", at(), be();
          var a = Me.current;
          Me.current = Fi;
          try {
            return Ym(e, t);
          } finally {
            Me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ie = "useReducer", at(), be();
          var i = Me.current;
          Me.current = Fi;
          try {
            return xE(e, t, a);
          } finally {
            Me.current = i;
          }
        },
        useRef: function(e) {
          return ie = "useRef", at(), be(), Im();
        },
        useState: function(e) {
          ie = "useState", at(), be();
          var t = Me.current;
          Me.current = Fi;
          try {
            return _E(e);
          } finally {
            Me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ie = "useDebugValue", at(), be(), Vm();
        },
        useDeferredValue: function(e) {
          return ie = "useDeferredValue", at(), be(), eT(e);
        },
        useTransition: function() {
          return ie = "useTransition", at(), be(), rT();
        },
        useMutableSource: function(e, t, a) {
          return ie = "useMutableSource", at(), be(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ie = "useSyncExternalStore", at(), be(), Um(e, t);
        },
        useId: function() {
          return ie = "useId", at(), be(), qm();
        },
        unstable_isNewReconciler: Ee
      }, Qm = {
        readContext: function(e) {
          return PE(), jn(e);
        },
        useCallback: function(e, t) {
          return ie = "useCallback", at(), be(), $m(e, t);
        },
        useContext: function(e) {
          return ie = "useContext", at(), be(), jn(e);
        },
        useEffect: function(e, t) {
          return ie = "useEffect", at(), be(), Zp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ie = "useImperativeHandle", at(), be(), jm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ie = "useInsertionEffect", at(), be(), Pm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ie = "useLayoutEffect", at(), be(), Hm(e, t);
        },
        useMemo: function(e, t) {
          ie = "useMemo", at(), be();
          var a = Me.current;
          Me.current = Fi;
          try {
            return Ym(e, t);
          } finally {
            Me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ie = "useReducer", at(), be();
          var i = Me.current;
          Me.current = Fi;
          try {
            return DE(e, t, a);
          } finally {
            Me.current = i;
          }
        },
        useRef: function(e) {
          return ie = "useRef", at(), be(), Im();
        },
        useState: function(e) {
          ie = "useState", at(), be();
          var t = Me.current;
          Me.current = Fi;
          try {
            return ME(e);
          } finally {
            Me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ie = "useDebugValue", at(), be(), Vm();
        },
        useDeferredValue: function(e) {
          return ie = "useDeferredValue", at(), be(), tT(e);
        },
        useTransition: function() {
          return ie = "useTransition", at(), be(), aT();
        },
        useMutableSource: function(e, t, a) {
          return ie = "useMutableSource", at(), be(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ie = "useSyncExternalStore", at(), be(), Um(e, t);
        },
        useId: function() {
          return ie = "useId", at(), be(), qm();
        },
        unstable_isNewReconciler: Ee
      };
    }
    var Do = p.unstable_now, vT = 0, Gm = -1, Jp = -1, Km = -1, HE = !1, Xm = !1;
    function hT() {
      return HE;
    }
    function SD() {
      Xm = !0;
    }
    function bD() {
      HE = !1, Xm = !1;
    }
    function TD() {
      HE = Xm, Xm = !1;
    }
    function mT() {
      return vT;
    }
    function yT() {
      vT = Do();
    }
    function jE(e) {
      Jp = Do(), e.actualStartTime < 0 && (e.actualStartTime = Do());
    }
    function gT(e) {
      Jp = -1;
    }
    function Zm(e, t) {
      if (Jp >= 0) {
        var a = Do() - Jp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Jp = -1;
      }
    }
    function Rl(e) {
      if (Gm >= 0) {
        var t = Do() - Gm;
        Gm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case C:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case me:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function VE(e) {
      if (Km >= 0) {
        var t = Do() - Km;
        Km = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case C:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case me:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function xl() {
      Gm = Do();
    }
    function $E() {
      Km = Do();
    }
    function YE(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function Bi(e, t) {
      if (e && e.defaultProps) {
        var a = ht({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var qE = {}, WE, QE, GE, KE, XE, ET, Jm, ZE, JE, eS, ev;
    {
      WE = /* @__PURE__ */ new Set(), QE = /* @__PURE__ */ new Set(), GE = /* @__PURE__ */ new Set(), KE = /* @__PURE__ */ new Set(), ZE = /* @__PURE__ */ new Set(), XE = /* @__PURE__ */ new Set(), JE = /* @__PURE__ */ new Set(), eS = /* @__PURE__ */ new Set(), ev = /* @__PURE__ */ new Set();
      var ST = /* @__PURE__ */ new Set();
      Jm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          ST.has(a) || (ST.add(a), y("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, ET = function(e, t) {
        if (t === void 0) {
          var a = Dt(e) || "Component";
          XE.has(a) || (XE.add(a), y("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(qE, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(qE);
    }
    function tS(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & Bt) {
          tn(!0);
          try {
            s = a(i, u);
          } finally {
            tn(!1);
          }
        }
        ET(t, s);
      }
      var d = s == null ? u : ht({}, u, s);
      if (e.memoizedState = d, e.lanes === de) {
        var h = e.updateQueue;
        h.baseState = d;
      }
    }
    var nS = {
      isMounted: lh,
      enqueueSetState: function(e, t, a) {
        var i = to(e), u = aa(), s = Oo(i), d = mu(u, s);
        d.payload = t, a != null && (Jm(a, "setState"), d.callback = a);
        var h = Co(i, d, s);
        h !== null && (ar(h, i, s, u), km(h, i, s)), ss(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = to(e), u = aa(), s = Oo(i), d = mu(u, s);
        d.tag = I0, d.payload = t, a != null && (Jm(a, "replaceState"), d.callback = a);
        var h = Co(i, d, s);
        h !== null && (ar(h, i, s, u), km(h, i, s)), ss(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = to(e), i = aa(), u = Oo(a), s = mu(i, u);
        s.tag = Rm, t != null && (Jm(t, "forceUpdate"), s.callback = t);
        var d = Co(a, s, u);
        d !== null && (ar(d, a, u, i), km(d, a, u)), Yc(a, u);
      }
    };
    function bT(e, t, a, i, u, s, d) {
      var h = e.stateNode;
      if (typeof h.shouldComponentUpdate == "function") {
        var g = h.shouldComponentUpdate(i, s, d);
        {
          if (e.mode & Bt) {
            tn(!0);
            try {
              g = h.shouldComponentUpdate(i, s, d);
            } finally {
              tn(!1);
            }
          }
          g === void 0 && y("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Dt(t) || "Component");
        }
        return g;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Ie(a, i) || !Ie(u, s) : !0;
    }
    function CD(e, t, a) {
      var i = e.stateNode;
      {
        var u = Dt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? y("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : y("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && y("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && y("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && y("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && y("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !ev.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Bt) === qe && (ev.add(t), y(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !ev.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Bt) === qe && (ev.add(t), y(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), i.contextTypes && y("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !JE.has(t) && (JE.add(t), y("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && y("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && y("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Dt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && y("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && y("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && y("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && y("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var d = i.props !== a;
        i.props !== void 0 && d && y("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && y("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !GE.has(t) && (GE.add(t), y("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Dt(t))), typeof i.getDerivedStateFromProps == "function" && y("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && y("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && y("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var h = i.state;
        h && (typeof h != "object" || qn(h)) && y("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && y("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function TT(e, t) {
      t.updater = nS, e.stateNode = t, $l(t, e), t._reactInternalInstance = qE;
    }
    function CT(e, t, a) {
      var i = !1, u = Ba, s = Ba, d = t.contextType;
      if ("contextType" in t) {
        var h = (
          // Allow null for conditional declaration
          d === null || d !== void 0 && d.$$typeof === Ol && d._context === void 0
        );
        if (!h && !eS.has(t)) {
          eS.add(t);
          var g = "";
          d === void 0 ? g = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof d != "object" ? g = " However, it is set to a " + typeof d + "." : d.$$typeof === yi ? g = " Did you accidentally pass the Context.Provider instead?" : d._context !== void 0 ? g = " Did you accidentally pass the Context.Consumer instead?" : g = " However, it is set to an object with keys {" + Object.keys(d).join(", ") + "}.", y("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Dt(t) || "Component", g);
        }
      }
      if (typeof d == "object" && d !== null)
        s = jn(d);
      else {
        u = Uf(e, t, !0);
        var S = t.contextTypes;
        i = S != null, s = i ? zf(e, u) : Ba;
      }
      var w = new t(a, s);
      if (e.mode & Bt) {
        tn(!0);
        try {
          w = new t(a, s);
        } finally {
          tn(!1);
        }
      }
      var B = e.memoizedState = w.state !== null && w.state !== void 0 ? w.state : null;
      TT(e, w);
      {
        if (typeof t.getDerivedStateFromProps == "function" && B === null) {
          var I = Dt(t) || "Component";
          QE.has(I) || (QE.add(I), y("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", I, w.state === null ? "null" : "undefined", I));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof w.getSnapshotBeforeUpdate == "function") {
          var G = null, X = null, ee = null;
          if (typeof w.componentWillMount == "function" && w.componentWillMount.__suppressDeprecationWarning !== !0 ? G = "componentWillMount" : typeof w.UNSAFE_componentWillMount == "function" && (G = "UNSAFE_componentWillMount"), typeof w.componentWillReceiveProps == "function" && w.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? X = "componentWillReceiveProps" : typeof w.UNSAFE_componentWillReceiveProps == "function" && (X = "UNSAFE_componentWillReceiveProps"), typeof w.componentWillUpdate == "function" && w.componentWillUpdate.__suppressDeprecationWarning !== !0 ? ee = "componentWillUpdate" : typeof w.UNSAFE_componentWillUpdate == "function" && (ee = "UNSAFE_componentWillUpdate"), G !== null || X !== null || ee !== null) {
            var Re = Dt(t) || "Component", We = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            KE.has(Re) || (KE.add(Re), y(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, Re, We, G !== null ? `
  ` + G : "", X !== null ? `
  ` + X : "", ee !== null ? `
  ` + ee : ""));
          }
        }
      }
      return i && d0(e, u, s), w;
    }
    function wD(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (y("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", ct(e) || "Component"), nS.enqueueReplaceState(t, t.state, null));
    }
    function wT(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = ct(e) || "Component";
          WE.has(s) || (WE.add(s), y("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        nS.enqueueReplaceState(t, t.state, null);
      }
    }
    function rS(e, t, a, i) {
      CD(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = {}, dE(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = jn(s);
      else {
        var d = Uf(e, t, !0);
        u.context = zf(e, d);
      }
      {
        if (u.state === a) {
          var h = Dt(t) || "Component";
          ZE.has(h) || (ZE.add(h), y("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", h));
        }
        e.mode & Bt && zi.recordLegacyContextWarning(e, u), zi.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var g = t.getDerivedStateFromProps;
      if (typeof g == "function" && (tS(e, t, g, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (wD(e, u), _m(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var S = Et;
        S |= Ri, (e.mode & Ot) !== qe && (S |= al), e.flags |= S;
      }
    }
    function RD(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var d = u.context, h = t.contextType, g = Ba;
      if (typeof h == "object" && h !== null)
        g = jn(h);
      else {
        var S = Uf(e, t, !0);
        g = zf(e, S);
      }
      var w = t.getDerivedStateFromProps, B = typeof w == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !B && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || d !== g) && wT(e, u, a, g), B0();
      var I = e.memoizedState, G = u.state = I;
      if (_m(e, a, u, i), G = e.memoizedState, s === a && I === G && !cm() && !Mm()) {
        if (typeof u.componentDidMount == "function") {
          var X = Et;
          X |= Ri, (e.mode & Ot) !== qe && (X |= al), e.flags |= X;
        }
        return !1;
      }
      typeof w == "function" && (tS(e, t, w, a), G = e.memoizedState);
      var ee = Mm() || bT(e, t, s, a, I, G, g);
      if (ee) {
        if (!B && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var Re = Et;
          Re |= Ri, (e.mode & Ot) !== qe && (Re |= al), e.flags |= Re;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var We = Et;
          We |= Ri, (e.mode & Ot) !== qe && (We |= al), e.flags |= We;
        }
        e.memoizedProps = a, e.memoizedState = G;
      }
      return u.props = a, u.state = G, u.context = g, ee;
    }
    function xD(e, t, a, i, u) {
      var s = t.stateNode;
      F0(e, t);
      var d = t.memoizedProps, h = t.type === t.elementType ? d : Bi(t.type, d);
      s.props = h;
      var g = t.pendingProps, S = s.context, w = a.contextType, B = Ba;
      if (typeof w == "object" && w !== null)
        B = jn(w);
      else {
        var I = Uf(t, a, !0);
        B = zf(t, I);
      }
      var G = a.getDerivedStateFromProps, X = typeof G == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !X && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (d !== g || S !== B) && wT(t, s, i, B), B0();
      var ee = t.memoizedState, Re = s.state = ee;
      if (_m(t, i, s, u), Re = t.memoizedState, d === g && ee === Re && !cm() && !Mm())
        return typeof s.componentDidUpdate == "function" && (d !== e.memoizedProps || ee !== e.memoizedState) && (t.flags |= Et), typeof s.getSnapshotBeforeUpdate == "function" && (d !== e.memoizedProps || ee !== e.memoizedState) && (t.flags |= On), !1;
      typeof G == "function" && (tS(t, a, G, i), Re = t.memoizedState);
      var We = Mm() || bT(t, a, h, i, ee, Re, B) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      Be;
      return We ? (!X && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, Re, B), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, Re, B)), typeof s.componentDidUpdate == "function" && (t.flags |= Et), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= On)) : (typeof s.componentDidUpdate == "function" && (d !== e.memoizedProps || ee !== e.memoizedState) && (t.flags |= Et), typeof s.getSnapshotBeforeUpdate == "function" && (d !== e.memoizedProps || ee !== e.memoizedState) && (t.flags |= On), t.memoizedProps = i, t.memoizedState = Re), s.props = i, s.state = Re, s.context = B, We;
    }
    function Qs(e, t) {
      return {
        value: e,
        source: t,
        stack: Ll(t),
        digest: null
      };
    }
    function aS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function DD(e, t) {
      return !0;
    }
    function iS(e, t) {
      try {
        var a = DD(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, d = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === T)
            return;
          console.error(i);
        }
        var h = u ? ct(u) : null, g = h ? "The above error occurred in the <" + h + "> component:" : "The above error occurred in one of your React components:", S;
        if (e.tag === C)
          S = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var w = ct(e) || "Anonymous";
          S = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + w + ".");
        }
        var B = g + `
` + d + `

` + ("" + S);
        console.error(B);
      } catch (I) {
        setTimeout(function() {
          throw I;
        });
      }
    }
    var kD = typeof WeakMap == "function" ? WeakMap : Map;
    function RT(e, t, a) {
      var i = mu(jt, a);
      i.tag = cE, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        S_(u), iS(e, t);
      }, i;
    }
    function lS(e, t, a) {
      var i = mu(jt, a);
      i.tag = cE;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          zC(e), iS(e, t);
        };
      }
      var d = e.stateNode;
      return d !== null && typeof d.componentDidCatch == "function" && (i.callback = function() {
        zC(e), iS(e, t), typeof u != "function" && g_(this);
        var g = t.value, S = t.stack;
        this.componentDidCatch(g, {
          componentStack: S !== null ? S : ""
        }), typeof u != "function" && (Br(e.lanes, Je) || y("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", ct(e) || "Unknown"));
      }), i;
    }
    function xT(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new kD(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = b_.bind(null, e, t, a);
        Fr && yv(e, a), t.then(s, s);
      }
    }
    function _D(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function MD(e, t) {
      var a = e.tag;
      if ((e.mode & pt) === qe && (a === R || a === oe || a === H)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function DT(e) {
      var t = e;
      do {
        if (t.tag === Se && cD(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function kT(e, t, a, i, u) {
      if ((e.mode & pt) === qe) {
        if (e === t)
          e.flags |= Ur;
        else {
          if (e.flags |= $e, a.flags |= Ic, a.flags &= -52805, a.tag === T) {
            var s = a.alternate;
            if (s === null)
              a.tag = ke;
            else {
              var d = mu(jt, Je);
              d.tag = Rm, Co(a, d, Je);
            }
          }
          a.lanes = ft(a.lanes, Je);
        }
        return e;
      }
      return e.flags |= Ur, e.lanes = u, e;
    }
    function OD(e, t, a, i, u) {
      if (a.flags |= rs, Fr && yv(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        MD(a), Sr() && a.mode & pt && E0();
        var d = DT(t);
        if (d !== null) {
          d.flags &= -257, kT(d, t, a, e, u), d.mode & pt && xT(e, s, u), _D(d, e, s);
          return;
        } else {
          if (!vh(u)) {
            xT(e, s, u), BS();
            return;
          }
          var h = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = h;
        }
      } else if (Sr() && a.mode & pt) {
        E0();
        var g = DT(t);
        if (g !== null) {
          (g.flags & Ur) === Ye && (g.flags |= Lr), kT(g, t, a, e, u), Zg(Qs(i, a));
          return;
        }
      }
      i = Qs(i, a), c_(i);
      var S = t;
      do {
        switch (S.tag) {
          case C: {
            var w = i;
            S.flags |= Ur;
            var B = gs(u);
            S.lanes = ft(S.lanes, B);
            var I = RT(S, w, B);
            pE(S, I);
            return;
          }
          case T:
            var G = i, X = S.type, ee = S.stateNode;
            if ((S.flags & $e) === Ye && (typeof X.getDerivedStateFromError == "function" || ee !== null && typeof ee.componentDidCatch == "function" && !DC(ee))) {
              S.flags |= Ur;
              var Re = gs(u);
              S.lanes = ft(S.lanes, Re);
              var We = lS(S, G, Re);
              pE(S, We);
              return;
            }
            break;
        }
        S = S.return;
      } while (S !== null);
    }
    function AD() {
      return null;
    }
    var tv = m.ReactCurrentOwner, Pi = !1, uS, nv, oS, sS, cS, Gs, fS, ey, rv;
    uS = {}, nv = {}, oS = {}, sS = {}, cS = {}, Gs = !1, fS = {}, ey = {}, rv = {};
    function na(e, t, a, i) {
      e === null ? t.child = O0(t, null, a, i) : t.child = Pf(t, e.child, a, i);
    }
    function LD(e, t, a, i) {
      t.child = Pf(t, e.child, null, i), t.child = Pf(t, null, a, i);
    }
    function _T(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Ni(
          s,
          i,
          // Resolved props
          "prop",
          Dt(a)
        );
      }
      var d = a.render, h = t.ref, g, S;
      jf(t, u), Xr(t);
      {
        if (tv.current = t, Yn(!0), g = Qf(e, t, d, i, h, u), S = Gf(), t.mode & Bt) {
          tn(!0);
          try {
            g = Qf(e, t, d, i, h, u), S = Gf();
          } finally {
            tn(!1);
          }
        }
        Yn(!1);
      }
      return Zr(), e !== null && !Pi ? (Y0(e, t, u), yu(e, t, u)) : (Sr() && S && qg(t), t.flags |= La, na(e, t, g, u), t.child);
    }
    function MT(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (F_(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var d = s;
          return d = rd(s), t.tag = H, t.type = d, vS(t, s), OT(e, t, d, i, u);
        }
        {
          var h = s.propTypes;
          if (h && Ni(
            h,
            i,
            // Resolved props
            "prop",
            Dt(s)
          ), a.defaultProps !== void 0) {
            var g = Dt(s) || "Unknown";
            rv[g] || (y("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", g), rv[g] = !0);
          }
        }
        var S = KS(a.type, null, i, t, t.mode, u);
        return S.ref = t.ref, S.return = t, t.child = S, S;
      }
      {
        var w = a.type, B = w.propTypes;
        B && Ni(
          B,
          i,
          // Resolved props
          "prop",
          Dt(w)
        );
      }
      var I = e.child, G = SS(e, u);
      if (!G) {
        var X = I.memoizedProps, ee = a.compare;
        if (ee = ee !== null ? ee : Ie, ee(X, i) && e.ref === t.ref)
          return yu(e, t, u);
      }
      t.flags |= La;
      var Re = ec(I, i);
      return Re.ref = t.ref, Re.return = t, t.child = Re, Re;
    }
    function OT(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === Fn) {
          var d = s, h = d._payload, g = d._init;
          try {
            s = g(h);
          } catch {
            s = null;
          }
          var S = s && s.propTypes;
          S && Ni(
            S,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            Dt(s)
          );
        }
      }
      if (e !== null) {
        var w = e.memoizedProps;
        if (Ie(w, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (Pi = !1, t.pendingProps = i = w, SS(e, u))
            (e.flags & Ic) !== Ye && (Pi = !0);
          else return t.lanes = e.lanes, yu(e, t, u);
      }
      return dS(e, t, a, i, u);
    }
    function AT(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || Te)
        if ((t.mode & pt) === qe) {
          var d = {
            baseLanes: de,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = d, py(t, a);
        } else if (Br(a, Jr)) {
          var B = {
            baseLanes: de,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = B;
          var I = s !== null ? s.baseLanes : a;
          py(t, I);
        } else {
          var h = null, g;
          if (s !== null) {
            var S = s.baseLanes;
            g = ft(S, a);
          } else
            g = a;
          t.lanes = t.childLanes = Jr;
          var w = {
            baseLanes: g,
            cachePool: h,
            transitions: null
          };
          return t.memoizedState = w, t.updateQueue = null, py(t, g), null;
        }
      else {
        var G;
        s !== null ? (G = ft(s.baseLanes, a), t.memoizedState = null) : G = a, py(t, G);
      }
      return na(e, t, u, a), t.child;
    }
    function ND(e, t, a) {
      var i = t.pendingProps;
      return na(e, t, i, a), t.child;
    }
    function UD(e, t, a) {
      var i = t.pendingProps.children;
      return na(e, t, i, a), t.child;
    }
    function zD(e, t, a) {
      {
        t.flags |= Et;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return na(e, t, s, a), t.child;
    }
    function LT(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= on, t.flags |= ro);
    }
    function dS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Ni(
          s,
          i,
          // Resolved props
          "prop",
          Dt(a)
        );
      }
      var d;
      {
        var h = Uf(t, a, !0);
        d = zf(t, h);
      }
      var g, S;
      jf(t, u), Xr(t);
      {
        if (tv.current = t, Yn(!0), g = Qf(e, t, a, i, d, u), S = Gf(), t.mode & Bt) {
          tn(!0);
          try {
            g = Qf(e, t, a, i, d, u), S = Gf();
          } finally {
            tn(!1);
          }
        }
        Yn(!1);
      }
      return Zr(), e !== null && !Pi ? (Y0(e, t, u), yu(e, t, u)) : (Sr() && S && qg(t), t.flags |= La, na(e, t, g, u), t.child);
    }
    function NT(e, t, a, i, u) {
      {
        switch (J_(t)) {
          case !1: {
            var s = t.stateNode, d = t.type, h = new d(t.memoizedProps, s.context), g = h.state;
            s.updater.enqueueSetState(s, g, null);
            break;
          }
          case !0: {
            t.flags |= $e, t.flags |= Ur;
            var S = new Error("Simulated error coming from DevTools"), w = gs(u);
            t.lanes = ft(t.lanes, w);
            var B = lS(t, Qs(S, t), w);
            pE(t, B);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var I = a.propTypes;
          I && Ni(
            I,
            i,
            // Resolved props
            "prop",
            Dt(a)
          );
        }
      }
      var G;
      bl(a) ? (G = !0, dm(t)) : G = !1, jf(t, u);
      var X = t.stateNode, ee;
      X === null ? (ny(e, t), CT(t, a, i), rS(t, a, i, u), ee = !0) : e === null ? ee = RD(t, a, i, u) : ee = xD(e, t, a, i, u);
      var Re = pS(e, t, a, ee, G, u);
      {
        var We = t.stateNode;
        ee && We.props !== i && (Gs || y("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", ct(t) || "a component"), Gs = !0);
      }
      return Re;
    }
    function pS(e, t, a, i, u, s) {
      LT(e, t);
      var d = (t.flags & $e) !== Ye;
      if (!i && !d)
        return u && h0(t, a, !1), yu(e, t, s);
      var h = t.stateNode;
      tv.current = t;
      var g;
      if (d && typeof a.getDerivedStateFromError != "function")
        g = null, gT();
      else {
        Xr(t);
        {
          if (Yn(!0), g = h.render(), t.mode & Bt) {
            tn(!0);
            try {
              h.render();
            } finally {
              tn(!1);
            }
          }
          Yn(!1);
        }
        Zr();
      }
      return t.flags |= La, e !== null && d ? LD(e, t, g, s) : na(e, t, g, s), t.memoizedState = h.state, u && h0(t, a, !0), t.child;
    }
    function UT(e) {
      var t = e.stateNode;
      t.pendingContext ? p0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && p0(e, t.context, !1), vE(e, t.containerInfo);
    }
    function ID(e, t, a) {
      if (UT(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      F0(e, t), _m(t, i, null, a);
      var d = t.memoizedState;
      t.stateNode;
      var h = d.element;
      if (u.isDehydrated) {
        var g = {
          element: h,
          isDehydrated: !1,
          cache: d.cache,
          pendingSuspenseBoundaries: d.pendingSuspenseBoundaries,
          transitions: d.transitions
        }, S = t.updateQueue;
        if (S.baseState = g, t.memoizedState = g, t.flags & Lr) {
          var w = Qs(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return zT(e, t, h, a, w);
        } else if (h !== s) {
          var B = Qs(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return zT(e, t, h, a, B);
        } else {
          Px(t);
          var I = O0(t, null, h, a);
          t.child = I;
          for (var G = I; G; )
            G.flags = G.flags & -3 | ha, G = G.sibling;
        }
      } else {
        if (Bf(), h === s)
          return yu(e, t, a);
        na(e, t, h, a);
      }
      return t.child;
    }
    function zT(e, t, a, i, u) {
      return Bf(), Zg(u), t.flags |= Lr, na(e, t, a, i), t.child;
    }
    function FD(e, t, a) {
      j0(t), e === null && Xg(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, d = u.children, h = Ag(i, u);
      return h ? d = null : s !== null && Ag(i, s) && (t.flags |= Na), LT(e, t), na(e, t, d, a), t.child;
    }
    function BD(e, t) {
      return e === null && Xg(t), null;
    }
    function PD(e, t, a, i) {
      ny(e, t);
      var u = t.pendingProps, s = a, d = s._payload, h = s._init, g = h(d);
      t.type = g;
      var S = t.tag = B_(g), w = Bi(g, u), B;
      switch (S) {
        case R:
          return vS(t, g), t.type = g = rd(g), B = dS(null, t, g, w, i), B;
        case T:
          return t.type = g = $S(g), B = NT(null, t, g, w, i), B;
        case oe:
          return t.type = g = YS(g), B = _T(null, t, g, w, i), B;
        case V: {
          if (t.type !== t.elementType) {
            var I = g.propTypes;
            I && Ni(
              I,
              w,
              // Resolved for outer only
              "prop",
              Dt(g)
            );
          }
          return B = MT(
            null,
            t,
            g,
            Bi(g.type, w),
            // The inner type can have defaults too
            i
          ), B;
        }
      }
      var G = "";
      throw g !== null && typeof g == "object" && g.$$typeof === Fn && (G = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + g + ". " + ("Lazy element type must resolve to a class or function." + G));
    }
    function HD(e, t, a, i, u) {
      ny(e, t), t.tag = T;
      var s;
      return bl(a) ? (s = !0, dm(t)) : s = !1, jf(t, u), CT(t, a, i), rS(t, a, i, u), pS(null, t, a, !0, s, u);
    }
    function jD(e, t, a, i) {
      ny(e, t);
      var u = t.pendingProps, s;
      {
        var d = Uf(t, a, !1);
        s = zf(t, d);
      }
      jf(t, i);
      var h, g;
      Xr(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var S = Dt(a) || "Unknown";
          uS[S] || (y("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", S, S), uS[S] = !0);
        }
        t.mode & Bt && zi.recordLegacyContextWarning(t, null), Yn(!0), tv.current = t, h = Qf(null, t, a, u, s, i), g = Gf(), Yn(!1);
      }
      if (Zr(), t.flags |= La, typeof h == "object" && h !== null && typeof h.render == "function" && h.$$typeof === void 0) {
        var w = Dt(a) || "Unknown";
        nv[w] || (y("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", w, w, w), nv[w] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof h == "object" && h !== null && typeof h.render == "function" && h.$$typeof === void 0
      ) {
        {
          var B = Dt(a) || "Unknown";
          nv[B] || (y("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", B, B, B), nv[B] = !0);
        }
        t.tag = T, t.memoizedState = null, t.updateQueue = null;
        var I = !1;
        return bl(a) ? (I = !0, dm(t)) : I = !1, t.memoizedState = h.state !== null && h.state !== void 0 ? h.state : null, dE(t), TT(t, h), rS(t, a, u, i), pS(null, t, a, !0, I, i);
      } else {
        if (t.tag = R, t.mode & Bt) {
          tn(!0);
          try {
            h = Qf(null, t, a, u, s, i), g = Gf();
          } finally {
            tn(!1);
          }
        }
        return Sr() && g && qg(t), na(null, t, h, i), vS(t, a), t.child;
      }
    }
    function vS(e, t) {
      {
        if (t && t.childContextTypes && y("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = fa();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), cS[u] || (cS[u] = !0, y("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var d = Dt(t) || "Unknown";
          rv[d] || (y("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", d), rv[d] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var h = Dt(t) || "Unknown";
          sS[h] || (y("%s: Function components do not support getDerivedStateFromProps.", h), sS[h] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var g = Dt(t) || "Unknown";
          oS[g] || (y("%s: Function components do not support contextType.", g), oS[g] = !0);
        }
      }
    }
    var hS = {
      dehydrated: null,
      treeContext: null,
      retryLane: kt
    };
    function mS(e) {
      return {
        baseLanes: e,
        cachePool: AD(),
        transitions: null
      };
    }
    function VD(e, t) {
      var a = null;
      return {
        baseLanes: ft(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function $D(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return yE(e, qp);
    }
    function YD(e, t) {
      return Es(e.childLanes, t);
    }
    function IT(e, t, a) {
      var i = t.pendingProps;
      eM(t) && (t.flags |= $e);
      var u = Ii.current, s = !1, d = (t.flags & $e) !== Ye;
      if (d || $D(u, e) ? (s = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (u = sD(u, $0)), u = $f(u), Ro(t, u), e === null) {
        Xg(t);
        var h = t.memoizedState;
        if (h !== null) {
          var g = h.dehydrated;
          if (g !== null)
            return KD(t, g);
        }
        var S = i.children, w = i.fallback;
        if (s) {
          var B = qD(t, S, w, a), I = t.child;
          return I.memoizedState = mS(a), t.memoizedState = hS, B;
        } else
          return yS(t, S);
      } else {
        var G = e.memoizedState;
        if (G !== null) {
          var X = G.dehydrated;
          if (X !== null)
            return XD(e, t, d, i, X, G, a);
        }
        if (s) {
          var ee = i.fallback, Re = i.children, We = QD(e, t, Re, ee, a), je = t.child, Tt = e.child.memoizedState;
          return je.memoizedState = Tt === null ? mS(a) : VD(Tt, a), je.childLanes = YD(e, a), t.memoizedState = hS, We;
        } else {
          var yt = i.children, $ = WD(e, t, yt, a);
          return t.memoizedState = null, $;
        }
      }
    }
    function yS(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = gS(u, i);
      return s.return = e, e.child = s, s;
    }
    function qD(e, t, a, i) {
      var u = e.mode, s = e.child, d = {
        mode: "hidden",
        children: t
      }, h, g;
      return (u & pt) === qe && s !== null ? (h = s, h.childLanes = de, h.pendingProps = d, e.mode & Mt && (h.actualDuration = 0, h.actualStartTime = -1, h.selfBaseDuration = 0, h.treeBaseDuration = 0), g = Lo(a, u, i, null)) : (h = gS(d, u), g = Lo(a, u, i, null)), h.return = e, g.return = e, h.sibling = g, e.child = h, g;
    }
    function gS(e, t, a) {
      return FC(e, t, de, null);
    }
    function FT(e, t) {
      return ec(e, t);
    }
    function WD(e, t, a, i) {
      var u = e.child, s = u.sibling, d = FT(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & pt) === qe && (d.lanes = i), d.return = t, d.sibling = null, s !== null) {
        var h = t.deletions;
        h === null ? (t.deletions = [s], t.flags |= va) : h.push(s);
      }
      return t.child = d, d;
    }
    function QD(e, t, a, i, u) {
      var s = t.mode, d = e.child, h = d.sibling, g = {
        mode: "hidden",
        children: a
      }, S;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & pt) === qe && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== d
      ) {
        var w = t.child;
        S = w, S.childLanes = de, S.pendingProps = g, t.mode & Mt && (S.actualDuration = 0, S.actualStartTime = -1, S.selfBaseDuration = d.selfBaseDuration, S.treeBaseDuration = d.treeBaseDuration), t.deletions = null;
      } else
        S = FT(d, g), S.subtreeFlags = d.subtreeFlags & Cn;
      var B;
      return h !== null ? B = ec(h, i) : (B = Lo(i, s, u, null), B.flags |= fn), B.return = t, S.return = t, S.sibling = B, t.child = S, B;
    }
    function ty(e, t, a, i) {
      i !== null && Zg(i), Pf(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, d = yS(t, s);
      return d.flags |= fn, t.memoizedState = null, d;
    }
    function GD(e, t, a, i, u) {
      var s = t.mode, d = {
        mode: "visible",
        children: a
      }, h = gS(d, s), g = Lo(i, s, u, null);
      return g.flags |= fn, h.return = t, g.return = t, h.sibling = g, t.child = h, (t.mode & pt) !== qe && Pf(t, e.child, null, u), g;
    }
    function KD(e, t, a) {
      return (e.mode & pt) === qe ? (y("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Je) : zg(t) ? e.lanes = sr : e.lanes = Jr, null;
    }
    function XD(e, t, a, i, u, s, d) {
      if (a)
        if (t.flags & Lr) {
          t.flags &= -257;
          var $ = aS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return ty(e, t, d, $);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= $e, null;
          var te = i.children, Y = i.fallback, ge = GD(e, t, te, Y, d), Oe = t.child;
          return Oe.memoizedState = mS(d), t.memoizedState = hS, ge;
        }
      else {
        if (Fx(), (t.mode & pt) === qe)
          return ty(
            e,
            t,
            d,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (zg(u)) {
          var h, g, S;
          {
            var w = tx(u);
            h = w.digest, g = w.message, S = w.stack;
          }
          var B;
          g ? B = new Error(g) : B = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var I = aS(B, h, S);
          return ty(e, t, d, I);
        }
        var G = Br(d, e.childLanes);
        if (Pi || G) {
          var X = dy();
          if (X !== null) {
            var ee = lp(X, d);
            if (ee !== kt && ee !== s.retryLane) {
              s.retryLane = ee;
              var Re = jt;
              wa(e, ee), ar(X, e, ee, Re);
            }
          }
          BS();
          var We = aS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return ty(e, t, d, We);
        } else if (u0(u)) {
          t.flags |= $e, t.child = e.child;
          var je = T_.bind(null, e);
          return nx(u, je), null;
        } else {
          Hx(t, u, s.treeContext);
          var Tt = i.children, yt = yS(t, Tt);
          return yt.flags |= ha, yt;
        }
      }
    }
    function BT(e, t, a) {
      e.lanes = ft(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = ft(i.lanes, t)), oE(e.return, t, a);
    }
    function ZD(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === Se) {
          var u = i.memoizedState;
          u !== null && BT(i, a, e);
        } else if (i.tag === He)
          BT(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function JD(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && Lm(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function ek(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !fS[e])
        if (fS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              y('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              y('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              y('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          y('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function tk(e, t) {
      e !== void 0 && !ey[e] && (e !== "collapsed" && e !== "hidden" ? (ey[e] = !0, y('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (ey[e] = !0, y('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function PT(e, t) {
      {
        var a = qn(e), i = !a && typeof It(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return y("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function nk(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (qn(e)) {
          for (var a = 0; a < e.length; a++)
            if (!PT(e[a], a))
              return;
        } else {
          var i = It(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), d = 0; !s.done; s = u.next()) {
                if (!PT(s.value, d))
                  return;
                d++;
              }
          } else
            y('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function ES(e, t, a, i, u) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: u
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = u);
    }
    function HT(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, d = i.children;
      ek(u), tk(s, u), nk(d, u), na(e, t, d, a);
      var h = Ii.current, g = yE(h, qp);
      if (g)
        h = gE(h, qp), t.flags |= $e;
      else {
        var S = e !== null && (e.flags & $e) !== Ye;
        S && ZD(t, t.child, a), h = $f(h);
      }
      if (Ro(t, h), (t.mode & pt) === qe)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var w = JD(t.child), B;
            w === null ? (B = t.child, t.child = null) : (B = w.sibling, w.sibling = null), ES(
              t,
              !1,
              // isBackwards
              B,
              w,
              s
            );
            break;
          }
          case "backwards": {
            var I = null, G = t.child;
            for (t.child = null; G !== null; ) {
              var X = G.alternate;
              if (X !== null && Lm(X) === null) {
                t.child = G;
                break;
              }
              var ee = G.sibling;
              G.sibling = I, I = G, G = ee;
            }
            ES(
              t,
              !0,
              // isBackwards
              I,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            ES(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function rk(e, t, a) {
      vE(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Pf(t, null, i, a) : na(e, t, i, a), t.child;
    }
    var jT = !1;
    function ak(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, d = t.memoizedProps, h = s.value;
      {
        "value" in s || jT || (jT = !0, y("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var g = t.type.propTypes;
        g && Ni(g, s, "prop", "Context.Provider");
      }
      if (N0(t, u, h), d !== null) {
        var S = d.value;
        if (he(S, h)) {
          if (d.children === s.children && !cm())
            return yu(e, t, a);
        } else
          eD(t, u, a);
      }
      var w = s.children;
      return na(e, t, w, a), t.child;
    }
    var VT = !1;
    function ik(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (VT || (VT = !0, y("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && y("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), jf(t, a);
      var d = jn(i);
      Xr(t);
      var h;
      return tv.current = t, Yn(!0), h = s(d), Yn(!1), Zr(), t.flags |= La, na(e, t, h, a), t.child;
    }
    function av() {
      Pi = !0;
    }
    function ny(e, t) {
      (t.mode & pt) === qe && e !== null && (e.alternate = null, t.alternate = null, t.flags |= fn);
    }
    function yu(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), gT(), mv(t.lanes), Br(a, t.childLanes) ? (Zx(e, t), t.child) : null;
    }
    function lk(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var u = i.child;
          if (u === null)
            throw new Error("Expected parent to have a child.");
          for (; u.sibling !== t; )
            if (u = u.sibling, u === null)
              throw new Error("Expected to find the previous sibling.");
          u.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= va) : s.push(e), a.flags |= fn, a;
      }
    }
    function SS(e, t) {
      var a = e.lanes;
      return !!Br(a, t);
    }
    function uk(e, t, a) {
      switch (t.tag) {
        case C:
          UT(t), t.stateNode, Bf();
          break;
        case z:
          j0(t);
          break;
        case T: {
          var i = t.type;
          bl(i) && dm(t);
          break;
        }
        case D:
          vE(t, t.stateNode.containerInfo);
          break;
        case ue: {
          var u = t.memoizedProps.value, s = t.type._context;
          N0(t, s, u);
          break;
        }
        case me:
          {
            var d = Br(a, t.childLanes);
            d && (t.flags |= Et);
            {
              var h = t.stateNode;
              h.effectDuration = 0, h.passiveEffectDuration = 0;
            }
          }
          break;
        case Se: {
          var g = t.memoizedState;
          if (g !== null) {
            if (g.dehydrated !== null)
              return Ro(t, $f(Ii.current)), t.flags |= $e, null;
            var S = t.child, w = S.childLanes;
            if (Br(a, w))
              return IT(e, t, a);
            Ro(t, $f(Ii.current));
            var B = yu(e, t, a);
            return B !== null ? B.sibling : null;
          } else
            Ro(t, $f(Ii.current));
          break;
        }
        case He: {
          var I = (e.flags & $e) !== Ye, G = Br(a, t.childLanes);
          if (I) {
            if (G)
              return HT(e, t, a);
            t.flags |= $e;
          }
          var X = t.memoizedState;
          if (X !== null && (X.rendering = null, X.tail = null, X.lastEffect = null), Ro(t, Ii.current), G)
            break;
          return null;
        }
        case ne:
        case xe:
          return t.lanes = de, AT(e, t, a);
      }
      return yu(e, t, a);
    }
    function $T(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return lk(e, t, KS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || cm() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          Pi = !0;
        else {
          var s = SS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & $e) === Ye)
            return Pi = !1, uk(e, t, a);
          (e.flags & Ic) !== Ye ? Pi = !0 : Pi = !1;
        }
      } else if (Pi = !1, Sr() && Ax(t)) {
        var d = t.index, h = Lx();
        g0(t, h, d);
      }
      switch (t.lanes = de, t.tag) {
        case _:
          return jD(e, t, t.type, a);
        case ce: {
          var g = t.elementType;
          return PD(e, t, g, a);
        }
        case R: {
          var S = t.type, w = t.pendingProps, B = t.elementType === S ? w : Bi(S, w);
          return dS(e, t, S, B, a);
        }
        case T: {
          var I = t.type, G = t.pendingProps, X = t.elementType === I ? G : Bi(I, G);
          return NT(e, t, I, X, a);
        }
        case C:
          return ID(e, t, a);
        case z:
          return FD(e, t, a);
        case J:
          return BD(e, t);
        case Se:
          return IT(e, t, a);
        case D:
          return rk(e, t, a);
        case oe: {
          var ee = t.type, Re = t.pendingProps, We = t.elementType === ee ? Re : Bi(ee, Re);
          return _T(e, t, ee, We, a);
        }
        case W:
          return ND(e, t, a);
        case le:
          return UD(e, t, a);
        case me:
          return zD(e, t, a);
        case ue:
          return ak(e, t, a);
        case L:
          return ik(e, t, a);
        case V: {
          var je = t.type, Tt = t.pendingProps, yt = Bi(je, Tt);
          if (t.type !== t.elementType) {
            var $ = je.propTypes;
            $ && Ni(
              $,
              yt,
              // Resolved for outer only
              "prop",
              Dt(je)
            );
          }
          return yt = Bi(je.type, yt), MT(e, t, je, yt, a);
        }
        case H:
          return OT(e, t, t.type, t.pendingProps, a);
        case ke: {
          var te = t.type, Y = t.pendingProps, ge = t.elementType === te ? Y : Bi(te, Y);
          return HD(e, t, te, ge, a);
        }
        case He:
          return HT(e, t, a);
        case Ne:
          break;
        case ne:
          return AT(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Kf(e) {
      e.flags |= Et;
    }
    function YT(e) {
      e.flags |= on, e.flags |= ro;
    }
    var qT, bS, WT, QT;
    qT = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === z || u.tag === J)
          _R(e, u.stateNode);
        else if (u.tag !== D) {
          if (u.child !== null) {
            u.child.return = u, u = u.child;
            continue;
          }
        }
        if (u === t)
          return;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === t)
            return;
          u = u.return;
        }
        u.sibling.return = u.return, u = u.sibling;
      }
    }, bS = function(e, t) {
    }, WT = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var d = t.stateNode, h = hE(), g = OR(d, a, s, i, u, h);
        t.updateQueue = g, g && Kf(t);
      }
    }, QT = function(e, t, a, i) {
      a !== i && Kf(t);
    };
    function iv(e, t) {
      if (!Sr())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var u = e.tail, s = null; u !== null; )
              u.alternate !== null && (s = u), u = u.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function Tr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = de, i = Ye;
      if (t) {
        if ((e.mode & Mt) !== qe) {
          for (var g = e.selfBaseDuration, S = e.child; S !== null; )
            a = ft(a, ft(S.lanes, S.childLanes)), i |= S.subtreeFlags & Cn, i |= S.flags & Cn, g += S.treeBaseDuration, S = S.sibling;
          e.treeBaseDuration = g;
        } else
          for (var w = e.child; w !== null; )
            a = ft(a, ft(w.lanes, w.childLanes)), i |= w.subtreeFlags & Cn, i |= w.flags & Cn, w.return = e, w = w.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & Mt) !== qe) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, d = e.child; d !== null; )
            a = ft(a, ft(d.lanes, d.childLanes)), i |= d.subtreeFlags, i |= d.flags, u += d.actualDuration, s += d.treeBaseDuration, d = d.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var h = e.child; h !== null; )
            a = ft(a, ft(h.lanes, h.childLanes)), i |= h.subtreeFlags, i |= h.flags, h.return = e, h = h.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function ok(e, t, a) {
      if (qx() && (t.mode & pt) !== qe && (t.flags & $e) === Ye)
        return R0(t), Bf(), t.flags |= Lr | rs | Ur, !1;
      var i = ym(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if ($x(t), Tr(t), (t.mode & Mt) !== qe) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Bf(), (t.flags & $e) === Ye && (t.memoizedState = null), t.flags |= Et, Tr(t), (t.mode & Mt) !== qe) {
            var d = a !== null;
            if (d) {
              var h = t.child;
              h !== null && (t.treeBaseDuration -= h.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return x0(), !0;
    }
    function GT(e, t, a) {
      var i = t.pendingProps;
      switch (Wg(t), t.tag) {
        case _:
        case ce:
        case H:
        case R:
        case oe:
        case W:
        case le:
        case me:
        case L:
        case V:
          return Tr(t), null;
        case T: {
          var u = t.type;
          return bl(u) && fm(t), Tr(t), null;
        }
        case C: {
          var s = t.stateNode;
          if (Vf(t), Vg(t), SE(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var d = ym(t);
            if (d)
              Kf(t);
            else if (e !== null) {
              var h = e.memoizedState;
              // Check if this is a client root
              (!h.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Lr) !== Ye) && (t.flags |= On, x0());
            }
          }
          return bS(e, t), Tr(t), null;
        }
        case z: {
          mE(t);
          var g = H0(), S = t.type;
          if (e !== null && t.stateNode != null)
            WT(e, t, S, i, g), e.ref !== t.ref && YT(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Tr(t), null;
            }
            var w = hE(), B = ym(t);
            if (B)
              jx(t, g, w) && Kf(t);
            else {
              var I = kR(S, i, g, w, t);
              qT(I, t, !1, !1), t.stateNode = I, MR(I, S, i, g) && Kf(t);
            }
            t.ref !== null && YT(t);
          }
          return Tr(t), null;
        }
        case J: {
          var G = i;
          if (e && t.stateNode != null) {
            var X = e.memoizedProps;
            QT(e, t, X, G);
          } else {
            if (typeof G != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var ee = H0(), Re = hE(), We = ym(t);
            We ? Vx(t) && Kf(t) : t.stateNode = AR(G, ee, Re, t);
          }
          return Tr(t), null;
        }
        case Se: {
          Yf(t);
          var je = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Tt = ok(e, t, je);
            if (!Tt)
              return t.flags & Ur ? t : null;
          }
          if ((t.flags & $e) !== Ye)
            return t.lanes = a, (t.mode & Mt) !== qe && YE(t), t;
          var yt = je !== null, $ = e !== null && e.memoizedState !== null;
          if (yt !== $ && yt) {
            var te = t.child;
            if (te.flags |= Tn, (t.mode & pt) !== qe) {
              var Y = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              Y || yE(Ii.current, $0) ? s_() : BS();
            }
          }
          var ge = t.updateQueue;
          if (ge !== null && (t.flags |= Et), Tr(t), (t.mode & Mt) !== qe && yt) {
            var Oe = t.child;
            Oe !== null && (t.treeBaseDuration -= Oe.treeBaseDuration);
          }
          return null;
        }
        case D:
          return Vf(t), bS(e, t), e === null && Rx(t.stateNode.containerInfo), Tr(t), null;
        case ue:
          var De = t.type._context;
          return uE(De, t), Tr(t), null;
        case ke: {
          var et = t.type;
          return bl(et) && fm(t), Tr(t), null;
        }
        case He: {
          Yf(t);
          var lt = t.memoizedState;
          if (lt === null)
            return Tr(t), null;
          var Ht = (t.flags & $e) !== Ye, Lt = lt.rendering;
          if (Lt === null)
            if (Ht)
              iv(lt, !1);
            else {
              var Nn = f_() && (e === null || (e.flags & $e) === Ye);
              if (!Nn)
                for (var Nt = t.child; Nt !== null; ) {
                  var _n = Lm(Nt);
                  if (_n !== null) {
                    Ht = !0, t.flags |= $e, iv(lt, !1);
                    var qr = _n.updateQueue;
                    return qr !== null && (t.updateQueue = qr, t.flags |= Et), t.subtreeFlags = Ye, Jx(t, a), Ro(t, gE(Ii.current, qp)), t.child;
                  }
                  Nt = Nt.sibling;
                }
              lt.tail !== null && An() > mC() && (t.flags |= $e, Ht = !0, iv(lt, !1), t.lanes = Xd);
            }
          else {
            if (!Ht) {
              var Dr = Lm(Lt);
              if (Dr !== null) {
                t.flags |= $e, Ht = !0;
                var Ha = Dr.updateQueue;
                if (Ha !== null && (t.updateQueue = Ha, t.flags |= Et), iv(lt, !0), lt.tail === null && lt.tailMode === "hidden" && !Lt.alternate && !Sr())
                  return Tr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              An() * 2 - lt.renderingStartTime > mC() && a !== Jr && (t.flags |= $e, Ht = !0, iv(lt, !1), t.lanes = Xd);
            }
            if (lt.isBackwards)
              Lt.sibling = t.child, t.child = Lt;
            else {
              var ia = lt.last;
              ia !== null ? ia.sibling = Lt : t.child = Lt, lt.last = Lt;
            }
          }
          if (lt.tail !== null) {
            var la = lt.tail;
            lt.rendering = la, lt.tail = la.sibling, lt.renderingStartTime = An(), la.sibling = null;
            var Wr = Ii.current;
            return Ht ? Wr = gE(Wr, qp) : Wr = $f(Wr), Ro(t, Wr), la;
          }
          return Tr(t), null;
        }
        case Ne:
          break;
        case ne:
        case xe: {
          FS(t);
          var Tu = t.memoizedState, ad = Tu !== null;
          if (e !== null) {
            var bv = e.memoizedState, _l = bv !== null;
            _l !== ad && (t.flags |= Tn);
          }
          return !ad || (t.mode & pt) === qe ? Tr(t) : Br(kl, Jr) && (Tr(t), t.subtreeFlags & (fn | Et) && (t.flags |= Tn)), null;
        }
        case gt:
          return null;
        case ut:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function sk(e, t, a) {
      switch (Wg(t), t.tag) {
        case T: {
          var i = t.type;
          bl(i) && fm(t);
          var u = t.flags;
          return u & Ur ? (t.flags = u & -65537 | $e, (t.mode & Mt) !== qe && YE(t), t) : null;
        }
        case C: {
          t.stateNode, Vf(t), Vg(t), SE();
          var s = t.flags;
          return (s & Ur) !== Ye && (s & $e) === Ye ? (t.flags = s & -65537 | $e, t) : null;
        }
        case z:
          return mE(t), null;
        case Se: {
          Yf(t);
          var d = t.memoizedState;
          if (d !== null && d.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Bf();
          }
          var h = t.flags;
          return h & Ur ? (t.flags = h & -65537 | $e, (t.mode & Mt) !== qe && YE(t), t) : null;
        }
        case He:
          return Yf(t), null;
        case D:
          return Vf(t), null;
        case ue:
          var g = t.type._context;
          return uE(g, t), null;
        case ne:
        case xe:
          return FS(t), null;
        case gt:
          return null;
        default:
          return null;
      }
    }
    function KT(e, t, a) {
      switch (Wg(t), t.tag) {
        case T: {
          var i = t.type.childContextTypes;
          i != null && fm(t);
          break;
        }
        case C: {
          t.stateNode, Vf(t), Vg(t), SE();
          break;
        }
        case z: {
          mE(t);
          break;
        }
        case D:
          Vf(t);
          break;
        case Se:
          Yf(t);
          break;
        case He:
          Yf(t);
          break;
        case ue:
          var u = t.type._context;
          uE(u, t);
          break;
        case ne:
        case xe:
          FS(t);
          break;
      }
    }
    var XT = null;
    XT = /* @__PURE__ */ new Set();
    var ry = !1, Cr = !1, ck = typeof WeakSet == "function" ? WeakSet : Set, Fe = null, Xf = null, Zf = null;
    function fk(e) {
      rl(null, function() {
        throw e;
      }), ns();
    }
    var dk = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Mt)
        try {
          xl(), t.componentWillUnmount();
        } finally {
          Rl(e);
        }
      else
        t.componentWillUnmount();
    };
    function ZT(e, t) {
      try {
        ko(Zn, e);
      } catch (a) {
        Gt(e, t, a);
      }
    }
    function TS(e, t, a) {
      try {
        dk(e, a);
      } catch (i) {
        Gt(e, t, i);
      }
    }
    function pk(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        Gt(e, t, i);
      }
    }
    function JT(e, t) {
      try {
        tC(e);
      } catch (a) {
        Gt(e, t, a);
      }
    }
    function Jf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (Vt && cn && e.mode & Mt)
              try {
                xl(), i = a(null);
              } finally {
                Rl(e);
              }
            else
              i = a(null);
          } catch (u) {
            Gt(e, t, u);
          }
          typeof i == "function" && y("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", ct(e));
        } else
          a.current = null;
    }
    function ay(e, t, a) {
      try {
        a();
      } catch (i) {
        Gt(e, t, i);
      }
    }
    var eC = !1;
    function vk(e, t) {
      xR(e.containerInfo), Fe = t, hk();
      var a = eC;
      return eC = !1, a;
    }
    function hk() {
      for (; Fe !== null; ) {
        var e = Fe, t = e.child;
        (e.subtreeFlags & il) !== Ye && t !== null ? (t.return = e, Fe = t) : mk();
      }
    }
    function mk() {
      for (; Fe !== null; ) {
        var e = Fe;
        Qt(e);
        try {
          yk(e);
        } catch (a) {
          Gt(e, e.return, a);
        }
        un();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Fe = t;
          return;
        }
        Fe = e.return;
      }
    }
    function yk(e) {
      var t = e.alternate, a = e.flags;
      if ((a & On) !== Ye) {
        switch (Qt(e), e.tag) {
          case R:
          case oe:
          case H:
            break;
          case T: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !Gs && (s.props !== e.memoizedProps && y("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ct(e) || "instance"), s.state !== e.memoizedState && y("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ct(e) || "instance"));
              var d = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : Bi(e.type, i), u);
              {
                var h = XT;
                d === void 0 && !h.has(e.type) && (h.add(e.type), y("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", ct(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = d;
            }
            break;
          }
          case C: {
            {
              var g = e.stateNode;
              XR(g.containerInfo);
            }
            break;
          }
          case z:
          case J:
          case D:
          case ke:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        un();
      }
    }
    function Hi(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, d = s;
        do {
          if ((d.tag & e) === e) {
            var h = d.destroy;
            d.destroy = void 0, h !== void 0 && ((e & br) !== Ra ? ki(t) : (e & Zn) !== Ra && is(t), (e & Tl) !== Ra && gv(!0), ay(t, a, h), (e & Tl) !== Ra && gv(!1), (e & br) !== Ra ? sl() : (e & Zn) !== Ra && Gd());
          }
          d = d.next;
        } while (d !== s);
      }
    }
    function ko(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & br) !== Ra ? Qd(t) : (e & Zn) !== Ra && Vc(t);
            var d = s.create;
            (e & Tl) !== Ra && gv(!0), s.destroy = d(), (e & Tl) !== Ra && gv(!1), (e & br) !== Ra ? sh() : (e & Zn) !== Ra && ch();
            {
              var h = s.destroy;
              if (h !== void 0 && typeof h != "function") {
                var g = void 0;
                (s.tag & Zn) !== Ye ? g = "useLayoutEffect" : (s.tag & Tl) !== Ye ? g = "useInsertionEffect" : g = "useEffect";
                var S = void 0;
                h === null ? S = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof h.then == "function" ? S = `

It looks like you wrote ` + g + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + g + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : S = " You returned: " + h, y("%s must not return anything besides a function, which is used for clean-up.%s", g, S);
              }
            }
          }
          s = s.next;
        } while (s !== u);
      }
    }
    function gk(e, t) {
      if ((t.flags & Et) !== Ye)
        switch (t.tag) {
          case me: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, d = mT(), h = t.alternate === null ? "mount" : "update";
            hT() && (h = "nested-update"), typeof s == "function" && s(u, h, a, d);
            var g = t.return;
            e: for (; g !== null; ) {
              switch (g.tag) {
                case C:
                  var S = g.stateNode;
                  S.passiveEffectDuration += a;
                  break e;
                case me:
                  var w = g.stateNode;
                  w.passiveEffectDuration += a;
                  break e;
              }
              g = g.return;
            }
            break;
          }
        }
    }
    function Ek(e, t, a, i) {
      if ((a.flags & ul) !== Ye)
        switch (a.tag) {
          case R:
          case oe:
          case H: {
            if (!Cr)
              if (a.mode & Mt)
                try {
                  xl(), ko(Zn | Xn, a);
                } finally {
                  Rl(a);
                }
              else
                ko(Zn | Xn, a);
            break;
          }
          case T: {
            var u = a.stateNode;
            if (a.flags & Et && !Cr)
              if (t === null)
                if (a.type === a.elementType && !Gs && (u.props !== a.memoizedProps && y("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ct(a) || "instance"), u.state !== a.memoizedState && y("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ct(a) || "instance")), a.mode & Mt)
                  try {
                    xl(), u.componentDidMount();
                  } finally {
                    Rl(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : Bi(a.type, t.memoizedProps), d = t.memoizedState;
                if (a.type === a.elementType && !Gs && (u.props !== a.memoizedProps && y("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ct(a) || "instance"), u.state !== a.memoizedState && y("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ct(a) || "instance")), a.mode & Mt)
                  try {
                    xl(), u.componentDidUpdate(s, d, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Rl(a);
                  }
                else
                  u.componentDidUpdate(s, d, u.__reactInternalSnapshotBeforeUpdate);
              }
            var h = a.updateQueue;
            h !== null && (a.type === a.elementType && !Gs && (u.props !== a.memoizedProps && y("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ct(a) || "instance"), u.state !== a.memoizedState && y("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ct(a) || "instance")), P0(a, h, u));
            break;
          }
          case C: {
            var g = a.updateQueue;
            if (g !== null) {
              var S = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case z:
                    S = a.child.stateNode;
                    break;
                  case T:
                    S = a.child.stateNode;
                    break;
                }
              P0(a, g, S);
            }
            break;
          }
          case z: {
            var w = a.stateNode;
            if (t === null && a.flags & Et) {
              var B = a.type, I = a.memoizedProps;
              IR(w, B, I);
            }
            break;
          }
          case J:
            break;
          case D:
            break;
          case me: {
            {
              var G = a.memoizedProps, X = G.onCommit, ee = G.onRender, Re = a.stateNode.effectDuration, We = mT(), je = t === null ? "mount" : "update";
              hT() && (je = "nested-update"), typeof ee == "function" && ee(a.memoizedProps.id, je, a.actualDuration, a.treeBaseDuration, a.actualStartTime, We);
              {
                typeof X == "function" && X(a.memoizedProps.id, je, Re, We), m_(a);
                var Tt = a.return;
                e: for (; Tt !== null; ) {
                  switch (Tt.tag) {
                    case C:
                      var yt = Tt.stateNode;
                      yt.effectDuration += Re;
                      break e;
                    case me:
                      var $ = Tt.stateNode;
                      $.effectDuration += Re;
                      break e;
                  }
                  Tt = Tt.return;
                }
              }
            }
            break;
          }
          case Se: {
            Dk(e, a);
            break;
          }
          case He:
          case ke:
          case Ne:
          case ne:
          case xe:
          case ut:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Cr || a.flags & on && tC(a);
    }
    function Sk(e) {
      switch (e.tag) {
        case R:
        case oe:
        case H: {
          if (e.mode & Mt)
            try {
              xl(), ZT(e, e.return);
            } finally {
              Rl(e);
            }
          else
            ZT(e, e.return);
          break;
        }
        case T: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && pk(e, e.return, t), JT(e, e.return);
          break;
        }
        case z: {
          JT(e, e.return);
          break;
        }
      }
    }
    function bk(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === z) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? WR(u) : GR(i.stateNode, i.memoizedProps);
            } catch (d) {
              Gt(e, e.return, d);
            }
          }
        } else if (i.tag === J) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? QR(s) : KR(s, i.memoizedProps);
            } catch (d) {
              Gt(e, e.return, d);
            }
        } else if (!((i.tag === ne || i.tag === xe) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function tC(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case z:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & Mt)
            try {
              xl(), u = t(i);
            } finally {
              Rl(e);
            }
          else
            u = t(i);
          typeof u == "function" && y("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", ct(e));
        } else
          t.hasOwnProperty("current") || y("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", ct(e)), t.current = i;
      }
    }
    function Tk(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function nC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, nC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === z) {
          var a = e.stateNode;
          a !== null && kx(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function Ck(e) {
      for (var t = e.return; t !== null; ) {
        if (rC(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function rC(e) {
      return e.tag === z || e.tag === C || e.tag === D;
    }
    function aC(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || rC(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== z && t.tag !== J && t.tag !== Ue; ) {
          if (t.flags & fn || t.child === null || t.tag === D)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & fn))
          return t.stateNode;
      }
    }
    function wk(e) {
      var t = Ck(e);
      switch (t.tag) {
        case z: {
          var a = t.stateNode;
          t.flags & Na && (l0(a), t.flags &= -33);
          var i = aC(e);
          wS(e, i, a);
          break;
        }
        case C:
        case D: {
          var u = t.stateNode.containerInfo, s = aC(e);
          CS(e, s, u);
          break;
        }
        // eslint-disable-next-line-no-fallthrough
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function CS(e, t, a) {
      var i = e.tag, u = i === z || i === J;
      if (u) {
        var s = e.stateNode;
        t ? VR(a, s, t) : HR(a, s);
      } else if (i !== D) {
        var d = e.child;
        if (d !== null) {
          CS(d, t, a);
          for (var h = d.sibling; h !== null; )
            CS(h, t, a), h = h.sibling;
        }
      }
    }
    function wS(e, t, a) {
      var i = e.tag, u = i === z || i === J;
      if (u) {
        var s = e.stateNode;
        t ? jR(a, s, t) : PR(a, s);
      } else if (i !== D) {
        var d = e.child;
        if (d !== null) {
          wS(d, t, a);
          for (var h = d.sibling; h !== null; )
            wS(h, t, a), h = h.sibling;
        }
      }
    }
    var wr = null, ji = !1;
    function Rk(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case z: {
              wr = i.stateNode, ji = !1;
              break e;
            }
            case C: {
              wr = i.stateNode.containerInfo, ji = !0;
              break e;
            }
            case D: {
              wr = i.stateNode.containerInfo, ji = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (wr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        iC(e, t, a), wr = null, ji = !1;
      }
      Tk(a);
    }
    function _o(e, t, a) {
      for (var i = a.child; i !== null; )
        iC(e, t, i), i = i.sibling;
    }
    function iC(e, t, a) {
      switch (Yd(a), a.tag) {
        case z:
          Cr || Jf(a, t);
        // eslint-disable-next-line-no-fallthrough
        case J: {
          {
            var i = wr, u = ji;
            wr = null, _o(e, t, a), wr = i, ji = u, wr !== null && (ji ? YR(wr, a.stateNode) : $R(wr, a.stateNode));
          }
          return;
        }
        case Ue: {
          wr !== null && (ji ? qR(wr, a.stateNode) : Ug(wr, a.stateNode));
          return;
        }
        case D: {
          {
            var s = wr, d = ji;
            wr = a.stateNode.containerInfo, ji = !0, _o(e, t, a), wr = s, ji = d;
          }
          return;
        }
        case R:
        case oe:
        case V:
        case H: {
          if (!Cr) {
            var h = a.updateQueue;
            if (h !== null) {
              var g = h.lastEffect;
              if (g !== null) {
                var S = g.next, w = S;
                do {
                  var B = w, I = B.destroy, G = B.tag;
                  I !== void 0 && ((G & Tl) !== Ra ? ay(a, t, I) : (G & Zn) !== Ra && (is(a), a.mode & Mt ? (xl(), ay(a, t, I), Rl(a)) : ay(a, t, I), Gd())), w = w.next;
                } while (w !== S);
              }
            }
          }
          _o(e, t, a);
          return;
        }
        case T: {
          if (!Cr) {
            Jf(a, t);
            var X = a.stateNode;
            typeof X.componentWillUnmount == "function" && TS(a, t, X);
          }
          _o(e, t, a);
          return;
        }
        case Ne: {
          _o(e, t, a);
          return;
        }
        case ne: {
          if (
            // TODO: Remove this dead flag
            a.mode & pt
          ) {
            var ee = Cr;
            Cr = ee || a.memoizedState !== null, _o(e, t, a), Cr = ee;
          } else
            _o(e, t, a);
          break;
        }
        default: {
          _o(e, t, a);
          return;
        }
      }
    }
    function xk(e) {
      e.memoizedState;
    }
    function Dk(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && fx(s);
          }
        }
      }
    }
    function lC(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new ck()), t.forEach(function(i) {
          var u = C_.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), Fr)
              if (Xf !== null && Zf !== null)
                yv(Zf, Xf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function kk(e, t, a) {
      Xf = a, Zf = e, Qt(t), uC(t, e), Qt(t), Xf = null, Zf = null;
    }
    function Vi(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            Rk(e, t, s);
          } catch (g) {
            Gt(s, t, g);
          }
        }
      var d = Po();
      if (t.subtreeFlags & ll)
        for (var h = t.child; h !== null; )
          Qt(h), uC(h, e), h = h.sibling;
      Qt(d);
    }
    function uC(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case R:
        case oe:
        case V:
        case H: {
          if (Vi(t, e), Dl(e), u & Et) {
            try {
              Hi(Tl | Xn, e, e.return), ko(Tl | Xn, e);
            } catch (et) {
              Gt(e, e.return, et);
            }
            if (e.mode & Mt) {
              try {
                xl(), Hi(Zn | Xn, e, e.return);
              } catch (et) {
                Gt(e, e.return, et);
              }
              Rl(e);
            } else
              try {
                Hi(Zn | Xn, e, e.return);
              } catch (et) {
                Gt(e, e.return, et);
              }
          }
          return;
        }
        case T: {
          Vi(t, e), Dl(e), u & on && i !== null && Jf(i, i.return);
          return;
        }
        case z: {
          Vi(t, e), Dl(e), u & on && i !== null && Jf(i, i.return);
          {
            if (e.flags & Na) {
              var s = e.stateNode;
              try {
                l0(s);
              } catch (et) {
                Gt(e, e.return, et);
              }
            }
            if (u & Et) {
              var d = e.stateNode;
              if (d != null) {
                var h = e.memoizedProps, g = i !== null ? i.memoizedProps : h, S = e.type, w = e.updateQueue;
                if (e.updateQueue = null, w !== null)
                  try {
                    FR(d, w, S, g, h, e);
                  } catch (et) {
                    Gt(e, e.return, et);
                  }
              }
            }
          }
          return;
        }
        case J: {
          if (Vi(t, e), Dl(e), u & Et) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var B = e.stateNode, I = e.memoizedProps, G = i !== null ? i.memoizedProps : I;
            try {
              BR(B, G, I);
            } catch (et) {
              Gt(e, e.return, et);
            }
          }
          return;
        }
        case C: {
          if (Vi(t, e), Dl(e), u & Et && i !== null) {
            var X = i.memoizedState;
            if (X.isDehydrated)
              try {
                cx(t.containerInfo);
              } catch (et) {
                Gt(e, e.return, et);
              }
          }
          return;
        }
        case D: {
          Vi(t, e), Dl(e);
          return;
        }
        case Se: {
          Vi(t, e), Dl(e);
          var ee = e.child;
          if (ee.flags & Tn) {
            var Re = ee.stateNode, We = ee.memoizedState, je = We !== null;
            if (Re.isHidden = je, je) {
              var Tt = ee.alternate !== null && ee.alternate.memoizedState !== null;
              Tt || o_();
            }
          }
          if (u & Et) {
            try {
              xk(e);
            } catch (et) {
              Gt(e, e.return, et);
            }
            lC(e);
          }
          return;
        }
        case ne: {
          var yt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & pt
          ) {
            var $ = Cr;
            Cr = $ || yt, Vi(t, e), Cr = $;
          } else
            Vi(t, e);
          if (Dl(e), u & Tn) {
            var te = e.stateNode, Y = e.memoizedState, ge = Y !== null, Oe = e;
            if (te.isHidden = ge, ge && !yt && (Oe.mode & pt) !== qe) {
              Fe = Oe;
              for (var De = Oe.child; De !== null; )
                Fe = De, Mk(De), De = De.sibling;
            }
            bk(Oe, ge);
          }
          return;
        }
        case He: {
          Vi(t, e), Dl(e), u & Et && lC(e);
          return;
        }
        case Ne:
          return;
        default: {
          Vi(t, e), Dl(e);
          return;
        }
      }
    }
    function Dl(e) {
      var t = e.flags;
      if (t & fn) {
        try {
          wk(e);
        } catch (a) {
          Gt(e, e.return, a);
        }
        e.flags &= -3;
      }
      t & ha && (e.flags &= -4097);
    }
    function _k(e, t, a) {
      Xf = a, Zf = t, Fe = e, oC(e, t, a), Xf = null, Zf = null;
    }
    function oC(e, t, a) {
      for (var i = (e.mode & pt) !== qe; Fe !== null; ) {
        var u = Fe, s = u.child;
        if (u.tag === ne && i) {
          var d = u.memoizedState !== null, h = d || ry;
          if (h) {
            RS(e, t, a);
            continue;
          } else {
            var g = u.alternate, S = g !== null && g.memoizedState !== null, w = S || Cr, B = ry, I = Cr;
            ry = h, Cr = w, Cr && !I && (Fe = u, Ok(u));
            for (var G = s; G !== null; )
              Fe = G, oC(
                G,
                // New root; bubble back up to here and stop.
                t,
                a
              ), G = G.sibling;
            Fe = u, ry = B, Cr = I, RS(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & ul) !== Ye && s !== null ? (s.return = u, Fe = s) : RS(e, t, a);
      }
    }
    function RS(e, t, a) {
      for (; Fe !== null; ) {
        var i = Fe;
        if ((i.flags & ul) !== Ye) {
          var u = i.alternate;
          Qt(i);
          try {
            Ek(t, u, i, a);
          } catch (d) {
            Gt(i, i.return, d);
          }
          un();
        }
        if (i === e) {
          Fe = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, Fe = s;
          return;
        }
        Fe = i.return;
      }
    }
    function Mk(e) {
      for (; Fe !== null; ) {
        var t = Fe, a = t.child;
        switch (t.tag) {
          case R:
          case oe:
          case V:
          case H: {
            if (t.mode & Mt)
              try {
                xl(), Hi(Zn, t, t.return);
              } finally {
                Rl(t);
              }
            else
              Hi(Zn, t, t.return);
            break;
          }
          case T: {
            Jf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && TS(t, t.return, i);
            break;
          }
          case z: {
            Jf(t, t.return);
            break;
          }
          case ne: {
            var u = t.memoizedState !== null;
            if (u) {
              sC(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Fe = a) : sC(e);
      }
    }
    function sC(e) {
      for (; Fe !== null; ) {
        var t = Fe;
        if (t === e) {
          Fe = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Fe = a;
          return;
        }
        Fe = t.return;
      }
    }
    function Ok(e) {
      for (; Fe !== null; ) {
        var t = Fe, a = t.child;
        if (t.tag === ne) {
          var i = t.memoizedState !== null;
          if (i) {
            cC(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Fe = a) : cC(e);
      }
    }
    function cC(e) {
      for (; Fe !== null; ) {
        var t = Fe;
        Qt(t);
        try {
          Sk(t);
        } catch (i) {
          Gt(t, t.return, i);
        }
        if (un(), t === e) {
          Fe = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Fe = a;
          return;
        }
        Fe = t.return;
      }
    }
    function Ak(e, t, a, i) {
      Fe = t, Lk(t, e, a, i);
    }
    function Lk(e, t, a, i) {
      for (; Fe !== null; ) {
        var u = Fe, s = u.child;
        (u.subtreeFlags & xi) !== Ye && s !== null ? (s.return = u, Fe = s) : Nk(e, t, a, i);
      }
    }
    function Nk(e, t, a, i) {
      for (; Fe !== null; ) {
        var u = Fe;
        if ((u.flags & Nr) !== Ye) {
          Qt(u);
          try {
            Uk(t, u, a, i);
          } catch (d) {
            Gt(u, u.return, d);
          }
          un();
        }
        if (u === e) {
          Fe = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, Fe = s;
          return;
        }
        Fe = u.return;
      }
    }
    function Uk(e, t, a, i) {
      switch (t.tag) {
        case R:
        case oe:
        case H: {
          if (t.mode & Mt) {
            $E();
            try {
              ko(br | Xn, t);
            } finally {
              VE(t);
            }
          } else
            ko(br | Xn, t);
          break;
        }
      }
    }
    function zk(e) {
      Fe = e, Ik();
    }
    function Ik() {
      for (; Fe !== null; ) {
        var e = Fe, t = e.child;
        if ((Fe.flags & va) !== Ye) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              Fe = u, Pk(u, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var d = s.child;
                if (d !== null) {
                  s.child = null;
                  do {
                    var h = d.sibling;
                    d.sibling = null, d = h;
                  } while (d !== null);
                }
              }
            }
            Fe = e;
          }
        }
        (e.subtreeFlags & xi) !== Ye && t !== null ? (t.return = e, Fe = t) : Fk();
      }
    }
    function Fk() {
      for (; Fe !== null; ) {
        var e = Fe;
        (e.flags & Nr) !== Ye && (Qt(e), Bk(e), un());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Fe = t;
          return;
        }
        Fe = e.return;
      }
    }
    function Bk(e) {
      switch (e.tag) {
        case R:
        case oe:
        case H: {
          e.mode & Mt ? ($E(), Hi(br | Xn, e, e.return), VE(e)) : Hi(br | Xn, e, e.return);
          break;
        }
      }
    }
    function Pk(e, t) {
      for (; Fe !== null; ) {
        var a = Fe;
        Qt(a), jk(a, t), un();
        var i = a.child;
        i !== null ? (i.return = a, Fe = i) : Hk(e);
      }
    }
    function Hk(e) {
      for (; Fe !== null; ) {
        var t = Fe, a = t.sibling, i = t.return;
        if (nC(t), t === e) {
          Fe = null;
          return;
        }
        if (a !== null) {
          a.return = i, Fe = a;
          return;
        }
        Fe = i;
      }
    }
    function jk(e, t) {
      switch (e.tag) {
        case R:
        case oe:
        case H: {
          e.mode & Mt ? ($E(), Hi(br, e, t), VE(e)) : Hi(br, e, t);
          break;
        }
      }
    }
    function Vk(e) {
      switch (e.tag) {
        case R:
        case oe:
        case H: {
          try {
            ko(Zn | Xn, e);
          } catch (a) {
            Gt(e, e.return, a);
          }
          break;
        }
        case T: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            Gt(e, e.return, a);
          }
          break;
        }
      }
    }
    function $k(e) {
      switch (e.tag) {
        case R:
        case oe:
        case H: {
          try {
            ko(br | Xn, e);
          } catch (t) {
            Gt(e, e.return, t);
          }
          break;
        }
      }
    }
    function Yk(e) {
      switch (e.tag) {
        case R:
        case oe:
        case H: {
          try {
            Hi(Zn | Xn, e, e.return);
          } catch (a) {
            Gt(e, e.return, a);
          }
          break;
        }
        case T: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && TS(e, e.return, t);
          break;
        }
      }
    }
    function qk(e) {
      switch (e.tag) {
        case R:
        case oe:
        case H:
          try {
            Hi(br | Xn, e, e.return);
          } catch (t) {
            Gt(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var lv = Symbol.for;
      lv("selector.component"), lv("selector.has_pseudo_class"), lv("selector.role"), lv("selector.test_id"), lv("selector.text");
    }
    var Wk = [];
    function Qk() {
      Wk.forEach(function(e) {
        return e();
      });
    }
    var Gk = m.ReactCurrentActQueue;
    function Kk(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function fC() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && Gk.current !== null && y("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var Xk = Math.ceil, xS = m.ReactCurrentDispatcher, DS = m.ReactCurrentOwner, Rr = m.ReactCurrentBatchConfig, $i = m.ReactCurrentActQueue, tr = (
      /*             */
      0
    ), dC = (
      /*               */
      1
    ), xr = (
      /*                */
      2
    ), ci = (
      /*                */
      4
    ), gu = 0, uv = 1, Ks = 2, iy = 3, ov = 4, pC = 5, kS = 6, bt = tr, ra = null, yn = null, nr = de, kl = de, _S = Eo(de), rr = gu, sv = null, ly = de, cv = de, uy = de, fv = null, xa = null, MS = 0, vC = 500, hC = 1 / 0, Zk = 500, Eu = null;
    function dv() {
      hC = An() + Zk;
    }
    function mC() {
      return hC;
    }
    var oy = !1, OS = null, ed = null, Xs = !1, Mo = null, pv = de, AS = [], LS = null, Jk = 50, vv = 0, NS = null, US = !1, sy = !1, e_ = 50, td = 0, cy = null, hv = jt, fy = de, yC = !1;
    function dy() {
      return ra;
    }
    function aa() {
      return (bt & (xr | ci)) !== tr ? An() : (hv !== jt || (hv = An()), hv);
    }
    function Oo(e) {
      var t = e.mode;
      if ((t & pt) === qe)
        return Je;
      if ((bt & xr) !== tr && nr !== de)
        return gs(nr);
      var a = Gx() !== Qx;
      if (a) {
        if (Rr.transition !== null) {
          var i = Rr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return fy === kt && (fy = rp()), fy;
      }
      var u = ba();
      if (u !== kt)
        return u;
      var s = LR();
      return s;
    }
    function t_(e) {
      var t = e.mode;
      return (t & pt) === qe ? Je : mh();
    }
    function ar(e, t, a, i) {
      R_(), yC && y("useInsertionEffect must not schedule updates."), US && (sy = !0), uo(e, a, i), (bt & xr) !== de && e === ra ? k_(t) : (Fr && bs(e, t, a), __(t), e === ra && ((bt & xr) === tr && (cv = ft(cv, a)), rr === ov && Ao(e, nr)), Da(e, i), a === Je && bt === tr && (t.mode & pt) === qe && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !$i.isBatchingLegacy && (dv(), y0()));
    }
    function n_(e, t, a) {
      var i = e.current;
      i.lanes = t, uo(e, t, a), Da(e, a);
    }
    function r_(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (bt & xr) !== tr
      );
    }
    function Da(e, t) {
      var a = e.callbackNode;
      cf(e, t);
      var i = sf(e, e === ra ? nr : de);
      if (i === de) {
        a !== null && LC(a), e.callbackNode = null, e.callbackPriority = kt;
        return;
      }
      var u = dl(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !($i.current !== null && a !== jS)) {
        a == null && s !== Je && y("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && LC(a);
      var d;
      if (u === Je)
        e.tag === So ? ($i.isBatchingLegacy !== null && ($i.didScheduleLegacyUpdate = !0), Ox(SC.bind(null, e))) : m0(SC.bind(null, e)), $i.current !== null ? $i.current.push(bo) : UR(function() {
          (bt & (xr | ci)) === tr && bo();
        }), d = null;
      else {
        var h;
        switch (Ch(i)) {
          case hr:
            h = as;
            break;
          case ei:
            h = ol;
            break;
          case Ea:
            h = Di;
            break;
          case Sa:
            h = ql;
            break;
          default:
            h = Di;
            break;
        }
        d = VS(h, gC.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = d;
    }
    function gC(e, t) {
      if (bD(), hv = jt, fy = de, (bt & (xr | ci)) !== tr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = bu();
      if (i && e.callbackNode !== a)
        return null;
      var u = sf(e, e === ra ? nr : de);
      if (u === de)
        return null;
      var s = !df(e, u) && !hh(e, u) && !t, d = s ? p_(e, u) : vy(e, u);
      if (d !== gu) {
        if (d === Ks) {
          var h = ff(e);
          h !== de && (u = h, d = zS(e, h));
        }
        if (d === uv) {
          var g = sv;
          throw Zs(e, de), Ao(e, u), Da(e, An()), g;
        }
        if (d === kS)
          Ao(e, u);
        else {
          var S = !df(e, u), w = e.current.alternate;
          if (S && !i_(w)) {
            if (d = vy(e, u), d === Ks) {
              var B = ff(e);
              B !== de && (u = B, d = zS(e, B));
            }
            if (d === uv) {
              var I = sv;
              throw Zs(e, de), Ao(e, u), Da(e, An()), I;
            }
          }
          e.finishedWork = w, e.finishedLanes = u, a_(e, d, u);
        }
      }
      return Da(e, An()), e.callbackNode === a ? gC.bind(null, e) : null;
    }
    function zS(e, t) {
      var a = fv;
      if (hf(e)) {
        var i = Zs(e, t);
        i.flags |= Lr, wx(e.containerInfo);
      }
      var u = vy(e, t);
      if (u !== Ks) {
        var s = xa;
        xa = a, s !== null && EC(s);
      }
      return u;
    }
    function EC(e) {
      xa === null ? xa = e : xa.push.apply(xa, e);
    }
    function a_(e, t, a) {
      switch (t) {
        case gu:
        case uv:
          throw new Error("Root did not complete. This is a bug in React.");
        // Flow knows about invariant, so it complains if I add a break
        // statement, but eslint doesn't know about invariant, so it complains
        // if I do. eslint-disable-next-line no-fallthrough
        case Ks: {
          Js(e, xa, Eu);
          break;
        }
        case iy: {
          if (Ao(e, a), ru(a) && // do not delay if we're inside an act() scope
          !NC()) {
            var i = MS + vC - An();
            if (i > 10) {
              var u = sf(e, de);
              if (u !== de)
                break;
              var s = e.suspendedLanes;
              if (!au(s, a)) {
                aa(), pf(e, s);
                break;
              }
              e.timeoutHandle = Lg(Js.bind(null, e, xa, Eu), i);
              break;
            }
          }
          Js(e, xa, Eu);
          break;
        }
        case ov: {
          if (Ao(e, a), tp(a))
            break;
          if (!NC()) {
            var d = za(e, a), h = d, g = An() - h, S = w_(g) - g;
            if (S > 10) {
              e.timeoutHandle = Lg(Js.bind(null, e, xa, Eu), S);
              break;
            }
          }
          Js(e, xa, Eu);
          break;
        }
        case pC: {
          Js(e, xa, Eu);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function i_(e) {
      for (var t = e; ; ) {
        if (t.flags & no) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], d = s.getSnapshot, h = s.value;
                try {
                  if (!he(d(), h))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var g = t.child;
        if (t.subtreeFlags & no && g !== null) {
          g.return = t, t = g;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function Ao(e, t) {
      t = Es(t, uy), t = Es(t, cv), Eh(e, t);
    }
    function SC(e) {
      if (TD(), (bt & (xr | ci)) !== tr)
        throw new Error("Should not already be working.");
      bu();
      var t = sf(e, de);
      if (!Br(t, Je))
        return Da(e, An()), null;
      var a = vy(e, t);
      if (e.tag !== So && a === Ks) {
        var i = ff(e);
        i !== de && (t = i, a = zS(e, i));
      }
      if (a === uv) {
        var u = sv;
        throw Zs(e, de), Ao(e, t), Da(e, An()), u;
      }
      if (a === kS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, Js(e, xa, Eu), Da(e, An()), null;
    }
    function l_(e, t) {
      t !== de && (vf(e, ft(t, Je)), Da(e, An()), (bt & (xr | ci)) === tr && (dv(), bo()));
    }
    function IS(e, t) {
      var a = bt;
      bt |= dC;
      try {
        return e(t);
      } finally {
        bt = a, bt === tr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !$i.isBatchingLegacy && (dv(), y0());
      }
    }
    function u_(e, t, a, i, u) {
      var s = ba(), d = Rr.transition;
      try {
        return Rr.transition = null, xn(hr), e(t, a, i, u);
      } finally {
        xn(s), Rr.transition = d, bt === tr && dv();
      }
    }
    function Su(e) {
      Mo !== null && Mo.tag === So && (bt & (xr | ci)) === tr && bu();
      var t = bt;
      bt |= dC;
      var a = Rr.transition, i = ba();
      try {
        return Rr.transition = null, xn(hr), e ? e() : void 0;
      } finally {
        xn(i), Rr.transition = a, bt = t, (bt & (xr | ci)) === tr && bo();
      }
    }
    function bC() {
      return (bt & (xr | ci)) !== tr;
    }
    function py(e, t) {
      $r(_S, kl, e), kl = ft(kl, t);
    }
    function FS(e) {
      kl = _S.current, Vr(_S, e);
    }
    function Zs(e, t) {
      e.finishedWork = null, e.finishedLanes = de;
      var a = e.timeoutHandle;
      if (a !== Ng && (e.timeoutHandle = Ng, NR(a)), yn !== null)
        for (var i = yn.return; i !== null; ) {
          var u = i.alternate;
          KT(u, i), i = i.return;
        }
      ra = e;
      var s = ec(e.current, null);
      return yn = s, nr = kl = t, rr = gu, sv = null, ly = de, cv = de, uy = de, fv = null, xa = null, nD(), zi.discardPendingWarnings(), s;
    }
    function TC(e, t) {
      do {
        var a = yn;
        try {
          if (Cm(), q0(), un(), DS.current = null, a === null || a.return === null) {
            rr = uv, sv = t, yn = null;
            return;
          }
          if (Vt && a.mode & Mt && Zm(a, !0), gn)
            if (Zr(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              Ja(a, i, nr);
            } else
              ls(a, t, nr);
          OD(e, a.return, a, t, nr), xC(a);
        } catch (u) {
          t = u, yn === a && a !== null ? (a = a.return, yn = a) : a = yn;
          continue;
        }
        return;
      } while (!0);
    }
    function CC() {
      var e = xS.current;
      return xS.current = Wm, e === null ? Wm : e;
    }
    function wC(e) {
      xS.current = e;
    }
    function o_() {
      MS = An();
    }
    function mv(e) {
      ly = ft(e, ly);
    }
    function s_() {
      rr === gu && (rr = iy);
    }
    function BS() {
      (rr === gu || rr === iy || rr === Ks) && (rr = ov), ra !== null && (ys(ly) || ys(cv)) && Ao(ra, nr);
    }
    function c_(e) {
      rr !== ov && (rr = Ks), fv === null ? fv = [e] : fv.push(e);
    }
    function f_() {
      return rr === gu;
    }
    function vy(e, t) {
      var a = bt;
      bt |= xr;
      var i = CC();
      if (ra !== e || nr !== t) {
        if (Fr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (yv(e, nr), u.clear()), Sh(e, t);
        }
        Eu = up(), Zs(e, t);
      }
      Kl(t);
      do
        try {
          d_();
          break;
        } catch (s) {
          TC(e, s);
        }
      while (!0);
      if (Cm(), bt = a, wC(i), yn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return $c(), ra = null, nr = de, rr;
    }
    function d_() {
      for (; yn !== null; )
        RC(yn);
    }
    function p_(e, t) {
      var a = bt;
      bt |= xr;
      var i = CC();
      if (ra !== e || nr !== t) {
        if (Fr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (yv(e, nr), u.clear()), Sh(e, t);
        }
        Eu = up(), dv(), Zs(e, t);
      }
      Kl(t);
      do
        try {
          v_();
          break;
        } catch (s) {
          TC(e, s);
        }
      while (!0);
      return Cm(), wC(i), bt = a, yn !== null ? (fh(), gu) : ($c(), ra = null, nr = de, rr);
    }
    function v_() {
      for (; yn !== null && !Pd(); )
        RC(yn);
    }
    function RC(e) {
      var t = e.alternate;
      Qt(e);
      var a;
      (e.mode & Mt) !== qe ? (jE(e), a = PS(t, e, kl), Zm(e, !0)) : a = PS(t, e, kl), un(), e.memoizedProps = e.pendingProps, a === null ? xC(e) : yn = a, DS.current = null;
    }
    function xC(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & rs) === Ye) {
          Qt(t);
          var u = void 0;
          if ((t.mode & Mt) === qe ? u = GT(a, t, kl) : (jE(t), u = GT(a, t, kl), Zm(t, !1)), un(), u !== null) {
            yn = u;
            return;
          }
        } else {
          var s = sk(a, t);
          if (s !== null) {
            s.flags &= ih, yn = s;
            return;
          }
          if ((t.mode & Mt) !== qe) {
            Zm(t, !1);
            for (var d = t.actualDuration, h = t.child; h !== null; )
              d += h.actualDuration, h = h.sibling;
            t.actualDuration = d;
          }
          if (i !== null)
            i.flags |= rs, i.subtreeFlags = Ye, i.deletions = null;
          else {
            rr = kS, yn = null;
            return;
          }
        }
        var g = t.sibling;
        if (g !== null) {
          yn = g;
          return;
        }
        t = i, yn = t;
      } while (t !== null);
      rr === gu && (rr = pC);
    }
    function Js(e, t, a) {
      var i = ba(), u = Rr.transition;
      try {
        Rr.transition = null, xn(hr), h_(e, t, a, i);
      } finally {
        Rr.transition = u, xn(i);
      }
      return null;
    }
    function h_(e, t, a, i) {
      do
        bu();
      while (Mo !== null);
      if (x_(), (bt & (xr | ci)) !== tr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (qd(s), u === null)
        return Wd(), null;
      if (s === de && y("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = de, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = kt;
      var d = ft(u.lanes, u.childLanes);
      ip(e, d), e === ra && (ra = null, yn = null, nr = de), ((u.subtreeFlags & xi) !== Ye || (u.flags & xi) !== Ye) && (Xs || (Xs = !0, LS = a, VS(Di, function() {
        return bu(), null;
      })));
      var h = (u.subtreeFlags & (il | ll | ul | xi)) !== Ye, g = (u.flags & (il | ll | ul | xi)) !== Ye;
      if (h || g) {
        var S = Rr.transition;
        Rr.transition = null;
        var w = ba();
        xn(hr);
        var B = bt;
        bt |= ci, DS.current = null, vk(e, u), yT(), kk(e, u, s), DR(e.containerInfo), e.current = u, us(s), _k(u, e, s), os(), Hd(), bt = B, xn(w), Rr.transition = S;
      } else
        e.current = u, yT();
      var I = Xs;
      if (Xs ? (Xs = !1, Mo = e, pv = s) : (td = 0, cy = null), d = e.pendingLanes, d === de && (ed = null), I || MC(e.current, !1), Vd(u.stateNode, i), Fr && e.memoizedUpdaters.clear(), Qk(), Da(e, An()), t !== null)
        for (var G = e.onRecoverableError, X = 0; X < t.length; X++) {
          var ee = t[X], Re = ee.stack, We = ee.digest;
          G(ee.value, {
            componentStack: Re,
            digest: We
          });
        }
      if (oy) {
        oy = !1;
        var je = OS;
        throw OS = null, je;
      }
      return Br(pv, Je) && e.tag !== So && bu(), d = e.pendingLanes, Br(d, Je) ? (SD(), e === NS ? vv++ : (vv = 0, NS = e)) : vv = 0, bo(), Wd(), null;
    }
    function bu() {
      if (Mo !== null) {
        var e = Ch(pv), t = Cs(Ea, e), a = Rr.transition, i = ba();
        try {
          return Rr.transition = null, xn(t), y_();
        } finally {
          xn(i), Rr.transition = a;
        }
      }
      return !1;
    }
    function m_(e) {
      AS.push(e), Xs || (Xs = !0, VS(Di, function() {
        return bu(), null;
      }));
    }
    function y_() {
      if (Mo === null)
        return !1;
      var e = LS;
      LS = null;
      var t = Mo, a = pv;
      if (Mo = null, pv = de, (bt & (xr | ci)) !== tr)
        throw new Error("Cannot flush passive effects while already rendering.");
      US = !0, sy = !1, Gl(a);
      var i = bt;
      bt |= ci, zk(t.current), Ak(t, t.current, a, e);
      {
        var u = AS;
        AS = [];
        for (var s = 0; s < u.length; s++) {
          var d = u[s];
          gk(t, d);
        }
      }
      Kd(), MC(t.current, !0), bt = i, bo(), sy ? t === cy ? td++ : (td = 0, cy = t) : td = 0, US = !1, sy = !1, $d(t);
      {
        var h = t.current.stateNode;
        h.effectDuration = 0, h.passiveEffectDuration = 0;
      }
      return !0;
    }
    function DC(e) {
      return ed !== null && ed.has(e);
    }
    function g_(e) {
      ed === null ? ed = /* @__PURE__ */ new Set([e]) : ed.add(e);
    }
    function E_(e) {
      oy || (oy = !0, OS = e);
    }
    var S_ = E_;
    function kC(e, t, a) {
      var i = Qs(a, t), u = RT(e, i, Je), s = Co(e, u, Je), d = aa();
      s !== null && (uo(s, Je, d), Da(s, d));
    }
    function Gt(e, t, a) {
      if (fk(a), gv(!1), e.tag === C) {
        kC(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === C) {
          kC(i, e, a);
          return;
        } else if (i.tag === T) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !DC(s)) {
            var d = Qs(a, e), h = lS(i, d, Je), g = Co(i, h, Je), S = aa();
            g !== null && (uo(g, Je, S), Da(g, S));
            return;
          }
        }
        i = i.return;
      }
      y(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function b_(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = aa();
      pf(e, a), M_(e), ra === e && au(nr, a) && (rr === ov || rr === iy && ru(nr) && An() - MS < vC ? Zs(e, de) : uy = ft(uy, a)), Da(e, u);
    }
    function _C(e, t) {
      t === kt && (t = t_(e));
      var a = aa(), i = wa(e, t);
      i !== null && (uo(i, t, a), Da(i, a));
    }
    function T_(e) {
      var t = e.memoizedState, a = kt;
      t !== null && (a = t.retryLane), _C(e, a);
    }
    function C_(e, t) {
      var a = kt, i;
      switch (e.tag) {
        case Se:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case He:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), _C(e, a);
    }
    function w_(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : Xk(e / 1960) * 1960;
    }
    function R_() {
      if (vv > Jk)
        throw vv = 0, NS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      td > e_ && (td = 0, cy = null, y("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function x_() {
      zi.flushLegacyContextWarning(), zi.flushPendingUnsafeLifecycleWarnings();
    }
    function MC(e, t) {
      Qt(e), hy(e, al, Yk), t && hy(e, Ka, qk), hy(e, al, Vk), t && hy(e, Ka, $k), un();
    }
    function hy(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== Ye ? i = i.child : ((i.flags & t) !== Ye && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var my = null;
    function OC(e) {
      {
        if ((bt & xr) !== tr || !(e.mode & pt))
          return;
        var t = e.tag;
        if (t !== _ && t !== C && t !== T && t !== R && t !== oe && t !== V && t !== H)
          return;
        var a = ct(e) || "ReactComponent";
        if (my !== null) {
          if (my.has(a))
            return;
          my.add(a);
        } else
          my = /* @__PURE__ */ new Set([a]);
        var i = vr;
        try {
          Qt(e), y("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Qt(e) : un();
        }
      }
    }
    var PS;
    {
      var D_ = null;
      PS = function(e, t, a) {
        var i = BC(D_, t);
        try {
          return $T(e, t, a);
        } catch (s) {
          if (Bx() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Cm(), q0(), KT(e, t), BC(t, i), t.mode & Mt && jE(t), rl(null, $T, null, e, t, a), wi()) {
            var u = ns();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var AC = !1, HS;
    HS = /* @__PURE__ */ new Set();
    function k_(e) {
      if (Xi && !yD())
        switch (e.tag) {
          case R:
          case oe:
          case H: {
            var t = yn && ct(yn) || "Unknown", a = t;
            if (!HS.has(a)) {
              HS.add(a);
              var i = ct(e) || "Unknown";
              y("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case T: {
            AC || (y("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), AC = !0);
            break;
          }
        }
    }
    function yv(e, t) {
      if (Fr) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          bs(e, i, t);
        });
      }
    }
    var jS = {};
    function VS(e, t) {
      {
        var a = $i.current;
        return a !== null ? (a.push(t), jS) : Bd(e, t);
      }
    }
    function LC(e) {
      if (e !== jS)
        return uh(e);
    }
    function NC() {
      return $i.current !== null;
    }
    function __(e) {
      {
        if (e.mode & pt) {
          if (!fC())
            return;
        } else if (!Kk() || bt !== tr || e.tag !== R && e.tag !== oe && e.tag !== H)
          return;
        if ($i.current === null) {
          var t = vr;
          try {
            Qt(e), y(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, ct(e));
          } finally {
            t ? Qt(e) : un();
          }
        }
      }
    }
    function M_(e) {
      e.tag !== So && fC() && $i.current === null && y(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function gv(e) {
      yC = e;
    }
    var fi = null, nd = null, O_ = function(e) {
      fi = e;
    };
    function rd(e) {
      {
        if (fi === null)
          return e;
        var t = fi(e);
        return t === void 0 ? e : t.current;
      }
    }
    function $S(e) {
      return rd(e);
    }
    function YS(e) {
      {
        if (fi === null)
          return e;
        var t = fi(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = rd(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: Ki,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function UC(e, t) {
      {
        if (fi === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case T: {
            typeof i == "function" && (u = !0);
            break;
          }
          case R: {
            (typeof i == "function" || s === Fn) && (u = !0);
            break;
          }
          case oe: {
            (s === Ki || s === Fn) && (u = !0);
            break;
          }
          case V:
          case H: {
            (s === _r || s === Fn) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var d = fi(a);
          if (d !== void 0 && d === fi(i))
            return !0;
        }
        return !1;
      }
    }
    function zC(e) {
      {
        if (fi === null || typeof WeakSet != "function")
          return;
        nd === null && (nd = /* @__PURE__ */ new WeakSet()), nd.add(e);
      }
    }
    var A_ = function(e, t) {
      {
        if (fi === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        bu(), Su(function() {
          qS(e.current, i, a);
        });
      }
    }, L_ = function(e, t) {
      {
        if (e.context !== Ba)
          return;
        bu(), Su(function() {
          Ev(t, e, null, null);
        });
      }
    };
    function qS(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, d = e.tag, h = e.type, g = null;
        switch (d) {
          case R:
          case H:
          case T:
            g = h;
            break;
          case oe:
            g = h.render;
            break;
        }
        if (fi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var S = !1, w = !1;
        if (g !== null) {
          var B = fi(g);
          B !== void 0 && (a.has(B) ? w = !0 : t.has(B) && (d === T ? w = !0 : S = !0));
        }
        if (nd !== null && (nd.has(e) || i !== null && nd.has(i)) && (w = !0), w && (e._debugNeedsRemount = !0), w || S) {
          var I = wa(e, Je);
          I !== null && ar(I, e, Je, jt);
        }
        u !== null && !w && qS(u, t, a), s !== null && qS(s, t, a);
      }
    }
    var N_ = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return WS(e.current, i, a), a;
      }
    };
    function WS(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, d = e.type, h = null;
        switch (s) {
          case R:
          case H:
          case T:
            h = d;
            break;
          case oe:
            h = d.render;
            break;
        }
        var g = !1;
        h !== null && t.has(h) && (g = !0), g ? U_(e, a) : i !== null && WS(i, t, a), u !== null && WS(u, t, a);
      }
    }
    function U_(e, t) {
      {
        var a = z_(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case z:
              t.add(i.stateNode);
              return;
            case D:
              t.add(i.stateNode.containerInfo);
              return;
            case C:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function z_(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === z)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var QS;
    {
      QS = !1;
      try {
        var IC = Object.preventExtensions({});
      } catch {
        QS = !0;
      }
    }
    function I_(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Ye, this.subtreeFlags = Ye, this.deletions = null, this.lanes = de, this.childLanes = de, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !QS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var Pa = function(e, t, a, i) {
      return new I_(e, t, a, i);
    };
    function GS(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function F_(e) {
      return typeof e == "function" && !GS(e) && e.defaultProps === void 0;
    }
    function B_(e) {
      if (typeof e == "function")
        return GS(e) ? T : R;
      if (e != null) {
        var t = e.$$typeof;
        if (t === Ki)
          return oe;
        if (t === _r)
          return V;
      }
      return _;
    }
    function ec(e, t) {
      var a = e.alternate;
      a === null ? (a = Pa(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Ye, a.subtreeFlags = Ye, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & Cn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case _:
        case R:
        case H:
          a.type = rd(e.type);
          break;
        case T:
          a.type = $S(e.type);
          break;
        case oe:
          a.type = YS(e.type);
          break;
      }
      return a;
    }
    function P_(e, t) {
      e.flags &= Cn | fn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = de, e.lanes = t, e.child = null, e.subtreeFlags = Ye, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = Ye, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function H_(e, t, a) {
      var i;
      return e === pm ? (i = pt, t === !0 && (i |= Bt, i |= Ot)) : i = qe, Fr && (i |= Mt), Pa(C, null, null, i);
    }
    function KS(e, t, a, i, u, s) {
      var d = _, h = e;
      if (typeof e == "function")
        GS(e) ? (d = T, h = $S(h)) : h = rd(h);
      else if (typeof e == "string")
        d = z;
      else
        e: switch (e) {
          case Qi:
            return Lo(a.children, u, s, t);
          case mi:
            d = le, u |= Bt, (u & pt) !== qe && (u |= Ot);
            break;
          case Gi:
            return j_(a, u, s, t);
          case Iu:
            return V_(a, u, s, t);
          case Fu:
            return $_(a, u, s, t);
          case Fo:
            return FC(a, u, s, t);
          case oc:
          // eslint-disable-next-line no-fallthrough
          case Io:
          // eslint-disable-next-line no-fallthrough
          case sc:
          // eslint-disable-next-line no-fallthrough
          case cc:
          // eslint-disable-next-line no-fallthrough
          case cd:
          // eslint-disable-next-line no-fallthrough
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case yi:
                  d = ue;
                  break e;
                case Ol:
                  d = L;
                  break e;
                case Ki:
                  d = oe, h = YS(h);
                  break e;
                case _r:
                  d = V;
                  break e;
                case Fn:
                  d = ce, h = null;
                  break e;
              }
            var g = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (g += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var S = i ? ct(i) : null;
              S && (g += `

Check the render method of \`` + S + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + g));
          }
        }
      var w = Pa(d, a, t, u);
      return w.elementType = e, w.type = h, w.lanes = s, w._debugOwner = i, w;
    }
    function XS(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, d = e.props, h = KS(u, s, d, i, t, a);
      return h._debugSource = e._source, h._debugOwner = e._owner, h;
    }
    function Lo(e, t, a, i) {
      var u = Pa(W, e, i, t);
      return u.lanes = a, u;
    }
    function j_(e, t, a, i) {
      typeof e.id != "string" && y('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = Pa(me, e, i, t | Mt);
      return u.elementType = Gi, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function V_(e, t, a, i) {
      var u = Pa(Se, e, i, t);
      return u.elementType = Iu, u.lanes = a, u;
    }
    function $_(e, t, a, i) {
      var u = Pa(He, e, i, t);
      return u.elementType = Fu, u.lanes = a, u;
    }
    function FC(e, t, a, i) {
      var u = Pa(ne, e, i, t);
      u.elementType = Fo, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function ZS(e, t, a) {
      var i = Pa(J, e, null, t);
      return i.lanes = a, i;
    }
    function Y_() {
      var e = Pa(z, null, null, qe);
      return e.elementType = "DELETED", e;
    }
    function q_(e) {
      var t = Pa(Ue, null, null, qe);
      return t.stateNode = e, t;
    }
    function JS(e, t, a) {
      var i = e.children !== null ? e.children : [], u = Pa(D, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function BC(e, t) {
      return e === null && (e = Pa(_, null, null, qe)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function W_(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Ng, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = kt, this.eventTimes = Ss(de), this.expirationTimes = Ss(jt), this.pendingLanes = de, this.suspendedLanes = de, this.pingedLanes = de, this.expiredLanes = de, this.mutableReadLanes = de, this.finishedLanes = de, this.entangledLanes = de, this.entanglements = Ss(de), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], d = 0; d < Xl; d++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case pm:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case So:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function PC(e, t, a, i, u, s, d, h, g, S) {
      var w = new W_(e, t, a, h, g), B = H_(t, s);
      w.current = B, B.stateNode = w;
      {
        var I = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        B.memoizedState = I;
      }
      return dE(B), w;
    }
    var eb = "18.3.1";
    function Q_(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return ln(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: kr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var tb, nb;
    tb = !1, nb = {};
    function HC(e) {
      if (!e)
        return Ba;
      var t = to(e), a = Mx(t);
      if (t.tag === T) {
        var i = t.type;
        if (bl(i))
          return v0(t, i, a);
      }
      return a;
    }
    function G_(e, t) {
      {
        var a = to(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = zr(a);
        if (u === null)
          return null;
        if (u.mode & Bt) {
          var s = ct(a) || "Component";
          if (!nb[s]) {
            nb[s] = !0;
            var d = vr;
            try {
              Qt(u), a.mode & Bt ? y("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : y("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              d ? Qt(d) : un();
            }
          }
        }
        return u.stateNode;
      }
    }
    function jC(e, t, a, i, u, s, d, h) {
      var g = !1, S = null;
      return PC(e, t, g, S, a, i, u, s, d);
    }
    function VC(e, t, a, i, u, s, d, h, g, S) {
      var w = !0, B = PC(a, i, w, e, u, s, d, h, g);
      B.context = HC(null);
      var I = B.current, G = aa(), X = Oo(I), ee = mu(G, X);
      return ee.callback = t ?? null, Co(I, ee, X), n_(B, X, G), B;
    }
    function Ev(e, t, a, i) {
      jd(t, e);
      var u = t.current, s = aa(), d = Oo(u);
      nn(d);
      var h = HC(a);
      t.context === null ? t.context = h : t.pendingContext = h, Xi && vr !== null && !tb && (tb = !0, y(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, ct(vr) || "Unknown"));
      var g = mu(s, d);
      g.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && y("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), g.callback = i);
      var S = Co(u, g, d);
      return S !== null && (ar(S, u, d, s), km(S, u, d)), d;
    }
    function yy(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case z:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function K_(e) {
      switch (e.tag) {
        case C: {
          var t = e.stateNode;
          if (hf(t)) {
            var a = ph(t);
            l_(t, a);
          }
          break;
        }
        case Se: {
          Su(function() {
            var u = wa(e, Je);
            if (u !== null) {
              var s = aa();
              ar(u, e, Je, s);
            }
          });
          var i = Je;
          rb(e, i);
          break;
        }
      }
    }
    function $C(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = gh(a.retryLane, t));
    }
    function rb(e, t) {
      $C(e, t);
      var a = e.alternate;
      a && $C(a, t);
    }
    function X_(e) {
      if (e.tag === Se) {
        var t = vs, a = wa(e, t);
        if (a !== null) {
          var i = aa();
          ar(a, e, t, i);
        }
        rb(e, t);
      }
    }
    function Z_(e) {
      if (e.tag === Se) {
        var t = Oo(e), a = wa(e, t);
        if (a !== null) {
          var i = aa();
          ar(a, e, t, i);
        }
        rb(e, t);
      }
    }
    function YC(e) {
      var t = Xt(e);
      return t === null ? null : t.stateNode;
    }
    var qC = function(e) {
      return null;
    };
    function J_(e) {
      return qC(e);
    }
    var WC = function(e) {
      return !1;
    };
    function eM(e) {
      return WC(e);
    }
    var QC = null, GC = null, KC = null, XC = null, ZC = null, JC = null, ew = null, tw = null, nw = null;
    {
      var rw = function(e, t, a) {
        var i = t[a], u = qn(e) ? e.slice() : ht({}, e);
        return a + 1 === t.length ? (qn(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = rw(e[i], t, a + 1), u);
      }, aw = function(e, t) {
        return rw(e, t, 0);
      }, iw = function(e, t, a, i) {
        var u = t[i], s = qn(e) ? e.slice() : ht({}, e);
        if (i + 1 === t.length) {
          var d = a[i];
          s[d] = s[u], qn(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = iw(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, lw = function(e, t, a) {
        if (t.length !== a.length) {
          A("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              A("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return iw(e, t, a, 0);
      }, uw = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = qn(e) ? e.slice() : ht({}, e);
        return s[u] = uw(e[u], t, a + 1, i), s;
      }, ow = function(e, t, a) {
        return uw(e, t, 0, a);
      }, ab = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      QC = function(e, t, a, i) {
        var u = ab(e, t);
        if (u !== null) {
          var s = ow(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = ht({}, e.memoizedProps);
          var d = wa(e, Je);
          d !== null && ar(d, e, Je, jt);
        }
      }, GC = function(e, t, a) {
        var i = ab(e, t);
        if (i !== null) {
          var u = aw(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = ht({}, e.memoizedProps);
          var s = wa(e, Je);
          s !== null && ar(s, e, Je, jt);
        }
      }, KC = function(e, t, a, i) {
        var u = ab(e, t);
        if (u !== null) {
          var s = lw(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = ht({}, e.memoizedProps);
          var d = wa(e, Je);
          d !== null && ar(d, e, Je, jt);
        }
      }, XC = function(e, t, a) {
        e.pendingProps = ow(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = wa(e, Je);
        i !== null && ar(i, e, Je, jt);
      }, ZC = function(e, t) {
        e.pendingProps = aw(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = wa(e, Je);
        a !== null && ar(a, e, Je, jt);
      }, JC = function(e, t, a) {
        e.pendingProps = lw(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = wa(e, Je);
        i !== null && ar(i, e, Je, jt);
      }, ew = function(e) {
        var t = wa(e, Je);
        t !== null && ar(t, e, Je, jt);
      }, tw = function(e) {
        qC = e;
      }, nw = function(e) {
        WC = e;
      };
    }
    function tM(e) {
      var t = zr(e);
      return t === null ? null : t.stateNode;
    }
    function nM(e) {
      return null;
    }
    function rM() {
      return vr;
    }
    function aM(e) {
      var t = e.findFiberByHostInstance, a = m.ReactCurrentDispatcher;
      return ao({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: QC,
        overrideHookStateDeletePath: GC,
        overrideHookStateRenamePath: KC,
        overrideProps: XC,
        overridePropsDeletePath: ZC,
        overridePropsRenamePath: JC,
        setErrorHandler: tw,
        setSuspenseHandler: nw,
        scheduleUpdate: ew,
        currentDispatcherRef: a,
        findHostInstanceByFiber: tM,
        findFiberByHostInstance: t || nM,
        // React Refresh
        findHostInstancesForRefresh: N_,
        scheduleRefresh: A_,
        scheduleRoot: L_,
        setRefreshHandler: O_,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: rM,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: eb
      });
    }
    var sw = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function ib(e) {
      this._internalRoot = e;
    }
    gy.prototype.render = ib.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? y("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Ey(arguments[1]) ? y("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && y("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== bn) {
          var i = YC(t.current);
          i && i.parentNode !== a && y("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Ev(e, t, null, null);
    }, gy.prototype.unmount = ib.prototype.unmount = function() {
      typeof arguments[0] == "function" && y("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        bC() && y("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Su(function() {
          Ev(null, e, null, null);
        }), s0(t);
      }
    };
    function iM(e, t) {
      if (!Ey(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      cw(e);
      var a = !1, i = !1, u = "", s = sw;
      t != null && (t.hydrate ? A("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === $a && y(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var d = jC(e, pm, null, a, i, u, s);
      lm(d.current, e);
      var h = e.nodeType === bn ? e.parentNode : e;
      return Rp(h), new ib(d);
    }
    function gy(e) {
      this._internalRoot = e;
    }
    function lM(e) {
      e && kh(e);
    }
    gy.prototype.unstable_scheduleHydration = lM;
    function uM(e, t, a) {
      if (!Ey(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      cw(e), t === void 0 && y("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, d = !1, h = "", g = sw;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (h = a.identifierPrefix), a.onRecoverableError !== void 0 && (g = a.onRecoverableError));
      var S = VC(t, null, e, pm, i, s, d, h, g);
      if (lm(S.current, e), Rp(e), u)
        for (var w = 0; w < u.length; w++) {
          var B = u[w];
          fD(S, B);
        }
      return new gy(S);
    }
    function Ey(e) {
      return !!(e && (e.nodeType === Ar || e.nodeType === Ci || e.nodeType === Dd));
    }
    function Sv(e) {
      return !!(e && (e.nodeType === Ar || e.nodeType === Ci || e.nodeType === Dd || e.nodeType === bn && e.nodeValue === " react-mount-point-unstable "));
    }
    function cw(e) {
      e.nodeType === Ar && e.tagName && e.tagName.toUpperCase() === "BODY" && y("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), zp(e) && (e._reactRootContainer ? y("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : y("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var oM = m.ReactCurrentOwner, fw;
    fw = function(e) {
      if (e._reactRootContainer && e.nodeType !== bn) {
        var t = YC(e._reactRootContainer.current);
        t && t.parentNode !== e && y("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = lb(e), u = !!(i && go(i));
      u && !a && y("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Ar && e.tagName && e.tagName.toUpperCase() === "BODY" && y("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function lb(e) {
      return e ? e.nodeType === Ci ? e.documentElement : e.firstChild : null;
    }
    function dw() {
    }
    function sM(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var I = yy(d);
            s.call(I);
          };
        }
        var d = VC(
          t,
          i,
          e,
          So,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          dw
        );
        e._reactRootContainer = d, lm(d.current, e);
        var h = e.nodeType === bn ? e.parentNode : e;
        return Rp(h), Su(), d;
      } else {
        for (var g; g = e.lastChild; )
          e.removeChild(g);
        if (typeof i == "function") {
          var S = i;
          i = function() {
            var I = yy(w);
            S.call(I);
          };
        }
        var w = jC(
          e,
          So,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          dw
        );
        e._reactRootContainer = w, lm(w.current, e);
        var B = e.nodeType === bn ? e.parentNode : e;
        return Rp(B), Su(function() {
          Ev(t, w, a, i);
        }), w;
      }
    }
    function cM(e, t) {
      e !== null && typeof e != "function" && y("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Sy(e, t, a, i, u) {
      fw(a), cM(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, d;
      if (!s)
        d = sM(a, t, e, u, i);
      else {
        if (d = s, typeof u == "function") {
          var h = u;
          u = function() {
            var g = yy(d);
            h.call(g);
          };
        }
        Ev(t, d, e, u);
      }
      return yy(d);
    }
    var pw = !1;
    function fM(e) {
      {
        pw || (pw = !0, y("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = oM.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || y("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Dt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Ar ? e : G_(e, "findDOMNode");
    }
    function dM(e, t, a) {
      if (y("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Sv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = zp(t) && t._reactRootContainer === void 0;
        i && y("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Sy(null, e, t, !0, a);
    }
    function pM(e, t, a) {
      if (y("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Sv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = zp(t) && t._reactRootContainer === void 0;
        i && y("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Sy(null, e, t, !1, a);
    }
    function vM(e, t, a, i) {
      if (y("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Sv(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !rg(e))
        throw new Error("parentComponent must be a valid React Component");
      return Sy(e, t, a, !1, i);
    }
    var vw = !1;
    function hM(e) {
      if (vw || (vw = !0, y("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !Sv(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = zp(e) && e._reactRootContainer === void 0;
        t && y("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = lb(e), i = a && !go(a);
          i && y("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Su(function() {
          Sy(null, null, e, !1, function() {
            e._reactRootContainer = null, s0(e);
          });
        }), !0;
      } else {
        {
          var u = lb(e), s = !!(u && go(u)), d = e.nodeType === Ar && Sv(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && y("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", d ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    cr(K_), oo(X_), wh(Z_), Rs(ba), op(bh), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && y("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Oc(yR), ng(IS, u_, Su);
    function mM(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Ey(t))
        throw new Error("Target container is not a DOM element.");
      return Q_(e, t, null, a);
    }
    function yM(e, t, a, i) {
      return vM(e, t, a, i);
    }
    var ub = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [go, Nf, um, Xu, Ac, IS]
    };
    function gM(e, t) {
      return ub.usingClientEntryPoint || y('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), iM(e, t);
    }
    function EM(e, t, a) {
      return ub.usingClientEntryPoint || y('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), uM(e, t, a);
    }
    function SM(e) {
      return bC() && y("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Su(e);
    }
    var bM = aM({
      findFiberByHostInstance: Bs,
      bundleType: 1,
      version: eb,
      rendererPackageName: "react-dom"
    });
    if (!bM && fe && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var hw = window.location.protocol;
      /^(https?|file):$/.test(hw) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (hw === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    _a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ub, _a.createPortal = mM, _a.createRoot = gM, _a.findDOMNode = fM, _a.flushSync = SM, _a.hydrate = dM, _a.hydrateRoot = EM, _a.render = pM, _a.unmountComponentAtNode = hM, _a.unstable_batchedUpdates = IS, _a.unstable_renderSubtreeIntoContainer = yM, _a.version = eb, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), _a;
}
var bw;
function zy() {
  if (bw) return Ty.exports;
  bw = 1;
  function c() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (p) {
        console.error(p);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (c(), Ty.exports = xM()) : Ty.exports = DM(), Ty.exports;
}
/**
 * @license React
 * react-dom-test-utils.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tw;
function kM() {
  if (Tw) return Un;
  Tw = 1;
  var c = Uy, p = zy();
  function m(b) {
    var Q = b, Z = b;
    if (b.alternate) for (; Q.return; ) Q = Q.return;
    else {
      b = Q;
      do
        Q = b, (Q.flags & 4098) !== 0 && (Z = Q.return), b = Q.return;
      while (b);
    }
    return Q.tag === 3 ? Z : null;
  }
  function x(b) {
    if (m(b) !== b) throw Error("Unable to find node on an unmounted component.");
  }
  function O(b) {
    var Q = b.alternate;
    if (!Q) {
      if (Q = m(b), Q === null) throw Error("Unable to find node on an unmounted component.");
      return Q !== b ? null : b;
    }
    for (var Z = b, Ce = Q; ; ) {
      var Qe = Z.return;
      if (Qe === null) break;
      var it = Qe.alternate;
      if (it === null) {
        if (Ce = Qe.return, Ce !== null) {
          Z = Ce;
          continue;
        }
        break;
      }
      if (Qe.child === it.child) {
        for (it = Qe.child; it; ) {
          if (it === Z) return x(Qe), b;
          if (it === Ce) return x(Qe), Q;
          it = it.sibling;
        }
        throw Error("Unable to find node on an unmounted component.");
      }
      if (Z.return !== Ce.return) Z = Qe, Ce = it;
      else {
        for (var Ve = !1, st = Qe.child; st; ) {
          if (st === Z) {
            Ve = !0, Z = Qe, Ce = it;
            break;
          }
          if (st === Ce) {
            Ve = !0, Ce = Qe, Z = it;
            break;
          }
          st = st.sibling;
        }
        if (!Ve) {
          for (st = it.child; st; ) {
            if (st === Z) {
              Ve = !0, Z = it, Ce = Qe;
              break;
            }
            if (st === Ce) {
              Ve = !0, Ce = it, Z = Qe;
              break;
            }
            st = st.sibling;
          }
          if (!Ve) throw Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
        }
      }
      if (Z.alternate !== Ce) throw Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
    }
    if (Z.tag !== 3) throw Error("Unable to find node on an unmounted component.");
    return Z.stateNode.current === Z ? b : Q;
  }
  var A = Object.assign;
  function y(b) {
    var Q = b.keyCode;
    return "charCode" in b ? (b = b.charCode, b === 0 && Q === 13 && (b = 13)) : b = Q, b === 10 && (b = 13), 32 <= b || b === 13 ? b : 0;
  }
  function U() {
    return !0;
  }
  function R() {
    return !1;
  }
  function T(b) {
    function Q(Z, Ce, Qe, it, Ve) {
      this._reactName = Z, this._targetInst = Qe, this.type = Ce, this.nativeEvent = it, this.target = Ve, this.currentTarget = null;
      for (var st in b) b.hasOwnProperty(st) && (Z = b[st], this[st] = Z ? Z(it) : it[st]);
      return this.isDefaultPrevented = (it.defaultPrevented != null ? it.defaultPrevented : it.returnValue === !1) ? U : R, this.isPropagationStopped = R, this;
    }
    return A(Q.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var Z = this.nativeEvent;
      Z && (Z.preventDefault ? Z.preventDefault() : typeof Z.returnValue != "unknown" && (Z.returnValue = !1), this.isDefaultPrevented = U);
    }, stopPropagation: function() {
      var Z = this.nativeEvent;
      Z && (Z.stopPropagation ? Z.stopPropagation() : typeof Z.cancelBubble != "unknown" && (Z.cancelBubble = !0), this.isPropagationStopped = U);
    }, persist: function() {
    }, isPersistent: U }), Q;
  }
  var _ = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(b) {
    return b.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, C = T(_), D = A({}, _, { view: 0, detail: 0 });
  T(D);
  var z, J, W, le = A({}, D, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ue, button: 0, buttons: 0, relatedTarget: function(b) {
    return b.relatedTarget === void 0 ? b.fromElement === b.srcElement ? b.toElement : b.fromElement : b.relatedTarget;
  }, movementX: function(b) {
    return "movementX" in b ? b.movementX : (b !== W && (W && b.type === "mousemove" ? (z = b.screenX - W.screenX, J = b.screenY - W.screenY) : J = z = 0, W = b), z);
  }, movementY: function(b) {
    return "movementY" in b ? b.movementY : J;
  } });
  T(le);
  var L = A({}, le, { dataTransfer: 0 });
  T(L);
  var ue = A({}, D, { relatedTarget: 0 });
  T(ue);
  var oe = A({}, _, { animationName: 0, elapsedTime: 0, pseudoElement: 0 });
  T(oe);
  var me = A({}, _, { clipboardData: function(b) {
    return "clipboardData" in b ? b.clipboardData : window.clipboardData;
  } });
  T(me);
  var Se = A({}, _, { data: 0 });
  T(Se);
  var V = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, H = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, ce = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function ke(b) {
    var Q = this.nativeEvent;
    return Q.getModifierState ? Q.getModifierState(b) : (b = ce[b]) ? !!Q[b] : !1;
  }
  function Ue() {
    return ke;
  }
  var He = A({}, D, { key: function(b) {
    if (b.key) {
      var Q = V[b.key] || b.key;
      if (Q !== "Unidentified") return Q;
    }
    return b.type === "keypress" ? (b = y(b), b === 13 ? "Enter" : String.fromCharCode(b)) : b.type === "keydown" || b.type === "keyup" ? H[b.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ue, charCode: function(b) {
    return b.type === "keypress" ? y(b) : 0;
  }, keyCode: function(b) {
    return b.type === "keydown" || b.type === "keyup" ? b.keyCode : 0;
  }, which: function(b) {
    return b.type === "keypress" ? y(b) : b.type === "keydown" || b.type === "keyup" ? b.keyCode : 0;
  } });
  T(He);
  var Ne = A({}, le, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 });
  T(Ne);
  var ne = A({}, D, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ue });
  T(ne);
  var xe = A({}, _, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 });
  T(xe);
  var gt = A({}, le, { deltaX: function(b) {
    return "deltaX" in b ? b.deltaX : "wheelDeltaX" in b ? -b.wheelDeltaX : 0;
  }, deltaY: function(b) {
    return "deltaY" in b ? b.deltaY : "wheelDeltaY" in b ? -b.wheelDeltaY : "wheelDelta" in b ? -b.wheelDelta : 0;
  }, deltaZ: 0, deltaMode: 0 });
  T(gt);
  function ut(b, Q, Z, Ce, Qe, it, Ve, st, Rt) {
    var xt = Array.prototype.slice.call(arguments, 3);
    try {
      Q.apply(Z, xt);
    } catch (en) {
      this.onError(en);
    }
  }
  var dt = !1, Ee = null, Be = !1, Te = null, vt = { onError: function(b) {
    dt = !0, Ee = b;
  } };
  function mt(b, Q, Z, Ce, Qe, it, Ve, st, Rt) {
    dt = !1, Ee = null, ut.apply(vt, arguments);
  }
  function gn(b, Q, Z, Ce, Qe, it, Ve, st, Rt) {
    if (mt.apply(this, arguments), dt) {
      if (dt) {
        var xt = Ee;
        dt = !1, Ee = null;
      } else throw Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
      Be || (Be = !0, Te = xt);
    }
  }
  var Vt = Array.isArray, cn = p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events, Jt = cn[0], an = cn[1], En = cn[2], P = cn[3], Le = cn[4], fe = c.unstable_act;
  function rt() {
  }
  function Ke(b, Q) {
    if (!b) return [];
    if (b = O(b), !b) return [];
    for (var Z = b, Ce = []; ; ) {
      if (Z.tag === 5 || Z.tag === 6 || Z.tag === 1 || Z.tag === 0) {
        var Qe = Z.stateNode;
        Q(Qe) && Ce.push(Qe);
      }
      if (Z.child) Z.child.return = Z, Z = Z.child;
      else {
        if (Z === b) return Ce;
        for (; !Z.sibling; ) {
          if (!Z.return || Z.return === b) return Ce;
          Z = Z.return;
        }
        Z.sibling.return = Z.return, Z = Z.sibling;
      }
    }
  }
  function ot(b, Q) {
    if (b && !b._reactInternals) {
      var Z = String(b);
      throw b = Vt(b) ? "an array" : b && b.nodeType === 1 && b.tagName ? "a DOM node" : Z === "[object Object]" ? "object with keys {" + Object.keys(b).join(", ") + "}" : Z, Error(Q + "(...): the first argument must be a React class instance. Instead received: " + (b + "."));
    }
  }
  function Ct(b) {
    return !(!b || b.nodeType !== 1 || !b.tagName);
  }
  function wt(b) {
    return Ct(b) ? !1 : b != null && typeof b.render == "function" && typeof b.setState == "function";
  }
  function ln(b, Q) {
    return wt(b) ? b._reactInternals.type === Q : !1;
  }
  function dr(b, Q) {
    return ot(b, "findAllInRenderedTree"), b ? Ke(b._reactInternals, Q) : [];
  }
  function oa(b, Q) {
    return ot(b, "scryRenderedDOMComponentsWithClass"), dr(b, function(Z) {
      if (Ct(Z)) {
        var Ce = Z.className;
        typeof Ce != "string" && (Ce = Z.getAttribute("class") || "");
        var Qe = Ce.split(/\s+/);
        if (!Vt(Q)) {
          if (Q === void 0) throw Error("TestUtils.scryRenderedDOMComponentsWithClass expects a className as a second argument.");
          Q = Q.split(/\s+/);
        }
        return Q.every(function(it) {
          return Qe.indexOf(it) !== -1;
        });
      }
      return !1;
    });
  }
  function sa(b, Q) {
    return ot(b, "scryRenderedDOMComponentsWithTag"), dr(b, function(Z) {
      return Ct(Z) && Z.tagName.toUpperCase() === Q.toUpperCase();
    });
  }
  function In(b, Q) {
    return ot(b, "scryRenderedComponentsWithType"), dr(b, function(Z) {
      return ln(Z, Q);
    });
  }
  function Vn(b, Q, Z) {
    var Ce = b.type || "unknown-event";
    b.currentTarget = an(Z), gn(Ce, Q, void 0, b), b.currentTarget = null;
  }
  function ir(b, Q, Z) {
    for (var Ce = []; b; ) {
      Ce.push(b);
      do
        b = b.return;
      while (b && b.tag !== 5);
      b = b || null;
    }
    for (b = Ce.length; 0 < b--; ) Q(Ce[b], "captured", Z);
    for (b = 0; b < Ce.length; b++) Q(Ce[b], "bubbled", Z);
  }
  function Ma(b, Q) {
    var Z = b.stateNode;
    if (!Z) return null;
    var Ce = En(Z);
    if (!Ce) return null;
    Z = Ce[Q];
    e: switch (Q) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (Ce = !Ce.disabled) || (b = b.type, Ce = !(b === "button" || b === "input" || b === "select" || b === "textarea")), b = !Ce;
        break e;
      default:
        b = !1;
    }
    if (b) return null;
    if (Z && typeof Z != "function") throw Error("Expected `" + Q + "` listener to be a function, instead got a value of `" + typeof Z + "` type.");
    return Z;
  }
  function $n(b, Q, Z) {
    b && Z && Z._reactName && (Q = Ma(b, Z._reactName)) && (Z._dispatchListeners == null && (Z._dispatchListeners = []), Z._dispatchInstances == null && (Z._dispatchInstances = []), Z._dispatchListeners.push(Q), Z._dispatchInstances.push(b));
  }
  function lr(b, Q, Z) {
    var Ce = Z._reactName;
    Q === "captured" && (Ce += "Capture"), (Q = Ma(b, Ce)) && (Z._dispatchListeners == null && (Z._dispatchListeners = []), Z._dispatchInstances == null && (Z._dispatchInstances = []), Z._dispatchListeners.push(Q), Z._dispatchInstances.push(b));
  }
  var ca = {}, pr = /* @__PURE__ */ new Set(["mouseEnter", "mouseLeave", "pointerEnter", "pointerLeave"]);
  function vi(b) {
    return function(Q, Z) {
      if (c.isValidElement(Q)) throw Error("TestUtils.Simulate expected a DOM node as the first argument but received a React element. Pass the DOM node you wish to simulate the event on instead. Note that TestUtils.Simulate will not work if you are using shallow rendering.");
      if (wt(Q)) throw Error("TestUtils.Simulate expected a DOM node as the first argument but received a component instance. Pass the DOM node you wish to simulate the event on instead.");
      var Ce = "on" + b[0].toUpperCase() + b.slice(1), Qe = new rt();
      Qe.target = Q, Qe.type = b.toLowerCase();
      var it = Jt(Q), Ve = new C(Ce, Qe.type, it, Qe, Q);
      Ve.persist(), A(Ve, Z), pr.has(b) ? Ve && Ve._reactName && $n(Ve._targetInst, null, Ve) : Ve && Ve._reactName && ir(Ve._targetInst, lr, Ve), p.unstable_batchedUpdates(function() {
        if (P(Q), Ve) {
          var st = Ve._dispatchListeners, Rt = Ve._dispatchInstances;
          if (Vt(st)) for (var xt = 0; xt < st.length && !Ve.isPropagationStopped(); xt++) Vn(Ve, st[xt], Rt[xt]);
          else st && Vn(Ve, st, Rt);
          Ve._dispatchListeners = null, Ve._dispatchInstances = null, Ve.isPersistent() || Ve.constructor.release(Ve);
        }
        if (Be) throw st = Te, Be = !1, Te = null, st;
      }), Le();
    };
  }
  return "blur cancel click close contextMenu copy cut auxClick doubleClick dragEnd dragStart drop focus input invalid keyDown keyPress keyUp mouseDown mouseUp paste pause play pointerCancel pointerDown pointerUp rateChange reset resize seeked submit touchCancel touchEnd touchStart volumeChange drag dragEnter dragExit dragLeave dragOver mouseMove mouseOut mouseOver pointerMove pointerOut pointerOver scroll toggle touchMove wheel abort animationEnd animationIteration animationStart canPlay canPlayThrough durationChange emptied encrypted ended error gotPointerCapture load loadedData loadedMetadata loadStart lostPointerCapture playing progress seeking stalled suspend timeUpdate transitionEnd waiting mouseEnter mouseLeave pointerEnter pointerLeave change select beforeInput compositionEnd compositionStart compositionUpdate".split(" ").forEach(function(b) {
    ca[b] = vi(b);
  }), Un.Simulate = ca, Un.act = fe, Un.findAllInRenderedTree = dr, Un.findRenderedComponentWithType = function(b, Q) {
    if (ot(b, "findRenderedComponentWithType"), b = In(b, Q), b.length !== 1) throw Error("Did not find exactly one match (found: " + b.length + ") for componentType:" + Q);
    return b[0];
  }, Un.findRenderedDOMComponentWithClass = function(b, Q) {
    if (ot(b, "findRenderedDOMComponentWithClass"), b = oa(b, Q), b.length !== 1) throw Error("Did not find exactly one match (found: " + b.length + ") for class:" + Q);
    return b[0];
  }, Un.findRenderedDOMComponentWithTag = function(b, Q) {
    if (ot(b, "findRenderedDOMComponentWithTag"), b = sa(b, Q), b.length !== 1) throw Error("Did not find exactly one match (found: " + b.length + ") for tag:" + Q);
    return b[0];
  }, Un.isCompositeComponent = wt, Un.isCompositeComponentWithType = ln, Un.isDOMComponent = Ct, Un.isDOMComponentElement = function(b) {
    return !!(b && c.isValidElement(b) && b.tagName);
  }, Un.isElement = function(b) {
    return c.isValidElement(b);
  }, Un.isElementOfType = function(b, Q) {
    return c.isValidElement(b) && b.type === Q;
  }, Un.mockComponent = function(b, Q) {
    return Q = Q || b.mockTagName || "div", b.prototype.render.mockImplementation(function() {
      return c.createElement(Q, null, this.props.children);
    }), this;
  }, Un.nativeTouchData = function(b, Q) {
    return { touches: [{ pageX: b, pageY: Q }] };
  }, Un.renderIntoDocument = function(b) {
    var Q = document.createElement("div");
    return p.render(b, Q);
  }, Un.scryRenderedComponentsWithType = In, Un.scryRenderedDOMComponentsWithClass = oa, Un.scryRenderedDOMComponentsWithTag = sa, Un.traverseTwoPhase = ir, Un;
}
var zn = {};
/**
 * @license React
 * react-dom-test-utils.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cw;
function _M() {
  return Cw || (Cw = 1, process.env.NODE_ENV !== "production" && function() {
    var c = Uy, p = zy(), m = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(M) {
      {
        for (var re = arguments.length, ae = new Array(re > 1 ? re - 1 : 0), se = 1; se < re; se++)
          ae[se - 1] = arguments[se];
        A("warn", M, ae);
      }
    }
    function O(M) {
      {
        for (var re = arguments.length, ae = new Array(re > 1 ? re - 1 : 0), se = 1; se < re; se++)
          ae[se - 1] = arguments[se];
        A("error", M, ae);
      }
    }
    function A(M, re, ae) {
      {
        var se = m.ReactDebugCurrentFrame, Ze = se.getStackAddendum();
        Ze !== "" && (re += "%s", ae = ae.concat([Ze]));
        var nt = ae.map(function(Kt) {
          return String(Kt);
        });
        nt.unshift("Warning: " + re), Function.prototype.apply.call(console[M], console, nt);
      }
    }
    function y(M) {
      return M._reactInternals;
    }
    var U = 0, R = 1, T = 3, _ = 5, C = 6, D = (
      /*                      */
      0
    ), z = (
      /*                    */
      2
    ), J = (
      /*                    */
      4096
    );
    m.ReactCurrentOwner;
    function W(M) {
      var re = M, ae = M;
      if (M.alternate)
        for (; re.return; )
          re = re.return;
      else {
        var se = re;
        do
          re = se, (re.flags & (z | J)) !== D && (ae = re.return), se = re.return;
        while (se);
      }
      return re.tag === T ? ae : null;
    }
    function le(M) {
      if (W(M) !== M)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function L(M) {
      var re = M.alternate;
      if (!re) {
        var ae = W(M);
        if (ae === null)
          throw new Error("Unable to find node on an unmounted component.");
        return ae !== M ? null : M;
      }
      for (var se = M, Ze = re; ; ) {
        var nt = se.return;
        if (nt === null)
          break;
        var Kt = nt.alternate;
        if (Kt === null) {
          var Mr = nt.return;
          if (Mr !== null) {
            se = Ze = Mr;
            continue;
          }
          break;
        }
        if (nt.child === Kt.child) {
          for (var ur = nt.child; ur; ) {
            if (ur === se)
              return le(nt), M;
            if (ur === Ze)
              return le(nt), re;
            ur = ur.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (se.return !== Ze.return)
          se = nt, Ze = Kt;
        else {
          for (var Sn = !1, Ft = nt.child; Ft; ) {
            if (Ft === se) {
              Sn = !0, se = nt, Ze = Kt;
              break;
            }
            if (Ft === Ze) {
              Sn = !0, Ze = nt, se = Kt;
              break;
            }
            Ft = Ft.sibling;
          }
          if (!Sn) {
            for (Ft = Kt.child; Ft; ) {
              if (Ft === se) {
                Sn = !0, se = Kt, Ze = nt;
                break;
              }
              if (Ft === Ze) {
                Sn = !0, Ze = Kt, se = nt;
                break;
              }
              Ft = Ft.sibling;
            }
            if (!Sn)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (se.alternate !== Ze)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (se.tag !== T)
        throw new Error("Unable to find node on an unmounted component.");
      return se.stateNode.current === se ? M : re;
    }
    var ue = Object.assign;
    function oe(M) {
      var re, ae = M.keyCode;
      return "charCode" in M ? (re = M.charCode, re === 0 && ae === 13 && (re = 13)) : re = ae, re === 10 && (re = 13), re >= 32 || re === 13 ? re : 0;
    }
    function me() {
      return !0;
    }
    function Se() {
      return !1;
    }
    function V(M) {
      function re(ae, se, Ze, nt, Kt) {
        this._reactName = ae, this._targetInst = Ze, this.type = se, this.nativeEvent = nt, this.target = Kt, this.currentTarget = null;
        for (var Mr in M)
          if (M.hasOwnProperty(Mr)) {
            var ur = M[Mr];
            ur ? this[Mr] = ur(nt) : this[Mr] = nt[Mr];
          }
        var Sn = nt.defaultPrevented != null ? nt.defaultPrevented : nt.returnValue === !1;
        return Sn ? this.isDefaultPrevented = me : this.isDefaultPrevented = Se, this.isPropagationStopped = Se, this;
      }
      return ue(re.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var ae = this.nativeEvent;
          ae && (ae.preventDefault ? ae.preventDefault() : typeof ae.returnValue != "unknown" && (ae.returnValue = !1), this.isDefaultPrevented = me);
        },
        stopPropagation: function() {
          var ae = this.nativeEvent;
          ae && (ae.stopPropagation ? ae.stopPropagation() : typeof ae.cancelBubble != "unknown" && (ae.cancelBubble = !0), this.isPropagationStopped = me);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: me
      }), re;
    }
    var H = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(M) {
        return M.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, ce = V(H), ke = ue({}, H, {
      view: 0,
      detail: 0
    });
    V(ke);
    var Ue, He, Ne;
    function ne(M) {
      M !== Ne && (Ne && M.type === "mousemove" ? (Ue = M.screenX - Ne.screenX, He = M.screenY - Ne.screenY) : (Ue = 0, He = 0), Ne = M);
    }
    var xe = ue({}, ke, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: cn,
      button: 0,
      buttons: 0,
      relatedTarget: function(M) {
        return M.relatedTarget === void 0 ? M.fromElement === M.srcElement ? M.toElement : M.fromElement : M.relatedTarget;
      },
      movementX: function(M) {
        return "movementX" in M ? M.movementX : (ne(M), Ue);
      },
      movementY: function(M) {
        return "movementY" in M ? M.movementY : He;
      }
    });
    V(xe);
    var gt = ue({}, xe, {
      dataTransfer: 0
    });
    V(gt);
    var ut = ue({}, ke, {
      relatedTarget: 0
    });
    V(ut);
    var dt = ue({}, H, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    });
    V(dt);
    var Ee = ue({}, H, {
      clipboardData: function(M) {
        return "clipboardData" in M ? M.clipboardData : window.clipboardData;
      }
    });
    V(Ee);
    var Be = ue({}, H, {
      data: 0
    });
    V(Be);
    var Te = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, vt = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function mt(M) {
      if (M.key) {
        var re = Te[M.key] || M.key;
        if (re !== "Unidentified")
          return re;
      }
      if (M.type === "keypress") {
        var ae = oe(M);
        return ae === 13 ? "Enter" : String.fromCharCode(ae);
      }
      return M.type === "keydown" || M.type === "keyup" ? vt[M.keyCode] || "Unidentified" : "";
    }
    var gn = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function Vt(M) {
      var re = this, ae = re.nativeEvent;
      if (ae.getModifierState)
        return ae.getModifierState(M);
      var se = gn[M];
      return se ? !!ae[se] : !1;
    }
    function cn(M) {
      return Vt;
    }
    var Jt = ue({}, ke, {
      key: mt,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: cn,
      // Legacy Interface
      charCode: function(M) {
        return M.type === "keypress" ? oe(M) : 0;
      },
      keyCode: function(M) {
        return M.type === "keydown" || M.type === "keyup" ? M.keyCode : 0;
      },
      which: function(M) {
        return M.type === "keypress" ? oe(M) : M.type === "keydown" || M.type === "keyup" ? M.keyCode : 0;
      }
    });
    V(Jt);
    var an = ue({}, xe, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    });
    V(an);
    var En = ue({}, ke, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: cn
    });
    V(En);
    var P = ue({}, H, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    });
    V(P);
    var Le = ue({}, xe, {
      deltaX: function(M) {
        return "deltaX" in M ? M.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in M ? -M.wheelDeltaX : 0
        );
      },
      deltaY: function(M) {
        return "deltaY" in M ? M.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in M ? -M.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in M ? -M.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    });
    V(Le);
    var fe = 1;
    function rt(M, re, ae, se, Ze, nt, Kt, Mr, ur) {
      var Sn = Array.prototype.slice.call(arguments, 3);
      try {
        re.apply(ae, Sn);
      } catch (Ft) {
        this.onError(Ft);
      }
    }
    var Ke = rt;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var ot = document.createElement("react");
      Ke = function(re, ae, se, Ze, nt, Kt, Mr, ur, Sn) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var Ft = document.createEvent("Event"), Oa = !1, Ya = !0, dd = window.event, Pu = Object.getOwnPropertyDescriptor(window, "event");
        function Hu() {
          ot.removeEventListener(Nl, Vu, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = dd);
        }
        var ju = Array.prototype.slice.call(arguments, 3);
        function Vu() {
          Oa = !0, Hu(), ae.apply(se, ju), Ya = !1;
        }
        var or, fc = !1, Ll = !1;
        function _t(Dt) {
          if (or = Dt.error, fc = !0, or === null && Dt.colno === 0 && Dt.lineno === 0 && (Ll = !0), Dt.defaultPrevented && or != null && typeof or == "object")
            try {
              or._suppressLogging = !0;
            } catch {
            }
        }
        var Nl = "react-" + (re || "invokeguardedcallback");
        if (window.addEventListener("error", _t), ot.addEventListener(Nl, Vu, !1), Ft.initEvent(Nl, !1, !1), ot.dispatchEvent(Ft), Pu && Object.defineProperty(window, "event", Pu), Oa && Ya && (fc ? Ll && (or = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : or = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(or)), window.removeEventListener("error", _t), !Oa)
          return Hu(), rt.apply(this, arguments);
      };
    }
    var Ct = Ke, wt = !1, ln = null, dr = !1, oa = null, sa = {
      onError: function(M) {
        wt = !0, ln = M;
      }
    };
    function In(M, re, ae, se, Ze, nt, Kt, Mr, ur) {
      wt = !1, ln = null, Ct.apply(sa, arguments);
    }
    function Vn(M, re, ae, se, Ze, nt, Kt, Mr, ur) {
      if (In.apply(this, arguments), wt) {
        var Sn = Ma();
        dr || (dr = !0, oa = Sn);
      }
    }
    function ir() {
      if (dr) {
        var M = oa;
        throw dr = !1, oa = null, M;
      }
    }
    function Ma() {
      if (wt) {
        var M = ln;
        return wt = !1, ln = null, M;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    var $n = Array.isArray;
    function lr(M) {
      return $n(M);
    }
    var ca = p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, pr = ca.Events, vi = pr[0], b = pr[1], Q = pr[2], Z = pr[3], Ce = pr[4], Qe = c.unstable_act;
    function it(M) {
    }
    var Ve = !1;
    function st(M, re) {
      if (!M)
        return [];
      var ae = L(M);
      if (!ae)
        return [];
      for (var se = ae, Ze = []; ; ) {
        if (se.tag === _ || se.tag === C || se.tag === R || se.tag === U) {
          var nt = se.stateNode;
          re(nt) && Ze.push(nt);
        }
        if (se.child) {
          se.child.return = se, se = se.child;
          continue;
        }
        if (se === ae)
          return Ze;
        for (; !se.sibling; ) {
          if (!se.return || se.return === ae)
            return Ze;
          se = se.return;
        }
        se.sibling.return = se.return, se = se.sibling;
      }
    }
    function Rt(M, re) {
      if (M && !y(M)) {
        var ae, se = String(M);
        throw lr(M) ? ae = "an array" : M && M.nodeType === fe && M.tagName ? ae = "a DOM node" : se === "[object Object]" ? ae = "object with keys {" + Object.keys(M).join(", ") + "}" : ae = se, new Error(re + "(...): the first argument must be a React class instance. " + ("Instead received: " + ae + "."));
      }
    }
    var xt = !1;
    function en(M) {
      xt || (xt = !0, O("ReactDOMTestUtils is deprecated and will be removed in a future major release, because it exposes internal implementation details that are highly likely to change between releases. Upgrade to a modern testing library, such as @testing-library/react. See https://react.dev/warnings/react-dom-test-utils for more info."));
      var re = document.createElement("div");
      return p.render(M, re);
    }
    function qi(M) {
      return c.isValidElement(M);
    }
    function ja(M, re) {
      return c.isValidElement(M) && M.type === re;
    }
    function hi(M) {
      return !!(M && M.nodeType === fe && M.tagName);
    }
    function uc(M) {
      return !!(M && c.isValidElement(M) && M.tagName);
    }
    function Nu(M) {
      return hi(M) ? !1 : M != null && typeof M.render == "function" && typeof M.setState == "function";
    }
    function Uu(M, re) {
      if (!Nu(M))
        return !1;
      var ae = y(M), se = ae.type;
      return se === re;
    }
    function Wi(M, re) {
      if (Rt(M, "findAllInRenderedTree"), !M)
        return [];
      var ae = y(M);
      return st(ae, re);
    }
    function zu(M, re) {
      return Rt(M, "scryRenderedDOMComponentsWithClass"), Wi(M, function(ae) {
        if (hi(ae)) {
          var se = ae.className;
          typeof se != "string" && (se = ae.getAttribute("class") || "");
          var Ze = se.split(/\s+/);
          if (!lr(re)) {
            if (re === void 0)
              throw new Error("TestUtils.scryRenderedDOMComponentsWithClass expects a className as a second argument.");
            re = re.split(/\s+/);
          }
          return re.every(function(nt) {
            return Ze.indexOf(nt) !== -1;
          });
        }
        return !1;
      });
    }
    function zo(M, re) {
      Rt(M, "findRenderedDOMComponentWithClass");
      var ae = zu(M, re);
      if (ae.length !== 1)
        throw new Error("Did not find exactly one match (found: " + ae.length + ") for class:" + re);
      return ae[0];
    }
    function Va(M, re) {
      return Rt(M, "scryRenderedDOMComponentsWithTag"), Wi(M, function(ae) {
        return hi(ae) && ae.tagName.toUpperCase() === re.toUpperCase();
      });
    }
    function $a(M, re) {
      Rt(M, "findRenderedDOMComponentWithTag");
      var ae = Va(M, re);
      if (ae.length !== 1)
        throw new Error("Did not find exactly one match (found: " + ae.length + ") for tag:" + re);
      return ae[0];
    }
    function kr(M, re) {
      return Rt(M, "scryRenderedComponentsWithType"), Wi(M, function(ae) {
        return Uu(ae, re);
      });
    }
    function Qi(M, re) {
      Rt(M, "findRenderedComponentWithType");
      var ae = kr(M, re);
      if (ae.length !== 1)
        throw new Error("Did not find exactly one match (found: " + ae.length + ") for componentType:" + re);
      return ae[0];
    }
    function mi(M, re) {
      return Ve || (Ve = !0, x(`ReactTestUtils.mockComponent() is deprecated. Use shallow rendering or jest.mock() instead.

See https://reactjs.org/link/test-utils-mock-component for more information.`)), re = re || M.mockTagName || "div", M.prototype.render.mockImplementation(function() {
        return c.createElement(re, null, this.props.children);
      }), this;
    }
    function Gi(M, re) {
      return {
        touches: [{
          pageX: M,
          pageY: re
        }]
      };
    }
    function yi(M, re, ae) {
      var se = M.type || "unknown-event";
      M.currentTarget = b(ae), Vn(se, re, void 0, M), M.currentTarget = null;
    }
    function Ol(M) {
      var re = M._dispatchListeners, ae = M._dispatchInstances;
      if (lr(re))
        for (var se = 0; se < re.length && !M.isPropagationStopped(); se++)
          yi(M, re[se], ae[se]);
      else re && yi(M, re, ae);
      M._dispatchListeners = null, M._dispatchInstances = null;
    }
    var Ki = function(M) {
      M && (Ol(M), M.isPersistent() || M.constructor.release(M));
    };
    function Iu(M) {
      return M === "button" || M === "input" || M === "select" || M === "textarea";
    }
    function Fu(M) {
      do
        M = M.return;
      while (M && M.tag !== _);
      return M || null;
    }
    function _r(M, re, ae) {
      for (var se = []; M; )
        se.push(M), M = Fu(M);
      var Ze;
      for (Ze = se.length; Ze-- > 0; )
        re(se[Ze], "captured", ae);
      for (Ze = 0; Ze < se.length; Ze++)
        re(se[Ze], "bubbled", ae);
    }
    function Fn(M, re, ae) {
      switch (M) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(ae.disabled && Iu(re));
        default:
          return !1;
      }
    }
    function Io(M, re) {
      var ae = M.stateNode;
      if (!ae)
        return null;
      var se = Q(ae);
      if (!se)
        return null;
      var Ze = se[re];
      if (Fn(re, M.type, se))
        return null;
      if (Ze && typeof Ze != "function")
        throw new Error("Expected `" + re + "` listener to be a function, instead got a value of `" + typeof Ze + "` type.");
      return Ze;
    }
    function cd(M, re, ae) {
      var se = re._reactName;
      return ae === "captured" && (se += "Capture"), Io(M, se);
    }
    function Fo(M, re, ae) {
      if (M && ae && ae._reactName) {
        var se = ae._reactName, Ze = Io(M, se);
        Ze && (ae._dispatchListeners == null && (ae._dispatchListeners = []), ae._dispatchInstances == null && (ae._dispatchInstances = []), ae._dispatchListeners.push(Ze), ae._dispatchInstances.push(M));
      }
    }
    function oc(M, re, ae) {
      M || O("Dispatching inst must not be null");
      var se = cd(M, ae, re);
      se && (ae._dispatchListeners == null && (ae._dispatchListeners = []), ae._dispatchInstances == null && (ae._dispatchInstances = []), ae._dispatchListeners.push(se), ae._dispatchInstances.push(M));
    }
    function sc(M) {
      M && M._reactName && Fo(M._targetInst, null, M);
    }
    function cc(M) {
      M && M._reactName && _r(M._targetInst, oc, M);
    }
    var Bo = {}, fd = /* @__PURE__ */ new Set(["mouseEnter", "mouseLeave", "pointerEnter", "pointerLeave"]);
    function It(M) {
      return function(re, ae) {
        if (c.isValidElement(re))
          throw new Error("TestUtils.Simulate expected a DOM node as the first argument but received a React element. Pass the DOM node you wish to simulate the event on instead. Note that TestUtils.Simulate will not work if you are using shallow rendering.");
        if (Nu(re))
          throw new Error("TestUtils.Simulate expected a DOM node as the first argument but received a component instance. Pass the DOM node you wish to simulate the event on instead.");
        var se = "on" + M[0].toUpperCase() + M.slice(1), Ze = new it();
        Ze.target = re, Ze.type = M.toLowerCase();
        var nt = vi(re), Kt = new ce(se, Ze.type, nt, Ze, re);
        Kt.persist(), ue(Kt, ae), fd.has(M) ? sc(Kt) : cc(Kt), p.unstable_batchedUpdates(function() {
          Z(re), Ki(Kt), ir();
        }), Ce();
      };
    }
    var ht = ["blur", "cancel", "click", "close", "contextMenu", "copy", "cut", "auxClick", "doubleClick", "dragEnd", "dragStart", "drop", "focus", "input", "invalid", "keyDown", "keyPress", "keyUp", "mouseDown", "mouseUp", "paste", "pause", "play", "pointerCancel", "pointerDown", "pointerUp", "rateChange", "reset", "resize", "seeked", "submit", "touchCancel", "touchEnd", "touchStart", "volumeChange", "drag", "dragEnter", "dragExit", "dragLeave", "dragOver", "mouseMove", "mouseOut", "mouseOver", "pointerMove", "pointerOut", "pointerOver", "scroll", "toggle", "touchMove", "wheel", "abort", "animationEnd", "animationIteration", "animationStart", "canPlay", "canPlayThrough", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "playing", "progress", "seeking", "stalled", "suspend", "timeUpdate", "transitionEnd", "waiting", "mouseEnter", "mouseLeave", "pointerEnter", "pointerLeave", "change", "select", "beforeInput", "compositionEnd", "compositionStart", "compositionUpdate"];
    function gi() {
      ht.forEach(function(M) {
        Bo[M] = It(M);
      });
    }
    gi();
    var Bu = !1, Al = function(re) {
      return Bu || (Bu = !0, O("`ReactDOMTestUtils.act` is deprecated in favor of `React.act`. Import `act` from `react` instead of `react-dom/test-utils`. See https://react.dev/warnings/react-dom-test-utils for more info.")), Qe(re);
    };
    zn.Simulate = Bo, zn.act = Al, zn.findAllInRenderedTree = Wi, zn.findRenderedComponentWithType = Qi, zn.findRenderedDOMComponentWithClass = zo, zn.findRenderedDOMComponentWithTag = $a, zn.isCompositeComponent = Nu, zn.isCompositeComponentWithType = Uu, zn.isDOMComponent = hi, zn.isDOMComponentElement = uc, zn.isElement = qi, zn.isElementOfType = ja, zn.mockComponent = mi, zn.nativeTouchData = Gi, zn.renderIntoDocument = en, zn.scryRenderedComponentsWithType = kr, zn.scryRenderedDOMComponentsWithClass = zu, zn.scryRenderedDOMComponentsWithTag = Va, zn.traverseTwoPhase = _r;
  }()), zn;
}
var ww;
function MM() {
  return ww || (ww = 1, process.env.NODE_ENV === "production" ? by.exports = kM() : by.exports = _M()), by.exports;
}
var OM = MM(), AM = zy();
const Dy = /* @__PURE__ */ n1(AM);
var id = {}, Rw;
function LM() {
  if (Rw) return id;
  Rw = 1;
  var c = zy();
  if (process.env.NODE_ENV === "production")
    id.createRoot = c.createRoot, id.hydrateRoot = c.hydrateRoot;
  else {
    var p = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    id.createRoot = function(m, x) {
      p.usingClientEntryPoint = !0;
      try {
        return c.createRoot(m, x);
      } finally {
        p.usingClientEntryPoint = !1;
      }
    }, id.hydrateRoot = function(m, x, O) {
      p.usingClientEntryPoint = !0;
      try {
        return c.hydrateRoot(m, x, O);
      } finally {
        p.usingClientEntryPoint = !1;
      }
    };
  }
  return id;
}
var xw = LM(), Ml = {}, ky = { exports: {} };
ky.exports;
var Dw;
function a1() {
  return Dw || (Dw = 1, function(c) {
    const m = (A = 0) => (y) => `\x1B[${38 + A};5;${y}m`, x = (A = 0) => (y, U, R) => `\x1B[${38 + A};2;${y};${U};${R}m`;
    function O() {
      const A = /* @__PURE__ */ new Map(), y = {
        modifier: {
          reset: [0, 0],
          // 21 isn't widely supported and 22 does the same thing
          bold: [1, 22],
          dim: [2, 22],
          italic: [3, 23],
          underline: [4, 24],
          overline: [53, 55],
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
      y.color.gray = y.color.blackBright, y.bgColor.bgGray = y.bgColor.bgBlackBright, y.color.grey = y.color.blackBright, y.bgColor.bgGrey = y.bgColor.bgBlackBright;
      for (const [U, R] of Object.entries(y)) {
        for (const [T, _] of Object.entries(R))
          y[T] = {
            open: `\x1B[${_[0]}m`,
            close: `\x1B[${_[1]}m`
          }, R[T] = y[T], A.set(_[0], _[1]);
        Object.defineProperty(y, U, {
          value: R,
          enumerable: !1
        });
      }
      return Object.defineProperty(y, "codes", {
        value: A,
        enumerable: !1
      }), y.color.close = "\x1B[39m", y.bgColor.close = "\x1B[49m", y.color.ansi256 = m(), y.color.ansi16m = x(), y.bgColor.ansi256 = m(10), y.bgColor.ansi16m = x(10), Object.defineProperties(y, {
        rgbToAnsi256: {
          value: (U, R, T) => U === R && R === T ? U < 8 ? 16 : U > 248 ? 231 : Math.round((U - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(U / 255 * 5) + 6 * Math.round(R / 255 * 5) + Math.round(T / 255 * 5),
          enumerable: !1
        },
        hexToRgb: {
          value: (U) => {
            const R = /(?<colorString>[a-f\d]{6}|[a-f\d]{3})/i.exec(U.toString(16));
            if (!R)
              return [0, 0, 0];
            let { colorString: T } = R.groups;
            T.length === 3 && (T = T.split("").map((C) => C + C).join(""));
            const _ = Number.parseInt(T, 16);
            return [
              _ >> 16 & 255,
              _ >> 8 & 255,
              _ & 255
            ];
          },
          enumerable: !1
        },
        hexToAnsi256: {
          value: (U) => y.rgbToAnsi256(...y.hexToRgb(U)),
          enumerable: !1
        }
      }), y;
    }
    Object.defineProperty(c, "exports", {
      enumerable: !0,
      get: O
    });
  }(ky)), ky.exports;
}
var tc = {}, kw;
function Iy() {
  if (kw) return tc;
  kw = 1, Object.defineProperty(tc, "__esModule", {
    value: !0
  }), tc.printIteratorEntries = p, tc.printIteratorValues = m, tc.printListItems = x, tc.printObjectProperties = O;
  const c = (A, y) => {
    const U = Object.keys(A).sort(y);
    return Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(A).forEach((R) => {
      Object.getOwnPropertyDescriptor(A, R).enumerable && U.push(R);
    }), U;
  };
  function p(A, y, U, R, T, _, C = ": ") {
    let D = "", z = A.next();
    if (!z.done) {
      D += y.spacingOuter;
      const J = U + y.indent;
      for (; !z.done; ) {
        const W = _(
          z.value[0],
          y,
          J,
          R,
          T
        ), le = _(
          z.value[1],
          y,
          J,
          R,
          T
        );
        D += J + W + C + le, z = A.next(), z.done ? y.min || (D += ",") : D += "," + y.spacingInner;
      }
      D += y.spacingOuter + U;
    }
    return D;
  }
  function m(A, y, U, R, T, _) {
    let C = "", D = A.next();
    if (!D.done) {
      C += y.spacingOuter;
      const z = U + y.indent;
      for (; !D.done; )
        C += z + _(D.value, y, z, R, T), D = A.next(), D.done ? y.min || (C += ",") : C += "," + y.spacingInner;
      C += y.spacingOuter + U;
    }
    return C;
  }
  function x(A, y, U, R, T, _) {
    let C = "";
    if (A.length) {
      C += y.spacingOuter;
      const D = U + y.indent;
      for (let z = 0; z < A.length; z++)
        C += D, z in A && (C += _(A[z], y, D, R, T)), z < A.length - 1 ? C += "," + y.spacingInner : y.min || (C += ",");
      C += y.spacingOuter + U;
    }
    return C;
  }
  function O(A, y, U, R, T, _) {
    let C = "";
    const D = c(A, y.compareKeys);
    if (D.length) {
      C += y.spacingOuter;
      const z = U + y.indent;
      for (let J = 0; J < D.length; J++) {
        const W = D[J], le = _(W, y, z, R, T), L = _(A[W], y, z, R, T);
        C += z + le + ": " + L, J < D.length - 1 ? C += "," + y.spacingInner : y.min || (C += ",");
      }
      C += y.spacingOuter + U;
    }
    return C;
  }
  return tc;
}
var Cu = {}, _w;
function NM() {
  if (_w) return Cu;
  _w = 1, Object.defineProperty(Cu, "__esModule", {
    value: !0
  }), Cu.test = Cu.serialize = Cu.default = void 0;
  var c = Iy(), p = function() {
    return typeof globalThis < "u" ? globalThis : typeof p < "u" ? p : typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")();
  }(), m = p["jest-symbol-do-not-touch"] || p.Symbol;
  const x = typeof m == "function" && m.for ? m.for("jest.asymmetricMatcher") : 1267621, O = " ", A = (T, _, C, D, z, J) => {
    const W = T.toString();
    return W === "ArrayContaining" || W === "ArrayNotContaining" ? ++D > _.maxDepth ? "[" + W + "]" : W + O + "[" + (0, c.printListItems)(
      T.sample,
      _,
      C,
      D,
      z,
      J
    ) + "]" : W === "ObjectContaining" || W === "ObjectNotContaining" ? ++D > _.maxDepth ? "[" + W + "]" : W + O + "{" + (0, c.printObjectProperties)(
      T.sample,
      _,
      C,
      D,
      z,
      J
    ) + "}" : W === "StringMatching" || W === "StringNotMatching" || W === "StringContaining" || W === "StringNotContaining" ? W + O + J(T.sample, _, C, D, z) : T.toAsymmetricMatcher();
  };
  Cu.serialize = A;
  const y = (T) => T && T.$$typeof === x;
  Cu.test = y;
  var R = {
    serialize: A,
    test: y
  };
  return Cu.default = R, Cu;
}
var wu = {}, cb, Mw;
function UM() {
  return Mw || (Mw = 1, cb = ({ onlyFirst: c = !1 } = {}) => {
    const p = [
      "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
      "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"
    ].join("|");
    return new RegExp(p, c ? void 0 : "g");
  }), cb;
}
var Ow;
function zM() {
  if (Ow) return wu;
  Ow = 1, Object.defineProperty(wu, "__esModule", {
    value: !0
  }), wu.test = wu.serialize = wu.default = void 0;
  var c = m(UM()), p = m(a1());
  function m(R) {
    return R && R.__esModule ? R : { default: R };
  }
  const x = (R) => R.replace((0, c.default)(), (T) => {
    switch (T) {
      case p.default.red.close:
      case p.default.green.close:
      case p.default.cyan.close:
      case p.default.gray.close:
      case p.default.white.close:
      case p.default.yellow.close:
      case p.default.bgRed.close:
      case p.default.bgGreen.close:
      case p.default.bgYellow.close:
      case p.default.inverse.close:
      case p.default.dim.close:
      case p.default.bold.close:
      case p.default.reset.open:
      case p.default.reset.close:
        return "</>";
      case p.default.red.open:
        return "<red>";
      case p.default.green.open:
        return "<green>";
      case p.default.cyan.open:
        return "<cyan>";
      case p.default.gray.open:
        return "<gray>";
      case p.default.white.open:
        return "<white>";
      case p.default.yellow.open:
        return "<yellow>";
      case p.default.bgRed.open:
        return "<bgRed>";
      case p.default.bgGreen.open:
        return "<bgGreen>";
      case p.default.bgYellow.open:
        return "<bgYellow>";
      case p.default.inverse.open:
        return "<inverse>";
      case p.default.dim.open:
        return "<dim>";
      case p.default.bold.open:
        return "<bold>";
      default:
        return "";
    }
  }), O = (R) => typeof R == "string" && !!R.match((0, c.default)());
  wu.test = O;
  const A = (R, T, _, C, D, z) => z(x(R), T, _, C, D);
  wu.serialize = A;
  var U = {
    serialize: A,
    test: O
  };
  return wu.default = U, wu;
}
var Ru = {}, Aw;
function IM() {
  if (Aw) return Ru;
  Aw = 1, Object.defineProperty(Ru, "__esModule", {
    value: !0
  }), Ru.test = Ru.serialize = Ru.default = void 0;
  var c = Iy();
  const p = " ", m = ["DOMStringMap", "NamedNodeMap"], x = /^(HTML\w*Collection|NodeList)$/, O = (_) => m.indexOf(_) !== -1 || x.test(_), A = (_) => _ && _.constructor && !!_.constructor.name && O(_.constructor.name);
  Ru.test = A;
  const y = (_) => _.constructor.name === "NamedNodeMap", U = (_, C, D, z, J, W) => {
    const le = _.constructor.name;
    return ++z > C.maxDepth ? "[" + le + "]" : (C.min ? "" : le + p) + (m.indexOf(le) !== -1 ? "{" + (0, c.printObjectProperties)(
      y(_) ? Array.from(_).reduce((L, ue) => (L[ue.name] = ue.value, L), {}) : { ..._ },
      C,
      D,
      z,
      J,
      W
    ) + "}" : "[" + (0, c.printListItems)(
      Array.from(_),
      C,
      D,
      z,
      J,
      W
    ) + "]");
  };
  Ru.serialize = U;
  var T = {
    serialize: U,
    test: A
  };
  return Ru.default = T, Ru;
}
var xu = {}, ua = {}, wy = {}, Lw;
function FM() {
  if (Lw) return wy;
  Lw = 1, Object.defineProperty(wy, "__esModule", {
    value: !0
  }), wy.default = c;
  function c(p) {
    return p.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  return wy;
}
var Nw;
function kb() {
  if (Nw) return ua;
  Nw = 1, Object.defineProperty(ua, "__esModule", {
    value: !0
  }), ua.printText = ua.printProps = ua.printElementAsLeaf = ua.printElement = ua.printComment = ua.printChildren = void 0;
  var c = p(FM());
  function p(R) {
    return R && R.__esModule ? R : { default: R };
  }
  const m = (R, T, _, C, D, z, J) => {
    const W = C + _.indent, le = _.colors;
    return R.map((L) => {
      const ue = T[L];
      let oe = J(ue, _, W, D, z);
      return typeof ue != "string" && (oe.indexOf(`
`) !== -1 && (oe = _.spacingOuter + W + oe + _.spacingOuter + C), oe = "{" + oe + "}"), _.spacingInner + C + le.prop.open + L + le.prop.close + "=" + le.value.open + oe + le.value.close;
    }).join("");
  };
  ua.printProps = m;
  const x = (R, T, _, C, D, z) => R.map(
    (J) => T.spacingOuter + _ + (typeof J == "string" ? O(J, T) : z(J, T, _, C, D))
  ).join("");
  ua.printChildren = x;
  const O = (R, T) => {
    const _ = T.colors.content;
    return _.open + (0, c.default)(R) + _.close;
  };
  ua.printText = O;
  const A = (R, T) => {
    const _ = T.colors.comment;
    return _.open + "<!--" + (0, c.default)(R) + "-->" + _.close;
  };
  ua.printComment = A;
  const y = (R, T, _, C, D) => {
    const z = C.colors.tag;
    return z.open + "<" + R + (T && z.close + T + C.spacingOuter + D + z.open) + (_ ? ">" + z.close + _ + C.spacingOuter + D + z.open + "</" + R : (T && !C.min ? "" : " ") + "/") + ">" + z.close;
  };
  ua.printElement = y;
  const U = (R, T) => {
    const _ = T.colors.tag;
    return _.open + "<" + R + _.close + " …" + _.open + " />" + _.close;
  };
  return ua.printElementAsLeaf = U, ua;
}
var Uw;
function BM() {
  if (Uw) return xu;
  Uw = 1, Object.defineProperty(xu, "__esModule", {
    value: !0
  }), xu.test = xu.serialize = xu.default = void 0;
  var c = kb();
  const p = 1, m = 3, x = 8, O = 11, A = /^((HTML|SVG)\w*)?Element$/, y = (W) => {
    try {
      return typeof W.hasAttribute == "function" && W.hasAttribute("is");
    } catch {
      return !1;
    }
  }, U = (W) => {
    const le = W.constructor.name, { nodeType: L, tagName: ue } = W, oe = typeof ue == "string" && ue.includes("-") || y(W);
    return L === p && (A.test(le) || oe) || L === m && le === "Text" || L === x && le === "Comment" || L === O && le === "DocumentFragment";
  }, R = (W) => {
    var le;
    return (W == null || (le = W.constructor) === null || le === void 0 ? void 0 : le.name) && U(W);
  };
  xu.test = R;
  function T(W) {
    return W.nodeType === m;
  }
  function _(W) {
    return W.nodeType === x;
  }
  function C(W) {
    return W.nodeType === O;
  }
  const D = (W, le, L, ue, oe, me) => {
    if (T(W))
      return (0, c.printText)(W.data, le);
    if (_(W))
      return (0, c.printComment)(W.data, le);
    const Se = C(W) ? "DocumentFragment" : W.tagName.toLowerCase();
    return ++ue > le.maxDepth ? (0, c.printElementAsLeaf)(Se, le) : (0, c.printElement)(
      Se,
      (0, c.printProps)(
        C(W) ? [] : Array.from(W.attributes).map((V) => V.name).sort(),
        C(W) ? {} : Array.from(W.attributes).reduce((V, H) => (V[H.name] = H.value, V), {}),
        le,
        L + le.indent,
        ue,
        oe,
        me
      ),
      (0, c.printChildren)(
        Array.prototype.slice.call(W.childNodes || W.children),
        le,
        L + le.indent,
        ue,
        oe,
        me
      ),
      le,
      L
    );
  };
  xu.serialize = D;
  var J = {
    serialize: D,
    test: R
  };
  return xu.default = J, xu;
}
var Du = {}, zw;
function PM() {
  if (zw) return Du;
  zw = 1, Object.defineProperty(Du, "__esModule", {
    value: !0
  }), Du.test = Du.serialize = Du.default = void 0;
  var c = Iy();
  const p = "@@__IMMUTABLE_ITERABLE__@@", m = "@@__IMMUTABLE_LIST__@@", x = "@@__IMMUTABLE_KEYED__@@", O = "@@__IMMUTABLE_MAP__@@", A = "@@__IMMUTABLE_ORDERED__@@", y = "@@__IMMUTABLE_RECORD__@@", U = "@@__IMMUTABLE_SEQ__@@", R = "@@__IMMUTABLE_SET__@@", T = "@@__IMMUTABLE_STACK__@@", _ = (H) => "Immutable." + H, C = (H) => "[" + H + "]", D = " ", z = "…", J = (H, ce, ke, Ue, He, Ne, ne) => ++Ue > ce.maxDepth ? C(_(ne)) : _(ne) + D + "{" + (0, c.printIteratorEntries)(
    H.entries(),
    ce,
    ke,
    Ue,
    He,
    Ne
  ) + "}";
  function W(H) {
    let ce = 0;
    return {
      next() {
        if (ce < H._keys.length) {
          const ke = H._keys[ce++];
          return {
            done: !1,
            value: [ke, H.get(ke)]
          };
        }
        return {
          done: !0,
          value: void 0
        };
      }
    };
  }
  const le = (H, ce, ke, Ue, He, Ne) => {
    const ne = _(H._name || "Record");
    return ++Ue > ce.maxDepth ? C(ne) : ne + D + "{" + (0, c.printIteratorEntries)(
      W(H),
      ce,
      ke,
      Ue,
      He,
      Ne
    ) + "}";
  }, L = (H, ce, ke, Ue, He, Ne) => {
    const ne = _("Seq");
    return ++Ue > ce.maxDepth ? C(ne) : H[x] ? ne + D + "{" + // from Immutable collection of entries or from ECMAScript object
    (H._iter || H._object ? (0, c.printIteratorEntries)(
      H.entries(),
      ce,
      ke,
      Ue,
      He,
      Ne
    ) : z) + "}" : ne + D + "[" + (H._iter || // from Immutable collection of values
    H._array || // from ECMAScript array
    H._collection || // from ECMAScript collection in immutable v4
    H._iterable ? (0, c.printIteratorValues)(
      H.values(),
      ce,
      ke,
      Ue,
      He,
      Ne
    ) : z) + "]";
  }, ue = (H, ce, ke, Ue, He, Ne, ne) => ++Ue > ce.maxDepth ? C(_(ne)) : _(ne) + D + "[" + (0, c.printIteratorValues)(
    H.values(),
    ce,
    ke,
    Ue,
    He,
    Ne
  ) + "]", oe = (H, ce, ke, Ue, He, Ne) => H[O] ? J(
    H,
    ce,
    ke,
    Ue,
    He,
    Ne,
    H[A] ? "OrderedMap" : "Map"
  ) : H[m] ? ue(
    H,
    ce,
    ke,
    Ue,
    He,
    Ne,
    "List"
  ) : H[R] ? ue(
    H,
    ce,
    ke,
    Ue,
    He,
    Ne,
    H[A] ? "OrderedSet" : "Set"
  ) : H[T] ? ue(
    H,
    ce,
    ke,
    Ue,
    He,
    Ne,
    "Stack"
  ) : H[U] ? L(H, ce, ke, Ue, He, Ne) : le(H, ce, ke, Ue, He, Ne);
  Du.serialize = oe;
  const me = (H) => H && (H[p] === !0 || H[y] === !0);
  Du.test = me;
  var V = {
    serialize: oe,
    test: me
  };
  return Du.default = V, Du;
}
var ku = {}, Ry = { exports: {} }, Yt = {};
/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Iw;
function HM() {
  if (Iw) return Yt;
  Iw = 1;
  var c = 60103, p = 60106, m = 60107, x = 60108, O = 60114, A = 60109, y = 60110, U = 60112, R = 60113, T = 60120, _ = 60115, C = 60116, D = 60121, z = 60122, J = 60117, W = 60129, le = 60131;
  if (typeof Symbol == "function" && Symbol.for) {
    var L = Symbol.for;
    c = L("react.element"), p = L("react.portal"), m = L("react.fragment"), x = L("react.strict_mode"), O = L("react.profiler"), A = L("react.provider"), y = L("react.context"), U = L("react.forward_ref"), R = L("react.suspense"), T = L("react.suspense_list"), _ = L("react.memo"), C = L("react.lazy"), D = L("react.block"), z = L("react.server.block"), J = L("react.fundamental"), W = L("react.debug_trace_mode"), le = L("react.legacy_hidden");
  }
  function ue(ne) {
    if (typeof ne == "object" && ne !== null) {
      var xe = ne.$$typeof;
      switch (xe) {
        case c:
          switch (ne = ne.type, ne) {
            case m:
            case O:
            case x:
            case R:
            case T:
              return ne;
            default:
              switch (ne = ne && ne.$$typeof, ne) {
                case y:
                case U:
                case C:
                case _:
                case A:
                  return ne;
                default:
                  return xe;
              }
          }
        case p:
          return xe;
      }
    }
  }
  var oe = A, me = c, Se = U, V = m, H = C, ce = _, ke = p, Ue = O, He = x, Ne = R;
  return Yt.ContextConsumer = y, Yt.ContextProvider = oe, Yt.Element = me, Yt.ForwardRef = Se, Yt.Fragment = V, Yt.Lazy = H, Yt.Memo = ce, Yt.Portal = ke, Yt.Profiler = Ue, Yt.StrictMode = He, Yt.Suspense = Ne, Yt.isAsyncMode = function() {
    return !1;
  }, Yt.isConcurrentMode = function() {
    return !1;
  }, Yt.isContextConsumer = function(ne) {
    return ue(ne) === y;
  }, Yt.isContextProvider = function(ne) {
    return ue(ne) === A;
  }, Yt.isElement = function(ne) {
    return typeof ne == "object" && ne !== null && ne.$$typeof === c;
  }, Yt.isForwardRef = function(ne) {
    return ue(ne) === U;
  }, Yt.isFragment = function(ne) {
    return ue(ne) === m;
  }, Yt.isLazy = function(ne) {
    return ue(ne) === C;
  }, Yt.isMemo = function(ne) {
    return ue(ne) === _;
  }, Yt.isPortal = function(ne) {
    return ue(ne) === p;
  }, Yt.isProfiler = function(ne) {
    return ue(ne) === O;
  }, Yt.isStrictMode = function(ne) {
    return ue(ne) === x;
  }, Yt.isSuspense = function(ne) {
    return ue(ne) === R;
  }, Yt.isValidElementType = function(ne) {
    return typeof ne == "string" || typeof ne == "function" || ne === m || ne === O || ne === W || ne === x || ne === R || ne === T || ne === le || typeof ne == "object" && ne !== null && (ne.$$typeof === C || ne.$$typeof === _ || ne.$$typeof === A || ne.$$typeof === y || ne.$$typeof === U || ne.$$typeof === J || ne.$$typeof === D || ne[0] === z);
  }, Yt.typeOf = ue, Yt;
}
var qt = {};
/** @license React v17.0.2
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fw;
function jM() {
  return Fw || (Fw = 1, process.env.NODE_ENV !== "production" && function() {
    var c = 60103, p = 60106, m = 60107, x = 60108, O = 60114, A = 60109, y = 60110, U = 60112, R = 60113, T = 60120, _ = 60115, C = 60116, D = 60121, z = 60122, J = 60117, W = 60129, le = 60131;
    if (typeof Symbol == "function" && Symbol.for) {
      var L = Symbol.for;
      c = L("react.element"), p = L("react.portal"), m = L("react.fragment"), x = L("react.strict_mode"), O = L("react.profiler"), A = L("react.provider"), y = L("react.context"), U = L("react.forward_ref"), R = L("react.suspense"), T = L("react.suspense_list"), _ = L("react.memo"), C = L("react.lazy"), D = L("react.block"), z = L("react.server.block"), J = L("react.fundamental"), L("react.scope"), L("react.opaque.id"), W = L("react.debug_trace_mode"), L("react.offscreen"), le = L("react.legacy_hidden");
    }
    var ue = !1;
    function oe(fe) {
      return !!(typeof fe == "string" || typeof fe == "function" || fe === m || fe === O || fe === W || fe === x || fe === R || fe === T || fe === le || ue || typeof fe == "object" && fe !== null && (fe.$$typeof === C || fe.$$typeof === _ || fe.$$typeof === A || fe.$$typeof === y || fe.$$typeof === U || fe.$$typeof === J || fe.$$typeof === D || fe[0] === z));
    }
    function me(fe) {
      if (typeof fe == "object" && fe !== null) {
        var rt = fe.$$typeof;
        switch (rt) {
          case c:
            var Ke = fe.type;
            switch (Ke) {
              case m:
              case O:
              case x:
              case R:
              case T:
                return Ke;
              default:
                var ot = Ke && Ke.$$typeof;
                switch (ot) {
                  case y:
                  case U:
                  case C:
                  case _:
                  case A:
                    return ot;
                  default:
                    return rt;
                }
            }
          case p:
            return rt;
        }
      }
    }
    var Se = y, V = A, H = c, ce = U, ke = m, Ue = C, He = _, Ne = p, ne = O, xe = x, gt = R, ut = !1, dt = !1;
    function Ee(fe) {
      return ut || (ut = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Be(fe) {
      return dt || (dt = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Te(fe) {
      return me(fe) === y;
    }
    function vt(fe) {
      return me(fe) === A;
    }
    function mt(fe) {
      return typeof fe == "object" && fe !== null && fe.$$typeof === c;
    }
    function gn(fe) {
      return me(fe) === U;
    }
    function Vt(fe) {
      return me(fe) === m;
    }
    function cn(fe) {
      return me(fe) === C;
    }
    function Jt(fe) {
      return me(fe) === _;
    }
    function an(fe) {
      return me(fe) === p;
    }
    function En(fe) {
      return me(fe) === O;
    }
    function P(fe) {
      return me(fe) === x;
    }
    function Le(fe) {
      return me(fe) === R;
    }
    qt.ContextConsumer = Se, qt.ContextProvider = V, qt.Element = H, qt.ForwardRef = ce, qt.Fragment = ke, qt.Lazy = Ue, qt.Memo = He, qt.Portal = Ne, qt.Profiler = ne, qt.StrictMode = xe, qt.Suspense = gt, qt.isAsyncMode = Ee, qt.isConcurrentMode = Be, qt.isContextConsumer = Te, qt.isContextProvider = vt, qt.isElement = mt, qt.isForwardRef = gn, qt.isFragment = Vt, qt.isLazy = cn, qt.isMemo = Jt, qt.isPortal = an, qt.isProfiler = En, qt.isStrictMode = P, qt.isSuspense = Le, qt.isValidElementType = oe, qt.typeOf = me;
  }()), qt;
}
var Bw;
function VM() {
  return Bw || (Bw = 1, process.env.NODE_ENV === "production" ? Ry.exports = HM() : Ry.exports = jM()), Ry.exports;
}
var Pw;
function $M() {
  if (Pw) return ku;
  Pw = 1, Object.defineProperty(ku, "__esModule", {
    value: !0
  }), ku.test = ku.serialize = ku.default = void 0;
  var c = x(VM()), p = kb();
  function m(C) {
    if (typeof WeakMap != "function") return null;
    var D = /* @__PURE__ */ new WeakMap(), z = /* @__PURE__ */ new WeakMap();
    return (m = function(J) {
      return J ? z : D;
    })(C);
  }
  function x(C, D) {
    if (C && C.__esModule)
      return C;
    if (C === null || typeof C != "object" && typeof C != "function")
      return { default: C };
    var z = m(D);
    if (z && z.has(C))
      return z.get(C);
    var J = {}, W = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var le in C)
      if (le !== "default" && Object.prototype.hasOwnProperty.call(C, le)) {
        var L = W ? Object.getOwnPropertyDescriptor(C, le) : null;
        L && (L.get || L.set) ? Object.defineProperty(J, le, L) : J[le] = C[le];
      }
    return J.default = C, z && z.set(C, J), J;
  }
  const O = (C, D = []) => (Array.isArray(C) ? C.forEach((z) => {
    O(z, D);
  }) : C != null && C !== !1 && D.push(C), D), A = (C) => {
    const D = C.type;
    if (typeof D == "string")
      return D;
    if (typeof D == "function")
      return D.displayName || D.name || "Unknown";
    if (c.isFragment(C))
      return "React.Fragment";
    if (c.isSuspense(C))
      return "React.Suspense";
    if (typeof D == "object" && D !== null) {
      if (c.isContextProvider(C))
        return "Context.Provider";
      if (c.isContextConsumer(C))
        return "Context.Consumer";
      if (c.isForwardRef(C)) {
        if (D.displayName)
          return D.displayName;
        const z = D.render.displayName || D.render.name || "";
        return z !== "" ? "ForwardRef(" + z + ")" : "ForwardRef";
      }
      if (c.isMemo(C)) {
        const z = D.displayName || D.type.displayName || D.type.name || "";
        return z !== "" ? "Memo(" + z + ")" : "Memo";
      }
    }
    return "UNDEFINED";
  }, y = (C) => {
    const { props: D } = C;
    return Object.keys(D).filter((z) => z !== "children" && D[z] !== void 0).sort();
  }, U = (C, D, z, J, W, le) => ++J > D.maxDepth ? (0, p.printElementAsLeaf)(A(C), D) : (0, p.printElement)(
    A(C),
    (0, p.printProps)(
      y(C),
      C.props,
      D,
      z + D.indent,
      J,
      W,
      le
    ),
    (0, p.printChildren)(
      O(C.props.children),
      D,
      z + D.indent,
      J,
      W,
      le
    ),
    D,
    z
  );
  ku.serialize = U;
  const R = (C) => C != null && c.isElement(C);
  ku.test = R;
  var _ = {
    serialize: U,
    test: R
  };
  return ku.default = _, ku;
}
var _u = {}, Hw;
function YM() {
  if (Hw) return _u;
  Hw = 1, Object.defineProperty(_u, "__esModule", {
    value: !0
  }), _u.test = _u.serialize = _u.default = void 0;
  var c = kb(), p = function() {
    return typeof globalThis < "u" ? globalThis : typeof p < "u" ? p : typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")();
  }(), m = p["jest-symbol-do-not-touch"] || p.Symbol;
  const x = typeof m == "function" && m.for ? m.for("react.test.json") : 245830487, O = (T) => {
    const { props: _ } = T;
    return _ ? Object.keys(_).filter((C) => _[C] !== void 0).sort() : [];
  }, A = (T, _, C, D, z, J) => ++D > _.maxDepth ? (0, c.printElementAsLeaf)(T.type, _) : (0, c.printElement)(
    T.type,
    T.props ? (0, c.printProps)(
      O(T),
      T.props,
      _,
      C + _.indent,
      D,
      z,
      J
    ) : "",
    T.children ? (0, c.printChildren)(
      T.children,
      _,
      C + _.indent,
      D,
      z,
      J
    ) : "",
    _,
    C
  );
  _u.serialize = A;
  const y = (T) => T && T.$$typeof === x;
  _u.test = y;
  var R = {
    serialize: A,
    test: y
  };
  return _u.default = R, _u;
}
var jw;
function qM() {
  if (jw) return Ml;
  jw = 1, Object.defineProperty(Ml, "__esModule", {
    value: !0
  }), Ml.default = Ml.DEFAULT_OPTIONS = void 0, Ml.format = Jt, Ml.plugins = void 0;
  var c = T(a1()), p = Iy(), m = T(
    NM()
  ), x = T(zM()), O = T(IM()), A = T(BM()), y = T(PM()), U = T($M()), R = T(
    YM()
  );
  function T(P) {
    return P && P.__esModule ? P : { default: P };
  }
  const _ = Object.prototype.toString, C = Date.prototype.toISOString, D = Error.prototype.toString, z = RegExp.prototype.toString, J = (P) => typeof P.constructor == "function" && P.constructor.name || "Object", W = (P) => typeof window < "u" && P === window, le = /^Symbol\((.*)\)(.*)$/, L = /\n/gi;
  class ue extends Error {
    constructor(Le, fe) {
      super(Le), this.stack = fe, this.name = this.constructor.name;
    }
  }
  function oe(P) {
    return P === "[object Array]" || P === "[object ArrayBuffer]" || P === "[object DataView]" || P === "[object Float32Array]" || P === "[object Float64Array]" || P === "[object Int8Array]" || P === "[object Int16Array]" || P === "[object Int32Array]" || P === "[object Uint8Array]" || P === "[object Uint8ClampedArray]" || P === "[object Uint16Array]" || P === "[object Uint32Array]";
  }
  function me(P) {
    return Object.is(P, -0) ? "-0" : String(P);
  }
  function Se(P) {
    return `${P}n`;
  }
  function V(P, Le) {
    return Le ? "[Function " + (P.name || "anonymous") + "]" : "[Function]";
  }
  function H(P) {
    return String(P).replace(le, "Symbol($1)");
  }
  function ce(P) {
    return "[" + D.call(P) + "]";
  }
  function ke(P, Le, fe, rt) {
    if (P === !0 || P === !1)
      return "" + P;
    if (P === void 0)
      return "undefined";
    if (P === null)
      return "null";
    const Ke = typeof P;
    if (Ke === "number")
      return me(P);
    if (Ke === "bigint")
      return Se(P);
    if (Ke === "string")
      return rt ? '"' + P.replace(/"|\\/g, "\\$&") + '"' : '"' + P + '"';
    if (Ke === "function")
      return V(P, Le);
    if (Ke === "symbol")
      return H(P);
    const ot = _.call(P);
    return ot === "[object WeakMap]" ? "WeakMap {}" : ot === "[object WeakSet]" ? "WeakSet {}" : ot === "[object Function]" || ot === "[object GeneratorFunction]" ? V(P, Le) : ot === "[object Symbol]" ? H(P) : ot === "[object Date]" ? isNaN(+P) ? "Date { NaN }" : C.call(P) : ot === "[object Error]" ? ce(P) : ot === "[object RegExp]" ? fe ? z.call(P).replace(/[\\^$*+?.()|[\]{}]/g, "\\$&") : z.call(P) : P instanceof Error ? ce(P) : null;
  }
  function Ue(P, Le, fe, rt, Ke, ot) {
    if (Ke.indexOf(P) !== -1)
      return "[Circular]";
    Ke = Ke.slice(), Ke.push(P);
    const Ct = ++rt > Le.maxDepth, wt = Le.min;
    if (Le.callToJSON && !Ct && P.toJSON && typeof P.toJSON == "function" && !ot)
      return xe(P.toJSON(), Le, fe, rt, Ke, !0);
    const ln = _.call(P);
    return ln === "[object Arguments]" ? Ct ? "[Arguments]" : (wt ? "" : "Arguments ") + "[" + (0, p.printListItems)(
      P,
      Le,
      fe,
      rt,
      Ke,
      xe
    ) + "]" : oe(ln) ? Ct ? "[" + P.constructor.name + "]" : (wt || !Le.printBasicPrototype && P.constructor.name === "Array" ? "" : P.constructor.name + " ") + "[" + (0, p.printListItems)(
      P,
      Le,
      fe,
      rt,
      Ke,
      xe
    ) + "]" : ln === "[object Map]" ? Ct ? "[Map]" : "Map {" + (0, p.printIteratorEntries)(
      P.entries(),
      Le,
      fe,
      rt,
      Ke,
      xe,
      " => "
    ) + "}" : ln === "[object Set]" ? Ct ? "[Set]" : "Set {" + (0, p.printIteratorValues)(
      P.values(),
      Le,
      fe,
      rt,
      Ke,
      xe
    ) + "}" : Ct || W(P) ? "[" + J(P) + "]" : (wt || !Le.printBasicPrototype && J(P) === "Object" ? "" : J(P) + " ") + "{" + (0, p.printObjectProperties)(
      P,
      Le,
      fe,
      rt,
      Ke,
      xe
    ) + "}";
  }
  function He(P) {
    return P.serialize != null;
  }
  function Ne(P, Le, fe, rt, Ke, ot) {
    let Ct;
    try {
      Ct = He(P) ? P.serialize(Le, fe, rt, Ke, ot, xe) : P.print(
        Le,
        (wt) => xe(wt, fe, rt, Ke, ot),
        (wt) => {
          const ln = rt + fe.indent;
          return ln + wt.replace(L, `
` + ln);
        },
        {
          edgeSpacing: fe.spacingOuter,
          min: fe.min,
          spacing: fe.spacingInner
        },
        fe.colors
      );
    } catch (wt) {
      throw new ue(wt.message, wt.stack);
    }
    if (typeof Ct != "string")
      throw new Error(
        `pretty-format: Plugin must return type "string" but instead returned "${typeof Ct}".`
      );
    return Ct;
  }
  function ne(P, Le) {
    for (let fe = 0; fe < P.length; fe++)
      try {
        if (P[fe].test(Le))
          return P[fe];
      } catch (rt) {
        throw new ue(rt.message, rt.stack);
      }
    return null;
  }
  function xe(P, Le, fe, rt, Ke, ot) {
    const Ct = ne(Le.plugins, P);
    if (Ct !== null)
      return Ne(Ct, P, Le, fe, rt, Ke);
    const wt = ke(
      P,
      Le.printFunctionName,
      Le.escapeRegex,
      Le.escapeString
    );
    return wt !== null ? wt : Ue(
      P,
      Le,
      fe,
      rt,
      Ke,
      ot
    );
  }
  const gt = {
    comment: "gray",
    content: "reset",
    prop: "yellow",
    tag: "cyan",
    value: "green"
  }, ut = Object.keys(gt), dt = {
    callToJSON: !0,
    compareKeys: void 0,
    escapeRegex: !1,
    escapeString: !0,
    highlight: !1,
    indent: 2,
    maxDepth: 1 / 0,
    min: !1,
    plugins: [],
    printBasicPrototype: !0,
    printFunctionName: !0,
    theme: gt
  };
  Ml.DEFAULT_OPTIONS = dt;
  function Ee(P) {
    if (Object.keys(P).forEach((Le) => {
      if (!dt.hasOwnProperty(Le))
        throw new Error(`pretty-format: Unknown option "${Le}".`);
    }), P.min && P.indent !== void 0 && P.indent !== 0)
      throw new Error(
        'pretty-format: Options "min" and "indent" cannot be used together.'
      );
    if (P.theme !== void 0) {
      if (P.theme === null)
        throw new Error('pretty-format: Option "theme" must not be null.');
      if (typeof P.theme != "object")
        throw new Error(
          `pretty-format: Option "theme" must be of type "object" but instead received "${typeof P.theme}".`
        );
    }
  }
  const Be = (P) => ut.reduce((Le, fe) => {
    const rt = P.theme && P.theme[fe] !== void 0 ? P.theme[fe] : gt[fe], Ke = rt && c.default[rt];
    if (Ke && typeof Ke.close == "string" && typeof Ke.open == "string")
      Le[fe] = Ke;
    else
      throw new Error(
        `pretty-format: Option "theme" has a key "${fe}" whose value "${rt}" is undefined in ansi-styles.`
      );
    return Le;
  }, /* @__PURE__ */ Object.create(null)), Te = () => ut.reduce((P, Le) => (P[Le] = {
    close: "",
    open: ""
  }, P), /* @__PURE__ */ Object.create(null)), vt = (P) => P && P.printFunctionName !== void 0 ? P.printFunctionName : dt.printFunctionName, mt = (P) => P && P.escapeRegex !== void 0 ? P.escapeRegex : dt.escapeRegex, gn = (P) => P && P.escapeString !== void 0 ? P.escapeString : dt.escapeString, Vt = (P) => {
    var Le;
    return {
      callToJSON: P && P.callToJSON !== void 0 ? P.callToJSON : dt.callToJSON,
      colors: P && P.highlight ? Be(P) : Te(),
      compareKeys: P && typeof P.compareKeys == "function" ? P.compareKeys : dt.compareKeys,
      escapeRegex: mt(P),
      escapeString: gn(P),
      indent: P && P.min ? "" : cn(
        P && P.indent !== void 0 ? P.indent : dt.indent
      ),
      maxDepth: P && P.maxDepth !== void 0 ? P.maxDepth : dt.maxDepth,
      min: P && P.min !== void 0 ? P.min : dt.min,
      plugins: P && P.plugins !== void 0 ? P.plugins : dt.plugins,
      printBasicPrototype: (Le = P == null ? void 0 : P.printBasicPrototype) !== null && Le !== void 0 ? Le : !0,
      printFunctionName: vt(P),
      spacingInner: P && P.min ? " " : `
`,
      spacingOuter: P && P.min ? "" : `
`
    };
  };
  function cn(P) {
    return new Array(P + 1).join(" ");
  }
  function Jt(P, Le) {
    if (Le && (Ee(Le), Le.plugins)) {
      const rt = ne(Le.plugins, P);
      if (rt !== null)
        return Ne(rt, P, Vt(Le), "", 0, []);
    }
    const fe = ke(
      P,
      vt(Le),
      mt(Le),
      gn(Le)
    );
    return fe !== null ? fe : Ue(P, Vt(Le), "", 0, []);
  }
  const an = {
    AsymmetricMatcher: m.default,
    ConvertAnsi: x.default,
    DOMCollection: O.default,
    DOMElement: A.default,
    Immutable: y.default,
    ReactElement: U.default,
    ReactTestComponent: R.default
  };
  Ml.plugins = an;
  var En = Jt;
  return Ml.default = En, Ml;
}
var i1 = qM(), WM = Object.prototype.toString;
function QM(c) {
  return typeof c == "function" || WM.call(c) === "[object Function]";
}
function GM(c) {
  var p = Number(c);
  return isNaN(p) ? 0 : p === 0 || !isFinite(p) ? p : (p > 0 ? 1 : -1) * Math.floor(Math.abs(p));
}
var KM = Math.pow(2, 53) - 1;
function XM(c) {
  var p = GM(c);
  return Math.min(Math.max(p, 0), KM);
}
function Yi(c, p) {
  var m = Array, x = Object(c);
  if (c == null)
    throw new TypeError("Array.from requires an array-like object - not null or undefined");
  for (var O = XM(x.length), A = QM(m) ? Object(new m(O)) : new Array(O), y = 0, U; y < O; )
    U = x[y], A[y] = U, y += 1;
  return A.length = O, A;
}
function Cv(c) {
  "@babel/helpers - typeof";
  return Cv = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(p) {
    return typeof p;
  } : function(p) {
    return p && typeof Symbol == "function" && p.constructor === Symbol && p !== Symbol.prototype ? "symbol" : typeof p;
  }, Cv(c);
}
function ZM(c, p) {
  if (!(c instanceof p))
    throw new TypeError("Cannot call a class as a function");
}
function JM(c, p) {
  for (var m = 0; m < p.length; m++) {
    var x = p[m];
    x.enumerable = x.enumerable || !1, x.configurable = !0, "value" in x && (x.writable = !0), Object.defineProperty(c, l1(x.key), x);
  }
}
function eO(c, p, m) {
  return p && JM(c.prototype, p), Object.defineProperty(c, "prototype", { writable: !1 }), c;
}
function tO(c, p, m) {
  return p = l1(p), p in c ? Object.defineProperty(c, p, { value: m, enumerable: !0, configurable: !0, writable: !0 }) : c[p] = m, c;
}
function l1(c) {
  var p = nO(c, "string");
  return Cv(p) === "symbol" ? p : String(p);
}
function nO(c, p) {
  if (Cv(c) !== "object" || c === null) return c;
  var m = c[Symbol.toPrimitive];
  if (m !== void 0) {
    var x = m.call(c, p);
    if (Cv(x) !== "object") return x;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (p === "string" ? String : Number)(c);
}
var rO = /* @__PURE__ */ function() {
  function c() {
    var p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    ZM(this, c), tO(this, "items", void 0), this.items = p;
  }
  return eO(c, [{
    key: "add",
    value: function(m) {
      return this.has(m) === !1 && this.items.push(m), this;
    }
  }, {
    key: "clear",
    value: function() {
      this.items = [];
    }
  }, {
    key: "delete",
    value: function(m) {
      var x = this.items.length;
      return this.items = this.items.filter(function(O) {
        return O !== m;
      }), x !== this.items.length;
    }
  }, {
    key: "forEach",
    value: function(m) {
      var x = this;
      this.items.forEach(function(O) {
        m(O, O, x);
      });
    }
  }, {
    key: "has",
    value: function(m) {
      return this.items.indexOf(m) !== -1;
    }
  }, {
    key: "size",
    get: function() {
      return this.items.length;
    }
  }]), c;
}();
const aO = typeof Set > "u" ? Set : rO;
function Qr(c) {
  var p;
  return (
    // eslint-disable-next-line no-restricted-properties -- actual guard for environments without localName
    (p = c.localName) !== null && p !== void 0 ? p : (
      // eslint-disable-next-line no-restricted-properties -- required for the fallback
      c.tagName.toLowerCase()
    )
  );
}
var iO = {
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
}, lO = {
  caption: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  code: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  deletion: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  emphasis: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  generic: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby", "aria-roledescription"]),
  insertion: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  paragraph: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  presentation: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  strong: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  subscript: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  superscript: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"])
};
function uO(c, p) {
  return [
    "aria-atomic",
    "aria-busy",
    "aria-controls",
    "aria-current",
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
  ].some(function(m) {
    var x;
    return c.hasAttribute(m) && !((x = lO[p]) !== null && x !== void 0 && x.has(m));
  });
}
function u1(c, p) {
  return uO(c, p);
}
function oO(c) {
  var p = cO(c);
  if (p === null || p === "presentation") {
    var m = sO(c);
    if (p !== "presentation" || u1(c, m || ""))
      return m;
  }
  return p;
}
function sO(c) {
  var p = iO[Qr(c)];
  if (p !== void 0)
    return p;
  switch (Qr(c)) {
    case "a":
    case "area":
    case "link":
      if (c.hasAttribute("href"))
        return "link";
      break;
    case "img":
      return c.getAttribute("alt") === "" && !u1(c, "img") ? "presentation" : "img";
    case "input": {
      var m = c, x = m.type;
      switch (x) {
        case "button":
        case "image":
        case "reset":
        case "submit":
          return "button";
        case "checkbox":
        case "radio":
          return x;
        case "range":
          return "slider";
        case "email":
        case "tel":
        case "text":
        case "url":
          return c.hasAttribute("list") ? "combobox" : "textbox";
        case "search":
          return c.hasAttribute("list") ? "combobox" : "searchbox";
        case "number":
          return "spinbutton";
        default:
          return null;
      }
    }
    case "select":
      return c.hasAttribute("multiple") || c.size > 1 ? "listbox" : "combobox";
  }
  return null;
}
function cO(c) {
  var p = c.getAttribute("role");
  if (p !== null) {
    var m = p.trim().split(" ")[0];
    if (m.length > 0)
      return m;
  }
  return null;
}
function sn(c) {
  return c !== null && c.nodeType === c.ELEMENT_NODE;
}
function o1(c) {
  return sn(c) && Qr(c) === "caption";
}
function _y(c) {
  return sn(c) && Qr(c) === "input";
}
function fO(c) {
  return sn(c) && Qr(c) === "optgroup";
}
function dO(c) {
  return sn(c) && Qr(c) === "select";
}
function pO(c) {
  return sn(c) && Qr(c) === "table";
}
function vO(c) {
  return sn(c) && Qr(c) === "textarea";
}
function hO(c) {
  var p = c.ownerDocument === null ? c : c.ownerDocument, m = p.defaultView;
  if (m === null)
    throw new TypeError("no window available");
  return m;
}
function mO(c) {
  return sn(c) && Qr(c) === "fieldset";
}
function yO(c) {
  return sn(c) && Qr(c) === "legend";
}
function gO(c) {
  return sn(c) && Qr(c) === "slot";
}
function EO(c) {
  return sn(c) && c.ownerSVGElement !== void 0;
}
function SO(c) {
  return sn(c) && Qr(c) === "svg";
}
function bO(c) {
  return EO(c) && Qr(c) === "title";
}
function My(c, p) {
  if (sn(c) && c.hasAttribute(p)) {
    var m = c.getAttribute(p).split(" "), x = c.getRootNode ? c.getRootNode() : c.ownerDocument;
    return m.map(function(O) {
      return x.getElementById(O);
    }).filter(
      function(O) {
        return O !== null;
      }
      // TODO: why does this not narrow?
    );
  }
  return [];
}
function Ou(c, p) {
  return sn(c) ? p.indexOf(oO(c)) !== -1 : !1;
}
function TO(c) {
  return c.trim().replace(/\s\s+/g, " ");
}
function CO(c, p) {
  if (!sn(c))
    return !1;
  if (c.hasAttribute("hidden") || c.getAttribute("aria-hidden") === "true")
    return !0;
  var m = p(c);
  return m.getPropertyValue("display") === "none" || m.getPropertyValue("visibility") === "hidden";
}
function wO(c) {
  return Ou(c, ["button", "combobox", "listbox", "textbox"]) || s1(c, "range");
}
function s1(c, p) {
  if (!sn(c))
    return !1;
  switch (p) {
    case "range":
      return Ou(c, ["meter", "progressbar", "scrollbar", "slider", "spinbutton"]);
    default:
      throw new TypeError("No knowledge about abstract role '".concat(p, "'. This is likely a bug :("));
  }
}
function Vw(c, p) {
  var m = Yi(c.querySelectorAll(p));
  return My(c, "aria-owns").forEach(function(x) {
    m.push.apply(m, Yi(x.querySelectorAll(p)));
  }), m;
}
function RO(c) {
  return dO(c) ? c.selectedOptions || Vw(c, "[selected]") : Vw(c, '[aria-selected="true"]');
}
function xO(c) {
  return Ou(c, ["none", "presentation"]);
}
function DO(c) {
  return o1(c);
}
function kO(c) {
  return Ou(c, ["button", "cell", "checkbox", "columnheader", "gridcell", "heading", "label", "legend", "link", "menuitem", "menuitemcheckbox", "menuitemradio", "option", "radio", "row", "rowheader", "switch", "tab", "tooltip", "treeitem"]);
}
function _O(c) {
  return !1;
}
function MO(c) {
  return _y(c) || vO(c) ? c.value : c.textContent || "";
}
function $w(c) {
  var p = c.getPropertyValue("content");
  return /^["'].*["']$/.test(p) ? p.slice(1, -1) : "";
}
function c1(c) {
  var p = Qr(c);
  return p === "button" || p === "input" && c.getAttribute("type") !== "hidden" || p === "meter" || p === "output" || p === "progress" || p === "select" || p === "textarea";
}
function f1(c) {
  if (c1(c))
    return c;
  var p = null;
  return c.childNodes.forEach(function(m) {
    if (p === null && sn(m)) {
      var x = f1(m);
      x !== null && (p = x);
    }
  }), p;
}
function OO(c) {
  if (c.control !== void 0)
    return c.control;
  var p = c.getAttribute("for");
  return p !== null ? c.ownerDocument.getElementById(p) : f1(c);
}
function AO(c) {
  var p = c.labels;
  if (p === null)
    return p;
  if (p !== void 0)
    return Yi(p);
  if (!c1(c))
    return null;
  var m = c.ownerDocument;
  return Yi(m.querySelectorAll("label")).filter(function(x) {
    return OO(x) === c;
  });
}
function LO(c) {
  var p = c.assignedNodes();
  return p.length === 0 ? Yi(c.childNodes) : p;
}
function d1(c) {
  var p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, m = new aO(), x = hO(c), O = p.compute, A = O === void 0 ? "name" : O, y = p.computedStyleSupportsPseudoElements, U = y === void 0 ? p.getComputedStyle !== void 0 : y, R = p.getComputedStyle, T = R === void 0 ? x.getComputedStyle.bind(x) : R, _ = p.hidden, C = _ === void 0 ? !1 : _;
  function D(L, ue) {
    var oe = "";
    if (sn(L) && U) {
      var me = T(L, "::before"), Se = $w(me);
      oe = "".concat(Se, " ").concat(oe);
    }
    var V = gO(L) ? LO(L) : Yi(L.childNodes).concat(My(L, "aria-owns"));
    if (V.forEach(function(ke) {
      var Ue = le(ke, {
        isEmbeddedInLabel: ue.isEmbeddedInLabel,
        isReferenced: !1,
        recursion: !0
      }), He = sn(ke) ? T(ke).getPropertyValue("display") : "inline", Ne = He !== "inline" ? " " : "";
      oe += "".concat(Ne).concat(Ue).concat(Ne);
    }), sn(L) && U) {
      var H = T(L, "::after"), ce = $w(H);
      oe = "".concat(oe, " ").concat(ce);
    }
    return oe.trim();
  }
  function z(L, ue) {
    var oe = L.getAttributeNode(ue);
    return oe !== null && !m.has(oe) && oe.value.trim() !== "" ? (m.add(oe), oe.value) : null;
  }
  function J(L) {
    return sn(L) ? z(L, "title") : null;
  }
  function W(L) {
    if (!sn(L))
      return null;
    if (mO(L)) {
      m.add(L);
      for (var ue = Yi(L.childNodes), oe = 0; oe < ue.length; oe += 1) {
        var me = ue[oe];
        if (yO(me))
          return le(me, {
            isEmbeddedInLabel: !1,
            isReferenced: !1,
            recursion: !1
          });
      }
    } else if (pO(L)) {
      m.add(L);
      for (var Se = Yi(L.childNodes), V = 0; V < Se.length; V += 1) {
        var H = Se[V];
        if (o1(H))
          return le(H, {
            isEmbeddedInLabel: !1,
            isReferenced: !1,
            recursion: !1
          });
      }
    } else if (SO(L)) {
      m.add(L);
      for (var ce = Yi(L.childNodes), ke = 0; ke < ce.length; ke += 1) {
        var Ue = ce[ke];
        if (bO(Ue))
          return Ue.textContent;
      }
      return null;
    } else if (Qr(L) === "img" || Qr(L) === "area") {
      var He = z(L, "alt");
      if (He !== null)
        return He;
    } else if (fO(L)) {
      var Ne = z(L, "label");
      if (Ne !== null)
        return Ne;
    }
    if (_y(L) && (L.type === "button" || L.type === "submit" || L.type === "reset")) {
      var ne = z(L, "value");
      if (ne !== null)
        return ne;
      if (L.type === "submit")
        return "Submit";
      if (L.type === "reset")
        return "Reset";
    }
    var xe = AO(L);
    if (xe !== null && xe.length !== 0)
      return m.add(L), Yi(xe).map(function(Ee) {
        return le(Ee, {
          isEmbeddedInLabel: !0,
          isReferenced: !1,
          recursion: !0
        });
      }).filter(function(Ee) {
        return Ee.length > 0;
      }).join(" ");
    if (_y(L) && L.type === "image") {
      var gt = z(L, "alt");
      if (gt !== null)
        return gt;
      var ut = z(L, "title");
      return ut !== null ? ut : "Submit Query";
    }
    if (Ou(L, ["button"])) {
      var dt = D(L, {
        isEmbeddedInLabel: !1
      });
      if (dt !== "")
        return dt;
    }
    return null;
  }
  function le(L, ue) {
    if (m.has(L))
      return "";
    if (!C && CO(L, T) && !ue.isReferenced)
      return m.add(L), "";
    var oe = sn(L) ? L.getAttributeNode("aria-labelledby") : null, me = oe !== null && !m.has(oe) ? My(L, "aria-labelledby") : [];
    if (A === "name" && !ue.isReferenced && me.length > 0)
      return m.add(oe), me.map(function(He) {
        return le(He, {
          isEmbeddedInLabel: ue.isEmbeddedInLabel,
          isReferenced: !0,
          // this isn't recursion as specified, otherwise we would skip
          // `aria-label` in
          // <input id="myself" aria-label="foo" aria-labelledby="myself"
          recursion: !1
        });
      }).join(" ");
    var Se = ue.recursion && wO(L) && A === "name";
    if (!Se) {
      var V = (sn(L) && L.getAttribute("aria-label") || "").trim();
      if (V !== "" && A === "name")
        return m.add(L), V;
      if (!xO(L)) {
        var H = W(L);
        if (H !== null)
          return m.add(L), H;
      }
    }
    if (Ou(L, ["menu"]))
      return m.add(L), "";
    if (Se || ue.isEmbeddedInLabel || ue.isReferenced) {
      if (Ou(L, ["combobox", "listbox"])) {
        m.add(L);
        var ce = RO(L);
        return ce.length === 0 ? _y(L) ? L.value : "" : Yi(ce).map(function(He) {
          return le(He, {
            isEmbeddedInLabel: ue.isEmbeddedInLabel,
            isReferenced: !1,
            recursion: !0
          });
        }).join(" ");
      }
      if (s1(L, "range"))
        return m.add(L), L.hasAttribute("aria-valuetext") ? L.getAttribute("aria-valuetext") : L.hasAttribute("aria-valuenow") ? L.getAttribute("aria-valuenow") : L.getAttribute("value") || "";
      if (Ou(L, ["textbox"]))
        return m.add(L), MO(L);
    }
    if (kO(L) || sn(L) && ue.isReferenced || DO(L) || _O()) {
      var ke = D(L, {
        isEmbeddedInLabel: ue.isEmbeddedInLabel
      });
      if (ke !== "")
        return m.add(L), ke;
    }
    if (L.nodeType === L.TEXT_NODE)
      return m.add(L), L.textContent || "";
    if (ue.recursion)
      return m.add(L), D(L, {
        isEmbeddedInLabel: ue.isEmbeddedInLabel
      });
    var Ue = J(L);
    return Ue !== null ? (m.add(L), Ue) : (m.add(L), "");
  }
  return TO(le(c, {
    isEmbeddedInLabel: !1,
    // by spec computeAccessibleDescription starts with the referenced elements as roots
    isReferenced: A === "description",
    recursion: !1
  }));
}
function wv(c) {
  "@babel/helpers - typeof";
  return wv = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(p) {
    return typeof p;
  } : function(p) {
    return p && typeof Symbol == "function" && p.constructor === Symbol && p !== Symbol.prototype ? "symbol" : typeof p;
  }, wv(c);
}
function Yw(c, p) {
  var m = Object.keys(c);
  if (Object.getOwnPropertySymbols) {
    var x = Object.getOwnPropertySymbols(c);
    p && (x = x.filter(function(O) {
      return Object.getOwnPropertyDescriptor(c, O).enumerable;
    })), m.push.apply(m, x);
  }
  return m;
}
function qw(c) {
  for (var p = 1; p < arguments.length; p++) {
    var m = arguments[p] != null ? arguments[p] : {};
    p % 2 ? Yw(Object(m), !0).forEach(function(x) {
      NO(c, x, m[x]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(m)) : Yw(Object(m)).forEach(function(x) {
      Object.defineProperty(c, x, Object.getOwnPropertyDescriptor(m, x));
    });
  }
  return c;
}
function NO(c, p, m) {
  return p = UO(p), p in c ? Object.defineProperty(c, p, { value: m, enumerable: !0, configurable: !0, writable: !0 }) : c[p] = m, c;
}
function UO(c) {
  var p = zO(c, "string");
  return wv(p) === "symbol" ? p : String(p);
}
function zO(c, p) {
  if (wv(c) !== "object" || c === null) return c;
  var m = c[Symbol.toPrimitive];
  if (m !== void 0) {
    var x = m.call(c, p);
    if (wv(x) !== "object") return x;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (p === "string" ? String : Number)(c);
}
function p1(c) {
  var p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, m = My(c, "aria-describedby").map(function(O) {
    return d1(O, qw(qw({}, p), {}, {
      compute: "description"
    }));
  }).join(" ");
  if (m === "") {
    var x = c.getAttribute("title");
    m = x === null ? "" : x;
  }
  return m;
}
function IO(c) {
  return Ou(c, ["caption", "code", "deletion", "emphasis", "generic", "insertion", "paragraph", "presentation", "strong", "subscript", "superscript"]);
}
function _b(c) {
  var p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return IO(c) ? "" : d1(c, p);
}
var fb = { exports: {} }, Ww;
function FO() {
  return Ww || (Ww = 1, function(c) {
    var p = function() {
      var m = String.fromCharCode, x = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", O = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$", A = {};
      function y(R, T) {
        if (!A[R]) {
          A[R] = {};
          for (var _ = 0; _ < R.length; _++)
            A[R][R.charAt(_)] = _;
        }
        return A[R][T];
      }
      var U = {
        compressToBase64: function(R) {
          if (R == null) return "";
          var T = U._compress(R, 6, function(_) {
            return x.charAt(_);
          });
          switch (T.length % 4) {
            // To produce valid Base64
            default:
            // When could this happen ?
            case 0:
              return T;
            case 1:
              return T + "===";
            case 2:
              return T + "==";
            case 3:
              return T + "=";
          }
        },
        decompressFromBase64: function(R) {
          return R == null ? "" : R == "" ? null : U._decompress(R.length, 32, function(T) {
            return y(x, R.charAt(T));
          });
        },
        compressToUTF16: function(R) {
          return R == null ? "" : U._compress(R, 15, function(T) {
            return m(T + 32);
          }) + " ";
        },
        decompressFromUTF16: function(R) {
          return R == null ? "" : R == "" ? null : U._decompress(R.length, 16384, function(T) {
            return R.charCodeAt(T) - 32;
          });
        },
        //compress into uint8array (UCS-2 big endian format)
        compressToUint8Array: function(R) {
          for (var T = U.compress(R), _ = new Uint8Array(T.length * 2), C = 0, D = T.length; C < D; C++) {
            var z = T.charCodeAt(C);
            _[C * 2] = z >>> 8, _[C * 2 + 1] = z % 256;
          }
          return _;
        },
        //decompress from uint8array (UCS-2 big endian format)
        decompressFromUint8Array: function(R) {
          if (R == null)
            return U.decompress(R);
          for (var T = new Array(R.length / 2), _ = 0, C = T.length; _ < C; _++)
            T[_] = R[_ * 2] * 256 + R[_ * 2 + 1];
          var D = [];
          return T.forEach(function(z) {
            D.push(m(z));
          }), U.decompress(D.join(""));
        },
        //compress into a string that is already URI encoded
        compressToEncodedURIComponent: function(R) {
          return R == null ? "" : U._compress(R, 6, function(T) {
            return O.charAt(T);
          });
        },
        //decompress from an output of compressToEncodedURIComponent
        decompressFromEncodedURIComponent: function(R) {
          return R == null ? "" : R == "" ? null : (R = R.replace(/ /g, "+"), U._decompress(R.length, 32, function(T) {
            return y(O, R.charAt(T));
          }));
        },
        compress: function(R) {
          return U._compress(R, 16, function(T) {
            return m(T);
          });
        },
        _compress: function(R, T, _) {
          if (R == null) return "";
          var C, D, z = {}, J = {}, W = "", le = "", L = "", ue = 2, oe = 3, me = 2, Se = [], V = 0, H = 0, ce;
          for (ce = 0; ce < R.length; ce += 1)
            if (W = R.charAt(ce), Object.prototype.hasOwnProperty.call(z, W) || (z[W] = oe++, J[W] = !0), le = L + W, Object.prototype.hasOwnProperty.call(z, le))
              L = le;
            else {
              if (Object.prototype.hasOwnProperty.call(J, L)) {
                if (L.charCodeAt(0) < 256) {
                  for (C = 0; C < me; C++)
                    V = V << 1, H == T - 1 ? (H = 0, Se.push(_(V)), V = 0) : H++;
                  for (D = L.charCodeAt(0), C = 0; C < 8; C++)
                    V = V << 1 | D & 1, H == T - 1 ? (H = 0, Se.push(_(V)), V = 0) : H++, D = D >> 1;
                } else {
                  for (D = 1, C = 0; C < me; C++)
                    V = V << 1 | D, H == T - 1 ? (H = 0, Se.push(_(V)), V = 0) : H++, D = 0;
                  for (D = L.charCodeAt(0), C = 0; C < 16; C++)
                    V = V << 1 | D & 1, H == T - 1 ? (H = 0, Se.push(_(V)), V = 0) : H++, D = D >> 1;
                }
                ue--, ue == 0 && (ue = Math.pow(2, me), me++), delete J[L];
              } else
                for (D = z[L], C = 0; C < me; C++)
                  V = V << 1 | D & 1, H == T - 1 ? (H = 0, Se.push(_(V)), V = 0) : H++, D = D >> 1;
              ue--, ue == 0 && (ue = Math.pow(2, me), me++), z[le] = oe++, L = String(W);
            }
          if (L !== "") {
            if (Object.prototype.hasOwnProperty.call(J, L)) {
              if (L.charCodeAt(0) < 256) {
                for (C = 0; C < me; C++)
                  V = V << 1, H == T - 1 ? (H = 0, Se.push(_(V)), V = 0) : H++;
                for (D = L.charCodeAt(0), C = 0; C < 8; C++)
                  V = V << 1 | D & 1, H == T - 1 ? (H = 0, Se.push(_(V)), V = 0) : H++, D = D >> 1;
              } else {
                for (D = 1, C = 0; C < me; C++)
                  V = V << 1 | D, H == T - 1 ? (H = 0, Se.push(_(V)), V = 0) : H++, D = 0;
                for (D = L.charCodeAt(0), C = 0; C < 16; C++)
                  V = V << 1 | D & 1, H == T - 1 ? (H = 0, Se.push(_(V)), V = 0) : H++, D = D >> 1;
              }
              ue--, ue == 0 && (ue = Math.pow(2, me), me++), delete J[L];
            } else
              for (D = z[L], C = 0; C < me; C++)
                V = V << 1 | D & 1, H == T - 1 ? (H = 0, Se.push(_(V)), V = 0) : H++, D = D >> 1;
            ue--, ue == 0 && (ue = Math.pow(2, me), me++);
          }
          for (D = 2, C = 0; C < me; C++)
            V = V << 1 | D & 1, H == T - 1 ? (H = 0, Se.push(_(V)), V = 0) : H++, D = D >> 1;
          for (; ; )
            if (V = V << 1, H == T - 1) {
              Se.push(_(V));
              break;
            } else H++;
          return Se.join("");
        },
        decompress: function(R) {
          return R == null ? "" : R == "" ? null : U._decompress(R.length, 32768, function(T) {
            return R.charCodeAt(T);
          });
        },
        _decompress: function(R, T, _) {
          var C = [], D = 4, z = 4, J = 3, W = "", le = [], L, ue, oe, me, Se, V, H, ce = { val: _(0), position: T, index: 1 };
          for (L = 0; L < 3; L += 1)
            C[L] = L;
          for (oe = 0, Se = Math.pow(2, 2), V = 1; V != Se; )
            me = ce.val & ce.position, ce.position >>= 1, ce.position == 0 && (ce.position = T, ce.val = _(ce.index++)), oe |= (me > 0 ? 1 : 0) * V, V <<= 1;
          switch (oe) {
            case 0:
              for (oe = 0, Se = Math.pow(2, 8), V = 1; V != Se; )
                me = ce.val & ce.position, ce.position >>= 1, ce.position == 0 && (ce.position = T, ce.val = _(ce.index++)), oe |= (me > 0 ? 1 : 0) * V, V <<= 1;
              H = m(oe);
              break;
            case 1:
              for (oe = 0, Se = Math.pow(2, 16), V = 1; V != Se; )
                me = ce.val & ce.position, ce.position >>= 1, ce.position == 0 && (ce.position = T, ce.val = _(ce.index++)), oe |= (me > 0 ? 1 : 0) * V, V <<= 1;
              H = m(oe);
              break;
            case 2:
              return "";
          }
          for (C[3] = H, ue = H, le.push(H); ; ) {
            if (ce.index > R)
              return "";
            for (oe = 0, Se = Math.pow(2, J), V = 1; V != Se; )
              me = ce.val & ce.position, ce.position >>= 1, ce.position == 0 && (ce.position = T, ce.val = _(ce.index++)), oe |= (me > 0 ? 1 : 0) * V, V <<= 1;
            switch (H = oe) {
              case 0:
                for (oe = 0, Se = Math.pow(2, 8), V = 1; V != Se; )
                  me = ce.val & ce.position, ce.position >>= 1, ce.position == 0 && (ce.position = T, ce.val = _(ce.index++)), oe |= (me > 0 ? 1 : 0) * V, V <<= 1;
                C[z++] = m(oe), H = z - 1, D--;
                break;
              case 1:
                for (oe = 0, Se = Math.pow(2, 16), V = 1; V != Se; )
                  me = ce.val & ce.position, ce.position >>= 1, ce.position == 0 && (ce.position = T, ce.val = _(ce.index++)), oe |= (me > 0 ? 1 : 0) * V, V <<= 1;
                C[z++] = m(oe), H = z - 1, D--;
                break;
              case 2:
                return le.join("");
            }
            if (D == 0 && (D = Math.pow(2, J), J++), C[H])
              W = C[H];
            else if (H === z)
              W = ue + ue.charAt(0);
            else
              return null;
            le.push(W), C[z++] = ue + W.charAt(0), D--, ue = W, D == 0 && (D = Math.pow(2, J), J++);
          }
        }
      };
      return U;
    }();
    c != null ? c.exports = p : typeof angular < "u" && angular != null && angular.module("LZString", []).factory("LZString", function() {
      return p;
    });
  }(fb)), fb.exports;
}
var BO = FO();
const PO = /* @__PURE__ */ n1(BO);
function v1(c) {
  return c.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
const HO = (c, p, m, x, O, A, y) => {
  const U = x + m.indent, R = m.colors;
  return c.map((T) => {
    const _ = p[T];
    let C = y(_, m, U, O, A);
    return typeof _ != "string" && (C.indexOf(`
`) !== -1 && (C = m.spacingOuter + U + C + m.spacingOuter + x), C = "{" + C + "}"), m.spacingInner + x + R.prop.open + T + R.prop.close + "=" + R.value.open + C + R.value.close;
  }).join("");
}, jO = 3, VO = (c, p, m, x, O, A) => c.map((y) => {
  const U = typeof y == "string" ? h1(y, p) : A(y, p, m, x, O);
  return U === "" && typeof y == "object" && y !== null && y.nodeType !== jO ? "" : p.spacingOuter + m + U;
}).join(""), h1 = (c, p) => {
  const m = p.colors.content;
  return m.open + v1(c) + m.close;
}, $O = (c, p) => {
  const m = p.colors.comment;
  return m.open + "<!--" + v1(c) + "-->" + m.close;
}, YO = (c, p, m, x, O) => {
  const A = x.colors.tag;
  return A.open + "<" + c + (p && A.close + p + x.spacingOuter + O + A.open) + (m ? ">" + A.close + m + x.spacingOuter + O + A.open + "</" + c : (p && !x.min ? "" : " ") + "/") + ">" + A.close;
}, qO = (c, p) => {
  const m = p.colors.tag;
  return m.open + "<" + c + m.close + " …" + m.open + " />" + m.close;
}, WO = 1, m1 = 3, y1 = 8, g1 = 11, QO = /^((HTML|SVG)\w*)?Element$/, E1 = (c) => {
  const {
    tagName: p
  } = c;
  return !!(typeof p == "string" && p.includes("-") || typeof c.hasAttribute == "function" && c.hasAttribute("is"));
}, GO = (c) => {
  const p = c.constructor.name, {
    nodeType: m
  } = c;
  return m === WO && (QO.test(p) || E1(c)) || m === m1 && p === "Text" || m === y1 && p === "Comment" || m === g1 && p === "DocumentFragment";
};
function KO(c) {
  return c.nodeType === m1;
}
function XO(c) {
  return c.nodeType === y1;
}
function db(c) {
  return c.nodeType === g1;
}
function ZO(c) {
  return {
    test: (p) => {
      var m;
      return ((p == null || (m = p.constructor) == null ? void 0 : m.name) || E1(p)) && GO(p);
    },
    serialize: (p, m, x, O, A, y) => {
      if (KO(p))
        return h1(p.data, m);
      if (XO(p))
        return $O(p.data, m);
      const U = db(p) ? "DocumentFragment" : p.tagName.toLowerCase();
      return ++O > m.maxDepth ? qO(U, m) : YO(U, HO(db(p) ? [] : Array.from(p.attributes).map((R) => R.name).sort(), db(p) ? {} : Array.from(p.attributes).reduce((R, T) => (R[T.name] = T.value, R), {}), m, x + m.indent, O, A, y), VO(Array.prototype.slice.call(p.childNodes || p.children).filter(c), m, x + m.indent, O, A, y), m, x);
    }
  };
}
let S1 = null, Mb = null, Ob = null;
try {
  const c = module && module.require;
  Mb = c.call(module, "fs").readFileSync, Ob = c.call(module, "@babel/code-frame").codeFrameColumns, S1 = c.call(module, "chalk");
} catch {
}
function JO(c) {
  const p = c.indexOf("(") + 1, m = c.indexOf(")"), x = c.slice(p, m), O = x.split(":"), [A, y, U] = [O[0], parseInt(O[1], 10), parseInt(O[2], 10)];
  let R = "";
  try {
    R = Mb(A, "utf-8");
  } catch {
    return "";
  }
  const T = Ob(R, {
    start: {
      line: y,
      column: U
    }
  }, {
    highlightCode: !0,
    linesBelow: 0
  });
  return S1.dim(x) + `
` + T + `
`;
}
function eA() {
  if (!Mb || !Ob)
    return "";
  const p = new Error().stack.split(`
`).slice(1).find((m) => !m.includes("node_modules/"));
  return JO(p);
}
const b1 = 3;
function pb() {
  return typeof jest < "u" && jest !== null ? (
    // legacy timers
    setTimeout._isMockFunction === !0 || // modern timers
    // eslint-disable-next-line prefer-object-has-own -- not supported by our support matrix
    Object.prototype.hasOwnProperty.call(setTimeout, "clock")
  ) : !1;
}
function Ab() {
  if (typeof window > "u")
    throw new Error("Could not find default container");
  return window.document;
}
function T1(c) {
  if (c.defaultView)
    return c.defaultView;
  if (c.ownerDocument && c.ownerDocument.defaultView)
    return c.ownerDocument.defaultView;
  if (c.window)
    return c.window;
  throw c.ownerDocument && c.ownerDocument.defaultView === null ? new Error("It looks like the window object is not available for the provided node.") : c.then instanceof Function ? new Error("It looks like you passed a Promise object instead of a DOM node. Did you do something like `fireEvent.click(screen.findBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`, or await the findBy query `fireEvent.click(await screen.findBy...`?") : Array.isArray(c) ? new Error("It looks like you passed an Array instead of a DOM node. Did you do something like `fireEvent.click(screen.getAllBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`?") : typeof c.debug == "function" && typeof c.logTestingPlaygroundURL == "function" ? new Error("It looks like you passed a `screen` object. Did you do something like `fireEvent.click(screen, ...` when you meant to use a query, e.g. `fireEvent.click(screen.getBy..., `?") : new Error("The given node is not an Element, the node type is: " + typeof c + ".");
}
function Lu(c) {
  if (!c || typeof c.querySelector != "function" || typeof c.querySelectorAll != "function")
    throw new TypeError("Expected container to be an Element, a Document or a DocumentFragment but got " + p(c) + ".");
  function p(m) {
    return typeof m == "object" ? m === null ? "null" : m.constructor.name : typeof m;
  }
}
const tA = () => {
  if (typeof process > "u")
    return !1;
  let c;
  try {
    var p;
    const m = (p = process.env) == null ? void 0 : p.COLORS;
    m && (c = JSON.parse(m));
  } catch {
  }
  return typeof c == "boolean" ? c : process.versions !== void 0 && process.versions.node !== void 0;
}, {
  DOMCollection: nA
} = i1.plugins, rA = 1, aA = 8;
function iA(c) {
  return c.nodeType !== aA && (c.nodeType !== rA || !c.matches(Wt().defaultIgnore));
}
function ud(c, p, m) {
  if (m === void 0 && (m = {}), c || (c = Ab().body), typeof p != "number" && (p = typeof process < "u" && typeof process.env < "u" && process.env.DEBUG_PRINT_LIMIT || 7e3), p === 0)
    return "";
  c.documentElement && (c = c.documentElement);
  let x = typeof c;
  if (x === "object" ? x = c.constructor.name : c = {}, !("outerHTML" in c))
    throw new TypeError("Expected an element or document but got " + x);
  const {
    filterNode: O = iA,
    ...A
  } = m, y = i1.format(c, {
    plugins: [ZO(O), nA],
    printFunctionName: !1,
    highlight: tA(),
    ...A
  });
  return p !== void 0 && c.outerHTML.length > p ? y.slice(0, p) + "..." : y;
}
const Qw = function() {
  const c = eA();
  console.log(c ? ud(...arguments) + `

` + c : ud(...arguments));
};
let nc = {
  testIdAttribute: "data-testid",
  asyncUtilTimeout: 1e3,
  // asyncWrapper and advanceTimersWrapper is to support React's async `act` function.
  // forcing react-testing-library to wrap all async functions would've been
  // a total nightmare (consider wrapping every findBy* query and then also
  // updating `within` so those would be wrapped too. Total nightmare).
  // so we have this config option that's really only intended for
  // react-testing-library to use. For that reason, this feature will remain
  // undocumented.
  asyncWrapper: (c) => c(),
  unstable_advanceTimersWrapper: (c) => c(),
  eventWrapper: (c) => c(),
  // default value for the `hidden` option in `ByRole` queries
  defaultHidden: !1,
  // default value for the `ignore` option in `ByText` queries
  defaultIgnore: "script, style",
  // showOriginalStackTrace flag to show the full error stack traces for async errors
  showOriginalStackTrace: !1,
  // throw errors w/ suggestions for better queries. Opt in so off by default.
  throwSuggestions: !1,
  // called when getBy* queries fail. (message, container) => Error
  getElementError(c, p) {
    const m = ud(p), x = new Error([c, "Ignored nodes: comments, " + nc.defaultIgnore + `
` + m].filter(Boolean).join(`

`));
    return x.name = "TestingLibraryElementError", x;
  },
  _disableExpensiveErrorDiagnostics: !1,
  computedStyleSupportsPseudoElements: !1
};
function lA(c) {
  try {
    return nc._disableExpensiveErrorDiagnostics = !0, c();
  } finally {
    nc._disableExpensiveErrorDiagnostics = !1;
  }
}
function uA(c) {
  typeof c == "function" && (c = c(nc)), nc = {
    ...nc,
    ...c
  };
}
function Wt() {
  return nc;
}
const oA = ["button", "meter", "output", "progress", "select", "textarea", "input"];
function C1(c) {
  return oA.includes(c.nodeName.toLowerCase()) ? "" : c.nodeType === b1 ? c.textContent : Array.from(c.childNodes).map((p) => C1(p)).join("");
}
function hb(c) {
  let p;
  return c.tagName.toLowerCase() === "label" ? p = C1(c) : p = c.value || c.textContent, p;
}
function w1(c) {
  if (c.labels !== void 0) {
    var p;
    return (p = c.labels) != null ? p : [];
  }
  if (!sA(c)) return [];
  const m = c.ownerDocument.querySelectorAll("label");
  return Array.from(m).filter((x) => x.control === c);
}
function sA(c) {
  return /BUTTON|METER|OUTPUT|PROGRESS|SELECT|TEXTAREA/.test(c.tagName) || c.tagName === "INPUT" && c.getAttribute("type") !== "hidden";
}
function R1(c, p, m) {
  let {
    selector: x = "*"
  } = m === void 0 ? {} : m;
  const O = p.getAttribute("aria-labelledby"), A = O ? O.split(" ") : [];
  return A.length ? A.map((y) => {
    const U = c.querySelector('[id="' + y + '"]');
    return U ? {
      content: hb(U),
      formControl: null
    } : {
      content: "",
      formControl: null
    };
  }) : Array.from(w1(p)).map((y) => {
    const U = hb(y), T = Array.from(y.querySelectorAll("button, input, meter, output, progress, select, textarea")).filter((_) => _.matches(x))[0];
    return {
      content: U,
      formControl: T
    };
  });
}
function x1(c) {
  if (c == null)
    throw new Error(
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions -- implicitly converting `T` to `string`
      "It looks like " + c + " was passed instead of a matcher. Did you do something like getByText(" + c + ")?"
    );
}
function sd(c, p, m, x) {
  if (typeof c != "string")
    return !1;
  x1(m);
  const O = x(c);
  return typeof m == "string" || typeof m == "number" ? O.toLowerCase().includes(m.toString().toLowerCase()) : typeof m == "function" ? m(O, p) : k1(m, O);
}
function Au(c, p, m, x) {
  if (typeof c != "string")
    return !1;
  x1(m);
  const O = x(c);
  return m instanceof Function ? m(O, p) : m instanceof RegExp ? k1(m, O) : O === String(m);
}
function D1(c) {
  let {
    trim: p = !0,
    collapseWhitespace: m = !0
  } = c === void 0 ? {} : c;
  return (x) => {
    let O = x;
    return O = p ? O.trim() : O, O = m ? O.replace(/\s+/g, " ") : O, O;
  };
}
function ic(c) {
  let {
    trim: p,
    collapseWhitespace: m,
    normalizer: x
  } = c;
  if (!x)
    return D1({
      trim: p,
      collapseWhitespace: m
    });
  if (typeof p < "u" || typeof m < "u")
    throw new Error('trim and collapseWhitespace are not supported with a normalizer. If you want to use the default trim and collapseWhitespace logic in your normalizer, use "getDefaultNormalizer({trim, collapseWhitespace})" and compose that into your normalizer');
  return x;
}
function k1(c, p) {
  const m = c.test(p);
  return c.global && c.lastIndex !== 0 && (console.warn("To match all elements we had to reset the lastIndex of the RegExp because the global flag is enabled. We encourage to remove the global flag from the RegExp."), c.lastIndex = 0), m;
}
function Fy(c) {
  return c.matches("input[type=submit], input[type=button], input[type=reset]") ? c.value : Array.from(c.childNodes).filter((p) => p.nodeType === b1 && !!p.textContent).map((p) => p.textContent).join("");
}
const cA = fA(di.elementRoles);
function _1(c) {
  return c.hidden === !0 || c.getAttribute("aria-hidden") === "true" || c.ownerDocument.defaultView.getComputedStyle(c).display === "none";
}
function Lb(c, p) {
  p === void 0 && (p = {});
  const {
    isSubtreeInaccessible: m = _1
  } = p;
  if (c.ownerDocument.defaultView.getComputedStyle(c).visibility === "hidden")
    return !0;
  let O = c;
  for (; O; ) {
    if (m(O))
      return !0;
    O = O.parentElement;
  }
  return !1;
}
function Nb(c) {
  for (const {
    match: p,
    roles: m
  } of cA)
    if (p(c))
      return [...m];
  return [];
}
function fA(c) {
  function p(y) {
    let {
      name: U,
      attributes: R
    } = y;
    return "" + U + R.map((T) => {
      let {
        name: _,
        value: C,
        constraints: D = []
      } = T;
      const z = D.indexOf("undefined") !== -1, J = D.indexOf("set") !== -1;
      return typeof C < "u" ? "[" + _ + '="' + C + '"]' : z ? ":not([" + _ + "])" : J ? "[" + _ + "]:not([" + _ + '=""])' : "[" + _ + "]";
    }).join("");
  }
  function m(y) {
    let {
      attributes: U = []
    } = y;
    return U.length;
  }
  function x(y, U) {
    let {
      specificity: R
    } = y, {
      specificity: T
    } = U;
    return T - R;
  }
  function O(y) {
    let {
      attributes: U = []
    } = y;
    const R = U.findIndex((_) => _.value && _.name === "type" && _.value === "text");
    R >= 0 && (U = [...U.slice(0, R), ...U.slice(R + 1)]);
    const T = p({
      ...y,
      attributes: U
    });
    return (_) => R >= 0 && _.type !== "text" ? !1 : _.matches(T);
  }
  let A = [];
  for (const [y, U] of c.entries())
    A = [...A, {
      match: O(y),
      roles: Array.from(U),
      specificity: m(y)
    }];
  return A.sort(x);
}
function dA(c, p) {
  let {
    hidden: m = !1
  } = p === void 0 ? {} : p;
  function x(O) {
    return [O, ...Array.from(O.children).reduce((A, y) => [...A, ...x(y)], [])];
  }
  return x(c).filter((O) => m === !1 ? Lb(O) === !1 : !0).reduce((O, A) => {
    let y = [];
    return A.hasAttribute("role") ? y = A.getAttribute("role").split(" ").slice(0, 1) : y = Nb(A), y.reduce((U, R) => Array.isArray(U[R]) ? {
      ...U,
      [R]: [...U[R], A]
    } : {
      ...U,
      [R]: [A]
    }, O);
  }, {});
}
function pA(c, p) {
  let {
    hidden: m,
    includeDescription: x
  } = p;
  const O = dA(c, {
    hidden: m
  });
  return Object.entries(O).filter((A) => {
    let [y] = A;
    return y !== "generic";
  }).map((A) => {
    let [y, U] = A;
    const R = "-".repeat(50), T = U.map((_) => {
      const C = 'Name "' + _b(_, {
        computedStyleSupportsPseudoElements: Wt().computedStyleSupportsPseudoElements
      }) + `":
`, D = ud(_.cloneNode(!1));
      if (x) {
        const z = 'Description "' + p1(_, {
          computedStyleSupportsPseudoElements: Wt().computedStyleSupportsPseudoElements
        }) + `":
`;
        return "" + C + z + D;
      }
      return "" + C + D;
    }).join(`

`);
    return y + `:

` + T + `

` + R;
  }).join(`
`);
}
function vA(c) {
  return c.tagName === "OPTION" ? c.selected : xv(c, "aria-selected");
}
function hA(c) {
  return c.getAttribute("aria-busy") === "true";
}
function mA(c) {
  if (!("indeterminate" in c && c.indeterminate))
    return "checked" in c ? c.checked : xv(c, "aria-checked");
}
function yA(c) {
  return xv(c, "aria-pressed");
}
function gA(c) {
  var p, m;
  return (p = (m = xv(c, "aria-current")) != null ? m : c.getAttribute("aria-current")) != null ? p : !1;
}
function EA(c) {
  return xv(c, "aria-expanded");
}
function xv(c, p) {
  const m = c.getAttribute(p);
  if (m === "true")
    return !0;
  if (m === "false")
    return !1;
}
function SA(c) {
  const p = {
    H1: 1,
    H2: 2,
    H3: 3,
    H4: 4,
    H5: 5,
    H6: 6
  };
  return c.getAttribute("aria-level") && Number(c.getAttribute("aria-level")) || p[c.tagName];
}
function bA(c) {
  const p = c.getAttribute("aria-valuenow");
  return p === null ? void 0 : +p;
}
function TA(c) {
  const p = c.getAttribute("aria-valuemax");
  return p === null ? void 0 : +p;
}
function CA(c) {
  const p = c.getAttribute("aria-valuemin");
  return p === null ? void 0 : +p;
}
function wA(c) {
  const p = c.getAttribute("aria-valuetext");
  return p === null ? void 0 : p;
}
const Gw = D1();
function RA(c) {
  return c.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&");
}
function Kw(c) {
  return new RegExp(RA(c.toLowerCase()), "i");
}
function No(c, p, m, x) {
  let {
    variant: O,
    name: A
  } = x, y = "";
  const U = {}, R = [["Role", "TestId"].includes(c) ? m : Kw(m)];
  A && (U.name = Kw(A)), c === "Role" && Lb(p) && (U.hidden = !0, y = `Element is inaccessible. This means that the element and all its children are invisible to screen readers.
    If you are using the aria-hidden prop, make sure this is the right choice for your case.
    `), Object.keys(U).length > 0 && R.push(U);
  const T = O + "By" + c;
  return {
    queryName: c,
    queryMethod: T,
    queryArgs: R,
    variant: O,
    warning: y,
    toString() {
      y && console.warn(y);
      let [_, C] = R;
      return _ = typeof _ == "string" ? "'" + _ + "'" : _, C = C ? ", { " + Object.entries(C).map((D) => {
        let [z, J] = D;
        return z + ": " + J;
      }).join(", ") + " }" : "", T + "(" + _ + C + ")";
    }
  };
}
function Uo(c, p, m) {
  return m && !0;
}
function mb(c, p, m) {
  var x, O;
  if (p === void 0 && (p = "get"), c.matches(Wt().defaultIgnore))
    return;
  const A = (x = c.getAttribute("role")) != null ? x : (O = Nb(c)) == null ? void 0 : O[0];
  if (A !== "generic" && Uo("Role", m, A))
    return No("Role", c, A, {
      variant: p,
      name: _b(c, {
        computedStyleSupportsPseudoElements: Wt().computedStyleSupportsPseudoElements
      })
    });
  const y = R1(document, c).map((D) => D.content).join(" ");
  if (Uo("LabelText", m, y))
    return No("LabelText", c, y, {
      variant: p
    });
  const U = c.getAttribute("placeholder");
  if (Uo("PlaceholderText", m, U))
    return No("PlaceholderText", c, U, {
      variant: p
    });
  const R = Gw(Fy(c));
  if (Uo("Text", m, R))
    return No("Text", c, R, {
      variant: p
    });
  if (Uo("DisplayValue", m, c.value))
    return No("DisplayValue", c, Gw(c.value), {
      variant: p
    });
  const T = c.getAttribute("alt");
  if (Uo("AltText", m, T))
    return No("AltText", c, T, {
      variant: p
    });
  const _ = c.getAttribute("title");
  if (Uo("Title", m, _))
    return No("Title", c, _, {
      variant: p
    });
  const C = c.getAttribute(Wt().testIdAttribute);
  if (Uo("TestId", m, C))
    return No("TestId", c, C, {
      variant: p
    });
}
function xy(c, p) {
  c.stack = p.stack.replace(p.message, c.message);
}
function xA(c, p) {
  let {
    container: m = Ab(),
    timeout: x = Wt().asyncUtilTimeout,
    showOriginalStackTrace: O = Wt().showOriginalStackTrace,
    stackTraceError: A,
    interval: y = 50,
    onTimeout: U = (T) => (Object.defineProperty(T, "message", {
      value: Wt().getElementError(T.message, m).message
    }), T),
    mutationObserverOptions: R = {
      subtree: !0,
      childList: !0,
      attributes: !0,
      characterData: !0
    }
  } = p;
  if (typeof c != "function")
    throw new TypeError("Received `callback` arg must be a function");
  return new Promise(async (T, _) => {
    let C, D, z, J = !1, W = "idle";
    const le = setTimeout(Se, x), L = pb();
    if (L) {
      const {
        unstable_advanceTimersWrapper: V
      } = Wt();
      for (me(); !J; ) {
        if (!pb()) {
          const H = new Error("Changed from using fake timers to real timers while using waitFor. This is not allowed and will result in very strange behavior. Please ensure you're awaiting all async things your test is doing before changing to real timers. For more info, please go to https://github.com/testing-library/dom-testing-library/issues/830");
          O || xy(H, A), _(H);
          return;
        }
        if (await V(async () => {
          jest.advanceTimersByTime(y);
        }), J)
          break;
        me();
      }
    } else {
      try {
        Lu(m);
      } catch (H) {
        _(H);
        return;
      }
      D = setInterval(oe, y);
      const {
        MutationObserver: V
      } = T1(m);
      z = new V(oe), z.observe(m, R), me();
    }
    function ue(V, H) {
      J = !0, clearTimeout(le), L || (clearInterval(D), z.disconnect()), V ? _(V) : T(H);
    }
    function oe() {
      if (pb()) {
        const V = new Error("Changed from using real timers to fake timers while using waitFor. This is not allowed and will result in very strange behavior. Please ensure you're awaiting all async things your test is doing before changing to fake timers. For more info, please go to https://github.com/testing-library/dom-testing-library/issues/830");
        return O || xy(V, A), _(V);
      } else
        return me();
    }
    function me() {
      if (W !== "pending")
        try {
          const V = lA(c);
          typeof (V == null ? void 0 : V.then) == "function" ? (W = "pending", V.then((H) => {
            W = "resolved", ue(null, H);
          }, (H) => {
            W = "rejected", C = H;
          })) : ue(null, V);
        } catch (V) {
          C = V;
        }
    }
    function Se() {
      let V;
      C ? (V = C, !O && V.name === "TestingLibraryElementError" && xy(V, A)) : (V = new Error("Timed out in waitFor."), O || xy(V, A)), ue(U(V), null);
    }
  });
}
function DA(c, p) {
  const m = new Error("STACK_TRACE_MESSAGE");
  return Wt().asyncWrapper(() => xA(c, {
    stackTraceError: m,
    ...p
  }));
}
function M1(c, p) {
  return Wt().getElementError(c, p);
}
function kA(c, p) {
  return M1(c + "\n\n(If this is intentional, then use the `*AllBy*` variant of the query (like `queryAllByText`, `getAllByText`, or `findAllByText`)).", p);
}
function By(c, p, m, x) {
  let {
    exact: O = !0,
    collapseWhitespace: A,
    trim: y,
    normalizer: U
  } = x === void 0 ? {} : x;
  const R = O ? Au : sd, T = ic({
    collapseWhitespace: A,
    trim: y,
    normalizer: U
  });
  return Array.from(p.querySelectorAll("[" + c + "]")).filter((_) => R(_.getAttribute(c), _, m, T));
}
function Oy(c, p) {
  return function(m) {
    for (var x = arguments.length, O = new Array(x > 1 ? x - 1 : 0), A = 1; A < x; A++)
      O[A - 1] = arguments[A];
    const y = c(m, ...O);
    if (y.length > 1) {
      const U = y.map((R) => M1(null, R).message).join(`

`);
      throw kA(p(m, ...O) + `

Here are the matching elements:

` + U, m);
    }
    return y[0] || null;
  };
}
function O1(c, p) {
  return Wt().getElementError(`A better query is available, try this:
` + c.toString() + `
`, p);
}
function _A(c, p) {
  return function(m) {
    for (var x = arguments.length, O = new Array(x > 1 ? x - 1 : 0), A = 1; A < x; A++)
      O[A - 1] = arguments[A];
    const y = c(m, ...O);
    if (!y.length)
      throw Wt().getElementError(p(m, ...O), m);
    return y;
  };
}
function Ay(c) {
  return (p, m, x, O) => DA(() => c(p, m, x), {
    container: p,
    ...O
  });
}
const ld = (c, p, m) => function(x) {
  for (var O = arguments.length, A = new Array(O > 1 ? O - 1 : 0), y = 1; y < O; y++)
    A[y - 1] = arguments[y];
  const U = c(x, ...A), [{
    suggest: R = Wt().throwSuggestions
  } = {}] = A.slice(-1);
  if (U && R) {
    const T = mb(U, m);
    if (T && !p.endsWith(T.queryName))
      throw O1(T.toString(), x);
  }
  return U;
}, pi = (c, p, m) => function(x) {
  for (var O = arguments.length, A = new Array(O > 1 ? O - 1 : 0), y = 1; y < O; y++)
    A[y - 1] = arguments[y];
  const U = c(x, ...A), [{
    suggest: R = Wt().throwSuggestions
  } = {}] = A.slice(-1);
  if (U.length && R) {
    const T = [...new Set(U.map((_) => {
      var C;
      return (C = mb(_, m)) == null ? void 0 : C.toString();
    }))];
    if (
      // only want to suggest if all the els have the same suggestion.
      T.length === 1 && !p.endsWith(
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- TODO: Can this be null at runtime?
        mb(U[0], m).queryName
      )
    )
      throw O1(T[0], x);
  }
  return U;
};
function lc(c, p, m) {
  const x = ld(Oy(c, p), c.name, "query"), O = _A(c, m), A = Oy(O, p), y = ld(A, c.name, "get"), U = pi(O, c.name.replace("query", "get"), "getAll"), R = Ay(pi(O, c.name, "findAll")), T = Ay(ld(A, c.name, "find"));
  return [x, U, y, R, T];
}
function MA(c) {
  return Array.from(c.querySelectorAll("label,input")).map((p) => ({
    node: p,
    textToMatch: hb(p)
  })).filter((p) => {
    let {
      textToMatch: m
    } = p;
    return m !== null;
  });
}
const OA = function(c, p, m) {
  let {
    exact: x = !0,
    trim: O,
    collapseWhitespace: A,
    normalizer: y
  } = m === void 0 ? {} : m;
  const U = x ? Au : sd, R = ic({
    collapseWhitespace: A,
    trim: O,
    normalizer: y
  });
  return MA(c).filter((_) => {
    let {
      node: C,
      textToMatch: D
    } = _;
    return U(D, C, p, R);
  }).map((_) => {
    let {
      node: C
    } = _;
    return C;
  });
}, Rv = function(c, p, m) {
  let {
    selector: x = "*",
    exact: O = !0,
    collapseWhitespace: A,
    trim: y,
    normalizer: U
  } = m === void 0 ? {} : m;
  Lu(c);
  const R = O ? Au : sd, T = ic({
    collapseWhitespace: A,
    trim: y,
    normalizer: U
  }), _ = Array.from(c.querySelectorAll("*")).filter((C) => w1(C).length || C.hasAttribute("aria-labelledby")).reduce((C, D) => {
    const z = R1(c, D, {
      selector: x
    });
    z.filter((W) => !!W.formControl).forEach((W) => {
      R(W.content, W.formControl, p, T) && W.formControl && C.push(W.formControl);
    });
    const J = z.filter((W) => !!W.content).map((W) => W.content);
    return R(J.join(" "), D, p, T) && C.push(D), J.length > 1 && J.forEach((W, le) => {
      R(W, D, p, T) && C.push(D);
      const L = [...J];
      L.splice(le, 1), L.length > 1 && R(L.join(" "), D, p, T) && C.push(D);
    }), C;
  }, []).concat(By("aria-label", c, p, {
    exact: O,
    normalizer: T
  }));
  return Array.from(new Set(_)).filter((C) => C.matches(x));
}, rc = function(c, p) {
  for (var m = arguments.length, x = new Array(m > 2 ? m - 2 : 0), O = 2; O < m; O++)
    x[O - 2] = arguments[O];
  const A = Rv(c, p, ...x);
  if (!A.length) {
    const y = OA(c, p, ...x);
    if (y.length) {
      const U = y.map((R) => AA(c, R)).filter((R) => !!R);
      throw U.length ? Wt().getElementError(U.map((R) => "Found a label with the text of: " + p + ", however the element associated with this label (<" + R + " />) is non-labellable [https://html.spec.whatwg.org/multipage/forms.html#category-label]. If you really need to label a <" + R + " />, you can use aria-label or aria-labelledby instead.").join(`

`), c) : Wt().getElementError("Found a label with the text of: " + p + `, however no form control was found associated to that label. Make sure you're using the "for" attribute or "aria-labelledby" attribute correctly.`, c);
    } else
      throw Wt().getElementError("Unable to find a label with the text of: " + p, c);
  }
  return A;
};
function AA(c, p) {
  const m = p.getAttribute("for");
  if (!m)
    return null;
  const x = c.querySelector('[id="' + m + '"]');
  return x ? x.tagName.toLowerCase() : null;
}
const A1 = (c, p) => "Found multiple elements with the text of: " + p, LA = ld(Oy(Rv, A1), Rv.name, "query"), L1 = Oy(rc, A1), NA = Ay(pi(rc, rc.name, "findAll")), UA = Ay(ld(L1, rc.name, "find")), zA = pi(rc, rc.name, "getAll"), IA = ld(L1, rc.name, "get"), FA = pi(Rv, Rv.name, "queryAll"), yb = function() {
  for (var c = arguments.length, p = new Array(c), m = 0; m < c; m++)
    p[m] = arguments[m];
  return Lu(p[0]), By("placeholder", ...p);
}, BA = (c, p) => "Found multiple elements with the placeholder text of: " + p, PA = (c, p) => "Unable to find an element with the placeholder text of: " + p, HA = pi(yb, yb.name, "queryAll"), [jA, VA, $A, YA, qA] = lc(yb, BA, PA), gb = function(c, p, m) {
  let {
    selector: x = "*",
    exact: O = !0,
    collapseWhitespace: A,
    trim: y,
    ignore: U = Wt().defaultIgnore,
    normalizer: R
  } = m === void 0 ? {} : m;
  Lu(c);
  const T = O ? Au : sd, _ = ic({
    collapseWhitespace: A,
    trim: y,
    normalizer: R
  });
  let C = [];
  return typeof c.matches == "function" && c.matches(x) && (C = [c]), [...C, ...Array.from(c.querySelectorAll(x))].filter((D) => !U || !D.matches(U)).filter((D) => T(Fy(D), D, p, _));
}, WA = (c, p) => "Found multiple elements with the text: " + p, QA = function(c, p, m) {
  m === void 0 && (m = {});
  const {
    collapseWhitespace: x,
    trim: O,
    normalizer: A,
    selector: y
  } = m, R = ic({
    collapseWhitespace: x,
    trim: O,
    normalizer: A
  })(p.toString()), T = R !== p.toString(), _ = (y ?? "*") !== "*";
  return "Unable to find an element with the text: " + (T ? R + " (normalized from '" + p + "')" : p) + (_ ? ", which matches selector '" + y + "'" : "") + ". This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.";
}, GA = pi(gb, gb.name, "queryAll"), [KA, XA, ZA, JA, eL] = lc(gb, WA, QA), Eb = function(c, p, m) {
  let {
    exact: x = !0,
    collapseWhitespace: O,
    trim: A,
    normalizer: y
  } = m === void 0 ? {} : m;
  Lu(c);
  const U = x ? Au : sd, R = ic({
    collapseWhitespace: O,
    trim: A,
    normalizer: y
  });
  return Array.from(c.querySelectorAll("input,textarea,select")).filter((T) => T.tagName === "SELECT" ? Array.from(T.options).filter((C) => C.selected).some((C) => U(Fy(C), C, p, R)) : U(T.value, T, p, R));
}, tL = (c, p) => "Found multiple elements with the display value: " + p + ".", nL = (c, p) => "Unable to find an element with the display value: " + p + ".", rL = pi(Eb, Eb.name, "queryAll"), [aL, iL, lL, uL, oL] = lc(Eb, tL, nL), sL = /^(img|input|area|.+-.+)$/i, Sb = function(c, p, m) {
  return m === void 0 && (m = {}), Lu(c), By("alt", c, p, m).filter((x) => sL.test(x.tagName));
}, cL = (c, p) => "Found multiple elements with the alt text: " + p, fL = (c, p) => "Unable to find an element with the alt text: " + p, dL = pi(Sb, Sb.name, "queryAll"), [pL, vL, hL, mL, yL] = lc(Sb, cL, fL), gL = (c) => {
  var p;
  return c.tagName.toLowerCase() === "title" && ((p = c.parentElement) == null ? void 0 : p.tagName.toLowerCase()) === "svg";
}, bb = function(c, p, m) {
  let {
    exact: x = !0,
    collapseWhitespace: O,
    trim: A,
    normalizer: y
  } = m === void 0 ? {} : m;
  Lu(c);
  const U = x ? Au : sd, R = ic({
    collapseWhitespace: O,
    trim: A,
    normalizer: y
  });
  return Array.from(c.querySelectorAll("[title], svg > title")).filter((T) => U(T.getAttribute("title"), T, p, R) || gL(T) && U(Fy(T), T, p, R));
}, EL = (c, p) => "Found multiple elements with the title: " + p + ".", SL = (c, p) => "Unable to find an element with the title: " + p + ".", bL = pi(bb, bb.name, "queryAll"), [TL, CL, wL, RL, xL] = lc(bb, EL, SL), Tb = function(c, p, m) {
  let {
    hidden: x = Wt().defaultHidden,
    name: O,
    description: A,
    queryFallbacks: y = !1,
    selected: U,
    busy: R,
    checked: T,
    pressed: _,
    current: C,
    level: D,
    expanded: z,
    value: {
      now: J,
      min: W,
      max: le,
      text: L
    } = {}
  } = m === void 0 ? {} : m;
  if (Lu(c), U !== void 0) {
    var ue;
    if (((ue = di.roles.get(p)) == null ? void 0 : ue.props["aria-selected"]) === void 0)
      throw new Error('"aria-selected" is not supported on role "' + p + '".');
  }
  if (R !== void 0) {
    var oe;
    if (((oe = di.roles.get(p)) == null ? void 0 : oe.props["aria-busy"]) === void 0)
      throw new Error('"aria-busy" is not supported on role "' + p + '".');
  }
  if (T !== void 0) {
    var me;
    if (((me = di.roles.get(p)) == null ? void 0 : me.props["aria-checked"]) === void 0)
      throw new Error('"aria-checked" is not supported on role "' + p + '".');
  }
  if (_ !== void 0) {
    var Se;
    if (((Se = di.roles.get(p)) == null ? void 0 : Se.props["aria-pressed"]) === void 0)
      throw new Error('"aria-pressed" is not supported on role "' + p + '".');
  }
  if (C !== void 0) {
    var V;
    if (((V = di.roles.get(p)) == null ? void 0 : V.props["aria-current"]) === void 0)
      throw new Error('"aria-current" is not supported on role "' + p + '".');
  }
  if (D !== void 0 && p !== "heading")
    throw new Error('Role "' + p + '" cannot have "level" property.');
  if (J !== void 0) {
    var H;
    if (((H = di.roles.get(p)) == null ? void 0 : H.props["aria-valuenow"]) === void 0)
      throw new Error('"aria-valuenow" is not supported on role "' + p + '".');
  }
  if (le !== void 0) {
    var ce;
    if (((ce = di.roles.get(p)) == null ? void 0 : ce.props["aria-valuemax"]) === void 0)
      throw new Error('"aria-valuemax" is not supported on role "' + p + '".');
  }
  if (W !== void 0) {
    var ke;
    if (((ke = di.roles.get(p)) == null ? void 0 : ke.props["aria-valuemin"]) === void 0)
      throw new Error('"aria-valuemin" is not supported on role "' + p + '".');
  }
  if (L !== void 0) {
    var Ue;
    if (((Ue = di.roles.get(p)) == null ? void 0 : Ue.props["aria-valuetext"]) === void 0)
      throw new Error('"aria-valuetext" is not supported on role "' + p + '".');
  }
  if (z !== void 0) {
    var He;
    if (((He = di.roles.get(p)) == null ? void 0 : He.props["aria-expanded"]) === void 0)
      throw new Error('"aria-expanded" is not supported on role "' + p + '".');
  }
  const Ne = /* @__PURE__ */ new WeakMap();
  function ne(xe) {
    return Ne.has(xe) || Ne.set(xe, _1(xe)), Ne.get(xe);
  }
  return Array.from(c.querySelectorAll(
    // Only query elements that can be matched by the following filters
    DL(p)
  )).filter((xe) => {
    if (xe.hasAttribute("role")) {
      const dt = xe.getAttribute("role");
      if (y)
        return dt.split(" ").filter(Boolean).some((Be) => Be === p);
      const [Ee] = dt.split(" ");
      return Ee === p;
    }
    return Nb(xe).some((dt) => dt === p);
  }).filter((xe) => {
    if (U !== void 0)
      return U === vA(xe);
    if (R !== void 0)
      return R === hA(xe);
    if (T !== void 0)
      return T === mA(xe);
    if (_ !== void 0)
      return _ === yA(xe);
    if (C !== void 0)
      return C === gA(xe);
    if (z !== void 0)
      return z === EA(xe);
    if (D !== void 0)
      return D === SA(xe);
    if (J !== void 0 || le !== void 0 || W !== void 0 || L !== void 0) {
      let ut = !0;
      if (J !== void 0 && ut && (ut = J === bA(xe)), le !== void 0 && ut && (ut = le === TA(xe)), W !== void 0 && ut && (ut = W === CA(xe)), L !== void 0) {
        var gt;
        ut && (ut = Au((gt = wA(xe)) != null ? gt : null, xe, L, (dt) => dt));
      }
      return ut;
    }
    return !0;
  }).filter((xe) => O === void 0 ? !0 : Au(_b(xe, {
    computedStyleSupportsPseudoElements: Wt().computedStyleSupportsPseudoElements
  }), xe, O, (gt) => gt)).filter((xe) => A === void 0 ? !0 : Au(p1(xe, {
    computedStyleSupportsPseudoElements: Wt().computedStyleSupportsPseudoElements
  }), xe, A, (gt) => gt)).filter((xe) => x === !1 ? Lb(xe, {
    isSubtreeInaccessible: ne
  }) === !1 : !0);
};
function DL(c) {
  var p;
  const m = '*[role~="' + c + '"]', x = (p = di.roleElements.get(c)) != null ? p : /* @__PURE__ */ new Set(), O = new Set(Array.from(x).map((A) => {
    let {
      name: y
    } = A;
    return y;
  }));
  return [m].concat(Array.from(O)).join(",");
}
const N1 = (c) => {
  let p = "";
  return c === void 0 ? p = "" : typeof c == "string" ? p = ' and name "' + c + '"' : p = " and name `" + c + "`", p;
}, kL = function(c, p, m) {
  let {
    name: x
  } = m === void 0 ? {} : m;
  return 'Found multiple elements with the role "' + p + '"' + N1(x);
}, _L = function(c, p, m) {
  let {
    hidden: x = Wt().defaultHidden,
    name: O,
    description: A
  } = m === void 0 ? {} : m;
  if (Wt()._disableExpensiveErrorDiagnostics)
    return 'Unable to find role="' + p + '"' + N1(O);
  let y = "";
  Array.from(c.children).forEach((_) => {
    y += pA(_, {
      hidden: x,
      includeDescription: A !== void 0
    });
  });
  let U;
  y.length === 0 ? x === !1 ? U = "There are no accessible roles. But there might be some inaccessible roles. If you wish to access them, then set the `hidden` option to `true`. Learn more about this here: https://testing-library.com/docs/dom-testing-library/api-queries#byrole" : U = "There are no available roles." : U = (`
Here are the ` + (x === !1 ? "accessible" : "available") + ` roles:

  ` + y.replace(/\n/g, `
  `).replace(/\n\s\s\n/g, `

`) + `
`).trim();
  let R = "";
  O === void 0 ? R = "" : typeof O == "string" ? R = ' and name "' + O + '"' : R = " and name `" + O + "`";
  let T = "";
  return A === void 0 ? T = "" : typeof A == "string" ? T = ' and description "' + A + '"' : T = " and description `" + A + "`", (`
Unable to find an ` + (x === !1 ? "accessible " : "") + 'element with the role "' + p + '"' + R + T + `

` + U).trim();
}, ML = pi(Tb, Tb.name, "queryAll"), [OL, AL, LL, NL, UL] = lc(Tb, kL, _L), Ub = () => Wt().testIdAttribute, Cb = function() {
  for (var c = arguments.length, p = new Array(c), m = 0; m < c; m++)
    p[m] = arguments[m];
  return Lu(p[0]), By(Ub(), ...p);
}, zL = (c, p) => "Found multiple elements by: [" + Ub() + '="' + p + '"]', IL = (c, p) => "Unable to find an element by: [" + Ub() + '="' + p + '"]', FL = pi(Cb, Cb.name, "queryAll"), [BL, PL, HL, jL, VL] = lc(Cb, zL, IL);
var wb = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  queryAllByLabelText: FA,
  queryByLabelText: LA,
  getAllByLabelText: zA,
  getByLabelText: IA,
  findAllByLabelText: NA,
  findByLabelText: UA,
  queryByPlaceholderText: jA,
  queryAllByPlaceholderText: HA,
  getByPlaceholderText: $A,
  getAllByPlaceholderText: VA,
  findAllByPlaceholderText: YA,
  findByPlaceholderText: qA,
  queryByText: KA,
  queryAllByText: GA,
  getByText: ZA,
  getAllByText: XA,
  findAllByText: JA,
  findByText: eL,
  queryByDisplayValue: aL,
  queryAllByDisplayValue: rL,
  getByDisplayValue: lL,
  getAllByDisplayValue: iL,
  findAllByDisplayValue: uL,
  findByDisplayValue: oL,
  queryByAltText: pL,
  queryAllByAltText: dL,
  getByAltText: hL,
  getAllByAltText: vL,
  findAllByAltText: mL,
  findByAltText: yL,
  queryByTitle: TL,
  queryAllByTitle: bL,
  getByTitle: wL,
  getAllByTitle: CL,
  findAllByTitle: RL,
  findByTitle: xL,
  queryByRole: OL,
  queryAllByRole: ML,
  getAllByRole: AL,
  getByRole: LL,
  findAllByRole: NL,
  findByRole: UL,
  queryByTestId: BL,
  queryAllByTestId: FL,
  getByTestId: HL,
  getAllByTestId: PL,
  findAllByTestId: jL,
  findByTestId: VL
});
function U1(c, p, m) {
  return p === void 0 && (p = wb), m === void 0 && (m = {}), Object.keys(p).reduce((x, O) => {
    const A = p[O];
    return x[O] = A.bind(null, c), x;
  }, m);
}
const Xw = {
  // Clipboard Events
  copy: {
    EventType: "ClipboardEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  cut: {
    EventType: "ClipboardEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  paste: {
    EventType: "ClipboardEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  // Composition Events
  compositionEnd: {
    EventType: "CompositionEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  compositionStart: {
    EventType: "CompositionEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  compositionUpdate: {
    EventType: "CompositionEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  // Keyboard Events
  keyDown: {
    EventType: "KeyboardEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      charCode: 0,
      composed: !0
    }
  },
  keyPress: {
    EventType: "KeyboardEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      charCode: 0,
      composed: !0
    }
  },
  keyUp: {
    EventType: "KeyboardEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      charCode: 0,
      composed: !0
    }
  },
  // Focus Events
  focus: {
    EventType: "FocusEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1,
      composed: !0
    }
  },
  blur: {
    EventType: "FocusEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1,
      composed: !0
    }
  },
  focusIn: {
    EventType: "FocusEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  focusOut: {
    EventType: "FocusEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  // Form Events
  change: {
    EventType: "Event",
    defaultInit: {
      bubbles: !0,
      cancelable: !1
    }
  },
  input: {
    EventType: "InputEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  invalid: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !0
    }
  },
  submit: {
    EventType: "Event",
    defaultInit: {
      bubbles: !0,
      cancelable: !0
    }
  },
  reset: {
    EventType: "Event",
    defaultInit: {
      bubbles: !0,
      cancelable: !0
    }
  },
  // Mouse Events
  click: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      button: 0,
      composed: !0
    }
  },
  contextMenu: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  dblClick: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  drag: {
    EventType: "DragEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  dragEnd: {
    EventType: "DragEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  dragEnter: {
    EventType: "DragEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  dragExit: {
    EventType: "DragEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  dragLeave: {
    EventType: "DragEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  dragOver: {
    EventType: "DragEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  dragStart: {
    EventType: "DragEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  drop: {
    EventType: "DragEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  mouseDown: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  mouseEnter: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1,
      composed: !0
    }
  },
  mouseLeave: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1,
      composed: !0
    }
  },
  mouseMove: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  mouseOut: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  mouseOver: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  mouseUp: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  // Selection Events
  select: {
    EventType: "Event",
    defaultInit: {
      bubbles: !0,
      cancelable: !1
    }
  },
  // Touch Events
  touchCancel: {
    EventType: "TouchEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  touchEnd: {
    EventType: "TouchEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  touchMove: {
    EventType: "TouchEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  touchStart: {
    EventType: "TouchEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  // UI Events
  resize: {
    EventType: "UIEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  scroll: {
    EventType: "UIEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  // Wheel Events
  wheel: {
    EventType: "WheelEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  // Media Events
  abort: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  canPlay: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  canPlayThrough: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  durationChange: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  emptied: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  encrypted: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  ended: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  loadedData: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  loadedMetadata: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  loadStart: {
    EventType: "ProgressEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  pause: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  play: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  playing: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  progress: {
    EventType: "ProgressEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  rateChange: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  seeked: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  seeking: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  stalled: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  suspend: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  timeUpdate: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  volumeChange: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  waiting: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  // Events
  load: {
    // TODO: load events can be UIEvent or Event depending on what generated them
    // This is where this abstraction breaks down.
    // But the common targets are <img />, <script /> and window.
    // Neither of these targets receive a UIEvent
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  error: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  // Animation Events
  animationStart: {
    EventType: "AnimationEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1
    }
  },
  animationEnd: {
    EventType: "AnimationEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1
    }
  },
  animationIteration: {
    EventType: "AnimationEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1
    }
  },
  // Transition Events
  transitionCancel: {
    EventType: "TransitionEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1
    }
  },
  transitionEnd: {
    EventType: "TransitionEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0
    }
  },
  transitionRun: {
    EventType: "TransitionEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1
    }
  },
  transitionStart: {
    EventType: "TransitionEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1
    }
  },
  // pointer events
  pointerOver: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  pointerEnter: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  pointerDown: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  pointerMove: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  pointerUp: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  pointerCancel: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  pointerOut: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  pointerLeave: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  gotPointerCapture: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  lostPointerCapture: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  // history events
  popState: {
    EventType: "PopStateEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1
    }
  },
  // window events
  offline: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  online: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  pageHide: {
    EventType: "PageTransitionEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0
    }
  },
  pageShow: {
    EventType: "PageTransitionEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0
    }
  }
}, Zw = {
  doubleClick: "dblClick"
};
function ac(c, p) {
  return Wt().eventWrapper(() => {
    if (!p)
      throw new Error("Unable to fire an event - please provide an event object.");
    if (!c)
      throw new Error('Unable to fire a "' + p.type + '" event - please provide a DOM element.');
    return c.dispatchEvent(p);
  });
}
function vb(c, p, m, x) {
  let {
    EventType: O = "Event",
    defaultInit: A = {}
  } = x === void 0 ? {} : x;
  if (!p)
    throw new Error('Unable to fire a "' + c + '" event - please provide a DOM element.');
  const y = {
    ...A,
    ...m
  }, {
    target: {
      value: U,
      files: R,
      ...T
    } = {}
  } = y;
  U !== void 0 && $L(p, U), R !== void 0 && Object.defineProperty(p, "files", {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    value: R
  }), Object.assign(p, T);
  const _ = T1(p), C = _[O] || _.Event;
  let D;
  if (typeof C == "function")
    D = new C(c, y);
  else {
    D = _.document.createEvent(O);
    const {
      bubbles: J,
      cancelable: W,
      detail: le,
      ...L
    } = y;
    D.initEvent(c, J, W, le), Object.keys(L).forEach((ue) => {
      D[ue] = L[ue];
    });
  }
  return ["dataTransfer", "clipboardData"].forEach((J) => {
    const W = y[J];
    typeof W == "object" && (typeof _.DataTransfer == "function" ? Object.defineProperty(D, J, {
      value: Object.getOwnPropertyNames(W).reduce((le, L) => (Object.defineProperty(le, L, {
        value: W[L]
      }), le), new _.DataTransfer())
    }) : Object.defineProperty(D, J, {
      value: W
    }));
  }), D;
}
Object.keys(Xw).forEach((c) => {
  const {
    EventType: p,
    defaultInit: m
  } = Xw[c], x = c.toLowerCase();
  vb[c] = (O, A) => vb(x, O, A, {
    EventType: p,
    defaultInit: m
  }), ac[c] = (O, A) => ac(O, vb[c](O, A));
});
function $L(c, p) {
  const {
    set: m
  } = Object.getOwnPropertyDescriptor(c, "value") || {}, x = Object.getPrototypeOf(c), {
    set: O
  } = Object.getOwnPropertyDescriptor(x, "value") || {};
  if (O && m !== O)
    O.call(c, p);
  else if (m)
    m.call(c, p);
  else
    throw new Error("The given element does not have a value setter");
}
Object.keys(Zw).forEach((c) => {
  const p = Zw[c];
  ac[c] = function() {
    return ac[p](...arguments);
  };
});
function YL(c) {
  return c.replace(/[ \t]*[\n][ \t]*/g, `
`);
}
function qL(c) {
  return PO.compressToEncodedURIComponent(YL(c));
}
function WL(c) {
  return "https://testing-playground.com/#markup=" + qL(c);
}
const QL = (c, p, m) => Array.isArray(c) ? c.forEach((x) => Qw(x, p, m)) : Qw(c, p, m), GL = function(c) {
  if (c === void 0 && (c = Ab().body), !c || !("innerHTML" in c)) {
    console.log("The element you're providing isn't a valid DOM element.");
    return;
  }
  if (!c.innerHTML) {
    console.log("The provided element doesn't have any children.");
    return;
  }
  const p = WL(c.innerHTML);
  return console.log(`Open this URL in your browser

` + p), p;
}, Jw = {
  debug: QL,
  logTestingPlaygroundURL: GL
}, mN = typeof document < "u" && document.body ? U1(document.body, wb, Jw) : Object.keys(wb).reduce((c, p) => (c[p] = () => {
  throw new TypeError("For queries bound to document.body a global document has to be available... Learn more: https://testing-library.com/s/screen-global-error");
}, c), Jw), KL = typeof Tv.act == "function" ? Tv.act : OM.act;
function z1() {
  if (typeof globalThis < "u")
    return globalThis;
  if (typeof self < "u")
    return self;
  if (typeof window < "u")
    return window;
  if (typeof global < "u")
    return global;
  throw new Error("unable to locate global object");
}
function Mu(c) {
  z1().IS_REACT_ACT_ENVIRONMENT = c;
}
function Ly() {
  return z1().IS_REACT_ACT_ENVIRONMENT;
}
function XL(c) {
  return (p) => {
    const m = Ly();
    Mu(!0);
    try {
      let x = !1;
      const O = c(() => {
        const A = p();
        return A !== null && typeof A == "object" && typeof A.then == "function" && (x = !0), A;
      });
      if (x) {
        const A = O;
        return {
          then: (y, U) => {
            A.then((R) => {
              Mu(m), y(R);
            }, (R) => {
              Mu(m), U(R);
            });
          }
        };
      } else
        return Mu(m), O;
    } catch (x) {
      throw Mu(m), x;
    }
  };
}
const od = XL(KL), Mn = function() {
  return ac(...arguments);
};
Object.keys(ac).forEach((c) => {
  Mn[c] = function() {
    return ac[c](...arguments);
  };
});
const ZL = Mn.mouseEnter, JL = Mn.mouseLeave;
Mn.mouseEnter = function() {
  return ZL(...arguments), Mn.mouseOver(...arguments);
};
Mn.mouseLeave = function() {
  return JL(...arguments), Mn.mouseOut(...arguments);
};
const eN = Mn.pointerEnter, tN = Mn.pointerLeave;
Mn.pointerEnter = function() {
  return eN(...arguments), Mn.pointerOver(...arguments);
};
Mn.pointerLeave = function() {
  return tN(...arguments), Mn.pointerOut(...arguments);
};
const nN = Mn.select;
Mn.select = (c, p) => {
  nN(c, p), c.focus(), Mn.keyUp(c, p);
};
const rN = Mn.blur, aN = Mn.focus;
Mn.blur = function() {
  return Mn.focusOut(...arguments), rN(...arguments);
};
Mn.focus = function() {
  return Mn.focusIn(...arguments), aN(...arguments);
};
let iN = {
  reactStrictMode: !1
};
function lN() {
  return {
    ...Wt(),
    ...iN
  };
}
function uN() {
  return typeof jest < "u" && jest !== null ? (
    // legacy timers
    setTimeout._isMockFunction === !0 || // modern timers
    // eslint-disable-next-line prefer-object-has-own -- No Object.hasOwn in all target environments we support.
    Object.prototype.hasOwnProperty.call(setTimeout, "clock")
  ) : !1;
}
uA({
  unstable_advanceTimersWrapper: (c) => od(c),
  // We just want to run `waitFor` without IS_REACT_ACT_ENVIRONMENT
  // But that's not necessarily how `asyncWrapper` is used since it's a public method.
  // Let's just hope nobody else is using it.
  asyncWrapper: async (c) => {
    const p = Ly();
    Mu(!1);
    try {
      const m = await c();
      return await new Promise((x) => {
        setTimeout(() => {
          x();
        }, 0), uN() && jest.advanceTimersByTime(0);
      }), m;
    } finally {
      Mu(p);
    }
  },
  eventWrapper: (c) => {
    let p;
    return od(() => {
      p = c();
    }), p;
  }
});
const Rb = /* @__PURE__ */ new Set(), Ny = [];
function xb(c, p) {
  return p ?? lN().reactStrictMode ? /* @__PURE__ */ Tv.createElement(Tv.StrictMode, null, c) : c;
}
function Db(c, p) {
  return p ? /* @__PURE__ */ Tv.createElement(p, null, c) : c;
}
function oN(c, p) {
  let {
    hydrate: m,
    onCaughtError: x,
    onRecoverableError: O,
    ui: A,
    wrapper: y,
    reactStrictMode: U
  } = p, R;
  return m ? od(() => {
    R = xw.hydrateRoot(c, xb(Db(A, y), U), {
      onCaughtError: x,
      onRecoverableError: O
    });
  }) : R = xw.createRoot(c, {
    onCaughtError: x,
    onRecoverableError: O
  }), {
    hydrate() {
      if (!m)
        throw new Error("Attempted to hydrate a non-hydrateable root. This is a bug in `@testing-library/react`.");
    },
    render(T) {
      R.render(T);
    },
    unmount() {
      R.unmount();
    }
  };
}
function sN(c) {
  return {
    hydrate(p) {
      Dy.hydrate(p, c);
    },
    render(p) {
      Dy.render(p, c);
    },
    unmount() {
      Dy.unmountComponentAtNode(c);
    }
  };
}
function I1(c, p) {
  let {
    baseElement: m,
    container: x,
    hydrate: O,
    queries: A,
    root: y,
    wrapper: U,
    reactStrictMode: R
  } = p;
  return od(() => {
    O ? y.hydrate(xb(Db(c, U), R), x) : y.render(xb(Db(c, U), R), x);
  }), {
    container: x,
    baseElement: m,
    debug: function(T, _, C) {
      return T === void 0 && (T = m), Array.isArray(T) ? (
        // eslint-disable-next-line no-console
        T.forEach((D) => console.log(ud(D, _, C)))
      ) : (
        // eslint-disable-next-line no-console,
        console.log(ud(T, _, C))
      );
    },
    unmount: () => {
      od(() => {
        y.unmount();
      });
    },
    rerender: (T) => {
      I1(T, {
        container: x,
        baseElement: m,
        root: y,
        wrapper: U,
        reactStrictMode: R
      });
    },
    asFragment: () => {
      if (typeof document.createRange == "function")
        return document.createRange().createContextualFragment(x.innerHTML);
      {
        const T = document.createElement("template");
        return T.innerHTML = x.innerHTML, T.content;
      }
    },
    ...U1(m, A)
  };
}
function cN(c, p) {
  let {
    container: m,
    baseElement: x = m,
    legacyRoot: O = !1,
    onCaughtError: A,
    onUncaughtError: y,
    onRecoverableError: U,
    queries: R,
    hydrate: T = !1,
    wrapper: _,
    reactStrictMode: C
  } = p === void 0 ? {} : p;
  if (y !== void 0)
    throw new Error("onUncaughtError is not supported. The `render` call will already throw on uncaught errors.");
  if (O && typeof Dy.render != "function") {
    const z = new Error("`legacyRoot: true` is not supported in this version of React. If your app runs React 19 or later, you should remove this flag. If your app runs React 18 or earlier, visit https://react.dev/blog/2022/03/08/react-18-upgrade-guide for upgrade instructions.");
    throw Error.captureStackTrace(z, cN), z;
  }
  x || (x = document.body), m || (m = x.appendChild(document.createElement("div")));
  let D;
  return Rb.has(m) ? Ny.forEach((z) => {
    z.container === m && (D = z.root);
  }) : (D = (O ? sN : oN)(m, {
    hydrate: T,
    onCaughtError: A,
    onRecoverableError: U,
    ui: c,
    wrapper: _,
    reactStrictMode: C
  }), Ny.push({
    container: m,
    root: D
  }), Rb.add(m)), I1(c, {
    container: m,
    baseElement: x,
    queries: R,
    hydrate: T,
    wrapper: _,
    root: D,
    reactStrictMode: C
  });
}
function e1() {
  Ny.forEach((c) => {
    let {
      root: p,
      container: m
    } = c;
    od(() => {
      p.unmount();
    }), m.parentNode === document.body && document.body.removeChild(m);
  }), Ny.length = 0, Rb.clear();
}
var t1;
if ((typeof process > "u" || !((t1 = process.env) != null && t1.RTL_SKIP_AUTO_CLEANUP)) && (typeof afterEach == "function" ? afterEach(() => {
  e1();
}) : typeof teardown == "function" && teardown(() => {
  e1();
}), typeof beforeAll == "function" && typeof afterAll == "function")) {
  let c = Ly();
  beforeAll(() => {
    c = Ly(), Mu(!0);
  }), afterAll(() => {
    Mu(c);
  });
}
export {
  e1 as c,
  Mn as f,
  cN as r,
  mN as s
};
//# sourceMappingURL=react.esm-OOgUt-k1.js.map
