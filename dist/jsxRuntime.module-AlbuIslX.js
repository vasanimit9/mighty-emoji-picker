var Uf, j, on, df, pa, dn, Qe, Ke, Ye, Je, cn, xf = {}, sn = [], W0 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, le = Array.isArray;
function ff(f, e) {
  for (var a in e)
    f[a] = e[a];
  return f;
}
function ln(f) {
  var e = f.parentNode;
  e && e.removeChild(f);
}
function l(f, e, a) {
  var n, i, t, u = {};
  for (t in e)
    t == "key" ? n = e[t] : t == "ref" ? i = e[t] : u[t] = e[t];
  if (arguments.length > 2 && (u.children = arguments.length > 3 ? Uf.call(arguments, 2) : a), typeof f == "function" && f.defaultProps != null)
    for (t in f.defaultProps)
      u[t] === void 0 && (u[t] = f.defaultProps[t]);
  return Sf(f, u, n, i, null);
}
function Sf(f, e, a, n, i) {
  var t = { type: f, props: e, key: a, ref: n, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: i ?? ++on, __i: -1, __u: 0 };
  return i == null && j.vnode != null && j.vnode(t), t;
}
function q() {
  return { current: null };
}
function B(f) {
  return f.children;
}
function V(f, e) {
  this.props = f, this.context = e;
}
function cf(f, e) {
  if (e == null)
    return f.__ ? cf(f.__, f.__i + 1) : null;
  for (var a; e < f.__k.length; e++)
    if ((a = f.__k[e]) != null && a.__e != null)
      return a.__e;
  return typeof f.type == "function" ? cf(f) : null;
}
function Mn(f) {
  var e, a;
  if ((f = f.__) != null && f.__c != null) {
    for (f.__e = f.__c.base = null, e = 0; e < f.__k.length; e++)
      if ((a = f.__k[e]) != null && a.__e != null) {
        f.__e = f.__c.base = a.__e;
        break;
      }
    return Mn(f);
  }
}
function Re(f) {
  (!f.__d && (f.__d = !0) && df.push(f) && !te.__r++ || pa !== j.debounceRendering) && ((pa = j.debounceRendering) || dn)(te);
}
function te() {
  var f, e, a, n, i, t, u, r;
  for (df.sort(Qe); f = df.shift(); )
    f.__d && (e = df.length, n = void 0, t = (i = (a = f).__v).__e, u = [], r = [], a.__P && ((n = ff({}, i)).__v = i.__v + 1, j.vnode && j.vnode(n), Xe(a.__P, n, i, a.__n, a.__P.ownerSVGElement !== void 0, 32 & i.__u ? [t] : null, u, t ?? cf(i), !!(32 & i.__u), r), n.__v = i.__v, n.__.__k[n.__i] = n, wn(u, n, r), n.__e != t && Mn(n)), df.length > e && df.sort(Qe));
  te.__r = 0;
}
function gn(f, e, a, n, i, t, u, r, d, c, s) {
  var o, M, g, L, h, m = n && n.__k || sn, w = e.length;
  for (a.__d = d, F0(a, e, m), d = a.__d, o = 0; o < w; o++)
    (g = a.__k[o]) != null && typeof g != "boolean" && typeof g != "function" && (M = g.__i === -1 ? xf : m[g.__i] || xf, g.__i = o, Xe(f, g, M, i, t, u, r, d, c, s), L = g.__e, g.ref && M.ref != g.ref && (M.ref && $e(M.ref, null, g), s.push(g.ref, g.__c || L, g)), h == null && L != null && (h = L), 65536 & g.__u || M.__k === g.__k ? (d && !d.isConnected && (d = cf(M)), d = Ln(g, d, f)) : typeof g.type == "function" && g.__d !== void 0 ? d = g.__d : L && (d = L.nextSibling), g.__d = void 0, g.__u &= -196609);
  a.__d = d, a.__e = h;
}
function F0(f, e, a) {
  var n, i, t, u, r, d = e.length, c = a.length, s = c, o = 0;
  for (f.__k = [], n = 0; n < d; n++)
    u = n + o, (i = f.__k[n] = (i = e[n]) == null || typeof i == "boolean" || typeof i == "function" ? null : typeof i == "string" || typeof i == "number" || typeof i == "bigint" || i.constructor == String ? Sf(null, i, null, null, null) : le(i) ? Sf(B, { children: i }, null, null, null) : i.constructor === void 0 && i.__b > 0 ? Sf(i.type, i.props, i.key, i.ref ? i.ref : null, i.__v) : i) != null ? (i.__ = f, i.__b = f.__b + 1, r = V0(i, a, u, s), i.__i = r, t = null, r !== -1 && (s--, (t = a[r]) && (t.__u |= 131072)), t == null || t.__v === null ? (r == -1 && o--, typeof i.type != "function" && (i.__u |= 65536)) : r !== u && (r === u + 1 ? o++ : r > u ? s > d - u ? o += r - u : o-- : r < u ? r == u - 1 && (o = r - u) : o = 0, r !== n + o && (i.__u |= 65536))) : (t = a[u]) && t.key == null && t.__e && !(131072 & t.__u) && (t.__e == f.__d && (f.__d = cf(t)), Ue(t, t, !1), a[u] = null, s--);
  if (s)
    for (n = 0; n < c; n++)
      (t = a[n]) != null && !(131072 & t.__u) && (t.__e == f.__d && (f.__d = cf(t)), Ue(t, t));
}
function Ln(f, e, a) {
  var n, i;
  if (typeof f.type == "function") {
    for (n = f.__k, i = 0; n && i < n.length; i++)
      n[i] && (n[i].__ = f, e = Ln(n[i], e, a));
    return e;
  }
  f.__e != e && (a.insertBefore(f.__e, e || null), e = f.__e);
  do
    e = e && e.nextSibling;
  while (e != null && e.nodeType === 8);
  return e;
}
function ef(f, e) {
  return e = e || [], f == null || typeof f == "boolean" || (le(f) ? f.some(function(a) {
    ef(a, e);
  }) : e.push(f)), e;
}
function V0(f, e, a, n) {
  var i = f.key, t = f.type, u = a - 1, r = a + 1, d = e[a];
  if (d === null || d && i == d.key && t === d.type && !(131072 & d.__u))
    return a;
  if (n > (d != null && !(131072 & d.__u) ? 1 : 0))
    for (; u >= 0 || r < e.length; ) {
      if (u >= 0) {
        if ((d = e[u]) && !(131072 & d.__u) && i == d.key && t === d.type)
          return u;
        u--;
      }
      if (r < e.length) {
        if ((d = e[r]) && !(131072 & d.__u) && i == d.key && t === d.type)
          return r;
        r++;
      }
    }
  return -1;
}
function ha(f, e, a) {
  e[0] === "-" ? f.setProperty(e, a ?? "") : f[e] = a == null ? "" : typeof a != "number" || W0.test(e) ? a : a + "px";
}
function Ff(f, e, a, n, i) {
  var t;
  f:
    if (e === "style")
      if (typeof a == "string")
        f.style.cssText = a;
      else {
        if (typeof n == "string" && (f.style.cssText = n = ""), n)
          for (e in n)
            a && e in a || ha(f.style, e, "");
        if (a)
          for (e in a)
            n && a[e] === n[e] || ha(f.style, e, a[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      t = e !== (e = e.replace(/(PointerCapture)$|Capture$/i, "$1")), e = e.toLowerCase() in f || e === "onFocusOut" || e === "onFocusIn" ? e.toLowerCase().slice(2) : e.slice(2), f.l || (f.l = {}), f.l[e + t] = a, a ? n ? a.u = n.u : (a.u = Ke, f.addEventListener(e, t ? Je : Ye, t)) : f.removeEventListener(e, t ? Je : Ye, t);
    else {
      if (i)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e != "width" && e != "height" && e != "href" && e != "list" && e != "form" && e != "tabIndex" && e != "download" && e != "rowSpan" && e != "colSpan" && e != "role" && e in f)
        try {
          f[e] = a ?? "";
          break f;
        } catch {
        }
      typeof a == "function" || (a == null || a === !1 && e[4] !== "-" ? f.removeAttribute(e) : f.setAttribute(e, a));
    }
}
function va(f) {
  return function(e) {
    if (this.l) {
      var a = this.l[e.type + f];
      if (e.t == null)
        e.t = Ke++;
      else if (e.t < a.u)
        return;
      return a(j.event ? j.event(e) : e);
    }
  };
}
function Xe(f, e, a, n, i, t, u, r, d, c) {
  var s, o, M, g, L, h, m, w, b, S, Y, J, U, of, Se, O = e.type;
  if (e.constructor !== void 0)
    return null;
  128 & a.__u && (d = !!(32 & a.__u), t = [r = e.__e = a.__e]), (s = j.__b) && s(e);
  f:
    if (typeof O == "function")
      try {
        if (w = e.props, b = (s = O.contextType) && n[s.__c], S = s ? b ? b.props.value : s.__ : n, a.__c ? m = (o = e.__c = a.__c).__ = o.__E : ("prototype" in O && O.prototype.render ? e.__c = o = new O(w, S) : (e.__c = o = new V(w, S), o.constructor = O, o.render = X0), b && b.sub(o), o.props = w, o.state || (o.state = {}), o.context = S, o.__n = n, M = o.__d = !0, o.__h = [], o._sb = []), o.__s == null && (o.__s = o.state), O.getDerivedStateFromProps != null && (o.__s == o.state && (o.__s = ff({}, o.__s)), ff(o.__s, O.getDerivedStateFromProps(w, o.__s))), g = o.props, L = o.state, o.__v = e, M)
          O.getDerivedStateFromProps == null && o.componentWillMount != null && o.componentWillMount(), o.componentDidMount != null && o.__h.push(o.componentDidMount);
        else {
          if (O.getDerivedStateFromProps == null && w !== g && o.componentWillReceiveProps != null && o.componentWillReceiveProps(w, S), !o.__e && (o.shouldComponentUpdate != null && o.shouldComponentUpdate(w, o.__s, S) === !1 || e.__v === a.__v)) {
            for (e.__v !== a.__v && (o.props = w, o.state = o.__s, o.__d = !1), e.__e = a.__e, e.__k = a.__k, e.__k.forEach(function(Wf) {
              Wf && (Wf.__ = e);
            }), Y = 0; Y < o._sb.length; Y++)
              o.__h.push(o._sb[Y]);
            o._sb = [], o.__h.length && u.push(o);
            break f;
          }
          o.componentWillUpdate != null && o.componentWillUpdate(w, o.__s, S), o.componentDidUpdate != null && o.__h.push(function() {
            o.componentDidUpdate(g, L, h);
          });
        }
        if (o.context = S, o.props = w, o.__P = f, o.__e = !1, J = j.__r, U = 0, "prototype" in O && O.prototype.render) {
          for (o.state = o.__s, o.__d = !1, J && J(e), s = o.render(o.props, o.state, o.context), of = 0; of < o._sb.length; of++)
            o.__h.push(o._sb[of]);
          o._sb = [];
        } else
          do
            o.__d = !1, J && J(e), s = o.render(o.props, o.state, o.context), o.state = o.__s;
          while (o.__d && ++U < 25);
        o.state = o.__s, o.getChildContext != null && (n = ff(ff({}, n), o.getChildContext())), M || o.getSnapshotBeforeUpdate == null || (h = o.getSnapshotBeforeUpdate(g, L)), gn(f, le(Se = s != null && s.type === B && s.key == null ? s.props.children : s) ? Se : [Se], e, a, n, i, t, u, r, d, c), o.base = e.__e, e.__u &= -161, o.__h.length && u.push(o), m && (o.__E = o.__ = null);
      } catch (Wf) {
        e.__v = null, d || t != null ? (e.__e = r, e.__u |= d ? 160 : 32, t[t.indexOf(r)] = null) : (e.__e = a.__e, e.__k = a.__k), j.__e(Wf, e, a);
      }
    else
      t == null && e.__v === a.__v ? (e.__k = a.__k, e.__e = a.__e) : e.__e = K0(a.__e, e, a, n, i, t, u, d, c);
  (s = j.diffed) && s(e);
}
function wn(f, e, a) {
  e.__d = void 0;
  for (var n = 0; n < a.length; n++)
    $e(a[n], a[++n], a[++n]);
  j.__c && j.__c(e, f), f.some(function(i) {
    try {
      f = i.__h, i.__h = [], f.some(function(t) {
        t.call(i);
      });
    } catch (t) {
      j.__e(t, i.__v);
    }
  });
}
function K0(f, e, a, n, i, t, u, r, d) {
  var c, s, o, M, g, L, h, m = a.props, w = e.props, b = e.type;
  if (b === "svg" && (i = !0), t != null) {
    for (c = 0; c < t.length; c++)
      if ((g = t[c]) && "setAttribute" in g == !!b && (b ? g.localName === b : g.nodeType === 3)) {
        f = g, t[c] = null;
        break;
      }
  }
  if (f == null) {
    if (b === null)
      return document.createTextNode(w);
    f = i ? document.createElementNS("http://www.w3.org/2000/svg", b) : document.createElement(b, w.is && w), t = null, r = !1;
  }
  if (b === null)
    m === w || r && f.data === w || (f.data = w);
  else {
    if (t = t && Uf.call(f.childNodes), m = a.props || xf, !r && t != null)
      for (m = {}, c = 0; c < f.attributes.length; c++)
        m[(g = f.attributes[c]).name] = g.value;
    for (c in m)
      g = m[c], c == "children" || (c == "dangerouslySetInnerHTML" ? o = g : c === "key" || c in w || Ff(f, c, null, g, i));
    for (c in w)
      g = w[c], c == "children" ? M = g : c == "dangerouslySetInnerHTML" ? s = g : c == "value" ? L = g : c == "checked" ? h = g : c === "key" || r && typeof g != "function" || m[c] === g || Ff(f, c, g, m[c], i);
    if (s)
      r || o && (s.__html === o.__html || s.__html === f.innerHTML) || (f.innerHTML = s.__html), e.__k = [];
    else if (o && (f.innerHTML = ""), gn(f, le(M) ? M : [M], e, a, n, i && b !== "foreignObject", t, u, t ? t[0] : a.__k && cf(a, 0), r, d), t != null)
      for (c = t.length; c--; )
        t[c] != null && ln(t[c]);
    r || (c = "value", L !== void 0 && (L !== f[c] || b === "progress" && !L || b === "option" && L !== m[c]) && Ff(f, c, L, m[c], !1), c = "checked", h !== void 0 && h !== f[c] && Ff(f, c, h, m[c], !1));
  }
  return f;
}
function $e(f, e, a) {
  try {
    typeof f == "function" ? f(e) : f.current = e;
  } catch (n) {
    j.__e(n, a);
  }
}
function Ue(f, e, a) {
  var n, i;
  if (j.unmount && j.unmount(f), (n = f.ref) && (n.current && n.current !== f.__e || $e(n, null, e)), (n = f.__c) != null) {
    if (n.componentWillUnmount)
      try {
        n.componentWillUnmount();
      } catch (t) {
        j.__e(t, e);
      }
    n.base = n.__P = null;
  }
  if (n = f.__k)
    for (i = 0; i < n.length; i++)
      n[i] && Ue(n[i], e, a || typeof f.type != "function");
  a || f.__e == null || ln(f.__e), f.__c = f.__ = f.__e = f.__d = void 0;
}
function X0(f, e, a) {
  return this.constructor(f, a);
}
function Af(f, e, a) {
  var n, i, t, u;
  j.__ && j.__(f, e), i = (n = typeof a == "function") ? null : a && a.__k || e.__k, t = [], u = [], Xe(e, f = (!n && a || e).__k = l(B, null, [f]), i || xf, xf, e.ownerSVGElement !== void 0, !n && a ? [a] : i ? null : e.firstChild ? Uf.call(e.childNodes) : null, t, !n && a ? a : i ? i.__e : e.firstChild, n, u), wn(t, f, u);
}
function bn(f, e) {
  Af(f, e, bn);
}
function $0(f, e, a) {
  var n, i, t, u, r = ff({}, f.props);
  for (t in f.type && f.type.defaultProps && (u = f.type.defaultProps), e)
    t == "key" ? n = e[t] : t == "ref" ? i = e[t] : r[t] = e[t] === void 0 && u !== void 0 ? u[t] : e[t];
  return arguments.length > 2 && (r.children = arguments.length > 3 ? Uf.call(arguments, 2) : a), Sf(f.type, r, n || f.key, i || f.ref, null);
}
function Me(f, e) {
  var a = { __c: e = "__cC" + cn++, __: f, Consumer: function(n, i) {
    return n.children(i);
  }, Provider: function(n) {
    var i, t;
    return this.getChildContext || (i = [], (t = {})[e] = this, this.getChildContext = function() {
      return t;
    }, this.shouldComponentUpdate = function(u) {
      this.props.value !== u.value && i.some(function(r) {
        r.__e = !0, Re(r);
      });
    }, this.sub = function(u) {
      i.push(u);
      var r = u.componentWillUnmount;
      u.componentWillUnmount = function() {
        i.splice(i.indexOf(u), 1), r && r.call(u);
      };
    }), n.children;
  } };
  return a.Provider.__ = a.Consumer.contextType = a;
}
Uf = sn.slice, j = { __e: function(f, e, a, n) {
  for (var i, t, u; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((t = i.constructor) && t.getDerivedStateFromError != null && (i.setState(t.getDerivedStateFromError(f)), u = i.__d), i.componentDidCatch != null && (i.componentDidCatch(f, n || {}), u = i.__d), u)
          return i.__E = i;
      } catch (r) {
        f = r;
      }
  throw f;
} }, on = 0, V.prototype.setState = function(f, e) {
  var a;
  a = this.__s != null && this.__s !== this.state ? this.__s : this.__s = ff({}, this.state), typeof f == "function" && (f = f(ff({}, a), this.props)), f && ff(a, f), f != null && this.__v && (e && this._sb.push(e), Re(this));
}, V.prototype.forceUpdate = function(f) {
  this.__v && (this.__e = !0, f && this.__h.push(f), Re(this));
}, V.prototype.render = B, df = [], dn = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Qe = function(f, e) {
  return f.__v.__b - e.__v.__b;
}, te.__r = 0, Ke = 0, Ye = va(!1), Je = va(!0), cn = 0;
var af, v, Te, Ia, bf = 0, jn = [], $f = [], N = j, Na = N.__b, ka = N.__r, Da = N.diffed, Sa = N.__c, Ta = N.unmount, za = N.__;
function yf(f, e) {
  N.__h && N.__h(v, f, bf || e), bf = 0;
  var a = v.__H || (v.__H = { __: [], __h: [] });
  return f >= a.__.length && a.__.push({ __V: $f }), a.__[f];
}
function A(f) {
  return bf = 1, mn(Cn, f);
}
function mn(f, e, a) {
  var n = yf(af++, 2);
  if (n.t = f, !n.__c && (n.__ = [a ? a(e) : Cn(void 0, e), function(r) {
    var d = n.__N ? n.__N[0] : n.__[0], c = n.t(d, r);
    d !== c && (n.__N = [c, n.__[1]], n.__c.setState({}));
  }], n.__c = v, !v.u)) {
    var i = function(r, d, c) {
      if (!n.__c.__H)
        return !0;
      var s = n.__c.__H.__.filter(function(M) {
        return !!M.__c;
      });
      if (s.every(function(M) {
        return !M.__N;
      }))
        return !t || t.call(this, r, d, c);
      var o = !1;
      return s.forEach(function(M) {
        if (M.__N) {
          var g = M.__[0];
          M.__ = M.__N, M.__N = void 0, g !== M.__[0] && (o = !0);
        }
      }), !(!o && n.__c.props === r) && (!t || t.call(this, r, d, c));
    };
    v.u = !0;
    var t = v.shouldComponentUpdate, u = v.componentWillUpdate;
    v.componentWillUpdate = function(r, d, c) {
      if (this.__e) {
        var s = t;
        t = void 0, i(r, d, c), t = s;
      }
      u && u.call(this, r, d, c);
    }, v.shouldComponentUpdate = i;
  }
  return n.__N || n.__;
}
function z(f, e) {
  var a = yf(af++, 3);
  !N.__s && qe(a.__H, e) && (a.__ = f, a.i = e, v.__H.__h.push(a));
}
function ge(f, e) {
  var a = yf(af++, 4);
  !N.__s && qe(a.__H, e) && (a.__ = f, a.i = e, v.__h.push(a));
}
function x(f) {
  return bf = 5, $(function() {
    return { current: f };
  }, []);
}
function q0(f, e, a) {
  bf = 6, ge(function() {
    return typeof f == "function" ? (f(e()), function() {
      return f(null);
    }) : f ? (f.current = e(), function() {
      return f.current = null;
    }) : void 0;
  }, a == null ? a : a.concat(f));
}
function $(f, e) {
  var a = yf(af++, 7);
  return qe(a.__H, e) ? (a.__V = f(), a.i = e, a.__h = f, a.__V) : a.__;
}
function K(f, e) {
  return bf = 8, $(function() {
    return f;
  }, e);
}
function Q(f) {
  var e = v.context[f.__c], a = yf(af++, 9);
  return a.c = f, e ? (a.__ == null && (a.__ = !0, e.sub(v)), e.props.value) : f.__;
}
function f1(f, e) {
  N.useDebugValue && N.useDebugValue(e ? e(f) : f);
}
function e1() {
  var f = yf(af++, 11);
  if (!f.__) {
    for (var e = v.__v; e !== null && !e.__m && e.__ !== null; )
      e = e.__;
    var a = e.__m || (e.__m = [0, 0]);
    f.__ = "P" + a[0] + "-" + a[1]++;
  }
  return f.__;
}
function a1() {
  for (var f; f = jn.shift(); )
    if (f.__P && f.__H)
      try {
        f.__H.__h.forEach(qf), f.__H.__h.forEach(Oe), f.__H.__h = [];
      } catch (e) {
        f.__H.__h = [], N.__e(e, f.__v);
      }
}
N.__b = function(f) {
  v = null, Na && Na(f);
}, N.__ = function(f, e) {
  f && e.__k && e.__k.__m && (f.__m = e.__k.__m), za && za(f, e);
}, N.__r = function(f) {
  ka && ka(f), af = 0;
  var e = (v = f.__c).__H;
  e && (Te === v ? (e.__h = [], v.__h = [], e.__.forEach(function(a) {
    a.__N && (a.__ = a.__N), a.__V = $f, a.__N = a.i = void 0;
  })) : (e.__h.forEach(qf), e.__h.forEach(Oe), e.__h = [], af = 0)), Te = v;
}, N.diffed = function(f) {
  Da && Da(f);
  var e = f.__c;
  e && e.__H && (e.__H.__h.length && (jn.push(e) !== 1 && Ia === N.requestAnimationFrame || ((Ia = N.requestAnimationFrame) || n1)(a1)), e.__H.__.forEach(function(a) {
    a.i && (a.__H = a.i), a.__V !== $f && (a.__ = a.__V), a.i = void 0, a.__V = $f;
  })), Te = v = null;
}, N.__c = function(f, e) {
  e.some(function(a) {
    try {
      a.__h.forEach(qf), a.__h = a.__h.filter(function(n) {
        return !n.__ || Oe(n);
      });
    } catch (n) {
      e.some(function(i) {
        i.__h && (i.__h = []);
      }), e = [], N.__e(n, a.__v);
    }
  }), Sa && Sa(f, e);
}, N.unmount = function(f) {
  Ta && Ta(f);
  var e, a = f.__c;
  a && a.__H && (a.__H.__.forEach(function(n) {
    try {
      qf(n);
    } catch (i) {
      e = i;
    }
  }), a.__H = void 0, e && N.__e(e, a.__v));
};
var xa = typeof requestAnimationFrame == "function";
function n1(f) {
  var e, a = function() {
    clearTimeout(n), xa && cancelAnimationFrame(e), setTimeout(f);
  }, n = setTimeout(a, 100);
  xa && (e = requestAnimationFrame(a));
}
function qf(f) {
  var e = v, a = f.__c;
  typeof a == "function" && (f.__c = void 0, a()), v = e;
}
function Oe(f) {
  var e = v;
  f.__c = f.__(), v = e;
}
function qe(f, e) {
  return !f || f.length !== e.length || e.some(function(a, n) {
    return a !== f[n];
  });
}
function Cn(f, e) {
  return typeof e == "function" ? e(f) : e;
}
function yn(f, e) {
  for (var a in e)
    f[a] = e[a];
  return f;
}
function Ge(f, e) {
  for (var a in f)
    if (a !== "__source" && !(a in e))
      return !0;
  for (var n in e)
    if (n !== "__source" && f[n] !== e[n])
      return !0;
  return !1;
}
function Ze(f, e) {
  this.props = f, this.context = e;
}
function fa(f, e) {
  function a(i) {
    var t = this.props.ref, u = t == i.ref;
    return !u && t && (t.call ? t(null) : t.current = null), e ? !e(this.props, i) || !u : Ge(this.props, i);
  }
  function n(i) {
    return this.shouldComponentUpdate = a, l(f, i);
  }
  return n.displayName = "Memo(" + (f.displayName || f.name) + ")", n.prototype.isReactComponent = !0, n.__f = !0, n;
}
(Ze.prototype = new V()).isPureReactComponent = !0, Ze.prototype.shouldComponentUpdate = function(f, e) {
  return Ge(this.props, f) || Ge(this.state, e);
};
var Aa = j.__b;
j.__b = function(f) {
  f.type && f.type.__f && f.ref && (f.props.ref = f.ref, f.ref = null), Aa && Aa(f);
};
var i1 = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function t1(f) {
  function e(a) {
    var n = yn({}, a);
    return delete n.ref, f(n, a.ref || null);
  }
  return e.$$typeof = i1, e.render = e, e.prototype.isReactComponent = e.__f = !0, e.displayName = "ForwardRef(" + (f.displayName || f.name) + ")", e;
}
var Ea = function(f, e) {
  return f == null ? null : ef(ef(f).map(e));
}, u1 = { map: Ea, forEach: Ea, count: function(f) {
  return f ? ef(f).length : 0;
}, only: function(f) {
  var e = ef(f);
  if (e.length !== 1)
    throw "Children.only";
  return e[0];
}, toArray: ef }, r1 = j.__e;
j.__e = function(f, e, a, n) {
  if (f.then) {
    for (var i, t = e; t = t.__; )
      if ((i = t.__c) && i.__c)
        return e.__e == null && (e.__e = a.__e, e.__k = a.__k), i.__c(f, e);
  }
  r1(f, e, a, n);
};
var _a = j.unmount;
function pn(f, e, a) {
  return f && (f.__c && f.__c.__H && (f.__c.__H.__.forEach(function(n) {
    typeof n.__c == "function" && n.__c();
  }), f.__c.__H = null), (f = yn({}, f)).__c != null && (f.__c.__P === a && (f.__c.__P = e), f.__c = null), f.__k = f.__k && f.__k.map(function(n) {
    return pn(n, e, a);
  })), f;
}
function hn(f, e, a) {
  return f && a && (f.__v = null, f.__k = f.__k && f.__k.map(function(n) {
    return hn(n, e, a);
  }), f.__c && f.__c.__P === e && (f.__e && a.appendChild(f.__e), f.__c.__e = !0, f.__c.__P = a)), f;
}
function fe() {
  this.__u = 0, this.t = null, this.__b = null;
}
function vn(f) {
  var e = f.__.__c;
  return e && e.__a && e.__a(f);
}
function o1(f) {
  var e, a, n;
  function i(t) {
    if (e || (e = f()).then(function(u) {
      a = u.default || u;
    }, function(u) {
      n = u;
    }), n)
      throw n;
    if (!a)
      throw e;
    return l(a, t);
  }
  return i.displayName = "Lazy", i.__f = !0, i;
}
function kf() {
  this.u = null, this.o = null;
}
j.unmount = function(f) {
  var e = f.__c;
  e && e.__R && e.__R(), e && 32 & f.__u && (f.type = null), _a && _a(f);
}, (fe.prototype = new V()).__c = function(f, e) {
  var a = e.__c, n = this;
  n.t == null && (n.t = []), n.t.push(a);
  var i = vn(n.__v), t = !1, u = function() {
    t || (t = !0, a.__R = null, i ? i(r) : r());
  };
  a.__R = u;
  var r = function() {
    if (!--n.__u) {
      if (n.state.__a) {
        var d = n.state.__a;
        n.__v.__k[0] = hn(d, d.__c.__P, d.__c.__O);
      }
      var c;
      for (n.setState({ __a: n.__b = null }); c = n.t.pop(); )
        c.forceUpdate();
    }
  };
  n.__u++ || 32 & e.__u || n.setState({ __a: n.__b = n.__v.__k[0] }), f.then(u, u);
}, fe.prototype.componentWillUnmount = function() {
  this.t = [];
}, fe.prototype.render = function(f, e) {
  if (this.__b) {
    if (this.__v.__k) {
      var a = document.createElement("div"), n = this.__v.__k[0].__c;
      this.__v.__k[0] = pn(this.__b, a, n.__O = n.__P);
    }
    this.__b = null;
  }
  var i = e.__a && l(B, null, f.fallback);
  return i && (i.__u &= -33), [l(B, null, e.__a ? null : f.children), i];
};
var Pa = function(f, e, a) {
  if (++a[1] === a[0] && f.o.delete(e), f.props.revealOrder && (f.props.revealOrder[0] !== "t" || !f.o.size))
    for (a = f.u; a; ) {
      for (; a.length > 3; )
        a.pop()();
      if (a[1] < a[0])
        break;
      f.u = a = a[2];
    }
};
function d1(f) {
  return this.getChildContext = function() {
    return f.context;
  }, f.children;
}
function c1(f) {
  var e = this, a = f.i;
  e.componentWillUnmount = function() {
    Af(null, e.l), e.l = null, e.i = null;
  }, e.i && e.i !== a && e.componentWillUnmount(), e.l || (e.i = a, e.l = { nodeType: 1, parentNode: a, childNodes: [], appendChild: function(n) {
    this.childNodes.push(n), e.i.appendChild(n);
  }, insertBefore: function(n, i) {
    this.childNodes.push(n), e.i.appendChild(n);
  }, removeChild: function(n) {
    this.childNodes.splice(this.childNodes.indexOf(n) >>> 1, 1), e.i.removeChild(n);
  } }), Af(l(d1, { context: e.context }, f.__v), e.l);
}
function s1(f, e) {
  var a = l(c1, { __v: f, i: e });
  return a.containerInfo = e, a;
}
(kf.prototype = new V()).__a = function(f) {
  var e = this, a = vn(e.__v), n = e.o.get(f);
  return n[0]++, function(i) {
    var t = function() {
      e.props.revealOrder ? (n.push(i), Pa(e, f, n)) : i();
    };
    a ? a(t) : t();
  };
}, kf.prototype.render = function(f) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var e = ef(f.children);
  f.revealOrder && f.revealOrder[0] === "b" && e.reverse();
  for (var a = e.length; a--; )
    this.o.set(e[a], this.u = [1, 0, this.u]);
  return f.children;
}, kf.prototype.componentDidUpdate = kf.prototype.componentDidMount = function() {
  var f = this;
  this.o.forEach(function(e, a) {
    Pa(f, a, e);
  });
};
var In = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, l1 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, M1 = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, g1 = /[A-Z0-9]/g, L1 = typeof document < "u", w1 = function(f) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(f);
};
function Nn(f, e, a) {
  return e.__k == null && (e.textContent = ""), Af(f, e), typeof a == "function" && a(), f ? f.__c : null;
}
function kn(f, e, a) {
  return bn(f, e), typeof a == "function" && a(), f ? f.__c : null;
}
V.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(f) {
  Object.defineProperty(V.prototype, f, { configurable: !0, get: function() {
    return this["UNSAFE_" + f];
  }, set: function(e) {
    Object.defineProperty(this, f, { configurable: !0, writable: !0, value: e });
  } });
});
var Qa = j.event;
function b1() {
}
function j1() {
  return this.cancelBubble;
}
function m1() {
  return this.defaultPrevented;
}
j.event = function(f) {
  return Qa && (f = Qa(f)), f.persist = b1, f.isPropagationStopped = j1, f.isDefaultPrevented = m1, f.nativeEvent = f;
};
var ea, C1 = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, Ya = j.vnode;
j.vnode = function(f) {
  typeof f.type == "string" && function(e) {
    var a = e.props, n = e.type, i = {};
    for (var t in a) {
      var u = a[t];
      if (!(t === "value" && "defaultValue" in a && u == null || L1 && t === "children" && n === "noscript" || t === "class" || t === "className")) {
        var r = t.toLowerCase();
        t === "defaultValue" && "value" in a && a.value == null ? t = "value" : t === "download" && u === !0 ? u = "" : r === "translate" && u === "no" ? u = !1 : r === "ondoubleclick" ? t = "ondblclick" : r !== "onchange" || n !== "input" && n !== "textarea" || w1(a.type) ? r === "onfocus" ? t = "onfocusin" : r === "onblur" ? t = "onfocusout" : M1.test(t) ? t = r : n.indexOf("-") === -1 && l1.test(t) ? t = t.replace(g1, "-$&").toLowerCase() : u === null && (u = void 0) : r = t = "oninput", r === "oninput" && i[t = r] && (t = "oninputCapture"), i[t] = u;
      }
    }
    n == "select" && i.multiple && Array.isArray(i.value) && (i.value = ef(a.children).forEach(function(d) {
      d.props.selected = i.value.indexOf(d.props.value) != -1;
    })), n == "select" && i.defaultValue != null && (i.value = ef(a.children).forEach(function(d) {
      d.props.selected = i.multiple ? i.defaultValue.indexOf(d.props.value) != -1 : i.defaultValue == d.props.value;
    })), a.class && !a.className ? (i.class = a.class, Object.defineProperty(i, "className", C1)) : (a.className && !a.class || a.class && a.className) && (i.class = i.className = a.className), e.props = i;
  }(f), f.$$typeof = In, Ya && Ya(f);
};
var Ja = j.__r;
j.__r = function(f) {
  Ja && Ja(f), ea = f.__c;
};
var Ra = j.diffed;
j.diffed = function(f) {
  Ra && Ra(f);
  var e = f.props, a = f.__e;
  a != null && f.type === "textarea" && "value" in e && e.value !== a.value && (a.value = e.value == null ? "" : e.value), ea = null;
};
var y1 = { ReactCurrentDispatcher: { current: { readContext: function(f) {
  return ea.__n[f.__c].props.value;
} } } };
function p1(f) {
  return l.bind(null, f);
}
function Le(f) {
  return !!f && f.$$typeof === In;
}
function h1(f) {
  return Le(f) && f.type === B;
}
function v1(f) {
  return !!f && !!f.displayName && (typeof f.displayName == "string" || f.displayName instanceof String) && f.displayName.startsWith("Memo(");
}
function I1(f) {
  return Le(f) ? $0.apply(null, arguments) : f;
}
function Dn(f) {
  return !!f.__k && (Af(null, f), !0);
}
function N1(f) {
  return f && (f.base || f.nodeType === 1 && f) || null;
}
var k1 = function(f, e) {
  return f(e);
}, D1 = function(f, e) {
  return f(e);
}, S1 = B;
function Sn(f) {
  f();
}
function T1(f) {
  return f;
}
function z1() {
  return [!1, Sn];
}
var x1 = ge, A1 = Le;
function E1(f, e) {
  var a = e(), n = A({ h: { __: a, v: e } }), i = n[0].h, t = n[1];
  return ge(function() {
    i.__ = a, i.v = e, ze(i) && t({ h: i });
  }, [f, a, e]), z(function() {
    return ze(i) && t({ h: i }), f(function() {
      ze(i) && t({ h: i });
    });
  }, [f]), a;
}
function ze(f) {
  var e, a, n = f.v, i = f.__;
  try {
    var t = n();
    return !((e = i) === (a = t) && (e !== 0 || 1 / e == 1 / a) || e != e && a != a);
  } catch {
    return !0;
  }
}
var Tf = { useState: A, useId: e1, useReducer: mn, useEffect: z, useLayoutEffect: ge, useInsertionEffect: x1, useTransition: z1, useDeferredValue: T1, useSyncExternalStore: E1, startTransition: Sn, useRef: x, useImperativeHandle: q0, useMemo: $, useCallback: K, useContext: Q, useDebugValue: f1, version: "17.0.2", Children: u1, render: Nn, hydrate: kn, unmountComponentAtNode: Dn, createPortal: s1, createElement: l, createContext: Me, createFactory: p1, cloneElement: I1, createRef: q, Fragment: B, isValidElement: Le, isElement: A1, isFragment: h1, isMemo: v1, findDOMNode: N1, Component: V, PureComponent: Ze, memo: fa, forwardRef: t1, flushSync: D1, unstable_batchedUpdates: k1, StrictMode: S1, Suspense: fe, SuspenseList: kf, lazy: o1, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: y1 };
function Tn(f) {
  return {
    render(e) {
      Nn(e, f);
    },
    unmount() {
      Dn(f);
    }
  };
}
function _1(f, e) {
  return kn(e, f), Tn(f);
}
const rr = {
  createRoot: Tn,
  hydrateRoot: _1
};
function Be(f) {
  return [].concat(f);
}
function aa(f) {
  return f.startsWith(":");
}
function zn(f) {
  return we(f) && (f === "*" || f.length > 1 && ":>~.+*".includes(f.slice(0, 1)) || _n(f));
}
function xn(f, e) {
  return (we(e) || typeof e == "number") && !En(f) && !aa(f) && !An(f);
}
function An(f) {
  return f.startsWith("@media");
}
function P1(f) {
  return f === ".";
}
function En(f) {
  return f === "--";
}
function we(f) {
  return f + "" === f;
}
function _n(f) {
  return we(f) && (f.startsWith("&") || aa(f));
}
function ue(f, e = "") {
  return f.filter(Boolean).join(e);
}
function Pn(f, e) {
  let a = 0;
  if (e.length === 0)
    return a.toString();
  for (let n = 0; n < e.length; n++) {
    const i = e.charCodeAt(n);
    a = (a << 5) - a + i, a = a & a;
  }
  return `${f ?? "cl"}_${a.toString(36)}`;
}
function Q1(f, e) {
  return f === "content" ? `"${e}"` : e;
}
function Y1(f) {
  return f.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
function Ua(f, e) {
  return `${f}:${e}`;
}
function J1(f) {
  return f ? `.${f}` : "";
}
function R1(f, e) {
  return f ? `${f}
${e}` : e;
}
var Qn = class Yn {
  constructor(e, a, n, i) {
    this.sheet = e, this.property = a, this.value = n, this.selector = i, this.property = a, this.value = n, this.joined = Ua(a, n);
    const t = this.selector.preconditions.concat(
      this.selector.postconditions
    );
    this.hash = this.selector.hasConditions ? this.selector.scopeClassName : Pn(this.sheet.name, this.joined), this.key = ue([this.joined, t, this.hash]);
  }
  toString() {
    let e = He(this.selector.preconditions, {
      right: this.hash
    });
    return e = He(this.selector.postconditions, {
      left: e
    }), `${e} {${Yn.genRule(this.property, this.value)}}`;
  }
  static genRule(e, a) {
    const n = Y1(e);
    return Ua(
      n,
      Q1(e, a)
    ) + ";";
  }
};
function He(f, { left: e = "", right: a = "" } = {}) {
  const n = f.reduce((i, t) => aa(t) ? i + t : _n(t) ? i + t.slice(1) : ue([i, t], " "), e);
  return ue([n, J1(a)], " ");
}
var U1 = class ee {
  constructor(e, a = null, {
    preconditions: n,
    postconditions: i
  } = {}) {
    this.sheet = e, this.preconditions = [], this.scopeClassName = null, this.scopeName = null, this.postconditions = [], this.preconditions = n ? Be(n) : [], this.postconditions = i ? Be(i) : [], this.setScope(a);
  }
  setScope(e) {
    return e ? (this.scopeClassName || (this.scopeName = e, this.scopeClassName = Pn(
      this.sheet.name,
      // adding the count guarantees uniqueness across style.create calls
      e + this.sheet.count
    )), this) : this;
  }
  get hasConditions() {
    return this.preconditions.length > 0 || this.postconditions.length > 0;
  }
  addScope(e) {
    return new ee(this.sheet, e, {
      preconditions: this.preconditions,
      postconditions: this.postconditions
    });
  }
  addPrecondition(e) {
    return new ee(this.sheet, this.scopeClassName, {
      postconditions: this.postconditions,
      preconditions: this.preconditions.concat(e)
    });
  }
  addPostcondition(e) {
    return new ee(this.sheet, this.scopeClassName, {
      preconditions: this.preconditions,
      postconditions: this.postconditions.concat(e)
    });
  }
  createRule(e, a) {
    return new Qn(this.sheet, e, a, this);
  }
}, O1 = class {
  constructor(f, e) {
    this.name = f, this.rootNode = e, this.storedStyles = {}, this.storedClasses = {}, this.style = "", this.count = 0, this.id = `flairup-${f}`, this.styleTag = this.createStyleTag();
  }
  getStyle() {
    return this.style;
  }
  append(f) {
    this.style = R1(this.style, f);
  }
  apply() {
    this.count++, this.styleTag && (this.styleTag.innerHTML = this.style);
  }
  isApplied() {
    return !!this.styleTag;
  }
  createStyleTag() {
    if (typeof document > "u" || this.isApplied() || // Explicitly disallow mounting to the DOM
    this.rootNode === null)
      return this.styleTag;
    const f = document.createElement("style");
    return f.type = "text/css", f.id = this.id, (this.rootNode ?? document.head).appendChild(f), f;
  }
  addRule(f) {
    const e = this.storedClasses[f.key];
    return we(e) ? e : (this.storedClasses[f.key] = f.hash, this.storedStyles[f.hash] = [f.property, f.value], this.append(f.toString()), f.hash);
  }
};
function na(f, e) {
  for (const a in f)
    e(a.trim(), f[a]);
}
function p(...f) {
  const e = f.reduce((a, n) => (n instanceof Set ? a.push(...n) : typeof n == "string" ? a.push(n) : Array.isArray(n) ? a.push(p(...n)) : typeof n == "object" && Object.entries(n).forEach(([i, t]) => {
    t && a.push(i);
  }), a), []);
  return ue(e, " ").trim();
}
function G1(f, e) {
  const a = new O1(f, e);
  return {
    create: n,
    getStyle: a.getStyle.bind(a),
    isApplied: a.isApplied.bind(a)
  };
  function n(i) {
    const t = {};
    return Jn(a, i, new U1(a)).forEach(
      ([r, d, c]) => {
        be(a, d, c).forEach(
          (s) => {
            u(r, s);
          }
        );
      }
    ), a.apply(), t;
    function u(r, d) {
      t[r] = t[r] ?? /* @__PURE__ */ new Set(), t[r].add(d);
    }
  }
}
function Jn(f, e, a) {
  const n = [];
  return na(e, (i, t) => {
    if (zn(i))
      return Jn(
        f,
        t,
        a.addPrecondition(i)
      ).forEach((u) => n.push(u));
    n.push([i, e[i], a.addScope(i)]);
  }), n;
}
function be(f, e, a) {
  const n = /* @__PURE__ */ new Set();
  return na(e, (i, t) => {
    let u = [];
    if (zn(i))
      u = be(
        f,
        t,
        a.addPostcondition(i)
      );
    else if (P1(i))
      u = Be(t);
    else if (An(i))
      u = B1(f, t, i, a);
    else if (En(i))
      u = Z1(f, t, a);
    else if (xn(i, t)) {
      const r = a.createRule(i, t);
      f.addRule(r), n.add(r.hash);
    }
    return Rn(u, n);
  }), n;
}
function Rn(f, e) {
  return f.forEach((a) => e.add(a)), e;
}
function Z1(f, e, a) {
  const n = /* @__PURE__ */ new Set(), i = [];
  if (na(e, (t, u) => {
    if (xn(t, u)) {
      i.push(Qn.genRule(t, u));
      return;
    }
    const r = be(f, u ?? {}, a);
    Rn(r, n);
  }), !a.scopeClassName)
    return n;
  if (i.length) {
    const t = i.join(" ");
    f.append(
      `${He(a.preconditions, {
        right: a.scopeClassName
      })} {${t}}`
    );
  }
  return n.add(a.scopeClassName), n;
}
function B1(f, e, a, n) {
  f.append(a + " {");
  const i = be(f, e, n);
  return f.append("}"), i;
}
function k() {
  return k = Object.assign ? Object.assign.bind() : function(f) {
    for (var e = 1; e < arguments.length; e++) {
      var a = arguments[e];
      for (var n in a)
        Object.prototype.hasOwnProperty.call(a, n) && (f[n] = a[n]);
    }
    return f;
  }, k.apply(this, arguments);
}
function H1(f, e) {
  f.prototype = Object.create(e.prototype), f.prototype.constructor = f, We(f, e);
}
function We(f, e) {
  return We = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, We(f, e);
}
function Un(f, e) {
  if (f == null)
    return {};
  var a = {}, n = Object.keys(f), i, t;
  for (t = 0; t < n.length; t++)
    i = n[t], !(e.indexOf(i) >= 0) && (a[i] = f[i]);
  return a;
}
function W1(f, e) {
  if (f) {
    if (typeof f == "string")
      return Oa(f, e);
    var a = Object.prototype.toString.call(f).slice(8, -1);
    if (a === "Object" && f.constructor && (a = f.constructor.name), a === "Map" || a === "Set")
      return Array.from(f);
    if (a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
      return Oa(f, e);
  }
}
function Oa(f, e) {
  (e == null || e > f.length) && (e = f.length);
  for (var a = 0, n = new Array(e); a < e; a++)
    n[a] = f[a];
  return n;
}
function F1(f, e) {
  var a = typeof Symbol < "u" && f[Symbol.iterator] || f["@@iterator"];
  if (a)
    return (a = a.call(f)).next.bind(a);
  if (Array.isArray(f) || (a = W1(f)) || e && f && typeof f.length == "number") {
    a && (f = a);
    var n = 0;
    return function() {
      return n >= f.length ? {
        done: !0
      } : {
        done: !1,
        value: f[n++]
      };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var y;
(function(f) {
  f.hiddenOnSearch = "epr-hidden-on-search", f.searchActive = "epr-search-active", f.hidden = "epr-hidden", f.visible = "epr-visible", f.active = "epr-active", f.emoji = "epr-emoji", f.category = "epr-emoji-category", f.label = "epr-emoji-category-label", f.categoryContent = "epr-emoji-category-content", f.emojiHasVariations = "epr-emoji-has-variations", f.scrollBody = "epr-body", f.emojiList = "epr-emoji-list", f.external = "__EmojiPicker__", f.emojiPicker = "EmojiPickerReact", f.open = "epr-open", f.vertical = "epr-vertical", f.horizontal = "epr-horizontal", f.variationPicker = "epr-emoji-variation-picker", f.darkTheme = "epr-dark-theme", f.autoTheme = "epr-auto-theme";
})(y || (y = {}));
function E() {
  for (var f = arguments.length, e = new Array(f), a = 0; a < f; a++)
    e[a] = arguments[a];
  return e.map(function(n) {
    return "." + n;
  }).join("");
}
var I = /* @__PURE__ */ G1("epr", null), ae = {
  display: "none",
  opacity: "0",
  pointerEvents: "none",
  visibility: "hidden",
  overflow: "hidden"
}, ia = /* @__PURE__ */ I.create({
  hidden: /* @__PURE__ */ k({
    ".": y.hidden
  }, ae)
}), V1 = /* @__PURE__ */ fa(function() {
  return l("style", {
    suppressHydrationWarning: !0,
    dangerouslySetInnerHTML: {
      __html: I.getStyle()
    }
  });
}), sf = /* @__PURE__ */ I.create({
  ".epr-main": {
    ":has(input:not(:placeholder-shown))": {
      categoryBtn: {
        ":hover": {
          opacity: "1",
          backgroundPositionY: "var(--epr-category-navigation-button-size)"
        }
      },
      hiddenOnSearch: /* @__PURE__ */ k({
        ".": y.hiddenOnSearch
      }, ae)
    },
    ":has(input(:placeholder-shown))": {
      visibleOnSearchOnly: ae
    }
  },
  hiddenOnReactions: {
    transition: "all 0.5s ease-in-out"
  },
  ".epr-reactions": {
    hiddenOnReactions: {
      height: "0px",
      width: "0px",
      opacity: "0",
      pointerEvents: "none",
      overflow: "hidden"
    }
  },
  ".EmojiPickerReact:not(.epr-search-active)": {
    categoryBtn: {
      ":hover": {
        opacity: "1",
        backgroundPositionY: "var(--epr-category-navigation-button-size)"
      },
      // @ts-ignore
      "&.epr-active": {
        opacity: "1",
        backgroundPositionY: "var(--epr-category-navigation-button-size)"
      }
    },
    visibleOnSearchOnly: /* @__PURE__ */ k({
      ".": "epr-visible-on-search-only"
    }, ae)
  }
});
function nf(f, e) {
  var a, n;
  return {
    ".epr-dark-theme": (a = {}, a[f] = e, a),
    ".epr-auto-theme": (n = {}, n[f] = {
      "@media (prefers-color-scheme: dark)": e
    }, n)
  };
}
function On(f, e) {
  var a, n, i = (a = f.customEmojis) != null ? a : [], t = (n = e.customEmojis) != null ? n : [];
  return f.open === e.open && f.emojiVersion === e.emojiVersion && f.reactionsDefaultOpen === e.reactionsDefaultOpen && f.searchPlaceHolder === e.searchPlaceHolder && f.searchPlaceholder === e.searchPlaceholder && f.defaultSkinTone === e.defaultSkinTone && f.skinTonesDisabled === e.skinTonesDisabled && f.autoFocusSearch === e.autoFocusSearch && f.emojiStyle === e.emojiStyle && f.theme === e.theme && f.suggestedEmojisMode === e.suggestedEmojisMode && f.lazyLoadEmojis === e.lazyLoadEmojis && f.className === e.className && f.height === e.height && f.width === e.width && f.style === e.style && f.searchDisabled === e.searchDisabled && f.skinTonePickerLocation === e.skinTonePickerLocation && i.length === t.length;
}
var K1 = [
  "1f44d",
  "2764-fe0f",
  "1f603",
  "1f622",
  "1f64f",
  "1f44e",
  "1f621"
  // 😡
], Ef;
(function(f) {
  f.RECENT = "recent", f.FREQUENT = "frequent";
})(Ef || (Ef = {}));
var P;
(function(f) {
  f.NATIVE = "native", f.APPLE = "apple", f.TWITTER = "twitter", f.GOOGLE = "google", f.FACEBOOK = "facebook";
})(P || (P = {}));
var _f;
(function(f) {
  f.DARK = "dark", f.LIGHT = "light", f.AUTO = "auto";
})(_f || (_f = {}));
var F;
(function(f) {
  f.NEUTRAL = "neutral", f.LIGHT = "1f3fb", f.MEDIUM_LIGHT = "1f3fc", f.MEDIUM = "1f3fd", f.MEDIUM_DARK = "1f3fe", f.DARK = "1f3ff";
})(F || (F = {}));
var C;
(function(f) {
  f.SUGGESTED = "suggested", f.CUSTOM = "custom", f.SMILEYS_PEOPLE = "smileys_people", f.ANIMALS_NATURE = "animals_nature", f.FOOD_DRINK = "food_drink", f.TRAVEL_PLACES = "travel_places", f.ACTIVITIES = "activities", f.OBJECTS = "objects", f.SYMBOLS = "symbols", f.FLAGS = "flags";
})(C || (C = {}));
var jf;
(function(f) {
  f.SEARCH = "SEARCH", f.PREVIEW = "PREVIEW";
})(jf || (jf = {}));
var G, X1 = [C.SUGGESTED, C.CUSTOM, C.SMILEYS_PEOPLE, C.ANIMALS_NATURE, C.FOOD_DRINK, C.TRAVEL_PLACES, C.ACTIVITIES, C.OBJECTS, C.SYMBOLS, C.FLAGS], $1 = {
  name: "Recently Used",
  category: C.SUGGESTED
}, Gn = (G = {}, G[C.SUGGESTED] = {
  category: C.SUGGESTED,
  name: "Frequently Used"
}, G[C.CUSTOM] = {
  category: C.CUSTOM,
  name: "Custom Emojis"
}, G[C.SMILEYS_PEOPLE] = {
  category: C.SMILEYS_PEOPLE,
  name: "Smileys & People"
}, G[C.ANIMALS_NATURE] = {
  category: C.ANIMALS_NATURE,
  name: "Animals & Nature"
}, G[C.FOOD_DRINK] = {
  category: C.FOOD_DRINK,
  name: "Food & Drink"
}, G[C.TRAVEL_PLACES] = {
  category: C.TRAVEL_PLACES,
  name: "Travel & Places"
}, G[C.ACTIVITIES] = {
  category: C.ACTIVITIES,
  name: "Activities"
}, G[C.OBJECTS] = {
  category: C.OBJECTS,
  name: "Objects"
}, G[C.SYMBOLS] = {
  category: C.SYMBOLS,
  name: "Symbols"
}, G[C.FLAGS] = {
  category: C.FLAGS,
  name: "Flags"
}, G);
function Zn(f) {
  return X1.map(function(e) {
    return k({}, Gn[e], f && f[e] && f[e]);
  });
}
function ta(f) {
  return f.category;
}
function Bn(f) {
  return f.name;
}
function q1(f, e) {
  var a;
  f === void 0 && (f = []), e === void 0 && (e = {});
  var n = {};
  e.suggestionMode === Ef.RECENT && (n[C.SUGGESTED] = $1);
  var i = Zn(n);
  return (a = f) != null && a.length ? f.map(function(t) {
    return typeof t == "string" ? Ga(t, n[t]) : k({}, Ga(t.category, n[t.category]), t);
  }) : i;
}
function Ga(f, e) {
  return e === void 0 && (e = {}), Object.assign(Gn[f], e);
}
var fi = "https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/", ei = "https://cdn.jsdelivr.net/npm/emoji-datasource-facebook/img/facebook/64/", ai = "https://cdn.jsdelivr.net/npm/emoji-datasource-twitter/img/twitter/64/", ni = "https://cdn.jsdelivr.net/npm/emoji-datasource-google/img/google/64/";
function ii(f) {
  switch (f) {
    case P.TWITTER:
      return ai;
    case P.GOOGLE:
      return ni;
    case P.FACEBOOK:
      return ei;
    case P.APPLE:
    default:
      return fi;
  }
}
var ti = [], ui = [
  {
    n: [
      "grinning",
      "grinning face"
    ],
    u: "1f600",
    a: "1.0"
  },
  {
    n: [
      "smiley",
      "smiling face with open mouth"
    ],
    u: "1f603",
    a: "0.6"
  },
  {
    n: [
      "smile",
      "smiling face with open mouth and smiling eyes"
    ],
    u: "1f604",
    a: "0.6"
  },
  {
    n: [
      "grin",
      "grinning face with smiling eyes"
    ],
    u: "1f601",
    a: "0.6"
  },
  {
    n: [
      "laughing",
      "satisfied",
      "smiling face with open mouth and tightly-closed eyes"
    ],
    u: "1f606",
    a: "0.6"
  },
  {
    n: [
      "sweat smile",
      "smiling face with open mouth and cold sweat"
    ],
    u: "1f605",
    a: "0.6"
  },
  {
    n: [
      "rolling on the floor laughing"
    ],
    u: "1f923",
    a: "3.0"
  },
  {
    n: [
      "joy",
      "face with tears of joy"
    ],
    u: "1f602",
    a: "0.6"
  },
  {
    n: [
      "slightly smiling face"
    ],
    u: "1f642",
    a: "1.0"
  },
  {
    n: [
      "upside-down face",
      "upside down face"
    ],
    u: "1f643",
    a: "1.0"
  },
  {
    n: [
      "melting face"
    ],
    u: "1fae0",
    a: "14.0"
  },
  {
    n: [
      "wink",
      "winking face"
    ],
    u: "1f609",
    a: "0.6"
  },
  {
    n: [
      "blush",
      "smiling face with smiling eyes"
    ],
    u: "1f60a",
    a: "0.6"
  },
  {
    n: [
      "innocent",
      "smiling face with halo"
    ],
    u: "1f607",
    a: "1.0"
  },
  {
    n: [
      "smiling face with 3 hearts",
      "smiling face with smiling eyes and three hearts"
    ],
    u: "1f970",
    a: "11.0"
  },
  {
    n: [
      "heart eyes",
      "smiling face with heart-shaped eyes"
    ],
    u: "1f60d",
    a: "0.6"
  },
  {
    n: [
      "star-struck",
      "grinning face with star eyes"
    ],
    u: "1f929",
    a: "5.0"
  },
  {
    n: [
      "kissing heart",
      "face throwing a kiss"
    ],
    u: "1f618",
    a: "0.6"
  },
  {
    n: [
      "kissing",
      "kissing face"
    ],
    u: "1f617",
    a: "1.0"
  },
  {
    n: [
      "relaxed",
      "white smiling face"
    ],
    u: "263a-fe0f",
    a: "0.6"
  },
  {
    n: [
      "kissing closed eyes",
      "kissing face with closed eyes"
    ],
    u: "1f61a",
    a: "0.6"
  },
  {
    n: [
      "kissing smiling eyes",
      "kissing face with smiling eyes"
    ],
    u: "1f619",
    a: "1.0"
  },
  {
    n: [
      "smiling face with tear"
    ],
    u: "1f972",
    a: "13.0"
  },
  {
    n: [
      "yum",
      "face savouring delicious food"
    ],
    u: "1f60b",
    a: "0.6"
  },
  {
    n: [
      "stuck out tongue",
      "face with stuck-out tongue"
    ],
    u: "1f61b",
    a: "1.0"
  },
  {
    n: [
      "stuck out tongue winking eye",
      "face with stuck-out tongue and winking eye"
    ],
    u: "1f61c",
    a: "0.6"
  },
  {
    n: [
      "zany face",
      "grinning face with one large and one small eye"
    ],
    u: "1f92a",
    a: "5.0"
  },
  {
    n: [
      "stuck out tongue closed eyes",
      "face with stuck-out tongue and tightly-closed eyes"
    ],
    u: "1f61d",
    a: "0.6"
  },
  {
    n: [
      "money-mouth face",
      "money mouth face"
    ],
    u: "1f911",
    a: "1.0"
  },
  {
    n: [
      "hugging face"
    ],
    u: "1f917",
    a: "1.0"
  },
  {
    n: [
      "face with hand over mouth",
      "smiling face with smiling eyes and hand covering mouth"
    ],
    u: "1f92d",
    a: "5.0"
  },
  {
    n: [
      "face with open eyes and hand over mouth"
    ],
    u: "1fae2",
    a: "14.0"
  },
  {
    n: [
      "face with peeking eye"
    ],
    u: "1fae3",
    a: "14.0"
  },
  {
    n: [
      "shushing face",
      "face with finger covering closed lips"
    ],
    u: "1f92b",
    a: "5.0"
  },
  {
    n: [
      "thinking face"
    ],
    u: "1f914",
    a: "1.0"
  },
  {
    n: [
      "saluting face"
    ],
    u: "1fae1",
    a: "14.0"
  },
  {
    n: [
      "zipper-mouth face",
      "zipper mouth face"
    ],
    u: "1f910",
    a: "1.0"
  },
  {
    n: [
      "face with raised eyebrow",
      "face with one eyebrow raised"
    ],
    u: "1f928",
    a: "5.0"
  },
  {
    n: [
      "neutral face"
    ],
    u: "1f610",
    a: "0.7"
  },
  {
    n: [
      "expressionless",
      "expressionless face"
    ],
    u: "1f611",
    a: "1.0"
  },
  {
    n: [
      "no mouth",
      "face without mouth"
    ],
    u: "1f636",
    a: "1.0"
  },
  {
    n: [
      "dotted line face"
    ],
    u: "1fae5",
    a: "14.0"
  },
  {
    n: [
      "face in clouds"
    ],
    u: "1f636-200d-1f32b-fe0f",
    a: "13.1"
  },
  {
    n: [
      "smirk",
      "smirking face"
    ],
    u: "1f60f",
    a: "0.6"
  },
  {
    n: [
      "unamused",
      "unamused face"
    ],
    u: "1f612",
    a: "0.6"
  },
  {
    n: [
      "face with rolling eyes"
    ],
    u: "1f644",
    a: "1.0"
  },
  {
    n: [
      "grimacing",
      "grimacing face"
    ],
    u: "1f62c",
    a: "1.0"
  },
  {
    n: [
      "face exhaling"
    ],
    u: "1f62e-200d-1f4a8",
    a: "13.1"
  },
  {
    n: [
      "lying face"
    ],
    u: "1f925",
    a: "3.0"
  },
  {
    n: [
      "relieved",
      "relieved face"
    ],
    u: "1f60c",
    a: "0.6"
  },
  {
    n: [
      "pensive",
      "pensive face"
    ],
    u: "1f614",
    a: "0.6"
  },
  {
    n: [
      "sleepy",
      "sleepy face"
    ],
    u: "1f62a",
    a: "0.6"
  },
  {
    n: [
      "drooling face"
    ],
    u: "1f924",
    a: "3.0"
  },
  {
    n: [
      "sleeping",
      "sleeping face"
    ],
    u: "1f634",
    a: "1.0"
  },
  {
    n: [
      "mask",
      "face with medical mask"
    ],
    u: "1f637",
    a: "0.6"
  },
  {
    n: [
      "face with thermometer"
    ],
    u: "1f912",
    a: "1.0"
  },
  {
    n: [
      "face with head-bandage",
      "face with head bandage"
    ],
    u: "1f915",
    a: "1.0"
  },
  {
    n: [
      "nauseated face"
    ],
    u: "1f922",
    a: "3.0"
  },
  {
    n: [
      "face vomiting",
      "face with open mouth vomiting"
    ],
    u: "1f92e",
    a: "5.0"
  },
  {
    n: [
      "sneezing face"
    ],
    u: "1f927",
    a: "3.0"
  },
  {
    n: [
      "hot face",
      "overheated face"
    ],
    u: "1f975",
    a: "11.0"
  },
  {
    n: [
      "cold face",
      "freezing face"
    ],
    u: "1f976",
    a: "11.0"
  },
  {
    n: [
      "woozy face",
      "face with uneven eyes and wavy mouth"
    ],
    u: "1f974",
    a: "11.0"
  },
  {
    n: [
      "dizzy face"
    ],
    u: "1f635",
    a: "0.6"
  },
  {
    n: [
      "face with spiral eyes"
    ],
    u: "1f635-200d-1f4ab",
    a: "13.1"
  },
  {
    n: [
      "exploding head",
      "shocked face with exploding head"
    ],
    u: "1f92f",
    a: "5.0"
  },
  {
    n: [
      "face with cowboy hat"
    ],
    u: "1f920",
    a: "3.0"
  },
  {
    n: [
      "partying face",
      "face with party horn and party hat"
    ],
    u: "1f973",
    a: "11.0"
  },
  {
    n: [
      "disguised face"
    ],
    u: "1f978",
    a: "13.0"
  },
  {
    n: [
      "sunglasses",
      "smiling face with sunglasses"
    ],
    u: "1f60e",
    a: "1.0"
  },
  {
    n: [
      "nerd face"
    ],
    u: "1f913",
    a: "1.0"
  },
  {
    n: [
      "face with monocle"
    ],
    u: "1f9d0",
    a: "5.0"
  },
  {
    n: [
      "confused",
      "confused face"
    ],
    u: "1f615",
    a: "1.0"
  },
  {
    n: [
      "face with diagonal mouth"
    ],
    u: "1fae4",
    a: "14.0"
  },
  {
    n: [
      "worried",
      "worried face"
    ],
    u: "1f61f",
    a: "1.0"
  },
  {
    n: [
      "slightly frowning face"
    ],
    u: "1f641",
    a: "1.0"
  },
  {
    n: [
      "frowning face",
      "white frowning face"
    ],
    u: "2639-fe0f",
    a: "0.7"
  },
  {
    n: [
      "open mouth",
      "face with open mouth"
    ],
    u: "1f62e",
    a: "1.0"
  },
  {
    n: [
      "hushed",
      "hushed face"
    ],
    u: "1f62f",
    a: "1.0"
  },
  {
    n: [
      "astonished",
      "astonished face"
    ],
    u: "1f632",
    a: "0.6"
  },
  {
    n: [
      "flushed",
      "flushed face"
    ],
    u: "1f633",
    a: "0.6"
  },
  {
    n: [
      "pleading face",
      "face with pleading eyes"
    ],
    u: "1f97a",
    a: "11.0"
  },
  {
    n: [
      "face holding back tears"
    ],
    u: "1f979",
    a: "14.0"
  },
  {
    n: [
      "frowning",
      "frowning face with open mouth"
    ],
    u: "1f626",
    a: "1.0"
  },
  {
    n: [
      "anguished",
      "anguished face"
    ],
    u: "1f627",
    a: "1.0"
  },
  {
    n: [
      "fearful",
      "fearful face"
    ],
    u: "1f628",
    a: "0.6"
  },
  {
    n: [
      "cold sweat",
      "face with open mouth and cold sweat"
    ],
    u: "1f630",
    a: "0.6"
  },
  {
    n: [
      "disappointed relieved",
      "disappointed but relieved face"
    ],
    u: "1f625",
    a: "0.6"
  },
  {
    n: [
      "cry",
      "crying face"
    ],
    u: "1f622",
    a: "0.6"
  },
  {
    n: [
      "sob",
      "loudly crying face"
    ],
    u: "1f62d",
    a: "0.6"
  },
  {
    n: [
      "scream",
      "face screaming in fear"
    ],
    u: "1f631",
    a: "0.6"
  },
  {
    n: [
      "confounded",
      "confounded face"
    ],
    u: "1f616",
    a: "0.6"
  },
  {
    n: [
      "persevere",
      "persevering face"
    ],
    u: "1f623",
    a: "0.6"
  },
  {
    n: [
      "disappointed",
      "disappointed face"
    ],
    u: "1f61e",
    a: "0.6"
  },
  {
    n: [
      "sweat",
      "face with cold sweat"
    ],
    u: "1f613",
    a: "0.6"
  },
  {
    n: [
      "weary",
      "weary face"
    ],
    u: "1f629",
    a: "0.6"
  },
  {
    n: [
      "tired face"
    ],
    u: "1f62b",
    a: "0.6"
  },
  {
    n: [
      "yawning face"
    ],
    u: "1f971",
    a: "12.0"
  },
  {
    n: [
      "triumph",
      "face with look of triumph"
    ],
    u: "1f624",
    a: "0.6"
  },
  {
    n: [
      "rage",
      "pouting face"
    ],
    u: "1f621",
    a: "0.6"
  },
  {
    n: [
      "angry",
      "angry face"
    ],
    u: "1f620",
    a: "0.6"
  },
  {
    n: [
      "face with symbols on mouth",
      "serious face with symbols covering mouth"
    ],
    u: "1f92c",
    a: "5.0"
  },
  {
    n: [
      "smiling imp",
      "smiling face with horns"
    ],
    u: "1f608",
    a: "1.0"
  },
  {
    n: [
      "imp"
    ],
    u: "1f47f",
    a: "0.6"
  },
  {
    n: [
      "skull"
    ],
    u: "1f480",
    a: "0.6"
  },
  {
    n: [
      "skull and crossbones"
    ],
    u: "2620-fe0f",
    a: "1.0"
  },
  {
    n: [
      "poop",
      "shit",
      "hankey",
      "pile of poo"
    ],
    u: "1f4a9",
    a: "0.6"
  },
  {
    n: [
      "clown face"
    ],
    u: "1f921",
    a: "3.0"
  },
  {
    n: [
      "japanese ogre"
    ],
    u: "1f479",
    a: "0.6"
  },
  {
    n: [
      "japanese goblin"
    ],
    u: "1f47a",
    a: "0.6"
  },
  {
    n: [
      "ghost"
    ],
    u: "1f47b",
    a: "0.6"
  },
  {
    n: [
      "alien",
      "extraterrestrial alien"
    ],
    u: "1f47d",
    a: "0.6"
  },
  {
    n: [
      "alien monster",
      "space invader"
    ],
    u: "1f47e",
    a: "0.6"
  },
  {
    n: [
      "robot face"
    ],
    u: "1f916",
    a: "1.0"
  },
  {
    n: [
      "smiley cat",
      "smiling cat face with open mouth"
    ],
    u: "1f63a",
    a: "0.6"
  },
  {
    n: [
      "smile cat",
      "grinning cat face with smiling eyes"
    ],
    u: "1f638",
    a: "0.6"
  },
  {
    n: [
      "joy cat",
      "cat face with tears of joy"
    ],
    u: "1f639",
    a: "0.6"
  },
  {
    n: [
      "heart eyes cat",
      "smiling cat face with heart-shaped eyes"
    ],
    u: "1f63b",
    a: "0.6"
  },
  {
    n: [
      "smirk cat",
      "cat face with wry smile"
    ],
    u: "1f63c",
    a: "0.6"
  },
  {
    n: [
      "kissing cat",
      "kissing cat face with closed eyes"
    ],
    u: "1f63d",
    a: "0.6"
  },
  {
    n: [
      "scream cat",
      "weary cat face"
    ],
    u: "1f640",
    a: "0.6"
  },
  {
    n: [
      "crying cat face"
    ],
    u: "1f63f",
    a: "0.6"
  },
  {
    n: [
      "pouting cat",
      "pouting cat face"
    ],
    u: "1f63e",
    a: "0.6"
  },
  {
    n: [
      "see no evil",
      "see-no-evil monkey"
    ],
    u: "1f648",
    a: "0.6"
  },
  {
    n: [
      "hear no evil",
      "hear-no-evil monkey"
    ],
    u: "1f649",
    a: "0.6"
  },
  {
    n: [
      "speak no evil",
      "speak-no-evil monkey"
    ],
    u: "1f64a",
    a: "0.6"
  },
  {
    n: [
      "kiss",
      "kiss mark"
    ],
    u: "1f48b",
    a: "0.6"
  },
  {
    n: [
      "love letter"
    ],
    u: "1f48c",
    a: "0.6"
  },
  {
    n: [
      "cupid",
      "heart with arrow"
    ],
    u: "1f498",
    a: "0.6"
  },
  {
    n: [
      "gift heart",
      "heart with ribbon"
    ],
    u: "1f49d",
    a: "0.6"
  },
  {
    n: [
      "sparkling heart"
    ],
    u: "1f496",
    a: "0.6"
  },
  {
    n: [
      "heartpulse",
      "growing heart"
    ],
    u: "1f497",
    a: "0.6"
  },
  {
    n: [
      "heartbeat",
      "beating heart"
    ],
    u: "1f493",
    a: "0.6"
  },
  {
    n: [
      "revolving hearts"
    ],
    u: "1f49e",
    a: "0.6"
  },
  {
    n: [
      "two hearts"
    ],
    u: "1f495",
    a: "0.6"
  },
  {
    n: [
      "heart decoration"
    ],
    u: "1f49f",
    a: "0.6"
  },
  {
    n: [
      "heart exclamation",
      "heavy heart exclamation mark ornament"
    ],
    u: "2763-fe0f",
    a: "1.0"
  },
  {
    n: [
      "broken heart"
    ],
    u: "1f494",
    a: "0.6"
  },
  {
    n: [
      "heart on fire"
    ],
    u: "2764-fe0f-200d-1f525",
    a: "13.1"
  },
  {
    n: [
      "mending heart"
    ],
    u: "2764-fe0f-200d-1fa79",
    a: "13.1"
  },
  {
    n: [
      "heart",
      "heavy black heart"
    ],
    u: "2764-fe0f",
    a: "0.6"
  },
  {
    n: [
      "orange heart"
    ],
    u: "1f9e1",
    a: "5.0"
  },
  {
    n: [
      "yellow heart"
    ],
    u: "1f49b",
    a: "0.6"
  },
  {
    n: [
      "green heart"
    ],
    u: "1f49a",
    a: "0.6"
  },
  {
    n: [
      "blue heart"
    ],
    u: "1f499",
    a: "0.6"
  },
  {
    n: [
      "purple heart"
    ],
    u: "1f49c",
    a: "0.6"
  },
  {
    n: [
      "brown heart"
    ],
    u: "1f90e",
    a: "12.0"
  },
  {
    n: [
      "black heart"
    ],
    u: "1f5a4",
    a: "3.0"
  },
  {
    n: [
      "white heart"
    ],
    u: "1f90d",
    a: "12.0"
  },
  {
    n: [
      "100",
      "hundred points symbol"
    ],
    u: "1f4af",
    a: "0.6"
  },
  {
    n: [
      "anger",
      "anger symbol"
    ],
    u: "1f4a2",
    a: "0.6"
  },
  {
    n: [
      "boom",
      "collision",
      "collision symbol"
    ],
    u: "1f4a5",
    a: "0.6"
  },
  {
    n: [
      "dizzy",
      "dizzy symbol"
    ],
    u: "1f4ab",
    a: "0.6"
  },
  {
    n: [
      "sweat drops",
      "splashing sweat symbol"
    ],
    u: "1f4a6",
    a: "0.6"
  },
  {
    n: [
      "dash",
      "dash symbol"
    ],
    u: "1f4a8",
    a: "0.6"
  },
  {
    n: [
      "hole"
    ],
    u: "1f573-fe0f",
    a: "0.7"
  },
  {
    n: [
      "bomb"
    ],
    u: "1f4a3",
    a: "0.6"
  },
  {
    n: [
      "speech balloon"
    ],
    u: "1f4ac",
    a: "0.6"
  },
  {
    n: [
      "eye in speech bubble",
      "eye-in-speech-bubble"
    ],
    u: "1f441-fe0f-200d-1f5e8-fe0f",
    a: "2.0"
  },
  {
    n: [
      "left speech bubble"
    ],
    u: "1f5e8-fe0f",
    a: "2.0"
  },
  {
    n: [
      "right anger bubble"
    ],
    u: "1f5ef-fe0f",
    a: "0.7"
  },
  {
    n: [
      "thought balloon"
    ],
    u: "1f4ad",
    a: "1.0"
  },
  {
    n: [
      "zzz",
      "sleeping symbol"
    ],
    u: "1f4a4",
    a: "0.6"
  },
  {
    n: [
      "wave",
      "waving hand sign"
    ],
    u: "1f44b",
    v: [
      "1f44b-1f3fb",
      "1f44b-1f3fc",
      "1f44b-1f3fd",
      "1f44b-1f3fe",
      "1f44b-1f3ff"
    ],
    a: "0.6"
  },
  {
    n: [
      "raised back of hand"
    ],
    u: "1f91a",
    v: [
      "1f91a-1f3fb",
      "1f91a-1f3fc",
      "1f91a-1f3fd",
      "1f91a-1f3fe",
      "1f91a-1f3ff"
    ],
    a: "3.0"
  },
  {
    n: [
      "hand with fingers splayed",
      "raised hand with fingers splayed"
    ],
    u: "1f590-fe0f",
    v: [
      "1f590-1f3fb",
      "1f590-1f3fc",
      "1f590-1f3fd",
      "1f590-1f3fe",
      "1f590-1f3ff"
    ],
    a: "0.7"
  },
  {
    n: [
      "hand",
      "raised hand"
    ],
    u: "270b",
    v: [
      "270b-1f3fb",
      "270b-1f3fc",
      "270b-1f3fd",
      "270b-1f3fe",
      "270b-1f3ff"
    ],
    a: "0.6"
  },
  {
    n: [
      "spock-hand",
      "raised hand with part between middle and ring fingers"
    ],
    u: "1f596",
    v: [
      "1f596-1f3fb",
      "1f596-1f3fc",
      "1f596-1f3fd",
      "1f596-1f3fe",
      "1f596-1f3ff"
    ],
    a: "1.0"
  },
  {
    n: [
      "rightwards hand"
    ],
    u: "1faf1",
    v: [
      "1faf1-1f3fb",
      "1faf1-1f3fc",
      "1faf1-1f3fd",
      "1faf1-1f3fe",
      "1faf1-1f3ff"
    ],
    a: "14.0"
  },
  {
    n: [
      "leftwards hand"
    ],
    u: "1faf2",
    v: [
      "1faf2-1f3fb",
      "1faf2-1f3fc",
      "1faf2-1f3fd",
      "1faf2-1f3fe",
      "1faf2-1f3ff"
    ],
    a: "14.0"
  },
  {
    n: [
      "palm down hand"
    ],
    u: "1faf3",
    v: [
      "1faf3-1f3fb",
      "1faf3-1f3fc",
      "1faf3-1f3fd",
      "1faf3-1f3fe",
      "1faf3-1f3ff"
    ],
    a: "14.0"
  },
  {
    n: [
      "palm up hand"
    ],
    u: "1faf4",
    v: [
      "1faf4-1f3fb",
      "1faf4-1f3fc",
      "1faf4-1f3fd",
      "1faf4-1f3fe",
      "1faf4-1f3ff"
    ],
    a: "14.0"
  },
  {
    n: [
      "ok hand",
      "ok hand sign"
    ],
    u: "1f44c",
    v: [
      "1f44c-1f3fb",
      "1f44c-1f3fc",
      "1f44c-1f3fd",
      "1f44c-1f3fe",
      "1f44c-1f3ff"
    ],
    a: "0.6"
  },
  {
    n: [
      "pinched fingers"
    ],
    u: "1f90c",
    v: [
      "1f90c-1f3fb",
      "1f90c-1f3fc",
      "1f90c-1f3fd",
      "1f90c-1f3fe",
      "1f90c-1f3ff"
    ],
    a: "13.0"
  },
  {
    n: [
      "pinching hand"
    ],
    u: "1f90f",
    v: [
      "1f90f-1f3fb",
      "1f90f-1f3fc",
      "1f90f-1f3fd",
      "1f90f-1f3fe",
      "1f90f-1f3ff"
    ],
    a: "12.0"
  },
  {
    n: [
      "v",
      "victory hand"
    ],
    u: "270c-fe0f",
    v: [
      "270c-1f3fb",
      "270c-1f3fc",
      "270c-1f3fd",
      "270c-1f3fe",
      "270c-1f3ff"
    ],
    a: "0.6"
  },
  {
    n: [
      "crossed fingers",
      "hand with index and middle fingers crossed"
    ],
    u: "1f91e",
    v: [
      "1f91e-1f3fb",
      "1f91e-1f3fc",
      "1f91e-1f3fd",
      "1f91e-1f3fe",
      "1f91e-1f3ff"
    ],
    a: "3.0"
  },
  {
    n: [
      "hand with index finger and thumb crossed"
    ],
    u: "1faf0",
    v: [
      "1faf0-1f3fb",
      "1faf0-1f3fc",
      "1faf0-1f3fd",
      "1faf0-1f3fe",
      "1faf0-1f3ff"
    ],
    a: "14.0"
  },
  {
    n: [
      "i love you hand sign"
    ],
    u: "1f91f",
    v: [
      "1f91f-1f3fb",
      "1f91f-1f3fc",
      "1f91f-1f3fd",
      "1f91f-1f3fe",
      "1f91f-1f3ff"
    ],
    a: "5.0"
  },
  {
    n: [
      "the horns",
      "sign of the horns"
    ],
    u: "1f918",
    v: [
      "1f918-1f3fb",
      "1f918-1f3fc",
      "1f918-1f3fd",
      "1f918-1f3fe",
      "1f918-1f3ff"
    ],
    a: "1.0"
  },
  {
    n: [
      "call me hand"
    ],
    u: "1f919",
    v: [
      "1f919-1f3fb",
      "1f919-1f3fc",
      "1f919-1f3fd",
      "1f919-1f3fe",
      "1f919-1f3ff"
    ],
    a: "3.0"
  },
  {
    n: [
      "point left",
      "white left pointing backhand index"
    ],
    u: "1f448",
    v: [
      "1f448-1f3fb",
      "1f448-1f3fc",
      "1f448-1f3fd",
      "1f448-1f3fe",
      "1f448-1f3ff"
    ],
    a: "0.6"
  },
  {
    n: [
      "point right",
      "white right pointing backhand index"
    ],
    u: "1f449",
    v: [
      "1f449-1f3fb",
      "1f449-1f3fc",
      "1f449-1f3fd",
      "1f449-1f3fe",
      "1f449-1f3ff"
    ],
    a: "0.6"
  },
  {
    n: [
      "point up 2",
      "white up pointing backhand index"
    ],
    u: "1f446",
    v: [
      "1f446-1f3fb",
      "1f446-1f3fc",
      "1f446-1f3fd",
      "1f446-1f3fe",
      "1f446-1f3ff"
    ],
    a: "0.6"
  },
  {
    n: [
      "middle finger",
      "reversed hand with middle finger extended"
    ],
    u: "1f595",
    v: [
      "1f595-1f3fb",
      "1f595-1f3fc",
      "1f595-1f3fd",
      "1f595-1f3fe",
      "1f595-1f3ff"
    ],
    a: "1.0"
  },
  {
    n: [
      "point down",
      "white down pointing backhand index"
    ],
    u: "1f447",
    v: [
      "1f447-1f3fb",
      "1f447-1f3fc",
      "1f447-1f3fd",
      "1f447-1f3fe",
      "1f447-1f3ff"
    ],
    a: "0.6"
  },
  {
    n: [
      "point up",
      "white up pointing index"
    ],
    u: "261d-fe0f",
    v: [
      "261d-1f3fb",
      "261d-1f3fc",
      "261d-1f3fd",
      "261d-1f3fe",
      "261d-1f3ff"
    ],
    a: "0.6"
  },
  {
    n: [
      "index pointing at the viewer"
    ],
    u: "1faf5",
    v: [
      "1faf5-1f3fb",
      "1faf5-1f3fc",
      "1faf5-1f3fd",
      "1faf5-1f3fe",
      "1faf5-1f3ff"
    ],
    a: "14.0"
  },
  {
    n: [
      "+1",
      "thumbsup",
      "thumbs up sign"
    ],
    u: "1f44d",
    v: [
      "1f44d-1f3fb",
      "1f44d-1f3fc",
      "1f44d-1f3fd",
      "1f44d-1f3fe",
      "1f44d-1f3ff"
    ],
    a: "0.6"
  },
  {
    n: [
      "-1",
      "thumbsdown",
      "thumbs down sign"
    ],
    u: "1f44e",
    v: [
      "1f44e-1f3fb",
      "1f44e-1f3fc",
      "1f44e-1f3fd",
      "1f44e-1f3fe",
      "1f44e-1f3ff"
    ],
    a: "0.6"
  },
  {
    n: [
      "fist",
      "raised fist"
    ],
    u: "270a",
    v: [
      "270a-1f3fb",
      "270a-1f3fc",
      "270a-1f3fd",
      "270a-1f3fe",
      "270a-1f3ff"
    ],
    a: "0.6"
  },
  {
    n: [
      "punch",
      "facepunch",
      "fisted hand sign"
    ],
    u: "1f44a",
    v: [
      "1f44a-1f3fb",
      "1f44a-1f3fc",
      "1f44a-1f3fd",
      "1f44a-1f3fe",
      "1f44a-1f3ff"
    ],
    a: "0.6"
  },
  {
    n: [
      "left-facing fist"
    ],
    u: "1f91b",
    v: [
      "1f91b-1f3fb",
      "1f91b-1f3fc",
      "1f91b-1f3fd",
      "1f91b-1f3fe",
      "1f91b-1f3ff"
    ],
    a: "3.0"
  },
  {
    n: [
      "right-facing fist"
    ],
    u: "1f91c",
    v: [
      "1f91c-1f3fb",
      "1f91c-1f3fc",
      "1f91c-1f3fd",
      "1f91c-1f3fe",
      "1f91c-1f3ff"
    ],
    a: "3.0"
  },
  {
    n: [
      "clap",
      "clapping hands sign"
    ],
    u: "1f44f",
    v: [
      "1f44f-1f3fb",
      "1f44f-1f3fc",
      "1f44f-1f3fd",
      "1f44f-1f3fe",
      "1f44f-1f3ff"
    ],
    a: "0.6"
  },
  {
    n: [
      "raised hands",
      "person raising both hands in celebration"
    ],
    u: "1f64c",
    v: [
      "1f64c-1f3fb",
      "1f64c-1f3fc",
      "1f64c-1f3fd",
      "1f64c-1f3fe",
      "1f64c-1f3ff"
    ],
    a: "0.6"
  },
  {
    n: [
      "heart hands"
    ],
    u: "1faf6",
    v: [
      "1faf6-1f3fb",
      "1faf6-1f3fc",
      "1faf6-1f3fd",
      "1faf6-1f3fe",
      "1faf6-1f3ff"
    ],
    a: "14.0"
  },
  {
    n: [
      "open hands",
      "open hands sign"
    ],
    u: "1f450",
    v: [
      "1f450-1f3fb",
      "1f450-1f3fc",
      "1f450-1f3fd",
      "1f450-1f3fe",
      "1f450-1f3ff"
    ],
    a: "0.6"
  },
  {
    n: [
      "palms up together"
    ],
    u: "1f932",
    v: [
      "1f932-1f3fb",
      "1f932-1f3fc",
      "1f932-1f3fd",
      "1f932-1f3fe",
      "1f932-1f3ff"
    ],
    a: "5.0"
  },
  {
    n: [
      "handshake"
    ],
    u: "1f91d",
    v: [
      "1f91d-1f3fb",
      "1f91d-1f3fc",
      "1f91d-1f3fd",
      "1f91d-1f3fe",
      "1f91d-1f3ff",
      "1faf1-1f3fb-200d-1faf2-1f3fc",
      "1faf1-1f3fb-200d-1faf2-1f3fd",
      "1faf1-1f3fb-200d-1faf2-1f3fe",
      "1faf1-1f3fb-200d-1faf2-1f3ff",
      "1faf1-1f3fc-200d-1faf2-1f3fb",
      "1faf1-1f3fc-200d-1faf2-1f3fd",
      "1faf1-1f3fc-200d-1faf2-1f3fe",
      "1faf1-1f3fc-200d-1faf2-1f3ff",
      "1faf1-1f3fd-200d-1faf2-1f3fb",
      "1faf1-1f3fd-200d-1faf2-1f3fc",
      "1faf1-1f3fd-200d-1faf2-1f3fe",
      "1faf1-1f3fd-200d-1faf2-1f3ff",
      "1faf1-1f3fe-200d-1faf2-1f3fb",
      "1faf1-1f3fe-200d-1faf2-1f3fc",
      "1faf1-1f3fe-200d-1faf2-1f3fd",
      "1faf1-1f3fe-200d-1faf2-1f3ff",
      "1faf1-1f3ff-200d-1faf2-1f3fb",
      "1faf1-1f3ff-200d-1faf2-1f3fc",
      "1faf1-1f3ff-200d-1faf2-1f3fd",
      "1faf1-1f3ff-200d-1faf2-1f3fe"
    ],
    a: "3.0"
  },
  {
    n: [
      "pray",
      "person with folded hands"
    ],
    u: "1f64f",
    v: [
      "1f64f-1f3fb",
      "1f64f-1f3fc",
      "1f64f-1f3fd",
      "1f64f-1f3fe",
      "1f64f-1f3ff"
    ],
    a: "0.6"
  },
  {
    n: [
      "writing hand"
    ],
    u: "270d-fe0f",
    v: [
      "270d-1f3fb",
      "270d-1f3fc",
      "270d-1f3fd",
      "270d-1f3fe",
      "270d-1f3ff"
    ],
    a: "0.7"
  },
  {
    n: [
      "nail care",
      "nail polish"
    ],
    u: "1f485",
    v: [
      "1f485-1f3fb",
      "1f485-1f3fc",
      "1f485-1f3fd",
      "1f485-1f3fe",
      "1f485-1f3ff"
    ],
    a: "0.6"
  },
  {
    n: [
      "selfie"
    ],
    u: "1f933",
    v: [
      "1f933-1f3fb",
      "1f933-1f3fc",
      "1f933-1f3fd",
      "1f933-1f3fe",
      "1f933-1f3ff"
    ],
    a: "3.0"
  },
  {
    n: [
      "muscle",
      "flexed biceps"
    ],
    u: "1f4aa",
    v: [
      "1f4aa-1f3fb",
      "1f4aa-1f3fc",
      "1f4aa-1f3fd",
      "1f4aa-1f3fe",
      "1f4aa-1f3ff"
    ],
    a: "0.6"
  },
  {
    n: [
      "mechanical arm"
    ],
    u: "1f9be",
    a: "12.0"
  },
  {
    n: [
      "mechanical leg"
    ],
    u: "1f9bf",
    a: "12.0"
  },
  {
    n: [
      "leg"
    ],
    u: "1f9b5",
    v: [
      "1f9b5-1f3fb",
      "1f9b5-1f3fc",
      "1f9b5-1f3fd",
      "1f9b5-1f3fe",
      "1f9b5-1f3ff"
    ],
    a: "11.0"
  },
  {
    n: [
      "foot"
    ],
    u: "1f9b6",
    v: [
      "1f9b6-1f3fb",
      "1f9b6-1f3fc",
      "1f9b6-1f3fd",
      "1f9b6-1f3fe",
      "1f9b6-1f3ff"
    ],
    a: "11.0"
  },
  {
    n: [
      "ear"
    ],
    u: "1f442",
    v: [
      "1f442-1f3fb",
      "1f442-1f3fc",
      "1f442-1f3fd",
      "1f442-1f3fe",
      "1f442-1f3ff"
    ],
    a: "0.6"
  },
  {
    n: [
      "ear with hearing aid"
    ],
    u: "1f9bb",
    v: [
      "1f9bb-1f3fb",
      "1f9bb-1f3fc",
      "1f9bb-1f3fd",
      "1f9bb-1f3fe",
      "1f9bb-1f3ff"
    ],
    a: "12.0"
  },
  {
    n: [
      "nose"
    ],
    u: "1f443",
    v: [
      "1f443-1f3fb",
      "1f443-1f3fc",
      "1f443-1f3fd",
      "1f443-1f3fe",
      "1f443-1f3ff"
    ],
    a: "0.6"
  },
  {
    n: [
      "brain"
    ],
    u: "1f9e0",
    a: "5.0"
  },
  {
    n: [
      "anatomical heart"
    ],
    u: "1fac0",
    a: "13.0"
  },
  {
    n: [
      "lungs"
    ],
    u: "1fac1",
    a: "13.0"
  },
  {
    n: [
      "tooth"
    ],
    u: "1f9b7",
    a: "11.0"
  },
  {
    n: [
      "bone"
    ],
    u: "1f9b4",
    a: "11.0"
  },
  {
    n: [
      "eyes"
    ],
    u: "1f440",
    a: "0.6"
  },
  {
    n: [
      "eye"
    ],
    u: "1f441-fe0f",
    a: "0.7"
  },
  {
    n: [
      "tongue"
    ],
    u: "1f445",
    a: "0.6"
  },
  {
    n: [
      "lips",
      "mouth"
    ],
    u: "1f444",
    a: "0.6"
  },
  {
    n: [
      "biting lip"
    ],
    u: "1fae6",
    a: "14.0"
  },
  {
    n: [
      "baby"
    ],
    u: "1f476",
    v: [
      "1f476-1f3fb",
      "1f476-1f3fc",
      "1f476-1f3fd",
      "1f476-1f3fe",
      "1f476-1f3ff"
    ],
    a: "0.6"
  },
  {
    n: [
      "child"
    ],
    u: "1f9d2",
    v: [
      "1f9d2-1f3fb",
      "1f9d2-1f3fc",
      "1f9d2-1f3fd",
      "1f9d2-1f3fe",
      "1f9d2-1f3ff"
    ],
    a: "5.0"
  },
  {
    n: [
      "boy"
    ],
    u: "1f466",
    v: [
      "1f466-1f3fb",
      "1f466-1f3fc",
      "1f466-1f3fd",
      "1f466-1f3fe",
      "1f466-1f3ff"
    ],
    a: "0.6"
  },
  {
    n: [
      "girl"
    ],
    u: "1f467",
    v: [
      "1f467-1f3fb",
      "1f467-1f3fc",
      "1f467-1f3fd",
      "1f467-1f3fe",
      "1f467-1f3ff"
    ],
    a: "0.6"
  },
  {
    n: [
      "adult"
    ],
    u: "1f9d1",
    v: [
      "1f9d1-1f3fb",
      "1f9d1-1f3fc",
      "1f9d1-1f3fd",
      "1f9d1-1f3fe",
      "1f9d1-1f3ff"
    ],
    a: "5.0"
  },
  {
    n: [
      "person with blond hair"
    ],
    u: "1f471",
    v: [
      "1f471-1f3fb",
      "1f471-1f3fc",
      "1f471-1f3fd",
      "1f471-1f3fe",
      "1f471-1f3ff"
    ],
    a: "0.6"
  },
  {
    n: [
      "man"
    ],
    u: "1f468",
    v: [
      "1f468-1f3fb",
      "1f468-1f3fc",
      "1f468-1f3fd",
      "1f468-1f3fe",
      "1f468-1f3ff"
    ],
    a: "0.6"
  },
  {
    n: [
      "bearded person"
    ],
    u: "1f9d4",
    v: [
      "1f9d4-1f3fb",
      "1f9d4-1f3fc",
      "1f9d4-1f3fd",
      "1f9d4-1f3fe",
      "1f9d4-1f3ff"
    ],
    a: "5.0"
  },
  {
    n: [
      "man: beard",
      "man with beard"
    ],
    u: "1f9d4-200d-2642-fe0f",
    v: [
      "1f9d4-1f3fb-200d-2642-fe0f",
      "1f9d4-1f3fc-200d-2642-fe0f",
      "1f9d4-1f3fd-200d-2642-fe0f",
      "1f9d4-1f3fe-200d-2642-fe0f",
      "1f9d4-1f3ff-200d-2642-fe0f"
    ],
    a: "13.1"
  },
  {
    n: [
      "woman: beard",
      "woman with beard"
    ],
    u: "1f9d4-200d-2640-fe0f",
    v: [
      "1f9d4-1f3fb-200d-2640-fe0f",
      "1f9d4-1f3fc-200d-2640-fe0f",
      "1f9d4-1f3fd-200d-2640-fe0f",
      "1f9d4-1f3fe-200d-2640-fe0f",
      "1f9d4-1f3ff-200d-2640-fe0f"
    ],
    a: "13.1"
  },
  {
    n: [
      "man: red hair",
      "red haired man"
    ],
    u: "1f468-200d-1f9b0",
    v: [
      "1f468-1f3fb-200d-1f9b0",
      "1f468-1f3fc-200d-1f9b0",
      "1f468-1f3fd-200d-1f9b0",
      "1f468-1f3fe-200d-1f9b0",
      "1f468-1f3ff-200d-1f9b0"
    ],
    a: "11.0"
  },
  {
    n: [
      "man: curly hair",
      "curly haired man"
    ],
    u: "1f468-200d-1f9b1",
    v: [
      "1f468-1f3fb-200d-1f9b1",
      "1f468-1f3fc-200d-1f9b1",
      "1f468-1f3fd-200d-1f9b1",
      "1f468-1f3fe-200d-1f9b1",
      "1f468-1f3ff-200d-1f9b1"
    ],
    a: "11.0"
  },
  {
    n: [
      "man: white hair",
      "white haired man"
    ],
    u: "1f468-200d-1f9b3",
    v: [
      "1f468-1f3fb-200d-1f9b3",
      "1f468-1f3fc-200d-1f9b3",
      "1f468-1f3fd-200d-1f9b3",
      "1f468-1f3fe-200d-1f9b3",
      "1f468-1f3ff-200d-1f9b3"
    ],
    a: "11.0"
  },
  {
    n: [
      "bald man",
      "man: bald"
    ],
    u: "1f468-200d-1f9b2",
    v: [
      "1f468-1f3fb-200d-1f9b2",
      "1f468-1f3fc-200d-1f9b2",
      "1f468-1f3fd-200d-1f9b2",
      "1f468-1f3fe-200d-1f9b2",
      "1f468-1f3ff-200d-1f9b2"
    ],
    a: "11.0"
  },
  {
    n: [
      "woman"
    ],
    u: "1f469",
    v: [
      "1f469-1f3fb",
      "1f469-1f3fc",
      "1f469-1f3fd",
      "1f469-1f3fe",
      "1f469-1f3ff"
    ],
    a: "0.6"
  },
  {
    n: [
      "woman: red hair",
      "red haired woman"
    ],
    u: "1f469-200d-1f9b0",
    v: [
      "1f469-1f3fb-200d-1f9b0",
      "1f469-1f3fc-200d-1f9b0",
      "1f469-1f3fd-200d-1f9b0",
      "1f469-1f3fe-200d-1f9b0",
      "1f469-1f3ff-200d-1f9b0"
    ],
    a: "11.0"
  },
  {
    n: [
      "person: red hair",
      "red haired person"
    ],
    u: "1f9d1-200d-1f9b0",
    v: [
      "1f9d1-1f3fb-200d-1f9b0",
      "1f9d1-1f3fc-200d-1f9b0",
      "1f9d1-1f3fd-200d-1f9b0",
      "1f9d1-1f3fe-200d-1f9b0",
      "1f9d1-1f3ff-200d-1f9b0"
    ],
    a: "12.1"
  },
  {
    n: [
      "woman: curly hair",
      "curly haired woman"
    ],
    u: "1f469-200d-1f9b1",
    v: [
      "1f469-1f3fb-200d-1f9b1",
      "1f469-1f3fc-200d-1f9b1",
      "1f469-1f3fd-200d-1f9b1",
      "1f469-1f3fe-200d-1f9b1",
      "1f469-1f3ff-200d-1f9b1"
    ],
    a: "11.0"
  },
  {
    n: [
      "person: curly hair",
      "curly haired person"
    ],
    u: "1f9d1-200d-1f9b1",
    v: [
      "1f9d1-1f3fb-200d-1f9b1",
      "1f9d1-1f3fc-200d-1f9b1",
      "1f9d1-1f3fd-200d-1f9b1",
      "1f9d1-1f3fe-200d-1f9b1",
      "1f9d1-1f3ff-200d-1f9b1"
    ],
    a: "12.1"
  },
  {
    n: [
      "woman: white hair",
      "white haired woman"
    ],
    u: "1f469-200d-1f9b3",
    v: [
      "1f469-1f3fb-200d-1f9b3",
      "1f469-1f3fc-200d-1f9b3",
      "1f469-1f3fd-200d-1f9b3",
      "1f469-1f3fe-200d-1f9b3",
      "1f469-1f3ff-200d-1f9b3"
    ],
    a: "11.0"
  },
  {
    n: [
      "person: white hair",
      "white haired person"
    ],
    u: "1f9d1-200d-1f9b3",
    v: [
      "1f9d1-1f3fb-200d-1f9b3",
      "1f9d1-1f3fc-200d-1f9b3",
      "1f9d1-1f3fd-200d-1f9b3",
      "1f9d1-1f3fe-200d-1f9b3",
      "1f9d1-1f3ff-200d-1f9b3"
    ],
    a: "12.1"
  },
  {
    n: [
      "bald woman",
      "woman: bald"
    ],
    u: "1f469-200d-1f9b2",
    v: [
      "1f469-1f3fb-200d-1f9b2",
      "1f469-1f3fc-200d-1f9b2",
      "1f469-1f3fd-200d-1f9b2",
      "1f469-1f3fe-200d-1f9b2",
      "1f469-1f3ff-200d-1f9b2"
    ],
    a: "11.0"
  },
  {
    n: [
      "bald person",
      "person: bald"
    ],
    u: "1f9d1-200d-1f9b2",
    v: [
      "1f9d1-1f3fb-200d-1f9b2",
      "1f9d1-1f3fc-200d-1f9b2",
      "1f9d1-1f3fd-200d-1f9b2",
      "1f9d1-1f3fe-200d-1f9b2",
      "1f9d1-1f3ff-200d-1f9b2"
    ],
    a: "12.1"
  },
  {
    n: [
      "woman: blond hair",
      "blond-haired-woman"
    ],
    u: "1f471-200d-2640-fe0f",
    v: [
      "1f471-1f3fb-200d-2640-fe0f",
      "1f471-1f3fc-200d-2640-fe0f",
      "1f471-1f3fd-200d-2640-fe0f",
      "1f471-1f3fe-200d-2640-fe0f",
      "1f471-1f3ff-200d-2640-fe0f"
    ],
    a: "4.0"
  },
  {
    n: [
      "man: blond hair",
      "blond-haired-man"
    ],
    u: "1f471-200d-2642-fe0f",
    v: [
      "1f471-1f3fb-200d-2642-fe0f",
      "1f471-1f3fc-200d-2642-fe0f",
      "1f471-1f3fd-200d-2642-fe0f",
      "1f471-1f3fe-200d-2642-fe0f",
      "1f471-1f3ff-200d-2642-fe0f"
    ],
    a: "4.0"
  },
  {
    n: [
      "older adult"
    ],
    u: "1f9d3",
    v: [
      "1f9d3-1f3fb",
      "1f9d3-1f3fc",
      "1f9d3-1f3fd",
      "1f9d3-1f3fe",
      "1f9d3-1f3ff"
    ],
    a: "5.0"
  },
  {
    n: [
      "older man"
    ],
    u: "1f474",
    v: [
      "1f474-1f3fb",
      "1f474-1f3fc",
      "1f474-1f3fd",
      "1f474-1f3fe",
      "1f474-1f3ff"
    ],
    a: "0.6"
  },
  {
    n: [
      "older woman"
    ],
    u: "1f475",
    v: [
      "1f475-1f3fb",
      "1f475-1f3fc",
      "1f475-1f3fd",
      "1f475-1f3fe",
      "1f475-1f3ff"
    ],
    a: "0.6"
  },
  {
    n: [
      "person frowning"
    ],
    u: "1f64d",
    v: [
      "1f64d-1f3fb",
      "1f64d-1f3fc",
      "1f64d-1f3fd",
      "1f64d-1f3fe",
      "1f64d-1f3ff"
    ],
    a: "0.6"
  },
  {
    n: [
      "man frowning",
      "man-frowning"
    ],
    u: "1f64d-200d-2642-fe0f",
    v: [
      "1f64d-1f3fb-200d-2642-fe0f",
      "1f64d-1f3fc-200d-2642-fe0f",
      "1f64d-1f3fd-200d-2642-fe0f",
      "1f64d-1f3fe-200d-2642-fe0f",
      "1f64d-1f3ff-200d-2642-fe0f"
    ],
    a: "4.0"
  },
  {
    n: [
      "woman frowning",
      "woman-frowning"
    ],
    u: "1f64d-200d-2640-fe0f",
    v: [
      "1f64d-1f3fb-200d-2640-fe0f",
      "1f64d-1f3fc-200d-2640-fe0f",
      "1f64d-1f3fd-200d-2640-fe0f",
      "1f64d-1f3fe-200d-2640-fe0f",
      "1f64d-1f3ff-200d-2640-fe0f"
    ],
    a: "4.0"
  },
  {
    n: [
      "person with pouting face"
    ],
    u: "1f64e",
    v: [
      "1f64e-1f3fb",
      "1f64e-1f3fc",
      "1f64e-1f3fd",
      "1f64e-1f3fe",
      "1f64e-1f3ff"
    ],
    a: "0.6"
  },
  {
    n: [
      "man pouting",
      "man-pouting"
    ],
    u: "1f64e-200d-2642-fe0f",
    v: [
      "1f64e-1f3fb-200d-2642-fe0f",
      "1f64e-1f3fc-200d-2642-fe0f",
      "1f64e-1f3fd-200d-2642-fe0f",
      "1f64e-1f3fe-200d-2642-fe0f",
      "1f64e-1f3ff-200d-2642-fe0f"
    ],
    a: "4.0"
  },
  {
    n: [
      "woman pouting",
      "woman-pouting"
    ],
    u: "1f64e-200d-2640-fe0f",
    v: [
      "1f64e-1f3fb-200d-2640-fe0f",
      "1f64e-1f3fc-200d-2640-fe0f",
      "1f64e-1f3fd-200d-2640-fe0f",
      "1f64e-1f3fe-200d-2640-fe0f",
      "1f64e-1f3ff-200d-2640-fe0f"
    ],
    a: "4.0"
  },
  {
    n: [
      "no good",
      "face with no good gesture"
    ],
    u: "1f645",
    v: [
      "1f645-1f3fb",
      "1f645-1f3fc",
      "1f645-1f3fd",
      "1f645-1f3fe",
      "1f645-1f3ff"
    ],
    a: "0.6"
  },
  {
    n: [
      "man gesturing no",
      "man-gesturing-no"
    ],
    u: "1f645-200d-2642-fe0f",
    v: [
      "1f645-1f3fb-200d-2642-fe0f",
      "1f645-1f3fc-200d-2642-fe0f",
      "1f645-1f3fd-200d-2642-fe0f",
      "1f645-1f3fe-200d-2642-fe0f",
      "1f645-1f3ff-200d-2642-fe0f"
    ],
    a: "4.0"
  },
  {
    n: [
      "woman gesturing no",
      "woman-gesturing-no"
    ],
    u: "1f645-200d-2640-fe0f",
    v: [
      "1f645-1f3fb-200d-2640-fe0f",
      "1f645-1f3fc-200d-2640-fe0f",
      "1f645-1f3fd-200d-2640-fe0f",
      "1f645-1f3fe-200d-2640-fe0f",
      "1f645-1f3ff-200d-2640-fe0f"
    ],
    a: "4.0"
  },
  {
    n: [
      "ok woman",
      "face with ok gesture"
    ],
    u: "1f646",
    v: [
      "1f646-1f3fb",
      "1f646-1f3fc",
      "1f646-1f3fd",
      "1f646-1f3fe",
      "1f646-1f3ff"
    ],
    a: "0.6"
  },
  {
    n: [
      "man gesturing ok",
      "man-gesturing-ok"
    ],
    u: "1f646-200d-2642-fe0f",
    v: [
      "1f646-1f3fb-200d-2642-fe0f",
      "1f646-1f3fc-200d-2642-fe0f",
      "1f646-1f3fd-200d-2642-fe0f",
      "1f646-1f3fe-200d-2642-fe0f",
      "1f646-1f3ff-200d-2642-fe0f"
    ],
    a: "4.0"
  },
  {
    n: [
      "woman gesturing ok",
      "woman-gesturing-ok"
    ],
    u: "1f646-200d-2640-fe0f",
    v: [
      "1f646-1f3fb-200d-2640-fe0f",
      "1f646-1f3fc-200d-2640-fe0f",
      "1f646-1f3fd-200d-2640-fe0f",
      "1f646-1f3fe-200d-2640-fe0f",
      "1f646-1f3ff-200d-2640-fe0f"
    ],
    a: "4.0"
  },
  {
    n: [
      "information desk person"
    ],
    u: "1f481",
    v: [
      "1f481-1f3fb",
      "1f481-1f3fc",
      "1f481-1f3fd",
      "1f481-1f3fe",
      "1f481-1f3ff"
    ],
    a: "0.6"
  },
  {
    n: [
      "man tipping hand",
      "man-tipping-hand"
    ],
    u: "1f481-200d-2642-fe0f",
    v: [
      "1f481-1f3fb-200d-2642-fe0f",
      "1f481-1f3fc-200d-2642-fe0f",
      "1f481-1f3fd-200d-2642-fe0f",
      "1f481-1f3fe-200d-2642-fe0f",
      "1f481-1f3ff-200d-2642-fe0f"
    ],
    a: "4.0"
  },
  {
    n: [
      "woman tipping hand",
      "woman-tipping-hand"
    ],
    u: "1f481-200d-2640-fe0f",
    v: [
      "1f481-1f3fb-200d-2640-fe0f",
      "1f481-1f3fc-200d-2640-fe0f",
      "1f481-1f3fd-200d-2640-fe0f",
      "1f481-1f3fe-200d-2640-fe0f",
      "1f481-1f3ff-200d-2640-fe0f"
    ],
    a: "4.0"
  },
  {
    n: [
      "raising hand",
      "happy person raising one hand"
    ],
    u: "1f64b",
    v: [
      "1f64b-1f3fb",
      "1f64b-1f3fc",
      "1f64b-1f3fd",
      "1f64b-1f3fe",
      "1f64b-1f3ff"
    ],
    a: "0.6"
  },
  {
    n: [
      "man raising hand",
      "man-raising-hand"
    ],
    u: "1f64b-200d-2642-fe0f",
    v: [
      "1f64b-1f3fb-200d-2642-fe0f",
      "1f64b-1f3fc-200d-2642-fe0f",
      "1f64b-1f3fd-200d-2642-fe0f",
      "1f64b-1f3fe-200d-2642-fe0f",
      "1f64b-1f3ff-200d-2642-fe0f"
    ],
    a: "4.0"
  },
  {
    n: [
      "woman raising hand",
      "woman-raising-hand"
    ],
    u: "1f64b-200d-2640-fe0f",
    v: [
      "1f64b-1f3fb-200d-2640-fe0f",
      "1f64b-1f3fc-200d-2640-fe0f",
      "1f64b-1f3fd-200d-2640-fe0f",
      "1f64b-1f3fe-200d-2640-fe0f",
      "1f64b-1f3ff-200d-2640-fe0f"
    ],
    a: "4.0"
  },
  {
    n: [
      "deaf person"
    ],
    u: "1f9cf",
    v: [
      "1f9cf-1f3fb",
      "1f9cf-1f3fc",
      "1f9cf-1f3fd",
      "1f9cf-1f3fe",
      "1f9cf-1f3ff"
    ],
    a: "12.0"
  },
  {
    n: [
      "deaf man"
    ],
    u: "1f9cf-200d-2642-fe0f",
    v: [
      "1f9cf-1f3fb-200d-2642-fe0f",
      "1f9cf-1f3fc-200d-2642-fe0f",
      "1f9cf-1f3fd-200d-2642-fe0f",
      "1f9cf-1f3fe-200d-2642-fe0f",
      "1f9cf-1f3ff-200d-2642-fe0f"
    ],
    a: "12.0"
  },
  {
    n: [
      "deaf woman"
    ],
    u: "1f9cf-200d-2640-fe0f",
    v: [
      "1f9cf-1f3fb-200d-2640-fe0f",
      "1f9cf-1f3fc-200d-2640-fe0f",
      "1f9cf-1f3fd-200d-2640-fe0f",
      "1f9cf-1f3fe-200d-2640-fe0f",
      "1f9cf-1f3ff-200d-2640-fe0f"
    ],
    a: "12.0"
  },
  {
    n: [
      "bow",
      "person bowing deeply"
    ],
    u: "1f647",
    v: [
      "1f647-1f3fb",
      "1f647-1f3fc",
      "1f647-1f3fd",
      "1f647-1f3fe",
      "1f647-1f3ff"
    ],
    a: "0.6"
  },
  {
    n: [
      "man bowing",
      "man-bowing"
    ],
    u: "1f647-200d-2642-fe0f",
    v: [
      "1f647-1f3fb-200d-2642-fe0f",
      "1f647-1f3fc-200d-2642-fe0f",
      "1f647-1f3fd-200d-2642-fe0f",
      "1f647-1f3fe-200d-2642-fe0f",
      "1f647-1f3ff-200d-2642-fe0f"
    ],
    a: "4.0"
  },
  {
    n: [
      "woman bowing",
      "woman-bowing"
    ],
    u: "1f647-200d-2640-fe0f",
    v: [
      "1f647-1f3fb-200d-2640-fe0f",
      "1f647-1f3fc-200d-2640-fe0f",
      "1f647-1f3fd-200d-2640-fe0f",
      "1f647-1f3fe-200d-2640-fe0f",
      "1f647-1f3ff-200d-2640-fe0f"
    ],
    a: "4.0"
  },
  {
    n: [
      "face palm"
    ],
    u: "1f926",
    v: [
      "1f926-1f3fb",
      "1f926-1f3fc",
      "1f926-1f3fd",
      "1f926-1f3fe",
      "1f926-1f3ff"
    ],
    a: "3.0"
  },
  {
    n: [
      "man facepalming",
      "man-facepalming"
    ],
    u: "1f926-200d-2642-fe0f",
    v: [
      "1f926-1f3fb-200d-2642-fe0f",
      "1f926-1f3fc-200d-2642-fe0f",
      "1f926-1f3fd-200d-2642-fe0f",
      "1f926-1f3fe-200d-2642-fe0f",
      "1f926-1f3ff-200d-2642-fe0f"
    ],
    a: "4.0"
  },
  {
    n: [
      "woman facepalming",
      "woman-facepalming"
    ],
    u: "1f926-200d-2640-fe0f",
    v: [
      "1f926-1f3fb-200d-2640-fe0f",
      "1f926-1f3fc-200d-2640-fe0f",
      "1f926-1f3fd-200d-2640-fe0f",
      "1f926-1f3fe-200d-2640-fe0f",
      "1f926-1f3ff-200d-2640-fe0f"
    ],
    a: "4.0"
  },
  {
    n: [
      "shrug"
    ],
    u: "1f937",
    v: [
      "1f937-1f3fb",
      "1f937-1f3fc",
      "1f937-1f3fd",
      "1f937-1f3fe",
      "1f937-1f3ff"
    ],
    a: "3.0"
  },
  {
    n: [
      "man shrugging",
      "man-shrugging"
    ],
    u: "1f937-200d-2642-fe0f",
    v: [
      "1f937-1f3fb-200d-2642-fe0f",
      "1f937-1f3fc-200d-2642-fe0f",
      "1f937-1f3fd-200d-2642-fe0f",
      "1f937-1f3fe-200d-2642-fe0f",
      "1f937-1f3ff-200d-2642-fe0f"
    ],
    a: "4.0"
  },
  {
    n: [
      "woman shrugging",
      "woman-shrugging"
    ],
    u: "1f937-200d-2640-fe0f",
    v: [
      "1f937-1f3fb-200d-2640-fe0f",
      "1f937-1f3fc-200d-2640-fe0f",
      "1f937-1f3fd-200d-2640-fe0f",
      "1f937-1f3fe-200d-2640-fe0f",
      "1f937-1f3ff-200d-2640-fe0f"
    ],
    a: "4.0"
  },
  {
    n: [
      "health worker"
    ],
    u: "1f9d1-200d-2695-fe0f",
    v: [
      "1f9d1-1f3fb-200d-2695-fe0f",
      "1f9d1-1f3fc-200d-2695-fe0f",
      "1f9d1-1f3fd-200d-2695-fe0f",
      "1f9d1-1f3fe-200d-2695-fe0f",
      "1f9d1-1f3ff-200d-2695-fe0f"
    ],
    a: "12.1"
  },
  {
    n: [
      "male-doctor",
      "man health worker"
    ],
    u: "1f468-200d-2695-fe0f",
    v: [
      "1f468-1f3fb-200d-2695-fe0f",
      "1f468-1f3fc-200d-2695-fe0f",
      "1f468-1f3fd-200d-2695-fe0f",
      "1f468-1f3fe-200d-2695-fe0f",
      "1f468-1f3ff-200d-2695-fe0f"
    ],
    a: "4.0"
  },
  {
    n: [
      "female-doctor",
      "woman health worker"
    ],
    u: "1f469-200d-2695-fe0f",
    v: [
      "1f469-1f3fb-200d-2695-fe0f",
      "1f469-1f3fc-200d-2695-fe0f",
      "1f469-1f3fd-200d-2695-fe0f",
      "1f469-1f3fe-200d-2695-fe0f",
      "1f469-1f3ff-200d-2695-fe0f"
    ],
    a: "4.0"
  },
  {
    n: [
      "student"
    ],
    u: "1f9d1-200d-1f393",
    v: [
      "1f9d1-1f3fb-200d-1f393",
      "1f9d1-1f3fc-200d-1f393",
      "1f9d1-1f3fd-200d-1f393",
      "1f9d1-1f3fe-200d-1f393",
      "1f9d1-1f3ff-200d-1f393"
    ],
    a: "12.1"
  },
  {
    n: [
      "man student",
      "male-student"
    ],
    u: "1f468-200d-1f393",
    v: [
      "1f468-1f3fb-200d-1f393",
      "1f468-1f3fc-200d-1f393",
      "1f468-1f3fd-200d-1f393",
      "1f468-1f3fe-200d-1f393",
      "1f468-1f3ff-200d-1f393"
    ],
    a: "4.0"
  },
  {
    n: [
      "woman student",
      "female-student"
    ],
    u: "1f469-200d-1f393",
    v: [
      "1f469-1f3fb-200d-1f393",
      "1f469-1f3fc-200d-1f393",
      "1f469-1f3fd-200d-1f393",
      "1f469-1f3fe-200d-1f393",
      "1f469-1f3ff-200d-1f393"
    ],
    a: "4.0"
  },
  {
    n: [
      "teacher"
    ],
    u: "1f9d1-200d-1f3eb",
    v: [
      "1f9d1-1f3fb-200d-1f3eb",
      "1f9d1-1f3fc-200d-1f3eb",
      "1f9d1-1f3fd-200d-1f3eb",
      "1f9d1-1f3fe-200d-1f3eb",
      "1f9d1-1f3ff-200d-1f3eb"
    ],
    a: "12.1"
  },
  {
    n: [
      "man teacher",
      "male-teacher"
    ],
    u: "1f468-200d-1f3eb",
    v: [
      "1f468-1f3fb-200d-1f3eb",
      "1f468-1f3fc-200d-1f3eb",
      "1f468-1f3fd-200d-1f3eb",
      "1f468-1f3fe-200d-1f3eb",
      "1f468-1f3ff-200d-1f3eb"
    ],
    a: "4.0"
  },
  {
    n: [
      "woman teacher",
      "female-teacher"
    ],
    u: "1f469-200d-1f3eb",
    v: [
      "1f469-1f3fb-200d-1f3eb",
      "1f469-1f3fc-200d-1f3eb",
      "1f469-1f3fd-200d-1f3eb",
      "1f469-1f3fe-200d-1f3eb",
      "1f469-1f3ff-200d-1f3eb"
    ],
    a: "4.0"
  },
  {
    n: [
      "judge"
    ],
    u: "1f9d1-200d-2696-fe0f",
    v: [
      "1f9d1-1f3fb-200d-2696-fe0f",
      "1f9d1-1f3fc-200d-2696-fe0f",
      "1f9d1-1f3fd-200d-2696-fe0f",
      "1f9d1-1f3fe-200d-2696-fe0f",
      "1f9d1-1f3ff-200d-2696-fe0f"
    ],
    a: "12.1"
  },
  {
    n: [
      "man judge",
      "male-judge"
    ],
    u: "1f468-200d-2696-fe0f",
    v: [
      "1f468-1f3fb-200d-2696-fe0f",
      "1f468-1f3fc-200d-2696-fe0f",
      "1f468-1f3fd-200d-2696-fe0f",
      "1f468-1f3fe-200d-2696-fe0f",
      "1f468-1f3ff-200d-2696-fe0f"
    ],
    a: "4.0"
  },
  {
    n: [
      "woman judge",
      "female-judge"
    ],
    u: "1f469-200d-2696-fe0f",
    v: [
      "1f469-1f3fb-200d-2696-fe0f",
      "1f469-1f3fc-200d-2696-fe0f",
      "1f469-1f3fd-200d-2696-fe0f",
      "1f469-1f3fe-200d-2696-fe0f",
      "1f469-1f3ff-200d-2696-fe0f"
    ],
    a: "4.0"
  },
  {
    n: [
      "farmer"
    ],
    u: "1f9d1-200d-1f33e",
    v: [
      "1f9d1-1f3fb-200d-1f33e",
      "1f9d1-1f3fc-200d-1f33e",
      "1f9d1-1f3fd-200d-1f33e",
      "1f9d1-1f3fe-200d-1f33e",
      "1f9d1-1f3ff-200d-1f33e"
    ],
    a: "12.1"
  },
  {
    n: [
      "man farmer",
      "male-farmer"
    ],
    u: "1f468-200d-1f33e",
    v: [
      "1f468-1f3fb-200d-1f33e",
      "1f468-1f3fc-200d-1f33e",
      "1f468-1f3fd-200d-1f33e",
      "1f468-1f3fe-200d-1f33e",
      "1f468-1f3ff-200d-1f33e"
    ],
    a: "4.0"
  },
  {
    n: [
      "woman farmer",
      "female-farmer"
    ],
    u: "1f469-200d-1f33e",
    v: [
      "1f469-1f3fb-200d-1f33e",
      "1f469-1f3fc-200d-1f33e",
      "1f469-1f3fd-200d-1f33e",
      "1f469-1f3fe-200d-1f33e",
      "1f469-1f3ff-200d-1f33e"
    ],
    a: "4.0"
  },
  {
    n: [
      "cook"
    ],
    u: "1f9d1-200d-1f373",
    v: [
      "1f9d1-1f3fb-200d-1f373",
      "1f9d1-1f3fc-200d-1f373",
      "1f9d1-1f3fd-200d-1f373",
      "1f9d1-1f3fe-200d-1f373",
      "1f9d1-1f3ff-200d-1f373"
    ],
    a: "12.1"
  },
  {
    n: [
      "man cook",
      "male-cook"
    ],
    u: "1f468-200d-1f373",
    v: [
      "1f468-1f3fb-200d-1f373",
      "1f468-1f3fc-200d-1f373",
      "1f468-1f3fd-200d-1f373",
      "1f468-1f3fe-200d-1f373",
      "1f468-1f3ff-200d-1f373"
    ],
    a: "4.0"
  },
  {
    n: [
      "woman cook",
      "female-cook"
    ],
    u: "1f469-200d-1f373",
    v: [
      "1f469-1f3fb-200d-1f373",
      "1f469-1f3fc-200d-1f373",
      "1f469-1f3fd-200d-1f373",
      "1f469-1f3fe-200d-1f373",
      "1f469-1f3ff-200d-1f373"
    ],
    a: "4.0"
  },
  {
    n: [
      "mechanic"
    ],
    u: "1f9d1-200d-1f527",
    v: [
      "1f9d1-1f3fb-200d-1f527",
      "1f9d1-1f3fc-200d-1f527",
      "1f9d1-1f3fd-200d-1f527",
      "1f9d1-1f3fe-200d-1f527",
      "1f9d1-1f3ff-200d-1f527"
    ],
    a: "12.1"
  },
  {
    n: [
      "man mechanic",
      "male-mechanic"
    ],
    u: "1f468-200d-1f527",
    v: [
      "1f468-1f3fb-200d-1f527",
      "1f468-1f3fc-200d-1f527",
      "1f468-1f3fd-200d-1f527",
      "1f468-1f3fe-200d-1f527",
      "1f468-1f3ff-200d-1f527"
    ],
    a: "4.0"
  },
  {
    n: [
      "woman mechanic",
      "female-mechanic"
    ],
    u: "1f469-200d-1f527",
    v: [
      "1f469-1f3fb-200d-1f527",
      "1f469-1f3fc-200d-1f527",
      "1f469-1f3fd-200d-1f527",
      "1f469-1f3fe-200d-1f527",
      "1f469-1f3ff-200d-1f527"
    ],
    a: "4.0"
  },
  {
    n: [
      "factory worker"
    ],
    u: "1f9d1-200d-1f3ed",
    v: [
      "1f9d1-1f3fb-200d-1f3ed",
      "1f9d1-1f3fc-200d-1f3ed",
      "1f9d1-1f3fd-200d-1f3ed",
      "1f9d1-1f3fe-200d-1f3ed",
      "1f9d1-1f3ff-200d-1f3ed"
    ],
    a: "12.1"
  },
  {
    n: [
      "man factory worker",
      "male-factory-worker"
    ],
    u: "1f468-200d-1f3ed",
    v: [
      "1f468-1f3fb-200d-1f3ed",
      "1f468-1f3fc-200d-1f3ed",
      "1f468-1f3fd-200d-1f3ed",
      "1f468-1f3fe-200d-1f3ed",
      "1f468-1f3ff-200d-1f3ed"
    ],
    a: "4.0"
  },
  {
    n: [
      "woman factory worker",
      "female-factory-worker"
    ],
    u: "1f469-200d-1f3ed",
    v: [
      "1f469-1f3fb-200d-1f3ed",
      "1f469-1f3fc-200d-1f3ed",
      "1f469-1f3fd-200d-1f3ed",
      "1f469-1f3fe-200d-1f3ed",
      "1f469-1f3ff-200d-1f3ed"
    ],
    a: "4.0"
  },
  {
    n: [
      "office worker"
    ],
    u: "1f9d1-200d-1f4bc",
    v: [
      "1f9d1-1f3fb-200d-1f4bc",
      "1f9d1-1f3fc-200d-1f4bc",
      "1f9d1-1f3fd-200d-1f4bc",
      "1f9d1-1f3fe-200d-1f4bc",
      "1f9d1-1f3ff-200d-1f4bc"
    ],
    a: "12.1"
  },
  {
    n: [
      "man office worker",
      "male-office-worker"
    ],
    u: "1f468-200d-1f4bc",
    v: [
      "1f468-1f3fb-200d-1f4bc",
      "1f468-1f3fc-200d-1f4bc",
      "1f468-1f3fd-200d-1f4bc",
      "1f468-1f3fe-200d-1f4bc",
      "1f468-1f3ff-200d-1f4bc"
    ],
    a: "4.0"
  },
  {
    n: [
      "woman office worker",
      "female-office-worker"
    ],
    u: "1f469-200d-1f4bc",
    v: [
      "1f469-1f3fb-200d-1f4bc",
      "1f469-1f3fc-200d-1f4bc",
      "1f469-1f3fd-200d-1f4bc",
      "1f469-1f3fe-200d-1f4bc",
      "1f469-1f3ff-200d-1f4bc"
    ],
    a: "4.0"
  },
  {
    n: [
      "scientist"
    ],
    u: "1f9d1-200d-1f52c",
    v: [
      "1f9d1-1f3fb-200d-1f52c",
      "1f9d1-1f3fc-200d-1f52c",
      "1f9d1-1f3fd-200d-1f52c",
      "1f9d1-1f3fe-200d-1f52c",
      "1f9d1-1f3ff-200d-1f52c"
    ],
    a: "12.1"
  },
  {
    n: [
      "man scientist",
      "male-scientist"
    ],
    u: "1f468-200d-1f52c",
    v: [
      "1f468-1f3fb-200d-1f52c",
      "1f468-1f3fc-200d-1f52c",
      "1f468-1f3fd-200d-1f52c",
      "1f468-1f3fe-200d-1f52c",
      "1f468-1f3ff-200d-1f52c"
    ],
    a: "4.0"
  },
  {
    n: [
      "woman scientist",
      "female-scientist"
    ],
    u: "1f469-200d-1f52c",
    v: [
      "1f469-1f3fb-200d-1f52c",
      "1f469-1f3fc-200d-1f52c",
      "1f469-1f3fd-200d-1f52c",
      "1f469-1f3fe-200d-1f52c",
      "1f469-1f3ff-200d-1f52c"
    ],
    a: "4.0"
  },
  {
    n: [
      "technologist"
    ],
    u: "1f9d1-200d-1f4bb",
    v: [
      "1f9d1-1f3fb-200d-1f4bb",
      "1f9d1-1f3fc-200d-1f4bb",
      "1f9d1-1f3fd-200d-1f4bb",
      "1f9d1-1f3fe-200d-1f4bb",
      "1f9d1-1f3ff-200d-1f4bb"
    ],
    a: "12.1"
  },
  {
    n: [
      "man technologist",
      "male-technologist"
    ],
    u: "1f468-200d-1f4bb",
    v: [
      "1f468-1f3fb-200d-1f4bb",
      "1f468-1f3fc-200d-1f4bb",
      "1f468-1f3fd-200d-1f4bb",
      "1f468-1f3fe-200d-1f4bb",
      "1f468-1f3ff-200d-1f4bb"
    ],
    a: "4.0"
  },
  {
    n: [
      "woman technologist",
      "female-technologist"
    ],
    u: "1f469-200d-1f4bb",
    v: [
      "1f469-1f3fb-200d-1f4bb",
      "1f469-1f3fc-200d-1f4bb",
      "1f469-1f3fd-200d-1f4bb",
      "1f469-1f3fe-200d-1f4bb",
      "1f469-1f3ff-200d-1f4bb"
    ],
    a: "4.0"
  },
  {
    n: [
      "singer"
    ],
    u: "1f9d1-200d-1f3a4",
    v: [
      "1f9d1-1f3fb-200d-1f3a4",
      "1f9d1-1f3fc-200d-1f3a4",
      "1f9d1-1f3fd-200d-1f3a4",
      "1f9d1-1f3fe-200d-1f3a4",
      "1f9d1-1f3ff-200d-1f3a4"
    ],
    a: "12.1"
  },
  {
    n: [
      "man singer",
      "male-singer"
    ],
    u: "1f468-200d-1f3a4",
    v: [
      "1f468-1f3fb-200d-1f3a4",
      "1f468-1f3fc-200d-1f3a4",
      "1f468-1f3fd-200d-1f3a4",
      "1f468-1f3fe-200d-1f3a4",
      "1f468-1f3ff-200d-1f3a4"
    ],
    a: "4.0"
  },
  {
    n: [
      "woman singer",
      "female-singer"
    ],
    u: "1f469-200d-1f3a4",
    v: [
      "1f469-1f3fb-200d-1f3a4",
      "1f469-1f3fc-200d-1f3a4",
      "1f469-1f3fd-200d-1f3a4",
      "1f469-1f3fe-200d-1f3a4",
      "1f469-1f3ff-200d-1f3a4"
    ],
    a: "4.0"
  },
  {
    n: [
      "artist"
    ],
    u: "1f9d1-200d-1f3a8",
    v: [
      "1f9d1-1f3fb-200d-1f3a8",
      "1f9d1-1f3fc-200d-1f3a8",
      "1f9d1-1f3fd-200d-1f3a8",
      "1f9d1-1f3fe-200d-1f3a8",
      "1f9d1-1f3ff-200d-1f3a8"
    ],
    a: "12.1"
  },
  {
    n: [
      "man artist",
      "male-artist"
    ],
    u: "1f468-200d-1f3a8",
    v: [
      "1f468-1f3fb-200d-1f3a8",
      "1f468-1f3fc-200d-1f3a8",
      "1f468-1f3fd-200d-1f3a8",
      "1f468-1f3fe-200d-1f3a8",
      "1f468-1f3ff-200d-1f3a8"
    ],
    a: "4.0"
  },
  {
    n: [
      "woman artist",
      "female-artist"
    ],
    u: "1f469-200d-1f3a8",
    v: [
      "1f469-1f3fb-200d-1f3a8",
      "1f469-1f3fc-200d-1f3a8",
      "1f469-1f3fd-200d-1f3a8",
      "1f469-1f3fe-200d-1f3a8",
      "1f469-1f3ff-200d-1f3a8"
    ],
    a: "4.0"
  },
  {
    n: [
      "pilot"
    ],
    u: "1f9d1-200d-2708-fe0f",
    v: [
      "1f9d1-1f3fb-200d-2708-fe0f",
      "1f9d1-1f3fc-200d-2708-fe0f",
      "1f9d1-1f3fd-200d-2708-fe0f",
      "1f9d1-1f3fe-200d-2708-fe0f",
      "1f9d1-1f3ff-200d-2708-fe0f"
    ],
    a: "12.1"
  },
  {
    n: [
      "man pilot",
      "male-pilot"
    ],
    u: "1f468-200d-2708-fe0f",
    v: [
      "1f468-1f3fb-200d-2708-fe0f",
      "1f468-1f3fc-200d-2708-fe0f",
      "1f468-1f3fd-200d-2708-fe0f",
      "1f468-1f3fe-200d-2708-fe0f",
      "1f468-1f3ff-200d-2708-fe0f"
    ],
    a: "4.0"
  },
  {
    n: [
      "woman pilot",
      "female-pilot"
    ],
    u: "1f469-200d-2708-fe0f",
    v: [
      "1f469-1f3fb-200d-2708-fe0f",
      "1f469-1f3fc-200d-2708-fe0f",
      "1f469-1f3fd-200d-2708-fe0f",
      "1f469-1f3fe-200d-2708-fe0f",
      "1f469-1f3ff-200d-2708-fe0f"
    ],
    a: "4.0"
  },
  {
    n: [
      "astronaut"
    ],
    u: "1f9d1-200d-1f680",
    v: [
      "1f9d1-1f3fb-200d-1f680",
      "1f9d1-1f3fc-200d-1f680",
      "1f9d1-1f3fd-200d-1f680",
      "1f9d1-1f3fe-200d-1f680",
      "1f9d1-1f3ff-200d-1f680"
    ],
    a: "12.1"
  },
  {
    n: [
      "man astronaut",
      "male-astronaut"
    ],
    u: "1f468-200d-1f680",
    v: [
      "1f468-1f3fb-200d-1f680",
      "1f468-1f3fc-200d-1f680",
      "1f468-1f3fd-200d-1f680",
      "1f468-1f3fe-200d-1f680",
      "1f468-1f3ff-200d-1f680"
    ],
    a: "4.0"
  },
  {
    n: [
      "woman astronaut",
      "female-astronaut"
    ],
    u: "1f469-200d-1f680",
    v: [
      "1f469-1f3fb-200d-1f680",
      "1f469-1f3fc-200d-1f680",
      "1f469-1f3fd-200d-1f680",
      "1f469-1f3fe-200d-1f680",
      "1f469-1f3ff-200d-1f680"
    ],
    a: "4.0"
  },
  {
    n: [
      "firefighter"
    ],
    u: "1f9d1-200d-1f692",
    v: [
      "1f9d1-1f3fb-200d-1f692",
      "1f9d1-1f3fc-200d-1f692",
      "1f9d1-1f3fd-200d-1f692",
      "1f9d1-1f3fe-200d-1f692",
      "1f9d1-1f3ff-200d-1f692"
    ],
    a: "12.1"
  },
  {
    n: [
      "man firefighter",
      "male-firefighter"
    ],
    u: "1f468-200d-1f692",
    v: [
      "1f468-1f3fb-200d-1f692",
      "1f468-1f3fc-200d-1f692",
      "1f468-1f3fd-200d-1f692",
      "1f468-1f3fe-200d-1f692",
      "1f468-1f3ff-200d-1f692"
    ],
    a: "4.0"
  },
  {
    n: [
      "woman firefighter",
      "female-firefighter"
    ],
    u: "1f469-200d-1f692",
    v: [
      "1f469-1f3fb-200d-1f692",
      "1f469-1f3fc-200d-1f692",
      "1f469-1f3fd-200d-1f692",
      "1f469-1f3fe-200d-1f692",
      "1f469-1f3ff-200d-1f692"
    ],
    a: "4.0"
  },
  {
    n: [
      "cop",
      "police officer"
    ],
    u: "1f46e",
    v: [
      "1f46e-1f3fb",
      "1f46e-1f3fc",
      "1f46e-1f3fd",
      "1f46e-1f3fe",
      "1f46e-1f3ff"
    ],
    a: "0.6"
  },
  {
    n: [
      "man police officer",
      "male-police-officer"
    ],
    u: "1f46e-200d-2642-fe0f",
    v: [
      "1f46e-1f3fb-200d-2642-fe0f",
      "1f46e-1f3fc-200d-2642-fe0f",
      "1f46e-1f3fd-200d-2642-fe0f",
      "1f46e-1f3fe-200d-2642-fe0f",
      "1f46e-1f3ff-200d-2642-fe0f"
    ],
    a: "4.0"
  },
  {
    n: [
      "woman police officer",
      "female-police-officer"
    ],
    u: "1f46e-200d-2640-fe0f",
    v: [
      "1f46e-1f3fb-200d-2640-fe0f",
      "1f46e-1f3fc-200d-2640-fe0f",
      "1f46e-1f3fd-200d-2640-fe0f",
      "1f46e-1f3fe-200d-2640-fe0f",
      "1f46e-1f3ff-200d-2640-fe0f"
    ],
    a: "4.0"
  },
  {
    n: [
      "detective",
      "sleuth or spy"
    ],
    u: "1f575-fe0f",
    v: [
      "1f575-1f3fb",
      "1f575-1f3fc",
      "1f575-1f3fd",
      "1f575-1f3fe",
      "1f575-1f3ff"
    ],
    a: "0.7"
  },
  {
    n: [
      "man detective",
      "male-detective"
    ],
    u: "1f575-fe0f-200d-2642-fe0f",
    v: [
      "1f575-1f3fb-200d-2642-fe0f",
      "1f575-1f3fc-200d-2642-fe0f",
      "1f575-1f3fd-200d-2642-fe0f",
      "1f575-1f3fe-200d-2642-fe0f",
      "1f575-1f3ff-200d-2642-fe0f"
    ],
    a: "4.0"
  },
  {
    n: [
      "woman detective",
      "female-detective"
    ],
    u: "1f575-fe0f-200d-2640-fe0f",
    v: [
      "1f575-1f3fb-200d-2640-fe0f",
      "1f575-1f3fc-200d-2640-fe0f",
      "1f575-1f3fd-200d-2640-fe0f",
      "1f575-1f3fe-200d-2640-fe0f",
      "1f575-1f3ff-200d-2640-fe0f"
    ],
    a: "4.0"
  },
  {
    n: [
      "guardsman"
    ],
    u: "1f482",
    v: [
      "1f482-1f3fb",
      "1f482-1f3fc",
      "1f482-1f3fd",
      "1f482-1f3fe",
      "1f482-1f3ff"
    ],
    a: "0.6"
  },
  {
    n: [
      "man guard",
      "male-guard"
    ],
    u: "1f482-200d-2642-fe0f",
    v: [
      "1f482-1f3fb-200d-2642-fe0f",
      "1f482-1f3fc-200d-2642-fe0f",
      "1f482-1f3fd-200d-2642-fe0f",
      "1f482-1f3fe-200d-2642-fe0f",
      "1f482-1f3ff-200d-2642-fe0f"
    ],
    a: "4.0"
  },
  {
    n: [
      "woman guard",
      "female-guard"
    ],
    u: "1f482-200d-2640-fe0f",
    v: [
      "1f482-1f3fb-200d-2640-fe0f",
      "1f482-1f3fc-200d-2640-fe0f",
      "1f482-1f3fd-200d-2640-fe0f",
      "1f482-1f3fe-200d-2640-fe0f",
      "1f482-1f3ff-200d-2640-fe0f"
    ],
    a: "4.0"
  },
  {
    n: [
      "ninja"
    ],
    u: "1f977",
    v: [
      "1f977-1f3fb",
      "1f977-1f3fc",
      "1f977-1f3fd",
      "1f977-1f3fe",
      "1f977-1f3ff"
    ],
    a: "13.0"
  },
  {
    n: [
      "construction worker"
    ],
    u: "1f477",
    v: [
      "1f477-1f3fb",
      "1f477-1f3fc",
      "1f477-1f3fd",
      "1f477-1f3fe",
      "1f477-1f3ff"
    ],
    a: "0.6"
  },
  {
    n: [
      "man construction worker",
      "male-construction-worker"
    ],
    u: "1f477-200d-2642-fe0f",
    v: [
      "1f477-1f3fb-200d-2642-fe0f",
      "1f477-1f3fc-200d-2642-fe0f",
      "1f477-1f3fd-200d-2642-fe0f",
      "1f477-1f3fe-200d-2642-fe0f",
      "1f477-1f3ff-200d-2642-fe0f"
    ],
    a: "4.0"
  },
  {
    n: [
      "woman construction worker",
      "female-construction-worker"
    ],
    u: "1f477-200d-2640-fe0f",
    v: [
      "1f477-1f3fb-200d-2640-fe0f",
      "1f477-1f3fc-200d-2640-fe0f",
      "1f477-1f3fd-200d-2640-fe0f",
      "1f477-1f3fe-200d-2640-fe0f",
      "1f477-1f3ff-200d-2640-fe0f"
    ],
    a: "4.0"
  },
  {
    n: [
      "person with crown"
    ],
    u: "1fac5",
    v: [
      "1fac5-1f3fb",
      "1fac5-1f3fc",
      "1fac5-1f3fd",
      "1fac5-1f3fe",
      "1fac5-1f3ff"
    ],
    a: "14.0"
  },
  {
    n: [
      "prince"
    ],
    u: "1f934",
    v: [
      "1f934-1f3fb",
      "1f934-1f3fc",
      "1f934-1f3fd",
      "1f934-1f3fe",
      "1f934-1f3ff"
    ],
    a: "3.0"
  },
  {
    n: [
      "princess"
    ],
    u: "1f478",
    v: [
      "1f478-1f3fb",
      "1f478-1f3fc",
      "1f478-1f3fd",
      "1f478-1f3fe",
      "1f478-1f3ff"
    ],
    a: "0.6"
  },
  {
    n: [
      "man with turban"
    ],
    u: "1f473",
    v: [
      "1f473-1f3fb",
      "1f473-1f3fc",
      "1f473-1f3fd",
      "1f473-1f3fe",
      "1f473-1f3ff"
    ],
    a: "0.6"
  },
  {
    n: [
      "man wearing turban",
      "man-wearing-turban"
    ],
    u: "1f473-200d-2642-fe0f",
    v: [
      "1f473-1f3fb-200d-2642-fe0f",
      "1f473-1f3fc-200d-2642-fe0f",
      "1f473-1f3fd-200d-2642-fe0f",
      "1f473-1f3fe-200d-2642-fe0f",
      "1f473-1f3ff-200d-2642-fe0f"
    ],
    a: "4.0"
  },
  {
    n: [
      "woman wearing turban",
      "woman-wearing-turban"
    ],
    u: "1f473-200d-2640-fe0f",
    v: [
      "1f473-1f3fb-200d-2640-fe0f",
      "1f473-1f3fc-200d-2640-fe0f",
      "1f473-1f3fd-200d-2640-fe0f",
      "1f473-1f3fe-200d-2640-fe0f",
      "1f473-1f3ff-200d-2640-fe0f"
    ],
    a: "4.0"
  },
  {
    n: [
      "man with gua pi mao"
    ],
    u: "1f472",
    v: [
      "1f472-1f3fb",
      "1f472-1f3fc",
      "1f472-1f3fd",
      "1f472-1f3fe",
      "1f472-1f3ff"
    ],
    a: "0.6"
  },
  {
    n: [
      "person with headscarf"
    ],
    u: "1f9d5",
    v: [
      "1f9d5-1f3fb",
      "1f9d5-1f3fc",
      "1f9d5-1f3fd",
      "1f9d5-1f3fe",
      "1f9d5-1f3ff"
    ],
    a: "5.0"
  },
  {
    n: [
      "man in tuxedo",
      "person in tuxedo"
    ],
    u: "1f935",
    v: [
      "1f935-1f3fb",
      "1f935-1f3fc",
      "1f935-1f3fd",
      "1f935-1f3fe",
      "1f935-1f3ff"
    ],
    a: "3.0"
  },
  {
    n: [
      "man in tuxedo"
    ],
    u: "1f935-200d-2642-fe0f",
    v: [
      "1f935-1f3fb-200d-2642-fe0f",
      "1f935-1f3fc-200d-2642-fe0f",
      "1f935-1f3fd-200d-2642-fe0f",
      "1f935-1f3fe-200d-2642-fe0f",
      "1f935-1f3ff-200d-2642-fe0f"
    ],
    a: "13.0"
  },
  {
    n: [
      "woman in tuxedo"
    ],
    u: "1f935-200d-2640-fe0f",
    v: [
      "1f935-1f3fb-200d-2640-fe0f",
      "1f935-1f3fc-200d-2640-fe0f",
      "1f935-1f3fd-200d-2640-fe0f",
      "1f935-1f3fe-200d-2640-fe0f",
      "1f935-1f3ff-200d-2640-fe0f"
    ],
    a: "13.0"
  },
  {
    n: [
      "bride with veil"
    ],
    u: "1f470",
    v: [
      "1f470-1f3fb",
      "1f470-1f3fc",
      "1f470-1f3fd",
      "1f470-1f3fe",
      "1f470-1f3ff"
    ],
    a: "0.6"
  },
  {
    n: [
      "man with veil"
    ],
    u: "1f470-200d-2642-fe0f",
    v: [
      "1f470-1f3fb-200d-2642-fe0f",
      "1f470-1f3fc-200d-2642-fe0f",
      "1f470-1f3fd-200d-2642-fe0f",
      "1f470-1f3fe-200d-2642-fe0f",
      "1f470-1f3ff-200d-2642-fe0f"
    ],
    a: "13.0"
  },
  {
    n: [
      "woman with veil"
    ],
    u: "1f470-200d-2640-fe0f",
    v: [
      "1f470-1f3fb-200d-2640-fe0f",
      "1f470-1f3fc-200d-2640-fe0f",
      "1f470-1f3fd-200d-2640-fe0f",
      "1f470-1f3fe-200d-2640-fe0f",
      "1f470-1f3ff-200d-2640-fe0f"
    ],
    a: "13.0"
  },
  {
    n: [
      "pregnant woman"
    ],
    u: "1f930",
    v: [
      "1f930-1f3fb",
      "1f930-1f3fc",
      "1f930-1f3fd",
      "1f930-1f3fe",
      "1f930-1f3ff"
    ],
    a: "3.0"
  },
  {
    n: [
      "pregnant man"
    ],
    u: "1fac3",
    v: [
      "1fac3-1f3fb",
      "1fac3-1f3fc",
      "1fac3-1f3fd",
      "1fac3-1f3fe",
      "1fac3-1f3ff"
    ],
    a: "14.0"
  },
  {
    n: [
      "pregnant person"
    ],
    u: "1fac4",
    v: [
      "1fac4-1f3fb",
      "1fac4-1f3fc",
      "1fac4-1f3fd",
      "1fac4-1f3fe",
      "1fac4-1f3ff"
    ],
    a: "14.0"
  },
  {
    n: [
      "breast-feeding"
    ],
    u: "1f931",
    v: [
      "1f931-1f3fb",
      "1f931-1f3fc",
      "1f931-1f3fd",
      "1f931-1f3fe",
      "1f931-1f3ff"
    ],
    a: "5.0"
  },
  {
    n: [
      "woman feeding baby"
    ],
    u: "1f469-200d-1f37c",
    v: [
      "1f469-1f3fb-200d-1f37c",
      "1f469-1f3fc-200d-1f37c",
      "1f469-1f3fd-200d-1f37c",
      "1f469-1f3fe-200d-1f37c",
      "1f469-1f3ff-200d-1f37c"
    ],
    a: "13.0"
  },
  {
    n: [
      "man feeding baby"
    ],
    u: "1f468-200d-1f37c",
    v: [
      "1f468-1f3fb-200d-1f37c",
      "1f468-1f3fc-200d-1f37c",
      "1f468-1f3fd-200d-1f37c",
      "1f468-1f3fe-200d-1f37c",
      "1f468-1f3ff-200d-1f37c"
    ],
    a: "13.0"
  },
  {
    n: [
      "person feeding baby"
    ],
    u: "1f9d1-200d-1f37c",
    v: [
      "1f9d1-1f3fb-200d-1f37c",
      "1f9d1-1f3fc-200d-1f37c",
      "1f9d1-1f3fd-200d-1f37c",
      "1f9d1-1f3fe-200d-1f37c",
      "1f9d1-1f3ff-200d-1f37c"
    ],
    a: "13.0"
  },
  {
    n: [
      "angel",
      "baby angel"
    ],
    u: "1f47c",
    v: [
      "1f47c-1f3fb",
      "1f47c-1f3fc",
      "1f47c-1f3fd",
      "1f47c-1f3fe",
      "1f47c-1f3ff"
    ],
    a: "0.6"
  },
  {
    n: [
      "santa",
      "father christmas"
    ],
    u: "1f385",
    v: [
      "1f385-1f3fb",
      "1f385-1f3fc",
      "1f385-1f3fd",
      "1f385-1f3fe",
      "1f385-1f3ff"
    ],
    a: "0.6"
  },
  {
    n: [
      "mrs claus",
      "mother christmas"
    ],
    u: "1f936",
    v: [
      "1f936-1f3fb",
      "1f936-1f3fc",
      "1f936-1f3fd",
      "1f936-1f3fe",
      "1f936-1f3ff"
    ],
    a: "3.0"
  },
  {
    n: [
      "mx claus"
    ],
    u: "1f9d1-200d-1f384",
    v: [
      "1f9d1-1f3fb-200d-1f384",
      "1f9d1-1f3fc-200d-1f384",
      "1f9d1-1f3fd-200d-1f384",
      "1f9d1-1f3fe-200d-1f384",
      "1f9d1-1f3ff-200d-1f384"
    ],
    a: "13.0"
  },
  {
    n: [
      "superhero"
    ],
    u: "1f9b8",
    v: [
      "1f9b8-1f3fb",
      "1f9b8-1f3fc",
      "1f9b8-1f3fd",
      "1f9b8-1f3fe",
      "1f9b8-1f3ff"
    ],
    a: "11.0"
  },
  {
    n: [
      "man superhero",
      "male superhero"
    ],
    u: "1f9b8-200d-2642-fe0f",
    v: [
      "1f9b8-1f3fb-200d-2642-fe0f",
      "1f9b8-1f3fc-200d-2642-fe0f",
      "1f9b8-1f3fd-200d-2642-fe0f",
      "1f9b8-1f3fe-200d-2642-fe0f",
      "1f9b8-1f3ff-200d-2642-fe0f"
    ],
    a: "11.0"
  },
  {
    n: [
      "woman superhero",
      "female superhero"
    ],
    u: "1f9b8-200d-2640-fe0f",
    v: [
      "1f9b8-1f3fb-200d-2640-fe0f",
      "1f9b8-1f3fc-200d-2640-fe0f",
      "1f9b8-1f3fd-200d-2640-fe0f",
      "1f9b8-1f3fe-200d-2640-fe0f",
      "1f9b8-1f3ff-200d-2640-fe0f"
    ],
    a: "11.0"
  },
  {
    n: [
      "supervillain"
    ],
    u: "1f9b9",
    v: [
      "1f9b9-1f3fb",
      "1f9b9-1f3fc",
      "1f9b9-1f3fd",
      "1f9b9-1f3fe",
      "1f9b9-1f3ff"
    ],
    a: "11.0"
  },
  {
    n: [
      "man supervillain",
      "male supervillain"
    ],
    u: "1f9b9-200d-2642-fe0f",
    v: [
      "1f9b9-1f3fb-200d-2642-fe0f",
      "1f9b9-1f3fc-200d-2642-fe0f",
      "1f9b9-1f3fd-200d-2642-fe0f",
      "1f9b9-1f3fe-200d-2642-fe0f",
      "1f9b9-1f3ff-200d-2642-fe0f"
    ],
    a: "11.0"
  },
  {
    n: [
      "woman supervillain",
      "female supervillain"
    ],
    u: "1f9b9-200d-2640-fe0f",
    v: [
      "1f9b9-1f3fb-200d-2640-fe0f",
      "1f9b9-1f3fc-200d-2640-fe0f",
      "1f9b9-1f3fd-200d-2640-fe0f",
      "1f9b9-1f3fe-200d-2640-fe0f",
      "1f9b9-1f3ff-200d-2640-fe0f"
    ],
    a: "11.0"
  },
  {
    n: [
      "mage"
    ],
    u: "1f9d9",
    v: [
      "1f9d9-1f3fb",
      "1f9d9-1f3fc",
      "1f9d9-1f3fd",
      "1f9d9-1f3fe",
      "1f9d9-1f3ff"
    ],
    a: "5.0"
  },
  {
    n: [
      "man mage",
      "male mage"
    ],
    u: "1f9d9-200d-2642-fe0f",
    v: [
      "1f9d9-1f3fb-200d-2642-fe0f",
      "1f9d9-1f3fc-200d-2642-fe0f",
      "1f9d9-1f3fd-200d-2642-fe0f",
      "1f9d9-1f3fe-200d-2642-fe0f",
      "1f9d9-1f3ff-200d-2642-fe0f"
    ],
    a: "5.0"
  },
  {
    n: [
      "woman mage",
      "female mage"
    ],
    u: "1f9d9-200d-2640-fe0f",
    v: [
      "1f9d9-1f3fb-200d-2640-fe0f",
      "1f9d9-1f3fc-200d-2640-fe0f",
      "1f9d9-1f3fd-200d-2640-fe0f",
      "1f9d9-1f3fe-200d-2640-fe0f",
      "1f9d9-1f3ff-200d-2640-fe0f"
    ],
    a: "5.0"
  },
  {
    n: [
      "fairy"
    ],
    u: "1f9da",
    v: [
      "1f9da-1f3fb",
      "1f9da-1f3fc",
      "1f9da-1f3fd",
      "1f9da-1f3fe",
      "1f9da-1f3ff"
    ],
    a: "5.0"
  },
  {
    n: [
      "man fairy",
      "male fairy"
    ],
    u: "1f9da-200d-2642-fe0f",
    v: [
      "1f9da-1f3fb-200d-2642-fe0f",
      "1f9da-1f3fc-200d-2642-fe0f",
      "1f9da-1f3fd-200d-2642-fe0f",
      "1f9da-1f3fe-200d-2642-fe0f",
      "1f9da-1f3ff-200d-2642-fe0f"
    ],
    a: "5.0"
  },
  {
    n: [
      "woman fairy",
      "female fairy"
    ],
    u: "1f9da-200d-2640-fe0f",
    v: [
      "1f9da-1f3fb-200d-2640-fe0f",
      "1f9da-1f3fc-200d-2640-fe0f",
      "1f9da-1f3fd-200d-2640-fe0f",
      "1f9da-1f3fe-200d-2640-fe0f",
      "1f9da-1f3ff-200d-2640-fe0f"
    ],
    a: "5.0"
  },
  {
    n: [
      "vampire"
    ],
    u: "1f9db",
    v: [
      "1f9db-1f3fb",
      "1f9db-1f3fc",
      "1f9db-1f3fd",
      "1f9db-1f3fe",
      "1f9db-1f3ff"
    ],
    a: "5.0"
  },
  {
    n: [
      "man vampire",
      "male vampire"
    ],
    u: "1f9db-200d-2642-fe0f",
    v: [
      "1f9db-1f3fb-200d-2642-fe0f",
      "1f9db-1f3fc-200d-2642-fe0f",
      "1f9db-1f3fd-200d-2642-fe0f",
      "1f9db-1f3fe-200d-2642-fe0f",
      "1f9db-1f3ff-200d-2642-fe0f"
    ],
    a: "5.0"
  },
  {
    n: [
      "woman vampire",
      "female vampire"
    ],
    u: "1f9db-200d-2640-fe0f",
    v: [
      "1f9db-1f3fb-200d-2640-fe0f",
      "1f9db-1f3fc-200d-2640-fe0f",
      "1f9db-1f3fd-200d-2640-fe0f",
      "1f9db-1f3fe-200d-2640-fe0f",
      "1f9db-1f3ff-200d-2640-fe0f"
    ],
    a: "5.0"
  },
  {
    n: [
      "merperson"
    ],
    u: "1f9dc",
    v: [
      "1f9dc-1f3fb",
      "1f9dc-1f3fc",
      "1f9dc-1f3fd",
      "1f9dc-1f3fe",
      "1f9dc-1f3ff"
    ],
    a: "5.0"
  },
  {
    n: [
      "merman"
    ],
    u: "1f9dc-200d-2642-fe0f",
    v: [
      "1f9dc-1f3fb-200d-2642-fe0f",
      "1f9dc-1f3fc-200d-2642-fe0f",
      "1f9dc-1f3fd-200d-2642-fe0f",
      "1f9dc-1f3fe-200d-2642-fe0f",
      "1f9dc-1f3ff-200d-2642-fe0f"
    ],
    a: "5.0"
  },
  {
    n: [
      "mermaid"
    ],
    u: "1f9dc-200d-2640-fe0f",
    v: [
      "1f9dc-1f3fb-200d-2640-fe0f",
      "1f9dc-1f3fc-200d-2640-fe0f",
      "1f9dc-1f3fd-200d-2640-fe0f",
      "1f9dc-1f3fe-200d-2640-fe0f",
      "1f9dc-1f3ff-200d-2640-fe0f"
    ],
    a: "5.0"
  },
  {
    n: [
      "elf"
    ],
    u: "1f9dd",
    v: [
      "1f9dd-1f3fb",
      "1f9dd-1f3fc",
      "1f9dd-1f3fd",
      "1f9dd-1f3fe",
      "1f9dd-1f3ff"
    ],
    a: "5.0"
  },
  {
    n: [
      "man elf",
      "male elf"
    ],
    u: "1f9dd-200d-2642-fe0f",
    v: [
      "1f9dd-1f3fb-200d-2642-fe0f",
      "1f9dd-1f3fc-200d-2642-fe0f",
      "1f9dd-1f3fd-200d-2642-fe0f",
      "1f9dd-1f3fe-200d-2642-fe0f",
      "1f9dd-1f3ff-200d-2642-fe0f"
    ],
    a: "5.0"
  },
  {
    n: [
      "woman elf",
      "female elf"
    ],
    u: "1f9dd-200d-2640-fe0f",
    v: [
      "1f9dd-1f3fb-200d-2640-fe0f",
      "1f9dd-1f3fc-200d-2640-fe0f",
      "1f9dd-1f3fd-200d-2640-fe0f",
      "1f9dd-1f3fe-200d-2640-fe0f",
      "1f9dd-1f3ff-200d-2640-fe0f"
    ],
    a: "5.0"
  },
  {
    n: [
      "genie"
    ],
    u: "1f9de",
    a: "5.0"
  },
  {
    n: [
      "man genie",
      "male genie"
    ],
    u: "1f9de-200d-2642-fe0f",
    a: "5.0"
  },
  {
    n: [
      "woman genie",
      "female genie"
    ],
    u: "1f9de-200d-2640-fe0f",
    a: "5.0"
  },
  {
    n: [
      "zombie"
    ],
    u: "1f9df",
    a: "5.0"
  },
  {
    n: [
      "man zombie",
      "male zombie"
    ],
    u: "1f9df-200d-2642-fe0f",
    a: "5.0"
  },
  {
    n: [
      "woman zombie",
      "female zombie"
    ],
    u: "1f9df-200d-2640-fe0f",
    a: "5.0"
  },
  {
    n: [
      "troll"
    ],
    u: "1f9cc",
    a: "14.0"
  },
  {
    n: [
      "massage",
      "face massage"
    ],
    u: "1f486",
    v: [
      "1f486-1f3fb",
      "1f486-1f3fc",
      "1f486-1f3fd",
      "1f486-1f3fe",
      "1f486-1f3ff"
    ],
    a: "0.6"
  },
  {
    n: [
      "man getting massage",
      "man-getting-massage"
    ],
    u: "1f486-200d-2642-fe0f",
    v: [
      "1f486-1f3fb-200d-2642-fe0f",
      "1f486-1f3fc-200d-2642-fe0f",
      "1f486-1f3fd-200d-2642-fe0f",
      "1f486-1f3fe-200d-2642-fe0f",
      "1f486-1f3ff-200d-2642-fe0f"
    ],
    a: "4.0"
  },
  {
    n: [
      "woman getting massage",
      "woman-getting-massage"
    ],
    u: "1f486-200d-2640-fe0f",
    v: [
      "1f486-1f3fb-200d-2640-fe0f",
      "1f486-1f3fc-200d-2640-fe0f",
      "1f486-1f3fd-200d-2640-fe0f",
      "1f486-1f3fe-200d-2640-fe0f",
      "1f486-1f3ff-200d-2640-fe0f"
    ],
    a: "4.0"
  },
  {
    n: [
      "haircut"
    ],
    u: "1f487",
    v: [
      "1f487-1f3fb",
      "1f487-1f3fc",
      "1f487-1f3fd",
      "1f487-1f3fe",
      "1f487-1f3ff"
    ],
    a: "0.6"
  },
  {
    n: [
      "man getting haircut",
      "man-getting-haircut"
    ],
    u: "1f487-200d-2642-fe0f",
    v: [
      "1f487-1f3fb-200d-2642-fe0f",
      "1f487-1f3fc-200d-2642-fe0f",
      "1f487-1f3fd-200d-2642-fe0f",
      "1f487-1f3fe-200d-2642-fe0f",
      "1f487-1f3ff-200d-2642-fe0f"
    ],
    a: "4.0"
  },
  {
    n: [
      "woman getting haircut",
      "woman-getting-haircut"
    ],
    u: "1f487-200d-2640-fe0f",
    v: [
      "1f487-1f3fb-200d-2640-fe0f",
      "1f487-1f3fc-200d-2640-fe0f",
      "1f487-1f3fd-200d-2640-fe0f",
      "1f487-1f3fe-200d-2640-fe0f",
      "1f487-1f3ff-200d-2640-fe0f"
    ],
    a: "4.0"
  },
  {
    n: [
      "walking",
      "pedestrian"
    ],
    u: "1f6b6",
    v: [
      "1f6b6-1f3fb",
      "1f6b6-1f3fc",
      "1f6b6-1f3fd",
      "1f6b6-1f3fe",
      "1f6b6-1f3ff"
    ],
    a: "0.6"
  },
  {
    n: [
      "man walking",
      "man-walking"
    ],
    u: "1f6b6-200d-2642-fe0f",
    v: [
      "1f6b6-1f3fb-200d-2642-fe0f",
      "1f6b6-1f3fc-200d-2642-fe0f",
      "1f6b6-1f3fd-200d-2642-fe0f",
      "1f6b6-1f3fe-200d-2642-fe0f",
      "1f6b6-1f3ff-200d-2642-fe0f"
    ],
    a: "4.0"
  },
  {
    n: [
      "woman walking",
      "woman-walking"
    ],
    u: "1f6b6-200d-2640-fe0f",
    v: [
      "1f6b6-1f3fb-200d-2640-fe0f",
      "1f6b6-1f3fc-200d-2640-fe0f",
      "1f6b6-1f3fd-200d-2640-fe0f",
      "1f6b6-1f3fe-200d-2640-fe0f",
      "1f6b6-1f3ff-200d-2640-fe0f"
    ],
    a: "4.0"
  },
  {
    n: [
      "standing person"
    ],
    u: "1f9cd",
    v: [
      "1f9cd-1f3fb",
      "1f9cd-1f3fc",
      "1f9cd-1f3fd",
      "1f9cd-1f3fe",
      "1f9cd-1f3ff"
    ],
    a: "12.0"
  },
  {
    n: [
      "man standing"
    ],
    u: "1f9cd-200d-2642-fe0f",
    v: [
      "1f9cd-1f3fb-200d-2642-fe0f",
      "1f9cd-1f3fc-200d-2642-fe0f",
      "1f9cd-1f3fd-200d-2642-fe0f",
      "1f9cd-1f3fe-200d-2642-fe0f",
      "1f9cd-1f3ff-200d-2642-fe0f"
    ],
    a: "12.0"
  },
  {
    n: [
      "woman standing"
    ],
    u: "1f9cd-200d-2640-fe0f",
    v: [
      "1f9cd-1f3fb-200d-2640-fe0f",
      "1f9cd-1f3fc-200d-2640-fe0f",
      "1f9cd-1f3fd-200d-2640-fe0f",
      "1f9cd-1f3fe-200d-2640-fe0f",
      "1f9cd-1f3ff-200d-2640-fe0f"
    ],
    a: "12.0"
  },
  {
    n: [
      "kneeling person"
    ],
    u: "1f9ce",
    v: [
      "1f9ce-1f3fb",
      "1f9ce-1f3fc",
      "1f9ce-1f3fd",
      "1f9ce-1f3fe",
      "1f9ce-1f3ff"
    ],
    a: "12.0"
  },
  {
    n: [
      "man kneeling"
    ],
    u: "1f9ce-200d-2642-fe0f",
    v: [
      "1f9ce-1f3fb-200d-2642-fe0f",
      "1f9ce-1f3fc-200d-2642-fe0f",
      "1f9ce-1f3fd-200d-2642-fe0f",
      "1f9ce-1f3fe-200d-2642-fe0f",
      "1f9ce-1f3ff-200d-2642-fe0f"
    ],
    a: "12.0"
  },
  {
    n: [
      "woman kneeling"
    ],
    u: "1f9ce-200d-2640-fe0f",
    v: [
      "1f9ce-1f3fb-200d-2640-fe0f",
      "1f9ce-1f3fc-200d-2640-fe0f",
      "1f9ce-1f3fd-200d-2640-fe0f",
      "1f9ce-1f3fe-200d-2640-fe0f",
      "1f9ce-1f3ff-200d-2640-fe0f"
    ],
    a: "12.0"
  },
  {
    n: [
      "person with white cane",
      "person with probing cane"
    ],
    u: "1f9d1-200d-1f9af",
    v: [
      "1f9d1-1f3fb-200d-1f9af",
      "1f9d1-1f3fc-200d-1f9af",
      "1f9d1-1f3fd-200d-1f9af",
      "1f9d1-1f3fe-200d-1f9af",
      "1f9d1-1f3ff-200d-1f9af"
    ],
    a: "12.1"
  },
  {
    n: [
      "man with white cane",
      "man with probing cane"
    ],
    u: "1f468-200d-1f9af",
    v: [
      "1f468-1f3fb-200d-1f9af",
      "1f468-1f3fc-200d-1f9af",
      "1f468-1f3fd-200d-1f9af",
      "1f468-1f3fe-200d-1f9af",
      "1f468-1f3ff-200d-1f9af"
    ],
    a: "12.0"
  },
  {
    n: [
      "woman with white cane",
      "woman with probing cane"
    ],
    u: "1f469-200d-1f9af",
    v: [
      "1f469-1f3fb-200d-1f9af",
      "1f469-1f3fc-200d-1f9af",
      "1f469-1f3fd-200d-1f9af",
      "1f469-1f3fe-200d-1f9af",
      "1f469-1f3ff-200d-1f9af"
    ],
    a: "12.0"
  },
  {
    n: [
      "person in motorized wheelchair"
    ],
    u: "1f9d1-200d-1f9bc",
    v: [
      "1f9d1-1f3fb-200d-1f9bc",
      "1f9d1-1f3fc-200d-1f9bc",
      "1f9d1-1f3fd-200d-1f9bc",
      "1f9d1-1f3fe-200d-1f9bc",
      "1f9d1-1f3ff-200d-1f9bc"
    ],
    a: "12.1"
  },
  {
    n: [
      "man in motorized wheelchair"
    ],
    u: "1f468-200d-1f9bc",
    v: [
      "1f468-1f3fb-200d-1f9bc",
      "1f468-1f3fc-200d-1f9bc",
      "1f468-1f3fd-200d-1f9bc",
      "1f468-1f3fe-200d-1f9bc",
      "1f468-1f3ff-200d-1f9bc"
    ],
    a: "12.0"
  },
  {
    n: [
      "woman in motorized wheelchair"
    ],
    u: "1f469-200d-1f9bc",
    v: [
      "1f469-1f3fb-200d-1f9bc",
      "1f469-1f3fc-200d-1f9bc",
      "1f469-1f3fd-200d-1f9bc",
      "1f469-1f3fe-200d-1f9bc",
      "1f469-1f3ff-200d-1f9bc"
    ],
    a: "12.0"
  },
  {
    n: [
      "person in manual wheelchair"
    ],
    u: "1f9d1-200d-1f9bd",
    v: [
      "1f9d1-1f3fb-200d-1f9bd",
      "1f9d1-1f3fc-200d-1f9bd",
      "1f9d1-1f3fd-200d-1f9bd",
      "1f9d1-1f3fe-200d-1f9bd",
      "1f9d1-1f3ff-200d-1f9bd"
    ],
    a: "12.1"
  },
  {
    n: [
      "man in manual wheelchair"
    ],
    u: "1f468-200d-1f9bd",
    v: [
      "1f468-1f3fb-200d-1f9bd",
      "1f468-1f3fc-200d-1f9bd",
      "1f468-1f3fd-200d-1f9bd",
      "1f468-1f3fe-200d-1f9bd",
      "1f468-1f3ff-200d-1f9bd"
    ],
    a: "12.0"
  },
  {
    n: [
      "woman in manual wheelchair"
    ],
    u: "1f469-200d-1f9bd",
    v: [
      "1f469-1f3fb-200d-1f9bd",
      "1f469-1f3fc-200d-1f9bd",
      "1f469-1f3fd-200d-1f9bd",
      "1f469-1f3fe-200d-1f9bd",
      "1f469-1f3ff-200d-1f9bd"
    ],
    a: "12.0"
  },
  {
    n: [
      "runner",
      "running"
    ],
    u: "1f3c3",
    v: [
      "1f3c3-1f3fb",
      "1f3c3-1f3fc",
      "1f3c3-1f3fd",
      "1f3c3-1f3fe",
      "1f3c3-1f3ff"
    ],
    a: "0.6"
  },
  {
    n: [
      "man running",
      "man-running"
    ],
    u: "1f3c3-200d-2642-fe0f",
    v: [
      "1f3c3-1f3fb-200d-2642-fe0f",
      "1f3c3-1f3fc-200d-2642-fe0f",
      "1f3c3-1f3fd-200d-2642-fe0f",
      "1f3c3-1f3fe-200d-2642-fe0f",
      "1f3c3-1f3ff-200d-2642-fe0f"
    ],
    a: "4.0"
  },
  {
    n: [
      "woman running",
      "woman-running"
    ],
    u: "1f3c3-200d-2640-fe0f",
    v: [
      "1f3c3-1f3fb-200d-2640-fe0f",
      "1f3c3-1f3fc-200d-2640-fe0f",
      "1f3c3-1f3fd-200d-2640-fe0f",
      "1f3c3-1f3fe-200d-2640-fe0f",
      "1f3c3-1f3ff-200d-2640-fe0f"
    ],
    a: "4.0"
  },
  {
    n: [
      "dancer"
    ],
    u: "1f483",
    v: [
      "1f483-1f3fb",
      "1f483-1f3fc",
      "1f483-1f3fd",
      "1f483-1f3fe",
      "1f483-1f3ff"
    ],
    a: "0.6"
  },
  {
    n: [
      "man dancing"
    ],
    u: "1f57a",
    v: [
      "1f57a-1f3fb",
      "1f57a-1f3fc",
      "1f57a-1f3fd",
      "1f57a-1f3fe",
      "1f57a-1f3ff"
    ],
    a: "3.0"
  },
  {
    n: [
      "person in suit levitating",
      "man in business suit levitating"
    ],
    u: "1f574-fe0f",
    v: [
      "1f574-1f3fb",
      "1f574-1f3fc",
      "1f574-1f3fd",
      "1f574-1f3fe",
      "1f574-1f3ff"
    ],
    a: "0.7"
  },
  {
    n: [
      "dancers",
      "woman with bunny ears"
    ],
    u: "1f46f",
    a: "0.6"
  },
  {
    n: [
      "men with bunny ears",
      "men-with-bunny-ears-partying",
      "man-with-bunny-ears-partying"
    ],
    u: "1f46f-200d-2642-fe0f",
    a: "4.0"
  },
  {
    n: [
      "women with bunny ears",
      "women-with-bunny-ears-partying",
      "woman-with-bunny-ears-partying"
    ],
    u: "1f46f-200d-2640-fe0f",
    a: "4.0"
  },
  {
    n: [
      "person in steamy room"
    ],
    u: "1f9d6",
    v: [
      "1f9d6-1f3fb",
      "1f9d6-1f3fc",
      "1f9d6-1f3fd",
      "1f9d6-1f3fe",
      "1f9d6-1f3ff"
    ],
    a: "5.0"
  },
  {
    n: [
      "man in steamy room"
    ],
    u: "1f9d6-200d-2642-fe0f",
    v: [
      "1f9d6-1f3fb-200d-2642-fe0f",
      "1f9d6-1f3fc-200d-2642-fe0f",
      "1f9d6-1f3fd-200d-2642-fe0f",
      "1f9d6-1f3fe-200d-2642-fe0f",
      "1f9d6-1f3ff-200d-2642-fe0f"
    ],
    a: "5.0"
  },
  {
    n: [
      "woman in steamy room"
    ],
    u: "1f9d6-200d-2640-fe0f",
    v: [
      "1f9d6-1f3fb-200d-2640-fe0f",
      "1f9d6-1f3fc-200d-2640-fe0f",
      "1f9d6-1f3fd-200d-2640-fe0f",
      "1f9d6-1f3fe-200d-2640-fe0f",
      "1f9d6-1f3ff-200d-2640-fe0f"
    ],
    a: "5.0"
  },
  {
    n: [
      "person climbing"
    ],
    u: "1f9d7",
    v: [
      "1f9d7-1f3fb",
      "1f9d7-1f3fc",
      "1f9d7-1f3fd",
      "1f9d7-1f3fe",
      "1f9d7-1f3ff"
    ],
    a: "5.0"
  },
  {
    n: [
      "man climbing"
    ],
    u: "1f9d7-200d-2642-fe0f",
    v: [
      "1f9d7-1f3fb-200d-2642-fe0f",
      "1f9d7-1f3fc-200d-2642-fe0f",
      "1f9d7-1f3fd-200d-2642-fe0f",
      "1f9d7-1f3fe-200d-2642-fe0f",
      "1f9d7-1f3ff-200d-2642-fe0f"
    ],
    a: "5.0"
  },
  {
    n: [
      "woman climbing"
    ],
    u: "1f9d7-200d-2640-fe0f",
    v: [
      "1f9d7-1f3fb-200d-2640-fe0f",
      "1f9d7-1f3fc-200d-2640-fe0f",
      "1f9d7-1f3fd-200d-2640-fe0f",
      "1f9d7-1f3fe-200d-2640-fe0f",
      "1f9d7-1f3ff-200d-2640-fe0f"
    ],
    a: "5.0"
  },
  {
    n: [
      "fencer"
    ],
    u: "1f93a",
    a: "3.0"
  },
  {
    n: [
      "horse racing"
    ],
    u: "1f3c7",
    v: [
      "1f3c7-1f3fb",
      "1f3c7-1f3fc",
      "1f3c7-1f3fd",
      "1f3c7-1f3fe",
      "1f3c7-1f3ff"
    ],
    a: "1.0"
  },
  {
    n: [
      "skier"
    ],
    u: "26f7-fe0f",
    a: "0.7"
  },
  {
    n: [
      "snowboarder"
    ],
    u: "1f3c2",
    v: [
      "1f3c2-1f3fb",
      "1f3c2-1f3fc",
      "1f3c2-1f3fd",
      "1f3c2-1f3fe",
      "1f3c2-1f3ff"
    ],
    a: "0.6"
  },
  {
    n: [
      "golfer",
      "person golfing"
    ],
    u: "1f3cc-fe0f",
    v: [
      "1f3cc-1f3fb",
      "1f3cc-1f3fc",
      "1f3cc-1f3fd",
      "1f3cc-1f3fe",
      "1f3cc-1f3ff"
    ],
    a: "0.7"
  },
  {
    n: [
      "man golfing",
      "man-golfing"
    ],
    u: "1f3cc-fe0f-200d-2642-fe0f",
    v: [
      "1f3cc-1f3fb-200d-2642-fe0f",
      "1f3cc-1f3fc-200d-2642-fe0f",
      "1f3cc-1f3fd-200d-2642-fe0f",
      "1f3cc-1f3fe-200d-2642-fe0f",
      "1f3cc-1f3ff-200d-2642-fe0f"
    ],
    a: "4.0"
  },
  {
    n: [
      "woman golfing",
      "woman-golfing"
    ],
    u: "1f3cc-fe0f-200d-2640-fe0f",
    v: [
      "1f3cc-1f3fb-200d-2640-fe0f",
      "1f3cc-1f3fc-200d-2640-fe0f",
      "1f3cc-1f3fd-200d-2640-fe0f",
      "1f3cc-1f3fe-200d-2640-fe0f",
      "1f3cc-1f3ff-200d-2640-fe0f"
    ],
    a: "4.0"
  },
  {
    n: [
      "surfer"
    ],
    u: "1f3c4",
    v: [
      "1f3c4-1f3fb",
      "1f3c4-1f3fc",
      "1f3c4-1f3fd",
      "1f3c4-1f3fe",
      "1f3c4-1f3ff"
    ],
    a: "0.6"
  },
  {
    n: [
      "man surfing",
      "man-surfing"
    ],
    u: "1f3c4-200d-2642-fe0f",
    v: [
      "1f3c4-1f3fb-200d-2642-fe0f",
      "1f3c4-1f3fc-200d-2642-fe0f",
      "1f3c4-1f3fd-200d-2642-fe0f",
      "1f3c4-1f3fe-200d-2642-fe0f",
      "1f3c4-1f3ff-200d-2642-fe0f"
    ],
    a: "4.0"
  },
  {
    n: [
      "woman surfing",
      "woman-surfing"
    ],
    u: "1f3c4-200d-2640-fe0f",
    v: [
      "1f3c4-1f3fb-200d-2640-fe0f",
      "1f3c4-1f3fc-200d-2640-fe0f",
      "1f3c4-1f3fd-200d-2640-fe0f",
      "1f3c4-1f3fe-200d-2640-fe0f",
      "1f3c4-1f3ff-200d-2640-fe0f"
    ],
    a: "4.0"
  },
  {
    n: [
      "rowboat"
    ],
    u: "1f6a3",
    v: [
      "1f6a3-1f3fb",
      "1f6a3-1f3fc",
      "1f6a3-1f3fd",
      "1f6a3-1f3fe",
      "1f6a3-1f3ff"
    ],
    a: "1.0"
  },
  {
    n: [
      "man rowing boat",
      "man-rowing-boat"
    ],
    u: "1f6a3-200d-2642-fe0f",
    v: [
      "1f6a3-1f3fb-200d-2642-fe0f",
      "1f6a3-1f3fc-200d-2642-fe0f",
      "1f6a3-1f3fd-200d-2642-fe0f",
      "1f6a3-1f3fe-200d-2642-fe0f",
      "1f6a3-1f3ff-200d-2642-fe0f"
    ],
    a: "4.0"
  },
  {
    n: [
      "woman rowing boat",
      "woman-rowing-boat"
    ],
    u: "1f6a3-200d-2640-fe0f",
    v: [
      "1f6a3-1f3fb-200d-2640-fe0f",
      "1f6a3-1f3fc-200d-2640-fe0f",
      "1f6a3-1f3fd-200d-2640-fe0f",
      "1f6a3-1f3fe-200d-2640-fe0f",
      "1f6a3-1f3ff-200d-2640-fe0f"
    ],
    a: "4.0"
  },
  {
    n: [
      "swimmer"
    ],
    u: "1f3ca",
    v: [
      "1f3ca-1f3fb",
      "1f3ca-1f3fc",
      "1f3ca-1f3fd",
      "1f3ca-1f3fe",
      "1f3ca-1f3ff"
    ],
    a: "0.6"
  },
  {
    n: [
      "man swimming",
      "man-swimming"
    ],
    u: "1f3ca-200d-2642-fe0f",
    v: [
      "1f3ca-1f3fb-200d-2642-fe0f",
      "1f3ca-1f3fc-200d-2642-fe0f",
      "1f3ca-1f3fd-200d-2642-fe0f",
      "1f3ca-1f3fe-200d-2642-fe0f",
      "1f3ca-1f3ff-200d-2642-fe0f"
    ],
    a: "4.0"
  },
  {
    n: [
      "woman swimming",
      "woman-swimming"
    ],
    u: "1f3ca-200d-2640-fe0f",
    v: [
      "1f3ca-1f3fb-200d-2640-fe0f",
      "1f3ca-1f3fc-200d-2640-fe0f",
      "1f3ca-1f3fd-200d-2640-fe0f",
      "1f3ca-1f3fe-200d-2640-fe0f",
      "1f3ca-1f3ff-200d-2640-fe0f"
    ],
    a: "4.0"
  },
  {
    n: [
      "person with ball",
      "person bouncing ball"
    ],
    u: "26f9-fe0f",
    v: [
      "26f9-1f3fb",
      "26f9-1f3fc",
      "26f9-1f3fd",
      "26f9-1f3fe",
      "26f9-1f3ff"
    ],
    a: "0.7"
  },
  {
    n: [
      "man bouncing ball",
      "man-bouncing-ball"
    ],
    u: "26f9-fe0f-200d-2642-fe0f",
    v: [
      "26f9-1f3fb-200d-2642-fe0f",
      "26f9-1f3fc-200d-2642-fe0f",
      "26f9-1f3fd-200d-2642-fe0f",
      "26f9-1f3fe-200d-2642-fe0f",
      "26f9-1f3ff-200d-2642-fe0f"
    ],
    a: "4.0"
  },
  {
    n: [
      "woman bouncing ball",
      "woman-bouncing-ball"
    ],
    u: "26f9-fe0f-200d-2640-fe0f",
    v: [
      "26f9-1f3fb-200d-2640-fe0f",
      "26f9-1f3fc-200d-2640-fe0f",
      "26f9-1f3fd-200d-2640-fe0f",
      "26f9-1f3fe-200d-2640-fe0f",
      "26f9-1f3ff-200d-2640-fe0f"
    ],
    a: "4.0"
  },
  {
    n: [
      "weight lifter",
      "person lifting weights"
    ],
    u: "1f3cb-fe0f",
    v: [
      "1f3cb-1f3fb",
      "1f3cb-1f3fc",
      "1f3cb-1f3fd",
      "1f3cb-1f3fe",
      "1f3cb-1f3ff"
    ],
    a: "0.7"
  },
  {
    n: [
      "man lifting weights",
      "man-lifting-weights"
    ],
    u: "1f3cb-fe0f-200d-2642-fe0f",
    v: [
      "1f3cb-1f3fb-200d-2642-fe0f",
      "1f3cb-1f3fc-200d-2642-fe0f",
      "1f3cb-1f3fd-200d-2642-fe0f",
      "1f3cb-1f3fe-200d-2642-fe0f",
      "1f3cb-1f3ff-200d-2642-fe0f"
    ],
    a: "4.0"
  },
  {
    n: [
      "woman lifting weights",
      "woman-lifting-weights"
    ],
    u: "1f3cb-fe0f-200d-2640-fe0f",
    v: [
      "1f3cb-1f3fb-200d-2640-fe0f",
      "1f3cb-1f3fc-200d-2640-fe0f",
      "1f3cb-1f3fd-200d-2640-fe0f",
      "1f3cb-1f3fe-200d-2640-fe0f",
      "1f3cb-1f3ff-200d-2640-fe0f"
    ],
    a: "4.0"
  },
  {
    n: [
      "bicyclist"
    ],
    u: "1f6b4",
    v: [
      "1f6b4-1f3fb",
      "1f6b4-1f3fc",
      "1f6b4-1f3fd",
      "1f6b4-1f3fe",
      "1f6b4-1f3ff"
    ],
    a: "1.0"
  },
  {
    n: [
      "man biking",
      "man-biking"
    ],
    u: "1f6b4-200d-2642-fe0f",
    v: [
      "1f6b4-1f3fb-200d-2642-fe0f",
      "1f6b4-1f3fc-200d-2642-fe0f",
      "1f6b4-1f3fd-200d-2642-fe0f",
      "1f6b4-1f3fe-200d-2642-fe0f",
      "1f6b4-1f3ff-200d-2642-fe0f"
    ],
    a: "4.0"
  },
  {
    n: [
      "woman biking",
      "woman-biking"
    ],
    u: "1f6b4-200d-2640-fe0f",
    v: [
      "1f6b4-1f3fb-200d-2640-fe0f",
      "1f6b4-1f3fc-200d-2640-fe0f",
      "1f6b4-1f3fd-200d-2640-fe0f",
      "1f6b4-1f3fe-200d-2640-fe0f",
      "1f6b4-1f3ff-200d-2640-fe0f"
    ],
    a: "4.0"
  },
  {
    n: [
      "mountain bicyclist"
    ],
    u: "1f6b5",
    v: [
      "1f6b5-1f3fb",
      "1f6b5-1f3fc",
      "1f6b5-1f3fd",
      "1f6b5-1f3fe",
      "1f6b5-1f3ff"
    ],
    a: "1.0"
  },
  {
    n: [
      "man mountain biking",
      "man-mountain-biking"
    ],
    u: "1f6b5-200d-2642-fe0f",
    v: [
      "1f6b5-1f3fb-200d-2642-fe0f",
      "1f6b5-1f3fc-200d-2642-fe0f",
      "1f6b5-1f3fd-200d-2642-fe0f",
      "1f6b5-1f3fe-200d-2642-fe0f",
      "1f6b5-1f3ff-200d-2642-fe0f"
    ],
    a: "4.0"
  },
  {
    n: [
      "woman mountain biking",
      "woman-mountain-biking"
    ],
    u: "1f6b5-200d-2640-fe0f",
    v: [
      "1f6b5-1f3fb-200d-2640-fe0f",
      "1f6b5-1f3fc-200d-2640-fe0f",
      "1f6b5-1f3fd-200d-2640-fe0f",
      "1f6b5-1f3fe-200d-2640-fe0f",
      "1f6b5-1f3ff-200d-2640-fe0f"
    ],
    a: "4.0"
  },
  {
    n: [
      "person doing cartwheel"
    ],
    u: "1f938",
    v: [
      "1f938-1f3fb",
      "1f938-1f3fc",
      "1f938-1f3fd",
      "1f938-1f3fe",
      "1f938-1f3ff"
    ],
    a: "3.0"
  },
  {
    n: [
      "man cartwheeling",
      "man-cartwheeling"
    ],
    u: "1f938-200d-2642-fe0f",
    v: [
      "1f938-1f3fb-200d-2642-fe0f",
      "1f938-1f3fc-200d-2642-fe0f",
      "1f938-1f3fd-200d-2642-fe0f",
      "1f938-1f3fe-200d-2642-fe0f",
      "1f938-1f3ff-200d-2642-fe0f"
    ],
    a: "4.0"
  },
  {
    n: [
      "woman cartwheeling",
      "woman-cartwheeling"
    ],
    u: "1f938-200d-2640-fe0f",
    v: [
      "1f938-1f3fb-200d-2640-fe0f",
      "1f938-1f3fc-200d-2640-fe0f",
      "1f938-1f3fd-200d-2640-fe0f",
      "1f938-1f3fe-200d-2640-fe0f",
      "1f938-1f3ff-200d-2640-fe0f"
    ],
    a: "4.0"
  },
  {
    n: [
      "wrestlers"
    ],
    u: "1f93c",
    a: "3.0"
  },
  {
    n: [
      "men wrestling",
      "man-wrestling"
    ],
    u: "1f93c-200d-2642-fe0f",
    a: "4.0"
  },
  {
    n: [
      "women wrestling",
      "woman-wrestling"
    ],
    u: "1f93c-200d-2640-fe0f",
    a: "4.0"
  },
  {
    n: [
      "water polo"
    ],
    u: "1f93d",
    v: [
      "1f93d-1f3fb",
      "1f93d-1f3fc",
      "1f93d-1f3fd",
      "1f93d-1f3fe",
      "1f93d-1f3ff"
    ],
    a: "3.0"
  },
  {
    n: [
      "man playing water polo",
      "man-playing-water-polo"
    ],
    u: "1f93d-200d-2642-fe0f",
    v: [
      "1f93d-1f3fb-200d-2642-fe0f",
      "1f93d-1f3fc-200d-2642-fe0f",
      "1f93d-1f3fd-200d-2642-fe0f",
      "1f93d-1f3fe-200d-2642-fe0f",
      "1f93d-1f3ff-200d-2642-fe0f"
    ],
    a: "4.0"
  },
  {
    n: [
      "woman playing water polo",
      "woman-playing-water-polo"
    ],
    u: "1f93d-200d-2640-fe0f",
    v: [
      "1f93d-1f3fb-200d-2640-fe0f",
      "1f93d-1f3fc-200d-2640-fe0f",
      "1f93d-1f3fd-200d-2640-fe0f",
      "1f93d-1f3fe-200d-2640-fe0f",
      "1f93d-1f3ff-200d-2640-fe0f"
    ],
    a: "4.0"
  },
  {
    n: [
      "handball"
    ],
    u: "1f93e",
    v: [
      "1f93e-1f3fb",
      "1f93e-1f3fc",
      "1f93e-1f3fd",
      "1f93e-1f3fe",
      "1f93e-1f3ff"
    ],
    a: "3.0"
  },
  {
    n: [
      "man playing handball",
      "man-playing-handball"
    ],
    u: "1f93e-200d-2642-fe0f",
    v: [
      "1f93e-1f3fb-200d-2642-fe0f",
      "1f93e-1f3fc-200d-2642-fe0f",
      "1f93e-1f3fd-200d-2642-fe0f",
      "1f93e-1f3fe-200d-2642-fe0f",
      "1f93e-1f3ff-200d-2642-fe0f"
    ],
    a: "4.0"
  },
  {
    n: [
      "woman playing handball",
      "woman-playing-handball"
    ],
    u: "1f93e-200d-2640-fe0f",
    v: [
      "1f93e-1f3fb-200d-2640-fe0f",
      "1f93e-1f3fc-200d-2640-fe0f",
      "1f93e-1f3fd-200d-2640-fe0f",
      "1f93e-1f3fe-200d-2640-fe0f",
      "1f93e-1f3ff-200d-2640-fe0f"
    ],
    a: "4.0"
  },
  {
    n: [
      "juggling"
    ],
    u: "1f939",
    v: [
      "1f939-1f3fb",
      "1f939-1f3fc",
      "1f939-1f3fd",
      "1f939-1f3fe",
      "1f939-1f3ff"
    ],
    a: "3.0"
  },
  {
    n: [
      "man juggling",
      "man-juggling"
    ],
    u: "1f939-200d-2642-fe0f",
    v: [
      "1f939-1f3fb-200d-2642-fe0f",
      "1f939-1f3fc-200d-2642-fe0f",
      "1f939-1f3fd-200d-2642-fe0f",
      "1f939-1f3fe-200d-2642-fe0f",
      "1f939-1f3ff-200d-2642-fe0f"
    ],
    a: "4.0"
  },
  {
    n: [
      "woman juggling",
      "woman-juggling"
    ],
    u: "1f939-200d-2640-fe0f",
    v: [
      "1f939-1f3fb-200d-2640-fe0f",
      "1f939-1f3fc-200d-2640-fe0f",
      "1f939-1f3fd-200d-2640-fe0f",
      "1f939-1f3fe-200d-2640-fe0f",
      "1f939-1f3ff-200d-2640-fe0f"
    ],
    a: "4.0"
  },
  {
    n: [
      "person in lotus position"
    ],
    u: "1f9d8",
    v: [
      "1f9d8-1f3fb",
      "1f9d8-1f3fc",
      "1f9d8-1f3fd",
      "1f9d8-1f3fe",
      "1f9d8-1f3ff"
    ],
    a: "5.0"
  },
  {
    n: [
      "man in lotus position"
    ],
    u: "1f9d8-200d-2642-fe0f",
    v: [
      "1f9d8-1f3fb-200d-2642-fe0f",
      "1f9d8-1f3fc-200d-2642-fe0f",
      "1f9d8-1f3fd-200d-2642-fe0f",
      "1f9d8-1f3fe-200d-2642-fe0f",
      "1f9d8-1f3ff-200d-2642-fe0f"
    ],
    a: "5.0"
  },
  {
    n: [
      "woman in lotus position"
    ],
    u: "1f9d8-200d-2640-fe0f",
    v: [
      "1f9d8-1f3fb-200d-2640-fe0f",
      "1f9d8-1f3fc-200d-2640-fe0f",
      "1f9d8-1f3fd-200d-2640-fe0f",
      "1f9d8-1f3fe-200d-2640-fe0f",
      "1f9d8-1f3ff-200d-2640-fe0f"
    ],
    a: "5.0"
  },
  {
    n: [
      "bath"
    ],
    u: "1f6c0",
    v: [
      "1f6c0-1f3fb",
      "1f6c0-1f3fc",
      "1f6c0-1f3fd",
      "1f6c0-1f3fe",
      "1f6c0-1f3ff"
    ],
    a: "0.6"
  },
  {
    n: [
      "sleeping accommodation"
    ],
    u: "1f6cc",
    v: [
      "1f6cc-1f3fb",
      "1f6cc-1f3fc",
      "1f6cc-1f3fd",
      "1f6cc-1f3fe",
      "1f6cc-1f3ff"
    ],
    a: "1.0"
  },
  {
    n: [
      "people holding hands"
    ],
    u: "1f9d1-200d-1f91d-200d-1f9d1",
    v: [
      "1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fb",
      "1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fc",
      "1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fd",
      "1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fe",
      "1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3ff",
      "1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fb",
      "1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fc",
      "1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fd",
      "1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fe",
      "1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3ff",
      "1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fb",
      "1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fc",
      "1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fd",
      "1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fe",
      "1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3ff",
      "1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fb",
      "1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fc",
      "1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fd",
      "1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fe",
      "1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3ff",
      "1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fb",
      "1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fc",
      "1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fd",
      "1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fe",
      "1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3ff"
    ],
    a: "12.0"
  },
  {
    n: [
      "women holding hands",
      "two women holding hands"
    ],
    u: "1f46d",
    v: [
      "1f46d-1f3fb",
      "1f46d-1f3fc",
      "1f46d-1f3fd",
      "1f46d-1f3fe",
      "1f46d-1f3ff",
      "1f469-1f3fb-200d-1f91d-200d-1f469-1f3fc",
      "1f469-1f3fb-200d-1f91d-200d-1f469-1f3fd",
      "1f469-1f3fb-200d-1f91d-200d-1f469-1f3fe",
      "1f469-1f3fb-200d-1f91d-200d-1f469-1f3ff",
      "1f469-1f3fc-200d-1f91d-200d-1f469-1f3fb",
      "1f469-1f3fc-200d-1f91d-200d-1f469-1f3fd",
      "1f469-1f3fc-200d-1f91d-200d-1f469-1f3fe",
      "1f469-1f3fc-200d-1f91d-200d-1f469-1f3ff",
      "1f469-1f3fd-200d-1f91d-200d-1f469-1f3fb",
      "1f469-1f3fd-200d-1f91d-200d-1f469-1f3fc",
      "1f469-1f3fd-200d-1f91d-200d-1f469-1f3fe",
      "1f469-1f3fd-200d-1f91d-200d-1f469-1f3ff",
      "1f469-1f3fe-200d-1f91d-200d-1f469-1f3fb",
      "1f469-1f3fe-200d-1f91d-200d-1f469-1f3fc",
      "1f469-1f3fe-200d-1f91d-200d-1f469-1f3fd",
      "1f469-1f3fe-200d-1f91d-200d-1f469-1f3ff",
      "1f469-1f3ff-200d-1f91d-200d-1f469-1f3fb",
      "1f469-1f3ff-200d-1f91d-200d-1f469-1f3fc",
      "1f469-1f3ff-200d-1f91d-200d-1f469-1f3fd",
      "1f469-1f3ff-200d-1f91d-200d-1f469-1f3fe"
    ],
    a: "1.0"
  },
  {
    n: [
      "couple",
      "man and woman holding hands",
      "woman and man holding hands"
    ],
    u: "1f46b",
    v: [
      "1f46b-1f3fb",
      "1f46b-1f3fc",
      "1f46b-1f3fd",
      "1f46b-1f3fe",
      "1f46b-1f3ff",
      "1f469-1f3fb-200d-1f91d-200d-1f468-1f3fc",
      "1f469-1f3fb-200d-1f91d-200d-1f468-1f3fd",
      "1f469-1f3fb-200d-1f91d-200d-1f468-1f3fe",
      "1f469-1f3fb-200d-1f91d-200d-1f468-1f3ff",
      "1f469-1f3fc-200d-1f91d-200d-1f468-1f3fb",
      "1f469-1f3fc-200d-1f91d-200d-1f468-1f3fd",
      "1f469-1f3fc-200d-1f91d-200d-1f468-1f3fe",
      "1f469-1f3fc-200d-1f91d-200d-1f468-1f3ff",
      "1f469-1f3fd-200d-1f91d-200d-1f468-1f3fb",
      "1f469-1f3fd-200d-1f91d-200d-1f468-1f3fc",
      "1f469-1f3fd-200d-1f91d-200d-1f468-1f3fe",
      "1f469-1f3fd-200d-1f91d-200d-1f468-1f3ff",
      "1f469-1f3fe-200d-1f91d-200d-1f468-1f3fb",
      "1f469-1f3fe-200d-1f91d-200d-1f468-1f3fc",
      "1f469-1f3fe-200d-1f91d-200d-1f468-1f3fd",
      "1f469-1f3fe-200d-1f91d-200d-1f468-1f3ff",
      "1f469-1f3ff-200d-1f91d-200d-1f468-1f3fb",
      "1f469-1f3ff-200d-1f91d-200d-1f468-1f3fc",
      "1f469-1f3ff-200d-1f91d-200d-1f468-1f3fd",
      "1f469-1f3ff-200d-1f91d-200d-1f468-1f3fe"
    ],
    a: "0.6"
  },
  {
    n: [
      "men holding hands",
      "two men holding hands"
    ],
    u: "1f46c",
    v: [
      "1f46c-1f3fb",
      "1f46c-1f3fc",
      "1f46c-1f3fd",
      "1f46c-1f3fe",
      "1f46c-1f3ff",
      "1f468-1f3fb-200d-1f91d-200d-1f468-1f3fc",
      "1f468-1f3fb-200d-1f91d-200d-1f468-1f3fd",
      "1f468-1f3fb-200d-1f91d-200d-1f468-1f3fe",
      "1f468-1f3fb-200d-1f91d-200d-1f468-1f3ff",
      "1f468-1f3fc-200d-1f91d-200d-1f468-1f3fb",
      "1f468-1f3fc-200d-1f91d-200d-1f468-1f3fd",
      "1f468-1f3fc-200d-1f91d-200d-1f468-1f3fe",
      "1f468-1f3fc-200d-1f91d-200d-1f468-1f3ff",
      "1f468-1f3fd-200d-1f91d-200d-1f468-1f3fb",
      "1f468-1f3fd-200d-1f91d-200d-1f468-1f3fc",
      "1f468-1f3fd-200d-1f91d-200d-1f468-1f3fe",
      "1f468-1f3fd-200d-1f91d-200d-1f468-1f3ff",
      "1f468-1f3fe-200d-1f91d-200d-1f468-1f3fb",
      "1f468-1f3fe-200d-1f91d-200d-1f468-1f3fc",
      "1f468-1f3fe-200d-1f91d-200d-1f468-1f3fd",
      "1f468-1f3fe-200d-1f91d-200d-1f468-1f3ff",
      "1f468-1f3ff-200d-1f91d-200d-1f468-1f3fb",
      "1f468-1f3ff-200d-1f91d-200d-1f468-1f3fc",
      "1f468-1f3ff-200d-1f91d-200d-1f468-1f3fd",
      "1f468-1f3ff-200d-1f91d-200d-1f468-1f3fe"
    ],
    a: "1.0"
  },
  {
    n: [
      "kiss",
      "couplekiss"
    ],
    u: "1f48f",
    v: [
      "1f48f-1f3fb",
      "1f48f-1f3fc",
      "1f48f-1f3fd",
      "1f48f-1f3fe",
      "1f48f-1f3ff",
      "1f9d1-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fc",
      "1f9d1-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fd",
      "1f9d1-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fe",
      "1f9d1-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3ff",
      "1f9d1-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fb",
      "1f9d1-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fd",
      "1f9d1-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fe",
      "1f9d1-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3ff",
      "1f9d1-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fb",
      "1f9d1-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fc",
      "1f9d1-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fe",
      "1f9d1-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3ff",
      "1f9d1-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fb",
      "1f9d1-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fc",
      "1f9d1-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fd",
      "1f9d1-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3ff",
      "1f9d1-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fb",
      "1f9d1-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fc",
      "1f9d1-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fd",
      "1f9d1-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fe"
    ],
    a: "0.6"
  },
  {
    n: [
      "woman-kiss-man",
      "kiss: woman, man"
    ],
    u: "1f469-200d-2764-fe0f-200d-1f48b-200d-1f468",
    v: [
      "1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb",
      "1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc",
      "1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd",
      "1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe",
      "1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff",
      "1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb",
      "1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc",
      "1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd",
      "1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe",
      "1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff",
      "1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb",
      "1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc",
      "1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd",
      "1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe",
      "1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff",
      "1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb",
      "1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc",
      "1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd",
      "1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe",
      "1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff",
      "1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb",
      "1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc",
      "1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd",
      "1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe",
      "1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff"
    ],
    a: "2.0"
  },
  {
    n: [
      "man-kiss-man",
      "kiss: man, man"
    ],
    u: "1f468-200d-2764-fe0f-200d-1f48b-200d-1f468",
    v: [
      "1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb",
      "1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc",
      "1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd",
      "1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe",
      "1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff",
      "1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb",
      "1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc",
      "1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd",
      "1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe",
      "1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff",
      "1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb",
      "1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc",
      "1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd",
      "1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe",
      "1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff",
      "1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb",
      "1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc",
      "1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd",
      "1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe",
      "1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff",
      "1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb",
      "1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc",
      "1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd",
      "1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe",
      "1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff"
    ],
    a: "2.0"
  },
  {
    n: [
      "woman-kiss-woman",
      "kiss: woman, woman"
    ],
    u: "1f469-200d-2764-fe0f-200d-1f48b-200d-1f469",
    v: [
      "1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb",
      "1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc",
      "1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd",
      "1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe",
      "1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff",
      "1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb",
      "1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc",
      "1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd",
      "1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe",
      "1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff",
      "1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb",
      "1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc",
      "1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd",
      "1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe",
      "1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff",
      "1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb",
      "1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc",
      "1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd",
      "1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe",
      "1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff",
      "1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb",
      "1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc",
      "1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd",
      "1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe",
      "1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff"
    ],
    a: "2.0"
  },
  {
    n: [
      "couple with heart"
    ],
    u: "1f491",
    v: [
      "1f491-1f3fb",
      "1f491-1f3fc",
      "1f491-1f3fd",
      "1f491-1f3fe",
      "1f491-1f3ff",
      "1f9d1-1f3fb-200d-2764-fe0f-200d-1f9d1-1f3fc",
      "1f9d1-1f3fb-200d-2764-fe0f-200d-1f9d1-1f3fd",
      "1f9d1-1f3fb-200d-2764-fe0f-200d-1f9d1-1f3fe",
      "1f9d1-1f3fb-200d-2764-fe0f-200d-1f9d1-1f3ff",
      "1f9d1-1f3fc-200d-2764-fe0f-200d-1f9d1-1f3fb",
      "1f9d1-1f3fc-200d-2764-fe0f-200d-1f9d1-1f3fd",
      "1f9d1-1f3fc-200d-2764-fe0f-200d-1f9d1-1f3fe",
      "1f9d1-1f3fc-200d-2764-fe0f-200d-1f9d1-1f3ff",
      "1f9d1-1f3fd-200d-2764-fe0f-200d-1f9d1-1f3fb",
      "1f9d1-1f3fd-200d-2764-fe0f-200d-1f9d1-1f3fc",
      "1f9d1-1f3fd-200d-2764-fe0f-200d-1f9d1-1f3fe",
      "1f9d1-1f3fd-200d-2764-fe0f-200d-1f9d1-1f3ff",
      "1f9d1-1f3fe-200d-2764-fe0f-200d-1f9d1-1f3fb",
      "1f9d1-1f3fe-200d-2764-fe0f-200d-1f9d1-1f3fc",
      "1f9d1-1f3fe-200d-2764-fe0f-200d-1f9d1-1f3fd",
      "1f9d1-1f3fe-200d-2764-fe0f-200d-1f9d1-1f3ff",
      "1f9d1-1f3ff-200d-2764-fe0f-200d-1f9d1-1f3fb",
      "1f9d1-1f3ff-200d-2764-fe0f-200d-1f9d1-1f3fc",
      "1f9d1-1f3ff-200d-2764-fe0f-200d-1f9d1-1f3fd",
      "1f9d1-1f3ff-200d-2764-fe0f-200d-1f9d1-1f3fe"
    ],
    a: "0.6"
  },
  {
    n: [
      "woman-heart-man",
      "couple with heart: woman, man"
    ],
    u: "1f469-200d-2764-fe0f-200d-1f468",
    v: [
      "1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3fb",
      "1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3fc",
      "1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3fd",
      "1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3fe",
      "1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3ff",
      "1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3fb",
      "1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3fc",
      "1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3fd",
      "1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3fe",
      "1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3ff",
      "1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3fb",
      "1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3fc",
      "1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3fd",
      "1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3fe",
      "1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3ff",
      "1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3fb",
      "1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3fc",
      "1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3fd",
      "1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3fe",
      "1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3ff",
      "1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3fb",
      "1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3fc",
      "1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3fd",
      "1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3fe",
      "1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3ff"
    ],
    a: "2.0"
  },
  {
    n: [
      "man-heart-man",
      "couple with heart: man, man"
    ],
    u: "1f468-200d-2764-fe0f-200d-1f468",
    v: [
      "1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3fb",
      "1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3fc",
      "1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3fd",
      "1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3fe",
      "1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3ff",
      "1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3fb",
      "1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3fc",
      "1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3fd",
      "1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3fe",
      "1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3ff",
      "1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3fb",
      "1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3fc",
      "1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3fd",
      "1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3fe",
      "1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3ff",
      "1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3fb",
      "1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3fc",
      "1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3fd",
      "1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3fe",
      "1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3ff",
      "1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3fb",
      "1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3fc",
      "1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3fd",
      "1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3fe",
      "1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3ff"
    ],
    a: "2.0"
  },
  {
    n: [
      "woman-heart-woman",
      "couple with heart: woman, woman"
    ],
    u: "1f469-200d-2764-fe0f-200d-1f469",
    v: [
      "1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3fb",
      "1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3fc",
      "1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3fd",
      "1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3fe",
      "1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3ff",
      "1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3fb",
      "1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3fc",
      "1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3fd",
      "1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3fe",
      "1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3ff",
      "1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3fb",
      "1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3fc",
      "1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3fd",
      "1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3fe",
      "1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3ff",
      "1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3fb",
      "1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3fc",
      "1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3fd",
      "1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3fe",
      "1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3ff",
      "1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3fb",
      "1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3fc",
      "1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3fd",
      "1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3fe",
      "1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3ff"
    ],
    a: "2.0"
  },
  {
    n: [
      "family"
    ],
    u: "1f46a",
    a: "0.6"
  },
  {
    n: [
      "man-woman-boy",
      "family: man, woman, boy"
    ],
    u: "1f468-200d-1f469-200d-1f466",
    a: "2.0"
  },
  {
    n: [
      "man-woman-girl",
      "family: man, woman, girl"
    ],
    u: "1f468-200d-1f469-200d-1f467",
    a: "2.0"
  },
  {
    n: [
      "man-woman-girl-boy",
      "family: man, woman, girl, boy"
    ],
    u: "1f468-200d-1f469-200d-1f467-200d-1f466",
    a: "2.0"
  },
  {
    n: [
      "man-woman-boy-boy",
      "family: man, woman, boy, boy"
    ],
    u: "1f468-200d-1f469-200d-1f466-200d-1f466",
    a: "2.0"
  },
  {
    n: [
      "man-woman-girl-girl",
      "family: man, woman, girl, girl"
    ],
    u: "1f468-200d-1f469-200d-1f467-200d-1f467",
    a: "2.0"
  },
  {
    n: [
      "man-man-boy",
      "family: man, man, boy"
    ],
    u: "1f468-200d-1f468-200d-1f466",
    a: "2.0"
  },
  {
    n: [
      "man-man-girl",
      "family: man, man, girl"
    ],
    u: "1f468-200d-1f468-200d-1f467",
    a: "2.0"
  },
  {
    n: [
      "man-man-girl-boy",
      "family: man, man, girl, boy"
    ],
    u: "1f468-200d-1f468-200d-1f467-200d-1f466",
    a: "2.0"
  },
  {
    n: [
      "man-man-boy-boy",
      "family: man, man, boy, boy"
    ],
    u: "1f468-200d-1f468-200d-1f466-200d-1f466",
    a: "2.0"
  },
  {
    n: [
      "man-man-girl-girl",
      "family: man, man, girl, girl"
    ],
    u: "1f468-200d-1f468-200d-1f467-200d-1f467",
    a: "2.0"
  },
  {
    n: [
      "woman-woman-boy",
      "family: woman, woman, boy"
    ],
    u: "1f469-200d-1f469-200d-1f466",
    a: "2.0"
  },
  {
    n: [
      "woman-woman-girl",
      "family: woman, woman, girl"
    ],
    u: "1f469-200d-1f469-200d-1f467",
    a: "2.0"
  },
  {
    n: [
      "woman-woman-girl-boy",
      "family: woman, woman, girl, boy"
    ],
    u: "1f469-200d-1f469-200d-1f467-200d-1f466",
    a: "2.0"
  },
  {
    n: [
      "woman-woman-boy-boy",
      "family: woman, woman, boy, boy"
    ],
    u: "1f469-200d-1f469-200d-1f466-200d-1f466",
    a: "2.0"
  },
  {
    n: [
      "woman-woman-girl-girl",
      "family: woman, woman, girl, girl"
    ],
    u: "1f469-200d-1f469-200d-1f467-200d-1f467",
    a: "2.0"
  },
  {
    n: [
      "man-boy",
      "family: man, boy"
    ],
    u: "1f468-200d-1f466",
    a: "4.0"
  },
  {
    n: [
      "man-boy-boy",
      "family: man, boy, boy"
    ],
    u: "1f468-200d-1f466-200d-1f466",
    a: "4.0"
  },
  {
    n: [
      "man-girl",
      "family: man, girl"
    ],
    u: "1f468-200d-1f467",
    a: "4.0"
  },
  {
    n: [
      "man-girl-boy",
      "family: man, girl, boy"
    ],
    u: "1f468-200d-1f467-200d-1f466",
    a: "4.0"
  },
  {
    n: [
      "man-girl-girl",
      "family: man, girl, girl"
    ],
    u: "1f468-200d-1f467-200d-1f467",
    a: "4.0"
  },
  {
    n: [
      "woman-boy",
      "family: woman, boy"
    ],
    u: "1f469-200d-1f466",
    a: "4.0"
  },
  {
    n: [
      "woman-boy-boy",
      "family: woman, boy, boy"
    ],
    u: "1f469-200d-1f466-200d-1f466",
    a: "4.0"
  },
  {
    n: [
      "woman-girl",
      "family: woman, girl"
    ],
    u: "1f469-200d-1f467",
    a: "4.0"
  },
  {
    n: [
      "woman-girl-boy",
      "family: woman, girl, boy"
    ],
    u: "1f469-200d-1f467-200d-1f466",
    a: "4.0"
  },
  {
    n: [
      "woman-girl-girl",
      "family: woman, girl, girl"
    ],
    u: "1f469-200d-1f467-200d-1f467",
    a: "4.0"
  },
  {
    n: [
      "speaking head",
      "speaking head in silhouette"
    ],
    u: "1f5e3-fe0f",
    a: "0.7"
  },
  {
    n: [
      "bust in silhouette"
    ],
    u: "1f464",
    a: "0.6"
  },
  {
    n: [
      "busts in silhouette"
    ],
    u: "1f465",
    a: "1.0"
  },
  {
    n: [
      "people hugging"
    ],
    u: "1fac2",
    a: "13.0"
  },
  {
    n: [
      "footprints"
    ],
    u: "1f463",
    a: "0.6"
  }
], ri = [
  {
    n: [
      "monkey face"
    ],
    u: "1f435",
    a: "0.6"
  },
  {
    n: [
      "monkey"
    ],
    u: "1f412",
    a: "0.6"
  },
  {
    n: [
      "gorilla"
    ],
    u: "1f98d",
    a: "3.0"
  },
  {
    n: [
      "orangutan"
    ],
    u: "1f9a7",
    a: "12.0"
  },
  {
    n: [
      "dog",
      "dog face"
    ],
    u: "1f436",
    a: "0.6"
  },
  {
    n: [
      "dog",
      "dog2"
    ],
    u: "1f415",
    a: "0.7"
  },
  {
    n: [
      "guide dog"
    ],
    u: "1f9ae",
    a: "12.0"
  },
  {
    n: [
      "service dog"
    ],
    u: "1f415-200d-1f9ba",
    a: "12.0"
  },
  {
    n: [
      "poodle"
    ],
    u: "1f429",
    a: "0.6"
  },
  {
    n: [
      "wolf",
      "wolf face"
    ],
    u: "1f43a",
    a: "0.6"
  },
  {
    n: [
      "fox face"
    ],
    u: "1f98a",
    a: "3.0"
  },
  {
    n: [
      "raccoon"
    ],
    u: "1f99d",
    a: "11.0"
  },
  {
    n: [
      "cat",
      "cat face"
    ],
    u: "1f431",
    a: "0.6"
  },
  {
    n: [
      "cat",
      "cat2"
    ],
    u: "1f408",
    a: "0.7"
  },
  {
    n: [
      "black cat"
    ],
    u: "1f408-200d-2b1b",
    a: "13.0"
  },
  {
    n: [
      "lion face"
    ],
    u: "1f981",
    a: "1.0"
  },
  {
    n: [
      "tiger",
      "tiger face"
    ],
    u: "1f42f",
    a: "0.6"
  },
  {
    n: [
      "tiger",
      "tiger2"
    ],
    u: "1f405",
    a: "1.0"
  },
  {
    n: [
      "leopard"
    ],
    u: "1f406",
    a: "1.0"
  },
  {
    n: [
      "horse",
      "horse face"
    ],
    u: "1f434",
    a: "0.6"
  },
  {
    n: [
      "horse",
      "racehorse"
    ],
    u: "1f40e",
    a: "0.6"
  },
  {
    n: [
      "unicorn face"
    ],
    u: "1f984",
    a: "1.0"
  },
  {
    n: [
      "zebra face"
    ],
    u: "1f993",
    a: "5.0"
  },
  {
    n: [
      "deer"
    ],
    u: "1f98c",
    a: "3.0"
  },
  {
    n: [
      "bison"
    ],
    u: "1f9ac",
    a: "13.0"
  },
  {
    n: [
      "cow",
      "cow face"
    ],
    u: "1f42e",
    a: "0.6"
  },
  {
    n: [
      "ox"
    ],
    u: "1f402",
    a: "1.0"
  },
  {
    n: [
      "water buffalo"
    ],
    u: "1f403",
    a: "1.0"
  },
  {
    n: [
      "cow",
      "cow2"
    ],
    u: "1f404",
    a: "1.0"
  },
  {
    n: [
      "pig",
      "pig face"
    ],
    u: "1f437",
    a: "0.6"
  },
  {
    n: [
      "pig",
      "pig2"
    ],
    u: "1f416",
    a: "1.0"
  },
  {
    n: [
      "boar"
    ],
    u: "1f417",
    a: "0.6"
  },
  {
    n: [
      "pig nose"
    ],
    u: "1f43d",
    a: "0.6"
  },
  {
    n: [
      "ram"
    ],
    u: "1f40f",
    a: "1.0"
  },
  {
    n: [
      "sheep"
    ],
    u: "1f411",
    a: "0.6"
  },
  {
    n: [
      "goat"
    ],
    u: "1f410",
    a: "1.0"
  },
  {
    n: [
      "dromedary camel"
    ],
    u: "1f42a",
    a: "1.0"
  },
  {
    n: [
      "camel",
      "bactrian camel"
    ],
    u: "1f42b",
    a: "0.6"
  },
  {
    n: [
      "llama"
    ],
    u: "1f999",
    a: "11.0"
  },
  {
    n: [
      "giraffe face"
    ],
    u: "1f992",
    a: "5.0"
  },
  {
    n: [
      "elephant"
    ],
    u: "1f418",
    a: "0.6"
  },
  {
    n: [
      "mammoth"
    ],
    u: "1f9a3",
    a: "13.0"
  },
  {
    n: [
      "rhinoceros"
    ],
    u: "1f98f",
    a: "3.0"
  },
  {
    n: [
      "hippopotamus"
    ],
    u: "1f99b",
    a: "11.0"
  },
  {
    n: [
      "mouse",
      "mouse face"
    ],
    u: "1f42d",
    a: "0.6"
  },
  {
    n: [
      "mouse",
      "mouse2"
    ],
    u: "1f401",
    a: "1.0"
  },
  {
    n: [
      "rat"
    ],
    u: "1f400",
    a: "1.0"
  },
  {
    n: [
      "hamster",
      "hamster face"
    ],
    u: "1f439",
    a: "0.6"
  },
  {
    n: [
      "rabbit",
      "rabbit face"
    ],
    u: "1f430",
    a: "0.6"
  },
  {
    n: [
      "rabbit",
      "rabbit2"
    ],
    u: "1f407",
    a: "1.0"
  },
  {
    n: [
      "chipmunk"
    ],
    u: "1f43f-fe0f",
    a: "0.7"
  },
  {
    n: [
      "beaver"
    ],
    u: "1f9ab",
    a: "13.0"
  },
  {
    n: [
      "hedgehog"
    ],
    u: "1f994",
    a: "5.0"
  },
  {
    n: [
      "bat"
    ],
    u: "1f987",
    a: "3.0"
  },
  {
    n: [
      "bear",
      "bear face"
    ],
    u: "1f43b",
    a: "0.6"
  },
  {
    n: [
      "polar bear"
    ],
    u: "1f43b-200d-2744-fe0f",
    a: "13.0"
  },
  {
    n: [
      "koala"
    ],
    u: "1f428",
    a: "0.6"
  },
  {
    n: [
      "panda face"
    ],
    u: "1f43c",
    a: "0.6"
  },
  {
    n: [
      "sloth"
    ],
    u: "1f9a5",
    a: "12.0"
  },
  {
    n: [
      "otter"
    ],
    u: "1f9a6",
    a: "12.0"
  },
  {
    n: [
      "skunk"
    ],
    u: "1f9a8",
    a: "12.0"
  },
  {
    n: [
      "kangaroo"
    ],
    u: "1f998",
    a: "11.0"
  },
  {
    n: [
      "badger"
    ],
    u: "1f9a1",
    a: "11.0"
  },
  {
    n: [
      "feet",
      "paw prints"
    ],
    u: "1f43e",
    a: "0.6"
  },
  {
    n: [
      "turkey"
    ],
    u: "1f983",
    a: "1.0"
  },
  {
    n: [
      "chicken"
    ],
    u: "1f414",
    a: "0.6"
  },
  {
    n: [
      "rooster"
    ],
    u: "1f413",
    a: "1.0"
  },
  {
    n: [
      "hatching chick"
    ],
    u: "1f423",
    a: "0.6"
  },
  {
    n: [
      "baby chick"
    ],
    u: "1f424",
    a: "0.6"
  },
  {
    n: [
      "hatched chick",
      "front-facing baby chick"
    ],
    u: "1f425",
    a: "0.6"
  },
  {
    n: [
      "bird"
    ],
    u: "1f426",
    a: "0.6"
  },
  {
    n: [
      "penguin"
    ],
    u: "1f427",
    a: "0.6"
  },
  {
    n: [
      "dove",
      "dove of peace"
    ],
    u: "1f54a-fe0f",
    a: "0.7"
  },
  {
    n: [
      "eagle"
    ],
    u: "1f985",
    a: "3.0"
  },
  {
    n: [
      "duck"
    ],
    u: "1f986",
    a: "3.0"
  },
  {
    n: [
      "swan"
    ],
    u: "1f9a2",
    a: "11.0"
  },
  {
    n: [
      "owl"
    ],
    u: "1f989",
    a: "3.0"
  },
  {
    n: [
      "dodo"
    ],
    u: "1f9a4",
    a: "13.0"
  },
  {
    n: [
      "feather"
    ],
    u: "1fab6",
    a: "13.0"
  },
  {
    n: [
      "flamingo"
    ],
    u: "1f9a9",
    a: "12.0"
  },
  {
    n: [
      "peacock"
    ],
    u: "1f99a",
    a: "11.0"
  },
  {
    n: [
      "parrot"
    ],
    u: "1f99c",
    a: "11.0"
  },
  {
    n: [
      "frog",
      "frog face"
    ],
    u: "1f438",
    a: "0.6"
  },
  {
    n: [
      "crocodile"
    ],
    u: "1f40a",
    a: "1.0"
  },
  {
    n: [
      "turtle"
    ],
    u: "1f422",
    a: "0.6"
  },
  {
    n: [
      "lizard"
    ],
    u: "1f98e",
    a: "3.0"
  },
  {
    n: [
      "snake"
    ],
    u: "1f40d",
    a: "0.6"
  },
  {
    n: [
      "dragon face"
    ],
    u: "1f432",
    a: "0.6"
  },
  {
    n: [
      "dragon"
    ],
    u: "1f409",
    a: "1.0"
  },
  {
    n: [
      "sauropod"
    ],
    u: "1f995",
    a: "5.0"
  },
  {
    n: [
      "t-rex"
    ],
    u: "1f996",
    a: "5.0"
  },
  {
    n: [
      "whale",
      "spouting whale"
    ],
    u: "1f433",
    a: "0.6"
  },
  {
    n: [
      "whale",
      "whale2"
    ],
    u: "1f40b",
    a: "1.0"
  },
  {
    n: [
      "dolphin",
      "flipper"
    ],
    u: "1f42c",
    a: "0.6"
  },
  {
    n: [
      "seal"
    ],
    u: "1f9ad",
    a: "13.0"
  },
  {
    n: [
      "fish"
    ],
    u: "1f41f",
    a: "0.6"
  },
  {
    n: [
      "tropical fish"
    ],
    u: "1f420",
    a: "0.6"
  },
  {
    n: [
      "blowfish"
    ],
    u: "1f421",
    a: "0.6"
  },
  {
    n: [
      "shark"
    ],
    u: "1f988",
    a: "3.0"
  },
  {
    n: [
      "octopus"
    ],
    u: "1f419",
    a: "0.6"
  },
  {
    n: [
      "shell",
      "spiral shell"
    ],
    u: "1f41a",
    a: "0.6"
  },
  {
    n: [
      "coral"
    ],
    u: "1fab8",
    a: "14.0"
  },
  {
    n: [
      "snail"
    ],
    u: "1f40c",
    a: "0.6"
  },
  {
    n: [
      "butterfly"
    ],
    u: "1f98b",
    a: "3.0"
  },
  {
    n: [
      "bug"
    ],
    u: "1f41b",
    a: "0.6"
  },
  {
    n: [
      "ant"
    ],
    u: "1f41c",
    a: "0.6"
  },
  {
    n: [
      "bee",
      "honeybee"
    ],
    u: "1f41d",
    a: "0.6"
  },
  {
    n: [
      "beetle"
    ],
    u: "1fab2",
    a: "13.0"
  },
  {
    n: [
      "ladybug",
      "lady beetle"
    ],
    u: "1f41e",
    a: "0.6"
  },
  {
    n: [
      "cricket"
    ],
    u: "1f997",
    a: "5.0"
  },
  {
    n: [
      "cockroach"
    ],
    u: "1fab3",
    a: "13.0"
  },
  {
    n: [
      "spider"
    ],
    u: "1f577-fe0f",
    a: "0.7"
  },
  {
    n: [
      "spider web"
    ],
    u: "1f578-fe0f",
    a: "0.7"
  },
  {
    n: [
      "scorpion"
    ],
    u: "1f982",
    a: "1.0"
  },
  {
    n: [
      "mosquito"
    ],
    u: "1f99f",
    a: "11.0"
  },
  {
    n: [
      "fly"
    ],
    u: "1fab0",
    a: "13.0"
  },
  {
    n: [
      "worm"
    ],
    u: "1fab1",
    a: "13.0"
  },
  {
    n: [
      "microbe"
    ],
    u: "1f9a0",
    a: "11.0"
  },
  {
    n: [
      "bouquet"
    ],
    u: "1f490",
    a: "0.6"
  },
  {
    n: [
      "cherry blossom"
    ],
    u: "1f338",
    a: "0.6"
  },
  {
    n: [
      "white flower"
    ],
    u: "1f4ae",
    a: "0.6"
  },
  {
    n: [
      "lotus"
    ],
    u: "1fab7",
    a: "14.0"
  },
  {
    n: [
      "rosette"
    ],
    u: "1f3f5-fe0f",
    a: "0.7"
  },
  {
    n: [
      "rose"
    ],
    u: "1f339",
    a: "0.6"
  },
  {
    n: [
      "wilted flower"
    ],
    u: "1f940",
    a: "3.0"
  },
  {
    n: [
      "hibiscus"
    ],
    u: "1f33a",
    a: "0.6"
  },
  {
    n: [
      "sunflower"
    ],
    u: "1f33b",
    a: "0.6"
  },
  {
    n: [
      "blossom"
    ],
    u: "1f33c",
    a: "0.6"
  },
  {
    n: [
      "tulip"
    ],
    u: "1f337",
    a: "0.6"
  },
  {
    n: [
      "seedling"
    ],
    u: "1f331",
    a: "0.6"
  },
  {
    n: [
      "potted plant"
    ],
    u: "1fab4",
    a: "13.0"
  },
  {
    n: [
      "evergreen tree"
    ],
    u: "1f332",
    a: "1.0"
  },
  {
    n: [
      "deciduous tree"
    ],
    u: "1f333",
    a: "1.0"
  },
  {
    n: [
      "palm tree"
    ],
    u: "1f334",
    a: "0.6"
  },
  {
    n: [
      "cactus"
    ],
    u: "1f335",
    a: "0.6"
  },
  {
    n: [
      "ear of rice"
    ],
    u: "1f33e",
    a: "0.6"
  },
  {
    n: [
      "herb"
    ],
    u: "1f33f",
    a: "0.6"
  },
  {
    n: [
      "shamrock"
    ],
    u: "2618-fe0f",
    a: "1.0"
  },
  {
    n: [
      "four leaf clover"
    ],
    u: "1f340",
    a: "0.6"
  },
  {
    n: [
      "maple leaf"
    ],
    u: "1f341",
    a: "0.6"
  },
  {
    n: [
      "fallen leaf"
    ],
    u: "1f342",
    a: "0.6"
  },
  {
    n: [
      "leaves",
      "leaf fluttering in wind"
    ],
    u: "1f343",
    a: "0.6"
  },
  {
    n: [
      "empty nest"
    ],
    u: "1fab9",
    a: "14.0"
  },
  {
    n: [
      "nest with eggs"
    ],
    u: "1faba",
    a: "14.0"
  }
], oi = [
  {
    n: [
      "grapes"
    ],
    u: "1f347",
    a: "0.6"
  },
  {
    n: [
      "melon"
    ],
    u: "1f348",
    a: "0.6"
  },
  {
    n: [
      "watermelon"
    ],
    u: "1f349",
    a: "0.6"
  },
  {
    n: [
      "tangerine"
    ],
    u: "1f34a",
    a: "0.6"
  },
  {
    n: [
      "lemon"
    ],
    u: "1f34b",
    a: "1.0"
  },
  {
    n: [
      "banana"
    ],
    u: "1f34c",
    a: "0.6"
  },
  {
    n: [
      "pineapple"
    ],
    u: "1f34d",
    a: "0.6"
  },
  {
    n: [
      "mango"
    ],
    u: "1f96d",
    a: "11.0"
  },
  {
    n: [
      "apple",
      "red apple"
    ],
    u: "1f34e",
    a: "0.6"
  },
  {
    n: [
      "green apple"
    ],
    u: "1f34f",
    a: "0.6"
  },
  {
    n: [
      "pear"
    ],
    u: "1f350",
    a: "1.0"
  },
  {
    n: [
      "peach"
    ],
    u: "1f351",
    a: "0.6"
  },
  {
    n: [
      "cherries"
    ],
    u: "1f352",
    a: "0.6"
  },
  {
    n: [
      "strawberry"
    ],
    u: "1f353",
    a: "0.6"
  },
  {
    n: [
      "blueberries"
    ],
    u: "1fad0",
    a: "13.0"
  },
  {
    n: [
      "kiwifruit"
    ],
    u: "1f95d",
    a: "3.0"
  },
  {
    n: [
      "tomato"
    ],
    u: "1f345",
    a: "0.6"
  },
  {
    n: [
      "olive"
    ],
    u: "1fad2",
    a: "13.0"
  },
  {
    n: [
      "coconut"
    ],
    u: "1f965",
    a: "5.0"
  },
  {
    n: [
      "avocado"
    ],
    u: "1f951",
    a: "3.0"
  },
  {
    n: [
      "eggplant",
      "aubergine"
    ],
    u: "1f346",
    a: "0.6"
  },
  {
    n: [
      "potato"
    ],
    u: "1f954",
    a: "3.0"
  },
  {
    n: [
      "carrot"
    ],
    u: "1f955",
    a: "3.0"
  },
  {
    n: [
      "corn",
      "ear of maize"
    ],
    u: "1f33d",
    a: "0.6"
  },
  {
    n: [
      "hot pepper"
    ],
    u: "1f336-fe0f",
    a: "0.7"
  },
  {
    n: [
      "bell pepper"
    ],
    u: "1fad1",
    a: "13.0"
  },
  {
    n: [
      "cucumber"
    ],
    u: "1f952",
    a: "3.0"
  },
  {
    n: [
      "leafy green"
    ],
    u: "1f96c",
    a: "11.0"
  },
  {
    n: [
      "broccoli"
    ],
    u: "1f966",
    a: "5.0"
  },
  {
    n: [
      "garlic"
    ],
    u: "1f9c4",
    a: "12.0"
  },
  {
    n: [
      "onion"
    ],
    u: "1f9c5",
    a: "12.0"
  },
  {
    n: [
      "mushroom"
    ],
    u: "1f344",
    a: "0.6"
  },
  {
    n: [
      "peanuts"
    ],
    u: "1f95c",
    a: "3.0"
  },
  {
    n: [
      "beans"
    ],
    u: "1fad8",
    a: "14.0"
  },
  {
    n: [
      "chestnut"
    ],
    u: "1f330",
    a: "0.6"
  },
  {
    n: [
      "bread"
    ],
    u: "1f35e",
    a: "0.6"
  },
  {
    n: [
      "croissant"
    ],
    u: "1f950",
    a: "3.0"
  },
  {
    n: [
      "baguette bread"
    ],
    u: "1f956",
    a: "3.0"
  },
  {
    n: [
      "flatbread"
    ],
    u: "1fad3",
    a: "13.0"
  },
  {
    n: [
      "pretzel"
    ],
    u: "1f968",
    a: "5.0"
  },
  {
    n: [
      "bagel"
    ],
    u: "1f96f",
    a: "11.0"
  },
  {
    n: [
      "pancakes"
    ],
    u: "1f95e",
    a: "3.0"
  },
  {
    n: [
      "waffle"
    ],
    u: "1f9c7",
    a: "12.0"
  },
  {
    n: [
      "cheese wedge"
    ],
    u: "1f9c0",
    a: "1.0"
  },
  {
    n: [
      "meat on bone"
    ],
    u: "1f356",
    a: "0.6"
  },
  {
    n: [
      "poultry leg"
    ],
    u: "1f357",
    a: "0.6"
  },
  {
    n: [
      "cut of meat"
    ],
    u: "1f969",
    a: "5.0"
  },
  {
    n: [
      "bacon"
    ],
    u: "1f953",
    a: "3.0"
  },
  {
    n: [
      "hamburger"
    ],
    u: "1f354",
    a: "0.6"
  },
  {
    n: [
      "fries",
      "french fries"
    ],
    u: "1f35f",
    a: "0.6"
  },
  {
    n: [
      "pizza",
      "slice of pizza"
    ],
    u: "1f355",
    a: "0.6"
  },
  {
    n: [
      "hotdog",
      "hot dog"
    ],
    u: "1f32d",
    a: "1.0"
  },
  {
    n: [
      "sandwich"
    ],
    u: "1f96a",
    a: "5.0"
  },
  {
    n: [
      "taco"
    ],
    u: "1f32e",
    a: "1.0"
  },
  {
    n: [
      "burrito"
    ],
    u: "1f32f",
    a: "1.0"
  },
  {
    n: [
      "tamale"
    ],
    u: "1fad4",
    a: "13.0"
  },
  {
    n: [
      "stuffed flatbread"
    ],
    u: "1f959",
    a: "3.0"
  },
  {
    n: [
      "falafel"
    ],
    u: "1f9c6",
    a: "12.0"
  },
  {
    n: [
      "egg"
    ],
    u: "1f95a",
    a: "3.0"
  },
  {
    n: [
      "cooking",
      "fried egg"
    ],
    u: "1f373",
    a: "0.6"
  },
  {
    n: [
      "shallow pan of food"
    ],
    u: "1f958",
    a: "3.0"
  },
  {
    n: [
      "stew",
      "pot of food"
    ],
    u: "1f372",
    a: "0.6"
  },
  {
    n: [
      "fondue"
    ],
    u: "1fad5",
    a: "13.0"
  },
  {
    n: [
      "bowl with spoon"
    ],
    u: "1f963",
    a: "5.0"
  },
  {
    n: [
      "green salad"
    ],
    u: "1f957",
    a: "3.0"
  },
  {
    n: [
      "popcorn"
    ],
    u: "1f37f",
    a: "1.0"
  },
  {
    n: [
      "butter"
    ],
    u: "1f9c8",
    a: "12.0"
  },
  {
    n: [
      "salt",
      "salt shaker"
    ],
    u: "1f9c2",
    a: "11.0"
  },
  {
    n: [
      "canned food"
    ],
    u: "1f96b",
    a: "5.0"
  },
  {
    n: [
      "bento",
      "bento box"
    ],
    u: "1f371",
    a: "0.6"
  },
  {
    n: [
      "rice cracker"
    ],
    u: "1f358",
    a: "0.6"
  },
  {
    n: [
      "rice ball"
    ],
    u: "1f359",
    a: "0.6"
  },
  {
    n: [
      "rice",
      "cooked rice"
    ],
    u: "1f35a",
    a: "0.6"
  },
  {
    n: [
      "curry",
      "curry and rice"
    ],
    u: "1f35b",
    a: "0.6"
  },
  {
    n: [
      "ramen",
      "steaming bowl"
    ],
    u: "1f35c",
    a: "0.6"
  },
  {
    n: [
      "spaghetti"
    ],
    u: "1f35d",
    a: "0.6"
  },
  {
    n: [
      "sweet potato",
      "roasted sweet potato"
    ],
    u: "1f360",
    a: "0.6"
  },
  {
    n: [
      "oden"
    ],
    u: "1f362",
    a: "0.6"
  },
  {
    n: [
      "sushi"
    ],
    u: "1f363",
    a: "0.6"
  },
  {
    n: [
      "fried shrimp"
    ],
    u: "1f364",
    a: "0.6"
  },
  {
    n: [
      "fish cake",
      "fish cake with swirl design"
    ],
    u: "1f365",
    a: "0.6"
  },
  {
    n: [
      "moon cake"
    ],
    u: "1f96e",
    a: "11.0"
  },
  {
    n: [
      "dango"
    ],
    u: "1f361",
    a: "0.6"
  },
  {
    n: [
      "dumpling"
    ],
    u: "1f95f",
    a: "5.0"
  },
  {
    n: [
      "fortune cookie"
    ],
    u: "1f960",
    a: "5.0"
  },
  {
    n: [
      "takeout box"
    ],
    u: "1f961",
    a: "5.0"
  },
  {
    n: [
      "crab"
    ],
    u: "1f980",
    a: "1.0"
  },
  {
    n: [
      "lobster"
    ],
    u: "1f99e",
    a: "11.0"
  },
  {
    n: [
      "shrimp"
    ],
    u: "1f990",
    a: "3.0"
  },
  {
    n: [
      "squid"
    ],
    u: "1f991",
    a: "3.0"
  },
  {
    n: [
      "oyster"
    ],
    u: "1f9aa",
    a: "12.0"
  },
  {
    n: [
      "icecream",
      "soft ice cream"
    ],
    u: "1f366",
    a: "0.6"
  },
  {
    n: [
      "shaved ice"
    ],
    u: "1f367",
    a: "0.6"
  },
  {
    n: [
      "ice cream"
    ],
    u: "1f368",
    a: "0.6"
  },
  {
    n: [
      "doughnut"
    ],
    u: "1f369",
    a: "0.6"
  },
  {
    n: [
      "cookie"
    ],
    u: "1f36a",
    a: "0.6"
  },
  {
    n: [
      "birthday",
      "birthday cake"
    ],
    u: "1f382",
    a: "0.6"
  },
  {
    n: [
      "cake",
      "shortcake"
    ],
    u: "1f370",
    a: "0.6"
  },
  {
    n: [
      "cupcake"
    ],
    u: "1f9c1",
    a: "11.0"
  },
  {
    n: [
      "pie"
    ],
    u: "1f967",
    a: "5.0"
  },
  {
    n: [
      "chocolate bar"
    ],
    u: "1f36b",
    a: "0.6"
  },
  {
    n: [
      "candy"
    ],
    u: "1f36c",
    a: "0.6"
  },
  {
    n: [
      "lollipop"
    ],
    u: "1f36d",
    a: "0.6"
  },
  {
    n: [
      "custard"
    ],
    u: "1f36e",
    a: "0.6"
  },
  {
    n: [
      "honey pot"
    ],
    u: "1f36f",
    a: "0.6"
  },
  {
    n: [
      "baby bottle"
    ],
    u: "1f37c",
    a: "1.0"
  },
  {
    n: [
      "glass of milk"
    ],
    u: "1f95b",
    a: "3.0"
  },
  {
    n: [
      "coffee",
      "hot beverage"
    ],
    u: "2615",
    a: "0.6"
  },
  {
    n: [
      "teapot"
    ],
    u: "1fad6",
    a: "13.0"
  },
  {
    n: [
      "tea",
      "teacup without handle"
    ],
    u: "1f375",
    a: "0.6"
  },
  {
    n: [
      "sake",
      "sake bottle and cup"
    ],
    u: "1f376",
    a: "0.6"
  },
  {
    n: [
      "champagne",
      "bottle with popping cork"
    ],
    u: "1f37e",
    a: "1.0"
  },
  {
    n: [
      "wine glass"
    ],
    u: "1f377",
    a: "0.6"
  },
  {
    n: [
      "cocktail",
      "cocktail glass"
    ],
    u: "1f378",
    a: "0.6"
  },
  {
    n: [
      "tropical drink"
    ],
    u: "1f379",
    a: "0.6"
  },
  {
    n: [
      "beer",
      "beer mug"
    ],
    u: "1f37a",
    a: "0.6"
  },
  {
    n: [
      "beers",
      "clinking beer mugs"
    ],
    u: "1f37b",
    a: "0.6"
  },
  {
    n: [
      "clinking glasses"
    ],
    u: "1f942",
    a: "3.0"
  },
  {
    n: [
      "tumbler glass"
    ],
    u: "1f943",
    a: "3.0"
  },
  {
    n: [
      "pouring liquid"
    ],
    u: "1fad7",
    a: "14.0"
  },
  {
    n: [
      "cup with straw"
    ],
    u: "1f964",
    a: "5.0"
  },
  {
    n: [
      "bubble tea"
    ],
    u: "1f9cb",
    a: "13.0"
  },
  {
    n: [
      "beverage box"
    ],
    u: "1f9c3",
    a: "12.0"
  },
  {
    n: [
      "mate drink"
    ],
    u: "1f9c9",
    a: "12.0"
  },
  {
    n: [
      "ice cube"
    ],
    u: "1f9ca",
    a: "12.0"
  },
  {
    n: [
      "chopsticks"
    ],
    u: "1f962",
    a: "5.0"
  },
  {
    n: [
      "knife fork plate",
      "fork and knife with plate"
    ],
    u: "1f37d-fe0f",
    a: "0.7"
  },
  {
    n: [
      "fork and knife"
    ],
    u: "1f374",
    a: "0.6"
  },
  {
    n: [
      "spoon"
    ],
    u: "1f944",
    a: "3.0"
  },
  {
    n: [
      "hocho",
      "knife"
    ],
    u: "1f52a",
    a: "0.6"
  },
  {
    n: [
      "jar"
    ],
    u: "1fad9",
    a: "14.0"
  },
  {
    n: [
      "amphora"
    ],
    u: "1f3fa",
    a: "1.0"
  }
], di = [
  {
    n: [
      "earth africa",
      "earth globe europe-africa"
    ],
    u: "1f30d",
    a: "0.7"
  },
  {
    n: [
      "earth americas",
      "earth globe americas"
    ],
    u: "1f30e",
    a: "0.7"
  },
  {
    n: [
      "earth asia",
      "earth globe asia-australia"
    ],
    u: "1f30f",
    a: "0.6"
  },
  {
    n: [
      "globe with meridians"
    ],
    u: "1f310",
    a: "1.0"
  },
  {
    n: [
      "world map"
    ],
    u: "1f5fa-fe0f",
    a: "0.7"
  },
  {
    n: [
      "japan",
      "silhouette of japan"
    ],
    u: "1f5fe",
    a: "0.6"
  },
  {
    n: [
      "compass"
    ],
    u: "1f9ed",
    a: "11.0"
  },
  {
    n: [
      "snow-capped mountain",
      "snow capped mountain"
    ],
    u: "1f3d4-fe0f",
    a: "0.7"
  },
  {
    n: [
      "mountain"
    ],
    u: "26f0-fe0f",
    a: "0.7"
  },
  {
    n: [
      "volcano"
    ],
    u: "1f30b",
    a: "0.6"
  },
  {
    n: [
      "mount fuji"
    ],
    u: "1f5fb",
    a: "0.6"
  },
  {
    n: [
      "camping"
    ],
    u: "1f3d5-fe0f",
    a: "0.7"
  },
  {
    n: [
      "beach with umbrella"
    ],
    u: "1f3d6-fe0f",
    a: "0.7"
  },
  {
    n: [
      "desert"
    ],
    u: "1f3dc-fe0f",
    a: "0.7"
  },
  {
    n: [
      "desert island"
    ],
    u: "1f3dd-fe0f",
    a: "0.7"
  },
  {
    n: [
      "national park"
    ],
    u: "1f3de-fe0f",
    a: "0.7"
  },
  {
    n: [
      "stadium"
    ],
    u: "1f3df-fe0f",
    a: "0.7"
  },
  {
    n: [
      "classical building"
    ],
    u: "1f3db-fe0f",
    a: "0.7"
  },
  {
    n: [
      "building construction"
    ],
    u: "1f3d7-fe0f",
    a: "0.7"
  },
  {
    n: [
      "brick",
      "bricks"
    ],
    u: "1f9f1",
    a: "11.0"
  },
  {
    n: [
      "rock"
    ],
    u: "1faa8",
    a: "13.0"
  },
  {
    n: [
      "wood"
    ],
    u: "1fab5",
    a: "13.0"
  },
  {
    n: [
      "hut"
    ],
    u: "1f6d6",
    a: "13.0"
  },
  {
    n: [
      "houses",
      "house buildings"
    ],
    u: "1f3d8-fe0f",
    a: "0.7"
  },
  {
    n: [
      "derelict house",
      "derelict house building"
    ],
    u: "1f3da-fe0f",
    a: "0.7"
  },
  {
    n: [
      "house",
      "house building"
    ],
    u: "1f3e0",
    a: "0.6"
  },
  {
    n: [
      "house with garden"
    ],
    u: "1f3e1",
    a: "0.6"
  },
  {
    n: [
      "office",
      "office building"
    ],
    u: "1f3e2",
    a: "0.6"
  },
  {
    n: [
      "post office",
      "japanese post office"
    ],
    u: "1f3e3",
    a: "0.6"
  },
  {
    n: [
      "european post office"
    ],
    u: "1f3e4",
    a: "1.0"
  },
  {
    n: [
      "hospital"
    ],
    u: "1f3e5",
    a: "0.6"
  },
  {
    n: [
      "bank"
    ],
    u: "1f3e6",
    a: "0.6"
  },
  {
    n: [
      "hotel"
    ],
    u: "1f3e8",
    a: "0.6"
  },
  {
    n: [
      "love hotel"
    ],
    u: "1f3e9",
    a: "0.6"
  },
  {
    n: [
      "convenience store"
    ],
    u: "1f3ea",
    a: "0.6"
  },
  {
    n: [
      "school"
    ],
    u: "1f3eb",
    a: "0.6"
  },
  {
    n: [
      "department store"
    ],
    u: "1f3ec",
    a: "0.6"
  },
  {
    n: [
      "factory"
    ],
    u: "1f3ed",
    a: "0.6"
  },
  {
    n: [
      "japanese castle"
    ],
    u: "1f3ef",
    a: "0.6"
  },
  {
    n: [
      "european castle"
    ],
    u: "1f3f0",
    a: "0.6"
  },
  {
    n: [
      "wedding"
    ],
    u: "1f492",
    a: "0.6"
  },
  {
    n: [
      "tokyo tower"
    ],
    u: "1f5fc",
    a: "0.6"
  },
  {
    n: [
      "statue of liberty"
    ],
    u: "1f5fd",
    a: "0.6"
  },
  {
    n: [
      "church"
    ],
    u: "26ea",
    a: "0.6"
  },
  {
    n: [
      "mosque"
    ],
    u: "1f54c",
    a: "1.0"
  },
  {
    n: [
      "hindu temple"
    ],
    u: "1f6d5",
    a: "12.0"
  },
  {
    n: [
      "synagogue"
    ],
    u: "1f54d",
    a: "1.0"
  },
  {
    n: [
      "shinto shrine"
    ],
    u: "26e9-fe0f",
    a: "0.7"
  },
  {
    n: [
      "kaaba"
    ],
    u: "1f54b",
    a: "1.0"
  },
  {
    n: [
      "fountain"
    ],
    u: "26f2",
    a: "0.6"
  },
  {
    n: [
      "tent"
    ],
    u: "26fa",
    a: "0.6"
  },
  {
    n: [
      "foggy"
    ],
    u: "1f301",
    a: "0.6"
  },
  {
    n: [
      "night with stars"
    ],
    u: "1f303",
    a: "0.6"
  },
  {
    n: [
      "cityscape"
    ],
    u: "1f3d9-fe0f",
    a: "0.7"
  },
  {
    n: [
      "sunrise over mountains"
    ],
    u: "1f304",
    a: "0.6"
  },
  {
    n: [
      "sunrise"
    ],
    u: "1f305",
    a: "0.6"
  },
  {
    n: [
      "city sunset",
      "cityscape at dusk"
    ],
    u: "1f306",
    a: "0.6"
  },
  {
    n: [
      "city sunrise",
      "sunset over buildings"
    ],
    u: "1f307",
    a: "0.6"
  },
  {
    n: [
      "bridge at night"
    ],
    u: "1f309",
    a: "0.6"
  },
  {
    n: [
      "hotsprings",
      "hot springs"
    ],
    u: "2668-fe0f",
    a: "0.6"
  },
  {
    n: [
      "carousel horse"
    ],
    u: "1f3a0",
    a: "0.6"
  },
  {
    n: [
      "playground slide"
    ],
    u: "1f6dd",
    a: "14.0"
  },
  {
    n: [
      "ferris wheel"
    ],
    u: "1f3a1",
    a: "0.6"
  },
  {
    n: [
      "roller coaster"
    ],
    u: "1f3a2",
    a: "0.6"
  },
  {
    n: [
      "barber",
      "barber pole"
    ],
    u: "1f488",
    a: "0.6"
  },
  {
    n: [
      "circus tent"
    ],
    u: "1f3aa",
    a: "0.6"
  },
  {
    n: [
      "steam locomotive"
    ],
    u: "1f682",
    a: "1.0"
  },
  {
    n: [
      "railway car"
    ],
    u: "1f683",
    a: "0.6"
  },
  {
    n: [
      "high-speed train",
      "bullettrain side"
    ],
    u: "1f684",
    a: "0.6"
  },
  {
    n: [
      "bullettrain front",
      "high-speed train with bullet nose"
    ],
    u: "1f685",
    a: "0.6"
  },
  {
    n: [
      "train",
      "train2"
    ],
    u: "1f686",
    a: "1.0"
  },
  {
    n: [
      "metro"
    ],
    u: "1f687",
    a: "0.6"
  },
  {
    n: [
      "light rail"
    ],
    u: "1f688",
    a: "1.0"
  },
  {
    n: [
      "station"
    ],
    u: "1f689",
    a: "0.6"
  },
  {
    n: [
      "tram"
    ],
    u: "1f68a",
    a: "1.0"
  },
  {
    n: [
      "monorail"
    ],
    u: "1f69d",
    a: "1.0"
  },
  {
    n: [
      "mountain railway"
    ],
    u: "1f69e",
    a: "1.0"
  },
  {
    n: [
      "train",
      "tram car"
    ],
    u: "1f68b",
    a: "1.0"
  },
  {
    n: [
      "bus"
    ],
    u: "1f68c",
    a: "0.6"
  },
  {
    n: [
      "oncoming bus"
    ],
    u: "1f68d",
    a: "0.7"
  },
  {
    n: [
      "trolleybus"
    ],
    u: "1f68e",
    a: "1.0"
  },
  {
    n: [
      "minibus"
    ],
    u: "1f690",
    a: "1.0"
  },
  {
    n: [
      "ambulance"
    ],
    u: "1f691",
    a: "0.6"
  },
  {
    n: [
      "fire engine"
    ],
    u: "1f692",
    a: "0.6"
  },
  {
    n: [
      "police car"
    ],
    u: "1f693",
    a: "0.6"
  },
  {
    n: [
      "oncoming police car"
    ],
    u: "1f694",
    a: "0.7"
  },
  {
    n: [
      "taxi"
    ],
    u: "1f695",
    a: "0.6"
  },
  {
    n: [
      "oncoming taxi"
    ],
    u: "1f696",
    a: "1.0"
  },
  {
    n: [
      "car",
      "red car",
      "automobile"
    ],
    u: "1f697",
    a: "0.6"
  },
  {
    n: [
      "oncoming automobile"
    ],
    u: "1f698",
    a: "0.7"
  },
  {
    n: [
      "blue car",
      "recreational vehicle"
    ],
    u: "1f699",
    a: "0.6"
  },
  {
    n: [
      "pickup truck"
    ],
    u: "1f6fb",
    a: "13.0"
  },
  {
    n: [
      "truck",
      "delivery truck"
    ],
    u: "1f69a",
    a: "0.6"
  },
  {
    n: [
      "articulated lorry"
    ],
    u: "1f69b",
    a: "1.0"
  },
  {
    n: [
      "tractor"
    ],
    u: "1f69c",
    a: "1.0"
  },
  {
    n: [
      "racing car"
    ],
    u: "1f3ce-fe0f",
    a: "0.7"
  },
  {
    n: [
      "motorcycle",
      "racing motorcycle"
    ],
    u: "1f3cd-fe0f",
    a: "0.7"
  },
  {
    n: [
      "motor scooter"
    ],
    u: "1f6f5",
    a: "3.0"
  },
  {
    n: [
      "manual wheelchair"
    ],
    u: "1f9bd",
    a: "12.0"
  },
  {
    n: [
      "motorized wheelchair"
    ],
    u: "1f9bc",
    a: "12.0"
  },
  {
    n: [
      "auto rickshaw"
    ],
    u: "1f6fa",
    a: "12.0"
  },
  {
    n: [
      "bike",
      "bicycle"
    ],
    u: "1f6b2",
    a: "0.6"
  },
  {
    n: [
      "scooter"
    ],
    u: "1f6f4",
    a: "3.0"
  },
  {
    n: [
      "skateboard"
    ],
    u: "1f6f9",
    a: "11.0"
  },
  {
    n: [
      "roller skate"
    ],
    u: "1f6fc",
    a: "13.0"
  },
  {
    n: [
      "busstop",
      "bus stop"
    ],
    u: "1f68f",
    a: "0.6"
  },
  {
    n: [
      "motorway"
    ],
    u: "1f6e3-fe0f",
    a: "0.7"
  },
  {
    n: [
      "railway track"
    ],
    u: "1f6e4-fe0f",
    a: "0.7"
  },
  {
    n: [
      "oil drum"
    ],
    u: "1f6e2-fe0f",
    a: "0.7"
  },
  {
    n: [
      "fuelpump",
      "fuel pump"
    ],
    u: "26fd",
    a: "0.6"
  },
  {
    n: [
      "wheel"
    ],
    u: "1f6de",
    a: "14.0"
  },
  {
    n: [
      "rotating light",
      "police cars revolving light"
    ],
    u: "1f6a8",
    a: "0.6"
  },
  {
    n: [
      "traffic light",
      "horizontal traffic light"
    ],
    u: "1f6a5",
    a: "0.6"
  },
  {
    n: [
      "vertical traffic light"
    ],
    u: "1f6a6",
    a: "1.0"
  },
  {
    n: [
      "octagonal sign"
    ],
    u: "1f6d1",
    a: "3.0"
  },
  {
    n: [
      "construction",
      "construction sign"
    ],
    u: "1f6a7",
    a: "0.6"
  },
  {
    n: [
      "anchor"
    ],
    u: "2693",
    a: "0.6"
  },
  {
    n: [
      "ring buoy"
    ],
    u: "1f6df",
    a: "14.0"
  },
  {
    n: [
      "boat",
      "sailboat"
    ],
    u: "26f5",
    a: "0.6"
  },
  {
    n: [
      "canoe"
    ],
    u: "1f6f6",
    a: "3.0"
  },
  {
    n: [
      "speedboat"
    ],
    u: "1f6a4",
    a: "0.6"
  },
  {
    n: [
      "passenger ship"
    ],
    u: "1f6f3-fe0f",
    a: "0.7"
  },
  {
    n: [
      "ferry"
    ],
    u: "26f4-fe0f",
    a: "0.7"
  },
  {
    n: [
      "motor boat"
    ],
    u: "1f6e5-fe0f",
    a: "0.7"
  },
  {
    n: [
      "ship"
    ],
    u: "1f6a2",
    a: "0.6"
  },
  {
    n: [
      "airplane"
    ],
    u: "2708-fe0f",
    a: "0.6"
  },
  {
    n: [
      "small airplane"
    ],
    u: "1f6e9-fe0f",
    a: "0.7"
  },
  {
    n: [
      "airplane departure"
    ],
    u: "1f6eb",
    a: "1.0"
  },
  {
    n: [
      "airplane arriving"
    ],
    u: "1f6ec",
    a: "1.0"
  },
  {
    n: [
      "parachute"
    ],
    u: "1fa82",
    a: "12.0"
  },
  {
    n: [
      "seat"
    ],
    u: "1f4ba",
    a: "0.6"
  },
  {
    n: [
      "helicopter"
    ],
    u: "1f681",
    a: "1.0"
  },
  {
    n: [
      "suspension railway"
    ],
    u: "1f69f",
    a: "1.0"
  },
  {
    n: [
      "mountain cableway"
    ],
    u: "1f6a0",
    a: "1.0"
  },
  {
    n: [
      "aerial tramway"
    ],
    u: "1f6a1",
    a: "1.0"
  },
  {
    n: [
      "satellite"
    ],
    u: "1f6f0-fe0f",
    a: "0.7"
  },
  {
    n: [
      "rocket"
    ],
    u: "1f680",
    a: "0.6"
  },
  {
    n: [
      "flying saucer"
    ],
    u: "1f6f8",
    a: "5.0"
  },
  {
    n: [
      "bellhop bell"
    ],
    u: "1f6ce-fe0f",
    a: "0.7"
  },
  {
    n: [
      "luggage"
    ],
    u: "1f9f3",
    a: "11.0"
  },
  {
    n: [
      "hourglass"
    ],
    u: "231b",
    a: "0.6"
  },
  {
    n: [
      "hourglass flowing sand",
      "hourglass with flowing sand"
    ],
    u: "23f3",
    a: "0.6"
  },
  {
    n: [
      "watch"
    ],
    u: "231a",
    a: "0.6"
  },
  {
    n: [
      "alarm clock"
    ],
    u: "23f0",
    a: "0.6"
  },
  {
    n: [
      "stopwatch"
    ],
    u: "23f1-fe0f",
    a: "1.0"
  },
  {
    n: [
      "timer clock"
    ],
    u: "23f2-fe0f",
    a: "1.0"
  },
  {
    n: [
      "mantelpiece clock"
    ],
    u: "1f570-fe0f",
    a: "0.7"
  },
  {
    n: [
      "clock12",
      "clock face twelve oclock"
    ],
    u: "1f55b",
    a: "0.6"
  },
  {
    n: [
      "clock1230",
      "clock face twelve-thirty"
    ],
    u: "1f567",
    a: "0.7"
  },
  {
    n: [
      "clock1",
      "clock face one oclock"
    ],
    u: "1f550",
    a: "0.6"
  },
  {
    n: [
      "clock130",
      "clock face one-thirty"
    ],
    u: "1f55c",
    a: "0.7"
  },
  {
    n: [
      "clock2",
      "clock face two oclock"
    ],
    u: "1f551",
    a: "0.6"
  },
  {
    n: [
      "clock230",
      "clock face two-thirty"
    ],
    u: "1f55d",
    a: "0.7"
  },
  {
    n: [
      "clock3",
      "clock face three oclock"
    ],
    u: "1f552",
    a: "0.6"
  },
  {
    n: [
      "clock330",
      "clock face three-thirty"
    ],
    u: "1f55e",
    a: "0.7"
  },
  {
    n: [
      "clock4",
      "clock face four oclock"
    ],
    u: "1f553",
    a: "0.6"
  },
  {
    n: [
      "clock430",
      "clock face four-thirty"
    ],
    u: "1f55f",
    a: "0.7"
  },
  {
    n: [
      "clock5",
      "clock face five oclock"
    ],
    u: "1f554",
    a: "0.6"
  },
  {
    n: [
      "clock530",
      "clock face five-thirty"
    ],
    u: "1f560",
    a: "0.7"
  },
  {
    n: [
      "clock6",
      "clock face six oclock"
    ],
    u: "1f555",
    a: "0.6"
  },
  {
    n: [
      "clock630",
      "clock face six-thirty"
    ],
    u: "1f561",
    a: "0.7"
  },
  {
    n: [
      "clock7",
      "clock face seven oclock"
    ],
    u: "1f556",
    a: "0.6"
  },
  {
    n: [
      "clock730",
      "clock face seven-thirty"
    ],
    u: "1f562",
    a: "0.7"
  },
  {
    n: [
      "clock8",
      "clock face eight oclock"
    ],
    u: "1f557",
    a: "0.6"
  },
  {
    n: [
      "clock830",
      "clock face eight-thirty"
    ],
    u: "1f563",
    a: "0.7"
  },
  {
    n: [
      "clock9",
      "clock face nine oclock"
    ],
    u: "1f558",
    a: "0.6"
  },
  {
    n: [
      "clock930",
      "clock face nine-thirty"
    ],
    u: "1f564",
    a: "0.7"
  },
  {
    n: [
      "clock10",
      "clock face ten oclock"
    ],
    u: "1f559",
    a: "0.6"
  },
  {
    n: [
      "clock1030",
      "clock face ten-thirty"
    ],
    u: "1f565",
    a: "0.7"
  },
  {
    n: [
      "clock11",
      "clock face eleven oclock"
    ],
    u: "1f55a",
    a: "0.6"
  },
  {
    n: [
      "clock1130",
      "clock face eleven-thirty"
    ],
    u: "1f566",
    a: "0.7"
  },
  {
    n: [
      "new moon",
      "new moon symbol"
    ],
    u: "1f311",
    a: "0.6"
  },
  {
    n: [
      "waxing crescent moon",
      "waxing crescent moon symbol"
    ],
    u: "1f312",
    a: "1.0"
  },
  {
    n: [
      "first quarter moon",
      "first quarter moon symbol"
    ],
    u: "1f313",
    a: "0.6"
  },
  {
    n: [
      "moon",
      "waxing gibbous moon",
      "waxing gibbous moon symbol"
    ],
    u: "1f314",
    a: "0.6"
  },
  {
    n: [
      "full moon",
      "full moon symbol"
    ],
    u: "1f315",
    a: "0.6"
  },
  {
    n: [
      "waning gibbous moon",
      "waning gibbous moon symbol"
    ],
    u: "1f316",
    a: "1.0"
  },
  {
    n: [
      "last quarter moon",
      "last quarter moon symbol"
    ],
    u: "1f317",
    a: "1.0"
  },
  {
    n: [
      "waning crescent moon",
      "waning crescent moon symbol"
    ],
    u: "1f318",
    a: "1.0"
  },
  {
    n: [
      "crescent moon"
    ],
    u: "1f319",
    a: "0.6"
  },
  {
    n: [
      "new moon with face"
    ],
    u: "1f31a",
    a: "1.0"
  },
  {
    n: [
      "first quarter moon with face"
    ],
    u: "1f31b",
    a: "0.6"
  },
  {
    n: [
      "last quarter moon with face"
    ],
    u: "1f31c",
    a: "0.7"
  },
  {
    n: [
      "thermometer"
    ],
    u: "1f321-fe0f",
    a: "0.7"
  },
  {
    n: [
      "sunny",
      "black sun with rays"
    ],
    u: "2600-fe0f",
    a: "0.6"
  },
  {
    n: [
      "full moon with face"
    ],
    u: "1f31d",
    a: "1.0"
  },
  {
    n: [
      "sun with face"
    ],
    u: "1f31e",
    a: "1.0"
  },
  {
    n: [
      "ringed planet"
    ],
    u: "1fa90",
    a: "12.0"
  },
  {
    n: [
      "star",
      "white medium star"
    ],
    u: "2b50",
    a: "0.6"
  },
  {
    n: [
      "star2",
      "glowing star"
    ],
    u: "1f31f",
    a: "0.6"
  },
  {
    n: [
      "stars",
      "shooting star"
    ],
    u: "1f320",
    a: "0.6"
  },
  {
    n: [
      "milky way"
    ],
    u: "1f30c",
    a: "0.6"
  },
  {
    n: [
      "cloud"
    ],
    u: "2601-fe0f",
    a: "0.6"
  },
  {
    n: [
      "partly sunny",
      "sun behind cloud"
    ],
    u: "26c5",
    a: "0.6"
  },
  {
    n: [
      "thunder cloud and rain",
      "cloud with lightning and rain"
    ],
    u: "26c8-fe0f",
    a: "0.7"
  },
  {
    n: [
      "mostly sunny",
      "sun small cloud",
      "sun behind small cloud"
    ],
    u: "1f324-fe0f",
    a: "0.7"
  },
  {
    n: [
      "barely sunny",
      "sun behind cloud",
      "sun behind large cloud"
    ],
    u: "1f325-fe0f",
    a: "0.7"
  },
  {
    n: [
      "partly sunny rain",
      "sun behind rain cloud"
    ],
    u: "1f326-fe0f",
    a: "0.7"
  },
  {
    n: [
      "rain cloud",
      "cloud with rain"
    ],
    u: "1f327-fe0f",
    a: "0.7"
  },
  {
    n: [
      "snow cloud",
      "cloud with snow"
    ],
    u: "1f328-fe0f",
    a: "0.7"
  },
  {
    n: [
      "lightning",
      "lightning cloud",
      "cloud with lightning"
    ],
    u: "1f329-fe0f",
    a: "0.7"
  },
  {
    n: [
      "tornado",
      "tornado cloud"
    ],
    u: "1f32a-fe0f",
    a: "0.7"
  },
  {
    n: [
      "fog"
    ],
    u: "1f32b-fe0f",
    a: "0.7"
  },
  {
    n: [
      "wind face",
      "wind blowing face"
    ],
    u: "1f32c-fe0f",
    a: "0.7"
  },
  {
    n: [
      "cyclone"
    ],
    u: "1f300",
    a: "0.6"
  },
  {
    n: [
      "rainbow"
    ],
    u: "1f308",
    a: "0.6"
  },
  {
    n: [
      "closed umbrella"
    ],
    u: "1f302",
    a: "0.6"
  },
  {
    n: [
      "umbrella"
    ],
    u: "2602-fe0f",
    a: "0.7"
  },
  {
    n: [
      "umbrella with rain drops"
    ],
    u: "2614",
    a: "0.6"
  },
  {
    n: [
      "umbrella on ground"
    ],
    u: "26f1-fe0f",
    a: "0.7"
  },
  {
    n: [
      "zap",
      "high voltage sign"
    ],
    u: "26a1",
    a: "0.6"
  },
  {
    n: [
      "snowflake"
    ],
    u: "2744-fe0f",
    a: "0.6"
  },
  {
    n: [
      "snowman"
    ],
    u: "2603-fe0f",
    a: "0.7"
  },
  {
    n: [
      "snowman without snow"
    ],
    u: "26c4",
    a: "0.6"
  },
  {
    n: [
      "comet"
    ],
    u: "2604-fe0f",
    a: "1.0"
  },
  {
    n: [
      "fire"
    ],
    u: "1f525",
    a: "0.6"
  },
  {
    n: [
      "droplet"
    ],
    u: "1f4a7",
    a: "0.6"
  },
  {
    n: [
      "ocean",
      "water wave"
    ],
    u: "1f30a",
    a: "0.6"
  }
], ci = [
  {
    n: [
      "jack-o-lantern",
      "jack o lantern"
    ],
    u: "1f383",
    a: "0.6"
  },
  {
    n: [
      "christmas tree"
    ],
    u: "1f384",
    a: "0.6"
  },
  {
    n: [
      "fireworks"
    ],
    u: "1f386",
    a: "0.6"
  },
  {
    n: [
      "sparkler",
      "firework sparkler"
    ],
    u: "1f387",
    a: "0.6"
  },
  {
    n: [
      "firecracker"
    ],
    u: "1f9e8",
    a: "11.0"
  },
  {
    n: [
      "sparkles"
    ],
    u: "2728",
    a: "0.6"
  },
  {
    n: [
      "balloon"
    ],
    u: "1f388",
    a: "0.6"
  },
  {
    n: [
      "tada",
      "party popper"
    ],
    u: "1f389",
    a: "0.6"
  },
  {
    n: [
      "confetti ball"
    ],
    u: "1f38a",
    a: "0.6"
  },
  {
    n: [
      "tanabata tree"
    ],
    u: "1f38b",
    a: "0.6"
  },
  {
    n: [
      "bamboo",
      "pine decoration"
    ],
    u: "1f38d",
    a: "0.6"
  },
  {
    n: [
      "dolls",
      "japanese dolls"
    ],
    u: "1f38e",
    a: "0.6"
  },
  {
    n: [
      "flags",
      "carp streamer"
    ],
    u: "1f38f",
    a: "0.6"
  },
  {
    n: [
      "wind chime"
    ],
    u: "1f390",
    a: "0.6"
  },
  {
    n: [
      "rice scene",
      "moon viewing ceremony"
    ],
    u: "1f391",
    a: "0.6"
  },
  {
    n: [
      "red envelope",
      "red gift envelope"
    ],
    u: "1f9e7",
    a: "11.0"
  },
  {
    n: [
      "ribbon"
    ],
    u: "1f380",
    a: "0.6"
  },
  {
    n: [
      "gift",
      "wrapped present"
    ],
    u: "1f381",
    a: "0.6"
  },
  {
    n: [
      "reminder ribbon"
    ],
    u: "1f397-fe0f",
    a: "0.7"
  },
  {
    n: [
      "admission tickets"
    ],
    u: "1f39f-fe0f",
    a: "0.7"
  },
  {
    n: [
      "ticket"
    ],
    u: "1f3ab",
    a: "0.6"
  },
  {
    n: [
      "medal",
      "military medal"
    ],
    u: "1f396-fe0f",
    a: "0.7"
  },
  {
    n: [
      "trophy"
    ],
    u: "1f3c6",
    a: "0.6"
  },
  {
    n: [
      "sports medal"
    ],
    u: "1f3c5",
    a: "1.0"
  },
  {
    n: [
      "first place medal"
    ],
    u: "1f947",
    a: "3.0"
  },
  {
    n: [
      "second place medal"
    ],
    u: "1f948",
    a: "3.0"
  },
  {
    n: [
      "third place medal"
    ],
    u: "1f949",
    a: "3.0"
  },
  {
    n: [
      "soccer",
      "soccer ball"
    ],
    u: "26bd",
    a: "0.6"
  },
  {
    n: [
      "baseball"
    ],
    u: "26be",
    a: "0.6"
  },
  {
    n: [
      "softball"
    ],
    u: "1f94e",
    a: "11.0"
  },
  {
    n: [
      "basketball",
      "basketball and hoop"
    ],
    u: "1f3c0",
    a: "0.6"
  },
  {
    n: [
      "volleyball"
    ],
    u: "1f3d0",
    a: "1.0"
  },
  {
    n: [
      "football",
      "american football"
    ],
    u: "1f3c8",
    a: "0.6"
  },
  {
    n: [
      "rugby football"
    ],
    u: "1f3c9",
    a: "1.0"
  },
  {
    n: [
      "tennis",
      "tennis racquet and ball"
    ],
    u: "1f3be",
    a: "0.6"
  },
  {
    n: [
      "flying disc"
    ],
    u: "1f94f",
    a: "11.0"
  },
  {
    n: [
      "bowling"
    ],
    u: "1f3b3",
    a: "0.6"
  },
  {
    n: [
      "cricket bat and ball"
    ],
    u: "1f3cf",
    a: "1.0"
  },
  {
    n: [
      "field hockey stick and ball"
    ],
    u: "1f3d1",
    a: "1.0"
  },
  {
    n: [
      "ice hockey stick and puck"
    ],
    u: "1f3d2",
    a: "1.0"
  },
  {
    n: [
      "lacrosse",
      "lacrosse stick and ball"
    ],
    u: "1f94d",
    a: "11.0"
  },
  {
    n: [
      "table tennis paddle and ball"
    ],
    u: "1f3d3",
    a: "1.0"
  },
  {
    n: [
      "badminton racquet and shuttlecock"
    ],
    u: "1f3f8",
    a: "1.0"
  },
  {
    n: [
      "boxing glove"
    ],
    u: "1f94a",
    a: "3.0"
  },
  {
    n: [
      "martial arts uniform"
    ],
    u: "1f94b",
    a: "3.0"
  },
  {
    n: [
      "goal net"
    ],
    u: "1f945",
    a: "3.0"
  },
  {
    n: [
      "golf",
      "flag in hole"
    ],
    u: "26f3",
    a: "0.6"
  },
  {
    n: [
      "ice skate"
    ],
    u: "26f8-fe0f",
    a: "0.7"
  },
  {
    n: [
      "fishing pole and fish"
    ],
    u: "1f3a3",
    a: "0.6"
  },
  {
    n: [
      "diving mask"
    ],
    u: "1f93f",
    a: "12.0"
  },
  {
    n: [
      "running shirt with sash"
    ],
    u: "1f3bd",
    a: "0.6"
  },
  {
    n: [
      "ski",
      "ski and ski boot"
    ],
    u: "1f3bf",
    a: "0.6"
  },
  {
    n: [
      "sled"
    ],
    u: "1f6f7",
    a: "5.0"
  },
  {
    n: [
      "curling stone"
    ],
    u: "1f94c",
    a: "5.0"
  },
  {
    n: [
      "dart",
      "direct hit"
    ],
    u: "1f3af",
    a: "0.6"
  },
  {
    n: [
      "yo-yo"
    ],
    u: "1fa80",
    a: "12.0"
  },
  {
    n: [
      "kite"
    ],
    u: "1fa81",
    a: "12.0"
  },
  {
    n: [
      "8ball",
      "billiards"
    ],
    u: "1f3b1",
    a: "0.6"
  },
  {
    n: [
      "crystal ball"
    ],
    u: "1f52e",
    a: "0.6"
  },
  {
    n: [
      "magic wand"
    ],
    u: "1fa84",
    a: "13.0"
  },
  {
    n: [
      "nazar amulet"
    ],
    u: "1f9ff",
    a: "11.0"
  },
  {
    n: [
      "hamsa"
    ],
    u: "1faac",
    a: "14.0"
  },
  {
    n: [
      "video game"
    ],
    u: "1f3ae",
    a: "0.6"
  },
  {
    n: [
      "joystick"
    ],
    u: "1f579-fe0f",
    a: "0.7"
  },
  {
    n: [
      "slot machine"
    ],
    u: "1f3b0",
    a: "0.6"
  },
  {
    n: [
      "game die"
    ],
    u: "1f3b2",
    a: "0.6"
  },
  {
    n: [
      "jigsaw",
      "jigsaw puzzle piece"
    ],
    u: "1f9e9",
    a: "11.0"
  },
  {
    n: [
      "teddy bear"
    ],
    u: "1f9f8",
    a: "11.0"
  },
  {
    n: [
      "pinata"
    ],
    u: "1fa85",
    a: "13.0"
  },
  {
    n: [
      "mirror ball"
    ],
    u: "1faa9",
    a: "14.0"
  },
  {
    n: [
      "nesting dolls"
    ],
    u: "1fa86",
    a: "13.0"
  },
  {
    n: [
      "spades",
      "black spade suit"
    ],
    u: "2660-fe0f",
    a: "0.6"
  },
  {
    n: [
      "hearts",
      "black heart suit"
    ],
    u: "2665-fe0f",
    a: "0.6"
  },
  {
    n: [
      "diamonds",
      "black diamond suit"
    ],
    u: "2666-fe0f",
    a: "0.6"
  },
  {
    n: [
      "clubs",
      "black club suit"
    ],
    u: "2663-fe0f",
    a: "0.6"
  },
  {
    n: [
      "chess pawn"
    ],
    u: "265f-fe0f",
    a: "11.0"
  },
  {
    n: [
      "black joker",
      "playing card black joker"
    ],
    u: "1f0cf",
    a: "0.6"
  },
  {
    n: [
      "mahjong",
      "mahjong tile red dragon"
    ],
    u: "1f004",
    a: "0.6"
  },
  {
    n: [
      "flower playing cards"
    ],
    u: "1f3b4",
    a: "0.6"
  },
  {
    n: [
      "performing arts"
    ],
    u: "1f3ad",
    a: "0.6"
  },
  {
    n: [
      "framed picture",
      "frame with picture"
    ],
    u: "1f5bc-fe0f",
    a: "0.7"
  },
  {
    n: [
      "art",
      "artist palette"
    ],
    u: "1f3a8",
    a: "0.6"
  },
  {
    n: [
      "thread",
      "spool of thread"
    ],
    u: "1f9f5",
    a: "11.0"
  },
  {
    n: [
      "sewing needle"
    ],
    u: "1faa1",
    a: "13.0"
  },
  {
    n: [
      "yarn",
      "ball of yarn"
    ],
    u: "1f9f6",
    a: "11.0"
  },
  {
    n: [
      "knot"
    ],
    u: "1faa2",
    a: "13.0"
  }
], si = [
  {
    n: [
      "eyeglasses"
    ],
    u: "1f453",
    a: "0.6"
  },
  {
    n: [
      "sunglasses",
      "dark sunglasses"
    ],
    u: "1f576-fe0f",
    a: "0.7"
  },
  {
    n: [
      "goggles"
    ],
    u: "1f97d",
    a: "11.0"
  },
  {
    n: [
      "lab coat"
    ],
    u: "1f97c",
    a: "11.0"
  },
  {
    n: [
      "safety vest"
    ],
    u: "1f9ba",
    a: "12.0"
  },
  {
    n: [
      "necktie"
    ],
    u: "1f454",
    a: "0.6"
  },
  {
    n: [
      "shirt",
      "tshirt",
      "t-shirt"
    ],
    u: "1f455",
    a: "0.6"
  },
  {
    n: [
      "jeans"
    ],
    u: "1f456",
    a: "0.6"
  },
  {
    n: [
      "scarf"
    ],
    u: "1f9e3",
    a: "5.0"
  },
  {
    n: [
      "gloves"
    ],
    u: "1f9e4",
    a: "5.0"
  },
  {
    n: [
      "coat"
    ],
    u: "1f9e5",
    a: "5.0"
  },
  {
    n: [
      "socks"
    ],
    u: "1f9e6",
    a: "5.0"
  },
  {
    n: [
      "dress"
    ],
    u: "1f457",
    a: "0.6"
  },
  {
    n: [
      "kimono"
    ],
    u: "1f458",
    a: "0.6"
  },
  {
    n: [
      "sari"
    ],
    u: "1f97b",
    a: "12.0"
  },
  {
    n: [
      "one-piece swimsuit"
    ],
    u: "1fa71",
    a: "12.0"
  },
  {
    n: [
      "briefs"
    ],
    u: "1fa72",
    a: "12.0"
  },
  {
    n: [
      "shorts"
    ],
    u: "1fa73",
    a: "12.0"
  },
  {
    n: [
      "bikini"
    ],
    u: "1f459",
    a: "0.6"
  },
  {
    n: [
      "womans clothes"
    ],
    u: "1f45a",
    a: "0.6"
  },
  {
    n: [
      "purse"
    ],
    u: "1f45b",
    a: "0.6"
  },
  {
    n: [
      "handbag"
    ],
    u: "1f45c",
    a: "0.6"
  },
  {
    n: [
      "pouch"
    ],
    u: "1f45d",
    a: "0.6"
  },
  {
    n: [
      "shopping bags"
    ],
    u: "1f6cd-fe0f",
    a: "0.7"
  },
  {
    n: [
      "school satchel"
    ],
    u: "1f392",
    a: "0.6"
  },
  {
    n: [
      "thong sandal"
    ],
    u: "1fa74",
    a: "13.0"
  },
  {
    n: [
      "shoe",
      "mans shoe"
    ],
    u: "1f45e",
    a: "0.6"
  },
  {
    n: [
      "athletic shoe"
    ],
    u: "1f45f",
    a: "0.6"
  },
  {
    n: [
      "hiking boot"
    ],
    u: "1f97e",
    a: "11.0"
  },
  {
    n: [
      "flat shoe",
      "womans flat shoe"
    ],
    u: "1f97f",
    a: "11.0"
  },
  {
    n: [
      "high heel",
      "high-heeled shoe"
    ],
    u: "1f460",
    a: "0.6"
  },
  {
    n: [
      "sandal",
      "womans sandal"
    ],
    u: "1f461",
    a: "0.6"
  },
  {
    n: [
      "ballet shoes"
    ],
    u: "1fa70",
    a: "12.0"
  },
  {
    n: [
      "boot",
      "womans boots"
    ],
    u: "1f462",
    a: "0.6"
  },
  {
    n: [
      "crown"
    ],
    u: "1f451",
    a: "0.6"
  },
  {
    n: [
      "womans hat"
    ],
    u: "1f452",
    a: "0.6"
  },
  {
    n: [
      "tophat",
      "top hat"
    ],
    u: "1f3a9",
    a: "0.6"
  },
  {
    n: [
      "mortar board",
      "graduation cap"
    ],
    u: "1f393",
    a: "0.6"
  },
  {
    n: [
      "billed cap"
    ],
    u: "1f9e2",
    a: "5.0"
  },
  {
    n: [
      "military helmet"
    ],
    u: "1fa96",
    a: "13.0"
  },
  {
    n: [
      "rescue worker’s helmet",
      "helmet with white cross"
    ],
    u: "26d1-fe0f",
    a: "0.7"
  },
  {
    n: [
      "prayer beads"
    ],
    u: "1f4ff",
    a: "1.0"
  },
  {
    n: [
      "lipstick"
    ],
    u: "1f484",
    a: "0.6"
  },
  {
    n: [
      "ring"
    ],
    u: "1f48d",
    a: "0.6"
  },
  {
    n: [
      "gem",
      "gem stone"
    ],
    u: "1f48e",
    a: "0.6"
  },
  {
    n: [
      "mute",
      "speaker with cancellation stroke"
    ],
    u: "1f507",
    a: "1.0"
  },
  {
    n: [
      "speaker"
    ],
    u: "1f508",
    a: "0.7"
  },
  {
    n: [
      "sound",
      "speaker with one sound wave"
    ],
    u: "1f509",
    a: "1.0"
  },
  {
    n: [
      "loud sound",
      "speaker with three sound waves"
    ],
    u: "1f50a",
    a: "0.6"
  },
  {
    n: [
      "loudspeaker",
      "public address loudspeaker"
    ],
    u: "1f4e2",
    a: "0.6"
  },
  {
    n: [
      "mega",
      "cheering megaphone"
    ],
    u: "1f4e3",
    a: "0.6"
  },
  {
    n: [
      "postal horn"
    ],
    u: "1f4ef",
    a: "1.0"
  },
  {
    n: [
      "bell"
    ],
    u: "1f514",
    a: "0.6"
  },
  {
    n: [
      "no bell",
      "bell with cancellation stroke"
    ],
    u: "1f515",
    a: "1.0"
  },
  {
    n: [
      "musical score"
    ],
    u: "1f3bc",
    a: "0.6"
  },
  {
    n: [
      "musical note"
    ],
    u: "1f3b5",
    a: "0.6"
  },
  {
    n: [
      "notes",
      "multiple musical notes"
    ],
    u: "1f3b6",
    a: "0.6"
  },
  {
    n: [
      "studio microphone"
    ],
    u: "1f399-fe0f",
    a: "0.7"
  },
  {
    n: [
      "level slider"
    ],
    u: "1f39a-fe0f",
    a: "0.7"
  },
  {
    n: [
      "control knobs"
    ],
    u: "1f39b-fe0f",
    a: "0.7"
  },
  {
    n: [
      "microphone"
    ],
    u: "1f3a4",
    a: "0.6"
  },
  {
    n: [
      "headphone",
      "headphones"
    ],
    u: "1f3a7",
    a: "0.6"
  },
  {
    n: [
      "radio"
    ],
    u: "1f4fb",
    a: "0.6"
  },
  {
    n: [
      "saxophone"
    ],
    u: "1f3b7",
    a: "0.6"
  },
  {
    n: [
      "accordion"
    ],
    u: "1fa97",
    a: "13.0"
  },
  {
    n: [
      "guitar"
    ],
    u: "1f3b8",
    a: "0.6"
  },
  {
    n: [
      "musical keyboard"
    ],
    u: "1f3b9",
    a: "0.6"
  },
  {
    n: [
      "trumpet"
    ],
    u: "1f3ba",
    a: "0.6"
  },
  {
    n: [
      "violin"
    ],
    u: "1f3bb",
    a: "0.6"
  },
  {
    n: [
      "banjo"
    ],
    u: "1fa95",
    a: "12.0"
  },
  {
    n: [
      "drum with drumsticks"
    ],
    u: "1f941",
    a: "3.0"
  },
  {
    n: [
      "long drum"
    ],
    u: "1fa98",
    a: "13.0"
  },
  {
    n: [
      "iphone",
      "mobile phone"
    ],
    u: "1f4f1",
    a: "0.6"
  },
  {
    n: [
      "calling",
      "mobile phone with rightwards arrow at left"
    ],
    u: "1f4f2",
    a: "0.6"
  },
  {
    n: [
      "phone",
      "telephone",
      "black telephone"
    ],
    u: "260e-fe0f",
    a: "0.6"
  },
  {
    n: [
      "telephone receiver"
    ],
    u: "1f4de",
    a: "0.6"
  },
  {
    n: [
      "pager"
    ],
    u: "1f4df",
    a: "0.6"
  },
  {
    n: [
      "fax",
      "fax machine"
    ],
    u: "1f4e0",
    a: "0.6"
  },
  {
    n: [
      "battery"
    ],
    u: "1f50b",
    a: "0.6"
  },
  {
    n: [
      "low battery"
    ],
    u: "1faab",
    a: "14.0"
  },
  {
    n: [
      "electric plug"
    ],
    u: "1f50c",
    a: "0.6"
  },
  {
    n: [
      "computer",
      "personal computer"
    ],
    u: "1f4bb",
    a: "0.6"
  },
  {
    n: [
      "desktop computer"
    ],
    u: "1f5a5-fe0f",
    a: "0.7"
  },
  {
    n: [
      "printer"
    ],
    u: "1f5a8-fe0f",
    a: "0.7"
  },
  {
    n: [
      "keyboard"
    ],
    u: "2328-fe0f",
    a: "1.0"
  },
  {
    n: [
      "computer mouse",
      "three button mouse"
    ],
    u: "1f5b1-fe0f",
    a: "0.7"
  },
  {
    n: [
      "trackball"
    ],
    u: "1f5b2-fe0f",
    a: "0.7"
  },
  {
    n: [
      "minidisc"
    ],
    u: "1f4bd",
    a: "0.6"
  },
  {
    n: [
      "floppy disk"
    ],
    u: "1f4be",
    a: "0.6"
  },
  {
    n: [
      "cd",
      "optical disc"
    ],
    u: "1f4bf",
    a: "0.6"
  },
  {
    n: [
      "dvd"
    ],
    u: "1f4c0",
    a: "0.6"
  },
  {
    n: [
      "abacus"
    ],
    u: "1f9ee",
    a: "11.0"
  },
  {
    n: [
      "movie camera"
    ],
    u: "1f3a5",
    a: "0.6"
  },
  {
    n: [
      "film frames"
    ],
    u: "1f39e-fe0f",
    a: "0.7"
  },
  {
    n: [
      "film projector"
    ],
    u: "1f4fd-fe0f",
    a: "0.7"
  },
  {
    n: [
      "clapper",
      "clapper board"
    ],
    u: "1f3ac",
    a: "0.6"
  },
  {
    n: [
      "tv",
      "television"
    ],
    u: "1f4fa",
    a: "0.6"
  },
  {
    n: [
      "camera"
    ],
    u: "1f4f7",
    a: "0.6"
  },
  {
    n: [
      "camera with flash"
    ],
    u: "1f4f8",
    a: "1.0"
  },
  {
    n: [
      "video camera"
    ],
    u: "1f4f9",
    a: "0.6"
  },
  {
    n: [
      "vhs",
      "videocassette"
    ],
    u: "1f4fc",
    a: "0.6"
  },
  {
    n: [
      "mag",
      "left-pointing magnifying glass"
    ],
    u: "1f50d",
    a: "0.6"
  },
  {
    n: [
      "mag right",
      "right-pointing magnifying glass"
    ],
    u: "1f50e",
    a: "0.6"
  },
  {
    n: [
      "candle"
    ],
    u: "1f56f-fe0f",
    a: "0.7"
  },
  {
    n: [
      "bulb",
      "electric light bulb"
    ],
    u: "1f4a1",
    a: "0.6"
  },
  {
    n: [
      "flashlight",
      "electric torch"
    ],
    u: "1f526",
    a: "0.6"
  },
  {
    n: [
      "lantern",
      "izakaya lantern"
    ],
    u: "1f3ee",
    a: "0.6"
  },
  {
    n: [
      "diya lamp"
    ],
    u: "1fa94",
    a: "12.0"
  },
  {
    n: [
      "notebook with decorative cover"
    ],
    u: "1f4d4",
    a: "0.6"
  },
  {
    n: [
      "closed book"
    ],
    u: "1f4d5",
    a: "0.6"
  },
  {
    n: [
      "book",
      "open book"
    ],
    u: "1f4d6",
    a: "0.6"
  },
  {
    n: [
      "green book"
    ],
    u: "1f4d7",
    a: "0.6"
  },
  {
    n: [
      "blue book"
    ],
    u: "1f4d8",
    a: "0.6"
  },
  {
    n: [
      "orange book"
    ],
    u: "1f4d9",
    a: "0.6"
  },
  {
    n: [
      "books"
    ],
    u: "1f4da",
    a: "0.6"
  },
  {
    n: [
      "notebook"
    ],
    u: "1f4d3",
    a: "0.6"
  },
  {
    n: [
      "ledger"
    ],
    u: "1f4d2",
    a: "0.6"
  },
  {
    n: [
      "page with curl"
    ],
    u: "1f4c3",
    a: "0.6"
  },
  {
    n: [
      "scroll"
    ],
    u: "1f4dc",
    a: "0.6"
  },
  {
    n: [
      "page facing up"
    ],
    u: "1f4c4",
    a: "0.6"
  },
  {
    n: [
      "newspaper"
    ],
    u: "1f4f0",
    a: "0.6"
  },
  {
    n: [
      "rolled-up newspaper",
      "rolled up newspaper"
    ],
    u: "1f5de-fe0f",
    a: "0.7"
  },
  {
    n: [
      "bookmark tabs"
    ],
    u: "1f4d1",
    a: "0.6"
  },
  {
    n: [
      "bookmark"
    ],
    u: "1f516",
    a: "0.6"
  },
  {
    n: [
      "label"
    ],
    u: "1f3f7-fe0f",
    a: "0.7"
  },
  {
    n: [
      "moneybag",
      "money bag"
    ],
    u: "1f4b0",
    a: "0.6"
  },
  {
    n: [
      "coin"
    ],
    u: "1fa99",
    a: "13.0"
  },
  {
    n: [
      "yen",
      "banknote with yen sign"
    ],
    u: "1f4b4",
    a: "0.6"
  },
  {
    n: [
      "dollar",
      "banknote with dollar sign"
    ],
    u: "1f4b5",
    a: "0.6"
  },
  {
    n: [
      "euro",
      "banknote with euro sign"
    ],
    u: "1f4b6",
    a: "1.0"
  },
  {
    n: [
      "pound",
      "banknote with pound sign"
    ],
    u: "1f4b7",
    a: "1.0"
  },
  {
    n: [
      "money with wings"
    ],
    u: "1f4b8",
    a: "0.6"
  },
  {
    n: [
      "credit card"
    ],
    u: "1f4b3",
    a: "0.6"
  },
  {
    n: [
      "receipt"
    ],
    u: "1f9fe",
    a: "11.0"
  },
  {
    n: [
      "chart",
      "chart with upwards trend and yen sign"
    ],
    u: "1f4b9",
    a: "0.6"
  },
  {
    n: [
      "email",
      "envelope"
    ],
    u: "2709-fe0f",
    a: "0.6"
  },
  {
    n: [
      "e-mail",
      "e-mail symbol"
    ],
    u: "1f4e7",
    a: "0.6"
  },
  {
    n: [
      "incoming envelope"
    ],
    u: "1f4e8",
    a: "0.6"
  },
  {
    n: [
      "envelope with arrow",
      "envelope with downwards arrow above"
    ],
    u: "1f4e9",
    a: "0.6"
  },
  {
    n: [
      "outbox tray"
    ],
    u: "1f4e4",
    a: "0.6"
  },
  {
    n: [
      "inbox tray"
    ],
    u: "1f4e5",
    a: "0.6"
  },
  {
    n: [
      "package"
    ],
    u: "1f4e6",
    a: "0.6"
  },
  {
    n: [
      "mailbox",
      "closed mailbox with raised flag"
    ],
    u: "1f4eb",
    a: "0.6"
  },
  {
    n: [
      "mailbox closed",
      "closed mailbox with lowered flag"
    ],
    u: "1f4ea",
    a: "0.6"
  },
  {
    n: [
      "mailbox with mail",
      "open mailbox with raised flag"
    ],
    u: "1f4ec",
    a: "0.7"
  },
  {
    n: [
      "mailbox with no mail",
      "open mailbox with lowered flag"
    ],
    u: "1f4ed",
    a: "0.7"
  },
  {
    n: [
      "postbox"
    ],
    u: "1f4ee",
    a: "0.6"
  },
  {
    n: [
      "ballot box with ballot"
    ],
    u: "1f5f3-fe0f",
    a: "0.7"
  },
  {
    n: [
      "pencil",
      "pencil2"
    ],
    u: "270f-fe0f",
    a: "0.6"
  },
  {
    n: [
      "black nib"
    ],
    u: "2712-fe0f",
    a: "0.6"
  },
  {
    n: [
      "fountain pen",
      "lower left fountain pen"
    ],
    u: "1f58b-fe0f",
    a: "0.7"
  },
  {
    n: [
      "pen",
      "lower left ballpoint pen"
    ],
    u: "1f58a-fe0f",
    a: "0.7"
  },
  {
    n: [
      "paintbrush",
      "lower left paintbrush"
    ],
    u: "1f58c-fe0f",
    a: "0.7"
  },
  {
    n: [
      "crayon",
      "lower left crayon"
    ],
    u: "1f58d-fe0f",
    a: "0.7"
  },
  {
    n: [
      "memo",
      "pencil"
    ],
    u: "1f4dd",
    a: "0.6"
  },
  {
    n: [
      "briefcase"
    ],
    u: "1f4bc",
    a: "0.6"
  },
  {
    n: [
      "file folder"
    ],
    u: "1f4c1",
    a: "0.6"
  },
  {
    n: [
      "open file folder"
    ],
    u: "1f4c2",
    a: "0.6"
  },
  {
    n: [
      "card index dividers"
    ],
    u: "1f5c2-fe0f",
    a: "0.7"
  },
  {
    n: [
      "date",
      "calendar"
    ],
    u: "1f4c5",
    a: "0.6"
  },
  {
    n: [
      "calendar",
      "tear-off calendar"
    ],
    u: "1f4c6",
    a: "0.6"
  },
  {
    n: [
      "spiral notepad",
      "spiral note pad"
    ],
    u: "1f5d2-fe0f",
    a: "0.7"
  },
  {
    n: [
      "spiral calendar",
      "spiral calendar pad"
    ],
    u: "1f5d3-fe0f",
    a: "0.7"
  },
  {
    n: [
      "card index"
    ],
    u: "1f4c7",
    a: "0.6"
  },
  {
    n: [
      "chart with upwards trend"
    ],
    u: "1f4c8",
    a: "0.6"
  },
  {
    n: [
      "chart with downwards trend"
    ],
    u: "1f4c9",
    a: "0.6"
  },
  {
    n: [
      "bar chart"
    ],
    u: "1f4ca",
    a: "0.6"
  },
  {
    n: [
      "clipboard"
    ],
    u: "1f4cb",
    a: "0.6"
  },
  {
    n: [
      "pushpin"
    ],
    u: "1f4cc",
    a: "0.6"
  },
  {
    n: [
      "round pushpin"
    ],
    u: "1f4cd",
    a: "0.6"
  },
  {
    n: [
      "paperclip"
    ],
    u: "1f4ce",
    a: "0.6"
  },
  {
    n: [
      "linked paperclips"
    ],
    u: "1f587-fe0f",
    a: "0.7"
  },
  {
    n: [
      "straight ruler"
    ],
    u: "1f4cf",
    a: "0.6"
  },
  {
    n: [
      "triangular ruler"
    ],
    u: "1f4d0",
    a: "0.6"
  },
  {
    n: [
      "scissors",
      "black scissors"
    ],
    u: "2702-fe0f",
    a: "0.6"
  },
  {
    n: [
      "card file box"
    ],
    u: "1f5c3-fe0f",
    a: "0.7"
  },
  {
    n: [
      "file cabinet"
    ],
    u: "1f5c4-fe0f",
    a: "0.7"
  },
  {
    n: [
      "wastebasket"
    ],
    u: "1f5d1-fe0f",
    a: "0.7"
  },
  {
    n: [
      "lock"
    ],
    u: "1f512",
    a: "0.6"
  },
  {
    n: [
      "unlock",
      "open lock"
    ],
    u: "1f513",
    a: "0.6"
  },
  {
    n: [
      "lock with ink pen"
    ],
    u: "1f50f",
    a: "0.6"
  },
  {
    n: [
      "closed lock with key"
    ],
    u: "1f510",
    a: "0.6"
  },
  {
    n: [
      "key"
    ],
    u: "1f511",
    a: "0.6"
  },
  {
    n: [
      "old key"
    ],
    u: "1f5dd-fe0f",
    a: "0.7"
  },
  {
    n: [
      "hammer"
    ],
    u: "1f528",
    a: "0.6"
  },
  {
    n: [
      "axe"
    ],
    u: "1fa93",
    a: "12.0"
  },
  {
    n: [
      "pick"
    ],
    u: "26cf-fe0f",
    a: "0.7"
  },
  {
    n: [
      "hammer and pick"
    ],
    u: "2692-fe0f",
    a: "1.0"
  },
  {
    n: [
      "hammer and wrench"
    ],
    u: "1f6e0-fe0f",
    a: "0.7"
  },
  {
    n: [
      "dagger",
      "dagger knife"
    ],
    u: "1f5e1-fe0f",
    a: "0.7"
  },
  {
    n: [
      "crossed swords"
    ],
    u: "2694-fe0f",
    a: "1.0"
  },
  {
    n: [
      "gun",
      "pistol"
    ],
    u: "1f52b",
    a: "0.6"
  },
  {
    n: [
      "boomerang"
    ],
    u: "1fa83",
    a: "13.0"
  },
  {
    n: [
      "bow and arrow"
    ],
    u: "1f3f9",
    a: "1.0"
  },
  {
    n: [
      "shield"
    ],
    u: "1f6e1-fe0f",
    a: "0.7"
  },
  {
    n: [
      "carpentry saw"
    ],
    u: "1fa9a",
    a: "13.0"
  },
  {
    n: [
      "wrench"
    ],
    u: "1f527",
    a: "0.6"
  },
  {
    n: [
      "screwdriver"
    ],
    u: "1fa9b",
    a: "13.0"
  },
  {
    n: [
      "nut and bolt"
    ],
    u: "1f529",
    a: "0.6"
  },
  {
    n: [
      "gear"
    ],
    u: "2699-fe0f",
    a: "1.0"
  },
  {
    n: [
      "clamp",
      "compression"
    ],
    u: "1f5dc-fe0f",
    a: "0.7"
  },
  {
    n: [
      "scales",
      "balance scale"
    ],
    u: "2696-fe0f",
    a: "1.0"
  },
  {
    n: [
      "probing cane"
    ],
    u: "1f9af",
    a: "12.0"
  },
  {
    n: [
      "link",
      "link symbol"
    ],
    u: "1f517",
    a: "0.6"
  },
  {
    n: [
      "chains"
    ],
    u: "26d3-fe0f",
    a: "0.7"
  },
  {
    n: [
      "hook"
    ],
    u: "1fa9d",
    a: "13.0"
  },
  {
    n: [
      "toolbox"
    ],
    u: "1f9f0",
    a: "11.0"
  },
  {
    n: [
      "magnet"
    ],
    u: "1f9f2",
    a: "11.0"
  },
  {
    n: [
      "ladder"
    ],
    u: "1fa9c",
    a: "13.0"
  },
  {
    n: [
      "alembic"
    ],
    u: "2697-fe0f",
    a: "1.0"
  },
  {
    n: [
      "test tube"
    ],
    u: "1f9ea",
    a: "11.0"
  },
  {
    n: [
      "petri dish"
    ],
    u: "1f9eb",
    a: "11.0"
  },
  {
    n: [
      "dna",
      "dna double helix"
    ],
    u: "1f9ec",
    a: "11.0"
  },
  {
    n: [
      "microscope"
    ],
    u: "1f52c",
    a: "1.0"
  },
  {
    n: [
      "telescope"
    ],
    u: "1f52d",
    a: "1.0"
  },
  {
    n: [
      "satellite antenna"
    ],
    u: "1f4e1",
    a: "0.6"
  },
  {
    n: [
      "syringe"
    ],
    u: "1f489",
    a: "0.6"
  },
  {
    n: [
      "drop of blood"
    ],
    u: "1fa78",
    a: "12.0"
  },
  {
    n: [
      "pill"
    ],
    u: "1f48a",
    a: "0.6"
  },
  {
    n: [
      "adhesive bandage"
    ],
    u: "1fa79",
    a: "12.0"
  },
  {
    n: [
      "crutch"
    ],
    u: "1fa7c",
    a: "14.0"
  },
  {
    n: [
      "stethoscope"
    ],
    u: "1fa7a",
    a: "12.0"
  },
  {
    n: [
      "x-ray"
    ],
    u: "1fa7b",
    a: "14.0"
  },
  {
    n: [
      "door"
    ],
    u: "1f6aa",
    a: "0.6"
  },
  {
    n: [
      "elevator"
    ],
    u: "1f6d7",
    a: "13.0"
  },
  {
    n: [
      "mirror"
    ],
    u: "1fa9e",
    a: "13.0"
  },
  {
    n: [
      "window"
    ],
    u: "1fa9f",
    a: "13.0"
  },
  {
    n: [
      "bed"
    ],
    u: "1f6cf-fe0f",
    a: "0.7"
  },
  {
    n: [
      "couch and lamp"
    ],
    u: "1f6cb-fe0f",
    a: "0.7"
  },
  {
    n: [
      "chair"
    ],
    u: "1fa91",
    a: "12.0"
  },
  {
    n: [
      "toilet"
    ],
    u: "1f6bd",
    a: "0.6"
  },
  {
    n: [
      "plunger"
    ],
    u: "1faa0",
    a: "13.0"
  },
  {
    n: [
      "shower"
    ],
    u: "1f6bf",
    a: "1.0"
  },
  {
    n: [
      "bathtub"
    ],
    u: "1f6c1",
    a: "1.0"
  },
  {
    n: [
      "mouse trap"
    ],
    u: "1faa4",
    a: "13.0"
  },
  {
    n: [
      "razor"
    ],
    u: "1fa92",
    a: "12.0"
  },
  {
    n: [
      "lotion bottle"
    ],
    u: "1f9f4",
    a: "11.0"
  },
  {
    n: [
      "safety pin"
    ],
    u: "1f9f7",
    a: "11.0"
  },
  {
    n: [
      "broom"
    ],
    u: "1f9f9",
    a: "11.0"
  },
  {
    n: [
      "basket"
    ],
    u: "1f9fa",
    a: "11.0"
  },
  {
    n: [
      "roll of paper"
    ],
    u: "1f9fb",
    a: "11.0"
  },
  {
    n: [
      "bucket"
    ],
    u: "1faa3",
    a: "13.0"
  },
  {
    n: [
      "soap",
      "bar of soap"
    ],
    u: "1f9fc",
    a: "11.0"
  },
  {
    n: [
      "bubbles"
    ],
    u: "1fae7",
    a: "14.0"
  },
  {
    n: [
      "toothbrush"
    ],
    u: "1faa5",
    a: "13.0"
  },
  {
    n: [
      "sponge"
    ],
    u: "1f9fd",
    a: "11.0"
  },
  {
    n: [
      "fire extinguisher"
    ],
    u: "1f9ef",
    a: "11.0"
  },
  {
    n: [
      "shopping trolley"
    ],
    u: "1f6d2",
    a: "3.0"
  },
  {
    n: [
      "smoking",
      "smoking symbol"
    ],
    u: "1f6ac",
    a: "0.6"
  },
  {
    n: [
      "coffin"
    ],
    u: "26b0-fe0f",
    a: "1.0"
  },
  {
    n: [
      "headstone"
    ],
    u: "1faa6",
    a: "13.0"
  },
  {
    n: [
      "funeral urn"
    ],
    u: "26b1-fe0f",
    a: "1.0"
  },
  {
    n: [
      "moyai"
    ],
    u: "1f5ff",
    a: "0.6"
  },
  {
    n: [
      "placard"
    ],
    u: "1faa7",
    a: "13.0"
  },
  {
    n: [
      "identification card"
    ],
    u: "1faaa",
    a: "14.0"
  }
], li = [
  {
    n: [
      "atm",
      "automated teller machine"
    ],
    u: "1f3e7",
    a: "0.6"
  },
  {
    n: [
      "put litter in its place",
      "put litter in its place symbol"
    ],
    u: "1f6ae",
    a: "1.0"
  },
  {
    n: [
      "potable water",
      "potable water symbol"
    ],
    u: "1f6b0",
    a: "1.0"
  },
  {
    n: [
      "wheelchair",
      "wheelchair symbol"
    ],
    u: "267f",
    a: "0.6"
  },
  {
    n: [
      "mens",
      "mens symbol"
    ],
    u: "1f6b9",
    a: "0.6"
  },
  {
    n: [
      "womens",
      "womens symbol"
    ],
    u: "1f6ba",
    a: "0.6"
  },
  {
    n: [
      "restroom"
    ],
    u: "1f6bb",
    a: "0.6"
  },
  {
    n: [
      "baby symbol"
    ],
    u: "1f6bc",
    a: "0.6"
  },
  {
    n: [
      "wc",
      "water closet"
    ],
    u: "1f6be",
    a: "0.6"
  },
  {
    n: [
      "passport control"
    ],
    u: "1f6c2",
    a: "1.0"
  },
  {
    n: [
      "customs"
    ],
    u: "1f6c3",
    a: "1.0"
  },
  {
    n: [
      "baggage claim"
    ],
    u: "1f6c4",
    a: "1.0"
  },
  {
    n: [
      "left luggage"
    ],
    u: "1f6c5",
    a: "1.0"
  },
  {
    n: [
      "warning",
      "warning sign"
    ],
    u: "26a0-fe0f",
    a: "0.6"
  },
  {
    n: [
      "children crossing"
    ],
    u: "1f6b8",
    a: "1.0"
  },
  {
    n: [
      "no entry"
    ],
    u: "26d4",
    a: "0.6"
  },
  {
    n: [
      "no entry sign"
    ],
    u: "1f6ab",
    a: "0.6"
  },
  {
    n: [
      "no bicycles"
    ],
    u: "1f6b3",
    a: "1.0"
  },
  {
    n: [
      "no smoking",
      "no smoking symbol"
    ],
    u: "1f6ad",
    a: "0.6"
  },
  {
    n: [
      "do not litter",
      "do not litter symbol"
    ],
    u: "1f6af",
    a: "1.0"
  },
  {
    n: [
      "non-potable water",
      "non-potable water symbol"
    ],
    u: "1f6b1",
    a: "1.0"
  },
  {
    n: [
      "no pedestrians"
    ],
    u: "1f6b7",
    a: "1.0"
  },
  {
    n: [
      "no mobile phones"
    ],
    u: "1f4f5",
    a: "1.0"
  },
  {
    n: [
      "underage",
      "no one under eighteen symbol"
    ],
    u: "1f51e",
    a: "0.6"
  },
  {
    n: [
      "radioactive",
      "radioactive sign"
    ],
    u: "2622-fe0f",
    a: "1.0"
  },
  {
    n: [
      "biohazard",
      "biohazard sign"
    ],
    u: "2623-fe0f",
    a: "1.0"
  },
  {
    n: [
      "arrow up",
      "upwards black arrow"
    ],
    u: "2b06-fe0f",
    a: "0.6"
  },
  {
    n: [
      "north east arrow",
      "arrow upper right"
    ],
    u: "2197-fe0f",
    a: "0.6"
  },
  {
    n: [
      "arrow right",
      "black rightwards arrow"
    ],
    u: "27a1-fe0f",
    a: "0.6"
  },
  {
    n: [
      "south east arrow",
      "arrow lower right"
    ],
    u: "2198-fe0f",
    a: "0.6"
  },
  {
    n: [
      "arrow down",
      "downwards black arrow"
    ],
    u: "2b07-fe0f",
    a: "0.6"
  },
  {
    n: [
      "south west arrow",
      "arrow lower left"
    ],
    u: "2199-fe0f",
    a: "0.6"
  },
  {
    n: [
      "arrow left",
      "leftwards black arrow"
    ],
    u: "2b05-fe0f",
    a: "0.6"
  },
  {
    n: [
      "north west arrow",
      "arrow upper left"
    ],
    u: "2196-fe0f",
    a: "0.6"
  },
  {
    n: [
      "up down arrow",
      "arrow up down"
    ],
    u: "2195-fe0f",
    a: "0.6"
  },
  {
    n: [
      "left right arrow"
    ],
    u: "2194-fe0f",
    a: "0.6"
  },
  {
    n: [
      "leftwards arrow with hook"
    ],
    u: "21a9-fe0f",
    a: "0.6"
  },
  {
    n: [
      "arrow right hook",
      "rightwards arrow with hook"
    ],
    u: "21aa-fe0f",
    a: "0.6"
  },
  {
    n: [
      "arrow heading up",
      "arrow pointing rightwards then curving upwards"
    ],
    u: "2934-fe0f",
    a: "0.6"
  },
  {
    n: [
      "arrow heading down",
      "arrow pointing rightwards then curving downwards"
    ],
    u: "2935-fe0f",
    a: "0.6"
  },
  {
    n: [
      "arrows clockwise",
      "clockwise downwards and upwards open circle arrows"
    ],
    u: "1f503",
    a: "0.6"
  },
  {
    n: [
      "arrows counterclockwise",
      "anticlockwise downwards and upwards open circle arrows"
    ],
    u: "1f504",
    a: "1.0"
  },
  {
    n: [
      "back",
      "back with leftwards arrow above"
    ],
    u: "1f519",
    a: "0.6"
  },
  {
    n: [
      "end",
      "end with leftwards arrow above"
    ],
    u: "1f51a",
    a: "0.6"
  },
  {
    n: [
      "on",
      "on with exclamation mark with left right arrow above"
    ],
    u: "1f51b",
    a: "0.6"
  },
  {
    n: [
      "soon",
      "soon with rightwards arrow above"
    ],
    u: "1f51c",
    a: "0.6"
  },
  {
    n: [
      "top",
      "top with upwards arrow above"
    ],
    u: "1f51d",
    a: "0.6"
  },
  {
    n: [
      "place of worship"
    ],
    u: "1f6d0",
    a: "1.0"
  },
  {
    n: [
      "atom symbol"
    ],
    u: "269b-fe0f",
    a: "1.0"
  },
  {
    n: [
      "om",
      "om symbol"
    ],
    u: "1f549-fe0f",
    a: "0.7"
  },
  {
    n: [
      "star of david"
    ],
    u: "2721-fe0f",
    a: "0.7"
  },
  {
    n: [
      "wheel of dharma"
    ],
    u: "2638-fe0f",
    a: "0.7"
  },
  {
    n: [
      "yin yang"
    ],
    u: "262f-fe0f",
    a: "0.7"
  },
  {
    n: [
      "latin cross"
    ],
    u: "271d-fe0f",
    a: "0.7"
  },
  {
    n: [
      "orthodox cross"
    ],
    u: "2626-fe0f",
    a: "1.0"
  },
  {
    n: [
      "star and crescent"
    ],
    u: "262a-fe0f",
    a: "0.7"
  },
  {
    n: [
      "peace symbol"
    ],
    u: "262e-fe0f",
    a: "1.0"
  },
  {
    n: [
      "menorah with nine branches"
    ],
    u: "1f54e",
    a: "1.0"
  },
  {
    n: [
      "six pointed star",
      "six pointed star with middle dot"
    ],
    u: "1f52f",
    a: "0.6"
  },
  {
    n: [
      "aries"
    ],
    u: "2648",
    a: "0.6"
  },
  {
    n: [
      "taurus"
    ],
    u: "2649",
    a: "0.6"
  },
  {
    n: [
      "gemini"
    ],
    u: "264a",
    a: "0.6"
  },
  {
    n: [
      "cancer"
    ],
    u: "264b",
    a: "0.6"
  },
  {
    n: [
      "leo"
    ],
    u: "264c",
    a: "0.6"
  },
  {
    n: [
      "virgo"
    ],
    u: "264d",
    a: "0.6"
  },
  {
    n: [
      "libra"
    ],
    u: "264e",
    a: "0.6"
  },
  {
    n: [
      "scorpius"
    ],
    u: "264f",
    a: "0.6"
  },
  {
    n: [
      "sagittarius"
    ],
    u: "2650",
    a: "0.6"
  },
  {
    n: [
      "capricorn"
    ],
    u: "2651",
    a: "0.6"
  },
  {
    n: [
      "aquarius"
    ],
    u: "2652",
    a: "0.6"
  },
  {
    n: [
      "pisces"
    ],
    u: "2653",
    a: "0.6"
  },
  {
    n: [
      "ophiuchus"
    ],
    u: "26ce",
    a: "0.6"
  },
  {
    n: [
      "twisted rightwards arrows"
    ],
    u: "1f500",
    a: "1.0"
  },
  {
    n: [
      "repeat",
      "clockwise rightwards and leftwards open circle arrows"
    ],
    u: "1f501",
    a: "1.0"
  },
  {
    n: [
      "repeat one",
      "clockwise rightwards and leftwards open circle arrows with circled one overlay"
    ],
    u: "1f502",
    a: "1.0"
  },
  {
    n: [
      "arrow forward",
      "black right-pointing triangle"
    ],
    u: "25b6-fe0f",
    a: "0.6"
  },
  {
    n: [
      "fast forward",
      "black right-pointing double triangle"
    ],
    u: "23e9",
    a: "0.6"
  },
  {
    n: [
      "next track button",
      "black right pointing double triangle with vertical bar"
    ],
    u: "23ed-fe0f",
    a: "0.7"
  },
  {
    n: [
      "play or pause button",
      "black right pointing triangle with double vertical bar"
    ],
    u: "23ef-fe0f",
    a: "1.0"
  },
  {
    n: [
      "arrow backward",
      "black left-pointing triangle"
    ],
    u: "25c0-fe0f",
    a: "0.6"
  },
  {
    n: [
      "rewind",
      "black left-pointing double triangle"
    ],
    u: "23ea",
    a: "0.6"
  },
  {
    n: [
      "last track button",
      "black left pointing double triangle with vertical bar"
    ],
    u: "23ee-fe0f",
    a: "0.7"
  },
  {
    n: [
      "arrow up small",
      "up-pointing small red triangle"
    ],
    u: "1f53c",
    a: "0.6"
  },
  {
    n: [
      "arrow double up",
      "black up-pointing double triangle"
    ],
    u: "23eb",
    a: "0.6"
  },
  {
    n: [
      "arrow down small",
      "down-pointing small red triangle"
    ],
    u: "1f53d",
    a: "0.6"
  },
  {
    n: [
      "arrow double down",
      "black down-pointing double triangle"
    ],
    u: "23ec",
    a: "0.6"
  },
  {
    n: [
      "pause button",
      "double vertical bar"
    ],
    u: "23f8-fe0f",
    a: "0.7"
  },
  {
    n: [
      "stop button",
      "black square for stop"
    ],
    u: "23f9-fe0f",
    a: "0.7"
  },
  {
    n: [
      "record button",
      "black circle for record"
    ],
    u: "23fa-fe0f",
    a: "0.7"
  },
  {
    n: [
      "eject",
      "eject button"
    ],
    u: "23cf-fe0f",
    a: "1.0"
  },
  {
    n: [
      "cinema"
    ],
    u: "1f3a6",
    a: "0.6"
  },
  {
    n: [
      "low brightness",
      "low brightness symbol"
    ],
    u: "1f505",
    a: "1.0"
  },
  {
    n: [
      "high brightness",
      "high brightness symbol"
    ],
    u: "1f506",
    a: "1.0"
  },
  {
    n: [
      "signal strength",
      "antenna with bars"
    ],
    u: "1f4f6",
    a: "0.6"
  },
  {
    n: [
      "vibration mode"
    ],
    u: "1f4f3",
    a: "0.6"
  },
  {
    n: [
      "mobile phone off"
    ],
    u: "1f4f4",
    a: "0.6"
  },
  {
    n: [
      "female sign"
    ],
    u: "2640-fe0f",
    a: "4.0"
  },
  {
    n: [
      "male sign"
    ],
    u: "2642-fe0f",
    a: "4.0"
  },
  {
    n: [
      "transgender symbol"
    ],
    u: "26a7-fe0f",
    a: "13.0"
  },
  {
    n: [
      "heavy multiplication x"
    ],
    u: "2716-fe0f",
    a: "0.6"
  },
  {
    n: [
      "heavy plus sign"
    ],
    u: "2795",
    a: "0.6"
  },
  {
    n: [
      "heavy minus sign"
    ],
    u: "2796",
    a: "0.6"
  },
  {
    n: [
      "heavy division sign"
    ],
    u: "2797",
    a: "0.6"
  },
  {
    n: [
      "heavy equals sign"
    ],
    u: "1f7f0",
    a: "14.0"
  },
  {
    n: [
      "infinity"
    ],
    u: "267e-fe0f",
    a: "11.0"
  },
  {
    n: [
      "bangbang",
      "double exclamation mark"
    ],
    u: "203c-fe0f",
    a: "0.6"
  },
  {
    n: [
      "interrobang",
      "exclamation question mark"
    ],
    u: "2049-fe0f",
    a: "0.6"
  },
  {
    n: [
      "question",
      "black question mark ornament"
    ],
    u: "2753",
    a: "0.6"
  },
  {
    n: [
      "grey question",
      "white question mark ornament"
    ],
    u: "2754",
    a: "0.6"
  },
  {
    n: [
      "grey exclamation",
      "white exclamation mark ornament"
    ],
    u: "2755",
    a: "0.6"
  },
  {
    n: [
      "exclamation",
      "heavy exclamation mark",
      "heavy exclamation mark symbol"
    ],
    u: "2757",
    a: "0.6"
  },
  {
    n: [
      "wavy dash"
    ],
    u: "3030-fe0f",
    a: "0.6"
  },
  {
    n: [
      "currency exchange"
    ],
    u: "1f4b1",
    a: "0.6"
  },
  {
    n: [
      "heavy dollar sign"
    ],
    u: "1f4b2",
    a: "0.6"
  },
  {
    n: [
      "medical symbol",
      "staff of aesculapius"
    ],
    u: "2695-fe0f",
    a: "4.0"
  },
  {
    n: [
      "recycle",
      "black universal recycling symbol"
    ],
    u: "267b-fe0f",
    a: "0.6"
  },
  {
    n: [
      "fleur-de-lis",
      "fleur de lis"
    ],
    u: "269c-fe0f",
    a: "1.0"
  },
  {
    n: [
      "trident",
      "trident emblem"
    ],
    u: "1f531",
    a: "0.6"
  },
  {
    n: [
      "name badge"
    ],
    u: "1f4db",
    a: "0.6"
  },
  {
    n: [
      "beginner",
      "japanese symbol for beginner"
    ],
    u: "1f530",
    a: "0.6"
  },
  {
    n: [
      "o",
      "heavy large circle"
    ],
    u: "2b55",
    a: "0.6"
  },
  {
    n: [
      "white check mark",
      "white heavy check mark"
    ],
    u: "2705",
    a: "0.6"
  },
  {
    n: [
      "ballot box with check"
    ],
    u: "2611-fe0f",
    a: "0.6"
  },
  {
    n: [
      "heavy check mark"
    ],
    u: "2714-fe0f",
    a: "0.6"
  },
  {
    n: [
      "x",
      "cross mark"
    ],
    u: "274c",
    a: "0.6"
  },
  {
    n: [
      "negative squared cross mark"
    ],
    u: "274e",
    a: "0.6"
  },
  {
    n: [
      "curly loop"
    ],
    u: "27b0",
    a: "0.6"
  },
  {
    n: [
      "loop",
      "double curly loop"
    ],
    u: "27bf",
    a: "1.0"
  },
  {
    n: [
      "part alternation mark"
    ],
    u: "303d-fe0f",
    a: "0.6"
  },
  {
    n: [
      "eight spoked asterisk"
    ],
    u: "2733-fe0f",
    a: "0.6"
  },
  {
    n: [
      "eight pointed black star"
    ],
    u: "2734-fe0f",
    a: "0.6"
  },
  {
    n: [
      "sparkle"
    ],
    u: "2747-fe0f",
    a: "0.6"
  },
  {
    n: [
      "copyright",
      "copyright sign"
    ],
    u: "00a9-fe0f",
    a: "0.6"
  },
  {
    n: [
      "registered",
      "registered sign"
    ],
    u: "00ae-fe0f",
    a: "0.6"
  },
  {
    n: [
      "tm",
      "trade mark sign"
    ],
    u: "2122-fe0f",
    a: "0.6"
  },
  {
    n: [
      "hash",
      "hash key"
    ],
    u: "0023-fe0f-20e3",
    a: "0.6"
  },
  {
    n: [
      "keycap: *",
      "keycap star"
    ],
    u: "002a-fe0f-20e3",
    a: "2.0"
  },
  {
    n: [
      "zero",
      "keycap 0"
    ],
    u: "0030-fe0f-20e3",
    a: "0.6"
  },
  {
    n: [
      "one",
      "keycap 1"
    ],
    u: "0031-fe0f-20e3",
    a: "0.6"
  },
  {
    n: [
      "two",
      "keycap 2"
    ],
    u: "0032-fe0f-20e3",
    a: "0.6"
  },
  {
    n: [
      "three",
      "keycap 3"
    ],
    u: "0033-fe0f-20e3",
    a: "0.6"
  },
  {
    n: [
      "four",
      "keycap 4"
    ],
    u: "0034-fe0f-20e3",
    a: "0.6"
  },
  {
    n: [
      "five",
      "keycap 5"
    ],
    u: "0035-fe0f-20e3",
    a: "0.6"
  },
  {
    n: [
      "six",
      "keycap 6"
    ],
    u: "0036-fe0f-20e3",
    a: "0.6"
  },
  {
    n: [
      "seven",
      "keycap 7"
    ],
    u: "0037-fe0f-20e3",
    a: "0.6"
  },
  {
    n: [
      "eight",
      "keycap 8"
    ],
    u: "0038-fe0f-20e3",
    a: "0.6"
  },
  {
    n: [
      "nine",
      "keycap 9"
    ],
    u: "0039-fe0f-20e3",
    a: "0.6"
  },
  {
    n: [
      "keycap ten"
    ],
    u: "1f51f",
    a: "0.6"
  },
  {
    n: [
      "capital abcd",
      "input symbol for latin capital letters"
    ],
    u: "1f520",
    a: "0.6"
  },
  {
    n: [
      "abcd",
      "input symbol for latin small letters"
    ],
    u: "1f521",
    a: "0.6"
  },
  {
    n: [
      "1234",
      "input symbol for numbers"
    ],
    u: "1f522",
    a: "0.6"
  },
  {
    n: [
      "symbols",
      "input symbol for symbols"
    ],
    u: "1f523",
    a: "0.6"
  },
  {
    n: [
      "abc",
      "input symbol for latin letters"
    ],
    u: "1f524",
    a: "0.6"
  },
  {
    n: [
      "a",
      "negative squared latin capital letter a"
    ],
    u: "1f170-fe0f",
    a: "0.6"
  },
  {
    n: [
      "ab",
      "negative squared ab"
    ],
    u: "1f18e",
    a: "0.6"
  },
  {
    n: [
      "b",
      "negative squared latin capital letter b"
    ],
    u: "1f171-fe0f",
    a: "0.6"
  },
  {
    n: [
      "cl",
      "squared cl"
    ],
    u: "1f191",
    a: "0.6"
  },
  {
    n: [
      "cool",
      "squared cool"
    ],
    u: "1f192",
    a: "0.6"
  },
  {
    n: [
      "free",
      "squared free"
    ],
    u: "1f193",
    a: "0.6"
  },
  {
    n: [
      "information source"
    ],
    u: "2139-fe0f",
    a: "0.6"
  },
  {
    n: [
      "id",
      "squared id"
    ],
    u: "1f194",
    a: "0.6"
  },
  {
    n: [
      "m",
      "circled latin capital letter m"
    ],
    u: "24c2-fe0f",
    a: "0.6"
  },
  {
    n: [
      "new",
      "squared new"
    ],
    u: "1f195",
    a: "0.6"
  },
  {
    n: [
      "ng",
      "squared ng"
    ],
    u: "1f196",
    a: "0.6"
  },
  {
    n: [
      "o2",
      "negative squared latin capital letter o"
    ],
    u: "1f17e-fe0f",
    a: "0.6"
  },
  {
    n: [
      "ok",
      "squared ok"
    ],
    u: "1f197",
    a: "0.6"
  },
  {
    n: [
      "parking",
      "negative squared latin capital letter p"
    ],
    u: "1f17f-fe0f",
    a: "0.6"
  },
  {
    n: [
      "sos",
      "squared sos"
    ],
    u: "1f198",
    a: "0.6"
  },
  {
    n: [
      "up",
      "squared up with exclamation mark"
    ],
    u: "1f199",
    a: "0.6"
  },
  {
    n: [
      "vs",
      "squared vs"
    ],
    u: "1f19a",
    a: "0.6"
  },
  {
    n: [
      "koko",
      "squared katakana koko"
    ],
    u: "1f201",
    a: "0.6"
  },
  {
    n: [
      "sa",
      "squared katakana sa"
    ],
    u: "1f202-fe0f",
    a: "0.6"
  },
  {
    n: [
      "u6708",
      "squared cjk unified ideograph-6708"
    ],
    u: "1f237-fe0f",
    a: "0.6"
  },
  {
    n: [
      "u6709",
      "squared cjk unified ideograph-6709"
    ],
    u: "1f236",
    a: "0.6"
  },
  {
    n: [
      "u6307",
      "squared cjk unified ideograph-6307"
    ],
    u: "1f22f",
    a: "0.6"
  },
  {
    n: [
      "ideograph advantage",
      "circled ideograph advantage"
    ],
    u: "1f250",
    a: "0.6"
  },
  {
    n: [
      "u5272",
      "squared cjk unified ideograph-5272"
    ],
    u: "1f239",
    a: "0.6"
  },
  {
    n: [
      "u7121",
      "squared cjk unified ideograph-7121"
    ],
    u: "1f21a",
    a: "0.6"
  },
  {
    n: [
      "u7981",
      "squared cjk unified ideograph-7981"
    ],
    u: "1f232",
    a: "0.6"
  },
  {
    n: [
      "accept",
      "circled ideograph accept"
    ],
    u: "1f251",
    a: "0.6"
  },
  {
    n: [
      "u7533",
      "squared cjk unified ideograph-7533"
    ],
    u: "1f238",
    a: "0.6"
  },
  {
    n: [
      "u5408",
      "squared cjk unified ideograph-5408"
    ],
    u: "1f234",
    a: "0.6"
  },
  {
    n: [
      "u7a7a",
      "squared cjk unified ideograph-7a7a"
    ],
    u: "1f233",
    a: "0.6"
  },
  {
    n: [
      "congratulations",
      "circled ideograph congratulation"
    ],
    u: "3297-fe0f",
    a: "0.6"
  },
  {
    n: [
      "secret",
      "circled ideograph secret"
    ],
    u: "3299-fe0f",
    a: "0.6"
  },
  {
    n: [
      "u55b6",
      "squared cjk unified ideograph-55b6"
    ],
    u: "1f23a",
    a: "0.6"
  },
  {
    n: [
      "u6e80",
      "squared cjk unified ideograph-6e80"
    ],
    u: "1f235",
    a: "0.6"
  },
  {
    n: [
      "red circle",
      "large red circle"
    ],
    u: "1f534",
    a: "0.6"
  },
  {
    n: [
      "large orange circle"
    ],
    u: "1f7e0",
    a: "12.0"
  },
  {
    n: [
      "large yellow circle"
    ],
    u: "1f7e1",
    a: "12.0"
  },
  {
    n: [
      "large green circle"
    ],
    u: "1f7e2",
    a: "12.0"
  },
  {
    n: [
      "large blue circle"
    ],
    u: "1f535",
    a: "0.6"
  },
  {
    n: [
      "large purple circle"
    ],
    u: "1f7e3",
    a: "12.0"
  },
  {
    n: [
      "large brown circle"
    ],
    u: "1f7e4",
    a: "12.0"
  },
  {
    n: [
      "black circle",
      "medium black circle"
    ],
    u: "26ab",
    a: "0.6"
  },
  {
    n: [
      "white circle",
      "medium white circle"
    ],
    u: "26aa",
    a: "0.6"
  },
  {
    n: [
      "large red square"
    ],
    u: "1f7e5",
    a: "12.0"
  },
  {
    n: [
      "large orange square"
    ],
    u: "1f7e7",
    a: "12.0"
  },
  {
    n: [
      "large yellow square"
    ],
    u: "1f7e8",
    a: "12.0"
  },
  {
    n: [
      "large green square"
    ],
    u: "1f7e9",
    a: "12.0"
  },
  {
    n: [
      "large blue square"
    ],
    u: "1f7e6",
    a: "12.0"
  },
  {
    n: [
      "large purple square"
    ],
    u: "1f7ea",
    a: "12.0"
  },
  {
    n: [
      "large brown square"
    ],
    u: "1f7eb",
    a: "12.0"
  },
  {
    n: [
      "black large square"
    ],
    u: "2b1b",
    a: "0.6"
  },
  {
    n: [
      "white large square"
    ],
    u: "2b1c",
    a: "0.6"
  },
  {
    n: [
      "black medium square"
    ],
    u: "25fc-fe0f",
    a: "0.6"
  },
  {
    n: [
      "white medium square"
    ],
    u: "25fb-fe0f",
    a: "0.6"
  },
  {
    n: [
      "black medium small square"
    ],
    u: "25fe",
    a: "0.6"
  },
  {
    n: [
      "white medium small square"
    ],
    u: "25fd",
    a: "0.6"
  },
  {
    n: [
      "black small square"
    ],
    u: "25aa-fe0f",
    a: "0.6"
  },
  {
    n: [
      "white small square"
    ],
    u: "25ab-fe0f",
    a: "0.6"
  },
  {
    n: [
      "large orange diamond"
    ],
    u: "1f536",
    a: "0.6"
  },
  {
    n: [
      "large blue diamond"
    ],
    u: "1f537",
    a: "0.6"
  },
  {
    n: [
      "small orange diamond"
    ],
    u: "1f538",
    a: "0.6"
  },
  {
    n: [
      "small blue diamond"
    ],
    u: "1f539",
    a: "0.6"
  },
  {
    n: [
      "small red triangle",
      "up-pointing red triangle"
    ],
    u: "1f53a",
    a: "0.6"
  },
  {
    n: [
      "small red triangle down",
      "down-pointing red triangle"
    ],
    u: "1f53b",
    a: "0.6"
  },
  {
    n: [
      "diamond shape with a dot inside"
    ],
    u: "1f4a0",
    a: "0.6"
  },
  {
    n: [
      "radio button"
    ],
    u: "1f518",
    a: "0.6"
  },
  {
    n: [
      "white square button"
    ],
    u: "1f533",
    a: "0.6"
  },
  {
    n: [
      "black square button"
    ],
    u: "1f532",
    a: "0.6"
  }
], Mi = [
  {
    n: [
      "chequered flag",
      "checkered flag"
    ],
    u: "1f3c1",
    a: "0.6"
  },
  {
    n: [
      "triangular flag on post"
    ],
    u: "1f6a9",
    a: "0.6"
  },
  {
    n: [
      "crossed flags"
    ],
    u: "1f38c",
    a: "0.6"
  },
  {
    n: [
      "waving black flag"
    ],
    u: "1f3f4",
    a: "1.0"
  },
  {
    n: [
      "white flag",
      "waving white flag"
    ],
    u: "1f3f3-fe0f",
    a: "0.7"
  },
  {
    n: [
      "rainbow flag",
      "rainbow-flag"
    ],
    u: "1f3f3-fe0f-200d-1f308",
    a: "4.0"
  },
  {
    n: [
      "transgender flag"
    ],
    u: "1f3f3-fe0f-200d-26a7-fe0f",
    a: "13.0"
  },
  {
    n: [
      "pirate flag"
    ],
    u: "1f3f4-200d-2620-fe0f",
    a: "11.0"
  },
  {
    n: [
      "flag-ac",
      "ascension island flag"
    ],
    u: "1f1e6-1f1e8",
    a: "2.0"
  },
  {
    n: [
      "flag-ad",
      "andorra flag"
    ],
    u: "1f1e6-1f1e9",
    a: "2.0"
  },
  {
    n: [
      "flag-ae",
      "united arab emirates flag"
    ],
    u: "1f1e6-1f1ea",
    a: "2.0"
  },
  {
    n: [
      "flag-af",
      "afghanistan flag"
    ],
    u: "1f1e6-1f1eb",
    a: "2.0"
  },
  {
    n: [
      "flag-ag",
      "antigua & barbuda flag"
    ],
    u: "1f1e6-1f1ec",
    a: "2.0"
  },
  {
    n: [
      "flag-ai",
      "anguilla flag"
    ],
    u: "1f1e6-1f1ee",
    a: "2.0"
  },
  {
    n: [
      "flag-al",
      "albania flag"
    ],
    u: "1f1e6-1f1f1",
    a: "2.0"
  },
  {
    n: [
      "flag-am",
      "armenia flag"
    ],
    u: "1f1e6-1f1f2",
    a: "2.0"
  },
  {
    n: [
      "flag-ao",
      "angola flag"
    ],
    u: "1f1e6-1f1f4",
    a: "2.0"
  },
  {
    n: [
      "flag-aq",
      "antarctica flag"
    ],
    u: "1f1e6-1f1f6",
    a: "2.0"
  },
  {
    n: [
      "flag-ar",
      "argentina flag"
    ],
    u: "1f1e6-1f1f7",
    a: "2.0"
  },
  {
    n: [
      "flag-as",
      "american samoa flag"
    ],
    u: "1f1e6-1f1f8",
    a: "2.0"
  },
  {
    n: [
      "flag-at",
      "austria flag"
    ],
    u: "1f1e6-1f1f9",
    a: "2.0"
  },
  {
    n: [
      "flag-au",
      "australia flag"
    ],
    u: "1f1e6-1f1fa",
    a: "2.0"
  },
  {
    n: [
      "flag-aw",
      "aruba flag"
    ],
    u: "1f1e6-1f1fc",
    a: "2.0"
  },
  {
    n: [
      "flag-ax",
      "åland islands flag"
    ],
    u: "1f1e6-1f1fd",
    a: "2.0"
  },
  {
    n: [
      "flag-az",
      "azerbaijan flag"
    ],
    u: "1f1e6-1f1ff",
    a: "2.0"
  },
  {
    n: [
      "flag-ba",
      "bosnia & herzegovina flag"
    ],
    u: "1f1e7-1f1e6",
    a: "2.0"
  },
  {
    n: [
      "flag-bb",
      "barbados flag"
    ],
    u: "1f1e7-1f1e7",
    a: "2.0"
  },
  {
    n: [
      "flag-bd",
      "bangladesh flag"
    ],
    u: "1f1e7-1f1e9",
    a: "2.0"
  },
  {
    n: [
      "flag-be",
      "belgium flag"
    ],
    u: "1f1e7-1f1ea",
    a: "2.0"
  },
  {
    n: [
      "flag-bf",
      "burkina faso flag"
    ],
    u: "1f1e7-1f1eb",
    a: "2.0"
  },
  {
    n: [
      "flag-bg",
      "bulgaria flag"
    ],
    u: "1f1e7-1f1ec",
    a: "2.0"
  },
  {
    n: [
      "flag-bh",
      "bahrain flag"
    ],
    u: "1f1e7-1f1ed",
    a: "2.0"
  },
  {
    n: [
      "flag-bi",
      "burundi flag"
    ],
    u: "1f1e7-1f1ee",
    a: "2.0"
  },
  {
    n: [
      "flag-bj",
      "benin flag"
    ],
    u: "1f1e7-1f1ef",
    a: "2.0"
  },
  {
    n: [
      "flag-bl",
      "st. barthélemy flag"
    ],
    u: "1f1e7-1f1f1",
    a: "2.0"
  },
  {
    n: [
      "flag-bm",
      "bermuda flag"
    ],
    u: "1f1e7-1f1f2",
    a: "2.0"
  },
  {
    n: [
      "flag-bn",
      "brunei flag"
    ],
    u: "1f1e7-1f1f3",
    a: "2.0"
  },
  {
    n: [
      "flag-bo",
      "bolivia flag"
    ],
    u: "1f1e7-1f1f4",
    a: "2.0"
  },
  {
    n: [
      "flag-bq",
      "caribbean netherlands flag"
    ],
    u: "1f1e7-1f1f6",
    a: "2.0"
  },
  {
    n: [
      "flag-br",
      "brazil flag"
    ],
    u: "1f1e7-1f1f7",
    a: "2.0"
  },
  {
    n: [
      "flag-bs",
      "bahamas flag"
    ],
    u: "1f1e7-1f1f8",
    a: "2.0"
  },
  {
    n: [
      "flag-bt",
      "bhutan flag"
    ],
    u: "1f1e7-1f1f9",
    a: "2.0"
  },
  {
    n: [
      "flag-bv",
      "bouvet island flag"
    ],
    u: "1f1e7-1f1fb",
    a: "2.0"
  },
  {
    n: [
      "flag-bw",
      "botswana flag"
    ],
    u: "1f1e7-1f1fc",
    a: "2.0"
  },
  {
    n: [
      "flag-by",
      "belarus flag"
    ],
    u: "1f1e7-1f1fe",
    a: "2.0"
  },
  {
    n: [
      "flag-bz",
      "belize flag"
    ],
    u: "1f1e7-1f1ff",
    a: "2.0"
  },
  {
    n: [
      "flag-ca",
      "canada flag"
    ],
    u: "1f1e8-1f1e6",
    a: "2.0"
  },
  {
    n: [
      "flag-cc",
      "cocos (keeling) islands flag"
    ],
    u: "1f1e8-1f1e8",
    a: "2.0"
  },
  {
    n: [
      "flag-cd",
      "congo - kinshasa flag"
    ],
    u: "1f1e8-1f1e9",
    a: "2.0"
  },
  {
    n: [
      "flag-cf",
      "central african republic flag"
    ],
    u: "1f1e8-1f1eb",
    a: "2.0"
  },
  {
    n: [
      "flag-cg",
      "congo - brazzaville flag"
    ],
    u: "1f1e8-1f1ec",
    a: "2.0"
  },
  {
    n: [
      "flag-ch",
      "switzerland flag"
    ],
    u: "1f1e8-1f1ed",
    a: "2.0"
  },
  {
    n: [
      "flag-ci",
      "côte d’ivoire flag"
    ],
    u: "1f1e8-1f1ee",
    a: "2.0"
  },
  {
    n: [
      "flag-ck",
      "cook islands flag"
    ],
    u: "1f1e8-1f1f0",
    a: "2.0"
  },
  {
    n: [
      "flag-cl",
      "chile flag"
    ],
    u: "1f1e8-1f1f1",
    a: "2.0"
  },
  {
    n: [
      "flag-cm",
      "cameroon flag"
    ],
    u: "1f1e8-1f1f2",
    a: "2.0"
  },
  {
    n: [
      "cn",
      "flag-cn",
      "china flag"
    ],
    u: "1f1e8-1f1f3",
    a: "0.6"
  },
  {
    n: [
      "flag-co",
      "colombia flag"
    ],
    u: "1f1e8-1f1f4",
    a: "2.0"
  },
  {
    n: [
      "flag-cp",
      "clipperton island flag"
    ],
    u: "1f1e8-1f1f5",
    a: "2.0"
  },
  {
    n: [
      "flag-cr",
      "costa rica flag"
    ],
    u: "1f1e8-1f1f7",
    a: "2.0"
  },
  {
    n: [
      "flag-cu",
      "cuba flag"
    ],
    u: "1f1e8-1f1fa",
    a: "2.0"
  },
  {
    n: [
      "flag-cv",
      "cape verde flag"
    ],
    u: "1f1e8-1f1fb",
    a: "2.0"
  },
  {
    n: [
      "flag-cw",
      "curaçao flag"
    ],
    u: "1f1e8-1f1fc",
    a: "2.0"
  },
  {
    n: [
      "flag-cx",
      "christmas island flag"
    ],
    u: "1f1e8-1f1fd",
    a: "2.0"
  },
  {
    n: [
      "flag-cy",
      "cyprus flag"
    ],
    u: "1f1e8-1f1fe",
    a: "2.0"
  },
  {
    n: [
      "flag-cz",
      "czechia flag"
    ],
    u: "1f1e8-1f1ff",
    a: "2.0"
  },
  {
    n: [
      "de",
      "flag-de",
      "germany flag"
    ],
    u: "1f1e9-1f1ea",
    a: "0.6"
  },
  {
    n: [
      "flag-dg",
      "diego garcia flag"
    ],
    u: "1f1e9-1f1ec",
    a: "2.0"
  },
  {
    n: [
      "flag-dj",
      "djibouti flag"
    ],
    u: "1f1e9-1f1ef",
    a: "2.0"
  },
  {
    n: [
      "flag-dk",
      "denmark flag"
    ],
    u: "1f1e9-1f1f0",
    a: "2.0"
  },
  {
    n: [
      "flag-dm",
      "dominica flag"
    ],
    u: "1f1e9-1f1f2",
    a: "2.0"
  },
  {
    n: [
      "flag-do",
      "dominican republic flag"
    ],
    u: "1f1e9-1f1f4",
    a: "2.0"
  },
  {
    n: [
      "flag-dz",
      "algeria flag"
    ],
    u: "1f1e9-1f1ff",
    a: "2.0"
  },
  {
    n: [
      "flag-ea",
      "ceuta & melilla flag"
    ],
    u: "1f1ea-1f1e6",
    a: "2.0"
  },
  {
    n: [
      "flag-ec",
      "ecuador flag"
    ],
    u: "1f1ea-1f1e8",
    a: "2.0"
  },
  {
    n: [
      "flag-ee",
      "estonia flag"
    ],
    u: "1f1ea-1f1ea",
    a: "2.0"
  },
  {
    n: [
      "flag-eg",
      "egypt flag"
    ],
    u: "1f1ea-1f1ec",
    a: "2.0"
  },
  {
    n: [
      "flag-eh",
      "western sahara flag"
    ],
    u: "1f1ea-1f1ed",
    a: "2.0"
  },
  {
    n: [
      "flag-er",
      "eritrea flag"
    ],
    u: "1f1ea-1f1f7",
    a: "2.0"
  },
  {
    n: [
      "es",
      "flag-es",
      "spain flag"
    ],
    u: "1f1ea-1f1f8",
    a: "0.6"
  },
  {
    n: [
      "flag-et",
      "ethiopia flag"
    ],
    u: "1f1ea-1f1f9",
    a: "2.0"
  },
  {
    n: [
      "flag-eu",
      "european union flag"
    ],
    u: "1f1ea-1f1fa",
    a: "2.0"
  },
  {
    n: [
      "flag-fi",
      "finland flag"
    ],
    u: "1f1eb-1f1ee",
    a: "2.0"
  },
  {
    n: [
      "flag-fj",
      "fiji flag"
    ],
    u: "1f1eb-1f1ef",
    a: "2.0"
  },
  {
    n: [
      "flag-fk",
      "falkland islands flag"
    ],
    u: "1f1eb-1f1f0",
    a: "2.0"
  },
  {
    n: [
      "flag-fm",
      "micronesia flag"
    ],
    u: "1f1eb-1f1f2",
    a: "2.0"
  },
  {
    n: [
      "flag-fo",
      "faroe islands flag"
    ],
    u: "1f1eb-1f1f4",
    a: "2.0"
  },
  {
    n: [
      "fr",
      "flag-fr",
      "france flag"
    ],
    u: "1f1eb-1f1f7",
    a: "0.6"
  },
  {
    n: [
      "flag-ga",
      "gabon flag"
    ],
    u: "1f1ec-1f1e6",
    a: "2.0"
  },
  {
    n: [
      "gb",
      "uk",
      "flag-gb",
      "united kingdom flag"
    ],
    u: "1f1ec-1f1e7",
    a: "0.6"
  },
  {
    n: [
      "flag-gd",
      "grenada flag"
    ],
    u: "1f1ec-1f1e9",
    a: "2.0"
  },
  {
    n: [
      "flag-ge",
      "georgia flag"
    ],
    u: "1f1ec-1f1ea",
    a: "2.0"
  },
  {
    n: [
      "flag-gf",
      "french guiana flag"
    ],
    u: "1f1ec-1f1eb",
    a: "2.0"
  },
  {
    n: [
      "flag-gg",
      "guernsey flag"
    ],
    u: "1f1ec-1f1ec",
    a: "2.0"
  },
  {
    n: [
      "flag-gh",
      "ghana flag"
    ],
    u: "1f1ec-1f1ed",
    a: "2.0"
  },
  {
    n: [
      "flag-gi",
      "gibraltar flag"
    ],
    u: "1f1ec-1f1ee",
    a: "2.0"
  },
  {
    n: [
      "flag-gl",
      "greenland flag"
    ],
    u: "1f1ec-1f1f1",
    a: "2.0"
  },
  {
    n: [
      "flag-gm",
      "gambia flag"
    ],
    u: "1f1ec-1f1f2",
    a: "2.0"
  },
  {
    n: [
      "flag-gn",
      "guinea flag"
    ],
    u: "1f1ec-1f1f3",
    a: "2.0"
  },
  {
    n: [
      "flag-gp",
      "guadeloupe flag"
    ],
    u: "1f1ec-1f1f5",
    a: "2.0"
  },
  {
    n: [
      "flag-gq",
      "equatorial guinea flag"
    ],
    u: "1f1ec-1f1f6",
    a: "2.0"
  },
  {
    n: [
      "flag-gr",
      "greece flag"
    ],
    u: "1f1ec-1f1f7",
    a: "2.0"
  },
  {
    n: [
      "flag-gs",
      "south georgia & south sandwich islands flag"
    ],
    u: "1f1ec-1f1f8",
    a: "2.0"
  },
  {
    n: [
      "flag-gt",
      "guatemala flag"
    ],
    u: "1f1ec-1f1f9",
    a: "2.0"
  },
  {
    n: [
      "flag-gu",
      "guam flag"
    ],
    u: "1f1ec-1f1fa",
    a: "2.0"
  },
  {
    n: [
      "flag-gw",
      "guinea-bissau flag"
    ],
    u: "1f1ec-1f1fc",
    a: "2.0"
  },
  {
    n: [
      "flag-gy",
      "guyana flag"
    ],
    u: "1f1ec-1f1fe",
    a: "2.0"
  },
  {
    n: [
      "flag-hk",
      "hong kong sar china flag"
    ],
    u: "1f1ed-1f1f0",
    a: "2.0"
  },
  {
    n: [
      "flag-hm",
      "heard & mcdonald islands flag"
    ],
    u: "1f1ed-1f1f2",
    a: "2.0"
  },
  {
    n: [
      "flag-hn",
      "honduras flag"
    ],
    u: "1f1ed-1f1f3",
    a: "2.0"
  },
  {
    n: [
      "flag-hr",
      "croatia flag"
    ],
    u: "1f1ed-1f1f7",
    a: "2.0"
  },
  {
    n: [
      "flag-ht",
      "haiti flag"
    ],
    u: "1f1ed-1f1f9",
    a: "2.0"
  },
  {
    n: [
      "flag-hu",
      "hungary flag"
    ],
    u: "1f1ed-1f1fa",
    a: "2.0"
  },
  {
    n: [
      "flag-ic",
      "canary islands flag"
    ],
    u: "1f1ee-1f1e8",
    a: "2.0"
  },
  {
    n: [
      "flag-id",
      "indonesia flag"
    ],
    u: "1f1ee-1f1e9",
    a: "2.0"
  },
  {
    n: [
      "flag-ie",
      "ireland flag"
    ],
    u: "1f1ee-1f1ea",
    a: "2.0"
  },
  {
    n: [
      "flag-il",
      "israel flag"
    ],
    u: "1f1ee-1f1f1",
    a: "2.0"
  },
  {
    n: [
      "flag-im",
      "isle of man flag"
    ],
    u: "1f1ee-1f1f2",
    a: "2.0"
  },
  {
    n: [
      "flag-in",
      "india flag"
    ],
    u: "1f1ee-1f1f3",
    a: "2.0"
  },
  {
    n: [
      "flag-io",
      "british indian ocean territory flag"
    ],
    u: "1f1ee-1f1f4",
    a: "2.0"
  },
  {
    n: [
      "flag-iq",
      "iraq flag"
    ],
    u: "1f1ee-1f1f6",
    a: "2.0"
  },
  {
    n: [
      "flag-ir",
      "iran flag"
    ],
    u: "1f1ee-1f1f7",
    a: "2.0"
  },
  {
    n: [
      "flag-is",
      "iceland flag"
    ],
    u: "1f1ee-1f1f8",
    a: "2.0"
  },
  {
    n: [
      "it",
      "flag-it",
      "italy flag"
    ],
    u: "1f1ee-1f1f9",
    a: "0.6"
  },
  {
    n: [
      "flag-je",
      "jersey flag"
    ],
    u: "1f1ef-1f1ea",
    a: "2.0"
  },
  {
    n: [
      "flag-jm",
      "jamaica flag"
    ],
    u: "1f1ef-1f1f2",
    a: "2.0"
  },
  {
    n: [
      "flag-jo",
      "jordan flag"
    ],
    u: "1f1ef-1f1f4",
    a: "2.0"
  },
  {
    n: [
      "jp",
      "flag-jp",
      "japan flag"
    ],
    u: "1f1ef-1f1f5",
    a: "0.6"
  },
  {
    n: [
      "flag-ke",
      "kenya flag"
    ],
    u: "1f1f0-1f1ea",
    a: "2.0"
  },
  {
    n: [
      "flag-kg",
      "kyrgyzstan flag"
    ],
    u: "1f1f0-1f1ec",
    a: "2.0"
  },
  {
    n: [
      "flag-kh",
      "cambodia flag"
    ],
    u: "1f1f0-1f1ed",
    a: "2.0"
  },
  {
    n: [
      "flag-ki",
      "kiribati flag"
    ],
    u: "1f1f0-1f1ee",
    a: "2.0"
  },
  {
    n: [
      "flag-km",
      "comoros flag"
    ],
    u: "1f1f0-1f1f2",
    a: "2.0"
  },
  {
    n: [
      "flag-kn",
      "st. kitts & nevis flag"
    ],
    u: "1f1f0-1f1f3",
    a: "2.0"
  },
  {
    n: [
      "flag-kp",
      "north korea flag"
    ],
    u: "1f1f0-1f1f5",
    a: "2.0"
  },
  {
    n: [
      "kr",
      "flag-kr",
      "south korea flag"
    ],
    u: "1f1f0-1f1f7",
    a: "0.6"
  },
  {
    n: [
      "flag-kw",
      "kuwait flag"
    ],
    u: "1f1f0-1f1fc",
    a: "2.0"
  },
  {
    n: [
      "flag-ky",
      "cayman islands flag"
    ],
    u: "1f1f0-1f1fe",
    a: "2.0"
  },
  {
    n: [
      "flag-kz",
      "kazakhstan flag"
    ],
    u: "1f1f0-1f1ff",
    a: "2.0"
  },
  {
    n: [
      "flag-la",
      "laos flag"
    ],
    u: "1f1f1-1f1e6",
    a: "2.0"
  },
  {
    n: [
      "flag-lb",
      "lebanon flag"
    ],
    u: "1f1f1-1f1e7",
    a: "2.0"
  },
  {
    n: [
      "flag-lc",
      "st. lucia flag"
    ],
    u: "1f1f1-1f1e8",
    a: "2.0"
  },
  {
    n: [
      "flag-li",
      "liechtenstein flag"
    ],
    u: "1f1f1-1f1ee",
    a: "2.0"
  },
  {
    n: [
      "flag-lk",
      "sri lanka flag"
    ],
    u: "1f1f1-1f1f0",
    a: "2.0"
  },
  {
    n: [
      "flag-lr",
      "liberia flag"
    ],
    u: "1f1f1-1f1f7",
    a: "2.0"
  },
  {
    n: [
      "flag-ls",
      "lesotho flag"
    ],
    u: "1f1f1-1f1f8",
    a: "2.0"
  },
  {
    n: [
      "flag-lt",
      "lithuania flag"
    ],
    u: "1f1f1-1f1f9",
    a: "2.0"
  },
  {
    n: [
      "flag-lu",
      "luxembourg flag"
    ],
    u: "1f1f1-1f1fa",
    a: "2.0"
  },
  {
    n: [
      "flag-lv",
      "latvia flag"
    ],
    u: "1f1f1-1f1fb",
    a: "2.0"
  },
  {
    n: [
      "flag-ly",
      "libya flag"
    ],
    u: "1f1f1-1f1fe",
    a: "2.0"
  },
  {
    n: [
      "flag-ma",
      "morocco flag"
    ],
    u: "1f1f2-1f1e6",
    a: "2.0"
  },
  {
    n: [
      "flag-mc",
      "monaco flag"
    ],
    u: "1f1f2-1f1e8",
    a: "2.0"
  },
  {
    n: [
      "flag-md",
      "moldova flag"
    ],
    u: "1f1f2-1f1e9",
    a: "2.0"
  },
  {
    n: [
      "flag-me",
      "montenegro flag"
    ],
    u: "1f1f2-1f1ea",
    a: "2.0"
  },
  {
    n: [
      "flag-mf",
      "st. martin flag"
    ],
    u: "1f1f2-1f1eb",
    a: "2.0"
  },
  {
    n: [
      "flag-mg",
      "madagascar flag"
    ],
    u: "1f1f2-1f1ec",
    a: "2.0"
  },
  {
    n: [
      "flag-mh",
      "marshall islands flag"
    ],
    u: "1f1f2-1f1ed",
    a: "2.0"
  },
  {
    n: [
      "flag-mk",
      "north macedonia flag"
    ],
    u: "1f1f2-1f1f0",
    a: "2.0"
  },
  {
    n: [
      "flag-ml",
      "mali flag"
    ],
    u: "1f1f2-1f1f1",
    a: "2.0"
  },
  {
    n: [
      "flag-mm",
      "myanmar (burma) flag"
    ],
    u: "1f1f2-1f1f2",
    a: "2.0"
  },
  {
    n: [
      "flag-mn",
      "mongolia flag"
    ],
    u: "1f1f2-1f1f3",
    a: "2.0"
  },
  {
    n: [
      "flag-mo",
      "macao sar china flag"
    ],
    u: "1f1f2-1f1f4",
    a: "2.0"
  },
  {
    n: [
      "flag-mp",
      "northern mariana islands flag"
    ],
    u: "1f1f2-1f1f5",
    a: "2.0"
  },
  {
    n: [
      "flag-mq",
      "martinique flag"
    ],
    u: "1f1f2-1f1f6",
    a: "2.0"
  },
  {
    n: [
      "flag-mr",
      "mauritania flag"
    ],
    u: "1f1f2-1f1f7",
    a: "2.0"
  },
  {
    n: [
      "flag-ms",
      "montserrat flag"
    ],
    u: "1f1f2-1f1f8",
    a: "2.0"
  },
  {
    n: [
      "flag-mt",
      "malta flag"
    ],
    u: "1f1f2-1f1f9",
    a: "2.0"
  },
  {
    n: [
      "flag-mu",
      "mauritius flag"
    ],
    u: "1f1f2-1f1fa",
    a: "2.0"
  },
  {
    n: [
      "flag-mv",
      "maldives flag"
    ],
    u: "1f1f2-1f1fb",
    a: "2.0"
  },
  {
    n: [
      "flag-mw",
      "malawi flag"
    ],
    u: "1f1f2-1f1fc",
    a: "2.0"
  },
  {
    n: [
      "flag-mx",
      "mexico flag"
    ],
    u: "1f1f2-1f1fd",
    a: "2.0"
  },
  {
    n: [
      "flag-my",
      "malaysia flag"
    ],
    u: "1f1f2-1f1fe",
    a: "2.0"
  },
  {
    n: [
      "flag-mz",
      "mozambique flag"
    ],
    u: "1f1f2-1f1ff",
    a: "2.0"
  },
  {
    n: [
      "flag-na",
      "namibia flag"
    ],
    u: "1f1f3-1f1e6",
    a: "2.0"
  },
  {
    n: [
      "flag-nc",
      "new caledonia flag"
    ],
    u: "1f1f3-1f1e8",
    a: "2.0"
  },
  {
    n: [
      "flag-ne",
      "niger flag"
    ],
    u: "1f1f3-1f1ea",
    a: "2.0"
  },
  {
    n: [
      "flag-nf",
      "norfolk island flag"
    ],
    u: "1f1f3-1f1eb",
    a: "2.0"
  },
  {
    n: [
      "flag-ng",
      "nigeria flag"
    ],
    u: "1f1f3-1f1ec",
    a: "2.0"
  },
  {
    n: [
      "flag-ni",
      "nicaragua flag"
    ],
    u: "1f1f3-1f1ee",
    a: "2.0"
  },
  {
    n: [
      "flag-nl",
      "netherlands flag"
    ],
    u: "1f1f3-1f1f1",
    a: "2.0"
  },
  {
    n: [
      "flag-no",
      "norway flag"
    ],
    u: "1f1f3-1f1f4",
    a: "2.0"
  },
  {
    n: [
      "flag-np",
      "nepal flag"
    ],
    u: "1f1f3-1f1f5",
    a: "2.0"
  },
  {
    n: [
      "flag-nr",
      "nauru flag"
    ],
    u: "1f1f3-1f1f7",
    a: "2.0"
  },
  {
    n: [
      "flag-nu",
      "niue flag"
    ],
    u: "1f1f3-1f1fa",
    a: "2.0"
  },
  {
    n: [
      "flag-nz",
      "new zealand flag"
    ],
    u: "1f1f3-1f1ff",
    a: "2.0"
  },
  {
    n: [
      "flag-om",
      "oman flag"
    ],
    u: "1f1f4-1f1f2",
    a: "2.0"
  },
  {
    n: [
      "flag-pa",
      "panama flag"
    ],
    u: "1f1f5-1f1e6",
    a: "2.0"
  },
  {
    n: [
      "flag-pe",
      "peru flag"
    ],
    u: "1f1f5-1f1ea",
    a: "2.0"
  },
  {
    n: [
      "flag-pf",
      "french polynesia flag"
    ],
    u: "1f1f5-1f1eb",
    a: "2.0"
  },
  {
    n: [
      "flag-pg",
      "papua new guinea flag"
    ],
    u: "1f1f5-1f1ec",
    a: "2.0"
  },
  {
    n: [
      "flag-ph",
      "philippines flag"
    ],
    u: "1f1f5-1f1ed",
    a: "2.0"
  },
  {
    n: [
      "flag-pk",
      "pakistan flag"
    ],
    u: "1f1f5-1f1f0",
    a: "2.0"
  },
  {
    n: [
      "flag-pl",
      "poland flag"
    ],
    u: "1f1f5-1f1f1",
    a: "2.0"
  },
  {
    n: [
      "flag-pm",
      "st. pierre & miquelon flag"
    ],
    u: "1f1f5-1f1f2",
    a: "2.0"
  },
  {
    n: [
      "flag-pn",
      "pitcairn islands flag"
    ],
    u: "1f1f5-1f1f3",
    a: "2.0"
  },
  {
    n: [
      "flag-pr",
      "puerto rico flag"
    ],
    u: "1f1f5-1f1f7",
    a: "2.0"
  },
  {
    n: [
      "flag-ps",
      "palestinian territories flag"
    ],
    u: "1f1f5-1f1f8",
    a: "2.0"
  },
  {
    n: [
      "flag-pt",
      "portugal flag"
    ],
    u: "1f1f5-1f1f9",
    a: "2.0"
  },
  {
    n: [
      "flag-pw",
      "palau flag"
    ],
    u: "1f1f5-1f1fc",
    a: "2.0"
  },
  {
    n: [
      "flag-py",
      "paraguay flag"
    ],
    u: "1f1f5-1f1fe",
    a: "2.0"
  },
  {
    n: [
      "flag-qa",
      "qatar flag"
    ],
    u: "1f1f6-1f1e6",
    a: "2.0"
  },
  {
    n: [
      "flag-re",
      "réunion flag"
    ],
    u: "1f1f7-1f1ea",
    a: "2.0"
  },
  {
    n: [
      "flag-ro",
      "romania flag"
    ],
    u: "1f1f7-1f1f4",
    a: "2.0"
  },
  {
    n: [
      "flag-rs",
      "serbia flag"
    ],
    u: "1f1f7-1f1f8",
    a: "2.0"
  },
  {
    n: [
      "ru",
      "flag-ru",
      "russia flag"
    ],
    u: "1f1f7-1f1fa",
    a: "0.6"
  },
  {
    n: [
      "flag-rw",
      "rwanda flag"
    ],
    u: "1f1f7-1f1fc",
    a: "2.0"
  },
  {
    n: [
      "flag-sa",
      "saudi arabia flag"
    ],
    u: "1f1f8-1f1e6",
    a: "2.0"
  },
  {
    n: [
      "flag-sb",
      "solomon islands flag"
    ],
    u: "1f1f8-1f1e7",
    a: "2.0"
  },
  {
    n: [
      "flag-sc",
      "seychelles flag"
    ],
    u: "1f1f8-1f1e8",
    a: "2.0"
  },
  {
    n: [
      "flag-sd",
      "sudan flag"
    ],
    u: "1f1f8-1f1e9",
    a: "2.0"
  },
  {
    n: [
      "flag-se",
      "sweden flag"
    ],
    u: "1f1f8-1f1ea",
    a: "2.0"
  },
  {
    n: [
      "flag-sg",
      "singapore flag"
    ],
    u: "1f1f8-1f1ec",
    a: "2.0"
  },
  {
    n: [
      "flag-sh",
      "st. helena flag"
    ],
    u: "1f1f8-1f1ed",
    a: "2.0"
  },
  {
    n: [
      "flag-si",
      "slovenia flag"
    ],
    u: "1f1f8-1f1ee",
    a: "2.0"
  },
  {
    n: [
      "flag-sj",
      "svalbard & jan mayen flag"
    ],
    u: "1f1f8-1f1ef",
    a: "2.0"
  },
  {
    n: [
      "flag-sk",
      "slovakia flag"
    ],
    u: "1f1f8-1f1f0",
    a: "2.0"
  },
  {
    n: [
      "flag-sl",
      "sierra leone flag"
    ],
    u: "1f1f8-1f1f1",
    a: "2.0"
  },
  {
    n: [
      "flag-sm",
      "san marino flag"
    ],
    u: "1f1f8-1f1f2",
    a: "2.0"
  },
  {
    n: [
      "flag-sn",
      "senegal flag"
    ],
    u: "1f1f8-1f1f3",
    a: "2.0"
  },
  {
    n: [
      "flag-so",
      "somalia flag"
    ],
    u: "1f1f8-1f1f4",
    a: "2.0"
  },
  {
    n: [
      "flag-sr",
      "suriname flag"
    ],
    u: "1f1f8-1f1f7",
    a: "2.0"
  },
  {
    n: [
      "flag-ss",
      "south sudan flag"
    ],
    u: "1f1f8-1f1f8",
    a: "2.0"
  },
  {
    n: [
      "flag-st",
      "são tomé & príncipe flag"
    ],
    u: "1f1f8-1f1f9",
    a: "2.0"
  },
  {
    n: [
      "flag-sv",
      "el salvador flag"
    ],
    u: "1f1f8-1f1fb",
    a: "2.0"
  },
  {
    n: [
      "flag-sx",
      "sint maarten flag"
    ],
    u: "1f1f8-1f1fd",
    a: "2.0"
  },
  {
    n: [
      "flag-sy",
      "syria flag"
    ],
    u: "1f1f8-1f1fe",
    a: "2.0"
  },
  {
    n: [
      "flag-sz",
      "eswatini flag"
    ],
    u: "1f1f8-1f1ff",
    a: "2.0"
  },
  {
    n: [
      "flag-ta",
      "tristan da cunha flag"
    ],
    u: "1f1f9-1f1e6",
    a: "2.0"
  },
  {
    n: [
      "flag-tc",
      "turks & caicos islands flag"
    ],
    u: "1f1f9-1f1e8",
    a: "2.0"
  },
  {
    n: [
      "flag-td",
      "chad flag"
    ],
    u: "1f1f9-1f1e9",
    a: "2.0"
  },
  {
    n: [
      "flag-tf",
      "french southern territories flag"
    ],
    u: "1f1f9-1f1eb",
    a: "2.0"
  },
  {
    n: [
      "flag-tg",
      "togo flag"
    ],
    u: "1f1f9-1f1ec",
    a: "2.0"
  },
  {
    n: [
      "flag-th",
      "thailand flag"
    ],
    u: "1f1f9-1f1ed",
    a: "2.0"
  },
  {
    n: [
      "flag-tj",
      "tajikistan flag"
    ],
    u: "1f1f9-1f1ef",
    a: "2.0"
  },
  {
    n: [
      "flag-tk",
      "tokelau flag"
    ],
    u: "1f1f9-1f1f0",
    a: "2.0"
  },
  {
    n: [
      "flag-tl",
      "timor-leste flag"
    ],
    u: "1f1f9-1f1f1",
    a: "2.0"
  },
  {
    n: [
      "flag-tm",
      "turkmenistan flag"
    ],
    u: "1f1f9-1f1f2",
    a: "2.0"
  },
  {
    n: [
      "flag-tn",
      "tunisia flag"
    ],
    u: "1f1f9-1f1f3",
    a: "2.0"
  },
  {
    n: [
      "flag-to",
      "tonga flag"
    ],
    u: "1f1f9-1f1f4",
    a: "2.0"
  },
  {
    n: [
      "flag-tr",
      "turkey flag"
    ],
    u: "1f1f9-1f1f7",
    a: "2.0"
  },
  {
    n: [
      "flag-tt",
      "trinidad & tobago flag"
    ],
    u: "1f1f9-1f1f9",
    a: "2.0"
  },
  {
    n: [
      "flag-tv",
      "tuvalu flag"
    ],
    u: "1f1f9-1f1fb",
    a: "2.0"
  },
  {
    n: [
      "flag-tw",
      "taiwan flag"
    ],
    u: "1f1f9-1f1fc",
    a: "2.0"
  },
  {
    n: [
      "flag-tz",
      "tanzania flag"
    ],
    u: "1f1f9-1f1ff",
    a: "2.0"
  },
  {
    n: [
      "flag-ua",
      "ukraine flag"
    ],
    u: "1f1fa-1f1e6",
    a: "2.0"
  },
  {
    n: [
      "flag-ug",
      "uganda flag"
    ],
    u: "1f1fa-1f1ec",
    a: "2.0"
  },
  {
    n: [
      "flag-um",
      "u.s. outlying islands flag"
    ],
    u: "1f1fa-1f1f2",
    a: "2.0"
  },
  {
    n: [
      "flag-un",
      "united nations flag"
    ],
    u: "1f1fa-1f1f3",
    a: "4.0"
  },
  {
    n: [
      "us",
      "flag-us",
      "united states flag"
    ],
    u: "1f1fa-1f1f8",
    a: "0.6"
  },
  {
    n: [
      "flag-uy",
      "uruguay flag"
    ],
    u: "1f1fa-1f1fe",
    a: "2.0"
  },
  {
    n: [
      "flag-uz",
      "uzbekistan flag"
    ],
    u: "1f1fa-1f1ff",
    a: "2.0"
  },
  {
    n: [
      "flag-va",
      "vatican city flag"
    ],
    u: "1f1fb-1f1e6",
    a: "2.0"
  },
  {
    n: [
      "flag-vc",
      "st. vincent & grenadines flag"
    ],
    u: "1f1fb-1f1e8",
    a: "2.0"
  },
  {
    n: [
      "flag-ve",
      "venezuela flag"
    ],
    u: "1f1fb-1f1ea",
    a: "2.0"
  },
  {
    n: [
      "flag-vg",
      "british virgin islands flag"
    ],
    u: "1f1fb-1f1ec",
    a: "2.0"
  },
  {
    n: [
      "flag-vi",
      "u.s. virgin islands flag"
    ],
    u: "1f1fb-1f1ee",
    a: "2.0"
  },
  {
    n: [
      "flag-vn",
      "vietnam flag"
    ],
    u: "1f1fb-1f1f3",
    a: "2.0"
  },
  {
    n: [
      "flag-vu",
      "vanuatu flag"
    ],
    u: "1f1fb-1f1fa",
    a: "2.0"
  },
  {
    n: [
      "flag-wf",
      "wallis & futuna flag"
    ],
    u: "1f1fc-1f1eb",
    a: "2.0"
  },
  {
    n: [
      "flag-ws",
      "samoa flag"
    ],
    u: "1f1fc-1f1f8",
    a: "2.0"
  },
  {
    n: [
      "flag-xk",
      "kosovo flag"
    ],
    u: "1f1fd-1f1f0",
    a: "2.0"
  },
  {
    n: [
      "flag-ye",
      "yemen flag"
    ],
    u: "1f1fe-1f1ea",
    a: "2.0"
  },
  {
    n: [
      "flag-yt",
      "mayotte flag"
    ],
    u: "1f1fe-1f1f9",
    a: "2.0"
  },
  {
    n: [
      "flag-za",
      "south africa flag"
    ],
    u: "1f1ff-1f1e6",
    a: "2.0"
  },
  {
    n: [
      "flag-zm",
      "zambia flag"
    ],
    u: "1f1ff-1f1f2",
    a: "2.0"
  },
  {
    n: [
      "flag-zw",
      "zimbabwe flag"
    ],
    u: "1f1ff-1f1fc",
    a: "2.0"
  },
  {
    n: [
      "england flag",
      "flag-england"
    ],
    u: "1f3f4-e0067-e0062-e0065-e006e-e0067-e007f",
    a: "5.0"
  },
  {
    n: [
      "scotland flag",
      "flag-scotland"
    ],
    u: "1f3f4-e0067-e0062-e0073-e0063-e0074-e007f",
    a: "5.0"
  },
  {
    n: [
      "wales flag",
      "flag-wales"
    ],
    u: "1f3f4-e0067-e0062-e0077-e006c-e0073-e007f",
    a: "5.0"
  }
], Pf = {
  custom: ti,
  smileys_people: ui,
  animals_nature: ri,
  food_drink: oi,
  travel_places: di,
  activities: ci,
  objects: si,
  symbols: li,
  flags: Mi
}, re = [F.NEUTRAL, F.LIGHT, F.MEDIUM_LIGHT, F.MEDIUM, F.MEDIUM_DARK, F.DARK], gi = /* @__PURE__ */ Object.entries(F).reduce(function(f, e) {
  var a = e[0], n = e[1];
  return f[n] = a, f;
}, {}), Li = /* @__PURE__ */ re.reduce(function(f, e) {
  var a;
  return Object.assign(f, (a = {}, a[e] = e, a));
}, {}), Z;
(function(f) {
  f.name = "n", f.unified = "u", f.variations = "v", f.added_in = "a", f.imgUrl = "imgUrl";
})(Z || (Z = {}));
var zf = {};
setTimeout(function() {
  je.reduce(function(f, e) {
    return Hn(e), f;
  }, zf);
});
function Hn(f) {
  var e = Of(f).flat().join("").toLowerCase().replace(/[^a-zA-Z\d]/g, "").split("");
  e.forEach(function(a) {
    var n;
    zf[a] = (n = zf[a]) != null ? n : {}, zf[a][_(f)] = f;
  });
}
function Of(f) {
  var e;
  return (e = f[Z.name]) != null ? e : [];
}
function wi(f) {
  return parseFloat(f[Z.added_in]);
}
function Fe(f) {
  return f ? Of(f)[0] : "";
}
function ua(f) {
  var e = f.split("-"), a = e.splice(1, 1), n = a[0];
  return Li[n] ? e.join("-") : f;
}
function _(f, e) {
  var a, n = f[Z.unified];
  return !e || !pf(f) ? n : (a = ji(f, e)) != null ? a : n;
}
function bi(f) {
  var e;
  return (e = Pf == null ? void 0 : Pf[f]) != null ? e : [];
}
function Wn(f, e) {
  return "" + ii(e) + f + ".png";
}
function Gf(f) {
  var e;
  return (e = f[Z.variations]) != null ? e : [];
}
function pf(f) {
  return Gf(f).length > 0;
}
function ji(f, e) {
  return e ? Gf(f).find(function(a) {
    return a.includes(e);
  }) : _(f);
}
function mf(f) {
  if (f) {
    if (Lf[f])
      return Lf[f];
    var e = ua(f);
    return Lf[e];
  }
}
var je = /* @__PURE__ */ Object.values(Pf).flat();
function mi(f) {
  Pf[C.CUSTOM].length = 0, f.forEach(function(e) {
    var a = Ci(e);
    Pf[C.CUSTOM].push(a), !Lf[a[Z.unified]] && (je.push(a), Lf[a[Z.unified]] = a, Hn(a));
  });
}
function Ci(f) {
  var e;
  return e = {}, e[Z.name] = f.names.map(function(a) {
    return a.toLowerCase();
  }), e[Z.unified] = f.id.toLowerCase(), e[Z.added_in] = "0", e[Z.imgUrl] = f.imgUrl, e;
}
var Lf = {};
setTimeout(function() {
  je.reduce(function(f, e) {
    return f[_(e)] = e, pf(e) && Gf(e).forEach(function(a) {
      f[a] = e;
    }), f;
  }, Lf);
});
function yi(f) {
  var e = f.split("-"), a = e[1];
  return re.includes(a) ? a : null;
}
var pi = ["2640-fe0f", "2642-fe0f", "2695-fe0f"], oe = "Search", hi = "No results found", Fn = " found. Use up and down arrow keys to navigate.", vi = "1 result" + Fn, Ii = "%n results" + Fn;
function Za(f) {
  var e, a;
  f === void 0 && (f = {});
  var n = Vn(), i = Object.assign(n.previewConfig, (e = f.previewConfig) != null ? e : {}), t = Object.assign(n, f), u = q1(f.categories, {
    suggestionMode: t.suggestedEmojisMode
  });
  mi((a = t.customEmojis) != null ? a : []);
  var r = t.searchDisabled ? jf.PREVIEW : t.skinTonePickerLocation;
  return k({}, t, {
    categories: u,
    previewConfig: i,
    skinTonePickerLocation: r
  });
}
function Vn() {
  return {
    autoFocusSearch: !0,
    categories: Zn(),
    className: "",
    customEmojis: [],
    defaultSkinTone: F.NEUTRAL,
    emojiStyle: P.APPLE,
    emojiVersion: null,
    getEmojiUrl: Wn,
    height: 450,
    lazyLoadEmojis: !1,
    previewConfig: k({}, Ni),
    searchDisabled: !1,
    searchPlaceHolder: oe,
    searchPlaceholder: oe,
    skinTonePickerLocation: jf.SEARCH,
    skinTonesDisabled: !1,
    style: {},
    suggestedEmojisMode: Ef.FREQUENT,
    theme: _f.LIGHT,
    unicodeToHide: new Set(pi),
    width: 350,
    reactionsDefaultOpen: !1,
    reactions: K1,
    open: !0,
    allowExpandReactions: !0
  };
}
var Ni = {
  defaultEmoji: "1f60a",
  defaultCaption: "What's your mood?",
  showPreview: !0
}, ki = ["children"], Kn = /* @__PURE__ */ Me(/* @__PURE__ */ Vn());
function Di(f) {
  var e = f.children, a = Un(f, ki), n = Si(a);
  return l(Kn.Provider, {
    value: n
  }, e);
}
function Si(f) {
  var e, a = A(function() {
    return Za(f);
  }), n = a[0], i = a[1];
  return z(function() {
    On(n, f) || i(Za(f));
  }, [(e = f.customEmojis) == null ? void 0 : e.length, f.open, f.emojiVersion, f.reactionsDefaultOpen, f.searchPlaceHolder, f.searchPlaceholder, f.defaultSkinTone, f.skinTonesDisabled, f.autoFocusSearch, f.emojiStyle, f.theme, f.suggestedEmojisMode, f.lazyLoadEmojis, f.className, f.height, f.width, f.searchDisabled, f.skinTonePickerLocation, f.allowExpandReactions]), n;
}
function D() {
  return Q(Kn);
}
var Xn = /* @__PURE__ */ Tf.createContext({});
function $n() {
  var f = Tf.useContext(Xn);
  return f;
}
function Ti(f) {
  var e = Tf.useRef({
    onEmojiClick: f.onEmojiClick || Vf,
    onReactionClick: f.onReactionClick || f.onEmojiClick,
    onSkinToneChange: f.onSkinToneChange || Vf
  });
  return Tf.useEffect(function() {
    e.current.onEmojiClick = f.onEmojiClick || Vf, e.current.onReactionClick = f.onReactionClick || f.onEmojiClick;
  }, [f.onEmojiClick, f.onReactionClick]), Tf.useEffect(function() {
    e.current.onSkinToneChange = f.onSkinToneChange || Vf;
  }, [f.onSkinToneChange]), e;
}
function Vf() {
}
var Qf;
(function(f) {
  f.REACTIONS = "reactions", f.PICKER = "picker";
})(Qf || (Qf = {}));
function zi() {
  var f, e = D(), a = e.searchPlaceHolder, n = e.searchPlaceholder;
  return (f = [a, n].find(function(i) {
    return i !== oe;
  })) != null ? f : oe;
}
function xi() {
  var f = D(), e = f.defaultSkinTone;
  return e;
}
function qn() {
  var f = D(), e = f.allowExpandReactions;
  return e;
}
function f0() {
  var f = D(), e = f.skinTonesDisabled;
  return e;
}
function lf() {
  var f = D(), e = f.emojiStyle;
  return e;
}
function Ai() {
  var f = D(), e = f.autoFocusSearch;
  return e;
}
function e0() {
  var f = D(), e = f.categories;
  return e;
}
function Ei() {
  var f = D(), e = f.customEmojis;
  return e;
}
function _i() {
  var f = D(), e = f.open;
  return e;
}
function Pi(f) {
  var e, a = $n(), n = a.current, i = (e = f === Qf.REACTIONS ? n.onReactionClick : n.onEmojiClick) != null ? e : n.onEmojiClick;
  return i || function() {
  };
}
function Qi() {
  var f = $n(), e = f.current;
  return e.onSkinToneChange || function() {
  };
}
function a0() {
  var f = D(), e = f.previewConfig;
  return e;
}
function Yi() {
  var f = D(), e = f.theme;
  return e;
}
function Ji() {
  var f = D(), e = f.suggestedEmojisMode;
  return e;
}
function Ri() {
  var f = D(), e = f.lazyLoadEmojis;
  return e;
}
function Ui() {
  var f = D(), e = f.className;
  return e;
}
function Oi() {
  var f = D(), e = f.height, a = f.width, n = f.style;
  return k({
    height: Ba(e),
    width: Ba(a)
  }, n);
}
function Gi() {
  var f = D(), e = f.reactionsDefaultOpen;
  return e;
}
function Zi() {
  var f = D(), e = f.emojiVersion;
  return e;
}
function n0() {
  var f = D(), e = f.searchDisabled;
  return e;
}
function i0() {
  var f = D(), e = f.skinTonePickerLocation;
  return e;
}
function Bi() {
  var f = D(), e = f.unicodeToHide;
  return e;
}
function Hi() {
  var f = D(), e = f.reactions;
  return e;
}
function hf() {
  var f = D(), e = f.getEmojiUrl;
  return e;
}
function Ba(f) {
  return typeof f == "number" ? f + "px" : f;
}
function Wi(f) {
  var e = f > 0, a = f > 1;
  return e ? a ? Ii.replace("%n", f.toString()) : vi : hi;
}
function Ha(f, e) {
  e === void 0 && (e = 0);
  var a = A(f), n = a[0], i = a[1], t = x(null);
  function u(r) {
    return new Promise(function(d) {
      var c;
      t.current && clearTimeout(t.current), t.current = (c = window) == null ? void 0 : c.setTimeout(function() {
        i(r), d(r);
      }, e);
    });
  }
  return [n, u];
}
function Fi() {
  var f = Bi();
  return function(e) {
    return f.has(e);
  };
}
function t0() {
  var f = x({}), e = Zi();
  return $(function() {
    var a = parseFloat("" + e);
    return !e || Number.isNaN(a) ? f.current : je.reduce(function(n, i) {
      return Ki(i, a) && (n[_(i)] = !0), n;
    }, f.current);
  }, [e]);
}
function Vi() {
  var f = t0(), e = Fi();
  return function(n) {
    var i = ua(_(n));
    return !!(f[i] || e(i));
  };
}
function Ki(f, e) {
  return wi(f) > e;
}
function Xi(f) {
  z(function() {
    f(!0);
  }, [f]);
}
function $i(f) {
  var e = f.children, a = t0(), n = xi(), i = Gi(), t = x(zf), u = x(!1), r = x(!1), d = x(a), c = Ha(Date.now(), 200), s = Ha("", 100), o = A(!1), M = A(n), g = A(null), L = A(/* @__PURE__ */ new Set()), h = A(null), m = A(i), w = A(!1), b = w[0], S = w[1];
  return Xi(S), l(H.Provider, {
    value: {
      activeCategoryState: g,
      activeSkinTone: M,
      disallowClickRef: u,
      disallowMouseRef: r,
      disallowedEmojisRef: d,
      emojiVariationPickerState: h,
      emojisThatFailedToLoadState: L,
      filterRef: t,
      isPastInitialLoad: b,
      searchTerm: s,
      skinToneFanOpenState: o,
      suggestedUpdateState: c,
      reactionsModeState: m
    }
  }, e);
}
var H = /* @__PURE__ */ Me({
  activeCategoryState: [null, function() {
  }],
  activeSkinTone: [F.NEUTRAL, function() {
  }],
  disallowClickRef: {
    current: !1
  },
  disallowMouseRef: {
    current: !1
  },
  disallowedEmojisRef: {
    current: {}
  },
  emojiVariationPickerState: [null, function() {
  }],
  emojisThatFailedToLoadState: [/* @__PURE__ */ new Set(), function() {
  }],
  filterRef: {
    current: {}
  },
  isPastInitialLoad: !0,
  searchTerm: ["", function() {
    return new Promise(function() {
    });
  }],
  skinToneFanOpenState: [!1, function() {
  }],
  suggestedUpdateState: [/* @__PURE__ */ Date.now(), function() {
  }],
  reactionsModeState: [!1, function() {
  }]
});
function ra() {
  var f = Q(H), e = f.filterRef;
  return e;
}
function qi() {
  var f = Q(H), e = f.disallowClickRef;
  return e;
}
function oa() {
  var f = Q(H), e = f.disallowMouseRef;
  return e;
}
function me() {
  var f = Q(H), e = f.reactionsModeState;
  return e;
}
function Ce() {
  var f = Q(H), e = f.searchTerm;
  return e;
}
function da() {
  var f = Q(H), e = f.activeSkinTone;
  return e;
}
function u0() {
  var f = Q(H), e = f.emojisThatFailedToLoadState;
  return e;
}
function ft() {
  var f = Q(H), e = f.isPastInitialLoad;
  return e;
}
function vf() {
  var f = Q(H), e = f.emojiVariationPickerState;
  return e;
}
function Zf() {
  var f = Q(H), e = f.skinToneFanOpenState;
  return e;
}
function r0() {
  var f = Q(H), e = f.suggestedUpdateState, a = e[0], n = e[1];
  return [a, function() {
    n(Date.now());
  }];
}
function ye() {
  var f = Ce(), e = f[0];
  return !!e;
}
function R(f) {
  f && requestAnimationFrame(function() {
    f.focus();
  });
}
function o0(f) {
  if (f) {
    var e = f.previousElementSibling;
    R(e);
  }
}
function d0(f) {
  if (f) {
    var e = f.nextElementSibling;
    R(e);
  }
}
function c0(f) {
  if (f) {
    var e = f.firstElementChild;
    R(e);
  }
}
function Yf() {
  return document.activeElement;
}
function et(f) {
  var e = f.children, a = x(null), n = x(null), i = x(null), t = x(null), u = x(null), r = x(null), d = x(null), c = x(null);
  return l(s0.Provider, {
    value: {
      AnchoredEmojiRef: n,
      BodyRef: i,
      CategoryNavigationRef: r,
      PickerMainRef: a,
      SearchInputRef: t,
      SkinTonePickerRef: u,
      VariationPickerRef: d,
      ReactionsRef: c
    }
  }, e);
}
var s0 = /* @__PURE__ */ Me({
  AnchoredEmojiRef: /* @__PURE__ */ q(),
  BodyRef: /* @__PURE__ */ q(),
  CategoryNavigationRef: /* @__PURE__ */ q(),
  PickerMainRef: /* @__PURE__ */ q(),
  SearchInputRef: /* @__PURE__ */ q(),
  SkinTonePickerRef: /* @__PURE__ */ q(),
  VariationPickerRef: /* @__PURE__ */ q(),
  ReactionsRef: /* @__PURE__ */ q()
});
function tf() {
  return Q(s0);
}
function Bf() {
  return tf().PickerMainRef;
}
function pe() {
  return tf().AnchoredEmojiRef;
}
function l0() {
  var f = pe();
  return function(e) {
    e === null && f.current !== null && R(f.current), f.current = e;
  };
}
function W() {
  return tf().BodyRef;
}
function at() {
  return tf().ReactionsRef;
}
function uf() {
  return tf().SearchInputRef;
}
function ca() {
  return tf().SkinTonePickerRef;
}
function sa() {
  return tf().CategoryNavigationRef;
}
function nt() {
  return tf().VariationPickerRef;
}
function M0(f, e) {
  e === void 0 && (e = 0);
  var a = D0(f);
  a && requestAnimationFrame(function() {
    a.scrollTop = e;
  });
}
function it(f, e) {
  var a = D0(f);
  a && requestAnimationFrame(function() {
    a.scrollTop = a.scrollTop + e;
  });
}
function tt() {
  var f = W();
  return K(function(e) {
    requestAnimationFrame(function() {
      f.current && (f.current.scrollTop = e);
    });
  }, [f]);
}
function he(f) {
  if (!(!f || !Vt(f)) && !f.closest(E(y.variationPicker))) {
    var e = T0(f), a = S0(f);
    it(e, -(ba(rf(f)) - a));
  }
}
function ve(f) {
  var e = ya(f);
  R(e), he(e);
}
function ut(f) {
  var e = ya(f);
  R(e), e == null || e.click();
}
function rt(f) {
  R(E0(f));
}
function ot(f) {
  if (f) {
    var e = _0(f);
    if (!e)
      return ve(Ne(f));
    R(e), he(e);
  }
}
function dt(f) {
  if (f) {
    var e = Ca(f);
    if (!e)
      return rt(Ie(f));
    R(e), he(e);
  }
}
function ct(f, e) {
  if (f) {
    var a = lt(f);
    if (!a)
      return e();
    R(a), he(a);
  }
}
function st(f) {
  if (f) {
    var e = Mt(f);
    return R(e);
  }
}
function lt(f) {
  if (!f)
    return null;
  var e = P0(f), a = rf(e), n = v0(e, f), i = I0(e, f), t = h0(e, f);
  if (i === 0) {
    var u = Ie(a);
    return u ? N0(
      Cf(u),
      -1,
      // last row
      t,
      n
    ) : null;
  }
  return Gt(Cf(e), i, t, n);
}
function Mt(f) {
  if (!f)
    return null;
  var e = P0(f), a = rf(e), n = v0(e, f), i = I0(e, f), t = h0(e, f);
  if (!Rt(e, f)) {
    var u = Ne(a);
    return u ? N0(Cf(u), 0, t, n) : null;
  }
  var r = Ot(Cf(e), i, t, n);
  return r;
}
function Mf() {
  var f = vf(), e = f[0], a = f[1], n = Zf(), i = n[0], t = n[1], u = K(function() {
    e && a(null), i && t(!1);
  }, [e, i, a, t]);
  return u;
}
function g0() {
  var f = vf(), e = f[0], a = Zf(), n = a[0];
  return function() {
    return !!e || n;
  };
}
function gt() {
  var f = oa();
  return function() {
    f.current = !0;
  };
}
function L0() {
  var f = oa();
  return function() {
    f.current = !1;
  };
}
function w0() {
  var f = oa();
  return function() {
    return f.current;
  };
}
function Lt() {
  var f = W(), e = L0(), a = w0();
  z(function() {
    var n = f.current;
    n == null || n.addEventListener("mousemove", i, {
      passive: !0
    });
    function i() {
      a() && e();
    }
    return function() {
      n == null || n.removeEventListener("mousemove", i);
    };
  }, [f, e, a]);
}
function gf() {
  var f = uf();
  return K(function() {
    R(f.current);
  }, [f]);
}
function wt() {
  var f = ca();
  return K(function() {
    f.current && c0(f.current);
  }, [f]);
}
function b0() {
  var f = sa();
  return K(function() {
    f.current && c0(f.current);
  }, [f]);
}
function bt() {
  var f = ra();
  return function e(a) {
    if (typeof a == "function")
      return e(a(f.current));
    f.current = a;
  };
}
function j0() {
  var f = la(), e = uf(), a = gf();
  return function() {
    e.current && (e.current.value = ""), f(""), a();
  };
}
function jt() {
  var f = uf(), e = la();
  return function(n) {
    f.current ? (f.current.value = "" + f.current.value + n, e(Ve(f.current.value))) : e(Ve(n));
  };
}
function mt() {
  var f = uf(), e = ra(), a = bt(), n = la(), i = Ce(), t = i[0], u = It(e.current, t);
  return {
    onChange: r,
    searchTerm: t,
    SearchInputRef: f,
    statusSearchResults: u
  };
  function r(d) {
    var c = e.current, s = d.toLowerCase();
    if (c != null && c[s] || s.length <= 1)
      return n(s);
    var o = vt(s, c);
    if (!o)
      return n(s);
    a(function(M) {
      var g;
      return Object.assign(M, (g = {}, g[s] = Ct(o, s), g));
    }), n(s);
  }
}
function la() {
  var f = Ce(), e = f[1], a = Bf();
  return function(i) {
    requestAnimationFrame(function() {
      e(i && (i == null ? void 0 : i.toLowerCase())).then(function() {
        M0(a.current, 0);
      });
    });
  };
}
function Ct(f, e) {
  var a = {};
  for (var n in f) {
    var i = f[n];
    yt(i, e) && (a[n] = i);
  }
  return a;
}
function yt(f, e) {
  return Of(f).some(function(a) {
    return a.includes(e);
  });
}
function pt() {
  var f = ra(), e = f.current, a = Ce(), n = a[0];
  return function(i) {
    return ht(i, e, n);
  };
}
function ht(f, e, a) {
  var n;
  return !e || !a ? !1 : !((n = e[a]) != null && n[f]);
}
function vt(f, e) {
  if (!e)
    return null;
  if (e[f])
    return e[f];
  var a = Object.keys(e).sort(function(n, i) {
    return i.length - n.length;
  }).find(function(n) {
    return f.includes(n);
  });
  return a ? e[a] : null;
}
function Ve(f) {
  return !f || typeof f != "string" ? "" : f.trim().toLowerCase();
}
function It(f, e) {
  var a;
  if (!(f != null && f[e]))
    return "";
  var n = ((a = Object.entries(f == null ? void 0 : f[e])) == null ? void 0 : a.length) || 0;
  return Wi(n);
}
function m0() {
  var f = l0(), e = vf(), a = e[1];
  return function(i) {
    var t = wa(i), u = t[0];
    u && (f(i), a(u));
  };
}
function Ma() {
  var f = i0();
  return f === jf.SEARCH;
}
function C0() {
  var f = i0();
  return f === jf.PREVIEW;
}
var T;
(function(f) {
  f.ArrowDown = "ArrowDown", f.ArrowUp = "ArrowUp", f.ArrowLeft = "ArrowLeft", f.ArrowRight = "ArrowRight", f.Escape = "Escape", f.Enter = "Enter", f.Space = " ";
})(T || (T = {}));
function Nt() {
  kt(), Dt(), St(), Tt(), zt();
}
function kt() {
  var f = Bf(), e = j0(), a = tt(), n = uf(), i = gf(), t = g0(), u = gt(), r = Mf(), d = $(function() {
    return function(s) {
      var o = s.key;
      switch (u(), o) {
        case T.Escape:
          if (s.preventDefault(), t()) {
            r();
            return;
          }
          e(), a(0), i();
          break;
      }
    };
  }, [a, e, r, i, t, u]);
  z(function() {
    var c = f.current;
    if (c)
      return c.addEventListener("keydown", d), function() {
        c.removeEventListener("keydown", d);
      };
  }, [f, n, a, d]);
}
function Dt() {
  var f = wt(), e = Bf(), a = W(), n = uf(), i = Zf(), t = i[1], u = y0(), r = Ma(), d = $(function() {
    return function(s) {
      var o = s.key;
      switch (o) {
        case T.ArrowRight:
          if (!r)
            return;
          s.preventDefault(), t(!0), f();
          break;
        case T.ArrowDown:
          s.preventDefault(), u();
          break;
        case T.Enter:
          s.preventDefault(), ut(a.current);
          break;
      }
    };
  }, [f, u, t, a, r]);
  z(function() {
    var c = n.current;
    if (c)
      return c.addEventListener("keydown", d), function() {
        c.removeEventListener("keydown", d);
      };
  }, [e, n, d]);
}
function St() {
  var f = ca(), e = gf(), a = uf(), n = y0(), i = Zf(), t = i[0], u = i[1], r = C0(), d = Ma(), c = ga(), s = $(function() {
    return (
      // eslint-disable-next-line complexity
      function(M) {
        var g = M.key;
        if (d)
          switch (g) {
            case T.ArrowLeft:
              if (M.preventDefault(), !t)
                return e();
              Wa(e);
              break;
            case T.ArrowRight:
              if (M.preventDefault(), !t)
                return e();
              Fa();
              break;
            case T.ArrowDown:
              M.preventDefault(), t && u(!1), n();
              break;
            default:
              c(M);
              break;
          }
        if (r)
          switch (g) {
            case T.ArrowUp:
              if (M.preventDefault(), !t)
                return e();
              Wa(e);
              break;
            case T.ArrowDown:
              if (M.preventDefault(), !t)
                return e();
              Fa();
              break;
            default:
              c(M);
              break;
          }
      }
    );
  }, [t, e, u, n, c, r, d]);
  z(function() {
    var o = f.current;
    if (o)
      return o.addEventListener("keydown", s), function() {
        o.removeEventListener("keydown", s);
      };
  }, [f, a, t, s]);
}
function Tt() {
  var f = gf(), e = sa(), a = W(), n = ga(), i = $(function() {
    return function(u) {
      var r = u.key;
      switch (r) {
        case T.ArrowUp:
          u.preventDefault(), f();
          break;
        case T.ArrowRight:
          u.preventDefault(), d0(Yf());
          break;
        case T.ArrowLeft:
          u.preventDefault(), o0(Yf());
          break;
        case T.ArrowDown:
          u.preventDefault(), ve(a.current);
          break;
        default:
          n(u);
          break;
      }
    };
  }, [a, f, n]);
  z(function() {
    var t = e.current;
    if (t)
      return t.addEventListener("keydown", i), function() {
        t.removeEventListener("keydown", i);
      };
  }, [e, a, i]);
}
function zt() {
  var f = W(), e = xt(), a = m0(), n = g0(), i = Mf(), t = ga(), u = $(function() {
    return (
      // eslint-disable-next-line complexity
      function(d) {
        var c = d.key, s = X(Yf());
        switch (c) {
          case T.ArrowRight:
            d.preventDefault(), ot(s);
            break;
          case T.ArrowLeft:
            d.preventDefault(), dt(s);
            break;
          case T.ArrowDown:
            if (d.preventDefault(), n()) {
              i();
              break;
            }
            st(s);
            break;
          case T.ArrowUp:
            if (d.preventDefault(), n()) {
              i();
              break;
            }
            ct(s, e);
            break;
          case T.Space:
            d.preventDefault(), a(d.target);
            break;
          default:
            t(d);
            break;
        }
      }
    );
  }, [e, t, a, n, i]);
  z(function() {
    var r = f.current;
    if (r)
      return r.addEventListener("keydown", u), function() {
        r.removeEventListener("keydown", u);
      };
  }, [f, u]);
}
function y0() {
  var f = b0(), e = ye(), a = W();
  return K(function() {
    return e ? ve(a.current) : f();
  }, [a, f, e]);
}
function xt() {
  var f = gf(), e = b0(), a = ye();
  return K(function() {
    return a ? f() : e();
  }, [f, a, e]);
}
function Wa(f) {
  var e = Yf();
  e && (Bt(e) || f(), d0(e));
}
function Fa() {
  var f = Yf();
  f && o0(f);
}
function ga() {
  var f = jt(), e = gf(), a = n0(), n = Mf();
  return function(t) {
    var u = t.key;
    At(t) || a || u.match(/(^[a-zA-Z0-9]$){1}/) && (t.preventDefault(), n(), e(), f(u));
  };
}
function At(f) {
  var e = f.metaKey, a = f.ctrlKey, n = f.altKey;
  return e || a || n;
}
function Et(f, e, a) {
  if (e && a !== P.NATIVE) {
    var n = _(e);
    Va.has(n) || (Gf(e).forEach(function(i) {
      var t = f(i, a);
      _t(t);
    }), Va.add(n));
  }
}
var Va = /* @__PURE__ */ new Set();
function _t(f) {
  var e = new Image();
  e.src = f;
}
function Pt() {
  var f = W(), e = lf(), a = hf();
  z(function() {
    if (e === P.NATIVE)
      return;
    var n = f.current;
    return n == null || n.addEventListener("focusin", i), function() {
      n == null || n.removeEventListener("focusin", i);
    };
    function i(t) {
      var u = X(t.target);
      if (u) {
        var r = wa(u), d = r[0];
        d && pf(d) && Et(a, d, e);
      }
    }
  }, [f, e, a]);
}
var Qt = ["width", "height"], p0 = 40;
function Yt(f) {
  var e = f.children;
  return l($i, null, l(Jt, null, e));
}
function Jt(f) {
  var e, a = f.children, n = me(), i = n[0], t = Yi(), u = ye(), r = Bf(), d = Ui(), c = Oi();
  Nt(), Pt();
  var s = c || {}, o = s.width, M = s.height, g = Un(s, Qt);
  return l("aside", {
    className: p(If.main, If.baseVariables, t === _f.DARK && If.darkTheme, t === _f.AUTO && If.autoThemeDark, (e = {}, e[y.searchActive] = u, e), i && If.reactionsMenu, d),
    ref: r,
    style: k({}, g, !i && {
      height: M,
      width: o
    })
  }, a);
}
var Ka = {
  "--epr-emoji-variation-picker-bg-color": "var(--epr-dark-emoji-variation-picker-bg-color)",
  "--epr-hover-bg-color-reduced-opacity": "var(--epr-dark-hover-bg-color-reduced-opacity)",
  "--epr-highlight-color": "var(--epr-dark-highlight-color)",
  "--epr-text-color": "var(--epr-dark-text-color)",
  "--epr-hover-bg-color": "var(--epr-dark-hover-bg-color)",
  "--epr-focus-bg-color": "var(--epr-dark-focus-bg-color)",
  "--epr-search-input-bg-color": "var(--epr-dark-search-input-bg-color)",
  "--epr-category-label-bg-color": "var(--epr-dark-category-label-bg-color)",
  "--epr-picker-border-color": "var(--epr-dark-picker-border-color)",
  "--epr-bg-color": "var(--epr-dark-bg-color)",
  "--epr-reactions-bg-color": "var(--epr-dark-reactions-bg-color)",
  "--epr-search-input-bg-color-active": "var(--epr-dark-search-input-bg-color-active)",
  "--epr-emoji-variation-indicator-color": "var(--epr-dark-emoji-variation-indicator-color)",
  "--epr-category-icon-active-color": "var(--epr-dark-category-icon-active-color)",
  "--epr-skin-tone-picker-menu-color": "var(--epr-dark-skin-tone-picker-menu-color)"
}, If = /* @__PURE__ */ I.create({
  main: {
    ".": ["epr-main", y.emojiPicker],
    position: "relative",
    display: "flex",
    flexDirection: "column",
    borderWidth: "1px",
    borderStyle: "solid",
    borderRadius: "var(--epr-picker-border-radius)",
    borderColor: "var(--epr-picker-border-color)",
    backgroundColor: "var(--epr-bg-color)",
    overflow: "hidden",
    transition: "all 0.3s ease-in-out, background-color 0.1s ease-in-out",
    // @ts-expect-error - need to work on this
    "*": {
      boxSizing: "border-box",
      fontFamily: "sans-serif"
    }
  },
  baseVariables: {
    "--": {
      "--epr-highlight-color": "#007aeb",
      "--epr-hover-bg-color": "#f1f8ff",
      "--epr-hover-bg-color-reduced-opacity": "#f1f8ff80",
      "--epr-focus-bg-color": "#e0f0ff",
      "--epr-text-color": "#858585",
      "--epr-search-input-bg-color": "#f6f6f6",
      "--epr-picker-border-color": "#e7e7e7",
      "--epr-bg-color": "#fff",
      "--epr-reactions-bg-color": "#ffffff90",
      "--epr-category-icon-active-color": "#6aa8de",
      "--epr-skin-tone-picker-menu-color": "#ffffff95",
      "--epr-horizontal-padding": "10px",
      "--epr-picker-border-radius": "8px",
      /* Header */
      "--epr-search-border-color": "var(--epr-highlight-color)",
      "--epr-header-padding": "15px var(--epr-horizontal-padding)",
      /* Skin Tone Picker */
      "--epr-active-skin-tone-indicator-border-color": "var(--epr-highlight-color)",
      "--epr-active-skin-hover-color": "var(--epr-hover-bg-color)",
      /* Search */
      "--epr-search-input-bg-color-active": "var(--epr-search-input-bg-color)",
      "--epr-search-input-padding": "0 30px",
      "--epr-search-input-border-radius": "8px",
      "--epr-search-input-height": "40px",
      "--epr-search-input-text-color": "var(--epr-text-color)",
      "--epr-search-input-placeholder-color": "var(--epr-text-color)",
      "--epr-search-bar-inner-padding": "var(--epr-horizontal-padding)",
      /*  Category Navigation */
      "--epr-category-navigation-button-size": "30px",
      /* Variation Picker */
      "--epr-emoji-variation-picker-height": "45px",
      "--epr-emoji-variation-picker-bg-color": "var(--epr-bg-color)",
      /*  Preview */
      "--epr-preview-height": "70px",
      "--epr-preview-text-size": "14px",
      "--epr-preview-text-padding": "0 var(--epr-horizontal-padding)",
      "--epr-preview-border-color": "var(--epr-picker-border-color)",
      "--epr-preview-text-color": "var(--epr-text-color)",
      /* Category */
      "--epr-category-padding": "0 var(--epr-horizontal-padding)",
      /*  Category Label */
      "--epr-category-label-bg-color": "#ffffffe6",
      "--epr-category-label-text-color": "var(--epr-text-color)",
      "--epr-category-label-padding": "0 var(--epr-horizontal-padding)",
      "--epr-category-label-height": p0 + "px",
      /*  Emoji */
      "--epr-emoji-size": "30px",
      "--epr-emoji-padding": "5px",
      "--epr-emoji-fullsize": "calc(var(--epr-emoji-size) + var(--epr-emoji-padding) * 2)",
      "--epr-emoji-hover-color": "var(--epr-hover-bg-color)",
      "--epr-emoji-variation-indicator-color": "var(--epr-picker-border-color)",
      "--epr-emoji-variation-indicator-color-hover": "var(--epr-text-color)",
      /* Z-Index */
      "--epr-header-overlay-z-index": "3",
      "--epr-emoji-variations-indictator-z-index": "1",
      "--epr-category-label-z-index": "2",
      "--epr-skin-variation-picker-z-index": "5",
      "--epr-preview-z-index": "6",
      /* Dark Theme Variables */
      "--epr-dark": "#000",
      "--epr-dark-emoji-variation-picker-bg-color": "var(--epr-dark)",
      "--epr-dark-highlight-color": "#c0c0c0",
      "--epr-dark-text-color": "var(--epr-highlight-color)",
      "--epr-dark-hover-bg-color": "#363636f6",
      "--epr-dark-hover-bg-color-reduced-opacity": "#36363680",
      "--epr-dark-focus-bg-color": "#474747",
      "--epr-dark-search-input-bg-color": "#333333",
      "--epr-dark-category-label-bg-color": "#222222e6",
      "--epr-dark-picker-border-color": "#151617",
      "--epr-dark-bg-color": "#222222",
      "--epr-dark-reactions-bg-color": "#22222290",
      "--epr-dark-search-input-bg-color-active": "var(--epr-dark)",
      "--epr-dark-emoji-variation-indicator-color": "#444",
      "--epr-dark-category-icon-active-color": "#3271b7",
      "--epr-dark-skin-tone-picker-menu-color": "#22222295"
    }
  },
  autoThemeDark: {
    ".": y.autoTheme,
    "@media (prefers-color-scheme: dark)": {
      "--": Ka
    }
  },
  darkTheme: {
    ".": y.darkTheme,
    "--": Ka
  },
  reactionsMenu: {
    ".": "epr-reactions",
    height: "50px",
    display: "inline-flex",
    backgroundColor: "var(--epr-reactions-bg-color)",
    // @ts-expect-error - need to work on this
    backdropFilter: "blur(8px)",
    "--": {
      "--epr-picker-border-radius": "50px"
    }
  }
});
function h0(f, e) {
  if (!f || !e)
    return 0;
  var a = f.getBoundingClientRect().width, n = e.getBoundingClientRect().width;
  return Math.floor(a / n);
}
function v0(f, e) {
  if (!f || !e)
    return 0;
  var a = e.getBoundingClientRect().width, n = e.getBoundingClientRect().left, i = f.getBoundingClientRect().left;
  return Math.floor((n - i) / a);
}
function I0(f, e) {
  if (!f || !e)
    return 0;
  var a = e.getBoundingClientRect().height, n = e.getBoundingClientRect().top, i = f.getBoundingClientRect().top;
  return Math.round((n - i) / a);
}
function Rt(f, e) {
  if (!f || !e)
    return !1;
  var a = e.getBoundingClientRect().height, n = e.getBoundingClientRect().top, i = f.getBoundingClientRect().top, t = f.getBoundingClientRect().height;
  return Math.round(n - i + a) < t;
}
function La(f, e, a) {
  if (e === -1) {
    var n = Math.floor((f.length - 1) / a), i = n * a, t = f.length - 1;
    return f.slice(i, t + 1);
  }
  return f.slice(e * a, (e + 1) * a);
}
function Ut(f, e, a) {
  var n = e + 1;
  return n * a > f.length ? [] : La(f, n, a);
}
function N0(f, e, a, n) {
  var i = La(f, e, a);
  return i[n] || i[i.length - 1] || null;
}
function Ot(f, e, a, n) {
  var i = Ut(f, e, a);
  return i[n] || i[i.length - 1] || null;
}
function Gt(f, e, a, n) {
  var i = La(f, e - 1, a);
  return i[n] || i[i.length - 1] || null;
}
function Zt(f, e, a) {
  if (a === void 0 && (a = 0), !f || !e.length)
    return null;
  var n = f.getBoundingClientRect().top, i = f.getBoundingClientRect().bottom, t = n + Ht(f), u = e.find(function(r) {
    var d = r.getBoundingClientRect().top, c = r.getBoundingClientRect().bottom, s = r.clientHeight * a, o = d + s, M = c - s;
    return o < t ? !1 : o >= n && o <= i || M >= n && M <= i;
  });
  return u || null;
}
function Bt(f) {
  return !!f.nextElementSibling;
}
function Ht(f) {
  for (var e = Array.from(f.querySelectorAll(E(y.label))), a = 0, n = e; a < n.length; a++) {
    var i = n[a], t = i.getBoundingClientRect().height;
    if (t > 0)
      return t;
  }
  return p0;
}
var de = "button" + /* @__PURE__ */ E(y.emoji), Wt = /* @__PURE__ */ [de, E(y.visible), ":not(" + E(y.hidden) + ")"].join("");
function X(f) {
  var e;
  return (e = f == null ? void 0 : f.closest(de)) != null ? e : null;
}
function wa(f) {
  var e = z0(f), a = ja(f);
  if (!e)
    return [];
  var n = mf(a ?? e);
  return n ? [n, a] : [];
}
function Ft(f) {
  var e;
  return !!(f != null && f.matches(de) || !(f == null || (e = f.parentElement) == null) && e.matches(de));
}
function Xa(f) {
  var e;
  return (e = f == null ? void 0 : f.clientHeight) != null ? e : 0;
}
function k0(f) {
  if (!f)
    return 0;
  var e = X(f), a = rf(e), n = ba(a);
  return $a(e) + $a(a) + n;
}
function ba(f) {
  var e, a;
  if (!f)
    return 0;
  var n = f.querySelector(E(y.categoryContent));
  return ((e = f == null ? void 0 : f.clientHeight) != null ? e : 0) - ((a = n == null ? void 0 : n.clientHeight) != null ? a : 0);
}
function Vt(f) {
  return f ? S0(f) < ba(rf(f)) : !1;
}
function D0(f) {
  return f ? f.matches(E(y.scrollBody)) ? f : f.querySelector(E(y.scrollBody)) : null;
}
function S0(f) {
  var e, a;
  return f ? k0(f) - ((e = (a = T0(f)) == null ? void 0 : a.scrollTop) != null ? e : 0) : 0;
}
function T0(f) {
  var e;
  return f && (e = f.closest(E(y.scrollBody))) != null ? e : null;
}
function Kt(f) {
  var e = X(f), a = rf(e);
  return qa(e) + qa(a);
}
function $a(f) {
  var e;
  return (e = f == null ? void 0 : f.offsetTop) != null ? e : 0;
}
function qa(f) {
  var e;
  return (e = f == null ? void 0 : f.offsetLeft) != null ? e : 0;
}
function ja(f) {
  var e;
  return (e = Xt(X(f), "unified")) != null ? e : null;
}
function z0(f) {
  var e = ja(f);
  return e ? ua(e) : null;
}
function x0(f) {
  return f ? {
    unified: ja(f),
    originalUnified: z0(f)
  } : {
    unified: null,
    originalUnified: null
  };
}
function Xt(f, e) {
  var a;
  return (a = $t(f)[e]) != null ? a : null;
}
function $t(f) {
  var e;
  return (e = f == null ? void 0 : f.dataset) != null ? e : {};
}
function ma(f) {
  return f.classList.contains(y.visible);
}
function A0(f) {
  return f ? f.classList.contains(y.hidden) : !0;
}
function Cf(f) {
  return f ? Array.from(f.querySelectorAll(Wt)) : [];
}
function E0(f) {
  if (!f)
    return null;
  var e = Cf(f), a = e.slice(-1), n = a[0];
  return n ? ma(n) ? n : Ca(n) : null;
}
function _0(f) {
  var e = f.nextElementSibling;
  return e ? ma(e) ? e : _0(e) : ya(Ne(f));
}
function Ca(f) {
  var e = f.previousElementSibling;
  return e ? ma(e) ? e : Ca(e) : E0(Ie(f));
}
function ya(f) {
  if (!f)
    return null;
  var e = Cf(f);
  return Zt(f, e, 0.1);
}
function Ie(f) {
  var e = rf(f);
  if (!e)
    return null;
  var a = e.previousElementSibling;
  return a ? A0(a) ? Ie(a) : a : null;
}
function Ne(f) {
  var e = rf(f);
  if (!e)
    return null;
  var a = e.nextElementSibling;
  return a ? A0(a) ? Ne(a) : a : null;
}
function rf(f) {
  return f ? f.closest(E(y.category)) : null;
}
function P0(f) {
  return f ? f.closest(E(y.categoryContent)) : null;
}
function Q0(f) {
  return f.split("-").map(function(e) {
    return String.fromCodePoint(parseInt(e, 16));
  }).join("");
}
var Y0 = "epr_suggested";
function J0(f) {
  try {
    var e, a, n;
    if (!((e = window) != null && e.localStorage))
      return [];
    var i = JSON.parse((a = (n = window) == null ? void 0 : n.localStorage.getItem(Y0)) != null ? a : "[]");
    return f === Ef.FREQUENT ? i.sort(function(t, u) {
      return u.count - t.count;
    }) : i;
  } catch {
    return [];
  }
}
function qt(f, e) {
  var a = J0(), n = _(f, e), i = _(f), t = a.find(function(d) {
    var c = d.unified;
    return c === n;
  }), u;
  t ? u = [t].concat(a.filter(function(d) {
    return d !== t;
  })) : (t = {
    unified: n,
    original: i,
    count: 0
  }, u = [t].concat(a)), t.count++, u.length = Math.min(u.length, 14);
  try {
    var r;
    (r = window) == null || r.localStorage.setItem(Y0, JSON.stringify(u));
  } catch {
  }
}
function fu(f) {
  return f.category === C.CUSTOM;
}
function R0(f) {
  return f.imgUrl !== void 0;
}
function U0(f, e) {
  var a = x(), n = m0(), i = qi(), t = vf(), u = t[1], r = Mf(), d = da(), c = d[0], s = Pi(e), o = r0(), M = o[1], g = hf(), L = lf(), h = K(function(S) {
    if (!i.current) {
      r();
      var Y = fn(S), J = Y[0], U = Y[1];
      if (!(!J || !U)) {
        var of = yi(U) || c;
        M(), qt(J, of), s(eu(J, of, L, g), S);
      }
    }
  }, [c, r, i, s, M, g, L]), m = K(function(S) {
    var Y;
    a.current && clearTimeout(a.current);
    var J = fn(S), U = J[0];
    !U || !pf(U) || (a.current = (Y = window) == null ? void 0 : Y.setTimeout(function() {
      i.current = !0, a.current = void 0, r(), n(S.target), u(U);
    }, 500));
  }, [i, r, n, u]), w = K(function() {
    a.current ? (clearTimeout(a.current), a.current = void 0) : i.current && requestAnimationFrame(function() {
      i.current = !1;
    });
  }, [i]);
  z(function() {
    if (f.current) {
      var b = f.current;
      return b.addEventListener("click", h, {
        passive: !0
      }), b.addEventListener("mousedown", m, {
        passive: !0
      }), b.addEventListener("mouseup", w, {
        passive: !0
      }), function() {
        b == null || b.removeEventListener("click", h), b == null || b.removeEventListener("mousedown", m), b == null || b.removeEventListener("mouseup", w);
      };
    }
  }, [f, h, m, w]);
}
function fn(f) {
  var e = f == null ? void 0 : f.target;
  return Ft(e) ? wa(e) : [];
}
function eu(f, e, a, n) {
  var i = Of(f);
  if (R0(f)) {
    var t = _(f);
    return {
      activeSkinTone: e,
      emoji: t,
      getImageUrl: function() {
        return f.imgUrl;
      },
      imageUrl: f.imgUrl,
      isCustom: !0,
      names: i,
      unified: t,
      unifiedWithoutSkinTone: t
    };
  }
  var u = _(f, e);
  return {
    activeSkinTone: e,
    emoji: Q0(u),
    getImageUrl: function(d) {
      return d === void 0 && (d = a ?? P.APPLE), n(u, d);
    },
    imageUrl: n(u, a ?? P.APPLE),
    isCustom: !1,
    names: i,
    unified: u,
    unifiedWithoutSkinTone: _(f)
  };
}
function Hf(f) {
  return l("button", Object.assign({
    type: "button"
  }, f, {
    className: p(au.button, f.className)
  }), f.children);
}
var au = /* @__PURE__ */ I.create({
  button: {
    ".": "epr-btn",
    cursor: "pointer",
    border: "0",
    background: "none",
    outline: "none"
  }
});
function nu(f) {
  var e, a = f.emojiNames, n = f.unified, i = f.hidden, t = f.hiddenOnSearch, u = f.showVariations, r = u === void 0 ? !0 : u, d = f.hasVariations, c = f.children, s = f.className, o = f.noBackground, M = o === void 0 ? !1 : o;
  return l(Hf, {
    className: p(xe.emoji, i && ia.hidden, t && sf.hiddenOnSearch, (e = {}, e[y.visible] = !i && !t, e), !!(d && r) && xe.hasVariations, M && xe.noBackground, s),
    "data-unified": n,
    "aria-label": iu(a),
    "data-full-name": a
  }, c);
}
function iu(f) {
  var e;
  return f[0].match("flag-") && (e = f[1]) != null ? e : f[0];
}
var xe = /* @__PURE__ */ I.create({
  emoji: {
    ".": y.emoji,
    position: "relative",
    width: "var(--epr-emoji-fullsize)",
    height: "var(--epr-emoji-fullsize)",
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "var(--epr-emoji-fullsize)",
    maxHeight: "var(--epr-emoji-fullsize)",
    borderRadius: "8px",
    overflow: "hidden",
    transition: "background-color 0.2s",
    ":hover": {
      backgroundColor: "var(--epr-emoji-hover-color)"
    },
    ":focus": {
      backgroundColor: "var(--epr-focus-bg-color)"
    }
  },
  noBackground: {
    background: "none",
    ":hover": {
      backgroundColor: "transparent",
      background: "none"
    },
    ":focus": {
      backgroundColor: "transparent",
      background: "none"
    }
  },
  hasVariations: {
    ".": y.emojiHasVariations,
    ":after": {
      content: "",
      display: "block",
      width: "0",
      height: "0",
      right: "0px",
      bottom: "1px",
      position: "absolute",
      borderLeft: "4px solid transparent",
      borderRight: "4px solid transparent",
      transform: "rotate(135deg)",
      borderBottom: "4px solid var(--epr-emoji-variation-indicator-color)",
      zIndex: "var(--epr-emoji-variations-indictator-z-index)"
    },
    ":hover:after": {
      borderBottom: "4px solid var(--epr-emoji-variation-indicator-color-hover)"
    }
  }
}), ce = /* @__PURE__ */ I.create({
  external: {
    ".": y.external,
    fontSize: "0"
  },
  common: {
    alignSelf: "center",
    justifySelf: "center",
    display: "block"
  }
});
function en(f) {
  var e = f.emojiName, a = f.style, n = f.lazyLoad, i = n === void 0 ? !1 : n, t = f.imgUrl, u = f.onError, r = f.className;
  return l("img", {
    src: t,
    alt: e,
    className: p(tu.emojiImag, ce.external, ce.common, r),
    loading: i ? "lazy" : "eager",
    onError: u,
    style: a
  });
}
var tu = /* @__PURE__ */ I.create({
  emojiImag: {
    ".": "epr-emoji-img",
    maxWidth: "var(--epr-emoji-fullsize)",
    maxHeight: "var(--epr-emoji-fullsize)",
    minWidth: "var(--epr-emoji-fullsize)",
    minHeight: "var(--epr-emoji-fullsize)",
    padding: "var(--epr-emoji-padding)"
  }
});
function uu(f) {
  var e = f.unified, a = f.style, n = f.className;
  return l("span", {
    className: p(ru.nativeEmoji, ce.common, ce.external, n),
    "data-unified": e,
    style: a
  }, Q0(e));
}
var ru = /* @__PURE__ */ I.create({
  nativeEmoji: {
    ".": "epr-emoji-native",
    fontFamily: '"Segoe UI Emoji", "Segoe UI Symbol", "Segoe UI", "Apple Color Emoji", "Twemoji Mozilla", "Noto Color Emoji", "EmojiOne Color", "Android Emoji"!important',
    position: "relative",
    lineHeight: "100%",
    fontSize: "var(--epr-emoji-size)",
    textAlign: "center",
    alignSelf: "center",
    justifySelf: "center",
    letterSpacing: "0",
    padding: "var(--epr-emoji-padding)"
  }
});
function se(f) {
  var e = f.emoji, a = f.unified, n = f.emojiStyle, i = f.size, t = f.lazyLoad, u = f.getEmojiUrl, r = u === void 0 ? Wn : u, d = f.className, c = u0(), s = c[1], o = {};
  i && (o.width = o.height = o.fontSize = i + "px");
  var M = e || mf(a);
  if (!M)
    return null;
  if (R0(M))
    return l(en, {
      style: o,
      emojiName: a,
      emojiStyle: P.NATIVE,
      lazyLoad: t,
      imgUrl: M.imgUrl,
      onError: g,
      className: d
    });
  return l(B, null, n === P.NATIVE ? l(uu, {
    unified: a,
    style: o,
    className: d
  }) : l(en, {
    style: o,
    emojiName: Fe(M),
    emojiStyle: n,
    lazyLoad: t,
    imgUrl: r(a, n),
    onError: g,
    className: d
  }));
  function g() {
    s(function(L) {
      return new Set(L).add(a);
    });
  }
}
function ke(f) {
  var e = f.emoji, a = f.unified, n = f.hidden, i = f.hiddenOnSearch, t = f.emojiStyle, u = f.showVariations, r = u === void 0 ? !0 : u, d = f.size, c = f.lazyLoad, s = f.getEmojiUrl, o = f.className, M = f.noBackground, g = M === void 0 ? !1 : M, L = pf(e);
  return l(nu, {
    hasVariations: L,
    showVariations: r,
    hidden: n,
    hiddenOnSearch: i,
    emojiNames: Of(e),
    unified: a,
    noBackground: g
  }, l(se, {
    unified: a,
    emoji: e,
    size: d,
    emojiStyle: t,
    lazyLoad: c,
    getEmojiUrl: s,
    className: o
  }));
}
var ou = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI4LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjgwcHgiIHZpZXdCb3g9IjAgMCAyMCA4MCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjAgODAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8cGF0aCBmaWxsPSIjODY4Njg2IiBkPSJNNS43LDEwLjRjMCwwLjEsMC4xLDAuMywwLjIsMC40QzYsMTAuOSw2LjEsMTEsNi4zLDExaDMuNHYzLjRjMCwwLjEsMC4xLDAuMywwLjIsMC40CgljMC4xLDAuMSwwLjIsMC4yLDAuNCwwLjJjMC4zLDAsMC41LTAuMiwwLjUtMC41di0zLjRoMy40YzAuMywwLDAuNS0wLjIsMC41LTAuNXMtMC4yLTAuNS0wLjUtMC41aC0zLjRWNi43YzAtMC4zLTAuMi0wLjUtMC41LTAuNQoJQzkuOCw2LDkuNiw2LjIsOS42LDYuNXYzLjRINi4yQzUuOSw5LjksNS43LDEwLjEsNS43LDEwLjRMNS43LDEwLjR6Ii8+CjxwYXRoIGZpbGw9IiMzMzcxQjciIGQ9Ik01LjcsMzAuNGMwLDAuMSwwLjEsMC4zLDAuMiwwLjRTNi4xLDMxLDYuMywzMWgzLjR2My40YzAsMC4xLDAuMSwwLjMsMC4yLDAuNGMwLjEsMC4xLDAuMiwwLjIsMC40LDAuMgoJYzAuMywwLDAuNS0wLjIsMC41LTAuNXYtMy40aDMuNGMwLjMsMCwwLjUtMC4yLDAuNS0wLjVzLTAuMi0wLjUtMC41LTAuNWgtMy40di0zLjRjMC0wLjMtMC4yLTAuNS0wLjUtMC41cy0wLjUsMC4yLTAuNSwwLjV2My40SDYuMgoJQzUuOSwyOS45LDUuNywzMC4xLDUuNywzMC40TDUuNywzMC40eiIvPgo8cGF0aCBmaWxsPSIjQzBDMEJGIiBkPSJNNS43LDUwLjRjMCwwLjEsMC4xLDAuMywwLjIsMC40QzYsNTAuOSw2LjEsNTEsNi4zLDUxaDMuNHYzLjRjMCwwLjEsMC4xLDAuMywwLjIsMC40CgljMC4xLDAuMSwwLjIsMC4yLDAuNCwwLjJjMC4zLDAsMC41LTAuMiwwLjUtMC41di0zLjRoMy40YzAuMywwLDAuNS0wLjIsMC41LTAuNXMtMC4yLTAuNS0wLjUtMC41aC0zLjR2LTMuNGMwLTAuMy0wLjItMC41LTAuNS0wLjUKCXMtMC41LDAuMi0wLjUsMC41djMuNEg2LjJDNS45LDQ5LjksNS43LDUwLjEsNS43LDUwLjRMNS43LDUwLjR6Ii8+CjxwYXRoIGZpbGw9IiM2QUE5REQiIGQ9Ik01LjcsNzAuNGMwLDAuMSwwLjEsMC4zLDAuMiwwLjRTNi4xLDcxLDYuMyw3MWgzLjR2My40YzAsMC4xLDAuMSwwLjMsMC4yLDAuNGMwLjEsMC4xLDAuMiwwLjIsMC40LDAuMgoJYzAuMywwLDAuNS0wLjIsMC41LTAuNXYtMy40aDMuNGMwLjMsMCwwLjUtMC4yLDAuNS0wLjVzLTAuMi0wLjUtMC41LTAuNWgtMy40di0zLjRjMC0wLjMtMC4yLTAuNS0wLjUtMC41cy0wLjUsMC4yLTAuNSwwLjV2My40SDYuNAoJQzUuOSw2OS45LDUuNyw3MC4xLDUuNyw3MC40TDUuNyw3MC40eiIvPgo8L3N2Zz4=";
function du() {
  var f = me(), e = f[1];
  return l(Hf, {
    "aria-label": "Show all Emojis",
    title: "Show all Emojis",
    tabIndex: 0,
    className: p(cu.plusSign),
    onClick: function() {
      return e(!1);
    }
  });
}
var cu = /* @__PURE__ */ I.create(/* @__PURE__ */ k({
  plusSign: {
    fontSize: "20px",
    padding: "17px",
    color: "var(--epr-text-color)",
    borderRadius: "50%",
    textAlign: "center",
    lineHeight: "100%",
    width: "20px",
    height: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "background-color 0.2s ease-in-out",
    ":after": {
      content: "",
      minWidth: "20px",
      minHeight: "20px",
      backgroundImage: "url(" + ou + ")",
      backgroundColor: "transparent",
      backgroundRepeat: "no-repeat",
      backgroundSize: "20px",
      backgroundPositionY: "0"
    },
    ":hover": {
      color: "var(--epr-highlight-color)",
      backgroundColor: "var(--epr-hover-bg-color-reduced-opacity)",
      // @ts-ignore
      ":after": {
        backgroundPositionY: "-20px"
      }
    },
    ":focus": {
      color: "var(--epr-highlight-color)",
      backgroundColor: "var(--epr-hover-bg-color-reduced-opacity)",
      // @ts-ignore
      ":after": {
        backgroundPositionY: "-40px"
      }
    }
  }
}, /* @__PURE__ */ nf("plusSign", {
  ":after": {
    backgroundPositionY: "-40px"
  },
  ":hover:after": {
    backgroundPositionY: "-60px"
  }
})));
function su() {
  var f = me(), e = f[0], a = at(), n = Hi();
  U0(a, Qf.REACTIONS);
  var i = lf(), t = qn();
  return e ? l("ul", {
    className: p(an.list, !e && ia.hidden),
    ref: a
  }, n.map(function(u) {
    return l("li", {
      key: u
    }, l(ke, {
      emoji: mf(u),
      emojiStyle: i,
      unified: u,
      showVariations: !1,
      className: p(an.emojiButton),
      noBackground: !0
    }));
  }), t ? l("li", null, l(du, null)) : null) : null;
}
var an = /* @__PURE__ */ I.create({
  list: {
    listStyle: "none",
    margin: "0",
    padding: "0 5px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%"
  },
  emojiButton: {
    ":hover": {
      transform: "scale(1.2)"
    },
    ":focus": {
      transform: "scale(1.2)"
    },
    ":active": {
      transform: "scale(1.1)"
    },
    transition: "transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.5)"
  }
});
function lu(f) {
  var e = Mf();
  z(function() {
    var a = f.current;
    if (!a)
      return;
    a.addEventListener("scroll", n, {
      passive: !0
    });
    function n() {
      e();
    }
    return function() {
      a == null || a.removeEventListener("scroll", n);
    };
  }, [f, e]);
}
function Mu() {
  var f = u0(), e = f[0], a = pt();
  return function(n) {
    var i = _(n), t = e.has(i), u = a(i);
    return {
      failedToLoad: t,
      filteredOut: u,
      hidden: t || u
    };
  };
}
function O0(f) {
  var e = f.categoryConfig, a = f.children, n = f.hidden, i = f.hiddenOnSearch, t = ta(e), u = Bn(e);
  return l("li", {
    className: p(Ae.category, n && ia.hidden, i && sf.hiddenOnSearch),
    "data-name": t,
    "aria-label": u
  }, l("h2", {
    className: p(Ae.label)
  }, u), l("div", {
    className: p(Ae.categoryContent)
  }, a));
}
var Ae = /* @__PURE__ */ I.create({
  category: {
    ".": y.category,
    ":not(:has(.epr-visible))": {
      display: "none"
    }
  },
  categoryContent: {
    ".": y.categoryContent,
    display: "grid",
    gridGap: "0",
    gridTemplateColumns: "repeat(auto-fill, var(--epr-emoji-fullsize))",
    justifyContent: "space-between",
    margin: "var(--epr-category-padding)",
    position: "relative"
  },
  label: {
    ".": y.label,
    alignItems: "center",
    // @ts-expect-error - backdropFilter is a valid CSS property
    backdropFilter: "blur(3px)",
    backgroundColor: "var(--epr-category-label-bg-color)",
    color: "var(--epr-category-label-text-color)",
    display: "flex",
    fontSize: "16px",
    fontWeight: "bold",
    height: "var(--epr-category-label-height)",
    margin: "0",
    padding: "var(--epr-category-label-padding)",
    position: "sticky",
    textTransform: "capitalize",
    top: "0",
    width: "100%",
    zIndex: "var(--epr-category-label-z-index)"
  }
}), Ee = !1;
function gu() {
  var f = A(Ee), e = f[0], a = f[1];
  return z(function() {
    a(!0), Ee = !0;
  }, []), e || Ee;
}
function Lu(f) {
  var e = f.categoryConfig, a = r0(), n = a[0], i = gu(), t = Ji(), u = hf(), r = $(
    function() {
      var c;
      return (c = J0(t)) != null ? c : [];
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n, t]
  ), d = lf();
  return i ? l(O0, {
    categoryConfig: e,
    hiddenOnSearch: !0,
    hidden: r.length === 0
  }, r.map(function(c) {
    var s = mf(c.original);
    return s ? l(ke, {
      showVariations: !1,
      unified: c.unified,
      emojiStyle: d,
      emoji: s,
      key: c.unified,
      getEmojiUrl: u
    }) : null;
  })) : null;
}
function wu() {
  var f = e0(), e = x(0);
  return l("ul", {
    className: p(ju.emojiList)
  }, f.map(function(a) {
    var n = ta(a);
    return n === C.SUGGESTED ? l(Lu, {
      key: n,
      categoryConfig: a
    }) : l(bu, {
      key: n,
      category: n,
      categoryConfig: a,
      renderdCategoriesCountRef: e
    });
  }));
}
function bu(f) {
  var e = f.category, a = f.categoryConfig, n = f.renderdCategoriesCountRef, i = Mu(), t = Ri(), u = lf(), r = ft(), d = da(), c = d[0], s = Vi(), o = hf(), M = !f0(), g = !r && n.current > 0 ? [] : bi(e);
  g.length > 0 && n.current++;
  var L = 0, h = g.map(function(m) {
    var w = _(m, c), b = i(m), S = b.failedToLoad, Y = b.filteredOut, J = b.hidden, U = s(m);
    return (J || U) && L++, U ? null : l(ke, {
      showVariations: M,
      key: w,
      emoji: m,
      unified: w,
      hidden: S,
      hiddenOnSearch: Y,
      emojiStyle: u,
      lazyLoad: t,
      getEmojiUrl: o
    });
  });
  return l(O0, {
    categoryConfig: a,
    // Indicates that there are no visible emojis
    // Hence, the category should be hidden
    hidden: L === h.length
  }, h);
}
var ju = /* @__PURE__ */ I.create({
  emojiList: {
    ".": y.emojiList,
    listStyle: "none",
    margin: "0",
    padding: "0"
  }
}), mu = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI1MHB4IgoJIGhlaWdodD0iMTVweCIgdmlld0JveD0iMCAwIDUwIDE1IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MCAxNSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnIGlkPSJMYXllcl8xIj4KPC9nPgo8ZyBpZD0iTGF5ZXJfMiI+Cgk8cGF0aCBmaWxsPSIjRkZGRkZGIiBzdHJva2U9IiNFOEU3RTciIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTEuODYtMC40M2w5LjgzLDExLjUzYzAuNTksMC42OSwxLjU2LDAuNjksMi4xNCwwbDkuODMtMTEuNTMiLz4KCTxwYXRoIGZpbGw9IiMwMTAyMDIiIHN0cm9rZT0iIzE1MTYxNyIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMjYuODYtMC40M2w5LjgzLDExLjUzYzAuNTksMC42OSwxLjU2LDAuNjksMi4xNCwwbDkuODMtMTEuNTMiLz4KPC9nPgo8L3N2Zz4=", wf;
(function(f) {
  f[f.Up = 0] = "Up", f[f.Down = 1] = "Down";
})(wf || (wf = {}));
function Cu() {
  var f = pe(), e = nt(), a = vf(), n = a[0], i = lf(), t = pu(e), u = t.getTop, r = t.getMenuDirection, d = l0(), c = yu(e), s = hf(), o = X(f.current), M = !!(n && o && pf(n) && o.classList.contains(y.emojiHasVariations));
  z(function() {
    M && ve(e.current);
  }, [e, M, f]);
  var g, L;
  return !M && f.current ? d(null) : (g = u(), L = c()), l("div", {
    ref: e,
    className: p(Kf.variationPicker, r() === wf.Down && Kf.pointingUp, M && Kf.visible),
    style: {
      top: g
    }
  }, M && n ? [_(n)].concat(Gf(n)).slice(0, 6).map(function(h) {
    return l(ke, {
      key: h,
      emoji: n,
      unified: h,
      emojiStyle: i,
      showVariations: !1,
      getEmojiUrl: s
    });
  }) : null, l("div", {
    className: p(Kf.pointer),
    style: L
  }));
}
function yu(f) {
  var e = pe();
  return function() {
    var n = {};
    if (!f.current)
      return n;
    if (e.current) {
      var i = X(e.current), t = Kt(i);
      if (!i)
        return n;
      n.left = t + (i == null ? void 0 : i.clientWidth) / 2;
    }
    return n;
  };
}
function pu(f) {
  var e = pe(), a = W(), n = wf.Up;
  return {
    getMenuDirection: i,
    getTop: t
  };
  function i() {
    return n;
  }
  function t() {
    n = wf.Up;
    var u = 0;
    if (!f.current)
      return 0;
    var r = Xa(f.current);
    if (e.current) {
      var d, c = a.current, s = X(e.current), o = Xa(s);
      u = k0(s);
      var M = (d = c == null ? void 0 : c.scrollTop) != null ? d : 0;
      M > u - r && (n = wf.Down, u += o + r);
    }
    return u - r;
  }
}
var Kf = /* @__PURE__ */ I.create(/* @__PURE__ */ k({
  variationPicker: {
    ".": y.variationPicker,
    position: "absolute",
    right: "15px",
    left: "15px",
    padding: "5px",
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
    borderRadius: "3px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    opacity: "0",
    visibility: "hidden",
    pointerEvents: "none",
    top: "-100%",
    border: "1px solid var(--epr-picker-border-color)",
    height: "var(--epr-emoji-variation-picker-height)",
    zIndex: "var(--epr-skin-variation-picker-z-index)",
    background: "var(--epr-emoji-variation-picker-bg-color)",
    transform: "scale(0.9)",
    transition: "transform 0.1s ease-out, opacity 0.2s ease-out"
  },
  visible: {
    opacity: "1",
    visibility: "visible",
    pointerEvents: "all",
    transform: "scale(1)"
  },
  pointingUp: {
    ".": "pointing-up",
    transformOrigin: "center 0%",
    transform: "scale(0.9)"
  },
  ".pointing-up": {
    pointer: {
      top: "0",
      transform: "rotate(180deg) translateY(100%) translateX(18px)"
    }
  },
  pointer: {
    ".": "epr-emoji-pointer",
    content: "",
    position: "absolute",
    width: "25px",
    height: "15px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "0 0",
    backgroundSize: "50px 15px",
    top: "100%",
    transform: "translateX(-18px)",
    backgroundImage: "url(" + mu + ")"
  }
}, /* @__PURE__ */ nf("pointer", {
  backgroundPosition: "-25px 0"
})));
function hu() {
  var f = W();
  return lu(f), U0(f, Qf.PICKER), Lt(), l("div", {
    className: p(vu.body, sf.hiddenOnReactions),
    ref: f
  }, l(Cu, null), l(wu, null));
}
var vu = /* @__PURE__ */ I.create({
  body: {
    ".": y.scrollBody,
    flex: "1",
    overflowY: "scroll",
    overflowX: "hidden",
    position: "relative"
  }
});
function Iu(f, e) {
  if (!f || !e)
    return 0;
  var a = f.getBoundingClientRect(), n = e.getBoundingClientRect();
  return n.height - (a.y - n.y);
}
function Nu(f, e) {
  var a = W(), n = w0(), i = L0();
  z(function() {
    if (!f)
      return;
    var t = a.current;
    t == null || t.addEventListener("keydown", d, {
      passive: !0
    }), t == null || t.addEventListener("mouseover", c, !0), t == null || t.addEventListener("focus", u, !0), t == null || t.addEventListener("mouseout", r, {
      passive: !0
    }), t == null || t.addEventListener("blur", r, !0);
    function u(s) {
      var o = X(s.target);
      if (!o)
        return r();
      var M = x0(o), g = M.unified, L = M.originalUnified;
      if (!g || !L)
        return r();
      e({
        unified: g,
        originalUnified: L
      });
    }
    function r(s) {
      if (s) {
        var o = s.relatedTarget;
        if (!X(o))
          return e(null);
      }
      e(null);
    }
    function d(s) {
      s.key === "Escape" && e(null);
    }
    function c(s) {
      if (!n()) {
        var o = X(s.target);
        if (o) {
          var M = Iu(o, t), g = o.getBoundingClientRect().height;
          if (M < g)
            return ku(o, e);
          R(o);
        }
      }
    }
    return function() {
      t == null || t.removeEventListener("mouseover", c), t == null || t.removeEventListener("mouseout", r), t == null || t.removeEventListener("focus", u, !0), t == null || t.removeEventListener("blur", r, !0), t == null || t.removeEventListener("keydown", d);
    };
  }, [a, f, e, n, i]);
}
function ku(f, e) {
  var a, n = x0(f), i = n.unified, t = n.originalUnified;
  !i || !t || ((a = document.activeElement) == null || a.blur == null || a.blur(), e({
    unified: i,
    originalUnified: t
  }));
}
var Xf, Jf;
(function(f) {
  f.ROW = "FlexRow", f.COLUMN = "FlexColumn";
})(Jf || (Jf = {}));
function G0(f) {
  var e = f.children, a = f.className, n = f.style, i = n === void 0 ? {} : n, t = f.direction, u = t === void 0 ? Jf.ROW : t;
  return l("div", {
    style: k({}, i),
    className: p(nn.flex, a, nn[u])
  }, e);
}
var nn = /* @__PURE__ */ I.create((Xf = {
  flex: {
    display: "flex"
  }
}, Xf[Jf.ROW] = {
  flexDirection: "row"
}, Xf[Jf.COLUMN] = {
  flexDirection: "column"
}, Xf));
function Du(f) {
  var e = f.className, a = f.style, n = a === void 0 ? {} : a;
  return l("div", {
    style: k({
      flex: 1
    }, n),
    className: p(e)
  });
}
function Su(f) {
  var e = f.children, a = f.className, n = f.style;
  return l("div", {
    style: k({}, n, {
      position: "absolute"
    }),
    className: a
  }, e);
}
function De(f) {
  var e = f.children, a = f.className, n = f.style;
  return l("div", {
    style: k({}, n, {
      position: "relative"
    }),
    className: a
  }, e);
}
function Tu(f) {
  var e = f.isOpen, a = f.onClick, n = f.isActive, i = f.skinToneVariation, t = f.style;
  return l(Hf, {
    style: t,
    onClick: a,
    className: p("epr-tone-" + i, _e.tone, !e && _e.closedTone, n && _e.active),
    tabIndex: e ? 0 : -1,
    "aria-pressed": n,
    "aria-label": "Skin tone " + gi[i]
  });
}
var _e = /* @__PURE__ */ I.create({
  closedTone: {
    opacity: "0",
    zIndex: "0"
  },
  active: {
    ".": "epr-active",
    zIndex: "1",
    opacity: "1"
  },
  tone: {
    ".": "epr-tone",
    ":hover": {
      boxShadow: "0 0 0 3px var(--epr-active-skin-hover-color)"
    },
    ":focus": {
      boxShadow: "0 0 0 3px var(--epr-focus-bg-color)"
    },
    // @ts-ignore
    "&.epr-tone-neutral": {
      backgroundColor: "#ffd225"
    },
    "&.epr-tone-1f3fb": {
      backgroundColor: "#ffdfbd"
    },
    "&.epr-tone-1f3fc": {
      backgroundColor: "#e9c197"
    },
    "&.epr-tone-1f3fd": {
      backgroundColor: "#c88e62"
    },
    "&.epr-tone-1f3fe": {
      backgroundColor: "#a86637"
    },
    "&.epr-tone-1f3ff": {
      backgroundColor: "#60463a"
    }
  }
}), Df = 28;
function zu() {
  return l(De, {
    style: {
      height: Df
    }
  }, l(Su, {
    style: {
      bottom: 0,
      right: 0
    }
  }, l(Z0, {
    direction: Rf.VERTICAL
  })));
}
function Z0(f) {
  var e = f.direction, a = e === void 0 ? Rf.HORIZONTAL : e, n = ca(), i = f0(), t = Zf(), u = t[0], r = t[1], d = da(), c = d[0], s = d[1], o = Qi(), M = Mf(), g = gf();
  if (i)
    return null;
  var L = Df * re.length + "px", h = u ? L : Df + "px", m = a === Rf.VERTICAL;
  return l(De, {
    className: p(Nf.skinTones, m && Nf.vertical, u && Nf.open, m && u && Nf.verticalShadow),
    style: m ? {
      flexBasis: h,
      height: h
    } : {
      flexBasis: h
    }
  }, l("div", {
    className: p(Nf.select),
    ref: n
  }, re.map(function(w, b) {
    var S = w === c;
    return l(Tu, {
      key: w,
      skinToneVariation: w,
      isOpen: u,
      style: {
        transform: p(m ? "translateY(-" + b * (u ? Df : 0) + "px)" : "translateX(-" + b * (u ? Df : 0) + "px)", u && S && "scale(1.3)")
      },
      isActive: S,
      onClick: function() {
        u ? (s(w), o(w), g()) : r(!0), M();
      }
    });
  })));
}
var Rf;
(function(f) {
  f.VERTICAL = "epr-vertical", f.HORIZONTAL = "epr-horizontal";
})(Rf || (Rf = {}));
var Nf = /* @__PURE__ */ I.create({
  skinTones: {
    ".": "epr-skin-tones",
    "--": {
      "--epr-skin-tone-size": "15px"
    },
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    transition: "all 0.3s ease-in-out",
    padding: "10px 0"
  },
  vertical: {
    padding: "9px",
    alignItems: "flex-end",
    flexDirection: "column",
    borderRadius: "6px",
    border: "1px solid var(--epr-bg-color)"
  },
  verticalShadow: {
    boxShadow: "0px 0 7px var(--epr-picker-border-color)"
  },
  open: {
    // @ts-ignore
    backdropFilter: "blur(5px)",
    background: "var(--epr-skin-tone-picker-menu-color)",
    // @ts-ignore
    ".epr-active:after": {
      content: "",
      position: "absolute",
      top: "-2px",
      left: "-2px",
      right: "-2px",
      bottom: "-2px",
      borderRadius: "5px",
      border: "1px solid var(--epr-active-skin-tone-indicator-border-color)"
    }
  },
  select: {
    ".": "epr-skin-tone-select",
    position: "relative",
    width: "var(--epr-skin-tone-size)",
    height: "var(--epr-skin-tone-size)",
    // @ts-ignore
    "> button": {
      width: "var(--epr-skin-tone-size)",
      display: "block",
      cursor: "pointer",
      borderRadius: "4px",
      height: "var(--epr-skin-tone-size)",
      position: "absolute",
      right: "0",
      transition: "transform 0.3s ease-in-out, opacity 0.35s ease-in-out",
      zIndex: "0",
      boxShadow: "0 0 0 0px var(--epr-active-skin-hover-color)"
    }
  }
});
function xu() {
  var f = a0(), e = C0();
  return f.showPreview ? l(G0, {
    className: p(ne.preview, sf.hiddenOnReactions)
  }, l(Au, null), l(Du, null), e ? l(zu, null) : null) : null;
}
function Au() {
  var f, e = a0(), a = A(null), n = a[0], i = a[1], t = lf(), u = vf(), r = u[0], d = hf();
  Nu(e.showPreview, i);
  var c = mf((f = n == null ? void 0 : n.unified) != null ? f : n == null ? void 0 : n.originalUnified), s = c != null && n != null;
  return l(o, null);
  function o() {
    var M = r ?? mf(e.defaultEmoji);
    if (!M)
      return null;
    var g = r ? Fe(r) : e.defaultCaption;
    return l(B, null, l("div", null, s ? l(se, {
      unified: n == null ? void 0 : n.unified,
      emoji: c,
      emojiStyle: t,
      size: 45,
      getEmojiUrl: d,
      className: p(ne.emoji)
    }) : M ? l(se, {
      unified: _(M),
      emoji: M,
      emojiStyle: t,
      size: 45,
      getEmojiUrl: d,
      className: p(ne.emoji)
    }) : null), l("div", {
      className: p(ne.label)
    }, s ? Fe(c) : g));
  }
}
var ne = /* @__PURE__ */ I.create({
  preview: {
    alignItems: "center",
    borderTop: "1px solid var(--epr-preview-border-color)",
    height: "var(--epr-preview-height)",
    padding: "0 var(--epr-horizontal-padding)",
    position: "relative",
    zIndex: "var(--epr-preview-z-index)"
  },
  label: {
    color: "var(--epr-preview-text-color)",
    fontSize: "var(--epr-preview-text-size)",
    padding: "var(--epr-preview-text-padding)",
    textTransform: "capitalize"
  },
  emoji: {
    padding: "0"
  }
});
function Eu(f) {
  var e;
  return (e = f == null ? void 0 : f.getAttribute("data-name")) != null ? e : null;
}
function _u(f) {
  var e = W();
  z(function() {
    var a = /* @__PURE__ */ new Map(), n = e.current, i = new IntersectionObserver(function(t) {
      if (n) {
        for (var u = F1(t), r; !(r = u()).done; ) {
          var d = r.value, c = Eu(d.target);
          a.set(c, d.intersectionRatio);
        }
        var s = Array.from(a), o = s[s.length - 1];
        if (o[1] == 1)
          return f(o[0]);
        for (var M = 0, g = s; M < g.length; M++) {
          var L = g[M], h = L[0], m = L[1];
          if (m) {
            f(h);
            break;
          }
        }
      }
    }, {
      threshold: [0, 1]
    });
    n == null || n.querySelectorAll(E(y.category)).forEach(function(t) {
      i.observe(t);
    });
  }, [e, f]);
}
function Pu() {
  var f = W(), e = Bf();
  return function(n) {
    var i;
    if (f.current) {
      var t = (i = f.current) == null ? void 0 : i.querySelector('[data-name="' + n + '"]');
      if (t) {
        var u = t.offsetTop || 0;
        M0(e.current, u);
      }
    }
  };
}
function Qu() {
  var f = Ei();
  return f ? f.length === 0 : !1;
}
var Yu = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIyMDBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgMjAwIDgwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyMDAgODAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8ZyBpZD0iTGF5ZXJfMTEiPgoJPGc+CgkJPHBhdGggZmlsbD0iIzMzNzFCNyIgc3Ryb2tlPSIjMzM3MUI3IiBzdHJva2Utd2lkdGg9IjAuMSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMTIuOCwyOS41YzAuNiwwLDEuMS0wLjUsMS4xLTEuMQoJCQljMC0wLjYtMC41LTEuMi0xLjEtMS4yYy0wLjYsMC0xLjIsMC41LTEuMiwxLjJDMTEuNiwyOSwxMi4yLDI5LjUsMTIuOCwyOS41eiBNMTIuOCwyOGMwLjIsMCwwLjQsMC4yLDAuNCwwLjQKCQkJYzAsMC4yLTAuMiwwLjQtMC40LDAuNGMtMC4yLDAtMC40LTAuMi0wLjQtMC40QzEyLjQsMjguMSwxMi42LDI4LDEyLjgsMjh6Ii8+CgkJPHBhdGggZmlsbD0iIzMzNzFCNyIgc3Ryb2tlPSIjMzM3MUI3IiBzdHJva2Utd2lkdGg9IjAuMSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMTAsMjNjLTMuOCwwLTcsMy4xLTcsN2MwLDMuOCwzLjEsNyw3LDcKCQkJczctMy4xLDctN0MxNywyNi4yLDEzLjgsMjMsMTAsMjN6IE0xMCwzNi4yYy0zLjQsMC02LjItMi44LTYuMi02LjJjMC0zLjQsMi44LTYuMiw2LjItNi4yczYuMiwyLjgsNi4yLDYuMgoJCQlDMTYuMiwzMy40LDEzLjQsMzYuMiwxMCwzNi4yeiIvPgoJCTxwYXRoIGZpbGw9IiMzMzcxQjciIHN0cm9rZT0iIzMzNzFCNyIgc3Ryb2tlLXdpZHRoPSIwLjEiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTE0LjYsMzEuMmMtMC4xLTAuMS0wLjItMC4yLTAuMy0wLjJINS43CgkJCWMtMC4xLDAtMC4yLDAuMS0wLjMsMC4yYy0wLjEsMC4xLTAuMSwwLjIsMCwwLjRjMC43LDIsMi41LDMuMyw0LjYsMy4zczMuOS0xLjMsNC42LTMuM0MxNC43LDMxLjUsMTQuNywzMS4zLDE0LjYsMzEuMnogTTEwLDM0LjEKCQkJYy0xLjYsMC0zLTAuOS0zLjctMi4yaDcuM0MxMywzMy4yLDExLjYsMzQuMSwxMCwzNC4xeiIvPgoJCTxwYXRoIGZpbGw9IiMzMzcxQjciIHN0cm9rZT0iIzMzNzFCNyIgc3Ryb2tlLXdpZHRoPSIwLjEiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTcuMiwyOS41YzAuNiwwLDEuMi0wLjUsMS4yLTEuMQoJCQljMC0wLjYtMC41LTEuMi0xLjItMS4yYy0wLjYsMC0xLjEsMC41LTEuMSwxLjJDNi4xLDI5LDYuNiwyOS41LDcuMiwyOS41eiBNNy4yLDI4YzAuMiwwLDAuNCwwLjIsMC40LDAuNGMwLDAuMi0wLjIsMC40LTAuNCwwLjQKCQkJYy0wLjIsMC0wLjQtMC4yLTAuNC0wLjRDNi44LDI4LjEsNywyOCw3LjIsMjh6Ii8+Cgk8L2c+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzM3MUI3IiBkPSJNNjQuMSwzMy40bDIuMywwYzAuMiwwLDAuNCwwLjIsMC40LDAuNHYyLjFjMCwwLjItMC4yLDAuNC0wLjQsMC40aC0yLjMKCQkJCWMtMC4yLDAtMC40LTAuMi0wLjQtMC40di0yLjFDNjMuNywzMy42LDYzLjgsMzMuNCw2NC4xLDMzLjR6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgZD0iTTczLjUsMzMuNWgyLjRjMC4yLDAsMC40LDAuMiwwLjQsMC40djJjMCwwLjItMC4yLDAuNC0wLjQsMC40aC0yLjQKCQkJCWMtMC4yLDAtMC40LTAuMi0wLjQtMC40bDAtMkM3My4xLDMzLjYsNzMuMywzMy41LDczLjUsMzMuNXoiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzM3MUI3IiBkPSJNNjMuNywyOC40aDEyLjZ2NUg2My43VjI4LjR6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgZD0iTTY1LjUsMjMuNmg4LjljMSwwLDEuOSwwLjgsMS45LDEuOXYzLjFINjMuN3YtMy4xQzYzLjcsMjQuNSw2NC41LDIzLjYsNjUuNSwyMy42eiIvPgoJCQk8ZWxsaXBzZSBmaWxsPSIjMzM3MUI3IiBjeD0iNjYuMiIgY3k9IjMwLjkiIHJ4PSIwLjkiIHJ5PSIxIi8+CgkJCTxlbGxpcHNlIGZpbGw9IiMzMzcxQjciIGN4PSI3My44IiBjeT0iMzAuOSIgcng9IjAuOSIgcnk9IjEiLz4KCQk8L2c+Cgk8L2c+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzM3MUI3IiBkPSJNOTYuNCwzMGMwLDMuNi0yLjksNi41LTYuNCw2LjVzLTYuNC0yLjktNi40LTYuNXMyLjktNi41LDYuNC02LjVTOTYuNCwyNi40LDk2LjQsMzB6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgZD0iTTk2LjMsMjguNmMwLDAsMCwwLjEsMCwwLjFjLTAuOSwwLjEtMi45LDAuMS00LjYtMS4xYy0xLjEtMC44LTItMS43LTIuNi0yLjUKCQkJCWMtMC4zLTAuNC0wLjYtMC44LTAuNy0xYy0wLjEtMC4xLTAuMS0wLjEtMC4xLTAuMmMwLjUtMC4xLDEuMi0wLjIsMi0wLjFjMS4yLDAsMi41LDAuMywzLjUsMS4xYzEsMC44LDEuNywxLjgsMi4xLDIuOAoJCQkJQzk2LjEsMjcuOSw5Ni4yLDI4LjMsOTYuMywyOC42eiIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzMzcxQjciIGQ9Ik04NCwzMi4yYzAsMCwwLTAuMSwwLTAuMWMwLjktMC4yLDIuOS0wLjQsNC43LDAuNmMxLjEsMC43LDEuOSwxLjUsMi40LDIuMwoJCQkJYzAuNCwwLjUsMC42LDEsMC43LDEuM2MtMC40LDAuMS0xLDAuMi0xLjcsMC4zYy0xLDAtMi4xLTAuMS0zLjItMC44cy0xLjktMS42LTIuNC0yLjVDODQuMiwzMi44LDg0LjEsMzIuNSw4NCwzMi4yeiIvPgoJCTwvZz4KCTwvZz4KCTxnPgoJCTxnPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzMzcxQjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTExNi4zLDI2LjhsLTEuNCwybC0wLjgtMC44bC0wLjYtMC42bDAsMC45bC0wLjEsOC4yaC02LjgKCQkJCWwtMC4xLTguMmwwLTAuOWwtMC42LDAuNmwtMC44LDAuOGwtMS40LTJsMi42LTIuOWMwLjEtMC4xLDAuMi0wLjEsMC4zLTAuMWgxLjNsMC40LDAuN2MwLjcsMS4zLDIuNiwxLjMsMy4zLTAuMWwwLjMtMC42aDEuMgoJCQkJYzAuMSwwLDAuMiwwLDAuMywwLjFsMC4zLTAuM2wtMC4zLDAuM0wxMTYuMywyNi44eiIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzMzcxQjciIGQ9Ik0xMTAuMSwyNy43aDJ2MC45YzAsMC40LTAuNCwwLjctMSwwLjdjLTAuNiwwLTEtMC4zLTEtMC43TDExMC4xLDI3LjdMMTEwLjEsMjcuN3oiLz4KCQk8L2c+Cgk8L2c+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzM3MUI3IiBkPSJNMTI2LjgsMzQuM2MwLDEuMi0xLDIuMi0yLjIsMi4ycy0yLjItMS0yLjItMi4yczEtMi4yLDIuMi0yLjJTMTI2LjgsMzMuMSwxMjYuOCwzNC4zeiIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzMzcxQjciIGQ9Ik0xMzcuNiwzNC4zYzAsMS4yLTEsMi4yLTIuMiwyLjJjLTEuMiwwLTIuMi0xLTIuMi0yLjJzMS0yLjIsMi4yLTIuMgoJCQkJQzEzNi42LDMyLjEsMTM3LjYsMzMuMSwxMzcuNiwzNC4zeiIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzMzcxQjciIGQ9Ik0xMjYuOCwyNC40djkuOSIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzMzcxQjciIGQ9Ik0xMzcuNywyNC40djkuOSIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzMzcxQjciIGQ9Ik0xMjYuOCwyMy41aDEwLjh2Mi43aC0xMC44QzEyNi44LDI2LjIsMTI2LjgsMjMuNSwxMjYuOCwyMy41eiIvPgoJCTwvZz4KCTwvZz4KCTxnPgoJCTxnPgoJCQk8cGF0aCBmaWxsPSIjMzM3MUI3IiBkPSJNMTcwLjgsMjMuMUwxNzAuOCwyMy4xYy0wLjMsMC0wLjUsMC0wLjgsMGMtMi4xLDAtNCwxLTUuMywyLjVsLTAuMSwwbC0wLjEtMC4xbC0xLTEuMmwtMC4zLDMuNGwzLjQsMC4zCgkJCQlsLTEuMS0xLjNsLTAuMS0wLjFsMC4xLTAuMWMxLjEtMS41LDMtMi4zLDUtMi4xbDAsMGMzLjIsMC4zLDUuNSwzLjEsNS4yLDYuM2MtMC4zLDMtMy4xLDUuMy02LjEsNS4xYy0zLjEtMC4yLTUuNC0yLjktNS4zLTYKCQkJCWwtMS4zLTAuMWMtMC4yLDMuOCwyLjYsNy4xLDYuMyw3LjRjMy45LDAuMyw3LjMtMi42LDcuNi02LjVDMTc3LjIsMjYuOCwxNzQuNCwyMy41LDE3MC44LDIzLjF6Ii8+CgkJCTxwYXRoIGZpbGw9IiMzMzcxQjciIGQ9Ik0xNzAuMywyNy40YzAtMC4zLTAuMy0wLjYtMC42LTAuNnMtMC42LDAuMy0wLjYsMC42djMuMmMwLDAuMiwwLjEsMC4zLDAuMiwwLjRjMC4xLDAuMSwwLjMsMC4yLDAuNCwwLjIKCQkJCWgyLjRjMC40LDAsMC42LTAuMywwLjYtMC42YzAtMC40LTAuMy0wLjYtMC42LTAuNmgtMS42aC0wLjJ2LTAuMkwxNzAuMywyNy40TDE3MC4zLDI3LjR6Ii8+CgkJPC9nPgoJPC9nPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgZD0iTTE4Ni4yLDIzLjRoNy43YzEuNSwwLDIuNywxLjIsMi43LDIuN3Y3LjdjMCwxLjUtMS4yLDIuNy0yLjcsMi43aC03LjcKCQkJCWMtMS41LDAtMi43LTEuMi0yLjctMi43di03LjdDMTgzLjQsMjQuNiwxODQuNywyMy40LDE4Ni4yLDIzLjR6Ii8+CgkJCTxlbGxpcHNlIGZpbGw9IiMzMzcxQjciIGN4PSIxODYiIGN5PSIyOC45IiByeD0iMC43IiByeT0iMC43Ii8+CgkJCTxlbGxpcHNlIGZpbGw9IiMzMzcxQjciIGN4PSIxOTQiIGN5PSIyNi43IiByeD0iMC43IiByeT0iMC43Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMTg2LDMzLjNsMC40LTAuM2MwLjQtMC4zLDEtMC4zLDEuNS0wLjFsMSwwLjQKCQkJCWMwLjUsMC4yLDEsMC4yLDEuNS0wLjFsMC44LTAuNWMwLjQtMC4zLDEtMC4zLDEuNS0wLjFsMS44LDAuOCIvPgoJCTwvZz4KCTwvZz4KCTxwYXRoIGZpbGw9IiMzMzcxQjciIHN0cm9rZT0iIzMzNzFCNyIgc3Ryb2tlLXdpZHRoPSIwLjI1IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGQ9Ik0xNTYsMjQuM2MtMC4yLTAuMS0wLjQtMC4xLTAuNSwwCgkJYzAsMC0wLjIsMC4xLTAuOSwwLjJjLTAuNywwLTIuNC0wLjEtMy44LTAuNmMtMC44LTAuMy0xLjctMC41LTIuNS0wLjVjLTAuMiwwLTAuNCwwLTAuNSwwYy0xLjMsMC0yLjUsMC4zLTMuNiwxCgkJYy0wLjIsMC4xLTAuMiwwLjItMC4yLDAuNHYxMS42YzAsMC4zLDAuMSwwLjUsMC4zLDAuNWMwLjYsMCwwLjUtMC40LDAuNS0wLjZ2LTUuN2MwLjctMC4zLDMuMi0xLjEsNS44LTAuMQoJCWMxLjYsMC42LDMuNSwwLjcsNC4zLDAuN2MwLjgsMCwxLjMtMC4zLDEuMy0wLjNjMC4yLTAuMSwwLjMtMC4yLDAuMy0wLjR2LTUuN0MxNTYuMiwyNC42LDE1Ni4xLDI0LjQsMTU2LDI0LjN6IE0xNTUuNiwzMC4yCgkJYy0wLjEsMC0wLjcsMC4xLTEsMC4xYy0wLjcsMC0yLjQtMC4xLTMuOC0wLjZjLTIuNS0xLTUtMC41LTYuMi0wLjF2LTQuOWMwLjktMC41LDIuMi0wLjcsMy4yLTAuN2MwLjEsMCwwLjMsMCwwLjQsMAoJCWMwLjcsMCwxLjUsMC4yLDIuMiwwLjRjMS42LDAuNiwzLjUsMC43LDQuMywwLjdjMC4yLDAsMC44LDAsMS0wLjFWMzAuMnoiLz4KCTxnPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgZD0iTTQ4LjEsMjMuNWgzLjdjMi41LDAsNC41LDIsNC41LDQuNWMwLDAuNS0wLjQsMC45LTAuOSwwLjlINDQuNWMtMC41LDAtMC45LTAuNC0wLjktMC45CgkJCUM0My42LDI1LjUsNDUuNiwyMy41LDQ4LjEsMjMuNXoiLz4KCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzMzcxQjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTQzLjUsMjguOGMtMC4yLDAuMS0wLjUsMS4yLDAsMS41YzEuNCwxLDguNSwwLjgsMTEuMywwLjYKCQkJYzAuOC0wLjEsMS42LTAuNCwxLjctMS4yYzAtMC4zLTAuMS0wLjYtMC42LTAuOSIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNNDMuNSwzMC42TDQzLjMsMzFjLTAuMiwwLjUsMC4yLDEsMC43LDAuOWMwLjMtMC4xLDAuNSwwLDAuNywwLjMKCQkJbDAuMSwwLjJjMC4zLDAuNSwxLDAuNiwxLjUsMC4ybDAsMGMwLjMtMC4yLDAuNy0wLjMsMS0wLjJsMC44LDAuM2MwLjQsMC4yLDAuOCwwLjEsMS4yLDBsMC41LTAuMmMwLjQtMC4yLDAuOS0wLjIsMS4zLDBsMC41LDAuMgoJCQljMC40LDAuMiwwLjgsMC4yLDEuMiwwbDAuMi0wLjFjMC4zLTAuMiwwLjgtMC4yLDEuMSwwLjFsMC4yLDAuMmMwLjMsMC4zLDAuOCwwLjIsMS0wLjJsMC4xLTAuMmMwLjEtMC4yLDAtMC4zLDAuMi0wLjMKCQkJYzAuNSwwLDEuMi0wLjMsMS4xLTAuN2wtMC40LTEuMSIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNNDMuNSwzMi4yYy0wLjEsMC4yLTAuMywwLjgsMCwxLjFjMC4zLDAuNCwzLDEuMSw2LjQsMS4xCgkJCWMyLjIsMCw0LjYtMC4zLDYtMC42YzAuNS0wLjEsMC45LTAuNSwwLjgtMC45YzAtMC4yLTAuMi0wLjUtMC40LTAuNyIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNNDMuNSwzMy4zYzAsMC41LDAuNiwyLjMsMS4zLDIuN2MxLjgsMC44LDUuNywwLjcsOC4xLDAuNQoJCQljMS4zLTAuMSwyLjUtMC43LDMuMi0xLjhjMC4zLTAuNSwwLjUtMSwwLjUtMS40Ii8+CgkJPGVsbGlwc2UgZmlsbD0iIzMzNzFCNyIgY3g9IjUxLjYiIGN5PSIyNi41IiByeD0iMC4zIiByeT0iMC40Ii8+CgkJPGVsbGlwc2UgZmlsbD0iIzMzNzFCNyIgY3g9IjUzIiBjeT0iMjUiIHJ4PSIwLjMiIHJ5PSIwLjQiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjMzM3MUI3IiBjeD0iNTMiIGN5PSIyNy4yIiByeD0iMC4zIiByeT0iMC40Ii8+CgkJPGVsbGlwc2UgZmlsbD0iIzMzNzFCNyIgY3g9IjU0LjMiIGN5PSIyNi41IiByeD0iMC4zIiByeT0iMC40Ii8+CgkJPGVsbGlwc2UgZmlsbD0iIzMzNzFCNyIgY3g9IjUwLjkiIGN5PSIyNSIgcng9IjAuMyIgcnk9IjAuNCIvPgoJPC9nPgoJPGc+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzM3MUI3IiBkPSJNMjQuMiwzMXYtNy42YzAuMSwwLjEsMC44LDAuOSwyLjgsMy4xYzIuNS0xLjYsNS42LTAuNyw2LjksMGwyLjQtMy4xdjcuMQoJCQljMCwxLjItMC4xLDIuNS0wLjksMy40Yy0xLDEuMi0yLjcsMi41LTUuMywyLjVjLTIuOSwwLTQuNS0xLjUtNS4zLTIuOUMyNC4yLDMyLjksMjQuMiwzMiwyNC4yLDMxeiIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMjEuMiwzMGw1LjQsMS4yIi8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzM3MUI3IiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0yMS4yLDM0LjFsNS40LTEuMiIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMzguOCwzMGwtNS40LDEuMiIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMzguOCwzNC4xbC01LjQtMS4yIi8+CgkJPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiMzMzcxQjciIGQ9Ik0yOS41LDMyLjRMMjksMzEuN2MtMC4yLTAuMywwLTAuNiwwLjMtMC42aDEuNAoJCQljMC4zLDAsMC41LDAuNCwwLjMsMC42bC0wLjcsMWwwLDBjLTAuNywxLjItMi42LDEuMS0zLjEtMC4zbC0wLjEtMC4yYy0wLjEtMC4yLDAtMC40LDAuMi0wLjVzMC40LDAsMC41LDAuMmwwLjEsMC4yCgkJCUMyOC4zLDMyLjgsMjkuMSwzMi45LDI5LjUsMzIuNHoiLz4KCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzMzcxQjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTMyLjQsMzIuMWwtMC4xLDAuMmMtMC40LDEtMS44LDEuMS0yLjMsMC4yIi8+CgkJPGVsbGlwc2UgZmlsbD0iIzMzNzFCNyIgY3g9IjI3LjYiIGN5PSIyOS43IiByeD0iMC43IiByeT0iMC43Ii8+CgkJPGVsbGlwc2UgZmlsbD0iIzMzNzFCNyIgY3g9IjMyLjQiIGN5PSIyOS43IiByeD0iMC43IiByeT0iMC43Ii8+Cgk8L2c+Cgk8Zz4KCQk8cGF0aCBmaWxsPSIjQzBDMEJGIiBzdHJva2U9IiNDMEMwQkYiIHN0cm9rZS13aWR0aD0iMC4xIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGQ9Ik0xMi44LDQ5LjVjMC42LDAsMS4xLTAuNSwxLjEtMS4xCgkJCWMwLTAuNi0wLjUtMS4yLTEuMS0xLjJjLTAuNiwwLTEuMiwwLjUtMS4yLDEuMkMxMS42LDQ5LDEyLjIsNDkuNSwxMi44LDQ5LjV6IE0xMi44LDQ4YzAuMiwwLDAuNCwwLjIsMC40LDAuNAoJCQljMCwwLjItMC4yLDAuNC0wLjQsMC40Yy0wLjIsMC0wLjQtMC4yLTAuNC0wLjRDMTIuNCw0OC4xLDEyLjYsNDgsMTIuOCw0OHoiLz4KCQk8cGF0aCBmaWxsPSIjQzBDMEJGIiBzdHJva2U9IiNDMEMwQkYiIHN0cm9rZS13aWR0aD0iMC4xIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGQ9Ik0xNC42LDUxLjJjLTAuMS0wLjEtMC4yLTAuMi0wLjMtMC4ySDUuNwoJCQljLTAuMSwwLTAuMiwwLjEtMC4zLDAuMmMtMC4xLDAuMS0wLjEsMC4yLDAsMC40YzAuNywyLDIuNSwzLjMsNC42LDMuM3MzLjktMS4zLDQuNi0zLjNDMTQuNyw1MS41LDE0LjcsNTEuMywxNC42LDUxLjJ6IE0xMCw1NC4xCgkJCWMtMS42LDAtMy0wLjktMy43LTIuMmg3LjNDMTMsNTMuMiwxMS42LDU0LjEsMTAsNTQuMXoiLz4KCQk8cGF0aCBmaWxsPSIjQzBDMEJGIiBzdHJva2U9IiNDMEMwQkYiIHN0cm9rZS13aWR0aD0iMC4xIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGQ9Ik03LjIsNDkuNWMwLjYsMCwxLjItMC41LDEuMi0xLjEKCQkJYzAtMC42LTAuNS0xLjItMS4yLTEuMmMtMC42LDAtMS4xLDAuNS0xLjEsMS4yQzYuMSw0OSw2LjYsNDkuNSw3LjIsNDkuNXogTTcuMiw0OGMwLjIsMCwwLjQsMC4yLDAuNCwwLjRjMCwwLjItMC4yLDAuNC0wLjQsMC40CgkJCWMtMC4yLDAtMC40LTAuMi0wLjQtMC40QzYuOCw0OC4xLDcsNDgsNy4yLDQ4eiIvPgoJCTxwYXRoIGZpbGw9IiNDMEMwQkYiIHN0cm9rZT0iI0MwQzBCRiIgc3Ryb2tlLXdpZHRoPSIwLjEiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTEwLDQzYy0zLjgsMC03LDMuMS03LDdjMCwzLjgsMy4xLDcsNyw3CgkJCXM3LTMuMSw3LTdDMTcsNDYuMiwxMy44LDQzLDEwLDQzeiBNMTAsNTYuMmMtMy40LDAtNi4yLTIuOC02LjItNi4yYzAtMy40LDIuOC02LjIsNi4yLTYuMnM2LjIsMi44LDYuMiw2LjIKCQkJQzE2LjIsNTMuNCwxMy40LDU2LjIsMTAsNTYuMnoiLz4KCTwvZz4KCTxnPgoJCTxnPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNDMEMwQkYiIGQ9Ik02NC4xLDUzLjRsMi4zLDBjMC4yLDAsMC40LDAuMiwwLjQsMC40djIuMWMwLDAuMi0wLjIsMC40LTAuNCwwLjRoLTIuMwoJCQkJYy0wLjIsMC0wLjQtMC4yLTAuNC0wLjR2LTIuMUM2My43LDUzLjYsNjMuOCw1My40LDY0LjEsNTMuNHoiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBkPSJNNzMuNSw1My41aDIuNGMwLjIsMCwwLjQsMC4yLDAuNCwwLjR2MmMwLDAuMi0wLjIsMC40LTAuNCwwLjRoLTIuNAoJCQkJYy0wLjIsMC0wLjQtMC4yLTAuNC0wLjRsMC0yQzczLjEsNTMuNiw3My4zLDUzLjUsNzMuNSw1My41eiIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNDMEMwQkYiIGQ9Ik02My43LDQ4LjRoMTIuNnY1SDYzLjdWNDguNHoiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBkPSJNNjUuNSw0My42aDguOWMxLDAsMS45LDAuOCwxLjksMS45djMuMUg2My43di0zLjFDNjMuNyw0NC41LDY0LjUsNDMuNiw2NS41LDQzLjZ6Ii8+CgkJCTxlbGxpcHNlIGZpbGw9IiNDMEMwQkYiIGN4PSI2Ni4yIiBjeT0iNTAuOSIgcng9IjAuOSIgcnk9IjEiLz4KCQkJPGVsbGlwc2UgZmlsbD0iI0MwQzBCRiIgY3g9IjczLjgiIGN5PSI1MC45IiByeD0iMC45IiByeT0iMSIvPgoJCTwvZz4KCTwvZz4KCTxnPgoJCTxnPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNDMEMwQkYiIGQ9Ik05Ni40LDUwYzAsMy42LTIuOSw2LjUtNi40LDYuNXMtNi40LTIuOS02LjQtNi41czIuOS02LjUsNi40LTYuNVM5Ni40LDQ2LjQsOTYuNCw1MHoiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBkPSJNOTYuMyw0OC42YzAsMCwwLDAuMSwwLDAuMWMtMC45LDAuMS0yLjksMC4xLTQuNi0xLjJjLTEuMS0wLjgtMi0xLjctMi42LTIuNQoJCQkJYy0wLjMtMC40LTAuNi0wLjgtMC43LTFjLTAuMS0wLjEtMC4xLTAuMi0wLjEtMC4yYzAuNS0wLjEsMS4yLTAuMiwyLTAuMmMxLjIsMCwyLjUsMC4zLDMuNSwxLjFjMSwwLjgsMS43LDEuOCwyLjEsMi44CgkJCQlDOTYuMSw0Ny45LDk2LjIsNDguMyw5Ni4zLDQ4LjZ6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0MwQzBCRiIgZD0iTTg0LDUyLjJjMCwwLDAtMC4xLDAtMC4xYzAuOS0wLjIsMi45LTAuNCw0LjcsMC42YzEuMSwwLjcsMS45LDEuNSwyLjQsMi4zCgkJCQljMC40LDAuNSwwLjYsMSwwLjcsMS4zYy0wLjQsMC4xLTEsMC4yLTEuNywwLjNjLTEsMC0yLjEtMC4xLTMuMi0wLjhzLTEuOS0xLjYtMi40LTIuNUM4NC4yLDUyLjgsODQuMSw1Mi41LDg0LDUyLjJ6Ii8+CgkJPC9nPgoJPC9nPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0MwQzBCRiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMTE2LjMsNDYuOGwtMS40LDJsLTAuOC0wLjhsLTAuNi0wLjdsMCwwLjlsLTAuMSw4LjJoLTYuOAoJCQkJbC0wLjEtOC4ybDAtMC45bC0wLjYsMC43bC0wLjgsMC44bC0xLjQtMmwyLjYtMi45YzAuMS0wLjEsMC4yLTAuMSwwLjMtMC4xaDEuM2wwLjQsMC43YzAuNywxLjMsMi42LDEuMywzLjMtMC4xbDAuMy0wLjZoMS4yCgkJCQljMC4xLDAsMC4yLDAsMC4zLDAuMWwwLjMtMC4zbC0wLjMsMC4zTDExNi4zLDQ2Ljh6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0MwQzBCRiIgZD0iTTExMC4xLDQ3LjdoMnYwLjljMCwwLjQtMC40LDAuNy0xLDAuN2MtMC42LDAtMS0wLjMtMS0wLjdMMTEwLjEsNDcuN0wxMTAuMSw0Ny43eiIvPgoJCTwvZz4KCTwvZz4KCTxnPgoJCTxnPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNDMEMwQkYiIGQ9Ik0xMjYuOCw1NC4zYzAsMS4yLTEsMi4yLTIuMiwyLjJzLTIuMi0xLTIuMi0yLjJzMS0yLjIsMi4yLTIuMlMxMjYuOCw1My4xLDEyNi44LDU0LjN6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0MwQzBCRiIgZD0iTTEzNy42LDU0LjNjMCwxLjItMSwyLjItMi4yLDIuMmMtMS4yLDAtMi4yLTEtMi4yLTIuMnMxLTIuMiwyLjItMi4yCgkJCQlDMTM2LjYsNTIuMSwxMzcuNiw1My4xLDEzNy42LDU0LjN6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0MwQzBCRiIgZD0iTTEyNi44LDQ0LjR2OS45Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0MwQzBCRiIgZD0iTTEzNy43LDQ0LjR2OS45Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0MwQzBCRiIgZD0iTTEyNi44LDQzLjVoMTAuOHYyLjdoLTEwLjhDMTI2LjgsNDYuMiwxMjYuOCw0My41LDEyNi44LDQzLjV6Ii8+CgkJPC9nPgoJPC9nPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGZpbGw9IiNDMEMwQkYiIGQ9Ik0xNzAuOCw0My4xTDE3MC44LDQzLjFjLTAuMywwLTAuNSwwLTAuOCwwYy0yLjEsMC00LDEtNS4zLDIuNWwtMC4xLDBsLTAuMS0wLjFsLTEtMS4ybC0wLjMsMy40bDMuNCwwLjMKCQkJCWwtMS4xLTEuM2wtMC4xLTAuMWwwLjEtMC4xYzEuMS0xLjUsMy0yLjMsNS0yLjFsMCwwYzMuMiwwLjMsNS41LDMuMSw1LjIsNi4zYy0wLjMsMy0zLjEsNS4zLTYuMSw1LjFjLTMuMS0wLjItNS40LTIuOS01LjMtNgoJCQkJbC0xLjMtMC4xYy0wLjIsMy44LDIuNiw3LjEsNi4zLDcuNGMzLjksMC4zLDcuMy0yLjYsNy42LTYuNUMxNzcuMiw0Ni44LDE3NC40LDQzLjUsMTcwLjgsNDMuMXoiLz4KCQkJPHBhdGggZmlsbD0iI0MwQzBCRiIgZD0iTTE3MC4zLDQ3LjRjMC0wLjMtMC4zLTAuNi0wLjYtMC42cy0wLjYsMC4zLTAuNiwwLjZ2My4yYzAsMC4yLDAuMSwwLjMsMC4yLDAuNGMwLjEsMC4xLDAuMywwLjIsMC40LDAuMgoJCQkJaDIuNGMwLjQsMCwwLjYtMC4zLDAuNi0wLjZjMC0wLjMtMC4zLTAuNi0wLjYtMC42aC0xLjZoLTAuMnYtMC4yTDE3MC4zLDQ3LjRMMTcwLjMsNDcuNHoiLz4KCQk8L2c+Cgk8L2c+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBkPSJNMTg2LjIsNDMuNGg3LjdjMS41LDAsMi43LDEuMiwyLjcsMi43djcuN2MwLDEuNS0xLjIsMi43LTIuNywyLjdoLTcuNwoJCQkJYy0xLjUsMC0yLjctMS4yLTIuNy0yLjd2LTcuN0MxODMuNCw0NC43LDE4NC43LDQzLjQsMTg2LjIsNDMuNHoiLz4KCQkJPGVsbGlwc2UgZmlsbD0iI0MwQzBCRiIgY3g9IjE4NiIgY3k9IjQ4LjkiIHJ4PSIwLjciIHJ5PSIwLjciLz4KCQkJPGVsbGlwc2UgZmlsbD0iI0MwQzBCRiIgY3g9IjE5NCIgY3k9IjQ2LjciIHJ4PSIwLjciIHJ5PSIwLjciLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0xODYsNTMuM2wwLjQtMC4zYzAuNC0wLjMsMS0wLjMsMS41LTAuMWwxLDAuNAoJCQkJYzAuNSwwLjIsMSwwLjIsMS41LTAuMWwwLjgtMC41YzAuNC0wLjMsMS0wLjMsMS41LTAuMWwxLjgsMC44Ii8+CgkJPC9nPgoJPC9nPgoJPHBhdGggZmlsbD0iI0MwQzBCRiIgc3Ryb2tlPSIjQzBDMEJGIiBzdHJva2Utd2lkdGg9IjAuMjUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTE1Niw0NC4zYy0wLjItMC4xLTAuNC0wLjEtMC41LDAKCQljMCwwLTAuMiwwLjEtMC45LDAuMmMtMC43LDAtMi40LTAuMS0zLjgtMC42Yy0wLjgtMC4zLTEuNy0wLjUtMi41LTAuNWMtMC4yLDAtMC40LDAtMC41LDBjLTEuMywwLTIuNSwwLjMtMy42LDEKCQljLTAuMiwwLjEtMC4yLDAuMi0wLjIsMC40djExLjZjMCwwLjMsMC4xLDAuNSwwLjMsMC41YzAuNiwwLDAuNS0wLjQsMC41LTAuNnYtNS43YzAuNy0wLjMsMy4yLTEuMSw1LjgtMC4xCgkJYzEuNiwwLjYsMy41LDAuNyw0LjMsMC43YzAuOCwwLDEuMy0wLjMsMS4zLTAuM2MwLjItMC4xLDAuMy0wLjIsMC4zLTAuNHYtNS43QzE1Ni4yLDQ0LjYsMTU2LjEsNDQuNCwxNTYsNDQuM3ogTTE1NS42LDUwLjIKCQljLTAuMSwwLTAuNywwLjEtMSwwLjFjLTAuNywwLTIuNC0wLjEtMy44LTAuNmMtMi41LTEtNS0wLjUtNi4yLTAuMXYtNC45YzAuOS0wLjUsMi4yLTAuNywzLjItMC43YzAuMSwwLDAuMywwLDAuNCwwCgkJYzAuNywwLDEuNSwwLjIsMi4yLDAuNGMxLjYsMC42LDMuNSwwLjcsNC4zLDAuN2MwLjIsMCwwLjgsMCwxLTAuMVY1MC4yeiIvPgoJPGc+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBkPSJNNDguMSw0My41aDMuN2MyLjUsMCw0LjUsMiw0LjUsNC41YzAsMC41LTAuNCwwLjktMC45LDAuOUg0NC41Yy0wLjUsMC0wLjktMC40LTAuOS0wLjkKCQkJQzQzLjYsNDUuNSw0NS42LDQzLjUsNDguMSw0My41eiIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0MwQzBCRiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNNDMuNSw0OC44Yy0wLjIsMC4xLTAuNSwxLjIsMCwxLjVjMS40LDEsOC41LDAuOCwxMS4zLDAuNgoJCQljMC44LTAuMSwxLjYtMC40LDEuNy0xLjJjMC0wLjMtMC4xLTAuNi0wLjYtMC45Ii8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik00My41LDUwLjZMNDMuMyw1MWMtMC4yLDAuNSwwLjIsMSwwLjcsMC45YzAuMy0wLjEsMC41LDAsMC43LDAuMwoJCQlsMC4xLDAuMmMwLjMsMC41LDEsMC42LDEuNSwwLjJsMCwwYzAuMy0wLjIsMC43LTAuMywxLTAuMmwwLjgsMC4zYzAuNCwwLjIsMC44LDAuMSwxLjIsMGwwLjUtMC4yYzAuNC0wLjIsMC45LTAuMiwxLjMsMGwwLjUsMC4yCgkJCWMwLjQsMC4yLDAuOCwwLjIsMS4yLDBsMC4yLTAuMWMwLjMtMC4yLDAuOC0wLjIsMS4xLDAuMWwwLjIsMC4yYzAuMywwLjMsMC44LDAuMiwxLTAuMmwwLjEtMC4yYzAuMS0wLjIsMC0wLjMsMC4yLTAuMwoJCQljMC41LDAsMS4yLTAuMywxLjEtMC43bC0wLjQtMS4xIi8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik00My41LDUyLjJjLTAuMSwwLjItMC4zLDAuOCwwLDEuMWMwLjMsMC40LDMsMS4xLDYuNCwxLjEKCQkJYzIuMiwwLDQuNi0wLjMsNi0wLjZjMC41LTAuMSwwLjktMC41LDAuOC0wLjljMC0wLjItMC4yLTAuNS0wLjQtMC43Ii8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik00My41LDUzLjNjMCwwLjUsMC42LDIuMywxLjMsMi43YzEuOCwwLjgsNS43LDAuNyw4LjEsMC41CgkJCWMxLjMtMC4xLDIuNS0wLjcsMy4yLTEuOGMwLjMtMC41LDAuNS0xLDAuNS0xLjQiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjQzBDMEJGIiBjeD0iNTEuNiIgY3k9IjQ2LjUiIHJ4PSIwLjMiIHJ5PSIwLjQiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjQzBDMEJGIiBjeD0iNTMiIGN5PSI0NSIgcng9IjAuMyIgcnk9IjAuNCIvPgoJCTxlbGxpcHNlIGZpbGw9IiNDMEMwQkYiIGN4PSI1MyIgY3k9IjQ3LjIiIHJ4PSIwLjMiIHJ5PSIwLjQiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjQzBDMEJGIiBjeD0iNTQuMyIgY3k9IjQ2LjUiIHJ4PSIwLjMiIHJ5PSIwLjQiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjQzBDMEJGIiBjeD0iNTAuOSIgY3k9IjQ1IiByeD0iMC4zIiByeT0iMC40Ii8+Cgk8L2c+Cgk8Zz4KCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNDMEMwQkYiIGQ9Ik0yNC4yLDUxdi03LjZjMC4xLDAuMSwwLjgsMC45LDIuOCwzLjFjMi41LTEuNyw1LjYtMC43LDYuOSwwbDIuNC0zLjF2Ny4xCgkJCWMwLDEuMi0wLjEsMi41LTAuOSwzLjRjLTEsMS4yLTIuNywyLjUtNS4zLDIuNWMtMi45LDAtNC41LTEuNS01LjMtMi45QzI0LjIsNTIuOSwyNC4yLDUyLDI0LjIsNTF6Ii8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0yMS4yLDUwbDUuNCwxLjIiLz4KCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNDMEMwQkYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTIxLjIsNTQuMWw1LjQtMS4yIi8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0zOC44LDUwbC01LjQsMS4yIi8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0zOC44LDU0LjFsLTUuNC0xLjIiLz4KCQk8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI0MwQzBCRiIgZD0iTTI5LjUsNTIuNEwyOSw1MS43Yy0wLjItMC4zLDAtMC42LDAuMy0wLjZoMS40CgkJCWMwLjMsMCwwLjUsMC40LDAuMywwLjZsLTAuNywxbDAsMGMtMC43LDEuMi0yLjYsMS4xLTMuMS0wLjNsLTAuMS0wLjJjLTAuMS0wLjIsMC0wLjQsMC4yLTAuNXMwLjQsMCwwLjUsMC4ybDAuMSwwLjIKCQkJQzI4LjMsNTIuOCwyOS4xLDUyLjksMjkuNSw1Mi40eiIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0MwQzBCRiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMzIuNCw1Mi4xbC0wLjEsMC4yYy0wLjQsMS0xLjgsMS4xLTIuMywwLjIiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjQzBDMEJGIiBjeD0iMjcuNiIgY3k9IjQ5LjciIHJ4PSIwLjciIHJ5PSIwLjciLz4KCQk8ZWxsaXBzZSBmaWxsPSIjQzBDMEJGIiBjeD0iMzIuNCIgY3k9IjQ5LjciIHJ4PSIwLjciIHJ5PSIwLjciLz4KCTwvZz4KCTxnPgoJCTxwYXRoIGZpbGw9IiM2QUE5REQiIHN0cm9rZT0iIzZBQTlERCIgc3Ryb2tlLXdpZHRoPSIwLjEiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTE0LjYsNzEuMmMtMC4xLTAuMS0wLjItMC4yLTAuMy0wLjJINS43CgkJCWMtMC4xLDAtMC4yLDAuMS0wLjMsMC4yYy0wLjEsMC4xLTAuMSwwLjIsMCwwLjRjMC43LDIsMi41LDMuMyw0LjYsMy4zczMuOS0xLjMsNC42LTMuM0MxNC43LDcxLjUsMTQuNyw3MS4zLDE0LjYsNzEuMnogTTEwLDc0LjEKCQkJYy0xLjYsMC0zLTAuOS0zLjctMi4yaDcuM0MxMyw3My4yLDExLjYsNzQuMSwxMCw3NC4xeiIvPgoJCTxwYXRoIGZpbGw9IiM2QUE5REQiIHN0cm9rZT0iIzZBQTlERCIgc3Ryb2tlLXdpZHRoPSIwLjEiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTEyLjgsNjkuNWMwLjYsMCwxLjEtMC41LDEuMS0xLjEKCQkJYzAtMC42LTAuNS0xLjItMS4xLTEuMmMtMC42LDAtMS4yLDAuNS0xLjIsMS4yQzExLjYsNjksMTIuMiw2OS41LDEyLjgsNjkuNXogTTEyLjgsNjhjMC4yLDAsMC40LDAuMiwwLjQsMC40CgkJCWMwLDAuMi0wLjIsMC40LTAuNCwwLjRjLTAuMiwwLTAuNC0wLjItMC40LTAuNEMxMi40LDY4LjEsMTIuNiw2OCwxMi44LDY4eiIvPgoJCTxwYXRoIGZpbGw9IiM2QUE5REQiIHN0cm9rZT0iIzZBQTlERCIgc3Ryb2tlLXdpZHRoPSIwLjEiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTcuMiw2OS41YzAuNiwwLDEuMi0wLjUsMS4yLTEuMQoJCQljMC0wLjYtMC41LTEuMi0xLjItMS4yYy0wLjYsMC0xLjEsMC41LTEuMSwxLjJDNi4xLDY5LDYuNiw2OS41LDcuMiw2OS41eiBNNy4yLDY4YzAuMiwwLDAuNCwwLjIsMC40LDAuNGMwLDAuMi0wLjIsMC40LTAuNCwwLjQKCQkJYy0wLjIsMC0wLjQtMC4yLTAuNC0wLjRDNi44LDY4LjEsNyw2OCw3LjIsNjh6Ii8+CgkJPHBhdGggZmlsbD0iIzZBQTlERCIgc3Ryb2tlPSIjNkFBOUREIiBzdHJva2Utd2lkdGg9IjAuMSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMTAsNjNjLTMuOCwwLTcsMy4xLTcsN2MwLDMuOCwzLjEsNyw3LDcKCQkJczctMy4xLDctN0MxNyw2Ni4yLDEzLjgsNjMsMTAsNjN6IE0xMCw3Ni4yYy0zLjQsMC02LjItMi44LTYuMi02LjJjMC0zLjQsMi44LTYuMiw2LjItNi4yczYuMiwyLjgsNi4yLDYuMgoJCQlDMTYuMiw3My40LDEzLjQsNzYuMiwxMCw3Ni4yeiIvPgoJPC9nPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgZD0iTTY0LjEsNzMuNGwyLjMsMGMwLjIsMCwwLjQsMC4yLDAuNCwwLjR2Mi4xYzAsMC4yLTAuMiwwLjQtMC40LDAuNGgtMi4zCgkJCQljLTAuMiwwLTAuNC0wLjItMC40LTAuNHYtMi4xQzYzLjcsNzMuNiw2My44LDczLjQsNjQuMSw3My40eiIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM2QUE5REQiIGQ9Ik03My41LDczLjVoMi40YzAuMiwwLDAuNCwwLjIsMC40LDAuNHYyLjFjMCwwLjItMC4yLDAuNC0wLjQsMC40aC0yLjQKCQkJCWMtMC4yLDAtMC40LTAuMi0wLjQtMC40bDAtMi4xQzczLjEsNzMuNiw3My4zLDczLjUsNzMuNSw3My41eiIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM2QUE5REQiIGQ9Ik02My43LDY4LjRoMTIuNnY1SDYzLjdWNjguNHoiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNkFBOUREIiBkPSJNNjUuNSw2My42aDguOWMxLDAsMS45LDAuOCwxLjksMS45djMuMUg2My43di0zLjFDNjMuNyw2NC41LDY0LjUsNjMuNiw2NS41LDYzLjZ6Ii8+CgkJCTxlbGxpcHNlIGZpbGw9IiM2QUE5REQiIGN4PSI2Ni4yIiBjeT0iNzAuOSIgcng9IjAuOSIgcnk9IjAuOSIvPgoJCQk8ZWxsaXBzZSBmaWxsPSIjNkFBOUREIiBjeD0iNzMuOCIgY3k9IjcwLjkiIHJ4PSIwLjkiIHJ5PSIwLjkiLz4KCQk8L2c+Cgk8L2c+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNkFBOUREIiBkPSJNOTYuNCw3MGMwLDMuNi0yLjksNi41LTYuNCw2LjVzLTYuNC0yLjktNi40LTYuNXMyLjktNi41LDYuNC02LjVTOTYuNCw2Ni40LDk2LjQsNzB6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgZD0iTTk2LjMsNjguNmMwLDAsMCwwLjEsMCwwLjFjLTAuOSwwLjEtMi45LDAuMS00LjYtMS4yYy0xLjEtMC44LTItMS43LTIuNi0yLjUKCQkJCWMtMC4zLTAuNC0wLjYtMC44LTAuNy0xLjFjLTAuMS0wLjEtMC4xLTAuMi0wLjEtMC4yYzAuNS0wLjEsMS4yLTAuMiwyLTAuMmMxLjIsMCwyLjUsMC4zLDMuNSwxLjFjMSwwLjgsMS43LDEuOCwyLjEsMi44CgkJCQlDOTYuMSw2Ny45LDk2LjIsNjguMyw5Ni4zLDY4LjZ6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgZD0iTTg0LDcyLjJjMCwwLDAtMC4xLDAtMC4xYzAuOS0wLjIsMi45LTAuNCw0LjcsMC42YzEuMSwwLjcsMS45LDEuNSwyLjQsMi4zCgkJCQljMC40LDAuNSwwLjYsMSwwLjcsMS4zYy0wLjQsMC4xLTEsMC4yLTEuNywwLjNjLTEsMC0yLjEtMC4xLTMuMi0wLjhzLTEuOS0xLjYtMi40LTIuNUM4NC4yLDcyLjgsODQuMSw3Mi40LDg0LDcyLjJ6Ii8+CgkJPC9nPgoJPC9nPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMTE2LjMsNjYuOGwtMS40LDJsLTAuOC0wLjhsLTAuNi0wLjdsMCwwLjlsLTAuMSw4LjJoLTYuOAoJCQkJbC0wLjEtOC4ybDAtMC45bC0wLjYsMC43bC0wLjgsMC44bC0xLjQtMmwyLjYtMi45YzAuMS0wLjEsMC4yLTAuMSwwLjMtMC4xaDEuM2wwLjQsMC43YzAuNywxLjMsMi42LDEuMywzLjMtMC4xbDAuMy0wLjZoMS4yCgkJCQljMC4xLDAsMC4yLDAsMC4zLDAuMWwwLjMtMC4zbC0wLjMsMC4zTDExNi4zLDY2Ljh6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgZD0iTTExMC4xLDY3LjdoMnYwLjljMCwwLjQtMC40LDAuNy0xLDAuN2MtMC42LDAtMS0wLjMtMS0wLjdMMTEwLjEsNjcuN0wxMTAuMSw2Ny43eiIvPgoJCTwvZz4KCTwvZz4KCTxnPgoJCTxnPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM2QUE5REQiIGQ9Ik0xMjYuOCw3NC4zYzAsMS4yLTEsMi4yLTIuMiwyLjJzLTIuMi0xLTIuMi0yLjJzMS0yLjIsMi4yLTIuMlMxMjYuOCw3My4xLDEyNi44LDc0LjN6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgZD0iTTEzNy42LDc0LjNjMCwxLjItMSwyLjItMi4yLDIuMmMtMS4yLDAtMi4yLTEtMi4yLTIuMnMxLTIuMiwyLjItMi4yCgkJCQlDMTM2LjYsNzIuMSwxMzcuNiw3My4xLDEzNy42LDc0LjN6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgZD0iTTEyNi44LDY0LjR2OS45Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgZD0iTTEzNy43LDY0LjR2OS45Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgZD0iTTEyNi44LDYzLjVoMTAuOHYyLjdoLTEwLjhDMTI2LjgsNjYuMiwxMjYuOCw2My41LDEyNi44LDYzLjV6Ii8+CgkJPC9nPgoJPC9nPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGZpbGw9IiM2QUE5REQiIGQ9Ik0xNzAuOCw2My4xTDE3MC44LDYzLjFjLTAuMywwLTAuNSwwLTAuOCwwYy0yLjEsMC00LDEtNS4zLDIuNWwtMC4xLDBsLTAuMS0wLjFsLTEtMS4ybC0wLjMsMy40bDMuNCwwLjMKCQkJCWwtMS4xLTEuM2wtMC4xLTAuMWwwLjEtMC4xYzEuMS0xLjQsMy0yLjMsNS0yLjFsMCwwYzMuMiwwLjMsNS41LDMuMSw1LjIsNi4zYy0wLjMsMy0zLjEsNS4zLTYuMSw1LjFjLTMuMS0wLjItNS40LTIuOS01LjMtNgoJCQkJbC0xLjMtMC4xYy0wLjIsMy44LDIuNiw3LjEsNi4zLDcuNGMzLjksMC4zLDcuMy0yLjYsNy42LTYuNUMxNzcuMiw2Ni44LDE3NC40LDYzLjUsMTcwLjgsNjMuMXoiLz4KCQkJPHBhdGggZmlsbD0iIzZBQTlERCIgZD0iTTE3MC4zLDY3LjRjMC0wLjMtMC4zLTAuNi0wLjYtMC42cy0wLjYsMC4zLTAuNiwwLjZ2My4yYzAsMC4yLDAuMSwwLjMsMC4yLDAuNGMwLjEsMC4xLDAuMywwLjIsMC40LDAuMgoJCQkJaDIuNGMwLjQsMCwwLjYtMC4zLDAuNi0wLjZTMTcyLjQsNzAsMTcyLDcwaC0xLjZoLTAuMnYtMC4yTDE3MC4zLDY3LjRMMTcwLjMsNjcuNHoiLz4KCQk8L2c+Cgk8L2c+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNkFBOUREIiBkPSJNMTg2LjIsNjMuNGg3LjdjMS41LDAsMi43LDEuMiwyLjcsMi43djcuN2MwLDEuNS0xLjIsMi43LTIuNywyLjdoLTcuNwoJCQkJYy0xLjUsMC0yLjctMS4yLTIuNy0yLjd2LTcuN0MxODMuNCw2NC43LDE4NC43LDYzLjQsMTg2LjIsNjMuNHoiLz4KCQkJPGVsbGlwc2UgZmlsbD0iIzZBQTlERCIgY3g9IjE4NiIgY3k9IjY4LjkiIHJ4PSIwLjciIHJ5PSIwLjciLz4KCQkJPGVsbGlwc2UgZmlsbD0iIzZBQTlERCIgY3g9IjE5NCIgY3k9IjY2LjciIHJ4PSIwLjciIHJ5PSIwLjciLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNkFBOUREIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0xODYsNzMuM2wwLjQtMC4zYzAuNC0wLjMsMS0wLjMsMS41LTAuMWwxLDAuNAoJCQkJYzAuNSwwLjIsMSwwLjIsMS41LTAuMWwwLjgtMC41YzAuNC0wLjMsMS0wLjMsMS41LTAuMWwxLjgsMC44Ii8+CgkJPC9nPgoJPC9nPgoJPHBhdGggZmlsbD0iIzZBQTlERCIgc3Ryb2tlPSIjNkFBOUREIiBzdHJva2Utd2lkdGg9IjAuMjUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTE1Niw2NC4zYy0wLjItMC4xLTAuNC0wLjEtMC41LDAKCQljMCwwLTAuMiwwLjEtMC45LDAuMmMtMC43LDAtMi40LTAuMS0zLjgtMC42Yy0wLjgtMC4zLTEuNy0wLjUtMi41LTAuNWMtMC4yLDAtMC40LDAtMC41LDBjLTEuMywwLTIuNSwwLjMtMy42LDEKCQljLTAuMiwwLjEtMC4yLDAuMi0wLjIsMC40djExLjZjMCwwLjMsMC4xLDAuNSwwLjMsMC41YzAuNiwwLDAuNS0wLjQsMC41LTAuNnYtNS43YzAuNy0wLjMsMy4yLTEuMSw1LjgtMC4xCgkJYzEuNiwwLjYsMy41LDAuNyw0LjMsMC43YzAuOCwwLDEuMy0wLjMsMS4zLTAuM2MwLjItMC4xLDAuMy0wLjIsMC4zLTAuNHYtNS43QzE1Ni4yLDY0LjYsMTU2LjEsNjQuNCwxNTYsNjQuM3ogTTE1NS42LDcwLjIKCQljLTAuMSwwLTAuNywwLjEtMSwwLjFjLTAuNywwLTIuNC0wLjEtMy44LTAuNmMtMi41LTEtNS0wLjUtNi4yLTAuMXYtNC45YzAuOS0wLjUsMi4yLTAuNywzLjItMC43YzAuMSwwLDAuMywwLDAuNCwwCgkJYzAuNywwLDEuNSwwLjIsMi4yLDAuNGMxLjYsMC42LDMuNSwwLjcsNC4zLDAuN2MwLjIsMCwwLjgsMCwxLTAuMVY3MC4yeiIvPgoJPGc+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNkFBOUREIiBkPSJNNDguMSw2My41aDMuN2MyLjUsMCw0LjUsMiw0LjUsNC41YzAsMC41LTAuNCwwLjktMC45LDAuOUg0NC41Yy0wLjUsMC0wLjktMC40LTAuOS0wLjkKCQkJQzQzLjYsNjUuNSw0NS42LDYzLjUsNDguMSw2My41eiIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNNDMuNSw2OC44Yy0wLjIsMC4xLTAuNSwxLjIsMCwxLjVjMS40LDAuOSw4LjUsMC44LDExLjMsMC42CgkJCWMwLjgtMC4xLDEuNi0wLjQsMS43LTEuMmMwLTAuMy0wLjEtMC42LTAuNi0wLjkiLz4KCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM2QUE5REQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTQzLjUsNzAuNkw0My4zLDcxYy0wLjIsMC41LDAuMiwxLDAuNywwLjljMC4zLTAuMSwwLjUsMC4xLDAuNywwLjMKCQkJbDAuMSwwLjJjMC4zLDAuNSwxLDAuNiwxLjUsMC4ybDAsMGMwLjMtMC4yLDAuNy0wLjMsMS0wLjJsMC44LDAuM2MwLjQsMC4yLDAuOCwwLjEsMS4yLDBsMC41LTAuMmMwLjQtMC4yLDAuOS0wLjIsMS4zLDBsMC41LDAuMgoJCQljMC40LDAuMiwwLjgsMC4yLDEuMi0wLjFsMC4yLTAuMWMwLjMtMC4yLDAuOC0wLjIsMS4xLDAuMWwwLjIsMC4yYzAuMywwLjMsMC44LDAuMiwxLTAuMmwwLjEtMC4yYzAuMS0wLjIsMC0wLjMsMC4yLTAuMwoJCQljMC41LDAsMS4yLTAuMywxLjEtMC43bC0wLjQtMS4xIi8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNkFBOUREIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik00My41LDcyLjJjLTAuMSwwLjItMC4zLDAuOCwwLDEuMWMwLjMsMC40LDMsMS4xLDYuNCwxLjEKCQkJYzIuMiwwLDQuNi0wLjMsNi0wLjZjMC41LTAuMSwwLjktMC40LDAuOC0wLjljMC0wLjItMC4yLTAuNS0wLjQtMC43Ii8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNkFBOUREIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik00My41LDczLjNjMCwwLjUsMC42LDIuMywxLjMsMi43YzEuOCwwLjgsNS43LDAuNyw4LjEsMC41CgkJCWMxLjMtMC4xLDIuNS0wLjcsMy4yLTEuOGMwLjMtMC41LDAuNS0xLDAuNS0xLjQiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjNkFBOUREIiBjeD0iNTEuNiIgY3k9IjY2LjUiIHJ4PSIwLjMiIHJ5PSIwLjQiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjNkFBOUREIiBjeD0iNTMiIGN5PSI2NSIgcng9IjAuMyIgcnk9IjAuNCIvPgoJCTxlbGxpcHNlIGZpbGw9IiM2QUE5REQiIGN4PSI1MyIgY3k9IjY3LjIiIHJ4PSIwLjMiIHJ5PSIwLjQiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjNkFBOUREIiBjeD0iNTQuMyIgY3k9IjY2LjUiIHJ4PSIwLjMiIHJ5PSIwLjQiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjNkFBOUREIiBjeD0iNTAuOSIgY3k9IjY1IiByeD0iMC4zIiByeT0iMC40Ii8+Cgk8L2c+Cgk8Zz4KCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM2QUE5REQiIGQ9Ik0yNC4yLDcxdi03LjZjMC4xLDAuMSwwLjgsMC45LDIuOCwzLjFjMi41LTEuNyw1LjYtMC43LDYuOSwwbDIuNC0zLjF2Ny4xCgkJCWMwLDEuMi0wLjEsMi41LTAuOSwzLjRjLTEsMS4yLTIuNywyLjUtNS4zLDIuNWMtMi45LDAtNC41LTEuNS01LjMtMi45QzI0LjIsNzIuOSwyNC4yLDcyLDI0LjIsNzF6Ii8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNkFBOUREIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0yMS4yLDcwLjFsNS40LDEuMiIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMjEuMiw3NC4xbDUuNC0xLjIiLz4KCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM2QUE5REQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTM4LjgsNzAuMWwtNS40LDEuMiIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMzguOCw3NC4xbC01LjQtMS4yIi8+CgkJPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiM2QUE5REQiIGQ9Ik0yOS41LDcyLjRMMjksNzEuN2MtMC4yLTAuMywwLTAuNiwwLjMtMC42aDEuNAoJCQljMC4zLDAsMC41LDAuNCwwLjMsMC42bC0wLjcsMWwwLDBjLTAuNywxLjItMi42LDEuMS0zLjEtMC4zbC0wLjEtMC4yYy0wLjEtMC4yLDAtMC40LDAuMi0wLjVjMC4yLTAuMSwwLjQsMCwwLjUsMC4ybDAuMSwwLjIKCQkJQzI4LjMsNzIuOCwyOS4xLDcyLjksMjkuNSw3Mi40eiIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMzIuNCw3Mi4xbC0wLjEsMC4yYy0wLjQsMS0xLjgsMS4xLTIuMywwLjIiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjNkFBOUREIiBjeD0iMjcuNiIgY3k9IjY5LjciIHJ4PSIwLjciIHJ5PSIwLjciLz4KCQk8ZWxsaXBzZSBmaWxsPSIjNkFBOUREIiBjeD0iMzIuNCIgY3k9IjY5LjciIHJ4PSIwLjciIHJ5PSIwLjciLz4KCTwvZz4KPC9nPgo8Zz4KCTxwYXRoIGZpbGw9IiM4Njg2ODYiIHN0cm9rZT0iIzg2ODY4NiIgc3Ryb2tlLXdpZHRoPSIwLjEiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTEyLjgsOS41YzAuNiwwLDEuMS0wLjUsMS4xLTEuMgoJCWMwLTAuNi0wLjUtMS4xLTEuMS0xLjFjLTAuNiwwLTEuMiwwLjUtMS4yLDEuMVMxMi4yLDkuNSwxMi44LDkuNXogTTEyLjgsNy45YzAuMiwwLDAuNCwwLjIsMC40LDAuNGMwLDAuMi0wLjIsMC40LTAuNCwwLjQKCQljLTAuMiwwLTAuNC0wLjItMC40LTAuNEMxMi40LDguMSwxMi42LDcuOSwxMi44LDcuOXoiLz4KCTxwYXRoIGZpbGw9IiM4Njg2ODYiIHN0cm9rZT0iIzg2ODY4NiIgc3Ryb2tlLXdpZHRoPSIwLjEiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTcuMiw5LjVjMC42LDAsMS4yLTAuNSwxLjItMS4yCgkJYzAtMC42LTAuNS0xLjEtMS4yLTEuMWMtMC42LDAtMS4xLDAuNS0xLjEsMS4xUzYuNiw5LjUsNy4yLDkuNXogTTcuMiw3LjljMC4yLDAsMC40LDAuMiwwLjQsMC40YzAsMC4yLTAuMiwwLjQtMC40LDAuNAoJCUM3LDguNyw2LjgsOC41LDYuOCw4LjNDNi44LDguMSw3LDcuOSw3LjIsNy45eiIvPgoJPHBhdGggZmlsbD0iIzg2ODY4NiIgc3Ryb2tlPSIjODY4Njg2IiBzdHJva2Utd2lkdGg9IjAuMSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMTQuNiwxMS4yYy0wLjEtMC4xLTAuMi0wLjItMC4zLTAuMkg1LjcKCQljLTAuMSwwLTAuMiwwLjEtMC4zLDAuMmMtMC4xLDAuMS0wLjEsMC4yLDAsMC40YzAuNywyLDIuNSwzLjMsNC42LDMuM3MzLjktMS4zLDQuNi0zLjNDMTQuNywxMS40LDE0LjcsMTEuMywxNC42LDExLjJ6IE0xMCwxNC4xCgkJYy0xLjYsMC0zLTAuOS0zLjctMi4yaDcuM0MxMywxMy4yLDExLjYsMTQuMSwxMCwxNC4xeiIvPgoJPHBhdGggZmlsbD0iIzg2ODY4NiIgc3Ryb2tlPSIjODY4Njg2IiBzdHJva2Utd2lkdGg9IjAuMSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMTAsM2MtMy44LDAtNywzLjEtNyw3czMuMSw3LDcsN3M3LTMuMSw3LTcKCQlTMTMuOCwzLDEwLDN6IE0xMCwxNi4yYy0zLjQsMC02LjItMi44LTYuMi02LjJTNi42LDMuOCwxMCwzLjhzNi4yLDIuOCw2LjIsNi4yUzEzLjQsMTYuMiwxMCwxNi4yeiIvPgo8L2c+CjxnIGlkPSJDYXJfMDAwMDAwMTg5MzUzOTUwODU0MTM0MTM3NTAwMDAwMDA4MjUyNzM4Nzc4NDI3NzU3MTVfIj4KCTxnPgoJCTxnPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM4Njg2ODYiIGQ9Ik02NC4xLDEzLjRsMi4zLDBjMC4yLDAsMC40LDAuMiwwLjQsMC40djIuMWMwLDAuMi0wLjIsMC40LTAuNCwwLjRoLTIuMwoJCQkJYy0wLjIsMC0wLjQtMC4yLTAuNC0wLjR2LTIuMUM2My43LDEzLjYsNjMuOCwxMy40LDY0LjEsMTMuNHoiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODY4Njg2IiBkPSJNNzMuNSwxMy40aDIuNGMwLjIsMCwwLjQsMC4yLDAuNCwwLjR2Mi4xYzAsMC4yLTAuMiwwLjQtMC40LDAuNGgtMi40CgkJCQljLTAuMiwwLTAuNC0wLjItMC40LTAuNGwwLTIuMUM3My4xLDEzLjYsNzMuMywxMy40LDczLjUsMTMuNHoiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODY4Njg2IiBkPSJNNjMuNyw4LjRoMTIuNnY1SDYzLjdWOC40eiIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM4Njg2ODYiIGQ9Ik02NS41LDMuNmg4LjljMSwwLDEuOSwwLjgsMS45LDEuOXYzLjFINjMuN1Y1LjVDNjMuNyw0LjQsNjQuNSwzLjYsNjUuNSwzLjZ6Ii8+CgkJCTxlbGxpcHNlIGZpbGw9IiM4Njg2ODYiIGN4PSI2Ni4yIiBjeT0iMTAuOSIgcng9IjAuOSIgcnk9IjAuOSIvPgoJCQk8ZWxsaXBzZSBmaWxsPSIjODY4Njg2IiBjeD0iNzMuOCIgY3k9IjEwLjkiIHJ4PSIwLjkiIHJ5PSIwLjkiLz4KCQk8L2c+Cgk8L2c+CjwvZz4KPGcgaWQ9IkFjdGl2aXRpZXMiPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzg2ODY4NiIgZD0iTTk2LjQsMTBjMCwzLjYtMi45LDYuNS02LjQsNi41cy02LjQtMi45LTYuNC02LjVzMi45LTYuNSw2LjQtNi41Uzk2LjQsNi40LDk2LjQsMTB6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzg2ODY4NiIgZD0iTTk2LjMsOC42YzAsMCwwLDAuMSwwLDAuMWMtMC45LDAuMS0yLjksMC4xLTQuNi0xLjJjLTEuMS0wLjgtMi0xLjctMi42LTIuNQoJCQkJYy0wLjMtMC40LTAuNi0wLjgtMC43LTEuMWMtMC4xLTAuMS0wLjEtMC4yLTAuMS0wLjJjMC41LTAuMSwxLjItMC4yLDItMC4yYzEuMiwwLDIuNSwwLjMsMy41LDEuMWMxLDAuOCwxLjcsMS44LDIuMSwyLjgKCQkJCUM5Ni4xLDcuOSw5Ni4yLDguMyw5Ni4zLDguNnoiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODY4Njg2IiBkPSJNODQsMTIuMWMwLDAsMC0wLjEsMC0wLjFjMC45LTAuMiwyLjktMC40LDQuNywwLjZjMS4xLDAuNiwxLjksMS41LDIuNCwyLjMKCQkJCWMwLjQsMC41LDAuNiwxLDAuNywxLjNjLTAuNCwwLjEtMSwwLjItMS43LDAuM2MtMSwwLTIuMS0wLjEtMy4yLTAuOGMtMS4xLTAuNi0xLjktMS42LTIuNC0yLjVDODQuMiwxMi44LDg0LjEsMTIuNCw4NCwxMi4xeiIvPgoJCTwvZz4KCTwvZz4KPC9nPgo8ZyBpZD0iT2JqZWN0c18wMDAwMDA2NDMxMjM3MTczOTEzMDMxNTI1MDAwMDAxMDIyNTg4OTAzMjIyODYzMjk3NV8iPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzg2ODY4NiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMTE2LjMsNi44bC0xLjQsMkwxMTQuMSw4bC0wLjYtMC43bDAsMC45bC0wLjEsOC4yaC02LjhsLTAuMS04LjIKCQkJCWwwLTAuOUwxMDUuOSw4bC0wLjgsMC44bC0xLjQtMmwyLjYtMi45YzAuMS0wLjEsMC4yLTAuMSwwLjMtMC4xaDEuM2wwLjQsMC43YzAuNywxLjMsMi42LDEuMywzLjMtMC4xbDAuMy0wLjZoMS4yCgkJCQljMC4xLDAsMC4yLDAsMC4zLDAuMWwwLjMtMC4zbC0wLjMsMC4zTDExNi4zLDYuOHoiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODY4Njg2IiBkPSJNMTEwLjEsNy43aDJ2MC45YzAsMC40LTAuNCwwLjctMSwwLjdjLTAuNiwwLTEtMC4zLTEtMC43TDExMC4xLDcuN0wxMTAuMSw3Ljd6Ii8+CgkJPC9nPgoJPC9nPgo8L2c+CjxnIGlkPSJTeW1ib2xzXzAwMDAwMDk2NzQ2OTA3ODY5OTI5OTIxMTgwMDAwMDA2NDg0ODEyODMwMjgyNTgyNDE2XyI+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODY4Njg2IiBkPSJNMTI2LjgsMTQuM2MwLDEuMi0xLDIuMi0yLjIsMi4ycy0yLjItMS0yLjItMi4yczEtMi4yLDIuMi0yLjJTMTI2LjgsMTMuMSwxMjYuOCwxNC4zeiIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM4Njg2ODYiIGQ9Ik0xMzcuNiwxNC4zYzAsMS4yLTEsMi4yLTIuMiwyLjJjLTEuMiwwLTIuMi0xLTIuMi0yLjJzMS0yLjIsMi4yLTIuMgoJCQkJQzEzNi42LDEyLjEsMTM3LjYsMTMuMSwxMzcuNiwxNC4zeiIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM4Njg2ODYiIGQ9Ik0xMjYuOCw0LjR2OS45Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzg2ODY4NiIgZD0iTTEzNy43LDQuNHY5LjkiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODY4Njg2IiBkPSJNMTI2LjgsMy41aDEwLjh2Mi43aC0xMC44QzEyNi44LDYuMiwxMjYuOCwzLjUsMTI2LjgsMy41eiIvPgoJCTwvZz4KCTwvZz4KPC9nPgo8ZyBpZD0iUmVjZW50cyI+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZmlsbD0iIzg2ODY4NiIgZD0iTTE3MC44LDMuMUwxNzAuOCwzLjFjLTAuMywwLTAuNSwwLTAuOCwwYy0yLjEsMC00LDEtNS4zLDIuNWwtMC4xLDBsLTAuMS0wLjFsLTEtMS4ybC0wLjMsMy40bDMuNCwwLjMKCQkJCWwtMS4xLTEuM2wtMC4xLTAuMWwwLjEtMC4xYzEuMS0xLjQsMy0yLjMsNS0yLjFsMCwwYzMuMiwwLjMsNS41LDMuMSw1LjIsNi4zYy0wLjMsMy0zLjEsNS4zLTYuMSw1LjFjLTMuMS0wLjItNS40LTIuOS01LjMtNgoJCQkJTDE2Myw5LjVjLTAuMiwzLjgsMi42LDcuMSw2LjMsNy40YzMuOSwwLjQsNy4zLTIuNiw3LjYtNi41QzE3Ny4yLDYuOCwxNzQuNCwzLjUsMTcwLjgsMy4xeiIvPgoJCQk8cGF0aCBmaWxsPSIjODY4Njg2IiBkPSJNMTcwLjMsNy40YzAtMC4zLTAuMy0wLjYtMC42LTAuNlMxNjksNy4xLDE2OSw3LjR2My4yYzAsMC4yLDAuMSwwLjMsMC4yLDAuNGMwLjEsMC4xLDAuMywwLjIsMC40LDAuMgoJCQkJaDIuNGMwLjQsMCwwLjYtMC4zLDAuNi0wLjZzLTAuMy0wLjYtMC42LTAuNmgtMS42aC0wLjJWOS44TDE3MC4zLDcuNEwxNzAuMyw3LjR6Ii8+CgkJPC9nPgoJPC9nPgo8L2c+CjxnIGlkPSJDdXN0b21fMDAwMDAxODEwODcyMjk0MzQzMDIzMzY3ODAwMDAwMDUxNTIyNzc5NDU5NDA2NzQ0ODhfIj4KCTxnPgoJCTxnPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM4Njg2ODYiIGQ9Ik0xODYuMiwzLjRoNy43YzEuNSwwLDIuNywxLjIsMi43LDIuN3Y3LjdjMCwxLjUtMS4yLDIuNy0yLjcsMi43aC03LjcKCQkJCWMtMS41LDAtMi43LTEuMi0yLjctMi43VjYuMUMxODMuNCw0LjYsMTg0LjcsMy40LDE4Ni4yLDMuNHoiLz4KCQkJPGVsbGlwc2UgZmlsbD0iIzg2ODY4NiIgY3g9IjE4NiIgY3k9IjguOSIgcng9IjAuNyIgcnk9IjAuNyIvPgoJCQk8ZWxsaXBzZSBmaWxsPSIjODY4Njg2IiBjeD0iMTk0IiBjeT0iNi43IiByeD0iMC43IiByeT0iMC43Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzg2ODY4NiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMTg2LDEzLjNsMC40LTAuM2MwLjQtMC4zLDEtMC4zLDEuNS0wLjFsMSwwLjQKCQkJCWMwLjUsMC4yLDEsMC4yLDEuNS0wLjFsMC44LTAuNWMwLjQtMC4zLDEtMC4zLDEuNS0wLjFsMS44LDAuOCIvPgoJCTwvZz4KCTwvZz4KPC9nPgo8cGF0aCBmaWxsPSIjODY4Njg2IiBzdHJva2U9IiM4Njg2ODYiIHN0cm9rZS13aWR0aD0iMC4yNSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMTU2LDQuM2MtMC4yLTAuMS0wLjQtMC4xLTAuNSwwCgljMCwwLTAuMiwwLjEtMC45LDAuMWMtMC43LDAtMi40LTAuMS0zLjgtMC42Yy0wLjgtMC4zLTEuNy0wLjUtMi41LTAuNWMtMC4yLDAtMC40LDAtMC41LDBjLTEuMywwLTIuNSwwLjMtMy42LDEKCWMtMC4yLDAuMS0wLjIsMC4yLTAuMiwwLjR2MTEuNmMwLDAuMywwLjEsMC41LDAuMywwLjVjMC42LDAsMC41LTAuNCwwLjUtMC42di01LjdjMC43LTAuMywzLjItMS4xLDUuOC0wLjFjMS42LDAuNiwzLjUsMC43LDQuMywwLjcKCWMwLjgsMCwxLjMtMC4zLDEuMy0wLjNjMC4yLTAuMSwwLjMtMC4yLDAuMy0wLjRWNC43QzE1Ni4yLDQuNSwxNTYuMSw0LjQsMTU2LDQuM3ogTTE1NS42LDEwLjJjLTAuMSwwLTAuNywwLjEtMSwwLjEKCWMtMC43LDAtMi40LTAuMS0zLjgtMC42Yy0yLjUtMS01LTAuNS02LjItMC4xVjQuN2MwLjktMC41LDIuMi0wLjcsMy4yLTAuN2MwLjEsMCwwLjMsMCwwLjQsMGMwLjcsMCwxLjUsMC4yLDIuMiwwLjQKCWMxLjYsMC42LDMuNSwwLjcsNC4zLDAuN2MwLjIsMCwwLjgsMCwxLTAuMVYxMC4yeiIvPgo8ZyBpZD0iRm9vZCI+Cgk8ZyBpZD0iTGF5ZXJfMTIiPgoJCTxnPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM4Njg2ODYiIGQ9Ik00OC4xLDMuNWgzLjdjMi41LDAsNC41LDIsNC41LDQuNWMwLDAuNS0wLjQsMC45LTAuOSwwLjlINDQuNWMtMC41LDAtMC45LTAuNC0wLjktMC45CgkJCQlDNDMuNiw1LjUsNDUuNiwzLjUsNDguMSwzLjV6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzg2ODY4NiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNNDMuNSw4LjdjLTAuMiwwLjEtMC41LDEuMiwwLDEuNWMxLjQsMC45LDguNSwwLjgsMTEuMywwLjYKCQkJCWMwLjgtMC4xLDEuNi0wLjQsMS43LTEuMmMwLTAuMy0wLjEtMC42LTAuNi0wLjkiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODY4Njg2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik00My41LDEwLjZMNDMuMywxMWMtMC4yLDAuNSwwLjIsMSwwLjcsMC45CgkJCQljMC4zLTAuMSwwLjUsMC4xLDAuNywwLjNsMC4xLDAuMmMwLjMsMC41LDEsMC42LDEuNSwwLjJsMCwwYzAuMy0wLjIsMC43LTAuMywxLTAuMmwwLjgsMC4zYzAuNCwwLjEsMC44LDAuMSwxLjIsMGwwLjUtMC4yCgkJCQljMC40LTAuMiwwLjktMC4yLDEuMywwbDAuNSwwLjJjMC40LDAuMiwwLjgsMC4xLDEuMi0wLjFsMC4yLTAuMWMwLjMtMC4yLDAuOC0wLjEsMS4xLDAuMWwwLjIsMC4yYzAuMywwLjMsMC44LDAuMiwxLTAuMmwwLjEtMC4yCgkJCQljMC4xLTAuMiwwLTAuMywwLjItMC40YzAuNSwwLDEuMi0wLjMsMS4xLTAuN2wtMC40LTEuMSIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM4Njg2ODYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTQzLjUsMTIuMWMtMC4xLDAuMi0wLjMsMC44LDAsMS4xYzAuMywwLjQsMywxLjEsNi40LDEuMQoJCQkJYzIuMiwwLDQuNi0wLjMsNi0wLjZjMC41LTAuMSwwLjktMC40LDAuOC0wLjljMC0wLjItMC4yLTAuNS0wLjQtMC43Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzg2ODY4NiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNNDMuNSwxMy4zYzAsMC41LDAuNiwyLjQsMS4zLDIuNmMxLjgsMC44LDUuNywwLjcsOC4xLDAuNQoJCQkJYzEuMy0wLjEsMi41LTAuNywzLjItMS44YzAuMy0wLjUsMC41LTEsMC41LTEuNCIvPgoJCQk8ZWxsaXBzZSBmaWxsPSIjODY4Njg2IiBjeD0iNTEuNiIgY3k9IjYuNSIgcng9IjAuMyIgcnk9IjAuNCIvPgoJCQk8ZWxsaXBzZSBmaWxsPSIjODY4Njg2IiBjeD0iNTMiIGN5PSI0LjkiIHJ4PSIwLjMiIHJ5PSIwLjQiLz4KCQkJPGVsbGlwc2UgZmlsbD0iIzg2ODY4NiIgY3g9IjUzIiBjeT0iNy4yIiByeD0iMC4zIiByeT0iMC40Ii8+CgkJCTxlbGxpcHNlIGZpbGw9IiM4Njg2ODYiIGN4PSI1NC4zIiBjeT0iNi41IiByeD0iMC4zIiByeT0iMC40Ii8+CgkJCTxlbGxpcHNlIGZpbGw9IiM4Njg2ODYiIGN4PSI1MC45IiBjeT0iNC45IiByeD0iMC4zIiByeT0iMC40Ii8+CgkJPC9nPgoJPC9nPgo8L2c+CjxnIGlkPSJBbmltYWxzIj4KCTxnPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzg2ODY4NiIgZD0iTTI0LjIsMTFWMy41YzAuMSwwLjEsMC44LDAuOSwyLjgsMy4xYzIuNS0xLjcsNS42LTAuNyw2LjksMGwyLjQtMy4xdjcuMQoJCQljMCwxLjItMC4xLDIuNS0wLjksMy40Yy0xLDEuMi0yLjcsMi41LTUuMywyLjVjLTIuOSwwLTQuNS0xLjUtNS4zLTIuOUMyNC4yLDEyLjksMjQuMiwxMS45LDI0LjIsMTF6Ii8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODY4Njg2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0yMS4yLDEwbDUuNCwxLjIiLz4KCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM4Njg2ODYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTIxLjIsMTQuMWw1LjQtMS4yIi8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODY4Njg2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0zOC44LDEwbC01LjQsMS4yIi8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODY4Njg2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0zOC44LDE0LjFsLTUuNC0xLjIiLz4KCQk8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iIzg2ODY4NiIgZD0iTTI5LjUsMTIuNEwyOSwxMS43Yy0wLjItMC4zLDAtMC42LDAuMy0wLjZoMS40CgkJCWMwLjMsMCwwLjUsMC40LDAuMywwLjZsLTAuNywxbDAsMGMtMC43LDEuMi0yLjYsMS4xLTMuMS0wLjNsLTAuMS0wLjJjLTAuMS0wLjIsMC0wLjQsMC4yLTAuNXMwLjQsMCwwLjUsMC4ybDAuMSwwLjIKCQkJQzI4LjMsMTIuNywyOS4xLDEyLjksMjkuNSwxMi40eiIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzg2ODY4NiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMzIuNCwxMi4xbC0wLjEsMC4yYy0wLjQsMS0xLjgsMS4xLTIuMywwLjIiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjODY4Njg2IiBjeD0iMjcuNiIgY3k9IjkuNyIgcng9IjAuNyIgcnk9IjAuNyIvPgoJCTxlbGxpcHNlIGZpbGw9IiM4Njg2ODYiIGN4PSIzMi40IiBjeT0iOS43IiByeD0iMC43IiByeT0iMC43Ii8+Cgk8L2c+CjwvZz4KPC9zdmc+";
function Ju(f) {
  var e, a = f.isActiveCategory, n = f.category, i = f.allowNavigation, t = f.categoryConfig, u = f.onClick;
  return l(Hf, {
    tabIndex: i ? 0 : -1,
    className: p(Uu.catBtn, sf.categoryBtn, "epr-icn-" + n, (e = {}, e[y.active] = a, e)),
    onClick: u,
    "aria-label": Bn(t),
    "aria-selected": a,
    role: "tab",
    "aria-controls": "epr-category-nav-id"
  });
}
var tn = {
  backgroundPositionY: "calc(var(--epr-category-navigation-button-size) * 3)"
}, Ru = {
  backgroundPositionY: "calc(var(--epr-category-navigation-button-size) * 2)"
}, un = {
  ":not(.epr-search-active)": {
    catBtn: {
      ":hover": tn,
      "&.epr-active": tn
    }
  }
}, Uu = /* @__PURE__ */ I.create(/* @__PURE__ */ k({
  catBtn: {
    ".": "epr-cat-btn",
    display: "inline-block",
    transition: "opacity 0.2s ease-in-out",
    position: "relative",
    height: "var(--epr-category-navigation-button-size)",
    width: "var(--epr-category-navigation-button-size)",
    backgroundSize: "calc(var(--epr-category-navigation-button-size) * 10)",
    outline: "none",
    backgroundPosition: "0 0",
    backgroundImage: "url(" + Yu + ")",
    ":focus:before": {
      content: "",
      position: "absolute",
      top: "-2px",
      left: "-2px",
      right: "-2px",
      bottom: "-2px",
      border: "2px solid var(--epr-category-icon-active-color)",
      borderRadius: "50%"
    },
    // @ts-ignore
    "&.epr-icn-suggested": {
      backgroundPositionX: "calc(var(--epr-category-navigation-button-size) * -8)"
    },
    "&.epr-icn-custom": {
      backgroundPositionX: "calc(var(--epr-category-navigation-button-size) * -9)"
    },
    "&.epr-icn-activities": {
      backgroundPositionX: "calc(var(--epr-category-navigation-button-size) * -4)"
    },
    "&.epr-icn-animals_nature": {
      backgroundPositionX: "calc(var(--epr-category-navigation-button-size) * -1)"
    },
    "&.epr-icn-flags": {
      backgroundPositionX: "calc(var(--epr-category-navigation-button-size) * -7)"
    },
    "&.epr-icn-food_drink": {
      backgroundPositionX: "calc(var(--epr-category-navigation-button-size) * -2)"
    },
    "&.epr-icn-objects": {
      backgroundPositionX: "calc(var(--epr-category-navigation-button-size) * -5)"
    },
    "&.epr-icn-smileys_people": {
      backgroundPositionX: "0px"
    },
    "&.epr-icn-symbols": {
      backgroundPositionX: "calc(var(--epr-category-navigation-button-size) * -6)"
    },
    "&.epr-icn-travel_places": {
      backgroundPositionX: "calc(var(--epr-category-navigation-button-size) * -3)"
    }
  }
}, /* @__PURE__ */ nf("catBtn", Ru), {
  ".epr-dark-theme": /* @__PURE__ */ k({}, un),
  ".epr-auto-theme": /* @__PURE__ */ k({}, un)
}));
function Ou() {
  var f = A(null), e = f[0], a = f[1], n = Pu();
  _u(a);
  var i = ye(), t = e0(), u = sa(), r = Qu();
  return l("div", {
    className: p(Gu.nav),
    role: "tablist",
    "aria-label": "Category navigation",
    id: "epr-category-nav-id",
    ref: u
  }, t.map(function(d) {
    var c = ta(d), s = c === e;
    if (fu(d) && r)
      return null;
    var o = !i && !s;
    return l(Ju, {
      key: c,
      category: c,
      isActiveCategory: s,
      allowNavigation: o,
      categoryConfig: d,
      onClick: function() {
        a(c), n(c);
      }
    });
  }));
}
var Gu = /* @__PURE__ */ I.create({
  nav: {
    ".": "epr-category-nav",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: "var(--epr-header-padding)"
  },
  ".epr-search-active": {
    nav: {
      opacity: "0.3",
      cursor: "default",
      pointerEvents: "none"
    }
  },
  ".epr-main:has(input:not(:placeholder-shown))": {
    nav: {
      opacity: "0.3",
      cursor: "default",
      pointerEvents: "none"
    }
  }
}), B0 = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjgwcHgiIHZpZXdCb3g9IjAgMCAyMCA4MCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjAgODAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8cGF0aCBmaWxsPSIjODY4Njg2IiBkPSJNNi45OCwxMy41OWMwLjEsMC4xLDAuMjQsMC4xNSwwLjM3LDAuMTVzMC4yNy0wLjA1LDAuMzctMC4xNWwyLjQyLTIuNDJsMi40MywyLjQzCgljMC4xLDAuMSwwLjI0LDAuMTUsMC4zNywwLjE1YzAuMTQsMCwwLjI3LTAuMDUsMC4zNy0wLjE1YzAuMjEtMC4yMSwwLjIxLTAuNTQsMC0wLjc1bC0yLjQzLTIuNDNMMTMuMzIsOAoJYzAuMjEtMC4yMSwwLjIxLTAuNTQsMC0wLjc1Yy0wLjIxLTAuMjEtMC41NC0wLjIxLTAuNzUsMGwtMi40MiwyLjQyTDcuNzQsNy4yN2MtMC4yMS0wLjIxLTAuNTQtMC4yMS0wLjc1LDAKCWMtMC4yMSwwLjIxLTAuMjEsMC41NCwwLDAuNzVsMi40MSwyLjQxbC0yLjQyLDIuNDJDNi43NywxMy4wNSw2Ljc3LDEzLjM5LDYuOTgsMTMuNTlMNi45OCwxMy41OXoiLz4KPHBhdGggZmlsbD0iIzg2ODY4NiIgZD0iTTEwLjE1LDE4LjQzYzQuNDEsMCw4LTMuNTksOC04YzAtNC40MS0zLjU5LTgtOC04Yy00LjQxLDAtOCwzLjU5LTgsOEMyLjE1LDE0Ljg0LDUuNzQsMTguNDMsMTAuMTUsMTguNDN6CgkgTTEwLjE1LDMuNDljMy44MywwLDYuOTQsMy4xMSw2Ljk0LDYuOTRjMCwzLjgzLTMuMTEsNi45NC02Ljk0LDYuOTRjLTMuODMsMC02Ljk0LTMuMTEtNi45NC02Ljk0QzMuMjEsNi42LDYuMzMsMy40OSwxMC4xNSwzLjQ5CglMMTAuMTUsMy40OXoiLz4KPHBhdGggZmlsbD0iIzMzNzFCNyIgZD0iTTYuOTgsMzMuNTljMC4xLDAuMSwwLjI0LDAuMTUsMC4zNywwLjE1czAuMjctMC4wNSwwLjM3LTAuMTVsMi40Mi0yLjQybDIuNDMsMi40MwoJYzAuMSwwLjEsMC4yNCwwLjE1LDAuMzcsMC4xNWMwLjE0LDAsMC4yNy0wLjA1LDAuMzctMC4xNWMwLjIxLTAuMjEsMC4yMS0wLjU0LDAtMC43NWwtMi40My0yLjQzTDEzLjMyLDI4CgljMC4yMS0wLjIxLDAuMjEtMC41NCwwLTAuNzVjLTAuMjEtMC4yMS0wLjU0LTAuMjEtMC43NSwwbC0yLjQyLDIuNDJsLTIuNDEtMi40MWMtMC4yMS0wLjIxLTAuNTQtMC4yMS0wLjc1LDAKCWMtMC4yMSwwLjIxLTAuMjEsMC41NCwwLDAuNzVsMi40MSwyLjQxbC0yLjQyLDIuNDJDNi43NywzMy4wNSw2Ljc3LDMzLjM5LDYuOTgsMzMuNTlMNi45OCwzMy41OXoiLz4KPHBhdGggZmlsbD0iIzMzNzFCNyIgZD0iTTEwLjE1LDM4LjQzYzQuNDEsMCw4LTMuNTksOC04YzAtNC40MS0zLjU5LTgtOC04Yy00LjQxLDAtOCwzLjU5LTgsOEMyLjE1LDM0Ljg0LDUuNzQsMzguNDMsMTAuMTUsMzguNDN6CgkgTTEwLjE1LDIzLjQ5YzMuODMsMCw2Ljk0LDMuMTEsNi45NCw2Ljk0YzAsMy44My0zLjExLDYuOTQtNi45NCw2Ljk0Yy0zLjgzLDAtNi45NC0zLjExLTYuOTQtNi45NAoJQzMuMjEsMjYuNiw2LjMzLDIzLjQ5LDEwLjE1LDIzLjQ5TDEwLjE1LDIzLjQ5eiIvPgo8cGF0aCBmaWxsPSIjQzBDMEJGIiBkPSJNNi45OCw1My41OWMwLjEsMC4xLDAuMjQsMC4xNSwwLjM3LDAuMTVzMC4yNy0wLjA1LDAuMzctMC4xNWwyLjQyLTIuNDJsMi40MywyLjQzCgljMC4xLDAuMSwwLjI0LDAuMTUsMC4zNywwLjE1YzAuMTQsMCwwLjI3LTAuMDUsMC4zNy0wLjE1YzAuMjEtMC4yMSwwLjIxLTAuNTQsMC0wLjc1bC0yLjQzLTIuNDNMMTMuMzIsNDgKCWMwLjIxLTAuMjEsMC4yMS0wLjU0LDAtMC43NWMtMC4yMS0wLjIxLTAuNTQtMC4yMS0wLjc1LDBsLTIuNDIsMi40MmwtMi40MS0yLjQxYy0wLjIxLTAuMjEtMC41NC0wLjIxLTAuNzUsMAoJYy0wLjIxLDAuMjEtMC4yMSwwLjU0LDAsMC43NWwyLjQxLDIuNDFsLTIuNDIsMi40MkM2Ljc3LDUzLjA1LDYuNzcsNTMuMzksNi45OCw1My41OUw2Ljk4LDUzLjU5eiIvPgo8cGF0aCBmaWxsPSIjQzBDMEJGIiBkPSJNMTAuMTUsNTguNDNjNC40MSwwLDgtMy41OSw4LThjMC00LjQxLTMuNTktOC04LThjLTQuNDEsMC04LDMuNTktOCw4QzIuMTUsNTQuODQsNS43NCw1OC40MywxMC4xNSw1OC40M3oKCSBNMTAuMTUsNDMuNDljMy44MywwLDYuOTQsMy4xMSw2Ljk0LDYuOTRjMCwzLjgzLTMuMTEsNi45NC02Ljk0LDYuOTRjLTMuODMsMC02Ljk0LTMuMTEtNi45NC02Ljk0CglDMy4yMSw0Ni42LDYuMzMsNDMuNDksMTAuMTUsNDMuNDlMMTAuMTUsNDMuNDl6Ii8+CjxwYXRoIGZpbGw9IiM2QUE5REQiIGQ9Ik02Ljk4LDczLjU5YzAuMSwwLjEsMC4yNCwwLjE1LDAuMzcsMC4xNXMwLjI3LTAuMDUsMC4zNy0wLjE1bDIuNDItMi40MmwyLjQzLDIuNDMKCWMwLjEsMC4xLDAuMjQsMC4xNSwwLjM3LDAuMTVjMC4xNCwwLDAuMjctMC4wNSwwLjM3LTAuMTVjMC4yMS0wLjIxLDAuMjEtMC41NCwwLTAuNzVsLTIuNDMtMi40M0wxMy4zMiw2OAoJYzAuMjEtMC4yMSwwLjIxLTAuNTQsMC0wLjc1Yy0wLjIxLTAuMjEtMC41NC0wLjIxLTAuNzUsMGwtMi40MiwyLjQybC0yLjQxLTIuNDFjLTAuMjEtMC4yMS0wLjU0LTAuMjEtMC43NSwwCgljLTAuMjEsMC4yMS0wLjIxLDAuNTQsMCwwLjc1bDIuNDEsMi40MWwtMi40MiwyLjQyQzYuNzcsNzMuMDUsNi43Nyw3My4zOSw2Ljk4LDczLjU5TDYuOTgsNzMuNTl6Ii8+CjxwYXRoIGZpbGw9IiM2QUE5REQiIGQ9Ik0xMC4xNSw3OC40M2M0LjQxLDAsOC0zLjU5LDgtOGMwLTQuNDEtMy41OS04LTgtOGMtNC40MSwwLTgsMy41OS04LDhDMi4xNSw3NC44NCw1Ljc0LDc4LjQzLDEwLjE1LDc4LjQzegoJIE0xMC4xNSw2My40OWMzLjgzLDAsNi45NCwzLjExLDYuOTQsNi45NGMwLDMuODMtMy4xMSw2Ljk0LTYuOTQsNi45NGMtMy44MywwLTYuOTQtMy4xMS02Ljk0LTYuOTQKCUMzLjIxLDY2LjYsNi4zMyw2My40OSwxMC4xNSw2My40OUwxMC4xNSw2My40OXoiLz4KPC9zdmc+";
function Zu() {
  var f = j0();
  return l(Hf, {
    className: p(rn.btnClearSearch, sf.visibleOnSearchOnly),
    onClick: f,
    "aria-label": "Clear",
    title: "Clear"
  }, l("div", {
    className: p(rn.icnClearnSearch)
  }));
}
var Bu = {
  ":hover": {
    "> .epr-icn-clear-search": {
      backgroundPositionY: "-60px"
    }
  }
}, rn = /* @__PURE__ */ I.create(/* @__PURE__ */ k({
  btnClearSearch: {
    ".": "epr-btn-clear-search",
    position: "absolute",
    right: "var(--epr-search-bar-inner-padding)",
    height: "30px",
    width: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    top: "50%",
    transform: "translateY(-50%)",
    padding: "0",
    borderRadius: "50%",
    ":hover": {
      background: "var(--epr-hover-bg-color)"
    },
    ":focus": {
      background: "var(--epr-hover-bg-color)"
    }
  },
  icnClearnSearch: {
    ".": "epr-icn-clear-search",
    backgroundColor: "transparent",
    backgroundRepeat: "no-repeat",
    backgroundSize: "20px",
    height: "20px",
    width: "20px",
    backgroundImage: "url(" + B0 + ")",
    ":hover": {
      backgroundPositionY: "-20px"
    },
    ":focus": {
      backgroundPositionY: "-20px"
    }
  }
}, /* @__PURE__ */ nf("icnClearnSearch", {
  backgroundPositionY: "-40px"
}), /* @__PURE__ */ nf("btnClearSearch", Bu))), Pe = /* @__PURE__ */ E(y.emojiPicker) + " " + /* @__PURE__ */ E(y.emojiList), H0 = /* @__PURE__ */ ["button", E(y.emoji)].join(""), Hu = /* @__PURE__ */ E(y.category);
function Wu(f) {
  var e = f.value;
  if (!e)
    return null;
  var a = Fu(e);
  return l("style", null, `
    ` + Pe + " " + H0 + ` {
      display: none;
    }


    ` + Pe + " " + a + ` {
      display: flex;
    }

    ` + Pe + " " + Hu + ":not(:has(" + a + `)) {
      display: none;
    }
  `);
}
function Fu(f) {
  return [H0, '[data-full-name*="', Ve(f), '"]'].join("");
}
var Vu = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjQwcHgiIHZpZXdCb3g9IjAgMCAyMCA0MCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjAgNDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iIzg2ODY4NiIgZD0iTTEyLDguODFjMCwyLjA4LTEuNjgsMy43Ni0zLjc2LDMuNzZjLTIuMDgsMC0zLjc2LTEuNjgtMy43Ni0zLjc2CgljMC0yLjA4LDEuNjgtMy43NiwzLjc2LTMuNzZDMTAuMzIsNS4wNSwxMiw2LjczLDEyLDguODF6IE0xMS4yMywxMi43MmMtMC44MywwLjY0LTEuODcsMS4wMS0yLjk5LDEuMDFjLTIuNzIsMC00LjkyLTIuMi00LjkyLTQuOTIKCWMwLTIuNzIsMi4yLTQuOTIsNC45Mi00LjkyYzIuNzIsMCw0LjkyLDIuMiw0LjkyLDQuOTJjMCwxLjEzLTAuMzgsMi4xNi0xLjAxLDIuOTlsMy45NCwzLjkzYzAuMjUsMC4yNSwwLjI1LDAuNjYsMCwwLjkyCgljLTAuMjUsMC4yNS0wLjY2LDAuMjUtMC45MiwwTDExLjIzLDEyLjcyeiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI0MwQzBCRiIgZD0iTTEyLDI4LjgxYzAsMi4wOC0xLjY4LDMuNzYtMy43NiwzLjc2Yy0yLjA4LDAtMy43Ni0xLjY4LTMuNzYtMy43NgoJYzAtMi4wOCwxLjY4LTMuNzYsMy43Ni0zLjc2QzEwLjMyLDI1LjA1LDEyLDI2LjczLDEyLDI4LjgxeiBNMTEuMjMsMzIuNzJjLTAuODMsMC42NC0xLjg3LDEuMDEtMi45OSwxLjAxCgljLTIuNzIsMC00LjkyLTIuMi00LjkyLTQuOTJjMC0yLjcyLDIuMi00LjkyLDQuOTItNC45MmMyLjcyLDAsNC45MiwyLjIsNC45Miw0LjkyYzAsMS4xMy0wLjM4LDIuMTYtMS4wMSwyLjk5bDMuOTQsMy45MwoJYzAuMjUsMC4yNSwwLjI1LDAuNjYsMCwwLjkyYy0wLjI1LDAuMjUtMC42NiwwLjI1LTAuOTIsMEwxMS4yMywzMi43MnoiLz4KPC9zdmc+";
function Ku() {
  return l("div", {
    className: p(Xu.icnSearch)
  });
}
var Xu = /* @__PURE__ */ I.create(/* @__PURE__ */ k({
  icnSearch: {
    ".": "epr-icn-search",
    content: "",
    position: "absolute",
    top: "50%",
    left: "var(--epr-search-bar-inner-padding)",
    transform: "translateY(-50%)",
    width: "20px",
    height: "20px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "0 0",
    backgroundSize: "20px",
    backgroundImage: "url(" + Vu + ")"
  }
}, /* @__PURE__ */ nf("icnSearch", {
  backgroundPositionY: "-20px"
})));
function $u() {
  var f = n0(), e = Ma();
  return f ? null : l(G0, {
    className: p(ie.overlay)
  }, l(qu, null), e ? l(Z0, null) : null);
}
function qu() {
  var f = A(0), e = f[0], a = f[1], n = Mf(), i = uf(), t = zi(), u = Ai(), r = mt(), d = r.statusSearchResults, c = r.searchTerm, s = r.onChange, o = i == null ? void 0 : i.current, M = o == null ? void 0 : o.value;
  return l(De, {
    className: p(ie.searchContainer)
  }, l(Wu, {
    value: M
  }), l("input", {
    // eslint-disable-next-line jsx-a11y/no-autofocus
    autoFocus: u,
    "aria-label": "Type to search for an emoji",
    onFocus: n,
    className: p(ie.search),
    type: "text",
    "aria-controls": "epr-search-id",
    placeholder: t,
    onChange: function(L) {
      a(e + 1), setTimeout(function() {
        var h, m;
        s((h = L == null || (m = L.target) == null ? void 0 : m.value) != null ? h : M);
      });
    },
    ref: i
  }), c ? l("div", {
    role: "status",
    className: p("epr-status-search-results", ie.visuallyHidden),
    "aria-live": "polite",
    id: "epr-search-id",
    "aria-atomic": "true"
  }, d) : null, l(Ku, null), l(Zu, null));
}
var ie = /* @__PURE__ */ I.create(/* @__PURE__ */ k({
  overlay: {
    padding: "var(--epr-header-padding)",
    zIndex: "var(--epr-header-overlay-z-index)"
  },
  searchContainer: {
    ".": "epr-search-container",
    flex: "1",
    display: "block",
    minWidth: "0"
  },
  visuallyHidden: {
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: "1px",
    overflow: "hidden",
    position: "absolute",
    whiteSpace: "nowrap",
    width: "1px"
  },
  search: {
    outline: "none",
    transition: "all 0.2s ease-in-out",
    color: "var(--epr-search-input-text-color)",
    borderRadius: "var(--epr-search-input-border-radius)",
    padding: "var(--epr-search-input-padding)",
    height: "var(--epr-search-input-height)",
    backgroundColor: "var(--epr-search-input-bg-color)",
    border: "1px solid var(--epr-search-input-bg-color)",
    width: "100%",
    ":focus": {
      backgroundColor: "var(--epr-search-input-bg-color-active)",
      border: "1px solid var(--epr-search-border-color)"
    },
    "::placeholder": {
      color: "var(--epr-search-input-placeholder-color)"
    }
  },
  btnClearSearch: {
    ".": "epr-btn-clear-search",
    position: "absolute",
    right: "var(--epr-search-bar-inner-padding)",
    height: "30px",
    width: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    top: "50%",
    transform: "translateY(-50%)",
    padding: "0",
    borderRadius: "50%",
    ":hover": {
      background: "var(--epr-hover-bg-color)"
    },
    ":focus": {
      background: "var(--epr-hover-bg-color)"
    }
  },
  icnClearnSearch: {
    ".": "epr-icn-clear-search",
    backgroundColor: "transparent",
    backgroundRepeat: "no-repeat",
    backgroundSize: "20px",
    height: "20px",
    width: "20px",
    backgroundImage: "url(" + B0 + ")",
    ":hover": {
      backgroundPositionY: "-20px"
    },
    ":focus": {
      backgroundPositionY: "-20px"
    }
  }
}, /* @__PURE__ */ nf("icnClearnSearch", {
  backgroundPositionY: "-40px"
}), /* @__PURE__ */ nf("btnClearSearch", {
  ":hover > .epr-icn-clear-search": {
    backgroundPositionY: "-60px"
  }
})));
function fr() {
  return l(De, {
    className: p("epr-header", sf.hiddenOnReactions)
  }, l($u, null), l(Ou, null));
}
function er(f) {
  return l(et, null, l(V1, null), l(Di, Object.assign({}, f), l(ar, null)));
}
function ar() {
  var f = me(), e = f[0], a = qn(), n = A(!e), i = n[0], t = n[1], u = _i();
  return z(function() {
    e && !a || i || t(!0);
  }, [i, a, e]), u ? l(Yt, null, l(su, null), l(nr, {
    renderAll: i
  })) : null;
}
function nr(f) {
  var e = f.renderAll;
  return e ? l(B, null, l(fr, null), l(hu, null), l(xu, null)) : null;
}
var ir = /* @__PURE__ */ fa(er, On), tr = /* @__PURE__ */ function(f) {
  H1(e, f);
  function e(n) {
    var i;
    return i = f.call(this, n) || this, i.state = {
      hasError: !1
    }, i;
  }
  e.getDerivedStateFromError = function() {
    return {
      hasError: !0
    };
  };
  var a = e.prototype;
  return a.componentDidCatch = function(i, t) {
    console.error("Emoji Picker React failed to render:", i, t);
  }, a.render = function() {
    return this.state.hasError ? null : this.props.children;
  }, e;
}(V);
function or(f) {
  var e = f.unified, a = f.size, n = a === void 0 ? 32 : a, i = f.emojiStyle, t = i === void 0 ? P.APPLE : i, u = f.lazyLoad, r = u === void 0 ? !1 : u, d = f.getEmojiUrl, c = f.emojiUrl;
  return !e && !c && !d ? null : l(se, {
    unified: e,
    size: n,
    emojiStyle: t,
    lazyLoad: r,
    getEmojiUrl: c ? function() {
      return c;
    } : d
  });
}
function dr(f) {
  var e = Ti({
    onEmojiClick: f.onEmojiClick,
    onReactionClick: f.onReactionClick,
    onSkinToneChange: f.onSkinToneChange
  });
  return l(tr, null, l(Xn.Provider, {
    value: e
  }, l(ir, Object.assign({}, f))));
}
const cr = {
  open: (f, e, a) => ({
    ...f,
    open: !!a
  }),
  "auto-focus-search": (f, e, a) => ({
    ...f,
    autoFocusSearch: !!a
  }),
  theme: (f, e, a) => ({
    ...f,
    theme: a
  }),
  "emoji-style": (f, e, a) => ({
    ...f,
    emojiStyle: a
  }),
  "default-skin-tone": (f, e, a) => ({
    ...f,
    defaultSkinTone: a
  }),
  "lazy-load-emojis": (f, e, a) => ({
    ...f,
    lazyLoadEmojis: !!a
  }),
  "search-placeholder": (f, e, a) => ({
    ...f,
    searchPlaceHolder: a
  }),
  "suggested-emojis-mode": (f, e, a) => ({
    ...f,
    suggestedEmojisMode: a
  }),
  "skin-tones-disabled": (f, e, a) => ({
    ...f,
    skinTonesDisabled: !!a
  }),
  "search-disabled": (f, e, a) => ({
    ...f,
    searchDisabled: !!a
  }),
  "skin-tone-picker-location": (f, e, a) => ({
    ...f,
    skinTonePickerLocation: a
  }),
  "emoji-version": (f, e, a) => ({
    ...f,
    emojiVersion: a
  }),
  width: (f, e, a) => ({
    ...f,
    width: isNaN(parseFloat(a)) ? a : parseFloat(a)
  }),
  height: (f, e, a) => ({
    ...f,
    height: isNaN(parseFloat(a)) ? a : parseFloat(a)
  }),
  "reactions-default-open": (f, e, a) => ({
    ...f,
    reactionsDefaultOpen: !!a
  }),
  "allow-expand-reactions": (f, e, a) => ({
    ...f,
    allowExpandReactions: !!a
  }),
  "preview-config--default-emoji": (f, e, a) => ({
    ...f,
    previewConfig: {
      ...f.previewConfig ?? {},
      defaultEmoji: a
    }
  }),
  "preview-config--default-caption": (f, e, a) => ({
    ...f,
    previewConfig: {
      ...f.previewConfig ?? {},
      defaultCaption: a
    }
  }),
  "preview-config--show-preview": (f, e, a) => ({
    ...f,
    previewConfig: {
      ...f.previewConfig ?? {},
      showPreview: !!a
    }
  })
}, sr = {
  unified: (f, e, a) => ({
    ...f,
    unified: a
  }),
  size: (f, e, a) => ({
    ...f,
    size: parseFloat(a)
  }),
  "emoji-style": (f, e, a) => ({
    ...f,
    emojiStyle: a
  }),
  "lazy-load": (f, e, a) => ({
    ...f,
    lazyLoad: !!a
  }),
  "emoji-url": (f, e, a) => ({
    ...f,
    emojiUrl: a
  })
};
var ur = 0;
function lr(f, e, a, n, i, t) {
  var u, r, d = {};
  for (r in e)
    r == "ref" ? u = e[r] : d[r] = e[r];
  var c = { type: f, props: d, key: a, ref: u, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --ur, __i: -1, __u: 0, __source: i, __self: t };
  if (typeof f == "function" && (u = f.defaultProps))
    for (r in u)
      d[r] === void 0 && (d[r] = u[r]);
  return j.vnode && j.vnode(c), c;
}
export {
  dr as E,
  rr as R,
  z as _,
  Tf as a,
  or as b,
  sr as c,
  cr as e,
  A as p,
  lr as u,
  K as x
};
