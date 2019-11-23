/**
 * Created by kankan on 2019-11-23.
 * E-mail: lidainzhong@gl-data.com
 * To: More pain, more gain.
 */
window.Q = function (t, i, n) {
  "use strict";

  function e(t, i, n) {
    if (t[eh]()) {
      var s = t._fs || t[sh]();
      if (s) {
        s = s._jz || s;
        for (var r = 0, h = s[rh]; h > r; r++) if (i[hh](n, s[r]) === !1 || e(s[r], i, n) === !1) return !1;
        return !0
      }
    }
  }

  function s(t) {
    if (!t[eh]()) return t instanceof xW ? t : null;
    for (var i, n = t._fs._jz, e = n[rh] - 1; e >= 0;) {
      if (i = n[e], i = s(i)) return i;
      e--
    }
    return null
  }

  function r(t, i, n, e) {
    return e ? h(t, i, n) : a(t, i, n)
  }

  function h(t, i, n) {
    t = t._jz || t;
    for (var e, s = 0, r = t[rh]; r > s; s++) if (e = t[s], e.hasChildren() && !h(e.children, i, n) || i[hh](n, e) === !1) return !1;
    return !0
  }

  function a(t, i, n) {
    t = t._jz || t;
    for (var e, s = 0, r = t.length; r > s; s++) if (e = t[s], i[hh](n, e) === !1 || e[eh]() && !a(e.children, i, n)) return !1;
    return !0
  }

  function o(t, i, n, e) {
    return e ? f(t, i, n) : u(t, i, n)
  }

  function f(t, i, n) {
    t = t._jz || t;
    for (var e, s = t[rh], r = s - 1; r >= 0; r--) if (e = t[r], e[eh]() && !f(e.children, i, n) || i[hh](n, e) === !1) return !1;
    return !0
  }

  function u(t, i, n) {
    t = t._jz || t;
    for (var e, s = t.length, r = s - 1; r >= 0; r--) if (e = t[r], i[hh](n, e) === !1 || e[eh]() && !u(e[ah], i, n)) return !1;
    return !0
  }

  function c(t, i, n) {
    for (var e, s = (t._jz || t)[oh](0); s.length;) {
      e = s[0], s = s[fh](1);
      var r = i.call(n, e);
      if (r === !1) return !1;
      if (e[eh]()) {
        var h = e.children;
        h = h._jz || h, s = s[uh](h)
      }
    }
    return !0
  }

  function _(t, i, n) {
    for (var e, s = (t._jz || t)[oh](0); s[rh];) {
      e = s[s[rh] - 1], s = s[fh](0, s.length - 1);
      var r = i.call(n, e);
      if (r === !1) return !1;
      if (e.hasChildren()) {
        var h = e[ah];
        h = h._jz || h, s = s.concat(h)
      }
    }
    return !0
  }

  function d(t, i) {
    function n(t, n) {
      for (var e = t[rh], s = n[rh], r = e + s, h = new Array(r), a = 0, o = 0, f = 0; r > f;) h[f++] = a === e ? n[o++] : o === s || i(t[a], n[o]) <= 0 ? t[a++] : n[o++];
      return h
    }

    function e(t) {
      var i = t[rh], s = Math[ch](i / 2);
      return 1 >= i ? t : n(e(t[oh](0, s)), e(t.slice(s)))
    }

    return e(t)
  }

  function l(t, i, n, e) {
    t instanceof Qz && (t = t._jz);
    for (var s = 0, r = (t._jz || t)[rh]; r > s; s++) {
      var h = i.call(n, t[s], s, e);
      if (h === !1) return !1
    }
    return !0
  }

  function v(t, i, n) {
    for (var e = t instanceof Qz, s = t._jz || t, r = 0, h = s[rh]; h > r; r++) {
      var a = s[r];
      i[hh](n, a) && (e ? t.remove(a) : t[fh](r, 1), r--, h--)
    }
  }

  function b(t, i, n, e) {
    t instanceof Qz && (t = t._jz);
    for (var s = (t._jz || t).length - 1; s >= 0; s--) {
      var r = i[hh](n, t[s], s, e);
      if (r === !1) return !1
    }
    return !0
  }

  function y(t) {
    if (t.clone instanceof Function) return t.clone(!0);
    var i, n = [];
    return l(t, function (t) {
      i = t && t[_h] instanceof Function ? t[_h]() : t, n[dh](i)
    }, this), n
  }

  function g(t, i, e) {
    e === n || 0 > e ? t[dh](i) : t[fh](e, 0, i)
  }

  function x(t, i) {
    var n = t[lh](i);
    return 0 > n || n >= t[rh] ? !1 : t.splice(n, 1)
  }

  function p(t, i) {
    var n = !1;
    return l(t, function (t) {
      return i == t ? (n = !0, !1) : void 0
    }), n
  }

  function E(t, i) {
    var n = t;
    for (var e in i) if (i.__lookupGetter__) {
      var s = i.__lookupGetter__(e), r = i.__lookupSetter__(e);
      s || r ? (s && n.__defineGetter__(e, s), r && n.__defineSetter__(e, r)) : n[e] = i[e]
    } else n[e] = i[e];
    return n
  }

  function m(t, i, n) {
    if (!(t instanceof Function)) throw new Error("subclass must be type of Function");
    var e = null;
    vh == typeof i && (e = i, i = t, t = function () {
      i.apply(this, arguments)
    });
    var s = t[bh], r = function () {
    };
    return r[bh] = i[bh], t[bh] = new r, t[yh] = i[bh], t[yh].constructor = i, E(t[bh], s), e && E(t[bh], e), n && E(t[bh], n), t[bh][gh] = t, t
  }

  function w(t, i, n) {
    return T(t, i, "constructor", n)
  }

  function T(t, i, n, e) {
    var s = i[yh];
    if (s) {
      var r = s[n];
      return r ? r[xh](t, e) : void 0
    }
  }

  function k(t, i, n, e) {
    if ("constructor" == n) return O(t, i, e);
    if (i.super_ instanceof Function) {
      var s = i.super_[bh][n];
      return s instanceof Function ? s[xh](t, e) : void 0
    }
  }

  function O(t, i, n) {
    return i[ph] instanceof Function ? i[ph].apply(t, n) : void 0
  }

  function M(t, i) {
    return t[ph] = i, t.prototype = Object[Eh](i[bh], {
      super_: {value: i, enumerable: !1},
      constructor: {value: t, enumerable: !1}
    }), t
  }

  function I(t, i, n) {
    if (!(t instanceof Function) && t instanceof Object) {
      i = t[mh];
      var e;
      return t.hasOwnProperty("constructor") ? (e = t.constructor, delete t.constructor) : e = i ? function () {
        i.apply(this, arguments)
      } : function () {
      }, I(e, i, t)
    }
    if (i && !(i instanceof Function) && i instanceof Object) return I(t, i.super, i);
    if (i && M(t, i), n) {
      var s = t.prototype;
      for (var r in n) s[r] = n[r]
    }
    return t
  }

  function S(t, i, e, s, r) {
    if (s) return void Object[wh](t, i, {value: e, enumerable: !0});
    var h = {configurable: !0, enumerable: !0}, a = Th + i;
    e !== n && (t[a] = e), h.get = function () {
      return this[a]
    }, h.set = function (t) {
      var n = this[a];
      if (n == t) return !1;
      var e = new gY(this, i, t, n);
      return this.beforeEvent(e) ? (this[a] = t, r && r.call(this, t, n), this[kh](e), !0) : !1
    }, Object.defineProperty(t, i, h)
  }

  function P(t, i) {
    for (var n = 0, e = i[rh]; e > n; n++) {
      var s = i[n];
      S(t, s[Oh] || s, s[Mh] || s[Ih], s[Sh], s[Ph])
    }
  }

  function A(t, i, n) {
    return i instanceof Object ? t = t[Ah](i) : i && !n && (n = parseInt(i)), i && !n && (n = parseInt(i)), n ? setTimeout(t, n) : setTimeout(t)
  }

  function C(i, n) {
    return n && (i = i.bind(n)), t.requestAnimationFrame(i)
  }

  function L(t, i) {
    return t.className = i, t
  }

  function R(t, i) {
    if (!t.hasOwnProperty(Ch)) {
      var n = t[Lh](gh);
      if (!n) return L(t, i);
      for (var e = n[Rh](Dh), s = 0, r = e.length; r > s; s++) if (e[s] == i) return;
      return n += Dh + i, L(t, n)
    }
    t[Ch].add(i)
  }

  function D(t, i) {
    if (!t.hasOwnProperty(Ch)) {
      var n = t.getAttribute(gh);
      if (!n || !n[lh](i)) return;
      for (var e = "", s = n[Rh](Dh), r = 0, h = s[rh]; h > r; r++) s[r] != i && (e += s[r] + Dh);
      return L(t, e)
    }
    t.classList[jh](i)
  }

  function j(t) {
    return !isNaN(t) && t instanceof Number || Nh == typeof t
  }

  function N(t) {
    return t !== n && (t instanceof String || qh == typeof t)
  }

  function q(t) {
    return t !== n && (t instanceof Boolean || Bh == typeof t)
  }

  function B(t) {
    return Array[$h](t)
  }

  function $(i) {
    i || (i = t[Fh]), i[Gh] ? i[Gh]() : i[zh] = !1
  }

  function F(i) {
    i || (i = t[Fh]), i.stopPropagation ? i[Yh]() : i.cancelBubble || (i[Hh] = !0)
  }

  function G(t) {
    $(t), F(t)
  }

  function z(t) {
    return Math[Uh](Math[Wh]() * t)
  }

  function Y() {
    return Math[Wh]() >= .5
  }

  function H(t) {
    var i = !0;
    for (var n in t) {
      i = !1;
      break
    }
    return i
  }

  function U(t) {
    if (t && t > 0 && 1 > t) {
      var i = Math[Uh](16777215 * Math[Wh]());
      return Xh + (i >> 16 & 255) + Vh + (i >> 8 & 255) + Vh + (255 & i) + Vh + t.toFixed(2) + Zh
    }
    return V(Math[Uh](16777215 * Math[Wh]()))
  }

  function W(t) {
    return t > 0 ? Math[Uh](t) : Math.ceil(t)
  }

  function X(t) {
    return t > 0 ? Math[ch](t) : Math[Uh](t)
  }

  function V(t) {
    return 16777216 > t ? Kh + (Jh + t.toString(16))[oh](-6) : Xh + (t >> 16 & 255) + Vh + (t >> 8 & 255) + Vh + (255 & t) + Vh + ((t >> 24 & 255) / 255)[Qh](2) + Zh
  }

  function Z(t, i, n) {
    vh != typeof n || n.hasOwnProperty(ta) || (n[ta] = !0), Object.defineProperty(t, i, n)
  }

  function K(t, i) {
    for (var n in i) if (ia != n[0]) {
      var e = i[n];
      vh != typeof e || e.hasOwnProperty(ta) || (e[ta] = !0)
    }
    Object[na](t, i)
  }

  function J(i, n) {
    n || (n = t);
    for (var e = i[Rh](ea), s = 0, r = e.length; r > s; s++) {
      var h = e[s];
      n = n[h]
    }
    return n
  }

  function Q(t) {
    return t instanceof MouseEvent || t instanceof Object && t.touches !== n
  }

  function ti() {
    t[sa] && console.log[xh](console, arguments)
  }

  function ii(i) {
    t[sa] && console.trace(i)
  }

  function ni(i) {
    t[sa] && console[ra](i)
  }

  function ei(t, i, n) {
    var e, s, r;
    0 == t._n7 ? (e = -1, r = 0, s = i) : 0 == t._n8 ? (e = 0, r = 1, s = n) : (e = -1 / t._n7, s = (t._n7 - e) * i + t._n9, r = 1);
    var h = new sY;
    return h._n7 = e, h._n9 = s, h._n8 = r, h._n6 = i, h._n4 = n, h._ll = Math[ha](e, r), h[aa] = Math.cos(h._ll), h[oa] = Math.sin(h._ll), h
  }

  function si(t, i, n, e, s) {
    var r, h;
    i > e ? r = -1 : e > i && (r = 1), n > s ? h = -1 : s > n && (h = 1);
    var a, o;
    if (!r) return o = 0 > h ? t.y : t[fa], {x: i, y: o};
    if (!h) return a = 0 > r ? t.x : t.right, {x: a, y: n};
    var f = (n - s) / (i - e), u = n - f * i, c = 0 > r ? i - t.x : i - t[ua], _ = 0 > h ? n - t.y : n - t[fa];
    return Math.abs(f) >= Math.abs(_ / c) ? (o = 0 > h ? t.y : t.bottom, a = (o - u) / f) : (a = 0 > r ? t.x : t[ua], o = f * a + u), {
      x: a,
      y: o
    }
  }

  function ri(t, i, n, e, s, r, h, a) {
    return 0 >= h || 0 >= a || 0 >= n || 0 >= e ? !1 : (h += s, a += r, n += t, e += i, (s > h || h > t) && (r > a || a > i) && (t > n || n > s) && (i > e || e > r))
  }

  function hi(t, i, n, e, s, r) {
    return s >= t && t + n >= s && r >= i && i + e >= r
  }

  function ai(t, i, n, e, s, r, h, a, o) {
    return o && (t -= o, i -= o, n += o + o, e += o + o), s >= t && r >= i && t + n >= s + h && i + e >= r + a
  }

  function oi(t, i, n, e, s, r, h, a) {
    var o = t;
    o += n;
    var f = i;
    f += e;
    var u = s;
    u += h;
    var c = r;
    return c += a, s > t && (t = s), r > i && (i = r), o > u && (o = u), f > c && (f = c), o -= t, f -= i, 0 > o || 0 > f ? null : new hY(t, i, o, f)
  }

  function fi(t) {
    return ca in t && _a in t
  }

  function ui(t, i) {
    var n = ci(t, i[da], i.height);
    return n.x += i.x || 0, n.y += i.y || 0, n
  }

  function ci(t, i, e) {
    if (!t) return {x: 0, y: 0};
    if (N(t) && (t = oY[la](t)), t instanceof oY) {
      var s, r, h = t.horizontalPosition, a = t[va];
      switch (h) {
        case fY:
          s = 0;
          break;
        case cY:
          s = i;
          break;
        default:
          s = i / 2
      }
      switch (a) {
        case _Y:
          r = 0;
          break;
        case lY:
          r = e;
          break;
        default:
          r = e / 2
      }
      return {x: s, y: r}
    }
    if (t.x !== n) return t[ba] ? {x: t.x * i, y: t.y * e} : {x: t.x, y: t.y};
    throw new Error("Position not be supported - " + t)
  }

  function _i(t, i, n) {
    t[ah].add(i, n), t.onChildAdd(i, n)
  }

  function di(t, i) {
    t._fs && (t._fs[jh](i), t.onChildRemove(i))
  }

  function li(t) {
    return t.replace(/^-ms-/, ya)[ga](/-([\da-z])/gi, function (t, i) {
      return i.toUpperCase()
    })
  }

  function vi(t) {
    return t[ga](/[A-Z]/g, function (t) {
      return xa + t.toLowerCase()
    })[ga](/^ms-/, pa)
  }

  function bi(t, i) {
    var n = t[Ea];
    if (!n) return !1;
    var e, s;
    for (e in i) i.hasOwnProperty(e) && (s = RY(e)) && (n[s] = i[e]);
    return t
  }

  function yi(t) {
    var i, n, e = "";
    for (i in t) t.hasOwnProperty(i) && (n = RY(i)) && (e += vi(n) + ma + t[i] + wa);
    return e ? e[Ta](0, e[rh] - 1) : e
  }

  function gi(t, i, n) {
    (i = RY(i)) && (t.style[i] = n)
  }

  function xi(t, i) {
    return CY ? (i && !N(i) && (i = yi(i)), CY[ka] ? void CY[ka](t + Oa + i + Ma, 0) : void (CY.addRule && CY[Ia](t, i, 0))) : !1
  }

  function pi(t, i) {
    var n = t[Sa];
    return n ? (i = i || t[Pa](), i.width / n) : 1
  }

  function Ei(i, n) {
    i[Aa] && (i = i[Ca] && i[Ca][rh] ? i.changedTouches[0] : i[Aa][0]);
    var e = i[La] || 0, s = i[Ra] || 0;
    Zz && Hz && (t[Da] && e == i.pageX && (e -= t.pageXOffset), t.pageYOffset && s == i[ja] && (s -= t[Na]));
    var r = n[Pa]();
    e -= r.left, s -= r.top;
    var h = pi(n, r);
    return h && 1 !== h && (e /= h, s /= h), {x: e, y: s}
  }

  function mi(t, i) {
    var n, e;
    t.touches ? (n = t.cx, e = t.cy) : (n = t.clientX, e = t[Ra]);
    var s = pi(i);
    return s && 1 !== s && (n /= s, e /= s), {timeStamp: t.timeStamp, x: n, y: e}
  }

  function wi(t, i, n) {
    this._md = t, this[qa] = n, this[Ba] = i, this[$a] = new ki, this[Fa]()
  }

  function Ti(t) {
    return Uz && t[Ga] || !Uz && t.ctrlKey
  }

  function ki() {
    this.points = []
  }

  function Oi(t, i, n, e, s) {
    Ii(t, function (e) {
      if (i) {
        var s = e[za];
        if (!s) return void (n || cH)(Ya + t + Ha);
        i(s)
      }
    }, n, e, s)
  }

  function Mi(t, i, n, e, s) {
    Ii(t, function (e) {
      if (i) {
        var s, r = e.responseText;
        if (!r) return (n || cH)(Ya + t + Ua), s = new Error(Ya + t + Ua), i(r, s);
        try {
          r = JSON[Wa](r)
        } catch (h) {
          (n || cH)(h), s = h
        }
        i(r, s)
      }
    }, n, e, s)
  }

  function Ii(t, i, n, e, s) {
    (n === !1 || e === !1) && (s = !1);
    try {
      var r = new XMLHttpRequest, h = encodeURI(t);
      if (s !== !1) {
        var a;
        a = h[lh](Xa) > 0 ? "&" : Xa, h += a + Va + Date.now()
      }
      r[Za](Ka, h), r[Ja] = function () {
        return 4 == r[Qa] ? r.status && 200 != r.status ? void (n || cH)(Ya + t + to) : void (i && i(r)) : void 0
      }, r[io](e)
    } catch (o) {
      (n || cH)(Ya + t + to, o)
    }
  }

  function ri(t, i, n, e, s, r, h, a) {
    return 0 >= h || 0 >= a || 0 >= n || 0 >= e ? !1 : (h += s, a += r, n += t, e += i, (s > h || h > t) && (r > a || a > i) && (t > n || n > s) && (i > e || e > r))
  }

  function ai(t, i, n, e, s, r, h, a) {
    return s >= t && r >= i && t + n >= s + h && i + e >= r + a
  }

  function Si(t, i, n) {
    return t instanceof Object && t.x ? Ai(t, i, 0, 0) : Pi(t, i, n, 0, 0)
  }

  function Pi(t, i, n, e, s) {
    var r = Math.sin(n), h = Math.cos(n), a = t - e, o = i - s;
    return t = a * h - o * r + e, i = a * r + o * h + s, new nY(t, i, n)
  }

  function Ai(t, i, n, e) {
    n = n || 0, e = e || 0;
    var s = Math.sin(i), r = Math.cos(i), h = t.x - n, a = t.y - e;
    return t.x = h * r - a * s + n, t.y = h * s + a * r + e, t
  }

  function Ci(t, i, n) {
    return Li(t, i, n, 0, 0)
  }

  function Li(t, i, n, e, s) {
    var r = Pi(t.x, t.y, i, e, s), h = Pi(t.x + t.width, t.y, i, e, s), a = Pi(t.x + t[da], t.y + t[no], i, e, s),
      o = Pi(t.x, t.y + t[no], i, e, s);
    return n ? n.clear() : n = new hY, n.addPoint(r), n[eo](h), n[eo](a), n[eo](o), n
  }

  function Ri(t, i) {
    var n = this.ratio || 1;
    this[Ea][da] = t + so, this[Ea][no] = i + so, this[da] = t * n, this[no] = i * n
  }

  function Di(t) {
    var i = t.webkitBackingStorePixelRatio || t[ro] || t[ho] || t[ao] || t[oo] || 1;
    return lH / i
  }

  function ji(t, n, e) {
    var s = i[fo](uo);
    if (s.g = s[co](_o), t !== !0 && !e) return t && n && (s.width = t, s[no] = n), s;
    var r = s.g;
    return r[lo] = s[lo] = Di(r), s[vo] = Ri, r._l5 = function () {
      this[uo][da] = this.canvas[da]
    }, t && n && s.setSize(t, n), s
  }

  function Ni(t, i) {
    return vH || (vH = ji()), t && i && (vH.width = t, vH[no] = i), vH.g
  }

  function qi(t, i, n) {
    return (n || Jz[bo]) + Dh + (i || Jz[yo]) + go + (t || Jz[xo])
  }

  function Bi(t, i, n, e, s, r, h, a, o, f) {
    if (t[po](), t[Eo](n, e), bH && yH > h) {
      var u = h / yH;
      t[mo](u, u), h = yH, f = null
    }
    o || (o = Jz.LINE_HEIGHT), h || (h = Jz.FONT_SIZE), o *= h, t.font = f || qi(r, h, a), t[wo] = s, t[To] = ko;
    for (var c = o / 2, _ = i.split(Oo), d = 0, l = _.length; l > d; d++) {
      var v = _[d];
      t[Mo](v, 0, c), c += o
    }
    t.restore()
  }

  function $i(t, i, n, e, s, r) {
    if (!t) return {width: 0, height: 0};
    if (i || (i = Jz[yo]), bH && yH > i) {
      var h = i / yH, a = $i(t, yH, n, e, s);
      return a[da] *= h, a[no] *= h, a
    }
    var o = Ni();
    o[Io] = r || qi(n, i, e), s || (s = Jz[So]);
    for (var f = i * s, u = 0, c = 0, _ = t[Rh](Oo), d = 0, l = _.length; l > d; d++) {
      var v = _[d];
      u = Math.max(o.measureText(v)[da], u), c += f
    }
    return {width: u, height: c}
  }

  function Fi(t, i, n, e, s) {
    var r;
    try {
      r = t[Po](i, n, e, s)
    } catch (h) {
    }
    return r
  }

  function Gi(t) {
    return Math.log(t + Math[Ao](t * t + 1))
  }

  function zi(t, i) {
    i = i || t(1);
    var n = 1 / i, e = .5 * n, s = Math.min(1, i / 100);
    return function (r) {
      if (0 >= r) return 0;
      if (r >= i) return 1;
      for (var h = r * n, a = 0; a++ < 10;) {
        var o = t(h), f = r - o;
        if (Math.abs(f) <= s) return h;
        h += f * e
      }
      return h
    }
  }

  function Yi(t, i, n) {
    var e = 1 - t, s = e * e * i[0] + 2 * e * t * i[2] + t * t * i[4],
      r = e * e * i[1] + 2 * e * t * i[3] + t * t * i[5];
    if (n) {
      var h = (i[0] + i[4] - 2 * i[2]) * t + i[2] - i[0], a = (i[1] + i[5] - 2 * i[3]) * t + i[3] - i[1];
      return {x: s, y: r, rotate: Math[ha](a, h)}
    }
    return {t: t, x: s, y: r}
  }

  function Hi(t, i, n) {
    var e = t - 2 * i + n;
    return 0 != e ? (t - i) / e : -1
  }

  function Ui(t, i) {
    i.add(t[4], t[5]);
    var n = Hi(t[0], t[2], t[4]);
    if (n > 0 && 1 > n) {
      var e = Yi(n, t);
      i.add(e.x, e.y)
    }
    var s = Hi(t[1], t[3], t[5]);
    if (s > 0 && 1 > s) {
      var e = Yi(s, t);
      i.add(e.x, e.y)
    }
    return i
  }

  function Wi(t, i) {
    return Math.abs(t - i) < 1e-7
  }

  function Xi(t, i) {
    return Wi(t[0], i[0]) && Wi(t[1], i[1])
  }

  function Vi(t) {
    if (Xi([t[0], t[1]], [t[2], t[3]])) {
      var i = t[0], n = t[1], e = t[4], s = t[5], r = Math.sqrt(gH(i, n, e, s));
      return function (t) {
        return r * t
      }
    }
    if (Xi([t[0], t[1]], [t[4], t[5]]) || Xi([t[2], t[3]], [t[4], t[5]])) {
      var i = t[0], n = t[1], e = t[2], s = t[3], r = Math[Ao](gH(i, n, e, s));
      return function (t) {
        return r * t
      }
    }
    var h = t[0], a = t[2], o = t[4], f = h - 2 * a + o, u = 2 * a - 2 * h;
    h = t[1], a = t[3], o = t[5];
    var c = h - 2 * a + o, _ = 2 * a - 2 * h, d = 4 * (f * f + c * c), l = 4 * (f * u + c * _), v = u * u + _ * _,
      r = 4 * d * v - l * l;
    if (1e-5 > r && r > -1e-5) {
      var b = eY(t[0], t[1], t[2], t[3]), y = eY(t[2], t[3], t[4], t[5]);
      return function (t) {
        return (2 * b + (y - b) * t) * t
      }
    }
    var g = 1 / r, x = .125 * Math.pow(d, -1.5), p = 2 * Math.sqrt(d),
      E = (r * Gi(l / Math[Ao](r)) + 2 * Math[Ao](d) * l * Math[Ao](v)) * x;
    return function (t) {
      var i = l + 2 * t * d, n = i / Math[Ao](r), e = i * i * g;
      return (r * Math.log(n + Math.sqrt(e + 1)) + p * i * Math[Ao](v + t * l + t * t * d)) * x - E
    }
  }

  function Zi(t, i, n) {
    var e = 1 - t, s = i[0], r = i[2], h = i[4], a = i[6],
      o = s * e * e * e + 3 * r * t * e * e + 3 * h * t * t * e + a * t * t * t;
    if (n) var f = 3 * t * t * a + (6 * t - 9 * t * t) * h + (9 * t * t - 12 * t + 3) * r + (-3 * t * t + 6 * t - 3) * s;
    s = i[1], r = i[3], h = i[5], a = i[7];
    var u = s * e * e * e + 3 * r * t * e * e + 3 * h * t * t * e + a * t * t * t;
    if (n) {
      var c = 3 * t * t * a + (6 * t - 9 * t * t) * h + (9 * t * t - 12 * t + 3) * r + (-3 * t * t + 6 * t - 3) * s;
      return {x: o, y: u, rotate: Math[ha](c, f)}
    }
    return {x: o, y: u}
  }

  function Ki(t, i, n, e, s, r, h, a) {
    for (var o, f, u, c, _, d, l, v, b = [], y = 0; 2 > y; ++y) if (0 === y ? (f = 6 * t - 12 * n + 6 * s, o = -3 * t + 9 * n - 9 * s + 3 * h, u = 3 * n - 3 * t) : (f = 6 * i - 12 * e + 6 * r, o = -3 * i + 9 * e - 9 * r + 3 * a, u = 3 * e - 3 * i), Math.abs(o) < 1e-12) {
      if (Math.abs(f) < 1e-12) continue;
      c = -u / f, c > 0 && 1 > c && b[dh](c)
    } else l = f * f - 4 * u * o, v = Math[Ao](l), 0 > l || (_ = (-f + v) / (2 * o), _ > 0 && 1 > _ && b[dh](_), d = (-f - v) / (2 * o), d > 0 && 1 > d && b[dh](d));
    return b
  }

  function Ji(t, i) {
    i.add(t[6], t[7]);
    var n = Ki[xh](this, t);
    if (n) for (var e = 0; e < n[rh]; e++) {
      var s = n[e];
      if (!(0 > s || s > 1)) {
        var r = Zi(s, t);
        i.add(r.x, r.y)
      }
    }
  }

  function Qi(t) {
    var i = {x: t[0], y: t[1]}, n = {x: t[2], y: t[3]}, e = {x: t[4], y: t[5]}, s = {x: t[6], y: t[7]}, r = i.x - 0,
      h = i.y - 0, a = n.x - 0, o = n.y - 0, f = e.x - 0, u = e.y - 0, c = s.x - 0, _ = s.y - 0,
      d = 3 * (-r + 3 * a - 3 * f + c), l = 6 * (r - 2 * a + f), v = 3 * (-r + a), b = 3 * (-h + 3 * o - 3 * u + _),
      y = 6 * (h - 2 * o + u), g = 3 * (-h + o), x = function (t) {
        var i = d * t * t + l * t + v, n = b * t * t + y * t + g;
        return Math[Ao](i * i + n * n)
      }, p = (x(0) + 4 * x(.5) + x(1)) / 6;
    return p
  }

  function tn(t, i) {
    function n(t, i, n, e) {
      var s = -t + 3 * i - 3 * n + e, r = 2 * t - 4 * i + 2 * n, h = i - t;
      return function (t) {
        return 3 * (s * t * t + r * t + h)
      }
    }

    function e(t, i) {
      var n = s(t), e = r(t);
      return Math[Ao](n * n + e * e) * i
    }

    var s = n(t[0], t[2], t[4], t[6]), r = n(t[1], t[3], t[5], t[7]);
    i = i || 100;
    var h = 1 / i;
    return function (t) {
      if (!t) return 0;
      for (var i, n = 0, s = 0; ;) {
        if (i = n + h, i >= t) return s += e(n, i - n);
        s += e(n, h), n = i
      }
    }
  }

  function nn(t, i, n) {
    return gH(i, n, t.cx, t.cy) <= t[Co] + xH
  }

  function en(t, i, n, e) {
    return n = n || sn(t, i), new rn((t.x + i.x) / 2, (t.y + i.y) / 2, n / 2, t, i, null, e)
  }

  function sn(t, i) {
    return eY(t.x, t.y, i.x, i.y)
  }

  function rn(t, i, n, e, s, r, h) {
    this.cx = t, this.cy = i, this.r = n, this._squareR = n * n, this.p1 = e, this.p2 = s, this.p3 = r, this[Lo] = h
  }

  function hn(t, i, n, e) {
    this.cx = t, this.cy = i, this[da] = n, this[no] = e
  }

  function an(t) {
    var i = t[0], n = t[1], e = t[2], s = rn._k4Circle(i, n, e);
    return fn(t, i, n, e, s)
  }

  function on(t, i) {
    i = i || un(t);
    for (var n, e = i[da] / i[no], s = [], r = t.length, h = 0; r > h; h++) n = t[h], s[dh]({x: n.x, y: n.y * e});
    var a = an(s);
    return a ? new hn(a.cx, a.cy / e, 2 * a.r, 2 * a.r / e) : void 0
  }

  function fn(t, i, n, e, s) {
    for (var r, h, a = t.length, o = s[Co], f = 0; a > f; f++) if (r = t[f], r != i && r != n && r != e) {
      var u = gH(s.cx, s.cy, r.x, r.y);
      u - xH > o && (o = u, h = r)
    }
    if (!h) return s;
    var c, _ = rn[Ro](h, i, n), d = rn[Ro](h, i, e), l = rn[Ro](h, e, n);
    return nn(_, e.x, e.y) && (c = _), nn(d, n.x, n.y) && (!c || c.r > d.r) && (c = d), nn(l, i.x, i.y) && (!c || c.r > l.r) && (c = l), i = c.p1, n = c.p2, e = c.p3 || c._otherPoint, fn(t, i, n, e, c)
  }

  function un(t) {
    for (var i, n = t[rh], e = new hY, s = 0; n > s; s++) i = t[s], e.add(i.x, i.y);
    return e
  }

  function cn(t, i, n, e, s) {
    this._6h && this[Do]();
    var r = s ? this[jo](s) : this[No], h = n / r.width, a = t - h * r.x, o = e / r[no], f = i - o * r.y, u = this._fy,
      c = [];
    return l(u, function (t) {
      var i = t.clone(), n = i[qo];
      if (n && n[rh]) {
        for (var e = n[rh], s = [], r = 0; e > r; r++) {
          var u = n[r];
          r++;
          var _ = n[r];
          u = h * u + a, _ = o * _ + f, s.push(u), s[dh](_)
        }
        i[qo] = s
      }
      c[dh](i)
    }, this), new ZH(c)
  }

  function _n(t, i, n, e, s, r) {
    if (s = s || 0, n = n || 0, !s && !r) return !1;
    if (!e) {
      var h = this[jo](s);
      if (!h[Bo](t, i, n)) return !1
    }
    var a = Math[$o](2 * n) || 1, o = Ni(a, a), f = (o.canvas, -t + n), u = -i + n;
    if (o[Fo](1, 0, 0, 1, f, u), !o[Go]) {
      this._lt(o), s && o[zo](), r && o.fill();
      var c = Fi(o, 0, 0, a, a);
      if (!c) return !1;
      c = c[Yo];
      for (var _ = c[rh] / 4; _ > 0;) {
        if (c[4 * _ - 1] > VH) return !0;
        --_
      }
      return !1
    }
    return o.lineWidth = (s || 0) + 2 * n, this._lt(o), s && o[Go](n, n) ? !0 : r ? o[Ho](n, n) : !1
  }

  function dn(t, i, n) {
    if (!this._j4 || this._fy[rh] < 2) {
      if (this._fy[rh]) {
        var e = n !== !1 ? this._fy[0][Uo] : this._fy[this._fy[rh] - 1][Wo];
        return i && (e.y += i), t && (e.x += t), e
      }
      return null
    }
    var s = this._fy;
    n === !1 && (t += this._j4);
    var r = s[0];
    if (0 >= t) return Ks(r[qo][0], r[qo][1], s[1][qo][0], s[1].points[1], t, i);
    if (t >= this._j4) {
      r = s[s.length - 1];
      var h, a, o = r[qo], f = o[rh], u = o[f - 2], c = o[f - 1];
      if (f >= 4) h = o[f - 4], a = o[f - 3]; else {
        r = s[s.length - 2];
        var _ = r[Wo];
        h = _.x, a = _.y
      }
      return Ks(u, c, u + u - h, c + c - a, t - this._j4, i)
    }
    for (var d, l = 0, v = 1, f = s[rh]; f > v; v++) if (d = s[v], d._j4) {
      if (!(l + d._j4 < t)) {
        var b, _ = r.lastPoint;
        if (d.type == UH) {
          var y = d[qo];
          b = ln(t - l, d, _.x, _.y, y[0], y[1], y[2], y[3], d._r)
        } else {
          if (!d._lf) return Ks(_.x, _.y, d[qo][0], d.points[1], t - l, i);
          var g = zi(d._lf, d._j4)(t - l), y = d.points;
          b = d[Xo] == HH && 6 == y.length ? Zi(g, [_.x, _.y][uh](y), !0) : Yi(g, [_.x, _.y][uh](y), !0), b.t = g
        }
        return i && (b.x -= i * Math.sin(b[Vo] || 0), b.y += i * Math.cos(b[Vo] || 0)), b
      }
      l += d._j4, r = d
    } else r = d
  }

  function ln(t, i, n, e, s, r, h, a) {
    if (t <= i._l1) return Ks(n, e, s, r, t, t);
    if (t >= i._j4) return t -= i._j4, Ks(i[Zo], i._p2y, h, a, t, t);
    if (t -= i._l1, i._o) {
      var o = t / i._r;
      i[Ko] && (o = -o);
      var f = Pi(i[Jo], i[Qo], o, i._o.x, i._o.y);
      return f[Vo] += i[tf] || 0, f[Vo] += Math.PI, f
    }
    return Ks(i._p1x, i[Qo], i._p2x, i[nf], t, t)
  }

  function ei(t, i, n) {
    var e, s, r;
    0 == t._n7 ? (e = -1, r = 0, s = i) : 0 == t._n8 ? (e = 0, r = 1, s = n) : (e = -1 / t._n7, s = (t._n7 - e) * i + t._n9, r = 1);
    var h = new sY;
    return h._n7 = e, h._n9 = s, h._n8 = r, h._n6 = i, h._n4 = n, h
  }

  function vn(t) {
    return t %= 2 * Math.PI, 0 > t && (t += 2 * Math.PI), t
  }

  function bn(t, i, n, e, s, r, h, a) {
    var o = eY(i, n, e, s), f = eY(e, s, r, h);
    if (!o || !f) return t._d = 0, t._r = 0, t._l1 = o, t._l2 = f, t._j4 = 0;
    var u = gn(e, s, i, n), c = gn(e, s, r, h);
    t[tf] = u, t[ef] = c;
    var _ = u - c;
    _ = vn(_), _ > Math.PI && (_ = 2 * Math.PI - _, t[Ko] = !0);
    var d = Math.PI - _, l = Math.tan(_ / 2), v = a / l, b = Math.min(o, f);
    v > b && (v = b, a = l * v);
    var y, g = e + Math.cos(u) * v, x = s + Math.sin(u) * v, p = e + Math.cos(c) * v, E = s + Math.sin(c) * v,
      m = new sY(i, n, e, s), w = new sY(e, s, r, h), T = ei(m, g, x), k = ei(w, p, E), O = T._46(k),
      M = Math[ha](x - O.y, g - O.x), I = Math[ha](E - O.y, p - O.x);
    y = t[Ko] ? I : M;
    for (var S, P = 0; 4 > P;) {
      var A = P * tY;
      if (vn(A - y) <= d) {
        var C, L;
        if (S ? S++ : S = 1, 0 == P ? (C = O.x + a, L = O.y) : 1 == P ? (C = O.x, L = O.y + a) : 2 == P ? (C = O.x - a, L = O.y) : (C = O.x, L = O.y - a), t[sf + S] = {
          x: C,
          y: L
        }, 2 == S) break
      }
      P++
    }
    return t._p1x = g, t[Qo] = x, t[Zo] = p, t[nf] = E, t._o = O, t._d = v, t._r = a, t._l1 = o - v, t._l2 = f - v, t._j4 = t._l1 + d * a
  }

  function yn(t, i, n, e, s, r, h) {
    var a = gn(n, e, t, i), o = gn(n, e, s, r), f = a - o;
    return h ? f : (0 > f && (f = -f), f > Math.PI && (f -= Math.PI), f)
  }

  function gn(t, i, n, e) {
    return Math[ha](e - i, n - t)
  }

  function xn(t, i) {
    for (var n = t[Po](0, 0, i[da], i[no])[Yo], e = !1, s = 3, r = n.length; r > s; s += 4) if (n[s] < 255) {
      e = !0;
      break
    }
    return e
  }

  function pn(t) {
    return t = mn(t), /^png/i[rf](t) || /^gif/i[rf](t)
  }

  function En(t, i, n, e, s) {
    if (i && n) {
      t[hf] = .5, t.strokeStyle = af, t.strokeRect(0, 0, i, n), e && (t.fillStyle = e, t.fillRect(0, 0, i, n));
      var r = 2, h = 40, a = 28, o = 10, f = Math.min(i / (h + o), n / (a + o));
      t[po](), t[of] = .6, t[Eo](i / 2, n / 2), t[mo](f, f), t[Eo](-h / 2, -a / 2), t[ff](), t[uf](0, 0, h, a), t[cf](), t[_f] = df, t[lf](), t[of] = 1, t.moveTo(0, 21), t[vf](12, 12), t[vf](26, 28), t[bf](18, 18), t[vf](28, 8), t[vf](40, 18), t[hf] = r, t[yf] = gf, t.stroke(), s && (t.beginPath(), t.moveTo(26, -4), t[vf](17, 11), t[vf](23, 17), t[vf](14, 32), t[hf] = 5, t[yf] = e || xf, t.stroke()), t.restore()
    }
  }

  function mn(t) {
    var i = EH.exec(t);
    if (i) return i[1];
    var n = t[pf](ea);
    return n >= 0 && n < t.length - 1 ? t[Ta](n + 1) : void 0
  }

  function wn(t) {
    if (!t) return null;
    if (t instanceof ZH) return IH;
    if (t[Ef] instanceof Function) return MH;
    if (N(t)) {
      var i = mn(t);
      if (i) {
        if (!qz && mH[rf](i)) return OH;
        if (wH.test(i)) return kH
      }
      return TH
    }
  }

  function Tn(t, i, n) {
    if (this._mg = wn(t), !this._mg) throw new Error("the image format is not supported", t);
    this._lo = t, this[mf] = i, this._9t = n, this[da] = i || Jz[wf], this[no] = n || Jz[Tf], this._jc = {}
  }

  function kn(t, i, n, e) {
    return i ? (CH[t] = new Tn(i, n, e), t) : void delete CH[t]
  }

  function On(t) {
    if (t._kw) return t._kw;
    var i = N(t);
    if (!i && !t[Oh]) return t._kw = new Tn(t);
    var n = t[Oh] || t;
    return n in CH ? CH[n] : CH[n] = new Tn(t)
  }

  function Mn(t) {
    return t in CH
  }

  function In(t, i, n) {
    n = n || {};
    var e = t[jo](n[hf]);
    if (!e[da] || !e[no]) return !1;
    var s = i.getContext(_o), r = i[lo] || 1, h = n.scaleMode || kf, a = /full/i[rf](h), o = /uniform/i[rf](h), f = 1,
      u = 1;
    if (a) {
      var c = i[da], _ = i.height, d = n[Of], l = 0, v = 0;
      if (d) {
        var b, y, g, x;
        j(d) ? b = y = g = x = d : (b = d.top || 0, y = d[fa] || 0, g = d[Mf] || 0, x = d.right || 0), c -= g + x, _ -= b + y, l += g, v += b
      }
      f = c / e[da], u = _ / e.height, o && (f > u ? (l += (c - u * e[da]) / 2, f = u) : u > f && (v += (_ - f * e.height) / 2, u = f)), (l || v) && s.translate(l, v)
    }
    s[Eo](-e.x * f, -e.y * u), t.draw(s, r, n, f, u, !0)
  }

  function Sn(t, i, n) {
    var e = On(t);
    return e ? (e[Do](), (e._mg == OH || e._7i()) && e._n7n(function (t) {
      t.source && (this[da] = this[da], In(t[If], this, n))
    }, i), void In(e, i, n)) : (_H[ra](Sf + t), !1)
  }

  function Pn(t, i, n, e) {
    var s = t[rh];
    if (s && !(0 > s)) {
      e = e || 1;
      for (var r, h, a = 0; a++ < s;) if (r = t[Pf](a, 0), r && (h = eY(i, n, r.x, r.y), !(h > e))) {
        for (var o = 0; o++ < e;) if (r = t[Pf](a + o, 0)) {
          var f = eY(i, n, r.x, r.y);
          if (f >= h) {
            a += o;
            break
          }
          h = f
        }
        for (var u = a, c = t[rh] - 1, _ = 0, a = 0, d = t._fy[rh]; d > a; a++) if (_ += t._fy[a]._j4 || 0, _ > u) {
          c = a;
          break
        }
        return r[rh] = u, r[Af] = c, r
      }
    }
  }

  function An(t, i, n) {
    return {x: t.x + (i.x - t.x) * n, y: t.y + (i.y - t.y) * n}
  }

  function Cn(t, i, n, e, s) {
    e = e || Jz.ADD_SEGMENT_TYPE;
    var r = Pn(t, i, n, s);
    if (r) {
      i = r.x, n = r.y;
      var h = t._fy, a = r[Af], o = a == h.length - 1, f = h[a], u = h.slice(0);
      if (f.type == zH || f[Xo] == WH) if (Cf == e) u.splice(a, 0, new XH(zH, [r.x, r.y])); else {
        var c = h[a - 1].lastPoint, _ = f[Uo], d = eY(c.x, c.y, i, n) / eY(c.x, c.y, _.x, _.y), l = An(c, r, d),
          v = An(r, _, d);
        u.splice(a, 1, new XH(YH, [l.x, l.y, i, n]), new XH(YH, f[Lf] ? [v.x, v.y] : [v.x, v.y, _.x, _.y]))
      } else if (Rf in r && Cf != e) {
        var d = r.t;
        if (f.type == HH) {
          var c = h[a - 1][Wo], _ = {x: f[qo][0], y: f[qo][1]}, b = {x: f[qo][2], y: f.points[3]},
            y = {x: f[qo][4], y: f[qo][5]}, l = An(c, _, d), v = An(_, b, d), g = An(b, y, d), x = An(l, v, d),
            p = An(v, g, d);
          u.splice(a, 1, new XH(HH, [l.x, l.y, x.x, x.y, i, n]), new XH(HH, f[Lf] ? [p.x, p.y, g.x, g.y] : [p.x, p.y, g.x, g.y, y.x, y.y]))
        } else if (f[Xo] == YH) {
          var c = h[a - 1][Wo], _ = {x: f[qo][0], y: f[qo][1]}, b = {x: f[qo][2], y: f[qo][3]}, l = An(c, _, d),
            v = An(_, b, d);
          u[fh](a, 1, new XH(YH, [l.x, l.y, i, n]), new XH(YH, f[Lf] ? [v.x, v.y] : [v.x, v.y, b.x, b.y]))
        }
      } else {
        var _ = f.lastPoint;
        u[fh](a, 1, new XH(zH, [i, n]), new XH(zH, [_.x, _.y]))
      }
      return {atEnd: o, index: a, isCurve: Cf !== e, segments: u}
    }
  }

  function Ln(t) {
    var i = t.width, n = t.height, e = Fi(t.g, 0, 0, i, n);
    return e ? Dn(e[Yo], i, n) : void 0
  }

  function Rn(t, i, n) {
    this._13(t, i, n)
  }

  function Dn(t, i, n) {
    return new Rn(t, i, n)
  }

  function jn(t) {
    if (Kh == t[0]) {
      if (t = t.substring(1), 3 == t[rh]) t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2]; else if (6 != t[rh]) return;
      return t = parseInt(t, 16), [t >> 16 & 255, t >> 8 & 255, 255 & t]
    }
    if (/^rgb/i[rf](t)) {
      var i = t[lh](Df), n = t[lh](Zh);
      if (0 > i || i > n) return;
      if (t = t[Ta](i + 1, n), t = t[Rh](Vh), t.length < 3) return;
      var e = parseInt(t[0]), s = parseInt(t[1]), r = parseInt(t[2]), h = 3 == t[rh] ? 255 : parseInt(t[3]);
      return [e, s, r, h]
    }
    _H[ra]("color format error, [" + t + jf)
  }

  function Nn(t, i, n) {
    return n || (n = Jz.BLEND_MODE), n == dH[Nf] ? t * i : n == dH[qf] ? Math.min(t, i) : n == dH[Bf] ? 1 - (1 - i) / t : n == dH.BLEND_MODE_LINEAR_BURN ? t + i - 1 : n == dH[$f] ? Math.max(t, i) : n == dH[Ff] ? t + i - t * i : i
  }

  function qn(t, i, n) {
    var e = Fi(t.g, 0, 0, t[da], t.height);
    if (e) {
      var s = e[Yo];
      if (n instanceof Function) s = n(t, s, i) || s; else {
        var r = i[0] / 255, h = i[1] / 255, a = i[2] / 255;
        if (n == dH.BLEND_MODE_GRAY) for (var o = 0, f = s[rh]; f > o; o += 4) {
          var u = 77 * s[o] + 151 * s[o + 1] + 28 * s[o + 2] >> 8;
          s[o] = u * r | 0, s[o + 1] = u * h | 0, s[o + 2] = u * a | 0
        } else for (var o = 0, f = s.length; f > o; o += 4) s[o] = 255 * Nn(r, s[o] / 255, n) | 0, s[o + 1] = 255 * Nn(h, s[o + 1] / 255, n) | 0, s[o + 2] = 255 * Nn(a, s[o + 2] / 255, n) | 0
      }
      var t = ji(t.width, t[no]);
      return t.g[Gf](e, 0, 0), t
    }
  }

  function Bn(t, i, n, e) {
    return 1 > n && (n = 1), $n(t - n, i - n, 2 * n, 2 * n, e)
  }

  function $n(t, i, n, e, s) {
    n = Math.round(n) || 1, e = Math[$o](e) || 1;
    var r = Ni(n, e);
    r[Fo](1, 0, 0, 1, -t, -i), s[Ef](r);
    var h = Fi(r, 0, 0, n, e);
    if (!h) return !1;
    h = h[Yo];
    for (var a = h.length / 4; a-- > 0;) if (h[4 * a - 1] > VH) return !0;
    return !1
  }

  function Fn(t, i, n, e, s, r) {
    t -= s.$x, i -= s.$y;
    var h = s._fp[zf](t, i, n, e);
    if (!h) return !1;
    t = h.x * r, i = h.y * r, n = h[da] * r, e = h[no] * r, n = Math[$o](n) || 1, e = Math[$o](e) || 1;
    var a = Ni(), o = a[uo];
    o[da] < n || o[no] < e ? (o.width = n, o.height = e) : (a.setTransform(1, 0, 0, 1, 0, 0), a[Yf](0, 0, n, e)), a[Fo](1, 0, 0, 1, -t - s.$x * r, -i - s.$y * r), a[mo](r, r), s._ju(a, 1);
    var f = Fi(a, 0, 0, n, e);
    if (!f) return !1;
    f = f.data;
    for (var u = f[rh] / 4; u-- > 0;) if (f[4 * u - 1] > VH) return !0;
    return !1
  }

  function Gn(t, i, n, e, s, r, h, a, o) {
    if (hi(t, i, n, e, a, o)) return null;
    var f, u, c, _ = new XH(zH, [t + n - s, i]), d = new XH(YH, [t + n, i, t + n, i + r]),
      l = new XH(zH, [t + n, i + e - r]), v = new XH(YH, [t + n, i + e, t + n - s, i + e]),
      b = new XH(zH, [t + s, i + e]), y = new XH(YH, [t, i + e, t, i + e - r]), g = new XH(zH, [t, i + r]),
      x = new XH(YH, [t, i, t + s, i]), p = (new XH(WH), [_, d, l, v, b, y, g, x]),
      E = new hY(t + s, i + r, n - s - s, e - r - r);
    t > a ? (f = fY, c = 5) : a > t + n ? (f = cY, c = 1) : (f = uY, c = 0), i > o ? (u = _Y, f == fY && (c = 7)) : o > i + e ? (u = lY, f == cY ? c = 3 : f == uY && (c = 4)) : (u = dY, f == fY ? c = 6 : f == cY && (c = 2));
    var m = Xn(c, t, i, n, e, s, r, h, a, o, E), w = m[0], T = m[1], k = new ZH, O = k._fy;
    O[dh](new XH(GH, [w.x, w.y])), O.push(new XH(zH, [a, o])), O[dh](new XH(zH, [T.x, T.y])), T._lw && (O[dh](T._lw), T[Hf]++);
    for (var M = T[Hf] % 8, I = w[Hf]; O[dh](p[M]), ++M, M %= 8, M != I;) ;
    return w._lw && O[dh](w._lw), k[Uf](), k
  }

  function zn(t, i, e, s, r, h, a, o, f, u, c, _, d, l) {
    var v = new sY(_, d, e, s), b = new sY(i[0], i[1], i[4], i[5]), y = b._46(v, c), g = y[0], x = y[1];
    if (g[Wf] !== n) {
      g[Hf] = (t - 1) % 8, x[Hf] = (t + 1) % 8;
      var p = g[Wf];
      7 == t ? (g.y = h + u + Math.min(l[no], p), x.x = r + f + Math.min(l[da], p)) : 5 == t ? (g.x = r + f + Math.min(l[da], p), x.y = h + o - u - Math.min(l[no], p)) : 3 == t ? (g.y = h + o - u - Math.min(l[no], p), x.x = r + a - f - Math.min(l.width, p)) : 1 == t && (g.x = r + a - f - Math.min(l[da], p), x.y = h + u + Math.min(l[no], p))
    } else {
      v._mw(v._n6, v._n4, g.x, g.y), g = v._$e(i), v._mw(v._n6, v._n4, x.x, x.y), x = v._$e(i);
      var E = Vn(i, [g, x]), m = E[0], w = E[2];
      g._lwNO = t, x[Hf] = t, g._lw = new XH(YH, m[oh](2)), x._lw = new XH(YH, w[oh](2))
    }
    return [g, x]
  }

  function Yn(t, i, n, e, s, r, h, a, o, f) {
    var u, c;
    if (o - a >= i + r) u = {y: n, x: o - a}, u[Hf] = 0; else {
      u = {y: n + h, x: Math.max(i, o - a)};
      var _ = [i, n + h, i, n, i + r, n], d = new sY(o, f, u.x, u.y);
      if (u = d._$e(_)) {
        B(u) && (u = u[0].t > u[1].t ? u[0] : u[1]);
        var l = Vn(_, [u]);
        l = l[0], l && (u._lw = new XH(YH, l.slice(2))), u[Hf] = 7
      } else u = {y: n, x: i + r}, u._lwNO = 0
    }
    if (i + e - r >= o + a) c = {y: n, x: o + a}, c._lwNO = 0; else {
      c = {y: n + h, x: Math.min(i + e, o + a)};
      var v = [i + e - r, n, i + e, n, i + e, n + h], d = new sY(o, f, c.x, c.y);
      if (c = d._$e(v)) {
        B(c) && (c = c[0].t < c[1].t ? c[0] : c[1]);
        var l = Vn(v, [c]);
        l && l[l[rh] - 1] && (c._lw = new XH(YH, l[l[rh] - 1][oh](2))), c[Hf] = 1
      } else c = {y: n, x: i + e - r}, c[Hf] = 0
    }
    return [u, c]
  }

  function Hn(t, i, n, e, s, r, h, a, o, f) {
    var u, c;
    if (f - a >= n + h) u = {x: i + e, y: f - a}, u[Hf] = 2; else {
      u = {x: i + e - r, y: Math.max(n, f - a)};
      var _ = [i + e - r, n, i + e, n, i + e, n + h], d = new sY(o, f, u.x, u.y);
      if (u = d._$e(_)) {
        B(u) && (u = u[0].t > u[1].t ? u[0] : u[1]);
        var l = Vn(_, [u]);
        l = l[0], l && (u._lw = new XH(YH, l[oh](2))), u[Hf] = 1
      } else u = {x: i + e, y: n + h}, u[Hf] = 2
    }
    if (n + s - h >= f + a) c = {x: i + e, y: f + a}, c[Hf] = 2; else {
      c = {x: i + e - r, y: Math.min(n + s, f + a)};
      var v = [i + e, n + s - h, i + e, n + s, i + e - r, n + s], d = new sY(o, f, c.x, c.y);
      if (c = d._$e(v)) {
        B(c) && (c = c[0].t < c[1].t ? c[0] : c[1]);
        var l = Vn(v, [c]);
        l[1] && (c._lw = new XH(YH, l[1].slice(2))), c[Hf] = 3
      } else c = {x: i + e, y: n + s - h}, c[Hf] = 2
    }
    return [u, c]
  }

  function Un(t, i, n, e, s, r, h, a, o, f) {
    var u, c;
    if (o - a >= i + r) c = {y: n + s, x: o - a}, c[Hf] = 4; else {
      c = {y: n + s - h, x: Math.max(i, o - a)};
      var _ = [i + r, n + s, i, n + s, i, n + s - h], d = new sY(o, f, c.x, c.y);
      if (c = d._$e(_)) {
        B(c) && (c = c[0].t < c[1].t ? c[0] : c[1]);
        var l = Vn(_, [c]);
        l = l[l[rh] - 1], l && (c._lw = new XH(YH, l[oh](2))), c._lwNO = 5
      } else c = {y: n + s, x: i + r}, c._lwNO = 4
    }
    if (i + e - r >= o + a) u = {y: n + s, x: o + a}, u._lwNO = 4; else {
      u = {y: n + s - h, x: Math.min(i + e, o + a)};
      var v = [i + e, n + s - h, i + e, n + s, i + e - r, n + s], d = new sY(o, f, u.x, u.y);
      if (u = d._$e(v)) {
        B(u) && (u = u[0].t > u[1].t ? u[0] : u[1]);
        var l = Vn(v, [u]);
        l[0] && (u._lw = new XH(YH, l[0][oh](2))), u[Hf] = 3
      } else u = {y: n + s, x: i + e - r}, u._lwNO = 4
    }
    return [u, c]
  }

  function Wn(t, i, n, e, s, r, h, a, o, f) {
    var u, c;
    if (f - a >= n + h) c = {x: i, y: f - a}, c[Hf] = 6; else {
      c = {x: i + r, y: Math.max(n, f - a)};
      var _ = [i, n + h, i, n, i + r, n], d = new sY(o, f, c.x, c.y);
      if (c = d._$e(_)) {
        B(c) && (c = c[0].t < c[1].t ? c[0] : c[1]);
        var l = Vn(_, [c]);
        l = l[l[rh] - 1], l && (c._lw = new XH(YH, l[oh](2)))
      } else c = {x: i, y: n + h};
      c[Hf] = 7
    }
    if (n + s - h >= f + a) u = {x: i, y: f + a}, u[Hf] = 6; else {
      u = {x: i + r, y: Math.min(n + s, f + a)};
      var v = [i + r, n + s, i, n + s, i, n + s - h], d = new sY(o, f, u.x, u.y);
      if (u = d._$e(v)) {
        B(u) && (u = u[0].t > u[1].t ? u[0] : u[1]);
        var l = Vn(v, [u]);
        l[0] && (u._lw = new XH(YH, l[0][oh](2))), u[Hf] = 5
      } else u = {x: i, y: n + s - h}, u[Hf] = 6
    }
    return [u, c]
  }

  function Xn(t, i, n, e, s, r, h, a, o, f, u) {
    var c = a / 2;
    switch (r = r || 1e-4, h = h || 1e-4, t) {
      case 7:
        var _ = [i, n + h, i, n, i + r, n], d = i + r, l = n + h;
        return zn(t, _, d, l, i, n, e, s, r, h, a, o, f, u);
      case 5:
        return _ = [i + r, n + s, i, n + s, i, n + s - h], d = i + r, l = n + s - h, zn(t, _, d, l, i, n, e, s, r, h, a, o, f, u);
      case 3:
        return _ = [i + e, n + s - h, i + e, n + s, i + e - r, n + s], d = i + e - r, l = n + s - h, zn(t, _, d, l, i, n, e, s, r, h, a, o, f, u);
      case 1:
        return _ = [i + e - r, n, i + e, n, i + e, n + h], d = i + e - r, l = n + h, zn(t, _, d, l, i, n, e, s, r, h, a, o, f, u);
      case 0:
        return Yn(t, i, n, e, s, r, h, c, o, f, u);
      case 2:
        return Hn(t, i, n, e, s, r, h, c, o, f, u);
      case 4:
        return Un(t, i, n, e, s, r, h, c, o, f, u);
      case 6:
        return Wn(t, i, n, e, s, r, h, c, o, f, u)
    }
  }

  function Vn(t, i) {
    for (var e, s, r, h, a, o, f = t[0], u = t[1], c = t[2], _ = t[3], d = t[4], l = t[5], v = [], b = 0; b < i.length; b++) a = i[b], o = a.t, 0 != o && 1 != o ? (e = f + (c - f) * o, s = u + (_ - u) * o, r = c + (d - c) * o, h = _ + (l - _) * o, v[dh]([f, u, e, s, a.x, a.y]), f = a.x, u = a.y, c = r, _ = h) : v[dh](null);
    return r !== n && v[dh]([a.x, a.y, r, h, d, l]), v
  }

  function Zn(t) {
    return this[Xf] && this[Vf] && (t.x -= this[Vf].x, t.y -= this[Vf].y), this[Zf] && Ai(t, this[Zf]), t.x += this.$offsetX || 0, t.y += this[Kf] || 0, this.$rotatable && this[Jf] ? Ai(t, this.$_hostRotate) : t
  }

  function Kn(t) {
    return this[Qf] && this[Jf] && Ai(t, -this[Jf]), t.x -= this[tu] || 0, t.y -= this.$offsetY || 0, this[Zf] && Ai(t, -this[Zf]), this[Xf] && this[Vf] && (t.x += this[Vf].x, t.y += this[Vf].y), t
  }

  function Jn() {
    var t = this[iu];
    this[iu] && (this[iu] = !1, this[nu] = !0, this._8d.setByRect(this._jk), this[eu] && this._8d[su](this[eu]), this[ru] && this._8d[su](this[ru]));
    var i = this._$q();
    if (i) var n = this.showPointer && this.$pointerWidth;
    return this.$invalidateAnchorPoint && this[Xf] && (this.$invalidateAnchorPoint = !1, n && (t = !0), this[Vf] = ci(this[hu], this._8d[da], this._8d.height), this[Vf].x += this._8d.x, this[Vf].y += this._8d.y), i ? (t && (this[au] = !0, Qn[hh](this, n)), this[au] && (this[au] = !1, this[ou] = this[fu] && this[uu] && this[uu].bounds ? LH[bh][cu].call(this[fu], this[uu][No]) : null), t) : (this.__mjPointer = !1, t)
  }

  function Qn(t) {
    var i = this._8d.x + this.$border / 2, n = this._8d.y + this[ru] / 2, e = this._8d[da] - this.$border,
      s = this._8d.height - this[ru], r = 0, h = 0;
    if (this[_u] && (j(this[_u]) ? r = h = this.$borderRadius : (r = this.$borderRadius.x || 0, h = this[_u].y || 0), r = Math.min(r, e / 2), h = Math.min(h, s / 2)), t && (this[du] = this[Vf].x - this.$offsetX + this.$pointerX, this[lu] = this._n7k.y - this[Kf] + this.$pointerY, !this._8d[Bo](this[du], this[lu]))) {
      var a = new JH(i, n, e, s, r, h, this[vu], this[du], this[lu]);
      return this[uu] = a._lw, this[uu].bounds.set(i, n, e, s), void (this[bu] = !0)
    }
    this._mbShape && this._mbShape[yu](), this[uu] = EW[gu](i, n, e, s, r, h, this[uu]), this._mbShape.bounds.set(i, n, e, s)
  }

  function te(t, i, n, e) {
    return e && (t[da] < 0 || t[no] < 0) ? (t.x = i, t.y = n, void (t[da] = t.height = 0)) : (i < t.x ? (t.width += t.x - i, t.x = i) : i > t.x + t[da] && (t[da] = i - t.x), void (n < t.y ? (t[no] += t.y - n, t.y = n) : n > t.y + t[no] && (t[no] = n - t.y)))
  }

  function ie(t, i, e) {
    var s, r = t[xu], h = t[pu] === n ? this[pu] : t.layoutByPath;
    return this[Eu] instanceof ZH && h ? (s = pH[mu](r, this.$data, this[hf], i, e), s.x *= this._jl, s.y *= this._jm) : (s = ci(r, this._8d[da], this._8d[no]), s.x += this._8d.x, s.y += this._8d.y), Zn[hh](this, s)
  }

  function ne(t, i) {
    if (i) if (i._8d.isEmpty()) t.$x = i.$x, t.$y = i.$y; else {
      var n = ie[hh](i, t);
      t.$x = n.x, t.$y = n.y, t[wu] = n[Vo]
    } else t.$x = 0, t.$y = 0;
    t[Tu] && iU.call(t)
  }

  function ee(t) {
    if (t[ku] === n) {
      var i, e;
      if (t.setLineDash) i = t[Ou], e = t[Mu]; else {
        var s;
        if (t.mozDash !== n) s = Iu; else {
          if (t[Su] === n) return !1;
          s = Su
        }
        e = function (t) {
          this[s] = t
        }, i = function () {
          return this[s]
        }
      }
      Z(t, ku, {
        get: function () {
          return i[hh](this)
        }, set: function (t) {
          e[hh](this, t)
        }
      })
    }
    if (t.lineDashOffset === n) {
      var r;
      if (t[Pu] !== n) r = Pu; else {
        if (t[Au] === n) return;
        r = Au
      }
      Z(t, Cu, {
        get: function () {
          return this[r]
        }, set: function (t) {
          this[r] = t
        }
      })
    }
  }

  function se(t, i, n, e, s) {
    var r, h, a, o, f, u, c, _, d = function (t) {
      return function (i) {
        t(i)
      }
    }, l = function () {
      h = null, a = null, o = f, f = null, u = null
    }, v = function (t) {
      r = t, c || (c = ji()), c[da] = r.width, c[no] = r[no], i[da] = r[da], i[no] = r.height
    }, b = function (t) {
      y(), l(), h = t[Lu] ? t.transparencyIndex : null, a = 10 * t.delayTime, f = t[Ru]
    }, y = function () {
      if (u) {
        var t = u[Po](0, 0, r[da], r[no]), n = {data: t, _pixels: Dn(t.data, r[da], r.height), delay: a};
        s.call(i, n)
      }
    }, g = function (t) {
      u || (u = c[co](_o));
      var i = t.lctFlag ? t.lct : r.gct, n = u[Po](t.leftPos, t[Du], t[da], t[no]);
      t[ju][Nu](function (t, e) {
        h !== t ? (n[Yo][4 * e + 0] = i[t][0], n[Yo][4 * e + 1] = i[t][1], n[Yo][4 * e + 2] = i[t][2], n[Yo][4 * e + 3] = 255) : (2 === o || 3 === o) && (n.data[4 * e + 3] = 0)
      }), u.putImageData(n, t[qu], t[Du])
    }, x = function () {
    }, p = {
      hdr: d(v), gce: d(b), com: d(x), app: {NETSCAPE: d(x)}, img: d(g, !0), eof: function () {
        y(), n.call(i)
      }
    }, E = new XMLHttpRequest;
    qz || E[Bu]("text/plain; charset=x-user-defined"), E.onload = function () {
      _ = new hU(E[$u]);
      try {
        oU(_, p)
      } catch (t) {
        e[hh](i, Wa)
      }
    }, E[Fu] = function () {
      e[hh](i, Gu)
    }, E[Za](Ka, t, !0), E[io]()
  }

  function re(t) {
    var i = [51, 10, 10, 100, 101, 109, 111, 46, 113, 117, 110, 101, 101, 46, 99, 111, 109, 44, 109, 97, 112, 46, 113, 117, 110, 101, 101, 46, 99, 111, 109, 44, 99, 110, 46, 113, 117, 110, 101, 101, 46, 99, 111, 109, 10, 50, 46, 48, 10, 49, 52, 57, 50, 54, 55, 54, 49, 48, 53, 50, 50, 48, 10, 10, 10];
    return i[Nu](function (n, e) {
      i[e] = t(n)
    }), i[zu]("")
  }

  function he(t, i) {
    try {
      if (null == t || t[rh] < 8) return;
      if (null == i || i[rh] <= 0) return;
      for (var n = "", e = 0; e < i[rh]; e++) n += i[Yu](e).toString();
      var s = Math.floor(n[rh] / 5),
        r = parseInt(n[Hu](s) + n[Hu](2 * s) + n[Hu](3 * s) + n[Hu](4 * s) + n[Hu](5 * s), 10), h = Math[$o](i[rh] / 2),
        a = Math.pow(2, 31) - 1, o = parseInt(t.substring(t[rh] - 8, t[rh]), 16);
      for (t = t[Ta](0, t.length - 8), n += o; n[rh] > 10;) n = (parseInt(n.substring(0, 10), 10) + parseInt(n.substring(10, n[rh]), 10)).toString();
      n = (r * n + h) % a;
      for (var f = "", u = "", e = 0; e < t.length; e += 2) f = parseInt(parseInt(t.substring(e, e + 2), 16) ^ Math.floor(n / a * 255), 10), u += String[Uu](f), n = (r * n + h) % a;
      return 0 | u[0] ? BU = lU[Wu + yU + Xu](u) : null
    } catch (c) {
    }
  }

  function ae() {
    var t = uU;
    if (!t) return void (HU = !0);
    qU = t;
    var i;
    t = t[Rh](Vh);
    for (var n = 0; n < t[rh] && (i = he(t[n], _U), !(i && i.split(Oo).length >= 8));) 1 == t[rh] && (i = he(t[n], Vu)), n++;
    if (!i || i[Rh](Oo)[rh] < 8) return GU = !0, "" === _U || _U == Zu + EU + Ku + mU + Rf || _U == Ju + pU + Qu ? (zU = XU, HU = !1, void (NU = !1)) : (zU = XU, void (HU = !0));
    NU = i.split(Oo);
    var e = NU[3];
    if (e != VX) return void (GU = !0);
    HU = !1;
    var s = NU[0];
    s > 1 && (GU = !1);
    var r = NU[5];
    YU = r;
    var h = NU[6];
    zU = h
  }

  function oe() {
    var t = qU;
    if (t) {
      var i;
      t = t[Rh](Vh);
      for (var n = 0; n < t.length && (i = VU(t[n], _U), !(i && i[Rh](Oo).length >= 8));) 1 == t[rh] && (i = VU(t[n], Vu)), n++;
      if (i[Rh](Oo)[rh] >= 8) return void (UU = !1)
    }
    return _U && _U != Zu + EU + Ku + mU + Rf && _U != Ju + pU + Qu ? void (UU = !0) : void (UU = !1)
  }

  function fe() {
    if (GU) {
      var t = pr[MU + Xo]._ju, i = FU;
      pr[MU + Xo]._ju = function () {
        t.apply(this, arguments), i[hh](this[tc], this.g)
      };
      var n = fW[MU + Xo]._hg;
      fW[MU + Xo]._hg = function (t) {
        n.apply(this, arguments), i[hh](this, t)
      }
    }
  }

  function ue() {
    if (YU !== !0 && YU) {
      var t = YU.split(ea);
      if (3 != t[rh]) return void (wW.prototype._ju = null);
      var i = parseInt(t[0], 10), n = parseInt(t[1], 10), e = parseInt(t[2], 10), s = 3,
        r = (365.2425 * (i - 2e3 + 10 * s) + (n - 1) * s * 10 + e) * s * 8 * s * 1200 * 1e3;
      cU > r && (wW[bh]._ju = null)
    }
  }

  function ce() {
    var t = 0 | zU;
    if (t) {
      var i = PY.prototype._km;
      PY[MU + Xo]._km = function () {
        return this._jz[rh] > t ? !1 : i[xh](this, arguments)
      }
    }
  }

  function _e() {
    HU && (Qz[MU + Xo]._km = Qz[MU + Xo]._fo)
  }

  function de() {
    if (UU) {
      var t = FU, i = fW[MU + Xo]._hg;
      fW[MU + Xo]._hg = function (n) {
        i[xh](this, arguments), t.call(this, n)
      }
    }
  }

  function le() {
    if (WU) {
      var t = pr[MU + Xo]._ju, i = FU;
      pr[MU + Xo]._ju = function () {
        t.apply(this, arguments), i.call(this[tc], this.g)
      }
    }
  }

  function ve() {
    NU === n && (fW[MU + Xo]._jb = hY[ic])
  }

  function be(t) {
    var i = ji(!0);
    return ee(i.g), i[nc] = function () {
      return !1
    }, t.appendChild(i), i[ec] = tW, i
  }

  function d(t, i) {
    function n(t, n) {
      for (var e = t.length, s = n[rh], r = e + s, h = new Array(r), a = 0, o = 0, f = 0; r > f;) h[f++] = a === e ? n[o++] : o === s || i(t[a], n[o]) <= 0 ? t[a++] : n[o++];
      return h
    }

    function e(t) {
      var i = t[rh], s = Math[ch](i / 2);
      return 1 >= i ? t : n(e(t[oh](0, s)), e(t[oh](s)))
    }

    return e(t)
  }

  function ye(t) {
    t[da] = t[da]
  }

  function ge(t) {
    hW || (hW = "imageSmoothingEnabled" in CanvasRenderingContext2D[bh] ? "imageSmoothingEnabled" : "mozImageSmoothingEnabled" in CanvasRenderingContext2D.prototype ? "mozImageSmoothingEnabled" : "msImageSmoothingEnabled" in CanvasRenderingContext2D[bh] ? "msImageSmoothingEnabled" : "webkitImageSmoothingEnabled" in CanvasRenderingContext2D[bh] ? "webkitImageSmoothingEnabled" : "imageSmoothingEnabled"), t[hW] = !1
  }

  function xe(t, i, n, e, s) {
    e = X(i + e) - (i = W(i)), s = X(n + s) - (n = W(n)), t[Yf](i, n, e, s), t.rect(i, n, e, s)
  }

  function W(t) {
    return Math[Uh](t)
  }

  function X(t) {
    return Math[ch](t)
  }

  function pe(t) {
    var i = [];
    return t[Nu](function (t) {
      i.push(-t)
    }), i
  }

  function Ee(t) {
    return t %= cW, 0 > t && (t += cW), t
  }

  function me(t, i, n, e, s, r, h, a) {
    var o = ((t * e - i * n) * (s - h) - (t - n) * (s * a - r * h)) / ((t - n) * (r - a) - (i - e) * (s - h)),
      f = ((t * e - i * n) * (r - a) - (i - e) * (s * a - r * h)) / ((t - n) * (r - a) - (i - e) * (s - h));
    if (isNaN(o) || isNaN(f)) return !1;
    if (t >= n) {
      if (!(o >= n && t >= o)) return !1
    } else if (!(o >= t && n >= o)) return !1;
    if (i >= e) {
      if (!(f >= e && i >= f)) return !1
    } else if (!(f >= i && e >= f)) return !1;
    if (s >= h) {
      if (!(o >= h && s >= o)) return !1
    } else if (!(o >= s && h >= o)) return !1;
    if (r >= a) {
      if (!(f >= a && r >= f)) return !1
    } else if (!(f >= r && a >= f)) return !1;
    return !0
  }

  function we(t, i) {
    for (var n = 0, e = t[rh]; e > n;) {
      for (var s = t[n], r = t[(n + 1) % e], h = 0; 4 > h;) {
        var a = i[h], o = i[(h + 1) % e];
        if (me(s[0], s[1], r[0], r[1], a[0], a[1], o[0], o[1])) return !0;
        h++
      }
      n++
    }
    return !1
  }

  function Te(t, i, n, e) {
    return [t * e - i * n, t * n + i * e]
  }

  function ke(t) {
    return t.parent ? (t = t[sc], t._dx ? t._dx : t instanceof mW && t._fx === !1 ? t : null) : null
  }

  function Oe(t, i, n) {
    if (n = n || i[rc], n == t) return !1;
    var e = t.getEdgeBundle(n);
    return e || (e = new qX(t, n), t[hc][n.id] = e), e._hy(i, t)
  }

  function Me(t, i, n) {
    if (n = n || i.toAgent, n == t) return !1;
    var e = t[ac](n);
    return e ? e._dc(i, t) : void 0
  }

  function Ie(t, i, e) {
    return e === n && (e = i.toAgent), e != t ? (t._8b || (t._8b = new Qz), t._8b.add(i) === !1 ? !1 : void t._95++) : void 0
  }

  function Se(t, i, n) {
    return t._8b && t._8b.remove(i) !== !1 ? (t._95--, void Me(t, i, n)) : !1
  }

  function Pe(t, i) {
    return i[oc] != t ? (t._97 || (t._97 = new Qz), t._97.add(i) === !1 ? !1 : void t[fc]++) : void 0
  }

  function Ae(t, i) {
    return t._97 && t._97.remove(i) !== !1 ? (t[fc]--, void Me(i[oc], i, t)) : !1
  }

  function Ce(t, i) {
    if (i === n && (i = t instanceof gW), i) {
      if (t[uc]()) return null;
      var e = Ce(t[cc], !1);
      if (t.isLooped()) return e;
      for (var s = Ce(t.to, !1); null != e && null != s;) {
        if (e == s) return e;
        if (e[_c](s)) return s;
        if (s[_c](e)) return e;
        e = Ce(e, !1), s = Ce(s, !1)
      }
      return null
    }
    for (var r = t[sc]; null != r;) {
      if (r._ic()) return r;
      r = r.parent
    }
    return null
  }

  function Le(t, i, n) {
    t._ic() && t[eh]() && t[ah][Nu](function (t) {
      t instanceof xW && i.add(t) && Le(t, i, n)
    }, this), t[dc]() && t._dn[Nu](function (t) {
      (null == n || n[lc](t)) && i.add(t) && Le(t, i, n)
    })
  }

  function Re(t, i) {
    i[sc] ? i[sc][vc](i, i[sc][bc] - 1) : t[yc].setIndex(i, t[yc][rh] - 1)
  }

  function De(t, i) {
    i[sc] ? i[sc][vc](i, 0) : t.roots[gc](i, 0)
  }

  function je(t, i) {
    if (i instanceof gW) return void (i[uc]() || qe(t, i));
    for (Re(t, i); i = i[sc];) Re(t, i)
  }

  function Ne(t, i) {
    if (i instanceof gW) return void (i[uc]() || Be(t, i));
    for (De(t, i); i = i[sc];) De(t, i)
  }

  function qe(t, i) {
    var n = i[oc];
    if (i[xc]()) Re(t, n); else {
      var e = i[rc];
      Re(t, n), Re(t, e)
    }
  }

  function Be(t, i) {
    var n = i.fromAgent;
    if (i[xc]()) De(t, n); else {
      var e = i[rc];
      De(t, n), De(t, e)
    }
  }

  function $e(t, i) {
    return t._95++, t._ff ? (i._if = t._i7, t._i7._id = i, void (t._i7 = i)) : (t._ff = i, void (t._i7 = i))
  }

  function Fe(t, i) {
    t._95--, t._i7 == i && (t._i7 = i._if), i._if ? i._if._id = i._id : t._ff = i._id, i._id && (i._id._if = i._if), i._if = null, i._id = null, Me(t, i, i.$to)
  }

  function Ge(t, i) {
    return t._n99++, t._i5 ? (i._js = t._jf, t._jf._jo = i, void (t._jf = i)) : (t._i5 = i, void (t._jf = i))
  }

  function ze(t, i) {
    t._n99--, t._jf == i && (t._jf = i._js), i._js ? i._js._jo = i._jo : t._i5 = i._jo, i._jo && (i._jo._js = i._js), i._js = null, i._jo = null
  }

  function Ye(t, i) {
    return i = i || new Qz, t.forEachEdge(function (t) {
      i.add({id: t.id, edge: t, fromAgent: t[pc]._dx, toAgent: t.$to._dx})
    }), t[Ec](function (t) {
      t instanceof xW && Ye(t, i)
    }), i
  }

  function He(t, i, n) {
    return We(t, i, n) === !1 ? !1 : Ue(t, i, n)
  }

  function Ue(t, i, n) {
    if (t._ff) for (var e = t._ff; e;) {
      if (i[hh](n, e) === !1) return !1;
      e = e._id
    }
  }

  function We(t, i, n) {
    if (t._i5) for (var e = t._i5; e;) {
      if (i[hh](n, e) === !1) return !1;
      e = e._jo
    }
  }

  function Xe(t, i, e, s, r, h, a) {
    return h || a ? (h = h || 0, a = a === n ? h : a || 0, h = Math.min(h, s / 2), a = Math.min(a, r / 2), t[bf](i + h, e), t.lineTo(i + s - h, e), t.quadTo(i + s, e, i + s, e + a), t[vf](i + s, e + r - a), t[mc](i + s, e + r, i + s - h, e + r), t[vf](i + h, e + r), t[mc](i, e + r, i, e + r - a), t[vf](i, e + a), t[mc](i, e, i + h, e), t[Uf](), t) : (t[bf](i, e), t[vf](i + s, e), t[vf](i + s, e + r), t[vf](i, e + r), t[Uf](), t)
  }

  function Ve(t, i) {
    var n = i.r || 1, e = i.cx || 0, s = i.cy || 0, r = n * Math.tan(Math.PI / 8), h = n * Math.sin(Math.PI / 4);
    t[bf](e + n, s), t[mc](e + n, s + r, e + h, s + h), t[mc](e + r, s + n, e, s + n), t.quadTo(e - r, s + n, e - h, s + h), t[mc](e - n, s + r, e - n, s), t.quadTo(e - n, s - r, e - h, s - h), t[mc](e - r, s - n, e, s - n), t.quadTo(e + r, s - n, e + h, s - h), t[mc](e + n, s - r, e + n, s)
  }

  function Ze(t, i, n, e, s) {
    i instanceof hn && (e = i[da], s = i[no], n = i.cy - s / 2, i = i.cx - e / 2);
    var r = .5522848, h = e / 2 * r, a = s / 2 * r, o = i + e, f = n + s, u = i + e / 2, c = n + s / 2;
    return t.moveTo(i, c), t[wc](i, c - a, u - h, n, u, n), t[wc](u + h, n, o, c - a, o, c), t[wc](o, c + a, u + h, f, u, f), t.curveTo(u - h, f, i, c + a, i, c), t
  }

  function Ke(t, i, n, e, s) {
    var r = 2 * e, h = 2 * s, a = i + e / 2, o = n + s / 2;
    return t[bf](a - r / 4, o - h / 12), t.lineTo(i + .306 * e, n + .579 * s), t[vf](a - r / 6, o + h / 4), t.lineTo(i + e / 2, n + .733 * s), t[vf](a + r / 6, o + h / 4), t.lineTo(i + .693 * e, n + .579 * s), t[vf](a + r / 4, o - h / 12), t.lineTo(i + .611 * e, n + .332 * s), t[vf](a + 0, o - h / 4), t[vf](i + .388 * e, n + .332 * s), t[Uf](), t
  }

  function Je(t, i, n, e, s) {
    return t[bf](i, n), t[vf](i + e, n + s / 2), t[vf](i, n + s), t[Uf](), t
  }

  function Qe(t, i, n, e, s) {
    return t[bf](i, n + s / 2), t[vf](i + e / 2, n), t[vf](i + e, n + s / 2), t[vf](i + e / 2, n + s), t[Uf](), t
  }

  function ts(t, i, n, e, s, r) {
    return t[bf](i, n), t.lineTo(i + e, n + s / 2), t.lineTo(i, n + s), r || (t[vf](i + .25 * e, n + s / 2), t[Uf]()), t
  }

  function is(t, i, n, e, s) {
    if (!t || 3 > t) throw new Error("edge number must greater than 2");
    t = 0 | t, e = e || 50, s = s || 0, i = i || 0, n = n || 0;
    for (var r, h, a = 0, o = 2 * Math.PI / t, f = new ZH; t > a;) r = i + e * Math.cos(s), h = n + e * Math.sin(s), a ? f.lineTo(r, h) : f[bf](r, h), ++a, s += o;
    return f[Uf](), f
  }

  function ns() {
    var t = new ZH;
    return t.moveTo(75, 40), t[wc](75, 37, 70, 25, 50, 25), t.curveTo(20, 25, 20, 62.5, 20, 62.5), t[wc](20, 80, 40, 102, 75, 120), t[wc](110, 102, 130, 80, 130, 62.5), t[wc](130, 62.5, 130, 25, 100, 25), t[wc](85, 25, 75, 37, 75, 40), t
  }

  function es() {
    var t = new ZH;
    return t[bf](20, 0), t.lineTo(80, 0), t.lineTo(100, 100), t[vf](0, 100), t.closePath(), t
  }

  function ss() {
    var t = new ZH;
    return t[bf](100, 0), t[vf](100, 80), t[vf](0, 100), t.lineTo(0, 20), t[Uf](), t
  }

  function rs() {
    var t = new ZH;
    return t[bf](20, 0), t[vf](100, 0), t[vf](80, 100), t.lineTo(0, 100), t[Uf](), t
  }

  function hs() {
    var t = new ZH;
    return t[bf](43, 23), t[vf](28, 10), t[vf](37, 2), t[vf](63, 31), t[vf](37, 59), t[vf](28, 52), t[vf](44, 38), t[vf](3, 38), t[vf](3, 23), t[Uf](), t
  }

  function as() {
    var t = new ZH;
    return t.moveTo(1, 8), t[vf](7, 2), t[vf](32, 26), t[vf](7, 50), t[vf](1, 44), t[vf](18, 26), t[Uf](), t.moveTo(27, 8), t.lineTo(33, 2), t[vf](57, 26), t[vf](33, 50), t.lineTo(27, 44), t[vf](44, 26), t.closePath(), t
  }

  function os() {
    var t = new ZH;
    return t[bf](0, 15), t[vf](23, 15), t.lineTo(23, 1), t[vf](47, 23), t[vf](23, 43), t.lineTo(23, 29), t[vf](0, 29), t[Uf](), t
  }

  function fs() {
    var t = new ZH;
    return t.moveTo(0, 21), t[vf](30, 21), t.lineTo(19, 0), t[vf](25, 0), t[vf](47, 25), t.lineTo(25, 48), t[vf](19, 48), t.lineTo(30, 28), t[vf](0, 28), t[Uf](), t
  }

  function us() {
    var t = new ZH;
    return t[bf](0, 0), t[vf](34, 24), t[vf](0, 48), t[vf](14, 24), t[Uf](), t
  }

  function cs() {
    var t = new ZH;
    return t.moveTo(20, 0), t.lineTo(34, 14), t[vf](20, 28), t[vf](22, 18), t[vf](1, 25), t.lineTo(10, 14), t[vf](1, 3), t.lineTo(22, 10), t[Uf](), t
  }

  function _s() {
    var t = new ZH;
    return t[bf](4, 18), t[vf](45, 18), t.lineTo(37, 4), t[vf](83, 25), t.lineTo(37, 46), t.lineTo(45, 32), t.lineTo(4, 32), t[Uf](), t
  }

  function ds() {
    var t = new ZH;
    return t[bf](17, 11), t[vf](27, 11), t.lineTo(42, 27), t[vf](27, 42), t[vf](17, 42), t.lineTo(28, 30), t.lineTo(4, 30), t[vf](4, 23), t.lineTo(28, 23), t[Uf](), t
  }

  function ls() {
    EW.register(dH[Tc], Ze(new ZH, 0, 0, 100, 100)), EW.register(dH[kc], Xe(new ZH, 0, 0, 100, 100)), EW[Oc](dH.SHAPE_ROUNDRECT, Xe(new ZH, 0, 0, 100, 100, 20, 20)), EW.register(dH[Mc], Ke(new ZH, 0, 0, 100, 100)), EW.register(dH[Ic], Je(new ZH, 0, 0, 100, 100)), EW.register(dH.SHAPE_PENTAGON, is(5)), EW[Oc](dH[Sc], is(6)), EW[Oc](dH[Pc], Qe(new ZH, 0, 0, 100, 100)), EW[Oc](dH.SHAPE_HEART, ns()), EW[Oc](dH[Ac], es()), EW[Oc](dH[Cc], ss()), EW[Oc](dH.SHAPE_PARALLELOGRAM, rs());
    var t = new ZH;
    t[bf](20, 0), t[vf](40, 0), t.lineTo(40, 20), t[vf](60, 20), t.lineTo(60, 40), t[vf](40, 40), t[vf](40, 60), t[vf](20, 60), t[vf](20, 40), t[vf](0, 40), t[vf](0, 20), t[vf](20, 20), t[Uf](), EW.register(dH[Lc], t), EW[Oc](dH[Rc], ts(new ZH, 0, 0, 100, 100)), EW.register(dH[Dc], hs()), EW[Oc](dH[jc], as()), EW.register(dH.SHAPE_ARROW_3, os()), EW[Oc](dH[Nc], fs()), EW[Oc](dH[qc], us()), EW[Oc](dH[Bc], cs()), EW.register(dH.SHAPE_ARROW_7, _s()), EW[Oc](dH[$c], ds()), EW[Oc](dH.SHAPE_ARROW_OPEN, ts(new ZH, 0, 0, 100, 100, !0))
  }

  function vs() {
    w(this, vs, arguments), this.busLayout = !0
  }

  function bs() {
    w(this, bs), this._$u = new TY
  }

  function ys() {
    if (this._fx === !0) {
      var t = this._8b, i = this._97;
      if (t) for (t = t._jz; t.length;) {
        var n = t[0];
        Se(this, n, n[rc])
      }
      if (i) for (i = i._jz; i.length;) {
        var n = i[0];
        Ae(this, n, n[oc])
      }
      return void this[Ec](function (t) {
        t._ic() && ys[hh](t)
      })
    }
    var e = Ye(this);
    e[Nu](function (t) {
      t = t.edge;
      var i = t[pc], n = t.$to, e = i[_c](this), s = n[_c](this);
      e && !s ? (Ie(this, t), Oe(this, t)) : s && !e && (Pe(this, t), Oe(t.fromAgent, t, this))
    }, this)
  }

  function gs() {
    w(this, gs, arguments), this[Fc] = null
  }

  function xs(t, i, n, e) {
    return t[i] = n, e ? {
      get: function () {
        return this[i]
      }, set: function (t) {
        if (t !== this[i]) {
          this[i] = t, !this._n7p, this._1g = !0;
          for (var n = e[rh]; --n >= 0;) this[e[n]] = !0
        }
      }
    } : {
      get: function () {
        return this[i]
      }, set: function (t) {
        t !== this[i] && (this[i] = t)
      }
    }
  }

  function ps(t, i) {
    var n = {}, e = {};
    for (var s in i) {
      var r = i[s];
      r.validateFlags && r[Gc][Nu](function (t, i, n) {
        n[i] = zc + t, e[t] = !0
      }), n[s] = xs(t, Th + s, r[Ih], r.validateFlags)
    }
    for (var h in e) t[zc + h] = !0;
    Object[na](t, n)
  }

  function Es(t, i, n, e) {
    if (Array.isArray(i)) for (var s = i[rh]; --s >= 0;) Es(t, i[s], n, e); else {
      var r = i[Yc];
      if (r) {
        if (r instanceof wW || (r = t[r]), !r) return
      } else r = t;
      if (e || (e = t.getProperty(i[Hc], n)), i[Uc] && (r[i.bindingProperty] = e), i[Wc]) {
        var h = i[Wc];
        h instanceof Function || (h = t[h]), h instanceof Function && h[hh](t, e, r)
      }
    }
  }

  function ms() {
    TW.forEach(function (t) {
      this[t] = {}
    }, this)
  }

  function ws(t, i, n, e) {
    return e == dH[Xc] ? void (t[n] = i) : e == dH.PROPERTY_TYPE_CLIENT ? void t.set(n, i) : e == dH[Vc] ? void t[Zc](n, i) : !1
  }

  function Ts() {
    w(this, Ts, arguments)
  }

  function ks() {
    w(this, ks, arguments)
  }

  function Os(t, i, n, e, s, r) {
    var h = Ms(t, i, n, e), a = [];
    return As(t) ? Is(h, i, n, a, e.getStyle(kW.EDGE_EXTEND), s, r) : Fs(t, i, n, a, h, e, s, r), a
  }

  function Ms(t, i, n) {
    if (null != t) {
      if (t == dH[Kc] || t == dH[Jc] || t == dH[Qc] || t == dH.EDGE_TYPE_EXTEND_LEFT || t == dH[t_]) return !0;
      if (t == dH.EDGE_TYPE_ELBOW_VERTICAL || t == dH[i_] || t == dH[n_] || t == dH[e_] || t == dH.EDGE_TYPE_EXTEND_BOTTOM) return !1
    }
    var e = Rs(i, n), s = Ds(i, n);
    return e >= s
  }

  function Is(t, i, n, e, s, r, h) {
    t ? Us(i, n, e, s, r, h) : Ws(i, n, e, s, r, h)
  }

  function Ss(t, i) {
    return i[s_](kW[r_])
  }

  function Ps(t) {
    return null != t && (t == dH[e_] || t == dH[h_] || t == dH[a_] || t == dH[t_])
  }

  function As(t) {
    return t && (t == dH[o_] || t == dH.EDGE_TYPE_ELBOW_HORIZONTAL || t == dH[f_])
  }

  function Cs(t, i, n, e, s, r, h) {
    if (t == dH[Qc]) return {x: h.x, y: r.y};
    if (t == dH.EDGE_TYPE_VERTICAL_HORIZONTAL) return {x: r.x, y: h.y};
    var a;
    if (Ps(t)) {
      var o = Math.min(n.y, e.y), f = Math.min(n.x, e.x), u = Math.max(n[fa], e[fa]), c = Math.max(n[ua], e[ua]);
      if (a = s[s_](kW.EDGE_EXTEND), t == dH[e_]) return new nY((f + c) / 2, o - a);
      if (t == dH[h_]) return new nY(f - a, (o + u) / 2);
      if (t == dH.EDGE_TYPE_EXTEND_BOTTOM) return new nY((f + c) / 2, u + a);
      if (t == dH.EDGE_TYPE_EXTEND_RIGHT) return new nY(c + a, (o + u) / 2)
    }
    var _ = Ss(t, s);
    if (a = _ ? js(t, i, n, e, s.getStyle(kW[u_])) : s.getStyle(kW[c_]), a == Number[__] || a == Number.POSITIVE_INFINITY) return new nY(e.x + e[da] / 2, e.y + e.height / 2);
    if (0 == a) return new nY(n.x + n[da] / 2, n.y + n[no] / 2);
    if (i) {
      var d = n.x + n[ua] < e.x + e.right;
      return new nY(Bs(d, a, n.x, n[da]), n.y + n[no] / 2)
    }
    var l = n.y + n[fa] < e.y + e.bottom;
    return new nY(n.x + n[da] / 2, Bs(l, a, n.y, n[no]))
  }

  function Ls(t, i, n, e) {
    var s = Math.max(i, e) - Math.min(t, n);
    return s - (i - t + e - n)
  }

  function Rs(t, i) {
    var n = Math.max(t.x + (t.width || 0), i.x + (i[da] || 0)) - Math.min(t.x, i.x);
    return n - (t[da] || 0) - (i[da] || 0)
  }

  function Ds(t, i) {
    var n = Math.max(t.y + (t.height || 0), i.y + (i.height || 0)) - Math.min(t.y, i.y);
    return n - (t[no] || 0) - (i[no] || 0)
  }

  function js(t, i, n, e, s) {
    var r = Ns(s, i, n, e, null);
    return r * s
  }

  function Ns(t, i, n, e) {
    return i ? qs(t, n.x, n[ua], e.x, e.right) : qs(t, n.y, n.bottom, e.y, e.bottom)
  }

  function qs(t, i, n, e, s) {
    var r = Ls(i, n, e, s), h = e + s > i + n;
    if (r > 0) {
      if (1 == t) return r + (s - e) / 2;
      if (t >= 0 && 1 > t) return r;
      if (0 > t) return h ? e - i : n - s
    }
    return Math.abs(h && t > 0 || !h && 0 > t ? n - s : i - e)
  }

  function Bs(t, i, n, e) {
    return t == i > 0 ? n + e + Math.abs(i) : n - Math.abs(i)
  }

  function $s(t, i) {
    var n = t.length;
    if (!(3 > n)) {
      var e = i.getStyle(kW.EDGE_CORNER);
      if (e != dH[d_]) {
        var s = i.getStyle(kW[l_]), r = 0, h = 0;
        s && (j(s) ? r = h = s : (r = s.x || 0, h = s.y || 0));
        for (var a, o, f, u, c = t[0], _ = t[1], d = null, l = 2; n > l; l++) {
          var v = t[l], b = _.x - c.x, y = _.y - c.y, p = v.x - _.x, E = v.y - _.y, m = !b || b > -xH && xH > b,
            w = !y || y > -xH && xH > y, T = !p || p > -xH && xH > p, k = !E || E > -xH && xH > E, O = w;
          (m && k || w && T) && (O ? (a = Math.min(2 == l ? Math.abs(b) : Math.abs(b) / 2, r), o = Math.min(l == n - 1 ? Math.abs(E) : Math.abs(E) / 2, h), f = new nY(_.x - (b > 0 ? a : -a), _.y), u = new nY(_.x, _.y + (E > 0 ? o : -o))) : (a = Math.min(l == n - 1 ? Math.abs(p) : Math.abs(p) / 2, r), o = Math.min(2 == l ? Math.abs(y) : Math.abs(y) / 2, h), f = new nY(_.x, _.y - (y > 0 ? o : -o)), u = new nY(_.x + (p > 0 ? a : -a), _.y)), x(t, _), l--, n--, (f.x != c.x || f.y != c.y) && (g(t, f, l), l++, n++), e == dH[v_] ? (g(t, u, l), l++, n++) : e == dH[b_] && (g(t, [_, u], l), l++, n++)), c = _, _ = v
        }
        null != d && u.x == _.x && u.y == _.y && x(t, _)
      }
    }
  }

  function Fs(t, i, n, e, s, r, h, a) {
    var o = r[s_](kW[y_]), f = null == o;
    if (null != o) {
      var u = (new hY)[g_](i)[g_](n);
      u.intersects(o) || (s = Gs(o.x, o.y, u.y, u.x, u[fa], u.right))
    } else o = Cs(t, s, i, n, r, h, a);
    s ? Hs(i, n, o, e, f, h, a) : Ys(i, n, o, e, f, h, a)
  }

  function Gs(t, i, n, e, s, r) {
    return n > i && n - i > e - t && n - i > t - r || i > s && i - s > e - t && i - s > t - r ? !1 : !0
  }

  function zs(t, i, n) {
    return i >= t.x && i <= t.right && n >= t.y && n <= t[fa]
  }

  function Ys(t, i, n, e, s, r, h) {
    var a = Math.max(t.y, i.y), o = Math.min(t.y + t.height, i.y + i[no]), f = null != n ? n.y : o + (a - o) / 2,
      u = r ? r.x : t.x + t.width / 2, c = h ? h.x : i.x + i[da] / 2;
    if (0 == s && null != n && (n.x >= t.x && n.x <= t.x + t[da] && (u = n.x), n.x >= i.x && n.x <= i.x + i[da] && (c = n.x)), zs(i, u, f) || zs(t, u, f) || e[dh](new nY(u, f)), zs(i, c, f) || zs(t, c, f) || e[dh](new nY(c, f)), 0 == e[rh]) if (null != n) zs(i, n.x, f) || zs(t, n.x, f) || e[dh](new nY(n.x, f)); else {
      var _ = Math.max(t.x, i.x), d = Math.min(t.x + t[da], i.x + i[da]);
      e[dh](new nY(_ + (d - _) / 2, f))
    }
  }

  function Hs(t, i, n, e, s, r, h) {
    var a = Math.max(t.x, i.x), o = Math.min(t.x + t[da], i.x + i[da]), f = null != n ? n.x : o + (a - o) / 2,
      u = r ? r.y : t.y + t[no] / 2, c = h ? h.y : i.y + i[no] / 2;
    if (0 == s && null != n && (n.y >= t.y && n.y <= t.y + t.height && (u = n.y), n.y >= i.y && n.y <= i.y + i.height && (c = n.y)), zs(i, f, u) || zs(t, f, u) || e[dh](new nY(f, u)), zs(i, f, c) || zs(t, f, c) || e[dh](new nY(f, c)), 0 == e[rh]) if (null != n) zs(i, f, n.y) || zs(t, f, n.y) || e.push(new nY(f, n.y)); else {
      var _ = Math.max(t.y, i.y), d = Math.min(t.y + t[no], i.y + i.height);
      e.push(new nY(f, _ + (d - _) / 2))
    }
  }

  function Us(t, i, n, e, s, r) {
    var h = i.x + i[da] < t.x, a = t.x + t[da] < i.x, o = h ? t.x : t.x + t.width, f = s.y, u = a ? i.x : i.x + i[da],
      c = r.y, _ = e, d = h ? -_ : _, l = new nY(o + d, f);
    d = a ? -_ : _;
    var v = new nY(u + d, c);
    if (h == a) {
      var b = h ? Math.min(o, u) - e : Math.max(o, u) + e;
      n.push(new nY(b, f)), n[dh](new nY(b, c))
    } else if (l.x < v.x == h) {
      var y = f + (c - f) / 2;
      n[dh](l), n[dh](new nY(l.x, y)), n.push(new nY(v.x, y)), n[dh](v)
    } else n[dh](l), n.push(v)
  }

  function Ws(t, i, n, e, s, r) {
    var h = i.y + i.height < t.y, a = t.y + t[no] < i.y, o = s.x, f = h ? t.y : t.y + t[no], u = r.x,
      c = a ? i.y : i.y + i[no], _ = e, d = h ? -_ : _, l = new nY(o, f + d);
    d = a ? -_ : _;
    var v = new nY(u, c + d);
    if (h == a) {
      var b = h ? Math.min(f, c) - e : Math.max(f, c) + e;
      n.push(new nY(o, b)), n[dh](new nY(u, b))
    } else if (l.y < v.y == h) {
      var y = o + (u - o) / 2;
      n[dh](l), n[dh](new nY(y, l.y)), n.push(new nY(y, v.y)), n[dh](v)
    } else n[dh](l), n[dh](v)
  }

  function Xs(t) {
    return t == dH[x_] || t == dH[Jc] || t == dH.EDGE_TYPE_HORIZONTAL_VERTICAL || t == dH[i_] || t == dH[n_] || t == dH.EDGE_TYPE_EXTEND_TOP || t == dH[h_] || t == dH[a_] || t == dH[t_] || t == dH[o_] || t == dH.EDGE_TYPE_ELBOW_HORIZONTAL || t == dH[f_]
  }

  function Vs(t, i) {
    var n, e;
    i && i[da] && i[no] ? (n = i.width, e = i.height) : n = e = isNaN(i) ? Jz[p_] : i;
    var s = EW.getShape(t, -n, -e / 2, n, e);
    return s || (s = new ZH, s[bf](-n, -e / 2), s[vf](0, 0), s.lineTo(-n, e / 2)), s
  }

  function Zs(t, i) {
    var n = Math.sin(i), e = Math.cos(i), s = t.x, r = t.y;
    return t.x = s * e - r * n, t.y = s * n + r * e, t
  }

  function Ks(t, i, n, e, s, r) {
    var h = Math.atan2(e - i, n - t), a = new nY(s, r);
    return a[Vo] = h, Zs(a, h), a.x += t, a.y += i, a
  }

  function Js(t, i, e, s, r, h) {
    i = si(s, i.x, i.y, e.x, e.y), e = si(r, e.x, e.y, i.x, i.y);
    var a = Math.PI / 2 + Math[ha](e.y - i.y, e.x - i.x), o = t * Math.cos(a), f = t * Math.sin(a);
    i.x += o, i.y += f, e.x += o, e.y += f;
    var u = e.x - i.x, c = e.y - i.y;
    if (h == dH.EDGE_BUNDLE_TYPE_PARALLEL) {
      var _ = [new XH(GH, [i.x, i.y]), new XH(zH, [e.x, e.y])];
      return _[E_] = !1, _
    }
    if (h == dH.EDGE_BUNDLE_TYPE_ELBOW) {
      var d = Math[Ao](u * u + c * c), l = 5;
      return d > 2 * l && (a = Math.atan2(e.y - i.y, e.x - i.x), u = l * Math.cos(a), c = l * Math.sin(a), i.x += u, i.y += c, e.x -= u, e.y -= c), [new XH(zH, [i.x, i.y]), new XH(zH, [e.x, e.y])]
    }
    return [new XH(HH, [i.x + .25 * u, i.y + .25 * c, i.x + .75 * u, i.y + .75 * c, n, n])]
  }

  function Qs(t, i, e) {
    if (g(t, new XH(GH, [i.x, i.y]), 0), e) {
      if (t.length > 1) {
        var s = t[t[rh] - 1];
        if (YH == s[Xo] && (s[Lf] || s[qo][2] === n || null === s[qo][2])) return s[qo][2] = e.x, s[qo][3] = e.y, void (s.invalidTerminal = !0);
        if (HH == s[Xo] && (s.invalidTerminal || s.points[4] === n || null === s[qo][4])) return s[qo][4] = e.x, s[qo][5] = e.y, void (s[Lf] = !0)
      }
      t.push(new XH(zH, [e.x, e.y]))
    }
  }

  function tr(t, i, n) {
    var e = i[m_](t[s_](kW[w_]), n), s = t[s_](kW[T_]);
    return s && (e.x += s.x || 0, e.y += s.y || 0), e
  }

  function ir(t, i, n) {
    var e = i.getPortPoint(t[s_](kW.EDGE_TO_PORT), n), s = t[s_](kW[k_]);
    return s && (e.x += s.x || 0, e.y += s.y || 0), e
  }

  function nr(t, i, n, e, s) {
    var r = e == s, h = t[O_][M_](e), a = r ? h : t[O_][M_](s);
    if (h && a) {
      var o = i[I_], f = t[S_](h), u = r ? f : t[S_](a), c = i[P_]();
      if (r && !c) return t[A_](t[C_], h, o, f);
      var _ = tr(t, h, f), d = ir(t, a, u);
      if (!r && !o && !c) {
        var l = e[L_], v = s[L_];
        if (l != v) {
          var b, y, g, x, p = i[R_];
          l ? (b = h, y = f, g = a, x = u) : (b = a, y = u, g = h, x = f);
          var E = or(y, b, l, g, x, p);
          if (E && 2 == E[rh]) {
            var m = E[0], w = E[1];
            return n[bf](m.x, m.y), w.x == m.x && w.y == m.y && (w.y += .01), n[vf](w.x, w.y), void (n._6h = !0)
          }
        }
      }
      t._3z(i, n, h, a, o, f, u, _, d), (!r && n._fy[E_] !== !1 || c) && er(t, i, n, h, a, o, f, u, _, d), delete n._fy[E_], n._6h = !0
    }
  }

  function er(t, i, e, s, r, h, a, o, f, u) {
    var c = t[D_], _ = t[j_];
    if (!c && !_) return void Qs(e._fy, f, u);
    var d = e._fy;
    if (d[rh]) {
      if (c) {
        var l = d[0], v = l.firstPoint;
        sr(s, a, v, f, n, n)
      }
      if (_) {
        var b, y = d[d[rh] - 1], g = y.lastPoint, x = y[qo].length, p = y[Lf] || g.x === n || g.y === n;
        x >= 4 && (p || o[N_](g.x, g.y)) && (p || (u = g), b = !0, g = {
          x: y[qo][x - 4],
          y: y[qo][x - 3]
        }, o[N_](g.x, g.y) && (u = g, x >= 6 ? (g = {
          x: y[qo][x - 6],
          y: y[qo][x - 5]
        }, y.points = y.points.slice(0, 4), y[Xo] = YH) : 1 == d[rh] ? (g = {
          x: f.x,
          y: f.y
        }, y[qo] = y.points[oh](0, 2), y[Xo] = zH) : (y = d[d[rh] - 2], g = y[Wo]))), sr(r, o, g, u, n, n), b && (x = y.points[rh], y[qo][x - 2] = u.x, y[qo][x - 1] = u.y, u = null)
      }
    } else {
      var E = Math.atan2(u.y - f.y, u.x - f.x), m = Math.cos(E), w = Math.sin(E);
      c && sr(s, a, u, f, m, w), _ && sr(r, o, f, u, -m, -w)
    }
    Qs(e._fy, f, u)
  }

  function sr(t, i, e, s, r, h) {
    if (r === n) {
      var a = Math.atan2(e.y - s.y, e.x - s.x);
      r = Math.cos(a), h = Math.sin(a)
    }
    for (e = {x: e.x, y: e.y}, i[N_](e.x, e.y) || (e = si(i, s.x, s.y, e.x, e.y)); ;) {
      if (!i[N_](e.x, e.y)) return s;
      if (t[q_](e.x - r, e.y - h, Jz[B_])) {
        s.x = e.x - r / 2, s.y = e.y - h / 2;
        break
      }
      e.x -= r, e.y -= h
    }
    return s
  }

  function rr(t, i, n, e, s, r, h, a) {
    if (i[P_]()) return i[$_];
    var o = i[I_];
    if (Xs(o)) {
      var f = Os(o, n, e, t, h, a);
      if (!f || !f[rh]) return null;
      g(f, h, 0), f.push(a), o != dH[o_] && $s(f, t);
      for (var u = [], c = f[rh], _ = 1; c - 1 > _; _++) {
        var d = f[_];
        u.push(B(d) ? new XH(YH, [d[0].x, d[0].y, d[1].x, d[1].y]) : new XH(zH, [d.x, d.y]))
      }
      return u
    }
    if (i.$bundleEnabled) {
      var l = t._2f();
      if (!l) return;
      return Js(l, h, a, n, e, t.getStyle(kW[F_]))
    }
  }

  function hr(t, i, n) {
    var e = t.getStyle(kW[G_]), s = t._2f(), r = e + .2 * s, h = i.x + i[da] - r, a = i.y, o = i.x + i.width,
      f = i.y + r;
    e += s;
    var u = .707, c = -.707, _ = i.x + i[da], d = i.y, l = _ + u * e, v = d + c * e, b = {x: h, y: a}, y = {x: l, y: v},
      g = {x: o, y: f}, x = b.x, p = y.x, E = g.x, m = b.y, w = y.y, T = g.y,
      k = ((T - m) * (w * w - m * m + p * p - x * x) + (w - m) * (m * m - T * T + x * x - E * E)) / (2 * (p - x) * (T - m) - 2 * (E - x) * (w - m)),
      O = ((E - x) * (p * p - x * x + w * w - m * m) + (p - x) * (x * x - E * E + m * m - T * T)) / (2 * (w - m) * (E - x) - 2 * (T - m) * (p - x)),
      r = Math.sqrt((x - k) * (x - k) + (m - O) * (m - O)), M = Math[ha](b.y - O, b.x - k),
      I = Math[ha](g.y - O, g.x - k), S = I - M;
    return 0 > S && (S += 2 * Math.PI), ar(k, O, M, S, r, r, !0, n)
  }

  function ar(t, i, n, e, s, r, h, a) {
    var o, f, u, c, _, d, l, v, b, y, g;
    if (Math.abs(e) > 2 * Math.PI && (e = 2 * Math.PI), _ = Math[ch](Math.abs(e) / (Math.PI / 4)), o = e / _, f = o, u = n, _ > 0) {
      d = t + Math.cos(u) * s, l = i + Math.sin(u) * r, moveTo ? a[bf](d, l) : a[vf](d, l);
      for (var x = 0; _ > x; x++) u += f, c = u - f / 2, v = t + Math.cos(u) * s, b = i + Math.sin(u) * r, y = t + Math.cos(c) * (s / Math.cos(f / 2)), g = i + Math.sin(c) * (r / Math.cos(f / 2)), a.quadTo(y, g, v, b)
    }
  }

  function or(t, i, n, e, s, r) {
    var h = s.cx, a = s.cy, o = Math.cos(r), f = Math.sin(r), u = ur(i, t, {x: h, y: a}, -o, -f);
    if (!u) {
      var c = h < t.x, _ = h > t[ua], d = a < t.y, l = a > t[fa], v = t.cx, b = t.cy, y = c || _, g = d || l;
      r = Math[ha](a - b, h - v), y || g || (r += Math.PI), o = Math.cos(r), f = Math.sin(r), u = ur(i, t, {
        x: h,
        y: a
      }, -o, -f) || {x: v, y: b}
    }
    var x = ur(e, s, {x: u.x, y: u.y}, -u[z_] || o, -u[Y_] || f, !1) || {x: h, y: a};
    return n ? [u, x] : [x, u]
  }

  function fr(t, i, n, e, s, r) {
    var h = i < t.x, a = i > t.right, o = n < t.y, f = n > t[fa];
    if (h && e > 0) {
      var u = t.x - i, c = n + u * s / e;
      if (c >= t.y && c <= t.bottom) return {x: t.x, y: c, perX: e, perY: s}
    }
    if (a && 0 > e) {
      var u = t[ua] - i, c = n + u * s / e;
      if (c >= t.y && c <= t[fa]) return {x: t.right, y: c, perX: e, perY: s}
    }
    if (o && s > 0) {
      var _ = t.y - n, d = i + _ * e / s;
      if (d >= t.x && d <= t[ua]) return {x: d, y: t.y, perX: e, perY: s}
    }
    if (f && 0 > s) {
      var _ = t.bottom - n, d = i + _ * e / s;
      if (d >= t.x && d <= t.right) return {x: d, y: t[fa], perX: e, perY: s}
    }
    return r !== !1 ? fr(t, i, n, -e, -s, !1) : void 0
  }

  function ur(t, i, n, e, s, r) {
    if (!i[N_](n.x, n.y)) {
      if (n = fr(i, n.x, n.y, e, s, r), !n) return;
      return cr(t, i, n, n.perX, n.perY)
    }
    return r === !1 ? cr(t, i, n, e, s) : cr(t, i, {x: n.x, y: n.y, perX: e, perY: s}, e, s) || cr(t, i, n, -e, -s)
  }

  function cr(t, i, n, e, s) {
    for (; ;) {
      if (!i[N_](n.x, n.y)) return;
      if (t[q_](n.x + e, n.y + s)) break;
      n.x += e, n.y += s
    }
    return n
  }

  function _r(t) {
    return Mn(t) ? t : t.match(/.(gif|jpg|jpeg|png)$/gi) || /^data:image\/(\w+\+?\w+);base64,/i[rf](t) ? t : (t = J(t), t instanceof Object && t[Ef] ? t : void 0)
  }

  function dr(t) {
    for (var i = t[sc]; i;) {
      if (i.enableSubNetwork) return i;
      i = i[sc]
    }
    return null
  }

  function lr() {
    w(this, lr, arguments)
  }

  function vr(t, n, e, s, r, h, a) {
    var o = i.createElement(H_);
    o.className = U_, bi(o, zW), n && bi(o, n);
    var f = i.createElement(W_);
    return h && (Zz && (f[X_] = h), FY || (f[V_] = h)), f[Oh] = a, f.src = e, bi(f, YW), r && bi(f, r), s && gi(f, Z_, K_), o[J_] = f, o.appendChild(f), t[Q_](o), o
  }

  function br(t, n) {
    this[td] = i[fo](H_), this[td].className = id, bi(this[td], {
      "background-color": nd,
      overflow: ed,
      "user-select": sd,
      position: rd
    }), this[hd] = vr(this._navPane, {width: ad}, Jz.NAVIGATION_IMAGE_TOP, !1, null, n, od), this[fd] = vr(this._navPane, {height: ad}, Jz[ud], !1, HW, n, Mf), this[cd] = vr(this[td], {
      height: ad,
      right: _d
    }, Jz[ud], !0, HW, n, ua), this[dd] = vr(this[td], {
      width: ad,
      bottom: _d
    }, Jz[ld], !0, null, n, fa), t[Q_](this[td])
  }

  function yr(t, i) {
    if (!Jz[ud]) {
      var n = ji(20, 40), e = n.g;
      e[mo](e[lo], e[lo]), e[bf](16, 4), e[vf](4, 20), e[vf](16, 36), e[hf] = 3, e[vd] = $o, e.lineJoin = $o, e[yf] = xf, e[bd] = yd, e[gd] = 5, e[zo](), Jz.NAVIGATION_IMAGE_LEFT = n[xd]();
      var s = ji(n.height, n[da], !1);
      s.g[Eo](s[da], 0), s.g[Vo](Math.PI / 2), s.g[pd](n, 0, 0), Jz[ld] = s[xd]()
    }
    this._n9aseCanvas = t;
    var r = function (i) {
      G(i);
      var n, e, s = i.target, r = s.name;
      if (Mf == r) n = 1; else if (ua == r) n = -1; else if (od == r) e = 1; else {
        if (fa != r) return;
        e = -1
      }
      Zz && (s.className = Ed, setTimeout(function () {
        s[ec] = ""
      }, 100)), G(i), t._kp[md](n, e)
    };
    br[hh](this, i, r), this._3q(i[Sa], i[wd])
  }

  function gr(t, i) {
    this[tc] = t, this.init(i, t)
  }

  function xr() {
    w(this, xr, arguments)
  }

  function pr(t, i) {
    this[tc] = t, this._j9 = be(i), this.g = this._j9.g, this._9g = new Qz
  }

  function Er(t) {
    var i = t[Td], n = [];
    return t[kd].forEach(function (i) {
      t.isVisible(i) && t[Od](i) && n[dh](i)
    }), i.set(n)
  }

  function mr(t, i, n, e) {
    var s = t[No];
    n = n || s, i = i || 1;
    var r = null;
    r && n.width * n[no] * i * i > r && (i = Math[Ao](r / n[da] / n.height));
    var h = ji();
    ee(h.g), h[da] = n[da] * i, h[no] = n.height * i, t._8y._hg(h.g, i, n);
    var a = null;
    try {
      a = h[xd](e || Md)
    } catch (o) {
      _H[ra](o)
    }
    return {canvas: h, data: a, width: h[da], height: h[no]}
  }

  function wr(t) {
    this[O_] = t, this.topCanvas = t[Id]
  }

  function Tr(t, i) {
    this.interactions = t, this[Sd] = i || Pd
  }

  function kr() {
    w(this, kr, arguments)
  }

  function Or(t, i) {
    if (!t) return i;
    var e = {};
    for (var s in t) e[s] = t[s];
    for (var s in i) e[s] === n && (e[s] = i[s]);
    return e
  }

  function Mr() {
    w(this, Mr, arguments)
  }

  function Ir(t, i, n, e) {
    var s;
    return t.forEachReverseVisibleUI(function (r) {
      var h = r[Yo];
      return h instanceof _H[Ad] && (!e || e(h) !== !1) && r[Cd][Bo](i - r.x, n - r.y) && r[q_](i, n, Jz[Ld] / t.scale) ? (s = h, !1) : void 0
    }), s
  }

  function Sr(t) {
    this.rect = t[jo](), this.points = t.getPortPoints(), this[Rd] = t[Dd]()
  }

  function Pr() {
    w(this, Pr, arguments)
  }

  function Ar() {
    w(this, Ar, arguments)
  }

  function Cr() {
    w(this, Cr, arguments)
  }

  function Lr(i, n, e) {
    i += t[Da], n += t[Na];
    var s = e[Pa]();
    return {x: i + s[Mf], y: n + s.top}
  }

  function Rr(t, i, n) {
    var e = t.offsetWidth, s = t[jd];
    t[Ea].left = i - e / 2 + so, t.style.top = n - s / 2 + so
  }

  function Dr(t) {
    var n = i[fo](uo), e = n.getContext(_o), s = getComputedStyle(t, null), r = s[Io];
    r || (r = s[Nd] + Dh + s.fontSize + Dh + s[qd]), e.font = r;
    var h = t[Ih], a = h.split(Oo), o = parseInt(s.fontSize), f = 0, u = 0;
    return _H.forEach(a, function (t) {
      var i = e.measureText(t).width;
      i > f && (f = i), u += 1.2 * o
    }), {width: f, height: u}
  }

  function jr(t, n) {
    if (Nh == typeof t.selectionStart && Nh == typeof t.selectionEnd) {
      var e = t.value, s = t[Bd];
      t.value = e[oh](0, s) + n + e.slice(t.selectionEnd), t[$d] = t[Bd] = s + n[rh]
    } else if (Fd != typeof i[Gd]) {
      var r = i[Gd][zd]();
      r.text = n, r[Yd](!1), r[Hd]()
    }
  }

  function Nr(i) {
    if (qz) {
      var n = t.scrollX || t[Da], e = t[Ud] || t[Na];
      return i[Hd](), void t[Wd](n, e)
    }
    i[Hd]()
  }

  function qr() {
  }

  function Br() {
    w(this, Br, arguments), this[Xd] = Zz ? 8 : 5
  }

  function $r(t) {
    return t.type == YH || t[Xo] == HH
  }

  function Fr() {
    w(this, Fr, arguments), this[Xd] = Zz ? 8 : 4, this[Vd] = Zz ? 30 : 20
  }

  function Gr(t, i) {
    var n = new hY;
    return n.addPoint(Zn[hh](t, {x: i.x, y: i.y})), n[eo](Zn[hh](t, {
      x: i.x + i[da],
      y: i.y
    })), n[eo](Zn[hh](t, {x: i.x + i[da], y: i.y + i[no]})), n[eo](Zn[hh](t, {x: i.x, y: i.y + i[no]})), n
  }

  function zr(t) {
    t %= 2 * Math.PI;
    var i = Math.round(t / XW);
    return 0 == i || 4 == i ? "ew-resize" : 1 == i || 5 == i ? "nwse-resize" : 2 == i || 6 == i ? "ns-resize" : Zd
  }

  function Yr() {
  }

  function Hr(n, e, s) {
    var r = i[Kd], h = new hY(t[Da], t.pageYOffset, r[Sa] - 2, r[wd] - 2), a = n[Jd], o = n.offsetHeight;
    e + a > h.x + h.width && (e = h.x + h[da] - a), s + o > h.y + h[no] && (s = h.y + h[no] - o), e < h.x && (e = h.x), s < h.y && (s = h.y), n[Ea][Mf] = e + so, n.style.top = s + so
  }

  function Ur(t) {
    this[Qd] = t, this[tl] = function (t) {
      return this._kk && (this[il] ? (cancelAnimationFrame(this._kk), this[il] = null) : clearTimeout(this._kk), this._kk = null), t === !0 || t === !1 ? void this[Qd]() : t ? void (this._kk = setTimeout(function () {
        this[Qd](), this._kk = null
      }[Ah](this), t)) : (this._isFrameTimer = !0, void (this._kk = requestAnimationFrame(function () {
        this._n7ction(), this._kk = null, this._isFrameTimer = null
      }[Ah](this))))
    }
  }

  function Wr(t, i, n, e, s) {
    this.source = t, this[Xo] = nl, this[el] = i, this.event = n, this.data = e, this.datas = s
  }

  function Xr(t) {
    this._4k = {}, this._kp = t, this._kp._1p[sl](this._9y, this), this[rl] = dH[hl]
  }

  function Vr(t) {
    return t >= 100 && 200 > t
  }

  function Zr(t) {
    return t == uX || t == gX || t == yX || t == dX || t == EX || t == mX
  }

  function Kr() {
    var t, i, n = {}, e = [], s = 0, r = {}, h = 0;
    this[O_][Nu](function (a) {
      if (this.isLayoutable(a)) if (a instanceof xW) {
        var o = {node: a, id: a.id, x: a.x, y: a.y};
        for (this[al] && this[al](a, o), n[a.id] = o, e.push(o), s++, i = a.parent; i instanceof mW;) {
          t || (t = {});
          var f = t[i.id];
          f || (f = t[i.id] = {id: i.id, children: []}), f[ah][dh](o), i = i[sc]
        }
      } else if (a instanceof gW && !a[xc]() && a[oc] && a[rc]) {
        var o = {edge: a};
        r[a.id] = o, h++
      }
    }, this);
    var a = {};
    for (var o in r) {
      var f = r[o], u = f.edge, c = u[oc], _ = u.toAgent, d = c.id + xa + _.id, l = _.id + xa + c.id;
      if (n[c.id] && n[_.id] && !a[d] && !a[l]) {
        var v = n[c.id], b = n[_.id];
        f[cc] = v, f.to = b, a[d] = f, this.appendEdgeInfo && this[ol](u, f)
      } else delete r[o], h--
    }
    return {
      groups: t,
      nodesArray: e,
      nodes: n,
      nodeCount: s,
      edges: r,
      edgeCount: h,
      minEnergy: this.minEnergyFunction(s, h)
    }
  }

  function Jr(t) {
    this.graph = t, this.currentMovingNodes = {}
  }

  function Qr() {
    w(this, Qr, arguments)
  }

  function th(t, i, n, e, s) {
    e ? t.forEachEdge(function (e) {
      var r = e[fl](t);
      r != n && r._marker != s && i(r, t)
    }, this, !0) : t[ul](function (e) {
      var r = e[rc];
      r != n && r._marker != s && i(r, t)
    })
  }

  var ih = "06e582558e9bf4e65c70886e8811723a51d9b3c21e75b55f97ab459586ad359d45f5252a8549ec0121cf7e63e126a14fd2078d9a922ce3d78144ea08e4f7622b6ad37d8c64e8729d28bf8665f7aa88210d25a255c5662696dca43e9042659d5e105370cc149594d596e5a15a348d6625a129a3083c807148d71546d28126ac8120ce24d35016acf02db54dcfaa317aa04d0de818c75307ad191dcb63987c8575c4102697d02f72b69b7ac84e61afac25ed52ee630bdf00be9d6ffa2ef2378871463a41f6bf668369047bee2f67458972cd084859a2a0e99dcde681d8e68907ba23d410d704c2caca88c02670b03a78d6103baabdf7a3045292b1860df7394701b66ba66447d0e7bf55dc1e0acdaa34a2fed4d1bed2a7f4c5b721ba5493f13a94bb3350db9e31bbd73e3afc1f9777a637ef9429660c5023590914103655097c15724e57fe1dd7715fc446bc272537eb9f4b85dba1516c64f3bde3f4a8b73d0dd5e80dd5054d72ff0575e0203e20c941cc8a64aef487170cc54985a0580af558e33cb596cb842f0512e997e963ce430220b5bd70b564d022d8f523de8dd32119562537d22184433bb2214371d3114d503adca4afcc61f11d36a44f5a82220c575803be05a8387a3ffc5fa847cce3f4af265411cc63b190251fb9207b86c58bfe7812b706d42bfb22727836c5b2b8bf683867eba082b294de4c13c680d0106270f21b71652b7d2155bc53b66989ed0d3437cc499320fd9bb94bed5dc276a910e053e31a9d4ba6d1e69c57d44a9ff6ab5b55a525155cc604b6aa2a67975bc0376c9980a22dcad86a2acc9cd54cd5a417172acb2186ac404bd6f7e9791b3d448d5c3b4a1504fa4e787a939deb83aba0632434477882d7b6012c7f745dcfaccf8a84bea8e1151c3c75fe5507630eb416cc7992b2c53440e893620f5ecf6a21c141457b7a6f042b22954ed84e36ac7cd127627cf3b57e95664434e63e5358b8620e6757cacc084ea28d6edaa28f5fb1d094a1a4aeb6ec5e670bc0efaf91658b4af80187cfd20f08a1b44a995a4576abc1dc291e997b1ad354a7e203edeb8d3256ec4ea443146f9b9c811aadc9c6e17efed71040fad888e21ac4358461b2a45a524801abe72666046d4a818d6e518d347e7c7b275973c5d424941501470d7cce537a54c5baca30e186d6aad09405b6090dfe0d1a7e6325b49be13e321e096bbdab79b2696d3c46366bb3bc7d9fcba4fb1591f62451d85c59965cc769da19d39b82151c058520ae4c194880b6c491de5219576ed430a11958723146608e7c27e1f91d001cc4bbfabd170d446dac8da2cb1395f47749798c345535ba3ae90b1539ea1683f300fb68c7d764f91ec2d73bcf4e7cf71df030d82041b2613308b533432aa420a4427e562bb92a1177554ce11e4a57bfb26437639fdf6d5de7ee954cceeb87196ea020d6db8e795e2cdea5da760a5da323973c6a0bfbd4c820cf533d3d5feecb5e09d94e503949a105e59bc9c0221a23a3e3772c53ff06adce14fb24c1c632a7eef04d25b3ef841a89765e35a8e7c8c729807a22b7c160bf43052357482856b55068b61e376bc329e7f84f61403074b3f53622d59d07687dc89c69b2211d8e96c7d0768577bb05eb6df182e1a02309e5692dbb3c5d2526b1faca94a8de82faffdd697473f58388585b667f2c4652ae9bcc0ee3a91021a1040b65a8283be4f4b53e5212ec8bbbe532ad03223f36c14e54ffc2535ebdb74d7ccd074c1b3451b7a292c6d072f1522302c92b6f3c274d225bf4ee615989ce672f60ab37d31ab13ce2231ce071fa1e737221997da9dc9cb0c331bbc37913c2ba0100de870f98ba59cd53fd0e479778f2ad1522cc5aa00727b11b7cb2f5364b7144d425aae2fbf2a21df9312dd6cf5e4a5c7612fe3b4f94bebf8878e4e0ce2c765a2b66ee9c68f50ca68feb859274cddfb7124d301de0b0463d6bbadb26945c7d5b924125e4fb1c292edd031747bb91dc15f6c89892fad128f8103c7eb2fce8d22281b53367f614d2b9e1effe4c6b2a0cb64e7edb677c15c048c17881b9f3331868e1b8a6486a2f2d853bbf2b36307ab02596f8c2eabd8a4022c3e29e08f4f2fc96c3b5055b1d56d8a77a6fecc7db1bf973e5ba360693ffec8182fb90f323583553e823cb475fe2d18909d835fd1af9aa34cfe63ee03c9aff589ceb56962def47ed9478b35e3a0de4b2f11e2e1f5dcf67f63d09d80f322536e173351f6bafae27fd21d0c499adcbed8002b7e74f1211e58081424c643382c63448a28bf9cb72ff848efc55d162a3427000fe72a33c099cc69c5ba2b9fa78b57dfffe97610e60e424b322439748452cf2018315bc8be1547cb1de8b1e5b91fd98e4e5f1f7eeb40a22539dcb250427cc90cbe9410d6606831d87396065e9092975fc1a94bf33320dcf7de85156c3291531ed63a5abd15a75294ae59df4de344327e7320f94a780710ee39a33410ceb059a303c02255d7cfbf0321ecb06f77d64dc335be63408d554d9c47cc582443f8850174fc5b61ffceb42e25ef1898a26255dfaa8859c5956fe2329f6c5338c12b9bbb0c473ea2e74f62b51d1e094a8d9de6f6d36fb0959213f9a74c84182535cca38e9ca8fca46606f3063f09b03d46951ac5b8e023f2eaecf64a30b47421fa0c4526c0e0cd6ca3b579e58f2b865cb579c7dcef78865c92937eb7291a7ab5bbce302e3032c2bab6b5570b32a1c66c7fb7fd152258f05ed95a07c4f7ea50dcb73b4531c6305ace5e03acc539a31c09cb5b6f20d2c0323edecb8f4ad1c444fd038994edf811375e40560aad0ad9fdb32647e26145e376384437c01d202bd26d22e3fbccb4cc3af000f3650677d1124480d879d5eac3ec29d88d185d05ae355e259a9b525292e359b344b5b7ffa622d8c76293d1e1fde265391ad02b08e747c76efbfbe36204cd8677120b87effa4ead903bafd12aca8c1266ce1392789ea488685123f8f5dc48a6483a748d07c6e15be6c25482d9ae7d0427e0f68bf9825a184500879199347d03583aeb1441ff99142f5f2a703df8d779ede6794c5e6ebfe286b2d5370c4700dc829262ce3ce5be69c649e5171f964768f70e9ecbf03fcfc603ec952c801fddc322cd2d5a3a4fbfbaf5a35ab829a44c39d8319b6d8d39f579eae7b9d1dc08b3bbecba7c6d50fea1630e91a947253385792ce2981dbc18c1b25cf7c11605581ad61ed5840eaf5241b4886347ca2f41805f05fc4e9232ad88e7c1ec657cfd310bce670384157147cfdf704209f31f35c580b71965dc48c56e4a9e6f2905ad224d86857fda96a95bc5fb23919a577ba191af08b2c6ebf9e61f8674ea936e1f22bce5fe8d8902f6f6e96085e43244f1d140f77731666cf39c1fe92948a6a403b2f4576b6adb4fc823491f60a0cfdbccd5a79a7cb5370e4f3e52580095da060b24fbfd23e540d545afcc350bd858ea15aa010f0832d2cdc1f12ab875abc0c4f0436c82bb077c6adbf7f13fc8375c59e2d55cfbc533517913b9e2e486bcedc3ad67f1e56c97678aeb3b35264b7e4524aecb7e0dce4e2af2e3a29e7b80f3a4d20ea474d6506c01cb6d1063aedb504934c13f7245e2650fe78075b198bcf04028db808ef7eea4c0d5c74f9c34822d66acd2b585ca83c25803b1d0b652210a61dc1d2cd40b2cfb97df3e9ef162ab606a5f1d7c1cef3ad1ed05c4eb3f85160e96afaf1a4be8a68c1a8fde6fefea3bd23a339768aee82c729e3c291065651f339f6447902c853750fc8b00394c8793c85ba53968ecaa7e0ccdb46ffef65bfdc1adb3598941745144110b93acf4bea8bfd61e4710d3caf8a66760e576bff09d0cc6150df06fd1eda199ca05e551ee64032b491397b01fd3b22ffa034ed41c541d92374de88e948cf84ac2e6f71dbc6de38e435ccd7e94bb8d7fa5433caeca6b60a31c5a8d8dfd0d7bd683bbd86dbeb8fd0e32ed152ce97f48fefe62e154afbdbd9ce4de379c85ca153fe2d4bce015a2a9927d1b6df083005317fd566cef112cace50434719676a8190a86ac1fce061e35a8d669ff33713e457650c390fc64578b4584f117e8758bc219f71c09a2502ce5d482e1f9161cd367f557a2cd5ba029c10bb58165554fd75ec2c38cc79d9597f83e7e63dffe3be7309a06cccdbc222ad133e2199ca9907da241d5eefb50ae3568246ebc37364ca2a8d941859b42810611550a7056be6c18be7f09c5a7cc6bb1cef3a657f1858de4232bd6caea1aa1958fb224c40597e9a7e460003766a3bec0b9a53d5f3894e24ddaf397d47c7b9bfb1f634ce72cd3d9497e6c73e40b998d14eb0ae286db6c64ca293d86e79f457fe69bbf53c479e1ddf11318899fed2751e8a0db15cf656e6976c8de038760e471fbb8d710fe2b2583006ac81abf536084538cc94e6ffc78dcec2afcef5789eab82c6572304b1d149338e15d87ed462736e0e35dcfb9dccea37b2e3bcc095d80b8aa1da76a43ad07986521f373da24d1311950a4438d42be8bce519c48b4f27c181fba48865cb6d816f531c34438bb8cc200d4308acb08a703475244f51641bb961b772f6564c48a2a4b039439932461c17f46c8dbde928ae9202b3aea2b15cbad0a13e7882131baa32c92345670bffa5ff66a98626768e7705ab0205dd168c15ff9bc8050c2019d55d39f2437bd73456df68c192fc31c90c5fc727d1f1ffbfbe2f24df34a4956b7dddab486ae5f4b29a782520586498fc517413c80e3b8d7c94f0e28e364d8432d89414bc3cf60dd512ae3bde1ee54a33cb25da0f7f4dad0c7013b6b17c30f4f2a9ed851b8337db4ae5036497cb2f68f60f231307a02ba921a7bd707d0b6b7248b0069a1c00d46fa77b6939d6d13c3338af57691f97e8a3ee01734a8127ff9e584d7a2bcbbf91ff605cb0f28c679b1c678f25c2e8d411301d2dc01ed3bf97ab12381db7349b10ee1754189248f27645e8cf02f194e8c5fc0ab27373a3121b1cb1834d7d000f2e73057b111b7c8fab74c8a4c55cc6ea9a4d6b01012a0c3989f441c1e30dd8caae328483633f97a34c39de8f26f05be495e431f85886dd9aa9040cb0633cdc3f01e9029e540f4ff7d8612d1031f4ced3109acb0af32935f054020dc62172c7965958e4d33b4b3c66f4a30c2d0a10081f2498d0926719799a8c04876c70a49f5ffefc8e4ffe3285a62003c80b5990e9c38827ee6dc401150926a77aa4aec6ebec1845c34250ec6466f32e5812705c11309b1a60d0743e75a5e8034056ab90a0deda005d89cdd37b27e5fefd30baac944bc1ac7a1bd67bf04303660f6e43e066e5899572e066d95aaaf830443e2eb0aa98b1050d5652c3f853356ac7c9ec76d94552be3be0d87c2d7aaa3187857937d3ac1f07876a5e1f331a7f08d8c9bf27071bf42e3e1753e9be4eb3a1a347cae2d7a90e2c18beb7221dbc667a00f47e98aca54b0b5dbaf1bc2381bac3c7de3eb630e9fddfbd0c74f615418a46734bd59aef0074ac08eb376aa5de92b9dea3e0322be94709256d68502cbf0d8231db00ea2668785a37daf35c5e5581fd88901b4f5a463a1a2fb46bfe4ecd4df91a9b2e4f02aaaa1596fa56fc0f9a227298617e64e40bede1294f6a48acd550606718884bf560807eab58f36a707b3f07a35d118e48e4de679b86a3befa9807640c34229179f4a6408334e66d1dc59c5089560189c3bc966907279e63908d0c05bd5b38faf8bc55ed01cca3bfb7c531ec2e7bb9a4e986d10f75cc460b8b6dd1a8130a54aa0db53acdc136a1d6a979cead950af2342423029b0be11ef04c6526a1342547ca6de47661e940a580bf1a930fb15d8d099aecbe9c1e9bc14b576bd47a362fa6a82217988407981e6b25f669eda21bc8fb9c574326d068d1e5135d8d71bd794444bc3ed8bc8d0e31f4fdfd2c879d810c964943598c2bd5d839a120306f5f8cef024d513d0917a4665434bfa4811e88469d6dcf7226cd0d2b892f96792f397059eb7b33c47a84ba915f63b743cd0cb4409292b38732e42483130402bf4eaca9b2ad6bfb7d0c6da68ef9a3cef5155a74ef1b8b345cc8b0262e8faf1c76a564f78e1852fe061c3276b10431ef6a2a533ea96cab3054468b5da4d7baf5d56029eadd444e73139a6c7816d57204ad06e2eb506da89ccaba369c2ddfd8dbbc23cde3ea0dce556684d1efeb30663df45c68bdbcc15abce1d3ba8a5a28c385832db22d1702593f633f2fc768649d6a7fb5601540b7fcfbf961ebf9cddb216f8adc7ed639d61fd318bf214b7040a579317e9dc6ee645608095c526fb7361214c3e1d72765158f4337928d52869a35699722736dd8befcb273dc19dcf6f4f91a216466f0c0196d3e1c50571d862ffe874a7731587a3c3298ba52cc4d366cc53edce16924c27490b0b0fb9624ecf62e04d735375df26435c39fb06400e84ae75e155aba65bd7f77c25b54fb5fb88148b5c40e0815ecd9627a8f4ba4c42e1a144e27e8bf090385a560809d79da7c55190fa54f08bf4d665c4653d5ae5336c09d2ddbe107a732f06f33bbfaa9e885bb1356daa87204624b09bdc68b6872e9f2fd83d4eb2b60fab31594a74e7c0952b988225db10279d531cd27f20788a1c74ddf3c96ae20496c917fd206abc8ffec940be6009f3b7a9c7e1a2465b7deb6250674306c1ede135061d0fb96824032abc817ff01b7b61837a859860c91b5f4e1819442cbb10d99289d0dc80893a3b057a8df60eaf6aea1d136c8fb3ed9cf9f1013d1df1060b098104fb071ea7564170f1997fe6fb71bba23e106bc8485bf8014d66ad9860fee26884cd9b7d1fef0a7199e62008356511ad3637fbfa45659dc14cda0ee309fb4ea23f0aab708fc47fe8208a70b62cf0b9c3cbc71069dd2c06ae61dba94eb8c7960b6a5fb98400e3e8872ebc117d1a469d5fface5b063022ff6c527854d4ba88829958475fc3be64a077c977022840f178417e9d0045028eba86fbca0a450319aff31b1c7363f70c579b7a82a6857c95953d91365e801325c6d98309c7c9b6ddb9a1c5946cbebfcb01ee3ed898e4798f3aeb3f417e935b7811f462cc4ef4ac07b332e7f8468587fcff31c51bf2f6214134b9bfcf799782dc53b17ae5a4da098706de009899d43db9b8e46fde12484a1df8ec4d1829711e6974e20ba023b3a223d576b22864cde356a218069639691a74f1ce1c99f20d767ef3059431f5c8d08e525ed0c68f9abf923fb6fbdab27b06940c0e496bfc9295eb28927f351c602e2aba90c74e843239e061b97fa15c386cacb7b85d1e5922db04e26bcecf3ec70966ca0edc33bd49c2f202cd42e0dcaa2d439022ca07c94a21d7db2751569807934697c7f8a6403dd58f06becf90f2205cd29cd749978c7b28c17aa60c93aa34ce4495689b436924b461db1d9c441cb0456fdf7978e1ab8d33338a89318dd9c8362f89e39e05e77ea654ff6f2f3eb4e4e9ab135bbf11e861ba252dfbf1471d63371d8216aba2312419268a5802ff2d7c60827dfb5256ec387ed7b08b8be140be7f905f13889055ea743f4de5357ea447b283949cf35646c042d0cd76d957cc60b618c9c8119b1bbde5f11a3c1e297db50d13f11a01392d24a9e3b9d852ae9a6d47295fe2e27fe37d6040ee6f60cc89895556ddf269441ac5cd0d09fb7685bffff368db906f3933b09340597d0780b9c0a1f6824632c791e69fd15a1852901ddee0e843d3ad01b58b7f1c34ef9c941b8e044a58c75e85e559f6fb7978173d90819faf4c209e4c71beab7367f5bfea5a1b430ff4753576d69ac7562755c1b2f6379d4c6eebe5a8c4f015a071e3d213be72f3494338b02309868893d2a327ab7ba9efb4791402c36001021a18492c057d27c6d8d0ccab3b3cd65984f5acdef16013c68b302f988f9aee6a3b246c9a85d4c7e599581b01f064e32b54acb082bb811e181f0715ff5bce0dfeb5abb6d97e308ce62880553ed58c760db41ada0308f3d8f740d21d18cc80afc62d709a9e453516591bdfa5438a8cf0e0ac7fbfd9604bd9d2de89d256d3245144492044c4ed3b9c916a139b6e9daf8338d5e073459c5c2bfb9ceebb4393804c8297b0bcdc3d1f35f2c76514db423f5a3b03e5c84603da1cf2c198c321b6e44f8b88ab21509215a93c48fc1165d7495065a8287254f986a7f506f0c2e9367e5c1c5226f8c2908e7d43335c9c15b8f822a19dc10aa00ae46f2f76b6815246d5d955834b581d5806c0185526224e696f77f15dfdecd4070dd1b8ba5edc94b3def5b015c306fda6f7179a9bf300babe76d518c95545fa39218b8b089732ccbf94bcfba81c07ae8b0ac6ca549ea72316532fa7dfb55f6cd98e3f9975bcd80fa80bd5a3c84444fdf8394d29dd052ae5c6e685337fef8fe20d993276da809b89106efe4669a2dfb7a6d935e831ca680c244e3746e1b5076f9110382eb498579f4156255fb7a3330bad87b26ccba4a5ff52d69bdfc175c0d2741d835b39b9a2eb04bb1319ba78000a9a98df1fde41cd713b8eb2f77add707e13cb6e84f393f3a1753b914a66dd07fc814fad840f7a6f8b9151ebe7343c88a12ab0c321a33e5cad8e327147002d3d9d55b429c91a7c300b63830a862108e0b43d1ba9e9c1cebe67fb2fa04b256a503cc2707266b0b828300d2497d2324bbf4c16e6ce9d94cff5cbcef1b5b1926c381028531823af416a7654ca871408248971c290df31ec77a1cfd09794a62006f2aae39de67849c7b7bd67ab3916c5c397f0f306d2ac7b6eaf3650c47a81b04d5da19c0fd8e695c7784adb68c3f7382b9996c69f19effc120a8676d9f314844a975d682fa32a4f290071972e0d7f118eca8c5c5aaa7e938ac6e9a0010f339dda34d39d5bf08fc2d177579299adcf5ef44068190965c931c5e5af9b56a984a8c77f533c90422deb8459d0a3130f2265e2e2da277cccb2eee4b626398748beb3985595608a013f3a6f8c936ff5de9bff9993cabb74475c48333602ed9b1fc2cd52c8565459aabc1ea2268d0670db4a1948cf7a8974e1226a30a66ec0ef2f086d43d6b010b28b738f25ee17975cff4479b97ec5e21b0d5aec5bc025bf66c9904029b41fe1153aa03cccd7390aa652c0b142a0762fd1897a9184e60562709cf161647c88331bb059a21ad3a4cac2a1bb8742d1473e23f7aba0fb971921876762b5fbf770bec20828b9123ed9cdfcf9bd3023034b11a7303967b378d84804adcba9cb57ea48d756947edad9ee10c08a824d59cd59a0abfecb70b2b8dbcd843154a320abfba79dac584959a2f6b93fc38a0eff6c490af1929783b85ceca005d16386196fa3f62dac8f564bf001f3603d99ac56491a9d8baf1200f6938853054a7f43a4230c9c98e8ea177b92fe7224b1b9d4878896edab37b46c181643625cd2ce5733b94396c801f7f1c512b8337f6adc8f1fd482ec305e2b544dd45e4d6d18a64c2db8ca2653a13d5eda111d79cb383c9e2ed789757a6cb554c64285587c31ed0c797a93323ab2e42a0efe8e8f4059f0ab97a6cd1eaa2bad84759a7d3a93889a871400c99ae58d61f608c66486fff7c52dff240a5ba58d24406556ebc4a80660ff56380836fb3390ff6e1c49d4c6f671eefd1203eb69c808845c1693a380977d894950367da512b891c574850b2bb3ec0d47a02fab358cb7856e760e2f08c5d1dbd546c196b6d60892ebe169f5008bca9129bf7984074b5c5d6ac224e308d3576ce416cb649236a171b45003052c44b2bc248150f6476733e0573273a7ed3b064a929444bb752a1cdb821a5fd4b9dc72c482c803e0cda0c5de48ed95e539548608d39e2799d417e76c82eea06f07e42faf4be16760c25ffa969f58cf22d0fada3bcf52d0f64e01c29b1a953c0bbf186fa24a0ac09acb6de33a7eec145f6d141cfb450625bb767185904f1e0d53c8097d6de7586b883f76b1665dc5470bf6d3fa0063baa99d2fada5ace4a0fac458073517382fe83f53dc4670dd665c180802a2ce5993aff7b1ddd1c29206bc3a1bf3ba8d8f90ae51feb701694d870df661b9afbba8595214e5b8c658af75fc453e5cb42d4b69fd7c799523b236a82da73e33e56ff9ce2e9a7f668948297b488f44bd5adbbdab0762628d21dc69877a16e3235392f91dbc1973177e470879b7c878f88f6c4c302c546568f27d3fccd2bf31eb8ad4d2c78f2e94d1d41a05fdb1d20d9a7bc4aa517d6288832c080746a32a910d8a28d633b704a393bf8b4d875c1b9be768764d83f1fed065e4e523c5140caf7cc8f6172754bde57fdb201ba0b1711fd938cb34abf50759aa58b6878675b8a38bb03b6c9daaf29eb246bd3f54ea92796edcb94f08a51c66fa422da5470bfafdb3b1559654a50df4dd739ea43d37a59e913506f8b42eecdfddde007e244c69fbfe4c958d214c0c27fd451bed554501159b49c7cbc7f15c1e968a8fc4ef5a8ed6021a3fb93724d743a5191fe49cc0be21ca2871a0962026170f1c3d698352e6e41d0f28bf34558d211018f61d65f0dac0698cb1802e6730a9f3077d217cde7e29788794bc9a4ad4fee07d0888c450377e7707a80ed6a6dff43474eeccdb97a3d2c90d13f2d247382f4c018740825de7222ff4ebfd2044c800c93612fe5af5a3a10231318de1836da4c33104446a8e6f7b49e50422146bbacb0a70e4058c40f110d601f01e294648d12fe956e5e4c8940f04acb8070d4ac9eba91efbf6d8ee176b1d08dff52670b2859bfe83f1364a0949be19085d72943197e986e7cce9b05f0c26cb564de1ce2a79708ae39bf9143ac938e6c157d862c1c1109c3f99d2a8f3fe0d3ecfa72078e41978a307553f6eacf1df6bf584ef9698fded6019629b44b40527621d5d19cc2d7e26f0bf6fe6ac0330e4706d8b837599ec87ab046523f264411bc553b0d173113a77a4c633a7be34beadd51756a6bd69d00447ae1edff34eb8515b038c3e0f683a2ab2766b009adbdc6d466f230d948a56b6d17d4c80690d738071b0dcdac29cf394a728b84e645ab78d9eb6f74a8e877ff1397f61b9bef9f003de6a155b8002ad2451e65b3d1798fc4efb1de28f8f292f52163c113f6b7c6bda8c2f75dff1e67ab065930d8010e18cc7c21f321af9b4e83f366f8a79639884b8a6a938e0d4e77886bc9e07fcedf8d22d50b8bbe3585e12292e8e2ac59cee5bed3ffbfb3b12d361f01774e231c6dfe30de4221ba59e7ffd193ee7c29d877d509b288c2d83c93d1d0819c9887734135f852a661eea40c225db38fd4326a4db6de49f6085e04588a811ffe2998fb53ff0a82f87ee88a93c54ec192772b8b35e31d7cddf190af7bc280cdc570cbb83f62122d6874c87adad3e4339a8ea8f1a77c59d8ff33cf1d91fb2a7d40512418f8463d5ccfb97c0587d5163c9aad11d699e1f71e9dd606983e261795c79dcced5018516c63e72e183a630a960586328444d8c0e37d75487cd7ad9cffab1d56e339e2e9f2f83873143be84f61af9d0334559be4b1c51f046b38af477a51105f4853f035f39e2867bd94e060fc7a9140384a3173df329007561367b61e759b272a81fade995a290dd2ad216ee8c81eda9056b35cf31242886df90bc90a4f48b8d4986408aac8fb3a045cbca73c54ed9ba7aa194036f3498166c4a43fbe36e68883a7bd39f7435d45d2fd827568a2a942089fbec36d5cdb4ed12a03aaf2446c72e5fe1094c5108ec4c4686e4e76f56211901c96c683c9a8c60d67579c65c36ec85a1f00f3e83abc7aeeb098546292bb1c30714567533d9072e071b9d2156f7b8f6f1f45e22251048a0e4118dd7009ef29295d2af10037297735861f330a60a447d940a6a394960fc981e2ea1a226278c08d542985ecdeb68e09284c74216645c10c8a42798ad8d0b1c343c3f6dfbf7a82ba971a4fd1e8d0ce577f3cf3e806dc7f61201748a52b8b10ef4281df984fbdf02de7f94e94f5b2d4f3c3a7714846279d6327a49a81be83e290ee3d654520852cb5cbf81a812970a2f261a814bc36b92cd3174e628d1783b04fc2a485c7c2a78cbdf1d6f9ffedf00f720400e9be13217e98098a14415b7d60c9d1b2f58a489c589daf79ac52d08e7b2a29705a11aa9be14426ac144d5e73c7a9a4c2a758dbc15082f188cf6b47106b9465825bc953a64abee7c8e00c99c4f16d1c724fe26de392993766d3b756c84b840ffcc686812922d73a33007a445ae71be53d7ae809950268ab0c759d1607cf331dd562c9b12297b701a6c9afc00561256a4b7157304e82fd90cc94827c1180fbf22d3b831e0248617ea1005632c18a79be17b85bc640d1b7a43e4a7faa6f8f456652c28ab78de1f7014b435ce8adb1d644058bcd13513aaa8ad6ee8681f54eb3ff619fe2197481701dadde9d014926628abb86fc6692f1bd3b8fc08284a038625686bcfaf95bf94c9dc29f3a25e794c5887705ef859afd09e66b1c45f7f8ca6914cbe1109dddc6462a9b66811e10fc8febd51cdfe75fc4c9370b51c0eefa6befd8309a40cf6ad6ac2ef61c71597895490dfc5cf6ee54024a816ebc8378d1699c8850d4979ef46e85216fd6970c96da127153626ec5e780e68fa34055f8dfb38a86b4f6362a06641a775ac83767e2b225f75aba18e379af396f039209aa3f6c66e792d27d1d243a9b857959c8486ceb240af71d3ea20b64d207d46fc7e861bfe9e36546df97ba62c3a759b525804cd8ed2dd57fc9f2f83b1949114c0c46d0a29cd4f77b814c137abad6185d7438a3fd2ff2096f9a4def38a1c16df314d9d18e9fdbd2e196846ed44f950d396aa001faf9d8a9f8dcf2eacc69b19480165cd96f034af5a84e2ea782a7c02b1435de20145fa66c0104e1bb25439ca70506ddda6bac33749313a284ffff90a88d60fee761ad4366d9672392a930c963b256db23b83aae4e3c7f5e8ed42e46d699fc563a9be8ba2fcb20d6cba2f65ce64ad5864e163794b5b473873e901bbf7a451a5cc53d575a51dac071e5647c2dd258302688b7446fb044c9d73ede3617fb826d6bce1a06bbb4ccae37bed3fe6100c193d7de608c035b5e3cc4fa1101c971987c36facc87f55d33c802a83e8884d6a0a85f07e2f9edc5c38207995191a2f0692a73edc7e64df5131d01411c686732819c53396955492022fa5a13e7a9fdadf36a48a49fc8e18f4d32fe48da657aa2a9401aecc6e9925ac6b9d69c8fe824be868f665b5352ae00c9abe82bb19f5e9b0609ba45bc01b6f09e2fb1f7492d124d9c389810870594743b545f905b58223c7588e6630c8c00dd6ccfe00ba768ca1b376a3bfd06ce1e185601456cd9cc0237dc23c3756998c30c8f7c6d8cc79046263f7a489a0050ca1c2140ebdd676e277d48114b9c4578f9e6b67ee06b9aa9815c89b9e506b58b0d3416bca4f1b28c4e2ca1a2186865b411ee3343f134b7e4d747c1d3023b305c15bc8896ce6cb1e62e0fdfb399c0ebdbdc3162d7c497d46246210dd51d54e760db2a40cb7ab35e7ae834acf65d8a05ba468bff15325222795f1c55089b1f948ec6a7801a12f2791263c773b09e048c2c5844cf5ae33fd2a69c99f054d7f65bcaa8839a016953ce1b482523aa128e81957723452e691193a8316072bc9320d23b7a8b53dc582ce4298b2f769df2807b2adcc4f6a3ccd023de1630469040e956843c98ca322e010a07284333d76a5cf9e9771d20b41ee169aaed94ed495e6358f02bdd4927391e607299bc64ef6c8c83e3e6bb7f204a478bec6727af8a46862a6e214ed6007f546aa749ef05cab5c002eaca8e000b63cd6e28b36b819ffd8f648539921f9885a1caf2b756c0ff756c936977f2c2b44bfbf6803bf2b3974f25d5f7701a73b364aac80df9547e89b48ceea9d891fab183b57de43fca54210a1293c152f061fa7e4c6edbc6a2d9515462a94d3a236386f283f3f0b3240f6295ab790428cf228cd4222f7c5dc62d64d0bf75b4348272a49a1d06e528f5ceab6ed5d95d7a96b2a12bea441e0e0497fc90544c506f22f5cb09b0a87f978b3b608b4a56f86beac12ababb645ddca611aa0e23183017849d5a2e02fcab6683f2161e0eb260d43ef336ee72675daaadc7c43c6068d69a18381c999d27aca96c4084c3dfcfce2ae66e36bee3753e6059f305bce32947409d4d0a74375cb0c9c9197a667f2ced7a51f589eb3ee3daefffe9c4dfd06f53b05f1982cd9a5082906d5dcf980019fe161e44cb2a9b986588a61f8ab29cc112a8f07ed665696b83dbe86c42bd7e4180aee4652aed4b169587d64470b86c00001c67532c6fff2b2dba9ed5446f35321c739a5c968958ccf5640f8102d9db96e82dc737798fdfd4d7ca92e9aefd8f69d40ce9f034d97a9fa1442f8809716ec574f2c2e520fb1d779fd1d1b23c9527fe6e579850274817ab302bab924d14144ed853b0e6e9f6ad5b5bf82bf84ed83eee993ba3f405324c6834606fdd96b397e46f6efa505c8c8016b1ee9daa0e796a4b03b7207326d027f90f0102d5500f95f3ef6225b6e01be0f08c89448e886e6397c99ca0313e6b02ba901615c0e63ee16655807a635c18f36399f22ed91b2ef48093ab6816b715368973aaa5ddf69dc03dd715cb76b88d11beb261b2e070edfe415812c9e52784fdc9f15e9556af588f7d469da7e22f4da37ef7fac20f905eb13844ca2dce2b8caf86348b1fa42e6a799972a1fb63a755c66f94634a75844930015bbe424a13a06ed67da681e3faf7171c0b7906ebb882f72e550361a0a4e661ee06ab6b86f64e92b71d3e481449897c4a3b24268dd0e6e94681bd1f023c14d5f9bbb701b5d6f0397fa2130ea2d1babcb26354fb3113bc23fb43cf33a379f8d4758826caffac8d9e6c989e42841dbc60147dc44c675f3bc51245a65203bdde133c4c781a79635c93f4c74e47b00069c95be6107df962075e64d3ce7940d432d0e0dd3d06cd6f431dda0a5164531b394aa718ccfd3b3c57bd778da479f84492790d5e478204c95f16efc3e9a11d15a4560cfec13fac2343493d11217a168b16b082baff47adf45a474e631683d8e0eea375e9525a096915ee3362affbfe60d49023c1d8ac6a53413bb1dc96f14964310492590461f9d94a93bdca115100662a954ed2ef7ae25d9e23224e588a4b6251bb08221cf53a7ee8b63280258c594d7250b99a2b2cea9912a7479c7641cbc89a835d275f2e3f386345e1df866da56fc30435a8b5effcb21afdce1aca0397f678dfd730947b62b42004fd34d75d29616ad7f7c1aa56fd677720c5d44f971dd6758e208b31f20aa569978b89d0d0f0de3cd6ebfc17567fcae24260ead856bf6efc33599dcdf12f6c7e1c8930beb2affc9f8cd7390da8baae50a821da281c922e350b9e38a5596bdbdc3709dd7fcc5a8f9215497264358ade23ef963d4ae8cee2de5185d830cd7284c0185469bf5ac179760e8b12a0b1eff11173d5afc30353a9e62dc3d4799717bf66a7c057f6fa3ef50b6772e3093f7344e08dde4ae997c065fcc0368ef7d0a8e91f7e5e7e7390e7f62806cd0f5fd720cd8533b36c667d798e2431a71ce7aaab03f9ce1816f7320bd247cb89f0185c4c23bb4aa9711764af6e04a9f750efe694ae33412a19e0909d2e9be06ebe6409f72736fe310b4d929440c1741f79f2354e1797ab769de2a85ae765fd24c1705fd114abf0106737abe627230241af8c411229b0175a4524d00aaaf132f12bad8782b7b057afd780e13fdf43ef904c28de9ef69b1cb26d067d327393f28f0b9f9328ea9d07f7c9e6aee07b84eaa696491e3182bebd2856c5852042a9a05230c54d2ef3f300b7c991497df802250a717a68066b5d84a25a0bd12f0383c87f4dccd1e3f079b4063d77c8ee94ec7acac2f170eaa80bfdc39457cb34829584a26d3b776ce70696a876f591d71b30edf0d962480621354e49c96fc67f1f02d04dfbd118d3b9b9664225c5d8b76a7d944ce529e1e568aa0a054f242353850550121c0ba2e5ff3575d1399b28d3a8117c64a1d4776b570129aaadd3e1221474cc15f389ba5fdc2c784f915afbd7b30ca8766b2e27580036f375a58b102dec4f5d1ba13e3cbfdfbe4c43ebdc4a58abf10ef2c106d6f85cea13b26d5302217c502f0813fc4452d17ffbb1eccae0fe42cae799400e1e025bba17d1443c1e22c6b11a1f05f0e7a4",
    nh = "[a,w,s,cf,f,ge,c,sa,Chil,A,WS,34,sd]";
  !function (t) {
    function i(t, i) {
      for (var n = "", e = 0; e < i.length; e++) n += i.charCodeAt(e).toString();
      var s = Math.floor(n.length / 5),
        r = parseInt(n.charAt(s) + n.charAt(2 * s) + n.charAt(3 * s) + n.charAt(4 * s) + n.charAt(5 * s)),
        h = Math.round(i.length / 2), a = Math.pow(2, 31) - 1, o = parseInt(t.substring(t.length - 8, t.length), 16);
      for (t = t.substring(0, t.length - 8), n += o; n.length > 10;) n = (parseInt(n.substring(0, 10)) + parseInt(n.substring(10, n.length))).toString();
      n = (r * n + h) % a;
      for (var f = "", u = "", e = 0; e < t.length; e += 2) f = parseInt(parseInt(t.substring(e, e + 2), 16) ^ Math.floor(n / a * 255)), u += String.fromCharCode(f), n = (r * n + h) % a;
      return u
    }

    t = i(t, "QUNEE"), nh = JSON.parse(String.fromCharCode(91) + t + String.fromCharCode(93))
  }(ih);
  var eh = nh[0] + nh[1] + nh[2], sh = nh[3] + nh[1] + nh[2], rh = nh[4], hh = nh[5], ah = nh[6], oh = nh[7],
    fh = nh[8], uh = nh[9], ch = nh[10], _h = nh[11], dh = nh[12], lh = nh[13] + nh[14] + nh[15], vh = nh[16],
    bh = nh[17], yh = nh[18], gh = nh[19], xh = nh[20], ph = nh[21] + nh[22], Eh = nh[23], mh = nh[21],
    wh = nh[24] + nh[25] + nh[26], Th = nh[27], kh = nh[28] + nh[29] + nh[30], Oh = nh[31],
    Mh = nh[32] + nh[33] + nh[34], Ih = nh[35], Sh = nh[36] + nh[14] + nh[37], Ph = nh[28] + nh[38] + nh[39],
    Ah = nh[40], Ch = nh[19] + nh[41] + nh[42], Lh = nh[3] + nh[43] + nh[44], Rh = nh[45], Dh = nh[46], jh = nh[47],
    Nh = nh[48], qh = nh[49], Bh = nh[50], $h = nh[51] + nh[43] + nh[52], Fh = nh[53], Gh = nh[54] + nh[55] + nh[56],
    zh = nh[57] + nh[33] + nh[34], Yh = nh[58] + nh[25] + nh[59], Hh = nh[60] + nh[61] + nh[62], Uh = nh[63],
    Wh = nh[64], Xh = nh[65] + nh[66], Vh = nh[67], Zh = nh[68], Kh = nh[69], Jh = nh[70],
    Qh = nh[71] + nh[72] + nh[73], ta = nh[74], ia = nh[22], na = nh[24] + nh[25] + nh[75], ea = nh[76], sa = nh[77],
    ra = nh[78], ha = nh[79] + nh[80], aa = nh[22] + nh[81] + nh[82] + nh[83], oa = nh[22] + nh[84], fa = nh[85],
    ua = nh[86], ca = nh[87], _a = nh[88], da = nh[89], la = nh[90] + nh[38] + nh[91], va = nh[92] + nh[25] + nh[93],
    ba = nh[94] + nh[25] + nh[95], ya = nh[96] + nh[97], ga = nh[98], xa = nh[97], pa = nh[97] + nh[96] + nh[97],
    Ea = nh[99], ma = nh[100], wa = nh[101], Ta = nh[102], ka = nh[103] + nh[104] + nh[105], Oa = nh[106], Ma = nh[107],
    Ia = nh[108] + nh[104] + nh[105], Sa = nh[109] + nh[110] + nh[111],
    Pa = nh[3] + nh[61] + nh[112] + nh[1] + nh[113] + nh[104] + nh[114], Aa = nh[115], Ca = nh[116] + nh[117] + nh[118],
    La = nh[109] + nh[119], Ra = nh[109] + nh[120], Da = nh[121] + nh[122] + nh[123], ja = nh[121] + nh[120],
    Na = nh[121] + nh[124] + nh[123], qa = nh[22] + nh[125], Ba = nh[22] + nh[126],
    $a = nh[22] + nh[127] + nh[25] + nh[128], Fa = nh[22] + nh[129], Ga = nh[130] + nh[131] + nh[132],
    za = nh[133] + nh[134], Ya = nh[135], Ha = nh[136] + nh[134] + nh[46] + nh[137] + nh[46] + nh[78] + nh[76],
    Ua = nh[136] + nh[138] + nh[46] + nh[137] + nh[46] + nh[78] + nh[76], Wa = nh[139], Xa = nh[140],
    Va = nh[141] + nh[142] + nh[143], Za = nh[144], Ka = nh[145], Ja = nh[146], Qa = nh[147] + nh[38] + nh[148],
    to = nh[136] + nh[149] + nh[46] + nh[78], io = nh[150], no = nh[151], eo = nh[108] + nh[25] + nh[152], so = nh[153],
    ro = nh[154] + nh[61] + nh[155] + nh[38] + nh[156] + nh[25] + nh[157] + nh[104] + nh[158],
    ho = nh[96] + nh[61] + nh[155] + nh[38] + nh[156] + nh[25] + nh[157] + nh[104] + nh[158],
    ao = nh[159] + nh[61] + nh[155] + nh[38] + nh[156] + nh[25] + nh[157] + nh[104] + nh[158],
    oo = nh[160] + nh[38] + nh[156] + nh[25] + nh[157] + nh[104] + nh[158], fo = nh[23] + nh[29] + nh[161],
    uo = nh[162], co = nh[3] + nh[1] + nh[163], _o = nh[80] + nh[164], lo = nh[165], vo = nh[166] + nh[38] + nh[167],
    bo = nh[168] + nh[22] + nh[169], yo = nh[168] + nh[22] + nh[170], go = nh[153] + nh[46],
    xo = nh[168] + nh[22] + nh[171], po = nh[172], Eo = nh[173], mo = nh[174], wo = nh[175] + nh[43] + nh[176],
    To = nh[175] + nh[61] + nh[177], ko = nh[178], Oo = nh[179], Mo = nh[180] + nh[117] + nh[181], Io = nh[182],
    So = nh[183] + nh[22] + nh[184], Po = nh[3] + nh[185] + nh[186] + nh[55] + nh[187], Ao = nh[188],
    Co = nh[22] + nh[189] + nh[104], Lo = nh[22] + nh[190] + nh[25] + nh[152],
    Ro = nh[22] + nh[191] + nh[192] + nh[1] + nh[193], Do = nh[194], jo = nh[3] + nh[61] + nh[195], No = nh[196],
    qo = nh[197], Bo = nh[198] + nh[25] + nh[152], $o = nh[199], Fo = nh[166] + nh[117] + nh[200],
    Go = nh[51] + nh[25] + nh[152] + nh[185] + nh[81] + nh[38] + nh[201], zo = nh[202], Yo = nh[203],
    Ho = nh[51] + nh[25] + nh[152] + nh[185] + nh[81] + nh[25] + nh[204], Uo = nh[205] + nh[25] + nh[152],
    Wo = nh[206] + nh[25] + nh[152], Xo = nh[207], Vo = nh[208], Zo = nh[22] + nh[209] + nh[80] + nh[87],
    Ko = nh[22] + nh[210], Jo = nh[22] + nh[209] + nh[211] + nh[87], Qo = nh[22] + nh[209] + nh[211] + nh[88],
    tf = nh[22] + nh[81] + nh[212], nf = nh[22] + nh[209] + nh[80] + nh[88], ef = nh[22] + nh[81] + nh[213],
    sf = nh[27] + nh[214] + nh[25] + nh[152], rf = nh[215], hf = nh[216] + nh[110] + nh[111], af = nh[69] + nh[217],
    of = nh[218] + nh[43] + nh[219], ff = nh[220] + nh[25] + nh[204], uf = nh[221], cf = nh[222],
    _f = nh[180] + nh[38] + nh[223], df = nh[69] + nh[15] + nh[224] + nh[15] + nh[211] + nh[15] + nh[80], lf = nh[180],
    vf = nh[216] + nh[117] + nh[159], bf = nh[225] + nh[117] + nh[159], yf = nh[202] + nh[38] + nh[223],
    gf = nh[69] + nh[226], xf = nh[69] + nh[227], pf = nh[206] + nh[185] + nh[228] + nh[14] + nh[15], Ef = nh[229],
    mf = nh[22] + nh[81] + nh[230], wf = nh[231] + nh[22] + nh[232], Tf = nh[231] + nh[22] + nh[184],
    kf = nh[233] + nh[76] + nh[234], Of = nh[235], Mf = nh[236], If = nh[237],
    Sf = nh[229] + nh[46] + nh[238] + nh[46] + nh[78] + nh[239], Pf = nh[3] + nh[41] + nh[240], Af = nh[13],
    Cf = nh[216], Lf = nh[241] + nh[117] + nh[242], Rf = nh[243], Df = nh[66], jf = nh[244],
    Nf = nh[245] + nh[22] + nh[246] + nh[22] + nh[247], qf = nh[245] + nh[22] + nh[246] + nh[22] + nh[248],
    Bf = nh[245] + nh[22] + nh[246] + nh[22] + nh[249] + nh[22] + nh[250],
    $f = nh[245] + nh[22] + nh[246] + nh[22] + nh[251], Ff = nh[245] + nh[22] + nh[246] + nh[22] + nh[252],
    Gf = nh[253] + nh[185] + nh[186] + nh[55] + nh[187], zf = nh[254], Yf = nh[255] + nh[104] + nh[114],
    Hf = nh[22] + nh[256] + nh[257], Uf = nh[258] + nh[25] + nh[204], Wf = nh[22] + nh[259],
    Xf = nh[27] + nh[260] + nh[61] + nh[88] + nh[43] + nh[261] + nh[25] + nh[152],
    Vf = nh[22] + nh[81] + nh[262] + nh[191], Zf = nh[27] + nh[208], Kf = nh[27] + nh[263] + nh[120],
    Jf = nh[264] + nh[265] + nh[104] + nh[266], Qf = nh[27] + nh[267], tu = nh[27] + nh[263] + nh[119],
    iu = nh[27] + nh[268] + nh[38] + nh[167], nu = nh[27] + nh[268] + nh[43] + nh[261] + nh[25] + nh[152],
    eu = nh[27] + nh[235], su = nh[269], ru = nh[27] + nh[270], hu = nh[27] + nh[271] + nh[25] + nh[93],
    au = nh[22] + nh[81] + nh[272] + nh[273] + nh[274] + nh[275] + nh[185] + nh[276] + nh[72] + nh[277],
    ou = nh[22] + nh[81] + nh[272] + nh[273] + nh[274] + nh[275], fu = nh[278] + nh[274] + nh[275],
    uu = nh[22] + nh[279] + nh[38] + nh[280], cu = nh[281] + nh[274] + nh[275],
    _u = nh[27] + nh[270] + nh[104] + nh[282], du = nh[22] + nh[283] + nh[119], lu = nh[22] + nh[283] + nh[120],
    vu = nh[27] + nh[283] + nh[110] + nh[111], bu = nh[141] + nh[284] + nh[25] + nh[285], yu = nh[255],
    gu = nh[3] + nh[104] + nh[114], xu = nh[286], pu = nh[260] + nh[61] + nh[88] + nh[25] + nh[204],
    Eu = nh[27] + nh[203], mu = nh[22] + nh[81] + nh[287], wu = nh[22] + nh[265] + nh[104] + nh[266],
    Tu = nh[27] + nh[268] + nh[104] + nh[266], ku = nh[216] + nh[55] + nh[288],
    Ou = nh[3] + nh[41] + nh[289] + nh[55] + nh[288], Mu = nh[166] + nh[41] + nh[289] + nh[55] + nh[288],
    Iu = nh[154] + nh[55] + nh[288], Su = nh[290] + nh[41] + nh[289] + nh[55] + nh[288],
    Pu = nh[154] + nh[55] + nh[288] + nh[14] + nh[123],
    Au = nh[290] + nh[41] + nh[289] + nh[55] + nh[288] + nh[14] + nh[123],
    Cu = nh[216] + nh[55] + nh[288] + nh[14] + nh[123], Lu = nh[291] + nh[274] + nh[292],
    Ru = nh[293] + nh[294] + nh[295], Du = nh[296] + nh[25] + nh[83], ju = nh[297], Nu = nh[298] + nh[29] + nh[299],
    qu = nh[236] + nh[25] + nh[83], Bu = nh[300] + nh[294] + nh[301] + nh[117] + nh[302],
    $u = nh[133] + nh[117] + nh[181], Fu = nh[303], Gu = nh[304], zu = nh[305],
    Yu = nh[306] + nh[1] + nh[307] + nh[43] + nh[243], Hu = nh[306] + nh[43] + nh[243],
    Uu = nh[90] + nh[1] + nh[308] + nh[1] + nh[307], Wu = nh[309] + nh[310], Xu = nh[311], Vu = nh[312], Zu = nh[313],
    Ku = nh[314], Ju = nh[315], Qu = nh[224] + nh[76] + nh[224] + nh[76] + nh[211],
    tc = nh[22] + nh[81] + nh[272] + nh[316] + nh[1] + nh[317], ic = nh[318], nc = nh[319],
    ec = nh[19] + nh[320] + nh[321], sc = nh[322], rc = nh[71] + nh[43] + nh[323],
    hc = nh[22] + nh[324] + nh[320] + nh[325], ac = nh[3] + nh[29] + nh[326] + nh[61] + nh[327],
    oc = nh[90] + nh[43] + nh[323], fc = nh[22] + nh[81] + nh[328], uc = nh[51] + nh[185] + nh[329], cc = nh[90],
    _c = nh[51] + nh[55] + nh[330] + nh[14] + nh[15], dc = nh[0] + nh[72] + nh[331], lc = nh[332],
    vc = nh[166] + nh[1] + nh[333] + nh[185] + nh[228], bc = nh[6] + nh[1] + nh[334], yc = nh[335],
    gc = nh[166] + nh[185] + nh[228], xc = nh[51] + nh[41] + nh[336], pc = nh[27] + nh[90],
    Ec = nh[298] + nh[29] + nh[299] + nh[1] + nh[333], mc = nh[337] + nh[117] + nh[159],
    wc = nh[338] + nh[117] + nh[159], Tc = nh[339] + nh[22] + nh[340], kc = nh[339] + nh[22] + nh[341], Oc = nh[342],
    Mc = nh[339] + nh[22] + nh[343], Ic = nh[339] + nh[22] + nh[344], Sc = nh[339] + nh[22] + nh[345],
    Pc = nh[339] + nh[22] + nh[346], Ac = nh[339] + nh[22] + nh[347], Cc = nh[339] + nh[22] + nh[348],
    Lc = nh[339] + nh[22] + nh[349], Rc = nh[339] + nh[22] + nh[350] + nh[22] + nh[351],
    Dc = nh[339] + nh[22] + nh[350] + nh[22] + nh[211], jc = nh[339] + nh[22] + nh[350] + nh[22] + nh[80],
    Nc = nh[339] + nh[22] + nh[350] + nh[22] + nh[192], qc = nh[339] + nh[22] + nh[350] + nh[22] + nh[352],
    Bc = nh[339] + nh[22] + nh[350] + nh[22] + nh[353], $c = nh[339] + nh[22] + nh[350] + nh[22] + nh[82],
    Fc = nh[27] + nh[238], Gc = nh[194] + nh[72] + nh[354], zc = nh[27] + nh[268], Yc = nh[355], Hc = nh[356],
    Uc = nh[357] + nh[25] + nh[26], Wc = nh[358], Xc = nh[359] + nh[22] + nh[360] + nh[22] + nh[361],
    Vc = nh[359] + nh[22] + nh[360] + nh[22] + nh[169], Zc = nh[166] + nh[38] + nh[223],
    Kc = nh[362] + nh[22] + nh[360] + nh[22] + nh[363] + nh[22] + nh[364],
    Jc = nh[362] + nh[22] + nh[360] + nh[22] + nh[365] + nh[22] + nh[364],
    Qc = nh[362] + nh[22] + nh[360] + nh[22] + nh[364] + nh[22] + nh[366],
    t_ = nh[362] + nh[22] + nh[360] + nh[22] + nh[367] + nh[22] + nh[368],
    i_ = nh[362] + nh[22] + nh[360] + nh[22] + nh[365] + nh[22] + nh[366],
    n_ = nh[362] + nh[22] + nh[360] + nh[22] + nh[366] + nh[22] + nh[364],
    e_ = nh[362] + nh[22] + nh[360] + nh[22] + nh[367] + nh[22] + nh[369], s_ = nh[3] + nh[38] + nh[223],
    r_ = nh[362] + nh[22] + nh[370] + nh[22] + nh[371] + nh[22] + nh[372],
    h_ = nh[362] + nh[22] + nh[360] + nh[22] + nh[367] + nh[22] + nh[373],
    a_ = nh[362] + nh[22] + nh[360] + nh[22] + nh[367] + nh[22] + nh[374],
    o_ = nh[362] + nh[22] + nh[360] + nh[22] + nh[363],
    f_ = nh[362] + nh[22] + nh[360] + nh[22] + nh[363] + nh[22] + nh[366],
    u_ = nh[362] + nh[22] + nh[370] + nh[22] + nh[372], c_ = nh[362] + nh[22] + nh[370] + nh[22] + nh[375],
    __ = nh[376] + nh[22] + nh[377], d_ = nh[362] + nh[22] + nh[378] + nh[22] + nh[379],
    l_ = nh[362] + nh[22] + nh[378] + nh[22] + nh[380], v_ = nh[362] + nh[22] + nh[378] + nh[22] + nh[381],
    b_ = nh[362] + nh[22] + nh[378] + nh[22] + nh[382], y_ = nh[362] + nh[22] + nh[383] + nh[22] + nh[384],
    g_ = nh[385], x_ = nh[362] + nh[22] + nh[360] + nh[22] + nh[365], p_ = nh[350] + nh[22] + nh[170],
    E_ = nh[22] + nh[386] + nh[117] + nh[242] + nh[25] + nh[152], m_ = nh[3] + nh[25] + nh[387] + nh[25] + nh[152],
    w_ = nh[362] + nh[22] + nh[388] + nh[22] + nh[389], T_ = nh[362] + nh[22] + nh[388] + nh[22] + nh[390],
    k_ = nh[362] + nh[22] + nh[391] + nh[22] + nh[390], O_ = nh[392], M_ = nh[3] + nh[393],
    I_ = nh[394] + nh[117] + nh[302], S_ = nh[3] + nh[29] + nh[395] + nh[25] + nh[152] + nh[61] + nh[195],
    P_ = nh[0] + nh[25] + nh[204] + nh[38] + nh[396], A_ = nh[229] + nh[41] + nh[336] + nh[29] + nh[326], C_ = nh[397],
    L_ = nh[398] + nh[41] + nh[399], R_ = nh[400], D_ = nh[90] + nh[43] + nh[243] + nh[29] + nh[326],
    j_ = nh[71] + nh[43] + nh[243] + nh[29] + nh[326], N_ = nh[401], q_ = nh[402] + nh[117] + nh[403],
    B_ = nh[404] + nh[22] + nh[362] + nh[22] + nh[405] + nh[22] + nh[406], $_ = nh[22] + nh[81] + nh[262] + nh[407],
    F_ = nh[362] + nh[22] + nh[408] + nh[22] + nh[360], G_ = nh[362] + nh[22] + nh[409] + nh[22] + nh[410],
    z_ = nh[411] + nh[119], Y_ = nh[411] + nh[120], H_ = nh[412],
    U_ = nh[413] + nh[97] + nh[274] + nh[414] + nh[97] + nh[320] + nh[415] + nh[97] + nh[61] + nh[416], W_ = nh[417],
    X_ = nh[418], V_ = nh[419], Z_ = nh[420], K_ = nh[208] + nh[66] + nh[421] + nh[422] + nh[68], J_ = nh[22] + nh[417],
    Q_ = nh[423] + nh[1] + nh[333], td = nh[22] + nh[424] + nh[25] + nh[425],
    id = nh[413] + nh[97] + nh[274] + nh[414] + nh[97] + nh[320] + nh[415],
    nd = nh[65] + nh[66] + nh[224] + nh[426] + nh[224] + nh[426] + nh[224] + nh[426] + nh[224] + nh[68], ed = nh[427],
    sd = nh[428], rd = nh[429], hd = nh[22] + nh[296], ad = nh[430] + nh[431], od = nh[296], fd = nh[22] + nh[236],
    ud = nh[432] + nh[22] + nh[231] + nh[22] + nh[373], cd = nh[22] + nh[86], _d = nh[224] + nh[153],
    dd = nh[22] + nh[81] + nh[272] + nh[433], ld = nh[432] + nh[22] + nh[231] + nh[22] + nh[369],
    vd = nh[216] + nh[1] + nh[434], bd = nh[435] + nh[1] + nh[436], yd = nh[69] + nh[437],
    gd = nh[435] + nh[61] + nh[438], xd = nh[71] + nh[55] + nh[187] + nh[439], pd = nh[229] + nh[185] + nh[186],
    Ed = nh[440], md = nh[22] + nh[81] + nh[441], wd = nh[109] + nh[442] + nh[443], Td = nh[444] + nh[294] + nh[445],
    kd = nh[392] + nh[294] + nh[445], Od = nh[51] + nh[38] + nh[446], Md = nh[238] + nh[447] + nh[448],
    Id = nh[296] + nh[1] + nh[317], Sd = nh[32] + nh[1] + nh[449], Pd = nh[32], Ad = nh[320] + nh[307],
    Cd = nh[450] + nh[61] + nh[195], Ld = nh[451] + nh[22] + nh[406], Rd = nh[32] + nh[25] + nh[152],
    Dd = nh[3] + nh[55] + nh[56] + nh[25] + nh[387] + nh[25] + nh[152], jd = nh[263] + nh[442] + nh[443],
    Nd = nh[182] + nh[38] + nh[223], qd = nh[182] + nh[72] + nh[452], Bd = nh[444] + nh[38] + nh[453],
    $d = nh[444] + nh[29] + nh[395], Fd = nh[454], Gd = nh[444], zd = nh[23] + nh[104] + nh[455], Yd = nh[456],
    Hd = nh[457], Ud = nh[458] + nh[120], Wd = nh[458] + nh[117] + nh[159], Xd = nh[126] + nh[38] + nh[167],
    Vd = nh[22] + nh[208] + nh[442] + nh[459] + nh[41] + nh[460], Zd = nh[461] + nh[97] + nh[462],
    Kd = nh[463] + nh[29] + nh[161], Jd = nh[263] + nh[110] + nh[111], Qd = nh[22] + nh[81] + nh[262] + nh[464],
    tl = nh[465], il = nh[22] + nh[51] + nh[72] + nh[466] + nh[117] + nh[467], nl = nh[468], el = nh[469],
    sl = nh[108] + nh[41] + nh[470], rl = nh[471] + nh[294] + nh[307],
    hl = nh[472] + nh[22] + nh[246] + nh[22] + nh[473], al = nh[423] + nh[320] + nh[307] + nh[185] + nh[474],
    ol = nh[423] + nh[29] + nh[326] + nh[185] + nh[474], fl = nh[190] + nh[320] + nh[307],
    ul = nh[298] + nh[29] + nh[299] + nh[14] + nh[475] + nh[29] + nh[326], cl = nh[476],
    _l = nh[477] + nh[43] + nh[323], dl = nh[478], ll = nh[479] + nh[43] + nh[480] + nh[72] + nh[466],
    vl = nh[290] + nh[104] + nh[481] + nh[43] + nh[480] + nh[72] + nh[466], bl = nh[166] + nh[117] + nh[482],
    yl = nh[60] + nh[43] + nh[480] + nh[72] + nh[466],
    gl = nh[290] + nh[1] + nh[483] + nh[43] + nh[480] + nh[72] + nh[466],
    xl = nh[154] + nh[1] + nh[483] + nh[43] + nh[480] + nh[72] + nh[466],
    pl = nh[159] + nh[1] + nh[483] + nh[43] + nh[480] + nh[72] + nh[466],
    El = nh[96] + nh[1] + nh[483] + nh[43] + nh[480] + nh[72] + nh[466], ml = nh[69] + nh[484],
    wl = nh[22] + nh[182] + nh[38] + nh[223], Tl = nh[485], kl = nh[22] + nh[182] + nh[38] + nh[167],
    Ol = nh[22] + nh[182] + nh[1] + nh[486], Ml = nh[22] + nh[182] + nh[72] + nh[452], Il = nh[22] + nh[182],
    Sl = nh[3] + nh[61] + nh[88] + nh[185] + nh[228], Pl = nh[136] + nh[487] + nh[46] + nh[488],
    Al = nh[3] + nh[61] + nh[88] + nh[185] + nh[164], Cl = nh[22] + nh[81] + nh[272] + nh[489],
    Ll = nh[47] + nh[61] + nh[88] + nh[185] + nh[164], Rl = nh[401] + nh[61] + nh[88] + nh[185] + nh[164],
    Dl = nh[51] + nh[29] + nh[490], jl = nh[71] + nh[55] + nh[491], Nl = nh[205] + nh[29] + nh[161] + nh[1] + nh[333],
    ql = nh[492] + nh[117] + nh[302], Bl = nh[493] + nh[320] + nh[321],
    $l = nh[71] + nh[310] + nh[494] + nh[1] + nh[316], Fl = nh[495] + nh[38] + nh[496],
    Gl = nh[495] + nh[29] + nh[161] + nh[38] + nh[496], zl = nh[25] + nh[152] + nh[66], Yl = nh[426], Hl = nh[497],
    Ul = nh[38] + nh[167] + nh[66], Wl = nh[498] + nh[46] + nh[78], Xl = nh[198] + nh[104] + nh[114],
    Vl = nh[108] + nh[104] + nh[114], Zl = nh[499] + nh[22] + nh[375], Kl = nh[500], Jl = nh[501] + nh[25] + nh[93],
    Ql = nh[502] + nh[320] + nh[321], tv = nh[503], iv = nh[504], nv = nh[505], ev = nh[506], sv = nh[507],
    rv = nh[373] + nh[22] + nh[508], hv = nh[373] + nh[22] + nh[374], av = nh[509] + nh[22] + nh[369],
    ov = nh[509] + nh[22] + nh[508], fv = nh[509] + nh[22] + nh[374], uv = nh[368] + nh[22] + nh[369],
    cv = nh[368] + nh[22] + nh[508], _v = nh[368] + nh[22] + nh[374], dv = nh[373] + nh[22] + nh[369], lv = nh[510],
    vv = nh[511], bv = nh[237] + nh[512], yv = nh[426] + nh[207] + nh[512], gv = nh[426] + nh[469] + nh[512],
    xv = nh[513] + nh[33] + nh[34], pv = nh[356] + nh[117] + nh[302], Ev = nh[356] + nh[76] + nh[514],
    mv = nh[426] + nh[356] + nh[320] + nh[321] + nh[512], wv = nh[426] + nh[513] + nh[33] + nh[34] + nh[512],
    Tv = nh[426] + nh[35] + nh[512], kv = nh[356] + nh[320] + nh[321], Ov = nh[513] + nh[185] + nh[228],
    Mv = nh[3] + nh[1] + nh[333] + nh[185] + nh[228], Iv = nh[515] + nh[76] + nh[108], Sv = nh[515] + nh[76] + nh[47],
    Pv = nh[515] + nh[76] + nh[13], Av = nh[516], Cv = nh[517] + nh[29] + nh[30], Lv = nh[518], Rv = nh[519],
    Dv = nh[125], jv = nh[47] + nh[41] + nh[470], Nv = nh[520], qv = nh[426] + nh[203] + nh[512],
    Bv = nh[426] + nh[13] + nh[512], $v = nh[426] + nh[513] + nh[185] + nh[228] + nh[512],
    Fv = nh[521] + nh[22] + nh[522], Gv = nh[108], zv = nh[521] + nh[22] + nh[523] + nh[22] + nh[524],
    Yv = nh[13] + nh[76] + nh[514], Hv = nh[22] + nh[81] + nh[82] + nh[503], Uv = nh[22] + nh[81] + nh[272] + nh[507],
    Wv = nh[28] + nh[25] + nh[525] + nh[1] + nh[486], Xv = nh[28] + nh[1] + nh[333] + nh[43] + nh[526],
    Vv = nh[28] + nh[1] + nh[333] + nh[104] + nh[527], Zv = nh[71] + nh[1] + nh[2], Kv = nh[3] + nh[185] + nh[164],
    Jv = nh[22] + nh[528], Qv = nh[521] + nh[22] + nh[529], tb = nh[22] + nh[530], ib = nh[531],
    nb = nh[520] + nh[1] + nh[532] + nh[55] + nh[533], eb = nh[444] + nh[1] + nh[532] + nh[55] + nh[533],
    sb = nh[22] + nh[444] + nh[294] + nh[445], rb = nh[203] + nh[1] + nh[532] + nh[55] + nh[533],
    hb = nh[517] + nh[55] + nh[187] + nh[25] + nh[26] + nh[1] + nh[532],
    ab = nh[28] + nh[55] + nh[187] + nh[25] + nh[26] + nh[1] + nh[486], ob = nh[27] + nh[335],
    fb = nh[22] + nh[81] + nh[534] + nh[185] + nh[228] + nh[72] + nh[277], ub = nh[535], cb = nh[3] + nh[29] + nh[536],
    _b = nh[141] + nh[353] + nh[537], db = nh[322] + nh[1] + nh[532] + nh[55] + nh[533], lb = nh[203] + nh[538],
    vb = nh[22] + nh[81] + nh[272] + nh[539] + nh[1] + nh[532] + nh[41] + nh[470], bb = nh[540],
    yb = nh[521] + nh[22] + nh[541], gb = nh[542], xb = nh[117] + nh[200],
    pb = nh[71] + nh[41] + nh[543] + nh[1] + nh[316], Eb = nh[23] + nh[25] + nh[544],
    mb = nh[23] + nh[117] + nh[181] + nh[320] + nh[307], wb = nh[175] + nh[447] + nh[545],
    Tb = nh[312] + nh[97] + nh[546], kb = nh[547], Ob = nh[548], Mb = nh[549],
    Ib = nh[108] + nh[29] + nh[30] + nh[41] + nh[470], Sb = nh[47] + nh[29] + nh[30] + nh[41] + nh[470],
    Pb = nh[550] + nh[22] + nh[551] + nh[22] + nh[552] + nh[22] + nh[553], Ab = nh[554] + nh[22] + nh[551],
    Cb = nh[555] + nh[67] + nh[556] + nh[67] + nh[557] + nh[67] + nh[558], Lb = nh[559],
    Rb = nh[560] + nh[561] + nh[38] + nh[562],
    Db = nh[563] + nh[67] + nh[564] + nh[67] + nh[565] + nh[67] + nh[566] + nh[67] + nh[567] + nh[67] + nh[568] + nh[67] + nh[569] + nh[67] + nh[570] + nh[67],
    jb = nh[67] + nh[555] + nh[67] + nh[556] + nh[67] + nh[557] + nh[67] + nh[558],
    Nb = nh[117] + nh[571] + nh[29] + nh[30], qb = nh[572] + nh[22] + nh[573] + nh[22] + nh[552],
    Bb = nh[32] + nh[25] + nh[574], $b = nh[22] + nh[81] + nh[82] + nh[575] + nh[185] + nh[576],
    Fb = nh[22] + nh[28] + nh[110] + nh[577] + nh[294] + nh[561] + nh[294] + nh[578], Gb = nh[141] + nh[579],
    zb = nh[22] + nh[81] + nh[262] + nh[209], Yb = nh[568], Hb = nh[565], Ub = nh[141] + nh[81] + nh[262] + nh[464],
    Wb = nh[22] + nh[71] + nh[580] + nh[30], Xb = nh[22] + nh[549] + nh[29] + nh[30], Vb = nh[28],
    Zb = nh[141] + nh[581] + nh[25] + nh[582] + nh[117] + nh[467],
    Kb = nh[141] + nh[28] + nh[41] + nh[583] + nh[25] + nh[582] + nh[72] + nh[584],
    Jb = nh[22] + nh[585] + nh[29] + nh[30], Qb = nh[586], ty = nh[22] + nh[28] + nh[29] + nh[30],
    iy = nh[587] + nh[80], ny = nh[587],
    ey = nh[22] + nh[81] + nh[82] + nh[483] + nh[41] + nh[583] + nh[25] + nh[582] + nh[117] + nh[467], sy = nh[588],
    ry = nh[141] + nh[589] + nh[117] + nh[571] + nh[29] + nh[30],
    hy = nh[141] + nh[590] + nh[1] + nh[334] + nh[1] + nh[532], ay = nh[22] + nh[591],
    oy = nh[141] + nh[585] + nh[41] + nh[583] + nh[25] + nh[582],
    fy = nh[141] + nh[585] + nh[294] + nh[592] + nh[117] + nh[571] + nh[29] + nh[30], uy = nh[164] + nh[38] + nh[593],
    cy = nh[594] + nh[38] + nh[593], _y = nh[22] + nh[174], dy = nh[141] + nh[595], ly = nh[596], vy = nh[22] + nh[597],
    by = nh[598], yy = nh[599], gy = nh[142] + nh[38] + nh[600], xy = nh[22] + nh[601],
    py = nh[22] + nh[549] + nh[117] + nh[571] + nh[29] + nh[30], Ey = nh[564],
    my = nh[141] + nh[81] + nh[82] + nh[483] + nh[1] + nh[602], wy = nh[566], Ty = nh[141] + nh[419], ky = nh[567],
    Oy = nh[22] + nh[51] + nh[55] + nh[603] + nh[1] + nh[602], My = nh[563], Iy = nh[604], Sy = nh[605], Py = nh[606],
    Ay = nh[22] + nh[607], Cy = nh[608], Ly = nh[609] + nh[119], Ry = nh[609] + nh[120],
    Dy = nh[22] + nh[585] + nh[55] + nh[610] + nh[55] + nh[611],
    jy = nh[141] + nh[81] + nh[82] + nh[602] + nh[117] + nh[467], Ny = nh[141] + nh[612], qy = nh[613],
    By = nh[591] + nh[80], $y = nh[591], Fy = nh[601] + nh[80], Gy = nh[601], zy = nh[614] + nh[80], Yy = nh[614],
    Hy = nh[22] + nh[81] + nh[262] + nh[615] + nh[55] + nh[610] + nh[185] + nh[474], Uy = nh[597] + nh[80],
    Wy = nh[597], Xy = nh[3] + nh[1] + nh[575] + nh[38] + nh[616], Vy = nh[607] + nh[80], Zy = nh[607],
    Ky = nh[22] + nh[503] + nh[352] + nh[38] + nh[617], Jy = nh[3] + nh[55] + nh[187], Qy = nh[162] + nh[25] + nh[618],
    tg = nh[3] + nh[29] + nh[161] + nh[61] + nh[88] + nh[294] + nh[561] + nh[29] + nh[30],
    ig = nh[3] + nh[619] + nh[88] + nh[294] + nh[561] + nh[29] + nh[30],
    ng = nh[28] + nh[29] + nh[161] + nh[104] + nh[620], eg = nh[22] + nh[621] + nh[41] + nh[622],
    sg = nh[28] + nh[1] + nh[623], rg = nh[22] + nh[80] + nh[51], hg = nh[22] + nh[624] + nh[185] + nh[625],
    ag = nh[22] + nh[81] + nh[82] + nh[626] + nh[185] + nh[627] + nh[41] + nh[622],
    og = nh[141] + nh[28] + nh[29] + nh[30], fg = nh[141] + nh[549] + nh[29] + nh[30], ug = nh[628],
    cg = nh[22] + nh[624] + nh[185] + nh[627], _g = nh[22] + nh[585] + nh[119], dg = nh[629], lg = nh[630] + nh[120],
    vg = nh[22] + nh[585] + nh[120], bg = nh[631] + nh[55] + nh[632] + nh[119],
    yg = nh[631] + nh[55] + nh[632] + nh[120], gg = nh[97] + nh[290] + nh[97] + nh[633] + nh[97] + nh[624],
    xg = nh[97] + nh[290] + nh[97] + nh[633] + nh[97] + nh[634], pg = nh[97] + nh[290] + nh[97] + nh[635],
    Eg = nh[97] + nh[290] + nh[97] + nh[636], mg = nh[97] + nh[154] + nh[97] + nh[633] + nh[97] + nh[624],
    wg = nh[97] + nh[154] + nh[97] + nh[633] + nh[97] + nh[634], Tg = nh[97] + nh[154] + nh[97] + nh[635],
    kg = nh[97] + nh[154] + nh[97] + nh[636], Og = nh[637], Mg = nh[225],
    Ig = nh[638] + nh[66] + nh[203] + nh[100] + nh[238] + nh[447] + nh[639] + nh[101] + nh[640] + nh[641] + nh[67] + nh[642] + nh[643] + nh[644] + nh[224] + nh[645] + nh[646] + nh[647] + nh[537] + nh[648] + nh[407] + nh[649] + nh[15] + nh[82] + nh[447] + nh[272] + nh[537] + nh[650] + nh[507] + nh[80] + nh[651] + nh[224] + nh[164] + nh[80] + nh[72] + nh[88] + nh[652] + nh[272] + nh[642] + nh[653] + nh[507] + nh[654] + nh[81] + nh[655] + nh[503] + nh[656] + nh[352] + nh[657] + nh[658] + nh[489] + nh[320] + nh[659] + nh[447] + nh[25] + nh[660] + nh[25] + nh[644] + nh[294] + nh[661] + nh[662] + nh[15] + nh[663] + nh[88] + nh[664] + nh[81] + nh[447] + nh[665] + nh[666] + nh[667] + nh[668] + nh[489] + nh[43] + nh[669] + nh[274] + nh[407] + nh[119] + nh[192] + nh[670] + nh[671] + nh[672] + nh[506] + nh[673] + nh[644] + nh[211] + nh[1] + nh[674] + nh[675] + nh[503] + nh[43] + nh[211] + nh[88] + nh[43] + nh[192] + nh[676] + nh[131] + nh[537] + nh[120] + nh[644] + nh[61] + nh[677] + nh[678] + nh[679] + nh[680] + nh[681] + nh[682] + nh[407] + nh[683] + nh[407] + nh[684] + nh[82] + nh[537] + nh[447] + nh[192] + nh[685] + nh[686] + nh[687] + nh[688] + nh[352] + nh[689] + nh[690] + nh[82] + nh[46] + nh[82] + nh[67] + nh[637],
    Sg = nh[691] + nh[14] + nh[475], Pg = nh[22] + nh[81] + nh[82] + nh[692], Ag = nh[22] + nh[479] + nh[693],
    Cg = nh[22] + nh[28] + nh[38] + nh[694], Lg = nh[22] + nh[695], Rg = nh[224] + nh[76] + nh[224],
    Dg = nh[51] + nh[117] + nh[571] + nh[38] + nh[696], jg = nh[51] + nh[697], Ng = nh[104] + nh[114],
    qg = nh[185] + nh[698], Bg = nh[29] + nh[30], $g = nh[25] + nh[26] + nh[1] + nh[532] + nh[29] + nh[30],
    Fg = nh[442] + nh[699], Gg = nh[25] + nh[93], zg = nh[55] + nh[187], Yg = nh[38] + nh[700] + nh[294] + nh[445],
    Hg = nh[55] + nh[187] + nh[294] + nh[445], Ug = nh[701] + nh[470], Wg = nh[149] + nh[439], Xg = nh[149] + nh[134],
    Vg = nh[51] + nh[294] + nh[702] + nh[131] + nh[132], Zg = nh[703] + nh[55] + nh[611],
    Kg = nh[442] + nh[288] + nh[41] + nh[42], Jg = nh[55] + nh[610] + nh[38] + nh[696], Qg = nh[704], tx = nh[705],
    ix = nh[706], nx = nh[108] + nh[707] + nh[105], ex = nh[708], sx = nh[709], rx = nh[270] + nh[76] + nh[221],
    hx = nh[270], ax = nh[435], ox = nh[710], fx = nh[710] + nh[76] + nh[442], ux = nh[710] + nh[76] + nh[33],
    cx = nh[711], _x = nh[711] + nh[76] + nh[442], dx = nh[711] + nh[76] + nh[33],
    lx = nh[711] + nh[76] + nh[442] + nh[76] + nh[33], vx = nh[711] + nh[76] + nh[33] + nh[76] + nh[442],
    bx = nh[712] + nh[76] + nh[296], yx = nh[712] + nh[76] + nh[236], gx = nh[712] + nh[76] + nh[85],
    xx = nh[712] + nh[76] + nh[86], px = nh[713], Ex = nh[714], mx = nh[715], wx = nh[716], Tx = nh[717], kx = nh[718],
    Ox = nh[719], Mx = nh[720], Ix = nh[721], Sx = nh[722], Px = nh[723], Ax = nh[724], Cx = nh[725], Lx = nh[726],
    Rx = nh[727], Dx = nh[728], jx = nh[729] + nh[76] + nh[730], Nx = nh[729] + nh[76] + nh[211],
    qx = nh[729] + nh[76] + nh[80], Bx = nh[729] + nh[76] + nh[731], $x = nh[729] + nh[76] + nh[192],
    Fx = nh[729] + nh[76] + nh[352], Gx = nh[729] + nh[76] + nh[353], zx = nh[729] + nh[76] + nh[262],
    Yx = nh[729] + nh[76] + nh[82], Hx = nh[729] + nh[76] + nh[144],
    Ux = nh[183] + nh[22] + nh[732] + nh[22] + nh[360] + nh[22] + nh[733], Wx = nh[734],
    Xx = nh[183] + nh[22] + nh[732] + nh[22] + nh[360] + nh[22] + nh[382],
    Vx = nh[183] + nh[22] + nh[732] + nh[22] + nh[360] + nh[22] + nh[735], Zx = nh[189],
    Kx = nh[183] + nh[22] + nh[736] + nh[22] + nh[360] + nh[22] + nh[381],
    Jx = nh[183] + nh[22] + nh[736] + nh[22] + nh[360] + nh[22] + nh[382],
    Qx = nh[183] + nh[22] + nh[736] + nh[22] + nh[360] + nh[22] + nh[737], tp = nh[738], ip = nh[338],
    np = nh[362] + nh[22] + nh[408] + nh[22] + nh[360] + nh[22] + nh[739], ep = nh[740],
    sp = nh[451] + nh[22] + nh[741], rp = nh[451] + nh[22] + nh[249],
    hp = nh[451] + nh[22] + nh[360] + nh[22] + nh[742], ap = nh[743] + nh[22] + nh[232],
    op = nh[231] + nh[22] + nh[499] + nh[22] + nh[170], fp = nh[744] + nh[25] + nh[157] + nh[104] + nh[158],
    up = nh[23] + nh[1] + nh[317], cp = nh[263], _p = nh[745] + nh[117] + nh[159],
    dp = nh[746] + nh[1] + nh[747] + nh[117] + nh[159], lp = nh[748] + nh[1] + nh[747] + nh[117] + nh[159],
    vp = nh[27] + nh[214] + nh[25] + nh[152] + nh[211], bp = nh[27] + nh[214] + nh[25] + nh[152] + nh[80],
    yp = nh[749] + nh[1] + nh[436], gp = nh[231] + nh[22] + nh[750], xp = nh[166] + nh[61] + nh[88] + nh[104] + nh[114],
    pp = nh[22] + nh[751], Ep = nh[322] + nh[320] + nh[307], mp = nh[47] + nh[1] + nh[333],
    wp = nh[185] + nh[186] + nh[46] + nh[149] + nh[46] + nh[78] + nh[239], Tp = nh[22] + nh[297],
    kp = nh[22] + nh[81] + nh[752], Op = nh[728] + nh[14] + nh[753], Mp = nh[43] + nh[754], Ip = nh[755], Sp = nh[756],
    Pp = nh[22] + nh[89], Ap = nh[22] + nh[151], Cp = nh[435] + nh[14] + nh[123] + nh[119],
    Lp = nh[435] + nh[14] + nh[123] + nh[120], Rp = nh[231] + nh[22] + nh[473],
    Dp = nh[749] + nh[1] + nh[436] + nh[61] + nh[757] + nh[294] + nh[307], jp = nh[22] + nh[32] + nh[1] + nh[758],
    Np = nh[759] + nh[38] + nh[593], qp = nh[499] + nh[22] + nh[760] + nh[22] + nh[761], Bp = nh[238], $p = nh[149],
    Fp = nh[0] + nh[185] + nh[186], Gp = nh[762], zp = nh[763], Yp = nh[764] + nh[22] + nh[360] + nh[22] + nh[765],
    Hp = nh[23] + nh[41] + nh[766] + nh[274] + nh[275], Up = nh[23] + nh[104] + nh[767] + nh[274] + nh[275],
    Wp = nh[108] + nh[1] + nh[436] + nh[38] + nh[296], Xp = nh[764] + nh[22] + nh[360] + nh[22] + nh[768],
    Vp = nh[765] + nh[22] + nh[764] + nh[22] + nh[364], Zp = nh[768] + nh[22] + nh[764],
    Kp = nh[769] + nh[22] + nh[765] + nh[22] + nh[764] + nh[22] + nh[366], Jp = nh[674], Qp = nh[770], tE = nh[671],
    iE = nh[771] + nh[22] + nh[772] + nh[22] + nh[391], nE = nh[771] + nh[22] + nh[183] + nh[22] + nh[391],
    eE = nh[771] + nh[22] + nh[773] + nh[22] + nh[391], sE = nh[771] + nh[22] + nh[774], rE = nh[444] + nh[1] + nh[436],
    hE = nh[444] + nh[38] + nh[775] + nh[61] + nh[438], aE = nh[444] + nh[38] + nh[775] + nh[14] + nh[123] + nh[119],
    oE = nh[444] + nh[38] + nh[775] + nh[14] + nh[123] + nh[120], fE = nh[451] + nh[22] + nh[360] + nh[22] + nh[741],
    uE = nh[444] + nh[61] + nh[776], cE = nh[777], _E = nh[216] + nh[778] + nh[779], dE = nh[444] + nh[117] + nh[302],
    lE = nh[777] + nh[38] + nh[223],
    vE = nh[65] + nh[66] + nh[224] + nh[67] + nh[224] + nh[67] + nh[224] + nh[67] + nh[224] + nh[68],
    bE = nh[180] + nh[1] + nh[436], yE = nh[180] + nh[274] + nh[275], gE = nh[22] + nh[180] + nh[274] + nh[275],
    xE = nh[216] + nh[72] + nh[780] + nh[1] + nh[436], pE = nh[22] + nh[781] + nh[25] + nh[782] + nh[110] + nh[111],
    EE = nh[783], mE = nh[784], wE = nh[785] + nh[76] + nh[786],
    TE = nh[245] + nh[22] + nh[246] + nh[22] + nh[765] + nh[22] + nh[250], kE = nh[787] + nh[76] + nh[786],
    OE = nh[788], ME = nh[609], IE = nh[245] + nh[22] + nh[246] + nh[22] + nh[789], SE = nh[790],
    PE = nh[738] + nh[41] + nh[791], AE = nh[792], CE = nh[69] + nh[211] + nh[1] + nh[353] + nh[61] + nh[272] + nh[55],
    LE = nh[69] + nh[793], RE = nh[69] + nh[794] + nh[29] + nh[82] + nh[61], DE = nh[69] + nh[795] + nh[61] + nh[796],
    jE = nh[69] + nh[795] + nh[43] + nh[797], NE = nh[69] + nh[798] + nh[1] + nh[799], qE = nh[69] + nh[800],
    BE = nh[69] + nh[211] + nh[55] + nh[353] + nh[1] + nh[272] + nh[72], $E = nh[69] + nh[801] + nh[61] + nh[224],
    FE = nh[69] + nh[802] + nh[803], GE = nh[69] + nh[211] + nh[72] + nh[353] + nh[804] + nh[80],
    zE = nh[69] + nh[795] + nh[43] + nh[534], YE = nh[69] + nh[805], HE = nh[69] + nh[80] + nh[489] + nh[82] + nh[806],
    UE = nh[69] + nh[807], WE = nh[69] + nh[808] + nh[55] + nh[799], XE = nh[69] + nh[809],
    VE = nh[69] + nh[211] + nh[72] + nh[441] + nh[43] + nh[192], ZE = nh[69] + nh[810] + nh[811] + nh[80],
    KE = nh[69] + nh[812] + nh[813], JE = nh[69] + nh[211] + nh[29] + nh[353] + nh[814] + nh[224],
    QE = nh[69] + nh[815], tm = nh[69] + nh[15] + nh[262] + nh[15] + nh[82] + nh[15] + nh[82],
    im = nh[69] + nh[353] + nh[43] + nh[816], nm = nh[69] + nh[192] + nh[72] + nh[192] + nh[1] + nh[192] + nh[61],
    em = nh[69] + nh[817], sm = nh[69] + nh[818], rm = nh[69] + nh[353] + nh[72] + nh[353] + nh[29] + nh[353] + nh[72],
    hm = nh[69] + nh[192] + nh[1] + nh[819], am = nh[69] + nh[820],
    om = nh[69] + nh[262] + nh[55] + nh[262] + nh[55] + nh[262] + nh[55], fm = nh[69] + nh[821], um = nh[69] + nh[822],
    cm = nh[69] + nh[823], _m = nh[69] + nh[272] + nh[29] + nh[272] + nh[55] + nh[272] + nh[55],
    dm = nh[69] + nh[43] + nh[262] + nh[43] + nh[352] + nh[43] + nh[192],
    lm = nh[69] + nh[43] + nh[272] + nh[43] + nh[353] + nh[43] + nh[352],
    vm = nh[69] + nh[43] + nh[262] + nh[43] + nh[192] + nh[43] + nh[731], bm = nh[69] + nh[824],
    ym = nh[69] + nh[29] + nh[272] + nh[825], gm = nh[69] + nh[272] + nh[826] + nh[224] + nh[770] + nh[224],
    xm = nh[69] + nh[504] + nh[272] + nh[827], pm = nh[69] + nh[731] + nh[489] + nh[731] + nh[770] + nh[828],
    Em = nh[69] + nh[61] + nh[80] + nh[829], mm = nh[69] + nh[80] + nh[29] + nh[82] + nh[830], wm = nh[69] + nh[831],
    Tm = nh[69] + nh[507] + nh[352] + nh[507] + nh[352] + nh[507] + nh[353], km = nh[413] + nh[97],
    Om = nh[22] + nh[81] + nh[82] + nh[758], Mm = nh[22] + nh[832], Im = nh[22] + nh[81] + nh[272] + nh[81],
    Sm = nh[22] + nh[81] + nh[272] + nh[833] + nh[185] + nh[186], Pm = nh[834], Am = nh[36] + nh[61] + nh[835],
    Cm = nh[36], Lm = nh[36] + nh[310] + nh[836], Rm = nh[36] + nh[61] + nh[837],
    Dm = nh[185] + nh[329] + nh[46] + nh[838] + nh[46] + nh[839] + nh[76], jm = nh[840],
    Nm = nh[320] + nh[841] + nh[46] + nh[770] + nh[46] + nh[840] + nh[46] + nh[842] + nh[76],
    qm = nh[843] + nh[72] + nh[277], Bm = nh[844], $m = nh[785] + nh[104] + nh[845], Fm = nh[846] + nh[1] + nh[436],
    Gm = nh[847] + nh[43] + nh[848] + nh[104] + nh[158], zm = nh[843] + nh[38] + nh[167], Ym = nh[849],
    Hm = nh[850] + nh[117] + nh[301], Um = nh[291] + nh[185] + nh[228], Wm = nh[851], Xm = nh[852], Vm = nh[853],
    Zm = nh[854], Km = nh[855] + nh[55] + nh[187], Jm = nh[856], Qm = nh[857], tw = nh[858],
    iw = nh[181] + nh[117] + nh[302], nw = nh[859], ew = nh[860], sw = nh[861], rw = nh[855],
    hw = nh[862] + nh[72] + nh[277], aw = nh[863],
    ow = nh[864] + nh[294] + nh[624] + nh[1] + nh[307] + nh[38] + nh[167], fw = nh[865], uw = nh[866], cw = nh[181],
    _w = nh[867], dw = nh[310] + nh[868] + nh[46] + nh[869] + nh[512] + nh[224] + nh[87], lw = nh[569],
    vw = nh[870] + nh[131] + nh[132], bw = nh[844] + nh[131] + nh[132], yw = nh[871] + nh[131] + nh[132],
    gw = nh[872] + nh[1] + nh[307], xw = nh[179] + nh[33] + nh[873] + nh[239],
    pw = nh[179] + nh[25] + nh[874] + nh[46] + nh[55] + nh[875] + nh[239], Ew = nh[876] + nh[55] + nh[875],
    mw = nh[877], ww = nh[878],
    Tw = nh[15] + nh[879] + nh[507] + nh[192] + nh[489] + nh[880] + nh[881] + nh[262] + nh[770] + nh[882] + nh[489] + nh[883] + nh[504] + nh[731] + nh[884] + nh[272] + nh[885] + nh[886] + nh[887] + nh[888] + nh[889] + nh[224] + nh[507] + nh[352] + nh[15] + nh[890] + nh[770] + nh[891] + nh[892] + nh[893] + nh[504] + nh[894] + nh[895] + nh[731] + nh[896] + nh[224] + nh[897] + nh[212] + nh[507] + nh[898] + nh[899] + nh[900] + nh[901] + nh[731] + nh[489] + nh[902] + nh[15] + nh[287] + nh[903] + nh[353] + nh[507] + nh[904] + nh[15] + nh[905] + nh[906] + nh[272] + nh[907] + nh[908] + nh[15] + nh[272] + nh[504] + nh[352] + nh[164] + nh[211] + nh[489] + nh[192] + nh[489] + nh[909] + nh[507] + nh[80] + nh[164] + nh[893] + nh[910] + nh[82] + nh[164] + nh[731] + nh[489] + nh[67] + nh[911] + nh[211] + nh[770] + nh[912] + nh[164] + nh[913] + nh[770] + nh[914] + nh[15] + nh[915] + nh[892] + nh[916] + nh[917] + nh[918] + nh[919] + nh[192] + nh[920] + nh[921] + nh[922] + nh[923] + nh[770] + nh[262] + nh[924] + nh[731] + nh[504] + nh[224] + nh[925] + nh[926] + nh[927] + nh[928] + nh[489] + nh[929] + nh[930] + nh[224] + nh[504] + nh[931] + nh[932] + nh[933] + nh[911] + nh[934] + nh[935] + nh[936] + nh[504] + nh[224] + nh[937] + nh[938] + nh[939] + nh[940] + nh[504] + nh[941] + nh[942] + nh[272] + nh[507] + nh[943] + nh[504] + nh[944] + nh[945] + nh[353] + nh[946] + nh[947] + nh[770] + nh[948] + nh[489] + nh[211] + nh[949] + nh[950] + nh[951] + nh[82] + nh[504] + nh[952] + nh[489] + nh[953] + nh[945] + nh[67] + nh[82] + nh[954] + nh[272] + nh[15] + nh[80] + nh[15] + nh[955] + nh[489] + nh[956] + nh[901] + nh[957] + nh[899] + nh[211] + nh[504] + nh[958] + nh[489] + nh[192] + nh[959] + nh[960] + nh[164] + nh[961] + nh[962] + nh[963] + nh[964] + nh[965] + nh[966] + nh[967] + nh[507] + nh[272] + nh[910] + nh[828] + nh[504] + nh[968] + nh[15] + nh[969] + nh[507] + nh[352] + nh[526] + nh[970] + nh[489] + nh[971] + nh[15] + nh[972] + nh[770] + nh[731] + nh[504] + nh[272] + nh[770] + nh[973] + nh[974] + nh[975] + nh[770] + nh[976] + nh[770] + nh[977] + nh[978] + nh[979] + nh[980] + nh[981] + nh[504] + nh[982] + nh[504] + nh[983] + nh[507] + nh[82] + nh[507] + nh[984] + nh[895] + nh[985] + nh[504] + nh[731] + nh[164] + nh[986] + nh[907] + nh[950] + nh[15],
    kw = nh[179] + nh[41] + nh[987] + nh[46] + nh[71] + nh[512],
    Ow = nh[431] + nh[988] + nh[989] + nh[431] + nh[731] + nh[43] + nh[431] + nh[988] + nh[990] + nh[76] + nh[312] + nh[76] + nh[860] + nh[431] + nh[80] + nh[1] + nh[991] + nh[76] + nh[312] + nh[76] + nh[860] + nh[431] + nh[80] + nh[1] + nh[992] + nh[76] + nh[312] + nh[76] + nh[860],
    Mw = nh[993], Iw = nh[994], Sw = nh[995], Pw = nh[166] + nh[117], Aw = nh[996], Cw = nh[262] + nh[76], Lw = nh[951],
    Rw = nh[83], Dw = nh[997], jw = nh[1] + nh[317], Nw = nh[104] + nh[998], qw = nh[1] + nh[999], Bw = nh[1e3],
    $w = nh[1001], Fw = nh[1002], Gw = nh[1003], zw = nh[1004], Yw = nh[1005], Hw = nh[1006], Uw = nh[1007],
    Ww = nh[482], Xw = nh[1008], Vw = nh[1009], Zw = nh[413] + nh[1010],
    Kw = nh[46] + nh[298] + nh[46] + nh[1011] + nh[352], Jw = nh[1012], Qw = nh[1013], tT = nh[1014],
    iT = nh[1015] + nh[110] + nh[577], nT = nh[1016], eT = nh[1017] + nh[76] + nh[893] + nh[76] + nh[211],
    sT = nh[38] + nh[91], rT = nh[29] + nh[161], hT = nh[321], aT = nh[1018], oT = nh[1019] + nh[110] + nh[577],
    fT = nh[1020], uT = nh[181] + nh[80] + nh[55], cT = nh[503] + nh[117] + nh[181], _T = nh[1021],
    dT = nh[224] + nh[46] + nh[224], lT = nh[413] + nh[97] + nh[1] + nh[317],
    vT = nh[413] + nh[97] + nh[1] + nh[317] + nh[25] + nh[618], bT = nh[413] + nh[97] + nh[274] + nh[414],
    yT = nh[22] + nh[81] + nh[272] + nh[504], gT = nh[22] + nh[81] + nh[82] + nh[537],
    xT = nh[22] + nh[1022] + nh[41] + nh[42], pT = nh[22] + nh[1023], ET = nh[22] + nh[81] + nh[82] + nh[489],
    mT = nh[22] + nh[353] + nh[1024], wT = nh[268], TT = nh[22] + nh[81] + nh[534], kT = nh[1025], OT = nh[1023],
    MT = nh[22] + nh[1026] + nh[693], IT = nh[22] + nh[81] + nh[82] + nh[505], ST = nh[22] + nh[81] + nh[1027],
    PT = nh[233] + nh[104] + nh[1028], AT = nh[1029], CT = nh[22] + nh[81] + nh[262] + nh[506], LT = nh[198],
    RT = nh[22] + nh[81] + nh[262] + nh[507], DT = nh[502], jT = nh[671] + nh[185] + nh[228],
    NT = nh[1030] + nh[61] + nh[539], qT = nh[749], BT = nh[22] + nh[81] + nh[82] + nh[1031],
    $T = nh[22] + nh[81] + nh[272] + nh[1032],
    FT = nh[22] + nh[81] + nh[534] + nh[1] + nh[317] + nh[38] + nh[167] + nh[72] + nh[277],
    GT = nh[22] + nh[81] + nh[82] + nh[575] + nh[294] + nh[1033], zT = nh[1034] + nh[294] + nh[1033], YT = nh[1035],
    HT = nh[141] + nh[81] + nh[82] + nh[1036] + nh[294] + nh[1033], UT = nh[1029] + nh[66], WT = nh[141] + nh[1037],
    XT = nh[1038], VT = nh[3] + nh[29] + nh[161] + nh[61] + nh[88] + nh[185] + nh[164],
    ZT = nh[22] + nh[81] + nh[272] + nh[503], KT = nh[1039] + nh[29] + nh[161], JT = nh[1040] + nh[117] + nh[200],
    QT = nh[22] + nh[81] + nh[262] + nh[164], tk = nh[71] + nh[41] + nh[1041], ik = nh[450] + nh[185] + nh[164],
    nk = nh[141] + nh[1042], ek = nh[22] + nh[81] + nh[1043], sk = nh[22] + nh[81] + nh[82] + nh[1044],
    rk = nh[22] + nh[81] + nh[534] + nh[61] + nh[195] + nh[72] + nh[277], hk = nh[173] + nh[117] + nh[159],
    ak = nh[22] + nh[81] + nh[272] + nh[1045] + nh[1] + nh[317], ok = nh[3] + nh[274] + nh[1046] + nh[61] + nh[195],
    fk = nh[22] + nh[1023] + nh[1] + nh[1047], uk = nh[162] + nh[61] + nh[195],
    ck = nh[22] + nh[71] + nh[185] + nh[1048] + nh[104] + nh[114], _k = nh[432] + nh[22] + nh[1049],
    dk = nh[1050] + nh[76] + nh[586], lk = nh[1050] + nh[76] + nh[1051], vk = nh[432] + nh[22] + nh[360],
    bk = nh[432] + nh[22] + nh[1052], yk = nh[22] + nh[1053], gk = nh[22] + nh[296] + nh[1] + nh[317],
    xk = nh[22] + nh[81] + nh[272] + nh[665], pk = nh[22] + nh[1054], Ek = nh[22] + nh[1037] + nh[72] + nh[1055],
    mk = nh[51] + nh[61] + nh[327] + nh[29] + nh[1056], wk = nh[22] + nh[262] + nh[1057],
    Tk = nh[298] + nh[29] + nh[299] + nh[104] + nh[1058], kk = nh[22] + nh[731] + nh[674],
    Ok = nh[22] + nh[1023] + nh[1] + nh[486], Mk = nh[22] + nh[1059] + nh[43] + nh[1060],
    Ik = nh[1059] + nh[43] + nh[243] + nh[1] + nh[1061], Sk = nh[268] + nh[33] + nh[1062],
    Pk = nh[22] + nh[407] + nh[731], Ak = nh[22] + nh[82] + nh[770] + nh[1] + nh[486], Ck = nh[1063] + nh[76] + nh[196],
    Lk = nh[141] + nh[1064], Rk = nh[71] + nh[1] + nh[317], Dk = nh[1065], jk = nh[268] + nh[104] + nh[1066],
    Nk = nh[450] + nh[1] + nh[1067], qk = nh[1068] + nh[38] + nh[1069] + nh[320] + nh[1070], Bk = nh[1071],
    $k = nh[28] + nh[25] + nh[26] + nh[1] + nh[532],
    Fk = nh[22] + nh[394] + nh[61] + nh[327] + nh[185] + nh[276] + nh[72] + nh[277],
    Gk = nh[194] + nh[29] + nh[326] + nh[61] + nh[327],
    zk = nh[298] + nh[29] + nh[299] + nh[61] + nh[88] + nh[55] + nh[1072] + nh[72] + nh[1073], Yk = nh[141] + nh[1074],
    Hk = nh[0] + nh[29] + nh[326], Uk = nh[298] + nh[29] + nh[299] + nh[29] + nh[326],
    Wk = nh[3] + nh[185] + nh[228] + nh[61] + nh[88] + nh[185] + nh[164], Xk = nh[393] + nh[538],
    Vk = nh[136] + nh[487] + nh[46] + nh[1075], Zk = nh[166] + nh[185] + nh[228] + nh[43] + nh[1076],
    Kk = nh[1023] + nh[61] + nh[195], Jk = nh[22] + nh[1077] + nh[294] + nh[445],
    Qk = nh[22] + nh[81] + nh[272] + nh[1045] + nh[294], tO = nh[22] + nh[218] + nh[61] + nh[195], iO = nh[27] + nh[31],
    nO = nh[450], eO = nh[22] + nh[81] + nh[82] + nh[1057], sO = nh[357] + nh[393] + nh[1044], rO = nh[47] + nh[393],
    hO = nh[413] + nh[76] + nh[29] + nh[161], aO = nh[1078], oO = nh[253] + nh[38] + nh[1079],
    fO = nh[1080] + nh[274] + nh[1081], uO = nh[1082], cO = nh[413] + nh[76] + nh[29] + nh[326],
    _O = nh[22] + nh[81] + nh[963], dO = nh[397] + nh[76] + nh[1083],
    lO = nh[1084] + nh[25] + nh[204] + nh[1] + nh[532], vO = nh[47] + nh[25] + nh[204] + nh[38] + nh[1085],
    bO = nh[51] + nh[320] + nh[1086], yO = nh[71], gO = nh[1087] + nh[29] + nh[1056], xO = nh[413] + nh[97] + nh[492],
    pO = nh[27] + nh[1088], EO = nh[1089], mO = nh[394], wO = nh[22] + nh[81] + nh[82] + nh[644], TO = nh[1088],
    kO = nh[265], OO = nh[71] + nh[72] + nh[331], MO = nh[22] + nh[265], IO = nh[413] + nh[76] + nh[320] + nh[307],
    SO = nh[1090] + nh[76] + nh[108], PO = nh[1090] + nh[76] + nh[47], AO = nh[271] + nh[25] + nh[93],
    CO = nh[1091] + nh[22] + nh[1092], LO = nh[413] + nh[76] + nh[38] + nh[280] + nh[320] + nh[307], RO = nh[1093],
    DO = nh[38] + nh[280] + nh[320] + nh[307], jO = nh[3] + nh[38] + nh[280], NO = nh[413] + nh[76] + nh[61] + nh[1094],
    qO = nh[471] + nh[38] + nh[1069] + nh[320] + nh[1070], BO = nh[1095] + nh[22] + nh[360] + nh[22] + nh[341],
    $O = nh[1095] + nh[22] + nh[1096], FO = nh[1095] + nh[22] + nh[1097] + nh[22] + nh[170],
    GO = nh[268] + nh[72] + nh[277], zO = nh[1098], YO = nh[27] + nh[1099] + nh[38] + nh[167],
    HO = nh[1095] + nh[22] + nh[1100], UO = nh[413] + nh[76] + nh[274] + nh[1081], WO = nh[1099] + nh[38] + nh[167],
    XO = nh[1098] + nh[117] + nh[302], VO = nh[1098] + nh[185] + nh[186], ZO = nh[274] + nh[1081],
    KO = nh[413] + nh[76] + nh[117] + nh[181], JO = nh[117] + nh[181], QO = nh[268] + nh[55] + nh[187],
    tM = nh[69] + nh[1101], iM = nh[180] + nh[104] + nh[114], nM = nh[202] + nh[104] + nh[114],
    eM = nh[1102] + nh[38] + nh[700], sM = nh[1102] + nh[38] + nh[700] + nh[38] + nh[1079], rM = nh[27] + nh[1103],
    hM = nh[263] + nh[119], aM = nh[263] + nh[120],
    oM = nh[451] + nh[22] + nh[360] + nh[22] + nh[741] + nh[22] + nh[341], fM = nh[22] + nh[1104],
    uM = nh[270] + nh[1] + nh[436], cM = nh[270] + nh[41] + nh[289] + nh[55] + nh[288],
    _M = nh[270] + nh[41] + nh[289] + nh[55] + nh[288] + nh[14] + nh[123], dM = nh[27] + nh[268] + nh[55] + nh[187],
    lM = nh[27] + nh[278] + nh[274] + nh[275], vM = nh[194] + nh[38] + nh[167],
    bM = nh[28] + nh[61] + nh[195] + nh[1] + nh[486], yM = nh[27] + nh[268] + nh[41] + nh[240],
    gM = nh[27] + nh[268] + nh[33] + nh[1062], xM = nh[27] + nh[1105] + nh[29] + nh[490], pM = nh[1106],
    EM = nh[1107] + nh[33] + nh[1108], mM = nh[27] + nh[278] + nh[1] + nh[436],
    wM = nh[1107] + nh[442] + nh[1109] + nh[117] + nh[403], TM = nh[28] + nh[55] + nh[187] + nh[1] + nh[486],
    kM = nh[22] + nh[81] + nh[272] + nh[537], OM = nh[33] + nh[1062], MM = nh[41] + nh[240],
    IM = nh[43] + nh[261] + nh[25] + nh[152], SM = nh[38] + nh[167], PM = nh[741] + nh[22] + nh[380],
    AM = nh[61] + nh[273] + nh[274] + nh[275], CM = nh[451] + nh[22] + nh[360], LM = nh[104] + nh[266],
    RM = nh[359] + nh[22] + nh[360] + nh[22] + nh[1110], DM = nh[444] + nh[76] + nh[785],
    jM = nh[444] + nh[76] + nh[270], NM = nh[451] + nh[22] + nh[742] + nh[22] + nh[390] + nh[22] + nh[119],
    qM = nh[444] + nh[76] + nh[207], BM = nh[1111] + nh[22] + nh[249], $M = nh[749] + nh[76] + nh[785], FM = nh[1112],
    GM = nh[1103], zM = nh[435] + nh[76] + nh[1113], YM = nh[742] + nh[22] + nh[249], HM = nh[435] + nh[76] + nh[785],
    UM = nh[742] + nh[22] + nh[390] + nh[22] + nh[119], WM = nh[435] + nh[76] + nh[263] + nh[76] + nh[87],
    XM = nh[435] + nh[76] + nh[263] + nh[76] + nh[88], VM = nh[339] + nh[22] + nh[1114],
    ZM = nh[1115] + nh[76] + nh[202], KM = nh[339] + nh[22] + nh[1114] + nh[22] + nh[169],
    JM = nh[1115] + nh[76] + nh[202] + nh[76] + nh[99],
    QM = nh[339] + nh[22] + nh[183] + nh[22] + nh[1116] + nh[22] + nh[249],
    tI = nh[339] + nh[22] + nh[183] + nh[22] + nh[1117], iI = nh[1115] + nh[76] + nh[216] + nh[76] + nh[1118],
    nI = nh[339] + nh[22] + nh[183] + nh[22] + nh[1117] + nh[22] + nh[390],
    eI = nh[339] + nh[22] + nh[1116] + nh[22] + nh[249], sI = nh[1115] + nh[76] + nh[180] + nh[76] + nh[785],
    rI = nh[1115] + nh[76] + nh[180] + nh[76] + nh[1119], hI = nh[1115] + nh[76] + nh[777],
    aI = nh[339] + nh[22] + nh[1120] + nh[22] + nh[169], oI = nh[1115] + nh[76] + nh[777] + nh[76] + nh[99],
    fI = nh[1121] + nh[22] + nh[371] + nh[22] + nh[1122], uI = nh[260] + nh[76] + nh[94] + nh[76] + nh[397],
    cI = nh[1123] + nh[22] + nh[249], _I = nh[278] + nh[76] + nh[785], dI = nh[1123] + nh[22] + nh[764],
    lI = nh[278] + nh[76] + nh[1119], vI = nh[741], bI = nh[270] + nh[76] + nh[89], yI = nh[270] + nh[76] + nh[785],
    gI = nh[741] + nh[22] + nh[183] + nh[22] + nh[1117], xI = nh[270] + nh[76] + nh[216] + nh[76] + nh[1118],
    pI = nh[270] + nh[76] + nh[510], EI = nh[1096], mI = nh[183] + nh[22] + nh[732], wI = nh[216] + nh[76] + nh[1124],
    TI = nh[183] + nh[22] + nh[736], kI = nh[216] + nh[76] + nh[305],
    OI = nh[183] + nh[22] + nh[1117] + nh[22] + nh[732], MI = nh[216] + nh[76] + nh[1118] + nh[76] + nh[1124],
    II = nh[183] + nh[22] + nh[1117] + nh[22] + nh[736], SI = nh[216] + nh[76] + nh[1118] + nh[76] + nh[305],
    PI = nh[231] + nh[22] + nh[1123] + nh[22] + nh[249], AI = nh[231] + nh[22] + nh[1123] + nh[22] + nh[764],
    CI = nh[231] + nh[22] + nh[741], LI = nh[238] + nh[76] + nh[270] + nh[76] + nh[89],
    RI = nh[231] + nh[22] + nh[741] + nh[22] + nh[249], DI = nh[238] + nh[76] + nh[270] + nh[76] + nh[99],
    jI = nh[231] + nh[22] + nh[741] + nh[22] + nh[183] + nh[22] + nh[1117],
    NI = nh[231] + nh[22] + nh[741] + nh[22] + nh[183] + nh[22] + nh[1117] + nh[22] + nh[390],
    qI = nh[231] + nh[22] + nh[380], BI = nh[231] + nh[22] + nh[741] + nh[22] + nh[380],
    $I = nh[238] + nh[76] + nh[510], FI = nh[238] + nh[76] + nh[235],
    GI = nh[231] + nh[22] + nh[651] + nh[22] + nh[523], zI = nh[238] + nh[76] + nh[671] + nh[76] + nh[13],
    YI = nh[231] + nh[22] + nh[1125], HI = nh[238] + nh[76] + nh[1126], UI = nh[238] + nh[76] + nh[1103],
    WI = nh[1127] + nh[22] + nh[1128], XI = nh[858] + nh[76] + nh[208], VI = nh[1127] + nh[22] + nh[1129],
    ZI = nh[858] + nh[76] + nh[286], KI = nh[1127] + nh[22] + nh[1130], JI = nh[858] + nh[76] + nh[1038],
    QI = nh[1127] + nh[22] + nh[1131] + nh[22] + nh[1129], tS = nh[858] + nh[76] + nh[785],
    iS = nh[1127] + nh[22] + nh[168] + nh[22] + nh[170], nS = nh[858] + nh[76] + nh[182] + nh[76] + nh[1025],
    eS = nh[1127] + nh[22] + nh[168] + nh[22] + nh[171], sS = nh[858] + nh[76] + nh[182] + nh[76] + nh[1132],
    rS = nh[1127] + nh[22] + nh[168] + nh[22] + nh[169], hS = nh[858] + nh[76] + nh[182] + nh[76] + nh[99],
    aS = nh[1127] + nh[22] + nh[1096], oS = nh[858] + nh[76] + nh[235],
    fS = nh[858] + nh[76] + nh[283] + nh[76] + nh[89], uS = nh[1127] + nh[22] + nh[743],
    cS = nh[858] + nh[76] + nh[283], _S = nh[1127] + nh[22] + nh[380], dS = nh[858] + nh[76] + nh[510],
    lS = nh[858] + nh[76] + nh[263] + nh[76] + nh[87], vS = nh[1127] + nh[22] + nh[390] + nh[22] + nh[120],
    bS = nh[858] + nh[76] + nh[263] + nh[76] + nh[88], yS = nh[1127] + nh[22] + nh[170],
    gS = nh[858] + nh[76] + nh[1025], xS = nh[858] + nh[76] + nh[1133] + nh[76] + nh[286],
    pS = nh[858] + nh[76] + nh[270], ES = nh[1127] + nh[22] + nh[741] + nh[22] + nh[183] + nh[22] + nh[1117],
    mS = nh[1127] + nh[22] + nh[741] + nh[22] + nh[169], wS = nh[858] + nh[76] + nh[270] + nh[76] + nh[99],
    TS = nh[1127] + nh[22] + nh[1123] + nh[22] + nh[249], kS = nh[1127] + nh[22] + nh[1123] + nh[22] + nh[764],
    OS = nh[1127] + nh[22] + nh[1134], MS = nh[858] + nh[76] + nh[267],
    IS = nh[858] + nh[76] + nh[435] + nh[76] + nh[1113], SS = nh[858] + nh[76] + nh[435] + nh[76] + nh[785],
    PS = nh[1127] + nh[22] + nh[742] + nh[22] + nh[390] + nh[22] + nh[120],
    AS = nh[1127] + nh[22] + nh[651] + nh[22] + nh[523], CS = nh[858] + nh[76] + nh[671] + nh[76] + nh[13],
    LS = nh[1127] + nh[22] + nh[1135] + nh[22] + nh[369], RS = nh[858] + nh[76] + nh[28] + nh[76] + nh[296],
    DS = nh[1095] + nh[22] + nh[1123] + nh[22] + nh[764], jS = nh[1095] + nh[22] + nh[380],
    NS = nh[1098] + nh[76] + nh[510], qS = nh[1095] + nh[22] + nh[1114], BS = nh[1098] + nh[76] + nh[202],
    $S = nh[1098] + nh[76] + nh[202] + nh[76] + nh[785],
    FS = nh[1095] + nh[22] + nh[1114] + nh[22] + nh[183] + nh[22] + nh[1117],
    GS = nh[362] + nh[22] + nh[408] + nh[22] + nh[1127] + nh[22] + nh[1131] + nh[22] + nh[1129],
    zS = nh[362] + nh[22] + nh[408] + nh[22] + nh[1127] + nh[22] + nh[249],
    YS = nh[362] + nh[22] + nh[408] + nh[22] + nh[1127] + nh[22] + nh[168] + nh[22] + nh[170],
    HS = nh[362] + nh[22] + nh[408] + nh[22] + nh[1127] + nh[22] + nh[168] + nh[22] + nh[171],
    US = nh[362] + nh[22] + nh[408] + nh[22] + nh[1127] + nh[22] + nh[168] + nh[22] + nh[169],
    WS = nh[362] + nh[22] + nh[408] + nh[22] + nh[1127] + nh[22] + nh[1096],
    XS = nh[362] + nh[22] + nh[408] + nh[22] + nh[1127] + nh[22] + nh[743],
    VS = nh[362] + nh[22] + nh[408] + nh[22] + nh[1127] + nh[22] + nh[380],
    ZS = nh[362] + nh[22] + nh[408] + nh[22] + nh[1127] + nh[22] + nh[390] + nh[22] + nh[119],
    KS = nh[362] + nh[22] + nh[408] + nh[22] + nh[1127] + nh[22] + nh[390] + nh[22] + nh[120],
    JS = nh[362] + nh[22] + nh[408] + nh[22] + nh[1127] + nh[22] + nh[741] + nh[22] + nh[169],
    QS = nh[362] + nh[22] + nh[408] + nh[22] + nh[1127] + nh[22] + nh[1123] + nh[22] + nh[249],
    tP = nh[362] + nh[22] + nh[408] + nh[22] + nh[1127] + nh[22] + nh[1123] + nh[22] + nh[764],
    iP = nh[362] + nh[22] + nh[408] + nh[22] + nh[1127] + nh[22] + nh[1134], nP = nh[394] + nh[76] + nh[89],
    eP = nh[362] + nh[22] + nh[249], sP = nh[394] + nh[76] + nh[785], rP = nh[362] + nh[22] + nh[1120],
    hP = nh[394] + nh[76] + nh[777], aP = nh[362] + nh[22] + nh[1120] + nh[22] + nh[169],
    oP = nh[394] + nh[76] + nh[777] + nh[76] + nh[99], fP = nh[394] + nh[76] + nh[216] + nh[76] + nh[1118],
    uP = nh[362] + nh[22] + nh[183] + nh[22] + nh[1117] + nh[22] + nh[390],
    cP = nh[394] + nh[76] + nh[90] + nh[76] + nh[263], _P = nh[394] + nh[76] + nh[71] + nh[76] + nh[263],
    dP = nh[362] + nh[22] + nh[1116] + nh[22] + nh[249], lP = nh[394] + nh[76] + nh[180] + nh[76] + nh[785],
    vP = nh[394] + nh[76] + nh[1087] + nh[76] + nh[207], bP = nh[362] + nh[22] + nh[408] + nh[22] + nh[1136],
    yP = nh[394] + nh[76] + nh[1087] + nh[76] + nh[1137], gP = nh[394] + nh[76] + nh[1138] + nh[76] + nh[1139],
    xP = nh[362] + nh[22] + nh[367], pP = nh[394] + nh[76] + nh[712],
    EP = nh[394] + nh[76] + nh[1140] + nh[76] + nh[1141], mP = nh[394] + nh[76] + nh[45] + nh[76] + nh[1142],
    wP = nh[394] + nh[76] + nh[45] + nh[76] + nh[35], TP = nh[362] + nh[22] + nh[378], kP = nh[394] + nh[76] + nh[1143],
    OP = nh[394] + nh[76] + nh[1143] + nh[76] + nh[510],
    MP = nh[394] + nh[76] + nh[90] + nh[76] + nh[1144] + nh[76] + nh[394],
    IP = nh[394] + nh[76] + nh[71] + nh[76] + nh[1144] + nh[76] + nh[394],
    SP = nh[394] + nh[76] + nh[90] + nh[76] + nh[1145], PP = nh[394] + nh[76] + nh[71] + nh[76] + nh[1145],
    AP = nh[350] + nh[22] + nh[388], CP = nh[729] + nh[76] + nh[90], LP = nh[350] + nh[22] + nh[388] + nh[22] + nh[170],
    RP = nh[729] + nh[76] + nh[90] + nh[76] + nh[1025], DP = nh[350] + nh[22] + nh[388] + nh[22] + nh[390],
    jP = nh[729] + nh[76] + nh[90] + nh[76] + nh[263], NP = nh[729] + nh[76] + nh[90] + nh[76] + nh[202],
    qP = nh[350] + nh[22] + nh[388] + nh[22] + nh[1114] + nh[22] + nh[169],
    BP = nh[729] + nh[76] + nh[90] + nh[76] + nh[777],
    $P = nh[350] + nh[22] + nh[388] + nh[22] + nh[1120] + nh[22] + nh[169],
    FP = nh[350] + nh[22] + nh[388] + nh[22] + nh[183] + nh[22] + nh[1117],
    GP = nh[729] + nh[76] + nh[90] + nh[76] + nh[216] + nh[76] + nh[1118],
    zP = nh[350] + nh[22] + nh[388] + nh[22] + nh[183] + nh[22] + nh[1117] + nh[22] + nh[390],
    YP = nh[350] + nh[22] + nh[388] + nh[22] + nh[1116] + nh[22] + nh[764],
    HP = nh[729] + nh[76] + nh[90] + nh[76] + nh[216] + nh[76] + nh[1124],
    UP = nh[729] + nh[76] + nh[90] + nh[76] + nh[216] + nh[76] + nh[305], WP = nh[350] + nh[22] + nh[391],
    XP = nh[729] + nh[76] + nh[71], VP = nh[729] + nh[76] + nh[71] + nh[76] + nh[1025],
    ZP = nh[350] + nh[22] + nh[391] + nh[22] + nh[390], KP = nh[729] + nh[76] + nh[71] + nh[76] + nh[263],
    JP = nh[729] + nh[76] + nh[71] + nh[76] + nh[202], QP = nh[350] + nh[22] + nh[391] + nh[22] + nh[1120],
    tA = nh[729] + nh[76] + nh[71] + nh[76] + nh[777],
    iA = nh[729] + nh[76] + nh[71] + nh[76] + nh[216] + nh[76] + nh[1118],
    nA = nh[729] + nh[76] + nh[71] + nh[76] + nh[180] + nh[76] + nh[785],
    eA = nh[350] + nh[22] + nh[391] + nh[22] + nh[1116] + nh[22] + nh[764],
    sA = nh[350] + nh[22] + nh[391] + nh[22] + nh[183] + nh[22] + nh[732],
    rA = nh[729] + nh[76] + nh[71] + nh[76] + nh[216] + nh[76] + nh[1124],
    hA = nh[350] + nh[22] + nh[391] + nh[22] + nh[183] + nh[22] + nh[736],
    aA = nh[729] + nh[76] + nh[71] + nh[76] + nh[216] + nh[76] + nh[305],
    oA = nh[451] + nh[22] + nh[742] + nh[22] + nh[1146], fA = nh[1127] + nh[22] + nh[249], uA = nh[785],
    cA = nh[182] + nh[38] + nh[167], _A = nh[1127] + nh[22] + nh[741],
    dA = nh[1127] + nh[22] + nh[741] + nh[22] + nh[183] + nh[22] + nh[1117] + nh[22] + nh[390],
    lA = nh[278] + nh[1] + nh[436], vA = nh[1105] + nh[14] + nh[81] + nh[117] + nh[1147],
    bA = nh[742] + nh[22] + nh[1146], yA = nh[742] + nh[22] + nh[390] + nh[22] + nh[120],
    gA = nh[1133] + nh[25] + nh[93], xA = nh[1127] + nh[22] + nh[743] + nh[22] + nh[232],
    pA = nh[283] + nh[110] + nh[111], EA = nh[1105] + nh[25] + nh[285], mA = nh[270] + nh[104] + nh[282],
    wA = nh[1127] + nh[22] + nh[390] + nh[22] + nh[119], TA = nh[267],
    kA = nh[1127] + nh[22] + nh[742] + nh[22] + nh[1146], OA = nh[1127] + nh[22] + nh[742] + nh[22] + nh[249],
    MA = nh[1127] + nh[22] + nh[742] + nh[22] + nh[390] + nh[22] + nh[119],
    IA = nh[1111] + nh[22] + nh[249] + nh[22] + nh[245] + nh[22] + nh[246], SA = nh[22] + nh[80] + nh[1057],
    PA = nh[741] + nh[22] + nh[249], AA = nh[741] + nh[22] + nh[183] + nh[22] + nh[1117] + nh[22] + nh[390],
    CA = nh[22] + nh[81] + nh[82] + nh[191], LA = nh[1126] + nh[117] + nh[302], RA = nh[339] + nh[22] + nh[1120],
    DA = nh[231] + nh[22] + nh[1096], jA = nh[231] + nh[22] + nh[1112], NA = nh[1148] + nh[61] + nh[1149],
    qA = nh[22] + nh[352] + nh[505], BA = nh[1115],
    $A = nh[1095] + nh[22] + nh[1114] + nh[22] + nh[183] + nh[22] + nh[1117] + nh[22] + nh[390], FA = nh[22] + nh[1064],
    GA = nh[362] + nh[22] + nh[232], zA = nh[90] + nh[43] + nh[1150], YA = nh[71] + nh[43] + nh[1150],
    HA = nh[216] + nh[55] + nh[288] + nh[1] + nh[434], UA = nh[216] + nh[55] + nh[288] + nh[778] + nh[779],
    WA = nh[362] + nh[22] + nh[391] + nh[22] + nh[389], XA = nh[90] + nh[43] + nh[1150] + nh[38] + nh[167],
    VA = nh[90] + nh[43] + nh[1150] + nh[14] + nh[123], ZA = nh[350] + nh[22] + nh[388] + nh[22] + nh[1114],
    KA = nh[90] + nh[43] + nh[1150] + nh[38] + nh[201],
    JA = nh[90] + nh[43] + nh[1150] + nh[38] + nh[201] + nh[38] + nh[223],
    QA = nh[350] + nh[22] + nh[388] + nh[22] + nh[1120], tC = nh[90] + nh[43] + nh[1150] + nh[14] + nh[1151],
    iC = nh[350] + nh[22] + nh[388] + nh[22] + nh[1116] + nh[22] + nh[249],
    nC = nh[90] + nh[43] + nh[1150] + nh[72] + nh[780] + nh[1] + nh[436],
    eC = nh[90] + nh[43] + nh[1150] + nh[41] + nh[289] + nh[55] + nh[288],
    sC = nh[90] + nh[43] + nh[1150] + nh[41] + nh[289] + nh[778] + nh[779],
    rC = nh[350] + nh[22] + nh[388] + nh[22] + nh[183] + nh[22] + nh[732],
    hC = nh[90] + nh[43] + nh[1150] + nh[41] + nh[289] + nh[1] + nh[434],
    aC = nh[350] + nh[22] + nh[391] + nh[22] + nh[170], oC = nh[71] + nh[43] + nh[1150] + nh[38] + nh[167],
    fC = nh[71] + nh[43] + nh[1150] + nh[14] + nh[123], uC = nh[350] + nh[22] + nh[391] + nh[22] + nh[1114],
    cC = nh[71] + nh[43] + nh[1150] + nh[38] + nh[201],
    _C = nh[350] + nh[22] + nh[391] + nh[22] + nh[1114] + nh[22] + nh[169],
    dC = nh[71] + nh[43] + nh[1150] + nh[38] + nh[201] + nh[38] + nh[223],
    lC = nh[71] + nh[43] + nh[1150] + nh[14] + nh[1151],
    vC = nh[350] + nh[22] + nh[391] + nh[22] + nh[1120] + nh[22] + nh[169],
    bC = nh[71] + nh[43] + nh[1150] + nh[14] + nh[1151] + nh[38] + nh[223],
    yC = nh[350] + nh[22] + nh[391] + nh[22] + nh[1116] + nh[22] + nh[249],
    gC = nh[71] + nh[43] + nh[1150] + nh[72] + nh[780] + nh[1] + nh[436],
    xC = nh[71] + nh[43] + nh[1150] + nh[72] + nh[780] + nh[274] + nh[275],
    pC = nh[71] + nh[43] + nh[1150] + nh[41] + nh[289] + nh[55] + nh[288],
    EC = nh[350] + nh[22] + nh[391] + nh[22] + nh[183] + nh[22] + nh[1117] + nh[22] + nh[390],
    mC = nh[71] + nh[43] + nh[1150] + nh[41] + nh[289] + nh[778] + nh[779],
    wC = nh[71] + nh[43] + nh[1150] + nh[41] + nh[289] + nh[1] + nh[434], TC = nh[1087] + nh[41] + nh[1152],
    kC = nh[362] + nh[22] + nh[408] + nh[22] + nh[1127] + nh[22] + nh[1129],
    OC = nh[362] + nh[22] + nh[408] + nh[22] + nh[1127] + nh[22] + nh[1128],
    MC = nh[362] + nh[22] + nh[408] + nh[22] + nh[1127] + nh[22] + nh[743] + nh[22] + nh[232],
    IC = nh[362] + nh[22] + nh[408] + nh[22] + nh[1127] + nh[22] + nh[741], SC = nh[268] + nh[38] + nh[280],
    PC = nh[339] + nh[22] + nh[1116] + nh[22] + nh[764],
    AC = nh[350] + nh[22] + nh[391] + nh[22] + nh[183] + nh[22] + nh[1117], CC = nh[22] + nh[81] + nh[82] + nh[243],
    LC = nh[268] + nh[1] + nh[2] + nh[185] + nh[228], RC = nh[268] + nh[38] + nh[167],
    DC = nh[27] + nh[268] + nh[1] + nh[333], jC = nh[47] + nh[61] + nh[1153],
    NC = nh[28] + nh[61] + nh[1153] + nh[25] + nh[26] + nh[1] + nh[532], qC = nh[108] + nh[1] + nh[333],
    BC = nh[1154] + nh[41] + nh[1152], $C = nh[1154] + nh[61] + nh[1153] + nh[25] + nh[75],
    FC = nh[357] + nh[25] + nh[75], GC = nh[108] + nh[61] + nh[1153], zC = nh[194] + nh[1] + nh[2], YC = nh[1155],
    HC = nh[27] + nh[444] + nh[61] + nh[776], UC = nh[27] + nh[435] + nh[14] + nh[123] + nh[119],
    WC = nh[27] + nh[444] + nh[38] + nh[775] + nh[14] + nh[123] + nh[119],
    XC = nh[27] + nh[435] + nh[14] + nh[123] + nh[120], VC = nh[27] + nh[435] + nh[61] + nh[438],
    ZC = nh[27] + nh[268] + nh[61] + nh[195], KC = nh[22] + nh[81] + nh[272] + nh[1149],
    JC = nh[27] + nh[749] + nh[1] + nh[436],
    QC = nh[27] + nh[749] + nh[1] + nh[436] + nh[61] + nh[757] + nh[294] + nh[307],
    tL = nh[27] + nh[435] + nh[1] + nh[436], iL = nh[755] + nh[1] + nh[486],
    nL = nh[402] + nh[117] + nh[403] + nh[1] + nh[2], eL = nh[781],
    sL = nh[393] + nh[22] + nh[1156] + nh[22] + nh[1157], rL = nh[69] + nh[1158],
    hL = nh[22] + nh[81] + nh[262] + nh[81], aL = nh[27] + nh[268] + nh[38] + nh[593],
    oL = nh[22] + nh[781] + nh[61] + nh[195], fL = nh[27] + nh[268] + nh[72] + nh[780] + nh[274] + nh[275],
    uL = nh[27] + nh[1126] + nh[117] + nh[302], cL = nh[27] + nh[216] + nh[110] + nh[111],
    _L = nh[27] + nh[180] + nh[1] + nh[436], dL = nh[27] + nh[180] + nh[274] + nh[275], lL = nh[38] + nh[593],
    vL = nh[72] + nh[780] + nh[274] + nh[275], bL = nh[1159] + nh[22] + nh[1129],
    yL = nh[27] + nh[182] + nh[38] + nh[167], gL = nh[27] + nh[182] + nh[72] + nh[452], xL = nh[27] + nh[182],
    pL = nh[27] + nh[1025], EL = nh[166] + nh[294] + nh[1160] + nh[61] + nh[195],
    mL = nh[27] + nh[182] + nh[38] + nh[223], wL = nh[72] + nh[999], TL = nh[27] + nh[268] + nh[72] + nh[999],
    kL = nh[397] + nh[61] + nh[195], OL = nh[27] + nh[268] + nh[72] + nh[1161] + nh[43] + nh[1150],
    ML = nh[27] + nh[268] + nh[117] + nh[159] + nh[43] + nh[1150], IL = nh[27] + nh[777],
    SL = nh[194] + nh[72] + nh[1161] + nh[43] + nh[1150], PL = nh[194] + nh[117] + nh[159] + nh[43] + nh[1150],
    AL = nh[27] + nh[90] + nh[43] + nh[1150], CL = nh[27] + nh[90] + nh[43] + nh[1150] + nh[38] + nh[280],
    LL = nh[27] + nh[90] + nh[43] + nh[1150] + nh[14] + nh[123], RL = nh[90] + nh[43] + nh[1150] + nh[41] + nh[240],
    DL = nh[27] + nh[90] + nh[43] + nh[1150] + nh[38] + nh[167], jL = nh[90] + nh[43] + nh[1150] + nh[38] + nh[1079],
    NL = nh[90] + nh[43] + nh[1150] + nh[72] + nh[780] + nh[274] + nh[275],
    qL = nh[27] + nh[71] + nh[43] + nh[1150] + nh[14] + nh[123], BL = nh[71] + nh[43] + nh[1150] + nh[41] + nh[240],
    $L = nh[27] + nh[71] + nh[43] + nh[1150] + nh[38] + nh[280], FL = nh[27] + nh[71] + nh[43] + nh[1150],
    GL = nh[71] + nh[43] + nh[1150] + nh[38] + nh[1079], zL = nh[43] + nh[1150] + nh[38] + nh[201],
    YL = nh[43] + nh[1150] + nh[38] + nh[201] + nh[38] + nh[223], HL = nh[43] + nh[1150] + nh[38] + nh[1079],
    UL = nh[43] + nh[1150] + nh[41] + nh[289] + nh[55] + nh[288],
    WL = nh[43] + nh[1150] + nh[41] + nh[289] + nh[55] + nh[288] + nh[14] + nh[123],
    XL = nh[43] + nh[1150] + nh[72] + nh[780] + nh[1] + nh[436],
    VL = nh[43] + nh[1150] + nh[72] + nh[780] + nh[274] + nh[275],
    ZL = nh[43] + nh[1150] + nh[41] + nh[289] + nh[1] + nh[434],
    KL = nh[43] + nh[1150] + nh[41] + nh[289] + nh[778] + nh[779], JL = nh[43] + nh[1150] + nh[14] + nh[1151],
    QL = nh[43] + nh[1150] + nh[14] + nh[1151] + nh[38] + nh[223], tR = nh[229] + nh[43] + nh[1150],
    iR = nh[72] + nh[1161] + nh[43] + nh[1150], nR = nh[117] + nh[159] + nh[43] + nh[1150],
    eR = nh[3] + nh[41] + nh[1162] + nh[61] + nh[195], sR = nh[397] + nh[38] + nh[396], rR = nh[229] + nh[29] + nh[326],
    hR = nh[1163] + nh[61] + nh[1164], aR = nh[3] + nh[124] + nh[123],
    oR = nh[51] + nh[25] + nh[1165] + nh[14] + nh[1166], fR = nh[23] + nh[61] + nh[327] + nh[41] + nh[1152],
    uR = nh[1167], cR = nh[3] + nh[61] + nh[327] + nh[41] + nh[1152], _R = nh[194] + nh[25] + nh[128],
    dR = nh[229] + nh[104] + nh[1168] + nh[41] + nh[289], lR = nh[362] + nh[22] + nh[360] + nh[22] + nh[473],
    vR = nh[712] + nh[76], bR = nh[362] + nh[22] + nh[360] + nh[22] + nh[1169],
    yR = nh[108] + nh[38] + nh[1085] + nh[117] + nh[302], gR = nh[22] + nh[81] + nh[272] + nh[209],
    xR = nh[1170] + nh[25] + nh[1171], pR = nh[755] + nh[61] + nh[195], ER = nh[208] + nh[119], mR = nh[1145],
    wR = nh[3] + nh[41] + nh[1162] + nh[25] + nh[1171], TR = nh[69] + nh[1172],
    kR = nh[362] + nh[22] + nh[388] + nh[22] + nh[1173] + nh[22] + nh[362],
    OR = nh[362] + nh[22] + nh[391] + nh[22] + nh[1173] + nh[22] + nh[362],
    MR = nh[1095] + nh[22] + nh[1123] + nh[22] + nh[249], IR = nh[1095] + nh[22] + nh[1114] + nh[22] + nh[169],
    SR = nh[69] + nh[1174] + nh[1175] + nh[352], PR = nh[69] + nh[1176] + nh[29] + nh[224], AR = nh[22] + nh[1177],
    CR = nh[462], LR = nh[1178] + nh[33] + nh[1179], RR = nh[1180], DR = nh[58] + nh[29] + nh[30],
    jR = nh[203] + nh[117] + nh[1181], NR = nh[175], qR = nh[1182] + nh[43] + nh[464],
    BR = nh[23] + nh[38] + nh[280] + nh[320] + nh[307], $R = nh[23] + nh[274] + nh[1081],
    FR = nh[22] + nh[81] + nh[272] + nh[505], GR = nh[109] + nh[25] + nh[75], zR = nh[546],
    YR = nh[28] + nh[29] + nh[161] + nh[1] + nh[1183], HR = nh[1184], UR = nh[1185], WR = nh[1186], XR = nh[1187],
    VR = nh[1170], ZR = nh[1163] + nh[41] + nh[1188] + nh[72] + nh[1161],
    KR = nh[1163] + nh[41] + nh[1188] + nh[117] + nh[159], JR = nh[998] + nh[25] + nh[152] + nh[29] + nh[1189],
    QR = nh[108] + nh[29] + nh[161], tD = nh[3] + nh[55] + nh[56] + nh[38] + nh[223], iD = nh[1190] + nh[61] + nh[195],
    nD = nh[22] + nh[81] + nh[82] + nh[1191] + nh[61] + nh[195], eD = nh[633] + nh[43] + nh[243],
    sD = nh[633] + nh[185] + nh[81], rD = nh[1099] + nh[38] + nh[593], hD = nh[22] + nh[81] + nh[1192],
    aD = nh[51] + nh[185] + nh[276], oD = nh[588] + nh[117] + nh[159], fD = nh[5] + nh[41] + nh[1193],
    uD = nh[225] + nh[117] + nh[159] + nh[1] + nh[1061], cD = nh[633] + nh[117] + nh[159] + nh[14] + nh[1194],
    _D = nh[633] + nh[43] + nh[480], dD = nh[174] + nh[38] + nh[694], lD = nh[22] + nh[1195] + nh[43] + nh[480],
    vD = nh[1196], bD = nh[1040] + nh[38] + nh[1197], yD = nh[1198] + nh[38] + nh[1197] + nh[43] + nh[1199],
    gD = nh[51] + nh[294] + nh[1200], xD = nh[1040] + nh[29] + nh[1201],
    pD = nh[47] + nh[1] + nh[626] + nh[185] + nh[627], ED = nh[1202], mD = nh[1203] + nh[1011],
    wD = nh[55] + nh[1204] + nh[46] + nh[29] + nh[1205] + nh[239], TD = nh[1206] + nh[22] + nh[1207],
    kD = nh[28] + nh[185] + nh[627] + nh[29] + nh[30], OD = nh[38] + nh[280], MD = nh[1206] + nh[22] + nh[1208],
    ID = nh[41] + nh[289], SD = nh[38] + nh[1079], PD = nh[23] + nh[29] + nh[326], AD = nh[29] + nh[326],
    CD = nh[468] + nh[25] + nh[75], LD = nh[28] + nh[41] + nh[1152] + nh[29] + nh[1209],
    RD = nh[1210] + nh[29] + nh[490] + nh[41] + nh[1152],
    DD = nh[41] + nh[1152] + nh[46] + nh[1] + nh[1211] + nh[135] + nh[243] + nh[46] + nh[29] + nh[490],
    jD = nh[268] + nh[29] + nh[161], ND = nh[1212], qD = nh[1213] + nh[29] + nh[536],
    BD = nh[1214] + nh[104] + nh[1215], $D = nh[1216], FD = nh[468] + nh[294] + nh[307],
    GD = nh[356] + nh[1] + nh[532] + nh[55] + nh[533],
    zD = nh[515] + nh[185] + nh[228] + nh[1] + nh[532] + nh[55] + nh[533], YD = nh[22] + nh[1023] + nh[61] + nh[195],
    HD = nh[22] + nh[1190] + nh[61] + nh[195], UD = nh[1217] + nh[22] + nh[1218],
    WD = nh[1095] + nh[22] + nh[1097] + nh[22] + nh[232], XD = nh[1095] + nh[22] + nh[1097] + nh[22] + nh[184],
    VD = nh[22] + nh[81] + nh[272] + nh[243], ZD = nh[1095] + nh[22] + nh[360] + nh[22] + nh[340],
    KD = nh[1095] + nh[22] + nh[360] + nh[22] + nh[716], JD = nh[51] + nh[33] + nh[1219], QD = nh[1220] + nh[644],
    tj = nh[1221] + nh[153],
    ij = nh[1222] + nh[46] + nh[224] + nh[76] + nh[80] + nh[1044] + nh[46] + nh[1223] + nh[97] + nh[624], nj = nh[869],
    ej = nh[76] + nh[413] + nh[97] + nh[274] + nh[414] + nh[97] + nh[320] + nh[415] + nh[46] + nh[417],
    sj = nh[1222] + nh[100] + nh[211] + nh[101] + nh[278] + nh[97] + nh[785] + nh[512] + nh[65] + nh[66] + nh[224] + nh[426] + nh[224] + nh[426] + nh[224] + nh[426] + nh[224] + nh[76] + nh[352] + nh[68],
    rj = nh[76] + nh[413] + nh[97] + nh[274] + nh[414] + nh[97] + nh[320] + nh[415],
    hj = nh[1222] + nh[100] + nh[224] + nh[101], aj = nh[1224],
    oj = nh[100] + nh[1222] + nh[46] + nh[731] + nh[1044] + nh[46] + nh[1225] + nh[97] + nh[748] + nh[66] + nh[224] + nh[76] + nh[82] + nh[426] + nh[224] + nh[426] + nh[224] + nh[76] + nh[82] + nh[426] + nh[211] + nh[68],
    fj = nh[76] + nh[413] + nh[97] + nh[274] + nh[414] + nh[97] + nh[320] + nh[415] + nh[100] + nh[440],
    uj = nh[1222] + nh[100] + nh[211] + nh[101],
    cj = nh[100] + nh[1222] + nh[46] + nh[224] + nh[76] + nh[731] + nh[1044] + nh[46] + nh[787], _j = nh[1226],
    dj = nh[76] + nh[413] + nh[97] + nh[274] + nh[414] + nh[97] + nh[38] + nh[562] + nh[61] + nh[1227],
    lj = nh[1228] + nh[512] + nh[80] + nh[153] + nh[1229] + nh[286] + nh[512] + nh[1021] + nh[101] + nh[1230] + nh[97] + nh[1231] + nh[512] + nh[270] + nh[97] + nh[1230] + nh[101] + nh[1230] + nh[97] + nh[435] + nh[1232] + nh[227] + nh[46] + nh[224] + nh[153] + nh[46] + nh[224] + nh[153] + nh[46] + nh[211] + nh[153] + nh[1229] + nh[278] + nh[97] + nh[785] + nh[512] + nh[65] + nh[66] + nh[1233] + nh[67] + nh[1233] + nh[67] + nh[1233] + nh[67] + nh[224] + nh[76] + nh[731] + nh[1234] + nh[270] + nh[97] + nh[510] + nh[512] + nh[192] + nh[153] + nh[101] + nh[1228] + nh[512] + nh[211] + nh[153] + nh[101],
    vj = nh[76] + nh[413] + nh[97] + nh[274] + nh[414] + nh[97] + nh[38] + nh[562] + nh[61] + nh[1227] + nh[76] + nh[440] + nh[1235] + nh[413] + nh[97] + nh[274] + nh[414] + nh[97] + nh[38] + nh[562] + nh[61] + nh[1227] + nh[100] + nh[440],
    bj = nh[1228] + nh[97] + nh[85] + nh[512] + nh[82] + nh[153] + nh[101],
    yj = nh[1228] + nh[97] + nh[86] + nh[512] + nh[82] + nh[153] + nh[101],
    gj = nh[76] + nh[413] + nh[97] + nh[274] + nh[414] + nh[97] + nh[38] + nh[562] + nh[25] + nh[425],
    xj = nh[100] + nh[1222] + nh[46] + nh[731] + nh[1044] + nh[46] + nh[1225] + nh[97] + nh[748] + nh[66] + nh[224] + nh[76] + nh[82] + nh[426] + nh[224] + nh[426] + nh[224] + nh[76] + nh[82] + nh[426] + nh[211] + nh[1234],
    pj = nh[22] + nh[92] + nh[55] + nh[610] + nh[38] + nh[696],
    Ej = nh[22] + nh[501] + nh[55] + nh[610] + nh[38] + nh[696],
    mj = nh[413] + nh[97] + nh[274] + nh[414] + nh[97] + nh[38] + nh[562] + nh[25] + nh[425],
    wj = nh[22] + nh[81] + nh[272] + nh[87], Tj = nh[61] + nh[1236], kj = nh[208] + nh[120], Oj = nh[1237],
    Mj = nh[1238] + nh[22] + nh[1239], Ij = nh[1240] + nh[22] + nh[1241], Sj = nh[1240] + nh[22] + nh[360],
    Pj = nh[1223] + nh[14] + nh[475], Aj = nh[141] + nh[850] + nh[104] + nh[1066],
    Cj = nh[28] + nh[43] + nh[480] + nh[38] + nh[453], Lj = nh[22] + nh[90] + nh[1242], Rj = nh[22] + nh[71] + nh[1242],
    Dj = nh[22] + nh[90] + nh[1243], jj = nh[22] + nh[71] + nh[1243], Nj = nh[22] + nh[71] + nh[38] + nh[593],
    qj = nh[71] + nh[185] + nh[1048], Bj = nh[1244], $j = nh[1245] + nh[117] + nh[302],
    Fj = nh[22] + nh[90] + nh[38] + nh[593], Gj = nh[472] + nh[22] + nh[1246] + nh[22] + nh[170] + nh[22] + nh[1247],
    zj = nh[472] + nh[22] + nh[1128] + nh[22] + nh[1246] + nh[22] + nh[170] + nh[22] + nh[1248],
    Yj = nh[472] + nh[22] + nh[1128] + nh[22] + nh[1246] + nh[22] + nh[170] + nh[22] + nh[1247],
    Hj = nh[108] + nh[55] + nh[187] + nh[25] + nh[26] + nh[1] + nh[532] + nh[41] + nh[470],
    Uj = nh[203] + nh[25] + nh[26] + nh[1] + nh[532] + nh[55] + nh[533], Wj = nh[1063],
    Xj = nh[28] + nh[55] + nh[187] + nh[25] + nh[26] + nh[1] + nh[532],
    Vj = nh[47] + nh[55] + nh[187] + nh[25] + nh[26] + nh[1] + nh[532] + nh[41] + nh[470],
    Zj = nh[47] + nh[55] + nh[1249], Kj = nh[1237] + nh[41] + nh[42], Jj = nh[22] + nh[1250] + nh[185] + nh[164],
    Qj = nh[1107] + nh[55] + nh[1251], tN = nh[1252], iN = nh[55] + nh[1249] + nh[185] + nh[627], nN = nh[1253],
    eN = nh[129], sN = nh[229] + nh[25] + nh[152], rN = nh[99] + nh[55] + nh[1251],
    hN = nh[3] + nh[55] + nh[56] + nh[55] + nh[1251] + nh[38] + nh[1079], aN = nh[471] + nh[25] + nh[152],
    oN = nh[55] + nh[1251] + nh[25] + nh[204] + nh[185] + nh[627], fN = nh[22] + nh[81] + nh[1254],
    uN = nh[22] + nh[81] + nh[82] + nh[575] + nh[25] + nh[387], cN = nh[1255] + nh[25] + nh[152], _N = nh[630],
    dN = nh[71] + nh[41] + nh[1041] + nh[25] + nh[152], lN = nh[22] + nh[81] + nh[272] + nh[671],
    vN = nh[630] + nh[25] + nh[387], bN = nh[22] + nh[81] + nh[1256], yN = nh[1257], gN = nh[1258],
    xN = nh[362] + nh[22] + nh[183] + nh[22] + nh[1117], pN = nh[1] + nh[1259] + nh[29] + nh[326] + nh[185] + nh[627],
    EN = nh[69] + nh[211] + nh[55] + nh[1260], mN = nh[69] + nh[29] + nh[1261], wN = nh[229] + nh[104] + nh[114],
    TN = nh[1262], kN = nh[771] + nh[22] + nh[1263] + nh[22] + nh[391], ON = nh[1264],
    MN = nh[1] + nh[1259] + nh[38] + nh[280] + nh[185] + nh[627],
    IN = nh[1] + nh[1259] + nh[41] + nh[289] + nh[185] + nh[627], SN = nh[394] + nh[1265] + nh[1067],
    PN = nh[29] + nh[326] + nh[393], AN = nh[108] + nh[55] + nh[1249],
    CN = nh[23] + nh[29] + nh[326] + nh[61] + nh[88] + nh[185] + nh[627],
    LN = nh[1] + nh[1259] + nh[38] + nh[1266] + nh[29] + nh[326] + nh[185] + nh[627],
    RN = nh[1127] + nh[22] + nh[1267] + nh[22] + nh[1268] + nh[22] + nh[1269] + nh[22] + nh[1270] + nh[22] + nh[1271],
    DN = nh[1272], jN = nh[413] + nh[97] + nh[41] + nh[1152] + nh[29] + nh[1273],
    NN = nh[1274] + nh[1275] + nh[1276] + nh[29] + nh[46] + nh[211] + nh[153], qN = nh[352] + nh[153],
    BN = nh[1230] + nh[38] + nh[775], $N = nh[1277], FN = nh[28] + nh[33] + nh[34] + nh[1] + nh[532], GN = nh[1278],
    zN = nh[60] + nh[29] + nh[1209], YN = nh[1279], HN = nh[58] + nh[29] + nh[1209],
    UN = nh[28] + nh[38] + nh[167] + nh[1] + nh[532], WN = nh[23] + nh[1011],
    XN = nh[58] + nh[29] + nh[1209] + nh[110] + nh[1280] + nh[1] + nh[602] + nh[14] + nh[81] + nh[110] + nh[577],
    VN = nh[51] + nh[29] + nh[1281], ZN = nh[858] + nh[29] + nh[1273], KN = nh[1282], JN = nh[51] + nh[29] + nh[1189],
    QN = nh[630] + nh[41] + nh[1152] + nh[29] + nh[1209], tq = nh[362] + nh[22] + nh[408],
    iq = nh[1283] + nh[38] + nh[1069] + nh[320] + nh[1070], nq = nh[1284] + nh[38] + nh[593],
    eq = nh[47] + nh[38] + nh[700] + nh[61] + nh[88] + nh[185] + nh[627], sq = nh[463], rq = nh[1285],
    hq = nh[1286] + nh[46] + nh[238] + nh[239], aq = nh[46] + nh[87] + nh[46],
    oq = nh[471] + nh[55] + nh[1287] + nh[29] + nh[161], fq = nh[51] + nh[38] + nh[1288],
    uq = nh[579] + nh[29] + nh[1205], cq = nh[1206] + nh[22] + nh[772] + nh[22] + nh[1289],
    _q = nh[1206] + nh[22] + nh[1290], dq = nh[225] + nh[29] + nh[1205],
    lq = nh[298] + nh[29] + nh[299] + nh[104] + nh[1058] + nh[33] + nh[1219] + nh[393],
    vq = nh[324] + nh[110] + nh[1291], bq = nh[1206] + nh[22] + nh[772] + nh[22] + nh[1292], yq = nh[1293],
    gq = nh[58] + nh[43] + nh[480], xq = nh[1294] + nh[22] + nh[1289], pq = nh[1068] + nh[185] + nh[1295],
    Eq = nh[1296] + nh[104] + nh[1215], mq = nh[22] + nh[1297], wq = nh[22] + nh[1298] + nh[25] + nh[1299],
    Tq = nh[22] + nh[81] + nh[82] + nh[1211] + nh[29] + nh[1209],
    kq = nh[51] + nh[29] + nh[395] + nh[25] + nh[152] + nh[29] + nh[1189],
    Oq = nh[51] + nh[29] + nh[395] + nh[25] + nh[152], Mq = nh[51] + nh[72] + nh[1161], Iq = nh[229] + nh[41] + nh[289],
    Sq = nh[69] + nh[1300], Pq = nh[166] + nh[1] + nh[575] + nh[29] + nh[161], Aq = nh[51] + nh[38] + nh[1301],
    Cq = nh[25] + nh[204] + nh[38] + nh[1085], Lq = nh[51] + nh[1] + nh[1302] + nh[25] + nh[152],
    Rq = nh[51] + nh[25] + nh[152] + nh[104] + nh[1303],
    Dq = nh[47] + nh[25] + nh[204] + nh[38] + nh[1085] + nh[61] + nh[88] + nh[185] + nh[228], jq = nh[1141],
    Nq = nh[51] + nh[25] + nh[152] + nh[43] + nh[1304], qq = nh[384] + nh[22] + nh[522],
    Bq = nh[51] + nh[104] + nh[1305], $q = nh[513] + nh[25] + nh[128], Fq = nh[594] + nh[38] + nh[1085],
    Gq = nh[495] + nh[38] + nh[1085], zq = nh[384] + nh[22] + nh[772] + nh[22] + nh[1289], Yq = nh[1306], Hq = nh[1083],
    Uq = nh[384] + nh[22] + nh[1290], Wq = nh[513] + nh[320] + nh[181] + nh[25] + nh[128],
    Xq = nh[1141] + nh[185] + nh[228], Vq = nh[384] + nh[22] + nh[772] + nh[22] + nh[1292],
    Zq = nh[451] + nh[22] + nh[1307] + nh[22] + nh[1114],
    Kq = nh[451] + nh[22] + nh[1307] + nh[22] + nh[1114] + nh[22] + nh[249],
    Jq = nh[451] + nh[22] + nh[1307] + nh[22] + nh[1116] + nh[22] + nh[249], Qq = nh[1308],
    tB = nh[1307] + nh[22] + nh[451] + nh[22] + nh[246] + nh[22] + nh[1309], iB = nh[1310],
    nB = nh[1307] + nh[22] + nh[451] + nh[22] + nh[246],
    eB = nh[1307] + nh[22] + nh[451] + nh[22] + nh[246] + nh[22] + nh[1311], sB = nh[22] + nh[1312] + nh[185] + nh[164],
    rB = nh[1313] + nh[22] + nh[1289], hB = nh[22] + nh[407] + nh[731] + nh[117] + nh[467],
    aB = nh[1313] + nh[22] + nh[1292], oB = nh[22] + nh[998], fB = nh[1314] + nh[38] + nh[700] + nh[294] + nh[307],
    uB = nh[298] + nh[29] + nh[299] + nh[33] + nh[1219] + nh[393], cB = nh[624] + nh[104] + nh[1315],
    _B = nh[1313] + nh[22] + nh[1316],
    dB = nh[1068] + nh[104] + nh[1315] + nh[38] + nh[700] + nh[61] + nh[88] + nh[104] + nh[1317] + nh[61] + nh[416],
    lB = nh[1318], vB = nh[1319], bB = nh[22] + nh[1320], yB = nh[1321] + nh[97] + nh[462],
    gB = nh[1322] + nh[97] + nh[462], xB = nh[1323] + nh[97] + nh[462],
    pB = nh[65] + nh[66] + nh[224] + nh[426] + nh[1324] + nh[426] + nh[224] + nh[426] + nh[211] + nh[68],
    EB = nh[22] + nh[208] + nh[25] + nh[152], mB = nh[69] + nh[1325] + nh[224], wB = nh[51] + nh[104] + nh[1326],
    TB = nh[22] + nh[81] + nh[272] + nh[644], kB = nh[22] + nh[81] + nh[272] + nh[1010],
    OB = nh[1128] + nh[22] + nh[1289], MB = nh[1327] + nh[22] + nh[1289], IB = nh[166] + nh[41] + nh[240],
    SB = nh[781] + nh[61] + nh[195], PB = nh[1327] + nh[22] + nh[1292], AB = nh[104] + nh[1328] + nh[185] + nh[627],
    CB = nh[1313], LB = nh[166] + nh[38] + nh[700], RB = nh[150] + nh[117] + nh[159] + nh[117] + nh[1147],
    DB = nh[457] + nh[43] + nh[1199], jB = nh[413] + nh[97] + nh[117] + nh[1329],
    NB = nh[1330] + nh[22] + nh[390] + nh[22] + nh[119], qB = nh[1330] + nh[22] + nh[390] + nh[22] + nh[120],
    BB = nh[1331] + nh[22] + nh[1332], $B = nh[69] + nh[1333],
    FB = nh[211] + nh[153] + nh[46] + nh[1274] + nh[1275] + nh[55] + nh[272] + nh[55] + nh[272] + nh[55] + nh[272],
    GB = nh[80] + nh[153] + nh[46] + nh[192] + nh[153], zB = nh[3] + nh[185] + nh[1334], YB = nh[1335], HB = nh[1105],
    UB = nh[1336] + nh[1337] + nh[1338], WB = nh[3] + nh[117] + nh[1329] + nh[29] + nh[161], XB = nh[22] + nh[1339],
    VB = nh[1015], ZB = nh[1340] + nh[22] + nh[1341], KB = nh[630] + nh[117] + nh[467],
    JB = nh[166] + nh[117] + nh[1329], QB = nh[1340] + nh[22] + nh[554], t$ = nh[58] + nh[117] + nh[467],
    i$ = nh[3] + nh[117] + nh[1329], n$ = nh[121] + nh[119], e$ = nh[1078] + nh[55] + nh[603],
    s$ = nh[850] + nh[43] + nh[464], r$ = nh[1068] + nh[110] + nh[1342] + nh[651] + nh[1343],
    h$ = nh[633] + nh[61] + nh[88] + nh[294] + nh[561] + nh[29] + nh[30],
    a$ = nh[1063] + nh[76] + nh[225] + nh[76] + nh[630], o$ = nh[1063] + nh[76] + nh[1344],
    f$ = nh[1063] + nh[76] + nh[225] + nh[76] + nh[998], u$ = nh[1063] + nh[76] + nh[1345],
    c$ = nh[1063] + nh[76] + nh[1346], _$ = nh[1141] + nh[76] + nh[225] + nh[76] + nh[630],
    d$ = nh[1141] + nh[76] + nh[1344], l$ = nh[1141] + nh[76] + nh[225] + nh[76] + nh[998],
    v$ = nh[1141] + nh[76] + nh[108], b$ = nh[384] + nh[22] + nh[529], y$ = nh[1141] + nh[76] + nh[47],
    g$ = nh[462] + nh[76] + nh[630], x$ = nh[1347], p$ = nh[462] + nh[76] + nh[998], E$ = nh[208] + nh[76] + nh[630],
    m$ = nh[1348], w$ = nh[1128] + nh[22] + nh[1292], T$ = nh[208] + nh[76] + nh[998], k$ = nh[1195] + nh[76] + nh[630],
    O$ = nh[1195] + nh[76] + nh[998], M$ = nh[1098] + nh[76] + nh[1071], I$ = nh[394] + nh[76] + nh[1087],
    S$ = nh[457] + nh[76] + nh[630], P$ = nh[457] + nh[76] + nh[1349], A$ = nh[457] + nh[76] + nh[998],
    C$ = nh[581] + nh[76] + nh[566], L$ = nh[22] + nh[468] + nh[38] + nh[696],
    R$ = nh[22] + nh[28] + nh[29] + nh[161] + nh[1] + nh[623], D$ = nh[22] + nh[1350] + nh[185] + nh[627],
    j$ = nh[22] + nh[1351] + nh[1] + nh[626] + nh[185] + nh[627] + nh[41] + nh[470],
    N$ = nh[22] + nh[665] + nh[731] + nh[1] + nh[626] + nh[185] + nh[627] + nh[41] + nh[470],
    q$ = nh[471] + nh[185] + nh[627] + nh[294] + nh[307], B$ = nh[22] + nh[81] + nh[82] + nh[575] + nh[294] + nh[307],
    $$ = nh[472] + nh[22] + nh[246] + nh[22] + nh[1352], F$ = nh[1353],
    G$ = nh[472] + nh[22] + nh[246] + nh[22] + nh[451], z$ = nh[472] + nh[22] + nh[246] + nh[22] + nh[1354],
    Y$ = nh[1355], H$ = nh[1356], U$ = nh[23] + nh[76] + nh[1357] + nh[76] + nh[394],
    W$ = nh[472] + nh[22] + nh[246] + nh[22] + nh[1358] + nh[22] + nh[362], X$ = nh[23] + nh[76] + nh[394],
    V$ = nh[472] + nh[22] + nh[246] + nh[22] + nh[1358] + nh[22] + nh[339], Z$ = nh[23] + nh[76] + nh[1115],
    K$ = nh[472] + nh[22] + nh[246] + nh[22] + nh[1358] + nh[22] + nh[183], J$ = nh[23] + nh[76] + nh[216],
    Q$ = nh[342] + nh[185] + nh[625],
    tF = nh[472] + nh[22] + nh[246] + nh[22] + nh[1358] + nh[22] + nh[1359] + nh[22] + nh[362],
    iF = nh[472] + nh[22] + nh[246] + nh[22] + nh[1360], nF = nh[25] + nh[1211] + nh[185] + nh[627],
    eF = nh[294] + nh[578] + nh[185] + nh[627], sF = nh[110] + nh[1342] + nh[651] + nh[1343] + nh[185] + nh[627],
    rF = nh[117] + nh[1329] + nh[185] + nh[627], hF = nh[104] + nh[1315] + nh[38] + nh[700] + nh[185] + nh[627],
    aF = nh[3] + nh[619] + nh[195], oF = nh[1361], fF = nh[1362], uF = nh[1363], cF = nh[492],
    _F = nh[3] + nh[41] + nh[399] + nh[104] + nh[1364], dF = nh[1178] + nh[41] + nh[1365],
    lF = nh[1366] + nh[22] + nh[368], vF = nh[1366] + nh[22] + nh[509], bF = nh[1366] + nh[22] + nh[374],
    yF = nh[1366] + nh[22] + nh[508], gF = nh[1366] + nh[22] + nh[368] + nh[22] + nh[369],
    xF = nh[1366] + nh[22] + nh[368] + nh[22] + nh[374], pF = nh[1366] + nh[22] + nh[373] + nh[22] + nh[369],
    EF = nh[1366] + nh[22] + nh[373] + nh[22] + nh[374], mF = nh[1366] + nh[22] + nh[374] + nh[22] + nh[368],
    wF = nh[1366] + nh[22] + nh[369] + nh[22] + nh[373], TF = nh[1366] + nh[22] + nh[369] + nh[22] + nh[368],
    kF = nh[1367], OF = nh[1368] + nh[76] + nh[1369], MF = nh[1367] + nh[76] + nh[537],
    IF = nh[1367] + nh[76] + nh[1057], SF = nh[1121] + nh[22] + nh[360] + nh[22] + nh[1370],
    PF = nh[1121] + nh[22] + nh[360] + nh[22] + nh[1370] + nh[22] + nh[364],
    AF = nh[1121] + nh[22] + nh[360] + nh[22] + nh[1370] + nh[22] + nh[366],
    CF = nh[1121] + nh[22] + nh[360] + nh[22] + nh[1371] + nh[22] + nh[1372],
    LF = nh[51] + nh[442] + nh[1373] + nh[55] + nh[1374], RF = nh[3] + nh[320] + nh[307] + nh[38] + nh[167],
    DF = nh[322] + nh[1] + nh[2] + nh[55] + nh[1374], jF = nh[22] + nh[81] + nh[272] + nh[770],
    NF = nh[3] + nh[1375] + nh[434], qF = nh[3] + nh[1376] + nh[434], BF = nh[3] + nh[41] + nh[399] + nh[117] + nh[302],
    $F = nh[537] + nh[274] + nh[434], FF = nh[1057] + nh[274] + nh[434], GF = nh[260] + nh[117] + nh[302],
    zF = nh[1107] + nh[41] + nh[399], YF = nh[322] + nh[61] + nh[195],
    HF = nh[22] + nh[81] + nh[262] + nh[261] + nh[41] + nh[240], UF = nh[22] + nh[164] + nh[352],
    WF = nh[22] + nh[1377], XF = nh[265] + nh[1378], VF = nh[265] + nh[1379],
    ZF = nh[22] + nh[1380] + nh[25] + nh[525] + nh[1] + nh[2] + nh[55] + nh[1374], KF = nh[492] + nh[119],
    JF = nh[492] + nh[120], QF = nh[22] + nh[81] + nh[272] + nh[407], tG = nh[22] + nh[81] + nh[272] + nh[15],
    iG = nh[22] + nh[81] + nh[82] + nh[88], nG = nh[471] + nh[294] + nh[1381] + nh[320] + nh[325],
    eG = nh[22] + nh[81] + nh[1382], sG = nh[260] + nh[55] + nh[491],
    rG = nh[268] + nh[41] + nh[399] + nh[55] + nh[491], hG = nh[1383],
    aG = nh[1284] + nh[41] + nh[399] + nh[55] + nh[491], oG = nh[3] + nh[294] + nh[1384] + nh[185] + nh[1385],
    fG = nh[1386], uG = nh[142] + nh[38] + nh[694], cG = nh[51] + nh[104] + nh[1387], _G = nh[22] + nh[1388],
    dG = nh[61] + nh[1389] + nh[41] + nh[1390], lG = nh[1391], vG = nh[1392], bG = nh[234], yG = nh[1393],
    gG = nh[1394] + nh[22] + nh[1395] + nh[22] + nh[1396], xG = nh[380] + nh[22] + nh[246] + nh[22] + nh[1397],
    pG = nh[1398], EG = nh[22] + nh[81] + nh[944], mG = nh[32] + nh[38] + nh[167], wG = nh[3] + nh[274] + nh[434],
    TG = nh[1399], kG = nh[400] + nh[38] + nh[1400], OG = nh[3] + nh[104] + nh[282], MG = nh[510] + nh[294] + nh[307],
    IG = nh[492] + nh[211], SG = nh[362] + nh[22] + nh[408] + nh[22] + nh[1100],
    PG = nh[22] + nh[81] + nh[534] + nh[61] + nh[1401] + nh[72] + nh[277], AG = nh[1402] + nh[29] + nh[326],
    CG = nh[502] + nh[61] + nh[1153] + nh[29] + nh[536], LG = nh[22] + nh[1037] + nh[185] + nh[81] + nh[61] + nh[327],
    RG = nh[1403], DG = nh[1404] + nh[185] + nh[1405], jG = nh[1406], NG = nh[1407], qG = nh[1407] + nh[119],
    BG = nh[1407] + nh[120], $G = nh[51] + nh[185] + nh[1408], FG = nh[1284], GG = nh[1097] + nh[22] + nh[375],
    zG = nh[1409], YG = nh[260] + nh[294] + nh[1410], HG = nh[260] + nh[29] + nh[1411], UG = nh[1412],
    WG = nh[22] + nh[1413] + nh[72] + nh[1414], XG = nh[1154], VG = nh[1412] + nh[43] + nh[52], ZG = nh[1415],
    KG = nh[1178], JG = nh[1416], QG = nh[471] + nh[29] + nh[1417], tz = nh[38] + nh[1418] + nh[41] + nh[1390],
    iz = nh[1223] + nh[14] + nh[475] + nh[38] + nh[1419], nz = nh[513] + nh[41] + nh[1365],
    ez = nh[22] + nh[81] + nh[262] + nh[1420], sz = nh[22] + nh[1421], rz = nh[335] + nh[46] + nh[78],
    hz = nh[298] + nh[29] + nh[299] + nh[61] + nh[88] + nh[117] + nh[1422] + nh[55] + nh[1072] + nh[72] + nh[1073] + nh[38] + nh[1423],
    az = nh[298] + nh[29] + nh[299] + nh[61] + nh[88] + nh[117] + nh[1422] + nh[61] + nh[1424] + nh[72] + nh[1073] + nh[38] + nh[1423],
    oz = nh[22] + nh[90], fz = nh[71] + nh[1] + nh[436], uz = nh[1425], cz = nh[51] + nh[1426],
    _z = nh[51] + nh[14] + nh[1427], dz = nh[51] + nh[110] + nh[1428], lz = nh[51] + nh[274] + nh[1429],
    vz = nh[51] + nh[1] + nh[1430], bz = nh[55] + nh[1431], yz = nh[274] + nh[1432], gz = nh[274] + nh[414],
    xz = nh[61] + nh[316] + nh[393], pz = nh[320] + nh[307] + nh[393], Ez = nh[41] + nh[1152] + nh[393],
    mz = nh[38] + nh[1433], wz = nh[25] + nh[204], Tz = nh[185] + nh[627] + nh[29] + nh[30],
    kz = nh[274] + nh[414] + nh[294] + nh[445], Oz = nh[29] + nh[326] + nh[61] + nh[327],
    Mz = nh[117] + nh[1434] + nh[41] + nh[1390],
    Iz = nh[413] + nh[1435] + nh[46] + nh[298] + nh[46] + nh[1011] + nh[352], Sz = nh[80] + nh[76] + nh[224],
    Pz = nh[1436], Az = nh[80] + nh[76] + nh[262] + nh[76] + nh[262] + nh[76] + nh[192],
    Cz = nh[413] + nh[1435] + nh[239] + nh[55] + nh[1437] + nh[46] + nh[1] + nh[1438] + nh[46] + nh[298] + nh[46] + nh[1011] + nh[352] + nh[447] + nh[1] + nh[317],
    Lz = nh[693] + nh[1249], Rz = nh[957] + nh[447] + nh[1312] + nh[447] + nh[1439], Dz = 0;
  if (t[cl]) {
    var jz = navigator[_l], Nz = /opera/i[rf](jz), qz = !Nz && /msie/i[rf](jz), Bz = /rv:11.0/i.test(jz),
      $z = /MSIE 10./i[rf](jz);
    if (/Edge/i[rf](jz), Bz && (qz = !0), /msie\s[6,7,8]/i.test(jz)) throw new Error("your browser is not supported");
    var Fz = /webkit|khtml/i[rf](jz), Gz = !Fz && /gecko/i[rf](jz), zz = /firefox\//i.test(jz),
      Yz = /Chrome\//i[rf](jz), Hz = !Yz && /Safari\//i[rf](jz), Uz = /Macintosh;/i[rf](jz),
      Wz = /(iPad|iPhone|iPod)/g.test(jz), Xz = /Android/g.test(jz), Vz = /Windows Phone/g.test(jz),
      Zz = (Wz || Xz || Vz) && X_ in t, Kz = jz[dl](/AppleWebKit\/([0-9\.]*)/);
    if (Kz && Kz[rh] > 1) {
      parseFloat(Kz[1])
    }
    Xz && parseFloat(jz[dl](/Android\s([0-9\.]*)/)[1])
  }
  t[ll] || (t.requestAnimationFrame = t[vl] || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function (i) {
    return t[bl](function () {
      i()
    }, 1e3 / 60)
  }), t[yl] || (t.cancelAnimationFrame = t[gl] || t[xl] || t[pl] || t[El] || function (i) {
    return t.clearTimeout(i)
  });
  var Jz = {SELECTION_TOLERANCE: Zz ? 7 : 4, LABEL_COLOR: ml};
  K(Jz, {
    FONT_STYLE: {
      get: function () {
        return this[wl] || (this[wl] = Tl)
      }, set: function (t) {
        this._fontStyle != t && (this._fontStyle = t, this._fontChanged = !0)
      }
    }, FONT_SIZE: {
      get: function () {
        return this._fontSize || (this[kl] = 12)
      }, set: function (t) {
        this[kl] != t && (this._fontSize = t, this[Ol] = !0)
      }
    }, FONT_FAMILY: {
      get: function () {
        return this._fontFamily || (this[Ml] = "Verdana,helvetica,arial,sans-serif")
      }, set: function (t) {
        this[Ml] != t && (this._fontFamily = t, this[Ol] = !0)
      }
    }, FONT: {
      get: function () {
        return (this._fontChanged || this._fontChanged === n) && (this[Ol] = !1, this[Il] = this[bo] + Dh + this[yo] + go + this[xo]), this[Il]
      }
    }
  });
  var Qz = function (t) {
    this._jz = [], this._lq = {}, t && this.add(t)
  };
  Qz[bh] = {
    _jz: null, _lq: null, get: function (t) {
      return this[Sl](t)
    }, getById: function (t) {
      return this._lq[t]
    }, getByIndex: function (t) {
      return this._jz[t]
    }, forEach: function (t, i, n) {
      return l(this._jz, t, i, n)
    }, forEachReverse: function (t, i, n) {
      return b(this._jz, t, i, n)
    }, size: function () {
      return this._jz[rh]
    }, contains: function (t) {
      return this.containsById(t.id)
    }, containsById: function (t) {
      return this._lq.hasOwnProperty(t)
    }, setIndex: function (t, i) {
      var n = this._jz[lh](t);
      if (0 > n) throw new Error(Ya + t.id + Pl);
      return n == i ? !1 : (this._jz.splice(n, 1), this._jz[fh](i, 0, t), !0)
    }, setIndexAfter: function (t, i) {
      var n = this._jz[lh](t);
      if (0 > n) throw new Error(Ya + t.id + Pl);
      return n == i ? i : n == i + 1 ? i + 1 : (n > i && (i += 1), this._jz[fh](n, 1), this._jz.splice(i, 0, t), i)
    }, setIndexBefore: function (t, i) {
      var n = this._jz.indexOf(t);
      if (0 > n) throw new Error(Ya + t.id + Pl);
      return n == i ? i : n == i - 1 ? i - 1 : (i > n && (i -= 1), this._jz[fh](n, 1), this._jz.splice(i, 0, t), i)
    }, indexOf: function (t) {
      return this._jz[lh](t)
    }, getIndexById: function (t) {
      var i = this[Al](t);
      return i ? this._jz[lh](i) : -1
    }, add: function (t, i) {
      return B(t) ? this._fe(t, i) : this._km(t, i)
    }, addFirst: function (t) {
      return this.add(t, 0)
    }, _fe: function (t, i) {
      if (0 == t[rh]) return !1;
      var e = !1, s = i >= 0;
      t = t._jz || t;
      for (var r = 0, h = t[rh]; h > r; r++) {
        var a = t[r];
        null !== a && a !== n && this._km(a, i, !0) && (e = !0, s && i++)
      }
      return e
    }, _km: function (t, i) {
      var e = t.id;
      return e === n || this.containsById(e) ? !1 : (g(this._jz, t, i), this._lq[e] = t, t)
    }, remove: function (t) {
      return B(t) ? this[Cl](t) : t.id ? this._fo(t.id, t) : this[Ll](t)
    }, _n9e: function (t) {
      if (0 == t[rh]) return !1;
      var i = !1;
      t = t._jz || t;
      for (var e = 0, s = t[rh]; s > e; e++) {
        var r = t[e];
        if (null !== r && r !== n) {
          r.id === n && (r = this._lq[r]);
          var h = r.id;
          this._fo(h, r, !0) && (i = !0)
        }
      }
      return i
    }, _fo: function (t, i) {
      return t !== n && this[Rl](t) ? ((null === i || i === n) && (i = this[Al](t)), delete this._lq[t], x(this._jz, i), !0) : !1
    }, removeById: function (t) {
      var i = this._lq[t];
      return i ? this._fo(t, i) : !1
    }, set: function (t) {
      if (!t || 0 == t) return this[yu]();
      if (this[Dl]() || !B(t)) return this[yu](), this.add(t);
      var i = [], n = {}, e = 0;
      if (l(t, function (t) {
        this._lq[t.id] ? (n[t.id] = t, e++) : i[dh](t)
      }, this), e != this[rh]) {
        var s = [];
        this[Nu](function (t) {
          n[t.id] || s[dh](t)
        }, this), s[rh] && this[Cl](s)
      }
      return i.length && this._fe(i), !0
    }, clear: function () {
      return this[Dl]() ? !1 : (this._jz[rh] = 0, this._lq = {}, !0)
    }, toDatas: function () {
      return this._jz[oh](0)
    }, isEmpty: function () {
      return 0 == this._jz[rh]
    }, valueOf: function () {
      return this._jz[rh]
    }, clone: function (t) {
      var i = new Qz;
      return i.add(t ? y(this._jz) : this[jl]()), i
    }
  }, K(Qz.prototype, {
    datas: {
      get: function () {
        return this._jz
      }
    }, random: {
      get: function () {
        return this._jz && this._jz[rh] ? this._jz[z(this._jz[rh])] : null
      }
    }, length: {
      get: function () {
        return this._jz ? this._jz[rh] : 0
      }
    }
  });
  var tY = (2 * Math.PI, .5 * Math.PI), iY = function (t, i) {
    i = i.toUpperCase();
    for (var n = qz ? t.firstChild : t[Nl]; n && (1 != n[ql] || n[Bl] && n[Bl][$l]() != i);) n = qz ? n[Fl] : n[Gl];
    return n && 1 == n.nodeType && n[Bl] && n.tagName.toUpperCase() == i ? n : null
  }, nY = function (t, i, n) {
    t instanceof nY && (i = t.y, t = t.x, n = t[Vo]), this.set(t, i, n)
  }, eY = function (t, i, n, e) {
    var s = t - n, r = i - e;
    return Math[Ao](s * s + r * r)
  };
  nY[bh] = {
    x: 0, y: 0, rotate: n, set: function (t, i, n) {
      this.x = t || 0, this.y = i || 0, this[Vo] = n || 0
    }, negate: function () {
      this.x = -this.x, this.y = -this.y
    }, offset: function (t, i) {
      this.x += t, this.y += i
    }, equals: function (t) {
      return this.x == t.x && this.y == t.y
    }, distanceTo: function (t) {
      return eY(this.x, this.y, t.x, t.y)
    }, toString: function () {
      return zl + this.x + Yl + this.y + Zh
    }, clone: function () {
      return new nY(this.x, this.y)
    }
  }, Object[wh](nY[bh], Hl, {
    get: function () {
      return Math[Ao](this.x * this.x + this.y * this.y)
    }
  });
  var sY = function (t, i, e, s) {
    t !== n && this._mw(t, i, e, s)
  };
  sY.prototype = {
    _n6: null, _n4: null, _n2: null, _n1: null, _n7: null, _n9: null, _n8: 1, _mw: function (t, i, n, e) {
      this._n6 = t, this._n4 = i, this._n2 = n, this._n1 = e, t == n ? (this._n7 = -1, this._n8 = 0, this._n9 = t) : (this._n7 = (i - e) / (t - n), this._n9 = i - this._n7 * t, this._n8 = 1), this._ll = Math[ha](this._n1 - this._n4, this._n2 - this._n6), this[aa] = Math.cos(this._ll), this[oa] = Math.sin(this._ll)
    }, _n8q: function (t) {
      return 0 == this._n8 ? Number.NaN : this._n7 * t + this._n9
    }, _n8p: function (t) {
      return 0 == this._n7 ? Number.NaN : (t - this._n9) / this._n7
    }, _$e: function (t) {
      var i, n, e, s, r, h = t[0], a = t[2], o = t[4], f = t[1], u = t[3], c = t[5], _ = this._n7, d = this._n9,
        l = this._n8;
      if (0 == l ? (e = Math[Ao]((-_ * _ * h - _ * d) * o + _ * _ * a * a + 2 * _ * d * a - _ * d * h), s = -_ * a + _ * h, r = _ * o - 2 * _ * a + _ * h) : (e = Math[Ao]((-f + _ * h + d) * c + u * u + (-2 * _ * a - 2 * d) * u + (_ * o + d) * f + (-_ * _ * h - _ * d) * o + _ * _ * a * a + 2 * _ * d * a - _ * d * h), s = -u + f + _ * a - _ * h, r = c - 2 * u + f - _ * o + 2 * _ * a - _ * h), 0 != r) {
        i = (e + s) / r, n = (-e + s) / r;
        var v, b;
        return i >= 0 && 1 >= i && (v = Yi(i, t)), n >= 0 && 1 >= n && (b = Yi(n, t)), v && b ? [v, b] : v ? v : b ? b : void 0
      }
    }, _46: function (t, i, n) {
      if (this._n7 == t._n7 || 0 == this._n8 && 0 == t._n8) return null;
      var e, s;
      if (e = 0 == this._n8 ? this._n9 : 0 == t._n8 ? t._n9 : (t._n9 - this._n9) / (this._n7 - t._n7), s = 0 == this._n7 ? this._n9 : 0 == t._n7 ? t._n9 : this._n8 ? this._n7 * e + this._n9 : t._n7 * e + t._n9, !i) return {
        x: e,
        y: s
      };
      var r, h, a;
      if (n) r = -i / 2, h = -r; else {
        r = -eY(this._n6, this._n4, e, s), h = eY(this._n2, this._n1, e, s);
        var o = -r + h;
        if (o > i) {
          var f = i / o;
          r *= f, h *= f
        } else a = (i - o) / 2
      }
      var u = this._6u(e, s, r), c = this._6u(e, s, h);
      return a && (u._rest = a, c._rest = a), [u, c]
    }, _6u: function (t, i, n) {
      return 0 == this._n8 ? {x: t, y: i + n} : {x: t + n * this._n8os, y: i + n * this[oa]}
    }
  };
  var rY = function (t, i) {
    this[da] = t, this.height = i
  };
  rY.prototype = {
    width: 0, height: 0, isEmpty: function () {
      return this[da] <= 0 || this[no] <= 0
    }, clone: function () {
      return new rY(this.width, this[no])
    }, toString: function () {
      return Ul + this.width + Yl + this[no] + Zh
    }
  };
  var hY = function (t, i, e, s) {
    t instanceof Object && !j(t) && (i = t.y, e = t[da], s = t[no], t = t.x), e === n && (e = -1), s === n && (s = -1), this.x = t || 0, this.y = i || 0, this[da] = e, this[no] = s
  };
  hY[bh] = {
    x: 0, y: 0, width: -1, height: -1, setByRect: function (t) {
      this.x = t.x || 0, this.y = t.y || 0, this[da] = t[da] || 0, this[no] = t[no] || 0
    }, set: function (t, i, n, e) {
      this.x = t || 0, this.y = i || 0, this[da] = n || 0, this[no] = e || 0
    }, offset: function (t, i) {
      return this.x += t, this.y += i, this
    }, contains: function (t, i, n, e) {
      if (1 == arguments[rh]) {
        if (vh == typeof t && fi(t)) return this.contains(t.x, t.y, t[da], t.height);
        throw{message: Wl}
      }
      return 2 == arguments[rh] ? t >= this.x && t <= this.x + this[da] && i >= this.y && i <= this.y + this[no] : ai(this.x, this.y, this[da], this.height, t, i, n || 0, e || 0)
    }, intersectsPoint: function (t, i, n) {
      return this.width <= 0 && this[no] <= 0 ? !1 : n ? this.intersectsRect(t - n, i - n, 2 * n, 2 * n) : t >= this.x && t <= this.x + this.width && i >= this.y && i <= this.y + this[no]
    }, intersectsRect: function (t, i, n, e) {
      return ri(this.x, this.y, this[da], this[no], t, i, n, e)
    }, intersects: function (t, i) {
      return j(t[da]) ? this[Xl](t.x, t.y, t.width, t[no]) : this.intersectsPoint(t, i)
    }, intersection: function (t, i, n, e) {
      var s = this.x, r = this.y, h = s;
      h += this[da];
      var a = r;
      a += this.height;
      var o = t;
      o += n;
      var f = i;
      return f += e, t > s && (s = t), i > r && (r = i), h > o && (h = o), a > f && (a = f), h -= s, a -= r, 0 > h || 0 > a ? null : new hY(s, r, h, a)
    }, addPoint: function (t) {
      this.add(t.x, t.y)
    }, add: function (t, i) {
      if (j(t[da])) return this[Vl](t.x, t.y, t.width, t[no]);
      if (j(t.x) && (i = t.y, t = t.x), this[da] < 0 || this[no] < 0) return this.x = t, this.y = i, void (this[da] = this[no] = 0);
      var n = this.x, e = this.y, s = this[da], r = this[no];
      s += n, r += e, n > t && (n = t), e > i && (e = i), t > s && (s = t), i > r && (r = i), s -= n, r -= e, s > Number.MAX_VALUE && (s = Number.MAX_VALUE), r > Number.MAX_VALUE && (r = Number[Zl]), this.set(n, e, s, r)
    }, addRect: function (t, i, n, e) {
      var s = this[da], r = this[no];
      (0 > s || 0 > r) && this.set(t, i, n, e);
      var h = n, a = e;
      if (!(0 > h || 0 > a)) {
        var o = this.x, f = this.y;
        s += o, r += f;
        var u = t, c = i;
        h += u, a += c, o > u && (o = u), f > c && (f = c), h > s && (s = h), a > r && (r = a), s -= o, r -= f, s > Number[Zl] && (s = Number[Zl]), r > Number[Zl] && (r = Number[Zl]), this.set(o, f, s, r)
      }
    }, shrink: function (t, i, n, e) {
      return j(t) ? 1 == arguments[rh] ? e = i = n = t || 0 : 2 == arguments[rh] ? (n = t || 0, e = i || 0) : (t = t || 0, i = i || 0, n = n || 0, e = e || 0) : (i = t.left || 0, n = t[fa] || 0, e = t.right || 0, t = t.top || 0), this.x += i, this.y += t, this[da] -= i + e, this[no] -= t + n, this
    }, grow: function (t, i, n, e) {
      return j(t) ? 1 == arguments.length ? e = i = n = t || 0 : 2 == arguments[rh] ? (n = t || 0, e = i || 0) : (t = t || 0, i = i || 0, n = n || 0, e = e || 0) : (i = t[Mf] || 0, n = t[fa] || 0, e = t[ua] || 0, t = t.top || 0), this.x -= i, this.y -= t, this[da] += i + e, this[no] += t + n, this
    }, scale: function (t) {
      return this.x *= t, this.y *= t, this.width *= t, this[no] *= t, this
    }, isEmpty: function () {
      return this[da] <= 0 && this[no] <= 0
    }, toString: function () {
      return this.x + Kl + this.y + Kl + this[da] + Kl + this[no]
    }, union: function (t) {
      var i = this[da], n = this.height;
      if (0 > i || 0 > n) return new hY(t.x, t.y, t[da], t.height);
      var e = t[da], s = t[no];
      if (0 > e || 0 > s) return new hY(this.x, this.y, this[da], this[no]);
      var r = this.x, h = this.y;
      i += r, n += h;
      var a = t.x, o = t.y;
      return e += a, s += o, r > a && (r = a), h > o && (h = o), e > i && (i = e), s > n && (n = s), i -= r, n -= h, i > Number[Zl] && (i = Number[Zl]), n > Number[Zl] && (n = Number.MAX_VALUE), new hY(r, h, i, n)
    }, clear: function () {
      this.set(0, 0, -1, -1)
    }, equals: function (t) {
      return t && this.x == t.x && this.y == t.y && this[da] == t[da] && this[no] == t[no]
    }, clone: function (t, i) {
      return new hY(this.x + (t || 0), this.y + (i || 0), this[da], this[no])
    }, toArray: function () {
      return [this.x, this.y, this[da], this.height]
    }, getIntersectionPoint: function (t, i, n, e) {
      return si(this, t, i, n, e)
    }
  }, m(hY, rY), hY[ic] = function (t, i) {
    return t == i || t && i && t.x == i.x && t.y == i.y && t[da] == i[da] && t[no] == i[no]
  }, K(hY.prototype, {
    left: {
      get: function () {
        return this.x
      }
    }, top: {
      get: function () {
        return this.y
      }
    }, bottom: {
      get: function () {
        return this.y + this[no]
      }
    }, right: {
      get: function () {
        return this.x + this[da]
      }
    }, cx: {
      get: function () {
        return this.x + this.width / 2
      }
    }, cy: {
      get: function () {
        return this.y + this[no] / 2
      }
    }, center: {
      get: function () {
        return new nY(this.cx, this.cy)
      }
    }
  }), hY.intersects = ri, hY[zf] = oi, hY[Bo] = hi;
  var aY = function (t, i, n, e) {
    1 == arguments[rh] ? i = n = e = t : 2 == arguments[rh] && (n = t, e = i), this.set(t, i, n, e)
  };
  aY[bh] = {
    top: 0, bottom: 0, left: 0, right: 0, set: function (t, i, n, e) {
      this.top = t || 0, this[Mf] = i || 0, this[fa] = n || 0, this[ua] = e || 0
    }, clone: function () {
      return new aY(this.top, this[Mf], this[fa], this.right)
    }, equals: function (t) {
      return t && this.top == t.top && this[fa] == t.bottom && this[Mf] == t[Mf] && this[ua] == t.right
    }
  };
  var oY = function (t, i) {
    this[Jl] = t, this[va] = i
  };
  oY[bh] = {
    verticalPosition: !1, horizontalPosition: !1, toString: function () {
      return (this.horizontalPosition || "") + (this.verticalPosition || "")
    }
  }, Z(oY.prototype, Ql, {
    get: function () {
      return (this[Jl] || "") + (this.verticalPosition || "")
    }
  });
  var fY = tv, uY = iv, cY = nv, _Y = Rf, dY = ev, lY = sv;
  oY.LEFT_TOP = new oY(fY, _Y), oY[rv] = new oY(fY, dY), oY[hv] = new oY(fY, lY), oY[av] = new oY(uY, _Y), oY[ov] = new oY(uY, dY), oY[fv] = new oY(uY, lY), oY[uv] = new oY(cY, _Y), oY[cv] = new oY(cY, dY), oY[_v] = new oY(cY, lY);
  var vY = [oY[dv], oY.LEFT_MIDDLE, oY[hv], oY[av], oY[ov], oY.CENTER_BOTTOM, oY[uv], oY[cv], oY[_v]];
  Z(oY, Wh, {
    get: function () {
      return vY[z(vY[rh])]
    }
  }), oY[la] = function (t) {
    for (var i in oY) {
      var n = oY[i];
      if (n && Wh != i && n instanceof oY && n.toString() == t) return n
    }
    throw new Error("Position not be supported - " + t)
  };
  var bY = function (t, i, n, e, s) {
    this.set(t, i, n, e), this[lv] = s
  };
  bY.prototype = {
    radius: 0, classify: function (t, i, n, e) {
      return i > t ? 0 : i + e > t ? 1 : n - e > t ? 2 : n > t ? 3 : 4
    }, intersectsRect: function (t, i, n, e) {
      if (T(this, bY, Xl, arguments) === !1) return !1;
      var s = this.x, r = this.y, h = s + this.width, a = r + this[no], o = 2 * radius, f = 2 * radius,
        u = Math.min(this.width, Math.abs(o)) / 2, c = Math.min(this[no], Math.abs(f)) / 2, _ = this[vv](t, s, h, u),
        d = this.classify(t + n, s, h, u), l = this[vv](i, r, a, c), v = this[vv](i + e, r, a, c);
      return 2 == _ || 2 == d || 2 == l || 2 == v ? !0 : 2 > _ && d > 2 || 2 > l && v > 2 ? !0 : (t = 1 == d ? t = t + n - (s + u) : t -= h - u, i = 1 == v ? i = i + e - (r + c) : i -= a - c, t /= u, i /= c, 1 >= t * t + i * i)
    }, intersectsPoint: function (t, i) {
      if (T(this, bY, Bo, arguments) === !1) return !1;
      var n = this.x, e = this.y, s = n + this.width, r = e + this[no];
      if (n > t || e > i || t >= s || i >= r) return !1;
      var h = 2 * radius, a = 2 * radius, o = Math.min(this[da], Math.abs(h)) / 2,
        f = Math.min(this[no], Math.abs(a)) / 2;
      return t >= (n += o) && t < (n = s - o) ? !0 : i >= (e += f) && i < (e = r - f) ? !0 : (t = (t - n) / o, i = (i - e) / f, 1 >= t * t + i * i)
    }, clone: function () {
      return new bY(this.x, this.y, this[da], this[no], this.radius)
    }
  }, m(bY, hY);
  var yY = function (t, i, n, e) {
    this.source = t, this.type = i, this[el] = n, this.value = e
  };
  yY[bh] = {
    source: null, type: null, kind: null, value: null, toString: function () {
      return bv + this[If] + yv + this[Xo] + gv + this.kind
    }
  };
  var gY = function (t, i, n, e, s) {
    this.source = t, this[el] = i, this[xv] = e, this[Ih] = n, this[pv] = s
  };
  gY[bh] = {
    type: Ev, propertyType: null, toString: function () {
      return bv + this.source + yv + this[Xo] + mv + this.kind + wv + this[xv] + Tv + this.value
    }
  }, m(gY, yY), Z(gY.prototype, kv, {
    get: function () {
      return this[el]
    }, set: function (t) {
      this[el] = t
    }
  });
  var xY = function (t, i, n) {
    this[If] = t, this.oldValue = t[sc], this[Ih] = i, this.newIndex = n, this[xv] && (this[Ov] = this[xv][Mv](t))
  };
  xY[bh] = {kind: sc}, m(xY, gY);
  var pY = function (t, i) {
    this[If] = t, this.value = i
  };
  pY[bh][el] = Iv, m(pY, gY);
  var EY = function (t, i) {
    this[If] = t, this[Ih] = i
  };
  EY[bh][el] = Sv, m(EY, gY);
  var mY = function (t, i, n, e) {
    this.source = i, this[xv] = n, this[Ih] = e, this[sc] = t, this.child = i, this.oldIndex = n, this.newIndex = e
  };
  mY[bh][el] = Pv, m(mY, gY);
  var wY = function () {
  };
  wY[bh] = {
    listener: null, beforeEvent: function (t) {
      return null != this[Av] && this[Av][Cv] ? this[Av][Cv](t) : !0
    }, onEvent: function (t) {
      null != this.listener && this.listener[kh] && this[Av][kh](t)
    }
  };
  var TY = function () {
    w(this, TY, arguments), this[Lv] = {}, this[Rv] = []
  }, kY = function (t, i) {
    this[Av] = t, this.scope = i, t instanceof Function ? this[kh] = t : (this.onEvent = t.onEvent, this[Cv] = t[Cv]), this[ic] = function (t) {
      return t && this[Av] == t[Av] && this.scope == t[Dv]
    }
  };
  kY[bh] = {
    equals: function (t) {
      return t && this[Av] == t[Av] && this.scope == t.scope
    }, destroy: function () {
      delete this[Dv], delete this.listener
    }
  }, TY.prototype = {
    listeners: null, _n9n: function () {
      return this[Rv] && this[Rv][rh] > 0
    }, _7e: function (t, i) {
      return t instanceof TY ? t : new kY(t, i)
    }, _98: function (t, i) {
      if (t instanceof TY) return this[Rv].indexOf(t);
      for (var n = this[Rv], e = 0, s = n.length; s > e; e++) {
        var r = n[e];
        if (r[Av] == t && r.scope == i) return e
      }
      return -1
    }, contains: function (t, i) {
      return this._98(t, i) >= 0
    }, addListener: function (t, i) {
      return this.contains(t, i) ? !1 : void this.listeners.push(this._7e(t, i))
    }, removeListener: function (t, i) {
      var n = this._98(t, i);
      n >= 0 && this[Rv][fh](n, 1)
    }, on: function (t, i) {
      this.addListener(t, i)
    }, un: function (t, i, n) {
      this[jv](t, i, n)
    }, onEvent: function (t) {
      return this.listeners ? void l(this[Rv], function (i) {
        i[kh] && (i.scope ? i.onEvent[hh](i[Dv], t) : i[kh](t))
      }, this) : !1
    }, beforeEvent: function (t) {
      return this[Rv] ? l(this[Rv], function (i) {
        return i.beforeEvent ? i[Dv] ? i.beforeEvent[hh](i[Dv], t) : i[Cv](t) : !0
      }, this) : !0
    }, _eg: function (t) {
      return this[Cv](t) === !1 ? !1 : (this[kh](t), !0)
    }, clear: function () {
      this[Rv] = []
    }, destroy: function () {
      this.clear()
    }
  }, m(TY, wY);
  var OY = {
    onEvent: function () {
    }, beforeEvent: function () {
    }
  }, MY = function (t, i, n, e, s) {
    this[If] = t, this[Xo] = Nv, this.kind = i, this[Yo] = n, this[Af] = e, this[Ov] = s
  };
  MY[bh] = {
    index: -1, oldIndex: -1, toString: function () {
      return bv + this[If] + yv + this.type + gv + this[el] + qv + this.data + Bv + this[Af] + $v + this[Ov]
    }
  }, m(MY, yY), MY[Fv] = Gv, MY.KIND_REMOVE = jh, MY.KIND_CLEAR = yu, MY[zv] = Yv;
  var IY = function () {
    this.id = ++Dz, this[Hv] = {}
  };
  IY[bh] = {
    _n8l: null, id: null, get: function (t) {
      return this[Hv][t]
    }, set: function (t, i) {
      var n = this.get(t);
      if (n === i) return !1;
      var e = new gY(this, t, i, n);
      return e[pv] = dH.PROPERTY_TYPE_CLIENT, this[Uv](t, i, e, this._n8l)
    }, _n9b: function (t, i, e, s) {
      return this.beforeEvent(e) === !1 ? !1 : (s || (s = this._n8l), i === n ? delete s[t] : s[t] = i, this[kh](e), !0)
    }, remove: function (t) {
      this.set(t, null)
    }, valueOf: function () {
      return this.id
    }, toString: function () {
      return this.id
    }, _dv: function (t, i) {
      if (i === n && (i = -1), this == t || t == this._jq) return !1;
      if (t && this == t._jq && !t._dv(null)) return !1;
      var e = new xY(this, t, i);
      if (!this[Cv](e)) return !1;
      var s, r, h = this._jq;
      return t && (s = new pY(t, this), !t.beforeEvent(s)) ? !1 : null == h || (r = new EY(h, this), h[Cv](r)) ? (this._jq = t, null != t && _i(t, this, i), null != h && di(h, this), this[kh](e), null != t && t[kh](s), null != h && h[kh](r), this[Wv](h, t), !0) : !1
    }, addChild: function (t, i) {
      var n = t._dv(this, i);
      return n && this[Xv](t, i), n
    }, removeChild: function (t) {
      if (!this._fs || !this._fs.contains(t)) return !1;
      var i = t._dv(null);
      return this[Vv](t), i
    }, toChildren: function () {
      return this._fs ? this._fs[jl]() : null
    }, clearChildren: function () {
      if (this._fs && this._fs[rh]) {
        var t = this[Zv]();
        l(t, function (t) {
          t._dv(null)
        }, this), this.onChildrenClear(t)
      }
    }, forEachChild: function (t, i) {
      return this[eh]() ? this._fs[Nu](t, i) : !1
    }, onChildAdd: function () {
    }, onChildRemove: function () {
    }, onChildrenClear: function () {
    }, onParentChanged: function () {
    }, getChildIndex: function (t) {
      return this._fs && this._fs.length ? this._fs[lh](t) : -1
    }, setChildIndex: function (t, i) {
      if (!this._fs || !this._fs[rh]) return !1;
      var n = this._fs.indexOf(t);
      if (0 > n || n == i) return !1;
      var e = new mY(this, t, n, i);
      return this[Cv](e) === !1 ? !1 : (this._fs[jh](t) && this._fs.add(t, i), this.onEvent(e), !0)
    }, hasChildren: function () {
      return this._fs && this._fs[rh] > 0
    }, getChildAt: function (t) {
      return null == this._fs ? null : this._fs._jz[t]
    }, isDescendantOf: function (t) {
      if (!t[eh]()) return !1;
      for (var i = this[sc]; null != i;) {
        if (t == i) return !0;
        i = i[sc]
      }
      return !1
    }, firePropertyChangeEvent: function (t, i, n, e) {
      this[kh](new gY(this, t, i, n, e))
    }
  }, m(IY, wY), K(IY[bh], {
    childrenCount: {
      get: function () {
        return this._fs ? this._fs.length : 0
      }
    }, children: {
      get: function () {
        return this._fs || (this._fs = new Qz), this._fs
      }
    }, parent: {
      get: function () {
        return this._jq
      }, set: function (t) {
        this._dv(t, -1)
      }
    }, properties: {
      get: function () {
        return this[Hv]
      }, set: function (t) {
        this[Hv] != t && (this[Hv] = t)
      }
    }
  });
  var SY = function () {
    this._jz = [], this._lq = {}, this._1p = new TY
  };
  SY[bh] = {
    beforeEvent: function (t) {
      return null != this._1p && this._1p[Cv] ? this._1p[Cv](t) : !0
    }, onEvent: function (t) {
      return this._1p instanceof Function ? void this._1p(t) : void (null != this._1p && this._1p[kh] && this._1p[kh](t))
    }, _1p: null, setIndex: function (t, i) {
      if (!this.contains(t)) throw new Error(Ya + t[Kv]() + Pl);
      var n = this[lh](t);
      if (n == i) return !1;
      var e = new MY(this, MY.KIND_INDEX_CHANGE, t, i, n);
      return this[Cv](e) === !1 ? !1 : (this._jz[jh](t) >= 0 && this._jz.add(i, t), this[kh](e), !0)
    }, _fe: function (t, i) {
      if (0 == t.length) return !1;
      var e = !1, s = i >= 0, r = new MY(this, MY[Fv], t, i);
      if (this[Cv](r) === !1) return !1;
      var h = [];
      t = t._jz || t;
      for (var a = 0, o = t.length; o > a; a++) {
        var f = t[a];
        null !== f && f !== n && this._km(f, i, !0) && (h.push(f), e = !0, s && i++)
      }
      return r.data = h, this[kh](r), e
    }, _km: function (t, i, n) {
      if (this.accept(t) === !1) return !1;
      if (n) return T(this, SY, Jv, arguments);
      var e = new MY(this, MY.KIND_ADD, t, i);
      return this.beforeEvent(e) === !1 ? !1 : T(this, SY, Jv, arguments) ? (this._kr(t, e), t) : !1
    }, _kr: function (t, i) {
      this[kh](i)
    }, _n9e: function (t) {
      if (0 == t[rh]) return !1;
      var i = new MY(this, MY[Qv], t);
      if (this[Cv](i) === !1) return !1;
      var e = [], s = !1;
      t = t._jz || t;
      for (var r = 0, h = t[rh]; h > r; r++) {
        var a = t[r];
        if (null !== a && a !== n) {
          var o = a.id || a;
          a.id === n && (a = null), this._fo(o, a, !0) && (e[dh](a), s = !0)
        }
      }
      return i[Yo] = e, this.onEvent(i), s
    }, _fo: function (t, i, n) {
      if (n) return T(this, SY, tb, arguments);
      var e = new MY(this, MY.KIND_REMOVE, i);
      return this.beforeEvent(e) === !1 ? !1 : T(this, SY, tb, arguments) ? (this[kh](e), !0) : !1
    }, clear: function () {
      if (this[Dl]()) return !1;
      var t = new MY(this, MY.KIND_CLEAR, this[jl]());
      return this[Cv](t) === !1 ? !1 : T(this, SY, yu) ? (this[kh](t), !0) : !1
    }, accept: function (t) {
      return this[ib] && this.filter(t) === !1 ? !1 : !0
    }
  }, m(SY, Qz), Z(SY[bh], nb, {
    get: function () {
      return this._1p
    }
  });
  var PY = function () {
    w(this, PY, arguments), this[eb] = new TY, this[sb] = new AY(this), this._selectionModel._1p = this[eb], this[rb] = new TY, this[rb].addListener({
      beforeEvent: this[hb],
      onEvent: this[ab]
    }, this), this.parentChangeDispatcher = new TY, this.childIndexChangeDispatcher = new TY, this[ob] = new Qz;
    var t = this;
    this[ob].setIndex = function (i, n) {
      if (!t[ob].contains(i)) throw new Error(Ya + i.id + Pl);
      var e = t.$roots._jz[lh](i);
      if (e == n) return !1;
      t[ob]._jz.splice(e, 1), t.$roots._jz.splice(n, 0, i), t[fb] = !0;
      var s = new mY(t, i, e, n);
      return t._22(s), !0
    }
  };
  PY.prototype = {
    selectionModel: null,
    selectionChangeDispatcher: null,
    dataChangeDispatcher: null,
    parentChangeDispatcher: null,
    roots: null,
    _kr: function (t, i) {
      t[Av] = this[rb], t.parent || this[ob].add(t), this[kh](i)
    },
    _fo: function (t, i) {
      if (T(this, PY, tb, arguments)) {
        if (i instanceof gW) i[ub](); else if (i instanceof xW) {
          var n = i[cb]();
          this[jh](n)
        }
        var e = i.parent;
        return null == e ? this[ob].remove(i) : (e.removeChild(i), e[_b] = !0), i.hasChildren() && this[jh](i.toChildren()), i[Av] = null, !0
      }
      return !1
    },
    _5y: function (t) {
      var i = t.source;
      this.contains(i) && (null == i[sc] ? this[ob].add(i) : null == t[xv] && this[ob][jh](i), this.parentChangeDispatcher[kh](t))
    },
    _22: function (t) {
      this.childIndexChangeDispatcher.onEvent(t)
    },
    beforeDataPropertyChange: function (t) {
      return t instanceof xY ? this[db][Cv](t) : !0
    },
    onDataPropertyChanged: function (t) {
      return t instanceof xY ? (this[fb] = !0, t.source[fb] = !0, void this._5y(t)) : void (t instanceof mY && (this[fb] = !0, t.source[fb] = !0, this._22(t)))
    },
    toRoots: function () {
      return this[ob][jl]()
    },
    _gc: function (t) {
      var i, n = t._jq;
      i = n ? n._fs : this[ob];
      var e = i.indexOf(t);
      if (0 > e) throw new Error(lb + t + "' not exist in the box");
      return 0 == e ? n : i[Sl](e - 1)
    },
    _gd: function (t) {
      var i, n = t._jq;
      i = n ? n._fs : this.$roots;
      var e = i[lh](t);
      if (0 > e) throw new Error(lb + t + "' not exist in the box");
      return e == i.length - 1 ? n ? this._gd(n) : null : i[Sl](e + 1)
    },
    forEachByDepthFirst: function (t, i, n) {
      return this[ob].length ? r(this[ob], t, i, n) : !1
    },
    forEachByDepthFirstReverse: function (t, i, n) {
      return this[ob][rh] ? o(this.$roots, t, i, n) : !1
    },
    forEachByBreadthFirst: function (t, i) {
      return this.$roots[rh] ? c(this[ob], t, i) : !1
    },
    forEachByBreadthFirstReverse: function (t, i) {
      return this[ob].length ? _(this.$roots, t, i) : !1
    },
    clear: function () {
      return T(this, PY, yu) ? (this[ob].clear(), this[Td][yu](), !0) : !1
    }
  }, m(PY, SY), K(PY[bh], {
    selectionModel: {
      get: function () {
        return this._selectionModel
      }
    }, roots: {
      get: function () {
        return this[ob]
      }
    }
  });
  var AY = function (t) {
    w(this, AY), this.box = t, this[vb] = {
      onEvent: function (t) {
        MY[Qv] == t[el] ? null != t[Yo] ? this[jh](t[Yo]) : null != t[bb] && this[jh](t.datas) : MY[yb] == t.kind && this[yu]()
      }
    }, this.box[nb][sl](this._n9oxChangeListener, this)
  };
  AY[bh] = {
    box: null, isSelected: function (t) {
      return this[Rl](t.id || t)
    }, select: function (t) {
      return this.add(t)
    }, unselect: function (t) {
      return this.remove(t)
    }, reverseSelect: function (t) {
      return this[N_](t) ? this[jh](t) : this.add(t)
    }, accept: function (t) {
      return this.box.contains(t)
    }
  }, m(AY, SY);
  var CY = null, LY = null, RY = function () {
    if (!i.createElement) return function (t) {
      return t
    };
    var t = i[fo](H_), e = t[Ea], s = {};
    return function (t) {
      if (s[t]) return s[t];
      var i = li(t);
      return e[i] !== n || LY && e[i = li(LY + i)] !== n ? (s[t] = i, i) : t
    }
  }(), DY = {};
  !function () {
    if (!i[gb]) return !1;
    for (var e = i[gb], s = "Webkit Moz O ms Khtml".split(Dh), r = 0; r < s[rh]; r++) if (e.style[s[r] + xb] !== n) {
      LY = xa + s[r][pb]() + xa;
      break
    }
    var h = i[fo](Ea);
    t[Eb] || h[Q_](i[mb]("")), h.type = wb, h.id = Tb, e.appendChild(h), CY = h[kb];
    var a, o;
    for (var f in DY) {
      var u = DY[f];
      a = f, o = "";
      for (var c in u) o += RY(c) + ma + u[c] + Ob;
      xi(a, o)
    }
  }();
  var jY = function (t, i, n, e, s) {
    if (s) {
      var r = function (t) {
        r.handle.call(r[Dv], t)
      };
      return r[Dv] = s, r[Mb] = n, t[Ib](i, r, e), r
    }
    return t[Ib](i, n, e), n
  }, NY = function (t, i, n) {
    t[Sb](i, n)
  };
  if (Jz[Pb] = 200, Jz.LONG_PRESS_INTERVAL = 800, Jz[Ab] = !0, t[cl] && navigator[_l]) {
    var qY, BY = /mobile|tablet|ip(ad|hone|od)|android/i, $Y = X_ in t, FY = $Y && BY.test(navigator[_l]);
    if (FY) qY = Cb; else {
      var GY = Lb in t ? "mousewheel" : Rb;
      qY = Db + GY, $Y && (qY += jb)
    }
    qY = qY[Rh](/[\s,]+/);
    var zY = function (i) {
      return t[Nb] && i instanceof t[Nb]
    }, YY = function () {
      return Jz[Pb]
    }, HY = function () {
      return Jz[qb]
    }, $ = function (t) {
      t[Gh] ? t[Gh]() : t[zh] = !1
    }, F = function (t) {
      t[Yh] && t[Yh](), t[Hh] = !0
    }, G = function (t) {
      $(t), F(t)
    }, UY = function (t) {
      return t[Bb] || t[zh] === !1
    }, WY = function (t) {
      JY[$b] && JY[$b][Fb](t)
    }, XY = function (t) {
      if (JY[$b]) {
        var i = JY._n8urrentItem;
        i._onWindowMouseUp(t), VY(null)
      }
    }, VY = function (t) {
      JY._n8urrentItem != t && (JY[$b] && (JY[$b][Gb] = !1), JY._n8urrentItem = t)
    }, ZY = function (i, n) {
      qY[Nu](function (t) {
        i[Ib](t, n, !1)
      }), Zz || JY[zb] || (JY._n7p = !0, t.addEventListener(Yb, WY, !0), t.addEventListener(Hb, XY, !0))
    }, KY = function (t, i) {
      qY[Nu](function (n) {
        t.removeEventListener(n, i, !1)
      })
    };
    wi[bh] = {
      _install: function () {
        this.__n7ction || (this[Ub] = function (t) {
          this[Qd](t)
        }[Ah](this), ZY(this._md, this[Ub]))
      }, _uninstall: function () {
        this[Ub] && KY(this._md, this[Ub])
      }, _n7ction: function (t) {
        t = this[Wb](t);
        var i = t[Xo];
        this[Xb](t, i) === !1 && this._onEvent(t, Vb + i)
      }, _n8ancelLongPressTimer: function () {
        this[Zb] && (clearTimeout(this.__longPressTimer), this.__longPressTimer = null)
      }, __kuLongPress: function (t) {
        this[Kb] || (this[Kb] = function () {
          this[Jb] && (this.__n8ancelClick = !0, this[Jb][Qb] ? this[ty](this[Jb], iy) : this[ty](this._kuEvent, ny))
        }.bind(this)), this[ey](), this[Zb] = setTimeout(this[Kb], HY(t))
      }, __fixTouchEvent: function (t) {
        for (var i, n, e = 0, s = 0, r = t[Aa][rh], h = 0; r > h;) {
          var a = t.touches[h++], o = a[La], f = a.clientY;
          if (2 == h) {
            var u = n[0] - o, c = n[1] - f;
            i = Math[Ao](u * u + c * c)
          }
          n = [o, f], e += o, s += f
        }
        t.cx = e / r, t.cy = s / r, t[sy] = {x: t.cx, y: t.cy, clientX: t.cx, clientY: t.cy}, t.distance = i
      }, __touchCountChange: function (t) {
        this._dragPoints[yu](), this._9o = mi(t, this._md)
      }, _handleTouchEvent: function (t, i) {
        switch (i) {
          case"touchstart":
            F(t), this[ry](t), this[hy](t);
            var n = t[Aa].length;
            this[Jb] || (this[Jb] = t, this[ay](t), this.__n8ancelClick = !1, this[oy](t)), 1 == n && (this[fy] = null), n >= 2 && !this[fy] && (this[fy] = {
              cx: t.cx,
              cy: t.cy,
              distance: t[Hl]
            });
            break;
          case"touchmove":
            G(t), this[ry](t);
            var n = t.touches[rh];
            if (n >= 2 && this[fy]) {
              var e = this[fy][Hl];
              t._scale = t[Hl] / e, t[uy] = this[fy][cy] ? t[_y] / this[fy][cy] : t[_y], this[fy][cy] = t._scale, this[dy] || (this[dy] = !0, this[ty](t, ly))
            }
            this.__dragging || (this.__dragging = !0, this._kudrag(t)), this[vy](t), this[dy] && this._onEvent(t, by);
            break;
          case"touchend":
            G(t);
            var n = t.touches[rh];
            n && (this.__fixTouchEvent(t), this.__touchCountChange(t)), 1 >= n && (this[dy] && (this[dy] = !1, this._onEvent(t, yy)), this[fy] = null), 0 == n && (this[Gb] ? (this._enddrag(t), this[Gb] = !1) : t.timeStamp - this[Jb][gy] < .8 * YY(t) && this.__onclick(this[Jb]), this[xy](t));
            break;
          case"touchcancel":
            this[Gb] = !1, this[dy] = !1, this[fy] = null
        }
        return !1
      }, _handleEvent: function (t, i) {
        if (zY(t)) return this[py](t, i);
        if (Ey == i) F(t), VY(this), this._9o = mi(t, this._md), this[Jb] || (this._kuEvent = t, this[ay](t)), this[my] = !1, this[oy](t); else if (Hb == i) VY(), this[xy](t); else if (wy == i) {
          if (this[my]) return !0;
          if (this._isDelayClick()) return this[Ty](t), !0
        } else if (ky == i) {
          if (this[Oy]()) return !0
        } else {
          if (My == i) return this._onEvent(t, Iy), this[Jb] && UY(t) && VY(this), !0;
          if (i == GY) {
            var e = t.wheelDelta;
            if (e !== n ? e /= 120 : e = -t[Sy], !e) return;
            return t.delta = e, this[ty](t, Lb)
          }
        }
        return !1
      }, _onEvent: function (t, i) {
        if (this[Ba]) {
          var n = this[Ba];
          if (i = i || t[Xo], n instanceof Function) return n(t, i);
          if (!(n[lc] instanceof Function && n.accept(i, t) === !1)) return n[Py] instanceof Function && n[Py](i, t, this[qa] || this._md), n[i] instanceof Function ? n[i][hh](n, t, this[qa] || this._md) : void 0
        }
      }, _toQEvent: function (t) {
        return t
      }, _onWindowMouseUp: function (t) {
        this[Gb] && (G(t), this.__dragging = !1, t = this[Wb](t), this[Ay](t), this[xy](t), this[ty](t, Cy))
      }, _kuDragDistance: 4, _onWindowMouseMove: function (t) {
        if (this._kuEvent) {
          if (G(t), !this.__dragging) {
            var i = this[Jb][Ly] - t.screenX, n = this._kuEvent[Ry] - t.screenY, e = i * i + n * n;
            if (e < this[Dy]) return;
            this[Gb] = !0, this._kudrag(t)
          }
          this[vy](this[Wb](t))
        }
      }, _isDelayClick: function () {
        return Jz.DELAY_CLICK
      }, __onclick: function (t) {
        if (!this[my]) {
          var i = YY(t);
          this[jy] ? this[Ny] || (clearTimeout(this[jy]), this[jy] = null, this[ty](t, qy), this[Ny] = !0) : (this[Ny] = !1, this[jy] = setTimeout(function (t) {
            this[jy] = null, this[Ny] || this[ty](t, V_)
          }[Ah](this, t, i), i))
        }
      }, _onstart: function (t) {
        t[Qb] ? this[ty](t, By) : this._onEvent(t, $y)
      }, _onrelease: function (t) {
        this[Jb] && (this[ey](), t[Qb] ? this[ty](t, Fy) : this[ty](t, Gy), this._kuEvent = null, this._9o = null)
      }, _n7ppendDragInfo: function (t) {
        var i = this._9o;
        this._9o = mi(t, this._md), this[$a].add(i, this._9o, t)
      }, _kudrag: function () {
        this[my] = !0, this[ey](), this[Jb][Qb] ? this._onEvent(this[Jb], zy) : this[ty](this[Jb], Yy)
      }, _ondrag: function (t) {
        this[Hy](t), this[Jb].button ? this[ty](t, Uy) : this._onEvent(t, Wy)
      }, _enddrag: function (t) {
        if (t[gy] - this._9o[gy] < 100) {
          var i = this._dragPoints[Xy]();
          i && (t.vx = i.x, t.vy = i.y)
        }
        this._kuEvent[Qb] ? this[ty](t, Vy) : this[ty](t, Zy), this._dragPoints[yu]()
      }, _in: function () {
        this[Ky]()
      }, _l5Status: function () {
        JY._n8urrentItem == this && delete JY[$b], this._n8ancelLongPressTimer(), delete this._9o, this._kuEvent && (delete this[Jb][Jy], delete this[Jb][M_], delete this[Jb])
      }
    };
    var JY = I(function (t) {
      this._kp = t, wi[xh](this, [t[Qy], null, t])
    }, {
      "super": wi, _mzData: function (t) {
        return this._kp[tg](t)
      }, _li: function (t) {
        return this._kp[ig](t)
      }, _toQEvent: function (i) {
        return (i instanceof MouseEvent || t[Nb] && i instanceof t[Nb]) && (i[Jy] = this._mzData[Ah](this, i), i.getUI = this._li.bind(this, i)), i
      }, _onElementRemoved: function (t) {
        this._iqListeners(function (i) {
          i[ng] instanceof Function && i[ng](t, this._kp)
        })
      }, _onElementClear: function () {
        this[eg](function (t) {
          t[sg] instanceof Function && t.onClear(this._kp)
        })
      }, _in: function (t) {
        this[rg] && this[hg](this[rg], t), this[ag] && this[hg](this._n8ustomInteractionListeners, t), this[Ky]()
      }, _kp: null, _2is: null, _n8ustomInteractionListeners: null, _mwInteraction: function (t) {
        return this._2is == t ? !1 : (this[rg] && this[rg][rh] && this[hg](this[rg]), void (this[rg] = t))
      }, _mtCustomInteractionListener: function (t) {
        this._n8ustomInteractionListeners || (this[ag] = []), this[ag][dh](t)
      }, _j3CustomInteractionListener: function (t) {
        this[ag] && 0 != this._n8ustomInteractionListeners[rh] && x(this[ag], t)
      }, _onEvent: function (t, i, n) {
        this._kp[i] instanceof Function && this._kp[i].call(this._kp, t, n), this[rg] && this[og](t, i, this[rg], n), this[ag] && this[og](t, i, this[ag], n)
      }, _iqListeners: function (t) {
        this[rg] && l(this._2is, t, this), this[ag] && l(this[ag], t, this)
      }, __onEvent: function (t, i, n, e) {
        if (!B(n)) return void this[fg](t, i, n, e);
        for (var s = 0; s < n.length; s++) {
          var r = n[s];
          this.__handleEvent(t, i, r, e)
        }
      }, __handleEvent: function (t, i, n, e) {
        if (!(n[lc] instanceof Function && n[lc](i, t, this._kp, e) === !1)) {
          n[Py] instanceof Function && n[Py](i, t, this._kp, e);
          var s = n[i];
          s instanceof Function && s[hh](n, t, this._kp, e)
        }
      }, _inInteraction: function (t) {
        t[ug] instanceof Function && t[ug][hh](t, this._kp)
      }, _inInteractions: function (t, i) {
        if (!B(t)) return void this._inInteraction(t, i);
        for (var n = 0; n < t.length; n++) {
          var e = t[n];
          e && this[cg](e, i)
        }
      }
    })
  }
  ki[bh] = {
    limitCount: 10, points: null, add: function (t, i, n) {
      0 == this[qo][rh] && (this[_g] = t.x, this._kuY = t.y);
      var e = i[gy] - t.timeStamp || 1;
      n[dg] = e;
      var s = i.x - t.x, r = i.y - t.y;
      n.dx = s, n.dy = r, n.startX = this[_g], n[lg] = this[vg], n[bg] = i.x - this._kuX, n[yg] = i.y - this._kuY, this[qo][fh](0, 0, {
        interval: e,
        dx: s,
        dy: r
      }), this.points[rh] > this.limitCount && this[qo].pop()
    }, getCurrentSpeed: function () {
      if (!this[qo][rh]) return null;
      for (var t = 0, i = 0, n = 0, e = 0, s = this.points.length; s > e; e++) {
        var r = this[qo][e], h = r[dg];
        if (h > 150) {
          t = 0;
          break
        }
        if (t += h, i += r.dx, n += r.dy, t > 300) break
      }
      return 0 == t || 0 == i && 0 == n ? null : {x: i / t, y: n / t}
    }, clear: function () {
      this[qo] = []
    }
  };
  var QY, tH, iH, nH;
  Fz ? (QY = gg, tH = xg, iH = pg, nH = Eg) : Gz ? (QY = mg, tH = wg, iH = Tg, nH = kg) : (QY = Og, tH = Og, iH = Pd, nH = Mg);
  var eH = Ig, sH = Math.PI, rH = Math.pow, hH = Math.sin, aH = 1.70158, oH = {
    swing: function (t) {
      return -Math.cos(t * sH) / 2 + .5
    }, easeNone: function (t) {
      return t
    }, easeIn: function (t) {
      return t * t
    }, easeOut: function (t) {
      return (2 - t) * t
    }, easeBoth: function (t) {
      return (t *= 2) < 1 ? .5 * t * t : .5 * (1 - --t * (t - 2))
    }, easeInStrong: function (t) {
      return t * t * t * t
    }, easeOutStrong: function (t) {
      return 1 - --t * t * t * t
    }, easeBothStrong: function (t) {
      return (t *= 2) < 1 ? .5 * t * t * t * t : .5 * (2 - (t -= 2) * t * t * t)
    }, elasticIn: function (t) {
      var i = .3, n = i / 4;
      return 0 === t || 1 === t ? t : -(rH(2, 10 * (t -= 1)) * hH(2 * (t - n) * sH / i))
    }, elasticOut: function (t) {
      var i = .3, n = i / 4;
      return 0 === t || 1 === t ? t : rH(2, -10 * t) * hH(2 * (t - n) * sH / i) + 1
    }, elasticBoth: function (t) {
      var i = .45, n = i / 4;
      return 0 === t || 2 === (t *= 2) ? t : 1 > t ? -.5 * rH(2, 10 * (t -= 1)) * hH(2 * (t - n) * sH / i) : rH(2, -10 * (t -= 1)) * hH(2 * (t - n) * sH / i) * .5 + 1
    }, backIn: function (t) {
      return 1 === t && (t -= .001), t * t * ((aH + 1) * t - aH)
    }, backOut: function (t) {
      return (t -= 1) * t * ((aH + 1) * t + aH) + 1
    }, backBoth: function (t) {
      return (t *= 2) < 1 ? .5 * t * t * (((aH *= 1.525) + 1) * t - aH) : .5 * ((t -= 2) * t * (((aH *= 1.525) + 1) * t + aH) + 2)
    }, bounceIn: function (t) {
      return 1 - oH[Sg](1 - t)
    }, bounceOut: function (t) {
      var i, n = 7.5625;
      return i = 1 / 2.75 > t ? n * t * t : 2 / 2.75 > t ? n * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? n * (t -= 2.25 / 2.75) * t + .9375 : n * (t -= 2.625 / 2.75) * t + .984375
    }, bounceBoth: function (t) {
      return .5 > t ? .5 * oH.bounceIn(2 * t) : .5 * oH.bounceOut(2 * t - 1) + .5
    }
  }, fH = function (t) {
    this._ka = t
  };
  fH[bh] = {
    _ka: null, _8s: function () {
      this[Pg] instanceof Function && (this._n8allback(), this[Pg] = null)
    }, _ku: function (t) {
      var i = Date.now();
      this._ls(), this._n8allback = t, this[Ag] = requestAnimationFrame(function n() {
        var t = Date.now(), e = t - i;
        return !e || this._ka && this._ka(e) !== !1 ? (i = t, void (this[Ag] = requestAnimationFrame(n[Ah](this)))) : void this._ls()
      }[Ah](this))
    }, _6f: function () {
    }, _ls: function () {
      return this[Ag] ? (this._6f(), this._8s(), t[yl](this[Ag]), void delete this[Ag]) : !1
    }, _eh: function () {
      return null != this[Ag]
    }
  };
  var uH = function (t, i, n, e) {
    this[Cg] = t, this[qa] = i || this, this._45 = e, n && n > 0 && (this._iu = n)
  };
  uH[bh] = {
    _iu: 1e3, _45: null, _ej: 0, _ls: function () {
      return this._ej = 0, this._dk = 0, T(this, uH, Lg)
    }, _dk: 0, _ka: function (t) {
      if (this._ej += t, this._ej >= this._iu) return this[Cg][hh](this._scope, 1, (1 - this._dk) * this._iu, t, this._iu), !1;
      var i = this._ej / this._iu;
      return this._45 && (i = this._45(i)), this[Cg][hh](this._scope, i, (i - this._dk) * this._iu, t, this._iu) === !1 ? !1 : void (this._dk = i)
    }
  }, m(uH, fH);
  var cH = function (t) {
    ni(t)
  }, _H = {
    version: Rg,
    extend: m,
    doSuperConstructor: w,
    doSuper: T,
    createFunction: function (t, i) {
      return i.bind(t)
    },
    setClass: L,
    appendClass: R,
    removeClass: D,
    forEach: l,
    forEachReverse: b,
    isNumber: j,
    isString: N,
    isBoolean: q,
    isArray: B,
    eventPreventDefault: $,
    eventStopPropagation: F,
    stopEvent: G,
    callLater: A,
    nextFrame: C,
    forEachChild: e,
    forEachByDepthFirst: r,
    forEachByDepthFirstReverse: o,
    forEachByBreadthFirst: c,
    randomInt: z,
    randomBool: Y,
    randomColor: U,
    addEventListener: jY,
    getFirstElementChildByTagName: iY
  };
  _H[Dg] = Zz, _H[jg] = Wz, _H.intersectsPoint = hi, _H.containsRect = ai, _H[Ng] = hY, _H.Size = rY, _H.Point = nY, _H[qg] = aY, _H[Bg] = yY, _H[$g] = gY, _H.ListEvent = MY, _H[Fg] = wY, _H.Dispatcher = TY, _H[Gg] = oY, _H[zg] = IY, _H[Yg] = AY, _H[Hg] = PY, _H[Ug] = OY, _H[Wg] = Ii, _H[Xg] = Oi, _H.loadJSON = Mi, _H[Vg] = Ti, _H[Zg] = eY, _H[Kg] = Qz, _H[Jg] = wi, _H[Qg] = function (t) {
    alert(t)
  }, _H[tx] = function (t, i, n, e) {
    var s = prompt(t, i);
    return s != i && n ? n[hh](e, s) : s
  }, _H[ix] = function (t, i, n) {
    var e = confirm(t);
    return e && i ? i.call(n) : e
  }, _H[nx] = xi;
  var dH = {
    IMAGE_ADJUST_FLIP: ex,
    IMAGE_ADJUST_MIRROR: sx,
    SELECTION_TYPE_BORDER_RECT: rx,
    SELECTION_TYPE_BORDER: hx,
    SELECTION_TYPE_SHADOW: ax,
    NS_SVG: "http://www.w3.org/2000/svg",
    PROPERTY_TYPE_ACCESSOR: 0,
    PROPERTY_TYPE_STYLE: 1,
    PROPERTY_TYPE_CLIENT: 2,
    EDGE_TYPE_DEFAULT: null,
    EDGE_TYPE_ELBOW: ox,
    EDGE_TYPE_ELBOW_HORIZONTAL: fx,
    EDGE_TYPE_ELBOW_VERTICAL: ux,
    EDGE_TYPE_ORTHOGONAL: cx,
    EDGE_TYPE_ORTHOGONAL_HORIZONTAL: _x,
    EDGE_TYPE_ORTHOGONAL_VERTICAL: dx,
    EDGE_TYPE_HORIZONTAL_VERTICAL: lx,
    EDGE_TYPE_VERTICAL_HORIZONTAL: vx,
    EDGE_TYPE_EXTEND_TOP: bx,
    EDGE_TYPE_EXTEND_LEFT: yx,
    EDGE_TYPE_EXTEND_BOTTOM: gx,
    EDGE_TYPE_EXTEND_RIGHT: xx,
    EDGE_TYPE_ZIGZAG: px,
    EDGE_CORNER_NONE: sd,
    EDGE_CORNER_ROUND: $o,
    EDGE_CORNER_BEVEL: Ex,
    GROUP_TYPE_RECT: uf,
    GROUP_TYPE_CIRCLE: mx,
    GROUP_TYPE_ELLIPSE: wx,
    SHAPE_CIRCLE: Tx,
    SHAPE_RECT: uf,
    SHAPE_ROUNDRECT: kx,
    SHAPE_STAR: Ox,
    SHAPE_TRIANGLE: Mx,
    SHAPE_HEXAGON: Ix,
    SHAPE_PENTAGON: Sx,
    SHAPE_TRAPEZIUM: Px,
    SHAPE_RHOMBUS: Ax,
    SHAPE_PARALLELOGRAM: Cx,
    SHAPE_HEART: Lx,
    SHAPE_DIAMOND: Rx,
    SHAPE_CROSS: Dx,
    SHAPE_ARROW_STANDARD: jx,
    SHAPE_ARROW_1: Nx,
    SHAPE_ARROW_2: qx,
    SHAPE_ARROW_3: Bx,
    SHAPE_ARROW_4: $x,
    SHAPE_ARROW_5: Fx,
    SHAPE_ARROW_6: Gx,
    SHAPE_ARROW_7: zx,
    SHAPE_ARROW_8: Yx,
    SHAPE_ARROW_OPEN: Hx
  };
  dH[Ux] = Wx, dH[Xx] = $o, dH[Vx] = Zx, dH[Kx] = Ex, dH[Jx] = $o, dH[Qx] = tp, dH.EDGE_BUNDLE_TYPE_CURVE = ip, dH[np] = ep, dH.EDGE_BUNDLE_TYPE_ELBOW = ox, Jz.SELECTION_TYPE = dH.SELECTION_TYPE_SHADOW, Jz[Ld] = FY ? 8 : 3, Jz[sp] = 2, Jz.SELECTION_SHADOW_BLUR = 7, Jz[rp] = V(3422561023), Jz.SELECTION_TYPE = dH[hp], Jz.BORDER_RADIUS = 10, Jz[ap] = 10, Jz[p_] = 10, Jz[op] = 200, Jz[So] = 1.2;
  var lH = t[fp] || 1;
  1 > lH && (lH = 1);
  var vH;
  _H[up] = ji;
  var bH = Yz && !Zz, yH = 9, gH = function (t, i, n, e) {
    var s = t - n, r = i - e;
    return s * s + r * r
  };
  rn[bh] = {
    equals: function (t) {
      return this.cx == t.cx && this.cy == t.cy && this.r == t.r
    }
  }, rn[Ro] = function (t, i, n) {
    if (!n) return en(t, i);
    var e = gH(t.x, t.y, i.x, i.y), s = gH(t.x, t.y, n.x, n.y), r = gH(n.x, n.y, i.x, i.y);
    if (e + xH >= s + r) return en(t, i, 0, n);
    if (s + xH >= e + r) return en(t, n, 0, i);
    if (r + xH >= e + s) return en(i, n, 0, t);
    var h;
    Math.abs(n.y - i.y) < 1e-4 && (h = t, t = i, i = h), h = n.x * (t.y - i.y) + t.x * (i.y - n.y) + i.x * (-t.y + n.y);
    var a = (n.x * n.x * (t.y - i.y) + (t.x * t.x + (t.y - i.y) * (t.y - n.y)) * (i.y - n.y) + i.x * i.x * (-t.y + n.y)) / (2 * h),
      o = (i.y + n.y) / 2 - (n.x - i.x) / (n.y - i.y) * (a - (i.x + n.x) / 2);
    return new rn(a, o, eY(a, o, t.x, t.y), t, i, n)
  };
  var xH = .01, pH = {
    _n92: function (t, i, e, s, r) {
      if (N(t) && (t = oY[la](t)), !t) return {x: 0, y: 0};
      var h = 0, a = 0, o = i._j4;
      if (e = e || 0, t.x === n) {
        var f = t.horizontalPosition, u = t.verticalPosition, c = !0;
        switch (f) {
          case cY:
            c = !1;
            break;
          case uY:
            h += o / 2
        }
        switch (u) {
          case _Y:
            a -= e / 2;
            break;
          case lY:
            a += e / 2
        }
      } else h = t.x, a = t.y, Math.abs(h) > 0 && Math.abs(h) < 1 && (h *= o);
      r && null != s && (a += s.y, h += Math.abs(s.x) < 1 ? s.x * o : s.x);
      var _ = dn[hh](i, h, a, c);
      return _ ? (r || null == s || _[cp](s), _) : {x: 0, y: 0}
    }, _lt: function (t, i) {
      var n = i[Xo], e = i[qo];
      switch (n) {
        case UH:
          t[_p](e[0], e[1], e[2], e[3], i._r);
          break;
        case GH:
          t[bf](e[0], e[1]);
          break;
        case zH:
          t[vf](e[0], e[1]);
          break;
        case YH:
          t[dp](e[0], e[1], e[2], e[3]);
          break;
        case HH:
          t[lp](e[0], e[1], e[2], e[3], e[4], e[5]);
          break;
        case WH:
          t[Uf]()
      }
    }, _5m: function (t, i, n, e) {
      var s = i[Xo];
      if (s != GH && s != WH) {
        var r = n.lastPoint, h = i.points;
        switch (n[Xo] == GH && t.add(r.x, r.y), s) {
          case UH:
            bn(i, r.x, r.y, h[0], h[1], h[2], h[3], h[4]), t.add(h[0], h[1]), t.add(i[Jo], i[Qo]), t.add(i._p2x, i[nf]), i.$boundaryPoint1 && t.add(i[vp].x, i.$boundaryPoint1.y), i[bp] && t.add(i[bp].x, i[bp].y);
            break;
          case zH:
            t.add(h[0], h[1]);
            break;
          case YH:
            Ui([r.x, r.y][uh](h), t);
            break;
          case HH:
            Ji([r.x, r.y].concat(h), t);
            break;
          case WH:
            e && t.add(e.points[0], e.points[1])
        }
      }
    }, _5n: function (t, i, n) {
      var e = t[Xo];
      if (e == GH) return 0;
      var s = i[Wo], r = t[qo];
      switch (e == HH && 4 == r[rh] && (e = YH), e) {
        case zH:
          return eY(r[0], r[1], s.x, s.y);
        case UH:
          return t._j4;
        case YH:
          var h = Vi([s.x, s.y].concat(r));
          return t._lf = h, h(1);
        case HH:
          var h = tn([s.x, s.y].concat(r));
          return t._lf = h, h(1) || Qi([s.x, s.y].concat(r));
        case WH:
          if (s && n) return t.points = n[qo], eY(n[qo][0], n[qo][1], s.x, s.y)
      }
      return 0
    }
  }, EH = /^data:image\/(\w+);base64,/i, mH = /^gif/i, wH = /^svg/i, TH = 10, kH = 11, OH = 12, MH = 20, IH = 30;
  Jz[wf] = 50, Jz[Tf] = 30, Jz.IMAGE_DEFAULT = {
    draw: function (t, i) {
      En(t, i[da], i[no], i[yp])
    }
  }, Jz[gp] = {
    draw: function (t, i) {
      En(t, i[da], i[no], i[yp], !0)
    }
  }, Jz.MAX_CACHE_PIXELS = 1e6;
  var SH = 1, PH = 2, AH = 3;
  Tn[bh] = {
    _j7: 0, _6h: !0, _kw: null, _j9: null, _lo: null, _mg: null, _n94: n, _9t: n, _7i: function () {
      return this._j7 == SH
    }, getBounds: function (t) {
      return this._mg == IH ? this._lo.getBounds(t) : (this._6h && this._g3(), this)
    }, validate: function () {
      this._6h && this._g3()
    }, _g3: function () {
      if (this._6h = !1, this._mg == IH) return this._lo[Do](), void this[xp](this._lo[No]);
      if (this._mg == MH) return void this._9f();
      if (this._j7 != SH) try {
        this._en()
      } catch (t) {
        this._j7 = AH, _H[ra](t)
      }
    }, _5t: function () {
      this._eg(), this._dispatcher[yu](), delete this[pp]
    }, _i0: function (t) {
      this._kw.parentNode && this._kw[Ep][mp](this._kw), this._j7 = AH, _H[ra](wp + this._lo), this[Tp] = null, this._j9 = null, this._kw = null, t !== !1 && this._5t()
    }, _en: function () {
      var t = this._lo;
      if (this._j7 = SH, this[pp] = new TY, this._mg == OH) {
        for (var n in eU) this[n] = eU[n];
        return void se(this._lo, this, this[kp], this._i0, this._f9)
      }
      this._kw || (this._kw = i[fo](W_), this._kw[Op] = Mp, qz && (this._kw[Ea].visibility = ed, i[Ip].appendChild(this._kw))), qz ? (this._kw.onload = function () {
        setTimeout(this._83[Ah](this), 100)
      }[Ah](this), this._kw[Fu] = this._i0.bind(this)) : (this._kw.onload = this._83.bind(this), this._kw[Fu] = this._83[Ah](this)), this._kw.src = t
    }, _i1: !0, _83: function () {
      var t = this._kw.width, i = this._kw[no];
      if (!t || !i) return void this._i0();
      if (this._kw[Ep] && this._kw[Ep].removeChild(this._kw), this._j7 = PH, this[da] = t, this[no] = i, qz && this._mg == kH) this._pixels = null, this._i1 = !1; else if (this._mg == kH || pn(this._kw.src)) {
        var n = ji();
        n[da] = t, n.height = i, n.g[pd](this._kw, 0, 0, t, i), xn(n.g, n) && (this._j9 = n, this._pixels = Ln(n))
      }
      this._5t()
    }, _9f: function () {
      var t = this._lo;
      if (!(t[Ef] instanceof Function)) return void this._i0(!1);
      if (t[Sp] === !1 && t[da] && t[no]) return this.width = t[da], void (this[no] = t.height);
      var i = t[da] || Jz.IMAGE_MAX_SIZE, n = t.height || Jz.IMAGE_MAX_SIZE, e = this._dm();
      e[da] = i, e[no] = n;
      var s = e.g;
      t[Ef](s);
      var r = Fi(s, 0, 0, i, n);
      if (r) {
        var h = Dn(r[Yo], i, n);
        this.x = h._x, this.y = h._y, this[da] = h[Pp], this[no] = h[Ap], e[da] = this[da], e[no] = this.height, s.putImageData(r, -this.x, -this.y), this[Tp] = h
      }
    }, _dm: function () {
      return this._j9 || (this._j9 = ji())
    }, draw: function (t, i, n, e, s, r) {
      if (this.width && this[no]) {
        i = i || 1, e = e || 1, s = s || 1;
        var h = this[da] * e, a = this.height * s;
        if (r && n[bd] && (t.shadowColor = n[bd], t.shadowBlur = (n[gd] || 0) * i, t[Cp] = (n[Cp] || 0) * i, t[Lp] = (n.shadowOffsetY || 0) * i), this._j7 == SH) return void (Jz[Rp] && Jz.IMAGE_DEFAULT[Ef](t, {
          src: this._lo,
          width: h,
          height: a,
          renderColor: n.renderColor
        }));
        if (this._j7 == AH) return void (Jz[gp] && Jz.IMAGE_INVALID[Ef](t, {
          src: this._lo,
          width: h,
          height: a,
          renderColor: n.renderColor
        }));
        if (this._mg == IH) return t.scale(e, s), void this._lo[Ef](t, i, n);
        var o = this._fl(i, e, s);
        return o ? ((this.x || this.y) && t.translate(this.x * e, this.y * s), t[mo](e / o[mo], s / o.scale), void o._lt(t, n[yp], n[Dp])) : void this._jb(t, i, e, s, this[da] * e, this[no] * s, n)
      }
    }, _jb: function (t, i, n, e, s, r, h) {
      if (this._mg == MH) return 1 != n && 1 != e && t[mo](n, e), void this._lo.draw(t, h);
      if (this._kw) {
        if (!zz) return void t[pd](this._kw, 0, 0, s, r);
        var n = i * s / this[da], e = i * r / this[no];
        t[mo](1 / n, 1 / e), t.drawImage(this._kw, 0, 0, s * n, r * e)
      }
    }, _jc: null, _fl: function (t, i, n) {
      if (this._mg == MH && this._lo[Sp] === !1) return null;
      if (this._mg == TH || (t *= Math.max(i, n)) <= 1) return this[jp] || (this[jp] = this._fn(this._j9 || this._kw, 1, this._i1)), this[jp];
      var e = this._jc[Np] || 0;
      if (t = Math[ch](t), e >= t) {
        for (var s = t, r = this._jc[s]; !r && ++s <= e;) r = this._jc[s];
        if (r) return r
      }
      t % 2 && t++;
      var h = this[da] * t, a = this.height * t;
      if (h * a > Jz[qp]) return null;
      var o = ji(h, a);
      return (this.x || this.y) && o.g[Eo](-this.x * t, -this.y * t), this._jb(o.g, 1, t, t, h, a), this._fn(o, t)
    }, _fn: function (t, i) {
      var n = new KH(t, i);
      return this._jc[i] = n, this._jc.maxScale = i, n
    }, hitTest: function (t, i, n) {
      if (this._mg == IH) return this._lo[q_].apply(this._lo, arguments);
      if (!(this[Tp] || this._kw && this._kw._pixels)) return !0;
      var e = this[Tp] || this._kw[Tp];
      return e._i3(t, i, n)
    }, _eg: function () {
      this._dispatcher && this[pp][kh](new yY(this, Bp, $p, this._kw))
    }, _n7n: function (t, i) {
      this[pp] && this[pp][sl](t, i)
    }, _75: function (t, i) {
      this[pp] && this[pp][jv](t, i)
    }, _n8a: function (t) {
      this._jc = {}, (t || this.width * this[no] > 1e5) && (this._kw = null, this._j9 = null)
    }
  }, m(Tn, hY);
  var CH = {};
  _H[pd] = Sn, _H.registerImage = kn, _H[Fp] = Mn, _H.getAllImages = function () {
    var t = [];
    for (var i in CH) t[dh](i);
    return t
  };
  var LH = function (t, i, n, e, s, r) {
    this.type = t, this.colors = i, this.positions = n, this[R_] = e || 0, this.tx = s || 0, this.ty = r || 0
  };
  dH.GRADIENT_TYPE_RADIAL = nv, dH.GRADIENT_TYPE_LINEAR = tv, LH.prototype = {
    type: null,
    colors: null,
    positions: null,
    angle: null,
    tx: 0,
    ty: 0,
    position: oY.CENTER_MIDDLE,
    isEmpty: function () {
      return null == this.colors || 0 == this[Gp].length
    },
    _6l: function () {
      var t = this[Gp][rh];
      if (1 == t) return [0];
      for (var i = [], n = 1 / (t - 1), e = 0; t > e; e++) i[dh](n * e);
      return this[zp] || (this.positions = i), i
    },
    generatorGradient: function (t) {
      if (null == this.colors || 0 == this.colors[rh]) return null;
      var i, n = Ni();
      if (this.type == dH[Yp]) {
        var e = this[R_];
        e > Math.PI && (e -= Math.PI);
        var s;
        if (e <= Math.PI / 2) {
          var r = Math[ha](t[no], t[da]), h = Math[Ao](t[da] * t[da] + t.height * t.height), a = r - e;
          s = Math.cos(a) * h
        } else {
          var r = Math[ha](t[da], t[no]), h = Math[Ao](t.width * t[da] + t[no] * t[no]), a = r - (e - Math.PI / 2);
          s = Math.cos(a) * h
        }
        var o = s / 2, f = o * Math.cos(e), u = o * Math.sin(e), c = t.x + t[da] / 2 - f, _ = t.y + t.height / 2 - u,
          d = t.x + t.width / 2 + f, l = t.y + t[no] / 2 + u;
        i = n[Hp](c, _, d, l)
      } else {
        if (!(this[Xo] = dH.GRADIENT_TYPE_RADIAL)) return null;
        var v = ci(this[xu], t[da], t.height);
        v.x += t.x, v.y += t.y, this.tx && (v.x += Math.abs(this.tx) < 1 ? t[da] * this.tx : this.tx), this.ty && (v.y += Math.abs(this.ty) < 1 ? t[no] * this.ty : this.ty);
        var b = eY(v.x, v.y, t.x, t.y);
        b = Math.max(b, eY(v.x, v.y, t.x, t.y + t[no])), b = Math.max(b, eY(v.x, v.y, t.x + t.width, t.y + t[no])), b = Math.max(b, eY(v.x, v.y, t.x + t[da], t.y)), i = n[Up](v.x, v.y, 0, v.x, v.y, b)
      }
      var y = this.colors, g = this.positions;
      g && g.length == y[rh] || (g = this._6l());
      for (var x = 0, p = y.length; p > x; x++) i[Wp](g[x], y[x]);
      return i
    }
  };
  var RH = new LH(dH[Yp], [V(2332033023), V(1154272460), V(1154272460), V(1442840575)], [.1, .3, .7, .9], Math.PI / 2),
    DH = new LH(dH.GRADIENT_TYPE_LINEAR, [V(2332033023), V(1154272460), V(1154272460), V(1442840575)], [.1, .3, .7, .9], 0),
    jH = (new LH(dH[Yp], [V(1154272460), V(1442840575)], [.1, .9], 0), new LH(dH[Xp], [V(2298478591), V(1156509422), V(1720223880), V(1147561574)], [.1, .3, .7, .9], 0, -.3, -.3)),
    NH = [V(0), V(4294901760), V(4294967040), V(4278255360), V(4278250239), V(4278190992), V(4294901958), V(0)],
    qH = [0, .12, .28, .45, .6, .75, .8, 1], BH = new LH(dH.GRADIENT_TYPE_LINEAR, NH, qH),
    $H = new LH(dH[Yp], NH, qH, Math.PI / 2), FH = new LH(dH[Xp], NH, qH);
  LH.LINEAR_GRADIENT_VERTICAL = RH, LH[Vp] = DH, LH[Zp] = jH, LH.RAINBOW_LINEAR_GRADIENT = BH, LH[Kp] = $H, LH.RAINBOW_RADIAL_GRADIENT = FH;
  var GH = ev, zH = tv, YH = Jp, HH = iv, UH = Qp, WH = tE;
  dH[iE] = GH, dH[nE] = zH, dH.SEGMENT_QUAD_TO = YH, dH.SEGMENT_CURVE_TO = HH, dH[eE] = UH, dH[sE] = WH;
  var XH = function (t, i) {
    this.id = ++Dz, B(t) ? this[qo] = t : (this[Xo] = t, this.points = i)
  };
  XH[bh] = {
    toJSON: function () {
      var t = {type: this[Xo], points: this[qo]};
      return this[Lf] && (t[Lf] = !0), t
    }, parseJSON: function (t) {
      this.type = t[Xo], this[qo] = t[qo], this[Lf] = t.invalidTerminal
    }, points: null, type: zH, clone: function () {
      return new XH(this[Xo], this[qo] ? y(this[qo]) : null)
    }, move: function (t, i) {
      if (this[qo]) for (var n = 0, e = this[qo][rh]; e > n; n++) {
        var s = this.points[n];
        _H.isNumber(s) && (this[qo][n] += n % 2 == 0 ? t : i)
      }
    }
  }, K(XH[bh], {
    lastPoint: {
      get: function () {
        return this.type == UH ? {x: this._p2x, y: this[nf]} : {
          x: this[qo][this[qo][rh] - 2],
          y: this.points[this[qo][rh] - 1]
        }
      }
    }, firstPoint: {
      get: function () {
        return {x: this[qo][0], y: this.points[1]}
      }
    }
  }), _H.PathSegment = XH;
  var VH = 0;
  Jz.ADD_SEGMENT_TYPE = ip;
  var ZH = function (t) {
    this[No] = new hY, this._fy = t || []
  };
  ZH[bh] = {
    toJSON: function () {
      var t = [];
      return this._fy[Nu](function (i) {
        t[dh](i.toJSON())
      }), t
    }, parseJSON: function (t) {
      var i = this._fy;
      t.forEach(function (t) {
        i[dh](new XH(t.type, t.points))
      })
    }, clear: function () {
      this._fy.length = 0, this[No][yu](), this._j4 = 0, this._6h = !0
    }, _ek: !0, _6n: function (t, i) {
      this._ek && 0 === this._fy[rh] && t != GH && this._fy[dh](new XH(GH, [0, 0])), this._fy[dh](new XH(t, i)), this._6h = !0
    }, add: function (t, i) {
      g(this._fy, t, i), this._6h = !0
    }, removePathSegment: function (t) {
      return t >= this._fy.length ? !1 : (this._fy[fh](t, 1), void (this._6h = !0))
    }, moveTo: function (t, i) {
      this._6n(GH, [t, i])
    }, lineTo: function (t, i) {
      this._6n(zH, [t, i])
    }, quadTo: function (t, i, n, e) {
      this._6n(YH, [t, i, n, e])
    }, curveTo: function (t, i, n, e, s, r) {
      this._6n(HH, [t, i, n, e, s, r])
    }, arcTo: function (t, i, n, e, s) {
      this._6n(UH, [t, i, n, e, s])
    }, closePath: function () {
      this._6n(WH)
    }, _82: function (t, i, n, e, s) {
      if (e[rE]) {
        if (n == dH[hp]) {
          if (!e.selectionShadowBlur) return;
          return t.shadowColor = e[rE], t[gd] = e[hE] * i, t[Cp] = (e[aE] || 0) * i, void (t.shadowOffsetY = (e[oE] || 0) * i)
        }
        if (n == dH[fE]) {
          if (!e[uE]) return;
          t[yf] = e[rE];
          var r = s[hf] || 0;
          s[cE] && (r += 2 * s.outline), t[hf] = e[uE] + r, this._lt(t), t[zo]()
        }
      }
    }, _6h: !0, _fy: null, _j4: 0, lineCap: Wx, lineJoin: $o, draw: function (t, i, n, e, s) {
      t[vd] = n.lineCap || this.lineCap, t[_E] = n.lineJoin || this[_E], e && (s || (s = n), this._82(t, i, s.selectionType, s, n));
      var r = e && s[dE] == dH[hp];
      n[lE] && (this._lt(t), t[hf] = n[hf] + 2 * (n.outline || 0), t[yf] = n[lE], t[zo](), r && (r = !1, t[bd] = vE)), t[hf] = 0, this._lt(t), n.fillColor && (t.fillStyle = n.renderColor || n[bE], t.fill()), n[yE] && (t[_f] = n[gE] || n.fillGradient, t[lf]()), n[hf] && (t.lineWidth = n[hf], n.lineDash && (n.lineFillColor && (t.strokeStyle = n[xE], t.stroke(), r && (t[bd] = vE)), t.lineCap = n.lineDashCap || t.lineCap, t.lineJoin = n.lineDashJoin || t[_E], t[ku] = n[ku], t.lineDashOffset = n.lineDashOffset), t[yf] = n[yp] || n.strokeStyle, t[zo](), t[ku] = [])
    }, _lt: function (t) {
      t.beginPath();
      for (var i, n, e = 0, s = this._fy[rh]; s > e; e++) i = this._fy[e], pH._lt(t, i, n), n = i
    }, invalidate: function () {
      this._6h = !0
    }, validate: function () {
      if (this._6h = !1, this.bounds[yu](), this._j4 = 0, 0 != this._fy[rh]) for (var t, i, n = this._fy, e = 1, s = n[0], r = s, h = n[rh]; h > e; e++) t = n[e], t.type == GH ? r = t : (pH._5m(this.bounds, t, s, r), i = pH._5n(t, s, r), t._j4 = i, this._j4 += i), s = t
    }, getBounds: function (t, i) {
      if (this._6h && this.validate(), i = i || new hY, t) {
        var n = t / 2;
        i.set(this[No].x - n, this[No].y - n, this[No][da] + t, this[No][no] + t)
      } else i.set(this[No].x, this.bounds.y, this[No][da], this[No][no]);
      return i
    }, hitTest: function (t, i, n, e, s, r) {
      return _n[hh](this, t, i, n, e, s, r)
    }, toSegments: function () {
      return [][uh](this._fy)
    }, generator: function (t, i, n, e, s) {
      return cn[hh](this, t, i, n, e, s)
    }, getLocation: function (t, i) {
      return dn[hh](this, t, i || 0)
    }
  }, K(ZH[bh], {
    segments: {
      get: function () {
        return this._fy
      }, set: function (t) {
        this[yu](), this._fy = t
      }
    }, length: {
      get: function () {
        return this._6h && this.validate(), this._j4
      }
    }, _empty: {
      get: function () {
        return 0 == this._fy[rh]
      }
    }
  }), Rn[bh] = {
    _13: function (t, i) {
      var n, e, s, r, h, a = t[rh], o = 0, f = 0;
      for (h = 0; a > h; h += 4) if (t[h + 3] > 0) {
        n = (h + 4) / i / 4 | 0;
        break
      }
      for (h = a - 4; h >= 0; h -= 4) if (t[h + 3] > 0) {
        e = (h + 4) / i / 4 | 0;
        break
      }
      for (o = 0; i > o; o++) {
        for (f = n; e > f; f++) if (t[f * i * 4 + 4 * o + 3] > 0) {
          s = o;
          break
        }
        if (s >= 0) break
      }
      for (o = i - 1; o >= 0; o--) {
        for (f = n; e > f; f++) if (t[f * i * 4 + 4 * o + 3] > 0) {
          r = o;
          break
        }
        if (r >= 0) break
      }
      this._x = s, this._y = n, this._width = r - s + 1, this._height = e - n + 1, this._jk = new hY(s, n, this[Pp], this._height), this._pixelSize = this._width * this[Ap], this[pE] = i, this._originalPixels = t
    }, _ey: function (t, i) {
      return this._originalPixels[4 * (t + this._x + (this._y + i) * this[pE]) + 3]
    }, _i3: function (t, i, n) {
      (!n || 1 >= n) && (n = 1), n = 0 | n, t = Math[$o](t - this._x) - n, i = Math[$o](i - this._y) - n, n += n;
      for (var e = t, s = i; i + n > s;) {
        for (var e = t; t + n > e;) {
          if (this._ey(e, s)) return !0;
          ++e
        }
        ++s
      }
      return !1
    }
  }, dH.BLEND_MODE_DARKEN = EE, dH.BLEND_MODE_MULTIPLY = mE, dH[Bf] = wE, dH[TE] = kE, dH.BLEND_MODE_LIGHTEN = OE, dH[Ff] = ME, dH[IE] = SE, Jz.BLEND_MODE = dH[TE];
  var KH = function (t, i, n) {
    this._j9 = t, this[mo] = i || 1, this._i1 = n
  };
  KH.prototype = {
    scale: 1, _j9: null, _jc: null, _i1: !0, _lt: function (t, i, n) {
      if (i && (i = jn(i)), !i || this._i1 === !1) return void t.drawImage(this._j9, 0, 0);
      if (this._j9 instanceof Image) {
        var e = ji();
        e[da] = this._j9[da], e[no] = this._j9[no], e.g[pd](this._j9, 0, 0, this._j9.width, this._j9[no]), this._j9 = e
      }
      this._jc || (this._jc = {});
      var s = i + n, e = this._jc[s];
      if (e || (e = qn(this._j9, i, n), e || (this._i1 = !1), this._jc[s] = e || this._j9), e) if (qz) try {
        t[pd](e, 0, 0)
      } catch (r) {
      } else t[pd](e, 0, 0)
    }
  };
  var JH = function (t, i, n, e, s, r, h, a, o) {
    this._lw = Gn(t, i, n, e, s, r, h, a, o)
  }, QH = {
    server: {
      draw: function (t) {
        t[po](), t.translate(0, 0), t[ff](), t[bf](0, 0), t.lineTo(40, 0), t.lineTo(40, 40), t[vf](0, 40), t.closePath(), t[cf](), t.translate(0, 0), t[Eo](0, 0), t.scale(1, 1), t[Eo](0, 0), t.strokeStyle = vE, t[vd] = Wx, t.lineJoin = tp, t[PE] = 4, t[po](), t[po](), t[AE](), t.save(), t.restore(), t[po](), t[AE](), t[po](), t[AE](), t.save(), t.restore(), t[po](), t[AE](), t.save(), t.restore(), t.save(), t.restore(), t[po](), t[AE](), t.save(), t.restore(), t[po](), t.restore(), t[po](), t[AE](), t[po](), t.restore(), t.restore(), t[po]();
        var i = t.createLinearGradient(6.75, 3.9033, 30.5914, 27.7447);
        i.addColorStop(.0493, CE), i[Wp](.0689, LE), i[Wp](.0939, RE), i[Wp](.129, DE), i[Wp](.2266, jE), i.addColorStop(.2556, NE), i[Wp](.2869, qE), i.addColorStop(.3194, BE), i[Wp](.3525, $E), i[Wp](.3695, FE), i[Wp](.5025, GE), i.addColorStop(.9212, zE), i.addColorStop(1, YE), t[_f] = i, t[ff](), t[bf](25.677, 4.113), t[lp](25.361, 2.4410000000000007, 23.364, 2.7940000000000005, 22.14, 2.7990000000000004), t[lp](19.261, 2.813, 16.381, 2.8260000000000005, 13.502, 2.8400000000000003), t[lp](12.185, 2.846, 10.699000000000002, 2.652, 9.393, 2.8790000000000004), t.bezierCurveTo(9.19, 2.897, 8.977, 2.989, 8.805, 3.094), t[lp](8.084999999999999, 3.5109999999999997, 7.436999999999999, 4.1259999999999994, 6.776, 4.63), t.bezierCurveTo(5.718999999999999, 5.436, 4.641, 6.22, 3.6029999999999998, 7.05), t[lp](4.207, 6.5889999999999995, 21.601999999999997, 36.579, 21.028, 37.307), t[lp](22.019, 36.063, 23.009999999999998, 34.819, 24.000999999999998, 33.575), t[lp](24.587999999999997, 32.84, 25.589999999999996, 31.995000000000005, 25.593999999999998, 30.983000000000004), t[lp](25.595999999999997, 30.489000000000004, 25.598, 29.994000000000003, 25.601, 29.500000000000004), t[lp](25.612, 26.950000000000003, 25.622, 24.400000000000006, 25.633, 21.85), t.bezierCurveTo(25.657, 16.318, 25.680999999999997, 10.786000000000001, 25.704, 5.253), t[lp](25.706, 4.885, 25.749, 4.478, 25.677, 4.113), t.bezierCurveTo(25.67, 4.077, 25.697, 4.217, 25.677, 4.113), t.closePath(), t.fill(), t[zo](), t[AE](), t[po](), t.save(), t[_f] = HE, t.beginPath(), t[bf](19.763, 6.645), t[lp](20.002000000000002, 6.643999999999999, 20.23, 6.691999999999999, 20.437, 6.778), t[lp](20.644000000000002, 6.864999999999999, 20.830000000000002, 6.991, 20.985, 7.146999999999999), t[lp](21.14, 7.302999999999999, 21.266, 7.488999999999999, 21.352999999999998, 7.696999999999999), t[lp](21.438999999999997, 7.903999999999999, 21.487, 8.133, 21.487, 8.372), t[vf](21.398, 36.253), t[lp](21.397, 36.489, 21.349, 36.713, 21.262, 36.917), t[lp](21.174, 37.121, 21.048000000000002, 37.305, 20.893, 37.458), t.bezierCurveTo(20.738, 37.611, 20.553, 37.734, 20.348, 37.818999999999996), t[lp](20.141, 37.903999999999996, 19.916, 37.95099999999999, 19.679, 37.949), t.lineTo(4.675, 37.877), t[lp](4.4399999999999995, 37.876000000000005, 4.216, 37.827000000000005, 4.012, 37.741), t.bezierCurveTo(3.8089999999999997, 37.653999999999996, 3.6249999999999996, 37.528999999999996, 3.4719999999999995, 37.376), t.bezierCurveTo(3.3179999999999996, 37.221, 3.1939999999999995, 37.037, 3.1079999999999997, 36.833999999999996), t.bezierCurveTo(3.022, 36.629999999999995, 2.9739999999999998, 36.406, 2.9739999999999998, 36.172), t[vf](2.924, 8.431), t[lp](2.923, 8.192, 2.971, 7.964, 3.057, 7.758), t[lp](3.143, 7.552, 3.267, 7.365, 3.4219999999999997, 7.209), t[lp](3.5769999999999995, 7.052999999999999, 3.76, 6.925, 3.965, 6.837), t[lp](4.17, 6.749, 4.396, 6.701, 4.633, 6.7), t[vf](19.763, 6.645), t[Uf](), t.fill(), t.stroke(), t[AE](), t[AE](), t[po](), t.fillStyle = UE, t.beginPath(), t.arc(12.208, 26.543, 2.208, 0, 6.283185307179586, !0), t[Uf](), t[lf](), t[zo](), t.restore(), t.save(), t[_f] = HE, t[ff](), t.arc(12.208, 26.543, 1.876, 0, 6.283185307179586, !0), t[Uf](), t[lf](), t.stroke(), t[AE](), t[po](), t[_f] = UE, t.beginPath(), t.moveTo(19.377, 17.247), t[lp](19.377, 17.724, 18.991999999999997, 18.108999999999998, 18.516, 18.108999999999998), t[vf](5.882, 18.108999999999998), t[lp](5.404999999999999, 18.108999999999998, 5.02, 17.723, 5.02, 17.247), t.lineTo(5.02, 11.144), t[lp](5.02, 10.666, 5.406, 10.281, 5.882, 10.281), t[vf](18.516, 10.281), t[lp](18.993, 10.281, 19.377, 10.666, 19.377, 11.144), t[vf](19.377, 17.247), t.closePath(), t[lf](), t[zo](), t.restore(), t.save(), t[po](), t[_f] = HE, t.beginPath(), t[bf](18.536, 13.176),t[lp](18.536, 13.518, 18.261000000000003, 13.794, 17.919, 13.794),t[vf](6.479, 13.794),t[lp](6.1370000000000005, 13.794, 5.861, 13.518, 5.861, 13.176),t.lineTo(5.861, 11.84),t[lp](5.861, 11.498, 6.137, 11.221, 6.479, 11.221),t.lineTo(17.918, 11.221),t.bezierCurveTo(18.259999999999998, 11.221, 18.535, 11.497, 18.535, 11.84),t[vf](18.535, 13.176),t[Uf](),t.fill(),t[zo](),t.restore(),t.save(),t[_f] = HE,t[ff](),t[bf](18.536, 16.551),t[lp](18.536, 16.892999999999997, 18.261000000000003, 17.168999999999997, 17.919, 17.168999999999997),t[vf](6.479, 17.168999999999997),t[lp](6.1370000000000005, 17.168999999999997, 5.861, 16.892999999999997, 5.861, 16.551),t.lineTo(5.861, 15.215999999999998),t[lp](5.861, 14.872999999999998, 6.137, 14.596999999999998, 6.479, 14.596999999999998),t.lineTo(17.918, 14.596999999999998),t[lp](18.259999999999998, 14.596999999999998, 18.535, 14.872999999999998, 18.535, 15.215999999999998),t.lineTo(18.535, 16.551),t[Uf](),t.fill(),t.stroke(),t[AE](),t.restore(),t[AE]()
      }
    }, exchanger2: {
      draw: function (t) {
        t[po](), t.translate(0, 0), t[ff](), t[bf](0, 0), t.lineTo(40, 0), t[vf](40, 40), t.lineTo(0, 40), t[Uf](), t.clip(), t.translate(0, 0), t[Eo](0, 0), t[mo](1, 1), t.translate(0, 0), t[yf] = vE, t[vd] = Wx, t[_E] = tp, t[PE] = 4, t[po](), t.save(), t.restore(), t.save(), t[AE](), t.save(), t[AE](), t[po](), t[AE](), t[po](), t.restore(), t.save(), t.restore(), t[po](), t[AE](), t[po](), t[AE](), t.save(), t.restore(), t.save(), t.restore(), t[AE](), t.save();
        var i = t.createLinearGradient(.4102, 24.3613, 39.5898, 24.3613);
        i.addColorStop(0, CE), i.addColorStop(.0788, jE), i[Wp](.2046, WE), i.addColorStop(.3649, XE), i[Wp](.5432, VE), i.addColorStop(.6798, ZE), i[Wp](.7462, KE), i.addColorStop(.8508, JE), i[Wp](.98, NE), i[Wp](1, QE), t[_f] = i, t[ff](), t.moveTo(.41, 16.649), t.bezierCurveTo(.633, 19.767, .871, 20.689, 1.094, 23.807000000000002), t[lp](1.29, 26.548000000000002, 3.324, 28.415000000000003, 5.807, 29.711000000000002), t.bezierCurveTo(10.582, 32.202000000000005, 16.477, 32.806000000000004, 21.875999999999998, 32.523), t.bezierCurveTo(26.929, 32.258, 32.806, 31.197000000000003, 36.709999999999994, 27.992000000000004), t[lp](38.30499999999999, 26.728000000000005, 38.83599999999999, 25.103000000000005, 38.998999999999995, 23.161000000000005), t[lp](39.589, 16.135000000000005, 39.589, 16.135000000000005, 39.589, 16.135000000000005), t.bezierCurveTo(39.589, 16.135000000000005, 3.26, 16.647, .41, 16.649), t.closePath(), t[lf](), t.stroke(), t[AE](), t[po](), t[po](), t.fillStyle = HE, t.beginPath(), t.moveTo(16.4, 25.185), t.bezierCurveTo(12.807999999999998, 24.924999999999997, 9.139, 24.238, 5.857999999999999, 22.705), t[lp](3.175999999999999, 21.450999999999997, -.32200000000000095, 18.971999999999998, .544999999999999, 15.533999999999999), t.bezierCurveTo(1.3499999999999992, 12.335999999999999, 4.987999999999999, 10.495999999999999, 7.807999999999999, 9.428999999999998), t.bezierCurveTo(11.230999999999998, 8.133999999999999, 14.911999999999999, 7.519999999999999, 18.558, 7.345999999999998), t.bezierCurveTo(22.233, 7.169999999999998, 25.966, 7.437999999999998, 29.548000000000002, 8.300999999999998), t[lp](32.673, 9.052999999999999, 36.192, 10.296, 38.343, 12.814999999999998), t[lp](40.86600000000001, 15.768999999999998, 39.208000000000006, 19.066999999999997, 36.406000000000006, 21.043999999999997), t.bezierCurveTo(33.566, 23.046999999999997, 30.055000000000007, 24.071999999999996, 26.670000000000005, 24.676999999999996), t[lp](23.289, 25.28, 19.824, 25.436, 16.4, 25.185), t[lp](13.529, 24.977, 19.286, 25.396, 16.4, 25.185), t.closePath(), t[lf](), t[zo](), t[AE](), t[AE](), t[po](), t[po](), t.save(), t[po](), t[po](), t[_f] = tm, t.beginPath(), t.moveTo(5.21, 21.754), t.lineTo(8.188, 17.922), t.lineTo(9.53, 18.75), t[vf](15.956, 16.004), t[vf](18.547, 17.523), t[vf](12.074, 20.334), t.lineTo(13.464, 21.204), t[vf](5.21, 21.754), t[Uf](), t[lf](), t.stroke(), t[AE](), t[AE](), t.restore(), t[po](), t.save(), t[po](), t.fillStyle = tm, t.beginPath(), t[bf](17.88, 14.61), t[vf](9.85, 13.522), t.lineTo(11.703, 12.757), t[vf](7.436, 10.285), t[vf](10.783, 8.942), t[vf](15.091, 11.357), t.lineTo(16.88, 10.614), t[vf](17.88, 14.61), t.closePath(), t[lf](), t[zo](), t.restore(), t[AE](), t[po](), t[po](), t.fillStyle = tm, t[ff](), t[bf](17.88, 14.61), t.lineTo(9.85, 13.522), t.lineTo(11.703, 12.757), t.lineTo(7.436, 10.285), t[vf](10.783, 8.942), t.lineTo(15.091, 11.357), t[vf](16.88, 10.614), t[vf](17.88, 14.61), t[Uf](), t[lf](), t[zo](), t[AE](), t.restore(), t[AE](),t.save(),t[po](),t[po](),t[_f] = tm,t.beginPath(),t[bf](23.556, 15.339),t.lineTo(20.93, 13.879),t[vf](26.953, 11.304),t.lineTo(25.559, 10.567),t[vf](33.251, 9.909),t[vf](31.087, 13.467),t[vf](29.619, 12.703),t[vf](23.556, 15.339),t[Uf](),t.fill(),t[zo](),t[AE](),t.restore(),t.restore(),t.save(),t[po](),t[po](),t.fillStyle = tm,t[ff](),t.moveTo(30.028, 23.383),t.lineTo(24.821, 20.366),t[vf](22.915, 21.227),t[vf](21.669, 16.762),t[vf](30.189, 17.942),t.lineTo(28.33, 18.782),t[vf](33.579, 21.725),t[vf](30.028, 23.383),t[Uf](),t.fill(),t[zo](),t[AE](),t[AE](),t[po](),t.save(),t.fillStyle = tm,t[ff](),t[bf](30.028, 23.383),t.lineTo(24.821, 20.366),t[vf](22.915, 21.227),t[vf](21.669, 16.762),t[vf](30.189, 17.942),t[vf](28.33, 18.782),t.lineTo(33.579, 21.725),t.lineTo(30.028, 23.383),t[Uf](),t.fill(),t[zo](),t[AE](),t[AE](),t[AE](),t.restore(),t[AE](),t[AE]()
      }
    }, exchanger: {
      draw: function (t) {
        t.save(), t[Eo](0, 0), t.beginPath(), t[bf](0, 0), t[vf](40, 0), t.lineTo(40, 40), t[vf](0, 40), t.closePath(), t[cf](), t[Eo](0, 0), t.translate(0, 0), t[mo](1, 1), t[Eo](0, 0), t.strokeStyle = vE, t[vd] = Wx, t[_E] = tp, t[PE] = 4, t.save(), t.save(), t[AE](), t[po](), t[AE](), t.save(), t[AE](), t[po](), t[AE](), t[po](), t.restore(), t[po](), t.restore(), t[po](), t[AE](), t.restore(), t.save();
        var i = t[Hp](.2095, 20.7588, 39.4941, 20.7588);
        i[Wp](0, im), i[Wp](.0788, nm), i[Wp](.352, em), i[Wp](.6967, sm), i[Wp](.8916, rm), i[Wp](.9557, hm), i.addColorStop(1, am), t[_f] = i, t[ff](), t[bf](39.449, 12.417), t.lineTo(39.384, 9.424), t[lp](39.384, 9.424, .7980000000000018, 22.264, .3710000000000022, 23.024), t[lp](-.026999999999997804, 23.733, .4240000000000022, 24.903000000000002, .5190000000000022, 25.647000000000002), t.bezierCurveTo(.7240000000000022, 27.244000000000003, .9240000000000023, 28.841, 1.1350000000000022, 30.437), t[lp](1.3220000000000023, 31.843, 2.7530000000000023, 32.094, 3.9620000000000024, 32.094), t[lp](8.799000000000003, 32.092, 13.636000000000003, 32.091, 18.473000000000003, 32.089), t[lp](23.515, 32.086999999999996, 28.556000000000004, 32.086, 33.598, 32.083999999999996), t[lp](34.859, 32.083999999999996, 36.286, 31.979999999999997, 37.266, 31.081999999999997), t[lp](37.537, 30.820999999999998, 37.655, 30.535999999999998, 37.699999999999996, 30.229999999999997), t.lineTo(37.711, 30.316999999999997), t[vf](39.281, 16.498999999999995), t.bezierCurveTo(39.281, 16.498999999999995, 39.467999999999996, 15.126999999999995, 39.489, 14.666999999999994), t[lp](39.515, 14.105, 39.449, 12.417, 39.449, 12.417), t[Uf](), t[lf](), t[zo](), t[AE](), t[po](), t[po](), t[po](), t.save(), t[AE](), t[po](), t[AE](), t[po](), t[AE](), t.save(), t[AE](), t[po](), t.restore(), t[po](), t[AE](), t[po](), t[AE](), t.save(), t[AE](), t.save(), t.restore(), t[AE](), t[po]();
        var i = t.createLinearGradient(19.8052, 7.7949, 19.8052, 24.7632);
        i[Wp](0, om), i.addColorStop(.1455, fm), i.addColorStop(.2975, um), i.addColorStop(.4527, cm), i[Wp](.6099, _m), i.addColorStop(.7687, dm), i.addColorStop(.9268, lm), i[Wp](.9754, vm), i[Wp](1, bm), t[_f] = i, t[ff](), t[bf](33.591, 24.763), t[lp](23.868000000000002, 24.754, 14.145, 24.746000000000002, 4.423000000000002, 24.738000000000003), t[lp](3.140000000000002, 24.737000000000002, -.48799999999999777, 24.838000000000005, .3520000000000021, 22.837000000000003), t[lp](1.292000000000002, 20.594000000000005, 2.2330000000000023, 18.351000000000003, 3.1730000000000023, 16.108000000000004), t.bezierCurveTo(4.113000000000002, 13.865000000000006, 5.054000000000002, 11.623000000000005, 5.994000000000002, 9.380000000000004), t.bezierCurveTo(6.728000000000002, 7.629000000000005, 9.521000000000003, 7.885000000000004, 11.156000000000002, 7.880000000000004), t[lp](16.974000000000004, 7.861000000000004, 22.793000000000003, 7.843000000000004, 28.612000000000002, 7.825000000000005), t.bezierCurveTo(30.976000000000003, 7.818000000000005, 33.341, 7.810000000000005, 35.707, 7.803000000000004), t[lp](36.157000000000004, 7.802000000000004, 36.609, 7.787000000000004, 37.06, 7.804000000000005), t[lp](37.793, 7.833000000000005, 39.389, 7.875000000000004, 39.385000000000005, 9.424000000000005), t[lp](39.38400000000001, 9.647000000000006, 39.31, 10.138000000000005, 39.27700000000001, 10.359000000000005), t[lp](38.81900000000001, 13.361000000000004, 38.452000000000005, 15.764000000000006, 37.99400000000001, 18.766000000000005), t[lp](37.806000000000004, 19.998000000000005, 37.61800000000001, 21.230000000000004, 37.43000000000001, 22.462000000000007), t[lp](37.151, 24.271, 35.264, 24.77, 33.591, 24.763), t[Uf](), t.fill(), t[zo](), t.restore(), t.restore(), t.restore(), t[po](), t.save(), t[po](), t.fillStyle = tm, t[ff](), t[bf](10.427, 19.292), t[vf](5.735, 16.452), t[vf](12.58, 13.8), t[vf](12.045, 15.07), t.lineTo(20.482, 15.072), t[vf](19.667, 17.887), t[vf](11.029, 17.851), t[vf](10.427, 19.292), t[Uf](), t[lf](), t.stroke(), t.restore(), t[AE](), t.save(), t[po](), t[_f] = tm, t[ff](), t[bf](13.041, 13.042), t[vf](8.641, 10.73), t[vf](14.82, 8.474), t[vf](14.373, 9.537), t.lineTo(22.102, 9.479), t.lineTo(21.425, 11.816), t.lineTo(13.54, 11.85), t[vf](13.041, 13.042), t[Uf](), t[lf](), t[zo](), t.restore(), t[AE](), t.save(), t[po](), t[_f] = tm, t[ff](), t[bf](29.787, 16.049), t.lineTo(29.979, 14.704), t[vf](21.51, 14.706), t[vf](22.214, 12.147), t[vf](30.486, 12.116), t.lineTo(30.653, 10.926), t[vf](36.141, 13.4), t[vf](29.787, 16.049), t.closePath(), t.fill(), t[zo](), t[AE](), t.restore(), t[po](), t[po](), t.fillStyle = tm, t[ff](), t.moveTo(28.775, 23.14), t[vf](29.011, 21.49), t[vf](19.668, 21.405), t.lineTo(20.523, 18.295), t[vf](29.613, 18.338), t.lineTo(29.815, 16.898), t.lineTo(35.832, 19.964), t[vf](28.775, 23.14), t[Uf](), t[lf](), t[zo](), t[AE](), t[AE](), t[AE](),t[AE]()
      }
    }, cloud: {
      draw: function (t) {
        t[po](), t.beginPath(), t[bf](0, 0), t[vf](90.75, 0), t.lineTo(90.75, 62.125), t.lineTo(0, 62.125), t[Uf](), t[cf](), t.strokeStyle = vE, t[vd] = Wx, t[_E] = tp, t[PE] = 4, t[po]();
        var i = t[Hp](44.0054, 6.4116, 44.0054, 51.3674);
        i[Wp](0, "rgba(159, 160, 160, 0.7)"), i[Wp](.9726, ym), t[_f] = i, t.beginPath(), t[bf](57.07, 20.354), t.bezierCurveTo(57.037, 20.354, 57.006, 20.358, 56.974000000000004, 20.358), t[lp](54.461000000000006, 14.308, 48.499, 10.049000000000001, 41.538000000000004, 10.049000000000001), t.bezierCurveTo(33.801, 10.049000000000001, 27.309000000000005, 15.316000000000003, 25.408000000000005, 22.456000000000003), t[lp](18.988000000000007, 23.289, 14.025000000000006, 28.765000000000004, 14.025000000000006, 35.413000000000004), t[lp](14.025000000000006, 42.635000000000005, 19.880000000000006, 48.49, 27.102000000000004, 48.49), t[lp](29.321000000000005, 48.49, 31.407000000000004, 47.933, 33.237, 46.961), t[lp](34.980000000000004, 49.327, 37.78, 50.867999999999995, 40.945, 50.867999999999995), t[lp](43.197, 50.867999999999995, 45.261, 50.086, 46.896, 48.785999999999994), t[lp](49.729, 50.78699999999999, 53.244, 51.98799999999999, 57.07, 51.98799999999999), t[lp](66.412, 51.98799999999999, 73.986, 44.90699999999999, 73.986, 36.17099999999999), t.bezierCurveTo(73.986, 27.436, 66.413, 20.354, 57.07, 20.354), t[Uf](), t.fill(), t[zo](), t.restore(), t[AE]()
      }
    }, node: {
      width: 60, height: 100, draw: function (t) {
        t.save(), t[Eo](0, 0), t[ff](), t.moveTo(0, 0), t.lineTo(40, 0), t.lineTo(40, 40), t.lineTo(0, 40), t[Uf](), t[cf](), t[Eo](0, 0), t[Eo](0, 0), t.scale(1, 1), t[Eo](0, 0), t[yf] = vE, t[vd] = Wx, t.lineJoin = tp, t[PE] = 4, t.save(), t[_f] = gm, t[ff](), t[bf](13.948, 31.075), t[vf](25.914, 31.075), t[dp](25.914, 31.075, 25.914, 31.075), t.lineTo(25.914, 34.862), t.quadraticCurveTo(25.914, 34.862, 25.914, 34.862), t[vf](13.948, 34.862), t[dp](13.948, 34.862, 13.948, 34.862), t[vf](13.948, 31.075), t[dp](13.948, 31.075, 13.948, 31.075), t[Uf](), t.fill(), t[zo](), t[AE](), t[po](), t[_f] = xm, t[ff](), t.moveTo(29.679, 35.972), t[lp](29.679, 36.675000000000004, 29.110999999999997, 37.244, 28.407999999999998, 37.244), t.lineTo(11.456, 37.244), t.bezierCurveTo(10.751999999999999, 37.244, 10.183, 36.675, 10.183, 35.972), t[vf](10.183, 36.136), t.bezierCurveTo(10.183, 35.431000000000004, 10.751999999999999, 34.863, 11.456, 34.863), t.lineTo(28.407, 34.863), t[lp](29.11, 34.863, 29.678, 35.431, 29.678, 36.136), t[vf](29.678, 35.972), t[Uf](), t.fill(), t[zo](), t[AE](), t.save(), t[_f] = xm, t.beginPath(), t[bf](.196, 29.346), t[lp](.196, 30.301, .9690000000000001, 31.075, 1.925, 31.075), t.lineTo(37.936, 31.075), t[lp](38.891, 31.075, 39.665, 30.301, 39.665, 29.346), t.lineTo(39.665, 27.174), t[vf](.196, 27.174), t.lineTo(.196, 29.346), t[Uf](), t.fill(), t[zo](), t[AE](), t[po](), t[_f] = pm, t.beginPath(), t.moveTo(37.937, 3.884), t[vf](1.926, 3.884), t[lp](.97, 3.884, .19699999999999984, 4.657, .19699999999999984, 5.614), t.lineTo(.19699999999999984, 27.12), t[vf](39.666000000000004, 27.12), t.lineTo(39.666000000000004, 5.615), t[lp](39.665, 4.657, 38.892, 3.884, 37.937, 3.884), t[Uf](), t[lf](), t[zo](), t[AE](), t.save(), t[po](), t[AE](), t[po](), t.restore(), t[AE](), t[po]();
        var i = t[Hp](6.9609, 2.9341, 32.9008, 28.874);
        i.addColorStop(0, Em), i[Wp](1, mm), t.fillStyle = i, t.beginPath(), t[bf](35.788, 6.39), t[vf](4.074, 6.39), t[lp](3.315, 6.39, 2.702, 7.003, 2.702, 7.763), t[vf](2.702, 24.616), t[vf](37.159, 24.616), t[vf](37.159, 7.763), t[lp](37.159, 7.003, 36.546, 6.39, 35.788, 6.39), t[Uf](), t[lf](), t[zo](), t[AE](), t[AE]()
      }
    }, group: {
      draw: function (t) {
        t[po](), t.translate(0, 0), t[ff](), t.moveTo(0, 0), t[vf](47.75, 0), t[vf](47.75, 40), t.lineTo(0, 40), t.closePath(), t.clip(), t.translate(0, 0), t.translate(0, 0), t[mo](1, 1), t[Eo](0, 0), t.strokeStyle = vE, t[vd] = Wx, t[_E] = tp, t[PE] = 4, t[po](), t[po](), t[_f] = gm, t[ff](), t.moveTo(10.447, 26.005), t[vf](18.847, 26.005), t[dp](18.847, 26.005, 18.847, 26.005), t[vf](18.847, 28.663), t[dp](18.847, 28.663, 18.847, 28.663), t[vf](10.447, 28.663), t[dp](10.447, 28.663, 10.447, 28.663), t[vf](10.447, 26.005), t.quadraticCurveTo(10.447, 26.005, 10.447, 26.005), t[Uf](), t[lf](), t[zo](), t[AE](), t[po](), t[_f] = xm, t[ff](), t[bf](21.491, 29.443), t[lp](21.491, 29.935000000000002, 21.094, 30.338, 20.597, 30.338), t[vf](8.698, 30.338), t[lp](8.201, 30.338, 7.8020000000000005, 29.936, 7.8020000000000005, 29.443), t[vf](7.8020000000000005, 29.557000000000002), t[lp](7.8020000000000005, 29.063000000000002, 8.201, 28.662000000000003, 8.698, 28.662000000000003), t[vf](20.597, 28.662000000000003), t[lp](21.093, 28.662000000000003, 21.491, 29.062, 21.491, 29.557000000000002), t[vf](21.491, 29.443), t[Uf](), t[lf](), t.stroke(), t.restore(), t[po](), t[_f] = xm, t.beginPath(), t.moveTo(.789, 24.79), t[lp](.789, 25.461, 1.334, 26.005, 2.0060000000000002, 26.005), t[vf](27.289, 26.005), t[lp](27.961000000000002, 26.005, 28.504, 25.461, 28.504, 24.79), t[vf](28.504, 23.267), t[vf](.789, 23.267), t[vf](.789, 24.79), t[Uf](), t[lf](), t[zo](), t[AE](), t.save(), t.fillStyle = pm, t[ff](), t[bf](27.289, 6.912), t[vf](2.006, 6.912), t[lp](1.3339999999999996, 6.912, .7889999999999997, 7.455, .7889999999999997, 8.126), t.lineTo(.7889999999999997, 23.227), t[vf](28.503999999999998, 23.227), t.lineTo(28.503999999999998, 8.126), t.bezierCurveTo(28.504, 7.455, 27.961, 6.912, 27.289, 6.912), t.closePath(), t[lf](), t[zo](), t[AE](), t.save(), t[po](), t[AE](), t.save(), t[AE](), t[AE](), t.save();
        var i = t[Hp](5.54, 6.2451, 23.7529, 24.458);
        i[Wp](0, Em), i[Wp](1, mm), t.fillStyle = i, t[ff](), t[bf](25.78, 8.671), t.lineTo(3.514, 8.671), t[lp](2.9819999999999998, 8.671, 2.549, 9.101999999999999, 2.549, 9.635), t[vf](2.549, 21.466), t[vf](26.743, 21.466), t[vf](26.743, 9.636), t[lp](26.743, 9.102, 26.312, 8.671, 25.78, 8.671), t[Uf](), t[lf](), t.stroke(), t[AE](), t[AE](), t[po](), t.save(), t[_f] = gm, t[ff](), t[bf](27.053, 33.602), t[vf](36.22, 33.602), t[dp](36.22, 33.602, 36.22, 33.602), t.lineTo(36.22, 36.501), t[dp](36.22, 36.501, 36.22, 36.501), t.lineTo(27.053, 36.501), t[dp](27.053, 36.501, 27.053, 36.501), t.lineTo(27.053, 33.602), t[dp](27.053, 33.602, 27.053, 33.602), t[Uf](), t.fill(), t[zo](), t[AE](), t[po](), t[_f] = xm, t.beginPath(), t[bf](39.104, 37.352), t.bezierCurveTo(39.104, 37.891, 38.67, 38.327, 38.13, 38.327), t[vf](25.143, 38.327), t[lp](24.602, 38.327, 24.166, 37.891, 24.166, 37.352), t.lineTo(24.166, 37.477999999999994), t.bezierCurveTo(24.166, 36.937, 24.602, 36.501, 25.143, 36.501), t[vf](38.131, 36.501), t[lp](38.671, 36.501, 39.105, 36.937, 39.105, 37.477999999999994), t[vf](39.105, 37.352), t.closePath(), t[lf](), t[zo](), t[AE](), t[po](), t[_f] = xm, t[ff](), t.moveTo(16.514, 32.275), t[lp](16.514, 33.004999999999995, 17.107, 33.601, 17.839, 33.601), t[vf](45.433, 33.601), t[lp](46.166, 33.601, 46.758, 33.005, 46.758, 32.275), t.lineTo(46.758, 30.607999999999997), t[vf](16.514, 30.607999999999997), t[vf](16.514, 32.275), t.closePath(), t.fill(), t.stroke(), t.restore(), t[po](), t[_f] = pm, t[ff](), t[bf](45.433, 12.763), t[vf](17.839, 12.763), t[lp](17.107, 12.763, 16.514, 13.356, 16.514, 14.089), t[vf](16.514, 30.57), t.lineTo(46.757999999999996, 30.57), t.lineTo(46.757999999999996, 14.088), t.bezierCurveTo(46.758, 13.356, 46.166, 12.763, 45.433, 12.763), t[Uf](), t[lf](), t.stroke(), t.restore(), t.save(), t[po](), t[AE](), t[po](), t.restore(), t[AE](), t[po](), i = t.createLinearGradient(21.6973, 12.0352, 41.5743, 31.9122), i[Wp](0, Em), i[Wp](1, mm), t.fillStyle = i, t[ff](), t[bf](43.785, 14.683), t.lineTo(19.486, 14.683), t[lp](18.903000000000002, 14.683, 18.433, 15.153, 18.433, 15.735), t.lineTo(18.433, 28.649), t[vf](44.837, 28.649), t[vf](44.837, 15.734), t.bezierCurveTo(44.838, 15.153, 44.367, 14.683, 43.785, 14.683), t[Uf](), t[lf](), t[zo](), t.restore(), t[AE](),t.save(),t.globalAlpha = .5,t[ff](),t[bf](23.709, 36.33),t[vf](4.232, 36.33),t[vf](4.232, 27.199),t[vf](5.304, 27.199),t[vf](5.304, 35.259),t.lineTo(23.709, 35.259),t.lineTo(23.709, 36.33),t.closePath(),t[lf](),t.stroke(),t[AE](),t[AE]()
      }
    }, subnetwork: {
      draw: function (t) {
        t[po](), t.translate(0, 0), t.beginPath(), t[bf](0, 0), t.lineTo(60.75, 0), t[vf](60.75, 42.125), t.lineTo(0, 42.125), t[Uf](), t[cf](), t.translate(0, .26859504132231393), t.scale(.6694214876033058, .6694214876033058), t[Eo](0, 0), t[yf] = vE, t.lineCap = Wx, t.lineJoin = tp, t[PE] = 4, t.save(), t[po](), t[AE](), t[po](), t[AE](), t[AE](), t[po]();
        var i = t[Hp](43.6724, -2.7627, 43.6724, 59.3806);
        i[Wp](0, "rgba(159, 160, 160, 0.7)"), i[Wp](.9726, ym), t.fillStyle = i, t[ff](), t[bf](61.732, 16.509), t.bezierCurveTo(61.686, 16.509, 61.644, 16.515, 61.599, 16.515), t[lp](58.126, 8.152000000000001, 49.884, 2.2650000000000006, 40.262, 2.2650000000000006), t[lp](29.567, 2.2650000000000006, 20.594, 9.545000000000002, 17.966, 19.415), t[lp](9.09, 20.566, 2.229, 28.136, 2.229, 37.326), t[lp](2.229, 47.309, 10.322, 55.403000000000006, 20.306, 55.403000000000006), t.bezierCurveTo(23.374000000000002, 55.403000000000006, 26.257, 54.633, 28.787, 53.28900000000001), t.bezierCurveTo(31.197, 56.56000000000001, 35.067, 58.69000000000001, 39.442, 58.69000000000001), t.bezierCurveTo(42.555, 58.69000000000001, 45.408, 57.60900000000001, 47.669, 55.81200000000001), t[lp](51.586, 58.57800000000001, 56.443999999999996, 60.238000000000014, 61.732, 60.238000000000014), t.bezierCurveTo(74.64699999999999, 60.238000000000014, 85.116, 50.45000000000002, 85.116, 38.37400000000001), t[lp](85.116, 26.298, 74.646, 16.509, 61.732, 16.509), t[Uf](), t[lf](), t.stroke(), t.restore(), t.save(), t.save(), t.fillStyle = gm, t.beginPath(), t[bf](34.966, 44.287), t[vf](45.112, 44.287), t[dp](45.112, 44.287, 45.112, 44.287), t[vf](45.112, 47.497), t.quadraticCurveTo(45.112, 47.497, 45.112, 47.497), t.lineTo(34.966, 47.497), t[dp](34.966, 47.497, 34.966, 47.497), t.lineTo(34.966, 44.287), t.quadraticCurveTo(34.966, 44.287, 34.966, 44.287), t[Uf](), t[lf](), t[zo](), t[AE](), t[po](), t.fillStyle = wm, t.beginPath(), t[bf](48.306, 48.439), t.bezierCurveTo(48.306, 49.034, 47.824999999999996, 49.52, 47.226, 49.52), t[vf](32.854, 49.52), t[lp](32.253, 49.52, 31.771, 49.034000000000006, 31.771, 48.439), t[vf](31.771, 48.578), t[lp](31.771, 47.981, 32.253, 47.497, 32.854, 47.497), t.lineTo(47.226, 47.497), t[lp](47.824999999999996, 47.497, 48.306, 47.98, 48.306, 48.578), t[vf](48.306, 48.439), t[Uf](), t[lf](), t[zo](), t[AE](), t.save(), t[_f] = Tm, t.beginPath(), t[bf](23.302, 42.82), t.bezierCurveTo(23.302, 43.63, 23.96, 44.287, 24.772, 44.287), t[vf](55.308, 44.287), t[lp](56.12, 44.287, 56.775, 43.629999999999995, 56.775, 42.82), t[vf](56.775, 40.98), t[vf](23.302, 40.98), t[vf](23.302, 42.82), t[Uf](), t[lf](), t[zo](), t[AE](), t.save(), t[_f] = pm, t[ff](), t[bf](55.307, 21.229), t[vf](24.771, 21.229), t[lp](23.959, 21.229, 23.301000000000002, 21.884, 23.301000000000002, 22.695), t.lineTo(23.301000000000002, 40.933), t[vf](56.774, 40.933), t.lineTo(56.774, 22.695), t[lp](56.774, 21.884, 56.119, 21.229, 55.307, 21.229), t[Uf](), t.fill(), t[zo](), t.restore(), t.save(), t[po](), t[AE](), t[po](), t[AE](), t[AE](), t[po](), i = t[Hp](29.04, 20.4219, 51.0363, 42.4181), i.addColorStop(0, Em), i[Wp](1, mm), t[_f] = i, t[ff](), t[bf](53.485, 23.353), t[vf](26.592, 23.353), t[lp](25.948999999999998, 23.353, 25.427, 23.873, 25.427, 24.517000000000003), t[vf](25.427, 38.807), t[vf](54.647, 38.807), t.lineTo(54.647, 24.517000000000003), t[lp](54.648, 23.873, 54.127, 23.353, 53.485, 23.353), t[Uf](),t[lf](),t[zo](),t[AE](),t.restore(),t[AE]()
      }
    }
  };
  for (var tU in QH) kn(km + tU, QH[tU]);
  var iU = function () {
    this[Tu] = !1;
    var t = this._fp;
    t[yu]();
    var i = this[ru] || 0, n = this._8d.x + i / 2, e = this._8d.y + i / 2, s = this._8d[da] - i, r = this._8d[no] - i,
      h = Zn[hh](this, {x: n, y: e});
    te(t, h.x, h.y, !0), h = Zn[hh](this, {x: n + s, y: e}), te(t, h.x, h.y), h = Zn[hh](this, {
      x: n + s,
      y: e + r
    }), te(t, h.x, h.y), h = Zn.call(this, {
      x: n,
      y: e + r
    }), te(t, h.x, h.y), this[bu] && (h = Zn.call(this, {
      x: this[du],
      y: this[lu]
    }), te(t, h.x, h.y)), i && t.grow(i / 2)
  }, nU = 20, eU = {
    _g7: !1, _k6: null, _dd: 0, _ky: -1, _kk: null, _f9: function (t) {
      this._k6 || (this._k6 = [], this._j7 = PH), this._k6.push(t), this._f7(), this._ku()
    }, _ku: function () {
      if (!this._kk) {
        var t = this;
        this._kk = setTimeout(function i() {
          return t._f7() !== !1 ? void (t._kk = setTimeout(i, t._gg())) : void delete t._kk
        }, this._gg())
      }
    }, _gg: function () {
      return Math.max(nU, this._k6[this._ky].delay)
    }, _f7: function () {
      return this._gl(this._ky + 1)
    }, _gl: function (t) {
      if (this._g7) t %= this._dd; else if (t >= this._k6[rh]) return !1;
      if (this._ky == t) return !1;
      this._ky = t;
      var i = this._k6[this._ky], n = i[Om];
      return n || (i[Om] = n = ji(this[da], this[no]), n.g[Gf](i[Yo], 0, 0), n[Tp] = i[Tp]), this._kw = n, this[iu] = !0, this._eg()
    }, _n84: function () {
      return this._k6 ? (this._g7 = !0, this._dd = this._k6[rh], 1 == this._dd ? this._eg() : void this._ku()) : void this._i0()
    }, _ls: function () {
      this._kk && (clearTimeout(this._kk), delete this._kk)
    }, _eg: function () {
      var t = this[pp][Rv];
      if (!t || !t[rh]) return !1;
      for (var i = new yY(this, Bp, $p, this._kw), n = 0, e = t.length; e > n; n++) {
        var s = t[n];
        s[Dv]._jq && s[Dv]._jq[Mm] ? (t[fh](n, 1), n--, e--) : s[kh].call(s[Dv], i)
      }
      return t[rh] > 0
    }, _n7n: function (t, i) {
      this[pp][sl](t, i), this._g7 && !this._kk && this._ku()
    }, _75: function (t, i) {
      this[pp][jv](t, i), this[pp][Im]() || this._ls()
    }, _in: function () {
      this._ls(), this[pp].clear()
    }, _fl: function () {
      var t = this._kw[Sm];
      return t || (this._kw._n9ufferedImage = t = new KH(this._kw, 1)), t
    }
  }, sU = function (t) {
    return t[Pm](function (t, i) {
      return 2 * t + i
    }, 0)
  }, rU = function (t) {
    for (var i = [], n = 7; n >= 0; n--) i[dh](!!(t & 1 << n));
    return i
  }, hU = function (t) {
    this[Yo] = t, this.len = this[Yo].length, this.pos = 0, this.readByte = function () {
      if (this.pos >= this[Yo].length) throw new Error("Attempted to read past end of stream.");
      return 255 & t[Yu](this.pos++)
    }, this.readBytes = function (t) {
      for (var i = [], n = 0; t > n; n++) i[dh](this[Am]());
      return i
    }, this[Cm] = function (t) {
      for (var i = "", n = 0; t > n; n++) i += String.fromCharCode(this[Am]());
      return i
    }, this[Lm] = function () {
      var t = this[Rm](2);
      return (t[1] << 8) + t[0]
    }
  }, aU = function (t, i, n) {
    for (var e, s, r = 0, h = function (t) {
      for (var n = 0, e = 0; t > e; e++) i[Yu](r >> 3) & 1 << (7 & r) && (n |= 1 << e), r++;
      return n
    }, a = [], o = 1 << t, f = o + 1, u = t + 1, c = [], _ = function () {
      c = [], u = t + 1;
      for (var i = 0; o > i; i++) c[i] = [i];
      c[o] = [], c[f] = null
    }, d = 0; s = e, e = h(u), !(d++ > n);) if (e !== o) {
      if (e === f) break;
      if (e < c.length) s !== o && c[dh](c[s].concat(c[e][0])); else {
        if (e !== c[rh]) throw new Error(Dm);
        c[dh](c[s].concat(c[s][0]))
      }
      a[dh].apply(a, c[e]), c.length === 1 << u && 12 > u && u++
    } else _();
    return a
  }, oU = function (t, i) {
    i || (i = {});
    var n = function (i) {
      for (var n = [], e = 0; i > e; e++) n.push(t.readBytes(3));
      return n
    }, e = function () {
      var i, n;
      n = "";
      do i = t[Am](), n += t.read(i); while (0 !== i);
      return n
    }, s = function () {
      var e = {};
      if (e.sig = t[Cm](3), e.ver = t[Cm](3), jm !== e.sig) throw new Error(Nm);
      e.width = t.readUnsigned(), e[no] = t.readUnsigned();
      var s = rU(t.readByte());
      e[qm] = s[Bm](), e[$m] = sU(s[fh](0, 3)), e.sorted = s[Bm](), e.gctSize = sU(s.splice(0, 3)), e[Fm] = t[Am](), e[Gm] = t[Am](), e[qm] && (e.gct = n(1 << e[zm] + 1)), i.hdr && i.hdr(e)
    }, r = function (n) {
      var s = function (n) {
        var e = (t[Am](), rU(t[Am]()));
        n[Ym] = e[fh](0, 3), n.disposalMethod = sU(e[fh](0, 3)), n.userInput = e.shift(), n[Lu] = e.shift(), n[Hm] = t.readUnsigned(), n[Um] = t[Am](), n.terminator = t.readByte(), i.gce && i.gce(n)
      }, r = function (t) {
        t[Wm] = e(), i.com && i.com(t)
      }, h = function (n) {
        t.readByte(), n.ptHeader = t.readBytes(12), n.ptData = e(), i.pte && i.pte(n)
      }, a = function (n) {
        var s = function (n) {
          t.readByte(), n.unknown = t.readByte(), n[Xm] = t.readUnsigned(), n[Vm] = t[Am](), i.app && i.app[Zm] && i.app[Zm](n)
        }, r = function (t) {
          t[Km] = e(), i.app && i.app[t[Jm]] && i.app[t[Jm]](t)
        };
        switch (t.readByte(), n[Jm] = t.read(8), n.authCode = t[Cm](3), n[Jm]) {
          case"NETSCAPE":
            s(n);
            break;
          default:
            r(n)
        }
      }, o = function (t) {
        t.data = e(), i[Qm] && i[Qm](t)
      };
      switch (n.label = t[Am](), n[tw]) {
        case 249:
          n[iw] = nw, s(n);
          break;
        case 254:
          n[iw] = ew, r(n);
          break;
        case 1:
          n[iw] = sw, h(n);
          break;
        case 255:
          n[iw] = rw, a(n);
          break;
        default:
          n[iw] = Qm, o(n)
      }
    }, h = function (s) {
      var r = function (t, i) {
        for (var n = new Array(t.length), e = t.length / i, s = function (e, s) {
          var r = t.slice(s * i, (s + 1) * i);
          n[fh][xh](n, [e * i, i][uh](r))
        }, r = [0, 4, 2, 1], h = [8, 8, 4, 2], a = 0, o = 0; 4 > o; o++) for (var f = r[o]; e > f; f += h[o]) s(f, a), a++;
        return n
      };
      s.leftPos = t[Lm](), s[Du] = t[Lm](), s[da] = t[Lm](), s.height = t.readUnsigned();
      var h = s.width * s[no], a = rU(t[Am]());
      s[hw] = a.shift(), s.interlaced = a[Bm](), s[aw] = a[Bm](), s[Ym] = a[fh](0, 2), s.lctSize = sU(a[fh](0, 3)), s[hw] && (s.lct = n(1 << s.lctSize + 1)), s[ow] = t[Am]();
      var o = e();
      s[ju] = aU(s[ow], o, h), s[fw] && (s.pixels = r(s[ju], s[da])), i.img && i.img(s)
    }, a = function () {
      var n = {};
      switch (n.sentinel = t.readByte(), String.fromCharCode(n[uw])) {
        case"!":
          n[Xo] = cw, r(n);
          break;
        case",":
          n[Xo] = W_, h(n);
          break;
        case";":
          n[Xo] = _w, i.eof && i.eof(n);
          break;
        default:
          throw new Error(dw + n[uw].toString(16))
      }
      _w !== n.type && setTimeout(a, 0)
    }, o = function () {
      s(), setTimeout(a, 0)
    };
    o()
  }, fU = "";
  i.addEventListener && i[Ib](lw, function (t) {
    if (t[vw] && t[bw] && t[yw] && 73 == t[gw]) {
      var i = _H.name + xw + _H.version + pw + _H[Ew] + Oo + _H[mw] + Oo + _H[ww] + fU;
      _H.alert(i)
    }
  }, !1);
  var uU = Tw;
  fU = kw + decodeURIComponent(Ow);
  var cU, _U, dU, lU = t, vU = Mw, bU = Iw, yU = Sw, gU = Pw, xU = Aw, pU = Cw, EU = Lw, mU = Rw, wU = Dw, TU = jw,
    kU = Nw, OU = qw, MU = Bw, IU = $w, SU = Eh, PU = Fw, AU = Gw, CU = zw, LU = Yw, RU = Hw, DU = Uw, jU = lU[gU + Ww];
  jU && (_U = lU[IU + Xw][xU + Vw], jU[hh](lU, ae, PU), jU.call(lU, oe, LU), jU[hh](lU, function () {
    qU && qU == uU && (WU = !1)
  }, AU));
  var NU, qU, BU, $U = 111, FU = function (t, i) {
    i || (i = Zw + bU + Kw);
    try {
      dU[hh](t, i, 6 * $U, 1 * $U)
    } catch (n) {
    }
  }, GU = !0, zU = !0, YU = !0, HU = !0, UU = !0, WU = !0, XU = 2048, VU = function (t, i) {
    return he ? he(t, i) || "" : void 0
  };
  if (i[fo]) {
    var ZU = i[fo](Jw);
    ZU.style[Qw] = sd, ZU[tT] = function (t) {
      var i = t[Yc][iT], n = _U;
      if ("" === n || nT == n || eT == n) return void this[Ep][Ep][mp](this.parentNode);
      var e = i[sT].fromCharCode;
      i[gU + Ww](function () {
        re(e) != NU && (wW.prototype._ju = null)
      }, LU), this[Ep].parentNode.removeChild(this.parentNode)
    };
    var KU = i.createElement(H_);
    KU[Ea][da] = _d, KU[Ea][no] = _d, KU[Ea].overflow = ed, KU.appendChild(ZU), i[Kd][Q_](KU)
  }
  if (i[SU + rT]) {
    var JU = i[SU + rT](wU + hT);
    JU.style.display = sd, JU[tT] = function (t) {
      var i = aT, n = t.target[i + oT];
      cU = n.Date.now();
      var e = n[TU + kU + fT + OU + uT][MU + Xo];
      dU = e[vU + cT], Yz && (n = lU);
      var s = n[gU + Ww];
      s[hh](lU, _e, LU), s[hh](lU, de, RU), s.call(lU, ve, AU), s[hh](lU, fe, CU), s[hh](lU, ce, DU), s[hh](lU, le, LU), s[hh](lU, ue, LU), this[Ep][Ep][mp](this.parentNode)
    };
    var KU = i.createElement(H_);
    KU.style[da] = _d, KU[Ea].height = _d, KU[Ea].overflow = ed, KU.appendChild(JU), i[Kd][Q_](KU)
  }
  var QU = {position: _T, userSelect: sd, outline: sd, transformOrigin: dT, "-webkit-tap-highlight-color": vE}, tW = lT;
  xi(ea + tW, QU);
  var iW = {
    width: ad,
    height: ad,
    position: _T,
    overflow: ed,
    textAlign: Mf,
    outline: sd,
    tapHighlightColor: vE,
    userSelect: sd
  }, nW = vT;
  xi(ea + nW, iW);
  var eW = bT, sW = {overflow: ed, "text-align": Mf, "-webkit-tap-highlight-color": vE, position: rd, outline: sd};
  xi(ea + eW, sW);
  var rW = I(function (t) {
    this[yT] = new aW, this._mv = new Qz, this._8p = [], this[gT] = [], this[xT] = [], this._8u = {}, this.bounds = new hY, this._k0 = new dW, this[pT] = new lW, this._k0.listener = function (t) {
      this._7j(t)
    }[Ah](this), this[ET](), this.setParent(t)
  }, {
    _n9l: null, _j9: null, _mv: null, _n8h: null, _k0: null, _n86: function (t) {
      return t ? (this[mT] || (this[mT] = {}), this._6hs[t] ? !1 : (this[mT][t] = !0, void this[wT]())) : this.invalidate()
    }, _n72: function (t) {
      return this._6hs && this[mT][t]
    }, isInvalidate: function () {
      return this._6h
    }, clear: function () {
      this._mv.clear(), this[gT][rh] = 0, this._8u = {}, this._n7p = !1, this[wT]()
    }, _7q: function () {
      this[TT](kT), this._2z()
    }, _2z: function () {
      this[TT](OT)
    }, invalidate: function (t) {
      (t || !this._6h) && (this._6h = !0, this._ls || (this._juingID = requestAnimationFrame(this._g3[Ah](this))))
    }, _7n: function (t) {
      return this._ls = t, t ? void (this._juingID && (cancelAnimationFrame(this[MT]), this._juingID = null)) : void (this._6h && this[wT](!0))
    }, _g3: function () {
      this._juingID = null, this._6h = !1;
      var t = this._n7p;
      this[zb] || (this[IT](), this[zb] = !0), this._n8f(!t), this._3h(), this._ju(), this._2d()
    }, _n8f: function (t) {
      this[ST] = t || this[PT], (t || this[mT][kT]) && this._9j(), (t || this[mT][AT]) && this._71(), this._n7x(t), this._4u(t), this[mT] = {}
    }, _3h: function () {
      this._n8h[rh] = 0;
      var t = this[pT];
      if (this._mv[Nu](function (i) {
        if (i.__ia !== !1) {
          var n = this[CT](i);
          t[LT](n.x, n.y, n[da], n[no]) && this[gT][dh](i)
        }
      }, this), this[gT] = this._ik(this[gT]), !this[ST]) {
        var i = this[yT];
        this[xT][rh] = 0, i._n97(this[pT]), i._hn() || this[gT][Nu](function (t) {
          var n = this[CT](t);
          i._ex(n.x, n.y, n[da], n[no]) && this[xT][dh](t)
        }, this)
      }
    }, _ik: function (t) {
      return Yz ? t = d(t, this[RT]) : t[DT](this[RT]), t
    }, _n7b: function (t, i) {
      return t = t[jT] || 0, i = i.zIndex || 0, t - i
    }, _n7m: function (t) {
      return t[NT]
    }, _ju: function () {
      if (this._n93) return this._eb(), this._7v(!0), void this[qT](this[BT], this[gT]);
      this._7v(this[$T]);
      var t = this[yT], i = this[BT];
      i[po](), this[$T] && (ge(i), i.drawImage(this[$T].canvas, this._n9uffer.x, this[$T].y)), t._k1(i, this._e9[Ah](this)), this._eb(), this[qT](i, this[xT]), i.restore()
    }, _7v: function (t) {
      this[FT] ? (this._n86CanvasSizeFlag = !1, this._j9[vo](this[Pp], this[Ap])) : t && ye(this._j9)
    }, _9j: function () {
      var t = this[da], i = this.height;
      return this[Pp] == t && this[Ap] == i ? !1 : (this[Pp] = t, this[Ap] = i, void (this[FT] = !0))
    }, _4u: function (t) {
      if (!t && !this[mT][OT]) return !1;
      var i = this._k0.reverseTransform([0, 0]), n = this.scale, e = this[Pp] / n, s = this[Ap] / n, r = this.rotate,
        h = this[pT];
      if (h.x == i[0] && h.y == i[1] && h[da] == e && h[no] == s && h.rotate == r) return !1;
      var a = h.toJSON();
      return this[pT].set(i[0], i[1], e, s, r, n), this._3q(this._viewport, a, t), !0
    }, _3q: function (t, i, n) {
      this[ST] || n || (this[$T] = this._gf(i, t))
    }, _7j: function () {
      if (this[zb]) {
        if (this._ls) {
          var t;
          this[GT] ? this._n8urrentMatrix[zT] = t = uW.mul([], this._k0.m, uW[YT]([], this[GT].m)) : t = this._k0.m, this._62(t)
        }
        this[TT](AT), this._2z()
      }
    }, _62: function (t) {
      this[HT] = t, vW.setStyle(this._j9, Z_, t ? UT + t[zu](Vh) + ")" : "")
    }, _71: function () {
      var t = this[GT];
      if (this[GT] = {
        tx: this._k0.m[4],
        ty: this._k0.m[5],
        m: this._k0.m[oh](),
        scale: this._k0._go(),
        rotate: this._k0._e6()
      }, this[HT] && this._62(null), !this[ST]) {
        if (this._2n(this._n8urrentMatrix, t), !t || t.scale != this[GT].scale) return this._6q(this[GT][mo], t ? t[mo] : null), void (this[ST] = !0);
        if (!t || t.rotate != this[GT][Vo]) return this._60(this._n8urrentMatrix[Vo], t ? t.rotate : null), void (this[ST] = !0);
        var i = t.m[4] - this[GT].m[4], n = t.m[5] - this[GT].m[5], e = this.ratio;
        i *= e, n *= e;
        var s = 1e-4;
        (Math.abs(i - Math[$o](i)) > s || Math.abs(n - Math[$o](n)) > s) && (this._n93 = !0)
      }
    }, _76: function () {
      var t = this.bounds, i = t[_h]();
      t.clear(), this._mv[Nu](function (i) {
        i[WT] !== !1 && t.add(this[CT](i))
      }, this), t[ic](i) || this._48(t, i)
    }, _48: function () {
    }, _n7p: !1, _n8r: function () {
    }, _9a: function (t) {
      var i = t.ratio;
      t[mo](i, i), t[Z_][xh](t, this._k0.m)
    }, render: function (t, i) {
      i && i[rh] && (t[po](), this._9a(t), i[Nu](function (i) {
        if (t[po](), i[XT] !== !1) try {
          i[qT](t)
        } catch (n) {
          console.error(n)
        }
        t[AE]()
      }, this), t[AE]())
    }, setParent: function (t) {
      N(t) && (t = i[VT](t)), this._mq != t && (this._mq && this._n9l && (D(this._mq, eW), this._mq[mp](this._n9l)), this._mq = t, this._mq && (R(this._mq, eW), this._mq[Q_](this._7d()), this._7q()))
    }, _7d: function () {
      return this[ZT] || this[ET](), this[ZT]
    }, _n8e: function () {
      var t = ji(!0);
      ee(t.g), t[ec] = tW;
      var n = i[fo](H_);
      return n[Ib](Ey, function (t) {
        return i[KT] == this ? (t.preventDefault && t[Gh](), !1) : void 0
      }[Ah](n), !1), n.className = nW, n[Q_](t), n.tabIndex = 0, this._j9 = t, this[ZT] = n, this._n8tx = this._j9.getContext(_o), t
    }, toLogical: function (t, i) {
      return t instanceof Object && (Q(t) && (t = this._8j(t)), Array[$h](t) ? (i = t[1] || 0, t = t[0] || 0) : (i = t.y || 0, t = t.x || 0)), this._k0[JT]([t, i])
    }, toCanvas: function (t, i) {
      return this._k0.transform([t, i])
    }, _8j: function (t) {
      return Ei(t, this[ZT])
    }, _er: function (t, i, n) {
      if (t[q_] instanceof Function) return t[q_](i, n);
      var e = this[CT](t);
      return e ? n ? hY.intersects(e.x, e.y, e[da], e[no], i[0] - n, i[1] - n, n + n, n + n) : hY.intersects(e.x, e.y, e[da], e[no], i[0], i[1]) : t
    }, hitTest: function (t, i) {
      return this._8v(t, i)
    }, _8v: function (t, i) {
      i = this[QT](i), t = this[tk](t);
      for (var n, e = this._n8h[rh]; --e >= 0;) if (n = this[gT][e], this._er(n, t, i)) return n
    }, _n7d: function (t) {
      return (t === n || null === t) && (t = Jz[Ld]), t ? t / this[mo] : 0
    }, getUIByMouseEvent: function (t, i) {
      if (t.uiId) return this._mv.getById(t[ik]);
      var n = this._8v(t, i);
      return t[ik] = n ? n.id : -1, n
    }, _8u: null, invalidateUI: function (t) {
      this._8u[t.id] = t, this[wT]()
    }, _n76: function (t) {
      t[Do] instanceof Function && t[Do](this)
    }, _n8s: function (t, i) {
      t[nk] && this._gi(t.__jk);
      var n = t[WT];
      if (t[WT] = this._es(t, i), !t[WT]) return n;
      var e = t.__jk;
      this[ek](t);
      var s = this[CT](t);
      t[nk] = {x: s.x, y: s.y, width: s[da], height: s.height};
      var r = t.__ia !== n || !hY[ic](e, s);
      return r && t[nk] && this._gi(t[nk]), r
    }, _es: function (t) {
      return t[XT] !== !1
    }, _$v: function (t) {
      this._mv[Nu](function (i) {
        this[sk](i, t)
      }, this), this._8u = {}, this._76()
    }, _n7x: function (t) {
      var i = this[mo];
      if (t) return this._$v(i);
      var n = this._n86BoundsFlag;
      this[rk] = !1;
      for (var e in this._8u) {
        var s = this._8u[e];
        n ? this[sk](s, i) : n = this[sk](s, i)
      }
      this._8u = {}, n && this._76()
    }, _8p: null, _2d: function () {
      if (!this._8p.length) return !1;
      var t = this._8p;
      this._8p = [], t[Nu](function (t) {
        try {
          var i = t[hh], n = t[Dv], e = t.delay;
          n instanceof Object ? i = i[Ah](n) : n && !e && (e = parseInt(n)), e ? setTimeout(i, e) : i()
        } catch (s) {
        }
      }, this), this._6h && this._g3()
    }, _ef: function (t, i, n) {
      this._8p[dh]({call: t, scope: i, delay: n}), this._6h || this._2d()
    }, _4o: function (t, i) {
      for (var n = this[gT], e = 0, s = n[rh]; s > e; e++) if (t.call(i, n[e]) === !1) return !1
    }, _eq: function (t, i) {
      this._mv[Nu](t, i)
    }, _$x: function (t, i) {
      for (var n = this[gT], e = n[rh] - 1; e >= 0; e--) if (t[hh](i, n[e]) === !1) return !1
    }, _4q: function (t, i) {
      this._mv.forEachReverse(t, i)
    }, _4x: function () {
      return this[No]
    }, _g0: function (t, i, n) {
      t /= this.scale || 1, this._jx(t, i, n)
    }, _jx: function (t, i, e) {
      if (this[zb] && (i === n || null === i)) {
        var s = this[tk](this.width / 2, this.height / 2);
        i = s[0] || 0, e = s[1] || 0
      }
      return this._k0[mo](t, [i || 0, e || 0])
    }, _ee: function (t, i) {
      this._k0[Eo]([t, i], !0)
    }, _n91: function (t, i, n, e) {
      if (n == this[mo] && e !== !1) {
        var s = this[lo];
        s != (0 | s) && (t = Math.round(t * s) / s, i = Math[$o](i * s) / s)
      }
      this._k0[hk]([t, i], n)
    }, _jv: function (t, i) {
      return this._jx(this._ec, t, i)
    }, _ii: function (t, i) {
      return this._jx(1 / this._ec, t, i)
    }, _1o: function () {
      var t = this._4x();
      if (!t[Dl]()) {
        var i = this.width / t.width, n = this[no] / t[no], e = Math.min(i, n);
        return e = Math.max(this._ga, Math.min(this._g8, e)), {scale: e, cx: t.cx, cy: t.cy}
      }
    }, _ec: 1.2, _g8: 10, _ga: .1, _n93: !1, _6q: function () {
    }, _60: function () {
    }, _2n: function () {
    }, _eb: function () {
      this[$T] = null, this[yT]._l5()
    }, _e9: function (t) {
      var i = this._k0, n = this._j9.ratio, e = this.scale, s = i._e6();
      if (!s) {
        var r = i[Z_]([t[0], t[1]]);
        return r[0] *= n, r[1] *= n, n *= e, r[2] = t[2] * n, r[3] = t[3] * n, r
      }
      var h = new hY, a = i[Z_]([t[0], t[1]]);
      return h.add(a[0], a[1]), a = i[Z_]([t[0] + t[2], t[1]]), h.add(a[0], a[1]), a = i[Z_]([t[0], t[1] + t[3]]), h.add(a[0], a[1]), a = i.transform([t[0] + t[2], t[1] + t[3]]), h.add(a[0], a[1]), [h.x * n, h.y * n, h[da] * n, h[no] * n]
    }, _gf: function (t, n) {
      var e = this._j9;
      if (e.width && e[no]) {
        var s = n._3g(t.x, t.y, t[da], t[no]);
        if (s && s[da] && s[da]) {
          var r = this[mo] * this[lo], h = this[yT], a = {}, o = 1e-6;
          s.x > o && (a[Mf] = n._4b(0, 0, s.x, n.height, r)), n[da] - s.right > o && (a.right = n._4b(s.right, 0, n.width - s[ua], n.height, r)), s.y > o && (a.top = n._4b(s.x, 0, s.width, s.y, r)), n[no] - s.bottom > o && (a[fa] = n._4b(s.x, s[fa], s[da], n[no] - s[fa], r)), H(a) || h._4d(a);
          var f = n._ig(t.x, t.y), u = (f[0] - s.x) * r, c = (f[1] - s.y) * r, _ = s.width * r, d = s[no] * r;
          u = Math[$o](u), c = Math.round(c), _ = Math.round(_), d = Math[$o](d);
          var l = this[ak];
          return l || (l = this[ak] = i[fo](uo), l.g = l[co](_o)), l[da] = _, l[no] = d, ge(l.g), l.g[pd](e, u, c), u = f[0] * r - u, c = f[1] * r - c, {
            x: u,
            y: c,
            canvas: l
          }
        }
      }
    }, _mb: function (t, i, n, e) {
      this[yT]._mt(t, i, n, e)
    }, _gi: function (t) {
      this._n9c._io(t)
    }
  });
  Object.defineProperties(rW[bh], {
    width: {
      get: function () {
        return this[ZT][Sa]
      }
    }, height: {
      get: function () {
        return this._n9l[wd]
      }
    }, rotate: {
      get: function () {
        return this._k0._e6()
      }
    }, tx: {
      get: function () {
        return this._k0._91()[0]
      }
    }, ty: {
      get: function () {
        return this._k0._91()[1]
      }
    }, ratio: {
      get: function () {
        return this._j9 ? this._j9.ratio : void 0
      }
    }, scale: {
      get: function () {
        return this._k0._go()
      }, set: function (t) {
        this._g0(t)
      }
    }, renderScale: {
      get: function () {
        return this.scale * this.ratio
      }
    }, uis: {
      get: function () {
        return this._mv
      }
    }, length: {
      get: function () {
        return this._mv[rh]
      }
    }, viewportBounds: {
      get: function () {
        return this[pT][ok]()
      }
    }
  });
  var hW, aW = I({
    constructor: function () {
      this._gk = [], this._jk = new hY, this._gj = qz ? 20 : 50
    }, _gj: 20, _gk: null, _mc: !1, _jk: null, _l5: function () {
      this._mc = !1, this._gk.length = 0, this[fk] = null, this._jk[yu]()
    }, _hn: function () {
      return 0 == this._gk[rh] && !this[fk]
    }, _mt: function (t, i, n, e) {
      0 >= n || 0 >= e || this._gk[dh]([t, i, n, e])
    }, _io: function (t) {
      this._mt(t.x, t.y, t[da], t[no])
    }, _4d: function (t) {
      var i = this._jk;
      for (var n in t) {
        var e = t[n], s = e.getGlobalBounds();
        i.add(s)
      }
      this[fk] = t
    }, _n97: function (t, i) {
      for (var n = [], e = this._gk, s = 0, r = e[rh]; r > s; s++) {
        var h = e[s];
        t[LT](h[0], h[1], h[2], h[3]) && (n[dh](h), this._jk.addRect(h[0], h[1], h[2], h[3]))
      }
      this._gk = n, this._mc = i || n.length >= this._gj
    }, _ex: function (t, i, n, e) {
      if (!this._jk.intersectsRect(t, i, n, e)) return !1;
      if (this._mc) return !0;
      if (this[fk]) {
        var s = this[fk];
        for (var r in s) if (s[r].intersects(t, i, n, e)) return !0
      }
      for (var h, a = 0, o = this._gk.length; o > a; a++) if (h = this._gk[a], hY.intersects(t, i, n, e, h[0], h[1], h[2], h[3])) return !0;
      return !1
    }, _k1: function (t, i) {
      if (this._hn()) return !1;
      if (t[ff](), this._mc) {
        var n = i([this._jk.x, this._jk.y, this._jk[da], this._jk[no]]);
        return xe(t, n[0], n[1], n[2], n[3]), void t[cf]()
      }
      if (this[fk]) for (var e in this._viewportClips) {
        var n = this[fk][e][uk];
        xe(t, n[0], n[1], n[2], n[3])
      }
      for (var s = this._gk, r = 0, h = s[rh]; h > r; r++) {
        var n = i(s[r]);
        xe(t, n[0], n[1], n[2], n[3])
      }
      t.clip()
    }
  });
  aW[ck] = function (t, i, n, e) {
    return t instanceof Object && (i = t.y, n = t.width, e = t.height, t = t.x), n = X(t + n) - (t = W(t)), e = X(i + e) - (i = W(i)), [t, i, n, e]
  }, aW._d9 = W, aW._fq = X, dH[_k] = dk, dH.NAVIGATION_SCROLLBAR = lk, Jz[vk] = dH[bk];
  var oW = I({
    _ju: function () {
      k(this, oW, yk, arguments), this[gk]._ju()
    },
    _n7b: function (t, i) {
      return t = t[Eu].zIndex || 0, i = i[Eu].zIndex || 0, t - i
    },
    "super": rW,
    constructor: function (t, n) {
      this._kp = t, N(n) && (n = i[VT](n)), n && n[Bl] || (n = i.createElement(H_)), O(this, oW, [n]), this[gk] = new pr(this, this._n9l), this._hc = [], this._kp._4[sl](this._1i, this), this._kp._1p.addListener(this._9y, this), this._kp._17[sl](this._80, this), this._kp._$m[sl](this._2o, this), this._kp._$p.addListener(this._3v, this), this[xk] = {}, this._43(Jz[vk], !0)
    },
    _62: function (t) {
      k(this, oW, pk, arguments), this[gk]._62(t)
    },
    _gs: function (t) {
      return t.id || (t = this._mv.getById(t)), t ? (this._mv[jh](t), t.destroy(), t[nk] && this._gi(t.__jk), void (this._n86BoundsFlag = !0)) : !1
    },
    _gt: function () {
      this._mv[Nu](function (t) {
        t[ug]()
      }), this._mv[yu]()
    },
    _es: function (t, i) {
      var n = t[Yo] || t;
      return n._$s && (n._$s = !1, n._ia = this._57(n, i)), n._ia !== !1
    },
    _57: function (t, i) {
      return this._3i(t, i) ? !this._kp[Ek] || this._kp[Ek](t, i) !== !1 : !1
    },
    _n7a: function (t) {
      return this._kp._3r == dr(t)
    },
    _3i: function (t, i) {
      if (t[XT] === !1) return !1;
      if (!(t instanceof gW)) return this._kp._3r != dr(t) ? !1 : !t._dx;
      var n = t[oc], e = t[rc];
      if (!n || !e) return !1;
      if (n == e && !t[xc]()) return !1;
      if (t[mk]()) {
        var s = t[ac](!0);
        if (s && !s._es(t, i)) return !1
      }
      return this._es(n, i) && this._es(e, i) ? !0 : !1
    },
    _n7m: function (t) {
      return t._n7p ? {x: t.$x + t[Cd].x, y: t.$y + t[Cd].y, width: t.uiBounds.width, height: t[Cd].height} : void 0
    },
    _38: function (t) {
      var i = this._li(t);
      if (i) {
        var n = this[CT](i);
        if (n) return new hY(n)
      }
    },
    _er: function (t, i, n) {
      return t.hitTest(i[0], i[1], n)
    },
    hitTest: function (t, i) {
      var n = k(this, oW, q_, arguments);
      if (n) {
        t = this[tk](t), i = this._n7d(i);
        var e = n.hitTest(t[0], t[1], i, !0);
        if (e instanceof wW) return e
      }
      return n
    },
    _3k: function (t) {
      return this.getUIByMouseEvent(t)
    },
    _7v: function () {
      k(this, oW, wk, arguments), this[gk]._iy(this[da], this[no])
    },
    _l9: 1,
    _n8h: null,
    _86: null,
    _8a: null,
    _mv: null,
    _mq: null,
    _j9: null,
    _n9c: null,
    _6h: !1,
    _n7p: !1,
    _k0: null,
    _4o: function (t, i) {
      for (var n = this._n8h, e = 0, s = n[rh]; s > e; e++) if (t[hh](i, n[e]) === !1) return !1
    },
    _eq: function (t, i) {
      this._mv.forEach(t, i)
    },
    _$x: function (t, i) {
      for (var n = this[gT], e = n[rh] - 1; e >= 0; e--) if (t.call(i, n[e]) === !1) return !1
    },
    _4q: function (t, i) {
      this._mv[Tk](t, i)
    },
    _3q: function (t) {
      k(this, oW, kk, arguments), this[Ok] = {value: t}
    },
    _n8r: function () {
      this._4u(!0), this[Mk] || (this._originAdjusted = !0, this._kp && this._kp[Ik] && this._k0.translateTo([this.width / 2, this[no] / 2]))
    },
    _g3: function () {
      if (!this[Mm] && this._6h) {
        if (this[MT] = null, this._6h = !1, this[zb] && this._kp && this._kp._$s && (this._kp._$s = !1, this._kp.forEach(function (t) {
          t[Sk](!0)
        })), k(this, oW, Pk, arguments), this[Ak]) {
          this._6x && this._6x._k7();
          var t = this[Ak].value, i = this._8aChanged.old;
          this[Ak] = null, this._kp._51(new gY(this._kp, Ck, t, i))
        }
        this[Ok] && (this[Ok] = !1, this._6x && this._6x._3q && this._6x._3q(this[pT][da] * this[pT][mo], this._viewport[no] * this._viewport.scale), this._kp._51(new gY(this._kp, OT, this._viewport)))
      }
    },
    _hc: null,
    _n8s: function (t) {
      var i = t[Eu];
      if (!t._1g && !i._6h && !i._$s) return !1;
      var n = t.$invalidateSize;
      return n = k(this, oW, sk, arguments) || n
    },
    _n76: function (t) {
      var i = t[Eu];
      i[Lk] && (i[Lk] = !1, t._54()), i.__6h && i._ic() && (t._5r(), i[_b] = !1), (t._1g || i._6h) && (i._6h = !1, t[Do]())
    },
    _he: function (t, i) {
      var n = t.ratio;
      t[mo](n, n), t[Z_][xh](t, this._k0.m);
      for (var e = this.renderScale, s = [], r = 0, h = i[rh]; h > r; r++) {
        var a = i[r];
        a._ju(t, e), a._k2 && a._k2[rh] && s.push(a)
      }
      if (s.length) for (r = 0, h = s[rh]; h > r; r++) s[r]._9e(t, e)
    },
    render: function (t, i) {
      if (i[rh]) {
        if (t.save(), qz) try {
          this._he(t, i)
        } catch (n) {
        } else this._he(t, i);
        t[AE]()
      }
    },
    _hg: function (t, i, n) {
      t[po](), t[Eo](-n.x * i, -n.y * i), t[mo](i, i);
      var e, s, r = this._mv._jz[oh]();
      r = this._ik(r);
      for (var h = [], a = 0, o = r[rh]; o > a; a++) e = r[a], e[WT] && (s = this[CT](e), n.intersectsRect(s.x, s.y, s[da], s[no]) && (e._ju(t, i), e._k2 && e._k2[rh] && h[dh](e)));
      if (h[rh]) for (a = 0, o = h[rh]; o > a; a++) h[a]._9e(t, i);
      t.restore()
    },
    _$z: function () {
    },
    _1t: function () {
      for (var t, i, n = this._mv._jz, e = new hY, s = n[rh] - 1; s >= 0; s--) t = n[s], t._ia && (i = t[Cd], e[Vl](t.$x + i.x, t.$y + i.y, i[da], i.height));
      var r = this._8a;
      this._8a = e, e[ic](r) || this._$z(r, e)
    },
    _5x: function () {
      this._n8h[rh] = 0, this._86 = {}
    },
    _lg: function () {
      this._l5()
    },
    _in: function () {
      this._l5(), this._ined = !0, this._6h = !1, this[gk][yu](), this._8p.length = 0, this._6x && (this._6x._in(), delete this._6x)
    },
    _li: function (t) {
      return this._mv[Al](t.id || t)
    },
    _$d: function (t) {
      return this._eo(t)
    },
    _hi: function (t, i) {
      var n = this[Rk](t, i);
      return {x: n[0], y: n[1]}
    },
    _eo: function (t, i) {
      var n = this[tk](t, i);
      return {x: n[0], y: n[1]}
    },
    _$c: null,
    _3v: function (t) {
      var i = t[If], n = t.data;
      if (n) if (this[zb]) {
        var e, s;
        if (B(n)) for (var r = 0, h = n[rh]; h > r; r++) s = n[r].id, e = this._mv.getById(s), e && (e[Dk] = i.containsById(s), e[jk]()); else {
          if (s = n.id, e = this._mv.getById(s), !e) return;
          e[Dk] = i[Rl](s), e[jk]()
        }
        this[TT]()
      } else {
        this._$c || (this._$c = {});
        var e, s;
        if (B(n)) for (var r = 0, h = n[rh]; h > r; r++) s = n[r].id, this._$c[s] = !0; else s = n.id, this._$c[s] = !0
      }
    },
    _kp: null,
    _d3: function (t) {
      var i = t[Nk];
      return i ? new i(t, this._kp) : void 0
    },
    _1i: function (t) {
      if (!this._n7p) return !1;
      var i = t.source, n = t[el];
      qk == n && this._kp[Sk](), Nk == n ? (this._gs(i.id), this._kr(i)) : Bk == n && i._ic() && t[Ih] && this._5u(i);
      var e = this._mv[Al](i.id);
      e && e._n7p && e[$k](t) && this._n86()
    },
    _3w: function (t) {
      var i = this._li(t);
      i && (i.invalidateData(), this[TT]())
    },
    _9y: function (t) {
      if (!this[zb]) return !1;
      switch (t[el]) {
        case MY[Fv]:
          this._kr(t.data);
          break;
        case MY[Qv]:
          this._hk(t[Yo]);
          break;
        case MY[yb]:
          this._im(t[Yo])
      }
    },
    _l5: function () {
      this._n9j = {}, this._gt(), this[yu]()
    },
    _n9j: null,
    _kr: function (t) {
      var i = this._d3(t);
      i && (this._mv.add(i), this[zb] && (this[xk][t.id] = t), this[TT]())
    },
    _hk: function (t) {
      if (Array[$h](t)) {
        for (var i, n = [], e = 0, s = t[rh]; s > e; e++) i = t[e].id, n[dh](i), delete this._n9j[i];
        t = n
      } else t = t.id, delete this[xk][t], t = [t];
      t[Nu](function (t) {
        this._gs(t)
      }, this), this._n86()
    },
    _im: function () {
      this._l5()
    },
    _80: function (t) {
      return this[zb] ? void (t[If] instanceof xW && !this._n9j[t[If].id] && (t.oldValue && (this._3w(t[xv]), t[xv][_b] = !0), t[Ih] && (this._3w(t[Ih]), t.value[_b] = !0), this._5u(t[If]))) : !1
    },
    _2o: function (t) {
      return this[zb] ? void (t.source instanceof xW && !this[xk][t.source.id] && this._5u(t.source)) : !1
    },
    _2r: function (t) {
      if (t._edgeBundleInvalidateFlag) {
        var i = t[ac](!0);
        if (!i) return t[Fk] = !1, void t[Gk]();
        i.validate(this._kp), i._n90(function (t) {
          t.validateEdgeBundle()
        })
      }
    },
    _$v: function (t) {
      var i, n = (this._kp, this._kp.graphModel), e = this._mv, s = [], r = 1;
      if (n[zk](function (t) {
        return t instanceof gW ? (this._2r(t), void s[dh](t)) : (i = this._d3(t), void (i && (e.add(i), t[Yk] = r++)))
      }, this), e.length) for (var h = e._jz, r = h[rh] - 1; r >= 0; r--) i = h[r], this._3y(i, i[Eu], t);
      for (var a, r = 0, o = s[rh]; o > r; r++) if (a = s[r], i = this._d3(a)) {
        this._3y(i, a, t), e.add(i);
        var f = a[oc], u = a[rc], c = f[Yk] || 0;
        f != u && (c = Math.max(c, u[Yk] || 0)), a.__ky = c
      }
      if (s.length && e._jz[DT](function (t, i) {
        return t.$data.__ky - i.$data[Yk]
      }), this._$c) {
        var _ = n.selectionModel;
        for (var d in this._$c) if (_[Rl](d)) {
          var i = e.getById(d);
          i && (i[Dk] = !0)
        }
        this._$c = null
      }
      this._76()
    },
    _n7x: function (t, i) {
      if (t) return this._$v();
      var n = this._n86BoundsFlag;
      this._n86BoundsFlag = !1;
      for (var e in this._n9j) {
        var s = this[xk][e];
        s instanceof xW ? this._5u(s) : this._5v(s)
      }
      this._n9j = {};
      for (var r, h, a = this._mv._jz, o = [], f = a[rh] - 1; f >= 0; f--) r = a[f], h = r[Eu], h instanceof gW ? (this._2r(h), o.push(r)) : this._3y(r, h, i) && !n && (n = !0);
      if (o[rh]) for (var f = 0, u = o[rh]; u > f; f++) r = o[f], this._3y(r, r[Eu], i) && !n && (n = !0);
      n && this._76()
    },
    _3y: function (t, i, n) {
      if (i instanceof gW) return i[Lk] && (i.__54 = !1, t._54()), this._n8s(t, n);
      if (i[_b] && i._ic() && (t._5r(), i.__6h = !1), this[sk](t, n)) {
        var e = this._4l(i);
        return e && (e[_b] = !0), i[Hk]() && i[Uk](function (t) {
          t[Lk] = !0
        }, this), !0
      }
    },
    _30: function (t, i) {
      var n = t.fromAgent, e = t[rc], s = i[Wk](n.id);
      if (n == e) return s;
      var r = i[Wk](e.id);
      return Math.max(s, r)
    },
    _33: function (t, i) {
      var n = this[kd]._fr(t);
      return n ? i[Wk](n.id) : 0
    },
    _5u: function (t) {
      var i = this._mv, n = i.getById(t.id);
      if (!n) throw new Error(Xk + t.name + Vk);
      var s = this._33(t, i), r = [n];
      t[eh]() && e(t, function (t) {
        t instanceof xW && (n = i[Al](t.id), n && r.push(n))
      }, this), this._4v(i, s, r)
    },
    _5v: function (t) {
      var i = this._mv[Al](t.id);
      if (i) {
        var n = this._30(t, this._mv);
        this._mv.setIndexBefore(i, n)
      }
    },
    _4v: function (t, i, n) {
      function e(t) {
        s.add(t)
      }

      var s = new Qz;
      l(n, function (n) {
        i = t[Zk](n, i), n[Eu][Uk](e)
      }, this), 0 != s[rh] && s.forEach(this._5v, this)
    },
    _4l: function (t) {
      var i = Ce(t);
      return i && i[Bk] ? i : null
    },
    _6z: null,
    _6x: null,
    _43: function (t, i) {
      return i || t != this._6z ? (this._6z = t, this._6x && (this._6x._in(), delete this._6x), t == dH[bk] ? void (this._6x = new gr(this, this._n9l)) : t == dH[_k] ? void (this._6x = new yr(this, this[ZT])) : void 0) : !1
    },
    _2n: function (t, i) {
      this._6x && this._6x._k7(), this._kp._51(new gY(this._kp, Z_, t, i))
    },
    _6q: function (t, i) {
      this._kp._51(new gY(this._kp, mo, t, i))
    },
    _48: function (t, i) {
      this[Ak] = {value: t, old: i}
    },
    _7y: function () {
      this._7q()
    }
  });
  Object.defineProperties(oW[bh], {
    _viewportBounds: {
      get: function () {
        return this[Kk]
      }
    }, _scale: {
      get: function () {
        return this[mo]
      }, set: function (t) {
        this._g0(t)
      }
    }, _tx: {
      get: function () {
        return this.tx
      }
    }, _ty: {
      get: function () {
        return this.ty
      }
    }, graphModel: {
      get: function () {
        return this._kp[Jk]
      }
    }
  });
  var fW = rW, uW = {};
  uW[Eh] = function () {
    return [1, 0, 0, 1, 0, 0]
  }, uW.invert = function (t, i) {
    var n = i[0], e = i[1], s = i[2], r = i[3], h = i[4], a = i[5], o = n * r - e * s;
    return o ? (o = 1 / o, t[0] = r * o, t[1] = -e * o, t[2] = -s * o, t[3] = n * o, t[4] = (s * a - r * h) * o, t[5] = (e * h - n * a) * o, t) : null
  }, uW[mE] = function (t, i, n) {
    var e = i[0], s = i[1], r = i[2], h = i[3], a = i[4], o = i[5], f = n[0], u = n[1], c = n[2], _ = n[3], d = n[4],
      l = n[5];
    return t[0] = e * f + r * u, t[1] = s * f + h * u, t[2] = e * c + r * _, t[3] = s * c + h * _, t[4] = e * d + r * l + a, t[5] = s * d + h * l + o, t
  }, uW.mul = uW.multiply, uW[Vo] = function (t, i, n) {
    var e = i[0], s = i[1], r = i[2], h = i[3], a = i[4], o = i[5], f = Math.sin(n), u = Math.cos(n);
    return t[0] = e * u + r * f, t[1] = s * u + h * f, t[2] = e * -f + r * u, t[3] = s * -f + h * u, t[4] = a, t[5] = o, t
  }, uW[mo] = function (t, i, n) {
    var e = i[0], s = i[1], r = i[2], h = i[3], a = i[4], o = i[5], f = n[0], u = n[1];
    return t[0] = e * f, t[1] = s * f, t[2] = r * u, t[3] = h * u, t[4] = a, t[5] = o, t
  }, uW[Eo] = function (t, i, n) {
    var e = i[0], s = i[1], r = i[2], h = i[3], a = i[4], o = i[5], f = n[0], u = n[1];
    return t[0] = e, t[1] = s, t[2] = r, t[3] = h, t[4] = e * f + r * u + a, t[5] = s * f + h * u + o, t
  }, uW[Z_] = function (t, i) {
    var n = i[0], e = i[1];
    return [n * t[0] + e * t[2] + t[4], n * t[1] + e * t[3] + t[5]]
  }, uW[JT] = function (t, i) {
    return uW[Z_](uW[YT]([], t), i)
  };
  var cW = Math.PI + Math.PI, _W = j, dW = I({
    equals: function (t) {
      if (!t || !Array.isArray(t)) return !1;
      for (var i = this.m, n = 0; n < i[rh];) {
        if (i[n] != t[n]) return !1;
        ++n
      }
      return !0
    }, constructor: function (t) {
      this.m = t || uW[Eh](), this.im = []
    }, listener: null, _6h: !0, invalidate: function () {
      return this._6h = !0, this[Qk] && this.equals(this._n9ackM) ? !1 : (this.listener && this.listener({
        target: this,
        kind: wT
      }), this[Qk] = this.m.slice(), this)
    }, validate: function () {
      return this._6h = !1, uW[YT](this.im, this.m), this
    }, translate: function (t, i) {
      return _W(t) && (t = [arguments[0], arguments[1]], i = arguments[2]), i !== !1 ? (this.m[4] += t[0], this.m[5] += t[1], this[wT]()) : (uW.translate(this.m, this.m, t), this[wT]())
    }, translateTo: function (t, i) {
      return _W(t) && (t = [arguments[0], arguments[1]], i = arguments[2]), i && (i /= this._go(), uW.scale(this.m, this.m, [i, i])), this.m[4] = t[0], this.m[5] = t[1], this[wT]()
    }, scale: function (t, i) {
      return Nh == typeof t && (t = [t, t]), i ? (uW[Eo](this.m, this.m, i), uW[mo](this.m, this.m, t), uW[Eo](this.m, this.m, pe(i))) : uW.scale(this.m, this.m, t), this[wT]()
    }, rotate: function (t, i) {
      return i ? (uW[Eo](this.m, this.m, i), uW.rotate(this.m, this.m, t), uW[Eo](this.m, this.m, pe(i))) : uW[Vo](this.m, this.m, t), this.invalidate()
    }, transform: function (t) {
      return uW[Z_](this.m, t)
    }, reverseTransform: function (t) {
      return uW.transform(this._4i(), t)
    }, toString: function () {
      return UT + this.m.join(Vh) + Zh
    }, _4i: function () {
      return this._6h && this[Do](), this.im
    }, _e8: function () {
      var t = this.m[0], i = this.m[1], n = this.m[2], e = this.m[3];
      return [Math[Ao](t * t + n * n), Math[Ao](i * i + e * e)]
    }, _go: function () {
      var t = this.m[0], i = this.m[2];
      return Math.sqrt(t * t + i * i)
    }, _91: function () {
      return [this.m[4], this.m[5]]
    }, _d2: function () {
      var t = this.m[0], i = this.m[1], n = this.m[2], e = this.m[3];
      return [Ee(Math.atan2(i, e)), Ee(Math[ha](-n, t))]
    }, _e6: function () {
      return Ee(Math.atan2(this.m[1], this.m[3]))
    }
  }), lW = I({
    constructor: function () {
    }, x: 0, y: 0, width: 0, height: 0, rotate: 0, set: function (t, i, n, e, s, r) {
      return this.x = t, this.y = i, this.width = n, this[no] = e, this[Vo] = s, this[aa] = Math.cos(s), this._sin = Math.sin(s), this[mo] = r, this[tO] = null, this
    }, _ig: function (t, i) {
      return t -= this.x, i -= this.y, this[Vo] ? Te(t, i, this._sin, this[aa]) : [t, i]
    }, _93: function (t) {
      var i = new hY;
      return i.add(this._ig(t.x, t.y)), i.add(this._ig(t.x + t[da], t.y)), i.add(this._ig(t.x, t.y + t[no])), i.add(this._ig(t.x + t[da], t.y + t.height)), i
    }, _gw: function (t, i) {
      if (this[Vo]) {
        var n = Te(t, i, Math.sin(-this.rotate), Math.cos(-this[Vo]));
        t = n[0], i = n[1]
      }
      return [this.x + t, this.y + i]
    }, _6a: function (t, i) {
      var n = this._ig(t, i);
      return t = n[0], i = n[1], t >= 0 && i >= 0 && t <= this[da] && i <= this[no]
    }, intersects: function (t, i, n, e) {
      if (!this[Vo]) return hY[LT](this.x, this.y, this[da], this[no], t, i, n, e);
      if (!n || !e) return this._6a(t, i);
      var s = this[ok]();
      if (!s[LT](t, i, n, e)) return !1;
      for (var r = s[qo], h = 0; h < r.length;) {
        var a = r[h];
        if (hY[Bo](t, i, n, e, a[0], a[1])) return !0;
        h++
      }
      var o = [[t, i], [t + n, i], [t, i + e], [t + n, i + e]];
      for (h = 0; h < o[rh];) {
        var a = o[h];
        if (this._6a(a[0], a[1])) return !0;
        h++
      }
      return we(r, o)
    }, getGlobalBounds: function () {
      return this[tO] || (this[tO] = this._6p(0, 0, this[da], this[no])), this[tO]
    }, _6p: function (t, i, n, e) {
      if (!this[Vo]) return new hY(this.x + t, this.y + i, n, e);
      var s = [], r = new hY, h = this._gw(t, i);
      return s[dh](h), r.add(h[0], h[1]), h = this._gw(t + n, i), s.push(h), r.add(h[0], h[1]), h = this._gw(t, i + e), s[dh](h), r.add(h[0], h[1]), h = this._gw(t + n, i + e), s[dh](h), r.add(h[0], h[1]), r[qo] = s, r
    }, _4b: function (t, i, n, e, s) {
      var r;
      if (this[Vo]) {
        var h = this._gw(t, i);
        r = (new lW).set(h[0], h[1], n, e, this[Vo], this[mo])
      } else r = (new lW).set(this.x + t, this.y + i, n, e, 0, this[mo]);
      return r[uk] = [Math[$o](s * t), Math[$o](s * i), Math[$o](s * n), Math[$o](s * e)], r
    }, _3g: function (t, i, n, e) {
      if (!this.rotate) {
        var s = hY[zf](this.x, this.y, this[da], this[no], t, i, n, e);
        return s && s.offset(-this.x, -this.y), s
      }
      var r = this._ig(t, i);
      return t = r[0], i = r[1], hY[zf](0, 0, this.width, this[no], r[0], r[1], n, e)
    }, equals: function (t) {
      return this.x == t.x && this.y == t.y && this.width == t[da] && this.height == t.height && this[Vo] == t.rotate
    }, toString: function () {
      return this.x + Vh + this.y + Vh + this[da] + Vh + this[no] + Vh + this[Vo]
    }, toJSON: function () {
      return {x: this.x, y: this.y, width: this[da], height: this[no], rotate: this.rotate, scale: this[mo]}
    }
  }), vW = {setStyle: gi, setStyles: bi, addRule: xi, pre: RY}, bW = function (t, i, n, e) {
    this[If] = t, this.kind = i, this[xv] = e, this[Ih] = n, this[pv] = dH.PROPERTY_TYPE_STYLE
  };
  m(bW, gY);
  var yW = function (t) {
    this.id = ++Dz, this._n8l = {}, this._ji = {}, t && (this[iO] = t)
  };
  yW.prototype = {
    _ji: null, getStyle: function (t) {
      return this._ji[t]
    }, setStyle: function (t, i) {
      var n = this._ji[t];
      return n === i || n && i && n[ic] && n[ic](i) ? !1 : this._n9b(t, i, new bW(this, t, i, n), this._ji)
    }, putStyles: function (t, i) {
      for (var n in t) {
        var e = t[n];
        i ? this._ji[n] = e : this.setStyle(n, e)
      }
    }, _$s: !0, invalidateVisibility: function (t) {
      this._$s = !0, t || (this instanceof xW && this[Hk]() && this[Uk](function (t) {
        t._$s = !0
      }), this._ic() && this.hasChildren() && this[Ec](function (t) {
        t.invalidateVisibility()
      }))
    }, onParentChanged: function () {
      this[Sk]()
    }, _ic: function () {
      return !this._4f && this instanceof mW
    }, invalidate: function () {
      this[kh](new yY(this, nO, wT))
    }, _n8v: null, addUI: function (t, i) {
      if (this[eO] || (this[eO] = new Qz), t.id || (t.id = ++Dz), this[eO].containsById(t.id)) return !1;
      var n = {id: t.id, ui: t, bindingProperties: i};
      this[eO].add(n);
      var e = new yY(this, nO, Gv, n);
      return this[kh](e)
    }, removeUI: function (t) {
      if (!this[eO]) return !1;
      var i = this[eO][Al](t.id || t);
      return i ? (this[eO][jh](i), void this.onEvent(new yY(this, nO, jh, i))) : !1
    }, clearUIs: function () {
      this[sO] && this.bindingUIs[jl]()[Nu](function (t) {
        this[rO](t.ui)
      }[Ah](this))
    }, toString: function () {
      return this[iO] || this.id
    }, type: hO, _4f: !1, _ia: !0, inGroup: function (t) {
      var i = Ce(this);
      return i == t || i && t instanceof mW && i[_c](t)
    }
  }, m(yW, IY), P(yW[bh], [Nk, Oh, jT, aO]), K(yW[bh], {
    enableSubNetwork: {
      get: function () {
        return this._4f
      }, set: function (t) {
        if (this._4f != t) {
          var i = this._4f;
          this._4f = t, this instanceof xW && this._10(), this.onEvent(new gY(this, qk, t, i))
        }
      }
    }, bindingUIs: {
      get: function () {
        return this._n8v
      }
    }, styles: {
      get: function () {
        return this._ji
      }, set: function (t) {
        if (this._ji != t) {
          for (var i in this._ji) i in t || (t[i] = n);
          this[oO](t), this._ji = t
        }
      }
    }
  }), _H[fO] = Ce;
  var gW = function (t, i, n) {
    this.id = ++Dz, this._n8l = {}, this._ji = {}, n && (this.$name = n), this[pc] = t, this.$to = i, this[uO]()
  };
  gW[bh] = {
    $uiClass: Ts, _js: null, _if: null, _jo: null, _id: null, _e0: !1, type: cO, otherNode: function (t) {
      return t == this.from ? this.to : t == this.to ? this[cc] : void 0
    }, connect: function () {
      if (this._e0) return !1;
      if (!this.$from || !this.$to) return !1;
      if (this._e0 = !0, this.$from == this.$to) return void this[pc]._i8(this);
      Ge(this.$to, this), $e(this[pc], this), Oe(this[pc], this, this.$to);
      var t = this[oc], i = this[rc];
      if (t != i) {
        var n;
        this[pc]._dx && (Ie(t, this, i), n = !0), this.$to._dx && (Pe(i, this, t), n = !0), n && Oe(t, this, i)
      }
    }, disconnect: function () {
      if (!this._e0) return !1;
      if (this._e0 = !1, this[pc] == this.$to) return void this[pc][_O](this);
      Fe(this.$from, this), ze(this.$to, this), Me(this[pc], this, this.$to);
      var t = this.fromAgent, i = this[rc];
      if (t != i) {
        var n;
        this[pc]._dx && (Se(t, this, i), n = !0), this.$to._dx && (Ae(i, this, t), n = !0), n && Me(t, this, i)
      }
    }, isConnected: function () {
      return this._e0
    }, isInvalid: function () {
      return !this[pc] || !this.$to
    }, isLooped: function () {
      return this[pc] == this.$to
    }, getEdgeBundle: function (t) {
      return t ? this._32() : this[xc]() ? this.$from._4n : this.$from.getEdgeBundle(this.$to)
    }, hasEdgeBundle: function () {
      var t = this.getEdgeBundle(!0);
      return t && t.edges.length > 1
    }, _32: function () {
      var t = this[oc], i = this.toAgent;
      return t == i ? this[pc]._dx || this.$to._dx ? null : this[pc]._4n : this.fromAgent.getEdgeBundle(this[rc])
    }, _n7g: null, hasPathSegments: function () {
      return this[$_] && !this[$_][Dl]()
    }, isBundleEnabled: function () {
      return this.bundleEnabled && !this[P_]() && !this.edgeType
    }, firePathChange: function (t) {
      this[kh](new gY(this, dO, t))
    }, addPathSegment: function (t, i, n) {
      var e = new XH(i || zH, t);
      this[$_] || (this[$_] = new Qz), this[$_].add(e, n), this[lO](e)
    }, addPathSegement: function () {
      return _H.log('change "edge.addPathSegement(...)" to "edge.addPathSegment(...)"'), this.addPathSegment[xh](this, arguments)
    }, removePathSegmentByIndex: function (t) {
      return this[vO](t)
    }, removePathSegment: function (t) {
      return this[$_] ? (j(t) && (t = this[$_].getByIndex(t)), void (t && (this[$_].remove(t), this.firePathChange(t)))) : !1
    }, movePathSegment: function (t, i, n) {
      if (!this[$_]) return !1;
      if (t = t || 0, i = i || 0, _H[bO](n)) {
        var e = this[$_].getByIndex(n);
        return e ? (e[Mg](t, i), void this[lO]()) : !1
      }
      l(function (n) {
        n.move(t, i)
      }), this.firePathChange()
    }, move: function (t, i) {
      return this[$_] ? (this._n7g[Nu](function (n) {
        n[Mg](t, i)
      }, this), void this[lO]()) : !1
    }, validateEdgeBundle: function () {
    }
  }, m(gW, yW), K(gW.prototype, {
    pathSegments: {
      get: function () {
        return this[$_]
      }, set: function (t) {
        _H[$h](t) && (t = new Qz(t)), this[$_] = t, this.firePathChange()
      }
    }, from: {
      get: function () {
        return this[pc]
      }, set: function (t) {
        if (this[pc] != t) {
          var i = new gY(this, cc, t, this[pc]);
          this[Cv](i) !== !1 && (this[ub](), this[pc] = t, this[uO](), this[kh](i))
        }
      }
    }, to: {
      get: function () {
        return this.$to
      }, set: function (t) {
        if (this.$to != t) {
          var i = new gY(this, yO, t, this.$to);
          this[Cv](i) !== !1 && (this[ub](), this.$to = t, this[uO](), this[kh](i))
        }
      }
    }, fromAgent: {
      get: function () {
        return this.$from ? this[pc]._dx || this.$from : null
      }
    }, toAgent: {
      get: function () {
        return this.$to ? this.$to._dx || this.$to : null
      }
    }
  }), P(gW[bh], [I_, {name: gO, value: !0}, R_]);
  var xW = function (t, i, n) {
    2 == arguments.length && j(t) && (n = i, i = t, t = null), this.id = ++Dz, this[Hv] = {}, this._ji = {}, t && (this.$name = t), this[Fc] = xO, this[hu] = oY[ov], this[pO] = {
      x: i || 0,
      y: n || 0
    }, this[hc] = {}
  };
  xW[bh] = {
    $uiClass: ks, _dx: null, forEachEdge: function (t, i, n) {
      return !n && this._lb && this._lb[Nu](t, i) === !1 ? !1 : He(this, t, i)
    }, forEachOutEdge: function (t, i) {
      return Ue(this, t, i)
    }, forEachInEdge: function (t, i) {
      return We(this, t, i)
    }, getEdges: function () {
      var t = [];
      return this[Uk](function (i) {
        t[dh](i)
      }), t
    }, _i5: null, _ff: null, _jf: null, _i7: null, _n99: 0, _95: 0, hasInEdge: function () {
      return null != this._i5
    }, hasOutEdge: function () {
      return null != this._ff
    }, hasEdge: function () {
      return null != this._i5 || null != this._ff || this.hasLoops()
    }, linkedWith: function (t) {
      return t[cc] == this || t.to == this || t[oc] == this || t[rc] == this
    }, hasEdgeWith: function (t) {
      var i = this[ac](t);
      return i && i[EO][rh] > 0
    }, _lb: null, _4n: null, hasLoops: function () {
      return this._lb && this._lb[rh] > 0
    }, _i8: function (t) {
      return this._lb || (this._lb = new Qz, this._4n = new qX(this, this, this._lb)), this._4n._hy(t)
    }, _n88: function (t) {
      return this._4n ? this._4n._dc(t) : void 0
    }, getEdgeBundle: function (t) {
      return t == this ? this._4n : this._linkedNodes[t.id] || t[hc][this.id]
    }, _7g: function () {
      return this._97 && this._97[rh]
    }, _5a: function () {
      return this._8b && this._8b[rh]
    }, _9s: function () {
      return this._7g() || this._5a()
    }, _8b: null, _97: null, _n8w: function () {
      var t = this._dx, i = ke(this);
      if (t != i) {
        var n = Ye(this);
        this._9q(i), n[Nu](function (t) {
          var i = t.fromAgent, n = t[rc], t = t[mO], e = t[pc]._dx, s = t.$to._dx;
          i != n && (i && Se(i, t, n || t.$to), n && Ae(n, t, i || t[pc])), e != s && (e && Ie(e, t, s || t.$to), s && Pe(s, t, e || t.$from), Oe(e || t.$from, t, s || t.$to))
        }, this)
      }
    }, onParentChanged: function () {
      _H.doSuper(this, xW, Wv, arguments), this[wO]()
    }, _8c: null, _10: function () {
      var t;
      if (this._4f ? t = null : (t = this._dx, t || this._fx !== !1 || (t = this)), this._8c == t) return !1;
      if (this._8c = t, this._fs && this._fs._jz[rh]) for (var i, n = this._fs._jz, e = 0, s = n[rh]; s > e; e++) i = n[e], i instanceof xW && i._9q(t)
    }, setLocation: function (t, i) {
      if (this[pO] && this[pO].x == t && this[pO].y == i) return !1;
      var n;
      n = this[pO] ? {x: this[pO].x, y: this[pO].y} : this.$location;
      var e = new gY(this, TO, n, {x: t, y: i});
      return this[Cv](e) === !1 ? !1 : (this[pO] ? (this[pO].x = t, this[pO].y = i) : this.$location = new nY(t, i), this.onEvent(e), !0)
    }, _dn: null, addFollower: function (t) {
      return null == t ? !1 : t[kO] = this
    }, removeFollower: function (t) {
      return this._dn && this._dn.contains(t) ? t[kO] = null : !1
    }, hasFollowers: function () {
      return this._dn && !this._dn[Dl]()
    }, toFollowers: function () {
      return this[dc]() ? this._dn[jl]() : null
    }, clearFollowers: function () {
      this[dc]() && (this.toFollowers(), l(this[OO](), function (t) {
        t.host = null
      }))
    }, getFollowerIndex: function (t) {
      return this._dn && this._dn[N_](t) ? this._dn.indexOf(t) : -1
    }, setFollowerIndex: function (t, i) {
      return this._dn && this._dn.contains(t) ? void this._dn[gc](t, i) : -1
    }, getFollowerCount: function () {
      return this._dn ? this._dn[rh] : 0
    }, _9k: function () {
      return this._dn ? this._dn : (this._dn = new Qz, this._dn)
    }, isFollow: function (t) {
      if (!t || !this[MO]) return !1;
      for (var i = this[MO]; i;) {
        if (i == t) return !0;
        i = i[MO]
      }
      return !1
    }, _9q: function (t) {
      return t == this._dx ? !1 : (this._dx = t, this.invalidateVisibility(), void this._10())
    }, type: IO
  }, m(xW, yW), K(xW[bh], {
    loops: {
      get: function () {
        return this._lb
      }
    }, edgeCount: {
      get: function () {
        return this[fc] + this._95
      }
    }, agentNode: {
      get: function () {
        return this._dx || this
      }
    }, host: {
      set: function (t) {
        if (this == t || t == this[MO]) return !1;
        var i = new gY(this, kO, this[MO], t);
        if (!1 === this.beforeEvent(i)) return !1;
        var n = null, e = null, s = this._host;
        if (null != t && (n = new gY(t, SO, null, this), !1 === t[Cv](n))) return !1;
        if (null != s && (e = new gY(s, PO, null, this), !1 === s.beforeEvent(e))) return !1;
        if (this[MO] = t, null != t) {
          var r = t._9k();
          r.add(this)
        }
        if (null != s) {
          var r = s._9k();
          r[jh](this)
        }
        return this[kh](i), null != t && t[kh](n), null != s && s[kh](e), !0
      }, get: function () {
        return this[MO]
      }
    }
  }), P(xW[bh], [TO, kT, Bp, Vo, AO]), K(xW[bh], {
    x: {
      get: function () {
        return this.location.x
      }, set: function (t) {
        t != this[TO].x && (this[TO] = new nY(t, this[TO].y))
      }
    }, y: {
      get: function () {
        return this[TO].y
      }, set: function (t) {
        t != this[TO].y && (this[TO] = new nY(this.location.x, t))
      }
    }
  });
  var pW = function (t, i) {
    t instanceof ZH && (i = t, t = n), w(this, pW, [t]), this[C_] = i || new ZH, this[AO] = null, this.uiClass = xr, Jz[CO] || (Jz[CO] = {}, Jz[CO][kW.ARROW_TO] = !1), this[oO](Jz[CO])
  };
  pW.prototype = {
    $uiClass: xr, type: LO, moveTo: function (t, i) {
      this[C_][bf](t, i), this[lO]()
    }, lineTo: function (t, i) {
      this.path[vf](t, i), this[lO]()
    }, quadTo: function (t, i, n, e) {
      this[C_].quadTo(t, i, n, e), this[lO]()
    }, curveTo: function (t, i, n, e, s, r) {
      this[C_][wc](t, i, n, e, s, r), this[lO]()
    }, arcTo: function (t, i, n, e, s) {
      this.path.arcTo(t, i, n, e, s), this[lO]()
    }, closePath: function () {
      this[C_][Uf](), this[lO]()
    }, clear: function () {
      this[C_][yu](), this[lO]()
    }, removePathSegmentByIndex: function (t) {
      this[C_].removePathSegment(t) !== !1 && this[lO]()
    }, firePathChange: function () {
      this.path._6h = !0, this[kh](new gY(this, dO))
    }, addPathSegment: function (t, i, n) {
      this[C_].add(new XH(i || zH, t), n), this[lO]()
    }
  }, m(pW, xW), K(pW[bh], {
    path: {
      get: function () {
        return this.image
      }, set: function (t) {
        this[Bp] = t
      }
    }, pathSegments: {
      get: function () {
        return this[C_][RO]
      }, set: function (t) {
        this[C_].segments = t || [], this[lO]()
      }
    }, length: {
      get: function () {
        return this.path[rh]
      }
    }
  }), _H[DO] = pW;
  var EW = {
    _jg: {}, register: function (t, i) {
      EW._jg[t] = i
    }, getShape: function (t, i, e, s, r, h) {
      s === n && (s = i, r = e, i = 0, e = 0), s || (s = 50), r || (r = 50);
      var a = EW._jg[t];
      return a ? a.generator instanceof Function ? a.generator(i, e, s, r, h) : a : void 0
    }, getRect: function (t, i, n, e, s, r, h) {
      return t instanceof Object && da in t && (i = t.y, n = t[da], e = t.height, s = t.rx, r = t.ry, h = t.path, t = t.x), Xe(h || new ZH, t, i, n, e, s, r)
    }, getAllShapes: function (t, i, n, e, s) {
      var r = {};
      for (var h in EW._jg) {
        var a = EW[jO](h, t, i, n, e, s);
        a && (r[h] = a)
      }
      return r
    }, createRegularShape: function (t, i, n, e, s) {
      return is(t, i, n, e, s)
    }
  };
  ls(), vs[bh] = {type: NO}, m(vs, pW), _H.Bus = vs, bs.prototype = {
    _fr: function (t) {
      var i, n = t._jq;
      i = n ? n._fs : this.$roots;
      var e = i[lh](t);
      if (0 > e) throw new Error(lb + t + "' not exist in the box");
      for (; e >= 0;) {
        if (0 == e) return n instanceof xW ? n : null;
        e -= 1;
        var r = i[Sl](e);
        if (r = s(r)) return r
      }
      return null
    }, forEachNode: function (t, i) {
      this[Nu](function (n) {
        return n instanceof xW && t[hh](i, n) === !1 ? !1 : void 0
      })
    }, _3r: null
  }, m(bs, PY), K(bs[bh], {
    propertyChangeDispatcher: {
      get: function () {
        return this._$u
      }
    }, currentSubNetwork: {
      get: function () {
        return this._3r
      }, set: function (t) {
        if (t && !t.enableSubNetwork && (t = null), this._3r != t) {
          var i = this._3r;
          this._3r = t, this._$u.onEvent(new gY(this, qO, t, i))
        }
      }
    }
  }), Jz.GROUP_TYPE = dH[BO], Jz[$O] = 5, Jz.GROUP_EXPANDED = !0, Jz[FO] = {width: 60, height: 60};
  var mW = function (t, i, e) {
    w(this, mW, arguments), (i === n || e === n) && (this.$location[GO] = !0), this.$groupType = Jz.GROUP_TYPE, this[eu] = Jz[$O], this[Fc] = QH[zO], this[YO] = Jz.GROUP_MIN_SIZE, this[Bk] = Jz[HO]
  };
  mW.prototype = {
    type: UO, $uiClass: lr, _9x: function () {
      return !this._fx && !this._dx
    }, forEachOutEdge: function (t, i, n) {
      return Ue(this, t, i) === !1 ? !1 : !n && this._9x() && this._8b ? this._8b[Nu](t, i) : void 0
    }, forEachInEdge: function (t, i, n) {
      return We(this, t, i) === !1 ? !1 : !n && this._9x() && this._97 ? this._97[Nu](t, i) : void 0
    }, forEachEdge: function (t, i, n) {
      return T(this, mW, Uk, arguments) === !1 ? !1 : n || n || !this._9x() ? void 0 : this._97 && this._97[Nu](t, i) === !1 ? !1 : this._8b ? this._8b[Nu](t, i) : void 0
    }, hasInEdge: function (t) {
      return t ? null != this._i5 : null != this._i5 || this._7g()
    }, hasOutEdge: function (t) {
      return t ? null != this._ff : null != this._ff || this._5a()
    }, hasEdge: function (t) {
      return t ? null != this._i5 || null != this._ff : null != this._i5 || null != this._ff || this._9s()
    }
  }, m(mW, xW), K(mW[bh], {
    expanded: {
      get: function () {
        return this._fx
      }, set: function (t) {
        if (this._fx != t) {
          var i = new gY(this, Bk, t, this._fx);
          this[Cv](i) !== !1 && (this._fx = t, this._10(), this[kh](i), this._dx || ys[hh](this))
        }
      }
    }
  }), P(mW[bh], [WO, XO, Of, VO]), _H[ZO] = mW, gs[bh][Xo] = KO, m(gs, xW), _H[JO] = gs;
  var wW = function (t) {
    this._jk = new hY, this._8d = new hY, this._fp = new hY, this.id = ++Dz, t && (this[Yo] = t)
  };
  wW.prototype = {
    invalidate: function () {
      this[QO]()
    },
    _1g: !0,
    _jk: null,
    _8d: null,
    _fp: null,
    _n7p: !1,
    _jl: 1,
    _jm: 1,
    _ia: !0,
    _8f: 0,
    _6j: 0,
    _jq: null,
    _n7k: null,
    borderColor: tM,
    borderLineDash: null,
    borderLineDashOffset: null,
    syncSelection: !0,
    syncSelectionStyles: !0,
    _18: function () {
      this.$anchorPoint = ci(this[AO], this._8f, this._6j)
    },
    setMeasuredBounds: function (t, i, n, e) {
      return t instanceof Object && (n = t.x, e = t.y, i = t[no], t = t[da]), this._jk[da] == t && this._jk[no] == i && this._jk.x == n && this._jk.y == e ? !1 : void this._jk.set(n || 0, e || 0, t || 0, i || 0)
    },
    initialize: function () {
    },
    measure: function () {
    },
    draw: function () {
    },
    _82: function (t, i, n) {
      n[dE] == dH.SELECTION_TYPE_SHADOW ? (t[bd] = n.selectionColor, t[gd] = n.selectionShadowBlur * i, t[Cp] = (n[aE] || 0) * i, t[Lp] = (n[oE] || 0) * i) : this._1z(t, i, n)
    },
    _1z: function (t, i, n) {
      var e = n.selectionBorder || 0;
      n.selectionBackgroundColor && (t[_f] = n.selectionBackgroundColor, t[iM](this._8d.x - e / 2, this._8d.y - e / 2, this._8d.width + e, this._8d[no] + e)), t[yf] = n[rE], t.lineWidth = e, t[nM](this._8d.x - e / 2, this._8d.y - e / 2, this._8d[da] + e, this._8d[no] + e)
    },
    _ju: function (t, i, n, e) {
      if (!this._ia) return !1;
      if (this[eM] || (n = this[Dk]), (n && !this[sM] || !e) && (e = this), t.save(), 1 != this[rM] && (t[of] = this[rM]), t[Eo](this.$x, this.$y), this[Qf] && this[Jf] && t[Vo](this.$_hostRotate), (this[hM] || this[aM]) && t[Eo](this[hM], this.offsetY), this[Zf] && t.rotate(this[Zf]), this[Xf] && this[Vf] && t[Eo](-this[Vf].x, -this[Vf].y), this[bd] && (t.shadowColor = this[bd], t.shadowBlur = this[gd] * i, t[Cp] = this[Cp] * i, t[Lp] = this[Lp] * i), n && e[dE] == dH[oM] && (this._1z(t, i, e), n = !1), this._$q() && this[uu] && !this[uu][fM]) {
        this._mbShape[Do]();
        var s = {
          lineWidth: this[ru],
          strokeStyle: this[uM],
          lineDash: this[cM],
          lineDashOffset: this[_M],
          fillColor: this.$backgroundColor,
          fillGradient: this[ou],
          lineCap: Wx,
          lineJoin: $o
        };
        this[uu][Ef](t, i, s, n, e), n = !1, t[bd] = vE
      }
      t[ff](), this[Ef](t, i, n, e), t[AE]()
    },
    invalidateData: function () {
      this[dM] = !0, this[iu] = !0, this._1g = !0
    },
    invalidateSize: function () {
      this[iu] = !0, this._1g = !0
    },
    invalidateRender: function () {
      this._1g = !0
    },
    _57: function () {
    },
    _$q: function () {
      return this.$backgroundColor || this[lM] || this[ru]
    },
    _4a: function () {
      return this.$backgroundColor || this[lM]
    },
    doValidate: function () {
      return this[dM] && (this.$invalidateData = !1, this.measure() !== !1 && (this.$invalidateSize = !0)), this.$invalidateSize && this[vM] && this[vM](), Jn[hh](this) ? (this[Tu] = !0, this[bM] && this[bM](), !0) : this[yM] ? (this[Tu] = !0, this[yM] = !1, !0) : void 0
    },
    validate: function () {
      var t = this._ia;
      return this[gM] && (this[gM] = !1, this._ia = this.$visible, !this._ia || (this[Eu] || this[xM]) && this._57() !== !1 || (this._ia = !1)), this._ia ? (this._1g = !1, this._n7p || (this[pM](), this[zb] = !0), this[EM]()) : t != this._ia
    },
    _ig: function (t, i) {
      return t -= this.$x, i -= this.$y, Kn[hh](this, {x: t, y: i})
    },
    hitTest: function (t, i, n, e) {
      if (t -= this.$x, i -= this.$y, !this._fp[Bo](t, i, n)) return !1;
      var s = Kn[hh](this, {x: t, y: i});
      return t = s.x, i = s.y, !e && this._$q() && this[uu] && this[uu][q_](t, i, n, !1, this[ru], this[mM] || this[lM]) ? !0 : this[wM](t, i, n)
    },
    doHitTest: function (t, i, n) {
      return this._jk.intersectsPoint(t, i, n)
    },
    hitTestByBounds: function (t, i, n, e) {
      var s = this._ig(t, i);
      return !e && this._$q() && this[uu] && this._mbShape[q_](t, i, n, !1, this[ru], this[mM] || this[lM]) ? !0 : this._jk[Bo](s.x, s.y, n)
    },
    onDataChanged: function () {
      this[dM] = !0, this._1g = !0, this[gM] = !0
    },
    getBounds: function () {
      var t = this._fp[_h]();
      return t[cp](this.x, this.y), this[sc] && (this[sc][Vo] && Ci(t, this[sc].rotate, t), t.offset(this.parent.x || 0, this[sc].y || 0)), t
    },
    destroy: function () {
      this[Mm] = !0
    },
    _dp: !1
  }, K(wW[bh], {
    originalBounds: {
      get: function () {
        return this._jk
      }
    }, data: {
      get: function () {
        return this.$data
      }, set: function (t) {
        if (this[Eu] != t) {
          var i = this.$data;
          this.$data = t, this[TM](t, i)
        }
      }
    }, parent: {
      get: function () {
        return this._jq
      }
    }, showOnTop: {
      get: function () {
        return this._dp
      }, set: function (t) {
        t != this._dp && (this._dp = t, this._1g = !0, this._jq && this._jq[kM] && this._jq._n9h(this))
      }
    }
  }), ps(wW[bh], {
    visible: {value: !0, validateFlags: [OM, MM]},
    showEmpty: {validateFlags: [OM]},
    anchorPosition: {value: oY[ov], validateFlags: [IM, MM]},
    position: {value: oY[ov], validateFlags: [MM]},
    offsetX: {value: 0, validateFlags: [MM]},
    offsetY: {value: 0, validateFlags: [MM]},
    layoutByAnchorPoint: {value: !0, validateFlags: [SM, IM, MM]},
    padding: {value: 0, validateFlags: [SM]},
    border: {value: 0, validateFlags: [SM]},
    borderRadius: {value: Jz[PM]},
    showPointer: {value: !1, validateFlags: [SM]},
    pointerX: {value: 0, validateFlags: [SM]},
    pointerY: {value: 0, validateFlags: [SM]},
    pointerWidth: {value: Jz.POINTER_WIDTH},
    backgroundColor: {validateFlags: [SM]},
    backgroundGradient: {validateFlags: [SM, AM]},
    selected: {value: !1, validateFlags: [SM]},
    selectionBorder: {value: Jz[sp], validateFlags: [SM]},
    selectionShadowBlur: {value: Jz.SELECTION_SHADOW_BLUR, validateFlags: [SM]},
    selectionColor: {value: Jz[rp], validateFlags: [SM]},
    selectionType: {value: Jz[CM], validateFlags: [SM]},
    selectionShadowOffsetX: {value: 0, validateFlags: [SM]},
    selectionShadowOffsetY: {value: 0, validateFlags: [SM]},
    shadowBlur: {value: 0, validateFlags: [SM]},
    shadowColor: {validateFlags: [SM]},
    shadowOffsetX: {value: 0, validateFlags: [SM]},
    shadowOffsetY: {value: 0, validateFlags: [SM]},
    renderColorBlendMode: {},
    renderColor: {},
    x: {value: 0, validateFlags: [MM]},
    y: {value: 0, validateFlags: [MM]},
    rotatable: {value: !0, validateFlags: [LM, SM]},
    rotate: {value: 0, validateFlags: [LM, SM]},
    _hostRotate: {validateFlags: [LM]},
    lineWidth: {value: 0, validateFlags: [zg]},
    alpha: {value: 1}
  });
  var TW = [dH[Xc], dH[Vc], dH[RM]];
  ms[bh] = {
    removeBinding: function (t) {
      for (var i = TW[rh]; --i >= 0;) {
        var n = TW[i], e = this[n];
        for (var s in e) {
          var r = e[s];
          Array[$h](r) ? (v(r, function (i) {
            return i[Yc] == t
          }, this), r[rh] || delete e[s]) : r[Yc] == t && delete e[s]
        }
      }
    }, _2g: function (t, i, n) {
      if (!n && (n = this[i[pv] || dH.PROPERTY_TYPE_ACCESSOR], !n)) return !1;
      var e = n[t];
      e ? (Array[$h](e) || (n[t] = e = [e]), e[dh](i)) : n[t] = i
    }, _2q: function (t, i, n, e, s, r) {
      t = t || dH.PROPERTY_TYPE_ACCESSOR;
      var h = this[t];
      if (!h) return !1;
      var a = {property: i, propertyType: t, bindingProperty: e, target: n, callback: s, invalidateSize: r};
      this._2g(i, a, h)
    }, onBindingPropertyChange: function (t, i, n, e) {
      var s = this[n || dH.PROPERTY_TYPE_ACCESSOR];
      if (!s) return !1;
      var r = s[i];
      return r ? (t._1g = !0, Es(t, r, n, e), !0) : !1
    }, initBindingProperties: function (t, i) {
      for (var e = TW[rh]; --e >= 0;) {
        var s = TW[e], r = this[s];
        for (var h in r) {
          var a = r[h];
          if (a[Uc]) {
            var o = a[Yc];
            if (o) {
              if (!(o instanceof wW || (o = t[o]))) continue
            } else o = t;
            var f;
            f = i === !1 ? t.getProperty(a.property, s) : s == dH[Vc] ? t[O_].getStyle(t[Eu], a[Hc]) : t.$data[a[Hc]], f !== n && (o[a[Uc]] = f)
          }
        }
      }
    }
  };
  var kW = {};
  kW.SELECTION_COLOR = DM, kW.SELECTION_BORDER = jM, kW.SELECTION_SHADOW_BLUR = "selection.shadow.blur", kW[NM] = "selection.shadow.offset.x", kW.SELECTION_SHADOW_OFFSET_Y = "selection.shadow.offset.y", kW[CM] = qM, kW[BM] = $M, kW.RENDER_COLOR_BLEND_MODE = "render.color.blend.mode", kW[FM] = GM, kW.SHADOW_BLUR = zM, kW[YM] = HM, kW[UM] = WM, kW.SHADOW_OFFSET_Y = XM, kW[VM] = ZM, kW[KM] = JM, kW[QM] = "shape.stroke.fill.color", kW[tI] = iI, kW[nI] = "shape.line.dash.offset", kW[eI] = sI, kW.SHAPE_FILL_GRADIENT = rI, kW.SHAPE_OUTLINE = hI, kW[aI] = oI, kW[fI] = uI, kW[cI] = _I, kW[dI] = lI, kW[vI] = bI, kW.BORDER_COLOR = yI, kW[gI] = xI, kW.BORDER_LINE_DASH_OFFSET = "border.line.dash.offset", kW[PM] = pI, kW[EI] = Of, kW[mI] = wI, kW[TI] = kI, kW[OI] = MI, kW[II] = SI, kW[PI] = "image.background.color", kW[AI] = "image.background.gradient", kW[CI] = LI, kW.IMAGE_BORDER_STYLE = kW[RI] = DI, kW[jI] = "image.border.line.dash", kW[NI] = "image.border.line.dash.offset", kW[qI] = kW[BI] = $I, kW.IMAGE_PADDING = FI, kW[GI] = zI, kW[YI] = HI, kW.IMAGE_ALPHA = UI, kW[WI] = XI, kW[VI] = ZI, kW[KI] = JI, kW[QI] = "label.anchor.position", kW.LABEL_COLOR = tS, kW[iS] = nS, kW[eS] = sS, kW[rS] = hS, kW[aS] = oS, kW.LABEL_POINTER_WIDTH = fS, kW[uS] = cS, kW[_S] = dS, kW.LABEL_OFFSET_X = lS, kW[vS] = bS, kW[yS] = gS, kW.LABEL_ALIGN_POSITION = xS, kW.LABEL_BORDER = pS, kW[ES] = "label.border.line.dash", kW.LABEL_BORDER_LINE_DASH_OFFSET = "label.border.line.dash.offset", kW[mS] = wS, kW[TS] = "label.background.color", kW[kS] = "label.background.gradient", kW[OS] = MS, kW.LABEL_SHADOW_BLUR = IS, kW.LABEL_SHADOW_COLOR = SS, kW.LABEL_SHADOW_OFFSET_X = "label.shadow.offset.x", kW[PS] = "label.shadow.offset.y", kW[AS] = CS, kW[LS] = RS, kW.GROUP_BACKGROUND_COLOR = "group.background.color", kW[DS] = "group.background.gradient", kW[jS] = NS, kW[qS] = BS, kW.GROUP_STROKE_STYLE = $S, kW[FS] = "group.stroke.line.dash", kW.GROUP_STROKE_LINE_DASH_OFFSET = "group.stroke.line.dash.offset", kW.EDGE_BUNDLE_LABEL_ROTATE = "edge.bundle.label.rotate", kW.EDGE_BUNDLE_LABEL_POSITION = "edge.bundle.label.position", kW[GS] = "edge.bundle.label.anchor.position", kW[zS] = "edge.bundle.label.color", kW[YS] = "edge.bundle.label.font.size", kW[HS] = "edge.bundle.label.font.family", kW[US] = "edge.bundle.label.font.style", kW[WS] = "edge.bundle.label.padding", kW.EDGE_BUNDLE_LABEL_POINTER_WIDTH = "edge.bundle.label.pointer.width", kW[XS] = "edge.bundle.label.pointer", kW[VS] = "edge.bundle.label.radius", kW[ZS] = "edge.bundle.label.offset.x", kW[KS] = "edge.bundle.label.offset.y", kW.EDGE_BUNDLE_LABEL_BORDER = "edge.bundle.label.border", kW[JS] = "edge.bundle.label.border.color", kW[QS] = "edge.bundle.label.background.color", kW[tP] = "edge.bundle.label.background.gradient", kW[iP] = "edge.bundle.label.rotatable", kW.EDGE_WIDTH = nP,kW[eP] = sP,kW[rP] = hP,kW[aP] = oP,kW.EDGE_LINE_DASH = fP,kW[uP] = "edge.line.dash.offset",kW.EDGE_FROM_OFFSET = cP,kW[k_] = _P,kW[dP] = lP,kW[F_] = vP,kW[bP] = yP,kW[G_] = gP,kW[xP] = pP,kW[y_] = EP,kW[r_] = "edge.split.by.percent",kW[u_] = mP,kW[c_] = wP,kW[TP] = kP,kW[l_] = OP,kW.EDGE_FROM_AT_EDGE = MP,kW.EDGE_TO_AT_EDGE = IP,kW[w_] = SP,kW.EDGE_TO_PORT = PP,kW[AP] = CP,kW[LP] = RP,kW[DP] = jP,kW.ARROW_FROM_STROKE = NP,kW[qP] = "arrow.from.stroke.style",kW.ARROW_FROM_OUTLINE = BP,kW[$P] = "arrow.from.outline.style",kW[FP] = GP,kW[zP] = "arrow.from.line.dash.offset",kW.ARROW_FROM_FILL_COLOR = "arrow.from.fill.color",kW[YP] = "arrow.from.fill.gradient",kW.ARROW_FROM_LINE_CAP = HP,kW.ARROW_FROM_LINE_JOIN = UP,kW[WP] = XP,kW.ARROW_TO_SIZE = VP,kW[ZP] = KP,kW.ARROW_TO_STROKE = JP,kW.ARROW_TO_STROKE_STYLE = "arrow.to.stroke.style",kW[QP] = tA,kW.ARROW_TO_OUTLINE_STYLE = "arrow.to.outline.style",kW.ARROW_TO_LINE_DASH = iA,kW.ARROW_TO_LINE_DASH_OFFSET = "arrow.to.line.dash.offset",kW.ARROW_TO_FILL_COLOR = nA,kW[eA] = "arrow.to.fill.gradient",kW[sA] = rA,kW[hA] = aA;
  var OW = new ms, MW = dH[Xc], IW = dH.PROPERTY_TYPE_STYLE, SW = !1;
  OW._2q(IW, kW[CM], null, dE), OW._2q(IW, kW[sp], null, uE), OW._2q(IW, kW[oA], null, hE), OW._2q(IW, kW[rp], null, rE), OW._2q(IW, kW[NM], null, "selectionShadowOffsetX"), OW._2q(IW, kW.SELECTION_SHADOW_OFFSET_Y, null, "selectionShadowOffsetY"), OW._2q(MW, Oh, tw, Yo), OW._2q(IW, kW.LABEL_VISIBLE, tw, XT), OW._2q(IW, kW[VI], tw, xu), OW._2q(IW, kW.LABEL_ANCHOR_POSITION, tw, AO), OW._2q(IW, kW[fA], tw, uA), OW._2q(IW, kW.LABEL_FONT_SIZE, tw, cA), OW._2q(IW, kW[_A], tw, hx), OW._2q(IW, kW[ES], tw, cM), OW._2q(IW, kW[dA], tw, _M), OW._2q(IW, kW.LABEL_BORDER_STYLE, tw, uM), OW._2q(IW, kW.LABEL_BACKGROUND_COLOR, tw, lA), OW._2q(IW, kW[LS], tw, vA), SW || (OW._2q(IW, kW[bA], null, gd), OW._2q(IW, kW.SHADOW_COLOR, null, bd), OW._2q(IW, kW[UM], null, Cp), OW._2q(IW, kW[yA], null, Lp), OW._2q(IW, kW[eS], tw, qd), OW._2q(IW, kW[rS], tw, Nd), OW._2q(IW, kW.LABEL_ALIGN_POSITION, tw, gA), OW._2q(IW, kW.LABEL_ROTATE, tw, Vo), OW._2q(IW, kW.LABEL_PADDING, tw, Of), OW._2q(IW, kW[xA], tw, pA), OW._2q(IW, kW[uS], tw, EA), OW._2q(IW, kW[_S], tw, mA), OW._2q(IW, kW[wA], tw, hM), OW._2q(IW, kW.LABEL_OFFSET_Y, tw, aM), OW._2q(IW, kW[OS], tw, TA), OW._2q(IW, kW[kS], tw, fu), OW._2q(IW, kW[yS], tw, kT), OW._2q(IW, kW[kA], tw, gd), OW._2q(IW, kW[OA], tw, bd), OW._2q(IW, kW[MA], tw, Cp), OW._2q(IW, kW[PS], tw, Lp), OW._2q(IW, kW[AS], tw, jT), OW._2q(IW, kW[BM], null, yp), OW._2q(IW, kW[IA], null, Dp), OW._2q(IW, kW[FM], null, GM));
  var PW = new ms;
  PW._2q(MW, TO), PW._2q(MW, AO, null, SA), PW._2q(MW, Vo, null, Vo), SW || (PW._2q(IW, kW[cI], null, lA), PW._2q(IW, kW[dI], null, fu), PW._2q(IW, kW[EI], null, Of), PW._2q(IW, kW[vI], null, hx), PW._2q(IW, kW[PM], null, mA), PW._2q(IW, kW[PA], null, uM), PW._2q(IW, kW[gI], null, cM), PW._2q(IW, kW[AA], null, _M)), PW._2q(MW, Bp, Bp, Yo, CA), PW._2q(MW, kT, Bp, kT), PW._2q(IW, kW[VM], Bp, hf), PW._2q(IW, kW[KM], Bp, yf), PW._2q(IW, kW[eI], Bp, bE), PW._2q(IW, kW[fI], Bp, pu), SW || (PW._2q(IW, kW.IMAGE_ADJUST, Bp, LA), PW._2q(IW, kW[RA], Bp, cE), PW._2q(IW, kW[aI], Bp, lE), PW._2q(IW, kW.SHAPE_FILL_GRADIENT, Bp, yE), PW._2q(IW, kW.SHAPE_LINE_DASH, Bp, ku), PW._2q(IW, kW.SHAPE_LINE_DASH_OFFSET, Bp, Cu), PW._2q(IW, kW.LINE_CAP, Bp, vd), PW._2q(IW, kW[TI], Bp, _E), PW._2q(IW, kW[PI], Bp, lA), PW._2q(IW, kW.IMAGE_BACKGROUND_GRADIENT, Bp, fu), PW._2q(IW, kW[DA], Bp, Of), PW._2q(IW, kW[CI], Bp, hx), PW._2q(IW, kW[BI], Bp, mA), PW._2q(IW, kW[RI], Bp, uM), PW._2q(IW, kW[jI], Bp, cM), PW._2q(IW, kW[NI], Bp, _M), PW._2q(IW, kW[GI], Bp, jT), PW._2q(IW, kW[jA], Bp, GM)), PW._2q(MW, Bk, null, null, NA), PW._2q(MW, qk, null, null, NA);
  var AW = new ms;
  AW._2q(MW, XO, null, null, qA), AW._2q(MW, VO, null, null, qA), AW._2q(MW, WO, null, null, qA), AW._2q(MW, Of, null, null, qA), AW._2q(IW, kW.GROUP_BACKGROUND_COLOR, BA, bE), AW._2q(IW, kW[DS], BA, yE), AW._2q(IW, kW[qS], BA, hf), AW._2q(IW, kW.GROUP_STROKE_STYLE, BA, yf), AW._2q(IW, kW[FS], BA, ku), AW._2q(IW, kW[$A], BA, Cu), AW._2q(IW, kW[jS], null, null, qA);
  var CW = new ms;
  CW._2q(MW, cc, BA, null, FA), CW._2q(MW, yO, BA, null, FA), CW._2q(MW, I_, BA, null, FA), CW._2q(IW, kW.EDGE_EXTEND, BA, null, FA), CW._2q(IW, kW[F_], BA, null, FA), CW._2q(IW, kW[GA], BA, hf), CW._2q(IW, kW.EDGE_COLOR, BA, yf), CW._2q(IW, kW[AP], BA, zA), CW._2q(IW, kW[WP], BA, YA), SW || (CW._2q(IW, kW[OI], BA, HA), CW._2q(IW, kW[II], BA, UA), CW._2q(IW, kW[dP], BA, xE), CW._2q(IW, kW.EDGE_FROM_AT_EDGE, null, D_, FA), CW._2q(IW, kW.EDGE_TO_AT_EDGE, null, j_, FA), CW._2q(IW, kW[rP], BA, cE), CW._2q(IW, kW[aP], BA, lE), CW._2q(IW, kW.EDGE_LINE_DASH, BA, ku), CW._2q(IW, kW[uP], BA, Cu), CW._2q(IW, kW.EDGE_CONTROL_POINT, BA, null, FA), CW._2q(IW, kW[T_], BA, null, FA), CW._2q(IW, kW[k_], BA, null, FA), CW._2q(IW, kW[w_], BA, null, FA), CW._2q(IW, kW[WA], BA, null, FA), CW._2q(IW, kW[mI], BA, vd), CW._2q(IW, kW[TI], BA, _E), CW._2q(MW, dO, null, null, FA, !0), CW._2q(MW, R_, null, null, FA, !0), CW._2q(IW, kW[LP], BA, XA), CW._2q(IW, kW[DP], BA, VA), CW._2q(IW, kW[ZA], BA, KA), CW._2q(IW, kW[qP], BA, JA), CW._2q(IW, kW[QA], BA, tC), CW._2q(IW, kW[$P], BA, "fromArrowOutlineStyle"), CW._2q(IW, kW[iC], BA, nC), CW._2q(IW, kW[YP], BA, "fromArrowFillGradient"), CW._2q(IW, kW[FP], BA, eC), CW._2q(IW, kW.ARROW_FROM_LINE_DASH_OFFSET, BA, "fromArrowLineDashOffset"), CW._2q(IW, kW.ARROW_FROM_LINE_JOIN, BA, sC), CW._2q(IW, kW[rC], BA, hC), CW._2q(IW, kW[aC], BA, oC), CW._2q(IW, kW[ZP], BA, fC), CW._2q(IW, kW[uC], BA, cC), CW._2q(IW, kW[_C], BA, dC), CW._2q(IW, kW[QP], BA, lC), CW._2q(IW, kW[vC], BA, bC), CW._2q(IW, kW[yC], BA, gC), CW._2q(IW, kW.ARROW_TO_FILL_GRADIENT, BA, xC), CW._2q(IW, kW.ARROW_TO_LINE_DASH, BA, pC), CW._2q(IW, kW[EC], BA, "toArrowLineDashOffset"), CW._2q(IW, kW.ARROW_TO_LINE_JOIN, BA, mC), CW._2q(IW, kW[sA], BA, wC));
  var LW = new ms;
  LW._2q(IW, kW[zS], TC, uA), LW._2q(IW, kW[kC], TC, xu), LW._2q(IW, kW[GS], TC, AO), LW._2q(IW, kW.EDGE_BUNDLE_LABEL_FONT_SIZE, TC, cA), LW._2q(IW, kW.EDGE_BUNDLE_LABEL_ROTATABLE, TC, TA), SW || (LW._2q(IW, kW[OC], TC, Vo), LW._2q(IW, kW.EDGE_BUNDLE_LABEL_FONT_FAMILY, TC, qd), LW._2q(IW, kW[US], TC, Nd), LW._2q(IW, kW[WS], TC, Of), LW._2q(IW, kW[MC], TC, pA), LW._2q(IW, kW[XS], TC, EA), LW._2q(IW, kW[VS], TC, mA), LW._2q(IW, kW[ZS], TC, hM), LW._2q(IW, kW[KS], TC, aM), LW._2q(IW, kW[IC], TC, hx), LW._2q(IW, kW[JS], TC, uM), LW._2q(IW, kW.EDGE_BUNDLE_LABEL_BACKGROUND_COLOR, TC, lA), LW._2q(IW, kW[tP], TC, fu));
  var RW = new ms;
  RW._2q(MW, TO), RW._2q(IW, kW.BACKGROUND_COLOR, null, lA), RW._2q(IW, kW[dI], null, fu), RW._2q(IW, kW[EI], null, Of), RW._2q(IW, kW.BORDER, null, hx), RW._2q(IW, kW.BORDER_RADIUS, null, mA), RW._2q(IW, kW[PA], null, uM), RW._2q(IW, kW[gI], null, cM), RW._2q(IW, kW[AA], null, _M), RW._2q(MW, Vo, null, Vo), RW._2q(MW, dO, null, null, SC), RW._2q(MW, C_, Bp, Yo), RW._2q(MW, kT, Bp, kT), RW._2q(IW, kW.SHAPE_STROKE, Bp, hf), RW._2q(IW, kW.SHAPE_STROKE_STYLE, Bp, yf), RW._2q(IW, kW[eI], Bp, bE), RW._2q(IW, kW[PC], Bp, yE), SW || (RW._2q(IW, kW[OI], Bp, HA), RW._2q(IW, kW.LINE_DASH_JOIN, Bp, UA), RW._2q(IW, kW[QM], Bp, xE), RW._2q(IW, kW[RA], Bp, cE), RW._2q(IW, kW[aI], Bp, lE), RW._2q(IW, kW[tI], Bp, ku), RW._2q(IW, kW.SHAPE_LINE_DASH_OFFSET, Bp, Cu), RW._2q(IW, kW[mI], Bp, vd), RW._2q(IW, kW[TI], Bp, _E), RW._2q(IW, kW[fI], Bp, pu), RW._2q(IW, kW[PI], Bp, lA), RW._2q(IW, kW[AI], Bp, fu), RW._2q(IW, kW[DA], Bp, Of), RW._2q(IW, kW.IMAGE_BORDER, Bp, hx), RW._2q(IW, kW[BI], Bp, mA), RW._2q(IW, kW[RI], Bp, uM), RW._2q(IW, kW.IMAGE_BORDER_LINE_DASH, Bp, cM), RW._2q(IW, kW.IMAGE_BORDER_LINE_DASH_OFFSET, Bp, _M), RW._2q(IW, kW[AP], Bp, zA), RW._2q(IW, kW.ARROW_FROM_SIZE, Bp, XA), RW._2q(IW, kW[DP], Bp, VA), RW._2q(IW, kW[ZA], Bp, KA), RW._2q(IW, kW[qP], Bp, JA), RW._2q(IW, kW.ARROW_FROM_FILL_COLOR, Bp, nC), RW._2q(IW, kW[YP], Bp, "fromArrowFillGradient"), RW._2q(IW, kW.ARROW_FROM_LINE_DASH, Bp, eC), RW._2q(IW, kW[zP], Bp, "fromArrowLineDashOffset"), RW._2q(IW, kW.ARROW_FROM_LINE_JOIN, Bp, sC), RW._2q(IW, kW[rC], Bp, hC), RW._2q(IW, kW[aC], Bp, oC), RW._2q(IW, kW[ZP], Bp, fC), RW._2q(IW, kW[WP], Bp, YA), RW._2q(IW, kW[uC], Bp, cC), RW._2q(IW, kW[_C], Bp, dC), RW._2q(IW, kW[yC], Bp, gC), RW._2q(IW, kW[eA], Bp, xC), RW._2q(IW, kW[AC], Bp, pC), RW._2q(IW, kW[EC], Bp, "toArrowLineDashOffset"), RW._2q(IW, kW.ARROW_TO_LINE_JOIN, Bp, mC), RW._2q(IW, kW[sA], Bp, wC));
  var DW = function (t, i) {
    return t = t[jT], i = i.zIndex, t == i ? 0 : (t = t || 0, i = i || 0, t > i ? 1 : i > t ? -1 : void 0)
  }, jW = function (t, i) {
    this[Cd] = new hY, w(this, jW, arguments), this.id = this[Eu].id, this[O_] = i, this._fs = [], this[CC] = new ms
  };
  jW[bh] = {
    syncSelection: !1, graph: null, layoutByAnchorPoint: !1, _n8t: null, _fs: null, addChild: function (t, i) {
      t._jq = this, i !== n ? g(this._fs, t, i) : this._fs[dh](t), t._dp && this._n9h(t), this[LC](), this[RC](), this[DC] = !0
    }, removeChild: function (t) {
      this[CC][jC](t), t._jq = null, x(this._fs, t), this._k2 && this._k2[jh](t), this[RC](), this.$invalidateChild = !0
    }, getProperty: function (t, i) {
      return i == dH.PROPERTY_TYPE_STYLE ? this[O_][s_](this[Eu], t) : i == dH[RM] ? this[Eu].get(t) : this.$data[t]
    }, getStyle: function (t) {
      return this[O_][s_](this[Eu], t)
    }, _$w: function (t, i, n) {
      var e = this[CC][NC](this, t, i, n);
      return OW.onBindingPropertyChange(this, t, i, n) || e
    }, onPropertyChange: function (t) {
      if (jT == t[el]) return this.invalidateRender(), !0;
      if (nO == t[Xo]) {
        if (wT == t[el]) return this[wT](), !0;
        var i = t[Ih];
        return i && i.ui ? (Gv == t.kind ? this._9c(i) : jh == t.kind && this[mp](i.ui), !0) : !1
      }
      return this._$w(t[el], t[pv] || MW, t.value)
    }, label: null, initLabel: function () {
      var t = new qW;
      t[Oh] = tw, this[qC](t), this.label = t
    }, initialize: function () {
      this[BC](), this.$data[eO] && this[Eu][eO].forEach(this._9c, this), OW[$C](this), this[CC].initBindingProperties(this, !1)
    }, addBinding: function (t, i) {
      return i[Hc] ? (i[Yc] = t, void this[CC]._2g(i.property, i)) : !1
    }, _h8: function (t, i) {
      var n = this[Eu];
      if (!n[eO]) return !1;
      var e = n[eO][Al](t.id);
      if (!e || !e[FC]) return !1;
      var s = e.bindingProperties;
      if (B(s)) {
        var r = !1;
        return l(s, function (t) {
          return Yo == t.bindingProperty ? (r = ws(n, i, t.property, t[pv]), !1) : void 0
        }, this), r
      }
      return Yo == s.bindingProperty ? ws(n, i, s[Hc], s.propertyType) : !1
    }, _9c: function (t) {
      var i = t.ui;
      if (i) {
        var n = t.bindingProperties;
        n && (Array[$h](n) ? n[Nu](function (t) {
          this[GC](i, t)
        }, this) : this[GC](i, n)), this[qC](i)
      }
    }, validate: function () {
      return this._n7p || (this.initialize(), this._n7p = !0), this.doValidate()
    }, _$a: !0, invalidateChildrenIndex: function () {
      this._$a = !0
    }, doValidate: function () {
      if (this._1g && (this._1g = !1, this[zC]() && (this[YC](), this.$invalidateSize = !0), this._$a && (this._$a = !1, Yz ? this._fs = d(this._fs, DW) : this._fs[DT](DW))), Jn.call(this) && (this.$invalidateRotate = !0), this[Tu]) {
        iU.call(this), this[Cd][xp](this._fp);
        var t = this[HC] || 0, i = Math.max(this[HC] || 0, this[UC] || 0, this[WC] || 0),
          n = Math.max(this[XC] || 0, this.$selectionShadowOffsetY || 0),
          e = Math.max(2 * t, this[VC], this.$selectionShadowBlur);
        e += Jz.UI_BOUNDS_GROW || 0;
        var s = e - i, r = e + i, h = e - n, a = e + n;
        return 0 > s && (s = 0), 0 > r && (r = 0), 0 > h && (h = 0), 0 > a && (a = 0), this[Cd][su](h, s, a, r), this.onBoundsChanged && this[bM](), this[ZC] = !0, !0
      }
    }, validateChildren: function () {
      var t = this[DC];
      this[DC] = !1;
      var i = this[KC], n = this.bodyChanged;
      i && (i[JC] = this.$renderColor, i[QC] = this.$renderColorBlendMode, i[tL] = this[tL], i[VC] = this[VC], i[UC] = this[UC], i[XC] = this[XC]), this[iL] = !1, i && i._1g && (n = i.validate() || n, i.$x = 0, i.$y = 0, i.$invalidateRotate && iU[hh](i), t = !0);
      for (var e = 0, s = this._fs.length; s > e; e++) {
        var r = this._fs[e];
        if (r != i) {
          var h = r._1g && r[Do]();
          (h || n) && r._ia && ne(r, i, this), !t && h && (t = !0)
        }
      }
      return t
    }, measure: function () {
      this._jk[yu]();
      for (var t, i, n = 0, e = this._fs.length; e > n; n++) t = this._fs[n], t._ia && (i = t._fp, i[da] <= 0 || i[no] <= 0 || this._jk.addRect(t.$x + i.x, t.$y + i.y, i[da], i[no]))
    }, _k2: null, _n9h: function (t) {
      if (!this._k2) {
        if (!t[vA]) return;
        return this._k2 = new Qz, this._k2.add(t)
      }
      return t[vA] ? this._k2.add(t) : this._k2.remove(t)
    }, draw: function (t, i, n) {
      for (var e, s = 0, r = this._fs[rh]; r > s; s++) e = this._fs[s], e._ia && !e[vA] && e._ju(t, i, n, this)
    }, _9e: function (t, i) {
      if (!this._ia || !this._k2 || !this._k2.length) return !1;
      t.save(), t[Eo](this.$x, this.$y), this[Qf] && this[Jf] && t.rotate(this[Jf]), (this[hM] || this[aM]) && t[Eo](this[hM], this.offsetY), this[Zf] && t[Vo](this[Zf]), this.$layoutByAnchorPoint && this._n7k && t[Eo](-this[Vf].x, -this[Vf].y), this.shadowColor && (t.shadowColor = this.shadowColor, t.shadowBlur = this[gd] * i, t[Cp] = this[Cp] * i, t[Lp] = this[Lp] * i), t[ff]();
      for (var n, e = 0, s = this._fs[rh]; s > e; e++) n = this._fs[e], n._ia && n[vA] && n._ju(t, i, this.selected, this);
      t[AE]()
    }, doHitTest: function (t, i, n) {
      if (n) {
        if (!this._jk.intersectsRect(t - n, i - n, 2 * n, 2 * n)) return !1
      } else if (!this._jk[Bo](t, i)) return !1;
      return this[nL](t, i, n)
    }, hitTestChildren: function (t, i, n) {
      for (var e, s = this._fs.length - 1; s >= 0; s--) if (e = this._fs[s], e._ia && e.hitTest(t, i, n)) return e;
      return !1
    }, destroy: function () {
      this[Mm] = !0;
      for (var t, i = this._fs[rh] - 1; i >= 0; i--) t = this._fs[i], t[ug]()
    }
  }, m(jW, wW), K(jW[bh], {
    renderColorBlendMode: {
      get: function () {
        return this[QC]
      }, set: function (t) {
        this.$renderColorBlendMode = t, this._1g = !0, this[Ip] && (this.body[Dp] = this[QC])
      }
    }, renderColor: {
      get: function () {
        return this[JC]
      }, set: function (t) {
        this[JC] = t, this._1g = !0, this[Ip] && (this.body[yp] = this.$renderColor)
      }
    }, bodyBounds: {
      get: function () {
        if (this[ZC]) {
          this.$invalidateBounds = !1;
          var t, i = this.body;
          t = i && i._ia && !this._$q() ? i._fp[_h]() : this._8d.clone(), this[Vo] && (t[eL] = t[_h](), t[Vo] = this[Vo], t.tx = this.x, t.ty = this.y, Ci(t, this[Vo], t)), t.x += this.$x, t.y += this.$y, this._df = t
        }
        return this._df
      }
    }, bounds: {
      get: function () {
        return new hY((this.$x || 0) + this[Cd].x, (this.$y || 0) + this[Cd].y, this[Cd].width, this[Cd].height)
      }
    }, body: {
      get: function () {
        return this._n9ody
      }, set: function (t) {
        t && this._n9ody != t && (this._n9ody = t, this[iL] = !0, this.invalidateSize())
      }
    }
  }), Jz[sL] = 1;
  var NW = function () {
    w(this, NW, arguments)
  };
  NW.prototype = {
    strokeStyle: rL,
    lineWidth: 0,
    fillColor: null,
    fillGradient: null,
    _jl: 1,
    _jm: 1,
    outline: 0,
    onDataChanged: function (t) {
      T(this, NW, TM, arguments), this._kw && this._83 && this._kw._75(this._83, this), t && this[CA](t)
    },
    _n8k: function (t) {
      this._kw = On(t), this._kw.validate(), (this._kw._mg == OH || this._kw._7i()) && (this._83 || (this._83 = function () {
        this[QO](), this._jq && this._jq.graph && (this._jq[RC](), this._jq[O_].invalidate())
      }), this._kw[hL](this._83, this))
    },
    _kw: null,
    initialize: function () {
      this[CA](this[Eu])
    },
    _57: function () {
      return this._kw && this._kw[Ef]
    },
    _9j: function (t) {
      if (!t || t[da] <= 0 || t[no] <= 0 || !this.$size || !(this[kT] instanceof Object)) return this._jl = 1, void (this._jm = 1);
      var i = this.size.width, e = this[kT][no];
      if ((i === n || null === i) && (i = -1), (e === n || null === e) && (e = -1), 0 > i && 0 > e) return this._jl = 1, void (this._jm = 1);
      var s, r, h = t[da], a = t[no];
      i >= 0 && (s = i / h), e >= 0 && (r = e / a), 0 > i ? s = r : 0 > e && (r = s), this._jl = s, this._jm = r
    },
    validateSize: function () {
      if (this[aL]) {
        this[aL] = !1;
        var t = this[oL];
        this._jl, this._jm, this._9j(t), this.setMeasuredBounds(t[da] * this._jl, t.height * this._jm, t.x * this._jl, t.y * this._jm)
      }
    },
    measure: function () {
      var t = this._kw[jo](this.lineWidth + this.outline);
      return t ? (this[aL] = !0, void (this[oL] = t[_h]())) : void this._jk.set(0, 0, 0, 0)
    },
    onBoundsChanged: function () {
      this[fL] = !0
    },
    _1m: function () {
      this[fL] = !1, this[gE] = this.fillGradient ? LH[bh].generatorGradient.call(this.$fillGradient, this._8d) : null
    },
    _k9: function (t) {
      var i, n;
      if (ex == this[uL]) i = 1, n = -1; else {
        if (sx != this.$adjustType) return;
        i = -1, n = 1
      }
      var e = this._jk.cx, s = this._jk.cy;
      t[Eo](e, s), t.scale(i, n), t.translate(-e, -s)
    },
    draw: function (t, i, n, e) {
      if (this._jl && this._jm) {
        if (this[fL] && this._1m(), t[po](), this[uL] && this._k9(t), this._kw._mg == IH) return t[mo](this._jl, this._jm), this._kw._lo[Ef](t, i, this, n, e || this), void t[AE]();
        n && this._82(t, i, e), this._kw[Ef](t, i, this, this._jl, this._jm), t[AE]()
      }
    },
    doHitTest: function (t, i, n) {
      if (this._kw[q_]) {
        if (ex == this[uL]) {
          var e = this._jk.cy;
          i = 2 * e - i
        } else if (sx == this[uL]) {
          var s = this._jk.cx;
          t = 2 * s - t
        }
        t /= this._jl, i /= this._jm;
        var r = (this._jl + this._jm) / 2;
        return r > 1 && (n /= r, n = 0 | n), this._kw._lo instanceof ZH ? this._kw._lo[q_](t, i, n, !0, this[cL], this[_L] || this[dL]) : this._kw.hitTest(t, i, n)
      }
      return !0
    },
    $invalidateScale: !0,
    $invalidateFillGradient: !0
  }, m(NW, wW), ps(NW[bh], {
    adjustType: {},
    fillColor: {},
    size: {validateFlags: [SM, lL]},
    fillGradient: {validateFlags: [vL]}
  }), K(NW.prototype, {
    originalBounds: {
      get: function () {
        return this[oL]
      }
    }
  }), Jz[bL] = oY[ov];
  var qW = function () {
    w(this, qW, arguments), this.color = Jz[fA]
  };
  qW[bh] = {
    color: Jz[fA],
    showPointer: !0,
    fontSize: null,
    fontFamily: null,
    fontStyle: null,
    _fi: null,
    alignPosition: null,
    measure: function () {
      this[Eu] = "" + this[Eu], this[Io];
      var t = $i(this[Eu], this[yL], this[gL], this.$fontStyle, Jz.LINE_HEIGHT, this[xL]);
      if (this._fi = t, this[pL]) {
        var i = this[pL].width || 0, n = this[pL].height || 0;
        return this[EL](i > t[da] ? i : t[da], n > t[no] ? n : t[no])
      }
      return this.setMeasuredBounds(t.width, t.height)
    },
    doHitTest: function (t, i, n) {
      return this[Eu] ? Bn(t, i, n, this) : !1
    },
    draw: function (t, i, n, e) {
      if (n && this._82(t, i, e), this[yL] || Jz[yo], this.$rotatable && this.$_hostRotate) {
        var s = vn(this.$_hostRotate);
        s > tY && 3 * tY > s && (t[Eo](this._jk[da] / 2, this._jk[no] / 2), t[Vo](Math.PI), t[Eo](-this._jk[da] / 2, -this._jk[no] / 2))
      }
      var r = this.alignPosition || Jz[bL], h = r.horizontalPosition, a = r[va], o = 0;
      h == uY ? (h = sy, o += this._jk[da] / 2) : h == cY ? (h = ua, o += this._jk[da]) : h = Mf;
      var f = 0;
      a == dY ? f = (this._jk[no] - this._fi.height) / 2 : a == lY && (f = this._jk[no] - this._fi.height), t[_f] = this.color, Bi(t, this[Eu], o, f, h, this.$fontFamily, this[yL], this[mL], Jz.LINE_HEIGHT, this[xL])
    },
    _57: function () {
      return null != this[Eu] || this[pL]
    },
    $invalidateFont: !0
  }, m(qW, wW), ps(qW.prototype, {
    size: {validateFlags: [zg]},
    fontStyle: {validateFlags: [zg, wL]},
    fontSize: {validateFlags: [zg, wL]},
    fontFamily: {validateFlags: [zg, wL]}
  }), K(qW[bh], {
    font: {
      get: function () {
        return this[TL] && (this[TL] = !1, this.$font = (this.$fontStyle || Jz[bo]) + Dh + (this.$fontSize || Jz[yo]) + go + (this[gL] || Jz[xo])), this[xL]
      }
    }
  });
  var BW = function (t) {
    t = t || new ZH, this[kL] = new hY, w(this, BW, [t])
  };
  BW[bh] = {
    layoutByPath: !0,
    layoutByAnchorPoint: !1,
    measure: function () {
      this[OL] = !0, this[ML] = !0, this[Eu][jo](this[cL] + this[IL], this.pathBounds), this[EL](this[kL])
    },
    validateSize: function () {
      if (this[OL] || this[ML]) {
        var t = this[kL][_h]();
        if (this[OL]) {
          this[OL] = !1;
          var i = this[SL]();
          i && t.add(i)
        }
        if (this[ML]) {
          this[ML] = !1;
          var i = this[PL]();
          i && t.add(i)
        }
        this.setMeasuredBounds(t)
      }
    },
    validateFromArrow: function () {
      if (!this.$data._j4 || !this[AL]) return void (this[CL] = null);
      var t = this[Eu], i = 0, n = 0, e = this[LL];
      e && (isNaN(e) && (e.x || e.y) ? (i += e.x || 0, n += e.y || 0) : i += e || 0, i > 0 && 1 > i && (i *= t._j4)), this[RL] = t[Pf](i, n), this.fromArrowLocation.rotate = Math.PI + this.fromArrowLocation[Vo] || 0, this[CL] = Vs(this[AL], this[DL]);
      var s = this[CL][jo](this[jL][hf] + this[jL].outline);
      return this[NL] instanceof _H.Gradient ? this[jL][gE] = LH.prototype[cu][hh](this.fromArrowFillGradient, s) : this.fromArrowStyles && (this[jL][gE] = null), s[cp](this.fromArrowLocation.x, this[RL].y), Li(s, this.fromArrowLocation[Vo], s, this.fromArrowLocation.x, this[RL].y), s
    },
    validateToArrow: function () {
      if (!this[Eu]._j4 || !this.$toArrow) return void (this.$toArrowShape = null);
      var t = this[Eu], i = 0, n = 0, e = this[qL];
      e && (isNaN(e) && (e.x || e.y) ? (i += e.x || 0, n += e.y || 0) : i += e || 0), 0 > i && i > -1 && (i *= t._j4), i += t._j4, this[BL] = t[Pf](i, n), this[$L] = Vs(this[FL], this.$toArrowSize);
      var s = this[$L].getBounds(this[GL].lineWidth + this[GL].outline);
      return this.toArrowFillGradient instanceof _H.Gradient ? this[GL][gE] = LH[bh].generatorGradient[hh](this.toArrowFillGradient, s) : this[GL] && (this.toArrowStyles[gE] = null), s[cp](this[BL].x, this[BL].y), Li(s, this[BL][Vo], s, this[BL].x, this.toArrowLocation.y), s
    },
    _20: function (t) {
      var i = t ? "from" : yO, e = this[i + zL];
      e === n && (e = this[cL]);
      var s = this[i + YL];
      s === n && (s = this[yf]);
      var r = this[i + HL];
      r || (this[i + HL] = r = {}), r.lineWidth = e, r[yf] = s, r.lineDash = this[i + UL], r[Cu] = this[i + WL], r[bE] = this[i + XL], r[yE] = this[i + VL], r[vd] = this[i + ZL], r[_E] = this[i + KL], r[cE] = this[i + JL] || 0, r[lE] = this[i + QL]
    },
    doValidate: function () {
      return this.$fromArrow && this._20(!0), this[FL] && this._20(!1), T(this, BW, EM)
    },
    drawArrow: function (t, i, n, e) {
      if (this[AL] && this[CL]) {
        t[po]();
        var s = this[RL], r = s.x, h = s.y, a = s[Vo];
        t.translate(r, h), a && t[Vo](a), this[CL][Ef](t, i, this[jL], n, e), t.restore()
      }
      if (this[FL] && this.$toArrowShape) {
        t[po]();
        var s = this[BL], r = s.x, h = s.y, a = s[Vo];
        t.translate(r, h), a && t.rotate(a), this.$toArrowShape.draw(t, i, this.toArrowStyles, n, e), t[AE]()
      }
    },
    outlineStyle: null,
    outline: 0,
    onBoundsChanged: function () {
      this.$invalidateFillGradient = !0
    },
    _1m: function () {
      this[fL] = !1, this[gE] = this.$fillGradient ? LH.prototype.generatorGradient[hh](this[dL], this._8d) : null
    },
    draw: function (t, i, n, e) {
      this[fL] && this._1m(), this[Eu][Ef](t, i, this, n, e), this[tR](t, i, n, e)
    },
    doHitTest: function (t, i, n) {
      if (this[Eu][q_](t, i, n, !0, this[cL] + this.$outline, this[_L] || this.$fillGradient)) return !0;
      if (this[FL] && this[$L]) {
        var e = t - this[BL].x, s = i - this[BL].y;
        if (this[BL][Vo]) {
          var r = Si(e, s, -this.toArrowLocation[Vo]);
          e = r.x, s = r.y
        }
        var h = this.toArrowStyles[bE] || this[GL][yE];
        if (this[$L].hitTest(e, s, n, !0, this.toArrowStyles[hf], h)) return !0
      }
      if (this.$fromArrow && this[CL]) {
        var e = t - this[RL].x, s = i - this[RL].y;
        if (this[RL].rotate) {
          var r = Si(e, s, -this[RL][Vo]);
          e = r.x, s = r.y
        }
        var h = this.fromArrowStyles[bE] || this[jL][yE];
        if (this[CL][q_](e, s, n, !0, this.fromArrowStyles[hf], h)) return !0
      }
      return !1
    },
    $fromArrowOutline: 0,
    $toArrowOutline: 0,
    $invalidateFillGradient: !0,
    $invalidateFromArrow: !0,
    $invalidateToArrow: !0
  }, m(BW, wW), ps(BW[bh], {
    strokeStyle: {validateFlags: [iR, nR]},
    fillColor: {},
    fillGradient: {validateFlags: [vL]},
    fromArrowOffset: {validateFlags: [iR, SM]},
    fromArrowSize: {validateFlags: [iR, SM]},
    fromArrow: {validateFlags: [iR, SM]},
    fromArrowOutline: {validateFlags: [iR, SM]},
    fromArrowStroke: {validateFlags: [iR, SM]},
    fromArrowStrokeStyle: {validateFlags: [iR]},
    toArrowOffset: {validateFlags: [nR, SM]},
    toArrowSize: {validateFlags: [nR, SM]},
    toArrow: {validateFlags: [nR, SM]},
    toArrowOutline: {validateFlags: [nR, SM]},
    toArrowStroke: {validateFlags: [nR, SM]},
    toArrowStrokeStyle: {validateFlags: [nR]},
    outline: {value: 0, validateFlags: [zg]}
  }), K(BW[bh], {
    length: {
      get: function () {
        return this[Yo][rh]
      }
    }
  }), Ts[bh] = {
    shape: null, path: null, initialize: function () {
      T(this, Ts, pM), this[C_] = new ZH, this.path._ek = !1, this[BA] = new BW(this.path), this[qC](this[BA], 0), this._n9ody = this[BA], CW[$C](this)
    }, _1r: !0, _5f: null, _$q: function () {
      return !1
    }, _4a: function () {
      return !1
    }, validatePoints: function () {
      this[BA][QO]();
      var t = this[Eu], i = this[C_];
      i[yu]();
      var n = t[oc], e = t.toAgent;
      n && e && nr(this, t, i, n, e)
    }, getEndPointBounds: function (t) {
      return t[eR]()
    }, _3z: function (t, i, n, e, s, r, h, a, o) {
      return t.hasPathSegments() ? void (i[RO] = t[sR].toDatas()) : n == e ? void this[A_](i, n, s, r, a, o) : void this[rR](i, n, e, s, r, h, a, o)
    }, drawLoopedEdge: function (t, i, n, e) {
      hr(this, e, t)
    }, drawEdge: function (t, i, n, e, s, r, h, a) {
      if (e == dH.EDGE_TYPE_ZIGZAG) {
        var o = (h.x + a.x) / 2, f = (h.y + a.y) / 2, u = h.x - a.x, c = h.y - a.y, _ = Math[Ao](u * u + c * c),
          d = Math[ha](c, u);
        d += Math.PI / 6, _ *= .04, _ > 30 && (_ = 30);
        var l = Math.cos(d) * _, v = Math.sin(d) * _;
        return t.lineTo(o - v, f + l), void t[vf](o + v, f - l)
      }
      var b = rr(this, this[Yo], s, r, i, n, h, a);
      b && (t._fy = b)
    }, _2f: function () {
      if (!this.data.isBundleEnabled()) return null;
      var t = this[Yo][ac](!0);
      if (!t || !t[hR](this[O_]) || !t._fx) return null;
      var i = t[aR](this);
      return t[oR](this[Eu]) || (i = -i), i
    }, checkBundleLabel: function () {
      var t = this.getBundleLabel();
      return t ? (this[TC] || this[fR](), this[TC]._ia = !0, void (this.bundleLabel.data = t)) : void (this[TC] && (this.bundleLabel._ia = !1, this[TC][Yo] = null))
    }, createBundleLabel: function () {
      var t = new qW;
      t[uR] = !1, this[TC] = t, this[qC](this[TC]), LW[$C](this)
    }, getBundleLabel: function () {
      return this[O_][cR](this[Yo])
    }, doValidate: function () {
      return this._1r && (this._1r = !1, this[_R]()), this.checkBundleLabel(), T(this, Ts, EM)
    }, _54: function () {
      this._1r = !0, this.invalidateSize()
    }, _$w: function (t, i, n) {
      var e = this._n8t[NC](this, t, i, n);
      return e = OW[NC](this, t, i, n) || e, this.bundleLabel && this.bundleLabel.$data && (e = LW.onBindingPropertyChange(this, t, i, n) || e), CW[NC](this, t, i, n) || e
    }
  }, m(Ts, jW), Ts[dR] = function (t, i, n, e) {
    if (t[bf](i.x, i.y), !e || e == dH[lR]) return void t[vf](n.x, n.y);
    if (e == dH.EDGE_TYPE_VERTICAL_HORIZONTAL) t.lineTo(i.x, n.y); else if (e == dH[Qc]) t[vf](n.x, i.y); else if (0 == e.indexOf(dH[x_])) {
      var s;
      s = e == dH[Jc] ? !0 : e == dH.EDGE_TYPE_ORTHOGONAL_VERTICAL ? !1 : Math.abs(i.x - n.x) > Math.abs(i.y - n.y);
      var r = (i.x + n.x) / 2, h = (i.y + n.y) / 2;
      s ? (t.lineTo(r, i.y), t[vf](r, n.y)) : (t.lineTo(i.x, h), t.lineTo(n.x, h))
    } else if (0 == e[lh](dH[o_])) {
      var s, a = $W[kW[xP]] || 0;
      s = e == dH.EDGE_TYPE_ELBOW_HORIZONTAL ? !0 : e == dH.EDGE_TYPE_ELBOW_VERTICAL ? !1 : Math.abs(i.x - n.x) > Math.abs(i.y - n.y), s ? (t[vf](i.x + a, i.y), t[vf](n.x - a, n.y)) : (t[vf](i.x, i.y + a), t.lineTo(n.x, n.y - a))
    } else if (0 == e.indexOf(vR)) {
      var a = $W[kW.EDGE_EXTEND] || 0;
      if (e == dH[e_]) {
        var o = Math.min(i.y, n.y) - a;
        t.lineTo(i.x, o), t[vf](n.x, o)
      } else if (e == dH[a_]) {
        var o = Math.max(i.y, n.y) + a;
        t[vf](i.x, o), t[vf](n.x, o)
      } else if (e == dH[h_]) {
        var f = Math.min(i.x, n.x) - a;
        t[vf](f, i.y), t[vf](f, n.y)
      } else if (e == dH[t_]) {
        var f = Math.max(i.x, n.x) + a;
        t[vf](f, i.y), t[vf](f, n.y)
      }
    } else if (e == dH[bR]) {
      var r = (i.x + n.x) / 2, h = (i.y + n.y) / 2, u = i.x - n.x, c = i.y - n.y, _ = Math[Ao](u * u + c * c),
        d = Math[ha](c, u);
      d += Math.PI / 6, _ *= .04, _ > 30 && (_ = 30);
      var l = Math.cos(d) * _, v = Math.sin(d) * _;
      t.lineTo(r - v, h + l), t.lineTo(r + v, h - l)
    }
    t.lineTo(n.x, n.y)
  }, K(Ts[bh], {
    length: {
      get: function () {
        return this.path ? this[C_].length : 0
      }
    }
  }), Ts[bh].addPoint = function (t, i, n) {
    var e = Cn(this[C_], t, i, this[Yo][yR], n);
    if (!e) return !1;
    var s = e[RO];
    if (s[rh] > 2) {
      var r = this.data, h = s[s[rh] - 1];
      h.type == zH ? r.pathSegments = s[fh](1, s.length - 2) : (e.atEnd && (h.invalidTerminal = !0), r[sR] = s[fh](1, s.length - 1))
    }
  }, ks.prototype = {
    _2v: null, image: null, initialize: function () {
      T(this, ks, pM), this[gR](), PW.initBindingProperties(this)
    }, _n8k: function () {
      this.data[Bp] ? this[Bp] && (this[Ip] = this.image) : this[tw] && (this[Ip] = this[tw])
    }, _n9p: function () {
      this[Bp] = new NW, this.addChild(this.image, 0), this[CA]()
    }, doValidate: function () {
      this[Ip] && (this instanceof lr && !this[Eu].groupImage && this._5q() ? this[Ip].$layoutByAnchorPoint = !1 : (this.body[Xf] = null != this._2v, this[Ip][AO] = this._2v));
      var t = this.$data.$location, i = 0, n = 0;
      t && (i = t.x, n = t.y);
      var e = this.$x != i || this.$y != n;
      return e && (this[ZC] = !0), this.$x = i, this.$y = n, jW[bh].doValidate[hh](this) || e
    }, _$w: function (t, i, n) {
      var e = this[CC].onBindingPropertyChange(this, t, i, n);
      return e = OW[NC](this, t, i, n) || e, PW[NC](this, t, i, n) || e
    }, getLinkablePorts: function () {
      return this[Yo][xR]
    }, getLinkableBounds: function () {
      return this[pR]
    }, getDefaultPortPoint: function (t) {
      return ui(oY.CENTER_MIDDLE, t || this[eR]())
    }, getPortPoint: function (t, i) {
      if (!t) return this.getDefaultPortPoint(i);
      i = i || this.getLinkableBounds();
      var n;
      return i[eL] ? (n = ui(t, i.original), i.rotate && (n = Pi(n.x, n.y, i[Vo], i[ER] || 0, i.rotateY || 0)), n.x += i.tx || 0, n.y += i.ty || 0) : n = ui(t, i), n[mR] = t, n
    }, getPortPoints: function () {
      var t = this[wR]();
      if (t && Array.isArray(t)) {
        var i = [], n = this.getLinkableBounds();
        return t[Nu](function (t) {
          i[dh](this.getPortPoint(t, n))
        }[Ah](this)), i
      }
    }
  }, m(ks, jW);
  var $W = {};
  $W[kW[rp]] = Jz[rp], $W[kW.SELECTION_BORDER] = Jz[sp], $W[kW[oA]] = Jz[oA], $W[kW.SELECTION_TYPE] = dH.SELECTION_TYPE_SHADOW, $W[kW[NM]] = 2, $W[kW.SELECTION_SHADOW_OFFSET_Y] = 2, $W[kW[fA]] = Jz.LABEL_COLOR, $W[kW.LABEL_POSITION] = oY[fv], $W[kW.LABEL_ANCHOR_POSITION] = oY.CENTER_TOP, $W[kW[aS]] = new aY(0, 2), $W[kW.LABEL_POINTER_WIDTH] = 8, $W[kW.LABEL_RADIUS] = 8, $W[kW[uS]] = !0, $W[kW[_A]] = 0, $W[kW[mS]] = rL, $W[kW[OS]] = !0, $W[kW[TS]] = null, $W[kW[kS]] = null, $W[kW[eP]] = TR, $W[kW[GA]] = 1.5, $W[kW[kR]] = !0, $W[kW[OR]] = !0, $W[kW[MR]] = V(3438210798), $W[kW.GROUP_STROKE] = 1, $W[kW[IR]] = rL, $W[kW[WP]] = !0, $W[kW.ARROW_FROM_SIZE] = Jz.ARROW_SIZE, $W[kW.ARROW_TO_SIZE] = Jz.ARROW_SIZE, $W[kW.EDGE_LOOPED_EXTAND] = 10, $W[kW[l_]] = 8, $W[kW[TP]] = dH[b_], $W[kW[r_]] = !0, $W[kW[xP]] = 20, $W[kW[u_]] = .5, $W[kW[c_]] = 20, $W[kW[bP]] = 20, $W[kW[GS]] = oY.CENTER_BOTTOM, $W[kW.EDGE_BUNDLE_LABEL_POSITION] = oY.CENTER_TOP, $W[kW.EDGE_BUNDLE_LABEL_COLOR] = SR, $W[kW[VM]] = 1, $W[kW[KM]] = PR,
    $W[kW.RENDER_COLOR_BLEND_MODE] = Jz.BLEND_MODE, $W[kW.ALPHA] = 1, Jz[B_] = 2,
  $W['edge.color']="#fff",$W['label.color']="#fff";
  var FW = function (i, n) {
    this._$u = new TY, this._$u.on(function (t) {
      qO == t.kind && this[Sk]()
    }, this), this._1p = new TY, this._1p[sl](function (t) {
      !this[qO] || t[el] != MY[yb] && t[el] != MY[Qv] || this[kd].contains(this.currentSubNetwork) || (this[qO] = null)
    }, this), this._4 = new TY, this._17 = new TY, this._$m = new TY, this._$p = new TY, this[kd] = n || new bs, this._8y = new oW(this, i), this._2x = new Xr(this), this._1a = new TY, this[AR] = jY(t, CR, function () {
      this[LR]()
    }, !1, this), this._8y._n9l[RR] = function (t) {
      this.ondrop(t)
    }[Ah](this), this._8y._n9l.ondragover = function (t) {
      this.ondragover(t)
    }[Ah](this)
  };
  FW[bh] = {
    originAtCenter: !0,
    editable: !1,
    ondragover: function (t) {
      _H[DR](t)
    },
    getDropInfo: function (t, i) {
      var n = null;
      if (i) try {
        n = JSON.parse(i)
      } catch (e) {
      }
      return n
    },
    ondrop: function (t) {
      var i = t[jR];
      if (i) {
        var n = i[Jy](NR), e = this.getDropInfo(t, n);
        e || (e = {}, e.image = i[Jy](Bp), e[Xo] = i[Jy](Xo), e.label = i.getData(tw), e.groupImage = i[Jy](VO));
        var s = this.globalToLocal(t);
        if (s = this.toLogical(s.x, s.y), !(this.dropAction instanceof Function && this[qR][hh](this, t, s, e) === !1) && (e.image || e[tw] || e[Xo])) {
          var r = e[Bp], h = e.type, a = e.label, o = e[VO];
          _H.stopEvent(t);
          var f;
          if (h && Ad != h ? JO == h ? f = this.createText(a, s.x, s.y) : DO == h ? f = this[BR](a, s.x, s.y) : ZO == h ? (f = this[$R](a, s.x, s.y), o && (o = _r(o), o && (f[VO] = o))) : (h = J(h), h instanceof Function && h[bh] instanceof xW && (f = new h, f[Oh] = a, f.location = new nY(s.x, s.y), this[Jk].add(f))) : f = this.createNode(a, s.x, s.y), f) {
            if (r && (r = _r(r), r && (f[Bp] = r)), t[bw]) {
              var u = this.getElementByMouseEvent(t);
              u && this[FR](u) && (f[sc] = u)
            }
            if (e.properties) for (var c in e.properties) f[c] = e.properties[c];
            if (e[GR]) for (var c in e[GR]) f.set(c, e[GR][c]);
            if (e[zR] && f.putStyles(e[zR]), this[YR](f, t, e) === !1) return !1;
            var _ = new Wr(this, Wr.ELEMENT_CREATED, t, f);
            return this.onInteractionEvent(_), f
          }
        }
      }
    },
    _n9r: function (t) {
      return t[qk] || t instanceof mW || t[HR]
    },
    enableDoubleClickToOverview: !0,
    _8y: null,
    _$u: null,
    _1p: null,
    _4: null,
    _$p: null,
    _17: null,
    _$m: null,
    _1w: function (t) {
      return this._$u[Cv](t)
    },
    _51: function (t) {
      this._$u.onEvent(t), OT == t[el] && this.checkLimitedBounds()
    },
    isVisible: function (t) {
      return this._8y._es(t)
    },
    isMovable: function (t) {
      return (t instanceof xW || t instanceof gW && t[P_]()) && t[UR] !== !1
    },
    isSelectable: function (t) {
      return t[WR] !== !1
    },
    isEditable: function (t) {
      return t[uR] !== !1
    },
    isRotatable: function (t) {
      return t[TA] !== !1
    },
    isResizable: function (t) {
      return t[XR] !== !1
    },
    canLinkFrom: function (t) {
      return t[VR] !== !1 && t[ZR] !== !1
    },
    canLinkTo: function (t, i) {
      return t[VR] === !1 || t[KR] === !1 ? !1 : i instanceof _H.Group && t[_c](i) ? !1 : t instanceof _H[ZO] && i[_c](t) ? !1 : !0
    },
    isEndPointEditable: function (t) {
      return t[JR] !== !1
    },
    createNode: function (t, i, n) {
      var e = new xW(t, i, n);
      return this[Jk].add(e), e
    },
    createText: function (t, i, n) {
      var e = new gs(t, i, n);
      return this._kpModel.add(e), e
    },
    createShapeNode: function (t, i, n, e) {
      j(i) && (e = n, n = i, i = null);
      var s = new pW(t, i);
      return s[pO] = new nY(n, e), this._kpModel.add(s), s
    },
    createGroup: function (t, i, n) {
      var e = new mW(t, i, n);
      return this[Jk].add(e), e
    },
    createEdge: function (t, i, n) {
      if (t instanceof xW) {
        var e = n;
        n = i, i = t, t = e
      }
      var s = new gW(i, n);
      //kankan
      return t && (s[iO] = ""), this[Jk].add(s), s
    },
    addElement: function (t, i) {
      this[Jk].add(t), i && t[eh]() && t[Ec](function (t) {
        this[QR](t, i)
      }, this)
    },
    removeElement: function (t) {
      this._kpModel[jh](t)
    },
    clear: function () {
      this[Jk][yu]()
    },
    getStyle: function (t, i) {
      var e = t._ji[i];
      return e !== n ? e : this[tD](i)
    },
    getDefaultStyle: function (t) {
      if (this._ji) {
        var i = this._ji[t];
        if (i !== n) return i
      }
      return $W[t]
    },
    _39: function (t, i) {
      if (!this[iD] || this[iD][N_](this.viewportBounds)) return i && i(), !1;
      t = this._2k(), this.stopAnimation();
      var n, e, s, r = this[Kk], h = this[iD], a = r.width / this[iD][da], o = r.height / this[iD][no];
      if (1 >= a && 1 >= o) return n = h[Mf] > r[Mf] ? h[Mf] : h.right < r.right ? r.left - (r[ua] - h[ua]) : r.left, e = h.top > r.top ? h.top : h[fa] < r.bottom ? r.top - (r[fa] - h[fa]) : r.top, void this[hk](-n * this.scale, -e * this[mo], this.scale, !1, i);
      var f = a > o;
      s = Math.max(a, o), f ? (n = h.x, e = h.y + (r.top - h.top) * (1 - s) / s, e >= h.y ? e = h.y : e < h[fa] - r[no] / s && (e = h[fa] - r.height / s)) : (e = h.y, n = h.x + (r.left - h.left) * (1 - s) / s, n >= h.x ? n = h.x : n < h[ua] - r.width / s && (n = h[ua] - r.width / s)), s *= this.scale, n *= s, e *= s, this[hk](-n, -e, s, t, i)
    },
    checkLimitedBounds: function (t) {
      return this._n8heckingBounds || !this.limitedBounds || this.limitedBounds[N_](this.viewportBounds) ? !1 : (this[nD] = !0, void this.callLater(function () {
        this._39(t, function () {
          this[nD] = !1
        }[Ah](this))
      }, this))
    },
    zoomByMouseEvent: function (t, i, n, e) {
      var s = this.globalToLocal(t);
      return Nh == typeof i ? this[eD](Math.pow(1.1, i), s.x, s.y, n, e) : i ? this[sD](s.x, s.y, n, e) : this.zoomOut(s.x, s.y, n, e)
    },
    resetScale: 1,
    translate: function (t, i, n) {
      return this[hk](this.tx + t, this.ty + i, this.scale, n)
    },
    translateTo: function (t, i, n, e, s) {
      if (n && (n = Math.min(this.maxScale, Math.max(this[rD], n))), e) {
        var r = this._6d();
        return void r._ks(t, i, n, e, s)
      }
      var h = this._8y[hD](t, i, n);
      return s && s(), h
    },
    centerTo: function (t, i, e, s, r) {
      return (!e || 0 >= e) && (e = this[mo]), s === n && (s = this._2k()), this[hk](this[da] / 2 - t * e, this[no] / 2 - i * e, e, s, r)
    },
    moveToCenter: function (t, i) {
      if (arguments[2] === !1 || !this._8y[aD]()) {
        var n = this[No];
        return void this[oD](n.cx, n.cy, t, i)
      }
      return this._8y[zb] || (i = !1), this[fD](this[uD][Ah](this, t, i, !1))
    },
    zoomToOverview: function (t, i) {
      if (arguments[2] === !1 || !this._8y[aD]()) {
        var n = this._8y._1o();
        return void (n && (i && (n[mo] = Math.min(n[mo], i)), this[oD](n.cx, n.cy, n[mo], t)))
      }
      return this._8y._n7p || (t = !1), this[fD](this[cD][Ah](this, t, i, !1))
    },
    _2k: function () {
      return this._8y[zb] ? this.zoomAnimation === n || null === this[_D] ? Jz.ZOOM_ANIMATE : this[_D] : !1
    },
    zoomAt: function (t, i, e, s, r) {
      s === n && (s = this._2k()), i === n && (i = this[da] / 2), i = i || 0, e === n && (e = this[no] / 2), e = e || 0;
      var h = this.scale;
      return t = Math.min(this[Np], Math.max(this[rD], h * t)), i = t * (this.tx - i) / h + i, e = t * (this.ty - e) / h + e, this.translateTo(i, e, t, s, r)
    },
    zoomOut: function (t, i, n, e) {
      return this[eD](1 / this[dD], t, i, n, e)
    },
    zoomIn: function (t, i, n, e) {
      return this[eD](this[dD], t, i, n, e)
    },
    _6d: function () {
      return this[lD] || (this._panAnimation = new WW(this)), this[lD]
    },
    onAnimationStart: function () {
    },
    onAnimationEnd: function () {
    },
    isAnimating: function () {
      return this[lD] && this[lD]._eh()
    },
    enableInertia: !0,
    _n70: function (t, i) {
      var n = this._6d();
      return n._gu(t || 0, i || 0)
    },
    stopAnimation: function () {
      this._panAnimation && this[lD]._ls()
    },
    getUI: function (t) {
      return Q(t) ? this._8y._3k(t) : this._8y._li(t)
    },
    getUIByMouseEvent: function (t) {
      return this._8y._3k(t)
    },
    hitTest: function (t) {
      return this._8y[q_](t)
    },
    globalToLocal: function (t) {
      return this._8y._8j(t)
    },
    toCanvas: function (t, i) {
      return this._8y._hi(t, i)
    },
    toLogical: function (t, i) {
      return Q(t) ? this._8y._$d(t) : this._8y._eo(t, i)
    },
    getElementByMouseEvent: function (t) {
      var i = this._8y._3k(t);
      return i ? i.$data : void 0
    },
    getElement: function (t) {
      return Q(t) ? this[tg](t) : this[Jk][Al](t)
    },
    invalidate: function () {
      this._8y[TT]()
    },
    invalidateUI: function (t) {
      t[wT](), this[wT]()
    },
    invalidateElement: function (t) {
      this._8y._3w(t)
    },
    getUIBounds: function (t) {
      return this._8y._38(t)
    },
    forEachVisibleUI: function (t, i) {
      return this._8y._4o(t, i)
    },
    forEachReverseVisibleUI: function (t, i) {
      return this._8y._$x(t, i)
    },
    forEachUI: function (t, i) {
      return this._8y._eq(t, i)
    },
    forEachReverseUI: function (t, i) {
      return this._8y._4q(t, i)
    },
    forEach: function (t, i) {
      return this[Jk].forEach(t, i)
    },
    getElementByName: function (t) {
      var i;
      return this.forEach(function (n) {
        return n[Oh] == t ? (i = n, !1) : void 0
      }), i
    },
    focus: function (i) {
      if (i) {
        var n = t.scrollX || t.pageXOffset, e = t.scrollY || t[Na];
        return this[Qy][vD](), void t.scrollTo(n, e)
      }
      this[Qy][vD]()
    },
    callLater: function (t, i, n) {
      this._8y._ef(t, i, n)
    },
    exportImage: function (t, i, n) {
      return mr(this, t, i, n)
    },
    setSelection: function (t) {
      return this[Jk][sb].set(t)
    },
    select: function (t) {
      return this[Jk]._selectionModel[Hd](t)
    },
    unselect: function (t) {
      return this[Jk][sb].unselect(t)
    },
    reverseSelect: function (t) {
      return this._kpModel._selectionModel[bD](t)
    },
    selectAll: function () {
      Er(this)
    },
    unSelectAll: function () {
      this.selectionModel.clear()
    },
    unselectAll: function () {
      this[yD]()
    },
    isSelected: function (t) {
      return this._kpModel._selectionModel.contains(t)
    },
    sendToTop: function (t) {
      je(this[Jk], t)
    },
    sendToBottom: function (t) {
      Ne(this[Jk], t)
    },
    moveElements: function (t, i, n) {
      var e = [], s = new Qz;
      return l(t, function (t) {
        t instanceof xW ? e[dh](t) : t instanceof gW && s.add(t)
      }), this._e5(e, i, n, s)
    },
    _e5: function (t, i, n, e) {
      if (0 == i && 0 == n || 0 == t.length && 0 == e[rh]) return !1;
      if (0 != t.length) {
        var s = this._53(t);
        e = this._4y(s, e), l(s, function (t) {
          var e = t[pO];
          e ? t.setLocation(e.x + i, e.y + n) : t.setLocation(i, n)
        })
      }
      return e && e[rh] && this._fc(e, i, n), !0
    },
    _fc: function (t, i, n) {
      t.forEach(function (t) {
        t[Mg](i, n)
      })
    },
    _4y: function (t, i) {
      return this[kd][Nu](function (n) {
        n instanceof gW && this[gD](n) && t[N_](n[oc]) && t[N_](n[rc]) && i.add(n)
      }, this), i
    },
    _53: function (t) {
      var i = new Qz;
      return l(t, function (t) {
        !this.isMovable(t), i.add(t), Le(t, i, this._movableFilter)
      }, this), i
    },
    reverseExpanded: function (t) {
      if (!t[mk]()) return !1;
      var i = t[ac](!0);
      return i ? i[xD]() !== !1 ? (this.invalidate(), !0) : void 0 : !1
    },
    _2x: null,
    _1a: null,
    beforeInteractionEvent: function (t) {
      return this._1a[Cv](t)
    },
    onInteractionEvent: function (t) {
      this._1a.onEvent(t)
    },
    addCustomInteraction: function (t) {
      this._2x.addCustomInteraction(t)
    },
    removeCustomInteraction: function (t) {
      this._2x[pD](t)
    },
    enableWheelZoom: !0,
    enableTooltip: !0,
    getTooltip: function (t) {
      return t[aO] || t[Oh]
    },
    updateViewport: function () {
      this._8y._7y()
    },
    destroy: function () {
      this._51(new gY(this, ug, !0, this[Mm])), this[Mm] = !0, this[AR] && NY(t, CR, this[AR]), this._2x[ug](), this.graphModel = new bs;
      var i = this[ED];
      this._8y._in(), i && (i[mD] = "")
    },
    onPropertyChange: function (t, i, n) {
      this._$u[sl](function (e) {
        e[el] == t && i[hh](n, e)
      })
    },
    removeSelection: function () {
      var t = this[Td]._jz;
      return t && 0 != t[rh] ? (t = t[oh](), this._kpModel[jh](t), t) : !1
    },
    removeSelectionByInteraction: function (t) {
      var i = this[Td][bb];
      return i && 0 != i[rh] ? void _H[ix](wD + i[rh], function () {
        var i = this.removeSelection();
        if (i) {
          var n = new Wr(this, Wr[TD], t, i);
          this[kD](n)
        }
      }, this) : !1
    },
    createShapeByInteraction: function (t, i, n, e) {
      var s = new ZH(i);
      i[rh] > 2 && s[Uf]();
      var r = this[BR](OD, s, n, e);
      this[YR](r, t);
      var h = new Wr(this, Wr[MD], t, r);
      return this.onInteractionEvent(h), r
    },
    createLineByInteraction: function (t, i, n, e) {
      var s = new ZH(i), r = this[BR](ID, s, n, e);
      r.setStyle(_H[SD][eI], null), r.setStyle(_H[SD].SHAPE_FILL_GRADIENT, null), r[Zc](_H.Styles.LAYOUT_BY_PATH, !0), this[YR](r, t);
      var h = new Wr(this, Wr.ELEMENT_CREATED, t, r);
      return this[kD](h), r
    },
    createEdgeByInteraction: function (t, i, n, e, s, r) {
      var h = this[PD](AD, t, i);
      if (s && h.setStyle(_H[SD][w_], s), r && h.setStyle(_H[SD].EDGE_TO_PORT, r), e) h[$_] = e; else {
        var a = this.edgeUIClass, o = this[I_];
        this.interactionProperties && (a = this[CD].uiClass || a, o = this[CD][I_] || o), a && (h.uiClass = a), o && (h.edgeType = o)
      }
      this[YR](h, n);
      var f = new Wr(this, Wr[MD], n, h);
      return this[kD](f), h
    },
    onElementCreated: function (t) {
      !t[sc] && this[qO] && (t[sc] = this.currentSubNetwork)
    },
    allowEmptyLabel: !1,
    startLabelEdit: function (t, i, n, e) {
      var s = this;
      n.startEdit(e.x, e.y, i[Yo], this[s_](t, kW[iS]), function (n) {
        return s[LD](t, i, n, i[sc])
      })
    },
    onLabelEdit: function (t, i, n, e) {
      if (!n && !this[RD]) return _H[Qg](DD), !1;
      if (tw == i.name) {
        if (t[Oh] == n) return !1;
        t[Oh] = n
      } else e._h8(i, n) === !1 && (i[Yo] = n, this[jD](t))
    },
    setInteractionMode: function (t, i) {
      this.interactionMode = t, this[CD] = i
    },
    upSubNetwork: function () {
      return this._3r ? this[qO] = dr(this._3r) : !1
    },
    _$s: !1,
    invalidateVisibility: function () {
      this._$s = !0, this[wT]()
    },
    getBundleLabel: function (t) {
      var i = t[ac](!0);
      return i && i.agentEdge == t ? ND + i[qD][rh] : null
    },
    zoomAnimation: null,
    pauseRendering: function (t, i) {
      (this[BD] || i) && this._8y._7n(t)
    },
    _55: n,
    enableRectangleSelectionByRightButton: !0,
    getLinkablePoints: function (t) {
      return t.linkablePoints
    }
  }, K(FW.prototype, {
    center: {
      get: function () {
        return this[tk](this[ED].clientWidth / 2, this.html.clientHeight / 2)
      }
    }, visibleFilter: {
      get: function () {
        return this[Ek]
      }, set: function (t) {
        this[Ek] = t, this[Sk]()
      }
    }, topCanvas: {
      get: function () {
        return this._8y[gk]
      }
    }, propertyChangeDispatcher: {
      get: function () {
        return this._$u
      }
    }, listChangeDispatcher: {
      get: function () {
        return this._1p
      }
    }, dataPropertyChangeDispatcher: {
      get: function () {
        return this._4
      }
    }, selectionChangeDispatcher: {
      get: function () {
        return this._$p
      }
    }, parentChangeDispatcher: {
      get: function () {
        return this._17
      }
    }, childIndexChangeDispatcher: {
      get: function () {
        return this._$m
      }
    }, interactionDispatcher: {
      get: function () {
        return this._1a
      }
    }, cursor: {
      set: function (t) {
        this.canvasPanel[Ea].cursor = t || this._2x[Sd]
      }, get: function () {
        return this[Qy].style[$D]
      }
    }, interactionMode: {
      get: function () {
        return this._2x._n8urrentMode
      }, set: function (t) {
        var i = this[FD];
        i != t && (this._2x[rl] = t, this._51(new gY(this, FD, t, i)))
      }
    }, scaleStep: {
      get: function () {
        return this._8y._ec
      }, set: function (t) {
        this._8y._ec = t
      }
    }, maxScale: {
      get: function () {
        return this._8y._g8
      }, set: function (t) {
        this._8y._g8 = t
      }
    }, minScale: {
      get: function () {
        return this._8y._ga
      }, set: function (t) {
        this._8y._ga = t
      }
    }, scale: {
      get: function () {
        return this._8y[_y]
      }, set: function (t) {
        return this._8y[_y] = t
      }
    }, tx: {
      get: function () {
        return this._8y._tx
      }
    }, ty: {
      get: function () {
        return this._8y._ty
      }
    }, styles: {
      get: function () {
        return this._ji
      }, set: function (t) {
        this._ji = t
      }
    }, selectionModel: {
      get: function () {
        return this[Jk][sb]
      }
    }, graphModel: {
      get: function () {
        return this[Jk]
      }, set: function (t) {
        if (this._kpModel == t) return !1;
        var i = this[Jk], n = new gY(this, kd, i, t);
        return this._1w(n) === !1 ? !1 : (null != i && (i[GD][jv](this._$u, this), i[nb][jv](this._1p, this), i[rb][jv](this._4, this), i.parentChangeDispatcher.removeListener(this._17, this), i[zD][jv](this._$m, this), i[eb].removeListener(this._$p, this)), this[Jk] = t, this[Jk] && (this._kpModel[GD][sl](this._$u, this), this[Jk].listChangeDispatcher[sl](this._1p, this), this[Jk].dataChangeDispatcher[sl](this._4, this), this._kpModel[db][sl](this._17, this), this[Jk][zD][sl](this._$m, this), this[Jk][eb][sl](this._$p, this)), this._8y && this._8y._lg(), void this._51(n))
      }
    }, count: {
      get: function () {
        return this[Jk].length
      }
    }, width: {
      get: function () {
        return this[ED].clientWidth
      }
    }, height: {
      get: function () {
        return this.html[wd]
      }
    }, viewportBounds: {
      get: function () {
        return this._8y[YD]
      }
    }, bounds: {
      get: function () {
        return this._8y._4x()
      }
    }, canvasPanel: {
      get: function () {
        return this._8y[ZT]
      }
    }, html: {
      get: function () {
        return this._8y._n9l[Ep]
      }
    }, navigationType: {
      get: function () {
        return this._8y._6z
      }, set: function (t) {
        this._8y._43(t)
      }
    }, _3r: {
      get: function () {
        return this[Jk]._3r
      }
    }, currentSubNetwork: {
      get: function () {
        return this[Jk][qO]
      }, set: function (t) {
        this[Jk][qO] = t
      }
    }, limitedBounds: {
      get: function () {
        return this[HD]
      }, set: function (t) {
        return hY[ic](t, this[HD]) ? !1 : t ? void (this[HD] = new hY(t)) : void (this[HD] = null)
      }
    }, ratio: {
      get: function () {
        return this._8y.ratio
      }
    }, delayedRendering: {
      get: function () {
        return this._55 === n ? Jz.DELAYED_RENDERING : this._55
      }, set: function (t) {
        t != this[BD] && (this._55 = t, this.pauseRendering(!1, !0))
      }
    }, fullRefresh: {
      get: function () {
        return this._8y.fullRefresh
      }, set: function (t) {
        this._8y.fullRefresh = t
      }
    }
  }), Jz[UD] = !0, Jz[WD] = 60, Jz[XD] = 60, lr[bh] = {
    _n8k: function () {
      return this._5q() ? void 0 : T(this, lr, CA, arguments)
    }, initialize: function () {
      T(this, lr, pM), this[NA]()
    }, _n9t: function () {
      this._lw = new ZH, this[BA] = new NW(this._lw), this.shape[pu] = !1, this.addChild(this[BA], 0), this.body = this[BA]
    }, checkBody: function () {
      return this._5q() ? (this._29 = !0, this.shape ? (this.shape[XT] = !0, this[Ip] = this[BA]) : (this[VD](), AW[$C](this)), void (this[Bp] && (this[Bp][XT] = !1))) : (this[Bp] ? (this[Bp][XT] = !0, this[Ip] = this.image) : this[gR](), void (this.shape && (this.shape[XT] = !1)))
    }, _5q: function () {
      return this[Eu]._ic() && this[Eu][Bk]
    }, _lw: null, _29: !0, _5r: function () {
      this._1g = !0, this._29 = !0
    }, doValidate: function () {
      if (this._29 && this._5q()) {
        if (this._29 = !1, this[BA][QO](), this[Eu][VO]) {
          this.shape.data = this[Eu][VO];
          var t = this._27();
          return this[BA][hM] = t.x + t[da] / 2, this.shape[aM] = t.y + t.height / 2, this.shape[kT] = {
            width: t[da],
            height: t[no]
          }, ks[bh][EM][hh](this)
        }
        this[BA][hM] = 0, this[BA].offsetY = 0;
        var i = this._8o(this[Eu].groupType);
        if (this._lw.clear(), i instanceof hY) {
          var n = this[s_](kW[jS]) || 0;
          Xe(this._lw, i.x, i.y, i[da], i[no], i.rx || n, i.ry || n)
        } else i instanceof rn ? Ve(this._lw, i) : i instanceof hn && Ze(this._lw, i);
        this._lw._6h = !0, this.shape[QO]()
      }
      return ks[bh].doValidate[hh](this)
    }, _7s: function (t, i, n, e, s) {
      switch (Nh != typeof e && (e = -i / 2), Nh != typeof s && (s = -n / 2), t) {
        case dH[ZD]:
          var r = Math.max(i, n) / 2;
          return new rn(e + i / 2, s + n / 2, r);
        case dH[KD]:
          return new hn(e + i / 2, s + n / 2, i, n);
        default:
          return new hY(e, s, i, n)
      }
    }, _27: function () {
      return this._8o(null)
    }, _8o: function (t) {
      var i, e, s = this.data, r = s[Of], h = s.minSize, a = Jz.GROUP_MIN_WIDTH, o = Jz[XD];
      if (h && (Nh == typeof h[da] && (a = h.width), Nh == typeof h.height && (o = h[no]), i = h.x, e = h.y), !s[eh]()) return this._7s(t, a, o, i, e);
      var f, u = this[Eu]._fs._jz;
      (t == dH[ZD] || t == dH.GROUP_TYPE_ELLIPSE) && (f = []);
      for (var c, _, d, l, v = new hY, b = 0, y = u.length; y > b; b++) {
        var g = u[b];
        if (this[O_][JD](g) && !(g instanceof gW)) {
          var x = this[O_][M_](g);
          x && (c = x.$x + x._fp.x, _ = x.$y + x._fp.y, d = x._fp[da], l = x._fp.height, v[Vl](c, _, d, l), f && (f[dh]({
            x: c,
            y: _
          }), f[dh]({x: c + d, y: _}), f[dh]({x: c + d, y: _ + l}), f.push({x: c, y: _ + l})))
        }
      }
      if (v[Dl]()) return this._7s(t, a, o, i, e);
      var p = this.$data[pO];
      p ? p[GO] && (p.invalidateFlag = !1, i === n && (p.x = v.cx), e === n && (p.y = v.cy)) : p = this[Eu].$location = {
        x: v.cx,
        y: v.cy
      }, r && v[su](r), Nh == typeof i && i + p.x < v.x && (v[da] += v.x - (i + p.x), v.x = i + p.x, f && f[dh]({
        x: v.x,
        y: v.cy
      })), Nh == typeof e && e + p.y < v.y && (v[no] += v.y - (v.y, e + p.y), v.y = e + p.y, f && f[dh]({
        x: v.cx,
        y: v.y
      }));
      var E, i = p.x, e = p.y;
      if (t == dH[ZD]) {
        E = an(f), E.cx -= i, E.cy -= e;
        var m = Math.max(a, o) / 2;
        return E.r < m && (E.cx += m - E.r, E.cy += m - E.r, E.r = m), E
      }
      return t == dH[KD] ? (E = on(f, v), E.cx -= i, E.cy -= e, E[da] < a && (E.cx += (a - E.width) / 2, E.width = a), E.height < o && (E.cy += (o - E[no]) / 2, E[no] = o), E) : (E = v, v[da] < a && (v.width = a), v[no] < o && (v.height = o), v.offset(-i, -e), E)
    }, _$w: function (t, i, n) {
      if (!this._5q()) return T(this, lr, QD, arguments);
      var e = this[CC][NC](this, t, i, n);
      return e = OW[NC](this, t, i, n) || e, e = PW.onBindingPropertyChange(this, t, i, n) || e, AW[NC](this, t, i, n) || e
    }
  }, m(lr, ks), _H.GroupUI = lr;
  var GW = {
    draw: function () {
    }
  };
  Jz[ud] = null, Jz[ld] = null;
  var zW = {position: _T, "text-align": sy}, YW = {padding: tj, transition: ij}, HW = {position: rd, display: nj};
  xi(ej, "opacity:0.7;vertical-align:middle;"), xi(".Q-Graph-Nav img:hover,img.hover", sj), Zz || (xi(rj, hj + RY(aj) + oj), xi(fj, uj + RY(aj) + cj)), yr.prototype = {
    _dg: function (t, i) {
      return t._ia == i ? !1 : (t._ia = i, void (t[Ea][_j] = i ? "visible" : ed))
    }, _3q: function (t, i) {
      var n = i / 2 - this._left[J_].clientHeight / 2 + so;
      this[fd][J_][Ea].top = n, this[cd][J_][Ea].top = n, this._navPane[Ea][da] = t + so, this[td][Ea][no] = i + so
    }, _9m: function (t, i, n, e) {
      this._dg(this[hd], t), this._dg(this[fd], i), this._dg(this._n9ottom, n), this._dg(this._right, e)
    }, _in: function () {
      var t = this._navPane[Ep];
      t && t.removeChild(this[td])
    }, _k7: function () {
      var t = this._n9aseCanvas._kp;
      if (t) {
        var i = t[No];
        if (i[Dl]()) return void this._9m(!1, !1, !1, !1);
        var n = t[Kk], e = n.y > i.y + 1, s = n.x > i.x + 1, r = n[fa] < i[fa] - 1, h = n[ua] < i[ua] - 1;
        this._9m(e, s, r, h)
      }
    }
  };
  var UW = 10;
  xi(dj, lj), xi(vj, "background-color: #7E7E7E;" + RY(aj) + ": background-color 0.2s linear;"), xi(".Q-Graph-ScrollBar--V", "width: 8px;right: 0px;"), xi(".Q-Graph-ScrollBar--H", "height: 8px;bottom: 0px;"), xi(".Q-Graph-ScrollBar--V.Both", bj), xi(".Q-Graph-ScrollBar--H.Both", yj), Zz || (xi(gj, hj + RY(aj) + xj), xi(".Q-Graph:hover .Q-Graph-ScrollPane", uj + RY(aj) + ":opacity 0.3s linear;")), gr.prototype = {
    _in: function () {
      this[pj]._in(), this[Ej]._in(), delete this[pj], delete this[Ej], this._md.parentNode && this._md.parentNode[mp](this._md)
    }, _md: null, _n9x: null, _8r: null, init: function (t) {
      var n = i.createElement(H_);
      n.className = mj, bi(n, {width: ad, height: ad, position: rd});
      var e = i[fo](H_);
      e[ec] = "Q-Graph-ScrollBar Q-Graph-ScrollBar--V";
      var s = i.createElement(H_);
      s.className = "Q-Graph-ScrollBar Q-Graph-ScrollBar--H", n[Q_](e), n.appendChild(s), t[Q_](n), this._md = n, this._8r = s, this[wj] = e, s.isH = !0;
      var r = this, h = {
        onstart: function (t, i) {
          i[Ch].add(Ed)
        }, onrelease: function (t, i) {
          i[Ch][jh](Ed)
        }, ondrag: function (t, i) {
          var n = r[tc]._kp;
          if (n) {
            var e = i.isH, s = e ? t.dx : t.dy;
            if (s && i.scale) {
              var h = n[mo] / i[mo];
              e ? n.translate(-h * s, 0) : n[Eo](0, -h * s), _H.stopEvent(t)
            }
          }
        }, enddrag: function (t, i) {
          var n = r._n9aseCanvas._kp;
          if (n && n.enableInertia) {
            var e = i.isH, s = e ? t.vx : t.vy;
            if (Math.abs(s) > .1) {
              var h = n[mo] / i[mo];
              s *= h, e ? n[md](-s, 0) : n._n70(0, -s)
            }
          }
        }
      };
      this[pj] = new wi(e, h), this[Ej] = new wi(s, h)
    }, _3q: function () {
      var t = this[tc]._kp;
      t && t[fD](this._k7.bind(this))
    }, _k7: function () {
      var t = this._n9aseCanvas._kp;
      if (t) {
        var i = t[No];
        if (i[Dl]()) return this._4m(!1), void this._4j(!1);
        var n = t.viewportBounds, e = t[da], s = t[no], r = t[mo], h = 1 / r, a = n.x > i.x + h || n[ua] < i[ua] - h,
          o = n.y > i.y + h || n[fa] < i.bottom - h, f = a && o;
        f ? (R(this[wj], Tj), R(this._8r, Tj)) : (D(this[wj], Tj), D(this._8r, Tj)), this._4m(a, n, i, f ? e - UW : e), this._4j(o, n, i, f ? s - UW : s)
      }
    }, _4m: function (t, i, n, e) {
      if (!t) return this._8r[Ea][Qw] = sd, void (this._8r[mo] = 0);
      var s = Math.min(i.x, n.x), r = Math.max(i.right, n[ua]), h = r - s, a = e / h;
      this._8r[mo] = a, this._8r[Ea][Mf] = parseInt((i.x - s) * a) + so, this._8r[Ea][ua] = parseInt((r - i[ua]) * a) + so, this._8r[Ea][Qw] = ""
    }, _4j: function (t, i, n, e) {
      if (!t) return this[wj][Ea][Qw] = sd, void (this[wj].scale = 0);
      var s = Math.min(i.y, n.y), r = Math.max(i.bottom, n[fa]), h = r - s, a = e / h;
      this[wj][mo] = a, this._n9x[Ea].top = parseInt((i.y - s) * a) + so, this[wj].style[fa] = parseInt((r - i.bottom) * a) + so, this[wj].style.display = ""
    }
  }, xr.prototype = {
    shape: null, initialize: function () {
      T(this, xr, pM), this[gR](), RW[$C](this)
    }, _n9p: function () {
      this[Bp] = new BW(this[Eu][C_]), this[qC](this[Bp], 0), this[Ip] = this[Bp]
    }, invalidateShape: function () {
      this[Bp][QO](), this[jk]()
    }, _$w: function (t, i, n) {
      var e = this[CC][NC](this, t, i, n);
      return e = OW.onBindingPropertyChange(this, t, i, n) || e, RW[NC](this, t, i, n) || e
    }, doValidate: function () {
      this[Ip] && (this[Bp][Yo] = this[Yo][C_], this[Ip][Xf] = null != this._2v, this[Ip][AO] = this._2v);
      var t = this[Eu][pO], i = 0, n = 0;
      t && (i = t.x, n = t.y);
      var e = this.$x != i || this.$y != n;
      return e && (this[ZC] = !0), this.$x = i, this.$y = n, jW[bh][EM].call(this) || e
    }, getLinkablePorts: function () {
      return this[Yo][xR]
    }, getLinkableBounds: function () {
      return this[pR]
    }, getDefaultPortPoint: function (t) {
      return ui(oY.CENTER_MIDDLE, t || this[eR]())
    }, getPortPoint: function (t, i) {
      if (!t) return this.getDefaultPortPoint(i);
      i = i || this[eR]();
      var n;
      return i.original ? (n = ui(t, i[eL]), i[Vo] && (n = Pi(n.x, n.y, i[Vo], i[ER] || 0, i[kj] || 0)), n.x += i.tx || 0, n.y += i.ty || 0) : n = ui(t, i), n.port = t, n
    }, getPortPoints: function () {
      var t = this[wR]();
      if (t && Array.isArray(t)) {
        var i = [], n = this.getLinkableBounds();
        return t[Nu](function (t) {
          i[dh](this[m_](t, n))
        }.bind(this)), i
      }
    }
  }, m(xr, jW), K(xr[bh], {
    path: {
      get: function () {
        return this.data.path
      }
    }, length: {
      get: function () {
        return this[Yo][rh]
      }
    }
  }), xr[bh][eo] = function (t, i, n) {
    var e = this._ig(t, i), s = this[Yo], r = Cn(this[C_], e.x, e.y, this[Yo][yR], n);
    return r ? void (s.pathSegments = r[RO]) : !1
  }, pr[bh] = {
    _mj: function () {
      this._j9.style[_j] = XT
    }, _kc: function () {
      this._j9[Ea].visibility = ed
    }, clear: function () {
      this._9g.clear(), this[TT]()
    }, contains: function (t) {
      return t instanceof Object && t.id && (t = t.id), this._9g[Rl](t)
    }, _62: function (t) {
      vW[Zc](this._j9, Z_, t ? UT + t[zu](Vh) + ")" : "")
    }, addDrawable: function (t, i) {
      if (i) {
        var n = {id: ++Dz, drawable: t, scope: i};
        return this._9g.add(n), n
      }
      return t.id || (t.id = ++Dz), this._9g.add(t), t
    }, removeDrawable: function (t) {
      return t.id ? void this._9g[jh](t) : this._9g[Ll](t)
    }, _9g: null, invalidate: function () {
      this[TT]()
    }, _n86: function () {
      this[tc]._6h || this._ju()
    }, _iy: function (t, i) {
      this._j9[vo](t, i)
    }, _ju: function () {
      var t = this[tc][_y], i = this.g;
      i._l5(), i[po](), this[tc]._9a(i);
      for (var n = this._9g._jz, e = 0, s = n[rh]; s > e; e++) i[po](), i[ff](), this._gx(i, n[e], t), i.restore();
      i[AE]()
    }, _gx: function (t, i, n) {
      return i instanceof Function ? void i(t, n) : void (i[Oj] instanceof Function && i.scope && i.drawable.call(i[Dv], t, n))
    }
  }, Jz[Mj] = !0;
  var WW = function (t) {
    this._kp = t
  };
  Jz[Ij] = 600, Jz[Sj] = oH[Pj], WW.prototype = {
    _kp: null, _dq: null, _gu: function (t, i, n) {
      this._ls();
      var e = Math.abs(t / 2), s = Math.abs(i / 2), r = Math.min(Jz[Ij], .6 * Math.max(e, s) * 1e3);
      if (10 > r) return !1;
      var h = function (t) {
        return -(2 * Math.pow(t, 1.5) - 3 * t)
      }, a = t * r / 3, o = i * r / 3;
      this._ks(this._kp.tx + a, this._kp.ty + o, 0, {duration: r, animationType: h}, n)
    }, _7c: function (t, i, n, e, s) {
      this._dq && this._dq._ls(), s && (this[Aj] = !0, this._kp.pauseRendering(!0)), this._49(), this._dq = new uH(t, this, i, n), this._dq._6f = this._6f[Ah](this), this._dq._ku(e)
    }, _49: function () {
      this._kp[Cj]()
    }, _6f: function () {
      this.__delayRender && (this._kp.pauseRendering(!1), delete this[Aj]), this._kp.onAnimationEnd()
    }, _eh: function () {
      return this._dq && this._dq._eh()
    }, _ls: function () {
      this._dq && this._dq._ls()
    }, _iw: function (t) {
      var i = this[Lj] + (this[Rj] - this[Lj]) * t, n = this[Dj] + (this[jj] - this._fromTY) * t,
        e = this._fromScale + (this[Nj] - this._fromScale) * t;
      this._kp[hk](i, n, e, this[qj])
    }, _ks: function (t, i, n, e, s) {
      this._ls();
      var r = this._kp, h = r[mo];
      if (0 >= n && (n = h), t != r.tx || i != r.ty || n != h) {
        var a, o, f;
        e instanceof Object && (a = e[Bj], o = e.maxTime, f = e[$j]);
        var u = r.tx, c = r.ty;
        if (!a) if (n != h) {
          var _ = n > h ? n / h : h / n;
          _ = Math.log(_) / Math.log(1.3), a = 60 * _
        } else {
          var d = eY(t, i, u, c);
          a = d / 2
        }
        o = o || Jz[Ij], f = f || Jz[Sj], a = Math.min(o, a), this[Lj] = u, this[Dj] = c, this[Fj] = h, this._toTX = t, this._toTY = i, this._toScale = n, this._7c(this._iw, a, f, s, n != h)
      }
    }
  }, Jz.INTERACTION_HANDLER_SIZE_TOUCH = 8, Jz[Gj] = 4, Jz[zj] = 30, Jz[Yj] = 20;
  var XW = Math.PI / 4;
  wr[bh] = {
    element: null, _$n: !1, setCurrentElement: function (t, i) {
      this.element = t, i && this[Hj]()
    }, onDataPropertyChange: function () {
    }, addDataPropertyChangeListener: function () {
      this._$n || (this._$n = !0, this.graph[Uj][sl](this._1i, this))
    }, removeDataPropertyChangeListener: function () {
      this._$n && (this._$n = !1, this[O_][Uj].removeListener(this._1i, this))
    }, _1i: function (t) {
      this.element && t[If] == this[Wj] && this[Xj](t)
    }, onElementRemoved: function (t, i) {
      this.element && (t == this[Wj] || B(t) && p(t, this[Wj])) && this[ug](i)
    }, onClear: function (t) {
      this[Wj] && this[ug](t)
    }, destroy: function () {
      delete this[Wj], this[Vj](), this[Zj](), this[Kj] = null
    }, invalidate: function () {
      this[Id][wT]()
    }, removeDrawable: function () {
      this[Jj] && (this[Id][Zj](this[Jj]), delete this._ltableId, this.invalidate())
    }, drawableList: null, addDrawable: function () {
      this[Jj] || (this[Jj] = this[Id].addDrawable(this[Ef], this).id, this[wT]())
    }, isShowing: function () {
      return this[Jj]
    }, draw: function (t, i) {
      this[Kj] && this[Kj][Nu](function (n) {
        n[Ef](t, i)
      }), this[Qj](t, i)
    }, doDraw: function () {
    }, escapable: !0, onkeydown: function (t, i) {
      this[tN] && 27 == t[gw] && (G(t), this[ug](i))
    }
  }, _H[iN] = wr, Tr[bh] = {
    defaultCursor: Pd, getInteractionInstances: function (t) {
      if (!this[nN]) return null;
      for (var i = [], n = 0, e = this.interactions[rh]; e > n; n++) {
        var s = this[nN][n];
        s instanceof Function && (s = new s(t)), s[eN] instanceof Function && s[eN](t), i[dh](s)
      }
      return i
    }
  }, kr.prototype = {
    _dr: null, _ke: null, destroy: function () {
      T(this, kr, ug, arguments), delete this._ke, delete this._9o, delete this._dr
    }, doDraw: function (t) {
      var i = this[qo];
      i && (t[ff](), i[Nu](function (i) {
        this[sN](t, i)
      }, this), this.isClosePath && t[Uf](), this[rN](t))
    }, styleDraw: function (t) {
      var i = Or(this[O_][CD], this[hN](this[O_]));
      i[hf] && (t.lineWidth = i[hf], i.lineCap && (t[vd] = i.lineCap), i[_E] && (t[_E] = i[_E]), i[ku] && (t[ku] = i[ku], t[Cu] = i[Cu] || 0), t[yf] = i[yf], t.stroke()), i[_f] && (t[_f] = i[_f], t[lf]())
    }, drawPoint: function (t, i, n) {
      if (n) return void t.moveTo(i.x, i.y);
      if (_H[$h](i)) {
        var e = i[0], s = i[1];
        t[dp](e.x, e.y, s.x, s.y)
      } else t[vf](i.x, i.y)
    }, setCurrentPoint: function (t) {
      this[aN] = t
    }, addPoint: function (t) {
      this._ke || (this._ke = [], this.addDrawable()), this._ke.push(t), this[wT]()
    }
  }, m(kr, wr), K(kr[bh], {
    currentPoint: {
      get: function () {
        return this._9o
      }, set: function (t) {
        this._9o = t, this[wT]()
      }
    }, prevPoint: {
      get: function () {
        return this._ke && this._ke[rh] ? this._ke[this._ke[rh] - 1] : null
      }
    }, points: {
      get: function () {
        return this._9o && this._ke && this._ke.length ? this._ke[uh](this._9o) : void 0
      }
    }
  }), _H[oN] = kr, Mr[bh] = {
    _iz: function (t, i) {
      return this.start && t != this.start ? this._dt(t, i) : this[fN](t, i)
    }, _n81: function (t, i) {
      return t instanceof xW && i[ZR](t)
    }, _dt: function (t, i) {
      return t instanceof xW && i[KR](t, this.start)
    }, _n74: function (t, i, n, e) {
      if (this[uN]) return this[uN][cN](n, e);
      var s = i[M_](t);
      return s && s[pR] ? s[pR][sy] : t.location
    }, _dj: function (t) {
      this._kk && (clearTimeout(this._kk), delete this._kk), this._kk = setTimeout(function (t) {
        if (delete this._kk, this[_N] && this.currentPoint) {
          var i = t.x - this[aN].x, n = t.y - this.currentPoint.y;
          Math.sqrt(i * i + n * n) * this[O_][mo] <= 2 && this[eo](this[aN])
        }
      }.bind(this, this[dN](t)), Jz.LONG_PRESS_INTERVAL)
    }, destroy: function () {
      T(this, Mr, ug, arguments), this[_N] = null, this.startPort = null, this._kk && (clearTimeout(this._kk), delete this._kk), this[lN] = null, this[uN] = null
    }, ondblclick: function (t, i) {
      this[ug](i)
    }, finish: function (t, i, n, e) {
      var s;
      this._ke && this._ke[rh] >= 2 && (this._ke.shift(), s = new Qz, l(this._ke, function (t) {
        if (_H[$h](t)) {
          var i = t[0], n = t[1];
          s.add(new XH(dH.SEGMENT_QUAD_TO, [i.x, i.y, n.x, n.y]))
        } else s.add(new XH(dH[nE], [t.x, t.y]))
      }, this)), i.createEdgeByInteraction(this[_N], n, t, s, this[vN], e), this[ug](i)
    }, onstart: function (t, i) {
      if (this[_N]) {
        var n = t[Jy](), e = i[tk](t);
        return this._dt(n, i) ? void this.finish(t, i, n, new Sr(i[M_](n))[cN](e.x, e.y)[mR]) : void this[eo](e)
      }
    }, startdrag: function (t, i) {
      if (!this[_N] && !t.responded) {
        var n = t.getData();
        if (n && this[fN](n, i)) {
          t.responded = !0, this.start = n;
          var e = i.toLogical(t), s = this[bN](n, i, e.x, e.y);
          this[vN] = s[mR], this[eo](s)
        }
      }
    }, ondrag: function (t, i) {
      this[yN](t, i)
    }, enddrag: function (t, i) {
      if (this.start) {
        var n = this[lN] || t.getData();
        if (this._dt(n, i)) {
          var e = i[tk](t);
          this[gN](t, i, n, new Sr(i[M_](n)).nearestPoint(e.x, e.y)[mR])
        }
      }
    }, onrelease: function (t, i) {
      zY(t) && this[ug](i)
    }, _n9z: null, onmousemove: function (t, i) {
      var n = i[tk](t), e = Ir(i, n.x, n.y, function (t) {
        return this._iz(t, i)
      }[Ah](this));
      e != this[lN] && (this[lN] = e, this[uN] = e ? new Sr(i.getUI(e)) : null, e ? (this.addDrawable(), this[Kj] = [this[uN]]) : this.drawableList = null, this.invalidate());
      var s;
      this._n8urrentPort && (s = this[uN].nearestPoint(n.x, n.y), this.invalidate()), this.start && (this[aN] = s || n, zY(t) && this._dj(t, i))
    }, toLogicalPoint: function (t) {
      return this[O_].toLogical(t)
    }, getDefaultDrawStyles: function () {
      return {
        lineWidth: this[O_][tD](kW.EDGE_WIDTH),
        strokeStyle: this[O_].getDefaultStyle(kW.EDGE_COLOR),
        lineDash: this[O_].getDefaultStyle(kW[xN]),
        lineDashOffset: this.graph[tD](kW[uP]),
        lineCap: this[O_][tD](kW[mI]),
        lineJoin: this[O_].getDefaultStyle(kW[TI])
      }
    }
  }, m(Mr, kr), _H[pN] = Mr, Sr.prototype.drawRect = function (t, i, n) {
    var e = 0;
    t[ff](), t[uf](n.x - e, n.y - e, n[da] + 2 * e, n[no] + 2 * e), t[hf] = 2 / i, t[yf] = PR, t[zo]()
  }, Sr[bh][sN] = function (t, i, n) {
    var e = 4;
    t.beginPath();
    var s = e / i;
    t.moveTo(n.x + s, n.y), t.arc(n.x, n.y, s, 0, 2 * Math.PI, !1), t[hf] = 1 / i, n.marked ? (t[yf] = EN, t[_f] = mN) : (t[yf] = PR, t[_f] = "rgba(255, 255, 255, 0.8)"), t.fill(), t[zo]()
  }, Sr[bh].draw = function (t, i) {
    var n = this[uf];
    this[wN](t, i, n), this.points && this[qo].forEach(function (n) {
      this[sN](t, i, n)
    }.bind(this))
  }, Sr.prototype.nearestPoint = function (t, i, n) {
    if (this[qo]) {
      n = n || 20, n *= n;
      var e, s = n;
      return this[qo].forEach(function (r) {
        r[TN] && (r[TN] = !1);
        var h = r.x - t, a = r.y - i, o = h * h + a * a;
        n > o && s > o && (s = o, e = r)
      }), e && (e.marked = !0), e || this[Rd]
    }
    return this[Rd]
  }, Pr[bh] = {
    getDefaultDrawStyles: function () {
      return {
        lineWidth: this[O_].getDefaultStyle(kW.SHAPE_STROKE),
        strokeStyle: this[O_][tD](kW[KM]),
        fillStyle: this.graph[tD](kW[eI])
      }
    }, finish: function (t, i) {
      if (this._ke && this._ke[rh]) {
        var n = this._ke, e = 0, s = 0, r = 0;
        n[Nu](function (t) {
          return _H[$h](t) ? void t[Nu](function () {
            e += t.x, s += t.y, r++
          }) : (e += t.x, s += t.y, void r++)
        }), e /= r, s /= r;
        var h = [];
        n[Nu](function (t, i) {
          if (0 == i) return void h[dh](new XH(dH[iE], [t.x - e, t.y - s]));
          if (_H[$h](t)) {
            var n = t[0], r = t[1];
            h[dh](new XH(dH[kN], [n.x - e, n.y - s, r.x - e, r.y - s]))
          } else h[dh](new XH(dH[nE], [t.x - e, t.y - s]))
        }), this[fo](t, h, e, s), this[ug](i)
      }
    }, startdrag: function (t) {
      t[ON] = !0
    }, createElement: function (t, i, n, e) {
      return this[O_].createShapeByInteraction(t, i, n, e)
    }, onstart: function (t, i) {
      var n = i[tk](t);
      this._dr = n, this[eo](n)
    }, onmousemove: function (t, i) {
      this._dr && (this[aN] = i[tk](t))
    }, ondblclick: function (t, i) {
      if (this._dr) {
        if (this._ke[rh] < 3) return void this[ug](i);
        delete this._ke[this._ke[rh] - 1], this[gN](t, i)
      }
    }, isClosePath: !0
  }, m(Pr, kr), _H[MN] = Pr, Ar.prototype = {
    isClosePath: !1, createElement: function (t, i, n, e) {
      return this[O_].createLineByInteraction(t, i, n, e)
    }, getDefaultDrawStyles: function () {
      return {
        lineWidth: $W[kW[VM]],
        strokeStyle: $W[kW[KM]],
        lineDash: this.graph[tD](kW.SHAPE_LINE_DASH),
        lineDashOffset: this[O_][tD](kW[nI]),
        lineCap: this[O_][tD](kW.LINE_CAP),
        lineJoin: this[O_].getDefaultStyle(kW[TI])
      }
    }
  }, m(Ar, Pr), _H[IN] = Ar, Cr.prototype = {
    destroy: function (t) {
      T(this, Cr, ug, arguments), t[$D] = "", this[_N] = null
    }, doDraw: function (t) {
      if (this[_N] && this.currentPoint) {
        var i, n;
        this[O_].interactionProperties && (i = this.graph[CD][Nk], n = this.graph[CD].edgeType), i = i || this[O_][SN] || _H.EdgeUI, n = n || this[O_].edgeType;
        var e = i.drawReferenceLine || _H[PN].drawReferenceLine, s = this[O_][M_](this.start);
        s && s[pR] && (s = s.bodyBounds[sy], t.beginPath(), e(t, s, this.currentPoint, n), this[rN](t))
      }
    }, canLinkFrom: function (t, i) {
      return t instanceof xW && i[ZR](t)
    }, canLinkTo: function (t, i) {
      return t instanceof xW && i[KR](t, this[_N])
    }, startdrag: function (t, i) {
      var n = t[Jy]();
      this[ZR](n, i) && (t.responded = !0, this[_N] = n, i.cursor = Og, this[AN]())
    }, ondrag: function (t, i) {
      this[_N] && (_H[DR](t), this.currentPoint = i[tk](t), this[wT]())
    }, enddrag: function (t, i) {
      if (this.start) {
        this[wT]();
        var n = t.getData();
        this.canLinkTo(n, i) && i[CN](this.start, n, t), this[ug](i)
      }
    }, getDefaultDrawStyles: function () {
      return {
        lineWidth: this[O_][tD](kW.EDGE_WIDTH),
        strokeStyle: this.graph[tD](kW[eP]),
        lineDash: this[O_].getDefaultStyle(kW[xN]),
        lineDashOffset: this[O_][tD](kW[uP]),
        lineCap: this[O_].getDefaultStyle(kW[mI]),
        lineJoin: this[O_][tD](kW[TI])
      }
    }
  }, m(Cr, kr), _H[LN] = Cr, Jz[RN] = !1, qr[bh] = {
    html: null, createHTML: function () {
      var t = i.createElement(DN);
      t.className = jN, t.style[xu] = _T, t[Ea][wo] = sy, t[Ea][hx] = NN, t[Ea][Of] = qN, t[Ea][BN] = "0px 0px 10px rgba(40, 85, 184, 0.75)", t.style[Qw] = sd, t[Ea].overflow = ed;
      var n = this;
      return t[$N] = function (t) {
        n[FN](t)
      }, t[GN] = function (t) {
        return 27 == t[gw] ? void n[zN]() : void 0
      }, t[YN] = function (i) {
        if (13 == i[gw] || 10 == i.keyCode) {
          if (i[Gh](), i.altKey || i.ctrlKey || i.shiftKey) return jr(t, Oo), void n[FN](i);
          n[HN]()
        }
      }, i.body[Q_](t), t
    }, setText: function (t, i) {
      this[ED][Ih] = t || "", i && (this.html[Ea][cA] = i), Nr(this[ED]), this[UN](this[ED])
    }, onSizeChange: function (t) {
      var i = (t[Jd], t[jd], Dr(t));
      return t[Ea].width = i.width + 30 + so, t[Ea][no] = i[no] + 10 + so, i
    }, onValueChange: function (t) {
      var i = t[Yc];
      this.onSizeChange(i), i[Ea][Mf] = i.x - i[Jd] / 2 + so
    }, onClickOnWindow: function (t) {
      t.target != this.html && (Jz[RN] ? this[HN]() : this[zN]())
    }, startEdit: function (i, n, e, s, r) {
      this[ED] || (this[ED] = this[WN]()), this[XN] || (this.stopEditWhenClickOnWindow = function (t) {
        this.onClickOnWindow(t)
      }[Ah](this)), t.addEventListener(Ey, this[XN], !0), this[Wc] = r, this[ED].x = i, this[ED].y = n, this.html[Ea][Qw] = nj, Rr(this.html, i, n), this.setText(e, s || 10), Rr(this[ED], i, n)
    }, isEditing: function () {
      return sd != this[ED].style.display
    }, cancelEdit: function () {
      this.stopEdit(!0)
    }, stopEdit: function (i) {
      if (this[VN]()) {
        t[Sb](Ey, this[XN]);
        var n = this[ED][Ih];
        !i && this[Wc] && this.callback(n), this[ED][Ea][Qw] = sd, this[ED][Ih] = null, this[Wc] = null
      }
    }, destroy: function () {
      this.html && i.body.removeChild(this[ED])
    }
  }, _H.LabelEditor = qr;
  var VW = function (t) {
    this.graph = t
  };
  VW[bh] = {
    destroy: function (t) {
      t[ZN] && (t.labelEditor.destroy(), delete t.labelEditor)
    }, ondblclick: function (t, i) {
      var n = t[Jy]();
      if (n) {
        if (n[KN] !== !1) {
          if (i[uR] && i[JN](n)) {
            var e = i[q_](t);
            if (e instanceof qW && e[uR] !== !1) {
              var s = i[ZN];
              s || (i[ZN] = s = new qr);
              var r = e[jo]();
              return r = i.toCanvas(r.x + r[da] / 2, r.y + r[no] / 2), r = Lr(r.x, r.y, i[ED]), void i[QN](n, e, s, r)
            }
          }
          var h = n instanceof mW, a = n instanceof gW && n.hasEdgeBundle();
          return n._4f && (Ti(t) || !h && !a) ? void (i.currentSubNetwork = n) : h ? (n[Bk] = !n.expanded, void this.graph[kD](new Wr(this[O_], Wr.GROUP_EXPANDED, t, n))) : void (a && this[O_][xD](n) && this.graph.onInteractionEvent(new Wr(this[O_], Wr[tq], t, n)))
        }
      } else {
        if (i[qO]) return void i[iq]();
        if (i.enableDoubleClickToOverview) {
          var o = i[nq] || 1;
          Math.abs(i.scale - o) < 1e-4 ? i[cD]() : i.moveToCenter(o)
        }
      }
    }
  };
  var ZW = function (t) {
    this[O_] = t
  };
  ZW[bh] = {
    onkeydown: function (t, i) {
      if (i[uR]) {
        var n = t.keyCode;
        if (8 == n || 46 == n || 127 == n) return i[eq](t), void $(t);
        if (Ti(t)) {
          if (67 == n) ; else if (86 == n) ; else if (90 == n) ; else if (89 != n) return;
          $(t)
        }
      }
    }
  }, _H.EditInteraction = ZW;
  var KW = function (t) {
    this[O_] = t
  };
  KW.prototype = {
    onkeydown: function (i, n) {
      if (i[Ga] && 83 == i[gw]) {
        var e = n.exportImage(n[mo], n.viewportBounds), s = t[Za](), r = s[sq];
        r[rq] = hq + e.width + aq + e[no];
        var h = r[fo](W_);
        h.src = e[Yo], r[Ip][Q_](h), $(i)
      }
    }
  };
  var JW = function (t) {
    this[O_] = t
  };
  JW[bh] = {
    destroy: function () {
      delete this.draggingElements, delete this[oq]
    }, _24: function (t) {
      var i = new Qz;
      return t[Td].forEach(function (n) {
        t.isMovable(n) && t.isVisible(n) && i.add(n)
      }, this), i
    }, onstart: function (t, i) {
      this.currentDraggingElement && this[ug](i)
    }, startdrag: function (t, i) {
      if (!(t.responded || t[Aa] && 1 != t[Aa][rh])) {
        var n = t[Jy]();
        if (!n || !i[fq](n) || !i[gD](n)) return void this[ug](i);
        t[ON] = !0, this.currentDraggingElement = n, this[uq] = this._24(i);
        var e = new Wr(i, Wr[cq], t, this[oq], this[uq].datas);
        return i.beforeInteractionEvent(e) === !1 ? void this[ug](i) : void i.onInteractionEvent(e)
      }
    }, ondrag: function (t, i) {
      if (this[oq]) {
        if (t[Aa] && 1 != t[Aa].length) return void this.enddrag(t, i);
        G(t);
        var n = t.dx, e = t.dy, s = i[mo];
        n /= s, e /= s;
        var r = new Wr(i, Wr[_q], t, this[oq], this[uq].datas);
        i[dq](this[uq][bb], n, e), i[kD](r)
      }
    }, enddrag: function (t, i) {
      if (this[oq]) {
        if (this[uq] && this[uq].length) {
          if (t[bw]) {
            var n, e = i[tk](t), s = e.x, r = e.y;
            i[lq](function (t) {
              var i = t[Yo];
              if (!this[uq][N_](i) && t[Cd][Bo](s - t.x, r - t.y) && t[q_](s, r, 1)) {
                if (i instanceof _H[AD]) {
                  if (!i[qk]) return;
                  for (var e = this[uq][rh]; e-- > 0;) {
                    var h = this[uq].get(e);
                    if (h instanceof _H[Ad] && h[vq](i)) return
                  }
                  return n = i, !1
                }
                return (i[qk] || i._ic() && i[Bk]) && (n = i), !1
              }
            }, this), n && this[uq][Nu](function (t) {
              for (var i = t[sc]; i;) {
                if (this[uq][N_](i)) return;
                i = i[sc]
              }
              t[sc] = n
            }, this)
          }
          var h = new Wr(i, Wr[bq], t, this[oq], this[uq][bb]);
          i.onInteractionEvent(h)
        }
        this.destroy(i)
      }
    }, onpinch: function (t, i) {
      this[oq] && this.enddrag(t, i)
    }, step: 1, onkeydown: function (t, i) {
      if (Ti(t)) {
        var n, e;
        if (37 == t[gw] ? n = -1 : 39 == t[gw] ? n = 1 : 38 == t[gw] ? e = -1 : 40 == t[gw] && (e = 1), n || e) {
          var s = this._24(i)[bb];
          if (0 != s[rh]) {
            $(t), n = n || 0, e = e || 0;
            var r = this[yq] / i[mo], h = new Wr(i, Wr[bq], t, null, s);
            i[dq](s, n * r, e * r), i[kD](h)
          }
        }
      }
    }
  };
  var QW = function (t) {
    this[O_] = t
  };
  QW[bh] = {
    onkeydown: function (t, i) {
      Ti(t) || (37 == t.keyCode ? (this._66(i, 1, 0), $(t)) : 39 == t[gw] ? (this._66(i, -1, 0), $(t)) : 38 == t[gw] ? (this._66(i, 0, 1), $(t)) : 40 == t[gw] && (this._66(i, 0, -1), $(t)))
    }, _66: function (t, i, n) {
      t._n70(i, n)
    }, onstart: function (t, i) {
      this._ku && this.destroy(i)
    }, _ku: !1, startdrag: function (t, i) {
      if (!t.responded) {
        i[gq](), t.responded = !0, this._ku = !0, i[$D] = nH;
        var n = new Wr(i, Wr[xq], t);
        i.onInteractionEvent(n)
      }
    }, ondrag: function (t, i) {
      this._ku && i[Eo](t.dx || 0, t.dy || 0)
    }, enddrag: function (t, i) {
      if (this._ku) {
        if (i[pq] !== !1) {
          var n = t.vx, e = t.vy;
          (Math.abs(n) > .1 || Math.abs(e) > .1) && i[md](n, e)
        }
        this.destroy(i);
        var s = new Wr(i, Wr.PAN_END, t);
        i[kD](s)
      }
    }, startpinch: function (t, i) {
      i[Eq](!0)
    }, onpinch: function (t, i) {
      this._ku = !0;
      var n = t[uy];
      if (n) {
        var e = i.globalToLocal(t.center);
        i[eD](n, e.x, e.y, !1)
      }
    }, endpinch: function (t, i) {
      i[Eq](!1)
    }, destroy: function (t) {
      this._ku = !1, t[$D] = null
    }
  }, Br[bh] = {
    onDataPropertyChange: function () {
      this[O_][fD](function () {
        this._k7()
      }, this)
    }, destroy: function () {
      this[O_][$D] = null, this[Wj] && delete this.element[mq], this[wq] = !1, delete this._n7g, delete this._9o, delete this[Tq], T(this, Br, ug, arguments)
    }, _n7g: null, _5b: function (t) {
      this[$_] = t, this.invalidate()
    }, isEndPointEditable: function (t, i) {
      return this[O_][kq](t, i)
    }, drawPoint: function (t, i, n) {
      (!i[Oq] || this[kq](this.element, i[Mq])) && (t[ff](), i.isControlPoint ? t[uf](i.x - this.handlerSize / n, i.y - this[Xd] / n, this[Xd] / n * 2, this[Xd] / n * 2) : t.arc(i.x, i.y, this[Xd] / n, 0, 2 * Math.PI, !1), t[hf] = 1 / n, t[ku] = [], t[yf] = yd, t[_f] = "rgba(255, 255, 0, 0.8)", t[zo](), t[lf]())
    }, _fv: function (t, i, n, e) {
      e ? t[bf](i, n) : t.lineTo(i, n)
    }, doDraw: function (t, i) {
      this[Iq](t, i)
    }, drawLine: function (t, i) {
      if (this._n7g && this._n7g[rh]) {
        var n = this[$_];
        t[po]();
        var e = this[Wj] instanceof pW;
        e && (t[Eo](this.element.x, this.element.y), this.element[Vo] && t.rotate(this[Wj][Vo]));
        var s, r = [];
        t[ff]();
        var h = n[rh];
        n[Nu](function (i, n) {
          if (i[Xo] != dH[sE]) for (var e = !n || n == h - 1, a = 0, o = i[qo]; a + 1 < o[rh];) {
            var f = o[a], u = o[a + 1], c = {x: f, y: u, isControlPoint: this._6s(i, a)};
            e && (c.isEndPoint = !0, c.isFrom = 0 == n), r.push(c), this._fv(t, c.x, c.y, null == s), s = c, a += 2
          }
        }, this), t.lineWidth = 1 / i, t[ku] = [2 / i, 3 / i], t[yf] = Sq, t[zo](), r[Nu](function (n, e) {
          this.drawPoint(t, n, i, e)
        }, this), t[AE]()
      }
    }, invalidate: function () {
      this.topCanvas[wT]()
    }, _41: function (t) {
      if (this.element != t && (this.element && this[ug](), t && this[JN](t))) {
        var i = this._5d(t, this.graph);
        i && (this[Pq](t, !0), t[mq] = !0, this._n8anEdit = !0, this._5b(i), this[AN]())
      }
    }, _k7: function () {
      if (this[Aq]() && this.element) {
        var t = this._5d(this.element, this[O_]);
        return t ? void this._5b(t) : void this.destroy(this[O_])
      }
    }, _5d: function (t, i) {
      if (i[JN](t)) {
        var n = t[sR] || [];
        n instanceof Qz && (n = n[jl]());
        var e = i[M_](t);
        if (e instanceof _H[PN]) {
          var s = e.getEndPointBounds(i.getUI(t[oc])), r = e.getEndPointBounds(i[M_](t.toAgent)), h = s[sy], a = r[sy],
            o = e[s_](kW.EDGE_FROM_OFFSET), f = e.getStyle(kW.EDGE_TO_OFFSET);
          o && (h.x += o.x || 0, h.y += o.y || 0), f && (a.x += f.x || 0, a.y += f.y || 0), n[fh](0, 0, new _H[Cq](dH[iE], [h.x, h.y])), n[dh](new _H[Cq](dH[iE], [a.x, a.y]))
        }
        return n
      }
    }, _ig: function (t, i) {
      t -= this[Wj].x, i -= this[Wj].y;
      var n = {x: t, y: i};
      return this[Wj].rotate && Zs(n, -this[Wj][Vo]), n
    }, isPointAddable: function () {
      return !0
    }, isPointRemovable: function () {
      return !0
    }, onclick: function (t, i) {
      if (i[uR] && t[yw] && this[Wj]) {
        var n = this._g2(t, i);
        if (n && n[Lq] && this[Rq](this[Wj], n, i) !== !1) {
          if (n[Af] >= 0) {
            this[Wj][Dq](n.index);
            var e = new Wr(i, Wr.POINT_REMOVE, t, this.element);
            e[jq] = n, i[kD](e)
          }
        } else if (this[Wj] == t[Jy]() && this[Nq](this[Wj], i) !== !1) {
          var s = i.toLogical(t), r = i[M_](this[Wj]);
          if (r[eo](s.x, s.y, this[Xd] || 2) !== !1) {
            var e = new Wr(i, Wr[qq], t, this.element);
            e[jq] = s, i[kD](e)
          }
        }
      }
    }, isEditable: function (t) {
      return this.graph[JN](t) && (t instanceof pW || t instanceof gW && (!t[xc]() || t.hasPathSegments()))
    }, ondblclick: function (t, i) {
      if (!i.editable) return void (this[Wj] && this[ug](i));
      var n = t[Jy]();
      return !n || n == this.element || n[mq] ? void this[ug](i) : void this._41(n)
    }, onstart: function (t, i) {
      if (this[wq] = !0, !i[uR]) return void (this[Wj] && this[ug](i));
      if (!t.responded) {
        if (this[Wj] && this._g2(t, i)) return void (t.responded = !0);
        var n = t[Jy]();
        return n && i[Bq](n) && n instanceof pW ? void (this.element && n != this[Wj] && this[ug]()) : void this._41(n)
      }
    }, onrelease: function () {
      this[wq] = !1, this[Wj] && (this._n8anEdit = !0)
    }, _9o: null, _g2: function (t, i) {
      var n = i[tk](t);
      this[Wj] instanceof pW && (n = this._ig(n.x, n.y));
      var e, s = i[mo], r = this[Xd] / s, h = this._n7g, a = h.length, o = this.element instanceof _H.Edge;
      return h[Nu](function (t, s) {
        for (var f = 0, u = t[qo]; f + 1 < u[rh];) {
          var c = u[f], _ = u[f + 1], d = eY(n.x, n.y, c, _);
          if (r > d) {
            if (e = {
              oldPoints: u[oh](0),
              segment: t,
              index: s,
              pointIndex: f
            }, o && (e.index -= 1), o && !$r(t) && (0 == s || s == h[rh] - 1)) {
              e.isEndPoint = !0;
              var l = 0 == s;
              e[Mq] = l;
              var v = l ? _H.Styles.EDGE_FROM_OFFSET : _H[SD][k_], b = i[s_](this[Wj], v) || {};
              e[$q] = [b.x || 0, b.y || 0]
            }
            return this._6s(t, f) && (e.isControlPoint = !0, s > 0 && (e[Fq] = h instanceof Qz ? h[Sl](s - 1) : h[s - 1]), a > s + 1 && (e[Gq] = h instanceof Qz ? h[Sl](s + 1) : h[s + 1], e.nextSegment[qo] && (e.oldNextPoints = e.nextSegment.points.slice(0)))), !1
          }
          f += 2
        }
      }, this), e && e[Oq] && !this.isEndPointEditable(this.element, e.isFrom) ? void 0 : e
    }, _6s: function (t, i) {
      return i == t[qo][rh] - 2
    }, startdrag: function (t, i) {
      if (this[Wj] && this[Tq] && (this._9o = this._g2(t, i), this._9o)) {
        this[Zj](), t[ON] = !0;
        var n = new Wr(i, Wr[zq], t, this[Wj]);
        n[jq] = this._9o, i[kD](n)
      }
    }, onkeyup: function (t, i) {
      this[wq] && 16 != !t[gw] && this[Wj] && this._9o && this._9o[Yq] && this._di(this._9o[Yq].x, this._9o[Yq].y, i, t, !1)
    }, onkeydown: function (t, i) {
      T(this, Br, GN, arguments), this[wq] && this.element && this._9o && t.shiftKey && this._9o[Yq] && this._di(this._9o[Yq].x, this._9o[Yq].y, i, t, !0)
    }, _di: function (t, i, n, e, s) {
      var r = this._9o, h = this.element, a = r.oldPoints, o = r[Hq];
      if (r[Oq]) {
        var f = r[Mq] ? _H[SD][T_] : _H.Styles[k_], u = {x: a[0] + t, y: a[1] + i};
        h.setStyle(f, u);
        var c = new Wr(n, Wr[Uq], e, h);
        return c[jq] = r, void n[kD](c)
      }
      if (s && r.isControlPoint) {
        var _ = {x: a[a[rh] - 2] + t, y: a[a.length - 1] + i}, d = r.prevSegment, l = r[Gq], v = 20 / n[mo],
          b = Number[Zl], y = b, g = b, x = b;
        d && (d = d[Wo], b = Math.abs(_.x - d.x), g = Math.abs(_.y - d.y)), l && (l = l[Wo], y = Math.abs(_.x - l.x), x = Math.abs(_.y - l.y)), v > b && y > b ? t += d.x - _.x : v > y && b > y && (t += l.x - _.x), v > g && x > g ? i += d.y - _.y : v > x && g > x && (i += l.y - _.y)
      }
      if (r[Lq] && $r(o)) {
        for (var p = o[qo][rh] - 4; p < o[qo][rh];) {
          var E = a[p] + t, m = a[p + 1] + i;
          o[qo][p] = E, o[qo][p + 1] = m, p += 2
        }
        if (r[Gq] && $r(r[Gq])) {
          var w = r[Wq], E = w[0] + t, m = w[1] + i;
          r[Gq][qo][0] = E, r[Gq][qo][1] = m
        }
      } else {
        var p = r[Xq], E = a[p] + t, m = a[p + 1] + i;
        o[qo][p] = E, o[qo][p + 1] = m
      }
      h[lO]();
      var c = new Wr(n, Wr[Uq], e, h);
      c.point = r, n[kD](c)
    }, ondrag: function (t, i) {
      if (this[Wj] && this._9o) {
        var n = this._9o, e = this.element, s = t[bg], r = t[yg], h = i[mo];
        if (s /= h, r /= h, e.rotate) {
          var a = {x: s, y: r};
          Zs(a, -e.rotate), s = a.x, r = a.y
        }
        n[Yq] = {x: s, y: r}, this._di(s, r, i, t, t[bw])
      }
    }, enddrag: function (t, i) {
      if (this.element && this._9o) {
        this.addDrawable(), this._k7();
        var n = new Wr(i, Wr[Vq], t, this.element);
        n[jq] = this._9o, i[kD](n)
      }
    }, onmousemove: function (t, i) {
      this[Wj] && (i[$D] = t.altKey && (this._g2(t, i) || this[Wj] == t[Jy]()) ? "crosshair" : null)
    }
  }, m(Br, wr), Jz[Zq] = 1, Jz[Kq] = V(3724541951), Jz[Jq] = V(1430753245), dH.RECTANGLE_SELECTION_MODE_INTERSECT = Qq, dH[tB] = iB, Jz[nB] = dH[eB];
  var tX = function (t) {
    this.graph = t, this[Id] = t[Id]
  };
  tX[bh] = {
    onstart: function (t, i) {
      this._ku && this.destroy(i)
    }, startdrag: function (t, i) {
      t[ON] || (t.responded = !0, this._ku = i[tk](t), i[$D] = Og, this[sB] = this.topCanvas.addDrawable(this._11, this).id)
    }, ondrag: function (t, i) {
      if (this._ku) {
        G(t), this._end = i[tk](t), this.invalidate();
        var n = new Wr(i, Wr[rB], t, i[Td]);
        i[kD](n)
      }
    }, enddrag: function (t, i) {
      if (this._ku) {
        this[hB] && (clearTimeout(this[hB]), this[hB] = null), this._g3(!0), this[ug](i);
        var n = new Wr(i, Wr[aB], t, i[Td]);
        i[kD](n)
      }
    }, onpinch: function (t, i) {
      this._ku && this[Zy](t, i)
    }, _11: function (t, i) {
      t[yf] = Jz[Kq], t.fillStyle = Jz.SELECTION_RECTANGLE_FILL_COLOR, t.lineWidth = Jz[Zq] / i;
      var n = this._ku.x, e = this._ku.y;
      t[uf](n, e, this[oB].x - n, this._end.y - e), t.fill(), t[zo]()
    }, invalidate: function () {
      return this[GO] ? void this[Id][wT]() : (this[GO] = !0, void (this[hB] = setTimeout(this._g3.bind(this), 100)))
    }, _g3: function (t) {
      if (this.invalidateFlag = !1, this[hB] = null, !this._ku || $z && !t) return void this[Id][wT]();
      var i = Math.min(this._ku.x, this[oB].x), n = Math.min(this._ku.y, this._end.y),
        e = Math.abs(this._ku.x - this._end.x), s = Math.abs(this._ku.y - this[oB].y);
      if (!e || !s) return void this[O_][Td][yu]();
      var r = [], h = this.graph[mo], a = this[O_][fB];
      if (this[O_][uB](function (t) {
        t._ia && this[O_][Od](t[Eu]) && this[cB](i, n, e, s, t, h, a) && r[dh](t[Yo])
      }[Ah](this)), this[O_][Td].set(r), this.topCanvas[wT](), !t) {
        var o = new Wr(this[O_], Wr[_B], null, this[O_].selectionModel);
        this[O_][kD](o)
      }
    }, inRectangle: function (t, i, n, e, s, r, h) {
      var a = s[jo]();
      return ai(t, i, n, e, a.x, a.y, a[da], a.height) ? !0 : (h = h || Jz.RECTANGLE_SELECTION_MODE, h == dH.RECTANGLE_SELECTION_MODE_CONTAIN ? !1 : Fn(t, i, n, e, s, r))
    }, destroy: function (t) {
      this._ku = null, t.cursor = null, this._11Id && (this.topCanvas[Zj](this[sB]), delete this[sB], this.topCanvas[wT]())
    }
  };
  var iX = I({
    "super": tX, onstart: null, startdrag: null, ondrag: null, enddrag: null, accept: function (t, i, n) {
      return n[dB] !== !1
    }, oncontextmenu: function (t, i) {
      i[lB] || G(t)
    }, onstart2: function () {
      tX.prototype.onstart[xh](this, arguments)
    }, startdrag2: function (t, i) {
      t[ON] || (i[lB] && i[lB].hide instanceof Function && i[lB][vB](), tX.prototype[Yy][xh](this, arguments))
    }, ondrag2: function () {
      tX[bh].ondrag[xh](this, arguments)
    }, enddrag2: function () {
      tX[bh][Zy][xh](this, arguments)
    }
  }), XW = Math.PI / 4;
  Fr.prototype = {
    _dy: !1, _e2: !1, onDataPropertyChange: function () {
      this[O_][fD](function () {
        this._9h()
      }, this)
    }, ondblclick: function (t, i) {
      this[Wj] && this.destroy(i)
    }, destroy: function (t) {
      t[$D] = null, delete this._df, delete this._n9ody, delete this._9o, delete this._n8anEdit, delete this._ke, delete this._rotatePoint, delete this._e2, delete this._dy, delete this[bB], T(this, Fr, ug, arguments)
    }, _df: null, _ke: null, _90: function (t) {
      this._df = t;
      var i = this._df.x, n = this._df.y, e = this._df[da], s = this._df[no];
      if (this[Wj] instanceof mW && this[Wj].expanded, this._e2) {
        var r = [];
        r.push({x: i, y: n, p: oY[dv], cursor: yB, rotate: 5 * XW}), r[dh]({
          x: i + e / 2,
          y: n,
          p: oY[av],
          cursor: gB,
          rotate: 6 * XW
        }), r[dh]({x: i + e, y: n, p: oY[uv], cursor: Zd, rotate: 7 * XW}), r[dh]({
          x: i,
          y: n + s / 2,
          p: oY[rv],
          cursor: xB,
          rotate: 4 * XW
        }), r[dh]({x: i, y: n + s, p: oY.LEFT_BOTTOM, cursor: Zd, rotate: 3 * XW}), r[dh]({
          x: i + e,
          y: n + s / 2,
          p: oY[cv],
          cursor: xB,
          rotate: 0
        }), r[dh]({x: i + e / 2, y: n + s, p: oY[fv], cursor: gB, rotate: 2 * XW}), r.push({
          x: i + e,
          y: n + s,
          p: oY.RIGHT_BOTTOM,
          cursor: yB,
          rotate: XW
        }), this._ke = r
      }
      this._rotatePoint = this._dy ? {x: i + e / 2, y: n, cursor: eH} : null, this.invalidate()
    }, _e3: function (t, i, n, e) {
      t[ff]();
      var s = (this.handlerSize - 1) / e;
      t[uf](i - s, n - s, 2 * s, 2 * s), t[hf] = 1 / e, t[ku] = [], t[yf] = yd, t[_f] = "rgba(255, 255, 255, 0.8)", t[zo](), t.fill()
    }, _5o: function (t, i, n, e, s, r) {
      s = s || this[Xd], r = r || pB, t[ff](), s /= e, t.arc(i, n, s, 0, 2 * Math.PI, !1), t[hf] = 1 / e, t[ku] = [], t[yf] = yd, t[_f] = r, t.stroke(), t[lf]()
    }, _ig: function (t, i) {
      t -= this.element.x, i -= this.element.y;
      var n = {x: t, y: i};
      return this[Wj][Vo] && Zs(n, -this.element.rotate), n
    }, doDraw: function (t, i) {
      if (this._df) {
        if (t.save(), t[Eo](this[Wj].x, this.element.y), this.element[Vo] && t[Vo](this[Wj][Vo]), this[EB]) {
          this._5o(t, 0, 0, i, 3, mB);
          var n = this[EB].x, e = this._rotatePoint.y - this[Vd] / i;
          t[ff](), t[bf](n, this[EB].y), t[vf](n, e), t[hf] = 1 / i, t.strokeStyle = Sq, t.stroke(), this._5o(t, n, e, i)
        }
        if (this._ke) {
          var s = this._df.x, r = this._df.y, h = this._df[da], a = this._df[no];
          t[ff](), t[uf](s, r, h, a), t[hf] = 1 / i, t[ku] = [2 / i, 3 / i], t[yf] = Sq, t[zo](), l(this._ke, function (n) {
            this._e3(t, n.x, n.y, i)
          }, this)
        }
        t.restore()
      }
    }, _9h: function () {
      if (this[Aq]() && this[Wj]) {
        var t = this.graph.getUI(this[Wj]);
        this._n9ody = t[Ip];
        var i = Gr(this[KC], this[KC]._jk), n = Gr(this._n9ody, this[KC]._8d);
        this[bB] = new aY(i.y - n.y, i.x - n.x, n[fa] - i[fa], n[ua] - i[ua]), this._90(n)
      }
    }, _n9w: function (t, i) {
      return i[Bq](t)
    }, _n9u: function (t, i) {
      return !(t instanceof mW && t[Bk] || !i[wB](t))
    }, _d7: function (t, i) {
      return t instanceof xW && i[JN](t)
    }, onstart: function (t, i) {
      if (!i[uR]) return void (this[Wj] && this.destroy(i));
      if (!t[ON]) {
        var n = i.getUI(t), e = t[Jy]();
        if (e != this[Wj]) {
          if (this.element) {
            if (this._g2(t, i)) return void (t[ON] = !0);
            this[ug](i)
          }
          if (e && !e[mq] && this._d7(e, i)) {
            var s = this[TB](e, i, n), r = this[kB](e, i, n);
            (s || r) && (this.setCurrentElement(e, !0), this[AN](), this._e2 = s, this._dy = r, this._9h())
          }
        }
      }
    }, onrelease: function (t, i) {
      this[Wj] && (this[Tq] = !0, this.addDrawable(), i[fD](function () {
        this._9h()
      }, this))
    }, _9o: null, _g2: function (t, i) {
      var n = i[tk](t);
      n = this._ig(n.x, n.y);
      var e = i[mo], s = this[Xd] / e;
      if (this[EB]) {
        var r = this[EB].x, h = this[EB].y - this[Vd] / e;
        if (eY(n.x, n.y, r, h) < s) return this[EB]
      }
      if (this._ke && this._ke[rh]) {
        var a;
        return l(this._ke, function (t) {
          return eY(n.x, n.y, t.x, t.y) < s ? (a = t, !1) : void 0
        }, this), a
      }
    }, onmousemove: function (t, i) {
      if (this[Wj]) {
        var n = this._g2(t, i);
        if (!n) return void (i[$D] = null);
        if (n != this[EB] && this[Wj].rotate) {
          var e = n[Vo] + this[Wj][Vo];
          return void (i[$D] = zr(e))
        }
        i[$D] = n[$D]
      }
    }, startdrag: function (t, i) {
      if (this[Wj] && (this[Zj](), this._n8anEdit && (this._9o = this._g2(t, i), this._9o))) {
        if (t.responded = !0, this._9o == this[EB]) {
          this._9o.start = i[tk](t), this._9o[Vo] = this.element[Vo] || 0;
          var n = new Wr(i, Wr[OB], t, this[Wj]);
          return n[Ih] = this[Wj].rotate, void i[kD](n)
        }
        var n = new Wr(i, Wr[MB], t, this[Wj]);
        n[jq] = this._9o, i[kD](n)
      }
    }, _73: function (t, i, n, e, s, r) {
      var h = this._df, a = h.x, o = h.y, f = h.width, u = h.height;
      if (r) {
        var c = e != f;
        c ? s = e * u / f : e = s * f / u
      }
      var _ = t.path[RO], d = e / f, l = s / u, v = -a * d + i, b = -o * l + n;
      _.forEach(function (t) {
        if (t.type != dH[sE]) {
          var e = t[qo];
          if (e && e.length) for (var s = 0, r = e.length; r > s; s += 2) {
            var h = e[s], f = e[s + 1];
            e[s] = (h - a) * d + i - v, e[s + 1] = (f - o) * l + n - b
          }
        }
      }), this._df.set(i - v, n - b, e, s), t[IB](t.x + v, t.y + b), t[lO]()
    }, _9r: function (t, i, n, e, s) {
      this._df.set(i, n, e, s), t.minSize = {x: i, y: n, width: e, height: s}
    }, _4s: function (t, i, n, e, s) {
      if (this[Wj] instanceof mW && this[Wj][Bk]) return this._9r(this[Wj], t, i, n, e, s);
      if (this[Wj] instanceof pW) return this._73(this[Wj], t, i, n, e, s);
      var r = this[KC] instanceof qW;
      if (!r && s) {
        var h = this._df, a = this[KC][SB], o = n != h[da];
        o ? e = n * a.height / a[da] : n = e * a[da] / a[no]
      }
      var f = this[Wj][AO], u = new rY(n - this._insets[Mf] - this[bB].right, e - this[bB].top - this[bB].bottom);
      if (u[da] < 1 && (n = this[bB][Mf] + this[bB][ua] + 1, u.width = 1), u.height < 1 && (e = this[bB].top + this._insets[fa] + 1, u.height = 1), r ? this[Wj][Zc](kW.LABEL_SIZE, u) : this[Wj][kT] = u, f) {
        var c = ci(f, n, e), _ = c.x + t - (this[KC][hM] || 0), d = c.y + i - (this[KC].offsetY || 0);
        if (this._df.set(t - _, i - d, n, e), this.element[Vo]) {
          var c = Zs({x: _, y: d}, this[Wj][Vo]);
          _ = c.x, d = c.y
        }
        this[Wj].x += _, this[Wj].y += d
      } else {
        var _ = this._df.x * n / this._df.width - t, d = this._df.y * e / this._df[no] - i;
        if (this._df.set(t + _, i + d, n, e), this.element.rotate) {
          var c = Zs({x: _, y: d}, this[Wj][Vo]);
          _ = c.x, d = c.y
        }
        this[Wj].x -= _, this[Wj].y -= d
      }
    }, ondrag: function (t, i) {
      if (this[Wj] && this._9o) {
        if (this._9o == this[EB]) {
          var n = i[tk](t), e = yn(n.x, n.y, this[Wj].x, this[Wj].y, this._9o[_N].x, this._9o[_N].y, !0);
          e += this._9o[Vo] || 0, t[bw] && (e = Math[$o](e / Math.PI * 4) * Math.PI / 4);
          var s = this.element.rotate;
          this[Wj][Vo] = e % (2 * Math.PI);
          var r = new Wr(i, Wr.ROTATING, t, this[Wj]);
          return r[xv] = s, r[Ih] = this[Wj][Vo], void i.onInteractionEvent(r)
        }
        var h = t.dx, a = t.dy, o = i[mo];
        if (h /= o, a /= o, this.element[Vo]) {
          var n = {x: h, y: a};
          Zs(n, -this.element[Vo]), h = n.x, a = n.y
        }
        var f = this._9o.p, u = this._df, c = u.x, _ = u.y, d = u[da], l = u[no];
        f.horizontalPosition == fY ? h >= d ? (c += d, d = h - d || 1) : (c += h, d -= h) : f[Jl] == cY && (-h >= d ? (d = -h - d || 1, c -= d) : d += h), f.verticalPosition == _Y ? a >= l ? (_ += l, l = a - l || 1) : (_ += a, l -= a) : f[va] == lY && (-a >= l ? (l = -a - l || 1, _ -= l) : l += a), this._4s(c, _, d, l, t[bw]);
        var r = new Wr(i, Wr.RESIZING, t, this.element);
        r.point = this._9o, i[kD](r)
      }
    }, enddrag: function (t, i) {
      if (this[Wj] && this._9o) {
        if (this._9o == this._rotatePoint) {
          var n = new Wr(i, Wr.ROTATE_END, t, this.element);
          return n[Ih] = this[Wj].rotate, void i[kD](n)
        }
        var n = new Wr(i, Wr[PB], t, this[Wj]);
        n[jq] = this._9o, i[kD](n)
      }
    }
  }, m(Fr, wr), _H[AB] = Fr;
  var nX = function (t) {
    this[O_] = t
  };
  nX[bh] = {
    onstart2: function (t, i) {
      this[$y](t, i)
    }, onstart: function (t, i) {
      if (!t[ON]) {
        var n = t.getData();
        if (n && !i[Od](n) && (n = null), n && Ti(t)) {
          i.reverseSelect(n);
          var e = new Wr(i, Wr[CB], t, i.selectionModel);
          return void i[kD](e)
        }
        if (!n || !i[Td][fq](n)) {
          n ? (i[LB](n), i[RB](n)) : i.setSelection(null);
          var e = new Wr(i, Wr[CB], t, i[Td]);
          i.onInteractionEvent(e)
        }
      }
    }, onkeydown: function (t, i) {
      return 27 == t[gw] ? void i[yD]() : void (Ti(t) && 65 == t.keyCode && (i[DB](), $(t)))
    }
  }, Jz.TOOLTIP_DURATION = 3e3, Jz.TOOLTIP_DELAY = 1e3, Yr.CLASS_NAME = jB, Yr[NB] = 0, Yr[qB] = 15, xi(ea + Yr[BB], {
    "user-select": sd,
    "background-color": $B,
    overflow: ed,
    "box-shadow": "0 5px 10px rgba(136, 136, 136, 0.5)",
    color: rL,
    "pointer-events": sd,
    border: FB,
    padding: GB,
    display: nj,
    position: _T
  }), Yr[zB] = function () {
    var t = Yr[YB];
    return t || (t = Yr[YB] = new Yr), t
  }, Yr.show = function (t, i, n) {
    Yr[zB]()[HB](t, i, n)
  }, Yr[vB] = function () {
    Yr[zB]()[vB]()
  }, Yr[bh] = {
    getTooltipElement: function () {
      var t = this._md;
      return t || (t = i[fo](H_), t[ec] = Yr[BB], this._md = t, i[Ip][Q_](t)), t
    }, update: function (t, i) {
      if (this.isShowing()) {
        var n = NR == i;
        t && !n && (t = t[ga](/\n/g, UB));
        var e = this[WB]();
        n ? e.textContent = t || "" : e[mD] = t || "", Hr(e, this[XB].x + Yr[NB], this._info.y + Yr.CURSOR_OFFSET_Y)
      }
    }, setTooltip: function (t, i) {
      if (!t || !t.content) return this[XB] = null, this._md && (this._md[Ea][Qw] = sd), void (this._9w = Date.now());
      this._9w = null, this[XB] = t;
      var n = this.getTooltipElement();
      n[Ea].display = "", this.update(this._info[VB], this[XB].type), isNaN(i) && (i = Jz[ZB]), i && this[KB](this[JB].bind(this, !1), i)
    }, _9w: null, _kk: null, stopTimer: function () {
      this._kk && (clearTimeout(this._kk), this._kk = null)
    }, startTimer: function (t, i) {
      this.stopTimer(), this._kk = setTimeout(function (t) {
        this._kk = null, t()
      }[Ah](this, t), i)
    }, show: function (t, i, n) {
      return this[Aq]() || this._9w && Date.now() - this._9w < 1e3 ? void this[JB](t, n) : (isNaN(i) && (i = Jz[QB]), void (i ? this[KB](this.setTooltip.bind(this, t, n), i) : this[JB](t, n)))
    }, isShowing: function () {
      return this._md && sd !== this._md[Ea][Qw]
    }, hide: function () {
      this[t$](), this.isShowing() && this[JB](!1)
    }
  };
  var eX = function (t) {
    this[O_] = t
  };
  eX.prototype = {
    onstart: function (t, i) {
      this[ug](i)
    }, _it: null, onmousemove: function (t, i) {
      if (i.enableTooltip) {
        var n = t[Jy](), e = n ? i[i$](n, t) : null;
        return e ? void Yr[HB]({
          target: n,
          content: e,
          type: n.tooltipType,
          x: t[n$],
          y: t.pageY
        }, i[e$], i.tooltipDuration) : void Yr[vB]()
      }
    }, destroy: function () {
      Yr.hide()
    }
  };
  var sX = function (t) {
    this[O_] = t
  };
  sX[bh] = {
    destroy: function () {
      this[s$] && (this[s$] = null)
    }, onmousewheel: function (t, i) {
      if (i[r$] !== !1 && t.delta) {
        if (_H[DR](t), i[gq](), i[BD]) {
          var n = this.delayAction;
          n || (n = this[s$] = new Ur(function () {
            i[Eq](!1)
          })), i[Eq](!0), n[tl](100)
        }
        i[h$](t, t[Yq], !1)
      }
    }
  };
  var rX = function (t) {
    this[O_] = t
  };
  rX[bh] = {
    onclick: function (t, i) {
      i[h$](t, !Ti(t))
    }
  };
  var hX = function (t) {
    this.graph = t
  };
  hX[bh] = {
    onclick: function (t, i) {
      i[h$](t, Ti(t))
    }
  }, m(Wr, yY), Wr[cq] = a$, Wr[_q] = o$, Wr.ELEMENT_MOVE_END = f$, Wr[MD] = u$, Wr.ELEMENT_REMOVED = c$, Wr.POINT_MOVE_START = _$, Wr[Uq] = d$, Wr[Vq] = l$, Wr[qq] = v$, Wr[b$] = y$, Wr[MB] = g$, Wr.RESIZING = x$, Wr[PB] = p$, Wr.ROTATE_START = E$, Wr.ROTATING = m$, Wr[w$] = T$, Wr.PAN_START = k$, Wr.PAN_END = O$, Wr.GROUP_EXPANDED = M$, Wr[tq] = I$, Wr[CB] = Hd, Wr[rB] = S$, Wr[_B] = P$, Wr[aB] = A$, Wr.LONG_CLICK = C$, Xr[bh] = {
    _9y: function (t) {
      if (this[L$]) switch (t[el]) {
        case MY.KIND_REMOVE:
          this[L$]._onElementRemoved(t[Yo]);
          break;
        case MY[yb]:
          this[L$][R$](t[Yo])
      }
    }, destroy: function () {
      delete this._kp, delete this._4k, this[L$] && (this._interactionSupport._in(), delete this[L$])
    }, _kp: null, _4k: null, defaultMode: null, _ha: function (t, i, n) {
      this._4k[t] = new Tr(i, n), t == this[rl] && this._interactionSupport[D$](i)
    }, addCustomInteraction: function (t) {
      this._interactionSupport[j$](t)
    }, removeCustomInteraction: function (t) {
      this[L$][N$](t)
    }, _mz: function (t) {
      var i = this._4k[t];
      return i ? i : aX[t]
    }
  }, K(Xr[bh], {
    defaultCursor: {
      get: function () {
        return this.currentInteractionMode ? this[q$].defaultCursor : void 0
      }
    }, currentMode: {
      get: function () {
        return this._n8urrentMode
      }, set: function (t) {
        this[B$] != t && (this[B$], this[L$] || (this._interactionSupport = new JY(this._kp)), this[B$] = t, this[q$] = this._mz(this[B$]), this._kp[$D] = this[Sd], this[L$]._mwInteraction(this.currentInteractionMode ? this[q$].getInteractionInstances(this._kp) : []))
      }
    }
  });
  var aX = {};
  Jz.registerInteractions = function (t, i, n) {
    var e = new Tr(i, n);
    aX[t] = e
  }, dH[$$] = F$, dH[hl] = Pd, dH[G$] = Gd, dH[z$] = Y$, dH.INTERACTION_MODE_ZOOMOUT = H$, dH.INTERACTION_MODE_CREATE_SIMPLE_EDGE = U$, dH[W$] = X$, dH[V$] = Z$, dH[K$] = J$, Jz[Q$](dH[$$], [nX, QW, sX, KW, VW, eX, iX]), Jz[Q$](dH[tF], [ZW, Cr, nX, QW, sX, KW, eX]), Jz.registerInteractions(dH.INTERACTION_MODE_CREATE_EDGE, [ZW, Br, nX, Mr, QW, sX, KW, eX]), Jz[Q$](dH[V$], [ZW, Pr, nX, QW, sX, KW, eX]), Jz[Q$](dH[K$], [Ar, nX, QW, sX, KW, eX]), Jz[Q$](dH[hl], [ZW, Br, Fr, nX, JW, QW, sX, KW, VW, eX, iX]), Jz.registerInteractions(dH.INTERACTION_MODE_SELECTION, [ZW, Br, Fr, nX, JW, tX, QW, sX, KW, VW, eX]), Jz.registerInteractions(dH[z$], [sX, KW, rX], QY), Jz.registerInteractions(dH[iF], [sX, KW, hX], tH), _H[nF] = QW, _H.SelectionInteraction = nX, _H[eF] = JW, _H[sF] = sX, _H.DoubleClickInteraction = VW, _H.ExportInteraction = KW, _H[rF] = eX, _H[hF] = tX, _H.RectangleSelectionInteractionByRightButton = iX, _H.PointsInteraction = Br;
  var oX = function (t) {
    this[O_] = t
  };
  _H.Layouter = oX, oX.prototype = {
    getNodeBounds: function (t) {
      return this.graph[aF](t)
    }, isLayoutable: function (t) {
      return this.graph[JD](t) && t[oF] !== !1
    }, getLayoutResult: function () {
    }, updateLocations: function (t, i, n, e, s) {
      if (i === !0) {
        if (this[fF] || (this[fF] = new GX), n && (this.animate[Bj] = n), e && (this[fF][$j] = e), this[fF][uF] = t, s) {
          var r = s, h = this;
          s = function () {
            r[hh](h, t)
          }
        }
        return void this[fF].start(s)
      }
      for (var a in t) {
        var o = t[a], f = o[cF];
        f[IB](o.x, o.y)
      }
      s && s[hh](this, t)
    }, _fu: function (t) {
      var i, n, e, s = null;
      t && (i = t.byAnimate, s = t.callback, n = t[Bj], e = t[$j]);
      var r = this[_F](t);
      return r ? (this[dF](r, i, n, e, s), r) : !1
    }, doLayout: function (t, i) {
      return this.graph && i !== !0 ? void this[O_][fD](function () {
        this._fu(t)
      }, this) : this._fu(t)
    }
  };
  var fX = 110, uX = 120, cX = 130, _X = 210, dX = 220, lX = 230, vX = 111, bX = 112, yX = 121, gX = 122, xX = 211,
    pX = 212, EX = 221, mX = 222;
  dH[lF] = fX, dH.DIRECTION_LEFT = uX, dH[vF] = cX, dH[bF] = _X, dH.DIRECTION_TOP = dX, dH[yF] = lX, dH[gF] = vX, dH[xF] = bX, dH[pF] = yX, dH[EF] = gX, dH.DIRECTION_BOTTOM_LEFT = xX, dH[mF] = pX, dH[wF] = EX, dH[TF] = mX;
  var wX = kF, TX = OF, kX = MF, OX = IF;
  dH[SF] = wX, dH[PF] = kX, dH[AF] = OX, dH[CF] = TX, _H[LF] = Vr;
  var MX = function (t) {
    this[O_] = t
  };
  MX[bh] = {
    hGap: 50,
    vGap: 50,
    parentChildrenDirection: _X,
    layoutType: wX,
    defaultSize: {width: 50, height: 60},
    getNodeSize: function (t) {
      if (this[O_]._8y[zb]) {
        var i = this[O_].getUI(t);
        if (i) return i._fp
      }
      return t.image && t.image.bounds ? {width: t.image.bounds[da], height: t[Bp].bounds[no]} : this.defaultSize
    },
    _n83: function (t, i) {
      var n = t.id;
      if (!(n in this._9d) && this.isLayoutable(t)) {
        var e, s = this[RF](t);
        e = s instanceof hY ? [-s.x, -s.y] : [s.width / 2, s[no] / 2];
        var r = (t[DF], i ? this._9d[i.id] : this[jF]);
        this._9d[n] = new IX(this[NF](t), this[qF](t), this[BF](t), t.parentChildrenDirection, r, t, s[da], s[no], e)
      }
    },
    getHGap: function (t) {
      return t && j(t.hGap) ? t[$F] : this[$F]
    },
    getVGap: function (t) {
      return t && j(t[FF]) ? t[FF] : this[FF]
    },
    getLayoutType: function (t) {
      return t && t[GF] ? t[GF] : this[GF]
    },
    _9d: null,
    _n9a: null,
    _l5: function () {
      this._9d = null, this[jF] = null
    },
    getLayoutResult: function (t) {
      var i, n, e, s, r = this.graph;
      t instanceof Object && (i = t.x, n = t.y, r = t.root || this[O_], e = t.bounds, s = t.undirected), this._9d = {}, this[jF] = new IX, this[jF]._mw(this.hGap, this.vGap, this.parentChildrenDirection, this[GF]);
      var h = {}, a = HX(r, this._n83, this, !1, s);
      return a && (this[jF]._fu(i || 0, n || 0, h), e && e.set(this[jF].x, this[jF].y, this[jF][da], this[jF].height)), this._l5(), h
    },
    doLayout: function (t, i) {
      if (j(t)) {
        var n = t, e = 0;
        j(i) && (e = i), t = {x: n, y: e}, i = !0
      }
      return T(this, MX, zF, [t, i])
    }
  }, m(MX, oX);
  var IX = function (t, i, n, e, s, r, h, a, o) {
    this._m8 = t || 0, this._m9 = i || 0, this[GF] = n, this.parentChildrenDirection = e, this[YF] = s, s && s._fj(this), this.node = r, this._el = h, this._d5 = a, this[HF] = o
  };
  IX.prototype = {
    _mw: function (t, i, n, e) {
      this._m8 = t, this._m9 = i, this[DF] = n, this[GF] = e
    }, _8k: function () {
      this._fs = []
    }, _m8: 0, _m9: 0, _fs: null, _el: 0, _d5: 0, layoutType: null, parentChildrenDirection: null, _fj: function (t) {
      this._fs || (this._fs = []), this._fs.push(t)
    }, _n8y: function (t, i, n, e) {
      var s = new hY;
      return n(this._fs, function (n) {
        n._3t(t, i), s.add(n), e ? t += n[da] + this._m8 : i += n[no] + this._m9
      }, this), s
    }, _8g: function (t, i, n, e, s) {
      var r, h = e ? this._m8 : this._m9, a = e ? this._m9 : this._m8, o = e ? "width" : no, f = e ? "height" : da,
        u = e ? "_el" : UF, c = e ? "_d5" : WF, _ = e ? "hostDX" : XF, d = e ? "hostDY" : VF, v = new hY, b = 0, y = 0,
        g = [], x = 0, p = 0;
      n(this._fs, function (n) {
        var s = p >= y;
        n[ZF] = s ? e ? uX : dX : e ? fX : _X, n._3t(t, i), s ? (g[dh](n), b = Math.max(b, n[o]), y += n[f] + a) : (r || (r = []), r[dh](n), x = Math.max(x, n[o]), p += n[f] + a)
      }, this), y -= a, p -= a;
      var E = Math.max(y, p), m = h, w = 0;
      this[cF] && (s && (m += this[u] + h, E > this[c] ? this[d] = (E - this[c]) / 2 : w = (this[c] - E) / 2), this[_] = b + m / 2 - this[u] / 2);
      var T = 0, k = w;
      return l(g, function (t) {
        e ? t[cp](b - t[o], k) : t[cp](k, b - t[o]), k += a + t[f], v.add(t)
      }, this), r ? (k = w, T = b + m, l(r, function (t) {
        e ? t.offset(T, k) : t.offset(k, T), k += a + t[f], v.add(t)
      }, this), v) : v
    }, offset: function (t, i) {
      this.x += t, this.y += i, this[KF] += t, this[JF] += i, this._7k(t, i)
    }, _n9g: function (t, i) {
      return 2 * this.cx - t - i - t
    }, _n9f: function (t, i) {
      return 2 * this.cy - t - i - t
    }, _mh: function (t) {
      if (this._fs && 0 != this._fs[rh]) {
        if (t) return this[cF] && (this[KF] += this[QF](this.nodeX, this._el)), void l(this._fs, function (t) {
          t.offset(this[QF](t.x, t[da]), 0)
        }, this);
        this[cF] && (this[JF] += this[tG](this[JF], this._d5)), l(this._fs, function (t) {
          t[cp](0, this._n9f(t.y, t[no]))
        }, this)
      }
    }, _7k: function (t, i) {
      this._fs && l(this._fs, function (n) {
        n[cp](t, i)
      }, this)
    }, _3t: function (t, i) {
      return this.x = t || 0, this.y = i || 0, this._fs && 0 != this._fs[rh] ? void this._1u(this.x, this.y, this[GF]) : void (this[cF] && (this.width = this._el, this[no] = this._d5, this.nodeX = this.x, this[JF] = this.y))
    }, _7m: function (t) {
      if (this[cF]) {
        var i = this._n7nchorLocation, n = i[0], e = i[1];
        t[this.node.id] = {
          node: this[cF],
          x: this.nodeX + n,
          y: this[JF] + e,
          left: this[KF],
          top: this[JF],
          width: this._el,
          height: this._d5
        }
      }
      this._fs && l(this._fs, function (i) {
        i._7m(t)
      }, this)
    }, _fu: function (t, i, n) {
      this._3t(t, i), this._7m(n)
    }, _1u: function (t, i, e) {
      var s, r = t, h = i;
      !this[DF] && this[YF] && (this.parentChildrenDirection = this[ZF] || this[YF][DF]);
      var a = this[DF], o = Vr(a);
      if (this[cF]) {
        s = a == cX || a == lX;
        var f = Zr(a);
        s || (o ? t += this._el + this._m8 : i += this._d5 + this._m9)
      }
      var u, c = this.node && this[cF].layoutReverse ? b : l;
      if (e == TX) u = this._8g(t, i, c, !o, s); else {
        var _;
        _ = e == wX ? !o : e == kX, u = this[iG](t, i, c, _, s)
      }
      var d = 0, v = 0;
      if (u && !u[Dl]() && (d = u[da], v = u.height, this.add(u)), this[cF]) {
        if (this.nodeX = r, this[JF] = h, this[VF] !== n || this.hostDY !== n) this[KF] += this.hostDX || 0, this.nodeY += this.hostDY || 0; else {
          var y;
          y = a == _X || a == dX || a == uX || a == fX ? 1 : a == pX || a == mX || a == gX || a == bX ? 0 : 2, o ? (1 == y ? this.nodeY += v / 2 - this._d5 / 2 : 2 == y && (this[JF] += v - this._d5), h > this[JF] && this.offset(0, h - this[JF])) : (1 == y ? this[KF] += d / 2 - this._el / 2 : 2 == y && (this[KF] += d - this._el), r > this[KF] && this[cp](r - this[KF], 0))
        }
        this[Vl](this[KF], this.nodeY, this._el, this._d5), f && this._mh(o)
      }
    }, node: null, uiBounds: null
  }, m(IX, hY), Jr[bh] = {
    layoutDatas: null, isMovable: function (t) {
      return !this[nG][t.id]
    }, _78: !1, _3e: function () {
      this._78 = !0, this[O_]._1p[sl](this[eG], this), this[O_]._1a[sl](this._2i, this)
    }, _1k: function () {
      this._78 = !1, this[O_]._1p[jv](this[eG], this), this.graph._1a[jv](this._2i, this)
    }, invalidateFlag: !0, invalidateLayoutDatas: function () {
      this[GO] = !0
    }, resetLayoutDatas: function () {
      return this[GO] = !1, this[sG] = Kr.call(this)
    }, _2i: function (t) {
      Wr[cq] == t[el] ? (this[nG] = {}, t[bb].forEach(function (t) {
        this.currentMovingNodes[t.id] = t
      }, this)) : Wr[bq] == t[el] && (this.currentMovingNodes = {})
    }, _n78: function () {
      this[rG]()
    }, isRunning: function () {
      return this[hG] && this.timer._eh()
    }, getLayoutResult: function () {
      this.stop(), this[aG]();
      for (var t = this[oG](this[sG].nodeCount || 0, this[sG].edgeCount || 0), i = 0; t > i && this[yq](!1) !== !1; i++) ;
      var n = this[sG].nodes;
      return this[fG](), n
    }, _lv: function () {
      return !1
    }, step: function (t) {
      if (t === !1) return this._lv(this[uG]);
      (this[GO] || !this[sG]) && this[aG]();
      var i = this._lv(t), n = this[sG].nodes;
      for (var e in n) {
        var s = n[e], r = s.node;
        this[gD](r) ? r.setLocation(s.x, s.y) : (s.x = r.x, s.y = r.y, s.vx = 0, s.vy = 0)
      }
      return i
    }, onstop: function () {
      delete this.layoutDatas
    }, start: function (t) {
      if (this[cG]()) return !1;
      this._78 || this._3e(), this._kar || (this._kar = function (t) {
        return this.step(t)
      }.bind(this)), this[rG](), this[hG] = new fH(this[_G]);
      var i = this;
      return this[hG]._ku(function () {
        i[fG](), t && t()
      }), !0
    }, stop: function () {
      this[hG] && (this[hG]._ls(), this[fG]())
    }, getMaxIterations: function (t) {
      return Math.min(1e3, 3 * t + 10)
    }, minEnergyFunction: function (t, i) {
      return 10 + Math.pow(t + i, 1.4)
    }, resetGraph: function () {
      this._78 || this._3e(), this[aG]()
    }, destroy: function () {
      this.stop(), this._1k()
    }
  }, m(Jr, oX);
  var SX = function (t, i, n, e) {
    this[O_] = t, j(i) && (this[lv] = i), j(n) && (this.gap = n), j(e) && (this.startAngle = e)
  };
  _H[dG] = SX;
  var PX = lG, AX = vG, CX = bG, LX = yG;
  dH.ANGLE_SPACING_PROPORTIONAL = PX, dH[gG] = AX, dH.RADIUS_MODE_UNIFORM = CX, dH[xG] = LX, SX.prototype = {
    angleSpacing: PX,
    radiusMode: LX,
    gap: 4,
    radius: 50,
    startAngle: 0,
    _9d: null,
    _n9a: null,
    _l5: function () {
      this._9d = null, this._n9a = null
    },
    getLayoutResult: function (t) {
      var i, n = 0, e = 0, s = this[O_];
      t instanceof Object && (n = t.cx || 0, e = t.cy || 0, s = t[pG] || this[O_], i = t[No]), this._9d = {}, this[jF] = new jX(this);
      var r = {}, h = UX(s, this[EG], this);
      return h && (this[jF]._fs && 1 == this._n9a._fs[rh] && (this[jF] = this[jF]._fs[0]), this[jF]._f1(!0), this[jF]._5g(n, e, this.startAngle, r, i)), this._l5(), r
    },
    _n83: function (t, i) {
      if (this.isLayoutable(t)) {
        var n = i ? this._9d[i.id] : this._n9a;
        this._9d[t.id] = new jX(this, t, n)
      }
    },
    defaultSize: 40,
    getRadius: function () {
      return this.radius
    },
    getNodeSize: function (t) {
      if (this.graph._8y[zb]) {
        var i = this.graph.getUI(t);
        if (i) return (i._fp.width + i._fp[no]) / 2
      }
      return this[mG]
    },
    getGap: function () {
      return this.gap
    },
    _3b: function (t, i, n) {
      return this[RF](t, i, n) + this[wG](t, i, n)
    }
  };
  var RX = function (t) {
    var i, n = this._fs[rh], e = 0, s = 0;
    if (l(this._fs, function (t) {
      var n = t._f1();
      1 > n && (n = 1), s += n, n > e && (e = n, i = t)
    }, this), n > 1) {
      var r = 0, h = {}, a = s / n / 3;
      s = 0, l(this._fs, function (t) {
        var i = t._mm;
        a > i && (i = a), h[t.id] = i, s += i
      }, this);
      var o = cW / s;
      l(this._fs, function (i, n) {
        var e = h[i.id], s = e * o;
        0 === n && (r = t ? -s / 2 : -s), i._ll = r + s / 2, i._lj = s, r += s
      }, this)
    }
    return [e, i._lj]
  }, DX = function (t) {
    var i = this._8h, n = 2 * Math.PI / i, e = 0, s = t ? 0 : i > 1 ? -n / 2 : 0;
    return l(this._fs, function (t) {
      t._ll = s % cW, s += n, t._lj = n;
      var i = t._f1();
      i > e && (e = i)
    }, this), [e, n]
  }, jX = function (t, i, n) {
    this[TG] = t, i && (this._mo = i, this.id = i.id), n && (n._fj(this), n._ml = !1, this._lm = n._lm + 1)
  }, cW = 2 * Math.PI;
  jX.prototype = {
    _lj: 0, _ll: 0, _je: 0, _ew: 0, _d0: 0, _lm: 0, _ml: !0, _mm: 0, _ge: 0, _fs: null, _mo: null, _fj: function (t) {
      this._fs || (this._fs = []), this._fs[dh](t), t[sc] = this
    }, _hl: function (t) {
      if (this._ll = (this._ll + t) % cW, this._fs) {
        var i = this._fs[rh];
        if (1 == i) return void this._fs[0]._hl(this._ll);
        t = this._ll + Math.PI, l(this._fs, function (i) {
          i._hl(t)
        }, this)
      }
    }, _8h: 0, _7a: function (t) {
      return this._mo && (this._ge = this.layouter._3b(this._mo, this._lm, this._ml) / 2), this._fs ? (this._ge, this._8h = this._fs.length, this._8h <= 2 || this[TG][kG] == AX ? DX.call(this, t) : RX[hh](this, t)) : null
    }, _f1: function (t) {
      var i = this._7a(t);
      if (!i) return this._mm = this._ge;
      var n = i[0], e = i[1], s = this[TG][OG](this._mo, this._lm);
      if (s < this._ge && (s = this._ge), this._ew = s, this._ge + n > s && (s = this._ge + n), n && this._8h > 1 && e < Math.PI) {
        var r = n / Math.sin(e / 2);
        r > s && (s = r)
      }
      return this._je = s, this._mm = s + n, this._mo && this._fs && this.layouter[MG] == LX && l(this._fs, function (t) {
        var i = t._mm;
        1 == t._8h && (i /= 2);
        var n = this._ge + i, e = t._lj;
        if (e && e < Math.PI) {
          var s = Math.sin(e / 2), r = i / s;
          r > i && (i = r)
        }
        n > i && (i = n), t._d0 = i
      }, this), (!this._mo || t) && this._hl(0), this._mm
    }, _5g: function (t, i, n, e, s) {
      if (this._mo && (e[this._mo.id] = {
        x: t,
        y: i,
        node: this._mo
      }, s && s[Vl](t - this._ge / 2, i - this._ge / 2, this._ge, this._ge)), this._fs) {
        if (!this._mo && 1 == this._fs[rh]) return void this._fs[0]._5g(t, i, n, e, s);
        n = n || 0;
        var r = this._je, h = this._ew;
        l(this._fs, function (a) {
          var o = r;
          a._d0 && (o = Math.max(h, a._d0));
          var f = a._ll + n, u = t + o * Math.cos(f), c = i + o * Math.sin(f);
          a._5g(u, c, n, e, s)
        }, this)
      }
    }
  }, m(SX, oX);
  var NX = function () {
    w(this, NX, arguments)
  };
  m(NX, Qr);
  var qX = function (t, i) {
    this[IG] = t, this.node2 = i, t == i ? (this[xc] = !0, this._ki = t._lb) : this._ki = new Qz, this._8m = [], this._fx = Jz[SG]
  };
  Jz.EDGE_BUNDLE_EXPANDED = !0, qX[bh] = {
    node1: null,
    node2: null,
    _ki: null,
    _fx: Jz.EDGE_BUNDLE_EXPANDED,
    _8m: null,
    _h6: null,
    agentEdge: null,
    _n90: function (t, i, n) {
      this._ki[Nu](function (e) {
        return n && e[pc] != n && e[oc] != n ? void 0 : t[hh](i, e)
      })
    },
    _5i: 0,
    _5k: 0,
    _hy: function (t, i) {
      return this._ki.add(t) === !1 ? !1 : (i == this.node1 ? this._5i++ : this._5k++, this._n7p ? void this._15(t) : void (this[zb] = !0))
    },
    _dc: function (t, i) {
      return this._ki[jh](t) === !1 ? !1 : (i == this[IG] ? this._5i-- : this._5k--, this._15(t), void this._ki[Nu](function (t) {
        t._edgeBundleInvalidateFlag = !0, t[Lk] = !0
      }, this))
    },
    _15: function (t) {
      this[PG] = !0, this._6h = !0, t._edgeBundleInvalidateFlag = !0, t.__54 = !0
    },
    invalidate: function () {
      this._n86()
    },
    _n86: function () {
      this._6h || (this._6h = !0, this._ki[Nu](function (t) {
        t._edgeBundleInvalidateFlag = !0
      }))
    },
    isEmpty: function () {
      return this._ki.isEmpty()
    },
    isPositiveOrder: function (t) {
      return this.node1 == t[pc] || this.node1 == t[oc]
    },
    canBind: function (t) {
      return t && this._6h && this[Do](t), this._ki[rh] > 1 && this._8m[rh] > 1
    },
    _hs: function (t) {
      return this._8m[lh](t)
    },
    getYOffset: function (t) {
      return this._h6[t.id]
    },
    _52: function (t) {
      if (!this[hR]()) return void (this._h6 = {});
      var i = {}, n = this._8m[rh];
      if (!(2 > n)) {
        var e = 0, s = this._8m[0];
        i[s.id] = 0;
        for (var r = 1; n > r; r++) {
          s = this._8m[r];
          var h = t.getStyle(s, kW[bP]) || $W[kW[bP]];
          e += h, i[s.id] = e
        }
        if (!this[xc] && e) for (var a = e / 2, r = 0; n > r; r++) s = this._8m[r], i[s.id] -= a;
        this._h6 = i
      }
    },
    _n7q: function (t) {
      return this._fx == t ? !1 : (this._fx = t, this._n86(), !0)
    },
    reverseExpanded: function () {
      return this._n7q(!this._fx)
    },
    _1c: function () {
      this._8m[rh] = 0;
      var t;
      this._ki[Nu](function (i) {
        if (i[mk]()) {
          if (!this.isPositiveOrder(i)) return t || (t = []), void t[dh](i);
          this._8m[dh](i)
        }
      }, this), t && (this._8m = t[uh](this._8m))
    },
    _es: function (t) {
      return t == this[AG] || !this[hR]() || this._fx
    },
    validate: function (t) {
      this._6h = !1, this._ki[Nu](function (t) {
        t._edgeBundleInvalidateFlag = !1
      }), this[PG] && (this._1c(), this[PG] = !1), this._8m[rh] > 1 && this[CG] instanceof Function && this[CG](this._8m);
      var i = this._fx, n = this[hR](), e = !n || i;
      return l(this._8m, function (t) {
        t._$s = !0, t[LG] = e, e && (t[Lk] = !0)
      }, this), e ? (this._96(null, t), void this._52(t)) : (this._96(this._8m[0], t), this[AG]._iaInBundle = !0, void (this[AG][Lk] = !0))
    },
    _96: function (t, i) {
      if (t != this.agentEdge) {
        var n = this[AG];
        return this.agentEdge = t, i && i._51(new gY(this, AG, t, n)), !0
      }
    }
  }, K(qX[bh], {
    bindableEdges: {
      get: function () {
        return this._8m
      }
    }, edges: {
      get: function () {
        return this._ki._jz
      }
    }, length: {
      get: function () {
        return this._ki ? this._ki[rh] : 1
      }
    }, expanded: {
      get: function () {
        return this._fx
      }, set: function (t) {
        return this._fx == t ? !1 : (this._fx = t, void this[TT]())
      }
    }
  });
  var BX = function () {
    function t(t, i) {
      this.node = t, this[Ip] = i
    }

    function i() {
      this[RG] = [], this.popIdx = 0
    }

    var n = -1e6, e = .8;
    i[bh] = {
      isEmpty: function () {
        return 0 === this[DG]
      }, push: function (i, n) {
        var e = this[RG][this[DG]];
        e ? (e.node = i, e[Ip] = n) : this[RG][this[DG]] = new t(i, n), ++this[DG]
      }, pop: function () {
        return this[DG] > 0 ? this.stack[--this[DG]] : void 0
      }, reset: function () {
        this.popIdx = 0
      }
    };
    var s = [], r = new i, h = function () {
      this[Ip] = null, this[jG] = [], this[NG] = 0, this[qG] = 0, this[BG] = 0, this.left = 0, this.top = 0, this[fa] = 0, this[ua] = 0, this.isInternal = !1
    }, a = [], o = 0, f = function () {
      var t;
      return a[o] ? (t = a[o], t[jG][0] = null, t[jG][1] = null, t[jG][2] = null, t[jG][3] = null, t.body = null, t.mass = t[qG] = t[BG] = 0, t.left = t[ua] = t.top = t[fa] = 0, t[$G] = !1) : (t = new h, a[o] = t), ++o, t
    }, u = f(), c = function (t, i) {
      var n = Math.abs(t.x - i.x), e = Math.abs(t.y - i.y);
      return 1e-8 > n && 1e-8 > e
    }, _ = function (t) {
      for (r[FG](), r[dh](u, t); !r[Dl]();) {
        var i = r.pop(), n = i[cF], e = i[Ip];
        if (n[$G]) {
          var s = e.x, h = e.y;
          n.mass = n.mass + e.mass, n.massX = n[qG] + e[NG] * s, n[BG] = n[BG] + e[NG] * h;
          var a = 0, o = n[Mf], _ = (n.right + o) / 2, d = n.top, l = (n.bottom + d) / 2;
          if (s > _) {
            a += 1;
            var v = o;
            o = _, _ += _ - v
          }
          if (h > l) {
            a += 2;
            var b = d;
            d = l, l += l - b
          }
          var y = n[jG][a];
          y || (y = f(), y[Mf] = o, y.top = d, y[ua] = _, y[fa] = l, n.quads[a] = y), r[dh](y, e)
        } else if (n[Ip]) {
          var g = n[Ip];
          if (n[Ip] = null, n[$G] = !0, c(g, e)) {
            if (n[ua] - n[Mf] < 1e-8) return;
            do {
              var x = Math[Wh](), p = (n.right - n[Mf]) * x, E = (n.bottom - n.top) * x;
              g.x = n[Mf] + p, g.y = n.top + E
            } while (c(g, e))
          }
          r[dh](n, g), r[dh](n, e)
        } else n[Ip] = e
      }
    }, d = function (t) {
      var i, r, h, a, o = s, f = 1, c = 0, _ = 1;
      for (o[0] = u; f;) {
        var d = o[c], l = d.body;
        f -= 1, c += 1, l && l !== t ? (r = l.x - t.x, h = l.y - t.y, a = Math.sqrt(r * r + h * h), 0 === a && (r = (Math[Wh]() - .5) / 50, h = (Math.random() - .5) / 50, a = Math.sqrt(r * r + h * h)), i = n * l.mass * t[NG] / (a * a), -1e3 > i && (i = -1e3), i /= a, t.fx = t.fx + i * r, t.fy = t.fy + i * h) : (d[NG] || (d[NG] = 1), r = d.massX / d[NG] - t.x, h = d.massY / d[NG] - t.y, a = Math.sqrt(r * r + h * h), 0 === a && (r = (Math[Wh]() - .5) / 50, h = (Math.random() - .5) / 50, a = Math[Ao](r * r + h * h)), (d[ua] - d.left) / a < e ? (i = n * d[NG] * t.mass / (a * a), -1e3 > i && (i = -1e3), i /= a, t.fx = t.fx + i * r, t.fy = t.fy + i * h) : (d[jG][0] && (o[_] = d[jG][0], f += 1, _ += 1), d[jG][1] && (o[_] = d[jG][1], f += 1, _ += 1), d[jG][2] && (o[_] = d[jG][2], f += 1, _ += 1), d[jG][3] && (o[_] = d[jG][3], f += 1, _ += 1)))
      }
    }, l = function (t, i) {
      n = i;
      var e, s = Number[Zl], r = Number.MAX_VALUE, h = Number[GG], a = Number[GG], c = t, d = c.length;
      for (e = d; e--;) {
        var l = c[e].x, v = c[e].y;
        s > l && (s = l), l > h && (h = l), r > v && (r = v), v > a && (a = v)
      }
      var b = h - s, y = a - r;
      for (b > y ? a = r + b : h = s + y, o = 0, u = f(), u[Mf] = s, u[ua] = h, u.top = r, u[fa] = a, e = d; e--;) _(c[e], u)
    };
    return {init: l, update: d}
  }, $X = function (t) {
    t.fx -= t.x * this.attractive, t.fy -= t.y * this[zG]
  }, FX = function (t) {
    if (0 != t.k) {
      var i = this._d6, n = t[cc], e = t.to, s = e.x - n.x, r = e.y - n.y, h = s * s + r * r, a = Math.sqrt(h) || .1,
        o = (a - i) * t.k * this.elastic;
      o /= a;
      var f = o * s, u = o * r;
      e.fx -= f, e.fy -= u, n.fx += f, n.fy += u
    }
  };
  Qr[bh] = {
    appendNodeInfo: function (t, i) {
      i[NG] = t[YG] || 1, i.fx = 0, i.fy = 0, i.vx = 0, i.vy = 0
    }, appendEdgeInfo: function (t, i) {
      i.k = t[HG] || 1
    }, setMass: function (t, i) {
      t[YG] = i, this.layoutDatas && this[sG][UG] && (t = this.layoutDatas.nodes[t.id], t && (t.mass = i))
    }, setElasticity: function (t, i) {
      t.layoutElasticity = i, this.layoutDatas && this[sG][EO] && (t = this[sG][EO][t.id], t && (t.k = i))
    }, _d6: 50, _ho: .5, timeStep: .05, repulsion: 50, attractive: .1, elastic: 3, _mi: 1e3, _kg: function (t) {
      return this._mi + .3 * (t - this._mi)
    }, _lv: function (t, i) {
      var n = (Date.now(), this[sG][UG]);
      for (var e in n) {
        var s = n[e];
        i && (s.x += Math[Wh]() - .5, s.y += Math.random() - .5), $X[hh](this, s)
      }
      var r = this[sG].groups;
      if (r) for (var e in r) {
        var h = r[e], a = h[ah], o = 0, f = 0;
        a[Nu](function (t) {
          o += t.x, f += t.y
        }), o /= a[rh], f /= a.length;
        var u = 10 * this[zG];
        a[Nu](function (t) {
          t.fx -= (t.x - o) * u, t.fy -= (t.y - f) * u
        })
      }
      var c = this[WG];
      c || (c = this[WG] = BX()), c[XG](this.layoutDatas[VG], -this.repulsion * this[ZG] * this[ZG]);
      for (var e in n) c[KG](n[e]);
      if (this[JG]) {
        var _ = this.layoutDatas[EO];
        for (var e in _) FX[hh](this, _[e])
      }
      return this._me(t)
    }, _me: function (t) {
      var i = this[sG].minEnergy, n = (this.layoutDatas[QG], this[sG][UG]), t = this[uG], e = 0, s = this._ho;
      for (var r in n) {
        var h = n[r], a = h.fx / h[NG], o = h.fy / h[NG], f = h.vx += a * t, u = h.vy += o * t;
        h.x += f * t, h.y += u * t, i > e && (e += 2 * (f * f + u * u)), h.fx = 0, h.fy = 0, h.vx *= s, h.vy *= s
      }
      return this[sG].currentEnergy = e, e >= i
    }
  }, m(Qr, Jr), _H[tz] = Qr;
  var GX = function (t) {
    this[uF] = t
  };
  GX[bh] = {
    oldLocations: null, _fb: null, duration: 700, animationType: oH[iz], _7x: function (t) {
      if (this._fb = t, this.oldLocations = {}, t) for (var i in t) {
        var n = t[i], e = n.node;
        this[nz][i] = {x: e.x, y: e.y}
      }
    }, setLocation: function (t, i, n) {
      t[IB](i, n)
    }, forEach: function (t, i) {
      for (var n in this.locations) {
        var e = this[nz][n], s = this[uF][n];
        t.call(i, e, s)
      }
    }, _k3: function (t) {
      this[Nu](function (i, n) {
        var e = n[cF], s = i.x + (n.x - i.x) * t, r = i.y + (n.y - i.y) * t;
        this[IB](e, s, r)
      }, this)
    }, stop: function () {
      this[ez] && this[ez]._ls()
    }, start: function (t) {
      this[ez] ? (this._n7nimate._ls(), this[ez]._iu = this[Bj], this[ez]._dqType = this[$j], this[ez][sz] = this._onfinish) : this._n7nimate = new uH(this._k3, this, this[Bj], this[$j]), this._n7nimate._ku(t)
    }
  }, K(GX[bh], {
    locations: {
      get: function () {
        return this._fb
      }, set: function (t) {
        this._fb != t && this._7x(t)
      }
    }
  });
  var zX = function (t) {
    function i(i) {
      var n = !1;
      return i.forEachInEdge(function (i) {
        return t.contains(i) && !i[xc]() ? (n = !0, !1) : void 0
      }), n
    }

    function n(i) {
      var n = !1;
      return i[ul](function (i) {
        return t.contains(i) && !i.isLooped() ? (n = !0, !1) : void 0
      }), n
    }

    var e, s = new Qz;
    return t[Nu](function (t) {
      t instanceof xW && (i(t) ? !e && n(t) && (e = t) : s.add(t))
    }), s.isEmpty() && e && s.add(e), s
  }, YX = function (t, i, n, e, s, r) {
    if (i instanceof IY) return t(i, n, e, s, r), i;
    if (i instanceof FW) {
      var h = new Qz;
      i[Jk][Nu](function (t) {
        return i[JD](t) ? t._ic() && t._fx && t[eh]() ? void (t[pO] && (t.$location[GO] = !1)) : void h.add(t) : void 0
      }), i = h
    } else if (Array[$h](i)) i = new Qz(i); else if (!(i instanceof Qz)) throw new Error(rz);
    return i = zX(i, e), i[Nu](function (i) {
      t(i, n, e, s, r)
    }), i
  }, HX = function (t, i, n, e, s) {
    return YX(WX, t, i, n, e, s)
  }, UX = function (t, i, n, e, s) {
    return YX(XX, t, i, n, e, s)
  };
  bs.prototype[hz] = function (t, i, n, e) {
    HX(this, t, i, n, e)
  }, bs[bh].forEachByTopoBreadthFirstSearch = function (t, i, n, e) {
    t instanceof Object && 1 == arguments[rh] && (i = t[Dv]), UX(this, t, i, n, e)
  }, _H[hz] = HX, _H[az] = UX;
  var WX = function (t, i, n, e, s) {
    function r(t, i, n, e, s, h, a, o) {
      t._marker = h, e || i.call(n, t, o, a), th(t, function (o) {
        r(o, i, n, e, s, h, a + 1, t)
      }, o, s, h, n), e && i.call(n, t, o, a)
    }

    r(t, i, n, e, s, {}, 0)
  }, XX = function (t, i, n, e, s) {
    function r(t, i, n, e, s, h, a) {
      var o, f = t[rh];
      t.forEach(function (t, r) {
        var u = t.v;
        u._marker = h, e || i[hh](n, u, t[oz], a, r, f), th(u, function (t) {
          o || (o = []), t._marker = h, o[dh]({v: t, _from: u})
        }, u, s, h, n)
      }), o && r(o, i, n, e, s, h, a + 1), e && t[Nu](function (t, e) {
        i[hh](n, t.v, t[oz], a, e, f)
      })
    }

    r([{v: t}], i, n, e, s, {}, 0)
  };
  _H[fz] = V, _H.log = ti, _H[ra] = ni, _H[uz] = ii, _H[cz] = qz, _H[_z] = Nz, _H[dz] = Fz, _H[lz] = Gz, _H.isFirefox = zz, _H.isSafari = Hz, _H[vz] = Yz, _H.isMac = Uz, _H.DefaultStyles = $W, _H[bz] = Jz, _H[SD] = kW, _H.Consts = dH, _H[yz] = QH, _H[gz] = FW, _H[xz] = wW, _H.ElementUI = jW, _H[pz] = ks, _H.EdgeUI = Ts, _H[Ez] = qW, _H.ImageUI = NW, _H[mz] = EW, _H[wz] = ZH, _H.Gradient = LH, _H[Tz] = Wr, _H[rT] = yW, _H.Node = xW, _H[AD] = gW, _H[kz] = bs, _H[Oz] = qX, _H[Mz] = MX, _H[Oh] = Iz;
  var VX = Sz;
  return _H[Pz] = Az, _H[mw] = Cz, _H[ww] = "Copyright Â© 2019 Qunee.com", _H.css = bi, _H[Lz] = GW, ti = function () {
  }, _H[Ew] = Rz, _H
}(window, document);
