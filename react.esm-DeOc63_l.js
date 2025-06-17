import * as sa from "react";
import Qu from "react";
import { a as oo, R as Ca } from "./index-CGl3Xo_k.js";
import { g as Zs } from "./_commonjsHelpers-DaMA6jEr.js";
var ya = { exports: {} }, de = {};
/**
 * @license React
 * react-dom-test-utils.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mo;
function ec() {
  if (Mo) return de;
  Mo = 1;
  var e = Qu, r = oo();
  function t(p) {
    var I = p, S = p;
    if (p.alternate) for (; I.return; ) I = I.return;
    else {
      p = I;
      do
        I = p, (I.flags & 4098) !== 0 && (S = I.return), p = I.return;
      while (p);
    }
    return I.tag === 3 ? S : null;
  }
  function a(p) {
    if (t(p) !== p) throw Error("Unable to find node on an unmounted component.");
  }
  function s(p) {
    var I = p.alternate;
    if (!I) {
      if (I = t(p), I === null) throw Error("Unable to find node on an unmounted component.");
      return I !== p ? null : p;
    }
    for (var S = p, H = I; ; ) {
      var J = S.return;
      if (J === null) break;
      var Z = J.alternate;
      if (Z === null) {
        if (H = J.return, H !== null) {
          S = H;
          continue;
        }
        break;
      }
      if (J.child === Z.child) {
        for (Z = J.child; Z; ) {
          if (Z === S) return a(J), p;
          if (Z === H) return a(J), I;
          Z = Z.sibling;
        }
        throw Error("Unable to find node on an unmounted component.");
      }
      if (S.return !== H.return) S = J, H = Z;
      else {
        for (var G = !1, re = J.child; re; ) {
          if (re === S) {
            G = !0, S = J, H = Z;
            break;
          }
          if (re === H) {
            G = !0, H = J, S = Z;
            break;
          }
          re = re.sibling;
        }
        if (!G) {
          for (re = Z.child; re; ) {
            if (re === S) {
              G = !0, S = Z, H = J;
              break;
            }
            if (re === H) {
              G = !0, H = Z, S = J;
              break;
            }
            re = re.sibling;
          }
          if (!G) throw Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
        }
      }
      if (S.alternate !== H) throw Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
    }
    if (S.tag !== 3) throw Error("Unable to find node on an unmounted component.");
    return S.stateNode.current === S ? p : I;
  }
  var c = Object.assign;
  function f(p) {
    var I = p.keyCode;
    return "charCode" in p ? (p = p.charCode, p === 0 && I === 13 && (p = 13)) : p = I, p === 10 && (p = 13), 32 <= p || p === 13 ? p : 0;
  }
  function h() {
    return !0;
  }
  function u() {
    return !1;
  }
  function o(p) {
    function I(S, H, J, Z, G) {
      this._reactName = S, this._targetInst = J, this.type = H, this.nativeEvent = Z, this.target = G, this.currentTarget = null;
      for (var re in p) p.hasOwnProperty(re) && (S = p[re], this[re] = S ? S(Z) : Z[re]);
      return this.isDefaultPrevented = (Z.defaultPrevented != null ? Z.defaultPrevented : Z.returnValue === !1) ? h : u, this.isPropagationStopped = u, this;
    }
    return c(I.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var S = this.nativeEvent;
      S && (S.preventDefault ? S.preventDefault() : typeof S.returnValue != "unknown" && (S.returnValue = !1), this.isDefaultPrevented = h);
    }, stopPropagation: function() {
      var S = this.nativeEvent;
      S && (S.stopPropagation ? S.stopPropagation() : typeof S.cancelBubble != "unknown" && (S.cancelBubble = !0), this.isPropagationStopped = h);
    }, persist: function() {
    }, isPersistent: h }), I;
  }
  var d = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(p) {
    return p.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, i = o(d), n = c({}, d, { view: 0, detail: 0 });
  o(n);
  var y, R, g, T = c({}, n, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: L, button: 0, buttons: 0, relatedTarget: function(p) {
    return p.relatedTarget === void 0 ? p.fromElement === p.srcElement ? p.toElement : p.fromElement : p.relatedTarget;
  }, movementX: function(p) {
    return "movementX" in p ? p.movementX : (p !== g && (g && p.type === "mousemove" ? (y = p.screenX - g.screenX, R = p.screenY - g.screenY) : R = y = 0, g = p), y);
  }, movementY: function(p) {
    return "movementY" in p ? p.movementY : R;
  } });
  o(T);
  var l = c({}, T, { dataTransfer: 0 });
  o(l);
  var C = c({}, n, { relatedTarget: 0 });
  o(C);
  var _ = c({}, d, { animationName: 0, elapsedTime: 0, pseudoElement: 0 });
  o(_);
  var P = c({}, d, { clipboardData: function(p) {
    return "clipboardData" in p ? p.clipboardData : window.clipboardData;
  } });
  o(P);
  var w = c({}, d, { data: 0 });
  o(w);
  var v = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, b = {
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
  }, E = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function A(p) {
    var I = this.nativeEvent;
    return I.getModifierState ? I.getModifierState(p) : (p = E[p]) ? !!I[p] : !1;
  }
  function L() {
    return A;
  }
  var j = c({}, n, { key: function(p) {
    if (p.key) {
      var I = v[p.key] || p.key;
      if (I !== "Unidentified") return I;
    }
    return p.type === "keypress" ? (p = f(p), p === 13 ? "Enter" : String.fromCharCode(p)) : p.type === "keydown" || p.type === "keyup" ? b[p.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: L, charCode: function(p) {
    return p.type === "keypress" ? f(p) : 0;
  }, keyCode: function(p) {
    return p.type === "keydown" || p.type === "keyup" ? p.keyCode : 0;
  }, which: function(p) {
    return p.type === "keypress" ? f(p) : p.type === "keydown" || p.type === "keyup" ? p.keyCode : 0;
  } });
  o(j);
  var F = c({}, T, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 });
  o(F);
  var O = c({}, n, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: L });
  o(O);
  var B = c({}, d, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 });
  o(B);
  var K = c({}, T, { deltaX: function(p) {
    return "deltaX" in p ? p.deltaX : "wheelDeltaX" in p ? -p.wheelDeltaX : 0;
  }, deltaY: function(p) {
    return "deltaY" in p ? p.deltaY : "wheelDeltaY" in p ? -p.wheelDeltaY : "wheelDelta" in p ? -p.wheelDelta : 0;
  }, deltaZ: 0, deltaMode: 0 });
  o(K);
  function ee(p, I, S, H, J, Z, G, re, Re) {
    var Ce = Array.prototype.slice.call(arguments, 3);
    try {
      I.apply(S, Ce);
    } catch (Er) {
      this.onError(Er);
    }
  }
  var z = !1, ue = null, pe = !1, qe = null, Pe = { onError: function(p) {
    z = !0, ue = p;
  } };
  function Te(p, I, S, H, J, Z, G, re, Re) {
    z = !1, ue = null, ee.apply(Pe, arguments);
  }
  function $(p, I, S, H, J, Z, G, re, Re) {
    if (Te.apply(this, arguments), z) {
      if (z) {
        var Ce = ue;
        z = !1, ue = null;
      } else throw Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
      pe || (pe = !0, qe = Ce);
    }
  }
  var Ee = Array.isArray, me = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events, ye = me[0], Ne = me[1], ke = me[2], q = me[3], U = me[4], N = e.unstable_act;
  function Y() {
  }
  function V(p, I) {
    if (!p) return [];
    if (p = s(p), !p) return [];
    for (var S = p, H = []; ; ) {
      if (S.tag === 5 || S.tag === 6 || S.tag === 1 || S.tag === 0) {
        var J = S.stateNode;
        I(J) && H.push(J);
      }
      if (S.child) S.child.return = S, S = S.child;
      else {
        if (S === p) return H;
        for (; !S.sibling; ) {
          if (!S.return || S.return === p) return H;
          S = S.return;
        }
        S.sibling.return = S.return, S = S.sibling;
      }
    }
  }
  function Q(p, I) {
    if (p && !p._reactInternals) {
      var S = String(p);
      throw p = Ee(p) ? "an array" : p && p.nodeType === 1 && p.tagName ? "a DOM node" : S === "[object Object]" ? "object with keys {" + Object.keys(p).join(", ") + "}" : S, Error(I + "(...): the first argument must be a React class instance. Instead received: " + (p + "."));
    }
  }
  function ie(p) {
    return !(!p || p.nodeType !== 1 || !p.tagName);
  }
  function oe(p) {
    return ie(p) ? !1 : p != null && typeof p.render == "function" && typeof p.setState == "function";
  }
  function ve(p, I) {
    return oe(p) ? p._reactInternals.type === I : !1;
  }
  function Ae(p, I) {
    return Q(p, "findAllInRenderedTree"), p ? V(p._reactInternals, I) : [];
  }
  function Ke(p, I) {
    return Q(p, "scryRenderedDOMComponentsWithClass"), Ae(p, function(S) {
      if (ie(S)) {
        var H = S.className;
        typeof H != "string" && (H = S.getAttribute("class") || "");
        var J = H.split(/\s+/);
        if (!Ee(I)) {
          if (I === void 0) throw Error("TestUtils.scryRenderedDOMComponentsWithClass expects a className as a second argument.");
          I = I.split(/\s+/);
        }
        return I.every(function(Z) {
          return J.indexOf(Z) !== -1;
        });
      }
      return !1;
    });
  }
  function ir(p, I) {
    return Q(p, "scryRenderedDOMComponentsWithTag"), Ae(p, function(S) {
      return ie(S) && S.tagName.toUpperCase() === I.toUpperCase();
    });
  }
  function ur(p, I) {
    return Q(p, "scryRenderedComponentsWithType"), Ae(p, function(S) {
      return ve(S, I);
    });
  }
  function sr(p, I, S) {
    var H = p.type || "unknown-event";
    p.currentTarget = Ne(S), $(H, I, void 0, p), p.currentTarget = null;
  }
  function cr(p, I, S) {
    for (var H = []; p; ) {
      H.push(p);
      do
        p = p.return;
      while (p && p.tag !== 5);
      p = p || null;
    }
    for (p = H.length; 0 < p--; ) I(H[p], "captured", S);
    for (p = 0; p < H.length; p++) I(H[p], "bubbled", S);
  }
  function dr(p, I) {
    var S = p.stateNode;
    if (!S) return null;
    var H = ke(S);
    if (!H) return null;
    S = H[I];
    e: switch (I) {
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
        (H = !H.disabled) || (p = p.type, H = !(p === "button" || p === "input" || p === "select" || p === "textarea")), p = !H;
        break e;
      default:
        p = !1;
    }
    if (p) return null;
    if (S && typeof S != "function") throw Error("Expected `" + I + "` listener to be a function, instead got a value of `" + typeof S + "` type.");
    return S;
  }
  function Rr(p, I, S) {
    p && S && S._reactName && (I = dr(p, S._reactName)) && (S._dispatchListeners == null && (S._dispatchListeners = []), S._dispatchInstances == null && (S._dispatchInstances = []), S._dispatchListeners.push(I), S._dispatchInstances.push(p));
  }
  function Ze(p, I, S) {
    var H = S._reactName;
    I === "captured" && (H += "Capture"), (I = dr(p, H)) && (S._dispatchListeners == null && (S._dispatchListeners = []), S._dispatchInstances == null && (S._dispatchInstances = []), S._dispatchListeners.push(I), S._dispatchInstances.push(p));
  }
  var fr = {}, Le = /* @__PURE__ */ new Set(["mouseEnter", "mouseLeave", "pointerEnter", "pointerLeave"]);
  function gr(p) {
    return function(I, S) {
      if (e.isValidElement(I)) throw Error("TestUtils.Simulate expected a DOM node as the first argument but received a React element. Pass the DOM node you wish to simulate the event on instead. Note that TestUtils.Simulate will not work if you are using shallow rendering.");
      if (oe(I)) throw Error("TestUtils.Simulate expected a DOM node as the first argument but received a component instance. Pass the DOM node you wish to simulate the event on instead.");
      var H = "on" + p[0].toUpperCase() + p.slice(1), J = new Y();
      J.target = I, J.type = p.toLowerCase();
      var Z = ye(I), G = new i(H, J.type, Z, J, I);
      G.persist(), c(G, S), Le.has(p) ? G && G._reactName && Rr(G._targetInst, null, G) : G && G._reactName && cr(G._targetInst, Ze, G), r.unstable_batchedUpdates(function() {
        if (q(I), G) {
          var re = G._dispatchListeners, Re = G._dispatchInstances;
          if (Ee(re)) for (var Ce = 0; Ce < re.length && !G.isPropagationStopped(); Ce++) sr(G, re[Ce], Re[Ce]);
          else re && sr(G, re, Re);
          G._dispatchListeners = null, G._dispatchInstances = null, G.isPersistent() || G.constructor.release(G);
        }
        if (pe) throw re = qe, pe = !1, qe = null, re;
      }), U();
    };
  }
  return "blur cancel click close contextMenu copy cut auxClick doubleClick dragEnd dragStart drop focus input invalid keyDown keyPress keyUp mouseDown mouseUp paste pause play pointerCancel pointerDown pointerUp rateChange reset resize seeked submit touchCancel touchEnd touchStart volumeChange drag dragEnter dragExit dragLeave dragOver mouseMove mouseOut mouseOver pointerMove pointerOut pointerOver scroll toggle touchMove wheel abort animationEnd animationIteration animationStart canPlay canPlayThrough durationChange emptied encrypted ended error gotPointerCapture load loadedData loadedMetadata loadStart lostPointerCapture playing progress seeking stalled suspend timeUpdate transitionEnd waiting mouseEnter mouseLeave pointerEnter pointerLeave change select beforeInput compositionEnd compositionStart compositionUpdate".split(" ").forEach(function(p) {
    fr[p] = gr(p);
  }), de.Simulate = fr, de.act = N, de.findAllInRenderedTree = Ae, de.findRenderedComponentWithType = function(p, I) {
    if (Q(p, "findRenderedComponentWithType"), p = ur(p, I), p.length !== 1) throw Error("Did not find exactly one match (found: " + p.length + ") for componentType:" + I);
    return p[0];
  }, de.findRenderedDOMComponentWithClass = function(p, I) {
    if (Q(p, "findRenderedDOMComponentWithClass"), p = Ke(p, I), p.length !== 1) throw Error("Did not find exactly one match (found: " + p.length + ") for class:" + I);
    return p[0];
  }, de.findRenderedDOMComponentWithTag = function(p, I) {
    if (Q(p, "findRenderedDOMComponentWithTag"), p = ir(p, I), p.length !== 1) throw Error("Did not find exactly one match (found: " + p.length + ") for tag:" + I);
    return p[0];
  }, de.isCompositeComponent = oe, de.isCompositeComponentWithType = ve, de.isDOMComponent = ie, de.isDOMComponentElement = function(p) {
    return !!(p && e.isValidElement(p) && p.tagName);
  }, de.isElement = function(p) {
    return e.isValidElement(p);
  }, de.isElementOfType = function(p, I) {
    return e.isValidElement(p) && p.type === I;
  }, de.mockComponent = function(p, I) {
    return I = I || p.mockTagName || "div", p.prototype.render.mockImplementation(function() {
      return e.createElement(I, null, this.props.children);
    }), this;
  }, de.nativeTouchData = function(p, I) {
    return { touches: [{ pageX: p, pageY: I }] };
  }, de.renderIntoDocument = function(p) {
    var I = document.createElement("div");
    return r.render(p, I);
  }, de.scryRenderedComponentsWithType = ur, de.scryRenderedDOMComponentsWithClass = Ke, de.scryRenderedDOMComponentsWithTag = ir, de.traverseTwoPhase = cr, de;
}
var fe = {};
/**
 * @license React
 * react-dom-test-utils.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oo;
function rc() {
  return Oo || (Oo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Qu, r = oo(), t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function a(m) {
      {
        for (var x = arguments.length, M = new Array(x > 1 ? x - 1 : 0), D = 1; D < x; D++)
          M[D - 1] = arguments[D];
        c("warn", m, M);
      }
    }
    function s(m) {
      {
        for (var x = arguments.length, M = new Array(x > 1 ? x - 1 : 0), D = 1; D < x; D++)
          M[D - 1] = arguments[D];
        c("error", m, M);
      }
    }
    function c(m, x, M) {
      {
        var D = t.ReactDebugCurrentFrame, W = D.getStackAddendum();
        W !== "" && (x += "%s", M = M.concat([W]));
        var X = M.map(function(se) {
          return String(se);
        });
        X.unshift("Warning: " + x), Function.prototype.apply.call(console[m], console, X);
      }
    }
    function f(m) {
      return m._reactInternals;
    }
    var h = 0, u = 1, o = 3, d = 5, i = 6, n = (
      /*                      */
      0
    ), y = (
      /*                    */
      2
    ), R = (
      /*                    */
      4096
    );
    t.ReactCurrentOwner;
    function g(m) {
      var x = m, M = m;
      if (m.alternate)
        for (; x.return; )
          x = x.return;
      else {
        var D = x;
        do
          x = D, (x.flags & (y | R)) !== n && (M = x.return), D = x.return;
        while (D);
      }
      return x.tag === o ? M : null;
    }
    function T(m) {
      if (g(m) !== m)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function l(m) {
      var x = m.alternate;
      if (!x) {
        var M = g(m);
        if (M === null)
          throw new Error("Unable to find node on an unmounted component.");
        return M !== m ? null : m;
      }
      for (var D = m, W = x; ; ) {
        var X = D.return;
        if (X === null)
          break;
        var se = X.alternate;
        if (se === null) {
          var xe = X.return;
          if (xe !== null) {
            D = W = xe;
            continue;
          }
          break;
        }
        if (X.child === se.child) {
          for (var Me = X.child; Me; ) {
            if (Me === D)
              return T(X), m;
            if (Me === W)
              return T(X), x;
            Me = Me.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (D.return !== W.return)
          D = X, W = se;
        else {
          for (var _e = !1, be = X.child; be; ) {
            if (be === D) {
              _e = !0, D = X, W = se;
              break;
            }
            if (be === W) {
              _e = !0, W = X, D = se;
              break;
            }
            be = be.sibling;
          }
          if (!_e) {
            for (be = se.child; be; ) {
              if (be === D) {
                _e = !0, D = se, W = X;
                break;
              }
              if (be === W) {
                _e = !0, W = se, D = X;
                break;
              }
              be = be.sibling;
            }
            if (!_e)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (D.alternate !== W)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (D.tag !== o)
        throw new Error("Unable to find node on an unmounted component.");
      return D.stateNode.current === D ? m : x;
    }
    var C = Object.assign;
    function _(m) {
      var x, M = m.keyCode;
      return "charCode" in m ? (x = m.charCode, x === 0 && M === 13 && (x = 13)) : x = M, x === 10 && (x = 13), x >= 32 || x === 13 ? x : 0;
    }
    function P() {
      return !0;
    }
    function w() {
      return !1;
    }
    function v(m) {
      function x(M, D, W, X, se) {
        this._reactName = M, this._targetInst = W, this.type = D, this.nativeEvent = X, this.target = se, this.currentTarget = null;
        for (var xe in m)
          if (m.hasOwnProperty(xe)) {
            var Me = m[xe];
            Me ? this[xe] = Me(X) : this[xe] = X[xe];
          }
        var _e = X.defaultPrevented != null ? X.defaultPrevented : X.returnValue === !1;
        return _e ? this.isDefaultPrevented = P : this.isDefaultPrevented = w, this.isPropagationStopped = w, this;
      }
      return C(x.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var M = this.nativeEvent;
          M && (M.preventDefault ? M.preventDefault() : typeof M.returnValue != "unknown" && (M.returnValue = !1), this.isDefaultPrevented = P);
        },
        stopPropagation: function() {
          var M = this.nativeEvent;
          M && (M.stopPropagation ? M.stopPropagation() : typeof M.cancelBubble != "unknown" && (M.cancelBubble = !0), this.isPropagationStopped = P);
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
        isPersistent: P
      }), x;
    }
    var b = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(m) {
        return m.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, E = v(b), A = C({}, b, {
      view: 0,
      detail: 0
    });
    v(A);
    var L, j, F;
    function O(m) {
      m !== F && (F && m.type === "mousemove" ? (L = m.screenX - F.screenX, j = m.screenY - F.screenY) : (L = 0, j = 0), F = m);
    }
    var B = C({}, A, {
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
      getModifierState: me,
      button: 0,
      buttons: 0,
      relatedTarget: function(m) {
        return m.relatedTarget === void 0 ? m.fromElement === m.srcElement ? m.toElement : m.fromElement : m.relatedTarget;
      },
      movementX: function(m) {
        return "movementX" in m ? m.movementX : (O(m), L);
      },
      movementY: function(m) {
        return "movementY" in m ? m.movementY : j;
      }
    });
    v(B);
    var K = C({}, B, {
      dataTransfer: 0
    });
    v(K);
    var ee = C({}, A, {
      relatedTarget: 0
    });
    v(ee);
    var z = C({}, b, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    });
    v(z);
    var ue = C({}, b, {
      clipboardData: function(m) {
        return "clipboardData" in m ? m.clipboardData : window.clipboardData;
      }
    });
    v(ue);
    var pe = C({}, b, {
      data: 0
    });
    v(pe);
    var qe = {
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
    }, Pe = {
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
    function Te(m) {
      if (m.key) {
        var x = qe[m.key] || m.key;
        if (x !== "Unidentified")
          return x;
      }
      if (m.type === "keypress") {
        var M = _(m);
        return M === 13 ? "Enter" : String.fromCharCode(M);
      }
      return m.type === "keydown" || m.type === "keyup" ? Pe[m.keyCode] || "Unidentified" : "";
    }
    var $ = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function Ee(m) {
      var x = this, M = x.nativeEvent;
      if (M.getModifierState)
        return M.getModifierState(m);
      var D = $[m];
      return D ? !!M[D] : !1;
    }
    function me(m) {
      return Ee;
    }
    var ye = C({}, A, {
      key: Te,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: me,
      // Legacy Interface
      charCode: function(m) {
        return m.type === "keypress" ? _(m) : 0;
      },
      keyCode: function(m) {
        return m.type === "keydown" || m.type === "keyup" ? m.keyCode : 0;
      },
      which: function(m) {
        return m.type === "keypress" ? _(m) : m.type === "keydown" || m.type === "keyup" ? m.keyCode : 0;
      }
    });
    v(ye);
    var Ne = C({}, B, {
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
    v(Ne);
    var ke = C({}, A, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: me
    });
    v(ke);
    var q = C({}, b, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    });
    v(q);
    var U = C({}, B, {
      deltaX: function(m) {
        return "deltaX" in m ? m.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in m ? -m.wheelDeltaX : 0
        );
      },
      deltaY: function(m) {
        return "deltaY" in m ? m.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in m ? -m.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in m ? -m.wheelDelta : 0
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
    v(U);
    var N = 1;
    function Y(m, x, M, D, W, X, se, xe, Me) {
      var _e = Array.prototype.slice.call(arguments, 3);
      try {
        x.apply(M, _e);
      } catch (be) {
        this.onError(be);
      }
    }
    var V = Y;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Q = document.createElement("react");
      V = function(x, M, D, W, X, se, xe, Me, _e) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var be = document.createEvent("Event"), Ba = !1, qo = !0, Qs = window.event, Co = Object.getOwnPropertyDescriptor(window, "event");
        function _o() {
          Q.removeEventListener(Fa, wo, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = Qs);
        }
        var Js = Array.prototype.slice.call(arguments, 3);
        function wo() {
          Ba = !0, _o(), M.apply(D, Js), qo = !1;
        }
        var Xe, Po = !1, To = !1;
        function xo(ha) {
          if (Xe = ha.error, Po = !0, Xe === null && ha.colno === 0 && ha.lineno === 0 && (To = !0), ha.defaultPrevented && Xe != null && typeof Xe == "object")
            try {
              Xe._suppressLogging = !0;
            } catch {
            }
        }
        var Fa = "react-" + (x || "invokeguardedcallback");
        if (window.addEventListener("error", xo), Q.addEventListener(Fa, wo, !1), be.initEvent(Fa, !1, !1), Q.dispatchEvent(be), Co && Object.defineProperty(window, "event", Co), Ba && qo && (Po ? To && (Xe = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Xe = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Xe)), window.removeEventListener("error", xo), !Ba)
          return _o(), Y.apply(this, arguments);
      };
    }
    var ie = V, oe = !1, ve = null, Ae = !1, Ke = null, ir = {
      onError: function(m) {
        oe = !0, ve = m;
      }
    };
    function ur(m, x, M, D, W, X, se, xe, Me) {
      oe = !1, ve = null, ie.apply(ir, arguments);
    }
    function sr(m, x, M, D, W, X, se, xe, Me) {
      if (ur.apply(this, arguments), oe) {
        var _e = dr();
        Ae || (Ae = !0, Ke = _e);
      }
    }
    function cr() {
      if (Ae) {
        var m = Ke;
        throw Ae = !1, Ke = null, m;
      }
    }
    function dr() {
      if (oe) {
        var m = ve;
        return oe = !1, ve = null, m;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    var Rr = Array.isArray;
    function Ze(m) {
      return Rr(m);
    }
    var fr = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Le = fr.Events, gr = Le[0], p = Le[1], I = Le[2], S = Le[3], H = Le[4], J = e.unstable_act;
    function Z(m) {
    }
    var G = !1;
    function re(m, x) {
      if (!m)
        return [];
      var M = l(m);
      if (!M)
        return [];
      for (var D = M, W = []; ; ) {
        if (D.tag === d || D.tag === i || D.tag === u || D.tag === h) {
          var X = D.stateNode;
          x(X) && W.push(X);
        }
        if (D.child) {
          D.child.return = D, D = D.child;
          continue;
        }
        if (D === M)
          return W;
        for (; !D.sibling; ) {
          if (!D.return || D.return === M)
            return W;
          D = D.return;
        }
        D.sibling.return = D.return, D = D.sibling;
      }
    }
    function Re(m, x) {
      if (m && !f(m)) {
        var M, D = String(m);
        throw Ze(m) ? M = "an array" : m && m.nodeType === N && m.tagName ? M = "a DOM node" : D === "[object Object]" ? M = "object with keys {" + Object.keys(m).join(", ") + "}" : M = D, new Error(x + "(...): the first argument must be a React class instance. " + ("Instead received: " + M + "."));
      }
    }
    var Ce = !1;
    function Er(m) {
      Ce || (Ce = !0, s("ReactDOMTestUtils is deprecated and will be removed in a future major release, because it exposes internal implementation details that are highly likely to change between releases. Upgrade to a modern testing library, such as @testing-library/react. See https://react.dev/warnings/react-dom-test-utils for more info."));
      var x = document.createElement("div");
      return r.render(m, x);
    }
    function Da(m) {
      return e.isValidElement(m);
    }
    function Na(m, x) {
      return e.isValidElement(m) && m.type === x;
    }
    function pr(m) {
      return !!(m && m.nodeType === N && m.tagName);
    }
    function ka(m) {
      return !!(m && e.isValidElement(m) && m.tagName);
    }
    function qr(m) {
      return pr(m) ? !1 : m != null && typeof m.render == "function" && typeof m.setState == "function";
    }
    function va(m, x) {
      if (!qr(m))
        return !1;
      var M = f(m), D = M.type;
      return D === x;
    }
    function k(m, x) {
      if (Re(m, "findAllInRenderedTree"), !m)
        return [];
      var M = f(m);
      return re(M, x);
    }
    function ba(m, x) {
      return Re(m, "scryRenderedDOMComponentsWithClass"), k(m, function(M) {
        if (pr(M)) {
          var D = M.className;
          typeof D != "string" && (D = M.getAttribute("class") || "");
          var W = D.split(/\s+/);
          if (!Ze(x)) {
            if (x === void 0)
              throw new Error("TestUtils.scryRenderedDOMComponentsWithClass expects a className as a second argument.");
            x = x.split(/\s+/);
          }
          return x.every(function(X) {
            return W.indexOf(X) !== -1;
          });
        }
        return !1;
      });
    }
    function La(m, x) {
      Re(m, "findRenderedDOMComponentWithClass");
      var M = ba(m, x);
      if (M.length !== 1)
        throw new Error("Did not find exactly one match (found: " + M.length + ") for class:" + x);
      return M[0];
    }
    function er(m, x) {
      return Re(m, "scryRenderedDOMComponentsWithTag"), k(m, function(M) {
        return pr(M) && M.tagName.toUpperCase() === x.toUpperCase();
      });
    }
    function As(m, x) {
      Re(m, "findRenderedDOMComponentWithTag");
      var M = er(m, x);
      if (M.length !== 1)
        throw new Error("Did not find exactly one match (found: " + M.length + ") for tag:" + x);
      return M[0];
    }
    function bo(m, x) {
      return Re(m, "scryRenderedComponentsWithType"), k(m, function(M) {
        return va(M, x);
      });
    }
    function Is(m, x) {
      Re(m, "findRenderedComponentWithType");
      var M = bo(m, x);
      if (M.length !== 1)
        throw new Error("Did not find exactly one match (found: " + M.length + ") for componentType:" + x);
      return M[0];
    }
    function Ds(m, x) {
      return G || (G = !0, a(`ReactTestUtils.mockComponent() is deprecated. Use shallow rendering or jest.mock() instead.

See https://reactjs.org/link/test-utils-mock-component for more information.`)), x = x || m.mockTagName || "div", m.prototype.render.mockImplementation(function() {
        return e.createElement(x, null, this.props.children);
      }), this;
    }
    function Ns(m, x) {
      return {
        touches: [{
          pageX: m,
          pageY: x
        }]
      };
    }
    function ho(m, x, M) {
      var D = m.type || "unknown-event";
      m.currentTarget = p(M), sr(D, x, void 0, m), m.currentTarget = null;
    }
    function ks(m) {
      var x = m._dispatchListeners, M = m._dispatchInstances;
      if (Ze(x))
        for (var D = 0; D < x.length && !m.isPropagationStopped(); D++)
          ho(m, x[D], M[D]);
      else x && ho(m, x, M);
      m._dispatchListeners = null, m._dispatchInstances = null;
    }
    var Ls = function(m) {
      m && (ks(m), m.isPersistent() || m.constructor.release(m));
    };
    function Bs(m) {
      return m === "button" || m === "input" || m === "select" || m === "textarea";
    }
    function Fs(m) {
      do
        m = m.return;
      while (m && m.tag !== d);
      return m || null;
    }
    function yo(m, x, M) {
      for (var D = []; m; )
        D.push(m), m = Fs(m);
      var W;
      for (W = D.length; W-- > 0; )
        x(D[W], "captured", M);
      for (W = 0; W < D.length; W++)
        x(D[W], "bubbled", M);
    }
    function js(m, x, M) {
      switch (m) {
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
          return !!(M.disabled && Bs(x));
        default:
          return !1;
      }
    }
    function Ro(m, x) {
      var M = m.stateNode;
      if (!M)
        return null;
      var D = I(M);
      if (!D)
        return null;
      var W = D[x];
      if (js(x, m.type, D))
        return null;
      if (W && typeof W != "function")
        throw new Error("Expected `" + x + "` listener to be a function, instead got a value of `" + typeof W + "` type.");
      return W;
    }
    function Us(m, x, M) {
      var D = x._reactName;
      return M === "captured" && (D += "Capture"), Ro(m, D);
    }
    function $s(m, x, M) {
      if (m && M && M._reactName) {
        var D = M._reactName, W = Ro(m, D);
        W && (M._dispatchListeners == null && (M._dispatchListeners = []), M._dispatchInstances == null && (M._dispatchInstances = []), M._dispatchListeners.push(W), M._dispatchInstances.push(m));
      }
    }
    function Hs(m, x, M) {
      m || s("Dispatching inst must not be null");
      var D = Us(m, M, x);
      D && (M._dispatchListeners == null && (M._dispatchListeners = []), M._dispatchInstances == null && (M._dispatchInstances = []), M._dispatchListeners.push(D), M._dispatchInstances.push(m));
    }
    function Ws(m) {
      m && m._reactName && $s(m._targetInst, null, m);
    }
    function Vs(m) {
      m && m._reactName && yo(m._targetInst, Hs, m);
    }
    var go = {}, zs = /* @__PURE__ */ new Set(["mouseEnter", "mouseLeave", "pointerEnter", "pointerLeave"]);
    function Gs(m) {
      return function(x, M) {
        if (e.isValidElement(x))
          throw new Error("TestUtils.Simulate expected a DOM node as the first argument but received a React element. Pass the DOM node you wish to simulate the event on instead. Note that TestUtils.Simulate will not work if you are using shallow rendering.");
        if (qr(x))
          throw new Error("TestUtils.Simulate expected a DOM node as the first argument but received a component instance. Pass the DOM node you wish to simulate the event on instead.");
        var D = "on" + m[0].toUpperCase() + m.slice(1), W = new Z();
        W.target = x, W.type = m.toLowerCase();
        var X = gr(x), se = new E(D, W.type, X, W, x);
        se.persist(), C(se, M), zs.has(m) ? Ws(se) : Vs(se), r.unstable_batchedUpdates(function() {
          S(x), Ls(se), cr();
        }), H();
      };
    }
    var Ys = ["blur", "cancel", "click", "close", "contextMenu", "copy", "cut", "auxClick", "doubleClick", "dragEnd", "dragStart", "drop", "focus", "input", "invalid", "keyDown", "keyPress", "keyUp", "mouseDown", "mouseUp", "paste", "pause", "play", "pointerCancel", "pointerDown", "pointerUp", "rateChange", "reset", "resize", "seeked", "submit", "touchCancel", "touchEnd", "touchStart", "volumeChange", "drag", "dragEnter", "dragExit", "dragLeave", "dragOver", "mouseMove", "mouseOut", "mouseOver", "pointerMove", "pointerOut", "pointerOver", "scroll", "toggle", "touchMove", "wheel", "abort", "animationEnd", "animationIteration", "animationStart", "canPlay", "canPlayThrough", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "playing", "progress", "seeking", "stalled", "suspend", "timeUpdate", "transitionEnd", "waiting", "mouseEnter", "mouseLeave", "pointerEnter", "pointerLeave", "change", "select", "beforeInput", "compositionEnd", "compositionStart", "compositionUpdate"];
    function Ks() {
      Ys.forEach(function(m) {
        go[m] = Gs(m);
      });
    }
    Ks();
    var Eo = !1, Xs = function(x) {
      return Eo || (Eo = !0, s("`ReactDOMTestUtils.act` is deprecated in favor of `React.act`. Import `act` from `react` instead of `react-dom/test-utils`. See https://react.dev/warnings/react-dom-test-utils for more info.")), J(x);
    };
    fe.Simulate = go, fe.act = Xs, fe.findAllInRenderedTree = k, fe.findRenderedComponentWithType = Is, fe.findRenderedDOMComponentWithClass = La, fe.findRenderedDOMComponentWithTag = As, fe.isCompositeComponent = qr, fe.isCompositeComponentWithType = va, fe.isDOMComponent = pr, fe.isDOMComponentElement = ka, fe.isElement = Da, fe.isElementOfType = Na, fe.mockComponent = Ds, fe.nativeTouchData = Ns, fe.renderIntoDocument = Er, fe.scryRenderedComponentsWithType = bo, fe.scryRenderedDOMComponentsWithClass = ba, fe.scryRenderedDOMComponentsWithTag = er, fe.traverseTwoPhase = yo;
  }()), fe;
}
var So;
function tc() {
  return So || (So = 1, process.env.NODE_ENV === "production" ? ya.exports = ec() : ya.exports = rc()), ya.exports;
}
var nc = tc(), mr = {}, Ao;
function ac() {
  if (Ao) return mr;
  Ao = 1;
  var e = oo();
  if (process.env.NODE_ENV === "production")
    mr.createRoot = e.createRoot, mr.hydrateRoot = e.hydrateRoot;
  else {
    var r = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    mr.createRoot = function(t, a) {
      r.usingClientEntryPoint = !0;
      try {
        return e.createRoot(t, a);
      } finally {
        r.usingClientEntryPoint = !1;
      }
    }, mr.hydrateRoot = function(t, a, s) {
      r.usingClientEntryPoint = !0;
      try {
        return e.hydrateRoot(t, a, s);
      } finally {
        r.usingClientEntryPoint = !1;
      }
    };
  }
  return mr;
}
var Io = ac(), De = {}, _a = { exports: {} };
_a.exports;
var Do;
function Ju() {
  return Do || (Do = 1, function(e) {
    const t = (c = 0) => (f) => `\x1B[${38 + c};5;${f}m`, a = (c = 0) => (f, h, u) => `\x1B[${38 + c};2;${f};${h};${u}m`;
    function s() {
      const c = /* @__PURE__ */ new Map(), f = {
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
      f.color.gray = f.color.blackBright, f.bgColor.bgGray = f.bgColor.bgBlackBright, f.color.grey = f.color.blackBright, f.bgColor.bgGrey = f.bgColor.bgBlackBright;
      for (const [h, u] of Object.entries(f)) {
        for (const [o, d] of Object.entries(u))
          f[o] = {
            open: `\x1B[${d[0]}m`,
            close: `\x1B[${d[1]}m`
          }, u[o] = f[o], c.set(d[0], d[1]);
        Object.defineProperty(f, h, {
          value: u,
          enumerable: !1
        });
      }
      return Object.defineProperty(f, "codes", {
        value: c,
        enumerable: !1
      }), f.color.close = "\x1B[39m", f.bgColor.close = "\x1B[49m", f.color.ansi256 = t(), f.color.ansi16m = a(), f.bgColor.ansi256 = t(10), f.bgColor.ansi16m = a(10), Object.defineProperties(f, {
        rgbToAnsi256: {
          value: (h, u, o) => h === u && u === o ? h < 8 ? 16 : h > 248 ? 231 : Math.round((h - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(h / 255 * 5) + 6 * Math.round(u / 255 * 5) + Math.round(o / 255 * 5),
          enumerable: !1
        },
        hexToRgb: {
          value: (h) => {
            const u = /(?<colorString>[a-f\d]{6}|[a-f\d]{3})/i.exec(h.toString(16));
            if (!u)
              return [0, 0, 0];
            let { colorString: o } = u.groups;
            o.length === 3 && (o = o.split("").map((i) => i + i).join(""));
            const d = Number.parseInt(o, 16);
            return [
              d >> 16 & 255,
              d >> 8 & 255,
              d & 255
            ];
          },
          enumerable: !1
        },
        hexToAnsi256: {
          value: (h) => f.rgbToAnsi256(...f.hexToRgb(h)),
          enumerable: !1
        }
      }), f;
    }
    Object.defineProperty(e, "exports", {
      enumerable: !0,
      get: s
    });
  }(_a)), _a.exports;
}
var rr = {}, No;
function Sa() {
  if (No) return rr;
  No = 1, Object.defineProperty(rr, "__esModule", {
    value: !0
  }), rr.printIteratorEntries = r, rr.printIteratorValues = t, rr.printListItems = a, rr.printObjectProperties = s;
  const e = (c, f) => {
    const h = Object.keys(c).sort(f);
    return Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(c).forEach((u) => {
      Object.getOwnPropertyDescriptor(c, u).enumerable && h.push(u);
    }), h;
  };
  function r(c, f, h, u, o, d, i = ": ") {
    let n = "", y = c.next();
    if (!y.done) {
      n += f.spacingOuter;
      const R = h + f.indent;
      for (; !y.done; ) {
        const g = d(
          y.value[0],
          f,
          R,
          u,
          o
        ), T = d(
          y.value[1],
          f,
          R,
          u,
          o
        );
        n += R + g + i + T, y = c.next(), y.done ? f.min || (n += ",") : n += "," + f.spacingInner;
      }
      n += f.spacingOuter + h;
    }
    return n;
  }
  function t(c, f, h, u, o, d) {
    let i = "", n = c.next();
    if (!n.done) {
      i += f.spacingOuter;
      const y = h + f.indent;
      for (; !n.done; )
        i += y + d(n.value, f, y, u, o), n = c.next(), n.done ? f.min || (i += ",") : i += "," + f.spacingInner;
      i += f.spacingOuter + h;
    }
    return i;
  }
  function a(c, f, h, u, o, d) {
    let i = "";
    if (c.length) {
      i += f.spacingOuter;
      const n = h + f.indent;
      for (let y = 0; y < c.length; y++)
        i += n, y in c && (i += d(c[y], f, n, u, o)), y < c.length - 1 ? i += "," + f.spacingInner : f.min || (i += ",");
      i += f.spacingOuter + h;
    }
    return i;
  }
  function s(c, f, h, u, o, d) {
    let i = "";
    const n = e(c, f.compareKeys);
    if (n.length) {
      i += f.spacingOuter;
      const y = h + f.indent;
      for (let R = 0; R < n.length; R++) {
        const g = n[R], T = d(g, f, y, u, o), l = d(c[g], f, y, u, o);
        i += y + T + ": " + l, R < n.length - 1 ? i += "," + f.spacingInner : f.min || (i += ",");
      }
      i += f.spacingOuter + h;
    }
    return i;
  }
  return rr;
}
var Be = {}, ko;
function oc() {
  if (ko) return Be;
  ko = 1, Object.defineProperty(Be, "__esModule", {
    value: !0
  }), Be.test = Be.serialize = Be.default = void 0;
  var e = Sa(), r = function() {
    return typeof globalThis < "u" ? globalThis : typeof r < "u" ? r : typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")();
  }(), t = r["jest-symbol-do-not-touch"] || r.Symbol;
  const a = typeof t == "function" && t.for ? t.for("jest.asymmetricMatcher") : 1267621, s = " ", c = (o, d, i, n, y, R) => {
    const g = o.toString();
    return g === "ArrayContaining" || g === "ArrayNotContaining" ? ++n > d.maxDepth ? "[" + g + "]" : g + s + "[" + (0, e.printListItems)(
      o.sample,
      d,
      i,
      n,
      y,
      R
    ) + "]" : g === "ObjectContaining" || g === "ObjectNotContaining" ? ++n > d.maxDepth ? "[" + g + "]" : g + s + "{" + (0, e.printObjectProperties)(
      o.sample,
      d,
      i,
      n,
      y,
      R
    ) + "}" : g === "StringMatching" || g === "StringNotMatching" || g === "StringContaining" || g === "StringNotContaining" ? g + s + R(o.sample, d, i, n, y) : o.toAsymmetricMatcher();
  };
  Be.serialize = c;
  const f = (o) => o && o.$$typeof === a;
  Be.test = f;
  var u = {
    serialize: c,
    test: f
  };
  return Be.default = u, Be;
}
var Fe = {}, ja, Lo;
function lc() {
  return Lo || (Lo = 1, ja = ({ onlyFirst: e = !1 } = {}) => {
    const r = [
      "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
      "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"
    ].join("|");
    return new RegExp(r, e ? void 0 : "g");
  }), ja;
}
var Bo;
function ic() {
  if (Bo) return Fe;
  Bo = 1, Object.defineProperty(Fe, "__esModule", {
    value: !0
  }), Fe.test = Fe.serialize = Fe.default = void 0;
  var e = t(lc()), r = t(Ju());
  function t(u) {
    return u && u.__esModule ? u : { default: u };
  }
  const a = (u) => u.replace((0, e.default)(), (o) => {
    switch (o) {
      case r.default.red.close:
      case r.default.green.close:
      case r.default.cyan.close:
      case r.default.gray.close:
      case r.default.white.close:
      case r.default.yellow.close:
      case r.default.bgRed.close:
      case r.default.bgGreen.close:
      case r.default.bgYellow.close:
      case r.default.inverse.close:
      case r.default.dim.close:
      case r.default.bold.close:
      case r.default.reset.open:
      case r.default.reset.close:
        return "</>";
      case r.default.red.open:
        return "<red>";
      case r.default.green.open:
        return "<green>";
      case r.default.cyan.open:
        return "<cyan>";
      case r.default.gray.open:
        return "<gray>";
      case r.default.white.open:
        return "<white>";
      case r.default.yellow.open:
        return "<yellow>";
      case r.default.bgRed.open:
        return "<bgRed>";
      case r.default.bgGreen.open:
        return "<bgGreen>";
      case r.default.bgYellow.open:
        return "<bgYellow>";
      case r.default.inverse.open:
        return "<inverse>";
      case r.default.dim.open:
        return "<dim>";
      case r.default.bold.open:
        return "<bold>";
      default:
        return "";
    }
  }), s = (u) => typeof u == "string" && !!u.match((0, e.default)());
  Fe.test = s;
  const c = (u, o, d, i, n, y) => y(a(u), o, d, i, n);
  Fe.serialize = c;
  var h = {
    serialize: c,
    test: s
  };
  return Fe.default = h, Fe;
}
var je = {}, Fo;
function uc() {
  if (Fo) return je;
  Fo = 1, Object.defineProperty(je, "__esModule", {
    value: !0
  }), je.test = je.serialize = je.default = void 0;
  var e = Sa();
  const r = " ", t = ["DOMStringMap", "NamedNodeMap"], a = /^(HTML\w*Collection|NodeList)$/, s = (d) => t.indexOf(d) !== -1 || a.test(d), c = (d) => d && d.constructor && !!d.constructor.name && s(d.constructor.name);
  je.test = c;
  const f = (d) => d.constructor.name === "NamedNodeMap", h = (d, i, n, y, R, g) => {
    const T = d.constructor.name;
    return ++y > i.maxDepth ? "[" + T + "]" : (i.min ? "" : T + r) + (t.indexOf(T) !== -1 ? "{" + (0, e.printObjectProperties)(
      f(d) ? Array.from(d).reduce((l, C) => (l[C.name] = C.value, l), {}) : { ...d },
      i,
      n,
      y,
      R,
      g
    ) + "}" : "[" + (0, e.printListItems)(
      Array.from(d),
      i,
      n,
      y,
      R,
      g
    ) + "]");
  };
  je.serialize = h;
  var o = {
    serialize: h,
    test: c
  };
  return je.default = o, je;
}
var Ue = {}, ge = {}, Ra = {}, jo;
function sc() {
  if (jo) return Ra;
  jo = 1, Object.defineProperty(Ra, "__esModule", {
    value: !0
  }), Ra.default = e;
  function e(r) {
    return r.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  return Ra;
}
var Uo;
function lo() {
  if (Uo) return ge;
  Uo = 1, Object.defineProperty(ge, "__esModule", {
    value: !0
  }), ge.printText = ge.printProps = ge.printElementAsLeaf = ge.printElement = ge.printComment = ge.printChildren = void 0;
  var e = r(sc());
  function r(u) {
    return u && u.__esModule ? u : { default: u };
  }
  const t = (u, o, d, i, n, y, R) => {
    const g = i + d.indent, T = d.colors;
    return u.map((l) => {
      const C = o[l];
      let _ = R(C, d, g, n, y);
      return typeof C != "string" && (_.indexOf(`
`) !== -1 && (_ = d.spacingOuter + g + _ + d.spacingOuter + i), _ = "{" + _ + "}"), d.spacingInner + i + T.prop.open + l + T.prop.close + "=" + T.value.open + _ + T.value.close;
    }).join("");
  };
  ge.printProps = t;
  const a = (u, o, d, i, n, y) => u.map(
    (R) => o.spacingOuter + d + (typeof R == "string" ? s(R, o) : y(R, o, d, i, n))
  ).join("");
  ge.printChildren = a;
  const s = (u, o) => {
    const d = o.colors.content;
    return d.open + (0, e.default)(u) + d.close;
  };
  ge.printText = s;
  const c = (u, o) => {
    const d = o.colors.comment;
    return d.open + "<!--" + (0, e.default)(u) + "-->" + d.close;
  };
  ge.printComment = c;
  const f = (u, o, d, i, n) => {
    const y = i.colors.tag;
    return y.open + "<" + u + (o && y.close + o + i.spacingOuter + n + y.open) + (d ? ">" + y.close + d + i.spacingOuter + n + y.open + "</" + u : (o && !i.min ? "" : " ") + "/") + ">" + y.close;
  };
  ge.printElement = f;
  const h = (u, o) => {
    const d = o.colors.tag;
    return d.open + "<" + u + d.close + " …" + d.open + " />" + d.close;
  };
  return ge.printElementAsLeaf = h, ge;
}
var $o;
function cc() {
  if ($o) return Ue;
  $o = 1, Object.defineProperty(Ue, "__esModule", {
    value: !0
  }), Ue.test = Ue.serialize = Ue.default = void 0;
  var e = lo();
  const r = 1, t = 3, a = 8, s = 11, c = /^((HTML|SVG)\w*)?Element$/, f = (g) => {
    try {
      return typeof g.hasAttribute == "function" && g.hasAttribute("is");
    } catch {
      return !1;
    }
  }, h = (g) => {
    const T = g.constructor.name, { nodeType: l, tagName: C } = g, _ = typeof C == "string" && C.includes("-") || f(g);
    return l === r && (c.test(T) || _) || l === t && T === "Text" || l === a && T === "Comment" || l === s && T === "DocumentFragment";
  }, u = (g) => {
    var T;
    return (g == null || (T = g.constructor) === null || T === void 0 ? void 0 : T.name) && h(g);
  };
  Ue.test = u;
  function o(g) {
    return g.nodeType === t;
  }
  function d(g) {
    return g.nodeType === a;
  }
  function i(g) {
    return g.nodeType === s;
  }
  const n = (g, T, l, C, _, P) => {
    if (o(g))
      return (0, e.printText)(g.data, T);
    if (d(g))
      return (0, e.printComment)(g.data, T);
    const w = i(g) ? "DocumentFragment" : g.tagName.toLowerCase();
    return ++C > T.maxDepth ? (0, e.printElementAsLeaf)(w, T) : (0, e.printElement)(
      w,
      (0, e.printProps)(
        i(g) ? [] : Array.from(g.attributes).map((v) => v.name).sort(),
        i(g) ? {} : Array.from(g.attributes).reduce((v, b) => (v[b.name] = b.value, v), {}),
        T,
        l + T.indent,
        C,
        _,
        P
      ),
      (0, e.printChildren)(
        Array.prototype.slice.call(g.childNodes || g.children),
        T,
        l + T.indent,
        C,
        _,
        P
      ),
      T,
      l
    );
  };
  Ue.serialize = n;
  var R = {
    serialize: n,
    test: u
  };
  return Ue.default = R, Ue;
}
var $e = {}, Ho;
function dc() {
  if (Ho) return $e;
  Ho = 1, Object.defineProperty($e, "__esModule", {
    value: !0
  }), $e.test = $e.serialize = $e.default = void 0;
  var e = Sa();
  const r = "@@__IMMUTABLE_ITERABLE__@@", t = "@@__IMMUTABLE_LIST__@@", a = "@@__IMMUTABLE_KEYED__@@", s = "@@__IMMUTABLE_MAP__@@", c = "@@__IMMUTABLE_ORDERED__@@", f = "@@__IMMUTABLE_RECORD__@@", h = "@@__IMMUTABLE_SEQ__@@", u = "@@__IMMUTABLE_SET__@@", o = "@@__IMMUTABLE_STACK__@@", d = (b) => "Immutable." + b, i = (b) => "[" + b + "]", n = " ", y = "…", R = (b, E, A, L, j, F, O) => ++L > E.maxDepth ? i(d(O)) : d(O) + n + "{" + (0, e.printIteratorEntries)(
    b.entries(),
    E,
    A,
    L,
    j,
    F
  ) + "}";
  function g(b) {
    let E = 0;
    return {
      next() {
        if (E < b._keys.length) {
          const A = b._keys[E++];
          return {
            done: !1,
            value: [A, b.get(A)]
          };
        }
        return {
          done: !0,
          value: void 0
        };
      }
    };
  }
  const T = (b, E, A, L, j, F) => {
    const O = d(b._name || "Record");
    return ++L > E.maxDepth ? i(O) : O + n + "{" + (0, e.printIteratorEntries)(
      g(b),
      E,
      A,
      L,
      j,
      F
    ) + "}";
  }, l = (b, E, A, L, j, F) => {
    const O = d("Seq");
    return ++L > E.maxDepth ? i(O) : b[a] ? O + n + "{" + // from Immutable collection of entries or from ECMAScript object
    (b._iter || b._object ? (0, e.printIteratorEntries)(
      b.entries(),
      E,
      A,
      L,
      j,
      F
    ) : y) + "}" : O + n + "[" + (b._iter || // from Immutable collection of values
    b._array || // from ECMAScript array
    b._collection || // from ECMAScript collection in immutable v4
    b._iterable ? (0, e.printIteratorValues)(
      b.values(),
      E,
      A,
      L,
      j,
      F
    ) : y) + "]";
  }, C = (b, E, A, L, j, F, O) => ++L > E.maxDepth ? i(d(O)) : d(O) + n + "[" + (0, e.printIteratorValues)(
    b.values(),
    E,
    A,
    L,
    j,
    F
  ) + "]", _ = (b, E, A, L, j, F) => b[s] ? R(
    b,
    E,
    A,
    L,
    j,
    F,
    b[c] ? "OrderedMap" : "Map"
  ) : b[t] ? C(
    b,
    E,
    A,
    L,
    j,
    F,
    "List"
  ) : b[u] ? C(
    b,
    E,
    A,
    L,
    j,
    F,
    b[c] ? "OrderedSet" : "Set"
  ) : b[o] ? C(
    b,
    E,
    A,
    L,
    j,
    F,
    "Stack"
  ) : b[h] ? l(b, E, A, L, j, F) : T(b, E, A, L, j, F);
  $e.serialize = _;
  const P = (b) => b && (b[r] === !0 || b[f] === !0);
  $e.test = P;
  var v = {
    serialize: _,
    test: P
  };
  return $e.default = v, $e;
}
var He = {}, ga = { exports: {} }, te = {};
/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wo;
function fc() {
  if (Wo) return te;
  Wo = 1;
  var e = 60103, r = 60106, t = 60107, a = 60108, s = 60114, c = 60109, f = 60110, h = 60112, u = 60113, o = 60120, d = 60115, i = 60116, n = 60121, y = 60122, R = 60117, g = 60129, T = 60131;
  if (typeof Symbol == "function" && Symbol.for) {
    var l = Symbol.for;
    e = l("react.element"), r = l("react.portal"), t = l("react.fragment"), a = l("react.strict_mode"), s = l("react.profiler"), c = l("react.provider"), f = l("react.context"), h = l("react.forward_ref"), u = l("react.suspense"), o = l("react.suspense_list"), d = l("react.memo"), i = l("react.lazy"), n = l("react.block"), y = l("react.server.block"), R = l("react.fundamental"), g = l("react.debug_trace_mode"), T = l("react.legacy_hidden");
  }
  function C(O) {
    if (typeof O == "object" && O !== null) {
      var B = O.$$typeof;
      switch (B) {
        case e:
          switch (O = O.type, O) {
            case t:
            case s:
            case a:
            case u:
            case o:
              return O;
            default:
              switch (O = O && O.$$typeof, O) {
                case f:
                case h:
                case i:
                case d:
                case c:
                  return O;
                default:
                  return B;
              }
          }
        case r:
          return B;
      }
    }
  }
  var _ = c, P = e, w = h, v = t, b = i, E = d, A = r, L = s, j = a, F = u;
  return te.ContextConsumer = f, te.ContextProvider = _, te.Element = P, te.ForwardRef = w, te.Fragment = v, te.Lazy = b, te.Memo = E, te.Portal = A, te.Profiler = L, te.StrictMode = j, te.Suspense = F, te.isAsyncMode = function() {
    return !1;
  }, te.isConcurrentMode = function() {
    return !1;
  }, te.isContextConsumer = function(O) {
    return C(O) === f;
  }, te.isContextProvider = function(O) {
    return C(O) === c;
  }, te.isElement = function(O) {
    return typeof O == "object" && O !== null && O.$$typeof === e;
  }, te.isForwardRef = function(O) {
    return C(O) === h;
  }, te.isFragment = function(O) {
    return C(O) === t;
  }, te.isLazy = function(O) {
    return C(O) === i;
  }, te.isMemo = function(O) {
    return C(O) === d;
  }, te.isPortal = function(O) {
    return C(O) === r;
  }, te.isProfiler = function(O) {
    return C(O) === s;
  }, te.isStrictMode = function(O) {
    return C(O) === a;
  }, te.isSuspense = function(O) {
    return C(O) === u;
  }, te.isValidElementType = function(O) {
    return typeof O == "string" || typeof O == "function" || O === t || O === s || O === g || O === a || O === u || O === o || O === T || typeof O == "object" && O !== null && (O.$$typeof === i || O.$$typeof === d || O.$$typeof === c || O.$$typeof === f || O.$$typeof === h || O.$$typeof === R || O.$$typeof === n || O[0] === y);
  }, te.typeOf = C, te;
}
var ne = {};
/** @license React v17.0.2
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vo;
function pc() {
  return Vo || (Vo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = 60103, r = 60106, t = 60107, a = 60108, s = 60114, c = 60109, f = 60110, h = 60112, u = 60113, o = 60120, d = 60115, i = 60116, n = 60121, y = 60122, R = 60117, g = 60129, T = 60131;
    if (typeof Symbol == "function" && Symbol.for) {
      var l = Symbol.for;
      e = l("react.element"), r = l("react.portal"), t = l("react.fragment"), a = l("react.strict_mode"), s = l("react.profiler"), c = l("react.provider"), f = l("react.context"), h = l("react.forward_ref"), u = l("react.suspense"), o = l("react.suspense_list"), d = l("react.memo"), i = l("react.lazy"), n = l("react.block"), y = l("react.server.block"), R = l("react.fundamental"), l("react.scope"), l("react.opaque.id"), g = l("react.debug_trace_mode"), l("react.offscreen"), T = l("react.legacy_hidden");
    }
    var C = !1;
    function _(N) {
      return !!(typeof N == "string" || typeof N == "function" || N === t || N === s || N === g || N === a || N === u || N === o || N === T || C || typeof N == "object" && N !== null && (N.$$typeof === i || N.$$typeof === d || N.$$typeof === c || N.$$typeof === f || N.$$typeof === h || N.$$typeof === R || N.$$typeof === n || N[0] === y));
    }
    function P(N) {
      if (typeof N == "object" && N !== null) {
        var Y = N.$$typeof;
        switch (Y) {
          case e:
            var V = N.type;
            switch (V) {
              case t:
              case s:
              case a:
              case u:
              case o:
                return V;
              default:
                var Q = V && V.$$typeof;
                switch (Q) {
                  case f:
                  case h:
                  case i:
                  case d:
                  case c:
                    return Q;
                  default:
                    return Y;
                }
            }
          case r:
            return Y;
        }
      }
    }
    var w = f, v = c, b = e, E = h, A = t, L = i, j = d, F = r, O = s, B = a, K = u, ee = !1, z = !1;
    function ue(N) {
      return ee || (ee = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function pe(N) {
      return z || (z = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function qe(N) {
      return P(N) === f;
    }
    function Pe(N) {
      return P(N) === c;
    }
    function Te(N) {
      return typeof N == "object" && N !== null && N.$$typeof === e;
    }
    function $(N) {
      return P(N) === h;
    }
    function Ee(N) {
      return P(N) === t;
    }
    function me(N) {
      return P(N) === i;
    }
    function ye(N) {
      return P(N) === d;
    }
    function Ne(N) {
      return P(N) === r;
    }
    function ke(N) {
      return P(N) === s;
    }
    function q(N) {
      return P(N) === a;
    }
    function U(N) {
      return P(N) === u;
    }
    ne.ContextConsumer = w, ne.ContextProvider = v, ne.Element = b, ne.ForwardRef = E, ne.Fragment = A, ne.Lazy = L, ne.Memo = j, ne.Portal = F, ne.Profiler = O, ne.StrictMode = B, ne.Suspense = K, ne.isAsyncMode = ue, ne.isConcurrentMode = pe, ne.isContextConsumer = qe, ne.isContextProvider = Pe, ne.isElement = Te, ne.isForwardRef = $, ne.isFragment = Ee, ne.isLazy = me, ne.isMemo = ye, ne.isPortal = Ne, ne.isProfiler = ke, ne.isStrictMode = q, ne.isSuspense = U, ne.isValidElementType = _, ne.typeOf = P;
  }()), ne;
}
var zo;
function mc() {
  return zo || (zo = 1, process.env.NODE_ENV === "production" ? ga.exports = fc() : ga.exports = pc()), ga.exports;
}
var Go;
function vc() {
  if (Go) return He;
  Go = 1, Object.defineProperty(He, "__esModule", {
    value: !0
  }), He.test = He.serialize = He.default = void 0;
  var e = a(mc()), r = lo();
  function t(i) {
    if (typeof WeakMap != "function") return null;
    var n = /* @__PURE__ */ new WeakMap(), y = /* @__PURE__ */ new WeakMap();
    return (t = function(R) {
      return R ? y : n;
    })(i);
  }
  function a(i, n) {
    if (i && i.__esModule)
      return i;
    if (i === null || typeof i != "object" && typeof i != "function")
      return { default: i };
    var y = t(n);
    if (y && y.has(i))
      return y.get(i);
    var R = {}, g = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var T in i)
      if (T !== "default" && Object.prototype.hasOwnProperty.call(i, T)) {
        var l = g ? Object.getOwnPropertyDescriptor(i, T) : null;
        l && (l.get || l.set) ? Object.defineProperty(R, T, l) : R[T] = i[T];
      }
    return R.default = i, y && y.set(i, R), R;
  }
  const s = (i, n = []) => (Array.isArray(i) ? i.forEach((y) => {
    s(y, n);
  }) : i != null && i !== !1 && n.push(i), n), c = (i) => {
    const n = i.type;
    if (typeof n == "string")
      return n;
    if (typeof n == "function")
      return n.displayName || n.name || "Unknown";
    if (e.isFragment(i))
      return "React.Fragment";
    if (e.isSuspense(i))
      return "React.Suspense";
    if (typeof n == "object" && n !== null) {
      if (e.isContextProvider(i))
        return "Context.Provider";
      if (e.isContextConsumer(i))
        return "Context.Consumer";
      if (e.isForwardRef(i)) {
        if (n.displayName)
          return n.displayName;
        const y = n.render.displayName || n.render.name || "";
        return y !== "" ? "ForwardRef(" + y + ")" : "ForwardRef";
      }
      if (e.isMemo(i)) {
        const y = n.displayName || n.type.displayName || n.type.name || "";
        return y !== "" ? "Memo(" + y + ")" : "Memo";
      }
    }
    return "UNDEFINED";
  }, f = (i) => {
    const { props: n } = i;
    return Object.keys(n).filter((y) => y !== "children" && n[y] !== void 0).sort();
  }, h = (i, n, y, R, g, T) => ++R > n.maxDepth ? (0, r.printElementAsLeaf)(c(i), n) : (0, r.printElement)(
    c(i),
    (0, r.printProps)(
      f(i),
      i.props,
      n,
      y + n.indent,
      R,
      g,
      T
    ),
    (0, r.printChildren)(
      s(i.props.children),
      n,
      y + n.indent,
      R,
      g,
      T
    ),
    n,
    y
  );
  He.serialize = h;
  const u = (i) => i != null && e.isElement(i);
  He.test = u;
  var d = {
    serialize: h,
    test: u
  };
  return He.default = d, He;
}
var We = {}, Yo;
function bc() {
  if (Yo) return We;
  Yo = 1, Object.defineProperty(We, "__esModule", {
    value: !0
  }), We.test = We.serialize = We.default = void 0;
  var e = lo(), r = function() {
    return typeof globalThis < "u" ? globalThis : typeof r < "u" ? r : typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")();
  }(), t = r["jest-symbol-do-not-touch"] || r.Symbol;
  const a = typeof t == "function" && t.for ? t.for("react.test.json") : 245830487, s = (o) => {
    const { props: d } = o;
    return d ? Object.keys(d).filter((i) => d[i] !== void 0).sort() : [];
  }, c = (o, d, i, n, y, R) => ++n > d.maxDepth ? (0, e.printElementAsLeaf)(o.type, d) : (0, e.printElement)(
    o.type,
    o.props ? (0, e.printProps)(
      s(o),
      o.props,
      d,
      i + d.indent,
      n,
      y,
      R
    ) : "",
    o.children ? (0, e.printChildren)(
      o.children,
      d,
      i + d.indent,
      n,
      y,
      R
    ) : "",
    d,
    i
  );
  We.serialize = c;
  const f = (o) => o && o.$$typeof === a;
  We.test = f;
  var u = {
    serialize: c,
    test: f
  };
  return We.default = u, We;
}
var Ko;
function hc() {
  if (Ko) return De;
  Ko = 1, Object.defineProperty(De, "__esModule", {
    value: !0
  }), De.default = De.DEFAULT_OPTIONS = void 0, De.format = ye, De.plugins = void 0;
  var e = o(Ju()), r = Sa(), t = o(
    oc()
  ), a = o(ic()), s = o(uc()), c = o(cc()), f = o(dc()), h = o(vc()), u = o(
    bc()
  );
  function o(q) {
    return q && q.__esModule ? q : { default: q };
  }
  const d = Object.prototype.toString, i = Date.prototype.toISOString, n = Error.prototype.toString, y = RegExp.prototype.toString, R = (q) => typeof q.constructor == "function" && q.constructor.name || "Object", g = (q) => typeof window < "u" && q === window, T = /^Symbol\((.*)\)(.*)$/, l = /\n/gi;
  class C extends Error {
    constructor(U, N) {
      super(U), this.stack = N, this.name = this.constructor.name;
    }
  }
  function _(q) {
    return q === "[object Array]" || q === "[object ArrayBuffer]" || q === "[object DataView]" || q === "[object Float32Array]" || q === "[object Float64Array]" || q === "[object Int8Array]" || q === "[object Int16Array]" || q === "[object Int32Array]" || q === "[object Uint8Array]" || q === "[object Uint8ClampedArray]" || q === "[object Uint16Array]" || q === "[object Uint32Array]";
  }
  function P(q) {
    return Object.is(q, -0) ? "-0" : String(q);
  }
  function w(q) {
    return `${q}n`;
  }
  function v(q, U) {
    return U ? "[Function " + (q.name || "anonymous") + "]" : "[Function]";
  }
  function b(q) {
    return String(q).replace(T, "Symbol($1)");
  }
  function E(q) {
    return "[" + n.call(q) + "]";
  }
  function A(q, U, N, Y) {
    if (q === !0 || q === !1)
      return "" + q;
    if (q === void 0)
      return "undefined";
    if (q === null)
      return "null";
    const V = typeof q;
    if (V === "number")
      return P(q);
    if (V === "bigint")
      return w(q);
    if (V === "string")
      return Y ? '"' + q.replace(/"|\\/g, "\\$&") + '"' : '"' + q + '"';
    if (V === "function")
      return v(q, U);
    if (V === "symbol")
      return b(q);
    const Q = d.call(q);
    return Q === "[object WeakMap]" ? "WeakMap {}" : Q === "[object WeakSet]" ? "WeakSet {}" : Q === "[object Function]" || Q === "[object GeneratorFunction]" ? v(q, U) : Q === "[object Symbol]" ? b(q) : Q === "[object Date]" ? isNaN(+q) ? "Date { NaN }" : i.call(q) : Q === "[object Error]" ? E(q) : Q === "[object RegExp]" ? N ? y.call(q).replace(/[\\^$*+?.()|[\]{}]/g, "\\$&") : y.call(q) : q instanceof Error ? E(q) : null;
  }
  function L(q, U, N, Y, V, Q) {
    if (V.indexOf(q) !== -1)
      return "[Circular]";
    V = V.slice(), V.push(q);
    const ie = ++Y > U.maxDepth, oe = U.min;
    if (U.callToJSON && !ie && q.toJSON && typeof q.toJSON == "function" && !Q)
      return B(q.toJSON(), U, N, Y, V, !0);
    const ve = d.call(q);
    return ve === "[object Arguments]" ? ie ? "[Arguments]" : (oe ? "" : "Arguments ") + "[" + (0, r.printListItems)(
      q,
      U,
      N,
      Y,
      V,
      B
    ) + "]" : _(ve) ? ie ? "[" + q.constructor.name + "]" : (oe || !U.printBasicPrototype && q.constructor.name === "Array" ? "" : q.constructor.name + " ") + "[" + (0, r.printListItems)(
      q,
      U,
      N,
      Y,
      V,
      B
    ) + "]" : ve === "[object Map]" ? ie ? "[Map]" : "Map {" + (0, r.printIteratorEntries)(
      q.entries(),
      U,
      N,
      Y,
      V,
      B,
      " => "
    ) + "}" : ve === "[object Set]" ? ie ? "[Set]" : "Set {" + (0, r.printIteratorValues)(
      q.values(),
      U,
      N,
      Y,
      V,
      B
    ) + "}" : ie || g(q) ? "[" + R(q) + "]" : (oe || !U.printBasicPrototype && R(q) === "Object" ? "" : R(q) + " ") + "{" + (0, r.printObjectProperties)(
      q,
      U,
      N,
      Y,
      V,
      B
    ) + "}";
  }
  function j(q) {
    return q.serialize != null;
  }
  function F(q, U, N, Y, V, Q) {
    let ie;
    try {
      ie = j(q) ? q.serialize(U, N, Y, V, Q, B) : q.print(
        U,
        (oe) => B(oe, N, Y, V, Q),
        (oe) => {
          const ve = Y + N.indent;
          return ve + oe.replace(l, `
` + ve);
        },
        {
          edgeSpacing: N.spacingOuter,
          min: N.min,
          spacing: N.spacingInner
        },
        N.colors
      );
    } catch (oe) {
      throw new C(oe.message, oe.stack);
    }
    if (typeof ie != "string")
      throw new Error(
        `pretty-format: Plugin must return type "string" but instead returned "${typeof ie}".`
      );
    return ie;
  }
  function O(q, U) {
    for (let N = 0; N < q.length; N++)
      try {
        if (q[N].test(U))
          return q[N];
      } catch (Y) {
        throw new C(Y.message, Y.stack);
      }
    return null;
  }
  function B(q, U, N, Y, V, Q) {
    const ie = O(U.plugins, q);
    if (ie !== null)
      return F(ie, q, U, N, Y, V);
    const oe = A(
      q,
      U.printFunctionName,
      U.escapeRegex,
      U.escapeString
    );
    return oe !== null ? oe : L(
      q,
      U,
      N,
      Y,
      V,
      Q
    );
  }
  const K = {
    comment: "gray",
    content: "reset",
    prop: "yellow",
    tag: "cyan",
    value: "green"
  }, ee = Object.keys(K), z = {
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
    theme: K
  };
  De.DEFAULT_OPTIONS = z;
  function ue(q) {
    if (Object.keys(q).forEach((U) => {
      if (!z.hasOwnProperty(U))
        throw new Error(`pretty-format: Unknown option "${U}".`);
    }), q.min && q.indent !== void 0 && q.indent !== 0)
      throw new Error(
        'pretty-format: Options "min" and "indent" cannot be used together.'
      );
    if (q.theme !== void 0) {
      if (q.theme === null)
        throw new Error('pretty-format: Option "theme" must not be null.');
      if (typeof q.theme != "object")
        throw new Error(
          `pretty-format: Option "theme" must be of type "object" but instead received "${typeof q.theme}".`
        );
    }
  }
  const pe = (q) => ee.reduce((U, N) => {
    const Y = q.theme && q.theme[N] !== void 0 ? q.theme[N] : K[N], V = Y && e.default[Y];
    if (V && typeof V.close == "string" && typeof V.open == "string")
      U[N] = V;
    else
      throw new Error(
        `pretty-format: Option "theme" has a key "${N}" whose value "${Y}" is undefined in ansi-styles.`
      );
    return U;
  }, /* @__PURE__ */ Object.create(null)), qe = () => ee.reduce((q, U) => (q[U] = {
    close: "",
    open: ""
  }, q), /* @__PURE__ */ Object.create(null)), Pe = (q) => q && q.printFunctionName !== void 0 ? q.printFunctionName : z.printFunctionName, Te = (q) => q && q.escapeRegex !== void 0 ? q.escapeRegex : z.escapeRegex, $ = (q) => q && q.escapeString !== void 0 ? q.escapeString : z.escapeString, Ee = (q) => {
    var U;
    return {
      callToJSON: q && q.callToJSON !== void 0 ? q.callToJSON : z.callToJSON,
      colors: q && q.highlight ? pe(q) : qe(),
      compareKeys: q && typeof q.compareKeys == "function" ? q.compareKeys : z.compareKeys,
      escapeRegex: Te(q),
      escapeString: $(q),
      indent: q && q.min ? "" : me(
        q && q.indent !== void 0 ? q.indent : z.indent
      ),
      maxDepth: q && q.maxDepth !== void 0 ? q.maxDepth : z.maxDepth,
      min: q && q.min !== void 0 ? q.min : z.min,
      plugins: q && q.plugins !== void 0 ? q.plugins : z.plugins,
      printBasicPrototype: (U = q == null ? void 0 : q.printBasicPrototype) !== null && U !== void 0 ? U : !0,
      printFunctionName: Pe(q),
      spacingInner: q && q.min ? " " : `
`,
      spacingOuter: q && q.min ? "" : `
`
    };
  };
  function me(q) {
    return new Array(q + 1).join(" ");
  }
  function ye(q, U) {
    if (U && (ue(U), U.plugins)) {
      const Y = O(U.plugins, q);
      if (Y !== null)
        return F(Y, q, Ee(U), "", 0, []);
    }
    const N = A(
      q,
      Pe(U),
      Te(U),
      $(U)
    );
    return N !== null ? N : L(q, Ee(U), "", 0, []);
  }
  const Ne = {
    AsymmetricMatcher: t.default,
    ConvertAnsi: a.default,
    DOMCollection: s.default,
    DOMElement: c.default,
    Immutable: f.default,
    ReactElement: h.default,
    ReactTestComponent: u.default
  };
  De.plugins = Ne;
  var ke = ye;
  return De.default = ke, De;
}
var Zu = hc(), yc = Object.prototype.toString;
function Rc(e) {
  return typeof e == "function" || yc.call(e) === "[object Function]";
}
function gc(e) {
  var r = Number(e);
  return isNaN(r) ? 0 : r === 0 || !isFinite(r) ? r : (r > 0 ? 1 : -1) * Math.floor(Math.abs(r));
}
var Ec = Math.pow(2, 53) - 1;
function qc(e) {
  var r = gc(e);
  return Math.min(Math.max(r, 0), Ec);
}
function Ie(e, r) {
  var t = Array, a = Object(e);
  if (e == null)
    throw new TypeError("Array.from requires an array-like object - not null or undefined");
  for (var s = qc(a.length), c = Rc(t) ? Object(new t(s)) : new Array(s), f = 0, h; f < s; )
    h = a[f], c[f] = h, f += 1;
  return c.length = s, c;
}
function ca(e) {
  "@babel/helpers - typeof";
  return ca = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, ca(e);
}
function Cc(e, r) {
  if (!(e instanceof r))
    throw new TypeError("Cannot call a class as a function");
}
function _c(e, r) {
  for (var t = 0; t < r.length; t++) {
    var a = r[t];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, es(a.key), a);
  }
}
function wc(e, r, t) {
  return r && _c(e.prototype, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Pc(e, r, t) {
  return r = es(r), r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function es(e) {
  var r = Tc(e, "string");
  return ca(r) === "symbol" ? r : String(r);
}
function Tc(e, r) {
  if (ca(e) !== "object" || e === null) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var a = t.call(e, r);
    if (ca(a) !== "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(e);
}
var xc = /* @__PURE__ */ function() {
  function e() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    Cc(this, e), Pc(this, "items", void 0), this.items = r;
  }
  return wc(e, [{
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
      var a = this.items.length;
      return this.items = this.items.filter(function(s) {
        return s !== t;
      }), a !== this.items.length;
    }
  }, {
    key: "forEach",
    value: function(t) {
      var a = this;
      this.items.forEach(function(s) {
        t(s, s, a);
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
const Mc = typeof Set > "u" ? Set : xc;
function he(e) {
  var r;
  return (
    // eslint-disable-next-line no-restricted-properties -- actual guard for environments without localName
    (r = e.localName) !== null && r !== void 0 ? r : (
      // eslint-disable-next-line no-restricted-properties -- required for the fallback
      e.tagName.toLowerCase()
    )
  );
}
var Oc = {
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
}, Sc = {
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
function Ac(e, r) {
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
  ].some(function(t) {
    var a;
    return e.hasAttribute(t) && !((a = Sc[r]) !== null && a !== void 0 && a.has(t));
  });
}
function rs(e, r) {
  return Ac(e, r);
}
function Ic(e) {
  var r = Nc(e);
  if (r === null || r === "presentation") {
    var t = Dc(e);
    if (r !== "presentation" || rs(e, t || ""))
      return t;
  }
  return r;
}
function Dc(e) {
  var r = Oc[he(e)];
  if (r !== void 0)
    return r;
  switch (he(e)) {
    case "a":
    case "area":
    case "link":
      if (e.hasAttribute("href"))
        return "link";
      break;
    case "img":
      return e.getAttribute("alt") === "" && !rs(e, "img") ? "presentation" : "img";
    case "input": {
      var t = e, a = t.type;
      switch (a) {
        case "button":
        case "image":
        case "reset":
        case "submit":
          return "button";
        case "checkbox":
        case "radio":
          return a;
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
function Nc(e) {
  var r = e.getAttribute("role");
  if (r !== null) {
    var t = r.trim().split(" ")[0];
    if (t.length > 0)
      return t;
  }
  return null;
}
function le(e) {
  return e !== null && e.nodeType === e.ELEMENT_NODE;
}
function ts(e) {
  return le(e) && he(e) === "caption";
}
function wa(e) {
  return le(e) && he(e) === "input";
}
function kc(e) {
  return le(e) && he(e) === "optgroup";
}
function Lc(e) {
  return le(e) && he(e) === "select";
}
function Bc(e) {
  return le(e) && he(e) === "table";
}
function Fc(e) {
  return le(e) && he(e) === "textarea";
}
function jc(e) {
  var r = e.ownerDocument === null ? e : e.ownerDocument, t = r.defaultView;
  if (t === null)
    throw new TypeError("no window available");
  return t;
}
function Uc(e) {
  return le(e) && he(e) === "fieldset";
}
function $c(e) {
  return le(e) && he(e) === "legend";
}
function Hc(e) {
  return le(e) && he(e) === "slot";
}
function Wc(e) {
  return le(e) && e.ownerSVGElement !== void 0;
}
function Vc(e) {
  return le(e) && he(e) === "svg";
}
function zc(e) {
  return Wc(e) && he(e) === "title";
}
function Pa(e, r) {
  if (le(e) && e.hasAttribute(r)) {
    var t = e.getAttribute(r).split(" "), a = e.getRootNode ? e.getRootNode() : e.ownerDocument;
    return t.map(function(s) {
      return a.getElementById(s);
    }).filter(
      function(s) {
        return s !== null;
      }
      // TODO: why does this not narrow?
    );
  }
  return [];
}
function ze(e, r) {
  return le(e) ? r.indexOf(Ic(e)) !== -1 : !1;
}
function Gc(e) {
  return e.trim().replace(/\s\s+/g, " ");
}
function Yc(e, r) {
  if (!le(e))
    return !1;
  if (e.hasAttribute("hidden") || e.getAttribute("aria-hidden") === "true")
    return !0;
  var t = r(e);
  return t.getPropertyValue("display") === "none" || t.getPropertyValue("visibility") === "hidden";
}
function Kc(e) {
  return ze(e, ["button", "combobox", "listbox", "textbox"]) || ns(e, "range");
}
function ns(e, r) {
  if (!le(e))
    return !1;
  switch (r) {
    case "range":
      return ze(e, ["meter", "progressbar", "scrollbar", "slider", "spinbutton"]);
    default:
      throw new TypeError("No knowledge about abstract role '".concat(r, "'. This is likely a bug :("));
  }
}
function Xo(e, r) {
  var t = Ie(e.querySelectorAll(r));
  return Pa(e, "aria-owns").forEach(function(a) {
    t.push.apply(t, Ie(a.querySelectorAll(r)));
  }), t;
}
function Xc(e) {
  return Lc(e) ? e.selectedOptions || Xo(e, "[selected]") : Xo(e, '[aria-selected="true"]');
}
function Qc(e) {
  return ze(e, ["none", "presentation"]);
}
function Jc(e) {
  return ts(e);
}
function Zc(e) {
  return ze(e, ["button", "cell", "checkbox", "columnheader", "gridcell", "heading", "label", "legend", "link", "menuitem", "menuitemcheckbox", "menuitemradio", "option", "radio", "row", "rowheader", "switch", "tab", "tooltip", "treeitem"]);
}
function ed(e) {
  return !1;
}
function rd(e) {
  return wa(e) || Fc(e) ? e.value : e.textContent || "";
}
function Qo(e) {
  var r = e.getPropertyValue("content");
  return /^["'].*["']$/.test(r) ? r.slice(1, -1) : "";
}
function as(e) {
  var r = he(e);
  return r === "button" || r === "input" && e.getAttribute("type") !== "hidden" || r === "meter" || r === "output" || r === "progress" || r === "select" || r === "textarea";
}
function os(e) {
  if (as(e))
    return e;
  var r = null;
  return e.childNodes.forEach(function(t) {
    if (r === null && le(t)) {
      var a = os(t);
      a !== null && (r = a);
    }
  }), r;
}
function td(e) {
  if (e.control !== void 0)
    return e.control;
  var r = e.getAttribute("for");
  return r !== null ? e.ownerDocument.getElementById(r) : os(e);
}
function nd(e) {
  var r = e.labels;
  if (r === null)
    return r;
  if (r !== void 0)
    return Ie(r);
  if (!as(e))
    return null;
  var t = e.ownerDocument;
  return Ie(t.querySelectorAll("label")).filter(function(a) {
    return td(a) === e;
  });
}
function ad(e) {
  var r = e.assignedNodes();
  return r.length === 0 ? Ie(e.childNodes) : r;
}
function ls(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = new Mc(), a = jc(e), s = r.compute, c = s === void 0 ? "name" : s, f = r.computedStyleSupportsPseudoElements, h = f === void 0 ? r.getComputedStyle !== void 0 : f, u = r.getComputedStyle, o = u === void 0 ? a.getComputedStyle.bind(a) : u, d = r.hidden, i = d === void 0 ? !1 : d;
  function n(l, C) {
    var _ = "";
    if (le(l) && h) {
      var P = o(l, "::before"), w = Qo(P);
      _ = "".concat(w, " ").concat(_);
    }
    var v = Hc(l) ? ad(l) : Ie(l.childNodes).concat(Pa(l, "aria-owns"));
    if (v.forEach(function(A) {
      var L = T(A, {
        isEmbeddedInLabel: C.isEmbeddedInLabel,
        isReferenced: !1,
        recursion: !0
      }), j = le(A) ? o(A).getPropertyValue("display") : "inline", F = j !== "inline" ? " " : "";
      _ += "".concat(F).concat(L).concat(F);
    }), le(l) && h) {
      var b = o(l, "::after"), E = Qo(b);
      _ = "".concat(_, " ").concat(E);
    }
    return _.trim();
  }
  function y(l, C) {
    var _ = l.getAttributeNode(C);
    return _ !== null && !t.has(_) && _.value.trim() !== "" ? (t.add(_), _.value) : null;
  }
  function R(l) {
    return le(l) ? y(l, "title") : null;
  }
  function g(l) {
    if (!le(l))
      return null;
    if (Uc(l)) {
      t.add(l);
      for (var C = Ie(l.childNodes), _ = 0; _ < C.length; _ += 1) {
        var P = C[_];
        if ($c(P))
          return T(P, {
            isEmbeddedInLabel: !1,
            isReferenced: !1,
            recursion: !1
          });
      }
    } else if (Bc(l)) {
      t.add(l);
      for (var w = Ie(l.childNodes), v = 0; v < w.length; v += 1) {
        var b = w[v];
        if (ts(b))
          return T(b, {
            isEmbeddedInLabel: !1,
            isReferenced: !1,
            recursion: !1
          });
      }
    } else if (Vc(l)) {
      t.add(l);
      for (var E = Ie(l.childNodes), A = 0; A < E.length; A += 1) {
        var L = E[A];
        if (zc(L))
          return L.textContent;
      }
      return null;
    } else if (he(l) === "img" || he(l) === "area") {
      var j = y(l, "alt");
      if (j !== null)
        return j;
    } else if (kc(l)) {
      var F = y(l, "label");
      if (F !== null)
        return F;
    }
    if (wa(l) && (l.type === "button" || l.type === "submit" || l.type === "reset")) {
      var O = y(l, "value");
      if (O !== null)
        return O;
      if (l.type === "submit")
        return "Submit";
      if (l.type === "reset")
        return "Reset";
    }
    var B = nd(l);
    if (B !== null && B.length !== 0)
      return t.add(l), Ie(B).map(function(ue) {
        return T(ue, {
          isEmbeddedInLabel: !0,
          isReferenced: !1,
          recursion: !0
        });
      }).filter(function(ue) {
        return ue.length > 0;
      }).join(" ");
    if (wa(l) && l.type === "image") {
      var K = y(l, "alt");
      if (K !== null)
        return K;
      var ee = y(l, "title");
      return ee !== null ? ee : "Submit Query";
    }
    if (ze(l, ["button"])) {
      var z = n(l, {
        isEmbeddedInLabel: !1
      });
      if (z !== "")
        return z;
    }
    return null;
  }
  function T(l, C) {
    if (t.has(l))
      return "";
    if (!i && Yc(l, o) && !C.isReferenced)
      return t.add(l), "";
    var _ = le(l) ? l.getAttributeNode("aria-labelledby") : null, P = _ !== null && !t.has(_) ? Pa(l, "aria-labelledby") : [];
    if (c === "name" && !C.isReferenced && P.length > 0)
      return t.add(_), P.map(function(j) {
        return T(j, {
          isEmbeddedInLabel: C.isEmbeddedInLabel,
          isReferenced: !0,
          // this isn't recursion as specified, otherwise we would skip
          // `aria-label` in
          // <input id="myself" aria-label="foo" aria-labelledby="myself"
          recursion: !1
        });
      }).join(" ");
    var w = C.recursion && Kc(l) && c === "name";
    if (!w) {
      var v = (le(l) && l.getAttribute("aria-label") || "").trim();
      if (v !== "" && c === "name")
        return t.add(l), v;
      if (!Qc(l)) {
        var b = g(l);
        if (b !== null)
          return t.add(l), b;
      }
    }
    if (ze(l, ["menu"]))
      return t.add(l), "";
    if (w || C.isEmbeddedInLabel || C.isReferenced) {
      if (ze(l, ["combobox", "listbox"])) {
        t.add(l);
        var E = Xc(l);
        return E.length === 0 ? wa(l) ? l.value : "" : Ie(E).map(function(j) {
          return T(j, {
            isEmbeddedInLabel: C.isEmbeddedInLabel,
            isReferenced: !1,
            recursion: !0
          });
        }).join(" ");
      }
      if (ns(l, "range"))
        return t.add(l), l.hasAttribute("aria-valuetext") ? l.getAttribute("aria-valuetext") : l.hasAttribute("aria-valuenow") ? l.getAttribute("aria-valuenow") : l.getAttribute("value") || "";
      if (ze(l, ["textbox"]))
        return t.add(l), rd(l);
    }
    if (Zc(l) || le(l) && C.isReferenced || Jc(l) || ed()) {
      var A = n(l, {
        isEmbeddedInLabel: C.isEmbeddedInLabel
      });
      if (A !== "")
        return t.add(l), A;
    }
    if (l.nodeType === l.TEXT_NODE)
      return t.add(l), l.textContent || "";
    if (C.recursion)
      return t.add(l), n(l, {
        isEmbeddedInLabel: C.isEmbeddedInLabel
      });
    var L = R(l);
    return L !== null ? (t.add(l), L) : (t.add(l), "");
  }
  return Gc(T(e, {
    isEmbeddedInLabel: !1,
    // by spec computeAccessibleDescription starts with the referenced elements as roots
    isReferenced: c === "description",
    recursion: !1
  }));
}
function da(e) {
  "@babel/helpers - typeof";
  return da = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, da(e);
}
function Jo(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    r && (a = a.filter(function(s) {
      return Object.getOwnPropertyDescriptor(e, s).enumerable;
    })), t.push.apply(t, a);
  }
  return t;
}
function Zo(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Jo(Object(t), !0).forEach(function(a) {
      od(e, a, t[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Jo(Object(t)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a));
    });
  }
  return e;
}
function od(e, r, t) {
  return r = ld(r), r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function ld(e) {
  var r = id(e, "string");
  return da(r) === "symbol" ? r : String(r);
}
function id(e, r) {
  if (da(e) !== "object" || e === null) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var a = t.call(e, r);
    if (da(a) !== "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(e);
}
function is(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = Pa(e, "aria-describedby").map(function(s) {
    return ls(s, Zo(Zo({}, r), {}, {
      compute: "description"
    }));
  }).join(" ");
  if (t === "") {
    var a = e.getAttribute("title");
    t = a === null ? "" : a;
  }
  return t;
}
function ud(e) {
  return ze(e, ["caption", "code", "deletion", "emphasis", "generic", "insertion", "paragraph", "presentation", "strong", "subscript", "superscript"]);
}
function io(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return ud(e) ? "" : ls(e, r);
}
var we = {}, Cr = {}, Ea = {}, _r = {}, el;
function sd() {
  if (el) return _r;
  el = 1, Object.defineProperty(_r, "__esModule", {
    value: !0
  }), _r.default = void 0;
  function e() {
    var t = this, a = 0, s = {
      "@@iterator": function() {
        return s;
      },
      next: function() {
        if (a < t.length) {
          var f = t[a];
          return a = a + 1, {
            done: !1,
            value: f
          };
        } else
          return {
            done: !0
          };
      }
    };
    return s;
  }
  var r = e;
  return _r.default = r, _r;
}
var rl;
function pa() {
  if (rl) return Ea;
  rl = 1, Object.defineProperty(Ea, "__esModule", {
    value: !0
  }), Ea.default = a;
  var e = r(sd());
  function r(s) {
    return s && s.__esModule ? s : { default: s };
  }
  function t(s) {
    "@babel/helpers - typeof";
    return t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(c) {
      return typeof c;
    } : function(c) {
      return c && typeof Symbol == "function" && c.constructor === Symbol && c !== Symbol.prototype ? "symbol" : typeof c;
    }, t(s);
  }
  function a(s, c) {
    return typeof Symbol == "function" && t(Symbol.iterator) === "symbol" && Object.defineProperty(s, Symbol.iterator, {
      value: e.default.bind(c)
    }), s;
  }
  return Ea;
}
var tl;
function cd() {
  if (tl) return Cr;
  tl = 1, Object.defineProperty(Cr, "__esModule", {
    value: !0
  }), Cr.default = void 0;
  var e = r(pa());
  function r(n) {
    return n && n.__esModule ? n : { default: n };
  }
  function t(n, y) {
    return c(n) || s(n, y) || h(n, y) || a();
  }
  function a() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function s(n, y) {
    var R = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
    if (R != null) {
      var g = [], T = !0, l = !1, C, _;
      try {
        for (R = R.call(n); !(T = (C = R.next()).done) && (g.push(C.value), !(y && g.length === y)); T = !0)
          ;
      } catch (P) {
        l = !0, _ = P;
      } finally {
        try {
          !T && R.return != null && R.return();
        } finally {
          if (l) throw _;
        }
      }
      return g;
    }
  }
  function c(n) {
    if (Array.isArray(n)) return n;
  }
  function f(n, y) {
    var R = typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
    if (!R) {
      if (Array.isArray(n) || (R = h(n)) || y) {
        R && (n = R);
        var g = 0, T = function() {
        };
        return { s: T, n: function() {
          return g >= n.length ? { done: !0 } : { done: !1, value: n[g++] };
        }, e: function(w) {
          throw w;
        }, f: T };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var l = !0, C = !1, _;
    return { s: function() {
      R = R.call(n);
    }, n: function() {
      var w = R.next();
      return l = w.done, w;
    }, e: function(w) {
      C = !0, _ = w;
    }, f: function() {
      try {
        !l && R.return != null && R.return();
      } finally {
        if (C) throw _;
      }
    } };
  }
  function h(n, y) {
    if (n) {
      if (typeof n == "string") return u(n, y);
      var R = Object.prototype.toString.call(n).slice(8, -1);
      if (R === "Object" && n.constructor && (R = n.constructor.name), R === "Map" || R === "Set") return Array.from(n);
      if (R === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(R)) return u(n, y);
    }
  }
  function u(n, y) {
    (y == null || y > n.length) && (y = n.length);
    for (var R = 0, g = new Array(y); R < y; R++)
      g[R] = n[R];
    return g;
  }
  var o = [["aria-activedescendant", {
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
  }]], d = {
    entries: function() {
      return o;
    },
    forEach: function(y) {
      var R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, g = f(o), T;
      try {
        for (g.s(); !(T = g.n()).done; ) {
          var l = t(T.value, 2), C = l[0], _ = l[1];
          y.call(R, _, C, o);
        }
      } catch (P) {
        g.e(P);
      } finally {
        g.f();
      }
    },
    get: function(y) {
      var R = o.find(function(g) {
        return g[0] === y;
      });
      return R && R[1];
    },
    has: function(y) {
      return !!d.get(y);
    },
    keys: function() {
      return o.map(function(y) {
        var R = t(y, 1), g = R[0];
        return g;
      });
    },
    values: function() {
      return o.map(function(y) {
        var R = t(y, 2), g = R[1];
        return g;
      });
    }
  }, i = (0, e.default)(d, d.entries());
  return Cr.default = i, Cr;
}
var wr = {}, nl;
function dd() {
  if (nl) return wr;
  nl = 1, Object.defineProperty(wr, "__esModule", {
    value: !0
  }), wr.default = void 0;
  var e = r(pa());
  function r(n) {
    return n && n.__esModule ? n : { default: n };
  }
  function t(n, y) {
    return c(n) || s(n, y) || h(n, y) || a();
  }
  function a() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function s(n, y) {
    var R = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
    if (R != null) {
      var g = [], T = !0, l = !1, C, _;
      try {
        for (R = R.call(n); !(T = (C = R.next()).done) && (g.push(C.value), !(y && g.length === y)); T = !0)
          ;
      } catch (P) {
        l = !0, _ = P;
      } finally {
        try {
          !T && R.return != null && R.return();
        } finally {
          if (l) throw _;
        }
      }
      return g;
    }
  }
  function c(n) {
    if (Array.isArray(n)) return n;
  }
  function f(n, y) {
    var R = typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
    if (!R) {
      if (Array.isArray(n) || (R = h(n)) || y) {
        R && (n = R);
        var g = 0, T = function() {
        };
        return { s: T, n: function() {
          return g >= n.length ? { done: !0 } : { done: !1, value: n[g++] };
        }, e: function(w) {
          throw w;
        }, f: T };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var l = !0, C = !1, _;
    return { s: function() {
      R = R.call(n);
    }, n: function() {
      var w = R.next();
      return l = w.done, w;
    }, e: function(w) {
      C = !0, _ = w;
    }, f: function() {
      try {
        !l && R.return != null && R.return();
      } finally {
        if (C) throw _;
      }
    } };
  }
  function h(n, y) {
    if (n) {
      if (typeof n == "string") return u(n, y);
      var R = Object.prototype.toString.call(n).slice(8, -1);
      if (R === "Object" && n.constructor && (R = n.constructor.name), R === "Map" || R === "Set") return Array.from(n);
      if (R === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(R)) return u(n, y);
    }
  }
  function u(n, y) {
    (y == null || y > n.length) && (y = n.length);
    for (var R = 0, g = new Array(y); R < y; R++)
      g[R] = n[R];
    return g;
  }
  var o = [["a", {
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
  }]], d = {
    entries: function() {
      return o;
    },
    forEach: function(y) {
      var R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, g = f(o), T;
      try {
        for (g.s(); !(T = g.n()).done; ) {
          var l = t(T.value, 2), C = l[0], _ = l[1];
          y.call(R, _, C, o);
        }
      } catch (P) {
        g.e(P);
      } finally {
        g.f();
      }
    },
    get: function(y) {
      var R = o.find(function(g) {
        return g[0] === y;
      });
      return R && R[1];
    },
    has: function(y) {
      return !!d.get(y);
    },
    keys: function() {
      return o.map(function(y) {
        var R = t(y, 1), g = R[0];
        return g;
      });
    },
    values: function() {
      return o.map(function(y) {
        var R = t(y, 2), g = R[1];
        return g;
      });
    }
  }, i = (0, e.default)(d, d.entries());
  return wr.default = i, wr;
}
var Pr = {}, Tr = {}, xr = {}, al;
function fd() {
  if (al) return xr;
  al = 1, Object.defineProperty(xr, "__esModule", {
    value: !0
  }), xr.default = void 0;
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
  }, r = e;
  return xr.default = r, xr;
}
var Mr = {}, ol;
function pd() {
  if (ol) return Mr;
  ol = 1, Object.defineProperty(Mr, "__esModule", {
    value: !0
  }), Mr.default = void 0;
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
  }, r = e;
  return Mr.default = r, Mr;
}
var Or = {}, ll;
function md() {
  if (ll) return Or;
  ll = 1, Object.defineProperty(Or, "__esModule", {
    value: !0
  }), Or.default = void 0;
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
  }, r = e;
  return Or.default = r, Or;
}
var Sr = {}, il;
function vd() {
  if (il) return Sr;
  il = 1, Object.defineProperty(Sr, "__esModule", {
    value: !0
  }), Sr.default = void 0;
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
  }, r = e;
  return Sr.default = r, Sr;
}
var Ar = {}, ul;
function bd() {
  if (ul) return Ar;
  ul = 1, Object.defineProperty(Ar, "__esModule", {
    value: !0
  }), Ar.default = void 0;
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
  }, r = e;
  return Ar.default = r, Ar;
}
var Ir = {}, sl;
function hd() {
  if (sl) return Ir;
  sl = 1, Object.defineProperty(Ir, "__esModule", {
    value: !0
  }), Ir.default = void 0;
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
  }, r = e;
  return Ir.default = r, Ir;
}
var Dr = {}, cl;
function yd() {
  if (cl) return Dr;
  cl = 1, Object.defineProperty(Dr, "__esModule", {
    value: !0
  }), Dr.default = void 0;
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
  }, r = e;
  return Dr.default = r, Dr;
}
var Nr = {}, dl;
function Rd() {
  if (dl) return Nr;
  dl = 1, Object.defineProperty(Nr, "__esModule", {
    value: !0
  }), Nr.default = void 0;
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
  }, r = e;
  return Nr.default = r, Nr;
}
var kr = {}, fl;
function gd() {
  if (fl) return kr;
  fl = 1, Object.defineProperty(kr, "__esModule", {
    value: !0
  }), kr.default = void 0;
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
  }, r = e;
  return kr.default = r, kr;
}
var Lr = {}, pl;
function Ed() {
  if (pl) return Lr;
  pl = 1, Object.defineProperty(Lr, "__esModule", {
    value: !0
  }), Lr.default = void 0;
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
  }, r = e;
  return Lr.default = r, Lr;
}
var Br = {}, ml;
function qd() {
  if (ml) return Br;
  ml = 1, Object.defineProperty(Br, "__esModule", {
    value: !0
  }), Br.default = void 0;
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
  }, r = e;
  return Br.default = r, Br;
}
var Fr = {}, vl;
function Cd() {
  if (vl) return Fr;
  vl = 1, Object.defineProperty(Fr, "__esModule", {
    value: !0
  }), Fr.default = void 0;
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
  }, r = e;
  return Fr.default = r, Fr;
}
var bl;
function _d() {
  if (bl) return Tr;
  bl = 1, Object.defineProperty(Tr, "__esModule", {
    value: !0
  }), Tr.default = void 0;
  var e = n(fd()), r = n(pd()), t = n(md()), a = n(vd()), s = n(bd()), c = n(hd()), f = n(yd()), h = n(Rd()), u = n(gd()), o = n(Ed()), d = n(qd()), i = n(Cd());
  function n(g) {
    return g && g.__esModule ? g : { default: g };
  }
  var y = [["command", e.default], ["composite", r.default], ["input", t.default], ["landmark", a.default], ["range", s.default], ["roletype", c.default], ["section", f.default], ["sectionhead", h.default], ["select", u.default], ["structure", o.default], ["widget", d.default], ["window", i.default]], R = y;
  return Tr.default = R, Tr;
}
var jr = {}, Ur = {}, hl;
function wd() {
  if (hl) return Ur;
  hl = 1, Object.defineProperty(Ur, "__esModule", {
    value: !0
  }), Ur.default = void 0;
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
  }, r = e;
  return Ur.default = r, Ur;
}
var $r = {}, yl;
function Pd() {
  if (yl) return $r;
  yl = 1, Object.defineProperty($r, "__esModule", {
    value: !0
  }), $r.default = void 0;
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
  }, r = e;
  return $r.default = r, $r;
}
var Hr = {}, Rl;
function Td() {
  if (Rl) return Hr;
  Rl = 1, Object.defineProperty(Hr, "__esModule", {
    value: !0
  }), Hr.default = void 0;
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
  }, r = e;
  return Hr.default = r, Hr;
}
var Wr = {}, gl;
function xd() {
  if (gl) return Wr;
  gl = 1, Object.defineProperty(Wr, "__esModule", {
    value: !0
  }), Wr.default = void 0;
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
  }, r = e;
  return Wr.default = r, Wr;
}
var Vr = {}, El;
function Md() {
  if (El) return Vr;
  El = 1, Object.defineProperty(Vr, "__esModule", {
    value: !0
  }), Vr.default = void 0;
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
  }, r = e;
  return Vr.default = r, Vr;
}
var zr = {}, ql;
function Od() {
  if (ql) return zr;
  ql = 1, Object.defineProperty(zr, "__esModule", {
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
  }, r = e;
  return zr.default = r, zr;
}
var Gr = {}, Cl;
function Sd() {
  if (Cl) return Gr;
  Cl = 1, Object.defineProperty(Gr, "__esModule", {
    value: !0
  }), Gr.default = void 0;
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
  }, r = e;
  return Gr.default = r, Gr;
}
var Yr = {}, _l;
function Ad() {
  if (_l) return Yr;
  _l = 1, Object.defineProperty(Yr, "__esModule", {
    value: !0
  }), Yr.default = void 0;
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
  }, r = e;
  return Yr.default = r, Yr;
}
var Kr = {}, wl;
function Id() {
  if (wl) return Kr;
  wl = 1, Object.defineProperty(Kr, "__esModule", {
    value: !0
  }), Kr.default = void 0;
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
  }, r = e;
  return Kr.default = r, Kr;
}
var Xr = {}, Pl;
function Dd() {
  if (Pl) return Xr;
  Pl = 1, Object.defineProperty(Xr, "__esModule", {
    value: !0
  }), Xr.default = void 0;
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
  }, r = e;
  return Xr.default = r, Xr;
}
var Qr = {}, Tl;
function Nd() {
  if (Tl) return Qr;
  Tl = 1, Object.defineProperty(Qr, "__esModule", {
    value: !0
  }), Qr.default = void 0;
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
  }, r = e;
  return Qr.default = r, Qr;
}
var Jr = {}, xl;
function kd() {
  if (xl) return Jr;
  xl = 1, Object.defineProperty(Jr, "__esModule", {
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
  }, r = e;
  return Jr.default = r, Jr;
}
var Zr = {}, Ml;
function Ld() {
  if (Ml) return Zr;
  Ml = 1, Object.defineProperty(Zr, "__esModule", {
    value: !0
  }), Zr.default = void 0;
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
  }, r = e;
  return Zr.default = r, Zr;
}
var et = {}, Ol;
function Bd() {
  if (Ol) return et;
  Ol = 1, Object.defineProperty(et, "__esModule", {
    value: !0
  }), et.default = void 0;
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
  }, r = e;
  return et.default = r, et;
}
var rt = {}, Sl;
function Fd() {
  if (Sl) return rt;
  Sl = 1, Object.defineProperty(rt, "__esModule", {
    value: !0
  }), rt.default = void 0;
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
  }, r = e;
  return rt.default = r, rt;
}
var tt = {}, Al;
function jd() {
  if (Al) return tt;
  Al = 1, Object.defineProperty(tt, "__esModule", {
    value: !0
  }), tt.default = void 0;
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
  }, r = e;
  return tt.default = r, tt;
}
var nt = {}, Il;
function Ud() {
  if (Il) return nt;
  Il = 1, Object.defineProperty(nt, "__esModule", {
    value: !0
  }), nt.default = void 0;
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
  }, r = e;
  return nt.default = r, nt;
}
var at = {}, Dl;
function $d() {
  if (Dl) return at;
  Dl = 1, Object.defineProperty(at, "__esModule", {
    value: !0
  }), at.default = void 0;
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
  }, r = e;
  return at.default = r, at;
}
var ot = {}, Nl;
function Hd() {
  if (Nl) return ot;
  Nl = 1, Object.defineProperty(ot, "__esModule", {
    value: !0
  }), ot.default = void 0;
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
  }, r = e;
  return ot.default = r, ot;
}
var lt = {}, kl;
function Wd() {
  if (kl) return lt;
  kl = 1, Object.defineProperty(lt, "__esModule", {
    value: !0
  }), lt.default = void 0;
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
  }, r = e;
  return lt.default = r, lt;
}
var it = {}, Ll;
function Vd() {
  if (Ll) return it;
  Ll = 1, Object.defineProperty(it, "__esModule", {
    value: !0
  }), it.default = void 0;
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
  }, r = e;
  return it.default = r, it;
}
var ut = {}, Bl;
function zd() {
  if (Bl) return ut;
  Bl = 1, Object.defineProperty(ut, "__esModule", {
    value: !0
  }), ut.default = void 0;
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
  }, r = e;
  return ut.default = r, ut;
}
var st = {}, Fl;
function Gd() {
  if (Fl) return st;
  Fl = 1, Object.defineProperty(st, "__esModule", {
    value: !0
  }), st.default = void 0;
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
  }, r = e;
  return st.default = r, st;
}
var ct = {}, jl;
function Yd() {
  if (jl) return ct;
  jl = 1, Object.defineProperty(ct, "__esModule", {
    value: !0
  }), ct.default = void 0;
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
  }, r = e;
  return ct.default = r, ct;
}
var dt = {}, Ul;
function Kd() {
  if (Ul) return dt;
  Ul = 1, Object.defineProperty(dt, "__esModule", {
    value: !0
  }), dt.default = void 0;
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
  }, r = e;
  return dt.default = r, dt;
}
var ft = {}, $l;
function Xd() {
  if ($l) return ft;
  $l = 1, Object.defineProperty(ft, "__esModule", {
    value: !0
  }), ft.default = void 0;
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
  }, r = e;
  return ft.default = r, ft;
}
var pt = {}, Hl;
function Qd() {
  if (Hl) return pt;
  Hl = 1, Object.defineProperty(pt, "__esModule", {
    value: !0
  }), pt.default = void 0;
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
  }, r = e;
  return pt.default = r, pt;
}
var mt = {}, Wl;
function Jd() {
  if (Wl) return mt;
  Wl = 1, Object.defineProperty(mt, "__esModule", {
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
  }, r = e;
  return mt.default = r, mt;
}
var vt = {}, Vl;
function Zd() {
  if (Vl) return vt;
  Vl = 1, Object.defineProperty(vt, "__esModule", {
    value: !0
  }), vt.default = void 0;
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
  }, r = e;
  return vt.default = r, vt;
}
var bt = {}, zl;
function ef() {
  if (zl) return bt;
  zl = 1, Object.defineProperty(bt, "__esModule", {
    value: !0
  }), bt.default = void 0;
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
  }, r = e;
  return bt.default = r, bt;
}
var ht = {}, Gl;
function rf() {
  if (Gl) return ht;
  Gl = 1, Object.defineProperty(ht, "__esModule", {
    value: !0
  }), ht.default = void 0;
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
  }, r = e;
  return ht.default = r, ht;
}
var yt = {}, Yl;
function tf() {
  if (Yl) return yt;
  Yl = 1, Object.defineProperty(yt, "__esModule", {
    value: !0
  }), yt.default = void 0;
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
  }, r = e;
  return yt.default = r, yt;
}
var Rt = {}, Kl;
function nf() {
  if (Kl) return Rt;
  Kl = 1, Object.defineProperty(Rt, "__esModule", {
    value: !0
  }), Rt.default = void 0;
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
  }, r = e;
  return Rt.default = r, Rt;
}
var gt = {}, Xl;
function af() {
  if (Xl) return gt;
  Xl = 1, Object.defineProperty(gt, "__esModule", {
    value: !0
  }), gt.default = void 0;
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
  }, r = e;
  return gt.default = r, gt;
}
var Et = {}, Ql;
function of() {
  if (Ql) return Et;
  Ql = 1, Object.defineProperty(Et, "__esModule", {
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
  }, r = e;
  return Et.default = r, Et;
}
var qt = {}, Jl;
function lf() {
  if (Jl) return qt;
  Jl = 1, Object.defineProperty(qt, "__esModule", {
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
      "aria-live": "polite"
    },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, r = e;
  return qt.default = r, qt;
}
var Ct = {}, Zl;
function uf() {
  if (Zl) return Ct;
  Zl = 1, Object.defineProperty(Ct, "__esModule", {
    value: !0
  }), Ct.default = void 0;
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
  }, r = e;
  return Ct.default = r, Ct;
}
var _t = {}, ei;
function sf() {
  if (ei) return _t;
  ei = 1, Object.defineProperty(_t, "__esModule", {
    value: !0
  }), _t.default = void 0;
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
  }, r = e;
  return _t.default = r, _t;
}
var wt = {}, ri;
function cf() {
  if (ri) return wt;
  ri = 1, Object.defineProperty(wt, "__esModule", {
    value: !0
  }), wt.default = void 0;
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
  }, r = e;
  return wt.default = r, wt;
}
var Pt = {}, ti;
function df() {
  if (ti) return Pt;
  ti = 1, Object.defineProperty(Pt, "__esModule", {
    value: !0
  }), Pt.default = void 0;
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
  }, r = e;
  return Pt.default = r, Pt;
}
var Tt = {}, ni;
function ff() {
  if (ni) return Tt;
  ni = 1, Object.defineProperty(Tt, "__esModule", {
    value: !0
  }), Tt.default = void 0;
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
  }, r = e;
  return Tt.default = r, Tt;
}
var xt = {}, ai;
function pf() {
  if (ai) return xt;
  ai = 1, Object.defineProperty(xt, "__esModule", {
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
  }, r = e;
  return xt.default = r, xt;
}
var Mt = {}, oi;
function mf() {
  if (oi) return Mt;
  oi = 1, Object.defineProperty(Mt, "__esModule", {
    value: !0
  }), Mt.default = void 0;
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
  }, r = e;
  return Mt.default = r, Mt;
}
var Ot = {}, li;
function vf() {
  if (li) return Ot;
  li = 1, Object.defineProperty(Ot, "__esModule", {
    value: !0
  }), Ot.default = void 0;
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
  }, r = e;
  return Ot.default = r, Ot;
}
var St = {}, ii;
function bf() {
  if (ii) return St;
  ii = 1, Object.defineProperty(St, "__esModule", {
    value: !0
  }), St.default = void 0;
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
  }, r = e;
  return St.default = r, St;
}
var At = {}, ui;
function hf() {
  if (ui) return At;
  ui = 1, Object.defineProperty(At, "__esModule", {
    value: !0
  }), At.default = void 0;
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
  }, r = e;
  return At.default = r, At;
}
var It = {}, si;
function yf() {
  if (si) return It;
  si = 1, Object.defineProperty(It, "__esModule", {
    value: !0
  }), It.default = void 0;
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
  }, r = e;
  return It.default = r, It;
}
var Dt = {}, ci;
function Rf() {
  if (ci) return Dt;
  ci = 1, Object.defineProperty(Dt, "__esModule", {
    value: !0
  }), Dt.default = void 0;
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
  }, r = e;
  return Dt.default = r, Dt;
}
var Nt = {}, di;
function gf() {
  if (di) return Nt;
  di = 1, Object.defineProperty(Nt, "__esModule", {
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
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, r = e;
  return Nt.default = r, Nt;
}
var kt = {}, fi;
function Ef() {
  if (fi) return kt;
  fi = 1, Object.defineProperty(kt, "__esModule", {
    value: !0
  }), kt.default = void 0;
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
  }, r = e;
  return kt.default = r, kt;
}
var Lt = {}, pi;
function qf() {
  if (pi) return Lt;
  pi = 1, Object.defineProperty(Lt, "__esModule", {
    value: !0
  }), Lt.default = void 0;
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
  }, r = e;
  return Lt.default = r, Lt;
}
var Bt = {}, mi;
function Cf() {
  if (mi) return Bt;
  mi = 1, Object.defineProperty(Bt, "__esModule", {
    value: !0
  }), Bt.default = void 0;
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
  }, r = e;
  return Bt.default = r, Bt;
}
var Ft = {}, vi;
function _f() {
  if (vi) return Ft;
  vi = 1, Object.defineProperty(Ft, "__esModule", {
    value: !0
  }), Ft.default = void 0;
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
  }, r = e;
  return Ft.default = r, Ft;
}
var jt = {}, bi;
function wf() {
  if (bi) return jt;
  bi = 1, Object.defineProperty(jt, "__esModule", {
    value: !0
  }), jt.default = void 0;
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
  }, r = e;
  return jt.default = r, jt;
}
var Ut = {}, hi;
function Pf() {
  if (hi) return Ut;
  hi = 1, Object.defineProperty(Ut, "__esModule", {
    value: !0
  }), Ut.default = void 0;
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
  }, r = e;
  return Ut.default = r, Ut;
}
var $t = {}, yi;
function Tf() {
  if (yi) return $t;
  yi = 1, Object.defineProperty($t, "__esModule", {
    value: !0
  }), $t.default = void 0;
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
  }, r = e;
  return $t.default = r, $t;
}
var Ht = {}, Ri;
function xf() {
  if (Ri) return Ht;
  Ri = 1, Object.defineProperty(Ht, "__esModule", {
    value: !0
  }), Ht.default = void 0;
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
  }, r = e;
  return Ht.default = r, Ht;
}
var Wt = {}, gi;
function Mf() {
  if (gi) return Wt;
  gi = 1, Object.defineProperty(Wt, "__esModule", {
    value: !0
  }), Wt.default = void 0;
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
  }, r = e;
  return Wt.default = r, Wt;
}
var Vt = {}, Ei;
function Of() {
  if (Ei) return Vt;
  Ei = 1, Object.defineProperty(Vt, "__esModule", {
    value: !0
  }), Vt.default = void 0;
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
  }, r = e;
  return Vt.default = r, Vt;
}
var zt = {}, qi;
function Sf() {
  if (qi) return zt;
  qi = 1, Object.defineProperty(zt, "__esModule", {
    value: !0
  }), zt.default = void 0;
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
  }, r = e;
  return zt.default = r, zt;
}
var Gt = {}, Ci;
function Af() {
  if (Ci) return Gt;
  Ci = 1, Object.defineProperty(Gt, "__esModule", {
    value: !0
  }), Gt.default = void 0;
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
  }, r = e;
  return Gt.default = r, Gt;
}
var Yt = {}, _i;
function If() {
  if (_i) return Yt;
  _i = 1, Object.defineProperty(Yt, "__esModule", {
    value: !0
  }), Yt.default = void 0;
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
  }, r = e;
  return Yt.default = r, Yt;
}
var Kt = {}, wi;
function Df() {
  if (wi) return Kt;
  wi = 1, Object.defineProperty(Kt, "__esModule", {
    value: !0
  }), Kt.default = void 0;
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
  }, r = e;
  return Kt.default = r, Kt;
}
var Xt = {}, Pi;
function Nf() {
  if (Pi) return Xt;
  Pi = 1, Object.defineProperty(Xt, "__esModule", {
    value: !0
  }), Xt.default = void 0;
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
  }, r = e;
  return Xt.default = r, Xt;
}
var Qt = {}, Ti;
function kf() {
  if (Ti) return Qt;
  Ti = 1, Object.defineProperty(Qt, "__esModule", {
    value: !0
  }), Qt.default = void 0;
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
  }, r = e;
  return Qt.default = r, Qt;
}
var Jt = {}, xi;
function Lf() {
  if (xi) return Jt;
  xi = 1, Object.defineProperty(Jt, "__esModule", {
    value: !0
  }), Jt.default = void 0;
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
  }, r = e;
  return Jt.default = r, Jt;
}
var Zt = {}, Mi;
function Bf() {
  if (Mi) return Zt;
  Mi = 1, Object.defineProperty(Zt, "__esModule", {
    value: !0
  }), Zt.default = void 0;
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
  }, r = e;
  return Zt.default = r, Zt;
}
var en = {}, Oi;
function Ff() {
  if (Oi) return en;
  Oi = 1, Object.defineProperty(en, "__esModule", {
    value: !0
  }), en.default = void 0;
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
  }, r = e;
  return en.default = r, en;
}
var rn = {}, Si;
function jf() {
  if (Si) return rn;
  Si = 1, Object.defineProperty(rn, "__esModule", {
    value: !0
  }), rn.default = void 0;
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
  }, r = e;
  return rn.default = r, rn;
}
var tn = {}, Ai;
function Uf() {
  if (Ai) return tn;
  Ai = 1, Object.defineProperty(tn, "__esModule", {
    value: !0
  }), tn.default = void 0;
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
  }, r = e;
  return tn.default = r, tn;
}
var nn = {}, Ii;
function $f() {
  if (Ii) return nn;
  Ii = 1, Object.defineProperty(nn, "__esModule", {
    value: !0
  }), nn.default = void 0;
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
  }, r = e;
  return nn.default = r, nn;
}
var an = {}, Di;
function Hf() {
  if (Di) return an;
  Di = 1, Object.defineProperty(an, "__esModule", {
    value: !0
  }), an.default = void 0;
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
  }, r = e;
  return an.default = r, an;
}
var on = {}, Ni;
function Wf() {
  if (Ni) return on;
  Ni = 1, Object.defineProperty(on, "__esModule", {
    value: !0
  }), on.default = void 0;
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
  }, r = e;
  return on.default = r, on;
}
var ln = {}, ki;
function Vf() {
  if (ki) return ln;
  ki = 1, Object.defineProperty(ln, "__esModule", {
    value: !0
  }), ln.default = void 0;
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
  }, r = e;
  return ln.default = r, ln;
}
var un = {}, Li;
function zf() {
  if (Li) return un;
  Li = 1, Object.defineProperty(un, "__esModule", {
    value: !0
  }), un.default = void 0;
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
  }, r = e;
  return un.default = r, un;
}
var sn = {}, Bi;
function Gf() {
  if (Bi) return sn;
  Bi = 1, Object.defineProperty(sn, "__esModule", {
    value: !0
  }), sn.default = void 0;
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
  }, r = e;
  return sn.default = r, sn;
}
var cn = {}, Fi;
function Yf() {
  if (Fi) return cn;
  Fi = 1, Object.defineProperty(cn, "__esModule", {
    value: !0
  }), cn.default = void 0;
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
  }, r = e;
  return cn.default = r, cn;
}
var dn = {}, ji;
function Kf() {
  if (ji) return dn;
  ji = 1, Object.defineProperty(dn, "__esModule", {
    value: !0
  }), dn.default = void 0;
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
  }, r = e;
  return dn.default = r, dn;
}
var fn = {}, Ui;
function Xf() {
  if (Ui) return fn;
  Ui = 1, Object.defineProperty(fn, "__esModule", {
    value: !0
  }), fn.default = void 0;
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
  }, r = e;
  return fn.default = r, fn;
}
var pn = {}, $i;
function Qf() {
  if ($i) return pn;
  $i = 1, Object.defineProperty(pn, "__esModule", {
    value: !0
  }), pn.default = void 0;
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
  }, r = e;
  return pn.default = r, pn;
}
var mn = {}, Hi;
function Jf() {
  if (Hi) return mn;
  Hi = 1, Object.defineProperty(mn, "__esModule", {
    value: !0
  }), mn.default = void 0;
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
  }, r = e;
  return mn.default = r, mn;
}
var vn = {}, Wi;
function Zf() {
  if (Wi) return vn;
  Wi = 1, Object.defineProperty(vn, "__esModule", {
    value: !0
  }), vn.default = void 0;
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
  }, r = e;
  return vn.default = r, vn;
}
var bn = {}, Vi;
function ep() {
  if (Vi) return bn;
  Vi = 1, Object.defineProperty(bn, "__esModule", {
    value: !0
  }), bn.default = void 0;
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
  }, r = e;
  return bn.default = r, bn;
}
var zi;
function rp() {
  if (zi) return jr;
  zi = 1, Object.defineProperty(jr, "__esModule", {
    value: !0
  }), jr.default = void 0;
  var e = k(wd()), r = k(Pd()), t = k(Td()), a = k(xd()), s = k(Md()), c = k(Od()), f = k(Sd()), h = k(Ad()), u = k(Id()), o = k(Dd()), d = k(Nd()), i = k(kd()), n = k(Ld()), y = k(Bd()), R = k(Fd()), g = k(jd()), T = k(Ud()), l = k($d()), C = k(Hd()), _ = k(Wd()), P = k(Vd()), w = k(zd()), v = k(Gd()), b = k(Yd()), E = k(Kd()), A = k(Xd()), L = k(Qd()), j = k(Jd()), F = k(Zd()), O = k(ef()), B = k(rf()), K = k(tf()), ee = k(nf()), z = k(af()), ue = k(of()), pe = k(lf()), qe = k(uf()), Pe = k(sf()), Te = k(cf()), $ = k(df()), Ee = k(ff()), me = k(pf()), ye = k(mf()), Ne = k(vf()), ke = k(bf()), q = k(hf()), U = k(yf()), N = k(Rf()), Y = k(gf()), V = k(Ef()), Q = k(qf()), ie = k(Cf()), oe = k(_f()), ve = k(wf()), Ae = k(Pf()), Ke = k(Tf()), ir = k(xf()), ur = k(Mf()), sr = k(Of()), cr = k(Sf()), dr = k(Af()), Rr = k(If()), Ze = k(Df()), fr = k(Nf()), Le = k(kf()), gr = k(Lf()), p = k(Bf()), I = k(Ff()), S = k(jf()), H = k(Uf()), J = k($f()), Z = k(Hf()), G = k(Wf()), re = k(Vf()), Re = k(zf()), Ce = k(Gf()), Er = k(Yf()), Da = k(Kf()), Na = k(Xf()), pr = k(Qf()), ka = k(Jf()), qr = k(Zf()), va = k(ep());
  function k(er) {
    return er && er.__esModule ? er : { default: er };
  }
  var ba = [["alert", e.default], ["alertdialog", r.default], ["application", t.default], ["article", a.default], ["banner", s.default], ["blockquote", c.default], ["button", f.default], ["caption", h.default], ["cell", u.default], ["checkbox", o.default], ["code", d.default], ["columnheader", i.default], ["combobox", n.default], ["complementary", y.default], ["contentinfo", R.default], ["definition", g.default], ["deletion", T.default], ["dialog", l.default], ["directory", C.default], ["document", _.default], ["emphasis", P.default], ["feed", w.default], ["figure", v.default], ["form", b.default], ["generic", E.default], ["grid", A.default], ["gridcell", L.default], ["group", j.default], ["heading", F.default], ["img", O.default], ["insertion", B.default], ["link", K.default], ["list", ee.default], ["listbox", z.default], ["listitem", ue.default], ["log", pe.default], ["main", qe.default], ["mark", Pe.default], ["marquee", Te.default], ["math", $.default], ["menu", Ee.default], ["menubar", me.default], ["menuitem", ye.default], ["menuitemcheckbox", Ne.default], ["menuitemradio", ke.default], ["meter", q.default], ["navigation", U.default], ["none", N.default], ["note", Y.default], ["option", V.default], ["paragraph", Q.default], ["presentation", ie.default], ["progressbar", oe.default], ["radio", ve.default], ["radiogroup", Ae.default], ["region", Ke.default], ["row", ir.default], ["rowgroup", ur.default], ["rowheader", sr.default], ["scrollbar", cr.default], ["search", dr.default], ["searchbox", Rr.default], ["separator", Ze.default], ["slider", fr.default], ["spinbutton", Le.default], ["status", gr.default], ["strong", p.default], ["subscript", I.default], ["superscript", S.default], ["switch", H.default], ["tab", J.default], ["table", Z.default], ["tablist", G.default], ["tabpanel", re.default], ["term", Re.default], ["textbox", Ce.default], ["time", Er.default], ["timer", Da.default], ["toolbar", Na.default], ["tooltip", pr.default], ["tree", ka.default], ["treegrid", qr.default], ["treeitem", va.default]], La = ba;
  return jr.default = La, jr;
}
var hn = {}, yn = {}, Gi;
function tp() {
  if (Gi) return yn;
  Gi = 1, Object.defineProperty(yn, "__esModule", {
    value: !0
  }), yn.default = void 0;
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
  }, r = e;
  return yn.default = r, yn;
}
var Rn = {}, Yi;
function np() {
  if (Yi) return Rn;
  Yi = 1, Object.defineProperty(Rn, "__esModule", {
    value: !0
  }), Rn.default = void 0;
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
  }, r = e;
  return Rn.default = r, Rn;
}
var gn = {}, Ki;
function ap() {
  if (Ki) return gn;
  Ki = 1, Object.defineProperty(gn, "__esModule", {
    value: !0
  }), gn.default = void 0;
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
  }, r = e;
  return gn.default = r, gn;
}
var En = {}, Xi;
function op() {
  if (Xi) return En;
  Xi = 1, Object.defineProperty(En, "__esModule", {
    value: !0
  }), En.default = void 0;
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
  }, r = e;
  return En.default = r, En;
}
var qn = {}, Qi;
function lp() {
  if (Qi) return qn;
  Qi = 1, Object.defineProperty(qn, "__esModule", {
    value: !0
  }), qn.default = void 0;
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
  }, r = e;
  return qn.default = r, qn;
}
var Cn = {}, Ji;
function ip() {
  if (Ji) return Cn;
  Ji = 1, Object.defineProperty(Cn, "__esModule", {
    value: !0
  }), Cn.default = void 0;
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
  }, r = e;
  return Cn.default = r, Cn;
}
var _n = {}, Zi;
function up() {
  if (Zi) return _n;
  Zi = 1, Object.defineProperty(_n, "__esModule", {
    value: !0
  }), _n.default = void 0;
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
  }, r = e;
  return _n.default = r, _n;
}
var wn = {}, eu;
function sp() {
  if (eu) return wn;
  eu = 1, Object.defineProperty(wn, "__esModule", {
    value: !0
  }), wn.default = void 0;
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
  }, r = e;
  return wn.default = r, wn;
}
var Pn = {}, ru;
function cp() {
  if (ru) return Pn;
  ru = 1, Object.defineProperty(Pn, "__esModule", {
    value: !0
  }), Pn.default = void 0;
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
  }, r = e;
  return Pn.default = r, Pn;
}
var Tn = {}, tu;
function dp() {
  if (tu) return Tn;
  tu = 1, Object.defineProperty(Tn, "__esModule", {
    value: !0
  }), Tn.default = void 0;
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
  }, r = e;
  return Tn.default = r, Tn;
}
var xn = {}, nu;
function fp() {
  if (nu) return xn;
  nu = 1, Object.defineProperty(xn, "__esModule", {
    value: !0
  }), xn.default = void 0;
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
  }, r = e;
  return xn.default = r, xn;
}
var Mn = {}, au;
function pp() {
  if (au) return Mn;
  au = 1, Object.defineProperty(Mn, "__esModule", {
    value: !0
  }), Mn.default = void 0;
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
  }, r = e;
  return Mn.default = r, Mn;
}
var On = {}, ou;
function mp() {
  if (ou) return On;
  ou = 1, Object.defineProperty(On, "__esModule", {
    value: !0
  }), On.default = void 0;
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
  }, r = e;
  return On.default = r, On;
}
var Sn = {}, lu;
function vp() {
  if (lu) return Sn;
  lu = 1, Object.defineProperty(Sn, "__esModule", {
    value: !0
  }), Sn.default = void 0;
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
  }, r = e;
  return Sn.default = r, Sn;
}
var An = {}, iu;
function bp() {
  if (iu) return An;
  iu = 1, Object.defineProperty(An, "__esModule", {
    value: !0
  }), An.default = void 0;
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
  }, r = e;
  return An.default = r, An;
}
var In = {}, uu;
function hp() {
  if (uu) return In;
  uu = 1, Object.defineProperty(In, "__esModule", {
    value: !0
  }), In.default = void 0;
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
  }, r = e;
  return In.default = r, In;
}
var Dn = {}, su;
function yp() {
  if (su) return Dn;
  su = 1, Object.defineProperty(Dn, "__esModule", {
    value: !0
  }), Dn.default = void 0;
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
  }, r = e;
  return Dn.default = r, Dn;
}
var Nn = {}, cu;
function Rp() {
  if (cu) return Nn;
  cu = 1, Object.defineProperty(Nn, "__esModule", {
    value: !0
  }), Nn.default = void 0;
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
  }, r = e;
  return Nn.default = r, Nn;
}
var kn = {}, du;
function gp() {
  if (du) return kn;
  du = 1, Object.defineProperty(kn, "__esModule", {
    value: !0
  }), kn.default = void 0;
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
  }, r = e;
  return kn.default = r, kn;
}
var Ln = {}, fu;
function Ep() {
  if (fu) return Ln;
  fu = 1, Object.defineProperty(Ln, "__esModule", {
    value: !0
  }), Ln.default = void 0;
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
  }, r = e;
  return Ln.default = r, Ln;
}
var Bn = {}, pu;
function qp() {
  if (pu) return Bn;
  pu = 1, Object.defineProperty(Bn, "__esModule", {
    value: !0
  }), Bn.default = void 0;
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
  }, r = e;
  return Bn.default = r, Bn;
}
var Fn = {}, mu;
function Cp() {
  if (mu) return Fn;
  mu = 1, Object.defineProperty(Fn, "__esModule", {
    value: !0
  }), Fn.default = void 0;
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
  }, r = e;
  return Fn.default = r, Fn;
}
var jn = {}, vu;
function _p() {
  if (vu) return jn;
  vu = 1, Object.defineProperty(jn, "__esModule", {
    value: !0
  }), jn.default = void 0;
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
  }, r = e;
  return jn.default = r, jn;
}
var Un = {}, bu;
function wp() {
  if (bu) return Un;
  bu = 1, Object.defineProperty(Un, "__esModule", {
    value: !0
  }), Un.default = void 0;
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
  }, r = e;
  return Un.default = r, Un;
}
var $n = {}, hu;
function Pp() {
  if (hu) return $n;
  hu = 1, Object.defineProperty($n, "__esModule", {
    value: !0
  }), $n.default = void 0;
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
  }, r = e;
  return $n.default = r, $n;
}
var Hn = {}, yu;
function Tp() {
  if (yu) return Hn;
  yu = 1, Object.defineProperty(Hn, "__esModule", {
    value: !0
  }), Hn.default = void 0;
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
  }, r = e;
  return Hn.default = r, Hn;
}
var Wn = {}, Ru;
function xp() {
  if (Ru) return Wn;
  Ru = 1, Object.defineProperty(Wn, "__esModule", {
    value: !0
  }), Wn.default = void 0;
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
  }, r = e;
  return Wn.default = r, Wn;
}
var Vn = {}, gu;
function Mp() {
  if (gu) return Vn;
  gu = 1, Object.defineProperty(Vn, "__esModule", {
    value: !0
  }), Vn.default = void 0;
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
  }, r = e;
  return Vn.default = r, Vn;
}
var zn = {}, Eu;
function Op() {
  if (Eu) return zn;
  Eu = 1, Object.defineProperty(zn, "__esModule", {
    value: !0
  }), zn.default = void 0;
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
  }, r = e;
  return zn.default = r, zn;
}
var Gn = {}, qu;
function Sp() {
  if (qu) return Gn;
  qu = 1, Object.defineProperty(Gn, "__esModule", {
    value: !0
  }), Gn.default = void 0;
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
  }, r = e;
  return Gn.default = r, Gn;
}
var Yn = {}, Cu;
function Ap() {
  if (Cu) return Yn;
  Cu = 1, Object.defineProperty(Yn, "__esModule", {
    value: !0
  }), Yn.default = void 0;
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
  }, r = e;
  return Yn.default = r, Yn;
}
var Kn = {}, _u;
function Ip() {
  if (_u) return Kn;
  _u = 1, Object.defineProperty(Kn, "__esModule", {
    value: !0
  }), Kn.default = void 0;
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
  }, r = e;
  return Kn.default = r, Kn;
}
var Xn = {}, wu;
function Dp() {
  if (wu) return Xn;
  wu = 1, Object.defineProperty(Xn, "__esModule", {
    value: !0
  }), Xn.default = void 0;
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
  }, r = e;
  return Xn.default = r, Xn;
}
var Qn = {}, Pu;
function Np() {
  if (Pu) return Qn;
  Pu = 1, Object.defineProperty(Qn, "__esModule", {
    value: !0
  }), Qn.default = void 0;
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
  }, r = e;
  return Qn.default = r, Qn;
}
var Jn = {}, Tu;
function kp() {
  if (Tu) return Jn;
  Tu = 1, Object.defineProperty(Jn, "__esModule", {
    value: !0
  }), Jn.default = void 0;
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
  }, r = e;
  return Jn.default = r, Jn;
}
var Zn = {}, xu;
function Lp() {
  if (xu) return Zn;
  xu = 1, Object.defineProperty(Zn, "__esModule", {
    value: !0
  }), Zn.default = void 0;
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
  }, r = e;
  return Zn.default = r, Zn;
}
var ea = {}, Mu;
function Bp() {
  if (Mu) return ea;
  Mu = 1, Object.defineProperty(ea, "__esModule", {
    value: !0
  }), ea.default = void 0;
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
  }, r = e;
  return ea.default = r, ea;
}
var ra = {}, Ou;
function Fp() {
  if (Ou) return ra;
  Ou = 1, Object.defineProperty(ra, "__esModule", {
    value: !0
  }), ra.default = void 0;
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
  }, r = e;
  return ra.default = r, ra;
}
var ta = {}, Su;
function jp() {
  if (Su) return ta;
  Su = 1, Object.defineProperty(ta, "__esModule", {
    value: !0
  }), ta.default = void 0;
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
  }, r = e;
  return ta.default = r, ta;
}
var Au;
function Up() {
  if (Au) return hn;
  Au = 1, Object.defineProperty(hn, "__esModule", {
    value: !0
  }), hn.default = void 0;
  var e = $(tp()), r = $(np()), t = $(ap()), a = $(op()), s = $(lp()), c = $(ip()), f = $(up()), h = $(sp()), u = $(cp()), o = $(dp()), d = $(fp()), i = $(pp()), n = $(mp()), y = $(vp()), R = $(bp()), g = $(hp()), T = $(yp()), l = $(Rp()), C = $(gp()), _ = $(Ep()), P = $(qp()), w = $(Cp()), v = $(_p()), b = $(wp()), E = $(Pp()), A = $(Tp()), L = $(xp()), j = $(Mp()), F = $(Op()), O = $(Sp()), B = $(Ap()), K = $(Ip()), ee = $(Dp()), z = $(Np()), ue = $(kp()), pe = $(Lp()), qe = $(Bp()), Pe = $(Fp()), Te = $(jp());
  function $(ye) {
    return ye && ye.__esModule ? ye : { default: ye };
  }
  var Ee = [["doc-abstract", e.default], ["doc-acknowledgments", r.default], ["doc-afterword", t.default], ["doc-appendix", a.default], ["doc-backlink", s.default], ["doc-biblioentry", c.default], ["doc-bibliography", f.default], ["doc-biblioref", h.default], ["doc-chapter", u.default], ["doc-colophon", o.default], ["doc-conclusion", d.default], ["doc-cover", i.default], ["doc-credit", n.default], ["doc-credits", y.default], ["doc-dedication", R.default], ["doc-endnote", g.default], ["doc-endnotes", T.default], ["doc-epigraph", l.default], ["doc-epilogue", C.default], ["doc-errata", _.default], ["doc-example", P.default], ["doc-footnote", w.default], ["doc-foreword", v.default], ["doc-glossary", b.default], ["doc-glossref", E.default], ["doc-index", A.default], ["doc-introduction", L.default], ["doc-noteref", j.default], ["doc-notice", F.default], ["doc-pagebreak", O.default], ["doc-pagelist", B.default], ["doc-part", K.default], ["doc-preface", ee.default], ["doc-prologue", z.default], ["doc-pullquote", ue.default], ["doc-qna", pe.default], ["doc-subtitle", qe.default], ["doc-tip", Pe.default], ["doc-toc", Te.default]], me = Ee;
  return hn.default = me, hn;
}
var na = {}, aa = {}, Iu;
function $p() {
  if (Iu) return aa;
  Iu = 1, Object.defineProperty(aa, "__esModule", {
    value: !0
  }), aa.default = void 0;
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
  }, r = e;
  return aa.default = r, aa;
}
var oa = {}, Du;
function Hp() {
  if (Du) return oa;
  Du = 1, Object.defineProperty(oa, "__esModule", {
    value: !0
  }), oa.default = void 0;
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
  }, r = e;
  return oa.default = r, oa;
}
var la = {}, Nu;
function Wp() {
  if (Nu) return la;
  Nu = 1, Object.defineProperty(la, "__esModule", {
    value: !0
  }), la.default = void 0;
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
  }, r = e;
  return la.default = r, la;
}
var ku;
function Vp() {
  if (ku) return na;
  ku = 1, Object.defineProperty(na, "__esModule", {
    value: !0
  }), na.default = void 0;
  var e = a($p()), r = a(Hp()), t = a(Wp());
  function a(f) {
    return f && f.__esModule ? f : { default: f };
  }
  var s = [["graphics-document", e.default], ["graphics-object", r.default], ["graphics-symbol", t.default]], c = s;
  return na.default = c, na;
}
var Lu;
function uo() {
  if (Lu) return Pr;
  Lu = 1, Object.defineProperty(Pr, "__esModule", {
    value: !0
  }), Pr.default = void 0;
  var e = c(_d()), r = c(rp()), t = c(Up()), a = c(Vp()), s = c(pa());
  function c(l) {
    return l && l.__esModule ? l : { default: l };
  }
  function f(l, C, _) {
    return C in l ? Object.defineProperty(l, C, { value: _, enumerable: !0, configurable: !0, writable: !0 }) : l[C] = _, l;
  }
  function h(l, C) {
    var _ = typeof Symbol < "u" && l[Symbol.iterator] || l["@@iterator"];
    if (!_) {
      if (Array.isArray(l) || (_ = d(l)) || C) {
        _ && (l = _);
        var P = 0, w = function() {
        };
        return { s: w, n: function() {
          return P >= l.length ? { done: !0 } : { done: !1, value: l[P++] };
        }, e: function(L) {
          throw L;
        }, f: w };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var v = !0, b = !1, E;
    return { s: function() {
      _ = _.call(l);
    }, n: function() {
      var L = _.next();
      return v = L.done, L;
    }, e: function(L) {
      b = !0, E = L;
    }, f: function() {
      try {
        !v && _.return != null && _.return();
      } finally {
        if (b) throw E;
      }
    } };
  }
  function u(l, C) {
    return y(l) || n(l, C) || d(l, C) || o();
  }
  function o() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function d(l, C) {
    if (l) {
      if (typeof l == "string") return i(l, C);
      var _ = Object.prototype.toString.call(l).slice(8, -1);
      if (_ === "Object" && l.constructor && (_ = l.constructor.name), _ === "Map" || _ === "Set") return Array.from(l);
      if (_ === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_)) return i(l, C);
    }
  }
  function i(l, C) {
    (C == null || C > l.length) && (C = l.length);
    for (var _ = 0, P = new Array(C); _ < C; _++)
      P[_] = l[_];
    return P;
  }
  function n(l, C) {
    var _ = l == null ? null : typeof Symbol < "u" && l[Symbol.iterator] || l["@@iterator"];
    if (_ != null) {
      var P = [], w = !0, v = !1, b, E;
      try {
        for (_ = _.call(l); !(w = (b = _.next()).done) && (P.push(b.value), !(C && P.length === C)); w = !0)
          ;
      } catch (A) {
        v = !0, E = A;
      } finally {
        try {
          !w && _.return != null && _.return();
        } finally {
          if (v) throw E;
        }
      }
      return P;
    }
  }
  function y(l) {
    if (Array.isArray(l)) return l;
  }
  var R = [].concat(e.default, r.default, t.default, a.default);
  R.forEach(function(l) {
    var C = u(l, 2), _ = C[1], P = h(_.superClass), w;
    try {
      for (P.s(); !(w = P.n()).done; ) {
        var v = w.value, b = h(v), E;
        try {
          var A = function() {
            var j = E.value, F = R.find(function(z) {
              var ue = u(z, 1), pe = ue[0];
              return pe === j;
            });
            if (F)
              for (var O = F[1], B = 0, K = Object.keys(O.props); B < K.length; B++) {
                var ee = K[B];
                Object.prototype.hasOwnProperty.call(_.props, ee) || Object.assign(_.props, f({}, ee, O.props[ee]));
              }
          };
          for (b.s(); !(E = b.n()).done; )
            A();
        } catch (L) {
          b.e(L);
        } finally {
          b.f();
        }
      }
    } catch (L) {
      P.e(L);
    } finally {
      P.f();
    }
  });
  var g = {
    entries: function() {
      return R;
    },
    forEach: function(C) {
      var _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, P = h(R), w;
      try {
        for (P.s(); !(w = P.n()).done; ) {
          var v = u(w.value, 2), b = v[0], E = v[1];
          C.call(_, E, b, R);
        }
      } catch (A) {
        P.e(A);
      } finally {
        P.f();
      }
    },
    get: function(C) {
      var _ = R.find(function(P) {
        return P[0] === C;
      });
      return _ && _[1];
    },
    has: function(C) {
      return !!g.get(C);
    },
    keys: function() {
      return R.map(function(C) {
        var _ = u(C, 1), P = _[0];
        return P;
      });
    },
    values: function() {
      return R.map(function(C) {
        var _ = u(C, 2), P = _[1];
        return P;
      });
    }
  }, T = (0, s.default)(g, g.entries());
  return Pr.default = T, Pr;
}
var ia = {}, Ua = {}, Bu;
function zp() {
  if (Bu) return Ua;
  Bu = 1;
  var e = Object.prototype.hasOwnProperty;
  function r(t, a) {
    var s, c;
    if (t === a) return !0;
    if (t && a && (s = t.constructor) === a.constructor) {
      if (s === Date) return t.getTime() === a.getTime();
      if (s === RegExp) return t.toString() === a.toString();
      if (s === Array) {
        if ((c = t.length) === a.length)
          for (; c-- && r(t[c], a[c]); ) ;
        return c === -1;
      }
      if (!s || typeof t == "object") {
        c = 0;
        for (s in t)
          if (e.call(t, s) && ++c && !e.call(a, s) || !(s in a) || !r(t[s], a[s])) return !1;
        return Object.keys(a).length === c;
      }
    }
    return t !== t && a !== a;
  }
  return Ua.dequal = r, Ua;
}
var Fu;
function Gp() {
  if (Fu) return ia;
  Fu = 1, Object.defineProperty(ia, "__esModule", {
    value: !0
  }), ia.default = void 0;
  var e = zp(), r = a(pa()), t = a(uo());
  function a(w) {
    return w && w.__esModule ? w : { default: w };
  }
  function s(w, v) {
    return h(w) || f(w, v) || o(w, v) || c();
  }
  function c() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function f(w, v) {
    var b = w == null ? null : typeof Symbol < "u" && w[Symbol.iterator] || w["@@iterator"];
    if (b != null) {
      var E = [], A = !0, L = !1, j, F;
      try {
        for (b = b.call(w); !(A = (j = b.next()).done) && (E.push(j.value), !(v && E.length === v)); A = !0)
          ;
      } catch (O) {
        L = !0, F = O;
      } finally {
        try {
          !A && b.return != null && b.return();
        } finally {
          if (L) throw F;
        }
      }
      return E;
    }
  }
  function h(w) {
    if (Array.isArray(w)) return w;
  }
  function u(w, v) {
    var b = typeof Symbol < "u" && w[Symbol.iterator] || w["@@iterator"];
    if (!b) {
      if (Array.isArray(w) || (b = o(w)) || v) {
        b && (w = b);
        var E = 0, A = function() {
        };
        return { s: A, n: function() {
          return E >= w.length ? { done: !0 } : { done: !1, value: w[E++] };
        }, e: function(B) {
          throw B;
        }, f: A };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var L = !0, j = !1, F;
    return { s: function() {
      b = b.call(w);
    }, n: function() {
      var B = b.next();
      return L = B.done, B;
    }, e: function(B) {
      j = !0, F = B;
    }, f: function() {
      try {
        !L && b.return != null && b.return();
      } finally {
        if (j) throw F;
      }
    } };
  }
  function o(w, v) {
    if (w) {
      if (typeof w == "string") return d(w, v);
      var b = Object.prototype.toString.call(w).slice(8, -1);
      if (b === "Object" && w.constructor && (b = w.constructor.name), b === "Map" || b === "Set") return Array.from(w);
      if (b === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b)) return d(w, v);
    }
  }
  function d(w, v) {
    (v == null || v > w.length) && (v = w.length);
    for (var b = 0, E = new Array(v); b < v; b++)
      E[b] = w[b];
    return E;
  }
  for (var i = [], n = t.default.keys(), y = 0; y < n.length; y++) {
    var R = n[y], g = t.default.get(R);
    if (g)
      for (var T = [].concat(g.baseConcepts, g.relatedConcepts), l = 0; l < T.length; l++) {
        var C = T[l];
        C.module === "HTML" && function() {
          var w = C.concept;
          if (w) {
            var v = i.find(function(L) {
              return (0, e.dequal)(L, w);
            }), b;
            v ? b = v[1] : b = [];
            for (var E = !0, A = 0; A < b.length; A++)
              if (b[A] === R) {
                E = !1;
                break;
              }
            E && b.push(R), i.push([w, b]);
          }
        }();
      }
  }
  var _ = {
    entries: function() {
      return i;
    },
    forEach: function(v) {
      var b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, E = u(i), A;
      try {
        for (E.s(); !(A = E.n()).done; ) {
          var L = s(A.value, 2), j = L[0], F = L[1];
          v.call(b, F, j, i);
        }
      } catch (O) {
        E.e(O);
      } finally {
        E.f();
      }
    },
    get: function(v) {
      var b = i.find(function(E) {
        return v.name === E[0].name && (0, e.dequal)(v.attributes, E[0].attributes);
      });
      return b && b[1];
    },
    has: function(v) {
      return !!_.get(v);
    },
    keys: function() {
      return i.map(function(v) {
        var b = s(v, 1), E = b[0];
        return E;
      });
    },
    values: function() {
      return i.map(function(v) {
        var b = s(v, 2), E = b[1];
        return E;
      });
    }
  }, P = (0, r.default)(_, _.entries());
  return ia.default = P, ia;
}
var ua = {}, ju;
function Yp() {
  if (ju) return ua;
  ju = 1, Object.defineProperty(ua, "__esModule", {
    value: !0
  }), ua.default = void 0;
  var e = t(pa()), r = t(uo());
  function t(v) {
    return v && v.__esModule ? v : { default: v };
  }
  function a(v, b) {
    return f(v) || c(v, b) || u(v, b) || s();
  }
  function s() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function c(v, b) {
    var E = v == null ? null : typeof Symbol < "u" && v[Symbol.iterator] || v["@@iterator"];
    if (E != null) {
      var A = [], L = !0, j = !1, F, O;
      try {
        for (E = E.call(v); !(L = (F = E.next()).done) && (A.push(F.value), !(b && A.length === b)); L = !0)
          ;
      } catch (B) {
        j = !0, O = B;
      } finally {
        try {
          !L && E.return != null && E.return();
        } finally {
          if (j) throw O;
        }
      }
      return A;
    }
  }
  function f(v) {
    if (Array.isArray(v)) return v;
  }
  function h(v, b) {
    var E = typeof Symbol < "u" && v[Symbol.iterator] || v["@@iterator"];
    if (!E) {
      if (Array.isArray(v) || (E = u(v)) || b) {
        E && (v = E);
        var A = 0, L = function() {
        };
        return { s: L, n: function() {
          return A >= v.length ? { done: !0 } : { done: !1, value: v[A++] };
        }, e: function(K) {
          throw K;
        }, f: L };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var j = !0, F = !1, O;
    return { s: function() {
      E = E.call(v);
    }, n: function() {
      var K = E.next();
      return j = K.done, K;
    }, e: function(K) {
      F = !0, O = K;
    }, f: function() {
      try {
        !j && E.return != null && E.return();
      } finally {
        if (F) throw O;
      }
    } };
  }
  function u(v, b) {
    if (v) {
      if (typeof v == "string") return o(v, b);
      var E = Object.prototype.toString.call(v).slice(8, -1);
      if (E === "Object" && v.constructor && (E = v.constructor.name), E === "Map" || E === "Set") return Array.from(v);
      if (E === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(E)) return o(v, b);
    }
  }
  function o(v, b) {
    (b == null || b > v.length) && (b = v.length);
    for (var E = 0, A = new Array(b); E < b; E++)
      A[E] = v[E];
    return A;
  }
  for (var d = [], i = r.default.keys(), n = 0; n < i.length; n++) {
    var y = i[n], R = r.default.get(y), g = [];
    if (R) {
      for (var T = [].concat(R.baseConcepts, R.relatedConcepts), l = 0; l < T.length; l++) {
        var C = T[l];
        if (C.module === "HTML") {
          var _ = C.concept;
          _ != null && g.push(_);
        }
      }
      g.length > 0 && d.push([y, g]);
    }
  }
  var P = {
    entries: function() {
      return d;
    },
    forEach: function(b) {
      var E = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, A = h(d), L;
      try {
        for (A.s(); !(L = A.n()).done; ) {
          var j = a(L.value, 2), F = j[0], O = j[1];
          b.call(E, O, F, d);
        }
      } catch (B) {
        A.e(B);
      } finally {
        A.f();
      }
    },
    get: function(b) {
      var E = d.find(function(A) {
        return A[0] === b;
      });
      return E && E[1];
    },
    has: function(b) {
      return !!P.get(b);
    },
    keys: function() {
      return d.map(function(b) {
        var E = a(b, 1), A = E[0];
        return A;
      });
    },
    values: function() {
      return d.map(function(b) {
        var E = a(b, 2), A = E[1];
        return A;
      });
    }
  }, w = (0, e.default)(P, P.entries());
  return ua.default = w, ua;
}
var Uu;
function Kp() {
  if (Uu) return we;
  Uu = 1, Object.defineProperty(we, "__esModule", {
    value: !0
  }), we.roles = we.roleElements = we.elementRoles = we.dom = we.aria = void 0;
  var e = c(cd()), r = c(dd()), t = c(uo()), a = c(Gp()), s = c(Yp());
  function c(i) {
    return i && i.__esModule ? i : { default: i };
  }
  var f = e.default;
  we.aria = f;
  var h = r.default;
  we.dom = h;
  var u = t.default;
  we.roles = u;
  var o = a.default;
  we.elementRoles = o;
  var d = s.default;
  return we.roleElements = d, we;
}
var Oe = Kp(), $a = { exports: {} }, $u;
function Xp() {
  return $u || ($u = 1, function(e) {
    var r = function() {
      var t = String.fromCharCode, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$", c = {};
      function f(u, o) {
        if (!c[u]) {
          c[u] = {};
          for (var d = 0; d < u.length; d++)
            c[u][u.charAt(d)] = d;
        }
        return c[u][o];
      }
      var h = {
        compressToBase64: function(u) {
          if (u == null) return "";
          var o = h._compress(u, 6, function(d) {
            return a.charAt(d);
          });
          switch (o.length % 4) {
            // To produce valid Base64
            default:
            // When could this happen ?
            case 0:
              return o;
            case 1:
              return o + "===";
            case 2:
              return o + "==";
            case 3:
              return o + "=";
          }
        },
        decompressFromBase64: function(u) {
          return u == null ? "" : u == "" ? null : h._decompress(u.length, 32, function(o) {
            return f(a, u.charAt(o));
          });
        },
        compressToUTF16: function(u) {
          return u == null ? "" : h._compress(u, 15, function(o) {
            return t(o + 32);
          }) + " ";
        },
        decompressFromUTF16: function(u) {
          return u == null ? "" : u == "" ? null : h._decompress(u.length, 16384, function(o) {
            return u.charCodeAt(o) - 32;
          });
        },
        //compress into uint8array (UCS-2 big endian format)
        compressToUint8Array: function(u) {
          for (var o = h.compress(u), d = new Uint8Array(o.length * 2), i = 0, n = o.length; i < n; i++) {
            var y = o.charCodeAt(i);
            d[i * 2] = y >>> 8, d[i * 2 + 1] = y % 256;
          }
          return d;
        },
        //decompress from uint8array (UCS-2 big endian format)
        decompressFromUint8Array: function(u) {
          if (u == null)
            return h.decompress(u);
          for (var o = new Array(u.length / 2), d = 0, i = o.length; d < i; d++)
            o[d] = u[d * 2] * 256 + u[d * 2 + 1];
          var n = [];
          return o.forEach(function(y) {
            n.push(t(y));
          }), h.decompress(n.join(""));
        },
        //compress into a string that is already URI encoded
        compressToEncodedURIComponent: function(u) {
          return u == null ? "" : h._compress(u, 6, function(o) {
            return s.charAt(o);
          });
        },
        //decompress from an output of compressToEncodedURIComponent
        decompressFromEncodedURIComponent: function(u) {
          return u == null ? "" : u == "" ? null : (u = u.replace(/ /g, "+"), h._decompress(u.length, 32, function(o) {
            return f(s, u.charAt(o));
          }));
        },
        compress: function(u) {
          return h._compress(u, 16, function(o) {
            return t(o);
          });
        },
        _compress: function(u, o, d) {
          if (u == null) return "";
          var i, n, y = {}, R = {}, g = "", T = "", l = "", C = 2, _ = 3, P = 2, w = [], v = 0, b = 0, E;
          for (E = 0; E < u.length; E += 1)
            if (g = u.charAt(E), Object.prototype.hasOwnProperty.call(y, g) || (y[g] = _++, R[g] = !0), T = l + g, Object.prototype.hasOwnProperty.call(y, T))
              l = T;
            else {
              if (Object.prototype.hasOwnProperty.call(R, l)) {
                if (l.charCodeAt(0) < 256) {
                  for (i = 0; i < P; i++)
                    v = v << 1, b == o - 1 ? (b = 0, w.push(d(v)), v = 0) : b++;
                  for (n = l.charCodeAt(0), i = 0; i < 8; i++)
                    v = v << 1 | n & 1, b == o - 1 ? (b = 0, w.push(d(v)), v = 0) : b++, n = n >> 1;
                } else {
                  for (n = 1, i = 0; i < P; i++)
                    v = v << 1 | n, b == o - 1 ? (b = 0, w.push(d(v)), v = 0) : b++, n = 0;
                  for (n = l.charCodeAt(0), i = 0; i < 16; i++)
                    v = v << 1 | n & 1, b == o - 1 ? (b = 0, w.push(d(v)), v = 0) : b++, n = n >> 1;
                }
                C--, C == 0 && (C = Math.pow(2, P), P++), delete R[l];
              } else
                for (n = y[l], i = 0; i < P; i++)
                  v = v << 1 | n & 1, b == o - 1 ? (b = 0, w.push(d(v)), v = 0) : b++, n = n >> 1;
              C--, C == 0 && (C = Math.pow(2, P), P++), y[T] = _++, l = String(g);
            }
          if (l !== "") {
            if (Object.prototype.hasOwnProperty.call(R, l)) {
              if (l.charCodeAt(0) < 256) {
                for (i = 0; i < P; i++)
                  v = v << 1, b == o - 1 ? (b = 0, w.push(d(v)), v = 0) : b++;
                for (n = l.charCodeAt(0), i = 0; i < 8; i++)
                  v = v << 1 | n & 1, b == o - 1 ? (b = 0, w.push(d(v)), v = 0) : b++, n = n >> 1;
              } else {
                for (n = 1, i = 0; i < P; i++)
                  v = v << 1 | n, b == o - 1 ? (b = 0, w.push(d(v)), v = 0) : b++, n = 0;
                for (n = l.charCodeAt(0), i = 0; i < 16; i++)
                  v = v << 1 | n & 1, b == o - 1 ? (b = 0, w.push(d(v)), v = 0) : b++, n = n >> 1;
              }
              C--, C == 0 && (C = Math.pow(2, P), P++), delete R[l];
            } else
              for (n = y[l], i = 0; i < P; i++)
                v = v << 1 | n & 1, b == o - 1 ? (b = 0, w.push(d(v)), v = 0) : b++, n = n >> 1;
            C--, C == 0 && (C = Math.pow(2, P), P++);
          }
          for (n = 2, i = 0; i < P; i++)
            v = v << 1 | n & 1, b == o - 1 ? (b = 0, w.push(d(v)), v = 0) : b++, n = n >> 1;
          for (; ; )
            if (v = v << 1, b == o - 1) {
              w.push(d(v));
              break;
            } else b++;
          return w.join("");
        },
        decompress: function(u) {
          return u == null ? "" : u == "" ? null : h._decompress(u.length, 32768, function(o) {
            return u.charCodeAt(o);
          });
        },
        _decompress: function(u, o, d) {
          var i = [], n = 4, y = 4, R = 3, g = "", T = [], l, C, _, P, w, v, b, E = { val: d(0), position: o, index: 1 };
          for (l = 0; l < 3; l += 1)
            i[l] = l;
          for (_ = 0, w = Math.pow(2, 2), v = 1; v != w; )
            P = E.val & E.position, E.position >>= 1, E.position == 0 && (E.position = o, E.val = d(E.index++)), _ |= (P > 0 ? 1 : 0) * v, v <<= 1;
          switch (_) {
            case 0:
              for (_ = 0, w = Math.pow(2, 8), v = 1; v != w; )
                P = E.val & E.position, E.position >>= 1, E.position == 0 && (E.position = o, E.val = d(E.index++)), _ |= (P > 0 ? 1 : 0) * v, v <<= 1;
              b = t(_);
              break;
            case 1:
              for (_ = 0, w = Math.pow(2, 16), v = 1; v != w; )
                P = E.val & E.position, E.position >>= 1, E.position == 0 && (E.position = o, E.val = d(E.index++)), _ |= (P > 0 ? 1 : 0) * v, v <<= 1;
              b = t(_);
              break;
            case 2:
              return "";
          }
          for (i[3] = b, C = b, T.push(b); ; ) {
            if (E.index > u)
              return "";
            for (_ = 0, w = Math.pow(2, R), v = 1; v != w; )
              P = E.val & E.position, E.position >>= 1, E.position == 0 && (E.position = o, E.val = d(E.index++)), _ |= (P > 0 ? 1 : 0) * v, v <<= 1;
            switch (b = _) {
              case 0:
                for (_ = 0, w = Math.pow(2, 8), v = 1; v != w; )
                  P = E.val & E.position, E.position >>= 1, E.position == 0 && (E.position = o, E.val = d(E.index++)), _ |= (P > 0 ? 1 : 0) * v, v <<= 1;
                i[y++] = t(_), b = y - 1, n--;
                break;
              case 1:
                for (_ = 0, w = Math.pow(2, 16), v = 1; v != w; )
                  P = E.val & E.position, E.position >>= 1, E.position == 0 && (E.position = o, E.val = d(E.index++)), _ |= (P > 0 ? 1 : 0) * v, v <<= 1;
                i[y++] = t(_), b = y - 1, n--;
                break;
              case 2:
                return T.join("");
            }
            if (n == 0 && (n = Math.pow(2, R), R++), i[b])
              g = i[b];
            else if (b === y)
              g = C + C.charAt(0);
            else
              return null;
            T.push(g), i[y++] = C + g.charAt(0), n--, C = g, n == 0 && (n = Math.pow(2, R), R++);
          }
        }
      };
      return h;
    }();
    e != null ? e.exports = r : typeof angular < "u" && angular != null && angular.module("LZString", []).factory("LZString", function() {
      return r;
    });
  }($a)), $a.exports;
}
var Qp = Xp();
const Jp = /* @__PURE__ */ Zs(Qp);
function us(e) {
  return e.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
const Zp = (e, r, t, a, s, c, f) => {
  const h = a + t.indent, u = t.colors;
  return e.map((o) => {
    const d = r[o];
    let i = f(d, t, h, s, c);
    return typeof d != "string" && (i.indexOf(`
`) !== -1 && (i = t.spacingOuter + h + i + t.spacingOuter + a), i = "{" + i + "}"), t.spacingInner + a + u.prop.open + o + u.prop.close + "=" + u.value.open + i + u.value.close;
  }).join("");
}, em = 3, rm = (e, r, t, a, s, c) => e.map((f) => {
  const h = typeof f == "string" ? ss(f, r) : c(f, r, t, a, s);
  return h === "" && typeof f == "object" && f !== null && f.nodeType !== em ? "" : r.spacingOuter + t + h;
}).join(""), ss = (e, r) => {
  const t = r.colors.content;
  return t.open + us(e) + t.close;
}, tm = (e, r) => {
  const t = r.colors.comment;
  return t.open + "<!--" + us(e) + "-->" + t.close;
}, nm = (e, r, t, a, s) => {
  const c = a.colors.tag;
  return c.open + "<" + e + (r && c.close + r + a.spacingOuter + s + c.open) + (t ? ">" + c.close + t + a.spacingOuter + s + c.open + "</" + e : (r && !a.min ? "" : " ") + "/") + ">" + c.close;
}, am = (e, r) => {
  const t = r.colors.tag;
  return t.open + "<" + e + t.close + " …" + t.open + " />" + t.close;
}, om = 1, cs = 3, ds = 8, fs = 11, lm = /^((HTML|SVG)\w*)?Element$/, ps = (e) => {
  const {
    tagName: r
  } = e;
  return !!(typeof r == "string" && r.includes("-") || typeof e.hasAttribute == "function" && e.hasAttribute("is"));
}, im = (e) => {
  const r = e.constructor.name, {
    nodeType: t
  } = e;
  return t === om && (lm.test(r) || ps(e)) || t === cs && r === "Text" || t === ds && r === "Comment" || t === fs && r === "DocumentFragment";
};
function um(e) {
  return e.nodeType === cs;
}
function sm(e) {
  return e.nodeType === ds;
}
function Ha(e) {
  return e.nodeType === fs;
}
function cm(e) {
  return {
    test: (r) => {
      var t;
      return ((r == null || (t = r.constructor) == null ? void 0 : t.name) || ps(r)) && im(r);
    },
    serialize: (r, t, a, s, c, f) => {
      if (um(r))
        return ss(r.data, t);
      if (sm(r))
        return tm(r.data, t);
      const h = Ha(r) ? "DocumentFragment" : r.tagName.toLowerCase();
      return ++s > t.maxDepth ? am(h, t) : nm(h, Zp(Ha(r) ? [] : Array.from(r.attributes).map((u) => u.name).sort(), Ha(r) ? {} : Array.from(r.attributes).reduce((u, o) => (u[o.name] = o.value, u), {}), t, a + t.indent, s, c, f), rm(Array.prototype.slice.call(r.childNodes || r.children).filter(e), t, a + t.indent, s, c, f), t, a);
    }
  };
}
let ms = null, so = null, co = null;
try {
  const e = module && module.require;
  so = e.call(module, "fs").readFileSync, co = e.call(module, "@babel/code-frame").codeFrameColumns, ms = e.call(module, "chalk");
} catch {
}
function dm(e) {
  const r = e.indexOf("(") + 1, t = e.indexOf(")"), a = e.slice(r, t), s = a.split(":"), [c, f, h] = [s[0], parseInt(s[1], 10), parseInt(s[2], 10)];
  let u = "";
  try {
    u = so(c, "utf-8");
  } catch {
    return "";
  }
  const o = co(u, {
    start: {
      line: f,
      column: h
    }
  }, {
    highlightCode: !0,
    linesBelow: 0
  });
  return ms.dim(a) + `
` + o + `
`;
}
function fm() {
  if (!so || !co)
    return "";
  const r = new Error().stack.split(`
`).slice(1).find((t) => !t.includes("node_modules/"));
  return dm(r);
}
const vs = 3;
function Wa() {
  return typeof jest < "u" && jest !== null ? (
    // legacy timers
    setTimeout._isMockFunction === !0 || // modern timers
    // eslint-disable-next-line prefer-object-has-own -- not supported by our support matrix
    Object.prototype.hasOwnProperty.call(setTimeout, "clock")
  ) : !1;
}
function fo() {
  if (typeof window > "u")
    throw new Error("Could not find default container");
  return window.document;
}
function bs(e) {
  if (e.defaultView)
    return e.defaultView;
  if (e.ownerDocument && e.ownerDocument.defaultView)
    return e.ownerDocument.defaultView;
  if (e.window)
    return e.window;
  throw e.ownerDocument && e.ownerDocument.defaultView === null ? new Error("It looks like the window object is not available for the provided node.") : e.then instanceof Function ? new Error("It looks like you passed a Promise object instead of a DOM node. Did you do something like `fireEvent.click(screen.findBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`, or await the findBy query `fireEvent.click(await screen.findBy...`?") : Array.isArray(e) ? new Error("It looks like you passed an Array instead of a DOM node. Did you do something like `fireEvent.click(screen.getAllBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`?") : typeof e.debug == "function" && typeof e.logTestingPlaygroundURL == "function" ? new Error("It looks like you passed a `screen` object. Did you do something like `fireEvent.click(screen, ...` when you meant to use a query, e.g. `fireEvent.click(screen.getBy..., `?") : new Error("The given node is not an Element, the node type is: " + typeof e + ".");
}
function Ye(e) {
  if (!e || typeof e.querySelector != "function" || typeof e.querySelectorAll != "function")
    throw new TypeError("Expected container to be an Element, a Document or a DocumentFragment but got " + r(e) + ".");
  function r(t) {
    return typeof t == "object" ? t === null ? "null" : t.constructor.name : typeof t;
  }
}
const pm = () => {
  if (typeof process > "u")
    return !1;
  let e;
  try {
    var r;
    const t = (r = process.env) == null ? void 0 : r.COLORS;
    t && (e = JSON.parse(t));
  } catch {
  }
  return typeof e == "boolean" ? e : process.versions !== void 0 && process.versions.node !== void 0;
}, {
  DOMCollection: mm
} = Zu.plugins, vm = 1, bm = 8;
function hm(e) {
  return e.nodeType !== bm && (e.nodeType !== vm || !e.matches(ae().defaultIgnore));
}
function br(e, r, t) {
  if (t === void 0 && (t = {}), e || (e = fo().body), typeof r != "number" && (r = typeof process < "u" && typeof process.env < "u" && process.env.DEBUG_PRINT_LIMIT || 7e3), r === 0)
    return "";
  e.documentElement && (e = e.documentElement);
  let a = typeof e;
  if (a === "object" ? a = e.constructor.name : e = {}, !("outerHTML" in e))
    throw new TypeError("Expected an element or document but got " + a);
  const {
    filterNode: s = hm,
    ...c
  } = t, f = Zu.format(e, {
    plugins: [cm(s), mm],
    printFunctionName: !1,
    highlight: pm(),
    ...c
  });
  return r !== void 0 && e.outerHTML.length > r ? f.slice(0, r) + "..." : f;
}
const Hu = function() {
  const e = fm();
  console.log(e ? br(...arguments) + `

` + e : br(...arguments));
};
let tr = {
  testIdAttribute: "data-testid",
  asyncUtilTimeout: 1e3,
  // asyncWrapper and advanceTimersWrapper is to support React's async `act` function.
  // forcing react-testing-library to wrap all async functions would've been
  // a total nightmare (consider wrapping every findBy* query and then also
  // updating `within` so those would be wrapped too. Total nightmare).
  // so we have this config option that's really only intended for
  // react-testing-library to use. For that reason, this feature will remain
  // undocumented.
  asyncWrapper: (e) => e(),
  unstable_advanceTimersWrapper: (e) => e(),
  eventWrapper: (e) => e(),
  // default value for the `hidden` option in `ByRole` queries
  defaultHidden: !1,
  // default value for the `ignore` option in `ByText` queries
  defaultIgnore: "script, style",
  // showOriginalStackTrace flag to show the full error stack traces for async errors
  showOriginalStackTrace: !1,
  // throw errors w/ suggestions for better queries. Opt in so off by default.
  throwSuggestions: !1,
  // called when getBy* queries fail. (message, container) => Error
  getElementError(e, r) {
    const t = br(r), a = new Error([e, "Ignored nodes: comments, " + tr.defaultIgnore + `
` + t].filter(Boolean).join(`

`));
    return a.name = "TestingLibraryElementError", a;
  },
  _disableExpensiveErrorDiagnostics: !1,
  computedStyleSupportsPseudoElements: !1
};
function ym(e) {
  try {
    return tr._disableExpensiveErrorDiagnostics = !0, e();
  } finally {
    tr._disableExpensiveErrorDiagnostics = !1;
  }
}
function Rm(e) {
  typeof e == "function" && (e = e(tr)), tr = {
    ...tr,
    ...e
  };
}
function ae() {
  return tr;
}
const gm = ["button", "meter", "output", "progress", "select", "textarea", "input"];
function hs(e) {
  return gm.includes(e.nodeName.toLowerCase()) ? "" : e.nodeType === vs ? e.textContent : Array.from(e.childNodes).map((r) => hs(r)).join("");
}
function za(e) {
  let r;
  return e.tagName.toLowerCase() === "label" ? r = hs(e) : r = e.value || e.textContent, r;
}
function ys(e) {
  if (e.labels !== void 0) {
    var r;
    return (r = e.labels) != null ? r : [];
  }
  if (!Em(e)) return [];
  const t = e.ownerDocument.querySelectorAll("label");
  return Array.from(t).filter((a) => a.control === e);
}
function Em(e) {
  return /BUTTON|METER|OUTPUT|PROGRESS|SELECT|TEXTAREA/.test(e.tagName) || e.tagName === "INPUT" && e.getAttribute("type") !== "hidden";
}
function Rs(e, r, t) {
  let {
    selector: a = "*"
  } = t === void 0 ? {} : t;
  const s = r.getAttribute("aria-labelledby"), c = s ? s.split(" ") : [];
  return c.length ? c.map((f) => {
    const h = e.querySelector('[id="' + f + '"]');
    return h ? {
      content: za(h),
      formControl: null
    } : {
      content: "",
      formControl: null
    };
  }) : Array.from(ys(r)).map((f) => {
    const h = za(f), o = Array.from(f.querySelectorAll("button, input, meter, output, progress, select, textarea")).filter((d) => d.matches(a))[0];
    return {
      content: h,
      formControl: o
    };
  });
}
function gs(e) {
  if (e == null)
    throw new Error(
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions -- implicitly converting `T` to `string`
      "It looks like " + e + " was passed instead of a matcher. Did you do something like getByText(" + e + ")?"
    );
}
function yr(e, r, t, a) {
  if (typeof e != "string")
    return !1;
  gs(t);
  const s = a(e);
  return typeof t == "string" || typeof t == "number" ? s.toLowerCase().includes(t.toString().toLowerCase()) : typeof t == "function" ? t(s, r) : qs(t, s);
}
function Ge(e, r, t, a) {
  if (typeof e != "string")
    return !1;
  gs(t);
  const s = a(e);
  return t instanceof Function ? t(s, r) : t instanceof RegExp ? qs(t, s) : s === String(t);
}
function Es(e) {
  let {
    trim: r = !0,
    collapseWhitespace: t = !0
  } = e === void 0 ? {} : e;
  return (a) => {
    let s = a;
    return s = r ? s.trim() : s, s = t ? s.replace(/\s+/g, " ") : s, s;
  };
}
function or(e) {
  let {
    trim: r,
    collapseWhitespace: t,
    normalizer: a
  } = e;
  if (!a)
    return Es({
      trim: r,
      collapseWhitespace: t
    });
  if (typeof r < "u" || typeof t < "u")
    throw new Error('trim and collapseWhitespace are not supported with a normalizer. If you want to use the default trim and collapseWhitespace logic in your normalizer, use "getDefaultNormalizer({trim, collapseWhitespace})" and compose that into your normalizer');
  return a;
}
function qs(e, r) {
  const t = e.test(r);
  return e.global && e.lastIndex !== 0 && (console.warn("To match all elements we had to reset the lastIndex of the RegExp because the global flag is enabled. We encourage to remove the global flag from the RegExp."), e.lastIndex = 0), t;
}
function Aa(e) {
  return e.matches("input[type=submit], input[type=button], input[type=reset]") ? e.value : Array.from(e.childNodes).filter((r) => r.nodeType === vs && !!r.textContent).map((r) => r.textContent).join("");
}
const qm = Cm(Oe.elementRoles);
function Cs(e) {
  return e.hidden === !0 || e.getAttribute("aria-hidden") === "true" || e.ownerDocument.defaultView.getComputedStyle(e).display === "none";
}
function po(e, r) {
  r === void 0 && (r = {});
  const {
    isSubtreeInaccessible: t = Cs
  } = r;
  if (e.ownerDocument.defaultView.getComputedStyle(e).visibility === "hidden")
    return !0;
  let s = e;
  for (; s; ) {
    if (t(s))
      return !0;
    s = s.parentElement;
  }
  return !1;
}
function mo(e) {
  for (const {
    match: r,
    roles: t
  } of qm)
    if (r(e))
      return [...t];
  return [];
}
function Cm(e) {
  function r(f) {
    let {
      name: h,
      attributes: u
    } = f;
    return "" + h + u.map((o) => {
      let {
        name: d,
        value: i,
        constraints: n = []
      } = o;
      const y = n.indexOf("undefined") !== -1, R = n.indexOf("set") !== -1;
      return typeof i < "u" ? "[" + d + '="' + i + '"]' : y ? ":not([" + d + "])" : R ? "[" + d + "]:not([" + d + '=""])' : "[" + d + "]";
    }).join("");
  }
  function t(f) {
    let {
      attributes: h = []
    } = f;
    return h.length;
  }
  function a(f, h) {
    let {
      specificity: u
    } = f, {
      specificity: o
    } = h;
    return o - u;
  }
  function s(f) {
    let {
      attributes: h = []
    } = f;
    const u = h.findIndex((d) => d.value && d.name === "type" && d.value === "text");
    u >= 0 && (h = [...h.slice(0, u), ...h.slice(u + 1)]);
    const o = r({
      ...f,
      attributes: h
    });
    return (d) => u >= 0 && d.type !== "text" ? !1 : d.matches(o);
  }
  let c = [];
  for (const [f, h] of e.entries())
    c = [...c, {
      match: s(f),
      roles: Array.from(h),
      specificity: t(f)
    }];
  return c.sort(a);
}
function _m(e, r) {
  let {
    hidden: t = !1
  } = r === void 0 ? {} : r;
  function a(s) {
    return [s, ...Array.from(s.children).reduce((c, f) => [...c, ...a(f)], [])];
  }
  return a(e).filter((s) => t === !1 ? po(s) === !1 : !0).reduce((s, c) => {
    let f = [];
    return c.hasAttribute("role") ? f = c.getAttribute("role").split(" ").slice(0, 1) : f = mo(c), f.reduce((h, u) => Array.isArray(h[u]) ? {
      ...h,
      [u]: [...h[u], c]
    } : {
      ...h,
      [u]: [c]
    }, s);
  }, {});
}
function wm(e, r) {
  let {
    hidden: t,
    includeDescription: a
  } = r;
  const s = _m(e, {
    hidden: t
  });
  return Object.entries(s).filter((c) => {
    let [f] = c;
    return f !== "generic";
  }).map((c) => {
    let [f, h] = c;
    const u = "-".repeat(50), o = h.map((d) => {
      const i = 'Name "' + io(d, {
        computedStyleSupportsPseudoElements: ae().computedStyleSupportsPseudoElements
      }) + `":
`, n = br(d.cloneNode(!1));
      if (a) {
        const y = 'Description "' + is(d, {
          computedStyleSupportsPseudoElements: ae().computedStyleSupportsPseudoElements
        }) + `":
`;
        return "" + i + y + n;
      }
      return "" + i + n;
    }).join(`

`);
    return f + `:

` + o + `

` + u;
  }).join(`
`);
}
function Pm(e) {
  return e.tagName === "OPTION" ? e.selected : ma(e, "aria-selected");
}
function Tm(e) {
  return e.getAttribute("aria-busy") === "true";
}
function xm(e) {
  if (!("indeterminate" in e && e.indeterminate))
    return "checked" in e ? e.checked : ma(e, "aria-checked");
}
function Mm(e) {
  return ma(e, "aria-pressed");
}
function Om(e) {
  var r, t;
  return (r = (t = ma(e, "aria-current")) != null ? t : e.getAttribute("aria-current")) != null ? r : !1;
}
function Sm(e) {
  return ma(e, "aria-expanded");
}
function ma(e, r) {
  const t = e.getAttribute(r);
  if (t === "true")
    return !0;
  if (t === "false")
    return !1;
}
function Am(e) {
  const r = {
    H1: 1,
    H2: 2,
    H3: 3,
    H4: 4,
    H5: 5,
    H6: 6
  };
  return e.getAttribute("aria-level") && Number(e.getAttribute("aria-level")) || r[e.tagName];
}
function Im(e) {
  const r = e.getAttribute("aria-valuenow");
  return r === null ? void 0 : +r;
}
function Dm(e) {
  const r = e.getAttribute("aria-valuemax");
  return r === null ? void 0 : +r;
}
function Nm(e) {
  const r = e.getAttribute("aria-valuemin");
  return r === null ? void 0 : +r;
}
function km(e) {
  const r = e.getAttribute("aria-valuetext");
  return r === null ? void 0 : r;
}
const Wu = Es();
function Lm(e) {
  return e.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&");
}
function Vu(e) {
  return new RegExp(Lm(e.toLowerCase()), "i");
}
function Qe(e, r, t, a) {
  let {
    variant: s,
    name: c
  } = a, f = "";
  const h = {}, u = [["Role", "TestId"].includes(e) ? t : Vu(t)];
  c && (h.name = Vu(c)), e === "Role" && po(r) && (h.hidden = !0, f = `Element is inaccessible. This means that the element and all its children are invisible to screen readers.
    If you are using the aria-hidden prop, make sure this is the right choice for your case.
    `), Object.keys(h).length > 0 && u.push(h);
  const o = s + "By" + e;
  return {
    queryName: e,
    queryMethod: o,
    queryArgs: u,
    variant: s,
    warning: f,
    toString() {
      f && console.warn(f);
      let [d, i] = u;
      return d = typeof d == "string" ? "'" + d + "'" : d, i = i ? ", { " + Object.entries(i).map((n) => {
        let [y, R] = n;
        return y + ": " + R;
      }).join(", ") + " }" : "", o + "(" + d + i + ")";
    }
  };
}
function Je(e, r, t) {
  return t && !0;
}
function Ga(e, r, t) {
  var a, s;
  if (r === void 0 && (r = "get"), e.matches(ae().defaultIgnore))
    return;
  const c = (a = e.getAttribute("role")) != null ? a : (s = mo(e)) == null ? void 0 : s[0];
  if (c !== "generic" && Je("Role", t, c))
    return Qe("Role", e, c, {
      variant: r,
      name: io(e, {
        computedStyleSupportsPseudoElements: ae().computedStyleSupportsPseudoElements
      })
    });
  const f = Rs(document, e).map((n) => n.content).join(" ");
  if (Je("LabelText", t, f))
    return Qe("LabelText", e, f, {
      variant: r
    });
  const h = e.getAttribute("placeholder");
  if (Je("PlaceholderText", t, h))
    return Qe("PlaceholderText", e, h, {
      variant: r
    });
  const u = Wu(Aa(e));
  if (Je("Text", t, u))
    return Qe("Text", e, u, {
      variant: r
    });
  if (Je("DisplayValue", t, e.value))
    return Qe("DisplayValue", e, Wu(e.value), {
      variant: r
    });
  const o = e.getAttribute("alt");
  if (Je("AltText", t, o))
    return Qe("AltText", e, o, {
      variant: r
    });
  const d = e.getAttribute("title");
  if (Je("Title", t, d))
    return Qe("Title", e, d, {
      variant: r
    });
  const i = e.getAttribute(ae().testIdAttribute);
  if (Je("TestId", t, i))
    return Qe("TestId", e, i, {
      variant: r
    });
}
function qa(e, r) {
  e.stack = r.stack.replace(r.message, e.message);
}
function Bm(e, r) {
  let {
    container: t = fo(),
    timeout: a = ae().asyncUtilTimeout,
    showOriginalStackTrace: s = ae().showOriginalStackTrace,
    stackTraceError: c,
    interval: f = 50,
    onTimeout: h = (o) => (Object.defineProperty(o, "message", {
      value: ae().getElementError(o.message, t).message
    }), o),
    mutationObserverOptions: u = {
      subtree: !0,
      childList: !0,
      attributes: !0,
      characterData: !0
    }
  } = r;
  if (typeof e != "function")
    throw new TypeError("Received `callback` arg must be a function");
  return new Promise(async (o, d) => {
    let i, n, y, R = !1, g = "idle";
    const T = setTimeout(w, a), l = Wa();
    if (l) {
      const {
        unstable_advanceTimersWrapper: v
      } = ae();
      for (P(); !R; ) {
        if (!Wa()) {
          const b = new Error("Changed from using fake timers to real timers while using waitFor. This is not allowed and will result in very strange behavior. Please ensure you're awaiting all async things your test is doing before changing to real timers. For more info, please go to https://github.com/testing-library/dom-testing-library/issues/830");
          s || qa(b, c), d(b);
          return;
        }
        if (await v(async () => {
          jest.advanceTimersByTime(f);
        }), R)
          break;
        P();
      }
    } else {
      try {
        Ye(t);
      } catch (b) {
        d(b);
        return;
      }
      n = setInterval(_, f);
      const {
        MutationObserver: v
      } = bs(t);
      y = new v(_), y.observe(t, u), P();
    }
    function C(v, b) {
      R = !0, clearTimeout(T), l || (clearInterval(n), y.disconnect()), v ? d(v) : o(b);
    }
    function _() {
      if (Wa()) {
        const v = new Error("Changed from using real timers to fake timers while using waitFor. This is not allowed and will result in very strange behavior. Please ensure you're awaiting all async things your test is doing before changing to fake timers. For more info, please go to https://github.com/testing-library/dom-testing-library/issues/830");
        return s || qa(v, c), d(v);
      } else
        return P();
    }
    function P() {
      if (g !== "pending")
        try {
          const v = ym(e);
          typeof (v == null ? void 0 : v.then) == "function" ? (g = "pending", v.then((b) => {
            g = "resolved", C(null, b);
          }, (b) => {
            g = "rejected", i = b;
          })) : C(null, v);
        } catch (v) {
          i = v;
        }
    }
    function w() {
      let v;
      i ? (v = i, !s && v.name === "TestingLibraryElementError" && qa(v, c)) : (v = new Error("Timed out in waitFor."), s || qa(v, c)), C(h(v), null);
    }
  });
}
function Fm(e, r) {
  const t = new Error("STACK_TRACE_MESSAGE");
  return ae().asyncWrapper(() => Bm(e, {
    stackTraceError: t,
    ...r
  }));
}
function _s(e, r) {
  return ae().getElementError(e, r);
}
function jm(e, r) {
  return _s(e + "\n\n(If this is intentional, then use the `*AllBy*` variant of the query (like `queryAllByText`, `getAllByText`, or `findAllByText`)).", r);
}
function Ia(e, r, t, a) {
  let {
    exact: s = !0,
    collapseWhitespace: c,
    trim: f,
    normalizer: h
  } = a === void 0 ? {} : a;
  const u = s ? Ge : yr, o = or({
    collapseWhitespace: c,
    trim: f,
    normalizer: h
  });
  return Array.from(r.querySelectorAll("[" + e + "]")).filter((d) => u(d.getAttribute(e), d, t, o));
}
function Ta(e, r) {
  return function(t) {
    for (var a = arguments.length, s = new Array(a > 1 ? a - 1 : 0), c = 1; c < a; c++)
      s[c - 1] = arguments[c];
    const f = e(t, ...s);
    if (f.length > 1) {
      const h = f.map((u) => _s(null, u).message).join(`

`);
      throw jm(r(t, ...s) + `

Here are the matching elements:

` + h, t);
    }
    return f[0] || null;
  };
}
function ws(e, r) {
  return ae().getElementError(`A better query is available, try this:
` + e.toString() + `
`, r);
}
function Um(e, r) {
  return function(t) {
    for (var a = arguments.length, s = new Array(a > 1 ? a - 1 : 0), c = 1; c < a; c++)
      s[c - 1] = arguments[c];
    const f = e(t, ...s);
    if (!f.length)
      throw ae().getElementError(r(t, ...s), t);
    return f;
  };
}
function xa(e) {
  return (r, t, a, s) => Fm(() => e(r, t, a), {
    container: r,
    ...s
  });
}
const vr = (e, r, t) => function(a) {
  for (var s = arguments.length, c = new Array(s > 1 ? s - 1 : 0), f = 1; f < s; f++)
    c[f - 1] = arguments[f];
  const h = e(a, ...c), [{
    suggest: u = ae().throwSuggestions
  } = {}] = c.slice(-1);
  if (h && u) {
    const o = Ga(h, t);
    if (o && !r.endsWith(o.queryName))
      throw ws(o.toString(), a);
  }
  return h;
}, Se = (e, r, t) => function(a) {
  for (var s = arguments.length, c = new Array(s > 1 ? s - 1 : 0), f = 1; f < s; f++)
    c[f - 1] = arguments[f];
  const h = e(a, ...c), [{
    suggest: u = ae().throwSuggestions
  } = {}] = c.slice(-1);
  if (h.length && u) {
    const o = [...new Set(h.map((d) => {
      var i;
      return (i = Ga(d, t)) == null ? void 0 : i.toString();
    }))];
    if (
      // only want to suggest if all the els have the same suggestion.
      o.length === 1 && !r.endsWith(
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- TODO: Can this be null at runtime?
        Ga(h[0], t).queryName
      )
    )
      throw ws(o[0], a);
  }
  return h;
};
function lr(e, r, t) {
  const a = vr(Ta(e, r), e.name, "query"), s = Um(e, t), c = Ta(s, r), f = vr(c, e.name, "get"), h = Se(s, e.name.replace("query", "get"), "getAll"), u = xa(Se(s, e.name, "findAll")), o = xa(vr(c, e.name, "find"));
  return [a, h, f, u, o];
}
function $m(e) {
  return Array.from(e.querySelectorAll("label,input")).map((r) => ({
    node: r,
    textToMatch: za(r)
  })).filter((r) => {
    let {
      textToMatch: t
    } = r;
    return t !== null;
  });
}
const Hm = function(e, r, t) {
  let {
    exact: a = !0,
    trim: s,
    collapseWhitespace: c,
    normalizer: f
  } = t === void 0 ? {} : t;
  const h = a ? Ge : yr, u = or({
    collapseWhitespace: c,
    trim: s,
    normalizer: f
  });
  return $m(e).filter((d) => {
    let {
      node: i,
      textToMatch: n
    } = d;
    return h(n, i, r, u);
  }).map((d) => {
    let {
      node: i
    } = d;
    return i;
  });
}, fa = function(e, r, t) {
  let {
    selector: a = "*",
    exact: s = !0,
    collapseWhitespace: c,
    trim: f,
    normalizer: h
  } = t === void 0 ? {} : t;
  Ye(e);
  const u = s ? Ge : yr, o = or({
    collapseWhitespace: c,
    trim: f,
    normalizer: h
  }), d = Array.from(e.querySelectorAll("*")).filter((i) => ys(i).length || i.hasAttribute("aria-labelledby")).reduce((i, n) => {
    const y = Rs(e, n, {
      selector: a
    });
    y.filter((g) => !!g.formControl).forEach((g) => {
      u(g.content, g.formControl, r, o) && g.formControl && i.push(g.formControl);
    });
    const R = y.filter((g) => !!g.content).map((g) => g.content);
    return u(R.join(" "), n, r, o) && i.push(n), R.length > 1 && R.forEach((g, T) => {
      u(g, n, r, o) && i.push(n);
      const l = [...R];
      l.splice(T, 1), l.length > 1 && u(l.join(" "), n, r, o) && i.push(n);
    }), i;
  }, []).concat(Ia("aria-label", e, r, {
    exact: s,
    normalizer: o
  }));
  return Array.from(new Set(d)).filter((i) => i.matches(a));
}, nr = function(e, r) {
  for (var t = arguments.length, a = new Array(t > 2 ? t - 2 : 0), s = 2; s < t; s++)
    a[s - 2] = arguments[s];
  const c = fa(e, r, ...a);
  if (!c.length) {
    const f = Hm(e, r, ...a);
    if (f.length) {
      const h = f.map((u) => Wm(e, u)).filter((u) => !!u);
      throw h.length ? ae().getElementError(h.map((u) => "Found a label with the text of: " + r + ", however the element associated with this label (<" + u + " />) is non-labellable [https://html.spec.whatwg.org/multipage/forms.html#category-label]. If you really need to label a <" + u + " />, you can use aria-label or aria-labelledby instead.").join(`

`), e) : ae().getElementError("Found a label with the text of: " + r + `, however no form control was found associated to that label. Make sure you're using the "for" attribute or "aria-labelledby" attribute correctly.`, e);
    } else
      throw ae().getElementError("Unable to find a label with the text of: " + r, e);
  }
  return c;
};
function Wm(e, r) {
  const t = r.getAttribute("for");
  if (!t)
    return null;
  const a = e.querySelector('[id="' + t + '"]');
  return a ? a.tagName.toLowerCase() : null;
}
const Ps = (e, r) => "Found multiple elements with the text of: " + r, Vm = vr(Ta(fa, Ps), fa.name, "query"), Ts = Ta(nr, Ps), zm = xa(Se(nr, nr.name, "findAll")), Gm = xa(vr(Ts, nr.name, "find")), Ym = Se(nr, nr.name, "getAll"), Km = vr(Ts, nr.name, "get"), Xm = Se(fa, fa.name, "queryAll"), Ya = function() {
  for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
    r[t] = arguments[t];
  return Ye(r[0]), Ia("placeholder", ...r);
}, Qm = (e, r) => "Found multiple elements with the placeholder text of: " + r, Jm = (e, r) => "Unable to find an element with the placeholder text of: " + r, Zm = Se(Ya, Ya.name, "queryAll"), [ev, rv, tv, nv, av] = lr(Ya, Qm, Jm), Ka = function(e, r, t) {
  let {
    selector: a = "*",
    exact: s = !0,
    collapseWhitespace: c,
    trim: f,
    ignore: h = ae().defaultIgnore,
    normalizer: u
  } = t === void 0 ? {} : t;
  Ye(e);
  const o = s ? Ge : yr, d = or({
    collapseWhitespace: c,
    trim: f,
    normalizer: u
  });
  let i = [];
  return typeof e.matches == "function" && e.matches(a) && (i = [e]), [...i, ...Array.from(e.querySelectorAll(a))].filter((n) => !h || !n.matches(h)).filter((n) => o(Aa(n), n, r, d));
}, ov = (e, r) => "Found multiple elements with the text: " + r, lv = function(e, r, t) {
  t === void 0 && (t = {});
  const {
    collapseWhitespace: a,
    trim: s,
    normalizer: c,
    selector: f
  } = t, u = or({
    collapseWhitespace: a,
    trim: s,
    normalizer: c
  })(r.toString()), o = u !== r.toString(), d = (f ?? "*") !== "*";
  return "Unable to find an element with the text: " + (o ? u + " (normalized from '" + r + "')" : r) + (d ? ", which matches selector '" + f + "'" : "") + ". This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.";
}, iv = Se(Ka, Ka.name, "queryAll"), [uv, sv, cv, dv, fv] = lr(Ka, ov, lv), Xa = function(e, r, t) {
  let {
    exact: a = !0,
    collapseWhitespace: s,
    trim: c,
    normalizer: f
  } = t === void 0 ? {} : t;
  Ye(e);
  const h = a ? Ge : yr, u = or({
    collapseWhitespace: s,
    trim: c,
    normalizer: f
  });
  return Array.from(e.querySelectorAll("input,textarea,select")).filter((o) => o.tagName === "SELECT" ? Array.from(o.options).filter((i) => i.selected).some((i) => h(Aa(i), i, r, u)) : h(o.value, o, r, u));
}, pv = (e, r) => "Found multiple elements with the display value: " + r + ".", mv = (e, r) => "Unable to find an element with the display value: " + r + ".", vv = Se(Xa, Xa.name, "queryAll"), [bv, hv, yv, Rv, gv] = lr(Xa, pv, mv), Ev = /^(img|input|area|.+-.+)$/i, Qa = function(e, r, t) {
  return t === void 0 && (t = {}), Ye(e), Ia("alt", e, r, t).filter((a) => Ev.test(a.tagName));
}, qv = (e, r) => "Found multiple elements with the alt text: " + r, Cv = (e, r) => "Unable to find an element with the alt text: " + r, _v = Se(Qa, Qa.name, "queryAll"), [wv, Pv, Tv, xv, Mv] = lr(Qa, qv, Cv), Ov = (e) => {
  var r;
  return e.tagName.toLowerCase() === "title" && ((r = e.parentElement) == null ? void 0 : r.tagName.toLowerCase()) === "svg";
}, Ja = function(e, r, t) {
  let {
    exact: a = !0,
    collapseWhitespace: s,
    trim: c,
    normalizer: f
  } = t === void 0 ? {} : t;
  Ye(e);
  const h = a ? Ge : yr, u = or({
    collapseWhitespace: s,
    trim: c,
    normalizer: f
  });
  return Array.from(e.querySelectorAll("[title], svg > title")).filter((o) => h(o.getAttribute("title"), o, r, u) || Ov(o) && h(Aa(o), o, r, u));
}, Sv = (e, r) => "Found multiple elements with the title: " + r + ".", Av = (e, r) => "Unable to find an element with the title: " + r + ".", Iv = Se(Ja, Ja.name, "queryAll"), [Dv, Nv, kv, Lv, Bv] = lr(Ja, Sv, Av), Za = function(e, r, t) {
  let {
    hidden: a = ae().defaultHidden,
    name: s,
    description: c,
    queryFallbacks: f = !1,
    selected: h,
    busy: u,
    checked: o,
    pressed: d,
    current: i,
    level: n,
    expanded: y,
    value: {
      now: R,
      min: g,
      max: T,
      text: l
    } = {}
  } = t === void 0 ? {} : t;
  if (Ye(e), h !== void 0) {
    var C;
    if (((C = Oe.roles.get(r)) == null ? void 0 : C.props["aria-selected"]) === void 0)
      throw new Error('"aria-selected" is not supported on role "' + r + '".');
  }
  if (u !== void 0) {
    var _;
    if (((_ = Oe.roles.get(r)) == null ? void 0 : _.props["aria-busy"]) === void 0)
      throw new Error('"aria-busy" is not supported on role "' + r + '".');
  }
  if (o !== void 0) {
    var P;
    if (((P = Oe.roles.get(r)) == null ? void 0 : P.props["aria-checked"]) === void 0)
      throw new Error('"aria-checked" is not supported on role "' + r + '".');
  }
  if (d !== void 0) {
    var w;
    if (((w = Oe.roles.get(r)) == null ? void 0 : w.props["aria-pressed"]) === void 0)
      throw new Error('"aria-pressed" is not supported on role "' + r + '".');
  }
  if (i !== void 0) {
    var v;
    if (((v = Oe.roles.get(r)) == null ? void 0 : v.props["aria-current"]) === void 0)
      throw new Error('"aria-current" is not supported on role "' + r + '".');
  }
  if (n !== void 0 && r !== "heading")
    throw new Error('Role "' + r + '" cannot have "level" property.');
  if (R !== void 0) {
    var b;
    if (((b = Oe.roles.get(r)) == null ? void 0 : b.props["aria-valuenow"]) === void 0)
      throw new Error('"aria-valuenow" is not supported on role "' + r + '".');
  }
  if (T !== void 0) {
    var E;
    if (((E = Oe.roles.get(r)) == null ? void 0 : E.props["aria-valuemax"]) === void 0)
      throw new Error('"aria-valuemax" is not supported on role "' + r + '".');
  }
  if (g !== void 0) {
    var A;
    if (((A = Oe.roles.get(r)) == null ? void 0 : A.props["aria-valuemin"]) === void 0)
      throw new Error('"aria-valuemin" is not supported on role "' + r + '".');
  }
  if (l !== void 0) {
    var L;
    if (((L = Oe.roles.get(r)) == null ? void 0 : L.props["aria-valuetext"]) === void 0)
      throw new Error('"aria-valuetext" is not supported on role "' + r + '".');
  }
  if (y !== void 0) {
    var j;
    if (((j = Oe.roles.get(r)) == null ? void 0 : j.props["aria-expanded"]) === void 0)
      throw new Error('"aria-expanded" is not supported on role "' + r + '".');
  }
  const F = /* @__PURE__ */ new WeakMap();
  function O(B) {
    return F.has(B) || F.set(B, Cs(B)), F.get(B);
  }
  return Array.from(e.querySelectorAll(
    // Only query elements that can be matched by the following filters
    Fv(r)
  )).filter((B) => {
    if (B.hasAttribute("role")) {
      const z = B.getAttribute("role");
      if (f)
        return z.split(" ").filter(Boolean).some((pe) => pe === r);
      const [ue] = z.split(" ");
      return ue === r;
    }
    return mo(B).some((z) => z === r);
  }).filter((B) => {
    if (h !== void 0)
      return h === Pm(B);
    if (u !== void 0)
      return u === Tm(B);
    if (o !== void 0)
      return o === xm(B);
    if (d !== void 0)
      return d === Mm(B);
    if (i !== void 0)
      return i === Om(B);
    if (y !== void 0)
      return y === Sm(B);
    if (n !== void 0)
      return n === Am(B);
    if (R !== void 0 || T !== void 0 || g !== void 0 || l !== void 0) {
      let ee = !0;
      if (R !== void 0 && ee && (ee = R === Im(B)), T !== void 0 && ee && (ee = T === Dm(B)), g !== void 0 && ee && (ee = g === Nm(B)), l !== void 0) {
        var K;
        ee && (ee = Ge((K = km(B)) != null ? K : null, B, l, (z) => z));
      }
      return ee;
    }
    return !0;
  }).filter((B) => s === void 0 ? !0 : Ge(io(B, {
    computedStyleSupportsPseudoElements: ae().computedStyleSupportsPseudoElements
  }), B, s, (K) => K)).filter((B) => c === void 0 ? !0 : Ge(is(B, {
    computedStyleSupportsPseudoElements: ae().computedStyleSupportsPseudoElements
  }), B, c, (K) => K)).filter((B) => a === !1 ? po(B, {
    isSubtreeInaccessible: O
  }) === !1 : !0);
};
function Fv(e) {
  var r;
  const t = '*[role~="' + e + '"]', a = (r = Oe.roleElements.get(e)) != null ? r : /* @__PURE__ */ new Set(), s = new Set(Array.from(a).map((c) => {
    let {
      name: f
    } = c;
    return f;
  }));
  return [t].concat(Array.from(s)).join(",");
}
const xs = (e) => {
  let r = "";
  return e === void 0 ? r = "" : typeof e == "string" ? r = ' and name "' + e + '"' : r = " and name `" + e + "`", r;
}, jv = function(e, r, t) {
  let {
    name: a
  } = t === void 0 ? {} : t;
  return 'Found multiple elements with the role "' + r + '"' + xs(a);
}, Uv = function(e, r, t) {
  let {
    hidden: a = ae().defaultHidden,
    name: s,
    description: c
  } = t === void 0 ? {} : t;
  if (ae()._disableExpensiveErrorDiagnostics)
    return 'Unable to find role="' + r + '"' + xs(s);
  let f = "";
  Array.from(e.children).forEach((d) => {
    f += wm(d, {
      hidden: a,
      includeDescription: c !== void 0
    });
  });
  let h;
  f.length === 0 ? a === !1 ? h = "There are no accessible roles. But there might be some inaccessible roles. If you wish to access them, then set the `hidden` option to `true`. Learn more about this here: https://testing-library.com/docs/dom-testing-library/api-queries#byrole" : h = "There are no available roles." : h = (`
Here are the ` + (a === !1 ? "accessible" : "available") + ` roles:

  ` + f.replace(/\n/g, `
  `).replace(/\n\s\s\n/g, `

`) + `
`).trim();
  let u = "";
  s === void 0 ? u = "" : typeof s == "string" ? u = ' and name "' + s + '"' : u = " and name `" + s + "`";
  let o = "";
  return c === void 0 ? o = "" : typeof c == "string" ? o = ' and description "' + c + '"' : o = " and description `" + c + "`", (`
Unable to find an ` + (a === !1 ? "accessible " : "") + 'element with the role "' + r + '"' + u + o + `

` + h).trim();
}, $v = Se(Za, Za.name, "queryAll"), [Hv, Wv, Vv, zv, Gv] = lr(Za, jv, Uv), vo = () => ae().testIdAttribute, eo = function() {
  for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
    r[t] = arguments[t];
  return Ye(r[0]), Ia(vo(), ...r);
}, Yv = (e, r) => "Found multiple elements by: [" + vo() + '="' + r + '"]', Kv = (e, r) => "Unable to find an element by: [" + vo() + '="' + r + '"]', Xv = Se(eo, eo.name, "queryAll"), [Qv, Jv, Zv, eb, rb] = lr(eo, Yv, Kv);
var ro = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  queryAllByLabelText: Xm,
  queryByLabelText: Vm,
  getAllByLabelText: Ym,
  getByLabelText: Km,
  findAllByLabelText: zm,
  findByLabelText: Gm,
  queryByPlaceholderText: ev,
  queryAllByPlaceholderText: Zm,
  getByPlaceholderText: tv,
  getAllByPlaceholderText: rv,
  findAllByPlaceholderText: nv,
  findByPlaceholderText: av,
  queryByText: uv,
  queryAllByText: iv,
  getByText: cv,
  getAllByText: sv,
  findAllByText: dv,
  findByText: fv,
  queryByDisplayValue: bv,
  queryAllByDisplayValue: vv,
  getByDisplayValue: yv,
  getAllByDisplayValue: hv,
  findAllByDisplayValue: Rv,
  findByDisplayValue: gv,
  queryByAltText: wv,
  queryAllByAltText: _v,
  getByAltText: Tv,
  getAllByAltText: Pv,
  findAllByAltText: xv,
  findByAltText: Mv,
  queryByTitle: Dv,
  queryAllByTitle: Iv,
  getByTitle: kv,
  getAllByTitle: Nv,
  findAllByTitle: Lv,
  findByTitle: Bv,
  queryByRole: Hv,
  queryAllByRole: $v,
  getAllByRole: Wv,
  getByRole: Vv,
  findAllByRole: zv,
  findByRole: Gv,
  queryByTestId: Qv,
  queryAllByTestId: Xv,
  getByTestId: Zv,
  getAllByTestId: Jv,
  findAllByTestId: eb,
  findByTestId: rb
});
function Ms(e, r, t) {
  return r === void 0 && (r = ro), t === void 0 && (t = {}), Object.keys(r).reduce((a, s) => {
    const c = r[s];
    return a[s] = c.bind(null, e), a;
  }, t);
}
const zu = {
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
}, Gu = {
  doubleClick: "dblClick"
};
function ar(e, r) {
  return ae().eventWrapper(() => {
    if (!r)
      throw new Error("Unable to fire an event - please provide an event object.");
    if (!e)
      throw new Error('Unable to fire a "' + r.type + '" event - please provide a DOM element.');
    return e.dispatchEvent(r);
  });
}
function Va(e, r, t, a) {
  let {
    EventType: s = "Event",
    defaultInit: c = {}
  } = a === void 0 ? {} : a;
  if (!r)
    throw new Error('Unable to fire a "' + e + '" event - please provide a DOM element.');
  const f = {
    ...c,
    ...t
  }, {
    target: {
      value: h,
      files: u,
      ...o
    } = {}
  } = f;
  h !== void 0 && tb(r, h), u !== void 0 && Object.defineProperty(r, "files", {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    value: u
  }), Object.assign(r, o);
  const d = bs(r), i = d[s] || d.Event;
  let n;
  if (typeof i == "function")
    n = new i(e, f);
  else {
    n = d.document.createEvent(s);
    const {
      bubbles: R,
      cancelable: g,
      detail: T,
      ...l
    } = f;
    n.initEvent(e, R, g, T), Object.keys(l).forEach((C) => {
      n[C] = l[C];
    });
  }
  return ["dataTransfer", "clipboardData"].forEach((R) => {
    const g = f[R];
    typeof g == "object" && (typeof d.DataTransfer == "function" ? Object.defineProperty(n, R, {
      value: Object.getOwnPropertyNames(g).reduce((T, l) => (Object.defineProperty(T, l, {
        value: g[l]
      }), T), new d.DataTransfer())
    }) : Object.defineProperty(n, R, {
      value: g
    }));
  }), n;
}
Object.keys(zu).forEach((e) => {
  const {
    EventType: r,
    defaultInit: t
  } = zu[e], a = e.toLowerCase();
  Va[e] = (s, c) => Va(a, s, c, {
    EventType: r,
    defaultInit: t
  }), ar[e] = (s, c) => ar(s, Va[e](s, c));
});
function tb(e, r) {
  const {
    set: t
  } = Object.getOwnPropertyDescriptor(e, "value") || {}, a = Object.getPrototypeOf(e), {
    set: s
  } = Object.getOwnPropertyDescriptor(a, "value") || {};
  if (s && t !== s)
    s.call(e, r);
  else if (t)
    t.call(e, r);
  else
    throw new Error("The given element does not have a value setter");
}
Object.keys(Gu).forEach((e) => {
  const r = Gu[e];
  ar[e] = function() {
    return ar[r](...arguments);
  };
});
function nb(e) {
  return e.replace(/[ \t]*[\n][ \t]*/g, `
`);
}
function ab(e) {
  return Jp.compressToEncodedURIComponent(nb(e));
}
function ob(e) {
  return "https://testing-playground.com/#markup=" + ab(e);
}
const lb = (e, r, t) => Array.isArray(e) ? e.forEach((a) => Hu(a, r, t)) : Hu(e, r, t), ib = function(e) {
  if (e === void 0 && (e = fo().body), !e || !("innerHTML" in e)) {
    console.log("The element you're providing isn't a valid DOM element.");
    return;
  }
  if (!e.innerHTML) {
    console.log("The provided element doesn't have any children.");
    return;
  }
  const r = ob(e.innerHTML);
  return console.log(`Open this URL in your browser

` + r), r;
}, Yu = {
  debug: lb,
  logTestingPlaygroundURL: ib
}, Tb = typeof document < "u" && document.body ? Ms(document.body, ro, Yu) : Object.keys(ro).reduce((e, r) => (e[r] = () => {
  throw new TypeError("For queries bound to document.body a global document has to be available... Learn more: https://testing-library.com/s/screen-global-error");
}, e), Yu), ub = typeof sa.act == "function" ? sa.act : nc.act;
function Os() {
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
function Ve(e) {
  Os().IS_REACT_ACT_ENVIRONMENT = e;
}
function Ma() {
  return Os().IS_REACT_ACT_ENVIRONMENT;
}
function sb(e) {
  return (r) => {
    const t = Ma();
    Ve(!0);
    try {
      let a = !1;
      const s = e(() => {
        const c = r();
        return c !== null && typeof c == "object" && typeof c.then == "function" && (a = !0), c;
      });
      if (a) {
        const c = s;
        return {
          then: (f, h) => {
            c.then((u) => {
              Ve(t), f(u);
            }, (u) => {
              Ve(t), h(u);
            });
          }
        };
      } else
        return Ve(t), s;
    } catch (a) {
      throw Ve(t), a;
    }
  };
}
const hr = sb(ub), ce = function() {
  return ar(...arguments);
};
Object.keys(ar).forEach((e) => {
  ce[e] = function() {
    return ar[e](...arguments);
  };
});
const cb = ce.mouseEnter, db = ce.mouseLeave;
ce.mouseEnter = function() {
  return cb(...arguments), ce.mouseOver(...arguments);
};
ce.mouseLeave = function() {
  return db(...arguments), ce.mouseOut(...arguments);
};
const fb = ce.pointerEnter, pb = ce.pointerLeave;
ce.pointerEnter = function() {
  return fb(...arguments), ce.pointerOver(...arguments);
};
ce.pointerLeave = function() {
  return pb(...arguments), ce.pointerOut(...arguments);
};
const mb = ce.select;
ce.select = (e, r) => {
  mb(e, r), e.focus(), ce.keyUp(e, r);
};
const vb = ce.blur, bb = ce.focus;
ce.blur = function() {
  return ce.focusOut(...arguments), vb(...arguments);
};
ce.focus = function() {
  return ce.focusIn(...arguments), bb(...arguments);
};
let hb = {
  reactStrictMode: !1
};
function yb() {
  return {
    ...ae(),
    ...hb
  };
}
function Rb() {
  return typeof jest < "u" && jest !== null ? (
    // legacy timers
    setTimeout._isMockFunction === !0 || // modern timers
    // eslint-disable-next-line prefer-object-has-own -- No Object.hasOwn in all target environments we support.
    Object.prototype.hasOwnProperty.call(setTimeout, "clock")
  ) : !1;
}
Rm({
  unstable_advanceTimersWrapper: (e) => hr(e),
  // We just want to run `waitFor` without IS_REACT_ACT_ENVIRONMENT
  // But that's not necessarily how `asyncWrapper` is used since it's a public method.
  // Let's just hope nobody else is using it.
  asyncWrapper: async (e) => {
    const r = Ma();
    Ve(!1);
    try {
      const t = await e();
      return await new Promise((a) => {
        setTimeout(() => {
          a();
        }, 0), Rb() && jest.advanceTimersByTime(0);
      }), t;
    } finally {
      Ve(r);
    }
  },
  eventWrapper: (e) => {
    let r;
    return hr(() => {
      r = e();
    }), r;
  }
});
const to = /* @__PURE__ */ new Set(), Oa = [];
function no(e, r) {
  return r ?? yb().reactStrictMode ? /* @__PURE__ */ sa.createElement(sa.StrictMode, null, e) : e;
}
function ao(e, r) {
  return r ? /* @__PURE__ */ sa.createElement(r, null, e) : e;
}
function gb(e, r) {
  let {
    hydrate: t,
    onCaughtError: a,
    onRecoverableError: s,
    ui: c,
    wrapper: f,
    reactStrictMode: h
  } = r, u;
  return t ? hr(() => {
    u = Io.hydrateRoot(e, no(ao(c, f), h), {
      onCaughtError: a,
      onRecoverableError: s
    });
  }) : u = Io.createRoot(e, {
    onCaughtError: a,
    onRecoverableError: s
  }), {
    hydrate() {
      if (!t)
        throw new Error("Attempted to hydrate a non-hydrateable root. This is a bug in `@testing-library/react`.");
    },
    render(o) {
      u.render(o);
    },
    unmount() {
      u.unmount();
    }
  };
}
function Eb(e) {
  return {
    hydrate(r) {
      Ca.hydrate(r, e);
    },
    render(r) {
      Ca.render(r, e);
    },
    unmount() {
      Ca.unmountComponentAtNode(e);
    }
  };
}
function Ss(e, r) {
  let {
    baseElement: t,
    container: a,
    hydrate: s,
    queries: c,
    root: f,
    wrapper: h,
    reactStrictMode: u
  } = r;
  return hr(() => {
    s ? f.hydrate(no(ao(e, h), u), a) : f.render(no(ao(e, h), u), a);
  }), {
    container: a,
    baseElement: t,
    debug: function(o, d, i) {
      return o === void 0 && (o = t), Array.isArray(o) ? (
        // eslint-disable-next-line no-console
        o.forEach((n) => console.log(br(n, d, i)))
      ) : (
        // eslint-disable-next-line no-console,
        console.log(br(o, d, i))
      );
    },
    unmount: () => {
      hr(() => {
        f.unmount();
      });
    },
    rerender: (o) => {
      Ss(o, {
        container: a,
        baseElement: t,
        root: f,
        wrapper: h,
        reactStrictMode: u
      });
    },
    asFragment: () => {
      if (typeof document.createRange == "function")
        return document.createRange().createContextualFragment(a.innerHTML);
      {
        const o = document.createElement("template");
        return o.innerHTML = a.innerHTML, o.content;
      }
    },
    ...Ms(t, c)
  };
}
function qb(e, r) {
  let {
    container: t,
    baseElement: a = t,
    legacyRoot: s = !1,
    onCaughtError: c,
    onUncaughtError: f,
    onRecoverableError: h,
    queries: u,
    hydrate: o = !1,
    wrapper: d,
    reactStrictMode: i
  } = r === void 0 ? {} : r;
  if (f !== void 0)
    throw new Error("onUncaughtError is not supported. The `render` call will already throw on uncaught errors.");
  if (s && typeof Ca.render != "function") {
    const y = new Error("`legacyRoot: true` is not supported in this version of React. If your app runs React 19 or later, you should remove this flag. If your app runs React 18 or earlier, visit https://react.dev/blog/2022/03/08/react-18-upgrade-guide for upgrade instructions.");
    throw Error.captureStackTrace(y, qb), y;
  }
  a || (a = document.body), t || (t = a.appendChild(document.createElement("div")));
  let n;
  return to.has(t) ? Oa.forEach((y) => {
    y.container === t && (n = y.root);
  }) : (n = (s ? Eb : gb)(t, {
    hydrate: o,
    onCaughtError: c,
    onRecoverableError: h,
    ui: e,
    wrapper: d,
    reactStrictMode: i
  }), Oa.push({
    container: t,
    root: n
  }), to.add(t)), Ss(e, {
    container: t,
    baseElement: a,
    queries: u,
    hydrate: o,
    wrapper: d,
    root: n,
    reactStrictMode: i
  });
}
function Ku() {
  Oa.forEach((e) => {
    let {
      root: r,
      container: t
    } = e;
    hr(() => {
      r.unmount();
    }), t.parentNode === document.body && document.body.removeChild(t);
  }), Oa.length = 0, to.clear();
}
var Xu;
if ((typeof process > "u" || !((Xu = process.env) != null && Xu.RTL_SKIP_AUTO_CLEANUP)) && (typeof afterEach == "function" ? afterEach(() => {
  Ku();
}) : typeof teardown == "function" && teardown(() => {
  Ku();
}), typeof beforeAll == "function" && typeof afterAll == "function")) {
  let e = Ma();
  beforeAll(() => {
    e = Ma(), Ve(!0);
  }), afterAll(() => {
    Ve(e);
  });
}
export {
  Ku as c,
  ce as f,
  qb as r,
  Tb as s
};
//# sourceMappingURL=react.esm-DeOc63_l.js.map
