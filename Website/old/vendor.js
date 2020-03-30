! function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    "use strict";

    function n(e, t, n) {
        t = t || se;
        var r, i = t.createElement("script");
        if (i.text = e, n)
            for (r in we) n[r] && (i[r] = n[r]);
        t.head.appendChild(i).parentNode.removeChild(i)
    }

    function r(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? pe[de.call(e)] || "object" : typeof e
    }

    function i(e) {
        var t = !!e && "length" in e && e.length,
            n = r(e);
        return !me(e) && !xe(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function o(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }

    function s(e, t, n) {
        return me(t) ? Te.grep(e, function (e, r) {
            return !!t.call(e, r, e) !== n
        }) : t.nodeType ? Te.grep(e, function (e) {
            return e === t !== n
        }) : "string" != typeof t ? Te.grep(e, function (e) {
            return fe.call(t, e) > -1 !== n
        }) : Te.filter(t, e, n)
    }

    function a(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function u(e) {
        var t = {};
        return Te.each(e.match(Oe) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    function l(e) {
        return e
    }

    function c(e) {
        throw e
    }

    function f(e, t, n, r) {
        var i;
        try {
            e && me(i = e.promise) ? i.call(e).done(t).fail(n) : e && me(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }

    function p() {
        se.removeEventListener("DOMContentLoaded", p), e.removeEventListener("load", p), Te.ready()
    }

    function d(e, t) {
        return t.toUpperCase()
    }

    function h(e) {
        return e.replace(Me, "ms-").replace(Ie, d)
    }

    function g() {
        this.expando = Te.expando + g.uid++
    }

    function y(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : ze.test(e) ? JSON.parse(e) : e)
    }

    function v(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(_e, "-$&").toLowerCase(), n = e.getAttribute(r), "string" == typeof n) {
                try {
                    n = y(n)
                } catch (i) {}
                Be.set(e, t, n)
            } else n = void 0;
        return n
    }

    function m(e, t, n, r) {
        var i, o, s = 20,
            a = r ? function () {
                return r.cur()
            } : function () {
                return Te.css(e, t, "")
            },
            u = a(),
            l = n && n[3] || (Te.cssNumber[t] ? "" : "px"),
            c = (Te.cssNumber[t] || "px" !== l && +u) && Ue.exec(Te.css(e, t));
        if (c && c[3] !== l) {
            for (u /= 2, l = l || c[3], c = +u || 1; s--;) Te.style(e, t, c + l), (1 - o) * (1 - (o = a() / u || .5)) <= 0 && (s = 0), c /= o;
            c = 2 * c, Te.style(e, t, c + l), n = n || []
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }

    function x(e) {
        var t, n = e.ownerDocument,
            r = e.nodeName,
            i = Ye[r];
        return i ? i : (t = n.body.appendChild(n.createElement(r)), i = Te.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), Ye[r] = i, i)
    }

    function w(e, t) {
        for (var n, r, i = [], o = 0, s = e.length; o < s; o++) r = e[o], r.style && (n = r.style.display, t ? ("none" === n && (i[o] = $e.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && Ve(r) && (i[o] = x(r))) : "none" !== n && (i[o] = "none", $e.set(r, "display", n)));
        for (o = 0; o < s; o++) null != i[o] && (e[o].style.display = i[o]);
        return e
    }

    function b(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && o(e, t) ? Te.merge([e], n) : n
    }

    function T(e, t) {
        for (var n = 0, r = e.length; n < r; n++) $e.set(e[n], "globalEval", !t || $e.get(t[n], "globalEval"))
    }

    function C(e, t, n, i, o) {
        for (var s, a, u, l, c, f, p = t.createDocumentFragment(), d = [], h = 0, g = e.length; h < g; h++)
            if (s = e[h], s || 0 === s)
                if ("object" === r(s)) Te.merge(d, s.nodeType ? [s] : s);
                else if (tt.test(s)) {
            for (a = a || p.appendChild(t.createElement("div")), u = (Je.exec(s) || ["", ""])[1].toLowerCase(), l = et[u] || et._default, a.innerHTML = l[1] + Te.htmlPrefilter(s) + l[2], f = l[0]; f--;) a = a.lastChild;
            Te.merge(d, a.childNodes), a = p.firstChild, a.textContent = ""
        } else d.push(t.createTextNode(s));
        for (p.textContent = "", h = 0; s = d[h++];)
            if (i && Te.inArray(s, i) > -1) o && o.push(s);
            else if (c = Te.contains(s.ownerDocument, s), a = b(p.appendChild(s), "script"), c && T(a), n)
            for (f = 0; s = a[f++];) Ze.test(s.type || "") && n.push(s);
        return p
    }

    function S() {
        return !0
    }

    function k() {
        return !1
    }

    function A() {
        try {
            return se.activeElement
        } catch (e) {}
    }

    function E(e, t, n, r, i, o) {
        var s, a;
        if ("object" == typeof t) {
            "string" != typeof n && (r = r || n, n = void 0);
            for (a in t) E(e, a, n, r, t[a], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), i === !1) i = k;
        else if (!i) return e;
        return 1 === o && (s = i, i = function (e) {
            return Te().off(e), s.apply(this, arguments)
        }, i.guid = s.guid || (s.guid = Te.guid++)), e.each(function () {
            Te.event.add(this, t, i, r, n)
        })
    }

    function D(e, t) {
        return o(e, "table") && o(11 !== t.nodeType ? t : t.firstChild, "tr") ? Te(e).children("tbody")[0] || e : e
    }

    function N(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function j(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function q(e, t) {
        var n, r, i, o, s, a, u, l;
        if (1 === t.nodeType) {
            if ($e.hasData(e) && (o = $e.access(e), s = $e.set(t, o), l = o.events)) {
                delete s.handle, s.events = {};
                for (i in l)
                    for (n = 0, r = l[i].length; n < r; n++) Te.event.add(t, i, l[i][n])
            }
            Be.hasData(e) && (a = Be.access(e), u = Te.extend({}, a), Be.set(t, u))
        }
    }

    function L(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Ke.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function H(e, t, r, i) {
        t = le.apply([], t);
        var o, s, a, u, l, c, f = 0,
            p = e.length,
            d = p - 1,
            h = t[0],
            g = me(h);
        if (g || p > 1 && "string" == typeof h && !ve.checkClone && ut.test(h)) return e.each(function (n) {
            var o = e.eq(n);
            g && (t[0] = h.call(this, n, o.html())), H(o, t, r, i)
        });
        if (p && (o = C(t, e[0].ownerDocument, !1, e, i), s = o.firstChild, 1 === o.childNodes.length && (o = s), s || i)) {
            for (a = Te.map(b(o, "script"), N), u = a.length; f < p; f++) l = o, f !== d && (l = Te.clone(l, !0, !0), u && Te.merge(a, b(l, "script"))), r.call(e[f], l, f);
            if (u)
                for (c = a[a.length - 1].ownerDocument, Te.map(a, j), f = 0; f < u; f++) l = a[f], Ze.test(l.type || "") && !$e.access(l, "globalEval") && Te.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? Te._evalUrl && Te._evalUrl(l.src) : n(l.textContent.replace(lt, ""), c, l))
        }
        return e
    }

    function O(e, t, n) {
        for (var r, i = t ? Te.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || Te.cleanData(b(r)), r.parentNode && (n && Te.contains(r.ownerDocument, r) && T(b(r, "script")), r.parentNode.removeChild(r));
        return e
    }

    function P(e, t, n) {
        var r, i, o, s, a = e.style;
        return n = n || ft(e), n && (s = n.getPropertyValue(t) || n[t], "" !== s || Te.contains(e.ownerDocument, e) || (s = Te.style(e, t)), !ve.pixelBoxStyles() && ct.test(s) && pt.test(t) && (r = a.width, i = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = r, a.minWidth = i, a.maxWidth = o)), void 0 !== s ? s + "" : s
    }

    function R(e, t) {
        return {
            get: function () {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function W(e) {
        if (e in mt) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = vt.length; n--;)
            if (e = vt[n] + t, e in mt) return e
    }

    function M(e) {
        var t = Te.cssProps[e];
        return t || (t = Te.cssProps[e] = W(e) || e), t
    }

    function I(e, t, n) {
        var r = Ue.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function F(e, t, n, r, i, o) {
        var s = "width" === t ? 1 : 0,
            a = 0,
            u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; s < 4; s += 2) "margin" === n && (u += Te.css(e, n + Qe[s], !0, i)), r ? ("content" === n && (u -= Te.css(e, "padding" + Qe[s], !0, i)), "margin" !== n && (u -= Te.css(e, "border" + Qe[s] + "Width", !0, i))) : (u += Te.css(e, "padding" + Qe[s], !0, i), "padding" !== n ? u += Te.css(e, "border" + Qe[s] + "Width", !0, i) : a += Te.css(e, "border" + Qe[s] + "Width", !0, i));
        return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - a - .5))), u
    }

    function $(e, t, n) {
        var r = ft(e),
            i = P(e, t, r),
            o = "border-box" === Te.css(e, "boxSizing", !1, r),
            s = o;
        if (ct.test(i)) {
            if (!n) return i;
            i = "auto"
        }
        return s = s && (ve.boxSizingReliable() || i === e.style[t]), ("auto" === i || !parseFloat(i) && "inline" === Te.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)], s = !0), i = parseFloat(i) || 0, i + F(e, t, n || (o ? "border" : "content"), s, r, i) + "px"
    }

    function B(e, t, n, r, i) {
        return new B.prototype.init(e, t, n, r, i)
    }

    function z() {
        wt && (se.hidden === !1 && e.requestAnimationFrame ? e.requestAnimationFrame(z) : e.setTimeout(z, Te.fx.interval), Te.fx.tick())
    }

    function _() {
        return e.setTimeout(function () {
            xt = void 0
        }), xt = Date.now()
    }

    function X(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) n = Qe[r], i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function U(e, t, n) {
        for (var r, i = (G.tweeners[t] || []).concat(G.tweeners["*"]), o = 0, s = i.length; o < s; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function Q(e, t, n) {
        var r, i, o, s, a, u, l, c, f = "width" in t || "height" in t,
            p = this,
            d = {},
            h = e.style,
            g = e.nodeType && Ve(e),
            y = $e.get(e, "fxshow");
        n.queue || (s = Te._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function () {
            s.unqueued || a()
        }), s.unqueued++, p.always(function () {
            p.always(function () {
                s.unqueued--, Te.queue(e, "fx").length || s.empty.fire()
            })
        }));
        for (r in t)
            if (i = t[r], bt.test(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                    if ("show" !== i || !y || void 0 === y[r]) continue;
                    g = !0
                }
                d[r] = y && y[r] || Te.style(e, r)
            } if (u = !Te.isEmptyObject(t), u || !Te.isEmptyObject(d)) {
            f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], l = y && y.display, null == l && (l = $e.get(e, "display")), c = Te.css(e, "display"), "none" === c && (l ? c = l : (w([e], !0), l = e.style.display || l, c = Te.css(e, "display"), w([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === Te.css(e, "float") && (u || (p.done(function () {
                h.display = l
            }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
            })), u = !1;
            for (r in d) u || (y ? "hidden" in y && (g = y.hidden) : y = $e.access(e, "fxshow", {
                display: l
            }), o && (y.hidden = !g), g && w([e], !0), p.done(function () {
                g || w([e]), $e.remove(e, "fxshow");
                for (r in d) Te.style(e, r, d[r])
            })), u = U(g ? y[r] : 0, r, p), r in y || (y[r] = u.start, g && (u.end = u.start, u.start = 0))
        }
    }

    function V(e, t) {
        var n, r, i, o, s;
        for (n in e)
            if (r = h(n), i = t[r], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), s = Te.cssHooks[r], s && "expand" in s) {
                o = s.expand(o), delete e[r];
                for (n in o) n in e || (e[n] = o[n], t[n] = i)
            } else t[r] = i
    }

    function G(e, t, n) {
        var r, i, o = 0,
            s = G.prefilters.length,
            a = Te.Deferred().always(function () {
                delete u.elem
            }),
            u = function () {
                if (i) return !1;
                for (var t = xt || _(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, s = 0, u = l.tweens.length; s < u; s++) l.tweens[s].run(o);
                return a.notifyWith(e, [l, o, n]), o < 1 && u ? n : (u || a.notifyWith(e, [l, 1, 0]), a.resolveWith(e, [l]), !1)
            },
            l = a.promise({
                elem: e,
                props: Te.extend({}, t),
                opts: Te.extend(!0, {
                    specialEasing: {},
                    easing: Te.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: xt || _(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var r = Te.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(r), r
                },
                stop: function (t) {
                    var n = 0,
                        r = t ? l.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; n < r; n++) l.tweens[n].run(1);
                    return t ? (a.notifyWith(e, [l, 1, 0]), a.resolveWith(e, [l, t])) : a.rejectWith(e, [l, t]), this
                }
            }),
            c = l.props;
        for (V(c, l.opts.specialEasing); o < s; o++)
            if (r = G.prefilters[o].call(l, e, c, l.opts)) return me(r.stop) && (Te._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
        return Te.map(c, U, l), me(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), Te.fx.timer(Te.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l
    }

    function Y(e) {
        var t = e.match(Oe) || [];
        return t.join(" ")
    }

    function K(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function J(e) {
        return Array.isArray(e) ? e : "string" == typeof e ? e.match(Oe) || [] : []
    }

    function Z(e, t, n, i) {
        var o;
        if (Array.isArray(t)) Te.each(t, function (t, r) {
            n || Ht.test(e) ? i(e, r) : Z(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
        });
        else if (n || "object" !== r(t)) i(e, t);
        else
            for (o in t) Z(e + "[" + o + "]", t[o], n, i)
    }

    function ee(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(Oe) || [];
            if (me(n))
                for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function te(e, t, n, r) {
        function i(a) {
            var u;
            return o[a] = !0, Te.each(e[a] || [], function (e, a) {
                var l = a(t, n, r);
                return "string" != typeof l || s || o[l] ? s ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1)
            }), u
        }
        var o = {},
            s = e === Xt;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }

    function ne(e, t) {
        var n, r, i = Te.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && Te.extend(!0, e, r), e
    }

    function re(e, t, n) {
        for (var r, i, o, s, a = e.contents, u = e.dataTypes;
            "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (i in a)
                if (a[i] && a[i].test(r)) {
                    u.unshift(i);
                    break
                } if (u[0] in n) o = u[0];
        else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break
                }
                s || (s = i)
            }
            o = o || s
        }
        if (o) return o !== u[0] && u.unshift(o), n[o]
    }

    function ie(e, t, n, r) {
        var i, o, s, a, u, l = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (s in e.converters) l[s.toLowerCase()] = e.converters[s];
        for (o = c.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                if ("*" === o) o = u;
                else if ("*" !== u && u !== o) {
            if (s = l[u + " " + o] || l["* " + o], !s)
                for (i in l)
                    if (a = i.split(" "), a[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
                        s === !0 ? s = l[i] : l[i] !== !0 && (o = a[0], c.unshift(a[1]));
                        break
                    } if (s !== !0)
                if (s && e["throws"]) t = s(t);
                else try {
                    t = s(t)
                } catch (f) {
                    return {
                        state: "parsererror",
                        error: s ? f : "No conversion from " + u + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }
    var oe = [],
        se = e.document,
        ae = Object.getPrototypeOf,
        ue = oe.slice,
        le = oe.concat,
        ce = oe.push,
        fe = oe.indexOf,
        pe = {},
        de = pe.toString,
        he = pe.hasOwnProperty,
        ge = he.toString,
        ye = ge.call(Object),
        ve = {},
        me = function (e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        },
        xe = function (e) {
            return null != e && e === e.window
        },
        we = {
            type: !0,
            src: !0,
            noModule: !0
        },
        be = "3.3.1",
        Te = function (e, t) {
            return new Te.fn.init(e, t)
        },
        Ce = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    Te.fn = Te.prototype = {
        jquery: be,
        constructor: Te,
        length: 0,
        toArray: function () {
            return ue.call(this)
        },
        get: function (e) {
            return null == e ? ue.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function (e) {
            var t = Te.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function (e) {
            return Te.each(this, e)
        },
        map: function (e) {
            return this.pushStack(Te.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function () {
            return this.pushStack(ue.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor()
        },
        push: ce,
        sort: oe.sort,
        splice: oe.splice
    }, Te.extend = Te.fn.extend = function () {
        var e, t, n, r, i, o, s = arguments[0] || {},
            a = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof s && (l = s, s = arguments[a] || {}, a++), "object" == typeof s || me(s) || (s = {}), a === u && (s = this, a--); a < u; a++)
            if (null != (e = arguments[a]))
                for (t in e) n = s[t], r = e[t], s !== r && (l && r && (Te.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && Te.isPlainObject(n) ? n : {}, s[t] = Te.extend(l, o, r)) : void 0 !== r && (s[t] = r));
        return s
    }, Te.extend({
        expando: "jQuery" + (be + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
            throw new Error(e)
        },
        noop: function () {},
        isPlainObject: function (e) {
            var t, n;
            return !(!e || "[object Object]" !== de.call(e)) && (!(t = ae(e)) || (n = he.call(t, "constructor") && t.constructor, "function" == typeof n && ge.call(n) === ye))
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function (e) {
            n(e)
        },
        each: function (e, t) {
            var n, r = 0;
            if (i(e))
                for (n = e.length; r < n && t.call(e[r], r, e[r]) !== !1; r++);
            else
                for (r in e)
                    if (t.call(e[r], r, e[r]) === !1) break;
            return e
        },
        trim: function (e) {
            return null == e ? "" : (e + "").replace(Ce, "")
        },
        makeArray: function (e, t) {
            var n = t || [];
            return null != e && (i(Object(e)) ? Te.merge(n, "string" == typeof e ? [e] : e) : ce.call(n, e)), n
        },
        inArray: function (e, t, n) {
            return null == t ? -1 : fe.call(t, e, n)
        },
        merge: function (e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function (e, t, n) {
            for (var r, i = [], o = 0, s = e.length, a = !n; o < s; o++) r = !t(e[o], o), r !== a && i.push(e[o]);
            return i
        },
        map: function (e, t, n) {
            var r, o, s = 0,
                a = [];
            if (i(e))
                for (r = e.length; s < r; s++) o = t(e[s], s, n), null != o && a.push(o);
            else
                for (s in e) o = t(e[s], s, n), null != o && a.push(o);
            return le.apply([], a)
        },
        guid: 1,
        support: ve
    }), "function" == typeof Symbol && (Te.fn[Symbol.iterator] = oe[Symbol.iterator]), Te.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        pe["[object " + t + "]"] = t.toLowerCase()
    });
    var Se = function (e) {
        function t(e, t, n, r) {
            var i, o, s, a, u, l, c, p = t && t.ownerDocument,
                h = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return n;
            if (!r && ((t ? t.ownerDocument || t : $) !== H && L(t), t = t || H, P)) {
                if (11 !== h && (u = ve.exec(e)))
                    if (i = u[1]) {
                        if (9 === h) {
                            if (!(s = t.getElementById(i))) return n;
                            if (s.id === i) return n.push(s), n
                        } else if (p && (s = p.getElementById(i)) && I(t, s) && s.id === i) return n.push(s), n
                    } else {
                        if (u[2]) return J.apply(n, t.getElementsByTagName(e)), n;
                        if ((i = u[3]) && T.getElementsByClassName && t.getElementsByClassName) return J.apply(n, t.getElementsByClassName(i)), n
                    } if (T.qsa && !U[e + " "] && (!R || !R.test(e))) {
                    if (1 !== h) p = t, c = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((a = t.getAttribute("id")) ? a = a.replace(be, Te) : t.setAttribute("id", a = F), l = A(e), o = l.length; o--;) l[o] = "#" + a + " " + d(l[o]);
                        c = l.join(","), p = me.test(e) && f(t.parentNode) || t
                    }
                    if (c) try {
                        return J.apply(n, p.querySelectorAll(c)), n
                    } catch (g) {} finally {
                        a === F && t.removeAttribute("id")
                    }
                }
            }
            return D(e.replace(ae, "$1"), t, n, r)
        }

        function n() {
            function e(n, r) {
                return t.push(n + " ") > C.cacheLength && delete e[t.shift()], e[n + " "] = r
            }
            var t = [];
            return e
        }

        function r(e) {
            return e[F] = !0, e
        }

        function i(e) {
            var t = H.createElement("fieldset");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function o(e, t) {
            for (var n = e.split("|"), r = n.length; r--;) C.attrHandle[n[r]] = t
        }

        function s(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function a(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function u(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function l(e) {
            return function (t) {
                return "form" in t ? t.parentNode && t.disabled === !1 ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Se(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function c(e) {
            return r(function (t) {
                return t = +t, r(function (n, r) {
                    for (var i, o = e([], n.length, t), s = o.length; s--;) n[i = o[s]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function f(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function p() {}

        function d(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function h(e, t, n) {
            var r = t.dir,
                i = t.next,
                o = i || r,
                s = n && "parentNode" === o,
                a = z++;
            return t.first ? function (t, n, i) {
                for (; t = t[r];)
                    if (1 === t.nodeType || s) return e(t, n, i);
                return !1
            } : function (t, n, u) {
                var l, c, f, p = [B, a];
                if (u) {
                    for (; t = t[r];)
                        if ((1 === t.nodeType || s) && e(t, n, u)) return !0
                } else
                    for (; t = t[r];)
                        if (1 === t.nodeType || s)
                            if (f = t[F] || (t[F] = {}), c = f[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
                            else {
                                if ((l = c[o]) && l[0] === B && l[1] === a) return p[2] = l[2];
                                if (c[o] = p, p[2] = e(t, n, u)) return !0
                            } return !1
            }
        }

        function g(e) {
            return e.length > 1 ? function (t, n, r) {
                for (var i = e.length; i--;)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function y(e, n, r) {
            for (var i = 0, o = n.length; i < o; i++) t(e, n[i], r);
            return r
        }

        function v(e, t, n, r, i) {
            for (var o, s = [], a = 0, u = e.length, l = null != t; a < u; a++)(o = e[a]) && (n && !n(o, r, i) || (s.push(o), l && t.push(a)));
            return s
        }

        function m(e, t, n, i, o, s) {
            return i && !i[F] && (i = m(i)), o && !o[F] && (o = m(o, s)), r(function (r, s, a, u) {
                var l, c, f, p = [],
                    d = [],
                    h = s.length,
                    g = r || y(t || "*", a.nodeType ? [a] : a, []),
                    m = !e || !r && t ? g : v(g, p, e, a, u),
                    x = n ? o || (r ? e : h || i) ? [] : s : m;
                if (n && n(m, x, a, u), i)
                    for (l = v(x, d), i(l, [], a, u), c = l.length; c--;)(f = l[c]) && (x[d[c]] = !(m[d[c]] = f));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (l = [], c = x.length; c--;)(f = x[c]) && l.push(m[c] = f);
                            o(null, x = [], l, u)
                        }
                        for (c = x.length; c--;)(f = x[c]) && (l = o ? ee(r, f) : p[c]) > -1 && (r[l] = !(s[l] = f))
                    }
                } else x = v(x === s ? x.splice(h, x.length) : x), o ? o(null, s, x, u) : J.apply(s, x)
            })
        }

        function x(e) {
            for (var t, n, r, i = e.length, o = C.relative[e[0].type], s = o || C.relative[" "], a = o ? 1 : 0, u = h(function (e) {
                    return e === t
                }, s, !0), l = h(function (e) {
                    return ee(t, e) > -1
                }, s, !0), c = [function (e, n, r) {
                    var i = !o && (r || n !== N) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
                    return t = null, i
                }]; a < i; a++)
                if (n = C.relative[e[a].type]) c = [h(g(c), n)];
                else {
                    if (n = C.filter[e[a].type].apply(null, e[a].matches), n[F]) {
                        for (r = ++a; r < i && !C.relative[e[r].type]; r++);
                        return m(a > 1 && g(c), a > 1 && d(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(ae, "$1"), n, a < r && x(e.slice(a, r)), r < i && x(e = e.slice(r)), r < i && d(e))
                    }
                    c.push(n)
                } return g(c)
        }

        function w(e, n) {
            var i = n.length > 0,
                o = e.length > 0,
                s = function (r, s, a, u, l) {
                    var c, f, p, d = 0,
                        h = "0",
                        g = r && [],
                        y = [],
                        m = N,
                        x = r || o && C.find.TAG("*", l),
                        w = B += null == m ? 1 : Math.random() || .1,
                        b = x.length;
                    for (l && (N = s === H || s || l); h !== b && null != (c = x[h]); h++) {
                        if (o && c) {
                            for (f = 0, s || c.ownerDocument === H || (L(c), a = !P); p = e[f++];)
                                if (p(c, s || H, a)) {
                                    u.push(c);
                                    break
                                } l && (B = w)
                        }
                        i && ((c = !p && c) && d--, r && g.push(c))
                    }
                    if (d += h, i && h !== d) {
                        for (f = 0; p = n[f++];) p(g, y, s, a);
                        if (r) {
                            if (d > 0)
                                for (; h--;) g[h] || y[h] || (y[h] = Y.call(u));
                            y = v(y)
                        }
                        J.apply(u, y), l && !r && y.length > 0 && d + n.length > 1 && t.uniqueSort(u)
                    }
                    return l && (B = w, N = m), g
                };
            return i ? r(s) : s
        }
        var b, T, C, S, k, A, E, D, N, j, q, L, H, O, P, R, W, M, I, F = "sizzle" + 1 * new Date,
            $ = e.document,
            B = 0,
            z = 0,
            _ = n(),
            X = n(),
            U = n(),
            Q = function (e, t) {
                return e === t && (q = !0), 0
            },
            V = {}.hasOwnProperty,
            G = [],
            Y = G.pop,
            K = G.push,
            J = G.push,
            Z = G.slice,
            ee = function (e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ne = "[\\x20\\t\\r\\n\\f]",
            re = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            ie = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ne + "*\\]",
            oe = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)",
            se = new RegExp(ne + "+", "g"),
            ae = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
            ue = new RegExp("^" + ne + "*," + ne + "*"),
            le = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
            fe = new RegExp(oe),
            pe = new RegExp("^" + re + "$"),
            de = {
                ID: new RegExp("^#(" + re + ")"),
                CLASS: new RegExp("^\\.(" + re + ")"),
                TAG: new RegExp("^(" + re + "|[*])"),
                ATTR: new RegExp("^" + ie),
                PSEUDO: new RegExp("^" + oe),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + te + ")$", "i"),
                needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
            },
            he = /^(?:input|select|textarea|button)$/i,
            ge = /^h\d$/i,
            ye = /^[^{]+\{\s*\[native \w/,
            ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            me = /[+~]/,
            xe = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
            we = function (e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            },
            be = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            Te = function (e, t) {
                return t ? "\0" === e ? "ï¿½" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            Ce = function () {
                L()
            },
            Se = h(function (e) {
                return e.disabled === !0 && ("form" in e || "label" in e)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            J.apply(G = Z.call($.childNodes), $.childNodes), G[$.childNodes.length].nodeType
        } catch (ke) {
            J = {
                apply: G.length ? function (e, t) {
                    K.apply(e, Z.call(t))
                } : function (e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }
        T = t.support = {}, k = t.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, L = t.setDocument = function (e) {
            var t, n, r = e ? e.ownerDocument || e : $;
            return r !== H && 9 === r.nodeType && r.documentElement ? (H = r, O = H.documentElement, P = !k(H), $ !== H && (n = H.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Ce, !1) : n.attachEvent && n.attachEvent("onunload", Ce)), T.attributes = i(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), T.getElementsByTagName = i(function (e) {
                return e.appendChild(H.createComment("")), !e.getElementsByTagName("*").length
            }), T.getElementsByClassName = ye.test(H.getElementsByClassName), T.getById = i(function (e) {
                return O.appendChild(e).id = F, !H.getElementsByName || !H.getElementsByName(F).length
            }), T.getById ? (C.filter.ID = function (e) {
                var t = e.replace(xe, we);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }, C.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && P) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }) : (C.filter.ID = function (e) {
                var t = e.replace(xe, we);
                return function (e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }, C.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && P) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if (n = o.getAttributeNode("id"), n && n.value === e) return [o];
                        for (i = t.getElementsByName(e), r = 0; o = i[r++];)
                            if (n = o.getAttributeNode("id"), n && n.value === e) return [o]
                    }
                    return []
                }
            }), C.find.TAG = T.getElementsByTagName ? function (e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : T.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
                var n, r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, C.find.CLASS = T.getElementsByClassName && function (e, t) {
                if ("undefined" != typeof t.getElementsByClassName && P) return t.getElementsByClassName(e)
            }, W = [], R = [], (T.qsa = ye.test(H.querySelectorAll)) && (i(function (e) {
                O.appendChild(e).innerHTML = "<a id='" + F + "'></a><select id='" + F + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && R.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || R.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + F + "-]").length || R.push("~="), e.querySelectorAll(":checked").length || R.push(":checked"), e.querySelectorAll("a#" + F + "+*").length || R.push(".#.+[+~]")
            }), i(function (e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = H.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && R.push("name" + ne + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && R.push(":enabled", ":disabled"), O.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && R.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), R.push(",.*:")
            })), (T.matchesSelector = ye.test(M = O.matches || O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector)) && i(function (e) {
                T.disconnectedMatch = M.call(e, "*"), M.call(e, "[s!='']:x"), W.push("!=", oe)
            }), R = R.length && new RegExp(R.join("|")), W = W.length && new RegExp(W.join("|")), t = ye.test(O.compareDocumentPosition), I = t || ye.test(O.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function (e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, Q = t ? function (e, t) {
                if (e === t) return q = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !T.sortDetached && t.compareDocumentPosition(e) === n ? e === H || e.ownerDocument === $ && I($, e) ? -1 : t === H || t.ownerDocument === $ && I($, t) ? 1 : j ? ee(j, e) - ee(j, t) : 0 : 4 & n ? -1 : 1)
            } : function (e, t) {
                if (e === t) return q = !0, 0;
                var n, r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    a = [e],
                    u = [t];
                if (!i || !o) return e === H ? -1 : t === H ? 1 : i ? -1 : o ? 1 : j ? ee(j, e) - ee(j, t) : 0;
                if (i === o) return s(e, t);
                for (n = e; n = n.parentNode;) a.unshift(n);
                for (n = t; n = n.parentNode;) u.unshift(n);
                for (; a[r] === u[r];) r++;
                return r ? s(a[r], u[r]) : a[r] === $ ? -1 : u[r] === $ ? 1 : 0
            }, H) : H
        }, t.matches = function (e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function (e, n) {
            if ((e.ownerDocument || e) !== H && L(e), n = n.replace(ce, "='$1']"), T.matchesSelector && P && !U[n + " "] && (!W || !W.test(n)) && (!R || !R.test(n))) try {
                var r = M.call(e, n);
                if (r || T.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch (i) {}
            return t(n, H, null, [e]).length > 0
        }, t.contains = function (e, t) {
            return (e.ownerDocument || e) !== H && L(e), I(e, t)
        }, t.attr = function (e, t) {
            (e.ownerDocument || e) !== H && L(e);
            var n = C.attrHandle[t.toLowerCase()],
                r = n && V.call(C.attrHandle, t.toLowerCase()) ? n(e, t, !P) : void 0;
            return void 0 !== r ? r : T.attributes || !P ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, t.escape = function (e) {
            return (e + "").replace(be, Te)
        }, t.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function (e) {
            var t, n = [],
                r = 0,
                i = 0;
            if (q = !T.detectDuplicates, j = !T.sortStable && e.slice(0), e.sort(Q), q) {
                for (; t = e[i++];) t === e[i] && (r = n.push(i));
                for (; r--;) e.splice(n[r], 1)
            }
            return j = null, e
        }, S = t.getText = function (e) {
            var t, n = "",
                r = 0,
                i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += S(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else
                for (; t = e[r++];) n += S(t);
            return n
        }, C = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: de,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(xe, we), e[3] = (e[3] || e[4] || e[5] || "").replace(xe, we), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return de.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && fe.test(n) && (t = A(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(xe, we).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function (e) {
                    var t = _[e + " "];
                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && _(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function (e, n, r) {
                    return function (i) {
                        var o = t.attr(i, e);
                        return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(se, " ") + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"))
                    }
                },
                CHILD: function (e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                        s = "last" !== e.slice(-4),
                        a = "of-type" === t;
                    return 1 === r && 0 === i ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, u) {
                        var l, c, f, p, d, h, g = o !== s ? "nextSibling" : "previousSibling",
                            y = t.parentNode,
                            v = a && t.nodeName.toLowerCase(),
                            m = !u && !a,
                            x = !1;
                        if (y) {
                            if (o) {
                                for (; g;) {
                                    for (p = t; p = p[g];)
                                        if (a ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [s ? y.firstChild : y.lastChild], s && m) {
                                for (p = y, f = p[F] || (p[F] = {}), c = f[p.uniqueID] || (f[p.uniqueID] = {}), l = c[e] || [], d = l[0] === B && l[1], x = d && l[2], p = d && y.childNodes[d]; p = ++d && p && p[g] || (x = d = 0) || h.pop();)
                                    if (1 === p.nodeType && ++x && p === t) {
                                        c[e] = [B, d, x];
                                        break
                                    }
                            } else if (m && (p = t, f = p[F] || (p[F] = {}), c = f[p.uniqueID] || (f[p.uniqueID] = {}), l = c[e] || [], d = l[0] === B && l[1], x = d), x === !1)
                                for (;
                                    (p = ++d && p && p[g] || (x = d = 0) || h.pop()) && ((a ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++x || (m && (f = p[F] || (p[F] = {}), c = f[p.uniqueID] || (f[p.uniqueID] = {}), c[e] = [B, x]), p !== t)););
                            return x -= i, x === r || x % r === 0 && x / r >= 0
                        }
                    }
                },
                PSEUDO: function (e, n) {
                    var i, o = C.pseudos[e] || C.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[F] ? o(n) : o.length > 1 ? (i = [e, e, "", n], C.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function (e, t) {
                        for (var r, i = o(e, n), s = i.length; s--;) r = ee(e, i[s]), e[r] = !(t[r] = i[s])
                    }) : function (e) {
                        return o(e, 0, i)
                    }) : o
                }
            },
            pseudos: {
                not: r(function (e) {
                    var t = [],
                        n = [],
                        i = E(e.replace(ae, "$1"));
                    return i[F] ? r(function (e, t, n, r) {
                        for (var o, s = i(e, null, r, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
                    }) : function (e, r, o) {
                        return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
                    }
                }),
                has: r(function (e) {
                    return function (n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: r(function (e) {
                    return e = e.replace(xe, we),
                        function (t) {
                            return (t.textContent || t.innerText || S(t)).indexOf(e) > -1
                        }
                }),
                lang: r(function (e) {
                    return pe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(xe, we).toLowerCase(),
                        function (t) {
                            var n;
                            do
                                if (n = P ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function (e) {
                    return e === O
                },
                focus: function (e) {
                    return e === H.activeElement && (!H.hasFocus || H.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: l(!1),
                disabled: l(!0),
                checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function (e) {
                    return !C.pseudos.empty(e)
                },
                header: function (e) {
                    return ge.test(e.nodeName)
                },
                input: function (e) {
                    return he.test(e.nodeName)
                },
                button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: c(function () {
                    return [0]
                }),
                last: c(function (e, t) {
                    return [t - 1]
                }),
                eq: c(function (e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: c(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }),
                odd: c(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }),
                lt: c(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
                    return e
                }),
                gt: c(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }, C.pseudos.nth = C.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) C.pseudos[b] = a(b);
        for (b in {
                submit: !0,
                reset: !0
            }) C.pseudos[b] = u(b);
        return p.prototype = C.filters = C.pseudos, C.setFilters = new p, A = t.tokenize = function (e, n) {
            var r, i, o, s, a, u, l, c = X[e + " "];
            if (c) return n ? 0 : c.slice(0);
            for (a = e, u = [], l = C.preFilter; a;) {
                r && !(i = ue.exec(a)) || (i && (a = a.slice(i[0].length) || a), u.push(o = [])), r = !1, (i = le.exec(a)) && (r = i.shift(), o.push({
                    value: r,
                    type: i[0].replace(ae, " ")
                }), a = a.slice(r.length));
                for (s in C.filter) !(i = de[s].exec(a)) || l[s] && !(i = l[s](i)) || (r = i.shift(), o.push({
                    value: r,
                    type: s,
                    matches: i
                }), a = a.slice(r.length));
                if (!r) break
            }
            return n ? a.length : a ? t.error(e) : X(e, u).slice(0)
        }, E = t.compile = function (e, t) {
            var n, r = [],
                i = [],
                o = U[e + " "];
            if (!o) {
                for (t || (t = A(e)), n = t.length; n--;) o = x(t[n]), o[F] ? r.push(o) : i.push(o);
                o = U(e, w(i, r)), o.selector = e
            }
            return o
        }, D = t.select = function (e, t, n, r) {
            var i, o, s, a, u, l = "function" == typeof e && e,
                c = !r && A(e = l.selector || e);
            if (n = n || [], 1 === c.length) {
                if (o = c[0] = c[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && 9 === t.nodeType && P && C.relative[o[1].type]) {
                    if (t = (C.find.ID(s.matches[0].replace(xe, we), t) || [])[0], !t) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (i = de.needsContext.test(e) ? 0 : o.length; i-- && (s = o[i], !C.relative[a = s.type]);)
                    if ((u = C.find[a]) && (r = u(s.matches[0].replace(xe, we), me.test(o[0].type) && f(t.parentNode) || t))) {
                        if (o.splice(i, 1), e = r.length && d(o), !e) return J.apply(n, r), n;
                        break
                    }
            }
            return (l || E(e, c))(r, t, !P, n, !t || me.test(e) && f(t.parentNode) || t), n
        }, T.sortStable = F.split("").sort(Q).join("") === F, T.detectDuplicates = !!q, L(), T.sortDetached = i(function (e) {
            return 1 & e.compareDocumentPosition(H.createElement("fieldset"))
        }), i(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function (e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), T.attributes && i(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), i(function (e) {
            return null == e.getAttribute("disabled")
        }) || o(te, function (e, t, n) {
            var r;
            if (!n) return e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), t
    }(e);
    Te.find = Se, Te.expr = Se.selectors, Te.expr[":"] = Te.expr.pseudos, Te.uniqueSort = Te.unique = Se.uniqueSort, Te.text = Se.getText, Te.isXMLDoc = Se.isXML, Te.contains = Se.contains, Te.escapeSelector = Se.escape;
    var ke = function (e, t, n) {
            for (var r = [], i = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (i && Te(e).is(n)) break;
                    r.push(e)
                } return r
        },
        Ae = function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        Ee = Te.expr.match.needsContext,
        De = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    Te.filter = function (e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? Te.find.matchesSelector(r, e) ? [r] : [] : Te.find.matches(e, Te.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, Te.fn.extend({
        find: function (e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(Te(e).filter(function () {
                for (t = 0; t < r; t++)
                    if (Te.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) Te.find(e, i[t], n);
            return r > 1 ? Te.uniqueSort(n) : n
        },
        filter: function (e) {
            return this.pushStack(s(this, e || [], !1))
        },
        not: function (e) {
            return this.pushStack(s(this, e || [], !0))
        },
        is: function (e) {
            return !!s(this, "string" == typeof e && Ee.test(e) ? Te(e) : e || [], !1).length
        }
    });
    var Ne, je = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        qe = Te.fn.init = function (e, t, n) {
            var r, i;
            if (!e) return this;
            if (n = n || Ne, "string" == typeof e) {
                if (r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : je.exec(e), !r || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (r[1]) {
                    if (t = t instanceof Te ? t[0] : t, Te.merge(this, Te.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : se, !0)), De.test(r[1]) && Te.isPlainObject(t))
                        for (r in t) me(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                    return this
                }
                return i = se.getElementById(r[2]), i && (this[0] = i, this.length = 1), this
            }
            return e.nodeType ? (this[0] = e, this.length = 1, this) : me(e) ? void 0 !== n.ready ? n.ready(e) : e(Te) : Te.makeArray(e, this)
        };
    qe.prototype = Te.fn, Ne = Te(se);
    var Le = /^(?:parents|prev(?:Until|All))/,
        He = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    Te.fn.extend({
        has: function (e) {
            var t = Te(e, this),
                n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++)
                    if (Te.contains(this, t[e])) return !0
            })
        },
        closest: function (e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                s = "string" != typeof e && Te(e);
            if (!Ee.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && Te.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        } return this.pushStack(o.length > 1 ? Te.uniqueSort(o) : o)
        },
        index: function (e) {
            return e ? "string" == typeof e ? fe.call(Te(e), this[0]) : fe.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            return this.pushStack(Te.uniqueSort(Te.merge(this.get(), Te(e, t))))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), Te.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
            return ke(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
            return ke(e, "parentNode", n)
        },
        next: function (e) {
            return a(e, "nextSibling")
        },
        prev: function (e) {
            return a(e, "previousSibling")
        },
        nextAll: function (e) {
            return ke(e, "nextSibling")
        },
        prevAll: function (e) {
            return ke(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
            return ke(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
            return ke(e, "previousSibling", n)
        },
        siblings: function (e) {
            return Ae((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return Ae(e.firstChild)
        },
        contents: function (e) {
            return o(e, "iframe") ? e.contentDocument : (o(e, "template") && (e = e.content || e), Te.merge([], e.childNodes))
        }
    }, function (e, t) {
        Te.fn[e] = function (n, r) {
            var i = Te.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = Te.filter(r, i)), this.length > 1 && (He[e] || Te.uniqueSort(i), Le.test(e) && i.reverse()), this.pushStack(i)
        }
    });
    var Oe = /[^\x20\t\r\n\f]+/g;
    Te.Callbacks = function (e) {
        e = "string" == typeof e ? u(e) : Te.extend({}, e);
        var t, n, i, o, s = [],
            a = [],
            l = -1,
            c = function () {
                for (o = o || e.once, i = t = !0; a.length; l = -1)
                    for (n = a.shift(); ++l < s.length;) s[l].apply(n[0], n[1]) === !1 && e.stopOnFalse && (l = s.length, n = !1);
                e.memory || (n = !1), t = !1, o && (s = n ? [] : "")
            },
            f = {
                add: function () {
                    return s && (n && !t && (l = s.length - 1, a.push(n)), function i(t) {
                        Te.each(t, function (t, n) {
                            me(n) ? e.unique && f.has(n) || s.push(n) : n && n.length && "string" !== r(n) && i(n)
                        })
                    }(arguments), n && !t && c()), this
                },
                remove: function () {
                    return Te.each(arguments, function (e, t) {
                        for (var n;
                            (n = Te.inArray(t, s, n)) > -1;) s.splice(n, 1), n <= l && l--
                    }), this
                },
                has: function (e) {
                    return e ? Te.inArray(e, s) > -1 : s.length > 0
                },
                empty: function () {
                    return s && (s = []), this
                },
                disable: function () {
                    return o = a = [], s = n = "", this
                },
                disabled: function () {
                    return !s
                },
                lock: function () {
                    return o = a = [], n || t || (s = n = ""), this
                },
                locked: function () {
                    return !!o
                },
                fireWith: function (e, n) {
                    return o || (n = n || [], n = [e, n.slice ? n.slice() : n], a.push(n), t || c()), this
                },
                fire: function () {
                    return f.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!i
                }
            };
        return f
    }, Te.extend({
        Deferred: function (t) {
            var n = [["notify", "progress", Te.Callbacks("memory"), Te.Callbacks("memory"), 2], ["resolve", "done", Te.Callbacks("once memory"), Te.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", Te.Callbacks("once memory"), Te.Callbacks("once memory"), 1, "rejected"]],
                r = "pending",
                i = {
                    state: function () {
                        return r
                    },
                    always: function () {
                        return o.done(arguments).fail(arguments), this
                    },
                    "catch": function (e) {
                        return i.then(null, e)
                    },
                    pipe: function () {
                        var e = arguments;
                        return Te.Deferred(function (t) {
                            Te.each(n, function (n, r) {
                                var i = me(e[r[4]]) && e[r[4]];
                                o[r[1]](function () {
                                    var e = i && i.apply(this, arguments);
                                    e && me(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    then: function (t, r, i) {
                        function o(t, n, r, i) {
                            return function () {
                                var a = this,
                                    u = arguments,
                                    f = function () {
                                        var e, f;
                                        if (!(t < s)) {
                                            if (e = r.apply(a, u), e === n.promise()) throw new TypeError("Thenable self-resolution");
                                            f = e && ("object" == typeof e || "function" == typeof e) && e.then, me(f) ? i ? f.call(e, o(s, n, l, i), o(s, n, c, i)) : (s++, f.call(e, o(s, n, l, i), o(s, n, c, i), o(s, n, l, n.notifyWith))) : (r !== l && (a = void 0, u = [e]), (i || n.resolveWith)(a, u))
                                        }
                                    },
                                    p = i ? f : function () {
                                        try {
                                            f()
                                        } catch (e) {
                                            Te.Deferred.exceptionHook && Te.Deferred.exceptionHook(e, p.stackTrace), t + 1 >= s && (r !== c && (a = void 0, u = [e]), n.rejectWith(a, u))
                                        }
                                    };
                                t ? p() : (Te.Deferred.getStackHook && (p.stackTrace = Te.Deferred.getStackHook()), e.setTimeout(p))
                            }
                        }
                        var s = 0;
                        return Te.Deferred(function (e) {
                            n[0][3].add(o(0, e, me(i) ? i : l, e.notifyWith)), n[1][3].add(o(0, e, me(t) ? t : l)), n[2][3].add(o(0, e, me(r) ? r : c))
                        }).promise()
                    },
                    promise: function (e) {
                        return null != e ? Te.extend(e, i) : i
                    }
                },
                o = {};
            return Te.each(n, function (e, t) {
                var s = t[2],
                    a = t[5];
                i[t[1]] = s.add, a && s.add(function () {
                    r = a
                }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), s.add(t[3].fire), o[t[0]] = function () {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                }, o[t[0] + "With"] = s.fireWith
            }), i.promise(o), t && t.call(o, o), o
        },
        when: function (e) {
            var t = arguments.length,
                n = t,
                r = Array(n),
                i = ue.call(arguments),
                o = Te.Deferred(),
                s = function (e) {
                    return function (n) {
                        r[e] = this, i[e] = arguments.length > 1 ? ue.call(arguments) : n, --t || o.resolveWith(r, i)
                    }
                };
            if (t <= 1 && (f(e, o.done(s(n)).resolve, o.reject, !t), "pending" === o.state() || me(i[n] && i[n].then))) return o.then();
            for (; n--;) f(i[n], s(n), o.reject);
            return o.promise()
        }
    });
    var Pe = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    Te.Deferred.exceptionHook = function (t, n) {
        e.console && e.console.warn && t && Pe.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, Te.readyException = function (t) {
        e.setTimeout(function () {
            throw t
        })
    };
    var Re = Te.Deferred();
    Te.fn.ready = function (e) {
        return Re.then(e)["catch"](function (e) {
            Te.readyException(e)
        }), this
    }, Te.extend({
        isReady: !1,
        readyWait: 1,
        ready: function (e) {
            (e === !0 ? --Te.readyWait : Te.isReady) || (Te.isReady = !0, e !== !0 && --Te.readyWait > 0 || Re.resolveWith(se, [Te]))
        }
    }), Te.ready.then = Re.then, "complete" === se.readyState || "loading" !== se.readyState && !se.documentElement.doScroll ? e.setTimeout(Te.ready) : (se.addEventListener("DOMContentLoaded", p), e.addEventListener("load", p));
    var We = function (e, t, n, i, o, s, a) {
            var u = 0,
                l = e.length,
                c = null == n;
            if ("object" === r(n)) {
                o = !0;
                for (u in n) We(e, t, u, n[u], !0, s, a)
            } else if (void 0 !== i && (o = !0, me(i) || (a = !0), c && (a ? (t.call(e, i), t = null) : (c = t, t = function (e, t, n) {
                    return c.call(Te(e), n)
                })), t))
                for (; u < l; u++) t(e[u], n, a ? i : i.call(e[u], u, t(e[u], n)));
            return o ? e : c ? t.call(e) : l ? t(e[0], n) : s
        },
        Me = /^-ms-/,
        Ie = /-([a-z])/g,
        Fe = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };
    g.uid = 1, g.prototype = {
        cache: function (e) {
            var t = e[this.expando];
            return t || (t = {}, Fe(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function (e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[h(t)] = n;
            else
                for (r in t) i[h(r)] = t[r];
            return i
        },
        get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][h(t)]
        },
        access: function (e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function (e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    Array.isArray(t) ? t = t.map(h) : (t = h(t), t = t in r ? [t] : t.match(Oe) || []), n = t.length;
                    for (; n--;) delete r[t[n]]
                }(void 0 === t || Te.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !Te.isEmptyObject(t)
        }
    };
    var $e = new g,
        Be = new g,
        ze = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        _e = /[A-Z]/g;
    Te.extend({
        hasData: function (e) {
            return Be.hasData(e) || $e.hasData(e)
        },
        data: function (e, t, n) {
            return Be.access(e, t, n)
        },
        removeData: function (e, t) {
            Be.remove(e, t)
        },
        _data: function (e, t, n) {
            return $e.access(e, t, n)
        },
        _removeData: function (e, t) {
            $e.remove(e, t)
        }
    }), Te.fn.extend({
        data: function (e, t) {
            var n, r, i, o = this[0],
                s = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = Be.get(o), 1 === o.nodeType && !$e.get(o, "hasDataAttrs"))) {
                    for (n = s.length; n--;) s[n] && (r = s[n].name, 0 === r.indexOf("data-") && (r = h(r.slice(5)), v(o, r, i[r])));
                    $e.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function () {
                Be.set(this, e)
            }) : We(this, function (t) {
                var n;
                if (o && void 0 === t) {
                    if (n = Be.get(o, e), void 0 !== n) return n;
                    if (n = v(o, e), void 0 !== n) return n
                } else this.each(function () {
                    Be.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function (e) {
            return this.each(function () {
                Be.remove(this, e)
            })
        }
    }), Te.extend({
        queue: function (e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = $e.get(e, t), n && (!r || Array.isArray(n) ? r = $e.access(e, t, Te.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var n = Te.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = Te._queueHooks(e, t),
                s = function () {
                    Te.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, s, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return $e.get(e, n) || $e.access(e, n, {
                empty: Te.Callbacks("once memory").add(function () {
                    $e.remove(e, [t + "queue", n])
                })
            })
        }
    }), Te.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? Te.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var n = Te.queue(this, e, t);
                Te._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && Te.dequeue(this, e)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                Te.dequeue(this, e)
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, t) {
            var n, r = 1,
                i = Te.Deferred(),
                o = this,
                s = this.length,
                a = function () {
                    --r || i.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) n = $e.get(o[s], e + "queueHooks"), n && n.empty && (r++, n.empty.add(a));
            return a(), i.promise(t)
        }
    });
    var Xe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Ue = new RegExp("^(?:([+-])=|)(" + Xe + ")([a-z%]*)$", "i"),
        Qe = ["Top", "Right", "Bottom", "Left"],
        Ve = function (e, t) {
            return e = t || e, "none" === e.style.display || "" === e.style.display && Te.contains(e.ownerDocument, e) && "none" === Te.css(e, "display")
        },
        Ge = function (e, t, n, r) {
            var i, o, s = {};
            for (o in t) s[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = s[o];
            return i
        },
        Ye = {};
    Te.fn.extend({
        show: function () {
            return w(this, !0)
        },
        hide: function () {
            return w(this)
        },
        toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                Ve(this) ? Te(this).show() : Te(this).hide()
            })
        }
    });
    var Ke = /^(?:checkbox|radio)$/i,
        Je = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        Ze = /^$|^module$|\/(?:java|ecma)script/i,
        et = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    et.optgroup = et.option, et.tbody = et.tfoot = et.colgroup = et.caption = et.thead, et.th = et.td;
    var tt = /<|&#?\w+;/;
    ! function () {
        var e = se.createDocumentFragment(),
            t = e.appendChild(se.createElement("div")),
            n = se.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), ve.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", ve.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var nt = se.documentElement,
        rt = /^key/,
        it = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        ot = /^([^.]*)(?:\.(.+)|)/;
    Te.event = {
        global: {},
        add: function (e, t, n, r, i) {
            var o, s, a, u, l, c, f, p, d, h, g, y = $e.get(e);
            if (y)
                for (n.handler && (o = n, n = o.handler, i = o.selector), i && Te.find.matchesSelector(nt, i), n.guid || (n.guid = Te.guid++), (u = y.events) || (u = y.events = {}), (s = y.handle) || (s = y.handle = function (t) {
                        return "undefined" != typeof Te && Te.event.triggered !== t.type ? Te.event.dispatch.apply(e, arguments) : void 0
                    }), t = (t || "").match(Oe) || [""], l = t.length; l--;) a = ot.exec(t[l]) || [], d = g = a[1], h = (a[2] || "").split(".").sort(), d && (f = Te.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = Te.event.special[d] || {}, c = Te.extend({
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && Te.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (p = u[d]) || (p = u[d] = [], p.delegateCount = 0, f.setup && f.setup.call(e, r, h, s) !== !1 || e.addEventListener && e.addEventListener(d, s)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), Te.event.global[d] = !0)
        },
        remove: function (e, t, n, r, i) {
            var o, s, a, u, l, c, f, p, d, h, g, y = $e.hasData(e) && $e.get(e);
            if (y && (u = y.events)) {
                for (t = (t || "").match(Oe) || [""], l = t.length; l--;)
                    if (a = ot.exec(t[l]) || [], d = g = a[1], h = (a[2] || "").split(".").sort(), d) {
                        for (f = Te.event.special[d] || {}, d = (r ? f.delegateType : f.bindType) || d, p = u[d] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = p.length; o--;) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        s && !p.length && (f.teardown && f.teardown.call(e, h, y.handle) !== !1 || Te.removeEvent(e, d, y.handle), delete u[d])
                    } else
                        for (d in u) Te.event.remove(e, d + t[l], n, r, !0);
                Te.isEmptyObject(u) && $e.remove(e, "handle events")
            }
        },
        dispatch: function (e) {
            var t, n, r, i, o, s, a = Te.event.fix(e),
                u = new Array(arguments.length),
                l = ($e.get(this, "events") || {})[a.type] || [],
                c = Te.event.special[a.type] || {};
            for (u[0] = a, t = 1; t < arguments.length; t++) u[t] = arguments[t];
            if (a.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, a) !== !1) {
                for (s = Te.event.handlers.call(this, a, l), t = 0;
                    (i = s[t++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = i.elem, n = 0;
                        (o = i.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, a.data = o.data, r = ((Te.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u), void 0 !== r && (a.result = r) === !1 && (a.preventDefault(), a.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, a), a.result
            }
        },
        handlers: function (e, t) {
            var n, r, i, o, s, a = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && e.button >= 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || l.disabled !== !0)) {
                        for (o = [], s = {}, n = 0; n < u; n++) r = t[n], i = r.selector + " ", void 0 === s[i] && (s[i] = r.needsContext ? Te(i, this).index(l) > -1 : Te.find(i, this, null, [l]).length), s[i] && o.push(r);
                        o.length && a.push({
                            elem: l,
                            handlers: o
                        })
                    } return l = this, u < t.length && a.push({
                elem: l,
                handlers: t.slice(u)
            }), a
        },
        addProp: function (e, t) {
            Object.defineProperty(Te.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: me(t) ? function () {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function (t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function (e) {
            return e[Te.expando] ? e : new Te.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== A() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    if (this === A() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && o(this, "input")) return this.click(), !1
                },
                _default: function (e) {
                    return o(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, Te.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, Te.Event = function (e, t) {
        return this instanceof Te.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? S : k, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && Te.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), void(this[Te.expando] = !0)) : new Te.Event(e, t)
    }, Te.Event.prototype = {
        constructor: Te.Event,
        isDefaultPrevented: k,
        isPropagationStopped: k,
        isImmediatePropagationStopped: k,
        isSimulated: !1,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = S, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = S, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = S, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, Te.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
            var t = e.button;
            return null == e.which && rt.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && it.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, Te.event.addProp), Te.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, t) {
        Te.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
                var n, r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                return i && (i === r || Te.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), Te.fn.extend({
        on: function (e, t, n, r) {
            return E(this, e, t, n, r)
        },
        one: function (e, t, n, r) {
            return E(this, e, t, n, r, 1)
        },
        off: function (e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, Te(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = k), this.each(function () {
                Te.event.remove(this, e, n, t)
            })
        }
    });
    var st = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        at = /<script|<style|<link/i,
        ut = /checked\s*(?:[^=]|=\s*.checked.)/i,
        lt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    Te.extend({
        htmlPrefilter: function (e) {
            return e.replace(st, "<$1></$2>")
        },
        clone: function (e, t, n) {
            var r, i, o, s, a = e.cloneNode(!0),
                u = Te.contains(e.ownerDocument, e);
            if (!(ve.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || Te.isXMLDoc(e)))
                for (s = b(a), o = b(e), r = 0, i = o.length; r < i; r++) L(o[r], s[r]);
            if (t)
                if (n)
                    for (o = o || b(e), s = s || b(a), r = 0, i = o.length; r < i; r++) q(o[r], s[r]);
                else q(e, a);
            return s = b(a, "script"), s.length > 0 && T(s, !u && b(e, "script")), a
        },
        cleanData: function (e) {
            for (var t, n, r, i = Te.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (Fe(n)) {
                    if (t = n[$e.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? Te.event.remove(n, r) : Te.removeEvent(n, r, t.handle);
                        n[$e.expando] = void 0
                    }
                    n[Be.expando] && (n[Be.expando] = void 0)
                }
        }
    }), Te.fn.extend({
        detach: function (e) {
            return O(this, e, !0)
        },
        remove: function (e) {
            return O(this, e)
        },
        text: function (e) {
            return We(this, function (e) {
                return void 0 === e ? Te.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function () {
            return H(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = D(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function () {
            return H(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = D(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function () {
            return H(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function () {
            return H(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (Te.cleanData(b(e, !1)), e.textContent = "");
            return this
        },
        clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return Te.clone(this, e, t)
            })
        },
        html: function (e) {
            return We(this, function (e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !at.test(e) && !et[(Je.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = Te.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) t = this[n] || {}, 1 === t.nodeType && (Te.cleanData(b(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (i) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function () {
            var e = [];
            return H(this, arguments, function (t) {
                var n = this.parentNode;
                Te.inArray(this, e) < 0 && (Te.cleanData(b(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), Te.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        Te.fn[e] = function (e) {
            for (var n, r = [], i = Te(e), o = i.length - 1, s = 0; s <= o; s++) n = s === o ? this : this.clone(!0), Te(i[s])[t](n), ce.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var ct = new RegExp("^(" + Xe + ")(?!px)[a-z%]+$", "i"),
        ft = function (t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        },
        pt = new RegExp(Qe.join("|"), "i");
    ! function () {
        function t() {
            if (l) {
                u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", nt.appendChild(u).appendChild(l);
                var t = e.getComputedStyle(l);
                r = "1%" !== t.top, a = 12 === n(t.marginLeft), l.style.right = "60%", s = 36 === n(t.right), i = 36 === n(t.width), l.style.position = "absolute", o = 36 === l.offsetWidth || "absolute", nt.removeChild(u), l = null
            }
        }

        function n(e) {
            return Math.round(parseFloat(e))
        }
        var r, i, o, s, a, u = se.createElement("div"),
            l = se.createElement("div");
        l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", ve.clearCloneStyle = "content-box" === l.style.backgroundClip, Te.extend(ve, {
            boxSizingReliable: function () {
                return t(), i
            },
            pixelBoxStyles: function () {
                return t(), s
            },
            pixelPosition: function () {
                return t(), r
            },
            reliableMarginLeft: function () {
                return t(), a
            },
            scrollboxSize: function () {
                return t(), o
            }
        }))
    }();
    var dt = /^(none|table(?!-c[ea]).+)/,
        ht = /^--/,
        gt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        yt = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        vt = ["Webkit", "Moz", "ms"],
        mt = se.createElement("div").style;
    Te.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = P(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, s, a = h(t),
                    u = ht.test(t),
                    l = e.style;
                return u || (t = M(a)), s = Te.cssHooks[t] || Te.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (i = s.get(e, !1, r)) ? i : l[t] : (o = typeof n, "string" === o && (i = Ue.exec(n)) && i[1] && (n = m(e, t, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (Te.cssNumber[a] ? "" : "px")), ve.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n)), void 0)
            }
        },
        css: function (e, t, n, r) {
            var i, o, s, a = h(t),
                u = ht.test(t);
            return u || (t = M(a)), s = Te.cssHooks[t] || Te.cssHooks[a], s && "get" in s && (i = s.get(e, !0, n)), void 0 === i && (i = P(e, t, r)), "normal" === i && t in yt && (i = yt[t]), "" === n || n ? (o = parseFloat(i), n === !0 || isFinite(o) ? o || 0 : i) : i
        }
    }), Te.each(["height", "width"], function (e, t) {
        Te.cssHooks[t] = {
            get: function (e, n, r) {
                if (n) return !dt.test(Te.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? $(e, t, r) : Ge(e, gt, function () {
                    return $(e, t, r)
                })
            },
            set: function (e, n, r) {
                var i, o = ft(e),
                    s = "border-box" === Te.css(e, "boxSizing", !1, o),
                    a = r && F(e, t, r, s, o);
                return s && ve.scrollboxSize() === o.position && (a -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - F(e, t, "border", !1, o) - .5)), a && (i = Ue.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = Te.css(e, t)), I(e, n, a)
            }
        }
    }), Te.cssHooks.marginLeft = R(ve.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(P(e, "marginLeft")) || e.getBoundingClientRect().left - Ge(e, {
            marginLeft: 0
        }, function () {
            return e.getBoundingClientRect().left
        })) + "px"
    }), Te.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (e, t) {
        Te.cssHooks[e + t] = {
            expand: function (n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + Qe[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, "margin" !== e && (Te.cssHooks[e + t].set = I)
    }), Te.fn.extend({
        css: function (e, t) {
            return We(this, function (e, t, n) {
                var r, i, o = {},
                    s = 0;
                if (Array.isArray(t)) {
                    for (r = ft(e), i = t.length; s < i; s++) o[t[s]] = Te.css(e, t[s], !1, r);
                    return o
                }
                return void 0 !== n ? Te.style(e, t, n) : Te.css(e, t)
            }, e, t, arguments.length > 1)
        }
    }), Te.Tween = B, B.prototype = {
        constructor: B,
        init: function (e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || Te.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (Te.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var e = B.propHooks[this.prop];
            return e && e.get ? e.get(this) : B.propHooks._default.get(this)
        },
        run: function (e) {
            var t, n = B.propHooks[this.prop];
            return this.options.duration ? this.pos = t = Te.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : B.propHooks._default.set(this), this
        }
    }, B.prototype.init.prototype = B.prototype, B.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = Te.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
            },
            set: function (e) {
                Te.fx.step[e.prop] ? Te.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[Te.cssProps[e.prop]] && !Te.cssHooks[e.prop] ? e.elem[e.prop] = e.now : Te.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, B.propHooks.scrollTop = B.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, Te.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, Te.fx = B.prototype.init, Te.fx.step = {};
    var xt, wt, bt = /^(?:toggle|show|hide)$/,
        Tt = /queueHooks$/;
    Te.Animation = Te.extend(G, {
            tweeners: {
                "*": [function (e, t) {
                    var n = this.createTween(e, t);
                    return m(n.elem, e, Ue.exec(t), n), n
                }]
            },
            tweener: function (e, t) {
                me(e) ? (t = e, e = ["*"]) : e = e.match(Oe);
                for (var n, r = 0, i = e.length; r < i; r++) n = e[r], G.tweeners[n] = G.tweeners[n] || [], G.tweeners[n].unshift(t)
            },
            prefilters: [Q],
            prefilter: function (e, t) {
                t ? G.prefilters.unshift(e) : G.prefilters.push(e)
            }
        }), Te.speed = function (e, t, n) {
            var r = e && "object" == typeof e ? Te.extend({}, e) : {
                complete: n || !n && t || me(e) && e,
                duration: e,
                easing: n && t || t && !me(t) && t
            };
            return Te.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in Te.fx.speeds ? r.duration = Te.fx.speeds[r.duration] : r.duration = Te.fx.speeds._default), null != r.queue && r.queue !== !0 || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
                me(r.old) && r.old.call(this), r.queue && Te.dequeue(this, r.queue)
            }, r
        }, Te.fn.extend({
            fadeTo: function (e, t, n, r) {
                return this.filter(Ve).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function (e, t, n, r) {
                var i = Te.isEmptyObject(e),
                    o = Te.speed(t, n, r),
                    s = function () {
                        var t = G(this, Te.extend({}, e), o);
                        (i || $e.get(this, "finish")) && t.stop(!0)
                    };
                return s.finish = s, i || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
            },
            stop: function (e, t, n) {
                var r = function (e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                    var t = !0,
                        i = null != e && e + "queueHooks",
                        o = Te.timers,
                        s = $e.get(this);
                    if (i) s[i] && s[i].stop && r(s[i]);
                    else
                        for (i in s) s[i] && s[i].stop && Tt.test(i) && r(s[i]);
                    for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n),
                        t = !1, o.splice(i, 1));
                    !t && n || Te.dequeue(this, e)
                })
            },
            finish: function (e) {
                return e !== !1 && (e = e || "fx"), this.each(function () {
                    var t, n = $e.get(this),
                        r = n[e + "queue"],
                        i = n[e + "queueHooks"],
                        o = Te.timers,
                        s = r ? r.length : 0;
                    for (n.finish = !0, Te.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; t < s; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), Te.each(["toggle", "show", "hide"], function (e, t) {
            var n = Te.fn[t];
            Te.fn[t] = function (e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(X(t, !0), e, r, i)
            }
        }), Te.each({
            slideDown: X("show"),
            slideUp: X("hide"),
            slideToggle: X("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (e, t) {
            Te.fn[e] = function (e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), Te.timers = [], Te.fx.tick = function () {
            var e, t = 0,
                n = Te.timers;
            for (xt = Date.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
            n.length || Te.fx.stop(), xt = void 0
        }, Te.fx.timer = function (e) {
            Te.timers.push(e), Te.fx.start()
        }, Te.fx.interval = 13, Te.fx.start = function () {
            wt || (wt = !0, z())
        }, Te.fx.stop = function () {
            wt = null
        }, Te.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, Te.fn.delay = function (t, n) {
            return t = Te.fx ? Te.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, r) {
                var i = e.setTimeout(n, t);
                r.stop = function () {
                    e.clearTimeout(i)
                }
            })
        },
        function () {
            var e = se.createElement("input"),
                t = se.createElement("select"),
                n = t.appendChild(se.createElement("option"));
            e.type = "checkbox", ve.checkOn = "" !== e.value, ve.optSelected = n.selected, e = se.createElement("input"), e.value = "t", e.type = "radio", ve.radioValue = "t" === e.value
        }();
    var Ct, St = Te.expr.attrHandle;
    Te.fn.extend({
        attr: function (e, t) {
            return We(this, Te.attr, e, t, arguments.length > 1)
        },
        removeAttr: function (e) {
            return this.each(function () {
                Te.removeAttr(this, e)
            })
        }
    }), Te.extend({
        attr: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? Te.prop(e, t, n) : (1 === o && Te.isXMLDoc(e) || (i = Te.attrHooks[t.toLowerCase()] || (Te.expr.match.bool.test(t) ? Ct : void 0)), void 0 !== n ? null === n ? void Te.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : (r = Te.find.attr(e, t), null == r ? void 0 : r))
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!ve.radioValue && "radio" === t && o(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function (e, t) {
            var n, r = 0,
                i = t && t.match(Oe);
            if (i && 1 === e.nodeType)
                for (; n = i[r++];) e.removeAttribute(n)
        }
    }), Ct = {
        set: function (e, t, n) {
            return t === !1 ? Te.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, Te.each(Te.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = St[t] || Te.find.attr;
        St[t] = function (e, t, r) {
            var i, o, s = t.toLowerCase();
            return r || (o = St[s], St[s] = i, i = null != n(e, t, r) ? s : null, St[s] = o), i
        }
    });
    var kt = /^(?:input|select|textarea|button)$/i,
        At = /^(?:a|area)$/i;
    Te.fn.extend({
        prop: function (e, t) {
            return We(this, Te.prop, e, t, arguments.length > 1)
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[Te.propFix[e] || e]
            })
        }
    }), Te.extend({
        prop: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && Te.isXMLDoc(e) || (t = Te.propFix[t] || t, i = Te.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = Te.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : kt.test(e.nodeName) || At.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), ve.optSelected || (Te.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), Te.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        Te.propFix[this.toLowerCase()] = this
    }), Te.fn.extend({
        addClass: function (e) {
            var t, n, r, i, o, s, a, u = 0;
            if (me(e)) return this.each(function (t) {
                Te(this).addClass(e.call(this, t, K(this)))
            });
            if (t = J(e), t.length)
                for (; n = this[u++];)
                    if (i = K(n), r = 1 === n.nodeType && " " + Y(i) + " ") {
                        for (s = 0; o = t[s++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        a = Y(r), i !== a && n.setAttribute("class", a)
                    } return this
        },
        removeClass: function (e) {
            var t, n, r, i, o, s, a, u = 0;
            if (me(e)) return this.each(function (t) {
                Te(this).removeClass(e.call(this, t, K(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if (t = J(e), t.length)
                for (; n = this[u++];)
                    if (i = K(n), r = 1 === n.nodeType && " " + Y(i) + " ") {
                        for (s = 0; o = t[s++];)
                            for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
                        a = Y(r), i !== a && n.setAttribute("class", a)
                    } return this
        },
        toggleClass: function (e, t) {
            var n = typeof e,
                r = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : me(e) ? this.each(function (n) {
                Te(this).toggleClass(e.call(this, n, K(this), t), t)
            }) : this.each(function () {
                var t, i, o, s;
                if (r)
                    for (i = 0, o = Te(this), s = J(e); t = s[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else void 0 !== e && "boolean" !== n || (t = K(this), t && $e.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : $e.get(this, "__className__") || ""))
            })
        },
        hasClass: function (e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++];)
                if (1 === n.nodeType && (" " + Y(K(n)) + " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var Et = /\r/g;
    Te.fn.extend({
        val: function (e) {
            var t, n, r, i = this[0]; {
                if (arguments.length) return r = me(e), this.each(function (n) {
                    var i;
                    1 === this.nodeType && (i = r ? e.call(this, n, Te(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = Te.map(i, function (e) {
                        return null == e ? "" : e + ""
                    })), t = Te.valHooks[this.type] || Te.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                });
                if (i) return t = Te.valHooks[i.type] || Te.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(Et, "") : null == n ? "" : n)
            }
        }
    }), Te.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = Te.find.attr(e, "value");
                    return null != t ? t : Y(Te.text(e))
                }
            },
            select: {
                get: function (e) {
                    var t, n, r, i = e.options,
                        s = e.selectedIndex,
                        a = "select-one" === e.type,
                        u = a ? null : [],
                        l = a ? s + 1 : i.length;
                    for (r = s < 0 ? l : a ? s : 0; r < l; r++)
                        if (n = i[r], (n.selected || r === s) && !n.disabled && (!n.parentNode.disabled || !o(n.parentNode, "optgroup"))) {
                            if (t = Te(n).val(), a) return t;
                            u.push(t)
                        } return u
                },
                set: function (e, t) {
                    for (var n, r, i = e.options, o = Te.makeArray(t), s = i.length; s--;) r = i[s], (r.selected = Te.inArray(Te.valHooks.option.get(r), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), Te.each(["radio", "checkbox"], function () {
        Te.valHooks[this] = {
            set: function (e, t) {
                if (Array.isArray(t)) return e.checked = Te.inArray(Te(e).val(), t) > -1
            }
        }, ve.checkOn || (Te.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), ve.focusin = "onfocusin" in e;
    var Dt = /^(?:focusinfocus|focusoutblur)$/,
        Nt = function (e) {
            e.stopPropagation()
        };
    Te.extend(Te.event, {
        trigger: function (t, n, r, i) {
            var o, s, a, u, l, c, f, p, d = [r || se],
                h = he.call(t, "type") ? t.type : t,
                g = he.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = p = a = r = r || se, 3 !== r.nodeType && 8 !== r.nodeType && !Dt.test(h + Te.event.triggered) && (h.indexOf(".") > -1 && (g = h.split("."), h = g.shift(), g.sort()), l = h.indexOf(":") < 0 && "on" + h, t = t[Te.expando] ? t : new Te.Event(h, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = g.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : Te.makeArray(n, [t]), f = Te.event.special[h] || {}, i || !f.trigger || f.trigger.apply(r, n) !== !1)) {
                if (!i && !f.noBubble && !xe(r)) {
                    for (u = f.delegateType || h, Dt.test(u + h) || (s = s.parentNode); s; s = s.parentNode) d.push(s), a = s;
                    a === (r.ownerDocument || se) && d.push(a.defaultView || a.parentWindow || e)
                }
                for (o = 0;
                    (s = d[o++]) && !t.isPropagationStopped();) p = s, t.type = o > 1 ? u : f.bindType || h, c = ($e.get(s, "events") || {})[t.type] && $e.get(s, "handle"), c && c.apply(s, n), c = l && s[l], c && c.apply && Fe(s) && (t.result = c.apply(s, n), t.result === !1 && t.preventDefault());
                return t.type = h, i || t.isDefaultPrevented() || f._default && f._default.apply(d.pop(), n) !== !1 || !Fe(r) || l && me(r[h]) && !xe(r) && (a = r[l], a && (r[l] = null), Te.event.triggered = h, t.isPropagationStopped() && p.addEventListener(h, Nt), r[h](), t.isPropagationStopped() && p.removeEventListener(h, Nt), Te.event.triggered = void 0, a && (r[l] = a)), t.result
            }
        },
        simulate: function (e, t, n) {
            var r = Te.extend(new Te.Event, n, {
                type: e,
                isSimulated: !0
            });
            Te.event.trigger(r, null, t)
        }
    }), Te.fn.extend({
        trigger: function (e, t) {
            return this.each(function () {
                Te.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return Te.event.trigger(e, t, n, !0)
        }
    }), ve.focusin || Te.each({
        focus: "focusin",
        blur: "focusout"
    }, function (e, t) {
        var n = function (e) {
            Te.event.simulate(t, e.target, Te.event.fix(e))
        };
        Te.event.special[t] = {
            setup: function () {
                var r = this.ownerDocument || this,
                    i = $e.access(r, t);
                i || r.addEventListener(e, n, !0), $e.access(r, t, (i || 0) + 1)
            },
            teardown: function () {
                var r = this.ownerDocument || this,
                    i = $e.access(r, t) - 1;
                i ? $e.access(r, t, i) : (r.removeEventListener(e, n, !0), $e.remove(r, t))
            }
        }
    });
    var jt = e.location,
        qt = Date.now(),
        Lt = /\?/;
    Te.parseXML = function (t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (r) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || Te.error("Invalid XML: " + t), n
    };
    var Ht = /\[\]$/,
        Ot = /\r?\n/g,
        Pt = /^(?:submit|button|image|reset|file)$/i,
        Rt = /^(?:input|select|textarea|keygen)/i;
    Te.param = function (e, t) {
        var n, r = [],
            i = function (e, t) {
                var n = me(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (Array.isArray(e) || e.jquery && !Te.isPlainObject(e)) Te.each(e, function () {
            i(this.name, this.value)
        });
        else
            for (n in e) Z(n, e[n], t, i);
        return r.join("&")
    }, Te.fn.extend({
        serialize: function () {
            return Te.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var e = Te.prop(this, "elements");
                return e ? Te.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !Te(this).is(":disabled") && Rt.test(this.nodeName) && !Pt.test(e) && (this.checked || !Ke.test(e))
            }).map(function (e, t) {
                var n = Te(this).val();
                return null == n ? null : Array.isArray(n) ? Te.map(n, function (e) {
                    return {
                        name: t.name,
                        value: e.replace(Ot, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Ot, "\r\n")
                }
            }).get()
        }
    });
    var Wt = /%20/g,
        Mt = /#.*$/,
        It = /([?&])_=[^&]*/,
        Ft = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        $t = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Bt = /^(?:GET|HEAD)$/,
        zt = /^\/\//,
        _t = {},
        Xt = {},
        Ut = "*/".concat("*"),
        Qt = se.createElement("a");
    Qt.href = jt.href, Te.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: jt.href,
            type: "GET",
            isLocal: $t.test(jt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ut,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": Te.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (e, t) {
            return t ? ne(ne(e, Te.ajaxSettings), t) : ne(Te.ajaxSettings, e)
        },
        ajaxPrefilter: ee(_t),
        ajaxTransport: ee(Xt),
        ajax: function (t, n) {
            function r(t, n, r, a) {
                var l, p, d, w, b, T = n;
                c || (c = !0, u && e.clearTimeout(u), i = void 0, s = a || "", C.readyState = t > 0 ? 4 : 0, l = t >= 200 && t < 300 || 304 === t, r && (w = re(h, C, r)), w = ie(h, w, C, l), l ? (h.ifModified && (b = C.getResponseHeader("Last-Modified"), b && (Te.lastModified[o] = b), b = C.getResponseHeader("etag"), b && (Te.etag[o] = b)), 204 === t || "HEAD" === h.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = w.state, p = w.data, d = w.error, l = !d)) : (d = T, !t && T || (T = "error", t < 0 && (t = 0))), C.status = t, C.statusText = (n || T) + "", l ? v.resolveWith(g, [p, T, C]) : v.rejectWith(g, [C, T, d]), C.statusCode(x), x = void 0, f && y.trigger(l ? "ajaxSuccess" : "ajaxError", [C, h, l ? p : d]), m.fireWith(g, [C, T]), f && (y.trigger("ajaxComplete", [C, h]), --Te.active || Te.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var i, o, s, a, u, l, c, f, p, d, h = Te.ajaxSetup({}, n),
                g = h.context || h,
                y = h.context && (g.nodeType || g.jquery) ? Te(g) : Te.event,
                v = Te.Deferred(),
                m = Te.Callbacks("once memory"),
                x = h.statusCode || {},
                w = {},
                b = {},
                T = "canceled",
                C = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (c) {
                            if (!a)
                                for (a = {}; t = Ft.exec(s);) a[t[1].toLowerCase()] = t[2];
                            t = a[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return c ? s : null
                    },
                    setRequestHeader: function (e, t) {
                        return null == c && (e = b[e.toLowerCase()] = b[e.toLowerCase()] || e, w[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return null == c && (h.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (c) C.always(e[C.status]);
                            else
                                for (t in e) x[t] = [x[t], e[t]];
                        return this
                    },
                    abort: function (e) {
                        var t = e || T;
                        return i && i.abort(t), r(0, t), this
                    }
                };
            if (v.promise(C), h.url = ((t || h.url || jt.href) + "").replace(zt, jt.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(Oe) || [""], null == h.crossDomain) {
                l = se.createElement("a");
                try {
                    l.href = h.url, l.href = l.href, h.crossDomain = Qt.protocol + "//" + Qt.host != l.protocol + "//" + l.host
                } catch (S) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = Te.param(h.data, h.traditional)), te(_t, h, n, C), c) return C;
            f = Te.event && h.global, f && 0 === Te.active++ && Te.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Bt.test(h.type), o = h.url.replace(Mt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Wt, "+")) : (d = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (Lt.test(o) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (o = o.replace(It, "$1"), d = (Lt.test(o) ? "&" : "?") + "_=" + qt++ + d), h.url = o + d), h.ifModified && (Te.lastModified[o] && C.setRequestHeader("If-Modified-Since", Te.lastModified[o]), Te.etag[o] && C.setRequestHeader("If-None-Match", Te.etag[o])), (h.data && h.hasContent && h.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", h.contentType), C.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Ut + "; q=0.01" : "") : h.accepts["*"]);
            for (p in h.headers) C.setRequestHeader(p, h.headers[p]);
            if (h.beforeSend && (h.beforeSend.call(g, C, h) === !1 || c)) return C.abort();
            if (T = "abort", m.add(h.complete), C.done(h.success), C.fail(h.error), i = te(Xt, h, n, C)) {
                if (C.readyState = 1, f && y.trigger("ajaxSend", [C, h]), c) return C;
                h.async && h.timeout > 0 && (u = e.setTimeout(function () {
                    C.abort("timeout")
                }, h.timeout));
                try {
                    c = !1, i.send(w, r)
                } catch (S) {
                    if (c) throw S;
                    r(-1, S)
                }
            } else r(-1, "No Transport");
            return C
        },
        getJSON: function (e, t, n) {
            return Te.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return Te.get(e, void 0, t, "script")
        }
    }), Te.each(["get", "post"], function (e, t) {
        Te[t] = function (e, n, r, i) {
            return me(n) && (i = i || r, r = n, n = void 0), Te.ajax(Te.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            }, Te.isPlainObject(e) && e))
        }
    }), Te._evalUrl = function (e) {
        return Te.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }, Te.fn.extend({
        wrapAll: function (e) {
            var t;
            return this[0] && (me(e) && (e = e.call(this[0])), t = Te(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function (e) {
            return me(e) ? this.each(function (t) {
                Te(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = Te(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function (e) {
            var t = me(e);
            return this.each(function (n) {
                Te(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function (e) {
            return this.parent(e).not("body").each(function () {
                Te(this).replaceWith(this.childNodes)
            }), this
        }
    }), Te.expr.pseudos.hidden = function (e) {
        return !Te.expr.pseudos.visible(e)
    }, Te.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, Te.ajaxSettings.xhr = function () {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    };
    var Vt = {
            0: 200,
            1223: 204
        },
        Gt = Te.ajaxSettings.xhr();
    ve.cors = !!Gt && "withCredentials" in Gt, ve.ajax = Gt = !!Gt, Te.ajaxTransport(function (t) {
        var n, r;
        if (ve.cors || Gt && !t.crossDomain) return {
            send: function (i, o) {
                var s, a = t.xhr();
                if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (s in t.xhrFields) a[s] = t.xhrFields[s];
                t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                for (s in i) a.setRequestHeader(s, i[s]);
                n = function (e) {
                    return function () {
                        n && (n = r = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Vt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                            binary: a.response
                        } : {
                            text: a.responseText
                        }, a.getAllResponseHeaders()))
                    }
                }, a.onload = n(), r = a.onerror = a.ontimeout = n("error"), void 0 !== a.onabort ? a.onabort = r : a.onreadystatechange = function () {
                    4 === a.readyState && e.setTimeout(function () {
                        n && r()
                    })
                }, n = n("abort");
                try {
                    a.send(t.hasContent && t.data || null)
                } catch (u) {
                    if (n) throw u
                }
            },
            abort: function () {
                n && n()
            }
        }
    }), Te.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1)
    }), Te.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function (e) {
                return Te.globalEval(e), e
            }
        }
    }), Te.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), Te.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function (r, i) {
                    t = Te("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function (e) {
                        t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                    }), se.head.appendChild(t[0])
                },
                abort: function () {
                    n && n()
                }
            }
        }
    });
    var Yt = [],
        Kt = /(=)\?(?=&|$)|\?\?/;
    Te.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = Yt.pop() || Te.expando + "_" + qt++;
            return this[e] = !0, e
        }
    }), Te.ajaxPrefilter("json jsonp", function (t, n, r) {
        var i, o, s, a = t.jsonp !== !1 && (Kt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Kt.test(t.data) && "data");
        if (a || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = me(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Kt, "$1" + i) : t.jsonp !== !1 && (t.url += (Lt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
            return s || Te.error(i + " was not called"), s[0]
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function () {
            s = arguments
        }, r.always(function () {
            void 0 === o ? Te(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Yt.push(i)), s && me(o) && o(s[0]), s = o = void 0
        }), "script"
    }), ve.createHTMLDocument = function () {
        var e = se.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
    }(), Te.parseHTML = function (e, t, n) {
        if ("string" != typeof e) return [];
        "boolean" == typeof t && (n = t, t = !1);
        var r, i, o;
        return t || (ve.createHTMLDocument ? (t = se.implementation.createHTMLDocument(""), r = t.createElement("base"), r.href = se.location.href, t.head.appendChild(r)) : t = se), i = De.exec(e), o = !n && [], i ? [t.createElement(i[1])] : (i = C([e], t, o), o && o.length && Te(o).remove(), Te.merge([], i.childNodes))
    }, Te.fn.load = function (e, t, n) {
        var r, i, o, s = this,
            a = e.indexOf(" ");
        return a > -1 && (r = Y(e.slice(a)), e = e.slice(0, a)), me(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), s.length > 0 && Te.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function (e) {
            o = arguments, s.html(r ? Te("<div>").append(Te.parseHTML(e)).find(r) : e)
        }).always(n && function (e, t) {
            s.each(function () {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, Te.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        Te.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), Te.expr.pseudos.animated = function (e) {
        return Te.grep(Te.timers, function (t) {
            return e === t.elem
        }).length
    }, Te.offset = {
        setOffset: function (e, t, n) {
            var r, i, o, s, a, u, l, c = Te.css(e, "position"),
                f = Te(e),
                p = {};
            "static" === c && (e.style.position = "relative"), a = f.offset(), o = Te.css(e, "top"), u = Te.css(e, "left"), l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1, l ? (r = f.position(), s = r.top, i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(u) || 0), me(t) && (t = t.call(e, n, Te.extend({}, a))), null != t.top && (p.top = t.top - a.top + s), null != t.left && (p.left = t.left - a.left + i), "using" in t ? t.using.call(e, p) : f.css(p)
        }
    }, Te.fn.extend({
        offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                Te.offset.setOffset(this, e, t)
            });
            var t, n, r = this[0];
            if (r) return r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            }
        },
        position: function () {
            if (this[0]) {
                var e, t, n, r = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === Te.css(r, "position")) t = r.getBoundingClientRect();
                else {
                    for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === Te.css(e, "position");) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && (i = Te(e).offset(), i.top += Te.css(e, "borderTopWidth", !0), i.left += Te.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - Te.css(r, "marginTop", !0),
                    left: t.left - i.left - Te.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent; e && "static" === Te.css(e, "position");) e = e.offsetParent;
                return e || nt
            })
        }
    }), Te.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (e, t) {
        var n = "pageYOffset" === t;
        Te.fn[e] = function (r) {
            return We(this, function (e, r, i) {
                var o;
                return xe(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i ? o ? o[t] : e[r] : void(o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i)
            }, e, r, arguments.length)
        }
    }), Te.each(["top", "left"], function (e, t) {
        Te.cssHooks[t] = R(ve.pixelPosition, function (e, n) {
            if (n) return n = P(e, t), ct.test(n) ? Te(e).position()[t] + "px" : n
        })
    }), Te.each({
        Height: "height",
        Width: "width"
    }, function (e, t) {
        Te.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function (n, r) {
            Te.fn[r] = function (i, o) {
                var s = arguments.length && (n || "boolean" != typeof i),
                    a = n || (i === !0 || o === !0 ? "margin" : "border");
                return We(this, function (t, n, i) {
                    var o;
                    return xe(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? Te.css(t, n, a) : Te.style(t, n, i, a)
                }, t, s ? i : void 0, s)
            }
        })
    }), Te.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
        Te.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), Te.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), Te.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), Te.proxy = function (e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t], t = e, e = n), me(e)) return r = ue.call(arguments, 2), i = function () {
            return e.apply(t || this, r.concat(ue.call(arguments)))
        }, i.guid = e.guid = e.guid || Te.guid++, i
    }, Te.holdReady = function (e) {
        e ? Te.readyWait++ : Te.ready(!0)
    }, Te.isArray = Array.isArray, Te.parseJSON = JSON.parse, Te.nodeName = o, Te.isFunction = me, Te.isWindow = xe, Te.camelCase = h, Te.type = r, Te.now = Date.now, Te.isNumeric = function (e) {
        var t = Te.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, "function" == typeof define && define.amd && define("jquery", [], function () {
        return Te
    });
    var Jt = e.jQuery,
        Zt = e.$;
    return Te.noConflict = function (t) {
        return e.$ === Te && (e.$ = Zt), t && e.jQuery === Te && (e.jQuery = Jt), Te
    }, t || (e.jQuery = e.$ = Te), Te
}),
function () {
    "use strict";

    function e(r) {
        if (!r) throw new Error("No options passed to Waypoint constructor");
        if (!r.element) throw new Error("No element option passed to Waypoint constructor");
        if (!r.handler) throw new Error("No handler option passed to Waypoint constructor");
        this.key = "waypoint-" + t, this.options = e.Adapter.extend({}, e.defaults, r), this.element = this.options.element, this.adapter = new e.Adapter(this.element), this.callback = r.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = e.Group.findOrCreate({
            name: this.options.group,
            axis: this.axis
        }), this.context = e.Context.findOrCreateByElement(this.options.context), e.offsetAliases[this.options.offset] && (this.options.offset = e.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), n[this.key] = this, t += 1
    }
    var t = 0,
        n = {};
    e.prototype.queueTrigger = function (e) {
        this.group.queueTrigger(this, e)
    }, e.prototype.trigger = function (e) {
        this.enabled && this.callback && this.callback.apply(this, e)
    }, e.prototype.destroy = function () {
        this.context.remove(this), this.group.remove(this), delete n[this.key]
    }, e.prototype.disable = function () {
        return this.enabled = !1, this
    }, e.prototype.enable = function () {
        return this.context.refresh(), this.enabled = !0, this
    }, e.prototype.next = function () {
        return this.group.next(this)
    }, e.prototype.previous = function () {
        return this.group.previous(this)
    }, e.invokeAll = function (e) {
        var t = [];
        for (var r in n) t.push(n[r]);
        for (var i = 0, o = t.length; i < o; i++) t[i][e]()
    }, e.destroyAll = function () {
        e.invokeAll("destroy")
    }, e.disableAll = function () {
        e.invokeAll("disable")
    }, e.enableAll = function () {
        e.Context.refreshAll();
        for (var t in n) n[t].enabled = !0;
        return this
    }, e.refreshAll = function () {
        e.Context.refreshAll()
    }, e.viewportHeight = function () {
        return window.innerHeight || document.documentElement.clientHeight
    }, e.viewportWidth = function () {
        return document.documentElement.clientWidth
    }, e.adapters = [], e.defaults = {
        context: window,
        continuous: !0,
        enabled: !0,
        group: "default",
        horizontal: !1,
        offset: 0
    }, e.offsetAliases = {
        "bottom-in-view": function () {
            return this.context.innerHeight() - this.adapter.outerHeight()
        },
        "right-in-view": function () {
            return this.context.innerWidth() - this.adapter.outerWidth()
        }
    }, window.Waypoint = e
}(),
function () {
    "use strict";

    function e(e) {
        window.setTimeout(e, 1e3 / 60)
    }

    function t(e) {
        this.element = e, this.Adapter = i.Adapter, this.adapter = new this.Adapter(e), this.key = "waypoint-context-" + n, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
            x: this.adapter.scrollLeft(),
            y: this.adapter.scrollTop()
        }, this.waypoints = {
            vertical: {},
            horizontal: {}
        }, e.waypointContextKey = this.key, r[e.waypointContextKey] = this, n += 1, i.windowContext || (i.windowContext = !0, i.windowContext = new t(window)), this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
    }
    var n = 0,
        r = {},
        i = window.Waypoint,
        o = window.onload;
    t.prototype.add = function (e) {
        var t = e.options.horizontal ? "horizontal" : "vertical";
        this.waypoints[t][e.key] = e, this.refresh()
    }, t.prototype.checkEmpty = function () {
        var e = this.Adapter.isEmptyObject(this.waypoints.horizontal),
            t = this.Adapter.isEmptyObject(this.waypoints.vertical),
            n = this.element == this.element.window;
        e && t && !n && (this.adapter.off(".waypoints"), delete r[this.key])
    }, t.prototype.createThrottledResizeHandler = function () {
        function e() {
            t.handleResize(), t.didResize = !1
        }
        var t = this;
        this.adapter.on("resize.waypoints", function () {
            t.didResize || (t.didResize = !0, i.requestAnimationFrame(e))
        })
    }, t.prototype.createThrottledScrollHandler = function () {
        function e() {
            t.handleScroll(), t.didScroll = !1
        }
        var t = this;
        this.adapter.on("scroll.waypoints", function () {
            t.didScroll && !i.isTouch || (t.didScroll = !0, i.requestAnimationFrame(e))
        })
    }, t.prototype.handleResize = function () {
        i.Context.refreshAll()
    }, t.prototype.handleScroll = function () {
        var e = {},
            t = {
                horizontal: {
                    newScroll: this.adapter.scrollLeft(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left"
                },
                vertical: {
                    newScroll: this.adapter.scrollTop(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up"
                }
            };
        for (var n in t) {
            var r = t[n],
                i = r.newScroll > r.oldScroll,
                o = i ? r.forward : r.backward;
            for (var s in this.waypoints[n]) {
                var a = this.waypoints[n][s];
                if (null !== a.triggerPoint) {
                    var u = r.oldScroll < a.triggerPoint,
                        l = r.newScroll >= a.triggerPoint,
                        c = u && l,
                        f = !u && !l;
                    (c || f) && (a.queueTrigger(o), e[a.group.id] = a.group)
                }
            }
        }
        for (var p in e) e[p].flushTriggers();
        this.oldScroll = {
            x: t.horizontal.newScroll,
            y: t.vertical.newScroll
        }
    }, t.prototype.innerHeight = function () {
        return this.element == this.element.window ? i.viewportHeight() : this.adapter.innerHeight()
    }, t.prototype.remove = function (e) {
        delete this.waypoints[e.axis][e.key], this.checkEmpty()
    }, t.prototype.innerWidth = function () {
        return this.element == this.element.window ? i.viewportWidth() : this.adapter.innerWidth()
    }, t.prototype.destroy = function () {
        var e = [];
        for (var t in this.waypoints)
            for (var n in this.waypoints[t]) e.push(this.waypoints[t][n]);
        for (var r = 0, i = e.length; r < i; r++) e[r].destroy()
    }, t.prototype.refresh = function () {
        var e, t = this.element == this.element.window,
            n = t ? void 0 : this.adapter.offset(),
            r = {};
        this.handleScroll(), e = {
            horizontal: {
                contextOffset: t ? 0 : n.left,
                contextScroll: t ? 0 : this.oldScroll.x,
                contextDimension: this.innerWidth(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left",
                offsetProp: "left"
            },
            vertical: {
                contextOffset: t ? 0 : n.top,
                contextScroll: t ? 0 : this.oldScroll.y,
                contextDimension: this.innerHeight(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up",
                offsetProp: "top"
            }
        };
        for (var o in e) {
            var s = e[o];
            for (var a in this.waypoints[o]) {
                var u, l, c, f, p, d = this.waypoints[o][a],
                    h = d.options.offset,
                    g = d.triggerPoint,
                    y = 0,
                    v = null == g;
                d.element !== d.element.window && (y = d.adapter.offset()[s.offsetProp]), "function" == typeof h ? h = h.apply(d) : "string" == typeof h && (h = parseFloat(h), d.options.offset.indexOf("%") > -1 && (h = Math.ceil(s.contextDimension * h / 100))), u = s.contextScroll - s.contextOffset, d.triggerPoint = Math.floor(y + u - h), l = g < s.oldScroll, c = d.triggerPoint >= s.oldScroll, f = l && c, p = !l && !c, !v && f ? (d.queueTrigger(s.backward), r[d.group.id] = d.group) : !v && p ? (d.queueTrigger(s.forward), r[d.group.id] = d.group) : v && s.oldScroll >= d.triggerPoint && (d.queueTrigger(s.forward), r[d.group.id] = d.group)
            }
        }
        return i.requestAnimationFrame(function () {
            for (var e in r) r[e].flushTriggers()
        }), this
    }, t.findOrCreateByElement = function (e) {
        return t.findByElement(e) || new t(e)
    }, t.refreshAll = function () {
        for (var e in r) r[e].refresh()
    }, t.findByElement = function (e) {
        return r[e.waypointContextKey]
    }, window.onload = function () {
        o && o(), t.refreshAll()
    }, i.requestAnimationFrame = function (t) {
        var n = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || e;
        n.call(window, t)
    }, i.Context = t
}(),
function () {
    "use strict";

    function e(e, t) {
        return e.triggerPoint - t.triggerPoint
    }

    function t(e, t) {
        return t.triggerPoint - e.triggerPoint
    }

    function n(e) {
        this.name = e.name, this.axis = e.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), r[this.axis][this.name] = this
    }
    var r = {
            vertical: {},
            horizontal: {}
        },
        i = window.Waypoint;
    n.prototype.add = function (e) {
        this.waypoints.push(e)
    }, n.prototype.clearTriggerQueues = function () {
        this.triggerQueues = {
            up: [],
            down: [],
            left: [],
            right: []
        }
    }, n.prototype.flushTriggers = function () {
        for (var n in this.triggerQueues) {
            var r = this.triggerQueues[n],
                i = "up" === n || "left" === n;
            r.sort(i ? t : e);
            for (var o = 0, s = r.length; o < s; o += 1) {
                var a = r[o];
                (a.options.continuous || o === r.length - 1) && a.trigger([n])
            }
        }
        this.clearTriggerQueues()
    }, n.prototype.next = function (t) {
        this.waypoints.sort(e);
        var n = i.Adapter.inArray(t, this.waypoints),
            r = n === this.waypoints.length - 1;
        return r ? null : this.waypoints[n + 1]
    }, n.prototype.previous = function (t) {
        this.waypoints.sort(e);
        var n = i.Adapter.inArray(t, this.waypoints);
        return n ? this.waypoints[n - 1] : null
    }, n.prototype.queueTrigger = function (e, t) {
        this.triggerQueues[t].push(e)
    }, n.prototype.remove = function (e) {
        var t = i.Adapter.inArray(e, this.waypoints);
        t > -1 && this.waypoints.splice(t, 1)
    }, n.prototype.first = function () {
        return this.waypoints[0]
    }, n.prototype.last = function () {
        return this.waypoints[this.waypoints.length - 1]
    }, n.findOrCreate = function (e) {
        return r[e.axis][e.name] || new n(e)
    }, i.Group = n
}(),
function () {
    "use strict";

    function e(e) {
        this.$element = t(e)
    }
    var t = window.jQuery,
        n = window.Waypoint;
    t.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function (t, n) {
        e.prototype[n] = function () {
            var e = Array.prototype.slice.call(arguments);
            return this.$element[n].apply(this.$element, e)
        }
    }), t.each(["extend", "inArray", "isEmptyObject"], function (n, r) {
        e[r] = t[r]
    }), n.adapters.push({
        name: "jquery",
        Adapter: e
    }), n.Adapter = e
}(),
function () {
    "use strict";

    function e(e) {
        return function () {
            var n = [],
                r = arguments[0];
            return e.isFunction(arguments[0]) && (r = e.extend({}, arguments[1]), r.handler = arguments[0]), this.each(function () {
                var i = e.extend({}, r, {
                    element: this
                });
                "string" == typeof i.context && (i.context = e(this).closest(i.context)[0]), n.push(new t(i))
            }), n
        }
    }
    var t = window.Waypoint;
    window.jQuery && (window.jQuery.fn.waypoint = e(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = e(window.Zepto))
}();
