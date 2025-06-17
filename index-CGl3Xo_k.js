import { g as Nk } from "./_commonjsHelpers-DaMA6jEr.js";
import QT from "react";
var km = { exports: {} }, Qr = {}, bm = { exports: {} }, r0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jT;
function zk() {
  return jT || (jT = 1, function(ae) {
    function _e(P, ve) {
      var K = P.length;
      P.push(ve);
      e: for (; 0 < K; ) {
        var Ie = K - 1 >>> 1, qe = P[Ie];
        if (0 < ht(qe, ve)) P[Ie] = ve, P[K] = qe, K = Ie;
        else break e;
      }
    }
    function N(P) {
      return P.length === 0 ? null : P[0];
    }
    function ur(P) {
      if (P.length === 0) return null;
      var ve = P[0], K = P.pop();
      if (K !== ve) {
        P[0] = K;
        e: for (var Ie = 0, qe = P.length, Gr = qe >>> 1; Ie < Gr; ) {
          var Rn = 2 * (Ie + 1) - 1, Pi = P[Rn], jn = Rn + 1, Vn = P[jn];
          if (0 > ht(Pi, K)) jn < qe && 0 > ht(Vn, Pi) ? (P[Ie] = Vn, P[jn] = K, Ie = jn) : (P[Ie] = Pi, P[Rn] = K, Ie = Rn);
          else if (jn < qe && 0 > ht(Vn, K)) P[Ie] = Vn, P[jn] = K, Ie = jn;
          else break e;
        }
      }
      return ve;
    }
    function ht(P, ve) {
      var K = P.sortIndex - ve.sortIndex;
      return K !== 0 ? K : P.id - ve.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var bt = performance;
      ae.unstable_now = function() {
        return bt.now();
      };
    } else {
      var S = Date, Fn = S.now();
      ae.unstable_now = function() {
        return S.now() - Fn;
      };
    }
    var ge = [], ce = [], Zt = 1, ne = null, Se = 3, ie = !1, He = !1, Xe = !1, at = typeof setTimeout == "function" ? setTimeout : null, Rr = typeof clearTimeout == "function" ? clearTimeout : null, Cn = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Le(P) {
      for (var ve = N(ce); ve !== null; ) {
        if (ve.callback === null) ur(ce);
        else if (ve.startTime <= P) ur(ce), ve.sortIndex = ve.expirationTime, _e(ge, ve);
        else break;
        ve = N(ce);
      }
    }
    function it(P) {
      if (Xe = !1, Le(P), !He) if (N(ge) !== null) He = !0, _t(Oe);
      else {
        var ve = N(ce);
        ve !== null && Na(it, ve.startTime - P);
      }
    }
    function Oe(P, ve) {
      He = !1, Xe && (Xe = !1, Rr(En), En = -1), ie = !0;
      var K = Se;
      try {
        for (Le(ve), ne = N(ge); ne !== null && (!(ne.expirationTime > ve) || P && !Bt()); ) {
          var Ie = ne.callback;
          if (typeof Ie == "function") {
            ne.callback = null, Se = ne.priorityLevel;
            var qe = Ie(ne.expirationTime <= ve);
            ve = ae.unstable_now(), typeof qe == "function" ? ne.callback = qe : ne === N(ge) && ur(ge), Le(ve);
          } else ur(ge);
          ne = N(ge);
        }
        if (ne !== null) var Gr = !0;
        else {
          var Rn = N(ce);
          Rn !== null && Na(it, Rn.startTime - ve), Gr = !1;
        }
        return Gr;
      } finally {
        ne = null, Se = K, ie = !1;
      }
    }
    var ft = !1, De = null, En = -1, mt = 5, Gt = -1;
    function Bt() {
      return !(ae.unstable_now() - Gt < mt);
    }
    function lt() {
      if (De !== null) {
        var P = ae.unstable_now();
        Gt = P;
        var ve = !0;
        try {
          ve = De(!0, P);
        } finally {
          ve ? we() : (ft = !1, De = null);
        }
      } else ft = !1;
    }
    var we;
    if (typeof Cn == "function") we = function() {
      Cn(lt);
    };
    else if (typeof MessageChannel < "u") {
      var vn = new MessageChannel(), Tn = vn.port2;
      vn.port1.onmessage = lt, we = function() {
        Tn.postMessage(null);
      };
    } else we = function() {
      at(lt, 0);
    };
    function _t(P) {
      De = P, ft || (ft = !0, we());
    }
    function Na(P, ve) {
      En = at(function() {
        P(ae.unstable_now());
      }, ve);
    }
    ae.unstable_IdlePriority = 5, ae.unstable_ImmediatePriority = 1, ae.unstable_LowPriority = 4, ae.unstable_NormalPriority = 3, ae.unstable_Profiling = null, ae.unstable_UserBlockingPriority = 2, ae.unstable_cancelCallback = function(P) {
      P.callback = null;
    }, ae.unstable_continueExecution = function() {
      He || ie || (He = !0, _t(Oe));
    }, ae.unstable_forceFrameRate = function(P) {
      0 > P || 125 < P ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : mt = 0 < P ? Math.floor(1e3 / P) : 5;
    }, ae.unstable_getCurrentPriorityLevel = function() {
      return Se;
    }, ae.unstable_getFirstCallbackNode = function() {
      return N(ge);
    }, ae.unstable_next = function(P) {
      switch (Se) {
        case 1:
        case 2:
        case 3:
          var ve = 3;
          break;
        default:
          ve = Se;
      }
      var K = Se;
      Se = ve;
      try {
        return P();
      } finally {
        Se = K;
      }
    }, ae.unstable_pauseExecution = function() {
    }, ae.unstable_requestPaint = function() {
    }, ae.unstable_runWithPriority = function(P, ve) {
      switch (P) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          P = 3;
      }
      var K = Se;
      Se = P;
      try {
        return ve();
      } finally {
        Se = K;
      }
    }, ae.unstable_scheduleCallback = function(P, ve, K) {
      var Ie = ae.unstable_now();
      switch (typeof K == "object" && K !== null ? (K = K.delay, K = typeof K == "number" && 0 < K ? Ie + K : Ie) : K = Ie, P) {
        case 1:
          var qe = -1;
          break;
        case 2:
          qe = 250;
          break;
        case 5:
          qe = 1073741823;
          break;
        case 4:
          qe = 1e4;
          break;
        default:
          qe = 5e3;
      }
      return qe = K + qe, P = { id: Zt++, callback: ve, priorityLevel: P, startTime: K, expirationTime: qe, sortIndex: -1 }, K > Ie ? (P.sortIndex = K, _e(ce, P), N(ge) === null && P === N(ce) && (Xe ? (Rr(En), En = -1) : Xe = !0, Na(it, K - Ie))) : (P.sortIndex = qe, _e(ge, P), He || ie || (He = !0, _t(Oe))), P;
    }, ae.unstable_shouldYield = Bt, ae.unstable_wrapCallback = function(P) {
      var ve = Se;
      return function() {
        var K = Se;
        Se = ve;
        try {
          return P.apply(this, arguments);
        } finally {
          Se = K;
        }
      };
    };
  }(r0)), r0;
}
var a0 = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var VT;
function Uk() {
  return VT || (VT = 1, function(ae) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var _e = !1, N = 5;
      function ur(Y, fe) {
        var ke = Y.length;
        Y.push(fe), S(Y, fe, ke);
      }
      function ht(Y) {
        return Y.length === 0 ? null : Y[0];
      }
      function bt(Y) {
        if (Y.length === 0)
          return null;
        var fe = Y[0], ke = Y.pop();
        return ke !== fe && (Y[0] = ke, Fn(Y, ke, 0)), fe;
      }
      function S(Y, fe, ke) {
        for (var et = ke; et > 0; ) {
          var yt = et - 1 >>> 1, Pn = Y[yt];
          if (ge(Pn, fe) > 0)
            Y[yt] = fe, Y[et] = Pn, et = yt;
          else
            return;
        }
      }
      function Fn(Y, fe, ke) {
        for (var et = ke, yt = Y.length, Pn = yt >>> 1; et < Pn; ) {
          var Lt = (et + 1) * 2 - 1, Yn = Y[Lt], Mt = Lt + 1, gt = Y[Mt];
          if (ge(Yn, fe) < 0)
            Mt < yt && ge(gt, Yn) < 0 ? (Y[et] = gt, Y[Mt] = fe, et = Mt) : (Y[et] = Yn, Y[Lt] = fe, et = Lt);
          else if (Mt < yt && ge(gt, fe) < 0)
            Y[et] = gt, Y[Mt] = fe, et = Mt;
          else
            return;
        }
      }
      function ge(Y, fe) {
        var ke = Y.sortIndex - fe.sortIndex;
        return ke !== 0 ? ke : Y.id - fe.id;
      }
      var ce = 1, Zt = 2, ne = 3, Se = 4, ie = 5;
      function He(Y, fe) {
      }
      var Xe = typeof performance == "object" && typeof performance.now == "function";
      if (Xe) {
        var at = performance;
        ae.unstable_now = function() {
          return at.now();
        };
      } else {
        var Rr = Date, Cn = Rr.now();
        ae.unstable_now = function() {
          return Rr.now() - Cn;
        };
      }
      var Le = 1073741823, it = -1, Oe = 250, ft = 5e3, De = 1e4, En = Le, mt = [], Gt = [], Bt = 1, lt = null, we = ne, vn = !1, Tn = !1, _t = !1, Na = typeof setTimeout == "function" ? setTimeout : null, P = typeof clearTimeout == "function" ? clearTimeout : null, ve = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function K(Y) {
        for (var fe = ht(Gt); fe !== null; ) {
          if (fe.callback === null)
            bt(Gt);
          else if (fe.startTime <= Y)
            bt(Gt), fe.sortIndex = fe.expirationTime, ur(mt, fe);
          else
            return;
          fe = ht(Gt);
        }
      }
      function Ie(Y) {
        if (_t = !1, K(Y), !Tn)
          if (ht(mt) !== null)
            Tn = !0, cr(qe);
          else {
            var fe = ht(Gt);
            fe !== null && da(Ie, fe.startTime - Y);
          }
      }
      function qe(Y, fe) {
        Tn = !1, _t && (_t = !1, $i()), vn = !0;
        var ke = we;
        try {
          var et;
          if (!_e) return Gr(Y, fe);
        } finally {
          lt = null, we = ke, vn = !1;
        }
      }
      function Gr(Y, fe) {
        var ke = fe;
        for (K(ke), lt = ht(mt); lt !== null && !(lt.expirationTime > ke && (!Y || Hu())); ) {
          var et = lt.callback;
          if (typeof et == "function") {
            lt.callback = null, we = lt.priorityLevel;
            var yt = lt.expirationTime <= ke, Pn = et(yt);
            ke = ae.unstable_now(), typeof Pn == "function" ? lt.callback = Pn : lt === ht(mt) && bt(mt), K(ke);
          } else
            bt(mt);
          lt = ht(mt);
        }
        if (lt !== null)
          return !0;
        var Lt = ht(Gt);
        return Lt !== null && da(Ie, Lt.startTime - ke), !1;
      }
      function Rn(Y, fe) {
        switch (Y) {
          case ce:
          case Zt:
          case ne:
          case Se:
          case ie:
            break;
          default:
            Y = ne;
        }
        var ke = we;
        we = Y;
        try {
          return fe();
        } finally {
          we = ke;
        }
      }
      function Pi(Y) {
        var fe;
        switch (we) {
          case ce:
          case Zt:
          case ne:
            fe = ne;
            break;
          default:
            fe = we;
            break;
        }
        var ke = we;
        we = fe;
        try {
          return Y();
        } finally {
          we = ke;
        }
      }
      function jn(Y) {
        var fe = we;
        return function() {
          var ke = we;
          we = fe;
          try {
            return Y.apply(this, arguments);
          } finally {
            we = ke;
          }
        };
      }
      function Vn(Y, fe, ke) {
        var et = ae.unstable_now(), yt;
        if (typeof ke == "object" && ke !== null) {
          var Pn = ke.delay;
          typeof Pn == "number" && Pn > 0 ? yt = et + Pn : yt = et;
        } else
          yt = et;
        var Lt;
        switch (Y) {
          case ce:
            Lt = it;
            break;
          case Zt:
            Lt = Oe;
            break;
          case ie:
            Lt = En;
            break;
          case Se:
            Lt = De;
            break;
          case ne:
          default:
            Lt = ft;
            break;
        }
        var Yn = yt + Lt, Mt = {
          id: Bt++,
          callback: fe,
          priorityLevel: Y,
          startTime: yt,
          expirationTime: Yn,
          sortIndex: -1
        };
        return yt > et ? (Mt.sortIndex = yt, ur(Gt, Mt), ht(mt) === null && Mt === ht(Gt) && (_t ? $i() : _t = !0, da(Ie, yt - et))) : (Mt.sortIndex = Yn, ur(mt, Mt), !Tn && !vn && (Tn = !0, cr(qe))), Mt;
      }
      function xr() {
      }
      function sa() {
        !Tn && !vn && (Tn = !0, cr(qe));
      }
      function li() {
        return ht(mt);
      }
      function hn(Y) {
        Y.callback = null;
      }
      function ca() {
        return we;
      }
      var Bn = !1, or = null, wr = -1, fa = N, Vl = -1;
      function Hu() {
        var Y = ae.unstable_now() - Vl;
        return !(Y < fa);
      }
      function Fu() {
      }
      function Yi(Y) {
        if (Y < 0 || Y > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        Y > 0 ? fa = Math.floor(1e3 / Y) : fa = N;
      }
      var sr = function() {
        if (or !== null) {
          var Y = ae.unstable_now();
          Vl = Y;
          var fe = !0, ke = !0;
          try {
            ke = or(fe, Y);
          } finally {
            ke ? Dr() : (Bn = !1, or = null);
          }
        } else
          Bn = !1;
      }, Dr;
      if (typeof ve == "function")
        Dr = function() {
          ve(sr);
        };
      else if (typeof MessageChannel < "u") {
        var Wr = new MessageChannel(), Bl = Wr.port2;
        Wr.port1.onmessage = sr, Dr = function() {
          Bl.postMessage(null);
        };
      } else
        Dr = function() {
          Na(sr, 0);
        };
      function cr(Y) {
        or = Y, Bn || (Bn = !0, Dr());
      }
      function da(Y, fe) {
        wr = Na(function() {
          Y(ae.unstable_now());
        }, fe);
      }
      function $i() {
        P(wr), wr = -1;
      }
      var Qi = Fu, ju = null;
      ae.unstable_IdlePriority = ie, ae.unstable_ImmediatePriority = ce, ae.unstable_LowPriority = Se, ae.unstable_NormalPriority = ne, ae.unstable_Profiling = ju, ae.unstable_UserBlockingPriority = Zt, ae.unstable_cancelCallback = hn, ae.unstable_continueExecution = sa, ae.unstable_forceFrameRate = Yi, ae.unstable_getCurrentPriorityLevel = ca, ae.unstable_getFirstCallbackNode = li, ae.unstable_next = Pi, ae.unstable_pauseExecution = xr, ae.unstable_requestPaint = Qi, ae.unstable_runWithPriority = Rn, ae.unstable_scheduleCallback = Vn, ae.unstable_shouldYield = Hu, ae.unstable_wrapCallback = jn, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(a0)), a0;
}
var BT;
function IT() {
  return BT || (BT = 1, process.env.NODE_ENV === "production" ? bm.exports = zk() : bm.exports = Uk()), bm.exports;
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
var PT;
function Ak() {
  if (PT) return Qr;
  PT = 1;
  var ae = QT, _e = IT();
  function N(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var ur = /* @__PURE__ */ new Set(), ht = {};
  function bt(n, r) {
    S(n, r), S(n + "Capture", r);
  }
  function S(n, r) {
    for (ht[n] = r, n = 0; n < r.length; n++) ur.add(r[n]);
  }
  var Fn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ge = Object.prototype.hasOwnProperty, ce = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Zt = {}, ne = {};
  function Se(n) {
    return ge.call(ne, n) ? !0 : ge.call(Zt, n) ? !1 : ce.test(n) ? ne[n] = !0 : (Zt[n] = !0, !1);
  }
  function ie(n, r, l, o) {
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
  function He(n, r, l, o) {
    if (r === null || typeof r > "u" || ie(n, r, l, o)) return !0;
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
  function Xe(n, r, l, o, c, d, h) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = h;
  }
  var at = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    at[n] = new Xe(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    at[r] = new Xe(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    at[n] = new Xe(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    at[n] = new Xe(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    at[n] = new Xe(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    at[n] = new Xe(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    at[n] = new Xe(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    at[n] = new Xe(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    at[n] = new Xe(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var Rr = /[\-:]([a-z])/g;
  function Cn(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      Rr,
      Cn
    );
    at[r] = new Xe(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(Rr, Cn);
    at[r] = new Xe(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(Rr, Cn);
    at[r] = new Xe(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    at[n] = new Xe(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), at.xlinkHref = new Xe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    at[n] = new Xe(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function Le(n, r, l, o) {
    var c = at.hasOwnProperty(r) ? at[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (He(r, l, c, o) && (l = null), o || c === null ? Se(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var it = ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Oe = Symbol.for("react.element"), ft = Symbol.for("react.portal"), De = Symbol.for("react.fragment"), En = Symbol.for("react.strict_mode"), mt = Symbol.for("react.profiler"), Gt = Symbol.for("react.provider"), Bt = Symbol.for("react.context"), lt = Symbol.for("react.forward_ref"), we = Symbol.for("react.suspense"), vn = Symbol.for("react.suspense_list"), Tn = Symbol.for("react.memo"), _t = Symbol.for("react.lazy"), Na = Symbol.for("react.offscreen"), P = Symbol.iterator;
  function ve(n) {
    return n === null || typeof n != "object" ? null : (n = P && n[P] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var K = Object.assign, Ie;
  function qe(n) {
    if (Ie === void 0) try {
      throw Error();
    } catch (l) {
      var r = l.stack.trim().match(/\n( *(at )?)/);
      Ie = r && r[1] || "";
    }
    return `
` + Ie + n;
  }
  var Gr = !1;
  function Rn(n, r) {
    if (!n || Gr) return "";
    Gr = !0;
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
        } catch (_) {
          var o = _;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (_) {
          o = _;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (_) {
          o = _;
        }
        n();
      }
    } catch (_) {
      if (_ && o && typeof _.stack == "string") {
        for (var c = _.stack.split(`
`), d = o.stack.split(`
`), h = c.length - 1, g = d.length - 1; 1 <= h && 0 <= g && c[h] !== d[g]; ) g--;
        for (; 1 <= h && 0 <= g; h--, g--) if (c[h] !== d[g]) {
          if (h !== 1 || g !== 1)
            do
              if (h--, g--, 0 > g || c[h] !== d[g]) {
                var C = `
` + c[h].replace(" at new ", " at ");
                return n.displayName && C.includes("<anonymous>") && (C = C.replace("<anonymous>", n.displayName)), C;
              }
            while (1 <= h && 0 <= g);
          break;
        }
      }
    } finally {
      Gr = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? qe(n) : "";
  }
  function Pi(n) {
    switch (n.tag) {
      case 5:
        return qe(n.type);
      case 16:
        return qe("Lazy");
      case 13:
        return qe("Suspense");
      case 19:
        return qe("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Rn(n.type, !1), n;
      case 11:
        return n = Rn(n.type.render, !1), n;
      case 1:
        return n = Rn(n.type, !0), n;
      default:
        return "";
    }
  }
  function jn(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case De:
        return "Fragment";
      case ft:
        return "Portal";
      case mt:
        return "Profiler";
      case En:
        return "StrictMode";
      case we:
        return "Suspense";
      case vn:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case Bt:
        return (n.displayName || "Context") + ".Consumer";
      case Gt:
        return (n._context.displayName || "Context") + ".Provider";
      case lt:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case Tn:
        return r = n.displayName || null, r !== null ? r : jn(n.type) || "Memo";
      case _t:
        r = n._payload, n = n._init;
        try {
          return jn(n(r));
        } catch {
        }
    }
    return null;
  }
  function Vn(n) {
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
        return jn(r);
      case 8:
        return r === En ? "StrictMode" : "Mode";
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
  function xr(n) {
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
  function sa(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function li(n) {
    var r = sa(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var c = l.get, d = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(h) {
        o = "" + h, d.call(this, h);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return o;
      }, setValue: function(h) {
        o = "" + h;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function hn(n) {
    n._valueTracker || (n._valueTracker = li(n));
  }
  function ca(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var l = r.getValue(), o = "";
    return n && (o = sa(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function Bn(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function or(n, r) {
    var l = r.checked;
    return K({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function wr(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = xr(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function fa(n, r) {
    r = r.checked, r != null && Le(n, "checked", r, !1);
  }
  function Vl(n, r) {
    fa(n, r);
    var l = xr(r.value), o = r.type;
    if (l != null) o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Fu(n, r.type, l) : r.hasOwnProperty("defaultValue") && Fu(n, r.type, xr(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function Hu(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function Fu(n, r, l) {
    (r !== "number" || Bn(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var Yi = Array.isArray;
  function sr(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++) r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++) c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + xr(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Dr(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(N(91));
    return K({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Wr(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null) throw Error(N(92));
        if (Yi(l)) {
          if (1 < l.length) throw Error(N(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: xr(l) };
  }
  function Bl(n, r) {
    var l = xr(r.value), o = xr(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function cr(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function da(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function $i(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? da(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var Qi, ju = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (Qi = Qi || document.createElement("div"), Qi.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = Qi.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function Y(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var fe = {
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
  }, ke = ["Webkit", "ms", "Moz", "O"];
  Object.keys(fe).forEach(function(n) {
    ke.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), fe[r] = fe[n];
    });
  });
  function et(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || fe.hasOwnProperty(n) && fe[n] ? ("" + r).trim() : r + "px";
  }
  function yt(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var o = l.indexOf("--") === 0, c = et(l, r[l], o);
      l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
    }
  }
  var Pn = K({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Lt(n, r) {
    if (r) {
      if (Pn[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(N(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(N(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(N(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(N(62));
    }
  }
  function Yn(n, r) {
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
  var Mt = null;
  function gt(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Pt = null, Pl = null, ui = null;
  function is(n) {
    if (n = ue(n)) {
      if (typeof Pt != "function") throw Error(N(280));
      var r = n.stateNode;
      r && (r = Et(r), Pt(n.stateNode, n.type, r));
    }
  }
  function xp(n) {
    Pl ? ui ? ui.push(n) : ui = [n] : Pl = n;
  }
  function wp() {
    if (Pl) {
      var n = Pl, r = ui;
      if (ui = Pl = null, is(n), r) for (n = 0; n < r.length; n++) is(r[n]);
    }
  }
  function tf(n, r) {
    return n(r);
  }
  function nf() {
  }
  var rf = !1;
  function af(n, r, l) {
    if (rf) return n(r, l);
    rf = !0;
    try {
      return tf(n, r, l);
    } finally {
      rf = !1, (Pl !== null || ui !== null) && (nf(), wp());
    }
  }
  function Ii(n, r) {
    var l = n.stateNode;
    if (l === null) return null;
    var o = Et(l);
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
    if (l && typeof l != "function") throw Error(N(231, r, typeof l));
    return l;
  }
  var oi = !1;
  if (Fn) try {
    var Xr = {};
    Object.defineProperty(Xr, "passive", { get: function() {
      oi = !0;
    } }), window.addEventListener("test", Xr, Xr), window.removeEventListener("test", Xr, Xr);
  } catch {
    oi = !1;
  }
  function Yl(n, r, l, o, c, d, h, g, C) {
    var _ = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, _);
    } catch (H) {
      this.onError(H);
    }
  }
  var Gi = !1, $l = null, Ql = !1, Vu = null, Il = { onError: function(n) {
    Gi = !0, $l = n;
  } };
  function ls(n, r, l, o, c, d, h, g, C) {
    Gi = !1, $l = null, Yl.apply(Il, arguments);
  }
  function us(n, r, l, o, c, d, h, g, C) {
    if (ls.apply(this, arguments), Gi) {
      if (Gi) {
        var _ = $l;
        Gi = !1, $l = null;
      } else throw Error(N(198));
      Ql || (Ql = !0, Vu = _);
    }
  }
  function qr(n) {
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
  function mn(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function Dp(n) {
    if (qr(n) !== n) throw Error(N(188));
  }
  function _m(n) {
    var r = n.alternate;
    if (!r) {
      if (r = qr(n), r === null) throw Error(N(188));
      return r !== n ? null : n;
    }
    for (var l = n, o = r; ; ) {
      var c = l.return;
      if (c === null) break;
      var d = c.alternate;
      if (d === null) {
        if (o = c.return, o !== null) {
          l = o;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === l) return Dp(c), n;
          if (d === o) return Dp(c), r;
          d = d.sibling;
        }
        throw Error(N(188));
      }
      if (l.return !== o.return) l = c, o = d;
      else {
        for (var h = !1, g = c.child; g; ) {
          if (g === l) {
            h = !0, l = c, o = d;
            break;
          }
          if (g === o) {
            h = !0, o = c, l = d;
            break;
          }
          g = g.sibling;
        }
        if (!h) {
          for (g = d.child; g; ) {
            if (g === l) {
              h = !0, l = d, o = c;
              break;
            }
            if (g === o) {
              h = !0, o = d, l = c;
              break;
            }
            g = g.sibling;
          }
          if (!h) throw Error(N(189));
        }
      }
      if (l.alternate !== o) throw Error(N(190));
    }
    if (l.tag !== 3) throw Error(N(188));
    return l.stateNode.current === l ? n : r;
  }
  function lf(n) {
    return n = _m(n), n !== null ? kp(n) : null;
  }
  function kp(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = kp(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var bp = _e.unstable_scheduleCallback, _p = _e.unstable_cancelCallback, Lp = _e.unstable_shouldYield, Lm = _e.unstable_requestPaint, tt = _e.unstable_now, Me = _e.unstable_getCurrentPriorityLevel, Wi = _e.unstable_ImmediatePriority, uf = _e.unstable_UserBlockingPriority, Bu = _e.unstable_NormalPriority, Mp = _e.unstable_LowPriority, of = _e.unstable_IdlePriority, Pu = null, Kr = null;
  function Op(n) {
    if (Kr && typeof Kr.onCommitFiberRoot == "function") try {
      Kr.onCommitFiberRoot(Pu, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var kr = Math.clz32 ? Math.clz32 : sf, Mm = Math.log, Om = Math.LN2;
  function sf(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Mm(n) / Om | 0) | 0;
  }
  var Gl = 64, Zr = 4194304;
  function Xi(n) {
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
  function qi(n, r) {
    var l = n.pendingLanes;
    if (l === 0) return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, h = l & 268435455;
    if (h !== 0) {
      var g = h & ~c;
      g !== 0 ? o = Xi(g) : (d &= h, d !== 0 && (o = Xi(d)));
    } else h = l & ~c, h !== 0 ? o = Xi(h) : d !== 0 && (o = Xi(d));
    if (o === 0) return 0;
    if (r !== 0 && r !== o && (r & c) === 0 && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0)) return r;
    if ((o & 4) !== 0 && (o |= l & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= o; 0 < r; ) l = 31 - kr(r), c = 1 << l, o |= n[l], r &= ~c;
    return o;
  }
  function Nm(n, r) {
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
  function cf(n, r) {
    for (var l = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var h = 31 - kr(d), g = 1 << h, C = c[h];
      C === -1 ? ((g & l) === 0 || (g & o) !== 0) && (c[h] = Nm(g, r)) : C <= r && (n.expiredLanes |= g), d &= ~g;
    }
  }
  function ff(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function os() {
    var n = Gl;
    return Gl <<= 1, (Gl & 4194240) === 0 && (Gl = 64), n;
  }
  function df(n) {
    for (var r = [], l = 0; 31 > l; l++) r.push(n);
    return r;
  }
  function Ki(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - kr(r), n[r] = l;
  }
  function zm(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - kr(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function ss(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - kr(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var Ge = 0;
  function pf(n) {
    return n &= -n, 1 < n ? 4 < n ? (n & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var We, vf, hf, Te, mf, xn = !1, si = [], br = null, ci = null, St = null, ut = /* @__PURE__ */ new Map(), Yu = /* @__PURE__ */ new Map(), Jt = [], _r = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function za(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        br = null;
        break;
      case "dragenter":
      case "dragleave":
        ci = null;
        break;
      case "mouseover":
      case "mouseout":
        St = null;
        break;
      case "pointerover":
      case "pointerout":
        ut.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Yu.delete(r.pointerId);
    }
  }
  function $u(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = ue(r), r !== null && vf(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function yf(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return br = $u(br, n, r, l, o, c), !0;
      case "dragenter":
        return ci = $u(ci, n, r, l, o, c), !0;
      case "mouseover":
        return St = $u(St, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return ut.set(d, $u(ut.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, Yu.set(d, $u(Yu.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function gf(n) {
    var r = ul(n.target);
    if (r !== null) {
      var l = qr(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = mn(l), r !== null) {
            n.blockedOn = r, mf(n.priority, function() {
              hf(l);
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
  function Qu(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = fs(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        Mt = o, l.target.dispatchEvent(o), Mt = null;
      } else return r = ue(l), r !== null && vf(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function Np(n, r, l) {
    Qu(n) && l.delete(r);
  }
  function Um() {
    xn = !1, br !== null && Qu(br) && (br = null), ci !== null && Qu(ci) && (ci = null), St !== null && Qu(St) && (St = null), ut.forEach(Np), Yu.forEach(Np);
  }
  function Iu(n, r) {
    n.blockedOn === r && (n.blockedOn = null, xn || (xn = !0, _e.unstable_scheduleCallback(_e.unstable_NormalPriority, Um)));
  }
  function fi(n) {
    function r(c) {
      return Iu(c, n);
    }
    if (0 < si.length) {
      Iu(si[0], n);
      for (var l = 1; l < si.length; l++) {
        var o = si[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (br !== null && Iu(br, n), ci !== null && Iu(ci, n), St !== null && Iu(St, n), ut.forEach(r), Yu.forEach(r), l = 0; l < Jt.length; l++) o = Jt[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < Jt.length && (l = Jt[0], l.blockedOn === null); ) gf(l), l.blockedOn === null && Jt.shift();
  }
  var Zi = it.ReactCurrentBatchConfig, Ji = !0;
  function zp(n, r, l, o) {
    var c = Ge, d = Zi.transition;
    Zi.transition = null;
    try {
      Ge = 1, cs(n, r, l, o);
    } finally {
      Ge = c, Zi.transition = d;
    }
  }
  function Up(n, r, l, o) {
    var c = Ge, d = Zi.transition;
    Zi.transition = null;
    try {
      Ge = 4, cs(n, r, l, o);
    } finally {
      Ge = c, Zi.transition = d;
    }
  }
  function cs(n, r, l, o) {
    if (Ji) {
      var c = fs(n, r, l, o);
      if (c === null) _s(n, r, o, Gu, l), za(n, o);
      else if (yf(c, n, r, l, o)) o.stopPropagation();
      else if (za(n, o), r & 4 && -1 < _r.indexOf(n)) {
        for (; c !== null; ) {
          var d = ue(c);
          if (d !== null && We(d), d = fs(n, r, l, o), d === null && _s(n, r, o, Gu, l), d === c) break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else _s(n, r, o, null, l);
    }
  }
  var Gu = null;
  function fs(n, r, l, o) {
    if (Gu = null, n = gt(o), n = ul(n), n !== null) if (r = qr(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = mn(r), n !== null) return n;
      n = null;
    } else if (l === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return Gu = n, null;
  }
  function ds(n) {
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
        switch (Me()) {
          case Wi:
            return 1;
          case uf:
            return 4;
          case Bu:
          case Mp:
            return 16;
          case of:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Ua = null, ps = null, Wl = null;
  function Sf() {
    if (Wl) return Wl;
    var n, r = ps, l = r.length, o, c = "value" in Ua ? Ua.value : Ua.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++) ;
    var h = l - n;
    for (o = 1; o <= h && r[l - o] === c[d - o]; o++) ;
    return Wl = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function vs(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function hs() {
    return !0;
  }
  function ms() {
    return !1;
  }
  function $n(n) {
    function r(l, o, c, d, h) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = h, this.currentTarget = null;
      for (var g in n) n.hasOwnProperty(g) && (l = n[g], this[g] = l ? l(d) : d[g]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? hs : ms, this.isPropagationStopped = ms, this;
    }
    return K(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = hs);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = hs);
    }, persist: function() {
    }, isPersistent: hs }), r;
  }
  var el = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, ys = $n(el), Xl = K({}, el, { view: 0, detail: 0 }), Am = $n(Xl), Cf, en, tl, Wu = K({}, Xl, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: wf, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== tl && (tl && n.type === "mousemove" ? (Cf = n.screenX - tl.screenX, en = n.screenY - tl.screenY) : en = Cf = 0, tl = n), Cf);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : en;
  } }), Ef = $n(Wu), Hm = K({}, Wu, { dataTransfer: 0 }), ql = $n(Hm), Tf = K({}, Xl, { relatedTarget: 0 }), gs = $n(Tf), Fm = K({}, el, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), jm = $n(Fm), Vm = K({}, el, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Ap = $n(Vm), Rf = K({}, el, { data: 0 }), xf = $n(Rf), Hp = {
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
  }, Fp = {
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
  }, Bm = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Aa(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Bm[n]) ? !!r[n] : !1;
  }
  function wf() {
    return Aa;
  }
  var Df = K({}, Xl, { key: function(n) {
    if (n.key) {
      var r = Hp[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = vs(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Fp[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: wf, charCode: function(n) {
    return n.type === "keypress" ? vs(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? vs(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), kf = $n(Df), bf = K({}, Wu, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), jp = $n(bf), Ss = K({}, Xl, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: wf }), Vp = $n(Ss), Qn = K({}, el, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Ha = $n(Qn), Ot = K({}, Wu, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Fa = $n(Ot), _f = [9, 13, 27, 32], Kl = Fn && "CompositionEvent" in window, Xu = null;
  Fn && "documentMode" in document && (Xu = document.documentMode);
  var qu = Fn && "TextEvent" in window && !Xu, Bp = Fn && (!Kl || Xu && 8 < Xu && 11 >= Xu), Pp = " ", Cs = !1;
  function Yp(n, r) {
    switch (n) {
      case "keyup":
        return _f.indexOf(r.keyCode) !== -1;
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
  function $p(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var Zl = !1;
  function Qp(n, r) {
    switch (n) {
      case "compositionend":
        return $p(r);
      case "keypress":
        return r.which !== 32 ? null : (Cs = !0, Pp);
      case "textInput":
        return n = r.data, n === Pp && Cs ? null : n;
      default:
        return null;
    }
  }
  function Pm(n, r) {
    if (Zl) return n === "compositionend" || !Kl && Yp(n, r) ? (n = Sf(), Wl = ps = Ua = null, Zl = !1, n) : null;
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
        return Bp && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Ym = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Ip(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Ym[n.type] : r === "textarea";
  }
  function Lf(n, r, l, o) {
    xp(o), r = no(r, "onChange"), 0 < r.length && (l = new ys("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var pa = null, nl = null;
  function Gp(n) {
    il(n, 0);
  }
  function Ku(n) {
    var r = ea(n);
    if (ca(r)) return n;
  }
  function $m(n, r) {
    if (n === "change") return r;
  }
  var Wp = !1;
  if (Fn) {
    var Mf;
    if (Fn) {
      var Of = "oninput" in document;
      if (!Of) {
        var Xp = document.createElement("div");
        Xp.setAttribute("oninput", "return;"), Of = typeof Xp.oninput == "function";
      }
      Mf = Of;
    } else Mf = !1;
    Wp = Mf && (!document.documentMode || 9 < document.documentMode);
  }
  function qp() {
    pa && (pa.detachEvent("onpropertychange", Kp), nl = pa = null);
  }
  function Kp(n) {
    if (n.propertyName === "value" && Ku(nl)) {
      var r = [];
      Lf(r, nl, n, gt(n)), af(Gp, r);
    }
  }
  function Qm(n, r, l) {
    n === "focusin" ? (qp(), pa = r, nl = l, pa.attachEvent("onpropertychange", Kp)) : n === "focusout" && qp();
  }
  function Zp(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return Ku(nl);
  }
  function Im(n, r) {
    if (n === "click") return Ku(r);
  }
  function Jp(n, r) {
    if (n === "input" || n === "change") return Ku(r);
  }
  function Gm(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var Jr = typeof Object.is == "function" ? Object.is : Gm;
  function Zu(n, r) {
    if (Jr(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length) return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!ge.call(r, c) || !Jr(n[c], r[c])) return !1;
    }
    return !0;
  }
  function ev(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function Es(n, r) {
    var l = ev(n);
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
      l = ev(l);
    }
  }
  function di(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? di(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function Ju() {
    for (var n = window, r = Bn(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) n = r.contentWindow;
      else break;
      r = Bn(n.document);
    }
    return r;
  }
  function Ts(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function Jl(n) {
    var r = Ju(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && di(l.ownerDocument.documentElement, l)) {
      if (o !== null && Ts(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l) l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = Es(l, d);
          var h = Es(
            l,
            o
          );
          c && h && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== h.node || n.focusOffset !== h.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), d > o ? (n.addRange(r), n.extend(h.node, h.offset)) : (r.setEnd(h.node, h.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; ) n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++) n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var Wm = Fn && "documentMode" in document && 11 >= document.documentMode, eu = null, Nf = null, eo = null, zf = !1;
  function Uf(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    zf || eu == null || eu !== Bn(o) || (o = eu, "selectionStart" in o && Ts(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), eo && Zu(eo, o) || (eo = o, o = no(Nf, "onSelect"), 0 < o.length && (r = new ys("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = eu)));
  }
  function Rs(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var rl = { animationend: Rs("Animation", "AnimationEnd"), animationiteration: Rs("Animation", "AnimationIteration"), animationstart: Rs("Animation", "AnimationStart"), transitionend: Rs("Transition", "TransitionEnd") }, tn = {}, Af = {};
  Fn && (Af = document.createElement("div").style, "AnimationEvent" in window || (delete rl.animationend.animation, delete rl.animationiteration.animation, delete rl.animationstart.animation), "TransitionEvent" in window || delete rl.transitionend.transition);
  function xs(n) {
    if (tn[n]) return tn[n];
    if (!rl[n]) return n;
    var r = rl[n], l;
    for (l in r) if (r.hasOwnProperty(l) && l in Af) return tn[n] = r[l];
    return n;
  }
  var tv = xs("animationend"), nv = xs("animationiteration"), rv = xs("animationstart"), av = xs("transitionend"), Hf = /* @__PURE__ */ new Map(), ws = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Lr(n, r) {
    Hf.set(n, r), bt(r, [n]);
  }
  for (var Ff = 0; Ff < ws.length; Ff++) {
    var al = ws[Ff], Xm = al.toLowerCase(), qm = al[0].toUpperCase() + al.slice(1);
    Lr(Xm, "on" + qm);
  }
  Lr(tv, "onAnimationEnd"), Lr(nv, "onAnimationIteration"), Lr(rv, "onAnimationStart"), Lr("dblclick", "onDoubleClick"), Lr("focusin", "onFocus"), Lr("focusout", "onBlur"), Lr(av, "onTransitionEnd"), S("onMouseEnter", ["mouseout", "mouseover"]), S("onMouseLeave", ["mouseout", "mouseover"]), S("onPointerEnter", ["pointerout", "pointerover"]), S("onPointerLeave", ["pointerout", "pointerover"]), bt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), bt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), bt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), bt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), bt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), bt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var to = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), jf = new Set("cancel close invalid load scroll toggle".split(" ").concat(to));
  function Ds(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, us(o, r, void 0, n), n.currentTarget = null;
  }
  function il(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r) for (var h = o.length - 1; 0 <= h; h--) {
          var g = o[h], C = g.instance, _ = g.currentTarget;
          if (g = g.listener, C !== d && c.isPropagationStopped()) break e;
          Ds(c, g, _), d = C;
        }
        else for (h = 0; h < o.length; h++) {
          if (g = o[h], C = g.instance, _ = g.currentTarget, g = g.listener, C !== d && c.isPropagationStopped()) break e;
          Ds(c, g, _), d = C;
        }
      }
    }
    if (Ql) throw n = Vu, Ql = !1, Vu = null, n;
  }
  function $e(n, r) {
    var l = r[io];
    l === void 0 && (l = r[io] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (iv(r, n, 2, !1), l.add(o));
  }
  function ks(n, r, l) {
    var o = 0;
    r && (o |= 4), iv(l, n, o, r);
  }
  var bs = "_reactListening" + Math.random().toString(36).slice(2);
  function tu(n) {
    if (!n[bs]) {
      n[bs] = !0, ur.forEach(function(l) {
        l !== "selectionchange" && (jf.has(l) || ks(l, !1, n), ks(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[bs] || (r[bs] = !0, ks("selectionchange", !1, r));
    }
  }
  function iv(n, r, l, o) {
    switch (ds(r)) {
      case 1:
        var c = zp;
        break;
      case 4:
        c = Up;
        break;
      default:
        c = cs;
    }
    l = c.bind(null, r, l, n), c = void 0, !oi || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function _s(n, r, l, o, c) {
    var d = o;
    if ((r & 1) === 0 && (r & 2) === 0 && o !== null) e: for (; ; ) {
      if (o === null) return;
      var h = o.tag;
      if (h === 3 || h === 4) {
        var g = o.stateNode.containerInfo;
        if (g === c || g.nodeType === 8 && g.parentNode === c) break;
        if (h === 4) for (h = o.return; h !== null; ) {
          var C = h.tag;
          if ((C === 3 || C === 4) && (C = h.stateNode.containerInfo, C === c || C.nodeType === 8 && C.parentNode === c)) return;
          h = h.return;
        }
        for (; g !== null; ) {
          if (h = ul(g), h === null) return;
          if (C = h.tag, C === 5 || C === 6) {
            o = d = h;
            continue e;
          }
          g = g.parentNode;
        }
      }
      o = o.return;
    }
    af(function() {
      var _ = d, H = gt(l), j = [];
      e: {
        var A = Hf.get(n);
        if (A !== void 0) {
          var G = ys, Z = n;
          switch (n) {
            case "keypress":
              if (vs(l) === 0) break e;
            case "keydown":
            case "keyup":
              G = kf;
              break;
            case "focusin":
              Z = "focus", G = gs;
              break;
            case "focusout":
              Z = "blur", G = gs;
              break;
            case "beforeblur":
            case "afterblur":
              G = gs;
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
              G = Ef;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              G = ql;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              G = Vp;
              break;
            case tv:
            case nv:
            case rv:
              G = jm;
              break;
            case av:
              G = Ha;
              break;
            case "scroll":
              G = Am;
              break;
            case "wheel":
              G = Fa;
              break;
            case "copy":
            case "cut":
            case "paste":
              G = Ap;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              G = jp;
          }
          var te = (r & 4) !== 0, Dt = !te && n === "scroll", x = te ? A !== null ? A + "Capture" : null : A;
          te = [];
          for (var T = _, k; T !== null; ) {
            k = T;
            var F = k.stateNode;
            if (k.tag === 5 && F !== null && (k = F, x !== null && (F = Ii(T, x), F != null && te.push(nu(T, F, k)))), Dt) break;
            T = T.return;
          }
          0 < te.length && (A = new G(A, Z, null, l, H), j.push({ event: A, listeners: te }));
        }
      }
      if ((r & 7) === 0) {
        e: {
          if (A = n === "mouseover" || n === "pointerover", G = n === "mouseout" || n === "pointerout", A && l !== Mt && (Z = l.relatedTarget || l.fromElement) && (ul(Z) || Z[ja])) break e;
          if ((G || A) && (A = H.window === H ? H : (A = H.ownerDocument) ? A.defaultView || A.parentWindow : window, G ? (Z = l.relatedTarget || l.toElement, G = _, Z = Z ? ul(Z) : null, Z !== null && (Dt = qr(Z), Z !== Dt || Z.tag !== 5 && Z.tag !== 6) && (Z = null)) : (G = null, Z = _), G !== Z)) {
            if (te = Ef, F = "onMouseLeave", x = "onMouseEnter", T = "mouse", (n === "pointerout" || n === "pointerover") && (te = jp, F = "onPointerLeave", x = "onPointerEnter", T = "pointer"), Dt = G == null ? A : ea(G), k = Z == null ? A : ea(Z), A = new te(F, T + "leave", G, l, H), A.target = Dt, A.relatedTarget = k, F = null, ul(H) === _ && (te = new te(x, T + "enter", Z, l, H), te.target = k, te.relatedTarget = Dt, F = te), Dt = F, G && Z) t: {
              for (te = G, x = Z, T = 0, k = te; k; k = pi(k)) T++;
              for (k = 0, F = x; F; F = pi(F)) k++;
              for (; 0 < T - k; ) te = pi(te), T--;
              for (; 0 < k - T; ) x = pi(x), k--;
              for (; T--; ) {
                if (te === x || x !== null && te === x.alternate) break t;
                te = pi(te), x = pi(x);
              }
              te = null;
            }
            else te = null;
            G !== null && lv(j, A, G, te, !1), Z !== null && Dt !== null && lv(j, Dt, Z, te, !0);
          }
        }
        e: {
          if (A = _ ? ea(_) : window, G = A.nodeName && A.nodeName.toLowerCase(), G === "select" || G === "input" && A.type === "file") var J = $m;
          else if (Ip(A)) if (Wp) J = Jp;
          else {
            J = Zp;
            var de = Qm;
          }
          else (G = A.nodeName) && G.toLowerCase() === "input" && (A.type === "checkbox" || A.type === "radio") && (J = Im);
          if (J && (J = J(n, _))) {
            Lf(j, J, l, H);
            break e;
          }
          de && de(n, A, _), n === "focusout" && (de = A._wrapperState) && de.controlled && A.type === "number" && Fu(A, "number", A.value);
        }
        switch (de = _ ? ea(_) : window, n) {
          case "focusin":
            (Ip(de) || de.contentEditable === "true") && (eu = de, Nf = _, eo = null);
            break;
          case "focusout":
            eo = Nf = eu = null;
            break;
          case "mousedown":
            zf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            zf = !1, Uf(j, l, H);
            break;
          case "selectionchange":
            if (Wm) break;
          case "keydown":
          case "keyup":
            Uf(j, l, H);
        }
        var pe;
        if (Kl) e: {
          switch (n) {
            case "compositionstart":
              var ye = "onCompositionStart";
              break e;
            case "compositionend":
              ye = "onCompositionEnd";
              break e;
            case "compositionupdate":
              ye = "onCompositionUpdate";
              break e;
          }
          ye = void 0;
        }
        else Zl ? Yp(n, l) && (ye = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (ye = "onCompositionStart");
        ye && (Bp && l.locale !== "ko" && (Zl || ye !== "onCompositionStart" ? ye === "onCompositionEnd" && Zl && (pe = Sf()) : (Ua = H, ps = "value" in Ua ? Ua.value : Ua.textContent, Zl = !0)), de = no(_, ye), 0 < de.length && (ye = new xf(ye, n, null, l, H), j.push({ event: ye, listeners: de }), pe ? ye.data = pe : (pe = $p(l), pe !== null && (ye.data = pe)))), (pe = qu ? Qp(n, l) : Pm(n, l)) && (_ = no(_, "onBeforeInput"), 0 < _.length && (H = new xf("onBeforeInput", "beforeinput", null, l, H), j.push({ event: H, listeners: _ }), H.data = pe));
      }
      il(j, r);
    });
  }
  function nu(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function no(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = Ii(n, l), d != null && o.unshift(nu(n, d, c)), d = Ii(n, r), d != null && o.push(nu(n, d, c))), n = n.return;
    }
    return o;
  }
  function pi(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function lv(n, r, l, o, c) {
    for (var d = r._reactName, h = []; l !== null && l !== o; ) {
      var g = l, C = g.alternate, _ = g.stateNode;
      if (C !== null && C === o) break;
      g.tag === 5 && _ !== null && (g = _, c ? (C = Ii(l, d), C != null && h.unshift(nu(l, C, g))) : c || (C = Ii(l, d), C != null && h.push(nu(l, C, g)))), l = l.return;
    }
    h.length !== 0 && n.push({ event: r, listeners: h });
  }
  var uv = /\r\n?/g, Km = /\u0000|\uFFFD/g;
  function ov(n) {
    return (typeof n == "string" ? n : "" + n).replace(uv, `
`).replace(Km, "");
  }
  function Ls(n, r, l) {
    if (r = ov(r), ov(n) !== r && l) throw Error(N(425));
  }
  function vi() {
  }
  var ro = null, ll = null;
  function Ms(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Os = typeof setTimeout == "function" ? setTimeout : void 0, Vf = typeof clearTimeout == "function" ? clearTimeout : void 0, sv = typeof Promise == "function" ? Promise : void 0, ru = typeof queueMicrotask == "function" ? queueMicrotask : typeof sv < "u" ? function(n) {
    return sv.resolve(null).then(n).catch(Ns);
  } : Os;
  function Ns(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function au(n, r) {
    var l = r, o = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8) if (l = c.data, l === "/$") {
        if (o === 0) {
          n.removeChild(c), fi(r);
          return;
        }
        o--;
      } else l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    fi(r);
  }
  function va(n) {
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
  function cv(n) {
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
  var hi = Math.random().toString(36).slice(2), ha = "__reactFiber$" + hi, ao = "__reactProps$" + hi, ja = "__reactContainer$" + hi, io = "__reactEvents$" + hi, iu = "__reactListeners$" + hi, Zm = "__reactHandles$" + hi;
  function ul(n) {
    var r = n[ha];
    if (r) return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[ja] || l[ha]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null) for (n = cv(n); n !== null; ) {
          if (l = n[ha]) return l;
          n = cv(n);
        }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function ue(n) {
    return n = n[ha] || n[ja], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function ea(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(N(33));
  }
  function Et(n) {
    return n[ao] || null;
  }
  var Ne = [], Mr = -1;
  function ta(n) {
    return { current: n };
  }
  function rt(n) {
    0 > Mr || (n.current = Ne[Mr], Ne[Mr] = null, Mr--);
  }
  function le(n, r) {
    Mr++, Ne[Mr] = n.current, n.current = r;
  }
  var In = {}, Ct = ta(In), Yt = ta(!1), Gn = In;
  function Or(n, r) {
    var l = n.type.contextTypes;
    if (!l) return In;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r) return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l) c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function Nt(n) {
    return n = n.childContextTypes, n != null;
  }
  function lu() {
    rt(Yt), rt(Ct);
  }
  function fv(n, r, l) {
    if (Ct.current !== In) throw Error(N(168));
    le(Ct, r), le(Yt, l);
  }
  function lo(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function") return l;
    o = o.getChildContext();
    for (var c in o) if (!(c in r)) throw Error(N(108, Vn(n) || "Unknown", c));
    return K({}, l, o);
  }
  function Wn(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || In, Gn = Ct.current, le(Ct, n), le(Yt, Yt.current), !0;
  }
  function zs(n, r, l) {
    var o = n.stateNode;
    if (!o) throw Error(N(169));
    l ? (n = lo(n, r, Gn), o.__reactInternalMemoizedMergedChildContext = n, rt(Yt), rt(Ct), le(Ct, n)) : rt(Yt), le(Yt, l);
  }
  var ma = null, uu = !1, Va = !1;
  function Us(n) {
    ma === null ? ma = [n] : ma.push(n);
  }
  function mi(n) {
    uu = !0, Us(n);
  }
  function ya() {
    if (!Va && ma !== null) {
      Va = !0;
      var n = 0, r = Ge;
      try {
        var l = ma;
        for (Ge = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        ma = null, uu = !1;
      } catch (c) {
        throw ma !== null && (ma = ma.slice(n + 1)), bp(Wi, ya), c;
      } finally {
        Ge = r, Va = !1;
      }
    }
    return null;
  }
  var yi = [], gi = 0, Si = null, Ba = 0, zt = [], Nr = 0, fr = null, ga = 1, Sa = "";
  function ol(n, r) {
    yi[gi++] = Ba, yi[gi++] = Si, Si = n, Ba = r;
  }
  function dv(n, r, l) {
    zt[Nr++] = ga, zt[Nr++] = Sa, zt[Nr++] = fr, fr = n;
    var o = ga;
    n = Sa;
    var c = 32 - kr(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - kr(r) + c;
    if (30 < d) {
      var h = c - c % 5;
      d = (o & (1 << h) - 1).toString(32), o >>= h, c -= h, ga = 1 << 32 - kr(r) + c | l << c | o, Sa = d + n;
    } else ga = 1 << d | l << c | o, Sa = n;
  }
  function As(n) {
    n.return !== null && (ol(n, 1), dv(n, 1, 0));
  }
  function Hs(n) {
    for (; n === Si; ) Si = yi[--gi], yi[gi] = null, Ba = yi[--gi], yi[gi] = null;
    for (; n === fr; ) fr = zt[--Nr], zt[Nr] = null, Sa = zt[--Nr], zt[Nr] = null, ga = zt[--Nr], zt[Nr] = null;
  }
  var Xn = null, qn = null, st = !1, zr = null;
  function Bf(n, r) {
    var l = jr(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function pv(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, Xn = n, qn = va(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, Xn = n, qn = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = fr !== null ? { id: ga, overflow: Sa } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = jr(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, Xn = n, qn = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Pf(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Yf(n) {
    if (st) {
      var r = qn;
      if (r) {
        var l = r;
        if (!pv(n, r)) {
          if (Pf(n)) throw Error(N(418));
          r = va(l.nextSibling);
          var o = Xn;
          r && pv(n, r) ? Bf(o, l) : (n.flags = n.flags & -4097 | 2, st = !1, Xn = n);
        }
      } else {
        if (Pf(n)) throw Error(N(418));
        n.flags = n.flags & -4097 | 2, st = !1, Xn = n;
      }
    }
  }
  function $t(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    Xn = n;
  }
  function Fs(n) {
    if (n !== Xn) return !1;
    if (!st) return $t(n), st = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Ms(n.type, n.memoizedProps)), r && (r = qn)) {
      if (Pf(n)) throw uo(), Error(N(418));
      for (; r; ) Bf(n, r), r = va(r.nextSibling);
    }
    if ($t(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(N(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                qn = va(n.nextSibling);
                break e;
              }
              r--;
            } else l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        qn = null;
      }
    } else qn = Xn ? va(n.stateNode.nextSibling) : null;
    return !0;
  }
  function uo() {
    for (var n = qn; n; ) n = va(n.nextSibling);
  }
  function Ci() {
    qn = Xn = null, st = !1;
  }
  function Pa(n) {
    zr === null ? zr = [n] : zr.push(n);
  }
  var Jm = it.ReactCurrentBatchConfig;
  function sl(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1) throw Error(N(309));
          var o = l.stateNode;
        }
        if (!o) throw Error(N(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(h) {
          var g = c.refs;
          h === null ? delete g[d] : g[d] = h;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string") throw Error(N(284));
      if (!l._owner) throw Error(N(290, n));
    }
    return n;
  }
  function js(n, r) {
    throw n = Object.prototype.toString.call(r), Error(N(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function vv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function cl(n) {
    function r(x, T) {
      if (n) {
        var k = x.deletions;
        k === null ? (x.deletions = [T], x.flags |= 16) : k.push(T);
      }
    }
    function l(x, T) {
      if (!n) return null;
      for (; T !== null; ) r(x, T), T = T.sibling;
      return null;
    }
    function o(x, T) {
      for (x = /* @__PURE__ */ new Map(); T !== null; ) T.key !== null ? x.set(T.key, T) : x.set(T.index, T), T = T.sibling;
      return x;
    }
    function c(x, T) {
      return x = bi(x, T), x.index = 0, x.sibling = null, x;
    }
    function d(x, T, k) {
      return x.index = k, n ? (k = x.alternate, k !== null ? (k = k.index, k < T ? (x.flags |= 2, T) : k) : (x.flags |= 2, T)) : (x.flags |= 1048576, T);
    }
    function h(x) {
      return n && x.alternate === null && (x.flags |= 2), x;
    }
    function g(x, T, k, F) {
      return T === null || T.tag !== 6 ? (T = Cd(k, x.mode, F), T.return = x, T) : (T = c(T, k), T.return = x, T);
    }
    function C(x, T, k, F) {
      var J = k.type;
      return J === De ? H(x, T, k.props.children, F, k.key) : T !== null && (T.elementType === J || typeof J == "object" && J !== null && J.$$typeof === _t && vv(J) === T.type) ? (F = c(T, k.props), F.ref = sl(x, T, k), F.return = x, F) : (F = Fo(k.type, k.key, k.props, null, x.mode, F), F.ref = sl(x, T, k), F.return = x, F);
    }
    function _(x, T, k, F) {
      return T === null || T.tag !== 4 || T.stateNode.containerInfo !== k.containerInfo || T.stateNode.implementation !== k.implementation ? (T = gc(k, x.mode, F), T.return = x, T) : (T = c(T, k.children || []), T.return = x, T);
    }
    function H(x, T, k, F, J) {
      return T === null || T.tag !== 7 ? (T = Wa(k, x.mode, F, J), T.return = x, T) : (T = c(T, k), T.return = x, T);
    }
    function j(x, T, k) {
      if (typeof T == "string" && T !== "" || typeof T == "number") return T = Cd("" + T, x.mode, k), T.return = x, T;
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case Oe:
            return k = Fo(T.type, T.key, T.props, null, x.mode, k), k.ref = sl(x, null, T), k.return = x, k;
          case ft:
            return T = gc(T, x.mode, k), T.return = x, T;
          case _t:
            var F = T._init;
            return j(x, F(T._payload), k);
        }
        if (Yi(T) || ve(T)) return T = Wa(T, x.mode, k, null), T.return = x, T;
        js(x, T);
      }
      return null;
    }
    function A(x, T, k, F) {
      var J = T !== null ? T.key : null;
      if (typeof k == "string" && k !== "" || typeof k == "number") return J !== null ? null : g(x, T, "" + k, F);
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case Oe:
            return k.key === J ? C(x, T, k, F) : null;
          case ft:
            return k.key === J ? _(x, T, k, F) : null;
          case _t:
            return J = k._init, A(
              x,
              T,
              J(k._payload),
              F
            );
        }
        if (Yi(k) || ve(k)) return J !== null ? null : H(x, T, k, F, null);
        js(x, k);
      }
      return null;
    }
    function G(x, T, k, F, J) {
      if (typeof F == "string" && F !== "" || typeof F == "number") return x = x.get(k) || null, g(T, x, "" + F, J);
      if (typeof F == "object" && F !== null) {
        switch (F.$$typeof) {
          case Oe:
            return x = x.get(F.key === null ? k : F.key) || null, C(T, x, F, J);
          case ft:
            return x = x.get(F.key === null ? k : F.key) || null, _(T, x, F, J);
          case _t:
            var de = F._init;
            return G(x, T, k, de(F._payload), J);
        }
        if (Yi(F) || ve(F)) return x = x.get(k) || null, H(T, x, F, J, null);
        js(T, F);
      }
      return null;
    }
    function Z(x, T, k, F) {
      for (var J = null, de = null, pe = T, ye = T = 0, qt = null; pe !== null && ye < k.length; ye++) {
        pe.index > ye ? (qt = pe, pe = null) : qt = pe.sibling;
        var Be = A(x, pe, k[ye], F);
        if (Be === null) {
          pe === null && (pe = qt);
          break;
        }
        n && pe && Be.alternate === null && r(x, pe), T = d(Be, T, ye), de === null ? J = Be : de.sibling = Be, de = Be, pe = qt;
      }
      if (ye === k.length) return l(x, pe), st && ol(x, ye), J;
      if (pe === null) {
        for (; ye < k.length; ye++) pe = j(x, k[ye], F), pe !== null && (T = d(pe, T, ye), de === null ? J = pe : de.sibling = pe, de = pe);
        return st && ol(x, ye), J;
      }
      for (pe = o(x, pe); ye < k.length; ye++) qt = G(pe, x, ye, k[ye], F), qt !== null && (n && qt.alternate !== null && pe.delete(qt.key === null ? ye : qt.key), T = d(qt, T, ye), de === null ? J = qt : de.sibling = qt, de = qt);
      return n && pe.forEach(function(Mi) {
        return r(x, Mi);
      }), st && ol(x, ye), J;
    }
    function te(x, T, k, F) {
      var J = ve(k);
      if (typeof J != "function") throw Error(N(150));
      if (k = J.call(k), k == null) throw Error(N(151));
      for (var de = J = null, pe = T, ye = T = 0, qt = null, Be = k.next(); pe !== null && !Be.done; ye++, Be = k.next()) {
        pe.index > ye ? (qt = pe, pe = null) : qt = pe.sibling;
        var Mi = A(x, pe, Be.value, F);
        if (Mi === null) {
          pe === null && (pe = qt);
          break;
        }
        n && pe && Mi.alternate === null && r(x, pe), T = d(Mi, T, ye), de === null ? J = Mi : de.sibling = Mi, de = Mi, pe = qt;
      }
      if (Be.done) return l(
        x,
        pe
      ), st && ol(x, ye), J;
      if (pe === null) {
        for (; !Be.done; ye++, Be = k.next()) Be = j(x, Be.value, F), Be !== null && (T = d(Be, T, ye), de === null ? J = Be : de.sibling = Be, de = Be);
        return st && ol(x, ye), J;
      }
      for (pe = o(x, pe); !Be.done; ye++, Be = k.next()) Be = G(pe, x, ye, Be.value, F), Be !== null && (n && Be.alternate !== null && pe.delete(Be.key === null ? ye : Be.key), T = d(Be, T, ye), de === null ? J = Be : de.sibling = Be, de = Be);
      return n && pe.forEach(function(qv) {
        return r(x, qv);
      }), st && ol(x, ye), J;
    }
    function Dt(x, T, k, F) {
      if (typeof k == "object" && k !== null && k.type === De && k.key === null && (k = k.props.children), typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case Oe:
            e: {
              for (var J = k.key, de = T; de !== null; ) {
                if (de.key === J) {
                  if (J = k.type, J === De) {
                    if (de.tag === 7) {
                      l(x, de.sibling), T = c(de, k.props.children), T.return = x, x = T;
                      break e;
                    }
                  } else if (de.elementType === J || typeof J == "object" && J !== null && J.$$typeof === _t && vv(J) === de.type) {
                    l(x, de.sibling), T = c(de, k.props), T.ref = sl(x, de, k), T.return = x, x = T;
                    break e;
                  }
                  l(x, de);
                  break;
                } else r(x, de);
                de = de.sibling;
              }
              k.type === De ? (T = Wa(k.props.children, x.mode, F, k.key), T.return = x, x = T) : (F = Fo(k.type, k.key, k.props, null, x.mode, F), F.ref = sl(x, T, k), F.return = x, x = F);
            }
            return h(x);
          case ft:
            e: {
              for (de = k.key; T !== null; ) {
                if (T.key === de) if (T.tag === 4 && T.stateNode.containerInfo === k.containerInfo && T.stateNode.implementation === k.implementation) {
                  l(x, T.sibling), T = c(T, k.children || []), T.return = x, x = T;
                  break e;
                } else {
                  l(x, T);
                  break;
                }
                else r(x, T);
                T = T.sibling;
              }
              T = gc(k, x.mode, F), T.return = x, x = T;
            }
            return h(x);
          case _t:
            return de = k._init, Dt(x, T, de(k._payload), F);
        }
        if (Yi(k)) return Z(x, T, k, F);
        if (ve(k)) return te(x, T, k, F);
        js(x, k);
      }
      return typeof k == "string" && k !== "" || typeof k == "number" ? (k = "" + k, T !== null && T.tag === 6 ? (l(x, T.sibling), T = c(T, k), T.return = x, x = T) : (l(x, T), T = Cd(k, x.mode, F), T.return = x, x = T), h(x)) : l(x, T);
    }
    return Dt;
  }
  var Tt = cl(!0), $ = cl(!1), dr = ta(null), Kn = null, ou = null, $f = null;
  function Qf() {
    $f = ou = Kn = null;
  }
  function If(n) {
    var r = dr.current;
    rt(dr), n._currentValue = r;
  }
  function Gf(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l) break;
      n = n.return;
    }
  }
  function dt(n, r) {
    Kn = n, $f = ou = null, n = n.dependencies, n !== null && n.firstContext !== null && ((n.lanes & r) !== 0 && (At = !0), n.firstContext = null);
  }
  function Ur(n) {
    var r = n._currentValue;
    if ($f !== n) if (n = { context: n, memoizedValue: r, next: null }, ou === null) {
      if (Kn === null) throw Error(N(308));
      ou = n, Kn.dependencies = { lanes: 0, firstContext: n };
    } else ou = ou.next = n;
    return r;
  }
  var fl = null;
  function Wf(n) {
    fl === null ? fl = [n] : fl.push(n);
  }
  function Xf(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, Wf(r)) : (l.next = c.next, c.next = l), r.interleaved = l, pr(n, o);
  }
  function pr(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; ) n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var vr = !1;
  function qf(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function hv(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Ya(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Ei(n, r, l) {
    var o = n.updateQueue;
    if (o === null) return null;
    if (o = o.shared, (ze & 2) !== 0) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, pr(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, Wf(o)) : (r.next = c.next, c.next = r), o.interleaved = r, pr(n, l);
  }
  function Vs(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, ss(n, l);
    }
  }
  function mv(n, r) {
    var l = n.updateQueue, o = n.alternate;
    if (o !== null && (o = o.updateQueue, l === o)) {
      var c = null, d = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var h = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          d === null ? c = d = h : d = d.next = h, l = l.next;
        } while (l !== null);
        d === null ? c = d = r : d = d.next = r;
      } else c = d = r;
      l = { baseState: o.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: o.shared, effects: o.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function oo(n, r, l, o) {
    var c = n.updateQueue;
    vr = !1;
    var d = c.firstBaseUpdate, h = c.lastBaseUpdate, g = c.shared.pending;
    if (g !== null) {
      c.shared.pending = null;
      var C = g, _ = C.next;
      C.next = null, h === null ? d = _ : h.next = _, h = C;
      var H = n.alternate;
      H !== null && (H = H.updateQueue, g = H.lastBaseUpdate, g !== h && (g === null ? H.firstBaseUpdate = _ : g.next = _, H.lastBaseUpdate = C));
    }
    if (d !== null) {
      var j = c.baseState;
      h = 0, H = _ = C = null, g = d;
      do {
        var A = g.lane, G = g.eventTime;
        if ((o & A) === A) {
          H !== null && (H = H.next = {
            eventTime: G,
            lane: 0,
            tag: g.tag,
            payload: g.payload,
            callback: g.callback,
            next: null
          });
          e: {
            var Z = n, te = g;
            switch (A = r, G = l, te.tag) {
              case 1:
                if (Z = te.payload, typeof Z == "function") {
                  j = Z.call(G, j, A);
                  break e;
                }
                j = Z;
                break e;
              case 3:
                Z.flags = Z.flags & -65537 | 128;
              case 0:
                if (Z = te.payload, A = typeof Z == "function" ? Z.call(G, j, A) : Z, A == null) break e;
                j = K({}, j, A);
                break e;
              case 2:
                vr = !0;
            }
          }
          g.callback !== null && g.lane !== 0 && (n.flags |= 64, A = c.effects, A === null ? c.effects = [g] : A.push(g));
        } else G = { eventTime: G, lane: A, tag: g.tag, payload: g.payload, callback: g.callback, next: null }, H === null ? (_ = H = G, C = j) : H = H.next = G, h |= A;
        if (g = g.next, g === null) {
          if (g = c.shared.pending, g === null) break;
          A = g, g = A.next, A.next = null, c.lastBaseUpdate = A, c.shared.pending = null;
        }
      } while (!0);
      if (H === null && (C = j), c.baseState = C, c.firstBaseUpdate = _, c.lastBaseUpdate = H, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          h |= c.lane, c = c.next;
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      xa |= h, n.lanes = h, n.memoizedState = j;
    }
  }
  function Kf(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var o = n[r], c = o.callback;
      if (c !== null) {
        if (o.callback = null, o = l, typeof c != "function") throw Error(N(191, c));
        c.call(o);
      }
    }
  }
  var so = {}, Ca = ta(so), co = ta(so), fo = ta(so);
  function dl(n) {
    if (n === so) throw Error(N(174));
    return n;
  }
  function Zf(n, r) {
    switch (le(fo, r), le(co, n), le(Ca, so), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : $i(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = $i(r, n);
    }
    rt(Ca), le(Ca, r);
  }
  function pl() {
    rt(Ca), rt(co), rt(fo);
  }
  function yv(n) {
    dl(fo.current);
    var r = dl(Ca.current), l = $i(r, n.type);
    r !== l && (le(co, n), le(Ca, l));
  }
  function Bs(n) {
    co.current === n && (rt(Ca), rt(co));
  }
  var pt = ta(0);
  function Ps(n) {
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
  var po = [];
  function oe() {
    for (var n = 0; n < po.length; n++) po[n]._workInProgressVersionPrimary = null;
    po.length = 0;
  }
  var xe = it.ReactCurrentDispatcher, je = it.ReactCurrentBatchConfig, Ke = 0, Ve = null, Ut = null, Wt = null, Ys = !1, vo = !1, vl = 0, U = 0;
  function Fe() {
    throw Error(N(321));
  }
  function he(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!Jr(n[l], r[l])) return !1;
    return !0;
  }
  function Ti(n, r, l, o, c, d) {
    if (Ke = d, Ve = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, xe.current = n === null || n.memoizedState === null ? ac : Co, n = l(o, c), vo) {
      d = 0;
      do {
        if (vo = !1, vl = 0, 25 <= d) throw Error(N(301));
        d += 1, Wt = Ut = null, r.updateQueue = null, xe.current = ic, n = l(o, c);
      } while (vo);
    }
    if (xe.current = Sl, r = Ut !== null && Ut.next !== null, Ke = 0, Wt = Ut = Ve = null, Ys = !1, r) throw Error(N(300));
    return n;
  }
  function na() {
    var n = vl !== 0;
    return vl = 0, n;
  }
  function yn() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Wt === null ? Ve.memoizedState = Wt = n : Wt = Wt.next = n, Wt;
  }
  function Rt() {
    if (Ut === null) {
      var n = Ve.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = Ut.next;
    var r = Wt === null ? Ve.memoizedState : Wt.next;
    if (r !== null) Wt = r, Ut = n;
    else {
      if (n === null) throw Error(N(310));
      Ut = n, n = { memoizedState: Ut.memoizedState, baseState: Ut.baseState, baseQueue: Ut.baseQueue, queue: Ut.queue, next: null }, Wt === null ? Ve.memoizedState = Wt = n : Wt = Wt.next = n;
    }
    return Wt;
  }
  function $a(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function Ri(n) {
    var r = Rt(), l = r.queue;
    if (l === null) throw Error(N(311));
    l.lastRenderedReducer = n;
    var o = Ut, c = o.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var h = c.next;
        c.next = d.next, d.next = h;
      }
      o.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var g = h = null, C = null, _ = d;
      do {
        var H = _.lane;
        if ((Ke & H) === H) C !== null && (C = C.next = { lane: 0, action: _.action, hasEagerState: _.hasEagerState, eagerState: _.eagerState, next: null }), o = _.hasEagerState ? _.eagerState : n(o, _.action);
        else {
          var j = {
            lane: H,
            action: _.action,
            hasEagerState: _.hasEagerState,
            eagerState: _.eagerState,
            next: null
          };
          C === null ? (g = C = j, h = o) : C = C.next = j, Ve.lanes |= H, xa |= H;
        }
        _ = _.next;
      } while (_ !== null && _ !== d);
      C === null ? h = o : C.next = g, Jr(o, r.memoizedState) || (At = !0), r.memoizedState = o, r.baseState = h, r.baseQueue = C, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, Ve.lanes |= d, xa |= d, c = c.next;
      while (c !== n);
    } else c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function hl(n) {
    var r = Rt(), l = r.queue;
    if (l === null) throw Error(N(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var h = c = c.next;
      do
        d = n(d, h.action), h = h.next;
      while (h !== c);
      Jr(d, r.memoizedState) || (At = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function $s() {
  }
  function Qs(n, r) {
    var l = Ve, o = Rt(), c = r(), d = !Jr(o.memoizedState, c);
    if (d && (o.memoizedState = c, At = !0), o = o.queue, ho(Ws.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || Wt !== null && Wt.memoizedState.tag & 1) {
      if (l.flags |= 2048, ml(9, Gs.bind(null, l, o, c, r), void 0, null), Qt === null) throw Error(N(349));
      (Ke & 30) !== 0 || Is(l, r, c);
    }
    return c;
  }
  function Is(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = Ve.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Ve.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function Gs(n, r, l, o) {
    r.value = l, r.getSnapshot = o, Xs(r) && qs(n);
  }
  function Ws(n, r, l) {
    return l(function() {
      Xs(r) && qs(n);
    });
  }
  function Xs(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !Jr(n, l);
    } catch {
      return !0;
    }
  }
  function qs(n) {
    var r = pr(n, 1);
    r !== null && bn(r, n, 1, -1);
  }
  function Ks(n) {
    var r = yn();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: $a, lastRenderedState: n }, r.queue = n, n = n.dispatch = gl.bind(null, Ve, n), [r.memoizedState, n];
  }
  function ml(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = Ve.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Ve.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function Zs() {
    return Rt().memoizedState;
  }
  function su(n, r, l, o) {
    var c = yn();
    Ve.flags |= n, c.memoizedState = ml(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function cu(n, r, l, o) {
    var c = Rt();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (Ut !== null) {
      var h = Ut.memoizedState;
      if (d = h.destroy, o !== null && he(o, h.deps)) {
        c.memoizedState = ml(r, l, d, o);
        return;
      }
    }
    Ve.flags |= n, c.memoizedState = ml(1 | r, l, d, o);
  }
  function Js(n, r) {
    return su(8390656, 8, n, r);
  }
  function ho(n, r) {
    return cu(2048, 8, n, r);
  }
  function ec(n, r) {
    return cu(4, 2, n, r);
  }
  function mo(n, r) {
    return cu(4, 4, n, r);
  }
  function yl(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function tc(n, r, l) {
    return l = l != null ? l.concat([n]) : null, cu(4, 4, yl.bind(null, r, n), l);
  }
  function yo() {
  }
  function nc(n, r) {
    var l = Rt();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && he(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function rc(n, r) {
    var l = Rt();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && he(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function Jf(n, r, l) {
    return (Ke & 21) === 0 ? (n.baseState && (n.baseState = !1, At = !0), n.memoizedState = l) : (Jr(l, r) || (l = os(), Ve.lanes |= l, xa |= l, n.baseState = !0), r);
  }
  function go(n, r) {
    var l = Ge;
    Ge = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = je.transition;
    je.transition = {};
    try {
      n(!1), r();
    } finally {
      Ge = l, je.transition = o;
    }
  }
  function ed() {
    return Rt().memoizedState;
  }
  function So(n, r, l) {
    var o = wa(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, hr(n)) gv(r, l);
    else if (l = Xf(n, r, l, o), l !== null) {
      var c = jt();
      bn(l, n, o, c), nt(l, r, o);
    }
  }
  function gl(n, r, l) {
    var o = wa(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (hr(n)) gv(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null)) try {
        var h = r.lastRenderedState, g = d(h, l);
        if (c.hasEagerState = !0, c.eagerState = g, Jr(g, h)) {
          var C = r.interleaved;
          C === null ? (c.next = c, Wf(r)) : (c.next = C.next, C.next = c), r.interleaved = c;
          return;
        }
      } catch {
      } finally {
      }
      l = Xf(n, r, c, o), l !== null && (c = jt(), bn(l, n, o, c), nt(l, r, o));
    }
  }
  function hr(n) {
    var r = n.alternate;
    return n === Ve || r !== null && r === Ve;
  }
  function gv(n, r) {
    vo = Ys = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function nt(n, r, l) {
    if ((l & 4194240) !== 0) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, ss(n, l);
    }
  }
  var Sl = { readContext: Ur, useCallback: Fe, useContext: Fe, useEffect: Fe, useImperativeHandle: Fe, useInsertionEffect: Fe, useLayoutEffect: Fe, useMemo: Fe, useReducer: Fe, useRef: Fe, useState: Fe, useDebugValue: Fe, useDeferredValue: Fe, useTransition: Fe, useMutableSource: Fe, useSyncExternalStore: Fe, useId: Fe, unstable_isNewReconciler: !1 }, ac = { readContext: Ur, useCallback: function(n, r) {
    return yn().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Ur, useEffect: Js, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, su(
      4194308,
      4,
      yl.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return su(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return su(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = yn();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = yn();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = So.bind(null, Ve, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = yn();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Ks, useDebugValue: yo, useDeferredValue: function(n) {
    return yn().memoizedState = n;
  }, useTransition: function() {
    var n = Ks(!1), r = n[0];
    return n = go.bind(null, n[1]), yn().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = Ve, c = yn();
    if (st) {
      if (l === void 0) throw Error(N(407));
      l = l();
    } else {
      if (l = r(), Qt === null) throw Error(N(349));
      (Ke & 30) !== 0 || Is(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, Js(Ws.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, ml(9, Gs.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = yn(), r = Qt.identifierPrefix;
    if (st) {
      var l = Sa, o = ga;
      l = (o & ~(1 << 32 - kr(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = vl++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = U++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Co = {
    readContext: Ur,
    useCallback: nc,
    useContext: Ur,
    useEffect: ho,
    useImperativeHandle: tc,
    useInsertionEffect: ec,
    useLayoutEffect: mo,
    useMemo: rc,
    useReducer: Ri,
    useRef: Zs,
    useState: function() {
      return Ri($a);
    },
    useDebugValue: yo,
    useDeferredValue: function(n) {
      var r = Rt();
      return Jf(r, Ut.memoizedState, n);
    },
    useTransition: function() {
      var n = Ri($a)[0], r = Rt().memoizedState;
      return [n, r];
    },
    useMutableSource: $s,
    useSyncExternalStore: Qs,
    useId: ed,
    unstable_isNewReconciler: !1
  }, ic = { readContext: Ur, useCallback: nc, useContext: Ur, useEffect: ho, useImperativeHandle: tc, useInsertionEffect: ec, useLayoutEffect: mo, useMemo: rc, useReducer: hl, useRef: Zs, useState: function() {
    return hl($a);
  }, useDebugValue: yo, useDeferredValue: function(n) {
    var r = Rt();
    return Ut === null ? r.memoizedState = n : Jf(r, Ut.memoizedState, n);
  }, useTransition: function() {
    var n = hl($a)[0], r = Rt().memoizedState;
    return [n, r];
  }, useMutableSource: $s, useSyncExternalStore: Qs, useId: ed, unstable_isNewReconciler: !1 };
  function ra(n, r) {
    if (n && n.defaultProps) {
      r = K({}, r), n = n.defaultProps;
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function td(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : K({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var lc = { isMounted: function(n) {
    return (n = n._reactInternals) ? qr(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = jt(), c = wa(n), d = Ya(o, c);
    d.payload = r, l != null && (d.callback = l), r = Ei(n, d, c), r !== null && (bn(r, n, c, o), Vs(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = jt(), c = wa(n), d = Ya(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = Ei(n, d, c), r !== null && (bn(r, n, c, o), Vs(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = jt(), o = wa(n), c = Ya(l, o);
    c.tag = 2, r != null && (c.callback = r), r = Ei(n, c, o), r !== null && (bn(r, n, o, l), Vs(r, n, o));
  } };
  function Sv(n, r, l, o, c, d, h) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, h) : r.prototype && r.prototype.isPureReactComponent ? !Zu(l, o) || !Zu(c, d) : !0;
  }
  function uc(n, r, l) {
    var o = !1, c = In, d = r.contextType;
    return typeof d == "object" && d !== null ? d = Ur(d) : (c = Nt(r) ? Gn : Ct.current, o = r.contextTypes, d = (o = o != null) ? Or(n, c) : In), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = lc, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Cv(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && lc.enqueueReplaceState(r, r.state, null);
  }
  function Eo(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, qf(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = Ur(d) : (d = Nt(r) ? Gn : Ct.current, c.context = Or(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (td(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && lc.enqueueReplaceState(c, c.state, null), oo(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Cl(n, r) {
    try {
      var l = "", o = r;
      do
        l += Pi(o), o = o.return;
      while (o);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function nd(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function rd(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var oc = typeof WeakMap == "function" ? WeakMap : Map;
  function Ev(n, r, l) {
    l = Ya(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      mu || (mu = !0, Rl = o), rd(n, r);
    }, l;
  }
  function ad(n, r, l) {
    l = Ya(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      l.payload = function() {
        return o(c);
      }, l.callback = function() {
        rd(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      rd(n, r), typeof o != "function" && (Di === null ? Di = /* @__PURE__ */ new Set([this]) : Di.add(this));
      var h = r.stack;
      this.componentDidCatch(r.value, { componentStack: h !== null ? h : "" });
    }), l;
  }
  function id(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new oc();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = ly.bind(null, n, r, l), r.then(n, n));
  }
  function Tv(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function xi(n, r, l, o, c) {
    return (n.mode & 1) === 0 ? (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = Ya(-1, 1), r.tag = 2, Ei(l, r, 1))), l.lanes |= 1), n) : (n.flags |= 65536, n.lanes = c, n);
  }
  var To = it.ReactCurrentOwner, At = !1;
  function nn(n, r, l, o) {
    r.child = n === null ? $(r, null, l, o) : Tt(r, n.child, l, o);
  }
  function Zn(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return dt(r, c), o = Ti(n, r, l, o, d, c), l = na(), n !== null && !At ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Hr(n, r, c)) : (st && l && As(r), r.flags |= 1, nn(n, r, o, c), r.child);
  }
  function El(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !Sd(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, Re(n, r, d, o, c)) : (n = Fo(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, (n.lanes & c) === 0) {
      var h = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : Zu, l(h, o) && n.ref === r.ref) return Hr(n, r, c);
    }
    return r.flags |= 1, n = bi(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Re(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (Zu(d, o) && n.ref === r.ref) if (At = !1, r.pendingProps = o = d, (n.lanes & c) !== 0) (n.flags & 131072) !== 0 && (At = !0);
      else return r.lanes = n.lanes, Hr(n, r, c);
    }
    return Rv(n, r, l, o, c);
  }
  function Ro(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden") if ((r.mode & 1) === 0) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, le(pu, mr), mr |= l;
    else {
      if ((l & 1073741824) === 0) return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, le(pu, mr), mr |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, le(pu, mr), mr |= o;
    }
    else d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, le(pu, mr), mr |= o;
    return nn(n, r, c, l), r.child;
  }
  function ld(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Rv(n, r, l, o, c) {
    var d = Nt(l) ? Gn : Ct.current;
    return d = Or(r, d), dt(r, c), l = Ti(n, r, l, o, d, c), o = na(), n !== null && !At ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Hr(n, r, c)) : (st && o && As(r), r.flags |= 1, nn(n, r, l, c), r.child);
  }
  function xv(n, r, l, o, c) {
    if (Nt(l)) {
      var d = !0;
      Wn(r);
    } else d = !1;
    if (dt(r, c), r.stateNode === null) Ar(n, r), uc(r, l, o), Eo(r, l, o, c), o = !0;
    else if (n === null) {
      var h = r.stateNode, g = r.memoizedProps;
      h.props = g;
      var C = h.context, _ = l.contextType;
      typeof _ == "object" && _ !== null ? _ = Ur(_) : (_ = Nt(l) ? Gn : Ct.current, _ = Or(r, _));
      var H = l.getDerivedStateFromProps, j = typeof H == "function" || typeof h.getSnapshotBeforeUpdate == "function";
      j || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (g !== o || C !== _) && Cv(r, h, o, _), vr = !1;
      var A = r.memoizedState;
      h.state = A, oo(r, o, h, c), C = r.memoizedState, g !== o || A !== C || Yt.current || vr ? (typeof H == "function" && (td(r, l, H, o), C = r.memoizedState), (g = vr || Sv(r, l, g, o, A, C, _)) ? (j || typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function" || (typeof h.componentWillMount == "function" && h.componentWillMount(), typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount()), typeof h.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof h.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = C), h.props = o, h.state = C, h.context = _, o = g) : (typeof h.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      h = r.stateNode, hv(n, r), g = r.memoizedProps, _ = r.type === r.elementType ? g : ra(r.type, g), h.props = _, j = r.pendingProps, A = h.context, C = l.contextType, typeof C == "object" && C !== null ? C = Ur(C) : (C = Nt(l) ? Gn : Ct.current, C = Or(r, C));
      var G = l.getDerivedStateFromProps;
      (H = typeof G == "function" || typeof h.getSnapshotBeforeUpdate == "function") || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (g !== j || A !== C) && Cv(r, h, o, C), vr = !1, A = r.memoizedState, h.state = A, oo(r, o, h, c);
      var Z = r.memoizedState;
      g !== j || A !== Z || Yt.current || vr ? (typeof G == "function" && (td(r, l, G, o), Z = r.memoizedState), (_ = vr || Sv(r, l, _, o, A, Z, C) || !1) ? (H || typeof h.UNSAFE_componentWillUpdate != "function" && typeof h.componentWillUpdate != "function" || (typeof h.componentWillUpdate == "function" && h.componentWillUpdate(o, Z, C), typeof h.UNSAFE_componentWillUpdate == "function" && h.UNSAFE_componentWillUpdate(o, Z, C)), typeof h.componentDidUpdate == "function" && (r.flags |= 4), typeof h.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof h.componentDidUpdate != "function" || g === n.memoizedProps && A === n.memoizedState || (r.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || g === n.memoizedProps && A === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = Z), h.props = o, h.state = Z, h.context = C, o = _) : (typeof h.componentDidUpdate != "function" || g === n.memoizedProps && A === n.memoizedState || (r.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || g === n.memoizedProps && A === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return xo(n, r, l, o, d, c);
  }
  function xo(n, r, l, o, c, d) {
    ld(n, r);
    var h = (r.flags & 128) !== 0;
    if (!o && !h) return c && zs(r, l, !1), Hr(n, r, d);
    o = r.stateNode, To.current = r;
    var g = h && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && h ? (r.child = Tt(r, n.child, null, d), r.child = Tt(r, null, g, d)) : nn(n, r, g, d), r.memoizedState = o.state, c && zs(r, l, !0), r.child;
  }
  function fu(n) {
    var r = n.stateNode;
    r.pendingContext ? fv(n, r.pendingContext, r.pendingContext !== r.context) : r.context && fv(n, r.context, !1), Zf(n, r.containerInfo);
  }
  function wv(n, r, l, o, c) {
    return Ci(), Pa(c), r.flags |= 256, nn(n, r, l, o), r.child;
  }
  var sc = { dehydrated: null, treeContext: null, retryLane: 0 };
  function ud(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function cc(n, r, l) {
    var o = r.pendingProps, c = pt.current, d = !1, h = (r.flags & 128) !== 0, g;
    if ((g = h) || (g = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), g ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), le(pt, c & 1), n === null)
      return Yf(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? ((r.mode & 1) === 0 ? r.lanes = 1 : n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824, null) : (h = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, h = { mode: "hidden", children: h }, (o & 1) === 0 && d !== null ? (d.childLanes = 0, d.pendingProps = h) : d = _i(h, o, 0, null), n = Wa(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = ud(l), r.memoizedState = sc, n) : od(r, h));
    if (c = n.memoizedState, c !== null && (g = c.dehydrated, g !== null)) return Dv(n, r, h, o, g, c, l);
    if (d) {
      d = o.fallback, h = r.mode, c = n.child, g = c.sibling;
      var C = { mode: "hidden", children: o.children };
      return (h & 1) === 0 && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = C, r.deletions = null) : (o = bi(c, C), o.subtreeFlags = c.subtreeFlags & 14680064), g !== null ? d = bi(g, d) : (d = Wa(d, h, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, h = n.child.memoizedState, h = h === null ? ud(l) : { baseLanes: h.baseLanes | l, cachePool: null, transitions: h.transitions }, d.memoizedState = h, d.childLanes = n.childLanes & ~l, r.memoizedState = sc, o;
    }
    return d = n.child, n = d.sibling, o = bi(d, { mode: "visible", children: o.children }), (r.mode & 1) === 0 && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function od(n, r) {
    return r = _i({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function wo(n, r, l, o) {
    return o !== null && Pa(o), Tt(r, n.child, null, l), n = od(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Dv(n, r, l, o, c, d, h) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = nd(Error(N(422))), wo(n, r, h, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = _i({ mode: "visible", children: o.children }, c, 0, null), d = Wa(d, c, h, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, (r.mode & 1) !== 0 && Tt(r, n.child, null, h), r.child.memoizedState = ud(h), r.memoizedState = sc, d);
    if ((r.mode & 1) === 0) return wo(n, r, h, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o) var g = o.dgst;
      return o = g, d = Error(N(419)), o = nd(d, o, void 0), wo(n, r, h, o);
    }
    if (g = (h & n.childLanes) !== 0, At || g) {
      if (o = Qt, o !== null) {
        switch (h & -h) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
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
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = (c & (o.suspendedLanes | h)) !== 0 ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, pr(n, c), bn(o, n, c, -1));
      }
      return gd(), o = nd(Error(N(421))), wo(n, r, h, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = uy.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, qn = va(c.nextSibling), Xn = r, st = !0, zr = null, n !== null && (zt[Nr++] = ga, zt[Nr++] = Sa, zt[Nr++] = fr, ga = n.id, Sa = n.overflow, fr = r), r = od(r, o.children), r.flags |= 4096, r);
  }
  function sd(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), Gf(n.return, r, l);
  }
  function wn(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function Ea(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (nn(n, r, o.children, l), o = pt.current, (o & 2) !== 0) o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && (n.flags & 128) !== 0) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && sd(n, l, r);
        else if (n.tag === 19) sd(n, l, r);
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
    if (le(pt, o), (r.mode & 1) === 0) r.memoizedState = null;
    else switch (c) {
      case "forwards":
        for (l = r.child, c = null; l !== null; ) n = l.alternate, n !== null && Ps(n) === null && (c = l), l = l.sibling;
        l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), wn(r, !1, c, l, d);
        break;
      case "backwards":
        for (l = null, c = r.child, r.child = null; c !== null; ) {
          if (n = c.alternate, n !== null && Ps(n) === null) {
            r.child = c;
            break;
          }
          n = c.sibling, c.sibling = l, l = c, c = n;
        }
        wn(r, !0, l, null, d);
        break;
      case "together":
        wn(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function Ar(n, r) {
    (r.mode & 1) === 0 && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function Hr(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), xa |= r.lanes, (l & r.childLanes) === 0) return null;
    if (n !== null && r.child !== n.child) throw Error(N(153));
    if (r.child !== null) {
      for (n = r.child, l = bi(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; ) n = n.sibling, l = l.sibling = bi(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function Do(n, r, l) {
    switch (r.tag) {
      case 3:
        fu(r), Ci();
        break;
      case 5:
        yv(r);
        break;
      case 1:
        Nt(r.type) && Wn(r);
        break;
      case 4:
        Zf(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        le(dr, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (le(pt, pt.current & 1), r.flags |= 128, null) : (l & r.child.childLanes) !== 0 ? cc(n, r, l) : (le(pt, pt.current & 1), n = Hr(n, r, l), n !== null ? n.sibling : null);
        le(pt, pt.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, (n.flags & 128) !== 0) {
          if (o) return Ea(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), le(pt, pt.current), o) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, Ro(n, r, l);
    }
    return Hr(n, r, l);
  }
  var Fr, Ht, kv, bv;
  Fr = function(n, r) {
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
  }, Ht = function() {
  }, kv = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, dl(Ca.current);
      var d = null;
      switch (l) {
        case "input":
          c = or(n, c), o = or(n, o), d = [];
          break;
        case "select":
          c = K({}, c, { value: void 0 }), o = K({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = Dr(n, c), o = Dr(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = vi);
      }
      Lt(l, o);
      var h;
      l = null;
      for (_ in c) if (!o.hasOwnProperty(_) && c.hasOwnProperty(_) && c[_] != null) if (_ === "style") {
        var g = c[_];
        for (h in g) g.hasOwnProperty(h) && (l || (l = {}), l[h] = "");
      } else _ !== "dangerouslySetInnerHTML" && _ !== "children" && _ !== "suppressContentEditableWarning" && _ !== "suppressHydrationWarning" && _ !== "autoFocus" && (ht.hasOwnProperty(_) ? d || (d = []) : (d = d || []).push(_, null));
      for (_ in o) {
        var C = o[_];
        if (g = c != null ? c[_] : void 0, o.hasOwnProperty(_) && C !== g && (C != null || g != null)) if (_ === "style") if (g) {
          for (h in g) !g.hasOwnProperty(h) || C && C.hasOwnProperty(h) || (l || (l = {}), l[h] = "");
          for (h in C) C.hasOwnProperty(h) && g[h] !== C[h] && (l || (l = {}), l[h] = C[h]);
        } else l || (d || (d = []), d.push(
          _,
          l
        )), l = C;
        else _ === "dangerouslySetInnerHTML" ? (C = C ? C.__html : void 0, g = g ? g.__html : void 0, C != null && g !== C && (d = d || []).push(_, C)) : _ === "children" ? typeof C != "string" && typeof C != "number" || (d = d || []).push(_, "" + C) : _ !== "suppressContentEditableWarning" && _ !== "suppressHydrationWarning" && (ht.hasOwnProperty(_) ? (C != null && _ === "onScroll" && $e("scroll", n), d || g === C || (d = [])) : (d = d || []).push(_, C));
      }
      l && (d = d || []).push("style", l);
      var _ = d;
      (r.updateQueue = _) && (r.flags |= 4);
    }
  }, bv = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function ko(n, r) {
    if (!st) switch (n.tailMode) {
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
  function Xt(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r) for (var c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else for (c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function _v(n, r, l) {
    var o = r.pendingProps;
    switch (Hs(r), r.tag) {
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
        return Xt(r), null;
      case 1:
        return Nt(r.type) && lu(), Xt(r), null;
      case 3:
        return o = r.stateNode, pl(), rt(Yt), rt(Ct), oe(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (Fs(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && (r.flags & 256) === 0 || (r.flags |= 1024, zr !== null && (xl(zr), zr = null))), Ht(n, r), Xt(r), null;
      case 5:
        Bs(r);
        var c = dl(fo.current);
        if (l = r.type, n !== null && r.stateNode != null) kv(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null) throw Error(N(166));
            return Xt(r), null;
          }
          if (n = dl(Ca.current), Fs(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[ha] = r, o[ao] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                $e("cancel", o), $e("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                $e("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < to.length; c++) $e(to[c], o);
                break;
              case "source":
                $e("error", o);
                break;
              case "img":
              case "image":
              case "link":
                $e(
                  "error",
                  o
                ), $e("load", o);
                break;
              case "details":
                $e("toggle", o);
                break;
              case "input":
                wr(o, d), $e("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, $e("invalid", o);
                break;
              case "textarea":
                Wr(o, d), $e("invalid", o);
            }
            Lt(l, d), c = null;
            for (var h in d) if (d.hasOwnProperty(h)) {
              var g = d[h];
              h === "children" ? typeof g == "string" ? o.textContent !== g && (d.suppressHydrationWarning !== !0 && Ls(o.textContent, g, n), c = ["children", g]) : typeof g == "number" && o.textContent !== "" + g && (d.suppressHydrationWarning !== !0 && Ls(
                o.textContent,
                g,
                n
              ), c = ["children", "" + g]) : ht.hasOwnProperty(h) && g != null && h === "onScroll" && $e("scroll", o);
            }
            switch (l) {
              case "input":
                hn(o), Hu(o, d, !0);
                break;
              case "textarea":
                hn(o), cr(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = vi);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            h = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = da(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = h.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = h.createElement(l, { is: o.is }) : (n = h.createElement(l), l === "select" && (h = n, o.multiple ? h.multiple = !0 : o.size && (h.size = o.size))) : n = h.createElementNS(n, l), n[ha] = r, n[ao] = o, Fr(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (h = Yn(l, o), l) {
                case "dialog":
                  $e("cancel", n), $e("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  $e("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < to.length; c++) $e(to[c], n);
                  c = o;
                  break;
                case "source":
                  $e("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  $e(
                    "error",
                    n
                  ), $e("load", n), c = o;
                  break;
                case "details":
                  $e("toggle", n), c = o;
                  break;
                case "input":
                  wr(n, o), c = or(n, o), $e("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = K({}, o, { value: void 0 }), $e("invalid", n);
                  break;
                case "textarea":
                  Wr(n, o), c = Dr(n, o), $e("invalid", n);
                  break;
                default:
                  c = o;
              }
              Lt(l, c), g = c;
              for (d in g) if (g.hasOwnProperty(d)) {
                var C = g[d];
                d === "style" ? yt(n, C) : d === "dangerouslySetInnerHTML" ? (C = C ? C.__html : void 0, C != null && ju(n, C)) : d === "children" ? typeof C == "string" ? (l !== "textarea" || C !== "") && Y(n, C) : typeof C == "number" && Y(n, "" + C) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (ht.hasOwnProperty(d) ? C != null && d === "onScroll" && $e("scroll", n) : C != null && Le(n, d, C, h));
              }
              switch (l) {
                case "input":
                  hn(n), Hu(n, o, !1);
                  break;
                case "textarea":
                  hn(n), cr(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + xr(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? sr(n, !!o.multiple, d, !1) : o.defaultValue != null && sr(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = vi);
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
        return Xt(r), null;
      case 6:
        if (n && r.stateNode != null) bv(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null) throw Error(N(166));
          if (l = dl(fo.current), dl(Ca.current), Fs(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[ha] = r, (d = o.nodeValue !== l) && (n = Xn, n !== null)) switch (n.tag) {
              case 3:
                Ls(o.nodeValue, l, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && Ls(o.nodeValue, l, (n.mode & 1) !== 0);
            }
            d && (r.flags |= 4);
          } else o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[ha] = r, r.stateNode = o;
        }
        return Xt(r), null;
      case 13:
        if (rt(pt), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (st && qn !== null && (r.mode & 1) !== 0 && (r.flags & 128) === 0) uo(), Ci(), r.flags |= 98560, d = !1;
          else if (d = Fs(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(N(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(N(317));
              d[ha] = r;
            } else Ci(), (r.flags & 128) === 0 && (r.memoizedState = null), r.flags |= 4;
            Xt(r), d = !1;
          } else zr !== null && (xl(zr), zr = null), d = !0;
          if (!d) return r.flags & 65536 ? r : null;
        }
        return (r.flags & 128) !== 0 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, (r.mode & 1) !== 0 && (n === null || (pt.current & 1) !== 0 ? wt === 0 && (wt = 3) : gd())), r.updateQueue !== null && (r.flags |= 4), Xt(r), null);
      case 4:
        return pl(), Ht(n, r), n === null && tu(r.stateNode.containerInfo), Xt(r), null;
      case 10:
        return If(r.type._context), Xt(r), null;
      case 17:
        return Nt(r.type) && lu(), Xt(r), null;
      case 19:
        if (rt(pt), d = r.memoizedState, d === null) return Xt(r), null;
        if (o = (r.flags & 128) !== 0, h = d.rendering, h === null) if (o) ko(d, !1);
        else {
          if (wt !== 0 || n !== null && (n.flags & 128) !== 0) for (n = r.child; n !== null; ) {
            if (h = Ps(n), h !== null) {
              for (r.flags |= 128, ko(d, !1), o = h.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; ) d = l, n = o, d.flags &= 14680066, h = d.alternate, h === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = h.childLanes, d.lanes = h.lanes, d.child = h.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = h.memoizedProps, d.memoizedState = h.memoizedState, d.updateQueue = h.updateQueue, d.type = h.type, n = h.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return le(pt, pt.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && tt() > hu && (r.flags |= 128, o = !0, ko(d, !1), r.lanes = 4194304);
        }
        else {
          if (!o) if (n = Ps(h), n !== null) {
            if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), ko(d, !0), d.tail === null && d.tailMode === "hidden" && !h.alternate && !st) return Xt(r), null;
          } else 2 * tt() - d.renderingStartTime > hu && l !== 1073741824 && (r.flags |= 128, o = !0, ko(d, !1), r.lanes = 4194304);
          d.isBackwards ? (h.sibling = r.child, r.child = h) : (l = d.last, l !== null ? l.sibling = h : r.child = h, d.last = h);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = tt(), r.sibling = null, l = pt.current, le(pt, o ? l & 1 | 2 : l & 1), r) : (Xt(r), null);
      case 22:
      case 23:
        return yd(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && (r.mode & 1) !== 0 ? (mr & 1073741824) !== 0 && (Xt(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Xt(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(N(156, r.tag));
  }
  function fc(n, r) {
    switch (Hs(r), r.tag) {
      case 1:
        return Nt(r.type) && lu(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return pl(), rt(Yt), rt(Ct), oe(), n = r.flags, (n & 65536) !== 0 && (n & 128) === 0 ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Bs(r), null;
      case 13:
        if (rt(pt), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(N(340));
          Ci();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return rt(pt), null;
      case 4:
        return pl(), null;
      case 10:
        return If(r.type._context), null;
      case 22:
      case 23:
        return yd(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var bo = !1, gn = !1, ey = typeof WeakSet == "function" ? WeakSet : Set, q = null;
  function du(n, r) {
    var l = n.ref;
    if (l !== null) if (typeof l == "function") try {
      l(null);
    } catch (o) {
      ct(n, r, o);
    }
    else l.current = null;
  }
  function dc(n, r, l) {
    try {
      l();
    } catch (o) {
      ct(n, r, o);
    }
  }
  var Lv = !1;
  function Mv(n, r) {
    if (ro = Ji, n = Ju(), Ts(n)) {
      if ("selectionStart" in n) var l = { start: n.selectionStart, end: n.selectionEnd };
      else e: {
        l = (l = n.ownerDocument) && l.defaultView || window;
        var o = l.getSelection && l.getSelection();
        if (o && o.rangeCount !== 0) {
          l = o.anchorNode;
          var c = o.anchorOffset, d = o.focusNode;
          o = o.focusOffset;
          try {
            l.nodeType, d.nodeType;
          } catch {
            l = null;
            break e;
          }
          var h = 0, g = -1, C = -1, _ = 0, H = 0, j = n, A = null;
          t: for (; ; ) {
            for (var G; j !== l || c !== 0 && j.nodeType !== 3 || (g = h + c), j !== d || o !== 0 && j.nodeType !== 3 || (C = h + o), j.nodeType === 3 && (h += j.nodeValue.length), (G = j.firstChild) !== null; )
              A = j, j = G;
            for (; ; ) {
              if (j === n) break t;
              if (A === l && ++_ === c && (g = h), A === d && ++H === o && (C = h), (G = j.nextSibling) !== null) break;
              j = A, A = j.parentNode;
            }
            j = G;
          }
          l = g === -1 || C === -1 ? null : { start: g, end: C };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (ll = { focusedElem: n, selectionRange: l }, Ji = !1, q = r; q !== null; ) if (r = q, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, q = n;
    else for (; q !== null; ) {
      r = q;
      try {
        var Z = r.alternate;
        if ((r.flags & 1024) !== 0) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (Z !== null) {
              var te = Z.memoizedProps, Dt = Z.memoizedState, x = r.stateNode, T = x.getSnapshotBeforeUpdate(r.elementType === r.type ? te : ra(r.type, te), Dt);
              x.__reactInternalSnapshotBeforeUpdate = T;
            }
            break;
          case 3:
            var k = r.stateNode.containerInfo;
            k.nodeType === 1 ? k.textContent = "" : k.nodeType === 9 && k.documentElement && k.removeChild(k.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(N(163));
        }
      } catch (F) {
        ct(r, r.return, F);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, q = n;
        break;
      }
      q = r.return;
    }
    return Z = Lv, Lv = !1, Z;
  }
  function _o(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && dc(r, l, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function Lo(n, r) {
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
  function cd(n) {
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
  function pc(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, pc(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[ha], delete r[ao], delete r[io], delete r[iu], delete r[Zm])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Mo(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Qa(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || Mo(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function Ta(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = vi));
    else if (o !== 4 && (n = n.child, n !== null)) for (Ta(n, r, l), n = n.sibling; n !== null; ) Ta(n, r, l), n = n.sibling;
  }
  function Ra(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null)) for (Ra(n, r, l), n = n.sibling; n !== null; ) Ra(n, r, l), n = n.sibling;
  }
  var xt = null, Dn = !1;
  function kn(n, r, l) {
    for (l = l.child; l !== null; ) Ov(n, r, l), l = l.sibling;
  }
  function Ov(n, r, l) {
    if (Kr && typeof Kr.onCommitFiberUnmount == "function") try {
      Kr.onCommitFiberUnmount(Pu, l);
    } catch {
    }
    switch (l.tag) {
      case 5:
        gn || du(l, r);
      case 6:
        var o = xt, c = Dn;
        xt = null, kn(n, r, l), xt = o, Dn = c, xt !== null && (Dn ? (n = xt, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : xt.removeChild(l.stateNode));
        break;
      case 18:
        xt !== null && (Dn ? (n = xt, l = l.stateNode, n.nodeType === 8 ? au(n.parentNode, l) : n.nodeType === 1 && au(n, l), fi(n)) : au(xt, l.stateNode));
        break;
      case 4:
        o = xt, c = Dn, xt = l.stateNode.containerInfo, Dn = !0, kn(n, r, l), xt = o, Dn = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!gn && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, h = d.destroy;
            d = d.tag, h !== void 0 && ((d & 2) !== 0 || (d & 4) !== 0) && dc(l, r, h), c = c.next;
          } while (c !== o);
        }
        kn(n, r, l);
        break;
      case 1:
        if (!gn && (du(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function")) try {
          o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
        } catch (g) {
          ct(l, r, g);
        }
        kn(n, r, l);
        break;
      case 21:
        kn(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (gn = (o = gn) || l.memoizedState !== null, kn(n, r, l), gn = o) : kn(n, r, l);
        break;
      default:
        kn(n, r, l);
    }
  }
  function Nv(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new ey()), r.forEach(function(o) {
        var c = Pv.bind(null, n, o);
        l.has(o) || (l.add(o), o.then(c, c));
      });
    }
  }
  function aa(n, r) {
    var l = r.deletions;
    if (l !== null) for (var o = 0; o < l.length; o++) {
      var c = l[o];
      try {
        var d = n, h = r, g = h;
        e: for (; g !== null; ) {
          switch (g.tag) {
            case 5:
              xt = g.stateNode, Dn = !1;
              break e;
            case 3:
              xt = g.stateNode.containerInfo, Dn = !0;
              break e;
            case 4:
              xt = g.stateNode.containerInfo, Dn = !0;
              break e;
          }
          g = g.return;
        }
        if (xt === null) throw Error(N(160));
        Ov(d, h, c), xt = null, Dn = !1;
        var C = c.alternate;
        C !== null && (C.return = null), c.return = null;
      } catch (_) {
        ct(c, r, _);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) fd(r, n), r = r.sibling;
  }
  function fd(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (aa(r, n), Jn(n), o & 4) {
          try {
            _o(3, n, n.return), Lo(3, n);
          } catch (te) {
            ct(n, n.return, te);
          }
          try {
            _o(5, n, n.return);
          } catch (te) {
            ct(n, n.return, te);
          }
        }
        break;
      case 1:
        aa(r, n), Jn(n), o & 512 && l !== null && du(l, l.return);
        break;
      case 5:
        if (aa(r, n), Jn(n), o & 512 && l !== null && du(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            Y(c, "");
          } catch (te) {
            ct(n, n.return, te);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, h = l !== null ? l.memoizedProps : d, g = n.type, C = n.updateQueue;
          if (n.updateQueue = null, C !== null) try {
            g === "input" && d.type === "radio" && d.name != null && fa(c, d), Yn(g, h);
            var _ = Yn(g, d);
            for (h = 0; h < C.length; h += 2) {
              var H = C[h], j = C[h + 1];
              H === "style" ? yt(c, j) : H === "dangerouslySetInnerHTML" ? ju(c, j) : H === "children" ? Y(c, j) : Le(c, H, j, _);
            }
            switch (g) {
              case "input":
                Vl(c, d);
                break;
              case "textarea":
                Bl(c, d);
                break;
              case "select":
                var A = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!d.multiple;
                var G = d.value;
                G != null ? sr(c, !!d.multiple, G, !1) : A !== !!d.multiple && (d.defaultValue != null ? sr(
                  c,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : sr(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
            c[ao] = d;
          } catch (te) {
            ct(n, n.return, te);
          }
        }
        break;
      case 6:
        if (aa(r, n), Jn(n), o & 4) {
          if (n.stateNode === null) throw Error(N(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (te) {
            ct(n, n.return, te);
          }
        }
        break;
      case 3:
        if (aa(r, n), Jn(n), o & 4 && l !== null && l.memoizedState.isDehydrated) try {
          fi(r.containerInfo);
        } catch (te) {
          ct(n, n.return, te);
        }
        break;
      case 4:
        aa(r, n), Jn(n);
        break;
      case 13:
        aa(r, n), Jn(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (vd = tt())), o & 4 && Nv(n);
        break;
      case 22:
        if (H = l !== null && l.memoizedState !== null, n.mode & 1 ? (gn = (_ = gn) || H, aa(r, n), gn = _) : aa(r, n), Jn(n), o & 8192) {
          if (_ = n.memoizedState !== null, (n.stateNode.isHidden = _) && !H && (n.mode & 1) !== 0) for (q = n, H = n.child; H !== null; ) {
            for (j = q = H; q !== null; ) {
              switch (A = q, G = A.child, A.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  _o(4, A, A.return);
                  break;
                case 1:
                  du(A, A.return);
                  var Z = A.stateNode;
                  if (typeof Z.componentWillUnmount == "function") {
                    o = A, l = A.return;
                    try {
                      r = o, Z.props = r.memoizedProps, Z.state = r.memoizedState, Z.componentWillUnmount();
                    } catch (te) {
                      ct(o, l, te);
                    }
                  }
                  break;
                case 5:
                  du(A, A.return);
                  break;
                case 22:
                  if (A.memoizedState !== null) {
                    Oo(j);
                    continue;
                  }
              }
              G !== null ? (G.return = A, q = G) : Oo(j);
            }
            H = H.sibling;
          }
          e: for (H = null, j = n; ; ) {
            if (j.tag === 5) {
              if (H === null) {
                H = j;
                try {
                  c = j.stateNode, _ ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (g = j.stateNode, C = j.memoizedProps.style, h = C != null && C.hasOwnProperty("display") ? C.display : null, g.style.display = et("display", h));
                } catch (te) {
                  ct(n, n.return, te);
                }
              }
            } else if (j.tag === 6) {
              if (H === null) try {
                j.stateNode.nodeValue = _ ? "" : j.memoizedProps;
              } catch (te) {
                ct(n, n.return, te);
              }
            } else if ((j.tag !== 22 && j.tag !== 23 || j.memoizedState === null || j === n) && j.child !== null) {
              j.child.return = j, j = j.child;
              continue;
            }
            if (j === n) break e;
            for (; j.sibling === null; ) {
              if (j.return === null || j.return === n) break e;
              H === j && (H = null), j = j.return;
            }
            H === j && (H = null), j.sibling.return = j.return, j = j.sibling;
          }
        }
        break;
      case 19:
        aa(r, n), Jn(n), o & 4 && Nv(n);
        break;
      case 21:
        break;
      default:
        aa(
          r,
          n
        ), Jn(n);
    }
  }
  function Jn(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (Mo(l)) {
              var o = l;
              break e;
            }
            l = l.return;
          }
          throw Error(N(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (Y(c, ""), o.flags &= -33);
            var d = Qa(n);
            Ra(n, d, c);
            break;
          case 3:
          case 4:
            var h = o.stateNode.containerInfo, g = Qa(n);
            Ta(n, g, h);
            break;
          default:
            throw Error(N(161));
        }
      } catch (C) {
        ct(n, n.return, C);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function ty(n, r, l) {
    q = n, dd(n);
  }
  function dd(n, r, l) {
    for (var o = (n.mode & 1) !== 0; q !== null; ) {
      var c = q, d = c.child;
      if (c.tag === 22 && o) {
        var h = c.memoizedState !== null || bo;
        if (!h) {
          var g = c.alternate, C = g !== null && g.memoizedState !== null || gn;
          g = bo;
          var _ = gn;
          if (bo = h, (gn = C) && !_) for (q = c; q !== null; ) h = q, C = h.child, h.tag === 22 && h.memoizedState !== null ? pd(c) : C !== null ? (C.return = h, q = C) : pd(c);
          for (; d !== null; ) q = d, dd(d), d = d.sibling;
          q = c, bo = g, gn = _;
        }
        zv(n);
      } else (c.subtreeFlags & 8772) !== 0 && d !== null ? (d.return = c, q = d) : zv(n);
    }
  }
  function zv(n) {
    for (; q !== null; ) {
      var r = q;
      if ((r.flags & 8772) !== 0) {
        var l = r.alternate;
        try {
          if ((r.flags & 8772) !== 0) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              gn || Lo(5, r);
              break;
            case 1:
              var o = r.stateNode;
              if (r.flags & 4 && !gn) if (l === null) o.componentDidMount();
              else {
                var c = r.elementType === r.type ? l.memoizedProps : ra(r.type, l.memoizedProps);
                o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
              }
              var d = r.updateQueue;
              d !== null && Kf(r, d, o);
              break;
            case 3:
              var h = r.updateQueue;
              if (h !== null) {
                if (l = null, r.child !== null) switch (r.child.tag) {
                  case 5:
                    l = r.child.stateNode;
                    break;
                  case 1:
                    l = r.child.stateNode;
                }
                Kf(r, h, l);
              }
              break;
            case 5:
              var g = r.stateNode;
              if (l === null && r.flags & 4) {
                l = g;
                var C = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    C.autoFocus && l.focus();
                    break;
                  case "img":
                    C.src && (l.src = C.src);
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
                var _ = r.alternate;
                if (_ !== null) {
                  var H = _.memoizedState;
                  if (H !== null) {
                    var j = H.dehydrated;
                    j !== null && fi(j);
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
              throw Error(N(163));
          }
          gn || r.flags & 512 && cd(r);
        } catch (A) {
          ct(r, r.return, A);
        }
      }
      if (r === n) {
        q = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, q = l;
        break;
      }
      q = r.return;
    }
  }
  function Oo(n) {
    for (; q !== null; ) {
      var r = q;
      if (r === n) {
        q = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, q = l;
        break;
      }
      q = r.return;
    }
  }
  function pd(n) {
    for (; q !== null; ) {
      var r = q;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              Lo(4, r);
            } catch (C) {
              ct(r, l, C);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (C) {
                ct(r, c, C);
              }
            }
            var d = r.return;
            try {
              cd(r);
            } catch (C) {
              ct(r, d, C);
            }
            break;
          case 5:
            var h = r.return;
            try {
              cd(r);
            } catch (C) {
              ct(r, h, C);
            }
        }
      } catch (C) {
        ct(r, r.return, C);
      }
      if (r === n) {
        q = null;
        break;
      }
      var g = r.sibling;
      if (g !== null) {
        g.return = r.return, q = g;
        break;
      }
      q = r.return;
    }
  }
  var ny = Math.ceil, wi = it.ReactCurrentDispatcher, Tl = it.ReactCurrentOwner, rn = it.ReactCurrentBatchConfig, ze = 0, Qt = null, Ft = null, an = 0, mr = 0, pu = ta(0), wt = 0, No = null, xa = 0, vu = 0, vc = 0, zo = null, er = null, vd = 0, hu = 1 / 0, yr = null, mu = !1, Rl = null, Di = null, hc = !1, Ia = null, Uo = 0, ki = 0, yu = null, Ao = -1, Sn = 0;
  function jt() {
    return (ze & 6) !== 0 ? tt() : Ao !== -1 ? Ao : Ao = tt();
  }
  function wa(n) {
    return (n.mode & 1) === 0 ? 1 : (ze & 2) !== 0 && an !== 0 ? an & -an : Jm.transition !== null ? (Sn === 0 && (Sn = os()), Sn) : (n = Ge, n !== 0 || (n = window.event, n = n === void 0 ? 16 : ds(n.type)), n);
  }
  function bn(n, r, l, o) {
    if (50 < ki) throw ki = 0, yu = null, Error(N(185));
    Ki(n, l, o), ((ze & 2) === 0 || n !== Qt) && (n === Qt && ((ze & 2) === 0 && (vu |= l), wt === 4 && ia(n, an)), tr(n, o), l === 1 && ze === 0 && (r.mode & 1) === 0 && (hu = tt() + 500, uu && ya()));
  }
  function tr(n, r) {
    var l = n.callbackNode;
    cf(n, r);
    var o = qi(n, n === Qt ? an : 0);
    if (o === 0) l !== null && _p(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && _p(l), r === 1) n.tag === 0 ? mi(hd.bind(null, n)) : Us(hd.bind(null, n)), ru(function() {
        (ze & 6) === 0 && ya();
      }), l = null;
      else {
        switch (pf(o)) {
          case 1:
            l = Wi;
            break;
          case 4:
            l = uf;
            break;
          case 16:
            l = Bu;
            break;
          case 536870912:
            l = of;
            break;
          default:
            l = Bu;
        }
        l = $v(l, mc.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function mc(n, r) {
    if (Ao = -1, Sn = 0, (ze & 6) !== 0) throw Error(N(327));
    var l = n.callbackNode;
    if (gu() && n.callbackNode !== l) return null;
    var o = qi(n, n === Qt ? an : 0);
    if (o === 0) return null;
    if ((o & 30) !== 0 || (o & n.expiredLanes) !== 0 || r) r = yc(n, o);
    else {
      r = o;
      var c = ze;
      ze |= 2;
      var d = Av();
      (Qt !== n || an !== r) && (yr = null, hu = tt() + 500, Ga(n, r));
      do
        try {
          Hv();
          break;
        } catch (g) {
          Uv(n, g);
        }
      while (!0);
      Qf(), wi.current = d, ze = c, Ft !== null ? r = 0 : (Qt = null, an = 0, r = wt);
    }
    if (r !== 0) {
      if (r === 2 && (c = ff(n), c !== 0 && (o = c, r = Ho(n, c))), r === 1) throw l = No, Ga(n, 0), ia(n, o), tr(n, tt()), l;
      if (r === 6) ia(n, o);
      else {
        if (c = n.current.alternate, (o & 30) === 0 && !ry(c) && (r = yc(n, o), r === 2 && (d = ff(n), d !== 0 && (o = d, r = Ho(n, d))), r === 1)) throw l = No, Ga(n, 0), ia(n, o), tr(n, tt()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(N(345));
          case 2:
            Dl(n, er, yr);
            break;
          case 3:
            if (ia(n, o), (o & 130023424) === o && (r = vd + 500 - tt(), 10 < r)) {
              if (qi(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                jt(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = Os(Dl.bind(null, n, er, yr), r);
              break;
            }
            Dl(n, er, yr);
            break;
          case 4:
            if (ia(n, o), (o & 4194240) === o) break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var h = 31 - kr(o);
              d = 1 << h, h = r[h], h > c && (c = h), o &= ~d;
            }
            if (o = c, o = tt() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * ny(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = Os(Dl.bind(null, n, er, yr), o);
              break;
            }
            Dl(n, er, yr);
            break;
          case 5:
            Dl(n, er, yr);
            break;
          default:
            throw Error(N(329));
        }
      }
    }
    return tr(n, tt()), n.callbackNode === l ? mc.bind(null, n) : null;
  }
  function Ho(n, r) {
    var l = zo;
    return n.current.memoizedState.isDehydrated && (Ga(n, r).flags |= 256), n = yc(n, r), n !== 2 && (r = er, er = l, r !== null && xl(r)), n;
  }
  function xl(n) {
    er === null ? er = n : er.push.apply(er, n);
  }
  function ry(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null)) for (var o = 0; o < l.length; o++) {
          var c = l[o], d = c.getSnapshot;
          c = c.value;
          try {
            if (!Jr(d(), c)) return !1;
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
  function ia(n, r) {
    for (r &= ~vc, r &= ~vu, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - kr(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function hd(n) {
    if ((ze & 6) !== 0) throw Error(N(327));
    gu();
    var r = qi(n, 0);
    if ((r & 1) === 0) return tr(n, tt()), null;
    var l = yc(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = ff(n);
      o !== 0 && (r = o, l = Ho(n, o));
    }
    if (l === 1) throw l = No, Ga(n, 0), ia(n, r), tr(n, tt()), l;
    if (l === 6) throw Error(N(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Dl(n, er, yr), tr(n, tt()), null;
  }
  function md(n, r) {
    var l = ze;
    ze |= 1;
    try {
      return n(r);
    } finally {
      ze = l, ze === 0 && (hu = tt() + 500, uu && ya());
    }
  }
  function wl(n) {
    Ia !== null && Ia.tag === 0 && (ze & 6) === 0 && gu();
    var r = ze;
    ze |= 1;
    var l = rn.transition, o = Ge;
    try {
      if (rn.transition = null, Ge = 1, n) return n();
    } finally {
      Ge = o, rn.transition = l, ze = r, (ze & 6) === 0 && ya();
    }
  }
  function yd() {
    mr = pu.current, rt(pu);
  }
  function Ga(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, Vf(l)), Ft !== null) for (l = Ft.return; l !== null; ) {
      var o = l;
      switch (Hs(o), o.tag) {
        case 1:
          o = o.type.childContextTypes, o != null && lu();
          break;
        case 3:
          pl(), rt(Yt), rt(Ct), oe();
          break;
        case 5:
          Bs(o);
          break;
        case 4:
          pl();
          break;
        case 13:
          rt(pt);
          break;
        case 19:
          rt(pt);
          break;
        case 10:
          If(o.type._context);
          break;
        case 22:
        case 23:
          yd();
      }
      l = l.return;
    }
    if (Qt = n, Ft = n = bi(n.current, null), an = mr = r, wt = 0, No = null, vc = vu = xa = 0, er = zo = null, fl !== null) {
      for (r = 0; r < fl.length; r++) if (l = fl[r], o = l.interleaved, o !== null) {
        l.interleaved = null;
        var c = o.next, d = l.pending;
        if (d !== null) {
          var h = d.next;
          d.next = c, o.next = h;
        }
        l.pending = o;
      }
      fl = null;
    }
    return n;
  }
  function Uv(n, r) {
    do {
      var l = Ft;
      try {
        if (Qf(), xe.current = Sl, Ys) {
          for (var o = Ve.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          Ys = !1;
        }
        if (Ke = 0, Wt = Ut = Ve = null, vo = !1, vl = 0, Tl.current = null, l === null || l.return === null) {
          wt = 1, No = r, Ft = null;
          break;
        }
        e: {
          var d = n, h = l.return, g = l, C = r;
          if (r = an, g.flags |= 32768, C !== null && typeof C == "object" && typeof C.then == "function") {
            var _ = C, H = g, j = H.tag;
            if ((H.mode & 1) === 0 && (j === 0 || j === 11 || j === 15)) {
              var A = H.alternate;
              A ? (H.updateQueue = A.updateQueue, H.memoizedState = A.memoizedState, H.lanes = A.lanes) : (H.updateQueue = null, H.memoizedState = null);
            }
            var G = Tv(h);
            if (G !== null) {
              G.flags &= -257, xi(G, h, g, d, r), G.mode & 1 && id(d, _, r), r = G, C = _;
              var Z = r.updateQueue;
              if (Z === null) {
                var te = /* @__PURE__ */ new Set();
                te.add(C), r.updateQueue = te;
              } else Z.add(C);
              break e;
            } else {
              if ((r & 1) === 0) {
                id(d, _, r), gd();
                break e;
              }
              C = Error(N(426));
            }
          } else if (st && g.mode & 1) {
            var Dt = Tv(h);
            if (Dt !== null) {
              (Dt.flags & 65536) === 0 && (Dt.flags |= 256), xi(Dt, h, g, d, r), Pa(Cl(C, g));
              break e;
            }
          }
          d = C = Cl(C, g), wt !== 4 && (wt = 2), zo === null ? zo = [d] : zo.push(d), d = h;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var x = Ev(d, C, r);
                mv(d, x);
                break e;
              case 1:
                g = C;
                var T = d.type, k = d.stateNode;
                if ((d.flags & 128) === 0 && (typeof T.getDerivedStateFromError == "function" || k !== null && typeof k.componentDidCatch == "function" && (Di === null || !Di.has(k)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var F = ad(d, g, r);
                  mv(d, F);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        jv(l);
      } catch (J) {
        r = J, Ft === l && l !== null && (Ft = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Av() {
    var n = wi.current;
    return wi.current = Sl, n === null ? Sl : n;
  }
  function gd() {
    (wt === 0 || wt === 3 || wt === 2) && (wt = 4), Qt === null || (xa & 268435455) === 0 && (vu & 268435455) === 0 || ia(Qt, an);
  }
  function yc(n, r) {
    var l = ze;
    ze |= 2;
    var o = Av();
    (Qt !== n || an !== r) && (yr = null, Ga(n, r));
    do
      try {
        ay();
        break;
      } catch (c) {
        Uv(n, c);
      }
    while (!0);
    if (Qf(), ze = l, wi.current = o, Ft !== null) throw Error(N(261));
    return Qt = null, an = 0, wt;
  }
  function ay() {
    for (; Ft !== null; ) Fv(Ft);
  }
  function Hv() {
    for (; Ft !== null && !Lp(); ) Fv(Ft);
  }
  function Fv(n) {
    var r = Yv(n.alternate, n, mr);
    n.memoizedProps = n.pendingProps, r === null ? jv(n) : Ft = r, Tl.current = null;
  }
  function jv(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, (r.flags & 32768) === 0) {
        if (l = _v(l, r, mr), l !== null) {
          Ft = l;
          return;
        }
      } else {
        if (l = fc(l, r), l !== null) {
          l.flags &= 32767, Ft = l;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          wt = 6, Ft = null;
          return;
        }
      }
      if (r = r.sibling, r !== null) {
        Ft = r;
        return;
      }
      Ft = r = n;
    } while (r !== null);
    wt === 0 && (wt = 5);
  }
  function Dl(n, r, l) {
    var o = Ge, c = rn.transition;
    try {
      rn.transition = null, Ge = 1, iy(n, r, l, o);
    } finally {
      rn.transition = c, Ge = o;
    }
    return null;
  }
  function iy(n, r, l, o) {
    do
      gu();
    while (Ia !== null);
    if ((ze & 6) !== 0) throw Error(N(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(N(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (zm(n, d), n === Qt && (Ft = Qt = null, an = 0), (l.subtreeFlags & 2064) === 0 && (l.flags & 2064) === 0 || hc || (hc = !0, $v(Bu, function() {
      return gu(), null;
    })), d = (l.flags & 15990) !== 0, (l.subtreeFlags & 15990) !== 0 || d) {
      d = rn.transition, rn.transition = null;
      var h = Ge;
      Ge = 1;
      var g = ze;
      ze |= 4, Tl.current = null, Mv(n, l), fd(l, n), Jl(ll), Ji = !!ro, ll = ro = null, n.current = l, ty(l), Lm(), ze = g, Ge = h, rn.transition = d;
    } else n.current = l;
    if (hc && (hc = !1, Ia = n, Uo = c), d = n.pendingLanes, d === 0 && (Di = null), Op(l.stateNode), tr(n, tt()), r !== null) for (o = n.onRecoverableError, l = 0; l < r.length; l++) c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (mu) throw mu = !1, n = Rl, Rl = null, n;
    return (Uo & 1) !== 0 && n.tag !== 0 && gu(), d = n.pendingLanes, (d & 1) !== 0 ? n === yu ? ki++ : (ki = 0, yu = n) : ki = 0, ya(), null;
  }
  function gu() {
    if (Ia !== null) {
      var n = pf(Uo), r = rn.transition, l = Ge;
      try {
        if (rn.transition = null, Ge = 16 > n ? 16 : n, Ia === null) var o = !1;
        else {
          if (n = Ia, Ia = null, Uo = 0, (ze & 6) !== 0) throw Error(N(331));
          var c = ze;
          for (ze |= 4, q = n.current; q !== null; ) {
            var d = q, h = d.child;
            if ((q.flags & 16) !== 0) {
              var g = d.deletions;
              if (g !== null) {
                for (var C = 0; C < g.length; C++) {
                  var _ = g[C];
                  for (q = _; q !== null; ) {
                    var H = q;
                    switch (H.tag) {
                      case 0:
                      case 11:
                      case 15:
                        _o(8, H, d);
                    }
                    var j = H.child;
                    if (j !== null) j.return = H, q = j;
                    else for (; q !== null; ) {
                      H = q;
                      var A = H.sibling, G = H.return;
                      if (pc(H), H === _) {
                        q = null;
                        break;
                      }
                      if (A !== null) {
                        A.return = G, q = A;
                        break;
                      }
                      q = G;
                    }
                  }
                }
                var Z = d.alternate;
                if (Z !== null) {
                  var te = Z.child;
                  if (te !== null) {
                    Z.child = null;
                    do {
                      var Dt = te.sibling;
                      te.sibling = null, te = Dt;
                    } while (te !== null);
                  }
                }
                q = d;
              }
            }
            if ((d.subtreeFlags & 2064) !== 0 && h !== null) h.return = d, q = h;
            else e: for (; q !== null; ) {
              if (d = q, (d.flags & 2048) !== 0) switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  _o(9, d, d.return);
              }
              var x = d.sibling;
              if (x !== null) {
                x.return = d.return, q = x;
                break e;
              }
              q = d.return;
            }
          }
          var T = n.current;
          for (q = T; q !== null; ) {
            h = q;
            var k = h.child;
            if ((h.subtreeFlags & 2064) !== 0 && k !== null) k.return = h, q = k;
            else e: for (h = T; q !== null; ) {
              if (g = q, (g.flags & 2048) !== 0) try {
                switch (g.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Lo(9, g);
                }
              } catch (J) {
                ct(g, g.return, J);
              }
              if (g === h) {
                q = null;
                break e;
              }
              var F = g.sibling;
              if (F !== null) {
                F.return = g.return, q = F;
                break e;
              }
              q = g.return;
            }
          }
          if (ze = c, ya(), Kr && typeof Kr.onPostCommitFiberRoot == "function") try {
            Kr.onPostCommitFiberRoot(Pu, n);
          } catch {
          }
          o = !0;
        }
        return o;
      } finally {
        Ge = l, rn.transition = r;
      }
    }
    return !1;
  }
  function Vv(n, r, l) {
    r = Cl(l, r), r = Ev(n, r, 1), n = Ei(n, r, 1), r = jt(), n !== null && (Ki(n, 1, r), tr(n, r));
  }
  function ct(n, r, l) {
    if (n.tag === 3) Vv(n, n, l);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        Vv(r, n, l);
        break;
      } else if (r.tag === 1) {
        var o = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Di === null || !Di.has(o))) {
          n = Cl(l, n), n = ad(r, n, 1), r = Ei(r, n, 1), n = jt(), r !== null && (Ki(r, 1, n), tr(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function ly(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = jt(), n.pingedLanes |= n.suspendedLanes & l, Qt === n && (an & l) === l && (wt === 4 || wt === 3 && (an & 130023424) === an && 500 > tt() - vd ? Ga(n, 0) : vc |= l), tr(n, r);
  }
  function Bv(n, r) {
    r === 0 && ((n.mode & 1) === 0 ? r = 1 : (r = Zr, Zr <<= 1, (Zr & 130023424) === 0 && (Zr = 4194304)));
    var l = jt();
    n = pr(n, r), n !== null && (Ki(n, r, l), tr(n, l));
  }
  function uy(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), Bv(n, l);
  }
  function Pv(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var o = n.stateNode, c = n.memoizedState;
        c !== null && (l = c.retryLane);
        break;
      case 19:
        o = n.stateNode;
        break;
      default:
        throw Error(N(314));
    }
    o !== null && o.delete(r), Bv(n, l);
  }
  var Yv;
  Yv = function(n, r, l) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || Yt.current) At = !0;
    else {
      if ((n.lanes & l) === 0 && (r.flags & 128) === 0) return At = !1, Do(n, r, l);
      At = (n.flags & 131072) !== 0;
    }
    else At = !1, st && (r.flags & 1048576) !== 0 && dv(r, Ba, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        Ar(n, r), n = r.pendingProps;
        var c = Or(r, Ct.current);
        dt(r, l), c = Ti(null, r, o, n, c, l);
        var d = na();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Nt(o) ? (d = !0, Wn(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, qf(r), c.updater = lc, r.stateNode = c, c._reactInternals = r, Eo(r, o, n, l), r = xo(null, r, o, !0, d, l)) : (r.tag = 0, st && d && As(r), nn(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (Ar(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = sy(o), n = ra(o, n), c) {
            case 0:
              r = Rv(null, r, o, n, l);
              break e;
            case 1:
              r = xv(null, r, o, n, l);
              break e;
            case 11:
              r = Zn(null, r, o, n, l);
              break e;
            case 14:
              r = El(null, r, o, ra(o.type, n), l);
              break e;
          }
          throw Error(N(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ra(o, c), Rv(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ra(o, c), xv(n, r, o, c, l);
      case 3:
        e: {
          if (fu(r), n === null) throw Error(N(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, hv(n, r), oo(r, o, null, l);
          var h = r.memoizedState;
          if (o = h.element, d.isDehydrated) if (d = { element: o, isDehydrated: !1, cache: h.cache, pendingSuspenseBoundaries: h.pendingSuspenseBoundaries, transitions: h.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
            c = Cl(Error(N(423)), r), r = wv(n, r, o, l, c);
            break e;
          } else if (o !== c) {
            c = Cl(Error(N(424)), r), r = wv(n, r, o, l, c);
            break e;
          } else for (qn = va(r.stateNode.containerInfo.firstChild), Xn = r, st = !0, zr = null, l = $(r, null, o, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Ci(), o === c) {
              r = Hr(n, r, l);
              break e;
            }
            nn(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return yv(r), n === null && Yf(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, h = c.children, Ms(o, c) ? h = null : d !== null && Ms(o, d) && (r.flags |= 32), ld(n, r), nn(n, r, h, l), r.child;
      case 6:
        return n === null && Yf(r), null;
      case 13:
        return cc(n, r, l);
      case 4:
        return Zf(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = Tt(r, null, o, l) : nn(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ra(o, c), Zn(n, r, o, c, l);
      case 7:
        return nn(n, r, r.pendingProps, l), r.child;
      case 8:
        return nn(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return nn(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, h = c.value, le(dr, o._currentValue), o._currentValue = h, d !== null) if (Jr(d.value, h)) {
            if (d.children === c.children && !Yt.current) {
              r = Hr(n, r, l);
              break e;
            }
          } else for (d = r.child, d !== null && (d.return = r); d !== null; ) {
            var g = d.dependencies;
            if (g !== null) {
              h = d.child;
              for (var C = g.firstContext; C !== null; ) {
                if (C.context === o) {
                  if (d.tag === 1) {
                    C = Ya(-1, l & -l), C.tag = 2;
                    var _ = d.updateQueue;
                    if (_ !== null) {
                      _ = _.shared;
                      var H = _.pending;
                      H === null ? C.next = C : (C.next = H.next, H.next = C), _.pending = C;
                    }
                  }
                  d.lanes |= l, C = d.alternate, C !== null && (C.lanes |= l), Gf(
                    d.return,
                    l,
                    r
                  ), g.lanes |= l;
                  break;
                }
                C = C.next;
              }
            } else if (d.tag === 10) h = d.type === r.type ? null : d.child;
            else if (d.tag === 18) {
              if (h = d.return, h === null) throw Error(N(341));
              h.lanes |= l, g = h.alternate, g !== null && (g.lanes |= l), Gf(h, l, r), h = d.sibling;
            } else h = d.child;
            if (h !== null) h.return = d;
            else for (h = d; h !== null; ) {
              if (h === r) {
                h = null;
                break;
              }
              if (d = h.sibling, d !== null) {
                d.return = h.return, h = d;
                break;
              }
              h = h.return;
            }
            d = h;
          }
          nn(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, dt(r, l), c = Ur(c), o = o(c), r.flags |= 1, nn(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = ra(o, r.pendingProps), c = ra(o.type, c), El(n, r, o, c, l);
      case 15:
        return Re(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ra(o, c), Ar(n, r), r.tag = 1, Nt(o) ? (n = !0, Wn(r)) : n = !1, dt(r, l), uc(r, o, c), Eo(r, o, c, l), xo(null, r, o, !0, n, l);
      case 19:
        return Ea(n, r, l);
      case 22:
        return Ro(n, r, l);
    }
    throw Error(N(156, r.tag));
  };
  function $v(n, r) {
    return bp(n, r);
  }
  function oy(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function jr(n, r, l, o) {
    return new oy(n, r, l, o);
  }
  function Sd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function sy(n) {
    if (typeof n == "function") return Sd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === lt) return 11;
      if (n === Tn) return 14;
    }
    return 2;
  }
  function bi(n, r) {
    var l = n.alternate;
    return l === null ? (l = jr(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function Fo(n, r, l, o, c, d) {
    var h = 2;
    if (o = n, typeof n == "function") Sd(n) && (h = 1);
    else if (typeof n == "string") h = 5;
    else e: switch (n) {
      case De:
        return Wa(l.children, c, d, r);
      case En:
        h = 8, c |= 8;
        break;
      case mt:
        return n = jr(12, l, r, c | 2), n.elementType = mt, n.lanes = d, n;
      case we:
        return n = jr(13, l, r, c), n.elementType = we, n.lanes = d, n;
      case vn:
        return n = jr(19, l, r, c), n.elementType = vn, n.lanes = d, n;
      case Na:
        return _i(l, c, d, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case Gt:
            h = 10;
            break e;
          case Bt:
            h = 9;
            break e;
          case lt:
            h = 11;
            break e;
          case Tn:
            h = 14;
            break e;
          case _t:
            h = 16, o = null;
            break e;
        }
        throw Error(N(130, n == null ? n : typeof n, ""));
    }
    return r = jr(h, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function Wa(n, r, l, o) {
    return n = jr(7, n, o, r), n.lanes = l, n;
  }
  function _i(n, r, l, o) {
    return n = jr(22, n, o, r), n.elementType = Na, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function Cd(n, r, l) {
    return n = jr(6, n, null, r), n.lanes = l, n;
  }
  function gc(n, r, l) {
    return r = jr(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Qv(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = df(0), this.expirationTimes = df(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = df(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function Sc(n, r, l, o, c, d, h, g, C) {
    return n = new Qv(n, r, l, g, C), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = jr(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, qf(d), n;
  }
  function cy(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: ft, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function Ed(n) {
    if (!n) return In;
    n = n._reactInternals;
    e: {
      if (qr(n) !== n || n.tag !== 1) throw Error(N(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Nt(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(N(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (Nt(l)) return lo(n, l, r);
    }
    return r;
  }
  function Iv(n, r, l, o, c, d, h, g, C) {
    return n = Sc(l, o, !0, n, c, d, h, g, C), n.context = Ed(null), l = n.current, o = jt(), c = wa(l), d = Ya(o, c), d.callback = r ?? null, Ei(l, d, c), n.current.lanes = c, Ki(n, c, o), tr(n, o), n;
  }
  function Cc(n, r, l, o) {
    var c = r.current, d = jt(), h = wa(c);
    return l = Ed(l), r.context === null ? r.context = l : r.pendingContext = l, r = Ya(d, h), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = Ei(c, r, h), n !== null && (bn(n, c, h, d), Vs(n, c, h)), h;
  }
  function Ec(n) {
    if (n = n.current, !n.child) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function Td(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function Tc(n, r) {
    Td(n, r), (n = n.alternate) && Td(n, r);
  }
  function Gv() {
    return null;
  }
  var kl = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function Rd(n) {
    this._internalRoot = n;
  }
  Rc.prototype.render = Rd.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(N(409));
    Cc(n, r, null, null);
  }, Rc.prototype.unmount = Rd.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      wl(function() {
        Cc(null, n, null, null);
      }), r[ja] = null;
    }
  };
  function Rc(n) {
    this._internalRoot = n;
  }
  Rc.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = Te();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < Jt.length && r !== 0 && r < Jt[l].priority; l++) ;
      Jt.splice(l, 0, n), l === 0 && gf(n);
    }
  };
  function xd(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function xc(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function Wv() {
  }
  function fy(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var _ = Ec(h);
          d.call(_);
        };
      }
      var h = Iv(r, o, n, 0, null, !1, !1, "", Wv);
      return n._reactRootContainer = h, n[ja] = h.current, tu(n.nodeType === 8 ? n.parentNode : n), wl(), h;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof o == "function") {
      var g = o;
      o = function() {
        var _ = Ec(C);
        g.call(_);
      };
    }
    var C = Sc(n, 0, !1, null, null, !1, !1, "", Wv);
    return n._reactRootContainer = C, n[ja] = C.current, tu(n.nodeType === 8 ? n.parentNode : n), wl(function() {
      Cc(r, C, l, o);
    }), C;
  }
  function jo(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var h = d;
      if (typeof c == "function") {
        var g = c;
        c = function() {
          var C = Ec(h);
          g.call(C);
        };
      }
      Cc(r, h, n, c);
    } else h = fy(l, r, n, c, o);
    return Ec(h);
  }
  We = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = Xi(r.pendingLanes);
          l !== 0 && (ss(r, l | 1), tr(r, tt()), (ze & 6) === 0 && (hu = tt() + 500, ya()));
        }
        break;
      case 13:
        wl(function() {
          var o = pr(n, 1);
          if (o !== null) {
            var c = jt();
            bn(o, n, 1, c);
          }
        }), Tc(n, 1);
    }
  }, vf = function(n) {
    if (n.tag === 13) {
      var r = pr(n, 134217728);
      if (r !== null) {
        var l = jt();
        bn(r, n, 134217728, l);
      }
      Tc(n, 134217728);
    }
  }, hf = function(n) {
    if (n.tag === 13) {
      var r = wa(n), l = pr(n, r);
      if (l !== null) {
        var o = jt();
        bn(l, n, r, o);
      }
      Tc(n, r);
    }
  }, Te = function() {
    return Ge;
  }, mf = function(n, r) {
    var l = Ge;
    try {
      return Ge = n, r();
    } finally {
      Ge = l;
    }
  }, Pt = function(n, r, l) {
    switch (r) {
      case "input":
        if (Vl(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; ) l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = Et(o);
              if (!c) throw Error(N(90));
              ca(o), Vl(o, c);
            }
          }
        }
        break;
      case "textarea":
        Bl(n, l);
        break;
      case "select":
        r = l.value, r != null && sr(n, !!l.multiple, r, !1);
    }
  }, tf = md, nf = wl;
  var dy = { usingClientEntryPoint: !1, Events: [ue, ea, Et, xp, wp, md] }, Vo = { findFiberByHostInstance: ul, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Xv = { bundleType: Vo.bundleType, version: Vo.version, rendererPackageName: Vo.rendererPackageName, rendererConfig: Vo.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: it.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = lf(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Vo.findFiberByHostInstance || Gv, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Li = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Li.isDisabled && Li.supportsFiber) try {
      Pu = Li.inject(Xv), Kr = Li;
    } catch {
    }
  }
  return Qr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = dy, Qr.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!xd(r)) throw Error(N(200));
    return cy(n, r, null, l);
  }, Qr.createRoot = function(n, r) {
    if (!xd(n)) throw Error(N(299));
    var l = !1, o = "", c = kl;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = Sc(n, 1, !1, null, null, l, !1, o, c), n[ja] = r.current, tu(n.nodeType === 8 ? n.parentNode : n), new Rd(r);
  }, Qr.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(N(188)) : (n = Object.keys(n).join(","), Error(N(268, n)));
    return n = lf(r), n = n === null ? null : n.stateNode, n;
  }, Qr.flushSync = function(n) {
    return wl(n);
  }, Qr.hydrate = function(n, r, l) {
    if (!xc(r)) throw Error(N(200));
    return jo(null, n, r, !0, l);
  }, Qr.hydrateRoot = function(n, r, l) {
    if (!xd(n)) throw Error(N(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", h = kl;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (h = l.onRecoverableError)), r = Iv(r, null, n, 1, l ?? null, c, !1, d, h), n[ja] = r.current, tu(n), o) for (n = 0; n < o.length; n++) l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
      l,
      c
    );
    return new Rc(r);
  }, Qr.render = function(n, r, l) {
    if (!xc(r)) throw Error(N(200));
    return jo(null, n, r, !1, l);
  }, Qr.unmountComponentAtNode = function(n) {
    if (!xc(n)) throw Error(N(40));
    return n._reactRootContainer ? (wl(function() {
      jo(null, null, n, !1, function() {
        n._reactRootContainer = null, n[ja] = null;
      });
    }), !0) : !1;
  }, Qr.unstable_batchedUpdates = md, Qr.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!xc(l)) throw Error(N(200));
    if (n == null || n._reactInternals === void 0) throw Error(N(38));
    return jo(n, r, l, !1, o);
  }, Qr.version = "18.3.1-next-f1338f8080-20240426", Qr;
}
var Ir = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var YT;
function Hk() {
  return YT || (YT = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var ae = QT, _e = IT(), N = ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ur = !1;
    function ht(e) {
      ur = e;
    }
    function bt(e) {
      if (!ur) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Fn("warn", e, a);
      }
    }
    function S(e) {
      if (!ur) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Fn("error", e, a);
      }
    }
    function Fn(e, t, a) {
      {
        var i = N.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var ge = 0, ce = 1, Zt = 2, ne = 3, Se = 4, ie = 5, He = 6, Xe = 7, at = 8, Rr = 9, Cn = 10, Le = 11, it = 12, Oe = 13, ft = 14, De = 15, En = 16, mt = 17, Gt = 18, Bt = 19, lt = 21, we = 22, vn = 23, Tn = 24, _t = 25, Na = !0, P = !1, ve = !1, K = !1, Ie = !1, qe = !0, Gr = !0, Rn = !0, Pi = !0, jn = /* @__PURE__ */ new Set(), Vn = {}, xr = {};
    function sa(e, t) {
      li(e, t), li(e + "Capture", t);
    }
    function li(e, t) {
      Vn[e] && S("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Vn[e] = t;
      {
        var a = e.toLowerCase();
        xr[a] = e, e === "onDoubleClick" && (xr.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        jn.add(t[i]);
    }
    var hn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", ca = Object.prototype.hasOwnProperty;
    function Bn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function or(e) {
      try {
        return wr(e), !1;
      } catch {
        return !0;
      }
    }
    function wr(e) {
      return "" + e;
    }
    function fa(e, t) {
      if (or(e))
        return S("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Bn(e)), wr(e);
    }
    function Vl(e) {
      if (or(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Bn(e)), wr(e);
    }
    function Hu(e, t) {
      if (or(e))
        return S("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Bn(e)), wr(e);
    }
    function Fu(e, t) {
      if (or(e))
        return S("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Bn(e)), wr(e);
    }
    function Yi(e) {
      if (or(e))
        return S("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Bn(e)), wr(e);
    }
    function sr(e) {
      if (or(e))
        return S("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Bn(e)), wr(e);
    }
    var Dr = 0, Wr = 1, Bl = 2, cr = 3, da = 4, $i = 5, Qi = 6, ju = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Y = ju + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", fe = new RegExp("^[" + ju + "][" + Y + "]*$"), ke = {}, et = {};
    function yt(e) {
      return ca.call(et, e) ? !0 : ca.call(ke, e) ? !1 : fe.test(e) ? (et[e] = !0, !0) : (ke[e] = !0, S("Invalid attribute name: `%s`", e), !1);
    }
    function Pn(e, t, a) {
      return t !== null ? t.type === Dr : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function Lt(e, t, a, i) {
      if (a !== null && a.type === Dr)
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
    function Yn(e, t, a, i) {
      if (t === null || typeof t > "u" || Lt(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case cr:
            return !t;
          case da:
            return t === !1;
          case $i:
            return isNaN(t);
          case Qi:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function Mt(e) {
      return Pt.hasOwnProperty(e) ? Pt[e] : null;
    }
    function gt(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === Bl || t === cr || t === da, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var Pt = {}, Pl = [
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
    Pl.forEach(function(e) {
      Pt[e] = new gt(
        e,
        Dr,
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
      Pt[t] = new gt(
        t,
        Wr,
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
      Pt[e] = new gt(
        e,
        Bl,
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
      Pt[e] = new gt(
        e,
        Bl,
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
      Pt[e] = new gt(
        e,
        cr,
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
      Pt[e] = new gt(
        e,
        cr,
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
      Pt[e] = new gt(
        e,
        da,
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
      Pt[e] = new gt(
        e,
        Qi,
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
      Pt[e] = new gt(
        e,
        $i,
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
    var ui = /[\-\:]([a-z])/g, is = function(e) {
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
      var t = e.replace(ui, is);
      Pt[t] = new gt(
        t,
        Wr,
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
      var t = e.replace(ui, is);
      Pt[t] = new gt(
        t,
        Wr,
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
      var t = e.replace(ui, is);
      Pt[t] = new gt(
        t,
        Wr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Pt[e] = new gt(
        e,
        Wr,
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
    var xp = "xlinkHref";
    Pt[xp] = new gt(
      "xlinkHref",
      Wr,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Pt[e] = new gt(
        e,
        Wr,
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
    var wp = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, tf = !1;
    function nf(e) {
      !tf && wp.test(e) && (tf = !0, S("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function rf(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        fa(a, t), i.sanitizeURL && nf("" + a);
        var s = i.attributeName, f = null;
        if (i.type === da) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : Yn(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (Yn(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === cr)
            return a;
          f = e.getAttribute(s);
        }
        return Yn(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function af(e, t, a, i) {
      {
        if (!yt(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return fa(a, t), u === "" + a ? a : u;
      }
    }
    function Ii(e, t, a, i) {
      var u = Mt(t);
      if (!Pn(t, u, i)) {
        if (Yn(t, a, u, i) && (a = null), i || u === null) {
          if (yt(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (fa(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = u.mustUseProperty;
        if (f) {
          var p = u.propertyName;
          if (a === null) {
            var v = u.type;
            e[p] = v === cr ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var m = u.attributeName, y = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(m);
        else {
          var R = u.type, E;
          R === cr || R === da && a === !0 ? E = "" : (fa(a, m), E = "" + a, u.sanitizeURL && nf(E.toString())), y ? e.setAttributeNS(y, m, E) : e.setAttribute(m, E);
        }
      }
    }
    var oi = Symbol.for("react.element"), Xr = Symbol.for("react.portal"), Yl = Symbol.for("react.fragment"), Gi = Symbol.for("react.strict_mode"), $l = Symbol.for("react.profiler"), Ql = Symbol.for("react.provider"), Vu = Symbol.for("react.context"), Il = Symbol.for("react.forward_ref"), ls = Symbol.for("react.suspense"), us = Symbol.for("react.suspense_list"), qr = Symbol.for("react.memo"), mn = Symbol.for("react.lazy"), Dp = Symbol.for("react.scope"), _m = Symbol.for("react.debug_trace_mode"), lf = Symbol.for("react.offscreen"), kp = Symbol.for("react.legacy_hidden"), bp = Symbol.for("react.cache"), _p = Symbol.for("react.tracing_marker"), Lp = Symbol.iterator, Lm = "@@iterator";
    function tt(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Lp && e[Lp] || e[Lm];
      return typeof t == "function" ? t : null;
    }
    var Me = Object.assign, Wi = 0, uf, Bu, Mp, of, Pu, Kr, Op;
    function kr() {
    }
    kr.__reactDisabledLog = !0;
    function Mm() {
      {
        if (Wi === 0) {
          uf = console.log, Bu = console.info, Mp = console.warn, of = console.error, Pu = console.group, Kr = console.groupCollapsed, Op = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: kr,
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
        Wi++;
      }
    }
    function Om() {
      {
        if (Wi--, Wi === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Me({}, e, {
              value: uf
            }),
            info: Me({}, e, {
              value: Bu
            }),
            warn: Me({}, e, {
              value: Mp
            }),
            error: Me({}, e, {
              value: of
            }),
            group: Me({}, e, {
              value: Pu
            }),
            groupCollapsed: Me({}, e, {
              value: Kr
            }),
            groupEnd: Me({}, e, {
              value: Op
            })
          });
        }
        Wi < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var sf = N.ReactCurrentDispatcher, Gl;
    function Zr(e, t, a) {
      {
        if (Gl === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            Gl = i && i[1] || "";
          }
        return `
` + Gl + e;
      }
    }
    var Xi = !1, qi;
    {
      var Nm = typeof WeakMap == "function" ? WeakMap : Map;
      qi = new Nm();
    }
    function cf(e, t) {
      if (!e || Xi)
        return "";
      {
        var a = qi.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      Xi = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = sf.current, sf.current = null, Mm();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (L) {
              i = L;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (L) {
              i = L;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (L) {
            i = L;
          }
          e();
        }
      } catch (L) {
        if (L && i && typeof L.stack == "string") {
          for (var p = L.stack.split(`
`), v = i.stack.split(`
`), m = p.length - 1, y = v.length - 1; m >= 1 && y >= 0 && p[m] !== v[y]; )
            y--;
          for (; m >= 1 && y >= 0; m--, y--)
            if (p[m] !== v[y]) {
              if (m !== 1 || y !== 1)
                do
                  if (m--, y--, y < 0 || p[m] !== v[y]) {
                    var R = `
` + p[m].replace(" at new ", " at ");
                    return e.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", e.displayName)), typeof e == "function" && qi.set(e, R), R;
                  }
                while (m >= 1 && y >= 0);
              break;
            }
        }
      } finally {
        Xi = !1, sf.current = s, Om(), Error.prepareStackTrace = u;
      }
      var E = e ? e.displayName || e.name : "", b = E ? Zr(E) : "";
      return typeof e == "function" && qi.set(e, b), b;
    }
    function ff(e, t, a) {
      return cf(e, !0);
    }
    function os(e, t, a) {
      return cf(e, !1);
    }
    function df(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Ki(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return cf(e, df(e));
      if (typeof e == "string")
        return Zr(e);
      switch (e) {
        case ls:
          return Zr("Suspense");
        case us:
          return Zr("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Il:
            return os(e.render);
          case qr:
            return Ki(e.type, t, a);
          case mn: {
            var i = e, u = i._payload, s = i._init;
            try {
              return Ki(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function zm(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case ie:
          return Zr(e.type);
        case En:
          return Zr("Lazy");
        case Oe:
          return Zr("Suspense");
        case Bt:
          return Zr("SuspenseList");
        case ge:
        case Zt:
        case De:
          return os(e.type);
        case Le:
          return os(e.type.render);
        case ce:
          return ff(e.type);
        default:
          return "";
      }
    }
    function ss(e) {
      try {
        var t = "", a = e;
        do
          t += zm(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Ge(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function pf(e) {
      return e.displayName || "Context";
    }
    function We(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Yl:
          return "Fragment";
        case Xr:
          return "Portal";
        case $l:
          return "Profiler";
        case Gi:
          return "StrictMode";
        case ls:
          return "Suspense";
        case us:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Vu:
            var t = e;
            return pf(t) + ".Consumer";
          case Ql:
            var a = e;
            return pf(a._context) + ".Provider";
          case Il:
            return Ge(e, e.render, "ForwardRef");
          case qr:
            var i = e.displayName || null;
            return i !== null ? i : We(e.type) || "Memo";
          case mn: {
            var u = e, s = u._payload, f = u._init;
            try {
              return We(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function vf(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function hf(e) {
      return e.displayName || "Context";
    }
    function Te(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case Tn:
          return "Cache";
        case Rr:
          var i = a;
          return hf(i) + ".Consumer";
        case Cn:
          var u = a;
          return hf(u._context) + ".Provider";
        case Gt:
          return "DehydratedFragment";
        case Le:
          return vf(a, a.render, "ForwardRef");
        case Xe:
          return "Fragment";
        case ie:
          return a;
        case Se:
          return "Portal";
        case ne:
          return "Root";
        case He:
          return "Text";
        case En:
          return We(a);
        case at:
          return a === Gi ? "StrictMode" : "Mode";
        case we:
          return "Offscreen";
        case it:
          return "Profiler";
        case lt:
          return "Scope";
        case Oe:
          return "Suspense";
        case Bt:
          return "SuspenseList";
        case _t:
          return "TracingMarker";
        // The display name for this tags come from the user-provided type:
        case ce:
        case ge:
        case mt:
        case Zt:
        case ft:
        case De:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var mf = N.ReactDebugCurrentFrame, xn = null, si = !1;
    function br() {
      {
        if (xn === null)
          return null;
        var e = xn._debugOwner;
        if (e !== null && typeof e < "u")
          return Te(e);
      }
      return null;
    }
    function ci() {
      return xn === null ? "" : ss(xn);
    }
    function St() {
      mf.getCurrentStack = null, xn = null, si = !1;
    }
    function ut(e) {
      mf.getCurrentStack = e === null ? null : ci, xn = e, si = !1;
    }
    function Yu() {
      return xn;
    }
    function Jt(e) {
      si = e;
    }
    function _r(e) {
      return "" + e;
    }
    function za(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return sr(e), e;
        default:
          return "";
      }
    }
    var $u = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function yf(e, t) {
      $u[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || S("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || S("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function gf(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Qu(e) {
      return e._valueTracker;
    }
    function Np(e) {
      e._valueTracker = null;
    }
    function Um(e) {
      var t = "";
      return e && (gf(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Iu(e) {
      var t = gf(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      sr(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            sr(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            sr(p), i = "" + p;
          },
          stopTracking: function() {
            Np(e), delete e[t];
          }
        };
        return f;
      }
    }
    function fi(e) {
      Qu(e) || (e._valueTracker = Iu(e));
    }
    function Zi(e) {
      if (!e)
        return !1;
      var t = Qu(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = Um(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function Ji(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var zp = !1, Up = !1, cs = !1, Gu = !1;
    function fs(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function ds(e, t) {
      var a = e, i = t.checked, u = Me({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function Ua(e, t) {
      yf("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !Up && (S("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", br() || "A component", t.type), Up = !0), t.value !== void 0 && t.defaultValue !== void 0 && !zp && (S("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", br() || "A component", t.type), zp = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: za(t.value != null ? t.value : i),
        controlled: fs(t)
      };
    }
    function ps(e, t) {
      var a = e, i = t.checked;
      i != null && Ii(a, "checked", i, !1);
    }
    function Wl(e, t) {
      var a = e;
      {
        var i = fs(t);
        !a._wrapperState.controlled && i && !Gu && (S("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Gu = !0), a._wrapperState.controlled && !i && !cs && (S("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), cs = !0);
      }
      ps(e, t);
      var u = za(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = _r(u)) : a.value !== _r(u) && (a.value = _r(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? ms(a, t.type, u) : t.hasOwnProperty("defaultValue") && ms(a, t.type, za(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function Sf(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = _r(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function vs(e, t) {
      var a = e;
      Wl(a, t), hs(a, t);
    }
    function hs(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        fa(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = ph(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            Zi(f), Wl(f, p);
          }
        }
      }
    }
    function ms(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Ji(e.ownerDocument) !== e) && (a == null ? e.defaultValue = _r(e._wrapperState.initialValue) : e.defaultValue !== _r(a) && (e.defaultValue = _r(a)));
    }
    var $n = !1, el = !1, ys = !1;
    function Xl(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? ae.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || el || (el = !0, S("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (ys || (ys = !0, S("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !$n && (S("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), $n = !0);
    }
    function Am(e, t) {
      t.value != null && e.setAttribute("value", _r(za(t.value)));
    }
    var Cf = Array.isArray;
    function en(e) {
      return Cf(e);
    }
    var tl;
    tl = !1;
    function Wu() {
      var e = br();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Ef = ["value", "defaultValue"];
    function Hm(e) {
      {
        yf("select", e);
        for (var t = 0; t < Ef.length; t++) {
          var a = Ef[t];
          if (e[a] != null) {
            var i = en(e[a]);
            e.multiple && !i ? S("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, Wu()) : !e.multiple && i && S("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, Wu());
          }
        }
      }
    }
    function ql(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var v = 0; v < u.length; v++) {
          var m = f.hasOwnProperty("$" + u[v].value);
          u[v].selected !== m && (u[v].selected = m), m && i && (u[v].defaultSelected = !0);
        }
      } else {
        for (var y = _r(za(a)), R = null, E = 0; E < u.length; E++) {
          if (u[E].value === y) {
            u[E].selected = !0, i && (u[E].defaultSelected = !0);
            return;
          }
          R === null && !u[E].disabled && (R = u[E]);
        }
        R !== null && (R.selected = !0);
      }
    }
    function Tf(e, t) {
      return Me({}, t, {
        value: void 0
      });
    }
    function gs(e, t) {
      var a = e;
      Hm(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !tl && (S("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), tl = !0);
    }
    function Fm(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? ql(a, !!t.multiple, i, !1) : t.defaultValue != null && ql(a, !!t.multiple, t.defaultValue, !0);
    }
    function jm(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? ql(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? ql(a, !!t.multiple, t.defaultValue, !0) : ql(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Vm(e, t) {
      var a = e, i = t.value;
      i != null && ql(a, !!t.multiple, i, !1);
    }
    var Ap = !1;
    function Rf(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = Me({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: _r(a._wrapperState.initialValue)
      });
      return i;
    }
    function xf(e, t) {
      var a = e;
      yf("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Ap && (S("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", br() || "A component"), Ap = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          S("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (en(u)) {
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
        initialValue: za(i)
      };
    }
    function Hp(e, t) {
      var a = e, i = za(t.value), u = za(t.defaultValue);
      if (i != null) {
        var s = _r(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = _r(u));
    }
    function Fp(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Bm(e, t) {
      Hp(e, t);
    }
    var Aa = "http://www.w3.org/1999/xhtml", wf = "http://www.w3.org/1998/Math/MathML", Df = "http://www.w3.org/2000/svg";
    function kf(e) {
      switch (e) {
        case "svg":
          return Df;
        case "math":
          return wf;
        default:
          return Aa;
      }
    }
    function bf(e, t) {
      return e == null || e === Aa ? kf(t) : e === Df && t === "foreignObject" ? Aa : e;
    }
    var jp = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, Ss, Vp = jp(function(e, t) {
      if (e.namespaceURI === Df && !("innerHTML" in e)) {
        Ss = Ss || document.createElement("div"), Ss.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = Ss.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Qn = 1, Ha = 3, Ot = 8, Fa = 9, _f = 11, Kl = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Ha) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Xu = {
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
    }, qu = {
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
    function Bp(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var Pp = ["Webkit", "ms", "Moz", "O"];
    Object.keys(qu).forEach(function(e) {
      Pp.forEach(function(t) {
        qu[Bp(t, e)] = qu[e];
      });
    });
    function Cs(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(qu.hasOwnProperty(e) && qu[e]) ? t + "px" : (Fu(t, e), ("" + t).trim());
    }
    var Yp = /([A-Z])/g, $p = /^ms-/;
    function Zl(e) {
      return e.replace(Yp, "-$1").toLowerCase().replace($p, "-ms-");
    }
    var Qp = function() {
    };
    {
      var Pm = /^(?:webkit|moz|o)[A-Z]/, Ym = /^-ms-/, Ip = /-(.)/g, Lf = /;\s*$/, pa = {}, nl = {}, Gp = !1, Ku = !1, $m = function(e) {
        return e.replace(Ip, function(t, a) {
          return a.toUpperCase();
        });
      }, Wp = function(e) {
        pa.hasOwnProperty(e) && pa[e] || (pa[e] = !0, S(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          $m(e.replace(Ym, "ms-"))
        ));
      }, Mf = function(e) {
        pa.hasOwnProperty(e) && pa[e] || (pa[e] = !0, S("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, Of = function(e, t) {
        nl.hasOwnProperty(t) && nl[t] || (nl[t] = !0, S(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Lf, "")));
      }, Xp = function(e, t) {
        Gp || (Gp = !0, S("`NaN` is an invalid value for the `%s` css style property.", e));
      }, qp = function(e, t) {
        Ku || (Ku = !0, S("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Qp = function(e, t) {
        e.indexOf("-") > -1 ? Wp(e) : Pm.test(e) ? Mf(e) : Lf.test(t) && Of(e, t), typeof t == "number" && (isNaN(t) ? Xp(e, t) : isFinite(t) || qp(e, t));
      };
    }
    var Kp = Qp;
    function Qm(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : Zl(i)) + ":", t += Cs(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function Zp(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || Kp(i, t[i]);
          var s = Cs(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function Im(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function Jp(e) {
      var t = {};
      for (var a in e)
        for (var i = Xu[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function Gm(e, t) {
      {
        if (!t)
          return;
        var a = Jp(e), i = Jp(t), u = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var v = f + "," + p;
            if (u[v])
              continue;
            u[v] = !0, S("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Im(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var Jr = {
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
    }, Zu = Me({
      menuitem: !0
    }, Jr), ev = "__html";
    function Es(e, t) {
      if (t) {
        if (Zu[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(ev in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && S("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function di(e, t) {
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
    var Ju = {
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
    }, Ts = {
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
    }, Jl = {}, Wm = new RegExp("^(aria)-[" + Y + "]*$"), eu = new RegExp("^(aria)[A-Z][" + Y + "]*$");
    function Nf(e, t) {
      {
        if (ca.call(Jl, t) && Jl[t])
          return !0;
        if (eu.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = Ts.hasOwnProperty(a) ? a : null;
          if (i == null)
            return S("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Jl[t] = !0, !0;
          if (t !== i)
            return S("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), Jl[t] = !0, !0;
        }
        if (Wm.test(t)) {
          var u = t.toLowerCase(), s = Ts.hasOwnProperty(u) ? u : null;
          if (s == null)
            return Jl[t] = !0, !1;
          if (t !== s)
            return S("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), Jl[t] = !0, !0;
        }
      }
      return !0;
    }
    function eo(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = Nf(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? S("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && S("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function zf(e, t) {
      di(e, t) || eo(e, t);
    }
    var Uf = !1;
    function Rs(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !Uf && (Uf = !0, e === "select" && t.multiple ? S("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : S("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var rl = function() {
    };
    {
      var tn = {}, Af = /^on./, xs = /^on[^A-Z]/, tv = new RegExp("^(aria)-[" + Y + "]*$"), nv = new RegExp("^(aria)[A-Z][" + Y + "]*$");
      rl = function(e, t, a, i) {
        if (ca.call(tn, t) && tn[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return S("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), tn[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(u) ? f[u] : null;
          if (p != null)
            return S("Invalid event handler property `%s`. Did you mean `%s`?", t, p), tn[t] = !0, !0;
          if (Af.test(t))
            return S("Unknown event handler property `%s`. It will be ignored.", t), tn[t] = !0, !0;
        } else if (Af.test(t))
          return xs.test(t) && S("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), tn[t] = !0, !0;
        if (tv.test(t) || nv.test(t))
          return !0;
        if (u === "innerhtml")
          return S("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), tn[t] = !0, !0;
        if (u === "aria")
          return S("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), tn[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return S("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), tn[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return S("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), tn[t] = !0, !0;
        var v = Mt(t), m = v !== null && v.type === Dr;
        if (Ju.hasOwnProperty(u)) {
          var y = Ju[u];
          if (y !== t)
            return S("Invalid DOM property `%s`. Did you mean `%s`?", t, y), tn[t] = !0, !0;
        } else if (!m && t !== u)
          return S("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), tn[t] = !0, !0;
        return typeof a == "boolean" && Lt(t, a, v, !1) ? (a ? S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), tn[t] = !0, !0) : m ? !0 : Lt(t, a, v, !1) ? (tn[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === cr && (S("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), tn[t] = !0), !0);
      };
    }
    var rv = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = rl(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? S("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && S("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function av(e, t, a) {
      di(e, t) || rv(e, t, a);
    }
    var Hf = 1, ws = 2, Lr = 4, Ff = Hf | ws | Lr, al = null;
    function Xm(e) {
      al !== null && S("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), al = e;
    }
    function qm() {
      al === null && S("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), al = null;
    }
    function to(e) {
      return e === al;
    }
    function jf(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Ha ? t.parentNode : t;
    }
    var Ds = null, il = null, $e = null;
    function ks(e) {
      var t = Eu(e);
      if (t) {
        if (typeof Ds != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = ph(a);
          Ds(t.stateNode, t.type, i);
        }
      }
    }
    function bs(e) {
      Ds = e;
    }
    function tu(e) {
      il ? $e ? $e.push(e) : $e = [e] : il = e;
    }
    function iv() {
      return il !== null || $e !== null;
    }
    function _s() {
      if (il) {
        var e = il, t = $e;
        if (il = null, $e = null, ks(e), t)
          for (var a = 0; a < t.length; a++)
            ks(t[a]);
      }
    }
    var nu = function(e, t) {
      return e(t);
    }, no = function() {
    }, pi = !1;
    function lv() {
      var e = iv();
      e && (no(), _s());
    }
    function uv(e, t, a) {
      if (pi)
        return e(t, a);
      pi = !0;
      try {
        return nu(e, t, a);
      } finally {
        pi = !1, lv();
      }
    }
    function Km(e, t, a) {
      nu = e, no = a;
    }
    function ov(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Ls(e, t, a) {
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
          return !!(a.disabled && ov(t));
        default:
          return !1;
      }
    }
    function vi(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = ph(a);
      if (i === null)
        return null;
      var u = i[t];
      if (Ls(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var ro = !1;
    if (hn)
      try {
        var ll = {};
        Object.defineProperty(ll, "passive", {
          get: function() {
            ro = !0;
          }
        }), window.addEventListener("test", ll, ll), window.removeEventListener("test", ll, ll);
      } catch {
        ro = !1;
      }
    function Ms(e, t, a, i, u, s, f, p, v) {
      var m = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, m);
      } catch (y) {
        this.onError(y);
      }
    }
    var Os = Ms;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Vf = document.createElement("react");
      Os = function(t, a, i, u, s, f, p, v, m) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var y = document.createEvent("Event"), R = !1, E = !0, b = window.event, L = Object.getOwnPropertyDescriptor(window, "event");
        function M() {
          Vf.removeEventListener(O, se, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = b);
        }
        var Q = Array.prototype.slice.call(arguments, 3);
        function se() {
          R = !0, M(), a.apply(i, Q), E = !1;
        }
        var re, Ae = !1, be = !1;
        function w(D) {
          if (re = D.error, Ae = !0, re === null && D.colno === 0 && D.lineno === 0 && (be = !0), D.defaultPrevented && re != null && typeof re == "object")
            try {
              re._suppressLogging = !0;
            } catch {
            }
        }
        var O = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", w), Vf.addEventListener(O, se, !1), y.initEvent(O, !1, !1), Vf.dispatchEvent(y), L && Object.defineProperty(window, "event", L), R && E && (Ae ? be && (re = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : re = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(re)), window.removeEventListener("error", w), !R)
          return M(), Ms.apply(this, arguments);
      };
    }
    var sv = Os, ru = !1, Ns = null, au = !1, va = null, cv = {
      onError: function(e) {
        ru = !0, Ns = e;
      }
    };
    function hi(e, t, a, i, u, s, f, p, v) {
      ru = !1, Ns = null, sv.apply(cv, arguments);
    }
    function ha(e, t, a, i, u, s, f, p, v) {
      if (hi.apply(this, arguments), ru) {
        var m = io();
        au || (au = !0, va = m);
      }
    }
    function ao() {
      if (au) {
        var e = va;
        throw au = !1, va = null, e;
      }
    }
    function ja() {
      return ru;
    }
    function io() {
      if (ru) {
        var e = Ns;
        return ru = !1, Ns = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function iu(e) {
      return e._reactInternals;
    }
    function Zm(e) {
      return e._reactInternals !== void 0;
    }
    function ul(e, t) {
      e._reactInternals = t;
    }
    var ue = (
      /*                      */
      0
    ), ea = (
      /*                */
      1
    ), Et = (
      /*                    */
      2
    ), Ne = (
      /*                       */
      4
    ), Mr = (
      /*                */
      16
    ), ta = (
      /*                 */
      32
    ), rt = (
      /*                     */
      64
    ), le = (
      /*                   */
      128
    ), In = (
      /*            */
      256
    ), Ct = (
      /*                          */
      512
    ), Yt = (
      /*                     */
      1024
    ), Gn = (
      /*                      */
      2048
    ), Or = (
      /*                    */
      4096
    ), Nt = (
      /*                   */
      8192
    ), lu = (
      /*             */
      16384
    ), fv = (
      /*               */
      32767
    ), lo = (
      /*                   */
      32768
    ), Wn = (
      /*                */
      65536
    ), zs = (
      /* */
      131072
    ), ma = (
      /*                       */
      1048576
    ), uu = (
      /*                    */
      2097152
    ), Va = (
      /*                 */
      4194304
    ), Us = (
      /*                */
      8388608
    ), mi = (
      /*               */
      16777216
    ), ya = (
      /*              */
      33554432
    ), yi = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Ne | Yt | 0
    ), gi = Et | Ne | Mr | ta | Ct | Or | Nt, Si = Ne | rt | Ct | Nt, Ba = Gn | Mr, zt = Va | Us | uu, Nr = N.ReactCurrentOwner;
    function fr(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (Et | Or)) !== ue && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === ne ? a : null;
    }
    function ga(e) {
      if (e.tag === Oe) {
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
    function Sa(e) {
      return e.tag === ne ? e.stateNode.containerInfo : null;
    }
    function ol(e) {
      return fr(e) === e;
    }
    function dv(e) {
      {
        var t = Nr.current;
        if (t !== null && t.tag === ce) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || S("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Te(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = iu(e);
      return u ? fr(u) === u : !1;
    }
    function As(e) {
      if (fr(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Hs(e) {
      var t = e.alternate;
      if (!t) {
        var a = fr(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, u = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var p = s.return;
          if (p !== null) {
            i = u = p;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var v = s.child; v; ) {
            if (v === i)
              return As(s), e;
            if (v === u)
              return As(s), t;
            v = v.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== u.return)
          i = s, u = f;
        else {
          for (var m = !1, y = s.child; y; ) {
            if (y === i) {
              m = !0, i = s, u = f;
              break;
            }
            if (y === u) {
              m = !0, u = s, i = f;
              break;
            }
            y = y.sibling;
          }
          if (!m) {
            for (y = f.child; y; ) {
              if (y === i) {
                m = !0, i = f, u = s;
                break;
              }
              if (y === u) {
                m = !0, u = f, i = s;
                break;
              }
              y = y.sibling;
            }
            if (!m)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== ne)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function Xn(e) {
      var t = Hs(e);
      return t !== null ? qn(t) : null;
    }
    function qn(e) {
      if (e.tag === ie || e.tag === He)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = qn(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function st(e) {
      var t = Hs(e);
      return t !== null ? zr(t) : null;
    }
    function zr(e) {
      if (e.tag === ie || e.tag === He)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== Se) {
          var a = zr(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var Bf = _e.unstable_scheduleCallback, pv = _e.unstable_cancelCallback, Pf = _e.unstable_shouldYield, Yf = _e.unstable_requestPaint, $t = _e.unstable_now, Fs = _e.unstable_getCurrentPriorityLevel, uo = _e.unstable_ImmediatePriority, Ci = _e.unstable_UserBlockingPriority, Pa = _e.unstable_NormalPriority, Jm = _e.unstable_LowPriority, sl = _e.unstable_IdlePriority, js = _e.unstable_yieldValue, vv = _e.unstable_setDisableYieldValue, cl = null, Tt = null, $ = null, dr = !1, Kn = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function ou(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return S("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Gr && (e = Me({}, e, {
          getLaneLabelMap: fl,
          injectProfilingHooks: Ur
        })), cl = t.inject(e), Tt = t;
      } catch (a) {
        S("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function $f(e, t) {
      if (Tt && typeof Tt.onScheduleFiberRoot == "function")
        try {
          Tt.onScheduleFiberRoot(cl, e, t);
        } catch (a) {
          dr || (dr = !0, S("React instrumentation encountered an error: %s", a));
        }
    }
    function Qf(e, t) {
      if (Tt && typeof Tt.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & le) === le;
          if (Rn) {
            var i;
            switch (t) {
              case wn:
                i = uo;
                break;
              case Ea:
                i = Ci;
                break;
              case Ar:
                i = Pa;
                break;
              case Hr:
                i = sl;
                break;
              default:
                i = Pa;
                break;
            }
            Tt.onCommitFiberRoot(cl, e, i, a);
          }
        } catch (u) {
          dr || (dr = !0, S("React instrumentation encountered an error: %s", u));
        }
    }
    function If(e) {
      if (Tt && typeof Tt.onPostCommitFiberRoot == "function")
        try {
          Tt.onPostCommitFiberRoot(cl, e);
        } catch (t) {
          dr || (dr = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Gf(e) {
      if (Tt && typeof Tt.onCommitFiberUnmount == "function")
        try {
          Tt.onCommitFiberUnmount(cl, e);
        } catch (t) {
          dr || (dr = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function dt(e) {
      if (typeof js == "function" && (vv(e), ht(e)), Tt && typeof Tt.setStrictMode == "function")
        try {
          Tt.setStrictMode(cl, e);
        } catch (t) {
          dr || (dr = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Ur(e) {
      $ = e;
    }
    function fl() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < vl; a++) {
          var i = gv(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Wf(e) {
      $ !== null && typeof $.markCommitStarted == "function" && $.markCommitStarted(e);
    }
    function Xf() {
      $ !== null && typeof $.markCommitStopped == "function" && $.markCommitStopped();
    }
    function pr(e) {
      $ !== null && typeof $.markComponentRenderStarted == "function" && $.markComponentRenderStarted(e);
    }
    function vr() {
      $ !== null && typeof $.markComponentRenderStopped == "function" && $.markComponentRenderStopped();
    }
    function qf(e) {
      $ !== null && typeof $.markComponentPassiveEffectMountStarted == "function" && $.markComponentPassiveEffectMountStarted(e);
    }
    function hv() {
      $ !== null && typeof $.markComponentPassiveEffectMountStopped == "function" && $.markComponentPassiveEffectMountStopped();
    }
    function Ya(e) {
      $ !== null && typeof $.markComponentPassiveEffectUnmountStarted == "function" && $.markComponentPassiveEffectUnmountStarted(e);
    }
    function Ei() {
      $ !== null && typeof $.markComponentPassiveEffectUnmountStopped == "function" && $.markComponentPassiveEffectUnmountStopped();
    }
    function Vs(e) {
      $ !== null && typeof $.markComponentLayoutEffectMountStarted == "function" && $.markComponentLayoutEffectMountStarted(e);
    }
    function mv() {
      $ !== null && typeof $.markComponentLayoutEffectMountStopped == "function" && $.markComponentLayoutEffectMountStopped();
    }
    function oo(e) {
      $ !== null && typeof $.markComponentLayoutEffectUnmountStarted == "function" && $.markComponentLayoutEffectUnmountStarted(e);
    }
    function Kf() {
      $ !== null && typeof $.markComponentLayoutEffectUnmountStopped == "function" && $.markComponentLayoutEffectUnmountStopped();
    }
    function so(e, t, a) {
      $ !== null && typeof $.markComponentErrored == "function" && $.markComponentErrored(e, t, a);
    }
    function Ca(e, t, a) {
      $ !== null && typeof $.markComponentSuspended == "function" && $.markComponentSuspended(e, t, a);
    }
    function co(e) {
      $ !== null && typeof $.markLayoutEffectsStarted == "function" && $.markLayoutEffectsStarted(e);
    }
    function fo() {
      $ !== null && typeof $.markLayoutEffectsStopped == "function" && $.markLayoutEffectsStopped();
    }
    function dl(e) {
      $ !== null && typeof $.markPassiveEffectsStarted == "function" && $.markPassiveEffectsStarted(e);
    }
    function Zf() {
      $ !== null && typeof $.markPassiveEffectsStopped == "function" && $.markPassiveEffectsStopped();
    }
    function pl(e) {
      $ !== null && typeof $.markRenderStarted == "function" && $.markRenderStarted(e);
    }
    function yv() {
      $ !== null && typeof $.markRenderYielded == "function" && $.markRenderYielded();
    }
    function Bs() {
      $ !== null && typeof $.markRenderStopped == "function" && $.markRenderStopped();
    }
    function pt(e) {
      $ !== null && typeof $.markRenderScheduled == "function" && $.markRenderScheduled(e);
    }
    function Ps(e, t) {
      $ !== null && typeof $.markForceUpdateScheduled == "function" && $.markForceUpdateScheduled(e, t);
    }
    function po(e, t) {
      $ !== null && typeof $.markStateUpdateScheduled == "function" && $.markStateUpdateScheduled(e, t);
    }
    var oe = (
      /*                         */
      0
    ), xe = (
      /*                 */
      1
    ), je = (
      /*                    */
      2
    ), Ke = (
      /*               */
      8
    ), Ve = (
      /*              */
      16
    ), Ut = Math.clz32 ? Math.clz32 : vo, Wt = Math.log, Ys = Math.LN2;
    function vo(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Wt(t) / Ys | 0) | 0;
    }
    var vl = 31, U = (
      /*                        */
      0
    ), Fe = (
      /*                          */
      0
    ), he = (
      /*                        */
      1
    ), Ti = (
      /*    */
      2
    ), na = (
      /*             */
      4
    ), yn = (
      /*            */
      8
    ), Rt = (
      /*                     */
      16
    ), $a = (
      /*                */
      32
    ), Ri = (
      /*                       */
      4194240
    ), hl = (
      /*                        */
      64
    ), $s = (
      /*                        */
      128
    ), Qs = (
      /*                        */
      256
    ), Is = (
      /*                        */
      512
    ), Gs = (
      /*                        */
      1024
    ), Ws = (
      /*                        */
      2048
    ), Xs = (
      /*                        */
      4096
    ), qs = (
      /*                        */
      8192
    ), Ks = (
      /*                        */
      16384
    ), ml = (
      /*                       */
      32768
    ), Zs = (
      /*                       */
      65536
    ), su = (
      /*                       */
      131072
    ), cu = (
      /*                       */
      262144
    ), Js = (
      /*                       */
      524288
    ), ho = (
      /*                       */
      1048576
    ), ec = (
      /*                       */
      2097152
    ), mo = (
      /*                            */
      130023424
    ), yl = (
      /*                             */
      4194304
    ), tc = (
      /*                             */
      8388608
    ), yo = (
      /*                             */
      16777216
    ), nc = (
      /*                             */
      33554432
    ), rc = (
      /*                             */
      67108864
    ), Jf = yl, go = (
      /*          */
      134217728
    ), ed = (
      /*                          */
      268435455
    ), So = (
      /*               */
      268435456
    ), gl = (
      /*                        */
      536870912
    ), hr = (
      /*                   */
      1073741824
    );
    function gv(e) {
      {
        if (e & he)
          return "Sync";
        if (e & Ti)
          return "InputContinuousHydration";
        if (e & na)
          return "InputContinuous";
        if (e & yn)
          return "DefaultHydration";
        if (e & Rt)
          return "Default";
        if (e & $a)
          return "TransitionHydration";
        if (e & Ri)
          return "Transition";
        if (e & mo)
          return "Retry";
        if (e & go)
          return "SelectiveHydration";
        if (e & So)
          return "IdleHydration";
        if (e & gl)
          return "Idle";
        if (e & hr)
          return "Offscreen";
      }
    }
    var nt = -1, Sl = hl, ac = yl;
    function Co(e) {
      switch (xi(e)) {
        case he:
          return he;
        case Ti:
          return Ti;
        case na:
          return na;
        case yn:
          return yn;
        case Rt:
          return Rt;
        case $a:
          return $a;
        case hl:
        case $s:
        case Qs:
        case Is:
        case Gs:
        case Ws:
        case Xs:
        case qs:
        case Ks:
        case ml:
        case Zs:
        case su:
        case cu:
        case Js:
        case ho:
        case ec:
          return e & Ri;
        case yl:
        case tc:
        case yo:
        case nc:
        case rc:
          return e & mo;
        case go:
          return go;
        case So:
          return So;
        case gl:
          return gl;
        case hr:
          return hr;
        default:
          return S("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function ic(e, t) {
      var a = e.pendingLanes;
      if (a === U)
        return U;
      var i = U, u = e.suspendedLanes, s = e.pingedLanes, f = a & ed;
      if (f !== U) {
        var p = f & ~u;
        if (p !== U)
          i = Co(p);
        else {
          var v = f & s;
          v !== U && (i = Co(v));
        }
      } else {
        var m = a & ~u;
        m !== U ? i = Co(m) : s !== U && (i = Co(s));
      }
      if (i === U)
        return U;
      if (t !== U && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === U) {
        var y = xi(i), R = xi(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          y >= R || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          y === Rt && (R & Ri) !== U
        )
          return t;
      }
      (i & na) !== U && (i |= a & Rt);
      var E = e.entangledLanes;
      if (E !== U)
        for (var b = e.entanglements, L = i & E; L > 0; ) {
          var M = At(L), Q = 1 << M;
          i |= b[M], L &= ~Q;
        }
      return i;
    }
    function ra(e, t) {
      for (var a = e.eventTimes, i = nt; t > 0; ) {
        var u = At(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function td(e, t) {
      switch (e) {
        case he:
        case Ti:
        case na:
          return t + 250;
        case yn:
        case Rt:
        case $a:
        case hl:
        case $s:
        case Qs:
        case Is:
        case Gs:
        case Ws:
        case Xs:
        case qs:
        case Ks:
        case ml:
        case Zs:
        case su:
        case cu:
        case Js:
        case ho:
        case ec:
          return t + 5e3;
        case yl:
        case tc:
        case yo:
        case nc:
        case rc:
          return nt;
        case go:
        case So:
        case gl:
        case hr:
          return nt;
        default:
          return S("Should have found matching lanes. This is a bug in React."), nt;
      }
    }
    function lc(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = At(f), v = 1 << p, m = s[p];
        m === nt ? ((v & i) === U || (v & u) !== U) && (s[p] = td(v, t)) : m <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function Sv(e) {
      return Co(e.pendingLanes);
    }
    function uc(e) {
      var t = e.pendingLanes & -1073741825;
      return t !== U ? t : t & hr ? hr : U;
    }
    function Cv(e) {
      return (e & he) !== U;
    }
    function Eo(e) {
      return (e & ed) !== U;
    }
    function Cl(e) {
      return (e & mo) === e;
    }
    function nd(e) {
      var t = he | na | Rt;
      return (e & t) === U;
    }
    function rd(e) {
      return (e & Ri) === e;
    }
    function oc(e, t) {
      var a = Ti | na | yn | Rt;
      return (t & a) !== U;
    }
    function Ev(e, t) {
      return (t & e.expiredLanes) !== U;
    }
    function ad(e) {
      return (e & Ri) !== U;
    }
    function id() {
      var e = Sl;
      return Sl <<= 1, (Sl & Ri) === U && (Sl = hl), e;
    }
    function Tv() {
      var e = ac;
      return ac <<= 1, (ac & mo) === U && (ac = yl), e;
    }
    function xi(e) {
      return e & -e;
    }
    function To(e) {
      return xi(e);
    }
    function At(e) {
      return 31 - Ut(e);
    }
    function nn(e) {
      return At(e);
    }
    function Zn(e, t) {
      return (e & t) !== U;
    }
    function El(e, t) {
      return (e & t) === t;
    }
    function Re(e, t) {
      return e | t;
    }
    function Ro(e, t) {
      return e & ~t;
    }
    function ld(e, t) {
      return e & t;
    }
    function Rv(e) {
      return e;
    }
    function xv(e, t) {
      return e !== Fe && e < t ? e : t;
    }
    function xo(e) {
      for (var t = [], a = 0; a < vl; a++)
        t.push(e);
      return t;
    }
    function fu(e, t, a) {
      e.pendingLanes |= t, t !== gl && (e.suspendedLanes = U, e.pingedLanes = U);
      var i = e.eventTimes, u = nn(t);
      i[u] = a;
    }
    function wv(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = At(i), s = 1 << u;
        a[u] = nt, i &= ~s;
      }
    }
    function sc(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function ud(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = U, e.pingedLanes = U, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = At(f), v = 1 << p;
        i[p] = U, u[p] = nt, s[p] = nt, f &= ~v;
      }
    }
    function cc(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = At(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function od(e, t) {
      var a = xi(t), i;
      switch (a) {
        case na:
          i = Ti;
          break;
        case Rt:
          i = yn;
          break;
        case hl:
        case $s:
        case Qs:
        case Is:
        case Gs:
        case Ws:
        case Xs:
        case qs:
        case Ks:
        case ml:
        case Zs:
        case su:
        case cu:
        case Js:
        case ho:
        case ec:
        case yl:
        case tc:
        case yo:
        case nc:
        case rc:
          i = $a;
          break;
        case gl:
          i = So;
          break;
        default:
          i = Fe;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Fe ? Fe : i;
    }
    function wo(e, t, a) {
      if (Kn)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = nn(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function Dv(e, t) {
      if (Kn)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = nn(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function sd(e, t) {
      return null;
    }
    var wn = he, Ea = na, Ar = Rt, Hr = gl, Do = Fe;
    function Fr() {
      return Do;
    }
    function Ht(e) {
      Do = e;
    }
    function kv(e, t) {
      var a = Do;
      try {
        return Do = e, t();
      } finally {
        Do = a;
      }
    }
    function bv(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function ko(e, t) {
      return e > t ? e : t;
    }
    function Xt(e, t) {
      return e !== 0 && e < t;
    }
    function _v(e) {
      var t = xi(e);
      return Xt(wn, t) ? Xt(Ea, t) ? Eo(t) ? Ar : Hr : Ea : wn;
    }
    function fc(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var bo;
    function gn(e) {
      bo = e;
    }
    function ey(e) {
      bo(e);
    }
    var q;
    function du(e) {
      q = e;
    }
    var dc;
    function Lv(e) {
      dc = e;
    }
    var Mv;
    function _o(e) {
      Mv = e;
    }
    var Lo;
    function cd(e) {
      Lo = e;
    }
    var pc = !1, Mo = [], Qa = null, Ta = null, Ra = null, xt = /* @__PURE__ */ new Map(), Dn = /* @__PURE__ */ new Map(), kn = [], Ov = [
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
    function Nv(e) {
      return Ov.indexOf(e) > -1;
    }
    function aa(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function fd(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Qa = null;
          break;
        case "dragenter":
        case "dragleave":
          Ta = null;
          break;
        case "mouseover":
        case "mouseout":
          Ra = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          xt.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          Dn.delete(i);
          break;
        }
      }
    }
    function Jn(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = aa(t, a, i, u, s);
        if (t !== null) {
          var p = Eu(t);
          p !== null && q(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return u !== null && v.indexOf(u) === -1 && v.push(u), e;
    }
    function ty(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return Qa = Jn(Qa, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return Ta = Jn(Ta, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return Ra = Jn(Ra, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, m = v.pointerId;
          return xt.set(m, Jn(xt.get(m) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var y = u, R = y.pointerId;
          return Dn.set(R, Jn(Dn.get(R) || null, e, t, a, i, y)), !0;
        }
      }
      return !1;
    }
    function dd(e) {
      var t = Yo(e.target);
      if (t !== null) {
        var a = fr(t);
        if (a !== null) {
          var i = a.tag;
          if (i === Oe) {
            var u = ga(a);
            if (u !== null) {
              e.blockedOn = u, Lo(e.priority, function() {
                dc(a);
              });
              return;
            }
          } else if (i === ne) {
            var s = a.stateNode;
            if (fc(s)) {
              e.blockedOn = Sa(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function zv(e) {
      for (var t = Mv(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < kn.length && Xt(t, kn[i].priority); i++)
        ;
      kn.splice(i, 0, a), i === 0 && dd(a);
    }
    function Oo(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = vu(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          Xm(s), u.target.dispatchEvent(s), qm();
        } else {
          var f = Eu(i);
          return f !== null && q(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function pd(e, t, a) {
      Oo(e) && a.delete(t);
    }
    function ny() {
      pc = !1, Qa !== null && Oo(Qa) && (Qa = null), Ta !== null && Oo(Ta) && (Ta = null), Ra !== null && Oo(Ra) && (Ra = null), xt.forEach(pd), Dn.forEach(pd);
    }
    function wi(e, t) {
      e.blockedOn === t && (e.blockedOn = null, pc || (pc = !0, _e.unstable_scheduleCallback(_e.unstable_NormalPriority, ny)));
    }
    function Tl(e) {
      if (Mo.length > 0) {
        wi(Mo[0], e);
        for (var t = 1; t < Mo.length; t++) {
          var a = Mo[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Qa !== null && wi(Qa, e), Ta !== null && wi(Ta, e), Ra !== null && wi(Ra, e);
      var i = function(p) {
        return wi(p, e);
      };
      xt.forEach(i), Dn.forEach(i);
      for (var u = 0; u < kn.length; u++) {
        var s = kn[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; kn.length > 0; ) {
        var f = kn[0];
        if (f.blockedOn !== null)
          break;
        dd(f), f.blockedOn === null && kn.shift();
      }
    }
    var rn = N.ReactCurrentBatchConfig, ze = !0;
    function Qt(e) {
      ze = !!e;
    }
    function Ft() {
      return ze;
    }
    function an(e, t, a) {
      var i = vc(t), u;
      switch (i) {
        case wn:
          u = mr;
          break;
        case Ea:
          u = pu;
          break;
        case Ar:
        default:
          u = wt;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function mr(e, t, a, i) {
      var u = Fr(), s = rn.transition;
      rn.transition = null;
      try {
        Ht(wn), wt(e, t, a, i);
      } finally {
        Ht(u), rn.transition = s;
      }
    }
    function pu(e, t, a, i) {
      var u = Fr(), s = rn.transition;
      rn.transition = null;
      try {
        Ht(Ea), wt(e, t, a, i);
      } finally {
        Ht(u), rn.transition = s;
      }
    }
    function wt(e, t, a, i) {
      ze && No(e, t, a, i);
    }
    function No(e, t, a, i) {
      var u = vu(e, t, a, i);
      if (u === null) {
        Sy(e, t, i, xa, a), fd(e, i);
        return;
      }
      if (ty(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (fd(e, i), t & Lr && Nv(e)) {
        for (; u !== null; ) {
          var s = Eu(u);
          s !== null && ey(s);
          var f = vu(e, t, a, i);
          if (f === null && Sy(e, t, i, xa, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      Sy(e, t, i, null, a);
    }
    var xa = null;
    function vu(e, t, a, i) {
      xa = null;
      var u = jf(i), s = Yo(u);
      if (s !== null) {
        var f = fr(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === Oe) {
            var v = ga(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === ne) {
            var m = f.stateNode;
            if (fc(m))
              return Sa(f);
            s = null;
          } else f !== s && (s = null);
        }
      }
      return xa = s, null;
    }
    function vc(e) {
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
          return wn;
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
          return Ea;
        case "message": {
          var t = Fs();
          switch (t) {
            case uo:
              return wn;
            case Ci:
              return Ea;
            case Pa:
            case Jm:
              return Ar;
            case sl:
              return Hr;
            default:
              return Ar;
          }
        }
        default:
          return Ar;
      }
    }
    function zo(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function er(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function vd(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function hu(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var yr = null, mu = null, Rl = null;
    function Di(e) {
      return yr = e, mu = Uo(), !0;
    }
    function hc() {
      yr = null, mu = null, Rl = null;
    }
    function Ia() {
      if (Rl)
        return Rl;
      var e, t = mu, a = t.length, i, u = Uo(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return Rl = u.slice(e, p), Rl;
    }
    function Uo() {
      return "value" in yr ? yr.value : yr.textContent;
    }
    function ki(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function yu() {
      return !0;
    }
    function Ao() {
      return !1;
    }
    function Sn(e) {
      function t(a, i, u, s, f) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var m = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return m ? this.isDefaultPrevented = yu : this.isDefaultPrevented = Ao, this.isPropagationStopped = Ao, this;
      }
      return Me(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = yu);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = yu);
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
        isPersistent: yu
      }), t;
    }
    var jt = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, wa = Sn(jt), bn = Me({}, jt, {
      view: 0,
      detail: 0
    }), tr = Sn(bn), mc, Ho, xl;
    function ry(e) {
      e !== xl && (xl && e.type === "mousemove" ? (mc = e.screenX - xl.screenX, Ho = e.screenY - xl.screenY) : (mc = 0, Ho = 0), xl = e);
    }
    var ia = Me({}, bn, {
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
      getModifierState: ct,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (ry(e), mc);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Ho;
      }
    }), hd = Sn(ia), md = Me({}, ia, {
      dataTransfer: 0
    }), wl = Sn(md), yd = Me({}, bn, {
      relatedTarget: 0
    }), Ga = Sn(yd), Uv = Me({}, jt, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Av = Sn(Uv), gd = Me({}, jt, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), yc = Sn(gd), ay = Me({}, jt, {
      data: 0
    }), Hv = Sn(ay), Fv = Hv, jv = {
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
    }, Dl = {
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
    function iy(e) {
      if (e.key) {
        var t = jv[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = ki(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Dl[e.keyCode] || "Unidentified" : "";
    }
    var gu = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function Vv(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = gu[e];
      return i ? !!a[i] : !1;
    }
    function ct(e) {
      return Vv;
    }
    var ly = Me({}, bn, {
      key: iy,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: ct,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? ki(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? ki(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), Bv = Sn(ly), uy = Me({}, ia, {
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
    }), Pv = Sn(uy), Yv = Me({}, bn, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ct
    }), $v = Sn(Yv), oy = Me({}, jt, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), jr = Sn(oy), Sd = Me({}, ia, {
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
    }), sy = Sn(Sd), bi = [9, 13, 27, 32], Fo = 229, Wa = hn && "CompositionEvent" in window, _i = null;
    hn && "documentMode" in document && (_i = document.documentMode);
    var Cd = hn && "TextEvent" in window && !_i, gc = hn && (!Wa || _i && _i > 8 && _i <= 11), Qv = 32, Sc = String.fromCharCode(Qv);
    function cy() {
      sa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), sa("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), sa("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), sa("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Ed = !1;
    function Iv(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function Cc(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function Ec(e, t) {
      return e === "keydown" && t.keyCode === Fo;
    }
    function Td(e, t) {
      switch (e) {
        case "keyup":
          return bi.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Fo;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Tc(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function Gv(e) {
      return e.locale === "ko";
    }
    var kl = !1;
    function Rd(e, t, a, i, u) {
      var s, f;
      if (Wa ? s = Cc(t) : kl ? Td(t, i) && (s = "onCompositionEnd") : Ec(t, i) && (s = "onCompositionStart"), !s)
        return null;
      gc && !Gv(i) && (!kl && s === "onCompositionStart" ? kl = Di(u) : s === "onCompositionEnd" && kl && (f = Ia()));
      var p = eh(a, s);
      if (p.length > 0) {
        var v = new Hv(s, t, null, i, u);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var m = Tc(i);
          m !== null && (v.data = m);
        }
      }
    }
    function Rc(e, t) {
      switch (e) {
        case "compositionend":
          return Tc(t);
        case "keypress":
          var a = t.which;
          return a !== Qv ? null : (Ed = !0, Sc);
        case "textInput":
          var i = t.data;
          return i === Sc && Ed ? null : i;
        default:
          return null;
      }
    }
    function xd(e, t) {
      if (kl) {
        if (e === "compositionend" || !Wa && Td(e, t)) {
          var a = Ia();
          return hc(), kl = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!Iv(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return gc && !Gv(t) ? null : t.data;
        default:
          return null;
      }
    }
    function xc(e, t, a, i, u) {
      var s;
      if (Cd ? s = Rc(t, i) : s = xd(t, i), !s)
        return null;
      var f = eh(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new Fv("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function Wv(e, t, a, i, u, s, f) {
      Rd(e, t, a, i, u), xc(e, t, a, i, u);
    }
    var fy = {
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
    function jo(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!fy[e.type] : t === "textarea";
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
    function dy(e) {
      if (!hn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function Vo() {
      sa("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function Xv(e, t, a, i) {
      tu(i);
      var u = eh(t, "onChange");
      if (u.length > 0) {
        var s = new wa("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: u
        });
      }
    }
    var Li = null, n = null;
    function r(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function l(e) {
      var t = [];
      Xv(t, n, e, jf(e)), uv(o, t);
    }
    function o(e) {
      m0(e, 0);
    }
    function c(e) {
      var t = Lc(e);
      if (Zi(t))
        return e;
    }
    function d(e, t) {
      if (e === "change")
        return t;
    }
    var h = !1;
    hn && (h = dy("input") && (!document.documentMode || document.documentMode > 9));
    function g(e, t) {
      Li = e, n = t, Li.attachEvent("onpropertychange", _);
    }
    function C() {
      Li && (Li.detachEvent("onpropertychange", _), Li = null, n = null);
    }
    function _(e) {
      e.propertyName === "value" && c(n) && l(e);
    }
    function H(e, t, a) {
      e === "focusin" ? (C(), g(t, a)) : e === "focusout" && C();
    }
    function j(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return c(n);
    }
    function A(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function G(e, t) {
      if (e === "click")
        return c(t);
    }
    function Z(e, t) {
      if (e === "input" || e === "change")
        return c(t);
    }
    function te(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || ms(e, "number", e.value);
    }
    function Dt(e, t, a, i, u, s, f) {
      var p = a ? Lc(a) : window, v, m;
      if (r(p) ? v = d : jo(p) ? h ? v = Z : (v = j, m = H) : A(p) && (v = G), v) {
        var y = v(t, a);
        if (y) {
          Xv(e, y, i, u);
          return;
        }
      }
      m && m(t, p, a), t === "focusout" && te(p);
    }
    function x() {
      li("onMouseEnter", ["mouseout", "mouseover"]), li("onMouseLeave", ["mouseout", "mouseover"]), li("onPointerEnter", ["pointerout", "pointerover"]), li("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function T(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !to(i)) {
        var m = i.relatedTarget || i.fromElement;
        if (m && (Yo(m) || Fd(m)))
          return;
      }
      if (!(!v && !p)) {
        var y;
        if (u.window === u)
          y = u;
        else {
          var R = u.ownerDocument;
          R ? y = R.defaultView || R.parentWindow : y = window;
        }
        var E, b;
        if (v) {
          var L = i.relatedTarget || i.toElement;
          if (E = a, b = L ? Yo(L) : null, b !== null) {
            var M = fr(b);
            (b !== M || b.tag !== ie && b.tag !== He) && (b = null);
          }
        } else
          E = null, b = a;
        if (E !== b) {
          var Q = hd, se = "onMouseLeave", re = "onMouseEnter", Ae = "mouse";
          (t === "pointerout" || t === "pointerover") && (Q = Pv, se = "onPointerLeave", re = "onPointerEnter", Ae = "pointer");
          var be = E == null ? y : Lc(E), w = b == null ? y : Lc(b), O = new Q(se, Ae + "leave", E, i, u);
          O.target = be, O.relatedTarget = w;
          var D = null, V = Yo(u);
          if (V === a) {
            var X = new Q(re, Ae + "enter", b, i, u);
            X.target = w, X.relatedTarget = be, D = X;
          }
          f1(e, O, D, E, b);
        }
      }
    }
    function k(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var F = typeof Object.is == "function" ? Object.is : k;
    function J(e, t) {
      if (F(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!ca.call(t, s) || !F(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function de(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function pe(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function ye(e, t) {
      for (var a = de(e), i = 0, u = 0; a; ) {
        if (a.nodeType === Ha) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = de(pe(a));
      }
    }
    function qt(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return Be(e, u, s, f, p);
    }
    function Be(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, v = 0, m = 0, y = e, R = null;
      e: for (; ; ) {
        for (var E = null; y === t && (a === 0 || y.nodeType === Ha) && (f = s + a), y === i && (u === 0 || y.nodeType === Ha) && (p = s + u), y.nodeType === Ha && (s += y.nodeValue.length), (E = y.firstChild) !== null; )
          R = y, y = E;
        for (; ; ) {
          if (y === e)
            break e;
          if (R === t && ++v === a && (f = s), R === i && ++m === u && (p = s), (E = y.nextSibling) !== null)
            break;
          y = R, R = y.parentNode;
        }
        y = E;
      }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function Mi(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var m = ye(e, f), y = ye(e, p);
        if (m && y) {
          if (u.rangeCount === 1 && u.anchorNode === m.node && u.anchorOffset === m.offset && u.focusNode === y.node && u.focusOffset === y.offset)
            return;
          var R = a.createRange();
          R.setStart(m.node, m.offset), u.removeAllRanges(), f > p ? (u.addRange(R), u.extend(y.node, y.offset)) : (R.setEnd(y.node, y.offset), u.addRange(R));
        }
      }
    }
    function qv(e) {
      return e && e.nodeType === Ha;
    }
    function i0(e, t) {
      return !e || !t ? !1 : e === t ? !0 : qv(e) ? !1 : qv(t) ? i0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function GT(e) {
      return e && e.ownerDocument && i0(e.ownerDocument.documentElement, e);
    }
    function WT(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function l0() {
      for (var e = window, t = Ji(); t instanceof e.HTMLIFrameElement; ) {
        if (WT(t))
          e = t.contentWindow;
        else
          return t;
        t = Ji(e.document);
      }
      return t;
    }
    function py(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function XT() {
      var e = l0();
      return {
        focusedElem: e,
        selectionRange: py(e) ? KT(e) : null
      };
    }
    function qT(e) {
      var t = l0(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && GT(a)) {
        i !== null && py(a) && ZT(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === Qn && u.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < u.length; f++) {
          var p = u[f];
          p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
        }
      }
    }
    function KT(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = qt(e), t || {
        start: 0,
        end: 0
      };
    }
    function ZT(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : Mi(e, t);
    }
    var JT = hn && "documentMode" in document && document.documentMode <= 11;
    function e1() {
      sa("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var wc = null, vy = null, wd = null, hy = !1;
    function t1(e) {
      if ("selectionStart" in e && py(e))
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
    function n1(e) {
      return e.window === e ? e.document : e.nodeType === Fa ? e : e.ownerDocument;
    }
    function u0(e, t, a) {
      var i = n1(a);
      if (!(hy || wc == null || wc !== Ji(i))) {
        var u = t1(wc);
        if (!wd || !J(wd, u)) {
          wd = u;
          var s = eh(vy, "onSelect");
          if (s.length > 0) {
            var f = new wa("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = wc;
          }
        }
      }
    }
    function r1(e, t, a, i, u, s, f) {
      var p = a ? Lc(a) : window;
      switch (t) {
        // Track the input node that has focus.
        case "focusin":
          (jo(p) || p.contentEditable === "true") && (wc = p, vy = a, wd = null);
          break;
        case "focusout":
          wc = null, vy = null, wd = null;
          break;
        // Don't fire the event while the user is dragging. This matches the
        // semantics of the native select event.
        case "mousedown":
          hy = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          hy = !1, u0(e, i, u);
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
          if (JT)
            break;
        // falls through
        case "keydown":
        case "keyup":
          u0(e, i, u);
      }
    }
    function Kv(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var Dc = {
      animationend: Kv("Animation", "AnimationEnd"),
      animationiteration: Kv("Animation", "AnimationIteration"),
      animationstart: Kv("Animation", "AnimationStart"),
      transitionend: Kv("Transition", "TransitionEnd")
    }, my = {}, o0 = {};
    hn && (o0 = document.createElement("div").style, "AnimationEvent" in window || (delete Dc.animationend.animation, delete Dc.animationiteration.animation, delete Dc.animationstart.animation), "TransitionEvent" in window || delete Dc.transitionend.transition);
    function Zv(e) {
      if (my[e])
        return my[e];
      if (!Dc[e])
        return e;
      var t = Dc[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in o0)
          return my[e] = t[a];
      return e;
    }
    var s0 = Zv("animationend"), c0 = Zv("animationiteration"), f0 = Zv("animationstart"), d0 = Zv("transitionend"), p0 = /* @__PURE__ */ new Map(), v0 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Su(e, t) {
      p0.set(e, t), sa(t, [e]);
    }
    function a1() {
      for (var e = 0; e < v0.length; e++) {
        var t = v0[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Su(a, "on" + i);
      }
      Su(s0, "onAnimationEnd"), Su(c0, "onAnimationIteration"), Su(f0, "onAnimationStart"), Su("dblclick", "onDoubleClick"), Su("focusin", "onFocus"), Su("focusout", "onBlur"), Su(d0, "onTransitionEnd");
    }
    function i1(e, t, a, i, u, s, f) {
      var p = p0.get(t);
      if (p !== void 0) {
        var v = wa, m = t;
        switch (t) {
          case "keypress":
            if (ki(i) === 0)
              return;
          /* falls through */
          case "keydown":
          case "keyup":
            v = Bv;
            break;
          case "focusin":
            m = "focus", v = Ga;
            break;
          case "focusout":
            m = "blur", v = Ga;
            break;
          case "beforeblur":
          case "afterblur":
            v = Ga;
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
            v = hd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = wl;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = $v;
            break;
          case s0:
          case c0:
          case f0:
            v = Av;
            break;
          case d0:
            v = jr;
            break;
          case "scroll":
            v = tr;
            break;
          case "wheel":
            v = sy;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = yc;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Pv;
            break;
        }
        var y = (s & Lr) !== 0;
        {
          var R = !y && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", E = s1(a, p, i.type, y, R);
          if (E.length > 0) {
            var b = new v(p, m, null, i, u);
            e.push({
              event: b,
              listeners: E
            });
          }
        }
      }
    }
    a1(), x(), Vo(), e1(), cy();
    function l1(e, t, a, i, u, s, f) {
      i1(e, t, a, i, u, s);
      var p = (s & Ff) === 0;
      p && (T(e, t, a, i, u), Dt(e, t, a, i, u), r1(e, t, a, i, u), Wv(e, t, a, i, u));
    }
    var Dd = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], yy = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Dd));
    function h0(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, ha(i, t, void 0, e), e.currentTarget = null;
    }
    function u1(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          h0(e, v, p), i = f;
        }
      else
        for (var m = 0; m < t.length; m++) {
          var y = t[m], R = y.instance, E = y.currentTarget, b = y.listener;
          if (R !== i && e.isPropagationStopped())
            return;
          h0(e, b, E), i = R;
        }
    }
    function m0(e, t) {
      for (var a = (t & Lr) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        u1(s, f, a);
      }
      ao();
    }
    function o1(e, t, a, i, u) {
      var s = jf(a), f = [];
      l1(f, e, i, a, s, t), m0(f, t);
    }
    function vt(e, t) {
      yy.has(e) || S('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = FR(t), u = d1(e);
      i.has(u) || (y0(t, e, ws, a), i.add(u));
    }
    function gy(e, t, a) {
      yy.has(e) && !t && S('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= Lr), y0(a, e, i, t);
    }
    var Jv = "_reactListening" + Math.random().toString(36).slice(2);
    function kd(e) {
      if (!e[Jv]) {
        e[Jv] = !0, jn.forEach(function(a) {
          a !== "selectionchange" && (yy.has(a) || gy(a, !1, e), gy(a, !0, e));
        });
        var t = e.nodeType === Fa ? e : e.ownerDocument;
        t !== null && (t[Jv] || (t[Jv] = !0, gy("selectionchange", !1, t)));
      }
    }
    function y0(e, t, a, i, u) {
      var s = an(e, t, a), f = void 0;
      ro && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? vd(e, t, s, f) : er(e, t, s) : f !== void 0 ? hu(e, t, s, f) : zo(e, t, s);
    }
    function g0(e, t) {
      return e === t || e.nodeType === Ot && e.parentNode === t;
    }
    function Sy(e, t, a, i, u) {
      var s = i;
      if ((t & Hf) === 0 && (t & ws) === 0) {
        var f = u;
        if (i !== null) {
          var p = i;
          e: for (; ; ) {
            if (p === null)
              return;
            var v = p.tag;
            if (v === ne || v === Se) {
              var m = p.stateNode.containerInfo;
              if (g0(m, f))
                break;
              if (v === Se)
                for (var y = p.return; y !== null; ) {
                  var R = y.tag;
                  if (R === ne || R === Se) {
                    var E = y.stateNode.containerInfo;
                    if (g0(E, f))
                      return;
                  }
                  y = y.return;
                }
              for (; m !== null; ) {
                var b = Yo(m);
                if (b === null)
                  return;
                var L = b.tag;
                if (L === ie || L === He) {
                  p = s = b;
                  continue e;
                }
                m = m.parentNode;
              }
            }
            p = p.return;
          }
        }
      }
      uv(function() {
        return o1(e, t, a, s);
      });
    }
    function bd(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function s1(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], m = e, y = null; m !== null; ) {
        var R = m, E = R.stateNode, b = R.tag;
        if (b === ie && E !== null && (y = E, p !== null)) {
          var L = vi(m, p);
          L != null && v.push(bd(m, L, y));
        }
        if (u)
          break;
        m = m.return;
      }
      return v;
    }
    function eh(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === ie && f !== null) {
          var v = f, m = vi(u, a);
          m != null && i.unshift(bd(u, m, v));
          var y = vi(u, t);
          y != null && i.push(bd(u, y, v));
        }
        u = u.return;
      }
      return i;
    }
    function kc(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== ie);
      return e || null;
    }
    function c1(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = kc(s))
        u++;
      for (var f = 0, p = i; p; p = kc(p))
        f++;
      for (; u - f > 0; )
        a = kc(a), u--;
      for (; f - u > 0; )
        i = kc(i), f--;
      for (var v = u; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = kc(a), i = kc(i);
      }
      return null;
    }
    function S0(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, m = v.alternate, y = v.stateNode, R = v.tag;
        if (m !== null && m === i)
          break;
        if (R === ie && y !== null) {
          var E = y;
          if (u) {
            var b = vi(p, s);
            b != null && f.unshift(bd(p, b, E));
          } else if (!u) {
            var L = vi(p, s);
            L != null && f.push(bd(p, L, E));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function f1(e, t, a, i, u) {
      var s = i && u ? c1(i, u) : null;
      i !== null && S0(e, t, i, s, !1), u !== null && a !== null && S0(e, a, u, s, !0);
    }
    function d1(e, t) {
      return e + "__bubble";
    }
    var Vr = !1, _d = "dangerouslySetInnerHTML", th = "suppressContentEditableWarning", Cu = "suppressHydrationWarning", C0 = "autoFocus", Bo = "children", Po = "style", nh = "__html", Cy, rh, Ld, E0, ah, T0, R0;
    Cy = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, rh = function(e, t) {
      zf(e, t), Rs(e, t), av(e, t, {
        registrationNameDependencies: Vn,
        possibleRegistrationNames: xr
      });
    }, T0 = hn && !document.documentMode, Ld = function(e, t, a) {
      if (!Vr) {
        var i = ih(a), u = ih(t);
        u !== i && (Vr = !0, S("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, E0 = function(e) {
      if (!Vr) {
        Vr = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), S("Extra attributes from the server: %s", t);
      }
    }, ah = function(e, t) {
      t === !1 ? S("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : S("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, R0 = function(e, t) {
      var a = e.namespaceURI === Aa ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var p1 = /\r\n?/g, v1 = /\u0000|\uFFFD/g;
    function ih(e) {
      Yi(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(p1, `
`).replace(v1, "");
    }
    function lh(e, t, a, i) {
      var u = ih(t), s = ih(e);
      if (s !== u && (i && (Vr || (Vr = !0, S('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && Na))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function x0(e) {
      return e.nodeType === Fa ? e : e.ownerDocument;
    }
    function h1() {
    }
    function uh(e) {
      e.onclick = h1;
    }
    function m1(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === Po)
            f && Object.freeze(f), Zp(t, f);
          else if (s === _d) {
            var p = f ? f[nh] : void 0;
            p != null && Vp(t, p);
          } else if (s === Bo)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && Kl(t, f);
            } else typeof f == "number" && Kl(t, "" + f);
          else s === th || s === Cu || s === C0 || (Vn.hasOwnProperty(s) ? f != null && (typeof f != "function" && ah(s, f), s === "onScroll" && vt("scroll", t)) : f != null && Ii(t, s, f, u));
        }
    }
    function y1(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === Po ? Zp(e, f) : s === _d ? Vp(e, f) : s === Bo ? Kl(e, f) : Ii(e, s, f, i);
      }
    }
    function g1(e, t, a, i) {
      var u, s = x0(a), f, p = i;
      if (p === Aa && (p = kf(e)), p === Aa) {
        if (u = di(e, t), !u && e !== e.toLowerCase() && S("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var v = s.createElement("div");
          v.innerHTML = "<script><\/script>";
          var m = v.firstChild;
          f = v.removeChild(m);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var y = f;
          t.multiple ? y.multiple = !0 : t.size && (y.size = t.size);
        }
      } else
        f = s.createElementNS(p, e);
      return p === Aa && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !ca.call(Cy, e) && (Cy[e] = !0, S("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function S1(e, t) {
      return x0(t).createTextNode(e);
    }
    function C1(e, t, a, i) {
      var u = di(t, a);
      rh(t, a);
      var s;
      switch (t) {
        case "dialog":
          vt("cancel", e), vt("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          vt("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < Dd.length; f++)
            vt(Dd[f], e);
          s = a;
          break;
        case "source":
          vt("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          vt("error", e), vt("load", e), s = a;
          break;
        case "details":
          vt("toggle", e), s = a;
          break;
        case "input":
          Ua(e, a), s = ds(e, a), vt("invalid", e);
          break;
        case "option":
          Xl(e, a), s = a;
          break;
        case "select":
          gs(e, a), s = Tf(e, a), vt("invalid", e);
          break;
        case "textarea":
          xf(e, a), s = Rf(e, a), vt("invalid", e);
          break;
        default:
          s = a;
      }
      switch (Es(t, s), m1(t, e, i, s, u), t) {
        case "input":
          fi(e), Sf(e, a, !1);
          break;
        case "textarea":
          fi(e), Fp(e);
          break;
        case "option":
          Am(e, a);
          break;
        case "select":
          Fm(e, a);
          break;
        default:
          typeof s.onClick == "function" && uh(e);
          break;
      }
    }
    function E1(e, t, a, i, u) {
      rh(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = ds(e, a), p = ds(e, i), s = [];
          break;
        case "select":
          f = Tf(e, a), p = Tf(e, i), s = [];
          break;
        case "textarea":
          f = Rf(e, a), p = Rf(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && uh(e);
          break;
      }
      Es(t, p);
      var v, m, y = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === Po) {
            var R = f[v];
            for (m in R)
              R.hasOwnProperty(m) && (y || (y = {}), y[m] = "");
          } else v === _d || v === Bo || v === th || v === Cu || v === C0 || (Vn.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var E = p[v], b = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || E === b || E == null && b == null))
          if (v === Po)
            if (E && Object.freeze(E), b) {
              for (m in b)
                b.hasOwnProperty(m) && (!E || !E.hasOwnProperty(m)) && (y || (y = {}), y[m] = "");
              for (m in E)
                E.hasOwnProperty(m) && b[m] !== E[m] && (y || (y = {}), y[m] = E[m]);
            } else
              y || (s || (s = []), s.push(v, y)), y = E;
          else if (v === _d) {
            var L = E ? E[nh] : void 0, M = b ? b[nh] : void 0;
            L != null && M !== L && (s = s || []).push(v, L);
          } else v === Bo ? (typeof E == "string" || typeof E == "number") && (s = s || []).push(v, "" + E) : v === th || v === Cu || (Vn.hasOwnProperty(v) ? (E != null && (typeof E != "function" && ah(v, E), v === "onScroll" && vt("scroll", e)), !s && b !== E && (s = [])) : (s = s || []).push(v, E));
      }
      return y && (Gm(y, p[Po]), (s = s || []).push(Po, y)), s;
    }
    function T1(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && ps(e, u);
      var s = di(a, i), f = di(a, u);
      switch (y1(e, t, s, f), a) {
        case "input":
          Wl(e, u);
          break;
        case "textarea":
          Hp(e, u);
          break;
        case "select":
          jm(e, u);
          break;
      }
    }
    function R1(e) {
      {
        var t = e.toLowerCase();
        return Ju.hasOwnProperty(t) && Ju[t] || null;
      }
    }
    function x1(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = di(t, a), rh(t, a), t) {
        case "dialog":
          vt("cancel", e), vt("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          vt("load", e);
          break;
        case "video":
        case "audio":
          for (var m = 0; m < Dd.length; m++)
            vt(Dd[m], e);
          break;
        case "source":
          vt("error", e);
          break;
        case "img":
        case "image":
        case "link":
          vt("error", e), vt("load", e);
          break;
        case "details":
          vt("toggle", e);
          break;
        case "input":
          Ua(e, a), vt("invalid", e);
          break;
        case "option":
          Xl(e, a);
          break;
        case "select":
          gs(e, a), vt("invalid", e);
          break;
        case "textarea":
          xf(e, a), vt("invalid", e);
          break;
      }
      Es(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var y = e.attributes, R = 0; R < y.length; R++) {
          var E = y[R].name.toLowerCase();
          switch (E) {
            // Controlled attributes are not validated
            // TODO: Only ignore them on controlled tags.
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              v.add(y[R].name);
          }
        }
      }
      var b = null;
      for (var L in a)
        if (a.hasOwnProperty(L)) {
          var M = a[L];
          if (L === Bo)
            typeof M == "string" ? e.textContent !== M && (a[Cu] !== !0 && lh(e.textContent, M, s, f), b = [Bo, M]) : typeof M == "number" && e.textContent !== "" + M && (a[Cu] !== !0 && lh(e.textContent, M, s, f), b = [Bo, "" + M]);
          else if (Vn.hasOwnProperty(L))
            M != null && (typeof M != "function" && ah(L, M), L === "onScroll" && vt("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var Q = void 0, se = Mt(L);
            if (a[Cu] !== !0) {
              if (!(L === th || L === Cu || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              L === "value" || L === "checked" || L === "selected")) {
                if (L === _d) {
                  var re = e.innerHTML, Ae = M ? M[nh] : void 0;
                  if (Ae != null) {
                    var be = R0(e, Ae);
                    be !== re && Ld(L, re, be);
                  }
                } else if (L === Po) {
                  if (v.delete(L), T0) {
                    var w = Qm(M);
                    Q = e.getAttribute("style"), w !== Q && Ld(L, Q, w);
                  }
                } else if (p)
                  v.delete(L.toLowerCase()), Q = af(e, L, M), M !== Q && Ld(L, Q, M);
                else if (!Pn(L, se, p) && !Yn(L, M, se, p)) {
                  var O = !1;
                  if (se !== null)
                    v.delete(se.attributeName), Q = rf(e, L, M, se);
                  else {
                    var D = i;
                    if (D === Aa && (D = kf(t)), D === Aa)
                      v.delete(L.toLowerCase());
                    else {
                      var V = R1(L);
                      V !== null && V !== L && (O = !0, v.delete(V)), v.delete(L);
                    }
                    Q = af(e, L, M);
                  }
                  var X = Ie;
                  !X && M !== Q && !O && Ld(L, Q, M);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[Cu] !== !0 && E0(v), t) {
        case "input":
          fi(e), Sf(e, a, !0);
          break;
        case "textarea":
          fi(e), Fp(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && uh(e);
          break;
      }
      return b;
    }
    function w1(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function Ey(e, t) {
      {
        if (Vr)
          return;
        Vr = !0, S("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function Ty(e, t) {
      {
        if (Vr)
          return;
        Vr = !0, S('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function Ry(e, t, a) {
      {
        if (Vr)
          return;
        Vr = !0, S("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function xy(e, t) {
      {
        if (t === "" || Vr)
          return;
        Vr = !0, S('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function D1(e, t, a) {
      switch (t) {
        case "input":
          vs(e, a);
          return;
        case "textarea":
          Bm(e, a);
          return;
        case "select":
          Vm(e, a);
          return;
      }
    }
    var Md = function() {
    }, Od = function() {
    };
    {
      var k1 = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], w0 = [
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
      ], b1 = w0.concat(["button"]), _1 = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], D0 = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      Od = function(e, t) {
        var a = Me({}, e || D0), i = {
          tag: t
        };
        return w0.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), b1.indexOf(t) !== -1 && (a.pTagInButtonScope = null), k1.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var L1 = function(e, t) {
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
            return _1.indexOf(t) === -1;
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
      }, M1 = function(e, t) {
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
      }, k0 = {};
      Md = function(e, t, a) {
        a = a || D0;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && S("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = L1(e, u) ? null : i, f = s ? null : M1(e, a), p = s || f;
        if (p) {
          var v = p.tag, m = !!s + "|" + e + "|" + v;
          if (!k0[m]) {
            k0[m] = !0;
            var y = e, R = "";
            if (e === "#text" ? /\S/.test(t) ? y = "Text nodes" : (y = "Whitespace text nodes", R = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : y = "<" + e + ">", s) {
              var E = "";
              v === "table" && e === "tr" && (E += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), S("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", y, v, R, E);
            } else
              S("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", y, v);
          }
        }
      };
    }
    var oh = "suppressHydrationWarning", sh = "$", ch = "/$", Nd = "$?", zd = "$!", O1 = "style", wy = null, Dy = null;
    function N1(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case Fa:
        case _f: {
          t = i === Fa ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : bf(null, "");
          break;
        }
        default: {
          var s = i === Ot ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = bf(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = Od(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function z1(e, t, a) {
      {
        var i = e, u = bf(i.namespace, t), s = Od(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function Vk(e) {
      return e;
    }
    function U1(e) {
      wy = Ft(), Dy = XT();
      var t = null;
      return Qt(!1), t;
    }
    function A1(e) {
      qT(Dy), Qt(wy), wy = null, Dy = null;
    }
    function H1(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (Md(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = Od(f.ancestorInfo, e);
          Md(null, p, v);
        }
        s = f.namespace;
      }
      var m = g1(e, t, a, s);
      return Hd(u, m), zy(m, t), m;
    }
    function F1(e, t) {
      e.appendChild(t);
    }
    function j1(e, t, a, i, u) {
      switch (C1(e, t, a, i), t) {
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
    function V1(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = Od(f.ancestorInfo, t);
          Md(null, p, v);
        }
      }
      return E1(e, t, a, i);
    }
    function ky(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function B1(e, t, a, i) {
      {
        var u = a;
        Md(null, e, u.ancestorInfo);
      }
      var s = S1(e, t);
      return Hd(i, s), s;
    }
    function P1() {
      var e = window.event;
      return e === void 0 ? Ar : vc(e.type);
    }
    var by = typeof setTimeout == "function" ? setTimeout : void 0, Y1 = typeof clearTimeout == "function" ? clearTimeout : void 0, _y = -1, b0 = typeof Promise == "function" ? Promise : void 0, $1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof b0 < "u" ? function(e) {
      return b0.resolve(null).then(e).catch(Q1);
    } : by;
    function Q1(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function I1(e, t, a, i) {
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
    function G1(e, t, a, i, u, s) {
      T1(e, t, a, i, u), zy(e, u);
    }
    function _0(e) {
      Kl(e, "");
    }
    function W1(e, t, a) {
      e.nodeValue = a;
    }
    function X1(e, t) {
      e.appendChild(t);
    }
    function q1(e, t) {
      var a;
      e.nodeType === Ot ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && uh(a);
    }
    function K1(e, t, a) {
      e.insertBefore(t, a);
    }
    function Z1(e, t, a) {
      e.nodeType === Ot ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function J1(e, t) {
      e.removeChild(t);
    }
    function eR(e, t) {
      e.nodeType === Ot ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Ly(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === Ot) {
          var s = u.data;
          if (s === ch)
            if (i === 0) {
              e.removeChild(u), Tl(t);
              return;
            } else
              i--;
          else (s === sh || s === Nd || s === zd) && i++;
        }
        a = u;
      } while (a);
      Tl(t);
    }
    function tR(e, t) {
      e.nodeType === Ot ? Ly(e.parentNode, t) : e.nodeType === Qn && Ly(e, t), Tl(e);
    }
    function nR(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function rR(e) {
      e.nodeValue = "";
    }
    function aR(e, t) {
      e = e;
      var a = t[O1], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = Cs("display", i);
    }
    function iR(e, t) {
      e.nodeValue = t;
    }
    function lR(e) {
      e.nodeType === Qn ? e.textContent = "" : e.nodeType === Fa && e.documentElement && e.removeChild(e.documentElement);
    }
    function uR(e, t, a) {
      return e.nodeType !== Qn || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function oR(e, t) {
      return t === "" || e.nodeType !== Ha ? null : e;
    }
    function sR(e) {
      return e.nodeType !== Ot ? null : e;
    }
    function L0(e) {
      return e.data === Nd;
    }
    function My(e) {
      return e.data === zd;
    }
    function cR(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function fR(e, t) {
      e._reactRetry = t;
    }
    function fh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Qn || t === Ha)
          break;
        if (t === Ot) {
          var a = e.data;
          if (a === sh || a === zd || a === Nd)
            break;
          if (a === ch)
            return null;
        }
      }
      return e;
    }
    function Ud(e) {
      return fh(e.nextSibling);
    }
    function dR(e) {
      return fh(e.firstChild);
    }
    function pR(e) {
      return fh(e.firstChild);
    }
    function vR(e) {
      return fh(e.nextSibling);
    }
    function hR(e, t, a, i, u, s, f) {
      Hd(s, e), zy(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var m = (s.mode & xe) !== oe;
      return x1(e, t, a, p, i, m, f);
    }
    function mR(e, t, a, i) {
      return Hd(a, e), a.mode & xe, w1(e, t);
    }
    function yR(e, t) {
      Hd(t, e);
    }
    function gR(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Ot) {
          var i = t.data;
          if (i === ch) {
            if (a === 0)
              return Ud(t);
            a--;
          } else (i === sh || i === zd || i === Nd) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function M0(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Ot) {
          var i = t.data;
          if (i === sh || i === zd || i === Nd) {
            if (a === 0)
              return t;
            a--;
          } else i === ch && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function SR(e) {
      Tl(e);
    }
    function CR(e) {
      Tl(e);
    }
    function ER(e) {
      return e !== "head" && e !== "body";
    }
    function TR(e, t, a, i) {
      var u = !0;
      lh(t.nodeValue, a, i, u);
    }
    function RR(e, t, a, i, u, s) {
      if (t[oh] !== !0) {
        var f = !0;
        lh(i.nodeValue, u, s, f);
      }
    }
    function xR(e, t) {
      t.nodeType === Qn ? Ey(e, t) : t.nodeType === Ot || Ty(e, t);
    }
    function wR(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Qn ? Ey(a, t) : t.nodeType === Ot || Ty(a, t));
      }
    }
    function DR(e, t, a, i, u) {
      (u || t[oh] !== !0) && (i.nodeType === Qn ? Ey(a, i) : i.nodeType === Ot || Ty(a, i));
    }
    function kR(e, t, a) {
      Ry(e, t);
    }
    function bR(e, t) {
      xy(e, t);
    }
    function _R(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && Ry(i, t);
      }
    }
    function LR(e, t) {
      {
        var a = e.parentNode;
        a !== null && xy(a, t);
      }
    }
    function MR(e, t, a, i, u, s) {
      (s || t[oh] !== !0) && Ry(a, i);
    }
    function OR(e, t, a, i, u) {
      (u || t[oh] !== !0) && xy(a, i);
    }
    function NR(e) {
      S("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function zR(e) {
      kd(e);
    }
    var bc = Math.random().toString(36).slice(2), _c = "__reactFiber$" + bc, Oy = "__reactProps$" + bc, Ad = "__reactContainer$" + bc, Ny = "__reactEvents$" + bc, UR = "__reactListeners$" + bc, AR = "__reactHandles$" + bc;
    function HR(e) {
      delete e[_c], delete e[Oy], delete e[Ny], delete e[UR], delete e[AR];
    }
    function Hd(e, t) {
      t[_c] = e;
    }
    function dh(e, t) {
      t[Ad] = e;
    }
    function O0(e) {
      e[Ad] = null;
    }
    function Fd(e) {
      return !!e[Ad];
    }
    function Yo(e) {
      var t = e[_c];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Ad] || a[_c], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = M0(e); u !== null; ) {
              var s = u[_c];
              if (s)
                return s;
              u = M0(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Eu(e) {
      var t = e[_c] || e[Ad];
      return t && (t.tag === ie || t.tag === He || t.tag === Oe || t.tag === ne) ? t : null;
    }
    function Lc(e) {
      if (e.tag === ie || e.tag === He)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function ph(e) {
      return e[Oy] || null;
    }
    function zy(e, t) {
      e[Oy] = t;
    }
    function FR(e) {
      var t = e[Ny];
      return t === void 0 && (t = e[Ny] = /* @__PURE__ */ new Set()), t;
    }
    var N0 = {}, z0 = N.ReactDebugCurrentFrame;
    function vh(e) {
      if (e) {
        var t = e._owner, a = Ki(e.type, e._source, t ? t.type : null);
        z0.setExtraStackFrame(a);
      } else
        z0.setExtraStackFrame(null);
    }
    function Xa(e, t, a, i, u) {
      {
        var s = Function.call.bind(ca);
        for (var f in e)
          if (s(e, f)) {
            var p = void 0;
            try {
              if (typeof e[f] != "function") {
                var v = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              p = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (m) {
              p = m;
            }
            p && !(p instanceof Error) && (vh(u), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), vh(null)), p instanceof Error && !(p.message in N0) && (N0[p.message] = !0, vh(u), S("Failed %s type: %s", a, p.message), vh(null));
          }
      }
    }
    var Uy = [], hh;
    hh = [];
    var bl = -1;
    function Tu(e) {
      return {
        current: e
      };
    }
    function nr(e, t) {
      if (bl < 0) {
        S("Unexpected pop.");
        return;
      }
      t !== hh[bl] && S("Unexpected Fiber popped."), e.current = Uy[bl], Uy[bl] = null, hh[bl] = null, bl--;
    }
    function rr(e, t, a) {
      bl++, Uy[bl] = e.current, hh[bl] = a, e.current = t;
    }
    var Ay;
    Ay = {};
    var la = {};
    Object.freeze(la);
    var _l = Tu(la), Oi = Tu(!1), Hy = la;
    function Mc(e, t, a) {
      return a && Ni(t) ? Hy : _l.current;
    }
    function U0(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Oc(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return la;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = Te(e) || "Unknown";
          Xa(i, s, "context", p);
        }
        return u && U0(e, t, s), s;
      }
    }
    function mh() {
      return Oi.current;
    }
    function Ni(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function yh(e) {
      nr(Oi, e), nr(_l, e);
    }
    function Fy(e) {
      nr(Oi, e), nr(_l, e);
    }
    function A0(e, t, a) {
      {
        if (_l.current !== la)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        rr(_l, t, e), rr(Oi, a, e);
      }
    }
    function H0(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Te(e) || "Unknown";
            Ay[s] || (Ay[s] = !0, S("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((Te(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = Te(e) || "Unknown";
          Xa(u, f, "child context", v);
        }
        return Me({}, a, f);
      }
    }
    function gh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || la;
        return Hy = _l.current, rr(_l, a, e), rr(Oi, Oi.current, e), !0;
      }
    }
    function F0(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = H0(e, t, Hy);
          i.__reactInternalMemoizedMergedChildContext = u, nr(Oi, e), nr(_l, e), rr(_l, u, e), rr(Oi, a, e);
        } else
          nr(Oi, e), rr(Oi, a, e);
      }
    }
    function jR(e) {
      {
        if (!ol(e) || e.tag !== ce)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case ne:
              return t.stateNode.context;
            case ce: {
              var a = t.type;
              if (Ni(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Ru = 0, Sh = 1, Ll = null, jy = !1, Vy = !1;
    function j0(e) {
      Ll === null ? Ll = [e] : Ll.push(e);
    }
    function VR(e) {
      jy = !0, j0(e);
    }
    function V0() {
      jy && xu();
    }
    function xu() {
      if (!Vy && Ll !== null) {
        Vy = !0;
        var e = 0, t = Fr();
        try {
          var a = !0, i = Ll;
          for (Ht(wn); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          Ll = null, jy = !1;
        } catch (s) {
          throw Ll !== null && (Ll = Ll.slice(e + 1)), Bf(uo, xu), s;
        } finally {
          Ht(t), Vy = !1;
        }
      }
      return null;
    }
    var Nc = [], zc = 0, Ch = null, Eh = 0, Da = [], ka = 0, $o = null, Ml = 1, Ol = "";
    function BR(e) {
      return Io(), (e.flags & ma) !== ue;
    }
    function PR(e) {
      return Io(), Eh;
    }
    function YR() {
      var e = Ol, t = Ml, a = t & ~$R(t);
      return a.toString(32) + e;
    }
    function Qo(e, t) {
      Io(), Nc[zc++] = Eh, Nc[zc++] = Ch, Ch = e, Eh = t;
    }
    function B0(e, t, a) {
      Io(), Da[ka++] = Ml, Da[ka++] = Ol, Da[ka++] = $o, $o = e;
      var i = Ml, u = Ol, s = Th(i) - 1, f = i & ~(1 << s), p = a + 1, v = Th(t) + s;
      if (v > 30) {
        var m = s - s % 5, y = (1 << m) - 1, R = (f & y).toString(32), E = f >> m, b = s - m, L = Th(t) + b, M = p << b, Q = M | E, se = R + u;
        Ml = 1 << L | Q, Ol = se;
      } else {
        var re = p << s, Ae = re | f, be = u;
        Ml = 1 << v | Ae, Ol = be;
      }
    }
    function By(e) {
      Io();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Qo(e, a), B0(e, a, i);
      }
    }
    function Th(e) {
      return 32 - Ut(e);
    }
    function $R(e) {
      return 1 << Th(e) - 1;
    }
    function Py(e) {
      for (; e === Ch; )
        Ch = Nc[--zc], Nc[zc] = null, Eh = Nc[--zc], Nc[zc] = null;
      for (; e === $o; )
        $o = Da[--ka], Da[ka] = null, Ol = Da[--ka], Da[ka] = null, Ml = Da[--ka], Da[ka] = null;
    }
    function QR() {
      return Io(), $o !== null ? {
        id: Ml,
        overflow: Ol
      } : null;
    }
    function IR(e, t) {
      Io(), Da[ka++] = Ml, Da[ka++] = Ol, Da[ka++] = $o, Ml = t.id, Ol = t.overflow, $o = e;
    }
    function Io() {
      Ln() || S("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var _n = null, ba = null, qa = !1, Go = !1, wu = null;
    function GR() {
      qa && S("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function P0() {
      Go = !0;
    }
    function WR() {
      return Go;
    }
    function XR(e) {
      var t = e.stateNode.containerInfo;
      return ba = pR(t), _n = e, qa = !0, wu = null, Go = !1, !0;
    }
    function qR(e, t, a) {
      return ba = vR(t), _n = e, qa = !0, wu = null, Go = !1, a !== null && IR(e, a), !0;
    }
    function Y0(e, t) {
      switch (e.tag) {
        case ne: {
          xR(e.stateNode.containerInfo, t);
          break;
        }
        case ie: {
          var a = (e.mode & xe) !== oe;
          DR(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case Oe: {
          var i = e.memoizedState;
          i.dehydrated !== null && wR(i.dehydrated, t);
          break;
        }
      }
    }
    function $0(e, t) {
      Y0(e, t);
      var a = ek();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Mr) : i.push(a);
    }
    function Yy(e, t) {
      {
        if (Go)
          return;
        switch (e.tag) {
          case ne: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case ie:
                var i = t.type;
                t.pendingProps, kR(a, i);
                break;
              case He:
                var u = t.pendingProps;
                bR(a, u);
                break;
            }
            break;
          }
          case ie: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case ie: {
                var v = t.type, m = t.pendingProps, y = (e.mode & xe) !== oe;
                MR(
                  s,
                  f,
                  p,
                  v,
                  m,
                  // TODO: Delete this argument when we remove the legacy root API.
                  y
                );
                break;
              }
              case He: {
                var R = t.pendingProps, E = (e.mode & xe) !== oe;
                OR(
                  s,
                  f,
                  p,
                  R,
                  // TODO: Delete this argument when we remove the legacy root API.
                  E
                );
                break;
              }
            }
            break;
          }
          case Oe: {
            var b = e.memoizedState, L = b.dehydrated;
            if (L !== null) switch (t.tag) {
              case ie:
                var M = t.type;
                t.pendingProps, _R(L, M);
                break;
              case He:
                var Q = t.pendingProps;
                LR(L, Q);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function Q0(e, t) {
      t.flags = t.flags & -4097 | Et, Yy(e, t);
    }
    function I0(e, t) {
      switch (e.tag) {
        case ie: {
          var a = e.type;
          e.pendingProps;
          var i = uR(t, a);
          return i !== null ? (e.stateNode = i, _n = e, ba = dR(i), !0) : !1;
        }
        case He: {
          var u = e.pendingProps, s = oR(t, u);
          return s !== null ? (e.stateNode = s, _n = e, ba = null, !0) : !1;
        }
        case Oe: {
          var f = sR(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: QR(),
              retryLane: hr
            };
            e.memoizedState = p;
            var v = tk(f);
            return v.return = e, e.child = v, _n = e, ba = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function $y(e) {
      return (e.mode & xe) !== oe && (e.flags & le) === ue;
    }
    function Qy(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function Iy(e) {
      if (qa) {
        var t = ba;
        if (!t) {
          $y(e) && (Yy(_n, e), Qy()), Q0(_n, e), qa = !1, _n = e;
          return;
        }
        var a = t;
        if (!I0(e, t)) {
          $y(e) && (Yy(_n, e), Qy()), t = Ud(a);
          var i = _n;
          if (!t || !I0(e, t)) {
            Q0(_n, e), qa = !1, _n = e;
            return;
          }
          $0(i, a);
        }
      }
    }
    function KR(e, t, a) {
      var i = e.stateNode, u = !Go, s = hR(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function ZR(e) {
      var t = e.stateNode, a = e.memoizedProps, i = mR(t, a, e);
      if (i) {
        var u = _n;
        if (u !== null)
          switch (u.tag) {
            case ne: {
              var s = u.stateNode.containerInfo, f = (u.mode & xe) !== oe;
              TR(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case ie: {
              var p = u.type, v = u.memoizedProps, m = u.stateNode, y = (u.mode & xe) !== oe;
              RR(
                p,
                v,
                m,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                y
              );
              break;
            }
          }
      }
      return i;
    }
    function JR(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      yR(a, e);
    }
    function ex(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return gR(a);
    }
    function G0(e) {
      for (var t = e.return; t !== null && t.tag !== ie && t.tag !== ne && t.tag !== Oe; )
        t = t.return;
      _n = t;
    }
    function Rh(e) {
      if (e !== _n)
        return !1;
      if (!qa)
        return G0(e), qa = !0, !1;
      if (e.tag !== ne && (e.tag !== ie || ER(e.type) && !ky(e.type, e.memoizedProps))) {
        var t = ba;
        if (t)
          if ($y(e))
            W0(e), Qy();
          else
            for (; t; )
              $0(e, t), t = Ud(t);
      }
      return G0(e), e.tag === Oe ? ba = ex(e) : ba = _n ? Ud(e.stateNode) : null, !0;
    }
    function tx() {
      return qa && ba !== null;
    }
    function W0(e) {
      for (var t = ba; t; )
        Y0(e, t), t = Ud(t);
    }
    function Uc() {
      _n = null, ba = null, qa = !1, Go = !1;
    }
    function X0() {
      wu !== null && (PE(wu), wu = null);
    }
    function Ln() {
      return qa;
    }
    function Gy(e) {
      wu === null ? wu = [e] : wu.push(e);
    }
    var nx = N.ReactCurrentBatchConfig, rx = null;
    function ax() {
      return nx.transition;
    }
    var Ka = {
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
      var ix = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & Ke && (t = a), a = a.return;
        return t;
      }, Wo = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, jd = [], Vd = [], Bd = [], Pd = [], Yd = [], $d = [], Xo = /* @__PURE__ */ new Set();
      Ka.recordUnsafeLifecycleWarnings = function(e, t) {
        Xo.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && jd.push(e), e.mode & Ke && typeof t.UNSAFE_componentWillMount == "function" && Vd.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Bd.push(e), e.mode & Ke && typeof t.UNSAFE_componentWillReceiveProps == "function" && Pd.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Yd.push(e), e.mode & Ke && typeof t.UNSAFE_componentWillUpdate == "function" && $d.push(e));
      }, Ka.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        jd.length > 0 && (jd.forEach(function(E) {
          e.add(Te(E) || "Component"), Xo.add(E.type);
        }), jd = []);
        var t = /* @__PURE__ */ new Set();
        Vd.length > 0 && (Vd.forEach(function(E) {
          t.add(Te(E) || "Component"), Xo.add(E.type);
        }), Vd = []);
        var a = /* @__PURE__ */ new Set();
        Bd.length > 0 && (Bd.forEach(function(E) {
          a.add(Te(E) || "Component"), Xo.add(E.type);
        }), Bd = []);
        var i = /* @__PURE__ */ new Set();
        Pd.length > 0 && (Pd.forEach(function(E) {
          i.add(Te(E) || "Component"), Xo.add(E.type);
        }), Pd = []);
        var u = /* @__PURE__ */ new Set();
        Yd.length > 0 && (Yd.forEach(function(E) {
          u.add(Te(E) || "Component"), Xo.add(E.type);
        }), Yd = []);
        var s = /* @__PURE__ */ new Set();
        if ($d.length > 0 && ($d.forEach(function(E) {
          s.add(Te(E) || "Component"), Xo.add(E.type);
        }), $d = []), t.size > 0) {
          var f = Wo(t);
          S(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = Wo(i);
          S(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = Wo(s);
          S(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var m = Wo(e);
          bt(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, m);
        }
        if (a.size > 0) {
          var y = Wo(a);
          bt(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (u.size > 0) {
          var R = Wo(u);
          bt(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, R);
        }
      };
      var xh = /* @__PURE__ */ new Map(), q0 = /* @__PURE__ */ new Set();
      Ka.recordLegacyContextWarning = function(e, t) {
        var a = ix(e);
        if (a === null) {
          S("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!q0.has(e.type)) {
          var i = xh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], xh.set(a, i)), i.push(e));
        }
      }, Ka.flushLegacyContextWarning = function() {
        xh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Te(s) || "Component"), q0.add(s.type);
            });
            var u = Wo(i);
            try {
              ut(a), S(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              St();
            }
          }
        });
      }, Ka.discardPendingWarnings = function() {
        jd = [], Vd = [], Bd = [], Pd = [], Yd = [], $d = [], xh = /* @__PURE__ */ new Map();
      };
    }
    var Wy, Xy, qy, Ky, Zy, K0 = function(e, t) {
    };
    Wy = !1, Xy = !1, qy = {}, Ky = {}, Zy = {}, K0 = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Te(t) || "Component";
        Ky[a] || (Ky[a] = !0, S('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function lx(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function Qd(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & Ke || qe) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== ce) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !lx(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var u = Te(e) || "Component";
          qy[u] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, i), qy[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== ce)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          Hu(i, "ref");
          var m = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === m)
            return t.ref;
          var y = function(R) {
            var E = v.refs;
            R === null ? delete E[m] : E[m] = R;
          };
          return y._stringRef = m, y;
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
    function wh(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Dh(e) {
      {
        var t = Te(e) || "Component";
        if (Zy[t])
          return;
        Zy[t] = !0, S("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function Z0(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function J0(e) {
      function t(w, O) {
        if (e) {
          var D = w.deletions;
          D === null ? (w.deletions = [O], w.flags |= Mr) : D.push(O);
        }
      }
      function a(w, O) {
        if (!e)
          return null;
        for (var D = O; D !== null; )
          t(w, D), D = D.sibling;
        return null;
      }
      function i(w, O) {
        for (var D = /* @__PURE__ */ new Map(), V = O; V !== null; )
          V.key !== null ? D.set(V.key, V) : D.set(V.index, V), V = V.sibling;
        return D;
      }
      function u(w, O) {
        var D = as(w, O);
        return D.index = 0, D.sibling = null, D;
      }
      function s(w, O, D) {
        if (w.index = D, !e)
          return w.flags |= ma, O;
        var V = w.alternate;
        if (V !== null) {
          var X = V.index;
          return X < O ? (w.flags |= Et, O) : X;
        } else
          return w.flags |= Et, O;
      }
      function f(w) {
        return e && w.alternate === null && (w.flags |= Et), w;
      }
      function p(w, O, D, V) {
        if (O === null || O.tag !== He) {
          var X = GS(D, w.mode, V);
          return X.return = w, X;
        } else {
          var I = u(O, D);
          return I.return = w, I;
        }
      }
      function v(w, O, D, V) {
        var X = D.type;
        if (X === Yl)
          return y(w, O, D.props.children, V, D.key);
        if (O !== null && (O.elementType === X || // Keep this check inline so it only runs on the false path:
        aT(O, D) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof X == "object" && X !== null && X.$$typeof === mn && Z0(X) === O.type)) {
          var I = u(O, D.props);
          return I.ref = Qd(w, O, D), I.return = w, I._debugSource = D._source, I._debugOwner = D._owner, I;
        }
        var me = IS(D, w.mode, V);
        return me.ref = Qd(w, O, D), me.return = w, me;
      }
      function m(w, O, D, V) {
        if (O === null || O.tag !== Se || O.stateNode.containerInfo !== D.containerInfo || O.stateNode.implementation !== D.implementation) {
          var X = WS(D, w.mode, V);
          return X.return = w, X;
        } else {
          var I = u(O, D.children || []);
          return I.return = w, I;
        }
      }
      function y(w, O, D, V, X) {
        if (O === null || O.tag !== Xe) {
          var I = Au(D, w.mode, V, X);
          return I.return = w, I;
        } else {
          var me = u(O, D);
          return me.return = w, me;
        }
      }
      function R(w, O, D) {
        if (typeof O == "string" && O !== "" || typeof O == "number") {
          var V = GS("" + O, w.mode, D);
          return V.return = w, V;
        }
        if (typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case oi: {
              var X = IS(O, w.mode, D);
              return X.ref = Qd(w, null, O), X.return = w, X;
            }
            case Xr: {
              var I = WS(O, w.mode, D);
              return I.return = w, I;
            }
            case mn: {
              var me = O._payload, Ee = O._init;
              return R(w, Ee(me), D);
            }
          }
          if (en(O) || tt(O)) {
            var Je = Au(O, w.mode, D, null);
            return Je.return = w, Je;
          }
          wh(w, O);
        }
        return typeof O == "function" && Dh(w), null;
      }
      function E(w, O, D, V) {
        var X = O !== null ? O.key : null;
        if (typeof D == "string" && D !== "" || typeof D == "number")
          return X !== null ? null : p(w, O, "" + D, V);
        if (typeof D == "object" && D !== null) {
          switch (D.$$typeof) {
            case oi:
              return D.key === X ? v(w, O, D, V) : null;
            case Xr:
              return D.key === X ? m(w, O, D, V) : null;
            case mn: {
              var I = D._payload, me = D._init;
              return E(w, O, me(I), V);
            }
          }
          if (en(D) || tt(D))
            return X !== null ? null : y(w, O, D, V, null);
          wh(w, D);
        }
        return typeof D == "function" && Dh(w), null;
      }
      function b(w, O, D, V, X) {
        if (typeof V == "string" && V !== "" || typeof V == "number") {
          var I = w.get(D) || null;
          return p(O, I, "" + V, X);
        }
        if (typeof V == "object" && V !== null) {
          switch (V.$$typeof) {
            case oi: {
              var me = w.get(V.key === null ? D : V.key) || null;
              return v(O, me, V, X);
            }
            case Xr: {
              var Ee = w.get(V.key === null ? D : V.key) || null;
              return m(O, Ee, V, X);
            }
            case mn:
              var Je = V._payload, Pe = V._init;
              return b(w, O, D, Pe(Je), X);
          }
          if (en(V) || tt(V)) {
            var It = w.get(D) || null;
            return y(O, It, V, X, null);
          }
          wh(O, V);
        }
        return typeof V == "function" && Dh(O), null;
      }
      function L(w, O, D) {
        {
          if (typeof w != "object" || w === null)
            return O;
          switch (w.$$typeof) {
            case oi:
            case Xr:
              K0(w, D);
              var V = w.key;
              if (typeof V != "string")
                break;
              if (O === null) {
                O = /* @__PURE__ */ new Set(), O.add(V);
                break;
              }
              if (!O.has(V)) {
                O.add(V);
                break;
              }
              S("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", V);
              break;
            case mn:
              var X = w._payload, I = w._init;
              L(I(X), O, D);
              break;
          }
        }
        return O;
      }
      function M(w, O, D, V) {
        for (var X = null, I = 0; I < D.length; I++) {
          var me = D[I];
          X = L(me, X, w);
        }
        for (var Ee = null, Je = null, Pe = O, It = 0, Ye = 0, Vt = null; Pe !== null && Ye < D.length; Ye++) {
          Pe.index > Ye ? (Vt = Pe, Pe = null) : Vt = Pe.sibling;
          var ir = E(w, Pe, D[Ye], V);
          if (ir === null) {
            Pe === null && (Pe = Vt);
            break;
          }
          e && Pe && ir.alternate === null && t(w, Pe), It = s(ir, It, Ye), Je === null ? Ee = ir : Je.sibling = ir, Je = ir, Pe = Vt;
        }
        if (Ye === D.length) {
          if (a(w, Pe), Ln()) {
            var Hn = Ye;
            Qo(w, Hn);
          }
          return Ee;
        }
        if (Pe === null) {
          for (; Ye < D.length; Ye++) {
            var oa = R(w, D[Ye], V);
            oa !== null && (It = s(oa, It, Ye), Je === null ? Ee = oa : Je.sibling = oa, Je = oa);
          }
          if (Ln()) {
            var Er = Ye;
            Qo(w, Er);
          }
          return Ee;
        }
        for (var Tr = i(w, Pe); Ye < D.length; Ye++) {
          var lr = b(Tr, w, Ye, D[Ye], V);
          lr !== null && (e && lr.alternate !== null && Tr.delete(lr.key === null ? Ye : lr.key), It = s(lr, It, Ye), Je === null ? Ee = lr : Je.sibling = lr, Je = lr);
        }
        if (e && Tr.forEach(function(ef) {
          return t(w, ef);
        }), Ln()) {
          var jl = Ye;
          Qo(w, jl);
        }
        return Ee;
      }
      function Q(w, O, D, V) {
        var X = tt(D);
        if (typeof X != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          D[Symbol.toStringTag] === "Generator" && (Xy || S("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Xy = !0), D.entries === X && (Wy || S("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Wy = !0);
          var I = X.call(D);
          if (I)
            for (var me = null, Ee = I.next(); !Ee.done; Ee = I.next()) {
              var Je = Ee.value;
              me = L(Je, me, w);
            }
        }
        var Pe = X.call(D);
        if (Pe == null)
          throw new Error("An iterable object provided no iterator.");
        for (var It = null, Ye = null, Vt = O, ir = 0, Hn = 0, oa = null, Er = Pe.next(); Vt !== null && !Er.done; Hn++, Er = Pe.next()) {
          Vt.index > Hn ? (oa = Vt, Vt = null) : oa = Vt.sibling;
          var Tr = E(w, Vt, Er.value, V);
          if (Tr === null) {
            Vt === null && (Vt = oa);
            break;
          }
          e && Vt && Tr.alternate === null && t(w, Vt), ir = s(Tr, ir, Hn), Ye === null ? It = Tr : Ye.sibling = Tr, Ye = Tr, Vt = oa;
        }
        if (Er.done) {
          if (a(w, Vt), Ln()) {
            var lr = Hn;
            Qo(w, lr);
          }
          return It;
        }
        if (Vt === null) {
          for (; !Er.done; Hn++, Er = Pe.next()) {
            var jl = R(w, Er.value, V);
            jl !== null && (ir = s(jl, ir, Hn), Ye === null ? It = jl : Ye.sibling = jl, Ye = jl);
          }
          if (Ln()) {
            var ef = Hn;
            Qo(w, ef);
          }
          return It;
        }
        for (var Rp = i(w, Vt); !Er.done; Hn++, Er = Pe.next()) {
          var Bi = b(Rp, w, Hn, Er.value, V);
          Bi !== null && (e && Bi.alternate !== null && Rp.delete(Bi.key === null ? Hn : Bi.key), ir = s(Bi, ir, Hn), Ye === null ? It = Bi : Ye.sibling = Bi, Ye = Bi);
        }
        if (e && Rp.forEach(function(Ok) {
          return t(w, Ok);
        }), Ln()) {
          var Mk = Hn;
          Qo(w, Mk);
        }
        return It;
      }
      function se(w, O, D, V) {
        if (O !== null && O.tag === He) {
          a(w, O.sibling);
          var X = u(O, D);
          return X.return = w, X;
        }
        a(w, O);
        var I = GS(D, w.mode, V);
        return I.return = w, I;
      }
      function re(w, O, D, V) {
        for (var X = D.key, I = O; I !== null; ) {
          if (I.key === X) {
            var me = D.type;
            if (me === Yl) {
              if (I.tag === Xe) {
                a(w, I.sibling);
                var Ee = u(I, D.props.children);
                return Ee.return = w, Ee._debugSource = D._source, Ee._debugOwner = D._owner, Ee;
              }
            } else if (I.elementType === me || // Keep this check inline so it only runs on the false path:
            aT(I, D) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof me == "object" && me !== null && me.$$typeof === mn && Z0(me) === I.type) {
              a(w, I.sibling);
              var Je = u(I, D.props);
              return Je.ref = Qd(w, I, D), Je.return = w, Je._debugSource = D._source, Je._debugOwner = D._owner, Je;
            }
            a(w, I);
            break;
          } else
            t(w, I);
          I = I.sibling;
        }
        if (D.type === Yl) {
          var Pe = Au(D.props.children, w.mode, V, D.key);
          return Pe.return = w, Pe;
        } else {
          var It = IS(D, w.mode, V);
          return It.ref = Qd(w, O, D), It.return = w, It;
        }
      }
      function Ae(w, O, D, V) {
        for (var X = D.key, I = O; I !== null; ) {
          if (I.key === X)
            if (I.tag === Se && I.stateNode.containerInfo === D.containerInfo && I.stateNode.implementation === D.implementation) {
              a(w, I.sibling);
              var me = u(I, D.children || []);
              return me.return = w, me;
            } else {
              a(w, I);
              break;
            }
          else
            t(w, I);
          I = I.sibling;
        }
        var Ee = WS(D, w.mode, V);
        return Ee.return = w, Ee;
      }
      function be(w, O, D, V) {
        var X = typeof D == "object" && D !== null && D.type === Yl && D.key === null;
        if (X && (D = D.props.children), typeof D == "object" && D !== null) {
          switch (D.$$typeof) {
            case oi:
              return f(re(w, O, D, V));
            case Xr:
              return f(Ae(w, O, D, V));
            case mn:
              var I = D._payload, me = D._init;
              return be(w, O, me(I), V);
          }
          if (en(D))
            return M(w, O, D, V);
          if (tt(D))
            return Q(w, O, D, V);
          wh(w, D);
        }
        return typeof D == "string" && D !== "" || typeof D == "number" ? f(se(w, O, "" + D, V)) : (typeof D == "function" && Dh(w), a(w, O));
      }
      return be;
    }
    var Ac = J0(!0), eC = J0(!1);
    function ux(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = as(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = as(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function ox(e, t) {
      for (var a = e.child; a !== null; )
        XD(a, t), a = a.sibling;
    }
    var Jy = Tu(null), eg;
    eg = {};
    var kh = null, Hc = null, tg = null, bh = !1;
    function _h() {
      kh = null, Hc = null, tg = null, bh = !1;
    }
    function tC() {
      bh = !0;
    }
    function nC() {
      bh = !1;
    }
    function rC(e, t, a) {
      rr(Jy, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== eg && S("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = eg;
    }
    function ng(e, t) {
      var a = Jy.current;
      nr(Jy, t), e._currentValue = a;
    }
    function rg(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (El(i.childLanes, t) ? u !== null && !El(u.childLanes, t) && (u.childLanes = Re(u.childLanes, t)) : (i.childLanes = Re(i.childLanes, t), u !== null && (u.childLanes = Re(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && S("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function sx(e, t, a) {
      cx(e, t, a);
    }
    function cx(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === ce) {
                var p = To(a), v = Nl(nt, p);
                v.tag = Mh;
                var m = i.updateQueue;
                if (m !== null) {
                  var y = m.shared, R = y.pending;
                  R === null ? v.next = v : (v.next = R.next, R.next = v), y.pending = v;
                }
              }
              i.lanes = Re(i.lanes, a);
              var E = i.alternate;
              E !== null && (E.lanes = Re(E.lanes, a)), rg(i.return, a, e), s.lanes = Re(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === Cn)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === Gt) {
          var b = i.return;
          if (b === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          b.lanes = Re(b.lanes, a);
          var L = b.alternate;
          L !== null && (L.lanes = Re(L.lanes, a)), rg(b, a, e), u = i.sibling;
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
            var M = u.sibling;
            if (M !== null) {
              M.return = u.return, u = M;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function Fc(e, t) {
      kh = e, Hc = null, tg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (Zn(a.lanes, t) && lp(), a.firstContext = null);
      }
    }
    function Kt(e) {
      bh && S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (tg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Hc === null) {
          if (kh === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Hc = a, kh.dependencies = {
            lanes: U,
            firstContext: a
          };
        } else
          Hc = Hc.next = a;
      }
      return t;
    }
    var qo = null;
    function ag(e) {
      qo === null ? qo = [e] : qo.push(e);
    }
    function fx() {
      if (qo !== null) {
        for (var e = 0; e < qo.length; e++) {
          var t = qo[e], a = t.interleaved;
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
        qo = null;
      }
    }
    function aC(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, ag(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Lh(e, i);
    }
    function dx(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, ag(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function px(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, ag(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Lh(e, i);
    }
    function Br(e, t) {
      return Lh(e, t);
    }
    var vx = Lh;
    function Lh(e, t) {
      e.lanes = Re(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = Re(a.lanes, t)), a === null && (e.flags & (Et | Or)) !== ue && eT(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = Re(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = Re(a.childLanes, t) : (u.flags & (Et | Or)) !== ue && eT(e), i = u, u = u.return;
      if (i.tag === ne) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var iC = 0, lC = 1, Mh = 2, ig = 3, Oh = !1, lg, Nh;
    lg = !1, Nh = null;
    function ug(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: U
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function uC(e, t) {
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
    function Nl(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: iC,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Du(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (Nh === u && !lg && (S("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), lg = !0), dD()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, vx(e, a);
      } else
        return px(e, u, t, a);
    }
    function zh(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (ad(a)) {
          var s = u.lanes;
          s = ld(s, e.pendingLanes);
          var f = Re(s, a);
          u.lanes = f, cc(e, f);
        }
      }
    }
    function og(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var u = i.updateQueue;
        if (a === u) {
          var s = null, f = null, p = a.firstBaseUpdate;
          if (p !== null) {
            var v = p;
            do {
              var m = {
                eventTime: v.eventTime,
                lane: v.lane,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null
              };
              f === null ? s = f = m : (f.next = m, f = m), v = v.next;
            } while (v !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = {
            baseState: u.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
            shared: u.shared,
            effects: u.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var y = a.lastBaseUpdate;
      y === null ? a.firstBaseUpdate = t : y.next = t, a.lastBaseUpdate = t;
    }
    function hx(e, t, a, i, u, s) {
      switch (a.tag) {
        case lC: {
          var f = a.payload;
          if (typeof f == "function") {
            tC();
            var p = f.call(s, i, u);
            {
              if (e.mode & Ke) {
                dt(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  dt(!1);
                }
              }
              nC();
            }
            return p;
          }
          return f;
        }
        case ig:
          e.flags = e.flags & -65537 | le;
        // Intentional fallthrough
        case iC: {
          var v = a.payload, m;
          if (typeof v == "function") {
            tC(), m = v.call(s, i, u);
            {
              if (e.mode & Ke) {
                dt(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  dt(!1);
                }
              }
              nC();
            }
          } else
            m = v;
          return m == null ? i : Me({}, i, m);
        }
        case Mh:
          return Oh = !0, i;
      }
      return i;
    }
    function Uh(e, t, a, i) {
      var u = e.updateQueue;
      Oh = !1, Nh = u.shared;
      var s = u.firstBaseUpdate, f = u.lastBaseUpdate, p = u.shared.pending;
      if (p !== null) {
        u.shared.pending = null;
        var v = p, m = v.next;
        v.next = null, f === null ? s = m : f.next = m, f = v;
        var y = e.alternate;
        if (y !== null) {
          var R = y.updateQueue, E = R.lastBaseUpdate;
          E !== f && (E === null ? R.firstBaseUpdate = m : E.next = m, R.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var b = u.baseState, L = U, M = null, Q = null, se = null, re = s;
        do {
          var Ae = re.lane, be = re.eventTime;
          if (El(i, Ae)) {
            if (se !== null) {
              var O = {
                eventTime: be,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Fe,
                tag: re.tag,
                payload: re.payload,
                callback: re.callback,
                next: null
              };
              se = se.next = O;
            }
            b = hx(e, u, re, b, t, a);
            var D = re.callback;
            if (D !== null && // If the update was already committed, we should not queue its
            // callback again.
            re.lane !== Fe) {
              e.flags |= rt;
              var V = u.effects;
              V === null ? u.effects = [re] : V.push(re);
            }
          } else {
            var w = {
              eventTime: be,
              lane: Ae,
              tag: re.tag,
              payload: re.payload,
              callback: re.callback,
              next: null
            };
            se === null ? (Q = se = w, M = b) : se = se.next = w, L = Re(L, Ae);
          }
          if (re = re.next, re === null) {
            if (p = u.shared.pending, p === null)
              break;
            var X = p, I = X.next;
            X.next = null, re = I, u.lastBaseUpdate = X, u.shared.pending = null;
          }
        } while (!0);
        se === null && (M = b), u.baseState = M, u.firstBaseUpdate = Q, u.lastBaseUpdate = se;
        var me = u.shared.interleaved;
        if (me !== null) {
          var Ee = me;
          do
            L = Re(L, Ee.lane), Ee = Ee.next;
          while (Ee !== me);
        } else s === null && (u.shared.lanes = U);
        gp(L), e.lanes = L, e.memoizedState = b;
      }
      Nh = null;
    }
    function mx(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function oC() {
      Oh = !1;
    }
    function Ah() {
      return Oh;
    }
    function sC(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, mx(f, a));
        }
    }
    var Id = {}, ku = Tu(Id), Gd = Tu(Id), Hh = Tu(Id);
    function Fh(e) {
      if (e === Id)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function cC() {
      var e = Fh(Hh.current);
      return e;
    }
    function sg(e, t) {
      rr(Hh, t, e), rr(Gd, e, e), rr(ku, Id, e);
      var a = N1(t);
      nr(ku, e), rr(ku, a, e);
    }
    function jc(e) {
      nr(ku, e), nr(Gd, e), nr(Hh, e);
    }
    function cg() {
      var e = Fh(ku.current);
      return e;
    }
    function fC(e) {
      Fh(Hh.current);
      var t = Fh(ku.current), a = z1(t, e.type);
      t !== a && (rr(Gd, e, e), rr(ku, a, e));
    }
    function fg(e) {
      Gd.current === e && (nr(ku, e), nr(Gd, e));
    }
    var yx = 0, dC = 1, pC = 1, Wd = 2, Za = Tu(yx);
    function dg(e, t) {
      return (e & t) !== 0;
    }
    function Vc(e) {
      return e & dC;
    }
    function pg(e, t) {
      return e & dC | t;
    }
    function gx(e, t) {
      return e | t;
    }
    function bu(e, t) {
      rr(Za, t, e);
    }
    function Bc(e) {
      nr(Za, e);
    }
    function Sx(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function jh(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === Oe) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || L0(i) || My(i))
              return t;
          }
        } else if (t.tag === Bt && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & le) !== ue;
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
    var Pr = (
      /*   */
      0
    ), ln = (
      /* */
      1
    ), zi = (
      /*  */
      2
    ), un = (
      /*    */
      4
    ), Mn = (
      /*   */
      8
    ), vg = [];
    function hg() {
      for (var e = 0; e < vg.length; e++) {
        var t = vg[e];
        t._workInProgressVersionPrimary = null;
      }
      vg.length = 0;
    }
    function Cx(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var W = N.ReactCurrentDispatcher, Xd = N.ReactCurrentBatchConfig, mg, Pc;
    mg = /* @__PURE__ */ new Set();
    var Ko = U, Ze = null, on = null, sn = null, Vh = !1, qd = !1, Kd = 0, Ex = 0, Tx = 25, z = null, _a = null, _u = -1, yg = !1;
    function Qe() {
      {
        var e = z;
        _a === null ? _a = [e] : _a.push(e);
      }
    }
    function B() {
      {
        var e = z;
        _a !== null && (_u++, _a[_u] !== e && Rx(e));
      }
    }
    function Yc(e) {
      e != null && !en(e) && S("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", z, typeof e);
    }
    function Rx(e) {
      {
        var t = Te(Ze);
        if (!mg.has(t) && (mg.add(t), _a !== null)) {
          for (var a = "", i = 30, u = 0; u <= _u; u++) {
            for (var s = _a[u], f = u === _u ? e : s, p = u + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          S(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function ar() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function gg(e, t) {
      if (yg)
        return !1;
      if (t === null)
        return S("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", z), !1;
      e.length !== t.length && S(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, z, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!F(e[a], t[a]))
          return !1;
      return !0;
    }
    function $c(e, t, a, i, u, s) {
      Ko = s, Ze = t, _a = e !== null ? e._debugHookTypes : null, _u = -1, yg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = U, e !== null && e.memoizedState !== null ? W.current = UC : _a !== null ? W.current = zC : W.current = NC;
      var f = a(i, u);
      if (qd) {
        var p = 0;
        do {
          if (qd = !1, Kd = 0, p >= Tx)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, yg = !1, on = null, sn = null, t.updateQueue = null, _u = -1, W.current = AC, f = a(i, u);
        } while (qd);
      }
      W.current = Jh, t._debugHookTypes = _a;
      var v = on !== null && on.next !== null;
      if (Ko = U, Ze = null, on = null, sn = null, z = null, _a = null, _u = -1, e !== null && (e.flags & zt) !== (t.flags & zt) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & xe) !== oe && S("Internal React error: Expected static flag was missing. Please notify the React team."), Vh = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Qc() {
      var e = Kd !== 0;
      return Kd = 0, e;
    }
    function vC(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Ve) !== oe ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = Ro(e.lanes, a);
    }
    function hC() {
      if (W.current = Jh, Vh) {
        for (var e = Ze.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Vh = !1;
      }
      Ko = U, Ze = null, on = null, sn = null, _a = null, _u = -1, z = null, bC = !1, qd = !1, Kd = 0;
    }
    function Ui() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return sn === null ? Ze.memoizedState = sn = e : sn = sn.next = e, sn;
    }
    function La() {
      var e;
      if (on === null) {
        var t = Ze.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = on.next;
      var a;
      if (sn === null ? a = Ze.memoizedState : a = sn.next, a !== null)
        sn = a, a = sn.next, on = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        on = e;
        var i = {
          memoizedState: on.memoizedState,
          baseState: on.baseState,
          baseQueue: on.baseQueue,
          queue: on.queue,
          next: null
        };
        sn === null ? Ze.memoizedState = sn = i : sn = sn.next = i;
      }
      return sn;
    }
    function mC() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function Sg(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Cg(e, t, a) {
      var i = Ui(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: U,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = kx.bind(null, Ze, s);
      return [i.memoizedState, f];
    }
    function Eg(e, t, a) {
      var i = La(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = on, f = s.baseQueue, p = u.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, m = p.next;
          f.next = m, p.next = v;
        }
        s.baseQueue !== f && S("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, u.pending = null;
      }
      if (f !== null) {
        var y = f.next, R = s.baseState, E = null, b = null, L = null, M = y;
        do {
          var Q = M.lane;
          if (El(Ko, Q)) {
            if (L !== null) {
              var re = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Fe,
                action: M.action,
                hasEagerState: M.hasEagerState,
                eagerState: M.eagerState,
                next: null
              };
              L = L.next = re;
            }
            if (M.hasEagerState)
              R = M.eagerState;
            else {
              var Ae = M.action;
              R = e(R, Ae);
            }
          } else {
            var se = {
              lane: Q,
              action: M.action,
              hasEagerState: M.hasEagerState,
              eagerState: M.eagerState,
              next: null
            };
            L === null ? (b = L = se, E = R) : L = L.next = se, Ze.lanes = Re(Ze.lanes, Q), gp(Q);
          }
          M = M.next;
        } while (M !== null && M !== y);
        L === null ? E = R : L.next = b, F(R, i.memoizedState) || lp(), i.memoizedState = R, i.baseState = E, i.baseQueue = L, u.lastRenderedState = R;
      }
      var be = u.interleaved;
      if (be !== null) {
        var w = be;
        do {
          var O = w.lane;
          Ze.lanes = Re(Ze.lanes, O), gp(O), w = w.next;
        } while (w !== be);
      } else f === null && (u.lanes = U);
      var D = u.dispatch;
      return [i.memoizedState, D];
    }
    function Tg(e, t, a) {
      var i = La(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = u.dispatch, f = u.pending, p = i.memoizedState;
      if (f !== null) {
        u.pending = null;
        var v = f.next, m = v;
        do {
          var y = m.action;
          p = e(p, y), m = m.next;
        } while (m !== v);
        F(p, i.memoizedState) || lp(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function Bk(e, t, a) {
    }
    function Pk(e, t, a) {
    }
    function Rg(e, t, a) {
      var i = Ze, u = Ui(), s, f = Ln();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Pc || s !== a() && (S("The result of getServerSnapshot should be cached to avoid an infinite loop"), Pc = !0);
      } else {
        if (s = t(), !Pc) {
          var p = t();
          F(s, p) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Pc = !0);
        }
        var v = gm();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        oc(v, Ko) || yC(i, t, s);
      }
      u.memoizedState = s;
      var m = {
        value: s,
        getSnapshot: t
      };
      return u.queue = m, Qh(SC.bind(null, i, m, e), [e]), i.flags |= Gn, Zd(ln | Mn, gC.bind(null, i, m, s, t), void 0, null), s;
    }
    function Bh(e, t, a) {
      var i = Ze, u = La(), s = t();
      if (!Pc) {
        var f = t();
        F(s, f) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Pc = !0);
      }
      var p = u.memoizedState, v = !F(p, s);
      v && (u.memoizedState = s, lp());
      var m = u.queue;
      if (ep(SC.bind(null, i, m, e), [e]), m.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      sn !== null && sn.memoizedState.tag & ln) {
        i.flags |= Gn, Zd(ln | Mn, gC.bind(null, i, m, s, t), void 0, null);
        var y = gm();
        if (y === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        oc(y, Ko) || yC(i, t, s);
      }
      return s;
    }
    function yC(e, t, a) {
      e.flags |= lu;
      var i = {
        getSnapshot: t,
        value: a
      }, u = Ze.updateQueue;
      if (u === null)
        u = mC(), Ze.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function gC(e, t, a, i) {
      t.value = a, t.getSnapshot = i, CC(t) && EC(e);
    }
    function SC(e, t, a) {
      var i = function() {
        CC(t) && EC(e);
      };
      return a(i);
    }
    function CC(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !F(a, i);
      } catch {
        return !0;
      }
    }
    function EC(e) {
      var t = Br(e, he);
      t !== null && pn(t, e, he, nt);
    }
    function Ph(e) {
      var t = Ui();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: U,
        dispatch: null,
        lastRenderedReducer: Sg,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = bx.bind(null, Ze, a);
      return [t.memoizedState, i];
    }
    function xg(e) {
      return Eg(Sg);
    }
    function wg(e) {
      return Tg(Sg);
    }
    function Zd(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = Ze.updateQueue;
      if (s === null)
        s = mC(), Ze.updateQueue = s, s.lastEffect = u.next = u;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = u.next = u;
        else {
          var p = f.next;
          f.next = u, u.next = p, s.lastEffect = u;
        }
      }
      return u;
    }
    function Dg(e) {
      var t = Ui();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function Yh(e) {
      var t = La();
      return t.memoizedState;
    }
    function Jd(e, t, a, i) {
      var u = Ui(), s = i === void 0 ? null : i;
      Ze.flags |= e, u.memoizedState = Zd(ln | t, a, void 0, s);
    }
    function $h(e, t, a, i) {
      var u = La(), s = i === void 0 ? null : i, f = void 0;
      if (on !== null) {
        var p = on.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (gg(s, v)) {
            u.memoizedState = Zd(t, a, f, s);
            return;
          }
        }
      }
      Ze.flags |= e, u.memoizedState = Zd(ln | t, a, f, s);
    }
    function Qh(e, t) {
      return (Ze.mode & Ve) !== oe ? Jd(ya | Gn | Us, Mn, e, t) : Jd(Gn | Us, Mn, e, t);
    }
    function ep(e, t) {
      return $h(Gn, Mn, e, t);
    }
    function kg(e, t) {
      return Jd(Ne, zi, e, t);
    }
    function Ih(e, t) {
      return $h(Ne, zi, e, t);
    }
    function bg(e, t) {
      var a = Ne;
      return a |= Va, (Ze.mode & Ve) !== oe && (a |= mi), Jd(a, un, e, t);
    }
    function Gh(e, t) {
      return $h(Ne, un, e, t);
    }
    function TC(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || S("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var s = e();
        return u.current = s, function() {
          u.current = null;
        };
      }
    }
    function _g(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = Ne;
      return u |= Va, (Ze.mode & Ve) !== oe && (u |= mi), Jd(u, un, TC.bind(null, t, e), i);
    }
    function Wh(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return $h(Ne, un, TC.bind(null, t, e), i);
    }
    function xx(e, t) {
    }
    var Xh = xx;
    function Lg(e, t) {
      var a = Ui(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function qh(e, t) {
      var a = La(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (gg(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Mg(e, t) {
      var a = Ui(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function Kh(e, t) {
      var a = La(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (gg(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function Og(e) {
      var t = Ui();
      return t.memoizedState = e, e;
    }
    function RC(e) {
      var t = La(), a = on, i = a.memoizedState;
      return wC(t, i, e);
    }
    function xC(e) {
      var t = La();
      if (on === null)
        return t.memoizedState = e, e;
      var a = on.memoizedState;
      return wC(t, a, e);
    }
    function wC(e, t, a) {
      var i = !nd(Ko);
      if (i) {
        if (!F(a, t)) {
          var u = id();
          Ze.lanes = Re(Ze.lanes, u), gp(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, lp()), e.memoizedState = a, a;
    }
    function wx(e, t, a) {
      var i = Fr();
      Ht(bv(i, Ea)), e(!0);
      var u = Xd.transition;
      Xd.transition = {};
      var s = Xd.transition;
      Xd.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Ht(i), Xd.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && bt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function Ng() {
      var e = Ph(!1), t = e[0], a = e[1], i = wx.bind(null, a), u = Ui();
      return u.memoizedState = i, [t, i];
    }
    function DC() {
      var e = xg(), t = e[0], a = La(), i = a.memoizedState;
      return [t, i];
    }
    function kC() {
      var e = wg(), t = e[0], a = La(), i = a.memoizedState;
      return [t, i];
    }
    var bC = !1;
    function Dx() {
      return bC;
    }
    function zg() {
      var e = Ui(), t = gm(), a = t.identifierPrefix, i;
      if (Ln()) {
        var u = YR();
        i = ":" + a + "R" + u;
        var s = Kd++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = Ex++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function Zh() {
      var e = La(), t = e.memoizedState;
      return t;
    }
    function kx(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = zu(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (_C(e))
        LC(t, u);
      else {
        var s = aC(e, t, u, i);
        if (s !== null) {
          var f = Cr();
          pn(s, e, i, f), MC(s, t, i);
        }
      }
      OC(e, i);
    }
    function bx(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = zu(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (_C(e))
        LC(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === U && (s === null || s.lanes === U)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = W.current, W.current = Ja;
            try {
              var v = t.lastRenderedState, m = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = m, F(m, v)) {
                dx(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              W.current = p;
            }
          }
        }
        var y = aC(e, t, u, i);
        if (y !== null) {
          var R = Cr();
          pn(y, e, i, R), MC(y, t, i);
        }
      }
      OC(e, i);
    }
    function _C(e) {
      var t = e.alternate;
      return e === Ze || t !== null && t === Ze;
    }
    function LC(e, t) {
      qd = Vh = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function MC(e, t, a) {
      if (ad(a)) {
        var i = t.lanes;
        i = ld(i, e.pendingLanes);
        var u = Re(i, a);
        t.lanes = u, cc(e, u);
      }
    }
    function OC(e, t, a) {
      po(e, t);
    }
    var Jh = {
      readContext: Kt,
      useCallback: ar,
      useContext: ar,
      useEffect: ar,
      useImperativeHandle: ar,
      useInsertionEffect: ar,
      useLayoutEffect: ar,
      useMemo: ar,
      useReducer: ar,
      useRef: ar,
      useState: ar,
      useDebugValue: ar,
      useDeferredValue: ar,
      useTransition: ar,
      useMutableSource: ar,
      useSyncExternalStore: ar,
      useId: ar,
      unstable_isNewReconciler: P
    }, NC = null, zC = null, UC = null, AC = null, Ai = null, Ja = null, em = null;
    {
      var Ug = function() {
        S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, Ce = function() {
        S("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      NC = {
        readContext: function(e) {
          return Kt(e);
        },
        useCallback: function(e, t) {
          return z = "useCallback", Qe(), Yc(t), Lg(e, t);
        },
        useContext: function(e) {
          return z = "useContext", Qe(), Kt(e);
        },
        useEffect: function(e, t) {
          return z = "useEffect", Qe(), Yc(t), Qh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return z = "useImperativeHandle", Qe(), Yc(a), _g(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return z = "useInsertionEffect", Qe(), Yc(t), kg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return z = "useLayoutEffect", Qe(), Yc(t), bg(e, t);
        },
        useMemo: function(e, t) {
          z = "useMemo", Qe(), Yc(t);
          var a = W.current;
          W.current = Ai;
          try {
            return Mg(e, t);
          } finally {
            W.current = a;
          }
        },
        useReducer: function(e, t, a) {
          z = "useReducer", Qe();
          var i = W.current;
          W.current = Ai;
          try {
            return Cg(e, t, a);
          } finally {
            W.current = i;
          }
        },
        useRef: function(e) {
          return z = "useRef", Qe(), Dg(e);
        },
        useState: function(e) {
          z = "useState", Qe();
          var t = W.current;
          W.current = Ai;
          try {
            return Ph(e);
          } finally {
            W.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return z = "useDebugValue", Qe(), void 0;
        },
        useDeferredValue: function(e) {
          return z = "useDeferredValue", Qe(), Og(e);
        },
        useTransition: function() {
          return z = "useTransition", Qe(), Ng();
        },
        useMutableSource: function(e, t, a) {
          return z = "useMutableSource", Qe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return z = "useSyncExternalStore", Qe(), Rg(e, t, a);
        },
        useId: function() {
          return z = "useId", Qe(), zg();
        },
        unstable_isNewReconciler: P
      }, zC = {
        readContext: function(e) {
          return Kt(e);
        },
        useCallback: function(e, t) {
          return z = "useCallback", B(), Lg(e, t);
        },
        useContext: function(e) {
          return z = "useContext", B(), Kt(e);
        },
        useEffect: function(e, t) {
          return z = "useEffect", B(), Qh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return z = "useImperativeHandle", B(), _g(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return z = "useInsertionEffect", B(), kg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return z = "useLayoutEffect", B(), bg(e, t);
        },
        useMemo: function(e, t) {
          z = "useMemo", B();
          var a = W.current;
          W.current = Ai;
          try {
            return Mg(e, t);
          } finally {
            W.current = a;
          }
        },
        useReducer: function(e, t, a) {
          z = "useReducer", B();
          var i = W.current;
          W.current = Ai;
          try {
            return Cg(e, t, a);
          } finally {
            W.current = i;
          }
        },
        useRef: function(e) {
          return z = "useRef", B(), Dg(e);
        },
        useState: function(e) {
          z = "useState", B();
          var t = W.current;
          W.current = Ai;
          try {
            return Ph(e);
          } finally {
            W.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return z = "useDebugValue", B(), void 0;
        },
        useDeferredValue: function(e) {
          return z = "useDeferredValue", B(), Og(e);
        },
        useTransition: function() {
          return z = "useTransition", B(), Ng();
        },
        useMutableSource: function(e, t, a) {
          return z = "useMutableSource", B(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return z = "useSyncExternalStore", B(), Rg(e, t, a);
        },
        useId: function() {
          return z = "useId", B(), zg();
        },
        unstable_isNewReconciler: P
      }, UC = {
        readContext: function(e) {
          return Kt(e);
        },
        useCallback: function(e, t) {
          return z = "useCallback", B(), qh(e, t);
        },
        useContext: function(e) {
          return z = "useContext", B(), Kt(e);
        },
        useEffect: function(e, t) {
          return z = "useEffect", B(), ep(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return z = "useImperativeHandle", B(), Wh(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return z = "useInsertionEffect", B(), Ih(e, t);
        },
        useLayoutEffect: function(e, t) {
          return z = "useLayoutEffect", B(), Gh(e, t);
        },
        useMemo: function(e, t) {
          z = "useMemo", B();
          var a = W.current;
          W.current = Ja;
          try {
            return Kh(e, t);
          } finally {
            W.current = a;
          }
        },
        useReducer: function(e, t, a) {
          z = "useReducer", B();
          var i = W.current;
          W.current = Ja;
          try {
            return Eg(e, t, a);
          } finally {
            W.current = i;
          }
        },
        useRef: function(e) {
          return z = "useRef", B(), Yh();
        },
        useState: function(e) {
          z = "useState", B();
          var t = W.current;
          W.current = Ja;
          try {
            return xg(e);
          } finally {
            W.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return z = "useDebugValue", B(), Xh();
        },
        useDeferredValue: function(e) {
          return z = "useDeferredValue", B(), RC(e);
        },
        useTransition: function() {
          return z = "useTransition", B(), DC();
        },
        useMutableSource: function(e, t, a) {
          return z = "useMutableSource", B(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return z = "useSyncExternalStore", B(), Bh(e, t);
        },
        useId: function() {
          return z = "useId", B(), Zh();
        },
        unstable_isNewReconciler: P
      }, AC = {
        readContext: function(e) {
          return Kt(e);
        },
        useCallback: function(e, t) {
          return z = "useCallback", B(), qh(e, t);
        },
        useContext: function(e) {
          return z = "useContext", B(), Kt(e);
        },
        useEffect: function(e, t) {
          return z = "useEffect", B(), ep(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return z = "useImperativeHandle", B(), Wh(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return z = "useInsertionEffect", B(), Ih(e, t);
        },
        useLayoutEffect: function(e, t) {
          return z = "useLayoutEffect", B(), Gh(e, t);
        },
        useMemo: function(e, t) {
          z = "useMemo", B();
          var a = W.current;
          W.current = em;
          try {
            return Kh(e, t);
          } finally {
            W.current = a;
          }
        },
        useReducer: function(e, t, a) {
          z = "useReducer", B();
          var i = W.current;
          W.current = em;
          try {
            return Tg(e, t, a);
          } finally {
            W.current = i;
          }
        },
        useRef: function(e) {
          return z = "useRef", B(), Yh();
        },
        useState: function(e) {
          z = "useState", B();
          var t = W.current;
          W.current = em;
          try {
            return wg(e);
          } finally {
            W.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return z = "useDebugValue", B(), Xh();
        },
        useDeferredValue: function(e) {
          return z = "useDeferredValue", B(), xC(e);
        },
        useTransition: function() {
          return z = "useTransition", B(), kC();
        },
        useMutableSource: function(e, t, a) {
          return z = "useMutableSource", B(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return z = "useSyncExternalStore", B(), Bh(e, t);
        },
        useId: function() {
          return z = "useId", B(), Zh();
        },
        unstable_isNewReconciler: P
      }, Ai = {
        readContext: function(e) {
          return Ug(), Kt(e);
        },
        useCallback: function(e, t) {
          return z = "useCallback", Ce(), Qe(), Lg(e, t);
        },
        useContext: function(e) {
          return z = "useContext", Ce(), Qe(), Kt(e);
        },
        useEffect: function(e, t) {
          return z = "useEffect", Ce(), Qe(), Qh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return z = "useImperativeHandle", Ce(), Qe(), _g(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return z = "useInsertionEffect", Ce(), Qe(), kg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return z = "useLayoutEffect", Ce(), Qe(), bg(e, t);
        },
        useMemo: function(e, t) {
          z = "useMemo", Ce(), Qe();
          var a = W.current;
          W.current = Ai;
          try {
            return Mg(e, t);
          } finally {
            W.current = a;
          }
        },
        useReducer: function(e, t, a) {
          z = "useReducer", Ce(), Qe();
          var i = W.current;
          W.current = Ai;
          try {
            return Cg(e, t, a);
          } finally {
            W.current = i;
          }
        },
        useRef: function(e) {
          return z = "useRef", Ce(), Qe(), Dg(e);
        },
        useState: function(e) {
          z = "useState", Ce(), Qe();
          var t = W.current;
          W.current = Ai;
          try {
            return Ph(e);
          } finally {
            W.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return z = "useDebugValue", Ce(), Qe(), void 0;
        },
        useDeferredValue: function(e) {
          return z = "useDeferredValue", Ce(), Qe(), Og(e);
        },
        useTransition: function() {
          return z = "useTransition", Ce(), Qe(), Ng();
        },
        useMutableSource: function(e, t, a) {
          return z = "useMutableSource", Ce(), Qe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return z = "useSyncExternalStore", Ce(), Qe(), Rg(e, t, a);
        },
        useId: function() {
          return z = "useId", Ce(), Qe(), zg();
        },
        unstable_isNewReconciler: P
      }, Ja = {
        readContext: function(e) {
          return Ug(), Kt(e);
        },
        useCallback: function(e, t) {
          return z = "useCallback", Ce(), B(), qh(e, t);
        },
        useContext: function(e) {
          return z = "useContext", Ce(), B(), Kt(e);
        },
        useEffect: function(e, t) {
          return z = "useEffect", Ce(), B(), ep(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return z = "useImperativeHandle", Ce(), B(), Wh(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return z = "useInsertionEffect", Ce(), B(), Ih(e, t);
        },
        useLayoutEffect: function(e, t) {
          return z = "useLayoutEffect", Ce(), B(), Gh(e, t);
        },
        useMemo: function(e, t) {
          z = "useMemo", Ce(), B();
          var a = W.current;
          W.current = Ja;
          try {
            return Kh(e, t);
          } finally {
            W.current = a;
          }
        },
        useReducer: function(e, t, a) {
          z = "useReducer", Ce(), B();
          var i = W.current;
          W.current = Ja;
          try {
            return Eg(e, t, a);
          } finally {
            W.current = i;
          }
        },
        useRef: function(e) {
          return z = "useRef", Ce(), B(), Yh();
        },
        useState: function(e) {
          z = "useState", Ce(), B();
          var t = W.current;
          W.current = Ja;
          try {
            return xg(e);
          } finally {
            W.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return z = "useDebugValue", Ce(), B(), Xh();
        },
        useDeferredValue: function(e) {
          return z = "useDeferredValue", Ce(), B(), RC(e);
        },
        useTransition: function() {
          return z = "useTransition", Ce(), B(), DC();
        },
        useMutableSource: function(e, t, a) {
          return z = "useMutableSource", Ce(), B(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return z = "useSyncExternalStore", Ce(), B(), Bh(e, t);
        },
        useId: function() {
          return z = "useId", Ce(), B(), Zh();
        },
        unstable_isNewReconciler: P
      }, em = {
        readContext: function(e) {
          return Ug(), Kt(e);
        },
        useCallback: function(e, t) {
          return z = "useCallback", Ce(), B(), qh(e, t);
        },
        useContext: function(e) {
          return z = "useContext", Ce(), B(), Kt(e);
        },
        useEffect: function(e, t) {
          return z = "useEffect", Ce(), B(), ep(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return z = "useImperativeHandle", Ce(), B(), Wh(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return z = "useInsertionEffect", Ce(), B(), Ih(e, t);
        },
        useLayoutEffect: function(e, t) {
          return z = "useLayoutEffect", Ce(), B(), Gh(e, t);
        },
        useMemo: function(e, t) {
          z = "useMemo", Ce(), B();
          var a = W.current;
          W.current = Ja;
          try {
            return Kh(e, t);
          } finally {
            W.current = a;
          }
        },
        useReducer: function(e, t, a) {
          z = "useReducer", Ce(), B();
          var i = W.current;
          W.current = Ja;
          try {
            return Tg(e, t, a);
          } finally {
            W.current = i;
          }
        },
        useRef: function(e) {
          return z = "useRef", Ce(), B(), Yh();
        },
        useState: function(e) {
          z = "useState", Ce(), B();
          var t = W.current;
          W.current = Ja;
          try {
            return wg(e);
          } finally {
            W.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return z = "useDebugValue", Ce(), B(), Xh();
        },
        useDeferredValue: function(e) {
          return z = "useDeferredValue", Ce(), B(), xC(e);
        },
        useTransition: function() {
          return z = "useTransition", Ce(), B(), kC();
        },
        useMutableSource: function(e, t, a) {
          return z = "useMutableSource", Ce(), B(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return z = "useSyncExternalStore", Ce(), B(), Bh(e, t);
        },
        useId: function() {
          return z = "useId", Ce(), B(), Zh();
        },
        unstable_isNewReconciler: P
      };
    }
    var Lu = _e.unstable_now, HC = 0, tm = -1, tp = -1, nm = -1, Ag = !1, rm = !1;
    function FC() {
      return Ag;
    }
    function _x() {
      rm = !0;
    }
    function Lx() {
      Ag = !1, rm = !1;
    }
    function Mx() {
      Ag = rm, rm = !1;
    }
    function jC() {
      return HC;
    }
    function VC() {
      HC = Lu();
    }
    function Hg(e) {
      tp = Lu(), e.actualStartTime < 0 && (e.actualStartTime = Lu());
    }
    function BC(e) {
      tp = -1;
    }
    function am(e, t) {
      if (tp >= 0) {
        var a = Lu() - tp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), tp = -1;
      }
    }
    function Hi(e) {
      if (tm >= 0) {
        var t = Lu() - tm;
        tm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case ne:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case it:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function Fg(e) {
      if (nm >= 0) {
        var t = Lu() - nm;
        nm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case ne:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case it:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Fi() {
      tm = Lu();
    }
    function jg() {
      nm = Lu();
    }
    function Vg(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function ei(e, t) {
      if (e && e.defaultProps) {
        var a = Me({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var Bg = {}, Pg, Yg, $g, Qg, Ig, PC, im, Gg, Wg, Xg, np;
    {
      Pg = /* @__PURE__ */ new Set(), Yg = /* @__PURE__ */ new Set(), $g = /* @__PURE__ */ new Set(), Qg = /* @__PURE__ */ new Set(), Gg = /* @__PURE__ */ new Set(), Ig = /* @__PURE__ */ new Set(), Wg = /* @__PURE__ */ new Set(), Xg = /* @__PURE__ */ new Set(), np = /* @__PURE__ */ new Set();
      var YC = /* @__PURE__ */ new Set();
      im = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          YC.has(a) || (YC.add(a), S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, PC = function(e, t) {
        if (t === void 0) {
          var a = We(e) || "Component";
          Ig.has(a) || (Ig.add(a), S("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(Bg, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(Bg);
    }
    function qg(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & Ke) {
          dt(!0);
          try {
            s = a(i, u);
          } finally {
            dt(!1);
          }
        }
        PC(t, s);
      }
      var f = s == null ? u : Me({}, u, s);
      if (e.memoizedState = f, e.lanes === U) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var Kg = {
      isMounted: dv,
      enqueueSetState: function(e, t, a) {
        var i = iu(e), u = Cr(), s = zu(i), f = Nl(u, s);
        f.payload = t, a != null && (im(a, "setState"), f.callback = a);
        var p = Du(i, f, s);
        p !== null && (pn(p, i, s, u), zh(p, i, s)), po(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = iu(e), u = Cr(), s = zu(i), f = Nl(u, s);
        f.tag = lC, f.payload = t, a != null && (im(a, "replaceState"), f.callback = a);
        var p = Du(i, f, s);
        p !== null && (pn(p, i, s, u), zh(p, i, s)), po(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = iu(e), i = Cr(), u = zu(a), s = Nl(i, u);
        s.tag = Mh, t != null && (im(t, "forceUpdate"), s.callback = t);
        var f = Du(a, s, u);
        f !== null && (pn(f, a, u, i), zh(f, a, u)), Ps(a, u);
      }
    };
    function $C(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & Ke) {
            dt(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              dt(!1);
            }
          }
          v === void 0 && S("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", We(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !J(a, i) || !J(u, s) : !0;
    }
    function Ox(e, t, a) {
      var i = e.stateNode;
      {
        var u = We(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? S("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : S("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && S("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && S("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && S("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && S("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !np.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Ke) === oe && (np.add(t), S(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !np.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Ke) === oe && (np.add(t), S(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), i.contextTypes && S("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !Wg.has(t) && (Wg.add(t), S("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && S("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && S("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", We(t) || "A pure component"), typeof i.componentDidUnmount == "function" && S("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && S("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && S("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && S("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && S("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && S("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !$g.has(t) && ($g.add(t), S("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", We(t))), typeof i.getDerivedStateFromProps == "function" && S("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && S("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && S("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || en(p)) && S("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && S("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function QC(e, t) {
      t.updater = Kg, e.stateNode = t, ul(t, e), t._reactInternalInstance = Bg;
    }
    function IC(e, t, a) {
      var i = !1, u = la, s = la, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === Vu && f._context === void 0
        );
        if (!p && !Xg.has(t)) {
          Xg.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === Ql ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", S("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", We(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = Kt(f);
      else {
        u = Mc(e, t, !0);
        var m = t.contextTypes;
        i = m != null, s = i ? Oc(e, u) : la;
      }
      var y = new t(a, s);
      if (e.mode & Ke) {
        dt(!0);
        try {
          y = new t(a, s);
        } finally {
          dt(!1);
        }
      }
      var R = e.memoizedState = y.state !== null && y.state !== void 0 ? y.state : null;
      QC(e, y);
      {
        if (typeof t.getDerivedStateFromProps == "function" && R === null) {
          var E = We(t) || "Component";
          Yg.has(E) || (Yg.add(E), S("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", E, y.state === null ? "null" : "undefined", E));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof y.getSnapshotBeforeUpdate == "function") {
          var b = null, L = null, M = null;
          if (typeof y.componentWillMount == "function" && y.componentWillMount.__suppressDeprecationWarning !== !0 ? b = "componentWillMount" : typeof y.UNSAFE_componentWillMount == "function" && (b = "UNSAFE_componentWillMount"), typeof y.componentWillReceiveProps == "function" && y.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? L = "componentWillReceiveProps" : typeof y.UNSAFE_componentWillReceiveProps == "function" && (L = "UNSAFE_componentWillReceiveProps"), typeof y.componentWillUpdate == "function" && y.componentWillUpdate.__suppressDeprecationWarning !== !0 ? M = "componentWillUpdate" : typeof y.UNSAFE_componentWillUpdate == "function" && (M = "UNSAFE_componentWillUpdate"), b !== null || L !== null || M !== null) {
            var Q = We(t) || "Component", se = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Qg.has(Q) || (Qg.add(Q), S(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, Q, se, b !== null ? `
  ` + b : "", L !== null ? `
  ` + L : "", M !== null ? `
  ` + M : ""));
          }
        }
      }
      return i && U0(e, u, s), y;
    }
    function Nx(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (S("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Te(e) || "Component"), Kg.enqueueReplaceState(t, t.state, null));
    }
    function GC(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Te(e) || "Component";
          Pg.has(s) || (Pg.add(s), S("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        Kg.enqueueReplaceState(t, t.state, null);
      }
    }
    function Zg(e, t, a, i) {
      Ox(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = {}, ug(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = Kt(s);
      else {
        var f = Mc(e, t, !0);
        u.context = Oc(e, f);
      }
      {
        if (u.state === a) {
          var p = We(t) || "Component";
          Gg.has(p) || (Gg.add(p), S("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & Ke && Ka.recordLegacyContextWarning(e, u), Ka.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (qg(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (Nx(e, u), Uh(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var m = Ne;
        m |= Va, (e.mode & Ve) !== oe && (m |= mi), e.flags |= m;
      }
    }
    function zx(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = la;
      if (typeof p == "object" && p !== null)
        v = Kt(p);
      else {
        var m = Mc(e, t, !0);
        v = Oc(e, m);
      }
      var y = t.getDerivedStateFromProps, R = typeof y == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !R && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && GC(e, u, a, v), oC();
      var E = e.memoizedState, b = u.state = E;
      if (Uh(e, a, u, i), b = e.memoizedState, s === a && E === b && !mh() && !Ah()) {
        if (typeof u.componentDidMount == "function") {
          var L = Ne;
          L |= Va, (e.mode & Ve) !== oe && (L |= mi), e.flags |= L;
        }
        return !1;
      }
      typeof y == "function" && (qg(e, t, y, a), b = e.memoizedState);
      var M = Ah() || $C(e, t, s, a, E, b, v);
      if (M) {
        if (!R && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var Q = Ne;
          Q |= Va, (e.mode & Ve) !== oe && (Q |= mi), e.flags |= Q;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var se = Ne;
          se |= Va, (e.mode & Ve) !== oe && (se |= mi), e.flags |= se;
        }
        e.memoizedProps = a, e.memoizedState = b;
      }
      return u.props = a, u.state = b, u.context = v, M;
    }
    function Ux(e, t, a, i, u) {
      var s = t.stateNode;
      uC(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : ei(t.type, f);
      s.props = p;
      var v = t.pendingProps, m = s.context, y = a.contextType, R = la;
      if (typeof y == "object" && y !== null)
        R = Kt(y);
      else {
        var E = Mc(t, a, !0);
        R = Oc(t, E);
      }
      var b = a.getDerivedStateFromProps, L = typeof b == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !L && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || m !== R) && GC(t, s, i, R), oC();
      var M = t.memoizedState, Q = s.state = M;
      if (Uh(t, i, s, u), Q = t.memoizedState, f === v && M === Q && !mh() && !Ah())
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || M !== e.memoizedState) && (t.flags |= Ne), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || M !== e.memoizedState) && (t.flags |= Yt), !1;
      typeof b == "function" && (qg(t, a, b, i), Q = t.memoizedState);
      var se = Ah() || $C(t, a, p, i, M, Q, R) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      ve;
      return se ? (!L && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, Q, R), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, Q, R)), typeof s.componentDidUpdate == "function" && (t.flags |= Ne), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Yt)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || M !== e.memoizedState) && (t.flags |= Ne), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || M !== e.memoizedState) && (t.flags |= Yt), t.memoizedProps = i, t.memoizedState = Q), s.props = i, s.state = Q, s.context = R, se;
    }
    function Zo(e, t) {
      return {
        value: e,
        source: t,
        stack: ss(t),
        digest: null
      };
    }
    function Jg(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function Ax(e, t) {
      return !0;
    }
    function eS(e, t) {
      try {
        var a = Ax(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === ce)
            return;
          console.error(i);
        }
        var p = u ? Te(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", m;
        if (e.tag === ne)
          m = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var y = Te(e) || "Anonymous";
          m = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + y + ".");
        }
        var R = v + `
` + f + `

` + ("" + m);
        console.error(R);
      } catch (E) {
        setTimeout(function() {
          throw E;
        });
      }
    }
    var Hx = typeof WeakMap == "function" ? WeakMap : Map;
    function WC(e, t, a) {
      var i = Nl(nt, a);
      i.tag = ig, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        _D(u), eS(e, t);
      }, i;
    }
    function tS(e, t, a) {
      var i = Nl(nt, a);
      i.tag = ig;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          iT(e), eS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        iT(e), eS(e, t), typeof u != "function" && kD(this);
        var v = t.value, m = t.stack;
        this.componentDidCatch(v, {
          componentStack: m !== null ? m : ""
        }), typeof u != "function" && (Zn(e.lanes, he) || S("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Te(e) || "Unknown"));
      }), i;
    }
    function XC(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new Hx(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = LD.bind(null, e, t, a);
        Kn && Sp(e, a), t.then(s, s);
      }
    }
    function Fx(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function jx(e, t) {
      var a = e.tag;
      if ((e.mode & xe) === oe && (a === ge || a === Le || a === De)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function qC(e) {
      var t = e;
      do {
        if (t.tag === Oe && Sx(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function KC(e, t, a, i, u) {
      if ((e.mode & xe) === oe) {
        if (e === t)
          e.flags |= Wn;
        else {
          if (e.flags |= le, a.flags |= zs, a.flags &= -52805, a.tag === ce) {
            var s = a.alternate;
            if (s === null)
              a.tag = mt;
            else {
              var f = Nl(nt, he);
              f.tag = Mh, Du(a, f, he);
            }
          }
          a.lanes = Re(a.lanes, he);
        }
        return e;
      }
      return e.flags |= Wn, e.lanes = u, e;
    }
    function Vx(e, t, a, i, u) {
      if (a.flags |= lo, Kn && Sp(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        jx(a), Ln() && a.mode & xe && P0();
        var f = qC(t);
        if (f !== null) {
          f.flags &= -257, KC(f, t, a, e, u), f.mode & xe && XC(e, s, u), Fx(f, e, s);
          return;
        } else {
          if (!Cv(u)) {
            XC(e, s, u), zS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (Ln() && a.mode & xe) {
        P0();
        var v = qC(t);
        if (v !== null) {
          (v.flags & Wn) === ue && (v.flags |= In), KC(v, t, a, e, u), Gy(Zo(i, a));
          return;
        }
      }
      i = Zo(i, a), SD(i);
      var m = t;
      do {
        switch (m.tag) {
          case ne: {
            var y = i;
            m.flags |= Wn;
            var R = To(u);
            m.lanes = Re(m.lanes, R);
            var E = WC(m, y, R);
            og(m, E);
            return;
          }
          case ce:
            var b = i, L = m.type, M = m.stateNode;
            if ((m.flags & le) === ue && (typeof L.getDerivedStateFromError == "function" || M !== null && typeof M.componentDidCatch == "function" && !qE(M))) {
              m.flags |= Wn;
              var Q = To(u);
              m.lanes = Re(m.lanes, Q);
              var se = tS(m, b, Q);
              og(m, se);
              return;
            }
            break;
        }
        m = m.return;
      } while (m !== null);
    }
    function Bx() {
      return null;
    }
    var rp = N.ReactCurrentOwner, ti = !1, nS, ap, rS, aS, iS, Jo, lS, lm, ip;
    nS = {}, ap = {}, rS = {}, aS = {}, iS = {}, Jo = !1, lS = {}, lm = {}, ip = {};
    function gr(e, t, a, i) {
      e === null ? t.child = eC(t, null, a, i) : t.child = Ac(t, e.child, a, i);
    }
    function Px(e, t, a, i) {
      t.child = Ac(t, e.child, null, i), t.child = Ac(t, null, a, i);
    }
    function ZC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Xa(
          s,
          i,
          // Resolved props
          "prop",
          We(a)
        );
      }
      var f = a.render, p = t.ref, v, m;
      Fc(t, u), pr(t);
      {
        if (rp.current = t, Jt(!0), v = $c(e, t, f, i, p, u), m = Qc(), t.mode & Ke) {
          dt(!0);
          try {
            v = $c(e, t, f, i, p, u), m = Qc();
          } finally {
            dt(!1);
          }
        }
        Jt(!1);
      }
      return vr(), e !== null && !ti ? (vC(e, t, u), zl(e, t, u)) : (Ln() && m && By(t), t.flags |= ea, gr(e, t, v, u), t.child);
    }
    function JC(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (GD(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = Jc(s), t.tag = De, t.type = f, sS(t, s), eE(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          if (p && Xa(
            p,
            i,
            // Resolved props
            "prop",
            We(s)
          ), a.defaultProps !== void 0) {
            var v = We(s) || "Unknown";
            ip[v] || (S("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", v), ip[v] = !0);
          }
        }
        var m = QS(a.type, null, i, t, t.mode, u);
        return m.ref = t.ref, m.return = t, t.child = m, m;
      }
      {
        var y = a.type, R = y.propTypes;
        R && Xa(
          R,
          i,
          // Resolved props
          "prop",
          We(y)
        );
      }
      var E = e.child, b = hS(e, u);
      if (!b) {
        var L = E.memoizedProps, M = a.compare;
        if (M = M !== null ? M : J, M(L, i) && e.ref === t.ref)
          return zl(e, t, u);
      }
      t.flags |= ea;
      var Q = as(E, i);
      return Q.ref = t.ref, Q.return = t, t.child = Q, Q;
    }
    function eE(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === mn) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var m = s && s.propTypes;
          m && Xa(
            m,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            We(s)
          );
        }
      }
      if (e !== null) {
        var y = e.memoizedProps;
        if (J(y, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (ti = !1, t.pendingProps = i = y, hS(e, u))
            (e.flags & zs) !== ue && (ti = !0);
          else return t.lanes = e.lanes, zl(e, t, u);
      }
      return uS(e, t, a, i, u);
    }
    function tE(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || K)
        if ((t.mode & xe) === oe) {
          var f = {
            baseLanes: U,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, Sm(t, a);
        } else if (Zn(a, hr)) {
          var R = {
            baseLanes: U,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = R;
          var E = s !== null ? s.baseLanes : a;
          Sm(t, E);
        } else {
          var p = null, v;
          if (s !== null) {
            var m = s.baseLanes;
            v = Re(m, a);
          } else
            v = a;
          t.lanes = t.childLanes = hr;
          var y = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = y, t.updateQueue = null, Sm(t, v), null;
        }
      else {
        var b;
        s !== null ? (b = Re(s.baseLanes, a), t.memoizedState = null) : b = a, Sm(t, b);
      }
      return gr(e, t, u, a), t.child;
    }
    function Yx(e, t, a) {
      var i = t.pendingProps;
      return gr(e, t, i, a), t.child;
    }
    function $x(e, t, a) {
      var i = t.pendingProps.children;
      return gr(e, t, i, a), t.child;
    }
    function Qx(e, t, a) {
      {
        t.flags |= Ne;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return gr(e, t, s, a), t.child;
    }
    function nE(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Ct, t.flags |= uu);
    }
    function uS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Xa(
          s,
          i,
          // Resolved props
          "prop",
          We(a)
        );
      }
      var f;
      {
        var p = Mc(t, a, !0);
        f = Oc(t, p);
      }
      var v, m;
      Fc(t, u), pr(t);
      {
        if (rp.current = t, Jt(!0), v = $c(e, t, a, i, f, u), m = Qc(), t.mode & Ke) {
          dt(!0);
          try {
            v = $c(e, t, a, i, f, u), m = Qc();
          } finally {
            dt(!1);
          }
        }
        Jt(!1);
      }
      return vr(), e !== null && !ti ? (vC(e, t, u), zl(e, t, u)) : (Ln() && m && By(t), t.flags |= ea, gr(e, t, v, u), t.child);
    }
    function rE(e, t, a, i, u) {
      {
        switch (ok(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= le, t.flags |= Wn;
            var m = new Error("Simulated error coming from DevTools"), y = To(u);
            t.lanes = Re(t.lanes, y);
            var R = tS(t, Zo(m, t), y);
            og(t, R);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var E = a.propTypes;
          E && Xa(
            E,
            i,
            // Resolved props
            "prop",
            We(a)
          );
        }
      }
      var b;
      Ni(a) ? (b = !0, gh(t)) : b = !1, Fc(t, u);
      var L = t.stateNode, M;
      L === null ? (om(e, t), IC(t, a, i), Zg(t, a, i, u), M = !0) : e === null ? M = zx(t, a, i, u) : M = Ux(e, t, a, i, u);
      var Q = oS(e, t, a, M, b, u);
      {
        var se = t.stateNode;
        M && se.props !== i && (Jo || S("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Te(t) || "a component"), Jo = !0);
      }
      return Q;
    }
    function oS(e, t, a, i, u, s) {
      nE(e, t);
      var f = (t.flags & le) !== ue;
      if (!i && !f)
        return u && F0(t, a, !1), zl(e, t, s);
      var p = t.stateNode;
      rp.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, BC();
      else {
        pr(t);
        {
          if (Jt(!0), v = p.render(), t.mode & Ke) {
            dt(!0);
            try {
              p.render();
            } finally {
              dt(!1);
            }
          }
          Jt(!1);
        }
        vr();
      }
      return t.flags |= ea, e !== null && f ? Px(e, t, v, s) : gr(e, t, v, s), t.memoizedState = p.state, u && F0(t, a, !0), t.child;
    }
    function aE(e) {
      var t = e.stateNode;
      t.pendingContext ? A0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && A0(e, t.context, !1), sg(e, t.containerInfo);
    }
    function Ix(e, t, a) {
      if (aE(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      uC(e, t), Uh(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var p = f.element;
      if (u.isDehydrated) {
        var v = {
          element: p,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, m = t.updateQueue;
        if (m.baseState = v, t.memoizedState = v, t.flags & In) {
          var y = Zo(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return iE(e, t, p, a, y);
        } else if (p !== s) {
          var R = Zo(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return iE(e, t, p, a, R);
        } else {
          XR(t);
          var E = eC(t, null, p, a);
          t.child = E;
          for (var b = E; b; )
            b.flags = b.flags & -3 | Or, b = b.sibling;
        }
      } else {
        if (Uc(), p === s)
          return zl(e, t, a);
        gr(e, t, p, a);
      }
      return t.child;
    }
    function iE(e, t, a, i, u) {
      return Uc(), Gy(u), t.flags |= In, gr(e, t, a, i), t.child;
    }
    function Gx(e, t, a) {
      fC(t), e === null && Iy(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = ky(i, u);
      return p ? f = null : s !== null && ky(i, s) && (t.flags |= ta), nE(e, t), gr(e, t, f, a), t.child;
    }
    function Wx(e, t) {
      return e === null && Iy(t), null;
    }
    function Xx(e, t, a, i) {
      om(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var m = t.tag = WD(v), y = ei(v, u), R;
      switch (m) {
        case ge:
          return sS(t, v), t.type = v = Jc(v), R = uS(null, t, v, y, i), R;
        case ce:
          return t.type = v = jS(v), R = rE(null, t, v, y, i), R;
        case Le:
          return t.type = v = VS(v), R = ZC(null, t, v, y, i), R;
        case ft: {
          if (t.type !== t.elementType) {
            var E = v.propTypes;
            E && Xa(
              E,
              y,
              // Resolved for outer only
              "prop",
              We(v)
            );
          }
          return R = JC(
            null,
            t,
            v,
            ei(v.type, y),
            // The inner type can have defaults too
            i
          ), R;
        }
      }
      var b = "";
      throw v !== null && typeof v == "object" && v.$$typeof === mn && (b = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + b));
    }
    function qx(e, t, a, i, u) {
      om(e, t), t.tag = ce;
      var s;
      return Ni(a) ? (s = !0, gh(t)) : s = !1, Fc(t, u), IC(t, a, i), Zg(t, a, i, u), oS(null, t, a, !0, s, u);
    }
    function Kx(e, t, a, i) {
      om(e, t);
      var u = t.pendingProps, s;
      {
        var f = Mc(t, a, !1);
        s = Oc(t, f);
      }
      Fc(t, i);
      var p, v;
      pr(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var m = We(a) || "Unknown";
          nS[m] || (S("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", m, m), nS[m] = !0);
        }
        t.mode & Ke && Ka.recordLegacyContextWarning(t, null), Jt(!0), rp.current = t, p = $c(null, t, a, u, s, i), v = Qc(), Jt(!1);
      }
      if (vr(), t.flags |= ea, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var y = We(a) || "Unknown";
        ap[y] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", y, y, y), ap[y] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var R = We(a) || "Unknown";
          ap[R] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", R, R, R), ap[R] = !0);
        }
        t.tag = ce, t.memoizedState = null, t.updateQueue = null;
        var E = !1;
        return Ni(a) ? (E = !0, gh(t)) : E = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, ug(t), QC(t, p), Zg(t, a, u, i), oS(null, t, a, !0, E, i);
      } else {
        if (t.tag = ge, t.mode & Ke) {
          dt(!0);
          try {
            p = $c(null, t, a, u, s, i), v = Qc();
          } finally {
            dt(!1);
          }
        }
        return Ln() && v && By(t), gr(null, t, p, i), sS(t, a), t.child;
      }
    }
    function sS(e, t) {
      {
        if (t && t.childContextTypes && S("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = br();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), iS[u] || (iS[u] = !0, S("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = We(t) || "Unknown";
          ip[f] || (S("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), ip[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = We(t) || "Unknown";
          aS[p] || (S("%s: Function components do not support getDerivedStateFromProps.", p), aS[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = We(t) || "Unknown";
          rS[v] || (S("%s: Function components do not support contextType.", v), rS[v] = !0);
        }
      }
    }
    var cS = {
      dehydrated: null,
      treeContext: null,
      retryLane: Fe
    };
    function fS(e) {
      return {
        baseLanes: e,
        cachePool: Bx(),
        transitions: null
      };
    }
    function Zx(e, t) {
      var a = null;
      return {
        baseLanes: Re(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function Jx(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return dg(e, Wd);
    }
    function ew(e, t) {
      return Ro(e.childLanes, t);
    }
    function lE(e, t, a) {
      var i = t.pendingProps;
      sk(t) && (t.flags |= le);
      var u = Za.current, s = !1, f = (t.flags & le) !== ue;
      if (f || Jx(u, e) ? (s = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (u = gx(u, pC)), u = Vc(u), bu(t, u), e === null) {
        Iy(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return iw(t, v);
        }
        var m = i.children, y = i.fallback;
        if (s) {
          var R = tw(t, m, y, a), E = t.child;
          return E.memoizedState = fS(a), t.memoizedState = cS, R;
        } else
          return dS(t, m);
      } else {
        var b = e.memoizedState;
        if (b !== null) {
          var L = b.dehydrated;
          if (L !== null)
            return lw(e, t, f, i, L, b, a);
        }
        if (s) {
          var M = i.fallback, Q = i.children, se = rw(e, t, Q, M, a), re = t.child, Ae = e.child.memoizedState;
          return re.memoizedState = Ae === null ? fS(a) : Zx(Ae, a), re.childLanes = ew(e, a), t.memoizedState = cS, se;
        } else {
          var be = i.children, w = nw(e, t, be, a);
          return t.memoizedState = null, w;
        }
      }
    }
    function dS(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = pS(u, i);
      return s.return = e, e.child = s, s;
    }
    function tw(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & xe) === oe && s !== null ? (p = s, p.childLanes = U, p.pendingProps = f, e.mode & je && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Au(a, u, i, null)) : (p = pS(f, u), v = Au(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function pS(e, t, a) {
      return uT(e, t, U, null);
    }
    function uE(e, t) {
      return as(e, t);
    }
    function nw(e, t, a, i) {
      var u = e.child, s = u.sibling, f = uE(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & xe) === oe && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= Mr) : p.push(s);
      }
      return t.child = f, f;
    }
    function rw(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, m;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & xe) === oe && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var y = t.child;
        m = y, m.childLanes = U, m.pendingProps = v, t.mode & je && (m.actualDuration = 0, m.actualStartTime = -1, m.selfBaseDuration = f.selfBaseDuration, m.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        m = uE(f, v), m.subtreeFlags = f.subtreeFlags & zt;
      var R;
      return p !== null ? R = as(p, i) : (R = Au(i, s, u, null), R.flags |= Et), R.return = t, m.return = t, m.sibling = R, t.child = m, R;
    }
    function um(e, t, a, i) {
      i !== null && Gy(i), Ac(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = dS(t, s);
      return f.flags |= Et, t.memoizedState = null, f;
    }
    function aw(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = pS(f, s), v = Au(i, s, u, null);
      return v.flags |= Et, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & xe) !== oe && Ac(t, e.child, null, u), v;
    }
    function iw(e, t, a) {
      return (e.mode & xe) === oe ? (S("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = he) : My(t) ? e.lanes = yn : e.lanes = hr, null;
    }
    function lw(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & In) {
          t.flags &= -257;
          var w = Jg(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return um(e, t, f, w);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= le, null;
          var O = i.children, D = i.fallback, V = aw(e, t, O, D, f), X = t.child;
          return X.memoizedState = fS(f), t.memoizedState = cS, V;
        }
      else {
        if (GR(), (t.mode & xe) === oe)
          return um(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (My(u)) {
          var p, v, m;
          {
            var y = cR(u);
            p = y.digest, v = y.message, m = y.stack;
          }
          var R;
          v ? R = new Error(v) : R = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var E = Jg(R, p, m);
          return um(e, t, f, E);
        }
        var b = Zn(f, e.childLanes);
        if (ti || b) {
          var L = gm();
          if (L !== null) {
            var M = od(L, f);
            if (M !== Fe && M !== s.retryLane) {
              s.retryLane = M;
              var Q = nt;
              Br(e, M), pn(L, e, M, Q);
            }
          }
          zS();
          var se = Jg(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return um(e, t, f, se);
        } else if (L0(u)) {
          t.flags |= le, t.child = e.child;
          var re = MD.bind(null, e);
          return fR(u, re), null;
        } else {
          qR(t, u, s.treeContext);
          var Ae = i.children, be = dS(t, Ae);
          return be.flags |= Or, be;
        }
      }
    }
    function oE(e, t, a) {
      e.lanes = Re(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = Re(i.lanes, t)), rg(e.return, t, a);
    }
    function uw(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === Oe) {
          var u = i.memoizedState;
          u !== null && oE(i, a, e);
        } else if (i.tag === Bt)
          oE(i, a, e);
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
    function ow(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && jh(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function sw(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !lS[e])
        if (lS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              S('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          S('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function cw(e, t) {
      e !== void 0 && !lm[e] && (e !== "collapsed" && e !== "hidden" ? (lm[e] = !0, S('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (lm[e] = !0, S('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function sE(e, t) {
      {
        var a = en(e), i = !a && typeof tt(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return S("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function fw(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (en(e)) {
          for (var a = 0; a < e.length; a++)
            if (!sE(e[a], a))
              return;
        } else {
          var i = tt(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!sE(s.value, f))
                  return;
                f++;
              }
          } else
            S('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function vS(e, t, a, i, u) {
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
    function cE(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      sw(u), cw(s, u), fw(f, u), gr(e, t, f, a);
      var p = Za.current, v = dg(p, Wd);
      if (v)
        p = pg(p, Wd), t.flags |= le;
      else {
        var m = e !== null && (e.flags & le) !== ue;
        m && uw(t, t.child, a), p = Vc(p);
      }
      if (bu(t, p), (t.mode & xe) === oe)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var y = ow(t.child), R;
            y === null ? (R = t.child, t.child = null) : (R = y.sibling, y.sibling = null), vS(
              t,
              !1,
              // isBackwards
              R,
              y,
              s
            );
            break;
          }
          case "backwards": {
            var E = null, b = t.child;
            for (t.child = null; b !== null; ) {
              var L = b.alternate;
              if (L !== null && jh(L) === null) {
                t.child = b;
                break;
              }
              var M = b.sibling;
              b.sibling = E, E = b, b = M;
            }
            vS(
              t,
              !0,
              // isBackwards
              E,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            vS(
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
    function dw(e, t, a) {
      sg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Ac(t, null, i, a) : gr(e, t, i, a), t.child;
    }
    var fE = !1;
    function pw(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || fE || (fE = !0, S("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && Xa(v, s, "prop", "Context.Provider");
      }
      if (rC(t, u, p), f !== null) {
        var m = f.value;
        if (F(m, p)) {
          if (f.children === s.children && !mh())
            return zl(e, t, a);
        } else
          sx(t, u, a);
      }
      var y = s.children;
      return gr(e, t, y, a), t.child;
    }
    var dE = !1;
    function vw(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (dE || (dE = !0, S("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && S("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Fc(t, a);
      var f = Kt(i);
      pr(t);
      var p;
      return rp.current = t, Jt(!0), p = s(f), Jt(!1), vr(), t.flags |= ea, gr(e, t, p, a), t.child;
    }
    function lp() {
      ti = !0;
    }
    function om(e, t) {
      (t.mode & xe) === oe && e !== null && (e.alternate = null, t.alternate = null, t.flags |= Et);
    }
    function zl(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), BC(), gp(t.lanes), Zn(a, t.childLanes) ? (ux(e, t), t.child) : null;
    }
    function hw(e, t, a) {
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
        return s === null ? (i.deletions = [e], i.flags |= Mr) : s.push(e), a.flags |= Et, a;
      }
    }
    function hS(e, t) {
      var a = e.lanes;
      return !!Zn(a, t);
    }
    function mw(e, t, a) {
      switch (t.tag) {
        case ne:
          aE(t), t.stateNode, Uc();
          break;
        case ie:
          fC(t);
          break;
        case ce: {
          var i = t.type;
          Ni(i) && gh(t);
          break;
        }
        case Se:
          sg(t, t.stateNode.containerInfo);
          break;
        case Cn: {
          var u = t.memoizedProps.value, s = t.type._context;
          rC(t, s, u);
          break;
        }
        case it:
          {
            var f = Zn(a, t.childLanes);
            f && (t.flags |= Ne);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case Oe: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return bu(t, Vc(Za.current)), t.flags |= le, null;
            var m = t.child, y = m.childLanes;
            if (Zn(a, y))
              return lE(e, t, a);
            bu(t, Vc(Za.current));
            var R = zl(e, t, a);
            return R !== null ? R.sibling : null;
          } else
            bu(t, Vc(Za.current));
          break;
        }
        case Bt: {
          var E = (e.flags & le) !== ue, b = Zn(a, t.childLanes);
          if (E) {
            if (b)
              return cE(e, t, a);
            t.flags |= le;
          }
          var L = t.memoizedState;
          if (L !== null && (L.rendering = null, L.tail = null, L.lastEffect = null), bu(t, Za.current), b)
            break;
          return null;
        }
        case we:
        case vn:
          return t.lanes = U, tE(e, t, a);
      }
      return zl(e, t, a);
    }
    function pE(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return hw(e, t, QS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || mh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          ti = !0;
        else {
          var s = hS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & le) === ue)
            return ti = !1, mw(e, t, a);
          (e.flags & zs) !== ue ? ti = !0 : ti = !1;
        }
      } else if (ti = !1, Ln() && BR(t)) {
        var f = t.index, p = PR();
        B0(t, p, f);
      }
      switch (t.lanes = U, t.tag) {
        case Zt:
          return Kx(e, t, t.type, a);
        case En: {
          var v = t.elementType;
          return Xx(e, t, v, a);
        }
        case ge: {
          var m = t.type, y = t.pendingProps, R = t.elementType === m ? y : ei(m, y);
          return uS(e, t, m, R, a);
        }
        case ce: {
          var E = t.type, b = t.pendingProps, L = t.elementType === E ? b : ei(E, b);
          return rE(e, t, E, L, a);
        }
        case ne:
          return Ix(e, t, a);
        case ie:
          return Gx(e, t, a);
        case He:
          return Wx(e, t);
        case Oe:
          return lE(e, t, a);
        case Se:
          return dw(e, t, a);
        case Le: {
          var M = t.type, Q = t.pendingProps, se = t.elementType === M ? Q : ei(M, Q);
          return ZC(e, t, M, se, a);
        }
        case Xe:
          return Yx(e, t, a);
        case at:
          return $x(e, t, a);
        case it:
          return Qx(e, t, a);
        case Cn:
          return pw(e, t, a);
        case Rr:
          return vw(e, t, a);
        case ft: {
          var re = t.type, Ae = t.pendingProps, be = ei(re, Ae);
          if (t.type !== t.elementType) {
            var w = re.propTypes;
            w && Xa(
              w,
              be,
              // Resolved for outer only
              "prop",
              We(re)
            );
          }
          return be = ei(re.type, be), JC(e, t, re, be, a);
        }
        case De:
          return eE(e, t, t.type, t.pendingProps, a);
        case mt: {
          var O = t.type, D = t.pendingProps, V = t.elementType === O ? D : ei(O, D);
          return qx(e, t, O, V, a);
        }
        case Bt:
          return cE(e, t, a);
        case lt:
          break;
        case we:
          return tE(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Ic(e) {
      e.flags |= Ne;
    }
    function vE(e) {
      e.flags |= Ct, e.flags |= uu;
    }
    var hE, mS, mE, yE;
    hE = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === ie || u.tag === He)
          F1(e, u.stateNode);
        else if (u.tag !== Se) {
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
    }, mS = function(e, t) {
    }, mE = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = cg(), v = V1(f, a, s, i, u, p);
        t.updateQueue = v, v && Ic(t);
      }
    }, yE = function(e, t, a, i) {
      a !== i && Ic(t);
    };
    function up(e, t) {
      if (!Ln())
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
    function On(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = U, i = ue;
      if (t) {
        if ((e.mode & je) !== oe) {
          for (var v = e.selfBaseDuration, m = e.child; m !== null; )
            a = Re(a, Re(m.lanes, m.childLanes)), i |= m.subtreeFlags & zt, i |= m.flags & zt, v += m.treeBaseDuration, m = m.sibling;
          e.treeBaseDuration = v;
        } else
          for (var y = e.child; y !== null; )
            a = Re(a, Re(y.lanes, y.childLanes)), i |= y.subtreeFlags & zt, i |= y.flags & zt, y.return = e, y = y.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & je) !== oe) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = Re(a, Re(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = Re(a, Re(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function yw(e, t, a) {
      if (tx() && (t.mode & xe) !== oe && (t.flags & le) === ue)
        return W0(t), Uc(), t.flags |= In | lo | Wn, !1;
      var i = Rh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (JR(t), On(t), (t.mode & je) !== oe) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Uc(), (t.flags & le) === ue && (t.memoizedState = null), t.flags |= Ne, On(t), (t.mode & je) !== oe) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return X0(), !0;
    }
    function gE(e, t, a) {
      var i = t.pendingProps;
      switch (Py(t), t.tag) {
        case Zt:
        case En:
        case De:
        case ge:
        case Le:
        case Xe:
        case at:
        case it:
        case Rr:
        case ft:
          return On(t), null;
        case ce: {
          var u = t.type;
          return Ni(u) && yh(t), On(t), null;
        }
        case ne: {
          var s = t.stateNode;
          if (jc(t), Fy(t), hg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = Rh(t);
            if (f)
              Ic(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & In) !== ue) && (t.flags |= Yt, X0());
            }
          }
          return mS(e, t), On(t), null;
        }
        case ie: {
          fg(t);
          var v = cC(), m = t.type;
          if (e !== null && t.stateNode != null)
            mE(e, t, m, i, v), e.ref !== t.ref && vE(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return On(t), null;
            }
            var y = cg(), R = Rh(t);
            if (R)
              KR(t, v, y) && Ic(t);
            else {
              var E = H1(m, i, v, y, t);
              hE(E, t, !1, !1), t.stateNode = E, j1(E, m, i, v) && Ic(t);
            }
            t.ref !== null && vE(t);
          }
          return On(t), null;
        }
        case He: {
          var b = i;
          if (e && t.stateNode != null) {
            var L = e.memoizedProps;
            yE(e, t, L, b);
          } else {
            if (typeof b != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var M = cC(), Q = cg(), se = Rh(t);
            se ? ZR(t) && Ic(t) : t.stateNode = B1(b, M, Q, t);
          }
          return On(t), null;
        }
        case Oe: {
          Bc(t);
          var re = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Ae = yw(e, t, re);
            if (!Ae)
              return t.flags & Wn ? t : null;
          }
          if ((t.flags & le) !== ue)
            return t.lanes = a, (t.mode & je) !== oe && Vg(t), t;
          var be = re !== null, w = e !== null && e.memoizedState !== null;
          if (be !== w && be) {
            var O = t.child;
            if (O.flags |= Nt, (t.mode & xe) !== oe) {
              var D = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              D || dg(Za.current, pC) ? gD() : zS();
            }
          }
          var V = t.updateQueue;
          if (V !== null && (t.flags |= Ne), On(t), (t.mode & je) !== oe && be) {
            var X = t.child;
            X !== null && (t.treeBaseDuration -= X.treeBaseDuration);
          }
          return null;
        }
        case Se:
          return jc(t), mS(e, t), e === null && zR(t.stateNode.containerInfo), On(t), null;
        case Cn:
          var I = t.type._context;
          return ng(I, t), On(t), null;
        case mt: {
          var me = t.type;
          return Ni(me) && yh(t), On(t), null;
        }
        case Bt: {
          Bc(t);
          var Ee = t.memoizedState;
          if (Ee === null)
            return On(t), null;
          var Je = (t.flags & le) !== ue, Pe = Ee.rendering;
          if (Pe === null)
            if (Je)
              up(Ee, !1);
            else {
              var It = CD() && (e === null || (e.flags & le) === ue);
              if (!It)
                for (var Ye = t.child; Ye !== null; ) {
                  var Vt = jh(Ye);
                  if (Vt !== null) {
                    Je = !0, t.flags |= le, up(Ee, !1);
                    var ir = Vt.updateQueue;
                    return ir !== null && (t.updateQueue = ir, t.flags |= Ne), t.subtreeFlags = ue, ox(t, a), bu(t, pg(Za.current, Wd)), t.child;
                  }
                  Ye = Ye.sibling;
                }
              Ee.tail !== null && $t() > jE() && (t.flags |= le, Je = !0, up(Ee, !1), t.lanes = Jf);
            }
          else {
            if (!Je) {
              var Hn = jh(Pe);
              if (Hn !== null) {
                t.flags |= le, Je = !0;
                var oa = Hn.updateQueue;
                if (oa !== null && (t.updateQueue = oa, t.flags |= Ne), up(Ee, !0), Ee.tail === null && Ee.tailMode === "hidden" && !Pe.alternate && !Ln())
                  return On(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              $t() * 2 - Ee.renderingStartTime > jE() && a !== hr && (t.flags |= le, Je = !0, up(Ee, !1), t.lanes = Jf);
            }
            if (Ee.isBackwards)
              Pe.sibling = t.child, t.child = Pe;
            else {
              var Er = Ee.last;
              Er !== null ? Er.sibling = Pe : t.child = Pe, Ee.last = Pe;
            }
          }
          if (Ee.tail !== null) {
            var Tr = Ee.tail;
            Ee.rendering = Tr, Ee.tail = Tr.sibling, Ee.renderingStartTime = $t(), Tr.sibling = null;
            var lr = Za.current;
            return Je ? lr = pg(lr, Wd) : lr = Vc(lr), bu(t, lr), Tr;
          }
          return On(t), null;
        }
        case lt:
          break;
        case we:
        case vn: {
          NS(t);
          var jl = t.memoizedState, ef = jl !== null;
          if (e !== null) {
            var Rp = e.memoizedState, Bi = Rp !== null;
            Bi !== ef && (t.flags |= Nt);
          }
          return !ef || (t.mode & xe) === oe ? On(t) : Zn(Vi, hr) && (On(t), t.subtreeFlags & (Et | Ne) && (t.flags |= Nt)), null;
        }
        case Tn:
          return null;
        case _t:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function gw(e, t, a) {
      switch (Py(t), t.tag) {
        case ce: {
          var i = t.type;
          Ni(i) && yh(t);
          var u = t.flags;
          return u & Wn ? (t.flags = u & -65537 | le, (t.mode & je) !== oe && Vg(t), t) : null;
        }
        case ne: {
          t.stateNode, jc(t), Fy(t), hg();
          var s = t.flags;
          return (s & Wn) !== ue && (s & le) === ue ? (t.flags = s & -65537 | le, t) : null;
        }
        case ie:
          return fg(t), null;
        case Oe: {
          Bc(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Uc();
          }
          var p = t.flags;
          return p & Wn ? (t.flags = p & -65537 | le, (t.mode & je) !== oe && Vg(t), t) : null;
        }
        case Bt:
          return Bc(t), null;
        case Se:
          return jc(t), null;
        case Cn:
          var v = t.type._context;
          return ng(v, t), null;
        case we:
        case vn:
          return NS(t), null;
        case Tn:
          return null;
        default:
          return null;
      }
    }
    function SE(e, t, a) {
      switch (Py(t), t.tag) {
        case ce: {
          var i = t.type.childContextTypes;
          i != null && yh(t);
          break;
        }
        case ne: {
          t.stateNode, jc(t), Fy(t), hg();
          break;
        }
        case ie: {
          fg(t);
          break;
        }
        case Se:
          jc(t);
          break;
        case Oe:
          Bc(t);
          break;
        case Bt:
          Bc(t);
          break;
        case Cn:
          var u = t.type._context;
          ng(u, t);
          break;
        case we:
        case vn:
          NS(t);
          break;
      }
    }
    var CE = null;
    CE = /* @__PURE__ */ new Set();
    var sm = !1, Nn = !1, Sw = typeof WeakSet == "function" ? WeakSet : Set, ee = null, Gc = null, Wc = null;
    function Cw(e) {
      hi(null, function() {
        throw e;
      }), io();
    }
    var Ew = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & je)
        try {
          Fi(), t.componentWillUnmount();
        } finally {
          Hi(e);
        }
      else
        t.componentWillUnmount();
    };
    function EE(e, t) {
      try {
        Mu(un, e);
      } catch (a) {
        ot(e, t, a);
      }
    }
    function yS(e, t, a) {
      try {
        Ew(e, a);
      } catch (i) {
        ot(e, t, i);
      }
    }
    function Tw(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        ot(e, t, i);
      }
    }
    function TE(e, t) {
      try {
        xE(e);
      } catch (a) {
        ot(e, t, a);
      }
    }
    function Xc(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (Rn && Pi && e.mode & je)
              try {
                Fi(), i = a(null);
              } finally {
                Hi(e);
              }
            else
              i = a(null);
          } catch (u) {
            ot(e, t, u);
          }
          typeof i == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Te(e));
        } else
          a.current = null;
    }
    function cm(e, t, a) {
      try {
        a();
      } catch (i) {
        ot(e, t, i);
      }
    }
    var RE = !1;
    function Rw(e, t) {
      U1(e.containerInfo), ee = t, xw();
      var a = RE;
      return RE = !1, a;
    }
    function xw() {
      for (; ee !== null; ) {
        var e = ee, t = e.child;
        (e.subtreeFlags & yi) !== ue && t !== null ? (t.return = e, ee = t) : ww();
      }
    }
    function ww() {
      for (; ee !== null; ) {
        var e = ee;
        ut(e);
        try {
          Dw(e);
        } catch (a) {
          ot(e, e.return, a);
        }
        St();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, ee = t;
          return;
        }
        ee = e.return;
      }
    }
    function Dw(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Yt) !== ue) {
        switch (ut(e), e.tag) {
          case ge:
          case Le:
          case De:
            break;
          case ce: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !Jo && (s.props !== e.memoizedProps && S("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Te(e) || "instance"), s.state !== e.memoizedState && S("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Te(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : ei(e.type, i), u);
              {
                var p = CE;
                f === void 0 && !p.has(e.type) && (p.add(e.type), S("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Te(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case ne: {
            {
              var v = e.stateNode;
              lR(v.containerInfo);
            }
            break;
          }
          case ie:
          case He:
          case Se:
          case mt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        St();
      }
    }
    function ni(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & Mn) !== Pr ? Ya(t) : (e & un) !== Pr && oo(t), (e & zi) !== Pr && Cp(!0), cm(t, a, p), (e & zi) !== Pr && Cp(!1), (e & Mn) !== Pr ? Ei() : (e & un) !== Pr && Kf());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function Mu(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & Mn) !== Pr ? qf(t) : (e & un) !== Pr && Vs(t);
            var f = s.create;
            (e & zi) !== Pr && Cp(!0), s.destroy = f(), (e & zi) !== Pr && Cp(!1), (e & Mn) !== Pr ? hv() : (e & un) !== Pr && mv();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & un) !== ue ? v = "useLayoutEffect" : (s.tag & zi) !== ue ? v = "useInsertionEffect" : v = "useEffect";
                var m = void 0;
                p === null ? m = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof p.then == "function" ? m = `

It looks like you wrote ` + v + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + v + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : m = " You returned: " + p, S("%s must not return anything besides a function, which is used for clean-up.%s", v, m);
              }
            }
          }
          s = s.next;
        } while (s !== u);
      }
    }
    function kw(e, t) {
      if ((t.flags & Ne) !== ue)
        switch (t.tag) {
          case it: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = jC(), p = t.alternate === null ? "mount" : "update";
            FC() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e: for (; v !== null; ) {
              switch (v.tag) {
                case ne:
                  var m = v.stateNode;
                  m.passiveEffectDuration += a;
                  break e;
                case it:
                  var y = v.stateNode;
                  y.passiveEffectDuration += a;
                  break e;
              }
              v = v.return;
            }
            break;
          }
        }
    }
    function bw(e, t, a, i) {
      if ((a.flags & Si) !== ue)
        switch (a.tag) {
          case ge:
          case Le:
          case De: {
            if (!Nn)
              if (a.mode & je)
                try {
                  Fi(), Mu(un | ln, a);
                } finally {
                  Hi(a);
                }
              else
                Mu(un | ln, a);
            break;
          }
          case ce: {
            var u = a.stateNode;
            if (a.flags & Ne && !Nn)
              if (t === null)
                if (a.type === a.elementType && !Jo && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Te(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Te(a) || "instance")), a.mode & je)
                  try {
                    Fi(), u.componentDidMount();
                  } finally {
                    Hi(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : ei(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !Jo && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Te(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Te(a) || "instance")), a.mode & je)
                  try {
                    Fi(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Hi(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !Jo && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Te(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Te(a) || "instance")), sC(a, p, u));
            break;
          }
          case ne: {
            var v = a.updateQueue;
            if (v !== null) {
              var m = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case ie:
                    m = a.child.stateNode;
                    break;
                  case ce:
                    m = a.child.stateNode;
                    break;
                }
              sC(a, v, m);
            }
            break;
          }
          case ie: {
            var y = a.stateNode;
            if (t === null && a.flags & Ne) {
              var R = a.type, E = a.memoizedProps;
              I1(y, R, E);
            }
            break;
          }
          case He:
            break;
          case Se:
            break;
          case it: {
            {
              var b = a.memoizedProps, L = b.onCommit, M = b.onRender, Q = a.stateNode.effectDuration, se = jC(), re = t === null ? "mount" : "update";
              FC() && (re = "nested-update"), typeof M == "function" && M(a.memoizedProps.id, re, a.actualDuration, a.treeBaseDuration, a.actualStartTime, se);
              {
                typeof L == "function" && L(a.memoizedProps.id, re, Q, se), wD(a);
                var Ae = a.return;
                e: for (; Ae !== null; ) {
                  switch (Ae.tag) {
                    case ne:
                      var be = Ae.stateNode;
                      be.effectDuration += Q;
                      break e;
                    case it:
                      var w = Ae.stateNode;
                      w.effectDuration += Q;
                      break e;
                  }
                  Ae = Ae.return;
                }
              }
            }
            break;
          }
          case Oe: {
            Aw(e, a);
            break;
          }
          case Bt:
          case mt:
          case lt:
          case we:
          case vn:
          case _t:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Nn || a.flags & Ct && xE(a);
    }
    function _w(e) {
      switch (e.tag) {
        case ge:
        case Le:
        case De: {
          if (e.mode & je)
            try {
              Fi(), EE(e, e.return);
            } finally {
              Hi(e);
            }
          else
            EE(e, e.return);
          break;
        }
        case ce: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && Tw(e, e.return, t), TE(e, e.return);
          break;
        }
        case ie: {
          TE(e, e.return);
          break;
        }
      }
    }
    function Lw(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === ie) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? nR(u) : aR(i.stateNode, i.memoizedProps);
            } catch (f) {
              ot(e, e.return, f);
            }
          }
        } else if (i.tag === He) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? rR(s) : iR(s, i.memoizedProps);
            } catch (f) {
              ot(e, e.return, f);
            }
        } else if (!((i.tag === we || i.tag === vn) && i.memoizedState !== null && i !== e)) {
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
    function xE(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case ie:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & je)
            try {
              Fi(), u = t(i);
            } finally {
              Hi(e);
            }
          else
            u = t(i);
          typeof u == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Te(e));
        } else
          t.hasOwnProperty("current") || S("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Te(e)), t.current = i;
      }
    }
    function Mw(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function wE(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, wE(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === ie) {
          var a = e.stateNode;
          a !== null && HR(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function Ow(e) {
      for (var t = e.return; t !== null; ) {
        if (DE(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function DE(e) {
      return e.tag === ie || e.tag === ne || e.tag === Se;
    }
    function kE(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || DE(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== ie && t.tag !== He && t.tag !== Gt; ) {
          if (t.flags & Et || t.child === null || t.tag === Se)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & Et))
          return t.stateNode;
      }
    }
    function Nw(e) {
      var t = Ow(e);
      switch (t.tag) {
        case ie: {
          var a = t.stateNode;
          t.flags & ta && (_0(a), t.flags &= -33);
          var i = kE(e);
          SS(e, i, a);
          break;
        }
        case ne:
        case Se: {
          var u = t.stateNode.containerInfo, s = kE(e);
          gS(e, s, u);
          break;
        }
        // eslint-disable-next-line-no-fallthrough
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function gS(e, t, a) {
      var i = e.tag, u = i === ie || i === He;
      if (u) {
        var s = e.stateNode;
        t ? Z1(a, s, t) : q1(a, s);
      } else if (i !== Se) {
        var f = e.child;
        if (f !== null) {
          gS(f, t, a);
          for (var p = f.sibling; p !== null; )
            gS(p, t, a), p = p.sibling;
        }
      }
    }
    function SS(e, t, a) {
      var i = e.tag, u = i === ie || i === He;
      if (u) {
        var s = e.stateNode;
        t ? K1(a, s, t) : X1(a, s);
      } else if (i !== Se) {
        var f = e.child;
        if (f !== null) {
          SS(f, t, a);
          for (var p = f.sibling; p !== null; )
            SS(p, t, a), p = p.sibling;
        }
      }
    }
    var zn = null, ri = !1;
    function zw(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case ie: {
              zn = i.stateNode, ri = !1;
              break e;
            }
            case ne: {
              zn = i.stateNode.containerInfo, ri = !0;
              break e;
            }
            case Se: {
              zn = i.stateNode.containerInfo, ri = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (zn === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        bE(e, t, a), zn = null, ri = !1;
      }
      Mw(a);
    }
    function Ou(e, t, a) {
      for (var i = a.child; i !== null; )
        bE(e, t, i), i = i.sibling;
    }
    function bE(e, t, a) {
      switch (Gf(a), a.tag) {
        case ie:
          Nn || Xc(a, t);
        // eslint-disable-next-line-no-fallthrough
        case He: {
          {
            var i = zn, u = ri;
            zn = null, Ou(e, t, a), zn = i, ri = u, zn !== null && (ri ? eR(zn, a.stateNode) : J1(zn, a.stateNode));
          }
          return;
        }
        case Gt: {
          zn !== null && (ri ? tR(zn, a.stateNode) : Ly(zn, a.stateNode));
          return;
        }
        case Se: {
          {
            var s = zn, f = ri;
            zn = a.stateNode.containerInfo, ri = !0, Ou(e, t, a), zn = s, ri = f;
          }
          return;
        }
        case ge:
        case Le:
        case ft:
        case De: {
          if (!Nn) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var m = v.next, y = m;
                do {
                  var R = y, E = R.destroy, b = R.tag;
                  E !== void 0 && ((b & zi) !== Pr ? cm(a, t, E) : (b & un) !== Pr && (oo(a), a.mode & je ? (Fi(), cm(a, t, E), Hi(a)) : cm(a, t, E), Kf())), y = y.next;
                } while (y !== m);
              }
            }
          }
          Ou(e, t, a);
          return;
        }
        case ce: {
          if (!Nn) {
            Xc(a, t);
            var L = a.stateNode;
            typeof L.componentWillUnmount == "function" && yS(a, t, L);
          }
          Ou(e, t, a);
          return;
        }
        case lt: {
          Ou(e, t, a);
          return;
        }
        case we: {
          if (
            // TODO: Remove this dead flag
            a.mode & xe
          ) {
            var M = Nn;
            Nn = M || a.memoizedState !== null, Ou(e, t, a), Nn = M;
          } else
            Ou(e, t, a);
          break;
        }
        default: {
          Ou(e, t, a);
          return;
        }
      }
    }
    function Uw(e) {
      e.memoizedState;
    }
    function Aw(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && CR(s);
          }
        }
      }
    }
    function _E(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new Sw()), t.forEach(function(i) {
          var u = OD.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), Kn)
              if (Gc !== null && Wc !== null)
                Sp(Wc, Gc);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function Hw(e, t, a) {
      Gc = a, Wc = e, ut(t), LE(t, e), ut(t), Gc = null, Wc = null;
    }
    function ai(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            zw(e, t, s);
          } catch (v) {
            ot(s, t, v);
          }
        }
      var f = Yu();
      if (t.subtreeFlags & gi)
        for (var p = t.child; p !== null; )
          ut(p), LE(p, e), p = p.sibling;
      ut(f);
    }
    function LE(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case ge:
        case Le:
        case ft:
        case De: {
          if (ai(t, e), ji(e), u & Ne) {
            try {
              ni(zi | ln, e, e.return), Mu(zi | ln, e);
            } catch (me) {
              ot(e, e.return, me);
            }
            if (e.mode & je) {
              try {
                Fi(), ni(un | ln, e, e.return);
              } catch (me) {
                ot(e, e.return, me);
              }
              Hi(e);
            } else
              try {
                ni(un | ln, e, e.return);
              } catch (me) {
                ot(e, e.return, me);
              }
          }
          return;
        }
        case ce: {
          ai(t, e), ji(e), u & Ct && i !== null && Xc(i, i.return);
          return;
        }
        case ie: {
          ai(t, e), ji(e), u & Ct && i !== null && Xc(i, i.return);
          {
            if (e.flags & ta) {
              var s = e.stateNode;
              try {
                _0(s);
              } catch (me) {
                ot(e, e.return, me);
              }
            }
            if (u & Ne) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, m = e.type, y = e.updateQueue;
                if (e.updateQueue = null, y !== null)
                  try {
                    G1(f, y, m, v, p, e);
                  } catch (me) {
                    ot(e, e.return, me);
                  }
              }
            }
          }
          return;
        }
        case He: {
          if (ai(t, e), ji(e), u & Ne) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var R = e.stateNode, E = e.memoizedProps, b = i !== null ? i.memoizedProps : E;
            try {
              W1(R, b, E);
            } catch (me) {
              ot(e, e.return, me);
            }
          }
          return;
        }
        case ne: {
          if (ai(t, e), ji(e), u & Ne && i !== null) {
            var L = i.memoizedState;
            if (L.isDehydrated)
              try {
                SR(t.containerInfo);
              } catch (me) {
                ot(e, e.return, me);
              }
          }
          return;
        }
        case Se: {
          ai(t, e), ji(e);
          return;
        }
        case Oe: {
          ai(t, e), ji(e);
          var M = e.child;
          if (M.flags & Nt) {
            var Q = M.stateNode, se = M.memoizedState, re = se !== null;
            if (Q.isHidden = re, re) {
              var Ae = M.alternate !== null && M.alternate.memoizedState !== null;
              Ae || yD();
            }
          }
          if (u & Ne) {
            try {
              Uw(e);
            } catch (me) {
              ot(e, e.return, me);
            }
            _E(e);
          }
          return;
        }
        case we: {
          var be = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & xe
          ) {
            var w = Nn;
            Nn = w || be, ai(t, e), Nn = w;
          } else
            ai(t, e);
          if (ji(e), u & Nt) {
            var O = e.stateNode, D = e.memoizedState, V = D !== null, X = e;
            if (O.isHidden = V, V && !be && (X.mode & xe) !== oe) {
              ee = X;
              for (var I = X.child; I !== null; )
                ee = I, jw(I), I = I.sibling;
            }
            Lw(X, V);
          }
          return;
        }
        case Bt: {
          ai(t, e), ji(e), u & Ne && _E(e);
          return;
        }
        case lt:
          return;
        default: {
          ai(t, e), ji(e);
          return;
        }
      }
    }
    function ji(e) {
      var t = e.flags;
      if (t & Et) {
        try {
          Nw(e);
        } catch (a) {
          ot(e, e.return, a);
        }
        e.flags &= -3;
      }
      t & Or && (e.flags &= -4097);
    }
    function Fw(e, t, a) {
      Gc = a, Wc = t, ee = e, ME(e, t, a), Gc = null, Wc = null;
    }
    function ME(e, t, a) {
      for (var i = (e.mode & xe) !== oe; ee !== null; ) {
        var u = ee, s = u.child;
        if (u.tag === we && i) {
          var f = u.memoizedState !== null, p = f || sm;
          if (p) {
            CS(e, t, a);
            continue;
          } else {
            var v = u.alternate, m = v !== null && v.memoizedState !== null, y = m || Nn, R = sm, E = Nn;
            sm = p, Nn = y, Nn && !E && (ee = u, Vw(u));
            for (var b = s; b !== null; )
              ee = b, ME(
                b,
                // New root; bubble back up to here and stop.
                t,
                a
              ), b = b.sibling;
            ee = u, sm = R, Nn = E, CS(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & Si) !== ue && s !== null ? (s.return = u, ee = s) : CS(e, t, a);
      }
    }
    function CS(e, t, a) {
      for (; ee !== null; ) {
        var i = ee;
        if ((i.flags & Si) !== ue) {
          var u = i.alternate;
          ut(i);
          try {
            bw(t, u, i, a);
          } catch (f) {
            ot(i, i.return, f);
          }
          St();
        }
        if (i === e) {
          ee = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, ee = s;
          return;
        }
        ee = i.return;
      }
    }
    function jw(e) {
      for (; ee !== null; ) {
        var t = ee, a = t.child;
        switch (t.tag) {
          case ge:
          case Le:
          case ft:
          case De: {
            if (t.mode & je)
              try {
                Fi(), ni(un, t, t.return);
              } finally {
                Hi(t);
              }
            else
              ni(un, t, t.return);
            break;
          }
          case ce: {
            Xc(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && yS(t, t.return, i);
            break;
          }
          case ie: {
            Xc(t, t.return);
            break;
          }
          case we: {
            var u = t.memoizedState !== null;
            if (u) {
              OE(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, ee = a) : OE(e);
      }
    }
    function OE(e) {
      for (; ee !== null; ) {
        var t = ee;
        if (t === e) {
          ee = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, ee = a;
          return;
        }
        ee = t.return;
      }
    }
    function Vw(e) {
      for (; ee !== null; ) {
        var t = ee, a = t.child;
        if (t.tag === we) {
          var i = t.memoizedState !== null;
          if (i) {
            NE(e);
            continue;
          }
        }
        a !== null ? (a.return = t, ee = a) : NE(e);
      }
    }
    function NE(e) {
      for (; ee !== null; ) {
        var t = ee;
        ut(t);
        try {
          _w(t);
        } catch (i) {
          ot(t, t.return, i);
        }
        if (St(), t === e) {
          ee = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, ee = a;
          return;
        }
        ee = t.return;
      }
    }
    function Bw(e, t, a, i) {
      ee = t, Pw(t, e, a, i);
    }
    function Pw(e, t, a, i) {
      for (; ee !== null; ) {
        var u = ee, s = u.child;
        (u.subtreeFlags & Ba) !== ue && s !== null ? (s.return = u, ee = s) : Yw(e, t, a, i);
      }
    }
    function Yw(e, t, a, i) {
      for (; ee !== null; ) {
        var u = ee;
        if ((u.flags & Gn) !== ue) {
          ut(u);
          try {
            $w(t, u, a, i);
          } catch (f) {
            ot(u, u.return, f);
          }
          St();
        }
        if (u === e) {
          ee = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, ee = s;
          return;
        }
        ee = u.return;
      }
    }
    function $w(e, t, a, i) {
      switch (t.tag) {
        case ge:
        case Le:
        case De: {
          if (t.mode & je) {
            jg();
            try {
              Mu(Mn | ln, t);
            } finally {
              Fg(t);
            }
          } else
            Mu(Mn | ln, t);
          break;
        }
      }
    }
    function Qw(e) {
      ee = e, Iw();
    }
    function Iw() {
      for (; ee !== null; ) {
        var e = ee, t = e.child;
        if ((ee.flags & Mr) !== ue) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              ee = u, Xw(u, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var p = f.sibling;
                    f.sibling = null, f = p;
                  } while (f !== null);
                }
              }
            }
            ee = e;
          }
        }
        (e.subtreeFlags & Ba) !== ue && t !== null ? (t.return = e, ee = t) : Gw();
      }
    }
    function Gw() {
      for (; ee !== null; ) {
        var e = ee;
        (e.flags & Gn) !== ue && (ut(e), Ww(e), St());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, ee = t;
          return;
        }
        ee = e.return;
      }
    }
    function Ww(e) {
      switch (e.tag) {
        case ge:
        case Le:
        case De: {
          e.mode & je ? (jg(), ni(Mn | ln, e, e.return), Fg(e)) : ni(Mn | ln, e, e.return);
          break;
        }
      }
    }
    function Xw(e, t) {
      for (; ee !== null; ) {
        var a = ee;
        ut(a), Kw(a, t), St();
        var i = a.child;
        i !== null ? (i.return = a, ee = i) : qw(e);
      }
    }
    function qw(e) {
      for (; ee !== null; ) {
        var t = ee, a = t.sibling, i = t.return;
        if (wE(t), t === e) {
          ee = null;
          return;
        }
        if (a !== null) {
          a.return = i, ee = a;
          return;
        }
        ee = i;
      }
    }
    function Kw(e, t) {
      switch (e.tag) {
        case ge:
        case Le:
        case De: {
          e.mode & je ? (jg(), ni(Mn, e, t), Fg(e)) : ni(Mn, e, t);
          break;
        }
      }
    }
    function Zw(e) {
      switch (e.tag) {
        case ge:
        case Le:
        case De: {
          try {
            Mu(un | ln, e);
          } catch (a) {
            ot(e, e.return, a);
          }
          break;
        }
        case ce: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            ot(e, e.return, a);
          }
          break;
        }
      }
    }
    function Jw(e) {
      switch (e.tag) {
        case ge:
        case Le:
        case De: {
          try {
            Mu(Mn | ln, e);
          } catch (t) {
            ot(e, e.return, t);
          }
          break;
        }
      }
    }
    function eD(e) {
      switch (e.tag) {
        case ge:
        case Le:
        case De: {
          try {
            ni(un | ln, e, e.return);
          } catch (a) {
            ot(e, e.return, a);
          }
          break;
        }
        case ce: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && yS(e, e.return, t);
          break;
        }
      }
    }
    function tD(e) {
      switch (e.tag) {
        case ge:
        case Le:
        case De:
          try {
            ni(Mn | ln, e, e.return);
          } catch (t) {
            ot(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var op = Symbol.for;
      op("selector.component"), op("selector.has_pseudo_class"), op("selector.role"), op("selector.test_id"), op("selector.text");
    }
    var nD = [];
    function rD() {
      nD.forEach(function(e) {
        return e();
      });
    }
    var aD = N.ReactCurrentActQueue;
    function iD(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function zE() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && aD.current !== null && S("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var lD = Math.ceil, ES = N.ReactCurrentDispatcher, TS = N.ReactCurrentOwner, Un = N.ReactCurrentBatchConfig, ii = N.ReactCurrentActQueue, cn = (
      /*             */
      0
    ), UE = (
      /*               */
      1
    ), An = (
      /*                */
      2
    ), Ma = (
      /*                */
      4
    ), Ul = 0, sp = 1, es = 2, fm = 3, cp = 4, AE = 5, RS = 6, Ue = cn, Sr = null, kt = null, fn = U, Vi = U, xS = Tu(U), dn = Ul, fp = null, dm = U, dp = U, pm = U, pp = null, Yr = null, wS = 0, HE = 500, FE = 1 / 0, uD = 500, Al = null;
    function vp() {
      FE = $t() + uD;
    }
    function jE() {
      return FE;
    }
    var vm = !1, DS = null, qc = null, ts = !1, Nu = null, hp = U, kS = [], bS = null, oD = 50, mp = 0, _S = null, LS = !1, hm = !1, sD = 50, Kc = 0, mm = null, yp = nt, ym = U, VE = !1;
    function gm() {
      return Sr;
    }
    function Cr() {
      return (Ue & (An | Ma)) !== cn ? $t() : (yp !== nt || (yp = $t()), yp);
    }
    function zu(e) {
      var t = e.mode;
      if ((t & xe) === oe)
        return he;
      if ((Ue & An) !== cn && fn !== U)
        return To(fn);
      var a = ax() !== rx;
      if (a) {
        if (Un.transition !== null) {
          var i = Un.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return ym === Fe && (ym = id()), ym;
      }
      var u = Fr();
      if (u !== Fe)
        return u;
      var s = P1();
      return s;
    }
    function cD(e) {
      var t = e.mode;
      return (t & xe) === oe ? he : Tv();
    }
    function pn(e, t, a, i) {
      zD(), VE && S("useInsertionEffect must not schedule updates."), LS && (hm = !0), fu(e, a, i), (Ue & An) !== U && e === Sr ? HD(t) : (Kn && wo(e, t, a), FD(t), e === Sr && ((Ue & An) === cn && (dp = Re(dp, a)), dn === cp && Uu(e, fn)), $r(e, i), a === he && Ue === cn && (t.mode & xe) === oe && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !ii.isBatchingLegacy && (vp(), V0()));
    }
    function fD(e, t, a) {
      var i = e.current;
      i.lanes = t, fu(e, t, a), $r(e, a);
    }
    function dD(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Ue & An) !== cn
      );
    }
    function $r(e, t) {
      var a = e.callbackNode;
      lc(e, t);
      var i = ic(e, e === Sr ? fn : U);
      if (i === U) {
        a !== null && nT(a), e.callbackNode = null, e.callbackPriority = Fe;
        return;
      }
      var u = xi(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(ii.current !== null && a !== HS)) {
        a == null && s !== he && S("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && nT(a);
      var f;
      if (u === he)
        e.tag === Ru ? (ii.isBatchingLegacy !== null && (ii.didScheduleLegacyUpdate = !0), VR(YE.bind(null, e))) : j0(YE.bind(null, e)), ii.current !== null ? ii.current.push(xu) : $1(function() {
          (Ue & (An | Ma)) === cn && xu();
        }), f = null;
      else {
        var p;
        switch (_v(i)) {
          case wn:
            p = uo;
            break;
          case Ea:
            p = Ci;
            break;
          case Ar:
            p = Pa;
            break;
          case Hr:
            p = sl;
            break;
          default:
            p = Pa;
            break;
        }
        f = FS(p, BE.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function BE(e, t) {
      if (Lx(), yp = nt, ym = U, (Ue & (An | Ma)) !== cn)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Fl();
      if (i && e.callbackNode !== a)
        return null;
      var u = ic(e, e === Sr ? fn : U);
      if (u === U)
        return null;
      var s = !oc(e, u) && !Ev(e, u) && !t, f = s ? TD(e, u) : Cm(e, u);
      if (f !== Ul) {
        if (f === es) {
          var p = uc(e);
          p !== U && (u = p, f = MS(e, p));
        }
        if (f === sp) {
          var v = fp;
          throw ns(e, U), Uu(e, u), $r(e, $t()), v;
        }
        if (f === RS)
          Uu(e, u);
        else {
          var m = !oc(e, u), y = e.current.alternate;
          if (m && !vD(y)) {
            if (f = Cm(e, u), f === es) {
              var R = uc(e);
              R !== U && (u = R, f = MS(e, R));
            }
            if (f === sp) {
              var E = fp;
              throw ns(e, U), Uu(e, u), $r(e, $t()), E;
            }
          }
          e.finishedWork = y, e.finishedLanes = u, pD(e, f, u);
        }
      }
      return $r(e, $t()), e.callbackNode === a ? BE.bind(null, e) : null;
    }
    function MS(e, t) {
      var a = pp;
      if (fc(e)) {
        var i = ns(e, t);
        i.flags |= In, NR(e.containerInfo);
      }
      var u = Cm(e, t);
      if (u !== es) {
        var s = Yr;
        Yr = a, s !== null && PE(s);
      }
      return u;
    }
    function PE(e) {
      Yr === null ? Yr = e : Yr.push.apply(Yr, e);
    }
    function pD(e, t, a) {
      switch (t) {
        case Ul:
        case sp:
          throw new Error("Root did not complete. This is a bug in React.");
        // Flow knows about invariant, so it complains if I add a break
        // statement, but eslint doesn't know about invariant, so it complains
        // if I do. eslint-disable-next-line no-fallthrough
        case es: {
          rs(e, Yr, Al);
          break;
        }
        case fm: {
          if (Uu(e, a), Cl(a) && // do not delay if we're inside an act() scope
          !rT()) {
            var i = wS + HE - $t();
            if (i > 10) {
              var u = ic(e, U);
              if (u !== U)
                break;
              var s = e.suspendedLanes;
              if (!El(s, a)) {
                Cr(), sc(e, s);
                break;
              }
              e.timeoutHandle = by(rs.bind(null, e, Yr, Al), i);
              break;
            }
          }
          rs(e, Yr, Al);
          break;
        }
        case cp: {
          if (Uu(e, a), rd(a))
            break;
          if (!rT()) {
            var f = ra(e, a), p = f, v = $t() - p, m = ND(v) - v;
            if (m > 10) {
              e.timeoutHandle = by(rs.bind(null, e, Yr, Al), m);
              break;
            }
          }
          rs(e, Yr, Al);
          break;
        }
        case AE: {
          rs(e, Yr, Al);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function vD(e) {
      for (var t = e; ; ) {
        if (t.flags & lu) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!F(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & lu && v !== null) {
          v.return = t, t = v;
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
    function Uu(e, t) {
      t = Ro(t, pm), t = Ro(t, dp), wv(e, t);
    }
    function YE(e) {
      if (Mx(), (Ue & (An | Ma)) !== cn)
        throw new Error("Should not already be working.");
      Fl();
      var t = ic(e, U);
      if (!Zn(t, he))
        return $r(e, $t()), null;
      var a = Cm(e, t);
      if (e.tag !== Ru && a === es) {
        var i = uc(e);
        i !== U && (t = i, a = MS(e, i));
      }
      if (a === sp) {
        var u = fp;
        throw ns(e, U), Uu(e, t), $r(e, $t()), u;
      }
      if (a === RS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, rs(e, Yr, Al), $r(e, $t()), null;
    }
    function hD(e, t) {
      t !== U && (cc(e, Re(t, he)), $r(e, $t()), (Ue & (An | Ma)) === cn && (vp(), xu()));
    }
    function OS(e, t) {
      var a = Ue;
      Ue |= UE;
      try {
        return e(t);
      } finally {
        Ue = a, Ue === cn && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !ii.isBatchingLegacy && (vp(), V0());
      }
    }
    function mD(e, t, a, i, u) {
      var s = Fr(), f = Un.transition;
      try {
        return Un.transition = null, Ht(wn), e(t, a, i, u);
      } finally {
        Ht(s), Un.transition = f, Ue === cn && vp();
      }
    }
    function Hl(e) {
      Nu !== null && Nu.tag === Ru && (Ue & (An | Ma)) === cn && Fl();
      var t = Ue;
      Ue |= UE;
      var a = Un.transition, i = Fr();
      try {
        return Un.transition = null, Ht(wn), e ? e() : void 0;
      } finally {
        Ht(i), Un.transition = a, Ue = t, (Ue & (An | Ma)) === cn && xu();
      }
    }
    function $E() {
      return (Ue & (An | Ma)) !== cn;
    }
    function Sm(e, t) {
      rr(xS, Vi, e), Vi = Re(Vi, t);
    }
    function NS(e) {
      Vi = xS.current, nr(xS, e);
    }
    function ns(e, t) {
      e.finishedWork = null, e.finishedLanes = U;
      var a = e.timeoutHandle;
      if (a !== _y && (e.timeoutHandle = _y, Y1(a)), kt !== null)
        for (var i = kt.return; i !== null; ) {
          var u = i.alternate;
          SE(u, i), i = i.return;
        }
      Sr = e;
      var s = as(e.current, null);
      return kt = s, fn = Vi = t, dn = Ul, fp = null, dm = U, dp = U, pm = U, pp = null, Yr = null, fx(), Ka.discardPendingWarnings(), s;
    }
    function QE(e, t) {
      do {
        var a = kt;
        try {
          if (_h(), hC(), St(), TS.current = null, a === null || a.return === null) {
            dn = sp, fp = t, kt = null;
            return;
          }
          if (Rn && a.mode & je && am(a, !0), Gr)
            if (vr(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              Ca(a, i, fn);
            } else
              so(a, t, fn);
          Vx(e, a.return, a, t, fn), XE(a);
        } catch (u) {
          t = u, kt === a && a !== null ? (a = a.return, kt = a) : a = kt;
          continue;
        }
        return;
      } while (!0);
    }
    function IE() {
      var e = ES.current;
      return ES.current = Jh, e === null ? Jh : e;
    }
    function GE(e) {
      ES.current = e;
    }
    function yD() {
      wS = $t();
    }
    function gp(e) {
      dm = Re(e, dm);
    }
    function gD() {
      dn === Ul && (dn = fm);
    }
    function zS() {
      (dn === Ul || dn === fm || dn === es) && (dn = cp), Sr !== null && (Eo(dm) || Eo(dp)) && Uu(Sr, fn);
    }
    function SD(e) {
      dn !== cp && (dn = es), pp === null ? pp = [e] : pp.push(e);
    }
    function CD() {
      return dn === Ul;
    }
    function Cm(e, t) {
      var a = Ue;
      Ue |= An;
      var i = IE();
      if (Sr !== e || fn !== t) {
        if (Kn) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Sp(e, fn), u.clear()), Dv(e, t);
        }
        Al = sd(), ns(e, t);
      }
      pl(t);
      do
        try {
          ED();
          break;
        } catch (s) {
          QE(e, s);
        }
      while (!0);
      if (_h(), Ue = a, GE(i), kt !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Bs(), Sr = null, fn = U, dn;
    }
    function ED() {
      for (; kt !== null; )
        WE(kt);
    }
    function TD(e, t) {
      var a = Ue;
      Ue |= An;
      var i = IE();
      if (Sr !== e || fn !== t) {
        if (Kn) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Sp(e, fn), u.clear()), Dv(e, t);
        }
        Al = sd(), vp(), ns(e, t);
      }
      pl(t);
      do
        try {
          RD();
          break;
        } catch (s) {
          QE(e, s);
        }
      while (!0);
      return _h(), GE(i), Ue = a, kt !== null ? (yv(), Ul) : (Bs(), Sr = null, fn = U, dn);
    }
    function RD() {
      for (; kt !== null && !Pf(); )
        WE(kt);
    }
    function WE(e) {
      var t = e.alternate;
      ut(e);
      var a;
      (e.mode & je) !== oe ? (Hg(e), a = US(t, e, Vi), am(e, !0)) : a = US(t, e, Vi), St(), e.memoizedProps = e.pendingProps, a === null ? XE(e) : kt = a, TS.current = null;
    }
    function XE(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & lo) === ue) {
          ut(t);
          var u = void 0;
          if ((t.mode & je) === oe ? u = gE(a, t, Vi) : (Hg(t), u = gE(a, t, Vi), am(t, !1)), St(), u !== null) {
            kt = u;
            return;
          }
        } else {
          var s = gw(a, t);
          if (s !== null) {
            s.flags &= fv, kt = s;
            return;
          }
          if ((t.mode & je) !== oe) {
            am(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= lo, i.subtreeFlags = ue, i.deletions = null;
          else {
            dn = RS, kt = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          kt = v;
          return;
        }
        t = i, kt = t;
      } while (t !== null);
      dn === Ul && (dn = AE);
    }
    function rs(e, t, a) {
      var i = Fr(), u = Un.transition;
      try {
        Un.transition = null, Ht(wn), xD(e, t, a, i);
      } finally {
        Un.transition = u, Ht(i);
      }
      return null;
    }
    function xD(e, t, a, i) {
      do
        Fl();
      while (Nu !== null);
      if (UD(), (Ue & (An | Ma)) !== cn)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (Wf(s), u === null)
        return Xf(), null;
      if (s === U && S("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = U, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Fe;
      var f = Re(u.lanes, u.childLanes);
      ud(e, f), e === Sr && (Sr = null, kt = null, fn = U), ((u.subtreeFlags & Ba) !== ue || (u.flags & Ba) !== ue) && (ts || (ts = !0, bS = a, FS(Pa, function() {
        return Fl(), null;
      })));
      var p = (u.subtreeFlags & (yi | gi | Si | Ba)) !== ue, v = (u.flags & (yi | gi | Si | Ba)) !== ue;
      if (p || v) {
        var m = Un.transition;
        Un.transition = null;
        var y = Fr();
        Ht(wn);
        var R = Ue;
        Ue |= Ma, TS.current = null, Rw(e, u), VC(), Hw(e, u, s), A1(e.containerInfo), e.current = u, co(s), Fw(u, e, s), fo(), Yf(), Ue = R, Ht(y), Un.transition = m;
      } else
        e.current = u, VC();
      var E = ts;
      if (ts ? (ts = !1, Nu = e, hp = s) : (Kc = 0, mm = null), f = e.pendingLanes, f === U && (qc = null), E || JE(e.current, !1), Qf(u.stateNode, i), Kn && e.memoizedUpdaters.clear(), rD(), $r(e, $t()), t !== null)
        for (var b = e.onRecoverableError, L = 0; L < t.length; L++) {
          var M = t[L], Q = M.stack, se = M.digest;
          b(M.value, {
            componentStack: Q,
            digest: se
          });
        }
      if (vm) {
        vm = !1;
        var re = DS;
        throw DS = null, re;
      }
      return Zn(hp, he) && e.tag !== Ru && Fl(), f = e.pendingLanes, Zn(f, he) ? (_x(), e === _S ? mp++ : (mp = 0, _S = e)) : mp = 0, xu(), Xf(), null;
    }
    function Fl() {
      if (Nu !== null) {
        var e = _v(hp), t = ko(Ar, e), a = Un.transition, i = Fr();
        try {
          return Un.transition = null, Ht(t), DD();
        } finally {
          Ht(i), Un.transition = a;
        }
      }
      return !1;
    }
    function wD(e) {
      kS.push(e), ts || (ts = !0, FS(Pa, function() {
        return Fl(), null;
      }));
    }
    function DD() {
      if (Nu === null)
        return !1;
      var e = bS;
      bS = null;
      var t = Nu, a = hp;
      if (Nu = null, hp = U, (Ue & (An | Ma)) !== cn)
        throw new Error("Cannot flush passive effects while already rendering.");
      LS = !0, hm = !1, dl(a);
      var i = Ue;
      Ue |= Ma, Qw(t.current), Bw(t, t.current, a, e);
      {
        var u = kS;
        kS = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          kw(t, f);
        }
      }
      Zf(), JE(t.current, !0), Ue = i, xu(), hm ? t === mm ? Kc++ : (Kc = 0, mm = t) : Kc = 0, LS = !1, hm = !1, If(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function qE(e) {
      return qc !== null && qc.has(e);
    }
    function kD(e) {
      qc === null ? qc = /* @__PURE__ */ new Set([e]) : qc.add(e);
    }
    function bD(e) {
      vm || (vm = !0, DS = e);
    }
    var _D = bD;
    function KE(e, t, a) {
      var i = Zo(a, t), u = WC(e, i, he), s = Du(e, u, he), f = Cr();
      s !== null && (fu(s, he, f), $r(s, f));
    }
    function ot(e, t, a) {
      if (Cw(a), Cp(!1), e.tag === ne) {
        KE(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === ne) {
          KE(i, e, a);
          return;
        } else if (i.tag === ce) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !qE(s)) {
            var f = Zo(a, e), p = tS(i, f, he), v = Du(i, p, he), m = Cr();
            v !== null && (fu(v, he, m), $r(v, m));
            return;
          }
        }
        i = i.return;
      }
      S(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function LD(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = Cr();
      sc(e, a), jD(e), Sr === e && El(fn, a) && (dn === cp || dn === fm && Cl(fn) && $t() - wS < HE ? ns(e, U) : pm = Re(pm, a)), $r(e, u);
    }
    function ZE(e, t) {
      t === Fe && (t = cD(e));
      var a = Cr(), i = Br(e, t);
      i !== null && (fu(i, t, a), $r(i, a));
    }
    function MD(e) {
      var t = e.memoizedState, a = Fe;
      t !== null && (a = t.retryLane), ZE(e, a);
    }
    function OD(e, t) {
      var a = Fe, i;
      switch (e.tag) {
        case Oe:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case Bt:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), ZE(e, a);
    }
    function ND(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : lD(e / 1960) * 1960;
    }
    function zD() {
      if (mp > oD)
        throw mp = 0, _S = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Kc > sD && (Kc = 0, mm = null, S("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function UD() {
      Ka.flushLegacyContextWarning(), Ka.flushPendingUnsafeLifecycleWarnings();
    }
    function JE(e, t) {
      ut(e), Em(e, mi, eD), t && Em(e, ya, tD), Em(e, mi, Zw), t && Em(e, ya, Jw), St();
    }
    function Em(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== ue ? i = i.child : ((i.flags & t) !== ue && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var Tm = null;
    function eT(e) {
      {
        if ((Ue & An) !== cn || !(e.mode & xe))
          return;
        var t = e.tag;
        if (t !== Zt && t !== ne && t !== ce && t !== ge && t !== Le && t !== ft && t !== De)
          return;
        var a = Te(e) || "ReactComponent";
        if (Tm !== null) {
          if (Tm.has(a))
            return;
          Tm.add(a);
        } else
          Tm = /* @__PURE__ */ new Set([a]);
        var i = xn;
        try {
          ut(e), S("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? ut(e) : St();
        }
      }
    }
    var US;
    {
      var AD = null;
      US = function(e, t, a) {
        var i = oT(AD, t);
        try {
          return pE(e, t, a);
        } catch (s) {
          if (WR() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (_h(), hC(), SE(e, t), oT(t, i), t.mode & je && Hg(t), hi(null, pE, null, e, t, a), ja()) {
            var u = io();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var tT = !1, AS;
    AS = /* @__PURE__ */ new Set();
    function HD(e) {
      if (si && !Dx())
        switch (e.tag) {
          case ge:
          case Le:
          case De: {
            var t = kt && Te(kt) || "Unknown", a = t;
            if (!AS.has(a)) {
              AS.add(a);
              var i = Te(e) || "Unknown";
              S("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case ce: {
            tT || (S("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), tT = !0);
            break;
          }
        }
    }
    function Sp(e, t) {
      if (Kn) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          wo(e, i, t);
        });
      }
    }
    var HS = {};
    function FS(e, t) {
      {
        var a = ii.current;
        return a !== null ? (a.push(t), HS) : Bf(e, t);
      }
    }
    function nT(e) {
      if (e !== HS)
        return pv(e);
    }
    function rT() {
      return ii.current !== null;
    }
    function FD(e) {
      {
        if (e.mode & xe) {
          if (!zE())
            return;
        } else if (!iD() || Ue !== cn || e.tag !== ge && e.tag !== Le && e.tag !== De)
          return;
        if (ii.current === null) {
          var t = xn;
          try {
            ut(e), S(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Te(e));
          } finally {
            t ? ut(e) : St();
          }
        }
      }
    }
    function jD(e) {
      e.tag !== Ru && zE() && ii.current === null && S(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Cp(e) {
      VE = e;
    }
    var Oa = null, Zc = null, VD = function(e) {
      Oa = e;
    };
    function Jc(e) {
      {
        if (Oa === null)
          return e;
        var t = Oa(e);
        return t === void 0 ? e : t.current;
      }
    }
    function jS(e) {
      return Jc(e);
    }
    function VS(e) {
      {
        if (Oa === null)
          return e;
        var t = Oa(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Jc(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: Il,
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
    function aT(e, t) {
      {
        if (Oa === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case ce: {
            typeof i == "function" && (u = !0);
            break;
          }
          case ge: {
            (typeof i == "function" || s === mn) && (u = !0);
            break;
          }
          case Le: {
            (s === Il || s === mn) && (u = !0);
            break;
          }
          case ft:
          case De: {
            (s === qr || s === mn) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = Oa(a);
          if (f !== void 0 && f === Oa(i))
            return !0;
        }
        return !1;
      }
    }
    function iT(e) {
      {
        if (Oa === null || typeof WeakSet != "function")
          return;
        Zc === null && (Zc = /* @__PURE__ */ new WeakSet()), Zc.add(e);
      }
    }
    var BD = function(e, t) {
      {
        if (Oa === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Fl(), Hl(function() {
          BS(e.current, i, a);
        });
      }
    }, PD = function(e, t) {
      {
        if (e.context !== la)
          return;
        Fl(), Hl(function() {
          Ep(t, e, null, null);
        });
      }
    };
    function BS(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case ge:
          case De:
          case ce:
            v = p;
            break;
          case Le:
            v = p.render;
            break;
        }
        if (Oa === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var m = !1, y = !1;
        if (v !== null) {
          var R = Oa(v);
          R !== void 0 && (a.has(R) ? y = !0 : t.has(R) && (f === ce ? y = !0 : m = !0));
        }
        if (Zc !== null && (Zc.has(e) || i !== null && Zc.has(i)) && (y = !0), y && (e._debugNeedsRemount = !0), y || m) {
          var E = Br(e, he);
          E !== null && pn(E, e, he, nt);
        }
        u !== null && !y && BS(u, t, a), s !== null && BS(s, t, a);
      }
    }
    var YD = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return PS(e.current, i, a), a;
      }
    };
    function PS(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case ge:
          case De:
          case ce:
            p = f;
            break;
          case Le:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? $D(e, a) : i !== null && PS(i, t, a), u !== null && PS(u, t, a);
      }
    }
    function $D(e, t) {
      {
        var a = QD(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case ie:
              t.add(i.stateNode);
              return;
            case Se:
              t.add(i.stateNode.containerInfo);
              return;
            case ne:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function QD(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === ie)
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
    var YS;
    {
      YS = !1;
      try {
        var lT = Object.preventExtensions({});
      } catch {
        YS = !0;
      }
    }
    function ID(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = ue, this.subtreeFlags = ue, this.deletions = null, this.lanes = U, this.childLanes = U, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !YS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var ua = function(e, t, a, i) {
      return new ID(e, t, a, i);
    };
    function $S(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function GD(e) {
      return typeof e == "function" && !$S(e) && e.defaultProps === void 0;
    }
    function WD(e) {
      if (typeof e == "function")
        return $S(e) ? ce : ge;
      if (e != null) {
        var t = e.$$typeof;
        if (t === Il)
          return Le;
        if (t === qr)
          return ft;
      }
      return Zt;
    }
    function as(e, t) {
      var a = e.alternate;
      a === null ? (a = ua(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = ue, a.subtreeFlags = ue, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & zt, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case Zt:
        case ge:
        case De:
          a.type = Jc(e.type);
          break;
        case ce:
          a.type = jS(e.type);
          break;
        case Le:
          a.type = VS(e.type);
          break;
      }
      return a;
    }
    function XD(e, t) {
      e.flags &= zt | Et;
      var a = e.alternate;
      if (a === null)
        e.childLanes = U, e.lanes = t, e.child = null, e.subtreeFlags = ue, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = ue, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function qD(e, t, a) {
      var i;
      return e === Sh ? (i = xe, t === !0 && (i |= Ke, i |= Ve)) : i = oe, Kn && (i |= je), ua(ne, null, null, i);
    }
    function QS(e, t, a, i, u, s) {
      var f = Zt, p = e;
      if (typeof e == "function")
        $S(e) ? (f = ce, p = jS(p)) : p = Jc(p);
      else if (typeof e == "string")
        f = ie;
      else
        e: switch (e) {
          case Yl:
            return Au(a.children, u, s, t);
          case Gi:
            f = at, u |= Ke, (u & xe) !== oe && (u |= Ve);
            break;
          case $l:
            return KD(a, u, s, t);
          case ls:
            return ZD(a, u, s, t);
          case us:
            return JD(a, u, s, t);
          case lf:
            return uT(a, u, s, t);
          case kp:
          // eslint-disable-next-line no-fallthrough
          case Dp:
          // eslint-disable-next-line no-fallthrough
          case bp:
          // eslint-disable-next-line no-fallthrough
          case _p:
          // eslint-disable-next-line no-fallthrough
          case _m:
          // eslint-disable-next-line no-fallthrough
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case Ql:
                  f = Cn;
                  break e;
                case Vu:
                  f = Rr;
                  break e;
                case Il:
                  f = Le, p = VS(p);
                  break e;
                case qr:
                  f = ft;
                  break e;
                case mn:
                  f = En, p = null;
                  break e;
              }
            var v = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var m = i ? Te(i) : null;
              m && (v += `

Check the render method of \`` + m + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
          }
        }
      var y = ua(f, a, t, u);
      return y.elementType = e, y.type = p, y.lanes = s, y._debugOwner = i, y;
    }
    function IS(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = QS(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Au(e, t, a, i) {
      var u = ua(Xe, e, i, t);
      return u.lanes = a, u;
    }
    function KD(e, t, a, i) {
      typeof e.id != "string" && S('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = ua(it, e, i, t | je);
      return u.elementType = $l, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function ZD(e, t, a, i) {
      var u = ua(Oe, e, i, t);
      return u.elementType = ls, u.lanes = a, u;
    }
    function JD(e, t, a, i) {
      var u = ua(Bt, e, i, t);
      return u.elementType = us, u.lanes = a, u;
    }
    function uT(e, t, a, i) {
      var u = ua(we, e, i, t);
      u.elementType = lf, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function GS(e, t, a) {
      var i = ua(He, e, null, t);
      return i.lanes = a, i;
    }
    function ek() {
      var e = ua(ie, null, null, oe);
      return e.elementType = "DELETED", e;
    }
    function tk(e) {
      var t = ua(Gt, null, null, oe);
      return t.stateNode = e, t;
    }
    function WS(e, t, a) {
      var i = e.children !== null ? e.children : [], u = ua(Se, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function oT(e, t) {
      return e === null && (e = ua(Zt, null, null, oe)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function nk(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = _y, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Fe, this.eventTimes = xo(U), this.expirationTimes = xo(nt), this.pendingLanes = U, this.suspendedLanes = U, this.pingedLanes = U, this.expiredLanes = U, this.mutableReadLanes = U, this.finishedLanes = U, this.entangledLanes = U, this.entanglements = xo(U), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < vl; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Sh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Ru:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function sT(e, t, a, i, u, s, f, p, v, m) {
      var y = new nk(e, t, a, p, v), R = qD(t, s);
      y.current = R, R.stateNode = y;
      {
        var E = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        R.memoizedState = E;
      }
      return ug(R), y;
    }
    var XS = "18.3.1";
    function rk(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Vl(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: Xr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var qS, KS;
    qS = !1, KS = {};
    function cT(e) {
      if (!e)
        return la;
      var t = iu(e), a = jR(t);
      if (t.tag === ce) {
        var i = t.type;
        if (Ni(i))
          return H0(t, i, a);
      }
      return a;
    }
    function ak(e, t) {
      {
        var a = iu(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = Xn(a);
        if (u === null)
          return null;
        if (u.mode & Ke) {
          var s = Te(a) || "Component";
          if (!KS[s]) {
            KS[s] = !0;
            var f = xn;
            try {
              ut(u), a.mode & Ke ? S("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : S("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? ut(f) : St();
            }
          }
        }
        return u.stateNode;
      }
    }
    function fT(e, t, a, i, u, s, f, p) {
      var v = !1, m = null;
      return sT(e, t, v, m, a, i, u, s, f);
    }
    function dT(e, t, a, i, u, s, f, p, v, m) {
      var y = !0, R = sT(a, i, y, e, u, s, f, p, v);
      R.context = cT(null);
      var E = R.current, b = Cr(), L = zu(E), M = Nl(b, L);
      return M.callback = t ?? null, Du(E, M, L), fD(R, L, b), R;
    }
    function Ep(e, t, a, i) {
      $f(t, e);
      var u = t.current, s = Cr(), f = zu(u);
      pt(f);
      var p = cT(a);
      t.context === null ? t.context = p : t.pendingContext = p, si && xn !== null && !qS && (qS = !0, S(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Te(xn) || "Unknown"));
      var v = Nl(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && S("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var m = Du(u, v, f);
      return m !== null && (pn(m, u, f, s), zh(m, u, f)), f;
    }
    function Rm(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case ie:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function ik(e) {
      switch (e.tag) {
        case ne: {
          var t = e.stateNode;
          if (fc(t)) {
            var a = Sv(t);
            hD(t, a);
          }
          break;
        }
        case Oe: {
          Hl(function() {
            var u = Br(e, he);
            if (u !== null) {
              var s = Cr();
              pn(u, e, he, s);
            }
          });
          var i = he;
          ZS(e, i);
          break;
        }
      }
    }
    function pT(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = xv(a.retryLane, t));
    }
    function ZS(e, t) {
      pT(e, t);
      var a = e.alternate;
      a && pT(a, t);
    }
    function lk(e) {
      if (e.tag === Oe) {
        var t = go, a = Br(e, t);
        if (a !== null) {
          var i = Cr();
          pn(a, e, t, i);
        }
        ZS(e, t);
      }
    }
    function uk(e) {
      if (e.tag === Oe) {
        var t = zu(e), a = Br(e, t);
        if (a !== null) {
          var i = Cr();
          pn(a, e, t, i);
        }
        ZS(e, t);
      }
    }
    function vT(e) {
      var t = st(e);
      return t === null ? null : t.stateNode;
    }
    var hT = function(e) {
      return null;
    };
    function ok(e) {
      return hT(e);
    }
    var mT = function(e) {
      return !1;
    };
    function sk(e) {
      return mT(e);
    }
    var yT = null, gT = null, ST = null, CT = null, ET = null, TT = null, RT = null, xT = null, wT = null;
    {
      var DT = function(e, t, a) {
        var i = t[a], u = en(e) ? e.slice() : Me({}, e);
        return a + 1 === t.length ? (en(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = DT(e[i], t, a + 1), u);
      }, kT = function(e, t) {
        return DT(e, t, 0);
      }, bT = function(e, t, a, i) {
        var u = t[i], s = en(e) ? e.slice() : Me({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], en(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = bT(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, _T = function(e, t, a) {
        if (t.length !== a.length) {
          bt("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              bt("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return bT(e, t, a, 0);
      }, LT = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = en(e) ? e.slice() : Me({}, e);
        return s[u] = LT(e[u], t, a + 1, i), s;
      }, MT = function(e, t, a) {
        return LT(e, t, 0, a);
      }, JS = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      yT = function(e, t, a, i) {
        var u = JS(e, t);
        if (u !== null) {
          var s = MT(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = Me({}, e.memoizedProps);
          var f = Br(e, he);
          f !== null && pn(f, e, he, nt);
        }
      }, gT = function(e, t, a) {
        var i = JS(e, t);
        if (i !== null) {
          var u = kT(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = Me({}, e.memoizedProps);
          var s = Br(e, he);
          s !== null && pn(s, e, he, nt);
        }
      }, ST = function(e, t, a, i) {
        var u = JS(e, t);
        if (u !== null) {
          var s = _T(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = Me({}, e.memoizedProps);
          var f = Br(e, he);
          f !== null && pn(f, e, he, nt);
        }
      }, CT = function(e, t, a) {
        e.pendingProps = MT(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Br(e, he);
        i !== null && pn(i, e, he, nt);
      }, ET = function(e, t) {
        e.pendingProps = kT(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Br(e, he);
        a !== null && pn(a, e, he, nt);
      }, TT = function(e, t, a) {
        e.pendingProps = _T(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Br(e, he);
        i !== null && pn(i, e, he, nt);
      }, RT = function(e) {
        var t = Br(e, he);
        t !== null && pn(t, e, he, nt);
      }, xT = function(e) {
        hT = e;
      }, wT = function(e) {
        mT = e;
      };
    }
    function ck(e) {
      var t = Xn(e);
      return t === null ? null : t.stateNode;
    }
    function fk(e) {
      return null;
    }
    function dk() {
      return xn;
    }
    function pk(e) {
      var t = e.findFiberByHostInstance, a = N.ReactCurrentDispatcher;
      return ou({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: yT,
        overrideHookStateDeletePath: gT,
        overrideHookStateRenamePath: ST,
        overrideProps: CT,
        overridePropsDeletePath: ET,
        overridePropsRenamePath: TT,
        setErrorHandler: xT,
        setSuspenseHandler: wT,
        scheduleUpdate: RT,
        currentDispatcherRef: a,
        findHostInstanceByFiber: ck,
        findFiberByHostInstance: t || fk,
        // React Refresh
        findHostInstancesForRefresh: YD,
        scheduleRefresh: BD,
        scheduleRoot: PD,
        setRefreshHandler: VD,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: dk,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: XS
      });
    }
    var OT = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function e0(e) {
      this._internalRoot = e;
    }
    xm.prototype.render = e0.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? S("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : wm(arguments[1]) ? S("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && S("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Ot) {
          var i = vT(t.current);
          i && i.parentNode !== a && S("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Ep(e, t, null, null);
    }, xm.prototype.unmount = e0.prototype.unmount = function() {
      typeof arguments[0] == "function" && S("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        $E() && S("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Hl(function() {
          Ep(null, e, null, null);
        }), O0(t);
      }
    };
    function vk(e, t) {
      if (!wm(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      NT(e);
      var a = !1, i = !1, u = "", s = OT;
      t != null && (t.hydrate ? bt("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === oi && S(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = fT(e, Sh, null, a, i, u, s);
      dh(f.current, e);
      var p = e.nodeType === Ot ? e.parentNode : e;
      return kd(p), new e0(f);
    }
    function xm(e) {
      this._internalRoot = e;
    }
    function hk(e) {
      e && zv(e);
    }
    xm.prototype.unstable_scheduleHydration = hk;
    function mk(e, t, a) {
      if (!wm(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      NT(e), t === void 0 && S("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = OT;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var m = dT(t, null, e, Sh, i, s, f, p, v);
      if (dh(m.current, e), kd(e), u)
        for (var y = 0; y < u.length; y++) {
          var R = u[y];
          Cx(m, R);
        }
      return new xm(m);
    }
    function wm(e) {
      return !!(e && (e.nodeType === Qn || e.nodeType === Fa || e.nodeType === _f));
    }
    function Tp(e) {
      return !!(e && (e.nodeType === Qn || e.nodeType === Fa || e.nodeType === _f || e.nodeType === Ot && e.nodeValue === " react-mount-point-unstable "));
    }
    function NT(e) {
      e.nodeType === Qn && e.tagName && e.tagName.toUpperCase() === "BODY" && S("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Fd(e) && (e._reactRootContainer ? S("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : S("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var yk = N.ReactCurrentOwner, zT;
    zT = function(e) {
      if (e._reactRootContainer && e.nodeType !== Ot) {
        var t = vT(e._reactRootContainer.current);
        t && t.parentNode !== e && S("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = t0(e), u = !!(i && Eu(i));
      u && !a && S("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Qn && e.tagName && e.tagName.toUpperCase() === "BODY" && S("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function t0(e) {
      return e ? e.nodeType === Fa ? e.documentElement : e.firstChild : null;
    }
    function UT() {
    }
    function gk(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var E = Rm(f);
            s.call(E);
          };
        }
        var f = dT(
          t,
          i,
          e,
          Ru,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          UT
        );
        e._reactRootContainer = f, dh(f.current, e);
        var p = e.nodeType === Ot ? e.parentNode : e;
        return kd(p), Hl(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var m = i;
          i = function() {
            var E = Rm(y);
            m.call(E);
          };
        }
        var y = fT(
          e,
          Ru,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          UT
        );
        e._reactRootContainer = y, dh(y.current, e);
        var R = e.nodeType === Ot ? e.parentNode : e;
        return kd(R), Hl(function() {
          Ep(t, y, a, i);
        }), y;
      }
    }
    function Sk(e, t) {
      e !== null && typeof e != "function" && S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Dm(e, t, a, i, u) {
      zT(a), Sk(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = gk(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = Rm(f);
            p.call(v);
          };
        }
        Ep(t, f, e, u);
      }
      return Rm(f);
    }
    var AT = !1;
    function Ck(e) {
      {
        AT || (AT = !0, S("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = yk.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || S("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", We(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Qn ? e : ak(e, "findDOMNode");
    }
    function Ek(e, t, a) {
      if (S("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Tp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Fd(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Dm(null, e, t, !0, a);
    }
    function Tk(e, t, a) {
      if (S("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Tp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Fd(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Dm(null, e, t, !1, a);
    }
    function Rk(e, t, a, i) {
      if (S("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Tp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !Zm(e))
        throw new Error("parentComponent must be a valid React Component");
      return Dm(e, t, a, !1, i);
    }
    var HT = !1;
    function xk(e) {
      if (HT || (HT = !0, S("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !Tp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = Fd(e) && e._reactRootContainer === void 0;
        t && S("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = t0(e), i = a && !Eu(a);
          i && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Hl(function() {
          Dm(null, null, e, !1, function() {
            e._reactRootContainer = null, O0(e);
          });
        }), !0;
      } else {
        {
          var u = t0(e), s = !!(u && Eu(u)), f = e.nodeType === Qn && Tp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    gn(ik), du(lk), Lv(uk), _o(Fr), cd(kv), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && S("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), bs(D1), Km(OS, mD, Hl);
    function wk(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!wm(t))
        throw new Error("Target container is not a DOM element.");
      return rk(e, t, null, a);
    }
    function Dk(e, t, a, i) {
      return Rk(e, t, a, i);
    }
    var n0 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Eu, Lc, ph, tu, _s, OS]
    };
    function kk(e, t) {
      return n0.usingClientEntryPoint || S('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), vk(e, t);
    }
    function bk(e, t, a) {
      return n0.usingClientEntryPoint || S('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), mk(e, t, a);
    }
    function _k(e) {
      return $E() && S("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Hl(e);
    }
    var Lk = pk({
      findFiberByHostInstance: Yo,
      bundleType: 1,
      version: XS,
      rendererPackageName: "react-dom"
    });
    if (!Lk && hn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var FT = window.location.protocol;
      /^(https?|file):$/.test(FT) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (FT === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Ir.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = n0, Ir.createPortal = wk, Ir.createRoot = kk, Ir.findDOMNode = Ck, Ir.flushSync = _k, Ir.hydrate = Ek, Ir.hydrateRoot = bk, Ir.render = Tk, Ir.unmountComponentAtNode = xk, Ir.unstable_batchedUpdates = OS, Ir.unstable_renderSubtreeIntoContainer = Dk, Ir.version = XS, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Ir;
}
var $T;
function Fk() {
  if ($T) return km.exports;
  $T = 1;
  function ae() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ae);
      } catch (_e) {
        console.error(_e);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (ae(), km.exports = Ak()) : km.exports = Hk(), km.exports;
}
var jk = Fk();
const Qk = /* @__PURE__ */ Nk(jk);
export {
  Qk as R,
  Fk as a,
  jk as r
};
//# sourceMappingURL=index-CGl3Xo_k.js.map
