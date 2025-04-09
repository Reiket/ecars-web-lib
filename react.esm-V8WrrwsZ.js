import * as xp from "react";
import Qh from "react";
import { g as Q1, l as Qa } from "./index-DyG9wgsB.js";
var Yw, Cy = { exports: {} }, Ct = {}, zh = { exports: {} }, ca = {}, _y = { exports: {} }, Kw = {}, Xw, Gw, Jw, Zw = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function BS() {
  return Xw || (Xw = 1, f = Zw, process.env.NODE_ENV !== "production" && function() {
    function h(Ee, je) {
      var Q = Ee.length;
      Ee.push(je), function(Te, Oe, ze) {
        for (var _e = ze; _e > 0; ) {
          var Qe = _e - 1 >>> 1, rn = Te[Qe];
          if (!(C(rn, Oe) > 0)) return;
          Te[Qe] = Oe, Te[_e] = rn, _e = Qe;
        }
      }(Ee, je, Q);
    }
    function y(Ee) {
      return Ee.length === 0 ? null : Ee[0];
    }
    function _(Ee) {
      if (Ee.length === 0) return null;
      var je = Ee[0], Q = Ee.pop();
      return Q !== je && (Ee[0] = Q, function(Te, Oe, ze) {
        for (var _e = ze, Qe = Te.length, rn = Qe >>> 1; _e < rn; ) {
          var xn = 2 * (_e + 1) - 1, Dn = Te[xn], kn = xn + 1, ot = Te[kn];
          if (C(Dn, Oe) < 0) kn < Qe && C(ot, Dn) < 0 ? (Te[_e] = ot, Te[kn] = Oe, _e = kn) : (Te[_e] = Dn, Te[xn] = Oe, _e = xn);
          else {
            if (!(kn < Qe && C(ot, Oe) < 0)) return;
            Te[_e] = ot, Te[kn] = Oe, _e = kn;
          }
        }
      }(Ee, Q, 0)), je;
    }
    function C(Ee, je) {
      var Q = Ee.sortIndex - je.sortIndex;
      return Q !== 0 ? Q : Ee.id - je.id;
    }
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error()), typeof performance == "object" && typeof performance.now == "function") {
      var g = performance;
      f.unstable_now = function() {
        return g.now();
      };
    } else {
      var U = Date, j = U.now();
      f.unstable_now = function() {
        return U.now() - j;
      };
    }
    var S = [], T = [], M = 1, F = null, z = 3, Y = !1, ae = !1, re = !1, $ = typeof setTimeout == "function" ? setTimeout : null, ne = typeof clearTimeout == "function" ? clearTimeout : null, ge = typeof setImmediate < "u" ? setImmediate : null;
    function Ie(Ee) {
      for (var je = y(T); je !== null; ) {
        if (je.callback === null) _(T);
        else {
          if (!(je.startTime <= Ee)) return;
          _(T), je.sortIndex = je.expirationTime, h(S, je);
        }
        je = y(T);
      }
    }
    function We(Ee) {
      if (re = !1, Ie(Ee), !ae) if (y(S) !== null) ae = !0, he(xe);
      else {
        var je = y(T);
        je !== null && an(We, je.startTime - Ee);
      }
    }
    function xe(Ee, je) {
      ae = !1, re && (re = !1, ce()), Y = !0;
      var Q = z;
      try {
        return function(Te, Oe) {
          var ze = Oe;
          for (Ie(ze), F = y(S); F !== null && (!(F.expirationTime > ze) || Te && !Ze()); ) {
            var _e = F.callback;
            if (typeof _e == "function") {
              F.callback = null, z = F.priorityLevel;
              var Qe = _e(F.expirationTime <= ze);
              ze = f.unstable_now(), typeof Qe == "function" ? F.callback = Qe : F === y(S) && _(S), Ie(ze);
            } else _(S);
            F = y(S);
          }
          if (F !== null) return !0;
          var rn = y(T);
          return rn !== null && an(We, rn.startTime - ze), !1;
        }(Ee, je);
      } finally {
        F = null, z = Q, Y = !1;
      }
    }
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    var Le = !1, be = null, ue = -1, nn = 5, pn = -1;
    function Ze() {
      return !(f.unstable_now() - pn < nn);
    }
    var gn, ve = function() {
      if (be !== null) {
        var Ee = f.unstable_now();
        pn = Ee;
        var je = !0;
        try {
          je = be(!0, Ee);
        } finally {
          je ? gn() : (Le = !1, be = null);
        }
      } else Le = !1;
    };
    if (typeof ge == "function") gn = function() {
      ge(ve);
    };
    else if (typeof MessageChannel < "u") {
      var Ve = new MessageChannel(), mn = Ve.port2;
      Ve.port1.onmessage = ve, gn = function() {
        mn.postMessage(null);
      };
    } else gn = function() {
      $(ve, 0);
    };
    function he(Ee) {
      be = Ee, Le || (Le = !0, gn());
    }
    function an(Ee, je) {
      ue = $(function() {
        Ee(f.unstable_now());
      }, je);
    }
    function ce() {
      ne(ue), ue = -1;
    }
    var De = function() {
    };
    f.unstable_IdlePriority = 5, f.unstable_ImmediatePriority = 1, f.unstable_LowPriority = 4, f.unstable_NormalPriority = 3, f.unstable_Profiling = null, f.unstable_UserBlockingPriority = 2, f.unstable_cancelCallback = function(Ee) {
      Ee.callback = null;
    }, f.unstable_continueExecution = function() {
      ae || Y || (ae = !0, he(xe));
    }, f.unstable_forceFrameRate = function(Ee) {
      Ee < 0 || Ee > 125 ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : nn = Ee > 0 ? Math.floor(1e3 / Ee) : 5;
    }, f.unstable_getCurrentPriorityLevel = function() {
      return z;
    }, f.unstable_getFirstCallbackNode = function() {
      return y(S);
    }, f.unstable_next = function(Ee) {
      var je;
      switch (z) {
        case 1:
        case 2:
        case 3:
          je = 3;
          break;
        default:
          je = z;
      }
      var Q = z;
      z = je;
      try {
        return Ee();
      } finally {
        z = Q;
      }
    }, f.unstable_pauseExecution = function() {
    }, f.unstable_requestPaint = De, f.unstable_runWithPriority = function(Ee, je) {
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
      var Q = z;
      z = Ee;
      try {
        return je();
      } finally {
        z = Q;
      }
    }, f.unstable_scheduleCallback = function(Ee, je, Q) {
      var Te, Oe, ze = f.unstable_now();
      if (typeof Q == "object" && Q !== null) {
        var _e = Q.delay;
        Te = typeof _e == "number" && _e > 0 ? ze + _e : ze;
      } else Te = ze;
      switch (Ee) {
        case 1:
          Oe = -1;
          break;
        case 2:
          Oe = 250;
          break;
        case 5:
          Oe = 1073741823;
          break;
        case 4:
          Oe = 1e4;
          break;
        default:
          Oe = 5e3;
      }
      var Qe = Te + Oe, rn = { id: M++, callback: je, priorityLevel: Ee, startTime: Te, expirationTime: Qe, sortIndex: -1 };
      return Te > ze ? (rn.sortIndex = Te, h(T, rn), y(S) === null && rn === y(T) && (re ? ce() : re = !0, an(We, Te - ze))) : (rn.sortIndex = Qe, h(S, rn), ae || Y || (ae = !0, he(xe))), rn;
    }, f.unstable_shouldYield = Ze, f.unstable_wrapCallback = function(Ee) {
      var je = z;
      return function() {
        var Q = z;
        z = je;
        try {
          return Ee.apply(this, arguments);
        } finally {
          z = Q;
        }
      };
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Zw;
  var f;
}
function Y1() {
  return Gw || (Gw = 1, process.env.NODE_ENV === "production" ? _y.exports = (Yw || (Yw = 1, function(f) {
    function h(ce, De) {
      var Ee = ce.length;
      ce.push(De);
      e: for (; 0 < Ee; ) {
        var je = Ee - 1 >>> 1, Q = ce[je];
        if (!(0 < C(Q, De))) break e;
        ce[je] = De, ce[Ee] = Q, Ee = je;
      }
    }
    function y(ce) {
      return ce.length === 0 ? null : ce[0];
    }
    function _(ce) {
      if (ce.length === 0) return null;
      var De = ce[0], Ee = ce.pop();
      if (Ee !== De) {
        ce[0] = Ee;
        e: for (var je = 0, Q = ce.length, Te = Q >>> 1; je < Te; ) {
          var Oe = 2 * (je + 1) - 1, ze = ce[Oe], _e = Oe + 1, Qe = ce[_e];
          if (0 > C(ze, Ee)) _e < Q && 0 > C(Qe, ze) ? (ce[je] = Qe, ce[_e] = Ee, je = _e) : (ce[je] = ze, ce[Oe] = Ee, je = Oe);
          else {
            if (!(_e < Q && 0 > C(Qe, Ee))) break e;
            ce[je] = Qe, ce[_e] = Ee, je = _e;
          }
        }
      }
      return De;
    }
    function C(ce, De) {
      var Ee = ce.sortIndex - De.sortIndex;
      return Ee !== 0 ? Ee : ce.id - De.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var g = performance;
      f.unstable_now = function() {
        return g.now();
      };
    } else {
      var U = Date, j = U.now();
      f.unstable_now = function() {
        return U.now() - j;
      };
    }
    var S = [], T = [], M = 1, F = null, z = 3, Y = !1, ae = !1, re = !1, $ = typeof setTimeout == "function" ? setTimeout : null, ne = typeof clearTimeout == "function" ? clearTimeout : null, ge = typeof setImmediate < "u" ? setImmediate : null;
    function Ie(ce) {
      for (var De = y(T); De !== null; ) {
        if (De.callback === null) _(T);
        else {
          if (!(De.startTime <= ce)) break;
          _(T), De.sortIndex = De.expirationTime, h(S, De);
        }
        De = y(T);
      }
    }
    function We(ce) {
      if (re = !1, Ie(ce), !ae) if (y(S) !== null) ae = !0, he(xe);
      else {
        var De = y(T);
        De !== null && an(We, De.startTime - ce);
      }
    }
    function xe(ce, De) {
      ae = !1, re && (re = !1, ne(nn), nn = -1), Y = !0;
      var Ee = z;
      try {
        for (Ie(De), F = y(S); F !== null && (!(F.expirationTime > De) || ce && !gn()); ) {
          var je = F.callback;
          if (typeof je == "function") {
            F.callback = null, z = F.priorityLevel;
            var Q = je(F.expirationTime <= De);
            De = f.unstable_now(), typeof Q == "function" ? F.callback = Q : F === y(S) && _(S), Ie(De);
          } else _(S);
          F = y(S);
        }
        if (F !== null) var Te = !0;
        else {
          var Oe = y(T);
          Oe !== null && an(We, Oe.startTime - De), Te = !1;
        }
        return Te;
      } finally {
        F = null, z = Ee, Y = !1;
      }
    }
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    var Le, be = !1, ue = null, nn = -1, pn = 5, Ze = -1;
    function gn() {
      return !(f.unstable_now() - Ze < pn);
    }
    function ve() {
      if (ue !== null) {
        var ce = f.unstable_now();
        Ze = ce;
        var De = !0;
        try {
          De = ue(!0, ce);
        } finally {
          De ? Le() : (be = !1, ue = null);
        }
      } else be = !1;
    }
    if (typeof ge == "function") Le = function() {
      ge(ve);
    };
    else if (typeof MessageChannel < "u") {
      var Ve = new MessageChannel(), mn = Ve.port2;
      Ve.port1.onmessage = ve, Le = function() {
        mn.postMessage(null);
      };
    } else Le = function() {
      $(ve, 0);
    };
    function he(ce) {
      ue = ce, be || (be = !0, Le());
    }
    function an(ce, De) {
      nn = $(function() {
        ce(f.unstable_now());
      }, De);
    }
    f.unstable_IdlePriority = 5, f.unstable_ImmediatePriority = 1, f.unstable_LowPriority = 4, f.unstable_NormalPriority = 3, f.unstable_Profiling = null, f.unstable_UserBlockingPriority = 2, f.unstable_cancelCallback = function(ce) {
      ce.callback = null;
    }, f.unstable_continueExecution = function() {
      ae || Y || (ae = !0, he(xe));
    }, f.unstable_forceFrameRate = function(ce) {
      0 > ce || 125 < ce ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : pn = 0 < ce ? Math.floor(1e3 / ce) : 5;
    }, f.unstable_getCurrentPriorityLevel = function() {
      return z;
    }, f.unstable_getFirstCallbackNode = function() {
      return y(S);
    }, f.unstable_next = function(ce) {
      switch (z) {
        case 1:
        case 2:
        case 3:
          var De = 3;
          break;
        default:
          De = z;
      }
      var Ee = z;
      z = De;
      try {
        return ce();
      } finally {
        z = Ee;
      }
    }, f.unstable_pauseExecution = function() {
    }, f.unstable_requestPaint = function() {
    }, f.unstable_runWithPriority = function(ce, De) {
      switch (ce) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          ce = 3;
      }
      var Ee = z;
      z = ce;
      try {
        return De();
      } finally {
        z = Ee;
      }
    }, f.unstable_scheduleCallback = function(ce, De, Ee) {
      var je = f.unstable_now();
      switch (Ee = typeof Ee == "object" && Ee !== null && typeof (Ee = Ee.delay) == "number" && 0 < Ee ? je + Ee : je, ce) {
        case 1:
          var Q = -1;
          break;
        case 2:
          Q = 250;
          break;
        case 5:
          Q = 1073741823;
          break;
        case 4:
          Q = 1e4;
          break;
        default:
          Q = 5e3;
      }
      return ce = { id: M++, callback: De, priorityLevel: ce, startTime: Ee, expirationTime: Q = Ee + Q, sortIndex: -1 }, Ee > je ? (ce.sortIndex = Ee, h(T, ce), y(S) === null && ce === y(T) && (re ? (ne(nn), nn = -1) : re = !0, an(We, Ee - je))) : (ce.sortIndex = Q, h(S, ce), ae || Y || (ae = !0, he(xe))), ce;
    }, f.unstable_shouldYield = gn, f.unstable_wrapCallback = function(ce) {
      var De = z;
      return function() {
        var Ee = z;
        z = De;
        try {
          return ce.apply(this, arguments);
        } finally {
          z = Ee;
        }
      };
    };
  }(Kw)), Kw) : _y.exports = BS()), _y.exports;
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
function WS() {
  if (Jw) return ca;
  Jw = 1;
  var f = Qh, h = Y1();
  function y(t) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, o = 1; o < arguments.length; o++) r += "&args[]=" + encodeURIComponent(arguments[o]);
    return "Minified React error #" + t + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var _ = /* @__PURE__ */ new Set(), C = {};
  function g(t, r) {
    U(t, r), U(t + "Capture", r);
  }
  function U(t, r) {
    for (C[t] = r, t = 0; t < r.length; t++) _.add(r[t]);
  }
  var j = !(typeof window > "u" || window.document === void 0 || window.document.createElement === void 0), S = Object.prototype.hasOwnProperty, T = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, M = {}, F = {};
  function z(t, r, o, u, c, m, k) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = u, this.attributeNamespace = c, this.mustUseProperty = o, this.propertyName = t, this.type = r, this.sanitizeURL = m, this.removeEmptyString = k;
  }
  var Y = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t) {
    Y[t] = new z(t, 0, !1, t, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(t) {
    var r = t[0];
    Y[r] = new z(r, 1, !1, t[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(t) {
    Y[t] = new z(t, 2, !1, t.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(t) {
    Y[t] = new z(t, 2, !1, t, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t) {
    Y[t] = new z(t, 3, !1, t.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(t) {
    Y[t] = new z(t, 3, !0, t, null, !1, !1);
  }), ["capture", "download"].forEach(function(t) {
    Y[t] = new z(t, 4, !1, t, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(t) {
    Y[t] = new z(t, 6, !1, t, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(t) {
    Y[t] = new z(t, 5, !1, t.toLowerCase(), null, !1, !1);
  });
  var ae = /[\-:]([a-z])/g;
  function re(t) {
    return t[1].toUpperCase();
  }
  function $(t, r, o, u) {
    var c = Y.hasOwnProperty(r) ? Y[r] : null;
    (c !== null ? c.type !== 0 : u || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (function(m, k, I, A) {
      if (k == null || function(q, G, oe, Z) {
        if (oe !== null && oe.type === 0) return !1;
        switch (typeof G) {
          case "function":
          case "symbol":
            return !0;
          case "boolean":
            return !Z && (oe !== null ? !oe.acceptsBooleans : (q = q.toLowerCase().slice(0, 5)) !== "data-" && q !== "aria-");
          default:
            return !1;
        }
      }(m, k, I, A)) return !0;
      if (A) return !1;
      if (I !== null) switch (I.type) {
        case 3:
          return !k;
        case 4:
          return k === !1;
        case 5:
          return isNaN(k);
        case 6:
          return isNaN(k) || 1 > k;
      }
      return !1;
    }(r, o, c, u) && (o = null), u || c === null ? function(m) {
      return !!S.call(F, m) || !S.call(M, m) && (T.test(m) ? F[m] = !0 : (M[m] = !0, !1));
    }(r) && (o === null ? t.removeAttribute(r) : t.setAttribute(r, "" + o)) : c.mustUseProperty ? t[c.propertyName] = o === null ? c.type !== 3 && "" : o : (r = c.attributeName, u = c.attributeNamespace, o === null ? t.removeAttribute(r) : (o = (c = c.type) === 3 || c === 4 && o === !0 ? "" : "" + o, u ? t.setAttributeNS(u, r, o) : t.setAttribute(r, o))));
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t) {
    var r = t.replace(ae, re);
    Y[r] = new z(r, 1, !1, t, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t) {
    var r = t.replace(ae, re);
    Y[r] = new z(r, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(t) {
    var r = t.replace(ae, re);
    Y[r] = new z(r, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(t) {
    Y[t] = new z(t, 1, !1, t.toLowerCase(), null, !1, !1);
  }), Y.xlinkHref = new z("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(t) {
    Y[t] = new z(t, 1, !1, t.toLowerCase(), null, !0, !0);
  });
  var ne = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ge = Symbol.for("react.element"), Ie = Symbol.for("react.portal"), We = Symbol.for("react.fragment"), xe = Symbol.for("react.strict_mode"), Le = Symbol.for("react.profiler"), be = Symbol.for("react.provider"), ue = Symbol.for("react.context"), nn = Symbol.for("react.forward_ref"), pn = Symbol.for("react.suspense"), Ze = Symbol.for("react.suspense_list"), gn = Symbol.for("react.memo"), ve = Symbol.for("react.lazy"), Ve = Symbol.for("react.offscreen"), mn = Symbol.iterator;
  function he(t) {
    return t === null || typeof t != "object" ? null : typeof (t = mn && t[mn] || t["@@iterator"]) == "function" ? t : null;
  }
  var an, ce = Object.assign;
  function De(t) {
    if (an === void 0) try {
      throw Error();
    } catch (o) {
      var r = o.stack.trim().match(/\n( *(at )?)/);
      an = r && r[1] || "";
    }
    return `
` + an + t;
  }
  var Ee = !1;
  function je(t, r) {
    if (!t || Ee) return "";
    Ee = !0;
    var o = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r) if (r = function() {
        throw Error();
      }, Object.defineProperty(r.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(r, []);
        } catch (q) {
          var u = q;
        }
        Reflect.construct(t, [], r);
      } else {
        try {
          r.call();
        } catch (q) {
          u = q;
        }
        t.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (q) {
          u = q;
        }
        t();
      }
    } catch (q) {
      if (q && u && typeof q.stack == "string") {
        for (var c = q.stack.split(`
`), m = u.stack.split(`
`), k = c.length - 1, I = m.length - 1; 1 <= k && 0 <= I && c[k] !== m[I]; ) I--;
        for (; 1 <= k && 0 <= I; k--, I--) if (c[k] !== m[I]) {
          if (k !== 1 || I !== 1) do
            if (k--, 0 > --I || c[k] !== m[I]) {
              var A = `
` + c[k].replace(" at new ", " at ");
              return t.displayName && A.includes("<anonymous>") && (A = A.replace("<anonymous>", t.displayName)), A;
            }
          while (1 <= k && 0 <= I);
          break;
        }
      }
    } finally {
      Ee = !1, Error.prepareStackTrace = o;
    }
    return (t = t ? t.displayName || t.name : "") ? De(t) : "";
  }
  function Q(t) {
    switch (t.tag) {
      case 5:
        return De(t.type);
      case 16:
        return De("Lazy");
      case 13:
        return De("Suspense");
      case 19:
        return De("SuspenseList");
      case 0:
      case 2:
      case 15:
        return t = je(t.type, !1);
      case 11:
        return t = je(t.type.render, !1);
      case 1:
        return t = je(t.type, !0);
      default:
        return "";
    }
  }
  function Te(t) {
    if (t == null) return null;
    if (typeof t == "function") return t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case We:
        return "Fragment";
      case Ie:
        return "Portal";
      case Le:
        return "Profiler";
      case xe:
        return "StrictMode";
      case pn:
        return "Suspense";
      case Ze:
        return "SuspenseList";
    }
    if (typeof t == "object") switch (t.$$typeof) {
      case ue:
        return (t.displayName || "Context") + ".Consumer";
      case be:
        return (t._context.displayName || "Context") + ".Provider";
      case nn:
        var r = t.render;
        return (t = t.displayName) || (t = (t = r.displayName || r.name || "") !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
      case gn:
        return (r = t.displayName || null) !== null ? r : Te(t.type) || "Memo";
      case ve:
        r = t._payload, t = t._init;
        try {
          return Te(t(r));
        } catch {
        }
    }
    return null;
  }
  function Oe(t) {
    var r = t.type;
    switch (t.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return t = (t = r.render).displayName || t.name || "", r.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef");
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
        return Te(r);
      case 8:
        return r === xe ? "StrictMode" : "Mode";
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
  function ze(t) {
    switch (typeof t) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
      case "object":
        return t;
      default:
        return "";
    }
  }
  function _e(t) {
    var r = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Qe(t) {
    t._valueTracker || (t._valueTracker = function(r) {
      var o = _e(r) ? "checked" : "value", u = Object.getOwnPropertyDescriptor(r.constructor.prototype, o), c = "" + r[o];
      if (!r.hasOwnProperty(o) && u !== void 0 && typeof u.get == "function" && typeof u.set == "function") {
        var m = u.get, k = u.set;
        return Object.defineProperty(r, o, { configurable: !0, get: function() {
          return m.call(this);
        }, set: function(I) {
          c = "" + I, k.call(this, I);
        } }), Object.defineProperty(r, o, { enumerable: u.enumerable }), { getValue: function() {
          return c;
        }, setValue: function(I) {
          c = "" + I;
        }, stopTracking: function() {
          r._valueTracker = null, delete r[o];
        } };
      }
    }(t));
  }
  function rn(t) {
    if (!t) return !1;
    var r = t._valueTracker;
    if (!r) return !0;
    var o = r.getValue(), u = "";
    return t && (u = _e(t) ? t.checked ? "true" : "false" : t.value), (t = u) !== o && (r.setValue(t), !0);
  }
  function xn(t) {
    if ((t = t || (typeof document < "u" ? document : void 0)) === void 0) return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  function Dn(t, r) {
    var o = r.checked;
    return ce({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: o ?? t._wrapperState.initialChecked });
  }
  function kn(t, r) {
    var o = r.defaultValue == null ? "" : r.defaultValue, u = r.checked != null ? r.checked : r.defaultChecked;
    o = ze(r.value != null ? r.value : o), t._wrapperState = { initialChecked: u, initialValue: o, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function ot(t, r) {
    (r = r.checked) != null && $(t, "checked", r, !1);
  }
  function gr(t, r) {
    ot(t, r);
    var o = ze(r.value), u = r.type;
    if (o != null) u === "number" ? (o === 0 && t.value === "" || t.value != o) && (t.value = "" + o) : t.value !== "" + o && (t.value = "" + o);
    else if (u === "submit" || u === "reset") return void t.removeAttribute("value");
    r.hasOwnProperty("value") ? rr(t, r.type, o) : r.hasOwnProperty("defaultValue") && rr(t, r.type, ze(r.defaultValue)), r.checked == null && r.defaultChecked != null && (t.defaultChecked = !!r.defaultChecked);
  }
  function tr(t, r, o) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var u = r.type;
      if (!(u !== "submit" && u !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + t._wrapperState.initialValue, o || r === t.value || (t.value = r), t.defaultValue = r;
    }
    (o = t.name) !== "" && (t.name = ""), t.defaultChecked = !!t._wrapperState.initialChecked, o !== "" && (t.name = o);
  }
  function rr(t, r, o) {
    r === "number" && xn(t.ownerDocument) === t || (o == null ? t.defaultValue = "" + t._wrapperState.initialValue : t.defaultValue !== "" + o && (t.defaultValue = "" + o));
  }
  var zn = Array.isArray;
  function B(t, r, o, u) {
    if (t = t.options, r) {
      r = {};
      for (var c = 0; c < o.length; c++) r["$" + o[c]] = !0;
      for (o = 0; o < t.length; o++) c = r.hasOwnProperty("$" + t[o].value), t[o].selected !== c && (t[o].selected = c), c && u && (t[o].defaultSelected = !0);
    } else {
      for (o = "" + ze(o), r = null, c = 0; c < t.length; c++) {
        if (t[c].value === o) return t[c].selected = !0, void (u && (t[c].defaultSelected = !0));
        r !== null || t[c].disabled || (r = t[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Ce(t, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(y(91));
    return ce({}, r, { value: void 0, defaultValue: void 0, children: "" + t._wrapperState.initialValue });
  }
  function Pe(t, r) {
    var o = r.value;
    if (o == null) {
      if (o = r.children, r = r.defaultValue, o != null) {
        if (r != null) throw Error(y(92));
        if (zn(o)) {
          if (1 < o.length) throw Error(y(93));
          o = o[0];
        }
        r = o;
      }
      r == null && (r = ""), o = r;
    }
    t._wrapperState = { initialValue: ze(o) };
  }
  function yn(t, r) {
    var o = ze(r.value), u = ze(r.defaultValue);
    o != null && ((o = "" + o) !== t.value && (t.value = o), r.defaultValue == null && t.defaultValue !== o && (t.defaultValue = o)), u != null && (t.defaultValue = "" + u);
  }
  function lt(t) {
    var r = t.textContent;
    r === t._wrapperState.initialValue && r !== "" && r !== null && (t.value = r);
  }
  function Fn(t) {
    switch (t) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function cn(t, r) {
    return t == null || t === "http://www.w3.org/1999/xhtml" ? Fn(r) : t === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : t;
  }
  var sn, Nn, hn = (Nn = function(t, r) {
    if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in t) t.innerHTML = r;
    else {
      for ((sn = sn || document.createElement("div")).innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = sn.firstChild; t.firstChild; ) t.removeChild(t.firstChild);
      for (; r.firstChild; ) t.appendChild(r.firstChild);
    }
  }, typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, r, o, u) {
    MSApp.execUnsafeLocalFunction(function() {
      return Nn(t, r);
    });
  } : Nn);
  function bn(t, r) {
    if (r) {
      var o = t.firstChild;
      if (o && o === t.lastChild && o.nodeType === 3) return void (o.nodeValue = r);
    }
    t.textContent = r;
  }
  var Ot = { animationIterationCount: !0, aspectRatio: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridArea: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0, gridColumnStart: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0, stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0 }, Lt = ["Webkit", "ms", "Moz", "O"];
  function Qr(t, r, o) {
    return r == null || typeof r == "boolean" || r === "" ? "" : o || typeof r != "number" || r === 0 || Ot.hasOwnProperty(t) && Ot[t] ? ("" + r).trim() : r + "px";
  }
  function cl(t, r) {
    for (var o in t = t.style, r) if (r.hasOwnProperty(o)) {
      var u = o.indexOf("--") === 0, c = Qr(o, r[o], u);
      o === "float" && (o = "cssFloat"), u ? t.setProperty(o, c) : t[o] = c;
    }
  }
  Object.keys(Ot).forEach(function(t) {
    Lt.forEach(function(r) {
      r = r + t.charAt(0).toUpperCase() + t.substring(1), Ot[r] = Ot[t];
    });
  });
  var V = ce({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function pe(t, r) {
    if (r) {
      if (V[t] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(y(137, t));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(y(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(y(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(y(62));
    }
  }
  function we(t, r) {
    if (t.indexOf("-") === -1) return typeof r.is == "string";
    switch (t) {
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
  var Re = null;
  function tn(t) {
    return (t = t.target || t.srcElement || window).correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var Cn = null, He = null, Sn = null;
  function bt(t) {
    if (t = to(t)) {
      if (typeof Cn != "function") throw Error(y(280));
      var r = t.stateNode;
      r && (r = Ol(r), Cn(t.stateNode, t.type, r));
    }
  }
  function An(t) {
    He ? Sn ? Sn.push(t) : Sn = [t] : He = t;
  }
  function et() {
    if (He) {
      var t = He, r = Sn;
      if (Sn = He = null, bt(t), r) for (t = 0; t < r.length; t++) bt(r[t]);
    }
  }
  function Hn(t, r) {
    return t(r);
  }
  function Ht() {
  }
  var da = !1;
  function fa(t, r, o) {
    if (da) return t(r, o);
    da = !0;
    try {
      return Hn(t, r, o);
    } finally {
      da = !1, (He !== null || Sn !== null) && (Ht(), et());
    }
  }
  function it(t, r) {
    var o = t.stateNode;
    if (o === null) return null;
    var u = Ol(o);
    if (u === null) return null;
    o = u[r];
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
        (u = !u.disabled) || (u = !((t = t.type) === "button" || t === "input" || t === "select" || t === "textarea")), t = !u;
        break e;
      default:
        t = !1;
    }
    if (t) return null;
    if (o && typeof o != "function") throw Error(y(231, r, typeof o));
    return o;
  }
  var wt = !1;
  if (j) try {
    var Ra = {};
    Object.defineProperty(Ra, "passive", { get: function() {
      wt = !0;
    } }), window.addEventListener("test", Ra, Ra), window.removeEventListener("test", Ra, Ra);
  } catch {
    wt = !1;
  }
  function Xs(t, r, o, u, c, m, k, I, A) {
    var q = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(o, q);
    } catch (G) {
      this.onError(G);
    }
  }
  var Ka = !1, So = null, En = !1, Xa = null, dn = { onError: function(t) {
    Ka = !0, So = t;
  } };
  function Cp(t, r, o, u, c, m, k, I, A) {
    Ka = !1, So = null, Xs.apply(dn, arguments);
  }
  function kt(t) {
    var r = t, o = t;
    if (t.alternate) for (; r.return; ) r = r.return;
    else {
      t = r;
      do
        4098 & (r = t).flags && (o = r.return), t = r.return;
      while (t);
    }
    return r.tag === 3 ? o : null;
  }
  function dl(t) {
    if (t.tag === 13) {
      var r = t.memoizedState;
      if (r === null && (t = t.alternate) !== null && (r = t.memoizedState), r !== null) return r.dehydrated;
    }
    return null;
  }
  function fl(t) {
    if (kt(t) !== t) throw Error(y(188));
  }
  function _p(t) {
    return (t = function(r) {
      var o = r.alternate;
      if (!o) {
        if ((o = kt(r)) === null) throw Error(y(188));
        return o !== r ? null : r;
      }
      for (var u = r, c = o; ; ) {
        var m = u.return;
        if (m === null) break;
        var k = m.alternate;
        if (k === null) {
          if ((c = m.return) !== null) {
            u = c;
            continue;
          }
          break;
        }
        if (m.child === k.child) {
          for (k = m.child; k; ) {
            if (k === u) return fl(m), r;
            if (k === c) return fl(m), o;
            k = k.sibling;
          }
          throw Error(y(188));
        }
        if (u.return !== c.return) u = m, c = k;
        else {
          for (var I = !1, A = m.child; A; ) {
            if (A === u) {
              I = !0, u = m, c = k;
              break;
            }
            if (A === c) {
              I = !0, c = m, u = k;
              break;
            }
            A = A.sibling;
          }
          if (!I) {
            for (A = k.child; A; ) {
              if (A === u) {
                I = !0, u = k, c = m;
                break;
              }
              if (A === c) {
                I = !0, c = k, u = m;
                break;
              }
              A = A.sibling;
            }
            if (!I) throw Error(y(189));
          }
        }
        if (u.alternate !== c) throw Error(y(190));
      }
      if (u.tag !== 3) throw Error(y(188));
      return u.stateNode.current === u ? r : o;
    }(t)) !== null ? $t(t) : null;
  }
  function $t(t) {
    if (t.tag === 5 || t.tag === 6) return t;
    for (t = t.child; t !== null; ) {
      var r = $t(t);
      if (r !== null) return r;
      t = t.sibling;
    }
    return null;
  }
  var ut = h.unstable_scheduleCallback, pa = h.unstable_cancelCallback, Yr = h.unstable_shouldYield, Eo = h.unstable_requestPaint, pt = h.unstable_now, md = h.unstable_getCurrentPriorityLevel, Gs = h.unstable_ImmediatePriority, hd = h.unstable_UserBlockingPriority, pl = h.unstable_NormalPriority, Pp = h.unstable_LowPriority, Ru = h.unstable_IdlePriority, Nu = null, ma = null, Kr = Math.clz32 ? Math.clz32 : function(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (Rp(t) / Np | 0) | 0;
  }, Rp = Math.log, Np = Math.LN2, Iu = 64, Js = 4194304;
  function ml(t) {
    switch (t & -t) {
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
        return 4194240 & t;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return 130023424 & t;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return t;
    }
  }
  function hl(t, r) {
    var o = t.pendingLanes;
    if (o === 0) return 0;
    var u = 0, c = t.suspendedLanes, m = t.pingedLanes, k = 268435455 & o;
    if (k !== 0) {
      var I = k & ~c;
      I !== 0 ? u = ml(I) : (m &= k) !== 0 && (u = ml(m));
    } else (k = o & ~c) !== 0 ? u = ml(k) : m !== 0 && (u = ml(m));
    if (u === 0) return 0;
    if (r !== 0 && r !== u && !(r & c) && ((c = u & -u) >= (m = r & -r) || c === 16 && 4194240 & m)) return r;
    if (4 & u && (u |= 16 & o), (r = t.entangledLanes) !== 0) for (t = t.entanglements, r &= u; 0 < r; ) c = 1 << (o = 31 - Kr(r)), u |= t[o], r &= ~c;
    return u;
  }
  function Ip(t, r) {
    switch (t) {
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
      default:
        return -1;
    }
  }
  function vd(t) {
    return (t = -1073741825 & t.pendingLanes) !== 0 ? t : 1073741824 & t ? 1073741824 : 0;
  }
  function Zs() {
    var t = Iu;
    return !(4194240 & (Iu <<= 1)) && (Iu = 64), t;
  }
  function ec(t) {
    for (var r = [], o = 0; 31 > o; o++) r.push(t);
    return r;
  }
  function vl(t, r, o) {
    t.pendingLanes |= r, r !== 536870912 && (t.suspendedLanes = 0, t.pingedLanes = 0), (t = t.eventTimes)[r = 31 - Kr(r)] = o;
  }
  function nc(t, r) {
    var o = t.entangledLanes |= r;
    for (t = t.entanglements; o; ) {
      var u = 31 - Kr(o), c = 1 << u;
      c & r | t[u] & r && (t[u] |= r), o &= ~c;
    }
  }
  var On = 0;
  function tc(t) {
    return 1 < (t &= -t) ? 4 < t ? 268435455 & t ? 16 : 536870912 : 4 : 1;
  }
  var Dp, Mt, gd, yd, hi, Du = !1, Ou = [], Ga = null, Na = null, Ja = null, gl = /* @__PURE__ */ new Map(), yl = /* @__PURE__ */ new Map(), qt = [], bd = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function rc(t, r) {
    switch (t) {
      case "focusin":
      case "focusout":
        Ga = null;
        break;
      case "dragenter":
      case "dragleave":
        Na = null;
        break;
      case "mouseover":
      case "mouseout":
        Ja = null;
        break;
      case "pointerover":
      case "pointerout":
        gl.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        yl.delete(r.pointerId);
    }
  }
  function vi(t, r, o, u, c, m) {
    return t === null || t.nativeEvent !== m ? (t = { blockedOn: r, domEventName: o, eventSystemFlags: u, nativeEvent: m, targetContainers: [c] }, r !== null && (r = to(r)) !== null && Mt(r), t) : (t.eventSystemFlags |= u, r = t.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), t);
  }
  function ac(t) {
    var r = Qt(t.target);
    if (r !== null) {
      var o = kt(r);
      if (o !== null) {
        if ((r = o.tag) === 13) {
          if ((r = dl(o)) !== null) return t.blockedOn = r, void hi(t.priority, function() {
            gd(o);
          });
        } else if (r === 3 && o.stateNode.current.memoizedState.isDehydrated) return void (t.blockedOn = o.tag === 3 ? o.stateNode.containerInfo : null);
      }
    }
    t.blockedOn = null;
  }
  function bl(t) {
    if (t.blockedOn !== null) return !1;
    for (var r = t.targetContainers; 0 < r.length; ) {
      var o = Sd(t.domEventName, t.eventSystemFlags, r[0], t.nativeEvent);
      if (o !== null) return (r = to(o)) !== null && Mt(r), t.blockedOn = o, !1;
      var u = new (o = t.nativeEvent).constructor(o.type, o);
      Re = u, o.target.dispatchEvent(u), Re = null, r.shift();
    }
    return !0;
  }
  function wd(t, r, o) {
    bl(t) && o.delete(r);
  }
  function oc() {
    Du = !1, Ga !== null && bl(Ga) && (Ga = null), Na !== null && bl(Na) && (Na = null), Ja !== null && bl(Ja) && (Ja = null), gl.forEach(wd), yl.forEach(wd);
  }
  function Lu(t, r) {
    t.blockedOn === r && (t.blockedOn = null, Du || (Du = !0, h.unstable_scheduleCallback(h.unstable_NormalPriority, oc)));
  }
  function Za(t) {
    function r(c) {
      return Lu(c, t);
    }
    if (0 < Ou.length) {
      Lu(Ou[0], t);
      for (var o = 1; o < Ou.length; o++) {
        var u = Ou[o];
        u.blockedOn === t && (u.blockedOn = null);
      }
    }
    for (Ga !== null && Lu(Ga, t), Na !== null && Lu(Na, t), Ja !== null && Lu(Ja, t), gl.forEach(r), yl.forEach(r), o = 0; o < qt.length; o++) (u = qt[o]).blockedOn === t && (u.blockedOn = null);
    for (; 0 < qt.length && (o = qt[0]).blockedOn === null; ) ac(o), o.blockedOn === null && qt.shift();
  }
  var wl = ne.ReactCurrentBatchConfig, kl = !0;
  function Gh(t, r, o, u) {
    var c = On, m = wl.transition;
    wl.transition = null;
    try {
      On = 1, kd(t, r, o, u);
    } finally {
      On = c, wl.transition = m;
    }
  }
  function Jh(t, r, o, u) {
    var c = On, m = wl.transition;
    wl.transition = null;
    try {
      On = 4, kd(t, r, o, u);
    } finally {
      On = c, wl.transition = m;
    }
  }
  function kd(t, r, o, u) {
    if (kl) {
      var c = Sd(t, r, o, u);
      if (c === null) Ro(t, r, u, ic, o), rc(t, u);
      else if (function(k, I, A, q, G) {
        switch (I) {
          case "focusin":
            return Ga = vi(Ga, k, I, A, q, G), !0;
          case "dragenter":
            return Na = vi(Na, k, I, A, q, G), !0;
          case "mouseover":
            return Ja = vi(Ja, k, I, A, q, G), !0;
          case "pointerover":
            var oe = G.pointerId;
            return gl.set(oe, vi(gl.get(oe) || null, k, I, A, q, G)), !0;
          case "gotpointercapture":
            return oe = G.pointerId, yl.set(oe, vi(yl.get(oe) || null, k, I, A, q, G)), !0;
        }
        return !1;
      }(c, t, r, o, u)) u.stopPropagation();
      else if (rc(t, u), 4 & r && -1 < bd.indexOf(t)) {
        for (; c !== null; ) {
          var m = to(c);
          if (m !== null && Dp(m), (m = Sd(t, r, o, u)) === null && Ro(t, r, u, ic, o), m === c) break;
          c = m;
        }
        c !== null && u.stopPropagation();
      } else Ro(t, r, u, null, o);
    }
  }
  var ic = null;
  function Sd(t, r, o, u) {
    if (ic = null, (t = Qt(t = tn(u))) !== null) if ((r = kt(t)) === null) t = null;
    else if ((o = r.tag) === 13) {
      if ((t = dl(r)) !== null) return t;
      t = null;
    } else if (o === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      t = null;
    } else r !== t && (t = null);
    return ic = t, null;
  }
  function Ed(t) {
    switch (t) {
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
        switch (md()) {
          case Gs:
            return 1;
          case hd:
            return 4;
          case pl:
          case Pp:
            return 16;
          case Ru:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Xr = null, Mu = null, zu = null;
  function xd() {
    if (zu) return zu;
    var t, r, o = Mu, u = o.length, c = "value" in Xr ? Xr.value : Xr.textContent, m = c.length;
    for (t = 0; t < u && o[t] === c[t]; t++) ;
    var k = u - t;
    for (r = 1; r <= k && o[u - r] === c[m - r]; r++) ;
    return zu = c.slice(t, 1 < r ? 1 - r : void 0);
  }
  function lc(t) {
    var r = t.keyCode;
    return "charCode" in t ? (t = t.charCode) === 0 && r === 13 && (t = 13) : t = r, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function uc() {
    return !0;
  }
  function Op() {
    return !1;
  }
  function yr(t) {
    function r(o, u, c, m, k) {
      for (var I in this._reactName = o, this._targetInst = c, this.type = u, this.nativeEvent = m, this.target = k, this.currentTarget = null, t) t.hasOwnProperty(I) && (o = t[I], this[I] = o ? o(m) : m[I]);
      return this.isDefaultPrevented = (m.defaultPrevented != null ? m.defaultPrevented : m.returnValue === !1) ? uc : Op, this.isPropagationStopped = Op, this;
    }
    return ce(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var o = this.nativeEvent;
      o && (o.preventDefault ? o.preventDefault() : typeof o.returnValue != "unknown" && (o.returnValue = !1), this.isDefaultPrevented = uc);
    }, stopPropagation: function() {
      var o = this.nativeEvent;
      o && (o.stopPropagation ? o.stopPropagation() : typeof o.cancelBubble != "unknown" && (o.cancelBubble = !0), this.isPropagationStopped = uc);
    }, persist: function() {
    }, isPersistent: uc }), r;
  }
  var sc, Td, gi, Gr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(t) {
    return t.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Sl = yr(Gr), El = ce({}, Gr, { view: 0, detail: 0 }), xl = yr(El), cc = ce({}, El, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: yi, button: 0, buttons: 0, relatedTarget: function(t) {
    return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
  }, movementX: function(t) {
    return "movementX" in t ? t.movementX : (t !== gi && (gi && t.type === "mousemove" ? (sc = t.screenX - gi.screenX, Td = t.screenY - gi.screenY) : Td = sc = 0, gi = t), sc);
  }, movementY: function(t) {
    return "movementY" in t ? t.movementY : Td;
  } }), Lp = yr(cc), Zh = yr(ce({}, cc, { dataTransfer: 0 })), Cd = yr(ce({}, El, { relatedTarget: 0 })), Mp = yr(ce({}, Gr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })), zp = ce({}, Gr, { clipboardData: function(t) {
    return "clipboardData" in t ? t.clipboardData : window.clipboardData;
  } }), ar = yr(zp), _d = yr(ce({}, Gr, { data: 0 })), ev = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, nv = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, tv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function rv(t) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(t) : !!(t = tv[t]) && !!r[t];
  }
  function yi() {
    return rv;
  }
  var Pd = ce({}, El, { key: function(t) {
    if (t.key) {
      var r = ev[t.key] || t.key;
      if (r !== "Unidentified") return r;
    }
    return t.type === "keypress" ? (t = lc(t)) === 13 ? "Enter" : String.fromCharCode(t) : t.type === "keydown" || t.type === "keyup" ? nv[t.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: yi, charCode: function(t) {
    return t.type === "keypress" ? lc(t) : 0;
  }, keyCode: function(t) {
    return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
  }, which: function(t) {
    return t.type === "keypress" ? lc(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
  } }), Rd = yr(Pd), bi = yr(ce({}, cc, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 })), Tl = yr(ce({}, El, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: yi })), Ap = yr(ce({}, Gr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })), Up = ce({}, cc, { deltaX: function(t) {
    return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
  }, deltaY: function(t) {
    return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
  }, deltaZ: 0, deltaMode: 0 }), Fp = yr(Up), jp = [9, 13, 27, 32], dc = j && "CompositionEvent" in window, wi = null;
  j && "documentMode" in document && (wi = document.documentMode);
  var av = j && "TextEvent" in window && !wi, Nd = j && (!dc || wi && 8 < wi && 11 >= wi), Cl = " ", fc = !1;
  function _l(t, r) {
    switch (t) {
      case "keyup":
        return jp.indexOf(r.keyCode) !== -1;
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
  function Id(t) {
    return typeof (t = t.detail) == "object" && "data" in t ? t.data : null;
  }
  var ki = !1, Dd = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Bp(t) {
    var r = t && t.nodeName && t.nodeName.toLowerCase();
    return r === "input" ? !!Dd[t.type] : r === "textarea";
  }
  function Si(t, r, o, u) {
    An(u), 0 < (r = Ae(r, "onChange")).length && (o = new Sl("onChange", "change", null, o, u), t.push({ event: o, listeners: r }));
  }
  var Ei = null, xo = null;
  function Od(t) {
    yc(t, 0);
  }
  function pc(t) {
    if (rn(va(t))) return t;
  }
  function Ld(t, r) {
    if (t === "change") return r;
  }
  var mc = !1;
  if (j) {
    var To;
    if (j) {
      var xi = "oninput" in document;
      if (!xi) {
        var _n = document.createElement("div");
        _n.setAttribute("oninput", "return;"), xi = typeof _n.oninput == "function";
      }
      To = xi;
    } else To = !1;
    mc = To && (!document.documentMode || 9 < document.documentMode);
  }
  function Ti() {
    Ei && (Ei.detachEvent("onpropertychange", Pl), xo = Ei = null);
  }
  function Pl(t) {
    if (t.propertyName === "value" && pc(xo)) {
      var r = [];
      Si(r, xo, t, tn(t)), fa(Od, r);
    }
  }
  function Au(t, r, o) {
    t === "focusin" ? (Ti(), xo = o, (Ei = r).attachEvent("onpropertychange", Pl)) : t === "focusout" && Ti();
  }
  function Uu(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown") return pc(xo);
  }
  function Md(t, r) {
    if (t === "click") return pc(r);
  }
  function Fu(t, r) {
    if (t === "input" || t === "change") return pc(r);
  }
  var Lr = typeof Object.is == "function" ? Object.is : function(t, r) {
    return t === r && (t !== 0 || 1 / t == 1 / r) || t != t && r != r;
  };
  function Ci(t, r) {
    if (Lr(t, r)) return !0;
    if (typeof t != "object" || t === null || typeof r != "object" || r === null) return !1;
    var o = Object.keys(t), u = Object.keys(r);
    if (o.length !== u.length) return !1;
    for (u = 0; u < o.length; u++) {
      var c = o[u];
      if (!S.call(r, c) || !Lr(t[c], r[c])) return !1;
    }
    return !0;
  }
  function ha(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function hc(t, r) {
    var o, u = ha(t);
    for (t = 0; u; ) {
      if (u.nodeType === 3) {
        if (o = t + u.textContent.length, t <= r && o >= r) return { node: u, offset: r - t };
        t = o;
      }
      e: {
        for (; u; ) {
          if (u.nextSibling) {
            u = u.nextSibling;
            break e;
          }
          u = u.parentNode;
        }
        u = void 0;
      }
      u = ha(u);
    }
  }
  function zd(t, r) {
    return !(!t || !r) && (t === r || (!t || t.nodeType !== 3) && (r && r.nodeType === 3 ? zd(t, r.parentNode) : "contains" in t ? t.contains(r) : !!t.compareDocumentPosition && !!(16 & t.compareDocumentPosition(r))));
  }
  function Ad() {
    for (var t = window, r = xn(); r instanceof t.HTMLIFrameElement; ) {
      try {
        var o = typeof r.contentWindow.location.href == "string";
      } catch {
        o = !1;
      }
      if (!o) break;
      r = xn((t = r.contentWindow).document);
    }
    return r;
  }
  function Co(t) {
    var r = t && t.nodeName && t.nodeName.toLowerCase();
    return r && (r === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || r === "textarea" || t.contentEditable === "true");
  }
  function _o(t) {
    var r = Ad(), o = t.focusedElem, u = t.selectionRange;
    if (r !== o && o && o.ownerDocument && zd(o.ownerDocument.documentElement, o)) {
      if (u !== null && Co(o)) {
        if (r = u.start, (t = u.end) === void 0 && (t = r), "selectionStart" in o) o.selectionStart = r, o.selectionEnd = Math.min(t, o.value.length);
        else if ((t = (r = o.ownerDocument || document) && r.defaultView || window).getSelection) {
          t = t.getSelection();
          var c = o.textContent.length, m = Math.min(u.start, c);
          u = u.end === void 0 ? m : Math.min(u.end, c), !t.extend && m > u && (c = u, u = m, m = c), c = hc(o, m);
          var k = hc(o, u);
          c && k && (t.rangeCount !== 1 || t.anchorNode !== c.node || t.anchorOffset !== c.offset || t.focusNode !== k.node || t.focusOffset !== k.offset) && ((r = r.createRange()).setStart(c.node, c.offset), t.removeAllRanges(), m > u ? (t.addRange(r), t.extend(k.node, k.offset)) : (r.setEnd(k.node, k.offset), t.addRange(r)));
        }
      }
      for (r = [], t = o; t = t.parentNode; ) t.nodeType === 1 && r.push({ element: t, left: t.scrollLeft, top: t.scrollTop });
      for (typeof o.focus == "function" && o.focus(), o = 0; o < r.length; o++) (t = r[o]).element.scrollLeft = t.left, t.element.scrollTop = t.top;
    }
  }
  var Wp = j && "documentMode" in document && 11 >= document.documentMode, Rl = null, Ud = null, _i = null, Nl = !1;
  function eo(t, r, o) {
    var u = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
    Nl || Rl == null || Rl !== xn(u) || ("selectionStart" in (u = Rl) && Co(u) ? u = { start: u.selectionStart, end: u.selectionEnd } : u = { anchorNode: (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection()).anchorNode, anchorOffset: u.anchorOffset, focusNode: u.focusNode, focusOffset: u.focusOffset }, _i && Ci(_i, u) || (_i = u, 0 < (u = Ae(Ud, "onSelect")).length && (r = new Sl("onSelect", "select", null, r, o), t.push({ event: r, listeners: u }), r.target = Rl)));
  }
  function vc(t, r) {
    var o = {};
    return o[t.toLowerCase()] = r.toLowerCase(), o["Webkit" + t] = "webkit" + r, o["Moz" + t] = "moz" + r, o;
  }
  var Jr = { animationend: vc("Animation", "AnimationEnd"), animationiteration: vc("Animation", "AnimationIteration"), animationstart: vc("Animation", "AnimationStart"), transitionend: vc("Transition", "TransitionEnd") }, gc = {}, Fd = {};
  function ju(t) {
    if (gc[t]) return gc[t];
    if (!Jr[t]) return t;
    var r, o = Jr[t];
    for (r in o) if (o.hasOwnProperty(r) && r in Fd) return gc[t] = o[r];
    return t;
  }
  j && (Fd = document.createElement("div").style, "AnimationEvent" in window || (delete Jr.animationend.animation, delete Jr.animationiteration.animation, delete Jr.animationstart.animation), "TransitionEvent" in window || delete Jr.transitionend.transition);
  var jd = ju("animationend"), Bd = ju("animationiteration"), Wd = ju("animationstart"), Vp = ju("transitionend"), Vd = /* @__PURE__ */ new Map(), Hd = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Po(t, r) {
    Vd.set(t, r), g(r, [t]);
  }
  for (var $d = 0; $d < Hd.length; $d++) {
    var qd = Hd[$d];
    Po(qd.toLowerCase(), "on" + (qd[0].toUpperCase() + qd.slice(1)));
  }
  Po(jd, "onAnimationEnd"), Po(Bd, "onAnimationIteration"), Po(Wd, "onAnimationStart"), Po("dblclick", "onDoubleClick"), Po("focusin", "onFocus"), Po("focusout", "onBlur"), Po(Vp, "onTransitionEnd"), U("onMouseEnter", ["mouseout", "mouseover"]), U("onMouseLeave", ["mouseout", "mouseover"]), U("onPointerEnter", ["pointerout", "pointerover"]), U("onPointerLeave", ["pointerout", "pointerover"]), g("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), g("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), g("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), g("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), g("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), g("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var st = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), ov = new Set("cancel close invalid load scroll toggle".split(" ").concat(st));
  function Bu(t, r, o) {
    var u = t.type || "unknown-event";
    t.currentTarget = o, function(c, m, k, I, A, q, G, oe, Z) {
      if (Cp.apply(this, arguments), Ka) {
        if (!Ka) throw Error(y(198));
        var ie = So;
        Ka = !1, So = null, En || (En = !0, Xa = ie);
      }
    }(u, r, void 0, t), t.currentTarget = null;
  }
  function yc(t, r) {
    r = !!(4 & r);
    for (var o = 0; o < t.length; o++) {
      var u = t[o], c = u.event;
      u = u.listeners;
      e: {
        var m = void 0;
        if (r) for (var k = u.length - 1; 0 <= k; k--) {
          var I = u[k], A = I.instance, q = I.currentTarget;
          if (I = I.listener, A !== m && c.isPropagationStopped()) break e;
          Bu(c, I, q), m = A;
        }
        else for (k = 0; k < u.length; k++) {
          if (A = (I = u[k]).instance, q = I.currentTarget, I = I.listener, A !== m && c.isPropagationStopped()) break e;
          Bu(c, I, q), m = A;
        }
      }
    }
    if (En) throw t = Xa, En = !1, Xa = null, t;
  }
  function In(t, r) {
    var o = r[Do];
    o === void 0 && (o = r[Do] = /* @__PURE__ */ new Set());
    var u = t + "__bubble";
    o.has(u) || (Hp(r, t, 2, !1), o.add(u));
  }
  function Qd(t, r, o) {
    var u = 0;
    r && (u |= 4), Hp(o, t, u, r);
  }
  var Il = "_reactListening" + Math.random().toString(36).slice(2);
  function Wu(t) {
    if (!t[Il]) {
      t[Il] = !0, _.forEach(function(o) {
        o !== "selectionchange" && (ov.has(o) || Qd(o, !1, t), Qd(o, !0, t));
      });
      var r = t.nodeType === 9 ? t : t.ownerDocument;
      r === null || r[Il] || (r[Il] = !0, Qd("selectionchange", !1, r));
    }
  }
  function Hp(t, r, o, u) {
    switch (Ed(r)) {
      case 1:
        var c = Gh;
        break;
      case 4:
        c = Jh;
        break;
      default:
        c = kd;
    }
    o = c.bind(null, r, o, t), c = void 0, !wt || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), u ? c !== void 0 ? t.addEventListener(r, o, { capture: !0, passive: c }) : t.addEventListener(r, o, !0) : c !== void 0 ? t.addEventListener(r, o, { passive: c }) : t.addEventListener(r, o, !1);
  }
  function Ro(t, r, o, u, c) {
    var m = u;
    if (!(1 & r || 2 & r || u === null)) e: for (; ; ) {
      if (u === null) return;
      var k = u.tag;
      if (k === 3 || k === 4) {
        var I = u.stateNode.containerInfo;
        if (I === c || I.nodeType === 8 && I.parentNode === c) break;
        if (k === 4) for (k = u.return; k !== null; ) {
          var A = k.tag;
          if ((A === 3 || A === 4) && ((A = k.stateNode.containerInfo) === c || A.nodeType === 8 && A.parentNode === c)) return;
          k = k.return;
        }
        for (; I !== null; ) {
          if ((k = Qt(I)) === null) return;
          if ((A = k.tag) === 5 || A === 6) {
            u = m = k;
            continue e;
          }
          I = I.parentNode;
        }
      }
      u = u.return;
    }
    fa(function() {
      var q = m, G = tn(o), oe = [];
      e: {
        var Z = Vd.get(t);
        if (Z !== void 0) {
          var ie = Sl, ye = t;
          switch (t) {
            case "keypress":
              if (lc(o) === 0) break e;
            case "keydown":
            case "keyup":
              ie = Rd;
              break;
            case "focusin":
              ye = "focus", ie = Cd;
              break;
            case "focusout":
              ye = "blur", ie = Cd;
              break;
            case "beforeblur":
            case "afterblur":
              ie = Cd;
              break;
            case "click":
              if (o.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              ie = Lp;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ie = Zh;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ie = Tl;
              break;
            case jd:
            case Bd:
            case Wd:
              ie = Mp;
              break;
            case Vp:
              ie = Ap;
              break;
            case "scroll":
              ie = xl;
              break;
            case "wheel":
              ie = Fp;
              break;
            case "copy":
            case "cut":
            case "paste":
              ie = ar;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ie = bi;
          }
          var ke = !!(4 & r), te = !ke && t === "scroll", H = ke ? Z !== null ? Z + "Capture" : null : Z;
          ke = [];
          for (var ee, de = q; de !== null; ) {
            var Ue = (ee = de).stateNode;
            if (ee.tag === 5 && Ue !== null && (ee = Ue, H !== null && (Ue = it(de, H)) != null && ke.push(ht(de, Ue, ee))), te) break;
            de = de.return;
          }
          0 < ke.length && (Z = new ie(Z, ye, null, o, G), oe.push({ event: Z, listeners: ke }));
        }
      }
      if (!(7 & r)) {
        if (ie = t === "mouseout" || t === "pointerout", (!(Z = t === "mouseover" || t === "pointerover") || o === Re || !(ye = o.relatedTarget || o.fromElement) || !Qt(ye) && !ye[Ke]) && (ie || Z) && (Z = G.window === G ? G : (Z = G.ownerDocument) ? Z.defaultView || Z.parentWindow : window, ie ? (ie = q, (ye = (ye = o.relatedTarget || o.toElement) ? Qt(ye) : null) !== null && (ye !== (te = kt(ye)) || ye.tag !== 5 && ye.tag !== 6) && (ye = null)) : (ie = null, ye = q), ie !== ye)) {
          if (ke = Lp, Ue = "onMouseLeave", H = "onMouseEnter", de = "mouse", t !== "pointerout" && t !== "pointerover" || (ke = bi, Ue = "onPointerLeave", H = "onPointerEnter", de = "pointer"), te = ie == null ? Z : va(ie), ee = ye == null ? Z : va(ye), (Z = new ke(Ue, de + "leave", ie, o, G)).target = te, Z.relatedTarget = ee, Ue = null, Qt(G) === q && ((ke = new ke(H, de + "enter", ye, o, G)).target = ee, ke.relatedTarget = te, Ue = ke), te = Ue, ie && ye) e: {
            for (H = ye, de = 0, ee = ke = ie; ee; ee = or(ee)) de++;
            for (ee = 0, Ue = H; Ue; Ue = or(Ue)) ee++;
            for (; 0 < de - ee; ) ke = or(ke), de--;
            for (; 0 < ee - de; ) H = or(H), ee--;
            for (; de--; ) {
              if (ke === H || H !== null && ke === H.alternate) break e;
              ke = or(ke), H = or(H);
            }
            ke = null;
          }
          else ke = null;
          ie !== null && Zr(oe, Z, ie, ke, !1), ye !== null && te !== null && Zr(oe, te, ye, ke, !0);
        }
        if ((ie = (Z = q ? va(q) : window).nodeName && Z.nodeName.toLowerCase()) === "select" || ie === "input" && Z.type === "file") var on = Ld;
        else if (Bp(Z)) if (mc) on = Fu;
        else {
          on = Uu;
          var Ne = Au;
        }
        else (ie = Z.nodeName) && ie.toLowerCase() === "input" && (Z.type === "checkbox" || Z.type === "radio") && (on = Md);
        switch (on && (on = on(t, q)) ? Si(oe, on, o, G) : (Ne && Ne(t, Z, q), t === "focusout" && (Ne = Z._wrapperState) && Ne.controlled && Z.type === "number" && rr(Z, "number", Z.value)), Ne = q ? va(q) : window, t) {
          case "focusin":
            (Bp(Ne) || Ne.contentEditable === "true") && (Rl = Ne, Ud = q, _i = null);
            break;
          case "focusout":
            _i = Ud = Rl = null;
            break;
          case "mousedown":
            Nl = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Nl = !1, eo(oe, o, G);
            break;
          case "selectionchange":
            if (Wp) break;
          case "keydown":
          case "keyup":
            eo(oe, o, G);
        }
        var Je;
        if (dc) e: {
          switch (t) {
            case "compositionstart":
              var en = "onCompositionStart";
              break e;
            case "compositionend":
              en = "onCompositionEnd";
              break e;
            case "compositionupdate":
              en = "onCompositionUpdate";
              break e;
          }
          en = void 0;
        }
        else ki ? _l(t, o) && (en = "onCompositionEnd") : t === "keydown" && o.keyCode === 229 && (en = "onCompositionStart");
        en && (Nd && o.locale !== "ko" && (ki || en !== "onCompositionStart" ? en === "onCompositionEnd" && ki && (Je = xd()) : (Mu = "value" in (Xr = G) ? Xr.value : Xr.textContent, ki = !0)), 0 < (Ne = Ae(q, en)).length && (en = new _d(en, t, null, o, G), oe.push({ event: en, listeners: Ne }), (Je || (Je = Id(o)) !== null) && (en.data = Je))), (Je = av ? function(Xe, wn) {
          switch (Xe) {
            case "compositionend":
              return Id(wn);
            case "keypress":
              return wn.which !== 32 ? null : (fc = !0, Cl);
            case "textInput":
              return (Xe = wn.data) === Cl && fc ? null : Xe;
            default:
              return null;
          }
        }(t, o) : function(Xe, wn) {
          if (ki) return Xe === "compositionend" || !dc && _l(Xe, wn) ? (Xe = xd(), zu = Mu = Xr = null, ki = !1, Xe) : null;
          switch (Xe) {
            case "paste":
            default:
              return null;
            case "keypress":
              if (!(wn.ctrlKey || wn.altKey || wn.metaKey) || wn.ctrlKey && wn.altKey) {
                if (wn.char && 1 < wn.char.length) return wn.char;
                if (wn.which) return String.fromCharCode(wn.which);
              }
              return null;
            case "compositionend":
              return Nd && wn.locale !== "ko" ? null : wn.data;
          }
        }(t, o)) && 0 < (q = Ae(q, "onBeforeInput")).length && (G = new _d("onBeforeInput", "beforeinput", null, o, G), oe.push({ event: G, listeners: q }), G.data = Je);
      }
      yc(oe, r);
    });
  }
  function ht(t, r, o) {
    return { instance: t, listener: r, currentTarget: o };
  }
  function Ae(t, r) {
    for (var o = r + "Capture", u = []; t !== null; ) {
      var c = t, m = c.stateNode;
      c.tag === 5 && m !== null && (c = m, (m = it(t, o)) != null && u.unshift(ht(t, m, c)), (m = it(t, r)) != null && u.push(ht(t, m, c))), t = t.return;
    }
    return u;
  }
  function or(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5);
    return t || null;
  }
  function Zr(t, r, o, u, c) {
    for (var m = r._reactName, k = []; o !== null && o !== u; ) {
      var I = o, A = I.alternate, q = I.stateNode;
      if (A !== null && A === u) break;
      I.tag === 5 && q !== null && (I = q, c ? (A = it(o, m)) != null && k.unshift(ht(o, A, I)) : c || (A = it(o, m)) != null && k.push(ht(o, A, I))), o = o.return;
    }
    k.length !== 0 && t.push({ event: r, listeners: k });
  }
  var _t = /\r\n?/g, iv = /\u0000|\uFFFD/g;
  function $p(t) {
    return (typeof t == "string" ? t : "" + t).replace(_t, `
`).replace(iv, "");
  }
  function Vu(t, r, o) {
    if (r = $p(r), $p(t) !== r && o) throw Error(y(425));
  }
  function No() {
  }
  var Io = null, Yd = null;
  function bc(t, r) {
    return t === "textarea" || t === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var wc = typeof setTimeout == "function" ? setTimeout : void 0, lv = typeof clearTimeout == "function" ? clearTimeout : void 0, qp = typeof Promise == "function" ? Promise : void 0, Qp = typeof queueMicrotask == "function" ? queueMicrotask : qp !== void 0 ? function(t) {
    return qp.resolve(null).then(t).catch(Yp);
  } : wc;
  function Yp(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function Hu(t, r) {
    var o = r, u = 0;
    do {
      var c = o.nextSibling;
      if (t.removeChild(o), c && c.nodeType === 8) if ((o = c.data) === "/$") {
        if (u === 0) return t.removeChild(c), void Za(r);
        u--;
      } else o !== "$" && o !== "$?" && o !== "$!" || u++;
      o = c;
    } while (o);
    Za(r);
  }
  function zt(t) {
    for (; t != null; t = t.nextSibling) {
      var r = t.nodeType;
      if (r === 1 || r === 3) break;
      if (r === 8) {
        if ((r = t.data) === "$" || r === "$!" || r === "$?") break;
        if (r === "/$") return null;
      }
    }
    return t;
  }
  function Kd(t) {
    t = t.previousSibling;
    for (var r = 0; t; ) {
      if (t.nodeType === 8) {
        var o = t.data;
        if (o === "$" || o === "$!" || o === "$?") {
          if (r === 0) return t;
          r--;
        } else o === "/$" && r++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  var Dl = Math.random().toString(36).slice(2), Ia = "__reactFiber$" + Dl, Pi = "__reactProps$" + Dl, Ke = "__reactContainer$" + Dl, Do = "__reactEvents$" + Dl, no = "__reactListeners$" + Dl, Ri = "__reactHandles$" + Dl;
  function Qt(t) {
    var r = t[Ia];
    if (r) return r;
    for (var o = t.parentNode; o; ) {
      if (r = o[Ke] || o[Ia]) {
        if (o = r.alternate, r.child !== null || o !== null && o.child !== null) for (t = Kd(t); t !== null; ) {
          if (o = t[Ia]) return o;
          t = Kd(t);
        }
        return r;
      }
      o = (t = o).parentNode;
    }
    return null;
  }
  function to(t) {
    return !(t = t[Ia] || t[Ke]) || t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3 ? null : t;
  }
  function va(t) {
    if (t.tag === 5 || t.tag === 6) return t.stateNode;
    throw Error(y(33));
  }
  function Ol(t) {
    return t[Pi] || null;
  }
  var $u = [], Oo = -1;
  function Da(t) {
    return { current: t };
  }
  function $n(t) {
    0 > Oo || (t.current = $u[Oo], $u[Oo] = null, Oo--);
  }
  function jn(t, r) {
    Oo++, $u[Oo] = t.current, t.current = r;
  }
  var Oa = {}, Pt = Da(Oa), Yt = Da(!1), ro = Oa;
  function Lo(t, r) {
    var o = t.type.contextTypes;
    if (!o) return Oa;
    var u = t.stateNode;
    if (u && u.__reactInternalMemoizedUnmaskedChildContext === r) return u.__reactInternalMemoizedMaskedChildContext;
    var c, m = {};
    for (c in o) m[c] = r[c];
    return u && ((t = t.stateNode).__reactInternalMemoizedUnmaskedChildContext = r, t.__reactInternalMemoizedMaskedChildContext = m), m;
  }
  function ir(t) {
    return (t = t.childContextTypes) != null;
  }
  function Ll() {
    $n(Yt), $n(Pt);
  }
  function Ni(t, r, o) {
    if (Pt.current !== Oa) throw Error(y(168));
    jn(Pt, r), jn(Yt, o);
  }
  function kc(t, r, o) {
    var u = t.stateNode;
    if (r = r.childContextTypes, typeof u.getChildContext != "function") return o;
    for (var c in u = u.getChildContext()) if (!(c in r)) throw Error(y(108, Oe(t) || "Unknown", c));
    return ce({}, o, u);
  }
  function Ml(t) {
    return t = (t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext || Oa, ro = Pt.current, jn(Pt, t), jn(Yt, Yt.current), !0;
  }
  function Sc(t, r, o) {
    var u = t.stateNode;
    if (!u) throw Error(y(169));
    o ? (t = kc(t, r, ro), u.__reactInternalMemoizedMergedChildContext = t, $n(Yt), $n(Pt), jn(Pt, t)) : $n(Yt), jn(Yt, o);
  }
  var ga = null, qu = !1, Ii = !1;
  function Xd(t) {
    ga === null ? ga = [t] : ga.push(t);
  }
  function ea() {
    if (!Ii && ga !== null) {
      Ii = !0;
      var t = 0, r = On;
      try {
        var o = ga;
        for (On = 1; t < o.length; t++) {
          var u = o[t];
          do
            u = u(!0);
          while (u !== null);
        }
        ga = null, qu = !1;
      } catch (c) {
        throw ga !== null && (ga = ga.slice(t + 1)), ut(Gs, ea), c;
      } finally {
        On = r, Ii = !1;
      }
    }
    return null;
  }
  var na = [], At = 0, Ec = null, Bn = 0, br = [], wr = 0, ya = null, Mr = 1, ao = "";
  function oo(t, r) {
    na[At++] = Bn, na[At++] = Ec, Ec = t, Bn = r;
  }
  function xc(t, r, o) {
    br[wr++] = Mr, br[wr++] = ao, br[wr++] = ya, ya = t;
    var u = Mr;
    t = ao;
    var c = 32 - Kr(u) - 1;
    u &= ~(1 << c), o += 1;
    var m = 32 - Kr(r) + c;
    if (30 < m) {
      var k = c - c % 5;
      m = (u & (1 << k) - 1).toString(32), u >>= k, c -= k, Mr = 1 << 32 - Kr(r) + c | o << c | u, ao = m + t;
    } else Mr = 1 << m | o << c | u, ao = t;
  }
  function Tc(t) {
    t.return !== null && (oo(t, 1), xc(t, 1, 0));
  }
  function zl(t) {
    for (; t === Ec; ) Ec = na[--At], na[At] = null, Bn = na[--At], na[At] = null;
    for (; t === ya; ) ya = br[--wr], br[wr] = null, ao = br[--wr], br[wr] = null, Mr = br[--wr], br[wr] = null;
  }
  var kr = null, Sr = null, Ln = !1, lr = null;
  function Mo(t, r) {
    var o = Rr(5, null, null, 0);
    o.elementType = "DELETED", o.stateNode = r, o.return = t, (r = t.deletions) === null ? (t.deletions = [o], t.flags |= 16) : r.push(o);
  }
  function Cc(t, r) {
    switch (t.tag) {
      case 5:
        var o = t.type;
        return (r = r.nodeType !== 1 || o.toLowerCase() !== r.nodeName.toLowerCase() ? null : r) !== null && (t.stateNode = r, kr = t, Sr = zt(r.firstChild), !0);
      case 6:
        return (r = t.pendingProps === "" || r.nodeType !== 3 ? null : r) !== null && (t.stateNode = r, kr = t, Sr = null, !0);
      case 13:
        return (r = r.nodeType !== 8 ? null : r) !== null && (o = ya !== null ? { id: Mr, overflow: ao } : null, t.memoizedState = { dehydrated: r, treeContext: o, retryLane: 1073741824 }, (o = Rr(18, null, null, 0)).stateNode = r, o.return = t, t.child = o, kr = t, Sr = null, !0);
      default:
        return !1;
    }
  }
  function ur(t) {
    return !(!(1 & t.mode) || 128 & t.flags);
  }
  function zo(t) {
    if (Ln) {
      var r = Sr;
      if (r) {
        var o = r;
        if (!Cc(t, r)) {
          if (ur(t)) throw Error(y(418));
          r = zt(o.nextSibling);
          var u = kr;
          r && Cc(t, r) ? Mo(u, o) : (t.flags = -4097 & t.flags | 2, Ln = !1, kr = t);
        }
      } else {
        if (ur(t)) throw Error(y(418));
        t.flags = -4097 & t.flags | 2, Ln = !1, kr = t;
      }
    }
  }
  function fn(t) {
    for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; ) t = t.return;
    kr = t;
  }
  function Di(t) {
    if (t !== kr) return !1;
    if (!Ln) return fn(t), Ln = !0, !1;
    var r;
    if ((r = t.tag !== 3) && !(r = t.tag !== 5) && (r = (r = t.type) !== "head" && r !== "body" && !bc(t.type, t.memoizedProps)), r && (r = Sr)) {
      if (ur(t)) throw Gd(), Error(y(418));
      for (; r; ) Mo(t, r), r = zt(r.nextSibling);
    }
    if (fn(t), t.tag === 13) {
      if (!(t = (t = t.memoizedState) !== null ? t.dehydrated : null)) throw Error(y(317));
      e: {
        for (t = t.nextSibling, r = 0; t; ) {
          if (t.nodeType === 8) {
            var o = t.data;
            if (o === "/$") {
              if (r === 0) {
                Sr = zt(t.nextSibling);
                break e;
              }
              r--;
            } else o !== "$" && o !== "$!" && o !== "$?" || r++;
          }
          t = t.nextSibling;
        }
        Sr = null;
      }
    } else Sr = kr ? zt(t.stateNode.nextSibling) : null;
    return !0;
  }
  function Gd() {
    for (var t = Sr; t; ) t = zt(t.nextSibling);
  }
  function Ao() {
    Sr = kr = null, Ln = !1;
  }
  function Oi(t) {
    lr === null ? lr = [t] : lr.push(t);
  }
  var Kp = ne.ReactCurrentBatchConfig;
  function Li(t, r, o) {
    if ((t = o.ref) !== null && typeof t != "function" && typeof t != "object") {
      if (o._owner) {
        if (o = o._owner) {
          if (o.tag !== 1) throw Error(y(309));
          var u = o.stateNode;
        }
        if (!u) throw Error(y(147, t));
        var c = u, m = "" + t;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === m ? r.ref : (r = function(k) {
          var I = c.refs;
          k === null ? delete I[m] : I[m] = k;
        }, r._stringRef = m, r);
      }
      if (typeof t != "string") throw Error(y(284));
      if (!o._owner) throw Error(y(290, t));
    }
    return t;
  }
  function Qu(t, r) {
    throw t = Object.prototype.toString.call(r), Error(y(31, t === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : t));
  }
  function Jd(t) {
    return (0, t._init)(t._payload);
  }
  function Zd(t) {
    function r(te, H) {
      if (t) {
        var ee = te.deletions;
        ee === null ? (te.deletions = [H], te.flags |= 16) : ee.push(H);
      }
    }
    function o(te, H) {
      if (!t) return null;
      for (; H !== null; ) r(te, H), H = H.sibling;
      return null;
    }
    function u(te, H) {
      for (te = /* @__PURE__ */ new Map(); H !== null; ) H.key !== null ? te.set(H.key, H) : te.set(H.index, H), H = H.sibling;
      return te;
    }
    function c(te, H) {
      return (te = Zo(te, H)).index = 0, te.sibling = null, te;
    }
    function m(te, H, ee) {
      return te.index = ee, t ? (ee = te.alternate) !== null ? (ee = ee.index) < H ? (te.flags |= 2, H) : ee : (te.flags |= 2, H) : (te.flags |= 1048576, H);
    }
    function k(te) {
      return t && te.alternate === null && (te.flags |= 2), te;
    }
    function I(te, H, ee, de) {
      return H === null || H.tag !== 6 ? ((H = qi(ee, te.mode, de)).return = te, H) : ((H = c(H, ee)).return = te, H);
    }
    function A(te, H, ee, de) {
      var Ue = ee.type;
      return Ue === We ? G(te, H, ee.props.children, de, ee.key) : H !== null && (H.elementType === Ue || typeof Ue == "object" && Ue !== null && Ue.$$typeof === ve && Jd(Ue) === H.type) ? ((de = c(H, ee.props)).ref = Li(te, H, ee), de.return = te, de) : ((de = ei(ee.type, ee.key, ee.props, null, te.mode, de)).ref = Li(te, H, ee), de.return = te, de);
    }
    function q(te, H, ee, de) {
      return H === null || H.tag !== 4 || H.stateNode.containerInfo !== ee.containerInfo || H.stateNode.implementation !== ee.implementation ? ((H = co(ee, te.mode, de)).return = te, H) : ((H = c(H, ee.children || [])).return = te, H);
    }
    function G(te, H, ee, de, Ue) {
      return H === null || H.tag !== 7 ? ((H = Ba(ee, te.mode, de, Ue)).return = te, H) : ((H = c(H, ee)).return = te, H);
    }
    function oe(te, H, ee) {
      if (typeof H == "string" && H !== "" || typeof H == "number") return (H = qi("" + H, te.mode, ee)).return = te, H;
      if (typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case ge:
            return (ee = ei(H.type, H.key, H.props, null, te.mode, ee)).ref = Li(te, null, H), ee.return = te, ee;
          case Ie:
            return (H = co(H, te.mode, ee)).return = te, H;
          case ve:
            return oe(te, (0, H._init)(H._payload), ee);
        }
        if (zn(H) || he(H)) return (H = Ba(H, te.mode, ee, null)).return = te, H;
        Qu(te, H);
      }
      return null;
    }
    function Z(te, H, ee, de) {
      var Ue = H !== null ? H.key : null;
      if (typeof ee == "string" && ee !== "" || typeof ee == "number") return Ue !== null ? null : I(te, H, "" + ee, de);
      if (typeof ee == "object" && ee !== null) {
        switch (ee.$$typeof) {
          case ge:
            return ee.key === Ue ? A(te, H, ee, de) : null;
          case Ie:
            return ee.key === Ue ? q(te, H, ee, de) : null;
          case ve:
            return Z(te, H, (Ue = ee._init)(ee._payload), de);
        }
        if (zn(ee) || he(ee)) return Ue !== null ? null : G(te, H, ee, de, null);
        Qu(te, ee);
      }
      return null;
    }
    function ie(te, H, ee, de, Ue) {
      if (typeof de == "string" && de !== "" || typeof de == "number") return I(H, te = te.get(ee) || null, "" + de, Ue);
      if (typeof de == "object" && de !== null) {
        switch (de.$$typeof) {
          case ge:
            return A(H, te = te.get(de.key === null ? ee : de.key) || null, de, Ue);
          case Ie:
            return q(H, te = te.get(de.key === null ? ee : de.key) || null, de, Ue);
          case ve:
            return ie(te, H, ee, (0, de._init)(de._payload), Ue);
        }
        if (zn(de) || he(de)) return G(H, te = te.get(ee) || null, de, Ue, null);
        Qu(H, de);
      }
      return null;
    }
    function ye(te, H, ee, de) {
      for (var Ue = null, on = null, Ne = H, Je = H = 0, en = null; Ne !== null && Je < ee.length; Je++) {
        Ne.index > Je ? (en = Ne, Ne = null) : en = Ne.sibling;
        var Xe = Z(te, Ne, ee[Je], de);
        if (Xe === null) {
          Ne === null && (Ne = en);
          break;
        }
        t && Ne && Xe.alternate === null && r(te, Ne), H = m(Xe, H, Je), on === null ? Ue = Xe : on.sibling = Xe, on = Xe, Ne = en;
      }
      if (Je === ee.length) return o(te, Ne), Ln && oo(te, Je), Ue;
      if (Ne === null) {
        for (; Je < ee.length; Je++) (Ne = oe(te, ee[Je], de)) !== null && (H = m(Ne, H, Je), on === null ? Ue = Ne : on.sibling = Ne, on = Ne);
        return Ln && oo(te, Je), Ue;
      }
      for (Ne = u(te, Ne); Je < ee.length; Je++) (en = ie(Ne, te, Je, ee[Je], de)) !== null && (t && en.alternate !== null && Ne.delete(en.key === null ? Je : en.key), H = m(en, H, Je), on === null ? Ue = en : on.sibling = en, on = en);
      return t && Ne.forEach(function(wn) {
        return r(te, wn);
      }), Ln && oo(te, Je), Ue;
    }
    function ke(te, H, ee, de) {
      var Ue = he(ee);
      if (typeof Ue != "function") throw Error(y(150));
      if ((ee = Ue.call(ee)) == null) throw Error(y(151));
      for (var on = Ue = null, Ne = H, Je = H = 0, en = null, Xe = ee.next(); Ne !== null && !Xe.done; Je++, Xe = ee.next()) {
        Ne.index > Je ? (en = Ne, Ne = null) : en = Ne.sibling;
        var wn = Z(te, Ne, Xe.value, de);
        if (wn === null) {
          Ne === null && (Ne = en);
          break;
        }
        t && Ne && wn.alternate === null && r(te, Ne), H = m(wn, H, Je), on === null ? Ue = wn : on.sibling = wn, on = wn, Ne = en;
      }
      if (Xe.done) return o(te, Ne), Ln && oo(te, Je), Ue;
      if (Ne === null) {
        for (; !Xe.done; Je++, Xe = ee.next()) (Xe = oe(te, Xe.value, de)) !== null && (H = m(Xe, H, Je), on === null ? Ue = Xe : on.sibling = Xe, on = Xe);
        return Ln && oo(te, Je), Ue;
      }
      for (Ne = u(te, Ne); !Xe.done; Je++, Xe = ee.next()) (Xe = ie(Ne, te, Je, Xe.value, de)) !== null && (t && Xe.alternate !== null && Ne.delete(Xe.key === null ? Je : Xe.key), H = m(Xe, H, Je), on === null ? Ue = Xe : on.sibling = Xe, on = Xe);
      return t && Ne.forEach(function(mu) {
        return r(te, mu);
      }), Ln && oo(te, Je), Ue;
    }
    return function te(H, ee, de, Ue) {
      if (typeof de == "object" && de !== null && de.type === We && de.key === null && (de = de.props.children), typeof de == "object" && de !== null) {
        switch (de.$$typeof) {
          case ge:
            e: {
              for (var on = de.key, Ne = ee; Ne !== null; ) {
                if (Ne.key === on) {
                  if ((on = de.type) === We) {
                    if (Ne.tag === 7) {
                      o(H, Ne.sibling), (ee = c(Ne, de.props.children)).return = H, H = ee;
                      break e;
                    }
                  } else if (Ne.elementType === on || typeof on == "object" && on !== null && on.$$typeof === ve && Jd(on) === Ne.type) {
                    o(H, Ne.sibling), (ee = c(Ne, de.props)).ref = Li(H, Ne, de), ee.return = H, H = ee;
                    break e;
                  }
                  o(H, Ne);
                  break;
                }
                r(H, Ne), Ne = Ne.sibling;
              }
              de.type === We ? ((ee = Ba(de.props.children, H.mode, Ue, de.key)).return = H, H = ee) : ((Ue = ei(de.type, de.key, de.props, null, H.mode, Ue)).ref = Li(H, ee, de), Ue.return = H, H = Ue);
            }
            return k(H);
          case Ie:
            e: {
              for (Ne = de.key; ee !== null; ) {
                if (ee.key === Ne) {
                  if (ee.tag === 4 && ee.stateNode.containerInfo === de.containerInfo && ee.stateNode.implementation === de.implementation) {
                    o(H, ee.sibling), (ee = c(ee, de.children || [])).return = H, H = ee;
                    break e;
                  }
                  o(H, ee);
                  break;
                }
                r(H, ee), ee = ee.sibling;
              }
              (ee = co(de, H.mode, Ue)).return = H, H = ee;
            }
            return k(H);
          case ve:
            return te(H, ee, (Ne = de._init)(de._payload), Ue);
        }
        if (zn(de)) return ye(H, ee, de, Ue);
        if (he(de)) return ke(H, ee, de, Ue);
        Qu(H, de);
      }
      return typeof de == "string" && de !== "" || typeof de == "number" ? (de = "" + de, ee !== null && ee.tag === 6 ? (o(H, ee.sibling), (ee = c(ee, de)).return = H, H = ee) : (o(H, ee), (ee = qi(de, H.mode, Ue)).return = H, H = ee), k(H)) : o(H, ee);
    };
  }
  var Uo = Zd(!0), ef = Zd(!1), Yu = Da(null), Ku = null, Ut = null, ba = null;
  function La() {
    ba = Ut = Ku = null;
  }
  function Al(t) {
    var r = Yu.current;
    $n(Yu), t._currentValue = r;
  }
  function Mi(t, r, o) {
    for (; t !== null; ) {
      var u = t.alternate;
      if ((t.childLanes & r) !== r ? (t.childLanes |= r, u !== null && (u.childLanes |= r)) : u !== null && (u.childLanes & r) !== r && (u.childLanes |= r), t === o) break;
      t = t.return;
    }
  }
  function sr(t, r) {
    Ku = t, ba = Ut = null, (t = t.dependencies) !== null && t.firstContext !== null && (t.lanes & r && (xr = !0), t.firstContext = null);
  }
  function Vn(t) {
    var r = t._currentValue;
    if (ba !== t) if (t = { context: t, memoizedValue: r, next: null }, Ut === null) {
      if (Ku === null) throw Error(y(308));
      Ut = t, Ku.dependencies = { lanes: 0, firstContext: t };
    } else Ut = Ut.next = t;
    return r;
  }
  var io = null;
  function _c(t) {
    io === null ? io = [t] : io.push(t);
  }
  function Xu(t, r, o, u) {
    var c = r.interleaved;
    return c === null ? (o.next = o, _c(r)) : (o.next = c.next, c.next = o), r.interleaved = o, lo(t, u);
  }
  function lo(t, r) {
    t.lanes |= r;
    var o = t.alternate;
    for (o !== null && (o.lanes |= r), o = t, t = t.return; t !== null; ) t.childLanes |= r, (o = t.alternate) !== null && (o.childLanes |= r), o = t, t = t.return;
    return o.tag === 3 ? o.stateNode : null;
  }
  var Ma = !1;
  function Ul(t) {
    t.updateQueue = { baseState: t.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function uo(t, r) {
    t = t.updateQueue, r.updateQueue === t && (r.updateQueue = { baseState: t.baseState, firstBaseUpdate: t.firstBaseUpdate, lastBaseUpdate: t.lastBaseUpdate, shared: t.shared, effects: t.effects });
  }
  function Kt(t, r) {
    return { eventTime: t, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function cr(t, r, o) {
    var u = t.updateQueue;
    if (u === null) return null;
    if (u = u.shared, 2 & Pn) {
      var c = u.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), u.pending = r, lo(t, o);
    }
    return (c = u.interleaved) === null ? (r.next = r, _c(u)) : (r.next = c.next, c.next = r), u.interleaved = r, lo(t, o);
  }
  function Fo(t, r, o) {
    if ((r = r.updateQueue) !== null && (r = r.shared, 4194240 & o)) {
      var u = r.lanes;
      o |= u &= t.pendingLanes, r.lanes = o, nc(t, o);
    }
  }
  function Fl(t, r) {
    var o = t.updateQueue, u = t.alternate;
    if (u !== null && o === (u = u.updateQueue)) {
      var c = null, m = null;
      if ((o = o.firstBaseUpdate) !== null) {
        do {
          var k = { eventTime: o.eventTime, lane: o.lane, tag: o.tag, payload: o.payload, callback: o.callback, next: null };
          m === null ? c = m = k : m = m.next = k, o = o.next;
        } while (o !== null);
        m === null ? c = m = r : m = m.next = r;
      } else c = m = r;
      return o = { baseState: u.baseState, firstBaseUpdate: c, lastBaseUpdate: m, shared: u.shared, effects: u.effects }, void (t.updateQueue = o);
    }
    (t = o.lastBaseUpdate) === null ? o.firstBaseUpdate = r : t.next = r, o.lastBaseUpdate = r;
  }
  function wa(t, r, o, u) {
    var c = t.updateQueue;
    Ma = !1;
    var m = c.firstBaseUpdate, k = c.lastBaseUpdate, I = c.shared.pending;
    if (I !== null) {
      c.shared.pending = null;
      var A = I, q = A.next;
      A.next = null, k === null ? m = q : k.next = q, k = A;
      var G = t.alternate;
      G !== null && (I = (G = G.updateQueue).lastBaseUpdate) !== k && (I === null ? G.firstBaseUpdate = q : I.next = q, G.lastBaseUpdate = A);
    }
    if (m !== null) {
      var oe = c.baseState;
      for (k = 0, G = q = A = null, I = m; ; ) {
        var Z = I.lane, ie = I.eventTime;
        if ((u & Z) === Z) {
          G !== null && (G = G.next = { eventTime: ie, lane: 0, tag: I.tag, payload: I.payload, callback: I.callback, next: null });
          e: {
            var ye = t, ke = I;
            switch (Z = r, ie = o, ke.tag) {
              case 1:
                if (typeof (ye = ke.payload) == "function") {
                  oe = ye.call(ie, oe, Z);
                  break e;
                }
                oe = ye;
                break e;
              case 3:
                ye.flags = -65537 & ye.flags | 128;
              case 0:
                if ((Z = typeof (ye = ke.payload) == "function" ? ye.call(ie, oe, Z) : ye) == null) break e;
                oe = ce({}, oe, Z);
                break e;
              case 2:
                Ma = !0;
            }
          }
          I.callback !== null && I.lane !== 0 && (t.flags |= 64, (Z = c.effects) === null ? c.effects = [I] : Z.push(I));
        } else ie = { eventTime: ie, lane: Z, tag: I.tag, payload: I.payload, callback: I.callback, next: null }, G === null ? (q = G = ie, A = oe) : G = G.next = ie, k |= Z;
        if ((I = I.next) === null) {
          if ((I = c.shared.pending) === null) break;
          I = (Z = I).next, Z.next = null, c.lastBaseUpdate = Z, c.shared.pending = null;
        }
      }
      if (G === null && (A = oe), c.baseState = A, c.firstBaseUpdate = q, c.lastBaseUpdate = G, (r = c.shared.interleaved) !== null) {
        c = r;
        do
          k |= c.lane, c = c.next;
        while (c !== r);
      } else m === null && (c.shared.lanes = 0);
      Qo |= k, t.lanes = k, t.memoizedState = oe;
    }
  }
  function Xp(t, r, o) {
    if (t = r.effects, r.effects = null, t !== null) for (r = 0; r < t.length; r++) {
      var u = t[r], c = u.callback;
      if (c !== null) {
        if (u.callback = null, u = o, typeof c != "function") throw Error(y(191, c));
        c.call(u);
      }
    }
  }
  var jl = {}, Er = Da(jl), Bl = Da(jl), jo = Da(jl);
  function Bo(t) {
    if (t === jl) throw Error(y(174));
    return t;
  }
  function nf(t, r) {
    switch (jn(jo, r), jn(Bl, t), jn(Er, jl), t = r.nodeType) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : cn(null, "");
        break;
      default:
        r = cn(r = (t = t === 8 ? r.parentNode : r).namespaceURI || null, t = t.tagName);
    }
    $n(Er), jn(Er, r);
  }
  function za() {
    $n(Er), $n(Bl), $n(jo);
  }
  function Wl(t) {
    Bo(jo.current);
    var r = Bo(Er.current), o = cn(r, t.type);
    r !== o && (jn(Bl, t), jn(Er, o));
  }
  function Wo(t) {
    Bl.current === t && ($n(Er), $n(Bl));
  }
  var nt = Da(0);
  function Gu(t) {
    for (var r = t; r !== null; ) {
      if (r.tag === 13) {
        var o = r.memoizedState;
        if (o !== null && ((o = o.dehydrated) === null || o.data === "$?" || o.data === "$!")) return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (128 & r.flags) return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === t) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === t) return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var tf = [];
  function rf() {
    for (var t = 0; t < tf.length; t++) tf[t]._workInProgressVersionPrimary = null;
    tf.length = 0;
  }
  var Vl = ne.ReactCurrentDispatcher, Hl = ne.ReactCurrentBatchConfig, so = 0, tt = null, ct = null, vt = null, zi = !1, $l = !1, ql = 0, Pc = 0;
  function St() {
    throw Error(y(321));
  }
  function Rc(t, r) {
    if (r === null) return !1;
    for (var o = 0; o < r.length && o < t.length; o++) if (!Lr(t[o], r[o])) return !1;
    return !0;
  }
  function dr(t, r, o, u, c, m) {
    if (so = m, tt = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Vl.current = t === null || t.memoizedState === null ? cm : Ql, t = o(u, c), $l) {
      m = 0;
      do {
        if ($l = !1, ql = 0, 25 <= m) throw Error(y(301));
        m += 1, vt = ct = null, r.updateQueue = null, Vl.current = uv, t = o(u, c);
      } while ($l);
    }
    if (Vl.current = as, r = ct !== null && ct.next !== null, so = 0, vt = ct = tt = null, zi = !1, r) throw Error(y(300));
    return t;
  }
  function Ju() {
    var t = ql !== 0;
    return ql = 0, t;
  }
  function ta() {
    var t = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return vt === null ? tt.memoizedState = vt = t : vt = vt.next = t, vt;
  }
  function Xt() {
    if (ct === null) {
      var t = tt.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = ct.next;
    var r = vt === null ? tt.memoizedState : vt.next;
    if (r !== null) vt = r, ct = t;
    else {
      if (t === null) throw Error(y(310));
      t = { memoizedState: (ct = t).memoizedState, baseState: ct.baseState, baseQueue: ct.baseQueue, queue: ct.queue, next: null }, vt === null ? tt.memoizedState = vt = t : vt = vt.next = t;
    }
    return vt;
  }
  function Aa(t, r) {
    return typeof r == "function" ? r(t) : r;
  }
  function Zu(t) {
    var r = Xt(), o = r.queue;
    if (o === null) throw Error(y(311));
    o.lastRenderedReducer = t;
    var u = ct, c = u.baseQueue, m = o.pending;
    if (m !== null) {
      if (c !== null) {
        var k = c.next;
        c.next = m.next, m.next = k;
      }
      u.baseQueue = c = m, o.pending = null;
    }
    if (c !== null) {
      m = c.next, u = u.baseState;
      var I = k = null, A = null, q = m;
      do {
        var G = q.lane;
        if ((so & G) === G) A !== null && (A = A.next = { lane: 0, action: q.action, hasEagerState: q.hasEagerState, eagerState: q.eagerState, next: null }), u = q.hasEagerState ? q.eagerState : t(u, q.action);
        else {
          var oe = { lane: G, action: q.action, hasEagerState: q.hasEagerState, eagerState: q.eagerState, next: null };
          A === null ? (I = A = oe, k = u) : A = A.next = oe, tt.lanes |= G, Qo |= G;
        }
        q = q.next;
      } while (q !== null && q !== m);
      A === null ? k = u : A.next = I, Lr(u, r.memoizedState) || (xr = !0), r.memoizedState = u, r.baseState = k, r.baseQueue = A, o.lastRenderedState = u;
    }
    if ((t = o.interleaved) !== null) {
      c = t;
      do
        m = c.lane, tt.lanes |= m, Qo |= m, c = c.next;
      while (c !== t);
    } else c === null && (o.lanes = 0);
    return [r.memoizedState, o.dispatch];
  }
  function Ai(t) {
    var r = Xt(), o = r.queue;
    if (o === null) throw Error(y(311));
    o.lastRenderedReducer = t;
    var u = o.dispatch, c = o.pending, m = r.memoizedState;
    if (c !== null) {
      o.pending = null;
      var k = c = c.next;
      do
        m = t(m, k.action), k = k.next;
      while (k !== c);
      Lr(m, r.memoizedState) || (xr = !0), r.memoizedState = m, r.baseQueue === null && (r.baseState = m), o.lastRenderedState = m;
    }
    return [m, u];
  }
  function Gp() {
  }
  function es(t, r) {
    var o = tt, u = Xt(), c = r(), m = !Lr(u.memoizedState, c);
    if (m && (u.memoizedState = c, xr = !0), u = u.queue, ts(Nc.bind(null, o, u, t), [t]), u.getSnapshot !== r || m || vt !== null && 1 & vt.memoizedState.tag) {
      if (o.flags |= 2048, ns(9, Jp.bind(null, o, u, c, r), void 0, null), rt === null) throw Error(y(349));
      30 & so || af(o, r, c);
    }
    return c;
  }
  function af(t, r, o) {
    t.flags |= 16384, t = { getSnapshot: r, value: o }, (r = tt.updateQueue) === null ? (r = { lastEffect: null, stores: null }, tt.updateQueue = r, r.stores = [t]) : (o = r.stores) === null ? r.stores = [t] : o.push(t);
  }
  function Jp(t, r, o, u) {
    r.value = o, r.getSnapshot = u, Zp(r) && em(t);
  }
  function Nc(t, r, o) {
    return o(function() {
      Zp(r) && em(t);
    });
  }
  function Zp(t) {
    var r = t.getSnapshot;
    t = t.value;
    try {
      var o = r();
      return !Lr(t, o);
    } catch {
      return !0;
    }
  }
  function em(t) {
    var r = lo(t, 1);
    r !== null && Pr(r, t, 1, -1);
  }
  function of(t) {
    var r = ta();
    return typeof t == "function" && (t = t()), r.memoizedState = r.baseState = t, t = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Aa, lastRenderedState: t }, r.queue = t, t = t.dispatch = sm.bind(null, tt, t), [r.memoizedState, t];
  }
  function ns(t, r, o, u) {
    return t = { tag: t, create: r, destroy: o, deps: u, next: null }, (r = tt.updateQueue) === null ? (r = { lastEffect: null, stores: null }, tt.updateQueue = r, r.lastEffect = t.next = t) : (o = r.lastEffect) === null ? r.lastEffect = t.next = t : (u = o.next, o.next = t, t.next = u, r.lastEffect = t), t;
  }
  function nm() {
    return Xt().memoizedState;
  }
  function Ic(t, r, o, u) {
    var c = ta();
    tt.flags |= t, c.memoizedState = ns(1 | r, o, void 0, u === void 0 ? null : u);
  }
  function Dc(t, r, o, u) {
    var c = Xt();
    u = u === void 0 ? null : u;
    var m = void 0;
    if (ct !== null) {
      var k = ct.memoizedState;
      if (m = k.destroy, u !== null && Rc(u, k.deps)) return void (c.memoizedState = ns(r, o, m, u));
    }
    tt.flags |= t, c.memoizedState = ns(1 | r, o, m, u);
  }
  function tm(t, r) {
    return Ic(8390656, 8, t, r);
  }
  function ts(t, r) {
    return Dc(2048, 8, t, r);
  }
  function rm(t, r) {
    return Dc(4, 2, t, r);
  }
  function lf(t, r) {
    return Dc(4, 4, t, r);
  }
  function am(t, r) {
    return typeof r == "function" ? (t = t(), r(t), function() {
      r(null);
    }) : r != null ? (t = t(), r.current = t, function() {
      r.current = null;
    }) : void 0;
  }
  function om(t, r, o) {
    return o = o != null ? o.concat([t]) : null, Dc(4, 4, am.bind(null, r, t), o);
  }
  function uf() {
  }
  function im(t, r) {
    var o = Xt();
    r = r === void 0 ? null : r;
    var u = o.memoizedState;
    return u !== null && r !== null && Rc(r, u[1]) ? u[0] : (o.memoizedState = [t, r], t);
  }
  function sf(t, r) {
    var o = Xt();
    r = r === void 0 ? null : r;
    var u = o.memoizedState;
    return u !== null && r !== null && Rc(r, u[1]) ? u[0] : (t = t(), o.memoizedState = [t, r], t);
  }
  function Oc(t, r, o) {
    return 21 & so ? (Lr(o, r) || (o = Zs(), tt.lanes |= o, Qo |= o, t.baseState = !0), r) : (t.baseState && (t.baseState = !1, xr = !0), t.memoizedState = o);
  }
  function rs(t, r) {
    var o = On;
    On = o !== 0 && 4 > o ? o : 4, t(!0);
    var u = Hl.transition;
    Hl.transition = {};
    try {
      t(!1), r();
    } finally {
      On = o, Hl.transition = u;
    }
  }
  function lm() {
    return Xt().memoizedState;
  }
  function um(t, r, o) {
    var u = xa(t);
    o = { lane: u, action: o, hasEagerState: !1, eagerState: null, next: null }, cf(t) ? df(r, o) : (o = Xu(t, r, o, u)) !== null && (Pr(o, t, u, Rt()), ff(o, r, u));
  }
  function sm(t, r, o) {
    var u = xa(t), c = { lane: u, action: o, hasEagerState: !1, eagerState: null, next: null };
    if (cf(t)) df(r, c);
    else {
      var m = t.alternate;
      if (t.lanes === 0 && (m === null || m.lanes === 0) && (m = r.lastRenderedReducer) !== null) try {
        var k = r.lastRenderedState, I = m(k, o);
        if (c.hasEagerState = !0, c.eagerState = I, Lr(I, k)) {
          var A = r.interleaved;
          return A === null ? (c.next = c, _c(r)) : (c.next = A.next, A.next = c), void (r.interleaved = c);
        }
      } catch {
      }
      (o = Xu(t, r, c, u)) !== null && (Pr(o, t, u, c = Rt()), ff(o, r, u));
    }
  }
  function cf(t) {
    var r = t.alternate;
    return t === tt || r !== null && r === tt;
  }
  function df(t, r) {
    $l = zi = !0;
    var o = t.pending;
    o === null ? r.next = r : (r.next = o.next, o.next = r), t.pending = r;
  }
  function ff(t, r, o) {
    if (4194240 & o) {
      var u = r.lanes;
      o |= u &= t.pendingLanes, r.lanes = o, nc(t, o);
    }
  }
  var as = { readContext: Vn, useCallback: St, useContext: St, useEffect: St, useImperativeHandle: St, useInsertionEffect: St, useLayoutEffect: St, useMemo: St, useReducer: St, useRef: St, useState: St, useDebugValue: St, useDeferredValue: St, useTransition: St, useMutableSource: St, useSyncExternalStore: St, useId: St, unstable_isNewReconciler: !1 }, cm = { readContext: Vn, useCallback: function(t, r) {
    return ta().memoizedState = [t, r === void 0 ? null : r], t;
  }, useContext: Vn, useEffect: tm, useImperativeHandle: function(t, r, o) {
    return o = o != null ? o.concat([t]) : null, Ic(4194308, 4, am.bind(null, r, t), o);
  }, useLayoutEffect: function(t, r) {
    return Ic(4194308, 4, t, r);
  }, useInsertionEffect: function(t, r) {
    return Ic(4, 2, t, r);
  }, useMemo: function(t, r) {
    var o = ta();
    return r = r === void 0 ? null : r, t = t(), o.memoizedState = [t, r], t;
  }, useReducer: function(t, r, o) {
    var u = ta();
    return r = o !== void 0 ? o(r) : r, u.memoizedState = u.baseState = r, t = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: t, lastRenderedState: r }, u.queue = t, t = t.dispatch = um.bind(null, tt, t), [u.memoizedState, t];
  }, useRef: function(t) {
    return t = { current: t }, ta().memoizedState = t;
  }, useState: of, useDebugValue: uf, useDeferredValue: function(t) {
    return ta().memoizedState = t;
  }, useTransition: function() {
    var t = of(!1), r = t[0];
    return t = rs.bind(null, t[1]), ta().memoizedState = t, [r, t];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(t, r, o) {
    var u = tt, c = ta();
    if (Ln) {
      if (o === void 0) throw Error(y(407));
      o = o();
    } else {
      if (o = r(), rt === null) throw Error(y(349));
      30 & so || af(u, r, o);
    }
    c.memoizedState = o;
    var m = { value: o, getSnapshot: r };
    return c.queue = m, tm(Nc.bind(null, u, m, t), [t]), u.flags |= 2048, ns(9, Jp.bind(null, u, m, o, r), void 0, null), o;
  }, useId: function() {
    var t = ta(), r = rt.identifierPrefix;
    if (Ln) {
      var o = ao;
      r = ":" + r + "R" + (o = (Mr & ~(1 << 32 - Kr(Mr) - 1)).toString(32) + o), 0 < (o = ql++) && (r += "H" + o.toString(32)), r += ":";
    } else r = ":" + r + "r" + (o = Pc++).toString(32) + ":";
    return t.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Ql = { readContext: Vn, useCallback: im, useContext: Vn, useEffect: ts, useImperativeHandle: om, useInsertionEffect: rm, useLayoutEffect: lf, useMemo: sf, useReducer: Zu, useRef: nm, useState: function() {
    return Zu(Aa);
  }, useDebugValue: uf, useDeferredValue: function(t) {
    return Oc(Xt(), ct.memoizedState, t);
  }, useTransition: function() {
    return [Zu(Aa)[0], Xt().memoizedState];
  }, useMutableSource: Gp, useSyncExternalStore: es, useId: lm, unstable_isNewReconciler: !1 }, uv = { readContext: Vn, useCallback: im, useContext: Vn, useEffect: ts, useImperativeHandle: om, useInsertionEffect: rm, useLayoutEffect: lf, useMemo: sf, useReducer: Ai, useRef: nm, useState: function() {
    return Ai(Aa);
  }, useDebugValue: uf, useDeferredValue: function(t) {
    var r = Xt();
    return ct === null ? r.memoizedState = t : Oc(r, ct.memoizedState, t);
  }, useTransition: function() {
    return [Ai(Aa)[0], Xt().memoizedState];
  }, useMutableSource: Gp, useSyncExternalStore: es, useId: lm, unstable_isNewReconciler: !1 };
  function ka(t, r) {
    if (t && t.defaultProps) {
      for (var o in r = ce({}, r), t = t.defaultProps) r[o] === void 0 && (r[o] = t[o]);
      return r;
    }
    return r;
  }
  function pf(t, r, o, u) {
    o = (o = o(u, r = t.memoizedState)) == null ? r : ce({}, r, o), t.memoizedState = o, t.lanes === 0 && (t.updateQueue.baseState = o);
  }
  var Lc = { isMounted: function(t) {
    return !!(t = t._reactInternals) && kt(t) === t;
  }, enqueueSetState: function(t, r, o) {
    t = t._reactInternals;
    var u = Rt(), c = xa(t), m = Kt(u, c);
    m.payload = r, o != null && (m.callback = o), (r = cr(t, m, c)) !== null && (Pr(r, t, c, u), Fo(r, t, c));
  }, enqueueReplaceState: function(t, r, o) {
    t = t._reactInternals;
    var u = Rt(), c = xa(t), m = Kt(u, c);
    m.tag = 1, m.payload = r, o != null && (m.callback = o), (r = cr(t, m, c)) !== null && (Pr(r, t, c, u), Fo(r, t, c));
  }, enqueueForceUpdate: function(t, r) {
    t = t._reactInternals;
    var o = Rt(), u = xa(t), c = Kt(o, u);
    c.tag = 2, r != null && (c.callback = r), (r = cr(t, c, u)) !== null && (Pr(r, t, u, o), Fo(r, t, u));
  } };
  function mf(t, r, o, u, c, m, k) {
    return typeof (t = t.stateNode).shouldComponentUpdate == "function" ? t.shouldComponentUpdate(u, m, k) : !r.prototype || !r.prototype.isPureReactComponent || !Ci(o, u) || !Ci(c, m);
  }
  function hf(t, r, o) {
    var u = !1, c = Oa, m = r.contextType;
    return typeof m == "object" && m !== null ? m = Vn(m) : (c = ir(r) ? ro : Pt.current, m = (u = (u = r.contextTypes) != null) ? Lo(t, c) : Oa), r = new r(o, m), t.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Lc, t.stateNode = r, r._reactInternals = t, u && ((t = t.stateNode).__reactInternalMemoizedUnmaskedChildContext = c, t.__reactInternalMemoizedMaskedChildContext = m), r;
  }
  function os(t, r, o, u) {
    t = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(o, u), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(o, u), r.state !== t && Lc.enqueueReplaceState(r, r.state, null);
  }
  function Ui(t, r, o, u) {
    var c = t.stateNode;
    c.props = o, c.state = t.memoizedState, c.refs = {}, Ul(t);
    var m = r.contextType;
    typeof m == "object" && m !== null ? c.context = Vn(m) : (m = ir(r) ? ro : Pt.current, c.context = Lo(t, m)), c.state = t.memoizedState, typeof (m = r.getDerivedStateFromProps) == "function" && (pf(t, r, m, o), c.state = t.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && Lc.enqueueReplaceState(c, c.state, null), wa(t, o, c, u), c.state = t.memoizedState), typeof c.componentDidMount == "function" && (t.flags |= 4194308);
  }
  function Yl(t, r) {
    try {
      var o = "", u = r;
      do
        o += Q(u), u = u.return;
      while (u);
      var c = o;
    } catch (m) {
      c = `
Error generating stack: ` + m.message + `
` + m.stack;
    }
    return { value: t, source: r, stack: c, digest: null };
  }
  function Kl(t, r, o) {
    return { value: t, source: null, stack: o ?? null, digest: r ?? null };
  }
  function vf(t, r) {
    try {
      console.error(r.value);
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  var dm = typeof WeakMap == "function" ? WeakMap : Map;
  function gf(t, r, o) {
    (o = Kt(-1, o)).tag = 3, o.payload = { element: null };
    var u = r.value;
    return o.callback = function() {
      uu || (uu = !0, fs = u), vf(0, r);
    }, o;
  }
  function yf(t, r, o) {
    (o = Kt(-1, o)).tag = 3;
    var u = t.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var c = r.value;
      o.payload = function() {
        return u(c);
      }, o.callback = function() {
        vf(0, r);
      };
    }
    var m = t.stateNode;
    return m !== null && typeof m.componentDidCatch == "function" && (o.callback = function() {
      vf(0, r), typeof u != "function" && (ra === null ? ra = /* @__PURE__ */ new Set([this]) : ra.add(this));
      var k = r.stack;
      this.componentDidCatch(r.value, { componentStack: k !== null ? k : "" });
    }), o;
  }
  function fm(t, r, o) {
    var u = t.pingCache;
    if (u === null) {
      u = t.pingCache = new dm();
      var c = /* @__PURE__ */ new Set();
      u.set(r, c);
    } else (c = u.get(r)) === void 0 && (c = /* @__PURE__ */ new Set(), u.set(r, c));
    c.has(o) || (c.add(o), t = dv.bind(null, t, r, o), r.then(t, t));
  }
  function pm(t) {
    do {
      var r;
      if ((r = t.tag === 13) && (r = (r = t.memoizedState) === null || r.dehydrated !== null), r) return t;
      t = t.return;
    } while (t !== null);
    return null;
  }
  function mm(t, r, o, u, c) {
    return 1 & t.mode ? (t.flags |= 65536, t.lanes = c, t) : (t === r ? t.flags |= 65536 : (t.flags |= 128, o.flags |= 131072, o.flags &= -52805, o.tag === 1 && (o.alternate === null ? o.tag = 17 : ((r = Kt(-1, 1)).tag = 2, cr(o, r, 1))), o.lanes |= 1), t);
  }
  var sv = ne.ReactCurrentOwner, xr = !1;
  function Tr(t, r, o, u) {
    r.child = t === null ? ef(r, null, o, u) : Uo(r, t.child, o, u);
  }
  function Cr(t, r, o, u, c) {
    o = o.render;
    var m = r.ref;
    return sr(r, c), u = dr(t, r, o, u, m, c), o = Ju(), t === null || xr ? (Ln && o && Tc(r), r.flags |= 1, Tr(t, r, u, c), r.child) : (r.updateQueue = t.updateQueue, r.flags &= -2053, t.lanes &= ~c, Ua(t, r, c));
  }
  function Xl(t, r, o, u, c) {
    if (t === null) {
      var m = o.type;
      return typeof m != "function" || Uf(m) || m.defaultProps !== void 0 || o.compare !== null || o.defaultProps !== void 0 ? ((t = ei(o.type, null, u, r, r.mode, c)).ref = r.ref, t.return = r, r.child = t) : (r.tag = 15, r.type = m, bf(t, r, m, u, c));
    }
    if (m = t.child, !(t.lanes & c)) {
      var k = m.memoizedProps;
      if ((o = (o = o.compare) !== null ? o : Ci)(k, u) && t.ref === r.ref) return Ua(t, r, c);
    }
    return r.flags |= 1, (t = Zo(m, u)).ref = r.ref, t.return = r, r.child = t;
  }
  function bf(t, r, o, u, c) {
    if (t !== null) {
      var m = t.memoizedProps;
      if (Ci(m, u) && t.ref === r.ref) {
        if (xr = !1, r.pendingProps = u = m, !(t.lanes & c)) return r.lanes = t.lanes, Ua(t, r, c);
        131072 & t.flags && (xr = !0);
      }
    }
    return kf(t, r, o, u, c);
  }
  function hm(t, r, o) {
    var u = r.pendingProps, c = u.children, m = t !== null ? t.memoizedState : null;
    if (u.mode === "hidden") if (1 & r.mode) {
      if (!(1073741824 & o)) return t = m !== null ? m.baseLanes | o : o, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: t, cachePool: null, transitions: null }, r.updateQueue = null, jn(iu, zr), zr |= t, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, u = m !== null ? m.baseLanes : o, jn(iu, zr), zr |= u;
    } else r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, jn(iu, zr), zr |= o;
    else m !== null ? (u = m.baseLanes | o, r.memoizedState = null) : u = o, jn(iu, zr), zr |= u;
    return Tr(t, r, c, o), r.child;
  }
  function wf(t, r) {
    var o = r.ref;
    (t === null && o !== null || t !== null && t.ref !== o) && (r.flags |= 512, r.flags |= 2097152);
  }
  function kf(t, r, o, u, c) {
    var m = ir(o) ? ro : Pt.current;
    return m = Lo(r, m), sr(r, c), o = dr(t, r, o, u, m, c), u = Ju(), t === null || xr ? (Ln && u && Tc(r), r.flags |= 1, Tr(t, r, o, c), r.child) : (r.updateQueue = t.updateQueue, r.flags &= -2053, t.lanes &= ~c, Ua(t, r, c));
  }
  function Sf(t, r, o, u, c) {
    if (ir(o)) {
      var m = !0;
      Ml(r);
    } else m = !1;
    if (sr(r, c), r.stateNode === null) Zl(t, r), hf(r, o, u), Ui(r, o, u, c), u = !0;
    else if (t === null) {
      var k = r.stateNode, I = r.memoizedProps;
      k.props = I;
      var A = k.context, q = o.contextType;
      typeof q == "object" && q !== null ? q = Vn(q) : q = Lo(r, q = ir(o) ? ro : Pt.current);
      var G = o.getDerivedStateFromProps, oe = typeof G == "function" || typeof k.getSnapshotBeforeUpdate == "function";
      oe || typeof k.UNSAFE_componentWillReceiveProps != "function" && typeof k.componentWillReceiveProps != "function" || (I !== u || A !== q) && os(r, k, u, q), Ma = !1;
      var Z = r.memoizedState;
      k.state = Z, wa(r, u, k, c), A = r.memoizedState, I !== u || Z !== A || Yt.current || Ma ? (typeof G == "function" && (pf(r, o, G, u), A = r.memoizedState), (I = Ma || mf(r, o, I, u, Z, A, q)) ? (oe || typeof k.UNSAFE_componentWillMount != "function" && typeof k.componentWillMount != "function" || (typeof k.componentWillMount == "function" && k.componentWillMount(), typeof k.UNSAFE_componentWillMount == "function" && k.UNSAFE_componentWillMount()), typeof k.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof k.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = u, r.memoizedState = A), k.props = u, k.state = A, k.context = q, u = I) : (typeof k.componentDidMount == "function" && (r.flags |= 4194308), u = !1);
    } else {
      k = r.stateNode, uo(t, r), I = r.memoizedProps, q = r.type === r.elementType ? I : ka(r.type, I), k.props = q, oe = r.pendingProps, Z = k.context, typeof (A = o.contextType) == "object" && A !== null ? A = Vn(A) : A = Lo(r, A = ir(o) ? ro : Pt.current);
      var ie = o.getDerivedStateFromProps;
      (G = typeof ie == "function" || typeof k.getSnapshotBeforeUpdate == "function") || typeof k.UNSAFE_componentWillReceiveProps != "function" && typeof k.componentWillReceiveProps != "function" || (I !== oe || Z !== A) && os(r, k, u, A), Ma = !1, Z = r.memoizedState, k.state = Z, wa(r, u, k, c);
      var ye = r.memoizedState;
      I !== oe || Z !== ye || Yt.current || Ma ? (typeof ie == "function" && (pf(r, o, ie, u), ye = r.memoizedState), (q = Ma || mf(r, o, q, u, Z, ye, A) || !1) ? (G || typeof k.UNSAFE_componentWillUpdate != "function" && typeof k.componentWillUpdate != "function" || (typeof k.componentWillUpdate == "function" && k.componentWillUpdate(u, ye, A), typeof k.UNSAFE_componentWillUpdate == "function" && k.UNSAFE_componentWillUpdate(u, ye, A)), typeof k.componentDidUpdate == "function" && (r.flags |= 4), typeof k.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof k.componentDidUpdate != "function" || I === t.memoizedProps && Z === t.memoizedState || (r.flags |= 4), typeof k.getSnapshotBeforeUpdate != "function" || I === t.memoizedProps && Z === t.memoizedState || (r.flags |= 1024), r.memoizedProps = u, r.memoizedState = ye), k.props = u, k.state = ye, k.context = A, u = q) : (typeof k.componentDidUpdate != "function" || I === t.memoizedProps && Z === t.memoizedState || (r.flags |= 4), typeof k.getSnapshotBeforeUpdate != "function" || I === t.memoizedProps && Z === t.memoizedState || (r.flags |= 1024), u = !1);
    }
    return Mc(t, r, o, u, m, c);
  }
  function Mc(t, r, o, u, c, m) {
    wf(t, r);
    var k = !!(128 & r.flags);
    if (!u && !k) return c && Sc(r, o, !1), Ua(t, r, m);
    u = r.stateNode, sv.current = r;
    var I = k && typeof o.getDerivedStateFromError != "function" ? null : u.render();
    return r.flags |= 1, t !== null && k ? (r.child = Uo(r, t.child, null, m), r.child = Uo(r, null, I, m)) : Tr(t, r, I, m), r.memoizedState = u.state, c && Sc(r, o, !0), r.child;
  }
  function vm(t) {
    var r = t.stateNode;
    r.pendingContext ? Ni(0, r.pendingContext, r.pendingContext !== r.context) : r.context && Ni(0, r.context, !1), nf(t, r.containerInfo);
  }
  function gm(t, r, o, u, c) {
    return Ao(), Oi(c), r.flags |= 256, Tr(t, r, o, u), r.child;
  }
  var Ef, is, ym, bm, xf = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Vo(t) {
    return { baseLanes: t, cachePool: null, transitions: null };
  }
  function zc(t, r, o) {
    var u, c = r.pendingProps, m = nt.current, k = !1, I = !!(128 & r.flags);
    if ((u = I) || (u = (t === null || t.memoizedState !== null) && !!(2 & m)), u ? (k = !0, r.flags &= -129) : t !== null && t.memoizedState === null || (m |= 1), jn(nt, 1 & m), t === null) return zo(r), (t = r.memoizedState) !== null && (t = t.dehydrated) !== null ? (1 & r.mode ? t.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (I = c.children, t = c.fallback, k ? (c = r.mode, k = r.child, I = { mode: "hidden", children: I }, 1 & c || k === null ? k = xs(I, c, 0, null) : (k.childLanes = 0, k.pendingProps = I), t = Ba(t, c, o, null), k.return = r, t.return = r, k.sibling = t, r.child = k, r.child.memoizedState = Vo(o), r.memoizedState = xf, t) : Fi(r, I));
    if ((m = t.memoizedState) !== null && (u = m.dehydrated) !== null) return function(q, G, oe, Z, ie, ye, ke) {
      if (oe) return 256 & G.flags ? (G.flags &= -257, Gl(q, G, ke, Z = Kl(Error(y(422))))) : G.memoizedState !== null ? (G.child = q.child, G.flags |= 128, null) : (ye = Z.fallback, ie = G.mode, Z = xs({ mode: "visible", children: Z.children }, ie, 0, null), (ye = Ba(ye, ie, ke, null)).flags |= 2, Z.return = G, ye.return = G, Z.sibling = ye, G.child = Z, 1 & G.mode && Uo(G, q.child, null, ke), G.child.memoizedState = Vo(ke), G.memoizedState = xf, ye);
      if (!(1 & G.mode)) return Gl(q, G, ke, null);
      if (ie.data === "$!") {
        if (Z = ie.nextSibling && ie.nextSibling.dataset) var te = Z.dgst;
        return Z = te, Gl(q, G, ke, Z = Kl(ye = Error(y(419)), Z, void 0));
      }
      if (te = !!(ke & q.childLanes), xr || te) {
        if ((Z = rt) !== null) {
          switch (ke & -ke) {
            case 4:
              ie = 2;
              break;
            case 16:
              ie = 8;
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
              ie = 32;
              break;
            case 536870912:
              ie = 268435456;
              break;
            default:
              ie = 0;
          }
          (ie = ie & (Z.suspendedLanes | ke) ? 0 : ie) !== 0 && ie !== ye.retryLane && (ye.retryLane = ie, lo(q, ie), Pr(Z, q, ie, -1));
        }
        return Mf(), Gl(q, G, ke, Z = Kl(Error(y(421))));
      }
      return ie.data === "$?" ? (G.flags |= 128, G.child = q.child, G = cu.bind(null, q), ie._reactRetry = G, null) : (q = ye.treeContext, Sr = zt(ie.nextSibling), kr = G, Ln = !0, lr = null, q !== null && (br[wr++] = Mr, br[wr++] = ao, br[wr++] = ya, Mr = q.id, ao = q.overflow, ya = G), G = Fi(G, Z.children), G.flags |= 4096, G);
    }(t, r, I, c, u, m, o);
    if (k) {
      k = c.fallback, I = r.mode, u = (m = t.child).sibling;
      var A = { mode: "hidden", children: c.children };
      return 1 & I || r.child === m ? (c = Zo(m, A)).subtreeFlags = 14680064 & m.subtreeFlags : ((c = r.child).childLanes = 0, c.pendingProps = A, r.deletions = null), u !== null ? k = Zo(u, k) : (k = Ba(k, I, o, null)).flags |= 2, k.return = r, c.return = r, c.sibling = k, r.child = c, c = k, k = r.child, I = (I = t.child.memoizedState) === null ? Vo(o) : { baseLanes: I.baseLanes | o, cachePool: null, transitions: I.transitions }, k.memoizedState = I, k.childLanes = t.childLanes & ~o, r.memoizedState = xf, c;
    }
    return t = (k = t.child).sibling, c = Zo(k, { mode: "visible", children: c.children }), !(1 & r.mode) && (c.lanes = o), c.return = r, c.sibling = null, t !== null && ((o = r.deletions) === null ? (r.deletions = [t], r.flags |= 16) : o.push(t)), r.child = c, r.memoizedState = null, c;
  }
  function Fi(t, r) {
    return (r = xs({ mode: "visible", children: r }, t.mode, 0, null)).return = t, t.child = r;
  }
  function Gl(t, r, o, u) {
    return u !== null && Oi(u), Uo(r, t.child, null, o), (t = Fi(r, r.pendingProps.children)).flags |= 2, r.memoizedState = null, t;
  }
  function Tf(t, r, o) {
    t.lanes |= r;
    var u = t.alternate;
    u !== null && (u.lanes |= r), Mi(t.return, r, o);
  }
  function Jl(t, r, o, u, c) {
    var m = t.memoizedState;
    m === null ? t.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: u, tail: o, tailMode: c } : (m.isBackwards = r, m.rendering = null, m.renderingStartTime = 0, m.last = u, m.tail = o, m.tailMode = c);
  }
  function ji(t, r, o) {
    var u = r.pendingProps, c = u.revealOrder, m = u.tail;
    if (Tr(t, r, u.children, o), 2 & (u = nt.current)) u = 1 & u | 2, r.flags |= 128;
    else {
      if (t !== null && 128 & t.flags) e: for (t = r.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && Tf(t, o, r);
        else if (t.tag === 19) Tf(t, o, r);
        else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === r) break e;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === r) break e;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      u &= 1;
    }
    if (jn(nt, u), 1 & r.mode) switch (c) {
      case "forwards":
        for (o = r.child, c = null; o !== null; ) (t = o.alternate) !== null && Gu(t) === null && (c = o), o = o.sibling;
        (o = c) === null ? (c = r.child, r.child = null) : (c = o.sibling, o.sibling = null), Jl(r, !1, c, o, m);
        break;
      case "backwards":
        for (o = null, c = r.child, r.child = null; c !== null; ) {
          if ((t = c.alternate) !== null && Gu(t) === null) {
            r.child = c;
            break;
          }
          t = c.sibling, c.sibling = o, o = c, c = t;
        }
        Jl(r, !0, o, null, m);
        break;
      case "together":
        Jl(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    else r.memoizedState = null;
    return r.child;
  }
  function Zl(t, r) {
    !(1 & r.mode) && t !== null && (t.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function Ua(t, r, o) {
    if (t !== null && (r.dependencies = t.dependencies), Qo |= r.lanes, !(o & r.childLanes)) return null;
    if (t !== null && r.child !== t.child) throw Error(y(153));
    if (r.child !== null) {
      for (o = Zo(t = r.child, t.pendingProps), r.child = o, o.return = r; t.sibling !== null; ) t = t.sibling, (o = o.sibling = Zo(t, t.pendingProps)).return = r;
      o.sibling = null;
    }
    return r.child;
  }
  function Ho(t, r) {
    if (!Ln) switch (t.tailMode) {
      case "hidden":
        r = t.tail;
        for (var o = null; r !== null; ) r.alternate !== null && (o = r), r = r.sibling;
        o === null ? t.tail = null : o.sibling = null;
        break;
      case "collapsed":
        o = t.tail;
        for (var u = null; o !== null; ) o.alternate !== null && (u = o), o = o.sibling;
        u === null ? r || t.tail === null ? t.tail = null : t.tail.sibling = null : u.sibling = null;
    }
  }
  function Gt(t) {
    var r = t.alternate !== null && t.alternate.child === t.child, o = 0, u = 0;
    if (r) for (var c = t.child; c !== null; ) o |= c.lanes | c.childLanes, u |= 14680064 & c.subtreeFlags, u |= 14680064 & c.flags, c.return = t, c = c.sibling;
    else for (c = t.child; c !== null; ) o |= c.lanes | c.childLanes, u |= c.subtreeFlags, u |= c.flags, c.return = t, c = c.sibling;
    return t.subtreeFlags |= u, t.childLanes = o, r;
  }
  function wm(t, r, o) {
    var u = r.pendingProps;
    switch (zl(r), r.tag) {
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
        return Gt(r), null;
      case 1:
      case 17:
        return ir(r.type) && Ll(), Gt(r), null;
      case 3:
        return u = r.stateNode, za(), $n(Yt), $n(Pt), rf(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), t !== null && t.child !== null || (Di(r) ? r.flags |= 4 : t === null || t.memoizedState.isDehydrated && !(256 & r.flags) || (r.flags |= 1024, lr !== null && (ys(lr), lr = null))), is(t, r), Gt(r), null;
      case 5:
        Wo(r);
        var c = Bo(jo.current);
        if (o = r.type, t !== null && r.stateNode != null) ym(t, r, o, u, c), t.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!u) {
            if (r.stateNode === null) throw Error(y(166));
            return Gt(r), null;
          }
          if (t = Bo(Er.current), Di(r)) {
            u = r.stateNode, o = r.type;
            var m = r.memoizedProps;
            switch (u[Ia] = r, u[Pi] = m, t = !!(1 & r.mode), o) {
              case "dialog":
                In("cancel", u), In("close", u);
                break;
              case "iframe":
              case "object":
              case "embed":
                In("load", u);
                break;
              case "video":
              case "audio":
                for (c = 0; c < st.length; c++) In(st[c], u);
                break;
              case "source":
                In("error", u);
                break;
              case "img":
              case "image":
              case "link":
                In("error", u), In("load", u);
                break;
              case "details":
                In("toggle", u);
                break;
              case "input":
                kn(u, m), In("invalid", u);
                break;
              case "select":
                u._wrapperState = { wasMultiple: !!m.multiple }, In("invalid", u);
                break;
              case "textarea":
                Pe(u, m), In("invalid", u);
            }
            for (var k in pe(o, m), c = null, m) if (m.hasOwnProperty(k)) {
              var I = m[k];
              k === "children" ? typeof I == "string" ? u.textContent !== I && (m.suppressHydrationWarning !== !0 && Vu(u.textContent, I, t), c = ["children", I]) : typeof I == "number" && u.textContent !== "" + I && (m.suppressHydrationWarning !== !0 && Vu(u.textContent, I, t), c = ["children", "" + I]) : C.hasOwnProperty(k) && I != null && k === "onScroll" && In("scroll", u);
            }
            switch (o) {
              case "input":
                Qe(u), tr(u, m, !0);
                break;
              case "textarea":
                Qe(u), lt(u);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof m.onClick == "function" && (u.onclick = No);
            }
            u = c, r.updateQueue = u, u !== null && (r.flags |= 4);
          } else {
            k = c.nodeType === 9 ? c : c.ownerDocument, t === "http://www.w3.org/1999/xhtml" && (t = Fn(o)), t === "http://www.w3.org/1999/xhtml" ? o === "script" ? ((t = k.createElement("div")).innerHTML = "<script><\/script>", t = t.removeChild(t.firstChild)) : typeof u.is == "string" ? t = k.createElement(o, { is: u.is }) : (t = k.createElement(o), o === "select" && (k = t, u.multiple ? k.multiple = !0 : u.size && (k.size = u.size))) : t = k.createElementNS(t, o), t[Ia] = r, t[Pi] = u, Ef(t, r, !1, !1), r.stateNode = t;
            e: {
              switch (k = we(o, u), o) {
                case "dialog":
                  In("cancel", t), In("close", t), c = u;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  In("load", t), c = u;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < st.length; c++) In(st[c], t);
                  c = u;
                  break;
                case "source":
                  In("error", t), c = u;
                  break;
                case "img":
                case "image":
                case "link":
                  In("error", t), In("load", t), c = u;
                  break;
                case "details":
                  In("toggle", t), c = u;
                  break;
                case "input":
                  kn(t, u), c = Dn(t, u), In("invalid", t);
                  break;
                case "option":
                default:
                  c = u;
                  break;
                case "select":
                  t._wrapperState = { wasMultiple: !!u.multiple }, c = ce({}, u, { value: void 0 }), In("invalid", t);
                  break;
                case "textarea":
                  Pe(t, u), c = Ce(t, u), In("invalid", t);
              }
              for (m in pe(o, c), I = c) if (I.hasOwnProperty(m)) {
                var A = I[m];
                m === "style" ? cl(t, A) : m === "dangerouslySetInnerHTML" ? (A = A ? A.__html : void 0) != null && hn(t, A) : m === "children" ? typeof A == "string" ? (o !== "textarea" || A !== "") && bn(t, A) : typeof A == "number" && bn(t, "" + A) : m !== "suppressContentEditableWarning" && m !== "suppressHydrationWarning" && m !== "autoFocus" && (C.hasOwnProperty(m) ? A != null && m === "onScroll" && In("scroll", t) : A != null && $(t, m, A, k));
              }
              switch (o) {
                case "input":
                  Qe(t), tr(t, u, !1);
                  break;
                case "textarea":
                  Qe(t), lt(t);
                  break;
                case "option":
                  u.value != null && t.setAttribute("value", "" + ze(u.value));
                  break;
                case "select":
                  t.multiple = !!u.multiple, (m = u.value) != null ? B(t, !!u.multiple, m, !1) : u.defaultValue != null && B(t, !!u.multiple, u.defaultValue, !0);
                  break;
                default:
                  typeof c.onClick == "function" && (t.onclick = No);
              }
              switch (o) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  u = !!u.autoFocus;
                  break e;
                case "img":
                  u = !0;
                  break e;
                default:
                  u = !1;
              }
            }
            u && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return Gt(r), null;
      case 6:
        if (t && r.stateNode != null) bm(t, r, t.memoizedProps, u);
        else {
          if (typeof u != "string" && r.stateNode === null) throw Error(y(166));
          if (o = Bo(jo.current), Bo(Er.current), Di(r)) {
            if (u = r.stateNode, o = r.memoizedProps, u[Ia] = r, (m = u.nodeValue !== o) && (t = kr) !== null) switch (t.tag) {
              case 3:
                Vu(u.nodeValue, o, !!(1 & t.mode));
                break;
              case 5:
                t.memoizedProps.suppressHydrationWarning !== !0 && Vu(u.nodeValue, o, !!(1 & t.mode));
            }
            m && (r.flags |= 4);
          } else (u = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(u))[Ia] = r, r.stateNode = u;
        }
        return Gt(r), null;
      case 13:
        if ($n(nt), u = r.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (Ln && Sr !== null && 1 & r.mode && !(128 & r.flags)) Gd(), Ao(), r.flags |= 98560, m = !1;
          else if (m = Di(r), u !== null && u.dehydrated !== null) {
            if (t === null) {
              if (!m) throw Error(y(318));
              if (!(m = (m = r.memoizedState) !== null ? m.dehydrated : null)) throw Error(y(317));
              m[Ia] = r;
            } else Ao(), !(128 & r.flags) && (r.memoizedState = null), r.flags |= 4;
            Gt(r), m = !1;
          } else lr !== null && (ys(lr), lr = null), m = !0;
          if (!m) return 65536 & r.flags ? r : null;
        }
        return 128 & r.flags ? (r.lanes = o, r) : ((u = u !== null) != (t !== null && t.memoizedState !== null) && u && (r.child.flags |= 8192, 1 & r.mode && (t === null || 1 & nt.current ? dt === 0 && (dt = 3) : Mf())), r.updateQueue !== null && (r.flags |= 4), Gt(r), null);
      case 4:
        return za(), is(t, r), t === null && Wu(r.stateNode.containerInfo), Gt(r), null;
      case 10:
        return Al(r.type._context), Gt(r), null;
      case 19:
        if ($n(nt), (m = r.memoizedState) === null) return Gt(r), null;
        if (u = !!(128 & r.flags), (k = m.rendering) === null) if (u) Ho(m, !1);
        else {
          if (dt !== 0 || t !== null && 128 & t.flags) for (t = r.child; t !== null; ) {
            if ((k = Gu(t)) !== null) {
              for (r.flags |= 128, Ho(m, !1), (u = k.updateQueue) !== null && (r.updateQueue = u, r.flags |= 4), r.subtreeFlags = 0, u = o, o = r.child; o !== null; ) t = u, (m = o).flags &= 14680066, (k = m.alternate) === null ? (m.childLanes = 0, m.lanes = t, m.child = null, m.subtreeFlags = 0, m.memoizedProps = null, m.memoizedState = null, m.updateQueue = null, m.dependencies = null, m.stateNode = null) : (m.childLanes = k.childLanes, m.lanes = k.lanes, m.child = k.child, m.subtreeFlags = 0, m.deletions = null, m.memoizedProps = k.memoizedProps, m.memoizedState = k.memoizedState, m.updateQueue = k.updateQueue, m.type = k.type, t = k.dependencies, m.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }), o = o.sibling;
              return jn(nt, 1 & nt.current | 2), r.child;
            }
            t = t.sibling;
          }
          m.tail !== null && pt() > Yo && (r.flags |= 128, u = !0, Ho(m, !1), r.lanes = 4194304);
        }
        else {
          if (!u) if ((t = Gu(k)) !== null) {
            if (r.flags |= 128, u = !0, (o = t.updateQueue) !== null && (r.updateQueue = o, r.flags |= 4), Ho(m, !0), m.tail === null && m.tailMode === "hidden" && !k.alternate && !Ln) return Gt(r), null;
          } else 2 * pt() - m.renderingStartTime > Yo && o !== 1073741824 && (r.flags |= 128, u = !0, Ho(m, !1), r.lanes = 4194304);
          m.isBackwards ? (k.sibling = r.child, r.child = k) : ((o = m.last) !== null ? o.sibling = k : r.child = k, m.last = k);
        }
        return m.tail !== null ? (r = m.tail, m.rendering = r, m.tail = r.sibling, m.renderingStartTime = pt(), r.sibling = null, o = nt.current, jn(nt, u ? 1 & o | 2 : 1 & o), r) : (Gt(r), null);
      case 22:
      case 23:
        return ws(), u = r.memoizedState !== null, t !== null && t.memoizedState !== null !== u && (r.flags |= 8192), u && 1 & r.mode ? 1073741824 & zr && (Gt(r), 6 & r.subtreeFlags && (r.flags |= 8192)) : Gt(r), null;
      case 24:
      case 25:
        return null;
    }
    throw Error(y(156, r.tag));
  }
  function km(t, r) {
    switch (zl(r), r.tag) {
      case 1:
        return ir(r.type) && Ll(), 65536 & (t = r.flags) ? (r.flags = -65537 & t | 128, r) : null;
      case 3:
        return za(), $n(Yt), $n(Pt), rf(), 65536 & (t = r.flags) && !(128 & t) ? (r.flags = -65537 & t | 128, r) : null;
      case 5:
        return Wo(r), null;
      case 13:
        if ($n(nt), (t = r.memoizedState) !== null && t.dehydrated !== null) {
          if (r.alternate === null) throw Error(y(340));
          Ao();
        }
        return 65536 & (t = r.flags) ? (r.flags = -65537 & t | 128, r) : null;
      case 19:
        return $n(nt), null;
      case 4:
        return za(), null;
      case 10:
        return Al(r.type._context), null;
      case 22:
      case 23:
        return ws(), null;
      default:
        return null;
    }
  }
  Ef = function(t, r) {
    for (var o = r.child; o !== null; ) {
      if (o.tag === 5 || o.tag === 6) t.appendChild(o.stateNode);
      else if (o.tag !== 4 && o.child !== null) {
        o.child.return = o, o = o.child;
        continue;
      }
      if (o === r) break;
      for (; o.sibling === null; ) {
        if (o.return === null || o.return === r) return;
        o = o.return;
      }
      o.sibling.return = o.return, o = o.sibling;
    }
  }, is = function() {
  }, ym = function(t, r, o, u) {
    var c = t.memoizedProps;
    if (c !== u) {
      t = r.stateNode, Bo(Er.current);
      var m, k = null;
      switch (o) {
        case "input":
          c = Dn(t, c), u = Dn(t, u), k = [];
          break;
        case "select":
          c = ce({}, c, { value: void 0 }), u = ce({}, u, { value: void 0 }), k = [];
          break;
        case "textarea":
          c = Ce(t, c), u = Ce(t, u), k = [];
          break;
        default:
          typeof c.onClick != "function" && typeof u.onClick == "function" && (t.onclick = No);
      }
      for (q in pe(o, u), o = null, c) if (!u.hasOwnProperty(q) && c.hasOwnProperty(q) && c[q] != null) if (q === "style") {
        var I = c[q];
        for (m in I) I.hasOwnProperty(m) && (o || (o = {}), o[m] = "");
      } else q !== "dangerouslySetInnerHTML" && q !== "children" && q !== "suppressContentEditableWarning" && q !== "suppressHydrationWarning" && q !== "autoFocus" && (C.hasOwnProperty(q) ? k || (k = []) : (k = k || []).push(q, null));
      for (q in u) {
        var A = u[q];
        if (I = c != null ? c[q] : void 0, u.hasOwnProperty(q) && A !== I && (A != null || I != null)) if (q === "style") if (I) {
          for (m in I) !I.hasOwnProperty(m) || A && A.hasOwnProperty(m) || (o || (o = {}), o[m] = "");
          for (m in A) A.hasOwnProperty(m) && I[m] !== A[m] && (o || (o = {}), o[m] = A[m]);
        } else o || (k || (k = []), k.push(q, o)), o = A;
        else q === "dangerouslySetInnerHTML" ? (A = A ? A.__html : void 0, I = I ? I.__html : void 0, A != null && I !== A && (k = k || []).push(q, A)) : q === "children" ? typeof A != "string" && typeof A != "number" || (k = k || []).push(q, "" + A) : q !== "suppressContentEditableWarning" && q !== "suppressHydrationWarning" && (C.hasOwnProperty(q) ? (A != null && q === "onScroll" && In("scroll", t), k || I === A || (k = [])) : (k = k || []).push(q, A));
      }
      o && (k = k || []).push("style", o);
      var q = k;
      (r.updateQueue = q) && (r.flags |= 4);
    }
  }, bm = function(t, r, o, u) {
    o !== u && (r.flags |= 4);
  };
  var ls = !1, Ft = !1, Sm = typeof WeakSet == "function" ? WeakSet : Set, Fe = null;
  function eu(t, r) {
    var o = t.ref;
    if (o !== null) if (typeof o == "function") try {
      o(null);
    } catch (u) {
      Yn(t, r, u);
    }
    else o.current = null;
  }
  function Em(t, r, o) {
    try {
      o();
    } catch (u) {
      Yn(t, r, u);
    }
  }
  var nu = !1;
  function Bi(t, r, o) {
    var u = r.updateQueue;
    if ((u = u !== null ? u.lastEffect : null) !== null) {
      var c = u = u.next;
      do {
        if ((c.tag & t) === t) {
          var m = c.destroy;
          c.destroy = void 0, m !== void 0 && Em(r, o, m);
        }
        c = c.next;
      } while (c !== u);
    }
  }
  function us(t, r) {
    if ((r = (r = r.updateQueue) !== null ? r.lastEffect : null) !== null) {
      var o = r = r.next;
      do {
        if ((o.tag & t) === t) {
          var u = o.create;
          o.destroy = u();
        }
        o = o.next;
      } while (o !== r);
    }
  }
  function Cf(t) {
    var r = t.ref;
    if (r !== null) {
      var o = t.stateNode;
      t.tag, t = o, typeof r == "function" ? r(t) : r.current = t;
    }
  }
  function _f(t) {
    var r = t.alternate;
    r !== null && (t.alternate = null, _f(r)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (r = t.stateNode) !== null && (delete r[Ia], delete r[Pi], delete r[Do], delete r[no], delete r[Ri]), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  function qn(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 4;
  }
  function Ac(t) {
    e: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || qn(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (2 & t.flags || t.child === null || t.tag === 4) continue e;
        t.child.return = t, t = t.child;
      }
      if (!(2 & t.flags)) return t.stateNode;
    }
  }
  function tu(t, r, o) {
    var u = t.tag;
    if (u === 5 || u === 6) t = t.stateNode, r ? o.nodeType === 8 ? o.parentNode.insertBefore(t, r) : o.insertBefore(t, r) : (o.nodeType === 8 ? (r = o.parentNode).insertBefore(t, o) : (r = o).appendChild(t), (o = o._reactRootContainer) != null || r.onclick !== null || (r.onclick = No));
    else if (u !== 4 && (t = t.child) !== null) for (tu(t, r, o), t = t.sibling; t !== null; ) tu(t, r, o), t = t.sibling;
  }
  function Wi(t, r, o) {
    var u = t.tag;
    if (u === 5 || u === 6) t = t.stateNode, r ? o.insertBefore(t, r) : o.appendChild(t);
    else if (u !== 4 && (t = t.child) !== null) for (Wi(t, r, o), t = t.sibling; t !== null; ) Wi(t, r, o), t = t.sibling;
  }
  var Jt = null, Sa = !1;
  function Fa(t, r, o) {
    for (o = o.child; o !== null; ) ru(t, r, o), o = o.sibling;
  }
  function ru(t, r, o) {
    if (ma && typeof ma.onCommitFiberUnmount == "function") try {
      ma.onCommitFiberUnmount(Nu, o);
    } catch {
    }
    switch (o.tag) {
      case 5:
        Ft || eu(o, r);
      case 6:
        var u = Jt, c = Sa;
        Jt = null, Fa(t, r, o), Sa = c, (Jt = u) !== null && (Sa ? (t = Jt, o = o.stateNode, t.nodeType === 8 ? t.parentNode.removeChild(o) : t.removeChild(o)) : Jt.removeChild(o.stateNode));
        break;
      case 18:
        Jt !== null && (Sa ? (t = Jt, o = o.stateNode, t.nodeType === 8 ? Hu(t.parentNode, o) : t.nodeType === 1 && Hu(t, o), Za(t)) : Hu(Jt, o.stateNode));
        break;
      case 4:
        u = Jt, c = Sa, Jt = o.stateNode.containerInfo, Sa = !0, Fa(t, r, o), Jt = u, Sa = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Ft && (u = o.updateQueue) !== null && (u = u.lastEffect) !== null) {
          c = u = u.next;
          do {
            var m = c, k = m.destroy;
            m = m.tag, k !== void 0 && (2 & m || 4 & m) && Em(o, r, k), c = c.next;
          } while (c !== u);
        }
        Fa(t, r, o);
        break;
      case 1:
        if (!Ft && (eu(o, r), typeof (u = o.stateNode).componentWillUnmount == "function")) try {
          u.props = o.memoizedProps, u.state = o.memoizedState, u.componentWillUnmount();
        } catch (I) {
          Yn(o, r, I);
        }
        Fa(t, r, o);
        break;
      case 21:
        Fa(t, r, o);
        break;
      case 22:
        1 & o.mode ? (Ft = (u = Ft) || o.memoizedState !== null, Fa(t, r, o), Ft = u) : Fa(t, r, o);
        break;
      default:
        Fa(t, r, o);
    }
  }
  function ss(t) {
    var r = t.updateQueue;
    if (r !== null) {
      t.updateQueue = null;
      var o = t.stateNode;
      o === null && (o = t.stateNode = new Sm()), r.forEach(function(u) {
        var c = du.bind(null, t, u);
        o.has(u) || (o.add(u), u.then(c, c));
      });
    }
  }
  function fr(t, r) {
    var o = r.deletions;
    if (o !== null) for (var u = 0; u < o.length; u++) {
      var c = o[u];
      try {
        var m = t, k = r, I = k;
        e: for (; I !== null; ) {
          switch (I.tag) {
            case 5:
              Jt = I.stateNode, Sa = !1;
              break e;
            case 3:
            case 4:
              Jt = I.stateNode.containerInfo, Sa = !0;
              break e;
          }
          I = I.return;
        }
        if (Jt === null) throw Error(y(160));
        ru(m, k, c), Jt = null, Sa = !1;
        var A = c.alternate;
        A !== null && (A.return = null), c.return = null;
      } catch (q) {
        Yn(c, r, q);
      }
    }
    if (12854 & r.subtreeFlags) for (r = r.child; r !== null; ) Pf(r, t), r = r.sibling;
  }
  function Pf(t, r) {
    var o = t.alternate, u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (fr(r, t), Ea(t), 4 & u) {
          try {
            Bi(3, t, t.return), us(3, t);
          } catch (ke) {
            Yn(t, t.return, ke);
          }
          try {
            Bi(5, t, t.return);
          } catch (ke) {
            Yn(t, t.return, ke);
          }
        }
        break;
      case 1:
        fr(r, t), Ea(t), 512 & u && o !== null && eu(o, o.return);
        break;
      case 5:
        if (fr(r, t), Ea(t), 512 & u && o !== null && eu(o, o.return), 32 & t.flags) {
          var c = t.stateNode;
          try {
            bn(c, "");
          } catch (ke) {
            Yn(t, t.return, ke);
          }
        }
        if (4 & u && (c = t.stateNode) != null) {
          var m = t.memoizedProps, k = o !== null ? o.memoizedProps : m, I = t.type, A = t.updateQueue;
          if (t.updateQueue = null, A !== null) try {
            I === "input" && m.type === "radio" && m.name != null && ot(c, m), we(I, k);
            var q = we(I, m);
            for (k = 0; k < A.length; k += 2) {
              var G = A[k], oe = A[k + 1];
              G === "style" ? cl(c, oe) : G === "dangerouslySetInnerHTML" ? hn(c, oe) : G === "children" ? bn(c, oe) : $(c, G, oe, q);
            }
            switch (I) {
              case "input":
                gr(c, m);
                break;
              case "textarea":
                yn(c, m);
                break;
              case "select":
                var Z = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!m.multiple;
                var ie = m.value;
                ie != null ? B(c, !!m.multiple, ie, !1) : Z !== !!m.multiple && (m.defaultValue != null ? B(c, !!m.multiple, m.defaultValue, !0) : B(c, !!m.multiple, m.multiple ? [] : "", !1));
            }
            c[Pi] = m;
          } catch (ke) {
            Yn(t, t.return, ke);
          }
        }
        break;
      case 6:
        if (fr(r, t), Ea(t), 4 & u) {
          if (t.stateNode === null) throw Error(y(162));
          c = t.stateNode, m = t.memoizedProps;
          try {
            c.nodeValue = m;
          } catch (ke) {
            Yn(t, t.return, ke);
          }
        }
        break;
      case 3:
        if (fr(r, t), Ea(t), 4 & u && o !== null && o.memoizedState.isDehydrated) try {
          Za(r.containerInfo);
        } catch (ke) {
          Yn(t, t.return, ke);
        }
        break;
      case 4:
      default:
        fr(r, t), Ea(t);
        break;
      case 13:
        fr(r, t), Ea(t), 8192 & (c = t.child).flags && (m = c.memoizedState !== null, c.stateNode.isHidden = m, !m || c.alternate !== null && c.alternate.memoizedState !== null || (Df = pt())), 4 & u && ss(t);
        break;
      case 22:
        if (G = o !== null && o.memoizedState !== null, 1 & t.mode ? (Ft = (q = Ft) || G, fr(r, t), Ft = q) : fr(r, t), Ea(t), 8192 & u) {
          if (q = t.memoizedState !== null, (t.stateNode.isHidden = q) && !G && 1 & t.mode) for (Fe = t, G = t.child; G !== null; ) {
            for (oe = Fe = G; Fe !== null; ) {
              switch (ie = (Z = Fe).child, Z.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Bi(4, Z, Z.return);
                  break;
                case 1:
                  eu(Z, Z.return);
                  var ye = Z.stateNode;
                  if (typeof ye.componentWillUnmount == "function") {
                    u = Z, o = Z.return;
                    try {
                      r = u, ye.props = r.memoizedProps, ye.state = r.memoizedState, ye.componentWillUnmount();
                    } catch (ke) {
                      Yn(u, o, ke);
                    }
                  }
                  break;
                case 5:
                  eu(Z, Z.return);
                  break;
                case 22:
                  if (Z.memoizedState !== null) {
                    cs(oe);
                    continue;
                  }
              }
              ie !== null ? (ie.return = Z, Fe = ie) : cs(oe);
            }
            G = G.sibling;
          }
          e: for (G = null, oe = t; ; ) {
            if (oe.tag === 5) {
              if (G === null) {
                G = oe;
                try {
                  c = oe.stateNode, q ? typeof (m = c.style).setProperty == "function" ? m.setProperty("display", "none", "important") : m.display = "none" : (I = oe.stateNode, k = (A = oe.memoizedProps.style) != null && A.hasOwnProperty("display") ? A.display : null, I.style.display = Qr("display", k));
                } catch (ke) {
                  Yn(t, t.return, ke);
                }
              }
            } else if (oe.tag === 6) {
              if (G === null) try {
                oe.stateNode.nodeValue = q ? "" : oe.memoizedProps;
              } catch (ke) {
                Yn(t, t.return, ke);
              }
            } else if ((oe.tag !== 22 && oe.tag !== 23 || oe.memoizedState === null || oe === t) && oe.child !== null) {
              oe.child.return = oe, oe = oe.child;
              continue;
            }
            if (oe === t) break e;
            for (; oe.sibling === null; ) {
              if (oe.return === null || oe.return === t) break e;
              G === oe && (G = null), oe = oe.return;
            }
            G === oe && (G = null), oe.sibling.return = oe.return, oe = oe.sibling;
          }
        }
        break;
      case 19:
        fr(r, t), Ea(t), 4 & u && ss(t);
      case 21:
    }
  }
  function Ea(t) {
    var r = t.flags;
    if (2 & r) {
      try {
        e: {
          for (var o = t.return; o !== null; ) {
            if (qn(o)) {
              var u = o;
              break e;
            }
            o = o.return;
          }
          throw Error(y(160));
        }
        switch (u.tag) {
          case 5:
            var c = u.stateNode;
            32 & u.flags && (bn(c, ""), u.flags &= -33), Wi(t, Ac(t), c);
            break;
          case 3:
          case 4:
            var m = u.stateNode.containerInfo;
            tu(t, Ac(t), m);
            break;
          default:
            throw Error(y(161));
        }
      } catch (k) {
        Yn(t, t.return, k);
      }
      t.flags &= -3;
    }
    4096 & r && (t.flags &= -4097);
  }
  function Uc(t, r, o) {
    Fe = t, au(t);
  }
  function au(t, r, o) {
    for (var u = !!(1 & t.mode); Fe !== null; ) {
      var c = Fe, m = c.child;
      if (c.tag === 22 && u) {
        var k = c.memoizedState !== null || ls;
        if (!k) {
          var I = c.alternate, A = I !== null && I.memoizedState !== null || Ft;
          I = ls;
          var q = Ft;
          if (ls = k, (Ft = A) && !q) for (Fe = c; Fe !== null; ) A = (k = Fe).child, k.tag === 22 && k.memoizedState !== null ? Nf(c) : A !== null ? (A.return = k, Fe = A) : Nf(c);
          for (; m !== null; ) Fe = m, au(m), m = m.sibling;
          Fe = c, ls = I, Ft = q;
        }
        Rf(t);
      } else 8772 & c.subtreeFlags && m !== null ? (m.return = c, Fe = m) : Rf(t);
    }
  }
  function Rf(t) {
    for (; Fe !== null; ) {
      var r = Fe;
      if (8772 & r.flags) {
        var o = r.alternate;
        try {
          if (8772 & r.flags) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              Ft || us(5, r);
              break;
            case 1:
              var u = r.stateNode;
              if (4 & r.flags && !Ft) if (o === null) u.componentDidMount();
              else {
                var c = r.elementType === r.type ? o.memoizedProps : ka(r.type, o.memoizedProps);
                u.componentDidUpdate(c, o.memoizedState, u.__reactInternalSnapshotBeforeUpdate);
              }
              var m = r.updateQueue;
              m !== null && Xp(r, m, u);
              break;
            case 3:
              var k = r.updateQueue;
              if (k !== null) {
                if (o = null, r.child !== null) switch (r.child.tag) {
                  case 5:
                  case 1:
                    o = r.child.stateNode;
                }
                Xp(r, k, o);
              }
              break;
            case 5:
              var I = r.stateNode;
              if (o === null && 4 & r.flags) {
                o = I;
                var A = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    A.autoFocus && o.focus();
                    break;
                  case "img":
                    A.src && (o.src = A.src);
                }
              }
              break;
            case 6:
            case 4:
            case 12:
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            case 13:
              if (r.memoizedState === null) {
                var q = r.alternate;
                if (q !== null) {
                  var G = q.memoizedState;
                  if (G !== null) {
                    var oe = G.dehydrated;
                    oe !== null && Za(oe);
                  }
                }
              }
              break;
            default:
              throw Error(y(163));
          }
          Ft || 512 & r.flags && Cf(r);
        } catch (Z) {
          Yn(r, r.return, Z);
        }
      }
      if (r === t) {
        Fe = null;
        break;
      }
      if ((o = r.sibling) !== null) {
        o.return = r.return, Fe = o;
        break;
      }
      Fe = r.return;
    }
  }
  function cs(t) {
    for (; Fe !== null; ) {
      var r = Fe;
      if (r === t) {
        Fe = null;
        break;
      }
      var o = r.sibling;
      if (o !== null) {
        o.return = r.return, Fe = o;
        break;
      }
      Fe = r.return;
    }
  }
  function Nf(t) {
    for (; Fe !== null; ) {
      var r = Fe;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var o = r.return;
            try {
              us(4, r);
            } catch (A) {
              Yn(r, o, A);
            }
            break;
          case 1:
            var u = r.stateNode;
            if (typeof u.componentDidMount == "function") {
              var c = r.return;
              try {
                u.componentDidMount();
              } catch (A) {
                Yn(r, c, A);
              }
            }
            var m = r.return;
            try {
              Cf(r);
            } catch (A) {
              Yn(r, m, A);
            }
            break;
          case 5:
            var k = r.return;
            try {
              Cf(r);
            } catch (A) {
              Yn(r, k, A);
            }
        }
      } catch (A) {
        Yn(r, r.return, A);
      }
      if (r === t) {
        Fe = null;
        break;
      }
      var I = r.sibling;
      if (I !== null) {
        I.return = r.return, Fe = I;
        break;
      }
      Fe = r.return;
    }
  }
  var If, _r = Math.ceil, $o = ne.ReactCurrentDispatcher, ou = ne.ReactCurrentOwner, Et = ne.ReactCurrentBatchConfig, Pn = 0, rt = null, Qn = null, gt = 0, zr = 0, iu = Da(0), dt = 0, qo = null, Qo = 0, Fc = 0, lu = 0, ds = null, Ar = null, Df = 0, Yo = 1 / 0, ja = null, uu = !1, fs = null, ra = null, Ko = !1, Xo = null, ps = 0, ms = 0, Of = null, hs = -1, vs = 0;
  function Rt() {
    return 6 & Pn ? pt() : hs !== -1 ? hs : hs = pt();
  }
  function xa(t) {
    return 1 & t.mode ? 2 & Pn && gt !== 0 ? gt & -gt : Kp.transition !== null ? (vs === 0 && (vs = Zs()), vs) : (t = On) !== 0 ? t : t = (t = window.event) === void 0 ? 16 : Ed(t.type) : 1;
  }
  function Pr(t, r, o, u) {
    if (50 < ms) throw ms = 0, Of = null, Error(y(185));
    vl(t, o, u), 2 & Pn && t === rt || (t === rt && (!(2 & Pn) && (Fc |= o), dt === 4 && Go(t, gt)), Nt(t, u), o === 1 && Pn === 0 && !(1 & r.mode) && (Yo = pt() + 500, qu && ea()));
  }
  function Nt(t, r) {
    var o = t.callbackNode;
    (function(c, m) {
      for (var k = c.suspendedLanes, I = c.pingedLanes, A = c.expirationTimes, q = c.pendingLanes; 0 < q; ) {
        var G = 31 - Kr(q), oe = 1 << G, Z = A[G];
        Z === -1 ? oe & k && !(oe & I) || (A[G] = Ip(oe, m)) : Z <= m && (c.expiredLanes |= oe), q &= ~oe;
      }
    })(t, r);
    var u = hl(t, t === rt ? gt : 0);
    if (u === 0) o !== null && pa(o), t.callbackNode = null, t.callbackPriority = 0;
    else if (r = u & -u, t.callbackPriority !== r) {
      if (o != null && pa(o), r === 1) t.tag === 0 ? function(c) {
        qu = !0, Xd(c);
      }(xm.bind(null, t)) : Xd(xm.bind(null, t)), Qp(function() {
        !(6 & Pn) && ea();
      }), o = null;
      else {
        switch (tc(u)) {
          case 1:
            o = Gs;
            break;
          case 4:
            o = hd;
            break;
          case 16:
          default:
            o = pl;
            break;
          case 536870912:
            o = Ru;
        }
        o = jc(o, su.bind(null, t));
      }
      t.callbackPriority = r, t.callbackNode = o;
    }
  }
  function su(t, r) {
    if (hs = -1, vs = 0, 6 & Pn) throw Error(y(327));
    var o = t.callbackNode;
    if (Jo() && t.callbackNode !== o) return null;
    var u = hl(t, t === rt ? gt : 0);
    if (u === 0) return null;
    if (30 & u || u & t.expiredLanes || r) r = ks(t, u);
    else {
      r = u;
      var c = Pn;
      Pn |= 2;
      var m = Tm();
      for (rt === t && gt === r || (ja = null, Yo = pt() + 500, Hi(t, r)); ; ) try {
        cv();
        break;
      } catch (I) {
        Lf(t, I);
      }
      La(), $o.current = m, Pn = c, Qn !== null ? r = 0 : (rt = null, gt = 0, r = dt);
    }
    if (r !== 0) {
      if (r === 2 && (c = vd(t)) !== 0 && (u = c, r = gs(t, c)), r === 1) throw o = qo, Hi(t, 0), Go(t, u), Nt(t, pt()), o;
      if (r === 6) Go(t, u);
      else {
        if (c = t.current.alternate, !(30 & u || function(I) {
          for (var A = I; ; ) {
            if (16384 & A.flags) {
              var q = A.updateQueue;
              if (q !== null && (q = q.stores) !== null) for (var G = 0; G < q.length; G++) {
                var oe = q[G], Z = oe.getSnapshot;
                oe = oe.value;
                try {
                  if (!Lr(Z(), oe)) return !1;
                } catch {
                  return !1;
                }
              }
            }
            if (q = A.child, 16384 & A.subtreeFlags && q !== null) q.return = A, A = q;
            else {
              if (A === I) break;
              for (; A.sibling === null; ) {
                if (A.return === null || A.return === I) return !0;
                A = A.return;
              }
              A.sibling.return = A.return, A = A.sibling;
            }
          }
          return !0;
        }(c) || (r = ks(t, u), r === 2 && (m = vd(t), m !== 0 && (u = m, r = gs(t, m))), r !== 1))) throw o = qo, Hi(t, 0), Go(t, u), Nt(t, pt()), o;
        switch (t.finishedWork = c, t.finishedLanes = u, r) {
          case 0:
          case 1:
            throw Error(y(345));
          case 2:
          case 5:
            $i(t, Ar, ja);
            break;
          case 3:
            if (Go(t, u), (130023424 & u) === u && 10 < (r = Df + 500 - pt())) {
              if (hl(t, 0) !== 0) break;
              if (((c = t.suspendedLanes) & u) !== u) {
                Rt(), t.pingedLanes |= t.suspendedLanes & c;
                break;
              }
              t.timeoutHandle = wc($i.bind(null, t, Ar, ja), r);
              break;
            }
            $i(t, Ar, ja);
            break;
          case 4:
            if (Go(t, u), (4194240 & u) === u) break;
            for (r = t.eventTimes, c = -1; 0 < u; ) {
              var k = 31 - Kr(u);
              m = 1 << k, (k = r[k]) > c && (c = k), u &= ~m;
            }
            if (u = c, 10 < (u = (120 > (u = pt() - u) ? 120 : 480 > u ? 480 : 1080 > u ? 1080 : 1920 > u ? 1920 : 3e3 > u ? 3e3 : 4320 > u ? 4320 : 1960 * _r(u / 1960)) - u)) {
              t.timeoutHandle = wc($i.bind(null, t, Ar, ja), u);
              break;
            }
            $i(t, Ar, ja);
            break;
          default:
            throw Error(y(329));
        }
      }
    }
    return Nt(t, pt()), t.callbackNode === o ? su.bind(null, t) : null;
  }
  function gs(t, r) {
    var o = ds;
    return t.current.memoizedState.isDehydrated && (Hi(t, r).flags |= 256), (t = ks(t, r)) !== 2 && (r = Ar, Ar = o, r !== null && ys(r)), t;
  }
  function ys(t) {
    Ar === null ? Ar = t : Ar.push.apply(Ar, t);
  }
  function Go(t, r) {
    for (r &= ~lu, r &= ~Fc, t.suspendedLanes |= r, t.pingedLanes &= ~r, t = t.expirationTimes; 0 < r; ) {
      var o = 31 - Kr(r), u = 1 << o;
      t[o] = -1, r &= ~u;
    }
  }
  function xm(t) {
    if (6 & Pn) throw Error(y(327));
    Jo();
    var r = hl(t, 0);
    if (!(1 & r)) return Nt(t, pt()), null;
    var o = ks(t, r);
    if (t.tag !== 0 && o === 2) {
      var u = vd(t);
      u !== 0 && (r = u, o = gs(t, u));
    }
    if (o === 1) throw o = qo, Hi(t, 0), Go(t, r), Nt(t, pt()), o;
    if (o === 6) throw Error(y(345));
    return t.finishedWork = t.current.alternate, t.finishedLanes = r, $i(t, Ar, ja), Nt(t, pt()), null;
  }
  function bs(t, r) {
    var o = Pn;
    Pn |= 1;
    try {
      return t(r);
    } finally {
      (Pn = o) === 0 && (Yo = pt() + 500, qu && ea());
    }
  }
  function Vi(t) {
    Xo !== null && Xo.tag === 0 && !(6 & Pn) && Jo();
    var r = Pn;
    Pn |= 1;
    var o = Et.transition, u = On;
    try {
      if (Et.transition = null, On = 1, t) return t();
    } finally {
      On = u, Et.transition = o, !(6 & (Pn = r)) && ea();
    }
  }
  function ws() {
    zr = iu.current, $n(iu);
  }
  function Hi(t, r) {
    t.finishedWork = null, t.finishedLanes = 0;
    var o = t.timeoutHandle;
    if (o !== -1 && (t.timeoutHandle = -1, lv(o)), Qn !== null) for (o = Qn.return; o !== null; ) {
      var u = o;
      switch (zl(u), u.tag) {
        case 1:
          (u = u.type.childContextTypes) != null && Ll();
          break;
        case 3:
          za(), $n(Yt), $n(Pt), rf();
          break;
        case 5:
          Wo(u);
          break;
        case 4:
          za();
          break;
        case 13:
        case 19:
          $n(nt);
          break;
        case 10:
          Al(u.type._context);
          break;
        case 22:
        case 23:
          ws();
      }
      o = o.return;
    }
    if (rt = t, Qn = t = Zo(t.current, null), gt = zr = r, dt = 0, qo = null, lu = Fc = Qo = 0, Ar = ds = null, io !== null) {
      for (r = 0; r < io.length; r++) if ((u = (o = io[r]).interleaved) !== null) {
        o.interleaved = null;
        var c = u.next, m = o.pending;
        if (m !== null) {
          var k = m.next;
          m.next = c, u.next = k;
        }
        o.pending = u;
      }
      io = null;
    }
    return t;
  }
  function Lf(t, r) {
    for (; ; ) {
      var o = Qn;
      try {
        if (La(), Vl.current = as, zi) {
          for (var u = tt.memoizedState; u !== null; ) {
            var c = u.queue;
            c !== null && (c.pending = null), u = u.next;
          }
          zi = !1;
        }
        if (so = 0, vt = ct = tt = null, $l = !1, ql = 0, ou.current = null, o === null || o.return === null) {
          dt = 1, qo = r, Qn = null;
          break;
        }
        e: {
          var m = t, k = o.return, I = o, A = r;
          if (r = gt, I.flags |= 32768, A !== null && typeof A == "object" && typeof A.then == "function") {
            var q = A, G = I, oe = G.tag;
            if (!(1 & G.mode || oe !== 0 && oe !== 11 && oe !== 15)) {
              var Z = G.alternate;
              Z ? (G.updateQueue = Z.updateQueue, G.memoizedState = Z.memoizedState, G.lanes = Z.lanes) : (G.updateQueue = null, G.memoizedState = null);
            }
            var ie = pm(k);
            if (ie !== null) {
              ie.flags &= -257, mm(ie, k, I, 0, r), 1 & ie.mode && fm(m, q, r), A = q;
              var ye = (r = ie).updateQueue;
              if (ye === null) {
                var ke = /* @__PURE__ */ new Set();
                ke.add(A), r.updateQueue = ke;
              } else ye.add(A);
              break e;
            }
            if (!(1 & r)) {
              fm(m, q, r), Mf();
              break e;
            }
            A = Error(y(426));
          } else if (Ln && 1 & I.mode) {
            var te = pm(k);
            if (te !== null) {
              !(65536 & te.flags) && (te.flags |= 256), mm(te, k, I, 0, r), Oi(Yl(A, I));
              break e;
            }
          }
          m = A = Yl(A, I), dt !== 4 && (dt = 2), ds === null ? ds = [m] : ds.push(m), m = k;
          do {
            switch (m.tag) {
              case 3:
                m.flags |= 65536, r &= -r, m.lanes |= r, Fl(m, gf(0, A, r));
                break e;
              case 1:
                I = A;
                var H = m.type, ee = m.stateNode;
                if (!(128 & m.flags || typeof H.getDerivedStateFromError != "function" && (ee === null || typeof ee.componentDidCatch != "function" || ra !== null && ra.has(ee)))) {
                  m.flags |= 65536, r &= -r, m.lanes |= r, Fl(m, yf(m, I, r));
                  break e;
                }
            }
            m = m.return;
          } while (m !== null);
        }
        _m(o);
      } catch (de) {
        r = de, Qn === o && o !== null && (Qn = o = o.return);
        continue;
      }
      break;
    }
  }
  function Tm() {
    var t = $o.current;
    return $o.current = as, t === null ? as : t;
  }
  function Mf() {
    dt !== 0 && dt !== 3 && dt !== 2 || (dt = 4), rt === null || !(268435455 & Qo) && !(268435455 & Fc) || Go(rt, gt);
  }
  function ks(t, r) {
    var o = Pn;
    Pn |= 2;
    var u = Tm();
    for (rt === t && gt === r || (ja = null, Hi(t, r)); ; ) try {
      zf();
      break;
    } catch (c) {
      Lf(t, c);
    }
    if (La(), Pn = o, $o.current = u, Qn !== null) throw Error(y(261));
    return rt = null, gt = 0, dt;
  }
  function zf() {
    for (; Qn !== null; ) Cm(Qn);
  }
  function cv() {
    for (; Qn !== null && !Yr(); ) Cm(Qn);
  }
  function Cm(t) {
    var r = If(t.alternate, t, zr);
    t.memoizedProps = t.pendingProps, r === null ? _m(t) : Qn = r, ou.current = null;
  }
  function _m(t) {
    var r = t;
    do {
      var o = r.alternate;
      if (t = r.return, 32768 & r.flags) {
        if ((o = km(o, r)) !== null) return o.flags &= 32767, void (Qn = o);
        if (t === null) return dt = 6, void (Qn = null);
        t.flags |= 32768, t.subtreeFlags = 0, t.deletions = null;
      } else if ((o = wm(o, r, zr)) !== null) return void (Qn = o);
      if ((r = r.sibling) !== null) return void (Qn = r);
      Qn = r = t;
    } while (r !== null);
    dt === 0 && (dt = 5);
  }
  function $i(t, r, o) {
    var u = On, c = Et.transition;
    try {
      Et.transition = null, On = 1, function(m, k, I, A) {
        do
          Jo();
        while (Xo !== null);
        if (6 & Pn) throw Error(y(327));
        I = m.finishedWork;
        var q = m.finishedLanes;
        if (I === null) return null;
        if (m.finishedWork = null, m.finishedLanes = 0, I === m.current) throw Error(y(177));
        m.callbackNode = null, m.callbackPriority = 0;
        var G = I.lanes | I.childLanes;
        if (function(ie, ye) {
          var ke = ie.pendingLanes & ~ye;
          ie.pendingLanes = ye, ie.suspendedLanes = 0, ie.pingedLanes = 0, ie.expiredLanes &= ye, ie.mutableReadLanes &= ye, ie.entangledLanes &= ye, ye = ie.entanglements;
          var te = ie.eventTimes;
          for (ie = ie.expirationTimes; 0 < ke; ) {
            var H = 31 - Kr(ke), ee = 1 << H;
            ye[H] = 0, te[H] = -1, ie[H] = -1, ke &= ~ee;
          }
        }(m, G), m === rt && (Qn = rt = null, gt = 0), !(2064 & I.subtreeFlags) && !(2064 & I.flags) || Ko || (Ko = !0, jc(pl, function() {
          return Jo(), null;
        })), G = !!(15990 & I.flags), !!(15990 & I.subtreeFlags) || G) {
          G = Et.transition, Et.transition = null;
          var oe = On;
          On = 1;
          var Z = Pn;
          Pn |= 4, ou.current = null, function(ie, ye) {
            if (Io = kl, Co(ie = Ad())) {
              if ("selectionStart" in ie) var ke = { start: ie.selectionStart, end: ie.selectionEnd };
              else e: {
                var te = (ke = (ke = ie.ownerDocument) && ke.defaultView || window).getSelection && ke.getSelection();
                if (te && te.rangeCount !== 0) {
                  ke = te.anchorNode;
                  var H = te.anchorOffset, ee = te.focusNode;
                  te = te.focusOffset;
                  try {
                    ke.nodeType, ee.nodeType;
                  } catch {
                    ke = null;
                    break e;
                  }
                  var de = 0, Ue = -1, on = -1, Ne = 0, Je = 0, en = ie, Xe = null;
                  n: for (; ; ) {
                    for (var wn; en !== ke || H !== 0 && en.nodeType !== 3 || (Ue = de + H), en !== ee || te !== 0 && en.nodeType !== 3 || (on = de + te), en.nodeType === 3 && (de += en.nodeValue.length), (wn = en.firstChild) !== null; ) Xe = en, en = wn;
                    for (; ; ) {
                      if (en === ie) break n;
                      if (Xe === ke && ++Ne === H && (Ue = de), Xe === ee && ++Je === te && (on = de), (wn = en.nextSibling) !== null) break;
                      Xe = (en = Xe).parentNode;
                    }
                    en = wn;
                  }
                  ke = Ue === -1 || on === -1 ? null : { start: Ue, end: on };
                } else ke = null;
              }
              ke = ke || { start: 0, end: 0 };
            } else ke = null;
            for (Yd = { focusedElem: ie, selectionRange: ke }, kl = !1, Fe = ye; Fe !== null; ) if (ie = (ye = Fe).child, 1028 & ye.subtreeFlags && ie !== null) ie.return = ye, Fe = ie;
            else for (; Fe !== null; ) {
              ye = Fe;
              try {
                var mu = ye.alternate;
                if (1024 & ye.flags) switch (ye.tag) {
                  case 0:
                  case 11:
                  case 15:
                  case 5:
                  case 6:
                  case 4:
                  case 17:
                    break;
                  case 1:
                    if (mu !== null) {
                      var ri = mu.memoizedProps, Pm = mu.memoizedState, Wc = ye.stateNode, Vc = Wc.getSnapshotBeforeUpdate(ye.elementType === ye.type ? ri : ka(ye.type, ri), Pm);
                      Wc.__reactInternalSnapshotBeforeUpdate = Vc;
                    }
                    break;
                  case 3:
                    var ai = ye.stateNode.containerInfo;
                    ai.nodeType === 1 ? ai.textContent = "" : ai.nodeType === 9 && ai.documentElement && ai.removeChild(ai.documentElement);
                    break;
                  default:
                    throw Error(y(163));
                }
              } catch (oi) {
                Yn(ye, ye.return, oi);
              }
              if ((ie = ye.sibling) !== null) {
                ie.return = ye.return, Fe = ie;
                break;
              }
              Fe = ye.return;
            }
            mu = nu, nu = !1;
          }(m, I), Pf(I, m), _o(Yd), kl = !!Io, Yd = Io = null, m.current = I, Uc(I), Eo(), Pn = Z, On = oe, Et.transition = G;
        } else m.current = I;
        if (Ko && (Ko = !1, Xo = m, ps = q), G = m.pendingLanes, G === 0 && (ra = null), function(ie) {
          if (ma && typeof ma.onCommitFiberRoot == "function") try {
            ma.onCommitFiberRoot(Nu, ie, void 0, !(128 & ~ie.current.flags));
          } catch {
          }
        }(I.stateNode), Nt(m, pt()), k !== null) for (A = m.onRecoverableError, I = 0; I < k.length; I++) q = k[I], A(q.value, { componentStack: q.stack, digest: q.digest });
        if (uu) throw uu = !1, m = fs, fs = null, m;
        1 & ps && m.tag !== 0 && Jo(), G = m.pendingLanes, 1 & G ? m === Of ? ms++ : (ms = 0, Of = m) : ms = 0, ea();
      }(t, r, o, u);
    } finally {
      Et.transition = c, On = u;
    }
    return null;
  }
  function Jo() {
    if (Xo !== null) {
      var t = tc(ps), r = Et.transition, o = On;
      try {
        if (Et.transition = null, On = 16 > t ? 16 : t, Xo === null) var u = !1;
        else {
          if (t = Xo, Xo = null, ps = 0, 6 & Pn) throw Error(y(331));
          var c = Pn;
          for (Pn |= 4, Fe = t.current; Fe !== null; ) {
            var m = Fe, k = m.child;
            if (16 & Fe.flags) {
              var I = m.deletions;
              if (I !== null) {
                for (var A = 0; A < I.length; A++) {
                  var q = I[A];
                  for (Fe = q; Fe !== null; ) {
                    var G = Fe;
                    switch (G.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Bi(8, G, m);
                    }
                    var oe = G.child;
                    if (oe !== null) oe.return = G, Fe = oe;
                    else for (; Fe !== null; ) {
                      var Z = (G = Fe).sibling, ie = G.return;
                      if (_f(G), G === q) {
                        Fe = null;
                        break;
                      }
                      if (Z !== null) {
                        Z.return = ie, Fe = Z;
                        break;
                      }
                      Fe = ie;
                    }
                  }
                }
                var ye = m.alternate;
                if (ye !== null) {
                  var ke = ye.child;
                  if (ke !== null) {
                    ye.child = null;
                    do {
                      var te = ke.sibling;
                      ke.sibling = null, ke = te;
                    } while (ke !== null);
                  }
                }
                Fe = m;
              }
            }
            if (2064 & m.subtreeFlags && k !== null) k.return = m, Fe = k;
            else e: for (; Fe !== null; ) {
              if (2048 & (m = Fe).flags) switch (m.tag) {
                case 0:
                case 11:
                case 15:
                  Bi(9, m, m.return);
              }
              var H = m.sibling;
              if (H !== null) {
                H.return = m.return, Fe = H;
                break e;
              }
              Fe = m.return;
            }
          }
          var ee = t.current;
          for (Fe = ee; Fe !== null; ) {
            var de = (k = Fe).child;
            if (2064 & k.subtreeFlags && de !== null) de.return = k, Fe = de;
            else e: for (k = ee; Fe !== null; ) {
              if (2048 & (I = Fe).flags) try {
                switch (I.tag) {
                  case 0:
                  case 11:
                  case 15:
                    us(9, I);
                }
              } catch (on) {
                Yn(I, I.return, on);
              }
              if (I === k) {
                Fe = null;
                break e;
              }
              var Ue = I.sibling;
              if (Ue !== null) {
                Ue.return = I.return, Fe = Ue;
                break e;
              }
              Fe = I.return;
            }
          }
          if (Pn = c, ea(), ma && typeof ma.onPostCommitFiberRoot == "function") try {
            ma.onPostCommitFiberRoot(Nu, t);
          } catch {
          }
          u = !0;
        }
        return u;
      } finally {
        On = o, Et.transition = r;
      }
    }
    return !1;
  }
  function Ss(t, r, o) {
    t = cr(t, r = gf(0, r = Yl(o, r), 1), 1), r = Rt(), t !== null && (vl(t, 1, r), Nt(t, r));
  }
  function Yn(t, r, o) {
    if (t.tag === 3) Ss(t, t, o);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        Ss(r, t, o);
        break;
      }
      if (r.tag === 1) {
        var u = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (ra === null || !ra.has(u))) {
          r = cr(r, t = yf(r, t = Yl(o, t), 1), 1), t = Rt(), r !== null && (vl(r, 1, t), Nt(r, t));
          break;
        }
      }
      r = r.return;
    }
  }
  function dv(t, r, o) {
    var u = t.pingCache;
    u !== null && u.delete(r), r = Rt(), t.pingedLanes |= t.suspendedLanes & o, rt === t && (gt & o) === o && (dt === 4 || dt === 3 && (130023424 & gt) === gt && 500 > pt() - Df ? Hi(t, 0) : lu |= o), Nt(t, r);
  }
  function Af(t, r) {
    r === 0 && (1 & t.mode ? (r = Js, !(130023424 & (Js <<= 1)) && (Js = 4194304)) : r = 1);
    var o = Rt();
    (t = lo(t, r)) !== null && (vl(t, r, o), Nt(t, o));
  }
  function cu(t) {
    var r = t.memoizedState, o = 0;
    r !== null && (o = r.retryLane), Af(t, o);
  }
  function du(t, r) {
    var o = 0;
    switch (t.tag) {
      case 13:
        var u = t.stateNode, c = t.memoizedState;
        c !== null && (o = c.retryLane);
        break;
      case 19:
        u = t.stateNode;
        break;
      default:
        throw Error(y(314));
    }
    u !== null && u.delete(r), Af(t, o);
  }
  function jc(t, r) {
    return ut(t, r);
  }
  function Es(t, r, o, u) {
    this.tag = t, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Rr(t, r, o, u) {
    return new Es(t, r, o, u);
  }
  function Uf(t) {
    return !(!(t = t.prototype) || !t.isReactComponent);
  }
  function Zo(t, r) {
    var o = t.alternate;
    return o === null ? ((o = Rr(t.tag, r, t.key, t.mode)).elementType = t.elementType, o.type = t.type, o.stateNode = t.stateNode, o.alternate = t, t.alternate = o) : (o.pendingProps = r, o.type = t.type, o.flags = 0, o.subtreeFlags = 0, o.deletions = null), o.flags = 14680064 & t.flags, o.childLanes = t.childLanes, o.lanes = t.lanes, o.child = t.child, o.memoizedProps = t.memoizedProps, o.memoizedState = t.memoizedState, o.updateQueue = t.updateQueue, r = t.dependencies, o.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, o.sibling = t.sibling, o.index = t.index, o.ref = t.ref, o;
  }
  function ei(t, r, o, u, c, m) {
    var k = 2;
    if (u = t, typeof t == "function") Uf(t) && (k = 1);
    else if (typeof t == "string") k = 5;
    else e: switch (t) {
      case We:
        return Ba(o.children, c, m, r);
      case xe:
        k = 8, c |= 8;
        break;
      case Le:
        return (t = Rr(12, o, r, 2 | c)).elementType = Le, t.lanes = m, t;
      case pn:
        return (t = Rr(13, o, r, c)).elementType = pn, t.lanes = m, t;
      case Ze:
        return (t = Rr(19, o, r, c)).elementType = Ze, t.lanes = m, t;
      case Ve:
        return xs(o, c, m, r);
      default:
        if (typeof t == "object" && t !== null) switch (t.$$typeof) {
          case be:
            k = 10;
            break e;
          case ue:
            k = 9;
            break e;
          case nn:
            k = 11;
            break e;
          case gn:
            k = 14;
            break e;
          case ve:
            k = 16, u = null;
            break e;
        }
        throw Error(y(130, t == null ? t : typeof t, ""));
    }
    return (r = Rr(k, o, r, c)).elementType = t, r.type = u, r.lanes = m, r;
  }
  function Ba(t, r, o, u) {
    return (t = Rr(7, t, u, r)).lanes = o, t;
  }
  function xs(t, r, o, u) {
    return (t = Rr(22, t, u, r)).elementType = Ve, t.lanes = o, t.stateNode = { isHidden: !1 }, t;
  }
  function qi(t, r, o) {
    return (t = Rr(6, t, null, r)).lanes = o, t;
  }
  function co(t, r, o) {
    return (r = Rr(4, t.children !== null ? t.children : [], t.key, r)).lanes = o, r.stateNode = { containerInfo: t.containerInfo, pendingChildren: null, implementation: t.implementation }, r;
  }
  function ni(t, r, o, u, c) {
    this.tag = r, this.containerInfo = t, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ec(0), this.expirationTimes = ec(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ec(0), this.identifierPrefix = u, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function ti(t, r, o, u, c, m, k, I, A) {
    return t = new ni(t, r, o, I, A), r === 1 ? (r = 1, m === !0 && (r |= 8)) : r = 0, m = Rr(3, null, null, r), t.current = m, m.stateNode = t, m.memoizedState = { element: u, isDehydrated: o, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ul(m), t;
  }
  function Ts(t) {
    if (!t) return Oa;
    e: {
      if (kt(t = t._reactInternals) !== t || t.tag !== 1) throw Error(y(170));
      var r = t;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (ir(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(y(171));
    }
    if (t.tag === 1) {
      var o = t.type;
      if (ir(o)) return kc(t, o, r);
    }
    return r;
  }
  function Bc(t, r, o, u, c, m, k, I, A) {
    return (t = ti(o, u, !0, t, 0, m, 0, I, A)).context = Ts(null), o = t.current, (m = Kt(u = Rt(), c = xa(o))).callback = r ?? null, cr(o, m, c), t.current.lanes = c, vl(t, c, u), Nt(t, u), t;
  }
  function Cs(t, r, o, u) {
    var c = r.current, m = Rt(), k = xa(c);
    return o = Ts(o), r.context === null ? r.context = o : r.pendingContext = o, (r = Kt(m, k)).payload = { element: t }, (u = u === void 0 ? null : u) !== null && (r.callback = u), (t = cr(c, r, k)) !== null && (Pr(t, c, k, m), Fo(t, c, k)), k;
  }
  function _s(t) {
    return (t = t.current).child ? (t.child.tag, t.child.stateNode) : null;
  }
  function Ps(t, r) {
    if ((t = t.memoizedState) !== null && t.dehydrated !== null) {
      var o = t.retryLane;
      t.retryLane = o !== 0 && o < r ? o : r;
    }
  }
  function Ur(t, r) {
    Ps(t, r), (t = t.alternate) && Ps(t, r);
  }
  If = function(t, r, o) {
    if (t !== null) if (t.memoizedProps !== r.pendingProps || Yt.current) xr = !0;
    else {
      if (!(t.lanes & o || 128 & r.flags)) return xr = !1, function(oe, Z, ie) {
        switch (Z.tag) {
          case 3:
            vm(Z), Ao();
            break;
          case 5:
            Wl(Z);
            break;
          case 1:
            ir(Z.type) && Ml(Z);
            break;
          case 4:
            nf(Z, Z.stateNode.containerInfo);
            break;
          case 10:
            var ye = Z.type._context, ke = Z.memoizedProps.value;
            jn(Yu, ye._currentValue), ye._currentValue = ke;
            break;
          case 13:
            if ((ye = Z.memoizedState) !== null) return ye.dehydrated !== null ? (jn(nt, 1 & nt.current), Z.flags |= 128, null) : ie & Z.child.childLanes ? zc(oe, Z, ie) : (jn(nt, 1 & nt.current), (oe = Ua(oe, Z, ie)) !== null ? oe.sibling : null);
            jn(nt, 1 & nt.current);
            break;
          case 19:
            if (ye = !!(ie & Z.childLanes), 128 & oe.flags) {
              if (ye) return ji(oe, Z, ie);
              Z.flags |= 128;
            }
            if ((ke = Z.memoizedState) !== null && (ke.rendering = null, ke.tail = null, ke.lastEffect = null), jn(nt, nt.current), ye) break;
            return null;
          case 22:
          case 23:
            return Z.lanes = 0, hm(oe, Z, ie);
        }
        return Ua(oe, Z, ie);
      }(t, r, o);
      xr = !!(131072 & t.flags);
    }
    else xr = !1, Ln && 1048576 & r.flags && xc(r, Bn, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var u = r.type;
        Zl(t, r), t = r.pendingProps;
        var c = Lo(r, Pt.current);
        sr(r, o), c = dr(null, r, u, t, c, o);
        var m = Ju();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, ir(u) ? (m = !0, Ml(r)) : m = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Ul(r), c.updater = Lc, r.stateNode = c, c._reactInternals = r, Ui(r, u, t, o), r = Mc(null, r, u, !0, m, o)) : (r.tag = 0, Ln && m && Tc(r), Tr(null, r, c, o), r = r.child), r;
      case 16:
        u = r.elementType;
        e: {
          switch (Zl(t, r), t = r.pendingProps, u = (c = u._init)(u._payload), r.type = u, c = r.tag = function(oe) {
            if (typeof oe == "function") return Uf(oe) ? 1 : 0;
            if (oe != null) {
              if ((oe = oe.$$typeof) === nn) return 11;
              if (oe === gn) return 14;
            }
            return 2;
          }(u), t = ka(u, t), c) {
            case 0:
              r = kf(null, r, u, t, o);
              break e;
            case 1:
              r = Sf(null, r, u, t, o);
              break e;
            case 11:
              r = Cr(null, r, u, t, o);
              break e;
            case 14:
              r = Xl(null, r, u, ka(u.type, t), o);
              break e;
          }
          throw Error(y(306, u, ""));
        }
        return r;
      case 0:
        return u = r.type, c = r.pendingProps, kf(t, r, u, c = r.elementType === u ? c : ka(u, c), o);
      case 1:
        return u = r.type, c = r.pendingProps, Sf(t, r, u, c = r.elementType === u ? c : ka(u, c), o);
      case 3:
        e: {
          if (vm(r), t === null) throw Error(y(387));
          u = r.pendingProps, c = (m = r.memoizedState).element, uo(t, r), wa(r, u, null, o);
          var k = r.memoizedState;
          if (u = k.element, m.isDehydrated) {
            if (m = { element: u, isDehydrated: !1, cache: k.cache, pendingSuspenseBoundaries: k.pendingSuspenseBoundaries, transitions: k.transitions }, r.updateQueue.baseState = m, r.memoizedState = m, 256 & r.flags) {
              r = gm(t, r, u, o, c = Yl(Error(y(423)), r));
              break e;
            }
            if (u !== c) {
              r = gm(t, r, u, o, c = Yl(Error(y(424)), r));
              break e;
            }
            for (Sr = zt(r.stateNode.containerInfo.firstChild), kr = r, Ln = !0, lr = null, o = ef(r, null, u, o), r.child = o; o; ) o.flags = -3 & o.flags | 4096, o = o.sibling;
          } else {
            if (Ao(), u === c) {
              r = Ua(t, r, o);
              break e;
            }
            Tr(t, r, u, o);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Wl(r), t === null && zo(r), u = r.type, c = r.pendingProps, m = t !== null ? t.memoizedProps : null, k = c.children, bc(u, c) ? k = null : m !== null && bc(u, m) && (r.flags |= 32), wf(t, r), Tr(t, r, k, o), r.child;
      case 6:
        return t === null && zo(r), null;
      case 13:
        return zc(t, r, o);
      case 4:
        return nf(r, r.stateNode.containerInfo), u = r.pendingProps, t === null ? r.child = Uo(r, null, u, o) : Tr(t, r, u, o), r.child;
      case 11:
        return u = r.type, c = r.pendingProps, Cr(t, r, u, c = r.elementType === u ? c : ka(u, c), o);
      case 7:
        return Tr(t, r, r.pendingProps, o), r.child;
      case 8:
      case 12:
        return Tr(t, r, r.pendingProps.children, o), r.child;
      case 10:
        e: {
          if (u = r.type._context, c = r.pendingProps, m = r.memoizedProps, k = c.value, jn(Yu, u._currentValue), u._currentValue = k, m !== null) if (Lr(m.value, k)) {
            if (m.children === c.children && !Yt.current) {
              r = Ua(t, r, o);
              break e;
            }
          } else for ((m = r.child) !== null && (m.return = r); m !== null; ) {
            var I = m.dependencies;
            if (I !== null) {
              k = m.child;
              for (var A = I.firstContext; A !== null; ) {
                if (A.context === u) {
                  if (m.tag === 1) {
                    (A = Kt(-1, o & -o)).tag = 2;
                    var q = m.updateQueue;
                    if (q !== null) {
                      var G = (q = q.shared).pending;
                      G === null ? A.next = A : (A.next = G.next, G.next = A), q.pending = A;
                    }
                  }
                  m.lanes |= o, (A = m.alternate) !== null && (A.lanes |= o), Mi(m.return, o, r), I.lanes |= o;
                  break;
                }
                A = A.next;
              }
            } else if (m.tag === 10) k = m.type === r.type ? null : m.child;
            else if (m.tag === 18) {
              if ((k = m.return) === null) throw Error(y(341));
              k.lanes |= o, (I = k.alternate) !== null && (I.lanes |= o), Mi(k, o, r), k = m.sibling;
            } else k = m.child;
            if (k !== null) k.return = m;
            else for (k = m; k !== null; ) {
              if (k === r) {
                k = null;
                break;
              }
              if ((m = k.sibling) !== null) {
                m.return = k.return, k = m;
                break;
              }
              k = k.return;
            }
            m = k;
          }
          Tr(t, r, c.children, o), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, u = r.pendingProps.children, sr(r, o), u = u(c = Vn(c)), r.flags |= 1, Tr(t, r, u, o), r.child;
      case 14:
        return c = ka(u = r.type, r.pendingProps), Xl(t, r, u, c = ka(u.type, c), o);
      case 15:
        return bf(t, r, r.type, r.pendingProps, o);
      case 17:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : ka(u, c), Zl(t, r), r.tag = 1, ir(u) ? (t = !0, Ml(r)) : t = !1, sr(r, o), hf(r, u, c), Ui(r, u, c, o), Mc(null, r, u, !0, t, o);
      case 19:
        return ji(t, r, o);
      case 22:
        return hm(t, r, o);
    }
    throw Error(y(156, r.tag));
  };
  var Rs = typeof reportError == "function" ? reportError : function(t) {
    console.error(t);
  };
  function Ns(t) {
    this._internalRoot = t;
  }
  function fu(t) {
    this._internalRoot = t;
  }
  function Ta(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function Ca(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11 && (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "));
  }
  function jt() {
  }
  function xt(t, r, o, u, c) {
    var m = o._reactRootContainer;
    if (m) {
      var k = m;
      if (typeof c == "function") {
        var I = c;
        c = function() {
          var A = _s(k);
          I.call(A);
        };
      }
      Cs(r, k, t, c);
    } else k = function(A, q, G, oe, Z) {
      if (Z) {
        if (typeof oe == "function") {
          var ie = oe;
          oe = function() {
            var H = _s(ye);
            ie.call(H);
          };
        }
        var ye = Bc(q, oe, A, 0, null, !1, 0, "", jt);
        return A._reactRootContainer = ye, A[Ke] = ye.current, Wu(A.nodeType === 8 ? A.parentNode : A), Vi(), ye;
      }
      for (; Z = A.lastChild; ) A.removeChild(Z);
      if (typeof oe == "function") {
        var ke = oe;
        oe = function() {
          var H = _s(te);
          ke.call(H);
        };
      }
      var te = ti(A, 0, !1, null, 0, !1, 0, "", jt);
      return A._reactRootContainer = te, A[Ke] = te.current, Wu(A.nodeType === 8 ? A.parentNode : A), Vi(function() {
        Cs(q, te, G, oe);
      }), te;
    }(o, r, t, c, u);
    return _s(k);
  }
  fu.prototype.render = Ns.prototype.render = function(t) {
    var r = this._internalRoot;
    if (r === null) throw Error(y(409));
    Cs(t, r, null, null);
  }, fu.prototype.unmount = Ns.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var r = t.containerInfo;
      Vi(function() {
        Cs(null, t, null, null);
      }), r[Ke] = null;
    }
  }, fu.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var r = yd();
      t = { blockedOn: null, target: t, priority: r };
      for (var o = 0; o < qt.length && r !== 0 && r < qt[o].priority; o++) ;
      qt.splice(o, 0, t), o === 0 && ac(t);
    }
  }, Dp = function(t) {
    switch (t.tag) {
      case 3:
        var r = t.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var o = ml(r.pendingLanes);
          o !== 0 && (nc(r, 1 | o), Nt(r, pt()), !(6 & Pn) && (Yo = pt() + 500, ea()));
        }
        break;
      case 13:
        Vi(function() {
          var u = lo(t, 1);
          if (u !== null) {
            var c = Rt();
            Pr(u, t, 1, c);
          }
        }), Ur(t, 1);
    }
  }, Mt = function(t) {
    if (t.tag === 13) {
      var r = lo(t, 134217728);
      r !== null && Pr(r, t, 134217728, Rt()), Ur(t, 134217728);
    }
  }, gd = function(t) {
    if (t.tag === 13) {
      var r = xa(t), o = lo(t, r);
      o !== null && Pr(o, t, r, Rt()), Ur(t, r);
    }
  }, yd = function() {
    return On;
  }, hi = function(t, r) {
    var o = On;
    try {
      return On = t, r();
    } finally {
      On = o;
    }
  }, Cn = function(t, r, o) {
    switch (r) {
      case "input":
        if (gr(t, o), r = o.name, o.type === "radio" && r != null) {
          for (o = t; o.parentNode; ) o = o.parentNode;
          for (o = o.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < o.length; r++) {
            var u = o[r];
            if (u !== t && u.form === t.form) {
              var c = Ol(u);
              if (!c) throw Error(y(90));
              rn(u), gr(u, c);
            }
          }
        }
        break;
      case "textarea":
        yn(t, o);
        break;
      case "select":
        (r = o.value) != null && B(t, !!o.multiple, r, !1);
    }
  }, Hn = bs, Ht = Vi;
  var Fr = { usingClientEntryPoint: !1, Events: [to, va, Ol, An, et, bs] }, jr = { findFiberByHostInstance: Qt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Wa = { bundleType: jr.bundleType, version: jr.version, rendererPackageName: jr.rendererPackageName, rendererConfig: jr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ne.ReactCurrentDispatcher, findHostInstanceByFiber: function(t) {
    return (t = _p(t)) === null ? null : t.stateNode;
  }, findFiberByHostInstance: jr.findFiberByHostInstance || function() {
    return null;
  }, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var pu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!pu.isDisabled && pu.supportsFiber) try {
      Nu = pu.inject(Wa), ma = pu;
    } catch {
    }
  }
  return ca.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Fr, ca.createPortal = function(t, r) {
    var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Ta(r)) throw Error(y(200));
    return function(u, c, m) {
      var k = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return { $$typeof: Ie, key: k == null ? null : "" + k, children: u, containerInfo: c, implementation: m };
    }(t, r, null, o);
  }, ca.createRoot = function(t, r) {
    if (!Ta(t)) throw Error(y(299));
    var o = !1, u = "", c = Rs;
    return r != null && (r.unstable_strictMode === !0 && (o = !0), r.identifierPrefix !== void 0 && (u = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = ti(t, 1, !1, null, 0, o, 0, u, c), t[Ke] = r.current, Wu(t.nodeType === 8 ? t.parentNode : t), new Ns(r);
  }, ca.findDOMNode = function(t) {
    if (t == null) return null;
    if (t.nodeType === 1) return t;
    var r = t._reactInternals;
    if (r === void 0)
      throw typeof t.render == "function" ? Error(y(188)) : (t = Object.keys(t).join(","), Error(y(268, t)));
    return t = (t = _p(r)) === null ? null : t.stateNode;
  }, ca.flushSync = function(t) {
    return Vi(t);
  }, ca.hydrate = function(t, r, o) {
    if (!Ca(r)) throw Error(y(200));
    return xt(null, t, r, !0, o);
  }, ca.hydrateRoot = function(t, r, o) {
    if (!Ta(t)) throw Error(y(405));
    var u = o != null && o.hydratedSources || null, c = !1, m = "", k = Rs;
    if (o != null && (o.unstable_strictMode === !0 && (c = !0), o.identifierPrefix !== void 0 && (m = o.identifierPrefix), o.onRecoverableError !== void 0 && (k = o.onRecoverableError)), r = Bc(r, null, t, 1, o ?? null, c, 0, m, k), t[Ke] = r.current, Wu(t), u) for (t = 0; t < u.length; t++) c = (c = (o = u[t])._getVersion)(o._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [o, c] : r.mutableSourceEagerHydrationData.push(o, c);
    return new fu(r);
  }, ca.render = function(t, r, o) {
    if (!Ca(r)) throw Error(y(200));
    return xt(null, t, r, !1, o);
  }, ca.unmountComponentAtNode = function(t) {
    if (!Ca(t)) throw Error(y(40));
    return !!t._reactRootContainer && (Vi(function() {
      xt(null, null, t, !1, function() {
        t._reactRootContainer = null, t[Ke] = null;
      });
    }), !0);
  }, ca.unstable_batchedUpdates = bs, ca.unstable_renderSubtreeIntoContainer = function(t, r, o, u) {
    if (!Ca(o)) throw Error(y(200));
    if (t == null || t._reactInternals === void 0) throw Error(y(38));
    return xt(t, r, o, !1, u);
  }, ca.version = "18.3.1-next-f1338f8080-20240426", ca;
}
var e1, n1, t1, Pa = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function VS() {
  return e1 || (e1 = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var f = Qh, h = Y1(), y = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, _ = !1;
    function C(e) {
      if (!_) {
        for (var n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) a[i - 1] = arguments[i];
        U("warn", e, a);
      }
    }
    function g(e) {
      if (!_) {
        for (var n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) a[i - 1] = arguments[i];
        U("error", e, a);
      }
    }
    function U(e, n, a) {
      var i = y.ReactDebugCurrentFrame.getStackAddendum();
      i !== "" && (n += "%s", a = a.concat([i]));
      var l = a.map(function(s) {
        return String(s);
      });
      l.unshift("Warning: " + n), Function.prototype.apply.call(console[e], console, l);
    }
    var j = 10, S = 11, T = 12, M = 13, F = 14, z = 15, Y = 17, ae = 18, re = 19, $ = 21, ne = 22, ge = 23, Ie = !1, We = /* @__PURE__ */ new Set(), xe = {}, Le = {};
    function be(e, n) {
      ue(e, n), ue(e + "Capture", n);
    }
    function ue(e, n) {
      xe[e] && g("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), xe[e] = n;
      var a = e.toLowerCase();
      Le[a] = e, e === "onDoubleClick" && (Le.ondblclick = e);
      for (var i = 0; i < n.length; i++) We.add(n[i]);
    }
    var nn = !(typeof window > "u" || window.document === void 0 || window.document.createElement === void 0), pn = Object.prototype.hasOwnProperty;
    function Ze(e) {
      return typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
    }
    function gn(e) {
      try {
        return ve(e), !1;
      } catch {
        return !0;
      }
    }
    function ve(e) {
      return "" + e;
    }
    function Ve(e, n) {
      if (gn(e)) return g("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", n, Ze(e)), ve(e);
    }
    function mn(e) {
      if (gn(e)) return g("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Ze(e)), ve(e);
    }
    var he = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", an = he + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", ce = new RegExp("^[" + he + "][" + an + "]*$"), De = {}, Ee = {};
    function je(e) {
      return !!pn.call(Ee, e) || !pn.call(De, e) && (ce.test(e) ? (Ee[e] = !0, !0) : (De[e] = !0, g("Invalid attribute name: `%s`", e), !1));
    }
    function Q(e, n, a) {
      return n !== null ? n.type === 0 : !a && e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function Te(e, n, a, i) {
      if (a !== null && a.type === 0) return !1;
      switch (typeof n) {
        case "function":
        case "symbol":
          return !0;
        case "boolean":
          if (i) return !1;
          if (a !== null) return !a.acceptsBooleans;
          var l = e.toLowerCase().slice(0, 5);
          return l !== "data-" && l !== "aria-";
        default:
          return !1;
      }
    }
    function Oe(e, n, a, i) {
      if (n == null || Te(e, n, a, i)) return !0;
      if (i) return !1;
      if (a !== null) switch (a.type) {
        case 3:
          return !n;
        case 4:
          return n === !1;
        case 5:
          return isNaN(n);
        case 6:
          return isNaN(n) || n < 1;
      }
      return !1;
    }
    function ze(e) {
      return Qe.hasOwnProperty(e) ? Qe[e] : null;
    }
    function _e(e, n, a, i, l, s, d) {
      this.acceptsBooleans = n === 2 || n === 3 || n === 4, this.attributeName = i, this.attributeNamespace = l, this.mustUseProperty = a, this.propertyName = e, this.type = n, this.sanitizeURL = s, this.removeEmptyString = d;
    }
    var Qe = {};
    ["children", "dangerouslySetInnerHTML", "defaultValue", "defaultChecked", "innerHTML", "suppressContentEditableWarning", "suppressHydrationWarning", "style"].forEach(function(e) {
      Qe[e] = new _e(e, 0, !1, e, null, !1, !1);
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var n = e[0], a = e[1];
      Qe[n] = new _e(n, 1, !1, a, null, !1, !1);
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      Qe[e] = new _e(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      Qe[e] = new _e(e, 2, !1, e, null, !1, !1);
    }), ["allowFullScreen", "async", "autoFocus", "autoPlay", "controls", "default", "defer", "disabled", "disablePictureInPicture", "disableRemotePlayback", "formNoValidate", "hidden", "loop", "noModule", "noValidate", "open", "playsInline", "readOnly", "required", "reversed", "scoped", "seamless", "itemScope"].forEach(function(e) {
      Qe[e] = new _e(e, 3, !1, e.toLowerCase(), null, !1, !1);
    }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
      Qe[e] = new _e(e, 3, !0, e, null, !1, !1);
    }), ["capture", "download"].forEach(function(e) {
      Qe[e] = new _e(e, 4, !1, e, null, !1, !1);
    }), ["cols", "rows", "size", "span"].forEach(function(e) {
      Qe[e] = new _e(e, 6, !1, e, null, !1, !1);
    }), ["rowSpan", "start"].forEach(function(e) {
      Qe[e] = new _e(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
    var rn = /[\-\:]([a-z])/g, xn = function(e) {
      return e[1].toUpperCase();
    };
    ["accent-height", "alignment-baseline", "arabic-form", "baseline-shift", "cap-height", "clip-path", "clip-rule", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "dominant-baseline", "enable-background", "fill-opacity", "fill-rule", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "glyph-name", "glyph-orientation-horizontal", "glyph-orientation-vertical", "horiz-adv-x", "horiz-origin-x", "image-rendering", "letter-spacing", "lighting-color", "marker-end", "marker-mid", "marker-start", "overline-position", "overline-thickness", "paint-order", "panose-1", "pointer-events", "rendering-intent", "shape-rendering", "stop-color", "stop-opacity", "strikethrough-position", "strikethrough-thickness", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "text-anchor", "text-decoration", "text-rendering", "underline-position", "underline-thickness", "unicode-bidi", "unicode-range", "units-per-em", "v-alphabetic", "v-hanging", "v-ideographic", "v-mathematical", "vector-effect", "vert-adv-y", "vert-origin-x", "vert-origin-y", "word-spacing", "writing-mode", "xmlns:xlink", "x-height"].forEach(function(e) {
      var n = e.replace(rn, xn);
      Qe[n] = new _e(n, 1, !1, e, null, !1, !1);
    }), ["xlink:actuate", "xlink:arcrole", "xlink:role", "xlink:show", "xlink:title", "xlink:type"].forEach(function(e) {
      var n = e.replace(rn, xn);
      Qe[n] = new _e(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
    }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
      var n = e.replace(rn, xn);
      Qe[n] = new _e(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Qe[e] = new _e(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }), Qe.xlinkHref = new _e("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
      Qe[e] = new _e(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
    var Dn = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, kn = !1;
    function ot(e) {
      !kn && Dn.test(e) && (kn = !0, g("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function gr(e, n, a, i) {
      if (i.mustUseProperty) return e[i.propertyName];
      Ve(a, n), i.sanitizeURL && ot("" + a);
      var l = i.attributeName, s = null;
      if (i.type === 4) {
        if (e.hasAttribute(l)) {
          var d = e.getAttribute(l);
          return d === "" || (Oe(n, a, i, !1) ? d : d === "" + a ? a : d);
        }
      } else if (e.hasAttribute(l)) {
        if (Oe(n, a, i, !1)) return e.getAttribute(l);
        if (i.type === 3) return a;
        s = e.getAttribute(l);
      }
      return Oe(n, a, i, !1) ? s === null ? a : s : s === "" + a ? a : s;
    }
    function tr(e, n, a, i) {
      if (je(n)) {
        if (!e.hasAttribute(n)) return a === void 0 ? void 0 : null;
        var l = e.getAttribute(n);
        return Ve(a, n), l === "" + a ? a : l;
      }
    }
    function rr(e, n, a, i) {
      var l = ze(n);
      if (!Q(n, l, i)) if (Oe(n, a, l, i) && (a = null), i || l === null) {
        if (je(n)) {
          var s = n;
          a === null ? e.removeAttribute(s) : (Ve(a, n), e.setAttribute(s, "" + a));
        }
      } else if (l.mustUseProperty) {
        var d = l.propertyName;
        if (a === null) {
          var p = l.type;
          e[d] = p !== 3 && "";
        } else e[d] = a;
      } else {
        var v = l.attributeName, b = l.attributeNamespace;
        if (a === null) e.removeAttribute(v);
        else {
          var x, D = l.type;
          D === 3 || D === 4 && a === !0 ? x = "" : (Ve(a, v), x = "" + a, l.sanitizeURL && ot(x.toString())), b ? e.setAttributeNS(b, v, x) : e.setAttribute(v, x);
        }
      }
    }
    var zn = Symbol.for("react.element"), B = Symbol.for("react.portal"), Ce = Symbol.for("react.fragment"), Pe = Symbol.for("react.strict_mode"), yn = Symbol.for("react.profiler"), lt = Symbol.for("react.provider"), Fn = Symbol.for("react.context"), cn = Symbol.for("react.forward_ref"), sn = Symbol.for("react.suspense"), Nn = Symbol.for("react.suspense_list"), hn = Symbol.for("react.memo"), bn = Symbol.for("react.lazy"), Ot = (Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode"), Symbol.for("react.offscreen")), Lt = (Symbol.for("react.legacy_hidden"), Symbol.for("react.cache"), Symbol.for("react.tracing_marker"), Symbol.iterator);
    function Qr(e) {
      if (e === null || typeof e != "object") return null;
      var n = Lt && e[Lt] || e["@@iterator"];
      return typeof n == "function" ? n : null;
    }
    var cl, V, pe, we, Re, tn, Cn, He = Object.assign, Sn = 0;
    function bt() {
    }
    bt.__reactDisabledLog = !0;
    var An, et = y.ReactCurrentDispatcher;
    function Hn(e, n, a) {
      if (An === void 0) try {
        throw Error();
      } catch (l) {
        var i = l.stack.trim().match(/\n( *(at )?)/);
        An = i && i[1] || "";
      }
      return `
` + An + e;
    }
    var Ht, da = !1, fa = typeof WeakMap == "function" ? WeakMap : Map;
    function it(e, n) {
      if (!e || da) return "";
      var a, i = Ht.get(e);
      if (i !== void 0) return i;
      da = !0;
      var l, s = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0, l = et.current, et.current = null, function() {
        if (Sn === 0) {
          cl = console.log, V = console.info, pe = console.warn, we = console.error, Re = console.group, tn = console.groupCollapsed, Cn = console.groupEnd;
          var P = { configurable: !0, enumerable: !0, value: bt, writable: !0 };
          Object.defineProperties(console, { info: P, log: P, warn: P, error: P, group: P, groupCollapsed: P, groupEnd: P });
        }
        Sn++;
      }();
      try {
        if (n) {
          var d = function() {
            throw Error();
          };
          if (Object.defineProperty(d.prototype, "props", { set: function() {
            throw Error();
          } }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(d, []);
            } catch (P) {
              a = P;
            }
            Reflect.construct(e, [], d);
          } else {
            try {
              d.call();
            } catch (P) {
              a = P;
            }
            e.call(d.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (P) {
            a = P;
          }
          e();
        }
      } catch (P) {
        if (P && a && typeof P.stack == "string") {
          for (var p = P.stack.split(`
`), v = a.stack.split(`
`), b = p.length - 1, x = v.length - 1; b >= 1 && x >= 0 && p[b] !== v[x]; ) x--;
          for (; b >= 1 && x >= 0; b--, x--) if (p[b] !== v[x]) {
            if (b !== 1 || x !== 1) do
              if (b--, --x < 0 || p[b] !== v[x]) {
                var D = `
` + p[b].replace(" at new ", " at ");
                return e.displayName && D.includes("<anonymous>") && (D = D.replace("<anonymous>", e.displayName)), typeof e == "function" && Ht.set(e, D), D;
              }
            while (b >= 1 && x >= 0);
            break;
          }
        }
      } finally {
        da = !1, et.current = l, function() {
          if (--Sn == 0) {
            var P = { configurable: !0, enumerable: !0, writable: !0 };
            Object.defineProperties(console, { log: He({}, P, { value: cl }), info: He({}, P, { value: V }), warn: He({}, P, { value: pe }), error: He({}, P, { value: we }), group: He({}, P, { value: Re }), groupCollapsed: He({}, P, { value: tn }), groupEnd: He({}, P, { value: Cn }) });
          }
          Sn < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }(), Error.prepareStackTrace = s;
      }
      var L = e ? e.displayName || e.name : "", N = L ? Hn(L) : "";
      return typeof e == "function" && Ht.set(e, N), N;
    }
    function wt(e, n, a) {
      return it(e, !1);
    }
    function Ra(e, n, a) {
      if (e == null) return "";
      if (typeof e == "function") return it(e, !(!(i = e.prototype) || !i.isReactComponent));
      var i;
      if (typeof e == "string") return Hn(e);
      switch (e) {
        case sn:
          return Hn("Suspense");
        case Nn:
          return Hn("SuspenseList");
      }
      if (typeof e == "object") switch (e.$$typeof) {
        case cn:
          return wt(e.render);
        case hn:
          return Ra(e.type, n, a);
        case bn:
          var l = e, s = l._payload, d = l._init;
          try {
            return Ra(d(s), n, a);
          } catch {
          }
      }
      return "";
    }
    function Xs(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case 5:
          return Hn(e.type);
        case 16:
          return Hn("Lazy");
        case M:
          return Hn("Suspense");
        case re:
          return Hn("SuspenseList");
        case 0:
        case 2:
        case z:
          return wt(e.type);
        case S:
          return wt(e.type.render);
        case 1:
          return it(e.type, !0);
        default:
          return "";
      }
    }
    function Ka(e) {
      try {
        var n = "", a = e;
        do
          n += Xs(a), a = a.return;
        while (a);
        return n;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function So(e) {
      return e.displayName || "Context";
    }
    function En(e) {
      if (e == null) return null;
      if (typeof e.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function") return e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case Ce:
          return "Fragment";
        case B:
          return "Portal";
        case yn:
          return "Profiler";
        case Pe:
          return "StrictMode";
        case sn:
          return "Suspense";
        case Nn:
          return "SuspenseList";
      }
      if (typeof e == "object") switch (e.$$typeof) {
        case Fn:
          return So(e) + ".Consumer";
        case lt:
          return So(e._context) + ".Provider";
        case cn:
          return function(s, d, p) {
            var v = s.displayName;
            if (v) return v;
            var b = d.displayName || d.name || "";
            return b !== "" ? p + "(" + b + ")" : p;
          }(e, e.render, "ForwardRef");
        case hn:
          var n = e.displayName || null;
          return n !== null ? n : En(e.type) || "Memo";
        case bn:
          var a = e, i = a._payload, l = a._init;
          try {
            return En(l(i));
          } catch {
            return null;
          }
      }
      return null;
    }
    function Xa(e) {
      return e.displayName || "Context";
    }
    function dn(e) {
      var n, a, i, l, s = e.tag, d = e.type;
      switch (s) {
        case 24:
          return "Cache";
        case 9:
          return Xa(d) + ".Consumer";
        case j:
          return Xa(d._context) + ".Provider";
        case 18:
          return "DehydratedFragment";
        case S:
          return n = d, a = d.render, i = "ForwardRef", l = a.displayName || a.name || "", n.displayName || (l !== "" ? i + "(" + l + ")" : i);
        case 7:
          return "Fragment";
        case 5:
          return d;
        case 4:
          return "Portal";
        case 3:
          return "Root";
        case 6:
          return "Text";
        case 16:
          return En(d);
        case 8:
          return d === Pe ? "StrictMode" : "Mode";
        case ne:
          return "Offscreen";
        case T:
          return "Profiler";
        case $:
          return "Scope";
        case M:
          return "Suspense";
        case re:
          return "SuspenseList";
        case 25:
          return "TracingMarker";
        case 1:
        case 0:
        case Y:
        case 2:
        case F:
        case z:
          if (typeof d == "function") return d.displayName || d.name || null;
          if (typeof d == "string") return d;
      }
      return null;
    }
    Ht = new fa();
    var Cp = y.ReactDebugCurrentFrame, kt = null, dl = !1;
    function fl() {
      if (kt === null) return null;
      var e = kt._debugOwner;
      return e != null ? dn(e) : null;
    }
    function _p() {
      return kt === null ? "" : Ka(kt);
    }
    function $t() {
      Cp.getCurrentStack = null, kt = null, dl = !1;
    }
    function ut(e) {
      Cp.getCurrentStack = e === null ? null : _p, kt = e, dl = !1;
    }
    function pa(e) {
      dl = e;
    }
    function Yr(e) {
      return "" + e;
    }
    function Eo(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return mn(e), e;
        default:
          return "";
      }
    }
    var pt = { button: !0, checkbox: !0, image: !0, hidden: !0, radio: !0, reset: !0, submit: !0 };
    function md(e, n) {
      pt[n.type] || n.onChange || n.onInput || n.readOnly || n.disabled || n.value == null || g("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), n.onChange || n.readOnly || n.disabled || n.checked == null || g("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Gs(e) {
      var n = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
    }
    function hd(e) {
      return e._valueTracker;
    }
    function pl(e) {
      hd(e) || (e._valueTracker = function(n) {
        var a = Gs(n) ? "checked" : "value", i = Object.getOwnPropertyDescriptor(n.constructor.prototype, a);
        mn(n[a]);
        var l = "" + n[a];
        if (!n.hasOwnProperty(a) && i !== void 0 && typeof i.get == "function" && typeof i.set == "function") {
          var s = i.get, d = i.set;
          Object.defineProperty(n, a, { configurable: !0, get: function() {
            return s.call(this);
          }, set: function(v) {
            mn(v), l = "" + v, d.call(this, v);
          } }), Object.defineProperty(n, a, { enumerable: i.enumerable });
          var p = { getValue: function() {
            return l;
          }, setValue: function(v) {
            mn(v), l = "" + v;
          }, stopTracking: function() {
            (function(v) {
              v._valueTracker = null;
            })(n), delete n[a];
          } };
          return p;
        }
      }(e));
    }
    function Pp(e) {
      if (!e) return !1;
      var n = hd(e);
      if (!n) return !0;
      var a = n.getValue(), i = function(l) {
        var s = "";
        return l ? s = Gs(l) ? l.checked ? "true" : "false" : l.value : s;
      }(e);
      return i !== a && (n.setValue(i), !0);
    }
    function Ru(e) {
      if ((e = e || (typeof document < "u" ? document : void 0)) === void 0) return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Nu = !1, ma = !1, Kr = !1, Rp = !1;
    function Np(e) {
      return e.type === "checkbox" || e.type === "radio" ? e.checked != null : e.value != null;
    }
    function Iu(e, n) {
      var a = e, i = n.checked;
      return He({}, n, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: i ?? a._wrapperState.initialChecked });
    }
    function Js(e, n) {
      md(0, n), n.checked === void 0 || n.defaultChecked === void 0 || ma || (g("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", fl() || "A component", n.type), ma = !0), n.value === void 0 || n.defaultValue === void 0 || Nu || (g("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", fl() || "A component", n.type), Nu = !0);
      var a = e, i = n.defaultValue == null ? "" : n.defaultValue;
      a._wrapperState = { initialChecked: n.checked != null ? n.checked : n.defaultChecked, initialValue: Eo(n.value != null ? n.value : i), controlled: Np(n) };
    }
    function ml(e, n) {
      var a = e, i = n.checked;
      i != null && rr(a, "checked", i, !1);
    }
    function hl(e, n) {
      var a = e, i = Np(n);
      a._wrapperState.controlled || !i || Rp || (g("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Rp = !0), !a._wrapperState.controlled || i || Kr || (g("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Kr = !0), ml(e, n);
      var l = Eo(n.value), s = n.type;
      if (l != null) s === "number" ? (l === 0 && a.value === "" || a.value != l) && (a.value = Yr(l)) : a.value !== Yr(l) && (a.value = Yr(l));
      else if (s === "submit" || s === "reset") return void a.removeAttribute("value");
      n.hasOwnProperty("value") ? Zs(a, n.type, l) : n.hasOwnProperty("defaultValue") && Zs(a, n.type, Eo(n.defaultValue)), n.checked == null && n.defaultChecked != null && (a.defaultChecked = !!n.defaultChecked);
    }
    function Ip(e, n, a) {
      var i = e;
      if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
        var l = n.type;
        if ((l === "submit" || l === "reset") && (n.value === void 0 || n.value === null)) return;
        var s = Yr(i._wrapperState.initialValue);
        a || s !== i.value && (i.value = s), i.defaultValue = s;
      }
      var d = i.name;
      d !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, d !== "" && (i.name = d);
    }
    function vd(e, n) {
      var a = e;
      hl(a, n), function(i, l) {
        var s = l.name;
        if (l.type === "radio" && s != null) {
          for (var d = i; d.parentNode; ) d = d.parentNode;
          Ve(s, "name");
          for (var p = d.querySelectorAll("input[name=" + JSON.stringify("" + s) + '][type="radio"]'), v = 0; v < p.length; v++) {
            var b = p[v];
            if (b !== i && b.form === i.form) {
              var x = Ts(b);
              if (!x) throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
              Pp(b), hl(b, x);
            }
          }
        }
      }(a, n);
    }
    function Zs(e, n, a) {
      n === "number" && Ru(e.ownerDocument) === e || (a == null ? e.defaultValue = Yr(e._wrapperState.initialValue) : e.defaultValue !== Yr(a) && (e.defaultValue = Yr(a)));
    }
    var ec = !1, vl = !1, nc = !1;
    function On(e, n) {
      n.value == null && (typeof n.children == "object" && n.children !== null ? f.Children.forEach(n.children, function(a) {
        a != null && typeof a != "string" && typeof a != "number" && (vl || (vl = !0, g("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : n.dangerouslySetInnerHTML != null && (nc || (nc = !0, g("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), n.selected == null || ec || (g("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), ec = !0);
    }
    var tc, Dp = Array.isArray;
    function Mt(e) {
      return Dp(e);
    }
    function gd() {
      var e = fl();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    tc = !1;
    var yd = ["value", "defaultValue"];
    function hi(e, n, a, i) {
      var l = e.options;
      if (n) {
        for (var s = a, d = {}, p = 0; p < s.length; p++) d["$" + s[p]] = !0;
        for (var v = 0; v < l.length; v++) {
          var b = d.hasOwnProperty("$" + l[v].value);
          l[v].selected !== b && (l[v].selected = b), b && i && (l[v].defaultSelected = !0);
        }
      } else {
        for (var x = Yr(Eo(a)), D = null, L = 0; L < l.length; L++) {
          if (l[L].value === x) return l[L].selected = !0, void (i && (l[L].defaultSelected = !0));
          D !== null || l[L].disabled || (D = l[L]);
        }
        D !== null && (D.selected = !0);
      }
    }
    function Du(e, n) {
      return He({}, n, { value: void 0 });
    }
    function Ou(e, n) {
      var a = e;
      (function(i) {
        md(0, i);
        for (var l = 0; l < yd.length; l++) {
          var s = yd[l];
          if (i[s] != null) {
            var d = Mt(i[s]);
            i.multiple && !d ? g("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", s, gd()) : !i.multiple && d && g("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", s, gd());
          }
        }
      })(n), a._wrapperState = { wasMultiple: !!n.multiple }, n.value === void 0 || n.defaultValue === void 0 || tc || (g("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), tc = !0);
    }
    var Ga = !1;
    function Na(e, n) {
      var a = e;
      if (n.dangerouslySetInnerHTML != null) throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      return He({}, n, { value: void 0, defaultValue: void 0, children: Yr(a._wrapperState.initialValue) });
    }
    function Ja(e, n) {
      var a = e;
      md(0, n), n.value === void 0 || n.defaultValue === void 0 || Ga || (g("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", fl() || "A component"), Ga = !0);
      var i = n.value;
      if (i == null) {
        var l = n.children, s = n.defaultValue;
        if (l != null) {
          if (g("Use the `defaultValue` or `value` props instead of setting children on <textarea>."), s != null) throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
          if (Mt(l)) {
            if (l.length > 1) throw new Error("<textarea> can only have at most one child.");
            l = l[0];
          }
          s = l;
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = { initialValue: Eo(i) };
    }
    function gl(e, n) {
      var a = e, i = Eo(n.value), l = Eo(n.defaultValue);
      if (i != null) {
        var s = Yr(i);
        s !== a.value && (a.value = s), n.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      l != null && (a.defaultValue = Yr(l));
    }
    function yl(e, n) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    var qt = "http://www.w3.org/1999/xhtml", bd = "http://www.w3.org/2000/svg";
    function rc(e) {
      switch (e) {
        case "svg":
          return bd;
        case "math":
          return "http://www.w3.org/1998/Math/MathML";
        default:
          return qt;
      }
    }
    function vi(e, n) {
      return e == null || e === qt ? rc(n) : e === bd && n === "foreignObject" ? qt : e;
    }
    var ac, bl, wd = (bl = function(e, n) {
      if (e.namespaceURI !== bd || "innerHTML" in e) e.innerHTML = n;
      else {
        (ac = ac || document.createElement("div")).innerHTML = "<svg>" + n.valueOf().toString() + "</svg>";
        for (var a = ac.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
        for (; a.firstChild; ) e.appendChild(a.firstChild);
      }
    }, typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(e, n, a, i) {
      MSApp.execUnsafeLocalFunction(function() {
        return bl(e, n, a, i);
      });
    } : bl), oc = function(e, n) {
      if (n) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === 3) return void (a.nodeValue = n);
      }
      e.textContent = n;
    }, Lu = { animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"], background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"], backgroundPosition: ["backgroundPositionX", "backgroundPositionY"], border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"], borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"], borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"], borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"], borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"], borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"], borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"], borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"], borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"], borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"], borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"], borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"], borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"], borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"], columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"], columns: ["columnCount", "columnWidth"], flex: ["flexBasis", "flexGrow", "flexShrink"], flexFlow: ["flexDirection", "flexWrap"], font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"], fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"], gap: ["columnGap", "rowGap"], grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"], gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"], gridColumn: ["gridColumnEnd", "gridColumnStart"], gridColumnGap: ["columnGap"], gridGap: ["columnGap", "rowGap"], gridRow: ["gridRowEnd", "gridRowStart"], gridRowGap: ["rowGap"], gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"], listStyle: ["listStyleImage", "listStylePosition", "listStyleType"], margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"], marker: ["markerEnd", "markerMid", "markerStart"], mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"], maskPosition: ["maskPositionX", "maskPositionY"], outline: ["outlineColor", "outlineStyle", "outlineWidth"], overflow: ["overflowX", "overflowY"], padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"], placeContent: ["alignContent", "justifyContent"], placeItems: ["alignItems", "justifyItems"], placeSelf: ["alignSelf", "justifySelf"], textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"], textEmphasis: ["textEmphasisColor", "textEmphasisStyle"], transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"], wordWrap: ["overflowWrap"] }, Za = { animationIterationCount: !0, aspectRatio: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridArea: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0, gridColumnStart: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0, stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0 }, wl = ["Webkit", "ms", "Moz", "O"];
    function kl(e, n, a) {
      return n == null || typeof n == "boolean" || n === "" ? "" : a || typeof n != "number" || n === 0 || Za.hasOwnProperty(e) && Za[e] ? (function(i, l) {
        gn(i) && (g("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", l, Ze(i)), ve(i));
      }(n, e), ("" + n).trim()) : n + "px";
    }
    Object.keys(Za).forEach(function(e) {
      wl.forEach(function(n) {
        Za[function(a, i) {
          return a + i.charAt(0).toUpperCase() + i.substring(1);
        }(n, e)] = Za[e];
      });
    });
    var Gh = /([A-Z])/g, Jh = /^ms-/, kd = /^(?:webkit|moz|o)[A-Z]/, ic = /^-ms-/, Sd = /-(.)/g, Ed = /;\s*$/, Xr = {}, Mu = {}, zu = !1, xd = !1, lc = function(e) {
      Xr.hasOwnProperty(e) && Xr[e] || (Xr[e] = !0, g("Unsupported style property %s. Did you mean %s?", e, e.replace(ic, "ms-").replace(Sd, function(n, a) {
        return a.toUpperCase();
      })));
    }, uc = function(e, n) {
      e.indexOf("-") > -1 ? lc(e) : kd.test(e) ? function(a) {
        Xr.hasOwnProperty(a) && Xr[a] || (Xr[a] = !0, g("Unsupported vendor-prefixed style property %s. Did you mean %s?", a, a.charAt(0).toUpperCase() + a.slice(1)));
      }(e) : Ed.test(n) && function(a, i) {
        Mu.hasOwnProperty(i) && Mu[i] || (Mu[i] = !0, g(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, a, i.replace(Ed, "")));
      }(e, n), typeof n == "number" && (isNaN(n) ? function(a) {
        zu || (zu = !0, g("`NaN` is an invalid value for the `%s` css style property.", a));
      }(e) : isFinite(n) || function(a) {
        xd || (xd = !0, g("`Infinity` is an invalid value for the `%s` css style property.", a));
      }(e));
    };
    function Op(e) {
      var n = "", a = "";
      for (var i in e) if (e.hasOwnProperty(i)) {
        var l = e[i];
        if (l != null) {
          var s = i.indexOf("--") === 0;
          n += a + (s ? i : i.replace(Gh, "-$1").toLowerCase().replace(Jh, "-ms-")) + ":", n += kl(i, l, s), a = ";";
        }
      }
      return n || null;
    }
    function yr(e, n) {
      var a = e.style;
      for (var i in n) if (n.hasOwnProperty(i)) {
        var l = i.indexOf("--") === 0;
        l || uc(i, n[i]);
        var s = kl(i, n[i], l);
        i === "float" && (i = "cssFloat"), l ? a.setProperty(i, s) : a[i] = s;
      }
    }
    function sc(e) {
      var n = {};
      for (var a in e) for (var i = Lu[a] || [a], l = 0; l < i.length; l++) n[i[l]] = a;
      return n;
    }
    var Td = He({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
    function gi(e, n) {
      if (n) {
        if (Td[e] && (n.children != null || n.dangerouslySetInnerHTML != null)) throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (n.dangerouslySetInnerHTML != null) {
          if (n.children != null) throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof n.dangerouslySetInnerHTML != "object" || !("__html" in n.dangerouslySetInnerHTML)) throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!n.suppressContentEditableWarning && n.contentEditable && n.children != null && g("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), n.style != null && typeof n.style != "object") throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Gr(e, n) {
      if (e.indexOf("-") === -1) return typeof n.is == "string";
      switch (e) {
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
    var Sl = { accept: "accept", acceptcharset: "acceptCharset", "accept-charset": "acceptCharset", accesskey: "accessKey", action: "action", allowfullscreen: "allowFullScreen", alt: "alt", as: "as", async: "async", autocapitalize: "autoCapitalize", autocomplete: "autoComplete", autocorrect: "autoCorrect", autofocus: "autoFocus", autoplay: "autoPlay", autosave: "autoSave", capture: "capture", cellpadding: "cellPadding", cellspacing: "cellSpacing", challenge: "challenge", charset: "charSet", checked: "checked", children: "children", cite: "cite", class: "className", classid: "classID", classname: "className", cols: "cols", colspan: "colSpan", content: "content", contenteditable: "contentEditable", contextmenu: "contextMenu", controls: "controls", controlslist: "controlsList", coords: "coords", crossorigin: "crossOrigin", dangerouslysetinnerhtml: "dangerouslySetInnerHTML", data: "data", datetime: "dateTime", default: "default", defaultchecked: "defaultChecked", defaultvalue: "defaultValue", defer: "defer", dir: "dir", disabled: "disabled", disablepictureinpicture: "disablePictureInPicture", disableremoteplayback: "disableRemotePlayback", download: "download", draggable: "draggable", enctype: "encType", enterkeyhint: "enterKeyHint", for: "htmlFor", form: "form", formmethod: "formMethod", formaction: "formAction", formenctype: "formEncType", formnovalidate: "formNoValidate", formtarget: "formTarget", frameborder: "frameBorder", headers: "headers", height: "height", hidden: "hidden", high: "high", href: "href", hreflang: "hrefLang", htmlfor: "htmlFor", httpequiv: "httpEquiv", "http-equiv": "httpEquiv", icon: "icon", id: "id", imagesizes: "imageSizes", imagesrcset: "imageSrcSet", innerhtml: "innerHTML", inputmode: "inputMode", integrity: "integrity", is: "is", itemid: "itemID", itemprop: "itemProp", itemref: "itemRef", itemscope: "itemScope", itemtype: "itemType", keyparams: "keyParams", keytype: "keyType", kind: "kind", label: "label", lang: "lang", list: "list", loop: "loop", low: "low", manifest: "manifest", marginwidth: "marginWidth", marginheight: "marginHeight", max: "max", maxlength: "maxLength", media: "media", mediagroup: "mediaGroup", method: "method", min: "min", minlength: "minLength", multiple: "multiple", muted: "muted", name: "name", nomodule: "noModule", nonce: "nonce", novalidate: "noValidate", open: "open", optimum: "optimum", pattern: "pattern", placeholder: "placeholder", playsinline: "playsInline", poster: "poster", preload: "preload", profile: "profile", radiogroup: "radioGroup", readonly: "readOnly", referrerpolicy: "referrerPolicy", rel: "rel", required: "required", reversed: "reversed", role: "role", rows: "rows", rowspan: "rowSpan", sandbox: "sandbox", scope: "scope", scoped: "scoped", scrolling: "scrolling", seamless: "seamless", selected: "selected", shape: "shape", size: "size", sizes: "sizes", span: "span", spellcheck: "spellCheck", src: "src", srcdoc: "srcDoc", srclang: "srcLang", srcset: "srcSet", start: "start", step: "step", style: "style", summary: "summary", tabindex: "tabIndex", target: "target", title: "title", type: "type", usemap: "useMap", value: "value", width: "width", wmode: "wmode", wrap: "wrap", about: "about", accentheight: "accentHeight", "accent-height": "accentHeight", accumulate: "accumulate", additive: "additive", alignmentbaseline: "alignmentBaseline", "alignment-baseline": "alignmentBaseline", allowreorder: "allowReorder", alphabetic: "alphabetic", amplitude: "amplitude", arabicform: "arabicForm", "arabic-form": "arabicForm", ascent: "ascent", attributename: "attributeName", attributetype: "attributeType", autoreverse: "autoReverse", azimuth: "azimuth", basefrequency: "baseFrequency", baselineshift: "baselineShift", "baseline-shift": "baselineShift", baseprofile: "baseProfile", bbox: "bbox", begin: "begin", bias: "bias", by: "by", calcmode: "calcMode", capheight: "capHeight", "cap-height": "capHeight", clip: "clip", clippath: "clipPath", "clip-path": "clipPath", clippathunits: "clipPathUnits", cliprule: "clipRule", "clip-rule": "clipRule", color: "color", colorinterpolation: "colorInterpolation", "color-interpolation": "colorInterpolation", colorinterpolationfilters: "colorInterpolationFilters", "color-interpolation-filters": "colorInterpolationFilters", colorprofile: "colorProfile", "color-profile": "colorProfile", colorrendering: "colorRendering", "color-rendering": "colorRendering", contentscripttype: "contentScriptType", contentstyletype: "contentStyleType", cursor: "cursor", cx: "cx", cy: "cy", d: "d", datatype: "datatype", decelerate: "decelerate", descent: "descent", diffuseconstant: "diffuseConstant", direction: "direction", display: "display", divisor: "divisor", dominantbaseline: "dominantBaseline", "dominant-baseline": "dominantBaseline", dur: "dur", dx: "dx", dy: "dy", edgemode: "edgeMode", elevation: "elevation", enablebackground: "enableBackground", "enable-background": "enableBackground", end: "end", exponent: "exponent", externalresourcesrequired: "externalResourcesRequired", fill: "fill", fillopacity: "fillOpacity", "fill-opacity": "fillOpacity", fillrule: "fillRule", "fill-rule": "fillRule", filter: "filter", filterres: "filterRes", filterunits: "filterUnits", floodopacity: "floodOpacity", "flood-opacity": "floodOpacity", floodcolor: "floodColor", "flood-color": "floodColor", focusable: "focusable", fontfamily: "fontFamily", "font-family": "fontFamily", fontsize: "fontSize", "font-size": "fontSize", fontsizeadjust: "fontSizeAdjust", "font-size-adjust": "fontSizeAdjust", fontstretch: "fontStretch", "font-stretch": "fontStretch", fontstyle: "fontStyle", "font-style": "fontStyle", fontvariant: "fontVariant", "font-variant": "fontVariant", fontweight: "fontWeight", "font-weight": "fontWeight", format: "format", from: "from", fx: "fx", fy: "fy", g1: "g1", g2: "g2", glyphname: "glyphName", "glyph-name": "glyphName", glyphorientationhorizontal: "glyphOrientationHorizontal", "glyph-orientation-horizontal": "glyphOrientationHorizontal", glyphorientationvertical: "glyphOrientationVertical", "glyph-orientation-vertical": "glyphOrientationVertical", glyphref: "glyphRef", gradienttransform: "gradientTransform", gradientunits: "gradientUnits", hanging: "hanging", horizadvx: "horizAdvX", "horiz-adv-x": "horizAdvX", horizoriginx: "horizOriginX", "horiz-origin-x": "horizOriginX", ideographic: "ideographic", imagerendering: "imageRendering", "image-rendering": "imageRendering", in2: "in2", in: "in", inlist: "inlist", intercept: "intercept", k1: "k1", k2: "k2", k3: "k3", k4: "k4", k: "k", kernelmatrix: "kernelMatrix", kernelunitlength: "kernelUnitLength", kerning: "kerning", keypoints: "keyPoints", keysplines: "keySplines", keytimes: "keyTimes", lengthadjust: "lengthAdjust", letterspacing: "letterSpacing", "letter-spacing": "letterSpacing", lightingcolor: "lightingColor", "lighting-color": "lightingColor", limitingconeangle: "limitingConeAngle", local: "local", markerend: "markerEnd", "marker-end": "markerEnd", markerheight: "markerHeight", markermid: "markerMid", "marker-mid": "markerMid", markerstart: "markerStart", "marker-start": "markerStart", markerunits: "markerUnits", markerwidth: "markerWidth", mask: "mask", maskcontentunits: "maskContentUnits", maskunits: "maskUnits", mathematical: "mathematical", mode: "mode", numoctaves: "numOctaves", offset: "offset", opacity: "opacity", operator: "operator", order: "order", orient: "orient", orientation: "orientation", origin: "origin", overflow: "overflow", overlineposition: "overlinePosition", "overline-position": "overlinePosition", overlinethickness: "overlineThickness", "overline-thickness": "overlineThickness", paintorder: "paintOrder", "paint-order": "paintOrder", panose1: "panose1", "panose-1": "panose1", pathlength: "pathLength", patterncontentunits: "patternContentUnits", patterntransform: "patternTransform", patternunits: "patternUnits", pointerevents: "pointerEvents", "pointer-events": "pointerEvents", points: "points", pointsatx: "pointsAtX", pointsaty: "pointsAtY", pointsatz: "pointsAtZ", prefix: "prefix", preservealpha: "preserveAlpha", preserveaspectratio: "preserveAspectRatio", primitiveunits: "primitiveUnits", property: "property", r: "r", radius: "radius", refx: "refX", refy: "refY", renderingintent: "renderingIntent", "rendering-intent": "renderingIntent", repeatcount: "repeatCount", repeatdur: "repeatDur", requiredextensions: "requiredExtensions", requiredfeatures: "requiredFeatures", resource: "resource", restart: "restart", result: "result", results: "results", rotate: "rotate", rx: "rx", ry: "ry", scale: "scale", security: "security", seed: "seed", shaperendering: "shapeRendering", "shape-rendering": "shapeRendering", slope: "slope", spacing: "spacing", specularconstant: "specularConstant", specularexponent: "specularExponent", speed: "speed", spreadmethod: "spreadMethod", startoffset: "startOffset", stddeviation: "stdDeviation", stemh: "stemh", stemv: "stemv", stitchtiles: "stitchTiles", stopcolor: "stopColor", "stop-color": "stopColor", stopopacity: "stopOpacity", "stop-opacity": "stopOpacity", strikethroughposition: "strikethroughPosition", "strikethrough-position": "strikethroughPosition", strikethroughthickness: "strikethroughThickness", "strikethrough-thickness": "strikethroughThickness", string: "string", stroke: "stroke", strokedasharray: "strokeDasharray", "stroke-dasharray": "strokeDasharray", strokedashoffset: "strokeDashoffset", "stroke-dashoffset": "strokeDashoffset", strokelinecap: "strokeLinecap", "stroke-linecap": "strokeLinecap", strokelinejoin: "strokeLinejoin", "stroke-linejoin": "strokeLinejoin", strokemiterlimit: "strokeMiterlimit", "stroke-miterlimit": "strokeMiterlimit", strokewidth: "strokeWidth", "stroke-width": "strokeWidth", strokeopacity: "strokeOpacity", "stroke-opacity": "strokeOpacity", suppresscontenteditablewarning: "suppressContentEditableWarning", suppresshydrationwarning: "suppressHydrationWarning", surfacescale: "surfaceScale", systemlanguage: "systemLanguage", tablevalues: "tableValues", targetx: "targetX", targety: "targetY", textanchor: "textAnchor", "text-anchor": "textAnchor", textdecoration: "textDecoration", "text-decoration": "textDecoration", textlength: "textLength", textrendering: "textRendering", "text-rendering": "textRendering", to: "to", transform: "transform", typeof: "typeof", u1: "u1", u2: "u2", underlineposition: "underlinePosition", "underline-position": "underlinePosition", underlinethickness: "underlineThickness", "underline-thickness": "underlineThickness", unicode: "unicode", unicodebidi: "unicodeBidi", "unicode-bidi": "unicodeBidi", unicoderange: "unicodeRange", "unicode-range": "unicodeRange", unitsperem: "unitsPerEm", "units-per-em": "unitsPerEm", unselectable: "unselectable", valphabetic: "vAlphabetic", "v-alphabetic": "vAlphabetic", values: "values", vectoreffect: "vectorEffect", "vector-effect": "vectorEffect", version: "version", vertadvy: "vertAdvY", "vert-adv-y": "vertAdvY", vertoriginx: "vertOriginX", "vert-origin-x": "vertOriginX", vertoriginy: "vertOriginY", "vert-origin-y": "vertOriginY", vhanging: "vHanging", "v-hanging": "vHanging", videographic: "vIdeographic", "v-ideographic": "vIdeographic", viewbox: "viewBox", viewtarget: "viewTarget", visibility: "visibility", vmathematical: "vMathematical", "v-mathematical": "vMathematical", vocab: "vocab", widths: "widths", wordspacing: "wordSpacing", "word-spacing": "wordSpacing", writingmode: "writingMode", "writing-mode": "writingMode", x1: "x1", x2: "x2", x: "x", xchannelselector: "xChannelSelector", xheight: "xHeight", "x-height": "xHeight", xlinkactuate: "xlinkActuate", "xlink:actuate": "xlinkActuate", xlinkarcrole: "xlinkArcrole", "xlink:arcrole": "xlinkArcrole", xlinkhref: "xlinkHref", "xlink:href": "xlinkHref", xlinkrole: "xlinkRole", "xlink:role": "xlinkRole", xlinkshow: "xlinkShow", "xlink:show": "xlinkShow", xlinktitle: "xlinkTitle", "xlink:title": "xlinkTitle", xlinktype: "xlinkType", "xlink:type": "xlinkType", xmlbase: "xmlBase", "xml:base": "xmlBase", xmllang: "xmlLang", "xml:lang": "xmlLang", xmlns: "xmlns", "xml:space": "xmlSpace", xmlnsxlink: "xmlnsXlink", "xmlns:xlink": "xmlnsXlink", xmlspace: "xmlSpace", y1: "y1", y2: "y2", y: "y", ychannelselector: "yChannelSelector", z: "z", zoomandpan: "zoomAndPan" }, El = { "aria-current": 0, "aria-description": 0, "aria-details": 0, "aria-disabled": 0, "aria-hidden": 0, "aria-invalid": 0, "aria-keyshortcuts": 0, "aria-label": 0, "aria-roledescription": 0, "aria-autocomplete": 0, "aria-checked": 0, "aria-expanded": 0, "aria-haspopup": 0, "aria-level": 0, "aria-modal": 0, "aria-multiline": 0, "aria-multiselectable": 0, "aria-orientation": 0, "aria-placeholder": 0, "aria-pressed": 0, "aria-readonly": 0, "aria-required": 0, "aria-selected": 0, "aria-sort": 0, "aria-valuemax": 0, "aria-valuemin": 0, "aria-valuenow": 0, "aria-valuetext": 0, "aria-atomic": 0, "aria-busy": 0, "aria-live": 0, "aria-relevant": 0, "aria-dropeffect": 0, "aria-grabbed": 0, "aria-activedescendant": 0, "aria-colcount": 0, "aria-colindex": 0, "aria-colspan": 0, "aria-controls": 0, "aria-describedby": 0, "aria-errormessage": 0, "aria-flowto": 0, "aria-labelledby": 0, "aria-owns": 0, "aria-posinset": 0, "aria-rowcount": 0, "aria-rowindex": 0, "aria-rowspan": 0, "aria-setsize": 0 }, xl = {}, cc = new RegExp("^(aria)-[" + an + "]*$"), Lp = new RegExp("^(aria)[A-Z][" + an + "]*$");
    function Zh(e, n) {
      if (pn.call(xl, n) && xl[n]) return !0;
      if (Lp.test(n)) {
        var a = "aria-" + n.slice(4).toLowerCase(), i = El.hasOwnProperty(a) ? a : null;
        if (i == null) return g("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", n), xl[n] = !0, !0;
        if (n !== i) return g("Invalid ARIA attribute `%s`. Did you mean `%s`?", n, i), xl[n] = !0, !0;
      }
      if (cc.test(n)) {
        var l = n.toLowerCase(), s = El.hasOwnProperty(l) ? l : null;
        if (s == null) return xl[n] = !0, !1;
        if (n !== s) return g("Unknown ARIA attribute `%s`. Did you mean `%s`?", n, s), xl[n] = !0, !0;
      }
      return !0;
    }
    function Cd(e, n) {
      Gr(e, n) || function(a, i) {
        var l = [];
        for (var s in i) Zh(0, s) || l.push(s);
        var d = l.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        l.length === 1 ? g("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", d, a) : l.length > 1 && g("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", d, a);
      }(e, n);
    }
    var Mp = !1, zp, ar = {}, _d = /^on./, ev = /^on[^A-Z]/, nv = new RegExp("^(aria)-[" + an + "]*$"), tv = new RegExp("^(aria)[A-Z][" + an + "]*$");
    zp = function(e, n, a, i) {
      if (pn.call(ar, n) && ar[n]) return !0;
      var l = n.toLowerCase();
      if (l === "onfocusin" || l === "onfocusout") return g("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), ar[n] = !0, !0;
      if (i != null) {
        var s = i.registrationNameDependencies, d = i.possibleRegistrationNames;
        if (s.hasOwnProperty(n)) return !0;
        var p = d.hasOwnProperty(l) ? d[l] : null;
        if (p != null) return g("Invalid event handler property `%s`. Did you mean `%s`?", n, p), ar[n] = !0, !0;
        if (_d.test(n)) return g("Unknown event handler property `%s`. It will be ignored.", n), ar[n] = !0, !0;
      } else if (_d.test(n)) return ev.test(n) && g("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", n), ar[n] = !0, !0;
      if (nv.test(n) || tv.test(n)) return !0;
      if (l === "innerhtml") return g("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), ar[n] = !0, !0;
      if (l === "aria") return g("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), ar[n] = !0, !0;
      if (l === "is" && a != null && typeof a != "string") return g("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), ar[n] = !0, !0;
      if (typeof a == "number" && isNaN(a)) return g("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", n), ar[n] = !0, !0;
      var v = ze(n), b = v !== null && v.type === 0;
      if (Sl.hasOwnProperty(l)) {
        var x = Sl[l];
        if (x !== n) return g("Invalid DOM property `%s`. Did you mean `%s`?", n, x), ar[n] = !0, !0;
      } else if (!b && n !== l) return g("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", n, l), ar[n] = !0, !0;
      return typeof a == "boolean" && Te(n, a, v, !1) ? (a ? g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, n, n, a, n) : g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, n, n, a, n, n, n), ar[n] = !0, !0) : !!b || (Te(n, a, v, !1) ? (ar[n] = !0, !1) : (a !== "false" && a !== "true" || v === null || v.type !== 3 || (g("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, n, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', n, a), ar[n] = !0), !0));
    };
    function rv(e, n, a) {
      Gr(e, n) || function(i, l, s) {
        var d = [];
        for (var p in l) zp(0, p, l[p], s) || d.push(p);
        var v = d.map(function(b) {
          return "`" + b + "`";
        }).join(", ");
        d.length === 1 ? g("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", v, i) : d.length > 1 && g("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", v, i);
      }(e, n, a);
    }
    var yi = null;
    function Pd(e) {
      var n = e.target || e.srcElement || window;
      return n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
    }
    var Rd = null, bi = null, Tl = null;
    function Ap(e) {
      var n = ni(e);
      if (n) {
        if (typeof Rd != "function") throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = n.stateNode;
        if (a) {
          var i = Ts(a);
          Rd(n.stateNode, n.type, i);
        }
      }
    }
    function Up(e) {
      bi ? Tl ? Tl.push(e) : Tl = [e] : bi = e;
    }
    function Fp() {
      if (bi) {
        var e = bi, n = Tl;
        if (bi = null, Tl = null, Ap(e), n) for (var a = 0; a < n.length; a++) Ap(n[a]);
      }
    }
    var jp = function(e, n) {
      return e(n);
    }, dc = function() {
    }, wi = !1;
    function av() {
      (bi !== null || Tl !== null) && (dc(), Fp());
    }
    function Nd(e, n, a) {
      if (wi) return e(n, a);
      wi = !0;
      try {
        return jp(e, n, a);
      } finally {
        wi = !1, av();
      }
    }
    function Cl(e, n) {
      var a = e.stateNode;
      if (a === null) return null;
      var i = Ts(a);
      if (i === null) return null;
      var l = i[n];
      if (function(s, d, p) {
        switch (s) {
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
            return !(!p.disabled || (v = d, v !== "button" && v !== "input" && v !== "select" && v !== "textarea"));
          default:
            return !1;
        }
        var v;
      }(n, e.type, i)) return null;
      if (l && typeof l != "function") throw new Error("Expected `" + n + "` listener to be a function, instead got a value of `" + typeof l + "` type.");
      return l;
    }
    var fc = !1;
    if (nn) try {
      var _l = {};
      Object.defineProperty(_l, "passive", { get: function() {
        fc = !0;
      } }), window.addEventListener("test", _l, _l), window.removeEventListener("test", _l, _l);
    } catch {
      fc = !1;
    }
    function Id(e, n, a, i, l, s, d, p, v) {
      var b = Array.prototype.slice.call(arguments, 3);
      try {
        n.apply(a, b);
      } catch (x) {
        this.onError(x);
      }
    }
    var ki = Id;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Dd = document.createElement("react");
      ki = function(e, n, a, i, l, s, d, p, v) {
        if (typeof document > "u" || document === null) throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var b = document.createEvent("Event"), x = !1, D = !0, L = window.event, N = Object.getOwnPropertyDescriptor(window, "event");
        function P() {
          Dd.removeEventListener(X, R, !1), window.event !== void 0 && window.hasOwnProperty("event") && (window.event = L);
        }
        var E, w = Array.prototype.slice.call(arguments, 3);
        function R() {
          x = !0, P(), n.apply(a, w), D = !1;
        }
        var O = !1, W = !1;
        function K(J) {
          if (E = J.error, O = !0, E === null && J.colno === 0 && J.lineno === 0 && (W = !0), J.defaultPrevented && E != null && typeof E == "object") try {
            E._suppressLogging = !0;
          } catch {
          }
        }
        var X = "react-" + (e || "invokeguardedcallback");
        if (window.addEventListener("error", K), Dd.addEventListener(X, R, !1), b.initEvent(X, !1, !1), Dd.dispatchEvent(b), N && Object.defineProperty(window, "event", N), x && D && (O ? W && (E = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : E = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(E)), window.removeEventListener("error", K), !x) return P(), Id.apply(this, arguments);
      };
    }
    var Bp = ki, Si = !1, Ei = null, xo = !1, Od = null, pc = { onError: function(e) {
      Si = !0, Ei = e;
    } };
    function Ld(e, n, a, i, l, s, d, p, v) {
      Si = !1, Ei = null, Bp.apply(pc, arguments);
    }
    function mc() {
      if (Si) {
        var e = Ei;
        return Si = !1, Ei = null, e;
      }
      throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function To(e) {
      return e._reactInternals;
    }
    var xi = 16, _n = 128, Ti = 256, Pl = 512, Au = 1024, Uu = 2048, Md = 4096, Fu = 8192, Lr = 16384, Ci = 32768, ha = 65536, hc = 131072, zd = 1048576, Ad = 2097152, Co = 4194304, _o = 16777216, Wp = 33554432, Rl = 1028, Ud = 12854, _i = 8772, Nl = 2064, eo = 14680064, vc = y.ReactCurrentOwner;
    function Jr(e) {
      var n = e, a = e;
      if (e.alternate) for (; n.return; ) n = n.return;
      else {
        var i = n;
        do
          4098 & (n = i).flags && (a = n.return), i = n.return;
        while (i);
      }
      return n.tag === 3 ? a : null;
    }
    function gc(e) {
      if (e.tag === M) {
        var n = e.memoizedState;
        if (n === null) {
          var a = e.alternate;
          a !== null && (n = a.memoizedState);
        }
        if (n !== null) return n.dehydrated;
      }
      return null;
    }
    function Fd(e) {
      return e.tag === 3 ? e.stateNode.containerInfo : null;
    }
    function ju(e) {
      if (Jr(e) !== e) throw new Error("Unable to find node on an unmounted component.");
    }
    function jd(e) {
      var n = e.alternate;
      if (!n) {
        var a = Jr(e);
        if (a === null) throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, l = n; ; ) {
        var s = i.return;
        if (s === null) break;
        var d = s.alternate;
        if (d === null) {
          var p = s.return;
          if (p !== null) {
            i = l = p;
            continue;
          }
          break;
        }
        if (s.child === d.child) {
          for (var v = s.child; v; ) {
            if (v === i) return ju(s), e;
            if (v === l) return ju(s), n;
            v = v.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== l.return) i = s, l = d;
        else {
          for (var b = !1, x = s.child; x; ) {
            if (x === i) {
              b = !0, i = s, l = d;
              break;
            }
            if (x === l) {
              b = !0, l = s, i = d;
              break;
            }
            x = x.sibling;
          }
          if (!b) {
            for (x = d.child; x; ) {
              if (x === i) {
                b = !0, i = d, l = s;
                break;
              }
              if (x === l) {
                b = !0, l = d, i = s;
                break;
              }
              x = x.sibling;
            }
            if (!b) throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== l) throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== 3) throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : n;
    }
    function Bd(e) {
      var n = jd(e);
      return n !== null ? Wd(n) : null;
    }
    function Wd(e) {
      if (e.tag === 5 || e.tag === 6) return e;
      for (var n = e.child; n !== null; ) {
        var a = Wd(n);
        if (a !== null) return a;
        n = n.sibling;
      }
      return null;
    }
    function Vp(e) {
      var n = jd(e);
      return n !== null ? Vd(n) : null;
    }
    function Vd(e) {
      if (e.tag === 5 || e.tag === 6) return e;
      for (var n = e.child; n !== null; ) {
        if (n.tag !== 4) {
          var a = Vd(n);
          if (a !== null) return a;
        }
        n = n.sibling;
      }
      return null;
    }
    var Hd = h.unstable_scheduleCallback, Po = h.unstable_cancelCallback, $d = h.unstable_shouldYield, qd = h.unstable_requestPaint, st = h.unstable_now, ov = h.unstable_getCurrentPriorityLevel, Bu = h.unstable_ImmediatePriority, yc = h.unstable_UserBlockingPriority, In = h.unstable_NormalPriority, Qd = h.unstable_LowPriority, Il = h.unstable_IdlePriority, Wu = h.unstable_yieldValue, Hp = h.unstable_setDisableYieldValue, Ro = null, ht = null, Ae = null, or = !1, Zr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function _t(e) {
      if (typeof Wu == "function" && (Hp(e), _ = e), ht && typeof ht.setStrictMode == "function") try {
        ht.setStrictMode(Ro, e);
      } catch (n) {
        or || (or = !0, g("React instrumentation encountered an error: %s", n));
      }
    }
    function iv(e) {
      Ae = e;
    }
    function $p() {
      for (var e = /* @__PURE__ */ new Map(), n = 1, a = 0; a < Pi; a++) {
        var i = Ec(n);
        e.set(n, i), n *= 2;
      }
      return e;
    }
    function Vu() {
      Ae !== null && typeof Ae.markCommitStopped == "function" && Ae.markCommitStopped();
    }
    function No(e) {
      Ae !== null && typeof Ae.markComponentRenderStarted == "function" && Ae.markComponentRenderStarted(e);
    }
    function Io() {
      Ae !== null && typeof Ae.markComponentRenderStopped == "function" && Ae.markComponentRenderStopped();
    }
    function Yd(e) {
      Ae !== null && typeof Ae.markComponentLayoutEffectMountStarted == "function" && Ae.markComponentLayoutEffectMountStarted(e);
    }
    function bc(e) {
      Ae !== null && typeof Ae.markComponentLayoutEffectUnmountStarted == "function" && Ae.markComponentLayoutEffectUnmountStarted(e);
    }
    function wc() {
      Ae !== null && typeof Ae.markComponentLayoutEffectUnmountStopped == "function" && Ae.markComponentLayoutEffectUnmountStopped();
    }
    function lv(e, n, a) {
      Ae !== null && typeof Ae.markComponentErrored == "function" && Ae.markComponentErrored(e, n, a);
    }
    function qp(e, n, a) {
      Ae !== null && typeof Ae.markComponentSuspended == "function" && Ae.markComponentSuspended(e, n, a);
    }
    function Qp(e) {
      Ae !== null && typeof Ae.markRenderStarted == "function" && Ae.markRenderStarted(e);
    }
    function Yp() {
      Ae !== null && typeof Ae.markRenderStopped == "function" && Ae.markRenderStopped();
    }
    function Hu(e, n) {
      Ae !== null && typeof Ae.markStateUpdateScheduled == "function" && Ae.markStateUpdateScheduled(e, n);
    }
    var zt = 16, Kd = Math.clz32 ? Math.clz32 : function(e) {
      var n = e >>> 0;
      return n === 0 ? 32 : 31 - (Dl(n) / Ia | 0) | 0;
    }, Dl = Math.log, Ia = Math.LN2, Pi = 31, Ke = 1, Do = 2, no = 4, Ri = 8, Qt = 16, to = 32, va = 4194240, Ol = 1024, $u = 2048, Oo = 4096, Da = 8192, $n = 16384, jn = 32768, Oa = 65536, Pt = 131072, Yt = 262144, ro = 524288, Lo = 1048576, ir = 2097152, Ll = 130023424, Ni = 4194304, kc = 8388608, Ml = 16777216, Sc = 33554432, ga = 67108864, qu = Ni, Ii = 134217728, Xd = 268435455, ea = 268435456, na = 536870912, At = 1073741824;
    function Ec(e) {
      return e & Ke ? "Sync" : e & Do ? "InputContinuousHydration" : e & no ? "InputContinuous" : e & Ri ? "DefaultHydration" : e & Qt ? "Default" : e & to ? "TransitionHydration" : e & va ? "Transition" : e & Ll ? "Retry" : e & Ii ? "SelectiveHydration" : e & ea ? "IdleHydration" : e & na ? "Idle" : e & At ? "Offscreen" : void 0;
    }
    var Bn = -1, br = 64, wr = Ni;
    function ya(e) {
      switch (Ln(e)) {
        case Ke:
          return Ke;
        case Do:
          return Do;
        case no:
          return no;
        case Ri:
          return Ri;
        case Qt:
          return Qt;
        case to:
          return to;
        case 64:
        case 128:
        case 256:
        case 512:
        case Ol:
        case $u:
        case Oo:
        case Da:
        case $n:
        case jn:
        case Oa:
        case Pt:
        case Yt:
        case ro:
        case Lo:
        case ir:
          return e & va;
        case Ni:
        case kc:
        case Ml:
        case Sc:
        case ga:
          return e & Ll;
        case Ii:
          return Ii;
        case ea:
          return ea;
        case na:
          return na;
        case At:
          return At;
        default:
          return g("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function Mr(e, n) {
      var a = e.pendingLanes;
      if (a === 0) return 0;
      var i = 0, l = e.suspendedLanes, s = e.pingedLanes, d = a & Xd;
      if (d !== 0) {
        var p = d & ~l;
        if (p !== 0) i = ya(p);
        else {
          var v = d & s;
          v !== 0 && (i = ya(v));
        }
      } else {
        var b = a & ~l;
        b !== 0 ? i = ya(b) : s !== 0 && (i = ya(s));
      }
      if (i === 0) return 0;
      if (n !== 0 && n !== i && !(n & l)) {
        var x = Ln(i), D = Ln(n);
        if (x >= D || x === Qt && D & va) return n;
      }
      i & no && (i |= a & Qt);
      var L = e.entangledLanes;
      if (L !== 0) for (var N = e.entanglements, P = i & L; P > 0; ) {
        var E = Mo(P), w = 1 << E;
        i |= N[E], P &= ~w;
      }
      return i;
    }
    function ao(e, n) {
      switch (e) {
        case Ke:
        case Do:
        case no:
          return n + 250;
        case Ri:
        case Qt:
        case to:
        case 64:
        case 128:
        case 256:
        case 512:
        case Ol:
        case $u:
        case Oo:
        case Da:
        case $n:
        case jn:
        case Oa:
        case Pt:
        case Yt:
        case ro:
        case Lo:
        case ir:
          return n + 5e3;
        case Ni:
        case kc:
        case Ml:
        case Sc:
        case ga:
        case Ii:
        case ea:
        case na:
        case At:
          return Bn;
        default:
          return g("Should have found matching lanes. This is a bug in React."), Bn;
      }
    }
    function oo(e) {
      var n = -1073741825 & e.pendingLanes;
      return n !== 0 ? n : n & At ? At : 0;
    }
    function xc(e) {
      return !!(e & Xd);
    }
    function Tc(e) {
      return (e & Ll) === e;
    }
    function zl(e, n) {
      return !!(n & (Do | no | Ri | Qt));
    }
    function kr(e) {
      return !!(e & va);
    }
    function Sr() {
      var e = br;
      return (br <<= 1) & va || (br = 64), e;
    }
    function Ln(e) {
      return e & -e;
    }
    function lr(e) {
      return Ln(e);
    }
    function Mo(e) {
      return 31 - Kd(e);
    }
    function Cc(e) {
      return Mo(e);
    }
    function ur(e, n) {
      return !!(e & n);
    }
    function zo(e, n) {
      return (e & n) === n;
    }
    function fn(e, n) {
      return e | n;
    }
    function Di(e, n) {
      return e & ~n;
    }
    function Gd(e, n) {
      return e & n;
    }
    function Ao(e) {
      for (var n = [], a = 0; a < Pi; a++) n.push(e);
      return n;
    }
    function Oi(e, n, a) {
      e.pendingLanes |= n, n !== na && (e.suspendedLanes = 0, e.pingedLanes = 0), e.eventTimes[Cc(n)] = a;
    }
    function Kp(e, n, a) {
      e.pingedLanes |= e.suspendedLanes & n;
    }
    function Li(e, n) {
      for (var a = e.entangledLanes |= n, i = e.entanglements, l = a; l; ) {
        var s = Mo(l), d = 1 << s;
        d & n | i[s] & n && (i[s] |= n), l &= ~d;
      }
    }
    function Qu(e, n, a) {
      if (Zr) for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
        var l = Cc(a), s = 1 << l;
        i[l].add(n), a &= ~s;
      }
    }
    function Jd(e, n) {
      if (Zr) for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; n > 0; ) {
        var l = Cc(n), s = 1 << l, d = a[l];
        d.size > 0 && (d.forEach(function(p) {
          var v = p.alternate;
          v !== null && i.has(v) || i.add(p);
        }), d.clear()), n &= ~s;
      }
    }
    var Zd, Uo, ef, Yu, Ku, Ut = Ke, ba = no, La = Qt, Al = na, Mi = 0;
    function sr() {
      return Mi;
    }
    function Vn(e) {
      Mi = e;
    }
    function io(e, n) {
      return e !== 0 && e < n;
    }
    function _c(e) {
      var n = Ln(e);
      return io(Ut, n) ? io(ba, n) ? xc(n) ? La : Al : ba : Ut;
    }
    function Xu(e) {
      return e.current.memoizedState.isDehydrated;
    }
    function lo(e) {
      Zd(e);
    }
    var Ma = !1, Ul = [], uo = null, Kt = null, cr = null, Fo = /* @__PURE__ */ new Map(), Fl = /* @__PURE__ */ new Map(), wa = [], Xp = ["mousedown", "mouseup", "touchcancel", "touchend", "touchstart", "auxclick", "dblclick", "pointercancel", "pointerdown", "pointerup", "dragend", "dragstart", "drop", "compositionend", "compositionstart", "keydown", "keypress", "keyup", "input", "textInput", "copy", "cut", "paste", "click", "change", "contextmenu", "reset", "submit"];
    function jl(e, n) {
      switch (e) {
        case "focusin":
        case "focusout":
          uo = null;
          break;
        case "dragenter":
        case "dragleave":
          Kt = null;
          break;
        case "mouseover":
        case "mouseout":
          cr = null;
          break;
        case "pointerover":
        case "pointerout":
          var a = n.pointerId;
          Fo.delete(a);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          var i = n.pointerId;
          Fl.delete(i);
      }
    }
    function Er(e, n, a, i, l, s) {
      if (e === null || e.nativeEvent !== s) {
        var d = /* @__PURE__ */ function(b, x, D, L, N) {
          return { blockedOn: b, domEventName: x, eventSystemFlags: D, nativeEvent: N, targetContainers: [L] };
        }(n, a, i, l, s);
        if (n !== null) {
          var p = ni(n);
          p !== null && Uo(p);
        }
        return d;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return l !== null && v.indexOf(l) === -1 && v.push(l), e;
    }
    function Bl(e) {
      var n = co(e.target);
      if (n !== null) {
        var a = Jr(n);
        if (a !== null) {
          var i = a.tag;
          if (i === M) {
            var l = gc(a);
            if (l !== null) return e.blockedOn = l, void Ku(e.priority, function() {
              ef(a);
            });
          } else if (i === 3 && Xu(a.stateNode))
            return void (e.blockedOn = Fd(a));
        }
      }
      e.blockedOn = null;
    }
    function jo(e) {
      if (e.blockedOn !== null) return !1;
      for (var n, a = e.targetContainers; a.length > 0; ) {
        var i = a[0], l = so(e.domEventName, e.eventSystemFlags, i, e.nativeEvent);
        if (l !== null) {
          var s = ni(l);
          return s !== null && Uo(s), e.blockedOn = l, !1;
        }
        var d = e.nativeEvent, p = new d.constructor(d.type, d);
        n = p, yi !== null && g("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), yi = n, d.target.dispatchEvent(p), yi === null && g("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), yi = null, a.shift();
      }
      return !0;
    }
    function Bo(e, n, a) {
      jo(e) && a.delete(n);
    }
    function nf() {
      Ma = !1, uo !== null && jo(uo) && (uo = null), Kt !== null && jo(Kt) && (Kt = null), cr !== null && jo(cr) && (cr = null), Fo.forEach(Bo), Fl.forEach(Bo);
    }
    function za(e, n) {
      e.blockedOn === n && (e.blockedOn = null, Ma || (Ma = !0, h.unstable_scheduleCallback(h.unstable_NormalPriority, nf)));
    }
    function Wl(e) {
      if (Ul.length > 0) {
        za(Ul[0], e);
        for (var n = 1; n < Ul.length; n++) {
          var a = Ul[n];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      uo !== null && za(uo, e), Kt !== null && za(Kt, e), cr !== null && za(cr, e);
      var i = function(p) {
        return za(p, e);
      };
      Fo.forEach(i), Fl.forEach(i);
      for (var l = 0; l < wa.length; l++) {
        var s = wa[l];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; wa.length > 0; ) {
        var d = wa[0];
        if (d.blockedOn !== null) break;
        Bl(d), d.blockedOn === null && wa.shift();
      }
    }
    var Wo = y.ReactCurrentBatchConfig, nt = !0;
    function Gu(e) {
      nt = !!e;
    }
    function tf(e, n, a, i) {
      var l = sr(), s = Wo.transition;
      Wo.transition = null;
      try {
        Vn(Ut), Vl(e, n, a, i);
      } finally {
        Vn(l), Wo.transition = s;
      }
    }
    function rf(e, n, a, i) {
      var l = sr(), s = Wo.transition;
      Wo.transition = null;
      try {
        Vn(ba), Vl(e, n, a, i);
      } finally {
        Vn(l), Wo.transition = s;
      }
    }
    function Vl(e, n, a, i) {
      nt && function(l, s, d, p) {
        var v = so(l, s, d, p);
        if (v === null) return Fa(l, s, p, Hl, d), void jl(l, p);
        if (function(D, L, N, P, E) {
          switch (L) {
            case "focusin":
              return uo = Er(uo, D, L, N, P, E), !0;
            case "dragenter":
              return Kt = Er(Kt, D, L, N, P, E), !0;
            case "mouseover":
              return cr = Er(cr, D, L, N, P, E), !0;
            case "pointerover":
              var w = E, R = w.pointerId;
              return Fo.set(R, Er(Fo.get(R) || null, D, L, N, P, w)), !0;
            case "gotpointercapture":
              var O = E, W = O.pointerId;
              return Fl.set(W, Er(Fl.get(W) || null, D, L, N, P, O)), !0;
          }
          return !1;
        }(v, l, s, d, p)) return void p.stopPropagation();
        if (jl(l, p), 4 & s && function(D) {
          return Xp.indexOf(D) > -1;
        }(l)) {
          for (; v !== null; ) {
            var b = ni(v);
            b !== null && lo(b);
            var x = so(l, s, d, p);
            if (x === null && Fa(l, s, p, Hl, d), x === v) break;
            v = x;
          }
          return void (v !== null && p.stopPropagation());
        }
        Fa(l, s, p, null, d);
      }(e, n, a, i);
    }
    var Hl = null;
    function so(e, n, a, i) {
      Hl = null;
      var l = co(Pd(i));
      if (l !== null) {
        var s = Jr(l);
        if (s === null) l = null;
        else {
          var d = s.tag;
          if (d === M) {
            var p = gc(s);
            if (p !== null) return p;
            l = null;
          } else if (d === 3) {
            if (Xu(s.stateNode)) return Fd(s);
            l = null;
          } else s !== l && (l = null);
        }
      }
      return Hl = l, null;
    }
    function tt(e) {
      switch (e) {
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
          return Ut;
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
          return ba;
        case "message":
          switch (ov()) {
            case Bu:
              return Ut;
            case yc:
              return ba;
            case In:
            case Qd:
              return La;
            case Il:
              return Al;
            default:
              return La;
          }
        default:
          return La;
      }
    }
    var ct = null, vt = null, zi = null;
    function $l() {
      if (zi) return zi;
      var e, n, a = vt, i = a.length, l = ql(), s = l.length;
      for (e = 0; e < i && a[e] === l[e]; e++) ;
      var d = i - e;
      for (n = 1; n <= d && a[i - n] === l[s - n]; n++) ;
      var p = n > 1 ? 1 - n : void 0;
      return zi = l.slice(e, p);
    }
    function ql() {
      return "value" in ct ? ct.value : ct.textContent;
    }
    function Pc(e) {
      var n, a = e.keyCode;
      return "charCode" in e ? (n = e.charCode) === 0 && a === 13 && (n = 13) : n = a, n === 10 && (n = 13), n >= 32 || n === 13 ? n : 0;
    }
    function St() {
      return !0;
    }
    function Rc() {
      return !1;
    }
    function dr(e) {
      function n(a, i, l, s, d) {
        for (var p in this._reactName = a, this._targetInst = l, this.type = i, this.nativeEvent = s, this.target = d, this.currentTarget = null, e) if (e.hasOwnProperty(p)) {
          var v = e[p];
          this[p] = v ? v(s) : s[p];
        }
        var b = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return this.isDefaultPrevented = b ? St : Rc, this.isPropagationStopped = Rc, this;
      }
      return He(n.prototype, { preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = St);
      }, stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = St);
      }, persist: function() {
      }, isPersistent: St }), n;
    }
    var Ju, ta, Xt, Aa = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
      return e.timeStamp || Date.now();
    }, defaultPrevented: 0, isTrusted: 0 }, Zu = dr(Aa), Ai = He({}, Aa, { view: 0, detail: 0 }), Gp = dr(Ai), es = He({}, Ai, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ts, button: 0, buttons: 0, relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    }, movementX: function(e) {
      return "movementX" in e ? e.movementX : (function(n) {
        n !== Xt && (Xt && n.type === "mousemove" ? (Ju = n.screenX - Xt.screenX, ta = n.screenY - Xt.screenY) : (Ju = 0, ta = 0), Xt = n);
      }(e), Ju);
    }, movementY: function(e) {
      return "movementY" in e ? e.movementY : ta;
    } }), af = dr(es), Jp = dr(He({}, es, { dataTransfer: 0 })), Nc = dr(He({}, Ai, { relatedTarget: 0 })), Zp = dr(He({}, Aa, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })), em = dr(He({}, Aa, { clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    } })), of = dr(He({}, Aa, { data: 0 })), ns = of, nm = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, Ic = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, Dc = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
    function tm(e) {
      var n = this.nativeEvent;
      if (n.getModifierState) return n.getModifierState(e);
      var a = Dc[e];
      return !!a && !!n[a];
    }
    function ts(e) {
      return tm;
    }
    var rm = dr(He({}, Ai, { key: function(e) {
      if (e.key) {
        var n = nm[e.key] || e.key;
        if (n !== "Unidentified") return n;
      }
      if (e.type === "keypress") {
        var a = Pc(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Ic[e.keyCode] || "Unidentified" : "";
    }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ts, charCode: function(e) {
      return e.type === "keypress" ? Pc(e) : 0;
    }, keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }, which: function(e) {
      return e.type === "keypress" ? Pc(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    } })), lf = dr(He({}, es, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 })), am = dr(He({}, Ai, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ts })), om = dr(He({}, Aa, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })), uf = dr(He({}, es, { deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    }, deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    }, deltaZ: 0, deltaMode: 0 })), im = [9, 13, 27, 32], sf = 229, Oc = nn && "CompositionEvent" in window, rs = null;
    nn && "documentMode" in document && (rs = document.documentMode);
    var lm = nn && "TextEvent" in window && !rs, um = nn && (!Oc || rs && rs > 8 && rs <= 11), sm = 32, cf = String.fromCharCode(sm), df = !1;
    function ff(e, n) {
      switch (e) {
        case "keyup":
          return im.indexOf(n.keyCode) !== -1;
        case "keydown":
          return n.keyCode !== sf;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function as(e) {
      var n = e.detail;
      return typeof n == "object" && "data" in n ? n.data : null;
    }
    function cm(e) {
      return e.locale === "ko";
    }
    var Ql = !1;
    function uv(e, n, a, i, l) {
      var s, d;
      if (Oc ? s = function(x) {
        switch (x) {
          case "compositionstart":
            return "onCompositionStart";
          case "compositionend":
            return "onCompositionEnd";
          case "compositionupdate":
            return "onCompositionUpdate";
        }
      }(n) : Ql ? ff(n, i) && (s = "onCompositionEnd") : function(x, D) {
        return x === "keydown" && D.keyCode === sf;
      }(n, i) && (s = "onCompositionStart"), !s) return null;
      um && !cm(i) && (Ql || s !== "onCompositionStart" ? s === "onCompositionEnd" && Ql && (d = $l()) : Ql = function(x) {
        return ct = x, vt = ql(), !0;
      }(l));
      var p = ss(a, s);
      if (p.length > 0) {
        var v = new of(s, n, null, i, l);
        if (e.push({ event: v, listeners: p }), d) v.data = d;
        else {
          var b = as(i);
          b !== null && (v.data = b);
        }
      }
    }
    function ka(e, n) {
      if (Ql) {
        if (e === "compositionend" || !Oc && ff(e, n)) {
          var a = $l();
          return ct = null, vt = null, zi = null, Ql = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
        default:
          return null;
        case "keypress":
          if (!function(i) {
            return (i.ctrlKey || i.altKey || i.metaKey) && !(i.ctrlKey && i.altKey);
          }(n)) {
            if (n.char && n.char.length > 1) return n.char;
            if (n.which) return String.fromCharCode(n.which);
          }
          return null;
        case "compositionend":
          return um && !cm(n) ? null : n.data;
      }
    }
    function pf(e, n, a, i, l) {
      var s;
      if (!(s = lm ? function(v, b) {
        switch (v) {
          case "compositionend":
            return as(b);
          case "keypress":
            return b.which !== sm ? null : (df = !0, cf);
          case "textInput":
            var x = b.data;
            return x === cf && df ? null : x;
          default:
            return null;
        }
      }(n, i) : ka(n, i))) return null;
      var d = ss(a, "onBeforeInput");
      if (d.length > 0) {
        var p = new ns("onBeforeInput", "beforeinput", null, i, l);
        e.push({ event: p, listeners: d }), p.data = s;
      }
    }
    var Lc = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
    function mf(e) {
      var n = e && e.nodeName && e.nodeName.toLowerCase();
      return n === "input" ? !!Lc[e.type] : n === "textarea";
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
    function hf(e, n, a, i) {
      Up(i);
      var l = ss(n, "onChange");
      if (l.length > 0) {
        var s = new Zu("onChange", "change", null, a, i);
        e.push({ event: s, listeners: l });
      }
    }
    var os = null, Ui = null;
    function Yl(e) {
      _f(e, 0);
    }
    function Kl(e) {
      if (Pp(ti(e))) return e;
    }
    function vf(e, n) {
      if (e === "change") return n;
    }
    var dm = !1;
    function gf() {
      os && (os.detachEvent("onpropertychange", yf), os = null, Ui = null);
    }
    function yf(e) {
      e.propertyName === "value" && Kl(Ui) && function(n) {
        var a = [];
        hf(a, Ui, n, Pd(n)), Nd(Yl, a);
      }(e);
    }
    function fm(e, n, a) {
      e === "focusin" ? (gf(), function(i, l) {
        Ui = l, (os = i).attachEvent("onpropertychange", yf);
      }(n, a)) : e === "focusout" && gf();
    }
    function pm(e, n) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown") return Kl(Ui);
    }
    function mm(e, n) {
      if (e === "click") return Kl(n);
    }
    function sv(e, n) {
      if (e === "input" || e === "change") return Kl(n);
    }
    function xr(e, n, a, i, l, s, d) {
      var p, v, b, x, D, L, N = a ? ti(a) : window;
      if ((x = (b = N).nodeName && b.nodeName.toLowerCase()) === "select" || x === "input" && b.type === "file" ? p = vf : mf(N) ? dm ? p = sv : (p = pm, v = fm) : function(E) {
        var w = E.nodeName;
        return w && w.toLowerCase() === "input" && (E.type === "checkbox" || E.type === "radio");
      }(N) && (p = mm), p) {
        var P = p(n, a);
        if (P) return void hf(e, P, i, l);
      }
      v && v(n, N, a), n === "focusout" && (L = (D = N)._wrapperState) && L.controlled && D.type === "number" && Zs(D, "number", D.value);
    }
    function Tr(e, n, a, i, l, s, d) {
      var p = n === "mouseover" || n === "pointerover", v = n === "mouseout" || n === "pointerout";
      if (p && i !== yi) {
        var b = i.relatedTarget || i.fromElement;
        if (b && (co(b) || qi(b))) return;
      }
      if (v || p) {
        var x, D, L;
        if (l.window === l) x = l;
        else {
          var N = l.ownerDocument;
          x = N ? N.defaultView || N.parentWindow : window;
        }
        if (v) {
          var P = i.relatedTarget || i.toElement;
          D = a, (L = P ? co(P) : null) !== null && (L !== Jr(L) || L.tag !== 5 && L.tag !== 6) && (L = null);
        } else D = null, L = a;
        if (D !== L) {
          var E = af, w = "onMouseLeave", R = "onMouseEnter", O = "mouse";
          n !== "pointerout" && n !== "pointerover" || (E = lf, w = "onPointerLeave", R = "onPointerEnter", O = "pointer");
          var W = D == null ? x : ti(D), K = L == null ? x : ti(L), X = new E(w, O + "leave", D, i, l);
          X.target = W, X.relatedTarget = K;
          var J = null;
          if (co(l) === a) {
            var se = new E(R, O + "enter", L, i, l);
            se.target = K, se.relatedTarget = W, J = se;
          }
          (function(fe, le, Se, Ye, qe) {
            var Ge = Ye && qe ? function(vn, un) {
              for (var Tn = vn, Un = un, at = 0, ua = Tn; ua; ua = fr(ua)) at++;
              for (var Jn = 0, $r = Un; $r; $r = fr($r)) Jn++;
              for (; at - Jn > 0; ) Tn = fr(Tn), at--;
              for (; Jn - at > 0; ) Un = fr(Un), Jn--;
              for (var sa = at; sa--; ) {
                if (Tn === Un || Un !== null && Tn === Un.alternate) return Tn;
                Tn = fr(Tn), Un = fr(Un);
              }
              return null;
            }(Ye, qe) : null;
            Ye !== null && Pf(fe, le, Ye, Ge, !1), qe !== null && Se !== null && Pf(fe, Se, qe, Ge, !0);
          })(e, X, J, D, L);
        }
      }
    }
    nn && (dm = function(e) {
      if (!nn) return !1;
      var n = "on" + e, a = n in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(n, "return;"), a = typeof i[n] == "function";
      }
      return a;
    }("input") && (!document.documentMode || document.documentMode > 9));
    var Cr = typeof Object.is == "function" ? Object.is : function(e, n) {
      return e === n && (e !== 0 || 1 / e == 1 / n) || e != e && n != n;
    };
    function Xl(e, n) {
      if (Cr(e, n)) return !0;
      if (typeof e != "object" || e === null || typeof n != "object" || n === null) return !1;
      var a = Object.keys(e), i = Object.keys(n);
      if (a.length !== i.length) return !1;
      for (var l = 0; l < a.length; l++) {
        var s = a[l];
        if (!pn.call(n, s) || !Cr(e[s], n[s])) return !1;
      }
      return !0;
    }
    function bf(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function hm(e) {
      for (; e; ) {
        if (e.nextSibling) return e.nextSibling;
        e = e.parentNode;
      }
    }
    function wf(e, n) {
      for (var a = bf(e), i = 0, l = 0; a; ) {
        if (a.nodeType === 3) {
          if (l = i + a.textContent.length, i <= n && l >= n) return { node: a, offset: n - i };
          i = l;
        }
        a = bf(hm(a));
      }
    }
    function kf(e) {
      var n = e.ownerDocument, a = n && n.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0) return null;
      var l = i.anchorNode, s = i.anchorOffset, d = i.focusNode, p = i.focusOffset;
      try {
        l.nodeType, d.nodeType;
      } catch {
        return null;
      }
      return function(v, b, x, D, L) {
        var N = 0, P = -1, E = -1, w = 0, R = 0, O = v, W = null;
        e: for (; ; ) {
          for (var K = null; O !== b || x !== 0 && O.nodeType !== 3 || (P = N + x), O !== D || L !== 0 && O.nodeType !== 3 || (E = N + L), O.nodeType === 3 && (N += O.nodeValue.length), (K = O.firstChild) !== null; ) W = O, O = K;
          for (; ; ) {
            if (O === v) break e;
            if (W === b && ++w === x && (P = N), W === D && ++R === L && (E = N), (K = O.nextSibling) !== null) break;
            W = (O = W).parentNode;
          }
          O = K;
        }
        return P === -1 || E === -1 ? null : { start: P, end: E };
      }(e, l, s, d, p);
    }
    function Sf(e) {
      return e && e.nodeType === 3;
    }
    function Mc(e, n) {
      return !(!e || !n) && (e === n || !Sf(e) && (Sf(n) ? Mc(e, n.parentNode) : "contains" in e ? e.contains(n) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(n))));
    }
    function vm(e) {
      return e && e.ownerDocument && Mc(e.ownerDocument.documentElement, e);
    }
    function gm(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function Ef() {
      for (var e = window, n = Ru(); n instanceof e.HTMLIFrameElement; ) {
        if (!gm(n)) return n;
        n = Ru((e = n.contentWindow).document);
      }
      return n;
    }
    function is(e) {
      var n = e && e.nodeName && e.nodeName.toLowerCase();
      return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true");
    }
    function ym(e) {
      var n = Ef(), a = e.focusedElem, i = e.selectionRange;
      if (n !== a && vm(a)) {
        i !== null && is(a) && function(v, b) {
          var x = b.start, D = b.end;
          D === void 0 && (D = x), "selectionStart" in v ? (v.selectionStart = x, v.selectionEnd = Math.min(D, v.value.length)) : function(L, N) {
            var P = L.ownerDocument || document, E = P && P.defaultView || window;
            if (E.getSelection) {
              var w = E.getSelection(), R = L.textContent.length, O = Math.min(N.start, R), W = N.end === void 0 ? O : Math.min(N.end, R);
              if (!w.extend && O > W) {
                var K = W;
                W = O, O = K;
              }
              var X = wf(L, O), J = wf(L, W);
              if (X && J) {
                if (w.rangeCount === 1 && w.anchorNode === X.node && w.anchorOffset === X.offset && w.focusNode === J.node && w.focusOffset === J.offset) return;
                var se = P.createRange();
                se.setStart(X.node, X.offset), w.removeAllRanges(), O > W ? (w.addRange(se), w.extend(J.node, J.offset)) : (se.setEnd(J.node, J.offset), w.addRange(se));
              }
            }
          }(v, b);
        }(a, i);
        for (var l = [], s = a; s = s.parentNode; ) s.nodeType === 1 && l.push({ element: s, left: s.scrollLeft, top: s.scrollTop });
        typeof a.focus == "function" && a.focus();
        for (var d = 0; d < l.length; d++) {
          var p = l[d];
          p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
        }
      }
    }
    function bm(e) {
      return ("selectionStart" in e ? { start: e.selectionStart, end: e.selectionEnd } : kf(e)) || { start: 0, end: 0 };
    }
    var xf = nn && "documentMode" in document && document.documentMode <= 11, Vo = null, zc = null, Fi = null, Gl = !1;
    function Tf(e, n, a) {
      var i, l = (i = a).window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
      if (!Gl && Vo != null && Vo === Ru(l)) {
        var s = function(v) {
          if ("selectionStart" in v && is(v)) return { start: v.selectionStart, end: v.selectionEnd };
          var b = (v.ownerDocument && v.ownerDocument.defaultView || window).getSelection();
          return { anchorNode: b.anchorNode, anchorOffset: b.anchorOffset, focusNode: b.focusNode, focusOffset: b.focusOffset };
        }(Vo);
        if (!Fi || !Xl(Fi, s)) {
          Fi = s;
          var d = ss(zc, "onSelect");
          if (d.length > 0) {
            var p = new Zu("onSelect", "select", null, n, a);
            e.push({ event: p, listeners: d }), p.target = Vo;
          }
        }
      }
    }
    function Jl(e, n) {
      var a = {};
      return a[e.toLowerCase()] = n.toLowerCase(), a["Webkit" + e] = "webkit" + n, a["Moz" + e] = "moz" + n, a;
    }
    var ji = { animationend: Jl("Animation", "AnimationEnd"), animationiteration: Jl("Animation", "AnimationIteration"), animationstart: Jl("Animation", "AnimationStart"), transitionend: Jl("Transition", "TransitionEnd") }, Zl = {}, Ua = {};
    function Ho(e) {
      if (Zl[e]) return Zl[e];
      if (!ji[e]) return e;
      var n = ji[e];
      for (var a in n) if (n.hasOwnProperty(a) && a in Ua) return Zl[e] = n[a];
      return e;
    }
    nn && (Ua = document.createElement("div").style, "AnimationEvent" in window || (delete ji.animationend.animation, delete ji.animationiteration.animation, delete ji.animationstart.animation), "TransitionEvent" in window || delete ji.transitionend.transition);
    var Gt = Ho("animationend"), wm = Ho("animationiteration"), km = Ho("animationstart"), ls = Ho("transitionend"), Ft = /* @__PURE__ */ new Map(), Sm = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Fe(e, n) {
      Ft.set(e, n), be(n, [e]);
    }
    function eu(e, n, a, i, l, s, d) {
      var p = Ft.get(n);
      if (p !== void 0) {
        var v = Zu, b = n;
        switch (n) {
          case "keypress":
            if (Pc(i) === 0) return;
          case "keydown":
          case "keyup":
            v = rm;
            break;
          case "focusin":
            b = "focus", v = Nc;
            break;
          case "focusout":
            b = "blur", v = Nc;
            break;
          case "beforeblur":
          case "afterblur":
            v = Nc;
            break;
          case "click":
            if (i.button === 2) return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = af;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Jp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = am;
            break;
          case Gt:
          case wm:
          case km:
            v = Zp;
            break;
          case ls:
            v = om;
            break;
          case "scroll":
            v = Gp;
            break;
          case "wheel":
            v = uf;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = em;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = lf;
        }
        var x = !!(4 & s), D = !x && n === "scroll", L = function(P, E, w, R, O) {
          for (var W = E !== null ? E + "Capture" : null, K = R ? W : E, X = [], J = P, se = null; J !== null; ) {
            var fe = J, le = fe.stateNode;
            if (fe.tag === 5 && le !== null && (se = le, K !== null)) {
              var Se = Cl(J, K);
              Se != null && X.push(ru(J, Se, se));
            }
            if (O) break;
            J = J.return;
          }
          return X;
        }(a, p, i.type, x, D);
        if (L.length > 0) {
          var N = new v(p, b, null, i, l);
          e.push({ event: N, listeners: L });
        }
      }
    }
    function Em(e, n, a, i, l, s, d) {
      eu(e, n, a, i, l, s), !(7 & s) && (Tr(e, n, a, i, l), xr(e, n, a, i, l), function(p, v, b, x, D) {
        var L = b ? ti(b) : window;
        switch (v) {
          case "focusin":
            (mf(L) || L.contentEditable === "true") && (Vo = L, zc = b, Fi = null);
            break;
          case "focusout":
            Vo = null, zc = null, Fi = null;
            break;
          case "mousedown":
            Gl = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Gl = !1, Tf(p, x, D);
            break;
          case "selectionchange":
            if (xf) break;
          case "keydown":
          case "keyup":
            Tf(p, x, D);
        }
      }(e, n, a, i, l), function(p, v, b, x, D) {
        uv(p, v, b, x, D), pf(p, v, b, x, D);
      }(e, n, a, i, l));
    }
    (function() {
      for (var e = 0; e < Sm.length; e++) {
        var n = Sm[e];
        Fe(n.toLowerCase(), "on" + (n[0].toUpperCase() + n.slice(1)));
      }
      Fe(Gt, "onAnimationEnd"), Fe(wm, "onAnimationIteration"), Fe(km, "onAnimationStart"), Fe("dblclick", "onDoubleClick"), Fe("focusin", "onFocus"), Fe("focusout", "onBlur"), Fe(ls, "onTransitionEnd");
    })(), ue("onMouseEnter", ["mouseout", "mouseover"]), ue("onMouseLeave", ["mouseout", "mouseover"]), ue("onPointerEnter", ["pointerout", "pointerover"]), ue("onPointerLeave", ["pointerout", "pointerover"]), be("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]), be("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]), be("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), be("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), be("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), be("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    var nu = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], Bi = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(nu));
    function us(e, n, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, function(l, s, d, p, v, b, x, D, L) {
        if (Ld.apply(this, arguments), Si) {
          var N = mc();
          xo || (xo = !0, Od = N);
        }
      }(i, n, void 0, e), e.currentTarget = null;
    }
    function Cf(e, n, a) {
      var i;
      if (a) for (var l = n.length - 1; l >= 0; l--) {
        var s = n[l], d = s.instance, p = s.currentTarget, v = s.listener;
        if (d !== i && e.isPropagationStopped()) return;
        us(e, v, p), i = d;
      }
      else for (var b = 0; b < n.length; b++) {
        var x = n[b], D = x.instance, L = x.currentTarget, N = x.listener;
        if (D !== i && e.isPropagationStopped()) return;
        us(e, N, L), i = D;
      }
    }
    function _f(e, n) {
      for (var a = !!(4 & n), i = 0; i < e.length; i++) {
        var l = e[i];
        Cf(l.event, l.listeners, a);
      }
      (function() {
        if (xo) {
          var s = Od;
          throw xo = !1, Od = null, s;
        }
      })();
    }
    function qn(e, n) {
      Bi.has(e) || g('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = function(l) {
        var s = l[Rr];
        return s === void 0 && (s = l[Rr] = /* @__PURE__ */ new Set()), s;
      }(n), i = function(l) {
        return l + "__bubble";
      }(e);
      a.has(i) || (Jt(n, e, 2, !1), a.add(i));
    }
    function Ac(e, n, a) {
      Bi.has(e) && !n && g('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      n && (i |= 4), Jt(a, e, i, n);
    }
    var tu = "_reactListening" + Math.random().toString(36).slice(2);
    function Wi(e) {
      if (!e[tu]) {
        e[tu] = !0, We.forEach(function(a) {
          a !== "selectionchange" && (Bi.has(a) || Ac(a, !1, e), Ac(a, !0, e));
        });
        var n = e.nodeType === 9 ? e : e.ownerDocument;
        n !== null && (n[tu] || (n[tu] = !0, Ac("selectionchange", !1, n)));
      }
    }
    function Jt(e, n, a, i, l) {
      var s = function(p, v, b) {
        var x;
        switch (tt(v)) {
          case Ut:
            x = tf;
            break;
          case ba:
            x = rf;
            break;
          default:
            x = Vl;
        }
        return x.bind(null, v, b, p);
      }(e, n, a), d = void 0;
      fc && (n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (d = !0)), i ? d !== void 0 ? function(p, v, b, x) {
        p.addEventListener(v, b, { capture: !0, passive: x });
      }(e, n, s, d) : function(p, v, b) {
        p.addEventListener(v, b, !0);
      }(e, n, s) : d !== void 0 ? function(p, v, b, x) {
        p.addEventListener(v, b, { passive: x });
      }(e, n, s, d) : function(p, v, b) {
        p.addEventListener(v, b, !1);
      }(e, n, s);
    }
    function Sa(e, n) {
      return e === n || e.nodeType === 8 && e.parentNode === n;
    }
    function Fa(e, n, a, i, l) {
      var s = i;
      if (!(1 & n || 2 & n)) {
        var d = l;
        if (i !== null) {
          var p = i;
          e: for (; ; ) {
            if (p === null) return;
            var v = p.tag;
            if (v === 3 || v === 4) {
              var b = p.stateNode.containerInfo;
              if (Sa(b, d)) break;
              if (v === 4) for (var x = p.return; x !== null; ) {
                var D = x.tag;
                if ((D === 3 || D === 4) && Sa(x.stateNode.containerInfo, d)) return;
                x = x.return;
              }
              for (; b !== null; ) {
                var L = co(b);
                if (L === null) return;
                var N = L.tag;
                if (N === 5 || N === 6) {
                  p = s = L;
                  continue e;
                }
                b = b.parentNode;
              }
            }
            p = p.return;
          }
        }
      }
      Nd(function() {
        return function(P, E, w, R) {
          var O = [];
          Em(O, P, R, w, Pd(w), E), _f(O, E);
        }(e, n, a, s);
      });
    }
    function ru(e, n, a) {
      return { instance: e, listener: n, currentTarget: a };
    }
    function ss(e, n) {
      for (var a = n + "Capture", i = [], l = e; l !== null; ) {
        var s = l, d = s.stateNode;
        if (s.tag === 5 && d !== null) {
          var p = d, v = Cl(l, a);
          v != null && i.unshift(ru(l, v, p));
          var b = Cl(l, n);
          b != null && i.push(ru(l, b, p));
        }
        l = l.return;
      }
      return i;
    }
    function fr(e) {
      if (e === null) return null;
      do
        e = e.return;
      while (e && e.tag !== 5);
      return e || null;
    }
    function Pf(e, n, a, i, l) {
      for (var s = n._reactName, d = [], p = a; p !== null && p !== i; ) {
        var v = p, b = v.alternate, x = v.stateNode, D = v.tag;
        if (b !== null && b === i) break;
        if (D === 5 && x !== null) {
          var L = x;
          if (l) {
            var N = Cl(p, s);
            N != null && d.unshift(ru(p, N, L));
          } else if (!l) {
            var P = Cl(p, s);
            P != null && d.push(ru(p, P, L));
          }
        }
        p = p.return;
      }
      d.length !== 0 && e.push({ event: n, listeners: d });
    }
    var Ea, Uc, au, Rf, cs, Nf, If, _r = !1, $o = "dangerouslySetInnerHTML", ou = "suppressContentEditableWarning", Et = "suppressHydrationWarning", Pn = "autoFocus", rt = "children", Qn = "style", gt = "__html";
    Ea = { dialog: !0, webview: !0 }, Uc = function(e, n) {
      Cd(e, n), function(a, i) {
        a !== "input" && a !== "textarea" && a !== "select" || i == null || i.value !== null || Mp || (Mp = !0, a === "select" && i.multiple ? g("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", a) : g("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", a));
      }(e, n), rv(e, n, { registrationNameDependencies: xe, possibleRegistrationNames: Le });
    }, Nf = nn && !document.documentMode, au = function(e, n, a) {
      if (!_r) {
        var i = dt(a), l = dt(n);
        l !== i && (_r = !0, g("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(l), JSON.stringify(i)));
      }
    }, Rf = function(e) {
      if (!_r) {
        _r = !0;
        var n = [];
        e.forEach(function(a) {
          n.push(a);
        }), g("Extra attributes from the server: %s", n);
      }
    }, cs = function(e, n) {
      n === !1 ? g("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : g("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof n);
    }, If = function(e, n) {
      var a = e.namespaceURI === qt ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = n, a.innerHTML;
    };
    var zr = /\r\n?/g, iu = /\u0000|\uFFFD/g;
    function dt(e) {
      return function(n) {
        gn(n) && (g("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Ze(n)), ve(n));
      }(e), (typeof e == "string" ? e : "" + e).replace(zr, `
`).replace(iu, "");
    }
    function qo(e, n, a, i) {
      var l = dt(n), s = dt(e);
      if (s !== l && (i && (_r || (_r = !0, g('Text content did not match. Server: "%s" Client: "%s"', s, l))), a)) throw new Error("Text content does not match server-rendered HTML.");
    }
    function Qo(e) {
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function Fc() {
    }
    function lu(e) {
      e.onclick = Fc;
    }
    function ds(e, n, a, i) {
      var l, s = Gr(n, a);
      switch (Uc(n, a), n) {
        case "dialog":
          qn("cancel", e), qn("close", e), l = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          qn("load", e), l = a;
          break;
        case "video":
        case "audio":
          for (var d = 0; d < nu.length; d++) qn(nu[d], e);
          l = a;
          break;
        case "source":
          qn("error", e), l = a;
          break;
        case "img":
        case "image":
        case "link":
          qn("error", e), qn("load", e), l = a;
          break;
        case "details":
          qn("toggle", e), l = a;
          break;
        case "input":
          Js(e, a), l = Iu(e, a), qn("invalid", e);
          break;
        case "option":
          On(0, a), l = a;
          break;
        case "select":
          Ou(e, a), l = Du(0, a), qn("invalid", e);
          break;
        case "textarea":
          Ja(e, a), l = Na(e, a), qn("invalid", e);
          break;
        default:
          l = a;
      }
      switch (gi(n, l), function(p, v, b, x, D) {
        for (var L in x) if (x.hasOwnProperty(L)) {
          var N = x[L];
          if (L === Qn) N && Object.freeze(N), yr(v, N);
          else if (L === $o) {
            var P = N ? N[gt] : void 0;
            P != null && wd(v, P);
          } else L === rt ? typeof N == "string" ? (p !== "textarea" || N !== "") && oc(v, N) : typeof N == "number" && oc(v, "" + N) : L === ou || L === Et || L === Pn || (xe.hasOwnProperty(L) ? N != null && (typeof N != "function" && cs(L, N), L === "onScroll" && qn("scroll", v)) : N != null && rr(v, L, N, D));
        }
      }(n, e, 0, l, s), n) {
        case "input":
          pl(e), Ip(e, a, !1);
          break;
        case "textarea":
          pl(e), yl(e);
          break;
        case "option":
          (function(p, v) {
            v.value != null && p.setAttribute("value", Yr(Eo(v.value)));
          })(e, a);
          break;
        case "select":
          (function(p, v) {
            var b = p;
            b.multiple = !!v.multiple;
            var x = v.value;
            x != null ? hi(b, !!v.multiple, x, !1) : v.defaultValue != null && hi(b, !!v.multiple, v.defaultValue, !0);
          })(e, a);
          break;
        default:
          typeof l.onClick == "function" && lu(e);
      }
    }
    function Ar(e, n, a, i, l) {
      Uc(n, i);
      var s, d, p, v, b = null;
      switch (n) {
        case "input":
          s = Iu(e, a), d = Iu(e, i), b = [];
          break;
        case "select":
          s = Du(0, a), d = Du(0, i), b = [];
          break;
        case "textarea":
          s = Na(e, a), d = Na(e, i), b = [];
          break;
        default:
          d = i, typeof (s = a).onClick != "function" && typeof d.onClick == "function" && lu(e);
      }
      gi(n, d);
      var x = null;
      for (p in s) if (!d.hasOwnProperty(p) && s.hasOwnProperty(p) && s[p] != null) if (p === Qn) {
        var D = s[p];
        for (v in D) D.hasOwnProperty(v) && (x || (x = {}), x[v] = "");
      } else p === $o || p === rt || p === ou || p === Et || p === Pn || (xe.hasOwnProperty(p) ? b || (b = []) : (b = b || []).push(p, null));
      for (p in d) {
        var L = d[p], N = s != null ? s[p] : void 0;
        if (d.hasOwnProperty(p) && L !== N && (L != null || N != null)) if (p === Qn) if (L && Object.freeze(L), N) {
          for (v in N) !N.hasOwnProperty(v) || L && L.hasOwnProperty(v) || (x || (x = {}), x[v] = "");
          for (v in L) L.hasOwnProperty(v) && N[v] !== L[v] && (x || (x = {}), x[v] = L[v]);
        } else x || (b || (b = []), b.push(p, x)), x = L;
        else if (p === $o) {
          var P = L ? L[gt] : void 0, E = N ? N[gt] : void 0;
          P != null && E !== P && (b = b || []).push(p, P);
        } else p === rt ? typeof L != "string" && typeof L != "number" || (b = b || []).push(p, "" + L) : p === ou || p === Et || (xe.hasOwnProperty(p) ? (L != null && (typeof L != "function" && cs(p, L), p === "onScroll" && qn("scroll", e)), b || N === L || (b = [])) : (b = b || []).push(p, L));
      }
      return x && (function(w, R) {
        if (R) {
          var O, W = sc(w), K = sc(R), X = {};
          for (var J in W) {
            var se = W[J], fe = K[J];
            if (fe && se !== fe) {
              var le = se + "," + fe;
              if (X[le]) continue;
              X[le] = !0, g("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", (O = w[se]) == null || typeof O == "boolean" || O === "" ? "Removing" : "Updating", se, fe);
            }
          }
        }
      }(x, d[Qn]), (b = b || []).push(Qn, x)), b;
    }
    function Df(e, n, a, i, l) {
      switch (a === "input" && l.type === "radio" && l.name != null && ml(e, l), Gr(a, i), function(s, d, p, v) {
        for (var b = 0; b < d.length; b += 2) {
          var x = d[b], D = d[b + 1];
          x === Qn ? yr(s, D) : x === $o ? wd(s, D) : x === rt ? oc(s, D) : rr(s, x, D, v);
        }
      }(e, n, 0, Gr(a, l)), a) {
        case "input":
          hl(e, l);
          break;
        case "textarea":
          gl(e, l);
          break;
        case "select":
          (function(s, d) {
            var p = s, v = p._wrapperState.wasMultiple;
            p._wrapperState.wasMultiple = !!d.multiple;
            var b = d.value;
            b != null ? hi(p, !!d.multiple, b, !1) : v !== !!d.multiple && (d.defaultValue != null ? hi(p, !!d.multiple, d.defaultValue, !0) : hi(p, !!d.multiple, d.multiple ? [] : "", !1));
          })(e, l);
      }
    }
    function Yo(e, n) {
      _r || (_r = !0, g("Did not expect server HTML to contain a <%s> in <%s>.", n.nodeName.toLowerCase(), e.nodeName.toLowerCase()));
    }
    function ja(e, n) {
      _r || (_r = !0, g('Did not expect server HTML to contain the text node "%s" in <%s>.', n.nodeValue, e.nodeName.toLowerCase()));
    }
    function uu(e, n, a) {
      _r || (_r = !0, g("Expected server HTML to contain a matching <%s> in <%s>.", n, e.nodeName.toLowerCase()));
    }
    function fs(e, n) {
      n !== "" && (_r || (_r = !0, g('Expected server HTML to contain a matching text node for "%s" in <%s>.', n, e.nodeName.toLowerCase())));
    }
    var ra, Ko, Xo = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], ps = ["applet", "caption", "html", "table", "td", "th", "marquee", "object", "template", "foreignObject", "desc", "title"], ms = ps.concat(["button"]), Of = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], hs = { current: null, formTag: null, aTagInScope: null, buttonTagInScope: null, nobrTagInScope: null, pTagInButtonScope: null, listItemTagAutoclosing: null, dlItemTagAutoclosing: null };
    Ko = function(e, n) {
      var a = He({}, e || hs), i = { tag: n };
      return ps.indexOf(n) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), ms.indexOf(n) !== -1 && (a.pTagInButtonScope = null), Xo.indexOf(n) !== -1 && n !== "address" && n !== "div" && n !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, n === "form" && (a.formTag = i), n === "a" && (a.aTagInScope = i), n === "button" && (a.buttonTagInScope = i), n === "nobr" && (a.nobrTagInScope = i), n === "p" && (a.pTagInButtonScope = i), n === "li" && (a.listItemTagAutoclosing = i), n !== "dd" && n !== "dt" || (a.dlItemTagAutoclosing = i), a;
    };
    var vs = {};
    ra = function(e, n, a) {
      var i = (a = a || hs).current, l = i && i.tag;
      n != null && (e != null && g("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
      var s = function(N, P) {
        switch (P) {
          case "select":
            return N === "option" || N === "optgroup" || N === "#text";
          case "optgroup":
            return N === "option" || N === "#text";
          case "option":
            return N === "#text";
          case "tr":
            return N === "th" || N === "td" || N === "style" || N === "script" || N === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return N === "tr" || N === "style" || N === "script" || N === "template";
          case "colgroup":
            return N === "col" || N === "template";
          case "table":
            return N === "caption" || N === "colgroup" || N === "tbody" || N === "tfoot" || N === "thead" || N === "style" || N === "script" || N === "template";
          case "head":
            return N === "base" || N === "basefont" || N === "bgsound" || N === "link" || N === "meta" || N === "title" || N === "noscript" || N === "noframes" || N === "style" || N === "script" || N === "template";
          case "html":
            return N === "head" || N === "body" || N === "frameset";
          case "frameset":
            return N === "frame";
          case "#document":
            return N === "html";
        }
        switch (N) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return P !== "h1" && P !== "h2" && P !== "h3" && P !== "h4" && P !== "h5" && P !== "h6";
          case "rp":
          case "rt":
            return Of.indexOf(P) === -1;
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
            return P == null;
        }
        return !0;
      }(e, l) ? null : i, d = s ? null : function(N, P) {
        switch (N) {
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
            return P.pTagInButtonScope;
          case "form":
            return P.formTag || P.pTagInButtonScope;
          case "li":
            return P.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return P.dlItemTagAutoclosing;
          case "button":
            return P.buttonTagInScope;
          case "a":
            return P.aTagInScope;
          case "nobr":
            return P.nobrTagInScope;
        }
        return null;
      }(e, a), p = s || d;
      if (p) {
        var v = p.tag, b = !!s + "|" + e + "|" + v;
        if (!vs[b]) {
          vs[b] = !0;
          var x = e, D = "";
          if (e === "#text" ? /\S/.test(n) ? x = "Text nodes" : (x = "Whitespace text nodes", D = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : x = "<" + e + ">", s) {
            var L = "";
            v === "table" && e === "tr" && (L += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), g("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", x, v, D, L);
          } else g("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", x, v);
        }
      }
    };
    var Rt = "suppressHydrationWarning", xa = "$", Pr = "/$", Nt = "$?", su = "$!", gs = null, ys = null;
    function Go(e) {
      var n;
      return gs = nt, n = Ef(), ys = { focusedElem: n, selectionRange: is(n) ? bm(n) : null }, Gu(!1), null;
    }
    function xm(e, n, a, i, l) {
      var s = i;
      if (ra(e, null, s.ancestorInfo), typeof n.children == "string" || typeof n.children == "number") {
        var d = "" + n.children, p = Ko(s.ancestorInfo, e);
        ra(null, d, p);
      }
      var v = function(b, x, D, L) {
        var N, P, E = Qo(D), w = L;
        if (w === qt && (w = rc(b)), w === qt) {
          if ((N = Gr(b, x)) || b === b.toLowerCase() || g("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", b), b === "script") {
            var R = E.createElement("div");
            R.innerHTML = "<script><\/script>";
            var O = R.firstChild;
            P = R.removeChild(O);
          } else if (typeof x.is == "string") P = E.createElement(b, { is: x.is });
          else if (P = E.createElement(b), b === "select") {
            var W = P;
            x.multiple ? W.multiple = !0 : x.size && (W.size = x.size);
          }
        } else P = E.createElementNS(w, b);
        return w === qt && (N || Object.prototype.toString.call(P) !== "[object HTMLUnknownElement]" || pn.call(Ea, b) || (Ea[b] = !0, g("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", b))), P;
      }(e, n, a, s.namespace);
      return ei(l, v), Bc(v, n), v;
    }
    function bs(e, n) {
      return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
    }
    function Vi(e, n, a, i) {
      ra(null, e, a.ancestorInfo);
      var l = function(s, d) {
        return Qo(d).createTextNode(s);
      }(e, n);
      return ei(i, l), l;
    }
    var ws = typeof setTimeout == "function" ? setTimeout : void 0, Hi = typeof clearTimeout == "function" ? clearTimeout : void 0, Lf = typeof Promise == "function" ? Promise : void 0, Tm = typeof queueMicrotask == "function" ? queueMicrotask : Lf !== void 0 ? function(e) {
      return Lf.resolve(null).then(e).catch(Mf);
    } : ws;
    function Mf(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function ks(e) {
      oc(e, "");
    }
    function zf(e, n) {
      var a = n, i = 0;
      do {
        var l = a.nextSibling;
        if (e.removeChild(a), l && l.nodeType === 8) {
          var s = l.data;
          if (s === Pr) {
            if (i === 0) return e.removeChild(l), void Wl(n);
            i--;
          } else s !== xa && s !== Nt && s !== su || i++;
        }
        a = l;
      } while (a);
      Wl(n);
    }
    function cv(e) {
      var n = e.style;
      typeof n.setProperty == "function" ? n.setProperty("display", "none", "important") : n.display = "none";
    }
    function Cm(e, n) {
      var a = n.style, i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = kl("display", i);
    }
    function _m(e, n) {
      e.nodeValue = n;
    }
    function $i(e) {
      return e.data === Nt;
    }
    function Jo(e) {
      return e.data === su;
    }
    function Ss(e) {
      for (; e != null; e = e.nextSibling) {
        var n = e.nodeType;
        if (n === 1 || n === 3) break;
        if (n === 8) {
          var a = e.data;
          if (a === xa || a === su || a === Nt) break;
          if (a === Pr) return null;
        }
      }
      return e;
    }
    function Yn(e) {
      return Ss(e.nextSibling);
    }
    function dv(e, n, a, i, l, s, d) {
      return ei(s, e), Bc(e, a), function(p, v, b, x, D, L, N) {
        var P, E;
        switch (P = Gr(v, b), Uc(v, b), v) {
          case "dialog":
            qn("cancel", p), qn("close", p);
            break;
          case "iframe":
          case "object":
          case "embed":
            qn("load", p);
            break;
          case "video":
          case "audio":
            for (var w = 0; w < nu.length; w++) qn(nu[w], p);
            break;
          case "source":
            qn("error", p);
            break;
          case "img":
          case "image":
          case "link":
            qn("error", p), qn("load", p);
            break;
          case "details":
            qn("toggle", p);
            break;
          case "input":
            Js(p, b), qn("invalid", p);
            break;
          case "option":
            On(0, b);
            break;
          case "select":
            Ou(p, b), qn("invalid", p);
            break;
          case "textarea":
            Ja(p, b), qn("invalid", p);
        }
        gi(v, b), E = /* @__PURE__ */ new Set();
        for (var R = p.attributes, O = 0; O < R.length; O++) switch (R[O].name.toLowerCase()) {
          case "value":
          case "checked":
          case "selected":
            break;
          default:
            E.add(R[O].name);
        }
        var W, K = null;
        for (var X in b) if (b.hasOwnProperty(X)) {
          var J = b[X];
          if (X === rt) typeof J == "string" ? p.textContent !== J && (b[Et] !== !0 && qo(p.textContent, J, L, N), K = [rt, J]) : typeof J == "number" && p.textContent !== "" + J && (b[Et] !== !0 && qo(p.textContent, J, L, N), K = [rt, "" + J]);
          else if (xe.hasOwnProperty(X)) J != null && (typeof J != "function" && cs(X, J), X === "onScroll" && qn("scroll", p));
          else if (N && typeof P == "boolean") {
            var se = void 0, fe = ze(X);
            if (b[Et] !== !0) {
              if (!(X === ou || X === Et || X === "value" || X === "checked" || X === "selected")) {
                if (X === $o) {
                  var le = p.innerHTML, Se = J ? J[gt] : void 0;
                  if (Se != null) {
                    var Ye = If(p, Se);
                    Ye !== le && au(X, le, Ye);
                  }
                } else if (X === Qn) {
                  if (E.delete(X), Nf) {
                    var qe = Op(J);
                    qe !== (se = p.getAttribute("style")) && au(X, se, qe);
                  }
                } else if (P) E.delete(X.toLowerCase()), J !== (se = tr(p, X, J)) && au(X, se, J);
                else if (!Q(X, fe, P) && !Oe(X, J, fe, P)) {
                  var Ge = !1;
                  if (fe !== null) E.delete(fe.attributeName), se = gr(p, X, J, fe);
                  else {
                    var vn = x;
                    if (vn === qt && (vn = rc(v)), vn === qt) E.delete(X.toLowerCase());
                    else {
                      var un = (W = void 0, W = X.toLowerCase(), Sl.hasOwnProperty(W) && Sl[W] || null);
                      un !== null && un !== X && (Ge = !0, E.delete(un)), E.delete(X);
                    }
                    se = tr(p, X, J);
                  }
                  J === se || Ge || au(X, se, J);
                }
              }
            }
          }
        }
        switch (N && E.size > 0 && b[Et] !== !0 && Rf(E), v) {
          case "input":
            pl(p), Ip(p, b, !0);
            break;
          case "textarea":
            pl(p), yl(p);
            break;
          case "select":
          case "option":
            break;
          default:
            typeof b.onClick == "function" && lu(p);
        }
        return K;
      }(e, n, a, l.namespace, 0, !!(1 & s.mode), d);
    }
    function Af(e) {
      for (var n = e.previousSibling, a = 0; n; ) {
        if (n.nodeType === 8) {
          var i = n.data;
          if (i === xa || i === su || i === Nt) {
            if (a === 0) return n;
            a--;
          } else i === Pr && a++;
        }
        n = n.previousSibling;
      }
      return null;
    }
    var cu = Math.random().toString(36).slice(2), du = "__reactFiber$" + cu, jc = "__reactProps$" + cu, Es = "__reactContainer$" + cu, Rr = "__reactEvents$" + cu, Uf = "__reactListeners$" + cu, Zo = "__reactHandles$" + cu;
    function ei(e, n) {
      n[du] = e;
    }
    function Ba(e, n) {
      n[Es] = e;
    }
    function xs(e) {
      e[Es] = null;
    }
    function qi(e) {
      return !!e[Es];
    }
    function co(e) {
      var n = e[du];
      if (n) return n;
      for (var a = e.parentNode; a; ) {
        if (n = a[Es] || a[du]) {
          var i = n.alternate;
          if (n.child !== null || i !== null && i.child !== null) for (var l = Af(e); l !== null; ) {
            var s = l[du];
            if (s) return s;
            l = Af(l);
          }
          return n;
        }
        a = (e = a).parentNode;
      }
      return null;
    }
    function ni(e) {
      var n = e[du] || e[Es];
      return n && (n.tag === 5 || n.tag === 6 || n.tag === M || n.tag === 3) ? n : null;
    }
    function ti(e) {
      if (e.tag === 5 || e.tag === 6) return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Ts(e) {
      return e[jc] || null;
    }
    function Bc(e, n) {
      e[jc] = n;
    }
    var Cs = {}, _s = y.ReactDebugCurrentFrame;
    function Ps(e) {
      if (e) {
        var n = e._owner, a = Ra(e.type, e._source, n ? n.type : null);
        _s.setExtraStackFrame(a);
      } else _s.setExtraStackFrame(null);
    }
    function Ur(e, n, a, i, l) {
      var s = Function.call.bind(pn);
      for (var d in e) if (s(e, d)) {
        var p = void 0;
        try {
          if (typeof e[d] != "function") {
            var v = Error((i || "React class") + ": " + a + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
            throw v.name = "Invariant Violation", v;
          }
          p = e[d](n, d, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
        } catch (b) {
          p = b;
        }
        !p || p instanceof Error || (Ps(l), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, d, typeof p), Ps(null)), p instanceof Error && !(p.message in Cs) && (Cs[p.message] = !0, Ps(l), g("Failed %s type: %s", a, p.message), Ps(null));
      }
    }
    var Rs, Ns = [];
    Rs = [];
    var fu, Ta = -1;
    function Ca(e) {
      return { current: e };
    }
    function jt(e, n) {
      Ta < 0 ? g("Unexpected pop.") : (n !== Rs[Ta] && g("Unexpected Fiber popped."), e.current = Ns[Ta], Ns[Ta] = null, Rs[Ta] = null, Ta--);
    }
    function xt(e, n, a) {
      Ta++, Ns[Ta] = e.current, Rs[Ta] = a, e.current = n;
    }
    fu = {};
    var Fr = {};
    Object.freeze(Fr);
    var jr = Ca(Fr), Wa = Ca(!1), pu = Fr;
    function t(e, n, a) {
      return a && c(n) ? pu : jr.current;
    }
    function r(e, n, a) {
      var i = e.stateNode;
      i.__reactInternalMemoizedUnmaskedChildContext = n, i.__reactInternalMemoizedMaskedChildContext = a;
    }
    function o(e, n) {
      var a = e.type.contextTypes;
      if (!a) return Fr;
      var i = e.stateNode;
      if (i && i.__reactInternalMemoizedUnmaskedChildContext === n) return i.__reactInternalMemoizedMaskedChildContext;
      var l = {};
      for (var s in a) l[s] = n[s];
      return Ur(a, l, "context", dn(e) || "Unknown"), i && r(e, n, l), l;
    }
    function u() {
      return Wa.current;
    }
    function c(e) {
      var n = e.childContextTypes;
      return n != null;
    }
    function m(e) {
      jt(Wa, e), jt(jr, e);
    }
    function k(e) {
      jt(Wa, e), jt(jr, e);
    }
    function I(e, n, a) {
      if (jr.current !== Fr) throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
      xt(jr, n, e), xt(Wa, a, e);
    }
    function A(e, n, a) {
      var i = e.stateNode, l = n.childContextTypes;
      if (typeof i.getChildContext != "function") {
        var s = dn(e) || "Unknown";
        return fu[s] || (fu[s] = !0, g("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s)), a;
      }
      var d = i.getChildContext();
      for (var p in d) if (!(p in l)) throw new Error((dn(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
      return Ur(l, d, "child context", dn(e) || "Unknown"), He({}, a, d);
    }
    function q(e) {
      var n = e.stateNode, a = n && n.__reactInternalMemoizedMergedChildContext || Fr;
      return pu = jr.current, xt(jr, a, e), xt(Wa, Wa.current, e), !0;
    }
    function G(e, n, a) {
      var i = e.stateNode;
      if (!i) throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
      if (a) {
        var l = A(e, n, pu);
        i.__reactInternalMemoizedMergedChildContext = l, jt(Wa, e), jt(jr, e), xt(jr, l, e), xt(Wa, a, e);
      } else jt(Wa, e), xt(Wa, a, e);
    }
    function oe(e) {
      if (!function(a) {
        return Jr(a) === a;
      }(e) || e.tag !== 1) throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
      var n = e;
      do {
        switch (n.tag) {
          case 3:
            return n.stateNode.context;
          case 1:
            if (c(n.type)) return n.stateNode.__reactInternalMemoizedMergedChildContext;
        }
        n = n.return;
      } while (n !== null);
      throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    var Z = null, ie = !1, ye = !1;
    function ke(e) {
      Z === null ? Z = [e] : Z.push(e);
    }
    function te() {
      ie && H();
    }
    function H() {
      if (!ye && Z !== null) {
        ye = !0;
        var e = 0, n = sr();
        try {
          var a = Z;
          for (Vn(Ut); e < a.length; e++) {
            var i = a[e];
            do
              i = i(!0);
            while (i !== null);
          }
          Z = null, ie = !1;
        } catch (l) {
          throw Z !== null && (Z = Z.slice(e + 1)), Hd(Bu, H), l;
        } finally {
          Vn(n), ye = !1;
        }
      }
      return null;
    }
    var ee = [], de = 0, Ue = null, on = 0, Ne = [], Je = 0, en = null, Xe = 1, wn = "";
    function mu() {
      var e = wn;
      return (Xe & ~function(n) {
        return 1 << Vc(n) - 1;
      }(Xe)).toString(32) + e;
    }
    function ri(e, n) {
      oi(), ee[de++] = on, ee[de++] = Ue, Ue = e, on = n;
    }
    function Pm(e, n, a) {
      oi(), Ne[Je++] = Xe, Ne[Je++] = wn, Ne[Je++] = en, en = e;
      var i = Xe, l = wn, s = Vc(i) - 1, d = i & ~(1 << s), p = a + 1, v = Vc(n) + s;
      if (v > 30) {
        var b = s - s % 5, x = (d & (1 << b) - 1).toString(32), D = d >> b, L = s - b, N = Vc(n) + L;
        Xe = 1 << N | (p << L | D), wn = x + l;
      } else
        Xe = 1 << v | (p << s | d), wn = l;
    }
    function Wc(e) {
      oi(), e.return !== null && (ri(e, 1), Pm(e, 1, 0));
    }
    function Vc(e) {
      return 32 - Kd(e);
    }
    function ai(e) {
      for (; e === Ue; ) Ue = ee[--de], ee[de] = null, on = ee[--de], ee[de] = null;
      for (; e === en; ) en = Ne[--Je], Ne[Je] = null, wn = Ne[--Je], Ne[Je] = null, Xe = Ne[--Je], Ne[Je] = null;
    }
    function oi() {
      mr() || g("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var pr = null, fo = null, po = !1, Is = !1, hu = null;
    function yk() {
      po && g("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function eb() {
      Is = !0;
    }
    function bk(e) {
      var n = e.stateNode.containerInfo;
      return fo = Ss(n.firstChild), pr = e, po = !0, hu = null, Is = !1, !0;
    }
    function wk(e, n, a) {
      return fo = Ss(n.nextSibling), pr = e, po = !0, hu = null, Is = !1, a !== null && function(i, l) {
        oi(), Ne[Je++] = Xe, Ne[Je++] = wn, Ne[Je++] = en, Xe = l.id, wn = l.overflow, en = i;
      }(e, a), !0;
    }
    function nb(e, n) {
      switch (e.tag) {
        case 3:
          (function(l, s) {
            s.nodeType === 1 ? Yo(l, s) : s.nodeType === 8 || ja(l, s);
          })(e.stateNode.containerInfo, n);
          break;
        case 5:
          var a = !!(1 & e.mode);
          (function(l, s, d, p, v) {
            (v || s[Rt] !== !0) && (p.nodeType === 1 ? Yo(d, p) : p.nodeType === 8 || ja(d, p));
          })(e.type, e.memoizedProps, e.stateNode, n, a);
          break;
        case M:
          var i = e.memoizedState;
          i.dehydrated !== null && function(l, s) {
            var d = l.parentNode;
            d !== null && (s.nodeType === 1 ? Yo(d, s) : s.nodeType === 8 || ja(d, s));
          }(i.dehydrated, n);
      }
    }
    function tb(e, n) {
      nb(e, n);
      var a, i = ((a = _a(5, null, null, 0)).elementType = "DELETED", a);
      i.stateNode = n, i.return = e;
      var l = e.deletions;
      l === null ? (e.deletions = [i], e.flags |= xi) : l.push(i);
    }
    function fv(e, n) {
      if (!Is) switch (e.tag) {
        case 3:
          var a = e.stateNode.containerInfo;
          switch (n.tag) {
            case 5:
              var i = n.type;
              n.pendingProps, function(b, x) {
                uu(b, x);
              }(a, i);
              break;
            case 6:
              (function(b, x) {
                fs(b, x);
              })(a, n.pendingProps);
          }
          break;
        case 5:
          e.type;
          var l = e.memoizedProps, s = e.stateNode;
          switch (n.tag) {
            case 5:
              var d = n.type;
              n.pendingProps, function(b, x, D, L, N, P) {
                (P || x[Rt] !== !0) && uu(D, L);
              }(0, l, s, d, 0, !!(1 & e.mode));
              break;
            case 6:
              (function(b, x, D, L, N) {
                (N || x[Rt] !== !0) && fs(D, L);
              })(0, l, s, n.pendingProps, !!(1 & e.mode));
          }
          break;
        case M:
          var p = e.memoizedState.dehydrated;
          if (p !== null) switch (n.tag) {
            case 5:
              var v = n.type;
              n.pendingProps, function(b, x) {
                var D = b.parentNode;
                D !== null && uu(D, x);
              }(p, v);
              break;
            case 6:
              (function(b, x) {
                var D = b.parentNode;
                D !== null && fs(D, x);
              })(p, n.pendingProps);
          }
          break;
        default:
          return;
      }
    }
    function rb(e, n) {
      n.flags = -4097 & n.flags | 2, fv(e, n);
    }
    function ab(e, n) {
      switch (e.tag) {
        case 5:
          var a = e.type;
          e.pendingProps;
          var i = function(v, b) {
            return v.nodeType !== 1 || b.toLowerCase() !== v.nodeName.toLowerCase() ? null : v;
          }(n, a);
          return i !== null && (e.stateNode = i, pr = e, fo = Ss(i.firstChild), !0);
        case 6:
          var l = function(v, b) {
            return b === "" || v.nodeType !== 3 ? null : v;
          }(n, e.pendingProps);
          return l !== null && (e.stateNode = l, pr = e, fo = null, !0);
        case M:
          var s = function(v) {
            return v.nodeType !== 8 ? null : v;
          }(n);
          if (s !== null) {
            var d = { dehydrated: s, treeContext: (oi(), en !== null ? { id: Xe, overflow: wn } : null), retryLane: At };
            e.memoizedState = d;
            var p = function(v) {
              var b = _a(ae, null, null, 0);
              return b.stateNode = v, b;
            }(s);
            return p.return = e, e.child = p, pr = e, fo = null, !0;
          }
          return !1;
        default:
          return !1;
      }
    }
    function pv(e) {
      return !(!(1 & e.mode) || e.flags & _n);
    }
    function mv(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function hv(e) {
      if (po) {
        var n = fo;
        if (!n) return pv(e) && (fv(pr, e), mv()), rb(pr, e), po = !1, void (pr = e);
        var a = n;
        if (!ab(e, n)) {
          pv(e) && (fv(pr, e), mv()), n = Yn(a);
          var i = pr;
          if (!n || !ab(e, n)) return rb(pr, e), po = !1, void (pr = e);
          tb(i, a);
        }
      }
    }
    function kk(e) {
      var n = e.stateNode, a = e.memoizedProps, i = function(d, p, v) {
        return ei(v, d), v.mode, function(b, x) {
          return b.nodeValue !== x;
        }(d, p);
      }(n, a, e);
      if (i) {
        var l = pr;
        if (l !== null) switch (l.tag) {
          case 3:
            l.stateNode.containerInfo, function(d, p, v, b) {
              qo(p.nodeValue, v, b, !0);
            }(0, n, a, !!(1 & l.mode));
            break;
          case 5:
            l.type;
            var s = l.memoizedProps;
            l.stateNode, function(d, p, v, b, x, D) {
              p[Rt] !== !0 && qo(b.nodeValue, x, D, !0);
            }(0, s, 0, n, a, !!(1 & l.mode));
        }
      }
      return i;
    }
    function Sk(e) {
      var n = e.memoizedState, a = n !== null ? n.dehydrated : null;
      if (!a) throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      (function(i, l) {
        ei(l, i);
      })(a, e);
    }
    function Ek(e) {
      var n = e.memoizedState, a = n !== null ? n.dehydrated : null;
      if (!a) throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return function(i) {
        for (var l = i.nextSibling, s = 0; l; ) {
          if (l.nodeType === 8) {
            var d = l.data;
            if (d === Pr) {
              if (s === 0) return Yn(l);
              s--;
            } else d !== xa && d !== su && d !== Nt || s++;
          }
          l = l.nextSibling;
        }
        return null;
      }(a);
    }
    function ob(e) {
      for (var n = e.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== M; ) n = n.return;
      pr = n;
    }
    function Rm(e) {
      if (e !== pr) return !1;
      if (!po) return ob(e), po = !0, !1;
      if (e.tag !== 3 && (e.tag !== 5 || (a = e.type) !== "head" && a !== "body" && !bs(e.type, e.memoizedProps))) {
        var n = fo;
        if (n) if (pv(e)) ib(e), mv();
        else for (; n; ) tb(e, n), n = Yn(n);
      }
      var a;
      return ob(e), fo = e.tag === M ? Ek(e) : pr ? Yn(e.stateNode) : null, !0;
    }
    function ib(e) {
      for (var n = fo; n; ) nb(e, n), n = Yn(n);
    }
    function Hc() {
      pr = null, fo = null, po = !1, Is = !1;
    }
    function lb() {
      hu !== null && (K0(hu), hu = null);
    }
    function mr() {
      return po;
    }
    function vv(e) {
      hu === null ? hu = [e] : hu.push(e);
    }
    var xk = y.ReactCurrentBatchConfig, mo = { recordUnsafeLifecycleWarnings: function(e, n) {
    }, flushPendingUnsafeLifecycleWarnings: function() {
    }, recordLegacyContextWarning: function(e, n) {
    }, flushLegacyContextWarning: function() {
    }, discardPendingWarnings: function() {
    } }, Ds = function(e) {
      var n = [];
      return e.forEach(function(a) {
        n.push(a);
      }), n.sort().join(", ");
    }, Ff = [], jf = [], Bf = [], Wf = [], Vf = [], Hf = [], Os = /* @__PURE__ */ new Set();
    mo.recordUnsafeLifecycleWarnings = function(e, n) {
      Os.has(e.type) || (typeof n.componentWillMount == "function" && n.componentWillMount.__suppressDeprecationWarning !== !0 && Ff.push(e), 8 & e.mode && typeof n.UNSAFE_componentWillMount == "function" && jf.push(e), typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Bf.push(e), 8 & e.mode && typeof n.UNSAFE_componentWillReceiveProps == "function" && Wf.push(e), typeof n.componentWillUpdate == "function" && n.componentWillUpdate.__suppressDeprecationWarning !== !0 && Vf.push(e), 8 & e.mode && typeof n.UNSAFE_componentWillUpdate == "function" && Hf.push(e));
    }, mo.flushPendingUnsafeLifecycleWarnings = function() {
      var e = /* @__PURE__ */ new Set();
      Ff.length > 0 && (Ff.forEach(function(d) {
        e.add(dn(d) || "Component"), Os.add(d.type);
      }), Ff = []);
      var n = /* @__PURE__ */ new Set();
      jf.length > 0 && (jf.forEach(function(d) {
        n.add(dn(d) || "Component"), Os.add(d.type);
      }), jf = []);
      var a = /* @__PURE__ */ new Set();
      Bf.length > 0 && (Bf.forEach(function(d) {
        a.add(dn(d) || "Component"), Os.add(d.type);
      }), Bf = []);
      var i = /* @__PURE__ */ new Set();
      Wf.length > 0 && (Wf.forEach(function(d) {
        i.add(dn(d) || "Component"), Os.add(d.type);
      }), Wf = []);
      var l = /* @__PURE__ */ new Set();
      Vf.length > 0 && (Vf.forEach(function(d) {
        l.add(dn(d) || "Component"), Os.add(d.type);
      }), Vf = []);
      var s = /* @__PURE__ */ new Set();
      Hf.length > 0 && (Hf.forEach(function(d) {
        s.add(dn(d) || "Component"), Os.add(d.type);
      }), Hf = []), n.size > 0 && g(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, Ds(n)), i.size > 0 && g(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, Ds(i)), s.size > 0 && g(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, Ds(s)), e.size > 0 && C(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, Ds(e)), a.size > 0 && C(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, Ds(a)), l.size > 0 && C(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, Ds(l));
    };
    var gv, yv, bv, wv, kv, Nm = /* @__PURE__ */ new Map(), ub = /* @__PURE__ */ new Set();
    mo.recordLegacyContextWarning = function(e, n) {
      var a = function(l) {
        for (var s = null, d = l; d !== null; ) 8 & d.mode && (s = d), d = d.return;
        return s;
      }(e);
      if (a !== null) {
        if (!ub.has(e.type)) {
          var i = Nm.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || n !== null && typeof n.getChildContext == "function") && (i === void 0 && (i = [], Nm.set(a, i)), i.push(e));
        }
      } else g("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
    }, mo.flushLegacyContextWarning = function() {
      Nm.forEach(function(e, n) {
        if (e.length !== 0) {
          var a = e[0], i = /* @__PURE__ */ new Set();
          e.forEach(function(s) {
            i.add(dn(s) || "Component"), ub.add(s.type);
          });
          var l = Ds(i);
          try {
            ut(a), g(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, l);
          } finally {
            $t();
          }
        }
      });
    }, mo.discardPendingWarnings = function() {
      Ff = [], jf = [], Bf = [], Wf = [], Vf = [], Hf = [], Nm = /* @__PURE__ */ new Map();
    };
    var sb;
    function $f(e, n, a) {
      var i, l = a.ref;
      if (l !== null && typeof l != "function" && typeof l != "object") {
        if (e.mode, !(a._owner && a._self && a._owner.stateNode !== a._self || a._owner && a._owner.tag !== 1) && (typeof a.type != "function" || (i = a.type).prototype && i.prototype.isReactComponent) && a._owner) {
          var s = dn(e) || "Component";
          bv[s] || (g('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', s, l), bv[s] = !0);
        }
        if (a._owner) {
          var d, p = a._owner;
          if (p) {
            var v = p;
            if (v.tag !== 1) throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            d = v.stateNode;
          }
          if (!d) throw new Error("Missing owner for string ref " + l + ". This error is likely caused by a bug in React. Please file an issue.");
          var b = d;
          (function(L, N) {
            gn(L) && (g("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", N, Ze(L)), ve(L));
          })(l, "ref");
          var x = "" + l;
          if (n !== null && n.ref !== null && typeof n.ref == "function" && n.ref._stringRef === x) return n.ref;
          var D = function(L) {
            var N = b.refs;
            L === null ? delete N[x] : N[x] = L;
          };
          return D._stringRef = x, D;
        }
        if (typeof l != "string") throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
        if (!a._owner) throw new Error("Element ref was specified as a string (" + l + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
      }
      return l;
    }
    function Im(e, n) {
      var a = Object.prototype.toString.call(n);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Dm(e) {
      var n = dn(e) || "Component";
      kv[n] || (kv[n] = !0, g("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it."));
    }
    function cb(e) {
      var n = e._payload;
      return (0, e._init)(n);
    }
    function db(e) {
      function n(E, w) {
        if (e) {
          var R = E.deletions;
          R === null ? (E.deletions = [w], E.flags |= xi) : R.push(w);
        }
      }
      function a(E, w) {
        if (!e) return null;
        for (var R = w; R !== null; ) n(E, R), R = R.sibling;
        return null;
      }
      function i(E, w) {
        for (var R = /* @__PURE__ */ new Map(), O = w; O !== null; ) O.key !== null ? R.set(O.key, O) : R.set(O.index, O), O = O.sibling;
        return R;
      }
      function l(E, w) {
        var R = Ws(E, w);
        return R.index = 0, R.sibling = null, R;
      }
      function s(E, w, R) {
        if (E.index = R, !e) return E.flags |= zd, w;
        var O = E.alternate;
        if (O !== null) {
          var W = O.index;
          return W < w ? (E.flags |= 2, w) : W;
        }
        return E.flags |= 2, w;
      }
      function d(E) {
        return e && E.alternate === null && (E.flags |= 2), E;
      }
      function p(E, w, R, O) {
        if (w === null || w.tag !== 6) {
          var W = hy(R, E.mode, O);
          return W.return = E, W;
        }
        var K = l(w, R);
        return K.return = E, K;
      }
      function v(E, w, R, O) {
        var W = R.type;
        if (W === Ce) return x(E, w, R.props.children, O, R.key);
        if (w !== null && (w.elementType === W || dw(w, R) || typeof W == "object" && W !== null && W.$$typeof === bn && cb(W) === w.type)) {
          var K = l(w, R.props);
          return K.ref = $f(E, w, R), K.return = E, K._debugSource = R._source, K._debugOwner = R._owner, K;
        }
        var X = my(R, E.mode, O);
        return X.ref = $f(E, w, R), X.return = E, X;
      }
      function b(E, w, R, O) {
        if (w === null || w.tag !== 4 || w.stateNode.containerInfo !== R.containerInfo || w.stateNode.implementation !== R.implementation) {
          var W = vy(R, E.mode, O);
          return W.return = E, W;
        }
        var K = l(w, R.children || []);
        return K.return = E, K;
      }
      function x(E, w, R, O, W) {
        if (w === null || w.tag !== 7) {
          var K = Cu(R, E.mode, O, W);
          return K.return = E, K;
        }
        var X = l(w, R);
        return X.return = E, X;
      }
      function D(E, w, R) {
        if (typeof w == "string" && w !== "" || typeof w == "number") {
          var O = hy("" + w, E.mode, R);
          return O.return = E, O;
        }
        if (typeof w == "object" && w !== null) {
          switch (w.$$typeof) {
            case zn:
              var W = my(w, E.mode, R);
              return W.ref = $f(E, null, w), W.return = E, W;
            case B:
              var K = vy(w, E.mode, R);
              return K.return = E, K;
            case bn:
              var X = w._payload;
              return D(E, (0, w._init)(X), R);
          }
          if (Mt(w) || Qr(w)) {
            var J = Cu(w, E.mode, R, null);
            return J.return = E, J;
          }
          Im(0, w);
        }
        return typeof w == "function" && Dm(E), null;
      }
      function L(E, w, R, O) {
        var W = w !== null ? w.key : null;
        if (typeof R == "string" && R !== "" || typeof R == "number") return W !== null ? null : p(E, w, "" + R, O);
        if (typeof R == "object" && R !== null) {
          switch (R.$$typeof) {
            case zn:
              return R.key === W ? v(E, w, R, O) : null;
            case B:
              return R.key === W ? b(E, w, R, O) : null;
            case bn:
              var K = R._payload;
              return L(E, w, (0, R._init)(K), O);
          }
          if (Mt(R) || Qr(R)) return W !== null ? null : x(E, w, R, O, null);
          Im(0, R);
        }
        return typeof R == "function" && Dm(E), null;
      }
      function N(E, w, R, O, W) {
        if (typeof O == "string" && O !== "" || typeof O == "number") return p(w, E.get(R) || null, "" + O, W);
        if (typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case zn:
              return v(w, E.get(O.key === null ? R : O.key) || null, O, W);
            case B:
              return b(w, E.get(O.key === null ? R : O.key) || null, O, W);
            case bn:
              var K = O._payload;
              return N(E, w, R, (0, O._init)(K), W);
          }
          if (Mt(O) || Qr(O)) return x(w, E.get(R) || null, O, W, null);
          Im(0, O);
        }
        return typeof O == "function" && Dm(w), null;
      }
      function P(E, w, R) {
        if (typeof E != "object" || E === null) return w;
        switch (E.$$typeof) {
          case zn:
          case B:
            sb(E, R);
            var O = E.key;
            if (typeof O != "string") break;
            if (w === null) {
              (w = /* @__PURE__ */ new Set()).add(O);
              break;
            }
            if (!w.has(O)) {
              w.add(O);
              break;
            }
            g("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", O);
            break;
          case bn:
            var W = E._payload;
            P((0, E._init)(W), w, R);
        }
        return w;
      }
      return function E(w, R, O, W) {
        if (typeof O == "object" && O !== null && O.type === Ce && O.key === null && (O = O.props.children), typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case zn:
              return d(function(X, J, se, fe) {
                for (var le = se.key, Se = J; Se !== null; ) {
                  if (Se.key === le) {
                    var Ye = se.type;
                    if (Ye === Ce) {
                      if (Se.tag === 7) {
                        a(X, Se.sibling);
                        var qe = l(Se, se.props.children);
                        return qe.return = X, qe._debugSource = se._source, qe._debugOwner = se._owner, qe;
                      }
                    } else if (Se.elementType === Ye || dw(Se, se) || typeof Ye == "object" && Ye !== null && Ye.$$typeof === bn && cb(Ye) === Se.type) {
                      a(X, Se.sibling);
                      var Ge = l(Se, se.props);
                      return Ge.ref = $f(X, Se, se), Ge.return = X, Ge._debugSource = se._source, Ge._debugOwner = se._owner, Ge;
                    }
                    a(X, Se);
                    break;
                  }
                  n(X, Se), Se = Se.sibling;
                }
                if (se.type === Ce) {
                  var vn = Cu(se.props.children, X.mode, fe, se.key);
                  return vn.return = X, vn;
                }
                var un = my(se, X.mode, fe);
                return un.ref = $f(X, J, se), un.return = X, un;
              }(w, R, O, W));
            case B:
              return d(function(X, J, se, fe) {
                for (var le = se.key, Se = J; Se !== null; ) {
                  if (Se.key === le) {
                    if (Se.tag === 4 && Se.stateNode.containerInfo === se.containerInfo && Se.stateNode.implementation === se.implementation) {
                      a(X, Se.sibling);
                      var Ye = l(Se, se.children || []);
                      return Ye.return = X, Ye;
                    }
                    a(X, Se);
                    break;
                  }
                  n(X, Se), Se = Se.sibling;
                }
                var qe = vy(se, X.mode, fe);
                return qe.return = X, qe;
              }(w, R, O, W));
            case bn:
              var K = O._payload;
              return E(w, R, (0, O._init)(K), W);
          }
          if (Mt(O)) return function(X, J, se, fe) {
            for (var le = null, Se = 0; Se < se.length; Se++) le = P(se[Se], le, X);
            for (var Ye = null, qe = null, Ge = J, vn = 0, un = 0, Tn = null; Ge !== null && un < se.length; un++) {
              Ge.index > un ? (Tn = Ge, Ge = null) : Tn = Ge.sibling;
              var Un = L(X, Ge, se[un], fe);
              if (Un === null) {
                Ge === null && (Ge = Tn);
                break;
              }
              e && Ge && Un.alternate === null && n(X, Ge), vn = s(Un, vn, un), qe === null ? Ye = Un : qe.sibling = Un, qe = Un, Ge = Tn;
            }
            if (un === se.length) return a(X, Ge), mr() && ri(X, un), Ye;
            if (Ge === null) {
              for (; un < se.length; un++) {
                var at = D(X, se[un], fe);
                at !== null && (vn = s(at, vn, un), qe === null ? Ye = at : qe.sibling = at, qe = at);
              }
              return mr() && ri(X, un), Ye;
            }
            for (var ua = i(0, Ge); un < se.length; un++) {
              var Jn = N(ua, X, un, se[un], fe);
              Jn !== null && (e && Jn.alternate !== null && ua.delete(Jn.key === null ? un : Jn.key), vn = s(Jn, vn, un), qe === null ? Ye = Jn : qe.sibling = Jn, qe = Jn);
            }
            return e && ua.forEach(function($r) {
              return n(X, $r);
            }), mr() && ri(X, un), Ye;
          }(w, R, O, W);
          if (Qr(O)) return function(X, J, se, fe) {
            var le = Qr(se);
            if (typeof le != "function") throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
            typeof Symbol == "function" && se[Symbol.toStringTag] === "Generator" && (yv || g("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), yv = !0), se.entries === le && (gv || g("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), gv = !0);
            var Se = le.call(se);
            if (Se) for (var Ye = null, qe = Se.next(); !qe.done; qe = Se.next()) Ye = P(qe.value, Ye, X);
            var Ge = le.call(se);
            if (Ge == null) throw new Error("An iterable object provided no iterator.");
            for (var vn = null, un = null, Tn = J, Un = 0, at = 0, ua = null, Jn = Ge.next(); Tn !== null && !Jn.done; at++, Jn = Ge.next()) {
              Tn.index > at ? (ua = Tn, Tn = null) : ua = Tn.sibling;
              var $r = L(X, Tn, Jn.value, fe);
              if ($r === null) {
                Tn === null && (Tn = ua);
                break;
              }
              e && Tn && $r.alternate === null && n(X, Tn), Un = s($r, Un, at), un === null ? vn = $r : un.sibling = $r, un = $r, Tn = ua;
            }
            if (Jn.done) return a(X, Tn), mr() && ri(X, at), vn;
            if (Tn === null) {
              for (; !Jn.done; at++, Jn = Ge.next()) {
                var sa = D(X, Jn.value, fe);
                sa !== null && (Un = s(sa, Un, at), un === null ? vn = sa : un.sibling = sa, un = sa);
              }
              return mr() && ri(X, at), vn;
            }
            for (var Dr = i(0, Tn); !Jn.done; at++, Jn = Ge.next()) {
              var Tt = N(Dr, X, at, Jn.value, fe);
              Tt !== null && (e && Tt.alternate !== null && Dr.delete(Tt.key === null ? at : Tt.key), Un = s(Tt, Un, at), un === null ? vn = Tt : un.sibling = Tt, un = Tt);
            }
            return e && Dr.forEach(function(ud) {
              return n(X, ud);
            }), mr() && ri(X, at), vn;
          }(w, R, O, W);
          Im(0, O);
        }
        return typeof O == "string" && O !== "" || typeof O == "number" ? d(function(X, J, se, fe) {
          if (J !== null && J.tag === 6) {
            a(X, J.sibling);
            var le = l(J, se);
            return le.return = X, le;
          }
          a(X, J);
          var Se = hy(se, X.mode, fe);
          return Se.return = X, Se;
        }(w, R, "" + O, W)) : (typeof O == "function" && Dm(w), a(w, R));
      };
    }
    gv = !1, yv = !1, bv = {}, wv = {}, kv = {}, sb = function(e, n) {
      if (e !== null && typeof e == "object" && e._store && !e._store.validated && e.key == null) {
        if (typeof e._store != "object") throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = dn(n) || "Component";
        wv[a] || (wv[a] = !0, g('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    var $c = db(!0), fb = db(!1);
    function Tk(e, n) {
      for (var a = e.child; a !== null; ) DS(a, n), a = a.sibling;
    }
    var Sv, Ev = Ca(null);
    Sv = {};
    var Om = null, qc = null, xv = null, Lm = !1;
    function Mm() {
      Om = null, qc = null, xv = null, Lm = !1;
    }
    function pb() {
      Lm = !0;
    }
    function mb() {
      Lm = !1;
    }
    function hb(e, n, a) {
      xt(Ev, n._currentValue, e), n._currentValue = a, n._currentRenderer !== void 0 && n._currentRenderer !== null && n._currentRenderer !== Sv && g("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), n._currentRenderer = Sv;
    }
    function Tv(e, n) {
      var a = Ev.current;
      jt(Ev, n), e._currentValue = a;
    }
    function Cv(e, n, a) {
      for (var i = e; i !== null; ) {
        var l = i.alternate;
        if (zo(i.childLanes, n) ? l === null || zo(l.childLanes, n) || (l.childLanes = fn(l.childLanes, n)) : (i.childLanes = fn(i.childLanes, n), l !== null && (l.childLanes = fn(l.childLanes, n))), i === a) break;
        i = i.return;
      }
      i !== a && g("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Ck(e, n, a) {
      (function(i, l, s) {
        var d = i.child;
        for (d !== null && (d.return = i); d !== null; ) {
          var p = void 0, v = d.dependencies;
          if (v !== null) {
            p = d.child;
            for (var b = v.firstContext; b !== null; ) {
              if (b.context === l) {
                if (d.tag === 1) {
                  var x = lr(s), D = Qi(Bn, x);
                  D.tag = Um;
                  var L = d.updateQueue;
                  if (L !== null) {
                    var N = L.shared, P = N.pending;
                    P === null ? D.next = D : (D.next = P.next, P.next = D), N.pending = D;
                  }
                }
                d.lanes = fn(d.lanes, s);
                var E = d.alternate;
                E !== null && (E.lanes = fn(E.lanes, s)), Cv(d.return, s, i), v.lanes = fn(v.lanes, s);
                break;
              }
              b = b.next;
            }
          } else if (d.tag === j) p = d.type === i.type ? null : d.child;
          else if (d.tag === ae) {
            var w = d.return;
            if (w === null) throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
            w.lanes = fn(w.lanes, s);
            var R = w.alternate;
            R !== null && (R.lanes = fn(R.lanes, s)), Cv(w, s, i), p = d.sibling;
          } else p = d.child;
          if (p !== null) p.return = d;
          else for (p = d; p !== null; ) {
            if (p === i) {
              p = null;
              break;
            }
            var O = p.sibling;
            if (O !== null) {
              O.return = p.return, p = O;
              break;
            }
            p = p.return;
          }
          d = p;
        }
      })(e, n, a);
    }
    function Qc(e, n) {
      Om = e, qc = null, xv = null;
      var a = e.dependencies;
      a !== null && a.firstContext !== null && (ur(a.lanes, n) && ip(), a.firstContext = null);
    }
    function It(e) {
      Lm && g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var n = e._currentValue;
      if (xv !== e) {
        var a = { context: e, memoizedValue: n, next: null };
        if (qc === null) {
          if (Om === null) throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          qc = a, Om.dependencies = { lanes: 0, firstContext: a };
        } else qc = qc.next = a;
      }
      return n;
    }
    var Ls = null;
    function _v(e) {
      Ls === null ? Ls = [e] : Ls.push(e);
    }
    function vb(e, n, a, i) {
      var l = n.interleaved;
      return l === null ? (a.next = a, _v(n)) : (a.next = l.next, l.next = a), n.interleaved = a, zm(e, i);
    }
    function aa(e, n) {
      return zm(e, n);
    }
    var _k = zm;
    function zm(e, n) {
      e.lanes = fn(e.lanes, n);
      var a = e.alternate;
      a !== null && (a.lanes = fn(a.lanes, n)), a === null && 4098 & e.flags && lw(e);
      for (var i = e, l = e.return; l !== null; ) l.childLanes = fn(l.childLanes, n), (a = l.alternate) !== null ? a.childLanes = fn(a.childLanes, n) : 4098 & l.flags && lw(e), i = l, l = l.return;
      return i.tag === 3 ? i.stateNode : null;
    }
    var Pv, Am, gb = 0, Um = 2, Fm = !1;
    function Rv(e) {
      var n = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
      e.updateQueue = n;
    }
    function yb(e, n) {
      var a = n.updateQueue, i = e.updateQueue;
      if (a === i) {
        var l = { baseState: i.baseState, firstBaseUpdate: i.firstBaseUpdate, lastBaseUpdate: i.lastBaseUpdate, shared: i.shared, effects: i.effects };
        n.updateQueue = l;
      }
    }
    function Qi(e, n) {
      return { eventTime: e, lane: n, tag: gb, payload: null, callback: null, next: null };
    }
    function vu(e, n, a) {
      var i = e.updateQueue;
      if (i === null) return null;
      var l = i.shared;
      if (Am !== l || Pv || (g("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), Pv = !0), (Rn & vr) !== nr) {
        var s = l.pending;
        return s === null ? n.next = n : (n.next = s.next, s.next = n), l.pending = n, _k(e, a);
      }
      return function(d, p, v, b) {
        var x = p.interleaved;
        return x === null ? (v.next = v, _v(p)) : (v.next = x.next, x.next = v), p.interleaved = v, zm(d, b);
      }(e, l, n, a);
    }
    function jm(e, n, a) {
      var i = n.updateQueue;
      if (i !== null) {
        var l = i.shared;
        if (kr(a)) {
          var s = l.lanes, d = fn(s = Gd(s, e.pendingLanes), a);
          l.lanes = d, Li(e, d);
        }
      }
    }
    function Nv(e, n) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var l = i.updateQueue;
        if (a === l) {
          var s = null, d = null, p = a.firstBaseUpdate;
          if (p !== null) {
            var v = p;
            do {
              var b = { eventTime: v.eventTime, lane: v.lane, tag: v.tag, payload: v.payload, callback: v.callback, next: null };
              d === null ? s = d = b : (d.next = b, d = b), v = v.next;
            } while (v !== null);
            d === null ? s = d = n : (d.next = n, d = n);
          } else s = d = n;
          return a = { baseState: l.baseState, firstBaseUpdate: s, lastBaseUpdate: d, shared: l.shared, effects: l.effects }, void (e.updateQueue = a);
        }
      }
      var x = a.lastBaseUpdate;
      x === null ? a.firstBaseUpdate = n : x.next = n, a.lastBaseUpdate = n;
    }
    function Pk(e, n, a, i, l, s) {
      switch (a.tag) {
        case 1:
          var d = a.payload;
          if (typeof d == "function") {
            pb();
            var p = d.call(s, i, l);
            if (8 & e.mode) {
              _t(!0);
              try {
                d.call(s, i, l);
              } finally {
                _t(!1);
              }
            }
            return mb(), p;
          }
          return d;
        case 3:
          e.flags = -65537 & e.flags | _n;
        case gb:
          var v, b = a.payload;
          if (typeof b == "function") {
            if (pb(), v = b.call(s, i, l), 8 & e.mode) {
              _t(!0);
              try {
                b.call(s, i, l);
              } finally {
                _t(!1);
              }
            }
            mb();
          } else v = b;
          return v == null ? i : He({}, i, v);
        case Um:
          return Fm = !0, i;
      }
      return i;
    }
    function Bm(e, n, a, i) {
      var l = e.updateQueue;
      Fm = !1, Am = l.shared;
      var s = l.firstBaseUpdate, d = l.lastBaseUpdate, p = l.shared.pending;
      if (p !== null) {
        l.shared.pending = null;
        var v = p, b = v.next;
        v.next = null, d === null ? s = b : d.next = b, d = v;
        var x = e.alternate;
        if (x !== null) {
          var D = x.updateQueue, L = D.lastBaseUpdate;
          L !== d && (L === null ? D.firstBaseUpdate = b : L.next = b, D.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        for (var N = l.baseState, P = 0, E = null, w = null, R = null, O = s; ; ) {
          var W = O.lane, K = O.eventTime;
          if (zo(i, W)) {
            if (R !== null) {
              var X = { eventTime: K, lane: 0, tag: O.tag, payload: O.payload, callback: O.callback, next: null };
              R = R.next = X;
            }
            if (N = Pk(e, 0, O, N, n, a), O.callback !== null && O.lane !== 0) {
              e.flags |= 64;
              var J = l.effects;
              J === null ? l.effects = [O] : J.push(O);
            }
          } else {
            var se = { eventTime: K, lane: W, tag: O.tag, payload: O.payload, callback: O.callback, next: null };
            R === null ? (w = R = se, E = N) : R = R.next = se, P = fn(P, W);
          }
          if ((O = O.next) === null) {
            if ((p = l.shared.pending) === null) break;
            var fe = p, le = fe.next;
            fe.next = null, O = le, l.lastBaseUpdate = fe, l.shared.pending = null;
          }
        }
        R === null && (E = N), l.baseState = E, l.firstBaseUpdate = w, l.lastBaseUpdate = R;
        var Se = l.shared.interleaved;
        if (Se !== null) {
          var Ye = Se;
          do
            P = fn(P, Ye.lane), Ye = Ye.next;
          while (Ye !== Se);
        } else s === null && (l.shared.lanes = 0);
        vp(P), e.lanes = P, e.memoizedState = N;
      }
      Am = null;
    }
    function Rk(e, n) {
      if (typeof e != "function") throw new Error("Invalid argument passed as callback. Expected a function. Instead received: " + e);
      e.call(n);
    }
    function bb() {
      Fm = !1;
    }
    function Wm() {
      return Fm;
    }
    function wb(e, n, a) {
      var i = n.effects;
      if (n.effects = null, i !== null) for (var l = 0; l < i.length; l++) {
        var s = i[l], d = s.callback;
        d !== null && (s.callback = null, Rk(d, a));
      }
    }
    Pv = !1, Am = null;
    var qf = {}, gu = Ca(qf), Qf = Ca(qf), Vm = Ca(qf);
    function Hm(e) {
      if (e === qf) throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function kb() {
      return Hm(Vm.current);
    }
    function Iv(e, n) {
      xt(Vm, n, e), xt(Qf, e, e), xt(gu, qf, e);
      var a = function(i) {
        var l, s, d = i.nodeType;
        switch (d) {
          case 9:
          case 11:
            l = d === 9 ? "#document" : "#fragment";
            var p = i.documentElement;
            s = p ? p.namespaceURI : vi(null, "");
            break;
          default:
            var v = d === 8 ? i.parentNode : i;
            s = vi(v.namespaceURI || null, l = v.tagName);
        }
        var b = l.toLowerCase();
        return { namespace: s, ancestorInfo: Ko(null, b) };
      }(n);
      jt(gu, e), xt(gu, a, e);
    }
    function Yc(e) {
      jt(gu, e), jt(Qf, e), jt(Vm, e);
    }
    function Dv() {
      return Hm(gu.current);
    }
    function Sb(e) {
      Hm(Vm.current);
      var n, a, i, l = Hm(gu.current), s = (n = l, a = e.type, { namespace: vi((i = n).namespace, a), ancestorInfo: Ko(i.ancestorInfo, a) });
      l !== s && (xt(Qf, e, e), xt(gu, s, e));
    }
    function Ov(e) {
      Qf.current === e && (jt(gu, e), jt(Qf, e));
    }
    var ho = Ca(0);
    function Lv(e, n) {
      return !!(e & n);
    }
    function Kc(e) {
      return 1 & e;
    }
    function Mv(e, n) {
      return 1 & e | n;
    }
    function yu(e, n) {
      xt(ho, n, e);
    }
    function Yf(e) {
      jt(ho, e);
    }
    function Nk(e, n) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function $m(e) {
      for (var n = e; n !== null; ) {
        if (n.tag === M) {
          var a = n.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || $i(i) || Jo(i)) return n;
          }
        } else if (n.tag === re && n.memoizedProps.revealOrder !== void 0) {
          if (n.flags & _n) return n;
        } else if (n.child !== null) {
          n.child.return = n, n = n.child;
          continue;
        }
        if (n === e) return null;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === e) return null;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
      return null;
    }
    var zv = [];
    function Av() {
      for (var e = 0; e < zv.length; e++)
        zv[e]._workInProgressVersionPrimary = null;
      zv.length = 0;
    }
    function Ik(e, n) {
      var a = (0, n._getVersion)(n._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [n, a] : e.mutableSourceEagerHydrationData.push(n, a);
    }
    var Uv, Xc, Be = y.ReactCurrentDispatcher, Kf = y.ReactCurrentBatchConfig;
    Uv = /* @__PURE__ */ new Set();
    var Ms = 0, Wn = null, Zt = null, er = null, qm = !1, Xf = !1, Gf = 0, Dk = 0, me = null, Va = null, bu = -1, Fv = !1;
    function Mn() {
      var e = me;
      Va === null ? Va = [e] : Va.push(e);
    }
    function Me() {
      var e = me;
      Va !== null && (bu++, Va[bu] !== e && function(n) {
        var a = dn(Wn);
        if (!Uv.has(a) && (Uv.add(a), Va !== null)) {
          for (var i = "", l = 30, s = 0; s <= bu; s++) {
            for (var d = Va[s], p = s === bu ? n : d, v = s + 1 + ". " + d; v.length < l; ) v += " ";
            i += v += p + `
`;
          }
          g(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, a, i);
        }
      }(e));
    }
    function Gc(e) {
      e == null || Mt(e) || g("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", me, typeof e);
    }
    function Nr() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function jv(e, n) {
      if (Fv) return !1;
      if (n === null) return g("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", me), !1;
      e.length !== n.length && g(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, me, "[" + n.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < n.length && a < e.length; a++) if (!Cr(e[a], n[a])) return !1;
      return !0;
    }
    function Jc(e, n, a, i, l, s) {
      Ms = s, Wn = n, Va = e !== null ? e._debugHookTypes : null, bu = -1, Fv = e !== null && e.type !== n.type, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, e !== null && e.memoizedState !== null ? Be.current = Vb : Be.current = Va !== null ? Wb : Bb;
      var d = a(i, l);
      if (Xf) {
        var p = 0;
        do {
          if (Xf = !1, Gf = 0, p >= 25) throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, Fv = !1, Zt = null, er = null, n.updateQueue = null, bu = -1, Be.current = Hb, d = a(i, l);
        } while (Xf);
      }
      Be.current = oh, n._debugHookTypes = Va;
      var v = Zt !== null && Zt.next !== null;
      if (Ms = 0, Wn = null, Zt = null, er = null, me = null, Va = null, bu = -1, e !== null && (e.flags & eo) != (n.flags & eo) && 1 & e.mode && g("Internal React error: Expected static flag was missing. Please notify the React team."), qm = !1, v) throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return d;
    }
    function Zc() {
      var e = Gf !== 0;
      return Gf = 0, e;
    }
    function Eb(e, n, a) {
      n.updateQueue = e.updateQueue, n.mode & zt ? n.flags &= -50333701 : n.flags &= -2053, e.lanes = Di(e.lanes, a);
    }
    function xb() {
      if (Be.current = oh, qm) {
        for (var e = Wn.memoizedState; e !== null; ) {
          var n = e.queue;
          n !== null && (n.pending = null), e = e.next;
        }
        qm = !1;
      }
      Ms = 0, Wn = null, Zt = null, er = null, Va = null, bu = -1, me = null, zb = !1, Xf = !1, Gf = 0;
    }
    function ii() {
      var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
      return er === null ? Wn.memoizedState = er = e : er = er.next = e, er;
    }
    function Ha() {
      var e, n;
      if (Zt === null) {
        var a = Wn.alternate;
        e = a !== null ? a.memoizedState : null;
      } else e = Zt.next;
      if ((n = er === null ? Wn.memoizedState : er.next) !== null) n = (er = n).next, Zt = e;
      else {
        if (e === null) throw new Error("Rendered more hooks than during the previous render.");
        var i = { memoizedState: (Zt = e).memoizedState, baseState: Zt.baseState, baseQueue: Zt.baseQueue, queue: Zt.queue, next: null };
        er === null ? Wn.memoizedState = er = i : er = er.next = i;
      }
      return er;
    }
    function Bv(e, n) {
      return typeof n == "function" ? n(e) : n;
    }
    function Wv(e, n, a) {
      var i, l = ii();
      i = a !== void 0 ? a(n) : n, l.memoizedState = l.baseState = i;
      var s = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: i };
      l.queue = s;
      var d = s.dispatch = Mk.bind(null, Wn, s);
      return [l.memoizedState, d];
    }
    function Vv(e, n, a) {
      var i = Ha(), l = i.queue;
      if (l === null) throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l.lastRenderedReducer = e;
      var s = Zt, d = s.baseQueue, p = l.pending;
      if (p !== null) {
        if (d !== null) {
          var v = d.next, b = p.next;
          d.next = b, p.next = v;
        }
        s.baseQueue !== d && g("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = d = p, l.pending = null;
      }
      if (d !== null) {
        var x = d.next, D = s.baseState, L = null, N = null, P = null, E = x;
        do {
          var w = E.lane;
          if (zo(Ms, w)) {
            if (P !== null) {
              var R = { lane: 0, action: E.action, hasEagerState: E.hasEagerState, eagerState: E.eagerState, next: null };
              P = P.next = R;
            }
            E.hasEagerState ? D = E.eagerState : D = e(D, E.action);
          } else {
            var O = { lane: w, action: E.action, hasEagerState: E.hasEagerState, eagerState: E.eagerState, next: null };
            P === null ? (N = P = O, L = D) : P = P.next = O, Wn.lanes = fn(Wn.lanes, w), vp(w);
          }
          E = E.next;
        } while (E !== null && E !== x);
        P === null ? L = D : P.next = N, Cr(D, i.memoizedState) || ip(), i.memoizedState = D, i.baseState = L, i.baseQueue = P, l.lastRenderedState = D;
      }
      var W = l.interleaved;
      if (W !== null) {
        var K = W;
        do {
          var X = K.lane;
          Wn.lanes = fn(Wn.lanes, X), vp(X), K = K.next;
        } while (K !== W);
      } else d === null && (l.lanes = 0);
      var J = l.dispatch;
      return [i.memoizedState, J];
    }
    function Hv(e, n, a) {
      var i = Ha(), l = i.queue;
      if (l === null) throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l.lastRenderedReducer = e;
      var s = l.dispatch, d = l.pending, p = i.memoizedState;
      if (d !== null) {
        l.pending = null;
        var v = d.next, b = v;
        do
          p = e(p, b.action), b = b.next;
        while (b !== v);
        Cr(p, i.memoizedState) || ip(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), l.lastRenderedState = p;
      }
      return [p, s];
    }
    function $v(e, n, a) {
      var i, l = Wn, s = ii();
      if (mr()) {
        if (a === void 0) throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        i = a(), Xc || i !== a() && (g("The result of getServerSnapshot should be cached to avoid an infinite loop"), Xc = !0);
      } else {
        if (i = n(), !Xc) {
          var d = n();
          Cr(i, d) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), Xc = !0);
        }
        var p = Ch();
        if (p === null) throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        zl(0, Ms) || Tb(l, n, i);
      }
      s.memoizedState = i;
      var v = { value: i, getSnapshot: n };
      return s.queue = v, Gm(_b.bind(null, l, v, e), [e]), l.flags |= Uu, Jf(9, Cb.bind(null, l, v, i, n), void 0, null), i;
    }
    function Qm(e, n, a) {
      var i = Wn, l = Ha(), s = n();
      if (!Xc) {
        var d = n();
        Cr(s, d) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), Xc = !0);
      }
      var p = l.memoizedState, v = !Cr(p, s);
      v && (l.memoizedState = s, ip());
      var b = l.queue;
      if (ep(_b.bind(null, i, b, e), [e]), b.getSnapshot !== n || v || er !== null && 1 & er.memoizedState.tag) {
        i.flags |= Uu, Jf(9, Cb.bind(null, i, b, s, n), void 0, null);
        var x = Ch();
        if (x === null) throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        zl(0, Ms) || Tb(i, n, s);
      }
      return s;
    }
    function Tb(e, n, a) {
      e.flags |= Lr;
      var i = { getSnapshot: n, value: a }, l = Wn.updateQueue;
      if (l === null) l = { lastEffect: null, stores: null }, Wn.updateQueue = l, l.stores = [i];
      else {
        var s = l.stores;
        s === null ? l.stores = [i] : s.push(i);
      }
    }
    function Cb(e, n, a, i) {
      n.value = a, n.getSnapshot = i, Pb(n) && Rb(e);
    }
    function _b(e, n, a) {
      return a(function() {
        Pb(n) && Rb(e);
      });
    }
    function Pb(e) {
      var n = e.getSnapshot, a = e.value;
      try {
        var i = n();
        return !Cr(a, i);
      } catch {
        return !0;
      }
    }
    function Rb(e) {
      var n = aa(e, Ke);
      n !== null && Vt(n, e, Ke, Bn);
    }
    function Ym(e) {
      var n = ii();
      typeof e == "function" && (e = e()), n.memoizedState = n.baseState = e;
      var a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Bv, lastRenderedState: e };
      n.queue = a;
      var i = a.dispatch = zk.bind(null, Wn, a);
      return [n.memoizedState, i];
    }
    function qv(e) {
      return Vv(Bv);
    }
    function Qv(e) {
      return Hv(Bv);
    }
    function Jf(e, n, a, i) {
      var l = { tag: e, create: n, destroy: a, deps: i, next: null }, s = Wn.updateQueue;
      if (s === null) s = { lastEffect: null, stores: null }, Wn.updateQueue = s, s.lastEffect = l.next = l;
      else {
        var d = s.lastEffect;
        if (d === null) s.lastEffect = l.next = l;
        else {
          var p = d.next;
          d.next = l, l.next = p, s.lastEffect = l;
        }
      }
      return l;
    }
    function Yv(e) {
      var n = { current: e };
      return ii().memoizedState = n, n;
    }
    function Km(e) {
      return Ha().memoizedState;
    }
    function Zf(e, n, a, i) {
      var l = ii(), s = i === void 0 ? null : i;
      Wn.flags |= e, l.memoizedState = Jf(1 | n, a, void 0, s);
    }
    function Xm(e, n, a, i) {
      var l = Ha(), s = i === void 0 ? null : i, d = void 0;
      if (Zt !== null) {
        var p = Zt.memoizedState;
        if (d = p.destroy, s !== null && jv(s, p.deps)) return void (l.memoizedState = Jf(n, a, d, s));
      }
      Wn.flags |= e, l.memoizedState = Jf(1 | n, a, d, s);
    }
    function Gm(e, n) {
      return Wn.mode & zt ? Zf(41945088, 8, e, n) : Zf(8390656, 8, e, n);
    }
    function ep(e, n) {
      return Xm(Uu, 8, e, n);
    }
    function Kv(e, n) {
      return Zf(4, 2, e, n);
    }
    function Jm(e, n) {
      return Xm(4, 2, e, n);
    }
    function Xv(e, n) {
      var a = 4;
      return a |= Co, Wn.mode & zt && (a |= _o), Zf(a, 4, e, n);
    }
    function Zm(e, n) {
      return Xm(4, 4, e, n);
    }
    function Nb(e, n) {
      if (typeof n == "function") {
        var a = n, i = e();
        return a(i), function() {
          a(null);
        };
      }
      if (n != null) {
        var l = n;
        l.hasOwnProperty("current") || g("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(l).join(", ") + "}");
        var s = e();
        return l.current = s, function() {
          l.current = null;
        };
      }
    }
    function Gv(e, n, a) {
      typeof n != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", n !== null ? typeof n : "null");
      var i = a != null ? a.concat([e]) : null, l = 4;
      return l |= Co, Wn.mode & zt && (l |= _o), Zf(l, 4, Nb.bind(null, n, e), i);
    }
    function eh(e, n, a) {
      typeof n != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", n !== null ? typeof n : "null");
      var i = a != null ? a.concat([e]) : null;
      return Xm(4, 4, Nb.bind(null, n, e), i);
    }
    function Ok(e, n) {
    }
    var nh = Ok;
    function Jv(e, n) {
      var a = n === void 0 ? null : n;
      return ii().memoizedState = [e, a], e;
    }
    function th(e, n) {
      var a = Ha(), i = n === void 0 ? null : n, l = a.memoizedState;
      return l !== null && i !== null && jv(i, l[1]) ? l[0] : (a.memoizedState = [e, i], e);
    }
    function Zv(e, n) {
      var a = ii(), i = n === void 0 ? null : n, l = e();
      return a.memoizedState = [l, i], l;
    }
    function rh(e, n) {
      var a = Ha(), i = n === void 0 ? null : n, l = a.memoizedState;
      if (l !== null && i !== null && jv(i, l[1])) return l[0];
      var s = e();
      return a.memoizedState = [s, i], s;
    }
    function eg(e) {
      return ii().memoizedState = e, e;
    }
    function Ib(e) {
      return Ob(Ha(), Zt.memoizedState, e);
    }
    function Db(e) {
      var n = Ha();
      return Zt === null ? (n.memoizedState = e, e) : Ob(n, Zt.memoizedState, e);
    }
    function Ob(e, n, a) {
      if (Ms & (Ke | no | Qt)) {
        if (!Cr(a, n)) {
          var i = Sr();
          Wn.lanes = fn(Wn.lanes, i), vp(i), e.baseState = !0;
        }
        return n;
      }
      return e.baseState && (e.baseState = !1, ip()), e.memoizedState = a, a;
    }
    function Lk(e, n, a) {
      var i, l, s = sr();
      Vn((l = ba, (i = s) !== 0 && i < l ? i : l)), e(!0);
      var d = Kf.transition;
      Kf.transition = {};
      var p = Kf.transition;
      Kf.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), n();
      } finally {
        Vn(s), Kf.transition = d, d === null && p._updatedFibers && (p._updatedFibers.size > 10 && C("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), p._updatedFibers.clear());
      }
    }
    function ng() {
      var e = Ym(!1), n = e[0], a = e[1], i = Lk.bind(null, a);
      return ii().memoizedState = i, [n, i];
    }
    function Lb() {
      return [qv()[0], Ha().memoizedState];
    }
    function Mb() {
      return [Qv()[0], Ha().memoizedState];
    }
    var zb = !1;
    function tg() {
      var e, n = ii(), a = Ch().identifierPrefix;
      if (mr()) {
        e = ":" + a + "R" + mu();
        var i = Gf++;
        i > 0 && (e += "H" + i.toString(32)), e += ":";
      } else
        e = ":" + a + "r" + (Dk++).toString(32) + ":";
      return n.memoizedState = e, e;
    }
    function ah() {
      return Ha().memoizedState;
    }
    function Mk(e, n, a) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = xu(e), l = { lane: i, action: a, hasEagerState: !1, eagerState: null, next: null };
      if (Ab(e)) Ub(n, l);
      else {
        var s = vb(e, n, l, i);
        s !== null && (Vt(s, e, i, Hr()), Fb(s, n, i));
      }
      jb(e, i);
    }
    function zk(e, n, a) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = xu(e), l = { lane: i, action: a, hasEagerState: !1, eagerState: null, next: null };
      if (Ab(e)) Ub(n, l);
      else {
        var s = e.alternate;
        if (e.lanes === 0 && (s === null || s.lanes === 0)) {
          var d = n.lastRenderedReducer;
          if (d !== null) {
            var p;
            p = Be.current, Be.current = vo;
            try {
              var v = n.lastRenderedState, b = d(v, a);
              if (l.hasEagerState = !0, l.eagerState = b, Cr(b, v)) return void function(D, L, N) {
                var P = L.interleaved;
                P === null ? (N.next = N, _v(L)) : (N.next = P.next, P.next = N), L.interleaved = N;
              }(0, n, l);
            } catch {
            } finally {
              Be.current = p;
            }
          }
        }
        var x = vb(e, n, l, i);
        x !== null && (Vt(x, e, i, Hr()), Fb(x, n, i));
      }
      jb(e, i);
    }
    function Ab(e) {
      var n = e.alternate;
      return e === Wn || n !== null && n === Wn;
    }
    function Ub(e, n) {
      Xf = qm = !0;
      var a = e.pending;
      a === null ? n.next = n : (n.next = a.next, a.next = n), e.pending = n;
    }
    function Fb(e, n, a) {
      if (kr(a)) {
        var i = n.lanes, l = fn(i = Gd(i, e.pendingLanes), a);
        n.lanes = l, Li(e, l);
      }
    }
    function jb(e, n, a) {
      Hu(e, n);
    }
    var oh = { readContext: It, useCallback: Nr, useContext: Nr, useEffect: Nr, useImperativeHandle: Nr, useInsertionEffect: Nr, useLayoutEffect: Nr, useMemo: Nr, useReducer: Nr, useRef: Nr, useState: Nr, useDebugValue: Nr, useDeferredValue: Nr, useTransition: Nr, useMutableSource: Nr, useSyncExternalStore: Nr, useId: Nr, unstable_isNewReconciler: Ie }, Bb = null, Wb = null, Vb = null, Hb = null, li = null, vo = null, ih = null, rg = function() {
      g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
    }, ln = function() {
      g("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
    };
    Bb = { readContext: function(e) {
      return It(e);
    }, useCallback: function(e, n) {
      return me = "useCallback", Mn(), Gc(n), Jv(e, n);
    }, useContext: function(e) {
      return me = "useContext", Mn(), It(e);
    }, useEffect: function(e, n) {
      return me = "useEffect", Mn(), Gc(n), Gm(e, n);
    }, useImperativeHandle: function(e, n, a) {
      return me = "useImperativeHandle", Mn(), Gc(a), Gv(e, n, a);
    }, useInsertionEffect: function(e, n) {
      return me = "useInsertionEffect", Mn(), Gc(n), Kv(e, n);
    }, useLayoutEffect: function(e, n) {
      return me = "useLayoutEffect", Mn(), Gc(n), Xv(e, n);
    }, useMemo: function(e, n) {
      me = "useMemo", Mn(), Gc(n);
      var a = Be.current;
      Be.current = li;
      try {
        return Zv(e, n);
      } finally {
        Be.current = a;
      }
    }, useReducer: function(e, n, a) {
      me = "useReducer", Mn();
      var i = Be.current;
      Be.current = li;
      try {
        return Wv(e, n, a);
      } finally {
        Be.current = i;
      }
    }, useRef: function(e) {
      return me = "useRef", Mn(), Yv(e);
    }, useState: function(e) {
      me = "useState", Mn();
      var n = Be.current;
      Be.current = li;
      try {
        return Ym(e);
      } finally {
        Be.current = n;
      }
    }, useDebugValue: function(e, n) {
      me = "useDebugValue", Mn();
    }, useDeferredValue: function(e) {
      return me = "useDeferredValue", Mn(), eg(e);
    }, useTransition: function() {
      return me = "useTransition", Mn(), ng();
    }, useMutableSource: function(e, n, a) {
      me = "useMutableSource", Mn();
    }, useSyncExternalStore: function(e, n, a) {
      return me = "useSyncExternalStore", Mn(), $v(e, n, a);
    }, useId: function() {
      return me = "useId", Mn(), tg();
    }, unstable_isNewReconciler: Ie }, Wb = { readContext: function(e) {
      return It(e);
    }, useCallback: function(e, n) {
      return me = "useCallback", Me(), Jv(e, n);
    }, useContext: function(e) {
      return me = "useContext", Me(), It(e);
    }, useEffect: function(e, n) {
      return me = "useEffect", Me(), Gm(e, n);
    }, useImperativeHandle: function(e, n, a) {
      return me = "useImperativeHandle", Me(), Gv(e, n, a);
    }, useInsertionEffect: function(e, n) {
      return me = "useInsertionEffect", Me(), Kv(e, n);
    }, useLayoutEffect: function(e, n) {
      return me = "useLayoutEffect", Me(), Xv(e, n);
    }, useMemo: function(e, n) {
      me = "useMemo", Me();
      var a = Be.current;
      Be.current = li;
      try {
        return Zv(e, n);
      } finally {
        Be.current = a;
      }
    }, useReducer: function(e, n, a) {
      me = "useReducer", Me();
      var i = Be.current;
      Be.current = li;
      try {
        return Wv(e, n, a);
      } finally {
        Be.current = i;
      }
    }, useRef: function(e) {
      return me = "useRef", Me(), Yv(e);
    }, useState: function(e) {
      me = "useState", Me();
      var n = Be.current;
      Be.current = li;
      try {
        return Ym(e);
      } finally {
        Be.current = n;
      }
    }, useDebugValue: function(e, n) {
      me = "useDebugValue", Me();
    }, useDeferredValue: function(e) {
      return me = "useDeferredValue", Me(), eg(e);
    }, useTransition: function() {
      return me = "useTransition", Me(), ng();
    }, useMutableSource: function(e, n, a) {
      me = "useMutableSource", Me();
    }, useSyncExternalStore: function(e, n, a) {
      return me = "useSyncExternalStore", Me(), $v(e, n, a);
    }, useId: function() {
      return me = "useId", Me(), tg();
    }, unstable_isNewReconciler: Ie }, Vb = { readContext: function(e) {
      return It(e);
    }, useCallback: function(e, n) {
      return me = "useCallback", Me(), th(e, n);
    }, useContext: function(e) {
      return me = "useContext", Me(), It(e);
    }, useEffect: function(e, n) {
      return me = "useEffect", Me(), ep(e, n);
    }, useImperativeHandle: function(e, n, a) {
      return me = "useImperativeHandle", Me(), eh(e, n, a);
    }, useInsertionEffect: function(e, n) {
      return me = "useInsertionEffect", Me(), Jm(e, n);
    }, useLayoutEffect: function(e, n) {
      return me = "useLayoutEffect", Me(), Zm(e, n);
    }, useMemo: function(e, n) {
      me = "useMemo", Me();
      var a = Be.current;
      Be.current = vo;
      try {
        return rh(e, n);
      } finally {
        Be.current = a;
      }
    }, useReducer: function(e, n, a) {
      me = "useReducer", Me();
      var i = Be.current;
      Be.current = vo;
      try {
        return Vv(e);
      } finally {
        Be.current = i;
      }
    }, useRef: function(e) {
      return me = "useRef", Me(), Km();
    }, useState: function(e) {
      me = "useState", Me();
      var n = Be.current;
      Be.current = vo;
      try {
        return qv();
      } finally {
        Be.current = n;
      }
    }, useDebugValue: function(e, n) {
      return me = "useDebugValue", Me(), nh();
    }, useDeferredValue: function(e) {
      return me = "useDeferredValue", Me(), Ib(e);
    }, useTransition: function() {
      return me = "useTransition", Me(), Lb();
    }, useMutableSource: function(e, n, a) {
      me = "useMutableSource", Me();
    }, useSyncExternalStore: function(e, n, a) {
      return me = "useSyncExternalStore", Me(), Qm(e, n);
    }, useId: function() {
      return me = "useId", Me(), ah();
    }, unstable_isNewReconciler: Ie }, Hb = { readContext: function(e) {
      return It(e);
    }, useCallback: function(e, n) {
      return me = "useCallback", Me(), th(e, n);
    }, useContext: function(e) {
      return me = "useContext", Me(), It(e);
    }, useEffect: function(e, n) {
      return me = "useEffect", Me(), ep(e, n);
    }, useImperativeHandle: function(e, n, a) {
      return me = "useImperativeHandle", Me(), eh(e, n, a);
    }, useInsertionEffect: function(e, n) {
      return me = "useInsertionEffect", Me(), Jm(e, n);
    }, useLayoutEffect: function(e, n) {
      return me = "useLayoutEffect", Me(), Zm(e, n);
    }, useMemo: function(e, n) {
      me = "useMemo", Me();
      var a = Be.current;
      Be.current = ih;
      try {
        return rh(e, n);
      } finally {
        Be.current = a;
      }
    }, useReducer: function(e, n, a) {
      me = "useReducer", Me();
      var i = Be.current;
      Be.current = ih;
      try {
        return Hv(e);
      } finally {
        Be.current = i;
      }
    }, useRef: function(e) {
      return me = "useRef", Me(), Km();
    }, useState: function(e) {
      me = "useState", Me();
      var n = Be.current;
      Be.current = ih;
      try {
        return Qv();
      } finally {
        Be.current = n;
      }
    }, useDebugValue: function(e, n) {
      return me = "useDebugValue", Me(), nh();
    }, useDeferredValue: function(e) {
      return me = "useDeferredValue", Me(), Db(e);
    }, useTransition: function() {
      return me = "useTransition", Me(), Mb();
    }, useMutableSource: function(e, n, a) {
      me = "useMutableSource", Me();
    }, useSyncExternalStore: function(e, n, a) {
      return me = "useSyncExternalStore", Me(), Qm(e, n);
    }, useId: function() {
      return me = "useId", Me(), ah();
    }, unstable_isNewReconciler: Ie }, li = { readContext: function(e) {
      return rg(), It(e);
    }, useCallback: function(e, n) {
      return me = "useCallback", ln(), Mn(), Jv(e, n);
    }, useContext: function(e) {
      return me = "useContext", ln(), Mn(), It(e);
    }, useEffect: function(e, n) {
      return me = "useEffect", ln(), Mn(), Gm(e, n);
    }, useImperativeHandle: function(e, n, a) {
      return me = "useImperativeHandle", ln(), Mn(), Gv(e, n, a);
    }, useInsertionEffect: function(e, n) {
      return me = "useInsertionEffect", ln(), Mn(), Kv(e, n);
    }, useLayoutEffect: function(e, n) {
      return me = "useLayoutEffect", ln(), Mn(), Xv(e, n);
    }, useMemo: function(e, n) {
      me = "useMemo", ln(), Mn();
      var a = Be.current;
      Be.current = li;
      try {
        return Zv(e, n);
      } finally {
        Be.current = a;
      }
    }, useReducer: function(e, n, a) {
      me = "useReducer", ln(), Mn();
      var i = Be.current;
      Be.current = li;
      try {
        return Wv(e, n, a);
      } finally {
        Be.current = i;
      }
    }, useRef: function(e) {
      return me = "useRef", ln(), Mn(), Yv(e);
    }, useState: function(e) {
      me = "useState", ln(), Mn();
      var n = Be.current;
      Be.current = li;
      try {
        return Ym(e);
      } finally {
        Be.current = n;
      }
    }, useDebugValue: function(e, n) {
      me = "useDebugValue", ln(), Mn();
    }, useDeferredValue: function(e) {
      return me = "useDeferredValue", ln(), Mn(), eg(e);
    }, useTransition: function() {
      return me = "useTransition", ln(), Mn(), ng();
    }, useMutableSource: function(e, n, a) {
      me = "useMutableSource", ln(), Mn();
    }, useSyncExternalStore: function(e, n, a) {
      return me = "useSyncExternalStore", ln(), Mn(), $v(e, n, a);
    }, useId: function() {
      return me = "useId", ln(), Mn(), tg();
    }, unstable_isNewReconciler: Ie }, vo = { readContext: function(e) {
      return rg(), It(e);
    }, useCallback: function(e, n) {
      return me = "useCallback", ln(), Me(), th(e, n);
    }, useContext: function(e) {
      return me = "useContext", ln(), Me(), It(e);
    }, useEffect: function(e, n) {
      return me = "useEffect", ln(), Me(), ep(e, n);
    }, useImperativeHandle: function(e, n, a) {
      return me = "useImperativeHandle", ln(), Me(), eh(e, n, a);
    }, useInsertionEffect: function(e, n) {
      return me = "useInsertionEffect", ln(), Me(), Jm(e, n);
    }, useLayoutEffect: function(e, n) {
      return me = "useLayoutEffect", ln(), Me(), Zm(e, n);
    }, useMemo: function(e, n) {
      me = "useMemo", ln(), Me();
      var a = Be.current;
      Be.current = vo;
      try {
        return rh(e, n);
      } finally {
        Be.current = a;
      }
    }, useReducer: function(e, n, a) {
      me = "useReducer", ln(), Me();
      var i = Be.current;
      Be.current = vo;
      try {
        return Vv(e);
      } finally {
        Be.current = i;
      }
    }, useRef: function(e) {
      return me = "useRef", ln(), Me(), Km();
    }, useState: function(e) {
      me = "useState", ln(), Me();
      var n = Be.current;
      Be.current = vo;
      try {
        return qv();
      } finally {
        Be.current = n;
      }
    }, useDebugValue: function(e, n) {
      return me = "useDebugValue", ln(), Me(), nh();
    }, useDeferredValue: function(e) {
      return me = "useDeferredValue", ln(), Me(), Ib(e);
    }, useTransition: function() {
      return me = "useTransition", ln(), Me(), Lb();
    }, useMutableSource: function(e, n, a) {
      me = "useMutableSource", ln(), Me();
    }, useSyncExternalStore: function(e, n, a) {
      return me = "useSyncExternalStore", ln(), Me(), Qm(e, n);
    }, useId: function() {
      return me = "useId", ln(), Me(), ah();
    }, unstable_isNewReconciler: Ie }, ih = { readContext: function(e) {
      return rg(), It(e);
    }, useCallback: function(e, n) {
      return me = "useCallback", ln(), Me(), th(e, n);
    }, useContext: function(e) {
      return me = "useContext", ln(), Me(), It(e);
    }, useEffect: function(e, n) {
      return me = "useEffect", ln(), Me(), ep(e, n);
    }, useImperativeHandle: function(e, n, a) {
      return me = "useImperativeHandle", ln(), Me(), eh(e, n, a);
    }, useInsertionEffect: function(e, n) {
      return me = "useInsertionEffect", ln(), Me(), Jm(e, n);
    }, useLayoutEffect: function(e, n) {
      return me = "useLayoutEffect", ln(), Me(), Zm(e, n);
    }, useMemo: function(e, n) {
      me = "useMemo", ln(), Me();
      var a = Be.current;
      Be.current = vo;
      try {
        return rh(e, n);
      } finally {
        Be.current = a;
      }
    }, useReducer: function(e, n, a) {
      me = "useReducer", ln(), Me();
      var i = Be.current;
      Be.current = vo;
      try {
        return Hv(e);
      } finally {
        Be.current = i;
      }
    }, useRef: function(e) {
      return me = "useRef", ln(), Me(), Km();
    }, useState: function(e) {
      me = "useState", ln(), Me();
      var n = Be.current;
      Be.current = vo;
      try {
        return Qv();
      } finally {
        Be.current = n;
      }
    }, useDebugValue: function(e, n) {
      return me = "useDebugValue", ln(), Me(), nh();
    }, useDeferredValue: function(e) {
      return me = "useDeferredValue", ln(), Me(), Db(e);
    }, useTransition: function() {
      return me = "useTransition", ln(), Me(), Mb();
    }, useMutableSource: function(e, n, a) {
      me = "useMutableSource", ln(), Me();
    }, useSyncExternalStore: function(e, n, a) {
      return me = "useSyncExternalStore", ln(), Me(), Qm(e, n);
    }, useId: function() {
      return me = "useId", ln(), Me(), ah();
    }, unstable_isNewReconciler: Ie };
    var wu = h.unstable_now, $b = 0, lh = -1, np = -1, uh = -1, ag = !1, sh = !1;
    function qb() {
      return ag;
    }
    function Qb() {
      return $b;
    }
    function Yb() {
      $b = wu();
    }
    function og(e) {
      np = wu(), e.actualStartTime < 0 && (e.actualStartTime = wu());
    }
    function Kb(e) {
      np = -1;
    }
    function ch(e, n) {
      if (np >= 0) {
        var a = wu() - np;
        e.actualDuration += a, n && (e.selfBaseDuration = a), np = -1;
      }
    }
    function ui(e) {
      if (lh >= 0) {
        var n = wu() - lh;
        lh = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case 3:
              return void (a.stateNode.effectDuration += n);
            case T:
              return void (a.stateNode.effectDuration += n);
          }
          a = a.return;
        }
      }
    }
    function ig(e) {
      if (uh >= 0) {
        var n = wu() - uh;
        uh = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case 3:
              var i = a.stateNode;
              return void (i !== null && (i.passiveEffectDuration += n));
            case T:
              var l = a.stateNode;
              return void (l !== null && (l.passiveEffectDuration += n));
          }
          a = a.return;
        }
      }
    }
    function si() {
      lh = wu();
    }
    function lg() {
      uh = wu();
    }
    function ug(e) {
      for (var n = e.child; n; ) e.actualDuration += n.actualDuration, n = n.sibling;
    }
    function go(e, n) {
      if (e && e.defaultProps) {
        var a = He({}, n), i = e.defaultProps;
        for (var l in i) a[l] === void 0 && (a[l] = i[l]);
        return a;
      }
      return n;
    }
    var sg, cg, dg, fg, pg, Xb, dh, mg, hg, vg, tp, gg = {};
    sg = /* @__PURE__ */ new Set(), cg = /* @__PURE__ */ new Set(), dg = /* @__PURE__ */ new Set(), fg = /* @__PURE__ */ new Set(), mg = /* @__PURE__ */ new Set(), pg = /* @__PURE__ */ new Set(), hg = /* @__PURE__ */ new Set(), vg = /* @__PURE__ */ new Set(), tp = /* @__PURE__ */ new Set();
    var Gb = /* @__PURE__ */ new Set();
    function yg(e, n, a, i) {
      var l = e.memoizedState, s = a(i, l);
      if (8 & e.mode) {
        _t(!0);
        try {
          s = a(i, l);
        } finally {
          _t(!1);
        }
      }
      Xb(n, s);
      var d = s == null ? l : He({}, l, s);
      e.memoizedState = d, e.lanes === 0 && (e.updateQueue.baseState = d);
    }
    dh = function(e, n) {
      if (e !== null && typeof e != "function") {
        var a = n + "_" + e;
        Gb.has(a) || (Gb.add(a), g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", n, e));
      }
    }, Xb = function(e, n) {
      if (n === void 0) {
        var a = En(e) || "Component";
        pg.has(a) || (pg.add(a), g("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
      }
    }, Object.defineProperty(gg, "_processChildContext", { enumerable: !1, value: function() {
      throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
    } }), Object.freeze(gg);
    var bg = { isMounted: function(e) {
      var n = vc.current;
      if (n !== null && n.tag === 1) {
        var a = n, i = a.stateNode;
        i._warnedAboutRefsInRender || g("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", dn(a) || "A component"), i._warnedAboutRefsInRender = !0;
      }
      var l = To(e);
      return !!l && Jr(l) === l;
    }, enqueueSetState: function(e, n, a) {
      var i = To(e), l = Hr(), s = xu(i), d = Qi(l, s);
      d.payload = n, a != null && (dh(a, "setState"), d.callback = a);
      var p = vu(i, d, s);
      p !== null && (Vt(p, i, s, l), jm(p, i, s)), Hu(i, s);
    }, enqueueReplaceState: function(e, n, a) {
      var i = To(e), l = Hr(), s = xu(i), d = Qi(l, s);
      d.tag = 1, d.payload = n, a != null && (dh(a, "replaceState"), d.callback = a);
      var p = vu(i, d, s);
      p !== null && (Vt(p, i, s, l), jm(p, i, s)), Hu(i, s);
    }, enqueueForceUpdate: function(e, n) {
      var a = To(e), i = Hr(), l = xu(a), s = Qi(i, l);
      s.tag = Um, n != null && (dh(n, "forceUpdate"), s.callback = n);
      var d = vu(a, s, l);
      d !== null && (Vt(d, a, l, i), jm(d, a, l)), function(p, v) {
        Ae !== null && typeof Ae.markForceUpdateScheduled == "function" && Ae.markForceUpdateScheduled(p, v);
      }(a, l);
    } };
    function Jb(e, n, a, i, l, s, d) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, d);
        if (8 & e.mode) {
          _t(!0);
          try {
            v = p.shouldComponentUpdate(i, s, d);
          } finally {
            _t(!1);
          }
        }
        return v === void 0 && g("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", En(n) || "Component"), v;
      }
      return !n.prototype || !n.prototype.isPureReactComponent || !Xl(a, i) || !Xl(l, s);
    }
    function Zb(e, n) {
      var a;
      n.updater = bg, e.stateNode = n, a = e, n._reactInternals = a, n._reactInternalInstance = gg;
    }
    function e0(e, n, a) {
      var i = !1, l = Fr, s = Fr, d = n.contextType;
      if ("contextType" in n && !(d === null || d !== void 0 && d.$$typeof === Fn && d._context === void 0) && !vg.has(n)) {
        vg.add(n);
        var p = "";
        p = d === void 0 ? " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof d != "object" ? " However, it is set to a " + typeof d + "." : d.$$typeof === lt ? " Did you accidentally pass the Context.Provider instead?" : d._context !== void 0 ? " Did you accidentally pass the Context.Consumer instead?" : " However, it is set to an object with keys {" + Object.keys(d).join(", ") + "}.", g("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", En(n) || "Component", p);
      }
      if (typeof d == "object" && d !== null) s = It(d);
      else {
        l = t(0, n, !0);
        var v = n.contextTypes;
        s = (i = v != null) ? o(e, l) : Fr;
      }
      var b = new n(a, s);
      if (8 & e.mode) {
        _t(!0);
        try {
          b = new n(a, s);
        } finally {
          _t(!1);
        }
      }
      var x = e.memoizedState = b.state !== null && b.state !== void 0 ? b.state : null;
      if (Zb(e, b), typeof n.getDerivedStateFromProps == "function" && x === null) {
        var D = En(n) || "Component";
        cg.has(D) || (cg.add(D), g("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", D, b.state === null ? "null" : "undefined", D));
      }
      if (typeof n.getDerivedStateFromProps == "function" || typeof b.getSnapshotBeforeUpdate == "function") {
        var L = null, N = null, P = null;
        if (typeof b.componentWillMount == "function" && b.componentWillMount.__suppressDeprecationWarning !== !0 ? L = "componentWillMount" : typeof b.UNSAFE_componentWillMount == "function" && (L = "UNSAFE_componentWillMount"), typeof b.componentWillReceiveProps == "function" && b.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? N = "componentWillReceiveProps" : typeof b.UNSAFE_componentWillReceiveProps == "function" && (N = "UNSAFE_componentWillReceiveProps"), typeof b.componentWillUpdate == "function" && b.componentWillUpdate.__suppressDeprecationWarning !== !0 ? P = "componentWillUpdate" : typeof b.UNSAFE_componentWillUpdate == "function" && (P = "UNSAFE_componentWillUpdate"), L !== null || N !== null || P !== null) {
          var E = En(n) || "Component", w = typeof n.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
          fg.has(E) || (fg.add(E), g(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, E, w, L !== null ? `
  ` + L : "", N !== null ? `
  ` + N : "", P !== null ? `
  ` + P : ""));
        }
      }
      return i && r(e, l, s), b;
    }
    function n0(e, n, a, i) {
      var l = n.state;
      if (typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(a, i), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(a, i), n.state !== l) {
        var s = dn(e) || "Component";
        sg.has(s) || (sg.add(s), g("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s)), bg.enqueueReplaceState(n, n.state, null);
      }
    }
    function wg(e, n, a, i) {
      (function(x, D, L) {
        var N = x.stateNode, P = En(D) || "Component";
        N.render || (D.prototype && typeof D.prototype.render == "function" ? g("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", P) : g("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", P)), !N.getInitialState || N.getInitialState.isReactClassApproved || N.state || g("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", P), N.getDefaultProps && !N.getDefaultProps.isReactClassApproved && g("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", P), N.propTypes && g("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", P), N.contextType && g("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", P), !D.childContextTypes || tp.has(D) || 8 & x.mode || (tp.add(D), g(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, P)), !D.contextTypes || tp.has(D) || 8 & x.mode || (tp.add(D), g(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, P)), N.contextTypes && g("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", P), D.contextType && D.contextTypes && !hg.has(D) && (hg.add(D), g("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", P)), typeof N.componentShouldUpdate == "function" && g("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", P), D.prototype && D.prototype.isPureReactComponent && N.shouldComponentUpdate !== void 0 && g("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", En(D) || "A pure component"), typeof N.componentDidUnmount == "function" && g("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", P), typeof N.componentDidReceiveProps == "function" && g("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", P), typeof N.componentWillRecieveProps == "function" && g("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", P), typeof N.UNSAFE_componentWillRecieveProps == "function" && g("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", P);
        var E = N.props !== L;
        N.props !== void 0 && E && g("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", P, P), N.defaultProps && g("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", P, P), typeof N.getSnapshotBeforeUpdate != "function" || typeof N.componentDidUpdate == "function" || dg.has(D) || (dg.add(D), g("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", En(D))), typeof N.getDerivedStateFromProps == "function" && g("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", P), typeof N.getDerivedStateFromError == "function" && g("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", P), typeof D.getSnapshotBeforeUpdate == "function" && g("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", P);
        var w = N.state;
        w && (typeof w != "object" || Mt(w)) && g("%s.state: must be set to an object or null", P), typeof N.getChildContext == "function" && typeof D.childContextTypes != "object" && g("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", P);
      })(e, n, a);
      var l = e.stateNode;
      l.props = a, l.state = e.memoizedState, l.refs = {}, Rv(e);
      var s = n.contextType;
      if (typeof s == "object" && s !== null) l.context = It(s);
      else {
        var d = t(0, n, !0);
        l.context = o(e, d);
      }
      if (l.state === a) {
        var p = En(n) || "Component";
        mg.has(p) || (mg.add(p), g("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
      }
      8 & e.mode && mo.recordLegacyContextWarning(e, l), mo.recordUnsafeLifecycleWarnings(e, l), l.state = e.memoizedState;
      var v = n.getDerivedStateFromProps;
      if (typeof v == "function" && (yg(e, n, v, a), l.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (function(x, D) {
        var L = D.state;
        typeof D.componentWillMount == "function" && D.componentWillMount(), typeof D.UNSAFE_componentWillMount == "function" && D.UNSAFE_componentWillMount(), L !== D.state && (g("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", dn(x) || "Component"), bg.enqueueReplaceState(D, D.state, null));
      }(e, l), Bm(e, a, l, i), l.state = e.memoizedState), typeof l.componentDidMount == "function") {
        var b = 4;
        b |= Co, e.mode & zt && (b |= _o), e.flags |= b;
      }
    }
    function zs(e, n) {
      return { value: e, source: n, stack: Ka(n), digest: null };
    }
    function kg(e, n, a) {
      return { value: e, source: null, stack: a ?? null, digest: n ?? null };
    }
    function Sg(e, n) {
      try {
        var a = n.value, i = n.source, l = n.stack, s = l !== null ? l : "";
        if (a != null && a._suppressLogging) {
          if (e.tag === 1) return;
          console.error(a);
        }
        var d = i ? dn(i) : null, p = (d ? "The above error occurred in the <" + d + "> component:" : "The above error occurred in one of your React components:") + `
` + s + `

` + (e.tag === 3 ? `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.` : "React will try to recreate this component tree from scratch using the error boundary you provided, " + (dn(e) || "Anonymous") + ".");
        console.error(p);
      } catch (v) {
        setTimeout(function() {
          throw v;
        });
      }
    }
    var Ak = typeof WeakMap == "function" ? WeakMap : Map;
    function t0(e, n, a) {
      var i = Qi(Bn, a);
      i.tag = 3, i.payload = { element: null };
      var l = n.value;
      return i.callback = function() {
        ES(l), Sg(e, n);
      }, i;
    }
    function Eg(e, n, a) {
      var i = Qi(Bn, a);
      i.tag = 3;
      var l = e.type.getDerivedStateFromError;
      if (typeof l == "function") {
        var s = n.value;
        i.payload = function() {
          return l(s);
        }, i.callback = function() {
          fw(e), Sg(e, n);
        };
      }
      var d = e.stateNode;
      return d !== null && typeof d.componentDidCatch == "function" && (i.callback = function() {
        var p;
        fw(e), Sg(e, n), typeof l != "function" && (p = this, ad === null ? ad = /* @__PURE__ */ new Set([p]) : ad.add(p));
        var v = n.value, b = n.stack;
        this.componentDidCatch(v, { componentStack: b !== null ? b : "" }), typeof l != "function" && (ur(e.lanes, Ke) || g("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", dn(e) || "Unknown"));
      }), i;
    }
    function r0(e, n, a) {
      var i, l = e.pingCache;
      if (l === null ? (l = e.pingCache = new Ak(), i = /* @__PURE__ */ new Set(), l.set(n, i)) : (i = l.get(n)) === void 0 && (i = /* @__PURE__ */ new Set(), l.set(n, i)), !i.has(a)) {
        i.add(a);
        var s = xS.bind(null, e, n, a);
        Zr && gp(e, a), n.then(s, s);
      }
    }
    function a0(e) {
      var n = e;
      do {
        if (n.tag === M && Nk(n)) return n;
        n = n.return;
      } while (n !== null);
      return null;
    }
    function o0(e, n, a, i, l) {
      if (!(1 & e.mode)) {
        if (e === n) e.flags |= ha;
        else {
          if (e.flags |= _n, a.flags |= hc, a.flags &= -52805, a.tag === 1) if (a.alternate === null) a.tag = Y;
          else {
            var s = Qi(Bn, Ke);
            s.tag = Um, vu(a, s, Ke);
          }
          a.lanes = fn(a.lanes, Ke);
        }
        return e;
      }
      return e.flags |= ha, e.lanes = l, e;
    }
    function Uk(e, n, a, i, l) {
      if (a.flags |= Ci, Zr && gp(e, l), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        (function(E) {
          var w = E.tag;
          if (!(1 & E.mode || w !== 0 && w !== S && w !== z)) {
            var R = E.alternate;
            R ? (E.updateQueue = R.updateQueue, E.memoizedState = R.memoizedState, E.lanes = R.lanes) : (E.updateQueue = null, E.memoizedState = null);
          }
        })(a), mr() && 1 & a.mode && eb();
        var d = a0(n);
        if (d !== null) return d.flags &= -257, o0(d, n, a, 0, l), 1 & d.mode && r0(e, s, l), void function(E, w, R) {
          var O = E.updateQueue;
          if (O === null) {
            var W = /* @__PURE__ */ new Set();
            W.add(R), E.updateQueue = W;
          } else O.add(R);
        }(d, 0, s);
        if (!(l & Ke)) return r0(e, s, l), void ty();
        i = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
      } else if (mr() && 1 & a.mode) {
        eb();
        var p = a0(n);
        if (p !== null) return p.flags & ha || (p.flags |= Ti), o0(p, n, a, 0, l), void vv(zs(i, a));
      }
      (function(E) {
        Wt !== cp && (Wt = Us), pp === null ? pp = [E] : pp.push(E);
      })(i = zs(i, a));
      var v = n;
      do {
        switch (v.tag) {
          case 3:
            var b = i;
            v.flags |= ha;
            var x = lr(l);
            return v.lanes = fn(v.lanes, x), void Nv(v, t0(v, b, x));
          case 1:
            var D = i, L = v.type, N = v.stateNode;
            if (!(v.flags & _n || typeof L.getDerivedStateFromError != "function" && (N === null || typeof N.componentDidCatch != "function" || rw(N)))) {
              v.flags |= ha;
              var P = lr(l);
              return v.lanes = fn(v.lanes, P), void Nv(v, Eg(v, D, P));
            }
        }
        v = v.return;
      } while (v !== null);
    }
    var xg, rp, Tg, Cg, _g, As, Pg, fh, ap, op = y.ReactCurrentOwner, ci = !1;
    function Br(e, n, a, i) {
      n.child = e === null ? fb(n, null, a, i) : $c(n, e.child, a, i);
    }
    function i0(e, n, a, i, l) {
      if (n.type !== n.elementType) {
        var s = a.propTypes;
        s && Ur(s, i, "prop", En(a));
      }
      var d, p, v = a.render, b = n.ref;
      if (Qc(n, l), No(n), op.current = n, pa(!0), d = Jc(e, n, v, i, b, l), p = Zc(), 8 & n.mode) {
        _t(!0);
        try {
          d = Jc(e, n, v, i, b, l), p = Zc();
        } finally {
          _t(!1);
        }
      }
      return pa(!1), Io(), e === null || ci ? (mr() && p && Wc(n), n.flags |= 1, Br(e, n, d, l), n.child) : (Eb(e, n, l), Yi(e, n, l));
    }
    function l0(e, n, a, i, l) {
      if (e === null) {
        var s = a.type;
        if (function(w) {
          return typeof w == "function" && !fy(w) && w.defaultProps === void 0;
        }(s) && a.compare === null && a.defaultProps === void 0) {
          var d;
          return d = ld(s), n.tag = z, n.type = d, Ig(n, s), u0(e, n, d, i, l);
        }
        var p = s.propTypes;
        if (p && Ur(p, i, "prop", En(s)), a.defaultProps !== void 0) {
          var v = En(s) || "Unknown";
          ap[v] || (g("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", v), ap[v] = !0);
        }
        var b = py(a.type, null, i, n, n.mode, l);
        return b.ref = n.ref, b.return = n, n.child = b, b;
      }
      var x = a.type, D = x.propTypes;
      D && Ur(D, i, "prop", En(x));
      var L = e.child;
      if (!Ug(e, l)) {
        var N = L.memoizedProps, P = a.compare;
        if ((P = P !== null ? P : Xl)(N, i) && e.ref === n.ref) return Yi(e, n, l);
      }
      n.flags |= 1;
      var E = Ws(L, i);
      return E.ref = n.ref, E.return = n, n.child = E, E;
    }
    function u0(e, n, a, i, l) {
      if (n.type !== n.elementType) {
        var s = n.elementType;
        if (s.$$typeof === bn) {
          var d = s, p = d._payload, v = d._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var b = s && s.propTypes;
          b && Ur(b, i, "prop", En(s));
        }
      }
      if (e !== null) {
        var x = e.memoizedProps;
        if (Xl(x, i) && e.ref === n.ref && n.type === e.type) {
          if (ci = !1, n.pendingProps = i = x, !Ug(e, l)) return n.lanes = e.lanes, Yi(e, n, l);
          e.flags & hc && (ci = !0);
        }
      }
      return Rg(e, n, a, i, l);
    }
    function s0(e, n, a) {
      var i, l = n.pendingProps, s = l.children, d = e !== null ? e.memoizedState : null;
      if (l.mode === "hidden") if (1 & n.mode) {
        if (!ur(a, At)) {
          var p;
          d !== null ? p = fn(d.baseLanes, a) : p = a, n.lanes = n.childLanes = At;
          var v = { baseLanes: p, cachePool: null, transitions: null };
          return n.memoizedState = v, n.updateQueue = null, _h(n, p), null;
        }
        var b = { baseLanes: 0, cachePool: null, transitions: null };
        n.memoizedState = b, _h(n, d !== null ? d.baseLanes : a);
      } else {
        var x = { baseLanes: 0, cachePool: null, transitions: null };
        n.memoizedState = x, _h(n, a);
      }
      else d !== null ? (i = fn(d.baseLanes, a), n.memoizedState = null) : i = a, _h(n, i);
      return Br(e, n, s, a), n.child;
    }
    function c0(e, n) {
      var a = n.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (n.flags |= Pl, n.flags |= Ad);
    }
    function Rg(e, n, a, i, l) {
      if (n.type !== n.elementType) {
        var s = a.propTypes;
        s && Ur(s, i, "prop", En(a));
      }
      var d, p, v;
      if (d = o(n, t(0, a, !0)), Qc(n, l), No(n), op.current = n, pa(!0), p = Jc(e, n, a, i, d, l), v = Zc(), 8 & n.mode) {
        _t(!0);
        try {
          p = Jc(e, n, a, i, d, l), v = Zc();
        } finally {
          _t(!1);
        }
      }
      return pa(!1), Io(), e === null || ci ? (mr() && v && Wc(n), n.flags |= 1, Br(e, n, p, l), n.child) : (Eb(e, n, l), Yi(e, n, l));
    }
    function d0(e, n, a, i, l) {
      switch (Sw(n)) {
        case !1:
          var s = n.stateNode, d = new n.type(n.memoizedProps, s.context).state;
          s.updater.enqueueSetState(s, d, null);
          break;
        case !0:
          n.flags |= _n, n.flags |= ha;
          var p = new Error("Simulated error coming from DevTools"), v = lr(l);
          n.lanes = fn(n.lanes, v), Nv(n, Eg(n, zs(p, n), v));
      }
      if (n.type !== n.elementType) {
        var b = a.propTypes;
        b && Ur(b, i, "prop", En(a));
      }
      var x, D;
      c(a) ? (x = !0, q(n)) : x = !1, Qc(n, l), n.stateNode === null ? (mh(e, n), e0(n, a, i), wg(n, a, i, l), D = !0) : D = e === null ? function(P, E, w, R) {
        var O = P.stateNode, W = P.memoizedProps;
        O.props = W;
        var K = O.context, X = E.contextType, J = Fr;
        J = typeof X == "object" && X !== null ? It(X) : o(P, t(0, E, !0));
        var se = E.getDerivedStateFromProps, fe = typeof se == "function" || typeof O.getSnapshotBeforeUpdate == "function";
        fe || typeof O.UNSAFE_componentWillReceiveProps != "function" && typeof O.componentWillReceiveProps != "function" || W === w && K === J || n0(P, O, w, J), bb();
        var le = P.memoizedState, Se = O.state = le;
        if (Bm(P, w, O, R), Se = P.memoizedState, W === w && le === Se && !u() && !Wm()) {
          if (typeof O.componentDidMount == "function") {
            var Ye = 4;
            Ye |= Co, P.mode & zt && (Ye |= _o), P.flags |= Ye;
          }
          return !1;
        }
        typeof se == "function" && (yg(P, E, se, w), Se = P.memoizedState);
        var qe = Wm() || Jb(P, E, W, w, le, Se, J);
        if (qe) {
          if (fe || typeof O.UNSAFE_componentWillMount != "function" && typeof O.componentWillMount != "function" || (typeof O.componentWillMount == "function" && O.componentWillMount(), typeof O.UNSAFE_componentWillMount == "function" && O.UNSAFE_componentWillMount()), typeof O.componentDidMount == "function") {
            var Ge = 4;
            Ge |= Co, P.mode & zt && (Ge |= _o), P.flags |= Ge;
          }
        } else {
          if (typeof O.componentDidMount == "function") {
            var vn = 4;
            vn |= Co, P.mode & zt && (vn |= _o), P.flags |= vn;
          }
          P.memoizedProps = w, P.memoizedState = Se;
        }
        return O.props = w, O.state = Se, O.context = J, qe;
      }(n, a, i, l) : function(P, E, w, R, O) {
        var W = E.stateNode;
        yb(P, E);
        var K = E.memoizedProps, X = E.type === E.elementType ? K : go(E.type, K);
        W.props = X;
        var J = E.pendingProps, se = W.context, fe = w.contextType, le = Fr;
        le = typeof fe == "object" && fe !== null ? It(fe) : o(E, t(0, w, !0));
        var Se = w.getDerivedStateFromProps, Ye = typeof Se == "function" || typeof W.getSnapshotBeforeUpdate == "function";
        Ye || typeof W.UNSAFE_componentWillReceiveProps != "function" && typeof W.componentWillReceiveProps != "function" || K === J && se === le || n0(E, W, R, le), bb();
        var qe = E.memoizedState, Ge = W.state = qe;
        if (Bm(E, R, W, O), Ge = E.memoizedState, K === J && qe === Ge && !u() && !Wm()) return typeof W.componentDidUpdate == "function" && (K === P.memoizedProps && qe === P.memoizedState || (E.flags |= 4)), typeof W.getSnapshotBeforeUpdate == "function" && (K === P.memoizedProps && qe === P.memoizedState || (E.flags |= Au)), !1;
        typeof Se == "function" && (yg(E, w, Se, R), Ge = E.memoizedState);
        var vn = Wm() || Jb(E, w, X, R, qe, Ge, le) || !1;
        return vn ? (Ye || typeof W.UNSAFE_componentWillUpdate != "function" && typeof W.componentWillUpdate != "function" || (typeof W.componentWillUpdate == "function" && W.componentWillUpdate(R, Ge, le), typeof W.UNSAFE_componentWillUpdate == "function" && W.UNSAFE_componentWillUpdate(R, Ge, le)), typeof W.componentDidUpdate == "function" && (E.flags |= 4), typeof W.getSnapshotBeforeUpdate == "function" && (E.flags |= Au)) : (typeof W.componentDidUpdate == "function" && (K === P.memoizedProps && qe === P.memoizedState || (E.flags |= 4)), typeof W.getSnapshotBeforeUpdate == "function" && (K === P.memoizedProps && qe === P.memoizedState || (E.flags |= Au)), E.memoizedProps = R, E.memoizedState = Ge), W.props = R, W.state = Ge, W.context = le, vn;
      }(e, n, a, i, l);
      var L = Ng(e, n, a, D, x, l), N = n.stateNode;
      return D && N.props !== i && (As || g("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", dn(n) || "a component"), As = !0), L;
    }
    function Ng(e, n, a, i, l, s) {
      c0(e, n);
      var d = !!(n.flags & _n);
      if (!i && !d) return l && G(n, a, !1), Yi(e, n, s);
      var p, v = n.stateNode;
      if (op.current = n, d && typeof a.getDerivedStateFromError != "function") p = null, Kb();
      else {
        if (No(n), pa(!0), p = v.render(), 8 & n.mode) {
          _t(!0);
          try {
            v.render();
          } finally {
            _t(!1);
          }
        }
        pa(!1), Io();
      }
      return n.flags |= 1, e !== null && d ? function(b, x, D, L) {
        x.child = $c(x, b.child, null, L), x.child = $c(x, null, D, L);
      }(e, n, p, s) : Br(e, n, p, s), n.memoizedState = v.state, l && G(n, a, !0), n.child;
    }
    function f0(e) {
      var n = e.stateNode;
      n.pendingContext ? I(e, n.pendingContext, n.pendingContext !== n.context) : n.context && I(e, n.context, !1), Iv(e, n.containerInfo);
    }
    function p0(e, n, a, i, l) {
      return Hc(), vv(l), n.flags |= Ti, Br(e, n, a, i), n.child;
    }
    function Fk(e, n, a, i) {
      mh(e, n);
      var l = n.pendingProps, s = a, d = s._payload, p = (0, s._init)(d);
      n.type = p;
      var v = n.tag = function(L) {
        if (typeof L == "function") return fy(L) ? 1 : 0;
        if (L != null) {
          var N = L.$$typeof;
          if (N === cn) return S;
          if (N === hn) return F;
        }
        return 2;
      }(p), b = go(p, l);
      switch (v) {
        case 0:
          return Ig(n, p), n.type = p = ld(p), Rg(null, n, p, b, i);
        case 1:
          return n.type = p = ly(p), d0(null, n, p, b, i);
        case S:
          return n.type = p = uy(p), i0(null, n, p, b, i);
        case F:
          if (n.type !== n.elementType) {
            var x = p.propTypes;
            x && Ur(x, b, "prop", En(p));
          }
          return l0(null, n, p, go(p.type, b), i);
      }
      var D = "";
      throw p !== null && typeof p == "object" && p.$$typeof === bn && (D = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + p + ". Lazy element type must resolve to a class or function." + D);
    }
    function Ig(e, n) {
      if (n && n.childContextTypes && g("%s(...): childContextTypes cannot be defined on a function component.", n.displayName || n.name || "Component"), e.ref !== null) {
        var a = "", i = fl();
        i && (a += `

Check the render method of \`` + i + "`.");
        var l = i || "", s = e._debugSource;
        s && (l = s.fileName + ":" + s.lineNumber), _g[l] || (_g[l] = !0, g("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
      }
      if (n.defaultProps !== void 0) {
        var d = En(n) || "Unknown";
        ap[d] || (g("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", d), ap[d] = !0);
      }
      if (typeof n.getDerivedStateFromProps == "function") {
        var p = En(n) || "Unknown";
        Cg[p] || (g("%s: Function components do not support getDerivedStateFromProps.", p), Cg[p] = !0);
      }
      if (typeof n.contextType == "object" && n.contextType !== null) {
        var v = En(n) || "Unknown";
        Tg[v] || (g("%s: Function components do not support contextType.", v), Tg[v] = !0);
      }
    }
    xg = {}, rp = {}, Tg = {}, Cg = {}, _g = {}, As = !1, Pg = {}, fh = {}, ap = {};
    var Dg = { dehydrated: null, treeContext: null, retryLane: 0 };
    function Og(e) {
      return { baseLanes: e, cachePool: null, transitions: null };
    }
    function m0(e, n, a) {
      var i = n.pendingProps;
      Ew(n) && (n.flags |= _n);
      var l = ho.current, s = !1, d = !!(n.flags & _n);
      if (d || function(W, K) {
        return (K === null || K.memoizedState !== null) && Lv(W, 2);
      }(l, e) ? (s = !0, n.flags &= -129) : e !== null && e.memoizedState === null || (l = l | 1), yu(n, l = Kc(l)), e === null) {
        hv(n);
        var p = n.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null) return function(W, K) {
            return 1 & W.mode ? Jo(K) ? W.lanes = Ri : W.lanes = At : (g("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), W.lanes = Ke), null;
          }(n, v);
        }
        var b = i.children, x = i.fallback;
        if (s) {
          var D = function(W, K, X, J) {
            var se, fe, le = W.mode, Se = W.child, Ye = { mode: "hidden", children: K };
            return 1 & le || Se === null ? (se = Mg(Ye, le), fe = Cu(X, le, J, null)) : ((se = Se).childLanes = 0, se.pendingProps = Ye, 2 & W.mode && (se.actualDuration = 0, se.actualStartTime = -1, se.selfBaseDuration = 0, se.treeBaseDuration = 0), fe = Cu(X, le, J, null)), se.return = W, fe.return = W, se.sibling = fe, W.child = se, fe;
          }(n, b, x, a);
          return n.child.memoizedState = Og(a), n.memoizedState = Dg, D;
        }
        return Lg(n, b);
      }
      var L = e.memoizedState;
      if (L !== null) {
        var N = L.dehydrated;
        if (N !== null) return function(W, K, X, J, se, fe, le) {
          if (X) {
            if (K.flags & Ti) return K.flags &= -257, ph(W, K, le, kg(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering.")));
            if (K.memoizedState !== null) return K.child = W.child, K.flags |= _n, null;
            var Se = function(sa, Dr, Tt, ud, Vs) {
              var Qw = Dr.mode, jS = { mode: "visible", children: Tt }, Ty = Mg(jS, Qw), Mh = Cu(ud, Qw, Vs, null);
              return Mh.flags |= 2, Ty.return = Dr, Mh.return = Dr, Ty.sibling = Mh, Dr.child = Ty, !(1 & Dr.mode) || $c(Dr, sa.child, null, Vs), Mh;
            }(W, K, J.children, J.fallback, le);
            return K.child.memoizedState = Og(le), K.memoizedState = Dg, Se;
          }
          if (yk(), !(1 & K.mode)) return ph(W, K, le, null);
          if (Jo(se)) {
            var Ye, qe, Ge, vn = function(sa) {
              var Dr, Tt, ud, Vs = sa.nextSibling && sa.nextSibling.dataset;
              return Vs && (Dr = Vs.dgst, Tt = Vs.msg, ud = Vs.stck), { message: Tt, digest: Dr, stack: ud };
            }(se);
            return Ye = vn.digest, qe = vn.message, Ge = vn.stack, ph(W, K, le, kg(qe ? new Error(qe) : new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering."), Ye, Ge));
          }
          var un = ur(le, W.childLanes);
          if (ci || un) {
            var Tn = Ch();
            if (Tn !== null) {
              var Un = function(sa, Dr) {
                var Tt;
                switch (Ln(Dr)) {
                  case no:
                    Tt = Do;
                    break;
                  case Qt:
                    Tt = Ri;
                    break;
                  case 64:
                  case 128:
                  case 256:
                  case 512:
                  case Ol:
                  case $u:
                  case Oo:
                  case Da:
                  case $n:
                  case jn:
                  case Oa:
                  case Pt:
                  case Yt:
                  case ro:
                  case Lo:
                  case ir:
                  case Ni:
                  case kc:
                  case Ml:
                  case Sc:
                  case ga:
                    Tt = to;
                    break;
                  case na:
                    Tt = ea;
                    break;
                  default:
                    Tt = 0;
                }
                return Tt & (sa.suspendedLanes | Dr) ? 0 : Tt;
              }(Tn, le);
              if (Un !== 0 && Un !== fe.retryLane) {
                fe.retryLane = Un;
                var at = Bn;
                aa(W, Un), Vt(Tn, W, Un, at);
              }
            }
            return ty(), ph(W, K, le, kg(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition.")));
          }
          if ($i(se)) {
            K.flags |= _n, K.child = W.child;
            var ua = TS.bind(null, W);
            return $r = ua, se._reactRetry = $r, null;
          }
          wk(K, se, fe.treeContext);
          var Jn = Lg(K, J.children);
          return Jn.flags |= Md, Jn;
          var $r;
        }(e, n, d, i, N, L, a);
      }
      if (s) {
        var P = i.fallback, E = function(W, K, X, J, se) {
          var fe, le, Se = K.mode, Ye = W.child, qe = Ye.sibling, Ge = { mode: "hidden", children: X };
          return 1 & Se || K.child === Ye ? (fe = h0(Ye, Ge)).subtreeFlags = Ye.subtreeFlags & eo : ((fe = K.child).childLanes = 0, fe.pendingProps = Ge, 2 & K.mode && (fe.actualDuration = 0, fe.actualStartTime = -1, fe.selfBaseDuration = Ye.selfBaseDuration, fe.treeBaseDuration = Ye.treeBaseDuration), K.deletions = null), qe !== null ? le = Ws(qe, J) : (le = Cu(J, Se, se, null)).flags |= 2, le.return = K, fe.return = K, fe.sibling = le, K.child = fe, le;
        }(e, n, i.children, P, a), w = n.child, R = e.child.memoizedState;
        return w.memoizedState = R === null ? Og(a) : function(W, K) {
          return { baseLanes: fn(W.baseLanes, K), cachePool: null, transitions: W.transitions };
        }(R, a), w.childLanes = function(W, K) {
          return Di(W.childLanes, K);
        }(e, a), n.memoizedState = Dg, E;
      }
      var O = function(W, K, X, J) {
        var se = W.child, fe = se.sibling, le = h0(se, { mode: "visible", children: X });
        if (1 & K.mode || (le.lanes = J), le.return = K, le.sibling = null, fe !== null) {
          var Se = K.deletions;
          Se === null ? (K.deletions = [fe], K.flags |= xi) : Se.push(fe);
        }
        return K.child = le, le;
      }(e, n, i.children, a);
      return n.memoizedState = null, O;
    }
    function Lg(e, n, a) {
      var i = Mg({ mode: "visible", children: n }, e.mode);
      return i.return = e, e.child = i, i;
    }
    function Mg(e, n, a) {
      return mw(e, n, 0, null);
    }
    function h0(e, n) {
      return Ws(e, n);
    }
    function ph(e, n, a, i) {
      i !== null && vv(i), $c(n, e.child, null, a);
      var l = Lg(n, n.pendingProps.children);
      return l.flags |= 2, n.memoizedState = null, l;
    }
    function v0(e, n, a) {
      e.lanes = fn(e.lanes, n);
      var i = e.alternate;
      i !== null && (i.lanes = fn(i.lanes, n)), Cv(e.return, n, a);
    }
    function g0(e, n) {
      var a = Mt(e), i = !a && typeof Qr(e) == "function";
      if (a || i) {
        var l = a ? "array" : "iterable";
        return g("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", l, n, l), !1;
      }
      return !0;
    }
    function zg(e, n, a, i, l) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = { isBackwards: n, rendering: null, renderingStartTime: 0, last: i, tail: a, tailMode: l } : (s.isBackwards = n, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = l);
    }
    function y0(e, n, a) {
      var i = n.pendingProps, l = i.revealOrder, s = i.tail, d = i.children;
      (function(P) {
        if (P !== void 0 && P !== "forwards" && P !== "backwards" && P !== "together" && !Pg[P]) if (Pg[P] = !0, typeof P == "string") switch (P.toLowerCase()) {
          case "together":
          case "forwards":
          case "backwards":
            g('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', P, P.toLowerCase());
            break;
          case "forward":
          case "backward":
            g('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', P, P.toLowerCase());
            break;
          default:
            g('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', P);
        }
        else g('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', P);
      })(l), function(P, E) {
        P === void 0 || fh[P] || (P !== "collapsed" && P !== "hidden" ? (fh[P] = !0, g('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', P)) : E !== "forwards" && E !== "backwards" && (fh[P] = !0, g('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', P)));
      }(s, l), function(P, E) {
        if ((E === "forwards" || E === "backwards") && P != null && P !== !1) if (Mt(P)) {
          for (var w = 0; w < P.length; w++) if (!g0(P[w], w)) return;
        } else {
          var R = Qr(P);
          if (typeof R == "function") {
            var O = R.call(P);
            if (O) for (var W = O.next(), K = 0; !W.done; W = O.next()) {
              if (!g0(W.value, K)) return;
              K++;
            }
          } else g('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', E);
        }
      }(d, l), Br(e, n, d, a);
      var p = ho.current;
      if (Lv(p, 2) ? (p = Mv(p, 2), n.flags |= _n) : (e !== null && e.flags & _n && function(P, E, w) {
        for (var R = E; R !== null; ) {
          if (R.tag === M) R.memoizedState !== null && v0(R, w, P);
          else if (R.tag === re) v0(R, w, P);
          else if (R.child !== null) {
            R.child.return = R, R = R.child;
            continue;
          }
          if (R === P) return;
          for (; R.sibling === null; ) {
            if (R.return === null || R.return === P) return;
            R = R.return;
          }
          R.sibling.return = R.return, R = R.sibling;
        }
      }(n, n.child, a), p = Kc(p)), yu(n, p), 1 & n.mode) switch (l) {
        case "forwards":
          var v, b = function(P) {
            for (var E = P, w = null; E !== null; ) {
              var R = E.alternate;
              R !== null && $m(R) === null && (w = E), E = E.sibling;
            }
            return w;
          }(n.child);
          b === null ? (v = n.child, n.child = null) : (v = b.sibling, b.sibling = null), zg(n, !1, v, b, s);
          break;
        case "backwards":
          var x = null, D = n.child;
          for (n.child = null; D !== null; ) {
            var L = D.alternate;
            if (L !== null && $m(L) === null) {
              n.child = D;
              break;
            }
            var N = D.sibling;
            D.sibling = x, x = D, D = N;
          }
          zg(n, !0, x, null, s);
          break;
        case "together":
          zg(n, !1, null, null, void 0);
          break;
        default:
          n.memoizedState = null;
      }
      else n.memoizedState = null;
      return n.child;
    }
    var b0 = !1, w0, Ag, k0, S0, E0 = !1;
    function ip() {
      ci = !0;
    }
    function mh(e, n) {
      1 & n.mode || e !== null && (e.alternate = null, n.alternate = null, n.flags |= 2);
    }
    function Yi(e, n, a) {
      return e !== null && (n.dependencies = e.dependencies), Kb(), vp(n.lanes), ur(a, n.childLanes) ? (function(i, l) {
        if (i !== null && l.child !== i.child) throw new Error("Resuming work not yet implemented.");
        if (l.child !== null) {
          var s = l.child, d = Ws(s, s.pendingProps);
          for (l.child = d, d.return = l; s.sibling !== null; ) s = s.sibling, (d = d.sibling = Ws(s, s.pendingProps)).return = l;
          d.sibling = null;
        }
      }(e, n), n.child) : null;
    }
    function Ug(e, n) {
      return !!ur(e.lanes, n);
    }
    function x0(e, n, a) {
      if (n._debugNeedsRemount && e !== null) return function(E, w, R) {
        var O = w.return;
        if (O === null) throw new Error("Cannot swap the root fiber.");
        if (E.alternate = null, w.alternate = null, R.index = w.index, R.sibling = w.sibling, R.return = w.return, R.ref = w.ref, w === O.child) O.child = R;
        else {
          var W = O.child;
          if (W === null) throw new Error("Expected parent to have a child.");
          for (; W.sibling !== w; ) if ((W = W.sibling) === null) throw new Error("Expected to find the previous sibling.");
          W.sibling = R;
        }
        var K = O.deletions;
        return K === null ? (O.deletions = [E], O.flags |= xi) : K.push(E), R.flags |= 2, R;
      }(e, n, py(n.type, n.key, n.pendingProps, n._debugOwner || null, n.mode, n.lanes));
      if (e !== null) if (e.memoizedProps !== n.pendingProps || u() || n.type !== e.type) ci = !0;
      else {
        if (!(Ug(e, a) || n.flags & _n)) return ci = !1, function(E, w, R) {
          switch (w.tag) {
            case 3:
              f0(w), w.stateNode, Hc();
              break;
            case 5:
              Sb(w);
              break;
            case 1:
              c(w.type) && q(w);
              break;
            case 4:
              Iv(w, w.stateNode.containerInfo);
              break;
            case j:
              var O = w.memoizedProps.value;
              hb(w, w.type._context, O);
              break;
            case T:
              ur(R, w.childLanes) && (w.flags |= 4);
              var W = w.stateNode;
              W.effectDuration = 0, W.passiveEffectDuration = 0;
              break;
            case M:
              var K = w.memoizedState;
              if (K !== null) {
                if (K.dehydrated !== null) return yu(w, Kc(ho.current)), w.flags |= _n, null;
                if (ur(R, w.child.childLanes)) return m0(E, w, R);
                yu(w, Kc(ho.current));
                var X = Yi(E, w, R);
                return X !== null ? X.sibling : null;
              }
              yu(w, Kc(ho.current));
              break;
            case re:
              var J = !!(E.flags & _n), se = ur(R, w.childLanes);
              if (J) {
                if (se) return y0(E, w, R);
                w.flags |= _n;
              }
              var fe = w.memoizedState;
              if (fe !== null && (fe.rendering = null, fe.tail = null, fe.lastEffect = null), yu(w, ho.current), se) break;
              return null;
            case ne:
            case ge:
              return w.lanes = 0, s0(E, w, R);
          }
          return Yi(E, w, R);
        }(e, n, a);
        ci = !!(e.flags & hc);
      }
      else if (ci = !1, mr() && function(E) {
        return oi(), !!(E.flags & zd);
      }(n)) {
        var i = n.index;
        Pm(n, (oi(), on), i);
      }
      switch (n.lanes = 0, n.tag) {
        case 2:
          return function(E, w, R, O) {
            mh(E, w);
            var W, K, X, J = w.pendingProps;
            if (W = o(w, t(0, R, !1)), Qc(w, O), No(w), R.prototype && typeof R.prototype.render == "function") {
              var se = En(R) || "Unknown";
              xg[se] || (g("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", se, se), xg[se] = !0);
            }
            if (8 & w.mode && mo.recordLegacyContextWarning(w, null), pa(!0), op.current = w, K = Jc(null, w, R, J, W, O), X = Zc(), pa(!1), Io(), w.flags |= 1, typeof K == "object" && K !== null && typeof K.render == "function" && K.$$typeof === void 0) {
              var fe = En(R) || "Unknown";
              rp[fe] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", fe, fe, fe), rp[fe] = !0);
            }
            if (typeof K == "object" && K !== null && typeof K.render == "function" && K.$$typeof === void 0) {
              var le = En(R) || "Unknown";
              rp[le] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", le, le, le), rp[le] = !0), w.tag = 1, w.memoizedState = null, w.updateQueue = null;
              var Se = !1;
              return c(R) ? (Se = !0, q(w)) : Se = !1, w.memoizedState = K.state !== null && K.state !== void 0 ? K.state : null, Rv(w), Zb(w, K), wg(w, R, J, O), Ng(null, w, R, !0, Se, O);
            }
            if (w.tag = 0, 8 & w.mode) {
              _t(!0);
              try {
                K = Jc(null, w, R, J, W, O), X = Zc();
              } finally {
                _t(!1);
              }
            }
            return mr() && X && Wc(w), Br(null, w, K, O), Ig(w, R), w.child;
          }(e, n, n.type, a);
        case 16:
          return Fk(e, n, n.elementType, a);
        case 0:
          var l = n.type, s = n.pendingProps;
          return Rg(e, n, l, n.elementType === l ? s : go(l, s), a);
        case 1:
          var d = n.type, p = n.pendingProps;
          return d0(e, n, d, n.elementType === d ? p : go(d, p), a);
        case 3:
          return function(E, w, R) {
            if (f0(w), E === null) throw new Error("Should have a current fiber. This is a bug in React.");
            var O = w.pendingProps, W = w.memoizedState, K = W.element;
            yb(E, w), Bm(w, O, null, R);
            var X = w.memoizedState;
            w.stateNode;
            var J = X.element;
            if (W.isDehydrated) {
              var se = { element: J, isDehydrated: !1, cache: X.cache, pendingSuspenseBoundaries: X.pendingSuspenseBoundaries, transitions: X.transitions };
              if (w.updateQueue.baseState = se, w.memoizedState = se, w.flags & Ti) return p0(E, w, J, R, zs(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), w));
              if (J !== K) return p0(E, w, J, R, zs(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), w));
              bk(w);
              var fe = fb(w, null, J, R);
              w.child = fe;
              for (var le = fe; le; ) le.flags = -3 & le.flags | Md, le = le.sibling;
            } else {
              if (Hc(), J === K) return Yi(E, w, R);
              Br(E, w, J, R);
            }
            return w.child;
          }(e, n, a);
        case 5:
          return function(E, w, R) {
            Sb(w), E === null && hv(w);
            var O = w.type, W = w.pendingProps, K = E !== null ? E.memoizedProps : null, X = W.children;
            return bs(O, W) ? X = null : K !== null && bs(O, K) && (w.flags |= 32), c0(E, w), Br(E, w, X, R), w.child;
          }(e, n, a);
        case 6:
          return function(E, w) {
            return E === null && hv(w), null;
          }(e, n);
        case M:
          return m0(e, n, a);
        case 4:
          return function(E, w, R) {
            Iv(w, w.stateNode.containerInfo);
            var O = w.pendingProps;
            return E === null ? w.child = $c(w, null, O, R) : Br(E, w, O, R), w.child;
          }(e, n, a);
        case S:
          var v = n.type, b = n.pendingProps;
          return i0(e, n, v, n.elementType === v ? b : go(v, b), a);
        case 7:
          return function(E, w, R) {
            return Br(E, w, w.pendingProps, R), w.child;
          }(e, n, a);
        case 8:
          return function(E, w, R) {
            return Br(E, w, w.pendingProps.children, R), w.child;
          }(e, n, a);
        case T:
          return function(E, w, R) {
            w.flags |= 4;
            var O = w.stateNode;
            return O.effectDuration = 0, O.passiveEffectDuration = 0, Br(E, w, w.pendingProps.children, R), w.child;
          }(e, n, a);
        case j:
          return function(E, w, R) {
            var O = w.type._context, W = w.pendingProps, K = w.memoizedProps, X = W.value;
            "value" in W || b0 || (b0 = !0, g("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
            var J = w.type.propTypes;
            if (J && Ur(J, W, "prop", "Context.Provider"), hb(w, O, X), K !== null) {
              var se = K.value;
              if (Cr(se, X)) {
                if (K.children === W.children && !u()) return Yi(E, w, R);
              } else Ck(w, O, R);
            }
            return Br(E, w, W.children, R), w.child;
          }(e, n, a);
        case 9:
          return function(E, w, R) {
            var O = w.type;
            O._context === void 0 ? O !== O.Consumer && (E0 || (E0 = !0, g("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : O = O._context;
            var W = w.pendingProps.children;
            typeof W != "function" && g("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Qc(w, R);
            var K, X = It(O);
            return No(w), op.current = w, pa(!0), K = W(X), pa(!1), Io(), w.flags |= 1, Br(E, w, K, R), w.child;
          }(e, n, a);
        case F:
          var x = n.type, D = go(x, n.pendingProps);
          if (n.type !== n.elementType) {
            var L = x.propTypes;
            L && Ur(L, D, "prop", En(x));
          }
          return l0(e, n, x, D = go(x.type, D), a);
        case z:
          return u0(e, n, n.type, n.pendingProps, a);
        case Y:
          var N = n.type, P = n.pendingProps;
          return function(E, w, R, O, W) {
            var K;
            return mh(E, w), w.tag = 1, c(R) ? (K = !0, q(w)) : K = !1, Qc(w, W), e0(w, R, O), wg(w, R, O, W), Ng(null, w, R, !0, K, W);
          }(e, n, N, n.elementType === N ? P : go(N, P), a);
        case re:
          return y0(e, n, a);
        case $:
          break;
        case ne:
          return s0(e, n, a);
      }
      throw new Error("Unknown unit of work tag (" + n.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function ed(e) {
      e.flags |= 4;
    }
    function T0(e) {
      e.flags |= Pl, e.flags |= Ad;
    }
    function lp(e, n) {
      if (!mr()) switch (e.tailMode) {
        case "hidden":
          for (var a = e.tail, i = null; a !== null; ) a.alternate !== null && (i = a), a = a.sibling;
          i === null ? e.tail = null : i.sibling = null;
          break;
        case "collapsed":
          for (var l = e.tail, s = null; l !== null; ) l.alternate !== null && (s = l), l = l.sibling;
          s === null ? n || e.tail === null ? e.tail = null : e.tail.sibling = null : s.sibling = null;
      }
    }
    function hr(e) {
      var n = e.alternate !== null && e.alternate.child === e.child, a = 0, i = 0;
      if (n) {
        if (2 & e.mode) {
          for (var l = e.selfBaseDuration, s = e.child; s !== null; ) a = fn(a, fn(s.lanes, s.childLanes)), i |= s.subtreeFlags & eo, i |= s.flags & eo, l += s.treeBaseDuration, s = s.sibling;
          e.treeBaseDuration = l;
        } else for (var d = e.child; d !== null; ) a = fn(a, fn(d.lanes, d.childLanes)), i |= d.subtreeFlags & eo, i |= d.flags & eo, d.return = e, d = d.sibling;
        e.subtreeFlags |= i;
      } else {
        if (2 & e.mode) {
          for (var p = e.actualDuration, v = e.selfBaseDuration, b = e.child; b !== null; ) a = fn(a, fn(b.lanes, b.childLanes)), i |= b.subtreeFlags, i |= b.flags, p += b.actualDuration, v += b.treeBaseDuration, b = b.sibling;
          e.actualDuration = p, e.treeBaseDuration = v;
        } else for (var x = e.child; x !== null; ) a = fn(a, fn(x.lanes, x.childLanes)), i |= x.subtreeFlags, i |= x.flags, x.return = e, x = x.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, n;
    }
    function jk(e, n, a) {
      if (po && fo !== null && 1 & n.mode && !(n.flags & _n)) return ib(n), Hc(), n.flags |= 98560, !1;
      var i = Rm(n);
      if (a !== null && a.dehydrated !== null) {
        if (e === null) {
          if (!i) throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (Sk(n), hr(n), 2 & n.mode && a !== null) {
            var l = n.child;
            l !== null && (n.treeBaseDuration -= l.treeBaseDuration);
          }
          return !1;
        }
        if (Hc(), n.flags & _n || (n.memoizedState = null), n.flags |= 4, hr(n), 2 & n.mode && a !== null) {
          var s = n.child;
          s !== null && (n.treeBaseDuration -= s.treeBaseDuration);
        }
        return !1;
      }
      return lb(), !0;
    }
    function C0(e, n, a) {
      var i = n.pendingProps;
      switch (ai(n), n.tag) {
        case 2:
        case 16:
        case z:
        case 0:
        case S:
        case 7:
        case 8:
        case T:
        case 9:
        case F:
          return hr(n), null;
        case 1:
          return c(n.type) && m(n), hr(n), null;
        case 3:
          var l = n.stateNode;
          return Yc(n), k(n), Av(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (e === null || e.child === null) && (Rm(n) ? ed(n) : e !== null && (!e.memoizedState.isDehydrated || n.flags & Ti) && (n.flags |= Au, lb())), Ag(e, n), hr(n), null;
        case 5:
          Ov(n);
          var s = kb(), d = n.type;
          if (e !== null && n.stateNode != null) k0(e, n, d, i, s), e.ref !== n.ref && T0(n);
          else {
            if (!i) {
              if (n.stateNode === null) throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return hr(n), null;
            }
            var p = Dv();
            if (Rm(n)) (function(qe, Ge, vn) {
              var un = qe.stateNode, Tn = !Is, Un = dv(un, qe.type, qe.memoizedProps, 0, vn, qe, Tn);
              return qe.updateQueue = Un, Un !== null;
            })(n, 0, p) && ed(n);
            else {
              var v = xm(d, i, s, p, n);
              w0(v, n, !1, !1), n.stateNode = v, function(qe, Ge, vn) {
                switch (ds(qe, Ge, vn), Ge) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    return !!vn.autoFocus;
                  case "img":
                    return !0;
                  default:
                    return !1;
                }
              }(v, d, i) && ed(n);
            }
            n.ref !== null && T0(n);
          }
          return hr(n), null;
        case 6:
          var b = i;
          if (e && n.stateNode != null) {
            var x = e.memoizedProps;
            S0(e, n, x, b);
          } else {
            if (typeof b != "string" && n.stateNode === null) throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var D = kb(), L = Dv();
            Rm(n) ? kk(n) && ed(n) : n.stateNode = Vi(b, D, L, n);
          }
          return hr(n), null;
        case M:
          Yf(n);
          var N = n.memoizedState;
          if ((e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) && !jk(e, n, N)) return n.flags & ha ? n : null;
          if (n.flags & _n) return n.lanes = a, 2 & n.mode && ug(n), n;
          var P = N !== null;
          if (P !== (e !== null && e.memoizedState !== null) && P && (n.child.flags |= Fu, 1 & n.mode && (e === null && (n.memoizedProps.unstable_avoidThisFallback !== !0 || !0) || Lv(ho.current, 1) ? Wt === Ki && (Wt = gh) : ty())), n.updateQueue !== null && (n.flags |= 4), hr(n), 2 & n.mode && P) {
            var E = n.child;
            E !== null && (n.treeBaseDuration -= E.treeBaseDuration);
          }
          return null;
        case 4:
          return Yc(n), Ag(e, n), e === null && Wi(n.stateNode.containerInfo), hr(n), null;
        case j:
          return Tv(n.type._context, n), hr(n), null;
        case Y:
          return c(n.type) && m(n), hr(n), null;
        case re:
          Yf(n);
          var w = n.memoizedState;
          if (w === null) return hr(n), null;
          var R = !!(n.flags & _n), O = w.rendering;
          if (O === null) if (R) lp(w, !1);
          else {
            if (Wt !== Ki || e !== null && e.flags & _n) for (var W = n.child; W !== null; ) {
              var K = $m(W);
              if (K !== null) {
                R = !0, n.flags |= _n, lp(w, !1);
                var X = K.updateQueue;
                return X !== null && (n.updateQueue = X, n.flags |= 4), n.subtreeFlags = 0, Tk(n, a), yu(n, Mv(ho.current, 2)), n.child;
              }
              W = W.sibling;
            }
            w.tail !== null && st() > q0() && (n.flags |= _n, R = !0, lp(w, !1), n.lanes = qu);
          }
          else {
            if (!R) {
              var J = $m(O);
              if (J !== null) {
                n.flags |= _n, R = !0;
                var se = J.updateQueue;
                if (se !== null && (n.updateQueue = se, n.flags |= 4), lp(w, !0), w.tail === null && w.tailMode === "hidden" && !O.alternate && !mr()) return hr(n), null;
              } else 2 * st() - w.renderingStartTime > q0() && a !== At && (n.flags |= _n, R = !0, lp(w, !1), n.lanes = qu);
            }
            if (w.isBackwards) O.sibling = n.child, n.child = O;
            else {
              var fe = w.last;
              fe !== null ? fe.sibling = O : n.child = O, w.last = O;
            }
          }
          if (w.tail !== null) {
            var le = w.tail;
            w.rendering = le, w.tail = le.sibling, w.renderingStartTime = st(), le.sibling = null;
            var Se = ho.current;
            return yu(n, Se = R ? Mv(Se, 2) : Kc(Se)), le;
          }
          return hr(n), null;
        case $:
          break;
        case ne:
        case ge:
          ny(n);
          var Ye = n.memoizedState !== null;
          return e !== null && e.memoizedState !== null !== Ye && (n.flags |= Fu), Ye && 1 & n.mode ? ur(pi, At) && (hr(n), 6 & n.subtreeFlags && (n.flags |= Fu)) : hr(n), null;
        case 24:
        case 25:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + n.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Bk(e, n, a) {
      switch (ai(n), n.tag) {
        case 1:
          c(n.type) && m(n);
          var i = n.flags;
          return i & ha ? (n.flags = -65537 & i | _n, 2 & n.mode && ug(n), n) : null;
        case 3:
          n.stateNode, Yc(n), k(n), Av();
          var l = n.flags;
          return l & ha && !(l & _n) ? (n.flags = -65537 & l | _n, n) : null;
        case 5:
          return Ov(n), null;
        case M:
          Yf(n);
          var s = n.memoizedState;
          if (s !== null && s.dehydrated !== null) {
            if (n.alternate === null) throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Hc();
          }
          var d = n.flags;
          return d & ha ? (n.flags = -65537 & d | _n, 2 & n.mode && ug(n), n) : null;
        case re:
          return Yf(n), null;
        case 4:
          return Yc(n), null;
        case j:
          return Tv(n.type._context, n), null;
        case ne:
        case ge:
          return ny(n), null;
        default:
          return null;
      }
    }
    function _0(e, n, a) {
      switch (ai(n), n.tag) {
        case 1:
          var i = n.type.childContextTypes;
          i != null && m(n);
          break;
        case 3:
          n.stateNode, Yc(n), k(n), Av();
          break;
        case 5:
          Ov(n);
          break;
        case 4:
          Yc(n);
          break;
        case M:
        case re:
          Yf(n);
          break;
        case j:
          Tv(n.type._context, n);
          break;
        case ne:
        case ge:
          ny(n);
      }
    }
    w0 = function(e, n, a, i) {
      for (var l, s, d = n.child; d !== null; ) {
        if (d.tag === 5 || d.tag === 6) l = e, s = d.stateNode, l.appendChild(s);
        else if (d.tag !== 4) {
          if (d.child !== null) {
            d.child.return = d, d = d.child;
            continue;
          }
        }
        if (d === n) return;
        for (; d.sibling === null; ) {
          if (d.return === null || d.return === n) return;
          d = d.return;
        }
        d.sibling.return = d.return, d = d.sibling;
      }
    }, Ag = function(e, n) {
    }, k0 = function(e, n, a, i, l) {
      var s = e.memoizedProps;
      if (s !== i) {
        var d = function(p, v, b, x, D, L) {
          var N = L;
          if (typeof x.children != typeof b.children && (typeof x.children == "string" || typeof x.children == "number")) {
            var P = "" + x.children, E = Ko(N.ancestorInfo, v);
            ra(null, P, E);
          }
          return Ar(p, v, b, x);
        }(n.stateNode, a, s, i, 0, Dv());
        n.updateQueue = d, d && ed(n);
      }
    }, S0 = function(e, n, a, i) {
      a !== i && ed(n);
    };
    var P0 = null;
    P0 = /* @__PURE__ */ new Set();
    var hh = !1, Ir = !1, Wk = typeof WeakSet == "function" ? WeakSet : Set, $e = null, nd = null, td = null, Vk = function(e, n) {
      if (n.props = e.memoizedProps, n.state = e.memoizedState, 2 & e.mode) try {
        si(), n.componentWillUnmount();
      } finally {
        ui(e);
      }
      else n.componentWillUnmount();
    };
    function R0(e, n) {
      try {
        ku(4, e);
      } catch (a) {
        Gn(e, n, a);
      }
    }
    function Fg(e, n, a) {
      try {
        Vk(e, a);
      } catch (i) {
        Gn(e, n, i);
      }
    }
    function N0(e, n) {
      try {
        D0(e);
      } catch (a) {
        Gn(e, n, a);
      }
    }
    function rd(e, n) {
      var a = e.ref;
      if (a !== null) if (typeof a == "function") {
        var i;
        try {
          if (2 & e.mode) try {
            si(), i = a(null);
          } finally {
            ui(e);
          }
          else i = a(null);
        } catch (l) {
          Gn(e, n, l);
        }
        typeof i == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", dn(e));
      } else a.current = null;
    }
    function vh(e, n, a) {
      try {
        a();
      } catch (i) {
        Gn(e, n, i);
      }
    }
    var I0 = !1;
    function Hk(e, n) {
      Go(e.containerInfo), $e = n, function() {
        for (; $e !== null; ) {
          var i = $e, l = i.child;
          i.subtreeFlags & Rl && l !== null ? (l.return = i, $e = l) : $k();
        }
      }();
      var a = I0;
      return I0 = !1, a;
    }
    function $k() {
      for (; $e !== null; ) {
        var e = $e;
        ut(e);
        try {
          qk(e);
        } catch (a) {
          Gn(e, e.return, a);
        }
        $t();
        var n = e.sibling;
        if (n !== null) return n.return = e.return, void ($e = n);
        $e = e.return;
      }
    }
    function qk(e) {
      var n, a = e.alternate;
      if (e.flags & Au) {
        switch (ut(e), e.tag) {
          case 0:
          case S:
          case z:
            break;
          case 1:
            if (a !== null) {
              var i = a.memoizedProps, l = a.memoizedState, s = e.stateNode;
              e.type !== e.elementType || As || (s.props !== e.memoizedProps && g("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", dn(e) || "instance"), s.state !== e.memoizedState && g("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", dn(e) || "instance"));
              var d = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : go(e.type, i), l), p = P0;
              d !== void 0 || p.has(e.type) || (p.add(e.type), g("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", dn(e))), s.__reactInternalSnapshotBeforeUpdate = d;
            }
            break;
          case 3:
            var v = e.stateNode;
            (n = v.containerInfo).nodeType === 1 ? n.textContent = "" : n.nodeType === 9 && n.documentElement && n.removeChild(n.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case Y:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        $t();
      }
    }
    function yo(e, n, a) {
      var i, l = n.updateQueue, s = l !== null ? l.lastEffect : null;
      if (s !== null) {
        var d = s.next, p = d;
        do {
          if ((p.tag & e) === e) {
            var v = p.destroy;
            p.destroy = void 0, v !== void 0 && (8 & e ? (i = n, Ae !== null && typeof Ae.markComponentPassiveEffectUnmountStarted == "function" && Ae.markComponentPassiveEffectUnmountStarted(i)) : 4 & e && bc(n), 2 & e && yp(!0), vh(n, a, v), 2 & e && yp(!1), 8 & e ? Ae !== null && typeof Ae.markComponentPassiveEffectUnmountStopped == "function" && Ae.markComponentPassiveEffectUnmountStopped() : 4 & e && wc());
          }
          p = p.next;
        } while (p !== d);
      }
    }
    function ku(e, n) {
      var a, i = n.updateQueue, l = i !== null ? i.lastEffect : null;
      if (l !== null) {
        var s = l.next, d = s;
        do {
          if ((d.tag & e) === e) {
            8 & e ? (a = n, Ae !== null && typeof Ae.markComponentPassiveEffectMountStarted == "function" && Ae.markComponentPassiveEffectMountStarted(a)) : 4 & e && Yd(n);
            var p = d.create;
            2 & e && yp(!0), d.destroy = p(), 2 & e && yp(!1), 8 & e ? Ae !== null && typeof Ae.markComponentPassiveEffectMountStopped == "function" && Ae.markComponentPassiveEffectMountStopped() : 4 & e && Ae !== null && typeof Ae.markComponentLayoutEffectMountStopped == "function" && Ae.markComponentLayoutEffectMountStopped();
            var v = d.destroy;
            if (v !== void 0 && typeof v != "function") {
              var b = void 0;
              g("%s must not return anything besides a function, which is used for clean-up.%s", b = 4 & d.tag ? "useLayoutEffect" : 2 & d.tag ? "useInsertionEffect" : "useEffect", v === null ? " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof v.then == "function" ? `

It looks like you wrote ` + b + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + b + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : " You returned: " + v);
            }
          }
          d = d.next;
        } while (d !== s);
      }
    }
    function Qk(e, n) {
      if (4 & n.flags && n.tag === T) {
        var a = n.stateNode.passiveEffectDuration, i = n.memoizedProps, l = i.id, s = i.onPostCommit, d = Qb(), p = n.alternate === null ? "mount" : "update";
        qb() && (p = "nested-update"), typeof s == "function" && s(l, p, a, d);
        var v = n.return;
        e: for (; v !== null; ) {
          switch (v.tag) {
            case 3:
              v.stateNode.passiveEffectDuration += a;
              break e;
            case T:
              v.stateNode.passiveEffectDuration += a;
              break e;
          }
          v = v.return;
        }
      }
    }
    function Yk(e, n, a, i) {
      if (a.flags & _i) switch (a.tag) {
        case 0:
        case S:
        case z:
          if (!Ir) if (2 & a.mode) try {
            si(), ku(5, a);
          } finally {
            ui(a);
          }
          else ku(5, a);
          break;
        case 1:
          var l = a.stateNode;
          if (4 & a.flags && !Ir) if (n === null) if (a.type !== a.elementType || As || (l.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", dn(a) || "instance"), l.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", dn(a) || "instance")), 2 & a.mode) try {
            si(), l.componentDidMount();
          } finally {
            ui(a);
          }
          else l.componentDidMount();
          else {
            var s = a.elementType === a.type ? n.memoizedProps : go(a.type, n.memoizedProps), d = n.memoizedState;
            if (a.type !== a.elementType || As || (l.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", dn(a) || "instance"), l.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", dn(a) || "instance")), 2 & a.mode) try {
              si(), l.componentDidUpdate(s, d, l.__reactInternalSnapshotBeforeUpdate);
            } finally {
              ui(a);
            }
            else l.componentDidUpdate(s, d, l.__reactInternalSnapshotBeforeUpdate);
          }
          var p = a.updateQueue;
          p !== null && (a.type !== a.elementType || As || (l.props !== a.memoizedProps && g("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", dn(a) || "instance"), l.state !== a.memoizedState && g("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", dn(a) || "instance")), wb(0, p, l));
          break;
        case 3:
          var v = a.updateQueue;
          if (v !== null) {
            var b = null;
            if (a.child !== null) switch (a.child.tag) {
              case 5:
              case 1:
                b = a.child.stateNode;
            }
            wb(0, v, b);
          }
          break;
        case 5:
          var x = a.stateNode;
          n === null && 4 & a.flags && function(W, K, X) {
            switch (K) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                return void (X.autoFocus && W.focus());
              case "img":
                X.src && (W.src = X.src);
            }
          }(x, a.type, a.memoizedProps);
          break;
        case 6:
        case 4:
          break;
        case T:
          var D = a.memoizedProps, L = D.onCommit, N = D.onRender, P = a.stateNode.effectDuration, E = Qb(), w = n === null ? "mount" : "update";
          qb() && (w = "nested-update"), typeof N == "function" && N(a.memoizedProps.id, w, a.actualDuration, a.treeBaseDuration, a.actualStartTime, E), typeof L == "function" && L(a.memoizedProps.id, w, P, E), O = a, Kg.push(O), Fs || (Fs = !0, iy(In, function() {
            return Ji(), null;
          }));
          var R = a.return;
          e: for (; R !== null; ) {
            switch (R.tag) {
              case 3:
                R.stateNode.effectDuration += P;
                break e;
              case T:
                R.stateNode.effectDuration += P;
                break e;
            }
            R = R.return;
          }
          break;
        case M:
          (function(W, K) {
            var X = K.memoizedState;
            if (X === null) {
              var J = K.alternate;
              if (J !== null) {
                var se = J.memoizedState;
                if (se !== null) {
                  var fe = se.dehydrated;
                  fe !== null && function(le) {
                    Wl(le);
                  }(fe);
                }
              }
            }
          })(0, a);
          break;
        case re:
        case Y:
        case $:
        case ne:
        case ge:
        case 25:
          break;
        default:
          throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
      }
      var O;
      Ir || a.flags & Pl && D0(a);
    }
    function Kk(e) {
      switch (e.tag) {
        case 0:
        case S:
        case z:
          if (2 & e.mode) try {
            si(), R0(e, e.return);
          } finally {
            ui(e);
          }
          else R0(e, e.return);
          break;
        case 1:
          var n = e.stateNode;
          typeof n.componentDidMount == "function" && function(a, i, l) {
            try {
              l.componentDidMount();
            } catch (s) {
              Gn(a, i, s);
            }
          }(e, e.return, n), N0(e, e.return);
          break;
        case 5:
          N0(e, e.return);
      }
    }
    function D0(e) {
      var n = e.ref;
      if (n !== null) {
        var a, i = e.stateNode;
        if (e.tag, a = i, typeof n == "function") {
          var l;
          if (2 & e.mode) try {
            si(), l = n(a);
          } finally {
            ui(e);
          }
          else l = n(a);
          typeof l == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", dn(e));
        } else n.hasOwnProperty("current") || g("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", dn(e)), n.current = a;
      }
    }
    function O0(e) {
      var n, a = e.alternate;
      if (a !== null && (e.alternate = null, O0(a)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5) {
        var i = e.stateNode;
        i !== null && (delete (n = i)[du], delete n[jc], delete n[Rr], delete n[Uf], delete n[Zo]);
      }
      e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
    function L0(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 4;
    }
    function M0(e) {
      var n = e;
      e: for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || L0(n.return)) return null;
          n = n.return;
        }
        for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== ae; ) {
          if (2 & n.flags || n.child === null || n.tag === 4) continue e;
          n.child.return = n, n = n.child;
        }
        if (!(2 & n.flags)) return n.stateNode;
      }
    }
    function Xk(e) {
      var n = function(l) {
        for (var s = l.return; s !== null; ) {
          if (L0(s)) return s;
          s = s.return;
        }
        throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
      }(e);
      switch (n.tag) {
        case 5:
          var a = n.stateNode;
          32 & n.flags && (ks(a), n.flags &= -33), Bg(e, M0(e), a);
          break;
        case 3:
        case 4:
          var i = n.stateNode.containerInfo;
          jg(e, M0(e), i);
          break;
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function jg(e, n, a) {
      var i = e.tag;
      if (i === 5 || i === 6) {
        var l = e.stateNode;
        n ? function(p, v, b) {
          p.nodeType === 8 ? p.parentNode.insertBefore(v, b) : p.insertBefore(v, b);
        }(a, l, n) : function(p, v) {
          var b;
          p.nodeType === 8 ? (b = p.parentNode).insertBefore(v, p) : (b = p).appendChild(v), p._reactRootContainer == null && b.onclick === null && lu(b);
        }(a, l);
      } else if (i !== 4) {
        var s = e.child;
        if (s !== null) {
          jg(s, n, a);
          for (var d = s.sibling; d !== null; ) jg(d, n, a), d = d.sibling;
        }
      }
    }
    function Bg(e, n, a) {
      var i = e.tag;
      if (i === 5 || i === 6) {
        var l = e.stateNode;
        n ? function(p, v, b) {
          p.insertBefore(v, b);
        }(a, l, n) : function(p, v) {
          p.appendChild(v);
        }(a, l);
      } else if (i !== 4) {
        var s = e.child;
        if (s !== null) {
          Bg(s, n, a);
          for (var d = s.sibling; d !== null; ) Bg(d, n, a), d = d.sibling;
        }
      }
    }
    var Wr = null, di = !1;
    function Gk(e, n, a) {
      var i, l, s = n;
      e: for (; s !== null; ) {
        switch (s.tag) {
          case 5:
            Wr = s.stateNode, di = !1;
            break e;
          case 3:
          case 4:
            Wr = s.stateNode.containerInfo, di = !0;
            break e;
        }
        s = s.return;
      }
      if (Wr === null) throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
      z0(e, n, a), Wr = null, di = !1, (l = (i = a).alternate) !== null && (l.return = null), i.return = null;
    }
    function Su(e, n, a) {
      for (var i = a.child; i !== null; ) z0(e, n, i), i = i.sibling;
    }
    function z0(e, n, a) {
      switch (function(O) {
        if (ht && typeof ht.onCommitFiberUnmount == "function") try {
          ht.onCommitFiberUnmount(Ro, O);
        } catch (W) {
          or || (or = !0, g("React instrumentation encountered an error: %s", W));
        }
      }(a), a.tag) {
        case 5:
          Ir || rd(a, n);
        case 6:
          var i = Wr, l = di;
          return Wr = null, Su(e, n, a), di = l, void ((Wr = i) !== null && (di ? (w = Wr, R = a.stateNode, w.nodeType === 8 ? w.parentNode.removeChild(R) : w.removeChild(R)) : function(O, W) {
            O.removeChild(W);
          }(Wr, a.stateNode)));
        case ae:
          return void (Wr !== null && (di ? function(O, W) {
            O.nodeType === 8 ? zf(O.parentNode, W) : O.nodeType === 1 && zf(O, W), Wl(O);
          }(Wr, a.stateNode) : zf(Wr, a.stateNode)));
        case 4:
          var s = Wr, d = di;
          return Wr = a.stateNode.containerInfo, di = !0, Su(e, n, a), Wr = s, void (di = d);
        case 0:
        case S:
        case F:
        case z:
          if (!Ir) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var b = v.next, x = b;
                do {
                  var D = x, L = D.destroy, N = D.tag;
                  L !== void 0 && (2 & N ? vh(a, n, L) : 4 & N && (bc(a), 2 & a.mode ? (si(), vh(a, n, L), ui(a)) : vh(a, n, L), wc())), x = x.next;
                } while (x !== b);
              }
            }
          }
          return void Su(e, n, a);
        case 1:
          if (!Ir) {
            rd(a, n);
            var P = a.stateNode;
            typeof P.componentWillUnmount == "function" && Fg(a, n, P);
          }
          return void Su(e, n, a);
        case $:
          return void Su(e, n, a);
        case ne:
          if (1 & a.mode) {
            var E = Ir;
            Ir = E || a.memoizedState !== null, Su(e, n, a), Ir = E;
          } else Su(e, n, a);
          break;
        default:
          return void Su(e, n, a);
      }
      var w, R;
    }
    function A0(e) {
      var n = e.updateQueue;
      if (n !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new Wk()), n.forEach(function(i) {
          var l = CS.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), Zr) {
              if (nd === null || td === null) throw Error("Expected finished root and lanes to be set. This is a bug in React.");
              gp(td, nd);
            }
            i.then(l, l);
          }
        });
      }
    }
    function bo(e, n, a) {
      var i = n.deletions;
      if (i !== null) for (var l = 0; l < i.length; l++) {
        var s = i[l];
        try {
          Gk(e, n, s);
        } catch (v) {
          Gn(s, n, v);
        }
      }
      var d = kt;
      if (n.subtreeFlags & Ud) for (var p = n.child; p !== null; ) ut(p), U0(p, e), p = p.sibling;
      ut(d);
    }
    function U0(e, n, a) {
      var i = e.alternate, l = e.flags;
      switch (e.tag) {
        case 0:
        case S:
        case F:
        case z:
          if (bo(n, e), fi(e), 4 & l) {
            try {
              yo(3, e, e.return), ku(3, e);
            } catch (J) {
              Gn(e, e.return, J);
            }
            if (2 & e.mode) {
              try {
                si(), yo(5, e, e.return);
              } catch (J) {
                Gn(e, e.return, J);
              }
              ui(e);
            } else try {
              yo(5, e, e.return);
            } catch (J) {
              Gn(e, e.return, J);
            }
          }
          return;
        case 1:
          return bo(n, e), fi(e), void (l & Pl && i !== null && rd(i, i.return));
        case 5:
          if (bo(n, e), fi(e), l & Pl && i !== null && rd(i, i.return), 32 & e.flags) {
            var s = e.stateNode;
            try {
              ks(s);
            } catch (J) {
              Gn(e, e.return, J);
            }
          }
          if (4 & l) {
            var d = e.stateNode;
            if (d != null) {
              var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, b = e.type, x = e.updateQueue;
              if (e.updateQueue = null, x !== null) try {
                (function(J, se, fe, le, Se) {
                  Df(J, se, fe, le, Se), Bc(J, Se);
                })(d, x, b, v, p);
              } catch (J) {
                Gn(e, e.return, J);
              }
            }
          }
          return;
        case 6:
          if (bo(n, e), fi(e), 4 & l) {
            if (e.stateNode === null) throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var D = e.stateNode, L = e.memoizedProps;
            i !== null && i.memoizedProps;
            try {
              (function(J, se, fe) {
                J.nodeValue = fe;
              })(D, 0, L);
            } catch (J) {
              Gn(e, e.return, J);
            }
          }
          return;
        case 3:
          if (bo(n, e), fi(e), 4 & l && i !== null && i.memoizedState.isDehydrated) try {
            Wl(n.containerInfo);
          } catch (J) {
            Gn(e, e.return, J);
          }
          return;
        case 4:
          return bo(n, e), void fi(e);
        case M:
          bo(n, e), fi(e);
          var N = e.child;
          if (N.flags & Fu) {
            var P = N.stateNode, E = N.memoizedState !== null;
            P.isHidden = E, E && (N.alternate !== null && N.alternate.memoizedState !== null || (Qg = st()));
          }
          if (4 & l) {
            try {
              (function(J) {
                J.memoizedState;
              })(e);
            } catch (J) {
              Gn(e, e.return, J);
            }
            A0(e);
          }
          return;
        case ne:
          var w = i !== null && i.memoizedState !== null;
          if (1 & e.mode) {
            var R = Ir;
            Ir = R || w, bo(n, e), Ir = R;
          } else bo(n, e);
          if (fi(e), l & Fu) {
            var O = e.stateNode, W = e.memoizedState !== null, K = e;
            if (O.isHidden = W, W && !w && 1 & K.mode) {
              $e = K;
              for (var X = K.child; X !== null; ) $e = X, Zk(X), X = X.sibling;
            }
            (function(J, se) {
              for (var fe = null, le = J; ; ) {
                if (le.tag === 5) {
                  if (fe === null) {
                    fe = le;
                    try {
                      var Se = le.stateNode;
                      se ? cv(Se) : Cm(le.stateNode, le.memoizedProps);
                    } catch (qe) {
                      Gn(J, J.return, qe);
                    }
                  }
                } else if (le.tag === 6) {
                  if (fe === null) try {
                    var Ye = le.stateNode;
                    se ? Ye.nodeValue = "" : _m(Ye, le.memoizedProps);
                  } catch (qe) {
                    Gn(J, J.return, qe);
                  }
                } else if ((le.tag !== ne && le.tag !== ge || le.memoizedState === null || le === J) && le.child !== null) {
                  le.child.return = le, le = le.child;
                  continue;
                }
                if (le === J) return;
                for (; le.sibling === null; ) {
                  if (le.return === null || le.return === J) return;
                  fe === le && (fe = null), le = le.return;
                }
                fe === le && (fe = null), le.sibling.return = le.return, le = le.sibling;
              }
            })(K, W);
          }
          return;
        case re:
          return bo(n, e), fi(e), void (4 & l && A0(e));
        case $:
          return;
        default:
          return bo(n, e), void fi(e);
      }
    }
    function fi(e) {
      var n = e.flags;
      if (2 & n) {
        try {
          Xk(e);
        } catch (a) {
          Gn(e, e.return, a);
        }
        e.flags &= -3;
      }
      n & Md && (e.flags &= -4097);
    }
    function Jk(e, n, a) {
      nd = a, td = n, $e = e, F0(e, n, a), nd = null, td = null;
    }
    function F0(e, n, a) {
      for (var i = !!(1 & e.mode); $e !== null; ) {
        var l = $e, s = l.child;
        if (l.tag === ne && i) {
          var d = l.memoizedState !== null || hh;
          if (d) {
            Wg(e, n, a);
            continue;
          }
          var p = l.alternate, v = p !== null && p.memoizedState !== null, b = hh, x = Ir;
          hh = d, (Ir = v || Ir) && !x && ($e = l, eS(l));
          for (var D = s; D !== null; ) $e = D, F0(D, n, a), D = D.sibling;
          $e = l, hh = b, Ir = x, Wg(e, n, a);
        } else l.subtreeFlags & _i && s !== null ? (s.return = l, $e = s) : Wg(e, n, a);
      }
    }
    function Wg(e, n, a) {
      for (; $e !== null; ) {
        var i = $e;
        if (i.flags & _i) {
          var l = i.alternate;
          ut(i);
          try {
            Yk(0, l, i);
          } catch (d) {
            Gn(i, i.return, d);
          }
          $t();
        }
        if (i === e) return void ($e = null);
        var s = i.sibling;
        if (s !== null) return s.return = i.return, void ($e = s);
        $e = i.return;
      }
    }
    function Zk(e) {
      for (; $e !== null; ) {
        var n = $e, a = n.child;
        switch (n.tag) {
          case 0:
          case S:
          case F:
          case z:
            if (2 & n.mode) try {
              si(), yo(4, n, n.return);
            } finally {
              ui(n);
            }
            else yo(4, n, n.return);
            break;
          case 1:
            rd(n, n.return);
            var i = n.stateNode;
            typeof i.componentWillUnmount == "function" && Fg(n, n.return, i);
            break;
          case 5:
            rd(n, n.return);
            break;
          case ne:
            if (n.memoizedState !== null) {
              j0(e);
              continue;
            }
        }
        a !== null ? (a.return = n, $e = a) : j0(e);
      }
    }
    function j0(e) {
      for (; $e !== null; ) {
        var n = $e;
        if (n === e) return void ($e = null);
        var a = n.sibling;
        if (a !== null) return a.return = n.return, void ($e = a);
        $e = n.return;
      }
    }
    function eS(e) {
      for (; $e !== null; ) {
        var n = $e, a = n.child;
        if (n.tag === ne && n.memoizedState !== null) {
          B0(e);
          continue;
        }
        a !== null ? (a.return = n, $e = a) : B0(e);
      }
    }
    function B0(e) {
      for (; $e !== null; ) {
        var n = $e;
        ut(n);
        try {
          Kk(n);
        } catch (i) {
          Gn(n, n.return, i);
        }
        if ($t(), n === e) return void ($e = null);
        var a = n.sibling;
        if (a !== null) return a.return = n.return, void ($e = a);
        $e = n.return;
      }
    }
    function nS(e, n, a, i) {
      $e = n, function(l, s, d, p) {
        for (; $e !== null; ) {
          var v = $e, b = v.child;
          v.subtreeFlags & Nl && b !== null ? (b.return = v, $e = b) : tS(l, s, d, p);
        }
      }(n, e, a, i);
    }
    function tS(e, n, a, i) {
      for (; $e !== null; ) {
        var l = $e;
        if (l.flags & Uu) {
          ut(l);
          try {
            rS(n, l, a, i);
          } catch (d) {
            Gn(l, l.return, d);
          }
          $t();
        }
        if (l === e) return void ($e = null);
        var s = l.sibling;
        if (s !== null) return s.return = l.return, void ($e = s);
        $e = l.return;
      }
    }
    function rS(e, n, a, i) {
      switch (n.tag) {
        case 0:
        case S:
        case z:
          if (2 & n.mode) {
            lg();
            try {
              ku(9, n);
            } finally {
              ig(n);
            }
          } else ku(9, n);
      }
    }
    function aS(e) {
      $e = e, function() {
        for (; $e !== null; ) {
          var n = $e, a = n.child;
          if ($e.flags & xi) {
            var i = n.deletions;
            if (i !== null) {
              for (var l = 0; l < i.length; l++) {
                var s = i[l];
                $e = s, lS(s, n);
              }
              var d = n.alternate;
              if (d !== null) {
                var p = d.child;
                if (p !== null) {
                  d.child = null;
                  do {
                    var v = p.sibling;
                    p.sibling = null, p = v;
                  } while (p !== null);
                }
              }
              $e = n;
            }
          }
          n.subtreeFlags & Nl && a !== null ? (a.return = n, $e = a) : oS();
        }
      }();
    }
    function oS() {
      for (; $e !== null; ) {
        var e = $e;
        e.flags & Uu && (ut(e), iS(e), $t());
        var n = e.sibling;
        if (n !== null) return n.return = e.return, void ($e = n);
        $e = e.return;
      }
    }
    function iS(e) {
      switch (e.tag) {
        case 0:
        case S:
        case z:
          2 & e.mode ? (lg(), yo(9, e, e.return), ig(e)) : yo(9, e, e.return);
      }
    }
    function lS(e, n) {
      for (; $e !== null; ) {
        var a = $e;
        ut(a), sS(a, n), $t();
        var i = a.child;
        i !== null ? (i.return = a, $e = i) : uS(e);
      }
    }
    function uS(e) {
      for (; $e !== null; ) {
        var n = $e, a = n.sibling, i = n.return;
        if (O0(n), n === e) return void ($e = null);
        if (a !== null) return a.return = i, void ($e = a);
        $e = i;
      }
    }
    function sS(e, n) {
      switch (e.tag) {
        case 0:
        case S:
        case z:
          2 & e.mode ? (lg(), yo(8, e, n), ig(e)) : yo(8, e, n);
      }
    }
    function cS(e) {
      switch (e.tag) {
        case 0:
        case S:
        case z:
          try {
            ku(5, e);
          } catch (a) {
            Gn(e, e.return, a);
          }
          break;
        case 1:
          var n = e.stateNode;
          try {
            n.componentDidMount();
          } catch (a) {
            Gn(e, e.return, a);
          }
      }
    }
    function dS(e) {
      switch (e.tag) {
        case 0:
        case S:
        case z:
          try {
            ku(9, e);
          } catch (n) {
            Gn(e, e.return, n);
          }
      }
    }
    function fS(e) {
      switch (e.tag) {
        case 0:
        case S:
        case z:
          try {
            yo(5, e, e.return);
          } catch (a) {
            Gn(e, e.return, a);
          }
          break;
        case 1:
          var n = e.stateNode;
          typeof n.componentWillUnmount == "function" && Fg(e, e.return, n);
      }
    }
    function pS(e) {
      switch (e.tag) {
        case 0:
        case S:
        case z:
          try {
            yo(9, e, e.return);
          } catch (n) {
            Gn(e, e.return, n);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var up = Symbol.for;
      up("selector.component"), up("selector.has_pseudo_class"), up("selector.role"), up("selector.test_id"), up("selector.text");
    }
    var mS = [], hS = y.ReactCurrentActQueue;
    function W0() {
      var e = typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0;
      return e || hS.current === null || g("The current testing environment is not configured to support act(...)"), e;
    }
    var vS = Math.ceil, Vg = y.ReactCurrentDispatcher, Hg = y.ReactCurrentOwner, oa = y.ReactCurrentBatchConfig, wo = y.ReactCurrentActQueue, nr = 0, vr = 2, $a = 4, Ki = 0, sp = 1, Us = 2, gh = 3, cp = 4, V0 = 5, $g = 6, Rn = nr, Vr = null, mt = null, Bt = 0, pi = 0, qg = Ca(0), Wt = Ki, dp = null, yh = 0, fp = 0, bh = 0, pp = null, ia = null, Qg = 0, H0 = 500, $0 = 1 / 0, gS = 500, Xi = null;
    function wh() {
      $0 = st() + gS;
    }
    function q0() {
      return $0;
    }
    var kh = !1, Yg = null, ad = null, Fs = !1, Eu = null, mp = 0, Kg = [], Xg = null, yS = 50, hp = 0, Gg = null, Jg = !1, Sh = !1, bS = 50, od = 0, Eh = null, xh = Bn, Th = 0, Q0 = !1;
    function Ch() {
      return Vr;
    }
    function Hr() {
      return (Rn & (vr | $a)) !== nr ? st() : xh !== Bn ? xh : xh = st();
    }
    function xu(e) {
      if (!(1 & e.mode)) return Ke;
      if ((Rn & vr) !== nr && Bt !== 0) return lr(Bt);
      if (xk.transition !== null) {
        if (oa.transition !== null) {
          var n = oa.transition;
          n._updatedFibers || (n._updatedFibers = /* @__PURE__ */ new Set()), n._updatedFibers.add(e);
        }
        return Th === 0 && (Th = Sr()), Th;
      }
      var a, i = sr();
      return i !== 0 ? i : (a = window.event) === void 0 ? La : tt(a.type);
    }
    function wS(e) {
      var n;
      return 1 & e.mode ? (n = wr, (wr <<= 1) & Ll || (wr = Ni), n) : Ke;
    }
    function Vt(e, n, a, i) {
      (function() {
        if (hp > yS) throw hp = 0, Gg = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
        od > bS && (od = 0, Eh = null, g("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
      })(), Q0 && g("useInsertionEffect must not schedule updates."), Jg && (Sh = !0), Oi(e, a, i), Rn & vr && e === Vr ? function(l) {
        if (dl && !zb) switch (l.tag) {
          case 0:
          case S:
          case z:
            var s = mt && dn(mt) || "Unknown", d = s;
            ay.has(d) || (ay.add(d), g("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", dn(l) || "Unknown", s, s));
            break;
          case 1:
            uw || (g("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), uw = !0);
        }
      }(n) : (Zr && Qu(e, n, a), function(l) {
        if (1 & l.mode) {
          if (!W0()) return;
        } else if (s = typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0, typeof jest > "u" || s === !1 || Rn !== nr || l.tag !== 0 && l.tag !== S && l.tag !== z) return;
        var s;
        if (wo.current === null) {
          var d = kt;
          try {
            ut(l), g(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, dn(l));
          } finally {
            d ? ut(l) : $t();
          }
        }
      }(n), e === Vr && ((Rn & vr) === nr && (fp = fn(fp, a)), Wt === cp && Tu(e, Bt)), la(e, i), a !== Ke || Rn !== nr || 1 & n.mode || wo.isBatchingLegacy || (wh(), te()));
    }
    function la(e, n) {
      var a = e.callbackNode;
      (function(b, x) {
        for (var D = b.pendingLanes, L = b.suspendedLanes, N = b.pingedLanes, P = b.expirationTimes, E = D; E > 0; ) {
          var w = Mo(E), R = 1 << w, O = P[w];
          O === Bn ? R & L && !(R & N) || (P[w] = ao(R, x)) : O <= x && (b.expiredLanes |= R), E &= ~R;
        }
      })(e, n);
      var i = Mr(e, e === Vr ? Bt : 0);
      if (i === 0) return a !== null && sw(a), e.callbackNode = null, void (e.callbackPriority = 0);
      var l = Ln(i), s = e.callbackPriority;
      if (s !== l || wo.current !== null && a !== oy) {
        var d, p;
        if (a != null && sw(a), l === Ke) e.tag === 0 ? (wo.isBatchingLegacy !== null && (wo.didScheduleLegacyUpdate = !0), p = X0.bind(null, e), ie = !0, ke(p)) : ke(X0.bind(null, e)), wo.current !== null ? wo.current.push(H) : Tm(function() {
          (Rn & (vr | $a)) === nr && H();
        }), d = null;
        else {
          var v;
          switch (_c(i)) {
            case Ut:
              v = Bu;
              break;
            case ba:
              v = yc;
              break;
            case La:
              v = In;
              break;
            case Al:
              v = Il;
              break;
            default:
              v = In;
          }
          d = iy(v, Y0.bind(null, e));
        }
        e.callbackPriority = l, e.callbackNode = d;
      } else a == null && s !== Ke && g("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Y0(e, n) {
      if (ag = !1, sh = !1, xh = Bn, Th = 0, (Rn & (vr | $a)) !== nr) throw new Error("Should not already be working.");
      var a = e.callbackNode;
      if (Ji() && e.callbackNode !== a) return null;
      var i = Mr(e, e === Vr ? Bt : 0);
      if (i === 0) return null;
      var l = !zl(0, i) && !function(L, N) {
        return !!(N & L.expiredLanes);
      }(e, i) && !n, s = l ? function(L, N) {
        var P = Rn;
        Rn |= vr;
        var E = Z0();
        if (Vr !== L || Bt !== N) {
          if (Zr) {
            var w = L.memoizedUpdaters;
            w.size > 0 && (gp(L, Bt), w.clear()), Jd(L, N);
          }
          Xi = null, wh(), js(L, N);
        }
        for (Qp(N); ; ) try {
          SS();
          break;
        } catch (R) {
          J0(L, R);
        }
        return Mm(), ew(E), Rn = P, mt !== null ? (Ae !== null && typeof Ae.markRenderYielded == "function" && Ae.markRenderYielded(), Ki) : (Yp(), Vr = null, Bt = 0, Wt);
      }(e, i) : Ph(e, i);
      if (s !== Ki) {
        if (s === Us) {
          var d = oo(e);
          d !== 0 && (i = d, s = Zg(e, d));
        }
        if (s === sp) {
          var p = dp;
          throw js(e, 0), Tu(e, i), la(e, st()), p;
        }
        if (s === $g) Tu(e, i);
        else {
          var v = !zl(0, i), b = e.current.alternate;
          if (v && !function(L) {
            for (var N = L; ; ) {
              if (N.flags & Lr) {
                var P = N.updateQueue;
                if (P !== null) {
                  var E = P.stores;
                  if (E !== null) for (var w = 0; w < E.length; w++) {
                    var R = E[w], O = R.getSnapshot, W = R.value;
                    try {
                      if (!Cr(O(), W)) return !1;
                    } catch {
                      return !1;
                    }
                  }
                }
              }
              var K = N.child;
              if (N.subtreeFlags & Lr && K !== null) K.return = N, N = K;
              else {
                if (N === L) return !0;
                for (; N.sibling === null; ) {
                  if (N.return === null || N.return === L) return !0;
                  N = N.return;
                }
                N.sibling.return = N.return, N = N.sibling;
              }
            }
            return !0;
          }(b)) {
            if ((s = Ph(e, i)) === Us) {
              var x = oo(e);
              x !== 0 && (i = x, s = Zg(e, x));
            }
            if (s === sp) {
              var D = dp;
              throw js(e, 0), Tu(e, i), la(e, st()), D;
            }
          }
          e.finishedWork = b, e.finishedLanes = i, function(L, N, P) {
            switch (N) {
              case Ki:
              case sp:
                throw new Error("Root did not complete. This is a bug in React.");
              case Us:
                Bs(L, ia, Xi);
                break;
              case gh:
                if (Tu(L, P), Tc(P) && !cw()) {
                  var E = Qg + H0 - st();
                  if (E > 10) {
                    if (Mr(L, 0) !== 0) break;
                    var w = L.suspendedLanes;
                    if (!zo(w, P)) {
                      Hr(), Kp(L, w);
                      break;
                    }
                    L.timeoutHandle = ws(Bs.bind(null, L, ia, Xi), E);
                    break;
                  }
                }
                Bs(L, ia, Xi);
                break;
              case cp:
                if (Tu(L, P), function(J) {
                  return (J & va) === J;
                }(P)) break;
                if (!cw()) {
                  var R = function(J, se) {
                    for (var fe = J.eventTimes, le = Bn; se > 0; ) {
                      var Se = Mo(se), Ye = 1 << Se, qe = fe[Se];
                      qe > le && (le = qe), se &= ~Ye;
                    }
                    return le;
                  }(L, P), O = R, W = st() - O, K = ((X = W) < 120 ? 120 : X < 480 ? 480 : X < 1080 ? 1080 : X < 1920 ? 1920 : X < 3e3 ? 3e3 : X < 4320 ? 4320 : 1960 * vS(X / 1960)) - W;
                  if (K > 10) {
                    L.timeoutHandle = ws(Bs.bind(null, L, ia, Xi), K);
                    break;
                  }
                }
                Bs(L, ia, Xi);
                break;
              case V0:
                Bs(L, ia, Xi);
                break;
              default:
                throw new Error("Unknown root exit status.");
            }
            var X;
          }(e, s, i);
        }
      }
      return la(e, st()), e.callbackNode === a ? Y0.bind(null, e) : null;
    }
    function Zg(e, n) {
      var a = pp;
      Xu(e) && (js(e, n).flags |= Ti, g("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.containerInfo.nodeName.toLowerCase()));
      var i = Ph(e, n);
      if (i !== Us) {
        var l = ia;
        ia = a, l !== null && K0(l);
      }
      return i;
    }
    function K0(e) {
      ia === null ? ia = e : ia.push.apply(ia, e);
    }
    function Tu(e, n) {
      n = Di(n, bh), function(a, i) {
        a.suspendedLanes |= i, a.pingedLanes &= ~i;
        for (var l = a.expirationTimes, s = i; s > 0; ) {
          var d = Mo(s), p = 1 << d;
          l[d] = Bn, s &= ~p;
        }
      }(e, n = Di(n, fp));
    }
    function X0(e) {
      if (ag = sh, sh = !1, (Rn & (vr | $a)) !== nr) throw new Error("Should not already be working.");
      Ji();
      var n = Mr(e, 0);
      if (!ur(n, Ke)) return la(e, st()), null;
      var a = Ph(e, n);
      if (e.tag !== 0 && a === Us) {
        var i = oo(e);
        i !== 0 && (n = i, a = Zg(e, i));
      }
      if (a === sp) {
        var l = dp;
        throw js(e, 0), Tu(e, n), la(e, st()), l;
      }
      if (a === $g) throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = n, Bs(e, ia, Xi), la(e, st()), null;
    }
    function ey(e, n) {
      var a = Rn;
      Rn |= 1;
      try {
        return e(n);
      } finally {
        (Rn = a) !== nr || wo.isBatchingLegacy || (wh(), te());
      }
    }
    function Gi(e) {
      Eu !== null && Eu.tag === 0 && (Rn & (vr | $a)) === nr && Ji();
      var n = Rn;
      Rn |= 1;
      var a = oa.transition, i = sr();
      try {
        return oa.transition = null, Vn(Ut), e ? e() : void 0;
      } finally {
        Vn(i), oa.transition = a, ((Rn = n) & (vr | $a)) === nr && H();
      }
    }
    function G0() {
      return (Rn & (vr | $a)) !== nr;
    }
    function _h(e, n) {
      xt(qg, pi, e), pi = fn(pi, n);
    }
    function ny(e) {
      pi = qg.current, jt(qg, e);
    }
    function js(e, n) {
      e.finishedWork = null, e.finishedLanes = 0;
      var a = e.timeoutHandle;
      if (a !== -1 && (e.timeoutHandle = -1, Hi(a)), mt !== null) for (var i = mt.return; i !== null; )
        i.alternate, _0(0, i), i = i.return;
      Vr = e;
      var l = Ws(e.current, null);
      return mt = l, Bt = pi = n, Wt = Ki, dp = null, yh = 0, fp = 0, bh = 0, pp = null, ia = null, function() {
        if (Ls !== null) {
          for (var s = 0; s < Ls.length; s++) {
            var d = Ls[s], p = d.interleaved;
            if (p !== null) {
              d.interleaved = null;
              var v = p.next, b = d.pending;
              if (b !== null) {
                var x = b.next;
                b.next = v, p.next = x;
              }
              d.pending = p;
            }
          }
          Ls = null;
        }
      }(), mo.discardPendingWarnings(), l;
    }
    function J0(e, n) {
      for (; ; ) {
        var a = mt;
        try {
          if (Mm(), xb(), $t(), Hg.current = null, a === null || a.return === null) return Wt = sp, dp = n, void (mt = null);
          2 & a.mode && ch(a, !0), Io(), n !== null && typeof n == "object" && typeof n.then == "function" ? qp(a, n, Bt) : lv(a, n, Bt), Uk(e, a.return, a, n, Bt), tw(a);
        } catch (i) {
          n = i, mt === a && a !== null ? (a = a.return, mt = a) : a = mt;
          continue;
        }
        return;
      }
    }
    function Z0() {
      var e = Vg.current;
      return Vg.current = oh, e === null ? oh : e;
    }
    function ew(e) {
      Vg.current = e;
    }
    function vp(e) {
      yh = fn(e, yh);
    }
    function ty() {
      Wt !== Ki && Wt !== gh && Wt !== Us || (Wt = cp), Vr !== null && (xc(yh) || xc(fp)) && Tu(Vr, Bt);
    }
    function Ph(e, n) {
      var a = Rn;
      Rn |= vr;
      var i = Z0();
      if (Vr !== e || Bt !== n) {
        if (Zr) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (gp(e, Bt), l.clear()), Jd(e, n);
        }
        Xi = null, js(e, n);
      }
      for (Qp(n); ; ) try {
        kS();
        break;
      } catch (s) {
        J0(e, s);
      }
      if (Mm(), Rn = a, ew(i), mt !== null) throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Yp(), Vr = null, Bt = 0, Wt;
    }
    function kS() {
      for (; mt !== null; ) nw(mt);
    }
    function SS() {
      for (; mt !== null && !$d(); ) nw(mt);
    }
    function nw(e) {
      var n, a = e.alternate;
      ut(e), 2 & e.mode ? (og(e), n = ry(a, e, pi), ch(e, !0)) : n = ry(a, e, pi), $t(), e.memoizedProps = e.pendingProps, n === null ? tw(e) : mt = n, Hg.current = null;
    }
    function tw(e) {
      var n = e;
      do {
        var a = n.alternate, i = n.return;
        if (n.flags & Ci) {
          var l = Bk(0, n);
          if (l !== null) return l.flags &= 32767, void (mt = l);
          if (2 & n.mode) {
            ch(n, !1);
            for (var s = n.actualDuration, d = n.child; d !== null; ) s += d.actualDuration, d = d.sibling;
            n.actualDuration = s;
          }
          if (i === null) return Wt = $g, void (mt = null);
          i.flags |= Ci, i.subtreeFlags = 0, i.deletions = null;
        } else {
          ut(n);
          var p = void 0;
          if (2 & n.mode ? (og(n), p = C0(a, n, pi), ch(n, !1)) : p = C0(a, n, pi), $t(), p !== null) return void (mt = p);
        }
        var v = n.sibling;
        if (v !== null) return void (mt = v);
        mt = n = i;
      } while (n !== null);
      Wt === Ki && (Wt = V0);
    }
    function Bs(e, n, a) {
      var i = sr(), l = oa.transition;
      try {
        oa.transition = null, Vn(Ut), function(s, d, p, v) {
          do
            Ji();
          while (Eu !== null);
          if (function() {
            mo.flushLegacyContextWarning(), mo.flushPendingUnsafeLifecycleWarnings();
          }(), (Rn & (vr | $a)) !== nr) throw new Error("Should not already be working.");
          var b = s.finishedWork, x = s.finishedLanes;
          if (function(fe) {
            Ae !== null && typeof Ae.markCommitStarted == "function" && Ae.markCommitStarted(fe);
          }(x), b === null) return Vu(), null;
          if (x === 0 && g("root.finishedLanes should not be empty during a commit. This is a bug in React."), s.finishedWork = null, s.finishedLanes = 0, b === s.current) throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
          s.callbackNode = null, s.callbackPriority = 0;
          var D = fn(b.lanes, b.childLanes);
          (function(fe, le) {
            var Se = fe.pendingLanes & ~le;
            fe.pendingLanes = le, fe.suspendedLanes = 0, fe.pingedLanes = 0, fe.expiredLanes &= le, fe.mutableReadLanes &= le, fe.entangledLanes &= le;
            for (var Ye = fe.entanglements, qe = fe.eventTimes, Ge = fe.expirationTimes, vn = Se; vn > 0; ) {
              var un = Mo(vn), Tn = 1 << un;
              Ye[un] = 0, qe[un] = Bn, Ge[un] = Bn, vn &= ~Tn;
            }
          })(s, D), s === Vr && (Vr = null, mt = null, Bt = 0), (b.subtreeFlags & Nl || b.flags & Nl) && (Fs || (Fs = !0, Xg = p, iy(In, function() {
            return Ji(), null;
          })));
          var L = !!(15990 & b.subtreeFlags), N = !!(15990 & b.flags);
          if (L || N) {
            var P = oa.transition;
            oa.transition = null;
            var E = sr();
            Vn(Ut);
            var w = Rn;
            Rn |= $a, Hg.current = null, Hk(s, b), Yb(), function(fe, le, Se) {
              nd = Se, td = fe, ut(le), U0(le, fe), ut(le), nd = null, td = null;
            }(s, b, x), s.containerInfo, ym(ys), Gu(gs), gs = null, ys = null, s.current = b, function(fe) {
              Ae !== null && typeof Ae.markLayoutEffectsStarted == "function" && Ae.markLayoutEffectsStarted(fe);
            }(x), Jk(b, s, x), Ae !== null && typeof Ae.markLayoutEffectsStopped == "function" && Ae.markLayoutEffectsStopped(), qd(), Rn = w, Vn(E), oa.transition = P;
          } else s.current = b, Yb();
          var R = Fs;
          if (Fs ? (Fs = !1, Eu = s, mp = x) : (od = 0, Eh = null), D = s.pendingLanes, D === 0 && (ad = null), R || iw(s.current, !1), function(fe, le) {
            if (ht && typeof ht.onCommitFiberRoot == "function") try {
              var Se, Ye = (fe.current.flags & _n) === _n;
              switch (le) {
                case Ut:
                  Se = Bu;
                  break;
                case ba:
                  Se = yc;
                  break;
                case La:
                  Se = In;
                  break;
                case Al:
                  Se = Il;
                  break;
                default:
                  Se = In;
              }
              ht.onCommitFiberRoot(Ro, fe, Se, Ye);
            } catch (qe) {
              or || (or = !0, g("React instrumentation encountered an error: %s", qe));
            }
          }(b.stateNode, v), Zr && s.memoizedUpdaters.clear(), function() {
            mS.forEach(function(fe) {
              return fe();
            });
          }(), la(s, st()), d !== null) for (var O = s.onRecoverableError, W = 0; W < d.length; W++) {
            var K = d[W], X = K.stack, J = K.digest;
            O(K.value, { componentStack: X, digest: J });
          }
          if (kh) {
            kh = !1;
            var se = Yg;
            throw Yg = null, se;
          }
          ur(mp, Ke) && s.tag !== 0 && Ji(), D = s.pendingLanes, ur(D, Ke) ? (sh = !0, s === Gg ? hp++ : (hp = 0, Gg = s)) : hp = 0, H(), Vu();
        }(e, n, a, i);
      } finally {
        oa.transition = l, Vn(i);
      }
      return null;
    }
    function Ji() {
      if (Eu !== null) {
        var e = _c(mp), n = (l = La) > (s = e) ? l : s, a = oa.transition, i = sr();
        try {
          return oa.transition = null, Vn(n), function() {
            if (Eu === null) return !1;
            var d = Xg;
            Xg = null;
            var p = Eu, v = mp;
            if (Eu = null, mp = 0, (Rn & (vr | $a)) !== nr) throw new Error("Cannot flush passive effects while already rendering.");
            Jg = !0, Sh = !1, function(N) {
              Ae !== null && typeof Ae.markPassiveEffectsStarted == "function" && Ae.markPassiveEffectsStarted(N);
            }(v);
            var b = Rn;
            Rn |= $a, aS(p.current), nS(p, p.current, v, d);
            var x = Kg;
            Kg = [];
            for (var D = 0; D < x.length; D++)
              Qk(0, x[D]);
            Ae !== null && typeof Ae.markPassiveEffectsStopped == "function" && Ae.markPassiveEffectsStopped(), iw(p.current, !0), Rn = b, H(), Sh ? p === Eh ? od++ : (od = 0, Eh = p) : od = 0, Jg = !1, Sh = !1, function(N) {
              if (ht && typeof ht.onPostCommitFiberRoot == "function") try {
                ht.onPostCommitFiberRoot(Ro, N);
              } catch (P) {
                or || (or = !0, g("React instrumentation encountered an error: %s", P));
              }
            }(p);
            var L = p.current.stateNode;
            return L.effectDuration = 0, L.passiveEffectDuration = 0, !0;
          }();
        } finally {
          Vn(i), oa.transition = a;
        }
      }
      var l, s;
      return !1;
    }
    function rw(e) {
      return ad !== null && ad.has(e);
    }
    var ES = function(e) {
      kh || (kh = !0, Yg = e);
    };
    function aw(e, n, a) {
      var i = vu(e, t0(e, zs(a, n), Ke), Ke), l = Hr();
      i !== null && (Oi(i, Ke, l), la(i, l));
    }
    function Gn(e, n, a) {
      if (function(v) {
        Ld(null, function() {
          throw v;
        }), mc();
      }(a), yp(!1), e.tag !== 3) {
        var i = null;
        for (i = n; i !== null; ) {
          if (i.tag === 3) return void aw(i, e, a);
          if (i.tag === 1) {
            var l = i.type, s = i.stateNode;
            if (typeof l.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !rw(s)) {
              var d = vu(i, Eg(i, zs(a, e), Ke), Ke), p = Hr();
              return void (d !== null && (Oi(d, Ke, p), la(d, p)));
            }
          }
          i = i.return;
        }
        g(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
      } else aw(e, e, a);
    }
    function xS(e, n, a) {
      var i = e.pingCache;
      i !== null && i.delete(n);
      var l = Hr();
      Kp(e, a), function(s) {
        s.tag !== 0 && W0() && wo.current === null && g(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
      }(e), Vr === e && zo(Bt, a) && (Wt === cp || Wt === gh && Tc(Bt) && st() - Qg < H0 ? js(e, 0) : bh = fn(bh, a)), la(e, l);
    }
    function ow(e, n) {
      n === 0 && (n = wS(e));
      var a = Hr(), i = aa(e, n);
      i !== null && (Oi(i, n, a), la(i, a));
    }
    function TS(e) {
      var n = e.memoizedState, a = 0;
      n !== null && (a = n.retryLane), ow(e, a);
    }
    function CS(e, n) {
      var a, i = 0;
      switch (e.tag) {
        case M:
          a = e.stateNode;
          var l = e.memoizedState;
          l !== null && (i = l.retryLane);
          break;
        case re:
          a = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      a !== null && a.delete(n), ow(e, i);
    }
    function iw(e, n) {
      ut(e), Rh(e, _o, fS), n && Rh(e, Wp, pS), Rh(e, _o, cS), n && Rh(e, Wp, dS), $t();
    }
    function Rh(e, n, a) {
      for (var i = e, l = null; i !== null; ) {
        var s = i.subtreeFlags & n;
        i !== l && i.child !== null && s !== 0 ? i = i.child : (i.flags & n && a(i), i = i.sibling !== null ? i.sibling : l = i.return);
      }
    }
    var ry, Nh = null;
    function lw(e) {
      if ((Rn & vr) === nr && 1 & e.mode) {
        var n = e.tag;
        if (n === 2 || n === 3 || n === 1 || n === 0 || n === S || n === F || n === z) {
          var a = dn(e) || "ReactComponent";
          if (Nh !== null) {
            if (Nh.has(a)) return;
            Nh.add(a);
          } else Nh = /* @__PURE__ */ new Set([a]);
          var i = kt;
          try {
            ut(e), g("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
          } finally {
            i ? ut(e) : $t();
          }
        }
      }
    }
    ry = function(e, n, a) {
      var i = hw(null, n);
      try {
        return x0(e, n, a);
      } catch (s) {
        if (Is || s !== null && typeof s == "object" && typeof s.then == "function") throw s;
        if (Mm(), xb(), _0(0, n), hw(n, i), 2 & n.mode && og(n), Ld(null, x0, null, e, n, a), Si) {
          var l = mc();
          typeof l == "object" && l !== null && l._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
        }
        throw s;
      }
    };
    var ay, uw = !1;
    function gp(e, n) {
      Zr && e.memoizedUpdaters.forEach(function(a) {
        Qu(e, a, n);
      });
    }
    ay = /* @__PURE__ */ new Set();
    var oy = {};
    function iy(e, n) {
      var a = wo.current;
      return a !== null ? (a.push(n), oy) : Hd(e, n);
    }
    function sw(e) {
      if (e !== oy) return Po(e);
    }
    function cw() {
      return wo.current !== null;
    }
    function yp(e) {
      Q0 = e;
    }
    var qa = null, id = null, _S = function(e) {
      qa = e;
    };
    function ld(e) {
      if (qa === null) return e;
      var n = qa(e);
      return n === void 0 ? e : n.current;
    }
    function ly(e) {
      return ld(e);
    }
    function uy(e) {
      if (qa === null) return e;
      var n = qa(e);
      if (n === void 0) {
        if (e != null && typeof e.render == "function") {
          var a = ld(e.render);
          if (e.render !== a) {
            var i = { $$typeof: cn, render: a };
            return e.displayName !== void 0 && (i.displayName = e.displayName), i;
          }
        }
        return e;
      }
      return n.current;
    }
    function dw(e, n) {
      if (qa === null) return !1;
      var a = e.elementType, i = n.type, l = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
      switch (e.tag) {
        case 1:
          typeof i == "function" && (l = !0);
          break;
        case 0:
          (typeof i == "function" || s === bn) && (l = !0);
          break;
        case S:
          (s === cn || s === bn) && (l = !0);
          break;
        case F:
        case z:
          (s === hn || s === bn) && (l = !0);
          break;
        default:
          return !1;
      }
      if (l) {
        var d = qa(a);
        if (d !== void 0 && d === qa(i)) return !0;
      }
      return !1;
    }
    function fw(e) {
      qa !== null && typeof WeakSet == "function" && (id === null && (id = /* @__PURE__ */ new WeakSet()), id.add(e));
    }
    var PS = function(e, n) {
      if (qa !== null) {
        var a = n.staleFamilies, i = n.updatedFamilies;
        Ji(), Gi(function() {
          sy(e.current, i, a);
        });
      }
    }, RS = function(e, n) {
      e.context === Fr && (Ji(), Gi(function() {
        bp(n, e, null, null);
      }));
    };
    function sy(e, n, a) {
      var i = e.alternate, l = e.child, s = e.sibling, d = e.tag, p = e.type, v = null;
      switch (d) {
        case 0:
        case z:
        case 1:
          v = p;
          break;
        case S:
          v = p.render;
      }
      if (qa === null) throw new Error("Expected resolveFamily to be set during hot reload.");
      var b = !1, x = !1;
      if (v !== null) {
        var D = qa(v);
        D !== void 0 && (a.has(D) ? x = !0 : n.has(D) && (d === 1 ? x = !0 : b = !0));
      }
      if (id !== null && (id.has(e) || i !== null && id.has(i)) && (x = !0), x && (e._debugNeedsRemount = !0), x || b) {
        var L = aa(e, Ke);
        L !== null && Vt(L, e, Ke, Bn);
      }
      l === null || x || sy(l, n, a), s !== null && sy(s, n, a);
    }
    var cy, NS = function(e, n) {
      var a = /* @__PURE__ */ new Set(), i = new Set(n.map(function(l) {
        return l.current;
      }));
      return dy(e.current, i, a), a;
    };
    function dy(e, n, a) {
      var i = e.child, l = e.sibling, s = e.tag, d = e.type, p = null;
      switch (s) {
        case 0:
        case z:
        case 1:
          p = d;
          break;
        case S:
          p = d.render;
      }
      var v = !1;
      p !== null && n.has(p) && (v = !0), v ? function(b, x) {
        var D = function(N, P) {
          for (var E = N, w = !1; ; ) {
            if (E.tag === 5) w = !0, P.add(E.stateNode);
            else if (E.child !== null) {
              E.child.return = E, E = E.child;
              continue;
            }
            if (E === N) return w;
            for (; E.sibling === null; ) {
              if (E.return === null || E.return === N) return w;
              E = E.return;
            }
            E.sibling.return = E.return, E = E.sibling;
          }
          return !1;
        }(b, x);
        if (!D)
          for (var L = b; ; ) {
            switch (L.tag) {
              case 5:
                return void x.add(L.stateNode);
              case 4:
              case 3:
                return void x.add(L.stateNode.containerInfo);
            }
            if (L.return === null) throw new Error("Expected to reach root first.");
            L = L.return;
          }
      }(e, a) : i !== null && dy(i, n, a), l !== null && dy(l, n, a);
    }
    cy = !1;
    try {
      var pw = Object.preventExtensions({});
    } catch {
      cy = !0;
    }
    function IS(e, n, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = n, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = 0, this.subtreeFlags = 0, this.deletions = null, this.lanes = 0, this.childLanes = 0, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, cy || typeof Object.preventExtensions != "function" || Object.preventExtensions(this);
    }
    var _a = function(e, n, a, i) {
      return new IS(e, n, a, i);
    };
    function fy(e) {
      var n = e.prototype;
      return !(!n || !n.isReactComponent);
    }
    function Ws(e, n) {
      var a = e.alternate;
      a === null ? ((a = _a(e.tag, n, e.key, e.mode)).elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = n, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & eo, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : { lanes: i.lanes, firstContext: i.firstContext }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case 2:
        case 0:
        case z:
          a.type = ld(e.type);
          break;
        case 1:
          a.type = ly(e.type);
          break;
        case S:
          a.type = uy(e.type);
      }
      return a;
    }
    function DS(e, n) {
      e.flags &= 14680066;
      var a = e.alternate;
      if (a === null) e.childLanes = 0, e.lanes = n, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : { lanes: i.lanes, firstContext: i.firstContext }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function py(e, n, a, i, l, s) {
      var d = 2, p = e;
      if (typeof e == "function") fy(e) ? (d = 1, p = ly(p)) : p = ld(p);
      else if (typeof e == "string") d = 5;
      else e: switch (e) {
        case Ce:
          return Cu(a.children, l, s, n);
        case Pe:
          d = 8, 1 & (l |= 8) && (l |= zt);
          break;
        case yn:
          return function(D, L, N, P) {
            typeof D.id != "string" && g('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof D.id);
            var E = _a(T, D, P, 2 | L);
            return E.elementType = yn, E.lanes = N, E.stateNode = { effectDuration: 0, passiveEffectDuration: 0 }, E;
          }(a, l, s, n);
        case sn:
          return function(D, L, N, P) {
            var E = _a(M, D, P, L);
            return E.elementType = sn, E.lanes = N, E;
          }(a, l, s, n);
        case Nn:
          return function(D, L, N, P) {
            var E = _a(re, D, P, L);
            return E.elementType = Nn, E.lanes = N, E;
          }(a, l, s, n);
        case Ot:
          return mw(a, l, s, n);
        default:
          if (typeof e == "object" && e !== null) switch (e.$$typeof) {
            case lt:
              d = j;
              break e;
            case Fn:
              d = 9;
              break e;
            case cn:
              d = S, p = uy(p);
              break e;
            case hn:
              d = F;
              break e;
            case bn:
              d = 16, p = null;
              break e;
          }
          var v = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var b = i ? dn(i) : null;
          throw b && (v += `

Check the render method of \`` + b + "`."), new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (e == null ? e : typeof e) + "." + v);
      }
      var x = _a(d, a, n, l);
      return x.elementType = e, x.type = p, x.lanes = s, x._debugOwner = i, x;
    }
    function my(e, n, a) {
      var i;
      i = e._owner;
      var l = py(e.type, e.key, e.props, i, n, a);
      return l._debugSource = e._source, l._debugOwner = e._owner, l;
    }
    function Cu(e, n, a, i) {
      var l = _a(7, e, i, n);
      return l.lanes = a, l;
    }
    function mw(e, n, a, i) {
      var l = _a(ne, e, i, n);
      return l.elementType = Ot, l.lanes = a, l.stateNode = { isHidden: !1 }, l;
    }
    function hy(e, n, a) {
      var i = _a(6, e, null, n);
      return i.lanes = a, i;
    }
    function vy(e, n, a) {
      var i = e.children !== null ? e.children : [], l = _a(4, i, e.key, n);
      return l.lanes = a, l.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, l;
    }
    function hw(e, n) {
      return e === null && (e = _a(2, null, null, 0)), e.tag = n.tag, e.key = n.key, e.elementType = n.elementType, e.type = n.type, e.stateNode = n.stateNode, e.return = n.return, e.child = n.child, e.sibling = n.sibling, e.index = n.index, e.ref = n.ref, e.pendingProps = n.pendingProps, e.memoizedProps = n.memoizedProps, e.updateQueue = n.updateQueue, e.memoizedState = n.memoizedState, e.dependencies = n.dependencies, e.mode = n.mode, e.flags = n.flags, e.subtreeFlags = n.subtreeFlags, e.deletions = n.deletions, e.lanes = n.lanes, e.childLanes = n.childLanes, e.alternate = n.alternate, e.actualDuration = n.actualDuration, e.actualStartTime = n.actualStartTime, e.selfBaseDuration = n.selfBaseDuration, e.treeBaseDuration = n.treeBaseDuration, e._debugSource = n._debugSource, e._debugOwner = n._debugOwner, e._debugNeedsRemount = n._debugNeedsRemount, e._debugHookTypes = n._debugHookTypes, e;
    }
    function OS(e, n, a, i, l) {
      this.tag = n, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = -1, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = 0, this.eventTimes = Ao(0), this.expirationTimes = Ao(Bn), this.pendingLanes = 0, this.suspendedLanes = 0, this.pingedLanes = 0, this.expiredLanes = 0, this.mutableReadLanes = 0, this.finishedLanes = 0, this.entangledLanes = 0, this.entanglements = Ao(0), this.identifierPrefix = i, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0, this.memoizedUpdaters = /* @__PURE__ */ new Set();
      for (var s = this.pendingUpdatersLaneMap = [], d = 0; d < Pi; d++) s.push(/* @__PURE__ */ new Set());
      switch (n) {
        case 1:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case 0:
          this._debugRootType = a ? "hydrate()" : "render()";
      }
    }
    function vw(e, n, a, i, l, s, d, p, v, b) {
      var x = new OS(e, n, a, p, v), D = function(N, P) {
        var E;
        return N === 1 ? (E = 1, P === !0 && (E |= 8, E |= zt)) : E = 0, Zr && (E |= 2), _a(3, null, null, E);
      }(n, s);
      x.current = D, D.stateNode = x;
      var L = { element: i, isDehydrated: a, cache: null, transitions: null, pendingSuspenseBoundaries: null };
      return D.memoizedState = L, Rv(D), x;
    }
    var gy, yy, by = "18.3.1";
    function LS(e, n, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return function(l) {
        gn(l) && (g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ze(l)), ve(l));
      }(i), { $$typeof: B, key: i == null ? null : "" + i, children: e, containerInfo: n, implementation: a };
    }
    function gw(e) {
      if (!e) return Fr;
      var n = To(e), a = oe(n);
      if (n.tag === 1) {
        var i = n.type;
        if (c(i)) return A(n, i, a);
      }
      return a;
    }
    function yw(e, n, a, i, l, s, d, p) {
      return vw(e, n, !1, null, 0, i, 0, s, d);
    }
    function bw(e, n, a, i, l, s, d, p, v, b) {
      var x = vw(a, i, !0, e, 0, s, 0, p, v);
      x.context = gw(null);
      var D = x.current, L = Hr(), N = xu(D), P = Qi(L, N);
      return P.callback = n ?? null, vu(D, P, N), function(E, w, R) {
        E.current.lanes = w, Oi(E, w, R), la(E, R);
      }(x, N, L), x;
    }
    function bp(e, n, a, i) {
      (function(x, D) {
        if (ht && typeof ht.onScheduleFiberRoot == "function") try {
          ht.onScheduleFiberRoot(Ro, x, D);
        } catch (L) {
          or || (or = !0, g("React instrumentation encountered an error: %s", L));
        }
      })(n, e);
      var l = n.current, s = Hr(), d = xu(l);
      (function(x) {
        Ae !== null && typeof Ae.markRenderScheduled == "function" && Ae.markRenderScheduled(x);
      })(d);
      var p = gw(a);
      n.context === null ? n.context = p : n.pendingContext = p, dl && kt !== null && !gy && (gy = !0, g(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, dn(kt) || "Unknown"));
      var v = Qi(s, d);
      v.payload = { element: e }, (i = i === void 0 ? null : i) !== null && (typeof i != "function" && g("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var b = vu(l, v, d);
      return b !== null && (Vt(b, l, d, s), jm(b, l, d)), d;
    }
    function Ih(e) {
      var n = e.current;
      return n.child ? (n.child.tag, n.child.stateNode) : null;
    }
    function ww(e, n) {
      var a, i, l = e.memoizedState;
      l !== null && l.dehydrated !== null && (l.retryLane = (a = l.retryLane, i = n, a !== 0 && a < i ? a : i));
    }
    function wy(e, n) {
      ww(e, n);
      var a = e.alternate;
      a && ww(a, n);
    }
    function kw(e) {
      var n = Vp(e);
      return n === null ? null : n.stateNode;
    }
    gy = !1, yy = {};
    var Sw = function(e) {
      return null;
    }, Ew = function(e) {
      return !1;
    }, xw, Tw, Cw, _w, Pw, Rw, Nw, Iw, Dw, Ow = function(e, n, a) {
      var i = n[a], l = Mt(e) ? e.slice() : He({}, e);
      return a + 1 === n.length ? (Mt(l) ? l.splice(i, 1) : delete l[i], l) : (l[i] = Ow(e[i], n, a + 1), l);
    }, Lw = function(e, n) {
      return Ow(e, n, 0);
    }, Mw = function(e, n, a, i) {
      var l = n[i], s = Mt(e) ? e.slice() : He({}, e);
      return i + 1 === n.length ? (s[a[i]] = s[l], Mt(s) ? s.splice(l, 1) : delete s[l]) : s[l] = Mw(e[l], n, a, i + 1), s;
    }, zw = function(e, n, a) {
      if (n.length === a.length) {
        for (var i = 0; i < a.length - 1; i++) if (n[i] !== a[i]) return void C("copyWithRename() expects paths to be the same except for the deepest key");
        return Mw(e, n, a, 0);
      }
      C("copyWithRename() expects paths of the same length");
    }, Aw = function(e, n, a, i) {
      if (a >= n.length) return i;
      var l = n[a], s = Mt(e) ? e.slice() : He({}, e);
      return s[l] = Aw(e[l], n, a + 1, i), s;
    }, Uw = function(e, n, a) {
      return Aw(e, n, 0, a);
    }, ky = function(e, n) {
      for (var a = e.memoizedState; a !== null && n > 0; ) a = a.next, n--;
      return a;
    };
    function MS(e) {
      var n = Bd(e);
      return n === null ? null : n.stateNode;
    }
    function zS(e) {
      return null;
    }
    function AS() {
      return kt;
    }
    xw = function(e, n, a, i) {
      var l = ky(e, n);
      if (l !== null) {
        var s = Uw(l.memoizedState, a, i);
        l.memoizedState = s, l.baseState = s, e.memoizedProps = He({}, e.memoizedProps);
        var d = aa(e, Ke);
        d !== null && Vt(d, e, Ke, Bn);
      }
    }, Tw = function(e, n, a) {
      var i = ky(e, n);
      if (i !== null) {
        var l = Lw(i.memoizedState, a);
        i.memoizedState = l, i.baseState = l, e.memoizedProps = He({}, e.memoizedProps);
        var s = aa(e, Ke);
        s !== null && Vt(s, e, Ke, Bn);
      }
    }, Cw = function(e, n, a, i) {
      var l = ky(e, n);
      if (l !== null) {
        var s = zw(l.memoizedState, a, i);
        l.memoizedState = s, l.baseState = s, e.memoizedProps = He({}, e.memoizedProps);
        var d = aa(e, Ke);
        d !== null && Vt(d, e, Ke, Bn);
      }
    }, _w = function(e, n, a) {
      e.pendingProps = Uw(e.memoizedProps, n, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
      var i = aa(e, Ke);
      i !== null && Vt(i, e, Ke, Bn);
    }, Pw = function(e, n) {
      e.pendingProps = Lw(e.memoizedProps, n), e.alternate && (e.alternate.pendingProps = e.pendingProps);
      var a = aa(e, Ke);
      a !== null && Vt(a, e, Ke, Bn);
    }, Rw = function(e, n, a) {
      e.pendingProps = zw(e.memoizedProps, n, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
      var i = aa(e, Ke);
      i !== null && Vt(i, e, Ke, Bn);
    }, Nw = function(e) {
      var n = aa(e, Ke);
      n !== null && Vt(n, e, Ke, Bn);
    }, Iw = function(e) {
      Sw = e;
    }, Dw = function(e) {
      Ew = e;
    };
    var Fw = typeof reportError == "function" ? reportError : function(e) {
      console.error(e);
    };
    function Sy(e) {
      this._internalRoot = e;
    }
    function Dh(e) {
      this._internalRoot = e;
    }
    function Oh(e) {
      return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
    }
    function wp(e) {
      return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
    }
    function jw(e) {
      e.nodeType === 1 && e.tagName && e.tagName.toUpperCase() === "BODY" && g("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), qi(e) && (e._reactRootContainer ? g("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : g("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    Dh.prototype.render = Sy.prototype.render = function(e) {
      var n = this._internalRoot;
      if (n === null) throw new Error("Cannot update an unmounted root.");
      typeof arguments[1] == "function" ? g("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Oh(arguments[1]) ? g("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : arguments[1] !== void 0 && g("You passed a second argument to root.render(...) but it only accepts one argument.");
      var a = n.containerInfo;
      if (a.nodeType !== 8) {
        var i = kw(n.current);
        i && i.parentNode !== a && g("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
      }
      bp(e, n, null, null);
    }, Dh.prototype.unmount = Sy.prototype.unmount = function() {
      typeof arguments[0] == "function" && g("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var n = e.containerInfo;
        G0() && g("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Gi(function() {
          bp(null, e, null, null);
        }), xs(n);
      }
    }, Dh.prototype.unstable_scheduleHydration = function(e) {
      e && function(n) {
        for (var a = Yu(), i = { blockedOn: null, target: n, priority: a }, l = 0; l < wa.length && io(a, wa[l].priority); l++) ;
        wa.splice(l, 0, i), l === 0 && Bl(i);
      }(e);
    };
    var Bw, US = y.ReactCurrentOwner;
    function Ey(e) {
      return e ? e.nodeType === 9 ? e.documentElement : e.firstChild : null;
    }
    function Ww() {
    }
    function Lh(e, n, a, i, l) {
      Bw(a), function(v, b) {
        v !== null && typeof v != "function" && g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", b, v);
      }(l === void 0 ? null : l, "render");
      var s, d = a._reactRootContainer;
      if (d) {
        if (typeof l == "function") {
          var p = l;
          l = function() {
            var v = Ih(s);
            p.call(v);
          };
        }
        bp(n, s = d, e, l);
      } else s = function(v, b, x, D, L) {
        if (L) {
          if (typeof D == "function") {
            var N = D;
            D = function() {
              var O = Ih(P);
              N.call(O);
            };
          }
          var P = bw(b, D, v, 0, 0, !1, 0, "", Ww);
          return v._reactRootContainer = P, Ba(P.current, v), Wi(v.nodeType === 8 ? v.parentNode : v), Gi(), P;
        }
        for (var E; E = v.lastChild; ) v.removeChild(E);
        if (typeof D == "function") {
          var w = D;
          D = function() {
            var O = Ih(R);
            w.call(O);
          };
        }
        var R = yw(v, 0, 0, !1, 0, "", Ww);
        return v._reactRootContainer = R, Ba(R.current, v), Wi(v.nodeType === 8 ? v.parentNode : v), Gi(function() {
          bp(b, R, x, D);
        }), R;
      }(a, n, e, l, i);
      return Ih(s);
    }
    Bw = function(e) {
      if (e._reactRootContainer && e.nodeType !== 8) {
        var n = kw(e._reactRootContainer.current);
        n && n.parentNode !== e && g("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = Ey(e);
      !(!i || !ni(i)) && !a && g("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === 1 && e.tagName && e.tagName.toUpperCase() === "BODY" && g("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    var Vw = !1, Hw, $w = !1;
    Hw = function(e) {
      switch (e.tag) {
        case 3:
          var n = e.stateNode;
          if (Xu(n)) {
            var a = function(i) {
              return ya(i.pendingLanes);
            }(n);
            (function(i, l) {
              l !== 0 && (Li(i, fn(l, Ke)), la(i, st()), (Rn & (vr | $a)) === nr && (wh(), H()));
            })(n, a);
          }
          break;
        case M:
          Gi(function() {
            var i = aa(e, Ke);
            if (i !== null) {
              var l = Hr();
              Vt(i, e, Ke, l);
            }
          }), wy(e, Ke);
      }
    }, Zd = Hw, function(e) {
      Uo = e;
    }(function(e) {
      if (e.tag === M) {
        var n = Ii, a = aa(e, n);
        a !== null && Vt(a, e, n, Hr()), wy(e, n);
      }
    }), function(e) {
      ef = e;
    }(function(e) {
      if (e.tag === M) {
        var n = xu(e), a = aa(e, n);
        a !== null && Vt(a, e, n, Hr()), wy(e, n);
      }
    }), function(e) {
      Yu = e;
    }(sr), function(e) {
      Ku = e;
    }(function(e, n) {
      var a = Mi;
      try {
        return Mi = e, n();
      } finally {
        Mi = a;
      }
    }), typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || g("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Rd = function(e, n, a) {
      switch (n) {
        case "input":
          return void vd(e, a);
        case "textarea":
          return void function(i, l) {
            gl(i, l);
          }(e, a);
        case "select":
          return void function(i, l) {
            var s = i, d = l.value;
            d != null && hi(s, !!l.multiple, d, !1);
          }(e, a);
      }
    }, jp = ey, dc = Gi;
    var xy = { usingClientEntryPoint: !1, Events: [ni, ti, Ts, Up, Fp, ey] }, FS = function(e) {
      var n = e.findFiberByHostInstance, a = y.ReactCurrentDispatcher;
      return function(i) {
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") return !1;
        var l = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (l.isDisabled) return !0;
        if (!l.supportsFiber) return g("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
        try {
          i = He({}, i, { getLaneLabelMap: $p, injectProfilingHooks: iv }), Ro = l.inject(i), ht = l;
        } catch (s) {
          g("React instrumentation encountered an error: %s.", s);
        }
        return !!l.checkDCE;
      }({ bundleType: e.bundleType, version: e.version, rendererPackageName: e.rendererPackageName, rendererConfig: e.rendererConfig, overrideHookState: xw, overrideHookStateDeletePath: Tw, overrideHookStateRenamePath: Cw, overrideProps: _w, overridePropsDeletePath: Pw, overridePropsRenamePath: Rw, setErrorHandler: Iw, setSuspenseHandler: Dw, scheduleUpdate: Nw, currentDispatcherRef: a, findHostInstanceByFiber: MS, findFiberByHostInstance: n || zS, findHostInstancesForRefresh: NS, scheduleRefresh: PS, scheduleRoot: RS, setRefreshHandler: _S, getCurrentFiber: AS, reconcilerVersion: by });
    }({ findFiberByHostInstance: co, bundleType: 1, version: by, rendererPackageName: "react-dom" });
    if (!FS && nn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var qw = window.location.protocol;
      /^(https?|file):$/.test(qw) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (qw === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Pa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xy, Pa.createPortal = function(e, n) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Oh(n)) throw new Error("Target container is not a DOM element.");
      return LS(e, n, null, a);
    }, Pa.createRoot = function(e, n) {
      return xy.usingClientEntryPoint || g('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), function(a, i) {
        if (!Oh(a)) throw new Error("createRoot(...): Target container is not a DOM element.");
        jw(a);
        var l = !1, s = "", d = Fw;
        i != null && (i.hydrate ? C("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof i == "object" && i !== null && i.$$typeof === zn && g(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), i.unstable_strictMode === !0 && (l = !0), i.identifierPrefix !== void 0 && (s = i.identifierPrefix), i.onRecoverableError !== void 0 && (d = i.onRecoverableError), i.transitionCallbacks !== void 0 && i.transitionCallbacks);
        var p = yw(a, 1, 0, l, 0, s, d);
        return Ba(p.current, a), Wi(a.nodeType === 8 ? a.parentNode : a), new Sy(p);
      }(e, n);
    }, Pa.findDOMNode = function(e) {
      Vw || (Vw = !0, g("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
      var n = US.current;
      return n !== null && n.stateNode !== null && (n.stateNode._warnedAboutRefsInRender || g("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", En(n.type) || "A component"), n.stateNode._warnedAboutRefsInRender = !0), e == null ? null : e.nodeType === 1 ? e : function(a, i) {
        var l = To(a);
        if (l === void 0) {
          if (typeof a.render == "function") throw new Error("Unable to find node on an unmounted component.");
          var s = Object.keys(a).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + s);
        }
        var d = Bd(l);
        if (d === null) return null;
        if (8 & d.mode) {
          var p = dn(l) || "Component";
          if (!yy[p]) {
            yy[p] = !0;
            var v = kt;
            try {
              ut(d), 8 & l.mode ? g("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", i, i, p) : g("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", i, i, p);
            } finally {
              v ? ut(v) : $t();
            }
          }
        }
        return d.stateNode;
      }(e, "findDOMNode");
    }, Pa.flushSync = function(e) {
      return G0() && g("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Gi(e);
    }, Pa.hydrate = function(e, n, a) {
      if (g("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !wp(n)) throw new Error("Target container is not a DOM element.");
      return qi(n) && n._reactRootContainer === void 0 && g("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?"), Lh(null, e, n, !0, a);
    }, Pa.hydrateRoot = function(e, n, a) {
      return xy.usingClientEntryPoint || g('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), function(i, l, s) {
        if (!Oh(i)) throw new Error("hydrateRoot(...): Target container is not a DOM element.");
        jw(i), l === void 0 && g("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
        var d = s != null && s.hydratedSources || null, p = !1, v = "", b = Fw;
        s != null && (s.unstable_strictMode === !0 && (p = !0), s.identifierPrefix !== void 0 && (v = s.identifierPrefix), s.onRecoverableError !== void 0 && (b = s.onRecoverableError));
        var x = bw(l, null, i, 1, 0, p, 0, v, b);
        if (Ba(x.current, i), Wi(i), d) for (var D = 0; D < d.length; D++) Ik(x, d[D]);
        return new Dh(x);
      }(e, n, a);
    }, Pa.render = function(e, n, a) {
      if (g("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !wp(n)) throw new Error("Target container is not a DOM element.");
      return qi(n) && n._reactRootContainer === void 0 && g("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?"), Lh(null, e, n, !1, a);
    }, Pa.unmountComponentAtNode = function(e) {
      if ($w || ($w = !0, g("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !wp(e)) throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      if (qi(e) && e._reactRootContainer === void 0 && g("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?"), e._reactRootContainer) {
        var n = Ey(e);
        return n && !ni(n) && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React."), Gi(function() {
          Lh(null, null, e, !1, function() {
            e._reactRootContainer = null, xs(e);
          });
        }), !0;
      }
      var a = Ey(e), i = !(!a || !ni(a)), l = e.nodeType === 1 && wp(e.parentNode) && !!e.parentNode._reactRootContainer;
      return i && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", l ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component."), !1;
    }, Pa.unstable_batchedUpdates = ey, Pa.unstable_renderSubtreeIntoContainer = function(e, n, a, i) {
      return function(l, s, d, p) {
        if (g("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !wp(d)) throw new Error("Target container is not a DOM element.");
        if (l == null || l._reactInternals === void 0) throw new Error("parentComponent must be a valid React Component");
        return Lh(l, s, d, !1, p);
      }(e, n, a, i);
    }, Pa.version = by, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Pa;
}
function Yh() {
  return n1 || (n1 = 1, process.env.NODE_ENV === "production" ? (function f() {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == "function") {
      if (process.env.NODE_ENV !== "production") throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (h) {
        console.error(h);
      }
    }
  }(), zh.exports = WS()) : zh.exports = VS()), zh.exports;
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
function HS() {
  if (t1) return Ct;
  t1 = 1;
  var f = Qh, h = Yh();
  function y(B) {
    var Ce = B, Pe = B;
    if (B.alternate) for (; Ce.return; ) Ce = Ce.return;
    else {
      B = Ce;
      do
        4098 & (Ce = B).flags && (Pe = Ce.return), B = Ce.return;
      while (B);
    }
    return Ce.tag === 3 ? Pe : null;
  }
  function _(B) {
    if (y(B) !== B) throw Error("Unable to find node on an unmounted component.");
  }
  var C = Object.assign;
  function g(B) {
    var Ce = B.keyCode;
    return "charCode" in B ? (B = B.charCode) === 0 && Ce === 13 && (B = 13) : B = Ce, B === 10 && (B = 13), 32 <= B || B === 13 ? B : 0;
  }
  function U() {
    return !0;
  }
  function j() {
    return !1;
  }
  function S(B) {
    function Ce(Pe, yn, lt, Fn, cn) {
      for (var sn in this._reactName = Pe, this._targetInst = lt, this.type = yn, this.nativeEvent = Fn, this.target = cn, this.currentTarget = null, B) B.hasOwnProperty(sn) && (Pe = B[sn], this[sn] = Pe ? Pe(Fn) : Fn[sn]);
      return this.isDefaultPrevented = (Fn.defaultPrevented != null ? Fn.defaultPrevented : Fn.returnValue === !1) ? U : j, this.isPropagationStopped = j, this;
    }
    return C(Ce.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var Pe = this.nativeEvent;
      Pe && (Pe.preventDefault ? Pe.preventDefault() : typeof Pe.returnValue != "unknown" && (Pe.returnValue = !1), this.isDefaultPrevented = U);
    }, stopPropagation: function() {
      var Pe = this.nativeEvent;
      Pe && (Pe.stopPropagation ? Pe.stopPropagation() : typeof Pe.cancelBubble != "unknown" && (Pe.cancelBubble = !0), this.isPropagationStopped = U);
    }, persist: function() {
    }, isPersistent: U }), Ce;
  }
  var T = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(B) {
    return B.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, M = S(T), F = C({}, T, { view: 0, detail: 0 });
  S(F);
  var z, Y, ae, re = C({}, F, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: We, button: 0, buttons: 0, relatedTarget: function(B) {
    return B.relatedTarget === void 0 ? B.fromElement === B.srcElement ? B.toElement : B.fromElement : B.relatedTarget;
  }, movementX: function(B) {
    return "movementX" in B ? B.movementX : (B !== ae && (ae && B.type === "mousemove" ? (z = B.screenX - ae.screenX, Y = B.screenY - ae.screenY) : Y = z = 0, ae = B), z);
  }, movementY: function(B) {
    return "movementY" in B ? B.movementY : Y;
  } });
  S(re), S(C({}, re, { dataTransfer: 0 })), S(C({}, F, { relatedTarget: 0 })), S(C({}, T, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })), S(C({}, T, { clipboardData: function(B) {
    return "clipboardData" in B ? B.clipboardData : window.clipboardData;
  } })), S(C({}, T, { data: 0 }));
  var $ = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, ne = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, ge = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Ie(B) {
    var Ce = this.nativeEvent;
    return Ce.getModifierState ? Ce.getModifierState(B) : !!(B = ge[B]) && !!Ce[B];
  }
  function We() {
    return Ie;
  }
  function xe(B, Ce, Pe, yn, lt, Fn, cn, sn, Nn) {
    var hn = Array.prototype.slice.call(arguments, 3);
    try {
      Ce.apply(Pe, hn);
    } catch (bn) {
      this.onError(bn);
    }
  }
  S(C({}, F, { key: function(B) {
    if (B.key) {
      var Ce = $[B.key] || B.key;
      if (Ce !== "Unidentified") return Ce;
    }
    return B.type === "keypress" ? (B = g(B)) === 13 ? "Enter" : String.fromCharCode(B) : B.type === "keydown" || B.type === "keyup" ? ne[B.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: We, charCode: function(B) {
    return B.type === "keypress" ? g(B) : 0;
  }, keyCode: function(B) {
    return B.type === "keydown" || B.type === "keyup" ? B.keyCode : 0;
  }, which: function(B) {
    return B.type === "keypress" ? g(B) : B.type === "keydown" || B.type === "keyup" ? B.keyCode : 0;
  } })), S(C({}, re, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 })), S(C({}, F, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: We })), S(C({}, T, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })), S(C({}, re, { deltaX: function(B) {
    return "deltaX" in B ? B.deltaX : "wheelDeltaX" in B ? -B.wheelDeltaX : 0;
  }, deltaY: function(B) {
    return "deltaY" in B ? B.deltaY : "wheelDeltaY" in B ? -B.wheelDeltaY : "wheelDelta" in B ? -B.wheelDelta : 0;
  }, deltaZ: 0, deltaMode: 0 }));
  var Le = !1, be = null, ue = !1, nn = null, pn = { onError: function(B) {
    Le = !0, be = B;
  } };
  function Ze(B, Ce, Pe, yn, lt, Fn, cn, sn, Nn) {
    Le = !1, be = null, xe.apply(pn, arguments);
  }
  var gn = Array.isArray, ve = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events, Ve = ve[0], mn = ve[1], he = ve[2], an = ve[3], ce = ve[4], De = f.unstable_act;
  function Ee() {
  }
  function je(B, Ce) {
    if (!B) return [];
    if (B = function(Fn) {
      var cn = Fn.alternate;
      if (!cn) {
        if ((cn = y(Fn)) === null) throw Error("Unable to find node on an unmounted component.");
        return cn !== Fn ? null : Fn;
      }
      for (var sn = Fn, Nn = cn; ; ) {
        var hn = sn.return;
        if (hn === null) break;
        var bn = hn.alternate;
        if (bn === null) {
          if ((Nn = hn.return) !== null) {
            sn = Nn;
            continue;
          }
          break;
        }
        if (hn.child === bn.child) {
          for (bn = hn.child; bn; ) {
            if (bn === sn) return _(hn), Fn;
            if (bn === Nn) return _(hn), cn;
            bn = bn.sibling;
          }
          throw Error("Unable to find node on an unmounted component.");
        }
        if (sn.return !== Nn.return) sn = hn, Nn = bn;
        else {
          for (var Ot = !1, Lt = hn.child; Lt; ) {
            if (Lt === sn) {
              Ot = !0, sn = hn, Nn = bn;
              break;
            }
            if (Lt === Nn) {
              Ot = !0, Nn = hn, sn = bn;
              break;
            }
            Lt = Lt.sibling;
          }
          if (!Ot) {
            for (Lt = bn.child; Lt; ) {
              if (Lt === sn) {
                Ot = !0, sn = bn, Nn = hn;
                break;
              }
              if (Lt === Nn) {
                Ot = !0, Nn = bn, sn = hn;
                break;
              }
              Lt = Lt.sibling;
            }
            if (!Ot) throw Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (sn.alternate !== Nn) throw Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (sn.tag !== 3) throw Error("Unable to find node on an unmounted component.");
      return sn.stateNode.current === sn ? Fn : cn;
    }(B), !B) return [];
    for (var Pe = B, yn = []; ; ) {
      if (Pe.tag === 5 || Pe.tag === 6 || Pe.tag === 1 || Pe.tag === 0) {
        var lt = Pe.stateNode;
        Ce(lt) && yn.push(lt);
      }
      if (Pe.child) Pe.child.return = Pe, Pe = Pe.child;
      else {
        if (Pe === B) return yn;
        for (; !Pe.sibling; ) {
          if (!Pe.return || Pe.return === B) return yn;
          Pe = Pe.return;
        }
        Pe.sibling.return = Pe.return, Pe = Pe.sibling;
      }
    }
  }
  function Q(B, Ce) {
    if (B && !B._reactInternals) {
      var Pe = String(B);
      throw B = gn(B) ? "an array" : B && B.nodeType === 1 && B.tagName ? "a DOM node" : Pe === "[object Object]" ? "object with keys {" + Object.keys(B).join(", ") + "}" : Pe, Error(Ce + "(...): the first argument must be a React class instance. Instead received: " + B + ".");
    }
  }
  function Te(B) {
    return !(!B || B.nodeType !== 1 || !B.tagName);
  }
  function Oe(B) {
    return !Te(B) && B != null && typeof B.render == "function" && typeof B.setState == "function";
  }
  function ze(B, Ce) {
    return !!Oe(B) && B._reactInternals.type === Ce;
  }
  function _e(B, Ce) {
    return Q(B, "findAllInRenderedTree"), B ? je(B._reactInternals, Ce) : [];
  }
  function Qe(B, Ce) {
    return Q(B, "scryRenderedDOMComponentsWithClass"), _e(B, function(Pe) {
      if (Te(Pe)) {
        var yn = Pe.className;
        typeof yn != "string" && (yn = Pe.getAttribute("class") || "");
        var lt = yn.split(/\s+/);
        if (!gn(Ce)) {
          if (Ce === void 0) throw Error("TestUtils.scryRenderedDOMComponentsWithClass expects a className as a second argument.");
          Ce = Ce.split(/\s+/);
        }
        return Ce.every(function(Fn) {
          return lt.indexOf(Fn) !== -1;
        });
      }
      return !1;
    });
  }
  function rn(B, Ce) {
    return Q(B, "scryRenderedDOMComponentsWithTag"), _e(B, function(Pe) {
      return Te(Pe) && Pe.tagName.toUpperCase() === Ce.toUpperCase();
    });
  }
  function xn(B, Ce) {
    return Q(B, "scryRenderedComponentsWithType"), _e(B, function(Pe) {
      return ze(Pe, Ce);
    });
  }
  function Dn(B, Ce, Pe) {
    var yn = B.type || "unknown-event";
    B.currentTarget = mn(Pe), function(lt, Fn, cn, sn, Nn, hn, bn, Ot, Lt) {
      if (Ze.apply(this, arguments), Le) {
        if (!Le) throw Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
        var Qr = be;
        Le = !1, be = null, ue || (ue = !0, nn = Qr);
      }
    }(yn, Ce, void 0, B), B.currentTarget = null;
  }
  function kn(B, Ce, Pe) {
    for (var yn = []; B; ) {
      yn.push(B);
      do
        B = B.return;
      while (B && B.tag !== 5);
      B = B || null;
    }
    for (B = yn.length; 0 < B--; ) Ce(yn[B], "captured", Pe);
    for (B = 0; B < yn.length; B++) Ce(yn[B], "bubbled", Pe);
  }
  function ot(B, Ce) {
    var Pe = B.stateNode;
    if (!Pe) return null;
    var yn = he(Pe);
    if (!yn) return null;
    Pe = yn[Ce];
    e: switch (Ce) {
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
        (yn = !yn.disabled) || (yn = !((B = B.type) === "button" || B === "input" || B === "select" || B === "textarea")), B = !yn;
        break e;
      default:
        B = !1;
    }
    if (B) return null;
    if (Pe && typeof Pe != "function") throw Error("Expected `" + Ce + "` listener to be a function, instead got a value of `" + typeof Pe + "` type.");
    return Pe;
  }
  function gr(B, Ce, Pe) {
    var yn = Pe._reactName;
    Ce === "captured" && (yn += "Capture"), (Ce = ot(B, yn)) && (Pe._dispatchListeners == null && (Pe._dispatchListeners = []), Pe._dispatchInstances == null && (Pe._dispatchInstances = []), Pe._dispatchListeners.push(Ce), Pe._dispatchInstances.push(B));
  }
  var tr = {}, rr = /* @__PURE__ */ new Set(["mouseEnter", "mouseLeave", "pointerEnter", "pointerLeave"]);
  function zn(B) {
    return function(Ce, Pe) {
      if (f.isValidElement(Ce)) throw Error("TestUtils.Simulate expected a DOM node as the first argument but received a React element. Pass the DOM node you wish to simulate the event on instead. Note that TestUtils.Simulate will not work if you are using shallow rendering.");
      if (Oe(Ce)) throw Error("TestUtils.Simulate expected a DOM node as the first argument but received a component instance. Pass the DOM node you wish to simulate the event on instead.");
      var yn = "on" + B[0].toUpperCase() + B.slice(1), lt = new Ee();
      lt.target = Ce, lt.type = B.toLowerCase();
      var Fn = Ve(Ce), cn = new M(yn, lt.type, Fn, lt, Ce);
      cn.persist(), C(cn, Pe), rr.has(B) ? cn && cn._reactName && function(sn, Nn, hn) {
        sn && hn && hn._reactName && (Nn = ot(sn, hn._reactName)) && (hn._dispatchListeners == null && (hn._dispatchListeners = []), hn._dispatchInstances == null && (hn._dispatchInstances = []), hn._dispatchListeners.push(Nn), hn._dispatchInstances.push(sn));
      }(cn._targetInst, null, cn) : cn && cn._reactName && kn(cn._targetInst, gr, cn), h.unstable_batchedUpdates(function() {
        if (an(Ce), cn) {
          var sn = cn._dispatchListeners, Nn = cn._dispatchInstances;
          if (gn(sn)) for (var hn = 0; hn < sn.length && !cn.isPropagationStopped(); hn++) Dn(cn, sn[hn], Nn[hn]);
          else sn && Dn(cn, sn, Nn);
          cn._dispatchListeners = null, cn._dispatchInstances = null, cn.isPersistent() || cn.constructor.release(cn);
        }
        if (ue) throw sn = nn, ue = !1, nn = null, sn;
      }), ce();
    };
  }
  return "blur cancel click close contextMenu copy cut auxClick doubleClick dragEnd dragStart drop focus input invalid keyDown keyPress keyUp mouseDown mouseUp paste pause play pointerCancel pointerDown pointerUp rateChange reset resize seeked submit touchCancel touchEnd touchStart volumeChange drag dragEnter dragExit dragLeave dragOver mouseMove mouseOut mouseOver pointerMove pointerOut pointerOver scroll toggle touchMove wheel abort animationEnd animationIteration animationStart canPlay canPlayThrough durationChange emptied encrypted ended error gotPointerCapture load loadedData loadedMetadata loadStart lostPointerCapture playing progress seeking stalled suspend timeUpdate transitionEnd waiting mouseEnter mouseLeave pointerEnter pointerLeave change select beforeInput compositionEnd compositionStart compositionUpdate".split(" ").forEach(function(B) {
    tr[B] = zn(B);
  }), Ct.Simulate = tr, Ct.act = De, Ct.findAllInRenderedTree = _e, Ct.findRenderedComponentWithType = function(B, Ce) {
    if (Q(B, "findRenderedComponentWithType"), (B = xn(B, Ce)).length !== 1) throw Error("Did not find exactly one match (found: " + B.length + ") for componentType:" + Ce);
    return B[0];
  }, Ct.findRenderedDOMComponentWithClass = function(B, Ce) {
    if (Q(B, "findRenderedDOMComponentWithClass"), (B = Qe(B, Ce)).length !== 1) throw Error("Did not find exactly one match (found: " + B.length + ") for class:" + Ce);
    return B[0];
  }, Ct.findRenderedDOMComponentWithTag = function(B, Ce) {
    if (Q(B, "findRenderedDOMComponentWithTag"), (B = rn(B, Ce)).length !== 1) throw Error("Did not find exactly one match (found: " + B.length + ") for tag:" + Ce);
    return B[0];
  }, Ct.isCompositeComponent = Oe, Ct.isCompositeComponentWithType = ze, Ct.isDOMComponent = Te, Ct.isDOMComponentElement = function(B) {
    return !!(B && f.isValidElement(B) && B.tagName);
  }, Ct.isElement = function(B) {
    return f.isValidElement(B);
  }, Ct.isElementOfType = function(B, Ce) {
    return f.isValidElement(B) && B.type === Ce;
  }, Ct.mockComponent = function(B, Ce) {
    return Ce = Ce || B.mockTagName || "div", B.prototype.render.mockImplementation(function() {
      return f.createElement(Ce, null, this.props.children);
    }), this;
  }, Ct.nativeTouchData = function(B, Ce) {
    return { touches: [{ pageX: B, pageY: Ce }] };
  }, Ct.renderIntoDocument = function(B) {
    var Ce = document.createElement("div");
    return h.render(B, Ce);
  }, Ct.scryRenderedComponentsWithType = xn, Ct.scryRenderedDOMComponentsWithClass = Qe, Ct.scryRenderedDOMComponentsWithTag = rn, Ct.traverseTwoPhase = kn, Ct;
}
var r1, a1, Dt = {};
/**
 * @license React
 * react-dom-test-utils.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function $S() {
  return r1 || (r1 = 1, process.env.NODE_ENV !== "production" && function() {
    var f = Qh, h = Yh(), y = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function _(V) {
      for (var pe = arguments.length, we = new Array(pe > 1 ? pe - 1 : 0), Re = 1; Re < pe; Re++) we[Re - 1] = arguments[Re];
      C("error", V, we);
    }
    function C(V, pe, we) {
      var Re = y.ReactDebugCurrentFrame.getStackAddendum();
      Re !== "" && (pe += "%s", we = we.concat([Re]));
      var tn = we.map(function(Cn) {
        return String(Cn);
      });
      tn.unshift("Warning: " + pe), Function.prototype.apply.call(console[V], console, tn);
    }
    function g(V) {
      return V._reactInternals;
    }
    function U(V) {
      var pe = V, we = V;
      if (V.alternate) for (; pe.return; ) pe = pe.return;
      else {
        var Re = pe;
        do
          4098 & (pe = Re).flags && (we = pe.return), Re = pe.return;
        while (Re);
      }
      return pe.tag === 3 ? we : null;
    }
    function j(V) {
      if (U(V) !== V) throw new Error("Unable to find node on an unmounted component.");
    }
    y.ReactCurrentOwner;
    var S = Object.assign;
    function T(V) {
      var pe, we = V.keyCode;
      return "charCode" in V ? (pe = V.charCode) === 0 && we === 13 && (pe = 13) : pe = we, pe === 10 && (pe = 13), pe >= 32 || pe === 13 ? pe : 0;
    }
    function M() {
      return !0;
    }
    function F() {
      return !1;
    }
    function z(V) {
      function pe(we, Re, tn, Cn, He) {
        for (var Sn in this._reactName = we, this._targetInst = tn, this.type = Re, this.nativeEvent = Cn, this.target = He, this.currentTarget = null, V) if (V.hasOwnProperty(Sn)) {
          var bt = V[Sn];
          this[Sn] = bt ? bt(Cn) : Cn[Sn];
        }
        var An = Cn.defaultPrevented != null ? Cn.defaultPrevented : Cn.returnValue === !1;
        return this.isDefaultPrevented = An ? M : F, this.isPropagationStopped = F, this;
      }
      return S(pe.prototype, { preventDefault: function() {
        this.defaultPrevented = !0;
        var we = this.nativeEvent;
        we && (we.preventDefault ? we.preventDefault() : typeof we.returnValue != "unknown" && (we.returnValue = !1), this.isDefaultPrevented = M);
      }, stopPropagation: function() {
        var we = this.nativeEvent;
        we && (we.stopPropagation ? we.stopPropagation() : typeof we.cancelBubble != "unknown" && (we.cancelBubble = !0), this.isPropagationStopped = M);
      }, persist: function() {
      }, isPersistent: M }), pe;
    }
    var Y, ae, re, $ = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(V) {
      return V.timeStamp || Date.now();
    }, defaultPrevented: 0, isTrusted: 0 }, ne = z($), ge = S({}, $, { view: 0, detail: 0 });
    z(ge);
    var Ie = S({}, ge, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ue, button: 0, buttons: 0, relatedTarget: function(V) {
      return V.relatedTarget === void 0 ? V.fromElement === V.srcElement ? V.toElement : V.fromElement : V.relatedTarget;
    }, movementX: function(V) {
      return "movementX" in V ? V.movementX : (function(pe) {
        pe !== re && (re && pe.type === "mousemove" ? (Y = pe.screenX - re.screenX, ae = pe.screenY - re.screenY) : (Y = 0, ae = 0), re = pe);
      }(V), Y);
    }, movementY: function(V) {
      return "movementY" in V ? V.movementY : ae;
    } });
    z(Ie), z(S({}, Ie, { dataTransfer: 0 })), z(S({}, ge, { relatedTarget: 0 })), z(S({}, $, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })), z(S({}, $, { clipboardData: function(V) {
      return "clipboardData" in V ? V.clipboardData : window.clipboardData;
    } })), z(S({}, $, { data: 0 }));
    var We = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, xe = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, Le = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
    function be(V) {
      var pe = this.nativeEvent;
      if (pe.getModifierState) return pe.getModifierState(V);
      var we = Le[V];
      return !!we && !!pe[we];
    }
    function ue(V) {
      return be;
    }
    z(S({}, ge, { key: function(V) {
      if (V.key) {
        var pe = We[V.key] || V.key;
        if (pe !== "Unidentified") return pe;
      }
      if (V.type === "keypress") {
        var we = T(V);
        return we === 13 ? "Enter" : String.fromCharCode(we);
      }
      return V.type === "keydown" || V.type === "keyup" ? xe[V.keyCode] || "Unidentified" : "";
    }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ue, charCode: function(V) {
      return V.type === "keypress" ? T(V) : 0;
    }, keyCode: function(V) {
      return V.type === "keydown" || V.type === "keyup" ? V.keyCode : 0;
    }, which: function(V) {
      return V.type === "keypress" ? T(V) : V.type === "keydown" || V.type === "keyup" ? V.keyCode : 0;
    } })), z(S({}, Ie, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 })), z(S({}, ge, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ue })), z(S({}, $, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })), z(S({}, Ie, { deltaX: function(V) {
      return "deltaX" in V ? V.deltaX : "wheelDeltaX" in V ? -V.wheelDeltaX : 0;
    }, deltaY: function(V) {
      return "deltaY" in V ? V.deltaY : "wheelDeltaY" in V ? -V.wheelDeltaY : "wheelDelta" in V ? -V.wheelDelta : 0;
    }, deltaZ: 0, deltaMode: 0 }));
    function nn(V, pe, we, Re, tn, Cn, He, Sn, bt) {
      var An = Array.prototype.slice.call(arguments, 3);
      try {
        pe.apply(we, An);
      } catch (et) {
        this.onError(et);
      }
    }
    var pn = nn;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Ze = document.createElement("react");
      pn = function(V, pe, we, Re, tn, Cn, He, Sn, bt) {
        if (typeof document > "u" || document === null) throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var An = document.createEvent("Event"), et = !1, Hn = !0, Ht = window.event, da = Object.getOwnPropertyDescriptor(window, "event");
        function fa() {
          Ze.removeEventListener(En, Ra, !1), window.event !== void 0 && window.hasOwnProperty("event") && (window.event = Ht);
        }
        var it, wt = Array.prototype.slice.call(arguments, 3);
        function Ra() {
          et = !0, fa(), pe.apply(we, wt), Hn = !1;
        }
        var Xs = !1, Ka = !1;
        function So(Xa) {
          if (it = Xa.error, Xs = !0, it === null && Xa.colno === 0 && Xa.lineno === 0 && (Ka = !0), Xa.defaultPrevented && it != null && typeof it == "object") try {
            it._suppressLogging = !0;
          } catch {
          }
        }
        var En = "react-" + (V || "invokeguardedcallback");
        if (window.addEventListener("error", So), Ze.addEventListener(En, Ra, !1), An.initEvent(En, !1, !1), Ze.dispatchEvent(An), da && Object.defineProperty(window, "event", da), et && Hn && (Xs ? Ka && (it = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : it = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(it)), window.removeEventListener("error", So), !et) return fa(), nn.apply(this, arguments);
      };
    }
    var gn = pn, ve = !1, Ve = null, mn = !1, he = null, an = { onError: function(V) {
      ve = !0, Ve = V;
    } };
    function ce(V, pe, we, Re, tn, Cn, He, Sn, bt) {
      ve = !1, Ve = null, gn.apply(an, arguments);
    }
    function De(V, pe, we, Re, tn, Cn, He, Sn, bt) {
      if (ce.apply(this, arguments), ve) {
        var An = function() {
          if (ve) {
            var et = Ve;
            return ve = !1, Ve = null, et;
          }
          throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
        }();
        mn || (mn = !0, he = An);
      }
    }
    var Ee = Array.isArray;
    function je(V) {
      return Ee(V);
    }
    var Q = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events, Te = Q[0], Oe = Q[1], ze = Q[2], _e = Q[3], Qe = Q[4], rn = f.unstable_act;
    function xn(V) {
    }
    var Dn = !1;
    function kn(V, pe) {
      if (!V) return [];
      var we = function(He) {
        var Sn = He.alternate;
        if (!Sn) {
          var bt = U(He);
          if (bt === null) throw new Error("Unable to find node on an unmounted component.");
          return bt !== He ? null : He;
        }
        for (var An = He, et = Sn; ; ) {
          var Hn = An.return;
          if (Hn === null) break;
          var Ht = Hn.alternate;
          if (Ht === null) {
            var da = Hn.return;
            if (da !== null) {
              An = et = da;
              continue;
            }
            break;
          }
          if (Hn.child === Ht.child) {
            for (var fa = Hn.child; fa; ) {
              if (fa === An) return j(Hn), He;
              if (fa === et) return j(Hn), Sn;
              fa = fa.sibling;
            }
            throw new Error("Unable to find node on an unmounted component.");
          }
          if (An.return !== et.return) An = Hn, et = Ht;
          else {
            for (var it = !1, wt = Hn.child; wt; ) {
              if (wt === An) {
                it = !0, An = Hn, et = Ht;
                break;
              }
              if (wt === et) {
                it = !0, et = Hn, An = Ht;
                break;
              }
              wt = wt.sibling;
            }
            if (!it) {
              for (wt = Ht.child; wt; ) {
                if (wt === An) {
                  it = !0, An = Ht, et = Hn;
                  break;
                }
                if (wt === et) {
                  it = !0, et = Ht, An = Hn;
                  break;
                }
                wt = wt.sibling;
              }
              if (!it) throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
            }
          }
          if (An.alternate !== et) throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
        }
        if (An.tag !== 3) throw new Error("Unable to find node on an unmounted component.");
        return An.stateNode.current === An ? He : Sn;
      }(V);
      if (!we) return [];
      for (var Re = we, tn = []; ; ) {
        if (Re.tag === 5 || Re.tag === 6 || Re.tag === 1 || Re.tag === 0) {
          var Cn = Re.stateNode;
          pe(Cn) && tn.push(Cn);
        }
        if (Re.child) Re.child.return = Re, Re = Re.child;
        else {
          if (Re === we) return tn;
          for (; !Re.sibling; ) {
            if (!Re.return || Re.return === we) return tn;
            Re = Re.return;
          }
          Re.sibling.return = Re.return, Re = Re.sibling;
        }
      }
    }
    function ot(V, pe) {
      if (V && !g(V)) {
        var we, Re = String(V);
        throw we = je(V) ? "an array" : V && V.nodeType === 1 && V.tagName ? "a DOM node" : Re === "[object Object]" ? "object with keys {" + Object.keys(V).join(", ") + "}" : Re, new Error(pe + "(...): the first argument must be a React class instance. Instead received: " + we + ".");
      }
    }
    var gr = !1;
    function tr(V) {
      return !(!V || V.nodeType !== 1 || !V.tagName);
    }
    function rr(V) {
      return !tr(V) && V != null && typeof V.render == "function" && typeof V.setState == "function";
    }
    function zn(V, pe) {
      return !!rr(V) && g(V).type === pe;
    }
    function B(V, pe) {
      return ot(V, "findAllInRenderedTree"), V ? kn(g(V), pe) : [];
    }
    function Ce(V, pe) {
      return ot(V, "scryRenderedDOMComponentsWithClass"), B(V, function(we) {
        if (tr(we)) {
          var Re = we.className;
          typeof Re != "string" && (Re = we.getAttribute("class") || "");
          var tn = Re.split(/\s+/);
          if (!je(pe)) {
            if (pe === void 0) throw new Error("TestUtils.scryRenderedDOMComponentsWithClass expects a className as a second argument.");
            pe = pe.split(/\s+/);
          }
          return pe.every(function(Cn) {
            return tn.indexOf(Cn) !== -1;
          });
        }
        return !1;
      });
    }
    function Pe(V, pe) {
      return ot(V, "scryRenderedDOMComponentsWithTag"), B(V, function(we) {
        return tr(we) && we.tagName.toUpperCase() === pe.toUpperCase();
      });
    }
    function yn(V, pe) {
      return ot(V, "scryRenderedComponentsWithType"), B(V, function(we) {
        return zn(we, pe);
      });
    }
    function lt(V, pe, we) {
      var Re = V.type || "unknown-event";
      V.currentTarget = Oe(we), De(Re, pe, void 0, V), V.currentTarget = null;
    }
    var Fn = function(V) {
      V && (function(pe) {
        var we = pe._dispatchListeners, Re = pe._dispatchInstances;
        if (je(we)) for (var tn = 0; tn < we.length && !pe.isPropagationStopped(); tn++) lt(pe, we[tn], Re[tn]);
        else we && lt(pe, we, Re);
        pe._dispatchListeners = null, pe._dispatchInstances = null;
      }(V), V.isPersistent() || V.constructor.release(V));
    };
    function cn(V) {
      do
        V = V.return;
      while (V && V.tag !== 5);
      return V || null;
    }
    function sn(V, pe, we) {
      for (var Re, tn = []; V; ) tn.push(V), V = cn(V);
      for (Re = tn.length; Re-- > 0; ) pe(tn[Re], "captured", we);
      for (Re = 0; Re < tn.length; Re++) pe(tn[Re], "bubbled", we);
    }
    function Nn(V, pe) {
      var we = V.stateNode;
      if (!we) return null;
      var Re = ze(we);
      if (!Re) return null;
      var tn = Re[pe];
      if (function(Cn, He, Sn) {
        switch (Cn) {
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
            return !(!Sn.disabled || (bt = He, bt !== "button" && bt !== "input" && bt !== "select" && bt !== "textarea"));
          default:
            return !1;
        }
        var bt;
      }(pe, V.type, Re)) return null;
      if (tn && typeof tn != "function") throw new Error("Expected `" + pe + "` listener to be a function, instead got a value of `" + typeof tn + "` type.");
      return tn;
    }
    function hn(V, pe, we) {
      V || _("Dispatching inst must not be null");
      var Re = function(tn, Cn, He) {
        var Sn = Cn._reactName;
        return He === "captured" && (Sn += "Capture"), Nn(tn, Sn);
      }(V, we, pe);
      Re && (we._dispatchListeners == null && (we._dispatchListeners = []), we._dispatchInstances == null && (we._dispatchInstances = []), we._dispatchListeners.push(Re), we._dispatchInstances.push(V));
    }
    function bn(V) {
      V && V._reactName && function(pe, we, Re) {
        if (pe && Re && Re._reactName) {
          var tn = Nn(pe, Re._reactName);
          tn && (Re._dispatchListeners == null && (Re._dispatchListeners = []), Re._dispatchInstances == null && (Re._dispatchInstances = []), Re._dispatchListeners.push(tn), Re._dispatchInstances.push(pe));
        }
      }(V._targetInst, 0, V);
    }
    var Ot = {}, Lt = /* @__PURE__ */ new Set(["mouseEnter", "mouseLeave", "pointerEnter", "pointerLeave"]);
    function Qr(V) {
      return function(pe, we) {
        if (f.isValidElement(pe)) throw new Error("TestUtils.Simulate expected a DOM node as the first argument but received a React element. Pass the DOM node you wish to simulate the event on instead. Note that TestUtils.Simulate will not work if you are using shallow rendering.");
        if (rr(pe)) throw new Error("TestUtils.Simulate expected a DOM node as the first argument but received a component instance. Pass the DOM node you wish to simulate the event on instead.");
        var Re = "on" + V[0].toUpperCase() + V.slice(1), tn = new xn();
        tn.target = pe, tn.type = V.toLowerCase();
        var Cn = Te(pe), He = new ne(Re, tn.type, Cn, tn, pe);
        He.persist(), S(He, we), Lt.has(V) ? bn(He) : function(Sn) {
          Sn && Sn._reactName && sn(Sn._targetInst, hn, Sn);
        }(He), h.unstable_batchedUpdates(function() {
          _e(pe), Fn(He), function() {
            if (mn) {
              var Sn = he;
              throw mn = !1, he = null, Sn;
            }
          }();
        }), Qe();
      };
    }
    ["blur", "cancel", "click", "close", "contextMenu", "copy", "cut", "auxClick", "doubleClick", "dragEnd", "dragStart", "drop", "focus", "input", "invalid", "keyDown", "keyPress", "keyUp", "mouseDown", "mouseUp", "paste", "pause", "play", "pointerCancel", "pointerDown", "pointerUp", "rateChange", "reset", "resize", "seeked", "submit", "touchCancel", "touchEnd", "touchStart", "volumeChange", "drag", "dragEnter", "dragExit", "dragLeave", "dragOver", "mouseMove", "mouseOut", "mouseOver", "pointerMove", "pointerOut", "pointerOver", "scroll", "toggle", "touchMove", "wheel", "abort", "animationEnd", "animationIteration", "animationStart", "canPlay", "canPlayThrough", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "playing", "progress", "seeking", "stalled", "suspend", "timeUpdate", "transitionEnd", "waiting", "mouseEnter", "mouseLeave", "pointerEnter", "pointerLeave", "change", "select", "beforeInput", "compositionEnd", "compositionStart", "compositionUpdate"].forEach(function(V) {
      Ot[V] = Qr(V);
    });
    var cl = !1;
    Dt.Simulate = Ot, Dt.act = function(V) {
      return cl || (cl = !0, _("`ReactDOMTestUtils.act` is deprecated in favor of `React.act`. Import `act` from `react` instead of `react-dom/test-utils`. See https://react.dev/warnings/react-dom-test-utils for more info.")), rn(V);
    }, Dt.findAllInRenderedTree = B, Dt.findRenderedComponentWithType = function(V, pe) {
      ot(V, "findRenderedComponentWithType");
      var we = yn(V, pe);
      if (we.length !== 1) throw new Error("Did not find exactly one match (found: " + we.length + ") for componentType:" + pe);
      return we[0];
    }, Dt.findRenderedDOMComponentWithClass = function(V, pe) {
      ot(V, "findRenderedDOMComponentWithClass");
      var we = Ce(V, pe);
      if (we.length !== 1) throw new Error("Did not find exactly one match (found: " + we.length + ") for class:" + pe);
      return we[0];
    }, Dt.findRenderedDOMComponentWithTag = function(V, pe) {
      ot(V, "findRenderedDOMComponentWithTag");
      var we = Pe(V, pe);
      if (we.length !== 1) throw new Error("Did not find exactly one match (found: " + we.length + ") for tag:" + pe);
      return we[0];
    }, Dt.isCompositeComponent = rr, Dt.isCompositeComponentWithType = zn, Dt.isDOMComponent = tr, Dt.isDOMComponentElement = function(V) {
      return !!(V && f.isValidElement(V) && V.tagName);
    }, Dt.isElement = function(V) {
      return f.isValidElement(V);
    }, Dt.isElementOfType = function(V, pe) {
      return f.isValidElement(V) && V.type === pe;
    }, Dt.mockComponent = function(V, pe) {
      return Dn || (Dn = !0, function(we) {
        for (var Re = arguments.length, tn = new Array(Re > 1 ? Re - 1 : 0), Cn = 1; Cn < Re; Cn++) tn[Cn - 1] = arguments[Cn];
        C("warn", we, tn);
      }(`ReactTestUtils.mockComponent() is deprecated. Use shallow rendering or jest.mock() instead.

See https://reactjs.org/link/test-utils-mock-component for more information.`)), pe = pe || V.mockTagName || "div", V.prototype.render.mockImplementation(function() {
        return f.createElement(pe, null, this.props.children);
      }), this;
    }, Dt.nativeTouchData = function(V, pe) {
      return { touches: [{ pageX: V, pageY: pe }] };
    }, Dt.renderIntoDocument = function(V) {
      gr || (gr = !0, _("ReactDOMTestUtils is deprecated and will be removed in a future major release, because it exposes internal implementation details that are highly likely to change between releases. Upgrade to a modern testing library, such as @testing-library/react. See https://react.dev/warnings/react-dom-test-utils for more info."));
      var pe = document.createElement("div");
      return h.render(V, pe);
    }, Dt.scryRenderedComponentsWithType = yn, Dt.scryRenderedDOMComponentsWithClass = Ce, Dt.scryRenderedDOMComponentsWithTag = Pe, Dt.traverseTwoPhase = sn;
  }()), Dt;
}
var qS = (a1 || (a1 = 1, process.env.NODE_ENV === "production" ? Cy.exports = HS() : Cy.exports = $S()), Cy.exports);
const Fh = Q1(Yh());
var o1, sd = {}, i1, l1 = function() {
  if (o1) return sd;
  o1 = 1;
  var f = Yh();
  if (process.env.NODE_ENV === "production") sd.createRoot = f.createRoot, sd.hydrateRoot = f.hydrateRoot;
  else {
    var h = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    sd.createRoot = function(y, _) {
      h.usingClientEntryPoint = !0;
      try {
        return f.createRoot(y, _);
      } finally {
        h.usingClientEntryPoint = !1;
      }
    }, sd.hydrateRoot = function(y, _, C) {
      h.usingClientEntryPoint = !0;
      try {
        return f.hydrateRoot(y, _, C);
      } finally {
        h.usingClientEntryPoint = !1;
      }
    };
  }
  return sd;
}(), mi = {}, u1 = { exports: {} };
function K1() {
  return i1 || (i1 = 1, function(f) {
    const h = (_ = 0) => (C) => `\x1B[${38 + _};5;${C}m`, y = (_ = 0) => (C, g, U) => `\x1B[${38 + _};2;${C};${g};${U}m`;
    Object.defineProperty(f, "exports", { enumerable: !0, get: function() {
      const _ = /* @__PURE__ */ new Map(), C = { modifier: { reset: [0, 0], bold: [1, 22], dim: [2, 22], italic: [3, 23], underline: [4, 24], overline: [53, 55], inverse: [7, 27], hidden: [8, 28], strikethrough: [9, 29] }, color: { black: [30, 39], red: [31, 39], green: [32, 39], yellow: [33, 39], blue: [34, 39], magenta: [35, 39], cyan: [36, 39], white: [37, 39], blackBright: [90, 39], redBright: [91, 39], greenBright: [92, 39], yellowBright: [93, 39], blueBright: [94, 39], magentaBright: [95, 39], cyanBright: [96, 39], whiteBright: [97, 39] }, bgColor: { bgBlack: [40, 49], bgRed: [41, 49], bgGreen: [42, 49], bgYellow: [43, 49], bgBlue: [44, 49], bgMagenta: [45, 49], bgCyan: [46, 49], bgWhite: [47, 49], bgBlackBright: [100, 49], bgRedBright: [101, 49], bgGreenBright: [102, 49], bgYellowBright: [103, 49], bgBlueBright: [104, 49], bgMagentaBright: [105, 49], bgCyanBright: [106, 49], bgWhiteBright: [107, 49] } };
      C.color.gray = C.color.blackBright, C.bgColor.bgGray = C.bgColor.bgBlackBright, C.color.grey = C.color.blackBright, C.bgColor.bgGrey = C.bgColor.bgBlackBright;
      for (const [g, U] of Object.entries(C)) {
        for (const [j, S] of Object.entries(U)) C[j] = { open: `\x1B[${S[0]}m`, close: `\x1B[${S[1]}m` }, U[j] = C[j], _.set(S[0], S[1]);
        Object.defineProperty(C, g, { value: U, enumerable: !1 });
      }
      return Object.defineProperty(C, "codes", { value: _, enumerable: !1 }), C.color.close = "\x1B[39m", C.bgColor.close = "\x1B[49m", C.color.ansi256 = h(), C.color.ansi16m = y(), C.bgColor.ansi256 = h(10), C.bgColor.ansi16m = y(10), Object.defineProperties(C, { rgbToAnsi256: { value: (g, U, j) => g === U && U === j ? g < 8 ? 16 : g > 248 ? 231 : Math.round((g - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(g / 255 * 5) + 6 * Math.round(U / 255 * 5) + Math.round(j / 255 * 5), enumerable: !1 }, hexToRgb: { value: (g) => {
        const U = /(?<colorString>[a-f\d]{6}|[a-f\d]{3})/i.exec(g.toString(16));
        if (!U) return [0, 0, 0];
        let { colorString: j } = U.groups;
        j.length === 3 && (j = j.split("").map((T) => T + T).join(""));
        const S = Number.parseInt(j, 16);
        return [S >> 16 & 255, S >> 8 & 255, 255 & S];
      }, enumerable: !1 }, hexToAnsi256: { value: (g) => C.rgbToAnsi256(...C.hexToRgb(g)), enumerable: !1 } }), C;
    } });
  }(u1)), u1.exports;
}
var s1, Hs = {};
function Bh() {
  if (s1) return Hs;
  s1 = 1, Object.defineProperty(Hs, "__esModule", { value: !0 }), Hs.printIteratorEntries = function(h, y, _, C, g, U, j = ": ") {
    let S = "", T = h.next();
    if (!T.done) {
      S += y.spacingOuter;
      const M = _ + y.indent;
      for (; !T.done; )
        S += M + U(T.value[0], y, M, C, g) + j + U(T.value[1], y, M, C, g), T = h.next(), T.done ? y.min || (S += ",") : S += "," + y.spacingInner;
      S += y.spacingOuter + _;
    }
    return S;
  }, Hs.printIteratorValues = function(h, y, _, C, g, U) {
    let j = "", S = h.next();
    if (!S.done) {
      j += y.spacingOuter;
      const T = _ + y.indent;
      for (; !S.done; ) j += T + U(S.value, y, T, C, g), S = h.next(), S.done ? y.min || (j += ",") : j += "," + y.spacingInner;
      j += y.spacingOuter + _;
    }
    return j;
  }, Hs.printListItems = function(h, y, _, C, g, U) {
    let j = "";
    if (h.length) {
      j += y.spacingOuter;
      const S = _ + y.indent;
      for (let T = 0; T < h.length; T++) j += S, T in h && (j += U(h[T], y, S, C, g)), T < h.length - 1 ? j += "," + y.spacingInner : y.min || (j += ",");
      j += y.spacingOuter + _;
    }
    return j;
  }, Hs.printObjectProperties = function(h, y, _, C, g, U) {
    let j = "";
    const S = f(h, y.compareKeys);
    if (S.length) {
      j += y.spacingOuter;
      const T = _ + y.indent;
      for (let M = 0; M < S.length; M++) {
        const F = S[M];
        j += T + U(F, y, T, C, g) + ": " + U(h[F], y, T, C, g), M < S.length - 1 ? j += "," + y.spacingInner : y.min || (j += ",");
      }
      j += y.spacingOuter + _;
    }
    return j;
  };
  const f = (h, y) => {
    const _ = Object.keys(h).sort(y);
    return Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(h).forEach((C) => {
      Object.getOwnPropertyDescriptor(h, C).enumerable && _.push(C);
    }), _;
  };
  return Hs;
}
var c1, Zi = {}, d1, f1, p1, el = {};
function QS() {
  if (p1) return el;
  p1 = 1, Object.defineProperty(el, "__esModule", { value: !0 }), el.test = el.serialize = el.default = void 0;
  var f = y(f1 ? d1 : (f1 = 1, d1 = ({ onlyFirst: U = !1 } = {}) => {
    const j = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");
    return new RegExp(j, U ? void 0 : "g");
  })), h = y(K1());
  function y(U) {
    return U && U.__esModule ? U : { default: U };
  }
  const _ = (U) => typeof U == "string" && !!U.match((0, f.default)());
  el.test = _;
  const C = (U, j, S, T, M, F) => F(U.replace((0, f.default)(), (z) => {
    switch (z) {
      case h.default.red.close:
      case h.default.green.close:
      case h.default.cyan.close:
      case h.default.gray.close:
      case h.default.white.close:
      case h.default.yellow.close:
      case h.default.bgRed.close:
      case h.default.bgGreen.close:
      case h.default.bgYellow.close:
      case h.default.inverse.close:
      case h.default.dim.close:
      case h.default.bold.close:
      case h.default.reset.open:
      case h.default.reset.close:
        return "</>";
      case h.default.red.open:
        return "<red>";
      case h.default.green.open:
        return "<green>";
      case h.default.cyan.open:
        return "<cyan>";
      case h.default.gray.open:
        return "<gray>";
      case h.default.white.open:
        return "<white>";
      case h.default.yellow.open:
        return "<yellow>";
      case h.default.bgRed.open:
        return "<bgRed>";
      case h.default.bgGreen.open:
        return "<bgGreen>";
      case h.default.bgYellow.open:
        return "<bgYellow>";
      case h.default.inverse.open:
        return "<inverse>";
      case h.default.dim.open:
        return "<dim>";
      case h.default.bold.open:
        return "<bold>";
      default:
        return "";
    }
  }), j, S, T, M);
  el.serialize = C;
  var g = { serialize: C, test: _ };
  return el.default = g, el;
}
var m1, nl = {};
function YS() {
  if (m1) return nl;
  m1 = 1, Object.defineProperty(nl, "__esModule", { value: !0 }), nl.test = nl.serialize = nl.default = void 0;
  var f = Bh();
  const h = ["DOMStringMap", "NamedNodeMap"], y = /^(HTML\w*Collection|NodeList)$/, _ = (U) => {
    return U && U.constructor && !!U.constructor.name && (j = U.constructor.name, h.indexOf(j) !== -1 || y.test(j));
    var j;
  };
  nl.test = _;
  const C = (U, j, S, T, M, F) => {
    const z = U.constructor.name;
    return ++T > j.maxDepth ? "[" + z + "]" : (j.min ? "" : z + " ") + (h.indexOf(z) !== -1 ? "{" + (0, f.printObjectProperties)(((Y) => Y.constructor.name === "NamedNodeMap")(U) ? Array.from(U).reduce((Y, ae) => (Y[ae.name] = ae.value, Y), {}) : { ...U }, j, S, T, M, F) + "}" : "[" + (0, f.printListItems)(Array.from(U), j, S, T, M, F) + "]");
  };
  nl.serialize = C;
  var g = { serialize: C, test: _ };
  return nl.default = g, nl;
}
var h1, v1, g1, tl = {}, qr = {}, Py = {};
function Ky() {
  if (v1) return qr;
  v1 = 1, Object.defineProperty(qr, "__esModule", { value: !0 }), qr.printText = qr.printProps = qr.printElementAsLeaf = qr.printElement = qr.printComment = qr.printChildren = void 0;
  var f, h = (h1 || (h1 = 1, Object.defineProperty(Py, "__esModule", { value: !0 }), Py.default = function(_) {
    return _.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }), (f = Py) && f.__esModule ? f : { default: f });
  qr.printProps = (_, C, g, U, j, S, T) => {
    const M = U + g.indent, F = g.colors;
    return _.map((z) => {
      const Y = C[z];
      let ae = T(Y, g, M, j, S);
      return typeof Y != "string" && (ae.indexOf(`
`) !== -1 && (ae = g.spacingOuter + M + ae + g.spacingOuter + U), ae = "{" + ae + "}"), g.spacingInner + U + F.prop.open + z + F.prop.close + "=" + F.value.open + ae + F.value.close;
    }).join("");
  }, qr.printChildren = (_, C, g, U, j, S) => _.map((T) => C.spacingOuter + g + (typeof T == "string" ? y(T, C) : S(T, C, g, U, j))).join("");
  const y = (_, C) => {
    const g = C.colors.content;
    return g.open + (0, h.default)(_) + g.close;
  };
  return qr.printText = y, qr.printComment = (_, C) => {
    const g = C.colors.comment;
    return g.open + "<!--" + (0, h.default)(_) + "-->" + g.close;
  }, qr.printElement = (_, C, g, U, j) => {
    const S = U.colors.tag;
    return S.open + "<" + _ + (C && S.close + C + U.spacingOuter + j + S.open) + (g ? ">" + S.close + g + U.spacingOuter + j + S.open + "</" + _ : (C && !U.min ? "" : " ") + "/") + ">" + S.close;
  }, qr.printElementAsLeaf = (_, C) => {
    const g = C.colors.tag;
    return g.open + "<" + _ + g.close + " …" + g.open + " />" + g.close;
  }, qr;
}
function KS() {
  if (g1) return tl;
  g1 = 1, Object.defineProperty(tl, "__esModule", { value: !0 }), tl.test = tl.serialize = tl.default = void 0;
  var f = Ky();
  const h = /^((HTML|SVG)\w*)?Element$/, y = (U) => {
    var j;
    return (U == null || (j = U.constructor) === null || j === void 0 ? void 0 : j.name) && ((S) => {
      const T = S.constructor.name, { nodeType: M, tagName: F } = S, z = typeof F == "string" && F.includes("-") || ((Y) => {
        try {
          return typeof Y.hasAttribute == "function" && Y.hasAttribute("is");
        } catch {
          return !1;
        }
      })(S);
      return M === 1 && (h.test(T) || z) || M === 3 && T === "Text" || M === 8 && T === "Comment" || M === 11 && T === "DocumentFragment";
    })(U);
  };
  function _(U) {
    return U.nodeType === 11;
  }
  tl.test = y;
  const C = (U, j, S, T, M, F) => {
    if (function(Y) {
      return Y.nodeType === 3;
    }(U)) return (0, f.printText)(U.data, j);
    if (function(Y) {
      return Y.nodeType === 8;
    }(U)) return (0, f.printComment)(U.data, j);
    const z = _(U) ? "DocumentFragment" : U.tagName.toLowerCase();
    return ++T > j.maxDepth ? (0, f.printElementAsLeaf)(z, j) : (0, f.printElement)(z, (0, f.printProps)(_(U) ? [] : Array.from(U.attributes).map((Y) => Y.name).sort(), _(U) ? {} : Array.from(U.attributes).reduce((Y, ae) => (Y[ae.name] = ae.value, Y), {}), j, S + j.indent, T, M, F), (0, f.printChildren)(Array.prototype.slice.call(U.childNodes || U.children), j, S + j.indent, T, M, F), j, S);
  };
  tl.serialize = C;
  var g = { serialize: C, test: y };
  return tl.default = g, tl;
}
var y1, rl = {};
function XS() {
  if (y1) return rl;
  y1 = 1, Object.defineProperty(rl, "__esModule", { value: !0 }), rl.test = rl.serialize = rl.default = void 0;
  var f = Bh();
  const h = "@@__IMMUTABLE_ORDERED__@@", y = (T) => "Immutable." + T, _ = (T) => "[" + T + "]", C = " ", g = (T, M, F, z, Y, ae, re) => ++z > M.maxDepth ? _(y(re)) : y(re) + C + "[" + (0, f.printIteratorValues)(T.values(), M, F, z, Y, ae) + "]", U = (T, M, F, z, Y, ae) => T["@@__IMMUTABLE_MAP__@@"] ? ((re, $, ne, ge, Ie, We, xe) => ++ge > $.maxDepth ? _(y(xe)) : y(xe) + C + "{" + (0, f.printIteratorEntries)(re.entries(), $, ne, ge, Ie, We) + "}")(T, M, F, z, Y, ae, T[h] ? "OrderedMap" : "Map") : T["@@__IMMUTABLE_LIST__@@"] ? g(T, M, F, z, Y, ae, "List") : T["@@__IMMUTABLE_SET__@@"] ? g(T, M, F, z, Y, ae, T[h] ? "OrderedSet" : "Set") : T["@@__IMMUTABLE_STACK__@@"] ? g(T, M, F, z, Y, ae, "Stack") : T["@@__IMMUTABLE_SEQ__@@"] ? ((re, $, ne, ge, Ie, We) => {
    const xe = y("Seq");
    return ++ge > $.maxDepth ? _(xe) : re["@@__IMMUTABLE_KEYED__@@"] ? xe + C + "{" + (re._iter || re._object ? (0, f.printIteratorEntries)(re.entries(), $, ne, ge, Ie, We) : "…") + "}" : xe + C + "[" + (re._iter || re._array || re._collection || re._iterable ? (0, f.printIteratorValues)(re.values(), $, ne, ge, Ie, We) : "…") + "]";
  })(T, M, F, z, Y, ae) : ((re, $, ne, ge, Ie, We) => {
    const xe = y(re._name || "Record");
    return ++ge > $.maxDepth ? _(xe) : xe + C + "{" + (0, f.printIteratorEntries)(/* @__PURE__ */ function(Le) {
      let be = 0;
      return { next() {
        if (be < Le._keys.length) {
          const ue = Le._keys[be++];
          return { done: !1, value: [ue, Le.get(ue)] };
        }
        return { done: !0, value: void 0 };
      } };
    }(re), $, ne, ge, Ie, We) + "}";
  })(T, M, F, z, Y, ae);
  rl.serialize = U;
  const j = (T) => T && (T["@@__IMMUTABLE_ITERABLE__@@"] === !0 || T["@@__IMMUTABLE_RECORD__@@"] === !0);
  rl.test = j;
  var S = { serialize: U, test: j };
  return rl.default = S, rl;
}
var b1, al = {}, Ry = { exports: {} }, Kn = {}, w1, k1, S1, Zn = {};
/** @license React v17.0.2
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function GS() {
  return k1 || (k1 = 1, process.env.NODE_ENV === "production" ? Ry.exports = function() {
    if (b1) return Kn;
    b1 = 1;
    var f = 60103, h = 60106, y = 60107, _ = 60108, C = 60114, g = 60109, U = 60110, j = 60112, S = 60113, T = 60120, M = 60115, F = 60116, z = 60121, Y = 60122, ae = 60117, re = 60129, $ = 60131;
    if (typeof Symbol == "function" && Symbol.for) {
      var ne = Symbol.for;
      f = ne("react.element"), h = ne("react.portal"), y = ne("react.fragment"), _ = ne("react.strict_mode"), C = ne("react.profiler"), g = ne("react.provider"), U = ne("react.context"), j = ne("react.forward_ref"), S = ne("react.suspense"), T = ne("react.suspense_list"), M = ne("react.memo"), F = ne("react.lazy"), z = ne("react.block"), Y = ne("react.server.block"), ae = ne("react.fundamental"), re = ne("react.debug_trace_mode"), $ = ne("react.legacy_hidden");
    }
    function ge(ve) {
      if (typeof ve == "object" && ve !== null) {
        var Ve = ve.$$typeof;
        switch (Ve) {
          case f:
            switch (ve = ve.type) {
              case y:
              case C:
              case _:
              case S:
              case T:
                return ve;
              default:
                switch (ve = ve && ve.$$typeof) {
                  case U:
                  case j:
                  case F:
                  case M:
                  case g:
                    return ve;
                  default:
                    return Ve;
                }
            }
          case h:
            return Ve;
        }
      }
    }
    var Ie = g, We = f, xe = j, Le = y, be = F, ue = M, nn = h, pn = C, Ze = _, gn = S;
    return Kn.ContextConsumer = U, Kn.ContextProvider = Ie, Kn.Element = We, Kn.ForwardRef = xe, Kn.Fragment = Le, Kn.Lazy = be, Kn.Memo = ue, Kn.Portal = nn, Kn.Profiler = pn, Kn.StrictMode = Ze, Kn.Suspense = gn, Kn.isAsyncMode = function() {
      return !1;
    }, Kn.isConcurrentMode = function() {
      return !1;
    }, Kn.isContextConsumer = function(ve) {
      return ge(ve) === U;
    }, Kn.isContextProvider = function(ve) {
      return ge(ve) === g;
    }, Kn.isElement = function(ve) {
      return typeof ve == "object" && ve !== null && ve.$$typeof === f;
    }, Kn.isForwardRef = function(ve) {
      return ge(ve) === j;
    }, Kn.isFragment = function(ve) {
      return ge(ve) === y;
    }, Kn.isLazy = function(ve) {
      return ge(ve) === F;
    }, Kn.isMemo = function(ve) {
      return ge(ve) === M;
    }, Kn.isPortal = function(ve) {
      return ge(ve) === h;
    }, Kn.isProfiler = function(ve) {
      return ge(ve) === C;
    }, Kn.isStrictMode = function(ve) {
      return ge(ve) === _;
    }, Kn.isSuspense = function(ve) {
      return ge(ve) === S;
    }, Kn.isValidElementType = function(ve) {
      return typeof ve == "string" || typeof ve == "function" || ve === y || ve === C || ve === re || ve === _ || ve === S || ve === T || ve === $ || typeof ve == "object" && ve !== null && (ve.$$typeof === F || ve.$$typeof === M || ve.$$typeof === g || ve.$$typeof === U || ve.$$typeof === j || ve.$$typeof === ae || ve.$$typeof === z || ve[0] === Y);
    }, Kn.typeOf = ge, Kn;
  }() : Ry.exports = (w1 || (w1 = 1, process.env.NODE_ENV !== "production" && function() {
    var f = 60103, h = 60106, y = 60107, _ = 60108, C = 60114, g = 60109, U = 60110, j = 60112, S = 60113, T = 60120, M = 60115, F = 60116, z = 60121, Y = 60122, ae = 60117, re = 60129, $ = 60131;
    if (typeof Symbol == "function" && Symbol.for) {
      var ne = Symbol.for;
      f = ne("react.element"), h = ne("react.portal"), y = ne("react.fragment"), _ = ne("react.strict_mode"), C = ne("react.profiler"), g = ne("react.provider"), U = ne("react.context"), j = ne("react.forward_ref"), S = ne("react.suspense"), T = ne("react.suspense_list"), M = ne("react.memo"), F = ne("react.lazy"), z = ne("react.block"), Y = ne("react.server.block"), ae = ne("react.fundamental"), ne("react.scope"), ne("react.opaque.id"), re = ne("react.debug_trace_mode"), ne("react.offscreen"), $ = ne("react.legacy_hidden");
    }
    function ge(he) {
      if (typeof he == "object" && he !== null) {
        var an = he.$$typeof;
        switch (an) {
          case f:
            var ce = he.type;
            switch (ce) {
              case y:
              case C:
              case _:
              case S:
              case T:
                return ce;
              default:
                var De = ce && ce.$$typeof;
                switch (De) {
                  case U:
                  case j:
                  case F:
                  case M:
                  case g:
                    return De;
                  default:
                    return an;
                }
            }
          case h:
            return an;
        }
      }
    }
    var Ie = U, We = g, xe = f, Le = j, be = y, ue = F, nn = M, pn = h, Ze = C, gn = _, ve = S, Ve = !1, mn = !1;
    Zn.ContextConsumer = Ie, Zn.ContextProvider = We, Zn.Element = xe, Zn.ForwardRef = Le, Zn.Fragment = be, Zn.Lazy = ue, Zn.Memo = nn, Zn.Portal = pn, Zn.Profiler = Ze, Zn.StrictMode = gn, Zn.Suspense = ve, Zn.isAsyncMode = function(he) {
      return Ve || (Ve = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }, Zn.isConcurrentMode = function(he) {
      return mn || (mn = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }, Zn.isContextConsumer = function(he) {
      return ge(he) === U;
    }, Zn.isContextProvider = function(he) {
      return ge(he) === g;
    }, Zn.isElement = function(he) {
      return typeof he == "object" && he !== null && he.$$typeof === f;
    }, Zn.isForwardRef = function(he) {
      return ge(he) === j;
    }, Zn.isFragment = function(he) {
      return ge(he) === y;
    }, Zn.isLazy = function(he) {
      return ge(he) === F;
    }, Zn.isMemo = function(he) {
      return ge(he) === M;
    }, Zn.isPortal = function(he) {
      return ge(he) === h;
    }, Zn.isProfiler = function(he) {
      return ge(he) === C;
    }, Zn.isStrictMode = function(he) {
      return ge(he) === _;
    }, Zn.isSuspense = function(he) {
      return ge(he) === S;
    }, Zn.isValidElementType = function(he) {
      return typeof he == "string" || typeof he == "function" || he === y || he === C || he === re || he === _ || he === S || he === T || he === $ || typeof he == "object" && he !== null && (he.$$typeof === F || he.$$typeof === M || he.$$typeof === g || he.$$typeof === U || he.$$typeof === j || he.$$typeof === ae || he.$$typeof === z || he[0] === Y);
    }, Zn.typeOf = ge;
  }()), Zn)), Ry.exports;
}
function JS() {
  if (S1) return al;
  S1 = 1, Object.defineProperty(al, "__esModule", { value: !0 }), al.test = al.serialize = al.default = void 0;
  var f = function(S, T) {
    if (S && S.__esModule) return S;
    if (S === null || typeof S != "object" && typeof S != "function") return { default: S };
    var M = y(T);
    if (M && M.has(S)) return M.get(S);
    var F = {}, z = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var Y in S) if (Y !== "default" && Object.prototype.hasOwnProperty.call(S, Y)) {
      var ae = z ? Object.getOwnPropertyDescriptor(S, Y) : null;
      ae && (ae.get || ae.set) ? Object.defineProperty(F, Y, ae) : F[Y] = S[Y];
    }
    return F.default = S, M && M.set(S, F), F;
  }(GS()), h = Ky();
  function y(S) {
    if (typeof WeakMap != "function") return null;
    var T = /* @__PURE__ */ new WeakMap(), M = /* @__PURE__ */ new WeakMap();
    return (y = function(F) {
      return F ? M : T;
    })(S);
  }
  const _ = (S, T = []) => (Array.isArray(S) ? S.forEach((M) => {
    _(M, T);
  }) : S != null && S !== !1 && T.push(S), T), C = (S) => {
    const T = S.type;
    if (typeof T == "string") return T;
    if (typeof T == "function") return T.displayName || T.name || "Unknown";
    if (f.isFragment(S)) return "React.Fragment";
    if (f.isSuspense(S)) return "React.Suspense";
    if (typeof T == "object" && T !== null) {
      if (f.isContextProvider(S)) return "Context.Provider";
      if (f.isContextConsumer(S)) return "Context.Consumer";
      if (f.isForwardRef(S)) {
        if (T.displayName) return T.displayName;
        const M = T.render.displayName || T.render.name || "";
        return M !== "" ? "ForwardRef(" + M + ")" : "ForwardRef";
      }
      if (f.isMemo(S)) {
        const M = T.displayName || T.type.displayName || T.type.name || "";
        return M !== "" ? "Memo(" + M + ")" : "Memo";
      }
    }
    return "UNDEFINED";
  }, g = (S, T, M, F, z, Y) => ++F > T.maxDepth ? (0, h.printElementAsLeaf)(C(S), T) : (0, h.printElement)(C(S), (0, h.printProps)(((ae) => {
    const { props: re } = ae;
    return Object.keys(re).filter(($) => $ !== "children" && re[$] !== void 0).sort();
  })(S), S.props, T, M + T.indent, F, z, Y), (0, h.printChildren)(_(S.props.children), T, M + T.indent, F, z, Y), T, M);
  al.serialize = g;
  const U = (S) => S != null && f.isElement(S);
  al.test = U;
  var j = { serialize: g, test: U };
  return al.default = j, al;
}
var E1, x1, ol = {};
function ZS() {
  if (E1) return ol;
  E1 = 1, Object.defineProperty(ol, "__esModule", { value: !0 }), ol.test = ol.serialize = ol.default = void 0;
  var f = Ky(), h = typeof globalThis < "u" ? globalThis : h !== void 0 ? h : typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(), y = h["jest-symbol-do-not-touch"] || h.Symbol;
  const _ = typeof y == "function" && y.for ? y.for("react.test.json") : 245830487, C = (j, S, T, M, F, z) => ++M > S.maxDepth ? (0, f.printElementAsLeaf)(j.type, S) : (0, f.printElement)(j.type, j.props ? (0, f.printProps)(((Y) => {
    const { props: ae } = Y;
    return ae ? Object.keys(ae).filter((re) => ae[re] !== void 0).sort() : [];
  })(j), j.props, S, T + S.indent, M, F, z) : "", j.children ? (0, f.printChildren)(j.children, S, T + S.indent, M, F, z) : "", S, T);
  ol.serialize = C;
  const g = (j) => j && j.$$typeof === _;
  ol.test = g;
  var U = { serialize: C, test: g };
  return ol.default = U, ol;
}
var X1 = function() {
  if (x1) return mi;
  x1 = 1, Object.defineProperty(mi, "__esModule", { value: !0 }), mi.default = mi.DEFAULT_OPTIONS = void 0, mi.format = De, mi.plugins = void 0;
  var f = T(K1()), h = Bh(), y = T(function() {
    if (c1) return Zi;
    c1 = 1, Object.defineProperty(Zi, "__esModule", { value: !0 }), Zi.test = Zi.serialize = Zi.default = void 0;
    var Q = Bh(), Te = typeof globalThis < "u" ? globalThis : Te !== void 0 ? Te : typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(), Oe = Te["jest-symbol-do-not-touch"] || Te.Symbol;
    const ze = typeof Oe == "function" && Oe.for ? Oe.for("jest.asymmetricMatcher") : 1267621, _e = " ", Qe = (Dn, kn, ot, gr, tr, rr) => {
      const zn = Dn.toString();
      return zn === "ArrayContaining" || zn === "ArrayNotContaining" ? ++gr > kn.maxDepth ? "[" + zn + "]" : zn + _e + "[" + (0, Q.printListItems)(Dn.sample, kn, ot, gr, tr, rr) + "]" : zn === "ObjectContaining" || zn === "ObjectNotContaining" ? ++gr > kn.maxDepth ? "[" + zn + "]" : zn + _e + "{" + (0, Q.printObjectProperties)(Dn.sample, kn, ot, gr, tr, rr) + "}" : zn === "StringMatching" || zn === "StringNotMatching" || zn === "StringContaining" || zn === "StringNotContaining" ? zn + _e + rr(Dn.sample, kn, ot, gr, tr) : Dn.toAsymmetricMatcher();
    };
    Zi.serialize = Qe;
    const rn = (Dn) => Dn && Dn.$$typeof === ze;
    Zi.test = rn;
    var xn = { serialize: Qe, test: rn };
    return Zi.default = xn, Zi;
  }()), _ = T(QS()), C = T(YS()), g = T(KS()), U = T(XS()), j = T(JS()), S = T(ZS());
  function T(Q) {
    return Q && Q.__esModule ? Q : { default: Q };
  }
  const M = Object.prototype.toString, F = Date.prototype.toISOString, z = Error.prototype.toString, Y = RegExp.prototype.toString, ae = (Q) => typeof Q.constructor == "function" && Q.constructor.name || "Object", re = (Q) => typeof window < "u" && Q === window, $ = /^Symbol\((.*)\)(.*)$/, ne = /\n/gi;
  class ge extends Error {
    constructor(Te, Oe) {
      super(Te), this.stack = Oe, this.name = this.constructor.name;
    }
  }
  function Ie(Q, Te) {
    return Te ? "[Function " + (Q.name || "anonymous") + "]" : "[Function]";
  }
  function We(Q) {
    return String(Q).replace($, "Symbol($1)");
  }
  function xe(Q) {
    return "[" + z.call(Q) + "]";
  }
  function Le(Q, Te, Oe, ze) {
    if (Q === !0 || Q === !1) return "" + Q;
    if (Q === void 0) return "undefined";
    if (Q === null) return "null";
    const _e = typeof Q;
    if (_e === "number") return function(rn) {
      return Object.is(rn, -0) ? "-0" : String(rn);
    }(Q);
    if (_e === "bigint") return function(rn) {
      return `${rn}n`;
    }(Q);
    if (_e === "string") return ze ? '"' + Q.replace(/"|\\/g, "\\$&") + '"' : '"' + Q + '"';
    if (_e === "function") return Ie(Q, Te);
    if (_e === "symbol") return We(Q);
    const Qe = M.call(Q);
    return Qe === "[object WeakMap]" ? "WeakMap {}" : Qe === "[object WeakSet]" ? "WeakSet {}" : Qe === "[object Function]" || Qe === "[object GeneratorFunction]" ? Ie(Q, Te) : Qe === "[object Symbol]" ? We(Q) : Qe === "[object Date]" ? isNaN(+Q) ? "Date { NaN }" : F.call(Q) : Qe === "[object Error]" ? xe(Q) : Qe === "[object RegExp]" ? Oe ? Y.call(Q).replace(/[\\^$*+?.()|[\]{}]/g, "\\$&") : Y.call(Q) : Q instanceof Error ? xe(Q) : null;
  }
  function be(Q, Te, Oe, ze, _e, Qe) {
    if (_e.indexOf(Q) !== -1) return "[Circular]";
    (_e = _e.slice()).push(Q);
    const rn = ++ze > Te.maxDepth, xn = Te.min;
    if (Te.callToJSON && !rn && Q.toJSON && typeof Q.toJSON == "function" && !Qe) return pn(Q.toJSON(), Te, Oe, ze, _e, !0);
    const Dn = M.call(Q);
    return Dn === "[object Arguments]" ? rn ? "[Arguments]" : (xn ? "" : "Arguments ") + "[" + (0, h.printListItems)(Q, Te, Oe, ze, _e, pn) + "]" : /* @__PURE__ */ function(kn) {
      return kn === "[object Array]" || kn === "[object ArrayBuffer]" || kn === "[object DataView]" || kn === "[object Float32Array]" || kn === "[object Float64Array]" || kn === "[object Int8Array]" || kn === "[object Int16Array]" || kn === "[object Int32Array]" || kn === "[object Uint8Array]" || kn === "[object Uint8ClampedArray]" || kn === "[object Uint16Array]" || kn === "[object Uint32Array]";
    }(Dn) ? rn ? "[" + Q.constructor.name + "]" : (xn ? "" : Te.printBasicPrototype || Q.constructor.name !== "Array" ? Q.constructor.name + " " : "") + "[" + (0, h.printListItems)(Q, Te, Oe, ze, _e, pn) + "]" : Dn === "[object Map]" ? rn ? "[Map]" : "Map {" + (0, h.printIteratorEntries)(Q.entries(), Te, Oe, ze, _e, pn, " => ") + "}" : Dn === "[object Set]" ? rn ? "[Set]" : "Set {" + (0, h.printIteratorValues)(Q.values(), Te, Oe, ze, _e, pn) + "}" : rn || re(Q) ? "[" + ae(Q) + "]" : (xn ? "" : Te.printBasicPrototype || ae(Q) !== "Object" ? ae(Q) + " " : "") + "{" + (0, h.printObjectProperties)(Q, Te, Oe, ze, _e, pn) + "}";
  }
  function ue(Q, Te, Oe, ze, _e, Qe) {
    let rn;
    try {
      rn = function(xn) {
        return xn.serialize != null;
      }(Q) ? Q.serialize(Te, Oe, ze, _e, Qe, pn) : Q.print(Te, (xn) => pn(xn, Oe, ze, _e, Qe), (xn) => {
        const Dn = ze + Oe.indent;
        return Dn + xn.replace(ne, `
` + Dn);
      }, { edgeSpacing: Oe.spacingOuter, min: Oe.min, spacing: Oe.spacingInner }, Oe.colors);
    } catch (xn) {
      throw new ge(xn.message, xn.stack);
    }
    if (typeof rn != "string") throw new Error(`pretty-format: Plugin must return type "string" but instead returned "${typeof rn}".`);
    return rn;
  }
  function nn(Q, Te) {
    for (let Oe = 0; Oe < Q.length; Oe++) try {
      if (Q[Oe].test(Te)) return Q[Oe];
    } catch (ze) {
      throw new ge(ze.message, ze.stack);
    }
    return null;
  }
  function pn(Q, Te, Oe, ze, _e, Qe) {
    const rn = nn(Te.plugins, Q);
    if (rn !== null) return ue(rn, Q, Te, Oe, ze, _e);
    const xn = Le(Q, Te.printFunctionName, Te.escapeRegex, Te.escapeString);
    return xn !== null ? xn : be(Q, Te, Oe, ze, _e, Qe);
  }
  const Ze = { comment: "gray", content: "reset", prop: "yellow", tag: "cyan", value: "green" }, gn = Object.keys(Ze), ve = { callToJSON: !0, compareKeys: void 0, escapeRegex: !1, escapeString: !0, highlight: !1, indent: 2, maxDepth: 1 / 0, min: !1, plugins: [], printBasicPrototype: !0, printFunctionName: !0, theme: Ze };
  mi.DEFAULT_OPTIONS = ve;
  const Ve = (Q) => gn.reduce((Te, Oe) => {
    const ze = Q.theme && Q.theme[Oe] !== void 0 ? Q.theme[Oe] : Ze[Oe], _e = ze && f.default[ze];
    if (!_e || typeof _e.close != "string" || typeof _e.open != "string") throw new Error(`pretty-format: Option "theme" has a key "${Oe}" whose value "${ze}" is undefined in ansi-styles.`);
    return Te[Oe] = _e, Te;
  }, /* @__PURE__ */ Object.create(null)), mn = (Q) => Q && Q.printFunctionName !== void 0 ? Q.printFunctionName : ve.printFunctionName, he = (Q) => Q && Q.escapeRegex !== void 0 ? Q.escapeRegex : ve.escapeRegex, an = (Q) => Q && Q.escapeString !== void 0 ? Q.escapeString : ve.escapeString, ce = (Q) => {
    var Te, Oe;
    return { callToJSON: Q && Q.callToJSON !== void 0 ? Q.callToJSON : ve.callToJSON, colors: Q && Q.highlight ? Ve(Q) : gn.reduce((ze, _e) => (ze[_e] = { close: "", open: "" }, ze), /* @__PURE__ */ Object.create(null)), compareKeys: Q && typeof Q.compareKeys == "function" ? Q.compareKeys : ve.compareKeys, escapeRegex: he(Q), escapeString: an(Q), indent: Q && Q.min ? "" : (Oe = Q && Q.indent !== void 0 ? Q.indent : ve.indent, new Array(Oe + 1).join(" ")), maxDepth: Q && Q.maxDepth !== void 0 ? Q.maxDepth : ve.maxDepth, min: Q && Q.min !== void 0 ? Q.min : ve.min, plugins: Q && Q.plugins !== void 0 ? Q.plugins : ve.plugins, printBasicPrototype: (Te = Q == null ? void 0 : Q.printBasicPrototype) === null || Te === void 0 || Te, printFunctionName: mn(Q), spacingInner: Q && Q.min ? " " : `
`, spacingOuter: Q && Q.min ? "" : `
` };
  };
  function De(Q, Te) {
    if (Te && (function(ze) {
      if (Object.keys(ze).forEach((_e) => {
        if (!ve.hasOwnProperty(_e)) throw new Error(`pretty-format: Unknown option "${_e}".`);
      }), ze.min && ze.indent !== void 0 && ze.indent !== 0) throw new Error('pretty-format: Options "min" and "indent" cannot be used together.');
      if (ze.theme !== void 0) {
        if (ze.theme === null) throw new Error('pretty-format: Option "theme" must not be null.');
        if (typeof ze.theme != "object") throw new Error(`pretty-format: Option "theme" must be of type "object" but instead received "${typeof ze.theme}".`);
      }
    }(Te), Te.plugins)) {
      const ze = nn(Te.plugins, Q);
      if (ze !== null) return ue(ze, Q, ce(Te), "", 0, []);
    }
    const Oe = Le(Q, mn(Te), he(Te), an(Te));
    return Oe !== null ? Oe : be(Q, ce(Te), "", 0, []);
  }
  const Ee = { AsymmetricMatcher: y.default, ConvertAnsi: _.default, DOMCollection: C.default, DOMElement: g.default, Immutable: U.default, ReactElement: j.default, ReactTestComponent: S.default };
  mi.plugins = Ee;
  var je = De;
  return mi.default = je, mi;
}(), eE = Object.prototype.toString, nE = Math.pow(2, 53) - 1;
function tE(f) {
  var h = function(y) {
    var _ = Number(y);
    return isNaN(_) ? 0 : _ !== 0 && isFinite(_) ? (_ > 0 ? 1 : -1) * Math.floor(Math.abs(_)) : _;
  }(f);
  return Math.min(Math.max(h, 0), nE);
}
function ko(f, h) {
  var y = Array, _ = Object(f);
  if (f == null) throw new TypeError("Array.from requires an array-like object - not null or undefined");
  for (var C, g, U = tE(_.length), j = typeof (C = y) == "function" || eE.call(C) === "[object Function]" ? Object(new y(U)) : new Array(U), S = 0; S < U; ) g = _[S], j[S] = g, S += 1;
  return j.length = U, j;
}
function Sp(f) {
  return Sp = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(h) {
    return typeof h;
  } : function(h) {
    return h && typeof Symbol == "function" && h.constructor === Symbol && h !== Symbol.prototype ? "symbol" : typeof h;
  }, Sp(f);
}
function rE(f, h, y) {
  return h && function(_, C) {
    for (var g = 0; g < C.length; g++) {
      var U = C[g];
      U.enumerable = U.enumerable || !1, U.configurable = !0, "value" in U && (U.writable = !0), Object.defineProperty(_, G1(U.key), U);
    }
  }(f.prototype, h), Object.defineProperty(f, "prototype", { writable: !1 }), f;
}
function G1(f) {
  var h = function(y, _) {
    if (Sp(y) !== "object" || y === null) return y;
    var C = y[Symbol.toPrimitive];
    if (C !== void 0) {
      var g = C.call(y, _);
      if (Sp(g) !== "object") return g;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (_ === "string" ? String : Number)(y);
  }(f, "string");
  return Sp(h) === "symbol" ? h : String(h);
}
const aE = typeof Set > "u" ? Set : function() {
  function f() {
    var h, y, _, C = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    (function(g, U) {
      if (!(g instanceof U)) throw new TypeError("Cannot call a class as a function");
    })(this, f), h = this, _ = void 0, (y = G1(y = "items")) in h ? Object.defineProperty(h, y, { value: _, enumerable: !0, configurable: !0, writable: !0 }) : h[y] = _, this.items = C;
  }
  return rE(f, [{ key: "add", value: function(h) {
    return this.has(h) === !1 && this.items.push(h), this;
  } }, { key: "clear", value: function() {
    this.items = [];
  } }, { key: "delete", value: function(h) {
    var y = this.items.length;
    return this.items = this.items.filter(function(_) {
      return _ !== h;
    }), y !== this.items.length;
  } }, { key: "forEach", value: function(h) {
    var y = this;
    this.items.forEach(function(_) {
      h(_, _, y);
    });
  } }, { key: "has", value: function(h) {
    return this.items.indexOf(h) !== -1;
  } }, { key: "size", get: function() {
    return this.items.length;
  } }]), f;
}();
function Or(f) {
  var h;
  return (h = f.localName) !== null && h !== void 0 ? h : f.tagName.toLowerCase();
}
var oE = { article: "article", aside: "complementary", button: "button", datalist: "listbox", dd: "definition", details: "group", dialog: "dialog", dt: "term", fieldset: "group", figure: "figure", form: "form", footer: "contentinfo", h1: "heading", h2: "heading", h3: "heading", h4: "heading", h5: "heading", h6: "heading", header: "banner", hr: "separator", html: "document", legend: "legend", li: "listitem", math: "math", main: "main", menu: "list", nav: "navigation", ol: "list", optgroup: "group", option: "option", output: "status", progress: "progressbar", section: "region", summary: "button", table: "table", tbody: "rowgroup", textarea: "textbox", tfoot: "rowgroup", td: "cell", th: "columnheader", thead: "rowgroup", tr: "row", ul: "list" }, iE = { caption: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]), code: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]), deletion: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]), emphasis: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]), generic: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby", "aria-roledescription"]), insertion: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]), paragraph: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]), presentation: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]), strong: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]), subscript: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]), superscript: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]) };
function T1(f, h) {
  return function(y, _) {
    return ["aria-atomic", "aria-busy", "aria-controls", "aria-current", "aria-describedby", "aria-details", "aria-dropeffect", "aria-flowto", "aria-grabbed", "aria-hidden", "aria-keyshortcuts", "aria-label", "aria-labelledby", "aria-live", "aria-owns", "aria-relevant", "aria-roledescription"].some(function(C) {
      var g;
      return y.hasAttribute(C) && !((g = iE[_]) !== null && g !== void 0 && g.has(C));
    });
  }(f, h);
}
function lE(f) {
  var h = function(_) {
    var C = _.getAttribute("role");
    if (C !== null) {
      var g = C.trim().split(" ")[0];
      if (g.length > 0) return g;
    }
    return null;
  }(f);
  if (h === null || h === "presentation") {
    var y = function(_) {
      var C = oE[Or(_)];
      if (C !== void 0) return C;
      switch (Or(_)) {
        case "a":
        case "area":
        case "link":
          if (_.hasAttribute("href")) return "link";
          break;
        case "img":
          return _.getAttribute("alt") !== "" || T1(_, "img") ? "img" : "presentation";
        case "input":
          var g = _.type;
          switch (g) {
            case "button":
            case "image":
            case "reset":
            case "submit":
              return "button";
            case "checkbox":
            case "radio":
              return g;
            case "range":
              return "slider";
            case "email":
            case "tel":
            case "text":
            case "url":
              return _.hasAttribute("list") ? "combobox" : "textbox";
            case "search":
              return _.hasAttribute("list") ? "combobox" : "searchbox";
            case "number":
              return "spinbutton";
            default:
              return null;
          }
        case "select":
          return _.hasAttribute("multiple") || _.size > 1 ? "listbox" : "combobox";
      }
      return null;
    }(f);
    if (h !== "presentation" || T1(f, y || "")) return y;
  }
  return h;
}
function ft(f) {
  return f !== null && f.nodeType === f.ELEMENT_NODE;
}
function C1(f) {
  return ft(f) && Or(f) === "caption";
}
function jh(f) {
  return ft(f) && Or(f) === "input";
}
function uE(f) {
  return ft(f) && Or(f) === "legend";
}
function sE(f) {
  return function(h) {
    return ft(h) && h.ownerSVGElement !== void 0;
  }(f) && Or(f) === "title";
}
function Wh(f, h) {
  if (ft(f) && f.hasAttribute(h)) {
    var y = f.getAttribute(h).split(" "), _ = f.getRootNode ? f.getRootNode() : f.ownerDocument;
    return y.map(function(C) {
      return _.getElementById(C);
    }).filter(function(C) {
      return C !== null;
    });
  }
  return [];
}
function il(f, h) {
  return !!ft(f) && h.indexOf(lE(f)) !== -1;
}
function _1(f, h) {
  if (!ft(f)) return !1;
  if (h === "range") return il(f, ["meter", "progressbar", "scrollbar", "slider", "spinbutton"]);
  throw new TypeError("No knowledge about abstract role '".concat(h, "'. This is likely a bug :("));
}
function P1(f, h) {
  var y = ko(f.querySelectorAll(h));
  return Wh(f, "aria-owns").forEach(function(_) {
    y.push.apply(y, ko(_.querySelectorAll(h)));
  }), y;
}
function cE(f) {
  return ft(h = f) && Or(h) === "select" ? f.selectedOptions || P1(f, "[selected]") : P1(f, '[aria-selected="true"]');
  var h;
}
function dE(f) {
  return jh(f) || ft(h = f) && Or(h) === "textarea" ? f.value : f.textContent || "";
  var h;
}
function R1(f) {
  var h = f.getPropertyValue("content");
  return /^["'].*["']$/.test(h) ? h.slice(1, -1) : "";
}
function J1(f) {
  var h = Or(f);
  return h === "button" || h === "input" && f.getAttribute("type") !== "hidden" || h === "meter" || h === "output" || h === "progress" || h === "select" || h === "textarea";
}
function Z1(f) {
  if (J1(f)) return f;
  var h = null;
  return f.childNodes.forEach(function(y) {
    if (h === null && ft(y)) {
      var _ = Z1(y);
      _ !== null && (h = _);
    }
  }), h;
}
function fE(f) {
  if (f.control !== void 0) return f.control;
  var h = f.getAttribute("for");
  return h !== null ? f.ownerDocument.getElementById(h) : Z1(f);
}
function ek(f) {
  var h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, y = new aE(), _ = function($) {
    var ne = ($.ownerDocument === null ? $ : $.ownerDocument).defaultView;
    if (ne === null) throw new TypeError("no window available");
    return ne;
  }(f), C = h.compute, g = C === void 0 ? "name" : C, U = h.computedStyleSupportsPseudoElements, j = U === void 0 ? h.getComputedStyle !== void 0 : U, S = h.getComputedStyle, T = S === void 0 ? _.getComputedStyle.bind(_) : S, M = h.hidden, F = M !== void 0 && M;
  function z($, ne) {
    var ge, Ie, We = "";
    if (ft($) && j) {
      var xe = R1(T($, "::before"));
      We = "".concat(xe, " ").concat(We);
    }
    if ((function(be) {
      return ft(be) && Or(be) === "slot";
    }($) ? (Ie = (ge = $).assignedNodes()).length === 0 ? ko(ge.childNodes) : Ie : ko($.childNodes).concat(Wh($, "aria-owns"))).forEach(function(be) {
      var ue = re(be, { isEmbeddedInLabel: ne.isEmbeddedInLabel, isReferenced: !1, recursion: !0 }), nn = (ft(be) ? T(be).getPropertyValue("display") : "inline") !== "inline" ? " " : "";
      We += "".concat(nn).concat(ue).concat(nn);
    }), ft($) && j) {
      var Le = R1(T($, "::after"));
      We = "".concat(We, " ").concat(Le);
    }
    return We.trim();
  }
  function Y($, ne) {
    var ge = $.getAttributeNode(ne);
    return ge === null || y.has(ge) || ge.value.trim() === "" ? null : (y.add(ge), ge.value);
  }
  function ae($) {
    if (!ft($)) return null;
    if (function(De) {
      return ft(De) && Or(De) === "fieldset";
    }($)) {
      y.add($);
      for (var ne = ko($.childNodes), ge = 0; ge < ne.length; ge += 1) {
        var Ie = ne[ge];
        if (uE(Ie)) return re(Ie, { isEmbeddedInLabel: !1, isReferenced: !1, recursion: !1 });
      }
    } else if (function(De) {
      return ft(De) && Or(De) === "table";
    }($)) {
      y.add($);
      for (var We = ko($.childNodes), xe = 0; xe < We.length; xe += 1) {
        var Le = We[xe];
        if (C1(Le)) return re(Le, { isEmbeddedInLabel: !1, isReferenced: !1, recursion: !1 });
      }
    } else {
      if (function(De) {
        return ft(De) && Or(De) === "svg";
      }($)) {
        y.add($);
        for (var be = ko($.childNodes), ue = 0; ue < be.length; ue += 1) {
          var nn = be[ue];
          if (sE(nn)) return nn.textContent;
        }
        return null;
      }
      if (Or($) === "img" || Or($) === "area") {
        var pn = Y($, "alt");
        if (pn !== null) return pn;
      } else if (function(De) {
        return ft(De) && Or(De) === "optgroup";
      }($)) {
        var Ze = Y($, "label");
        if (Ze !== null) return Ze;
      }
    }
    if (jh($) && ($.type === "button" || $.type === "submit" || $.type === "reset")) {
      var gn = Y($, "value");
      if (gn !== null) return gn;
      if ($.type === "submit") return "Submit";
      if ($.type === "reset") return "Reset";
    }
    var ve, Ve, mn = (Ve = (ve = $).labels) === null ? Ve : Ve !== void 0 ? ko(Ve) : J1(ve) ? ko(ve.ownerDocument.querySelectorAll("label")).filter(function(De) {
      return fE(De) === ve;
    }) : null;
    if (mn !== null && mn.length !== 0) return y.add($), ko(mn).map(function(De) {
      return re(De, { isEmbeddedInLabel: !0, isReferenced: !1, recursion: !0 });
    }).filter(function(De) {
      return De.length > 0;
    }).join(" ");
    if (jh($) && $.type === "image") {
      var he = Y($, "alt");
      if (he !== null) return he;
      var an = Y($, "title");
      return an !== null ? an : "Submit Query";
    }
    if (il($, ["button"])) {
      var ce = z($, { isEmbeddedInLabel: !1 });
      if (ce !== "") return ce;
    }
    return null;
  }
  function re($, ne) {
    if (y.has($)) return "";
    if (!F && function(Ze, gn) {
      if (!ft(Ze)) return !1;
      if (Ze.hasAttribute("hidden") || Ze.getAttribute("aria-hidden") === "true") return !0;
      var ve = gn(Ze);
      return ve.getPropertyValue("display") === "none" || ve.getPropertyValue("visibility") === "hidden";
    }($, T) && !ne.isReferenced) return y.add($), "";
    var ge = ft($) ? $.getAttributeNode("aria-labelledby") : null, Ie = ge === null || y.has(ge) ? [] : Wh($, "aria-labelledby");
    if (g === "name" && !ne.isReferenced && Ie.length > 0) return y.add(ge), Ie.map(function(Ze) {
      return re(Ze, { isEmbeddedInLabel: ne.isEmbeddedInLabel, isReferenced: !0, recursion: !1 });
    }).join(" ");
    var We, xe = ne.recursion && (il(We = $, ["button", "combobox", "listbox", "textbox"]) || _1(We, "range")) && g === "name";
    if (!xe) {
      var Le = (ft($) && $.getAttribute("aria-label") || "").trim();
      if (Le !== "" && g === "name") return y.add($), Le;
      if (!function(Ze) {
        return il(Ze, ["none", "presentation"]);
      }($)) {
        var be = ae($);
        if (be !== null) return y.add($), be;
      }
    }
    if (il($, ["menu"])) return y.add($), "";
    if (xe || ne.isEmbeddedInLabel || ne.isReferenced) {
      if (il($, ["combobox", "listbox"])) {
        y.add($);
        var ue = cE($);
        return ue.length === 0 ? jh($) ? $.value : "" : ko(ue).map(function(Ze) {
          return re(Ze, { isEmbeddedInLabel: ne.isEmbeddedInLabel, isReferenced: !1, recursion: !0 });
        }).join(" ");
      }
      if (_1($, "range")) return y.add($), $.hasAttribute("aria-valuetext") ? $.getAttribute("aria-valuetext") : $.hasAttribute("aria-valuenow") ? $.getAttribute("aria-valuenow") : $.getAttribute("value") || "";
      if (il($, ["textbox"])) return y.add($), dE($);
    }
    if (function(Ze) {
      return il(Ze, ["button", "cell", "checkbox", "columnheader", "gridcell", "heading", "label", "legend", "link", "menuitem", "menuitemcheckbox", "menuitemradio", "option", "radio", "row", "rowheader", "switch", "tab", "tooltip", "treeitem"]);
    }($) || ft($) && ne.isReferenced || function(Ze) {
      return C1(Ze);
    }($)) {
      var nn = z($, { isEmbeddedInLabel: ne.isEmbeddedInLabel });
      if (nn !== "") return y.add($), nn;
    }
    if ($.nodeType === $.TEXT_NODE) return y.add($), $.textContent || "";
    if (ne.recursion) return y.add($), z($, { isEmbeddedInLabel: ne.isEmbeddedInLabel });
    var pn = function(Ze) {
      return ft(Ze) ? Y(Ze, "title") : null;
    }($);
    return pn !== null ? (y.add($), pn) : (y.add($), "");
  }
  return re(f, { isEmbeddedInLabel: !1, isReferenced: g === "description", recursion: !1 }).trim().replace(/\s\s+/g, " ");
}
function Ep(f) {
  return Ep = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(h) {
    return typeof h;
  } : function(h) {
    return h && typeof Symbol == "function" && h.constructor === Symbol && h !== Symbol.prototype ? "symbol" : typeof h;
  }, Ep(f);
}
function N1(f, h) {
  var y = Object.keys(f);
  if (Object.getOwnPropertySymbols) {
    var _ = Object.getOwnPropertySymbols(f);
    h && (_ = _.filter(function(C) {
      return Object.getOwnPropertyDescriptor(f, C).enumerable;
    })), y.push.apply(y, _);
  }
  return y;
}
function I1(f) {
  for (var h = 1; h < arguments.length; h++) {
    var y = arguments[h] != null ? arguments[h] : {};
    h % 2 ? N1(Object(y), !0).forEach(function(_) {
      pE(f, _, y[_]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(f, Object.getOwnPropertyDescriptors(y)) : N1(Object(y)).forEach(function(_) {
      Object.defineProperty(f, _, Object.getOwnPropertyDescriptor(y, _));
    });
  }
  return f;
}
function pE(f, h, y) {
  return (h = function(_) {
    var C = function(g, U) {
      if (Ep(g) !== "object" || g === null) return g;
      var j = g[Symbol.toPrimitive];
      if (j !== void 0) {
        var S = j.call(g, U);
        if (Ep(S) !== "object") return S;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (U === "string" ? String : Number)(g);
    }(_, "string");
    return Ep(C) === "symbol" ? C : String(C);
  }(h)) in f ? Object.defineProperty(f, h, { value: y, enumerable: !0, configurable: !0, writable: !0 }) : f[h] = y, f;
}
function nk(f) {
  var h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, y = Wh(f, "aria-describedby").map(function(C) {
    return ek(C, I1(I1({}, h), {}, { compute: "description" }));
  }).join(" ");
  if (y === "") {
    var _ = f.getAttribute("title");
    y = _ === null ? "" : _;
  }
  return y;
}
function Xy(f) {
  var h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return il(f, ["caption", "code", "deletion", "emphasis", "generic", "insertion", "paragraph", "presentation", "strong", "subscript", "superscript"]) ? "" : ek(f, h);
}
var D1, O1 = { exports: {} };
const mE = Q1((D1 || (D1 = 1, function(f) {
  var h = function() {
    var y = String.fromCharCode, _ = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", C = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$", g = {};
    function U(S, T) {
      if (!g[S]) {
        g[S] = {};
        for (var M = 0; M < S.length; M++) g[S][S.charAt(M)] = M;
      }
      return g[S][T];
    }
    var j = { compressToBase64: function(S) {
      if (S == null) return "";
      var T = j._compress(S, 6, function(M) {
        return _.charAt(M);
      });
      switch (T.length % 4) {
        default:
        case 0:
          return T;
        case 1:
          return T + "===";
        case 2:
          return T + "==";
        case 3:
          return T + "=";
      }
    }, decompressFromBase64: function(S) {
      return S == null ? "" : S == "" ? null : j._decompress(S.length, 32, function(T) {
        return U(_, S.charAt(T));
      });
    }, compressToUTF16: function(S) {
      return S == null ? "" : j._compress(S, 15, function(T) {
        return y(T + 32);
      }) + " ";
    }, decompressFromUTF16: function(S) {
      return S == null ? "" : S == "" ? null : j._decompress(S.length, 16384, function(T) {
        return S.charCodeAt(T) - 32;
      });
    }, compressToUint8Array: function(S) {
      for (var T = j.compress(S), M = new Uint8Array(2 * T.length), F = 0, z = T.length; F < z; F++) {
        var Y = T.charCodeAt(F);
        M[2 * F] = Y >>> 8, M[2 * F + 1] = Y % 256;
      }
      return M;
    }, decompressFromUint8Array: function(S) {
      if (S == null) return j.decompress(S);
      for (var T = new Array(S.length / 2), M = 0, F = T.length; M < F; M++) T[M] = 256 * S[2 * M] + S[2 * M + 1];
      var z = [];
      return T.forEach(function(Y) {
        z.push(y(Y));
      }), j.decompress(z.join(""));
    }, compressToEncodedURIComponent: function(S) {
      return S == null ? "" : j._compress(S, 6, function(T) {
        return C.charAt(T);
      });
    }, decompressFromEncodedURIComponent: function(S) {
      return S == null ? "" : S == "" ? null : (S = S.replace(/ /g, "+"), j._decompress(S.length, 32, function(T) {
        return U(C, S.charAt(T));
      }));
    }, compress: function(S) {
      return j._compress(S, 16, function(T) {
        return y(T);
      });
    }, _compress: function(S, T, M) {
      if (S == null) return "";
      var F, z, Y, ae = {}, re = {}, $ = "", ne = "", ge = "", Ie = 2, We = 3, xe = 2, Le = [], be = 0, ue = 0;
      for (Y = 0; Y < S.length; Y += 1) if ($ = S.charAt(Y), Object.prototype.hasOwnProperty.call(ae, $) || (ae[$] = We++, re[$] = !0), ne = ge + $, Object.prototype.hasOwnProperty.call(ae, ne)) ge = ne;
      else {
        if (Object.prototype.hasOwnProperty.call(re, ge)) {
          if (ge.charCodeAt(0) < 256) {
            for (F = 0; F < xe; F++) be <<= 1, ue == T - 1 ? (ue = 0, Le.push(M(be)), be = 0) : ue++;
            for (z = ge.charCodeAt(0), F = 0; F < 8; F++) be = be << 1 | 1 & z, ue == T - 1 ? (ue = 0, Le.push(M(be)), be = 0) : ue++, z >>= 1;
          } else {
            for (z = 1, F = 0; F < xe; F++) be = be << 1 | z, ue == T - 1 ? (ue = 0, Le.push(M(be)), be = 0) : ue++, z = 0;
            for (z = ge.charCodeAt(0), F = 0; F < 16; F++) be = be << 1 | 1 & z, ue == T - 1 ? (ue = 0, Le.push(M(be)), be = 0) : ue++, z >>= 1;
          }
          --Ie == 0 && (Ie = Math.pow(2, xe), xe++), delete re[ge];
        } else for (z = ae[ge], F = 0; F < xe; F++) be = be << 1 | 1 & z, ue == T - 1 ? (ue = 0, Le.push(M(be)), be = 0) : ue++, z >>= 1;
        --Ie == 0 && (Ie = Math.pow(2, xe), xe++), ae[ne] = We++, ge = String($);
      }
      if (ge !== "") {
        if (Object.prototype.hasOwnProperty.call(re, ge)) {
          if (ge.charCodeAt(0) < 256) {
            for (F = 0; F < xe; F++) be <<= 1, ue == T - 1 ? (ue = 0, Le.push(M(be)), be = 0) : ue++;
            for (z = ge.charCodeAt(0), F = 0; F < 8; F++) be = be << 1 | 1 & z, ue == T - 1 ? (ue = 0, Le.push(M(be)), be = 0) : ue++, z >>= 1;
          } else {
            for (z = 1, F = 0; F < xe; F++) be = be << 1 | z, ue == T - 1 ? (ue = 0, Le.push(M(be)), be = 0) : ue++, z = 0;
            for (z = ge.charCodeAt(0), F = 0; F < 16; F++) be = be << 1 | 1 & z, ue == T - 1 ? (ue = 0, Le.push(M(be)), be = 0) : ue++, z >>= 1;
          }
          --Ie == 0 && (Ie = Math.pow(2, xe), xe++), delete re[ge];
        } else for (z = ae[ge], F = 0; F < xe; F++) be = be << 1 | 1 & z, ue == T - 1 ? (ue = 0, Le.push(M(be)), be = 0) : ue++, z >>= 1;
        --Ie == 0 && (Ie = Math.pow(2, xe), xe++);
      }
      for (z = 2, F = 0; F < xe; F++) be = be << 1 | 1 & z, ue == T - 1 ? (ue = 0, Le.push(M(be)), be = 0) : ue++, z >>= 1;
      for (; ; ) {
        if (be <<= 1, ue == T - 1) {
          Le.push(M(be));
          break;
        }
        ue++;
      }
      return Le.join("");
    }, decompress: function(S) {
      return S == null ? "" : S == "" ? null : j._decompress(S.length, 32768, function(T) {
        return S.charCodeAt(T);
      });
    }, _decompress: function(S, T, M) {
      var F, z, Y, ae, re, $, ne, ge = [], Ie = 4, We = 4, xe = 3, Le = "", be = [], ue = { val: M(0), position: T, index: 1 };
      for (F = 0; F < 3; F += 1) ge[F] = F;
      for (Y = 0, re = Math.pow(2, 2), $ = 1; $ != re; ) ae = ue.val & ue.position, ue.position >>= 1, ue.position == 0 && (ue.position = T, ue.val = M(ue.index++)), Y |= (ae > 0 ? 1 : 0) * $, $ <<= 1;
      switch (Y) {
        case 0:
          for (Y = 0, re = Math.pow(2, 8), $ = 1; $ != re; ) ae = ue.val & ue.position, ue.position >>= 1, ue.position == 0 && (ue.position = T, ue.val = M(ue.index++)), Y |= (ae > 0 ? 1 : 0) * $, $ <<= 1;
          ne = y(Y);
          break;
        case 1:
          for (Y = 0, re = Math.pow(2, 16), $ = 1; $ != re; ) ae = ue.val & ue.position, ue.position >>= 1, ue.position == 0 && (ue.position = T, ue.val = M(ue.index++)), Y |= (ae > 0 ? 1 : 0) * $, $ <<= 1;
          ne = y(Y);
          break;
        case 2:
          return "";
      }
      for (ge[3] = ne, z = ne, be.push(ne); ; ) {
        if (ue.index > S) return "";
        for (Y = 0, re = Math.pow(2, xe), $ = 1; $ != re; ) ae = ue.val & ue.position, ue.position >>= 1, ue.position == 0 && (ue.position = T, ue.val = M(ue.index++)), Y |= (ae > 0 ? 1 : 0) * $, $ <<= 1;
        switch (ne = Y) {
          case 0:
            for (Y = 0, re = Math.pow(2, 8), $ = 1; $ != re; ) ae = ue.val & ue.position, ue.position >>= 1, ue.position == 0 && (ue.position = T, ue.val = M(ue.index++)), Y |= (ae > 0 ? 1 : 0) * $, $ <<= 1;
            ge[We++] = y(Y), ne = We - 1, Ie--;
            break;
          case 1:
            for (Y = 0, re = Math.pow(2, 16), $ = 1; $ != re; ) ae = ue.val & ue.position, ue.position >>= 1, ue.position == 0 && (ue.position = T, ue.val = M(ue.index++)), Y |= (ae > 0 ? 1 : 0) * $, $ <<= 1;
            ge[We++] = y(Y), ne = We - 1, Ie--;
            break;
          case 2:
            return be.join("");
        }
        if (Ie == 0 && (Ie = Math.pow(2, xe), xe++), ge[ne]) Le = ge[ne];
        else {
          if (ne !== We) return null;
          Le = z + z.charAt(0);
        }
        be.push(Le), ge[We++] = z + Le.charAt(0), z = Le, --Ie == 0 && (Ie = Math.pow(2, xe), xe++);
      }
    } };
    return j;
  }();
  f != null ? f.exports = h : typeof angular < "u" && angular != null && angular.module("LZString", []).factory("LZString", function() {
    return h;
  });
}(O1)), O1.exports));
function tk(f) {
  return f.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
const L1 = (f, h) => {
  const y = h.colors.content;
  return y.open + tk(f) + y.close;
}, hE = /^((HTML|SVG)\w*)?Element$/, M1 = (f) => {
  const { tagName: h } = f;
  return !!(typeof h == "string" && h.includes("-") || typeof f.hasAttribute == "function" && f.hasAttribute("is"));
};
function Ny(f) {
  return f.nodeType === 11;
}
function vE(f) {
  return { test: (h) => {
    var y;
    return ((h == null || (y = h.constructor) == null ? void 0 : y.name) || M1(h)) && ((_) => {
      const C = _.constructor.name, { nodeType: g } = _;
      return g === 1 && (hE.test(C) || M1(_)) || g === 3 && C === "Text" || g === 8 && C === "Comment" || g === 11 && C === "DocumentFragment";
    })(h);
  }, serialize: (h, y, _, C, g, U) => {
    if (function(S) {
      return S.nodeType === 3;
    }(h)) return L1(h.data, y);
    if (function(S) {
      return S.nodeType === 8;
    }(h)) return ((S, T) => {
      const M = T.colors.comment;
      return M.open + "<!--" + tk(S) + "-->" + M.close;
    })(h.data, y);
    const j = Ny(h) ? "DocumentFragment" : h.tagName.toLowerCase();
    return ++C > y.maxDepth ? ((S, T) => {
      const M = T.colors.tag;
      return M.open + "<" + S + M.close + " …" + M.open + " />" + M.close;
    })(j, y) : ((S, T, M, F, z) => {
      const Y = F.colors.tag;
      return Y.open + "<" + S + (T && Y.close + T + F.spacingOuter + z + Y.open) + (M ? ">" + Y.close + M + F.spacingOuter + z + Y.open + "</" + S : (T && !F.min ? "" : " ") + "/") + ">" + Y.close;
    })(j, ((S, T, M, F, z, Y, ae) => {
      const re = F + M.indent, $ = M.colors;
      return S.map((ne) => {
        const ge = T[ne];
        let Ie = ae(ge, M, re, z, Y);
        return typeof ge != "string" && (Ie.indexOf(`
`) !== -1 && (Ie = M.spacingOuter + re + Ie + M.spacingOuter + F), Ie = "{" + Ie + "}"), M.spacingInner + F + $.prop.open + ne + $.prop.close + "=" + $.value.open + Ie + $.value.close;
      }).join("");
    })(Ny(h) ? [] : Array.from(h.attributes).map((S) => S.name).sort(), Ny(h) ? {} : Array.from(h.attributes).reduce((S, T) => (S[T.name] = T.value, S), {}), y, _ + y.indent, C, g, U), ((S, T, M, F, z, Y) => S.map((ae) => {
      const re = typeof ae == "string" ? L1(ae, T) : Y(ae, T, M, F, z);
      return re === "" && typeof ae == "object" && ae !== null && ae.nodeType !== 3 ? "" : T.spacingOuter + M + re;
    }).join(""))(Array.prototype.slice.call(h.childNodes || h.children).filter(f), y, _ + y.indent, C, g, U), y, _);
  } };
}
let rk = null, Oy = null, Ly = null;
try {
  const f = module && module.require;
  Oy = f.call(module, "fs").readFileSync, Ly = f.call(module, "@babel/code-frame").codeFrameColumns, rk = f.call(module, "chalk");
} catch {
}
function gE() {
  return !Oy || !Ly ? "" : function(f) {
    const h = f.indexOf("(") + 1, y = f.indexOf(")"), _ = f.slice(h, y), C = _.split(":"), [g, U, j] = [C[0], parseInt(C[1], 10), parseInt(C[2], 10)];
    let S = "";
    try {
      S = Oy(g, "utf-8");
    } catch {
      return "";
    }
    const T = Ly(S, { start: { line: U, column: j } }, { highlightCode: !0, linesBelow: 0 });
    return rk.dim(_) + `
` + T + `
`;
  }(new Error().stack.split(`
`).slice(1).find((f) => !f.includes("node_modules/")));
}
function Iy() {
  return typeof jest < "u" && jest !== null && (setTimeout._isMockFunction === !0 || Object.prototype.hasOwnProperty.call(setTimeout, "clock"));
}
function Gy() {
  if (typeof window > "u") throw new Error("Could not find default container");
  return window.document;
}
function ak(f) {
  if (f.defaultView) return f.defaultView;
  if (f.ownerDocument && f.ownerDocument.defaultView) return f.ownerDocument.defaultView;
  if (f.window) return f.window;
  throw f.ownerDocument && f.ownerDocument.defaultView === null ? new Error("It looks like the window object is not available for the provided node.") : f.then instanceof Function ? new Error("It looks like you passed a Promise object instead of a DOM node. Did you do something like `fireEvent.click(screen.findBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`, or await the findBy query `fireEvent.click(await screen.findBy...`?") : Array.isArray(f) ? new Error("It looks like you passed an Array instead of a DOM node. Did you do something like `fireEvent.click(screen.getAllBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`?") : typeof f.debug == "function" && typeof f.logTestingPlaygroundURL == "function" ? new Error("It looks like you passed a `screen` object. Did you do something like `fireEvent.click(screen, ...` when you meant to use a query, e.g. `fireEvent.click(screen.getBy..., `?") : new Error("The given node is not an Element, the node type is: " + typeof f + ".");
}
function sl(f) {
  if (!f || typeof f.querySelector != "function" || typeof f.querySelectorAll != "function") throw new TypeError("Expected container to be an Element, a Document or a DocumentFragment but got " + function(h) {
    return typeof h == "object" ? h === null ? "null" : h.constructor.name : typeof h;
  }(f) + ".");
}
const yE = () => {
  if (typeof process > "u") return !1;
  let f;
  try {
    var h;
    const y = (h = process.env) == null ? void 0 : h.COLORS;
    y && (f = JSON.parse(y));
  } catch {
  }
  return typeof f == "boolean" ? f : process.versions !== void 0 && process.versions.node !== void 0;
}, { DOMCollection: bE } = X1.plugins;
function wE(f) {
  return f.nodeType !== 8 && (f.nodeType !== 1 || !f.matches(Xn().defaultIgnore));
}
function dd(f, h, y) {
  if (y === void 0 && (y = {}), f || (f = Gy().body), typeof h != "number" && (h = typeof process < "u" && process.env !== void 0 && process.env.DEBUG_PRINT_LIMIT || 7e3), h === 0) return "";
  f.documentElement && (f = f.documentElement);
  let _ = typeof f;
  if (_ === "object" ? _ = f.constructor.name : f = {}, !("outerHTML" in f)) throw new TypeError("Expected an element or document but got " + _);
  const { filterNode: C = wE, ...g } = y, U = X1.format(f, { plugins: [vE(C), bE], printFunctionName: !1, highlight: yE(), ...g });
  return h !== void 0 && f.outerHTML.length > h ? U.slice(0, h) + "..." : U;
}
const z1 = function() {
  const f = gE();
  console.log(f ? dd(...arguments) + `

` + f : dd(...arguments));
};
let qs = { testIdAttribute: "data-testid", asyncUtilTimeout: 1e3, asyncWrapper: (f) => f(), unstable_advanceTimersWrapper: (f) => f(), eventWrapper: (f) => f(), defaultHidden: !1, defaultIgnore: "script, style", showOriginalStackTrace: !1, throwSuggestions: !1, getElementError(f, h) {
  const y = dd(h), _ = new Error([f, "Ignored nodes: comments, " + qs.defaultIgnore + `
` + y].filter(Boolean).join(`

`));
  return _.name = "TestingLibraryElementError", _;
}, _disableExpensiveErrorDiagnostics: !1, computedStyleSupportsPseudoElements: !1 };
function Xn() {
  return qs;
}
const kE = ["button", "meter", "output", "progress", "select", "textarea", "input"];
function ok(f) {
  return kE.includes(f.nodeName.toLowerCase()) ? "" : f.nodeType === 3 ? f.textContent : Array.from(f.childNodes).map((h) => ok(h)).join("");
}
function My(f) {
  let h;
  return h = f.tagName.toLowerCase() === "label" ? ok(f) : f.value || f.textContent, h;
}
function ik(f) {
  var h;
  if (f.labels !== void 0) return (h = f.labels) != null ? h : [];
  if (!function(_) {
    return /BUTTON|METER|OUTPUT|PROGRESS|SELECT|TEXTAREA/.test(_.tagName) || _.tagName === "INPUT" && _.getAttribute("type") !== "hidden";
  }(f)) return [];
  const y = f.ownerDocument.querySelectorAll("label");
  return Array.from(y).filter((_) => _.control === f);
}
function lk(f, h, y) {
  let { selector: _ = "*" } = y === void 0 ? {} : y;
  const C = h.getAttribute("aria-labelledby"), g = C ? C.split(" ") : [];
  return g.length ? g.map((U) => {
    const j = f.querySelector('[id="' + U + '"]');
    return j ? { content: My(j), formControl: null } : { content: "", formControl: null };
  }) : Array.from(ik(h)).map((U) => ({ content: My(U), formControl: Array.from(U.querySelectorAll("button, input, meter, output, progress, select, textarea")).filter((j) => j.matches(_))[0] }));
}
function uk(f) {
  if (f == null) throw new Error("It looks like " + f + " was passed instead of a matcher. Did you do something like getByText(" + f + ")?");
}
function pd(f, h, y, _) {
  if (typeof f != "string") return !1;
  uk(y);
  const C = _(f);
  return typeof y == "string" || typeof y == "number" ? C.toLowerCase().includes(y.toString().toLowerCase()) : typeof y == "function" ? y(C, h) : ck(y, C);
}
function ul(f, h, y, _) {
  if (typeof f != "string") return !1;
  uk(y);
  const C = _(f);
  return y instanceof Function ? y(C, h) : y instanceof RegExp ? ck(y, C) : C === String(y);
}
function sk(f) {
  let { trim: h = !0, collapseWhitespace: y = !0 } = f === void 0 ? {} : f;
  return (_) => {
    let C = _;
    return C = h ? C.trim() : C, C = y ? C.replace(/\s+/g, " ") : C, C;
  };
}
function Ys(f) {
  let { trim: h, collapseWhitespace: y, normalizer: _ } = f;
  if (!_) return sk({ trim: h, collapseWhitespace: y });
  if (h !== void 0 || y !== void 0) throw new Error('trim and collapseWhitespace are not supported with a normalizer. If you want to use the default trim and collapseWhitespace logic in your normalizer, use "getDefaultNormalizer({trim, collapseWhitespace})" and compose that into your normalizer');
  return _;
}
function ck(f, h) {
  const y = f.test(h);
  return f.global && f.lastIndex !== 0 && (console.warn("To match all elements we had to reset the lastIndex of the RegExp because the global flag is enabled. We encourage to remove the global flag from the RegExp."), f.lastIndex = 0), y;
}
function Kh(f) {
  return f.matches("input[type=submit], input[type=button], input[type=reset]") ? f.value : Array.from(f.childNodes).filter((h) => h.nodeType === 3 && !!h.textContent).map((h) => h.textContent).join("");
}
const SE = function(f) {
  function h(C) {
    let { attributes: g = [] } = C;
    return g.length;
  }
  function y(C) {
    let { attributes: g = [] } = C;
    const U = g.findIndex((S) => S.value && S.name === "type" && S.value === "text");
    U >= 0 && (g = [...g.slice(0, U), ...g.slice(U + 1)]);
    const j = function(S) {
      let { name: T, attributes: M } = S;
      return "" + T + M.map((F) => {
        let { name: z, value: Y, constraints: ae = [] } = F;
        const re = ae.indexOf("undefined") !== -1, $ = ae.indexOf("set") !== -1;
        return Y !== void 0 ? "[" + z + '="' + Y + '"]' : re ? ":not([" + z + "])" : $ ? "[" + z + "]:not([" + z + '=""])' : "[" + z + "]";
      }).join("");
    }({ ...C, attributes: g });
    return (S) => !(U >= 0 && S.type !== "text") && S.matches(j);
  }
  let _ = [];
  for (const [C, g] of f.entries()) _ = [..._, { match: y(C), roles: Array.from(g), specificity: h(C) }];
  return _.sort(function(C, g) {
    let { specificity: U } = C, { specificity: j } = g;
    return j - U;
  });
}(Qa.elementRoles);
function dk(f) {
  return f.hidden === !0 || f.getAttribute("aria-hidden") === "true" ? !0 : f.ownerDocument.defaultView.getComputedStyle(f).display === "none";
}
function Jy(f, h) {
  h === void 0 && (h = {});
  const { isSubtreeInaccessible: y = dk } = h;
  if (f.ownerDocument.defaultView.getComputedStyle(f).visibility === "hidden") return !0;
  let _ = f;
  for (; _; ) {
    if (y(_)) return !0;
    _ = _.parentElement;
  }
  return !1;
}
function Zy(f) {
  for (const { match: h, roles: y } of SE) if (h(f)) return [...y];
  return [];
}
function EE(f, h) {
  let { hidden: y, includeDescription: _ } = h;
  const C = function(g, U) {
    let { hidden: j = !1 } = U === void 0 ? {} : U;
    return function S(T) {
      return [T, ...Array.from(T.children).reduce((M, F) => [...M, ...S(F)], [])];
    }(g).filter((S) => j !== !1 || Jy(S) === !1).reduce((S, T) => {
      let M = [];
      return M = T.hasAttribute("role") ? T.getAttribute("role").split(" ").slice(0, 1) : Zy(T), M.reduce((F, z) => Array.isArray(F[z]) ? { ...F, [z]: [...F[z], T] } : { ...F, [z]: [T] }, S);
    }, {});
  }(f, { hidden: y });
  return Object.entries(C).filter((g) => {
    let [U] = g;
    return U !== "generic";
  }).map((g) => {
    let [U, j] = g;
    const S = "-".repeat(50);
    return U + `:

` + j.map((T) => {
      const M = 'Name "' + Xy(T, { computedStyleSupportsPseudoElements: Xn().computedStyleSupportsPseudoElements }) + `":
`, F = dd(T.cloneNode(!1));
      return _ ? "" + M + ('Description "' + nk(T, { computedStyleSupportsPseudoElements: Xn().computedStyleSupportsPseudoElements }) + `":
`) + F : "" + M + F;
    }).join(`

`) + `

` + S;
  }).join(`
`);
}
function kp(f, h) {
  const y = f.getAttribute(h);
  return y === "true" || y !== "false" && void 0;
}
const A1 = sk();
function U1(f) {
  return new RegExp(function(h) {
    return h.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&");
  }(f.toLowerCase()), "i");
}
function _u(f, h, y, _) {
  let { variant: C, name: g } = _, U = "";
  const j = {}, S = [["Role", "TestId"].includes(f) ? y : U1(y)];
  g && (j.name = U1(g)), f === "Role" && Jy(h) && (j.hidden = !0, U = `Element is inaccessible. This means that the element and all its children are invisible to screen readers.
    If you are using the aria-hidden prop, make sure this is the right choice for your case.
    `), Object.keys(j).length > 0 && S.push(j);
  const T = C + "By" + f;
  return { queryName: f, queryMethod: T, queryArgs: S, variant: C, warning: U, toString() {
    U && console.warn(U);
    let [M, F] = S;
    return M = typeof M == "string" ? "'" + M + "'" : M, F = F ? ", { " + Object.entries(F).map((z) => {
      let [Y, ae] = z;
      return Y + ": " + ae;
    }).join(", ") + " }" : "", T + "(" + M + F + ")";
  } };
}
function Pu(f, h, y) {
  return y && !0;
}
function zy(f, h, y) {
  var _, C;
  if (h === void 0 && (h = "get"), f.matches(Xn().defaultIgnore)) return;
  const g = (_ = f.getAttribute("role")) != null ? _ : (C = Zy(f)) == null ? void 0 : C[0];
  if (g !== "generic" && Pu(0, 0, g)) return _u("Role", f, g, { variant: h, name: Xy(f, { computedStyleSupportsPseudoElements: Xn().computedStyleSupportsPseudoElements }) });
  const U = lk(document, f).map((z) => z.content).join(" ");
  if (Pu(0, 0, U)) return _u("LabelText", f, U, { variant: h });
  const j = f.getAttribute("placeholder");
  if (Pu(0, 0, j)) return _u("PlaceholderText", f, j, { variant: h });
  const S = A1(Kh(f));
  if (Pu(0, 0, S)) return _u("Text", f, S, { variant: h });
  if (Pu(0, 0, f.value)) return _u("DisplayValue", f, A1(f.value), { variant: h });
  const T = f.getAttribute("alt");
  if (Pu(0, 0, T)) return _u("AltText", f, T, { variant: h });
  const M = f.getAttribute("title");
  if (Pu(0, 0, M)) return _u("Title", f, M, { variant: h });
  const F = f.getAttribute(Xn().testIdAttribute);
  return Pu(0, 0, F) ? _u("TestId", f, F, { variant: h }) : void 0;
}
function Ah(f, h) {
  f.stack = h.stack.replace(h.message, f.message);
}
function xE(f, h) {
  let { container: y = Gy(), timeout: _ = Xn().asyncUtilTimeout, showOriginalStackTrace: C = Xn().showOriginalStackTrace, stackTraceError: g, interval: U = 50, onTimeout: j = (T) => (Object.defineProperty(T, "message", { value: Xn().getElementError(T.message, y).message }), T), mutationObserverOptions: S = { subtree: !0, childList: !0, attributes: !0, characterData: !0 } } = h;
  if (typeof f != "function") throw new TypeError("Received `callback` arg must be a function");
  return new Promise(async (T, M) => {
    let F, z, Y, ae = !1, re = "idle";
    const $ = setTimeout(function() {
      let xe;
      F ? (xe = F, C || xe.name !== "TestingLibraryElementError" || Ah(xe, g)) : (xe = new Error("Timed out in waitFor."), C || Ah(xe, g)), ge(j(xe), null);
    }, _), ne = Iy();
    if (ne) {
      const { unstable_advanceTimersWrapper: xe } = Xn();
      for (We(); !ae; ) {
        if (!Iy()) {
          const Le = new Error("Changed from using fake timers to real timers while using waitFor. This is not allowed and will result in very strange behavior. Please ensure you're awaiting all async things your test is doing before changing to real timers. For more info, please go to https://github.com/testing-library/dom-testing-library/issues/830");
          return C || Ah(Le, g), void M(Le);
        }
        if (await xe(async () => {
          jest.advanceTimersByTime(U);
        }), ae) break;
        We();
      }
    } else {
      try {
        sl(y);
      } catch (Le) {
        return void M(Le);
      }
      z = setInterval(Ie, U);
      const { MutationObserver: xe } = ak(y);
      Y = new xe(Ie), Y.observe(y, S), We();
    }
    function ge(xe, Le) {
      ae = !0, clearTimeout($), ne || (clearInterval(z), Y.disconnect()), xe ? M(xe) : T(Le);
    }
    function Ie() {
      if (Iy()) {
        const xe = new Error("Changed from using real timers to fake timers while using waitFor. This is not allowed and will result in very strange behavior. Please ensure you're awaiting all async things your test is doing before changing to fake timers. For more info, please go to https://github.com/testing-library/dom-testing-library/issues/830");
        return C || Ah(xe, g), M(xe);
      }
      return We();
    }
    function We() {
      if (re !== "pending") try {
        const xe = function(Le) {
          try {
            return qs._disableExpensiveErrorDiagnostics = !0, Le();
          } finally {
            qs._disableExpensiveErrorDiagnostics = !1;
          }
        }(f);
        typeof (xe == null ? void 0 : xe.then) == "function" ? (re = "pending", xe.then((Le) => {
          re = "resolved", ge(null, Le);
        }, (Le) => {
          re = "rejected", F = Le;
        })) : ge(null, xe);
      } catch (xe) {
        F = xe;
      }
    }
  });
}
function F1(f, h) {
  return Xn().getElementError(f, h);
}
function Xh(f, h, y, _) {
  let { exact: C = !0, collapseWhitespace: g, trim: U, normalizer: j } = _ === void 0 ? {} : _;
  const S = C ? ul : pd, T = Ys({ collapseWhitespace: g, trim: U, normalizer: j });
  return Array.from(h.querySelectorAll("[" + f + "]")).filter((M) => S(M.getAttribute(f), M, y, T));
}
function Vh(f, h) {
  return function(y) {
    for (var _ = arguments.length, C = new Array(_ > 1 ? _ - 1 : 0), g = 1; g < _; g++) C[g - 1] = arguments[g];
    const U = f(y, ...C);
    if (U.length > 1) {
      const j = U.map((S) => F1(null, S).message).join(`

`);
      throw function(S, T) {
        return F1(S + "\n\n(If this is intentional, then use the `*AllBy*` variant of the query (like `queryAllByText`, `getAllByText`, or `findAllByText`)).", T);
      }(h(y, ...C) + `

Here are the matching elements:

` + j, y);
    }
    return U[0] || null;
  };
}
function fk(f, h) {
  return Xn().getElementError(`A better query is available, try this:
` + f.toString() + `
`, h);
}
function Hh(f) {
  return (h, y, _, C) => function(g, U) {
    const j = new Error("STACK_TRACE_MESSAGE");
    return Xn().asyncWrapper(() => xE(g, { stackTraceError: j, ...U }));
  }(() => f(h, y, _), { container: h, ...C });
}
const cd = (f, h, y) => function(_) {
  for (var C = arguments.length, g = new Array(C > 1 ? C - 1 : 0), U = 1; U < C; U++) g[U - 1] = arguments[U];
  const j = f(_, ...g), [{ suggest: S = Xn().throwSuggestions } = {}] = g.slice(-1);
  if (j && S) {
    const T = zy(j, y);
    if (T && !h.endsWith(T.queryName)) throw fk(T.toString(), _);
  }
  return j;
}, Ya = (f, h, y) => function(_) {
  for (var C = arguments.length, g = new Array(C > 1 ? C - 1 : 0), U = 1; U < C; U++) g[U - 1] = arguments[U];
  const j = f(_, ...g), [{ suggest: S = Xn().throwSuggestions } = {}] = g.slice(-1);
  if (j.length && S) {
    const T = [...new Set(j.map((M) => {
      var F;
      return (F = zy(M, y)) == null ? void 0 : F.toString();
    }))];
    if (T.length === 1 && !h.endsWith(zy(j[0], y).queryName)) throw fk(T[0], _);
  }
  return j;
};
function Ks(f, h, y) {
  const _ = cd(Vh(f, h), f.name, "query"), C = /* @__PURE__ */ function(j, S) {
    return function(T) {
      for (var M = arguments.length, F = new Array(M > 1 ? M - 1 : 0), z = 1; z < M; z++) F[z - 1] = arguments[z];
      const Y = j(T, ...F);
      if (!Y.length) throw Xn().getElementError(S(T, ...F), T);
      return Y;
    };
  }(f, y), g = Vh(C, h), U = cd(g, f.name, "get");
  return [_, Ya(C, f.name.replace("query", "get"), "getAll"), U, Hh(Ya(C, f.name, "findAll")), Hh(cd(g, f.name, "find"))];
}
const TE = function(f, h, y) {
  let { exact: _ = !0, trim: C, collapseWhitespace: g, normalizer: U } = y === void 0 ? {} : y;
  const j = _ ? ul : pd, S = Ys({ collapseWhitespace: g, trim: C, normalizer: U });
  return function(M) {
    return Array.from(M.querySelectorAll("label,input")).map((F) => ({ node: F, textToMatch: My(F) })).filter((F) => {
      let { textToMatch: z } = F;
      return z !== null;
    });
  }(f).filter((M) => {
    let { node: F, textToMatch: z } = M;
    return j(z, F, h, S);
  }).map((M) => {
    let { node: F } = M;
    return F;
  });
}, Tp = function(f, h, y) {
  let { selector: _ = "*", exact: C = !0, collapseWhitespace: g, trim: U, normalizer: j } = y === void 0 ? {} : y;
  sl(f);
  const S = C ? ul : pd, T = Ys({ collapseWhitespace: g, trim: U, normalizer: j }), M = Array.from(f.querySelectorAll("*")).filter((F) => ik(F).length || F.hasAttribute("aria-labelledby")).reduce((F, z) => {
    const Y = lk(f, z, { selector: _ });
    Y.filter((re) => !!re.formControl).forEach((re) => {
      S(re.content, re.formControl, h, T) && re.formControl && F.push(re.formControl);
    });
    const ae = Y.filter((re) => !!re.content).map((re) => re.content);
    return S(ae.join(" "), z, h, T) && F.push(z), ae.length > 1 && ae.forEach((re, $) => {
      S(re, z, h, T) && F.push(z);
      const ne = [...ae];
      ne.splice($, 1), ne.length > 1 && S(ne.join(" "), z, h, T) && F.push(z);
    }), F;
  }, []).concat(Xh("aria-label", f, h, { exact: C, normalizer: T }));
  return Array.from(new Set(M)).filter((F) => F.matches(_));
}, Qs = function(f, h) {
  for (var y = arguments.length, _ = new Array(y > 2 ? y - 2 : 0), C = 2; C < y; C++) _[C - 2] = arguments[C];
  const g = Tp(f, h, ..._);
  if (!g.length) {
    const U = TE(f, h, ..._);
    if (U.length) {
      const j = U.map((S) => function(T, M) {
        const F = M.getAttribute("for");
        if (!F) return null;
        const z = T.querySelector('[id="' + F + '"]');
        return z ? z.tagName.toLowerCase() : null;
      }(f, S)).filter((S) => !!S);
      throw j.length ? Xn().getElementError(j.map((S) => "Found a label with the text of: " + h + ", however the element associated with this label (<" + S + " />) is non-labellable [https://html.spec.whatwg.org/multipage/forms.html#category-label]. If you really need to label a <" + S + " />, you can use aria-label or aria-labelledby instead.").join(`

`), f) : Xn().getElementError("Found a label with the text of: " + h + `, however no form control was found associated to that label. Make sure you're using the "for" attribute or "aria-labelledby" attribute correctly.`, f);
    }
    throw Xn().getElementError("Unable to find a label with the text of: " + h, f);
  }
  return g;
}, pk = (f, h) => "Found multiple elements with the text of: " + h, CE = cd(Vh(Tp, pk), Tp.name, "query"), mk = Vh(Qs, pk), _E = Hh(Ya(Qs, Qs.name, "findAll")), PE = Hh(cd(mk, Qs.name, "find")), RE = Ya(Qs, Qs.name, "getAll"), NE = cd(mk, Qs.name, "get"), IE = Ya(Tp, Tp.name, "queryAll"), Ay = function() {
  for (var f = arguments.length, h = new Array(f), y = 0; y < f; y++) h[y] = arguments[y];
  return sl(h[0]), Xh("placeholder", ...h);
}, DE = Ya(Ay, Ay.name, "queryAll"), [OE, LE, ME, zE, AE] = Ks(Ay, (f, h) => "Found multiple elements with the placeholder text of: " + h, (f, h) => "Unable to find an element with the placeholder text of: " + h), Uy = function(f, h, y) {
  let { selector: _ = "*", exact: C = !0, collapseWhitespace: g, trim: U, ignore: j = Xn().defaultIgnore, normalizer: S } = y === void 0 ? {} : y;
  sl(f);
  const T = C ? ul : pd, M = Ys({ collapseWhitespace: g, trim: U, normalizer: S });
  let F = [];
  return typeof f.matches == "function" && f.matches(_) && (F = [f]), [...F, ...Array.from(f.querySelectorAll(_))].filter((z) => !j || !z.matches(j)).filter((z) => T(Kh(z), z, h, M));
}, UE = Ya(Uy, Uy.name, "queryAll"), [FE, jE, BE, WE, VE] = Ks(Uy, (f, h) => "Found multiple elements with the text: " + h, function(f, h, y) {
  y === void 0 && (y = {});
  const { collapseWhitespace: _, trim: C, normalizer: g, selector: U } = y, j = Ys({ collapseWhitespace: _, trim: C, normalizer: g })(h.toString());
  return "Unable to find an element with the text: " + (j !== h.toString() ? j + " (normalized from '" + h + "')" : h) + ((U ?? "*") !== "*" ? ", which matches selector '" + U + "'" : "") + ". This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.";
}), Fy = function(f, h, y) {
  let { exact: _ = !0, collapseWhitespace: C, trim: g, normalizer: U } = y === void 0 ? {} : y;
  sl(f);
  const j = _ ? ul : pd, S = Ys({ collapseWhitespace: C, trim: g, normalizer: U });
  return Array.from(f.querySelectorAll("input,textarea,select")).filter((T) => T.tagName === "SELECT" ? Array.from(T.options).filter((M) => M.selected).some((M) => j(Kh(M), M, h, S)) : j(T.value, T, h, S));
}, HE = Ya(Fy, Fy.name, "queryAll"), [$E, qE, QE, YE, KE] = Ks(Fy, (f, h) => "Found multiple elements with the display value: " + h + ".", (f, h) => "Unable to find an element with the display value: " + h + "."), XE = /^(img|input|area|.+-.+)$/i, jy = function(f, h, y) {
  return y === void 0 && (y = {}), sl(f), Xh("alt", f, h, y).filter((_) => XE.test(_.tagName));
}, GE = Ya(jy, jy.name, "queryAll"), [JE, ZE, ex, nx, tx] = Ks(jy, (f, h) => "Found multiple elements with the alt text: " + h, (f, h) => "Unable to find an element with the alt text: " + h), By = function(f, h, y) {
  let { exact: _ = !0, collapseWhitespace: C, trim: g, normalizer: U } = y === void 0 ? {} : y;
  sl(f);
  const j = _ ? ul : pd, S = Ys({ collapseWhitespace: C, trim: g, normalizer: U });
  return Array.from(f.querySelectorAll("[title], svg > title")).filter((T) => j(T.getAttribute("title"), T, h, S) || ((M) => {
    var F;
    return M.tagName.toLowerCase() === "title" && ((F = M.parentElement) == null ? void 0 : F.tagName.toLowerCase()) === "svg";
  })(T) && j(Kh(T), T, h, S));
}, rx = Ya(By, By.name, "queryAll"), [ax, ox, ix, lx, ux] = Ks(By, (f, h) => "Found multiple elements with the title: " + h + ".", (f, h) => "Unable to find an element with the title: " + h + "."), Wy = function(f, h, y) {
  let { hidden: _ = Xn().defaultHidden, name: C, description: g, queryFallbacks: U = !1, selected: j, busy: S, checked: T, pressed: M, current: F, level: z, expanded: Y, value: { now: ae, min: re, max: $, text: ne } = {} } = y === void 0 ? {} : y;
  var ge, Ie, We, xe, Le, be, ue, nn, pn, Ze;
  if (sl(f), j !== void 0 && ((ge = Qa.roles.get(h)) == null ? void 0 : ge.props["aria-selected"]) === void 0) throw new Error('"aria-selected" is not supported on role "' + h + '".');
  if (S !== void 0 && ((Ie = Qa.roles.get(h)) == null ? void 0 : Ie.props["aria-busy"]) === void 0) throw new Error('"aria-busy" is not supported on role "' + h + '".');
  if (T !== void 0 && ((We = Qa.roles.get(h)) == null ? void 0 : We.props["aria-checked"]) === void 0) throw new Error('"aria-checked" is not supported on role "' + h + '".');
  if (M !== void 0 && ((xe = Qa.roles.get(h)) == null ? void 0 : xe.props["aria-pressed"]) === void 0) throw new Error('"aria-pressed" is not supported on role "' + h + '".');
  if (F !== void 0 && ((Le = Qa.roles.get(h)) == null ? void 0 : Le.props["aria-current"]) === void 0) throw new Error('"aria-current" is not supported on role "' + h + '".');
  if (z !== void 0 && h !== "heading") throw new Error('Role "' + h + '" cannot have "level" property.');
  if (ae !== void 0 && ((be = Qa.roles.get(h)) == null ? void 0 : be.props["aria-valuenow"]) === void 0) throw new Error('"aria-valuenow" is not supported on role "' + h + '".');
  if ($ !== void 0 && ((ue = Qa.roles.get(h)) == null ? void 0 : ue.props["aria-valuemax"]) === void 0) throw new Error('"aria-valuemax" is not supported on role "' + h + '".');
  if (re !== void 0 && ((nn = Qa.roles.get(h)) == null ? void 0 : nn.props["aria-valuemin"]) === void 0) throw new Error('"aria-valuemin" is not supported on role "' + h + '".');
  if (ne !== void 0 && ((pn = Qa.roles.get(h)) == null ? void 0 : pn.props["aria-valuetext"]) === void 0) throw new Error('"aria-valuetext" is not supported on role "' + h + '".');
  if (Y !== void 0 && ((Ze = Qa.roles.get(h)) == null ? void 0 : Ze.props["aria-expanded"]) === void 0) throw new Error('"aria-expanded" is not supported on role "' + h + '".');
  const gn = /* @__PURE__ */ new WeakMap();
  function ve(Ve) {
    return gn.has(Ve) || gn.set(Ve, dk(Ve)), gn.get(Ve);
  }
  return Array.from(f.querySelectorAll(function(Ve) {
    var mn;
    const he = '*[role~="' + Ve + '"]', an = (mn = Qa.roleElements.get(Ve)) != null ? mn : /* @__PURE__ */ new Set(), ce = new Set(Array.from(an).map((De) => {
      let { name: Ee } = De;
      return Ee;
    }));
    return [he].concat(Array.from(ce)).join(",");
  }(h))).filter((Ve) => {
    if (Ve.hasAttribute("role")) {
      const mn = Ve.getAttribute("role");
      if (U) return mn.split(" ").filter(Boolean).some((an) => an === h);
      const [he] = mn.split(" ");
      return he === h;
    }
    return Zy(Ve).some((mn) => mn === h);
  }).filter((Ve) => {
    if (j !== void 0) return j === function(he) {
      return he.tagName === "OPTION" ? he.selected : kp(he, "aria-selected");
    }(Ve);
    if (S !== void 0) return S === function(he) {
      return he.getAttribute("aria-busy") === "true";
    }(Ve);
    if (T !== void 0) return T === function(he) {
      if (!("indeterminate" in he) || !he.indeterminate) return "checked" in he ? he.checked : kp(he, "aria-checked");
    }(Ve);
    if (M !== void 0) return M === function(he) {
      return kp(he, "aria-pressed");
    }(Ve);
    if (F !== void 0) return F === function(he) {
      var an, ce;
      return (an = (ce = kp(he, "aria-current")) != null ? ce : he.getAttribute("aria-current")) != null && an;
    }(Ve);
    if (Y !== void 0) return Y === function(he) {
      return kp(he, "aria-expanded");
    }(Ve);
    if (z !== void 0) return z === function(he) {
      return he.getAttribute("aria-level") && Number(he.getAttribute("aria-level")) || { H1: 1, H2: 2, H3: 3, H4: 4, H5: 5, H6: 6 }[he.tagName];
    }(Ve);
    if (ae !== void 0 || $ !== void 0 || re !== void 0 || ne !== void 0) {
      let he = !0;
      var mn;
      return ae !== void 0 && he && (he = ae === function(an) {
        const ce = an.getAttribute("aria-valuenow");
        return ce === null ? void 0 : +ce;
      }(Ve)), $ !== void 0 && he && (he = $ === function(an) {
        const ce = an.getAttribute("aria-valuemax");
        return ce === null ? void 0 : +ce;
      }(Ve)), re !== void 0 && he && (he = re === function(an) {
        const ce = an.getAttribute("aria-valuemin");
        return ce === null ? void 0 : +ce;
      }(Ve)), ne !== void 0 && he && (he = ul((mn = function(an) {
        const ce = an.getAttribute("aria-valuetext");
        return ce === null ? void 0 : ce;
      }(Ve)) != null ? mn : null, Ve, ne, (an) => an)), he;
    }
    return !0;
  }).filter((Ve) => C === void 0 || ul(Xy(Ve, { computedStyleSupportsPseudoElements: Xn().computedStyleSupportsPseudoElements }), Ve, C, (mn) => mn)).filter((Ve) => g === void 0 || ul(nk(Ve, { computedStyleSupportsPseudoElements: Xn().computedStyleSupportsPseudoElements }), Ve, g, (mn) => mn)).filter((Ve) => _ !== !1 || Jy(Ve, { isSubtreeInaccessible: ve }) === !1);
}, j1 = (f) => {
  let h = "";
  return h = f === void 0 ? "" : typeof f == "string" ? ' and name "' + f + '"' : " and name `" + f + "`", h;
}, sx = Ya(Wy, Wy.name, "queryAll"), [cx, dx, fx, px, mx] = Ks(Wy, function(f, h, y) {
  let { name: _ } = y === void 0 ? {} : y;
  return 'Found multiple elements with the role "' + h + '"' + j1(_);
}, function(f, h, y) {
  let { hidden: _ = Xn().defaultHidden, name: C, description: g } = y === void 0 ? {} : y;
  if (Xn()._disableExpensiveErrorDiagnostics) return 'Unable to find role="' + h + '"' + j1(C);
  let U, j = "";
  Array.from(f.children).forEach((M) => {
    j += EE(M, { hidden: _, includeDescription: g !== void 0 });
  }), U = j.length === 0 ? _ === !1 ? "There are no accessible roles. But there might be some inaccessible roles. If you wish to access them, then set the `hidden` option to `true`. Learn more about this here: https://testing-library.com/docs/dom-testing-library/api-queries#byrole" : "There are no available roles." : (`
Here are the ` + (_ === !1 ? "accessible" : "available") + ` roles:

  ` + j.replace(/\n/g, `
  `).replace(/\n\s\s\n/g, `

`) + `
`).trim();
  let S = "";
  S = C === void 0 ? "" : typeof C == "string" ? ' and name "' + C + '"' : " and name `" + C + "`";
  let T = "";
  return T = g === void 0 ? "" : typeof g == "string" ? ' and description "' + g + '"' : " and description `" + g + "`", (`
Unable to find an ` + (_ === !1 ? "accessible " : "") + 'element with the role "' + h + '"' + S + T + `

` + U).trim();
}), Vy = () => Xn().testIdAttribute, Hy = function() {
  for (var f = arguments.length, h = new Array(f), y = 0; y < f; y++) h[y] = arguments[y];
  return sl(h[0]), Xh(Vy(), ...h);
}, hx = Ya(Hy, Hy.name, "queryAll"), [vx, gx, yx, bx, wx] = Ks(Hy, (f, h) => "Found multiple elements by: [" + Vy() + '="' + h + '"]', (f, h) => "Unable to find an element by: [" + Vy() + '="' + h + '"]');
var $y = Object.freeze({ __proto__: null, queryAllByLabelText: IE, queryByLabelText: CE, getAllByLabelText: RE, getByLabelText: NE, findAllByLabelText: _E, findByLabelText: PE, queryByPlaceholderText: OE, queryAllByPlaceholderText: DE, getByPlaceholderText: ME, getAllByPlaceholderText: LE, findAllByPlaceholderText: zE, findByPlaceholderText: AE, queryByText: FE, queryAllByText: UE, getByText: BE, getAllByText: jE, findAllByText: WE, findByText: VE, queryByDisplayValue: $E, queryAllByDisplayValue: HE, getByDisplayValue: QE, getAllByDisplayValue: qE, findAllByDisplayValue: YE, findByDisplayValue: KE, queryByAltText: JE, queryAllByAltText: GE, getByAltText: ex, getAllByAltText: ZE, findAllByAltText: nx, findByAltText: tx, queryByTitle: ax, queryAllByTitle: rx, getByTitle: ix, getAllByTitle: ox, findAllByTitle: lx, findByTitle: ux, queryByRole: cx, queryAllByRole: sx, getAllByRole: dx, getByRole: fx, findAllByRole: px, findByRole: mx, queryByTestId: vx, queryAllByTestId: hx, getByTestId: yx, getAllByTestId: gx, findAllByTestId: bx, findByTestId: wx });
function hk(f, h, y) {
  return h === void 0 && (h = $y), y === void 0 && (y = {}), Object.keys(h).reduce((_, C) => {
    const g = h[C];
    return _[C] = g.bind(null, f), _;
  }, y);
}
const B1 = { copy: { EventType: "ClipboardEvent", defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } }, cut: { EventType: "ClipboardEvent", defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } }, paste: { EventType: "ClipboardEvent", defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } }, compositionEnd: { EventType: "CompositionEvent", defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } }, compositionStart: { EventType: "CompositionEvent", defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } }, compositionUpdate: { EventType: "CompositionEvent", defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } }, keyDown: { EventType: "KeyboardEvent", defaultInit: { bubbles: !0, cancelable: !0, charCode: 0, composed: !0 } }, keyPress: { EventType: "KeyboardEvent", defaultInit: { bubbles: !0, cancelable: !0, charCode: 0, composed: !0 } }, keyUp: { EventType: "KeyboardEvent", defaultInit: { bubbles: !0, cancelable: !0, charCode: 0, composed: !0 } }, focus: { EventType: "FocusEvent", defaultInit: { bubbles: !1, cancelable: !1, composed: !0 } }, blur: { EventType: "FocusEvent", defaultInit: { bubbles: !1, cancelable: !1, composed: !0 } }, focusIn: { EventType: "FocusEvent", defaultInit: { bubbles: !0, cancelable: !1, composed: !0 } }, focusOut: { EventType: "FocusEvent", defaultInit: { bubbles: !0, cancelable: !1, composed: !0 } }, change: { EventType: "Event", defaultInit: { bubbles: !0, cancelable: !1 } }, input: { EventType: "InputEvent", defaultInit: { bubbles: !0, cancelable: !1, composed: !0 } }, invalid: { EventType: "Event", defaultInit: { bubbles: !1, cancelable: !0 } }, submit: { EventType: "Event", defaultInit: { bubbles: !0, cancelable: !0 } }, reset: { EventType: "Event", defaultInit: { bubbles: !0, cancelable: !0 } }, click: { EventType: "MouseEvent", defaultInit: { bubbles: !0, cancelable: !0, button: 0, composed: !0 } }, contextMenu: { EventType: "MouseEvent", defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } }, dblClick: { EventType: "MouseEvent", defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } }, drag: { EventType: "DragEvent", defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } }, dragEnd: { EventType: "DragEvent", defaultInit: { bubbles: !0, cancelable: !1, composed: !0 } }, dragEnter: { EventType: "DragEvent", defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } }, dragExit: { EventType: "DragEvent", defaultInit: { bubbles: !0, cancelable: !1, composed: !0 } }, dragLeave: { EventType: "DragEvent", defaultInit: { bubbles: !0, cancelable: !1, composed: !0 } }, dragOver: { EventType: "DragEvent", defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } }, dragStart: { EventType: "DragEvent", defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } }, drop: { EventType: "DragEvent", defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } }, mouseDown: { EventType: "MouseEvent", defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } }, mouseEnter: { EventType: "MouseEvent", defaultInit: { bubbles: !1, cancelable: !1, composed: !0 } }, mouseLeave: { EventType: "MouseEvent", defaultInit: { bubbles: !1, cancelable: !1, composed: !0 } }, mouseMove: { EventType: "MouseEvent", defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } }, mouseOut: { EventType: "MouseEvent", defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } }, mouseOver: { EventType: "MouseEvent", defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } }, mouseUp: { EventType: "MouseEvent", defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } }, select: { EventType: "Event", defaultInit: { bubbles: !0, cancelable: !1 } }, touchCancel: { EventType: "TouchEvent", defaultInit: { bubbles: !0, cancelable: !1, composed: !0 } }, touchEnd: { EventType: "TouchEvent", defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } }, touchMove: { EventType: "TouchEvent", defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } }, touchStart: { EventType: "TouchEvent", defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } }, resize: { EventType: "UIEvent", defaultInit: { bubbles: !1, cancelable: !1 } }, scroll: { EventType: "UIEvent", defaultInit: { bubbles: !1, cancelable: !1 } }, wheel: { EventType: "WheelEvent", defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } }, abort: { EventType: "Event", defaultInit: { bubbles: !1, cancelable: !1 } }, canPlay: { EventType: "Event", defaultInit: { bubbles: !1, cancelable: !1 } }, canPlayThrough: { EventType: "Event", defaultInit: { bubbles: !1, cancelable: !1 } }, durationChange: { EventType: "Event", defaultInit: { bubbles: !1, cancelable: !1 } }, emptied: { EventType: "Event", defaultInit: { bubbles: !1, cancelable: !1 } }, encrypted: { EventType: "Event", defaultInit: { bubbles: !1, cancelable: !1 } }, ended: { EventType: "Event", defaultInit: { bubbles: !1, cancelable: !1 } }, loadedData: { EventType: "Event", defaultInit: { bubbles: !1, cancelable: !1 } }, loadedMetadata: { EventType: "Event", defaultInit: { bubbles: !1, cancelable: !1 } }, loadStart: { EventType: "ProgressEvent", defaultInit: { bubbles: !1, cancelable: !1 } }, pause: { EventType: "Event", defaultInit: { bubbles: !1, cancelable: !1 } }, play: { EventType: "Event", defaultInit: { bubbles: !1, cancelable: !1 } }, playing: { EventType: "Event", defaultInit: { bubbles: !1, cancelable: !1 } }, progress: { EventType: "ProgressEvent", defaultInit: { bubbles: !1, cancelable: !1 } }, rateChange: { EventType: "Event", defaultInit: { bubbles: !1, cancelable: !1 } }, seeked: { EventType: "Event", defaultInit: { bubbles: !1, cancelable: !1 } }, seeking: { EventType: "Event", defaultInit: { bubbles: !1, cancelable: !1 } }, stalled: { EventType: "Event", defaultInit: { bubbles: !1, cancelable: !1 } }, suspend: { EventType: "Event", defaultInit: { bubbles: !1, cancelable: !1 } }, timeUpdate: { EventType: "Event", defaultInit: { bubbles: !1, cancelable: !1 } }, volumeChange: { EventType: "Event", defaultInit: { bubbles: !1, cancelable: !1 } }, waiting: { EventType: "Event", defaultInit: { bubbles: !1, cancelable: !1 } }, load: { EventType: "Event", defaultInit: { bubbles: !1, cancelable: !1 } }, error: { EventType: "Event", defaultInit: { bubbles: !1, cancelable: !1 } }, animationStart: { EventType: "AnimationEvent", defaultInit: { bubbles: !0, cancelable: !1 } }, animationEnd: { EventType: "AnimationEvent", defaultInit: { bubbles: !0, cancelable: !1 } }, animationIteration: { EventType: "AnimationEvent", defaultInit: { bubbles: !0, cancelable: !1 } }, transitionCancel: { EventType: "TransitionEvent", defaultInit: { bubbles: !0, cancelable: !1 } }, transitionEnd: { EventType: "TransitionEvent", defaultInit: { bubbles: !0, cancelable: !0 } }, transitionRun: { EventType: "TransitionEvent", defaultInit: { bubbles: !0, cancelable: !1 } }, transitionStart: { EventType: "TransitionEvent", defaultInit: { bubbles: !0, cancelable: !1 } }, pointerOver: { EventType: "PointerEvent", defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } }, pointerEnter: { EventType: "PointerEvent", defaultInit: { bubbles: !1, cancelable: !1 } }, pointerDown: { EventType: "PointerEvent", defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } }, pointerMove: { EventType: "PointerEvent", defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } }, pointerUp: { EventType: "PointerEvent", defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } }, pointerCancel: { EventType: "PointerEvent", defaultInit: { bubbles: !0, cancelable: !1, composed: !0 } }, pointerOut: { EventType: "PointerEvent", defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } }, pointerLeave: { EventType: "PointerEvent", defaultInit: { bubbles: !1, cancelable: !1 } }, gotPointerCapture: { EventType: "PointerEvent", defaultInit: { bubbles: !0, cancelable: !1, composed: !0 } }, lostPointerCapture: { EventType: "PointerEvent", defaultInit: { bubbles: !0, cancelable: !1, composed: !0 } }, popState: { EventType: "PopStateEvent", defaultInit: { bubbles: !0, cancelable: !1 } }, offline: { EventType: "Event", defaultInit: { bubbles: !1, cancelable: !1 } }, online: { EventType: "Event", defaultInit: { bubbles: !1, cancelable: !1 } }, pageHide: { EventType: "PageTransitionEvent", defaultInit: { bubbles: !0, cancelable: !0 } }, pageShow: { EventType: "PageTransitionEvent", defaultInit: { bubbles: !0, cancelable: !0 } } }, W1 = { doubleClick: "dblClick" };
function $s(f, h) {
  return Xn().eventWrapper(() => {
    if (!h) throw new Error("Unable to fire an event - please provide an event object.");
    if (!f) throw new Error('Unable to fire a "' + h.type + '" event - please provide a DOM element.');
    return f.dispatchEvent(h);
  });
}
function Dy(f, h, y, _) {
  let { EventType: C = "Event", defaultInit: g = {} } = _ === void 0 ? {} : _;
  if (!h) throw new Error('Unable to fire a "' + f + '" event - please provide a DOM element.');
  const U = { ...g, ...y }, { target: { value: j, files: S, ...T } = {} } = U;
  j !== void 0 && function(Y, ae) {
    const { set: re } = Object.getOwnPropertyDescriptor(Y, "value") || {}, $ = Object.getPrototypeOf(Y), { set: ne } = Object.getOwnPropertyDescriptor($, "value") || {};
    if (ne && re !== ne) ne.call(Y, ae);
    else {
      if (!re) throw new Error("The given element does not have a value setter");
      re.call(Y, ae);
    }
  }(h, j), S !== void 0 && Object.defineProperty(h, "files", { configurable: !0, enumerable: !0, writable: !0, value: S }), Object.assign(h, T);
  const M = ak(h), F = M[C] || M.Event;
  let z;
  if (typeof F == "function") z = new F(f, U);
  else {
    z = M.document.createEvent(C);
    const { bubbles: Y, cancelable: ae, detail: re, ...$ } = U;
    z.initEvent(f, Y, ae, re), Object.keys($).forEach((ne) => {
      z[ne] = $[ne];
    });
  }
  return ["dataTransfer", "clipboardData"].forEach((Y) => {
    const ae = U[Y];
    typeof ae == "object" && (typeof M.DataTransfer == "function" ? Object.defineProperty(z, Y, { value: Object.getOwnPropertyNames(ae).reduce((re, $) => (Object.defineProperty(re, $, { value: ae[$] }), re), new M.DataTransfer()) }) : Object.defineProperty(z, Y, { value: ae }));
  }), z;
}
function kx(f) {
  return "https://testing-playground.com/#markup=" + (h = f, mE.compressToEncodedURIComponent(h.replace(/[ \t]*[\n][ \t]*/g, `
`)));
  var h;
}
Object.keys(B1).forEach((f) => {
  const { EventType: h, defaultInit: y } = B1[f], _ = f.toLowerCase();
  Dy[f] = (C, g) => Dy(_, C, g, { EventType: h, defaultInit: y }), $s[f] = (C, g) => $s(C, Dy[f](C, g));
}), Object.keys(W1).forEach((f) => {
  const h = W1[f];
  $s[f] = function() {
    return $s[h](...arguments);
  };
});
const V1 = { debug: (f, h, y) => Array.isArray(f) ? f.forEach((_) => z1(_, h, y)) : z1(f, h, y), logTestingPlaygroundURL: function(f) {
  if (f === void 0 && (f = Gy().body), !f || !("innerHTML" in f)) return void console.log("The element you're providing isn't a valid DOM element.");
  if (!f.innerHTML) return void console.log("The provided element doesn't have any children.");
  const h = kx(f.innerHTML);
  return console.log(`Open this URL in your browser

` + h), h;
} }, zx = typeof document < "u" && document.body ? hk(document.body, $y, V1) : Object.keys($y).reduce((f, h) => (f[h] = () => {
  throw new TypeError("For queries bound to document.body a global document has to be available... Learn more: https://testing-library.com/s/screen-global-error");
}, f), V1), Sx = typeof xp.act == "function" ? xp.act : qS.act;
function vk() {
  if (typeof globalThis < "u") return globalThis;
  if (typeof self < "u") return self;
  if (typeof window < "u") return window;
  if (typeof global < "u") return global;
  throw new Error("unable to locate global object");
}
function ll(f) {
  vk().IS_REACT_ACT_ENVIRONMENT = f;
}
function $h() {
  return vk().IS_REACT_ACT_ENVIRONMENT;
}
const fd = (H1 = Sx, (f) => {
  const h = $h();
  ll(!0);
  try {
    let y = !1;
    const _ = H1(() => {
      const C = f();
      return C !== null && typeof C == "object" && typeof C.then == "function" && (y = !0), C;
    });
    if (y) {
      const C = _;
      return { then: (g, U) => {
        C.then((j) => {
          ll(h), g(j);
        }, (j) => {
          ll(h), U(j);
        });
      } };
    }
    return ll(h), _;
  } catch (y) {
    throw ll(h), y;
  }
});
var H1;
const yt = function() {
  return $s(...arguments);
};
Object.keys($s).forEach((f) => {
  yt[f] = function() {
    return $s[f](...arguments);
  };
});
const Ex = yt.mouseEnter, xx = yt.mouseLeave;
yt.mouseEnter = function() {
  return Ex(...arguments), yt.mouseOver(...arguments);
}, yt.mouseLeave = function() {
  return xx(...arguments), yt.mouseOut(...arguments);
};
const Tx = yt.pointerEnter, Cx = yt.pointerLeave;
yt.pointerEnter = function() {
  return Tx(...arguments), yt.pointerOver(...arguments);
}, yt.pointerLeave = function() {
  return Cx(...arguments), yt.pointerOut(...arguments);
};
const _x = yt.select;
yt.select = (f, h) => {
  _x(f, h), f.focus(), yt.keyUp(f, h);
};
const Px = yt.blur, Rx = yt.focus;
yt.blur = function() {
  return yt.focusOut(...arguments), Px(...arguments);
}, yt.focus = function() {
  return yt.focusIn(...arguments), Rx(...arguments);
};
let Nx = { reactStrictMode: !1 };
var Uh;
typeof (Uh = { unstable_advanceTimersWrapper: (f) => fd(f), asyncWrapper: async (f) => {
  const h = $h();
  ll(!1);
  try {
    const y = await f();
    return await new Promise((_) => {
      setTimeout(() => {
        _();
      }, 0), typeof jest > "u" || jest === null || setTimeout._isMockFunction !== !0 && !Object.prototype.hasOwnProperty.call(setTimeout, "clock") || jest.advanceTimersByTime(0);
    }), y;
  } finally {
    ll(h);
  }
}, eventWrapper: (f) => {
  let h;
  return fd(() => {
    h = f();
  }), h;
} }) == "function" && (Uh = Uh(qs)), qs = { ...qs, ...Uh };
const qy = /* @__PURE__ */ new Set(), qh = [];
function Qy(f, h) {
  return h ?? { ...Xn(), ...Nx }.reactStrictMode ? xp.createElement(xp.StrictMode, null, f) : f;
}
function Yy(f, h) {
  return h ? xp.createElement(h, null, f) : f;
}
function Ix(f, h) {
  let y, { hydrate: _, onCaughtError: C, onRecoverableError: g, ui: U, wrapper: j, reactStrictMode: S } = h;
  return _ ? fd(() => {
    y = l1.hydrateRoot(f, Qy(Yy(U, j), S), { onCaughtError: C, onRecoverableError: g });
  }) : y = l1.createRoot(f, { onCaughtError: C, onRecoverableError: g }), { hydrate() {
    if (!_) throw new Error("Attempted to hydrate a non-hydrateable root. This is a bug in `@testing-library/react`.");
  }, render(T) {
    y.render(T);
  }, unmount() {
    y.unmount();
  } };
}
function Dx(f) {
  return { hydrate(h) {
    Fh.hydrate(h, f);
  }, render(h) {
    Fh.render(h, f);
  }, unmount() {
    Fh.unmountComponentAtNode(f);
  } };
}
function gk(f, h) {
  let { baseElement: y, container: _, hydrate: C, queries: g, root: U, wrapper: j, reactStrictMode: S } = h;
  return fd(() => {
    C ? U.hydrate(Qy(Yy(f, j), S), _) : U.render(Qy(Yy(f, j), S), _);
  }), { container: _, baseElement: y, debug: function(T, M, F) {
    return T === void 0 && (T = y), Array.isArray(T) ? T.forEach((z) => console.log(dd(z, M, F))) : console.log(dd(T, M, F));
  }, unmount: () => {
    fd(() => {
      U.unmount();
    });
  }, rerender: (T) => {
    gk(T, { container: _, baseElement: y, root: U, wrapper: j, reactStrictMode: S });
  }, asFragment: () => {
    if (typeof document.createRange == "function") return document.createRange().createContextualFragment(_.innerHTML);
    {
      const T = document.createElement("template");
      return T.innerHTML = _.innerHTML, T.content;
    }
  }, ...hk(y, g) };
}
function Ox(f, h) {
  let y, { container: _, baseElement: C = _, legacyRoot: g = !1, onCaughtError: U, onUncaughtError: j, onRecoverableError: S, queries: T, hydrate: M = !1, wrapper: F, reactStrictMode: z } = h === void 0 ? {} : h;
  if (j !== void 0) throw new Error("onUncaughtError is not supported. The `render` call will already throw on uncaught errors.");
  if (g && typeof Fh.render != "function") {
    const Y = new Error("`legacyRoot: true` is not supported in this version of React. If your app runs React 19 or later, you should remove this flag. If your app runs React 18 or earlier, visit https://react.dev/blog/2022/03/08/react-18-upgrade-guide for upgrade instructions.");
    throw Error.captureStackTrace(Y, Ox), Y;
  }
  return C || (C = document.body), _ || (_ = C.appendChild(document.createElement("div"))), qy.has(_) ? qh.forEach((Y) => {
    Y.container === _ && (y = Y.root);
  }) : (y = (g ? Dx : Ix)(_, { hydrate: M, onCaughtError: U, onRecoverableError: S, ui: f, wrapper: F, reactStrictMode: z }), qh.push({ container: _, root: y }), qy.add(_)), gk(f, { container: _, baseElement: C, queries: T, hydrate: M, wrapper: F, root: y, reactStrictMode: z });
}
function $1() {
  qh.forEach((f) => {
    let { root: h, container: y } = f;
    fd(() => {
      h.unmount();
    }), y.parentNode === document.body && document.body.removeChild(y);
  }), qh.length = 0, qy.clear();
}
var q1;
if ((typeof process > "u" || !((q1 = process.env) != null && q1.RTL_SKIP_AUTO_CLEANUP)) && (typeof afterEach == "function" ? afterEach(() => {
  $1();
}) : typeof teardown == "function" && teardown(() => {
  $1();
}), typeof beforeAll == "function" && typeof afterAll == "function")) {
  let f = $h();
  beforeAll(() => {
    f = $h(), ll(!0);
  }), afterAll(() => {
    ll(f);
  });
}
export {
  $1 as c,
  yt as f,
  Ox as r,
  zx as s
};
//# sourceMappingURL=react.esm-V8WrrwsZ.js.map
