/**
 * Created by kankan on 2019-11-23.
 * E-mail: lidainzhong@gl-data.com
 * To: More pain, more gain.
 */
(function () {
  var j9;

  function lp(p) {
    var l = 0;
    return function () {
      return l < p.length ? {done: !1, value: p[l++]} : {done: !0}
    }
  }

  function k3(p) {
    var l = "undefined" != typeof Symbol && Symbol.iterator && p[Symbol.iterator];
    return l ? l.call(p) : {next: lp(p)}
  }

  function kw(p) {
    if (!(p instanceof Array)) {
      p = k3(p);
      for (var l, q = []; !(l = p.next()).done;) {
        q.push(l.value)
      }
      p = q
    }
    return p
  }

  var j1 = "function" == typeof Object.create ? Object.create : function (p) {
    function l() {
    }

    l.prototype = p;
    return new l
  }, jQ;
  if ("function" == typeof Object.setPrototypeOf) {
    jQ = Object.setPrototypeOf
  } else {
    var jF;
    ku:{
      var i9 = {Ea: !0}, iY = {};
      try {
        iY.__proto__ = i9;
        jF = iY.Ea;
        break ku
      } catch (ku) {
      }
      jF = !1
    }
    jQ = jF ? function (p, l) {
      p.__proto__ = l;
      if (p.__proto__ !== l) {
        throw new TypeError(p + " is not extensible")
      }
      return p
    } : null
  }
  var iO = jQ;

  function iD(p, l) {
    p.prototype = j1(l.prototype);
    p.prototype.constructor = p;
    if (iO) {
      iO(p, l)
    } else {
      for (var r in l) {
        if ("prototype" != r) {
          if (Object.defineProperties) {
            var q = Object.getOwnPropertyDescriptor(l, r);
            q && Object.defineProperty(p, r, q)
          } else {
            p[r] = l[r]
          }
        }
      }
    }
  }

  var ir = "function" == typeof Object.defineProperties ? Object.defineProperty : function (p, l, q) {
      p != Array.prototype && p != Object.prototype && (p[l] = q.value)
    },
    h4 = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;

  function hT(p, l) {
    if (l) {
      var t = h4;
      p = p.split(".");
      for (var r = 0; r < p.length - 1; r++) {
        var q = p[r];
        q in t || (t[q] = {});
        t = t[q]
      }
      p = p[p.length - 1];
      r = t[p];
      l = l(r);
      l != r && null != l && ir(t, p, {configurable: !0, writable: !0, value: l})
    }
  }

  hT("String.prototype.endsWith", function (l) {
    return l ? l : function (a, q) {
      if (null == this) {
        throw new TypeError("The 'this' value for String.prototype.endsWith must not be null or undefined")
      }
      if (a instanceof RegExp) {
        throw new TypeError("First argument to String.prototype.endsWith must not be a regular expression")
      }
      void 0 === q && (q = this.length);
      q = Math.max(0, Math.min(q | 0, this.length));
      for (var p = a.length; 0 < p && 0 < q;) {
        if (this[--q] != a[--p]) {
          return !1
        }
      }
      return 0 >= p
    }
  });
  hT("Array.prototype.find", function (l) {
    return l ? l : function (a, v) {
      l:{
        var t = this;
        t instanceof String && (t = String(t));
        for (var r = t.length, q = 0; q < r; q++) {
          var p = t[q];
          if (a.call(v, p, q, t)) {
            a = p;
            break l
          }
        }
        a = void 0
      }
      return a
    }
  });
  var hI = "function" == typeof Object.assign ? Object.assign : function (p, l) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      if (r) {
        for (var q in r) {
          Object.prototype.hasOwnProperty.call(r, q) && (p[q] = r[q])
        }
      }
    }
    return p
  };
  hT("Object.assign", function (l) {
    return l || hI
  });
  var j8 = this || self;

  function j7(l) {
    return "string" == typeof l
  }

  function hx(l) {
    return "number" == typeof l
  }

  function hm() {
    if (null === g0) {
      l:{
        var l = j8.document;
        if ((l = l.querySelector && l.querySelector("script[nonce]")) && (l = l.nonce || l.getAttribute("nonce")) && gE.test(l)) {
          g0 = l;
          break l
        }
        g0 = ""
      }
    }
    return g0
  }

  var gE = /^[\w+/_-]+[=]{0,2}$/, g0 = null;

  function ga(p) {
    p = p.split(".");
    for (var l = j8, q = 0; q < p.length; q++) {
      if (l = l[p[q]], null == l) {
        return null
      }
    }
    return l
  }

  function fP() {
  }

  function fu(l) {
    l.ga = void 0;
    l.j = function () {
      return l.ga ? l.ga : l.ga = new l
    }
  }

  function eY(p) {
    var l = typeof p;
    if ("object" == l) {
      if (p) {
        if (p instanceof Array) {
          return "array"
        }
        if (p instanceof Object) {
          return l
        }
        var q = Object.prototype.toString.call(p);
        if ("[object Window]" == q) {
          return "object"
        }
        if ("[object Array]" == q || "number" == typeof p.length && "undefined" != typeof p.splice && "undefined" != typeof p.propertyIsEnumerable && !p.propertyIsEnumerable("splice")) {
          return "array"
        }
        if ("[object Function]" == q || "undefined" != typeof p.call && "undefined" != typeof p.propertyIsEnumerable && !p.propertyIsEnumerable("call")) {
          return "function"
        }
      } else {
        return "null"
      }
    } else {
      if ("function" == l && "undefined" == typeof p.call) {
        return "object"
      }
    }
    return l
  }

  function eD(l) {
    return null === l
  }

  function d7(l) {
    return "array" == eY(l)
  }

  function dM(p) {
    var l = typeof p;
    return "object" == l && null != p || "function" == l
  }

  function gP(l) {
    return l[gu] || (l[gu] = ++fZ)
  }

  var gu = "closure_uid_" + (1000000000 * Math.random() >>> 0), fZ = 0;

  function fE(p, l, q) {
    return p.call.apply(p.bind, arguments)
  }

  function e8(p, l, r) {
    if (!p) {
      throw Error()
    }
    if (2 < arguments.length) {
      var q = Array.prototype.slice.call(arguments, 2);
      return function () {
        var a = Array.prototype.slice.call(arguments);
        Array.prototype.unshift.apply(a, q);
        return p.apply(l, a)
      }
    }
    return function () {
      return p.apply(l, arguments)
    }
  }

  function eN(p, l, q) {
    Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? eN = fE : eN = e8;
    return eN.apply(null, arguments)
  }

  function es(p, l) {
    var q = Array.prototype.slice.call(arguments, 1);
    return function () {
      var a = q.slice();
      a.push.apply(a, arguments);
      return p.apply(this, a)
    }
  }

  function j6(p, l) {
    function q() {
    }

    q.prototype = l.prototype;
    p.prototype = new q;
    p.prototype.constructor = p
  }

  var dW = (new Date).getTime();

  function dB(p, l) {
    for (var t = p.length, r = j7(p) ? p.split("") : p, q = 0; q < t; q++) {
      q in r && l.call(void 0, r[q], q, p)
    }
  }

  function dr(p, l) {
    for (var y = p.length, x = [], v = 0, t = j7(p) ? p.split("") : p, r = 0; r < y; r++) {
      if (r in t) {
        var q = t[r];
        l.call(void 0, q, r, p) && (x[v++] = q)
      }
    }
    return x
  }

  function c5(p, l) {
    for (var v = p.length, t = Array(v), r = j7(p) ? p.split("") : p, q = 0; q < v; q++) {
      q in r && (t[q] = l.call(void 0, r[q], q, p))
    }
    return t
  }

  function cV(p, l) {
    for (var t = p.length, r = j7(p) ? p.split("") : p, q = 0; q < t; q++) {
      if (q in r && l.call(void 0, r[q], q, p)) {
        return !0
      }
    }
    return !1
  }

  function cL(p, l) {
    p:{
      for (var t = p.length, r = j7(p) ? p.split("") : p, q = 0; q < t; q++) {
        if (q in r && l.call(void 0, r[q], q, p)) {
          l = q;
          break p
        }
      }
      l = -1
    }
    return 0 > l ? null : j7(p) ? p.charAt(l) : p[l]
  }

  function cB(p, l) {
    p:{
      for (var r = j7(p) ? p.split("") : p, q = p.length - 1; 0 <= q; q--) {
        if (q in r && l.call(void 0, r[q], q, p)) {
          l = q;
          break p
        }
      }
      l = -1
    }
    return 0 > l ? null : j7(p) ? p.charAt(l) : p[l]
  }

  function cr(p, l) {
    p:if (j7(p)) {
      p = j7(l) && 1 == l.length ? p.indexOf(l, 0) : -1
    } else {
      for (var q = 0; q < p.length; q++) {
        if (q in p && p[q] === l) {
          p = q;
          break p
        }
      }
      p = -1
    }
    return 0 <= p
  }

  function b6() {
    return function () {
      return !eD.apply(this, arguments)
    }
  }

  function bW(p) {
    var l = !1, q;
    return function () {
      l || (q = p(), l = !0);
      return q
    }
  }

  function bM(p) {
    var l = p;
    return function () {
      if (l) {
        var a = l;
        l = null;
        a()
      }
    }
  }

  function bC(p, l) {
    for (var q in p) {
      if (l.call(void 0, p[q], q, p)) {
        return !0
      }
    }
    return !1
  }

  function bs(p) {
    var l = [], r = 0, q;
    for (q in p) {
      l[r++] = p[q]
    }
    return l
  }

  function a8(p, l) {
    return null !== p && l in p
  }

  function aP() {
    this.a = "";
    this.h = aF
  }

  aP.prototype.f = !0;
  aP.prototype.b = function () {
    return this.a.toString()
  };

  function av(l) {
    if (l instanceof aP && l.constructor === aP && l.h === aF) {
      return l.a
    }
    eY(l);
    return "type_error:TrustedResourceUrl"
  }

  var aF = {};

  function H(l) {
    return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(l)[1]
  }

  var k = /&/g, aY = /</g, lo = />/g, k1 = /"/g, kv = /'/g, j0 = /\x00/g;

  function jP(p, l) {
    return -1 != p.indexOf(l)
  }

  function jE(p, l) {
    var x = 0;
    p = H(String(p)).split(".");
    l = H(String(l)).split(".");
    for (var v = Math.max(p.length, l.length), t = 0; 0 == x && t < v; t++) {
      var r = p[t] || "", q = l[t] || "";
      do {
        r = /(\d*)(\D*)(.*)/.exec(r) || ["", "", "", ""];
        q = /(\d*)(\D*)(.*)/.exec(q) || ["", "", "", ""];
        if (0 == r[0].length && 0 == q[0].length) {
          break
        }
        x = ju(0 == r[1].length ? 0 : parseInt(r[1], 10), 0 == q[1].length ? 0 : parseInt(q[1], 10)) || ju(0 == r[2].length, 0 == q[2].length) || ju(r[2], q[2]);
        r = r[3];
        q = q[3]
      } while (0 == x)
    }
    return x
  }

  function ju(p, l) {
    return p < l ? -1 : p > l ? 1 : 0
  }

  function i8() {
    this.a = "";
    this.h = iX
  }

  i8.prototype.f = !0;
  i8.prototype.b = function () {
    return this.a.toString()
  };

  function iN(l) {
    if (l instanceof i8 && l.constructor === i8 && l.h === iX) {
      return l.a
    }
    eY(l);
    return "type_error:SafeUrl"
  }

  var iC = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i, iX = {};

  function iq(p) {
    var l = new i8;
    l.a = p;
    return l
  }

  iq("about:blank");
  var h3;
  ku:{
    var hS = j8.navigator;
    if (hS) {
      var hH = hS.userAgent;
      if (hH) {
        h3 = hH;
        break ku
      }
    }
    h3 = ""
  }

  function j5(l) {
    return jP(h3, l)
  }

  function hw(p) {
    for (var l = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, r = [], q; q = l.exec(p);) {
      r.push([q[1], q[2], q[3] || void 0])
    }
    return r
  }

  function hl() {
    return (j5("Chrome") || j5("CriOS")) && !j5("Edge")
  }

  function gZ() {
    function p(a) {
      a = cL(a, q);
      return r[a] || ""
    }

    var l = h3;
    if (j5("Trident") || j5("MSIE")) {
      return f9(l)
    }
    l = hw(l);
    var r = {};
    dB(l, function (a) {
      r[a[0]] = a[1]
    });
    var q = es(a8, r);
    return j5("Opera") ? p(["Version", "Opera"]) : j5("Edge") ? p(["Edge"]) : j5("Edg/") ? p(["Edg"]) : hl() ? p(["Chrome", "CriOS"]) : (l = l[2]) && l[1] || ""
  }

  function fO(l) {
    return 0 <= jE(gZ(), l)
  }

  function f9(p) {
    var l = /rv: *([\d\.]*)/.exec(p);
    if (l && l[1]) {
      return l[1]
    }
    l = "";
    var q = /MSIE +([\d\.]+)/.exec(p);
    if (q && q[1]) {
      if (p = /Trident\/(\d.\d)/.exec(p), "7.0" == q[1]) {
        if (p && p[1]) {
          switch (p[1]) {
            case"4.0":
              l = "8.0";
              break;
            case"5.0":
              l = "9.0";
              break;
            case"6.0":
              l = "10.0";
              break;
            case"7.0":
              l = "11.0"
          }
        } else {
          l = "7.0"
        }
      } else {
        l = q[1]
      }
    }
    return l
  }

  function ft(p, l) {
    p.src = av(l);
    (l = hm()) && p.setAttribute("nonce", l)
  }

  var eX = {
    "\x00": "\\0",
    "\b": "\\b",
    "\f": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    "\t": "\\t",
    "\x0B": "\\x0B",
    '"': '\\"',
    "\\": "\\\\",
    "<": "\\u003C"
  }, eC = {"'": "\\'"};

  function d6(l) {
    return String(l).replace(/\-([a-z])/g, function (a, p) {
      return p.toUpperCase()
    })
  }

  function dL(l) {
    dL[" "](l);
    return l
  }

  dL[" "] = fP;

  function j4() {
  }

  var gO = "function" == typeof Uint8Array;

  function j3(p, l, t, r) {
    p.a = null;
    l || (l = []);
    p.w = void 0;
    p.h = -1;
    p.b = l;
    p:{
      if (l = p.b.length) {
        --l;
        var q = p.b[l];
        if (!(null === q || "object" != typeof q || d7(q) || gO && q instanceof Uint8Array)) {
          p.i = l - p.h;
          p.f = q;
          break p
        }
      }
      p.i = Number.MAX_VALUE
    }
    p.s = {};
    if (t) {
      for (l = 0; l < t.length; l++) {
        q = t[l], q < p.i ? (q += p.h, p.b[q] = p.b[q] || gt) : (fY(p), p.f[q] = p.f[q] || gt)
      }
    }
    if (r && r.length) {
      for (l = 0; l < r.length; l++) {
        fD(p, r[l])
      }
    }
  }

  var gt = [];

  function fY(p) {
    var l = p.i + p.h;
    p.b[l] || (p.f = p.b[l] = {})
  }

  function j2(p, l) {
    if (l < p.i) {
      l += p.h;
      var q = p.b[l];
      return q === gt ? p.b[l] = [] : q
    }
    if (p.f) {
      return q = p.f[l], q === gt ? p.f[l] = [] : q
    }
  }

  function e7(p, l) {
    p = j2(p, l);
    return null == p ? p : +p
  }

  function eM(p, l) {
    p = j2(p, l);
    return null == p ? p : !!p
  }

  function k2(p, l, q) {
    p = j2(p, l);
    return null == p ? q : p
  }

  function er(p, l) {
    p = eM(p, l);
    return null == p ? !1 : p
  }

  function dV(p, l) {
    p = e7(p, l);
    return null == p ? 0 : p
  }

  function dA(p, l, q) {
    l < p.i ? p.b[l + p.h] = q : (fY(p), p.f[l] = q);
    return p
  }

  function fD(p, l) {
    for (var x, v, t = 0; t < l.length; t++) {
      var r = l[t], q = j2(p, r);
      null != q && (x = r, v = q, dA(p, r, void 0))
    }
    return x ? (dA(p, x, v), x) : 0
  }

  function k0(p, l, r) {
    p.a || (p.a = {});
    if (!p.a[r]) {
      var q = j2(p, r);
      q && (p.a[r] = new l(q))
    }
    return p.a[r]
  }

  function kY(p, l, v) {
    p.a || (p.a = {});
    if (!p.a[v]) {
      for (var t = j2(p, v), r = [], q = 0; q < t.length; q++) {
        r[q] = new l(t[q])
      }
      p.a[v] = r
    }
    l = p.a[v];
    l == gt && (l = p.a[v] = []);
    return l
  }

  function dq(p) {
    if (p.a) {
      for (var l in p.a) {
        var r = p.a[l];
        if (d7(r)) {
          for (var q = 0; q < r.length; q++) {
            r[q] && dq(r[q])
          }
        } else {
          r && dq(r)
        }
      }
    }
    return p.b
  }

  function c4(l) {
    j3(this, l, cU, null)
  }

  j6(c4, j4);

  function cK(l) {
    j3(this, l, null, null)
  }

  j6(cK, j4);
  var cU = [2, 3];

  function cA(l) {
    j3(this, l, null, null)
  }

  j6(cA, j4);
  var cq = document, kW = window;
  var b5 = {"120x90": !0, "160x90": !0, "180x90": !0, "200x90": !0, "468x15": !0, "728x15": !0};

  function bV(p, l) {
    if (15 == l) {
      if (728 <= p) {
        return 728
      }
      if (468 <= p) {
        return 468
      }
    } else {
      if (90 == l) {
        if (200 <= p) {
          return 200
        }
        if (180 <= p) {
          return 180
        }
        if (160 <= p) {
          return 160
        }
        if (120 <= p) {
          return 120
        }
      }
    }
    return null
  }

  function bL(p, l) {
    return p.createElement(String(l))
  }

  function bB(l) {
    this.a = l || j8.document || document
  }

  bB.prototype.contains = function (p, l) {
    if (!p || !l) {
      return !1
    }
    if (p.contains && 1 == l.nodeType) {
      return p == l || p.contains(l)
    }
    if ("undefined" != typeof p.compareDocumentPosition) {
      return p == l || !!(p.compareDocumentPosition(l) & 16)
    }
    for (; l && p != l;) {
      l = l.parentNode
    }
    return l == p
  };

  function br(p) {
    a7();
    var l = new aP;
    l.a = p;
    return l
  }

  var a7 = fP;

  function aO() {
    return !(j5("iPad") || j5("Android") && !j5("Mobile") || j5("Silk")) && (j5("iPod") || j5("iPhone") || j5("Android") || j5("IEMobile"))
  }

  function aE(p) {
    try {
      var l;
      if (l = !!p && null != p.location.href) {
        p:{
          try {
            dL(p.foo);
            l = !0;
            break p
          } catch (q) {
          }
          l = !1
        }
      }
      return l
    } catch (q) {
      return !1
    }
  }

  function au(p) {
    for (var l = j8, t = 0; l && 40 > t++ && (!aE(l) || !p(l));) {
      p:{
        try {
          var r = l.parent;
          if (r && r != l) {
            l = r;
            break p
          }
        } catch (q) {
        }
        l = null
      }
    }
  }

  function G() {
    var l = j8;
    au(function (a) {
      l = a;
      return !1
    });
    return l
  }

  function j(p, l) {
    var q = p.createElement("script");
    ft(q, br(l));
    return (p = p.getElementsByTagName("script")[0]) && p.parentNode ? (p.parentNode.insertBefore(q, p), q) : null
  }

  function aX(p, l) {
    return l.getComputedStyle ? l.getComputedStyle(p, null) : p.currentStyle
  }

  function ln(p, l, r) {
    var q = !1;
    void 0 === r || r || (q = kZ());
    return !q && !kt() && (r = Math.random(), r < l) ? (r = jZ(j8), p[Math.floor(r * p.length)]) : null
  }

  function jZ(p) {
    if (!p.crypto) {
      return Math.random()
    }
    try {
      var l = new Uint32Array(1);
      p.crypto.getRandomValues(l);
      return l[0] / 65536 / 65536
    } catch (q) {
      return Math.random()
    }
  }

  function jO(p, l) {
    if (p) {
      for (var q in p) {
        Object.prototype.hasOwnProperty.call(p, q) && l.call(void 0, p[q], q, p)
      }
    }
  }

  function jD(p) {
    var l = p.length;
    if (0 == l) {
      return 0
    }
    for (var r = 305419896, q = 0; q < l; q++) {
      r ^= (r << 5) + (r >> 2) + p.charCodeAt(q) & 4294967295
    }
    return 0 < r ? r : 4294967296 + r
  }

  var kt = bW(function () {
    return jP(h3, "Google Web Preview") || 0.0001 > Math.random()
  }), kZ = bW(function () {
    return jP(h3, "MSIE")
  }), jt = /^([0-9.]+)px$/, i7 = /^(-?[0-9.]{1,30})$/;

  function iW(l) {
    return i7.test(l) && (l = Number(l), !isNaN(l)) ? l : null
  }

  function iM(p, l) {
    return l ? !/^false$/.test(p) : /^true$/.test(p)
  }

  function kT(l) {
    return (l = jt.exec(l)) ? +l[1] : null
  }

  function iB(p) {
    var l = {display: "none"};
    p.style.setProperty ? jO(l, function (q, a) {
      p.style.setProperty(a, q, "important")
    }) : p.style.cssText = ip(h2(hR(p.style.cssText), hG(l, function (a) {
      return a + " !important"
    })))
  }

  var h2 = Object.assign || function (p, l) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      if (r) {
        for (var q in r) {
          Object.prototype.hasOwnProperty.call(r, q) && (p[q] = r[q])
        }
      }
    }
    return p
  };

  function hG(p, l) {
    var r = {}, q;
    for (q in p) {
      Object.prototype.hasOwnProperty.call(p, q) && (r[q] = l.call(void 0, p[q], q, p))
    }
    return r
  }

  function ip(p) {
    var l = [];
    jO(p, function (q, a) {
      null != q && "" !== q && l.push(a + ":" + q)
    });
    return l.length ? l.join(";") + ";" : ""
  }

  function hR(p) {
    var l = {};
    if (p) {
      var q = /\s*:\s*/;
      dB((p || "").split(/\s*;\s*/), function (r) {
        if (r) {
          var a = r.split(q);
          r = a[0];
          a = a[1];
          r && a && (l[r.toLowerCase()] = a)
        }
      })
    }
    return l
  }

  var hv = bW(function () {
    var l = /Edge\/([^. ]+)/.exec(navigator.userAgent);
    return l ? 18 <= parseInt(l[1], 10) : (l = /Chrome\/([^. ]+)/.exec(navigator.userAgent)) ? 71 <= parseInt(l[1], 10) : (l = /AppleWebKit\/([^. ]+)/.exec(navigator.userAgent)) ? 13 <= parseInt(l[1], 10) : (l = /Firefox\/([^. ]+)/.exec(navigator.userAgent)) ? 64 <= parseInt(l[1], 10) : !1
  }), g9 = bW(function () {
    return hl() && fO(72) || j5("Edge") && fO(18) || (j5("Firefox") || j5("FxiOS")) && fO(65) || j5("Safari") && !(hl() || j5("Coast") || j5("Opera") || j5("Edge") || j5("Edg/") || j5("OPR") || j5("Firefox") || j5("FxiOS") || j5("Silk") || j5("Android")) && fO(12)
  });

  function gY(p, l, q) {
    p.addEventListener && p.addEventListener(l, q, !1)
  }

  function gD(p, l) {
    j8.google_image_requests || (j8.google_image_requests = []);
    var r = j8.document.createElement("img");
    if (l) {
      var q = function (a) {
        l && l(a);
        r.removeEventListener && r.removeEventListener("load", q, !1);
        r.removeEventListener && r.removeEventListener("error", q, !1)
      };
      gY(r, "load", q);
      gY(r, "error", q)
    }
    r.src = p;
    j8.google_image_requests.push(r)
  }

  function f8(p, l) {
    p = parseInt(p, 10);
    return isNaN(p) ? l : p
  }

  var fN = /^([\w-]+\.)*([\w-]{2,})(:[0-9]+)?$/;

  function fs(p, l) {
    return p ? (p = p.match(fN)) ? p[0] : l : l
  }

  function eW() {
    return "r20190814"
  }

  var eB = iM("false", !1), d5 = iM("false", !1), dK = iM("true", !1) || !d5;

  function gN() {
    return fs("", "pagead2.googlesyndication.com")
  }

  function gs(p) {
    p = void 0 === p ? j8 : p;
    var l = p.context || p.AMP_CONTEXT_DATA;
    if (!l) {
      try {
        l = p.parent.context || p.parent.AMP_CONTEXT_DATA
      } catch (q) {
      }
    }
    try {
      if (l && l.pageViewId && l.canonicalUrl) {
        return l
      }
    } catch (q) {
    }
    return null
  }

  function fX(l) {
    return (l = l || gs()) ? aE(l.master) ? l.master : null : null
  }

  function fC(p, l) {
    for (var q in p) {
      Object.prototype.hasOwnProperty.call(p, q) && l.call(void 0, p[q], q, p)
    }
  }

  function e6(l) {
    return !(!l || !l.call) && "function" === typeof l
  }

  function eL(l) {
    l = fX(gs(l)) || l;
    l.google_unique_id ? ++l.google_unique_id : l.google_unique_id = 1
  }

  function eq(l) {
    l = fX(gs(l)) || l;
    l = l.google_unique_id;
    return "number" === typeof l ? l : 0
  }

  var dU = !!window.google_async_iframe_id, dz = dU && window.parent || window;

  function dp() {
    if (dU && !aE(dz)) {
      var p = "." + cq.domain;
      try {
        for (; 2 < p.split(".").length && !aE(dz);) {
          cq.domain = p = p.substr(p.indexOf(".") + 1), dz = window.parent
        }
      } catch (l) {
      }
      aE(dz) || (dz = window)
    }
    return dz
  }

  var c3 = /(^| )adsbygoogle($| )/;

  function cT(l) {
    return eB && l.google_top_window || l.top
  }

  function cJ(l) {
    l = cT(l);
    return aE(l) ? l : null
  }

  function kQ(l) {
    l.google_ad_modifications || (l.google_ad_modifications = {});
    return l.google_ad_modifications
  }

  function kO(p, l) {
    p:if (p = kQ(p).eids || [], p.indexOf) {
      l = p.indexOf(l), l = 0 < l || 0 === l
    } else {
      for (var q = 0; q < p.length; q++) {
        if (p[q] === l) {
          l = !0;
          break p
        }
      }
      l = !1
    }
    return l
  }

  function cz(p, l) {
    p = kQ(p);
    p.tag_partners = p.tag_partners || [];
    p.tag_partners.push(l)
  }

  function cp(l) {
    kQ(kW).allow_second_reactive_tag = l
  }

  function b4(p, l, r) {
    for (var q = 0; q < p.length; ++q) {
      if ((p[q].ad_slot || l) == l && (p[q].ad_tag_origin || r) == r) {
        return p[q]
      }
    }
    return null
  }

  var bU = {},
    bK = (bU.google_ad_client = !0, bU.google_ad_host = !0, bU.google_ad_host_channel = !0, bU.google_adtest = !0, bU.google_tag_for_child_directed_treatment = !0, bU.google_tag_for_under_age_of_consent = !0, bU.google_tag_partner = !0, bU);

  function bA(l) {
    j3(this, l, bq, null)
  }

  j6(bA, j4);
  var bq = [4];
  bA.prototype.X = function () {
    return j2(this, 3)
  };

  function a6(l) {
    j3(this, l, null, null)
  }

  j6(a6, j4);

  function aN(l) {
    j3(this, l, null, aD)
  }

  j6(aN, j4);

  function at(l) {
    j3(this, l, null, null)
  }

  j6(at, j4);

  function E(l) {
    j3(this, l, null, null)
  }

  j6(E, j4);

  function i(l) {
    j3(this, l, null, null)
  }

  j6(i, j4);
  var aD = [[1, 2, 3]];

  function aW(l) {
    j3(this, l, null, null)
  }

  j6(aW, j4);

  function lm(l) {
    j3(this, l, null, null)
  }

  j6(lm, j4);

  function kX(l) {
    j3(this, l, ks, null)
  }

  j6(kX, j4);
  var ks = [6, 7, 9, 10, 11];

  function jY(l) {
    j3(this, l, jN, null)
  }

  j6(jY, j4);

  function jC(l) {
    j3(this, l, null, null)
  }

  j6(jC, j4);

  function js(l) {
    j3(this, l, i6, null)
  }

  j6(js, j4);

  function iV(l) {
    j3(this, l, null, null)
  }

  j6(iV, j4);

  function iL(l) {
    j3(this, l, null, null)
  }

  j6(iL, j4);

  function iA(l) {
    j3(this, l, null, null)
  }

  j6(iA, j4);

  function io(l) {
    j3(this, l, null, null)
  }

  j6(io, j4);
  var jN = [1, 2, 5, 7], i6 = [2, 5, 6];
  var h1 = {overlays: 1, interstitials: 2, vignettes: 2, inserts: 3, immersives: 4, list_view: 5, full_page: 6};

  function hQ(p, l) {
    p = p.replace(/(^\/)|(\/$)/g, "");
    var r = jD(p), q = hF(p);
    return l.find(function (t) {
      var a = null != j2(t, 7) ? j2(k0(t, iV, 7), 1) : j2(t, 1);
      t = null != j2(t, 7) ? j2(k0(t, iV, 7), 2) : 2;
      if (!hx(a)) {
        return !1
      }
      switch (t) {
        case 1:
          return a == r;
        case 2:
          return q[a] || !1
      }
      return !1
    }) || null
  }

  function hF(p) {
    for (var l = {}; ;) {
      l[jD(p)] = !0;
      if (!p) {
        return l
      }
      p = p.substring(0, p.lastIndexOf("/"))
    }
  }

  function hu(p, l) {
    var q = void 0 === q ? {} : q;
    this.error = p;
    this.context = l.context;
    this.msg = l.message || "";
    this.id = l.id || "jserror";
    this.meta = q
  }

  var g8 = /^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;

  function gX(p, l) {
    this.a = p;
    this.b = l
  }

  function gC(p, l, q) {
    this.url = p;
    this.a = l;
    this.qa = !!q;
    this.depth = hx(void 0) ? void 0 : null
  }

  function f7() {
    this.f = "&";
    this.h = !1;
    this.b = {};
    this.i = 0;
    this.a = []
  }

  function fM(p, l) {
    var q = {};
    q[p] = l;
    return [q]
  }

  function fr(p, l, v, t, r) {
    var q = [];
    jO(p, function (x, a) {
      (x = eV(x, l, v, t, r)) && q.push(a + "=" + x)
    });
    return q.join(l)
  }

  function eV(p, l, x, v, t) {
    if (null == p) {
      return ""
    }
    l = l || "&";
    x = x || ",$";
    "string" == typeof x && (x = x.split(""));
    if (p instanceof Array) {
      if (v = v || 0, v < x.length) {
        for (var r = [], q = 0; q < p.length; q++) {
          r.push(eV(p[q], l, x, v + 1, t))
        }
        return r.join(x[v])
      }
    } else {
      if ("object" == typeof p) {
        return t = t || 0, 2 > t ? encodeURIComponent(fr(p, l, x, v, t + 1)) : "..."
      }
    }
    return encodeURIComponent(String(p))
  }

  function eA(p, l, r, q) {
    p.a.push(l);
    p.b[l] = fM(r, q)
  }

  function d4(B, A, y) {
    A = A + "//pagead2.googlesyndication.com" + y;
    var x = dJ(B) - y.length;
    if (0 > x) {
      return ""
    }
    B.a.sort(function (C, a) {
      return C - a
    });
    y = null;
    for (var v = "", t = 0; t < B.a.length; t++) {
      for (var r = B.a[t], q = B.b[r], p = 0; p < q.length; p++) {
        if (!x) {
          y = null == y ? r : y;
          break
        }
        var l = fr(q[p], B.f, ",$");
        if (l) {
          l = v + l;
          if (x >= l.length) {
            x -= l.length;
            A += l;
            v = B.f;
            break
          } else {
            B.h && (v = x, l[v - 1] == B.f && --v, A += l.substr(0, v), v = B.f, x = 0)
          }
          y = null == y ? r : y
        }
      }
    }
    B = "";
    null != y && (B = v + "trn=" + y);
    return A + B
  }

  function dJ(p) {
    var l = 1, q;
    for (q in p.b) {
      l = q.length > l ? q.length : l
    }
    return 3997 - l - p.f.length - 1
  }

  function gM() {
    var l = void 0 === l ? kW : l;
    this.a = "http:" === l.location.protocol ? "http:" : "https:";
    this.b = Math.random()
  }

  function gr(A, y, x, v, t, r) {
    if ((v ? A.b : Math.random()) < (t || 0.01)) {
      try {
        if (x instanceof f7) {
          var q = x
        } else {
          q = new f7, jO(x, function (B, a) {
            var D = q, C = D.i++;
            B = fM(a, B);
            D.a.push(C);
            D.b[C] = B
          })
        }
        var p = d4(q, A.a, "/pagead/gen_204?id=" + y + "&");
        p && ("undefined" === typeof r ? gD(p, null) : gD(p, void 0 === r ? null : r))
      } catch (l) {
      }
    }
  }

  function fW(p, l) {
    this.start = p < l ? p : l;
    this.a = p < l ? l : p
  }

  function kM(p, l, q) {
    this.b = l >= p ? new fW(p, l) : null;
    this.a = q
  }

  function fB(p, l) {
    var r = -1;
    l = "google_experiment_mod" + (void 0 === l ? "" : l);
    try {
      p.localStorage && (r = parseInt(p.localStorage.getItem(l), 10))
    } catch (q) {
      return null
    }
    if (0 <= r && 1000 > r) {
      return r
    }
    if (kt()) {
      return null
    }
    r = Math.floor(1000 * jZ(p));
    try {
      if (p.localStorage) {
        return p.localStorage.setItem(l, "" + r), r
      }
    } catch (q) {
    }
    return null
  }

  var e5 = null;

  function eK() {
    if (null === e5) {
      e5 = "";
      try {
        var p = "";
        try {
          p = j8.top.location.hash
        } catch (q) {
          p = j8.location.hash
        }
        if (p) {
          var l = p.match(/\bdeid=([\d,]+)/);
          e5 = l ? l[1] : ""
        }
      } catch (q) {
      }
    }
    return e5
  }

  function ep() {
    var l = j8.performance;
    return l && l.now && l.timing ? Math.floor(l.now() + l.timing.navigationStart) : +new Date
  }

  function dT() {
    var l = void 0 === l ? j8 : l;
    return (l = l.performance) && l.now ? l.now() : null
  }

  function dy(p, l, q) {
    this.label = p;
    this.type = l;
    this.value = q;
    this.duration = 0;
    this.uniqueId = Math.random();
    this.slotId = void 0
  }

  var dn = j8.performance, c2 = !!(dn && dn.mark && dn.measure && dn.clearMarks), cS = bW(function () {
    var l;
    if (l = c2) {
      l = eK(), l = !!l.indexOf && 0 <= l.indexOf("1337")
    }
    return l
  });

  function cI() {
    var p = cy;
    this.b = [];
    this.f = p || j8;
    var l = null;
    p && (p.google_js_reporting_queue = p.google_js_reporting_queue || [], this.b = p.google_js_reporting_queue, l = p.google_measure_js_timing);
    this.a = cS() || (null != l ? l : 1 > Math.random())
  }

  function co(l) {
    l && dn && cS() && (dn.clearMarks("goog_" + l.label + "_" + l.uniqueId + "_start"), dn.clearMarks("goog_" + l.label + "_" + l.uniqueId + "_end"))
  }

  cI.prototype.start = function (p, l) {
    if (!this.a) {
      return null
    }
    var q = dT() || ep();
    p = new dy(p, l, q);
    l = "goog_" + p.label + "_" + p.uniqueId + "_start";
    dn && cS() && dn.mark(l);
    return p
  };

  function b3() {
    var l = bT;
    this.w = bJ;
    this.h = !0;
    this.a = null;
    this.s = this.b;
    this.f = void 0 === l ? null : l;
    this.i = !1
  }

  function bz(C, B, A, y) {
    try {
      if (C.f && C.f.a) {
        var x = C.f.start(B.toString(), 3);
        var v = A();
        var t = C.f;
        A = x;
        if (t.a && hx(A.value)) {
          var r = dT() || ep();
          A.duration = r - A.value;
          var q = "goog_" + A.label + "_" + A.uniqueId + "_end";
          dn && cS() && dn.mark(q);
          !t.a || 2048 < t.b.length || t.b.push(A)
        }
      } else {
        v = A()
      }
    } catch (p) {
      t = C.h;
      try {
        co(x), t = C.s(B, new hu(p, {message: bp(p)}), void 0, y)
      } catch (l) {
        C.b(217, l)
      }
      if (!t) {
        throw p
      }
    }
    return v
  }

  function a5(p, l, t, r, q) {
    return function (x) {
      for (var v = [], a = 0; a < arguments.length; ++a) {
        v[a] = arguments[a]
      }
      return bz(p, l, function () {
        return t.apply(r, v)
      }, q)
    }
  }

  b3.prototype.b = function (M, L, K, J, I) {
    I = I || "jserror";
    try {
      var F = new f7;
      F.h = !0;
      eA(F, 1, "context", M);
      L.error && L.meta && L.id || (L = new hu(L, {message: bp(L)}));
      L.msg && eA(F, 2, "msg", L.msg.substring(0, 512));
      var D = L.meta || {};
      if (this.a) {
        try {
          this.a(D)
        } catch (t) {
        }
      }
      if (J) {
        try {
          J(D)
        } catch (t) {
        }
      }
      L = [D];
      F.a.push(3);
      F.b[3] = L;
      J = j8;
      L = [];
      D = null;
      do {
        var C = J;
        if (aE(C)) {
          var B = C.location.href;
          D = C.document && C.document.referrer || null
        } else {
          B = D, D = null
        }
        L.push(new gC(B || "", C));
        try {
          J = C.parent
        } catch (t) {
          J = null
        }
      } while (J && C != J);
      B = 0;
      for (var A = L.length - 1; B <= A; ++B) {
        L[B].depth = A - B
      }
      C = j8;
      if (C.location && C.location.ancestorOrigins && C.location.ancestorOrigins.length == L.length - 1) {
        for (A = 1; A < L.length; ++A) {
          var y = L[A];
          y.url || (y.url = C.location.ancestorOrigins[A - 1] || "", y.qa = !0)
        }
      }
      var v = new gC(j8.location.href, j8, !1);
      C = null;
      var r = L.length - 1;
      for (y = r; 0 <= y; --y) {
        var p = L[y];
        !C && g8.test(p.url) && (C = p);
        if (p.url && !p.qa) {
          v = p;
          break
        }
      }
      p = null;
      var q = L.length && L[r].url;
      0 != v.depth && q && (p = L[r]);
      var x = new gX(v, p);
      x.b && eA(F, 4, "top", x.b.url || "");
      eA(F, 5, "url", x.a.url || "");
      gr(this.w, I, F, this.i, K)
    } catch (t) {
      try {
        gr(this.w, I, {context: "ecmserr", rctx: M, msg: bp(t), url: x && x.a.url}, this.i, K)
      } catch (l) {
      }
    }
    return this.h
  };

  function bp(p) {
    var l = p.toString();
    p.name && -1 == l.indexOf(p.name) && (l += ": " + p.name);
    p.message && -1 == l.indexOf(p.message) && (l += ": " + p.message);
    if (p.stack) {
      p = p.stack;
      try {
        -1 == p.indexOf(l) && (p = l + "\n" + p);
        for (var r; p != r;) {
          r = p, p = p.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1")
        }
        l = p.replace(/\n */g, "\n")
      } catch (q) {
      }
    }
    return l
  }

  function kL(p) {
    p = void 0 === p ? "" : p;
    var l = Error.call(this);
    this.message = l.message;
    "stack" in l && (this.stack = l.stack);
    this.name = "TagError";
    this.message = p ? "adsbygoogle.push() error: " + p : "";
    Error.captureStackTrace ? Error.captureStackTrace(this, kL) : this.stack = Error().stack || ""
  }

  iD(kL, Error);
  var bJ, aM, aC, cy = dp(), bT = new cI;

  function ar(l) {
    null != l && (cy.google_measure_js_timing = l);
    cy.google_measure_js_timing || (l = bT, l.a = !1, l.b != l.f.google_js_reporting_queue && (cS() && dB(l.b, co), l.b.length = 0))
  }

  function z(p) {
    var l = kW.jerExpIds;
    if (d7(l) && 0 !== l.length) {
      var x = p.eid;
      if (x) {
        l = kw(x.split(",")).concat(kw(l));
        x = {};
        for (var v = 0, t = 0; t < l.length;) {
          var r = l[t++];
          var q = r;
          q = dM(q) ? "o" + gP(q) : (typeof q).charAt(0) + q;
          Object.prototype.hasOwnProperty.call(x, q) || (x[q] = !0, l[v++] = r)
        }
        l.length = v;
        p.eid = l.join(",")
      } else {
        p.eid = l.join(",")
      }
    }
  }

  (function () {
    bJ = new gM;
    aM = new b3;
    aM.a = function (a) {
      z(a);
      aC && (a.jc = aC)
    };
    "complete" == cy.document.readyState ? ar() : bT.a && gY(cy, "load", function () {
      ar()
    });
    var l = cq.currentScript;
    aC = l ? l.dataset.jc : ""
  })();

  function h() {
    var l = [aV, ll];
    aM.a = function (a) {
      dB(l, function (p) {
        p(a)
      });
      z(a);
      aC && (a.jc = aC)
    }
  }

  function kV(p, l, q) {
    return bz(aM, p, l, q)
  }

  function kr(p, l) {
    return a5(aM, p, l, void 0, void 0)
  }

  function jX(p, l, q) {
    gr(bJ, p, l, "jserror" != p, q, void 0)
  }

  function jM(p, l, r, q) {
    return 0 == (l.error && l.meta && l.id ? l.msg || bp(l.error) : bp(l)).indexOf("TagError") ? (aM.i = !0, r = l instanceof hu ? l.error : l, r.pbr || (r.pbr = !0, aM.b(p, l, 0.1, q, "puberror")), !1) : aM.b(p, l, r, q)
  }

  function jB(l) {
    jX("rmvasft", {code: "ldr", branch: l ? "exp" : "cntr"})
  }

  function jr(p, l) {
    this.oa = p;
    this.ua = l
  }

  function i5(p) {
    var l = [].slice.call(arguments).filter(b6());
    if (!l.length) {
      return null
    }
    var r = [], q = {};
    l.forEach(function (a) {
      r = r.concat(a.oa || []);
      q = Object.assign(q, a.ua)
    });
    return new jr(r, q)
  }

  function iU(l) {
    switch (l) {
      case 1:
        return new jr(null, {google_ad_semantic_area: "mc"});
      case 2:
        return new jr(null, {google_ad_semantic_area: "h"});
      case 3:
        return new jr(null, {google_ad_semantic_area: "f"});
      case 4:
        return new jr(null, {google_ad_semantic_area: "s"});
      default:
        return null
    }
  }

  var iK = new jr(["google-auto-placed"], {google_tag_origin: "qs"});
  var iz = {}, im = (iz.google_ad_channel = !0, iz.google_ad_host = !0, iz);

  function h0(p, l) {
    p.location.href && p.location.href.substring && (l.url = p.location.href.substring(0, 200));
    jX("ama", l, 0.01)
  }

  function hP(p) {
    var l = {};
    jO(im, function (q, a) {
      a in p && (l[a] = p[a])
    });
    return l
  }

  var hE = f8("2019", 2012);

  function ht(l) {
    j3(this, l, g7, gW)
  }

  j6(ht, j4);
  var g7 = [2, 8], gW = [[3, 4, 5], [6, 7]];

  function gB(l) {
    return null != l ? !l : l
  }

  function f6(p, l) {
    for (var t = !1, r = 0; r < p.length; r++) {
      var q = p[r].call();
      if (q == l) {
        return q
      }
      null == q && (t = !0)
    }
    if (!t) {
      return !l
    }
  }

  function fL(p, l) {
    var q = kY(p, ht, 2);
    if (!q.length) {
      return fq(p, l)
    }
    p = k2(p, 1, 0);
    if (1 == p) {
      return gB(fL(q[0], l))
    }
    q = c5(q, function (a) {
      return function () {
        return fL(a, l)
      }
    });
    switch (p) {
      case 2:
        return f6(q, !1);
      case 3:
        return f6(q, !0)
    }
  }

  function fq(p, l) {
    var v = fD(p, gW[0]);
    p:{
      switch (v) {
        case 3:
          var t = k2(p, 3, 0);
          break p;
        case 4:
          t = k2(p, 4, 0);
          break p;
        case 5:
          t = k2(p, 5, 0);
          break p
      }
      t = void 0
    }
    if (t && (l = (l = l[v]) && l[t])) {
      try {
        var r = l.apply(null, j2(p, 8))
      } catch (q) {
        return
      }
      l = k2(p, 1, 0);
      if (4 == l) {
        return !!r
      }
      t = null != r;
      if (5 == l) {
        return t
      }
      if (12 == l) {
        p = k2(p, 7, "")
      } else {
        p:{
          switch (v) {
            case 4:
              p = dV(p, 6);
              break p;
            case 5:
              p = k2(p, 7, "");
              break p
          }
          p = void 0
        }
      }
      if (null != p) {
        if (6 == l) {
          return r === p
        }
        if (9 == l) {
          return 0 == jE(r, p)
        }
        if (t) {
          switch (l) {
            case 7:
              return r < p;
            case 8:
              return r > p;
            case 12:
              return (new RegExp(p)).test(r);
            case 10:
              return -1 == jE(r, p);
            case 11:
              return 1 == jE(r, p)
          }
        }
      }
    }
  }

  function eU(p, l) {
    return !p || !(!l || !fL(p, l))
  }

  function ez(l) {
    j3(this, l, d3, null)
  }

  j6(ez, j4);
  var d3 = [4];

  function dI(l) {
    j3(this, l, gL, gq)
  }

  j6(dI, j4);

  function fV(l) {
    j3(this, l, null, null)
  }

  j6(fV, j4);
  var gL = [5], gq = [[1, 2, 3, 6]];

  function fA() {
    var l = {};
    this.a = (l[3] = {}, l[4] = {}, l[5] = {}, l)
  }

  fu(fA);

  function e4(p, l) {
    switch (l) {
      case 1:
        return k2(p, 1, 0);
      case 2:
        return k2(p, 2, 0);
      case 3:
        return k2(p, 3, 0);
      case 6:
        return k2(p, 6, 0);
      default:
        return null
    }
  }

  function eJ(p, l) {
    if (!p) {
      return null
    }
    switch (l) {
      case 1:
        return er(p, 1);
      case 2:
        return dV(p, 2);
      case 3:
        return k2(p, 3, "");
      case 6:
        return j2(p, 4);
      default:
        return null
    }
  }

  function eo(p, l, q) {
    l = dS.j().a[p][l];
    if (!l) {
      return q
    }
    l = new dI(l);
    l = dx(l);
    p = eJ(l, p);
    return null != p ? p : q
  }

  function dx(p) {
    var l = fA.j().a;
    if (l) {
      var q = cB(kY(p, fV, 5), function (a) {
        return eU(k0(a, ht, 1), l)
      });
      if (q) {
        return k0(q, ez, 2)
      }
    }
    return k0(p, ez, 4)
  }

  function dS() {
    var l = {};
    this.a = (l[1] = {}, l[2] = {}, l[3] = {}, l[6] = {}, l)
  }

  fu(dS);

  function dm(p, l) {
    return !!eo(1, p, void 0 === l ? !1 : l)
  }

  function c1(p, l) {
    l = void 0 === l ? 0 : l;
    p = Number(eo(2, p, l));
    return isNaN(p) ? l : p
  }

  function cR(p, l) {
    return eo(3, p, void 0 === l ? "" : l)
  }

  function cH(p, l) {
    l = void 0 === l ? [] : l;
    return eo(6, p, l)
  }

  function cx(p) {
    var l = dS.j().a;
    dB(p, function (r) {
      var q = fD(r, gq[0]), a = e4(r, q);
      a && (l[q][a] = dq(r))
    })
  }

  function cn(p) {
    var l = dS.j().a;
    dB(p, function (r) {
      var q = new dI(r), a = fD(q, gq[0]);
      (q = e4(q, a)) && (l[a][q] || (l[a][q] = r))
    })
  }

  function kK(l) {
    this.a = l
  }

  var b2 = new kK(1), bS = new kK(2), bI = new kK(3), by = new kK(4), bo = new kK(5), a4 = new kK(6), aL = new kK(7),
    aB = new kK(8), aq = new kK(9), w = new kK(10), g = new kK(11), aU = new kK(12), k9 = new kK(13), kU = new kK(14);

  function kJ(p, l, q) {
    q.hasOwnProperty(p.a) || Object.defineProperty(q, String(p.a), {value: l})
  }

  function kq(p, l, q) {
    return l[p.a] || q || function () {
    }
  }

  function jW(l) {
    kJ(bo, dm, l);
    kJ(a4, c1, l);
    kJ(aL, cR, l);
    kJ(aB, cH, l);
    kJ(k9, cn, l)
  }

  function jL(l) {
    kJ(by, function (a) {
      fA.j().a = a
    }, l);
    kJ(aq, function (a, q) {
      var p = fA.j();
      p.a[3][a] || (p.a[3][a] = q)
    }, l);
    kJ(w, function (a, q) {
      var p = fA.j();
      p.a[4][a] || (p.a[4][a] = q)
    }, l);
    kJ(g, function (a, q) {
      var p = fA.j();
      p.a[5][a] || (p.a[5][a] = q)
    }, l);
    kJ(kU, function (a) {
      for (var v = fA.j(), t = k3([3, 4, 5]), r = t.next(); !r.done; r = t.next()) {
        var q = r.value;
        r = void 0;
        var p = v.a[q];
        q = a[q];
        for (r in q) {
          p[r] = q[r]
        }
      }
    }, l)
  }

  function jA(l) {
    l.hasOwnProperty("init-done") || Object.defineProperty(l, "init-done", {value: !0})
  }

  function jq() {
    this.a = function () {
      return !1
    }
  }

  fu(jq);

  function i4(p, l, q) {
    q || (q = dK ? "https" : "http");
    j8.location && "https:" == j8.location.protocol && "http" == q && (q = "https");
    return [q, "://", p, l].join("")
  }

  function iJ(p, l, t) {
    p = i4(p, l, t);
    var r = void 0 === r ? !1 : r;
    if (jq.j().a(182, r)) {
      var q;
      2012 < hE ? q = p.replace(new RegExp(".js".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"), "g"), ("_fy" + hE + ".js").replace(/\$/g, "$$$$")) : q = p;
      r = q
    } else {
      r = p
    }
    return r
  }

  var iy = null;

  function il() {
    if (!eB) {
      return !1
    }
    if (null != iy) {
      return iy
    }
    iy = !1;
    try {
      var p = cJ(j8);
      p && -1 != p.location.hash.indexOf("google_logging") && (iy = !0);
      j8.localStorage.getItem("google_logging") && (iy = !0)
    } catch (l) {
    }
    return iy
  }

  function hZ(p, l) {
    l = void 0 === l ? [] : l;
    var q = !1;
    j8.google_logging_queue || (q = !0, j8.google_logging_queue = []);
    j8.google_logging_queue.push([p, l]);
    q && il() && (p = iJ(gN(), "/pagead/js/logging_library.js"), j(j8.document, p))
  }

  function hO(p, l, q) {
    this.a = p;
    this.b = l;
    this.f = q
  }

  function hD(l) {
    j3(this, l, null, null)
  }

  j6(hD, j4);

  function hs(l) {
    j3(this, l, null, null)
  }

  j6(hs, j4);

  function g6(l) {
    j3(this, l, gV, null)
  }

  j6(g6, j4);
  var gV = [5];

  function gA(p) {
    try {
      var l = p.localStorage.getItem("google_ama_settings");
      return l ? new g6(l ? JSON.parse(l) : null) : null
    } catch (q) {
      return null
    }
  }

  function f5() {
  }

  var fK = {rectangle: 1, horizontal: 2, vertical: 4};
  var fp = {
    9: "400",
    10: "100",
    13: "0.001",
    22: "0.01",
    24: "0.05",
    28: "0.001",
    29: "0.01",
    34: "0.001",
    60: "0.03",
    66: "0.1",
    78: "0.1",
    79: "1200",
    82: "3",
    96: "700",
    97: "20",
    98: "0.01",
    99: "600",
    100: "100",
    103: "0.01",
    111: "0.1",
    118: "false",
    120: "0",
    121: "1000",
    126: "0.001",
    128: "false",
    129: "0.02",
    135: "0.01",
    136: "0.02",
    137: "0.01",
    142: "1",
    149: "0",
    150: "1000",
    152: "700",
    153: "20",
    155: "1",
    157: "1",
    158: "100",
    160: "250",
    161: "150",
    162: "0.1",
    165: "0.02",
    173: "800",
    174: "2",
    176: "0",
    177: "0.02",
    179: "100",
    180: "20",
    182: "0.1",
    185: "0.4",
    189: "400",
    190: "100",
    191: "0.04",
    192: "0",
    193: "500",
    194: "90",
    195: "0",
    196: "100",
    197: "false",
    199: "0",
    200: "2",
    201: "true"
  };
  var eT = null;

  function ey() {
    this.a = fp
  }

  function kI(p, l) {
    p = parseFloat(p.a[l]);
    return isNaN(p) ? 0 : p
  }

  function d2(p) {
    var l = dH();
    return iM(l.a[p], !1)
  }

  function dH() {
    eT || (eT = new ey);
    return eT
  }

  var gK = null;

  function gp() {
    if (!gK) {
      for (var p = j8, l = p, q = 0; p && p != p.parent;) {
        if (p = p.parent, q++, aE(p)) {
          l = p
        } else {
          break
        }
      }
      gK = l
    }
    return gK
  }

  function fU() {
    this.a = function () {
      return []
    };
    this.b = function () {
      return []
    }
  }

  function fz(p, l) {
    p.a = kq(bS, l, function () {
    });
    p.b = kq(bI, l, function () {
      return []
    })
  }

  fu(fU);
  var e3 = {c: "368226950", g: "368226951"}, eI = {c: "368226960", g: "368226961"},
    en = {c: "368226470", U: "368226471"}, dR = {c: "368226480", U: "368226481"},
    dw = {c: "332260030", R: "332260031", P: "332260032"}, dl = {c: "332260040", R: "332260041", P: "332260042"},
    c0 = {c: "368226100", g: "368226101"}, cQ = {c: "368226110", g: "368226111"}, cG = {c: "368226500", g: "368226501"},
    cw = {c: "36998750", g: "36998751"}, cm = {c: "633794000", B: "633794004"}, b1 = {c: "633794002", B: "633794005"},
    bR = {c: "231196899", g: "231196900"}, bH = {c: "231196901", g: "231196902"}, bx = {c: "21063914", g: "21063915"},
    bn = {c: "4089040", Da: "4089042"}, a3 = {o: "20040067", c: "20040068", la: "1337"},
    aK = {c: "21060548", o: "21060549"}, aA = {c: "21060623", o: "21060624"}, ap = {c: "22324606", g: "22324607"},
    u = {c: "21062271", o: "21062272"}, f = {c: "368226370", g: "368226371"}, aT = {c: "368226380", g: "368226381"},
    k8 = {c: "182982000", g: "182982100"}, kp = {c: "182982200", g: "182982300"}, jV = {c: "182983000", g: "182983100"},
    jK = {c: "182983200", g: "182983300"}, jz = {c: "182984000", g: "182984100"}, jp = {c: "182984200", g: "182984300"},
    i3 = {c: "229739148", g: "229739149"}, iT = {c: "229739146", g: "229739147"}, iI = {c: "20040012", g: "20040013"},
    ix = {c: "151527201", T: "151527221", L: "151527222", K: "151527223", I: "151527224", J: "151527225"},
    kH = {c: "151527001", T: "151527021", L: "151527022", K: "151527023", I: "151527024", J: "151527025"},
    h9 = {c: "151527002", aa: "151527006", ba: "151527007"};

  function hY() {
    this.wasPlaTagProcessed = !1;
    this.wasReactiveAdConfigReceived = {};
    this.adCount = {};
    this.wasReactiveAdVisible = {};
    this.stateForType = {};
    this.reactiveTypeEnabledInAsfe = {};
    this.isReactiveTagFirstOnPage = this.wasReactiveAdConfigHandlerRegistered = this.wasReactiveTagRequestSent = !1;
    this.reactiveTypeDisabledByPublisher = {};
    this.tagSpecificState = {};
    this.adRegion = null;
    this.improveCollisionDetection = 0;
    this.messageValidationEnabled = !1
  }

  function hN(l) {
    l.google_reactive_ads_global_state || (l.google_reactive_ads_global_state = new hY);
    return l.google_reactive_ads_global_state
  }

  function hC(p) {
    p = p.document;
    var l = {};
    p && (l = "CSS1Compat" == p.compatMode ? p.documentElement : p.body);
    return l || {}
  }

  function kG(l) {
    return hC(l).clientWidth
  }

  function hr(p, l) {
    for (var v = ["width", "height"], t = 0; t < v.length; t++) {
      var r = "google_ad_" + v[t];
      if (!l.hasOwnProperty(r)) {
        var q = kT(p[v[t]]);
        q = null === q ? null : Math.round(q);
        null != q && (l[r] = q)
      }
    }
  }

  function g5(p, l) {
    return !((i7.test(l.google_ad_width) || jt.test(p.style.width)) && (i7.test(l.google_ad_height) || jt.test(p.style.height)))
  }

  function gU(p, l) {
    return (p = gz(p, l)) ? p.y : 0
  }

  function gz(p, l) {
    try {
      var t = l.document.documentElement.getBoundingClientRect(), r = p.getBoundingClientRect();
      return {x: r.left - t.left, y: r.top - t.top}
    } catch (q) {
      return null
    }
  }

  function f4(p, l) {
    do {
      var q = aX(p, l);
      if (q && "fixed" == q.position) {
        return !1
      }
    } while (p = p.parentElement);
    return !0
  }

  function fJ(p) {
    var l = 0, q;
    for (q in fK) {
      -1 != p.indexOf(q) && (l |= fK[q])
    }
    return l
  }

  function fo(p, l, v, t, r) {
    if (cT(p) != p) {
      return cJ(p) ? 3 : 16
    }
    if (!(488 > kG(p))) {
      return 4
    }
    if (!(p.innerHeight >= p.innerWidth)) {
      return 5
    }
    var q = kG(p);
    if (!q || (q - v) / q > t) {
      p = 6
    } else {
      if (v = "true" != r.google_full_width_responsive) {
        p:{
          v = kG(p);
          for (l = l.parentElement; l; l = l.parentElement) {
            if ((t = aX(l, p)) && (r = kT(t.width)) && !(r >= v) && "visible" != t.overflow) {
              v = !0;
              break p
            }
          }
          v = !1
        }
      }
      p = v ? 7 : !0
    }
    return p
  }

  function eS(p, l, t, r) {
    var q = fo(l, t, p, 0.3, r);
    if (!0 !== q) {
      return q
    }
    q = kG(l);
    p = q - p;
    p = q && 0 <= p ? !0 : q ? -10 > p ? 11 : 0 > p ? 14 : 12 : 10;
    return "true" == r.google_full_width_responsive || f4(t, l) ? p : 9
  }

  function ex(p, l, q) {
    "rtl" == l ? p.style.marginRight = q : p.style.marginLeft = q
  }

  function d1(p, l) {
    if (3 == l.nodeType) {
      return /\S/.test(l.data)
    }
    if (1 == l.nodeType) {
      if (/^(script|style)$/i.test(l.nodeName)) {
        return !1
      }
      try {
        var r = aX(l, p)
      } catch (q) {
      }
      return !r || "none" != r.display && !("absolute" == r.position && ("hidden" == r.visibility || "collapse" == r.visibility))
    }
    return !1
  }

  function dG(p, l, q) {
    p = gz(l, p);
    return "rtl" == q ? -p.x : p.x
  }

  function gJ(p, l, y, x, v, t) {
    var r = kO(p, c0.g);
    var q = kO(p, c0.c);
    if (r || q) {
      t.ovlp = !0
    }
    if (r) {
      if (v = l.parentElement) {
        if (v = aX(v, p)) {
          l.style.width = kG(p) + "px", v = v.direction, ex(l, v, "0px"), y = dG(p, l, v), ex(l, v, -1 * y + "px"), p = dG(p, l, v), 0 !== p && p !== y && ex(l, v, y / (p - y) * y + "px"), l.style.zIndex = 30
        }
      }
    } else {
      if (p = aX(y, p)) {
        r = kT(p.paddingLeft) || 0;
        p = p.direction;
        x = v - x;
        if (t.google_ad_resize) {
          y = -1 * (x + r) + "px"
        } else {
          for (q = t = 0; 100 > q && y; q++) {
            t += y.offsetLeft + y.clientLeft - y.scrollLeft, y = y.offsetParent
          }
          y = t + r;
          y = "rtl" == p ? -1 * (x - y) + "px" : -1 * y + "px"
        }
        ex(l, p, y);
        l.style.width = v + "px";
        l.style.zIndex = 30
      }
    }
  }

  function kF(p, l) {
    this.b = p;
    this.a = l
  }

  j9 = kF.prototype;
  j9.minWidth = function () {
    return this.b
  };
  j9.height = function () {
    return this.a
  };
  j9.M = function (l) {
    return 300 < l && 300 < this.a ? this.b : Math.min(1200, Math.round(l))
  };
  j9.ea = function (l) {
    return this.M(l) + "x" + this.height()
  };
  j9.Z = function () {
  };

  function go(p, l, t, r) {
    r = void 0 === r ? function (a) {
      return a
    } : r;
    var q;
    return p.style && p.style[t] && r(p.style[t]) || (q = aX(p, l)) && q[t] && r(q[t]) || null
  }

  function fT(l) {
    return function (a) {
      return a.minWidth() <= l
    }
  }

  function fy(p, l, v, t) {
    var r = p && e2(v, l), q = eH(l, t);
    return function (a) {
      return !(r && a.height() >= q)
    }
  }

  function em(l) {
    return function (a) {
      return a.height() <= l
    }
  }

  function e2(p, l) {
    return gU(p, l) < hC(l).clientHeight - 100
  }

  function dQ(p, l) {
    p = gU(p, l);
    l = hC(l).clientHeight;
    return 0 == l ? null : p / l
  }

  function dv(p, l) {
    var r = Infinity;
    do {
      var q = go(l, p, "height", kT);
      q && (r = Math.min(r, q));
      (q = go(l, p, "maxHeight", kT)) && (r = Math.min(r, q))
    } while ((l = l.parentElement) && "HTML" != l.tagName);
    return r
  }

  function c9(p, l) {
    var r = go(l, p, "height", kT);
    if (r) {
      return r
    }
    var q = l.style.height;
    l.style.height = "inherit";
    r = go(l, p, "height", kT);
    l.style.height = q;
    if (r) {
      return r
    }
    r = Infinity;
    do {
      (q = l.style && kT(l.style.height)) && (r = Math.min(r, q)), (q = go(l, p, "maxHeight", kT)) && (r = Math.min(r, q))
    } while ((l = l.parentElement) && "HTML" != l.tagName);
    return r
  }

  function eH(p, l) {
    var q = p.google_unique_id;
    return l && 0 == ("number" === typeof q ? q : 0) ? Math.max(250, 2 * hC(p).clientHeight / 3) : 250
  }

  function cZ(p, l) {
    for (var t = [], r = p.length, q = 0; q < r; q++) {
      t.push(p[q])
    }
    t.forEach(l, void 0)
  }

  function cP(p) {
    if (1 != p.nodeType) {
      var l = !1
    } else {
      if (l = "INS" == p.tagName) {
        p:{
          l = ["adsbygoogle-placeholder"];
          p = p.className ? p.className.split(/\s+/) : [];
          for (var r = {}, q = 0; q < p.length; ++q) {
            r[p[q]] = !0
          }
          for (q = 0; q < l.length; ++q) {
            if (!r[l[q]]) {
              l = !1;
              break p
            }
          }
          l = !0
        }
      }
    }
    return l
  }

  function cF(p, l) {
    for (var t = 0; t < l.length; t++) {
      var r = l[t], q = d6(r.$a);
      p[q] = r.value
    }
  }

  function cv(p, l, r, q) {
    this.h = p;
    this.b = l;
    this.f = r;
    this.a = q
  }

  function cl(p, l) {
    var x = [];
    try {
      x = l.querySelectorAll(p.h)
    } catch (q) {
    }
    if (!x.length) {
      return []
    }
    l = x;
    x = l.length;
    if (0 < x) {
      for (var v = Array(x), t = 0; t < x; t++) {
        v[t] = l[t]
      }
      l = v
    } else {
      l = []
    }
    l = b0(p, l);
    hx(p.b) && (x = p.b, 0 > x && (x += l.length), l = 0 <= x && x < l.length ? [l[x]] : []);
    if (hx(p.f)) {
      x = [];
      for (v = 0; v < l.length; v++) {
        t = bQ(l[v]);
        var r = p.f;
        0 > r && (r += t.length);
        0 <= r && r < t.length && x.push(t[r])
      }
      l = x
    }
    return l
  }

  cv.prototype.toString = function () {
    return JSON.stringify({nativeQuery: this.h, occurrenceIndex: this.b, paragraphIndex: this.f, ignoreMode: this.a})
  };

  function b0(p, l) {
    if (null == p.a) {
      return l
    }
    switch (p.a) {
      case 1:
        return l.slice(1);
      case 2:
        return l.slice(0, l.length - 1);
      case 3:
        return l.slice(1, l.length - 1);
      case 0:
        return l;
      default:
        throw Error("Unknown ignore mode: " + p.a)
    }
  }

  function bQ(p) {
    var l = [];
    cZ(p.getElementsByTagName("p"), function (a) {
      100 <= bG(a) && l.push(a)
    });
    return l
  }

  function bG(p) {
    if (3 == p.nodeType) {
      return p.length
    }
    if (1 != p.nodeType || "SCRIPT" == p.tagName) {
      return 0
    }
    var l = 0;
    cZ(p.childNodes, function (a) {
      l += bG(a)
    });
    return l
  }

  function bw(l) {
    return 0 == l.length || isNaN(l[0]) ? l : "\\" + (30 + parseInt(l[0], 10)) + " " + l.substring(1)
  }

  function bm(p) {
    if (!p) {
      return null
    }
    var l = j2(p, 7);
    if (j2(p, 1) || p.X() || 0 < j2(p, 4).length) {
      var x = p.X(), v = j2(p, 1), t = j2(p, 4);
      l = j2(p, 2);
      var r = j2(p, 5);
      p = a2(j2(p, 6));
      var q = "";
      v && (q += v);
      x && (q += "#" + bw(x));
      if (t) {
        for (x = 0; x < t.length; x++) {
          q += "." + bw(t[x])
        }
      }
      l = (t = q) ? new cv(t, l, r, p) : null
    } else {
      l = l ? new cv(l, j2(p, 2), j2(p, 5), a2(j2(p, 6))) : null
    }
    return l
  }

  var aJ = {1: 1, 2: 2, 3: 3, 0: 0};

  function a2(l) {
    return null != l ? aJ[l] : l
  }

  var az = {1: 0, 2: 1, 3: 2, 4: 3};

  function ao() {
    this.a = {};
    this.b = {}
  }

  ao.prototype.add = function (l) {
    this.a[l] = !0;
    this.b[l] = l
  };
  ao.prototype.contains = function (l) {
    return !!this.a[l]
  };

  function s() {
    this.a = {};
    this.b = {}
  }

  s.prototype.set = function (p, l) {
    this.a[p] = l;
    this.b[p] = p
  };
  s.prototype.get = function (p, l) {
    return void 0 !== this.a[p] ? this.a[p] : l
  };

  function e() {
    this.a = new s
  }

  e.prototype.set = function (p, l) {
    var q = this.a.get(p);
    q || (q = new ao, this.a.set(p, q));
    q.add(l)
  };

  function aS(p, l) {
    function t() {
      r.push({anchor: q.anchor, position: q.position});
      return q.anchor == l.anchor && q.position == l.position
    }

    for (var r = [], q = p; q;) {
      switch (q.position) {
        case 1:
          if (t()) {
            return r
          }
          q.position = 2;
        case 2:
          if (t()) {
            return r
          }
          if (q.anchor.firstChild) {
            q = {anchor: q.anchor.firstChild, position: 1};
            continue
          } else {
            q.position = 3
          }
        case 3:
          if (t()) {
            return r
          }
          q.position = 4;
        case 4:
          if (t()) {
            return r
          }
      }
      for (; q && !q.anchor.nextSibling && q.anchor.parentNode != q.anchor.ownerDocument.body;) {
        q = {anchor: q.anchor.parentNode, position: 3};
        if (t()) {
          return r
        }
        q.position = 4;
        if (t()) {
          return r
        }
      }
      q && q.anchor.nextSibling ? q = {anchor: q.anchor.nextSibling, position: 1} : q = null
    }
    return r
  }

  function k7(p, l) {
    this.b = p;
    this.a = l
  }

  function kS(p, l) {
    var r = new e, q = new ao;
    l.forEach(function (v) {
      if (k0(v, at, 1)) {
        v = k0(v, at, 1);
        if (k0(v, a6, 1) && k0(k0(v, a6, 1), bA, 1) && k0(v, a6, 2) && k0(k0(v, a6, 2), bA, 1)) {
          var t = ko(p, k0(k0(v, a6, 1), bA, 1)), a = ko(p, k0(k0(v, a6, 2), bA, 1));
          if (t && a) {
            for (t = k3(aS({anchor: t, position: j2(k0(v, a6, 1), 2)}, {
              anchor: a,
              position: j2(k0(v, a6, 2), 2)
            })), a = t.next(); !a.done; a = t.next()) {
              a = a.value, r.set(gP(a.anchor), a.position)
            }
          }
        }
        k0(v, a6, 3) && k0(k0(v, a6, 3), bA, 1) && (t = ko(p, k0(k0(v, a6, 3), bA, 1))) && r.set(gP(t), j2(k0(v, a6, 3), 2))
      } else {
        k0(v, E, 2) ? jU(p, k0(v, E, 2), r) : k0(v, i, 3) && jJ(p, k0(v, i, 3), q)
      }
    });
    return new k7(r, q)
  }

  function jU(p, l, q) {
    k0(l, bA, 1) && (p = jy(p, k0(l, bA, 1))) && p.forEach(function (a) {
      a = gP(a);
      q.set(a, 1);
      q.set(a, 4);
      q.set(a, 2);
      q.set(a, 3)
    })
  }

  function jJ(p, l, q) {
    k0(l, bA, 1) && (p = jy(p, k0(l, bA, 1))) && p.forEach(function (a) {
      q.add(gP(a))
    })
  }

  function ko(p, l) {
    return (p = jy(p, l)) && 0 < p.length ? p[0] : null
  }

  function jy(p, l) {
    return (l = bm(l)) ? cl(l, p) : null
  }

  function jo(p, l) {
    var v = l.b - 301, t = l.a + l.f + 301, r = l.b + 301, q = l.a - 301;
    return !cV(p, function (a) {
      return a.left < t && q < a.right && a.top < r && v < a.bottom
    })
  }

  function i2(p, l) {
    if (!p) {
      return !1
    }
    p = aX(p, l);
    if (!p) {
      return !1
    }
    p = p.cssFloat || p.styleFloat;
    return "left" == p || "right" == p
  }

  function iS(l) {
    for (l = l.previousSibling; l && 1 != l.nodeType;) {
      l = l.previousSibling
    }
    return l ? l : null
  }

  function iH(l) {
    return !!l.nextSibling || !!l.parentNode && iH(l.parentNode)
  }

  function iw(p, l) {
    return p && null != j2(p, 4) && l[j2(k0(p, lm, 4), 2)] ? !1 : !0
  }

  function h8(p) {
    var l = {};
    p && j2(p, 6).forEach(function (a) {
      l[a] = !0
    });
    return l
  }

  function hX(p, l, r, q) {
    this.a = j8;
    this.$ = p;
    this.f = l;
    this.i = q || null;
    this.s = (this.w = r) ? kS(j8.document, kY(r, aN, 5)) : kS(j8.document, []);
    this.b = 0;
    this.h = !1
  }

  function hM(C, B) {
    if (C.h) {
      return !0
    }
    C.h = !0;
    var A = kY(C.f, kX, 1);
    C.b = 0;
    var y = h8(C.w);
    if (k0(C.f, io, 15) && er(k0(C.f, io, 15), 12)) {
      var x = gA(C.a);
      x = null === x ? null : kY(x, hs, 5);
      if (null != x) {
        var v = gA(C.a);
        v = null !== v && null != j2(v, 3) && null !== e7(v, 3) ? e7(v, 3) : 0.3;
        var t = gA(C.a);
        t = null !== t && null != j2(t, 4) ? e7(t, 4) : 1;
        v -= t;
        t = [];
        for (var r = 0; r < x.length && 0.05 <= v && 4 > (hB(C).numAutoAdsPlaced || 0); r++) {
          var q = j2(x[r], 1);
          if (null == q) {
            break
          }
          var p = A[q], l = k0(x[r], hD, 2);
          null != l && null != e7(l, 1) && null != e7(l, 2) && null != e7(l, 3) && (l = new hO(e7(l, 1), e7(l, 2), e7(l, 3)), jo(t, l) && (q = hq(C, p, q, B, y), null != q && null != q.V && (q = q.V.getBoundingClientRect(), t.push(q), p = C.a, v -= q.width * q.height / (hC(p).clientHeight * kG(p)))))
        }
      }
      return !0
    }
    x = gA(C.a);
    if (null !== x && er(x, 2)) {
      return hB(C).eatf = !0, hZ(7, [!0, 0, !1]), !0
    }
    for (x = 0; x < A.length; x++) {
      if (hq(C, A[x], x, B, y)) {
        return !0
      }
    }
    hZ(7, [!1, C.b, !1]);
    return !1
  }

  function hq(p, l, v, t, r) {
    if (1 !== j2(l, 8) || !iw(l, r)) {
      return null
    }
    var q = k0(l, lm, 4);
    if (q && 2 == j2(q, 1)) {
      p.b++;
      if (l = g4(p, l, t, r)) {
        t = hB(p), t.placement = v, t.numAutoAdsPlaced || (t.numAutoAdsPlaced = 0), t.numAutoAdsPlaced++, hZ(7, [!1, p.b, !0])
      }
      return l
    }
    return null
  }

  function g4(D, C, B, y) {
    if (!iw(C, y) || 1 != j2(C, 8)) {
      return null
    }
    y = k0(C, bA, 1);
    if (!y) {
      return null
    }
    y = bm(y);
    if (!y) {
      return null
    }
    y = cl(y, D.a.document);
    if (0 == y.length) {
      return null
    }
    y = y[0];
    var x = j2(C, 2);
    x = az[x];
    x = void 0 !== x ? x : null;
    var v;
    if (!(v = null == x)) {
      D:{
        v = D.a;
        switch (x) {
          case 0:
            v = i2(iS(y), v);
            break D;
          case 3:
            v = i2(y, v);
            break D;
          case 2:
            var t = y.lastChild;
            v = i2(t ? 1 == t.nodeType ? t : iS(t) : null, v);
            break D
        }
        v = !1
      }
      if (B = !v && !(!B && 2 == x && !iH(y))) {
        B = 1 == x || 2 == x ? y : y.parentNode, B = !(B && !cP(B) && 0 >= B.offsetWidth)
      }
      v = !B
    }
    if (!(B = v)) {
      B = D.s;
      v = j2(C, 2);
      t = gP(y);
      t = B.b.a.get(t);
      if (!(t = t ? t.contains(v) : !1)) {
        D:{
          if (B.a.contains(gP(y))) {
            switch (v) {
              case 2:
              case 3:
                t = !0;
                break D;
              default:
                t = !1;
                break D
            }
          }
          for (v = y.parentElement; v;) {
            if (B.a.contains(gP(v))) {
              t = !0;
              break D
            }
            v = v.parentElement
          }
          t = !1
        }
      }
      B = t
    }
    if (B) {
      return null
    }
    v = k0(C, aW, 3);
    B = {};
    v && (B.za = j2(v, 1), B.na = j2(v, 2), B.Ha = !!eM(v, 3));
    v = k0(C, lm, 4) && j2(k0(C, lm, 4), 2) ? j2(k0(C, lm, 4), 2) : null;
    v = iU(v);
    C = null == j2(C, 12) ? null : j2(C, 12);
    C = i5(D.i, v, null == C ? null : new jr(null, {google_ml_rank: C}));
    v = D.a;
    D = D.$;
    var r = v.document;
    t = bL((new bB(r)).a, "DIV");
    var q = t.style;
    q.textAlign = "center";
    q.width = "100%";
    q.height = "auto";
    q.clear = B.Ha ? "both" : "none";
    B.Pa && cF(q, B.Pa);
    r = bL((new bB(r)).a, "INS");
    q = r.style;
    q.display = "block";
    q.margin = "auto";
    q.backgroundColor = "transparent";
    B.za && (q.marginTop = B.za);
    B.na && (q.marginBottom = B.na);
    B.Fa && cF(q, B.Fa);
    t.appendChild(r);
    B = {da: t, V: r};
    B.V.setAttribute("data-ad-format", "auto");
    t = [];
    if (r = C && C.oa) {
      B.da.className = r.join(" ")
    }
    r = B.V;
    r.className = "adsbygoogle";
    r.setAttribute("data-ad-client", D);
    t.length && r.setAttribute("data-ad-channel", t.join("+"));
    D:{
      try {
        var p = B.da;
        switch (x) {
          case 0:
            y.parentNode && y.parentNode.insertBefore(p, y);
            break;
          case 3:
            var l = y.parentNode;
            if (l) {
              var J = y.nextSibling;
              if (J && J.parentNode != l) {
                for (; J && 8 == J.nodeType;) {
                  J = J.nextSibling
                }
              }
              l.insertBefore(p, J)
            }
            break;
          case 1:
            y.insertBefore(p, y.firstChild);
            break;
          case 2:
            y.appendChild(p)
        }
        cP(y) && (y.setAttribute("data-init-display", y.style.display), y.style.display = "block");
        C:{
          var F = B.V;
          F.setAttribute("data-adsbygoogle-status", "reserved");
          F.className += " adsbygoogle-noablate";
          p = {element: F};
          var A = C && C.ua;
          if (F.hasAttribute("data-pub-vars")) {
            try {
              A = JSON.parse(F.getAttribute("data-pub-vars"))
            } catch (I) {
              break C
            }
            F.removeAttribute("data-pub-vars")
          }
          A && (p.params = A);
          (v.adsbygoogle = v.adsbygoogle || []).push(p)
        }
      } catch (I) {
        (F = B.da) && F.parentNode && (A = F.parentNode, A.removeChild(F), cP(A) && (A.style.display = A.getAttribute("data-init-display") || "none"));
        F = !1;
        break D
      }
      F = !0
    }
    return F ? B : null
  }

  function hB(l) {
    return l.a.google_ama_state = l.a.google_ama_state || {}
  }

  function gT() {
    this.b = new gy(this);
    this.a = 0
  }

  function f3(l) {
    if (0 != l.a) {
      throw Error("Already resolved/rejected.")
    }
  }

  function gy(l) {
    this.a = l
  }

  function fI(l) {
    switch (l.a.a) {
      case 0:
        break;
      case 1:
        l.b && l.b(l.a.h);
        break;
      case 2:
        l.f && l.f(l.a.f);
        break;
      default:
        throw Error("Unhandled deferred state.")
    }
  }

  function fn(p, l) {
    this.exception = l
  }

  function eR(p, l) {
    this.f = j8;
    this.a = p;
    this.b = l
  }

  eR.prototype.start = function () {
    this.h()
  };
  eR.prototype.h = function () {
    try {
      switch (this.f.document.readyState) {
        case"complete":
        case"interactive":
          hM(this.a, !0);
          ew(this);
          break;
        default:
          hM(this.a, !1) ? ew(this) : this.f.setTimeout(eN(this.h, this), 100)
      }
    } catch (l) {
      ew(this, l)
    }
  };

  function ew(p, l) {
    try {
      var t = p.b, r = new fn(new f5(hB(p.a).numAutoAdsPlaced || 0), l);
      f3(t);
      t.a = 1;
      t.h = r;
      fI(t.b)
    } catch (q) {
      p = p.b, l = q, f3(p), p.a = 2, p.f = l, fI(p.b)
    }
  }

  function d0(l) {
    h0(l, {atf: 1})
  }

  function dF(p, l) {
    (p.google_ama_state = p.google_ama_state || {}).exception = l;
    h0(p, {atf: 0})
  }

  function gI() {
    this.debugCard = null;
    this.debugCardRequested = !1
  }

  function gn(p, l) {
    if (!p) {
      return !1
    }
    p = p.hash;
    if (!p || !p.indexOf) {
      return !1
    }
    if (-1 != p.indexOf(l)) {
      return !0
    }
    l = fS(l);
    return "go" != l && -1 != p.indexOf(l) ? !0 : !1
  }

  function fS(p) {
    var l = "";
    fC(p.split("_"), function (a) {
      l += a.substr(0, 2)
    });
    return l
  }

  function fx(B, A, y) {
    var x = "script";
    x = void 0 === x ? "" : x;
    var v = B.createElement("link");
    try {
      v.rel = "preload";
      if (jP("preload", "stylesheet")) {
        var t = av(A).toString()
      } else {
        if (A instanceof aP) {
          var r = av(A).toString()
        } else {
          if (A instanceof i8) {
            var q = iN(A)
          } else {
            if (A instanceof i8) {
              var p = A
            } else {
              A = "object" == typeof A && A.f ? A.b() : String(A), iC.test(A) || (A = "about:invalid#zClosurez"), p = iq(A)
            }
            q = iN(p)
          }
          r = q
        }
        t = r
      }
      v.href = t
    } catch (l) {
      return
    }
    x && (v.as = x);
    y && v.setAttribute("nonce", y);
    if (B = B.getElementsByTagName("head")[0]) {
      try {
        B.appendChild(v)
      } catch (l) {
      }
    }
  }

  function e1(p) {
    var l = {}, q = {};
    return q.enable_page_level_ads = (l.pltais = !0, l), q.google_ad_client = p, q
  }

  function eG(l) {
    if (!l) {
      return ""
    }
    (l = l.toLowerCase()) && "ca-" != l.substring(0, 3) && (l = "ca-" + l);
    return l
  }

  function el(p, l) {
    function q(t) {
      try {
        var r = new c4(t);
        return cL(kY(r, cK, 2), function (v) {
          return 1 == j2(v, 1)
        })
      } catch (a) {
        return null
      }
    }

    l = void 0 === l ? "" : l;
    p = cJ(p) || p;
    p = dP(p);
    return l ? (l = eG(String(l)), p[l] ? q(p[l]) : null) : cL(c5(bs(p), q), function (a) {
      return null != a
    })
  }

  function du(p, l, r) {
    function q(a) {
      if (!a) {
        return !1
      }
      a = new c4(a);
      return j2(a, 3) && cr(j2(a, 3), l)
    }

    r = void 0 === r ? "" : r;
    p = cJ(p) || p;
    if (c8(p, l)) {
      return !0
    }
    p = dP(p);
    return r ? (r = eG(String(r)), q(p[r])) : bC(p, q)
  }

  function c8(p, l) {
    p = (p = (p = p.location && p.location.hash) && p.match(/forced_clientside_labs=([\d,]+)/)) && p[1];
    return !!p && cr(p.split(","), l.toString())
  }

  function dP(p) {
    try {
      return h2({}, JSON.parse(p.localStorage.getItem("google_adsense_settings")))
    } catch (l) {
      return {}
    }
  }

  function cY(p) {
    var l = du(j8, 12, p.google_ad_client);
    p = "google_ad_host" in p;
    var r = kO(j8, e3.g), q = gn(j8.location, "google_ads_preview");
    return l && !p && r || q
  }

  function cO(p) {
    if (j8.google_apltlad || cT(j8) != j8 || !p.google_ad_client) {
      return null
    }
    var l = cY(p), t = !kO(j8, en.U);
    if (!l && !t) {
      return null
    }
    j8.google_apltlad = !0;
    var r = e1(p.google_ad_client), q = r.enable_page_level_ads;
    jO(p, function (v, a) {
      bK[a] && "google_ad_client" != a && (q[a] = v)
    });
    l ? q.google_ad_channel = "AutoInsertAutoAdCode" : t && (q.google_pgb_reactive = 7, "google_ad_section" in p || "google_ad_region" in p) && (q.google_ad_section = p.google_ad_section || p.google_ad_region);
    return r
  }

  function cE(l) {
    return dM(l.enable_page_level_ads) && 7 == l.enable_page_level_ads.google_pgb_reactive
  }

  function ll(p) {
    try {
      var l = kQ(j8).eids || [];
      null != l && 0 < l.length && (p.eid = l.join(","))
    } catch (q) {
    }
  }

  function aV(l) {
    l.shv = eW()
  }

  aM.h = !eB;

  function cu(p, l) {
    return gU(l, p) + go(l, p, "height", kT)
  }

  var b9 = new kM(200, 399, ""), bZ = new kM(400, 499, ""), bP = new kM(600, 699, ""), bF = new kM(700, 799, ""),
    bv = new kM(800, 899, ""), bl = new kM(1, 399, "3"), a1 = new kM(0, 999, "5"), aI = new kM(400, 499, "6"),
    ay = new kM(500, 599, ""), an = new kM(0, 999, "7"), o = new kM(0, 999, "8");

  function d(l) {
    l = void 0 === l ? j8 : l;
    return l.ggeac || (l.ggeac = {})
  }

  function aR() {
    var l = {};
    this[3] = (l[8] = function (a) {
      return !!ga(a)
    }, l[9] = function (a) {
      a = ga(a);
      var p;
      if (p = "function" == eY(a)) {
        a = a && a.toString && a.toString(), p = j7(a) && jP(a, "[native code]")
      }
      return p
    }, l[10] = function () {
      return window == window.top
    }, l[16] = function () {
      return g9()
    }, l[22] = function () {
      return hv()
    }, l);
    l = {};
    this[4] = (l[5] = function (a) {
      a = fB(window, void 0 === a ? "" : a);
      return null != a ? a : void 0
    }, l[6] = function (a) {
      a = ga(a);
      return hx(a) ? a : void 0
    }, l);
    l = {};
    this[5] = (l[2] = function () {
      return window.location.href
    }, l[3] = function () {
      try {
        return window.top.location.hash
      } catch (a) {
        return ""
      }
    }, l[4] = function (a) {
      a = ga(a);
      return j7(a) ? a : void 0
    }, l)
  }

  fu(aR);

  function k6(l) {
    j3(this, l, kR, null)
  }

  j6(k6, j4);
  var kR = [2];
  k6.prototype.X = function () {
    return k2(this, 1, 0)
  };
  k6.prototype.W = function () {
    return k2(this, 7, 0)
  };

  function kn(l) {
    j3(this, l, jT, null)
  }

  j6(kn, j4);
  var jT = [2];
  kn.prototype.W = function () {
    return k2(this, 5, 0)
  };

  function jI(l) {
    j3(this, l, jx, null)
  }

  j6(jI, j4);

  function jn(l) {
    j3(this, l, i1, null)
  }

  j6(jn, j4);
  var jx = [1, 2], i1 = [2];
  jn.prototype.W = function () {
    return k2(this, 1, 0)
  };
  var iR = [12, 13];

  function iG(p, l) {
    var t = this, r = void 0 === l ? {} : l;
    l = void 0 === r.Ja ? !1 : r.Ja;
    var q = void 0 === r.Oa ? {} : r.Oa;
    r = void 0 === r.Xa ? [] : r.Xa;
    this.a = p;
    this.i = l;
    this.f = q;
    this.h = r;
    this.b = {};
    (p = eK()) && dB(p.split(",") || [], function (a) {
      (a = parseInt(a, 10)) && (t.b[a] = !0)
    })
  }

  function iv(p, l) {
    var r = [], q = h7(p.a, l);
    q.length && (9 !== l && (p.a = hW(p.a, l)), dB(q, function (t) {
      if (t = hL(p, t)) {
        var a = t.X();
        r.push(a);
        p.h.push(a);
        (t = kY(t, dI, 2)) && cx(t)
      }
    }));
    return r
  }

  function hA(p, l) {
    p.a.push.apply(p.a, kw(dr(c5(l, function (a) {
      return new jn(a)
    }), function (a) {
      return !cr(iR, a.W())
    })))
  }

  function hL(p, l) {
    var v = fA.j().a;
    if (!eU(k0(l, ht, 3), v)) {
      return null
    }
    var t = kY(l, k6, 2), r = v ? dr(t, function (a) {
      return eU(k0(a, ht, 3), v)
    }) : t, q = r.length;
    if (!q) {
      return null
    }
    t = k2(l, 4, 0);
    l = q * k2(l, 1, 0);
    if (!t) {
      return hp(p, r, l / 1000)
    }
    q = null != p.f[t] ? p.f[t] : 1000;
    if (0 >= q) {
      return null
    }
    r = hp(p, r, l / q);
    p.f[t] = r ? 0 : q - l;
    return r
  }

  function hp(p, l, t) {
    var r = p.b, q = cL(l, function (a) {
      return !!r[a.X()]
    });
    return q ? q : p.i ? null : ln(l, t, !1)
  }

  function g3(p, l) {
    kJ(b2, function (a) {
      p.b[a] = !0
    }, l);
    kJ(bS, function (a) {
      return iv(p, a)
    }, l);
    kJ(bI, function () {
      return p.h
    }, l);
    kJ(aU, function (a) {
      return hA(p, a)
    }, l)
  }

  function h7(p, l) {
    return (p = cL(p, function (a) {
      return a.W() == l
    })) && kY(p, kn, 2) || []
  }

  function hW(p, l) {
    return dr(p, function (a) {
      return a.W() != l
    })
  }

  function gS() {
    this.a = function () {
    }
  }

  fu(gS);

  function gx() {
    var l = aR.j();
    gS.j().a(l)
  }

  function f2(p, l) {
    var q = void 0 === q ? d() : q;
    q.hasOwnProperty("init-done") ? (kq(aU, q)(c5(kY(p, jn, 2), function (a) {
      return dq(a)
    })), kq(k9, q)(c5(kY(p, dI, 1), function (a) {
      return dq(a)
    })), fH(q)) : (g3(new iG(kY(p, jn, 2), l), q), jW(q), jL(q), jA(q), fH(q), cx(kY(p, dI, 1)), gx())
  }

  function fH(p) {
    var l = p = void 0 === p ? d() : p;
    fz(fU.j(), l);
    l = p;
    jq.j().a = kq(bo, l);
    gS.j().a = kq(kU, p)
  }

  function kE(p, l) {
    l && p.push(l)
  }

  function fm(p, l) {
    for (var r = [], q = 1; q < arguments.length; ++q) {
      r[q - 1] = arguments[q]
    }
    q = cJ(p) || p;
    q = (q = (q = q.location && q.location.hash) && (q.match(/google_plle=([\d,]+)/) || q.match(/deid=([\d,]+)/))) && q[1];
    return !!q && cV(r, es(jP, q))
  }

  function eQ(p, l, r) {
    for (var q = 0; q < r.length; q++) {
      if (fm(p, r[q])) {
        return r[q]
      }
    }
    return ln(r, l)
  }

  function kD(p, l, x, v, t, r) {
    r = void 0 === r ? 1 : r;
    for (var q = 0; q < t.length; q++) {
      if (fm(p, t[q])) {
        return t[q]
      }
    }
    r = void 0 === r ? 1 : r;
    0 >= v ? x = null : (q = new fW(x, x + v - 1), (v = v % r || v / r % t.length) || (v = l.b, v = !(v.start <= q.start && v.a >= q.a)), v ? x = null : (p = fB(p, l.a), x = null !== p && q.start <= p && q.a >= p ? t[Math.floor((p - x) / r) % t.length] : null));
    return x
  }

  function ev(p, l, y) {
    if (aE(p.document.getElementById(l).contentWindow)) {
      p = p.document.getElementById(l).contentWindow, l = p.document, l.body && l.body.firstChild || (/Firefox/.test(navigator.userAgent) ? l.open("text/html", "replace") : l.open(), p.google_async_iframe_close = !0, l.write(y))
    } else {
      p = p.document.getElementById(l).contentWindow;
      y = String(y);
      l = ['"'];
      for (var x = 0; x < y.length; x++) {
        var v = y.charAt(x), t = v.charCodeAt(0), r = x + 1, q;
        if (!(q = eX[v])) {
          if (!(31 < t && 127 > t)) {
            if (t = v, t in eC) {
              v = eC[t]
            } else {
              if (t in eX) {
                v = eC[t] = eX[t]
              } else {
                q = t.charCodeAt(0);
                if (31 < q && 127 > q) {
                  v = t
                } else {
                  if (256 > q) {
                    if (v = "\\x", 16 > q || 256 < q) {
                      v += "0"
                    }
                  } else {
                    v = "\\u", 4096 > q && (v += "0")
                  }
                  v += q.toString(16).toUpperCase()
                }
                v = eC[t] = v
              }
            }
          }
          q = v
        }
        l[r] = q
      }
      l.push('"');
      p.location.replace("javascript:" + l.join(""))
    }
  }

  var dZ = null;

  function kC(p, l, r, q) {
    q = void 0 === q ? !1 : q;
    kF.call(this, p, l);
    this.Y = r;
    this.Ma = q
  }

  iD(kC, kF);
  kC.prototype.ha = function () {
    return this.Y
  };
  kC.prototype.Z = function (p, l, v, t) {
    if (!v.google_ad_resize) {
      t.style.height = this.height() + "px";
      l = kO(p, cm.c) || "ca-pub-9118350542306317" === v.google_ad_client;
      t = d2(197) ? !kO(p, cm.c) : kO(p, cm.B);
      var r = kO(p, kH.c), q = kO(p, kH.T) || kO(p, kH.L) || kO(p, kH.K) || kO(p, kH.I) || kO(p, kH.J);
      if (kO(p, cm.c) || kO(p, cm.B) || r || q) {
        v.ovlp = !0
      }
      l ? v.rpe = !1 : t && (v.rpe = !0)
    }
  };

  function dE(l) {
    return function (a) {
      return !!(a.Y & l)
    }
  }

  var gH = dL("script");

  function gm(D, C, B, y, x, v, t, r, q, p, l, I, F, A) {
    this.sa = D;
    this.a = C;
    this.Y = void 0 === B ? null : B;
    this.f = void 0 === y ? null : y;
    this.ja = void 0 === x ? null : x;
    this.b = void 0 === v ? null : v;
    this.h = void 0 === t ? null : t;
    this.w = void 0 === r ? !1 : r;
    this.$ = void 0 === q ? !1 : q;
    this.Aa = void 0 === p ? null : p;
    this.Ba = void 0 === l ? null : l;
    this.i = void 0 === I ? null : I;
    this.s = void 0 === F ? null : F;
    this.Ca = void 0 === A ? null : A;
    this.ka = this.xa = this.ta = null
  }

  function fR(p, l, t) {
    null != p.Y && (t.google_responsive_formats = p.Y);
    null != p.ja && (t.google_safe_for_responsive_override = p.ja);
    null != p.b && (!0 === p.b ? t.google_full_width_responsive_allowed = !0 : (t.google_full_width_responsive_allowed = !1, t.gfwrnwer = p.b));
    null != p.h && !0 !== p.h && (t.gfwrnher = p.h);
    p.w && (t.google_bfa = p.w);
    p.$ && (t.ebfa = p.$);
    var r = p.s || t.google_ad_width;
    null != r && (t.google_resizing_width = r);
    r = p.i || t.google_ad_height;
    null != r && (t.google_resizing_height = r);
    r = p.a.M(l);
    var q = p.a.height();
    t.google_ad_resize || (t.google_ad_width = r, t.google_ad_height = q, t.google_ad_format = p.a.ea(l), t.google_responsive_auto_format = p.sa, null != p.f && (t.armr = p.f), t.google_ad_resizable = !0, t.google_override_format = 1, t.google_loader_features_used = 128, !0 === p.b && (t.gfwrnh = p.a.height() + "px"));
    null != p.Aa && (t.gfwroml = p.Aa);
    null != p.Ba && (t.gfwromr = p.Ba);
    null != p.i && (t.gfwroh = p.i);
    null != p.s && (t.gfwrow = p.s);
    null != p.Ca && (t.gfwroz = p.Ca);
    null != p.ta && (t.gml = p.ta);
    null != p.xa && (t.gmr = p.xa);
    null != p.ka && (t.gzi = p.ka);
    l = dp();
    l = cJ(l) || l;
    gn(l.location, "google_responsive_slot_debug") && (t.ds = "outline:thick dashed " + (r && q ? !0 !== p.b || !0 !== p.h ? "#ffa500" : "#0f0" : "#f00") + " !important;");
    !gn(l.location, "google_responsive_dummy_ad") || !cr([1, 2, 3, 4, 5, 6, 7, 8], p.sa) && 1 !== p.f || t.google_ad_resize || 2 === p.f || (p = JSON.stringify({
      googMsgType: "adpnt",
      key_value: [{key: "qid", value: "DUMMY_AD"}]
    }), t.dash = "<" + gH + ">window.top.postMessage('" + p + "', '*');\n          </" + gH + '>\n          <div id="dummyAd" style="width:' + r + "px;height:" + q + 'px;\n            background:#ddd;border:3px solid #f00;box-sizing:border-box;\n            color:#000;">\n            <p>Requested size:' + r + "x" + q + "</p>\n            <p>Rendered size:" + r + "x" + q + "</p>\n          </div>")
  }

  var fw = {},
    e0 = (fw.image_stacked = 1 / 1.91, fw.image_sidebyside = 1 / 3.82, fw.mobile_banner_image_sidebyside = 1 / 3.82, fw.pub_control_image_stacked = 1 / 1.91, fw.pub_control_image_sidebyside = 1 / 3.82, fw.pub_control_image_card_stacked = 1 / 1.91, fw.pub_control_image_card_sidebyside = 1 / 3.74, fw.pub_control_text = 0, fw.pub_control_text_card = 0, fw),
    eF = {},
    d9 = (eF.image_stacked = 80, eF.image_sidebyside = 0, eF.mobile_banner_image_sidebyside = 0, eF.pub_control_image_stacked = 80, eF.pub_control_image_sidebyside = 0, eF.pub_control_image_card_stacked = 85, eF.pub_control_image_card_sidebyside = 0, eF.pub_control_text = 80, eF.pub_control_text_card = 80, eF),
    dO = {},
    dt = (dO.pub_control_image_stacked = 100, dO.pub_control_image_sidebyside = 200, dO.pub_control_image_card_stacked = 150, dO.pub_control_image_card_sidebyside = 250, dO.pub_control_text = 100, dO.pub_control_text_card = 150, dO);

  function c7(p) {
    var l = 0;
    p.C && l++;
    p.u && l++;
    p.v && l++;
    if (3 > l) {
      return {A: "Tags data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num should be set together."}
    }
    l = p.C.split(",");
    var x = p.v.split(",");
    p = p.u.split(",");
    if (l.length !== x.length || l.length !== p.length) {
      return {A: 'Lengths of parameters data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num must match. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'}
    }
    if (2 < l.length) {
      return {A: "The parameter length of attribute data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num is too long. At most 2 parameters for each attribute are needed: one for mobile and one for desktop, while you are providing " + (l.length + ' parameters. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside".')}
    }
    for (var v = [], t = [], r = 0; r < l.length; r++) {
      var q = Number(x[r]);
      if (isNaN(q) || 0 === q) {
        return {A: "Wrong value '" + x[r] + "' for data-matched-content-rows-num."}
      }
      v.push(q);
      q = Number(p[r]);
      if (isNaN(q) || 0 === q) {
        return {A: "Wrong value '" + p[r] + "' for data-matched-content-columns-num."}
      }
      t.push(q)
    }
    return {v: v, u: t, ra: l}
  }

  function cX(l) {
    return 1200 <= l ? {width: 1200, height: 600} : 850 <= l ? {
      width: l,
      height: Math.floor(0.5 * l)
    } : 550 <= l ? {width: l, height: Math.floor(0.6 * l)} : 468 <= l ? {
      width: l,
      height: Math.floor(0.7 * l)
    } : {width: l, height: Math.floor(3.44 * l)}
  }

  var cN = ["google_content_recommendation_ui_type", "google_content_recommendation_columns_num", "google_content_recommendation_rows_num"];

  function cD(p, l) {
    kF.call(this, p, l)
  }

  iD(cD, kF);
  cD.prototype.M = function (l) {
    return Math.min(1200, Math.max(this.minWidth(), Math.round(l)))
  };

  function ct(p, l) {
    b8(p, l);
    if ("pedestal" == l.google_content_recommendation_ui_type) {
      return new gm(9, new cD(p, Math.floor(p * l.google_phwr)))
    }
    var q = aO();
    468 > p ? q ? (q = p - 8 - 8, q = Math.floor(q / 1.91 + 70) + Math.floor(11 * (q * e0.mobile_banner_image_sidebyside + d9.mobile_banner_image_sidebyside) + 96), p = {
      O: p,
      N: q,
      u: 1,
      v: 12,
      C: "mobile_banner_image_sidebyside"
    }) : (p = cX(p), p = {O: p.width, N: p.height, u: 1, v: 13, C: "image_sidebyside"}) : (p = cX(p), p = {
      O: p.width,
      N: p.height,
      u: 4,
      v: 2,
      C: "image_stacked"
    });
    bY(l, p);
    return new gm(9, new cD(p.O, p.N))
  }

  function bO(p, l) {
    b8(p, l);
    var x = c7({
      v: l.google_content_recommendation_rows_num,
      u: l.google_content_recommendation_columns_num,
      C: l.google_content_recommendation_ui_type
    });
    if (x.A) {
      p = {O: 0, N: 0, u: 0, v: 0, C: "image_stacked", A: x.A}
    } else {
      var v = 2 === x.ra.length && 468 <= p ? 1 : 0;
      var t = x.ra[v];
      t = 0 === t.indexOf("pub_control_") ? t : "pub_control_" + t;
      var r = dt[t];
      for (var q = x.u[v]; p / q < r && 1 < q;) {
        q--
      }
      r = q;
      x = x.v[v];
      v = Math.floor(((p - 8 * r - 8) / r * e0[t] + d9[t]) * x + 8 * x + 8);
      p = 1500 < p ? {width: 0, height: 0, ia: "Calculated slot width is too large: " + p} : 1500 < v ? {
        width: 0,
        height: 0,
        ia: "Calculated slot height is too large: " + v
      } : {width: p, height: v};
      p = p.ia ? {O: 0, N: 0, u: 0, v: 0, C: t, A: p.ia} : {O: p.width, N: p.height, u: r, v: x, C: t}
    }
    if (p.A) {
      throw new kL(p.A)
    }
    bY(l, p);
    return new gm(9, new cD(p.O, p.N))
  }

  function b8(p, l) {
    if (0 >= p) {
      throw new kL("Invalid responsive width from Matched Content slot " + l.google_ad_slot + ": " + p + ". Please ensure to put this Matched Content slot into a non-zero width div container.")
    }
  }

  function bY(p, l) {
    p.google_content_recommendation_ui_type = l.C;
    p.google_content_recommendation_columns_num = l.u;
    p.google_content_recommendation_rows_num = l.v
  }

  function bE(p, l) {
    kF.call(this, p, l)
  }

  iD(bE, kF);
  bE.prototype.M = function () {
    return this.minWidth()
  };
  bE.prototype.Z = function (p, l, v, t) {
    var r = this.M(l);
    gJ(p, t, t.parentElement, l, r, v);
    if (!v.google_ad_resize) {
      t.style.height = this.height() + "px";
      l = kO(p, cm.c) || "ca-pub-9118350542306317" === v.google_ad_client;
      t = d2(197) ? !kO(p, cm.c) : kO(p, cm.B);
      r = kO(p, kH.c);
      var q = kO(p, kH.T) || kO(p, kH.L) || kO(p, kH.K) || kO(p, kH.I) || kO(p, kH.J);
      if (kO(p, cm.c) || kO(p, cm.B) || r || q) {
        v.ovlp = !0
      }
      l ? v.rpe = !1 : t && (v.rpe = !0);
      if (kO(p, dl.c) || kO(p, dl.R) || kO(p, dl.P)) {
        v.ovlp = !0
      }
    }
  };

  function bu(l) {
    return function (a) {
      for (var p = l.length - 1; 0 <= p; --p) {
        if (!l[p](a)) {
          return !1
        }
      }
      return !0
    }
  }

  function bg(p, l, x) {
    for (var v = p.length, t = null, r = 0; r < v; ++r) {
      var q = p[r];
      if (l(q)) {
        if (!x || x(q)) {
          return q
        }
        null === t && (t = q)
      }
    }
    return t
  }

  var kB = [new kC(970, 90, 2), new kC(728, 90, 2), new kC(468, 60, 2), new kC(336, 280, 1), new kC(320, 100, 2), new kC(320, 50, 2), new kC(300, 600, 4), new kC(300, 250, 1), new kC(250, 250, 1), new kC(234, 60, 2), new kC(200, 200, 1), new kC(180, 150, 1), new kC(160, 600, 4), new kC(125, 125, 1), new kC(120, 600, 4), new kC(120, 240, 4), new kC(120, 120, 1, !0)],
    a0 = [kB[6], kB[12], kB[3], kB[0], kB[7], kB[14], kB[1], kB[8], kB[10], kB[4], kB[15], kB[2], kB[11], kB[5], kB[13], kB[9], kB[16]];

  function aH(p, l, t, r, q) {
    "false" != q.google_full_width_responsive || t.location && "#gfwrffwaifhp" == t.location.hash ? "autorelaxed" == l && (q.google_full_width_responsive || kO(t, i3.g)) || ax(l) || q.google_ad_resize ? (l = eS(p, t, r, q), t = !0 !== l ? {
      l: p,
      m: l
    } : {l: kG(t) || p, m: !0}) : t = {l: p, m: 2} : t = {l: p, m: 1};
    l = t.m;
    return !0 !== l ? {l: p, m: l} : r.parentElement ? {l: t.l, m: l} : {l: p, m: l}
  }

  function am(M, L, K, J, I) {
    var F = kV(247, function () {
      return aH(M, L, K, J, I)
    }), D = F.l;
    F = F.m;
    var C = !0 === F, B = kT(J.style.width), A = kT(J.style.height), y = n(D, L, K, J, I, C);
    D = y.H;
    C = y.G;
    var v = y.D, r = y.F, p = y.ha;
    y = y.Na;
    var q = c(L, p), x, t = (x = go(J, K, "marginLeft", kT)) ? x + "px" : "",
      l = (x = go(J, K, "marginRight", kT)) ? x + "px" : "";
    x = go(J, K, "zIndex") || "";
    return new gm(q, D, p, null, y, F, C, v, r, t, l, A, B, x)
  }

  function ax(l) {
    return "auto" == l || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(l)
  }

  function n(D, C, B, y, x, v) {
    C = "auto" == C ? 0.25 >= D / Math.min(1200, kG(B)) ? 4 : 3 : fJ(C);
    var t = !1, r = !1, q = aQ(B), p = 488 > kG(B);
    if (q && p || !q && aO()) {
      var l = f4(y, B);
      r = e2(y, B);
      t = !r && l;
      r = r && l
    }
    p = (t || q ? a0 : kB).slice(0);
    var I = 488 > kG(B), F = [fT(D), fy(I, B, y, r), dE(C)];
    null != x.google_max_responsive_height && F.push(em(x.google_max_responsive_height));
    q || F.push(k5(I));
    I = [function (a) {
      return !a.Ma
    }];
    if (t || r) {
      t = t && !q ? dv(B, y) : c9(B, y), I.push(em(t))
    }
    var A = bg(p, bu(F), bu(I));
    if (!A) {
      throw new kL("No slot size for availableWidth=" + D)
    }
    t = kV(248, function () {
      var J;
      D:if (v) {
        if (x.gfwrnh && (J = kT(x.gfwrnh))) {
          J = {H: new bE(D, J), G: !0, D: !1, F: !1};
          break D
        }
        if (aQ(B) || "true" == x.google_full_width_responsive || !e2(y, B) || x.google_resizing_allowed) {
          J = !1;
          var L = hC(B).clientHeight, K = gU(y, B), M = B.google_lpabyc, a = dQ(y, B);
          if (a && 2 < a && !B.google_bfabyc && (!M || K - M > L) && (L = 0.9 * hC(B).clientHeight, K = Math.min(L, kP(B, y, x)), L && K == L)) {
            K = B.google_pbfabyc;
            J = !K;
            if (kO(B, dl.R) || kO(B, dl.P)) {
              B.google_bfabyc = gU(y, B) + L;
              J = {H: new bE(D, Math.floor(L)), G: !0, D: !0, F: !0};
              break D
            }
            K || (B.google_pbfabyc = gU(y, B) + L)
          }
          L = D / 1.2;
          K = Math.min(L, kP(B, y, x));
          if (K < 0.5 * L || 100 > K) {
            K = L
          }
          if (kO(B, kH.L) || kO(B, kH.K) || kO(B, kH.I) || kO(B, kH.J)) {
            K *= 1.3
          }
          J = {H: new bE(D, Math.floor(K)), G: K < L ? 102 : !0, D: !1, F: J}
        } else {
          J = {H: new bE(D, A.height()), G: 101, D: !1, F: !1}
        }
      } else {
        J = {H: A, G: 100, D: !1, F: !1}
      }
      return J
    });
    return {H: t.H, G: t.G, D: t.D, F: t.F, ha: C, Na: l}
  }

  function kP(p, l, q) {
    return q.google_resizing_allowed || "true" == q.google_full_width_responsive ? Infinity : dv(p, l)
  }

  function c(p, l) {
    if ("auto" == p) {
      return 1
    }
    switch (l) {
      case 2:
        return 2;
      case 1:
        return 3;
      case 4:
        return 4;
      case 3:
        return 5;
      case 6:
        return 6;
      case 5:
        return 7;
      case 7:
        return 8
    }
    throw Error("bad mask")
  }

  function k5(l) {
    return function (a) {
      return !(320 == a.minWidth() && (l && 50 == a.height() || !l && 100 == a.height()))
    }
  }

  function aQ(l) {
    return d2(197) ? !kO(l, cm.c) : kO(l, cm.B)
  }

  var km = {
    "image-top": function (l) {
      return 600 >= l ? 284 + 0.414 * (l - 250) : 429
    }, "image-middle": function (l) {
      return 500 >= l ? 196 - 0.13 * (l - 250) : 164 + 0.2 * (l - 500)
    }, "image-side": function (l) {
      return 500 >= l ? 205 - 0.28 * (l - 250) : 134 + 0.21 * (l - 500)
    }, "text-only": function (l) {
      return 500 >= l ? 187 - 0.228 * (l - 250) : 130
    }, "in-article": function (l) {
      return 420 >= l ? l / 1.2 : 460 >= l ? l / 1.91 + 130 : 800 >= l ? l / 4 : 200
    }
  };

  function jS(p, l) {
    kF.call(this, p, l)
  }

  iD(jS, kF);
  jS.prototype.M = function () {
    return Math.min(1200, this.minWidth())
  };

  function jH(C, B, A, y, x) {
    var v = x.google_ad_layout || "image-top";
    if ("in-article" == v && "false" != x.google_full_width_responsive) {
      var t = fo(B, A, C, 0.2, x);
      if (!0 !== t) {
        x.gfwrnwer = t
      } else {
        if (t = kG(B)) {
          x.google_full_width_responsive_allowed = !0;
          var r = A.parentElement;
          if (r) {
            B:for (var q = A, p = 0; 100 > p && q.parentElement; ++p) {
              for (var l = q.parentElement.childNodes, F = 0; F < l.length; ++F) {
                var D = l[F];
                if (D != q && d1(B, D)) {
                  break B
                }
              }
              q = q.parentElement;
              q.style.width = "100%";
              q.style.height = "auto"
            }
            gJ(B, A, r, C, t, x);
            C = t
          }
        }
      }
    }
    if (250 > C) {
      throw new kL("Fluid responsive ads must be at least 250px wide: availableWidth=" + C)
    }
    C = Math.min(1200, Math.floor(C));
    if (y && "in-article" != v) {
      v = Math.ceil(y);
      if (50 > v) {
        throw new kL("Fluid responsive ads must be at least 50px tall: height=" + v)
      }
      return new gm(11, new kF(C, v))
    }
    if ("in-article" != v && (y = x.google_ad_layout_key)) {
      v = "" + y;
      B = Math.pow(10, 3);
      if (x = (A = v.match(/([+-][0-9a-z]+)/g)) && A.length) {
        y = [];
        for (t = 0; t < x; t++) {
          y.push(parseInt(A[t], 36) / B)
        }
        B = y
      } else {
        B = null
      }
      if (!B) {
        throw new kL("Invalid data-ad-layout-key value: " + v)
      }
      v = (C + -725) / 1000;
      A = 0;
      x = 1;
      y = B.length;
      for (t = 0; t < y; t++) {
        A += B[t] * x, x *= v
      }
      v = Math.ceil(1000 * A - -725 + 10);
      if (isNaN(v)) {
        throw new kL("Invalid height: height=" + v)
      }
      if (50 > v) {
        throw new kL("Fluid responsive ads must be at least 50px tall: height=" + v)
      }
      if (1200 < v) {
        throw new kL("Fluid responsive ads must be at most 1200px tall: height=" + v)
      }
      return new gm(11, new kF(C, v))
    }
    if (kO(B, h9.c) || kO(B, h9.aa) || kO(B, h9.ba)) {
      x.ovlp = !0
    }
    x = km[v];
    if (!x) {
      throw new kL("Invalid data-ad-layout value: " + v)
    }
    y = kO(B, h9.ba) || kO(B, h9.aa);
    A = e2(A, B);
    B = kG(B);
    B = "in-article" === v && !A && C === B && y ? Math.ceil(1.25 * x(C)) : Math.ceil(x(C));
    return new gm(11, "in-article" == v ? new jS(C, B) : new kF(C, B))
  }

  function jw(p, l) {
    kF.call(this, p, l)
  }

  iD(jw, kF);
  jw.prototype.M = function () {
    return this.minWidth()
  };
  jw.prototype.ea = function (l) {
    return kF.prototype.ea.call(this, l) + "_0ads_al"
  };
  var jm = [new jw(728, 15), new jw(468, 15), new jw(200, 90), new jw(180, 90), new jw(160, 90), new jw(120, 90)];

  function i0(p, l, v) {
    var t = 250, r = 90;
    t = void 0 === t ? 130 : t;
    r = void 0 === r ? 30 : r;
    var q = bg(jm, fT(p));
    if (!q) {
      throw new kL("No link unit size for width=" + p + "px")
    }
    p = Math.min(p, 1200);
    q = q.height();
    l = Math.max(q, l);
    t = (new gm(10, new jw(p, Math.min(l, 15 == q ? r : t)))).a;
    l = t.minWidth();
    t = t.height();
    15 <= v && (t = v);
    return new gm(10, new jw(l, t))
  }

  function iQ(p, l, t, r) {
    if ("false" == r.google_full_width_responsive) {
      return r.google_full_width_responsive_allowed = !1, r.gfwrnwer = 1, p
    }
    var q = eS(p, l, t, r);
    if (!0 !== q) {
      return r.google_full_width_responsive_allowed = !1, r.gfwrnwer = q, p
    }
    q = kG(l);
    if (!q) {
      return p
    }
    r.google_full_width_responsive_allowed = !0;
    gJ(l, t, t.parentElement, p, q, r);
    return q
  }

  function iF(p, l, x, v, t) {
    var r;
    (r = kG(l)) ? 488 > kG(l) ? l.innerHeight >= l.innerWidth ? (t.google_full_width_responsive_allowed = !0, gJ(l, x, x.parentElement, p, r, t), r = {
      l: r,
      m: !0
    }) : r = {l: p, m: 5} : r = {l: p, m: 4} : r = {l: p, m: 10};
    var q = r;
    r = q.l;
    q = q.m;
    if (!0 !== q || p == r) {
      return new gm(12, new kF(p, v), null, null, !0, q, 100)
    }
    p = n(r, "auto", l, x, t, !0);
    return new gm(1, p.H, p.ha, 2, !0, q, p.G, p.D, p.F)
  }

  function iu(p) {
    var l = p.google_ad_format;
    if ("autorelaxed" == l) {
      p:{
        if ("pedestal" != p.google_content_recommendation_ui_type) {
          l = k3(cN);
          for (var q = l.next(); !q.done; q = l.next()) {
            if (null != p[q.value]) {
              p = !0;
              break p
            }
          }
        }
        p = !1
      }
      return p ? 9 : 5
    }
    if (ax(l)) {
      return 1
    }
    if ("link" == l) {
      return 4
    }
    if ("fluid" == l) {
      return 8
    }
  }

  function h6(p, l, v, t, r) {
    r = l.offsetWidth || (v.google_ad_resize || (void 0 === r ? !1 : r)) && go(l, t, "width", kT) || v.google_ad_width || 0;
    !kO(t, bR.g) || 5 !== p && 9 !== p || (v.google_ad_format = "auto", v.google_ad_slot = "", p = 1);
    var q = (q = hV(p, r, l, v, t)) ? q : am(r, v.google_ad_format, t, l, v);
    q.a.Z(t, r, v, l);
    fR(q, r, v);
    1 != p && (p = q.a.height(), l.style.height = p + "px")
  }

  function hV(p, l, v, t, r) {
    var q = t.google_ad_height || go(v, r, "height", kT);
    switch (p) {
      case 5:
        return p = kV(247, function () {
          return aH(l, t.google_ad_format, r, v, t)
        }), q = p.l, p = p.m, !0 === p && l != q && gJ(r, v, v.parentElement, l, q, t), !0 === p ? t.google_full_width_responsive_allowed = !0 : (t.google_full_width_responsive_allowed = !1, t.gfwrnwer = p), hK(r) && (t.ovlp = !0), ct(q, t);
      case 9:
        return bO(l, t);
      case 4:
        return p = iQ(l, r, v, t), i0(p, c9(r, v), q);
      case 8:
        return jH(l, r, v, q, t);
      case 10:
        return iF(l, r, v, q, t)
    }
  }

  function hK(l) {
    return kO(l, i3.c) || kO(l, i3.g)
  }

  function kA(l) {
    this.h = [];
    this.b = l || window;
    this.a = 0;
    this.f = null;
    this.i = 0
  }

  var hz;
  j9 = kA.prototype;
  j9.Ia = function (p, l) {
    0 != this.a || 0 != this.h.length || l && l != window ? this.pa(p, l) : (this.a = 2, this.wa(new ho(p, window)))
  };
  j9.pa = function (p, l) {
    this.h.push(new ho(p, l || this.b));
    g2(this)
  };
  j9.Ra = function (p) {
    this.a = 1;
    if (p) {
      var l = kr(188, eN(this.va, this, !0));
      this.f = this.b.setTimeout(l, p)
    }
  };
  j9.va = function (l) {
    l && ++this.i;
    1 == this.a && (null != this.f && (this.b.clearTimeout(this.f), this.f = null), this.a = 0);
    g2(this)
  };
  j9.Ya = function () {
    return !(!window || !Array)
  };
  j9.La = function () {
    return this.i
  };

  function g2(p) {
    var l = kr(189, eN(p.Za, p));
    p.b.setTimeout(l, 0)
  }

  j9.Za = function () {
    if (0 == this.a && this.h.length) {
      var p = this.h.shift();
      this.a = 2;
      var l = kr(190, eN(this.wa, this, p));
      p.a.setTimeout(l, 0);
      g2(this)
    }
  };
  j9.wa = function (l) {
    this.a = 0;
    l.b()
  };

  function gR(p) {
    try {
      return p.sz()
    } catch (l) {
      return !1
    }
  }

  function gw(l) {
    return !!l && ("object" === typeof l || "function" === typeof l) && gR(l) && e6(l.nq) && e6(l.nqa) && e6(l.al) && e6(l.rl)
  }

  function f1() {
    if (hz && gR(hz)) {
      return hz
    }
    var p = gp(), l = p.google_jobrunner;
    return gw(l) ? hz = l : p.google_jobrunner = hz = new kA(p)
  }

  function fG(p, l) {
    f1().nq(p, l)
  }

  function fl(p, l) {
    f1().nqa(p, l)
  }

  kA.prototype.nq = kA.prototype.Ia;
  kA.prototype.nqa = kA.prototype.pa;
  kA.prototype.al = kA.prototype.Ra;
  kA.prototype.rl = kA.prototype.va;
  kA.prototype.sz = kA.prototype.Ya;
  kA.prototype.tc = kA.prototype.La;

  function ho(p, l) {
    this.b = p;
    this.a = l
  }

  function eP(p, l) {
    var t = cJ(l);
    if (t) {
      t = kG(t);
      var r = aX(p, l) || {}, q = r.direction;
      if ("0px" === r.width && "none" != r.cssFloat) {
        return -1
      }
      if ("ltr" === q && t) {
        return Math.floor(Math.min(1200, t - p.getBoundingClientRect().left))
      }
      if ("rtl" === q && t) {
        return p = l.document.body.getBoundingClientRect().right - p.getBoundingClientRect().right, Math.floor(Math.min(1200, t - p - Math.floor((t - l.document.body.clientWidth) / 2)))
      }
    }
    return -1
  }

  function eu(p) {
    var l = this;
    this.a = p;
    p.google_iframe_oncopy || (p.google_iframe_oncopy = {
      handlers: {}, upd: function (t, r) {
        var q = dY("rx", t), a = Number;
        p:{
          if (t && (t = t.match("dt=([^&]+)")) && 2 == t.length) {
            t = t[1];
            break p
          }
          t = ""
        }
        a = a(t);
        a = (new Date).getTime() - a;
        q = q.replace(/&dtd=(\d+|-?M)/, "&dtd=" + (100000 <= a ? "M" : 0 <= a ? a : "-M"));
        l.set(r, q);
        return q
      }
    });
    this.b = p.google_iframe_oncopy
  }

  eu.prototype.set = function (p, l) {
    var q = this;
    this.b.handlers[p] = l;
    this.a.addEventListener && this.a.addEventListener("load", function () {
      var t = q.a.document.getElementById(p);
      try {
        var r = t.contentWindow.document;
        if (t.onload && r && (!r.body || !r.body.firstChild)) {
          t.onload()
        }
      } catch (a) {
      }
    }, !1)
  };

  function dY(p, l) {
    var r = new RegExp("\\b" + p + "=(\\d+)"), q = r.exec(l);
    q && (l = l.replace(r, p + "=" + (+q[1] + 1 || 1)));
    return l
  }

  var dD,
    gG = "var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}";
  var kz = gG;
  /[\x00&<>"']/.test(kz) && (-1 != kz.indexOf("&") && (kz = kz.replace(k, "&amp;")), -1 != kz.indexOf("<") && (kz = kz.replace(aY, "&lt;")), -1 != kz.indexOf(">") && (kz = kz.replace(lo, "&gt;")), -1 != kz.indexOf('"') && (kz = kz.replace(k1, "&quot;")), -1 != kz.indexOf("'") && (kz = kz.replace(kv, "&#39;")), -1 != kz.indexOf("\x00") && (kz = kz.replace(j0, "&#0;")));
  gG = kz;
  dD = gG;
  var gl = {},
    fQ = (gl.google_ad_modifications = !0, gl.google_analytics_domain_name = !0, gl.google_analytics_uacct = !0, gl.google_pause_ad_requests = !0, gl);
  var fv = /^\.google\.(com?\.)?[a-z]{2,3}$/, eZ = /\.(cn|com\.bi|do|sl|ba|by|ma|am)$/;

  function eE(l) {
    return fv.test(l) && !eZ.test(l)
  }

  var d8 = j8;

  function dN(p) {
    p = "https://adservice" + (p + "/adsid/integrator.js");
    var l = ["domain=" + encodeURIComponent(j8.location.hostname)];
    ky[3] >= +new Date && l.push("adsid=" + encodeURIComponent(ky[1]));
    return p + "?" + l.join("&")
  }

  var ky, kx;

  function ds() {
    d8 = j8;
    ky = d8.googleToken = d8.googleToken || {};
    var l = +new Date;
    ky[1] && ky[3] > l && 0 < ky[2] || (ky[1] = "", ky[2] = -1, ky[3] = -1, ky[4] = "", ky[6] = "");
    kx = d8.googleIMState = d8.googleIMState || {};
    eE(kx[1]) || (kx[1] = ".google.com");
    d7(kx[5]) || (kx[5] = []);
    "boolean" == typeof kx[6] || (kx[6] = !1);
    d7(kx[7]) || (kx[7] = []);
    hx(kx[8]) || (kx[8] = 0)
  }

  var c6 = {
    fa: function () {
      return 0 < kx[8]
    }, Ua: function () {
      kx[8]++
    }, Va: function () {
      0 < kx[8] && kx[8]--
    }, Wa: function () {
      kx[8] = 0
    }, ab: function () {
      return !1
    }, Ka: function () {
      return kx[5]
    }, Ga: function (p) {
      try {
        p()
      } catch (l) {
        j8.setTimeout(function () {
          throw l
        }, 0)
      }
    }, Ta: function () {
      if (!c6.fa()) {
        var p = j8.document, l = function (v) {
          v = dN(v);
          p:{
            try {
              var t = hm();
              break p
            } catch (a) {
            }
            t = void 0
          }
          fx(p, v, t);
          t = p.createElement("script");
          t.type = "text/javascript";
          t.onerror = function () {
            return j8.processGoogleToken({}, 2)
          };
          v = br(v);
          ft(t, v);
          try {
            (p.head || p.body || p.documentElement).appendChild(t), c6.Ua()
          } catch (a) {
          }
        }, r = kx[1];
        l(r);
        ".google.com" != r && l(".google.com");
        l = {};
        var q = (l.newToken = "FBT", l);
        j8.setTimeout(function () {
          return j8.processGoogleToken(q, 1)
        }, 1000)
      }
    }
  };

  function cW() {
    j8.processGoogleToken = j8.processGoogleToken || function (B, A) {
      var y = B;
      y = void 0 === y ? {} : y;
      A = void 0 === A ? 0 : A;
      B = y.newToken || "";
      var x = "NT" == B, v = parseInt(y.freshLifetimeSecs || "", 10), t = parseInt(y.validLifetimeSecs || "", 10),
        r = y["1p_jar"] || "";
      y = y.pucrd || "";
      ds();
      1 == A ? c6.Wa() : c6.Va();
      var q = d8.googleToken = d8.googleToken || {},
        p = 0 == A && B && j7(B) && !x && hx(v) && 0 < v && hx(t) && 0 < t && j7(r);
      x = x && !c6.fa() && (!(ky[3] >= +new Date) || "NT" == ky[1]);
      var l = !(ky[3] >= +new Date) && 0 != A;
      if (p || x || l) {
        x = +new Date, v = x + 1000 * v, t = x + 1000 * t, 0.00001 > Math.random() && gD("https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err=" + A, null), q[5] = A, q[1] = B, q[2] = v, q[3] = t, q[4] = r, q[6] = y, ds()
      }
      if (p || !c6.fa()) {
        A = c6.Ka();
        for (B = 0; B < A.length; B++) {
          c6.Ga(A[B])
        }
        A.length = 0
      }
    };
    ds();
    ky[3] >= +new Date && ky[2] >= +new Date || c6.Ta()
  }

  var cM = dL("script");

  function cC() {
    kW.google_sa_impl && !kW.document.getElementById("google_shimpl") && (kW.google_sa_queue = null, kW.google_sl_win = null, kW.google_sa_impl = null);
    if (!kW.google_sa_queue) {
      kW.google_sa_queue = [];
      kW.google_sl_win = kW;
      kW.google_process_slots = function () {
        return cs(kW)
      };
      var l = b7();
      fx(kW.document, l);
      kO(kW, "20199335") || !hl() || j5("iPhone") && !j5("iPod") && !j5("iPad") || j5("iPad") || j5("iPod") ? j(kW.document, l).id = "google_shimpl" : (l = bL(document, "IFRAME"), l.id = "google_shimpl", l.style.display = "none", kW.document.documentElement.appendChild(l), ev(kW, "google_shimpl", "<!doctype html><html><body><" + (cM + ">google_sl_win=window.parent;google_async_iframe_id='google_shimpl';</") + (cM + ">") + bX() + "</body></html>"), l.contentWindow.document.close())
    }
  }

  var cs = kr(215, function (p) {
    var l = p.google_sa_queue, q = l.shift();
    p.google_sa_impl || jX("shimpl", {t: "no_fn"});
    "function" == eY(q) && kV(216, q);
    l.length && p.setTimeout(function () {
      return cs(p)
    }, 0)
  });

  function bN(p, l, q) {
    p.google_sa_queue = p.google_sa_queue || [];
    p.google_sa_impl ? q(l) : p.google_sa_queue.push(l)
  }

  function bX() {
    var l = b7();
    return "<" + cM + ' src="' + l + '"></' + cM + ">"
  }

  function b7() {
    var p = "/show_ads_impl.js";
    p = void 0 === p ? "/show_ads_impl.js" : p;
    p:{
      if (eB) {
        try {
          var l = kW.google_cafe_host || kW.top.google_cafe_host;
          if (l) {
            var r = l;
            break p
          }
        } catch (q) {
        }
      }
      r = gN()
    }
    return iJ(r, ["/pagead/js/", eW(), "/r20190131", p, ""].join(""), "https")
  }

  function bD(p, l, r, q) {
    return function () {
      var v = !1;
      q && f1().al(30000);
      try {
        ev(p, l, r), v = !0
      } catch (a) {
        var t = gp().google_jobrunner;
        gw(t) && t.rl()
      }
      v && (v = dY("google_async_rrc", r), (new eu(p)).set(l, bD(p, l, v, !1)))
    }
  }

  function bt(A) {
    if (!dZ) {
      A:{
        for (var y = [j8.top], x = [], v = 0, t; t = y[v++];) {
          x.push(t);
          try {
            if (t.frames) {
              for (var r = t.frames.length, q = 0; q < r && 1024 > y.length; ++q) {
                y.push(t.frames[q])
              }
            }
          } catch (l) {
          }
        }
        for (y = 0; y < x.length; y++) {
          try {
            var p = x[y].frames.google_esf;
            if (p) {
              dZ = p;
              break A
            }
          } catch (l) {
          }
        }
        dZ = null
      }
    }
    if (!dZ) {
      if (/[^a-z0-9-]/.test(A)) {
        return null
      }
      x = bL(document, "IFRAME");
      x.id = "google_esf";
      x.name = "google_esf";
      p = i4(fs("", "googleads.g.doubleclick.net"), ["/pagead/html/", eW(), "/r20190131/zrt_lookup.html#", encodeURIComponent("")].join(""));
      x.src = p;
      x.style.display = "none";
      x.setAttribute("data-ad-client", eG(A));
      return x
    }
    return null
  }

  function a9(p, l, q) {
    aZ(p, l, q, function (B, A, y) {
      B = B.document;
      for (var x = A.id, v = 0; !x || B.getElementById(x + "_anchor");) {
        x = "aswift_" + v++
      }
      A.id = x;
      A.name = x;
      x = Number(y.google_ad_width || 0);
      v = Number(y.google_ad_height || 0);
      var t = y.ds || "";
      t && (t += t.endsWith(";") ? "" : ";");
      var r = "";
      if (!y.google_enable_single_iframe) {
        r = ["<iframe"];
        for (a in A) {
          A.hasOwnProperty(a) && r.push(a + "=" + A[a])
        }
        r.push('style="left:0;position:absolute;top:0;border:0px;width:' + (x + "px;height:" + (v + 'px;"')));
        r.push("></iframe>");
        r = r.join(" ")
      }
      var a = A.id;
      var C = "";
      C = void 0 === C ? "" : C;
      x = "border:none;height:" + v + "px;margin:0;padding:0;position:relative;visibility:visible;width:" + (x + "px;background-color:transparent;");
      a = ['<ins id="' + (a + '_expand"'), ' style="display:inline-table;' + x + (void 0 === t ? "" : t) + '"', C ? ' data-ad-slot="' + C + '">' : ">", '<ins id="' + (a + '_anchor" style="display:block;') + x + '">', r, "</ins></ins>"].join("");
      16 == y.google_reactive_ad_format ? (y = B.createElement("div"), y.innerHTML = a, q.appendChild(y.firstChild)) : q.innerHTML = a;
      return A.id
    })
  }

  function aZ(p, l, y, x) {
    var v = l.google_ad_width, t = l.google_ad_height;
    kO(p, iI.g) ? (jB(!0), l.google_enable_single_iframe = !0) : kO(p, iI.c) && jB(!1);
    var r = {};
    null != v && (r.width = v && '"' + v + '"');
    null != t && (r.height = t && '"' + t + '"');
    r.frameborder = '"0"';
    r.marginwidth = '"0"';
    r.marginheight = '"0"';
    r.vspace = '"0"';
    r.hspace = '"0"';
    r.allowtransparency = '"true"';
    r.scrolling = '"no"';
    r.allowfullscreen = '"true"';
    r.onload = '"' + dD + '"';
    x = x(p, r, l);
    aG(p, y, l);
    (y = bt(l.google_ad_client)) && p.document.documentElement.appendChild(y);
    y = dW;
    v = (new Date).getTime();
    l.google_lrv = eW();
    l.google_async_iframe_id = x;
    l.google_unique_id = eq(p);
    l.google_start_time = y;
    l.google_bpp = v > y ? v - y : 1;
    l.google_async_rrc = 0;
    p.google_sv_map = p.google_sv_map || {};
    p.google_sv_map[x] = l;
    p.google_t12n_vars = fp;
    if (l.google_enable_single_iframe) {
      var q = {pubWin: p, iframeWin: null, vars: l};
      bN(p, function () {
        p.google_sa_impl(q)
      }, p.document.getElementById(x + "_anchor") ? fG : fl)
    } else {
      bN(p, bD(p, x, ["<!doctype html><html><body>", "<" + cM + ">", "google_sl_win=window.parent;google_iframe_start_time=new Date().getTime();", 'google_async_iframe_id="' + x + '";', "</" + cM + ">", "<" + cM + ">window.parent.google_sa_impl({iframeWin: window, pubWin: window.parent, vars: window.parent['google_sv_map']['" + (x + "']});</") + cM + ">", "</body></html>"].join(""), !0), p.document.getElementById(x) ? fG : fl)
    }
  }

  function aG(D, C, B) {
    var y = B.google_ad_output, x = B.google_ad_format, v = B.google_ad_width || 0, t = B.google_ad_height || 0;
    x || "html" != y && null != y || (x = v + "x" + t);
    y = !B.google_ad_slot || B.google_override_format || !b5[B.google_ad_width + "x" + B.google_ad_height] && "aa" == B.google_loader_used;
    x && y ? x = x.toLowerCase() : x = "";
    B.google_ad_format = x;
    if (!hx(B.google_reactive_sra_index) || !B.google_ad_unit_key) {
      x = [B.google_ad_slot, B.google_orig_ad_format || B.google_ad_format, B.google_ad_type, B.google_orig_ad_width || B.google_ad_width, B.google_orig_ad_height || B.google_ad_height];
      y = [];
      v = 0;
      for (t = C; t && 25 > v; t = t.parentNode, ++v) {
        9 === t.nodeType ? y.push("") : y.push(t.id)
      }
      (y = y.join()) && x.push(y);
      B.google_ad_unit_key = jD(x.join(":")).toString();
      var r = void 0 === r ? !1 : r;
      x = [];
      for (y = 0; C && 25 > y; ++y) {
        v = "";
        void 0 !== r && r || (v = (v = 9 !== C.nodeType && C.id) ? "/" + v : "");
        D:{
          if (C && C.nodeName && C.parentElement) {
            t = C.nodeName.toString().toLowerCase();
            for (var q = C.parentElement.childNodes, p = 0, l = 0; l < q.length; ++l) {
              var J = q[l];
              if (J.nodeName && J.nodeName.toString().toLowerCase() === t) {
                if (C === J) {
                  t = "." + p;
                  break D
                }
                ++p
              }
            }
          }
          t = ""
        }
        x.push((C.nodeName && C.nodeName.toString().toLowerCase()) + v + t);
        C = C.parentElement
      }
      r = x.join() + ":";
      C = [];
      if (D) {
        try {
          var F = D.parent;
          for (x = 0; F && F !== D && 25 > x; ++x) {
            var A = F.frames;
            for (y = 0; y < A.length; ++y) {
              if (D === A[y]) {
                C.push(y);
                break
              }
            }
            D = F;
            F = D.parent
          }
        } catch (I) {
        }
      }
      B.google_ad_dom_fingerprint = jD(r + C.join()).toString()
    }
  }

  function aw(p, l) {
    p = p.attributes;
    for (var x = p.length, v = 0; v < x; v++) {
      var t = p[v];
      if (/data-/.test(t.name)) {
        var r = H(t.name.replace("data-matched-content", "google_content_recommendation").replace("data", "google").replace(/-/g, "_"));
        if (!l.hasOwnProperty(r)) {
          t = t.value;
          var q = {};
          q = (q.google_reactive_ad_format = f8, q.google_allow_expandable_ads = iM, q);
          t = q.hasOwnProperty(r) ? q[r](t, null) : t;
          null === t || (l[r] = t)
        }
      }
    }
  }

  function al(l) {
    if (l = gs(l)) {
      switch (l.data && l.data.autoFormat) {
        case"rspv":
          return 13;
        case"mcrspv":
          return 15;
        default:
          return 14
      }
    } else {
      return 12
    }
  }

  function m(C, B, A) {
    aw(C, B);
    if (A.document && A.document.body && !iu(B) && !B.google_reactive_ad_format) {
      var y = parseInt(C.style.width, 10), x = eP(C, A);
      if (0 < x && y > x) {
        var v = parseInt(C.style.height, 10);
        y = !!b5[y + "x" + v];
        var t = x;
        if (y) {
          var r = bV(x, v);
          if (r) {
            t = r, B.google_ad_format = r + "x" + v + "_0ads_al"
          } else {
            throw new kL("No slot size for availableWidth=" + x)
          }
        }
        B.google_ad_resize = !0;
        B.google_ad_width = t;
        y || (B.google_ad_format = null, B.google_override_format = !0);
        x = t;
        C.style.width = x + "px";
        v = am(x, "auto", A, C, B);
        t = x;
        v.a.Z(A, t, B, C);
        fR(v, t, B);
        v = v.a;
        B.google_responsive_formats = null;
        v.minWidth() > x && !y && (B.google_ad_width = v.minWidth(), C.style.width = v.minWidth() + "px")
      }
    }
    y = C.offsetWidth || go(C, A, "width", kT) || B.google_ad_width || 0;
    C:{
      x = es(am, y, "auto", A, C, B, !1, !0);
      r = kO(A, k8.c);
      var q = kO(A, k8.g);
      v = kO(A, jV.c);
      t = kO(A, jV.g);
      var p = du(A, 11, B.google_ad_client), l = kO(A, jz.g);
      var D = B.google_ad_client;
      D = null != el(A, void 0 === D ? "" : D);
      if (!(r || q || p || D) || !aO() || B.google_reactive_ad_format || iu(B) || g5(C, B) || B.google_ad_resize || cT(A) != A) {
        y = !1
      } else {
        for (q = C; q; q = q.parentElement) {
          if (p = aX(q, A), !p || !cr(["static", "relative"], p.position)) {
            y = !1;
            break C
          }
        }
        if (!0 !== fo(A, C, y, 0.3, B)) {
          y = !1
        } else {
          B.google_resizing_allowed = !0;
          q = gn(A.location, "google_responsive_slot_debug");
          p = kI(dH(), 142);
          if (q || Math.random() < p) {
            B.ovlp = !0
          }
          r || t || l ? (r = {}, fR(x(), y, r), B.google_resizing_width = r.google_ad_width, B.google_resizing_height = r.google_ad_height, r.ds && (B.ds = r.ds), B.iaaso = !1) : (B.google_ad_format = "auto", B.iaaso = !0, B.armr = 1);
          (y = v ? "AutoOptimizeAdSizeVariant" : t ? "AutoOptimizeAdSizeOriginal" : null) && (B.google_ad_channel = B.google_ad_channel ? [B.google_ad_channel, y].join("+") : y);
          y = !0
        }
      }
    }
    if (x = iu(B)) {
      h6(x, C, B, A, y)
    } else {
      if (g5(C, B)) {
        if (y = aX(C, A)) {
          C.style.width = y.width, C.style.height = y.height, hr(y, B)
        }
        B.google_ad_width || (B.google_ad_width = C.offsetWidth);
        B.google_ad_height || (B.google_ad_height = C.offsetHeight);
        B.google_loader_features_used = 256;
        B.google_responsive_auto_format = al(A)
      } else {
        hr(C.style, B), 300 == B.google_ad_width && 250 == B.google_ad_height && (y = C.style.width, C.style.width = "100%", x = C.offsetWidth, C.style.width = y, B.google_available_width = x)
      }
      A.location && "#gfwmrp" == A.location.hash || 12 == B.google_responsive_auto_format && "true" == B.google_full_width_responsive && !kO(A, cG.g) ? h6(10, C, B, A, !1) : kO(A, cw.g) && 12 == B.google_responsive_auto_format && (C = eS(C.offsetWidth || parseInt(C.style.width, 10) || B.google_ad_width, A, C, B), !0 !== C ? (B.efwr = !1, B.gfwrnwer = C) : B.efwr = !0)
    }
  }

  function b(p) {
    var l;
    this.b = l = void 0 === l ? document : l;
    this.h = void 0 === p ? 0 : p;
    this.f = k4(this, "__gads=");
    this.i = !1;
    this.a = null;
    this.s = !1;
    kN(this)
  }

  b.prototype.w = function (l) {
    this.h = l;
    kN(this)
  };

  function kl(p, l) {
    var r = aM;
    var q = void 0 === q ? jR : q;
    1 != p.h && (p.f || p.i) && (kW._setgfp_ = a5(r, 629, function (y) {
      delete kW._setgfp_;
      if (!y) {
        throw Error("Invalid JSONP response")
      }
      if (y = y._cookies_) {
        var x = y[0];
        if (!x) {
          throw Error("Invalid JSONP response")
        }
        var v = x._value_, t = x._expires_;
        y = x._path_;
        x = x._domain_;
        if (!(j7(v) && hx(t) && j7(y) && j7(x))) {
          throw Error("Invalid JSONP response")
        }
        var a = new cA;
        v = dA(a, 1, v);
        t = dA(v, 2, t);
        y = dA(t, 3, y);
        y = [dA(y, 4, x)];
        y.length && (p.a = y[0], y = p.a && j2(p.a, 1)) && (p.f = y, null != p.a && p.f && (y = new Date, y.setTime(1000 * j2(p.a, 2)), x = "." + j2(p.a, 4), y = "__gads=" + p.f + ("; expires=" + y.toGMTString()) + ("; path=" + j2(p.a, 3) + "; domain=" + x), p.b.cookie = y))
      }
    }), j(p.b, q({domain: p.b.domain, clientId: l, value: p.f, cookieEnabled: p.i})))
  }

  function jR(p) {
    var l = p.value, q = p.cookieEnabled;
    p = "https://partner.googleadservices.com/gampad/cookie.js?domain=" + p.domain + "&callback=_setgfp_&client=" + p.clientId;
    l && (p += "&cookie=" + encodeURIComponent(l));
    q && (p += "&cookie_enabled=1");
    return p
  }

  function kN(p) {
    if (!p.f && !p.s && 1 != p.h) {
      p.b.cookie = "GoogleAdServingTest=Good";
      var l = "Good" === k4(p, "GoogleAdServingTest=");
      if (l) {
        var r = p.b, q = new Date;
        q.setTime((new Date).valueOf() + -1);
        r.cookie = "GoogleAdServingTest=; expires=" + q.toGMTString()
      }
      p.i = l;
      p.s = !0
    }
  }

  function k4(p, l) {
    p = p.b.cookie;
    var q = p.indexOf(l);
    if (-1 === q) {
      return ""
    }
    l = q + l.length;
    q = p.indexOf(";", l);
    -1 == q && (q = p.length);
    return p.substring(l, q)
  }

  function jG(l) {
    return c3.test(l.className) && "done" != l.getAttribute("data-adsbygoogle-status")
  }

  function jv(p, l) {
    var q = window;
    p.setAttribute("data-adsbygoogle-status", "done");
    jl(p, l, q)
  }

  function jl(p, l, t) {
    var r = dp();
    r.google_spfd || (r.google_spfd = m);
    (r = l.google_reactive_ads_config) || m(p, l, t);
    if (!iZ(p, l, t)) {
      r || (t.google_lpabyc = cu(t, p));
      if (r) {
        r = r.page_level_pubvars || {};
        if (kQ(kW).page_contains_reactive_tag && !kQ(kW).allow_second_reactive_tag) {
          if (r.pltais) {
            cp(!1);
            return
          }
          throw new kL("Only one 'enable_page_level_ads' allowed per page.")
        }
        kQ(kW).page_contains_reactive_tag = !0;
        cp(7 === r.google_pgb_reactive)
      } else {
        eL(t)
      }
      if (!kQ(kW).per_pub_js_loaded) {
        kQ(kW).per_pub_js_loaded = !0;
        try {
          t.localStorage.removeItem("google_pub_config")
        } catch (q) {
        }
      }
      fC(fQ, function (v, a) {
        l[a] = l[a] || t[a]
      });
      l.google_loader_used = "aa";
      l.google_reactive_tag_first = 1 === (kQ(kW).first_tag_on_page || 0);
      kV(164, function () {
        a9(t, l, p)
      })
    }
  }

  function iZ(p, l, y) {
    var x = l.google_reactive_ads_config;
    if (x) {
      var v = x.page_level_pubvars;
      var t = (dM(v) ? v : {}).google_tag_origin
    }
    v = j7(p.className) && /(\W|^)adsbygoogle-noablate(\W|$)/.test(p.className);
    var r = l.google_ad_slot;
    var q = t || l.google_tag_origin;
    t = kQ(y);
    b4(t.ad_whitelist || [], r, q) ? r = null : (q = t.space_collapsing || "none", r = (r = b4(t.ad_blacklist || [], r)) ? {
      ma: !0,
      ya: r.space_collapsing || q
    } : t.remove_ads_by_default ? {ma: !0, ya: q, ca: t.ablation_viewport_offset} : null);
    if (r && r.ma && "on" != l.google_adtest && !v && (v = dQ(p, y), !r.ca || r.ca && (v || 0) >= r.ca)) {
      return p.className += " adsbygoogle-ablated-ad-slot", y = y.google_sv_map = y.google_sv_map || {}, x = gP(p), y[l.google_element_uid] = l, p.setAttribute("google_element_uid", x), "slot" == r.ya && (null !== iW(p.getAttribute("width")) && p.setAttribute("width", 0), null !== iW(p.getAttribute("height")) && p.setAttribute("height", 0), p.style.width = "0px", p.style.height = "0px"), !0
    }
    if ((v = aX(p, y)) && "none" == v.display && !("on" == l.google_adtest || 0 < l.google_reactive_ad_format || x)) {
      return y.document.createComment && p.appendChild(y.document.createComment("No ad requested because of display:none on the adsbygoogle tag")), !0
    }
    p = null == l.google_pgb_reactive || 3 === l.google_pgb_reactive;
    return 1 !== l.google_reactive_ad_format && 8 !== l.google_reactive_ad_format || !p ? !1 : (j8.console && j8.console.warn("Adsbygoogle tag with data-reactive-ad-format=" + l.google_reactive_ad_format + " is deprecated. Check out page-level ads at https://www.google.com/adsense"), !0)
  }

  function iP(p) {
    var l = document.getElementsByTagName("INS");
    for (var t = 0, r = l[t]; t < l.length; r = l[++t]) {
      var q = r;
      if (jG(q) && "reserved" != q.getAttribute("data-adsbygoogle-status") && (!p || r.id == p)) {
        return r
      }
    }
    return null
  }

  function iE() {
    var l = bL(document, "INS");
    l.className = "adsbygoogle";
    l.className += " adsbygoogle-noablate";
    iB(l);
    return l
  }

  function it(p) {
    var l = {};
    fC(h1, function (t, a) {
      !1 === p.enable_page_level_ads ? l[a] = !1 : p.hasOwnProperty(a) && (l[a] = p[a])
    });
    dM(p.enable_page_level_ads) && (l.page_level_pubvars = p.enable_page_level_ads);
    var r = iE();
    cq.body.appendChild(r);
    var q = {};
    q = (q.google_reactive_ads_config = l, q.google_ad_client = p.google_ad_client, q);
    q.google_pause_ad_requests = kQ(kW).pause_ad_requests || !1;
    jv(r, q)
  }

  function h5(l) {
    return "complete" == l.readyState || "interactive" == l.readyState
  }

  function hU(p) {
    function l() {
      return it(p)
    }

    var t = void 0 === t ? cq : t;
    var r = cJ(window);
    if (!r) {
      throw new kL("Page-level tag does not work inside iframes.")
    }
    hN(r).wasPlaTagProcessed = !0;
    if (t.body || h5(t)) {
      l()
    } else {
      var q = bM(kr(191, l));
      gY(t, "DOMContentLoaded", q);
      (new j8.MutationObserver(function (v, a) {
        t.body && (q(), a.disconnect())
      })).observe(t, {childList: !0, subtree: !0})
    }
  }

  function hJ(p) {
    var l = {};
    kV(165, function () {
      hy(p, l)
    }, function (a) {
      a.client = a.client || l.google_ad_client || p.google_ad_client;
      a.slotname = a.slotname || l.google_ad_slot;
      a.tag_origin = a.tag_origin || l.google_tag_origin
    })
  }

  function hn(l) {
    delete l.google_checked_head;
    jO(l, function (a, p) {
      bK[p] || (delete l[p], a = p.replace("google", "data").replace(/_/g, "-"), j8.console.warn("AdSense head tag doesn't support " + a + " attribute."))
    })
  }

  function g1(p) {
    var l = kW._gfp_;
    if (void 0 === l || 1 === l) {
      kO(kW, bx.g) ? kl(kW._gfp_ = new b(l ? 1 : 0), p) : kW._gfp_ = 2
    }
  }

  function gQ() {
    var p = d2(201), l = kO(kW, f.g), q = kO(kW, f.c);
    return l || p && !q
  }

  function hy(p, l) {
    if (null == p) {
      throw new kL("push() called with no parameters.")
    }
    dW = (new Date).getTime();
    cC();
    p:{
      if (void 0 != p.enable_page_level_ads) {
        if (j7(p.google_ad_client)) {
          var r = !0;
          break p
        }
        throw new kL("'google_ad_client' is missing from the tag config.")
      }
      r = !1
    }
    if (r) {
      gv(p, l)
    } else {
      if ((r = p.params) && fC(r, function (t, a) {
        l[a] = t
      }), "js" === l.google_ad_output) {
        console.warn("Ads with google_ad_output='js' have been deprecated and no longer work. Contact your AdSense account manager or switch to standard AdSense ads.")
      } else {
        p = f0(p.element);
        aw(p, l);
        r = kQ(j8).head_tag_slot_vars || {};
        jO(r, function (t, a) {
          l.hasOwnProperty(a) || (l[a] = t)
        });
        if (p.hasAttribute("data-require-head") && !kQ(j8).head_tag_slot_vars) {
          throw new kL("AdSense head tag is missing. AdSense body tags don't work without the head tag. You can copy the head tag from your account on https://adsense.com.")
        }
        if (gQ() && !l.google_ad_client) {
          throw new kL("Ad client is missing from the slot.")
        }
        var q = (r = 0 === (kQ(kW).first_tag_on_page || 0) && cO(l)) && cE(r);
        r && !q && (gv(r), kQ(kW).skip_next_reactive_tag = !0);
        0 === (kQ(kW).first_tag_on_page || 0) && (kQ(kW).first_tag_on_page = 2);
        g1(l.google_ad_client);
        l.google_pause_ad_requests = kQ(kW).pause_ad_requests || !1;
        jv(p, l);
        r && q && fF(r)
      }
    }
  }

  function fF(p) {
    function l() {
      hN(j8).wasPlaTagProcessed || j8.adsbygoogle && j8.adsbygoogle.push(p)
    }

    h5(cq) ? l() : gY(cq, "DOMContentLoaded", bM(l))
  }

  function gv(D, C) {
    if (kQ(kW).skip_next_reactive_tag) {
      kQ(kW).skip_next_reactive_tag = !1
    } else {
      0 === (kQ(kW).first_tag_on_page || 0) && (kQ(kW).first_tag_on_page = 1);
      C && D.tag_partner && (cz(j8, D.tag_partner), cz(C, D.tag_partner));
      D:if (!kQ(kW).ama_ran_on_page) {
        try {
          var A = j8.localStorage.getItem("google_ama_config")
        } catch (B) {
          A = null
        }
        try {
          var y = A ? new jY(A ? JSON.parse(A) : null) : null
        } catch (B) {
          y = null
        }
        if (C = y) {
          if (A = k0(C, jC, 3), !A || j2(A, 1) <= +new Date) {
            try {
              j8.localStorage.removeItem("google_ama_config")
            } catch (B) {
              h0(j8, {lserr: 1})
            }
          } else {
            if (cE(D) && (A = hQ(j8.location.pathname, kY(C, js, 7)), !A || !eM(A, 8))) {
              break D
            }
            kQ(kW).ama_ran_on_page = !0;
            k0(C, iL, 13) && 1 === j2(k0(C, iL, 13), 1) && (A = 0, k0(k0(C, iL, 13), iA, 6) && j2(k0(k0(C, iL, 13), iA, 6), 3) && (A = j2(k0(k0(C, iL, 13), iA, 6), 3) || 0), y = kQ(j8), y.remove_ads_by_default = !0, y.space_collapsing = "slot", y.ablation_viewport_offset = A);
            hZ(3, [dq(C)]);
            A = D.google_ad_client;
            y = i5(iK, new jr(null, hP(dM(D.enable_page_level_ads) ? D.enable_page_level_ads : {})));
            try {
              var x = hQ(j8.location.pathname, kY(C, js, 7)), v;
              if (v = x) {
                C:{
                  var t = j2(x, 2);
                  if (t) {
                    for (var r = 0; r < t.length; r++) {
                      if (1 == t[r]) {
                        v = !0;
                        break C
                      }
                    }
                  }
                  v = !1
                }
              }
              if (v) {
                if (j2(x, 4)) {
                  v = {};
                  var q = new jr(null, (v.google_package = j2(x, 4), v));
                  y = i5(y, q)
                }
                var p = new hX(A, C, x, y), l = new gT;
                (new eR(p, l)).start();
                var I = l.b;
                var F = es(dF, j8);
                if (I.b) {
                  throw Error("Then functions already set.")
                }
                I.b = es(d0, j8);
                I.f = F;
                fI(I)
              }
            } catch (B) {
              h0(j8, {atf: -1})
            }
          }
        }
      }
      hU(D)
    }
  }

  function f0(l) {
    if (l) {
      if (!jG(l) && (l.id ? l = iP(l.id) : l = null, !l)) {
        throw new kL("'element' has already been filled.")
      }
      if (!("innerHTML" in l)) {
        throw new kL("'element' is not a good DOM element.")
      }
    } else {
      if (l = iP(), !l) {
        throw new kL("All ins elements in the DOM with class=adsbygoogle already have ads in them.")
      }
    }
    return l
  }

  function e9() {
    h();
    aM.s = jM;
    kV(166, eO)
  }

  function eO() {
    var B = fX(gs(kW)) || kW, A = kQ(B);
    if (!A.plle) {
      A.plle = !0;
      var y = [null, null];
      try {
        var x = JSON.parse("[[[175,null,null,[1]]],[[12,[[1,[[21064123],[21064124]]]]],[10,[[10,[[20040008],[20040009,[[182,null,null,[1]]]]]],[1,[[21062810],[21062811]]],[1,[[21063996],[21063997,[[160,null,null,[1]]]]]],[50,[[21064339],[21064340,[[186,null,null,[1]]]]]],[50,[[21064380],[21064381,[[196,null,null,[1]]]]]],[1000,[[368226200,null,[2,[[12,null,null,5,null,null,\x22[02468]$\x22,[\x229\x22]],[7,null,null,5,null,2,null,[\x229\x22]]]]],[368226201,null,[2,[[12,null,null,5,null,null,\x22[13579]$\x22,[\x229\x22]],[7,null,null,5,null,2,null,[\x229\x22]]]]]]],[1000,[[368845002,null,[2,[[12,null,null,5,null,null,\x22[13579]$\x22,[\x224\x22]],[7,null,null,5,null,2,null,[\x224\x22]]]]],[368885001,null,[2,[[12,null,null,5,null,null,\x22[02468]$\x22,[\x224\x22]],[7,null,null,5,null,2,null,[\x224\x22]]]]]]]]],[11,[[10,[[248427477],[248427478,[[154,null,null,[1]]]]]]]]]]")
      } catch (l) {
        x = y
      }
      hZ(13, [x]);
      f2(new jI(x), d(B));
      fU.j().a(12);
      fU.j().a(10);
      A.eids = c5(fU.j().b(), String).concat(A.eids || []);
      A = A.eids;
      x = dH();
      dK = !0;
      y = dH();
      var v = cJ(B) || B;
      v = gn(v.location, "google_responsive_slot_debug") || gn(v.location, "google_responsive_slot_preview");
      var t = du(B, 11);
      var r = null != el(B, "");
      v ? (v = k8, t = kp, y = v.g) : r ? (v = jz, t = jp, y = kD(B, new kM(0, 999, ""), kI(y, 152), kI(y, 153), [v.c, v.g], 2)) : t ? (v = jV, t = jK, y = kD(B, new kM(0, 999, ""), kI(y, 120), kI(y, 121), [v.c, v.g], 2)) : (v = k8, t = kp, y = kD(B, bF, kI(y, 96), kI(y, 97), [v.c, v.g]));
      y ? (r = {}, v = (r[v.c] = t.c, r[v.g] = t.g, r)[y], y = {Qa: y, Sa: v}) : y = null;
      v = y || {};
      y = v.Qa;
      r = v.Sa;
      y && r && (kE(A, y), kE(A, r));
      v = cG;
      y = eQ(B, kI(x, 136), [v.c, v.g]);
      kE(A, y);
      du(B, 12) && (v = eI, t = e3, y = kD(B, new kM(0, 999, ""), kI(x, 149), kI(x, 150), [v.c, v.g], 4), kE(A, y), y == v.c ? r = t.c : y == v.g ? r = t.g : r = "", kE(A, r));
      v = dl;
      y = kD(B, b9, kI(x, 160), kI(x, 161), [v.c, v.R, v.P]);
      kE(A, y);
      t = dw;
      y == v.c ? r = t.c : y == v.R ? r = t.R : y == v.P ? r = t.P : r = "";
      kE(A, r);
      v = bn;
      kE(A, kD(B, bZ, kI(x, 9), kI(x, 10), [v.c, v.Da]));
      v = dR;
      y = kD(B, a1, kI(x, 179), kI(x, 180), [v.c, v.U]);
      kE(A, y);
      t = en;
      y == v.c ? r = t.c : y == v.U ? r = t.U : r = "";
      kE(A, r);
      v = aT;
      y = kD(B, an, kI(x, 195), kI(x, 196), [v.c, v.g]);
      kE(A, y);
      t = f;
      y == v.c ? r = t.c : y == v.g ? r = t.g : r = "";
      kE(A, r);
      v = cQ;
      y = kD(B, o, kI(x, 199), kI(x, 200), [v.c, v.g]);
      kE(A, y);
      t = c0;
      y == v.c ? r = t.c : y == v.g ? r = t.g : r = "";
      kE(A, r);
      H("") && kE(A, "");
      v = a3;
      y = eQ(B, kI(x, 13), [v.o, v.c]);
      kE(A, y);
      y = eQ(B, 0, [v.la]);
      kE(A, y);
      v = aK;
      y = eQ(B, kI(x, 60), [v.o, v.c]);
      kE(A, y);
      y == aK.o && (v = aA, y = eQ(B, kI(x, 66), [v.o, v.c]), kE(A, y), v = u, y = eQ(B, kI(x, 137), [v.o, v.c]), kE(A, y), y == aA.o && (v = ap, y = eQ(B, kI(x, 135), [v.o, v.c]), kE(A, y)));
      v = cw;
      y = eQ(B, kI(x, 98), [v.c, v.g]);
      kE(A, y);
      v = bx;
      y = eQ(B, kI(x, 192), [v.c, v.g]);
      kE(A, y);
      v = cm;
      y = kD(B, bl, kI(x, 157), kI(x, 158), [v.c, v.B]);
      kE(A, y);
      t = b1;
      y == v.c ? r = t.c : y == v.B ? r = t.B : r = "";
      kE(A, r);
      v = bR;
      y = kD(B, bv, kI(x, 173), kI(x, 174), [v.c, v.g]);
      kE(A, y);
      t = bH;
      y == v.c ? r = t.c : y == v.g ? r = t.g : r = "";
      kE(A, r);
      v = i3;
      y = kD(B, bP, kI(x, 99), kI(x, 100), [v.c, v.g]);
      kE(A, y);
      t = iT;
      y == v.c ? r = t.c : y == v.g ? r = t.g : r = "";
      kE(A, r);
      v = iI;
      y = eQ(B, kI(x, 165), [v.c, v.g]);
      kE(A, y);
      v = kH;
      y = kD(B, aI, kI(x, 189), kI(x, 190), [v.c, v.T, v.L, v.K, v.I, v.J]);
      kE(A, y);
      t = ix;
      y == v.c ? r = t.c : y == v.T ? r = t.T : y == v.L ? r = t.L : y == v.K ? r = t.K : y == v.I ? r = t.I : y == v.J ? r = t.J : r = "";
      kE(A, r);
      v = h9;
      y = kD(B, ay, kI(x, 193), kI(x, 194), [v.c, v.aa, v.ba]);
      kE(A, y);
      y = eQ(B, kI(x, 185), ["20199336", "20199335"]);
      kE(A, y);
      B = cJ(B) || B;
      gn(B.location, "google_mc_lab") && kE(A, "242104166")
    }
    if (!j5("Trident") && !j5("MSIE") || fO(11)) {
      B = kO(kW, aA.o) || kO(kW, a3.o) || kO(kW, a3.la);
      ar(B);
      ds();
      eE(".google.dz") && (kx[1] = ".google.dz");
      cW();
      if (B = cJ(j8)) {
        B = hN(B), B.tagSpecificState[1] || (B.tagSpecificState[1] = new gI)
      }
      if (x = kW.document.querySelector('script[src*="/pagead/js/adsbygoogle.js"][data-ad-client]:not([data-checked-head])')) {
        x.setAttribute("data-checked-head", "true");
        A = kQ(window);
        if (A.head_tag_slot_vars) {
          throw new kL("Only one AdSense head tag supported per page. The second tag is ignored.")
        }
        B = {};
        aw(x, B);
        hn(B);
        x = {};
        for (var q in B) {
          x[q] = B[q]
        }
        A.head_tag_slot_vars = x;
        q = {};
        q = (q.google_ad_client = B.google_ad_client, q.enable_page_level_ads = B, q);
        kW.adsbygoogle || (kW.adsbygoogle = []);
        B = kW.adsbygoogle;
        B.loaded ? B.push(q) : B.splice(0, 0, q)
      }
      q = window.adsbygoogle;
      if (!q || !q.loaded) {
        B = {push: hJ, loaded: !0};
        try {
          Object.defineProperty(B, "requestNonPersonalizedAds", {set: et}), Object.defineProperty(B, "pauseAdRequests", {set: dX}), Object.defineProperty(B, "setCookieOptions", {set: dC}), Object.defineProperty(B, "onload", {set: gF})
        } catch (l) {
        }
        if (q) {
          for (A = k3(["requestNonPersonalizedAds", "pauseAdRequests", "setCookieOptions"]), x = A.next(); !x.done; x = A.next()) {
            x = x.value, void 0 !== q[x] && (B[x] = q[x])
          }
        }
        if (q && q.shift) {
          try {
            var p;
            for (A = 20; 0 < q.length && (p = q.shift()) && 0 < A;) {
              hJ(p), --A
            }
          } catch (l) {
            throw window.setTimeout(e9, 0), l
          }
        }
        window.adsbygoogle = B;
        q && (B.onload = q.onload)
      }
    }
  }

  function et(p) {
    if (+p) {
      if ((p = G()) && p.frames && !p.frames.GoogleSetNPA) {
        try {
          var l = p.document, v = new bB(l), t = l.body || l.head && l.head.parentElement;
          if (t) {
            var r = bL(v.a, "IFRAME");
            r.name = "GoogleSetNPA";
            r.id = "GoogleSetNPA";
            r.setAttribute("style", "display:none;position:fixed;left:-999px;top:-999px;width:0px;height:0px;");
            t.appendChild(r)
          }
        } catch (q) {
        }
      }
    } else {
      (l = G().document.getElementById("GoogleSetNPA")) && l.parentNode && l.parentNode.removeChild(l)
    }
  }

  function dX(l) {
    +l ? kQ(kW).pause_ad_requests = !0 : (kQ(kW).pause_ad_requests = !1, l = function () {
      if (!kQ(kW).pause_ad_requests) {
        var a = dp(), v = dp();
        try {
          if (cq.createEvent) {
            var t = cq.createEvent("CustomEvent");
            t.initCustomEvent("adsbygoogle-pub-unpause-ad-requests-event", !1, !1, "");
            a.dispatchEvent(t)
          } else {
            if (e6(v.CustomEvent)) {
              var r = new v.CustomEvent("adsbygoogle-pub-unpause-ad-requests-event", {
                bubbles: !1,
                cancelable: !1,
                detail: ""
              });
              a.dispatchEvent(r)
            } else {
              if (e6(v.Event)) {
                var q = new Event("adsbygoogle-pub-unpause-ad-requests-event", {bubbles: !1, cancelable: !1});
                a.dispatchEvent(q)
              }
            }
          }
        } catch (p) {
        }
      }
    }, j8.setTimeout(l, 0), j8.setTimeout(l, 1000))
  }

  function dC(p) {
    var l = kW._gfp_;
    void 0 === l || 1 === l ? kW._gfp_ = p ? 1 : void 0 : l instanceof b && l.w(p ? 1 : 0)
  }

  function gF(l) {
    e6(l) && window.setTimeout(l, 0)
  }

  e9()
}).call(this);
